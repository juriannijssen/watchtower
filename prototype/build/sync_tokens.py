#!/usr/bin/env python3
"""Generate the design system into prototype/styles.css.

`figma design/design-tokens.json` is the one place a design value is kept, and
the one place to change one by hand. This script turns it into two marked
blocks in styles.css, and nothing else writes them:

  tokens:start … tokens:end    at the top of the file
    Brand collection   -> primitives (--sky-50, --white, --gray-50 ...), the
                          scale, letter spacing, font weights and font stacks
    Alias collection   -> semantic colours (--bg-*, --fg-*, --stroke-*,
                          --shadcn-*), pointing at the primitives with var()
                          the way Figma's aliases point at the Brand variables
    Alias Dark theme   -> the same names under :root[data-theme="dark"]
    Effect styles      -> --shadow-*
    Layout collection  -> the --cm-* page layout on .cm, per breakpoint

  type:start … type:end        where the text styles have always been
    Text styles        -> the .ts-* classes, the step each takes on a phone,
                          and paragraph spacing between two consecutive
                          paragraphs of the same style

The build (render_commitments.py) runs this first, so changing a value is: edit
the JSON, run the build. Figma is kept in step on request, and the differences
both ways are shown before anything is overwritten.

Usage:  python3 prototype/build/sync_tokens.py [--check]
        --check exits 1 without writing if styles.css is out of date.
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
PROTO = os.path.dirname(HERE)
REPO = os.path.dirname(PROTO)
SRC = os.path.join(REPO, "figma design", "design-tokens.json")
CSS = os.path.join(PROTO, "styles.css")
START, END = "/* tokens:start */", "/* tokens:end */"
TYPE_START, TYPE_END = "/* type:start */", "/* type:end */"

# The family is Figma's; the fallbacks behind it are the prototype's.
FONT_STACKS = {
    "Font Family/body": ("--font-body",
                         '"{}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n'
                         '    Helvetica, Arial, sans-serif'),
    "Font Family/titles": ("--font-display", '"{}", var(--font-body)'),
    "Font Family/quotes": ("--font-quote", '"{}", Georgia, "Times New Roman", serif'),
}
WEIGHTS = {"Regular": 400, "Medium": 500, "Semi Bold": 600, "SemiBold": 600, "Bold": 700}
SEMANTIC = {"Background": "bg", "Foreground": "fg", "Stroke": "stroke", "Shadcn": "shadcn"}
SEMANTIC_ORDER = ["Background", "Foreground", "Stroke", "Shadcn"]
# Aliases Figma points at variables that are not in this file; resolved to the
# local variable with the same value.
EXTERNAL = {"Default/Gray/50": "--gray-50"}

# Text styles: the family decides the font stack and the letter spacing, the
# style word the weight token.
FAMILY = {"Lora": ("--font-quote", "--ls-quotes"),
          "Poppins": ("--font-display", "--ls-titles"),
          "Inter": ("--font-body", "--ls-body")}
WEIGHT_VAR = {"Regular": "--fw-regular", "Medium": "--fw-medium",
              "Semi Bold": "--fw-semibold", "SemiBold": "--fw-semibold", "Bold": "--fw-bold"}
CASE = {"UPPER": "uppercase", "TITLE": "capitalize"}
# Figma text style -> the .ts-* class the pages use.
TEXT_CLASS = {
    "quote/display": "ts-quote-display", "quote/extra_large": "ts-quote-xl",
    "quote/large": "ts-quote-lg", "quote/medium": "ts-quote-md",
    "quote/small": "ts-quote-sm", "quote/extra_small": "ts-quote-xs",
    "title/display": "ts-title-display", "title/extra_large": "ts-title-xl",
    "title/large": "ts-title-lg", "title/medium": "ts-title-md",
    "title/small": "ts-title-sm", "title/extra_small": "ts-title-xs",
    "number/large": "ts-number-lg",
    "body/extra_large": "ts-body-xl", "body/extra_large_bold": "ts-body-xl-bold",
    "body/large": "ts-body-lg", "body/large_bold": "ts-body-lg-bold",
    "body/medium": "ts-body-md", "body/medium_bold": "ts-body-md-bold",
    "body/small": "ts-body-sm", "body/small_bold": "ts-body-sm-bold",
    "body/extra_small": "ts-body-xs", "body/extra_small_bold": "ts-body-xs-bold",
    "body/button": "ts-button", "body/button_small": "ts-button-sm",
    "label/medium": "ts-label-md", "label/small": "ts-label-sm",
}


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def num(v):
    return ("%g" % v) if isinstance(v, (int, float)) else str(v)


def css_name(name):
    parts = name.split("/")
    head = parts[0]
    if head in ("Primitives", "Neutrals", "Accents"):
        return "--" + parts[-1].replace("_", "-")        # sky_50 -> --sky-50
    if head in SEMANTIC:
        return "--" + SEMANTIC[head] + "-" + slug("/".join(parts[1:]))
    if head == "Scale":
        return "--scale-" + parts[1]
    if head == "Letter Spacing":
        return "--ls-" + slug(parts[1])
    if head == "Font Weight":
        return "--fw-" + slug(parts[1]).replace("-", "")  # semi bold -> semibold
    if head == "Font Family":
        return FONT_STACKS[name][0]
    raise ValueError("No CSS name for Figma variable " + name)


def css_value(name, v):
    if isinstance(v, str) and v.startswith("→"):
        target = v[1:]
        return "var(%s)" % (EXTERNAL.get(target) or css_name(target))
    head = name.split("/")[0]
    if head in ("Scale", "Letter Spacing", "Page"):
        return num(v) + "px"
    if head == "Font Weight":
        return str(WEIGHTS[v])
    if head == "Font Family":
        return FONT_STACKS[name][1].format(v)
    return v


def shadow(style):
    def px(n):
        return "0" if n == 0 else num(n) + "px"
    return ", ".join("%s %s %s %s rgba(%d, %d, %d, %s)" % (
        px(s["x"]), px(s["y"]), px(s["blur"]), px(s["spread"]),
        s["rgba"][0], s["rgba"][1], s["rgba"][2], num(s["rgba"][3]))
        for s in style["shadows"])


def group_key(name):
    parts = name.split("/")
    return "/".join(parts[:2]) if len(parts) > 2 else parts[0]


def scale_px(brand):
    """A value in px as its Scale token where there is one, so it moves with the scale."""
    steps = {v: n.split("/")[1] for n, v in brand.items() if n.startswith("Scale/")}
    return lambda n: "var(--scale-%s)" % steps[n] if n in steps else num(n) + "px"


def tokens_block(data):
    brand = data["collections"]["Brand"]["variables"]
    alias = data["collections"]["Alias"]["variables"]
    out = [START,
           "/* Generated by prototype/build/sync_tokens.py from figma design/design-tokens.json.",
           "   Do not edit by hand: change the JSON (or Figma, and sync), then run the build. */",
           ":root {"]

    out.append("  /* Brand */")
    last = None
    for name, v in brand.items():
        g = group_key(name)
        if last is not None and g != last:
            out.append("")
        last = g
        out.append("  %s: %s;" % (css_name(name), css_value(name, v)))

    for head in SEMANTIC_ORDER:
        names = [n for n in alias if n.split("/")[0] == head]
        if not names:
            continue
        out.append("")
        out.append("  /* %s — Alias, Default theme */" % head)
        for name in names:
            out.append("  %s: %s;" % (css_name(name), css_value(name, alias[name][0])))

    out.append("")
    out.append("  /* Effect styles */")
    for style in data.get("effectStyles", []):
        label = style["name"][len("Shadow "):] if style["name"].startswith("Shadow ") else style["name"]
        out.append("  --shadow-%s: %s;" % (slug(label), shadow(style)))
    out.append("}")

    dark = [(n, alias[n][1]) for head in SEMANTIC_ORDER for n in alias
            if n.split("/")[0] == head and alias[n][1] != alias[n][0]]
    out.append("")
    out.append("/* Alias, Dark theme — only the values that differ from the default. */")
    out.append(':root[data-theme="dark"] {')
    for name, v in dark:
        out.append("  %s: %s;" % (css_name(name), css_value(name, v)))
    out.append("}")

    layout = data["collections"].get("Layout")
    if layout:
        bp = data["breakpoints"]
        css = layout["css"]
        vals = {n: [css_value(n, v) for v in layout["variables"][n]] for n in css}
        out.append("")
        out.append("/* Layout — the commitment page's columns and spacing, on .cm (the commitment")
        out.append("   pages and the overview hero). What each value is for is in the JSON. */")
        out.append(".cm {")
        for n in css:
            out.append("  %s: %s;" % (css[n], vals[n][0]))
        out.append("}")
        for label, i, width in (("Tablet", 1, bp["tablet"]), ("Phone", 2, bp["phone"])):
            changed = [n for n in css if vals[n][i] != vals[n][i - 1]]
            if not changed:
                continue
            out.append("@media (max-width: %dpx) {  /* %s */" % (width, label))
            out.append("  .cm { %s }" % " ".join("%s: %s;" % (css[n], vals[n][i]) for n in changed))
            out.append("}")
    out.append(END)
    return "\n".join(out) + "\n"


def type_block(data):
    px = scale_px(data["collections"]["Brand"]["variables"])
    styles = {s["name"]: s for s in data["textStyles"]}
    phone = data["breakpoints"]["phone"]
    out = [TYPE_START,
           "/* ==========================================================================",
           "   Text styles — generated by prototype/build/sync_tokens.py from the",
           "   textStyles in figma design/design-tokens.json. Do not edit by hand.",
           "",
           "   Family, weight, size, line height, letter spacing, case and paragraph",
           "   spacing are the style's own. Titles and the number style also break a",
           "   word wider than its line rather than let it run out of the column",
           "   (\"Misconceptions\" is 328px at the phone's 40/48 in a 288px column); that",
           "   only acts on a word that cannot fit a line of its own.",
           "   ========================================================================== */"]
    for s in data["textStyles"]:
        cls = TEXT_CLASS.get(s["name"])
        if not cls:
            continue
        family, weight = s["font"].split(" ", 1)
        font_var, ls_var = FAMILY[family]
        decl = ["font-family: var(%s)" % font_var,
                "font-weight: var(%s)" % WEIGHT_VAR[weight],
                "font-size: %s" % px(s["size"]),
                "line-height: %s" % px(s["lineHeight"]),
                "letter-spacing: var(%s)" % ls_var]
        if s.get("textCase") in CASE:
            decl.append("text-transform: " + CASE[s["textCase"]])
        decl.append("margin: 0")
        if family == "Poppins":
            decl.append("overflow-wrap: break-word")
        out.append(".%s { %s; }  /* %s, %g/%g */" % (cls, "; ".join(decl), s["name"], s["size"], s["lineHeight"]))

    out.append("")
    out.append("/* The type scale on a phone. A style keeps its name at every width — .ts-title-xl")
    out.append("   is still .ts-title-xl at 390 — and only what it resolves to changes: the style")
    out.append("   each one names as its \"phone\" step. Running text collapses to body/medium,")
    out.append("   since 16/24 is already as large as it reads on a 358px column; titles step")
    out.append("   down one, so a page's headings stay ranked against each other. */")
    out.append("@media (max-width: %dpx) {" % phone)
    for s in data["textStyles"]:
        cls = TEXT_CLASS.get(s["name"])
        if not cls or not s.get("phone"):
            continue
        t = styles[s["phone"]]
        out.append("  .%s { font-size: %s; line-height: %s; }  /* → %s */"
                   % (cls, px(t["size"]), px(t["lineHeight"]), s["phone"]))
    out.append("}")

    out.append("")
    out.append("/* Paragraph spacing — in Figma the space between paragraphs inside one text")
    out.append("   box; here each paragraph is its own element, so it is the gap between two")
    out.append("   consecutive paragraphs of the same style, whether the style sits on each")
    out.append("   paragraph or on the block that holds them. Two classes and two elements,")
    out.append("   so it outranks a component's own `.x > p + p` and the style's `margin: 0`. */")
    for s in data["textStyles"]:
        cls = TEXT_CLASS.get(s["name"])
        gap = s.get("paragraphSpacing")
        if not cls or not gap:
            continue
        out.append("p.%s + p.%s, .%s > p + p:not([class]) { margin-top: %s; }"
                   % (cls, cls, cls, px(gap)))
    out.append(TYPE_END)
    return "\n".join(out) + "\n"


def replace_block(css, start, end, block, first_run):
    if start in css and end in css:
        a = css.index(start)
        b = css.index(end) + len(end)
        if css[b:b + 1] == "\n":
            b += 1
        return css[:a] + block + css[b:]
    return first_run(css, block)


def first_run_tokens(css, block):
    m = re.search(r"^:root \{\n.*?^\}\n", css, re.S | re.M)
    if not m:
        sys.exit("No :root block found in styles.css")
    return css[:m.start()] + block + css[m.end():]


def first_run_type(css, block):
    """The hand-written text styles, from their header to the end of their phone step."""
    a = css.find("/* ==========================================================================\n"
                 "   Text styles — transcribed verbatim")
    b = css.find("/* --- Breadcrumb truncation")
    if a < 0 or b < 0:
        sys.exit("Could not find the hand-written text styles in styles.css")
    return css[:a] + block + "\n" + css[b:]


def main():
    check = "--check" in sys.argv
    data = json.load(open(SRC))
    css = open(CSS).read()
    updated = replace_block(css, START, END, tokens_block(data), first_run_tokens)
    updated = replace_block(updated, TYPE_START, TYPE_END, type_block(data), first_run_type)

    if updated == css:
        print("styles.css design tokens and text styles are up to date")
        return
    if check:
        sys.exit("styles.css is out of date with design-tokens.json — run prototype/build/sync_tokens.py")
    open(CSS, "w").write(updated)
    print("styles.css written from design-tokens.json")


if __name__ == "__main__":
    main()

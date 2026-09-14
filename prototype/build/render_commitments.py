#!/usr/bin/env python3
"""Emit one page per commitment, rendered by the existing template.

The renderer is prototype/commitment.js — the implementation of Figma template
15289:99639. It already does the work that matters and is hard to get right:
the sticky card per part, the scroll-driven highlight, the entry and exit
runways, the card sizing that stops the card resizing when the tab changes, and
the type scale transcribed from the Figma text styles. None of that is
reproduced here.

So this script does not build markup. It writes, per commitment:

  prototype/data/c-<slug>.js     the commitment JSON on window.WATCHTOWER_CASE
  prototype/commitment-<slug>.html   a shell that loads the stylesheets, the
                                     icon sprite, that data file and the renderer

and once, across all of them:

  prototype/data/commitments-table.js   the five columns the overview table
                                        sorts and filters on, per commitment

Schema 3.x is passed through as-is: commitment.js reads `evidence` or `case`,
and prefers clauses[].title over "Part n" on its own.

Usage:  python3 prototype/build/render_commitments.py [--only <slug>]
"""

import json, re, os, sys, glob, html

HERE = os.path.dirname(os.path.abspath(__file__))
PROTO = os.path.dirname(HERE)
REPO = os.path.dirname(PROTO)
SRC = os.path.join(REPO, "commitments")
SPRITE = open(os.path.join(HERE, "_sprite.html")).read()

# The design system is generated into styles.css before anything is stamped, so
# a hand edit to figma design/design-tokens.json reaches every page with this
# one command, and VERSION below already sees the new styles.css.
import subprocess
subprocess.run([sys.executable, os.path.join(HERE, "sync_tokens.py")], check=True)

# bumped whenever the renderer or stylesheet changes, so a regenerated
# prototype is never served from a stale cache
VERSION = str(int(max(os.path.getmtime(os.path.join(PROTO, f))
                      for f in ("commitment.js", "commitment.css", "styles.css",
                                "commitments.js", "commitments.css",
                                "theme.js", "shell.js"))))

SHELL = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>{title} — Watchtower</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lora:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css?v={v}">
<link rel="stylesheet" href="commitment.css?v={v}">
<script src="theme.js?v={v}"></script>
</head>
<body class="cm">
{sprite}
<div class="app">
  <header class="topbar">
    <div class="brand">
      <svg class="ico" aria-hidden="true"><use href="#i-logo"/></svg>
      <span>Watchtower</span>
    </div>
    <nav class="cm-nav" aria-label="Sections">
      <a href="index.html">Document Repository</a>
      <a href="commitments.html" class="is-active" aria-current="page">Commitments</a>
    </nav>
    <div class="topbar-right">
      <div class="watchlist-pill">
        <svg class="ico" aria-hidden="true"><use href="#i-watchlist-nav"/></svg>
        Watchlist
      </div>
      <div class="avatar">JN</div>
    </div>
  </header>
  <main id="cm-root"></main>
</div>
<script src="data/c-{slug}.js?v={v}"></script>
<script src="commitment.js?v={v}"></script>
<script src="shell.js?v={v}"></script>
</body>
</html>
"""


# --- overview table index --------------------------------------------------
# Five columns, each read off a field that exists rather than asserted here.
# The one derived value is `fuel`, and it carries `fuel_source` so a reader can
# see which field it came from — the same pattern as carve_out_kind_source.

FUEL_LABELS = {"coal": "Coal", "oil_gas": "Oil & Gas", "peat": "Peat"}

# Used only where scope.industry.themes is null. Every category below names its
# fuel in its own right; a category that does not would return None, not a guess.
CATEGORY_FUEL = {
    "coal": "Coal", "thermal_coal": "Coal", "mining": "Coal",
    "oil_gas_expansion": "Oil & Gas", "arctic": "Oil & Gas", "fracking": "Oil & Gas",
}

STRENGTH_LABELS = {"holds": "Holds", "hollowed": "Hollowed", "crushed": "Crushed"}


def fuel_of(c):
    """(label, source) — themes first, category only as a named fallback."""
    scope = (c.get("watchtower") or {}).get("scope") or {}
    theme = (scope.get("industry") or {}).get("themes")
    if theme:
        return FUEL_LABELS.get(theme, theme.replace("_", " ").title()), "scope.industry.themes"
    cat = c.get("category")
    if cat in CATEGORY_FUEL:
        return CATEGORY_FUEL[cat], "commitment.category"
    return None, None


def card_entry(slug, doc):
    """One card for the strip above the table, or None.

    The cards are the hook: a commitment where financing was actually found.
    Every other commitment is still on the page, in the table below — being left
    out of the strip is not being left out of the repository.

    This file used to be maintained by hand, and had drifted into a per-deal
    list: two entries for commitment 15 and two for commitment 3, because
    Barclays and ING each had two deals. The card renderer shows the commitment
    number, the bank, the quote and the category and never reads the deal
    fields, so those rendered as visibly duplicate cards. One card per
    commitment is what the renderer was always drawing.
    """
    c = doc["commitment"]
    evidence = doc.get("evidence") or doc.get("case") or {}
    if not (evidence.get("deals") or []):
        return None
    clauses = c.get("clauses") or []
    clause = next((cl for cl in clauses if cl.get("verbatim")), None)
    if not clause:
        return None
    return {
        "page": f"commitment-{slug}.html",
        "number": c.get("commitment_number"),
        "bank": c.get("bank"),
        "category": c.get("category"),
        "quote": clause["verbatim"],
        # The same clause in plain language, pronouns resolved to the bank. The
        # phone card quotes this rather than the verbatim; None where the clause
        # has no rendering, and the card falls back to the verbatim.
        "plain": clause.get("plain_rendering"),
    }


def table_row(slug, doc):
    c = doc["commitment"]
    clauses = c.get("clauses") or []
    # Financing found against the commitment. Counted from the evidence rather
    # than read off any prose, so a page with no deals reports 0, not silence.
    evidence = doc.get("evidence") or doc.get("case") or {}
    deals = len(evidence.get("deals") or [])
    # The total is already computed and recorded on the case; summing the deal
    # amounts here would be a second, competing answer to the same question.
    # `complete: false` means the figure is a floor — what has been found so
    # far — not a closed total, so it travels with the number.
    figure = evidence.get("headline_figure") or {}
    amount = figure.get("display") if deals else None
    amount_complete = bool(figure.get("complete")) if deals else None
    # The document the commitment is quoted from. Where a commitment cites more
    # than one, the earliest is the one it was published in; the later source
    # reports on it.
    sources = sorted((s for s in c.get("sources", []) if s.get("published")),
                     key=lambda s: s["published"])
    src = sources[0] if sources else {}
    fuel, fuel_source = fuel_of(c)
    strength = (c.get("assessment") or {}).get("strength")
    return {
        "page": f"commitment-{slug}.html",
        "title": c.get("title"),
        # The table lists commitments under a bank heading, so the row uses the
        # title with the bank's possessive stripped. See backfill_short_title.py.
        "short_title": c.get("short_title"),
        # The commitment's own words, with pronouns resolved to the bank —
        # "Barclays will not directly finance ..." for a verbatim "We will
        # not ...". The first clause: 42 of 59 have only one, and where there
        # are more it is the one the commitment leads with.
        "plain_rendering": (clauses[0].get("plain_rendering") if clauses else None),
        "clause_count": len(clauses),
        "bank": c.get("bank"),
        "number": c.get("commitment_number"),
        "fuel": fuel,
        "fuel_source": fuel_source,
        "category": c.get("category"),
        "result": STRENGTH_LABELS.get(strength, strength),
        "result_key": strength,
        "deals": deals,
        "deal_amount": amount,
        "deal_amount_complete": amount_complete,
        "deal_amount_combines": figure.get("combines") if deals else None,
        "published": src.get("published"),
        # `low` marks a date the analyst inferred rather than read off the
        # document; the table shows it as approximate.
        "published_confidence": src.get("published_confidence"),
        "document_title": src.get("document_title"),
    }


def main():
    only = sys.argv[sys.argv.index("--only") + 1] if "--only" in sys.argv else None
    os.makedirs(os.path.join(PROTO, "data"), exist_ok=True)
    written = skipped = 0
    rows = []
    cards = []

    for path in sorted(glob.glob(os.path.join(SRC, "commitment-*.md"))):
        slug = os.path.basename(path)[len("commitment-"):-len(".md")]
        if only and only != slug:
            continue
        m = re.search(r"```json\n(.*?)\n```", open(path).read(), re.S)
        if not m:
            skipped += 1
            continue
        doc = json.loads(m.group(1))
        c = doc.get("commitment")
        if not c or not (doc.get("evidence") or doc.get("case")):
            print(f"  skip {slug} — no commitment/evidence pair (schema {doc.get('schema_version')})")
            skipped += 1
            continue

        data = (f"/* Commitment data — generated from commitments/commitment-{slug}.md\n"
                f"   by prototype/build/render_commitments.py. Do not edit by hand.\n"
                f"   Assigned to a global rather than fetched, so the page still opens\n"
                f"   from file:// without a server. */\n"
                f"window.WATCHTOWER_CASE = {json.dumps(doc, ensure_ascii=False, indent=2)};\n")
        open(os.path.join(PROTO, "data", f"c-{slug}.js"), "w").write(data)

        open(os.path.join(PROTO, f"commitment-{slug}.html"), "w").write(
            SHELL.format(title=html.escape(c.get("title") or slug, quote=True),
                         sprite=SPRITE, slug=slug, v=VERSION))
        rows.append(table_row(slug, doc))
        entry = card_entry(slug, doc)
        if entry:
            cards.append(entry)
        written += 1

    # Newest commitment first, matching the cards above the table.
    rows.sort(key=lambda r: (-(r["number"] or 0), r["title"] or ""))
    open(os.path.join(PROTO, "data", "commitments-table.js"), "w").write(
        "/* Overview table index — generated by "
        "prototype/build/render_commitments.py. Do not edit by hand. */\n"
        "window.WATCHTOWER_TABLE = "
        + json.dumps(rows, ensure_ascii=False, indent=2) + ";\n")

    cards.sort(key=lambda e: -(e["number"] or 0))
    open(os.path.join(PROTO, "data", "commitments-index.js"), "w").write(
        "/* Overview cards — generated by "
        "prototype/build/render_commitments.py. Do not edit by hand.\n"
        "   One card per commitment with financing found; the rest of the\n"
        "   repository is the table below them. */\n"
        "window.WATCHTOWER_CASES = "
        + json.dumps(cards, ensure_ascii=False, indent=2) + ";\n")

    refreshed = refresh_sprites()
    stamp_overview()

    print(f"{written} pages written, {skipped} skipped, {len(rows)} table rows, "
          f"{len(cards)} cards, {refreshed} sprites refreshed")


def refresh_sprites():
    """Re-inline the built sprite into the hand-written pages.

    The generated commitment pages get the sprite at write time. The pages
    written by hand carry their own copy, pasted in once, which then drifts:
    index.html was still shipping a sprite whose clipPath id had been stripped,
    so diff-backspace pointed at nothing. Rewriting them here means a change to
    an icon reaches every page from one build.
    """
    n = 0
    for path in sorted(glob.glob(os.path.join(PROTO, "*.html"))):
        if os.path.basename(path).startswith("commitment-"):
            continue                      # generated; already has the fresh sprite
        src = open(path).read()
        new_src, hits = re.subn(r'<svg class="sprite".*?</svg>', lambda _m: SPRITE,
                                src, count=1, flags=re.S)
        if hits and new_src != src:
            open(path, "w").write(new_src)
            n += 1
    return n


def stamp_overview():
    """Version the overview pages' own assets.

    commitments.html and all-commitments.html are written by hand, so they
    never picked up the `?v=` the generated pages carry — and a browser will
    happily keep a cached renderer against a freshly generated data file.
    Rewriting the query string here keeps them in step without anyone having
    to remember."""
    assets = ("styles.css", "commitment.css", "commitments.css",
              "data/commitments-index.js", "data/commitments-table.js",
              "commitments.js", "theme.js", "shell.js")
    for name in ("commitments.html", "all-commitments.html"):
        path = os.path.join(PROTO, name)
        if not os.path.exists(path):
            continue
        html_src = open(path).read()
        for a in assets:
            html_src = re.sub(re.escape(a) + r"(\?v=\d+)?([\"'])",
                              a + "?v=" + VERSION + r"\2", html_src)
        open(path, "w").write(html_src)


main()

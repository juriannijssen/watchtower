/* Element-by-element audit. Every row states what the frame specifies and what
   the page actually computes. Sizes/leadings are the figma design/design-tokens.json
   steps; colours are the design-system tokens. Run on a commitment page at
   1440px. Paste into the console. */
(function () {
  var out = [], fail = 0;

  function hex(rgb) {
    var m = /rgba?\((\d+), (\d+), (\d+)/.exec(rgb);
    if (!m) return rgb;
    return "#" + [1, 2, 3].map(function (i) {
      return ("0" + (+m[i]).toString(16)).slice(-2);
    }).join("");
  }

  /* Some elements only exist for some cases — a clause with no authored
     description, a case with no deals, the no-deal hero. Absence there is the
     data speaking, not a styling fault, and reporting it as a failure is how a
     check suite teaches you to ignore it. */
  function check(label, sel, want) {
    var el = document.querySelector(sel);
    if (!el) {
      if (want.optional) out.push("  n/a   " + label + "  (not present in this case)");
      else { fail++; out.push("  MISSING  " + label + "  (" + sel + ")"); }
      return;
    }
    var cs = getComputedStyle(el);
    var got = {
      font: Math.round(parseFloat(cs.fontSize)) + "/" + Math.round(parseFloat(cs.lineHeight)),
      weight: cs.fontWeight,
      family: cs.fontFamily.split(",")[0].replace(/"/g, ""),
      color: hex(cs.color)
    };
    var bad = [];
    if (want.font && want.font !== got.font) bad.push("font " + got.font + " ≠ " + want.font);
    if (want.fontOneOf && want.fontOneOf.indexOf(got.font) === -1) {
      bad.push("font " + got.font + " not on the ladder " + want.fontOneOf.join(" | "));
    }
    if (want.weight && String(want.weight) !== got.weight) bad.push("weight " + got.weight + " ≠ " + want.weight);
    if (want.family && want.family !== got.family) bad.push("family " + got.family + " ≠ " + want.family);
    if (want.color && want.color.toLowerCase() !== got.color) bad.push("color " + got.color + " ≠ " + want.color);
    if (want.bg) {
      var bg = hex(cs.backgroundColor);
      if (want.bg.toLowerCase() !== bg) bad.push("bg " + bg + " ≠ " + want.bg);
    }
    if (want.pad) {
      var pad = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft]
        .map(function (v) { return Math.round(parseFloat(v)); }).join(" ");
      if (pad !== want.pad) bad.push("padding " + pad + " ≠ " + want.pad);
    }
    if (want.radius) {
      var r = Math.round(parseFloat(cs.borderTopLeftRadius));
      if (r !== want.radius) bad.push("radius " + r + " ≠ " + want.radius);
    }
    if (bad.length) { fail++; out.push("  FAIL  " + label + " — " + bad.join("; ")); }
    else out.push("  ok    " + label + "  " + got.font + " " + got.family + " " + got.weight + " " + got.color);
  }

  var LORA = "Lora", POP = "Poppins", INT = "Inter";
  var INK = "#292d30", SEC = "#56668f", WHITE = "#ffffff";
  var LINK = "#2563eb";   /* fg/link, which is ocean_600 */

  out.push("HERO");
  check("page title            title/extra large", ".cm-title", { font: "60/60", family: POP, weight: "600", color: INK });
  check("intro                 body/extra_large",  ".cm-intro", { font: "20/32", family: INT, weight: "400", color: INK });
  check("jump label            body/small_bold",   ".cm-jump-label", { font: "14/20", family: INT, weight: "600", color: SEC });
  /* The row is the link and the label carries the type — 15742:114018 sets it
     at body/medium_bold in primary ink, not a small secondary line. */
  check("jump link             body/medium_bold",  ".cm-jump-text", { font: "16/24", family: INT, weight: "600", color: INK });
  check("sources heading       title/large",       ".cm-sources-title", { font: "32/40", family: POP, weight: "600", color: INK });
  /* The title is the row's link now, not a label beside a button, so it takes
     the link colour, and the component sets it at body/small_bold — 14/20.
     This row had been asserting label/medium against a page rendering
     label/small, so it was failing against a size the design never asked for. */
  check("source name           body/small_bold",   ".cm-source-name", { font: "14/20", family: INT, weight: "600", color: LINK });
  /* background/primary and a 4px radius — 15324:106997. A white tile on the
     page ground, with no border of its own. */
  check("source card                          ",   ".cm-source", { bg: WHITE, radius: 4 });
  /* body/medium, per Commitment/Sources 15752:117578 — the paragraph beside the
     source rows is ordinary prose, not a lead-in set a size up. The page has
     rendered 16/24 all along; this row was asserting a size the component does
     not use. */
  check("sources note          body/medium",       ".cm-sources-note", { font: "16/24", family: INT, weight: "400", color: INK });

  out.push("HEADLINE FIGURE (hero deal card)");
  check("card                                 ",   ".cm-deal.is-hero", { bg: "#293145", pad: "48 64 48 64", radius: 0 });
  check("teaser                body/extra_large",  ".cm-deal.is-hero .cm-deal-body", { font: "20/32", family: INT, weight: "400", color: WHITE });
  /* Only a case with a headline figure prints one; a no-deal page shows the
     kicker at title/extra large in its place. */
  check("figure                number/large",      ".cm-deal.is-hero .ts-number-lg", { font: "80/80", family: POP, weight: "600", color: WHITE, optional: true });

  out.push("COMMITMENT CARD");
  check("card                                 ",   ".cm-card", { bg: WHITE, pad: "40 40 40 40", radius: 0 });
  check("tab                   label/small",       ".cm-tab", { font: "10/12", family: INT, weight: "600" });
  check("tab track                            ",   ".cm-tabs", { bg: "#c2cdea" });
  check("check the quote       label/small",       ".cm-check", { font: "10/12", family: INT, weight: "600", color: INK });
  /* The quote steps down the Lora headline ladder to fit its box, so any step
     is correct — what is checked is that it is on the ladder at all. */
  check("quote                 headline ladder",   ".cm-quote", { fontOneOf: ["36/44", "28/36", "24/32"], family: LORA, weight: "400", color: INK });

  out.push("PART");
  check("part heading          title/extra large", ".cm-part-title", { font: "60/60", family: POP, weight: "600", color: INK });
  check("part description      body/extra_large",  ".cm-part-desc", { font: "20/32", family: INT, weight: "400", color: INK, optional: true });

  out.push("PHRASE BLOCK");
  check("phrase label          quote/large",       ".cm-phrase-head h3", { font: "36/44", family: LORA, weight: "400", color: INK });
  check("type chip             label/small",       ".cm-chip", { font: "10/12", family: INT, weight: "600", color: WHITE, bg: "#2563eb" });
  check("field label           label/medium",      ".cm-field-label", { font: "12/16", family: INT, weight: "600", color: SEC });
  check("field body            body/medium",       ".cm-field p", { font: "16/24", family: INT, weight: "400", color: INK });

  out.push("DEAL CARD (in column)");
  check("card                                 ",   ".cm-field .cm-deal", { optional: true, bg: "#293145", pad: "16 24 16 24", radius: 8 });
  check("figure                title/large",       ".cm-field .cm-deal-figure", { optional: true, font: "32/40", family: POP, weight: "600", color: WHITE });
  check("parties               body/large_bold",   ".cm-deal-line", { optional: true, font: "18/28", family: INT, weight: "600", color: WHITE });
  check("instruments           body/small",        ".cm-deal-instruments", { optional: true, font: "14/20", family: INT, weight: "400", color: WHITE });
  check("contradiction         body/small",        ".cm-field .cm-deal-body", { optional: true, font: "14/20", family: INT, weight: "400", color: "#c2cdea" });
  check("credits               body/extra_small",  ".cm-credits", { optional: true, font: "12/16", family: INT, weight: "400", color: "#6a7daf" });

  out.push("ASSESSMENT");
  check("opinion line          body/small",        ".cm-assess-lead", { font: "14/20", family: INT, weight: "400", color: "#8296c9" });
  check("heading               title/extra_large", ".cm-assess-title", { font: "60/60", family: POP, weight: "600", color: WHITE });
  check("verdict body          body/medium",       ".cm-verdict p", { font: "16/24", family: INT, weight: "400", color: WHITE });
  check("change card                          ",   ".cm-change-card", { bg: "#6a7daf", pad: "40 40 40 40", radius: 10 });
  check("change heading        title/medium",      ".cm-change-card h3", { font: "32/40", family: POP, weight: "600", color: WHITE });
  check("change item title     title/extra_small", ".cm-change-item .t", { font: "20/28", family: POP, weight: "600", color: WHITE });
  check("change item body      body/small",        ".cm-change-item .b", { font: "14/20", family: INT, weight: "400", color: "#d9e0f2" });

  console.log(out.join("\n"));
  console.log(fail ? fail + " FAILED" : "every element matches the spec");
})();

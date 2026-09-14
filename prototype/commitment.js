/* ==========================================================================
   Commitment detail page — Watchtower
   Renders one case JSON (Commitment Analysis Spec §3) into the layout of
   Figma node 15289-99639.

   This is a template. Nothing about a particular bank, commitment, phrase or
   deal appears below; every string that varies comes out of the case data,
   and every string that does not is in STR.
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.WATCHTOWER_CASE;
  if (!DATA) { console.error("No case data on window.WATCHTOWER_CASE"); return; }

  var C = DATA.commitment;
  /* `case` became `evidence` at page spec v2.0. Both shapes carry the same five
     fields this renderer reads, so accept either rather than fork the template. */
  var K = DATA.evidence || DATA.case || {};

  /* --- Fixed strings -------------------------------------------------------- */

  var STR = {
    tabPlain: "PLAIN",
    tabVerbatim: "VERBATIM",
    checkTheQuote: "CHECK THE QUOTE",
    notInSynthesis: "NOT IN THE WATCHTOWER SYNTHESIS",
    buttonSynthesis: "SYNTHESIS",
    articlePublished: "Published",
    articleUpdated: "Updated",
    jumpSources: "Source Documents",
    jumpAssessment: "Our Assessment",
    partFallback: "Part {n}",
    sectionSources: "Source Documents",
    /* The sources intro is composed, not stored — see sourcesIntro(). Every
       part of it is a fact the data already holds: how many documents, how many
       passages, what job each passage does, what the document is and when it
       was published. */
    sourcesVerbatim: "Every quote on this page is taken verbatim from the source {docWord}. Follow any quote back to its source to check it yourself.",
    shapeSinglePassage: "The commitment is stated in a single clear passage.",
    shapeManyPassages: "We had to look at {n} passages in this document to see what it actually covers.",
    shapeManyDocuments: "The commitment is stated in {n} different policy documents.",
    /* Only said when there is more than one document, because with one the row
       directly below already carries its date and its format. */
    formatMany: "One is {first}, the other {rest}.",
    formatList: "They are {what}.",
    kindPdf: "a PDF",
    kindNewsroom: "a page in their newsroom",
    kindWeb: "a page on their website",
    closers: { lets_find_out: "Let's find out.", lets_take_a_look: "Let's take a look." },
    /* What a passage is doing, for the sentence that lists them. Singular and
       plural are written out rather than suffixed, because "a definition that
       changes what the rule means" does not pluralise by adding an s. */
    rolePhrases: {
      rule:       ["a rule", "rules"],
      definition: ["a definition that changes what the rule means",
                   "definitions that change what the rule means"],
      exception:  ["an exception", "exceptions"],
      scope:      ["a statement of who it applies to", "statements of who it applies to"],
      condition:  ["a further test that has to be met", "further tests that have to be met"],
      claim:      ["the bank's own claim that it succeeded", "claims that it succeeded"]
    },
    /* The first passage is where the promise itself is made, so it gets the
       page's opening read rather than the analytical note the later ones carry. */
    /* One opening for every page, whatever the verdict: the answer stays open
       until the reader has read the page. */
    pledgeIntro: "This is where {bank} makes the commitment. At first sight it is clear: it sounds like {reading}. Is it really like that, or is it a misconception?",
    dealFollowUp: "How did that happen? A breach, or a loophole? That is what this page works out.",
    labelMeans: "What it means",
    labelLetsThrough: "What it lets through",
    labelRealWorldDeals: "The deals that got through",
    labelRealWorldNone: "What happened in the real world",
    labelWhatNeedsToChange: "What {bank} Needs to Change",
    sectionAssessment: "Our Assessment",
    undated: "Undated",
    dateNotEstablished: "Publication date not established",
    /* Under the page title, with the publication date on the line after it —
       Figma 15317:1249. It used to sit in a band between the explanation and
       the assessment. */
    aiNote: "This Analysis is AI-generated and based on sourced fact. AI can make mistakes, therefore always fact check when you want to use information in the real world.",
    /* Above the assessment's title — Figma 15289:100256. */
    assessmentLead: "What follows is not based on sourced fact. Instead it is our own opinion."
  };

  /* The credits line on a deal card. The link targets are the published
     research the figures come from. */
  var CREDITS = {
    lead: "Powered by research from ",
    links: [
      { text: "Global Energy Monitor’s energy trackers", url: "https://globalenergymonitor.org/" },
      { text: "Banking on Climate Chaos report", url: "https://www.bankingonclimatechaos.org/" }
    ]
  };

  var STATUS = {
    financing_found: { label: STR.labelRealWorldDeals, body: null },
    none_found:      { label: STR.labelRealWorldNone,  body: "We checked and found nothing." },
    not_checked:     { label: STR.labelRealWorldNone,  body: "We have not yet reviewed financing against this commitment." }
  };

  /* Each verdict option carries its own angle. The labels used to be three
     fixed strings indexed by position, which is right only when a page happens
     to have those three options in that order — across the set there are five
     angles, and pages carry four options, so the labels were naming the wrong
     essay nearly everywhere. An angle with no entry here prints itself rather
     than borrowing the label of whatever sat in that slot. */
  var ANGLE_LABELS = {
    fails_to_block:     "What it fails to block",
    who_it_catches:     "Who it catches",
    what_it_gets_right: "What it gets right",
    how_it_compares:    "How it compares",
    how_it_changed:     "How it changed"
  };

  function angleLabel(angle) {
    return ANGLE_LABELS[angle]
      || String(angle || "").replace(/_/g, " ").replace(/^\w/, function (m) { return m.toUpperCase(); });
  }

  var STRENGTH = {
    crushed:  { segment: "CRUSHED BY A LOOPHOLE",  display: "Crushed by a loophole" },
    hollowed: { segment: "HOLLOWED BY A LOOPHOLE", display: "Hollowed by a loophole" },
    holds:    { segment: "HOLDS UNDER PRESSURE",   display: "Holds under pressure" }
  };

  /* Hero copy. Two scenarios, one shape: a framing paragraph with a single slot
     from the record, then the question the page answers. Everything except the slot
     is identical on every page and lives here, not in the data. */
  var HERO = {
    /* A — nothing found. Slot: commitment.naive_reading */
    noDeal: [
      "{bank} made a commitment that sounds like {naive_reading}, but is it really "
      + "the case? Banks have a way of writing policies that sound good. Sometimes too "
      + "good to be true. So let's look at it through the eyes of a policy analyst.",
      "Will this commitment hold under pressure? Or is it a hollow promise, on the "
      + "edge of being crushed?"
    ],
    /* B — financing found. Slot: evidence.what_it_funded. "put into" rather than
       "lent", because a headline figure can combine a loan with an underwriting. */
    deal: [
      "That's what {bank} put into {what_it_funded}, despite a commitment that sounds "
      + "like it would stop exactly this. And that is only what we have found so far.",
      "How did that happen? A breach, or a loophole? That is what this page works out."
    ]
  };

  function fill(tpl, slots) {
    return tpl.replace(/\{(\w+)\}/g, function (m, k) {
      return slots[k] != null ? slots[k] : "";
    });
  }

  /* Only `arctic` was specified. Anything else is title-cased from the field
     rather than invented. */
  var CATEGORY_LABELS = {
    arctic: "Arctic Oil & Gas",
    oil_gas_expansion: "Oil & Gas Expansion",
    fracking: "Fracking"
  };

  /* --- Helpers -------------------------------------------------------------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* A date Watchtower derived with an LLM is not a published date, and printing it
     as one puts an inferred fact on the page. Say so instead. Macquarie's
     Sustainability Report is the case this exists for: its stored date conflicts
     with the filename and the document's own opening line. */
  function publishedLine(s) {
    if (!s) return STR.undated;
    if (s.published_source === "inferred_by_llm" || s.published_confidence === "low") {
      return STR.dateNotEstablished;
    }
    return s.published ? monthYear(s.published) : STR.undated;
  }

  /* Dates are stored ISO and were printed ISO, which reads as a record rather
     than as a date — Figma 15742:113995 sets both the source rows and the
     article line in plain English. Parsed by hand rather than through Date,
     which reads a bare "2025-12-01" as UTC and can hand back the day before in
     a western timezone. A value that is not the shape we expect is passed
     through untouched, so nothing is silently mangled. */
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function isoParts(iso) {
    var m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(iso || "").trim());
    if (!m) return null;
    var mo = parseInt(m[2], 10);
    if (mo < 1 || mo > 12) return null;
    return { y: m[1], m: MONTHS[mo - 1], d: m[3] ? String(parseInt(m[3], 10)) : null };
  }

  /* "Dec 2025" — the day is not what dates a policy document. */
  function monthYear(iso) {
    var p = isoParts(iso);
    return p ? p.m + " " + p.y : String(iso);
  }

  /* "12 Sep 2026" — an article has a day. */
  function fullDate(iso) {
    var p = isoParts(iso);
    if (!p) return String(iso);
    return (p.d ? p.d + " " : "") + p.m + " " + p.y;
  }

  /* The format is not stored, so it comes off the URL and only when the URL
     actually ends in one — a link to a page rather than a file says nothing. */
  function docFormat(s) {
    var m = /\.([a-z0-9]{2,4})(?:[?#].*)?$/i.exec(String((s && s.document_url) || ""));
    return m ? m[1].toUpperCase() : null;
  }

  function categoryLabel(cat) {
    if (CATEGORY_LABELS[cat]) return CATEGORY_LABELS[cat];
    return String(cat || "").replace(/_/g, " ")
      .replace(/\b\w/g, function (m) { return m.toUpperCase(); });
  }

  function typeLabel(t) { return String(t).replace(/_/g, " "); }

  var NUMBER_WORDS = ["zero", "One", "Two", "Three", "Four", "Five",
                      "Six", "Seven", "Eight", "Nine", "Ten"];

  function countWord(n) { return NUMBER_WORDS[n] || String(n); }

  /* Source URLs are not in the data yet; `#` stands in until they are. */
  function href(url) { return url ? esc(url) : "#"; }

  /* Where to send CHECK THE QUOTE.

     Best is the commitment's own record, which lands on the highlighted quote.
     Where that is missing the commitment id is what is missing, not the document
     — so fall back to the document's synthesis, then build it from the ids on the
     record, and only then to the bank's PDF. A reader who lands on the synthesis
     one level up can still find the passage; sending them nowhere helps no one.
     The four SEB peat pages are the case: synthesis_backed is false because run
     181 omits their section, so there is no commitment to point at. */
  function synthesisHref(src) {
    var wt = C.watchtower || {};
    if (wt.url) return wt.url;
    if (src && src.synthesis_url) return src.synthesis_url;
    if (wt.institution && wt.document_id) {
      return "https://watchtower.bank.green/institution/" + wt.institution
        + "/document/" + wt.document_id + "/synthesis"
        + (wt.run ? "?run=" + wt.run : "");
    }
    if (src && src.watchtower_institution && src.watchtower_document_id) {
      return "https://watchtower.bank.green/institution/" + src.watchtower_institution
        + "/document/" + src.watchtower_document_id + "/synthesis"
        + (src.synthesis_run ? "?run=" + src.synthesis_run : "");
    }
    return (src && src.document_url) || null;
  }

  function sourceById(id) {
    for (var i = 0; i < (C.sources || []).length; i++) {
      if (C.sources[i].id === id) return C.sources[i];
    }
    return null;
  }

  function art(id, cls) {
    return '<span class="' + (cls || "cm-art") + '" aria-hidden="true">'
      + '<svg><use href="#i-' + id + '"/></svg></span>';
  }

  /* The subject of the commitment: what it is about, as a noun phrase, with no
     bank name and no verb in front of it. There is no field for it yet, so it is
     derived from the title — see the note in the page spec. `commitment.subject`
     should carry it, because the derivation cannot be right for every wording and
     the repository breadcrumb will need the same string. */
  var SUBJECT_LEADS = [
    "Commitment on ", "Ban on ", "Exclusion of ", "Restriction on ", "Refusal to ",
    "Limit on ", "Threshold on ", "Phase-Out of ", "Phase-out of ", "Test for ",
    "Policy on ", "Rule on "
  ];

  /* "Barclays" takes a bare apostrophe, "Santander" takes 's. */
  function possessive(name) {
    return /s$/i.test(name) ? name + "\u2019" : name + "\u2019s";
  }

  function subject() {
    if (C.subject) return C.subject;          /* once the field exists, it wins */
    var s = crumbTitle();
    for (var i = 0; i < SUBJECT_LEADS.length; i++) {
      if (s.indexOf(SUBJECT_LEADS[i]) === 0) return s.slice(SUBJECT_LEADS[i].length);
    }
    return s;
  }

  /* The frames print the commitment in the crumb, not its category. Titles usually
     open with the bank's own name, which the crumb has already said. */
  function crumbTitle() {
    var s = C.title || "";
    if (!C.bank) return s || categoryLabel(C.category);
    /* "Macquarie Group" in bank, "Macquarie's" in the title, so try the short name too */
    var names = [C.bank, C.bank.split(" ")[0]];
    for (var i = 0; i < names.length; i++) {
      /* "Barclays' " is the possessive of a name already ending in s */
      var forms = [names[i] + "'s ", names[i] + "\u2019s ", names[i] + "' ",
                   names[i] + "\u2019 ", names[i] + ": ", names[i] + " "];
      for (var j = 0; j < forms.length; j++) {
        if (s.indexOf(forms[j]) === 0) {
          var rest = s.slice(forms[j].length);
          return rest.charAt(0).toUpperCase() + rest.slice(1);
        }
      }
    }
    return s || categoryLabel(C.category);
  }

  function partTitle(clause, i) {
    return clause.title || STR.partFallback.replace("{n}", clause.index != null ? clause.index : i + 1);
  }

  /* The anchor is the heading it lands on, so a link that says "Who it applies
     to" reads #who-it-applies-to rather than #part-2 — the URL of a passage
     survives being pasted somewhere, and a position in a list does not: insert
     a passage and every anchor below it starts pointing at the wrong thing.

     The leading article goes: "The project rule" is #project-rule. A title that
     slugs to nothing, or to something a sibling already took, falls back to its
     position, so an id is always produced and always unique. */
  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[\u2018\u2019\u201c\u201d]/g, "")
      .replace(/^the\s+/, "")
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  /* One pass over the clauses, so a duplicate title is resolved against the
     whole list rather than against whatever happened to be rendered first. */
  var partIds = (C.clauses || []).reduce(function (acc, clause, i) {
    var id = slugify(partTitle(clause, i));
    if (!id || acc.taken[id]) id = "part-" + (i + 1);
    acc.taken[id] = true;
    acc.ids.push(id);
    return acc;
  }, { ids: [], taken: {} }).ids;

  function partId(i) { return partIds[i] || "part-" + (i + 1); }

  /* --- Highlighting ---------------------------------------------------------
     Ranges are character offsets and are used as such. The phrase string is
     never searched for: a phrase can occur twice, and one can nest inside
     another, so indexOf would silently pick the wrong span.                    */

  /* Every phrase is lit, all the time, in the ocean a highlight takes; the
     words around them stay in the quote's own ink. Nothing here depends on
     where the reader has scrolled to. Each highlight is still a way into the
     block that explains it — see the click handler in mount(). */
  function buildText(text, phrases, key) {
    var use = (phrases || []).filter(function (p) {
      return p[key] && p[key].length === 2;
    }).map(function (p) {
      return { id: p.id, label: p.label, start: p[key][0], end: p[key][1] };
    }).sort(function (a, b) { return a.start - b.start; });

    var out = [], pos = 0;

    function plain(s) {
      if (s) out.push(esc(s));
    }

    for (var i = 0; i < use.length; i++) {
      var r = use[i];
      if (r.start < pos) { console.warn("Overlapping phrase range skipped:", r.id); continue; }
      plain(text.slice(pos, r.start));
      out.push('<span class="cm-hl" data-phrase="' + esc(r.id) + '">'
             + esc(text.slice(r.start, r.end)) + "</span>");
      pos = r.end;
    }
    plain(text.slice(pos));
    return out.join("");
  }

  /* --- Card -----------------------------------------------------------------
     One card per Part. It sticks while its Part scrolls. The PLAIN / VERBATIM
     tabs are the reader's choice and stay where the reader put them; the
     phrases are lit throughout, whatever the scroll position.                 */

  /* Padding + head row + the gap between them. Measured off the card rather
     than restated here, so a change in commitment.css cannot silently
     invalidate the fit. */
  function chromeOf(card) {
    var cs = getComputedStyle(card.root);
    return parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom)
         + parseFloat(cs.rowGap || cs.gap || 0)
         + card.root.querySelector(".cm-card-head").getBoundingClientRect().height;
  }

  /* quote/*, the Lora ramp. quote/large is the size the design draws; the rest
     are only ever stepped down to, and only far enough to fit the box.

     quote/extra_small is the floor. Without it the ladder bottomed out at 24
     and the longest quote in the set — 736 characters, against a median of 190
     — still overran its card by a quarter of a screen on a phone, because a
     floor the quote does not fit is not a fit.

     Only the names of the steps are written here. Their sizes are read off
     the .ts-quote-* classes, which styles.css generates from
     figma design/design-tokens.json — so a size changed there reaches this
     ladder, and the overview's (commitments.js), without touching either. */
  function readSteps(classes) {
    return classes.map(function (c) {
      var probe = document.createElement("span");
      probe.className = c;
      probe.style.cssText = "position:absolute;visibility:hidden";
      document.body.appendChild(probe);
      var cs = getComputedStyle(probe);
      var step = { size: parseFloat(cs.fontSize), leading: parseFloat(cs.lineHeight) };
      probe.remove();
      return step;
    });
  }
  var QUOTE_STEPS = readSteps(["ts-quote-lg", "ts-quote-md", "ts-quote-sm", "ts-quote-xs"]);

  var cards = [];   /* one entry per Part */
  var snapper = null;

  function quoteHtml(card) {
    var clause = card.clause;
    var plain = card.tab === "plain";
    var text = plain ? clause.plain_rendering : clause.verbatim;
    var key = plain ? "plain_range" : "verbatim_range";
    var body = buildText(text || "", clause.phrases, key);
    return plain ? body : "“" + body + "”";
  }

  function paintCard(card) {
    card.quoteEl.innerHTML = quoteHtml(card);
    card.tabEls.forEach(function (b) {
      var on = b.dataset.tab === card.tab;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function buildCard(clause, partIndex) {
    var card = {
      clause: clause,
      tab: "plain",
      root: el('<figure class="cm-card"></figure>'),
      tabEls: []
    };

    var head = el('<div class="cm-card-head"></div>');
    var tabs = el('<div class="cm-tabs" role="tablist" aria-label="Quote rendering"></div>');
    [["plain", STR.tabPlain], ["verbatim", STR.tabVerbatim]].forEach(function (p) {
      var b = el('<button type="button" class="cm-tab ts-label-sm" role="tab" data-tab="'
        + p[0] + '">' + esc(p[1]) + "</button>");
      b.addEventListener("click", function () { card.tab = p[0]; paintCard(card); });
      tabs.appendChild(b);
      card.tabEls.push(b);
    });
    head.appendChild(tabs);

    /* This is the source/synthesis control, sitting right of the PLAIN/VERBATIM
       switch. It goes to Watchtower's own record for this commitment, where the
       same wording is quoted and highlighted — commitment.watchtower.url already
       carries the run and the commitment index, which is what lands the reader on
       the highlighted quote rather than the top of the document. The document-level
       synthesis_url and then the bank's PDF are the fallbacks, for a page with no
       synthesis record behind it. */
    var src = sourceById(clause.source_id);
    var checkHref = synthesisHref(src);
    head.appendChild(el('<a class="cm-check ts-label-sm" href="' + href(checkHref)
      + '" target="_blank" rel="noopener">' + esc(STR.checkTheQuote) + "</a>"));
    card.root.appendChild(head);

    card.quoteEl = el('<blockquote class="cm-quote"></blockquote>');
    card.root.appendChild(card.quoteEl);

    card.partIndex = partIndex;
    paintCard(card);
    cards.push(card);
    return card;
  }

  /* --- Left column ----------------------------------------------------------- */

  function jumpLinks() {
    var wrap = el('<nav class="cm-jump" aria-label="On this page"></nav>');
    var ul = el("<ul></ul>");

    /* Label first, arrow last — the row reads left to right and the arrow sits
       against the right edge, so it marks where the row ends rather than
       decorating the words. body/medium_bold on the label, per 15742:114018. */
    function item(id, label) {
      ul.appendChild(el('<li><a href="#' + esc(id) + '">'
        + '<span class="cm-jump-text ts-body-md-bold">' + esc(label) + "</span>"
        + '<svg class="ico" aria-hidden="true"><use href="#i-arrow-forward"/></svg>'
        + "</a></li>"));
    }

    item("sources", STR.jumpSources);
    (C.clauses || []).forEach(function (cl, i) {
      item(partId(i), partTitle(cl, i));
    });
    item("assessment", STR.jumpAssessment);
    wrap.appendChild(ul);
    return wrap;
  }

  function creditsHtml() {
    var parts = [esc(CREDITS.lead)];
    CREDITS.links.forEach(function (l, i) {
      if (i === CREDITS.links.length - 1) parts.push(" and ");
      else if (i > 0) parts.push(", ");
      parts.push('<a href="' + esc(l.url) + '">' + esc(l.text) + "</a>");
    });
    return parts.join("");
  }

  function dealCard(d, opts) {
    opts = opts || {};
    var b = el('<div class="cm-deal' + (opts.hero ? " is-hero" : "") + '"></div>');

    if (opts.hero) {
      b.appendChild(el(art("illus-rig")));
      b.appendChild(el('<div class="cm-deal-figure ts-number-lg">'
        + esc(opts.figure || d.amount_display) + "</div>"));
      if (opts.note) b.appendChild(el('<div class="cm-deal-note ts-body-sm">' + esc(opts.note) + "</div>"));
      (opts.body || []).forEach(function (para) {
        b.appendChild(el('<p class="cm-deal-body ts-body-xl">' + esc(para) + "</p>"));
      });
      return b;
    }

    /* In the left column the illustration sits beside the figure rather than
       above it, and the credits run the full width underneath. */
    var row = el('<div class="cm-deal-row"></div>');
    row.appendChild(el(art("illus-rig")));
    var body = el('<div class="cm-deal-col"></div>');
    body.appendChild(el('<div class="cm-deal-figure ts-title-md">'
      + esc(opts.figure || d.amount_display) + "</div>"));
    /* body/large_bold \u2014 Inter 18/28, per 15314:1010. It was title/small, which
       is Poppins 20/28: the display face, on a line that is data rather than a
       heading. */
    body.appendChild(el('<div class="cm-deal-line ts-body-lg-bold">' + esc(C.bank) + " \u2192 "
      + esc(d.company || K.company) + " \u00b7 " + esc(d.year) + "</div>"));
    body.appendChild(el('<div class="cm-deal-instruments ts-body-sm">'
      + esc((d.instruments || []).join(" + ")) + "</div>"));
    /* body/small — 14/20, per 15314:1012, not body/medium. Why a deal got
       through is a footnote to the figure above it, and setting it at the same
       size as the page's prose made it compete with the analysis. */
    body.appendChild(el('<p class="cm-deal-body ts-body-sm">' + esc(d.contradiction) + "</p>"));
    row.appendChild(body);
    b.appendChild(row);

    /* The credits back the figures, so they sit on the cards that carry one. */
    b.appendChild(el('<p class="cm-credits ts-body-xs">' + creditsHtml() + "</p>"));
    return b;
  }

  /* Two scenarios, and they are different components rather than one component in
     two states.

       A — no deal available. The light panel: sky_200 ground, Foreground/primary
           text, fixed copy. It asks the question the page then answers, so it does
           not pretend to a figure it does not have.
       B — a deal was found. The dark card: the figure, the teaser, and the
           follow-up asking how it got through.

     Which one shows is decided here, from whether `evidence.deals` holds anything.
     It is not decided by any string in the data: A's copy belongs to the frontend,
     so a page with no deal reads the same whatever its JSON happens to say. That
     also means `headline_figure.display` is never consulted in the A case — it
     carries the label "Not yet checked" on every unchecked page, which is a listing
     label that has leaked into the record and should be null there.

     `evidence.status` corroborates but does not decide. The two agree across all
     59 files; if they ever disagree the deals are the fact and the status is a
     description of it, so the deals win and the mismatch is worth surfacing. */
  function heroSide() {
    var hf = K.headline_figure;
    var deals = K.deals || [];
    var hasDeal = deals.length > 0;

    if (hasDeal !== (K.status === "financing_found")) {
      console.warn("evidence.status is " + K.status + " but deals holds "
        + deals.length + " — rendering from the deals.");
    }

    var slots = { bank: C.bank, naive_reading: C.naive_reading, what_it_funded: K.what_it_funded };
    var card = el('<div class="cm-deal is-hero' + (hasDeal ? "" : " is-none") + '"></div>');
    card.appendChild(el(art(hasDeal ? "illus-rig" : "illus-green")));

    if (hasDeal && hf) {
      card.appendChild(el('<div class="cm-deal-figure ts-number-lg">' + esc(hf.display) + "</div>"));
    }

    /* A paragraph whose slot is empty is dropped rather than printed with a hole in
       it. The question always prints: it is the page's own, and needs nothing. */
    var paras = hasDeal ? HERO.deal : HERO.noDeal;
    var slotFilled = hasDeal ? K.what_it_funded : C.naive_reading;
    paras.forEach(function (tpl, i) {
      if (i === 0 && !slotFilled) return;
      card.appendChild(el('<p class="cm-deal-body ts-body-xl">' + esc(fill(tpl, slots)) + "</p>"));
    });
    return card;
  }

  /* --- The sources intro ------------------------------------------------------
     Composed from what the data already knows rather than authored per page, so
     adding a passage or swapping a document changes the prose with it. Four
     sentences: the promise that the quotes are verbatim, the shape of the
     source, what each passage is doing, and what the document is. */

  function listOf(items) {
    if (items.length === 1) return items[0];
    return items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
  }

  /* "Two are rules, one is a statement of who it applies to and one is a
     definition that changes what the rule means." Roles are counted in the
     order they first appear, so the sentence follows the page. */
  function roleSentence(clauses) {
    var order = [], counts = {};
    clauses.forEach(function (cl) {
      var r = cl.role;
      if (!r || !STR.rolePhrases[r]) return;
      if (counts[r] === undefined) { counts[r] = 0; order.push(r); }
      counts[r]++;
    });
    if (!order.length) return null;
    var parts = order.map(function (r) {
      var n = counts[r], phrase = STR.rolePhrases[r][n === 1 ? 0 : 1];
      return (n === 1 ? "one is " : countWord(n).toLowerCase() + " are ") + phrase;
    });
    var t = listOf(parts);
    return t.charAt(0).toUpperCase() + t.slice(1) + ".";
  }

  /* What the reader would be opening if they followed the link. The format is
     off the URL, so a link to a page rather than a file says so instead of
     claiming a file type it cannot see. */
  /* What the reader would be opening, said the way they would say it. A file
     extension is not that: "a HTM" is a format to decode, not a place. PDF is
     the exception — it is a real thing to a reader, and it is the difference
     between a policy and a press page. Anything else is described by where it
     lives, which the URL does know. */
  function sourceKind(s) {
    var url = String((s && s.document_url) || "");
    if (/\.pdf(\?|#|$)/i.test(url)) return STR.kindPdf;
    if (/newsroom|\/news\/|\/press/i.test(url)) return STR.kindNewsroom;
    return STR.kindWeb;
  }

  function sourcesIntro() {
    var sources = C.sources || [], clauses = C.clauses || [];
    var docs = sources.length, passages = clauses.length;
    if (!docs || !passages) return [];

    var out = [fill(STR.sourcesVerbatim, { docWord: docs === 1 ? "document" : "documents" })];

    var second = [];
    if (docs > 1) second.push(fill(STR.shapeManyDocuments, { n: countWord(docs).toLowerCase() }));
    else if (passages === 1) second.push(STR.shapeSinglePassage);
    else second.push(fill(STR.shapeManyPassages, { n: countWord(passages).toLowerCase() }));

    /* Only worth saying when there is more than one passage to tell apart. */
    if (passages > 1) {
      var roles = roleSentence(clauses);
      if (roles) second.push(roles);
    }

    /* Nothing about the document itself when there is only one. The source row
       is a few lines below and already says what it is and when it came out;
       saying it here too is the same fact twice, in the weaker place. */
    if (docs === 2) {
      second.push(fill(STR.formatMany, {
        first: sourceKind(sources[0]), rest: sourceKind(sources[1])
      }));
    } else if (docs > 2) {
      second.push(fill(STR.formatList, { what: listOf(sources.map(sourceKind)) }));
    }

    var closer = STR.closers[C.sources_intro_closer];
    if (closer) second.push(closer);

    out.push(second.join(" "));
    return out;
  }

  function sourcesBlock() {
    var block = el('<div class="cm-block cm-sources" id="sources"></div>');
    block.appendChild(el('<h2 class="cm-sources-title ts-title-md">'
      + esc(STR.sectionSources) + "</h2>"));

    /* Between the heading and the rows, which is where Commitment/Sources
       (15752:117578) puts it — the reader is told what they are looking at
       before they are shown it, not after. Its paragraphs share one wrapper so
       the component's gap falls around the intro as a whole, not between them. */
    var intro = el('<div class="cm-sources-intro"></div>');
    sourcesIntro().forEach(function (para) {
      intro.appendChild(el('<p class="cm-sources-note ts-body-md">' + esc(para) + "</p>"));
    });
    block.appendChild(intro);

    /* The component's "Slot: Source documents" — one wrapper for the rows, so
       the gap above them is the block's and the space between them is its own. */
    var list = el('<div class="cm-sources-list"></div>');

    /* The row used to be a title with a SYNTHESIS button beside it, which put
       the only target in the smallest part of the row and said twice where it
       went. The title is the link now — Figma 15742:114032 — so the target is
       the width of the row, and the meta line under it carries the date and the
       format instead of a second control. */
    (C.sources || []).forEach(function (s) {
      var row = el('<div class="cm-source"></div>');
      row.appendChild(el('<svg class="ico cm-source-ico" aria-hidden="true">'
        + '<use href="#i-article"/></svg>'));

      var col = el('<div class="cm-source-col"></div>');
      col.appendChild(el('<a class="cm-source-name ts-body-sm-bold" href="'
        + href(s.synthesis_url || s.document_url) + '">' + esc(s.document_title) + "</a>"));

      var fmt = docFormat(s);
      col.appendChild(el('<div class="cm-source-meta ts-body-sm">'
        + esc(publishedLine(s) + (fmt ? ", " + fmt : "")) + "</div>"));

      row.appendChild(col);
      list.appendChild(row);
    });
    block.appendChild(list);

    return block;
  }

  function heroSection() {
    var sec = el('<section class="cm-section cm-hero-section"></section>');
    var grid = el('<div class="cm-grid"></div>');
    var main = el('<div class="cm-main"></div>');

    var intro = el('<div class="cm-block"></div>');
    intro.appendChild(el('<h1 class="cm-title ts-title-xl">' + esc(C.title) + "</h1>"));

    /* Under the title, as Figma 15317:1249 sets it: that the analysis is
       AI-generated from sourced fact, then on the next line Watchtower's own
       publication date — not the policy's, which belongs to the source rows
       further down and is a different fact. The date is printed only when the
       commitment carries one, so a page that has not been published yet does
       not claim a date; `article_updated` joins it once a page is revised. */
    var meta = el('<p class="cm-title-meta ts-body-sm"></p>');
    meta.appendChild(document.createTextNode(STR.aiNote));
    if (C.article_published) {
      var date = STR.articlePublished + " " + fullDate(C.article_published);
      if (C.article_updated) date += " · " + STR.articleUpdated + " " + fullDate(C.article_updated);
      meta.appendChild(document.createElement("br"));
      meta.appendChild(document.createTextNode(date));
    }
    intro.appendChild(meta);

    intro.appendChild(jumpLinks());
    main.appendChild(intro);
    main.appendChild(sourcesBlock());

    var side = el('<div class="cm-side"></div>');
    side.appendChild(heroSide());

    grid.appendChild(side);
    grid.appendChild(main);
    sec.appendChild(grid);
    return sec;
  }

  /* --- Phrase blocks ---------------------------------------------------------- */

  function realWorld(phraseId) {
    var deals = (K.deals || []).filter(function (d) {
      return (d.phrase_refs || []).indexOf(phraseId) !== -1;
    });
    var st = STATUS[K.status] || STATUS.not_checked;
    var block = el('<div class="cm-field"></div>');

    if (!deals.length) {
      if (!st.body) return null;
      block.appendChild(el('<div class="cm-field-label ts-label-md">' + esc(st.label) + "</div>"));
      block.appendChild(el('<p class="ts-body-md">' + esc(st.body) + "</p>"));
      return block;
    }

    block.appendChild(el('<div class="cm-field-label is-deals ts-label-md">'
      + esc(STR.labelRealWorldDeals) + "</div>"));
    deals.forEach(function (d) { block.appendChild(dealCard(d)); });
    return block;
  }

  function phraseBlock(phrase) {
    var block = el('<div class="cm-block" id="phrase-' + esc(phrase.id) + '"'
      + ' data-phrase="' + esc(phrase.id) + '"></div>');

    /* Badge first, then the word. The badge says what kind of thing this is and
       is the shorter line, so it is what the eye lands on before the word it
       qualifies — Figma 15743:114651 draws the stack that way round. The word
       loses its quotation marks with the swap: a heading set apart on its own
       line is already marked as lifted from the document, and the marks read as
       scare quotes once they are not doing that job. The word is set in the
       quote face, quote/large, because it is the bank's own wording lifted out
       of the card — the phone steps it to quote/medium in commitment.css. The
       face is the only marker: no quotation marks, in this face either. */
    var head = el('<div class="cm-phrase-head"></div>');
    head.appendChild(el('<span class="cm-chip ts-label-sm">' + esc(typeLabel(phrase.type)) + "</span>"));
    head.appendChild(el('<h3 class="ts-quote-lg">' + esc(phrase.label) + "</h3>"));
    /* Bank.Green's own reading, not Watchtower's record. It belongs inside the
       title block, under the chip — frames 15725:109400 / 110220 put it there, as
       the third row of the same stack — so the 64px that separates the title from
       "What it means" is measured from the label rather than from the chip. */
    if (phrase.not_in_synthesis) {
      head.appendChild(el('<p class="cm-not-in-synthesis ts-label-md">'
        + esc(STR.notInSynthesis) + "</p>"));
    }

    block.appendChild(head);

    if (phrase.means) {
      var m = el('<div class="cm-field"></div>');
      m.appendChild(el('<div class="cm-field-label ts-label-md">' + esc(STR.labelMeans) + "</div>"));
      /* `means` is authored as paragraphs separated by a blank line — analysis
         spec, "1–3 sentences. Paragraphs separated by a blank line." They were
         being printed as one run of text, so a deliberate break read as a
         space. */
      String(phrase.means).split(/\n\s*\n/).forEach(function (para) {
        m.appendChild(el('<p class="ts-body-md">' + esc(para.trim()) + "</p>"));
      });

      /* Where the bank defines the term itself, its own words go inside this
         block rather than beside it — page spec: "its quote runs inline in the
         same block, followed by a SYNTHESIS button". It is the strongest thing
         on the page when it exists, because it is the bank closing the question
         rather than us reading it, and it was not being rendered at all. */
      var bd = phrase.bank_definition;
      if (bd && bd.quote) {
        var def = el('<div class="cm-bank-def"></div>');
        def.appendChild(el('<p class="cm-bank-def-quote ts-body-md">\u201c'
          + esc(bd.quote) + "\u201d</p>"));
        var src = sourceById(bd.source_id);
        var foot = el('<div class="cm-bank-def-foot"></div>');
        foot.appendChild(el('<a class="cm-check ts-label-sm" href="'
          + href(synthesisHref(src)) + '" target="_blank" rel="noopener">'
          + esc(STR.buttonSynthesis) + "</a>"));
        def.appendChild(foot);
        m.appendChild(def);
      }
      block.appendChild(m);
    }

    /* A list of one is not a list. Five of this page's six phrases let exactly
       one thing through, and a lone bullet indents the sentence and promises a
       second item that never comes — the component draws a plain paragraph
       (15317:1098). Two or more still get the bullets, which are what makes
       them countable. */
    var lets = phrase.lets_through || [];
    if (lets.length) {
      var lt = el('<div class="cm-field"></div>');
      lt.appendChild(el('<div class="cm-field-label ts-label-md">' + esc(STR.labelLetsThrough) + "</div>"));
      if (lets.length === 1) {
        lt.appendChild(el('<p class="ts-body-md">' + esc(lets[0]) + "</p>"));
      } else {
        var ul = el('<ul class="ts-body-md"></ul>');
        lets.forEach(function (t) { ul.appendChild(el("<li>" + esc(t) + "</li>")); });
        lt.appendChild(ul);
      }
      block.appendChild(lt);
    }

    var rw = realWorld(phrase.id);
    if (rw) block.appendChild(rw);
    return block;
  }

  /* The opening passage is where the promise is made, so it is read rather
     than annotated: what the wording sounds like, and whether that turned out
     to be true. Both halves come from the record — naive_reading is the lay
     reading of the clause, and the strength is the verdict already reached — so
     nothing here is authored per page. Every naive_reading in the set opens
     with "it", which is the pronoun the bank's name replaces. */
  function pledgeIntro() {
    var reading = C.naive_reading;
    if (!reading) return null;
    var named = String(reading).replace(/^it\b/, C.bank || "the bank");
    return fill(STR.pledgeIntro, { bank: C.bank || "the bank", reading: named });
  }

  function partSection(clause, i) {
    var sec = el('<section class="cm-section cm-part" id="' + esc(partId(i)) + '"></section>');
    var grid = el('<div class="cm-grid"></div>');
    var main = el('<div class="cm-main"></div>');

    var intro = el('<div class="cm-block"></div>');
    intro.appendChild(el('<h2 class="cm-part-title ts-title-xl">' + esc(partTitle(clause, i)) + "</h2>"));
    /* `intro` is the field the data actually carries — all 81 clauses have one
       and none has ever had a `description`, so this paragraph has been silently
       absent from every page since the renderer was written. `description` is
       still accepted in case a file uses it. */
    var clauseIntro = i === 0 ? pledgeIntro() : (clause.intro || clause.description);
    if (clauseIntro) {
      intro.appendChild(el('<p class="cm-part-desc ts-body-xl">' + esc(clauseIntro) + "</p>"));
    }
    main.appendChild(intro);

    (clause.phrases || []).forEach(function (p) { main.appendChild(phraseBlock(p)); });

    var side = el('<div class="cm-side"></div>');
    side.appendChild(buildCard(clause, i).root);

    grid.appendChild(side);
    grid.appendChild(main);
    sec.appendChild(grid);
    return sec;
  }

  /* --- Assessment ------------------------------------------------------------- */

  /* The verdict's stamp — the "Our Assessment" component, Figma 14914:24756,
     one variant per strength, exported as SVG from Figma with its tilt. Sized
     as drawn. */
  var STAMPS = {
    crushed:  { src: "assets/stamp-crushed.svg",  w: 204, h: 83 },
    hollowed: { src: "assets/stamp-hollowed.svg", w: 232, h: 84 },
    holds:    { src: "assets/stamp-holds.svg",    w: 238, h: 85 }
  };

  /* Figma 15289:100256. One column: a line saying what follows is opinion, the
     title, the verdict's stamp, the verdict in running text, then what the bank
     needs to change. The verdict shown is the final one once it is set, and
     until then the option selected — not the authoring view of all three. */
  function assessmentSection() {
    var a = C.assessment || {};
    var strength = STRENGTH[a.strength];
    var stamp = STAMPS[a.strength];
    var sec = el('<section class="cm-assessment" id="assessment"></section>');
    var col = el('<div class="cm-assess-col"></div>');

    var head = el('<div class="cm-assess-head"></div>');
    var titles = el('<div class="cm-assess-titles"></div>');
    titles.appendChild(el('<p class="cm-assess-lead ts-body-sm">' + esc(STR.assessmentLead) + "</p>"));
    titles.appendChild(el('<h2 class="cm-assess-title ts-title-xl">'
      + esc(STR.sectionAssessment) + "</h2>"));
    head.appendChild(titles);
    if (strength && stamp) {
      head.appendChild(el('<img class="cm-stamp" src="' + stamp.src + '" width="' + stamp.w
        + '" height="' + stamp.h + '" alt="' + esc(strength.display) + '">'));
    }
    col.appendChild(head);

    var options = a.verdict_options || [];
    var verdict = a.verdict_final
      || (options[a.verdict_selected] || options[0] || {}).text;
    if (verdict) {
      var v = el('<div class="cm-verdict"></div>');
      String(verdict).split("\n\n").forEach(function (para) {
        v.appendChild(el('<p class="ts-body-md">' + esc(para) + "</p>"));
      });
      col.appendChild(v);
    }

    var items = a.what_needs_to_change || [];
    if (items.length || a.what_needs_to_change_closing) {
      var change = el('<div class="cm-change-card"></div>');
      change.appendChild(el('<h3 class="ts-title-md">'
        + esc(STR.labelWhatNeedsToChange.replace("{bank}", C.bank)) + "</h3>"));
      items.forEach(function (it) {
        var item = el('<div class="cm-change-item"></div>');
        item.appendChild(el('<div class="t ts-title-xs">' + esc(it.title) + "</div>"));
        item.appendChild(el('<div class="b ts-body-sm">' + esc(it.content) + "</div>"));
        change.appendChild(item);
      });
      if (a.what_needs_to_change_closing) {
        change.appendChild(el('<p class="cm-change-closing ts-body-sm">'
          + esc(a.what_needs_to_change_closing) + "</p>"));
      }
      col.appendChild(change);
    }

    sec.appendChild(col);
    return sec;
  }

  /* --- Card sizing -----------------------------------------------------------
     The card is at minimum a square and never taller than the window. The
     quote steps down the Lora headline ladder until it fits — driven by how
     much text there is, not by how wide the browser is, so a given quote
     keeps one size while the reader resizes.

     One size and one height are chosen per Part, fitting the tallest of that
     Part's states, so the card does not resize under the reader when the tab
     changes.                                                                  */

  /* The topbar sticks at 0 and the breadcrumb directly under it, so the card
     rests below the sum of their heights. Read from the DOM rather than
     restated, because both are shared chrome that can change. */
  function measureStickyTop() {
    return measureChrome() + 24;   /* the design sets the card 24px below the bar */
  }

  /* The two bars that stay on screen. The card rests 24px below them; a section
     snapping to the top has to clear them exactly, or its heading lands behind
     the breadcrumb. */
  function measureChrome() {
    var bar = document.querySelector(".cm-topbar, .topbar");
    var crumb = document.querySelector(".cm-breadcrumb");
    return Math.round((bar ? bar.getBoundingClientRect().height : 56)
                    + (crumb ? crumb.getBoundingClientRect().height : 56));
  }

  /* Every state the card can show, so the tallest one sets the size. */
  function statesOf(card) {
    var out = [], clause = card.clause;
    ["plain", "verbatim"].forEach(function (tab) {
      var text = tab === "plain" ? clause.plain_rendering : clause.verbatim;
      if (!text) return;
      out.push(tab === "plain" ? text : "“" + text + "”");
    });
    return out;
  }

  function sizeCard(card, avail) {
    var root = card.root, q = card.quoteEl;
    var width = root.getBoundingClientRect().width;
    var states = statesOf(card);
    var chrome = chromeOf(card);
    var budget = Math.max(0, avail - chrome);

    root.classList.add("is-measuring");
    var chosen = QUOTE_STEPS[QUOTE_STEPS.length - 1], tallest = 0;

    for (var i = 0; i < QUOTE_STEPS.length; i++) {
      var step = QUOTE_STEPS[i], max = 0;
      root.style.setProperty("--cm-quote-size", step.size + "px");
      root.style.setProperty("--cm-quote-leading", step.leading + "px");
      for (var j = 0; j < states.length; j++) {
        q.textContent = states[j];
        max = Math.max(max, q.scrollHeight);
      }
      if (max <= budget || i === QUOTE_STEPS.length - 1) { chosen = step; tallest = max; break; }
    }

    root.style.setProperty("--cm-quote-size", chosen.size + "px");
    root.style.setProperty("--cm-quote-leading", chosen.leading + "px");
    root.classList.remove("is-measuring");
    paintCard(card);

    var needed = chrome + tallest;
    var height = Math.min(Math.max(width, needed), Math.max(avail, 0) || width);
    root.style.setProperty("--cm-card-h", Math.round(height) + "px");
  }

  function measure() {
    if (!cards.length) return;
    var top = measureStickyTop();
    stickyTop = top;
    document.body.style.setProperty("--cm-sticky-top", top + "px");
    document.body.style.setProperty("--cm-chrome", measureChrome() + "px");

    var clearance = parseFloat(getComputedStyle(document.body)
      .getPropertyValue("--cm-clearance")) || 24;
    var avail = window.innerHeight - top - clearance;
    cards.forEach(function (c) { sizeCard(c, avail); });
    extendTracks();
    if (applyScroll) applyScroll();
  }

  /* Let the browser hold the outgoing card, rather than script.

     A card is sticky inside its own section's track, so when the section ends it
     is released and scrolls away at page speed — which is why nothing ever
     covered anything. Holding it with a transform on every scroll event fixed
     that and introduced a worse problem: the handler runs after the browser has
     already painted that frame, so the card lagged the page by a frame and
     shivered, while the prose beside it moved cleanly because nothing was
     touching it.

     Instead each track is grown downwards, into the space the next section
     occupies, by exactly enough for its card to stay pinned until the next card
     reaches the bar: one card height plus the inset. `padding-bottom` grows the
     box that sticky is constrained by; the matching negative `margin-bottom`
     takes the growth back out of the layout, so the grid row, the section height
     and everything below are untouched.

     Run from measure(), so it costs nothing per frame and there is no positional
     script left on the scroll path at all. */
  function extendTracks() {
    var inset = 24;
    Array.prototype.forEach.call(
      document.querySelectorAll(".cm-part .cm-side, .cm-hero-section .cm-side"),
      function (side) {
        var card = side.querySelector(".cm-card, .cm-deal.is-hero");
        var existing = side.querySelector(".cm-reach");
        if (existing) existing.style.height = "0px";
        side.style.marginBottom = "";
        if (!card) return;
        /* below the breakpoint the card is not sticky and the extension would
           only overlap the next section for nothing */
        if (getComputedStyle(card).position !== "sticky") return;
        /* A spacer, not padding. Padding sits outside the content box and only
           brings the card's travel to an earlier stop — the first attempt at this
           grew the padding by a card height and the overlap stayed at zero. Real
           content in the box is what a sticky element can travel through. */
        var reach = card.offsetHeight + inset;
        var spacer = side.querySelector(".cm-reach");
        if (!spacer) {
          spacer = document.createElement("div");
          spacer.className = "cm-reach";
          spacer.setAttribute("aria-hidden", "true");
          side.appendChild(spacer);
        }
        spacer.style.height = reach + "px";
        side.style.marginBottom = -reach + "px";
      });
  }

  /* --- Scroll driver -----------------------------------------------------------
     One handler answers everything that depends on where the page is: the
     breadcrumb going dark over the assessment, and each pinned card fading as
     the next one covers it. It does not touch the quotes — their highlights are
     fixed, not lit by the scroll position.

     Reading positions on scroll rather than using observers keeps both on the
     same measurement in the same frame; two mechanisms disagreeing about where
     the page is, by even one frame, is visible as a stutter.                  */

  var stickyTop = 136;

  /* Set once the driver is running; measure() calls it so a resize settles the
     breadcrumb and the stack against the new sizes. */
  var applyScroll = null;

  /* --- Pinning -----------------------------------------------------------------
     The card itself is plain `position: sticky` — it pins while its section
     scrolls and the next one overlays it on the way past.

     There is no entry, exit or reveal animation. There was, and each piece had to
     be tuned against the window height, the length of the section and the
     handover to the next card all at once; no value satisfied all three, and
     every correction moved the problem somewhere else. Sticky on its own has no
     such couplings. Better motion can be built back on top of a base that is
     known to be right. */
  /* --- The stack ---------------------------------------------------------------
     A card holds its place while the next one slides up over it, and settles back
     as it is covered. Two things make that work and neither is an animation
     curve, which is why this survives a change of window size:

       painting order — a later card is later in the document, so it covers an
       earlier one with no z-index needed;

       coverage — how far the incoming card has come over the outgoing one,
       measured directly from the two boxes. Every value below is a function of
       that one number, so nothing has to be tuned against the viewport, the
       section length or the scroll speed. At 0 the card is untouched; at 1 it is
       out of sight behind its successor and released. */
  var STACK_FADE = 0;       /* opacity a card reaches by the time it is covered */
  var STACK_LEAD = 60;      /* px of approach before the cover begins           */
  var STACK_SPEED = 1.2;    /* how much quicker than the cover the fade runs    */

  /* Dark variant. Both are settings rather than a rewrite of the elements: the
     breadcrumb and the footer keep their own layout and only swap surface and
     ink, by gaining or losing `is-dark`. */
  var CRUMB_DARK_ON_ASSESSMENT = true;   /* crumb goes dark once a dark surface is under it */

  /* A jump is a journey, not a teleport: at this speed a reader sees which way
     the page moved and roughly how far, which is the difference between arriving
     somewhere and being put there. Proportional to distance, with a floor so a
     short hop is not laboured and a ceiling so a long one does not crawl. */
  var JUMP_MS_PER_1000PX = 700;
  var JUMP_MIN_MS = 420;
  var JUMP_MAX_MS = 1400;
  var FOOTER_DARK = true;                /* footer is dark for the whole page               */

  /* One rAF animation, started by a click and finished on its own. Nothing here
     runs while the reader is scrolling normally, so it cannot cost a frame the way
     per-scroll positioning did, and it stands aside the moment they touch the
     page themselves. */
  function glideTo(to) {
    var from = window.pageYOffset;
    var dist = Math.abs(to - from);
    if (!dist) return 0;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, to);
      return 0;
    }

    var ms = Math.max(JUMP_MIN_MS, Math.min(JUMP_MAX_MS, dist / 1000 * JUMP_MS_PER_1000PX));
    var start = null, cancelled = false;

    function stop() { cancelled = true; }
    window.addEventListener("wheel", stop, { passive: true, once: true });
    window.addEventListener("touchstart", stop, { passive: true, once: true });
    window.addEventListener("keydown", stop, { once: true });

    function step(now) {
      if (cancelled) return;
      if (start === null) start = now;
      var p = Math.min(1, (now - start) / ms);
      /* Ease in and out: it leaves gently enough to show the direction, and
         settles rather than stopping dead. */
      var e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      window.scrollTo(0, Math.round(from + (to - from) * e));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    return ms;
  }

  /* Landing on a section or a block — shared by the jump links and the quote
     highlights, so both arrive the same way.

     The target's own top edge goes to the bars. Where it draws a rule there — a
     Part, or a block that follows another block, which every phrase block does —
     that rule lands on the breadcrumb's bottom border, one pixel up
     (SNAP_OVERLAP) so the two read as a single line rather than a 2px one.
     Anything with no rule of its own sits flush under the bars.

     The boundary glide is held off for the whole journey and a little after:
     the page is moving down, which is exactly what it listens for, and landing
     a block near the foot of a Part can leave the next Part close enough to be
     pulled to. The 400 outlasts its settle check, which runs 180ms after the
     last scroll. */
  function landOn(target) {
    var hasRule = parseFloat(getComputedStyle(target).borderTopWidth) > 0;
    var line = hasRule ? landingLine() : chromeHeight();
    var ms = glideTo(Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - line));
    if (snapper) snapper.suppress(ms + 400);
  }

  function scrollDriver() {

    /* Every card that pins, in document order, so each knows its successor. */
    var stack = Array.prototype.slice
      .call(document.querySelectorAll(".cm-deal.is-hero, .cm-card"))
      .map(function (el) { return { el: el, track: el.parentElement }; });
    stack.forEach(function (s, i) { s.next = stack[i + 1] || null; });

    /* A jump lands on the rule at the top of a section, not on its heading. The
       heading sits 120 below that rule, so scrolling to it left the rule and the
       top of the card above the fold — the reader arrived just past the thing
       they asked for. Landing on the rule puts the whole group in view, card
       included, directly under the chrome. */
    Array.prototype.forEach.call(document.querySelectorAll(".cm-jump a"), function (a) {
      a.addEventListener("click", function (ev) {
        var href = a.getAttribute("href");
        var target = document.getElementById(href.slice(1));
        if (!target) return;
        ev.preventDefault();
        /* The anchor itself, not the section around it. Every id the jump list
           uses is already on the thing the reader asked for — a part id is on
           its section, `assessment` on its section, `sources` on the block
           inside the hero's prose column. Widening to `closest('.cm-section')`
           only changed the last of those, and changed it into the top of the
           page.

           A section lands on its own top edge, which is where the boundary
           glide puts it too, so the two agree. A block lands on its heading
           instead: a block carries its rhythm as top padding, and landing on
           the padding box leaves the reader looking at 120px of nothing with
           the title they asked for below it. */
        /* Land on the anchor's own top edge — the rule that opens it, not the
           first words inside it. A group's rule and the space under it are how
           the page says a new thing has started, and arriving below them drops
           the reader in with no sign of where they landed.

           Whether that edge overlaps the bars follows from whether it draws a
           rule there. Sections do; so does a block that follows another block,
           which is what the sources block is — a 1px rule with 120px beneath it
           before the heading. A pixel of overlap puts that rule exactly where
           the breadcrumb's own already is, so one line shows instead of two.
           Anything with no rule of its own sits on the line. */
        landOn(target);
        /* The hash still updates, so the address bar and the back button behave
           as they would have — without the browser's own instant jump. */
        if (history.replaceState) history.replaceState(null, "", href);
      });
    });

    var crumb = document.querySelector(".cm-breadcrumb");
    /* The first dark surface under the bar: the assessment. */
    var darkFrom = document.querySelector(".cm-assessment");
    var footer = document.querySelector(".cm-footer");
    if (footer && FOOTER_DARK) footer.classList.add("is-dark");

    function apply() {
      /* The crumb takes the assessment's colours from the moment the assessment
         reaches it, so a pale bar is never left sitting over the dark section. */
      if (CRUMB_DARK_ON_ASSESSMENT && crumb && darkFrom) {
        crumb.classList.toggle("is-dark",
          darkFrom.getBoundingClientRect().top <= crumb.getBoundingClientRect().bottom);
      }

      /* The stack. Read each card's position with last frame's hold removed, so
         the browser's own sticky answer is what we build on rather than a
         restatement of it.

         Only where the cards actually stack. The fade describes one card being
         covered by the next, which only happens while they pin — below the
         break they simply follow each other down the column and nothing is ever
         covered. Worse than pointless there: the cover is measured against the
         successor's track, and on a phone that track is the prose column, whose
         top is far above the window. Every card read as fully covered and went
         to STACK_FADE, which is zero — four white cards, correctly sized and
         completely invisible. The same test extendTracks uses, and for the same
         reason: ask the browser whether they are pinned rather than restate the
         breakpoint. */
      var stacks = stack.length
        && getComputedStyle(stack[0].el).position === "sticky";

      for (var s = 0; s < stack.length; s++) {
        var it = stack[s];
        if (!stacks || !it.next) { clearHold(it); continue; }

        var h = it.el.offsetHeight;

        /* Measured against the incoming group's track, not its card, and started
           STACK_LEAD earlier than the moment they touch.

           The track is what actually hides this card — it carries the page ground
           and is painted over the top — and it arrives before the card inside it
           does. Keying the fade to the card meant the wipe was already underway
           before the fade began, so the two happened at once and the fade read as
           nothing at all. With the lead, the card is visibly dim by the time the
           ground reaches it, and the wipe finishes something the eye has already
           started following.

           STACK_LEAD is a distance down the page, not a fraction of the window,
           so it does not change with the size of the screen. */
        var nextTop = it.next.track.getBoundingClientRect().top;
        /* Divided by STACK_SPEED so the fade finishes before the cover does — it
           is the dimming that should read, and a fade paced to the cover arrives
           at the same moment as the thing that hides it. */
        var span = (h + STACK_LEAD) / STACK_SPEED;
        var cover = Math.max(0, Math.min(1, (stickyTop + h + STACK_LEAD - nextTop) / span));

        /* Only the near end clears. Now that the fade leads the cover, `cover`
           reaches 1 while the card is still in plain sight — clearing there
           snapped it back to full opacity in front of the reader. It holds at
           STACK_FADE until the successor has gone past and the card is behind
           it. */
        if (cover <= 0) { clearHold(it); continue; }
        /* The hold is released only once the successor is itself at the bar, at
           which point it occupies the same top edge and the same width and the
           card behind it cannot be seen. Releasing on `cover` instead let go
           while a sliver was still showing — the successor's track reaches the
           bar 24px before its card does — and the outgoing card visibly snapped
           away, about 100px of it still on screen. */
        if (it.next.el.getBoundingClientRect().top <= stickyTop + 1) {
          it.el.style.opacity = STACK_FADE.toFixed(3);
          continue;
        }

        /* Opacity only. Nothing on the scroll path moves anything any more —
           the hold is done by the extended track, in layout, by the browser. */
        it.el.style.opacity = (1 - (1 - STACK_FADE) * cover).toFixed(3);
      }
    }

    function clearHold(it) {
      if (it.el.style.opacity) it.el.style.opacity = "";
    }

    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    apply();
    return apply;
  }

  /* --- Mount ------------------------------------------------------------------ */

  /* --- Carrying the reader over a group boundary --------------------------------
     The join between two quote groups is the one place a scroll reliably lands
     badly: stop short and the old card is still pinned over the new group's
     opening; overshoot and its heading is gone. So once the reader has pushed
     far enough into the next group to have plainly left the last one, the page
     finishes the movement for them.

     Down only. Scrolling back up is the reader going to find something they
     have already read, and a page that hauls them to a heading while they are
     looking for a sentence is a page fighting them.

     Not CSS scroll-snap: it has no notion of direction, and both its threshold
     and its easing belong to the browser. This wants a specific feel — normal
     resistance, then a slow release — so it has to be built.

     Everything here yields to the reader. Any wheel, key or touch during the
     glide ends it on the spot and leaves the page where it was; the glide is a
     convenience, never a trap. */

  /* Two numbers, and they are not independent.

     SNAP_AT is how far into the group the reader has to push before the page
     takes over, as a fraction of the window: at 0.75 the incoming group's top
     has to have climbed past three quarters, so the group before it is down to
     its last lines. A HIGHER number fires EARLIER — the
     line it has to cross is further down the screen — and therefore leaves more
     distance to travel.

     Which is why the pair has to move together. Distance is
     `window * SNAP_AT - chrome`, so raising SNAP_AT alone makes the same
     duration cover more ground and the glide comes out faster, not slower.
     SNAP_MS is the duration at the nominal distance; what actually stays
     constant is the speed it implies, and the tween below derives its own
     duration from that. Without it, stopping just past the line leaves a 60px
     remainder that still takes the full duration and crawls.

     Both can be overridden per load for comparing them by hand:
       ?snap=0.65,1350    fires later, and glides more slowly
       ?snap=off          leaves the page alone entirely

     SNAP_MS rises with SNAP_AT to hold the speed: 0.75 leaves 563px to cover
     on a 900px window against 0.65's 473, so the two are not comparable as
     durations, only as the speeds they imply. 775ms over 563px is ~725px/s. */
  var SNAP_AT = 0.75;
  var SNAP_MS = 775;

  /* How long the landing stays protected. The glide absorbs the wheel while it
     runs, but the reader's hand does not stop when the tween does — the notches
     still coming when it lands would otherwise scroll the page natively, which
     reads as the snap being nudged off its mark a moment after it arrives.
     Short enough not to feel locked, long enough to swallow the tail. */
  var SNAP_HOLD_MS = 350;
  var SNAP_OFF = false;

  (function readSnapOverride() {
    var m = /[?&]snap=([^&]+)/.exec(location.search);
    if (!m) return;
    var v = decodeURIComponent(m[1]);
    if (v === "off") { SNAP_OFF = true; return; }
    var parts = v.split(",");
    var at = parseFloat(parts[0]), ms = parseFloat(parts[1]);
    if (at > 0 && at <= 1) SNAP_AT = at;
    if (ms > 0) SNAP_MS = ms;
  })();

  /* Out, not in-out. The glide begins at the moment the reader is still
     pushing, so it has their momentum to inherit — easing in on top of that
     reads as the page hesitating before it moves. Starting at speed and
     settling is the same shape as letting go of a scroll. */
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function chromeHeight() {
    return parseFloat(getComputedStyle(document.body)
      .getPropertyValue("--cm-chrome")) || 112;
  }

  /* A section is landed one pixel above the bars, not flush against them.

     Both the breadcrumb and a section rule the same 1px in the same colour, and
     --cm-chrome is the breadcrumb's outer edge, border included. Landing a
     section flush therefore stacks its top rule directly under the breadcrumb's
     bottom rule and the join reads as a 2px line — the one place on the page
     where a rule is twice the weight of every other.

     Overlapping by one puts the section's rule exactly where the breadcrumb's
     already is, and the breadcrumb paints over it, so one rule shows. The cost
     is a pixel of the section hidden behind the bar, which is the border
     itself. */
  var SNAP_OVERLAP = 1;

  function landingLine() { return chromeHeight() - SNAP_OVERLAP; }

  function snapDriver() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    var wide = window.matchMedia("(min-width: 1101px)");
    var last = window.scrollY;
    var frame = null, gliding = false, suppressUntil = 0, idle = null, wasDown = false;
    var holdUntil = 0;

    function targets() {
      return Array.prototype.slice.call(
        document.querySelectorAll(".cm-part, .cm-assessment"));
    }

    /* Breaking out is not abandoning. The glide stops at once — the reader has
       control back — but the group is still half-arrived, so a settle is
       queued behind it. If they were turning back, the scroll that follows
       clears it; if they had simply jogged the wheel, it finishes the job. */
    function stop() {
      gliding = false;
      if (frame) { cancelAnimationFrame(frame); frame = null; }
      clearTimeout(idle);
      idle = setTimeout(tryGlide, 260);
    }

    function glideTo(el, to) {
      var from = window.scrollY, dist = to - from, t0 = null;
      /* Duration from distance, so every glide travels at the same speed
         whatever is left to cover. The nominal distance is what SNAP_MS was
         written against; a shorter hop is proportionally shorter in time, with
         a floor so it is still a movement and not a jump. */
      var nominal = Math.max(1, window.innerHeight * SNAP_AT - chromeHeight());
      var ms = Math.max(220, SNAP_MS * (Math.abs(dist) / nominal));
      gliding = true;
      function step(ts) {
        if (!gliding) return;
        if (t0 === null) t0 = ts;
        var k = Math.min(1, (ts - t0) / ms);
        /* `auto` because the stylesheet sets scroll-behavior: smooth — without
           it the browser would ease every frame of an already eased tween. */
        window.scrollTo({ top: from + dist * easeOutCubic(k), behavior: "auto" });
        last = window.scrollY;
        if (k < 1) frame = requestAnimationFrame(step);
        else {
          gliding = false; frame = null;
          /* Landed. Keep swallowing the tail of the gesture for a moment. */
          holdUntil = Date.now() + SNAP_HOLD_MS;
        }
      }
      frame = requestAnimationFrame(step);
    }

    /* The group being arrived at: the first one whose top is still below the
       bars but has come far enough down the screen to count as entered. Null
       once its top reaches the bars, which is the moment it has been arrived
       at and there is nothing left to correct. */
    function pending() {
      if (SNAP_OFF || !wide.matches || reduce.matches) return null;
      var chrome = chromeHeight(), line = window.innerHeight * SNAP_AT;
      var list = targets();
      for (var i = 0; i < list.length; i++) {
        var top = list[i].getBoundingClientRect().top;
        if (top <= chrome + 1) continue;
        if (top > line) return null;
        return { el: list[i], to: Math.round(window.scrollY + top - landingLine()) };
      }
      return null;
    }

    function tryGlide() {
      if (gliding || !wasDown || Date.now() < suppressUntil) return;
      var next = pending();
      if (next) glideTo(next.el, next.to);
    }

    function onScroll() {
      var y = window.scrollY, prev = last;
      last = y;
      if (gliding) return;
      wasDown = y > prev;
      if (!wasDown) { clearTimeout(idle); return; }
      /* A jump of more than a window is a link or a scrollbar drag, not a read. */
      if (y - prev > window.innerHeight) { clearTimeout(idle); return; }

      tryGlide();

      /* And again once they stop. There is no one-shot lock any more: a reader
         who breaks out of the glide — by turning back, or with a key, or on a
         trackpad whose inertial events cannot be absorbed — used to leave the
         group half-arrived with nothing willing to finish it. Whenever
         scrolling settles and a group is still short of the bars, it lands.
         Downwards only, so pulling back still means leaving. */
      clearTimeout(idle);
      idle = setTimeout(tryGlide, 180);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    /* Breaking out of the glide.

       Not "any input cancels": the glide fires *because* the reader is
       scrolling, so their next wheel notch is the tail of the gesture that
       asked for it, and cancelling on it would mean the glide never once ran
       to the end. Direction is what separates the two. Still pushing down is
       agreement — the page is already going there, so the notch is absorbed
       rather than fought over, which is also what stops the wheel and the tween
       adding up into an overshoot. Turning back up is the reader changing their
       mind, and that always wins immediately.

       Not passive: absorbing the downward notch means preventDefault, so this
       listener has to be able to call it. */
    window.addEventListener("wheel", function (e) {
      var holding = Date.now() < holdUntil;
      if (!gliding && !holding) return;
      /* Going back is always the reader, whether mid-flight or just landed. */
      if (e.deltaY < 0) { holdUntil = 0; stop(); return; }
      if (e.cancelable) e.preventDefault();   /* going on — the page has it */
    }, { passive: false });

    /* A key or a finger is a fresh intent, whichever way it points. */
    ["keydown", "touchstart", "mousedown"].forEach(function (ev) {
      window.addEventListener(ev, function () {
        holdUntil = 0;
        if (gliding) stop();
      }, { passive: true });
    });

    return {
      /* The jump links do their own scrolling; this must not race them. */
      suppress: function (ms) { stop(); clearTimeout(idle); suppressUntil = Date.now() + ms; }
    };
  }

  function mount() {
    var host = document.getElementById("cm-root");

    /* One commitment, so the crumb is two levels and the leaf says what the page
       is: "Commitments > Barclays' commitment on Arctic Oil & Gas". Once there is
       a repository to browse it becomes three — bank, then subject — and only the
       leaf changes; see the page spec. */
    var sep = '<svg class="ico" aria-hidden="true"><use href="#i-crumb"/></svg>';
    var leaf = C.bank ? possessive(C.bank) + " commitment on " + subject() : subject();
    host.appendChild(el('<nav class="doc-navbar cm-breadcrumb" aria-label="Breadcrumb">'
      + '<div class="crumbs">'
      + '<b class="crumb-root"><a href="commitments.html">Commitments</a></b>' + sep
      + '<b class="crumb-leaf" title="' + esc(leaf) + '">' + esc(leaf) + "</b>"
      + "</div></nav>"));

    var container = el('<div class="cm-container"></div>');
    container.appendChild(heroSection());
    (C.clauses || []).forEach(function (cl, i) { container.appendChild(partSection(cl, i)); });
    host.appendChild(container);

    host.appendChild(assessmentSection());

    host.appendChild(el('<footer class="cm-footer ts-body-sm"><div class="inner">'
      + '<span class="cm-wordmark"><svg class="ico" aria-hidden="true"><use href="#i-logo-dark"/></svg>'
      + "Watchtower</span>"
      + '<span class="sep"></span>'
      + '<a href="https://bank.green">A Bank.Green Initiative</a>'
      + '<span class="spacer"></span>'
      + '<span>Send enquiries to <a href="mailto:enquiries@bank.green">enquiries@bank.green</a></span>'
      + '<span class="sep"></span>'
      + "<span>© 2026 Bank.Green. All rights reserved.</span>"
      + "</div></footer>"));

    var lastW = 0, lastH = 0;

    /* Every measure records what it was measured against, wherever it was
       called from. Left to the observer alone these stayed at zero until the
       first resize, so that resize always looked like a change and always
       re-fitted — even a height-only one on a phone, which is the case the
       guard below exists to ignore. */
    function measureAndRecord() {
      measure();
      lastW = Math.round(cards[0] ? cards[0].root.getBoundingClientRect().width : 0);
      lastH = window.innerHeight;
    }

    /* After first paint, and again once webfonts land — Lora changes the wrap
       points, so a height measured against the fallback is wrong. */
    requestAnimationFrame(function () { requestAnimationFrame(measureAndRecord); });
    setTimeout(measureAndRecord, 120);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureAndRecord);
    /* Below the break the card is static, auto-height and uncapped, so the
       window's height has no say in how the quote is set — only the column's
       width does. And on a phone that height is not a property of the device
       at all: the browser's own chrome collapses and expands as the reader
       scrolls, firing a resize each time. Re-fitting on those meant every quote
       on the page stepped up or down a size mid-scroll, together, for no reason
       the reader could see.

       So height is only a reason to re-fit where it is also a constraint.
       Width always is — a rotation still re-fits. */
    function remeasureIfChanged() {
      var w = Math.round((cards[0] ? cards[0].root.getBoundingClientRect().width : 0));
      var heightMatters = window.matchMedia("(min-width: 1101px)").matches;
      if (w === lastW && (!heightMatters || window.innerHeight === lastH)) return;
      measureAndRecord();
    }

    if (window.ResizeObserver && cards[0]) {
      /* The Part's left column is observed, never the card: measuring sets the
         card's height, which would otherwise feed straight back in. */
      var probe = document.querySelector(".cm-part .cm-main");
      if (probe) new ResizeObserver(remeasureIfChanged).observe(probe);
    }

    var timer;
    window.addEventListener("resize", function () {
      clearTimeout(timer);
      timer = setTimeout(remeasureIfChanged, 80);
    });

    applyScroll = scrollDriver();
    snapper = snapDriver();
    window.addEventListener("load", applyScroll);

    /* A highlight jumps to the phrase block it names, landing the way a jump
       link does: the rule above the block on the breadcrumb's bottom border,
       not the title under it. */
    host.addEventListener("click", function (e) {
      var b = e.target.closest(".cm-hl");
      if (!b) return;
      var t = document.getElementById("phrase-" + b.dataset.phrase);
      if (!t) return;
      /* The first block of a Part draws no rule of its own: the line above it
         is the Part's top border, so that is what lands on the breadcrumb. */
      if (!(parseFloat(getComputedStyle(t).borderTopWidth) > 0)) t = t.closest(".cm-part") || t;
      landOn(t);
    });

    placeTitle();
    placeCards();

    document.title = C.title + " — Watchtower";
  }

  /* --- Where each Part's quote sits -------------------------------------------
     Desktop puts the card column first, so a Part reads as a quote on the left
     with its analysis beside it. In one column that order becomes a sequence,
     and the sequence was wrong: the reader met the quotation before the heading
     that says which passage it is or the sentence explaining what to look for.

     So wherever the page is one column — from 1100 down, not only on a phone —
     the card moves down one place: after the Part's heading and intro, before
     the phrases that pull it apart. Title, then the words, then what is wrong
     with them. The break is placeTitle's, so the hero and the Parts reorder
     together.

     The node moves rather than being reordered in CSS, for the same reason the
     headline does: `order` would leave a screen reader walking the Part in the
     desktop sequence while the screen showed this one. */
  function placeCards() {
    var narrow = window.matchMedia("(max-width: 1100px)");
    var parts = Array.prototype.map.call(
      document.querySelectorAll(".cm-part"),
      function (sec) {
        var side = sec.querySelector(".cm-side");
        var main = sec.querySelector(".cm-main");
        return {
          side: side,
          main: main,
          card: side && side.querySelector(".cm-card"),
          intro: main && main.querySelector(".cm-block")
        };
      }
    ).filter(function (p) { return p.side && p.main && p.card && p.intro; });

    function apply() {
      parts.forEach(function (p) {
        var inMain = p.card.parentNode === p.main;
        if (narrow.matches) {
          if (inMain) return;
          p.main.insertBefore(p.card, p.intro.nextSibling);
        } else {
          if (!inMain) return;
          /* Back to the head of its column — the reach spacer extendTracks adds
             belongs after it. */
          p.side.insertBefore(p.card, p.side.firstChild);
        }
      });
    }

    apply();
    if (narrow.addEventListener) narrow.addEventListener("change", apply);
    else if (narrow.addListener) narrow.addListener(apply);
  }

  /* --- Where the headline sits -------------------------------------------------
     On desktop the hero is two columns and the headline opens the prose one, so
     the figure card and the title stand side by side. Below the break there is
     one column and the card column comes first, which put the $188.4M above the
     name of the commitment it belongs to — the reader met the number before
     they were told whose it was. Figma 15742:114208 gives the title its own
     band above the hero at 390, and the band goes up wherever the hero is one
     column — from 1100 down, not only on a phone — since between 700 and 1100
     the column reads just as it does at 390. The commitments overview orders
     its hero the same way at the same break (placeIntro in commitments.js).

     The node moves rather than being reordered in CSS. `order` would leave a
     screen reader and a keyboard walking the page in the old sequence while the
     screen showed the new one, and the hero's grid comment already commits to
     DOM order being the read order.

     matchMedia rather than resize: it fires on the crossing, not on every pixel
     of a drag. */
  function placeTitle() {
    var hero = document.querySelector(".cm-hero-section");
    if (!hero) return;
    var title = hero.querySelector(".cm-title");
    var meta = hero.querySelector(".cm-title-meta");
    var intro = title && title.parentNode;
    var grid = hero.querySelector(".cm-grid");
    if (!title || !intro || !grid) return;

    var band = el('<div class="cm-title-band"></div>');
    var narrow = window.matchMedia("(max-width: 1100px)");

    /* Whether the band is up, asked of the hero rather than of the band. A node
       from el() is still a child of the template fragment it was parsed in, so
       `band.parentNode` is truthy from the moment it is created and never
       reports "not placed yet". */
    function apply() {
      var placed = band.parentNode === hero;
      if (narrow.matches) {
        if (placed) return;
        band.appendChild(title);
        if (meta) band.appendChild(meta);
        hero.insertBefore(band, grid);
      } else {
        if (!placed) return;
        /* Back to the head of the prose column, in the order they were built. */
        intro.insertBefore(title, intro.firstChild);
        if (meta) title.parentNode.insertBefore(meta, title.nextSibling);
        hero.removeChild(band);
      }
    }

    apply();
    if (narrow.addEventListener) narrow.addEventListener("change", apply);
    else if (narrow.addListener) narrow.addListener(apply);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();

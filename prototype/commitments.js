/* ==========================================================================
   Commitments overview — renders the case index (Figma 15199:63789), then
   the full commitment table below it (Figma 14372:49, the repository frame:
   its tools bar, its filter badges and its 40px row rhythm).

   The cards come from window.WATCHTOWER_CASES, the table from
   window.WATCHTOWER_TABLE — both generated, neither written by hand.
   ========================================================================== */
(function () {
  "use strict";

  /* Only the overview needs the case index; all-commitments.html loads the
     table alone, so the check is made where the cards are built. */
  var CASES = window.WATCHTOWER_CASES;

  /* Copy from Figma 15199:63789 and 15786:119703, which agree on it. */
  var HERO = {
    title: "Climate Commitment Misconceptions",
    intro: [
      "Banks’ climate commitments often sound impressive at first. " +
        "But the details can tell a very different story.",
      "Learn how to break down bank commitments through the eyes of a policy " +
        "analyst, and uncover what they really mean."
    ]
  };

  /* Only `arctic` was given a label by the design; the rest are humanised
     from the field rather than invented. */
  var CATEGORY_LABELS = { arctic: "Arctic Oil & Gas", oil_gas_expansion: "Oil & Gas Expansion" };

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  /* Barclays’ Commitment, not Barclays’s — a name already ending in s takes a
     bare apostrophe, as the frame shows. */
  function possessive(name) {
    return /s$/i.test(name) ? name + "\u2019" : name + "\u2019s";
  }

  function categoryLabel(c) {
    return CATEGORY_LABELS[c] ||
      String(c || "").replace(/_/g, " ").replace(/\b\w/g, function (m) { return m.toUpperCase(); });
  }

  function card(e, featured) {
    var a = el('<a class="ov-card' + (featured ? " is-featured" : "") + '" href="'
      + esc(e.page) + '"></a>');

    /* The scale the hover shrinks the card by, worked out as the pointer
       arrives so it is always 16px off the card's current width, whichever
       breakpoint set it — see .ov-card:hover in commitments.css. offsetWidth
       is the layout width, which the transform itself does not change. */
    a.addEventListener("pointerenter", function () {
      var w = a.offsetWidth;
      if (w > 16) a.style.setProperty("--ov-hover-scale", String((w - 16) / w));
    });

    /* "#5 Santander": the bank alone. Only the featured card keeps a noun after
       it, "#15 Barclays’ Commitment" — Figma 15199:63789 and 15786:119703 both
       draw it that way. */
    var who = featured ? possessive(e.bank) + " Commitment" : e.bank;
    a.appendChild(el('<div class="ov-head">'
      /* The space between the spans is for a screen reader, which otherwise
         reads "#15Barclays’"; a flex container drops it from the layout. */
      + "<span>#" + esc(e.number) + '</span> <span class="who">' + esc(who) + "</span></div>"));

    /* The plain rendering, the commitment's own words with the pronouns resolved
       to the bank, rather than the verbatim — which the page the card opens
       still quotes in full. */
    a.appendChild(el('<p class="ov-quote">' + esc(e.plain || e.quote) + "</p>"));

    var badges = el('<div class="ov-badges"></div>');
    badges.appendChild(el('<span class="badge">' + esc(categoryLabel(e.category)) + "</span>"));
    a.appendChild(badges);
    return a;
  }

  /* The commitment page's quote ladder — the Lora quote/* ramp from large down
     to extra_small, with quote/extra_large above it for the featured card.
     Only the names are written here: the sizes are read off the .ts-quote-*
     classes, which styles.css generates from figma design/design-tokens.json,
     the same way commitment.js reads them. */
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
  var FEATURED_STEP = readSteps(["ts-quote-xl"])[0];

  /* A card is a square at least: --ov-card-min, set here to its width. Its quote
     takes the largest step at which the whole card — head, quote and badges —
     still fits that square and the quote runs to no more lines than the clamp
     allows, so a step is never chosen only to be cut. Measured at the card's
     natural height, without the clamp. If no step manages both, it keeps the
     smallest; the clamp cuts the quote at seven lines, and the card grows only
     as far as those seven lines need. */
  function fitQuote(card) {
    var w = card.offsetWidth;
    if (!w) return;
    var q = card.querySelector(".ov-quote");
    /* The line limit is read off the stylesheet's clamp, not restated here. */
    var maxLines = parseInt(getComputedStyle(q).webkitLineClamp, 10) || Infinity;
    /* The featured card starts a step higher, at quote/extra_large 48/56 — the
       size the frame gives it — so a short quote there is set as large as it
       was before the ladder. A longer one steps down exactly as the others do. */
    var steps = card.classList.contains("is-featured")
      ? [FEATURED_STEP].concat(QUOTE_STEPS)
      : QUOTE_STEPS;
    card.classList.add("is-measuring");
    var chosen = steps[steps.length - 1];
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      card.style.setProperty("--ov-quote-size", step.size + "px");
      card.style.setProperty("--ov-quote-leading", step.leading + "px");
      var lines = Math.round(q.scrollHeight / step.leading);
      if (card.offsetHeight <= w && lines <= maxLines) { chosen = step; break; }
    }
    card.style.setProperty("--ov-quote-size", chosen.size + "px");
    card.style.setProperty("--ov-quote-leading", chosen.leading + "px");
    card.classList.remove("is-measuring");
    card.style.setProperty("--ov-card-min", w + "px");
  }

  function fitQuotes() {
    Array.prototype.forEach.call(document.querySelectorAll(".ov-card"), fitQuote);
  }


  /* ======================================================================
     The commitment list

     Structure, spacing and hover measured off
     watchtower.bank.green/institution/abn_amro: a 312px filter rail on the
     page ground, a 1112px white card, a 52px tools bar carrying the grouping
     control, then group headings over 32px rows separated by 8px of space —
     no rules between rows, the hover tint does that work.

     Every type style here is one of the classes defined in styles.css from
     the Figma text styles. Nothing sets a font size or weight of its own.
     ====================================================================== */

  var ROWS = window.WATCHTOWER_TABLE || [];

  /* Worst first. Alphabetical order would put Crushed next to Holds and say
     nothing; this is the order the assessment itself is graded in. */
  var RESULT_RANK = { crushed: 0, hollowed: 1, holds: 2 };

  /* Bank, then category, then the commitment itself: widest context first,
     narrowing to the thing being named. */
  var COLUMNS = [
    { key: "bank",      label: "Bank",       width: "180px" },
    { key: "fuel",      label: "Category",   width: "150px" },
    { key: "title",     label: "Commitment", width: "minmax(0, 1fr)" },
    { key: "deals",     label: "Deals",      width: "90px" },
    { key: "result",    label: "Assessment", width: "120px" },
    /* The date the commitment takes effect. For now that is the publication
       date of the document it is stated in — the only date on file. */
    { key: "published", label: "Active from", width: "100px" }
  ];

  /* A column that only repeats the heading above it is noise, so the grouped
     field drops out of the rows. The date is the exception: the heading is a
     year and the cell is the day, so the cell still says something. */
  function activeColumns() {
    return COLUMNS.filter(function (c) {
      return c.key === "published" || c.key !== state.group;
    });
  }

  /* Financing found against the commitment, as the total the case records.
     Blank where there is none, rather than a zero — 56 of 59 have nothing, and
     a column of noughts reads as data when it is really an absence.

     The tag carries the figure alone. That the figure is a floor rather than a
     closed total, and which deals make it up, are true but not things a 60px
     tag can say; they go to the tooltip instead. */
  function dealCell(r) {
    var n = r.deals || 0;
    if (!n) return el('<span class="repo-col-deals"></span>');

    var label = r.deal_amount || (n + "x");   /* the count, if no figure was recorded */
    var c = el('<span class="repo-col-deals"><span class="repo-deal">'
      + '<svg class="repo-deal-ico" aria-hidden="true"><use href="#i-deal"/></svg>'
      + '<span class="ts-label-sm">' + esc(label) + "</span></span></span>");

    var note = n === 1 ? "1 deal found against this commitment"
                       : n + " deals found against this commitment";
    if (r.deal_amount_combines) note += ": " + r.deal_amount_combines;
    if (r.deal_amount && r.deal_amount_complete === false) {
      note += ". This is what has been found so far, not a closed total.";
    }
    c.title = note;
    return c;
  }

  /* Grouping, not sorting: the question is which commitments belong together,
     and the ordering inside a group is always the same — newest first. */
  var GROUPINGS = [
    { key: "bank",      label: "Bank" },
    { key: "fuel",      label: "Category" },
    { key: "result",    label: "Assessment" },
    { key: "published", label: "Date" }
  ];

  function distinct(key) {
    var seen = {}, out = [];
    ROWS.forEach(function (r) {
      var v = r[key];
      if (v == null || seen[v]) return;
      seen[v] = 1; out.push(v);
    });
    return out;
  }

  var FUELS = distinct("fuel").sort();
  var BANKS = distinct("bank").sort();
  var RESULTS = distinct("result").sort(function (a, b) {
    return RESULT_RANK[a.toLowerCase()] - RESULT_RANK[b.toLowerCase()];
  });

  /* `result` is a list because picking two of three verdicts is a real
     question; the other two facets answer one value at a time. */
  var state = {
    group: "bank",
    query: "",
    /* "short" is the title with the bank stripped; "plain" is the commitment
       as a reader would first take it. Some analysts would rather read the
       second, so it is a view of the same row, not a different list. */
    titleMode: "short",
    filters: { fuel: "", bank: "", result: [], dealsOnly: false }
  };

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* ISO in, "23 Apr 2026" out. Parsed by hand rather than through Date, which
     reads a bare ISO date as UTC and can shift it a day west of Greenwich. */
  function formatDate(iso) {
    if (!iso) return "—";
    var p = String(iso).split("-");
    if (p.length !== 3) return iso;
    return Number(p[2]) + " " + MONTHS[Number(p[1]) - 1] + " " + p[0];
  }

  function visibleRows() {
    var q = state.query.trim().toLowerCase();
    var f = state.filters;
    return ROWS.filter(function (r) {
      if (f.fuel && r.fuel !== f.fuel) return false;
      if (f.bank && r.bank !== f.bank) return false;
      if (f.result.length && f.result.indexOf(r.result) === -1) return false;
      if (f.dealsOnly && !r.deals) return false;
      if (!q) return true;
      /* Search covers both readings, so a term is findable in whichever one
         is currently on screen — and in the one that is not. */
      return (r.title + " " + r.bank + " " + (r.plain_rendering || ""))
        .toLowerCase().indexOf(q) !== -1;
    });
  }

  /* Grouped by the chosen key, newest first inside every group. Date groups by
     year: a heading per day would be a heading per row. */
  function groupRows(rows) {
    var key = state.group;
    var buckets = {}, order = [];
    rows.forEach(function (r) {
      var v = key === "published"
        ? String(r.published || "").slice(0, 4) || "Undated"
        : (r[key] || "Unrecorded");
      if (!buckets[v]) { buckets[v] = []; order.push(v); }
      buckets[v].push(r);
    });

    order.sort(function (a, b) {
      if (key === "published") return b.localeCompare(a);          /* newest year first */
      if (key === "result") {
        return RESULT_RANK[a.toLowerCase()] - RESULT_RANK[b.toLowerCase()];
      }
      return a.localeCompare(b);
    });

    return order.map(function (name) {
      var list = buckets[name].slice().sort(function (a, b) {
        return String(b.published || "").localeCompare(String(a.published || ""));
      });
      return { name: name, rows: list };
    });
  }

  /* --- the filter rail ---------------------------------------------------- */

  function field(label) {
    var f = el('<div class="repo-field"></div>');
    f.appendChild(el('<span class="repo-label ts-label-md">' + esc(label) + "</span>"));
    return f;
  }

  function selectField(label, plural, values, current, onPick) {
    var f = field(label);
    var sel = el('<select class="repo-select ts-body-sm"></select>');
    sel.setAttribute("aria-label", label);
    sel.appendChild(el('<option value="">All ' + esc(plural) + "</option>"));
    values.forEach(function (v) {
      sel.appendChild(el('<option value="' + esc(v) + '">' + esc(v) + "</option>"));
    });
    sel.value = current;
    sel.addEventListener("change", function () { onPick(sel.value); });
    f.appendChild(sel);
    return f;
  }

  /* Two callbacks, because they cost different things. Changing a facet
     rebuilds the rail so every control redraws; typing must not, or the input
     is replaced under the caret and focus is lost mid-word. */
  function buildRail(onChange, onQuery) {
    var rail = el('<aside class="repo-side" aria-label="Filter commitments"></aside>');

    var searchField = field("Search titles");
    var search = el('<input class="repo-input ts-body-sm" type="search"'
      + ' placeholder="Search commitments and banks"'
      + ' aria-label="Search commitments">');
    search.value = state.query;          /* survives a rebuild from elsewhere */
    search.addEventListener("input", function () {
      state.query = search.value;
      onQuery();
    });
    searchField.appendChild(search);
    rail.appendChild(searchField);

    rail.appendChild(selectField("Bank", "banks", BANKS, state.filters.bank, function (v) {
      state.filters.bank = v; onChange();
    }));

    rail.appendChild(selectField("Category", "categories", FUELS, state.filters.fuel, function (v) {
      state.filters.fuel = v; onChange();
    }));

    var assess = field("Assessment");
    var checks = el('<div class="repo-checks"></div>');
    RESULTS.forEach(function (v) {
      var on = state.filters.result.indexOf(v) !== -1;
      var row = el('<label class="repo-check ts-body-sm"></label>');
      var box = el('<input type="checkbox"' + (on ? " checked" : "") + ">");
      box.addEventListener("change", function () {
        var i = state.filters.result.indexOf(v);
        if (box.checked && i === -1) state.filters.result.push(v);
        else if (!box.checked && i !== -1) state.filters.result.splice(i, 1);
        onChange();
      });
      row.appendChild(box);
      row.appendChild(el("<span>" + esc(v) + "</span>"));
      checks.appendChild(row);
    });
    assess.appendChild(checks);
    rail.appendChild(assess);

    /* Only three of 59 have financing on file, so this is the fastest way to
       the cases where the money has actually been traced. */
    var fin = field("Financing");
    var finChecks = el('<div class="repo-checks"></div>');
    var finRow = el('<label class="repo-check ts-body-sm"></label>');
    var finBox = el('<input type="checkbox"'
      + (state.filters.dealsOnly ? " checked" : "") + ">");
    finBox.addEventListener("change", function () {
      state.filters.dealsOnly = finBox.checked;
      onChange();
    });
    finRow.appendChild(finBox);
    finRow.appendChild(el("<span>Deals found only</span>"));
    finChecks.appendChild(finRow);
    fin.appendChild(finChecks);
    rail.appendChild(fin);

    /* Not a filter — it changes how each row reads, not which rows are here —
       so it sits below them, after a rule. */
    var reading = field("Read as");
    reading.classList.add("repo-field-reading");
    var seg = el('<div class="repo-seg" role="group" aria-label="Read as"></div>');
    [{ key: "short", label: "Title" },
     { key: "plain", label: "Commitment" }].forEach(function (m) {
      var on = state.titleMode === m.key;
      var b = el('<button type="button" class="repo-seg-btn ts-label-sm'
        + (on ? " is-active" : "") + '" aria-pressed="' + (on ? "true" : "false")
        + '">' + esc(m.label) + "</button>");
      b.addEventListener("click", function () { state.titleMode = m.key; onChange(); });
      seg.appendChild(b);
    });
    reading.appendChild(seg);
    rail.appendChild(reading);

    /* Always built, shown or hidden by render(). Typing does not rebuild the
       rail — that would take the caret with it — so a button that only
       existed when something was filtered would never appear for a search. */
    var clear = el('<button type="button" class="repo-clear ts-body-sm">Clear all filters</button>');
    clear.hidden = !isFiltered();
    clear.addEventListener("click", function () {
      state.query = "";
      state.filters = { fuel: "", bank: "", result: [], dealsOnly: false };
      onChange();
    });
    rail.appendChild(clear);
    return rail;
  }

  function isFiltered() {
    var f = state.filters;
    return !!(f.fuel || f.bank || f.result.length || f.dealsOnly || state.query.trim());
  }

  /* The row's headline, in whichever reading is selected.

     Plain language is the commitment's own words with the pronouns resolved —
     clauses[0].plain_rendering — not naive_reading. naive_reading is what a
     lay reader would *believe* the commitment does, written deliberately
     wider than the text supports so the loophole lands later in the page. In
     a list an analyst scans, that would misstate the commitment. */
  function rowTitle(r) {
    if (state.titleMode === "plain" && r.plain_rendering) return r.plain_rendering;
    return r.short_title || r.title;
  }

  /* Active filters repeated as removable badges in the card header, the way
     the repository header carries them. */
  function buildChips(onChange) {
    var wrap = el('<div class="repo-chips"></div>');

    function chip(label, remove) {
      var c = el('<button type="button" class="repo-chip ts-body-sm-bold">' + esc(label)
        + '<span class="repo-chip-x" aria-hidden="true">×</span></button>');
      c.setAttribute("aria-label", "Remove filter " + label);
      c.addEventListener("click", function () { remove(); onChange(); });
      wrap.appendChild(c);
    }

    if (state.filters.bank) chip("Bank: " + state.filters.bank,
      function () { state.filters.bank = ""; });
    if (state.filters.fuel) chip("Category: " + state.filters.fuel,
      function () { state.filters.fuel = ""; });
    state.filters.result.slice().forEach(function (v) {
      chip("Assessment: " + v, function () {
        state.filters.result.splice(state.filters.result.indexOf(v), 1);
      });
    });
    if (state.filters.dealsOnly) chip("Deals found only",
      function () { state.filters.dealsOnly = false; });
    if (state.query.trim()) chip("Search: " + state.query.trim(),
      function () { state.query = ""; });

    return wrap;
  }

  /* --- the list ----------------------------------------------------------- */

  function cell(col, r) {
    if (col.key === "title") {
      var t = el('<span class="repo-col-title"></span>');
      var plain = state.titleMode === "plain" && r.plain_rendering;
      var a = el('<a class="repo-link ' + (plain ? "is-plain ts-body-sm" : "ts-body-sm-bold")
        + '" href="' + esc(r.page) + '">' + esc(rowTitle(r)) + "</a>");
      /* Rows are one line, so a long quotation is cut. The full text of both
         readings sits on the element, with a note where the commitment has
         more clauses than the one shown. */
      var tip = r.title;
      if (r.plain_rendering) tip += "\n\n" + r.plain_rendering;
      if (r.clause_count > 1) {
        tip += "\n\n(1 of " + r.clause_count + " quoted passages — open the page for the rest)";
      }
      a.title = tip;
      t.appendChild(a);
      return t;
    }
    if (col.key === "result") {
      return el('<span class="repo-col-result"><span class="repo-result is-'
        + esc(r.result_key || "unknown") + ' ts-label-sm">'
        + esc(r.result || "—") + "</span></span>");
    }
    if (col.key === "deals") return dealCell(r);
    if (col.key === "published") {
      /* A `low` confidence date was inferred by the analyst, not read off the
         document. It is shown, but marked, rather than passed off as read. */
      var approx = r.published_confidence === "low";
      var d = el('<span class="repo-col-published ts-body-sm'
        + (approx ? " is-approx" : "") + '">'
        + (approx ? "c. " : "") + esc(formatDate(r.published)) + "</span>");
      if (approx) d.title = "Date inferred, not stated on the document";
      return d;
    }
    return el('<span class="repo-col-' + esc(col.key) + ' ts-body-sm">'
      + esc(r[col.key] || "—") + "</span>");
  }

  function buildList() {
    var groups = groupRows(visibleRows());
    var wrap = el('<div class="repo-listing'
      + (state.titleMode === "plain" ? " is-plain" : "") + '"></div>');

    if (!groups.length) {
      wrap.appendChild(el('<p class="repo-empty ts-body-md">'
        + "No commitments match these filters.</p>"));
      return wrap;
    }

    /* One track list, set here and read by the label row and every row, so
       they stay aligned as columns come and go. */
    var cols = activeColumns();
    wrap.style.setProperty("--repo-cols",
      cols.map(function (c) { return c.width; }).join(" "));

    groups.forEach(function (g) {
      var sec = el('<section class="repo-group"></section>');
      var h = el('<div class="repo-group-head"></div>');
      h.appendChild(el('<h3 class="ts-body-md-bold">' + esc(g.name) + "</h3>"));
      h.appendChild(el('<span class="repo-group-count ts-body-sm">('
        + g.rows.length + (g.rows.length === 1 ? " commitment" : " commitments")
        + ")</span>"));
      sec.appendChild(h);

      var list = el('<div class="repo-rows" role="list"></div>');
      g.rows.forEach(function (r) {
        var row = el('<div class="repo-row" role="listitem"></div>');
        cols.forEach(function (c) { row.appendChild(cell(c, r)); });
        list.appendChild(row);
      });
      sec.appendChild(list);
      wrap.appendChild(sec);
    });

    return wrap;
  }

  /* --- assembly ----------------------------------------------------------- */

  function mountTable(host) {
    if (!ROWS.length) {
      console.error("No table index on window.WATCHTOWER_TABLE");
      return;
    }

    /* The ground runs the full width of the page; the rail and card inside it
       do not. Left to grow, the title column swallows every extra pixel and
       opens a hole between the commitment and its verdict. */
    var section = el('<section class="ov-repo" id="all-commitments"></section>');
    var shell = el('<div class="repo-shell"></div>');
    section.appendChild(shell);
    var railSlot = el('<div class="repo-rail"></div>');
    var card = el('<div class="repo-card"></div>');
    shell.appendChild(railSlot);
    shell.appendChild(card);

    var header = el('<header class="repo-header"></header>');
    header.appendChild(el('<h2 class="ts-title-sm">All commitments</h2>'));
    var chipSlot = el('<div class="repo-chipslot"></div>');
    header.appendChild(chipSlot);
    card.appendChild(header);

    var tools = el('<div class="repo-tools"></div>');
    var count = el('<span class="repo-count ts-body-sm"></span>');
    tools.appendChild(count);
    var groupSlot = el('<div class="repo-groupby"></div>');
    tools.appendChild(groupSlot);
    card.appendChild(tools);

    var listSlot = el('<div class="repo-list"></div>');
    card.appendChild(listSlot);

    function buildGroupBy() {
      var wrap = el('<div class="repo-seg-wrap"></div>');
      wrap.appendChild(el('<span class="repo-seg-label ts-label-sm">Group by:</span>'));
      var seg = el('<div class="repo-seg" role="group" aria-label="Group by"></div>');
      GROUPINGS.forEach(function (g) {
        var on = state.group === g.key;
        var b = el('<button type="button" class="repo-seg-btn ts-label-sm'
          + (on ? " is-active" : "") + '" aria-pressed="' + (on ? "true" : "false")
          + '">' + esc(g.label) + "</button>");
        b.addEventListener("click", function () { state.group = g.key; render(false); });
        seg.appendChild(b);
      });
      wrap.appendChild(seg);
      return wrap;
    }

    function render(rebuildRail) {
      if (rebuildRail) {
        railSlot.replaceChildren(buildRail(
          function () { render(true); },      /* a facet changed */
          function () { render(false); }));   /* a keystroke */
      }
      chipSlot.replaceChildren(buildChips(function () { render(true); }));
      groupSlot.replaceChildren(buildGroupBy());
      listSlot.replaceChildren(buildList());

      /* Kept in step on light renders too, when the rail itself is untouched. */
      var clear = railSlot.querySelector(".repo-clear");
      if (clear) clear.hidden = !isFiltered();

      var n = visibleRows().length;
      count.textContent = n === ROWS.length
        ? ROWS.length + " commitments"
        : n + " of " + ROWS.length + " commitments";
    }

    render(true);
    host.appendChild(section);
  }

  /* Wherever the hero is a single column — from 1100 down — the intro goes
     above the card, as Figma 15786:119703 draws it for the phone. Between 700
     and 1100 the column reads just as it does on a phone, so it is ordered the
     same. (The commitment page lifts its title above its card at the same
     break — placeTitle in commitment.js.) The node moves rather than
     being reordered with CSS `order`, so a screen reader and a keyboard walk
     the hero in the order it is shown. matchMedia rather than resize: it fires
     on the crossing, not on every pixel of a drag. */
  function placeIntro(grid, side, intro) {
    var narrow = window.matchMedia("(max-width: 1100px)");
    function apply() {
      if (narrow.matches) grid.insertBefore(intro, side);
      else grid.appendChild(intro);
    }
    apply();
    if (narrow.addEventListener) narrow.addEventListener("change", apply);
    else if (narrow.addListener) narrow.addListener(apply);
  }

  /* The same footer the commitment pages render, in its default light form.
     The dark variant belongs to the commitment page, where the footer meets
     the dark assessment section; here it meets the page ground. */
  function footer() {
    return el('<footer class="cm-footer ts-body-sm"><div class="inner">'
      + '<span class="cm-wordmark">'
      + '<svg class="ico" aria-hidden="true"><use href="#i-logo-dark"/></svg>Watchtower</span>'
      + '<span class="sep"></span>'
      + '<a href="https://bank.green">A Bank.Green Initiative</a>'
      + '<span class="spacer"></span>'
      + '<span>Send enquiries to <a href="mailto:enquiries@bank.green">enquiries@bank.green</a></span>'
      + '<span class="sep"></span>'
      + "<span>© 2026 Bank.Green. All rights reserved.</span>"
      + "</div></footer>");
  }

  function mount() {
    var host = document.getElementById("ov-root");

    /* all-commitments.html is the repository on a page of its own: the filter
       rail and the full table, then the footer. commitments.html is the
       overview — hero and cards — and links to it. */
    if (host.dataset.view === "all") {
      mountTable(host);
      host.appendChild(footer());
      return;
    }

    if (!CASES) { console.error("No index on window.WATCHTOWER_CASES"); return; }

    /* Highest commitment number first, matching the frame's ordering. */
    var list = CASES.slice().sort(function (a, b) { return b.number - a.number; });
    var featured = list[0];

    /* The hero is built on the commitment page's own grid — .cm-grid, with a
       .cm-side for the card and a .cm-main for the prose, and `cm` on the
       section for the variables those read — so the two pages share one set of
       columns and one set of breaks: the card in the 571 column on the left,
       the intro in the 560 one beside it (Figma 15199:63789), and a single
       column from 1100 down. Moving from the overview to a commitment then
       changes nothing about where things sit. */
    var hero = el('<section class="ov-hero cm"></section>');
    var grid = el('<div class="cm-grid"></div>');
    var side = el('<div class="cm-side"></div>');
    var intro = el('<div class="cm-main ov-intro"></div>');

    /* title/extra_large, the class the commitment pages set their title in, so
       the two step down the same ramp: 60/60, and 40/48 on a phone. */
    intro.appendChild(el('<h1 class="ov-title ts-title-xl">' + esc(HERO.title) + "</h1>"));
    /* One block for the two paragraphs, so the intro's gap falls around them as
       a whole and the space between them is theirs to set. */
    var lede = el('<div class="ov-lede"></div>');
    HERO.intro.forEach(function (para) { lede.appendChild(el("<p>" + esc(para) + "</p>")); });
    intro.appendChild(lede);
    intro.appendChild(el('<a class="ov-cta ts-button" href="' + esc(featured.page) + '">'
      + "See analysis #" + esc(featured.number) + " " + esc(featured.bank) + "</a>"));

    side.appendChild(card(featured, true));
    grid.appendChild(side);
    grid.appendChild(intro);
    hero.appendChild(grid);
    host.appendChild(hero);
    placeIntro(grid, side, intro);

    var container = el('<div class="ov-container"></div>');
    var grid = el('<div class="ov-grid"></div>');
    list.slice(1).forEach(function (e) { grid.appendChild(card(e, false)); });
    container.appendChild(grid);
    /* The rest of the repository — the filter rail and every commitment in a
       table — is a page of its own. */
    container.appendChild(el('<a class="ov-all ts-body-md" href="all-commitments.html">'
      + "See all commitments</a>"));
    host.appendChild(container);

    host.appendChild(footer());

    /* Fitted now, again once Lora lands — it moves the wrap points — and
       whenever the width changes, since the width is the square. A height-only
       resize, a phone's toolbar folding away, changes nothing and is skipped. */
    fitQuotes();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitQuotes);
    var fitW = window.innerWidth, fitTimer;
    window.addEventListener("resize", function () {
      clearTimeout(fitTimer);
      fitTimer = setTimeout(function () {
        if (window.innerWidth === fitW) return;
        fitW = window.innerWidth;
        fitQuotes();
      }, 80);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();

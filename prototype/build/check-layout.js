/* Layout check — paste into the console on a commitment page, or run via the
   browser tools. Asserts the geometry the page spec fixes numerically, which
   is the part that eyeballing a screenshot misses.

   Spec §4: container 1392 at x=24 · left 569 · gap 16 · right 807 · measure 584
   Spec §6: card 569 wide, 40px padding, sticky at top 88
   Spec §4: right column blocks separated by 120px with a rule between         */
(function () {
  var out = [], pass = 0, fail = 0;
  function eq(label, actual, expected, tol) {
    var ok = Math.abs(actual - expected) <= (tol || 0);
    out.push((ok ? "PASS  " : "FAIL  ") + label + ": " + actual + " (expected " + expected + ")");
    ok ? pass++ : fail++;
  }
  var box = function (s) { return document.querySelector(s).getBoundingClientRect(); };

  var grid = box(".cm-grid"), left = box(".cm-left"), right = box(".cm-right");
  var measure = box(".cm-right > *"), card = box(".cm-card");

  // The container spans the viewport; its *content* box is the 1392 at x=24.
  // Width is fluid: the card is 41.352% of (available - gap), floored at 569.
  var avail = window.innerWidth - 48;
  var expectCard = Math.max(569, Math.round(0.41352 * (avail - 16)));
  eq("content box x", Math.round(left.x), 24);
  eq("card width (fluid, min 569)", Math.round(box(".cm-card").width), expectCard, 1);
  eq("no horizontal scroll", document.documentElement.scrollWidth <= window.innerWidth ? 1 : 0, 1);
  eq("left column x", Math.round(left.x), 24);

  eq("gap between columns", Math.round(right.x - (left.x + left.width)), 16);

  eq("right content inset", Math.round(measure.x - right.x), 56);
  eq("measure width", Math.round(measure.width), 584);


  var cs = getComputedStyle(document.querySelector(".cm-card"));
  eq("card padding", parseInt(cs.paddingTop, 10), 40);
  eq("right column gap", parseInt(getComputedStyle(document.querySelector(".cm-right")).rowGap, 10), 120);

  var tabs = document.querySelectorAll(".cm-railtab");
  if (tabs.length) {
    eq("rail width", Math.round(document.querySelector(".cm-rail").getBoundingClientRect().width), 48);
    eq("rail cell height", Math.round(tabs[0].getBoundingClientRect().height), 80);
  }

  // Height: uniform across clauses, and never past the viewport.
  var root = document.documentElement;
  var stickyTop = parseInt(root.style.getPropertyValue("--cm-sticky-top"), 10);
  var cardEl = document.querySelector(".cm-card");
  eq("sticky top measured", isNaN(stickyTop) ? 0 : 1, 1);
  eq("card height <= viewport allowance",
     Math.round(cardEl.getBoundingClientRect().height) <=
     (window.innerHeight - stickyTop - 120) ? 1 : 0, 1);

  var tabsAll = document.querySelectorAll(".cm-railtab"), heights = [];
  tabsAll.forEach(function (t) { t.click(); heights.push(Math.round(cardEl.getBoundingClientRect().height)); });
  if (tabsAll.length) tabsAll[0].click();
  eq("all clause cards same height", new Set(heights).size, 1);

  var quote = getComputedStyle(document.querySelector(".cm-quote"));
  eq("quote size (min 36)",
     Math.round(Math.max(36, 0.03328 * window.innerWidth - 11.87)),
     Math.round(parseFloat(quote.fontSize)), 1);

  var blocks = document.querySelectorAll(".cm-right > *:not(.cm-rule)");
  var rules = document.querySelectorAll(".cm-right > .cm-rule");
  eq("rules = blocks - 1", rules.length, blocks.length - 1);

  out.push("");
  out.push(fail ? fail + " FAILED, " + pass + " passed" : "all " + pass + " layout checks pass");
  return out.join("\n");
})();

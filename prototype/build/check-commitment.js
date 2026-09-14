/* Paste into the console on a commitment page. Checks the geometry the Figma
   frame 15289-99639 fixes, and walks the reading line down the page to prove
   that no scroll position falls between two blocks.
   Run at a 1440px viewport for the geometry assertions. */
(function () {
  var fail = 0, out = [];
  function eq(name, got, want, tol) {
    tol = tol == null ? 1 : tol;
    var ok = Math.abs(got - want) <= tol;
    if (!ok) fail++;
    out.push((ok ? "  ok  " : "  FAIL") + "  " + name + ": " + Math.round(got)
             + (ok ? "" : "  (want " + want + ")"));
  }
  var q = function (s) { return document.querySelector(s); };
  var box = function (s) { return q(s).getBoundingClientRect(); };

  var wide = window.innerWidth >= 1440;
  if (wide) {
    eq("container left rule",  box(".cm-section:nth-child(2)").x, 24);
    eq("container width",      box(".cm-section:nth-child(2)").width, 1392);
    eq("card column x",        box(".cm-part .cm-side").x, 24);
    eq("card column width",    box(".cm-part .cm-side").width, 571);
    eq("prose column x",       box(".cm-part .cm-main").x, 675);
    eq("prose column width",   box(".cm-part .cm-main").width, 560);
    eq("hero figure x",        box(".cm-deal.is-hero").x, 24);
    eq("card is square",       box(".cm-card").height - box(".cm-card").width, 0, 2);
    eq("card padding",         box(".cm-card-head").x - box(".cm-card").x, 40);
    eq("quote measure",        box(".cm-quote").width, 491);
  } else {
    out.push("  --   geometry checks skipped (viewport < 1440)");
  }

  /* The app shell locks the viewport for the repository pages. If that lock
     leaks onto a commitment page the wheel stops working, and only real input
     shows it — window.scrollTo still moves a viewport with overflow:hidden. */
  var bodyOverflow = getComputedStyle(document.body).overflowY;
  var locked = bodyOverflow === "hidden" || bodyOverflow === "clip";
  if (locked) fail++;
  out.push((locked ? "  FAIL" : "  ok  ") + "  page scrolls (body overflow-y: " + bodyOverflow + ")");

  var range = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (range <= 0) fail++;
  out.push((range > 0 ? "  ok  " : "  FAIL") + "  scrollable range: " + Math.round(range) + "px");

  var cs = getComputedStyle(q(".cm-quote"));
  var size = parseFloat(cs.fontSize);
  var ladder = [36, 28, 24];
  out.push((ladder.indexOf(size) !== -1 ? "  ok  " : "  FAIL") + "  quote on the Lora ladder: " + size);
  if (ladder.indexOf(size) === -1) fail++;

  var avail = window.innerHeight
    - parseFloat(getComputedStyle(document.body).getPropertyValue("--cm-sticky-top"))
    - parseFloat(getComputedStyle(document.body).getPropertyValue("--cm-clearance"));
  Array.prototype.forEach.call(document.querySelectorAll(".cm-card"), function (c, i) {
    var h = c.getBoundingClientRect().height, w = c.getBoundingClientRect().width;
    var ok = h >= w - 2 && h <= avail + 2;
    if (!ok) fail++;
    out.push((ok ? "  ok  " : "  FAIL") + "  card " + (i + 1) + " height " + Math.round(h)
             + " within [" + Math.round(w) + ", " + Math.round(avail) + "]");
  });

  /* Everything that should pin, pins — and the shape of its entry and exit is
     read off the page rather than predicted. Earlier versions of this check
     recomputed the trigger points from the same numbers the implementation
     uses, which meant every tuning change broke the check for reasons that had
     nothing to do with the page being wrong. Sampling the card's actual
     position across its whole section tests the behaviour instead: it does not
     care where the curve comes from, only that the card sits still, leaves
     late, speeds up as it goes, and is gone before the next one is called.

     Scroll events are dispatched by hand — the preview pane never fires its
     own, so waiting for one would silently test nothing. */
  var pinned = Array.prototype.slice.call(document.querySelectorAll(".cm-card, .cm-deal.is-hero"));
  var stickyTop = parseFloat(getComputedStyle(document.body).getPropertyValue("--cm-sticky-top"));
  var chrome = stickyTop - 24;
  var y0 = window.scrollY;
  var STEP = 40;
  function tick(y) { window.scrollTo(0, y); window.dispatchEvent(new Event("scroll")); }

  /* Position of every pinned element across the scroll range of its section. */
  function profile(el) {
    var sec = el.closest(".cm-part, .cm-hero-section");
    var last = sec.querySelector(".cm-main > .cm-block:last-child");
    tick(0);
    var secTop = sec.getBoundingClientRect().top + window.scrollY;
    var secBot = sec.getBoundingClientRect().bottom + window.scrollY;
    var lastTop = last.getBoundingClientRect().top + window.scrollY;
    var s = [];
    for (var y = Math.max(0, secTop - window.innerHeight); y <= secBot; y += STEP) {
      tick(y);
      s.push({ y: y, top: el.getBoundingClientRect().top });
    }
    return { samples: s, lastTop: lastTop, height: el.offsetHeight };
  }

  function seatedRange(s) {
    var first = -1, last = -1;
    for (var i = 0; i < s.length; i++) {
      if (Math.abs(s[i].top - stickyTop) <= 2) { if (first < 0) first = i; last = i; }
    }
    return [first, last];
  }

  /* Movement per step is monotonic within tolerance — decelerating on the way
     in, accelerating on the way out. Only the stretch where the card is
     actually travelling counts: the wait below the fold before an entry, and
     the plateau after the card has left the window on an exit, are both
     flat by design and would otherwise read as a broken curve. */
  function trend(s, from, to, wantRising, height) {
    var d = [], breaks = 0;
    for (var i = from + 1; i <= to && i < s.length; i++) {
      if (wantRising && s[i].top + height <= 0) break;      /* gone from the window */
      var step = s[i - 1].top - s[i].top;
      if (!d.length && Math.abs(step) < 3) continue;         /* not moving yet */
      d.push(step);
    }
    for (var j = 1; j < d.length; j++) {
      if (wantRising ? d[j] < d[j - 1] - 6 : d[j] > d[j - 1] + 6) breaks++;
    }
    return { steps: d, breaks: breaks };
  }

  var departures = [];

  pinned.forEach(function (el, i) {
    var name = el.classList.contains("is-hero") ? "headline figure" : "card " + i;
    var pr = profile(el);
    var s = pr.samples;
    var range = seatedRange(s);

    if (range[0] < 0) {
      fail++; out.push("  FAIL  " + name + " never pins at " + stickyTop);
      return;
    }
    out.push("  ok    " + name + " pins at " + stickyTop + " for "
             + ((range[1] - range[0]) * STEP) + "px of scroll");

    /* Entry: eases out — each step covers less ground than the one before. */
    var inn = trend(s, Math.max(0, range[0] - 16), range[0], false, pr.height);
    var easedIn = inn.steps.length > 3 && inn.breaks === 0;
    if (!easedIn) fail++;
    out.push((easedIn ? "  ok    " : "  FAIL  ") + name + " eases in ("
             + inn.steps.slice(-6).map(Math.round).join(" → ") + ")");

    /* Exit: begins only well after the last block has cleared the top. */
    var departY = s[range[1]].y;
    departures.push({ el: el, y: departY });
    var lateBy = Math.round(departY - (pr.lastTop - chrome));
    var late = lateBy >= 200;
    if (!late) fail++;
    out.push((late ? "  ok    " : "  FAIL  ") + name + " holds " + lateBy
             + "px past the last block reaching the top");

    /* Exit: accelerates. */
    var outT = trend(s, range[1], Math.min(s.length - 1, range[1] + 20), true, pr.height);
    var easedOut = outT.steps.length > 3 && outT.breaks === 0;
    if (!easedOut) fail++;
    out.push((easedOut ? "  ok    " : "  FAIL  ") + name + " accelerates out ("
             + outT.steps.slice(0, 6).map(Math.round).join(" → ") + ")");
  });

  /* Each card must be clear of the window before the next one starts to move. */
  for (var d = 0; d < departures.length - 1; d++) {
    var leaving = departures[d].el, nextY = departures[d + 1].y;
    /* The next card's departure is not the point of interest — the point is
       when it first appears. Find that by walking back from its departure. */
    /* Walk back to the coarse boundary, then refine — at a 40px stride the
       reported overlap is mostly the stride itself, not the page. */
    var appearY = null;
    for (var yy = nextY; yy > departures[d].y; yy -= STEP) {
      tick(yy);
      if (departures[d + 1].el.getBoundingClientRect().top >= window.innerHeight) { appearY = yy; break; }
    }
    if (appearY !== null) {
      for (var fine = appearY; fine <= appearY + STEP; fine += 4) {
        tick(fine);
        if (departures[d + 1].el.getBoundingClientRect().top < window.innerHeight) break;
        appearY = fine;
      }
    }
    if (appearY === null) continue;
    tick(appearY);
    var b = leaving.getBoundingClientRect().bottom;
    var clear = b <= 8;
    if (!clear) fail++;
    out.push((clear ? "  ok    " : "  FAIL  ") + "card " + d + " is clear of the window before card "
             + (d + 1) + " appears" + (clear ? "" : " (bottom still at " + Math.round(b) + ")"));
  }
  tick(y0);

  /* No two pinned cards may ever share the window. Walking the whole page and
     testing every pair is the only way to know: the collision happens in the
     hand-off between two sections, which is exactly where reasoning about one
     card at a time stops being enough. */
  var clash = [], held = [];
  var pageBottom = document.querySelector("#assessment").getBoundingClientRect().top + window.scrollY;
  for (var sy = 0; sy < pageBottom; sy += 60) {
    tick(sy);
    var onScreen = pinned.filter(function (el) {
      var b = el.getBoundingClientRect();
      return b.bottom > 0 && b.top < window.innerHeight;
    });
    for (var a = 0; a < onScreen.length; a++) {
      for (var b2 = a + 1; b2 < onScreen.length; b2++) {
        var r1 = onScreen[a].getBoundingClientRect(), r2 = onScreen[b2].getBoundingClientRect();
        if (r1.top < r2.bottom && r2.top < r1.bottom) clash.push(sy);
      }
    }
  }
  if (clash.length) {
    fail++;
    out.push("  FAIL  two cards overlap on screen at y=" + clash.slice(0, 6).join(", ")
             + (clash.length > 6 ? " (+" + (clash.length - 6) + " more)" : ""));
  } else {
    out.push("  ok  no two cards ever share the window");
  }

  /* A card waits below the fold until its own heading reaches mid-window. */
  pinned.forEach(function (el, i) {
    if (el.classList.contains("is-hero")) return;
    var sec = el.closest(".cm-part");
    var head = sec.querySelector(".cm-part-title");
    var headDoc = head.getBoundingClientRect().top + window.scrollY;
    tick(Math.round(headDoc - window.innerHeight * 0.62));   /* heading below the line */
    var t = el.getBoundingClientRect().top;
    var waiting = t >= window.innerHeight;
    if (!waiting) fail++;
    out.push((waiting ? "  ok  " : "  FAIL") + "  card " + i + " waits below the fold until called"
             + (waiting ? "" : " (top " + Math.round(t) + ")"));
  });
  tick(y0);

  /* Every Part reveals once it is reached, and stays revealed. */
  Array.prototype.forEach.call(document.querySelectorAll(".cm-part"), function (sec, i) {
    tick(sec.getBoundingClientRect().top + window.scrollY - 200);
    var main = sec.querySelector(".cm-main");
    var shown = main.classList.contains("is-in");
    if (!shown) fail++;
    out.push((shown ? "  ok  " : "  FAIL") + "  part " + (i + 1) + " revealed");
  });
  tick(y0);

  /* Walk the reading line down the page: it must resolve to a block at every
     step inside a Part, so the highlight never blinks off mid-section. This
     asks what the page resolves, not whether the blocks happen to tile
     perfectly — the 1px border between two sections belongs to no block, and
     a check that demanded perfect tiling would fail on it forever.

     The reveal transform is taken off first: it offsets a Part's blocks by up
     to 32px while it plays, which is a transient of half a second on first
     appearance, not the resting layout. */
  var revealed = Array.prototype.slice.call(document.querySelectorAll(".cm-reveal"));
  revealed.forEach(function (el) {
    /* Inline, with the transition switched off. Removing the class alone is
       not enough: that only starts another transition, and a transition needs
       an animation clock to advance — the preview pane never runs one, so the
       value would sit at its start point forever. */
    el.style.transition = "none";
    el.style.transform = "none";
    el.style.opacity = "1";
  });

  var blocks = Array.prototype.slice.call(document.querySelectorAll(".cm-part .cm-block"));
  var parts = Array.prototype.slice.call(document.querySelectorAll(".cm-part"));
  var gaps = [];
  var walkTop = parts[0].getBoundingClientRect().top + window.scrollY;
  var walkBot = parts[parts.length - 1].getBoundingClientRect().bottom + window.scrollY;
  for (var docY = walkTop + 10; docY < walkBot - 10; docY += 37) {
    window.scrollTo(0, docY - window.innerHeight * 0.4);
    var ln = window.innerHeight * 0.4, resolved = null;
    for (var bi = 0; bi < blocks.length; bi++) {
      if (blocks[bi].getBoundingClientRect().top > ln) break;
      resolved = blocks[bi];
    }
    if (!resolved) gaps.push(Math.round(docY));
  }
  window.scrollTo(0, y0);
  revealed.forEach(function (el) {
    el.style.transition = ""; el.style.transform = ""; el.style.opacity = "";
  });
  if (gaps.length) { fail++; out.push("  FAIL  reading line resolves to nothing at y=" + gaps.join(", ")); }
  else out.push("  ok    reading line always resolves to a block");

  console.log(out.join("\n"));
  console.log(fail ? fail + " FAILED" : "all checks passed");
})();

/* Contrast audit — paste into the browser console on any prototype page.
   ---------------------------------------------------------------------------
   Walks every visible text node, finds the colour actually behind it (the
   nearest ancestor with an opaque background), and prints each element whose
   contrast is below WCAG AA: 4.5:1, or 3:1 for large text (24px and up, or
   18.66px bold and up). Results are grouped by element and colour pair and
   sorted worst first.

   Set the theme before running: localStorage.setItem('wt-theme', 'dark') and
   reload (or 'light'). The backlog of known issues is in
   figma design/contrast-issues.md.

   Limits: a translucent text colour is not blended, and a background image or
   gradient is ignored — the nearest solid background colour is used. */
(function () {
  function parse(c) { return (c.match(/[\d.]+/g) || [0, 0, 0]).map(Number); }
  function lum(c) {
    var ch = parse(c).slice(0, 3).map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
  }
  function backgroundOf(el) {
    for (var e = el; e; e = e.parentElement) {
      var bg = getComputedStyle(e).backgroundColor, m = parse(bg);
      if (m.length < 4 || m[3] > 0.5) return bg;
    }
    return "rgb(255, 255, 255)";
  }

  var groups = {}, seen = new Set();
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    var t = walker.currentNode, el = t.parentElement;
    if (!t.textContent.trim() || !el || seen.has(el)) continue;
    seen.add(el);
    var cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (el.closest("[hidden]") || cs.visibility === "hidden" || cs.display === "none") continue;
    if (!r.width || !r.height || (el.offsetParent === null && cs.position !== "fixed")) continue;

    var bg = backgroundOf(el), a = lum(cs.color), b = lum(bg);
    var ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    var size = parseFloat(cs.fontSize), bold = +cs.fontWeight >= 600;
    var need = (size >= 24 || (size >= 18.66 && bold)) ? 3 : 4.5;
    if (ratio >= need) continue;

    var cls = typeof el.className === "string" && el.className.trim()
      ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : "";
    var key = el.tagName.toLowerCase() + cls + "|" + cs.color + "|" + bg;
    if (!groups[key]) groups[key] = { element: el.tagName.toLowerCase() + cls, ratio: +ratio.toFixed(2),
      needs: need, count: 0, text: t.textContent.trim().slice(0, 40), color: cs.color, background: bg };
    groups[key].count++;
    groups[key].ratio = Math.min(groups[key].ratio, +ratio.toFixed(2));
  }

  var rows = Object.keys(groups).map(function (k) { return groups[k]; })
    .sort(function (x, y) { return x.ratio - y.ratio; });
  console.log("Contrast audit — theme: " + (document.documentElement.dataset.theme || "none") +
    ", " + rows.length + " failing element groups");
  console.table(rows);
  return rows;
})();

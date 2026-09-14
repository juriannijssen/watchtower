/* Collapse / expand the right-hand policy panel.

   The state is one global preference so it survives navigation: collapse on
   any screen and every screen stays collapsed, with the open tool marked
   active in the rail. The initial class is applied by the inline script in
   <head> — before first paint — so a collapsed panel never flashes at full
   width. This file only handles clicks. */
(function () {
  var KEY = "wt-panel";
  var el = document.documentElement;

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-panel-toggle]");
    if (!btn) return;
    e.preventDefault();

    var collapsed = el.classList.toggle("panel-collapsed");
    try { localStorage.setItem(KEY, collapsed ? "collapsed" : "expanded"); } catch (err) {}

    // Move focus to the toggle that replaces this one.
    var next = document.querySelector(
      (collapsed ? ".panel-rail" : ".panel-expanded") + " [data-panel-toggle]");
    if (next) next.focus();
  });
})();

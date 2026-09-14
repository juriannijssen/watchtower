/* Light or dark, on the pages that have a dark theme.
   ---------------------------------------------------------------------------
   Loaded in the <head> of the commitment pages — the overview, all
   commitments and every commitment page — and nowhere else, because they are
   the only pages whose colours all come from tokens that have a dark value.
   The repository, synthesis and diff pages still paint light tints of their
   own, so they never get the attribute and stay light whatever was chosen here.

   In the head, not at the foot of the body, so the theme is on the root before
   the first paint and a dark page never flashes white on the way in.

   Everyone starts in light, whatever their system is set to — the dark theme
   is new, so it is something a reader turns on rather than something they
   are handed. The switch turns it on, and the choice is remembered.

   The switch itself is built by shell.js, which fills the phone menu from the
   bar and so has to see it first. `data-themeable` is how it knows to. One
   listener here serves the switch in the bar and its copy in the menu. */
(function () {
  var KEY = "wt-theme";
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function current() {
    return stored() === "dark" ? "dark" : "light";
  }

  function apply() {
    var theme = current();
    root.setAttribute("data-theme", theme);
    var label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
    Array.prototype.forEach.call(document.querySelectorAll(".theme-toggle"), function (b) {
      b.setAttribute("aria-label", label);
      b.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      b.title = label;
    });
  }

  root.setAttribute("data-themeable", "");
  apply();
  document.addEventListener("DOMContentLoaded", apply);

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".theme-toggle");
    if (!b) return;
    try { localStorage.setItem(KEY, current() === "dark" ? "light" : "dark"); } catch (err) {}
    apply();
  });
})();

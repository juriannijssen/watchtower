/* Minimal push/pop navigation, mimicking the mobile-style stack in the
   right-hand policy panel: only that column animates between screens. */
(function () {
  var KEY = "wt-nav-dir";

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-nav]");
    if (!el) return;
    try { sessionStorage.setItem(KEY, el.getAttribute("data-nav")); } catch (err) {}
  });

  var dir = null;
  try {
    dir = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
  } catch (err) {}

  if (dir === "forward") document.body.classList.add("nav-forward");
  else if (dir === "back") document.body.classList.add("nav-back");
})();

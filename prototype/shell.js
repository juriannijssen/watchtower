/* Top bar, narrow viewports.
   ---------------------------------------------------------------------------
   The bar lays out brand, section nav, watchlist pill and avatar in one row.
   Below about 700px they stop fitting: at 390 the nav alone ends 99px past the
   window, which is what put a horizontal scrollbar on every page in the
   prototype — the document was 489px wide inside a 390px viewport.

   Hiding the nav would fix the overflow and lose the navigation, so it folds
   into a menu instead. Figma 15742:113995 draws the collapsed bar: wordmark
   left, three rules right.

   The bar is static markup repeated in 71 pages, so the button and the panel
   are built here rather than pasted into each one — the collapsed bar has a
   single definition, the same way the expanded one has a single definition in
   styles.css.

   The panel is filled from the bar's own contents. Nothing is moved out of the
   DOM: the links are cloned, so the row that CSS hides is still the thing that
   decides what the menu says, and a page with different links in its bar gets a
   menu that matches without this file knowing anything about it. */
(function () {
  var bar = document.querySelector(".topbar");
  if (!bar || bar.querySelector(".topbar-menu")) return;

  var nav = bar.querySelector(".cm-nav");
  var right = bar.querySelector(".topbar-right");

  /* The theme switch, on the pages that have a dark theme — theme.js marks
     them with data-themeable. Put in the bar before the menu is filled from
     it, so the phone menu gets its own copy; theme.js answers clicks on both
     with one listener, and sets their labels once the page has loaded. The
     moon shows in light, the sun in dark: each is the theme it switches to. */
  if (right && document.documentElement.hasAttribute("data-themeable") &&
      !right.querySelector(".theme-toggle")) {
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "theme-toggle";
    toggle.setAttribute("aria-label", "Switch theme");
    toggle.innerHTML =
      '<svg class="ico ico-moon" viewBox="0 0 24 24" aria-hidden="true">'
      + '<path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" fill="currentColor"/></svg>'
      + '<svg class="ico ico-sun" viewBox="0 0 24 24" aria-hidden="true">'
      + '<circle cx="12" cy="12" r="4.5" fill="currentColor"/>'
      + '<path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4'
      + 'M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" stroke="currentColor" stroke-width="2" '
      + 'stroke-linecap="round" fill="none"/></svg>';
    right.insertBefore(toggle, right.firstChild);
  }

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "topbar-menu";
  btn.setAttribute("aria-label", "Menu");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "topbar-panel");
  btn.innerHTML = "<span></span><span></span><span></span>";

  var panel = document.createElement("div");
  panel.className = "topbar-panel";
  panel.id = "topbar-panel";
  panel.hidden = true;

  /* Links first, then whatever the account group holds, in the order the bar
     has them. A clone keeps href, active state and aria-current, so the menu
     marks the current page exactly as the row does. */
  if (nav) {
    var links = document.createElement("nav");
    links.className = "topbar-panel-nav";
    links.setAttribute("aria-label", "Sections");
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (a) {
      links.appendChild(a.cloneNode(true));
    });
    panel.appendChild(links);
  }

  if (right) {
    var account = document.createElement("div");
    account.className = "topbar-panel-account";
    Array.prototype.forEach.call(right.children, function (c) {
      account.appendChild(c.cloneNode(true));
    });
    panel.appendChild(account);
  }

  bar.appendChild(btn);
  bar.appendChild(panel);

  function setOpen(open) {
    /* `hidden` rather than a display rule, so a closed panel is out of the tab
       order as well as off the screen. styles.css carries the matching
       `.topbar-panel[hidden]` rule: the panel's own `display: flex` outranks the
       user agent's `[hidden]`, and without it this attribute paints nothing. */
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    bar.classList.toggle("is-menu-open", open);
  }

  btn.addEventListener("click", function () {
    setOpen(panel.hidden);
  });

  /* A tap on a link is a navigation, but same-page hrefs and the back button
     both land the reader here with the panel still open, so close on any link. */
  panel.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener("click", function (e) {
    if (panel.hidden) return;
    if (bar.contains(e.target)) return;
    setOpen(false);
  });

  /* Widening past the breakpoint puts the real row back; a panel left open
     would then float under a bar that already shows everything it holds. */
  var wide = window.matchMedia("(min-width: 701px)");
  var onWide = function (e) { if (e.matches) setOpen(false); };
  if (wide.addEventListener) wide.addEventListener("change", onWide);
  else if (wide.addListener) wide.addListener(onWide);
})();

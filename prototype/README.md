# Watchtower — clickable prototype

Static HTML/CSS prototype of six Watchtower screens, built from the
bank.green Design System Figma file (`s6dYIFORiF8aiAkAZurT9l`).
No build step — open `index.html` in a browser.

## Screens

| File | Figma frame | node-id |
| --- | --- | --- |
| `index.html` | Document detail → Overview with Versions + Tools | `14974-73082` |
| `discovery.html` | Document detail → Discovery Data | `15007-81590` |
| `synthesis.html` | Document detail → Synthesis | `15007-81900` |
| `synthesis-detail.html` | Document detail → Synthesis → Synthesis Details | `15029-82999` |
| `diff.html` | Document detail → Diff Checker | `15029-84348` |
| `comparison.html` | Document detail → Comparison Summary | `15033-84881` |

## Navigation model

The top navbar, breadcrumb and document canvas stay put on every screen.
Only two things change:

1. **Under the title** — the tool navbar swaps its controls (file-type tabs,
   split/combine toggle on the diff screens, A/B document tabs on the
   comparison screen).
2. **The right column** — behaves like a mobile navigation stack, pushing one
   level deeper and popping back via the `‹` arrow in the panel header.

```
index  ──▸ discovery          ──▸ (back) index
       ──▸ synthesis ──▸ synthesis-detail ──▸ (back) synthesis ──▸ (back) index
       ──▸ diff
       ──▸ comparison         ──▸ (back) index
```

## Collapsing the panel

Every screen carries both panel states in its markup — a 356px
`.panel-expanded` and a 64px `.panel-rail` — and CSS shows one of them. The
sidepanel icon in the header toggles between them on any screen.

- **Collapsed**, the rail lists all four tools and marks the open one with the
  Active variant (Figma: `State=Active, Size=Small, Direction=Color 1` —
  `leaf_500` background, `sushi_200` icon). The other three navigate sideways.
- **Expanded again**, the panel shows that page's own content.
- The state is **one global preference** in `localStorage["wt-panel"]`, so it
  survives navigation: collapse on any screen and every screen stays collapsed.

`diff.html` carries `data-panel-default="collapsed"`, so it opens collapsed on
a first visit — matching its Figma frame, where the diff takes the full 1376px
canvas. Once you toggle explicitly, the stored preference wins everywhere.

Both states hug the panel's **right** edge (`margin-left: auto`), so the
collapse toggle sits at the same x through the whole width animation rather
than drifting with the panel's left edge.

The initial class is set by a small inline script in each `<head>`, before
first paint, so a collapsed panel never flashes at full width. `panel.js` only
handles clicks — no transition guard is needed, because a CSS transition never
fires on an element's first style resolution and `.right` does not exist yet
when that class is applied.

### Timing

Collapse and expand are deliberately asymmetric. A CSS transition is read from
the *incoming* state, so declaring it on the expanded and collapsed rules gives
each direction its own timing:

| | Duration | Easing |
| --- | --- | --- |
| Collapse | 220ms | `cubic-bezier(.4, .45, .55, .9)` |
| Expand | 0ms — instant | — |

The panel curve is close to linear on purpose: initial slope ~1.1, final ~0.22,
versus the screen-to-screen `--nav-ease` which starts at 3.5 and lands at a dead
stop. Because it does not crawl at the end, it reads as complete in less time
than an eased curve of the same length — hence 220ms rather than the 430ms the
old easing needed. Reopening returns you to something you already know, so it
should not cost you time at all.

All four values are custom properties (`--panel-ease`,
`--panel-collapse-duration`, `--panel-expand-duration`) and are independent of
the push/pop tokens, so the two motions can be tuned separately.

### Diff Checker, expanded

Figma has no expanded panel for the Diff Checker — that screen is drawn
collapsed because the diff needs the full canvas. Expanding it therefore
returns the panel to its root level, the Analysis Toolbox, with Diff Checker
shown in the full-size Active variant (`State=Active, Size=Default,
Direction=Color 1`). Nothing is invented; if that tool should get its own
panel content, it needs a Figma frame first.

`nav.js` is the only script: it records the click direction in
`sessionStorage` so the incoming page can play a push (forward) or pop (back)
animation on the right column alone. Everything else is plain CSS.

### What moves, and what doesn't

The panel header is treated as a fixed frame rather than a moving surface, so
the two icons in it read as one persistent control across levels:

| Element | Travel |
| --- | --- |
| Back arrow (`.panel-back`) | none — anchored |
| Collapse toggle (`.panel-toggle`) | none — anchored |
| Title (`.panel-header h1`) | 10px (`--nav-travel-title`) |
| Section tabs, meta row, panel body | 38px (`--nav-travel`) |

Distances and timing are CSS custom properties at the top of the transition
block in `styles.css` (`--nav-duration`, `--nav-ease`, `--nav-travel`,
`--nav-travel-title`), so the feel is tunable in one place. The whole thing is
disabled under `prefers-reduced-motion`.

### Why the icons don't flicker

Each screen is a separate document, so a navigation is a real page load. If the
icons were `<img src="assets/...">` they would be fetched and decoded *after*
the header had already painted — the anchored icons would blink out and back on
every transition, however carefully the CSS pinned them.

So every icon is an inline `<symbol>` in a sprite at the top of each document,
referenced with `<svg class="ico"><use href="#i-name"></svg>`. The icons are
part of the markup and land in the very first paint. A page load pulls
`styles.css` and `nav.js` and nothing else — zero image requests.

`assets/*.svg` are kept as the source files; `build/sprite.py` regenerates the
inline sprite from them if an icon is ever re-exported from Figma.

## Files

- `styles.css` — design tokens (colour, type scale, spacing) transcribed from
  the Figma variables, then the component styles.
- `assets/*.svg` — icons exported from the Figma file (source only; the pages
  inline them, see above).
- `build/sprite.py` — regenerates the inline sprite from `assets/`.
- `nav.js` — ~20 lines of push/pop direction tracking.
- `panel.js` — collapse/expand toggle and its stored preference.

## Hosting

Every page carries `<meta name="robots" content="noindex, nofollow">`, so if
this is put on a public URL it stays out of search results.

There is deliberately **no `robots.txt`**. Disallowing a path there stops
crawlers from *fetching* the page, which means they never see the `noindex` tag
— and a blocked URL can still be listed in results from inbound links alone.
The meta tag only works if the crawler is allowed in to read it.

Note that this suppresses discovery, not access. Anyone with the URL can still
open the page. No free static host offers real access control; for genuinely
private review, send the folder instead — it runs from disk.

## Verifying the commitment page

DOM assertions alone are not enough — they passed for several rounds while the
page still looked wrong, because they checked properties I had chosen rather
than geometry the design fixes. Use both of these.

### 1. Layout geometry — `build/check-layout.js`

Paste it into the console on a commitment page. It asserts the numbers the page
spec pins down: container 1392 at x=24, columns 569 / 16 / 807, a 56px inset
giving a 584px measure, 569px card with 40px padding, 64px quote tabs, 120px
block rhythm, and `n − 1` rules for `n` blocks.

This is what caught the container bug: `max-width: 1392` with `padding: 0 24px`
and `box-sizing: border-box` left a 1344px content box, so both columns started
24px too far right and the grid overflowed. Every property-level check passed
while that was true.

### 2. Full-page visual, against the frame

The preview pane returns a blank image for anything scrolled, which is why the
page went unseen for so long. Two things get around it:

- **Make the viewport tall** — `resize_window` to `1440 × 3200` so the region
  you want is on screen without scrolling.
- **Shift instead of scroll** — `document.body.style.marginTop = '-3050px'` to
  page down. Scrolling breaks capture; a margin shift does not.

Then compare against the frame render. The repo has no export of it, so pull one
with `get_screenshot` at full resolution and slice it with `build/sprite.py`'s
sibling approach — a dependency-free PNG row-slicer, since the frame is
1440 × 9450 and unreadable at any single scale.

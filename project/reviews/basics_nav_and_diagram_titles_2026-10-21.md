# The Basics in the header and on the home page; short names for 136 diagrams (21 October 2026)

**Owner request (21 Oct):** "yes lets add it to both places". That means The Basics in the main header and on the home page.

## Changes

- **Header** (`site/src/components/Header.astro`, `global.css`)
  - "The Basics" is now the first header action. Below 37rem it shows as "Basics". Its accessible name is "The Basics".
  - It is gated on AUDIO_ENABLED.
  - On /the-basics/ it carries `aria-current`, shown as an accent bottom bar that looks different from the hover fill.
  - The header is re-tiered for four actions:
    - 37rem: compact.
    - 30rem: "Contents" becomes a ☰ glyph. The word stays in a visually hidden label.
    - 22rem: tighter gaps, and the decorative puck is hidden.
  - `.icon-button` is set to nowrap.
- **Home page** (`site/src/pages/index.astro`)
  - A card under the hero reads: "New to hockey, or coaching younger players? Start with The Basics: 13 short episodes to listen to, suitable for newer players or younger players."
  - The episode count comes from the data.
- **Diagram names** (`site/src/diagrams/*.mjs`, `site/scripts/lib/rink.mjs`, `site/scripts/build-diagrams.mjs`; diagrams.json rebuilt)
  - 136 diagrams gained an explicit short `title`, which becomes the SVG `<title>` and the image's screen-reader name.
    - 80 of them were falling back to their id (for example "Nz 1 4" is now "1-4 neutral zone structure").
    - 56 were repeating the first sentence of their caption.
  - `build-diagrams.mjs` now passes `title` into `rinkSvg`, so rink-map-end-zone gets "End zone position vocabulary".
  - Stale comments about the aria-hidden figcaption are updated.

## Reviews

- **dtR (diagram-reviewer).** It checked all 136 titles against caption, describe, glossary and host sections, and opened 4 renders. No title states a rule or tariff.
  - Two titles were wrong and are fixed:
    - "Hybrid icing race to the dot" stated the very misconception the diagram corrects. It is now "Hybrid icing: the faceoff dot is the deadline".
    - "Angling into your own corner" misused "angling". It is now "Skating into your corner at an angle".
  - Seven more wording fixes were applied: shoulder, blue line, corner-battle danger, turnover cost, privileged area, 2-on-1, pinch.
  - Hyphenation nits were not applied.
- **navSite (site-reviewer, C10), first pass.** It checked 320, 400 and 1280 px in light and dark, using CDP with headless Chrome because the extension was blocked.
  - Passed: the home card (AA contrast, hover, focus, link) and the diagram names in the accessibility tree.
  - Two MAJORs, both in the header:
    - "The Basics" wrapped at 497–586 px.
    - The wordmark was squeezed to 54 px at 320.
  - One minor: the current-page state was identical to hover.
- **navSite re-check after the fixes: PASS on every item.**
  - Wordmark widths: 121 px at 320, 173 at 400, 206 from 480 up. All buttons are 36 px tall. No horizontal scroll across a 320–720 px sweep.
  - The ☰ glyph is legible in both themes and its accessible name is "Contents".
  - The current-page bar is distinct from hover.
  - Judgement: some readers will read ☰ as a menu, but it is a low-cost surprise.
- **Builds:** build-diagrams and npm run build both exit 0. check-links, check_absolutes and check_geometry pass.

## Not done / judgement calls (logged)

- Below 352 px the decorative puck is hidden.
- ☰ may be read as a pop-out menu. A list icon, or the word "Index", would avoid that if the owner prefers.
- There are hyphenation nits in 8 diagram titles.

## What this method could not have found

- Real phones, Safari and Firefox.
- How real screen readers announce the new names.
- Whether a coach recognises every named system.

# Site readability features, programme items 9–11 (19 October 2026)

The owner approved all four features on 19 Oct 2026. One agent built them in site/ only; no content words changed.

## Files

- site/src/plugins/remark-corpus.mjs:
  - `markInShort` adds the "In short" convention;
  - `markCosts` styles the "What it costs" label;
  - `markEssentials` marks the blocks the Essentials view keeps;
  - `recordReadingTime` computes the reading time;
  - the Sources summary is restyled.
- site/src/styles/global.css: one appended block that uses existing tokens.
- site/src/pages/[...slug].astro: adds the reading tools, the head script and a closing "Show the full guide" button.
- site/src/components/ReadingTools.astro (new): reading time, the toggle and the essentials note.
- site/public/essentials-view.js (new): a classic script beside theme-init.js, a separate file under `script-src 'self'`, and precached by the service worker.

## Features

1. **Essentials view.**
   - A "Full guide | Essentials" toggle, using aria-pressed.
   - Essentials keeps Key focus, Key Takeaways and "In short" lines, and hides the rest with CSS; the content stays in the HTML.
   - The choice is remembered in localStorage (try/catch).
   - Without JS the full page shows. A deep link or a link to a hidden section switches to the full guide without overwriting the saved preference.
2. **"In short" convention.** A paragraph that is the first block after an `##` or `###` heading and opens `**In short:**` renders as a one-line summary panel. A misplaced one renders as prose and the build prints a warning. md_to_speech voices it as "In short: …" with no renderer change. No content uses it yet.
3. **Reading time.** Prose words at 230 wpm, excluding facts blocks, tables, the Sources trailer, notes and code; built at build time. The Sources `<details>` gets a cleaner summary and prints its content. The verification notes stay visible on purpose: filing them inside the collapsed box once buried six documents' safety notes.
4. **"What it costs."** A muted small-caps label only, with no frame (see the review).

## Review

A site-reviewer used headless Chromium over the DevTools protocol, because the Chrome extension blocked localhost. It covered six pages (core_principles, winger, body_contact_and_battles, goaltender, rules_primer, centre) at 320/400/1280 px in light and dark: 36 cells for layout, focus and keyboard, deep links, print, the console and the network.

**Verdict:** no CRITICAL.

**MAJORs, both fixed:**
- **M1, the costs frame stopped partway through the price list.** The next paragraph often carried the other books or the harsher tier outside the frame: 62 of 179 blocks were candidates. A frame implies a complete price, so it undersold the cost. **Fixed by dropping the frame and styling the label only.** The code comment records two alternatives for the owner: extend the frame to the next heading, or a content end marker.
- **M2, printing in Essentials gave a silent 3-page extract with no warnings.** Fixed: the Essentials hiding is now `@media screen` only, so print always gives the full document.

**Minors, fixed:**
- m1: the note promised "section summaries"; it now names them only when a page has In-short lines.
- m2: two `[Center]` link texts were left in the switching_positions trailer; now "Centre".
- m3: moot once the frame was removed.
- m4: noted as information. Essentials Key Takeaways run long (centre has 18 items), and body_contact shows "223 min read" against 6 for Essentials.

**What Essentials keeps:** each page's main safety messages in Key focus and Key Takeaways, with their ⚠️ amber runs intact (3–10 per page). Body warnings are one click away; body_contact goes from 238 amber runs to 8 in Essentials.

**Re-verification after the fixes:** a production build passed (exit 0, all 11 steps, check:links). Headless Chrome against dist with the exact production CSP header copied from infra/locals.tf showed:
- no CSP errors;
- the script emitted and precached;
- the toggle and its persistence working;
- 0 frames and 13 or 15 labels styled;
- Essentials PDFs that print the full body and the Sources.

## Dimensions

D1–D13 are out of scope: no content words changed.

| Dimension | Coverage |
|---|---|
| D14 structure | Anchors and links unchanged; check-links passes |
| D15 site | Production build, headless Chrome review on six pages × three widths × two themes, CSP, PWA and print |

## What this method could not have found

- Safari, Firefox and real phones.
- Screen readers.
- The real CloudFront headers.
- Whether a small-caps label alone is distinct enough across all ~180 sites.
- How In-short lines look in real sections, since none exist yet.

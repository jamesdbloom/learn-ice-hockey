# W637: full-sheet diagrams open on their play on a phone, and a build guard for the crisis box (23 November 2026)

## Full-sheet diagrams at 400 px

**The problem.** The W633 browser pass found that full-sheet diagrams (640 px inside a 371 px box) opened scrolled to the left edge, with the labelled play off-screen.

**The fix.** `site/src/scripts/diagram-focus.js` is a small progressive-enhancement script. It is served from `site/src/pages/diagram-focus.js.ts`, because the CSP is `script-src 'self'`, and `rehype-corpus.mjs` adds it only to pages that have a diagram scroll box. For each box that overflows, it sets the initial scroll to the offset showing the most whole text labels. Offset 0 is always a candidate. Ties go to the offset nearest the skaters' labels, with goalies excluded, so that no player shape is cut in half where that is avoidable. The scroll is instant, so there is no animation. A box the reader has scrolled is never moved, and on a width change, such as a phone rotation, the script places the boxes again.

**First version.** Its own author tested it, and then a site-reviewer measured all 92 overflowing boxes and found two majors:
- about 15 diagrams opened worse than at offset 0, because goalies at both ends and long arrows stretched the "action" box;
- rotation undid the placement, because the browser's scroll clamp was taken for a reader scroll.

**Rewrite.** Both majors were fixed in a rewrite, which the reviewer re-measured. A tie-break that left D1 half-cut on "Beating a 1-3-1" was then fixed too.

**Acceptance (Playwright Chromium, 400 px, light and dark, production CSP, 186 box-scheme pairs):**
- **No box opens worse than offset 0.** 92 open better, and every box opens at its best offset.
- **Whole labels:** 1,344 at offset 0, 1,682 now.
- **Half-cut player shapes:** 82 at offset 0, 14 now. "Left-wing lock in the neutral zone" gains labels (7 → 11 of 13) but cuts 2 shapes, because whole labels outrank whole shapes.
- **Rotate test:** 400 → 844 → 400 returns every box to its first placement.
- **Desktop at 1440:** nothing scrolls, and page heights are unchanged.
- **Errors:** no console errors and no CSP violations.

## Crisis-box guard

`site/scripts/check-crisis-nowrap.mjs` is called from `check-links.mjs`, the last step of `npm run build`. The build fails if the mental_game crisis callout has fewer than 7 `span.nowrap` phone numbers. The script finds the callout by its opening sentence, falling back to the callout that carries the spans, and fails explicitly if it finds neither.

The guard was tested on a scratch copy of the built HTML, which was then deleted:
- intact page: pass;
- wrapping removed: fail;
- opening reworded with the wrapping removed: fail with "no crisis callout".

The real build passes, with 9 wrapped numbers.

## What this method could not have found

- How it behaves on real phones and in other browsers: iOS Safari, Firefox, real orientation-change events.
- The persistent scrollbar cue. Headless Chromium draws no scrollbar.
- Whether the most important player is the one on screen. Label count is a proxy for that.

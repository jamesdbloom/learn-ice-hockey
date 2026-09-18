# Dead scroll regions, and a PDF built from a bundle that stopped existing — 18 September 2026

**Files changed**

| File | Change |
|---|---|
| `site/public/scroll-regions.js` | **NEW, 161 lines. Ships to production.** |
| `site/src/plugins/remark-corpus.mjs` | emits `data-scroll-region="Diagram"` |
| `site/src/plugins/rehype-corpus.mjs` | emits `data-scroll-region="Table"`; injects the script only on pages that have a region |
| `site/src/styles/global.css` | two comments corrected — they asserted something false |
| `site/src/diagrams/zone_entries.mjs` | ⚠️ a caption stated Rule 69 keyed on the wrong player |
| `site/src/diagrams/rule69_clauses.mjs` | the shared crease-line constant, imported by four modules |
| `site/src/data/diagrams.json` | build product of the two above |
| `site/scripts/build-downloads.mjs` | ⚠️ cleans `.print/` — committed separately as `77263af` |

## The defect

Focus attributes were emitted **at build time, unconditionally**, so a keyboard user
got a tab stop and a *"scrollable horizontally"* announcement on containers that **do
not scroll**.

⚠️⚠️ **THE CAUSE IN THE ORIGINAL PLAN ROW WAS WRONG, AND IT WAS THE DISPATCHER'S
BRIEF THAT WAS WRONG.** The row said both plugins were *"blanket"*. **They were not.**
`remark-corpus.mjs` gates diagrams on `d.half === false`, and its comment is
**correct** that this matches the only CSS rule carrying `overflow-x: auto`.

**The real cause sits sixty lines away in a different file.** `global.css`'s
`@media (min-width: 60rem)` gives a full sheet `min-width: min(640px, 100%)`, so
above 960 px it **fits its column and stops overflowing**. **All 94 diagram tab stops
were dead above 960 px by construction, and none at 375.** Only the **table** half was
ever unconditional. ⚠️ **A brief that names the wrong file sends an agent to fix code
that was already right.**

**A third defect neither measurement nor either brief named:** the `--tall` label
*"scrollable horizontally and vertically"* is a guess twice over — a capped table that
fits horizontally still scrolls vertically, **and the build cannot know which.**

## The fix, and the decision inside it

`scroll-regions.js` measures `scrollWidth`/`scrollHeight` against the client box and
adds or removes `tabindex`/`role`/`aria-label` to match; per-region `ResizeObserver`,
rAF-coalesced.

⚠️ **It gates on the COMPUTED `overflow-x`/`overflow-y`, not on a selector list** —
which is what stops it announcing a phantom second axis on all 49 tables, since CSS
Overflow 3 makes `overflow-y` used-value `auto` on every `.table-scroll`.

⚠️ **THE NO-JS DECISION, STATED RATHER THAN ASSUMED — and the agent overrode the
brief, correctly.** The brief sketched stripping the attributes at build time. The
agent **kept them and made the script remove the wrong ones**, because the two
failures are not symmetrical: **a dead tab stop is noise; a MISSING tab stop on a box
that really overflows is content loss** — the off-screen columns of a rule-comparison
table reachable by pointer-drag alone. **In a corpus where those tables are where the
penalties are, the baseline that keeps every cell reachable is the safer one.**

## Measured in a real browser — headless Chrome 153 over CDP, 31 pages × 12 viewports

⚠️ **The before-state was re-derived, not carried in.** `dist` HTML carries **143**
build-time `tabindex="0"`, all 143 `data-scroll-region`, **zero orphans**.

| viewport | overflow | tab stops | **dead** | **missing** |
|---|---:|---:|---:|---:|
| 375 | 127 | 127 | **0** *(was 16)* | 0 |
| 960 | 3 | 3 | 0 | 0 |
| 1248 | 3 | 3 | 0 | 0 |
| 1440 | 2 | 2 | **0** *(was 141)* | 0 |

**141 dead of 143 at 1440 and 16 at 375 both reproduce exactly as the before-state.**
After: **zero dead, zero missing, at all 12 widths.**

⚠️ **THE BAND PREMISE WAS HALF WRONG, AND THE CORRECTION MATTERS.** There *is* extra
overflow at exactly **960** and **1248**, and the script correctly adds attributes
back. **But it is a TABLE, not a diagram — zero diagrams overflow at any width
≥ 768.** The `min(640px, 100%)` floor holds, and the comment's own falsifier passes.

**Also verified:** real `ArrowRight` moves `scrollLeft` 0→293 of max 294; non-scrolling
regions carry **0 focus, 0 residual `role`/`aria-label`**; resize 1440→375→1440→960→320
converges every time; **all three label forms appear, including `Table, scrollable
vertically`, which the build cannot produce**; JS-disabled retains the build-time
baseline exactly; no phantom at 110/125/150/200% zoom; `.print/*.html` carries **0
script tags**; **0 console errors over 72 page-loads**; contrast passes AA in both
themes on every sampled element.

## ⚠️ AND A PUBLISHED PDF BUILT FROM A BUNDLE THAT STOPPED BEING GENERATED

`build-pdf.mjs` takes its worklist from `readdirSync(PRINT_DIR)` rather than from the
bundles `build-downloads` just wrote, **and `.print/` was never cleaned.** So a layer
that stops being generated is **printed forever, with a fresh mtime that makes it look
current.**

**It had already happened and was shipping.** One bundle was **8 days stale** and still
producing a 570 KB PDF. `structure.json` has **7 layers + 1 corpus bundle = 8**;
`build-pdf` printed **9**.

⚠️ **The stale bundle was the only HTML anywhere still carrying the PRE-CHANGE
scroll-region attributes** — a published artefact of a superseded build.
⚠️⚠️ **NOTHING IN THE PIPELINE COULD SEE IT.** Every checker reads `content/` or
`dist`; the PDF is **linked from no page**, so no link check reaches it. **It was found
only because a reviewer compared file timestamps.**

Fixed in `build-downloads.mjs` rather than `build-pdf.mjs`, so the invariant sits with
the thing that establishes it: `.print/` contains exactly what this run generated.
Verified after: **8 bundles, 8 PDFs.**

## ⚠️ What this round could NOT establish — the honest list

- **The two desktop bands were confirmed for ADDING attributes, not for a full sheet.**
  `global.css`'s comment names 960–1007 and 1248–1287 as widths where a full sheet
  still overflows. **It does not, for diagrams.** The comment is now imprecise.
- ⚠️ **NO SCREEN READER WAS RUN.** Every accessibility claim here is about `role`,
  `tabindex` and `aria-label` **strings in the DOM** — not about what NVDA, JAWS or
  VoiceOver announce. ⚠️ **Whether a region RENAMED underneath a user mid-session is
  re-announced, or silently swapped, is unknown.**
- **Chrome only.** Safari and Firefox size `svh`, sticky table headers and overflow
  scrollports differently, and `.table-scroll--tall` depends on all three.
- ⚠️ **The production CloudFront layer was never seen.** The CSP that makes
  `scroll-regions.js` a file rather than an inline script is a **response header**,
  and the clean-URL rewrite is untestable locally. **Both are exactly where this class
  of change has silently failed before.**
- **The service worker upgrade path.** `sw.js` precached 182 URLs and served the new
  file from cache-storage on first run; **an upgrade from a previously-deployed SW —
  the realistic path for returning readers — was not tested.**
- ⚠️ **`data-scroll-region` is an unguarded seam.** A future wrapper that overflows
  without carrying it is invisible to the script **and to every checker.**
- **200% zoom was emulated via device metrics**, not by pressing Cmd-+ in a real window.
- ⚠️⚠️ **Every page rendered correctly, which says NOTHING about whether what it says
  is true.** The four changed captions now assert a specific IIHF Rule 1.7 /
  appendix-table contradiction; this round confirmed only that those words **reach the
  screen.** Their truth is `rules-verifier`'s, and is recorded in
  `crease_line_layer_round_2026-09-18.md`.

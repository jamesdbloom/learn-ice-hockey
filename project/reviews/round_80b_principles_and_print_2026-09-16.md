# Round 80b — the page-opening principles, the print layer, and fourteen quotations

**16 September 2026, after `d0b884e`.** ⚠️ **Written because a commit gate applied
round 80's own objection to three more workstreams: `content/getting-started/getting_started.md`
and `content/technique/body_contact_and_battles.md` were changed in that commit and
named in no review record — only under `### FIXED:` headings in `OPEN_ITEMS.md`.**
**A brief is not a record of work done, and `CLAUDE.md` says the plan holds no
completed items.**

## 1 · The page-opening principles, unified

`d0b884e` added a framing principle to three documents in three different shapes.
⚠️ **A `site-reviewer` found the divergence in the rendered page, which is the
only place it was visible**: one document's principle appeared **nowhere in its
table of contents**, and inside its Overview the bold lead rendered at **the same
17 px and the same weight** as three ordinary bold leads in the same section.

**All three now use a contentful `##` heading**, so the ToC entry states the
principle rather than labelling it.

**Measured in real Chrome after the change**, at 375 / 768 / 1440 in both themes:

| | new `h2` | a bold lead in the same document |
|---|---|---|
| font-size | **24.8 px** | 17 px |
| font-weight | **700** | 650 |
| margin-top | 44 px | 0 |

The longest entry — 75 characters — **wraps and never truncates**, taking
**2.3–3.0%** of the panel; three anchors resolve at ~128 px, clearing **both** the
sticky header and the sticky audio player. **Console clean across all 49 pages.**

⚠️ **A brief premise was refuted:** that entry is **not** the longest in that
sidebar. The same document already carries a **77-character** entry at three
lines.

**A decision taken deliberately:** `getting_started.md`'s principle is **not one
of the seven** and is not in `core_principles.md`. ⚠️ **No disclosure was added
saying so** — a contentful heading makes no ownership claim, where `## The
principle` with a definite article could be read as *"the principle, i.e. one of
the seven"*. **Adding the disclaimer would be the corpus narrating its own
taxonomy.**

## 2 · The print layer — a critical, and the defect the repair introduced

**Printing from a dark-themed browser rendered every ` ```facts ` block and every
⚠️ callout paler than the prose around them.** Measured by rasterising the output:
facts layer darkest pixel **148/255** against prose at **0/255**; links
**black-on-dark at 1.26:1**; **1,832 text elements under 4.5:1** with backgrounds
off, which is Chrome's default.

⚠️⚠️ **WHO IT REACHED — CORRECTED.** This record's first draft said it reached
readers who never chose a theme, because the dark palette applies whenever the OS
is dark. **A commit gate refuted that and the coordinator confirmed it
independently:** Chrome renders print with a **light** preferred colour scheme —
a probe printed under `--force-dark-mode` reports `PRINTMEDIA-YES` but
**`SCREEN-DARK-NO`** and **`PRINT+DARK-NO`** — and `theme-init.js` sets
`data-theme` **only** from `localStorage`. **The affected population was readers
who had explicitly selected dark in the toggle**, via `:root[data-theme='dark']`,
which is not inside a media query.
⚠️ **That is the sentence that made this a critical rather than a defect**, and it
was asserted in three staged files without being measured. ⚠️ **Chrome 152 on
macOS only; Safari and Firefox untested.**

⚠️⚠️ **The two layers that came out faintest are the two that carry the
caveats.** The corpus's signature defect, reproduced in a layer nobody had looked
at.

**Cause:** `@media print` forced white/black on `html`/`body` only and never
re-declared the palette, so the dark custom properties stayed live for every
descendant reading `var(--text-muted)`, `var(--text)` or `var(--bg-raised)`.
**Fixed by re-declaring the light palette on `:root` inside the print block.**

### ⚠️⚠️ THE REPAIR SHIPPED TWO FURTHER DEFECTS, AND NEITHER WAS VISIBLE IN THE CSS

**Both were in the same small block. Both passed a CSS inspection twice. Both were
found only by rendering the page and measuring it.**

#### ⚠️⚠️ Defect B — THE FIX DID NOT APPLY AT ALL TO THE LAYERS IT WAS WRITTEN FOR

The block declared the light palette on **bare `:root`** — specificity
**(0,0,1)**. ⚠️ **`:root[data-theme='dark']` is (0,1,1) and OUTRANKS IT.** Every
one of the 29 declarations **lost**, and the block did nothing for the two layers
it existed to repair: **the ` ```facts ` blocks and the ⚠️ callouts**, which
resolve through `var(--bg-raised)` and `var(--text-muted)`.

⚠️⚠️ **IT LOOKED FIXED, AND THAT IS THE POINT.** `html, body` in the same block
forces background and colour **directly** with `!important`, so ordinary body
prose printed black-on-white and the page appeared repaired. **Only the
var()-driven layers stayed dark — which is to say, only the caveats.**

**The tell was the page margin printing `(18,18,18)`.** `color-scheme` was losing
on specificity the same way, and **the user agent paints the page canvas from
`color-scheme`**, not from a background property.

**Fixed** by raising the selector to `:root, :root[data-theme]` — (0,1,1), tying
the dark rule and winning on source order.

⚠️ **NO CSS-LEVEL CHECK COULD HAVE FOUND THIS.** Every declaration is present and
correct; they are simply outranked. *"29 properties, braces balanced"* passes
happily, and did, twice.

#### Defect A — a truncated value, caught by a commit gate

`--font-body` in the source is a **two-line value**. The extraction that built the
print palette filtered for lines *starting* with `--` and **silently dropped the
continuation `Arial, sans-serif;`** — so `--font-body` swallowed the `--font-mono`
line, both became invalid at computed-value time, and **`body` fell back to the
browser's default serif on every printed page.**

⚠️ **Not limited to Cmd-P: `build-downloads.mjs` inlines this stylesheet and
`build-pdf.mjs` prints it — one print path, not two. The shipped PDFs would have
carried it.**

⚠️⚠️ **THE VERIFICATION THAT MISSED IT IS THE LESSON.** The fix was certified as
*"29 properties, braces balanced, typo gone"* — **and a CSS parser also reports 29
nodes, because the swallowed line is not a declaration.** ⚠️ **Counting
declaration-shaped lines is precisely the method that cannot see a declaration
that has eaten its neighbour.**

**Now verified by parsing instead**: the print `:root` and the source `:root` hold
**the same 29 custom properties, no gaps, no extras, no differing values**, and
`--font-body` terminates at `sans-serif` with `--font-mono` standing as its own
declaration.

**Also fixed:** `.prev-next` in the print hide-list against a component rendering
`.prevnext` — the typo matched no element and the Previous/Next navigation printed
on every page.

## 3 · Fourteen quotation repairs

Quotations in `body_contact_and_battles.md` that closed **before a terminal period
the source does not have**. ⚠️ **Two had presented a subject noun phrase as a
complete sentence** — USA Hockey 615's Note (*"…is considered fighting"*) and
IIHF 46.12 (*"…will not result in a penalty to either Player"*) — and in both the
corpus's own framing already supplied the missing predicate, so nothing was lost.

⚠️ **One repair improved a safety reading rather than tidying it.** Hockey Canada
7.1(c)(iv) reads *"…to gain an advantage or to inflict punishment **or injury**."*
The old text closed the quote at *"punishment."*, **falsely signalling a complete
sentence and hiding the second trigger.**

**A commit gate independently re-derived all fourteen against `sources/` and
confirmed the source sentence continues in every case.**

**The remaining lowered initials were read and left.** The document already mixes
disclosed `[x]` bracket insertions with bare ones — ⚠️ **run
`check_quote_drift.py` for both figures; a plan row shipped two that were wrong
before and after the round** — and repairing a fraction would leave it no more
consistent while being exactly the sweep the method forbids.

⚠️ **Two `check_quote_drift` hits were WRONG-OCCURRENCE false positives, and one
crossed books:** one matched a different line of the same book; the other matched
**NHL Rule 70.1 when the corpus quotes the USA Hockey Casebook.** ⚠️ **The tool's
declared blind spot seen from the other side — it can not only miss attribution
drift but INVENT it.**

## What this method could not have found

### The measurement, re-run after both fixes

⚠️ **This section replaces two sentences in this record's first draft that said
the measurement had NOT been re-run. A commit gate caught that they were false by
the time they were staged.**

**Method:** the built page at `dist/positions/goaltender/` copied to a temporary
`dist/__printtest/` with `data-theme="dark"` hardcoded on `<html>` — so the
`:root[data-theme='dark']` rule, which is the one that actually affected readers,
is exercised — served over HTTP and printed with headless Chrome 152
(`--headless=new --print-to-pdf --no-pdf-header-footer`), then rasterised with
`pdftoppm -r 80`. ⚠️ **The temporary page has been deleted; recreate it to
reproduce this.**

| | before | after |
|---|---|---|
| page margin / canvas | `(18,18,18)` | **`(255,255,255)`** |
| facts-layer darkest pixel | **148/255** | **28/255** |
| body prose darkest pixel | 0/255 | 0/255 |
| ink pixels per page | 432,190 — 72%, the dark ground | **~41,500 — 7%, glyphs** |
| body typeface (`pdffonts`) | — | **SFNS**, sans; **no serif in the font table** |

**The PDF was valid** — `pdfinfo` reports 153 pages, letter — and was rendered at
17:30 against source last edited at 17:28.

⚠️ **The typeface line is the one that matters most**, because it is the check
that would have caught the truncated `--font-body` in a single look, and a
contrast measurement passes happily on Times New Roman.

⚠️ **No `safety-reviewer` pass exists for `body_contact_and_battles.md`'s
fourteen repairs.** A commit gate re-derived them all, which is corroboration and
not a reviewer.

**`check_quote_drift`'s `notfound` column is 51 in that document alone** —
quotations whose source is not on disk. **Neither verified nor flagged: invisible.**

⚠️ **Nobody has confirmed the ToC entries in a browser since the headings were
finalised**, and the site review that measured them ran against a build that one
content file has since moved past.

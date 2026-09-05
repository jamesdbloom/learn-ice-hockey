# Round 64 — the tooltip was the caption, and most sections had no picture

**Started 4 September 2026, after round 63 shipped as `5dab987`.** **The owner set the priority directly:
readability and diagrams, above everything else in the plan.**

---

## What the owner reported, and what measuring found

**Two things, both correct, both worse than stated.**

### 1 · "most sections should have a diagram"

**The owner named one page — `center.md`'s *"Defensive Zone: Carrying the Puck — Under Pressure"* — and said
it was typical of many. It is.**

| level | total | drawn | share |
|---|---|---|---|
| `##` teaching sections | 392 | 92 | 23% |
| ⚠️ `###` subsections | **1,120** | **119** | ⚠️ **11%** | ⚠️ *replaces 1,115 / 115 / 10%, which did not reproduce — see below* |

⚠️ **MEASURING PER DOCUMENT HIDES THIS COMPLETELY.** A document with four diagrams looks served while
nineteen of its twenty subsections have none. **`center.md` had three diagrams and sixteen undrawn
subsections.** **Seven documents had ZERO across every subsection.**

⚠️ **AND MY FIRST CENSUS HAD A BUG A DIAGRAM AGENT CAUGHT.** It treated only `###` as a boundary, so **the
last subsection before every `##` swallowed Common Mistakes, Check yourself and Key Takeaways.**
**`winger.md`'s *"Backchecking"* was reported at 7,579 words. It is 429.** **The counts were right; the
"biggest undrawn" column was inflated once per major section in every document — which is what I was using
to pick targets.**

### 2 · ⚠️ THE HOVER TOOLTIP WAS THE ENTIRE CAPTION

**The owner reported that hovering a diagram produced a wall of text, that it duplicated the prose, and that
the accessibility case for it did not hold either.**

⚠️ **THE TWO COLUMNS BELOW HAVE DIFFERENT POPULATIONS AND AN EARLIER DRAFT DID NOT SAY SO.** Before was
measured across **167** built diagrams; the round then added nine, so after is across **176**. A
before/after table whose n moves silently is the same defect as a figure copied out of its owner.

| | before (n=167) | after (n=176) |
|---|---|---|
| median `<title>` | **1,280 chars** | **24** |
| worst | **4,471** | **121** (`corner-escape-routes`) |
| ending in a truncation | — | ⚠️ **97, then 0 — see below** |
| over 200 chars | **167 of 167** | **0** |
| over 130 chars | — | **0** |
| SVGs with no `<desc>` | — | **0 of 176** |

⚠️ **The "after" column above is the FINAL state, measured after the `legendSvg` repair below.** An
earlier draft recorded *worst 218* and *1 over 200 chars* — that was `notation-key`, and it was the
symptom of the critical, not an acceptable outlier. **Recording the result before fixing the defect it
exposed would have shipped the number as if it were the finished state.**

**A browser renders an SVG's `<title>` as a hover tooltip. The corpus put the whole caption there.**

⚠️ **THE OBVIOUS FIX WAS A TRAP, AND THE RENDERER'S OWN COMMENT SAID SO.** The site emits
`<figcaption aria-hidden="true">`, so **`<title>` was the ONLY route by which a screen-reader user received
the caption.** **Truncating it would have deleted the teaching for exactly the readers it was written for.**

**So the caption MOVED rather than shrank:** `<title>` is now a short name — the caption's own first
sentence, or an explicit `title` field — and **`<desc>`, which no browser shows on hover, carries the drawn
description AND the caption.** **A screen reader announces the name, then the full description. Nothing is
lost; it is in the right slot.**

---

## What shipped

**32 new diagrams. Registry 144 → 176, zero duplicate ids. Subsection coverage 119 → 166 of 1,120.**

⚠️ **THOSE COVERAGE FIGURES REPLACE 115 → 162 of 1,115, WHICH DID NOT REPRODUCE — the round's fourth figure defect.** `commit-gate` re-derived them and got a constant offset of five and four; **the delta of 47 reproduced exactly**, so it was a population error, not arithmetic, **and no filter either of us tested produced 1,115.** Definition, now stated because its absence is what made the old number unfalsifiable: **`###` headings only, a marker attributed to the nearest preceding `###`, the count reset at each `##`, fenced content excluded.** Measured against `HEAD` and the index.

⚠️ **EVERY FIGURE IN THIS RECORD IS MEASURED AGAINST THE SHIPPED TREE, NOT REMEMBERED.** ⚠️ **AND THAT SENTENCE WAS FALSE THE FIRST TIME IT WAS WRITTEN.** `commit-gate` found three figures wrong (31 against 32, 175 against 176, 43 against 44) and the marker count off by forty; **the repair fixed the HEADLINE and left four more wrong in the BODY**, under this very claim. **A round record's figures are its evidence, and a claim to have measured them is not a measurement.**

⚠️ **THE TABLE BELOW REPLACES ONE THAT WAS WRONG IN FOUR OF NINE ROWS, AND IT IS THE THIRD FIGURE
DEFECT IN THIS RECORD.** `commit-gate` tested the old rows under three separate definitions and **no
row-set was consistent under any of them**; the deltas summed to 32 correctly while the bases and
totals did not, **understating what shipped** — `goaltender.md` was recorded at 9 where 20 embeds are
in the file. ⚠️ **The defect was that the column never said WHAT IT COUNTED.** Both definitions are
now given, measured against `HEAD` with `git show`:

- **embeds** — `![](diagram:…)` markers in the file. A diagram placed in three sections counts three.
- **sections** — sections (`##`/`###`) holding at least one marker. The coverage measure.

| document | embeds | sections holding one |
|---|---|---|
| `goaltender.md` | 4 → **20** | 3 → **15** |
| `winger.md` | 4 → **27** | 3 → **16** |
| `center.md` | 3 → **7** | 3 → **7** |
| `rink_map_and_glossary.md` | 9 → **13** | 9 → **13** |
| `game_management.md` | 3 → **15** | 2 → **6** |
| `puck_handling.md` | **0** → **3** | **0** → **3** |
| `faceoffs.md` | 6 → **10** | 4 → **7** |
| `zone_entries.md` | 9 → **11** | 9 → **11** |
| `body_contact_and_battles.md` | 5 → **8** | 5 → **8** |
| `skating.md` | **0** → **1** | **0** → **1** |
| **total, these ten** | **43 → 115** | |

⚠️ **The two columns diverge widely for `goaltender.md` (20 embeds, 15 sections) and
`game_management.md` (15, 6) because a diagram is REUSED across sections.** 40 of this round's
placements borrowed an existing diagram at zero drawing cost, and **the embed column is the only
account of them.** A single "diagrams" number cannot represent both and should never be written.

---

## What the agents refused, and why the refusals are the better half

⚠️ **MY BRIEFS NAMED A "FIRST TARGET" THAT WAS ALREADY DRAWN, TWICE.**
- I said **the trapezoid** *"has no picture anywhere in the corpus"*. **It has THREE** — and `endZone()`
  paints its lines on **all 167 diagrams**. `on_ice_communication.mjs:36` even records it was considered and
  declined for reuse. **The agent searched first, as instructed, and drew the DECISION the shape produces
  for a goaltender instead — which nothing owned.**
- I made **"catching a loose puck in your own crease"** a top target. **An agent recommended REFERENCING the
  existing `the-puck-decides-not-you` instead**, because that caption already carries the location test both
  ways, the four-book goalkeeper exemption, and the crease-as-a-volume point **a plan view structurally
  cannot draw**. ⚠️ **A third copy had already been withdrawn once for the same reason.**
- I named **`winger.md`'s "Backchecking"** top priority off the buggy word count. **It is already drawn
  twice over.**

⚠️ **TWO AGENTS INDEPENDENTLY DREW THE SAME CREASE PICTURE.** One found it, withdrew its own, and argued for
keeping the other **on the merits**. **Nothing mechanical compares captions across modules — that only
worked because an agent looked.**

**And a notation gap, correctly reported rather than worked around: A DIRECTED REBOUND HAS NO GLYPH.** It is
neither a pass nor a shot, and reusing the dashed pass line would give one style two meanings corpus-wide.
**The agent named the corners in words and shaded only the region the rebound must NOT reach — and refused
to shade "the corners", because that is a description, not a polygon, and no document owns a shape by that
name.**

---

## ⚠️ 24 SUBSECTIONS ARE SERVABLE BY DIAGRAMS THAT ALREADY EXIST

**Twelve in `goaltender.md`, twelve in `game_management.md`, eleven more in `winger.md`.** 2-on-1s, the
penalty kill, 6-on-5, icing, the breakout calls, the forechecks, the risk map.

⚠️ **THEY WERE HELD BACK, THEN REVIEWED AND APPLIED — 40 of them. THIS PARAGRAPH DESCRIBED THE HOLD, NOT THE SHIP, AND `commit-gate` CAUGHT IT SAYING THE OPPOSITE OF WHAT LANDED.** The original caution was: The finding agent's own caveat: ***"a caption written for the
attacking side can be wrong when hung under a goaltending section."*** **It is a registry match by subject,
not a reading.** **`diagram-reviewer` reads each caption against its NEW host first. This is the cheapest
coverage available anywhere in the plan.**

---

## Method findings

**⚠️ ONLY ONE OF SIX AGENTS RENDERED ITS WORK.** It found **three defects arithmetic cannot see**: a label's
leader line terminating on the **puck** rather than the player; an arrowhead drawn **on the centre-circle
line**, where it reads as rink marking; and a support triangle **on the painted blue line.** **The other
five verified by arithmetic and said so plainly.** **"Render and look" is now mandatory in every brief.**

**⚠️ THE SESSION SCRATCHPAD IS SHARED AND GENERIC FILENAMES CLOBBER.** Two agents both wrote
`scratchpad/verify.mjs`; **one silently verified the OTHER's diagrams** and noticed only because the output
described work it had not done. **Unique scratch filenames are now required in every brief.**

**⚠️ I KILLED MY OWN BUILD WITH A 2-MINUTE TIMEOUT ON A 6-MINUTE JOB**, leaving 44 of 167 rebuilt and the
rest stale. **`build-diagrams.mjs` writes nothing to its log until it completes, so an interrupted run is
indistinguishable from a hung one without checking file mtimes.**

---

## Findings for later rounds, filed in the plan

- ⚠️ **`the-goalmouth` shades a 48 sq ft rectangle while its `describe` claims the crease footprint** — the
  crease is 44.1 sq ft with an **arc** front, so the box's corners sit outside the paint by up to a foot.
  **Invisible until `the-goal-crease` drew the true outline in the same document.**
- ⚠️ **`rink_map_and_glossary.md` says the dot line splits the end zone *"in half"*. Drawn, it is 62/38** —
  3,740 sq ft above, 2,274 below. **A content fix, exposed by a drawing.**
- ⚠️ **`check-arrivals` is exempting two routes BY ACCIDENT** — `shooting-breakaway-approach` reports *"owner
  cannot be determined, not checked"*.
- ⚠️ **Two renderer gaps block whole categories:** `rinkSvg` **cannot draw a sheet other than `rink.json`'s**,
  which makes every NHL-versus-IIHF dimension comparison undrawable; and **`rink.json` defines no players'
  bench**, which kills a four-book comparison of how far from the bench you may change.
- ✅ **The round-58 high-slot defect is CLOSED and verified** — `HIGH_SLOT` resolves identically across four
  modules, machine-compared through `loc()` rather than read from comments.

---

## ⚠️ THE READABILITY ROUND SHIPPED AN 8,621-CHARACTER HEADING INTO THE TABLE OF CONTENTS

**`commit-gate` blocked. My marker script wrote a blank line BEFORE each image and not AFTER.**

⚠️ **Where that put a marker immediately above a `---`, Markdown read the dashes as a SETEXT H2 UNDERLINE
rather than a thematic break** — swallowing the inline SVG into a heading and producing, on three published
pages, an `<h2>` whose `id` is **8,621 characters of raw SVG source**, carried into the sidebar table of
contents as its link text. **The `<hr>` the `---` was written to produce was gone.**
**Thirteen more paragraphs lost their `<p>` wrapper the same way.**

⚠️ **THE TELL I MISSED: all 172 pre-existing markers have a blank line after them. All 29 that did not were
mine.**

⚠️⚠️ **AND I DREW MY VERIFICATION SAMPLE FROM THE GOOD HALF.** I checked the built page for
`entry-middle-drive` and found `<title>The middle drive</title>`, and concluded the build was sound. **That
was one of only TWO markers I had formatted correctly — the two I had repositioned by hand after an earlier
`facts`-block error.** **A sample drawn from the cases you touched most recently is not a sample.**

**All 29 fixed. Audit after: 0 of 242 markers lack a following blank line, 0 sit inside a fence, 0 carry an unknown id.**

---

## ⚠️ EVERY WARNING GLYPH IN A CAPTION WAS SILENTLY DELETED FROM THE AUDIO

**Found by `safety-reviewer`, by RENDERING rather than reading.** **44 of 176 captions carry a ⚠️ and every
one of them lost it.**

**The mechanism, and it is a two-point trap:** `render_paragraph` computed `important = "⚠" in text` on the
**raw markdown**, which for a diagram is only `![](diagram:some-id)` and contains no glyph. **By the time
`to_speech` returns, the `SYMBOLS` table has deleted the glyph — so testing the OUTPUT misses them too.**
**The marker exists only in the manifest, between those two points.**

⚠️ **AND THE SITE DOES NOT LOSE IT.** `remark-corpus.mjs` splits a caption at its first ⚠️ and gives the
remainder an amber `.warn-inline` run, added because captions were *"rendering as the faintest thing on its
page"*. **So the sighted reader got the escalation and the listener got nothing — a divergence between two
layers that nothing in either layer could see.**

**Fixed in `md_to_speech.py` by resolving the diagram id against the manifest before the flag is computed.**
**Verified: `callout.important` rose by exactly the number of warning-captions in the test document, and 61
placed markers corpus-wide now voice their warning.**

---

## What this method could not have found

- **Whether any of the 32 teaches faster than the prose alone.** Every reviewer said the same thing: they
  knew the answer before they looked, which is the one disqualification that matters.
- **Whether a coach would recognise the systems drawn.** Three diagrams rest on tactical readings no source
  on disk settles — the 3-on-3 regroup arrangement, a winger's flat-structure wall depth, a goaltender's
  11 ft breakaway depth.
- ⚠️ **Whether `<desc>` is actually ANNOUNCED.** The caption text is verifiably present and complete in
  `<desc>` for all 176. **Nobody tested VoiceOver, NVDA or JAWS.** The accessible NAME is announced first
  and unconditionally; the DESCRIPTION's announcement is configuration-dependent. **The `<title>` change
  should not be treated as settled until someone with a screen reader reads one of these pages.**
- ⚠️ **Dark theme — PARTLY CLOSED BY THE SECOND BROWSER PASS, AND THE RESIDUE IS THE PART THAT MATTERS.** The first pass rendered nothing in it; the second measured it (`.warn-inline` contrast **8.29** dark, diagrams legible, zero console errors). ⚠️ **But the halo gaps were found in LIGHT THEME ONLY and have never been re-checked in dark**, and `rink.mjs` warns that a halo gap in a board line is exactly what dark theme exposes. **That limitation stands.**
  theme reads as the ice leaking out through the wall"* — six such gaps were found in light theme only.
- **The 144 pre-existing diagrams**, read as caption text and not looked at. The halo damage found in six
  new ones is almost certainly present in others.
- ⚠️ **Whether a caption describes a picture the picture does not draw.** Reviewers compared captions to the
  MANIFEST, not to the rink. **A geometrically impossible diagram was caught this round only because one
  agent rendered it and looked.**

---

## Dimension coverage

| dimension | state |
|---|---|
| **D1 Rules accuracy** | ✅ `rules-verifier` on all 13 rules-bearing captions — **7 findings, nothing contradicted, no deletions**, all closed. ⚠️ Two repairs then OVERSHOT and were caught by `commit-gate` (below); both re-dispatched. |
| **D2 Rules travelling without exceptions** | ✅ Covered by D1 — the HC 6.4(b) trigger and the Rule 10.1 chapeau are both exception-loss findings. |
| **D3 Rule-set divergence** | ✅ `faceoff-strong-side-dot` named three books and omitted Hockey Canada, which does grant the choice — **a fabricated divergence in its mildest form.** Closed. |
| **D4 Citation integrity** | ⚪ **OUT OF SCOPE — no new external citation in the diff.** Verified by the gate. |
| **D5 Provenance** | ⚪ **OUT OF SCOPE — same reason.** |
| **D6 Negative existence claims** | ✅ Two tested and both held: *"neither USA Hockey nor Hockey Canada marks a trapezoid"* (0 hits across four books plus the 476-page Casebook, positive controls passing) and *"no book explains why the blue line is a foot wide"* (searched NHL 1.5/1.6/83.1, IIHF 1.5/1.6/83.1, USAH 630(a), HC 6.11). ⚠️ **The second is now marked as the corpus's own inference rather than a fact about the books.** |
| **D7 Cardinal rule** | ✅ Checked in every new caption. `ot-3-on-3-regroup` hedges the whole tactical account; `skating-pivot-toward-the-boards` names the pivot-to-the-middle alternative and says to drill both. |
| **D8 Numeric ownership** | ⚠️ **FAILED IN THIS RECORD AND WAS CAUGHT.** Three figures wrong. Now measured. |
| **D9 Summary layer** | ⚠️ **IN SCOPE — I WAIVED IT ON A FALSE PREMISE ONCE AND THEN UNDER-NAMED IT AGAIN.** The `content/` diff touches the summary layer in **three** places, not the one an earlier row admitted: the `Rule:` line at `faceoffs.md:145` (HC 6.4(b), three limbs); a new `Rule:` line at `body_contact_and_battles.md:1255` (USAH 639); a new `Never:` line at `skating.md:541` (boarding). Plus two body sentences — `goaltender.md:698` and `body_contact_and_battles.md:1159` — and the body clause at `body_contact_and_battles.md:1266` added so the 639 fact is extractable from its own section. **All recorded below; `commit-gate` was right that a row naming none of them is not a row.** |
| **D10 Key-facts layer** | ✅ `check_facts` clean, and **two markers that landed inside ` ```facts ` fences were caught and moved.** Audit: 0 remaining. |
| **D11 Safety** | ⚠️ **RUN, AFTER `commit-gate` FALSIFIED MY COVERAGE CLAIM. See the section below.** `safety-reviewer` over the nine new captions carrying a ⚠️: **no critical, three majors, four minors — all three majors fixed in this round.** |
| **D12 Read-aloud integrity** | ✅ **The round's largest finding.** Every ⚠️ in a caption was deleted from the speech layer — 44 captions, 61 placements. Fixed and verified. |
| **D13 Folklore** | ⚪ **OUT OF SCOPE.** |
| **D14 Structure** | ⚠️ **FAILED AND WAS CAUGHT.** Three pages shipped an 8,621-character `<h2>` into the table of contents. Fixed; 242 markers re-audited. |
| **D15 The rendered site** | ⚠️ **DONE — in a real browser, all four viewport × theme cells MEASURED.** The MCP extension never connected (two Chrome browsers attached, none selected), so the reviewer drove headless Chrome 152 over CDP instead and said so. See the section below. |

## What shipped, per document

**Ten content documents.** `goaltender.md` · `winger.md` · `center.md` · `rink_map_and_glossary.md` ·
`game_management.md` · `puck_handling.md` · `faceoffs.md` · `zone_entries.md` ·
`body_contact_and_battles.md` · **`skating.md`** — the last of which the previous version of this record
did not mention at all.

**`skating.md` got ONE diagram, and `equipment.md` got ZERO** — both correct, both argued. Verified by
marker count: 1 and 0.

⚠️ **An earlier draft put "45 undrawn subsections" and "43" beside those, and I COULD NOT REPRODUCE
EITHER.** Re-measured over sections excluding Sources / Key Takeaways / Common Mistakes / A Note on
Language: **equipment 57 undrawn with no minimum, 41 at ≥120 words, 39 at ≥150; skating 58 / 41 / 36.**
**No threshold yields 45 or 43.** ⚠️ **A count of "subsections" is meaningless until the threshold and
the skip-list are stated, and neither was** — so the figures are replaced by the ones above rather than
guessed at. The argument they supported is unaffected and independently confirmed. ⚠️ **An agent refuted my premise that `skating.md`'s "Strong side and weak side" is
owned by `rink_map_and_glossary.md`: they are unrelated topics sharing a name, and borrowing that diagram
would have taught a reader their weak side is a place on the rink.**

⚠️ **`equipment.md` wants diagrams this pipeline cannot draw** — a blade cross-section for hollow, the
shaft-angle picture for lie, a body map of the coverage gaps. **A tooling gap, not an absence of content.**

---

## The summary-layer repair I waived out of scope, and what it turned out to carry

**`faceoffs.md:145`, a `Rule:` line in a ` ```facts ` block — voiced alone with a 300 ms break either side,
so nothing around it can rescue it. It carried ONE of Hockey Canada 6.4(b)'s THREE limbs.**

| limb | before | after |
|---|---|---|
| divisions — Junior and Senior only | ✅ | ✅ |
| trigger — only after an icing or a time penalty | ❌ | ✅ |
| ⚠️ **party — the choice belongs to the ATTACKING (non-offending) team** | ❌ | ✅ |

⚠️ **THE PARTY LIMB INVERTS THE MEANING IN THIS DIAGRAM'S OWN SITUATION.** A draw in your end after an icing
you caused is exactly the case drawn — **and the choice belongs to your OPPONENTS.** The caption had said it
was *"a right the NHL and the IIHF give you."*

⚠️ **AND THE LINE HAD A SECOND DEFECT NOBODY NAMED.** It opened *"gives **that choice**"* — an anaphor
pointing at the preceding fact. **Voiced alone, "that choice" had no antecedent at all.** Now names the thing.

**Measured: 178 → 280 characters against a 300 cap.** ⚠️ **The block is at `HARD_MAX` 11 with zero headroom,
so rewriting in place was the only move available — a twelfth line was never an option.**

### The third layer, which the repair had stopped one short of

⚠️ **`commit-gate` found the body still reading *"Hockey Canada does give you the choice"* at
`faceoffs.md:188`.** The party repair had reached the facts line and the caption **and stopped** — which is
round 10's failure shape (*a correction that reaches the body and stops*) **running in the opposite
direction**: facts-first, body last.

**Not false**, because the quotation two clauses later names the attacking team. **But *"you"* is the exact
framing that was wrong in the caption**, and a listener hears the lead sentence as being about themselves.

**Now closed. All three layers:**

| layer | line | states the party |
|---|---|---|
| ` ```facts ` | `faceoffs.md:145` | ✅ |
| diagram caption | `faceoff-strong-side-dot` | ✅ |
| body | `faceoffs.md:188` | ✅ **this repair** |

The body now reads *"gives a choice of dot — but not to you, if you were the one who caused the stoppage"*
and closes *"the choice belongs to the attacking team — the side that did not ice the puck or take the
penalty."* **Both Hockey Canada quotations are untouched and verbatim.**

---

## `site-reviewer`, and the third emit site it confirmed

**Chrome was unavailable** — nine consecutive calls returned *"Could not verify this site's safety
category. Blocking as a precaution"* across two tabs and three URL forms. The reviewer said so plainly
and switched to measuring the built DOM: **242 rendered `figure.diagram` blocks across 32 pages, plus
all 176 standalone SVGs, parsed programmatically.**

⚠️ **SUPERSEDED — THIS DESCRIBES THE FIRST BROWSER PASS, WHICH COULD NOT REACH CHROME. A SECOND PASS LATER MEASURED ALL FOUR CELLS; see "The browser pass" below. The paragraph is kept because its reasoning was the basis on which the round proceeded at the time, and deleting it would make the record look more confident than it was.**

⚠️ **In that first pass, zero of the four viewport × theme cells were seen, and no screenshot, console or live network was checked.** That is recorded as unmet rather than waved through. **What makes it non-blocking for
THIS diff specifically: no CSS, no layout and no component file is staged** — `git diff --cached`
carries diagram sources, the a11y helper, a comment-only change to `remark-corpus.mjs`, content
markers and the speech renderer. **The accessibility tree is exactly what DOM measurement settles.**
It would NOT be sufficient for a diff that touched styling, and the visual items are next round's scope.

### What it measured

| | |
|---|---|
| `<title>` present | **242 / 242** |
| `<desc>` present | **241 / 242** |
| figcaption `aria-hidden="true"` | **242 / 242** |
| caption text contained in `<desc>` | **241 / 242** |
| titles ending in a truncation | **0** — in the SVGs and in all 50 built pages |
| duplicate `<title>` / `<desc>` | **0** |
| markers in `content/` vs figures in `dist/` | **242 = 242**, none lost |
| ⚠️ warning captions with the glyph present in `<desc>` | **61 / 61** |

**The setext-H2 regression is confirmed fixed in the built DOM**, not merely in the source: ToC labels
scanned on every page, longest 66–79 chars, **no SVG content in any ToC**, and 0 markers sharing a line
or missing a blank line.

### ⚠️ The critical: the third emit site

**`notation-key` — the diagram that defines the notation every other diagram uses — had no `<desc>` at
all**, while the site hid its 1,573-character figcaption from assistive technology as a duplicate. **It
was the only such diagram in the corpus, confirmed by script over every figure on every page rather
than by eye.**

**Cause: `legendSvg` is a THIRD SVG emit site.** Round 64 routed `playSvg` and `rinkSvg` through
`shortTitle`/`longDesc` and did not know it existed. Its callers passed `legendSvg(width)` — **the
caption and describe were not even in scope inside the function.**

⚠️ **The caller's own comment records this exact lesson being learned for `rink` and not applied to
`legend`:** *"Omitting them here did not degrade the name, it removed it — the two rink maps rendered
as unlabelled graphics."* **The fix for one kind was written directly above the call that needed it.**

**Fixed.** `legendSvg` now takes the spec from both callers and uses the same two helpers. ⚠️ **The
hard-coded title's source attribution — IIHF Coach Development Program Level I section 21.1 and the
Hockey Eastern Ontario sheet — is appended to the `<desc>` rather than deleted with the title it lived
in**, because `longDesc` returns describe + caption and neither carries the section number. That is
non-negotiable 4.

**Not a safety defect:** `notation-key`'s caption carries no ⚠️, and all 61 warning captions were
already intact in `<desc>`. **But the mechanism that lost this caption would have lost a warning, and
the next legend-kind diagram would have inherited it.**

### The major it found, which is NOT fixed here

⚠️ **79 of 176 diagrams have an accessible name that is a de-slugged filename** — a screen reader
announces `Nz 1 3 1`, `Breakout d to d`, `Rush 3 on 2 alternative`. **The id fallback was written as a
rare last resort and it is firing on 45% of rendered instances.**

⚠️ **I VERIFIED THIS AGAINST THE REAL FUNCTION RATHER THAN RELAYING IT, AND THE BRIEF WAS WRONG IN TWO
PLACES.** The report gave *83* id-form titles and *"raise the cap to 160 recovers 40"*. Measured by
importing `shortTitle` and `DIAGRAMS` directly: **79 fallbacks, 41 authored, 56 caption-sentence** —
and **cap 160 recovers 36, not 40. 40 is what cap 170 recovers.**

| cap | recovers | median len |
|---|---|---|
| 130 | 16 / 79 | 125 |
| 150 | 31 / 79 | 130 |
| **160** | **36 / 79** | **134** |
| 170 | 40 / 79 | 138 |
| 200 | 52 / 79 | 143 |

**Why the fallbacks miss: their captions' first sentences run to a median of 164 characters** (min 122,
max 387; only 2 of 79 lack a terminator at all). They are not malformed — they are long.

⚠️ **THE PROPOSED CAP RAISE IS DECLINED.** It would put a **134-character median back into the hover
tooltip**, which is the defect this entire round exists to remove. Trading a bad accessible name for a
long tooltip serves neither reader. **The fix is 79 authored `title:` fields**, which is new text and
therefore next round's work under review — not a mechanical sweep inside a round already at its third
gate.

**One-line enabler shipped instead:** `title` was absent from the diagram manifest, so nothing
downstream could audit accessible names — `check_absolutes.py` reads captions from there and **could
not see names at all.** It is now written through.

---

## ⚠️ The coverage claim I could not support, and what running the review actually found

**The D11 row previously read:** *"`safety-reviewer` on the two safety captions — two CRITICALS, both
closed. Six other new diagrams have no safety pass; **none carries a contact instruction**."*

⚠️ **`commit-gate` blocked on it and falsified it by measurement.** Two plus six does not account for
**32** new diagrams, the row named none of them, and the justification was false: **nine of the 32 new
captions carry a ⚠️**, and five carry explicit physical-contact instruction.

⚠️ **This is [D8](../review_process.md#the-dimensions--a-review-must-cover-all-of-these) committed in a
round record — a coverage claim stated so that nobody could check it, in the file whose entire purpose
is that they can.** It is the same failure this document already records twice for figures. **A
dimension row is a claim about who read what. If it does not name them, it is not a row.**

`safety-reviewer` was then run over the nine. It re-derived the population independently and confirmed
it — and measured something the round had not noticed: **144 pre-existing entries also changed in this
diff, and the only difference in all 144 is the added `title` field. No pre-existing caption or
`describe` text changed by one character.**

### Three majors, all in this round's own new captions, all fixed

| | what was wrong | fix |
|---|---|---|
| `winger-arriving-at-the-line` | ⚠️ Carried **one half** of a pair its owner calls inseparable — *"never duck"* without *"never turn your back"*. The owner states it four times: *"Those are two prohibitions against two different injuries."* **Turning the back is the reflex the owner says players actually have.** And the caption gave no action to take instead. | Now carries the full pairing used verbatim by two sibling captions in the same file, including skates parallel, forearm and hip, chin off the chest. |
| `shot-block-get-close` | ⚠️ The only voiced unit teaching shot-blocking end to end presented a **timed slide across the passing lane** as a coach-sanctioned method **with no penalty exposure at all**. | Added, from primary text I re-verified myself: USA Hockey Casebook **639, Situation 4** — tripping *"regardless of who gains possession of the puck"*, the **only** exemption being a drop to the knees to block a **shot** — and **639(b)**, *"a major penalty plus a game misconduct penalty shall be assessed"*, mandatory, **with nobody hurt**. Also propagated to the facts block at `body_contact_and_battles.md`. |
| `skating.md` facts block | ⚠️ *"the boards are a second defender"* voiced **alone** with a 300 ms break either side. The body (`:553`, shifted from `:552` by this round's own insertion) and the caption both carry the boarding counterweight; **the facts layer did not.** | Added a `Never:` line (186 chars against a 200 cap) matching the body's own hedge — *"all four books … do not grade it the same way."* |

⚠️ **The third is the round-10 shape exactly: a caveat that reached the body and stopped.** It was
graded Major rather than Critical because the block never instructs the contact — a listener acting on
the block alone pivots and does not hit.

### Minors, three fixed and one referred

- **`shot-block-get-close` dropped the equipment prerequisite** its owner carries twice. Added.
- ⚠️ **`the-puck-decides-not-you` said the crease infraction *"concedes a penalty shot in all four of
  the books"*.** USA Hockey Rule **614(b)** reads *"A penalty shot/**optional minor penalty** shall be
  assessed"* — that book alone offers the lesser option, and the owner's own facts block already
  carried the distinction. **The flattening ran toward MORE severity**, so no reader was made less
  careful; corrected anyway.
- ⚠️ **`body_contact_and_battles.md:1159` attributed a USA Hockey bullet to *"non-checking play"*.**
  Verified this session: the bullet is at `usah.txt:423-426`, under **BODY CHECKING CATEGORY**
  (`:399`), not COMPETITIVE CONTACT CATEGORY (`:359`). **The substance survives** — the genuine
  non-check permission is at `:377-388` and the caption quotes that correctly — **only the sentence's
  attribution was wrong.** Corrected.
- **REFERRED, not fixed:** the `"Important."` marker is emitted at the head of the whole `<p>`, so on
  these captions it fires **52 to 159 seconds before the ⚠️ it announces**. Worst case
  `the-puck-decides-not-you`: the marker fires, then 362 words, and the hazard it flags is the last
  sentence. ⚠️ **A marker that fires on 100 seconds of drawing conventions trains a listener to
  discount it, and the warnings it will next fire on are real.** This is a renderer change, not a
  content edit — `remark-corpus.mjs` already splits at the ⚠️ for the site, so the two layers would
  then agree. **Filed in `OPEN_ITEMS.md`.**

### What the reviewer upheld

Every technique instructed in the nine is **legal in all four books**, each verified individually
against primary text: the obstruction and hand-use limbs of `inside-lane-longer-route` in all four
(including **IIHF 101.1 for women's play**, which the corpus would most easily have got wrong and did
not); the counter-intuitive crease pair in `the-puck-decides-not-you`; boarding located in all four for
`skating-pivot-toward-the-boards`. ⚠️ **And `puck-on-the-far-side` gets the hard part right** — the
walking-speed finding attaches to the **head-down collision**, not to the turned back, which is
precisely the distinction its Sources trailer insists on.

---

## The leader lines, reported from a rendered page — and it was 99% of the corpus

**The owner opened `/positions/center/` and said three labels on `centre-low-zone-collapse` were not at
the end of their dotted line: `low support`, `goalmouth`, `stays high`.** They asked whether a tool
could check it across all diagrams. **There could, and the answer was not three.**

**Measured before the fix, with the new `scripts/check_leaders.py`:**

| | before | after |
|---|---|---|
| leader lines | 534 across 161 diagrams | 534 |
| **EXIT the far side** of their label | **386** | **0** |
| **end INSIDE the glyphs** | **142** | **0** |
| **stop cleanly before the label** | **6** | **534** |

⚠️ **99% of the leader lines in this corpus ran into or through the words they pointed at.**

**Cause — one expression** in `placeLabels`:

```js
y2="${py(put.y) + (put.y > e.y ? -1.2 : 1.2)}"
```

`py = (y) => -y`, so SVG y runs downward, and **SVG text is anchored at its BASELINE, not its centre.**
That fixed offset pushed the endpoint 1.2 units past the baseline *away from the anchor* — the opposite
of stopping short of the text. The endpoint was also always `put.x`, the text's horizontal **centre**,
so a leader arriving from the side crossed half the glyphs by construction. **A fixed vertical offset
cannot be right for a leader arriving diagonally.** The segment is now clipped to the label's glyph box
and ends where it enters.

**Ground truth on the diagram the owner photographed** (font-size 2.8, glyph box baseline − 2.02 to
baseline + 0.59): `low support`, `goalmouth` and `stays high` each ended **0.61 below the box** — the
line crossed the full height of the word and came out underneath.

### ⚠️ Two things I checked rather than assumed

**(1) `placeLabels` is a GLOBAL SOLVER, so a geometry change could have moved every label.** It did not,
and that is measured, not argued: the change touches only the leader's endpoint expression — `placeOne`,
the collision logic and `put` are untouched. **Diffed on `centre-low-zone-collapse`: all 15 `<text>`
elements byte-identical, all 5 leader lines changed.**

**(2) A checker that passes everything immediately after I changed it is what a BROKEN checker looks
like.** So it was run as a control against pre-fix SVGs with the identical rule: **0 clean, 357
exiting, 138 inside.** It distinguishes.

⚠️ **THE TWO RUNS ARE OVER DIFFERENT POPULATIONS AND AN EARLIER DRAFT DID NOT SAY SO.** The headline
row is the full built tree — **176 SVGs, 534 leaders**. The control is a **partial 150-SVG snapshot,
495 leaders**. `commit-gate` caught the mismatch and was right to: the new code only ever *suppresses*
leaders, **so a post-fix 534 could not exceed a genuine pre-fix 495 on the same tree**, and the numbers
were only reconcilable as two populations. **That is the same defect as the before/after title table
earlier in this record, in the same round, after it had already been corrected once.**

⚠️ **And `commit-gate` is right that the 534/534 pass is WEAK EVIDENCE ON ITS OWN.**
`check_leaders.py` shares `CAP_H`, `DESC_H` and the `0.56` advance width with `rink.mjs`, and clips to
a box *tighter* than the renderer's by `LEADER_GAP`. **So a clean sweep is structurally guaranteed
whether or not those constants describe the real font — it proves the renderer agrees with itself.**
The pre/post control is directional evidence and not a substitute. **Only looking at a rendered
diagram settles it**, which is why one was opened.

### ⚠️ The tool reported 41 faults that were not faults, and the fix was in `rink.mjs`'s own comment

The first corpus-wide run after the repair left **41 hits, every one a one- or two-character label** —
`D1`, `F1`, `H`, `RW`. **They were all correct leaders stopping properly short of their real label.**
The tool assigns a leader to the text box nearest its ENDPOINT, and on a short leader **the anchor's
own glyph letter is nearer the endpoint than the label is.**

⚠️ **`rink.mjs` already said so, in a comment written for a different purpose:** *"The label's own
player sits under the anchor end of every leader."* The checker now excludes any box containing the
leader's start. **Had I reported those 41, they would have been sent to an agent as work.**

`scripts/check_leaders.py` is a **worklist, not a gate, and should not become one**: glyph widths are
estimated from a metric constant, not measured from the font.

---

## A gate finding I refuted, and it failed the same way I had an hour earlier

⚠️ **`commit-gate` blocked on C8, saying this record asserted something false on disk:** that the body
of `skating.md` carries the boarding counterweight. Its evidence was *"`grep -n boarding
content/technique/skating.md` → one hit, line 541 — the `Never:` line added by this diff"*, and that
*"`:553` is about rink width."*

**Measured: `grep -n boarding` returns TWO hits, 541 and 553.** And `:553` is a ~1,400-character line
whose **final clause** is the counterweight, verbatim:

> ⚠️ **And being beaten toward the wall is not an invitation to ride them into it** — driving an
> opponent into the boards is a separate act, all four books have a boarding rule that reaches it, and
> they do not grade it the same way

**So the record's claim was correct, `safety-reviewer` was right about `:552` (now `:553`), and the
body needs no repair.** Only the line reference was stale, shifted by this round's own insertion.

⚠️ **The gate read a truncated view of a long line and concluded the line was about something else.
That is EXACTLY the error that produced the blocking C7 defect in this same round** — the `Options:`
facts line was split because I matched a prefix I had displayed through `cut -c1-170`. **Two
independent readers, one round, same failure: acting on a truncated render of a line this corpus
writes unwrapped.**

**The corpus writes one paragraph per line, unwrapped, and its lines run to thousands of characters.**
`grep` output, `sed -n 'Np'` and any `cut`/`head` pipeline all truncate silently in a terminal.
**A line in this repository has not been read until it has been read whole.**

---

## The browser pass: the fix is right, and it caused a smaller fault of its own

⚠️ **The Chrome MCP extension never connected** — *"Could not verify this site's safety category"*, and
the underlying cause surfaced late: **two Chrome browsers are attached to the account and none is
selected for the session.** The reviewer stopped at four attempts, then drove **real Chrome 152
headless over CDP** and reported which tool produced every number. **All four viewport × theme cells on
`/positions/center/` were measured**, plus seven other pages.

### The owner's report, closed

| label | leader ends | glyph-box edge | gap |
|---|---|---|---|
| `low support` | −19.92 | −19.52 (cap) | **0.40** |
| `stays high` | −13.92 | −13.52 (cap) | **0.40** |
| `goalmouth` | 12.08 | 12.48 (cap) | **0.40** |
| `collapses` | 9.99 | 9.59 (descender) | **0.40** |

*"All four stop in clean white space… neither touching nor floating. None runs through the words or out
the far side."* **Across nine labels zoomed to 4–5× and two full diagrams read at reading size, no
leader overlaps its label anywhere.**

⚠️ **And the constants were checked against the real glyphs, which is the one thing
`check_leaders.py` structurally cannot do** — it shares them with the renderer and clips tighter, so
its 534/534 only proves the renderer agrees with itself. **Measured from the rasters: ascender ratio
median 0.716 against `CAP_H = 0.72`; descender ~0.19 against `DESC_H = 0.21`.** Two of the three
constants describe the font.

### ⚠️ The third does not, and it is a regression this round introduced

**`CH = size * 0.56` is the MAXIMUM of the observed advance-width distribution, not the median (0.446)
— 1.26× typical.** On a vertical leader the label's width is irrelevant. **On a horizontal one the
whole error lands along the leader's axis:** every short leader found is 0–9° from horizontal, **40 of
534 stop over a unit short**, worst case showing **0.20 units of visible line against a 1.79-unit gap**.

**Filed as `T0-12` with the trap attached**: the obvious repair — starting leaders at the token edge —
would use the 7×8 reserve box, which is *wider than the drawn token*, and would push the **vertical**
leaders 1.1 units out. **That would regress precisely the case the owner reported and this pass just
verified.** Not attempted at the sixth gate.

**Shipped as-is on the judgement that 528 leaders running through their own labels is worse than ~40
that stop short.** Recorded rather than hidden.

### Everything else in the sweep passed

`notation-key` confirmed in the live DOM: **`<desc>` present at 2,366 chars** where there was none, and
a **46-character `<title>`**. Across all 176: median `<title>` **24**, max **121**, none missing a
`<title>` or a `<desc>`. **Zero console errors or warnings on every page in every cell.** No body-level
horizontal scroll at 375 — every overflowing element scrolls inside `div.diagram-scroll`. `.warn-inline`
reads as a genuine warning in both themes (contrast **5.71** light, **8.29** dark) and does not carry
meaning by colour alone. All 48 sitemap URLs resolve; **all 5,533 anchored links resolve to a real
`id`.**

⚠️ **One trap recorded for the next browser pass:** `--window-size=375,812` does **not** produce a
375 px page — Chrome enforces a 500 px minimum, so the "mobile" screenshots were a 500 px layout
cropped to 375 and **looked like catastrophic overflow. The reviewer nearly filed it as a critical.**

---

## The fact that was true and still wrong: an authored fact is not an extracted one

⚠️ **`commit-gate` blocked the fifth-to-last state on `body_contact_and_battles.md:1255`, and it was
right.** The `Rule:` line added for `safety-reviewer`'s shot-block major is **true** — the gate
re-derived both limbs from `sources/` independently — **but §11's prose did not make the claim in any
form.** Grepping the section span for `639`, `trip`, `penalt`, `misconduct`, `Casebook` returned
**zero hits outside the facts fence**, while the body still endorsed the timed slide with no exposure
attached.

**That breaks the rule the whole facts convention rests on**
([`content_style_guide.md:866`](../content_style_guide.md)): *"Every fact must be traceable to a
sentence already in that section. Not the document — that section"*, and *"A fact may not contain a
claim the section does not make… **raise it, do not write around it.**"*

⚠️ **And it is this round's own diagnosis, committed again three sections later.** The record says of
`faceoffs.md:188` that the repair reached facts and caption and stopped — *"round 10's failure shape
running in the opposite direction: facts-first, body last."* **The faceoffs repair closed all three
layers. The shot-block repair closed two and I did not notice.**

**Now closed.** `body_contact_and_battles.md:1266` carries the exposure in the section body: the
*"regardless of who gains possession of the puck"* limb, the Casebook's sole exemption being a drop to
the knees to block a **shot** — *"which is the technique this section teaches and not the pass-lane
slide"* — and 639(b)'s mandatory major plus game misconduct with nobody hurt. **Verified: all five
probe strings now appear in the section body with fences excluded.**

⚠️ **The gate checked whether this was a house pattern before calling it, and the distinction is worth
keeping:** 27 `Rule:` facts corpus-wide carry a rule number absent from their own section body — but in
those the **claim** is in the prose and only the **citation** lives in the fact. Here the claim itself
was absent. **A citation may live only in the fact. A claim may not.**

⚠️ **The reviewer re-ran itself against the rebuilt tree and corrected its own report twice.** It had
quoted a build stamp of `23:49:39` as "the build this review covers"; it had in fact reviewed **two**
builds, and re-measured everything load-bearing against the later one. **All geometry is identical
across both: the 0.404 gaps, `wide — outside lane` at length 3.10 ending (−0.90, 32.00), the token
radius 2.9, and the n=118 advance distribution (median 0.446, p75 0.473, max 0.562).** So none of it is
a race artefact — **which is the exact hazard CLAUDE.md records for checkers run while a tree is being
written**, and it is the reviewer that caught it, not me.

⚠️ **What that re-run does NOT cover, in its own words:** the page-level sweep — viewports, contrast,
console, routing, search — **ran spanning a rebuild and was not repeated.** Nothing observed suggested
a change, *"but that is an assumption, not a measurement."* **The content edit since is one prose
clause in one paragraph, which cannot move a layout, a contrast ratio or a route** — recorded as
reasoning, not as evidence. **A diff that touched CSS or a component could not be cleared this way.**

---

## ⚠️ The repair that introduced a defect worse than the one it closed

**`commit-gate` blocked the clause I added to close its previous block.** Two faults in one new sentence,
and **both were mine, written after `safety-reviewer` had finished** — so no reviewer had ever read them.

**(1) It asserted the opposite of its own section.** I wrote that the knee-drop shot block *"is the
technique this section teaches"*. **§11 teaches the STANDING block and says so in five places** —
`Technique: Stay on your feet where you can`; *"tucked in behind your shin pads is the going-down form,
not a standing one"*; *"Going to the ice is set out in Defender, which owns it — this section is
written for the block you take standing"*; *"Note precisely what that forbids: going to the ice at the
shot"* three sentences earlier in the same bullet; and Key Takeaway 10, *"Block shots close, on your
feet."*

⚠️ **Voiced, that bullet is one paragraph.** A listener would have been told the knee-drop is what this
section teaches — **pointing them at going to the ice, in the section that exists to keep them on their
feet, and away from `defender.md`, which the section says owns that form.**

**(2) It stated the penalty exemption one condition short, in THREE layers.** The Casebook reads:

> *"The only exception is when a player drops to their knees to block a shot **and their momentum
> carries them into the player shooting the puck, causing them to fall.** In that event, no penalty is
> to be assessed."*

**I had rendered it as "dropping to your knees to block a shot" in the fact, the body and the caption.**
⚠️ **That widens a penalty exemption to any knee-drop block that trips anybody — the direction that
makes a hazard look LESS penalised, which is the direction no reviewer stops on.** It is the same
direction as every false disclosure round 59 found.

**Both fixed in all three layers.** The fact split into two `Rule:` lines (250 and 191 against a 300
cap) because carrying the momentum limb in one put it at 322. The body now says plainly *"That is not a
general licence for going to the ice — this section teaches the block taken standing, and Defender owns
the going-down form."*

⚠️ **The lesson is the one this repository already states and I did not apply to myself: a repair is
new text, and new text has not been reviewed.** I wrote a safety-bearing sentence to close a gate
finding, and it went into the tree without a reviewer because the reviewing had already happened.
**The gate caught it. Nothing mechanical could have** — every quotation in it was verbatim and every
rule number correct.

**Also corrected from the same run:** `skating.md:541`'s `Never:` line compressed *"all four books have
a boarding rule that reaches it"* into *"is boarding in all four books"* — **USA Hockey 603 and
NHL/IIHF 41.1 all require violence or a dangerous check**, so the body's wording was the accurate one
and the fact now matches it. And the plan claimed the speech renderer emits `describe`; **it does not**
(`md_to_speech.py:683` emits `"Diagram. " + caption`), which makes the 32 unaudited `describe` strings a
**site and screen-reader exposure only** — smaller than the row said, and still unaudited.

---

## ⚠️ The same inversion, in a second caption, in the same diff

**`commit-gate` found the Hockey Canada party inversion STILL LIVE in `faceoff-where-the-draw-goes`** —
a caption this record never named, in the round that found the inversion, wrote it up, and closed it in
`faceoff-strong-side-dot` and in three layers of `faceoffs.md`.

**The caption's own framing is the offending team** — *"Marked in your own end: an icing you caused, or
a penalty you took"* — and four sentences later it said Hockey Canada gives the choice of dot *"only if
**you** tell the referee before the line change procedure starts."*

⚠️ **In the situation this diagram draws, the reader is the team that iced it. The choice, and the duty
to declare it, belong to their OPPONENTS** (`hc.txt:4857`, *"the attacking (non-offending) team"*).

⚠️ **AND THE CAPTION CONTRADICTED ITSELF ONE CLAUSE EARLIER**, where it correctly says *"under the NHL
and the IIHF **the attacking team** chooses which of the two."* **It shipped in both layers** — the
built page and the spoken paragraph.

**Fixed:** *"gives it to the attacking team — your opponents, in the situation drawn here — who lose it
unless they tell the referee before the line change procedure starts."*

⚠️ **Why it survived: the reviewer population was wrong and nobody checked it.** The record claims
*"all 13 rules-bearing captions"* were covered by `rules-verifier`. The gate's own keyword scan of the
32 new captions returns **16**. ⚠️ **This was one of the three outside that set — and it is the densest
rules caption in the diff**, carrying four books, choice of dot, offside spot allocation, the last-play
faceoff and USA Hockey 612(b)/(c). **A coverage claim is only as good as the population it was
computed over, and nobody recomputed it.** That is the D11 failure of this same round, in a different
dimension.

⚠️ **The gate is explicit that its own scan is a keyword scan** — *"a caption that states a rule in
ordinary words, with no rule number, no book name and no penalty vocabulary, would not have been in the
16 I looked at."* **So 16 is a floor, not a population.** Filed.

---

## The leader repair, verified in a browser — and the reviewer withdrew its own recommendation

**Measured in real Chrome against the served build** (`Runtime.evaluate`, real `getBBox()`), all 48 pages,
790 leader instances resolving to the **534 unique** leaders — pairing by `nextElementSibling`, which is
exact by construction in the emitter. ⚠️ **Zero of 790 failed to pair, so the glyph-letter
misattribution that broke every script I wrote does not occur** — a glyph `<text>` is never a leader's
next sibling. **The method was available and I did not find it.**

| | result |
|---|---|
| `wide — outside lane` | **7.03 drawn, 0.15 clear of the glyph ink** — seen at 6×, reads as connected |
| the owner's four leaders | **5.08 / 5.08 / 5.08 / 7.01**, clearance 0.40 — **not regressed** |
| labels moved | **none** |
| leaders ending inside the ink box | 5 of 534, **none visibly touching** — the halo closes the rest |
| dead air | **median 0.40, p90 0.40** — 90% sit exactly at the designed `LEADER_GAP` |
| shortest line drawn anywhere | 3.67 units; **nothing under 1.0** |

⚠️ **"No label moved" was proved by REPLAY, not by inspection:** the old constant 0.56 was run against
**today's** browser-extracted coordinates and returned **3.10** for `wide — outside lane` and
**5.08 / 5.08 / 5.08 / 7.01** for the owner's four — the exact pre-fix figures. **Had any label moved,
3.10 could not come back out.**

**Independent corroboration of the constant, over all 534 labels rather than 118:** advance/char **min
0.340, median 0.450, p75 0.476, max 0.577**. `CLIP_ADV = 0.473` is the p75, and **150 of 534 labels are
wider per character than it** — the deliberate, measured cost of the choice.

### ⚠️ The recommendation I rejected, withdrawn by the agent that made it

**I implemented the token-edge start, measured it, and reverted it. The reviewer then measured what its
own suggestion would have cost and agreed:** subtracting `GLYPH_INK.forward` would push **58 of 534
(11%) under the minimum-length guard — they would disappear entirely — and leave 276 of 534 (52%)
under 1.5 units.** Its words: *"That is a much larger defect than the 40 it was aimed at. Revert was
correct. Treat my earlier recommendation as withdrawn."*

⚠️ **And the fault it was aimed at is smaller than the geometry says.** In five zooms, wherever the
anchor is a **filled** token the glyph already hides the leader's start; the only dash actually visible
inside a glyph was on a **white-filled** circle. **"341 of 534 cross their own letter" is a geometric
count, not a visible one.**

### What remains, with its cause identified

**Worst residual dead air is 3.30 units** (`goalie-rim-stop-or-clear` / `kill it and leave it`), and the
cause is the opposite of the original defect: **that string measures 0.397 advance/char — nearly all
`i`, `l`, `t` and spaces — so a 0.473 box overhangs its real ink by ~2.4 units a side.** ⚠️ **One
constant cannot serve a distribution running 0.340 to 0.577.** The complete fix is to stop estimating
and emit per-string widths from real font metrics at build time. **Filed, not done.**

### Two honest corrections from the reviewer, both unprompted

⚠️ **It could not reconcile a figure in its OWN previous report** — the *"1.79-unit gap"* beside the
0.20 visible length. From today's coordinates the dead air was 4.08 to the ink, 3.79 to the halo. **It
flagged it as unexplained rather than dropping it.** The 0.20 reconciles exactly: 3.10 drawn − 2.90
token radius.

⚠️ **It chased and cleared a false alarm of its own** — a theme-toggle label read from the wrong button
by a loose regex. **Recorded so nobody re-reports it.**

### Also closed this pass

⚠️ **The theme toggle is no longer untested.** Exercised rather than emulated: light → click →
`data-theme="dark"` plus `localStorage`, **persists across navigation**, second click returns, correct
label in both states, and **no flash at 60 ms under either `prefers-color-scheme`**. **5,534 fragment
links across 50 pages, 0 broken.** Zero console errors and **zero off-origin requests from the site** on
all 48 pages. All contrast AA. Anchors land 16 px clear of the sticky header.

⚠️ **Still unwitnessed: the native tooltip itself.** The MCP extension's `navigate` remained blocked
even after the owner re-authenticated — `tabs_context`, `tabs_create` and `resize_window` all work, only
`navigate` is refused — and a `<title>` tooltip is drawn outside the page compositor, so no screenshot
can capture it. **`<title>` is confirmed the first element child of every `<svg>` with no shadowing
`title` attribute, median 25 chars, max 121. The change is verified structurally and not
observationally.**

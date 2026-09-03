# Round 62 — the largest documents were the barest, and the tables nobody heard

**Started 3 September 2026, immediately after `a1a2ed4` was committed and pushed.**

**The owner's standing priority: readability, and diagrams above all else.**

---

## Dimension coverage, and who actually reviewed what

⚠️ **`commit-gate` BLOCKED because this record named NO reviewer and NO dimension. It was right: silence on
a dimension is the failure, and C8 requires the reviewers to have run.**

| # | Dimension | Status |
|---|---|---|
| **D1** | Rules accuracy | ✅ **CLOSED — `rules-verifier` ran twice.** Fifteen provenance sites repaired; the `rules_primer.md:437` IIHF 101.1 insertion and the post-split pinch sections verified: **all eight 101.1 fragments verbatim, both limbs, no `only`.** ⚠️ **`commit-gate` independently re-derived 607(a)–(e), 407(a)/(c), 4.13(a)/(c), 8.3(a)(i)/(ii), all nine NHL penalty-table rules, 41.1, 81.1/81.3, 624, 6.7(e) and 101.1 in full. Every one held.** |
| **D2** | Rules travelling without exceptions | ✅ **CHECKED.** ⚠️ **The round's own repeated failure and the reason the 101.1 census exists: a corpus sweep of all 51 sites found 51 of 51 carrying BOTH limbs and the exception.** **`rules-verifier` also found the borrower is a strict SUBSET of its owner and says so.** ⚠️ **One instance survives and is FILED, not swept: `corner-escape-routes` and four content sites state 101.1 without its WOMEN'S-HOCKEY SCOPE — the third distinct 101.1 scoping class this session.** |
| **D3** | Rule-set divergence | ✅ **CLOSED — and it is the round's largest finding.** **Sixteen sites cited the goaltender skates test to USA Hockey 407(c) and Hockey Canada 4.13(c). Neither rule contains it** — *"the word 'skate' does not appear in Rule 407 at all"*. **The real shape: NHL and IIHF put the test in the PLAYING RULE and judge on the PUCK; USA Hockey puts the opposite test in a SEPARATE CASEBOOK; Hockey Canada puts it in a DIFFERENT PLAYING RULE (8.3(a)(ii)) and an Interpretation printed in the same volume.** ⚠️ **Four books, three places to look.** |
| **D4** | Citation integrity | ✅ **CLOSED by gate re-derivation, NOT by `source-verifier`, which did not run.** ⚠️ **Read this row as gate-cleared.** **Materially closed by the fact that ZERO URLs are new to the corpus — all nine on added lines already exist at `a1a2ed4`.** **`check_external_links.py` was not run.** |
| **D5** | Provenance | ✅ **CLOSED.** The new Sources paragraph is a borrow; every quoted string and both structural pinpoints located in the publisher's own document on disk. ⚠️ **The light-hit sentence appears in TWO sources and the corpus credits the one where it genuinely sits, with a section-level pinpoint.** |
| **D6** | Negative existence claims | ⚠️ **PARTIAL, and declared rather than silent.** **`content-reviewer` ran but the record does not show it audited this dimension.** **What IS verified: the `the-privileged-area` caption's claim that the term and construction appear nowhere in the NHL, IIHF 2025/26, IIHF 2026/27, Hockey Canada or CARHA books — `commit-gate` tested it (0 hits for `privileged` in all five, 8 in `usah.txt`) and the caption's own author searched the CONSTRUCTION separately with a positive control.** ⚠️ **A gate's spot-check of one claim is NOT a review of the dimension.** **TWO MORE were gate-verified on the fourth pass and are named here so the next round does not re-test them: `puck_handling.md`'s *"USA Hockey writes no fend-off permission in Rule 622 at all"* — confirmed, `usah.txt:4343-4358` names only clutch/grab/hold — and `rules_primer.md`'s *"Rule 24 writes no short-handed clause"*, confirmed against 24.1–24.8 where 16, 17, 18, 21 and 22 each carry one.** ⚠️ **The REST of this diff's negatives remain unaudited. NEXT ROUND'S FIRST ITEM.** |
| **D7** | The cardinal rule | ✅ **CLOSED — `content-reviewer` found a caption assigning the net front to a position its section never names.** Repaired with the three-part treatment its sibling already carried. |
| **D8** | Numeric ownership | ⚠️ **FAILED AND CAUGHT — see the entry below.** **A published angle wrong by 8°, produced by taking a number from the wrong vector and then applying the wrong inverse function.** ⚠️ **Every checker passed it and a listener heard it.** **Every published figure in all five captions has since been re-derived; four more wrong numbers were found in the comments, none of which had reached a reader.** |
| **D9** | The summary layer | ✅ **CLOSED — and the round's own failure mode.** **A fifteen-site provenance repair reached seven layers of `goaltender.md` AND STOPPED BEFORE KEY TAKEAWAYS.** **Two further summary-layer half-rules found and repaired.** |
| **D10** | The key-facts layer | ✅ **CHECKED** — 830 blocks / 5,475 facts conform. ⚠️ **`facts-reviewer` did not run; this is `check_facts.py`'s mechanical floor plus the layer tests inside each repair.** ⚠️ **The 11-value cap blocked work FOUR times and every instance is filed rather than worked around.** |
| **D11** | Reader safety | ✅ **CLOSED — `safety-reviewer` ran and found a SECOND CRITICAL**, since repaired: the receiving posture coordinated by *"and"* inside an *"In a checking league,"* clause. **It also SETTLED the walking-speed framing on evidence; two sites changed, one of them the OWNER.** **Five-layer boards-posture propagation verified SOUND, scope carried everywhere, section split lossless.** |
| **D12** | Read-aloud integrity | ✅ **THE ROUND'S LARGEST GAIN, MEASURED: the phrase *"A detailed table appears here in the written version"* in the rendered speech of all 37 documents went 18 → 4.** **All six split captions' boundaries checked by hand; none ends a permission with its limit opening the next.** |
| **D13** | Folklore | ⚠️ **One unlabelled superlative left standing and FILED** — the repairing agent's brief was to restore a scope, and non-negotiable 3 forbids deletion. |
| **D14** | Structure, style, terminology, cross-links | ✅ **CHECKED** — 50 pages, 10,062 internal links and anchors resolve. Section split renamed no anchor; nothing links to the affected heading. |
| **D15** | The rendered site | ✅ **CLOSED — `site-reviewer` ran.** ⚠️ **Extension blocked again, INCLUDING on `example.com`, so it is the categorisation service failing closed against everything.** **Drove real headless Chrome over CDP: 7 viewports × 2 themes × 2 pages, plus equipment, search and 404.** ✅ **Both diagram fixes CONFIRMED ON THE PAGE.** **Zero console errors, zero off-origin requests, no body-level horizontal scroll to 320 px, AA contrast in both themes, no theme flash at 400 ms latency.** ⚠️ **AND IT PROVED THE HALO CAUSE, closing a defect deferred twice.** ⚠️ **It also RETRACTED one of its own findings: anchors measured 415–3,812 px off target were a smooth-scroll animation in flight; at 3 s every anchor sits at exactly 72 px. *"The measurement was wrong, not the site."*** |

**Carried as a named extra, not a canonical dimension: DIAGRAM CORRECTNESS.** ⚠️ **`diagram-reviewer` ran and returned two majors, BOTH found by looking and by no checker** — a zone label covering the faceoff dot it named, and an escape route that never passed behind the net while four layers said it did.

⚠️ **THIS TABLE WAS RENUMBERED AFTER `commit-gate` BLOCKED ON IT.** **It had used its own scheme — "D2 the facts layer", "D3 propagation", "D6 numeric ownership", "D10 diagram correctness" — which collides with `review_process.md`'s canonical numbering at four points.** ⚠️ **The live consequence: it read *"D6 FAILED AND CAUGHT"*, which a future round would take as NEGATIVE EXISTENCE CLAIMS failing. It was numeric ownership, canonical D8.** ⚠️ **And canonical D2, D3 and D6 had no rows at all — in the round whose largest finding IS a rule-set divergence.** **`review_history.md` and the next round's briefs are built from this file.

### Files in this commit this record did not otherwise name

- **`content/foundation/rink_map_and_glossary.md`** — one provenance site in Key Takeaway 8, part of the
  16-site skates-test repair.
- **`content/systems/forechecking_systems.md`** — ⚠️ **the second-largest content change in the commit**:
  the boards-posture limb added in five layers plus a Sources paragraph, and the `When to pinch` section
  split (11 → 5 + 9).

## ⚠️ D8 (NUMERIC OWNERSHIP) FAILED, AND THE CHECKERS COULD NOT SEE IT

**`angle-into-the-corner`'s caption published *"about fifty-seven degrees"*. The true value is 49.5°.**

⚠️ **The comment's *"the dot product would be 0.539, which is 57 degrees"* took `0.539` from the DEPARTURE
unit vector — not a dot product with the wall normal at all — then applied `acos` where the correct 22°
figure used `90 − acos`.** ⚠️ **TWO WRONG STEPS LANDING ON A PLAUSIBLE NUMBER.**

⚠️ **`check_absolutes`, `check_geometry` and `check-arrivals` all passed. The figure was voiced aloud and
rendered on the page.** **This is the *"module comments are their own review record"* hazard — except this
one escaped the comment and reached the caption.**

⚠️ **And the audit that found it was incomplete BY ITS OWN ACCOUNT: *"I re-derived three of the five. The
other two I checked only where a figure appeared in the `describe`."*** **A full re-derivation of every
published figure in all five captions is now running.**

---

## ⚠️ THE HALO DEFECT — deferred twice, fixed on the third round, and the mechanism was not what anyone said

**Label halos had been erasing rink markings since before round 60.** ⚠️ **The browser pass PROVED the cause
rather than inferring it: re-rendering each SVG with `stroke-width="0"` restored every missing line.**

⚠️ **AND THE REVIEWER'S PROPOSED FIX WAS WRONG — the repairing agent refused it with a structural reason.**
*"Extend the over-paint at `:66` beyond `boardsOutline()`"* **cannot work: `boardsOutline()` is emitted
INSIDE the glyph layer, but labels are placed AFTER the entire glyph layer. An over-paint reaching the label
halos would have to be painted ON TOP OF THE LABEL TEXT.** ***"Repainting a goal line across a label is not
a repair; it is the same defect facing the other way."***

### ⚠️ The real mechanism, named for the first time

***"The halo was WIDER THAN THE GAPS BETWEEN THE LETTERS, so the per-letter outlines merged and the halo
stopped being an outline — it became a solid white rectangle the size of the whole word."***

⚠️ **And a flat width could never be right: full-sheet diagrams draw labels at 1.7× the half-sheet size, so
ONE NUMBER WAS WRONG AT BOTH SCALES.** **Fixed by making the halo a fraction of the label's own font size —
`LABEL_HALO = 0.12`, giving 0.34 ft at half sheet and 0.57 at full.**

**Measured sweep on a label sitting on the blue line, counting scanlines where any blue survived:**
`0 ft: 75 · 0.28: 74 · 0.35: 74 · 0.45: 73 · 0.6: 70 · **0.9 (shipped): 64**` — ⚠️ **the shipped value cut an
11 px hole.**

### ⚠️ AND THE CODE'S OWN COMMENT WAS NOT WRONG — IT WAS ABOUT A DIFFERENT ELEMENT

**The note at `:56` says the boards are repainted while *"hash marks and the faceoff dots"* are not.**
⚠️ **That comment is about PLAYER-GLYPH halos — a separate, much smaller source. Every casualty in the
census came from the LABEL halo.** ***"That is why the code's own list looked 'too short': it was accurate
for its own element and blind to the other one."*** ⚠️ **The glyph-halo damage is UNTOUCHED and remains an
open item — none of the restored pixels come from it.**

### The result, measured exhaustively

**23,791 marking pixels restored across all 140 diagrams. ZERO lost.** ⚠️ **139 of 140 SVGs changed, and
every differing line differs ONLY in the `stroke-width` of a `<text paint-order="stroke">` element — no
geometry, no placement, no line-count change anywhere.**

⚠️ **THE WORST CASE WAS NOT IN MY BRIEF'S LIST.** **`rink-map-end-zone` and `rink-map-full` — THE TWO
DIAGRAMS THAT DEFINE THE CORPUS'S VOCABULARY — had both faceoff circles chopped into fragments, hash marks
erased, the boards line cut, THE BLUE LINE NOTCHED IN FOUR PLACES, and the goal line and crease cut.**
**All continuous now.**

**Legibility verdict: pass**, checked at three sizes including the hardest case — ⚠️ **79 of 140 diagrams
have a label overlapping the blue or centre-red line, several centred on it.** **Those labels are MORE
legible at the letter level, because a thin outline separates the stroke from the band where a fat one
merged into a slab.**

### The control that could not exist, and what was done instead

⚠️ **I asked for two label-free controls. The corpus contains EXACTLY ONE diagram with no placed labels —
`notation-key` — and its SVG is byte-identical and its render pixel-identical.** **The agent substituted the
strongest available evidence: an exhaustive structural diff over all 140, showing the only changed attribute
anywhere is the one it edited.**

---

## The full re-derivation — D8 (numeric ownership) closed, and four more wrong numbers in the comments

**Every published figure in all five new captions and describes recomputed from `rink.json` and the
module's own constants, with the renderer's own control-point formula.** ⚠️ **`rules_primer.mjs` needed no
change — every figure in both its units is right.**

**The 57° was confirmed wrong independently: 49.47°. Caption now reads "about fifty".**
**One marginal rounding corrected** — *"about eleven feet"* for a true 11.5, ⚠️ **flagged because every other
figure in these describes rounds to nearest and this one alone rounded down.**

⚠️ **FOUR MORE WRONG NUMBERS IN THE COMMENTS, none of which had reached a reader:**

| comment claim | true |
|---|---|
| *"tip is 27 ft from the checker"* | **26.25** |
| escape 1 *"runs 4.3 ft off the dasher at its furthest"* | **3.50** centreline / **3.27** measured off the rendered ink — ⚠️ **and y is MONOTONE, so the closest point is the TIP, not a bulge** |
| net-front arrival distances *"24.5 ft and 30.8 ft"* | **32.27 and 30.15** — ⚠️ **24.5 is the ROUTE'S OWN LENGTH, almost certainly the source of the error** |

**Every conclusion those comments supported still held. The workings did not.**

## ⚠️ SIX CAPTIONS ARE VOICED AS SEVERAL UNITS, AND NOBODY HAD CHECKED WHERE THEY SPLIT

**`icing-the-race-and-the-dot` is 3,615 raw chars and `the-privileged-area` 4,471, against
`MAX_BILLED_CHARS = 2800`.** ⚠️ **THIS PASSAGE FIRST SAID "TWO", AND `commit-gate` CAUGHT IT ON THE FIFTH
PASS — *"the record's 'both are safe' covered a set that was one short."*** **There are SIX over the cap:
those two plus `the-call-and-who-can-see-it` 3,832, `the-risk-map` 3,179, `forecheck-pinch` 2,998 and
`oz-net-front-screen` 2,837.** ⚠️ **All six boundaries have since been checked by hand and every one is
safe — the full table is in `OPEN_ITEMS.md` under *"ALL SIX SPLIT CAPTIONS CHECKED"*.** ⚠️ **The gate
re-derived `forecheck-pinch` independently at 3,141 BILLED chars and confirmed its cut falls after a
restriction, with unit 2 opening on its own universal scope.** **Two files disagreed about the size of an
audit, and the smaller number was in the record that gets read first.** ⚠️ **They do not DROP — `md_to_speech` re-splits at sentence boundaries — so
the *"131 under the cap"* framing applied to only one of the three.** **The re-deriving agent flagged that
it had not checked where the cuts fall.**

**Checked, and both are safe:**

| caption | unit 1 ends on | unit 2 opens on |
|---|---|---|
| `icing-the-race-and-the-dot` | a **restraint** — *"do not run yourself into the end boards for nothing"* | ⚠️ **the posture limb** |
| `the-privileged-area` | **a description of what the region IS** | ⚠️ ***"607(c) is the half to know before you go hard to the net, and it writes no bare minor"***, running through to the *"not fair game"* limb |

⚠️ **Neither ends a permission with its limit opening the next.** **But this was luck rather than design: nothing
measures a caption's split points, and the two longest captions in the corpus were both written without
anyone knowing they would be cut at all.**

---

## ⚠️ THE FRAMING I HAD BEEN USING WAS WRONG

**Round 61 worked from "12 documents own no diagram", triaged to four real candidates.** ⚠️ **That count
pointed at documents that mostly SHOULD own none** — `skating.md` and `puck_handling.md` are body mechanics
the rink primitives cannot draw; `equipment.md`, `mental_game.md`, `conditioning_and_recovery.md` and
`team_play_and_culture.md` are not rink-drawable at all.

**Measured differently — diagrams against WORDS — the real gap appeared:**

| document | words | owns |
|---|---|---|
| `foundation/rules_primer.md` | **91,558** | **2** |
| `technique/body_contact_and_battles.md` | **73,195** | **1** |
| `positions/goaltender.md` | 68,278 | 4 |

⚠️ **The two largest documents in the corpus own three pictures between them — and their subjects (offside,
icing, the crease, angling, the wall) are the most drawable material there is.** **"Owns none" was the
wrong question; "owns almost nothing, at length" is the right one.**

---

## The diagrams — five drawn, and the undrawable half explained rather than blamed

**`rules_primer.md` +2, `body_contact_and_battles.md` +3.** ⚠️ **And both agents explained why the REST is
undrawable, which is more useful than the pictures:**

- **`body_contact_and_battles.md`:** §3 Stick Checks — ⚠️ **neither published key this corpus draws from has
  a stick symbol.** §4, §5, §7 (Board Battles, **the largest un-drawn section**) and §11 — *"a shoulder
  under an armpit, a wide low base, hands behind the body."* ⚠️ **A glyph has no facing, no limbs, no
  posture.** **So the thin ratio is not neglect.**
- **`rules_primer.md`:** ⚠️ **the OFFSIDE LINE was declined on measurement** — *"the rule turns on a 12-inch
  line, a leading edge, and one blade versus another. On a 200-ft plan view at 900–1100px a foot is ~5px,
  and the notation has no skate symbol."* **A crease-line diagram was declined the same way: a glyph is
  ~5.8 ft across against an 8×6 ft crease.**

### ⚠️ THE RENDER-VERSUS-ARITHMETIC CATCH OF THE SESSION

**`angle-into-the-corner` passed every number** — terminal tangent 8° off the wall, 4.5 ft of clearance, no
collisions. ⚠️ **Rendered, it was A LOOP OVER THE TOP OF THE FACEOFF CIRCLE.** **A quadratic's bow rotates
BOTH ends, so forcing the arrival parallel had swung the departure through 70°** — the route left the
skater heading **straight across the ice**, the opposite of what the section teaches, **under a caption
whose words *"pointed at the corner"* were false of the picture beneath them.** **Fixed with a LONGER chord
and a SMALLER bow, not a bigger one. The arithmetic and the failure are both written into the module.**

**Two more found only by looking:** an attacker's glyph **touching the goaltender's**, and a two-arrow
design that was **geometrically false** — the pair travel the same line 8 ft apart, so any line from the
driver passes through the driven player's glyph, **and offsetting the defenceman to clear him falsifies the
hockey, because a defenceman standing beside an opponent cannot drive him sideways.** Cut to one route.

### What was declined, and one refusal worth keeping

⚠️ **A tinted, labelled slot was declined even though it would have been the clearest possible "never back
toward the slot" — because it would have been a FOURTH definition of a corpus region inside a diagram
module.** ***"Three modules each defining `HIGH_SLOT` is how the 3.14× area band happened."*** **The cost is
stated in the module: `check_zones.py` has nothing here to compare.**

Also declined: a second route showing the forbidden direction (*"one defenceman in one place does not have
both options; drawing both would assert the thing that is untrue"*), the perpendicular-arrival contrast
(arrowheads landing on each other, **and the bad one is a line drawn head-first into a wall**), and the
airborne trail skate (*"a vertical distinction; plan view has no such axis"*).

### A table left whole, and the gap the layer test found underneath it

**`body_contact_and_battles.md:1292` stays dropped at 2,149 chars — no trim.** ⚠️ **But the layer test found
a real gap the table was hiding: the ` ```facts ` block voices 9 of its 11 rows, and INTERFERENCE AND
ROUGHING ARE VOICED BY NO LAYER OF THE DOCUMENT AT ALL.** **The block is at `HARD_MAX = 11`, so it cannot
take two more.** **Voiced in prose instead**, restating the table's own two cells with every citation and
scope route intact.

---

## ⚠️ TWO MORE OF MY PREMISES REFUTED — and the refutations prevented two wrong "fixes"

**1. `8.3(a)(ii)` is NOT an invented sub-letter. It is Hockey Canada's own apparatus.** I briefed that the
style guide records a wrong-pointer species for Hockey Canada, so a parenthesised roman looked like a known
failure. ⚠️ **The book pinpoints THIS VERY PAIR as *"Interpretation 2 Rule 8.3 (a)(i)"*, and a book-wide
sweep returns 20+ instances** (`10.4(a)(iii)`, `4.11(a)(i)`, `6.7(c)(ii)`, `6.9(a)(i)`, `7.10(e)(iii)`…).

⚠️ **AND THE APPARENT SELF-CONTRADICTION WAS NOT ONE.** `:587`'s bare `8.3(a)` is the **containing clause**;
the skates sentence genuinely sits inside it. ***"They were not contradicting each other; they were citing
at two depths."*** ⚠️ **Levelling the forms — which is what I asked for — would have LOST the pinpoint one
way, and made three snow-piling citations WRONG the other**, because snow-piling is in 8.3(a)'s
**unnumbered second paragraph**, not in the roman list.

**2. The four USA Hockey Casebook citation forms are all defensible.** The book heads it **`Rule 407
Goalkeeper Penalties` → `Situation 13`**, with the sub-letter appearing **only inside the answer**, as
`Rule Reference 407(c).` ⚠️ **So the choice is HOUSE STYLE, not correctness, and the agent recommended NO
SWEEP on correctness grounds.** **It unified within its own file and reported the rest rather than
reaching across.**

⚠️ **Both refutations prevented a "repair" that would have introduced defects. This is the third and fourth
time this round that an agent refusing my premise was the thing that worked.**

### And it removed self-narration from its own draft, unprompted

**Its first draft of a Sources addition read *"confirmed in both the `-layout` and the plain extraction of
the same printed page."*** ⚠️ **It cut that before finishing — the corpus narrating its own tooling inside
`content/`, non-negotiable 6 — and reported the fact in its report instead**, where it belongs: both
extractions carry the roman list, so neither is an artefact.

### The Key Takeaway defect was real, and repaired

**`goaltender.md:1374` did say the skates test is in 407(c) and 4.13(c). Neither contains it** — *"the word
'skate' does not appear in Rule 407 at all"*. **Repaired in the document's own `:944` wording.**

⚠️ **And the restored table cell was fitted, not appended: a naive append of the original sentence would
have made the cell 204 chars and DROPPED THE WHOLE NINE-ROW TABLE from the audio.** **`check_tables`
before and after: 15 chars and 7 rows of headroom, unchanged.**

---

## ⚠️ CRITICAL — a caption that prices checking INSIDE a region and leaves the outside sounding open

**`the-privileged-area`, and its source at `rules_primer.md:688`.** The amber band says *"607(c) is the half
to know before you go hard to the net… A goaltender anywhere INSIDE THIS SHADING… is not somebody to finish
a check on."*

⚠️ **The caption's whole subject is a REGION. It names checking as priced inside it and says nothing about
outside — so a listener takes the complement as open, goes hard at a goaltender playing a puck in the
corner, and draws a minor-plus-misconduct or a major-plus-game-misconduct.**

**USA Hockey 607(d)** (`usah.txt:3684-3690`) says the opposite in terms:

> *"A goalkeeper is **NOT 'fair game'** because they are outside the privileged area. A penalty for
> interference or charging should be called **in every case** where an opposing player makes unnecessary
> contact with a goalkeeper."*

⚠️ **And the caption itself says the region is *"a USA Hockey term with no counterpart in the NHL, IIHF or
Hockey Canada books"* — so under the other three there is NO outside-the-area permission at all.**

⚠️ **Census: seven documents carry the "not fair game" limb. `rules_primer.md` is the ONE that names the
region as a checking boundary and nowhere carries its complement — and THIS ROUND PROMOTED THAT OMISSION
INTO A UNIT VOICED ALONE.**

## ⚠️ MAJOR — a picture of a head-on wall race, with no posture in the caption

**`icing-the-race-and-the-dot` draws two skaters level, 24 ft apart, racing head-on at the end boards.**
⚠️ **That is the corpus's own named case for the cervical-flexion injury, and the caption sends a listener
into it with no posture** — one line for the racer, *"if you are clearly beaten to the puck, do not run
yourself into the end boards for nothing"*, and nothing about how to arrive when you are **not** beaten.

⚠️ **Census: EVERY other unit in the corpus that sends a player into a wall race carries the posture** —
seven content sites plus the `support-a-battle-from-outside` caption. **This new caption is the exception.**

## ⚠️ MAJOR — a topic sentence that reads as a discharge, and a rule quoted at half length

**`on_ice_communication.md:530`, the 1,690-char bullet its own author flagged for review.** It opens
*"**The call is yours and the penalty is not**"*.

⚠️ **Read aloud that lands as reassurance to the CALLER — and it is not reliably true. The caller was on the
ice, so the caller is INSIDE THE POOL the coach picks from.** **The bullet quotes the half of USA Hockey
407(a) that names the pool and drops the half that says who chooses:** *"**The player shall be designated by
the coach of the offending team through the captain**, and such substitute may not be changed."*
**Hockey Canada 4.13(a) is to the same effect.**

## ⚠️ THE ROUND'S LARGEST READABILITY GAIN, MEASURED BY AN UNASKED CENSUS

**Counting *"A detailed table appears here in the written version"* in the RENDERED SPEECH of all 37
documents, HEAD against working tree: ⚠️ **18 → 4.**

**Eight of those recoveries are this round's.** ⚠️ **`equipment.md`'s split rescued the NECK-GUARD ROW
carrying *"mandatory for every player of every age across the Home Countries"*, and the helmet row —
NEITHER OF WHICH A LISTENER HAD EVER HEARD.**

## A tool blind spot found by comparing two counts

⚠️ **`check_tables.py` CANNOT SEE TABLES INSIDE BLOCKQUOTES.** The tool lists 48; a render-based count found
a **49th** — `body_contact_and_battles.md:1098`, the NHL net-front penalty-enrichment table — **on no
`check_tables` list at all.** **Harmless here (its substance survives in the prose either side), but any
future blockquoted table is invisible to the worklist by construction.**

⚠️ **And the reviewer stated the limit of its own discovery: it found this by diffing the tool's list
against the renderer's `tables_as_pointer` report, which only catches tables the renderer DROPS. A
blockquoted table the renderer VOICES would be invisible to both.**

---

## ⚠️ TWO MAJORS IN THE FIVE NEW DIAGRAMS, BOTH FOUND BY LOOKING

**`check_absolutes` certified all 280 caption units, `check-arrivals` reported 0 hard, `check_geometry`
passed 77 assertions — and both of these were live throughout.**

**MAJOR 1 — ⚠️ THE PICTURE HIDES ITS OWN SUBJECT.** `icing-the-race-and-the-dot`'s zone label *"the
deadline"* is **~19 ft wide against a 12 ft box**, with a 1.1-wide halo, rendered at the polygon mean —
**2 ft below the dot, against 2.24 ft of type.** ⚠️ **So the label and its halo COVER THE FACEOFF DOT
COMPLETELY: the render shows the red dot with a white bite punched out of it and the word "deadline"
written across it.** **The dot is the entire subject of the rule** — *"no later than the instant the first
player reaches the end-zone faceoff dots"* — **and the caption says *"the marked box is the near dot."***

⚠️ **The source comment reasoned about this and got it wrong by 2 ft**: it says the mean *"sits below the
dot rather than on it."* **Only rendering shows that 2 ft is less than the type is tall.**

⚠️ **AND THE SAME AUTHOR HAD ALREADY SOLVED THIS**, in the other diagram of the same pair — carrying the
naming on a player label instead of a zone label.

**MAJOR 2 — the route does not go where three layers say it goes.** `corner-escape-routes`' escape 2 is
described as *"out behind the net"* by **the body, the ` ```facts ` block, the caption AND the `describe`**.
⚠️ **Measured off the built path, it never passes behind the net: `x(k) = 79 + 23.8k − 10.8k²` is monotone,
so max x is 92 AT THE TIP, against the back of the goal at 92.3 — and the terminal tangent runs 86° across
the ice, AT the goal frame.** ⚠️ **The section's teaching for both escapes is *"away from the net"*, and this
arrowhead points at it.**

⚠️ **NOT an arrival-invariant failure** — tip 9.90 ft from the goaltender, miss 7.46 ft, `check-arrivals`
clean. ***"The defect is the claim, not the clearance."***

### Two minors that are really warnings to the next editor

⚠️ **The module comments are wrong in five places and the conclusions are right anyway.** Dot products taken
against the normal in one sentence and the tangent in the next; a clearance given as **10.8 ft in one
comment and 9 ft in another when the true value is 8.0**; *"4.3 ft off the dasher"* against a true 3.5.
***"The comments in these modules are their own review record; they should not be trusted by the next
editor without re-deriving."***

⚠️ **A cross-module naming split, in comments only:** `rules_primer.mjs` calls the wave *"skating with
control of the puck"* (the HEO sheet's wording); `body_contact_and_battles.mjs` calls the same glyph
*"skate-and-stickhandle"* — **and `lib/rink.mjs`'s legend prints the second under a comment asserting the
FIRST is *"the key's own, verbatim"*, so that comment contradicts the line five below it.** **Nothing
reader-visible is wrong. It is the hybrid-naming trap in its early stage, now across three files.**

### And one refusal recorded so nobody "fixes" it

⚠️ **`corner-escape-routes`' pressure route trips arrival rule 1 — miss 0.63 ft against a 2.9 ft threshold —
and is saved by rule 4: the puck is drawn between the opponent and the wall, which FIXES HIS FACING, and the
caption ends *"Never finish into the back of a player who is facing the boards."*** ⚠️ ***"The safety of this
picture rests entirely on the last sentence of its caption."*** **If that sentence is ever trimmed, the
picture becomes a route aimed dead at the back of a player facing the boards.**

---

## Readability: the tables a listener had never heard

**Corpus totals moved 11 dropped / 35 voiced → 3 dropped / 45 voiced.** ⚠️ **Not one hedge, citation or
scope flag was cut to achieve it.**

- **`equipment.md:30`** — 17 rows against a 14 limit, split into three labelled tables **on the document's
  own existing framing** (*"in the order you put it on"*). ⚠️ **The diff is PURELY ADDITIVE: every row and
  every cell byte-identical.** All 17 items now audible, including the Home Countries neck-guard mandate.
- **`puck_handling.md:430`** — ⚠️ **fixed a SECOND defect nobody had asked about.** Its header was
  `Legal | Penalty`, and **the renderer never speaks the first column's header** — so a listener heard **a
  permitted act stated bare, immediately before *"Penalty, …"***. Restructured to three columns so every
  clause is labelled in audio.
- **`risk_management.md`** ×3, **`rules_primer.md`** ×2, **`goaltender.md`** ×1.
- ⚠️ **`defensive_zone_coverage.md:367` DELIBERATELY LEFT DROPPED** — six columns across five systems,
  unfoldable without becoming unreadable, **and every row already voiced in the systems' own sections.**
  **A genuine "no work needed" answer, which is the outcome that had to be available for the rest to mean
  anything.**

⚠️ **AND A PREMISE OF MINE WAS REFUTED:** I briefed that *"a listener has never heard the risk gradient"*.
**Not accurate — the ` ```facts ` block above the table already voiced all five grades.** **What was
genuinely lost was the *"Why"* column.** **The repair stands; my stated size of the hole did not.**

---

## The `HARD_MAX = 11` wall — and the specification already had the answer

⚠️ **I filed *"is 11 the right number?"* as an open structural question after it blocked a safety fix twice
in two rounds. IT IS NOT OPEN.** `content_style_guide.md` prescribes the remedy **and warns against the
wrong version**: *"split the section, on the seam the body already uses, **not on rule-set lines**. A split
by book leaves both halves all-`Rule:`: round 52 split one that way and 'relieved the wrong thing'."*

⚠️ **The guide anticipated the exact error my brief proposed** — I suggested splitting off the late-hit
window, **which is a split by book.**

**The agent refused my seam and used the document's own.** The bullet carried **three** bodies of law, and
the boundary was already written into the prose: ⚠️ ***"First, though: none of this applies if you may not
body check at all."*** **A section boundary buried inside a bullet.** `When to pinch` 11 → 5, new sibling
at 9, anchor unchanged, **caption unblocked.**

⚠️ **It also fixed a chunk-boundary defect ALREADY IN HEAD:** a chunk ended on *"…legally seal the opposing
winger against the boards"* with *"you must not be late"* and every limit opening the next file.
**And it caught its own first repair being an EXCLUSIVE ENUMERATION that omitted a case.**

**The standing lesson: a block at 11/11 is a signal that a SECTION IS DOING TWO JOBS, not that the cap is
wrong.**

---

## The provenance defect: a citation that sends a reader where the claim is not written

**The corpus cited the goaltender skates test to USA Hockey `407(c)` and Hockey Canada `4.13(c)`.**
⚠️ **Neither rule mentions skates.** **A reader who looks them up finds a rule silent on skates and
reasonably concludes the corpus invented it. Under USA Hockey that costs them two minutes.**

⚠️ **MY DIAGNOSIS WAS HALF WRONG, AND THE CORRECTION IS A BETTER FACT.** I briefed *"two of the four are
casebook."* **Hockey Canada's skates test IS in operative playing-rule text at `8.3(a)(ii)`** — *"plays the
puck with their skates over the centre red line"* — **and Hockey Canada's Interpretations are printed IN
THE SAME VOLUME, unlike USA Hockey's genuinely separate Casebook.**

**The real shape: NHL and IIHF put the test in the playing rule and judge it on THE PUCK · USA Hockey puts
the opposite test in a SEPARATE CASEBOOK · Hockey Canada puts it in a DIFFERENT PLAYING RULE and an
Interpretation. Four books, three places to look.**

⚠️ **Fifteen sites, not the three I briefed** — five in `goaltender.md`, ten across three siblings, where I
had said four. ⚠️ **`defender.md` alone had FIVE. And every body was already correct: the bodies were
committed clean and the SUMMARY LAYERS carried the defect — round 10's shape again.**
⚠️ **`rules_primer.md` was clean at all five of its own sites**, so the most rules-dense document had it
right while four others did not.

**The 11-value cap bit here too**, at 296 and 297 of a 300 char cap. ⚠️ **The agent paid for it in colour
(*"a third puck-handler"* → *"a puck-handler"*, the word surviving in the body) and DECLARED what would not
fit rather than dropping a book silently.**

---

## What this round has not done

⚠️ **The new prose is UNREVIEWED and its authors say so** — the forechecking boards-posture paragraph, two
new `Read:` facts, a caption limb, the rules-primer §4 IIHF 101.1 insertion, and a 1,690-char
penalty-consequence bullet in `on_ice_communication.md` **voiced as a single unit**. **A repair is new text.**

> ⚠️ **SUPERSEDED — no longer true, and `commit-gate` BLOCKED because this paragraph still said it.**
> **`safety-reviewer` and `rules-verifier` both ran on exactly this text.** **The safety review found a
> SECOND CRITICAL in it and settled the walking-speed framing; the rules review verified all eight IIHF
> 101.1 fragments verbatim and put a number on the split's losslessness — 206 quoted spans to 210, ZERO
> removed.** **Both outcomes are in the coverage table above and the two entries below.** ⚠️ **Left standing
> with the correction beneath, because a dated record is annotated and never rewritten.**

## ⚠️ THE SECOND CRITICAL — a safety instruction switched off by a conjunction

**`net-front-walk-out-direction`, shipping, found by `safety-reviewer`:**

> *"**In a checking league,** drive from under the arm without lifting their skates off the ice… **and if you
> are the one being moved, head up and chin off your chest**…"*

⚠️ **The receiving posture is coordinated by *"and"* INSIDE the *"In a checking league,"* clause. A reader in
a non-check league reads the whole sentence as not addressed to them — and what they lose is *head up, chin
off your chest* while being driven across a goal frame.** **That is the cervical-flexion mechanism, at the
goal post.**

**Scope: USA Hockey 12U and below, all girls'/women's, all non-check adult; Hockey Canada U13 and below and
all female hockey; IIHF women's play; British rec.** ⚠️ **The owner says otherwise at `:649` — *"Read this
section whatever league you play in"* — and both siblings on the identical hazard carry it.**

**Repaired: the delivering instruction keeps its checking-league scope; the receiving posture is now its own
sentence, scoped *"in every league, checking or not."***

⚠️ **AND THE REPAIRING AGENT CAUGHT A WRONG ANTECEDENT IN ITS OWN FIRST DRAFT** — *"the cervical spine,
**which** is the injury USA Hockey says…"*, where *"which"* points at the spine. ***"That is the same defect
class as the one this brief exists for: a safety sentence made wrong by grammar."***

## ⚠️ SETTLED ON EVIDENCE — the walking-speed finding attaches to the INJURY

**Two captions disagreed and could not both be the convention. `safety-reviewer` ruled, and not on grammar:**

⚠️ **The source sentence NEGATES A SPEED REQUIREMENT — *"A player doesn't have to be going at full speed for
this to happen"* (`huh.txt:228-229`).** ⚠️ **A collision at walking speed needs no such disclaimer: it is
definitionally possible and the sentence would be VACUOUS. Only the INJURY needs it.** **And it is the line
that defeats the reader's own risk model — *"I was only going slowly."*** **Read the other way it carries no
warning at all.**

**Two sites said COLLISION and both were changed — ⚠️ one of them the OWNER,
`body_contact_and_battles.md:1070`. Nine others already said injury in terms.**

**The caption convention is now stated:** ⚠️ **a layer that gives the MECHANISM must carry the qualifier —
a bare *"a tucked chin straightens the cervical spine"* reads as a high-speed hazard and hands the reader
their strongest excuse. A layer stating the prohibition BARE need not, and should not.** **`forecheck-pinch`
was short by one clause and now carries it.**

⚠️ **SUPERSEDED — that state no longer exists.** This passage said `check_absolutes` exited 2 and
`check_pointers`/`check_disclosures` aborted. **After the rebuild all three pass:** `check_absolutes`
37 documents + **280** caption/describe units, `check_pointers` 2 hits (both pre-existing and judged
legitimate), `check_disclosures` runs clean. ⚠️ **`commit-gate` flagged this: *"a record that describes a
state that no longer exists is not evidence of the state that does."*** **Left above with the correction
beneath, because a dated record is annotated and never rewritten.**

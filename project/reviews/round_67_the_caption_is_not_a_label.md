# Round 67 — the caption is not a label

**Opened 6 September 2026, on commit `3851b96`.** The owner's standing priority, restated twice in
this round: *"keep going in a loop, commiting periodically as sensible with as much parallelisium
as possible, keep looping until all of TIER 0 is completed."*

Tier 0 is the owner's own three-part brief: **diagram coverage and placement (D)**, **audience and
the rules-to-gameplay ratio (A)**, and **readability (R)**.

---

## The finding this round is named for

**Diagram captions are 7.5% of everything the corpus speaks — 80,382 words, about 8.9 hours — and
the median caption is 1,303 characters, roughly 100 seconds read aloud.** In
`off-the-ice/how_to_watch_hockey.md`, **27.7% of what a listener hears is caption**; in
`positions/winger.md`, 24.4%.

Measured per **marker** rather than per diagram, because a borrowed caption is voiced once in every
document hosting it: 286 markers against 187 distinct captions, 0 unresolved ids.

⚠️ **This was found while trying to prove something else, and the something else was wrong.** The
hypothesis was that the corpus's one existing Overview diagram, `notation-key`, was a bloated
outlier that made the case against page-summary captions. It is **rank 60 of 187 at 1.2× the
median**. The hypothesis died; the measurement that killed it is the finding.

⚠️ **And the direction matters: the defect is the MEDIAN, not the maximum.** The longest captions
are long because they carry rules qualifications and safety counterweights that non-negotiables 3
and 4 exist to protect. **A caption that gets shorter by shedding a qualification has made the
corpus worse.** Any reduction here is a per-caption reading job and must never be swept.

**It bears directly on the owner's diagram request, and not in its favour.** D1 moves all 286
markers to the *head* of their sections, so a listener now meets ~100 seconds of caption *before*
the prose rather than after. D2 and D3 would add roughly 60 more markers. **Adding diagrams adds
this cost linearly**, and D3's captions — page summaries — are the hardest kind to keep short.

---

## Measured: how wrong the plan's own rows were

Two Tier 0 rows were corrected by measuring what they asserted. Consistent with this repository's
standing finding that **the briefs are more defective than the corpus**.

| row | what it claimed | what is true |
|---|---|---|
| *"A note on language"* | **eight** documents | **nine** — it missed `goaltender`, `neutral_zone_systems`, `passing_and_receiving`, `shooting` |
| same row | the repeats are *strong-side / weak-side* and *high / low* | those are 4× and 3×. **The top four are all 6× and all rink geography:** `point`, `high slot`, `half-wall`, `goalmouth` |
| `D3` scope | an Overview diagram for each document | **31, not 37** — five documents are non-rink, which is the owner's own carve-out |

The language-note correction **changes that item's decision rather than just its numbers**: the
heaviest repetition is not tactical vocabulary a document might fairly re-establish, it is
**location names whose stated owner is `rink_map_and_glossary.md`**. Six independent definitions of
`high slot` is also six places to drift — and drift in that exact term is *already* an open finding,
with prose, `offensive_zone_play.md` and the built diagram giving three different depths.

---

## Closed

**A1 — the audience is now in the specification.** `project/content_style_guide.md` previously read
*"both newcomers and experienced players wanting to deepen their game."* ⚠️ **That half-sentence was
the licence under which the rules depth accumulated** — a spec that names everybody names nobody,
and any marginal paragraph could be justified by the reader who wanted to go deeper. It now names
**a player in their first ten years**, in the owner's words, with a new sub-section fixing the
working test: **a rule earns its space by changing what the reader DOES.**

⚠️ **Its counterweight is written into the same sub-section, because this item collides head-on with
non-negotiables 1–4 if read carelessly:** compressing is not deleting; a safety-bearing rule, a
genuine cross-book divergence and an honest disclosure all stay. **Where a rule's detail is what
keeps a reader from being penalised, ejected or hurt, the detail IS gameplay** — and a first-year
player is *more* exposed to that than a veteran, not less. **Cut the discussion, never the warning.**

**Round 66's splits changed the audio by exactly nothing.** Rendering HEAD and the index through the
real `md_to_speech` and diffing returned five documents **identical in text and in unit count**
(`rules_primer` 229→229, `goaltender` 179→179, `body_contact_and_battles` 193→193). The renderer's
unit boundary is not the bullet. **The whole gain was site-only**, which restates R0/R1 as a
site-readability item and leaves the listening-side readability defect, if any, still unfound.

---

## R6 confirmed at 20.3% — and it is UNIFORM, which changes how it can be fixed

Measured from HEAD across all 37 documents, fenced blocks and Sources trailers excluded:
**170,326 bold words in 839,838 of prose — 20.3%. One prose word in five.**

⚠️ **The distribution is the finding, not the total.** It runs from `how_to_watch_hockey` at
**14.4%** to `rules_primer` at **25.0%**, and *every one of the 37 sits in that band*. There are no
outliers. **So this cannot be fixed by targeting bad documents — it is the house style working as
written**, and any change is a change to the style guide first and 37 documents second.

⚠️ **And like R0/R1, this is a SITE-ONLY readability item: bold is not voiced.** Taken with the
round-66 measurement that eleven bullet splits changed the audio by exactly nothing, **the whole
readability tier so far is page-side.** That is legitimate — the owner's complaint was about a web
page — but it should be stated plainly rather than discovered a third time: **R0, R1 and R6 all buy
the reader something and the listener nothing.** The only measured listening-side readability cost
on this plan is R5, the caption load quantified above.

⚠️ **Emphasis at 20% is not obviously wrong and this record does not claim it is.** The corpus uses
bold structurally — to carry the safety counterweight into a spoken unit, and to mark the
*"coaching choice, not a rule"* qualification the cardinal rule requires. **A sweep that thinned it
would strip exactly the material non-negotiables 3, 4 and 7 protect.** What the number establishes
is that bold can no longer be doing the job of *standing out*, because at one word in five there is
nothing for it to stand out from.

---

## Verified closed — the 660 sq ft high slot

The defect `check_zones.py` was written for: a band labelled *"the high slot"* drawn at **660 sq ft,
3.14× the 210 sq ft its owner defines**, cutting through both faceoff circles, under captions
reading *"between the dots and the top of the circles"*. **It is fixed, and I verified it from the
geometry rather than from the record.**

All three modules that define their own `HIGH_SLOT` — `scanning_and_anticipation.mjs:60`,
`playing_without_the_puck.mjs:570`, `positions.mjs:64` — now carry **byte-identical polygons**.
Resolved against `rink.json`: `top-of-circle` x=54 and `faceoff-dot` x=69 with the goal line at
x=89, so the band runs **20 ft to 35 ft from the goal line** — precisely
`rink_map_and_glossary.md`'s *"from the level of the faceoff dots up to the top of the circles"*,
stated identically at its `:320`, `:671` and `:776`. The ±7 ft in y is the true 14 ft gap between
two circles of radius 15 centred at y=±22. **15 × 14 = 210 sq ft.** `check_zones.py` over the built
SVGs groups all four diagrams drawing the label together with no disagreement.

⚠️ **This does NOT close the separate three-depths finding** — prose, `offensive_zone_play.md` and a
built diagram giving 35 ft, 20 ft and 5 ft for one concept. That is a different claim about a
different quantity and it remains open; I checked the polygon, not it. Saying otherwise would be
the exact substitution this project keeps filing.

⚠️ **And `check_zones.py` compares diagrams to each other**, so this run proves consistency, not
correctness. What makes it correct is that the polygon matches the *owner document*, which I read
separately — and the language-note measurement above is a warning that the owner is being
re-derived in six other places where it can drift again.

---

## What this round has not done

*(completed at close)*

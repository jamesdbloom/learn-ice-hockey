# Diagram triage — which of the 1,281 undrawn sections should be drawn, borrowed, cut, or left alone

**11 September 2026.** Produced by a `diagram-reviewer` against the corpus, to make the owner's P1 priority
actionable. **The live plan points here; this file holds the list.**

## The census, corrected

**Confirmed exactly:** 1,640 `##`/`###` headings · 112 summary-layer · **1,528 teaching sections** · **247
carry a diagram (16.2%)** · **1,281 do not.**

⚠️ **But 1,281 OVERCOUNTS THE GAP. 113 of them are `##` sections whose `###` children carry a picture** — a
reader sees a diagram inside them. **The number with no diagram anywhere beneath is 1,168. Quote that one.**

⚠️ **THE COORDINATOR'S TOP-TEN TABLE WAS NOT THE TOP TEN.** Five sections outrank entries on it: `rules_primer`
*"10. Rule Set Differences"* (8,544 w), `rules_primer` *"Stick fouls"* (6,288), `shooting` *"Tips and
Deflections"* (5,451), `rules_primer` *"Goaltender interference"* (5,389), `rules_primer` *"Other
infractions"* (5,159). **This strengthens the finding rather than weakening it: four of the five are rules
survey, and `rules_primer.md` alone holds five of the true top ten.**

⚠️ **AND THE LONGEST CAPTION IS NOT THE ONE THE PLAN NAMED.** Verified independently: `forcing-them-outside`
**4,193**, `forecheck-press` 3,435, `the-risk-map` 3,109. Mean 1,422, median 1,269.

## ⚠️ THE FINDING THAT CHANGES THE WORK: half the best candidates already have their picture

**317 diagram placements against 198 distinct ids — 119 placements, 38%, are ALREADY BORROWS.** Verified
independently. **Borrowing is not an experiment here; it is the corpus's normal mode.**

Of the ~40 highest-value undrawn sections examined, **roughly half are already served by a diagram in another
file**. `time_and_space.md` is the clearest case: six undrawn spatial sections, five served elsewhere.
**Commissioning new art for those would build a second maintenance point for a picture that already exists.**

⚠️ **A borrowed diagram CANNOT be re-captioned for its new home.** Two candidates were rejected on exactly
that: `off-wing-open-to-the-ice` teaches the off wing specifically where the receiving section teaches the
general principle, and `goalie-rebound-corners-not-slot` is goalie-voiced in a forwards section.

## BUCKET 1 — BORROW. Highest value per unit of effort; no new caption, no new maintenance.

Caption fit verified against `diagrams.json` for every row.

| # | diagram | goes into |
|---|---|---|
| 1 | `defender-three-depths` | `systems/offensive_zone_play.md:213` — the concept's owner has no picture of it while `defender.md` does |
| 2 | `entry-middle-drive` | `systems/zone_entries.md:252` — caption already says *"through the seam between the two defencemen"* |
| 3 | `shooting-lane-and-the-step` | `systems/offensive_zone_play.md:963` |
| 4 | `entry-delay-curl` | `hockey-iq/time_and_space.md:109` |
| 5 | `rush-gap-and-angle` | `hockey-iq/time_and_space.md:337` |
| 6 | `rush-trailer` | `systems/neutral_zone_systems.md:600` |
| 7 | `faceoff-dzone-alignment` + `faceoff-dzone-clean-loss` | `systems/breakouts.md:735` §7 |
| 8 | `nz-pressure` | `positions/center.md:234` |
| 9 | `dz-collapse-corner` | `positions/defender.md:163` |
| 10 | `entry-outside-shoulder` | `hockey-iq/scanning_and_anticipation.md:341` |
| 11 | `entry-drop-pass` | `systems/special_teams.md:312` — ⚠️ caption is even-strength-voiced; check before placing |
| 12 | `breakout-stretch-pass` | `technique/passing_and_receiving.md:255` |
| 13 | `oz-behind-the-net` + `bank-pass-angle` | `hockey-iq/time_and_space.md:159` |
| 14 | `rink-map-full` | `systems/faceoffs.md:95` **and** `rink_map_and_glossary.md:199` — ⚠️ the owner of this diagram does not place it in its own faceoff-spots section |
| 15 | `practice-the-line-and-one-rep` | `getting-started/getting_started.md:442` |

## BUCKET 2 — DRAW. Spatial, undrawn, not served by anything existing.

Ranked by what a reader gains. **Each row states what the picture shows.**

1. **`defensive_zone_coverage.md:514` back door / weak-side seam** — the weak-side attacker drifting to the far post while everyone watches the strong-side battle, the cross-slot lane as a faint dashed seam, a stick flat in it. *The section calls this "the chance every coverage system is most afraid of" and nothing draws the play.*
2. **`neutral_zone_systems.md:475` the hinge** — D1 passes D-to-D then sinks into mid-ice behind his partner, so the return arrives facing up ice. *`nz-regroup-d-to-d` stops at the pass across.*
3. **`defensive_zone_coverage.md:150` ONE rotation** — the corner → behind-the-net exchange where both defencemen change identity mid-sentence. **Not five pictures.**
4. **`neutral_zone_systems.md:515` timing the swing** — three forwards curling back at three depths, turning up as the D-to-D pass is made.
5. **`defending_the_rush.md:489` 2-on-2** — two attackers crossing, the two legal answers drawn as alternatives against the named failure. *The file draws 1-on-1, 2-on-1, 3-on-2; the rush it calls "most often botched" has none.*
6. **`breakouts.md:619/642/665/688`** — which breakout each forecheck shape leaves open. **If you commission one, do the 1-3-1.** *The forecheck shapes are drawn only from the forechecker's side, so borrowing imports the wrong voice.*
7. **`special_teams.md:312` PP entries** — five attackers against a compact four-man kill holding its blue line, and the narrow gate. *`pk-nz-1-3` draws the wall; nothing draws the attack on it.*
8. `neutral_zone_systems.md:635` changing the point of attack — ⚠️ hard to draw the second slide in one frame; sketch first.
9. **`forechecking_systems.md:594` the weak-side D as safety** — *`forecheck-pinch` draws the pinch; the safety is what is absent from it.*
10. `puck_handling.md:489` know your out — all three outs drawn from the arrival point.
11. **`skating.md:688` a turn is not a crossover** — ⚠️ **the ONLY one of `skating.md`'s 58 sections this notation can express.**
12. `defending_the_rush.md:538` 3-on-1 — low priority; `rush-2-on-1` teaches most of it.

⚠️ **Rows 13 (`playing_without_the_puck.md:472`) and 14 (`neutral_zone_systems.md:655`) were NOT READ IN
FULL and must not be commissioned on the triage's word.**

⚠️⚠️ **BEFORE DRAWING ANY OF ROWS 5, 9, 10 or 12: run the arrival test.** All four put a route near an
opponent, and rows 9 and 10 — a pinch closing on a wall carrier, a puck-protector with a checker arriving —
**are the exact shape that produced two Critical gradings.** Each needs `miss = d·sin θ`, the `d < 9 ft`
arrowhead bar, and a recorded `rink.json` at the point it is drawn.

## BUCKET 3 — CUT FIRST, THEN MAYBE DRAW. This is P2's worklist.

- **`rules_primer.md` "Body fouls" (10,515) + "Stick fouls" (6,288) + "Other infractions" (5,159) + "Goaltender interference" (5,389) — 27,351 words.** What survives: which infractions exist, what each costs, the two or three divergences that change what a player does. **Almost none of it is spatial** — the exception is goaltender interference, and `the-goal-crease` and `the-privileged-area` **already draw it and are already placed there.** **Compress; commission nothing.**
- **`rules_primer.md` "10. Rule Set Differences" (8,544).** What survives is a table. **Not spatial, no diagram ever.** ⚠️ Check against `check_tables.py` when compressing — a four-book table is near `TABLE_MAX_COLUMNS`.
- **`special_teams.md` "Clearing, blocking, sticks and discipline" (6,764).** ⚠️ **Half of what survives IS spatial** — a PK clear aimed at the far corner rather than down the middle would earn a picture **after** the compression.
- **`forechecking_systems.md` "What your book allows" (5,550).** Survives as one sentence per book plus the angling obligation — **already drawn and placed.**
- **`body_contact_and_battles.md` "What actually gets called" (4,763) + "The stick lift" (3,538).** ⚠️ **The stick lift is body mechanics at a scale this notation cannot draw — no stick symbol exists in either published key.**
- **`goaltender.md` four rules sections — 14,983 words** inside the corpus's best-illustrated document. ⚠️ **What survives of "freezing the puck" and "putting it out of play" IS spatial, and `the-trapezoid` and `the-privileged-area` already draw it. Compress, then borrow.**
- **`risk_management.md` "9. Never shoot the puck over the glass" (4,340)** and **`time_and_space.md` "6. How the rules create space" (3,735)** — rules surveys inside judgement documents. **Compress hard; nothing spatial survives.**
- **`faceoffs.md` "Positioning requirements" (1,138)** — the borderline. The restraining geometry genuinely is a picture, and `faceoff-dzone-alignment`'s caption says one offset *"is stated in these words rather than drawn"*. But it is a rulebook clause. **Compress first, then decide.**

## BUCKET 4 — NEITHER. Correctly undrawn. Close them.

⚠️ **This disposes of roughly 19% of the 1,281 in one line, and saying so is a real answer.**

- **`equipment.md` (56 sections), `mental_game.md` (57), `conditioning_and_recovery.md` (54), `team_play_and_culture.md` (53), `uk_rules.md` (20) — 240 sections, zero diagrams, ALL CORRECT.** Every `##` heading read. Skate sharpening, arousal regulation, hydration, dressing-room conduct, IHUK amendments. **Nothing is a position, a route or a region.**
- ⚠️ **`skating.md` — 56 of 58.** **This corpus's notation is a RINK-PLAY notation.** It has no vocabulary for a leg, a blade angle or a knee bend, and **inventing one is the failure the notation pass exists to catch.** Under-drawn by count, correct by medium.
- **`rink_map_and_glossary.md` "8. Glossary" (7,947).** Its terms are **already individually drawn** — eleven diagrams, one scroll away. **A glossary diagram would duplicate all of them.**
- **`passing_and_receiving.md:85` saucer pass.** ⚠️ **Defined by being VERTICAL. A plan-view rink diagram cannot show height — genuinely undrawable in this notation**, which is a better reason than "not worth it".
- `practice_and_development.md` learning-science half (~30); `getting_started.md` 45 of 52 (administrative); `scanning_and_anticipation.md` evidence sections.

## Carried, unresolved

⚠️ **`centre-crease-the-puck-decides` is defined at `site/src/diagrams/center.mjs:804`, absent from
`diagrams.json`, and referenced nowhere in `content/`.** Probably the residue of commit `4e80e54` (*"cut a
diagram that drew a defenceman in the crease"*) — the reference was cut, the module entry stayed.
⚠️ **The BUILD SILENTLY DROPS an unreferenced diagram, so checking the build product cannot see a
source-only orphan.** The coordinator's own check missed it for exactly that reason.

**Never examined:** ~1,400 sections inferred from title, rules-density and a ~6-section sample. ⚠️ **The
shortlist scorer rewards rink vocabulary and punishes rule citations, so it is BLIND to a spatial section
written in plain language** — a 300-word section teaching timing without spatial nouns scores near zero.

**Never checked at all:** whether any of the **247 existing placements is wrong**. Several sit under headings
that do not obviously match (`breakout-reverse` under `time_and_space` *"2. What time actually means"*; six
diagrams under one `game_management` heading). **Nothing in this task looked.**

---

# Batch 1 results — three placed, three rejected, and the rejections taught more

**The brief carried one outright error, which is the tenth coordinator brief defect of the day.**

## ⚠️ A COR­PUS INVARIANT, discovered by the rejection and verified independently

⚠️ **NO DIAGRAM APPEARS TWICE IN THE SAME DOCUMENT. 322 placements, 0 intra-file duplicates.**

**The triage proposed `entry-middle-drive` for `zone_entries.md:252`. It is already in that file, 37 lines
below, at `:289`, under its own home section `### The middle drive`.** Placing it would have voiced a
~1,600-character caption **twice inside one listening session** with two intervening sections.

⚠️ **CHECK THE RECEIVING FILE FOR THE ID BEFORE PROPOSING A BORROW.** The triage checked whether the section
had a diagram; it did not check whether the **document** already had **that** diagram.

**It also failed the caption test on its own merits, which is the more interesting half:** §252 teaches the
**carrier** attacking the seam between two defenders; the caption teaches the **off-puck driver** freezing
the D so the carrier gets space — and says outright *"The driver usually does not get it, and that is not the
point."* **Different player, different job.**

## Placed

1. **`entry-delay-curl` → `time_and_space.md`**, after the *"The play:"* paragraph — not at the section head,
   so the picture lands the instant the reader knows what the play is.
2. **`oz-behind-the-net` → `time_and_space.md`**, placed **before** *"The same is not true behind your own
   net"*, so the picture sits with the claim it illustrates and the contrast follows it.
   ⚠️ **Flagged, not resolved: the caption imports the Passing Project 6.73% figure into a document that
   never cites it.** Fully qualified inside the caption, and the renderer announces *"Diagram, from offensive
   zone play"*, so a listener knows whose claim it is. **If borrowed captions must carry no statistic
   unsourced in the receiving document, this is the one to cut.**
3. **`rush-trailer` → `neutral_zone_systems.md`**, at the definition rather than after *"Why it works"*, so
   the caption previews the mechanism and the prose confirms it.

⚠️⚠️ **PLACEMENT 3 REQUIRED A FIX THE BRIEF DID NOT ANTICIPATE, AND THE AGENT CAUGHT IT IN THE RENDER, NOT
THE SOURCE.** The caption is **defence-voiced** — it lives in `defending_the_rush.md` — and the receiving
section is **offence-voiced**. Heard raw, *"a trailer covered by nobody and a trailer covered by two are both
goals"* flips sides mid-section with no warning. An orienting sentence naming the perspective flip was added,
on the corpus's own precedent in `how_to_watch_hockey.md` (*"The two are drawn from opposite benches"*).
**The agent said it would otherwise have rejected the placement.**

⚠️ **SO: A BORROW CAN CROSS A VOICE BOUNDARY, AND THE SOURCE WILL NOT SHOW IT. Render the receiving document
before accepting any borrow.**

## Rejected

- **`bank-pass-angle` → `time_and_space.md:159`.** The section never mentions passing off the boards — its
  boards paragraph is entirely **puck-protection posture**, and its own `Priority:` fact says *"The wall
  posture outranks every other instruction in this section."* ⚠️ **There is a surface echo — the section opens
  *"treat both as teammates"*, the diagram's home is headed *"the boards as a teammate"* — and that echo is
  exactly what made it tempting and wrong.**
- **`rush-gap-and-angle` → `time_and_space.md:337`**, and the agent judged it belongs **nowhere** in that
  document. Two grounds, the second **measured in the render**: the section's `Priority:` is *"the middle
  before the outside, in every zone"* while the caption is one 1-on-1 in one zone at one line; and **~60% of
  the caption is the gap ladder, which chunk 019 of the same document already voices TWICE** — once in a
  `Convention:` fact and once in a ⚠️ body sentence. **A third statement in one chunk.**
  ⚠️ **It also hit a splice defect on the trial insert, invisible in the source: the section's closing hedge
  *"This is a strong general principle rather than an absolute"* re-attached in the audio to the caption's
  last sentence. Wrong antecedent.** All four existing placements of that diagram are gap-or-angling
  contexts; this would have been the first that is not.

## The lesson for the remaining borrow rows

**Three of five broke.** The triage verified caption fit against `diagrams.json` text; what it could not do
was **render the receiving document**. ⚠️ **Every surviving borrow row is a hypothesis until the receiving
document has been rendered and the caption heard in place.** Duplication, voice flips and splice defects are
all invisible in the source.

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

---

# Batch 4 — three of three rejected, and two new categories

**0 for 3, and every rejection rested on evidence the triage could not have had.** ⚠️ **That is now 7 of 12
borrow proposals rejected. The triage verified caption fit against `diagrams.json` text; what it could not do
was read the receiving document, render it, or look at the repository's history.**

## ⚠️ NEW CATEGORY: a diagram can be borrowable ONLY AS A PAIR

`practice-the-line-and-one-rep`'s shared caption contains: ***"The next picture is the same six skaters using
one end of the ice."*** That is load-bearing for its owner, where `practice-small-area-in-one-zone` follows
four lines later and the two set up an explicit contrast.

⚠️ **In the proposed host, `getting_started.md:442`, THERE IS NO NEXT PICTURE — the next diagram in that file
is 279 lines EARLIER.** A listener would hear *"Diagram, from Practice and Development… The next picture is
the same six skaters using one end of the ice"* and then the drill-line steps.

⚠️ **A shared caption cannot be re-captioned, so this cannot be fixed at the destination.** The diagram is
borrowable **only as a pair** — and the pair carries the small-area-games argument, which belongs to its
owner, not to a getting-started etiquette section. **Check a candidate caption for FORWARD AND BACKWARD
REFERENCES to other pictures before proposing it.**

## ⚠️ SECOND INTRA-FILE DUPLICATE PROPOSAL — check the receiving FILE, not just the section

`rink-map-full` was proposed for `rink_map_and_glossary.md:199`. ⚠️ **It is already in that file at line 126
— 73 lines above.** Second time in twelve proposals. **The triage checks whether the SECTION has a diagram;
it must also check whether the DOCUMENT already has THAT diagram.**

**Invariant re-derived independently and still holds: 323 placements, 198 ids, ZERO duplicate `(file, id)`
pairs.** ⚠️ (The count is 323, not the 322 two briefs stated. Re-derive it; do not quote this line.)

## ⚠️ COMMIT ARCHAEOLOGY ANSWERS "GAP OR CHOICE", AND IT SHOULD BE THE FIRST CHECK

The brief asked whether `rink_map_and_glossary.md` failing to place its own full-rink diagram in its own
faceoff-spots section was a gap or a deliberate choice. **It is provably a choice, and the proof is in git.**

Commit **`6d9562c`** — *"Put every diagram at the head of what it teaches"* — swept that file. ⚠️ **It moved
28 diagram markers there. `rink-map-full` was not one of them** — it appears as an unchanged context line,
left where it sat because it already headed a section that exists solely to host it. **And the same sweep
moved `faceoff-dzone-alignment` to the head of `### Hash marks`**, the section carrying the *"what's
painted"* half of the subject. **So the faceoff region was specifically examined and specifically
illustrated, with a purpose-fit diagram, and the full-rink map was deliberately not added.**

⚠️ **Before filing any section as an undrawn gap, check whether a sweep already considered and declined it.**
`git log -S '](diagram:' -- <file>` is the probe.

## The third rejection — a caption serving 12% of its host

`rink-map-full` → `faceoffs.md:96`. Of ~170 caption words, **exactly one sentence serves the section**, and
the render shows it would be **the third statement of the same nine-dot breakdown inside one chunk** —
caption, then `Rule: Every faceoff happens at one of nine marked spots`, then the table itself.

⚠️ **And the picture is SILENT on what the section is actually about.** The heading is *"and what's painted
on the ice"*; its headline items are the **hash marks** and the **centre's restraining lines**. In the render
the hash marks are unlabelled ticks and the restraining lines **are not drawn at all**. The remaining ~88% of
the caption is position vocabulary (*"the half-wall"*, *"the point"*) **that this section never uses**.

**And the document is not picture-less on the point anyway:** `faceoff-where-the-draw-goes` sits 47 lines
later showing all nine dots, captioned for a faceoff reader. **If a picture is wanted there, it is a new
faceoff-specific one showing hash marks and restraining lines — not a borrow.**

## Minor, routed to the owner

`rink-map-full`'s labels render as **node identifiers with coordinate suffixes** — `half-wall:R`, `point:R`,
`top-of-circle:L`, `neutral-dot:L`. ⚠️ **Its caption promises *"the standard position vocabulary"* and
`rink_map_and_glossary.md` OWNS those names — it writes *"the half-wall"*, *"the point"*, never a `:R`/`:L`
suffix, which is a coordinate-table artefact rather than anything a player says.** Legible and unambiguous,
but not the words the document teaches. **Not checked: whether other map diagrams share the convention,
which would make it deliberate.**

---

# Batch 3 — one placed, three rejected, and a placement rule nobody had written down

**Running total: 6 placed, 10 rejected of 16 proposals.** ⚠️ **The rejection rate is the finding.** A triage
can verify caption text; it cannot read the receiving document, render it, or read git history — and every
single rejection has turned on one of those three.

## ⚠️ NEW RULE: A DIAGRAM PLACED INSIDE AN ORDERED LIST BREAKS THE NUMBERING, AND THE RENDER PROVES IT

`entry-drop-pass` was proposed for item 3 of a numbered list. **Measured in the speech render, the list splits
and restarts:** *"First, A clean controlled entry… Second, You do not get many attempts… **First**, The drop
pass… **Second**, The swing… **Fourth**, Regroup rather than force."* **Renumbered 1,2,1,2 then jumping to
Fourth.**

⚠️ **Check for an enclosing ordered list before proposing any placement mid-section.** The only non-breaking
position is before the list — and here that made things worse, because it put the picture directly after
*"What changes with the extra man is only this:"* while **showing no extra man.**

## ⚠️ A VOICE BOUNDARY CAN BE A CONTRADICTION RATHER THAN A SEAM

The recorded precedent for a crossed voice boundary is an added orienting sentence (`how_to_watch_hockey.md`:
*"The two are drawn from opposite benches"*). ⚠️ **That fixes a SEAM. It cannot fix two opposite
characterisations of the same play.** Here the caption says the drop pass ***"is not a default read"*** and
the receiving section says it ***"is the signature power-play entry"*** — sixty seconds apart. **Distinguish
the two cases before reaching for the orienting-sentence remedy.**

**Third ground, and the simplest:** the picture is a **2-on-2 even-strength rush** — two forwards, two
defencemen, a goalie. The section two paragraphs earlier says a kill *"has four players between you and the
net… you have to bring a five-player structure through a narrow gate."* A reader would take an even-strength
rush for the power-play entry shape.

## ⚠️ SECOND INSTANCE OF PAIR-ONLY, AND IT COUPLES TO A REJECTED DIAGRAM

`faceoff-dzone-clean-loss`'s caption opens *"**The same** defensive-zone alignment on a clean loss"* and
closes *"Same alignment as **the diagram beside this one**, with the draw lost."* Both existing placements are
on **adjacent lines**. ⚠️ **Placed alone, that closing sentence is false about the page** — and its partner
was rejected on its own merits in the same batch, so the pair cannot travel either.

**The partner's rejection is the cleanest scope argument in the round.** `breakouts.md` §7's *second sentence*
reads *"Alignment, draw technique and faceoff violations are in Faceoffs. What follows is only the breakout
that comes out of the draw."* ⚠️ **Roughly half the caption is faceoff-violation rules across four books.
Placing it makes the document tell a listener to go elsewhere for faceoff violations and then deliver faceoff
violations one paragraph later.** The agent checked the counter-precedent — `game_management.md` carries the
same pair beside its own *"See Faceoffs"* — and showed why it works there: **that section's bullet IS "win the
defensive-zone draws", so pre-drop alignment is its point.**

## The one placement, and the cost it reported rather than hid

`breakout-stretch-pass` → `passing_and_receiving.md:269`. ⚠️ **Deliberately NOT at the section head** —
because **measured in the render**, at the heading the caption and the facts block land in **one chunk** and a
listener hears the same two rule numbers and the same closing phrase *"two books of the four"* **twice, one
breath apart.** Below the facts block, a chunk boundary separates them: chunk `014` ends the facts block and
chunk `015` **opens** with the caption. Verified by `commit-gate` independently.

⚠️ **THREE CORRECTIONS TO THIS ENTRY, ALL FROM `commit-gate`, AND TWO OF THEM CUT AGAINST THE JUSTIFICATION.**
The line is **269, not 268**. The house pattern was stated as *"all six existing placements"*; there are
**seven** existing markers and only **five** sit after a heading — **so the pattern was 5 of 7, not 6 of 6,
and deviating from it is a smaller departure than the entry claimed.** ⚠️ **And the entry justified the
position on the AUDIO layer alone: this is now the ONLY diagram in the file sitting BELOW its facts block,
and the record never mentioned that visual consequence.** A trade argued in one layer has a cost in another.

⚠️ **The gate also measured the duplication cost more honestly than the entry did.** *"Two books of the four"*
lands in **six of 55 chunks** — and **five of those are pre-existing** (two are other sections' captions, one
is Common Mistakes). **So the document already voiced it five times; this borrow makes six.** The marginal
cost is smaller than *"three times in the section"* implied — **that density is the document's established
norm, not something this diff created.**

⚠️ **And the dangling referent is WORSE than dangling.** The caption's *"only the two skaters **the option**
names are drawn"* has a nearest antecedent in earshot **one chunk earlier**: *"Options. Flat if the lane is
clear, saucered if it must cross a stick."* **The listener's nearest referent is WRONG, not absent.**
Mitigated only by the *"Diagram, from breakouts"* prefix telling them they are hearing another document's
voice. **Recorded, not blocking — but a borrowed caption's referents can land on the wrong antecedent, not
merely on none.**

**Two residual costs it could not remove and reported anyway:** the offside divergence is now voiced **three
times** in the section — facts line, caption, body paragraph — and *"two books of the four"* three times in
about two minutes; four positions were tested and none avoids it, because the rule sentence is 37% of the
caption and the rule is what the section is about. And the caption's *"only the two skaters **the option**
names are drawn"* is a `breakouts.md` referent — nothing here is called an option. **A wobble, not a false
statement.**

## ⚠️ Handed back: what §7 actually needs

`breakouts.md` §7 remains undiagrammed, **and neither triage candidate was ever going to fill it.** The
spatial 60% of that section is **the wheel off a draw and its three variations** — win-and-up, win-and-reverse,
the modified wheel. `breakout-wheel` exists at `breakouts.mjs:209` but draws **the general wheel, not the
wheel off a faceoff.** That is a DRAW item, not a borrow.

---

## ⚠️ ROW 1 OF BUCKET 2 WAS A RE-COMMISSION OF AN ACCEPTED CUT — and the probe I briefed is blind to that

**`dz-back-door-seam` already existed.** It was drawn, reviewed twice, repaired, re-reviewed
and **CUT** in round 68, and the cut was accepted —
[`round_68_the_body_or_the_puck.md:115`](round_68_the_body_or_the_puck.md). The triage ranked
it **#1**, the highest-value undrawn picture in the corpus, and dispatched an agent to draw it.
The commission did not survive step 1 of that agent's own refute-the-brief pass.

### The method defect, which is the generalisable half

⚠️ **A diagram that is cut BEFORE it is committed leaves no trace in `content/` at all.** No
`](diagram:…)` marker was ever added, so the archaeology probe written into this file —
`git log -S '](diagram:' -- <file>` — **returns the file's ordinary history and nothing about
the cut.** Verified: on `content/systems/defensive_zone_coverage.md` it reports one commit,
`f2504ce`, which is the diagram layer's own introduction. The cut is invisible to it.

**The probe that works is `grep -rn '<diagram-id>' project/reviews/`, and it takes two seconds.**
Run it before commissioning anything.

### That probe applied to the whole DRAW list, now

Every id-shaped token in `project/reviews/` differenced against the 198 live ids in
`site/src/data/diagrams.json`. **One genuine non-live id: `dz-back-door-seam`.** The other
seven hits (`dz-support-structure`, `faceoff-dot`, `faceoff-dzone`, `nz-back-off`,
`nz-stand-up`, `oz-cross-the-road`, `pp-1-3-1`) are **prefix truncations of live ids** by the
extraction regex, not cut diagrams. ⚠️ **But the id probe only finds a rejection that got as
far as being NAMED.** The authoritative record of a rejection that never got a name is each
module's own **`WHAT IS DELIBERATELY NOT DRAWN`** block — **17 modules carry one**, and
`defending_the_rush.mjs`, `breakouts.mjs`, `forechecking_systems.mjs` and `skating.mjs`
carry **none**, which is the useful half of that census: those four have no recorded
rejections to trip over.

### And the gap row 1 reported was never a gap

**Three back-door pictures already exist.** `dz-strong-side-overload` draws the threat from the
defending side — the attacker alone at the far post, labelled *"nobody on the far post"*, the
cross-ice pass dashed. `dz-collapse-high-slot` draws the weak-side winger sagged in. And
**`pp-backdoor` in `special_teams.mjs` draws the same play from the attacking side.** The
second reviewer's verdict on the cut version was that it was
*"`dz-strong-side-overload` with four players deleted."*

**Disposition: row 1 CLOSED as correctly undrawn.** A fifth entry recording all of it now sits
in `defensive_zone_coverage.mjs`'s own `NOT DRAWN` block, so the next triage reads it in the
file rather than rediscovering it. Borrowing `dz-strong-side-overload` into §"The back door"
remains live and cheap and was **not** pursued.

### A content defect found on the way, and NOT fixed

⚠️ **`defensive_zone_coverage.md` uses "the seam" for two different lanes.** `:521`
*"Stick in the seam. The pass has to cross the slot"* is the low lane; `:523` *"The seam runs
through the high slot"* is not. The drawn cross-ice route in `dz-strong-side-overload` crosses
at **x ≈ 76**, which `rink.json` calls `slot`; `high-slot` is **x = 69**. Both sentences are
voiced as separate `<p>` units in `048.ssml`, so a listener hears the two readings a few
seconds apart with nothing reconciling them. **Needs the section's owner and a source. No
agent has assumed which is meant — round 68's reviewer declined, and so did this one.**

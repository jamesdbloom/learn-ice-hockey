# Round 68 — "the body or the puck"

**On commit `6d9562c`.** The Tier 0-D drawing wave, its reviews, and the safety critical that a new
diagram uncovered by being placed directly above it.

---

## The finding this round is named for

`content/hockey-iq/risk_management.md` §4 told a reader, in a ` ```facts ` line **voiced alone
between 300 ms breaks**:

> *"Action: One goes and takes the body or the puck; the partner covers the space it will squirt
> into, staying between puck and net"*

⚠️ **No body-checking eligibility flag anywhere in that unit — and the disjunction is the sharp
part.** *"Takes the body **or** the puck"* offers the body as the **alternative to playing the
puck**, which is exactly what USA Hockey defines as the illegal check.

**USA Hockey 2025-29, Rule 604 Note 1**, re-derived from `sources/usah.txt` and confirmed
independently by the gate:

> *"an illegal body check is defined as when a player makes intentional physical contact with the
> opponent using overt hip, shoulder, forearm or torso action. This includes physically forcing the
> opponent off the puck **and with no effort to legally play the puck.**"*

**Rule 604(a):** *"Body checking is prohibited in the 12 & under youth age classifications and
below, all Girls'/Women's age classifications and all non-check Adult classifications."*

**Scope: the majority of this corpus's stated readership** — the style guide now names a player in
their first ten years. Hockey Canada 7.3 reaches U13 and below and all female hockey. British
readers get no prompt at all: the IIHF book names no checking age and the IHUK In-House Rules write
no body-checking provision, so their answer is in competition regulations.

⚠️ **The corpus already knew the fix and applied it twice elsewhere** — `playing_without_the_puck.md`
and `game_management.md` both carry *"take the body only where your league permits checking"*.
**Only `risk_management.md` did not**, and it carried the flag once in the whole document, ~300
lines and many voiced units after the naked instruction.

### ⚠️ AND THE FIRST REPAIR RE-CREATED THE DEFECT 300 ms AWAY

The fix pushed the facts line to 248 characters, over the 200-char cap for an `Action:` label. **I
split it** — which put the eligibility constraint in a **separate voiced unit**, with a 300 ms break
between the instruction and the thing that qualifies it. **That is the same defect in a new shape,
and it is the exact failure the layer rule exists to prevent.**

Corrected by putting the constraint **inline**, and by reordering so the legal act comes first —
162 characters:

> *"Action: One goes and takes the puck — or the body, only where your league permits checking; the
> partner covers the space it will squirt into, staying between puck and net"*

Both layers verified through the real renderer as **one voiced unit each with the constraint
inline**. ⚠️ **The remedy is deliberately "where your league permits checking" rather than the age
list**, because 604(a) continues *"A local governing body may prohibit body checking in any
classification"* — the age cut is not the whole rule.

⚠️ **It was found only because a new diagram was placed directly above it.** No checker can see it:
`check_absolutes` requires a book before a *cap*, and there is no cap here — just an absent scope.

---

## What shipped, by file, and who cleared it

| file | change | reviewer, none of them the author |
|---|---|---|
| `hockey-iq/risk_management.md` | the safety fix, both layers; `never-both-defencemen-to-the-puck` + `breakout-up` markers | `safety-reviewer` (found the critical); `commit-gate` re-derived 604 from `sources/usah.txt` |
| `systems/defensive_zone_coverage.md` | marker added, then **removed with its diagram** | `diagram-reviewer` ×2 |
| `systems/forechecking_systems.md` | `forecheck-angling` + `nz-1-4` markers | `diagram-reviewer`, `safety-reviewer` |
| `systems/offensive_zone_play.md` | `oz-post-shot-shape` + `pinch-centre-high` | `diagram-reviewer` |
| `systems/defending_the_rush.md` | the `nz-stand-up`/`nz-back-off` pair, moved to their shared heading | `diagram-reviewer` |
| `systems/neutral_zone_systems.md`, `technique/shooting.md`, `technique/skating.md`, `hockey-iq/playing_without_the_puck.md` | borrowed markers | `diagram-reviewer` (addressee test), `safety-reviewer` (`angle-into-the-corner`) |
| 5 × `site/src/diagrams/*.mjs` | 3 specs added, 1 added-then-cut, comments corrected | `diagram-reviewer` ×2 |
| `project/` | the D2/D3 vetting, the language-note decision, the Tier 0-R audit, six records of failed measurements | this record |

---

## The C11 answer, per file

- **`risk_management.md` — structural, and re-cleared.** The safety repair came *after*
  `safety-reviewer` finished, and the first attempt was itself defective. The final wording was
  re-derived from primary text by `commit-gate`, and both layers re-rendered. Clearance stands on
  that re-derivation, not on the original pass.
- **`defensive_zone_coverage.mjs` — void, and the work was cut.** The repair moved an anchor no
  finding named, so the clearance verified against the old one no longer applied. Re-reviewed, six
  majors, removed.
- **`forechecking_systems.mjs` — confined.** Caption rewritten to the geometry it actually draws;
  goaltender restored; two comments corrected. Each traces to a named finding.
- **All other files — confined**, markers only.

---

## Dimension coverage for this commit

This diff puts **13 newly voiced captions into 8 content documents**, so the spoken-layer dimensions
are live and the rest are declared, not silent.

| | |
|---|---|
| **D7** cardinal rule | ✅ every new and borrowed caption names its system, an alternative, and tells the reader to ask |
| **D8** numeric ownership | ✅ `oz-royal-road`'s 15.50% carries its owner's qualification into `shooting.md`; same for `faceoff-neutral-zone` and `nz-stand-up` |
| **D11** safety | ✅ `safety-reviewer`; found the critical above |
| **D12** the voiced layer | ✅ both fixed layers rendered through `md_to_speech` and read as units. ⚠️ **Re-run after the revert** — the first pass ticked this on a basis that was later reverted, and `commit-gate` caught that a chunk then ENDED on an unqualified *"Take the player or take the puck"* with the eligibility flag opening the next file. See *Propagation* below. |
| **D4** rules | ⚠️ **partial** — the only rules claim added is the 604 flag, re-derived by the gate. No `rules-verifier` ran. |
| **D13** provenance | ⚠️ **out of scope, declared** — this diff adds **no new citation or URL**. But see below: ten borrowed captions now voice their owners' figures in documents that never voiced them, and **nobody re-derived those for the move.** |
| **D1, D2, D3, D5, D6, D10** | out of scope — no rules text, no sources, no structural or cross-document reorganisation beyond marker placement |

---

## The diagram wave: 3 drawn, 10 borrowed, 4 declined, 1 cut

**Drawn:** `oz-post-shot-shape` (629), `forecheck-angling` (549),
`never-both-defencemen-to-the-puck` (753) — all well under the 1,280 median.

**Cut after two reviews: `dz-back-door-seam`.** Six majors, the sharpest being that the defenceman
was drawn **inside the crease** — 3.1 of the triangle's 5.4 ft in the blue paint, ink crossing the
goal line — and painted **over** the goaltender's letter. ⚠️ **That falsified a claim in
`rink.json`'s own `goalmouth` comment: *"no skater in the corpus is actually drawn in the paint on
them."*** The `dy` cleared the anchor and never cleared the ink.

**The decisive argument was not any single defect:** the section's four bullets are eyes, a stick, a
winger's sag and a voice call — **of which this notation can draw exactly one, and the diagram
omitted that one.**

**Four declines, each argued:** a 3-on-1 whose prose commits to no formation; a `skating.md`
Overview that would duplicate an instruction already drawn nearby; `nz-1-3-1`, caught by the new
addressee rule **on its first application**; and `cross-ice-in-your-own-end`, overturned because its
caption opens *"the cross-ice pass **this section** tells you not to make"* while that section calls
it a legitimate designed option.

---

## Six of my own measurements or proposals were wrong

Every one caught by an agent re-deriving rather than accepting. **In each case the corpus was right
and my account of it was wrong.**

| claim | truth | the proxy I counted |
|---|---|---|
| 305 markers | 304 | `grep 'diagram:'` matched prose |
| strong-side ×4, high/low ×3 | ×7, ×5 | bolded spans; two bolding families |
| no sibling has a goaltender | **8 of 9 do** | segmented on `id: '` — 89 player ids |
| *"skates parallel"* at 109 sites | **87**, 99 with captions | changed denominator mid-clause |
| move the D to (80,−5) | **4.24 ft** from the attacker | would have drawn a triangle through a circle |
| aim the pass at (82.6,−1.3) | **4.59 ft** from the goalie | worse than the 7.28 ft defect it fixed |

**The rule: a census whose result surprises you is a census to re-derive before reporting.**
*"0 of 9"* and *"0 of 286"* are the shape that should trigger it. And **a reviewer's proposed fix is
a hypothesis too** — finding a defect and computing its repair are different acts.

---

## What this round has not done

⚠️ **THE SITE WAS NEVER SEEN.** Chrome refused every navigation for the entire session, including to
`example.com`. **13 new figures across 8 pages ship verified in built HTML and never in a browser** —
including whether the two paired neutral-zone diagrams read sensibly stacked, given both captions say
*"the diagram beside it"*, which the speech layer cannot honour at all.

⚠️ **TEN BORROWED CAPTIONS NOW VOICE THEIR OWNERS' FIGURES IN DOCUMENTS THAT NEVER VOICED THEM, AND
NOBODY RE-DERIVED THEM FOR THE MOVE** — `nz-stand-up`'s *"roughly twice a dumped one"*,
`angle-into-the-corner`'s *"twenty-two degrees… about fifty"* and its cervical-spine claims,
`faceoff-neutral-zone`'s Swiss tracking. They were correct in their owner as far as anyone knows,
**and that assumption is exactly what round 53 measured and found wrong.**

⚠️ **THE OTHER CONTACT VERBS ARE UNSWEPT.** The safety pass swept *"take the body"* — five sites,
three flagged, two not, both fixed. **~150 sites of *pin*, *box out*, *seal*, *rub out*, *angle off*,
*finish your check* across 20 documents were never read.** And one pre-existing instance of the
identical layer defect is already known: `body_contact_and_battles.md:455`'s *"Technique: Play the
body, not the head"* is voiced alone with its eligibility flag three units and two breaks earlier.

**No `rules-verifier` and no `source-verifier` ran.** No citation was refetched by anyone this round.

**The three new diagrams were verified to draw no contact BECAUSE THEIR CAPTIONS SAY SO.** Nobody
opened the built SVGs for two of them. `dz-back-door-seam` was drawn, reviewed, repaired, and *only
then* found to have a defenceman in the paint — by a human comparing coordinates, not by a checker
and not by reading a caption. `never-both-defencemen-to-the-puck`'s clearances were computed **in a
comment by the agent that drew them** and checked against nothing.

**And a tooling gap:** `build-diagrams.mjs` never prunes a deleted diagram's output. The cut SVG
survived a full rebuild and Astro had copied it into `dist/` — **a diagram cut for being wrong stays
served.** Removed by hand; no `--prune` exists.

---

## Added after this record was first written — the goalmouth anchor, and a figure wrong in both directions

The line above, *"`defensive_zone_coverage.mjs` — void, and the work was cut"*, was true when
written and is now **superseded**. That file has since had a real repair, reviewed separately.

**`D_GOALMOUTH`, shared by four diagrams, was overlapping the crease — and every figure previously
recorded for it was wrong, including the one in this record.**

Re-derived two independent ways that agree to three decimals — exact point-to-segment geometry, and
brute-force sampling of `rink.mjs`'s own `glyphCovers` over the crease region:

| Measure | Previously recorded | True, at the original `dy:-6` |
|---|---|---|
| Halo | 0.21 ft (a sweep), then 0.939 ft (a re-derivation) | **0.628 ft overlap** |
| Body | *"0.04 ft of daylight"* (`rink.json`'s own note) | **0.028 ft OVERLAP — it never had daylight** |

⚠️ **The mechanism is the same one that put a defenceman in the crease earlier this round: measuring
to the wrong point.** The triangle's nearest point to the crease centre is **not its apex** — it is
15% of the way down the apex-to-base edge. The apex measure gives 6.436 ft where the truth is 6.372.
**Three separate figures were produced for this one clearance and all three were wrong**, in both
directions and by both signs.

**And the obvious fix would have made it worse.** The `BACKDOOR`/`NET_FRONT` precedent is to shift
`dx`. Here that walks the glyph into `OPP_NETFRONT` at (76,−6) — which was **already overlapping by
0.596 ft of halo at the original position, undocumented anywhere.** `dx:-3` clears the crease by
0.374 ft and blows the netfront overlap out to 1.479 ft. The two constraints pull opposite ways along
x, so the fix is in y: **`dy:-6` → `dy:-8`**, x unchanged, clearing crease halo by 0.418 ft and
netfront halo by 0.387 ft. All four captions re-read individually; the glyph still reads as net-front
coverage, not corner or point.

`rink.json`'s `goalmouth` comment has been corrected to carry all of this, including that it was the
note's own figure that was wrong.

**Not done, and declared:** the rendered SVG has not been reviewed by eye for this anchor, and
`placeLabels` has not been checked for a label collision at the new position — neither is visible to
`check_geometry.py` or `check-arrivals.mjs`. The three other `goalmouth`-anchored constants in that
file (`BOX_LOW_R/L`, two inline uses in `overload`) were **not** measured.

## One finding in this record is under re-examination

This record treats the `offensive_zone_play.md` "seal" repair as a **critical** on the ground that no
rulebook draws a seal/pin distinction. That premise is now in doubt and is being verified:

- `grep -ril seal sources/` returns **one** file, `sources/bvhs.txt` — a goalie coaching guide, not a
  rulebook. "Seal" has no rulebook standing in either direction.
- **"Pin" does:** IIHF 101.1's *"pin her along the boards"*, and Hockey Canada's *"Pinning"*.
- Hockey Canada **Interpretation 3 to Rule 7.5(a)** expressly *permits* pinning: *"Pinning a player to
  the boards at low speed and with minimal impact is permitted, even if contact is initiated from
  behind (except under Rule 7.3 – Body-checking, as applicable)."*

If that holds, the distinction is better founded than this record judged, and a **separate** defect
exists in the opposite direction — `body_contact_and_battles.md:978` calls "pin the puck, not the
player" what *"keeps the contact legal in every league"*, which Hockey Canada contradicts. Tracked as
**T0-P1/T0-P2** in `OPEN_ITEMS.md`. **The repair itself stands either way** — making the wall the
grammatical object is correct under every book. What is in question is the reason recorded for it.

### RESOLVED, same day, by `rules-verifier` against primary text

**The critical does not need retracting. Its RATIONALE does.** The books do not draw a seal/pin
distinction — they cannot, having no word "seal". **They draw path vs body**, and all four write the
affirmative permission with the opponent's PATH as the object, never the body:

| Book | Wording |
|---|---|
| NHL 56.1 | *"entitled to use his body position to **lengthen an opponent's path to the puck**"* |
| IIHF 56.1 | *"use their 'body position' to **lengthen an opponent's path to the puck**"* |
| USA Hockey | *"**to force an opponent to take a less direct route to the puck**"* |
| Hockey Canada Interp 1 to 7.3(a) | *"may **steer or direct** an opposing player into the boards, **without actually touching or body-checking them**"* |

So the repair landed on the line the books DO draw, via a word they do not use. **It was correct for a
better reason than was given.**

**And the coordinator's Question-2 premise was REFUTED.** I briefed that Hockey Canada writes no
legal-competitive-contact counterpart to USA Hockey 604. **It does** — Rule 7.3's own preamble, two
lines above 7.3(a): *"Body contact is incidental contact of two opposing players in pursuit of the
puck on the ice in the same direction. If, in the opinion of the Referee, incidental contact has
occurred, no penalty will be assessed."* That was **a false negative existence claim in a brief** —
the class CLAUDE.md names as unfalsifiable by ordinary review. **Eighth measurement failure by the
coordinator this session.** The *direction* held: Hockey Canada is narrower in permission
(*"incidental"*, *"same direction"*) and wider in penalty (four verbs — *"body-checks, bumps, shoves,
or pushes"* — where 604(c) writes only *"body checks"*).

⚠️ **`body_contact_and_battles.md:1483` already carries this divergence correctly and in full** and
was declared not to be touched.

---

## What THIS commit ships, by file — added to satisfy C8 after `commit-gate` blocked on it

⚠️ **This record was headed *"On commit `6d9562c`"* and its original per-file table describes that
earlier commit.** `commit-gate` blocked because the record named **three of thirteen** staged files.
The table below covers the commit made on `4e80e54`.

| File | What changed | Cleared by |
|---|---|---|
| `content/systems/offensive_zone_play.md` | Three "seal" sites made to take **the wall** as object (`:817`, `:828`, `:867`); **and `:867`'s "with your position and stick" corrected — see below** | `rules-verifier`, then `commit-gate` on the stick limb |
| `content/positions/goaltender.md` | ⚠️ **This row described superseded text and is corrected.** `:1137` does NOT scope the box-out to Competitive Contact — the shipped line says the box-out **needs no checking league**, and that walking a player off an established spot *"is a push — a checking league does not make it free."* `:1150` replaces a Hockey Canada misquote (*"incidental"* dropped) with NHL/IIHF 56.1, adds USA Hockey 625(a)(4), and gives 604(a)'s age list its own floor-not-ceiling continuation | `rules-verifier`, `safety-reviewer`; **the 625(a)(4) wording re-derived from `sources/usah.txt:4469` by `commit-gate`** |
| `content/systems/defensive_zone_coverage.md` | `:452` (facts, voiced alone) now carries the counterweight *"and a checking league does not make it free"*, matching `goaltender.md:1137`. ⚠️ **The previous row credited this file with a sentence that is in `goaltender.md`, not here.** `:461`'s pointer said *"Moving the screen **above**"* for a section eight lines **below**, and claimed it *"carries the citations"* when it carries only the no-checking-league half; both corrected | `rules-verifier`; contradiction found by `commit-gate` **through the renderer**, not by grep |
| `content/technique/body_contact_and_battles.md` | `:458`/`:461` inline eligibility flags; provenance corrected at `:708`, `:1544` and in the Sources trailer | `facts-reviewer`, `source-verifier` |
| `content/technique/skating.md` | ⚠️ **Corrected:** the mechanism was ALREADY at HEAD. What this diff adds is the provenance — *"citing a six-patient case series"* — matching its owner at `body_contact_and_battles.md:704`, with *"almost all"* credited to USA Hockey rather than to the paper | `safety-reviewer`; provenance verified against `sources/huh.txt:225-233` by `commit-gate` |
| `site/src/diagrams/defensive_zone_coverage.mjs` | `D_GOALMOUTH` `dy:-6` → `-8` — see the goalmouth section above | dedicated agent + `commit-gate` re-derivation |
| `site/src/diagrams/goaltender.mjs` | `BACK_DOOR` `dy:-7` → `-9` (1.150 ft clearance); stale header note about a fixed renderer bug corrected | `diagram-reviewer` |
| `site/src/diagrams/special_teams.mjs` | `BACKDOOR` `dx:-3` → `-4` | `diagram-reviewer` |
| `site/src/diagrams/body_contact_and_battles.mjs` | Markers only | — |
| `site/src/data/rink.json` | `goalmouth` `$comment` rewritten to record that **its own figure was wrong**; the false line *"no skater in the corpus is actually drawn in the paint"* removed | `commit-gate` re-derived every figure |
| `site/src/data/diagrams.json` | Build product of the above | rebuilt, 11 steps, `check-links` line present |
| `project/plans/OPEN_ITEMS.md` | T0-P1…T0-P6 opened; **the Hockey Canada 604-counterpart row retracted** | `commit-gate` (B3) |
| `project/reviews/round_68…md` | This record | — |

### A defect `commit-gate` found in this round's own repair

⚠️ **`offensive_zone_play.md:867` was repaired into a second, smaller version of the defect it was
repairing.** The new sentence read *"you may seal the wall — not the player's body — **with your
position and stick**."* NHL and IIHF Rule 56.1 grant that entitlement expressly **withholding** the
stick: *"provided his stick is not utilized (to make himself 'bigger' and therefore considerably
lengthening the distance his opponent must travel to get where he is going)."*

**The proviso was in the corpus the whole time** — `breakouts.md:151` carries it in full and draws
the practical conclusion (*"a stick stuck out sideways across the slot is interference even though
your feet never moved"*), and `body_contact_and_battles.md:341` and `:1160` quote it. `:867` now
carries it and links to `breakouts.md`.

⚠️ **Note the shape, because it is this round's third instance:** the repair was written from the
half of the rule the review had quoted. `rules-verifier` quoted 56.1's **permission** limb and not its
**proviso**, and the repair inherited exactly the sentence it was shown. **A verified quotation is not
a verified rule.**

### Declared not done

- **No human or browser has seen these six diagrams rendered.** `commit-gate` closed the
  label-collision half numerically — nearest foreign label ≥ 6.95 ft at all three moved glyphs — but
  Chrome refused every navigation this session. ⚠️ **This round's own record documents a defenceman
  drawn in the crease that was found by a person comparing coordinates and by no checker.**
- Three `goalmouth`-anchored constants (`BOX_LOW_R/L`, two inline uses in `overload`) unmeasured.
- Pre-existing facts-layer defects confirmed in two staged files (`body_contact_and_battles.md:967`,
  `:968`; `defensive_zone_coverage.md:559`, `:594`) are **outside every staged hunk**, recorded as
  T0-P1, and not fixed here.

### The two shared tools in this commit — added after `commit-gate` blocked a second time on C8

| File | What changed | Measured against | Cleared by |
|---|---|---|---|
| `scripts/md_to_speech.py` | `spoken_text`'s default `doc_id` was `path.stem`, which can never match `_diagram_is_away`'s `owner.replace("/", "__")`. Added `_doc_id_for(path)` mirroring `discover()`. | `zone_entries.md` (16 diagrams, all its own): default gave **16 borrowed / 0 native**, now **0 / 16**, identical to the explicit `doc_id`. | `commit-gate` re-ran it independently, confirmed `_doc_id_for` mirrors `discover()` at `:3608`, and confirmed the only other `.stem` is the new helper's own fallback |
| `scripts/check_pointers.py` | Table-pointer patterns gained an optional modifier slot — they required *"the table below"* adjacent, so any modifier defeated them. | Hits **4 → 7**, catching all three sentences that point at a table the renderer drops. | `commit-gate` confirmed the regex can widen only by one lowercase word, that no `--strict` exists, and that over-match costs a read rather than a false gate |

**Known limits, declared:** `_doc_id_for` uses the *first* `content` path segment, so an absolute path containing an earlier directory named `content` would mis-derive — noted by `commit-gate`, not fixed, not reachable from any current call site.

### ⚠️ THE SAME FAILURE, FOUR TIMES IN ONE ROUND — this is the round's real finding

Each repair in this round was written from **the half of the rule its reviewer had quoted**, and each
inherited that reviewer's framing rather than the book's:

1. The original defect: *"find a body, not the puck"*, written from a coaching formula.
2. The `offensive_zone_play` repair: drew a seal/pin line **no book draws**, because the brief posed
   the question in those words.
3. The stick limb: *"with your position and stick"* — the reviewer had quoted 56.1's **permission**
   and not its **proviso**, and the repair granted what the unquoted half withholds.
4. ⚠️ **The repair of (3), written from the text `commit-gate` quoted in its own block.** The gate
   supplied the **NHL's** wording; the sentence went out as *"NHL and IIHF Rule 56.1 grant…"*. **No
   IIHF edition on disk prints those words** — all three are gender-neutral (*"provided **their** stick
   is not utilized (to make **themself** 'bigger'…)"*), and `"provided his stick is not utilized"`
   returns **zero** in every one.

⚠️ **`content_style_guide.md:151` already records this exact class**, about a paragraph that *"used to
quote the IIHF's wording while attributing the row to both books, which is the exact hazard the
paragraph below it forbids, in the file that forbids it."* **Same divergence — pronouns — same
direction, one round later.**

**The generalisation: a verified quotation is not a verified rule, and a quotation verified in ONE
book is not a quotation in TWO.** The gate that caught (3) caused (4) by quoting accurately and
attributing loosely, and the record then reproduced the joint attribution in its own account of the
defect. **Nothing mechanical can see this** — `check_facts` reads length and label, `check_absolutes`
reads scope words, and neither compares a quoted string to the book it is credited to.

**Left open, deliberately:** `breakouts.md:151` quotes the NHL's masculine proviso under a bare
*"Rule 56.1"* while distinguishing NHL from IIHF explicitly for 56.5 in the same bullet. Pre-existing
and outside this diff — but `:867` now points a reader at it, so `:867`'s pointer was worded to claim
only that the proviso is set out in full, not that both books' wording is. Tracked as T0-P10.

---

## The independent safety review `commit-gate` demanded — and the critical it found

`commit-gate` blocked twice and noted that **no independent reviewer had seen the repaired `:867`
sentence**. `safety-reviewer` was dispatched on it. Findings, all verified against primary text on disk
and then re-verified by the coordinator before acting:

**GOOD NEWS FIRST: the IIHF claim I staged as unverified is TRUE.** All three limbs, identical across
four IIHF editions (`iihf_rules.txt:4687`, `v1.0:4688`, `v1.1:4687`, `2026-27:4776`):
*"provided their stick is not utilized (to make themself "bigger"…); their "free hand" is not used, and
they do not take advantage of their "body position" to deliver an otherwise illegal check."*
**Failure (4) did not recur.**

### CRITICAL — USA Hockey protects the battle, and this document did not know

⚠️ **The staged sentence granted a permission for the exact fact-pattern USA Hockey singles out as
protected.** USA Hockey Rule 640(e) (`sources/usah.txt:5123`):

> *"A minor penalty shall be assessed to any player who delivers a body check to an opponent who is
> physically engaged for possession of the puck with one or more other players. **(Note)** When two or
> more players are physically engaged for possession of the puck they are considered vulnerable or
> defenseless and are **not eligible to be body checked**."*

and its Declaration of Player Safety (`sources/usah.txt:332`): two or more players engaged along the
boards *"are considered to be vulnerable or defenseless"*, and a check on one *"is considered dangerous,
careless or reckless (unacceptable) and must be penalized accordingly."*

⚠️ **640(e) carries NO adult-male exception**, where 640(b) — the only USA Hockey limb this section
cited — does. So the document's entire USA Hockey passage missed the one rule that reaches adult men.
**`"640(e)"` and `"physically engaged"` appeared ZERO times in `offensive_zone_play.md`. Seven other
documents carry them.** The corpus knew this rule; this document did not.

**Why no reviewer found it before:** the section heading is *"The defenceman's pinch"*, which gives
nobody a reason to look for a rule about third-man arrivals. `safety-reviewer` found it only by reading
Rule 640 sequentially and noticing (e) beside the (b) the corpus already cited — and said so: ⚠️ *"A
hazard whose rule number is not adjacent to one the corpus already cites is invisible to this method."*

### Three more defects, all in text written TODAY — the fifth, sixth and seventh iterations

- ⚠️ **`"not the player's body"` was attributed to NHL 56.1, which does not say it.** The restriction
  comes from IIHF 101.1 (women's) and USA Hockey's competitive-contact framing — both quoted nine lines
  above at `:858`. **Fifth iteration, opposite direction to the fourth:** repair 3 gave IIHF wording to
  the NHL; this gave an IIHF women's limb to NHL 56.1. **It survived because the quotation beside it
  was correct.**
- ⚠️ **`"at a net front it is usually the free hand that gets called"` was FOLKLORE I introduced into a
  safety callout** — non-negotiable 2. No book, casebook or standard-of-play document on disk ranks the
  three limbs. **And it pointed at the wrong penalty:** NHL 56.1's own *Free Hand* paragraph
  (`nhl_rules.txt:6306`) directs free-hand restraint to be called as **holding**, and expressly permits
  the free hand *"to 'fend off' an opponent or his stick"*. **Cut.**
- **`"lane"` was doing two jobs 65 lines apart.** Facts `:802` says *"Stick in the passing lane before
  your feet commit"*; the body said a stick across the lane is interference. Neither unit distinguished a
  **puck** lane from an opponent's **path**. ⚠️ **A reader resolving that the wrong way withdraws the
  legal stick and is left with only the body — in the play where contact is most dangerous.** Now stated
  by what the stick is doing, not where it is.

### And a shed qualification in the summary layer, 44 lines from its correct version

`:1058` (*Check yourself*) asked what getting it wrong costs and answered *"the answer is not a minor."*
**False under two of the four books** — USA Hockey 608(a) and Hockey Canada 7.5(a) both write one.
`:1014` in the **same document** has it right: *"no book lets this one cost you two minutes and nothing
else… do write a minor, but never a bare one."* ⚠️ **The false version is what is left when *"and nothing
else"* is dropped** — the same shape as commit `89b989e`, *"Retract a penalty-floor generalisation four
rulebooks contradict."* Corrected to *"never a bare minor, and under two of the four books not a minor
at all."*

### Propagation — ⚠️ THIS SECTION DESCRIBED WORK THAT WAS LATER REVERTED. Corrected.

**It used to say** that `Priority:` read *"take the player, never one already in a battle for it (USA
Hockey 640(e))"* at 196/200, that `:1013` was corrected with it, and that the layer test passed on
FACTS `:803` · BODY `:867` · SUMMARY `:1013`. ⚠️ **None of that shipped.** The 640(e) material was
reverted with the rest of the apparatus, and this section was not updated to say so. `commit-gate`
caught it on the fourth pass and noted that `review_history.md` is reconstructed from these records —
so as written it would have recorded a propagation that did not happen.

⚠️ **And the revert OVERSHOT, which the same pass caught.** The 640(e) material genuinely did depend on
the reverted body passage. **The eligibility scope did not**, and it went out with it: `:828` shipped
*"where your league permits body checking"* while `:803` and `:1013` went back to HEAD's unconditional
*"Take the player or take the puck."* **The body gained a scope its two summary layers lost, in one
diff** — round 10's shape exactly.

⚠️ **Measured through the real renderer, not reasoned about:** `077.ssml` **ended** on *"Priority. Take
the player or take the puck…"*, with the eligibility flag opening the **next file**, `078.ssml`. A
listener would have finished an audio chunk on an unqualified instruction to take a player's body.
`OPEN_ITEMS.md:6583` rates that exact line **critical** — *"the largest gap the pipeline can create"* —
and four of the five rows in its table ship fixed here. **The one its own record calls worst was the one
the revert broke.**

**What actually ships:** `:803`, `:828` and `:1013` all carry *"where your league permits body
checking"*. `Priority:` is 153/200; the block stays at 11 = `HARD_MAX` with no line added.

**Layer test, re-run on the staged tree: FACTS `:803` ✓ · BODY `:828` ✓ · SUMMARY `:1013` ✓.**

### ⚠️ The process catch that mattered most

`safety-reviewer` noticed that **the working tree and the index had diverged** on this file — `git diff`
showed 1 line changed, `git diff --cached` showed 5. **The index still held the version carrying failure
(4)**, the masculine NHL wording attributed to both books. **Committing at that moment would have shipped
the defect that had just been retracted, and no checker could have seen it** — `check_facts` and
`check_links` read the working tree; the hook gates on those same checkers. It was caught by a reviewer
running `git diff` as a matter of habit, which is precisely the defence CLAUDE.md names and the only one
there is.

---

## ⚠️⚠️ THE REPAIR APPARATUS WAS REVERTED AFTER NINE ITERATIONS. THIS IS THE ROUND'S FINDING.

`offensive_zone_play.md:867` was rewritten **six times in one session**. Every rewrite fixed the
defect named and introduced a new one:

| # | The repair | The defect it introduced |
|---|---|---|
| 1 | *"find a body, not the puck"* → seal/pin | A seal/pin distinction **no rulebook draws** |
| 2 | → *"seal the wall… with your position and stick"* | **Granted the stick**, which NHL/IIHF 56.1 withholds |
| 3 | → quoted the proviso | Quoted the **NHL's masculine wording** and credited it to *"NHL and IIHF"* |
| 4 | → split the attribution | Attributed *"not the player's body"* to **NHL 56.1, which does not say it**; invented *"usually the free hand that gets called"* — **folklore in a safety callout** |
| 5 | → added USA Hockey 640(e) | Hung 56.1's proviso on **the wrong one of its grants** |
| 6 | → *"56.1 writes TWO grants"* | **It writes THREE**, and **two** are conditional |

Then three independent reviewers — `rules-verifier`, a fresh `safety-reviewer`, `content-reviewer` —
found roughly fifteen more in the result, including: the **restraint limb** (*"A player who is behind
an opponent, who does not have the puck, may not use his stick, body or free hand in order to restrain
his opponent"*) omitted although the section's own fact pattern satisfies both its triggers; a pointer
crediting `breakouts.md` with a rule it does not hold; a rule number cited with **no book named**; an
uncited *"passing lane"* legality claim; and **three sentences addressed to an editor rather than a
player** (NN6) — one of them *"get them the wrong way round and you will withdraw a legal play"*, which
is what a referee does, not a player.

### The decision

⚠️ **Everything added to `:867` today was reverted.** What ships is the **minimal** change: the
grammatical object of "seal", exactly as at `:817` and `:828`. `offensive_zone_play.md` is now
**6 insertions / 6 deletions** against HEAD. ⚠️ **This line said 4/4 and was stale** — it was written before the C7 repair restored the eligibility scope to `:803` and `:1013`, and was not updated when that repair was recorded forty lines above. `commit-gate` caught the record contradicting itself inside one file, for the third time this round.

⚠️ **Reverting to HEAD wholesale was NOT an option and was checked** — HEAD reads *"you may use your
body to **seal them against the wall**"*, which is the defect the round exists to fix.

**Why revert rather than patch again.** Nine iterations, nine new defects, and the last three were
found only because three reviewers were run in parallel on one paragraph. **The additions were the
defect source; the pre-existing late-hit treatment verified clean** — `rules-verifier` checked all 21
quotations in it character-for-character and found none wrong. **Removing my additions removes six
defects and restores no new ones**: the 640(e) omission it leaves behind is *pre-existing*, recorded,
and older than this session.

⚠️ **The structural diagnosis, which all three reviewers reached independently and which no patch can
satisfy:** the subsection is doing two jobs — *when to pinch* and *what four books allow on arrival* —
its facts block is at **11 = `HARD_MAX`** with no room for the missing rules, and `:867` is
**5,867 characters of which roughly 700 tell a player what to do.** It needs splitting, and a section
split is not a thing to do at a commit gate. Tracked as T0-P15.

**What this cost and what it bought.** The round ships a smaller change than intended. It also
produced the clearest evidence in this project's record that **a paragraph can be repaired past the
point where repairing it is the right move**, and that the signal for that is not the size of the
defect but the *rate at which repairs introduce new ones*.

---

## C11, answered for THIS commit, per file

⚠️ The earlier *"C11 answer, per file"* section answers for commit `6d9562c` and ends *"All other files
— confined, markers only."* **That is not true of this diff**, which changes five content claims.
`commit-gate` blocked on the gap. Answered here.

**The question C11 asks: is every changed claim traceable to a named finding, and who verified the
wording that actually ships?**

| File | Changed claim | Traces to | Who verified THE SHIPPED WORDING |
|---|---|---|---|
| `positions/goaltender.md` | `:1137` the box-out needs no checking league, but walking a player off an established spot is a push that a checking league does not license; `:1150` HC misquote replaced, 625(a)(4) added, 604(a) given its floor-not-ceiling continuation | The *"incidental"* misquote finding; the *"needs a checking league stated as sufficient"* finding | `rules-verifier` and `safety-reviewer` on the substance; ⚠️ **`commit-gate` re-derived 625(a)(4), NHL/IIHF 56.1's lateral limb and 604(a)'s continuation from `sources/` against the STAGED text on pass 5** |
| `systems/defensive_zone_coverage.md` | `:452` counterweight added; `:461` pointer direction and citation scope corrected | ⚠️ **A contradiction this diff CREATED** — `:452` and `goaltender.md:1137` said opposite things about the same act, each voiced alone | `commit-gate` pass 5, **through the renderer**; the fix uses `goaltender.md:1137`'s already-verified formulation |
| `systems/offensive_zone_play.md` | `:817`, `:828`, `:867` — grammatical object of "seal"; `:803`, `:1013` — eligibility scope; `:1058` — penalty floor | The seal critical; the round-10 propagation gap; the *"not a minor"* falsehood | `rules-verifier`, `safety-reviewer`, `content-reviewer` reviewed the **superseded** long version — ⚠️ **what ships is SHORTER than what they reviewed**, being HEAD's text plus one clause. `commit-gate` verified the shipped wording on passes 4 and 5, including the layer test through the renderer |
| `technique/body_contact_and_battles.md` | `:458`/`:461` eligibility flags; provenance at `:708`, `:1544`, trailer | The inline-flag finding; the provenance finding | `facts-reviewer`, `source-verifier`; `commit-gate` verified both `sources/ibc.txt` orderings on pass 5 |
| `technique/skating.md` | `:110` provenance — *"citing a six-patient case series"* | The unqualified-mechanism finding | `safety-reviewer`; `commit-gate` verified against `sources/huh.txt:225-233` on pass 5 |

⚠️ **The honest weakness, stated rather than hidden:** for `offensive_zone_play.md` the three
independent reviewers read a version that was then reverted. **Nobody but `commit-gate` has reviewed
the wording that ships** — and what ships is HEAD's own sentence with one clause changed, which is why
that is acceptable here and would not be for new prose.

⚠️ **And `defensive_zone_coverage.md:452`'s contradiction was created by this diff and caught on the
fifth pass** — by rendering both files and reading the two voiced units side by side. **No checker can
see this**: `check_facts` validates each line alone, and the two lines live in different files.

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
| **D12** the voiced layer | ✅ both fixed layers rendered through `md_to_speech` and read as units |
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

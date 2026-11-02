# SG149: size and speed ramps become Progression lists, side dangles gain eyes closed, side-markers slalom walked both ways (2 November 2026)

**Files:**
- content/off-the-ice/practising_on_your_own.md (§3 and §4 drill cards)
- site/src/drills/01_one_foot_edges.mjs, 02_one_foot_jumps.mjs, 03_mohawks_starts_two_foot.mjs, 05_turns_b.mjs, 07_off_ice_stick.mjs (export cards; dangle, slalom and crossing-under lemons labels and descs)
- site/src/data/drills.json (rebuilt by build-drills: 72 drills)
(The plan update for this change ships with SG150, which shares project/plans/OPEN_ITEMS.md.)

## Owner answers (2 November, in session)
- To the questions after SG148, the owner answered "1, yes, 2, yes, 3 yes":
  1. Size and speed ramps such as lemons small then wide, small jumps first and slowly at first also become Progression lists.
  2. Dangles on your left/right get the eyes-closed stage.
  3. Straight line keeps the toe-lift wording.
- To the four remaining questions:
  - The side-markers slalom is walked "Yes, both ways".
  - The side dangles "Keep" top hand only.
  - The four-marker figure of 8 is "One loop per pair".
  - The ~30° slalom pulls are "About right".

## What changed
- **Progression lists:** the following cards now have a **Progression:** list after the drawing:
  - lean-and-glide arcs; small figure of 8 on the outside edge;
  - one-foot jump to the other foot; stepping mohawks;
  - forward and backward crossovers; crossing-under lemons forwards and backwards;
  - punch-turn steps 1 and 2 (one sentence each).
- **Cautions stay in the steps:** where a ramp is also a caution, a short version stays early in the steps so it reaches the reader before the hard version:
  - "Start slowly, on wide arcs."
  - "Go slowly, on big circles."
  - "Start slowly."
  - "Check behind you, then start slowly"
  - mohawk: "once you can do the switch as two quick steps"
  
  The one-foot jump relies on the jumps section intro ("start with small jumps"), like its three sibling jump cards.
- **Forward crossovers:** stage 2 is "A little faster, still placing each crossing foot", and the common mistake is now "rushing it before each crossing foot lands cleanly", so the two agree.
- **Dangles on your left/right:** stage 4 is "Eyes closed, both hands". The drawing's progression label moved to the empty top corner.
- **Walking slalom:**
  - The Variations line adds forwards and then backwards, and "Check the floor behind you before you walk back".
  - The desc and check note say the backward walk of the variation is not drawn.
- **Crossing-under lemons drawings:**
  - A "progression:" heading over "small" and "wide".
  - Badge 4 moved off the wide lemon, so it no longer reads as "go wide".
- **Export cards:**
  - 07 and 08 match the page exactly.
  - 01–05 match wherever this change touched them. Earlier differences remain and are not in scope.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | SHIP. Every caution precedes its hard version in voiced order; eyes-closed side dangles are stationary; the floor check precedes backward walking. Minor: crossover "Faster" against "rushing it" (fixed) |
| content-reviewer | Major: crossover stage 2 contradicted its common mistake (fixed). Minors: the "(see Progression)" pointer was clutter and inconsistent (removed); backward-crossover check-behind displaced (restored first); punch step 1 "slowly" vs stage "add speed" (single-sentence progressions); "Wide ones."; slalom line length. All fixed. No ramp missed; Copenhagen deliberately not a Progression |
| diagram-reviewer | No critical or major. Minors: the slalom desc claimed an undrawn backward walk; the lemons label tied rolling to the wide stage. Both fixed |
| safety-reviewer (narrow, repairs) | SHIP. No caution lost; the jump card is safe on the section intro (chunk 007 vs 008, same as its siblings) |
| diagram-reviewer (narrow, repairs) | PASS on all items. Optional: "wide" sits ~4 units below an IN tag; four cards say "slowly" in step 1 and in stage 1 (kept, because the step-1 cue is the caution) |

No rules content.

### C11
The one authoring agent made every edit; the coordinator wrote the plan and this record.

Checks after the last edit:
- The full `npm run build` with the absolute binary ran after every SG149 and SG150 edit.
- check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets exit 0.
- check_marker_pairs: 0 LOST.
- check_counts --update matches.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 | Out of scope, declared: no rule, citation or URL |
| D5 Provenance | Owner answers quoted above |
| D6–D8, D10, D13 | None touched |
| D7 Cardinal rule | Page's "coaching craft" lines unchanged |
| D9 Summary layer | content-reviewer layer test: Key focus, §2 and KT4 agree |
| D11 Reader safety | safety-reviewer, two passes, rendered |
| D12 Read-aloud | Rendered through md_to_speech by both safety passes and the content review |
| D14 | check_links and the build's check:links |
| D15 | Drawings rendered at full and ~340px by diagram-reviewers; the page layout is unchanged in kind from SG148's site review (declared, no new site-reviewer pass) |

## What this method could not have found
- Whether a beginner hears the jumps intro as covering a card two to four cards later.
- Whether "lands cleanly" and "feels solid" are tests a young player can apply.
- The new drawings on a real phone or in dark mode.

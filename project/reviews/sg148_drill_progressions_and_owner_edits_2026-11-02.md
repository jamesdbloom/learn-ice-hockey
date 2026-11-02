# SG148: progressions and variations made clear on every drill card, three cards removed or replaced, forehand and blade corrections (2 November 2026)

**Files:**
- content/off-the-ice/practising_on_your_own.md (Overview line, §3 punch turn and single-leg balance progressions, §4 throughout, §5 single-leg balance, Common Mistakes head-down bullet)
- site/src/drills/05_turns_b.mjs (punch-turn card: progression field, "at stick-and-puck" restored)
- site/src/drills/07_off_ice_stick.mjs (cards, drawings and descs; three drills removed, one replaced)
- site/src/drills/08_off_ice_exercises.mjs (single-leg balance card and drawing)
- site/src/data/drills.json (rebuilt by build-drills: 72 drills)
- project/plans/OPEN_ITEMS.md

## Owner instructions (2 November, in session, verbatim)
1. "lets make is clearer for drills when there are multiple variants such as Dangles in front that there are multiple variants first eyes open looking at the puck, next eyes open head up, next top hand only, next eyes closed, we could suggest a good routene to work towards is head up both hands, head up top hand only, eye closed both hands.  I would like it clearer for all drills when there is a progression or multiple variants"
2. "Lets remove Toe drag in and out as it is already covered by V-shape and Straight line, heel and toe.  lets make Straight line, heel and toe clearer that we are always using our forehand for this drill when pushing and pulling the puck, same for the V-shape we should say we're always using our forhand never the backhand"
3. "For the L-shape we stop the puck when we pull the puck across with our normal forhand or backhand and not a diagonal blade, when we pull the puck across and stop it (before pulling it down) the blade is verticle not diagonal as shown, then when we pull the puck down the blade is horizontal"
4. V-shape, answering how forehand-only works on the wide V: "It is easy to keep the puck on the forehand only by rolling you wrist a little and lifting the head of the blade up like for all toe drag actions, this is a key part of the drill, we need to also focus on sliding the bottom hand on the stick"
5. "for Wall passing we should replace this with Rebounder passing, we should do this on our four hand until we get 20 nice passes in a row and then switch to our backhand until we get 20 nice passes in a row.  We should make sure we emphasis catching the puck cleanly and softening the rebound by having our blade infront and pulling it back as the puck hits the blade.  The aim should be for the puck to be as quiet as possible when we catch it with our stick of the rebounder. Lets remove Shooting off a pad we're doing stick handling drills not shooting drills."
6. "for dangling in front lets make sure we make a point about rolling your wrist so that the blade is always closed for both the forhand and the backhand and to avoid chopping but instead try to dangle as quietly as possible"

## What changed
- **One label, one place:** cards with ordered, harder stages carry **Progression:**, and cards with alternatives carry **Variations:** (walking slalom only). Each sits after the drawing and before Common mistake, as a numbered list, or a single sentence for a single stage.
  - Progression: Dangles in front, left and right; Diagonal pulls; Figure of 8; Rebounder passing; Punch turns step 4; Single-leg balance.
  - Left as steps: side and direction swaps, and size or speed ramps such as lemons small then wide, small jumps first and slowly at first, several of which carry a caution. The stepping-mohawk "two quick steps first" stays in step 4.
  - Drawings label the stages without circled numbers, so a circled number always means a step.
- **Dangles in front:**
  - The ladder runs: eyes on the puck; head up; head up, top hand only; eyes closed, both hands. Then the owner's routine.
  - New step: roll your wrists so the blade stays closed on both faces, and dangle as quietly as you can.
  - The common mistake now starts with chopping.
  - The word list defines "closed".
- **Side dangles:** the same ladder without eyes closed (owner question). The common mistake now reads "once you know the movement".
- **§4 head-up bullet:** look at the puck only while learning a new movement, then head up. The Common Mistakes bullet now ends "once you know the movement", to match. Key focus and KT8 are unchanged.
- **Removed:** Toe drag in and out, and Shooting off a pad, each with its drawing and export card. "Passing and shooting" is now "Passing".
  - The toe-drag link moved to Straight line's Trains line, and **Toe drag** was added to the word list.
  - No inbound anchors existed.
- **Wall passing is now Rebounder passing:**
  - New steps: a soft, quiet catch, with the blade out in front giving back.
  - Progression: forehand to 20 clean in a row, then backhand to 20.
  - New drawing: a dashed blade out in front, a give-back arrow, and the stick drawn right-handed.
  - Trains line: "the more neglected half", as in the owner document.
  - The Overview now says "passing against a wall or rebounder".
- **Straight line, heel and toe:**
  - The forehand face does every push and pull.
  - On the pull back, roll the wrists and lift the toe over the puck.
  - **Forehand, backhand** added to the word list.
- **V-shape:**
  - Forehand the whole way.
  - On the backhand side, roll the wrists and lift the toe. That wrist roll is called the key part.
  - "Focus on sliding your bottom hand".
  - The common mistake adds turning over to the backhand.
- **L/R-shape:** "stop it dead, the blade square to the pull, as at every stop" and "lay the blade across the far side of the puck". In the drawing, the corner bar changed from 45° to a vertical bar plus a horizontal bar, in both mirrors.
- **Figure of 8:** setup 1 is in the steps. The progression is front to back, then a square of four. The rows carry unbadged labels.
- **Walking slalom:**
  - Flat markers for every version.
  - Markers to the side is now a Variation.
- **Make it harder:** now its own ### section at the end of §4, with the list, the coaching-craft line and the weighted-puck paragraph kept.
- **Export cards:** the 07 `card()` gained progression, variations and routine fields. All 21 cards in 07 and 08 match the page (checked by script).

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer, round 1 | SHIP. Minor: the mohawk learn-first cue moved after the drawing. It was put back in step 4. |
| content-reviewer, round 1 | No critical or major. 12 minors: Straight line forehand wording; Figure of 8 base steps; eyes closed with which hands; label fit; slalom "between-the-legs"; 05 card lost "at stick-and-puck"; L-shape stops; toe-drag gloss; double colon. All taken except the label merge (two labels used instead). |
| diagram-reviewer, round 1 | No critical. Figure of 8 circled numbers meant progression rather than steps, so labels were made unbadged. Minors: L corner bars joined at phone width; single-leg labels crowded. All fixed. |
| site-reviewer (built page, 1440/400/320, light and dark, headless Chromium) | No critical or major. The blocks render as separate lists that restart at 1. No horizontal scroll, duplicate ids, broken TOC anchors or console errors. Minors: four label collisions, and the Make-it-harder list sitting inside the rebounder card. All fixed in round 3. |
| safety-reviewer, round 2 | SHIP. Removing pad shooting drops no needed caution, since the §4 space check covers it. The rebounder needs no extra line. No caution detached. |
| content-reviewer, round 2 | No critical or major. M1: V-shape's "key part" on the wrong action. M2: the Common Mistakes head-down line was built on the old answer. M3: toe drag undefined. M4: Make it harder inside the rebounder card. M5: "more neglected half". M6: Overview "wall passing". All fixed. M7 (mohawk cue as a Progression): declined, kept in the step. |
| diagram-reviewer, round 2 | Major: the rebounder drawing did not show the blade out in front giving back. A ghost blade and arrow were added. Minors: label collisions, fixed. |
| safety-reviewer, round 3 | SHIP. The weighted-puck and coaching-craft lines are intact and adjacent. The narrowed head-down line matches the body, and the unconditional head-up survives in Key focus, KT8, Check yourself and §2. |
| diagram-reviewer, round 3 | Major: the rebounder stick was drawn left-handed under a right-handed note. Fixed against the module's HEAD right-handed convention. Minor: progression label clipped, fixed. |
| diagram-reviewer, round 4 (narrow) | PASS on handedness, label, give-back arrow, desc and the Make-it-harder lead. Gates exit 0. |

No rules content.

### C11
One authoring agent made every content and drawing edit. The coordinator ran the builds, the counts, the plan and this record.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0 after the round-4 source edits, and check:links resolved every link.
- check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST. The page has no ⚠ markers.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | Out of scope, declared: off-ice solo drills, no rule claim |
| D4 Citation integrity | Out of scope: no URL changed. Internal link moved (check_links) |
| D5 Provenance | The owner's own drills and words, quoted above. "The more neglected half" and "hundreds of receptions" checked against practice_and_development.md by the content-reviewer |
| D6 Negative existence claims | None added |
| D7 Cardinal rule | §4's "coaching craft, not a tested programme" and Make it harder's "not a measured progression" are kept |
| D8 Numeric ownership | "20 in a row" is the owner's own target. "Two to six feet" unchanged |
| D9 Summary layer | Layer-tested twice. The Common Mistakes and Overview lines updated |
| D10 Key-facts layer | No facts block on the page |
| D11 Reader safety | safety-reviewer, three passes |
| D12 Read-aloud integrity | Not rendered through md_to_speech (declared). The Progression lists are ordinary Markdown lists |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build's check:links. Removed anchors had no inbound links |
| D15 Rendered site | site-reviewer, plus diagram renders at full and narrow width in rounds 2–4 |

## What this method could not have found
- How the Progression lists and the new Make it harder section sound read aloud (no md_to_speech run).
- Whether the owner wants size or speed ramps (lemons, small jumps) as Progression lists too, eyes closed on the side dangles, and the toe-lift wording on Straight line's pull back (plan).
- Whether a newer player reads the rebounder's dashed blade and grey arrow as "the blade gives back" without the legend.
- Real phones, Safari, and other system fonts. Headless Chromium stood in.

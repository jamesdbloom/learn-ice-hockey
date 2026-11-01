# SG145: off-ice stick work and off-ice exercises as drill cards, with 21 drawings (1 November 2026)

**Files:**
- content/off-the-ice/practising_on_your_own.md (§4 and §5)
- site/src/drills/07_off_ice_stick.mjs, site/src/drills/lib/office_stick.mjs (new: 13 stick drawings)
- site/src/drills/08_off_ice_exercises.mjs, site/src/drills/lib/figure.mjs (new: 8 exercise drawings)
- site/src/data/drills.json (rebuilt by build-drills: 72 drills)
- project/plans/OPEN_ITEMS.md

Not in this commit: site/src/data/podcast.json (the Practising on Your Own NotebookLM episode; it waits on the upload).

## Owner instructions (1 November, in session)
- Sent their off-ice stick list (verbatim in project/plans/getting_better_plan.md, committed in 8404c00) and approved a suggested structure: stationary dangles, across the body, shapes, figure of 8, moving, plus wall passing and pad shooting; off-ice exercises from Conditioning and Recovery and Skating only, with no loads, sets or reps. "yes please do that": turn §4 and §5 into cards like the skating drills, with diagrams.
- Diagram style, picked from a three-drawing pilot: shoe outlines; the handled object a dark puck, with the text saying a biscuit on a smooth floor or a ball on any floor also works; the ice drills' light-blue panel; exercises from behind in three frames; the stick as blade and shaft only, with the bottom-hand slide, weight shift and head up explained in text.

## What changed
- **§4 Off-ice stick work:** 13 cards (Dangles in front and to each side; Toe drag in and out; Wide pull across; Dangle and pull across; Pull across and snap back; Diagonal pulls; V-shape; Straight line, heel and toe; L-shape; Figure of 8 round markers; Walking slalom; Wall passing; Shooting off a pad). Every item on the owner's list is present. The section keeps its space check (people, windows and glass, footing, an adult watching a child), the pad-not-concrete point, the weighted-puck caution, a "coaching craft, not a tested programme" line and the links to Puck Handling and Practice and Development.
- **§5 Off-ice exercises:** 11 cards (RAMP warm-up; Single-leg strength; Lateral bounds; Single-leg balance; Slide board; Copenhagen adduction, short-lever; Hip mobility; Anti-rotation core; Medicine-ball throws; Hockey intervals; Easy aerobic). Each traces to conditioning_and_recovery.md or skating.md (the author's report lists the lines); the intervals keep "a starting shape rather than a tested programme" and "never the day before a game"; the groin passage keeps that no exercise guarantees against a strain, that the evidence is thin, and the physio pointer, and does not cite the retracted review as support. Warm up first, get coached on the lifts, build up gradually, and young players need qualified coaching before lifting at all are kept.
- **Drawings:** 21 new inline SVGs, one per card except RAMP, intervals and easy aerobic. Seen from above with the player at the bottom facing up (stick), or from behind (exercises; other views say so in the label and desc). §4+§5 went from 318 to about 2,400 words.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer (first draft) | SHIP; optional: slalom backwards over weighted pucks, squeeze wording, slide-board footwear |
| content-reviewer (first draft) | Fix: four-marker figure of 8 lost "horizontal… round the right"; owner item 18 turned into a different drill; interval caveat on the wrong number and a pointer a listener can't follow; wall-passing step unsourced (refuted by the author: passing_and_receiving :767-768); balance board unsourced; diagonal claims beyond puck_handling. Cuts proposed (~18%) |
| safety-reviewer (narrow, repairs) | SHIP; squeeze made a separate step |
| safety-reviewer (exercise drawings) | 7 SHIP; FIX medicine-ball throw (hips square over planted side-on feet drew a ~90° twist) → feet left out of the throwing frame |
| diagram-reviewer (stick drawings) | 11 PASS; FIX L-shape card/desc drift, wall-passing notation; minor label and legend fixes |
| site-reviewer (built page, desktop and real 400 px iframe, light and dark) | PASS: 21 inline, no id collisions, TOC, no horizontal scroll, clean console, light panel in dark mode; three labels at a path or the panel edge → fixed |
| diagram-reviewer + safety-reviewer (narrow, all repairs and the later text edits: kit line, bottom hand, L-shape "and back", Copenhagen step 4, markers) | SHIP; three last minor fixes (flight track dots, slide-board desc numbering, "you shuffle"), made and rebuilt |

### C11
Every content edit was made by the page's authoring agent and every drawing by its module's agent, on reviewers' findings; the coordinator ran build-drills and the site build, and edited only the plan and this record.

Checks after the last edit (07/08 modules last changed after the final review round; the full `npm run build` with the absolute binary ran after them and exited 0, including check:links; the built page carries "you shuffle" and drills.json the renumbered slide-board desc): check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST; check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | Out of scope, declared by the coordinator: no rule claim added or changed |
| D2 Exceptions | Out of scope as D1 |
| D3 Divergence | Out of scope as D1 |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Every exercise and stick tip traced to its owner page by the author and checked by the safety and content reviewers |
| D6 Negative existence claims | None added |
| D7 Cardinal rule | "Coaching craft, not a tested programme" stated once for §4; the ladder keeps puck_handling's "not a measured progression" |
| D8 Numeric ownership | Interval and aerobic figures match conditioning_and_recovery with their caveats; no new figure |
| D9 Summary layer | Key focus, Overview, Common Mistakes, Check yourself and Key Takeaways checked: still match |
| D10 Key-facts layer | No facts block changed |
| D11 Reader safety | safety-reviewer, four passes (text and drawings) |
| D12 Read-aloud integrity | Rendered; the new cards read as heard; drill markers voice nothing |
| D13 Folklore | Balance board and unsourced cues removed |
| D14 Structure, links | check_links and the build's check:links |
| D15 Rendered site | site-reviewer on the built page |

## What this method could not have found
- Whether the four-marker figure of 8 and the L-shape match what the owner meant (carried to the plan).
- Whether a physio or coach would draw the poses (Copenhagen set-up, 90/90, split squat) the same way; the drawings commit only to what the cards say, and were reviewed as stick figures.
- How the cards and drawings work on a real phone, mobile Safari or a screen reader.
- Whether a reader learns a drill faster with the drawing than from the card alone.

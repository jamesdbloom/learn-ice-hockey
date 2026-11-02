# SG146: the owner's corrections to six off-ice stick drawings, and the dangles split into three cards (2 November 2026)

**Files:**
- content/off-the-ice/practising_on_your_own.md (§4 intro weight-shift bullet, Dangle glossary line, and the Dangles, L-shape, Figure of 8, Walking slalom cards; two new cards)
- site/src/drills/07_off_ice_stick.mjs (nine drawings and their export cards; two new ids, office-stick-dangle-left and office-stick-dangle-right)
- site/src/data/drills.json (rebuilt by build-drills: 74 drills)
- project/plans/OPEN_ITEMS.md

Not in this commit: site/src/data/podcast.json (the Practising on Your Own NotebookLM episode; it waits on the upload).

## Owner corrections (2 November, in session, verbatim)
1. "the L-shape drill looks wrong for the left hand L-shape it should be pull across from right to left then stop, pull back from using you back hand to level with a point behind your left foot then stop, then pull forwards and and stop with your back hand, then pull across. We should also do the opposite for the R-shape so the L goes across your feet and then back pasts your legs to be level with behind your feet."
2. "The walking slalom is wrong as the puck is moved through the weighted puck across and slightly diagonal, so the shape is not a smooth curve but more or a zig zag"
3. "Figure of 8 round markers doesn't show all the directions there are two horizontal with two weighted pucks and two verticle and two with the four weighter pucks"
4. "The arror for Pull across and snap back shows a curver bottom the path the puck goes across is the same as the path the puck is snapped back so the lines should be more horizontal"
5. "the same for Wide pull across and Dangle and pull across the lines showing the puck being pull across should be straighter and show the left to right and right to left path being more similar"
6. "the Dangles in front and to each side isn't correct, it should show dangling in front, then with top hand only then with eyes closes. There should be seperate drill for dangling on the left hand side which is forwards and backwards dangling level with the left foot and another drill for the same level with the right foot on the right hand side forwards to backwards."

## What changed
- **L-shape and R-shape** (id unchanged): starts in front of the right foot, across in front of the feet to a corner, back along the side past the foot to just behind the heels, forwards to the corner, back across, stopping each time; the R-shape mirrored. "For a right-handed shot, this pull and the next are on your backhand", once.
- **Walking slalom:** straight pulls across and slightly forwards through each gap, a zig-zag with sharp corners alternating sides of each marker.
- **Figure of 8:** six pictures (two markers side by side, one in front of the other, four in a square; each clockwise, then the whole 8 the other way), every arrow traced; puck kept off the arrowheads. The "first direction only" convention in the module header is replaced.
- **Snap back, wide pull across, dangle and pull across:** two straight, horizontal, parallel arrows 0.5 apart (across lower, back upper), the same notation on all three.
- **Dangles:** "Dangles in front" (side to side, then top hand only, then eyes closed) plus two new cards, on your left and on your right: front to back, level with the foot, then top hand only (the 1 Nov list), with blade and shaft drawn. Every dangle card carries the owner's list's "shift your weight in your legs".
- **§4 intro:** "Shift your weight in your legs as the puck moves" (was "from leg to leg", which does not fit a front-to-back dangle).
- **Dangle glossary line:** direction-neutral ("back and forth"), because three across-the-body cards also dangle "on your left/right" and the owner has not yet said which direction they mean (plan).

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer (nine drawings, cards, descs against the six corrections) | No critical or major; all six corrections carried; 24 figure-of-8 arrow segments traced by cross product. Minors: L step 4 stop bar unstated, puck on arrowheads in four 8s, side dangles lacked blade, tight labels |
| safety-reviewer (narrow) | SHIP; every section safety line upheld (flat markers, floor check before walking backwards, space, pad not concrete, weighted puck, adult watching a child); pulling to behind the heels is stationary, no hazard. Minor, pre-existing: whether the side-markers slalom is walked backwards (owner question) |
| content-reviewer (narrow, whole-page layer test) | No critical. Major M1: "dangle on your left" now meant front to back on the new cards and glossary while three across-the-body cards draw it side to side → glossary made direction-neutral, owner asked. Minors: :749 "leg to leg", handedness note not covering step 3, repeated "side to side" → fixed. No summary layer describes the old drills |
| site-reviewer (built page, 1440/400/375/320, light and dark; headless Chromium, the Chrome extension blocked localhost) | PASS: nine drawings inline, no overlap or clipping, no horizontal scroll, no duplicate ids, clean console; renamed anchor works; figure of 8 ~630px tall at 400 |
| diagram-reviewer (narrow, all repairs, + gate checks) | PASS on all six repairs, no regressions; check_facts, check_links, check_absolutes, check_geometry, check_secrets, check_marker_pairs exit 0 |
| site-reviewer (narrow, the four repaired drawings, 1440/400, light and dark) | PASS. Nit: the side dangles' legend icon is horizontal while their arrow is vertical (plan) |

### C11
Every content and drawing edit was made by the one authoring agent that owned both files' changed blocks; the coordinator ran the builds and edited only the plan and this record.

Checks after the last edit: full `npm run build` with the absolute binary exited 0 (dist 15:37, after the last source edit 15:36); check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST; check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | Out of scope, declared by the coordinator: off-ice solo drills, no rule claim |
| D4 Citation integrity | Out of scope: no URL changed |
| D5 Provenance | The owner's own drills: every card checked against the owner's 2 Nov words and 1 Nov list |
| D6 Negative existence claims | None added |
| D7 Cardinal rule | The section's "coaching craft, not a tested programme" line stands |
| D8 Numeric ownership | "Two to six feet apart" matches puck_handling; no new figure |
| D9 Summary layer | content-reviewer layer test: nothing describes the old drills |
| D10 Key-facts layer | No facts block changed |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud integrity | Drill markers voice nothing; card text unchanged in form. Not rendered through md_to_speech (declared) |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build's check:links; renamed anchor has no inbound links |
| D15 Rendered site | site-reviewer, two passes |

## What this method could not have found
- Whether the owner's ambiguous words were read as meant: where the L starts, "through the weighted puck" as through the gaps, the slalom's 30° pulls, parallel arrows as "the same path", and the side-dangle blade pose (owner questions in the plan).
- Rendering in the owner's own Chrome, Safari, or on a real phone (the extension blocked localhost; headless Chromium stood in).
- How the new cards sound when read aloud.

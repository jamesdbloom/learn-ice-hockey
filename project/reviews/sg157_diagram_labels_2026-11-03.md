# SG157: four diagram label and badge fixes (3 November 2026)

**Files:** site/src/diagrams/goaltender.mjs; site/src/diagrams/neutral_zone_systems.mjs; site/src/diagrams/forechecking_systems.mjs; site/src/diagrams/zone_entries.mjs; project/plans/OPEN_ITEMS.md

## Source
OPEN_ITEMS diagram rows (SG95–SG100, SG108), worked on the owner's standing instruction "keep going with the plan". No caption, describe or content text changed.

## What changed
- goalie-front-door-back-door: the label "backed off" (placed 12 ft above the G on a leader near-parallel to the goal line, as close to the shooter as to the G) is now "deeper", directly above the G on a short leader. The page's KT1 says "Play deeper against passes".
- nz-hinge: "committed to that side" (about 50 ft wide, over the neutral-zone dot) is now "committed", beside its F and clear of the dot; position shows the side.
- forecheck-122: route 2's badge moved to the outside of its curve (along 4.5, right of travel), clearing F2's ring and the route's end bars by 0.65 ft (the first move, along 6 left, still touched F2's ring once the stroke was counted).
- dump-flip-over-trap: "three across the middle" → "three across" (the section's term; removes a placer warning); the "one back" label moved below the dot's row so the dot no longer reads as a bullet.
- Provenance comments in goaltender.mjs and the nz-hinge label comments in neutral_zone_systems.mjs (:716, :743 and the new one) corrected to quote their sections (comment-only; SVG output byte-identical). The block quote at neutral_zone_systems.mjs :712-715 still paraphrases (plan).
- The "clears the painted lines" boilerplate comment row was already fixed in SG108 (stale).

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer (rendered at 1800 and 340 px, crops) | No critical or major; every edit an improvement. Minors: two comments quoted the wrong source text → fixed; "deeper" sits under the bullet where depth vs screens is contested (caption disambiguates); goal line and blue line still cross "deeper" and "committed" (pre-existing in the old labels); badge overlaps the pressure-bar ends (as before). "three across" attaches by leader and proximity, same as before |
| site-reviewer (every host page, 1440 and 390, light and dark; headless Chromium) | goalie-front-door-back-door, nz-hinge, dump-flip-over-trap PASS on all hosts; forecheck-122 FIX on both hosts (badge ink still touched F2 and covered the end bars) → moved to the outside of the curve |
| site-reviewer (forecheck-122 re-check, both hosts, 1440 and 390, light and dark) | PASS: clear of F2 and the bars; touches its own route line at 390 (ties it to route 2, covers nothing); the hidden circle arc reads as passing behind, as badge 3 already does |

No rules or safety content: label wording only, every label the owning section's own word.

### C11
One authoring agent for the four modules; the coordinator wrote the plan and this record. After the diagram review the only drawing change was the forecheck-122 badge, made on the site-reviewer's finding and re-checked by it on both hosts; the comment fixes left the SVGs byte-identical.

Checks after the last edit: build-diagrams exit 0 (12 relax warnings, was 13); full `npm run build` with the absolute binary exit 0 including check:links; check_absolutes (after the diagram build), check_geometry, check_zones, check-arrivals (0 hard), check_secrets exit 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6, D8, D13 | Out of scope, declared: no rule, citation, negative claim, figure or folklore touched |
| D7 | Out of scope: no coaching claim changed |
| D9, D10, D12 | Out of scope: captions and describe text unchanged (checked: no caption quotes an old label) |
| D11 | Out of scope: label wording only |
| D14 | check_links and the build |
| D15 | site-reviewer on every host page at 1440 and 390, light and dark (C10), plus diagram-reviewer renders |

## What this method could not have found
- Whether a reader without the caption reads "deeper" as depth and attaches "three across" and "committed" correctly at phone size.
- Labels crossing painted lines (no checker).

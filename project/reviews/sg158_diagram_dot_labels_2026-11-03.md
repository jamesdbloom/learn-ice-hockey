# SG158: ten diagram labels moved off faceoff and neutral-zone dots (3 November 2026)

**Files:** site/src/diagrams/positions.mjs, zone_entries.mjs, goaltender.mjs, neutral_zone_systems.mjs, special_teams.mjs, defending_the_rush.mjs; project/plans/OPEN_ITEMS.md

## Source
The OPEN_ITEMS diagram row left after SG157 (10 dot-in-label diagrams), worked on the owner's standing instruction "keep going with the plan".

## What changed
labelHint only (no label wording, caption, describe, position, route or zone change), on: defender-d-to-d-behind-the-net ("your partner"), defender-two-on-one ("the pass you take away"), winger-dz-reverse ("has skated past you"), entry-high-triangle ("drives wide, no puck"), entry-middle-drive ("carrier, wide"), entry-wide ("high: back-door or point"), goalie-rim-stop-or-clear ("your defenceman"), nz-1-2-2-containment ("the D-to-D"), pk-diamond (lower "wall and bumper"), rush-backcheck-lanes (both "outside lane"). Each label sat on a faceoff or neutral-zone dot (one touched); none does now. Dot-in-label 10 → 0 corpus-wide. The nz-1-2-2-containment "puck carrier" relax warning is left (the only clean slot lands on a route badge; plan).

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer (own renders at 2x and 340 px; diff scope; every host section) | Clear. Every moved label attaches to its player and covers nothing; drawings agree with their prose; diff is labelHint and comments only. Minors: the two "outside lane" labels differ in leader; "drives wide, no puck" sits between the dot and its F; pk-diamond leader passes 0.9 ft from a dot (mirrors the upper one) |
| site-reviewer (20 diagram-host pairs on 12 pages, 1440 and 390, light and dark, ink-level overlap measurement) | All PASS; 0 px ink overlap with every glyph, dot, route and label; no console errors, no off-origin requests. Minors: blue line through two moved words (halo keeps them legible); entry-wide "or" touches the circle arc; the leaderless "outside lane" is the loosest attachment |

### C11
One authoring agent for the six modules; the coordinator wrote the plan and this record. No change after either review.

Checks after the last edit: build-diagrams exit 0 (10 SVGs re-rendered, the other 194 reused); full `npm run build` with the absolute binary exit 0 including check:links; check_absolutes (after the diagram build), check_geometry, check_zones, check-arrivals (0 hard), check_secrets exit 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D13 | Out of scope, declared: label placement only; no rule, claim, caption, describe or content text changed |
| D14 | check_links and the build |
| D15 | site-reviewer on every host page (C10), diagram-reviewer renders |

## What this method could not have found
- Rendering in Safari, Firefox, real phones and Windows fonts (label widths, and so line and arc contacts, differ).
- Whether a first-time reader attaches the leaderless labels to the right player.

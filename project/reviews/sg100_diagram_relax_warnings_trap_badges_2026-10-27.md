# SG100: relaxation warnings, 13 diagrams re-placed, and an opt-in route-tag offset (27 October 2026)

**Files:**
- site/scripts/lib/rink.mjs
- site/scripts/build-diagrams.mjs
- site/src/diagrams/*.mjs: label hints on 13 diagrams; a `badge` field on one route

## What changed and why
- **The corner relaxation is now visible.** When `placeOne` keeps a pre-rule placement whose leader crosses painted ice, `placeLabels` calls `onRelax`, and build-diagrams prints a warning naming the diagram and label. There were 29 such labels; hints fixed 12 of them in 11 diagrams. 17 remain, and the build prints each one.
- **nz-1-2-2-trap.** D1's "behind F2" and F2's "kills it at the red line" stacked into one two-line block. F2's label is now "steps up" (the section's own "F2 stepping up"), placed level with F2 with no leader. D1's label "behind F2" sits left of D1. The caption and the facts line still carry "at the red line".
- **nz-1-2-2-containment.** Route tag 2 half-covered the goalie. A new opt-in route field, `badge: {along, side}`, moves it clear; routes without the field are byte-identical. An F1 hint clears tag 1 from "forces one side".
- **support-in-a-line.** C's "puck carrier" is placed right of C, `labelHint [3, -9]`. The first hint put it under the opposing F, where it read as F's.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Diagrams (13 changed against HEAD, full size, Chrome rasterised) | diagram-reviewer | **11 SHIP; FIX on two.** support-in-a-line ("puck carrier" read as the opposing F's) and nz-1-2-2-trap (the long F2 label read as D1's second line). Both were fixed with the reviewer's tested solutions: C [3, -9], and the label "steps up" at [-15, 0]. Exactly 13 SVGs differ from HEAD. The `badge` default is bit-identical (191 untouched SVGs identical). onRelax only reports. |
| Final two | coordinator view of scratchpad/diag_fix3/png/v2_00.png and v2_sial_zoom.png | "steps up" sits beside F2 with no stack; "puck carrier" sits beside C. "option one" is back under A1 on the same row, 3.3 ft apart; it reads as A1's. |

| Commit gate, pass 1 | commit-gate | **BLOCK:** no site-reviewer had seen the rendered pages (C10). |
| Browser | site-reviewer (headless Chrome over DevTools, 1440 and 390 px, all 9 host pages; 18 loads, no console errors, no off-origin requests) | **SHIP overall.** Trap "steps up" and support-in-a-line "puck carrier" both work at real size. Minor FIX, not blocking: in loose-puck-who-goes and oz-cycle-reverse the new leaders run alongside the faceoff circle (the parallel-leader blind spot), and their code comments overstate "clears the painted lines". Carried. |

### C11
The two fixes are the reviewer's own tested solutions, and only those two SVGs changed. The gate reads them.

## Gates
- build-diagrams: exit 0, with 17 relax warnings.
- check_geometry: exit 0.
- check-arrivals: 0 hard.
- check_absolutes: exit 0.
- Site build after the last edit.

## Carried to the plan
- loose-puck-who-goes and oz-cycle-reverse: the leaders hug the faceoff circle, and the comments say they clear the painted lines; re-place both and correct the comments.
- support-in-a-line: F's leader grazes the "e" of "option one"; nudge "in both lanes" 1–2 ft right.
- cross-ice-in-your-own-end: "slides across" sits on the shaded zone's edge and can read as the zone's label (HEAD-era).
- The 17 remaining relax warnings, including stacks in breakout-up, rush-trailer and dump-flip-over-trap; cross-ice-in-your-own-end "seals the wall" sits nearer our D1.
- Route-tag overlaps: forecheck-212 (tags 3 and 4), forecheck-122, nz-regroup-d-to-d and both dz-walk-down diagrams. The `badge` field can fix these.
- `leaderHazard` misses a leader running parallel to a line about 2 ft off.

## What this method could not have found
- Misreadings in diagrams nobody viewed.
- Phone width; diagram colours do not depend on the theme.

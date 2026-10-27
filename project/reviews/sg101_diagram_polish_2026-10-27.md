# SG101: diagram polish — circle-hugging leaders, route-tag overlaps, two nudges (27 October 2026)

**Files:**
- site/src/diagrams/{defensive_zone_coverage, forechecking_systems, neutral_zone_systems, offensive_zone_play, playing_without_the_puck, puck_support_and_spacing, risk_management}.mjs
- rink.mjs is unchanged (a tolerance experiment was reverted)

## What changed and why
- **loose-puck-who-goes and oz-cycle-reverse.** Each label's leader hugged the faceoff circle. Each label now sits level beside its player with no leader, and the false "clears the painted lines" comments are corrected.
  - The circle tolerance in leaderHazard was tested at 1.2 and 1.6 ft: relax warnings rose to 21 and 33, with new crowding. It stays at 0.9.
- **Route tags (opt-in `badge`):**
  - nz-regroup-d-to-d tag 1 moves to the right of travel;
  - forecheck-122 tag 3 moves to along 3;
  - forecheck-212 tag 4 moves to along 2, so tags 3 and 4 no longer overlap.
- **dz-walk-down-man and dz-walk-down-zone.** No badge setting clears tag 1, so the label "walks down from the point" moved up instead, leaving 0.7 ft of air.
- **support-in-a-line.** "in both lanes" moves 3 ft right, so its leader runs between "option one" and "puck carrier".
- **cross-ice-in-your-own-end.** "slides across" now sits level with F3, off the shaded zone's edge.
- **Comment corrections (two, comment-only).** The forecheck-212 tag 4 comment's figures ("3.4 ft off the pass" and "about 6 ft from F2's arrowhead") did not match the site-reviewer's measurements. They were replaced with the qualitative "just off the pass and close to F2's arrowhead".

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Diagrams (HEAD worktree against the tree; Chrome 2x) | diagram-reviewer | **SHIP all nine.** Exactly these nine changed. The relaxed-leader list is identical before and after. forecheck-212 tag 4 reads as the pass's tag. A small side effect: "in both lanes" now sits on the circle arc, masked by its halo. |
| Browser (headless Chrome over DevTools; 16 host pages at 1440 and 390 px; 32 loads, no console errors) | site-reviewer | **SHIP all nine changes.** Measured distances confirm each label is nearest its own player. The forecheck-212 comment's figures did not match the measured distances; they were removed. No body-level horizontal scroll. |

## Carried to the plan (HEAD-era, found by both reviewers)
- cross-ice-in-your-own-end: the "seals the wall" leader (F1's) runs past the puck and the start of D1's pass, so it can read as a pass, and the label sits nearer D1 (major).
- dz-walk-down-man: tag 2 (W's) sits on the carry line and reads as the carry's step 2 (major). A possible fix is `badge: {side:'right'}`.
- forecheck-212: tag 1 is clipped by F1's halo, and "takes the weak side" sits nearer F3, nearly stacking with "high, middle" (major).
- forecheck-122 tag 2 touches F2; the nz-regroup centre circle runs through tag 2; the oz-cycle-reverse pass runs along the arc.

## Gates
- build-diagrams: exit 0.
- check_geometry: exit 0.
- check-arrivals: 0 hard.
- check_absolutes: exit 0.
- check_zones: exit 0.
- Site build ran before the two final comment-only edits. Diagrams were rebuilt after them, and the gate confirmed all 204 SVGs are byte-identical to dist.

## What this method could not have found
- Dark theme.
- Real phones.
- A cold reader's judgement.

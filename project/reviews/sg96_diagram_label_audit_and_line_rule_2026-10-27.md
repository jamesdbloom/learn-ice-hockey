# SG96: diagram label audit fixes, and a placer rule keeping leaders off painted lines (27 October 2026)

**Files:**
- site/scripts/lib/rink.mjs
- site/src/diagrams/{breakouts, defensive_zone_coverage, forechecking_systems, neutral_zone_systems, passing_and_receiving, playing_without_the_puck, positions, practice_and_development, puck_support_and_spacing, shooting, time_and_space, zone_entries}.mjs
- site/src/data/diagrams.json (rebuilt)

## Why
After the leader change committed as 9737b01, a script-assisted audit checked by eye found two problems:
- **Stacked labels:** 11 diagrams where two players' labels stacked into one block and read as one player's two-line label. The worst was deny-the-reception, where "the receiver / arrives as the puck does" read as one sentence about the attacker.
- **Hidden leaders:** a corpus-wide rise in leaders running invisibly along painted lines (24 at HEAD before 9737b01, 66 after) and along circles (13 → 28).

## What changed
1. **Per-spec label hints** for the stacked and hidden-leader cases, and a deny-the-reception label text change: "arrives as the puck does" became "arrives on time". The longer text could not be placed beside its own player, and the caption and describe never quoted it.
2. **`leaderHazard` in `placeOne`.** A leadered slot is rejected if its visible leader runs along a blue, red or goal line or a faceoff/centre circle, or passes within 1 ft of a dot or the puck. A rejected slot falls through to the next one. Corner players whose only alternative would be the grid sweep keep their previous placement; four stacks seen in the first build led to this.

| Check (611 labels) | Before 9737b01 | After 9737b01 | Now |
|---|---|---|---|
| Leader along a painted line | 24 | 66 | 8 |
| Leader along a circle | 13 | 28 | 12 |
| Leader within 1 ft of a puck or dot | 29 | 27 | 13 |
| Labels without a leader | 0 | 65 | 135 |
| Ambiguous labels without a leader | 0 | 0 | 0 |
| Ambiguous labels, all | 119 | 112 | 108 |

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Diagram audit | diagram-reviewer | 11 real misreadings found; fixed with hints. |
| Hints review | diagram-reviewer | 8 of 15 SHIP. FIX on 7: three hints had created new defects (leaders through the puck on both dz-walk-down diagrams; "step, then shoot the blocker"), two misreadings survived in a new form, and two pre-existing blue-line leaders remained. All were reworked. |
| Line rule, independent | diagram-reviewer (HEAD worktree against the tree, all 72 changed diagrams viewed at 1000 px, crowded ones at 600 dpi) | **70 SHIP; FIX on two:** deny-the-reception (the label still sat under A2) and bank-pass-angle (a new stack). Both fixed with the reviewer's tested solutions: "arrives on time", and P [6, -3]. nz-pressure F2 was hinted away from F1's identical label. Minors noted: entry-wide, defender-two-on-one and layer-not-converge (labels on dots or close rows), plus HEAD-era stacks (dump-flip-over-trap, nz-1-2-2-trap, defensive-zone-support, pp-131). |

| Commit gate, pass 1 | commit-gate | **BLOCK:** the nz-pressure F2 hint had not been reviewed and put "gone hunting" on a faceoff dot, and no browser pass had run. Fixed: nz-pressure [-2.5, -10], with the dot and the identical label clear. |
| Narrow, three final diagrams | diagram-reviewer | nz-pressure SHIP. deny-the-reception's leader hugged the circle arc, and bank-pass-angle's F label drifted onto the dot. Fixed: deny F [3.5, 6.5], leaderless above F; bank F [6.5, -10], with the leader 1.4 ft from the dot. Built coordinates were verified. The coordinator viewed both final renders (scratchpad diag_fix2/png/t2/final_deny.png and final_bank2.png); each label reads as its own player's. |
| Browser | site-reviewer (headless Chrome over DevTools at 1440 and 390 px, light and dark; 24 page loads, no console errors) | Its deny and bank findings were made on a build older than those two fixes, and are superseded by the row above. nz-pressure, forecheck-131, dz-walk-down-man and shooting-lane-and-the-step: SHIP. nz-1-2-2-containment route badges, one on the goalie and one against "forces one side": identical coordinates at HEAD, and not moved by labels; carried. nz-1-2-2-trap stack: carried. Diagram colours are fixed, so dark theme does not change them. Six code comments that disagreed with the built SVGs were corrected. |

### C11
The fixer applied the two FIXes and the nz-pressure hint after the independent review. They follow the reviewer's own tested solutions. The gate reads them.

## Gates
- build-diagrams: exit 0.
- check_geometry: exit 0.
- check-arrivals: 0 hard failures.
- check_absolutes: exit 0.
- check_zones: exit 0.
- Site build (absolute npm): exit 0, after the last edit.

## Carried to the plan
- nz-1-2-2-containment: route badge "2" half-covers the goalie, and badge "1" abuts "forces one side" (HEAD-era).
- The corner-player relaxation in leaderHazard can keep a hazardous leader. Flag in the build output when it is used.
- HEAD-era stacks: dump-flip-over-trap, nz-1-2-2-trap ("behind F2" over "kills it at the red line"; the [-14, 0] hint was refused), defensive-zone-support, pp-131.
- Labels over faceoff dots: about 30 (linecheck E), mostly cosmetic.
- Phone width and dark theme were not re-checked in a browser after these changes.

## What this method could not have found
- Stacked labels in diagrams nobody viewed.
- A cold reader's pairing of labels.

# W558: twelve labels moved off paint and faceoff dots (20 November 2026)

## Why

W556 fixed `check_label_paint`. Its inset is now capped at half a character, and it now tests filled dots. With those fixes it reported 5 `--severe` hits (paint running along the words, or same-colour paint) and 11 new hits on faceoff or centre dots.

## Edits (diagram agent, site/src/diagrams/*.mjs, no words changed)

**Method:** for each label, the agent rendered a grid of `labelHint` values through the real `playSvg`. It kept only hints the placer honours, scored them with `check_label_paint.check`, and rejected any that added a hit elsewhere. It then looked at the chosen render. Every changed line carries a dated W558 comment.

| Diagram, label | Result |
|---|---|
| dz-box-plus-one "puck carrier" | Clean: inside the circle, beside the puck |
| entry-high-triangle "trails to the high slot" | No longer runs along the arc. A 34 ft label in a 25 ft gap still crosses the arc and the blue line |
| the-risk-map "the middle" | `labelDy` 16.5: off the centre dot and circle. Still crosses the red line, which cannot be avoided |
| dz-walk-down-man "on the third forward" | Clean, with a leader to C |
| layer-not-converge "puck carrier" | Off the dot. Still crosses the arc; no accepted slot clears it |
| neutral-zone-lanes "weak-side lane" | `[-7, 7]`: inside the weak-side lane, with a leader to F3 |
| nz-regroup-d-to-d "high — stretch option" | Off the centre dot and circle. Still crosses the blue line |
| oz-cycle-reverse "the carrier" | `[-12, -7]`: clean, with a leader to F1 |
| pp-backdoor "strong side, low" | Clean, with a leader to D |
| rush-3-on-2-alternative "takes the third" | Off the dot. Still crosses the red line |
| faceoff-where-the-draw-goes "carried offside" | Left on purpose: the gap between the words falls on the blue line (W403) |
| offside-faceoff-location "if carried" | Left on purpose: a false positive from the width estimate, as measured on the PNG |

**The neutral-zone-lanes ruling.** At `[3, 10]`, the label's baseline sat on the dashed lane edge, which made it unclear which lane it named. The only spot the placer accepts inside the lane puts a faceoff dot under the top of the "w". The coordinator ruled that naming the right lane matters more than the dot, so `[-7, 7]` was used.

## Review

**diagram-reviewer.** It viewed all 12 PNGs at full size and at 400 px.
- 8 of 10 moves were OK.
- **Minor, close to Major:** oz-cycle-reverse "the carrier" had no leader and sat level with the opposing F, so it could be read as his, which flips possession. Repaired to the reviewer's sketch.
- **Minor:** neutral-zone-lanes, the lane ambiguity. Repaired as ruled above.
- The pp-backdoor comment described the label's position wrongly. Corrected.
- The two labels left alone are acceptable.
- The reviewer noted three pre-existing labels; they are filed.

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`, `check_caption_negations`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w558.log`).
- check-arrivals: 0 hard.
- `check_label_paint`: 467 → 463, and `--severe` 5 → 2. Both remaining severe hits are kept on purpose.

No content and no `diagrams.json` change: captions are unchanged, and the SVG and PNG are gitignored build products.

## Dimension coverage

| Dimension | Status |
|---|---|
| D13 | Covered by the diagram-reviewer and the PNG checks |
| Others | Not engaged (no words changed) |

## What this method could not have found

- **Whether a reader new to the play attaches each label correctly.** This was judged from distance and alignment.
- **Phone-width rendering and the dark theme on the live site.** Not checked.

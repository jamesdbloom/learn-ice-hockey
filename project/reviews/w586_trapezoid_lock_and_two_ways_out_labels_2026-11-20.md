# W586: the-trapezoid, forecheck-2-3-lock and "two ways out" labels; lock route left in the middle lane (20 November 2026)

## Edits (diagram agent; placement only, no words changed)

| Diagram, label | Change | Result |
|---|---|---|
| the-trapezoid, "trapezoid" (W514(4)) | `labelDx -3.5, labelDy -9.5` | About 2 ft further from the end boards and crease. It still crosses the goal line, because the word (about 14 ft) is wider than the region (11 ft) and zone labels cannot draw a leader. |
| forecheck-2-3-lock, "first in" (W515(6)) | `[-6,-11]` | Clear of paint, with a leader to F1 |
| forecheck-2-3-lock, "holds the line" ×2 (W515(6)) | `[11,9]` and `[11,-6]` | Off the blue line, each with a leader to its defenceman |
| corner-escape-routes, "two ways out" | `[-1,-16]` | Clears the faceoff dot by about 1 ft. The arc crossing is accepted, to keep the caption echo. A shorter "two exits" would place cleanly but would no longer match the caption. |

**The forecheck-2-3-lock route was left unchanged.** The host forechecking_systems.md has the winger "slide into line with the two defencemen to form a three-player wall across the ice". The picture draws the defencemen at the points, so the even wall puts the winger in the middle lane. The caption already says "the lane they fill is a coaching detail".

## Review

**diagram-reviewer.** It viewed the PNGs at full size and at 400 px, and checked the SVG coordinates against anchor plus hint.
- All four label moves are OK.
- It agrees with the lock-route decision.
- No findings.

## Rows

**Closed:** W514(4), W515(6), and the corner-escape "two ways out" row.

**Owner decision pending:** W521(2).

## Gates on the final tree

- Full `npm run build` with the v22.23.4 binary: exit 0 (`scratchpad/build_w586.log`).
- check-arrivals: 0 hard, unchanged.
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_label_paint`: 462 → 460.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Whether a coach reads the drawn lock as the left-wing lock.**
- **Real-phone and dark-theme rendering.**

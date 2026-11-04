# SG164: the diagram label placer keeps label ink off numbered route tags, and the breakaway diagram's "alone, with the puck" moves under the shooter (3 November 2026)

**Files:**
- site/scripts/lib/rink.mjs (placer: the `inkAvoid` option, an advance-width ink model, and a per-tier badge test)
- site/src/diagrams/shooting.mjs (shooting-breakaway-approach: `labelHint: [6, -7.5]` on F, with a comment)
- project/plans/OPEN_ITEMS.md

The generated SVGs and PNGs are build products and are not tracked.

## Source
OPEN_ITEMS diagram row (SG157/SG158): "the placer does not treat route badges as obstacles".

## What the brief got wrong (refuted by the author before acting)
- SG158 did not add dot boxes to the placer. It changed `labelHint` in six modules, so there was no placer pattern to copy.
- Route badges are rounded rectangles, not circles.
- Treating badges as obstacles cannot clear nz-1-2-2-containment's "puck carrier" relax warning. That label's only clean slot is on the badge, so a fix there needs a spec-side `labelHint` or a badge move (now in the plan).
- At ink level only one label in the corpus touched a badge: "alone, with the puck" in shooting-breakaway-approach, by 0.09 ft.

## What changed
- **`placeLabels` gained `inkAvoid`.**
  - It holds the boxes a label's estimated ink plus halo may not touch.
  - The ink width comes from an advance-width table, measured in Chrome with canvas `measureText`. It is within −0.104 to +0.036 em of the measured ink across all 631 built labels, and padded to cover that range.
  - `playSvg` passes each drawn badge box.
  - The badge test runs **per tier**. Within each tier, a badge-clear result is accepted only if it is a hint or table slot; otherwise that tier's badge-blind result stands. So the test can never push a label into the sweep or degraded branch, cause a throw, or downgrade a tier.
  - If the final slot still touches a badge, `console.warn` names the label.
  - Diagrams with no badges are unaffected.
- **Rejected along the way (measured, renders in the scratchpad):**
  - Badges in `reserve` moved 10 labels, raised relax warnings to 13, and stacked two pp-overload labels.
  - A linear ink model still moved 4 labels.
- **shooting-breakaway-approach:**
  - The label now sits just under F with no leader. Before, it touched badges 1 and 2, and its leader dashed through the numeral "1".
  - The blue line and the centre-circle arc cross the label. The white halo keeps it legible, and no placement at that height avoids both, because the label is about 25 ft wide and the gap between the lines is about 24 ft. The comment says so.

## Measured
| | Before | After |
|---|---|---|
| Label ink on a route badge (631 labels, 58 badges) | 1 | 0 |
| Leaders crossing a badge | 2 | 1 (oz-five-man-shape, plan row) |
| Relax warnings | 12 | the same 12 |
| SVGs changed by the build | — | 1 of 204 (shooting-breakaway-approach); `diagrams.json` byte-identical |
| Final round (per-tier logic, comment) | — | all 205 outputs byte-identical |

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | KEEP the code, plus a `labelHint` (the first placement was roughly equal and slightly worse for proximity). Hardening recommended (badge test before the sweep). Confirmed 2 of 3 dot-touch spot-checks as real halo bites, contradicting SG158's "0" (plan row) |
| site-reviewer (headless Chromium; 1440/400/320; light/dark; first placement) | PASS; leader through badge 1 noted (since removed by the hint) |
| site-reviewer (final placement) | PASS: legible, not clipped, attached to F, no leader, on no badge, no horizontal scroll, no console errors. Minor: the comment's "clear of the blue line" was false (fixed) |
| diagram-reviewer, narrow re-check (hashed 202 diagrams across five variants) | PASS: only shooting-breakaway-approach differs from HEAD; no badge-less diagram changed; warn count 0. Minor: the tier-downgrade edge (fixed with per-tier logic; output byte-identical) and the comment (fixed) |

No content, rules or captions changed.

### C11
- One authoring agent made every code and spec edit; the coordinator wrote only the plan and this record.
- The last round (per-tier logic and the comment) follows the reviewer's own suggested fix and changes no output: all 205 hashes are identical. So the site review of the final placement stands.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including build-diagrams and check:links.
- check_facts, check_links --quiet, check_absolutes (after the build), check_geometry, check_zones, check_secrets and check-arrivals (0 hard): exit 0.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D8, D10, D13 | Out of scope, declared: no rule, citation, figure, facts line or claim changed |
| D9 Summary layer | No caption or describe text changed (`diagrams.json` byte-identical) |
| D11 Reader safety | Out of scope: placement only |
| D12 Read-aloud | Out of scope: captions unchanged |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | site-reviewer twice, diagram-reviewer twice |

## What this method could not have found
- Font metrics on Safari, Firefox, Windows and Linux. The ink table is macOS Chrome Helvetica Neue.
- The per-tier fallback has not run on a real label that badges box in; no current diagram triggers it.
- Leaders against route lines and arrowheads; labels against painted lines (no checker).

# SG147: Diagonal pulls start from front-to-back dangles beside the feet; two across-the-body cards say "out wide" (2 November 2026)

**Files:**
- content/off-the-ice/practising_on_your_own.md (Diagonal pulls, Dangle and pull across, Pull across and snap back cards)
- site/src/drills/07_off_ice_stick.mjs (Diagonal pulls drawing; legends on Diagonal pulls and Dangles on your left/right; "out wide" labels on Dangle and pull across and Snap back; export cards)
- site/src/data/drills.json (rebuilt by build-drills)
- project/plans/OPEN_ITEMS.md

## Owner rulings (2 November, in session)
- Verbatim: "the Diagonal pulls should show the dangles on the left and right as front to back and next to the feet i.e. more backwards in the same position as Dangles on your right and Dangles on your left"
- Asked whether Dangle and pull across and Pull across and snap back should match. The owner answered "No, keep as drawn": side to side, out wide.

## What changed
- **Diagonal pulls:**
  - The side spots are moved to exactly where the Dangles on your left/right cards put the puck (beside each foot, level with it), with front-to-back dangle arrows. The front spot stays side to side.
  - The pulls are straight and run diagonally forwards and inwards, drawn with the two parallel arrows used on snap back and wide pull.
  - Card steps 1–2 now say "Dangle front to back beside your left foot…" and "…from beside your right foot".
  - The legend has two glyphs, a vertical "front to back" and a horizontal "side to side".
  - No blade is drawn, because the shaft crossed the pull. The two nearest sibling pull cards draw none either.
- **Dangles on your left/right:** the legend dangle glyph is now vertical, matching the drawing (the SG146 site-reviewer nit).
- **Dangle and pull across, and Pull across and snap back:** wording only. The cards, descs and labels say "dangle out wide"; the geometry is unchanged.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer (all changed drawings, cards, descs, legends; gate checks) | PASS on all six drawings. Side spots match the side-dangle cards exactly. Pulls are 54.8° from horizontal, clear of the shoes by about 0.34 units (tight). No blade is consistent with the closest siblings. Two optional nits: the card doesn't say the front dangle is side to side; label 2 on Dangle and pull across drops "on your right" |
| site-reviewer (five drawings, 1440 and 400, light and dark; headless Chromium, as the Chrome extension blocks localhost) | PASS: inline, no overlap or clipping, legends legible, no horizontal scroll, no duplicate ids, clean console |
| safety-reviewer (narrow, staged bytes; added after the first commit-gate BLOCKED on C6 because the coordinator had declared it out of scope) | SHIP: the beside-the-foot dangle is already taught on Dangles on your left/right and the pull runs away from the feet; out wide is a smaller reach than Wide pull across; §4's footing, start-slowly and weighted-puck lines cover the rest; no safety line lost (check_marker_pairs 0 LOST). Not new: §4 never says to wear shoes on tiles (plan) |

No rules content.

### C11
The single authoring agent that owns these cards and drawings made every edit. The coordinator ran the build and edited only the plan and this record.

Checks after the last edit: full `npm run build` with the absolute binary exited 0 after the last source edit. check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0. check_marker_pairs: 0 LOST. check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 | Out of scope, declared: no rule, citation or URL |
| D5 Provenance | The owner's own drill and ruling, quoted above |
| D6–D8, D10, D13 | None touched |
| D7 Cardinal rule | Unchanged ("coaching craft" line stands) |
| D9 Summary layer | No summary layer names these drills' dangle positions (layer-tested in SG146) |
| D11 Reader safety | safety-reviewer (narrow) |
| D12 Read-aloud | Drill markers voice nothing; card wording reviewed |
| D14 | check_links and the build's check:links |
| D15 | site-reviewer |

## What this method could not have found
- Whether the steep (54.8°) diagonal is what the owner means by "diagonal".
- Whether a reader misses the blade on this one drawing.
- Real phones and other browsers.

# SG168: nz-1-2-2-containment's "puck carrier" label lifted clear of the faceoff dot (4 November 2026)

**Files:**
- site/src/diagrams/neutral_zone_systems.mjs: `labelHint: [-16.6, 19.5]` on the carrier, with a `// SG168 labelHint:` comment

The generated SVG and PNG are build products and are not tracked. `site/src/data/diagrams.json` is byte-identical.

## Source
The OPEN_ITEMS diagram row from SG165, which said the "p" descender of "puck carrier" bites the dot at (69,-22).

## What the author found
- **The row's premise was wrong at pixel level.** The author rasterised the glyphs at 60 px/ft. The closest ink is 0.94 ft from the dot's edge and the halo is 0.38 ft, so the label never bit the dot. SG164/165's 0.04 ft came from a bounding box, whose bottom is set by the "p" descender ~2 ft to the left.
- **The hint was added anyway, for phone width.** At 340 px a 0.94 ft gap is about 1.6 px, which crowds the dot.
  - With the hint, the label moved from (77.49,-23.98) to (77.40,-25.50), and the ink gap became 2.46 ft.
  - The comment states the reason as clearance, not a bite.
- **The 9 other halo hits from SG165 have no bite at pixel level.** Every ink-to-dot gap is larger than the halo; the tightest is 0.475 ft against a 0.225 halo. No other module was edited.
- **The relax warning (leader over paint) remains**, as recorded in SG165.

## Measured
- One diagram build (absolute node), exit 0. Only nz-1-2-2-containment.svg/.png changed, and `diagrams.json` is byte-identical.
- Relax warnings: the same 12.
- Ink census: dotInk 0, dotHalo 9 (box-based, over-reports), badgeInk 0, leaderBadge 0.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer (before/after at 340 and 900 px, zoomed crops) | KEEP. Better at 340 px (a clear gap where the descender nearly touched), equal at 900. Still clearly the D behind the net's label; no new collision. The comment is accurate. Pre-existing circle-arc and goal-line crossings are unchanged |
| site-reviewer (3 host pages × 1440/400/320 × light/dark, headless Chromium, fresh full build) | PASS: inside the SVG, no text or dot overlap, no horizontal page scroll, no console errors, no off-origin requests |

No content, rules or captions changed.

### C11
One authoring agent made the edit; no edit followed the reviews. The coordinator wrote this record.

Checks:
- The site-reviewer's full `npm run build` (dist 20:37, after the 20:35 edit) exited 0, including check:links.
- check_geometry, check_zones, check_absolutes (after the build), check_links --quiet and check-arrivals (0 hard): exit 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D13 | Out of scope, declared: label placement only; `diagrams.json` byte-identical |
| D14 | check_links and the build |
| D15 | site-reviewer and diagram-reviewer |

## What this method could not have found
- Font metrics on other browsers and platforms.
- Dark-theme toggle persistence (the reviewer used prefers-color-scheme only).
- Whether a cold reader ties the label to the D rather than the puck.

# SG165: fourteen diagram labels moved off the faceoff and centre dots they sat on, and one leader off a route tag (4 November 2026)

**Files:**
- site/src/diagrams/ — one-line `labelHint` additions, each with a `// SG165 labelHint:` comment, in these modules:
  - body_contact_and_battles, breakouts, defensive_zone_coverage, neutral_zone_systems, offensive_zone_play, playing_without_the_puck
  - puck_handling, puck_support_and_spacing, scanning_and_anticipation, special_teams, zone_entries
- project/plans/OPEN_ITEMS.md

The generated SVGs and PNGs are build products and are not tracked. `site/src/data/diagrams.json` is byte-identical.

## Source
- The OPEN_ITEMS diagram rows from SG164: an ink census found 10 labels whose ink touched a dot, 13 whose halo did, and one leader crossing a route tag.
- The nz-1-2-2-containment "puck carrier" relax warning.

## What changed
- **Label ink on a dot: 10 → 0.** Each label was moved by a `labelHint` on its player:
  - the-last-player-back "pressure" (the centre dot and red line)
  - angling-your-route "wants the middle"
  - breakout-reverse "arriving"
  - breakout-up "second wave"
  - dz-walk-down-man "on the third forward"
  - entry-delay-curl "alone: turn away, do not stop"
  - lane-jump-guess "you, gone to the lane"
  - nz-pressure "the wall outlet" (a box-only hit, nudged anyway)
  - stick-in-lane-body-net-side "your man"
  - support-distance-range "too close"
- **Halo on a dot: 13 → 10.** The three visible bites were fixed: oz-half-wall-options "the seam", and pk-box and pp-backdoor "strong side, low". The other 10 were judged from zoomed crops to have a gap.
- **Leader through a route tag: 1 → 0.** oz-five-man-shape "the carrier" now sits under F1 and its leader clears tag 2.
- **Not fixed: the nz-1-2-2-containment relax warning.** It is a leader-over-paint issue, not a badge one, and no hint can fix it. The author searched a hint grid and four badge positions, and the reviewer tried five more. The carrier is behind the goal line against the boards, and every leadered slot crosses the goal line or circle. The plan records it as the owner's call: wording, player position or no leader.
- **No label text, caption, describe, route, badge or player position changed.** 14 generated (untracked) SVGs changed, each with only its one label (and leader) moved.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer (14 diagrams, before vs after, 340 and 900 px, zoomed crops) | 14 KEEP, 0 FIX, 0 REVERT. Every hint clears its dot; no new collision; every remaining painted-line crossing was there before. "second wave" and "arriving" still read as D2's (he is the only player in that quarter; both have leaders). Halo spot-checks: nz-1-2-2 "puck carrier" has a real bite, and a tested hint is in the plan; forecheck-212 and pk-nz-1-3 have no bite. Agrees that the relax warning cannot be fixed by a hint |
| site-reviewer (18 host pages × 1440/400/320 × light/dark, headless Chromium, after a full build) | PASS on every page: labels inside the SVG, no text-on-text overlap, no horizontal page scroll, no console errors, no off-origin requests. Minor cosmetic line crossings, all halo-legible and mostly pre-existing: support-distance-range "too close" on the zone's dashed edge, entry-delay-curl's comma on the blue line, pk-box/pp-backdoor "low" on the goal line |

No content, rules or captions changed.

### C11
- One authoring agent made every spec edit; the coordinator wrote only the plan and this record.
- No edit followed the reviews.

Checks:
- One diagram build (absolute node) exited 0. The site-reviewer's full `npm run build` (08:52, after the last module edit at 08:48) exited 0, including check:links.
- check_geometry, check_zones, check_absolutes, check_facts, check_links --quiet and check_secrets: exit 0. check-arrivals: 0 hard.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D8, D10–D13 | Out of scope, declared: placement only; no rule, claim, caption or facts line changed (`diagrams.json` byte-identical) |
| D9 Summary layer | No caption changed |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | site-reviewer on all 18 host pages; diagram-reviewer on all 14 diagrams |

## What this method could not have found
- Font metrics on other browsers and platforms. The thinnest clearances are about 0.6–0.8 ft.
- Whether a cold reader attaches each moved label to the right player.
- Labels and leaders against painted lines, routes and arrowheads: these were checked by eye only.
- 7 of the 10 halo-only hits were not eyeballed by the reviewer.

# SG103 (diagrams): labels off faceoff dots; three relaxed leaders fixed (27 October 2026)

**Files:** site/src/diagrams/
- breakouts.mjs
- faceoffs.mjs
- forechecking_systems.mjs
- goaltender.mjs
- neutral_zone_systems.mjs
- playing_without_the_puck.mjs
- puck_support_and_spacing.mjs
- special_teams.mjs
- winger.mjs
- zone_entries.mjs

Only `labelHint` changes; no `content/` file and no caption or describe text changed.

## What changed and why
- **Labels over faceoff dots.** A dot inside a word reads as a bullet or a stray letter.
  - Measured from the built SVGs with the placer's own glyph metrics, the dot centre falls inside a label's glyph box 25 times before and 11 after. Any dot touching a box: 48 before, 32 after. 16 overlaps were removed and none added.
  - Twelve diagrams changed: breakout-rim (both labels), breakout-d-to-d, neutral-zone-lanes (both), width-makes-the-middle-lane (both), pk-nz-1-3 (its old hint was silently rejected), nz-1-2-2-trap, nz-left-wing-lock, nz-regroup-d-to-d, winger-wall-depth-by-system, forecheck-angling (a 21 ft leader replaced by a label under F), faceoff-neutral-zone and dump-flip-over-trap.
- **Relaxed leader placements, 16 → 13.**
  - goalie-front-door-back-door "backed off"
  - nz-back-off-at-the-line "concedes the line": its leader ran along the blue line
  - forecheck-roles-rotate "the D-to-D"
- **Tried and reverted:**
  - forecheck-212 "puck carrier" stacked under "takes the option";
  - never-both-defencemen "goes too" put hash marks through the word;
  - rush-backcheck-lanes parked "outside lane" beside "puck carrier".
- **Left as it is:** nz-hinge (no hint within 30 ft) and forecheck-122 tag 2. Route 2 is only about 7.7 ft long: on the left the tag stays 0.075 ft inside F2's halo, and on the right it crosses the faceoff circle at every distance.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Diagrams | diagram-reviewer | SHIP on all 15. Each label still reads as its own player's. No new leader reads as a pass. The three warnings are gone and none is new. HEAD and tree were rebuilt in worktrees; exactly these 15 SVGs differ. The manifests are identical, so captions are unchanged. A cold re-render of all 204 PNGs is byte-identical to the published PNGs. Minors: the forecheck-angling comment said "beside" (the label is below; fixed). The boilerplate "a slot whose leader clears the painted lines" overstates: leaders may cross at right angles. The goalie leader runs near-parallel to the goal line, 0.42 ft at its tip. winger "stretch" sits above its W while its siblings sit below. |
| C10 render | site-reviewer | SHIP. All 15 checked on their owner pages at 1440 and 390 px, light and dark: 0 label overlaps, 0 clipped, no body scroll at 390. Diagram paint is identical across themes. 0 console errors, 0 failed requests, no off-origin hosts. Headless Chromium over CDP, because the Chrome extension refused localhost; declared. Pre-existing minor: in dump-flip-over-trap the dot sits just left of "one back". |

### C11
After both reviews the coordinator changed one comment: "tight beside F" became "directly below F" (forechecking_systems.mjs). It is comment-only. The diagrams were rebuilt afterwards: exit 0, 13 relax warnings.

## Dimensions
| Dim | Status |
|---|---|
| D1–D13 | n/a: no content, caption or rule text changed. |
| D14 structure, links | check_links passes. |
| D15 render | build-diagrams exit 0 after the last edit. The site build at 19:12 covered every label change (the later edit is a comment). The site-reviewer viewed it. |

### Mechanical checks
check_geometry, check_absolutes, check_zones, check_links and check-arrivals (0 hard) all exit 0.

## What this method could not have found
- Whether a reader links the four leaderless labels to their players. That is a judgement, not a test.
- Dots within about 0.3 ft of a word edge: the glyph widths are estimates.
- Text crossing painted lines, which nothing scores.
- Multi-host diagrams on their other pages.
- Safari, Firefox or real phones.

# W403: twenty labels on seventeen diagrams moved off the rink paint they crossed; the severe label/paint count falls from 29 to 14 (17 November 2026)

**Files:**
- site/src/diagrams/ (12 modules): defending_the_rush, defensive_zone_coverage, faceoffs, game_management, neutral_zone_systems, playing_without_the_puck, positions, puck_support_and_spacing, rink_map_and_glossary, rules_primer, scanning_and_anticipation, zone_entries
- project/plans/OPEN_ITEMS.md
- this record

No content, caption or describe text changed. diagrams.json did not change, because label offsets are not stored there. The built SVGs in site/public/diagrams are untracked build output.

## Source
- **Plan row:** From W402 (1), the `scripts/check_label_paint.py --severe` worklist.
- **Owner priority:** readability and diagrams.
- **Agents:** one diagram agent, so that full diagram builds did not race.

## What changed
Every change is a placer hint: `labelHint` for player labels, `labelDx`/`labelDy` for zone labels. Each carries a W403 comment. No players, routes, zones or wording moved.

| Diagram | Label | Problem | Final hint |
|---|---|---|---|
| defender-three-depths | "the default" | blue line, same colour | `labelDx: 5.5` |
| the-three-zones | "neutral zone" | blue circle and red line, same colour | `labelDx: -2.62, labelDy: 16.2` |
| faceoff-where-the-draw-goes | "after a goal" | blue circle, red line | `labelDx: 2.03, labelDy: -11.4` |
| faceoff-where-the-draw-goes | "carried offside" | blue line through the word | `labelDx: 4.79, labelDy: 0.5` (line now in the word gap) |
| offside-faceoff-location | "if carried" | blue line through "ied" | `labelDx: -7.5, labelDy: 0.6` |
| rush-backcheck-lanes | "the middle lane" | red line and blue circle | `labelDx: 55` |
| nz-stand-up-at-the-line | "feet stopped" | 1 ft blue line through the "o" | `[-14.5, -7.5]` |
| dz-collapse-high-slot | "holds their point" | blue line through "holds" | `[7, 8]` |
| dz-collapse-high-slot | "collapsed into the high slot" | arc along the baseline, hash tick, near an opposition F | `[-21, -5.75]` |
| defender-two-on-one | "in the passing lane" | runs along | `[2, -8.5]` |
| dump-cross-corner | "best placed — taken out of it" | runs along | `[5.5, -8]` (one steep crossing left) |
| dump-cross-corner | "shoots it diagonally" | knock-on onto the blue line | `[16, 6]` |
| faceoff-dzone-alignment-other-circle | "boards-side winger" | runs along | `[-20, -0.28]` |
| faceoff-dzone-tie-up | "nearest body" (W) | runs along | `[-13, -2]` |
| five-on-six-clear-three-outcomes | "your goalie" | runs along | `[18.5, -5]` |
| lane-jump-anticipation | "you, still net-side" | runs along, then hash ticks and crease | `[-6.4, -9.5]` |
| legal-route-through-traffic | "standing still" | runs along | `[0, 13.2]` |
| scan-before-a-wall-reception | "support, already seen" | runs along, then hash ticks | `[-18.93, -13.4]` |
| support-triangle | "into the middle" | runs along, then hash ticks | `[0, -14.5]` |
| unmarked-but-unavailable | "unmarked, unavailable" | runs along | `[-20, -5.5]` |

**Review rounds:**
1. The first diagram-review read found every move better or no worse. It recommended five Minor nudges for hash ticks, an opposition F and a faceoff dot.
2. Three of the nudges were applied verbatim.
3. The placer rejected the other two: W's and G's own reserve boxes ruled out those slots. The author found accepted alternatives (dz-collapse `[-21, -5.75]`, lane-jump `[-6.4, -9.5]`) and reported them rather than forcing them. The coordinator chose to apply them.
4. The diagram-reviewer's final read was CLEAR on all five.

**Two "same colour" hits are still listed, and both are harmless:**
- **"if carried":** a false positive from the checker's 0.56 em width estimate. The ink clears the line by about 0.7 ft. The reviewer agreed.
- **"carried offside":** the blue line genuinely crosses the label box, but only through the word gap, so the ink is clear. The reviewer noted that no width model removes this one. It would need a "paint only in a word gap" test.

**Left alone (14 severe remain), because no legal clear slot exists:**
- dump-cross-corner "long backhand retrieval"
- nz-left-wing-lock "has the puck"
- pp-spread-5on3 "the triangle"
- dump-and-the-trapezoid "only inside the marked lines"
- icing-gaining-the-line ×2
- nz-1-3-1 "the read-maker"
- rush-gap-and-angle "inside, closing"
- rush-3-on-2-default "takes the middle"
- rush-3-on-2-alternative "the third attacker"
- support-angles "level — changes the side" (53 ft wide)
- breakout-up "gone behind" (accepted in W398)

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | **First read:** no Critical or Major; all 17 better or no worse; five Minor nudges. **Final read:** CLEAR (each label clears ticks and paint at 400 px 1× and reads as its own). |
| site-reviewer | All 17 host pages serve inline SVGs whose label positions match the rebuilt public SVGs. No label is clipped or overlapping; 0 console errors; nothing over 50% at 400px. Three attribution Minors were found, and the author proved all three predate W403 (below). |

### C11
The coordinator wrote no hints. Every final hint is the reviewer's own, or an author alternative that the reviewer read and cleared in its final read.

## Checks after the last edit
- **Diagrams:** `build-diagrams.mjs` (absolute node) exited 0. The built SVGs are byte-identical to the author's previews.
- **Site build:** `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 06:31:18, and no site/src file is newer.
- **Gate checkers:** check_links --quiet, check_facts, check_absolutes (408 caption units), check_geometry and check_secrets pass. check_counts --update made no change.
- **Diagram checkers:** check_zones exits 0. check-arrivals reports 0 hard and 8 advisory, unchanged.
- **Label/paint:** `check_label_paint --severe` reports 14, down from 29.

## Dimensions
| Dimension | Coverage |
|---|---|
| Diagrams (no D-number) | diagram-reviewer, two reads, 1× and 4× crops; build-diagrams; check_geometry, check_zones, check-arrivals, check_label_paint |
| D15 Rendered site | site-reviewer: 17 host pages at 400×812 DPR 2, light and dark; inline-SVG positions compared with the public SVGs; m.js on 12 host pages |
| D1–D14 | not engaged: no content, caption, rule or terminology change |

## Found, not fixed (plan rows)
1. **Three labels, all present before W403 (the author diffed against pre-W403 build output), sit beside a different player from the one their leader points to:**
   - faceoff-dzone-tie-up: the D's "nearest body" sits beside the white C;
   - faceoff-dzone-alignment-other-circle: "boards-side D" sits beside the C;
   - scan-before-a-wall-reception: "retrieving" (the D's) sits under the G's crease.
2. **Fourteen severe label/paint crossings have no clear slot** (list above). They would need a label wording change or a player move.
3. **check_label_paint excludes hash ticks**, so tick crossings elsewhere are unaudited. It also flags paint that falls only in a word gap ("carried offside").
4. **Non-severe blue-line crossings were left alone:** "briefly unmarked", "may step down", "holds the line", "puck carrier", "the pass you take away", "their point man". The circle edge through "on the puck" was also left. All are legible behind the halo.
5. **"collapsed into the high slot" clears a hash tick by about 1 px at 1×** in librsvg. A browser could close it.

## What this method could not have found
- SF Pro on real devices (the renders used librsvg fonts).
- Host pages other than the first per diagram.
- Whether each label sits where the hockey says it should. Placement was judged for legibility and ownership only.

# W555: the bar's interference limb, counterweights for Hockey Canada's push latitude, two new arrival advisories, and one redraw (20 November 2026)

## Content

### puck_handling (one agent)

- **:521 Penalty cell (W553(1d)).** "Arms extended, driving the shaft in" became "Driving the shaft in, arms extended or not". Under Hockey Canada 9.2 (hc.txt :7221) and the CARHA glossary (carha_2026.txt :318–320), a bent-arm drive is a cross-check too. Under USA Hockey a drive is "a check being delivered". Table headroom is unchanged at 3 characters.
- **:523 (W553(1b)).** New sentence: "Once the puck has gone, take the bar off: with no puck in the area, USA Hockey's Casebook warns that steering a player with the stick can be interference." Source: usah_casebook.txt :11815–11836, 609 Situation 2. "With the stick" follows the safety-reviewer's optional sketch, so it is not heard as the free-hand holding act at :508/:530.

### Push-leniency sweep (W553(1c))

The sweep found four sites that quote Hockey Canada 9.2 Interpretation 1's push leniency (hc.txt :7242–7250).

| Site | Before | After |
|---|---|---|
| puck_handling :536 | Correctly framed | Unchanged |
| language_and_glossary :428 | Correctly framed | Unchanged |
| rules_primer :456 | Gave the leniency as the book's "test", with no counterweight (permissive) | Adds "— that latitude is the referee's, not yours, so never push with the shaft" |
| body_contact :1530 | Ended on fact, not instruction | Adds "so never push with the shaft and count on the referee letting it go" |

## Diagrams and tooling

### check-arrivals.mjs (one agent): two WARN-level advisories

- **Form [c]: a skater route's curve passes within a glyph radius of a player who is neither its owner nor its target.**
  - It samples the quadratic Bezier at 400 points by arc length, using the same control point as `playSvg`.
  - It trims 1.5 ft at each end and uses `ARRIVAL.glyph` (2.9 ft).
  - Result: 0 hits.
  - **The diagram-reviewer found that the first version never reached `backward`, `crossovers` or `stop` routes**, because an earlier skip excluded them. That is 16 routes. This was fixed, and the result is still 0.
- **Form [f]: a tip aimed at a distant player.**
  - Pressure routes: an opponent 9–15 ft ahead of the tip, with a tangent miss of 2.9 ft or less.
  - Arrow routes: goaltenders only, and only on the reader's own routes. Opposition carries at a goalie are breakaways, so they are excluded.
  - It found forecheck-roles-rotate, plus two opposition-owned routes that are left for the owner's policy.

### forecheck-roles-rotate (forechecking_systems.mjs)

- **The defect:** F1's pressure tip moved from (75, −29), which aimed dead at D2 at 9.49 ft with a miss of 0.00, under a caption that says "never finish into their back".
- **The redraw:** the tip is now at (76, −27). It passes D2's centre by 4.18 ft on his inside, about 8 ft up ice and 5 ft toward the middle.
- **Diagram-reviewer:**
  - It still reads as pressure on the new carrier, and nothing collides.
  - Minor: the describe text and the comment said the tip was "between them and the net", which is false. Fixed to "up ice of the new carrier and on their inside, toward the middle".
  - The comment now records its `rink.json` anchors.
  - It confirmed that check-arrivals reuses the Bezier control point correctly against the built SVG.

## Review

| Reviewer | Findings | Result |
|---|---|---|
| safety-reviewer | All content OK; one optional sketch ("with the stick") | Applied |
| diagram-reviewer | Redraw OK. Minor: the describe text placed the tip wrongly. Logic error: [c] did not reach three kinds. Minor: the target exclusion could hide a third player near the tip (noted). | Fixed |

## Rows

**Closed:**
- W553(1b), (1c) and (1d).
- The pressure-route "still uncovered" row, replaced by the advisories and the two remaining [f] hits.

**Owner decisions pending:** W521(2), and the opposition-route policy (which now also covers the two [f] hits).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`, `check_caption_negations`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w555.log`).
- check-arrivals: 0 hard, 10 advisory (0 [c], 2 [f]), 1 exempt, 3 allowlisted.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 3 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: USA Hockey Casebook 609 Situation 2, Hockey Canada 9.2 and Interpretation 1, CARHA glossary |
| D9 | Covered: the leniency is now countered in every layer that quotes it |
| D11 | Covered by the safety-reviewer |
| D13 | Covered by the diagram-reviewer and the PNG check |
| Others | Not engaged |

## What this method could not have found

- **Whether a coach reads the level pressure route,** stopping about 5–6 ft from D2's glyph edge, as closing or as hanging off him.
- **What [c] misses:** the drawn waves and zigzags around a route, and a curve that bows through its own target.
- **Paraphrases of the push leniency** that use none of the swept words.

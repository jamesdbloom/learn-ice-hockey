# W479: pinch captions put the amber on the instruction, Puck Handling says where the half-wall is before the caption uses it, and the trail-skate sentence says "until the puck is completely across" (18 November 2026)

**Files changed**
- **Content:** technique/puck_handling.md and technique/passing_and_receiving.md
- **Diagrams:** site/src/diagrams/risk_management.mjs and site/src/diagrams/puck_support_and_spacing.mjs, plus site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:** From W468 (2) and (3), and the W465 diagram-review nits.
- **Authors:** two agents, (A) puck_handling and (B) the diagrams plus passing_and_receiving.

## What changed
| Site | Before | Now |
|---|---|---|
| puck_handling :607 (voiced, chunk 037) | "half-wall" was first defined at chunk 051, 14 chunks after the caption used it | adds "Here it is on the half-wall, the boards level with the faceoff dot." just before the scan-before-a-wall-reception marker (owner: rink_map :414) |
| PINCH_CONTACT (pinch-centre-high and pinch-centre-below-the-goal-line; hosts: risk_management, game_management, defender) | "⚠️ No contact is drawn: … ends in two bars, meaning arrive and contain…" (amber from the disclosure, 34% / 31%) | "No contact is drawn: … ends in two bars. ⚠️ Arrive and contain on the wall, not on a player, and whether that arrival may end in a hit depends on whether your league allows body checking at all." (amber is now 22.8% / 20.5% and opens a fresh sentence; −8 chars) |
| support-a-battle-from-outside | "stick down as an exit, and brings their checker out with them" | "stick down for an exit, and keeps their checker out with them" (in the picture the checker was never in the pile) |
| support-angles | "Keep the trail skate on the ice at or behind the line, which is onside under every book." | "Until the puck is completely across, keep the trail skate on the ice on or behind the line, which is onside under every book." |
| passing_and_receiving :670 | "…keep your trail skate on the ice at or behind the line until the puck has completely crossed it, which is onside in every book." | "As the ahead option, until the puck has completely crossed the blue line, keep your trail skate on the ice on or behind it, which is onside in every book." ("which" now attaches to the skate position) |
| passing_and_receiving :850 (CM) | "…until the puck crosses" | "…until the puck has completely crossed" |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **support-angles:** OK in all six books (NHL 83.1, IIHF 83.1 in v1.1 and 2026/27, USAH 630(a) plus Casebook Situations 7/8, HC 6.11 Interps 1–4, CARHA 2026 72(c) Notes 1–2, PWHL 85.1). It is stricter than the NHL, IIHF, PWHL and CARHA, so it errs safe. British layer: no change to offside; IHUK U12 Appendix D changes what happens after an offside, not what counts as onside. Suggested "on" over "at" (applied). **battle caption:** no rule claim. **PINCH_CONTACT:** words identical. |
| diagram-reviewer | **First read:** PINCH BETTER; battle BETTER; support-angles NO WORSE leaning BETTER, with the "which" attachment fixed; puck_handling BETTER. **Confirmation:** CLEAR. Amber opens a fresh sentence in all six built figcaptions, and the bars are still explained. Flagged P&R :850's bare "crosses" (fixed). P&R :286 facts agrees. |
| site-reviewer | All four pages at 400 light on the 19:17 build: 0 bare, untreated or panels; ⚠️ = HEAD; 0 console errors; worst windows unchanged. Found the split sentence across the amber block (fixed). |

### C11
The coordinator wrote no content or caption text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 19:29:20; the newest source is passing_and_receiving at 19:28:47.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_caption_pairs: 0. check_callout_flow --bare = 0; `--panels --file` = 0 on both content files.
- **Marker pairs:** check_marker_pairs: 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | offside timing and position in all six books plus the British layer |
| D2 Exceptions | IHUK U12 continuous offside |
| D3 Cross-book divergence | USAH/HC skate-on-ice requirement vs the plane test |
| D4–D8 | not engaged |
| D9 Summary layer | P&R :670, :850, :286 aligned |
| D10 Key-facts | :286 checked, unchanged |
| D11 Reader safety | not engaged: tactical and placement only; the pinch contact limb is unchanged in words |
| D12 Read-aloud | half-wall now defined in the same chunk; "which" attachment |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | owner rink_map |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer, two reads |

## Found, not fixed (plan row From W479)
1. **Bare "as the puck crosses" in offside timing elsewhere:** center :903 and :994, neutral_zone_systems :666, zone_entries :1265, rules_primer :1207. Most read naturally as crossing fully. A read-only content check is needed before any change; do not sweep.
2. **P&R :850 and :286 say "at or behind"**, where :670 and the caption say "on or behind". They mean the same; this is a nit.
3. **site/public/diagrams/scan-before-a-wall-reception.png (17:41) was older than its SVG** at review time. Check whether anything serves the PNG.

## What this method could not have found
- Whether dropping "meaning" leaves some readers unsure what the bars stand for.
- Whether coaches accept "keeps their checker out".
- Real synthesised audio.

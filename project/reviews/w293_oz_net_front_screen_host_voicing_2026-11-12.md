# W293: the longest voiced caption freed by voicing its crease-line count in both host pages, and the NHL's crease answer corrected (12 November 2026)

**Files:**
- content/systems/offensive_zone_play.md
- content/positions/center.md
- site/src/diagrams/offensive_zone_play.mjs
- site/src/diagrams/rule69_clauses.mjs (comment only)
- site/src/data/diagrams.json (build product; only oz-net-front-screen's caption differs)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This round works the "Diagrams and site" plan row. The longest voiced caption was oz-net-front-screen, at 1,484 characters. SG207 left it whole: freeing it needed offensive_zone_play.md's Screening section to voice the four-book "the line is crease" count and the IIHF table contradiction near the marker. The owner had made readability and diagrams the priority on 8 November.

This is the first "host-side" caption trim. The host prose next to the marker now voices the limb, and only then is the caption cut.

## What changed
**Hosts.** Each host gained one sentence. The final wording is set by the reviews below.
- **offensive_zone_play.md, end of the Screening "Position" bullet, just above the marker (chunk 029):**
  > "Off the line is the answer under every book: USA Hockey, Hockey Canada and CARHA count the red line as crease, and so does IIHF Rule 1.7, though the goaltender-interference table in the IIHF, NHL and PWHL books (Table 14 in the NHL and PWHL books and the IIHF's 2026/27, Table 16 in the IIHF's 2025/26; IIHF Situation 5 E) allows a goal to a screener planted on it."
- **center.md, "Stand clear of the red line", just after the marker (chunk 030).** Its existing NHL clause was corrected as well:
  > "…— and the NHL's rink rule settles it neither way, while its Table 14 allows the goal to a screener planted on the line. The IIHF's own appendix table also allows a goal to a screener planted on the line, so that book answers the play both ways — off the line is the only answer that works under every book."

**Caption.** oz-net-front-screen went from 1,484 to 1,151 characters. It no longer imports `CREASE_LINE_IS_THE_CREASE`, so that constant now has no importer. The constant itself was not edited. The ⚠️ sentence "Keep your feet out of the blue paint, and off the crease line at its edge." is kept word for word. Every other limb stays, because some host does not voice it near the marker:
- the 6–8 ft position;
- the 9.5 ft drawing disclosure;
- the crease geometry;
- the NHL/IIHF "normally legal" and REFEREE_JUDGEMENT;
- USA Hockey 625(b) and IIHF 69.1, the zone cost;
- CARHA 66(b) and its scope;
- "other rec leagues".

rule69_clauses.mjs's CURRENT USERS comment was updated to match.

**A wrong premise in the brief.** The author refuted it. The brief said other modules import `CREASE_LINE_IS_THE_CREASE`. Only offensive_zone_play.mjs did, and the module comment already said so.

**Accepted deviation.** offensive_zone_play.md voices the cut limb in chunk 029, the chunk before the caption, not in the caption's chunk or the next. Only the near-post bullet sits between them, and the page restates the count at chunks 037–038. The safety-reviewer judged this acceptable, and the coordinator accepted it.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agent | Inventoried every limb against both hosts and added one sentence per host, citing the source. Rendered both hosts; the caption stays in chunk 030 in each. |
| rules-verifier | Every factual limb CONFIRMED:<br>• USAH 625(b) Note and Casebook 103 Sit. 4<br>• HC Definitions<br>• CARHA Definitions<br>• IIHF 1.7 (both editions)<br>• IIHF Appendix IV Situation 5 E<br>**PARTIAL:** NHL and PWHL Table 14 also allow a goal to a screener planted on the line, so center.md's "the NHL's own rule settles it neither way" was true of NHL 1.7 only. "Off the line" is safe advice under all six books. No limb of the trimmed caption is left unvoiced. |
| safety-reviewer | Nothing blocking. Neither sentence is permissive, and "Important." is still voiced on both hosts. **WORDING:** the center.md sentence ended on the permissive half; add "off the line is the only answer that works under every book". |
| rules-verifier, narrow re-check of the coordinator's combined wording | center.md: CORRECT. offensive_zone_play.md: the draft "the IIHF's own Rule 69 table, like the NHL's and the PWHL's (Situation 5 E)" mislabelled the PWHL table (Rule 71, unlettered items). The reviewer's replacement was applied verbatim. |

### After the commit gate
The gate BLOCKED on two points.
- **C5/C7.** The parenthetical "Table 14 in each" dropped the edition qualification. In the IIHF's 2025/26 book, the edition Britain adopts, the table is Table 16, and its Table 14 is Rule 16. A narrow rules-verifier confirmed the facts in both IIHF editions, the NHL and the PWHL, and supplied the exact parenthetical now applied verbatim. It matches the page's own Sources line (:1315) and center.md:763.
- **C10.** No site-reviewer ran. The coordinator accepts the gap for this text-only change, as in the earlier caption rounds. The gate confirmed from site/dist that on both host pages the caption's `warn-inline` run opens on the ⚠️ sentence.

The gate also flagged a stale rule69_clauses.mjs comment at :192, which still said one caption speaks the constant; it is now updated. The whole change was rebuilt after these edits.

### C11
The author wrote the two host sentences and the caption trim. The coordinator combined the safety-reviewer's and rules-verifier's sketches into the center.md sentence and the first offensive_zone_play.md revision. A separate rules-verifier re-checked that wording, and its replacement for offensive_zone_play.md was applied verbatim. The coordinator also updated the rule69_clauses.mjs comment and wrote the plan row and this record.

### Checks after the last content edit
- check_facts exit 0 (no pipe)
- check_links --quiet exit 0
- check_absolutes passes
- check_marker_pairs 0 LOST on both files
- check_callout_flow --panels 0
- check_caption_pairs 0 violations
- full `npm run build` (absolute binary), including the diagram build, after the final edit

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier ×2: IIHF 1.7 and Appendix IV in both editions; NHL 1.7 and Table 14; PWHL 1.7 and Table 14; USAH 625(b) and Casebook 103 Sit. 4; HC and CARHA Definitions |
| D4 Citations | out of scope: no URL changed |
| D5–D8 | not engaged |
| D9 Summary layer | not engaged: no KT, Common Mistakes or facts line changed |
| D10 Key-facts layer | not engaged |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | both hosts rendered; caption chunk 030 and "Important." confirmed |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | build; no browser check |

## What this method could not have found
- Other layers of either document that repeat "the NHL settles it neither way" or "under every book" in other words. A grep found no other copy of the NHL crease claim.
- Whether "both ways" lands as a warning or a loophole for a real listener. That needs an ear test.
- How Hockey Canada, CARHA or USA Hockey rule on a skate on the line in an Interpretation worded differently from "plants" or "crease line".

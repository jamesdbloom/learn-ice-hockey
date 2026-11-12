# W299: USA Hockey's attacking-zone faceoff exceptions and the intentional-offside limb carried into every layer (12 November 2026)

**Files:**
- content/systems/faceoffs.md
- content/foundation/rules_primer.md
- site/src/diagrams/faceoffs.mjs (one caption word)
- site/src/diagrams/rules_primer.mjs (the offside-faceoff-location caption, after the first commit gate)
- site/src/data/diagrams.json (build product; exactly two captions differ: faceoff-where-the-draw-goes and offside-faceoff-location)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The de2001c7 commit gate found that faceoffs.md :189 (body) still said "a stoppage the attacking team caused in its attacking zone goes to the nearest neutral-zone spot (612(c))", with no exceptions. The facts lines nine lines above had just been corrected. Under USA Hockey a high stick (621(d)) or a penalty that puts you shorthanded (612(b)) draws in your own end, so the body line made both cheaper than the book. This is the "correction reached one layer and stopped" shape.

The author was briefed on the claim, not the line, across both files and every layer.

## What changed
**faceoffs.md:**
- :161 (facts): "a low stoppage" is now defined as "a stoppage between the end-zone dots and the end boards".
- :179: "Unintentional offside where the puck was carried over".
- :184: the carried-offside sentence now says "unintentional". It adds "Going offside on purpose, or with no chance of a legal play (USA Hockey), sends the draw to your own end in every book."
- :189: now carries 612(c) "most stoppages", the 631(d) accidental out-of-play exception, and 621(d) and 612(b), which send the draw to your own end. "Nobody's fault" is gone, because 612(b) defines a last-play faceoff as "actions of both teams" or a stoppage "for any reason other than what is specified". The gloss now reads "one both teams caused, one no rule places, or one another rule sends to a last-play faceoff".

**rules_primer.md:**
- :229: "an unintentional carried offside costs you a little, and a deliberate one, or one with no chance of a legal play (USA Hockey), sends the draw to your own end in every book".
- :934: "a stoppage between the end-zone dots and the end boards…".
- The faceoff table's high-sticking cell now adds "USA Hockey and CARHA: the offending team's own end". The table still renders at 15 chars and 0 rows of headroom.
- The high-sticking bullet now scopes the neutral-zone draw: "(NHL and IIHF 80.2, PWHL 82.2) — superseded after the first commit gate, which moved Hockey Canada to its own clause (see below)". It adds "Under USA Hockey and CARHA it costs more: the draw goes to an end-zone spot in the offending team's own end (621(d); 62(d))". Before, a USA Hockey or CARHA reader was sent to the neutral zone.
- The intentional-offside bullet's citations now cover all six books: PWHL 85.7, Hockey Canada 6.3(d)(iii) and CARHA 72(f) were added.

**faceoff-where-the-draw-goes caption:** "an offside where the puck was carried over" became "an unintentional offside where the puck was carried over". The author found the claim in the caption layer and reported it, and the coordinator made the edit.

**Not changed:**
- The three PWHL 83.6 citations (faceoffs :940 and :943, rules_primer :734). The sweep found them, but all concern icing at numerical strength, and PWHL 83.6 is "Numerical Strength", so they are correct.
- The summary layers. A grep of Key focus, Overview, Common Mistakes and KTs found no statement of either claim.
- Markers: no ⚠️ was added, moved or removed.

## After the first commit gate
The gate BLOCKED. The `offside-faceoff-location` caption on rules_primer.md still said *"Carried over the line, and the draw is the neutral-zone spot nearest that attacking zone"* without "unintentional". That is cheaper than NHL 83.6(iv) and 83.7 for a deliberate offside, and it was the same claim this round fixed in the sibling caption. The coordinator made five follow-up edits:
- **Caption, carried offside.** It now reads "Carried over the line unintentionally, … ; a deliberate offside goes to the offending team's own end (83.7)".
- **Caption, opening.** The opening's "the IIHF and USA Hockey books … not established here" was stale. A first rewording ("the page sets out where the other books put it") was itself false, as a narrow re-check found. It was replaced verbatim with that re-check's wording: "the IIHF and PWHL write it the same way; USA Hockey, Hockey Canada and CARHA word it differently, so check your own book."
- **Bullet at :226.** It now opens "Unintentional offside where the puck entered the zone in an attacker's possession".
- **High-stick bullet.** Hockey Canada moved out of the "least territorial advantage" parenthesis, which it does not write. It is now its own clause: "Hockey Canada sends an attacking-zone infringement to the neutral zone too (6.3(d)(iv))".
- **W296–W298 plan row.** Items (1) and (2) are marked closed by W299.

The narrow rules-verifier re-check confirmed the caption's carried and deliberate limbs (NHL 83.6 and 83.7), the :226 bullet (all six books), and the Hockey Canada clause (hc.txt 6.3(d)(iv); HC 6.9 sets no location). None of these edits makes an act cheaper.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agent | Checked usah 612(b)/(c)/(g), 621(d), 630(c) and 631(d) against source. Checked intentional offside in all six books and the high-stick location in NHL, IIHF and CARHA. Rendered both files (chunks 010, 018 and 105). |
| rules-verifier | Every changed sentence CONFIRMED. None is cheaper than any of the six books. It also checked USA Hockey Casebook 621 Situations 8 and 10, and 612 Situations 2, 5, 6, 13 and 15. **PARTIAL ×2**, applied verbatim: the :189 last-play gloss was too narrow (631(a)/(d), 632(a) and 618(a) also send to a last-play faceoff); "on purpose" was narrower than USA Hockey 630(c)'s "no possibility of completing a legal play" (permissive direction, minor). **Suggested and applied:** PWHL 82.2 and Hockey Canada 6.3(d)(iv) named in the high-stick bullet, and full six-book citations on the intentional-offside bullet. **Noted:** CARHA 57(e) and 62(d) are in tension over the high-stick location. The corpus takes 62(d), the specific and stricter reading. This is a plan row. |
| safety-reviewer | Not run. The rules-verifier found no contact, equipment or penalty-price change, only faceoff location, and nothing cheaper than the book, so it had nothing to hand off. |

### C11
The author wrote the eight content changes. The coordinator made the one-word faceoff caption edit, which the rules-verifier confirmed, and applied the verifier's four wordings verbatim. After the first commit gate the coordinator made five more edits (the offside-faceoff-location caption's two limbs, the :226 bullet, the Hockey Canada high-stick clause and the plan row); a narrow rules-verifier re-check confirmed them and its caption-opening wording was applied verbatim. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
- check_facts exit 0
- check_links --quiet exit 0
- check_absolutes
- check_caption_pairs
- check_marker_pairs 0 LOST on both files
- check_callout_flow --panels 0 and --bare 0 on both files
- check_tables unchanged for rules_primer
- full `npm run build` (absolute binary) after the final edit

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: usah and Casebook; NHL, IIHF (both editions) and PWHL; HC 6.3 and 6.9; CARHA 57, 62 and 72; British RoC and EIHL Casebook (no change to location) |
| D4 Citations | the intentional-offside and high-stick bullets gained citations, each verified |
| D5–D8 | not engaged |
| D9 Summary layer | grepped; no summary layer stated either claim |
| D10 Key-facts layer | faceoffs.md :161, voiced alone, within its cap |
| D11 Reader safety | not engaged: faceoff location only |
| D12 Read-aloud | both files rendered; the qualifier and its claim share a chunk (010, 018, 105) |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build only; text-only change |

## What this method could not have found
- The same claims in documents other than these two, such as zone_entries.md on carried versus passed offside, or center.md. Plan row.
- USA Hockey Casebook Rule 630 situations, which could widen "intentional" further.
- How officials resolve CARHA 57(e) against 62(d).

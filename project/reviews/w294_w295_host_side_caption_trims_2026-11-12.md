# W294–W295: three more long captions freed by voicing their limbs in the host pages (12 November 2026)

**Files:**
- **W294:** content/positions/goaltender.md, content/foundation/rules_primer.md, content/foundation/rink_map.md, site/src/diagrams/rules_primer.mjs, site/src/diagrams/rink_map_and_glossary.mjs. how_to_watch_hockey.md was owned but unchanged.
- **W295:** content/technique/passing_and_receiving.md, site/src/diagrams/puck_support_and_spacing.mjs. puck_support_and_spacing.md was owned but unchanged.
- site/src/data/diagrams.json, the build product: exactly the three captions below differ.
- project/plans/OPEN_ITEMS.md
- this record

## Source
This applies the W293 host-side template (HOST_BRIEF.md) to the next three long captions that earlier batches had left whole because some host did not voice some of their limbs within the caption's chunk or the next. The method: voice each missing limb in the host prose beside the marker, in one or two sentences checked against source, then trim the caption.

## What changed
| Caption | Before | After | Host sentences added |
|---|---|---|---|
| icing-the-race-and-the-dot | 1236 | 979 | goaltender.md :815 (the book list), rules_primer.md :290 (CARHA automatic; Hockey Canada hybrid categories) |
| the-trapezoid | 1232 | 1139 | rules_primer.md :857 (PWHL), rink_map.md :294 (Britain) |
| support-angles | 1088 | 824 | passing_and_receiving.md :666 (trail skate and offside split) |

**The added host sentences**, in their final form after review:
- **goaltender.md :815**, in the chunk directly before the caption, with nothing between them; chunk 054, after the caption, restates it:
  > "Not every book has the race: hybrid icing is the NHL's, the IIHF's and the PWHL's (NHL and IIHF 81.1, PWHL 83.1); USA Hockey (outside adult sled hockey) and CARHA play automatic icing with no race; and Hockey Canada runs hybrid only in U18AAA, Junior and, at the Member's option, Senior."
- **rules_primer.md :290:**
  > "**CARHA's icing is automatic too, and Hockey Canada runs hybrid only in U18AAA, Junior and, at the Member's option, Senior** (6.7(e))."
- **rules_primer.md :857**, reordered to instruction-first on safety review:
  > "**In the PWHL, play as if the trapezoid binds: 1.8 and 27.8 switch it off, but 65.2(viii) still writes the minor.**"
- **rink_map.md :294**, reordered to instruction-first on safety review:
  > "**In Britain, play as though the trapezoid binds too: the standing and reach of England Ice Hockey's suspension of it are unsettled.**"
- **passing_and_receiving.md :666**, tightened on safety review:
  > "As the ahead option at the blue line, keep your trail skate on the ice at or behind the line until the puck has completely crossed it, which is onside in every book. Offside is both skates completely over the line before the puck completely crosses it (NHL Rule 83), and a trail skate held in the air behind the line is onside in the NHL, IIHF and PWHL but offside under USA Hockey 630(a) and Hockey Canada 6.11."

**Caption cuts.** Each caption dropped only limbs that every host now voices at the same tier or fuller, near the marker:
- **icing:** the "Under NHL and IIHF Rule 81.1…" attribution and the USA Hockey / CARHA / Hockey Canada scope sentence.
- **trapezoid:** the PWHL contradiction and the British "unsettled". The instruction "In the PWHL and in Britain, play as if the trapezoid binds, and ask your league" stays. "That suspension" became "England Ice Hockey's suspension of the trapezoid, whatever its standing".
- **support-angles:** the offside definition and the trail-skate book split. The instruction stays: "on the ice at or behind the line, which is onside under every book".

Every ⚠️ sentence is byte-identical to HEAD. "Important." is still voiced in every host. No shared constant was edited.

**Left whole (W294):** the rest of the-trapezoid, with a dated `LEFT WHOLE` comment. "Near the marker" here means the caption's chunk or the next. Within that distance, how_to_watch_hockey.md (a spectator page) voices no NHL/IIHF trapezoid minor, no "never freezing", no Handbook carve-out, no centre-red-line bar and no save-then-cover; it does voice the PWHL 65.2(viii) minor and the USAH/HC/CARHA freeze limits. No host voices the whole 63.2(VII) crease limit within that distance: the nearest is goaltender.md, two chunks after its caption (chunk 037); rink_map.md has it three chunks on (025) and rules_primer.md four (099).

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×2 | Inventoried each caption's limbs against every host. Added sentences with source quotes. Rendered every host before and after. Wrote exact figures in the ✂️ and LEFT WHOLE comments. |
| safety-reviewer (W295) | Nothing blocking. The new :666 sentences are true in all six books (NHL and IIHF 83.1 in both editions, PWHL 85.1, USAH 630(a), HC 6.11 and Note 1, CARHA 72(c) Note 1). Leaving CARHA out of the lifted-skate clause is correct. Both hosts voice the cut limbs in the caption's chunk. The fifth restatement on that page is acceptable. **WORDING, applied verbatim:** "a lifted trail skate" became "a trail skate held in the air behind the line", and "until the puck crosses" became "until the puck has completely crossed it". The same looseness at :846 and facts :284 is a plan row. |
| safety-reviewer (W294) | Nothing blocking. Every cut limb is voiced in every host (tables in the review). The goaltender chunk-before placement is accepted, because chunk 054 restates the limb. ⚠️ sentences are byte-identical and "Important." is voiced. The new trapezoid sentence is clear and not permissive. **WORDING, applied verbatim:** rules_primer :857 and rink_map :294 were reordered to instruction-first. |
| rules-verifier (W294) | All four host sentences CONFIRMED: NHL 81.1; IIHF 81.1 in both editions; PWHL 83.1; USAH 624 and the sled and blind-hockey sections; CARHA 65 and its casebook; HC 6.7(e) and Interpretation 8 ("only" is exact); PWHL 1.8, 27.8 and 65.2(viii); EIH R&R 22.3. Both trimmed captions are CONFIRMED: no dropped limb is unvoiced, and "never touched where a goalie may freeze the puck" holds. Two completeness notes, which are plan rows: HC hybrid's own goalie wave-off (6.7(e)(vi)) is not mentioned; British U12 has no icing calls (IHUK Junior RoC). |

### C11
The authors wrote the host sentences and the trims. The coordinator applied the reviewers' wordings verbatim, ran the final diagram build and full build, and wrote the plan rows and this record.

### Checks after the last content edit
- check_facts exit 0
- check_links --quiet exit 0
- check_absolutes (408 caption and describe units)
- check_geometry
- check_caption_pairs (0 violations)
- check_marker_pairs: 0 LOST on every changed file
- check_callout_flow --panels: 0
- full `npm run build` (absolute binary) after the final edit

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier (W294) and safety-reviewer (W295), both quoting the primary text |
| D4 Citations | out of scope: no URL changed |
| D5–D8 | not engaged |
| D9 Summary layer | not engaged: no KT or Common Mistakes changed |
| D10 Key-facts layer | not engaged |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | every host rendered; chunk placement confirmed |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | the build only. The coordinator accepts the gap for text-only changes, as in W291–W293. |

## What this method could not have found
- A dropped limb carried only by meaning, which was judged by reading.
- How the added sentences sound in place, for example the trail-skate aside in a paragraph about the picture. That needs an ear test.
- Restatement drift: passing_and_receiving.md now states the trail-skate split at five sites.

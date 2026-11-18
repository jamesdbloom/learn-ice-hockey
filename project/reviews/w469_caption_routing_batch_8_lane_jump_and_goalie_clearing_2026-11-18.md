# W469: caption batch 8 — eleven captions trimmed; the lane-jump rule now says the same thing on every layer of Scanning and Anticipation and Risk Management; the goalie clearing price is split by book (18 November 2026)

**Files changed**
- **Content:**
  - hockey-iq/scanning_and_anticipation.md
  - hockey-iq/risk_management.md
  - positions/goaltender.md (:714, :721, :730)
- **Diagrams:**
  - body_contact_and_battles.mjs
  - playing_without_the_puck.mjs
  - on_ice_communication.mjs
  - goaltender.mjs
  - special_teams.mjs
  - rink_map_and_glossary.mjs
  - defensive_zone_coverage.mjs
  - scanning_and_anticipation.mjs
  - site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:**
  - From W468 (4): the next caption batches.
  - From W468 (1): the lane-jump contradiction.
- **Authors:** four agents.
  - Two of them took follow-ups: a risk_management clause, and the goaltender.md clearing sites.
  - The coordinator built at the end.

## Captions
| id | words: HEAD → now | amber at 400 |
|---|---|---|
| angle-into-the-corner | 189 → 160 | 18.6% |
| inside-lane-longer-route | 162 → 136 | 12.7% |
| shot-block-get-close | 159 → 145 | 34.2% |
| screen-the-goalie-sightline | 183 → 149 | 11.8% |
| legal-route-through-traffic | 153 → 144 | 19.9% |
| the-call-and-who-can-see-it | 182 → 148 | 44.5% |
| goalie-safe-outlets | 162 → 148 | 0 |
| pk-wedge-plus-1 | 173 → 146 | 14.5% |
| the-trapezoid | 183 → 164 | 0 |
| dz-collapse-corner | 158 → 149 | 20.7% |
| lane-jump-guess | 129 → 129 (wording) | 0 |

**Two captions stopped above 150 words, because the layer test would not allow more cuts:**
- **angle-into-the-corner (160):** only posture limbs were left to cut.
- **the-trapezoid (164):**
  - The remaining rule limbs (Handbook carve-outs, centre-red-line bar, 63.2(VI)/(VII)) are not voiced near the marker in how_to_watch_hockey or rules_primer.
  - The coordinator's brief said the trapezoid label had been dropped. That was refuted: W448 dropped the label on dump-and-the-trapezoid, not on this caption.

**Wording that changes a limb, all upheld by review:**
- **angle-into-the-corner:**
  - Case 3 is now "for when you already face the wall". The old "and cannot turn" contradicted "turn first if at all possible".
  - "spread the load: stick and gloves up on the glass, arms out as a shock absorber".
- **goalie-safe-outlets:** the book-by-book tariff was routed to the host.
- **the-call-and-who-can-see-it:** the neck-injury reason now comes before the glyph.

**Diagram-review fixes:**
- "one of three published routes"
- "a goalie keeping skate contact with the crease" (27.8 "maintaining")
- the clearing sentence de-imperatived
- "The drawing cannot show it."

## Goalie clearing price (caption + goaltender.md :714, :721, :730)
1. **The W469 trim said "a minor under most books".** The rules review ruled it WRONG: only the NHL, IIHF and PWHL are automatic.
2. **The first replacement also failed.** It said "always under NHL/IIHF/PWHL, and if deliberate under every book". The safety reviewer, and then the author, showed that HC 10.1(a)(v) and CARHA 55(a) carry a goalie stick-clear clause with **no zone and no intent word**. The replacement would have told an HC or CARHA goalie that an accidental clear is free.
3. **Final split, matching goaltender.md's own Common Mistakes :1702:**
   - from your own end, a minor under the NHL, IIHF and PWHL whether you meant it or not;
   - a goalie's stick clear from anywhere under Hockey Canada and CARHA;
   - USA Hockey only if deliberate.
4. **The same "most books" claim was standing at :714, :721 and :730** and was repaired there. These are pre-existing defects, permissive for an IIHF/British reader.
5. **The rules-verifier confirmed all four sites against:**
   - NHL 63.2(iii) ("including the goalkeeper" in 63.2(i))
   - IIHF 63.2(III), PWHL 65.2(iii)
   - USAH 610(c), HC 10.1(a)(v), CARHA 55(a)

   Leaving out 63.2(ii) (deliberate clear from anywhere) was judged acceptable.

## Lane jump (scanning_and_anticipation.md, risk_management.md, caption)
**The contradiction.**
- Key focus, the facts `Never:` line and KT11 forbade jumping a lane in your own zone.
- The Overview, the body and the caption allowed it on a strong read.

**Now, on every layer:**
- in your own zone, stay between the puck and your net unless the read is near-certain;
- as last player back, never;
- the alternative is named once ("Some coaches want you never to leave your coverage in your own zone; find out which your team plays").

**risk_management's three-question test did not distinguish zones.** It now carries the own-end bar at Key focus, facts `Action:`, body (with a link) and KT7.

**Content-review minors applied:**
- "never as the last player back" now stands alone in Key focus and KT11;
- Check-yourself Q7 is reworded.

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | Lane jump: every layer consistent; non-negotiable 7 met; the facts Never line is correct heard alone. Major: diagrams.json was stale (rebuilt). Minors applied. No other document states an unconditional own-zone rule; centre's "never leave the slot empty" is a mild tension (filed). |
| rules-verifier | 9 captions OK. goalie-safe-outlets WRONG, then a corrected split, then all four sites confirmed. Rule 69 sentence in screen-the-goalie-sightline matches the W460 settled form word for word. |
| safety-reviewer | CLEAR. "Important." ×1 per voiced copy across 10 hosts. The angle-into-the-corner rewording is upheld. Flagged the HC/CARHA goalie clause, which caught the second clearing error. Lane jump: no layer gives permission on a good-but-not-certain read. |
| diagram-reviewer | All BETTER or NO WORSE. Five minor fixes, four applied; "the call" naming the blind D was skipped because it would push the caption to 155 words. |
| site-reviewer | 13 pages at 400 light/dark on the 16:46:49 build. 0 bare/untreated/panels; ⚠️ counts equal HEAD; 0 console errors; every worst window equal or lower; no glyph caption over 45%. |

### C11
The coordinator wrote no content or caption text.
- Authors applied reviewer texts.
- The goalie-clearing final text follows the author's sketch, which the rules reviewer confirmed.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing.
  - dist/index.html: 16:46:49.
  - Newest source: rink_map_and_glossary.mjs at 16:46:11.
- **Gates:** check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass. check_counts: no change. check_callout_flow --bare = 0; `--panels --file` = 0 on all three content files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | 63.2(i)–(iii)/65.2(iii), USAH 610(c), HC 10.1(a)(v), CARHA 55(a), 69.1/69.3, HC 8.3(i), CARHA 66(a)(1), USAH 625(a)(4), 27.8, 63.2(VI)/(VII) |
| D2 Exceptions | CARHA Note 1 (no glass/deflection); Handbook trapezoid carve-outs |
| D3 Cross-book divergence | the clearing split by book |
| D4 Citation integrity | brief premise (trapezoid label) refuted |
| D5 Provenance | USA Hockey material provenance kept (angle) |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | lane jump stated as a tactic with its alternative |
| D8 Numeric ownership | trapezoid dimensions routed to their owner, rink_map |
| D9 Summary layer | lane jump: every layer in two documents; clearing: four sites |
| D10 Key-facts | scanning Position/Never/Risk; risk Action; goaltender :721 |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | dash-scoped "last player back" fixed; imperative de-imperatived |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links (new anchor) |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W469)
1. **goaltender.md states the clearing split three times just before the goalie-safe-outlets marker**, and the caption is a fourth restatement. This is a routing candidate.
2. **center.md's "Never leave the slot empty in your own end"** sits in mild tension with a lane jump from the high slot.
3. **"As last player back, never jump"** may be broader than practice for a defenceman's neutral-zone step-up, if the two are conflated.
4. **the-call-and-who-can-see-it** no longer names the blind defenceman. The fix costs +7 words.
5. **Remaining captions ≥150 words:** 12 — forechecking 5, breakouts 4, faceoff-dzone-alignment, angle-into-the-corner, the-trapezoid.

## What this method could not have found
- Whether shorter captions teach faster.
- Real synthesised audio of the new strings.
- A lane-jump own-zone claim worded without "jump" in documents not swept.

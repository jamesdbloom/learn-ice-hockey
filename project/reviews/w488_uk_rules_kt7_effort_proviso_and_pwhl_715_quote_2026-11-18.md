# W488: UK Rules KT7 says an outside-the-crease goal survives only incidental contact you tried to avoid, and the PWHL 71.5 quotation stops inventing a dash (18 November 2026)

**Files changed:**
- foundation/uk_rules.md
- foundation/rules_primer.md
- positions/winger.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **Plan rows:** From W463 (1), (2) and (4).
- **Method:** a read-only rules-verifier pass, then two authors.

## Read-only findings
- **From W463 (4), PWHL Table 14 Situations 2–3.** These were never opened before this wave. The PWHL table (`pwhl_rules.txt:10721-10856`) matches NHL Table 14 (`nhl_rules.txt:12048-12238`) **word for word across Situations 1–4**; the only differences are pronouns and missing row letters. PWHL 71.1–71.7 match NHL 69.1–69.7 except for the review clause (71.1 "may be subject to a Central Situation Room Review"; 71.5 "Not applicable").
  - The IIHF agrees on goal outcomes but differs on penalty wording ("must assess" against "may … at the discretion"). No corpus sentence claims the penalty wording is identical.
  - Sixteen corpus sentences that treat the three books as the same were checked. None is false.
- **From W463 (2), three "rebound" sites.** All three only narrow 69.7, so they are harsh-only and left as they are:
  - shooting :495 ("relevant contact" is attributed to 69.4);
  - zone_entries :371;
  - rules_primer :1180.

## What changed (voiced)
| Site | Before | Now |
|---|---|---|
| uk_rules KT7 (voiced alone; 61 → 59 words) | "**Stay off the goalie, inside the crease and out, and give ground when they set.** In their crease, contact you start can cost your goal, even incidental; outside it, more than incidental can. In the Elite League, so can contact you start in the blue paint. …" | "**Stay off the goalie wherever they are, and give ground when they set.** Contact you start in their crease, or the Elite League's blue paint, can cost your goal, even incidental. Outside the crease, a goal survives only incidental contact you tried to avoid. …" |
| rules_primer :843 | "its **71.5** reads *"Coach's Challenge — Not applicable"*, so a goal disallowed on you there goes to a Central Situation Room Review" | "its **71.5**, *Coach's Challenge*, reads *"Not applicable"*, so … may go to a Central Situation Room Review" |
| rules_primer :1257, winger :1011 (Sources trailers) | *"Coach's Challenge — Not applicable"* | *Coach's Challenge*: *"Not applicable"* |

**Why KT7 changed.** "More than incidental can" implied that incidental contact outside the crease always keeps the goal. That is mildly permissive. IIHF 69.1 (`iihf_rules_v1.1.txt:5509-5510`) allows the goal only "provided the attacking Player has made a reasonable effort to avoid such contact". The body at :201 already said so; the takeaway, voiced alone, did not.

**Why the quotation changed.** The PWHL book prints the heading "71.5 Coach's Challenge" and the body "Not applicable." on separate lines. The em dash joined them into one invented quoted string. "Goes to" was also firmer than 71.1's "may be subject to". check_quote_drift could not see this, because it matches alphanumerics only.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** the findings above. **Confirmation:** CLEAR. The Elite League blue paint and "even incidental" were verified against `eihl_casebook.txt:742-749` ("Contact in the blue paint area calls for disallowing a goal", with no carve-out for incidental contact). "Outside the crease… you tried to avoid" matches 69.1/69.4. Dropping 69.7 is harsh-only. The 71.5 and 71.1 wording was verified at `pwhl_rules.txt:6065-6067` and `:6140-6141`. |

**Why no safety review.** KT7 is stricter than HEAD, not looser, and the penalty sentence is unchanged. The trailer edits are not voiced.

### C11
The coordinator wrote no content.

### D15
No ⚠️ changed. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 21:37:29, newer than every content edit.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts made no change. check_marker_pairs found 0 lost.
- **Grep:** "Challenge — Not applicable" no longer appears anywhere in content/.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF 69.1/69.3/69.4/69.7 (both editions); NHL and PWHL Table 14 Situations 1–4; PWHL 71.1/71.5; EIHL Casebook 69 |
| D2 Exceptions | 69.7 rebound (omitted, harsh-only) |
| D3 Cross-book divergence | IIHF penalty wording vs NHL/PWHL |
| D4 Citation integrity | 71.5 quotation corrected in three places |
| D5–D8 | not engaged |
| D9 Summary layer | uk_rules layer test: only KT7 dropped the condition |
| D10 Key-facts | no facts line carries the claim |
| D11 Reader safety | stricter; no review needed |
| D12 Read-aloud | KT7 voiced alone now carries the effort condition |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | mechanical only |

## What this method could not have found
- A sentence that treats the three books as one without using an equating word.
- Real synthesised audio.

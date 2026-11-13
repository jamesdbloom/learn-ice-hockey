# W314–W316: readability pass on the longest paragraphs, sentences and Key Takeaways (13 November 2026)

**Files:**
- **W314:** content/systems/zone_entries.md, content/hockey-iq/time_and_space.md, content/systems/special_teams.md
- **W315:** content/foundation/rules_primer.md, content/positions/center.md (switching_positions.md was owned but unchanged)
- **W316:** content/systems/faceoffs.md, content/systems/defensive_zone_coverage.md (winger.md and offensive_zone_play.md were owned but unchanged)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This round follows the owner's priority since 8 Nov, readability and diagrams first (memory: priority-readability-diagrams). Targets were picked from `check_readability.py`:
- the corpus's longest sentence (zone_entries, 125 words);
- the paragraphs over 1,200 characters in these files;
- the Key Takeaways over ~90 words.

The brief was a readability pass only: split, reorder and trim a KT only where the body already carries the limb, with no rule claim reworded.

## What changed
**W314: long paragraphs and sentences**

| doc | max sentence | long paragraphs | longest paragraph |
|---|---|---|---|
| zone_entries | 125 → 61 | 1 → 0 | 1779 → 1188 |
| time_and_space | 68 → 68 | 1 → 0 | 1692 → 1128 |
| special_teams | 58 → 58 | 2 → 0 | 1423 → 1194 |

- **zone_entries :279 → :279 / :281.** The 125-word sentence became six sentences in one bold run. "That faceoff" became "the own-end faceoff for an intentional offside", because the referent now sat across a paragraph break. A ⚠️ was added at :279 so the first half keeps its spoken "Important.".
- **time_and_space :523 → :523 / :525.** The instruction now comes first. :525, "What stops play while the arm is up, book by book", is left unmarked on purpose: it lists the stop-play triggers only.
- **special_teams.**
  - The Hockey Canada head-contact sentence at :1101, :1116 and :1259 became three sentences. The Junior/Senior half now names its book.
  - :1116 was split into :1116 / :1118, with the USA Hockey ladder moved up so "every book but USA Hockey" keeps its price in the same paragraph.
  - New lead-in: "Three books make a match mandatory:".
  - The Common Mistakes bullet :1259 gained an indented continuation (:1261), voiced as an adjacent paragraph in the same item (its own "Important.", no break between them).

**W315: longest KTs (A)**
- **rules_primer KT1: 127 → 117.** The two overlapping instructions were merged under the existing ⚠️, and one semicolon chain became three sentences (and "tags up; leave…" was split too). The one limb dropped was "in several books they are still playing the puck, unbraced". Body :202 and Common Mistakes :1124 both carry it. Dropping it makes "never close on the carrier expecting a whistle" apply in every book, which is stricter.
- **rules_primer :938.** The 80-word sentence was split at its semicolon, and the second half restates "Under USA Hockey".
- **center KT6 (:974): 125 → 125, restructured.** "It ends your game", which followed "play the puck", became "A hit from behind ends your game". The USA Hockey limbs were gathered into one sentence.
- **switching_positions KT8: 130, unchanged.** Every limb is a tier, and splitting it would have left one half that reads as a permission.

**W316: longest KTs (B)**
- **faceoffs KT3: 97 → 81.** Dropped "In your own crease, a hand or body on the puck can be a penalty shot." It is carried at body :1165 and :1181, at Common Mistakes :1325 (marked) and in the facts blocks. The KT keeps "win scrums with your stick only".
- **defensive_zone_coverage KT4: 97 → 99, restructured.** A parenthetical with a dash nested inside became two sentences, worded the same as offensive_zone_play KT8.
- **winger KT11 (113), KT10, KT15 and offensive_zone_play KT8: unchanged.** Every limb is a mandatory tier, a bar or a counterweight.

**Markers:** 0 LOST on all seven changed files. Marked units went up in zone_entries (49 → 50) and special_teams (63 → 65), from one new glyph each (zone_entries :279, special_teams :1116) and, in special_teams, the existing Common Mistakes glyph becoming its own unit. Every other file is unchanged. One SPLIT HALF UNMARKED (time_and_space :525) is intended.

## Reviews
| Reviewer | Result |
|---|---|
| W314–W316 authors | Readability figures before and after; per-limb layer tests for each dropped KT limb; md_to_speech renders; harness on every changed ⚠️ unit |
| safety-reviewer | Nothing BLOCKING; OK on all seven points. **No limb lost:** no claim was separated from its counterweight and every split half names its book. **Referents OK:** at zone_entries :281, "anyway" picks up :279; at time_and_space :523, the universal warning is stricter. **Escalation OK:** 0 LOST, and :525 is safe unmarked because it is adjacent in the audio (chunk 028 p3 → 029 p0). **faceoffs KT3** is safe without the penalty-shot price, which is carried elsewhere. **rules_primer KT1's universal form** is OK. **Harness:** glyphs equal warn-inline, with 0 asides on every unit. **"Three books make a match mandatory"** is an exact closed count: USA Hockey 608(c), HC 7.5(c) and CARHA 53(b) are mandatory; NHL and PWHL 43.4 are discretionary; IIHF 43 has no match tier. Two optional wordings were not applied, because both lengthen units this pass was shortening: a closing "None of these whistles protects you…" on :525, and the mechanism clause back into rules_primer KT1. |

No rules-verifier was run. No rule claim was reworded; the changes split, reorder or drop limbs that are carried elsewhere. The safety-reviewer checked the one new lead-in that summarises rules ("Three books make a match mandatory") against all six books.

### C11
The three authors wrote every content change. Every change was reviewed afterwards. The coordinator wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs, and check_callout_flow --panels / --bare on all seven files;
- check_readability.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | not engaged: no rule claim reworded; one summarising lead-in checked against all six books |
| D4 Citations | not engaged |
| D5–D8 | not engaged |
| D9 Summary layer | KTs in rules_primer, center, faceoffs and defensive_zone_coverage; special_teams Common Mistakes |
| D10 Key-facts layer | not engaged: no facts line changed |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | every changed file rendered by the authors and the reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every marked unit; no site-reviewer (text only) |

## What this method could not have found
- Meaning drift with no lexical trace in a moved clause.
- Claims next to the edits that were not changed and were not re-verified. Example: "a hit meant to injure is a match in every book but the IIHF" overstates for the NHL and PWHL, where 43.4 says "may" (plan row).
- Whether the KTs left over 90 words (switching KT8 130, center KT6 125, rules_primer KT1 117, winger KT11 113, defensive_zone_coverage KT4 99, offensive_zone_play KT8 97) can be followed by ear. That needs an ear test.

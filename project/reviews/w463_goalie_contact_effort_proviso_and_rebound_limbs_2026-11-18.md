# W463: incidental contact with a goalie outside the crease keeps the goal only if you tried to avoid it; the 69.7 exception is stated with both of its limbs (18 November 2026)

**Content files changed:**
- foundation/language_and_glossary.md
- foundation/rules_primer.md
- foundation/uk_rules.md
- hockey-iq/playing_without_the_puck.md
- hockey-iq/time_and_space.md
- positions/goaltender.md
- positions/winger.md
- systems/special_teams.md
- systems/zone_entries.md
- technique/body_contact_and_battles.md
- technique/shooting.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W462 (1) and (2), plus the commit gate's note that (2) was the remaining permissive gap.
- **Coordinator census:** a sweep for `beyond/more than/other than incidental` and `non-incidental` across content/, and a sweep of every diagram caption for the rebound exception. The captions were clean.
- **Authors:** ten agents, one per file. One agent took both time_and_space and winger.

## The three defects
- **P (minor, permissive):** "anything beyond incidental outside the crease costs the goal", with no 69.1 proviso. 69.1 reads: *"Incidental contact with a goalkeeper will be permitted, and resulting goals allowed, when such contact is initiated outside of the goal crease, provided the attacking player has made a reasonable effort to avoid such contact."*
- **A (permissive):** the rebound or scramble exception was not limited to incidental contact. This appeared at playing_without_the_puck :1040 (Common Mistakes) and in body_contact_and_battles facts :1367.
- **N (harsh only):** "you both play a rebound" narrows 69.7's rebound limb. In 69.7, "simultaneously" applies to the loose-puck limb only.

## A brief premise refuted
Three authors (playing_without_the_puck, shooting and rules_primer) refuted the brief independently. It cited **Table 14 3C** as the case of no effort making the goal disallowed. 3C sits under heading 3, a player pushed or fouled into the goalie, and its contact is *"other than incidental"*. Row **2B** (incidental contact outside the crease) prints "Goal is allowed" and states no effort condition.

The rules-verifier ruled as follows:
- **P is right.** 2B is *silent* on effort and does not grant it. Rows 3B and 3C pair "did not make a reasonable effort" with "other than incidental", so the books treat lack of effort as part of what makes contact more than incidental.
- **This is not the W460 shape.** There, rows 5C and 5E described the exact act and answered it. A row that leaves out a condition does not cancel it.
- **No disclosure to readers is needed.**

## What changed (voiced unless stated)
| File | Sites | Defects |
|---|---|---|
| language_and_glossary | :362 Net drive | P, N |
| rules_primer | :817, where the effort proviso follows the 69.4 quotation and the paragraph was trimmed to 1,197 characters with no limb lost; :833 | P, N |
| uk_rules | :201, now "Outside it, try to avoid the goalie: …69.1 allows one after incidental contact only if the attacker *"made a reasonable effort to avoid such contact"*"; :674, the Sources consulted list | P, N |
| playing_without_the_puck | :665; :1040 (Common Mistakes); :664, facts :716, :737 | P; A and P; N |
| time_and_space | :557 | N |
| winger | :771 | N |
| goaltender | :1234, written from the goalie's side ("keeps the goal only if they tried to avoid you"); :1305; :1711 (Common Mistakes) | P, A, N; N; N |
| special_teams | facts :1059 (296/300), body :1075, Common Mistakes :1265; :1081 and Common Mistakes :1268 | P; N |
| zone_entries | :1178, which also gains the PWHL 71.1/71.4 citation | P |
| body_contact_and_battles | Common Mistakes :2081, which now leads with "so steer clear of the goalie"; facts :1367 | P; A |
| shooting | :298; facts :281; :1039 (Sources trailer, not voiced) | P, N; N; P |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Ruled on the 3C premise as above. Every site was OK except **shooting :1039**, marked WRONG (minor). That sentence ran 69.4's *penalty* permission into the goal permission and dropped 69.4's "goalie playing the puck" condition. It now attributes the goal permission to 69.1 alone, using the verifier's wording. rules_primer :817 keeps the two permissions apart under "The goal" and "The penalty", so it is OK. |
| safety-reviewer | CLEAR. No changed unit in any of the 11 files is cheaper than HEAD. The "Important." counts are equal in every file. The rules_primer :817 trim kept every limb, and its render still opens "Important.". |
| site-reviewer | 11 pages checked at 400 light and dark and at 1440 light, on the 15:20:12 build. ⚠️ counts equal HEAD. 0 bare, 0 untreated, 0 panels, 0 console errors. The rules_primer :817 amber run forms. Every worst window measured earlier is unchanged. |

### C11
The coordinator wrote no content. The shooting :1039 correction is the rules-verifier's text, which the author applied and checked in context.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 15:20:12; the newest content file is shooting at 15:19:20.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets all pass. check_counts made no change.
- **check_callout_flow:** --bare = 0, and `--panels --file` = 0 on all 11 files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT across all 11 files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 69.1, 69.4, 69.7 and Table 14 rows 2B, 3B, 3C and 4B; IIHF 2026/27 and v1.1 69.1, 69.4 and 69.7; PWHL 71.1 and 71.7 |
| D2 Exceptions | 69.7, both limbs; the 69.1 and 69.4 effort provisos kept apart |
| D3 Cross-book divergence | NHL, IIHF and PWHL identical; other books not engaged |
| D4 Citation integrity | the 3C premise refuted; PWHL numbers added at zone_entries |
| D5 Provenance | not engaged |
| D6 Negative existence | "no table row" for incidental contact made without effort (refutation) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | every author swept every layer; P and A both found in Common Mistakes |
| D10 Key-facts | special_teams :1059, playing_without_the_puck :716, body_contact_and_battles :1367 and shooting :281, each voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | proviso voiced in the same sentence as its claim (authors' renders) |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W463)
1. **uk_rules KT7** ("outside it, more than incidental can") has no effort proviso and is at 60 words. W462's rules ruling was that "can" does not tell a player incidental contact is safe, so it is left.
2. **Harsh-only leftovers:**
   - shooting :495, "69.4 takes the goal for 'relevant contact'";
   - zone_entries :371, "rebound-scramble";
   - rules_primer :1180, "both going for";
   - glossary/rules_primer :865 and :382, "for contact only";
   - shooting :526, "69.4's reasonable-effort permission" (accurate).
3. **bcb :2081** is 809px tall at 400px, nearly a full phone screen for one bullet. This is a readability candidate.
4. **PWHL Table 14 rows 2 and 3** were not opened.

## What this method could not have found
- A paraphrase of the claim that uses none of the words searched for, such as "a light bump outside the paint is fine".
- Real synthesised audio.

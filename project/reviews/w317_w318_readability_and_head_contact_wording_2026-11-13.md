# W317–W318: the remaining long paragraphs and sentences split, and the head-contact and "most books" wordings fixed (13 November 2026)

**Files:**
- **W317:** content/positions/center.md, content/systems/forechecking_systems.md, content/technique/body_contact_and_battles.md, content/foundation/rink_map.md, content/systems/game_management.md, content/foundation/rules_primer.md
- **W318:** content/systems/special_teams.md, content/positions/winger.md, content/positions/switching_positions.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **W317** continues the readability priority (owner, 8 Nov). Its targets are the paragraphs still over 1,200 characters and the sentences over about 60 words, taken from `check_readability.py`.
- **W318** works the W314–W316 plan row items (3)–(6), plus "very violent".

## W317: what changed
| doc | max sentence | long paragraphs | longest paragraph |
|---|---|---|---|
| center | 57 → 57 | 1 → 0 | 1411 → 1150 |
| forechecking_systems | 71 → 59 | 1 → 0 | 1279 → 1148 |
| body_contact_and_battles | 65 → 65 | 1 → 0 | 1218 → 1190 |
| rink_map | 81 → 61 | 0 | 1189 |
| game_management | 71 → 60 | 0 | 1194 |
| rules_primer | 76 → 60 | 1 → 0 | 1281 → 1200 |

The sentences left over 60 are quotations (body_contact's Buterbaugh quote, the IIHF 42.1 quote and the USA Hockey Standard of Play quote) and rink_map's measurements list.

**Splits.** Each one keeps every limb, names its book in every half, and has had its referents checked:
- center :781 / :783
- forechecking :984 / :986: "on the same two grounds" is replaced by the grounds themselves, and the 7.5 floor is carried in both halves in case a later render puts them in different chunks
- body_contact :2049 / :2051
- rules_primer :938 / :940 / :942, plus sentence splits at :202, :204, :206, :233 and :461
- rink_map :471: the citations moved onto the claims they support
- game_management :1227 and :555

**New ⚠️ (split halves that carry a hazard):** center :783, forechecking :986, body_contact :2051.

## W318: what changed
- **(3) special_teams :1114.** "Head contact can take precedence" was unqualified. It was split, and the new :1116 now reads "Under Hockey Canada, a hit from behind that reaches the head can be called as head contact instead (7.6; 7.7 in Junior and Senior), and ⚠️ **if they cannot protect themselves it is a mandatory match.**" This is a new ⚠️.
- **The same claim in other layers.** special_teams :1101, :1118 and :1261, and switching_positions Common Mistakes :607 and KT8 :674, said "Hockey Canada calls it head contact: a match if…". They now read "can call it head contact instead, and if they cannot protect themselves it is a match", with the match stated flatly.
- **(4) "ends your game in most books".** special_teams KT8 :1323, :663 and :819, and winger KT10 :969 and Common Mistakes :893, flattened Hockey Canada's on-head tier. Each now names the books: "under the NHL, PWHL and CARHA, and under Hockey Canada unless it reaches the head, where you should plan on it anyway; under the IIHF, plan on it". USA Hockey's own price sits beside it. "USA Hockey starts at a minor and a misconduct" was added at :663 and :819.
- **(6) refuted, no change.** "A hit meant to injure is a match in every book but the IIHF" (special_teams :1112) is correct. NHL and PWHL 21.1 read *"A match penalty shall be imposed on any player who deliberately attempts to injure or who deliberately injures an opponent in any manner"*, USA Hockey 602(a), HC 7.5(c) and CARHA 48(a) all say "shall/will", and the IIHF has no match penalty.
- **"very violent" → "highly violent"** at :1101, :1116, :1118 and :1261, matching HC 7.7(b) *"a high degree of violence"*.

**Markers:** 0 LOST and 0 SPLIT HALF UNMARKED on all nine files. center, forechecking, body_contact and special_teams each rose by one marked unit, from the new glyphs.

## After review (coordinator applied reviewer wordings verbatim)
- **The "on the head" clause** was hard to place by ear. The rules-verifier's clarity fix, "…unless it reaches the head, where you should plan on it anyway; under the IIHF, plan on it", is applied at all seven sites: body_contact KT6; winger :893 and KT10; special_teams :663, :819 and KT8; center KT6 (:976). The last of these was not in the diff, and the safety-reviewer found it.
- **switching_positions KT8:** "in every book but USA Hockey's — Hockey Canada's while it stays off the head" could be heard as also excluding Hockey Canada. It now uses the same construction.
- **center :783:** reordered so the amber falls on the tariff ("**Never hit a goalie from behind either:** ⚠️ **it is checking from behind, with no minor under the NHL, the IIHF or the PWHL.**").
- **body_contact :2051:** a stray comma before the ⚠️ removed.
- **special_teams facts :1107:** "defenceless into the boards or net, or on the head, it is a match" could be heard as making every head hit a match. It now reads "if they are defenceless, a hit into the boards or net or on the head is a match". This line predates the wave.
- **rules_primer :206:** "A violent one" is now "A highly violent one" (7.7(b)).

## Reviews
| Reviewer | Result |
|---|---|
| W317 and W318 authors | Readability figures, renders, harness on every ⚠️ unit, and line numbers re-derived against the final bytes |
| rules-verifier | Every reworded sentence CONFIRMED or PARTIAL; none is cheaper than the book. NHL and PWHL 43.2 write no minor and 43.5 makes the game misconduct mandatory; CARHA 53(a) puts a game misconduct even on the minor tier; IIHF 43.3 is a discretionary major plus game misconduct, so "plan on it" is right. Upheld the 21.1 refutation in every book. Confirmed rink_map :471's citations, each on its claim. **PARTIAL, harsher direction, not applied (plan row):** "can be called as head contact instead" understates HC 7.6 *"must be penalized as Head Contact"* in minor and female hockey. It also sits at many sites corpus-wide, all followed by "plan on checking from behind's price anyway". **PARTIAL, optional, not applied:** the special_teams head-contact major limb (7.6(b)) is minor and female hockey only, and it leaves out the cross-check above the shoulders. |
| safety-reviewer | Nothing blocking. No limb was lost, no counterweight was split off and every split half names its book. Every voiced-alone unit is safe, and each new ⚠️ sits on a real hazard. Three optional wordings and one pre-existing harsher line (:1107) were applied, as above. A narrow re-check of the merged text found all six sites OK: harness 1 warn-inline per glyph and 0 asides, 0 LOST. It also found center KT6, applied as above. |

### C11
The authors wrote the wave's content. The coordinator applied the reviewer wordings verbatim, and the safety-reviewer then re-checked them. The center KT6 line uses the reviewer-supplied wording. The coordinator wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs and check_callout_flow --panels / --bare on all nine files;
- check_readability.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: NHL, PWHL and IIHF (both editions) 43 and 21.1; CARHA 48, 50 and 53; HC 7.2–7.7 and 8.5; USA Hockey 602, 608 and Casebook 608; offside locations for rink_map |
| D4 Citations | rink_map :471 redistributed and verified |
| D5–D8 | not engaged |
| D9 Summary layer | KTs and Common Mistakes in special_teams, winger, switching_positions, center and body_contact |
| D10 Key-facts layer | special_teams :1107, voiced alone, cleared by the safety-reviewer |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | every changed file rendered |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every marked unit; no site-reviewer run (text only) |

## What this method could not have found
- Other units carrying the old wordings. Find them by the claim, not by this list: grep "in most books" near "behind" / "ends your game" / "ejects", "calls it head contact" and "it is head contact". The commit gate found, as a floor: forechecking_systems :319, :338, :700, :710, :748, :763 (three facts lines); defensive_zone_coverage :166, :179, :487 and KT4 :926 (voiced alone); defending_the_rush :402, :642, :939, :941, :1085, :1097, :1101 and KT9 :1167; playing_without_the_puck :22, :1047; plus defender, zone_entries, faceoffs, puck_support_and_spacing, risk_management, offensive_zone_play :993 and goaltender. Logged as a consistency row: none is cheaper than the book.
- Whether HC 7.6's "supersedes any other rules" displaces 7.5 entirely or adds to it. Hockey Canada publishes no interpretation.
- How the KTs still over 90 words sound aloud (switching KT8 is longest).

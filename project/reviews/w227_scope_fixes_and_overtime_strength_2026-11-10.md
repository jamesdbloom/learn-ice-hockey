# W227: scope fixes from the W225/W226 reviews, and the late-game minor-against-major strength in overtime (10 November 2026)

**Files:**
- content/systems/special_teams.md
- content/systems/game_management.md
- content/foundation/rules_primer.md
- content/technique/body_contact_and_battles.md
- content/systems/zone_entries.md
- content/systems/faceoffs.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
These are the open scope rows left by the W225 safety re-read and the W226 commit gate: the British 4-on-4 body copies, the PWHL follow-through excuse, the stick-lift face limb, the 630(d) scope, the USA Hockey icing age, and the PWHL 78.4 wording. The W227 rules-verifier then found a defect the corpus had carried in eight places: the late-game minor-against-major strength in overtime.

## What changed
1. **Minor against a major, British 4-on-4.** Sites: special_teams :888, :960; game_management :1027, :1049; rules_primer :699. Five body sentences said a minor against a major "brings" a British 4-on-4 and stopped there. Each now says it is two minutes of 4-on-4, then three minutes of 5-on-4 against the team that took the major (IIHF 19.1, which serves the differential in the normal manner; Appendix IV examples 18–19).
2. **Late-game strength in overtime.** Sites: special_teams :888, :948, :953 (facts), :962; game_management :1027, :1042 (facts), :1049; rules_primer :699. The text said 19.3 makes it "5-on-4 … in the last five minutes and in overtime". But IIHF overtime is 3-on-3 (84.1) and a penalised team plays 4 on 3 (84.3). British overtime is 3-on-3 too: In-House Rules :490, NIHL RoC :62, and EIHL Casebook :845–856. Every site now says the major's team is shorthanded for three minutes at once: 5-on-4 in regulation, 4-on-3 in 3-on-3 overtime.
   - The rules re-check caught special_teams :962, which said "4-on-3 in overtime, because IIHF overtime is played 3-on-3". That is untrue of the EIHL's 5-on-5 cup and playoff overtimes (Casebook 84.1, :765–783). It now says "4-on-3 in 3-on-3 overtime".
   - Both facts lines now say "5-on-4 from five a side" instead of the awkward "at full strength".
   - The understatement ran in no direction: the size of the advantage is unchanged.
3. **rules_primer :433.**
   - The follow-through and bent-over-centre excuse is "only in the NHL, IIHF and PWHL books (PWHL 61.1)".
   - The Hockey Canada citation is scoped: Interpretation 1 to 9.5(a) in Junior and Senior; Head Contact 7.6(a) in minor and female hockey.
4. **body_contact Overview :47.**
   - "Where no book reaches it" was false, so it was narrowed to "where no book's hands rule reaches it". HC 9.5(a) Interpretation 2 and 7.6(a) reach a lift that misses into the head.
   - The line gained "as the puck arrives", and "on a player bent low over the puck, keep it low under the shaft or leave it, because a miss goes into their face".
5. **zone_entries facts :1118.** Added "USA Hockey 630(d), at levels with a delayed offside". The levels are named elsewhere in the document, at :214, :225 and :267.
6. **special_teams :698.** Added "USA Hockey does not grant it at Youth and Girls 14U and below (Rule 624(b)(1))" inside the bold lead, so a youth listener hears the exception in the same unit as the grant.
7. **faceoffs facts :975.** It now says that under the PWHL, any later violation by either team should be treated as a bench minor. PWHL 78.4 drops the NHL and IIHF "by that team".

## Reviews
| Reviewer | Result |
|---|---|
| authoring agent (W227) | Fixed items 1 and 3–7 in every layer of its six files, finding two more 4-on-4 sites than the brief named. Refuted "where no book reaches it". |
| coordinator sweep | No minor-against-major 4-on-4 claim outside the six files. The other files' 4-on-4 hits concern the shorthanded icing exemption. |
| safety-reviewer (rendered all six) | Nothing blocking. RECOMMENDED: give the :47 bent-low limb its reason, and smooth the :698 age wording. Both applied (items 4 and 6). |
| rules-verifier (W227) | Items 1, 3, 4 and 5 correct. Found the overtime defect (item 2) and two wording fixes (Hockey Canada scope, PWHL 78.4). |
| authoring agent (W227b) | Fixed item 2 at all eight sites, plus the Hockey Canada scope, PWHL 78.4, and the two safety recommendations. |
| rules-verifier (W227b re-check) | Correct, including "NHL 19.4 is the same rule" (nhl_rules.txt:2502–2517) and NHL 3-on-3 overtime at 4 on 3 (84.3). WORDING: special_teams :962 (EIHL 5-on-5 overtimes) and "at full strength". Both applied by the coordinator in the reviewer's own words. |

### C11
The coordinator's only content edits were the two wordings the W227b re-check suggested: "4-on-3 in 3-on-3 overtime" at special_teams :962, and "5-on-4 from five a side" on the two identical facts lines. Both use the reviewer's own words.

### Checks after the last content edit
- check_facts exit 0, run with no pipe.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF on all six files, with marked-unit counts unchanged.
- Full `npm run build` (absolute binary) exit 0, through check:links (57 pages, all resolve).
- check_callout_flow --bare 0 on all six pages. The :962 ⚠️ still forms its inline amber.

No site-reviewer ran. These are sentence edits inside existing paragraphs and facts lines, with no structure, panel or ordering change, and the build and bare-glyph checks covered the rendering.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules, exceptions, divergence, citations | rules-verifier twice. Books: IIHF 2026/27 and 2025/26, NHL, PWHL, USA Hockey and Casebook, Hockey Canada, CARHA, EIHL Casebook, In-House Rules, NIHL / WNIHL / Junior / U10 RoC |
| D5 Provenance | not engaged |
| D6 Negatives | "where no book reaches it" refuted and narrowed. "USA Hockey, Hockey Canada and CARHA write neither" re-verified |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | the three-minute / one-minute differential is checked against 19.3 |
| D9 Summary layer | the body_contact Overview was changed. Key Takeaway 3 already carries the bent-low limb |
| D10 Key-facts layer | four facts lines changed, each checked standing alone |
| D11 Reader safety | safety-reviewer, rendered |
| D12 Read-aloud | six documents rendered to SSML by the safety-reviewer before W227b. The W227b sentences were not re-rendered |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | build plus bare-glyph check; no browser pass (see above) |

## What this method could not have found
- The W227b sentences read aloud. They were rendered only before the overtime rewording.
- Overtime formats in leagues whose books were not searched: SNL, CARHA, and USA Hockey's recommended format. The WNIHL RoC returned no overtime hits.
- Whether the EIHL Casebook amends Rule 19. That needs a footer-stripped search.
- The same overtime claim worded without "19.3", "minor against a major" or "5-on-4".

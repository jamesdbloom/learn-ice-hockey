# W414: IIHF major-and-game-misconduct prices say "may" or "plan on" and carry their discipline clause across ten pages, Hockey Canada's goalie charge is no longer crease-limited, and its above-the-shoulders cross-check is priced at every level (17 November 2026)

**Content files changed:**
- foundation/rules_primer.md
- foundation/on_ice_communication.md
- foundation/rink_map.md
- hockey-iq/playing_without_the_puck.md
- hockey-iq/risk_management.md
- hockey-iq/time_and_space.md
- systems/forechecking_systems.md
- systems/offensive_zone_play.md
- technique/passing_and_receiving.md
- technique/shooting.md

**Also changed:**
- sources/README.md: Hockey Canada 8.5(b) Note 1 points to the wrong Interpretation.
- project/plans/OPEN_ITEMS.md: also records the podcast-join audit, which is awaiting the owner.
- This record.

## Source
- **Plan rows:** From W413 (1)–(5) and (7).
- **Brief:** scratchpad/w414/brief.md plus its W414 addendum.
- **Census:** one read-only agent swept the corpus by act. It found 320 units: 7 Census-1 defects in 7 files, 2 Census-2 defects, and about 50 judgement calls (scratchpad/w414/census.md).
- **Authors:** ten agents, A–J, one file each, each briefed with its rows as hypotheses.

## What changed (voiced)

**rules_primer**
- **:476:** Hockey Canada charging adds "or is on a goalie anywhere on the ice (8.5(b))".
- **Table :1090/:1092:** "at the referee's discretion". This table is not read aloud.
- **CM :1146:**
  - "…under CARHA and at every level of Hockey Canada, *"whether or not injury results"*." The bullet previously said "in its minor and female hockey", which a junior or senior player hears as exemption.
  - Added: "Hockey Canada's minor and female rule targets a deliberate cross-check, not minimal accidental stick contact."
  - The USA Hockey tier is amber again.
  - Citations now read "(Hockey Canada 9.2(b)–(c), CARHA 54(c)–(d))".
  - The amber run was cut from 338 to 159 + 54 characters.
- **KT8 :1216:** the same scope fix: "…under CARHA and at every level of Hockey Canada, and under USA Hockey when careless or intentional (620(b)). Hockey Canada's minor and female rule targets a deliberate cross-check; an accidental one is still at least a head-contact minor (7.6(a))."

**on_ice_communication**
- **:612:** "under the IIHF's **59.3** the referee, *"at their discretion, may assess a major penalty and an automatic game misconduct penalty"*…". The previous wording was "bundles … but gates".
- **:606:** adds "Under the IIHF, supplementary discipline can follow too (56.8)."
- **Trailer :778:** reworded to match.

**rink_map CM :647**
- "**In the NHL, PWHL and CARHA the crease changes the price; outside it the goalie is still not fair game.** USA Hockey's *Casebook* allows a check on a goalie who has the puck outside its larger privileged area, in a game that allows body checking, and only to win the puck — any avoidable contact is a penalty, and a check meant to intimidate or punish is charging. ⚠️ … always under Hockey Canada wherever it happens, …"
- The previous wording, "the crease decides the tier", was false for Hockey Canada. The first repair, "never whether you may hit them", was false for USA Hockey (Casebook 607 Sit. 5).

**playing_without_the_puck**
- **:1005:** "IIHF: the referee may give a major plus a game misconduct where it recklessly endangers, with nobody hurt (56.5), and supplementary discipline can follow (56.8)."
- **Facts :518 (289):** "IIHF 56.5 may give a major plus a game misconduct where a pick recklessly endangers (discipline can follow, 56.8), Hockey Canada 8.3(b) on the degree of violence…"

**risk_management facts :675 (300)**
- "…NHL and PWHL 21.1, CARHA 48(a), USA Hockey 602(a) (likely multi-game ban); …; IIHF: none; expect 57.4's major and game misconduct, 57.7 discipline may follow"

**time_and_space**
- **:296 and CM :665:** "a charge on the goalie always does under Hockey Canada, under CARHA in the crease or if it injures, and under USA Hockey if it is reckless". The shared bracket previously limited Hockey Canada to the crease.
- **:298:** "The IIHF (56.5) lets the referee give a major and game misconduct where the pick recklessly endangers, and supplementary discipline can follow (56.8)."

**forechecking_systems facts :1068 (296)**
- "…; IIHF: plan on a major and game misconduct (56.5), and supplementary discipline can follow (56.8)"

**offensive_zone_play**
- **Facts :956 (300):**
  - New text: "Checking a puckless player: NHL 56.2(iii) minor, uncapped; IIHF 56.5 if reckless, Hockey Canada 8.3(b) if violent, may give a major and game misconduct, nobody hurt; USA Hockey 640(b) minor; reckless, that pair (640(g)) and a match, likely multi-game ban (602(a)); adult men: Note 2 roughing at least".
  - The author found that Hockey Canada 8.3(b) is also "may" (degree of violence), and was stated flat.
- **:691:** "…; it has no match penalty, but supplementary discipline can follow (42.5)."

**passing_and_receiving :471**
- Adds "and supplementary discipline can follow (60.7)".

**shooting**
- **Facts :506 (290):** "Hockey Canada anywhere (8.5(b)), CARHA in the crease or on injury (52(b)), USA Hockey if reckless (607(b)), …"
- **:221:** adds 60.4/60.7.
- **:903:** "one reckless swing can end your game".
- **CM :950:** adds "Under the IIHF the referee may give a reckless charge a major and game misconduct (42.4), and supplementary discipline can follow (42.5)."

**Refuted or left**
- on_ice :614 already carries 59.6 in the same chunk.
- time_and_space :275 and forechecking :1077 are floors or tier lists.
- ozp :956 has no room for 56.8; its block is at HARD_MAX 14.
- Census JUDGEMENT rows not named above are left for the plan.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier R1 (rules_primer, on_ice, risk, forechecking, passing) | **First read:** 11 of 12 OK. CM :1146's Hockey Canada scope was WRONG and predated the wave: 7.6(b) and 7.7(b) both say "whether or not injury results", and 9.2(b) Interp 2 has no division limit; the "deliberate" reading comes only from 7.6(b) Interp 2. **Confirmation:** all four post-review edits OK. Optional nits sent to the plan. |
| rules-verifier R2 (ozp, pwtp, t&s, shooting, rink_map) | **First read:** 15 of 16 OK. rink_map :647 was WRONG in the restrictive direction (USA Hockey Casebook 607 Sit. 5). It also mapped which books price the crease: NHL/PWHL 42.1 and CARHA 52(b) do; IIHF and Hockey Canada do not; USA Hockey uses its privileged area. "If violent" is a fair compression of HC 8.3(b). **Confirmation:** all three OK; "not fair game" is verified in the NHL, PWHL and CARHA texts. |
| safety-reviewer | **First read:** no act cheaper; Major (CM :1146 scope); five Minors (the "may" vs "plan on" register at risk :675 and forechecking :1068, a comma at rink :647, the citation voicing at shooting :506, the antecedent at pwtp :518). **Final read:** CLEAR except a Minor at rink :647 (the USA Hockey permission only applies to a goalie who has the puck), fixed with its own text. **Confirmation:** CLEAR. |
| site-reviewer | Ten pages at 400×812 DPR 2 light/dark and 1440 light, on the 13:58:54 build. Worst windows are unchanged or moved by 0.1. Nothing is over 50% at 400px. 0 bare glyphs, 0 untreated, 0 panels, 0 console errors. The CM :1146 window fell from 38.0 to 24.5. KT8 is at 43.0, close to the page's worst of 43.9. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author correction that a reviewer confirmed:
- risk :675: "NHL and PWHL 21.1" kept, and "IIHF: none".
- shooting :506: 607(b) reordered to match.
- rules_primer CM :1146: trims to fit the cap, and "Hockey Canada's minor and female rule targets…".
- KT8: claim-wide extension flagged by the author.
- rink :647: "only" omitted as unverified.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 13:58:54, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all ten files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | Two rules-verifiers, two reads each, both IIHF editions. IIHF 42.1–42.5, 48.3/48.4, 52.2, 56.1–56.8, 57.3–57.7, 59.3/59.6, 60.4/60.7, 69.2. HC 7.4, 7.6, 7.7, 8.3, 8.5, 8.8, 9.2. CARHA 30, 48, 52, 54, 66 (2026). USAH 602, 604, 607, 620, 639, 640 and Casebook 607 Sit. 5. NHL/PWHL 21.1, 42.1–42.6, 52/53, 56. EIHL Casebook 42, 69. |
| D2 Exceptions | HC 8.5(b) has no crease limit, while CARHA 52(b) does. USAH Sit. 5 allows checking only a goalie who has the puck, only in checking games. HC 7.6(b) Interp 2 applies to minor/female only. |
| D3 Cross-book divergence | Map of which books price the crease. HC 8.3(b) and IIHF 56.5 are both discretionary. |
| D4 Citation integrity | Corrected: 9.2(b)–(c), 54(c)–(d). The 59.3 quotation is verbatim. |
| D5 Provenance | sources/README note on the HC 8.5(b) Note 1 cross-reference. |
| D6 Negative existence | "No IIHF match" re-confirmed. "Only USA Hockey" deliberately not asserted. |
| D7 Cardinal rule | "Plan on" / "expect" kept as player advice on discretionary tiers. |
| D8 Numeric ownership | Not engaged. |
| D9 Summary layer | Layer tests per file. KT8 fixed alongside CM :1146 (claim, not line). |
| D10 Key-facts | Five facts lines read voiced alone, four of them at or near the 300 cap. |
| D11 Reader safety | Safety-reviewer, three reads. |
| D12 Read-aloud | Antecedents ("a pick", "the pick"), the "wherever it happens" attachment and citation voicing fixed. |
| D13 Folklore | Not engaged. |
| D14 Structure, terminology, cross-links | check_links. |
| D15 Rendered site | Site-reviewer. |

## Found, not fixed (plan rows)
1. About 40 census JUDGEMENT rows that are "supplementary-discipline-only" (bcb ~14, including facts :392 at 300/300; goaltender; game_management; defender; scanning; uk_rules :146; breakouts :175/:291; defender :926; special_teams :1210; dzc :817). Also 17 Sources trailers stating "42.4 a major plus a game misconduct" without "may".
2. Hockey Canada 8.3(b) is stated as a flat major + GM elsewhere in the corpus. It is "may" on the degree of violence and mandatory only on injury. Needs a census.
3. Copies of "in minor and female hockey" scoping a cross-check penalty in other documents. Needs a census.
4. ozp :1201 says "IIHF 56.5 and HC 8.3(b) reach…" with no trigger and no 56.8. ozp :956 cannot take 56.8 because its block is at HARD_MAX. ozp :956's "and a match" is flat where 640(h) says "may", which is the harsher direction.
5. risk :760 (slew-foot facts) has no IIHF or NHL/PWHL limb. passing :487/:845 have no IIHF 49.x discipline clause for kicking. defending_the_rush :668/:1117 name no IIHF price for a reckless trip.
6. pwtp :744 "reckless-interference ejection" has no "may".
7. Optional nits:
   - rules_primer :1146 "to their stick just below the hands"
   - KT8 "as head contact"
   - risk :675 "IIHF: no match" (needs 4 characters)
   - rink_map :459 reorder so the possession limb comes first
   - rink :647 says "not fair game" twice
8. The USA Hockey goalie-check permission now lives in rink_map, while siblings say "never hit a goalie" for every book. This is a cross-document divergence in the safe direction.
9. rules_primer KT8 window is 43.0 against the page's worst of 43.9. If it grows, end the amber before "and under USA Hockey".
10. At-cap facts lines: forechecking :1068 is at 296, ozp :956 at 300 and risk :675 at 300.

## What this method could not have found
- Prices stated without a book name, a rule number or the census act words.
- Other rules in each book that price the same acts. Only the cited rules were read.
- How "IIHF: none" or "nine point two, clause b to clause c" sound in real synthesized audio.

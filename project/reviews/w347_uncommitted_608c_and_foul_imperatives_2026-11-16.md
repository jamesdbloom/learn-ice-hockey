# W347: the uncommitted 15 November edits reviewed, repaired and closed (16 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/hockey-iq/playing_without_the_puck.md, puck_support_and_spacing.md, risk_management.md
- content/off-the-ice/team_play_and_culture.md
- content/positions/center.md, defender.md, goaltender.md, switching_positions.md, winger.md
- content/systems/defending_the_rush.md, faceoffs.md, forechecking_systems.md, game_management.md, neutral_zone_systems.md, offensive_zone_play.md, zone_entries.md
- content/technique/body_contact_and_battles.md, passing_and_receiving.md, puck_handling.md, shooting.md
- site/src/diagrams/defensive_zone_coverage.mjs, site/src/data/diagrams.json
- project/plans/OPEN_ITEMS.md
- this record

## Source
On 16 November the working tree held edits to 23 files, made on 15 November (19:40–19:45). They had no plan row and no review record. They continue W344–W346:
- USA Hockey 608(c) is separated from the boards-or-net framing and stated as its own rule: "makes any hit from behind a match when it recklessly endangers a vulnerable or defenceless player with excessive force, boards or not (608(c))". "Reckless" citations that had read "(602(a), 608(c))" now cite 602(a) alone.
- Fouls voiced as instructions ("angle legally, then extend the shoulder, and you have checked"; "catch it, drop it, then fall on it") are rewritten as "Never X. If you do, …" or "If you …" conditionals.
- A new slew-foot limb: Hockey Canada's match is mandatory if the slew-foot injures; under CARHA, plan on a match.
- Smaller corrections: risk_management's Casebook 639 Situation 2 quotation now puts the loss of possession on the carrier, not the defender. Pointers a listener could not follow ("priced below", "None of these") are replaced.

## Reviews of the 15 November text
| Reviewer | Result |
|---|---|
| rules-verifier (whole diff) | Every new rule claim CONFIRMED against hc.txt / hc_layout.txt, carha_2026.txt, usah.txt, usah_casebook.txt, NHL, PWHL and IIHF texts. Hockey Canada 8.8's unlettered sentence: "A Match penalty will be assessed to any player who injures an opponent by a slew-footing infraction…". Dropping 608(c) from the "(602(a), 608(c))" citations is more correct, because 608(c) needs excessive force on a vulnerable or defenceless player. Overstated (harsh): CARHA "plan on a match for any kick". 48(c) is a kick at an opposing player, Rule 69 permits kicking the puck, and 86(b)'s slew-foot match is discretionary per the book's own ruling. Ambiguous: neutral_zone_systems "meets the charging rules". Gate: body_contact facts at 301/300. |
| safety-reviewer A (10 files + dzc caption) | No critical or major. Three repairs upheld as real fixes (rules_primer :540, goaltender :504, risk_management Sources :998). Minors: "any kick" needs "at an opponent"; the slew-foot rider is heavy in the KTs; center :430/:434 repeat each other. |
| safety-reviewer B (11 files) | No critical. Major: body_contact :764 over cap and garbled aloud ("a match is a must into the boards"). Minors: neutral_zone :870 "meets"; puck_handling :520 "Lean it in" unscoped; shooting :472 "vacate" has no object; shooting :507 scoped "never" to USA Hockey and dropped 608(c)'s "recklessly endangers"; game_management :1093 has two different "it"s. |

## Repairs, round 1
**Author A** (rules_primer, risk_management, body_contact_and_battles, defending_the_rush):
- "a kick at an opponent" at rules_primer KT8; risk_management :903/:926/:989; body_contact KT9 :2176, the table :1729, facts :1840 and body :1855; defending_the_rush :1018/:1034.
- body_contact :764 rewritten in a single "book: condition" form (297 chars).
- :1228's "a must" removed.
- defending_the_rush :1018 restructured to 292 chars.

**Author B** (neutral_zone_systems, puck_handling, shooting, game_management, center):
- "can be called charging" at neutral_zone :360, :427 and :870.
- puck_handling :520 scoped: "where checking is allowed … in a non-checking game hold it there … under CARHA keep it off them".
- shooting :472 "get out of it", with the penalty "on the referee's judgment".
- shooting :507 "Never hit a goalie's back" now unconditional, with 608(c) "reckless" restored.
- game_management :1093 now reads "a skater standing in the paint".
- center left unchanged: each of the two paragraphs needs its own cost.

**Review of round 1 (safety-reviewer, rules and safety):**
- **BLOCKING regression.** The body_contact :1729 slew-footing cell grew to 223 chars (over TABLE_MAX_CELL_CHARS 200), so the whole nine-row "test the official applies" table (from :1719) was dropped from the audio. In HEAD every cell was ≤199.
- **Minors:**
  - :1228 had lost "reckless".
  - The bracketed KT form loses its brackets aloud, and its two "it"s refer to different things.
  - shooting :472: the IIHF table says the referee "must assess" a penalty.
  - neutral_zone :870: "can" leaves the outcome open for a non-checking listener.

## Repairs, round 2
**Author A:**
- :1729 cut to ≤200 ("…plan on a CARHA match for kicking a player"). The table is voiced again, with 1 char of headroom.
- :1228 now reads "…(602(a)), mandatory with excessive force on a vulnerable or defenceless player (608(c))".
- The colon form "…and Hockey Canada and CARHA can: Hockey Canada's match is mandatory if it injures, and under CARHA plan on one for a kick at an opponent" at the four KT/CM sites.

**Author B:**
- shooting :472 now reads "a penalty the IIHF requires and the NHL leaves to the referee (its example: a minor)".
- neutral_zone :870 and KT4 :923: "a penalty outright in a non-checking game", and "can be called charging" in every division.

**Review of round 2 (safety-reviewer):**
- No critical or major.
- "Penalty outright" holds in USA Hockey 604(c), Hockey Canada 7.3(a) and CARHA 49(a). CARHA 49(a) also reaches "does not avert body contact".
- The quotation at :472 is verbatim.
- Minor: shooting :472's "Stay and it is crowding" reintroduced the imperative-plus-consequence shape. Author B changed it to "Staying is crowding, not screening" (295/300).
- Minor, left: bcb :1729 "Four of six" never says "books". The cell is at 199/200, and adding the word would drop the table.

### C11
The coordinator wrote no content. Two authors wrote the repairs, and each round was reviewed by a fresh reviewer. The last edit (shooting :472) was the reviewer's own wording, applied verbatim to one line. Its checks re-ran after it, but it was not re-rendered.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0, through check-links) that started after the final content edit:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets, check_counts --update (no change), check-arrivals (0 hard);
- check_callout_flow --bare (0);
- check_marker_pairs on all 21 content files (0 LOST, 0 SPLIT HALF);
- check_tables: body_contact :1719 is read aloud. :1485 is dropped as before (4 columns, pre-existing).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on the whole diff; both repair rounds checked against the books by the reviewers |
| D4 Citations | Casebook 639 Sit. 2 and 625 Sit. 9 and Situation 6B quotations checked verbatim |
| D5 Provenance | two quotations re-framed (risk_management :669/:696, shooting :472 "NHL and IIHF Situation 6B"); attribution checked by the commit gate |
| D6–D8 | not engaged |
| D9 Summary layer | KTs, CM and table layers read by every reviewer; "which layer assumed the old answer" asked, none found |
| D10 Key-facts layer | facts lines reviewed; check_facts |
| D11 Reader safety | three safety-reviewers (two on the original, one per repair round) |
| D12 Read-aloud | every author and reviewer rendered with md_to_speech; check_tables caught the dropped table |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, build check-links |
| D15 Rendered site | build plus check_callout_flow --bare; no site-reviewer (text-only change; the one caption change was checked in diagrams.json) |

## What this method could not have found
- **Other documents, and unchanged lines in these 21.** The commit gate found "meets the charging rules" still at defender :507 (unchanged line, not permissive in context). The same shapes may appear elsewhere: the bracketed slew-foot rider, "meets the charging rules", an unscoped "lean it in", or "Stay and it is …" imperative consequences.
- **A leg-only slew-foot under USA Hockey.** The USA Hockey Note defines slew-footing as an arm push plus a leg sweep. So "ejects you under USA Hockey" for a leg-only sweep overstates (harsh). Not repaired.
- **CARHA's two rules for one act.** Whether a CARHA referee would apply 48(c)'s mandatory match or 86(b)'s discretionary match to a kicking slew-foot. The book prints both.
- **The table's headroom.** The body_contact :1719 table has 1 character of headroom. The next edit to its slew-footing or kneeing cell drops it from the audio, and only check_tables will say so.
- **Audio.** Everything was read from SSML. No ear test.

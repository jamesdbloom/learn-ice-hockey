# W533: USA Hockey's careless head-contact ejection reaches goalie contact; the awarded-goal citation, CARHA's high-stick exception and the British stick-foul tariff (20 November 2026)

## Origin

The W532 read-only rules-verifier worked on four plan rows. Its report is not on disk; this record summarises it.

- **W530(1), head contact.** USA Hockey 620(b) (`usah.txt` :4297–4301) reads: "A major plus a game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of head contact or who intentionally or carelessly contacts an opponent in the head, face or neck."
  - It has no goalkeeper exception.
  - About 55 goalie-contact units, including body_contact's owner section, gave USA Hockey's ejection as "if reckless" (607(b)) only.
  - The brief's premise was wrong: special_teams :1132 was not the only carrier. About ten units already carried 620(b), all in the hit-from-behind context.
- **W531(1), British slashing.** No British playing-rule book departs from IIHF 61.
  - The EIHL Casebook amends 22 rules, and none of them is a stick foul.
  - The In-House Rules' Section 8 holds only the 60.3 deletion.
  - The Rules of Competition carry no stick-foul content.
  - The one British slashing price is the IHUK DOPS suspension tariff: Appendix C.2, "Up to 3/5/7/10/11+".
- **W531(2), awarded goals.** NHL 54.4, 55.6 and 61.7 each "refer to Rule 25". Table 10 (vii) files "fouling from behind – including hooking, holding, slashing" under Rule 57.
- **W531(4).** The "injures nobody" condition comes from CARHA's 62(b) Note, not from 30(a).

Brief: `scratchpad/w533_common.md`.

## Editing agents (disjoint files)

| Agent | Files |
|---|---|
| A | body_contact_and_battles |
| B | shooting, offensive_zone_play, special_teams, goaltender |
| C | winger, center, zone_entries |
| D | rules_primer, rink_map, language_and_glossary, scanning_and_anticipation, time_and_space, playing_without_the_puck |
| E | forechecking_systems, game_management, risk_management, uk_rules |

In total, 18 content files changed.

## Repair shape

**Group A: units that describe the act** (charging, bumping or shoving a goalie, net-front contact). Each gains:

> ", or if it reaches the head, face or neck, even carelessly (620(b))"

The 602(a) match stays tied to a reckless charge or an attempt to injure. It never attaches to careless contact.

**Owner sections.** These also state the 620(a) floor. They are:
- body_contact's "What it costs to touch the goalie";
- forechecking :1091, OZP :707, special_teams :1200, goaltender :1620, zone_entries :1181, rink_map :459, rules_primer :833 and glossary :402.

**Group B: ladder tails.** Facts lines and Key Takeaways (voiced alone) take the shortest form, "or on careless head contact (620(b))". "Head contact" is 620's own defined term, and its Note covers head, face and neck.

**Facts blocks at cap.** Six blocks were full, so a new Rule: line was added in each to make room. That moved some content:
- winger :790: USA Hockey moved out.
- center :798: the match moved out.
- zone_entries :427.
- scanning :353: the 607(a) floor, 404(b) and the match moved out.
- playing_without :622: the match moved out.

Blocks already at 14 lines were fitted by substitution: shooting :507, OZP :687, goaltender :1262, zone_entries :793 and playing_without :726.

**The brief's error, refuted mid-wave by agent C.** My brief said "any head contact is at least a minor plus a misconduct (620(a))". Casebook 620 Situation 2 leaves accidental head contact between players getting up after a fall unpenalised, unless the referee judges it intentional or reckless. Every floor now says "head contact in a bump or a check". Agents A, D and E narrowed what they had already written.

**Other rows:**

| Site | Before | After |
|---|---|---|
| game_management :1060 | "Rules 25.1 and 57.4… 57.4 is the operative clause for tripping, hooking, holding and slashing" | NHL Rule 25.1 with Table 10 (vii); 57.4 is tripping's own clause; 54.4, 55.6 and 61.7 refer to Rule 25 |
| risk_management :709 | "the fouls that cross-reference it" | they refer to Rule 25 for the awarded goal, and to 57.3 only for a penalty shot |
| uk_rules :415 | The DOPS "eleven games or more" covered boarding and checking from behind | It now also covers the five stick fouls, 58–62, which share the band |
| body_contact :1761 | — | Cites both CARHA Notes (30(a), 62(b)) and adds 80(d)'s match |

**Sources trailers.** winger, center and zone_entries now quote 620(a) and (b). They disclose that the Casebook's Rule 620 Situations frame the mandatory tier as intentional or reckless and never say careless.

## Review

Two safety-reviewers ran, each with a rules check (C4/C6), each covering nine files. Group 2 rendered all nine of its files with `md_to_speech`.

**Rulings shared by both reviewers:**
- **Q1, "even carelessly".** It is fair to 620(b), it reaches a goalie, and it applies in every classification. The Casebook caveat stays out of the summary layers: it would only make the act sound cheaper, and body_contact :716 already carries the Situation 3 nuance.
- **Q2, honest attempt versus 620.** Neither book says which governs when a bump on a goalie's honest attempt reaches the mask. The floors agree at a minor plus misconduct. The wording "is also head contact" is correct, and the instruction to a player is the same either way.
- **Q3, match penalties.** No match attaches to careless contact.

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| group 1 (body_contact, shooting, OZP, special_teams, goaltender, forechecking, game_management, risk_management, uk_rules) | none | 1 | 4 | All repaired. Minor 4 (spelling out "head, face or neck") was applied only where 14 characters were free. |
| group 2 (winger, center, zone_entries, rules_primer, rink_map, glossary, scanning, time_and_space, playing_without) | none | 1 | 5 | All repaired |

**Majors:**
- **shooting :531.** This body unit was still reckless-only. Its facts and Common Mistakes already carried 620(b), so this was the inverse of the round-10 shape. The unit now carries the limb. :533 already said it.
- **winger :789.** Removing USA Hockey from a three-book list left "Hockey Canada 8.5(b) and CARHA 52(b) in the crease or on injury". That scoped Hockey Canada, whose 8.5(b) has no location condition. It now reads "Hockey Canada 8.5(b) wherever the goalie is, in CARHA 52(b) in the crease or on injury".

**Minors repaired:**
- **OZP :687** regains "if reckless: match, likely multi-game ban (602(a))".
- **shooting :507.** The crease scope now governs only the discretionary books.
- **shooting :920** gains 620(b).
- **"carelessly to the head"** was changed to "careless head contact" in four lines.
- **The honest-attempt rung now carries "more if it reaches the head, face or neck (620)":** playing_without :722, winger :795 and center :801. At rules_primer :899, the 620 sentence moved after the three rungs.
- **Match ordering in the spoken text:**
  - zone_entries :387 and rules_primer :1177/:1183: the match now follows the careless clause.
  - glossary :398 and rules_primer :837: an intimidating or punishing check that reaches the head "with excessive force" is a match (620(c); Casebook 620 Situation 4).
- **The Situation 2 disclosure** is narrowed to players getting up after a fall.

**C11.** No reviewer re-read the last repairs. Each is confined to its finding and follows the reviewer's sketch. The commit gate is asked to re-derive them.

## Rows

- **Closed:** W530(1); W531(1), (2) and (4).
- **New, from W533:**
  1. 620(b) in the skater charging ladders.
  2. The remaining 11+ DOPS fouls.
  3. Casebook 620 Situation 4 elsewhere, and honest-attempt rungs in goaltender and body_contact.
  4. The "X and Y in the crease" parse shape in the files that were not rendered.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, run after every agent finished (`scratchpad/build_w533.log`).
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 18 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: verifier, five agents and two reviewers |
| D2 exceptions | Covered: Casebook 620 Situation 2; 607 Situation 4's rungs; the CARHA 30(a) and 62(b) Notes |
| D3 cross-book divergence | Covered: Hockey Canada 8.5(b)'s scope against CARHA 52(b) |
| D4/D5 citations | Covered: 620 quoted verbatim; NHL Rule 25 and Table 10 |
| D6 negative existence | Covered: no British stick-foul departure (a searched negative); "the 620 Situations never say careless" (0 hits, reviewer) |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: both reviewers layer-tested their nine files |
| D10 facts layer | Covered: blocks split or fitted, and drift checked line by line |
| D11 reader safety | Covered: two safety-reviewers |
| D12 read-aloud integrity | Covered for group 2's nine files (rendered); group 1's files judged by reading |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered by `check_links` |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **A goalie-contact unit that states USA Hockey's threshold without the words the sweeps keyed on.** Those words were "reckless", "607", "USA Hockey", or a goalie word.
- **How a referee treats an honest-attempt contact with the mask.**
- **Diagram captions.**
- **Chunk distances in group 1's files.**
- **Reviewer transcripts.** They are not on disk.

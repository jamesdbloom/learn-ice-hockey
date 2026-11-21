# W614–W615: units that sounded like commands, and the "free" faceoff attempt after an icing (21 November 2026)

## W614 census (content-reviewer, read-only)

The census targeted units that describe a situation or tariff but sound like a command to do the risky thing when heard alone. About 8,170 facts values and summary bullets were scanned by script, and every candidate was read. Table: `w614_command_shaped_rows_2026-11-21.tsv`.

**Result:** 3 Tier 1 and 4 Tier 3.

**Clean**
- No Common Mistakes heading is a command.
- No Options line offers an unmarked illegal option.
- Never: lines are voiced "Never —".
- The rules_primer myths are rebutted in the next sentence.

## W615 edits (one agent, six files)

**Tier 1**
- **special_teams :1186:** carried W613's "but drive hard to the net, only then try to pull out", the last copy of it. It now reads "a player who drives hard to the net and only then tries to pull out gets minor and misconduct…".
- **defender :828:** "Slide from behind:" → "A slide from behind: match if meant to injure…". The line just before it says "Never slide in from behind".
- **ozp :687:** "ram, arms out, shoulder down" → "ramming, arms out, shoulder down: gone", and "crease or privileged area" → "crease/privileged area" (voiced "or").

**Tier 3**
- ozp CM :1253: "If you push the goalie in…".
- dtr :471: "Having cover behind you…".
- goaltender :1265: "a hard drive, late pull-out: minor and misconduct".

**faceoffs :832** (Action, 198/200) taught using "your free attempt" after an icing with no book scope. It now reads "After an icing under the NHL, IIHF, In-House Rules or Hockey Canada Junior, use your one free attempt to cheat the timing and expect theirs; PWHL, assume one per draw; USA Hockey and CARHA give none".

**goaltender :1265** (300/300) gained the Casebook 607 Situation 4 ejection rung, "ramming through ejects", so the minor and misconduct no longer reads as the ceiling. The full rung is at :1266.

No ⚠️ changes.

## Review

**rules-verifier.** It confirmed the faceoffs line book by book:
- **NHL 76.4 and IIHF 2026/27 76.4:** per team ("by that team").
- **IIHF 2025/26:** it warns any late arrival.
- **In-House Rule 76:** excepts post-icing draws.
- **PWHL 78.4:** lacks "by that team", so "assume one per draw" is the conservative reading.
- **Hockey Canada 6.5(a)/(b):** Junior only, per team. 10.1(viii) says "Junior A", an inconsistency inside the book.
- **USA Hockey 613 and CARHA 57/65:** no carve-out.
- **IIHF Situation 81.18** (removal once penalties allow a change) costs a draw, not a penalty. It is already carried at faceoffs :1281, so the Action line does not need it.

It also confirmed every other W615 rule line, including ozp :687 against Casebook 607 Situation 4, and that the dtr edit fixed a real command-shaped line. It found the goaltender :1265 ceiling gap, which is now fixed.

## Rows

**Closed:** the W614 census rows.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w615.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Commands with verbs outside the census lists, or mid-clause.**
- **Overview and body paragraphs.**
- **NHL and PWHL rulings equivalent to IIHF Situation 81.18.**

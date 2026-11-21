# W612–W613: long facts lines in offensive_zone_play, and a rule line that sounded like a command (21 November 2026)

## W612 census (facts-reviewer, read-only)

The census covered ozp facts values over 40 words (68), plus goaltender :1379/:1380 and forechecking :977. Table: `w612_long_facts_rows_2026-11-21.tsv`.
- **A 5:** tighten, losing nothing.
- **B 9:** could split, with room in the block.
- **C 57:** every word is a limb. Most are multi-book Rule lines at 270–300 characters, and four blocks are full.

**Also found**
- **ozp :686 sounded like a command.** It read aloud as "drive hard to the net, only then try to pull out", but it is USA Hockey Casebook 607 Situation 4's fact pattern (minor plus misconduct), and it had dropped "honest".
- **The IHUK DOPS facts line** is word-identical in 8 documents.
- **Hit-from-behind tariffs** are stated four times in ozp.
- **The plan row understated the scope.** goaltender has 141 values over 40 words and forechecking 55.

## W613 edits (one agent: ozp, forechecking)

**Tightened (the A rows)**

| Line | Label | Words | Chars |
|---|---|---|---|
| ozp :40 | Convention | 52 → 44 | 281 → 246 |
| ozp :575 | Rule | 52 → 44 | 297 → 253 |
| ozp :584 | Rule | 53 → 45 | |
| ozp :613 | Convention | 46 → 42 | |
| forechecking :977 | Rule | 52 → 43 | |

- ozp :584: Casebook 621 Situation 2's "must be called" was confirmed to carry the no-contact point on its own.
- forechecking :977: the instruction now leads, "Arrive as though the boarding onus were absolute".

**ozp :686 reworded** (298/300). It now reads: "USA Hockey 607(d) Note 1: accidental or unavoidable goalie contact is an interference minor; deliberate is charging, never a bare minor (607(a)). Even a player going hard to the net who honestly tries to pull out gets minor and misconduct for crease or privileged-area contact (Casebook 607 Sit. 4)".

**CARHA slap-shot citations**
- ozp :1113 and :1145: added "(CARHA 79, 30)". The tariff comes from two rules: the minor and major from 79(a), the game misconduct from 30(a). The ban is 32(d), verified in W611.
- ozp :1114: "a CARHA 79(b) minor".

No ⚠️ changes.

## Review

**safety-reviewer: OK.**
- No limb was lost in any tightening.
- :686 is correct against 607(a), 607(d) Note 1 and Casebook 607 Situation 4, and can no longer be heard as a command.
- **Minor, repaired:** the first "CARHA 79:" head credited the game misconduct and ban to 79. It now reads "CARHA 79, 30:".

## Rows

**Closed:** W508(5), partly: the A rows and :686.

**Filed:** the B splits, the 8-copy DOPS line, the four-fold hit-from-behind tariff, goaltender and forechecking long facts, and a census for the command-shaped line.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w613.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on both files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Audio.** Not rendered.
- **Other command-shaped facts lines.** Not swept.

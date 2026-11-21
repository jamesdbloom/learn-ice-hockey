# W607: CARHA 53(a)'s discretionary match reaches an intentional hit from behind, everywhere (21 November 2026)

## Edits (two agents, disjoint files)

CARHA 53(a) puts a minor or major plus game misconduct on "any player who intentionally pushes, body checks, or hits an opposing player from behind, anywhere on the ice … A Match penalty could also be assessed under this rule" (`carha_2026.txt:2605-2612`). W606 fixed two files; a coordinator sweep found 14 more sites saying "any hit from behind". Searching by claim rather than phrase, the agents found and fixed 26 sites. Every site keeps the discretion (may, can, could, allows) and leaves 53(b)'s mandatory match separate.

**Sites by file:**
- **center:** :691 (facts, 297/300: "CARHA 53(a) may, if intentional, anywhere"), :709, :792, :894 (facts), :899, :918, :929. No new restatement was added.
- **rules_primer:** :496, :1125 (table), :1201.
- **special_teams:** :1124.
- **shooting:** :539, :541, :957, :1082.
- **winger:** :517 (facts, 300/300), :713 (facts, 300/300), :876, :924, :930.
- **game_management:** :187, :1182, :1196 (facts), :1217, :1221, :1296.

**After review (game_management :1221):**
- **Accidental hits:** added "one you did not mean but could have avoided is still a 49(a) penalty for failing to avert the contact". It is placed at the end of the following sentence so the 53(a) tier text is not misattributed to 49(a). A CARHA reader must not hear "intentional" as "an accidental hit from behind is free".
- **49(a)'s major:** the "49(a) and 52(a) … each making the major mandatory on injury" claim was narrowed with "49(a) only when the contact was intentional" (49(a): "When injury results from intentional body contact a Major penalty shall be assessed").

**Readability repairs**
- **game_management :1182:** went to 1,210. "Match penalty" → "match" twice brought it to 1,194.
- **defender CM :1027:** at 1,224 since W605's 608(c) condition. Tightened to 1,193; "a game misconduct even at the lowest rung under CARHA" → "at least a game misconduct under CARHA". The reviewer asked that "count as one" go back to naming the act, so it reads "once forceful enough to be a check from behind".

No ⚠️ changes.

## Review

**safety-reviewer:**
- All sites keep the discretion and stay scoped to 53(a).
- The at-cap rewrites lost nothing.
- An unintended hit from behind is still priced: 53(b) needs no intent, the 53 Note says "in any manner", and 49(a) covers failure to avert. Hence the added 49(a) clause.
- The readability trims are OK after the defender "one" repair.

## Rows

**Closed:** W571(2), the match.

**Filed:**
- Sites stating 53(a)'s game misconduct without "intentional" (they err harsh). The list is in the plan.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w607b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 7 files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **A 53(a) claim worded without CARHA, 53(a) or "hit from behind".**
- **Audio.** Not rendered.

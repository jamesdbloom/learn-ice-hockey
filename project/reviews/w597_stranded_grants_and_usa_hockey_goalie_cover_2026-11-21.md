# W596–W597: grants heard without their limit, and USA Hockey's goalie-cover rule (21 November 2026)

## W596 census (safety-reviewer, read-only)

`check_chunk_tails` lists 80 chunk-terminal facts values that grant something. The reviewer rendered each through md_to_speech and asked whether it is still true heard alone. Result: 1 at Tier 1, 5 at Tier 2 and 74 OK. Table: `w596_chunk_tail_grant_rows_2026-11-21.tsv`.

**Correction to the coordinator's brief:** the brief called a chunk boundary a file break. It is a 300 ms break inside one audio file (`md_to_speech.py:5-6`, `AudioPlayer.astro`). The test is unchanged, because every facts value is voiced alone.

## W597 edits (one agent, 5 files)

**risk_management :673 (Tier 1)**
- **The defect:** "Two limits sit on that USA Hockey puck-first relief" omitted Casebook 639 Situation 4. A slide that brings an opponent down is tripping "regardless of who gains possession of the puck", knee-drop shot block excepted. It also omitted Situation 2's "unless the player clearly went on to intentionally trip".
- **The fix:** the line is merged with old :674 into one value carrying every limb, 300/300. The body at :699 now says "Three limits", with the intentional-trip quotation.
- **Sources:** `usah_casebook.txt:16917-16960`.

**goaltender :425**
- The book scope now leads: "Under the NHL, IIHF and PWHL…; Hockey Canada can make a freeze out of your crease a minor (10.1(a) Interp. 3)".
- The agent **refused** the brief's USA Hockey limb. Casebook 614(c) Situation 12 is a prone goalie reaching out, not a cover off a save, and Situations 8 and 10 say a cover straight off a save "should not be penalized".
- :426: "both books" → "the NHL and IIHF".

**USA Hockey goalie cover (from review).** Casebook 614(c) Situation 6 makes racing a lone attacker to a loose puck and falling on it a delay minor even inside the privileged area. 614(c)(2) and Situations 8–11 penalise a cover you had time to play with your stick. The claim was repaired across the page:
- **:488:** "USA Hockey protects a cover only … inside the privileged area" sounded like a sufficient condition. It now reads "makes a cover a minor behind your goal line or outside the privileged area, and anywhere if you raced an attacker to it or had time to play it (614(c), Sits. 6, 9, 11, 12)".
- **:660, :668, :506:** each gained the Situation 6 exception.
- **Common Mistakes :1694** ("Under pressure in front of your net, cover it…"): gained "racing out to beat an attacker to a loose puck and falling on it (614(c), Situation 6)".

**Other fixes**
- **goaltender :1295:** NHL and IIHF 69.3 / PWHL 71.3 scope now leads. USA Hockey 625(b) is a flat crease bar.
- **body_contact :202:** "Three books penalise the pre-game warm-up" implied the rest do not. The line now also names NHL and PWHL 46.9 and IIHF 46.8, which make a fight "other than during the periods of the game" a major plus game misconduct.
- **puck_handling :497:** USA Hockey's fend-off conditions are named: the body only, with the puck or reaching for it in a corner or net-front battle (Standard of Play Situations 6–7).
- **dtr :922:** "the answer" → "who may check is set by competition regulations".

No ⚠️ changes.

## Review

**safety-reviewer, three passes.**
- Pass 1: OK, with one Minor in goaltender :425/:488 (the Situation 6 limb).
- Pass 2: the four goaltender repairs are correct, and "anywhere" is right because 614(c)(2) has no area condition. One Common Mistakes bullet still lacked Situation 6.
- That bullet was repaired to the reviewer's own sketch, which the agent verified against the source.

## Rows

**Closed:** W596's 6 defects.

**Filed (From W597):**
- About 320 non-grant terminal values, the Never: values, and prose grants not reached.
- CARHA not searched for save-then-cover or sliding-trip rules.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w597.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 5 files.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **The USA Hockey cover rule stated without the keywords searched.**
- **CARHA's own rules on these acts.**
- **Audio.** The new values were not re-rendered.

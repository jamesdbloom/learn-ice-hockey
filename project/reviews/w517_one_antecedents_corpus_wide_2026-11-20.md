# W517: "a reckless one" antecedents, corpus-wide (20 November 2026)

## Purpose

This closes plan row W514(5). Six editing agents worked from one shared brief (`scratchpad/w517_common.md`) and the census worklist (`one_antecedent_census_2026-11-20.md`). Each owned a set of files that did not overlap with any other agent's.

**The defect.** A listener hears "one" as the nearest preceding count noun. In 106 places the census found that noun was:
- a penalty ("a minor", "a match", "a suspension");
- a person;
- "careless contact";
- a word "one" had just been used for.

So "a reckless one" was heard as "a reckless minor", "a reckless player", and so on.

**The repair.** At each site, "one" was replaced with the act. The agent checked the act against the rule the sentence cites before naming it.

## Agents and files

| Agent | Files | Repairs |
|---|---|---|
| A | language_and_glossary, on_ice_communication, rules_primer, uk_rules, conditioning_and_recovery, team_play_and_culture | 21 (14 census, 7 missed) |
| B | playing_without_the_puck, puck_support_and_spacing, risk_management, scanning_and_anticipation, time_and_space | every census defect, plus 7 missed (including emphasised `*deliberate*`) |
| C | center, defender, goaltender, switching_positions, winger | 34 changed lines, including "accidental" and "moderate" ones outside the sweep |
| D | breakouts, defending_the_rush, defensive_zone_coverage, faceoffs, neutral_zone_systems | every census defect, plus "any reckless one", "one that injures" and "accidental one" sites |
| E | forechecking_systems, game_management, offensive_zone_play, special_teams, zone_entries | all 40 census defects in 35 edits, plus 4 missed (including zone_entries :1204, which opens a chunk on a bare "it") |
| F | body_contact_and_battles, puck_handling, shooting | 9 defects, 5 of 7 UNSURE, and 8 missed |

The sweep regex now returns 71 matches, down from 229. These are the OK, OK-P and Sources-trailer sites the census left, plus a few judged OK on re-reading.

## Review

Four safety-reviewers each covered a group of files. They checked:
- that each new noun is the act its rule prices, verified in sources/;
- that no rule content changed;
- how each edit reads aloud;
- a render spot-check.

| Reviewer | Files | Critical | Major | Minors |
|---|---|---|---|---|
| AF | A and F | none | none | 4 |
| BD | B and D | none | **1** | 6 |
| C | C | none | none | 4 |
| E | E | none | **1** | 3 |

**The two majors.** Both made a noun narrower than the rule it stood for. That is the permissive direction.

1. **forechecking_systems :626: "a reckless pinch from behind uses excessive force" for USA Hockey 608(c)'s mandatory match.**
   - What was wrong: USA Hockey's Casebook (608 Situation 1) uses "pinch" only for the minimal-contact case, which is a minor plus misconduct. So the sentence tied the mandatory match to the one act the book defines as minimal.
   - Fix: it now reads "a reckless check from behind". The pre-existing "it" in the same paragraph and in facts :978, which had landed on "a minimal pinch", now name the check.
2. **risk_management :915: "a head-first check".**
   - What was wrong: it sounds like a check thrown with your own head. 608(b) prices driving the opponent head first into the boards or goal frame.
   - Fix: it now uses defending_the_rush :956's wording, "one that sends them head first into the boards or goal frame".

**Minors repaired.**
- **shooting :914:** "an accidental high stick that injures" became "accidental head contact that injures". Hockey Canada 7.6(b) prices head contact, which is the paragraph's own point.
- **puck_handling :485 and team_play_and_culture :560:** two lists left out acts that Hockey Canada 7.3(a) names. They now say "if it is violent", or give all four acts.
- **body_contact :598:** "ejects a hit" became "ejects you for a hit".
- **608(c) sites:** "from behind" was added wherever 608(c) was cited for "a reckless hit".
- **"A deliberate clear":** it became "a deliberate clear out of play", or "a puck put out deliberately". Off the glass along the boards is legal, and 63.2(ii) also covers batting the puck out.
- **faceoffs :158 and :1240:** an instruction-sounding facts line and a repetition were reworded.
- **center :803:** now "mandatory if an accidental clash injures".
- **switching_positions :289:** "shoot-out", which is heard as "shootout", was removed.
- **defender :816 and :866:** facts lines at the cap now read "a reckless trip" and "doing it by accident".

No reviewer re-read these repairs. Each is confined to its finding, taken from or tightened against the reviewer's sketch, and checked against the cited rule. This is the C11 terminating case.

## Rows

**Closed:** W514(5).

**New, From W517:**
1. body_contact :598's trailing "if reckless" lands on careless head contact, and the line lacks 608(b).
2. "Head hit" for 620(b) leaves out the face and neck.
3. "one" sites outside the sweep.
4. "Hit from behind" against 608's wording "checking or pushing".
5. center :536's "violent" against 7.7(b)'s "high degree", and defender :411/:495 "name none".
6. "one" candidates outside the diff: time_and_space :664, neutral_zone_systems :363/:400, faceoffs :1144.
7. risk_management :915's length, and two older "reckless hit" sites without "from behind".

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 29 files, 0 lost. Its one split-half candidate, forechecking :249, is a false positive (no ⚠ in HEAD either), per reviewer E.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. Every new noun was checked against its cited rule by its agent and again by a reviewer. Rules read: USA Hockey 602, 603, 604, 607–610, 619–621, 623, 631, 634, 639, 640 and Casebook 602/608; HC 6.4, 6.9, 7.3–7.7, 9.2, 9.5, 10.1; CARHA 48, 52, 53, 62; NHL 63.2, 21.1, 59.4; IIHF 41–43, 55, 60, 61. |
| D2 exceptions | Covered: Casebook 608 Situation 1 (pinch = minor); 63.2(ii)'s bat/foot/arm; 7.6(b)'s accidental-injury trigger. |
| D3 cross-book divergence | Not engaged. No book's answer changed. |
| D4/D5 citations | Not engaged. No citation changed. |
| D6 negative existence | Not engaged. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered for the edited units, including Key Takeaways (playing_without_the_puck KT12) and Common Mistakes. |
| D10 facts layer | Covered. Every facts-line edit was checked against its cap; several are now at 299–300. |
| D11 reader safety | Covered by the four safety-reviewers. Two majors (narrowed nouns) repaired. |
| D12 read-aloud integrity | Covered. Every agent rendered its files, and reviewers rendered nine. The final repairs were mostly not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links. One heading changed (risk_management :345), with no links to its anchor. |
| D15 rendered site | Structural only: 0 bare glyphs, no `<p>*`. Chrome not connected. |

## What this method could not have found

- **"one" shapes the census regex does not match.** Some were found by agents in passing; others remain (row W517(3)).
- **Narrowing with no lexical trace.** The pinch problem was found only because the Casebook happens to use the word.
- **How listeners hear the new nouns.** Whether a "clear" or a "hit from behind" is heard as narrower than the rule.
- **Reviewer transcripts.** They are not on disk; this record summarises them.

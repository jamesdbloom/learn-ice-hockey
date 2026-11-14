# W343: USA Hockey 608(c)'s mandatory match split out of the boards-or-net frame in eight documents (14 November 2026)

**Files:**
- content/technique/shooting.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/risk_management.md
- content/positions/switching_positions.md
- content/positions/center.md
- content/systems/zone_entries.md
- content/systems/offensive_zone_play.md
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works the census row W342 logged. USA Hockey 608(c) (usah.txt:3729–3732) reads: "A match penalty shall be assessed for checking from behind in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position". It has no boards or goal-frame condition. Casebook 608 Situation 1 adds "regardless of whether or not board contact is made" and "A match penalty must be assessed in all instances…". Hockey Canada 7.5(c) and CARHA 53(b) are boards/goal-frame (net) rules with "unable to protect or defend themselves".

The defect had two parts. USA Hockey's match was hung off the Hockey Canada/CARHA "into the boards or goal frame on a player who cannot protect themselves" sentence, so it read as a boards-only rule. Some sites also dropped "vulnerable or defenceless".

Four authors worked two files each:
- **S:** shooting, playing_without_the_puck.
- **T:** risk_management, switching_positions.
- **U:** center, zone_entries.
- **V:** offensive_zone_play, defending_the_rush.

## What changed
At every site USA Hockey now gets its own sentence, "boards or not" (or, for a goalie, "into the net or not"), with the full condition. Every Hockey Canada/CARHA limb and every 602(a) "plan on a match for any reckless hit" limb is kept.

| Document | Units changed |
|---|---|
| shooting | :536 (body), :945 (Common Mistakes); facts :507, not on the candidate list (had "on the defenceless" only; "goal frame" → "net" to fit 300/300) |
| playing_without_the_puck | :845, :1020 (citation moved outside the ⚠️ bold run so the amber stays on the instruction) |
| risk_management | :767 (body); facts :843, not on the candidate list (boards-framed) |
| switching_positions | :270 (split to match the reviewed form; it already carried the condition) |
| center | :784, :885, :902, :911; facts :881 (spelling only) |
| zone_entries | facts :794 |
| offensive_zone_play | :822, :993, :1225 (:1225 lacked "vulnerable or defenceless" entirely) |
| defending_the_rush | :337, :404, :945, :1101 (:1101 had "under USA Hockey with excessive force" and nothing else) |

Candidates already correct were left alone, for example zone_entries :241/:847, risk_management :859/:911, and offensive_zone_play :1170/:1176.

## After review (coordinator applied reviewer wordings verbatim)
- **zone_entries :794 (safety-reviewer, must-fix).**
  - **The problem:** to fit the cap the author's line dropped "if you". Voiced alone it sounded like "Pull up on a goalie…: drive them into the boards or net…", an instruction to hit a goalie from behind.
  - **The fix:** the reviewer's 300-character line puts the match before "if you drive them…". The rules-verifier checked it: OK.
- **risk_management :843 (both reviewers, optional).** "makes it one … boards or not" had "it" pointing at the into-the-boards check. The rules-verifier's line "makes any reckless one with excessive force on a vulnerable or defenceless player a match, boards or not" (279/300) was applied.
- **center :902/:911 (safety-reviewer, minor).** "a reckless one" became "a reckless hit from behind".
- **Re-checks.** Both reviewers re-checked these four units: OK, with 0 LOST in the three files.
- **"Any other reckless one" at center :902.** Both reviewers ruled it does not mislead: 602(a) reaches every reckless endangerment, and both routes price the hit at a match.
- **Not applied, logged in the plan:**
  - the same shape at seven sites outside the wave: defender :949/:437, body_contact_and_battles :2055, winger :511, goaltender :1370/:1628, and rules_primer :1204 (borderline);
  - three older zone_entries units opening "Drive them into the boards or goal frame unable to protect themselves and a match penalty is mandatory…", which a listener can hear as an instruction;
  - the minor "makes it a match … boards or not" antecedent elsewhere in the wave.

## Reviews
| Reviewer | Result |
|---|---|
| authors S, T, U, V | Census candidates read one by one. Three facts lines found beyond the candidate list. Layer tests across facts, body, Common Mistakes and KTs; renders read. |
| rules-verifier | All 21 hunks OK against 608(c), Casebook 608 Situation 1, 602(a), Hockey Canada 7.5(c) and CARHA 53(b). Token audit: no 602, 608(a)/(b), 620(b), 7.5(c), 53(b) or "multi-game" count decreased. Listed seven out-of-wave sites. Notes that the Summary of Penalties table lists 608(c) as a "Match Penalty Option", against the rule text's "shall … in all instances"; the rule text governs. Re-check OK. |
| safety-reviewer | No BLOCK. Every amber run is identical HEAD to tree; 0 LOST in all eight files; the HC/CARHA match and the USA Hockey match are heard in the same chunk at every site. zone_entries :794 must-fix and two minor wordings, applied. Re-check OK. |

### C11
The wave was written by authors S, T, U and V. The coordinator's content changes after review were three reviewer wordings, applied verbatim and re-checked by both reviewers. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all eight files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, with re-check |
| D4 Citations | 608(c) citations added where missing (offensive_zone_play :993, defending_the_rush :337) |
| D5–D8 | not engaged |
| D9 Summary layer | KTs and Key focus in all eight files read by the authors; none carries 608(c) |
| D10 Key-facts layer | shooting :507, risk_management :843, zone_entries :794, center :881, each voiced alone |
| D11 Reader safety | safety-reviewer, with re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer (SR, SR2) |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness (HEAD vs tree amber runs compared); no site-reviewer (text only) |

## What this method could not have found
- **Missed wordings.** A USA Hockey match stated without "608(c)", "excessive force" or "defenceless": the out-of-wave sweep was by the string "608(c)".
- **Diagram captions.** Captions in site/src/diagrams/*.mjs carrying the same frame.
- **Old layers.** A summary layer written on the boards-only assumption without naming the rule.

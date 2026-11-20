# W510: describes that named the wrong end, the high-tip facts lines, and Hockey Canada's missing checking-from-behind tiers (20 November 2026)

Four editing agents worked in files that did not overlap. They took W508's open rows 13–16.

| Agent | Files | Rows |
|---|---|---|
| 1 | site/src/diagrams/goaltender.mjs | W508(16) |
| 2 | site/src/diagrams/defensive_zone_coverage.mjs, body_contact_and_battles.mjs | W508(16) |
| 3 | content/technique/shooting.md, content/systems/offensive_zone_play.md | W508(14), (15) |
| 4 | content/systems/game_management.md | W508(13), then (17) after review |

The coordinator rebuilt the diagrams once, after the two diagram agents finished.

## Review

| Reviewer | Scope | Critical / major | Findings |
|---|---|---|---|
| diagram-reviewer | all 18 describe changes, plus diagrams.json | none | It viewed 7 PNGs and checked teams in source for all 18: our goalie defends the right net in every one, so "attacking half" was wrong in all 18. Minor: "defending" vs "defensive half" wording varies across modules (row W508(19)). |
| rules-verifier | every content edit, against NHL/IIHF 72.3 and 80.1–80.3, PWHL 74.3 and 82.1–82.3, Hockey Canada 6.3(d), 6.9 and Interpretations 1–5, and 7.5; USA Hockey 621(d) and Casebook 621 Situations 1–15; CARHA 62; IIHF Situation Handbook 80.1–80.15 (both editions); the British books | none in the diff | See the list below. |
| facts-reviewer | the five changed or new facts lines; rendered all three documents | none | Five minors: an "also" opening a new spoken chunk (shooting :253); the IIHF half missing from shooting :253; "Sits." voiced as a word; "that one" at OZP :581; and 7.5(b) not traced to game_management's body. |
| safety-reviewer | game_management's new 7.5 text, against hc.txt 7.5, 7.6 and 7.7; rendered | **one major**, repaired | The new body sentence said injuring a player by checking from behind "or trying to, is a match anywhere". That dropped the book's "deliberately", so an accidental injury read as a match, contradicting the 7.5(b) sentence just before it. "Anywhere" could also be heard as "in any book". |

**Rules-verifier findings.**
- Situations 10 and 12 really are earlier whistles: the other books need possession and control, or both teams abstaining.
- Removing "the goalie covers it" from the "sooner" list was right, because a goalie's freeze stops play in every book.
- Situation 9 (USA Hockey) and IIHF Handbook 80.12 put the draw in opposite ends.
- **F1 (moderate, penalty-bearing, pre-existing).** No layer of game_management carried Hockey Canada 7.5(c)'s second paragraph: a match for deliberately injuring, or attempting to injure, by checking from behind.
- **F2 (pre-existing).** OZP :597 cited 80.2 for the declining case, where 72.3/74.3 govern.
- **F3.** NHL, PWHL and Hockey Canada readers got no answer on the goalie-cover faceoff.

**Repairs after review.** All findings were repaired:
- In shooting and OZP, by agent 3, from the reviewers' sketches, re-checked against NHL/IIHF 72.3 and PWHL 74.3.
- In game_management, by agent 4, from hc.txt 7.5:
  - 7.5(b) and the 7.5(c) deliberate-injury match are now in the body.
  - The facts line at :1191 was reworded to carry the match limb within 300 characters. The game misconduct is stated once as "always" (7.5(e)), the 7.5(a), (b) and (e) citations are merged, and "goal frame" became "net", matching the sibling lines.
  - The safety-reviewer then checked each reworded term and found none cheaper.
  - The major was repaired to "Under Hockey Canada, injuring them on purpose by checking from behind, or trying to, is a match penalty wherever on the ice it happens (7.5(c))".

No reviewer re-read that last sentence after it landed. It is confined to the finding, takes "on purpose" and "wherever on the ice it happens" from the reviewer's sketch, and adds the book name. This is the C11 terminating case.

## What changed

- **18 diagram describes** (goaltender.mjs 9, defensive_zone_coverage.mjs 8, body_contact_and_battles.mjs 1) opened "The attacking half of the rink, the defended net at the right". They now open "The defending half of the rink". This affects screen-reader text only: no caption, geometry or drawing changed.
  - The coordinator swept every other module. Each remaining "attacking half" opening names the opposition's or the attacked net, or sits in an offensive-zone module.
  - "Attacking half" is the builder's own name for the drawn half (`site/scripts/lib/rink.mjs`, the `half` parameter). That is how it spread. Plan row W508(18).
- **shooting.md.**
  - The facts line :252 (298/300) was split into two `Rule:` lines.
  - :252 now gives the possession test (621 Situations 6, 15).
  - :253 gives the simultaneous-touch and decline whistles with the draw in your end, as when the goalie covers a high tip (Situations 10, 12, 9), and adds that IIHF Handbook 80.12 puts a goalie's cover in the goalie's end.
  - In the body (:268), the goalie cover moved out of "the whistle can come sooner", into its own sentence about where the faceoff goes. The body adds "The NHL, PWHL and Hockey Canada rulebooks print no ruling on it."
- **offensive_zone_play.md.**
  - Facts :579 now reads "Situations 6 and 15 play on".
  - New facts :581: USA Hockey's draw for a simultaneous touch (Situation 10) and for a goalie's cover (Situation 9), and IIHF 80.12's opposite answer.
  - Body :595 and :597 match.
  - :597's declining sentence now cites NHL and IIHF 72.3 and PWHL 74.3 ("nearest where play stopped once both teams leave the puck").
- **game_management.md.**
  - :1191: "on the violence", plus the deliberate-injury match.
  - :1229 now carries 7.5(b) and the deliberate-injury match.

## Rows closed

- W508(13)
- W508(14)
- W508(15). Situation 9 is a faceoff-location difference, not a timing one. NHL, PWHL and Hockey Canada print no ruling.
- W508(16)
- W508(17)

## New plan rows (added to From W508)

- **(18)** "Attacking half" is a builder term. Some describes in offensive_zone_play.mjs and rink_map_and_glossary.mjs don't say whose net it is. Spectator hosting.
- **(19)** "Defending" vs "defensive half".
- **(20)** OZP :597's 72.3 citation covers only the both-abstain case.
- **(21)** "Print no ruling" rests on one act-sweep.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- `build-diagrams`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0. The repaired game_management sentence is in dist.
- `check_callout_flow --bare`: 0.
- No `<p>*` in dist.
- `check_marker_pairs`: 3 files, 0 lost and 0 split halves.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered (rules-verifier, books listed above; safety-reviewer for HC 7.5–7.7). |
| D2 exceptions | Covered: Situation 15's straight-in exception (unchanged); Situation 9; 7.5(b)'s injury proviso; 7.5(c)'s two limbs. |
| D3 cross-book divergence | Covered: high-tip whistle timing and goalie-cover faceoff location by book. |
| D4/D5 citations | Covered: 80.2 → 72.3/74.3 at OZP :597. No URL added. A source-verifier note says neither Sources trailer lists IIHF Situation 80.12 explicitly; the trailers cite 80.12 by number in prose. |
| D6 negative existence | Covered as a recorded act-sweep: "no ruling" in NHL, PWHL and Hockey Canada (plan row W508(21)). |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: the safety-reviewer checked game_management's Key focus :187, Common Mistakes :1290 and KT14 :1355 against the new 7.5 text, with no layer built on the old answer. Agent 3 checked shooting and OZP Common Mistakes and Key Takeaways; neither carries the high-tip claim. |
| D10 facts layer | Covered by the facts-reviewer, which rendered all three documents. All five minors were repaired. game_management's block is at 14/14 and :1191 at 298/300. |
| D11 reader safety | Covered: the safety-reviewer's major was repaired. Rule F1's missing match limb now reaches the body and facts layers. |
| D12 read-aloud integrity | Covered by the facts- and safety-reviewers' renders before repair. The repairs were not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: "Sits." → "Situations", antecedents, check_links. |
| D15 rendered site | Covered by the diagram-reviewer for the describes (7 PNGs viewed, teams checked for all 18; describes are not visible text). The content edits add one ⚠️ that leads its strong run; `--bare` reports 0. Chrome not connected. |

## What this method could not have found

- **Unpublished practice.** How NHL and PWHL referees actually rule on a goalie covering a high tip; no casebook is on disk.
- **Other wordings.** A ruling phrased as "holds" or "smothers", missed by the freeze/cover/fall sweep.
- **Other documents.** Other documents carrying Hockey Canada's 7.5 ladder without the deliberate-injury limb. Only game_management was checked.
- **Screen readers.** A real screen-reader listening of the 18 describes.
- **Reviewer transcripts.** They are not on disk; this record summarises them.

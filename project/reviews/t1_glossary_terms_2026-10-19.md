# T1 (19 October 2026): glossary-consistent term sweep (readability item 8), plus row (nn)

## Census

A census agent counted term variants across all 39 documents. Its output is in the session scratchpad at `s4/terms/`: `perdoc_counts.csv` and the rerunnable `count.py`.

**Owner decisions recorded in OPEN_ITEMS:**
- US spellings in the position pages (style guide :995);
- goalie / goaltender / goalkeeper;
- the "off-side" hand sense;
- "house default";
- penalty bench / penalty box.

T1 changed only the forms the glossary already settles.

## Changes

There were 209 word changes in 28 documents. Every change is one of eight swaps, and there are no other edits:

| Swap | Rule applied |
|---|---|
| face-off → faceoff | |
| short-handed → shorthanded | |
| on-side → onside | |
| off-side → offside | Rule sense only, including "lining up offside" at a faceoff |
| bodycheck / body-check → body check | Hyphen kept before a noun ("body-checking rules") |
| linesman → linesperson | |
| netminder → goalie | |
| wraparound → wrap-around | |

**What was kept verbatim:**
- Quotations, about 575 old forms.
- Rule titles: Rule 83 (Off-side) and Rule 76 – Face-Offs.
- **OFF-SIDE** rulings.
- "4 Nations Face-Off".
- The hand-sense "off-side".
- Sources trailers.
- British-book "linesman" in uk_rules :305.

**Headings changed:** three "Penalty Kill (your team is shorthanded)" headings and faceoffs :893. None of their anchors is linked.

**Facts:** offensive_zone_play :903 keeps "bodycheck", because the line is at its 300 cap.


## Files in this commit (word-diff additions per file, `git diff --cached --word-diff=porcelain`)

| Document | Changed words |
|---|---|
| foundation/on_ice_communication.md | 9 |
| foundation/rink_map.md | 2 |
| foundation/rules_primer.md | 15 |
| foundation/uk_rules.md | 3 |
| getting-started/getting_started.md | 1 |
| hockey-iq/playing_without_the_puck.md | 4 |
| hockey-iq/time_and_space.md | 5 |
| off-the-ice/mental_game.md | 1 |
| off-the-ice/team_play_and_culture.md | 2 |
| positions/center.md | 7 |
| positions/defender.md | 3 |
| positions/goaltender.md | 3 |
| positions/switching_positions.md | 12 |
| positions/winger.md | 6 |
| reading-diagrams/reading_ice_hockey_diagrams.md | 2 |
| systems/breakouts.md | 5 |
| systems/defending_the_rush.md | 14 |
| systems/faceoffs.md | 37 |
| systems/forechecking_systems.md | 7 |
| systems/game_management.md | 10 |
| systems/neutral_zone_systems.md | 4 |
| systems/offensive_zone_play.md | 11 |
| systems/special_teams.md | 4 |
| systems/zone_entries.md | 8 |
| technique/body_contact_and_battles.md | 20 |
| technique/passing_and_receiving.md | 9 |
| technique/puck_handling.md | 2 |
| technique/shooting.md | 4 |

28 documents. puck_handling also carries the :485 "or cross-check" fix; uk_rules :410 is the quotation fix; body_contact :1789 is a revert to "linesman".

## Review

A content-reviewer checked all 209 changes by script and found **no MAJOR issues**. It confirmed:
- no change falls inside a quotation;
- every "offside" is in the rule sense;
- rule titles and rulings are intact;
- no linked anchor changed;
- all gates pass.

**MINORs (both applied):**
- body_contact :1789: "linesman" restored, because it paraphrases EIHL Casebook 46.13, matching uk_rules :305. The coordinator checked every other new "linesperson": none paraphrases a British book that uses "linesman", and the In-House Rules themselves say "linesperson".
- uk_rules :410: the bold paraphrase is now a real quotation with the book's spelling: *"no later than 20 minutes before the scheduled face-off"*.

## Row (nn): the chunk tails moved by the keep-with-next renderer change (b9385e8)

A safety-reviewer rendered the current tree with the renderer from before and after b9385e8 and found **no listener-facing regression**:
- 20 of the new prose permission tails were already terminal and were only hidden behind a heading.
- 3 real boundary moves are all facts lines:
  - defending_the_rush 047 and zone_entries 046 both err strict, so they are safe.
  - puck_handling :485 (the strength-move Rule line) lacked its cross-check limit when voiced alone. Fixed: "…no holding or cross-check —…" (293/300), checked against NHL 54.2 and 59.1.

The zone_entries icing grant is no longer chunk-terminal, which is an improvement. Published episodes (NotebookLM and Style B) do not use md_to_speech's chunker.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | No rule claim changed, except puck_handling :485, which was checked at source |
| D2 exceptions | Out of scope |
| D3 divergence | Out of scope |
| D4/D5 citations | Script-verified that no quotation was altered; uk_rules :410 is now a verbatim quote |
| D6 negatives | Out of scope |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | No figures |
| D9 summary layer | Swaps applied in every layer except trailers |
| D10 facts | Shortening or equal-length swaps; one line kept at cap; check_facts passes |
| D11 safety | The (nn) tails review covered the one safety-relevant change |
| D12 read-aloud | Two renderers compared on all 39 documents (nn) |
| D13 folklore | Out of scope |
| D14 structure | 4 headings changed, none linked; check_links and the site check-links pass |
| D15 site | Full build after the final content edit; --bare 0; --panels 0 in all 28 files |

## Gates (after the final content edit, no pipes)

- check_facts, check_links --quiet, check_absolutes, check_secrets and check_counts all pass.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all 28 files.

## What this method could not have found

- **Verbatim book wording without quote marks.** It reads as prose, and the sweep would have changed it. Four suspect sites were checked by hand.
- **Diagram captions.** These are out of scope, so prose may say "faceoff" while a caption says "face-off".
- **Unlisted forms**, such as "face off" written as two words.

# W546: the long Key Takeaways become kernels (20 November 2026)

## Origin: the W545 measurement (content-reviewer, read-only)

The content-reviewer measured all 16 Key Takeaways over 60 words, using `check_readability`'s own split. It extracted each page's summary layers, rendered all 14 documents, and placed every carrier by speech chunk.

- **Finding.** In each of the 16, the per-book penalty ladder is also voiced in the same page's Common Mistakes (CM), and usually in its facts or What it costs as well. No KT is the sole summary-layer carrier of a mandatory ejection.
- **Recommendation.** SHORTEN 15 to the instruction, one "can end your game" clause, and any limb that lives only in the KT. KEEP mental_game KT1: it is crisis content (warning signs and help routes), not a penalty ladder.

## Edits

Three agents edited disjoint files. Brief: `scratchpad/w546_common.md`. Each agent confirmed the carrier CM by reading it and verified each scope word against the sources.

| KT | Words | Notes |
|---|---|---|
| language_and_glossary KT11 | 62 → 37 | |
| rules_primer KT5 | 63 → 50 | The sketch's flat "even one you did not mean" was refuted for the NHL (48.3/48.4 "no provision") and CARHA (50(a) accidental is a minor). It now reads "in most even one you did not mean". |
| rules_primer KT9 | 67 → 40 | The old "a charge on them must" read as universal. It now reads "in some books a charge must". |
| body_contact_and_battles KT11 | 68 → 48 | Keeps USA Hockey 620(b)'s head, face or neck limb, because its CM says only "mask or neck". |
| faceoffs KT3 | 69 → 48 | "Under USA Hockey a careless one ends your game" (620(b) "shall"). Head-butting "ends your game in most books". |
| defender KT3 | 71 → 45 | |
| winger KT8 | 71 → 41 | |
| forechecking_systems KT6 | 64 → 60 | Final wording below. |
| forechecking_systems KT8 | 70 → 36 | Keeps the KT-only CARHA "any deliberate contact" limb (66(b) and 30(a)). |
| game_management KT7 | 61 → 51 | `check_layer_echo` KT→CM is 2.4%. |
| special_teams KT10 | 74 → 33 | |
| zone_entries KT11 | 69 → 60 | Final wording below. KT10 was kept, because its Hockey Canada "automatically" is the only mandatory branch for a goalie out of the crease. |
| playing_without_the_puck KT11 | 82 → 58 | |
| conditioning_and_recovery KT11 | 64 → 54 | "Where those two bar it" is kept. "Under USA Hockey it must" rests on Casebook Standard of Play Situation 17. |
| team_play_and_culture KT12 | 73 → 49 | "Can draw a game misconduct" (the game is already over in the handshake line). |

Final wordings for the two rows that changed again after review:
- **forechecking_systems KT6:** "No arm holds or skate push-offs, nor arm blocks under USA Hockey: a push-off there ends your game; a CARHA hold can". Sources: 627(a) "shall"; CARHA 63(a) and 30(a). The W536 arm-block limit is kept.
- **zone_entries KT11:** "a penalty in every book, and a charge can end your game — in some books it must".

## Review

A safety-reviewer with a rules check (C4/C6) found no critical and no major issues, and two minors. Both were repaired with the reviewer's sketches: forechecking KT6's scope and its "ends", and zone_entries KT11's plain "can end".

It verified every scope word against the source books, for example:
- "most" holds in 4 of 6 books for an unintended head hit and for head-butting;
- "in some it must" is Hockey Canada 8.5(b) and CARHA 52(b);
- "every book can".

It also read all 13 CM carriers. Every dropped mandatory tier is still voiced in that page's summary layers. It found no overstatement.

**C11.** No one re-read the two minor repairs. They follow the reviewer's sketches and were trimmed to the cap.

## Rows

- **Closed:** W538(1), all but the deliberate KEEP of mental_game KT1.
- **New, from W546:**
  1. rules_primer Key focus :17's CARHA scope.
- **Owner decision pending:** W521(2).

## Gates on the final tree (shared with W545)

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished (`scratchpad/build_w546.log`).
- `check_callout_flow --bare`: 0. Panels: 0. No `<p>*`.
- `check_marker_pairs`, run per file: 13 files, 0 lost, 0 split.
- `check_readability`: long Key Takeaways went from 16 to 1. The one left is mental_game KT1, kept on purpose.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: every scope word was verified across six books |
| D7 | Covered: each KT leads with the instruction |
| D9 | Covered: summary-layer carriers read for every dropped tier |
| D11 | Covered: safety-reviewer |
| D12 | Covered: every agent rendered its files; the reviewer rendered zone_entries |
| D13 | Out of scope |
| Others | Not engaged |

## What this method could not have found

- **Chunk distance between each KT and its CM carrier.** It is measured for zone_entries only.
- **Other rules in a book that price the same act more harshly.** That is the true-negative trap.
- **How the kernels sound in the finished audio.**
- **Reviewer transcripts.** They are not on disk.

# W262–W264: readability pass on zone_entries, switching_positions and special_teams (11 November 2026)

**Files:**
- content/systems/zone_entries.md (W262)
- content/positions/switching_positions.md (W263)
- content/systems/special_teams.md (W264)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The owner's 8 November priority is readability. This week's safety repairs restored penalty limbs at many scenes, and that left some very long sentences, paragraphs and Key Takeaways. Three authors worked one page each from a shared brief (READ_BRIEF.md). The task was to split at natural joints and lead with the instruction, without losing a single limb. Each scene's price and each carve-out's counterweight had to stay in the act's chunk, which was confirmed by rendering after each split.

## Measured (check_readability --file; HEAD via READABILITY_CONTENT_DIR)
| | zone_entries HEAD → after | switching_positions HEAD → after | special_teams HEAD → after |
|---|---|---|---|
| longest sentence | 114 → 61 | 75 → 57 | 137 → 81 |
| long paragraphs (>1,200 chars) | 5 → 0 | 0 → 0 | 4 → 2 |
| longest paragraph (chars) | 1,317 → 1,188 | 1,162 → 1,167 | 1,711 → 1,496 |
| long Key Takeaways | 1 → 0 | 2 → 2 | 2 → 2 |
| KT max (words) | 61 → 60 | 140 → 130 | 75 → 74 |
| mean sentence | 20.1 → 19.9 | 19.7 → 19.5 | 19.5 → 19.1 |

Units left long on purpose:
- **special_teams' three Hockey Canada head-contact sentences (79–81 words).** The review's B1 fix requires the carve-out, the tiers and the counterweight to stay in one sentence.
- **special_teams' goalie hit-from-behind paragraph (1,496 characters).** A trial split moved USA Hockey's tiers into a different chunk from the act, so the split was undone.
- **switching_positions KT8 (130 words).** Every limb in it is a safety tier, it is voiced alone, and the multi-game ban was restored after review.
- **zone_entries :949 (61 words).** It is the line under the heading "the one-sentence version".

## What changed
**zone_entries (W262).** All 13 sentences over 60 words are now 60 or under, except :949.
- The hit-from-behind ladders (:254, :855, :1159, CM :1193) were split. Each Hockey Canada clause keeps its head counterweight in the same sentence, and a ⚠️ was added on "it ends your game while it stays off the head" so the mandatory ejection keeps its amber.
- The USA Hockey goalie-contact paragraph (:811–:813) was split into A and B:
  - A: the chase instruction and the NHL/IIHF/PWHL permission.
  - B: leads with the Casebook 607 Sit. 5 limit, keeps the avoidable-contact test on "once they have lost the puck", then gives the permission "Only where your game allows body checking…", followed immediately by the 604(a) list. The whole of B is one chunk (050).
- The two list items "The goal." and "Forechecking during a delayed offside" gained indented continuation paragraphs.
- KT4 is now 60 words.

**switching_positions (W263).**
- **KT8 (140 → 130).** It now leads with the act, then "⚠️ **Into the boards or net on a player who cannot protect themselves, Hockey Canada and CARHA make it a mandatory match.**", then the head clause, then USA Hockey's floor and ejecting tiers.
- **The CM bullet** names "Hockey Canada and CARHA" where it used to say "several books".
- **Splits** at :270, :257, :561 and :573.

**special_teams (W264).**
- Splits at :463, :622, :677 (icing), :861, :921, :933, :935, :1025, :1109, :1161, :1242 and :1245.
- The Hockey Canada head clause at :1101, :1115 and :1254 was restructured.
- KT8 and KT10 were split.
- Chunk boundaries are identical to HEAD's (85 chunks).

**Fixes from review, applied verbatim:**
- **special_teams B1 (BLOCKING, :1101, :1115, :1254).** The split had moved the Hockey Canada scope off the head-contact tiers. The tier sentence then named no book, and voiced alone it could be heard as the NHL, IIHF or PWHL price. The carve-out sentence "Under Hockey Canada that holds while it stays off the head." also ended before its counterweight. All three sites now read: "Under Hockey Canada it does while it stays off the head; on the head, Hockey Canada calls it head contact — [tiers] — and at every level, plan on being ejected anyway."
- **special_teams W1 and W2.** KT8 now reads "Under USA Hockey, if reckless, plan on a match…", restoring the dropped "there" scope. The CM bullet now reads "A hit from behind into the boards or net…".
- **switching_positions B (BLOCKING, KT8).** The author had moved "and a likely multi-game ban" out of KT8 under the brief's "body-carried detail may move", and the coordinator approved it. The reviewer blocked that. USA Hockey's Standardized Discipline Policy puts 608(c) at Level 2 (a recommended 4–8 game suspension) and 602(a) at Level 1 (6–10). A listener hearing only KT8 would have priced a reckless hit from behind as a one-game cost. The ban is restored: "plan on a match and a likely multi-game ban for the reckless one".
- **switching_positions wording.**
  - :270: "it does" became "it ends your game".
  - CM and KT8: "— Hockey Canada's while it stays off the head" was restored to the "every book but USA Hockey's" sentence.
  - :257: "That major and game misconduct is mandatory…".

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×3 | Split long sentences and paragraphs. Wrote a limb inventory per unit. Rendered before and after and confirmed chunk placement. Listed every reworded rule sentence. |
| safety-reviewer, rules and safety (W262 + W263) | **BLOCKING:** switching_positions KT8 had dropped the multi-game ban. **WORDING ×3**, applied verbatim. **zone_entries all CORRECT:** :811–:813 limit-first, with the permission bounded; "automatically" reaching CARHA is right (52(b) "shall"); :1171 matches Casebook 607 Sit. 4; the new glyphs and head counterweights hold. It also raised the 7.6 "supersedes" question (plan row). |
| safety-reviewer, rules and safety (W264) | **BLOCKING B1** (×3 sites), plus **W1 and W2**. All applied verbatim by the author. CORRECT: icing (USA Hockey 624(b)(1), NHL 81), IIHF 19.3, CARHA 66(b)/30(a)/52(b)/66(e), the :1111 IIHF "plan on" with its disclosure, the :937 split half, and unchanged chunk boundaries. |

### C11
The authors wrote the splits. The coordinator applied the switching_positions review's four wordings verbatim; the W264 author applied B1, W1 and W2 verbatim. The coordinator wrote the plan row and this record. The coordinator's own approval of moving the multi-game ban out of KT8 was the defect the reviewer blocked; it is recorded here.

### Checks after the last content edit
- check_facts exit 0 (no pipe).
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs: 0 LOST on all three files.
- Full `npm run build` (absolute binary) after the final edit. `--bare` and `--panels` are 0 on all three pages, and dist has 0 literal `**`.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | every reworded rule sentence checked against hc.txt, usah.txt, usah_casebook.txt, carha_2026.txt, the NHL, IIHF and PWHL rules, and the USA Hockey Standardized Discipline Policy |
| D5–D8 | not engaged |
| D9 Summary layer | switching_positions KT8 and CM; special_teams KT8, KT10 and CM; zone_entries KT4 |
| D10 Key-facts layer | not engaged; no facts line changed |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | before-and-after renders on all three pages; chunk co-location confirmed |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus panel, bare and literal-`**` scans |

## What this method could not have found
- A layer elsewhere in these files that relied on wording these splits changed.
- Whether listeners hear the new sentence-initial pronouns as pointing where they should. This was judged from de-tagged text, not by listening.
- The Hockey Canada 7.6 "supersedes" question (plan row).

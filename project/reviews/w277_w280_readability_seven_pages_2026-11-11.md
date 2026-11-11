# W277–W280: readability pass on seven pages (11 November 2026)

**Files:**
- **W277:** content/technique/body_contact_and_battles.md
- **W278:** content/foundation/rules_primer.md and content/foundation/language_and_glossary.md
- **W279:** content/positions/defender.md and content/hockey-iq/risk_management.md
- **W280:** content/hockey-iq/playing_without_the_puck.md and content/technique/shooting.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The owner's 8 November priority is readability. A fresh `check_readability --json` census after commit 5c0e2b83 ranked these seven pages highest on long sentences, long paragraphs and long Key Takeaways. Four authors each took a disjoint file set, working from READ_BRIEF.md. That brief now carries this week's three blocking lessons:
- a split half must name its book;
- no modal may sit over a mandatory penalty;
- never drop a floor, "at least", a multi-game ban or a book name.

## Measured (check_readability; "before" is the HEAD census, "after" is the tree after every review fix)
| page | longest sentence | paragraphs >1,200 chars | longest paragraph | KTs >60 words | longest KT |
|---|---|---|---|---|---|
| body_contact_and_battles | 119 → 65 | 7 → 0 | 1,653 → 1,190 | 3 → 2 | 88 → 76 |
| rules_primer | 79 → 60 | 5 → 0 | 1,528 → 1,200 | 3 → 2 | 75 → 70 |
| language_and_glossary | 81 → 58 | 2 → 0 | 1,361 → 1,194 | 2 → 2 | 79 → 79 |
| defender | 82 → 55 | 3 → 0 | 1,326 → 1,147 | 1 → 0 | 68 → 60 |
| risk_management | 86 → 59 | 2 → 0 | 1,292 → 1,176 | 2 → 1 | 70 → 68 |
| playing_without_the_puck | 87 → 60 | 2 → 0 | 1,364 → 1,117 | 1 → 1 | 66 → 64 |
| shooting | 96 → 60 | 0 → 0 | 1,152 → 1,152 | 0 → 0 | 60 → 60 |

**Sentences left over 60 words.** body_contact's four sentences over 60 words are almost entirely verbatim quotations: CRT6, Buterbaugh, IIHF 42.1 and Standard of Play.

**KTs left long.** Every remaining long KT carries tiers or book scopes, and a KT is voiced alone, so none of them was cut further.
- **body_contact KT6 (76).** The reviewer's B1 fix restored the Hockey Canada off-head mandatory ejection.
- **glossary KT12.** A trial split made it longer and left the new half without its book, so it was restored byte for byte.

## What changed
Each long sentence was split at its joints and each long paragraph at sentence boundaries, leading with the instruction. Each split half now names its book. Notable rewordings:
- **body_contact:**
  - :798 was split so that each carve-out keeps its counterweight in chunk 072.
  - KT12 was split into a lane KT and a pure-tactics KT13 (rim or reverse; one look). Nothing cites KTs by number.
  - The :1334 screening bullet now names NHL/IIHF 69.4 and PWHL 71.4 ("may be penalized").
- **rules_primer:**
  - The Hockey Canada high-sticking paragraph was split into separate 7.6 and 7.7 paragraphs.
  - "The other three books" now leads with "Under USA Hockey, go after the goalie's puck with your stick, never your body".
  - The "Hockey Canada, if it reaches the head" sibling bullet was added.
- **defender:**
  - The KT3 "can" over the USA Hockey match became "plan on".
  - The split Hockey Canada head half now names its act ("a hit to the head is a match…").
- **risk_management:** the 86-word bold claim at :854 and :906 was split.
- **playing_without_the_puck and shooting:** the Hockey Canada head sentence and its "Under USA Hockey" halves were split out.

## New markers
Each of these is a new split half or unit that carries a hazard, and each was reviewed:
- body_contact :798 (a second marker, on the "so plan on checking from behind's price anyway" floor), :800 (the new split half's 7.5(c) match), :1384, :1547 ("the player with the puck is not fair game either") and :1790. The W277 safety-reviewer read all 13 hunks of the file diff and ruled each of these CORRECT; :1547 carries its verbatim "alike" wording;
- rules_primer's head-bullet floor, "So do not lean on 69.2's…", and the throwing-a-stick match;
- the glossary head plan-on clause and the injury-interference major;
- defender's D2 half and the D6 602(a) clause;
- risk_management :854's mandatory match;
- playing_without_the_puck CM :1047.

check_marker_pairs reports 0 LOST on all seven files. The remaining SPLIT HALF UNMARKED candidates were each ruled correct by a reviewer:
- playing_without_the_puck :739 (69.7's third limb);
- body_contact :1514 (the 609 Situation 2 net front);
- risk_management :912 (the England/Wales ban).

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×4 | Wrote limb inventories per unit. Ran before-and-after renders and confirmed chunk placement. Listed every reworded rule sentence. |
| safety-reviewer W277 (body_contact) | **BLOCKING ×2, both fixed verbatim.** **B1:** KT6 had folded Hockey Canada into "plan on it", losing 7.5(a)/(e)'s mandatory off-head ejection; restored as "…and under Hockey Canada unless it reaches the head; on the head, and under the IIHF, plan on it anyway". **B2:** the new ⚠️ trip carve-out was broader than CARHA, whose Note to 86(a) excuses only a hook-check; now "(in CARHA, only with a hook-check)" sits in the same sentence. **WORDING:** "Under Hockey Canada and CARHA alike", applied verbatim. |
| safety-reviewer W278 (rules_primer, glossary) | **BLOCKING:** a new bold lead said a Junior/Senior stick to the head "is priced as head contact under 7.7 instead", the flat-precedence shape 5c0e2b83 removed (9.5(a) is a minor; Interpretation 2 sends minimal violence elsewhere). Fixed verbatim: "goes to head contact under 7.7 once it is more than minimal violence". **WORDING W1:** the "Throwing a stick" half needed its own ⚠️ and its book. Applied from the reviewer's sketch, keeping "on the ice" because 53.7 and 53.8 are not throws at a player. The coordinator verified NHL 53.6 ("shall be assessed a match penalty") and IIHF 53.6 ("at their discretion, may assess a major penalty and an automatic game misconduct") in source. **W2 and W3:** chunk repacks, ruled acceptable. |
| safety-reviewer W279 (defender, risk_management) | Nothing blocking. **WORDING, applied verbatim:** risk_management's bold claim ×2 became "Plan on a hit from behind ending your game in every book here except USA Hockey…", because the flat version was false for the IIHF (43.3 discretionary) and for a Hockey Canada head hit. The split head sentence names Hockey Canada again, and "which writes no minor" was added to the IIHF line. In defender, the CARHA 49(a) fragment became "The referee picks which…" and "Keep the body to the corner side". |
| safety-reviewer W280 (playing_without_the_puck, shooting) | Nothing blocking. **WORDING, applied verbatim:** "under Hockey Canada, it can be called as head contact" ×3; "only while it stays off the head" ×3; shooting :534's trailing clause; shooting :221's IIHF reckless swing now "the referee may give…" (60.4 is discretionary; this was pre-existing). Ruled that shooting :534, :912 and :945 ("is head contact, a match if…") stay as they are. |

### Who checked the rules
The rulebook checks were made by the four safety-reviewers, each quoting the flattened primary text, and by the coordinator for NHL and IIHF 53.6. No `rules-verifier` ran in this wave, because no rule claim was new: every claim was an existing one split or rescoped.

### C11
The authors wrote every split. The coordinator applied every reviewer wording verbatim, with one exception: the W278 W1 sketch was adapted to keep "on the ice", and the coordinator checked that adaptation against NHL and IIHF 53.6 in source. The coordinator wrote the plan row and this record.

### Checks after the last content edit
- check_facts exit 0 (no pipe).
- check_links --quiet exit 0.
- check_absolutes passes.
- check_marker_pairs 0 LOST on all seven files.
- check_tables unchanged.
- Full `npm run build` (absolute binary), started after the final content edit. `--bare` and `--panels` show 0 on every changed page, and dist has 0 literal `**`.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | every reworded rule sentence checked against hc.txt, usah.txt, usah_casebook.txt, carha_2026.txt, and the NHL, IIHF and PWHL rule texts (see each review) |
| D4 Citations | out of scope: no URL or citation changed |
| D5–D8 | not engaged |
| D9 Summary layer | KTs on body_contact (6, 7, 12/13), rules_primer (6, 7, 8), glossary (11), defender (3), risk_management (5, 11) and playing_without_the_puck (3); Common Mistakes on playing_without_the_puck and shooting |
| D10 Key-facts layer | not engaged; no facts line changed |
| D11 Reader safety | safety-reviewer ×4 |
| D12 Read-aloud | HEAD-versus-tree renders on all seven files; chunk co-location confirmed |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; dist check-links |
| D15 Rendered site | build, plus panel, bare-glyph and literal-`**` scans |

## What this method could not have found
- A limb with no distinctive phrase that moved chunk. All co-location checks were phrase-based.
- Sibling documents whose KTs were flattened the same way as body_contact KT6 was (plan row).
- Defects that existed at HEAD in unchanged sentences, beyond the few found in passing (plan row).
- How the new chunk boundaries sound. Nobody listened to the audio.

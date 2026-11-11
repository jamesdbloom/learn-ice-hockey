# W265–W268: "takes precedence" replaces a false reason in 16 files, plus readability on five pages (11 November 2026)

**Files:**
- **W265:** content/technique/body_contact_and_battles.md, content/foundation/language_and_glossary.md, content/foundation/rules_primer.md, content/hockey-iq/playing_without_the_puck.md
- **W266:** content/hockey-iq/risk_management.md, content/positions/center.md, content/positions/switching_positions.md, content/systems/defensive_zone_coverage.md, content/positions/winger.md
- **W267:** content/systems/faceoffs.md, content/systems/forechecking_systems.md, content/systems/game_management.md, content/systems/offensive_zone_play.md
- **W268:** content/systems/special_teams.md, content/systems/zone_entries.md, content/positions/goaltender.md, content/technique/shooting.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The W262–W264 plan row, item (1). The "harsher of" wave (w256_w259) gave a reason for its conservative Hockey Canada advice: *"the book does not say how the two rules meet"*. A reviewer pointed out that Hockey Canada 7.6's preamble does say how they meet. A read-only rules-verifier then ruled against `sources/hc.txt` 7.5, 7.6, 7.7 and 8.5:

- **Minor and female hockey (7.6): FALSE.** The rule reads *"This rule supersedes any other rules, with the exception of Rule 7.10 – Fighting, and any foul that results in contact to the head must be penalized as Head Contact"*. 7.5(e)'s game misconduct attaches only when a penalty *"is assessed for Checking From Behind"*. At body_contact_and_battles, the owner site, the sentence quoted the clause and then denied it.
- **Junior and Senior (7.7): ARGUABLE.** It supersedes only *"other rules regarding contact to the head"*, and minimal violence goes to another rule.
- **A head-first drive into the boards with no contact to the head: TRUE.** 7.5's preamble (ii) names it, and 7.6 has no boards clause. "Harsher of the two" stays.
- **Goalie, 7.5 against 8.5: TRUE.** 8.5 is not a head-contact rule, and no rule says which governs. "Plan on the dearer" stays.
- **The advice is still honest as advice.** The referee picks the rung on the degree of violence. The reason changed; the floor did not.

## What changed
**Precedence repair: 25 census sites, plus six sites the census missed.** The census was lexical. The authors found these extra sites by sweeping for the act:
- body_contact :1440
- center :779
- forechecking :810
- goaltender :1615
- special_teams :1115 tail
- shooting facts :507

At every site the false reason now reads "the book says head contact takes precedence, yet its lowest rungs can keep you in the game, so plan on at least checking from behind's minor plus game misconduct anyway", fitted to the site.

- **The owner site, :798, gives the violence reason.** 7.6 tells referees not to hesitate over serious penalties for violent head contact. In Junior and Senior, 7.7(b) makes the major and game misconduct mandatory when the contact is highly violent.
- **Goalie head limbs** (goaltender, shooting, center, forechecking, special_teams) now read "the book calls it head contact and says that takes precedence, but plan on [the dearer / the same price / at least 7.5's price] anyway".
- **shooting :538 was rescoped.** "Dearer of 7.5 and 8.5" now covers the head-first drive. The head case names precedence.
- **The authors kept "the dearer" where the brief's sketch said "at least 7.5's price".** On a goalie, the sketch would have dropped 8.5(b)'s mandatory major and game misconduct for a charge. The reviewers upheld this at shooting :538 and center :779.

**special_teams (W268), from the W262–W264 row item (5).**
- CM :1254 now reads "For a hit from behind into the boards or net…".
- The three "it does" sites now read "it ends your game" (body) and "it ejects you" (Common Mistakes).

**Readability (W266, W267).** Sentences were split at their joints. No limb was lost, and each unit got a limb inventory.

| | longest sentence | paragraphs over 1,200 characters | longest KT |
|---|---|---|---|
| center | 85 → 57 | 0 → 0 | 128 → 115 |
| winger | 84 → 60 | 2 → 0 | 114 → 113 |
| faceoffs | 94 → 58 | 1 → 0 | 99 → 97 |
| forechecking_systems | 129 → 60 | 0 → 0 | 78 → 78 |
| offensive_zone_play | 98 → 58 | 2 → 0 | 94 → 97 (now names Hockey Canada on the head) |

These figures are the authors' check_readability --file runs against HEAD. Key Takeaways that are still long carry penalty tiers, which a KT voiced alone must keep, so they were left long and listed in the plan row.

**New markers (each a new split half or unit that carries a penalty; each reviewed).**
- offensive_zone_play :642: "And in every book, leaning on the goalie as you screen is a penalty". The reviewer checked this against NHL 69.4, IIHF 69.4, PWHL 71.4, USA Hockey 607(d), Hockey Canada 8.5 and CARHA 66(b).
- winger :816 sub-bullet: "it is a match…".
- winger :862: "the match is a must…".
- The faceoffs :1155 and offensive :989 split halves.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (read-only ruling) | The ruling above. Census: 45 hits across 20 files, in four groups. |
| authoring agents ×4 | Each checked the ruling against hc.txt. Every check passed. Each rendered its files and confirmed that each repaired reason shares a chunk with its floor and match. |
| safety-reviewer, W265 | **BLOCKING:** body_contact :1440 had become a bare "it is head contact, which takes precedence", with no floor, in a goal-frame context. Fixed with the reviewer's wording: "plan on at least 7.5's minor plus a game misconduct, and a match where they could not protect themselves, whether it is called as checking from behind or as head contact". **WORDING:** :798 named 7.6's condition and 7.7(b), and playing_without_the_puck ×3 changed "says that" to "says head contact". **CORRECT:** glossary :292, rules_primer :472, and the goalie lines :1377 and :814. |
| safety-reviewer, W266 | **BLOCKING:** the winger :816 sub-bullet had lost its book when split. Voiced alone, it priced head-butting at "a double minor" and a USA Hockey minimal head touch at a minor. Fixed: "Under Hockey Canada in Junior and Senior…" and "In every Hockey Canada division". **WORDING:** the :862 citations were split by tier, and its opening became "If a hit from behind reaches…". Everything else was CORRECT, including the center KT6 rewording (harsher, not cheaper). |
| safety-reviewer, W267 | Nothing blocking. **WORDING:** forechecking :223 "head contact's lowest prices", :984 "The book says…", offensive :989 "checking from behind's minor plus game misconduct". The 7.7-reach tightening at :810 was not applied; it is in the plan row. All readability splits were CORRECT and checked against source. |
| safety-reviewer, W268 | Nothing blocking. Three optional wordings, all applied: the zone_entries ×4 dash and "but", the goaltender :1650 "its lowest rungs are cheaper", and the shooting :507 "though". |
| safety-reviewer, narrow re-check (winger) | The coordinator's fill-ins of the W266 sketches at :816 and :862 are CORRECT against hc.txt 7.1, 7.6 and 7.7. Chunks are unchanged (060, 064). Its double-parenthesis cleanup was applied verbatim. |

### C11
The authors wrote every precedence and readability change. The coordinator applied review wordings verbatim at:
- W265 :1440, :798 and playing_without_the_puck ×3;
- W267 ×3;
- W268 ×3;
- the winger :862 cleanup.

The coordinator also filled in the W266 reviewer's sketches at winger :816 and :862. Those fill-ins were re-checked by a separate safety-reviewer and found CORRECT. The coordinator wrote the plan row and this record.

### Checks after the last content edit
- check_facts exit 0 (no pipe).
- check_links --quiet exit 0.
- check_absolutes passes.
- check_marker_pairs: 17 files, 0 LOST, 0 SPLIT HALF UNMARKED.
- Full `npm run build` (absolute binary), started after the final content edit. `--bare` and `--panels` show 0 on every changed page, and dist has 0 literal `**` (scanned after the first build; re-scanned after the rebuild).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | hc.txt 7.1 and 7.4–7.7 with their Interpretations, plus 8.5 and 9.5. usah.txt 602, 607, 608, 620 and the Casebook. carha_2026.txt 48, 50, 52, 53 and 66. NHL/PWHL 69.4/71.4 and 81.6/83.6. IIHF 47 and 69.4. |
| D5–D8 | not engaged |
| D9 Summary layer | KTs on center, winger, faceoffs, forechecking and offensive; CM on special_teams, zone_entries, center, winger and playing_without_the_puck |
| D10 Key-facts layer | shooting :507, voiced alone, 298/300 |
| D11 Reader safety | safety-reviewer ×5 |
| D12 Read-aloud | HEAD-against-tree renders on every file; chunk co-location confirmed |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; dist check-links |
| D15 Rendered site | build plus panel, bare-glyph and literal-`**` scans |

## What this method could not have found
- The same false reason stated in words no sweep tried, anywhere in the corpus. Diagram captions were not swept (plan row (3)).
- Whether referees in practice add 7.5(e)'s game misconduct to a head-contact call. Hockey Canada publishes no casebook on disk.
- How far 7.7's "regarding contact to the head" reaches against 7.5 and 8.5 (plan row (2)).
- Pre-existing defects in unchanged sentences. Two found in passing are in the plan row: the goalie head match missing at center :779 and winger :863, and faceoffs' "(Rule 81.6)" for the PWHL.

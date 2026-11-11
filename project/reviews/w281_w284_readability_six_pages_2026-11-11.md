# W281–W284: readability pass on six more pages (11 November 2026)

**Files:**
- **W281:** content/systems/special_teams.md
- **W282:** content/systems/game_management.md, content/systems/defending_the_rush.md
- **W283:** content/systems/neutral_zone_systems.md, content/technique/passing_and_receiving.md
- **W284:** content/positions/goaltender.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave continues the owner's 8 November readability priority. The pages come from item (7) of the W277–W280 plan row, the next six on the census. Two plan items were folded in:
- passing_and_receiving :223, item (4) of the W269–W276 row: the mandatory injury price for a head-first drive into the boards.
- goaltender :1650, item (9) of the W269–W276 row: the goalie head match.

Four authors worked on disjoint file sets from READ_BRIEF.md. The brief included the W277–W280 lessons:
- never fold a mandatory tier into "plan on";
- never move a book's own limit out of the sentence it limits;
- never write a bold lead that a later sentence has to correct;
- list every new ⚠️.

## Measured (check_readability; before = HEAD 719a101a, after = the tree after every review fix)
| page | longest sentence | paragraphs >1,200 chars | longest paragraph | KTs >60 words | longest KT |
|---|---|---|---|---|---|
| special_teams | 83 → 58 | 2 → 2 | 1,595 → 1,423 | 2 → 2 | 74 → 70 |
| game_management | 68 → 71 | 2 → 0 | 1,359 → 1,194 | 1 → 1 | 71 → 71 |
| defending_the_rush | 74 → 60 | 1 → 0 | 1,270 → 1,162 | 1 → 1 | 73 → 73 |
| neutral_zone_systems | 80 → 56 | 0 → 0 | 1,121 → 1,121 | 1 → 1 | 66 → 64 |
| passing_and_receiving | 77 → 59 | 0 → 0 | 964 → 994 | 0 → 0 | 59 → 59 |
| goaltender | 72 → 60 | 0 → 0 | 1,200 → 1,200 | 2 → 2 | 69 → 67 |

**Units left long on purpose:**
- **game_management (71 words).** The longest sentence is the W282 reviewer's B1 fix. The head condition, the floor and the counterweight have to share one sentence.
- **special_teams, two paragraphs over 1,200 characters.** One is the Common Mistakes bullet "Reading 'back turned'…" (1,423 characters after the W281 B1 counterweight was added), a single list item. The other is the goalie paragraph (1,330 characters), which cannot be split further without moving USA Hockey's tiers out of the act's chunk; chunk 069 holds the act and every tier.
- **Remaining long KTs.** Each carries several books or tiers.

## What changed
**special_teams (W281)**
- The three Hockey Canada head sentences at :1101, :1115 and CM :1256 are now three sentences each:
  1. "Under Hockey Canada it ends your game [ejects you] while it stays off the head, and on the head plan on being ejected anyway."
  2. "On the head, Hockey Canada calls it head contact: a match if they cannot protect themselves."
  3. "Short of a match, Hockey Canada's major and game misconduct can be given … — so at every level, plan on being ejected anyway."
- The goalie paragraph is split at :1117, which opens "For a goalie hit from behind, Hockey Canada does not say…", with a new ⚠️ on "plan on the dearer".
- KT8: every USA Hockey limb is now in one sentence.
- Chunk boundaries are unchanged: 86 chunks.

**game_management (W282)**
- IIHF 19.3 and NHL 19.4 are now separate paragraphs.
- USA Hockey 608(b)'s three triggers are listed separately. The old text read "reckless" as if it meant "head first"; usah.txt 608(b) makes them separate triggers.
- The Hockey Canada head paragraph is split, and the new paragraph uses the current "can be called as head contact instead" wording.

**defending_the_rush (W282)**
- The :545 slide line now ties "below the hips" to Hockey Canada 8.7 only. IIHF clipping is "across or below the knees".
- The Hockey Canada parentheticals at :642 and CM :1085 are broken into sentences.
- :941 is split, with a new ⚠️ on USA Hockey's Casebook 608 Situation 1 tier.

**neutral_zone_systems (W283)**
- The charging bullet is split, and its "one" is now "a game misconduct" (4.8(c) applies to any game misconduct).
- The D-to-D bullet and KT4 are split.

**passing_and_receiving (W283)**
- The USA Hockey sentence is now three sentences, each naming USA Hockey.
- New rule text:
  - "Under Hockey Canada, if the player is hurt, a hit that would otherwise be a minor must be a major and a game misconduct (7.5(b))."
  - "Under Hockey Canada, head contact that would otherwise be a minor must be a major and a game misconduct if it hurts them (7.6(b), minor and female hockey); in Junior and Senior, 7.7(b) makes it a major and a game misconduct when an illegal hit makes them strike their head on the glass, ice or boards and injures it."
- The paragraph is split before the CARHA 53(b) sentence.

**goaltender (W284)**
- :1650 is split into book-named sentences and gains "plan on a match if the player cannot protect themselves (7.6(c); 7.7(c))".
- :1302, :1275/:1623, :1626, :1406 and CM :1690 are split.
- KT9 and KT12 were edited.

## New markers
Each new ⚠️ was reviewed:
- special_teams :1117
- game_management :1227, and the match sentence after it (from the review fix)
- defending_the_rush :943

check_marker_pairs reports 0 LOST on all six files. The one SPLIT HALF UNMARKED is game_management :983, the NHL 19.4 bench procedure. The reviewer ruled it correct.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×4 | Wrote limb inventories per unit, rendered before and after, and confirmed chunk placement. Listed every reworded rule sentence and every new marker. |
| safety-reviewer W281 (special_teams) | **BLOCKING B1.** This was the second limb of W264 B1, repeated: "Under Hockey Canada it ends your game while it stays off the head." ended before its counterweight, at all three sites. Fixed verbatim with "…while it stays off the head, and on the head plan on being ejected anyway" and "— so at every level". All else CORRECT: chunk boundaries unchanged, the :1117 marker justified, KT8 complete. |
| safety-reviewer W282 (game_management, defending_the_rush) | **BLOCKING.** The new game_management :1227 paragraph lost its antecedent across a chunk boundary. Heard alone, it said any late hit from behind "can be called as head contact, whose lowest rungs can keep you in the game", which is false off the head, where 7.5(a)/(e) are mandatory. It also left the match in the previous chunk. Fixed verbatim: "a late hit to the head that is also from behind can be called as head contact instead (7.6; 7.7 in Junior and Senior)…" plus "⚠️ **Into the boards or goal frame on a player who cannot protect or defend themselves it is a match either way** (7.5(c), 7.6(c), 7.7(c))". The coordinator re-rendered: "to the head" and "match either way" share chunk 076 with the act. Ruled defending_the_rush's eight flat "on the head it is head contact" sentences acceptable. All else CORRECT, including the 8.7 "below the hips" scoping. |
| safety-reviewer W283 (neutral_zone_systems, passing_and_receiving) | Nothing blocking. **WORDING, applied verbatim:** the new 7.6(b) sentence had overstated the rule as mandatory for any injury; 7.6(b) covers only an injury from contact "that would otherwise call for a Minor penalty". The 7.5(b) sentence now names Hockey Canada, and "a forceful check from behind". The 608(b) / Casebook 608 Situation 1 "or a match" was ruled accurate. |
| safety-reviewer W284 (goaltender) | **BLOCKING B1.** KT12 had become "In a battle, move a net-front body to the corner side", which licenses walking a screener out one sentence after calling that interference. Fixed verbatim: "If a battle moves a net-front body, keep it to the corner side…". **WORDING, applied verbatim:** "if the player cannot protect themselves"; the :1275/:1623 counterweight is rejoined into the head-contact sentence with a semicolon. |

### After the first commit gate
The first gate BLOCKED for two reasons: C4, because no rules-verifier had run on the new rule claims (now done, see D1–D3), and two wrong paragraph figures for special_teams in this record and the plan (corrected). It also flagged an inconsistency: the W281 reviewer blocked a Hockey Canada carve-out sentence ending on "while it stays off the head" before its counterweight, but two other reviewers accepted the same shape. A separate safety-reviewer then ruled all of them BLOCKING by the same standard: defending_the_rush :642, CM :1085 and :941, and goaltender :1275, :1623 and :1698. The last two were found by that reviewer. Its wordings were applied verbatim: "(under Hockey Canada, while it stays off the head, and on the head plan on the game misconduct anyway)" ×3; "…off your head, and on your head plan on the dearer of 7.5 and 8.5 anyway)" ×2; and "— under Hockey Canada, head or not, plan on the dearer of 7.5 and 8.5". The same shape remains at shooting :534 and forechecking_systems :223, both committed earlier and outside this wave. They are logged in the plan row.

### C11
The authors wrote every split and the new rule text. The coordinator applied every reviewer wording verbatim, wrote the plan row and this record, and re-rendered game_management to confirm chunk co-location after the W282 fix.

### Checks after the last content edit
- check_facts exit 0 (no pipe)
- check_links --quiet exit 0
- check_absolutes passes
- check_marker_pairs 0 LOST on all six files
- Full `npm run build` (absolute binary), started after the final content edit. `--bare` and `--panels` show 0 on every changed page, and dist has 0 literal `**`.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | every reworded or new rule sentence checked against hc.txt (4.8, 4.10, 7.4–7.7, 8.5–8.7, 9.2), usah.txt (602, 608, 620), usah_casebook (608 Situation 1), carha_2026.txt (30, 32, 34, 52–55), iihf (19.3, 43, 44, 57) and nhl (19.4), as quoted in each review, plus a **rules-verifier** pass (after the first commit gate blocked under C4) on the six new or changed rules claims: passing :223 (7.5(b), 7.6(b), 7.7(b) para 3), game_management :1227 (the 7.5(c)/7.6(c)/7.7(c) match), goaltender :1650 (7.6(c)/7.7(c)), game_management :1223 (608(b) plus Casebook 608 Situation 1 as three triggers), neutral_zone_systems :399 (4.8(c) reaches any game misconduct) and defending_the_rush :545 (Hockey Canada 8.7(b) below the hips; 8.6 has no discretionary major; IIHF 57.4 and 44.3). All were confirmed. Partial on two points: "can be called as head contact" understates 7.6's "must" in minor and female hockey (conservative; plan item), and game_management :1227's "the harsher of the two if you drive them head first" has no separate Hockey Canada tier behind it (errs harsher; plan item). |
| D4 Citations | out of scope: no URL or source citation changed |
| D5–D8 | not engaged |
| D9 Summary layer | KTs on special_teams (8), goaltender (9, 12) and neutral_zone_systems (4); Common Mistakes on special_teams, goaltender and defending_the_rush |
| D10 Key-facts layer | not engaged; no facts line changed |
| D11 Reader safety | safety-reviewer ×4 |
| D12 Read-aloud | HEAD-against-tree renders on all six files; chunk co-location confirmed, plus a coordinator re-render after the W282 fix |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; dist check-links |
| D15 Rendered site | build, plus panel, bare-glyph and literal-`**` scans |

## What this method could not have found
- A qualifier lost across a chunk boundary that leaves no word like "also" or "the" behind. The W282 block was found only because "the late hit" became "a late hit … also".
- A description reordered into an instruction in a unit no reviewer read closely. The W284 KT12 block was found by reading the KT against the sentence before it.
- Sibling documents with the same KT12 or :1227 shapes.
- How the new chunk boundaries sound. Nobody listened.

# W435: USA Hockey fight and peacemaker prices carry 404(b) and 615(f) on team_play, body_contact and rules_primer; a CARHA peacemaker's next game is "can", not "does" (18 November 2026)

**Content files changed:** off-the-ice/team_play_and_culture.md, technique/body_contact_and_battles.md, foundation/rules_primer.md.
**Also changed:** project/plans/OPEN_ITEMS.md, this record.

## Source
- **Plan rows:** From W434 (1) and (2).
- **Census:** a safety-reviewer swept the act corpus-wide and found 5 DEFECT and 4 JUDGEMENT (scratchpad/w435/census.md).
- **Authors:** A team_play, B bcb, C rules_primer.
- **Settled wording (from W434):** "Under USA Hockey that game misconduct also costs at least your next game (404(b)), and a second fighting major with the same team in a season costs three games (615(f))."

## What changed (voiced)
| Unit | Now |
|---|---|
| team_play :278 | "**Going in to break one up can too, and does under Hockey Canada and, for the first one in, under USA Hockey; …**" HEAD said "does under Hockey Canada and CARHA". CARHA 59(b) gives a peacemaker a game misconduct with no major, so 32(d) does not reach it, and 59(d)'s "fighting penalties" is undefined (the rules-verifier ruled this WRONG, in the harsh direction). |
| team_play :285 (handshake fight) | Adds: "Under USA Hockey that game misconduct also costs at least your next game (404(b)), and a second fighting major with the same team in a season costs three games (615(f)); under Hockey Canada, one given after the game costs at least the next game or seven days (4.8(c))." |
| team_play :286 (handshake peacemaker) | Adds: "After the game, USA Hockey's game misconduct for the first one in also costs at least your next game (404(b)), and Hockey Canada's for a peacemaker at least the next game or seven days (4.8(c))." CARHA is left out on purpose. |
| bcb CM :2097 | "Under USA Hockey every one of those game misconducts, the peacemaker's included, also costs at least your next game (404(b)), and a second fighting major with the same team in a season costs three games (615(f))." |
| bcb facts :1901 (257) | "…a major, a game misconduct and at least your next game (615(a), 404(b)); a second fighting major with the same team in a season is three games, a third a suspension until a hearing (615(f))". |
| bcb facts :823 (295), body :840, :1923 | :823 now reads "…a fourth such major adds five games, a fifth a suspension until a hearing. Fighting is separate: 615(f), three games for a second fighting major with the same team in a season". An interim "second fight", without "in a season", was ruled WRONG by the rules reviewer (harsh direction). :840 and :1923 state the 615(f) ladder. |
| rules_primer :548 | Adds USA Hockey 404(b) and 615(f), plus "Hockey Canada adds an automatic suspension of at least the next game, or seven days, when the fight comes in the last 10 minutes, in overtime or after the game (4.8(c))". |
| rules_primer §10 table, USA Hockey Fighting cell (site only) | "Major + game misconduct and at least the next game (404(b)); a second fighting major with the same team in a season = 3-game suspension (615(f))". |

**Accepted after review:**
- **team_play :288 and :289** (post-game, no 404(b) of their own). They now sit in chunk 016. The general 404(b) sentence at :292 opens chunk 017, immediately after. Safety agreed.
- **Safety M3 declined.** It proposed trimming the :285 restatement. :285 is two chunks from :292, so the restatement reaches a listener who would otherwise not hear it.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** no site contradicts a rulebook. WRONG at bcb :823 ("second fight", no "in a season"). Incomplete at bcb :2097 (peacemaker). Flagged bcb :1923 "one thrown punch is an ejection" as overstating 615(a) retaliation (harsh, pre-existing). **Confirmation:** four OK, plus team_play :278 CARHA "does" WRONG; fixed with the reviewer's own text. |
| safety-reviewer | **First read:** no Critical or Major. M1 bcb :2097 antecedent. :823 harsher. M2 team_play :286 antecedent and "at least". M3 repetition (declined for :285). M4 bcb :1901 tighter. Agreed on :288. **Confirmation:** CLEAR. |
| site-reviewer | Three pages at 400×812 DPR 2 light/dark and 1440 light, on the 04:35:59 build. Every worst window unchanged. Nothing over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. The rules_primer Fighting row (807px table) scrolls inside its wrapper. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied by its author, or an author deviation a reviewer confirmed:
- bcb :823 keeps "aggressive infraction" and "such major" for 411(a)'s category;
- team_play :286 uses two book-scoped clauses;
- the :278 CARHA change is the rules reviewer's own text.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 18 Nov 04:35:59; the last content edit was at 04:35:15.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** --bare reports 0, and --panels reports 0 on all three files.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all three files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 403(b), 404(b), 411(a) and Note, 615(a)/(b)/(d)/(f), Casebook 404 and 615. HC 4.8(c), 4.9(b), 7.10(b)/(e)(ii)/(f). CARHA 2026 32(b)–(d), 59(a)/(b)/(d), 87. |
| D2 Exceptions | 615(a) retaliator minor; "with the same team … in a season"; HC 4.8(c) window only |
| D3 Cross-book divergence | USAH and HC next game settled; CARHA peacemaker unsettled, so "can" |
| D4 Citation integrity | 411(a) "additional five-game"; 615(f) wording copied, not paraphrased |
| D5 Provenance | Not engaged |
| D6 Negative existence | CARHA "fighting penalties" undefined |
| D7 Cardinal rule | Not engaged |
| D8 Numeric ownership | "at least"; "three games"; "five games" |
| D9 Summary layer | team_play :656/:722 already "can"; bcb CM and facts aligned with body :840/:1923 |
| D10 Key-facts | bcb :823/:1901 read alone |
| D11 Reader safety | safety-reviewer: census plus two reads |
| D12 Read-aloud | Chunk distances measured for :285/:286/:288/:292 |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **bcb :1923** "one thrown punch is ⚠️ an ejection" overstates 615(a) retaliation, which can be a minor or double minor at the referee's discretion. Harsh direction.
2. **bcb fighting facts block (:1899–:1910)** has no HC 4.8(c) line; the general line :826 covers it.
3. **615(f) "with the same team"** is ambiguous in the book (own team or opponent). Every site copies the book's wording.
4. **Whether 615(f)'s three games include or add to 404(b)'s next game.** Not settled by the text.
5. **mental_game :579** (census lead, unverified): a USA Hockey bare game misconduct for contact with an official in a scrap, next to NHL/PWHL "plus an automatic suspension".

## What this method could not have found
- League practice.
- A CARHA casebook.
- Real audio.

# W325: USA Hockey's head-contact limb in the remaining body units, a full pinch facts line, a chunk that ended on the floor, and a false "USA Hockey alone" (14 November 2026)

**Files:**
- content/systems/game_management.md
- content/systems/special_teams.md
- content/positions/winger.md
- content/systems/offensive_zone_play.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **USA Hockey row, items 2–4** (written after W322–W323).
- **Slew-foot row, item 1** (written after W324).
- **Ruling and wording.** The W322 ruling and shipped wording carry over: project/reviews/w322_usa_hockey_hit_from_behind_tiers_2026-11-14.md.

## What changed
### 620(b) head limb in body units
- **game_management :185**, Common Mistakes bullet: "…, as must careless contact with their head or neck."
- **special_teams :1113**: adds "Under USA Hockey, careless contact with their head or neck is a mandatory major plus a game misconduct too (620(b))." It comes after the reckless-means-match warning, so "if it is reckless" still refers to the hit.
- **winger :529**, net-front back hit: "a reckless hit, sending them in head first, or careless contact with their head or neck is at least a mandatory major and game misconduct (608(b); 620(b))".
- **winger :714**, backcheck at the end boards. The author also added the unit's missing tier from Casebook 608 Situation 1, a forceful hit on a player along the boards, plus "at least". Without "at least", the bare tier sounded like the ceiling for a reckless hit, which 602(a) and 608(c) make a match. Both reviewers confirmed this.

### offensive_zone_play :949, the pinch facts line
The line was at 297/300 with its block at HARD_MAX, and it had no 620(b) limb. The book list was restructured to make room, and the line now carries the limb (see After review for the final wording).

### offensive_zone_play :1174 / :1176, chunk order
Spoken chunk 076 ended on "the least it costs is a minor plus a misconduct", with the tiers in 077. The USA Hockey floor now opens :1176 together with its tiers: "Under USA Hockey even a light hit from behind costs at least a minor plus a misconduct (608(a)), and …". Chunk 076 now ends on "CARHA may also give a match anywhere on the ice (53(a))".

### offensive_zone_play :1318, Sources trailer (not voiced)
- **Old claim:** "USA Hockey alone names a non-kicking skate contact as a foul of its own".
- **Why it was false:** HC 8.8 (*"to knock, drag, or sweep"*) and CARHA 86(b) (*"with a kicking or leg dragging motion from behind"*) also make non-kicking leg contact a foul.
- **Now:** USA Hockey 627 is the only book making *any* non-kicking skate contact a foul. HC 8.8 (with its glossary's "knock or kick") and CARHA 86(b) reach that contact only where it takes the feet.

## After review (coordinator applied reviewer wording verbatim)
- **offensive_zone_play :949.** Both reviewers found that the author's "CARHA 53, Hockey Canada: match if defenceless into boards" could be heard as the match belonging to Hockey Canada alone. That drops CARHA 53(b)'s mandatory match, the cheaper direction.
  - The safety-reviewer's fix ("Hockey Canada, CARHA 53: match if…") was not applied. The rules-verifier warned its colon reads as a condition, as if Hockey Canada ejects only when it is a match.
  - The rules-verifier's version was applied instead, 300/300: `Rule: A hit from behind at the glass ejects (NHL, PWHL 43; CARHA 53, Hockey Canada, both a match if defenceless into boards; IIHF or head hits: plan on it). USA Hockey floor: minor, misconduct; forceful, head first (608) or careless head hit (620(b)) ejects; reckless, match, likely multi-game ban (602(a))`.
  - The safety-reviewer re-checked this wording: OK.
- **Not applied (plan row): offensive_zone_play :1318.** The trailer names only HC 8.8 and CARHA 86(b). NHL and IIHF 52.1 and PWHL 53.1 ("knock or kick") reach the same contact, so the omission invites a permissive inference. The trailer is not voiced and no exact wording was supplied.

## Reviews
| Reviewer | Result |
|---|---|
| author | All four items verified in the sources; harness on the 6 changed ⚠️ units (13 glyphs, 13 warn-inline, 0 asides); renders show each new clause whole in its chunk |
| rules-verifier | Nothing blocking. Read USA Hockey 602, 608, 620, 627 and 639; Casebook 608 Situation 1; HC 7.5–7.6, 8.8 and the glossary; CARHA 53 and 86; NHL and PWHL 43, 52/53; IIHF 43 and 52 in both editions. A push-off sweep of every book backs the :1318 exclusivity. WORDING at :949 (applied) and :1318 (plan row). |
| safety-reviewer | Nothing blocking. :1174/:1176 compared with HEAD paragraph by paragraph: no limb lost, and chunk 076 no longer ends on the floor. 0 LOST; harness 1:1, 0 asides; 0 panels. WORDING at :949, superseded by the rules-verifier's version and then re-checked OK. |

### C11
The W325 author wrote the wave. The coordinator applied one reviewer wording verbatim, chose between the two reviewers' fixes for :949, recorded why, and had the choice re-checked. The coordinator also wrote the plan rows and this record.

### Checks after the last content edit
These were run after a full `npm run build` (absolute binary) that started after the final content edit to these files:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all four files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | a Sources trailer claim rewritten, quotations verified verbatim |
| D5–D8 | not engaged |
| D9 Summary layer | Common Mistakes in game_management |
| D10 Key-facts layer | offensive_zone_play :949, voiced alone, checked by both reviewers and re-checked |
| D11 Reader safety | safety-reviewer plus a narrow re-check |
| D12 Read-aloud | author and safety-reviewer renders |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only) |

## What this method could not have found
- **Other documents.** A census of the other 36 documents found more floor-only and no-620(b) units, now in the plan; W326 is working six of those files.
- **Push-off sweep.** It searched wordings, not the act. A book reaching non-kicking skate contact under a general roughing rule would have been missed.
- **"Careless head hit" at :949.** It is narrower than 620(b)'s "head, face or neck". It is not cheaper for a hit at the glass.
- **Concurrent assessment** of 608 and 620 is unsettled on disk.

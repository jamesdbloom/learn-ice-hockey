# W431: rules_primer gains the IIHF goalie-charge price and loses its last long paragraphs; special_teams prices a PWHL and CARHA fight, with CARHA's automatic suspension; mental_game states the NHL/PWHL obscene-gesture conflict; bcb quotes both halves of the In-House edition contradiction; the dead IIHF v1.1 URL is recorded (17 November 2026)

**Content files changed:** foundation/rules_primer.md, systems/special_teams.md, technique/body_contact_and_battles.md, off-the-ice/mental_game.md.
**Also changed:** project/verification/link_baseline.tsv, sources/README.md, project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W429 (5), (6), (7), (8) and (10); From W430 (1)–(5); From W425 (5).
- **Brief:** scratchpad/w431/brief.md.
- **Agents:**
  - Four authors: A rules_primer, B special_teams, C bcb, and D team_play + mental_game.
  - One read-only census (E).
  - One read-only USA Hockey research pass (F, rules-verifier).

## What changed (voiced)
| Unit | Now |
|---|---|
| rules_primer CM "Running the goalie only ever costs two minutes." | Adds: "Under the IIHF book the referee may make a reckless charge a major and game misconduct (42.4)." The IIHF has no match penalty in either edition (0 hits), so the match line correctly omits it. |
| rules_primer :552 | The ⚠️ moved from "The 2026/27 IIHF book renumbers Rule 46" (no action) to "⚠️ **Assume you are gone.**" Clauses were reordered; no word changed. |
| rules_primer holding (~:528) split | Half two: "**Under the IIHF,** ⚠️ **a hold that drives a defenceless player into the boards, forces their head into the glass, takes their feet or turns into a fight is called as that foul** (41.4, 48.3, 52.2, 46.1), and each reaches a major and game misconduct. The hold itself stays a minor there, with no match penalty (54.2)…"<br>The first version opened with ⚠️ and rendered as an amber **panel**, which the site reviewer caught. The glyph was moved after "Under the IIHF,", with no word change. Built HTML now shows `warn-inline`, and --panels reports 0. |
| rules_primer goalie (~:849) split | Split at "**CARHA**:", with "⚠️ **So under CARHA, charging a goalie in their crease…(66(b)).**" |
| rules_primer ~:1065 | "…a game misconduct with a suspension under the NHL and the PWHL; under the IIHF it is a game misconduct, reported for suspension". IIHF 40.3 and the 2026 Disciplinary Regulations set no minimum. |
| special_teams :463 | "Its real price **can be** a body off your bench for the night: … Under the PWHL and CARHA, starting one ends your game and any fight can, and under CARHA any fighting penalty also suspends you until the CARHA chairman deals with it (59(d))." Sources: PWHL 46.1/46.11; CARHA 2026 59(a) and 59(d). The brief's CARHA 30(a) premise was refuted, because a CARHA fight is priced as a match. |
| bcb facts :1904 (300/300), :1929, :215 | The brief's premise ("In-House = v1.1, settled") was **refuted**. The In-House Rules contradict themselves: the cover says *"the Current IIHF Rule Book"*, while the Introduction gives *"Version 1.1, published July 2025"* (published 25 July 2026, after 2026/27 appeared). :1929 now quotes both. :1904 now reads "the In-House Rules' IIHF edition is unclear". :215 now reads "the one the In-House Rules' Introduction names". |
| mental_game KT11 (60) | "…Obscene gestures, slurs, spitting or threats at an official, or touching one, can end your game; spitting always will, touching in most books. So can a spit or slur at anyone; in most books it will." It previously read "in every book, most will", which was false for the NHL and PWHL. |
| mental_game :575, :580 | Both now state the NHL/PWHL conflict and end "plan on the game misconduct". The conflict: 75.1/77.1 NOTE routes conduct aimed at an official to 39.2(ii), a minor, while 75.5(ii)/77.5(ii) give a game misconduct anywhere in the rink. :575 previously read "is a game misconduct outright". :580 was **permissive**: it gave only the 75.2(i) minor. |

**Coordinator (not content):**
- The IIHF v1.1 URL was refetched with a browser user-agent and an iihf.com referer, and returned 404 ResourceNotFound.
- link_baseline.tsv: that row is now 404 with a dated note.
- sources/README.md: a dated 404 note was added above the 28 Aug fetch record. Its first wording said the text "remains the edition the In-House Rules adopt". Agent C's finding showed that wording took a side in the In-House contradiction, so it was reworded to "the edition the In-House Rules' Introduction names".

## Read-only results
- **Census E:** no DEFECT. JUDGEMENT rows:
  - rules_primer :1065: the IIHF wording, now fixed.
  - faceoffs :817/:1287: the HC 6.2(e) minor. The rules reviewer ruled this OK, since it is a faceoff run-in, not deliberate force.
  - bcb facts :1964: "the team kills it shorthanded", unconditional. Errs harsh.
  - rules_primer's "Talking to officials" section has no spit price.
- **USAH research F:**
  - **Q1:** Casebook 601 Situations 21 and 22 make a grab of an official at least a game misconduct. Situation 12 says a bare touch can stay a misconduct.
  - **Q2:** Casebook 608 Situation 1 gives a reckless check from behind a major plus game misconduct, or a match. The match is mandatory only under 608(c).
  - **WRONG (permissive):** team_play :404 prices a grab only at a misconduct.
  - **WRONG (harsh):** game_management :1227, shooting facts :509 and dtr facts :544 say "a match is mandatory" for any reckless hit from behind. All four go to the plan.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** all changed sites OK. The IIHF has no match penalty. Ruled the NHL/PWHL gesture-at-an-official question unsettled and gave text for mental_game :575. Optional: :1065 "reported for suspension". faceoffs 6.2(e) OK.<br>**Confirmation:** all five sites OK. The IIHF Disciplinary Regulations 2026 set no Category II minimum. |
| safety-reviewer | **First read:** no Critical. M1, pre-existing: special_teams :463 omitted the CARHA 59(d) suspension. m1: in the holding split, "Important." landed on the IIHF cap. m2: KT11 threats (optional; not applied, as the KT is at 60 words). m3: bcb :1904 "IIHF edition". Answered: there is no IIHF match for an attempt to injure a goalie.<br>**Confirmation:** CLEAR. |
| site-reviewer | Four pages at 400×812 DPR 2 light/dark and 1440 light, on the 23:39:20 build.<br>Worst windows: rules_primer 43.9, mental_game 13.4, special_teams 48.4, bcb 48.6 → 48.5. Nothing over 50%. 0 bare, 0 untreated, 0 console errors.<br>**MAJOR:** the holding paragraph rendered as an amber panel. It was fixed by moving the glyph, rebuilt at 23:43:38, and the coordinator verified the fix in built HTML (`<strong>Under the IIHF,</strong> <span class="warn-inline">⚠️ <strong>a hold…`). --panels reports 0 on all four files.<br>Minor: the CARHA goalie run (246 chars) and :1065 (225 chars) are long amber runs. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text applied by its author, or an author deviation a reviewer confirmed:
- "with no match penalty" scoped to the hold;
- "CARHA chairman";
- "plan on" in place of "play to";
- :580, which the coordinator approved after the author found it.

The final glyph move at :530 is position-only. Its verification was the rebuilt HTML and --panels, not a further site-reviewer pass.

### Process lesson
The coordinator's gate list ran `--bare` but not `--panels`. A paragraph opening with ⚠️ inside a list item became a panel and passed every mechanical gate until the site reviewer looked. **Run `check_callout_flow.py --panels --file` on every changed file in every wave.**

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 23:43:38; the last content edit was 23:42:45.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets all pass. check_counts --update made no change.
- **Callout flow:** --bare reports 0. --panels reports 0 on all four files.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all four files. rules_primer went 195 → 197.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF v1.1 and 2026/27: 21.1, 28, 39.5, 40.1–40.5, 41.4, 42.4/42.5, 48.3, 52.2, 54.2, 57.4, 69.2, 75.2/75.5, Situation 40.2. IIHF Disciplinary Regulations 2026. NHL/PWHL: 39.1–39.5, 40.1–40.4, 46.1/46.2/46.11/46.14, 75.1/77.1, 75.2/75.5/77.5. USAH: 601, 602(a), 608, Casebook 601 Sits 12/21/22 and 608 Sit 1. HC: 6.2(e), 11.2–11.5. CARHA 2026: 30(a), 46, 52(b), 59, 66, 71, 81. In-House cover and Introduction. EIHL Casebook 42, 46. |
| D2 Exceptions | IIHF 40.1 conditions; USAH touch vs grab; CARHA 59(a) "may" for the other fighter |
| D3 Cross-book divergence | NHL/PWHL gesture conflict; IIHF has no match penalty |
| D4 Citation integrity | 75.2(i) quotation verbatim; In-House cover and Introduction quotations |
| D5 Provenance | IIHF v1.1 URL 404 recorded in baseline and README |
| D6 Negative existence | "IIHF has no match penalty" (flattened sweep); no Category II minimum |
| D7 Cardinal rule | "plan on the game misconduct" for an unsettled pair |
| D8 Numeric ownership | per-book counts kept in this record |
| D9 Summary layer | mental_game KT11 with :575/:580; layer tests per file |
| D10 Key-facts | bcb :1904 read alone (300/300) |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | holding "Important." moved onto the hazard; :552 marker moved |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer, plus coordinator HTML check of the final glyph move |

## Found, not fixed (plan rows)
1. **team_play :404 (PERMISSIVE):** USA Hockey prices "touching or holding" an official only at a misconduct. Casebook 601 Situations 21/22 make a grab at least a game misconduct.
2. **"a match is mandatory" for any reckless hit from behind (harsh):** game_management :1227, shooting facts :509 (298) and dtr facts :544 (300). Casebook 608 Situation 1 makes the match mandatory only under 608(c).
3. **IIHF "a suspension" for a puck shot towards an official:** rules_primer :588. Same shape as :1065; no minimum is set.
4. **IIHF v1.1 URL:** 49 citations in 35 content files point at a dead URL. Decide: keep and label, re-point, or drop to the on-disk text only. Do not delete the Sources entries.
5. **Long amber runs:**
   - rules_primer CARHA goalie (246 chars) and :1065 (225 chars).
   - special_teams "A fight" section has no North American price.
   - bcb facts :1964 "kills it shorthanded" unconditional.
6. **Optional:**
   - mental_game KT11 threats ("a threat in three": USAH, HC, CARHA);
   - mental_game Sources: add Casebook 601 Situations 21/22;
   - rules_primer "Talking to officials" spit price;
   - rules_primer CM goalie bullet has no NHL/PWHL tier;
   - EIHL Casebook 42 face/head GM for a charging major.

## What this method could not have found
- NHL/PWHL officiating practice on 39.2(ii) vs 75.5(ii).
- A newer IIHF Disciplinary Code.
- IHUK bulletins settling the edition.
- Real audio.

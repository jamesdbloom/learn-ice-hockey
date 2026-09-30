# Round 30 September 2026, wave 22: how the corpus describes IIHF Rule 101.1 (women's hockey), plus the wave-21 follow-ups

**Scope.** A claim census of every description of IIHF Rule 101.1 across the 22 documents that cite it, under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". The census was prompted by coordinator error #12 in wave 21 (a brief called IIHF women's play "barred"). The claim was tested in both directions:
- **harsher-false:** telling a woman she may not hold her ground or lean in a puck race, both of which 101.1 allows (`sources/README.md` §101.1 says such a document "would be WRONG");
- **permissive:** omitting the step-or-glide illegal hit, the boards/pin limb, the stationary-player duty or the carrier's avoid-contact duty where a unit teaches that act to a women's reader.

Each agent also carried named per-file rows from waves 20–21. Brief: Appendix A.

**The rule** (`iihf_rules_2026-27.txt` ~:7591-7616; identical in every edition on disk): bodychecking "is allowed when there is a clear intention of playing the puck or attempting to 'gain possession' of the puck"; two players in pursuit may "push and lean into each other" while the puck is the sole object; players may "hold their ground" once established; "Any move by a Player to step or glide into an opposing Player will be assessed at least a minor penalty (2') for an 'illegal hit'"; no using the boards to eliminate, push or pin; a stationary player's opponent must skate around her; a carrier skating at a stationary opponent must avoid contact. Tariff: a minor, or a major and an automatic game misconduct. PWHL 52.1 is a near-copy.

**Files changed (19):** `core_principles`, `rink_map`, `rules_primer`, `uk_rules`, `playing_without_the_puck`, `time_and_space`, `conditioning_and_recovery`, `team_play_and_culture`, `center`, `defender`, `switching_positions`, `winger`, `defending_the_rush`, `defensive_zone_coverage`, `faceoffs`, `game_management`, `offensive_zone_play`, `special_teams`, `body_contact_and_battles`.

**Checked, no edit:** `on_ice_communication`, `puck_handling`, `forechecking_systems`, `goaltender`.

## Method

1. **Eight census agents in parallel**, each briefed with the rule, the two defect directions and its file's rows.
2. **A reader on every changed file** (`safety-reviewer` or `rules-verifier`), dispatched as each file freed.
3. **Fix → line-read cycles** until every repaired unit was read CLEAR by an agent that did not write it.
4. **Build, then a headless-Chrome `site-reviewer`.**

## What the census found

Most of the corpus described 101.1 correctly: `body_contact_and_battles` (41 citations), `forechecking_systems`, `puck_handling`, `on_ice_communication`, `conditioning_and_recovery`, `team_play_and_culture` and `goaltender` had no 101.1 defect. The defects clustered where a unit taught an act (a pinch, angling, a rim chase, a receiver) without saying which limb of 101.1 reaches it.

- **Both directions at once — `offensive_zone_play` (5 sites incl. facts, CM, KT10):** "the seal is position only … never lean on her" (harsher-false) and no step-or-glide limb (permissive). Now: "lean into her in a race for the puck as long as the puck is all you are after, but never step or glide into her, and never use the boards…". A reader confirmed this is narrower than 101.1's pursuit permission, so it does not license leaning on a carrier.
- **Permissive omissions (step-or-glide or boards limb missing):** `defender` angling (body + new facts line), `faceoffs` rim chase (new ⚠️), `game_management` (facts, body, CM), `special_teams` PK receiver (facts, body, KT4 — IIHF and PWHL), `rules_primer` comparison table, `neutral_zone_systems` (wave 21 carry-over).
- **WNIHL (British women's league, non-checking — `ihuk_wnihl_roc.txt` :145-153):** `center` body :692 and CM :724 called British women's hockey "the published exception … a restricted permission", offering a WNIHL player a puck-directed check; now "In the WNIHL, plan no hit at all". `center` facts :681 gained the WNIHL band. `switching_positions` facts :212 scoped "plan no hit" to British women's hockey.
- **The British owner:** `uk_rules` Overview :31 never said what 101.1 allows or forbids; it now does, without claiming anything about what the WNIHL's undefined "non-checking" permits.
- **Scope precision:** `time_and_space` "reaches every British woman" → "women's hockey in Britain" (101.1's scope is the game type, not the player's sex).
- **Harsher-false:** `time_and_space` Overview "any contact you steer or lean into is a penalty" → "veering, stepping or gliding into them is a penalty and a deliberate push can be one too".
- **A chip past a pinching defender:** `defender` :568 offered the NHL/IIHF "immediately following" check window to women's readers; now "in women's hockey, nothing at all, because IIHF 101.1 and PWHL 52.1 allow a check only with 'a clear intention of playing the puck'".

## Per-file rows closed

- **`faceoffs` facts :1030** ("the first faceoff violation after an icing ejects nobody's centre") and its siblings :477/:488 scoped to NHL/PWHL/IIHF 2026-27 (76.4, 78.4); CARHA 57 named beside USAH 613 as lacking the exception; PWHL added to the post-icing no-change and time-out bars (KF, CM, KT8, facts); `game_management` KT8/KT11 ("the NHL's and the IIHF's alone" — contradicted its own facts) now name the PWHL.
- **`defensive_zone_coverage`** "all five books" → "all six books here" (all six verified).
- **`rules_primer`** item 10 gained USA Hockey Casebook 624 Situation 9 (a puck leaving the stick on the red line is not a potential icing).
- **`body_contact_and_battles`** CM :1777/:1779 gained CARHA 49(a)'s avert-contact duty; :1779 "Check the carrier" → "Where checking is allowed, check the carrier".
- **Lengthen-the-path / inside-lane** (Hockey Canada 8.3(i) and CARHA 66(a)(1) write no such right; CARHA 49(a) adds a duty to avert): `winger` (facts, body, CM, KF "body goal side of him", KT10, facts :656), `playing_without_the_puck` (body, facts, trailer). `playing_without_the_puck` :481 had implied USA Hockey writes no general block permission — its Preface does (`usah.txt` ~:377-387); corrected.
- **`playing_without_the_puck` KT11:** the Elite League ejection limb (EIHL Casebook Rule 42, "a game misconduct shall be imposed") had been lost and was restored; trailer pointer fixed.
- **`defending_the_rush`:** "step up on the opposition forwards" (no puck) → close the ice, not the man; **KT5 "take the far attacker's stick"** → "lift or press the far attacker's stick low on the shaft as the pass arrives near the net, then let go — never hold, hook or chop it, puck or no puck" in facts, body and KT, with the line each book draws at the hands (IIHF 55.1 hands limb — the NHL's 55.1 lacks it; Hockey Canada 8.2 Interpretation 1; USA Hockey Casebook Standard of Play Situation 3).
- **`center` facts :687** gained CARHA 53(a)'s mandatory injury tier; **`core_principles` KT :225** CARHA 49(a) contrast narrowed ("do not ask of a player standing their ground") — the old wording was false for IIHF 101.1's carrier duty; **`rink_map`** "the one duty" → "every duty" (101.1 writes two).

## Blocks this wave (each repaired and re-read)

`special_teams` facts :634 (the receiver limb reached body and KT but not the voiced-alone facts line); `body_contact_and_battles` :1779 ("Check the carrier" unscoped, pre-existing); `defender` :568 (check window offered to women's readers); `defending_the_rush` KT5/:495 ("because they do not have the puck" implied a carrier's stick could be held — none of those acts depends on possession); `winger` KF/KT10/facts :656 (the new Hockey Canada/CARHA limit had not reached the voiced-alone layers).

## Coordinator errors this wave

- **The wave's founding brief was coordinator error #12's correction** (IIHF women's play is not "barred").
- The time_and_space fix brief suggested "a hit is a penalty any time" wording for women's play; a reader ruled it harsher-only (the books' own term is "illegal hit"). Kept, with a row to say "step or glide".
- Two briefs gave a `hc.txt` line pointer for 8.3 that landed elsewhere; harmless.

## Markers

`check_marker_pairs` reports **0 LOST** on all 19 files. HEAD→tree unchanged except **`defending_the_rush` 43→44** (the new ⚠️ "Play it low and let go — never hold, hook or chop their stick, whether or not they have the puck", on the instruction).

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_counts` all exit 0.
- **URLs:** none added; per-file `https?://` counts unchanged on all 19 files.
- **Diff against HEAD:** 79 insertions and 70 deletions across 19 content files.
- **Build:** absolute npm, exit 0, full chain to `check:links`, 18:34:19–18:35:48. Last content edit 18:29:40 (`winger`). `--panels` 0, `--bare` 0.

## Rendered site (`site-reviewer`)

**CLEAR.** 19 pages × 400/1440 × light/dark (76 loads), headless Chrome 154 over CDP, serving the 18:35 build (covers the last content edit).
- Every ⚠️ glyph inside `span.warn-inline`: 0 panels, 0 bare, 0 untreated in a `<strong>`. The three new markers (`defending_the_rush` "Play it low and let go…", `faceoffs` "In women's hockey, chasing that rim…", `center` CM "…in the WNIHL … plan no hit at all") render as inline amber covering the instruction; contrast 5.71 (light) and 8.29 (dark).
- Facts values clean on every page that has them; Key Takeaways numbered continuously; no horizontal scroll at 400 px; console clean; no HTTP errors; no off-origin requests.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×2, `safety-reviewer` ×10 | IIHF 101.1 (all editions), 54.2, 55.1, 56.1/56.2, 61.1, 76.4, 81/83; PWHL 52.1, 55.2, 56.1, 57.1/57.2, 63.1, 78.4, 83.2/83.4/84.1/89.1; USA Hockey Preface, 604, 608(c), 613, 622, 623 + Casebook, 624 + Casebook Sit. 9, 625, 634; Hockey Canada 6.5, 6.7, 7.3, 7.5, 8.1, 8.2 + Interp. 1, 8.3, 9.3; CARHA 30(a), 49, 53, 57, 63(a), 65, 66(a) + Notes; EIHL Casebook Rule 42; In-House 100.1/101; WNIHL RoC. |
| D2 | Exceptions | Yes | same | 101.1's pursuit permission vs pinch/carrier; WNIHL band; possession windows. |
| D3 | Rule-set divergence | Yes | same | One false USA Hockey divergence removed (`playing_without_the_puck`). |
| D4 | Citation integrity | Yes | readers | Quote-drift brackets repaired where touched; NHL 55.1 hands limb correctly not claimed. |
| D5 | Provenance | Partly | coordinator | No URL added. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "Hockey Canada writes no lengthen-path right" (true on the wordings swept; HC 8.1 arm-block noted); "no post-icing carve-out in USAH 613 / CARHA 57". |
| D7 | Cardinal rule | Partly | readers | Not the wave's subject. |
| D8 | Numeric ownership / restatement | Partly | | Book counts replaced by named books. **Declared out of scope** otherwise. |
| D9 | Summary layer | Yes | census layer tests, readers | Key focus, KTs, CM and facts repaired wherever they carried the claim. |
| D10 | Key-facts layer | Yes | readers | New facts lines in `defender`, `winger`; `winger` §Backchecking at HARD_MAX 14; several lines at 295–300/300. |
| D11 | Reader safety | Yes | a reader on every changed file and every repair | |
| D12 | Read-aloud integrity | Yes | every author and reader rendered `md_to_speech` | The voiced-alone facts layer was the commonest place a repair failed to reach. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | **Declared out of scope** beyond changed units. |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

## Carried (not blocking) — rows are in OPEN_ITEMS.md

- **WNIHL "non-checking" vs 101.1's puck-directed permission** in `conditioning_and_recovery` :231, `body_contact_and_battles` :167, `defensive_zone_coverage` :521 — chunk-distance check each.
- **~15 "where (body) checking is barred" units** without the women's limb — triage only the contrast shape.
- **PWHL 52.1/57.1** not read against the pinch/seal act; PWHL absent from `offensive_zone_play`'s may-you-hit lists.
- **Harsher-direction wording:** `special_teams` facts :634 "a hit is a penalty any time" (say "step or glide"); `time_and_space` "a deliberate push can be one" understates Hockey Canada 7.3(a); `winger` facts :648 "your body may lengthen their path" compresses "body position".
- **Omissions:** CARHA 49(a)'s mandatory major on injury; USA Hockey 634(b) on a chipper; USA Hockey Declaration "less direct route" uncited in `winger`.

## What this method could not have found

- A women's-contact claim worded without "women", "female", "girls", "101.1" or "WNIHL" — the census keyed on those labels.
- Whether a WNIHL referee reads the format label "non-checking" as barring push-and-lean or holding ground; no document on disk defines it.
- Other rules that price the same acts under wording not searched.
- Real devices, 320 px, screen readers.

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 22: a CLAIM census of how the corpus describes IIHF Rule 101.1 (women's hockey), plus named per-file rows. You own EXCLUSIVELY the file(s) named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently.
READ FIRST: CLAUDE.md (non-negotiables; READABLE BEATS DEFENDABLE; "brief a claim, never a line"; "a qualifier can change jobs"; "a sketch in a brief is a claim"; "a book's silence is not a grant"); then sources/README.md section "IIHF SECTION 11 — RULE 101.1" (~:136-175) IN FULL.
THE RULE (read it yourself, sources/iihf_rules_2026-27.txt ~:7591-7616; identical in all editions): "In Women's Hockey 'bodychecking' is allowed when there is a clear intention of playing the puck or attempting to 'gain possession' of the puck with the exception from the situation described in this rule." Two players in pursuit "are reasonably allowed to push and lean into each other provided that 'possession of the puck' remains the sole object". Illegal hit → minor, or major + automatic game misconduct. Competing players "are not allowed to use the boards to make contact with an opponent to eliminate her from the play, push her into the boards, or pin her along the boards." A stationary player "is entitled to that area of the ice. It is up to the opponent to avoid body contact"; the opponent must skate around her. A puck carrier skating at a stationary opponent must "avoid contact"; if the opponent moves into the carrier → at least a minor. Players "are allowed to 'hold their ground' any time that they have established their position"; "Any move by a Player to step or glide into an opposing Player will be assessed at least a minor penalty (2') for an 'illegal hit'." Scope is "In Women's Hockey" only — no age or category limb.
THE CLAIM (a hypothesis — refute it for your file): the corpus may describe 101.1 wrongly in EITHER direction —
- HARSHER-FALSE: "women's hockey bars body contact / no contact at all / checking is barred" (the rule allows puck-directed bodychecking, pushing and leaning in a race, and holding ground). Not dangerous, but false; fix if it tells a woman she may not hold her ground or lean on a puck race (sources/README says such a document "would be WRONG").
- PERMISSIVE: omits the step-or-glide illegal hit, the boards/pin limb, the stationary-player duty, or the carrier's avoid-contact duty where a unit teaches that act to a women's reader; or implies a women's player may hit a player without the puck. Fix (penalty-bearing).
- Also: any unit that groups IIHF women's play with "non-checking" leagues and gives it a no-contact instruction that is false for it — reword so it is true for each (e.g. "where body checking is barred, or in women's hockey under the IIHF, which penalises any step or glide into a player").
Never import CARHA 49(a)'s duty-to-avert into a women's IIHF claim or vice versa; keep books separate.
PER-FILE ROWS in your task are also yours; each is a hypothesis — verify before acting.
TASK: find every 101.1 / "women's" / "female" / "girls" contact claim in your file in EVERY layer (Key focus, Overview, body, facts, Common Mistakes, Key Takeaways, trailer, and note any diagram caption hosted there). Verdict per site: OK / HARSHER-FALSE (fix if it changes what a woman does) / PERMISSIVE (fix). Keep quotations verbatim; never write a book count you have not verified; keep shall/may exact. Facts caps: python3 scripts/check_facts.py --near first (Rule:/Convention: 300; others 200; block MIN 3, MAX_COACHING 8, HARD_MAX 14); substitution only, never drop a caveat. A ⚠️ must precede a **strong** run on the hazard/instruction, never a citation.
GATES (no pipes): python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py ; python3 scripts/check_marker_pairs.py <file> (0 LOST). Render: python3 scripts/md_to_speech.py --only <stem> --out /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad/w22_<stem> (your OWN dir); read changed units de-tagged, voiced alone; search WORDS not figures.
REPORT: every site (file:line, layer, verdict), before→after, source quotes, per-file rows, gates, self-caught errors, rows outside the lane, "what this method could not have found".

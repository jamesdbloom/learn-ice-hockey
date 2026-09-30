# Round 30 September 2026, wave 21: a claim census of four families wave 20 repaired, across 19 sibling documents

**Scope.** Wave 20 repaired four claim families in ten documents. Wave 21 ran the same four families as a census across 19 other documents, under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". Brief: Appendix A.

- **A. CARHA slap shot** (permissive, penalty-bearing). CARHA 79(a) makes any backswing "more than fifteen inches either on or off the ice" a slap shot — a minor, a major if it injures (an ejection under 30(a), plus a one-game suspension under 32(d)); 79(b) prices a fake slap shot "for the purpose of intimidating".
- **B. Icing facts** (whistles; fix only if false). USA Hockey's sled hybrid icing; CARHA 65 automatic, with an ambiguous blue-line variant; "past the red line on your stick"; which books bar a change after icing; the post-icing faceoff exception.
- **C. USA Hockey goalie protection "ending at the privileged area"** (permissive). Only 607(c) is place-bound; 607(a), (b), (d) Note 1 and (e) name no place; Casebook 607 Situation 5's permission must carry its limit and the Rule 604 scope.
- **D. Contact on a player who has moved the puck** (permissive). "Arrive into it", "make them go around you", cutting across, finishing on a receiver.

**Files changed (14 content + 2 diagram modules):** `language_and_glossary`, `rink_map`, `rules_primer`, `scanning_and_anticipation`, `time_and_space`, `defender`, `breakouts`, `faceoffs`, `forechecking_systems`, `game_management`, `neutral_zone_systems`, `offensive_zone_play`, `special_teams`, `body_contact_and_battles`; `site/src/diagrams/rules_primer.mjs`, `site/src/diagrams/time_and_space.mjs` (+ rebuilt `site/src/data/diagrams.json`).

**Checked, no edit:** `defending_the_rush`, `defensive_zone_coverage`, `on_ice_communication`, `skating`, `puck_handling`, `passing_and_receiving`.

## Method

1. **Ten census agents in parallel**, one per file or file group, each briefed with all four families as hypotheses.
2. **A reader per changed file** (`safety-reviewer` or `rules-verifier`), dispatched as each file freed. Fixes were dispatched only after that file's reader finished.
3. **Repeated fix → line-read cycles** until every repaired unit was read CLEAR by an agent that did not write it: fix waves A–E and diagram captions, with six final line reads (w21f1–w21f6).
4. **Build, then a headless-Chrome `site-reviewer`.**

## What was fixed (summary; per-site detail is in OPEN_ITEMS.md)

### A — CARHA slap shot
The CARHA limb now stands in every unit that recommends a one-timer from the point, a point slap shot, a D one-timer off a faceoff, or a faked shot: `defender` (facts :505, body :518), `faceoffs` (:889), `special_teams` (one-timer block + body, point-shot body + a new facts Rule line), `offensive_zone_play` (fake shot facts/body; faceoff one-timer facts/body). Units that only describe a shot, or recommend a snap/wrist shot, were left alone and each was reasoned OK in the census.

### B — Icing
- False statements fixed: `breakouts` (:468 unscoped "hybrid icing"; facts "iced in all six books"; the "their side of centre can never be icing" tail); `game_management` ("USA Hockey is the outlier" on time-outs — Hockey Canada 6.7(d)(iii) also allows one, and the document said so three times); `faceoffs` (free post-icing violation omitted CARHA; "a line that cannot change" unscoped); `defender`, `scanning_and_anticipation` (USA Hockey treated as the only book without a change bar); `rink_map`, `language_and_glossary`, `time_and_space`, `neutral_zone_systems` (unscoped "gain the line" and CARHA blue-line variant); `special_teams` ("free matchup wherever you are playing").
- **`rules_primer` (the owner):** CARHA 65(b)/(c) now read neutrally at every site ("the book never says whose blue line … ask your league"); a CARHA 19(d)/(e)/(g) no-change paragraph added; the PWHL added to every icing wave-off it writes (83.1, 83.3, 83.5); "neither book contains the concept" (false for Hockey Canada 6.7(a) Interpretation 1) corrected; "hybrid is the minority" (false) → "far from universal".
- **Diagram caption `icing-the-race-and-the-dot`:** "USA Hockey plays automatic icing … no race at all" → "outside adult sled hockey", + CARHA automatic, + PWHL 83.3.

### C — USA Hockey goalie protection
607(a) (a charge anywhere: minor + misconduct or major + game misconduct) now sits beside every place-bound 607(c) pricing: `offensive_zone_play` (:602, :623, :654, :656, CM :1125, facts :636), `forechecking_systems` (facts :762, body :774), `special_teams` (:1106; facts :1091 "607(b) makes a major plus ejection mandatory on any reckless charge, anywhere"; body :1104), `rules_primer` (:712/:714 — Situation 5's permission now carries its intimidate-or-punish limit, 607(d) Note 1 and the 604 scope). `special_teams` :364 PP rim forecheck at a goalie in a corner → "with your stick, never your body".

### D — Contact on a player without the puck
- "Arrive into it" / "make them go around you" / cut-across repaired in `forechecking_systems` (:590, CM :929, now unconditional "never cut across into the winger"), `neutral_zone_systems` (stand-up chipped-past; 1-2-2 F2 step-up now "the puck, not the player"), `body_contact_and_battles` (CM :1776/:1778, KT4, KT6), `defender` (pinch chipped past, three layers), `rink_map` (four layers: the finishing hit is legal "only on the player who has the puck"), `time_and_space` (:286 rub vs pick; "stick on their blade" → "as the puck lands — a press, not a chop" in four layers + the `deny-the-reception` caption), `special_teams` (PK "attack the receiver", three layers: the puck, not the man; interference before it arrives; a penalty where checking is barred).
- **`body_contact_and_battles` §10 loose-puck race:** "make them go the long way round" now carries Hockey Canada 8.3(i) / CARHA 66(a)(1) (no lengthen-the-path right) and CARHA 49(a)'s duty to avert contact, in body, facts and KT12.
- **`language_and_glossary` Traffic and Pick:** a first repair invented a USA Hockey divergence ("words it the other way round") — USA Hockey's own Preface grants the same block permission. Now: the NHL, IIHF, PWHL and USA Hockey grant hold-your-ice and block; Hockey Canada writes no stand-your-ground sentence (its only blocking permission is 8.1's arm strength move with body position), so hold only ice you already have; Pick: "In any game, never plant yourself in a defender's path to free the puck carrier" (USA Hockey 625(a)(1), CARHA 66(a) Note 2, Hockey Canada 8.3).

## Blocks this wave (each repaired and re-read)

`defender` :696 (a new sentence re-pointed a ⚠️ "That…" at the PWHL); `breakouts` :468 (CARHA caveat reached facts, not body); `language_and_glossary` Traffic (twice: invented divergence; then "Hockey Canada writes no such permission" false against 8.1) and Pick (a false "two books" count, permissive for USA Hockey/NHL); `special_teams` :647 ("play him only once the puck reaches him" — a body-check licence) and facts :1090 (a repair dropped the game misconduct from 607(b)); `offensive_zone_play` :654 (the same place-bound claim, a third site); `forechecking_systems` :590/:929 ("into a winger who does not have it" narrowed a ban by contrast); `neutral_zone_systems` :129/:139 ("never into them before it" implied into them after it).

**Pattern:** eight of the eleven blocks were in repair text, not in the census text they repaired — six of them the "by contrast" shape (a qualifier limiting a ban implies the unqualified act is fine).

## Coordinator errors this wave

- **#11:** the brief stated the PWHL post-icing no-change bar is "83.4 (not 84.1)". PWHL 84.1 carries the bar and the three exceptions too (`pwhl_rules.txt` :7243-7247). Refuted independently by four agents; nothing was changed on the strength of it. (A later reader's contrary nit was checked against the source by the coordinator and refuted.)
- **#12:** a fix brief called IIHF 101.1 women's play "barred". It allows body checking with a clear intention of playing the puck and penalises any step or glide into a player (`iihf_rules_2026-27.txt` :7592-7593, :7615). Refuted by the author; the text written names no book.
- **Sketches refuted by authors:** "give way" (CARHA 66(a) Note 2 lets defenders stand their ground) → "hold only a lane you already have"; "never the man before it" (same contrast) → "the puck, not the player"; a flat "a chop is a penalty" → "can be called a slash".
- Brief line pointer for Hockey Canada 8.3 (`hc.txt` ~:6784) landed on another rule. Harmless.

## Markers

`check_marker_pairs` reports **0 LOST** on all 14 content files. HEAD→tree: `language_and_glossary` **25→27** (two new ⚠️, each before a strong run on the instruction: Traffic's Hockey Canada limb and Pick's "In any game"), every other file unchanged (`rink_map` 25, `rules_primer` 176, `scanning_and_anticipation` 7, `time_and_space` 16, `defender` 39, `breakouts` 28, `faceoffs` 90, `forechecking_systems` 55, `game_management` 51, `neutral_zone_systems` 14, `offensive_zone_play` 54, `special_teams` 59, `body_contact_and_battles` 142).

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts`, `check_absolutes` (39 documents + 408 caption units), `check_geometry`, `check_secrets`, `check_counts` all exit 0.
- **URLs:** none added; per-file `https?://` counts unchanged on all 14 files.
- **Diff against HEAD:** 103 insertions and 96 deletions across 14 content files and 2 diagram modules (+ `diagrams.json`).
- **Build:** absolute npm, exit 0, full chain to `check:links` (54 pages, all resolve), 17:39:55–17:41:05. Last content edit 17:36:25. `--panels` 0, `--bare` 0.

## Rendered site (`site-reviewer`)

**CLEAR.** 14 changed pages + `goaltender` (icing caption host) × 400/1440 × light/dark, headless Chrome 154 over CDP, serving the 17:41 build.
- 7,656 glyph instances across 60 page-cells, every one inside `span.warn-inline`: 0 panels, 0 bare, 0 untreated. The four new markers (glossary Traffic and Pick, `rules_primer` "Even then it is not a licence to hit him", `defender` "under USA Hockey the difference is five seconds") render as inline amber leading their strong runs.
- Facts values clean (no literal `**`, no overflow) on every page that has them.
- Captions show the new text: `icing-the-race-and-the-dot` ("outside adult sled hockey") on `rules_primer` and `goaltender`; `deny-the-reception` ("as the puck lands — a press, not a chop").
- Key Takeaways numbered continuously on every page; no horizontal scroll at 400 px; console clean; no HTTP errors; no off-origin requests.
- Readability observation (400 px): `body_contact_and_battles` CM item 35 ≈ 6,000 px, item 21 ≈ 5,000 px; `rules_primer` CM item 23 ≈ 4,000 px.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×6, `safety-reviewer` ×12 | CARHA 19, 30(a), 32(d), 49, 52(b) Note, 57, 65, 66(a) + Notes, 79, glossary; USA Hockey Preface (Competitive Contact), 204(a), 604, 607 (whole) + Casebook 607 Situations 4–6, 613, 624 (+ sled :7412) + Casebook 624, 625 Note/(a)(1)/(a)(4)/(a)(5), 634, 636(f), Standard of Play; Hockey Canada 6.5, 6.7 + Interpretations, 7.3, 8.1, 8.3, 8.5, 9.5; NHL/IIHF/PWHL 55.1, 56.1/57.1, 56.2, 60/61, 76.4/78.4, 81/83, 84.1, 87.1/89.1; IIHF 101.1. |
| D2 | Exceptions | Yes | same | Sled scope; CARHA wave-offs and blue-line variant; post-icing faceoff exception books; possession grace. |
| D3 | Rule-set divergence | Yes | same | One invented divergence (USA Hockey block) found and removed. |
| D4 | Citation integrity | Yes | readers | PWHL 83.4 vs 84.1 resolved from source; Hockey Canada 8.1 vs 8.3. |
| D5 | Provenance | Partly | coordinator | No URL added. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "Hockey Canada writes no such permission" (false — 8.1) caught; "CARHA writes no time-out rule"; "the phrase 'gain the line' appears in no HC/USAH/CARHA text" (true; concept written differently). |
| D7 | Cardinal rule | Partly | readers | No coaching choice newly stated as law; not the wave's subject. |
| D8 | Numeric ownership / restatement | Partly | | Book counts replaced by named books where unverified. **Declared out of scope** otherwise. |
| D9 | Summary layer | Yes | census agents' layer tests, readers | Key Takeaways, Common Mistakes, Key focus and facts repaired wherever they carried a family. |
| D10 | Key-facts layer | Yes | readers | Several lines at 295–300/300; new facts lines in `special_teams` (two), `body_contact_and_battles`, `defender`. |
| D11 | Reader safety | Yes | `safety-reviewer` or `rules-verifier` on every changed file and every repair | |
| D12 | Read-aloud integrity | Yes | every author and reader rendered `md_to_speech` | Chunk-level antecedents ("That…", "before it") were the commonest defect. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | **Declared out of scope** beyond changed units. |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

## Carried (not blocking) — rows are in OPEN_ITEMS.md

- **IIHF 101.1 women's** — audit every corpus description of it (coordinator error #12 suggests others may say "barred").
- **Sibling sweeps not reached:** "attack the receiver" / F2 step-up in `defending_the_rush`, `forechecking_systems`; inside-lane "long way round" in `winger`, `defender`, `playing_without_the_puck`; pick wording in `playing_without_the_puck`; diagram caption `inside-lane-longer-route`.
- **Harsher-direction nits:** `time_and_space` "pin the stick of a player still waiting … interfering" (stricter than USA Hockey's Standard of Play); `rink_map` "legal only on the player who has the puck" (stricter than NHL 56.1's immediate-after-loss grace); `rules_primer` item 10 omits USA Hockey Casebook 624 Situation 9 (a puck on the line is not icing).
- **Omissions:** `body_contact_and_battles` CM :1777/:1779 lack CARHA 49(a)'s avert-contact limb; `special_teams` receiver lacks the IIHF-women's limb; `faceoffs` facts :1030 "the first faceoff violation after an icing ejects nobody's centre (NHL 76.4)" voiced alone, unscoped; `forechecking_systems` post-icing rows omit CARHA.
- **CARHA 65(b)/(c):** whose blue line is genuinely unresolved in the book.

## What this method could not have found

- A claim worded without any of each census's search terms (a wind-up called "load up"; a cut-across called "step into him").
- Other rules that price the same acts under names not searched.
- The **contrast shape** in text no reader happened to open: it was found only by reading, never by a tool, and eight blocks this wave were that shape.
- Real devices, 320 px, screen readers.

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 21: a CLAIM census of four claim families wave 20 repaired in ten documents and which may still stand in yours. You own EXCLUSIVELY the file(s) named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently.
READ FIRST: CLAUDE.md — non-negotiables; READABLE BEATS DEFENDABLE; THE CORPUS TEACHES TACTICS; "brief a claim, never a line"; "a qualifier can change jobs"; "a sketch in a brief is a claim"; "a book's silence is not a grant"; "a true negative stops the next search — sweep for the ACT". Read sources/README.md for any book before searching it. Flatten line breaks before counting hits; read every hit in context.
Each claim below is a HYPOTHESIS: refute it for your file before acting. Search the ACT in several wordings, not the label.
A. CARHA SLAP SHOT (permissive, penalty-bearing). CARHA Rule 79(a) (sources/carha.txt ~:3568-3585): "Any player who uses a 'slap shot' during the game shall be assessed a Minor penalty. If an injury to an opponent results, a Major penalty shall be assessed." Note: the slap shot is "to bring the stick back behind the puck more than fifteen inches either on or off the ice". A CARHA major ejects (30(a), ~:1418) and brings an automatic one-game suspension (32(d), ~:1515, except the accidental high stick). 79(b): a fake slap shot "for the purpose of intimidating" → minor. DEFECT: a unit that RECOMMENDS a slap shot, a point shot with a wind-up, a three-quarter or half wind-up, a one-timer with a big backswing, or a faked slap shot, voiced alone with no CARHA limb, tells a CARHA adult-rec reader to take a penalty. Units that merely describe the shot, or recommend a snap/wrist shot, are fine. Fix: one plain clause in the SAME voiced unit ("— never in a CARHA league, where it is a penalty" or equivalent). Wave 20's model: content/technique/shooting.md.
B. ICING (fix if FALSE; these are whistles, not penalties, so only harsher/looser facts matter): "USA Hockey never runs a race" / "USA Hockey is automatic" unscoped (sled hockey adult classifications use hybrid: usah.txt ~:7412); CARHA 65 is automatic (verify) and some CARHA leagues divide the ice at the blue lines (65(b)/(c), wording ambiguous — never say "far blue line" or "your own blue line", say "ask your league where its line is"); a dump is legal "everywhere"/"however far" when the puck is on your stick at the red line (the owner content/foundation/rules_primer.md ~:306 says get the puck PAST the red line on your stick; CARHA 65(a) "over the centre red line"); no-change-after-icing bar = NHL 81.4, IIHF 81.4, PWHL 83.4 (not 84.1), Hockey Canada 6.7(d) in U18AAA, Junior, Senior at the Member's option — USA Hockey and CARHA have none; any count of "books" that bar it; the post-icing faceoff first-violation exception (NHL/IIHF 2026-27 76.4, PWHL 78.4, HC 6.5(a) Junior; IIHF 2025/26 v1.1 warns first on every draw; IHUK In-House Rule 76 no removal after icings) stated for books that don't write it.
C. USA HOCKEY GOALIE PROTECTION ENDING AT THE PRIVILEGED AREA (permissive, penalty-bearing). USA Hockey 607 (usah.txt ~:3663-3703): only 607(c) (check or charge on a goalkeeper → minor+misconduct or major+GM) is bounded by "within the goal crease or privileged area"; 607(a) (any charge: minor+misconduct or major+GM), 607(b) (reckless → major+GM "shall"), 607(e) (match "may") and 607(d) ("NOT 'fair game'", unnecessary contact penalised; Note 1 deliberate contact → charging) name no place. Casebook 607 Situation 5 (usah_casebook.txt ~:11700-11735): outside the privileged area a goalie "can be legally checked", and while the goalie holds the puck an opponent may "physically engage … in an effort to gain possession", but a check "with the intent to intimidate or punish" is charging — and whether any body check is legal in that game is decided by Rule 604 (Situation 5 never cites it). DEFECT: a unit implying that outside the crease/privileged area a goalie is fair game, or that only reckless contact is priced there, or quoting Situation 5's permission without its limit or without the 604 scope. Carrying Note 1 flat ("deliberate contact is charging") errs harsher and is NOT a defect.
D. CUT ACROSS A PLAYER WHO HAS MOVED THE PUCK (permissive, penalty-bearing). A unit telling a defender/forechecker to "establish position and arrive into it", "get in front and make them go around you", or implying contact is fine once in position, on a player WITHOUT the puck: NHL 56.2(iii)/IIHF 56.2(III) (late hit / check on a player not in possession), USA Hockey 625 Note ("pick" or "block" a non-puck carrier) and 625(a)(4), 640(b); Hockey Canada 8.3; only NHL/IIHF 56.1 permit a block "provided he is in front of his opponent and moving in the same direction" and not to "deliver an otherwise illegal check". Wave 20's model wording: "Once the puck is past you, go for the puck, not the player: … never cut across into them or hit them." Note: a unit about a player who STILL HAS the puck is a different case.
TASK: for each family, find every site in your file in EVERY layer (Key focus, Overview, body, facts, Common Mistakes, Key Takeaways, trailer). Verdict per site: DEFECT (fix, one plain clause, same voiced unit) or OK (say why). Never write "only" a book doesn't; keep shall/may exact; never tie an ejection to injury where the book doesn't; never write a count you have not verified — name the books instead. Facts caps: run python3 scripts/check_facts.py --near first (Rule:/Convention: 300; others 200; block MIN 3, MAX_COACHING 8 non-Rule, HARD_MAX 14); substitution only, never drop a caveat. A ⚠️ must precede a **strong** run on the hazard/instruction, never a citation.
LANE: fix only defects in families A, C, D, and FALSE statements in B. Report anything else as a row with its direction.
GATES (no pipes): python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py ; python3 scripts/check_marker_pairs.py <file> (0 LOST). Render: python3 scripts/md_to_speech.py --only <stem> --out /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad/w21_<stem> (your OWN dir); read changed units de-tagged, voiced alone; search WORDS not figures.
REPORT: per family, every site (file:line, layer, verdict), before→after, sources quoted with file:line, gates, self-caught errors, rows outside the lane, and "what this method could not have found".

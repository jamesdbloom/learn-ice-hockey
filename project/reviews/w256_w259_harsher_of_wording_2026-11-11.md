# W256–W259: "harsher of" stated as advice, not as Hockey Canada's rule (11 November 2026)

**Files:**
- 19 content files:
  - content/technique/body_contact_and_battles.md (the owner)
  - content/foundation/language_and_glossary.md, rules_primer.md
  - content/hockey-iq/playing_without_the_puck.md, risk_management.md
  - content/positions/center.md, defender.md, goaltender.md, switching_positions.md, winger.md
  - content/systems/defending_the_rush.md, defensive_zone_coverage.md, faceoffs.md, forechecking_systems.md, game_management.md, offensive_zone_play.md, special_teams.md, zone_entries.md
  - content/technique/shooting.md
- sources/README.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
A read-only rules-verifier ruling, recorded as the "Harsher of" row in OPEN_ITEMS.md. Several reviewers had flagged that the corpus repeats the reading "a head-first drive into the boards takes the harsher of head contact and checking from behind" (and "the harsher of 7.5 and 8.5" for a goalie) as if it were Hockey Canada's own rule.

**What the ruling found:**
- **The book never says "harsher".** hc.txt has 0 hits for harsh, more severe, greater penalty, or any synonym. 7.6 says head contact "supersedes any other rules … any foul that results in contact to the head must be penalized as Head Contact"; 7.7 says it supersedes "any other rules regarding contact to the head". 7.5's preamble item ii is a list of situations, not a precedence clause. No Interpretation settles 7.5 against 7.6 or 7.7, or 7.5 against 8.5 for a goalie.
- **"Harsher of" is not permissive by construction, but three problems remain:**
  - (a) About 38 sites stated it as the book's rule.
  - (b) A bare "harsher" in a line voiced alone can resolve, by minutes, to 7.6(a)'s double minor, where you stay in the game, over 7.5(a)'s minor plus game misconduct.
  - (c) Read literally, the text makes head contact cheaper than a hit to the back at its lowest rungs.
- **IIHF.** 48.1 supersedes and 48.2 is a minor, so "never a minor" stated as fact was wrong. The NHL and PWHL have no supersedes clause. The authors found that the NHL's 48.2 and the PWHL's 48.3 (accidental, after video review) are both minors too.

## What changed
- **The verb.** "Takes / is priced at / governs / pays / the harsher price stands" now reads "plan on the harsher / the dearer / 7.5's price anyway". Wherever "harsher" stood bare in a short layer, the floor (at least a minor plus game misconduct) is now named.
- **Disclosure.** Each site now says the book "does not say how the two rules meet", and that head contact's lowest rungs can keep you in the game.
- **The owner, body_contact_and_battles.md:798, is repaired.** It said a head-first drive is "priced under Rule 7.5 whether or not it touched the head", which contradicts 7.6. It now says "called as head contact, which the book says supersedes other rules … ⚠️ **a match if they could not protect themselves** … so plan on checking from behind's price anyway: at least a minor plus a game misconduct, a major plus a game misconduct on the violence (mandatory if they are hurt), and a match if you drove them into the boards or goal frame unable to protect or defend themselves or meant to injure them". :1379 (goalie) and :792 (IIHF) are rewritten to match.
- **"Instead" removed** at every "on the head it is head contact instead" site. This includes eight on defending_the_rush that the census missed and the post-build leftover grep caught. Each now reads "on the head it is head contact, a match if they cannot protect themselves — plan on the game misconduct anyway".
- **IIHF.** "Never a minor" became "never plan on a minor", with "48.1 says it supersedes and 48.2 is a minor, so a minor is possible — do not plan on it".
- **Carve-outs missed by the census.** "While it stays off the head" carve-outs that had no counterweight now have one (center, glossary, defensive_zone_coverage, game_management, shooting).
- **forechecking KT2.** The arm/shoulder/hip limb was credited to IIHF women's hockey. It is PWHL 52.1's limb, and IIHF 101.1 writes only step or glide, so the credit is corrected.
- **sources/README.md (coordinator).** "NHL 41/43/44/48/50 are identical" in the PWHL became "keep identical numbers — not identical text: PWHL 48.2 is a major where NHL 48.2 is a minor".

**Fixes from the reviews, applied verbatim:**
- **Two BLOCKING, on the goalie pages.** "Plan on 7.5's price" read as a ceiling. A cross-check from behind into the neck is a MANDATORY major plus game misconduct under 7.6(b) and 7.7(b), so "at least" was added at shooting :538 and goaltender :1372/:1650. special_teams :659 had dropped "mandatory" from the Hockey Canada head-contact match; it is restored.
- **WORDING.** About 30 clarity fixes:
  - "plan on it on the head too" became "plan on being ejected on the head too";
  - "there" became "at every level";
  - "cheaper than either" became "cost less than 7.5's";
  - "plan on more" and "plan on no less" now name the floor;
  - the "lowest rungs" sentence is scoped to hits from behind;
  - a missing 7.5(c) mandatory match is restored at forechecking :810, and glossary :400 now names the 7.6(c)/7.7(c) head-contact match;
  - "head head contact" is fixed.
- **defending_the_rush.** The double-dash construction at :402 and :939 now uses KT9's parenthetical shape. The facts line at :406 gains the head floor ("Hockey Canada, head hit: plan on it"), and is now 300/300.
- **One departure.** At defender :831 the W259 author kept "mandatory" on the Hockey Canada head-contact match, a word the review's text had dropped. 7.6(c) and 7.7(c) read "will be assessed", so the stricter word stays.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (read-only ruling) | The ruling above, a census of 77 "harsher" lines in 21 files by family and layer, and sketches. |
| authoring agents ×4 (W256 owner/glossary/primer; W257 goalie pages; W258 PWTP/risk/ZE/FC; W259 seven pages) | Verified the ruling against hc.txt and IIHF/NHL/PWHL 43 and 48 before acting. Refuted two premises: the forechecking ":1182 KT" is an unvoiced Sources trailer, and the ruling missed the minors in NHL 48.2 and PWHL 48.3 plus 7.7(b)'s Junior/Senior head-injury limb. Found sites the census missed. |
| safety-reviewer, rules and safety (W256+W258, 7 files) | Nothing blocking. Owner :798, :792 and :1379 are CORRECT; PWHL 48.3 finding upheld; 7.7(b) treatment enough. WORDING W1–W7 plus KT2's "her", applied verbatim by the coordinator. |
| safety-reviewer, rules and safety (W257, 4 goalie pages) | **BLOCKING ×2** ("plan on 7.5's price" as a ceiling; "mandatory" dropped at special_teams :659). WORDING W1–W7. All 17 applied verbatim by the author. |
| safety-reviewer, rules and safety (W259, 7 files) | Nothing blocking. WORDING W1–W5, applied verbatim by the author, with "mandatory" kept at defender :831. Raised the IIHF "never just two minutes" question (plan row). |
| commit-gate (first run) | BLOCK on C6/C11: risk_management :840 (facts) said "plan on 7.5's minor plus game misconduct anyway" without "at least". It was the only floor-naming site of the 19 that lacked it, the same shape as the W257 goalie BLOCKING. It also found "cheaper than either" still at body_contact :1379 and winger :861, and two record inaccuracies (glossary :400; the leftover-grep false positive). Everything else passed: no lost match or "mandatory", every carve-out in a chunk with its floor, the owner :798, goalie and IIHF/PWHL claims re-derived from source, 0 LOST markers, dist clean. |
| safety-reviewer (narrow, the three gate fixes) | CORRECT: :840 "at least" (299/300), and "cost less than 7.5's" at body_contact :1379 and winger :861 (true; 8.5(a) is a bare minor, so "cheaper than either" was false). |
| safety-reviewer (narrow, defending_the_rush, 8 census-missed sites) | Nothing blocking. The eight sites are CORRECT. WORDING: the :402 and :939 dash structure, and the :406 facts floor. Both applied verbatim. |

### C11
Authors wrote every rewording. The coordinator:
- applied the W256+W258 review's wordings and both defending_the_rush wordings verbatim;
- after the first gate, added "at least" at risk_management :840 and carried the cleared "cost less than 7.5's" to body_contact :1379 and winger :861, with a narrow safety check run on all three;
- applied the cleared offensive_zone_play wording to eight defending_the_rush sites, then had a narrow safety check run on them;
- wrote the sources/README clarification, the plan rows and this record.

### Checks after the last content edit
- check_facts exit 0 (no pipe). Several lines sit at 300/300.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs: 0 LOST on every changed file.
- Full `npm run build` (absolute binary) after the final edit. `--bare` and `--panels` are 0 on every changed page, and there are no literal `**` in dist.
- Leftover grep for "takes the harsher of / is priced at the harsher / pays the harsher / the harsher price stands / head contact instead": 0, apart from one false positive. body_contact_and_battles :2168 is a Sources-trailer note on USA Hockey Casebook 621 Situation 1 routing to "Rule 620 Head Contact instead"; it was unchanged from HEAD and is not this reading.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | Hockey Canada 7.5–7.7, 8.5 and the Glossary; IIHF 43, 48 and 101.1 (both editions, plus Situation 48.1); NHL 43 and 48; PWHL 43, 48 and 52.1; CARHA 53 |
| D5 Provenance | sources/README.md PWHL numbering line corrected |
| D6 Negatives | "the book never says harsher" (0 hits, flattened, synonyms swept) |
| D7 Cardinal rule | a reading stated as a rule is now advice ("plan on") with a disclosure |
| D8 Numeric ownership | the owner (body_contact_and_battles) updated first, and siblings align to it |
| D9 Summary layer | CM and KT sites across 19 files |
| D10 Key-facts layer | every changed facts line checked voiced alone; caps respected |
| D11 Reader safety | safety-reviewer ×4 |
| D12 Read-aloud | every carve-out shares a chunk with its counterweight and floor (renders) |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus bare, panel and literal-`**` scans; no site-reviewer, because these are sentence-level edits that move no markers |

## What this method could not have found
- Paraphrases of the same reading that use none of the swept words ("is called under 7.5", "counts as checking from behind"). The census was lexical, and defending_the_rush shows it can miss a whole page.
- Hockey Canada officiating bulletins that might settle precedence outside the rulebook on disk.
- Whether referees ever stack 7.5 and 7.6 for one act.
- Real phones and screen readers. The narration audio lags until it is rebuilt.

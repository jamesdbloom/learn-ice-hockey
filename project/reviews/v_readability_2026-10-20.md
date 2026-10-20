# V (20 October 2026): readability pages 2–4 — Rules Primer, Goaltender, Forechecking Systems

This round continues the owner's readability programme: page by page, worst first. Three author agents each owned one page (brief: session scratchpad `v/brief.md`; commit 684326e's Body Contact pass was the model). Each page then had its own safety-reviewer with a rules lens, and the coordinator applied the fixes in the reviewers' wording.

## Commit gate BLOCK and fix

The first gate BLOCKED on goaltender :1271. The coordinator's post-review CARHA sub-bullet carried only half of 53(b)'s condition. CARHA 53(b) (carha_2026.txt :2618-2622) gives a mandatory match only where the player is propelled "from behind into the boards or goal net, in such a way that the player is unable to protect or defend themselves".

The line now reads: "(a) is a game misconduct with either a minor or a major, the major mandatory if you are injured, and can be a match; (b) is a mandatory match where you are driven into the boards or goal net unable to protect yourself". A rules-verifier (cR53) checked it against carha_2026.txt :2604-2622. Its two minors, applied in its own wording, were 53(a)'s discretionary match and the "game misconduct with either a minor or a major" disambiguation. Nothing contradicted.

The complete list of post-review coordinator edits is the "Review" section below plus this one line.

## Results (check_readability, before → after)

| Page | Mean sentence | Paragraphs > 1,200 | KTs > 60 words (longest) |
|---|---|---|---|
| rules_primer | 29.7 → 27.2 | 1 → 0 | 9 (133) → 5 (107) |
| goaltender | 20.7 → 20.4 | 3 → 1 (the header blockquote, which cannot be split) | 3 (67) → 2 (64) |
| forechecking_systems | 23.7 → 22.4 | 3 → 0 | 4 (72) → 0 (60) |

Some KTs stay above 60 words because shortening them further would drop a mandatory limb. The reviewers also restored a few words for safety.

**About the meter:** check_readability's sentence splitter does not break before ⚠️ or after a closing quote, so its "longest sentence" overstates marker-heavy pages. That is a plan row for scripts/.

## Changes, in brief
- **KTs shortened** to kernels of what a player does. Every mandatory limb was kept, checked limb by limb against HEAD by each author and again by the reviewer.
- **Long sentences split:** about 100 in rules_primer, 15 in goaltender, and many in forechecking. Each instruction now comes first.
- **forechecking:** four sections now lead with what the player does ("If you can see their numbers, pull up and play the puck"; "Never pinch in to check a player already battling your teammate").
- **goaltender:** the back-hit tariffs sit in nested sub-bullets, one per book.
- **rules_primer :388:** procedural cuts only (21.5 review, the 21.2 substitute clause, the tail of IIHF Rule 21). "High sticks" was removed from the three-to-five examples to shorten the list; the remaining examples (cross-checking 609(c), slashing 634(c)) are Level 3, so the "such as" list stays true.

## Review
- **v2S, goaltender:**
  - **MAJOR:** KT12 had lost "never" ("walking him out can be called interference"). Restored: "never walk him out — it can be called interference".
  - **MINORs, applied:**
    - the USAH and CARHA sub-bullets now name the act they price, and CARHA 53(b)'s match carries its condition;
    - the CM head-contact scope is restored on the NHL/PWHL limb ("If it reaches your head");
    - KT6 now reads "the puck" and "Inside it, play it; don't freeze it".
- **v3S, forechecking:**
  - **MAJOR:** "the first question" had become "the only question" and lost "that is not leniency". That told NHL/IIHF/PWHL readers a hit from behind is a major or nothing, when NHL 41.2 and IIHF 43.1 allow other penalties. Restored.
  - **MINORs, applied:**
    - "All three start from 43.1" (PWHL 43.1 has the same wording);
    - KT2 "Go into corners on an angle";
    - "the referee's balance".
  - KT8 ("anyone" injured, which matches CARHA 52(a)) and KT9 were confirmed.
- **v1S, rules_primer:**
  - **MAJOR, already in HEAD and carried through:** KT8 said a cross-check above the shoulders is a mandatory ejection "if deliberate" under Hockey Canada. HC 7.7(b) makes it mandatory in Junior and Senior "whether or not injury results"; the deliberateness test applies only in minor and female hockey (7.6(b) Interpretation 2). Fixed: "under CARHA and Hockey Canada (in its minor and female hockey, a deliberate one)".
  - **MINORs, applied:**
    - KT7's Hockey Canada clause is now "ejects at every tier (a hit that reaches the head is priced as head contact instead), and always if it drives him head first into the boards or goal frame";
    - KT6 "skates parallel to the boards";
    - CM chirping now reads "Discriminatory language is a match penalty under USA Hockey", restoring the antecedent;
    - CM head hit "under USA Hockey it must, even when merely careless" (620(b) "shall");
    - KT8's USA Hockey limb gains "a likely multi-game suspension" (owner ruling of 19 Oct).

No spoken "Important." was lost in any page (check_marker_pairs: 0 LOST, 0 SPLIT on all three).

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/rules_primer.md | +87/−87 |
| content/positions/goaltender.md | +24/−20 |
| content/systems/forechecking_systems.md | +51/−45 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | v1S, v2S and v3S each verified the KTs and every changed tariff against sources (NHL/PWHL/IIHF 41–43, 48, 52, 21; HC 7.4–7.7, 8.5, 8.8; CARHA 30, 32, 52–54, 62; USAH 602, 604, 607, 608, 615, 620–624, 639, 640 and the discipline policy) |
| D2 exceptions | HC 7.6(b) Interpretation 2 scope; IIHF 43.1 "other penalties" |
| D3 divergence | HC Junior/Senior vs minor/female |
| D4/D5 citations | Some quotations were shortened or removed for length: rules_primer's NHL 83.3 delayed-offside quote is part-paraphrased, its IIHF Rule 21 quote is removed, and forechecking's second IIHF Situation 27.9 quote is now a citation. No quoted wording was altered |
| D6 negatives | None added |
| D7 cardinal rule | Instruction-first reordering |
| D8 numeric ownership | USAH levels unchanged at rules_primer :388 |
| D9 summary layer | Every KT checked against HEAD limb by limb; CM checked |
| D10 facts | No facts line changed; check_facts passes |
| D11 safety | v1S, v2S and v3S, each with a MAJOR fixed |
| D12 read-aloud | All three pages rendered by their authors and reviewers; KTs and CM heard alone |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; links pass |
| D15 site | Full build after the final edit (rebuilt after the gate fix); --bare 0; --panels 0; no site/ change |

## Gates (no pipes, after the final edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 3 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- Sibling documents that repeat these KTs.
- Qualifiers deleted without trace in paragraphs the reviewers judged cosmetic.
- Whether the remaining long sentences, mostly verbatim quotations, can be shortened without misquoting.

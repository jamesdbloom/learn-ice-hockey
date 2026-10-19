# S5 (19 October 2026): leftover claim rows from the Style B final reviews and the W80/W81 leftovers

This round worked through the plan rows "Source rows from the Style B final reviews", "W80 leftovers" and "W81 leftovers". The brief is in the session scratchpad at `s5/brief.md`. Every row was treated as a hypothesis and checked against the current text and the primary source (hc.txt, carha_2026.txt, usah.txt, nhl_rules.txt). Five author agents worked on disjoint files, and a sixth handled the diagram caption.

## Rows already closed by earlier waves (no edit)

- **faceoffs:**
  - The forechecker's "never hit a player turned toward the wall" limb is in the facts block (:600), the body (:608), Common Mistakes (:1202) and KT6.
  - The CARHA slap-shot injury tier (79(a) and 30(a)) is in facts :535 and body :554.
- **neutral_zone_systems:**
  - The USAH 602(a) limb is at facts :345, :347, :408 and body :380.
  - Jumping into a hit is charging in every book, in the body at :419. Checked against NHL/PWHL 42.1, IIHF 42.1, HC 7.4, CARHA 52(a) and USAH Casebook 607 Situation 1.
- **puck_support:** the double-team "never push or hit from behind" limb is in every layer.
- **defensive_zone_coverage:** the 604(e) "reckless" antecedent is at facts :543.
- **defending_the_rush:** USAH 602(a) is in the trip-meant-to-injure facts line (:711).
- **playing_without_the_puck:**
  - The :660 paragraph was already split by R1/R2.
  - The "56.5 major ends your game" claim is already scoped to 56.2(iii), with 69.8 kept separate (:734).
- **time_and_space:** HC 8.5(c) was already in the body at :547.

## Changes

| Document | Change |
|---|---|
| puck_support_and_spacing | Sources trailer now cites the checking-from-behind rules the Rule lines use: USAH 608 (Note quoted)/602(a)/Casebook 608 Sit 1, HC 7.5(a)/(c), CARHA 53(a)/(b), NHL/IIHF/PWHL 43. Body icing bullet: CARHA 55(a) Note 2, where a series of deliberate icings "can be called as delaying the game there: a bench minor". Trailer 7.5(c) gloss corrected to "any push or hit from behind" (7.5(c) has no intent word) |
| time_and_space | Sources trailer: HC 8.5(c) quoted |
| equipment | Common Mistakes :779 now reads "Grabbing, holding or even rubbing a facemask" (USAH 622(b) "rub, grab or hold") |
| rules_primer | :462 CARHA interference priced: a major plus game misconduct at the referee's discretion, mandatory where it injures (66(a), 66(e), 30(a)), and a match for an attempt to injure (48(a)). It previously said only "the same shape … ends your game". :441 slew-foot: "Meant to injure, plan on a match in both (CARHA 48(a); under Hockey Canada, this guide's reading of Appendix D Note 1)" |
| body_contact_and_battles | Slew-foot meant to injure: the HC facts line adds "plan on the match — this guide's reading of Appendix D Note 1". New CARHA facts line: 86(b) discretionary, with the casebook keeping a kicking slew-foot from behind there, while 48(a) is mandatory for an attempt to injure. The HC body bullet states the Note as a reading, with its 7.1(c) limit. The CARHA body bullet carries 48(a) and 48(c) along with the casebook's 86(b) ruling. Common Mistakes adds "plan on a match under Hockey Canada and CARHA too" |
| defending_the_rush | Slew-foot costs bullet: "Meant to injure, plan on the match in both books, hurt or not" (CARHA 48(a); HC Appendix D Note 1 as this guide's reading) |
| risk_management | CARHA 48(c) no longer asserted to reach a slew-foot. It now says "the rule text does not say, and its casebook rules one under 86(b), at the referee's discretion". The HC Note sentences (:732, :747) now state 7.1(c) as the limit on the reading, not as its reason |
| site/src/diagrams/puck_support_and_spacing.mjs | Caption `support-a-battle-from-outside` gains "Never push or hit the opponent on the wall from behind. Go for the puck at their feet. A push from behind into the boards is checking from behind even where body checking is not allowed." The count "neither prohibition" became "none of this". Local literal only; SHOULDER_TAIL untouched |
| site/src/diagrams/rules_primer.mjs | Comment only: the reference to that caption's count was updated |

## Review

One safety-reviewer did the rules and safety review. It covered every changed line in the 7 documents and the caption, and rendered each document with md_to_speech. It made three passes.

**Pass 1: 1 MAJOR and 3 MINORs.**
- **MAJOR (body_contact):** the new text asserted that CARHA 48(c) ("attempts to kick or deliberately kicks") reaches a slew-foot. That would make 86(b)'s discretion dead letter, and it contradicted the file's own "Hockey Canada and CARHA start below that" floor (:1592, CM, KT9). The direction was harsh. Fixed, and the same reading was brought into line in risk_management, which already carried it.
- **MINOR:** an HC "since 7.1(c)…" clause presented the Note's limit as its reason.
- **MINOR:** two short forms stated the Appendix D Note 1 limb as rule; both are now disclosed as a reading.
- **MINOR:** the puck_support trailer narrowed 7.5(c) to intentional hits.
- Upheld: CARHA 66(a)/(e)/30(a), 55(a) Note 2, USAH 608 Note, HC 8.5(c), USAH 622(b) and the caption (USAH 608 Note, HC 7.5, CARHA 53).

**Pass 2: 3 MINORs, all harsh-direction.**
- The body_contact facts line still implied that a kicking slew-foot is mandatory. CARHA's casebook (carha_2026.txt:4266-4271) rules "a kicking motion from behind" under 86(b), at the referee's discretion. The 48(c) limb was dropped from that line.
- Two "the book does not say" sentences were contradicted by the book's own casebook. body_contact now cites the casebook ruling; risk_management says "the rule text".
- risk_management :747 had the same reason-for-limit inversion. Fixed there and at :732.

**Pass 3: CLEAR.** Two optional polishes were applied:
- body_contact :1703 now reads "the Note cites Rule 7.1, whose match, 7.1(c)…", because Note 1 prints "(Rule 7.1)".
- risk_management :733 adds "at the referee's discretion".

**Coordinator check:** every other `48(c)` mention in the corpus was read in context (on_ice_communication, passing_and_receiving, puck_handling, faceoffs, body_contact :1068/:1090). All of them concern kicking an opponent, and none applies 48(c) to a slew-foot.

## Rules verification and the fixes after it (commit gate BLOCK on C4)

The first commit gate BLOCKED because no rules-verifier covered the diff. A rules-verifier was then given the ACT questions (slew-foot or kick meant to injure; CARHA interference; push from behind at the wall in all six books; CARHA repeated icing; facemask rub, grab or hold). It swept each book in several wordings.

**Result: no claim the diff introduced is wrong, and every quotation is verbatim.** It found:
- **MAJOR (on a staged line, in unchanged text, permissive):** equipment :779 priced a Hockey Canada facemask grab as "a double minor at the least" and skipped 7.1(b)'s **mandatory** major and game misconduct when the grab injures. Fixed. The body :128 already carried it; no facts line or KT prices the grab.
- **MINOR:** "8.8 writes no limb for an attempt to injure" is literally true, but HC 8.8 Interpretation 1 (hc.txt:7152-7157) weighs "intent of the offending player" inside 8.8(c)'s discretionary match, which cuts against the override reading. body_contact :1703 and risk_management :747 now say so. "Plan on the match" stays, disclosed as this guide's reading. The risk_management trailer adds Interpretation 1.
- **MINOR, not acted on (noted):** HC's own kick limb 7.1(c)(iii) is not named beside CARHA 48(c) at the slew-foot sites. USAH Casebook 622 Situation 3 (fingers in the cage and twist: a mandatory match) is covered by "plan on a match".
- Verified: CARHA 48/53/55 Note 2/66/86 and the casebook; HC 7.1/7.5/8.5(c)/8.8/Appendix D Note 1; USAH 608 and its Note, Casebook 608 Sit 1, 622(b)/(c); NHL, PWHL and IIHF 43; PWHL 51. CARHA 2020 and 2026 are identical for every rule cited.

**Safety re-review of the fixes: CLEAR**, with two MINORs on equipment :779, both applied:
- "real force" became "any more than minimal force", because 7.1(c)(ii) reads "moderate or high degree of violence" and 7.1(a)'s double minor is only for "minimal".
- The second "injure" became "if it causes an injury, even by accident", so the intent tier (a match) and the result tier (a major and game misconduct) no longer sound contradictory.

The site was rebuilt after these final edits: check:links passed and --bare is 0. check_marker_pairs shows 0 LOST and 0 SPLIT HALF on equipment, body_contact and risk_management.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier on every changed claim, by act across all books (after the C4 block); authors and safety-reviewer at source |
| D2 exceptions | CARHA 86(b) casebook vs 48(c); HC 7.1(c) "not otherwise covered" vs Appendix D Note 1; 66(e) mandatory major vs 66(a) discretion |
| D3 divergence | HC/CARHA intent limb stated per book; 48(c) reach left as the book's own unresolved question |
| D4/D5 citations | New quotations were checked verbatim by the reviewer (66(a), 66(e), 30(a), 48(a), 55(a) Note 2, 608 Note, 8.5(c), 622(b), 7.5(c), Note 1) |
| D6 negatives | "8.8 writes no limb for an attempt to injure" verified (8.8(a)-(e)); "CARHA bars no change after an icing" swept |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | No figures |
| D9 summary layer | Layer test per claim in each file (facts, CM, KT). KT9 and CM floors checked against the new slew-foot text |
| D10 facts | New and edited facts lines are within cap (body_contact 1685/1689, risk_management 732/733); check_facts passes |
| D11 safety | safety-reviewer CLEAR after 3 passes; no change makes an act cheaper than the book |
| D12 read-aloud | body_contact, rules_primer, risk_management, defending_the_rush and puck_support rendered; new facts lines heard alone |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; check_links and the site check-links pass |
| D15 site | Diagrams rebuilt after the caption and comment edits; full site build after the final content edit (dist 15:35 vs last edit 15:34); --bare 0; --panels 0 in all 7 files |

## Gates (after the final content edit, no pipes)

- check_facts, check_links --quiet, check_absolutes (caption layer certified), check_geometry, check_secrets and check_counts all pass.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all 7 files.

## New plan rows

- **puck_handling.mjs :790 and :1039:** "neither prohibition" captions; check whether they need the push-from-behind limb.
- **equipment :779:** the HC facemask ladder skips 7.1(b).
- **Propagate the HC/CARHA intent-to-injure slew-foot limb** to siblings that carry the slew-foot ladder.
- **puck_support §6:** caption echo between the caption and the :342 body.

## What this method could not have found

- **Slew-foot pricing worded without rule numbers.** Every author searched for "slew", "48(c)", "7.1(c)" and "602(a)". A sentence that prices the act without those words would pass.
- **Officiating practice.** Whether HC applies Appendix D Note 1, or CARHA applies 48(c), to a slew-foot in practice. The corpus states both as the guide's reading or as the book's open question.
- **Sibling documents.** Documents outside the seven that carry the slew-foot ladder were not layer-tested for the new intent limb; that is now a plan row.

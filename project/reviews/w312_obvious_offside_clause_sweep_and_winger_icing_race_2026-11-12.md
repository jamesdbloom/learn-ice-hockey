# W312: the obvious icing/offside clause carried in full across the corpus, and the winger told not to finish on the icing race (12 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md (:1582 facts, :2053 Common Mistakes)
- content/foundation/rules_primer.md (:353, :461)
- content/positions/switching_positions.md (:583)
- content/systems/defending_the_rush.md (:433 facts, :921)
- content/positions/winger.md (body :667, new facts Rule line :656, KT15 :974)
- content/systems/forechecking_systems.md (:975 facts, :989; after the commit gate)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This round works through the W311 plan row:
- (1) body_contact Common Mistakes :2053;
- (2) a corpus sweep for boarding-only summaries of the obvious icing/offside clause;
- (3) uniform USA Hockey wording.

**The rule.** NHL, IIHF and PWHL 41.1 and Hockey Canada 7.2 all read: *"Any unnecessary contact with a player playing the puck on an obvious 'icing' or 'off-side' play which results in that player hitting or impacting the boards is 'boarding' and must be penalized as such. In other instances where there is no contact with the boards, it should be treated as 'charging.'"* The IIHF repeats this in 42.1.

The base offence (NHL 41.1, HC 7.2(a)) needs "a defenseless opponent" and an impact "violently or dangerously". The clause needs neither.

USA Hockey 624(d) reads: *"Any unnecessary contact with an opponent who is attempting to play the puck in an obvious icing situation shall be penalized."* It covers icing only, names no offence and sets no boards condition.

## What changed
*(This section describes the text as first reviewed. The USA Hockey wordings at body_contact :1582 and defending :433/:921, and forechecking :975/:989, were changed again after the commit gate; see "After the commit gate" for what ships.)*

**body_contact :2053 (Common Mistakes, ⚠️).** The author's first version said "Not on an obvious icing or offside", meaning the vulnerability weighing stops. The rules-verifier found that in no book. Its wording now stands, verbatim:

> "On an obvious icing or offside the NHL, IIHF, PWHL and Hockey Canada go further: unnecessary contact with the player playing the puck is boarding, and must be penalised, if it puts them into the boards, with no defenceless opponent or violent impact needed, and should be treated as charging if it does not"

It is followed by the safety-reviewer's addition: "USA Hockey 624(d) penalises any needless contact in an icing race."

**body_contact :1582 (facts, 298/300).** This now uses the safety-reviewer's full line: "…USA Hockey penalises it only on icing (624(d)), though 603 reaches a dangerous one." At HEAD it read "USA Hockey writes only the icing half (624(d))"; the author's first draft "writes it only for icing" implied 624(d) names boarding, and the rules-verifier rejected it.

**rules_primer :353.**
- It now leads with "**Icing and offside plays are not a licence to hit: play the puck, not the player.**"
- It gives both halves of the clause.
- It adds: "USA Hockey writes the clause only for icing, at 624(d), without naming boarding, but its 603 still makes sending anyone dangerously into the boards boarding".

**rules_primer :461 (⚠️).** This entry was not named in the brief. It gave only the boarding half and used the "icing half" wording. It now adds "and without contact with the boards it should be treated as charging". The author's first draft said "away from the boards"; the rules-verifier corrected it, because the test is contact, not distance. The USA Hockey limb now reads "writes the clause only for icing, at 624(d), without naming boarding, though its 603 reaches any dangerous hit into the boards".

**USA Hockey wording, made uniform.**
- switching_positions :583: "(USA Hockey writes the clause only for icing, at 624(d), without naming boarding.)"
- defending_the_rush :433 (facts): "USA Hockey penalises only icing contact (624(d))"
- defending_the_rush :921: "USA Hockey penalises only icing contact, at **624(d)**, without naming boarding."
- Each of these already names 603 in the same unit.

**winger.md (a MAJOR gap the safety-reviewer found).** The icing section told the winger to "sprint the first half" and to "ease up if clearly beaten", but gave only the winger's own safety as the reason. It never said that finishing on the defender who reaches the puck first is boarding or charging, though that is exactly the act the clause prices under hybrid icing. The safety-reviewer's limbs were added at three sites:
- **Body :667**, at the end of the chase paragraph: "**And race the puck, never the player:** unnecessary contact with whoever is playing an obvious icing puck is boarding if it puts them into the boards and should be treated as charging if not (NHL, IIHF and PWHL 41.1; Hockey Canada 7.2), and USA Hockey 624(d) penalises it too." The author placed it after "If the goalie comes out for it, pull up." rather than after "unforgiving.". Inserted earlier, it would have made the following "it" refer to the contact.
- **Facts :656 (263/300):** "Rule: Race the puck, not the player — … USA Hockey 624(d) penalises it too".
- **KT15 :974:** adds "never finish on the player who gets there first".

**Sweep of other files.** Nothing to fix:
- time_and_space and zone_entries already carry both halves; forechecking_systems carries both halves but its :975 facts line and :989 lead still say the vulnerability weighing stops on an obvious icing or offside — the claim rejected at :2053 (found by the commit gate; fixed after the gate, see below);
- defender is a wall-ride context;
- the center, goaltender, getting_started, scanning and offensive_zone_play hits cover race mechanics only;
- winger was fixed in this wave;
- special_teams needed nothing.

**Markers:** no ⚠️ was added or removed. Marked units are unchanged: body_contact 198, rules_primer 197, switching 32, defending 88, winger 68, and (after the gate) forechecking 91. 0 LOST.

## Reviews
| Reviewer | Result |
|---|---|
| W312 author | Two passes |
| rules-verifier | Four sentences CONFIRMED and three PARTIAL. :2053's "Not on…" is not in any book: the clause removes the defenceless and violence elements, not the vulnerability weighing. :1582's "writes it only for icing" implied 624(d) names boarding. :461's "away from the boards" misstates the contact test. Its wordings were applied. On delayed offside: nothing on disk settles whether "obvious off-side play" reaches a delayed-offside race. The IIHF Situation Handbook for Rules 41/42 covers icing only, and no NHL casebook is on disk. |
| safety-reviewer | First pass: nothing blocking. WORDING for :1582, defending :433 and :921. Found the winger MAJOR gap and supplied the three limbs. Also found a pre-existing gap outside this wave: none of body_contact's 15 KTs names the icing or offside racer. Narrow C6 re-check of the final text: OK on all five points. The winger body limb sits in chunk 043 with the chase instruction, and its placement is right. The new facts line (chunk 042) and KT15 (chunk 073) are safe heard alone. Nothing is priced below the book. The harness shows 1 warn-inline per glyph and 0 asides on all five marked paragraphs. :2053 can be followed by ear. |

## After the commit gate
The gate BLOCKED on three counts.
- **(1) "USA Hockey penalises only icing contact" (defending :433, :921) put the "only" on the book.** That read as if USA Hockey penalises nothing in the race except icing contact, which is false and permissive: 603 (boarding), 607 (charging) and 604 (checking where barred) still apply. body_contact :1582 had the same shape.
- **(2) The record misstated HEAD.** It is corrected above: at HEAD :1582 read "writes only the icing half"; "writes it only for icing" was the author's rejected draft.
- **(3) forechecking_systems :975/:989 still said the vulnerability weighing "stops" / "the referee's balance disappears".** This is the claim rejected at :2053, and the record had certified the file. The sweep line above is corrected.

The author (forechecking_systems now added to its ownership) moved the scope onto the rule:
- **defending :433:** "USA Hockey's 624(d) penalises needless contact on an obvious icing"
- **defending :921:** "USA Hockey's **624(d)** penalises any needless contact on an obvious icing, without naming boarding"
- **body_contact :1582 (290/300):** "USA Hockey's 624(d) penalises it on icing, and 603 reaches a dangerous one"
- **forechecking :975 (299/300):** now opens "On an obvious icing or offside the opponent need not be defenceless —"
- **forechecking :989 ⚠️ lead:** now reads "On an obvious icing or offside, the player need not be defenceless or the impact violent:"
- **forechecking :989 body:** "Away from the boards" became "Where it puts no one into the boards" (the book's test is contact, not distance)
- **body_contact :2053:** the gate also flagged "waive the penalty" (43.1), which could be heard as waiving the icing boarding just named. It now reads "waive the checking-from-behind penalty".

Two narrow re-checks:
- **rules-verifier:** CONFIRMED all five edits and supplied three small wordings, applied verbatim (the :433 pronoun, :975 "the opponent", :989 "Where it puts no one into the boards"). It also supplied "obvious" at :921.
- **safety-reviewer:** OK on all three points: the voiced-alone units are safe, nothing is cheaper or permissive, and the harness shows 1 warn-inline per glyph with 0 asides on :989, :921 and :2053.

A full build was run after these edits.

### C11
The author wrote every content change. Every change after review is a reviewer's wording applied verbatim, except the winger body placement. That departs from the brief to avoid a referent shift, and the safety-reviewer confirmed it on re-check. The coordinator wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets, check_counts;
- check_marker_pairs and check_callout_flow --panels / --bare on all five files, and on forechecking_systems after the gate fixes.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: NHL/IIHF (both editions)/PWHL 41.1 and 42.1, HC 7.2, USA Hockey 603/624(d), CARHA; IIHF Situation Handbook Rules 41, 42 and 83.7; EIHL Casebook |
| D4 Citations | verified |
| D5–D6, D8 | not engaged |
| D7 Cardinal rule | not engaged (rules, not coaching choices) |
| D9 Summary layer | body_contact Common Mistakes; winger KT15. Plan row: body_contact KTs |
| D10 Key-facts layer | body_contact :1582, defending :433, winger :656, each voiced alone and cleared by the safety-reviewer; no facts-reviewer run |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | all changed files rendered; chunks given above |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every marked paragraph; no site-reviewer run (text only) |

## What this method could not have found
- Whether officials apply "obvious off-side play" to a delayed-offside race.
- Other pages that send a player chasing an icing without the clause, beyond those swept (center, the defender pages and forechecking were swept for the clause, not for the chase itself).
- Casebook rulings on "unnecessary" or "obvious".
- How the longer units sound. That needs an ear test.

# W311: the charging half of the obvious icing/offside clause, and USA Hockey's icing rule no longer stretched over offside (12 November 2026)

**Files:**
- content/systems/forechecking_systems.md (:975 facts, :989)
- content/technique/body_contact_and_battles.md (:736 facts, relabelled Never: → Rule:; :743)
- content/positions/defender.md (:433 facts)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This round works through three items from the W310 plan row:
- (1) the "icing half" wording at forechecking_systems :975/:989;
- (2) USA Hockey 640(d);
- (3) F5: lines quoting only the boarding half of the obvious icing/offside clause.

**The brief's premise for (1) was wrong.** At HEAD, :975 and :989 did not say "only the icing half". They said "USA Hockey writes it into the icing rule, 624(d)" and "puts it in its icing rule". That is worse: it implies 624(d) carries the whole icing-*or-offside* boarding clause. 624(d) reads: *"Any unnecessary contact with an opponent who is attempting to play the puck in an obvious icing situation shall be penalized."* It is icing-only and does not name boarding.

## The rule
NHL 41.1, IIHF 41.1 (and IIHF 42.1, both editions), PWHL 41.1 and Hockey Canada 7.2 each say: *"Any unnecessary contact with a player playing the puck on an obvious 'icing' or 'off-side' play which results in that player hitting or impacting the boards is 'boarding' and must be penalized as such. In other instances where there is no contact with the boards, it should be treated as 'charging.'"* USA Hockey and CARHA write no such clause.

## What changed
**forechecking_systems :975 (facts, voiced alone, 287/300).** The final wording is the safety-reviewer's:
> "On an obvious icing or offside the weighing stops — NHL, IIHF and PWHL 41.1 and Hockey Canada 7.2 make unnecessary contact that puts the player on the puck into the boards boarding, and away from them charging; USA Hockey penalises it on icing (624(d)) and as boarding if dangerous (603)"

**forechecking_systems :989 (⚠️ body).** Three changes:
- It adds the charging half ("Away from the boards, all four say the same contact *'should be treated as charging'*").
- The USA Hockey icing-rule sentence became "USA Hockey writes the clause only for icing, at 624(d), without naming boarding, but sending a player on an offside puck dangerously into the boards is boarding under its 603 anyway."
- "The call is certain; the tier is still graded by violence (41.2–41.4)" became "The call is certain; the tier is not, and it climbs to an ejection — in Hockey Canada automatically if the player is hurt (7.2(b))." This is the rules-verifier's shorter replacement. The old sentence now followed the Hockey Canada sentence with the wrong rule numbers, and it hid three escalations:
  - HC 7.2(b)'s mandatory major and game misconduct on injury;
  - NHL/PWHL 41.4's match penalty for intent;
  - NHL 41.5's game misconduct for a major that injures the face or head.

**body_contact_and_battles :736 (facts, voiced alone).**
- Before: "Never: Hit a player playing an obvious icing or offside puck into the boards: …". Heard alone, that forbade only the hit into the boards.
- Now: "Rule: Never hit a player playing an obvious icing or offside puck — into the boards it is boarding (NHL, IIHF, PWHL 41.1; Hockey Canada 7.2), and away from them it should be treated as charging; USA Hockey 603 if dangerous, and 624(d) bars needless icing contact".
- The label change is required. The value exceeds the `Never:` cap of 200, it is a cited rule, and `Rule: Never …` has precedent (defender.md carries four).

**body_contact_and_battles :743 (⚠️ body).** It adds "and all four say that where there is no contact with the boards it *'should be treated as charging.'*"

**defender :433.** It adds the PWHL to the books that name the clause.

**640(d): no edit.** It reads *"…delivers a body check with no effort to gain possession of the puck and the blade of the player's stick is above the knees"*. Both conditions must hold, and the penalty is a minor, or a major and game misconduct if reckless (640(g)), with a match also available for reckless endangerment (640(h)). No line prices the hit below it. A racer is usually making an effort at the puck, so 624(d) and 603 are USA Hockey's real routes.

**F5 negatives, left unchanged:** switching_positions :242/:583, defending_the_rush :237/:433/:921, defender :453, body_contact :1582/:1591. All are wall-ride or receiving-player contexts, where the charging half makes no act cheaper. The safety-reviewer agreed on all eight.

**Markers:** no ⚠️ added or removed. Marked units: forechecking 91, body_contact 198, defender 82. 0 LOST.

## Reviews
| Reviewer | Result |
|---|---|
| W311 author | Corrected the brief's premise; edits as above |
| rules-verifier | Every changed sentence CONFIRMED except :989's tier sentence (PARTIAL, cheaper than the book); its shorter replacement was applied verbatim. The :736 relabel is required. 640(d) finding CONFIRMED. Also read: the EIHL Casebook leaves the 41.1 clause untouched. |
| safety-reviewer | Nothing blocking. A hit away from the boards is now priced in both edited files, and it agreed on all eight F5 negatives. WORDING applied verbatim: the :975 rewrite (the old tail "603 a dangerous board" was a hard parse by ear, and "covers" did not say the hit is penalised); :736 "off them" → "away from them". A narrow re-check after the rules-verifier's :989 sentence: OK on all three points. "Climbs to an ejection" is true of the top tier in all four books, and the harness gives 1 warn-inline and 0 asides. |

### C11
The author wrote the edits. The coordinator applied the rules-verifier's :989 sentence and the safety-reviewer's :975 and :736 wordings verbatim, and the safety-reviewer then re-checked them. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary) that started after the final content edit: check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets, plus check_marker_pairs and check_callout_flow --panels / --bare on all three files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: NHL/IIHF (both editions)/PWHL 41.1–41.5, IIHF 42.1, HC 7.2, USA Hockey 603/624(d)/640, EIHL Casebook and In-House on Rule 41/42 |
| D4 Citations | verified |
| D5–D8 | not engaged |
| D9 Summary layer | not changed; body_contact Common Mistakes :2053 noted (plan row) |
| D10 Key-facts layer | forechecking :975 (287/300), body_contact :736, defender :433. Each is voiced alone and cleared by the safety-reviewer. No facts-reviewer was run. |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | forechecking chunks 062/065, body_contact 064, defender 027 |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on both marked paragraphs; no site-reviewer was run (text only) |

## What this method could not have found
- The other rules each book uses to price an icing-race hit away from the boards, such as HC body-checking/charging or CARHA charging, which may set a different floor.
- Whether "unnecessary" and "obvious" carry any casebook ruling. The IIHF Situation Handbook for Rule 41 was not opened.
- Other documents with a "boarding only" summary of the clause (rules_primer, winger, special_teams), which were not swept.

# SG115: the intent-to-injure match for a hit from behind, stated without a false exclusivity (28 October 2026)

**Files:**
- content/positions/goaltender.md
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md
- content/positions/winger.md
- project/plans/OPEN_ITEMS.md

## What changed and why
Hockey Canada 7.5(c) has two paragraphs. The second makes a hit from behind meant to injure a mandatory match anywhere on the ice. Units that gave only the first paragraph (into the boards or goal frame, on a defenceless player) left that out, and SG114 carried the gap forward.

**Round 1** added a Hockey Canada intent limb at about 20 units. Rules and safety review both found that this created a **false exclusivity**: "…under Hockey Canada and CARHA [defenceless match], and under Hockey Canada if meant to injure". That tells a CARHA or USA Hockey reader their book has no intent match. In fact every book on disk except the IIHF has one:
- CARHA 48(a), and 54(d) for a cross-check;
- USA Hockey 602(a);
- NHL and PWHL 21.1 ("shall be imposed");
- Hockey Canada (7.2(c), 7.3(c), 7.4(c), 7.5(c), 7.6(c), 7.7(c), 7.8(c), 7.9(c) and 9.2(c), with 7.1(c) as the backstop).

The IIHF has no match penalty at all.

**Round 2** repaired it as one claim:
- **Body units** now read "a hit meant to injure is a mandatory match in every book but the IIHF": bcb :624, :1421 and :1438 (facts), goaltender :1398, winger :557.
- **Summary layers** dropped the limb. It changes nothing a player does, and the owner's ratio rule applies. These units are now byte-identical to HEAD: rules_primer :35, :1126 and KT7 :1181 (back to 56 words); winger :798; bcb :2001; goaltender :1374.
- **Hockey-Canada-only units** keep the Hockey Canada limb: bcb :704 (both 7.6(c)/7.7(c) grounds; facts :361 and :685 now trace to it), :786, :1360; goaltender :1378; rules_primer :472. rules_primer :1058 (a site-only table cell) reads "both also for intent to injure".
- **bcb :1613 (facts) and :1626 (body).** Clipping is now "a mandatory match if meant to injure", per 8.7(c) ("will be assessed"); it used to read "up to a match". For tripping the line reads "no match under 8.6 itself, though plan on one if meant to injure".

## The tripping limb: a contradiction in the book, with the harsh reading kept
The rules-verifier rated "plan on one if meant to injure" for a trip WRONG. Its reasons:
- 8.6(c) says "No Match penalty may be assessed for tripping".
- 7.1(c) reaches only acts "not otherwise covered".

The safety-reviewer and the coordinator found Hockey Canada's own penalty chart, Appendix D Note 1 (hc.txt:9105). Tripping is listed there, and the note says: "A Match penalty shall be assessed for any deliberate attempt to injure and for any infraction that results in a deliberate injury (Rule 7.1)."

Read closely, the chart is weaker support than that sentence suggests. Appendix D is laid out in columns (Minor | Major + GM | Double Minor | Match | Minor + Misconduct; hc_layout.txt ~7340–7427). Tripping appears only under Minor and Major + GM. It is **not** in the Match column, which opens with "Attempt to Injure or Deliberate Injury" as an entry of its own. Note 1 routes through Rule 7.1, and 7.1(c) is limited to acts "not otherwise covered". The rules-verifier was never shown Note 1, so no reviewer has weighed the two readings against each other. The commit gate weighed them: the harsh reading is acceptable because 7.1's own definition plausibly lets a referee call a deliberate injurious trip as attempt to injure, and the text gives advice ("plan on one") while naming 8.6(c) honestly.

So the book is at best ambiguous. The text keeps the harsher reading ("plan on one"), as HEAD's body already did ("though plan on one if it is meant to injure"). It never tells a reader the act is cheaper than either reading allows, and it names 8.6(c) honestly. The contradiction is carried to the plan, to state as a disclosure if the owner wants one.

## Reviews
| Round | Dimension | Reviewer | Result |
|---|---|---|---|
| 1 | D1–D3 | rules-verifier | Hockey Canada statements all correct. False exclusivity at 10 of 18 units (lenient). bcb :1438 the worst. |
| 1 | D11, D12 | safety-reviewer | FIX on all four files, Major: the same false exclusivity. Every limb in the same spoken unit as its claim. |
| 1 | D10, D9, D7, D13, D14 | facts-reviewer | The same Major. KT7 had grown to 67 words. bcb :1613 "no match" set beside the mandatory clipping match. Traceability at bcb :1438 and :1613. |
| 2 | D1–D3 | rules-verifier | "Every book but the IIHF" CONFIRMED for every act. PWHL 21.1 and CARHA 54(d) read on disk. Tripping limb WRONG on 8.6(c), but see the section above. |
| 2 | D11, D12 | safety-reviewer | All four files SHIP. Nothing implies a book lacks the match. Dropping the summary limbs leaves nothing cheaper than HEAD. Tripping limb upheld on Appendix D Note 1, harsh direction. |

### C11
- The coordinator made no content edits. Every edit came from the agent and was reviewed afterwards.
- The tripping limb is kept on the coordinator's reading of Appendix D Note 1. That is a judgement between two reviewers, recorded here, and no text was changed.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier, rounds 1–2: hc.txt 7.1–7.9, 8.5–8.7, 9.2 and Appendix D; carha_2026 48(a), 53, 54(d); usah 602(a), 608; NHL and PWHL 21.1 and 43.4; IIHF v1.1 and 2026-27 (no match penalty) |
| D2 Rules travelling without exceptions | rules-verifier and safety-reviewer: the false-exclusivity census across all four files |
| D3 Rule-set divergence | rules-verifier: the IIHF exception is now stated |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | rules-verifier: "every book but the IIHF" rests on IIHF "match penalt" scoring 0 in both editions, flattened |
| D7 Cardinal rule | facts-reviewer: no coaching choice stated as law |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | facts-reviewer (round 1). Round 2 returned the summary units to HEAD text. KT7 is at 56 words. |
| D10 Key-facts layer | facts-reviewer (round 1); rules-verifier and safety-reviewer on the changed facts lines (round 2) |
| D11 Reader safety | safety-reviewer, rounds 1–2 |
| D12 Read-aloud integrity | safety-reviewer rendered all four files in both rounds |
| D13 Folklore | facts-reviewer: none |
| D14 Structure, style, terminology, cross-links | facts-reviewer: the elliptical sentences are reworded and no paragraph is over 1,200 characters. check_links passes. |
| D15 Rendered site | The coordinator ran a full site build after the last content edit; the commit gate confirmed the dist timestamps and the new text in the built pages. No visual structure changed; no site-reviewer ran. |

## Carried to the plan
- Hockey Canada contradicts itself on a trip meant to injure: 8.6(c) bars a match, while Appendix D Note 1 gives one through 7.1. bcb :1613/:1626 keep "plan on one" (the harsh reading); disclose the contradiction if the owner wants it stated.
- The rules-verifier found 13 "No Match penalty may be assessed" bars in hc.txt (holding, hooking, high-sticking, delay, unsportsmanlike and others). Sweep for other "plan on a match" claims on those fouls. Note that Appendix D's Match column omits those fouls too, so Note 1 is weak support for any of them.
- Sibling documents state 7.5(c) with the boards/defenceless ground only. These are true, not a regression: shooting :535, puck_support_and_spacing :588, center :754, zone_entries :237/:776/:822, switching_positions :254, forechecking_systems :326/:815, defending_the_rush :424, game_management :897, plus defender, special_teams and uk_rules.
- bcb :624: "Three of the books make a match mandatory" sits awkwardly beside the new "every book but the IIHF". goaltender :1378 facts: "a major and game misconduct if hurt" lost its subject.
- goaltender :1374 (HEAD text) lists match triggers without intent. This is minor: the line opens on ejection in every book.

## What this method could not have found
- An intent statement in other words in other documents.
- British competition regulations (EIHL, IHUK In-House) and whether they have their own intent provision.
- How the reworded body sentences sound in audio. They were checked only as rendered text.

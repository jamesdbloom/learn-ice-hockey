# W305–W306: the delayed-offside hit priced for every book that writes the clause, and two more captions trimmed (12 November 2026)

**Files:**
- **W305:** content/foundation/rules_primer.md (:200, :204), content/systems/zone_entries.md (:258, new facts line :266, :279)
- **W306:** content/positions/center.md, content/systems/offensive_zone_play.md, content/off-the-ice/how_to_watch_hockey.md, site/src/diagrams/offensive_zone_play.mjs, site/src/diagrams/rink_map_and_glossary.mjs
- **Build product:** site/src/data/diagrams.json (against HEAD, exactly two captions differ: oz-net-front-screen and the-trapezoid)
- project/plans/OPEN_ITEMS.md
- this record

## W305: source and changes
The W303–W304 gate (20289576) found three gaps:
- The rules_primer :204 head-contact sentence said "a penalty too", which could read as an extra call. It also missed tiers.
- An NHL or PWHL reader heard the delayed-offside hit priced for the IIHF only in chunk 015.
- zone_entries lacked the obvious-offside-play boarding/charging clause.

**rules_primer :200.** The sentence now reads: "And do not check the carrier instead of clearing: under the NHL, the IIHF and the PWHL an unnecessary hit on the carrier on an obvious offside play is boarding if it puts them into the boards and should be treated as charging if it does not (41.1; IIHF 42.1 too). Under the IIHF, if the linesperson judges you knew you were offside, an intentional offside *"may be called"* as well, with the draw in your own end (Situation 83.7; 83.6(IV))."
- It is the same clause, word for word, in NHL 41.1, PWHL 41.1 and IIHF 41.1 and 42.1, in both IIHF editions.
- NHL and PWHL 42.1 do not repeat it.

**IIHF head contact at :200: not added.** IIHF 2026/27 Rule 48 supersedes all hits to the head. Its 48.2 minor and 48.3 major are no lower than boarding or charging, so its absence makes nothing cheaper.

**rules_primer :204 ⚠️ ladder.** This is a merge of the safety-reviewer's shorter structure with the rules-verifier's fuller head-contact tiers, re-checked by the rules-verifier. The final run:

> ⚠️ **That faceoff prices only the offside, never the hit or the swing. Under Hockey Canada an unnecessary hit on the carrier on an obvious offside play is boarding if it puts them into the boards and should be treated as charging if not, at least a minor at any level (7.2, 7.4); where your division bars checking, any check is at least a minor (7.3(a)); from behind it is at least a minor and a game misconduct (7.5(a)); and a swing is slashing even if it misses (9.3). Violence alone can make any of them a major and a game misconduct, and an injury must (clause (b) of each). A charge, or a hit from behind into the boards or goal frame, on a player who cannot defend themselves is a match penalty, as is any of them meant to injure (clause (c)). Any head contact is at least a minor, and a double minor if intentional in minor and female hockey (7.6(a)), and a major and a game misconduct if it injures (7.6(b)); in Junior and Senior a head hit with moderate violence, a direct or leaping one, or a blind-side or late one on a vulnerable player is at least a minor and a misconduct, and a violent one a major and a game misconduct (7.7(a), (b) and its Interpretation 1); and a head hit on a player who cannot protect themselves, or one meant to injure, is a match penalty (7.6(c), 7.7(c)).**

What changed against 20289576:
- **"Too" is gone.** HC 7.6 and 7.7 replace the other call; they do not add to it.
- **Tiers added:**
  - the 7.6(a) intentional double minor;
  - the 7.6(b) injury major;
  - the 7.7(a) moderate-violence floor, and Interpretation 1's direct, leaping, blind-side and late hits;
  - the mandatory 7.7(b) violent major;
  - the 7.6(c) and 7.7(c) deliberate-injury match.
- **Citations collapsed.** The spoken clause-number strings became "clause (b) of each" and "clause (c)".

As first merged it rendered as one warn-inline span with no aside; it was then split after the commit gate (see "After the commit gate"), and the two runs render as 2 warn-inline spans and 0 asides.

**zone_entries.**
- **:279, inside the existing ⚠️ strong run.** Added: "even where it does, under the NHL, the IIHF, the PWHL and Hockey Canada an unnecessary hit on the carrier on an obvious offside play is boarding if it puts them into the boards and should be treated as charging if it does not (41.1; Hockey Canada 7.2)".
- **New facts Rule line :266 (230/300).** "Even where hitting is allowed, an unnecessary hit on the carrier on an obvious offside play is boarding if it puts them into the boards, and should be treated as charging if it does not (NHL, IIHF and PWHL 41.1; Hockey Canada 7.2)".
- **:258.** "the protection is Rules 7.5 and 7.6" became "Rules 7.2 to 7.7". The old list named only from-behind and head contact.

USA Hockey (624(d) is about icing only) and CARHA write no offside clause, so both are left out by name.

**Markers:** rules_primer 196→196 and zone_entries 49→49. 0 LOST and 0 SPLIT HALF.

## W306: what changed
| Caption | Before | After | Cut | Hosts voicing it (caption chunk → limb chunk) |
|---|---|---|---|---|
| oz-net-front-screen | 1151 | 917 | CARHA 66(b): no standing in the crease unless the puck is there, the goal is lost, no incidental-contact allowance, CARHA-only scope | offensive_zone_play 030 → 030 (added); center 029 → 030 (added; the contact side is voiced more strictly at 029/030) |
| the-trapezoid | 1139 | 1058 | "In the PWHL and in Britain, play as if the trapezoid binds, and ask your league;" | goaltender 035 → 035/036; how_to_watch_hockey 025 → 026 (PWHL instruction added); rink_map 022 → 023; rules_primer 096 → 096/097 ("ask your league" at 098) |

**Host sentences added:**
- **offensive_zone_play:** "In a CARHA league, stay out of the paint altogether unless the puck is in the crease area: Rule 66(b) bars an attacker from standing in the crease otherwise, disallows a goal scored while you do, and writes no incidental-contact allowance (CARHA-affiliated leagues only)."
- **center:** a shorter form of the same sentence.
- **how_to_watch_hockey:** the PWHL bullet now ends "so watch it as though it binds."

Source: carha_2026.txt:3102-3104.

The oz-net-front-screen ⚠️ sentence is byte-identical. "Other rec leagues may be stricter still" became "A rec league may be stricter still", because "Other" had pointed at the cut CARHA limb. No shared constant was edited.

**Left whole**, with dated comments: the oz crease geometry, REFEREE_JUDGEMENT and the 625(b)/69.1 zone cost; the trapezoid Handbook carve-outs and the centre-red-line and 63.2 limbs. The hosts do not voice these in the caption's chunk or the next.

## Reviews
| Reviewer | Result |
|---|---|
| W305 author | Verified HC 7.6/7.7 and Interpretation 1, NHL/IIHF/PWHL 41.1/42.1 and IIHF 48. Rendered both files. |
| rules-verifier (W305) | :200, zone_entries :258/:266/:279 CONFIRMED (both IIHF editions; USA Hockey and CARHA omission correct). :204 head-contact sentence PARTIAL: cheaper than the book for an intentional head hit in minor/female hockey (7.6(a) double minor), and for a direct head hit in Junior/Senior (7.7(a) moderate-violence floor; mandatory 7.7(b) violent major). A narrow re-check of the coordinator-merged ladder CONFIRMED every tier and modal, and supplied the 7.6(b) injury addition and "should be treated as", both applied verbatim. |
| safety-reviewer (W305) | Nothing blocking. No layer of either file prices the hit by the draw alone for any book. WORDING applied: :200 keeps the rule's "unnecessary … obvious offside play" triggers; :266 "if it does not"; and a shorter ladder (its structure was adopted). It warned not to shorten the match sentence to "a defenceless player into the boards", because 7.2(c) is intent-only. Confirmed 1 span and 0 asides on both ⚠️ paragraphs. |
| W306 author | Inventoried limbs per host, rendered every host after the build, and wrote ✂️/LEFT WHOLE comments with figures and chunks. |
| safety-reviewer (W306) | Nothing blocking. Re-verified CARHA 66(b), including "no incidental-contact allowance": the book's only "incidental contact" is Rule 19. Confirmed the cut limbs per host with chunks, the ⚠️ text unchanged, and no referent shift. The rules_primer "ask your league" at 098 is acceptable, because the conservative instruction is at 096/097. Optional WORDING for the trapezoid caption ("disputed suspension") was **not applied**: "disputed" is a claim about the suspension's status that no reviewer verified (plan row). |

## After the commit gate
The gate BLOCKED on C6/C11. The head-contact half of the :204 run had been merged by the coordinator after the safety review, and only the rules-verifier had re-checked it. On the narrow C6 re-check, the safety-reviewer ruled **BLOCKING**: "a major and a game misconduct if it injures (7.6(b))" made the high cross-check's major depend on injury. HC 7.6(b), third paragraph, and 7.7(b), second paragraph, read: *"Any player who strikes an opponent above the normal height of their shoulders with a cross-check will be penalized with a Major penalty and a Game Misconduct penalty, whether or not injury results."* The re-check also confirmed two more gaps: the 7.6(b) violence-alone major was omitted, and the injury limb was unscoped (harsher than 7.7).

Its exact wording was applied verbatim:
- **Line :204 ends** at "…as is any of them meant to injure (clause (c)).**".
- **A new paragraph (:206)** carries the head-contact tiers in their own ⚠️ run: "Contact with the head is priced separately. ⚠️ **Under Hockey Canada, in minor and female hockey, any head contact is at least a minor, and a double minor if intentional (7.6(a)); it can be a major and a game misconduct for its violence alone, and must be if it injures (7.6(b)). In Junior and Senior, … a violent one, or one that sends the player's head into the glass, ice or boards and injures it, is a major and a game misconduct (7.7(a), (b) and its Interpretation 1). At every level a cross-check above the shoulders is a major and a game misconduct whether or not it injures, and a head hit on a player who cannot protect themselves, or one meant to injure, is a match penalty (7.6(b), (c); 7.7(b), (c)).**"

**Effect of the split:**
- **Run lengths.** The single run becomes two, of about 751 and 815 characters.
- **Rendering.** Plugin harness, re-run by the coordinator: 2 warn-inline, 0 asides.
- **Markers.** rules_primer goes 196→197 marked units: the new paragraph adds a spoken "Important." and none is lost. 0 SPLIT HALF.
- **Old :206.** The USA Hockey Casebook paragraph is now :208, unchanged.

**"At every level"** assumes that HC 7.6 (minor and female) and 7.7 (Junior and Senior) between them cover every Hockey Canada division. The high cross-check clause is in both. Plan row.

### C11
The post-gate split of :204/:206 is the safety-reviewer's wording applied verbatim (see "After the commit gate"). Before that: the W305 author wrote :200, zone_entries and the first head-contact sentence. The :204 ladder was merged by the coordinator from both reviewers' text, then re-checked by the rules-verifier. Its two additions were applied verbatim. The W306 author wrote the host sentences and trims. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary), started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_caption_pairs, check_geometry, check_secrets
- check_marker_pairs, and check_callout_flow --panels / --bare, on every changed content file

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: HC 7.2–7.7 and Interpretations, 9.3; NHL/IIHF (both editions)/PWHL 41.1, 42.1; IIHF 48, 83.6, Situation 83.7; USA Hockey 624(d); CARHA 2026 sweep. safety-reviewer: CARHA 66 in full |
| D4 Citations | each :204 tier cited; the clause-letter citations judged fair by the rules-verifier |
| D5–D8 | not engaged |
| D9 Summary layer | zone_entries Key focus, Common Mistakes and KTs read; no draw-only pricing |
| D10 Key-facts layer | zone_entries :266 (230/300), voiced alone, judged safe |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | rules_primer 015–017; zone_entries 019–021; every W306 host rendered |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | build, plus plugin harness on both ⚠️ paragraphs |

## What this method could not have found
- Whether officials apply "an obvious offside play" (41.1, HC 7.2) to a delayed offside already in progress.
- Other documents (body_contact_and_battles, breakouts, defender) that state the delayed-offside hit price without the 41.1/7.2 clause.
- Whether the two consecutive ⚠️ runs at rules_primer :204 and :206 (about 751 and 816 characters) can be followed by ear. That needs an ear test.
- CARHA rules other than 66(b) that price standing in or entering the crease (for example 52(b)).

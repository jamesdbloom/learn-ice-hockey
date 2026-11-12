# W307–W309: census fixes for delayed-offside hit and CARHA crease pricing, and the last two captions brought under 1,000 (12 November 2026)

**Files:**
- **W308:**
  - site/src/diagrams/forechecking_systems.mjs (forecheck-122)
  - site/src/diagrams/rules_primer.mjs (offside-faceoff-location)
  - site/src/data/diagrams.json (build product; exactly these two captions differ)
- **W309:**
  - content/hockey-iq/time_and_space.md
  - content/foundation/rules_primer.md
  - content/systems/breakouts.md
  - content/systems/offensive_zone_play.md
  - content/positions/center.md
- project/plans/OPEN_ITEMS.md
- this record

## W307: census (read-only rules-verifier)
After 4e33e26a, a rules-verifier swept every content file for a delayed-offside hit on the carrier. It searched for the act (delayed offside, tag up, offside player, hitting or closing on the carrier, intentional offside, 6.11(d), 83.7). It also checked whether HC 7.6 and 7.7 between them cover every division, and swept CARHA for other crease or goalie-contact rules.

**Findings:**
- **F1, major.** time_and_space.md never priced the hit: no 41.1, 7.2, boarding or charging anywhere. "Nothing stops play because you are about to hit the carrier" could be heard as "the hit is play-on".
- **F2.** The rules_primer Common Mistakes bullet and KT1 priced it only by the whistle.
- **F3.** breakouts KT12 said Hockey Canada and CARHA "give none". HC 7.2 does protect the carrier; what both lack is a whistle.
- **F4.** rules_primer said "no CARHA casebook is held here". carha_2026.txt carries "CARHA hockey – Case Situations" (~:4139).
- **F7, major for audio.** The new offensive_zone_play CARHA 66(b) sentence (W306) made the lost goal the only cost of being in the crease. CARHA's mandatory goalie-contact majors first reached a listener 12 chunks later.
- **F8.** center.md lacked CARHA 66(e).
- **Division coverage: confirmed.** The HC 7.6(b) cross-check sentence names no division, so "at every level" holds.
- **F5 and F6** (body_contact_and_battles and others quote only the boarding half of 41.1; zone_entries summary layers) are wall-race and turned-back contexts, priced at or above the book. Left; plan row.

## W308: what changed
| Caption | Before | After | How |
|---|---|---|---|
| forecheck-122 | 1030 | 998 | Reworded, nothing cut. "The 1-2-2, same carrier as the 2-1-2:" (content-reviewer wording; the W308 draft "drawn against the 2-1-2's carrier" could be heard as a 1-2-2 playing a 2-1-2). "Dog, fox and hawk on F1, F2 and F3 are a memory hook…". "The system itself, the side F1 cuts off and where the weak-side defenceman sits are coaching choices…". |
| offside-faceoff-location | 1001 | 996 | "drawn here as" → "drawn as" |

The shared forecheck-122/131 safety block is byte-identical. The coordinator checked this in Python after the final build-diagrams: True. check_caption_pairs reports 0 violations.

**Captions over 1,000 now:** faceoff-dzone-alignment 1259, forecheck-212 1249, the-trapezoid 1058.

## W309: what changed
The author's first pass was reviewed. A rules-verifier then found that **HC 6.11(d)(i) whistles a forechecker**. It reads: *"A player deliberately plays or attempts to make a play on the puck or against an opposing player in a delayed off-side situation, knowing that they are off-side. … play will be stopped immediately"*, with the draw in the offending team's own end. USA Hockey Casebook 630 Situation 38 stops play once contact *"however slight"* is made. So "Hockey Canada and CARHA give none / write no whistle" was cheaper than the book for the forechecker.

The author reconciled both reviewers. **No book is now named as giving no whistle.** The carrier is still told not to rely on one, and the 6.11(d)(i) whistle is never offered as protection.

**time_and_space.md:**
- **:499 facts (262/300):** "Never close on a carrier expecting a delayed-offside whistle: where hitting is barred a hit is a penalty, and under NHL, IIHF, PWHL 41.1 and Hockey Canada 7.2 an unnecessary one is boarding if it puts them into the boards and should be treated as charging if not".
- **:523 body:**
  - USA Hockey 630(d) quoted, plus Situation 38 ("be ready to stop play once contact … is made").
  - Hockey Canada "can also call an intentional offside … on a player who deliberately plays, or tries to play, the puck or an opponent knowing they are offside (6.11(d)(i))".
  - The ⚠️ now leads with the instruction: "**So in every book, do not close on the carrier expecting a whistle to stop you first**".
  - The pricing is split into short sentences (41.1 / HC 7.2; where hitting is barred, a penalty). It adds "USA Hockey writes no such clause, but its ordinary boarding and charging rules still apply."

**rules_primer.md:**
- **:202:** adds Situation 38 ("which comes after the hit"), and "Hockey Canada's intentional-offside call, below, comes only once you deliberately go at them".
- **:208:** "CARHA's Case Situations carry one off-side ruling, on skating backwards over the line with the puck, and no off-side ruling on contact".
- **:751 (table cell):** "CARHA's Case Situations have no Rule 30 entry".
- **Common Mistakes :1124:** "write no trigger for an imminent hit, so none of them promises a whistle before the contact", plus the 41.1 / HC 7.2 price.
- **KT1 :1188:** the price of the hit itself.

**breakouts.md KT12:** "Any whistle's protection ends as the puck leaves your stick, and under Hockey Canada and CARHA no whistle you can rely on stops a forechecker before they reach you" (safety-reviewer wording).

**offensive_zone_play.md :541:** "Under CARHA the goal is not the only cost. Contact that impedes the goalie is a minor; deliberate contact, in or out of the crease, is at least a minor and can be a major, and contact that injures must be (66(b), (e)); charging or cross-checking a goalie in the crease is a major, with more than two strides counting as a charge (52, 54(c)); and each of those majors brings a game misconduct that ends your game (30(a))." Chunk 030, with the 66(b) sentence.

**center.md :781:** adds "interference that injures an opponent is a mandatory major there too, and a CARHA major brings a game misconduct (66(e); 30(a))".

**Markers:** no ⚠️ added or removed. Marked units: time_and_space 20, rules_primer 197, breakouts 54, offensive_zone_play 70, center 73. 0 LOST, 0 SPLIT HALF.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (W307 census) | Findings above; HC division coverage confirmed |
| content-reviewer (W308) | forecheck-122's "2-1-2's carrier" could be misheard; its wording ("same carrier as the 2-1-2", "The system itself") applied verbatim. offside-faceoff-location OK |
| W309 author | Two passes: first the census fixes, then reconciliation of both reviewers |
| rules-verifier (W309) | First pass: HC 6.11(d)(i) whistles the forechecker; USA Hockey Situation 38; CARHA 66(b) "in or out of the goal crease"; "injures an opponent"; "no off-side ruling on contact". Narrow re-check after reconciliation CONFIRMED everything except two "attempts" omissions (HC 6.11(d)(i) "plays or attempts to make a play"), which were cheaper for the forechecker; its wording applied verbatim, plus its optional Situation 38 fidelity fix ("be ready to stop play"). Its other optional wording, on USA Hockey 603/607 definitions, was NOT applied: it would replace a safety-cleared sentence with a narrower one, and the current sentence is not cheaper than the book. |
| safety-reviewer (W309) | First pass: no blockers, four wordings. Its :499 list naming USA Hockey as giving "none" was not adopted (it conflicted with the rules finding). Narrow C6 re-check of the reconciled text: OK on all five points. Every hit is priced in its own right; 6.11(d)(i) is never offered to the carrier as protection; the voiced-alone units are safe; every marked paragraph renders as 1 warn-inline and 0 asides; :523 can be followed by ear. |

### C11
The W309 author wrote the content changes in two passes. The coordinator applied the rules-verifier's two "attempts" wordings and its Situation 38 fidelity wording verbatim. All three are narrowings toward the book, made after the safety re-check: "plays, or tries to play" widens the trigger; "be ready to" softens a whistle the carrier was already told not to rely on; "once you deliberately go at them" moves the stated trigger earlier. The coordinator applied the content-reviewer's forecheck-122 wording, and wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary), started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_caption_pairs, check_geometry, check_secrets;
- check_marker_pairs and check_callout_flow --panels / --bare on every changed content file and both forecheck-122 hosts.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier ×3: NHL/IIHF/PWHL 41.1, 42.1, 83.3; HC 6.11, 7.2, 7.6, 7.7; USA Hockey 603, 604, 607, 624(d), 630(d) and Casebook 630 Situations 37–40; CARHA 30, 49, 52, 54, 66, 72 and Case Situations |
| D4 Citations | every new rule sentence cited and verified |
| D5–D6, D8 | not engaged |
| D7 Cardinal rule | forecheck-122 coaching choices still named as choices (content-reviewer) |
| D9 Summary layer | rules_primer Common Mistakes and KT1, breakouts KT12 |
| D10 Key-facts layer | time_and_space :499 (262/300), voiced alone; cleared by the safety-reviewer and the commit gate; no facts-reviewer was run |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | all five W309 files rendered; offensive_zone_play limb in chunk 030 |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | build, plus plugin harness on every marked paragraph; no site-reviewer was run (caption text only, no template or plugin change) |

## What this method could not have found
- Copies of "Hockey Canada and CARHA give none" or "write no contact trigger" in zone_entries.md or body_contact_and_battles.md.
- USA Hockey Casebook 603 and 607 Situations that might deem a delayed-offside hit charging regardless of strides.
- Whether CARHA 72(f)'s undefined "intentional off-side" reaches a hit.
- Whether rules_primer :204's "Hockey Canada answers the hit only afterwards" needs the same "attempts" fix. It is unchanged text, and the rules-verifier flagged it.
- How the longer :523 (about 1,650 characters) sounds. That needs an ear test.

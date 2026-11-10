# W229: leftover scope rows, bold-only leads, and CARHA's stand-your-ground right for a defender (10 November 2026)

**Files:**
- content/hockey-iq/playing_without_the_puck.md
- content/foundation/rules_primer.md
- content/positions/goaltender.md
- content/systems/faceoffs.md
- content/systems/forechecking_systems.md
- content/systems/game_management.md
- content/systems/neutral_zone_systems.md
- content/systems/offensive_zone_play.md
- content/systems/special_teams.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave closes open plan rows from W227 and W228:
- the goaltender neck-injury paraphrase;
- the playing_without_the_puck permission voiced a chunk ahead of its limit;
- rules_primer's unnamed "other routes" to 4-on-4;
- the Hockey Canada follow-through trigger in minor and female hockey;
- 12 fully bold leads that read like subtitles (from the W228 site review).

## What changed
1. **Bold only (11 leads; words verified unchanged by stripping `*`).** Bold now covers only the instruction clause in:
   - faceoffs: "So why bother?", "The stance", "The grip";
   - game_management: "matched", "For the shooter", "For the goalie", "Coincidental penalties";
   - neutral_zone_systems: D-to-D regroup;
   - offensive_zone_play: "Do not shoot when";
   - special_teams: "Aggressive versus passive";
   - forechecking_systems: "What to do about each".

   After the safety review, two limits were also bolded so the emphasis is not on the permission alone:
   - forechecking: "never turn your back to anyone coming at you on the wall, and never duck" (the spinal limit);
   - faceoffs stance: "Never get the depth by pushing your head out over the dot".
2. **goaltender ~:786.** "almost all on-ice neck injuries … a head-down, head-on hit" now follows huh.txt:224-229: "citing research, traces almost all on-ice cervical-spine injuries to head-down, head-on contact with one or the other, and says it can happen even at walking speed".
3. **rules_primer ~:400.** "Britain still reaches 4-on-4 by other routes" now names the route: a minor against a major gives two minutes of 4-on-4, then three of 5-on-4, except in the last five minutes and overtime, when the major's team serves those three minutes at once (IIHF 19.3). "Britain" was dropped because this is the IIHF rule British hockey plays.
4. **rules_primer ~:433.** Hockey Canada now penalises a follow-through "above the shoulder in Junior and Senior (Interpretation 1 to 9.5(a)), and one that contacts the head, face or neck in minor and female hockey (Head Contact, 7.6(a))".
5. **playing_without_the_puck: CARHA is not as strict as Hockey Canada for a defender.** The page grouped Hockey Canada and CARHA as the books where you "hold only the ice you already have". The rules-verifier found that CARHA 66(a)(1) Note 2 says "the defending players are entitled to 'stand their ground' or 'shadow' the attacking players" (carha_2026.txt:3072-3088). A defender marking a man without the puck is exactly that player. Seven sites were corrected in every layer: body :211, :273, :275 and :531; the pointer :339; facts :516; and Key Takeaway 3. Hockey Canada stays strict (8.3(i), no body-position right).
   - The CARHA permission always carries its limit: "must avoid contact and never lean into them", "without contact", "avert contact". This follows CARHA 49(a), "does not avert body contact with an opponent" (a minor, or a major and game misconduct under 30(a)).
   - Sites about the side WITH the puck were left alone. There CARHA really is strict: Note 2 bars it from running deliberate interference.
   - The limit now shares chunk 014 with the permission. It was in chunk 015 before.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×3 (W229-A scope rows; W229-B bold; W229c CARHA and two wordings) | As above. The W229c author listed every copy of the claim and which side of the puck each addresses. |
| rules-verifier (W229) | Hockey Canada :433 CORRECT. WORDING: :400 outcome only implied; :786 merged "walking speed" into the traced finding. FIX-harsher: CARHA grouped with Hockey Canada (item 5). |
| safety-reviewer (W229) | Nothing blocking. RECOMMENDED: bold forechecking's spinal limit; faceoffs stance optional. Both applied. The chunk move for :273 was upheld. |
| safety-reviewer (W229c) | BLOCKING: the bold CARHA sentence ended chunk 014 with "never lean into them" and no duty to avoid contact. Fixed with its wording, "must avoid contact and never lean into them". R1: the facts line gained "without contact". R2 and N1 also applied: the :339 permission had no limit, and the duplicate 49(a) sentence was removed. |
| rules-verifier (W229c re-check) | Part 1 confirmed, except :339, which described the linked section wrongly. "Shadow" does not cover cutting in front of a moving attacker, so "track them and hold your spot" is the accurate gloss. Part 2: winger backchecking, DZC box-out and glossary :430 CORRECT; body_contact Loose Puck Races NEEDS-CARHA-SCOPE for a dump-in chaser (plan row). |
| rules-verifier (narrow, final) | All four final edits CORRECT: :339 (with the "that" for "why" refinement applied), :273, :516 (297/300) and :275. Passed on HC 8.1's arm-block permission for body_contact :1510 (plan row). |

### C11
The coordinator applied:
- the bold-only changes to two limits (asterisks only);
- the safety-reviewer's and rules-verifier's exact wordings at :273, :516 and :275;
- its own :339 wording, "sets out that Hockey Canada and CARHA write no right to lengthen an opponent's path". This was re-checked narrowly against body_contact :1510/:1524 and both books, and confirmed with the reviewer's one-word refinement.

### Checks after the last content edit
- check_facts exit 0 (906 blocks), run with no pipe.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF on all 9 files; marked units unchanged.
- Full `npm run build` (absolute binary) exit 0 through check:links.
- check_callout_flow --bare 0 on all 9 pages.

No site-reviewer ran this wave. The changes are bold extents and sentences inside existing paragraphs. The W228 site review covered these leads' layout, and the build and bare-glyph checks cover marker rendering.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules, exceptions, divergence, citations | rules-verifier ×3: CARHA 30, 49, 66 and Notes; Hockey Canada 7.6, 8.1, 8.3, 9.5; IIHF 19.1 and 19.3 (both editions); NHL, IIHF and PWHL 56.1; USA Hockey Preface |
| D5 Provenance | the huh.txt / Tator attribution, "citing research" |
| D6 Negatives | "writes no right to lengthen" swept in both books under six terms |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Key Takeaway 3 corrected; Key focus, Overview and Common Mistakes carry no copy |
| D10 Key-facts layer | :516 corrected and checked standing alone |
| D11 Reader safety | safety-reviewer ×2, rendered |
| D12 Read-aloud | playing_without_the_puck rendered three times; every CARHA permission shares a chunk with its limit |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | build plus bare-glyph check (see above) |

## What this method could not have found
- No CARHA casebook is on disk. So "shadow", and Note 1's possession test applied to Note 2, are readings rather than rulings.
- A sentence that relies on the old Hockey Canada and CARHA pairing without any of the swept words.
- Other dump-in pages carrying the same possession gap.
- How the new bold extents look in a browser; this wave was not looked at visually.

# W300: offside and stoppage faceoff locations corrected on three more pages and one caption (12 November 2026)

**Files:**
- content/foundation/rink_map.md
- content/systems/zone_entries.md
- content/systems/neutral_zone_systems.md
- site/src/diagrams/faceoffs.mjs (caption `faceoff-where-the-draw-goes`, plus a dated W300 comment)
- site/src/data/diagrams.json (build product; one caption differs: faceoff-where-the-draw-goes)
- project/plans/OPEN_ITEMS.md
- this record

## Source
After W299 (ad9f1248), a read-only rules-verifier census swept every other content file and every diagram caption. It looked for the faceoff-location claims W299 had corrected, searching for the act in several wordings rather than the label. It found three sites that were cheaper than the book for some reader, plus one wrong location:
- **rink_map.md :471.** It said faceoffs land in the neutral zone "after offside … and after a whistle in the attacking zone", unqualified. An offside on a shot or pass, an intentional offside, a penalty, and a USA Hockey or CARHA high stick all draw elsewhere, and some draw in your own end.
- **zone_entries.md.** A facts Rule line (voiced alone), the body, In short and the Key line all said "a botched carry-in draws only to the neutral-zone spot". The intentional-offside limb was dropped, although the rule cited carries it.
- **Caption faceoff-where-the-draw-goes.** It said "any other stoppage between the end-zone dots and the end boards" draws at the end-zone spot. That dropped NHL and IIHF 76.2's "unless otherwise expressly provided": an attacker's own hand pass (79.3) or high stick (80.2) goes to the neutral zone.
- **neutral_zone_systems.md :791.** It put the neutral-zone dots "just inside each blue line". NHL 1.9 and the owner (rink_map.md) put them 5 ft outside.

## What changed
**rink_map.md :471.** Region wording at :469 was not touched. The sentence now reads: "Faceoffs land here after an unintentional offside on a carry-in, after most neutral-zone stoppages, and after many stoppages the attackers cause in their attacking zone. An offside on a shot or pass draws back where it came from, which can be your own end. An intentional offside sends the draw to your own end in all six books, and so does an attacker's high stick under USA Hockey and CARHA; so, as a rule, does a penalty that puts your team alone on the clock, though one called after a goal draws at centre ice." It then cites each limb: carry-in NHL 83.6; intentional offside in all six books; high stick USA Hockey 621(d) and CARHA 62(d); penalties NHL 76.2.

**zone_entries.md, "The territorial asymmetry":**
- :262 In short, :271 Key and :274 bold lead now say "an accidental offside on a carry costs you less than one on a dump", and :262 adds "a deliberate offside draws in your own end either way".
- :265 facts Rule line (final form after the gate, see below): "An accidental offside on a carry-in draws outside the blue line (NHL and IIHF 83.6); a deliberate one, in your own end in all six books. Hockey Canada adds knowingly playing the puck or an opponent on a delayed offside, or carrying in past an offside teammate (6.11(d)); the draw never prices a hit".
- :276 body: now uses "unintentional" throughout, and gives the own-end draw for a deliberate offside with six-book citations. It also defines "on purpose" by book:
  - NHL, IIHF and PWHL: a delayed-offside touch.
  - Hockey Canada 6.11(d): knowingly playing the puck or an opponent, or knowingly carrying in.
  - IIHF Situation Handbook 83.7 and 83.24: knowingly checking the carrier.
  - USA Hockey 630(c) Note, applied by Casebook 630 Situations 28 and 32.

**Caption faceoff-where-the-draw-goes.** "any other stoppage between the end-zone dots and the end boards" now reads "another stoppage your team did not cause between the end-zone dots and the end boards". It grew by 22 characters (753 → 775). The text is inline in faceoffs.mjs, not a shared constant: the only importer is index.mjs. Both hosts voice it, at faceoffs.md chunk 007 and rules_primer.md chunk 103.

**neutral_zone_systems.md :791.** "just inside each blue line" now reads "just outside each blue line, in the neutral zone" (NHL 1.9). A corpus grep found no other sentence placing them inside.

**Markers:** rink_map 37→37 and neutral_zone_systems 25→25 unchanged. zone_entries 48→49: one ⚠️ ADDED mid-paragraph at :278 (see below); 0 LOST, 0 SPLIT HALF. The Tulsky "failed carry" shot-value claims elsewhere in zone_entries.md were left unchanged; they concern shot value, not faceoff placement.

## After the first commit gate
The gate BLOCKED on zone_entries.md:
- **C6.** The verifier's :276 sentence named "an offside player who knowingly checks the puck carrier", voiced in chunk 021 and priced only as an own-end faceoff. The board-contact cost sits in chunk 019.
- **C4/C11.** The verifier that wrote :265 and :276 was their only reviewer. The gate found that Situation 32 was mis-cited as the carry-in scenario (only Situation 28 is), that HC 6.11(d)(i) "or attempts to make a play" was narrowed, and that IIHF Situation 83.24's "shall" was softened to "allows".
- **Propagation.** Self-test Q4 still asked "failing to carry, or failing to dump?".

**Fixes.** An author owning zone_entries.md made the first round:
- :276 split into :276/:278/:280.
- :278 leads with "**So on a delayed offside, clear the zone and tag up rather than play the puck or go at the carrier, and never carry it in while you know a teammate is offside.**"
- HC 6.11(d)(i)/(ii) in full; 83.7 "may be called"; 83.24 stated flat; USA Hockey 630(c) Note (both limbs) with Situation 32 as the general test and Situation 28 as the carry-in case.
- Q4 reworded to accidental versus deliberate.

**A fresh rules-verifier** (independent of the first) confirmed every citation and modal, and found:
- **(1) cheaper:** "swinging your stick at the carrier" is the NHL and IIHF 61.1 / PWHL 63.1 definition of slashing, priced only at a faceoff;
- **(2)** the :265 "playing on" dropped "deliberately", "knowing" and "against an opposing player";
- **(3)** Situation 28 needs "with no chance of a legal play" (Situation 29 is the honest-effort "No").

**The safety-reviewer** BLOCKED on the same stick swing. It also gave WORDING for a non-checking reader (USA Hockey 604(a)), and confirmed that "checking from behind" on a turned carrier holds in all six books.

All of these wordings were applied verbatim:
- 83.24 now reads "a stick swung at the carrier's stick that knocks the puck loose is ruled one".
- **New ⚠️ at :278:** "**That faceoff prices only the offside, never the hit or the swing: a swing at the carrier is slashing in most books even if it misses; a body check is a penalty in itself wherever your league does not allow hitting; and on a carrier turned to retrieve the puck it is checking from behind**", linked to #a-hit-from-behind.
- :280 gains "with no chance of a legal play".

**The safety-reviewer's narrow re-check** of the merged text:
- The voiced-alone facts line, now naming "an opponent", needed "the draw never prices a hit". It replaced the line verbatim at 298/300; "a hit is penalised too" was rejected as harsher than the book for a clean check in a checking league.
- The two bold runs after the ⚠️ formed only one warn-inline wrapper, leaving the hazards un-ambered. They were merged into one run, and the plugin was run on that paragraph to confirm.
- "Slashing in most books even if it misses" holds: NHL and IIHF 61.1, PWHL 63.1, USA Hockey 634 Note and CARHA 80(c). Hockey Canada's glossary needs a hit.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (census) | Swept every content file except faceoffs.md and rules_primer.md (both fixed in W299), 34 diagram modules and 204 diagrams.json entries. Found the A-list above and recorded a B-list of correctly scoped sites. |
| authoring agent | Verified NHL 1.9, 76.2, 79.3, 80.2, 83.6 and 83.7; IIHF and PWHL equivalents; USA Hockey 612(b), 621(d) and 630(c) with its Note; HC 6.3 and 6.11(d); CARHA 62(d) and 72(f). Rendered all five host pages. |
| rules-verifier | **neutral_zone_systems CONFIRMED** (NHL 1.9; 20.5 ft arithmetic). **Caption CONFIRMED.** IIHF 76.2 has the same "unless otherwise expressly provided" proviso. Two non-blocking imprecisions are covered by the caption's own "the common ones, not the whole rule": power-play dot choice, and an own injured player. Neither is cheaper. **rink_map PARTIAL.** Every limb is true, but "all six books" cited only the NHL. The citation was replaced from the verifier's list, keeping its offered shorter form for the penalty limb (NHL 76.2). **zone_entries PARTIAL.** It was true as written, but the "on purpose" list omitted Hockey Canada 6.11(d)(i) (knowingly playing the puck or an opponent in a delayed offside), IIHF Situations 83.7 and 83.24, and USA Hockey Casebook 630 Situations 28 and 32. That was cheaper by omission. The verifier's replacement sentence and its 282-character facts line were applied verbatim. Hockey Canada's hc.txt and the August print were diffed over 6.3 and 6.11: byte-identical. |
| safety-reviewer | Not run on the first pass, and the gate overturned that declaration (see above). Then run on zone_entries :276–:280 (chunks 019–022), and once more as a narrow re-check of the merged text. Both reports' wordings were applied verbatim. rink_map, neutral_zone_systems and the caption carry no contact act. |
| rules-verifier (second, independent) | zone_entries :262–:280 and Q4. Every citation and modal was confirmed. Three fixes were applied verbatim (see above). |

### C11
The author wrote the four fixes, and a second author wrote the post-gate zone_entries restructure. The coordinator applied every reviewer wording verbatim: the first verifier's facts line and sentence (since superseded), and the second verifier's and the safety-reviewer's. The coordinator also applied the verifier's rink_map citation list, keeping only its penalty limb at NHL 76.2, an option the verifier explicitly offered. The coordinator wrote the plan row and this record.

### Checks after the last content edit
- check_facts exit 0 (6198 facts)
- check_marker_pairs 0 LOST, 0 SPLIT HALF on every changed content file
- check_links --quiet, check_absolutes, check_caption_pairs, check_geometry, check_secrets, check_callout_flow --bare on every host: run after a full `npm run build` (absolute binary) after the final edit

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: all six books plus the IIHF Situation Handbooks and USA Hockey Casebook; British In-House and EIHL Casebook (no faceoff or offside change) |
| D4 Citations | rink_map and zone_entries citations verified rule by rule |
| D5–D8 | not engaged |
| D9 Summary layer | zone_entries In short and Key lines corrected; no other summary layer states a faceoff location (census) |
| D10 Key-facts layer | zone_entries :265, 298/300, voiced alone, with the "never prices a hit" limb |
| D11 Reader safety | safety-reviewer ×2 on zone_entries :276–:280 (checking, slashing, checking from behind, non-checking leagues) |
| D12 Read-aloud | hosts rendered by the author |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build only; text-only change |

## What this method could not have found
- A book that prices knowingly pressuring during a delayed offside under a different heading, such as interference or delay of game.
- Hockey Canada 6.4(b), under which Junior and Senior teams choose the dot after icing or a time penalty, and NHL power-play dot choice. Either may make "on the side it happened" imprecise at those levels.
- Whether the long rink_map citation string reads acceptably aloud. That needs an ear test.
- Paraphrased copies of "any other stoppage" elsewhere: the grep was for the exact string.
- Whether rules_primer.md or body_contact_and_battles.md repeats the HC 6.11(d) "opponent" limb, or the IIHF 83.7 check, priced only by the faceoff. Neither file was opened (plan row).
- Other stick fouls on the carrier during a delayed offside (hook, cross-check). The "never the hit or the swing" wording does not name them.

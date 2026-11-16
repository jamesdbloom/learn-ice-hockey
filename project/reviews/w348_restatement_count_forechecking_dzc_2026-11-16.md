# W348: checking-from-behind restatement count on forechecking_systems and defensive_zone_coverage (16 November 2026)

**Files:**
- content/systems/forechecking_systems.md
- content/systems/defensive_zone_coverage.md
- site/src/diagrams/defensive_zone_coverage.mjs (comment only)
- project/plans/OPEN_ITEMS.md
- this record

## Source
Two plan rows:
- "Next readability lever inside a restructured page" (SG206b, 8 Nov). The checking-from-behind ladder is voiced at many sites before What it costs restates it. Cut the restatement COUNT, not caveats. "Same check for defensive_zone_coverage."
- The SG210 forechecking site-reviewer follow-ups. The "What your book allows" panel is about one phone screen, and the late-hit test is told four times.

Two authors worked one page each:
- **A:** forechecking_systems.
- **B:** defensive_zone_coverage.

## Premises refuted
- **forechecking_systems, row 1.** The prescription to keep "can end your game" at each scene and price the books once is overtaken by later rulings:
  - W319 (13 Nov) named the books at every body scene.
  - Owner decision C (14 Nov) made "can end your game" too weak.
  - `what_it_costs_design.md` forbids a cheaper quantifier.
  
  So the scene tiers at 2-1-2, dump-in and flush stay. They are the shortest named tier, not a restatement. The only true duplicate before What it costs was the head-case explanation in the angling section.
- **forechecking_systems, SG210 item (b).** Already done by 15510522 (9 Nov):
  - one telling, in one book order;
  - "necessary but not enough";
  - the IIHF immediate-vicinity condition;
  - the late-hit block is 7 rows, each a distinct limb.
- **defensive_zone_coverage.**
  - "While it stays off the head" is spoken 0 times, not repeatedly.
  - The pilot's facts :166 counterweight item was already fixed.
  - The restatement claim held: the ladder was voiced in full at five sites.

## What changed
**defensive_zone_coverage:**
- **The per-book sentences.** They moved from the base-shape body (:180) into a new What it costs bullet, "The hit from behind, outside USA Hockey". The Hockey Canada head counterweight is bold in the same unit.
- **The scene sites.** :180, the cycle scene :488, Common Mistakes "Finishing a corner pressure into a back" and KT4 now each carry the same items:
  - the instruction;
  - "In most books a call for checking from behind ends your game every time, and in every book it can";
  - the USA Hockey triggers (forceful at the boards, head first, reckless).
  
  All four also carry the three-book defenceless-into-boards match: Hockey Canada 7.5(c), CARHA 53(b) and USA Hockey 608(c), boards or not. At :180 and :488 it is the same reviewed two-sentence wording, voiced in the same chunk as the scene's instruction (011 and 028).
- **KT4.** It is 118 words (HEAD 123). It now names all three books where HEAD named only Hockey Canada and CARHA. HEAD's closed two-book list without 608(c) is gone.
- **Common Mistakes.** The USA Hockey sentence now leads with 602(a) ("plan on a match and a likely multi-game suspension for any reckless one, boards or not"), then 608(c)'s mandatory case.
- **The full ladder** is now voiced once, in What it costs (chunk 042).
- **The `.mjs`.** A stale comment quoting the old base-shape sentence is updated. Comment only, and the diagrams were rebuilt with identical output.

**forechecking_systems:**
- **The angling paragraph (:223, chunk 014), head case.** The head-case duplicate is gone; the IIHF Rule 48 sentence moved to What it costs as "Once it reaches the head, under the IIHF", with the instruction leading. The paragraph now says "On the head a lesser call is possible, but plan on checking from behind's price anyway".
- **The angling paragraph, its own scene.** Hockey Canada 7.5's own scene is a player "driven head-first into the boards". The paragraph now gives that scene's top tier in the same chunk as the instruction, which is what design §2 asks for:
  - the Hockey Canada 7.5(c) and CARHA 53(b) match into the boards or net;
  - Hockey Canada's head match on such a player, or for any hit from behind meant to injure (7.5(c); 7.6(c); 7.7(c));
  - USA Hockey 608(c), boards or not.
- **The angling paragraph, length.** It is 1,199 chars.
- **"What your book allows" Rule line (:607).** It now leads with the instruction, "Find out whether you may body check: …". It names:
  - the 604(a) and 7.3 age thresholds;
  - female hockey and non-check play;
  - 604(b) "whenever a checking team meets a non-checking one";
  - CARHA and British U10, U12 and Women's NIHL.
  
  It ends "if barred, play the puck". The IIHF women's Read line moved last.
- **Late-hit Read line (:609).** It now opens "Where checking is allowed, …". Voiced alone, the old line told any listener to check.

## Reviews
| Round | Reviewer | Result |
|---|---|---|
| dzc 1 | rules-verifier | All claims OK. "Most books … every time" holds in 5 of 6; USA Hockey 608(a) minor + misconduct is the exception. FLAG: KT4, :488 and CM lost the HC/CARHA/608(c) match for the very play (digging at the boards) that triggers it. |
| dzc 1 | safety-reviewer | MAJOR F1: the :488 cycle scene's own mandatory match was 14 chunks from the instruction. Minors: KT4 pointer unframed, CM reckless match lost, "never just two minutes", amber on the carve-out but not its counterweight. |
| dzc 2 | safety-reviewer | F1 closed (match back in chunk 028). MAJOR: KT4 and CM still had only a pointer. |
| dzc 3 | safety-reviewer | No critical or major. The new KT4 sentence is faithful to 7.5(c), 53(b) and 608(c). Supplied exact wordings for the CM USA Hockey sentence and the KT4 head/neck cut. Both were applied verbatim. |
| fc 1 | rules-verifier | All confirmed. The Hockey Canada "at least minor + GM" on the head is conservative advice, not the book price. The E2 line is accurate but omits CARHA and British non-checking play. |
| fc 1 | safety-reviewer | No critical or major. Minors: "anyway"; IIHF bullet permission-first; facts :609 "check at once" voiced alone. Pre-existing: the :223 scene lacked its 7.5(c) match. |
| fc 2 | rules-verifier + safety-reviewer | MAJOR: :607 "604(b) per fixture" lost the trigger, and the edit dropped the age thresholds. Minor: "as Hockey Canada does on the head" heard as unconditional; the intent limb should cite 7.5(c). |
| gate 1 | commit-gate | BLOCK: :180 (base-shape scene, chunk 011) named the boards/head-first case without its match. The round-1 safety reviewer had noted the dz-collapse-corner caption (chunk 013) covers it "by accident", but no ruling was on record. Repair: the author added the :488 two-sentence match wording verbatim (already rules-verified and safety-reviewed at :488) to :180; the match now lands in chunk 011 with the instruction. |
| fc 3 | safety-reviewer | :607 upheld. MAJOR: "or for one meant to injure" was heard as head-only. Exact fix supplied ("any hit from behind meant to injure") and applied verbatim. Optional :607 wording applied. |

### C11
The coordinator wrote no content. The last edits after review were:
- the reviewer's exact wordings (dzc CM and KT4; forechecking :223 and :607);
- after the gate block, the reviewed :488 match sentences copied verbatim to dzc :180 (placement only; the text had been rules-verified and safety-reviewed at :488);
- three wording trims in the forechecking :223 paragraph to stay at ≤1,200 characters: "is turning away", "names your arrival", "The price comes later". No limb was touched.

## Checks after the last content edit
After a full `npm run build` (absolute binary, exit 0, through check-links) that started after the final content edit:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets, check_counts --update (no change), check-arrivals (0 hard), check_callout_flow --bare (0);
- check_marker_pairs: 0 LOST on both files. One SPLIT HALF candidate on forechecking :609 is a facts line that was never marked; its source paragraph keeps its marker.

## Measurements
| | HEAD | After |
|---|---|---|
| dzc prose words | 18,057 | 18,091 |
| dzc KT4 words | 123 | 118 |
| dzc per-book "ends your game" sentence voiced | 5 sites | 1 (What it costs) |
| dzc scene sites voicing the three-book boards match | 2 of 4 (HC/CARHA only) | 4 of 4 |
| forechecking prose words | 23,490 | 23,524 |
| forechecking paragraphs over 1,200 | 1 | 0 |

**Length is not the measure here** (owner, 9 Nov). The aim is that each scene leads with what to do and carries its own top tier, and that the book-by-book ladder lives once.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier per page per round |
| D4 Citations | rule text quoted from sources/ by every reviewer |
| D5–D8 | not engaged |
| D9 Summary layer | KT4 and CM on dzc reviewed three times; forechecking KTs not changed |
| D10 Key-facts layer | forechecking :607/:609 reviewed twice; dzc facts unchanged |
| D11 Reader safety | safety-reviewer every round |
| D12 Read-aloud | every author and reviewer rendered; chunk distances measured for the scene matches |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, build check-links |
| D15 Rendered site | build + check_callout_flow --bare; no browser pass (text-only change) |

## What this method could not have found
- **Sibling pages** carrying the same scene-without-its-match shape (body_contact_and_battles, zone_entries, winger, defender and others). W348 read two pages only.
- **dzc facts layer.** The defenceless-into-boards match has never been in dzc's facts layer (:166/:477).
- **Other rules for intent to injure.** A CARHA reader's intent-to-injure route (CARHA 48) and USA Hockey 602(a) for a hit meant to injure are not named in forechecking :223.
- **Audio.** Everything was judged from SSML; no ear test of "twelve U", "play the puck" or "such a player".
- **Phone height.** The forechecking "What your book allows" panel's height at phone width was not re-measured in a browser.

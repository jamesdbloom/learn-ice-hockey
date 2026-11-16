# W380: Hockey Canada's head-contact and high-stick tiers, and every book's match suspension, made complete across nine pages (16 November 2026)

**Files:**
- content/systems/faceoffs.md
- content/positions/center.md
- content/positions/winger.md
- content/technique/passing_and_receiving.md
- content/positions/goaltender.md
- content/technique/shooting.md
- content/foundation/rink_map.md
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
The W379 read-only census (record `w379_rules_primer_cross_check_tiers_and_trailer_amber_2026-11-16.md`) ran over content/, excluding rules_primer. It found:
- **16 sites** pricing Hockey Canada head contact or a high stick more cheaply than hc.txt 7.6/7.7/9.5.
- **6 sites** stating CARHA's match suspension (34(a)) beside a Hockey Canada match without HC 4.10(a). Read that way, they imply Hockey Canada has none.

No Key Takeaway was wrong. The census also found a tier missing from the coordinator's own ground truth: 9.5 Interpretation 2 items iv–vi.

**Brief.** One author per file, each briefed on the CLAIM wherever it appears in every layer. The common ground truth is scratchpad w380/brief.md. Every hypothesis was refuted against hc.txt before acting.
- Author D found that the brief's 9.5 Interpretation 2 summary had dropped "causing injury", and kept that condition.
- Author C (rink_map) found a permissive "can" for an injuring interference that the census had not listed.

## What changed, by claim

### Helmet clash or head contact at the dot (faceoffs, center, winger)

**faceoffs**
- **CM :1325.** "under Hockey Canada up to a major and game misconduct or a match" turned three mandatory tiers into a ceiling. It now gives:
  - the J/S moderate minor plus misconduct (7.7(a)/(d));
  - the major and game misconduct, mandatory in minor/female hockey if an accidental clash injures (7.6(b)¶2), and in J/S if highly violent or the head is injured off the ice, glass or boards (7.7(b)¶1, ¶3);
  - a mandatory match (7.6(c)/7.7(c)).
- **Facts :1150.** Gains the 7.7(b)¶3 limb and is re-punctuated so that it voices as separate tiers.
- **Body :1160.** Propagated the same limb.
- **KT3 :1400.** Was written on the old answer: it priced head contact for USA Hockey only. It now adds "under Hockey Canada, plan on an ejection if it injures or is violent". "Up to an ejection" was rejected because it would turn the mandatory tiers into "can".

**center**
- **Facts :518.** Split. The HC tail moved to a new line, **:519** (300/300). It carries the minor/female ladder, scoped to "if an accidental one injures"; the J/S moderate and high-violence tiers; and the match.
- **CM :911.** Gains the J/S tiers. Its head-butt limb was "at least a double minor… a match can be added", which made HC 7.1(c)(i)'s "will" read as "can". It is now "a double minor, or a match with force or injury (7.1)".

**winger**
- **New facts line :558.**
- **Body :581.** Gains 7.7(b) and the match.
- **CM :894.** Was helmet-clash head contact for USA Hockey only. It now carries the HC ladder, with "if an accidental one injures".
- **KT11 :976.** The HC limb is joined into the USA Hockey amber run: "under Hockey Canada, plan on an ejection if it injures or is violent, and a match if meant to injure". KT11 went from about 94 to 114 words. At HEAD this KT carried no HC head-contact tier, so nothing was cut.

### High stick and head contact (passing_and_receiving, goaltender, shooting)

**passing_and_receiving**
- **Facts :442 and the J/S bullet :475.** These priced J/S at a minor, a misconduct and ejection counting only. They now carry the 7.7(b) mandatory tiers, including a cross-check above the shoulders whether or not it injures, and 9.5 Interpretation 2 iv–vi.
- **:474.** Now reads "any cross-check above the shoulders, injury or not". 7.6(b) has no "deliberate".
- **Facts :442.** Dropped the minor/female three-penalty Game Ejection contrast to fit HARD_MAX. Body :474 still carries it, and both reviewers accepted the loss.

**goaltender :1638**
- "A major must be called where the foul injures — under Hockey Canada for each of these but the high stick" now gives the high stick's real tiers:
  - minor/female: mandatory (7.6(b));
  - J/S negligent stick: mandatory (9.5 Interp. 2 iv–vi);
  - J/S accidental: "may be a double minor only for minimal or glancing contact and is otherwise Head Contact, a minor and misconduct at the least".

**shooting**
- **:908.** The minor/female ladder had no tiers. It now reads minor / double minor / discretionary major+GM for violence, then ⚠️ mandatory major+GM if an accidental one injures, and ⚠️ mandatory match.
- **Facts :890.** Gains the minor/female injury must.

### Match suspension (rink_map, forechecking_systems, body_contact_and_battles, passing_and_receiving, shooting)

**rink_map :227**
- "one that hurts someone can end your game" became "…and under Hockey Canada and CARHA it will" (HC 8.3(b); CARHA 66(e) with 30(a)).
- "A match costs more than tonight in every book that writes one" (NHL/PWHL 21.2, HC 4.10(a), CARHA 34(a)).
- USA Hockey 405(c): "games and practices until your case has been dealt with".

**forechecking_systems**
- **Facts :1053 and body :1058.** Gain HC 4.10(a). The body quotation is verbatim.

**body_contact_and_battles**
- **Head-butting facts :2028 and bullet :2043.** Gain HC 4.10(a).
- **Facts :764.** Left as it is. Its from-behind clause already makes an injury a mandatory major, the line is at 299/300, and the block is at HARD_MAX. Both reviewers agreed.

**passing_and_receiving :225 and :474, shooting :538**
- The suspension now covers every book the passage prices: "In all three books" / "any of the three", that is HC 4.10(a), CARHA 34(a) and USA Hockey 405(c).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier R1 (faceoffs, center, winger) | **WRONG, center :519:** "major and game misconduct if it injures" took in an intentional clash. That case is a 7.1(c)(i) match, so the line understated it. Fixed to "if an accidental one injures". Winger :894 got the same fix as recommended. Everything else OK. **Final read:** all seven post-review sites OK. |
| rules-verifier R2 (passing, goaltender, shooting) | **WRONG:** <br>• passing :442 and :475 attached "and injures" to a cross-check that 7.7(b) prices "whether or not injury results". <br>• shooting :908 omitted 7.6(b)¶1's discretionary violence major. <br>Optional, applied: the three-book suspension at passing :225 and shooting :538. <br>**Final read:** all eight sites OK. The "minor and misconduct at the least" floor is confirmed step by step (9.5(a), 9.5 Interpretations 1–2, 7.7 preamble, 7.7(a)/(d)). "Any cross-check above the shoulders" is confirmed against 7.6(b) and 9.2(b) Interpretation 2. |
| rules-verifier R3 (rink_map, forechecking, body_contact) | All seven sites OK. Optional, applied: 405(c) "until your case has been dealt with" (it had read "heard"). |
| safety-reviewer S1 (faceoffs, center, winger, goaltender, shooting) | **Major M1:** goaltender :1638 "an accidental one that injures is a double minor" ignored 9.5 Interpretation 2's "only… minimal or glancing contact". This is permissive, and fixed. S1's claim that "negligent" is not in the book was wrong: it is at hc.txt :7375 and hc_layout :5900. S1 retracted it in the final read. <br>**Minors (all applied):** <br>• m1: center :519 lacked the match. <br>• m2, m3: center :911 and faceoffs :1325 lacked the J/S moderate tier. <br>• m4: faceoffs :1150 garden-pathed. <br>• m5: winger KT11's HC limb was plain and lacked the match. <br>• m6: shooting :538 said "either book". <br>• m7: shooting :908's match was plain. <br>• m8: faceoffs KT3 was written on the old answer. <br>**Final read:** CLEAR. |
| safety-reviewer S2 (passing, rink_map, forechecking, body_contact) | **Major:** passing :475/:442, the same cross-check finding as R2. **Minor:** passing :474 "deliberate". The :442 facts loss and :764 were judged acceptable. **Final read:** CLEAR. Optional, applied: :442 "a high cross-check", which keeps the neck in. |

### C11
The coordinator wrote no content. Every post-review edit is one reviewer's text, or the author's text read by both reviewers in a final read. Where two reviewers offered different texts for one site, a single text was chosen and not merged:
- **passing :475/:442:** R2's text.
- **shooting :908:** R2's text, with S1's request carried by a second glyph that the author chose.
- **center :519:** R1's fix plus S1's match, written by the author to fit the cap.

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0. `dist/index.html` is dated 20:33:26, and `find content site/src -newer` returns nothing.
- check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets: pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_caption_pairs: 0 violations.
- check_marker_pairs: 0 LOST and 0 SPLIT on all nine files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | three rules-verifiers, two reads each, against: <br>• HC 4.7(c), 4.8, 4.10(a), 6.2(c), 7.1, 7.5, 7.6, 7.7 (preamble and Interpretations 1–3), 8.2(b), 8.3, 8.6(b), 9.2 (Interp. 2), 9.3(b), 9.5 (Interpretations 1–2) <br>• CARHA 30(a), 32(d), 34(a), 48, 53(b), 66 <br>• NHL/PWHL 21.2, 56/57 <br>• IIHF 56 <br>• USAH 405(c) |
| D4 Citations | 4.10(a), 405(c), 21.2, 8.3(b), 66(e) and 30(a) added; each verified, and the quotations are verbatim |
| D8 Counts | "every book that writes one", "all three books", "any of the three", "in every division", "at least a minor" — each re-derived |
| D9 Summary layer | faceoffs KT3 and winger KT11 changed and read voiced alone; every other KT carrying the claim was checked and left, with reasons in the author reports |
| D10 Key-facts layer | facts lines changed at faceoffs :1150, center :518/:519, winger :558, passing :442, shooting :890, forechecking :1053 and body_contact :2028; each read voiced alone |
| D11 Reader safety | two safety-reviewers, two reads each |
| D12 Read-aloud | every page rendered by its author into its own `--out` directory, with changed units read de-tagged |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 20:33:26 build (below) |
| D5–D7, D13 | not engaged |

**D15.** The site-reviewer covered all nine pages in Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark: 36 loads.
- Every page's worst 400px window is unchanged:
  - faceoffs 43.4
  - center 36.6
  - winger 44.2
  - passing 26.9
  - goaltender 46.7
  - shooting 43.9
  - rink_map 27.7
  - forechecking 41.0
  - body_contact 48.5
- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors and no horizontal scroll.
- shooting's two new amber runs form, each with its glyph leading. winger KT11 is one 233-character amber run. center's amber is identical to HEAD.
- Some 1440px windows are over 50% on six pages. There is no desktop baseline to compare against, and these are the known full-height-SVG artefact.

## Found, not fixed (plan rows)
- **shooting :908's J/S "up to a double minor with an injury"** lacks 9.5 Interpretation 2's "minimal or glancing" condition, which goaltender now carries. The next sentence ("a floor, not a ceiling") keeps it safe. Fix sketch: "…and up to a double minor with an injury from minimal or glancing contact."
- **The minor/female three-head-contact-penalty Game Ejection** has no facts-layer carrier on passing_and_receiving. Body :474 carries it, and the facts block is at HARD_MAX.
- **winger Common Mistakes :894 and KT11** do not price CARHA 50 or USA Hockey 620(c) for the helmet clash. Author C reported this; it is outside this claim.
- **body_contact_and_battles' head-butting section** prices the USA Hockey 619(b)/602(a) and NHL/PWHL 47 matches with no suspension stated beside them. The suspensions are voiced at :835. Author I reported this.
- **Low and optional items from the census:** defender :436 (HC head-hit facts beside USA Hockey's "must"), neutral_zone_systems :362 (HC charging 7.4(b) injury must).
- **Unresolved:** the HC 7.1 vs 7.6/7.7 precedence for a deliberate head-butt (7.6 "supersedes any other rules"), and 6.2(c) vs 7.6 for a clash at the dot. The text does not settle either. The corpus takes the harsher reading.
- **Desktop 1440 windows over 50%** on six pages have no baseline. Measure them in a future census.

## What this method could not have found
- A unit that prices Hockey Canada head contact or a match suspension without any of the census's search strings.
- Hockey Canada Member or branch regulations outside the playing rules.
- Real devices, other browsers and screen readers.

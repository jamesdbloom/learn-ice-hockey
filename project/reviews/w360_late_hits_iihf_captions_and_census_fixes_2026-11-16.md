# W360: late hits under CARHA, IIHF checking from behind, two long caption warnings, and closed book lists across eight documents (16 November 2026)

**Files changed:**
- content/systems/forechecking_systems.md
- content/technique/shooting.md
- content/systems/defensive_zone_coverage.md
- content/systems/special_teams.md
- content/technique/body_contact_and_battles.md
- content/systems/game_management.md
- content/positions/center.md
- content/off-the-ice/conditioning_and_recovery.md
- site/src/diagrams/forechecking_systems.mjs
- site/src/diagrams/rules_primer.mjs
- site/src/data/diagrams.json (rebuilt; only the forecheck-212 and icing-the-race-and-the-dot captions changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave covers the following rows from W359 (record `w359_density_and_charge_lists_2026-11-16.md`):
- **Row (1):** forechecking's late-hit section omitted CARHA.
- **Row (2):** forechecking stated the IIHF checking-from-behind price two ways.
- **Row (3):** two caption warnings ran long.
- **Row (5):** closed lists in other documents.
- **W359 commit-gate note:** a comma splice at forechecking :1013.

## What changed
**A, forechecking_systems.md**
- **:1013:** the comma splice is now a full stop, so the sentence no longer reads as "reckless under USA Hockey, Hockey Canada and CARHA".
- **"Late, sideways and third-man hits":**
  - New "Under CARHA." bullet, citing 49(a), 30(a), 66(a)/(e) once another skater has touched the puck (66(a)(1) Note 1), and 48(a).
  - Facts line :1067 split into two complete lines:
    - "No book caps a late hit at a minor": the NHL and PWHL a major "which ejects if for injury", the IIHF can eject, Hockey Canada and CARHA mandatory if hurt, USA Hockey 640(g).
    - "A late hit meant to injure is a match in every book but the IIHF": NHL/PWHL 21.1, Hockey Canada 8.3(c), CARHA 48(a), USA Hockey 602(a); "the IIHF, a major and game misconduct (56.5), with supplementary discipline beyond it (56.8)".
- **IIHF checking from behind:** at all nine sites (:319, :339, :628, :701, :712, :750, :765, :972, :979) the IIHF is now grouped with Hockey Canada. The wording is "ejects unless it reaches the head; on the head, plan on it", because:
  - IIHF 43.2 has no minor;
  - 43.3 is a major and an automatic game misconduct;
  - 48.1 "supersedes all similar actions regarding hits to the head and neck", and 48.2 allows a minor.
  The NHL, PWHL and CARHA keep "any call ejects": none has a supersession clause, and CARHA's Rule 53 Note forbids substituting another penalty.

**B, captions** (caption amber runs from the first ⚠ to the end of the caption)
- **forecheck-212:** the two sentences are reordered, with no word changed in that step. The amber went from 631 to 196 characters and now covers the instruction: "Go hard at the carrier, never through them… never finish into their back." The "Find out first whether you may body check" scope and its list are now plain caption text. After review, "; and CARHA in every game" was added to that list (CARHA 49(a); no CARHA division permits checking). This matters most on center and game_management, which embed the diagram alone.
- **icing-the-race-and-the-dot:** the glyph moved and no word changed. The amber went from 634 to 309 characters and now covers the receiving posture. The scope sentence and the boarding / 624(d) limb are plain caption text. The module comment was updated to match.

**C, census (read-only).** It covered 40 documents and about 1,080 units pairing an act with a price. It found 4 defects and 9 minors, fixed by authors D, E and F below.

**D: shooting, defensive_zone_coverage, special_teams** (playing_without_the_puck was checked and left unchanged, because :995 and :999 share spoken chunk 064)
- **shooting**
  - **facts :286:** split into two lines. The first is the goalie-charge mandatory set: Hockey Canada 8.5(b) anywhere, CARHA 52(b) in the crease or on injury, and USA Hockey 607(b) if reckless (607(b) was missing). The second is "Driving into a goalie's back is checking from behind — plan on ejection in every book but USA Hockey, where it is at least a minor and misconduct (…)".
  - **The same claim at :508, :536, :914 and :947:** narrowed to "Driving into". USA Hockey 607(d) Note 1 sends accidental goalie contact to interference.
- **defensive_zone_coverage CM :865:** the amber now reads "Hockey Canada and CARHA if they are hurt".
- **special_teams**
  - **facts :1181:** split into two lines, adding USA Hockey 607(b) and a CARHA 66(e) injuring-interference line ending "any such major ejects (30(a))".
  - **:1172 amber, KT10 and the CARHA bullet:** CARHA's injuring-interference limb added.

**E: body_contact_and_battles, game_management**
- **body_contact facts**
  - **:662:** CARHA 49(a) added to the late-hit line; the NHL/PWHL wording is now "which ejects if for injury".
  - **:1363:** NHL and PWHL 42.5.
  - **:529 and :1408:** new CARHA 49(a)/30(a) lines.
- **body_contact body**
  - **:679, :1373 and :1447:** CARHA or PWHL limbs added.
- **body_contact CM**
  - **:2050:** CARHA mandatory on injury.
  - **:2082:** Hockey Canada and CARHA on violence and on injury.
- **game_management**
  - **:1192 and :1247:** the CARHA price on injury.
  - **:1241:** "…and so do IIHF 101.1 in women's hockey and the PWHL for an illegal hit (52.5)."

**F: center, conditioning_and_recovery** (faceoffs was checked and left unchanged)
- **center**
  - **facts :733:** rewritten, one book per clause and no slash. Hockey Canada 7.3(b) and CARHA 49(a), 30(a) allow the major on violence and must give it on injury; USA Hockey 604(d) must if reckless, hurt or not; trying to injure is a match in all three.
  - **:742:** "Both books escalate a barred check, as CARHA does."
  - **:744:** "…a minor or major under CARHA — and ⚠️ **no minor is a ceiling: all three escalate it…**".
- **conditioning_and_recovery KT11:** "Where they bar it". "They" refers to the two books named in the same unit.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (A and B) | No unit wrong. IIHF 48.1 supersession confirmed on the rule text; no IIHF Situation rules on a hit from behind to the head. NHL, PWHL and CARHA have no supersession (search for supersed\|precedence\|in lieu\|instead of found none), and CARHA's 53 Note forbids substitution. Late-hit lines and the CARHA 66(a)(1)/Note 1 reading confirmed. The IIHF has no match penalty. Both captions are word-identical to HEAD apart from order. |
| safety-reviewer (A and B) | No critical or major. Minors: M1, late-hit line 2 gave no IIHF price (applied); M2, the forecheck-212 list omitted CARHA (applied); M3, the icing trade is acceptable. The caption trades were judged safe; the amber now carries the injury instruction. The safety reviewer raised the IIHF flat "ejects off the head" against about 15 sibling documents that still say "plan on it". The coordinator kept it: three rules-verifiers (W359 and W360 twice) upheld 43.2/43.3, and the siblings point the same, cautious, way (plan row). |
| rules-verifier (D, E, F and the A/B minors) | No permissive error. Six wording fixes, all applied: center :733 order; special_teams "any such major" (30(a) excepts an accidental high stick); bcb :661 "which ejects if for injury"; game_management PWHL scope; forechecking :1068 add 56.8; shooting "Driving into". CARHA 66(e) reaching a goalie is a plain reading; no ruling exists. |
| safety-reviewer (D, E, F) | No critical or major. Four minors applied with the reviewer's text: center :733 (three parses, "/" voiced as "or"); shooting :287 ("too" had no antecedent and the line was the cheapest true statement); bcb CM :2082 (violence limb); forechecking :1068 (56.8). KT10, the CARHA 66(e) reading and conditioning KT11's "they" are clear. |
| safety-reviewer, final read of all post-review edits | All seven edits CLEAR, plus author A's flag on forechecking :1077 "with a game misconduct only where it injures": it errs harsh, so no change is needed. shooting's "Driving into" does not read as permitting non-deliberate contact: "Pull up" leads at every site, and the "unnecessary contact" and "light hit … at least a minor plus a misconduct" limbs stand. |

### C11
The coordinator wrote no content. Every post-review edit uses a reviewer's prescribed text, except:
- **shooting's "Driving into" narrowing at four further sites:** the rules-verifier's point, carried by author D and cleared by the final read;
- **bcb :529/:1408 single bracket:** the safety reviewer's note.

## Checks after the last content edit
A full `npm run build` (absolute binary) exited 0, ran through check-links, and produced `dist` at 13:29. It started after the last content edit (13:28:15). `find content site/src/diagrams -newer site/dist` returns nothing.

Then:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets and check_counts --update (no change): all pass;
- check_callout_flow --bare: 0;
- check_caption_pairs: 0 violations;
- check_marker_pairs: 0 LOST and 0 SPLIT on all eight content files;
- check_readability: 0 paragraphs over 1,200 characters.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | two rules-verifier passes covering every new claim |
| D4 Citations | rule text quoted from sources/ |
| D8 Counts | "every book but the IIHF", "all three", "in every game" and "every book but USA Hockey": each verified book by book |
| D9 Summary layer | KT10 (special_teams) and KT11 (conditioning) changed and were reviewed. Other KTs were checked by the authors' layer tests |
| D10 Key-facts layer | every changed facts line was read voiced alone by the safety reviewer |
| D11 Reader safety | safety-reviewer, three passes |
| D12 Read-aloud | rendered SSML for forechecking, rules_primer, shooting, center and the other stems; marked units unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 13:29 build, nine pages, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark. Every changed run forms span.warn-inline; 0 bare glyphs, 0 panels, 0 console errors in 36 loads, no off-origin requests. **forecheck-212:** amber 196 characters (4 lines at 400px); worst window 45.9% at 400px (W359: 81.9%); 1440px 88.3% by the usual metric, which is an artefact (counting the diagram's text it is 46.8%; amber is 12% of the window). **icing caption:** worst window 31.8% at 400px (was 65.5%). **forecheck-212 alone on center and game_management:** the amber forms and "and CARHA in every game" is present. |
| D5 Provenance, D6 Self-narration, D7 Numeric ownership, D13 Folklore | not engaged |

## Found, not fixed (plan rows)
**Amber density**
- forechecking :339's run ("Called as checking from behind, that hit ends your game…") is 396 characters, 11 lines at 400px, with a 47.9% worst window. W360 edited its words.
- shooting's "Pull up before you reach a goalie who is turned away" run is 437 characters (60.8% window) and its CM twin is 395 characters (52.6%). Both were pre-existing in length.

**Long caption warnings, now the worst window on several pages**
- forechecking: 880 characters (twice, in the 1-3-1 section) and 608 characters;
- center and game_management: a 776-character faceoff caption;
- defensive_zone_coverage: 812 characters.

**IIHF wording elsewhere.** About 15 sibling documents still say "under the IIHF, plan on it" for checking from behind (special_teams, zone_entries, center, offensive_zone_play, defender, defensive_zone_coverage, body_contact_and_battles, rules_primer, playing_without_the_puck), and the captions forecheck-122 and forecheck-131 say "mandatory … in the IIHF book for a hit the referee judges reckless". This is consistent in direction, but the wording is open for a corpus-wide decision.

**Metric limitation.** The amber-share metric excludes diagram text, so 1440px caption windows read near 100%. A fairer variant is needed.

**Smaller items**
- bcb :93 still has two back-to-back brackets, "(30(a)) (CARHA-affiliated adult leagues only)".
- forechecking :1077 "only where it injures": optional exact wording.
- defensive_zone_coverage :810: an opponent's-penalty sentence naming only Hockey Canada.
- game_management :173/:185/:1286 and KT14 are borderline open lists.
- center facts :100 "Incidental board contact is legal in both books" (CARHA 49(c) is narrower).

## What this method could not have found
- **Act wordings without the census keywords.** "Run the goalie" and similar phrasings were not reached. Diagram captions other than the two edited were not swept for closed lists.
- **Readings without a ruling.** IIHF 48.1 reaching a head-high hit from behind, and CARHA 66(e) reaching a goalie, are readings of the rule text; no official ruling covers either.
- **The USA Hockey Casebook on goalie contact from behind** was not read.
- **Real devices.** No real phone, Safari or Firefox was used.

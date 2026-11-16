# W366: the remaining over-half screens, the delay-of-game census on its last three documents, and a USA Hockey head-contact gap in a Key Takeaway (16 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/hockey-iq/risk_management.md
- content/positions/defender.md
- content/positions/goaltender.md
- content/systems/special_teams.md
- content/technique/body_contact_and_battles.md
- site/src/diagrams/switching_positions.mjs
- site/src/diagrams/breakouts.mjs
- site/src/data/diagrams.json (rebuilt; only forcing-them-outside and breakout-wheel changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave takes the W365 plan rows (record `w365_back_turned_caption_and_delay_of_game_census_2026-11-16.md`):
- (2): five pages over half a phone screen at 400px;
- (5): four goaltender delay-of-game sites;
- the four documents census D did not sweep.

A read-only census (E) swept defender, special_teams and body_contact_and_battles at HEAD. It found no DEFECT, nine MINORs in defender, and one harsher-direction MINOR and one nit in special_teams; body_contact_and_battles had nothing.

## What changed
A caption's amber runs from its glyph to the end of the caption. An inline amber run ends where its `**` ends.

**Amber density**
- **risk_management "Slew-footing"** (no word changed):
  - run A went from 241 to 39 characters: "Do not plan on a minor for a slew-foot.";
  - run B went from 135 to 55 characters: "a mandatory match in the NHL (52.2) and the PWHL (53.2)". No other book makes a slew-foot an unconditional mandatory match (rules-verified).
- **rules_primer KT8.**
  - The slew-foot run went from 382 to 97 characters, with no word changed: "A slew-foot ejects you under the NHL, PWHL, IIHF and USA Hockey, and Hockey Canada and CARHA can:".
  - At the safety reviewer's request, a second run now covers the stick: "⚠️ **CARHA, Hockey Canada and USA Hockey make a cross-check above the shoulders a major and game misconduct** (CARHA and Hockey Canada any — in Hockey Canada minor and female hockey, a deliberate cross-check reaching the head or neck, and even an accidental one is still a head-contact minor, 7.6(a); USA Hockey a careless or intentional one to the head, face or neck, 620(b))." See Reviews and "After the first commit gate".
- **forcing-them-outside caption** (switching_positions.mjs). The glyph moved and no word changed. The amber went from 401 to 67 characters: "Find out which book you are under. Nothing here ends in contact."
- **breakout-wheel caption** (breakouts.mjs).
  - Three of the four glyphs were removed, and each book's net-front-screen rule is now plain text.
  - After the safety Major, the amber became "Screen only where your book allows it, and never slide across into the forechecker's path: that is interference everywhere, and two minutes is only the floor." (161 characters, down from 470).
- **body_contact_and_battles "What actually gets called" table** (no word changed). The amber was shortened in five cells:

| Cell | Amber now |
|---|---|
| High-sticking | "no defence over a crouching opponent" |
| Tripping | "No fall is needed" |
| Slew-footing | "Four of six eject you at the floor." |
| Charging | "Two strides is already charging" |
| Clipping | "Under Hockey Canada stay above the hips" |

**Delay of game (words changed)**
- **goaltender**
  - :1693: "It is two minutes under the NHL, IIHF and PWHL — but a misconduct in every book if you mean to put it out of reach of an official retrieving it."
  - :767: PWHL added, and "none of the three".
  - :721 facts: "under NHL and IIHF rules" changed to "under most books". There was no room to add the PWHL, and for a goalie five of six books reach the act.
  - :746 and :762: PWHL 65.2(iii) added.
  - Sources trailer: the PWHL entry is completed.
- **defender**
  - Key focus :21 and KT6: "…can cost two minutes, and under NHL, IIHF and PWHL rules even by accident".
  - facts :78, :79 and :741: the PWHL is cited ("in all six books").
  - :748: CARHA added.
  - Two new facts lines in "Over the glass": the PWHL's 65.2(iii) and its NOTE; and "CARHA writes no strict over-the-glass minor for a skater — Rule 75(b) reaches only … 'deliberately …'".
  - Check-yourself Q3: PWHL added.
- **special_teams**
  - :1252 CM: the example was "ringing a clear off the glass", which is the very case Hockey Canada (Interpretation 5 to 10.1(a)) and CARHA (55(a) Note 1) exempt. It is now "A goalie's stick clear going straight out over the glass…", with that exemption stated and the NHL/IIHF/PWHL zone limb added. Its amber is "plan on the stricter reading for a clear that goes straight out: the cost of being wrong is a 5-on-3."
  - :1136 facts: now "whoever touched it last (NHL and IIHF 85.1, PWHL 87.1)". It also adds IIHF 63.2(II).

## Reviews
| Reviewer | Result |
|---|---|
| census E (read-only, HEAD) | No DEFECT. Nine MINORs in defender (missing PWHL/CARHA, unscoped strict limb). special_teams :1252 was harsher than the books and contradicted its own body; :1136 had a citation nit. body_contact_and_battles was clean. |
| rules-verifier | No unit wrong in a way that penalises a reader. It confirmed:<br>• NHL 52.2 and PWHL 53.2 are the only unconditional slew-foot matches (IIHF 52.2 major + GM at discretion; USAH 639(b) major + GM minimum; HC 8.8 match only on injury; CARHA 86(b) discretionary; 48(c) kick);<br>• the official's-reach misconduct is mandatory with an intent word in all six books;<br>• "under most books" holds for a goalie;<br>• CARHA has no rule reaching a skater's accidental clear, after a full act sweep;<br>• the HC/CARHA glass exemption.<br>It also corrected the coordinator's premise: IIHF 85.1 does carry "regardless as to which Player…". So the original :1136 quotation was accurate, and the fix now cites NHL and IIHF 85.1. |
| safety-reviewer | **Major: breakout-wheel.** The amber forbade only sliding, so a skimmer looking at the D2 picture learned "stand still there", even though a still screen is a minor under USAH and HC/CARHA give no right to it. Fixed with the reviewer's text. **Minor: KT8.** The stick half was no longer amber; fixed with a second run. Cleared: forcing-them-outside, the table cells, risk_management, special_teams :1252, and defender Key focus and KT6. |
| safety-reviewer, final read | breakout-wheel and :1136 are CLEAR. **Major: rules_primer KT8.** The stick sentence named only CARHA and Hockey Canada, and voiced "a reckless … cross-check ejects" for USA Hockey. But USAH 620(b) (usah.txt :4299–4302) makes a careless or intentional head/face/neck contact, stick included per the 620 Note, a mandatory major + GM. This gap predates W366, and the new amber made it prominent. It was fixed with the reviewer's text, putting USA Hockey inside the amber. The body (:448) and CM :1140 already carried 620(b). The NHL, PWHL and IIHF cross-check majors are discretionary (59.3), so the three-book mandatory list is complete. |


## After the first commit gate (BLOCK on KT8)
The gate blocked on rules_primer KT8 (C4/C6/C11). The bracket prescribed by the final read had become a scope list in which Hockey Canada's only scope was "minor and female hockey". That dropped HC 7.7(b) for Junior and Senior, which is flat: "Any player who strikes an opponent above the normal height of their shoulders with a cross-check will be penalized with a Major penalty and a Game Misconduct penalty, whether or not injury results". So it understated a mandatory ejection for adult Hockey Canada players. HEAD's bracket had been an exception, not a scope.

The repair took three rounds:
1. The author restored "Hockey Canada any". It rejected the coordinator's sketch "also", because Interpretation 2 to 7.6(b) narrows the rule rather than adding to it, and wrote "though … aimed at a deliberate one".
2. The rules-verifier passed that (OK), and confirmed that NHL 59.3, PWHL 60.3, IIHF 59.3 and 48.3 are discretionary, so the three-book list is complete. The safety-reviewer raised a minor: "though … aimed at" heard aloud reads as an exemption with no floor, whereas HC 7.6 preamble/7.6(a) make even accidental head contact a minor in minor and female hockey.
3. The reviewer's bracket was applied verbatim: "(CARHA and Hockey Canada any — in Hockey Canada minor and female hockey, a deliberate cross-check reaching the head or neck, and even an accidental one is still a head-contact minor, 7.6(a); USA Hockey …, 620(b))". The author verified 7.6(a) in the source.

The rules-verifier also noted that PWHL 48.2/48.5 make an avoidable hit with the head as the main point of contact a mandatory major plus game misconduct. Whether a stick cross-check counts as a "hit" under 48.1 is unresolved, so this is a plan row and was not added to the amber.

The rebuild ran after this edit, and every check passed. The KT8 window was measured at 31.8% at 400px on the earlier bracket. The final bracket changes plain text only, so the amber is unchanged.

### C11
The coordinator wrote no content. Every post-review edit uses a reviewer's prescribed text, except two, which the final read cleared:
- the authors' own wording at goaltender :721 ("most books", for the cap);
- the defender facts lines.

## Checks after the last content edit
`build-diagrams` ran once. A full `npm run build` (absolute binary) then ran after the final edit, exited 0, and ran through check-links. `dist/index.html` is dated 16:08:02 (the rebuild after the KT8 repair; the first final build was 15:58:53), and `find content site/src/diagrams -newer` returns nothing. The built page carries the new KT8 run.

Then:
- check_links --quiet, check_facts, check_absolutes (caption layer certified), check_geometry, check_secrets and check_counts --update (no change) all passed;
- check_callout_flow --bare: 0;
- check_caption_pairs: 0 violations;
- check_marker_pairs: 0 LOST and 0 SPLIT on all six content files.

check_readability shows long Key Takeaways 52 → 53. The new one is defender KT6, which crossed 60 words when it gained "and under NHL, IIHF and PWHL rules", a correct narrowing.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | census plus rules-verifier on every changed claim |
| D4 Citations | rule text quoted from sources/ |
| D8 Counts | "mandatory match in the NHL and the PWHL", "Four of six", "in all six books", "every book", "most books" (goalie), "three books" for the head-high cross-check: each re-derived |
| D9 Summary layer | rules_primer KT8, defender KT6 and Key focus changed, each read voiced alone |
| D10 Key-facts layer | the changed and new facts lines in goaltender, defender and special_teams, each read voiced alone |
| D11 Reader safety | safety-reviewer, two passes |
| D12 Read-aloud | rendered SSML for every changed stem; captions keep their "Important."; marked units unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 15:54 build (eight pages, four cells) and a re-measure of rules_primer KT8 on the 15:58 build. Every changed run forms span.warn-inline, including the six mid-cell table glyphs. 0 bare glyphs, 0 panels, 0 console errors, and no horizontal scroll. Worst 400px windows are in the table below. |
| D5–D7, D13 | not engaged |

| Site (worst 400px window) | Before | After |
|---|---|---|
| risk_management Slew-footing | 61.4% | 48.5% |
| rules_primer Key Takeaways | 53.8% | 31.8% |
| forcing-them-outside | 60.6% | 44.5% |
| breakout-wheel | 60.6% | 19.6% |
| body_contact table | 56.3% | 27.2% |

## Found, not fixed (plan rows)
- body_contact_and_battles is still over half a phone screen: 54.7% at 400px, from a pre-existing 464-character run in "Arrive with body position, not just with speed".
- The breakout-wheel caption names no IIHF position for the net-front screen. This is pre-existing; the new "your book" amber covers it only in general.
- HC 7.1(c)(iii) also gives a mandatory match for attempting to kick or deliberately kicking an opponent. The slew-foot prose names only CARHA for a kick, and whether HC 7.1(c) reaches a slew-foot turns on "not otherwise covered". This is unresolved.
- IIHF 52.2 is "at their discretion", yet "ejects" (KT8, the table, risk_management) states it flat. 52.2 has no lesser tier, so this errs harsh.
- Two places carry the "regardless as to which player" wording and were not checked for citation precision: on_ice_communication :184 and faceoffs :1248.
- W365(4) is still open: no one has swept whether abuse-of-officials or thrown-object rules reach a puck shot at an official.

## What this method could not have found
- Whether the NHL or PWHL treat a puck that clips the glass as "deflected". There is no NHL casebook on disk.
- Act wordings outside the census keywords.
- Real devices.

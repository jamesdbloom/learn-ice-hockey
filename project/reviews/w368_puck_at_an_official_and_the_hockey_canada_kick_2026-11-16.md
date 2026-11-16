# W368: the price of a puck shot toward an official or the crowd, Hockey Canada's kick match beside CARHA's, and a PWHL head-high cross-check (16 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/hockey-iq/risk_management.md
- content/systems/game_management.md
- content/hockey-iq/playing_without_the_puck.md
- content/positions/goaltender.md
- content/foundation/on_ice_communication.md
- content/technique/body_contact_and_battles.md
- content/systems/defending_the_rush.md
- content/systems/defensive_zone_coverage.md
- site/src/diagrams/body_contact_and_battles.mjs (comment only; no caption changed, so diagrams.json did not change)
- project/plans/OPEN_ITEMS.md
- this record

## Source
W367 plan row "From W367" items (1)–(5), from the record `w367_last_over_half_page_and_four_rules_questions_2026-11-16.md`.

Item (1) was the read-only research finding that "the NHL, PWHL and IIHF stop at the minor" for a puck fired after the whistle omits the aggravated case. That is a permissive defect. The commit-gate note from W367 (the code comment "+33" should be "+38") was also taken.

A census by the coordinator found a fifth carrier of the CARHA-only kick claim, defending_the_rush, and added author E for it.

## What changed

**A. The puck shot toward an official or the crowd** (authors A, B, C)

Under the NHL, PWHL and IIHF, a plain clear after the whistle is still a minor (NHL 63.9, PWHL 65.9; 63.2(ii)). The aggravated cases are now priced as follows:
- **Out of an official's reach:** a misconduct in all six books (39.4(ii); USAH 601(c)(3); HC 11.1(d)(iii); CARHA 46(b)(3)).
- **Toward an official:**
  - NHL, PWHL and IIHF: a game misconduct (39.5(vi)) plus a Category III suspension (40.4) — at least three games in the NHL, at least one in the PWHL, and left to the disciplinary process in the IIHF.
  - Hockey Canada and CARHA: a match for threatening an official, on the reading that a shot puck is a threat (HC 11.5(c)(i), CARHA 71(c)).
  - Author A found the Hockey Canada 11.5(c)(i) route, which the research had missed.
- **At a spectator:** plan on a game misconduct (23.8 "throws any object"; a shot puck counts as thrown only on a reading). Hockey Canada 7.1(c) and CARHA 48(a) give a match for an attempt to injure.

The instruction is everywhere the same: never shoot it toward an official or the crowd, and plan on being thrown out in any book.

Sites:
- **rules_primer:**
  - :93 (amber "Never shoot it toward an official or the crowd: in every book it can end your game.");
  - :566 (the minor scoped to "a plain clear");
  - a new paragraph after :568 (the safety reviewer's 588-character version);
  - CM :1164.
- **risk_management:**
  - :385 (amber "Never fire it toward an official or the crowd: plan on at least a game misconduct.");
  - facts :352 (substituted);
  - CM :931.
- **game_management:** :1124, :1262, :1264 (the home of the per-book detail), :1288 and KT12 :1349.
- **playing_without_the_puck:** a new facts line after :361, and :380.
- **goaltender:** :767 and :1693.
- **on_ice_communication:** :190.
- **team_play_and_culture:** checked and correct as written.

**B. Hockey Canada kick beside CARHA** (authors A, B, D, E)

Hockey Canada 7.1(c)(iii) makes "[a]ttempting to kick or deliberately kicking an opponent" a mandatory match. The book does not say whether a kicking slew-foot falls under 7.1(c) or 8.8: 8.8 says "knock, drag, or sweep", while the Glossary says "knock or kick". So the advice is to plan on the match.

Sites:
- **rules_primer:** KT8 and the body bullet :488.
- **risk_management:** :904, :908 (amber "For a kick, plan on the match"), :929, :992, and facts :757.
- **body_contact_and_battles:**
  - the table cell :1733 (one character under the table cap);
  - the HC body bullet :1860;
  - facts :1841, where the kick was folded into the HC line because the block is at HARD_MAX;
  - CM :2081;
  - KT9 :2182.
- **defending_the_rush:** facts :1022, :1038 ("under either") and :1040.

"A called slew-foot" now appears at rules_primer KT8 and risk_management :929. IIHF Situation 52.1 lets a minimal act be called roughing or tripping instead, so the qualifier is needed there.

**C. PWHL head-high cross-check** (author A). rules_primer :444 now reads: "at least a high-sticking minor (61.2), and a cross-check can be a major and game misconduct (60.3, 60.5); its head-contact rule … does not say whether it reaches a stick (48.1, 48.5), so do not plan on the minor." The PWHL was not added to KT8's mandatory list.

**D. Citations.**
- risk_management facts :356 and :375 now cite the PWHL 65.2(iii) Note and 65.2(ii).
- defensive_zone_coverage :841 now reads "NHL and IIHF 85.1 and PWHL 87.1 … 63.2(ii) (PWHL 65.2(ii))".
- The body_contact_and_battles.mjs comment "+33" was corrected to "+38".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (tariff) | 16 of 17 sites OK. 39.5(vi)'s heading governs, so item (vii)'s persistence ladder does not soften it, and IIHF Situation 39.7 applies the game misconduct directly. No British book amends 23, 39 or 40; a British suspension comes from EIHL DOPS or EIH/SIHA. **WRONG:** rules_primer called 39.5(v) (protest) "a plain reading" for a shot puck, but its verb is "throws" and 39.5(vi) says "throws or shoots". **Pre-existing finding:** HC 10.5(d), see the plan row. |
| rules-verifier (kick, PWHL, citations) | Every rule claim OK. "Called" is accurate for each named book, and every "both" has its antecedent. One defect: two quotations lowered HC's capital "Attempting". Fixed with "[a]ttempting". |
| safety-reviewer (tariff) | **M1:** the protest limb was stated in rules_primer only, and four units in four other documents contradicted it. **M2:** risk_management §9 carried the official/crowd hazard in the body only. Minors: the protest sentence overstated its certainty, the new paragraph was too long, a facts line had a dangling "it", and the British suspension was scoped wrongly. |
| safety-reviewer (kick, PWHL) | **Critical-shape:** the bcb slew-footing facts block had no HC kick. **Major:** the rules_primer body did not carry what KT8 asserts. Minors: the bcb CM :2081 ending, risk_management :356 PWHL 65.2(ii), and the risk_management :908 sibling amber. |
| safety-reviewer, final read | Every post-review edit CLEAR, voiced alone. 39.5(v) appears nowhere in content/, and every remaining "in protest" claim is USA Hockey or Hockey Canada, so no unit contradicts another. |

**Coordinator ruling on M1.** The protest sentence was deleted from rules_primer rather than propagated to five documents. The rules-verifier ruled the reading was not plain, and spreading a weak reading would add an uncertain claim and its clutter in five places. It is a plan row. All other post-review edits use the reviewers' exact text and placement.

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's exact text, except:
- the M1 deletion (a coordinator ruling, reviewed in the final read);
- the CM :931 grammar ("fire it … and plan on" for "fired …, plan on"), which the final read cleared.

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0 and ran through check-links. `dist/index.html` 16:37:12; `find content site/src/diagrams site/src/data -newer` returns nothing. The built rules_primer page carries the new paragraph.
- check_links --quiet, check_facts, check_absolutes (caption layer certified), check_geometry, check_secrets: all pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_caption_pairs: 0 violations.
- check_tables: no new dropped table.
- check_marker_pairs: 0 LOST and 0 SPLIT on all nine content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | two rules-verifiers, split by claim; the W367 research pass |
| D4 Citations | rule text quoted from sources/; quote drift fixed |
| D8 Counts | "in every book", "in any book", "at least a game misconduct", "a misconduct in every book" and "four books … can under Hockey Canada and CARHA" each re-derived |
| D9 Summary layer | KT8, rules_primer CM, risk_management CM, game_management KT12/CM, and bcb KT9/CM, each read voiced alone |
| D10 Key-facts layer | the new and changed facts lines in risk_management, playing_without_the_puck, body_contact_and_battles and defending_the_rush, each read voiced alone |
| D11 Reader safety | two safety-reviewers, plus a final read |
| D12 Read-aloud | every changed stem rendered; marked units unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 16:37 build: nine pages, Playwright Chromium, 400×812 DPR 2 and 1440×900, light and dark, 36 loads. All seven new amber runs form warn-inline with the glyph leading. 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll. Page worsts at 400px are unchanged or within 0.1 point of their last measure. **playing_without_the_puck (never measured before) is 62.3%, from pre-existing runs not in this diff.** |
| D5–D7, D13 | not engaged |

## Found, not fixed (plan rows)
- **HC 10.5(d).** It gives a mandatory misconduct for deliberately shooting "any object outside the playing area", and 6.13 Note 1 treats a shot puck as an object. It may reach the plain after-whistle shoot-out. goaltender :1693 ("usually starts at a minor"), rules_primer :568 and on_ice_communication :190 ("its 10.1(d) bars a misconduct") say otherwise. The book does not say which rule governs. This needs its own safety-reviewer.
- **NHL/PWHL/IIHF 39.5(v), protest.** It gives a minor plus game misconduct for throwing an object out in protest. Whether it reaches a shot puck is unresolved, and it is now stated nowhere.
- **playing_without_the_puck over half a phone screen at 400px.** Three windows:
  - "Who goes", 62.3%, from a 511-character loose-puck caption run in playing_without_the_puck.mjs;
  - "Never finish a backcheck into a player's back", 57.8%, from a 507-character run at :846;
  - "A hit from behind", 56.1%, from the same run at :1019.
- **defending_the_rush facts :1022** is at 298/300, so the next edit may evict a limb.
- **body_contact_and_battles facts :1841** opens "Hockey Canada defines it widest", and "it" has no antecedent when voiced alone. This is pre-existing; the fix is "defines a slew-foot widest".
- **PWHL 49.3** lists kicking a player among the match penalties. Any future book list for "kick at an opponent" could add it.

## What this method could not have found
- Hockey Canada and CARHA casebooks on a puck as a threat to an official, and PWHL guidance on "hit". None is on disk.
- EIHL bulletins issued in-season by email.
- Other units across the corpus that price the after-whistle act in words none of the sweeps used.
- Real devices.

# SG85: five page defects found by the Principles script reviews (26 October 2026)

**Files:** project/plans/OPEN_ITEMS.md, plus these content files:
- content/getting-started/getting_started.md
- content/positions/defender.md
- content/positions/goaltender.md
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md

## What changed and why
Safety reviews of the two-voice Principles scripts kept finding the same wrong sentence on the source page. Four of those page defects were recorded in the plan on 26 October. A review of the goaltender repair then found a fifth, in rules_primer.md. Each file had one fixing agent, and no two agents shared a file.

- **getting_started :581.** "call 999 unless one is already at the rink" let a reader skip the ambulance when a first aider was present. It now says each British red flag means calling 999. This matches uk_rules :451 and conditioning_and_recovery. The UK guidance's on-site route (ukcg.txt :247–250, "onsite or in a hospital… using emergency ambulance transfer if necessary") is still quoted in full at uk_rules :451, which the paragraph links to.
- **defender :124 (facts), :134.** "hold it tight behind the net until a teammate gets open" had no pressure condition, in a section about pressure. It now reads "carry it round behind the net with the net between you and the forechecker, and move it the moment a teammate is open or the forechecker comes round", plus "Never pin it against the net: freezing it there to get a whistle is a delay-of-game penalty". NHL/IIHF 63.2(i), PWHL 65.2(i), USAH 610(a)/632(b), HC 6.12(b) and CARHA 55(a) all price a freeze made to get a whistle. :215 keeps the HC 10.1(i) / CARHA 74(b) being-checked exception.
- **goaltender :1514, :1515 (facts), :1525, :1531.** The page said "ask the referee before you move" was enough, and that asking "satisfies both" 27.6 and 10.4.
  - Under USA Hockey (Casebook 309 Sit. 2), Hockey Canada (Interp. 10 and 11 to 10.1(a)) and CARHA (47(c) Note), a goalie at the bench at a stoppage is replaced or the team pays, even after asking.
  - 10.4 bars a bench trip for a stick outright.
  - 14.1 in the three professional books allows a goalie little or no delay to repair gear, with a minor under NHL/IIHF 63.2(x) or PWHL 65.2. The PWHL allows 15 s; IIHF Situations 14.1 and 65.1 leave a short repair to the referee.
  - :1531 was shortened from 1,915 to 1,227 characters.
- **body_contact_and_battles :1173, :1516 (facts), :1522, KT12 :2110.** Holding on the wall and "wait a beat" had no own-end scope. Cycling and holding are now offensive-zone moves. "In your own end with a forechecker on you, do not wait for support: one look, then move it." The limit in all three layers is "in your own slot, or with an opponent bearing down on you (above all in your own end)". The pin for a second or two when you cannot win the puck (:1149–:1159) was judged correctly scoped and left alone.
- **rules_primer :871, :878.** USA Hockey 205(c) was listed among the books where permission is enough; Casebook 309 Sit. 2 says otherwise. The line also said a goalie may go for a stick with permission, contradicting the page's own Broken sticks section (10.4). It now leads with "stay at your net; never go to the bench for a stick", and agrees with goaltender.md on every book. NHL Rule 14 was added to the Sources trailer.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Safety, round 1 (four files) | safety-reviewer | getting_started SHIP, defender SHIP, bcb SHIP on safety. Goaltender FIX (MAJOR): the new :1525 reopened a bench trip for a stick behind "ask the referee first". Content note: bcb's "no beat to wait" in your own end, stated as law, contradicted defender :134. |
| Rules (goaltender, defender) | rules-verifier | Every quotation verbatim. INCOMPLETE: 14.1 also governs the bench trip in the professional books; IIHF Situation 27.15 does say how 27.5 and 10.4 fit; "their Players' bench" is IIHF wording only. Defender: HC 10.1(i) and CARHA 74(b) excuse a hold while being checked; CARHA's operative rule is 74(b). |
| Safety, round 2 (three files) | safety-reviewer | All SHIP on safety. Goaltender :1531 too long, and it cited Situation 14.1 without 65.1. Defender's "beat" clashed with bcb. bcb had dropped HEAD's own-slot limit and added an own-end hold permission. **New MAJOR in rules_primer :878 (USA Hockey).** Cross-document tension with time_and_space reported, not forced. |
| Final (five files) | safety-reviewer | goaltender, defender, bcb and getting_started SHIP. rules_primer FIX minor: "permission buys no time to repair" was false for the IIHF. Optional: goaltender :1514 "any bench trip" read as covering a stick; KT12 dropped the bearing-down limb. All five files rendered through md_to_speech; every qualifier lands in the same chunk as its act. |

### C11: repairs after the final review, each confined to its finding
- rules_primer :878 now reads "permission does not reliably buy time to repair your gear… expect the backup to go in (… the IIHF Handbook leaves a short repair to the referee, Situations 14.1 and 65.1)". The fixing agent checked it against iihf_situations_2026-27.txt :1201–1209 and :5180–5187.
- goaltender :1514 now reads "any bench trip not for a stick, which 10.4 bars" and "little or no delay". "Other" was rejected because the facts line is voiced alone.
- bcb KT12 now reads "In your own slot, or with an opponent bearing down on you (above all in your own end), take one look and move it". This matches :1516/:1522.
- None of these three was re-read by a reviewer; the commit gate reads them.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | rules-verifier on goaltender and defender. The safety-reviewers grepped every book named in each changed line. The British books were swept for a goalie bench rule; none exists, so the IIHF governs. |
| D4–D5 citations, provenance | Every quotation checked against sources/ (rules-verifier and final safety-reviewer). The IIHF-only "their Players' bench" was replaced by the shared fragment. |
| D6 negative existence | "The NHL and PWHL do not say how 27.6 and 10.4 fit" was re-tested. It is true for those two books; the IIHF's answer (Situation 27.15) is now cited. |
| D7 cardinal rule | Own-end holding is stated as a tactic. Whether to hold in your own end with no pressure is an open owner question (OPEN_ITEMS), and no page was made to take a side. |
| D8 numeric ownership | No new figure. The PWHL 15 s figure is quoted from 14.1. |
| D9 summary layers | A layer test was run on each file for each claim. bcb KT12 and goaltender facts were repaired in step with the body. |
| D10 facts layer | defender :124, goaltender :1514/:1515, bcb :1516. check_facts exits 0; :1515 is at 297/300. |
| D11–D12 safety, read aloud | Three safety-review rounds; final renders of all five documents read per chunk. |
| D13 folklore | Out of scope. |
| D14 structure, links | check_links and the site check-links pass. |
| D15 render | Site build with the absolute npm binary: exit 0. Not checked in a browser. |

### Mechanical checks
- Run without a pipe, all exit 0: check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets, check_counts --update.
- check_marker_pairs on each file: 0 lost markers, 0 split halves.
- Site build: exit 0.

## What this method could not have found
- Other documents that repeat these claims: the goalie bench trip elsewhere (special_teams, game_management), an unconditioned hold behind your own net, or another on-site exception to 999. Each layer test ran only inside its own file.
- Any other rule pricing a goalie leaving the net at a stoppage, for example the injury rules.
- How the bracketed "(above all in your own end)" sounds through the TTS engine.

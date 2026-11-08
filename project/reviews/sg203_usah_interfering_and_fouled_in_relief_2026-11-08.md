# SG203: USA Hockey's goal test filed under "interfering", not "contact", with Casebook 625 Situation 9 at its real scope; being fouled into the goalie no longer saves a CARHA or USA Hockey goal (8 November 2026)

**Files:**
- content/technique/shooting.md
- content/technique/body_contact_and_battles.md
- content/hockey-iq/playing_without_the_puck.md
- content/positions/winger.md
- content/hockey-iq/scanning_and_anticipation.md
- content/hockey-iq/time_and_space.md
- content/positions/goaltender.md
- content/systems/defensive_zone_coverage.md
- content/systems/special_teams.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md (SG203 closure; the SG202d ruling folded in; leads)

## Source
The work came from two read-only rules rulings:
- **SG202d (USA Hockey).** A sight-only screen: the book is silent. An attacker in the crease who stops a returning goalie from making a play: the goal is disallowed and an interference penalty assessed (usah_casebook.txt Rule 625 Situation 9, ~:14671-14683). A no-contact block outside the crease: the text is open.
- **SG203d (CARHA).** CARHA writes no relief that saves a goal for an attacker fouled into the goalie, or for a goalie pushed into the net. Its only fouled-in relief covers crease position (carha_2026.txt Rule 66, :3072-3132).

Five authoring agents worked disjoint file sets (SG203a–c, e; d was the ruling).

## What changed

### A. USA Hockey's goal test
USA Hockey 617(c)(4) (usah.txt:4197-4201) takes the goal for "interfering with the goalkeeper". Its Casebook applies this where an attacker in the crease stops a returning goalie from making a play: no goal, plus an interference penalty. Whether the rule reaches a no-contact block outside the crease is unsettled, and unsettled is not permission. The sight-only negative is kept.

Sites changed:
- shooting facts :532 and :555 (which now leads with "Get out of a returning goalie's lane")
- body_contact :1314 and Common Mistakes :2024
- playing_without_the_puck :670
- winger :547
- scanning :348, :369 and :371
  - :371 now adds the USA Hockey 625 Note's interference minor ("pick" or "block", impeding a non-puck carrier) to the list of penalties.
- time_and_space :551, :559, Common Mistakes :665 and KT11 :723
- goaltender facts :1197, :1230 and :1234

Before this wave, each site filed USA Hockey under "contact". That told a USA Hockey reader that no contact meant no risk.

### B. Fouled into the goalie
- **special_teams body :1090 and CM :1198.** They now say the NHL, IIHF and PWHL let the referee allow the goal (69.7/71.7, "can be permitted"); Hockey Canada allows it only if the foul left you unable to avoid the goalie (Interpretation 1 to 8.5(a)); USA Hockey and CARHA write no such relief.
  - :1198 also gains CARHA 52(b): a mandatory major and game misconduct for charging a goalie in the crease. The old wording, "up to a major and game misconduct", overstated CARHA 66(b), whose deliberate-contact major is discretionary and carries no game misconduct.
  - HEAD's "Only a defender fouling you into them saves the goal" made the push-in sound cheaper than it is.
- **rules_primer :812 kernel.** It read "Being fouled into the goalie is a defence in every book and a complete one in none", which is false for the goal under CARHA and USA Hockey. It now reads: it "can save the goal only where the book writes it — the NHL, IIHF and PWHL if you made a reasonable effort to avoid the goalie, Hockey Canada only if you could not avoid them. USA Hockey and CARHA write no such relief, only one for your position."
- **defensive_zone_coverage facts :108 and body :155.** These pages are outside the original leads; the safety reviewer found them. They said USA Hockey 625(b) gave the shoved attacker relief with no proviso. They now say it excuses their position, not contact with your goalie.

## Defects found by review
1. **Situation 9 overstated (rules-verifier, round 1).** The first pass made it "blocking a goalie on the way back, with no contact named", anywhere on the ice. The Situation's attacker is in the crease, and it cites 625(a)(8), the contact clause. Rounds 2 and 3 scoped it to the crease and added "unsettled".
2. **rules_primer :812, round 1 (both reviewers).** "Never under USA Hockey or CARHA" overstated a book's silence. "If you tried" is softer than 69.1's "made a reasonable effort". The text now uses the shared wording, "write no such relief".
3. **scanning :348 and :371, round 2.**
   - :348 dropped Situation 9's interference penalty (cheaper). Round 3 restored it by listing USA Hockey 625 among the interference rules.
   - :369 ended on "unsettled" with no counterweight, and :371 had no USA Hockey penalty. Both were fixed in round 3.
4. **goaltender :1234, round 3 (cheaper).** It capped USA Hockey's goal test at contact. The coordinator applied the reviewer's wording: "…anything short of contact, or, under USA Hockey, an attacker interfering with you (617(c)(4)), such as one in your crease stopping you getting back."

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (SG202d and SG203d rulings) | USA Hockey: sight-only screen silent; Sit. 9 applies in the crease. CARHA: no fouled-in goal relief |
| rules-verifier (wave) | No cheaper finding. WORDING: Sit. 9 scope; rules_primer :812 "never" and "tried"; special_teams :1198 52(b) |
| safety-reviewer (wave) | Nothing blocking. RECOMMENDED: rules_primer :812; defensive_zone_coverage :155; shooting :555 ordering |
| rules-verifier and safety-reviewer (round 2) | No blockers. FIX-cheaper: scanning :348. Consistency: crease scope at shooting and body_contact. Safety: scanning :369/:371 |
| combined rules and safety check (round 3) | FIX-cheaper: goaltender :1234 (fixed). Everything else CORRECT; scanning :348 is a wording point at the cap, logged in the plan |

### C11
- The authoring agents made every edit except goaltender :1234 in round 3, which the coordinator applied in the final reviewer's wording.
- The coordinator wrote the briefs, the plan entries and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets and check_tables all exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF across the ten files. The "no longer present by key" entries are rewritten openings that keep their markers (shooting :555, special_teams :1090).
- check_counts --update: all figures match.
- Full `npm run build` with the absolute binary, started after the last content edit: exit 0, including check:links (all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×5 |
| D2 Exceptions | Sit. 9 crease scope; 625(b) position-only relief; HC Interp. 1 "unable to avoid"; 69.7 referee discretion; CARHA 66(b) fails-to-attempt; CARHA 52(b) |
| D3 Divergence | Goal relief and goal tests across six books |
| D4 Citation integrity | 617(c)(4), 625 Note/(a)/(a)(8)/(b), Casebook 625 Sit. 9/13, 69.1/69.4/69.7, 71.7, 8.5 Interps, 66(b), 52(b) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "USA Hockey writes no goalie-vision provision" (confirmed silent); "USA Hockey and CARHA write no such relief" (confirmed) |
| D7 Cardinal rule | Units lead with the instruction ("get out of a returning goalie's lane"; "touch nobody") |
| D8 Numeric ownership | None |
| D9 Summary layer | time_and_space CM :665 and KT11 :723 changed; other KTs and CMs layer-tested |
| D10 Key-facts layer | shooting :532 (297/300), scanning :348 (300/300), goaltender :1197, dzc :108 |
| D11 Reader safety | safety-reviewer ×3 |
| D12 Read-aloud | All ten rendered; changed units read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes with markers kept; no site-reviewer (declared) |

## What this method could not have found
- **Whether USA Hockey 617(c)(4) reaches a no-contact block outside the crease.** The book leaves it open, so the corpus says "unsettled".
- **Copies of these claims on pages outside the ten.** The sweeps were lexical. Leads recorded in the plan: winger CM :797; rules_primer :812 against Casebook 607 Sit. 4.
- **How a CARHA referee treats a push after a stop: as a 52 charge or as 66(b) interference.**

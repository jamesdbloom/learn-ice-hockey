# SG204: small rule leftovers from SG197–SG203 — USA Hockey's returning-goalie tariff on winger, CARHA's goalie-contact tiers, Hockey Canada's line-standing goal, and two rules_primer limbs (8 November 2026)

**Files:**
- content/positions/winger.md
- content/technique/body_contact_and_battles.md
- content/systems/special_teams.md
- content/hockey-iq/scanning_and_anticipation.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md (SG204 closure; SG204e ruling; owner priority; renderer bug; halo row marked shipped)
- project/reviews/census_restated_ladders_2026-11-08.md and .tsv (read-only readability census, saved as evidence for the next waves)

## Source
Leads left in the plan by SG197–SG203. Four authoring agents worked on disjoint files, and one read-only ruling (SG204e) ran alongside them.

## What changed

### winger
- **:515, facts.** Casebook 625 Situation 9 is now scoped to an attacker in the crease.
- **:528, body.** It now reads: "In the NHL, IIHF, PWHL and USA Hockey, deliberately blocking that path can be a penalty with no contact at all. Under USA Hockey any contact is at least a minor, and deliberate body contact is charging, a minor plus a misconduct or more (607(d) Note 1); an attacker in the crease who stops a returning goalie making a play also costs the goal (Casebook Rule 625, Situation 9). Whether a no-contact block outside the crease costs the goal there is unsettled, and unsettled is not permission."
- **:797, Common Mistakes.** Aligned with :528: in the crease, the goal is off and an interference penalty follows; outside it, it can still be a penalty, and the goal is unsettled.

### body_contact_and_battles
- **CM :2024.** Hockey Canada is added to the line-standing goal loss. 8.5 lets the goal stand only while the crease player does not obstruct the goalie's view (hc.txt:6993-7001), and the Glossary counts the line as part of the crease (hc.txt:959-962).

### special_teams
- **CM :1198.** CARHA's tiers, in order:
  - at least a minor for any deliberate contact with a goalie (66(b));
  - a major and game misconduct at the referee's discretion (66(b) with 30(a));
  - that major is mandatory for a charge on a goalie in their crease (52(b)), or for a charge or interference that injures them (52(b), 66(e)).

### scanning_and_anticipation
- **Facts :348.** Now reads "USA Hockey 625 (from the crease: goal off, Sit. 9)", within the cap.

### rules_primer
- **:427.** The Interpretation 1 to 7.7(a) limbs now carry the book's "vulnerable" for blindside and late hits, and "deliberately" for the player who is down (hc.txt:6342-6382). The old text was harsher than the book.
- **:812.** Casebook 607 Situation 4's no-penalty rung is added: "with the goalie in the crease or privileged area, a defender forced you into them and you 'clearly made every attempt to avoid the contact'" (usah_casebook.txt:11668-11700). The closing sentence is scoped to the goal: "USA Hockey and CARHA write no relief that saves the goal, only one for your position."

## Rulings
- **SG204e: the "no book allows a bare minor for a hit from behind (under Hockey Canada, while it stays off the head)" parenthetical.** CORRECT at all eight sites. Low-priority, harsher-direction notes went to the plan: the glossary's screen-shove lines, and the unconfirmed "the harsher of" wording.
- **The 625 Note (final check).** USA Hockey's interference Note ("pick" or "block" impeding a non-puck carrier, no contact element) reaches a no-contact block of a returning goalie for the penalty. Only the goal outside the crease is unsettled. scanning :371 already said so, and winger was aligned to it.

## Defects found by review
1. **winger :528, the first fix (cheaper).** It implied that contact outside the crease was free. The second pass stated deliberate contact as "a minor", but 607(d) Note 1 makes it charging. The third pass is in the reviewers' terms.
2. **special_teams :1198.** The first fix replaced "up to a major and game misconduct" with the charge-only limb. The follow-up restored 66(b)'s discretionary major and added the injury limb. The author narrowed the coordinator's sketch, "or if it injures", to the charge-or-interference injury that CARHA writes.
3. **rules_primer :812.** The rung was first added without the Situation's crease/privileged-area scope; the scope is now in the sentence.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (SG204e, read-only) | Bare-minor parenthetical CORRECT ×8; leads recorded |
| rules-verifier (wave) | FIX-cheaper winger :528; WORDING special_teams :1198 (injury limb) and rules_primer :812 (scope) |
| safety-reviewer (wave) | Nothing blocking; RECOMMENDED winger :528; rules_primer :812 rung upheld (both of the book's conditions are voiced, followed by effort conditions) |
| rules-verifier, combined check of the follow-ups | special_teams and rules_primer CORRECT; winger :528 FIX-cheaper (charging; the 625 Note) |
| rules-verifier, combined check of winger :528/:797 third pass | CORRECT; citation tightened to "607(d) Note 1" |

### C11
- The authoring agents made every edit except the "(607(d) Note 1)" citation at winger :528. The coordinator applied that change in the final checker's wording.
- The coordinator wrote the briefs, the plan entries, the census file and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets and check_tables all exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF across the five files.
- Full `npm run build` with the absolute binary, started after the last content edit: exit 0, including check:links (all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×4 |
| D2 Exceptions | Casebook 607 Sit. 4 (scoped); 625 Sit. 9 (in the crease); HC 8.5 passive-player exception; CARHA 52(b)/66(e) |
| D3 Divergence | Goalie contact across six books |
| D4 Citation integrity | 607(d) Note 1, 625 Note, 625(a)(8), Sit. 9, 66(b), 30(a), 52(b), 66(e), HC 8.5 and Glossary, HC 7.7 Interp. 1 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "USA Hockey and CARHA write no relief that saves the goal" (confirmed) |
| D7 Cardinal rule | Units lead with the instruction ("leave a goalie their route home") |
| D8 Numeric ownership | None |
| D9 Summary layer | winger CM :797, body_contact CM :2024, special_teams CM :1198 |
| D10 Key-facts layer | winger :515, scanning :348 (300/300) |
| D11 Reader safety | safety-reviewer, plus two combined rules-and-safety checks |
| D12 Read-aloud | All five rendered by their authors |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; no site-reviewer (declared) |

## What this method could not have found
- **Whether USA Hockey referees in practice apply Situation 4 to the 625(a)(8) interference minor.** The book is split between the rule and the Casebook.
- **Whether Hockey Canada and CARHA also penalise a no-contact block of a returning goalie.** winger names four books; scanning names those two books' interference rules.
- **Copies of these claims on pages outside these five.**

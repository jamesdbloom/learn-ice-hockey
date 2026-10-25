# SG82: "Likely multi-game suspension" added at the 602(a) sites SG81's census missed (25 October 2026)

**Files:** project/plans/OPEN_ITEMS.md, plus these 8 content files:
- content/foundation/rules_primer.md
- content/technique/body_contact_and_battles.md
- content/systems/special_teams.md
- content/positions/goaltender.md
- content/positions/center.md
- content/off-the-ice/equipment.md
- content/off-the-ice/conditioning_and_recovery.md
- content/reading-diagrams/reading_ice_hockey_diagrams.md

## What changed and why
SG81 carried out the owner's 19 October ruling: wherever a reader is told to plan on a USA Hockey 602(a) match, add the likely multi-game suspension. The Standardized Discipline Policy puts 602(a) at Level 1, with a "recommended range of a 6-10 game suspension" (usah.txt ~:1204–1212).

SG81's census matched "plan on a match" and missed the "plan on one" / "plan on it" phrasings. Three agents, each owning disjoint files, found and edited 58 sites:
- 27 in rules_primer;
- 19 in body_contact_and_battles;
- 12 across the other six files.

Each agent checked every "one" and "it" against its antecedent. Sites whose match belongs to another book were skipped, as were sites already carrying the suspension.

**Also in this round:** special_teams :1104 now reads "no bare minor for checking or charging a goalie". This restores the 607(c) point that a trim had removed; it was an open plan row.

**Still cap-blocked:** bcb :577/:578/:675 and :1702, and the bcb :1678 kneeing table cell. Adding the clause there pushed the cell over 200 characters, which would make the renderer drop the table, so the edit was reverted. These remain plan rows.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules: rules_primer, bcb | rules-verifier | All 46 hunks VERIFIED against 602(a), the SDP levels, Casebook 620 Sit. 4 and 639 Sit. 5, NHL 42.5/60.4, PWHL 61.4, IIHF 60.4, HC 7.6/7.7 and App. D Note 1. Minor readability findings: primer :441 (HC sentence lost its trigger), primer :567 (the Casebook rationale now attached to the suspension), bcb :729 (verb 75 characters from its subject). Informational: the SDP lists "640(e)" at Level 3, but the match is 640(h). |
| Rules: six files | rules-verifier | All 13 hunks VERIFIED, including special_teams :1104 against 607(c) and 607(d) Note 1. Minor: goaltender :1243 dropped the Casebook rung's "or match", so the Casebook loses attribution, but no penalty is understated. Nit: conditioning :608 stacked clause. |
| Safety | safety-reviewer | No critical or major findings. Minors: goaltender :1239 (after "then" was replaced with ";", "expect a match" read as unconditional); equipment :813 (helmet removal now sounds cheaper than a facemask grab in the same bullet; an owner question); primer :840 stacked; bcb :1771 "these acts" refers to nothing when the line is voiced alone; bcb :1690 a missed site. Upheld: interference, slew-foot, charging and head-contact warnings. No cross-layer contradiction. |

### C11: coordinator repairs after review, each confined to its finding
- **primer :441:** "Under Hockey Canada, plan on a match too" became "…plan on a match for a hold meant to injure (Appendix D Note 1)". This restores the Note 1 trigger.
- **primer :567:** the suspension clause moved after the Casebook quotation, so the rationale attaches to the match again.
- **primer :840:** "and to be planned on, with a likely multi-game suspension, when it is reckless" became "and if it is reckless, plan on the match and a likely multi-game suspension (602(a))".
- **bcb :729:** reordered to "USA Hockey does because 602(a) says a match 'shall be assessed', though 603(c) says only 'may also' — so plan on one, and a likely multi-game suspension, for a reckless board". The words are the same, in a different order.
- **bcb :1771:** "whenever one of these acts" became "whenever a slew-foot". The line names only slew-footing, and the Casebook's 639 Sit. 5 list includes it.
- **bcb :1690:** the missed site got the clause.
- **goaltender :1239:** "then" is restored ("mandatory if reckless, then expect a match…"). To stay within the 300-character cap, "body checking or charging" became "checking or charging". That text is outside the quotation marks, and 607(c) says "body checks or charges".
- **conditioning :608:** the stacked clause is split into its own sentence: "A multi-game suspension is likely too."

**Not repaired, recorded in the plan:**
- goaltender :1243's attribution ("or match"), at 298/300 characters;
- bcb :374's density;
- equipment :813's helmet-removal contrast. The owner has since ruled (25 Oct) that every SDP-listed match gets the clause, so SG83 handles it.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | Checked by two rules-verifiers (see Reviews). |
| D4–D5 citations and quotations | No new citation. The quotations at bcb :729 and primer :567 were reordered, not changed. The Casebook 639 Sit. 5 and 620 Sit. 4 quotations were re-verified verbatim. |
| D6 negative existence claims, D7 cardinal rule | None added or changed; the clause is a price, not a coaching choice. |
| D8 numeric ownership | "Likely multi-game" follows the SDP's "recommended range". No figure is stated at any new site. |
| D9 propagation | Every layer of each file was swept by its owning agent. Cap-blocked sites are plan rows. |
| D10 facts layer | Facts lines were checked by the rules-verifiers and check_facts. No separate facts-reviewer ran (out of scope: clause additions only). |
| D11–D12 safety, read aloud | safety-reviewer, no critical or major findings. Chunk placement not rendered; the clause sits inside the same sentence at every site. |
| D13 folklore | Out of scope: no new unsourced claim. |
| D14 structure and cross-links | check_links and site check-links pass. |
| D15 render | Site build at 21:02 exits 0. |

**The OPEN_ITEMS.md hunks in this commit also record:** owner rulings of 25 Oct (all SDP-listed USA Hockey matches get the clause, as SG83; the CARHA match keeps 34(a); 🇬🇧 option (a); the Principles pilot is Passing and Receiving), the batch 7 pack and Basics v2 progress.

### Mechanical checks (after the last content edit)
- Exit 0, run without a pipe: check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets, check_counts --update.
- check_marker_pairs: 0 lost markers and 0 split halves.
- Site build, with the absolute npm: exit 0, and site check-links resolves every link. dist is from 21:02, after the last content edit at 21:00.

## What this method could not have found
- USA Hockey match sites phrased without "602(a)", "plan on" or "match", for example "it ends your game and more".
- Chunk-level audio placement of the added clauses. No reviewer rendered md_to_speech.
- Pages outside these eight files, which this round did not re-read.

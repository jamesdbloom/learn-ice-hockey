# SG192: charging lines stop making a stride count sound safe, and goalie-contact lines give both halves of USA Hockey's Note 1 (6 November 2026)

**Files:**
- content/positions/goaltender.md
- content/systems/defending_the_rush.md
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

## Source
A read-only rules-verifier census (SG192, scratchpad census_sg192/classified.json) swept every layer and caption for two claims:
- **Charging stride thresholds:** 7 CHEAPER, 56 CORRECT, 0 HARSHER.
- **USA Hockey 607(d) Note 1's deliberate half scoped to an area:** none found. Two lines showed the mirror shape, giving only the accidental half "beyond the privileged area".

## The rules (verified on disk)
- **USA Hockey 607 Note:** "takes more than two strides or travels an excessive distance to accelerate through a body check for the purpose of punishing the opponent. This includes … accelerating through a check".
- **USA Hockey Casebook 607:**
  - Situation 3: a check "without taking the two fast strides, but instead accelerates through the check" → "Yes… this must be penalized under the charging rule".
  - Situation 2: distance travelled with full strides can qualify.
- **Hockey Canada 7.4:** (ii) "two or more strides", plus (i) jumping, (iii) excessive distance, (iv) "Violently and unnecessarily checks an opponent in any manner", (v) blind side.
- **CARHA 52(a):** "runs or jumps into, or charges", with its Note "more than two steps or strides".
- **Pro and international books:** NHL and PWHL 42.1 judge distance travelled; IIHF 42.1 (both editions) "multiple strides … and / or travels an excessive distance".
- **British books:** none sets a stride rule.
- **USA Hockey 607(d) Note 1:** "any accidental or unavoidable contact … shall be penalized under the Interference rule. Any deliberate body contact or check … shall be penalized as charging." No area is stated.
- **Casebook 607 Situation 5:** outside the privileged area a goalie "can be legally checked", and "When the goalkeeper has possession of the puck, the attacking player is permitted to physically engage…".

## What changed
- **Stride counts.** Every line now leads with "no stride count is safe" and cites Situation 3.
  - body_contact facts :589, Never: :679 ("USA Hockey's Casebook needs no count"), facts :1675 and Common Mistakes :2037.
  - defending_the_rush :865 ("charging with no strides at all", the safety-reviewer's wording, slightly past Situation 3 in the harsher direction).
  - forechecking facts :247 and body :263. :263 adds 607's "or travels an excessive distance".
  - The "two strides are your ceiling" wording is gone from both pages that carried it.
- **Note 1.**
  - forechecking facts :862: "USA Hockey calls deliberate contact charging and, past the privileged area, accidental contact interference". The area scope stays on the accidental limb only (SG190/SG191).
  - goaltender facts :1284 split into two lines (block now 14/14). New :1285: "Outside your privileged area you are not "fair game" under USA Hockey (607(d)): accidental contact is interference and deliberate contact charging (Note 1) — but in a checking game, while you have the puck, an attacker may engage you for it (Casebook 607 Sit. 5)".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only) | 7 CHEAPER stride sites; Note 1 mirror shape ×2 |
| rules-verifier (four files; USA Hockey rules and Casebook, HC, CARHA, NHL, PWHL, IIHF both editions, British books) | "No stride count makes a check safe" confirmed in every book; counts exact. FIX goaltender :1285 (over-promised a goalie's protection against Situation 5; "wherever you are" could bleed onto the accidental limb); nits :679 and :862 |
| safety-reviewer, also standing in for content (four rendered) | 9 of 10 SHIP. FIX MAJOR goaltender :1285, same finding: a goalie who believes it does not brace. The repair took the attacker's cautious reading into the goalie's own page, where it reads permissive. Minors :679 and :865 |

### C11
- Two authoring agents made every edit on disjoint file sets. The coordinator wrote the briefs, the plan and this record.
- Post-review edits:
  - goaltender :1285 uses the reviewers' sketch.
  - defending_the_rush :865 uses the safety-reviewer's wording.
  - body_contact :679 "needs no count" fits the 200 cap. The reviewers' wordings ran to 245 characters, or claimed "no strides at all", which Situation 3 does not say. It states exactly what Situation 3 says, and no price changed.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets and check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all four files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (census, review) |
| D2 Exceptions | Situation 5 engage-with-the-puck permission; Situation 4 inside the area |
| D3 Divergence | Stride counts across six books |
| D4 Citation integrity | 607 Note and Note 1, Casebook 607 Sit. 2/3/5, HC 7.4, CARHA 52(a), 42.1, 69.4/71.4 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "No stride count makes a check safe" tested against every book; British books score 0 for "stride" |
| D7 Cardinal rule | Units lead with the instruction (arrive with speed you already had; angle them off) |
| D8 Numeric ownership | Stride counts quoted from each book |
| D9 Summary layer | Common Mistakes :2037 with its body |
| D10 Key-facts layer | Five facts lines compared limb by limb with HEAD; one split |
| D11 Reader safety | safety-reviewer; reader-dependent direction of Note 1 found |
| D12 Read-aloud | Four files rendered; changed units read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes, markers kept leading. No site-reviewer (declared) |

## What this method could not have found
- Stride wordings on other pages ("a stride or two", "a short glide in").
- Other goalie-facing layers stating Note 1's deliberate half without Situation 5 (in the plan).
- A rule other than Casebook 607 on engaging a goalie who has the puck.

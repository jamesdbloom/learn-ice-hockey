# SG193a: stride lines settle on one standard for USA Hockey's accelerated check, the IIHF distance limb is restored, and two body_contact facts lines stop sounding contradictory (6 November 2026)

**Files:**
- content/systems/defending_the_rush.md
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

## Source
The SG192 commit gate's notes (non-blocking):
- dtr :865's "with no strides at all" and forechecking :247's "none if you accelerate through" went past Casebook 607 Situation 3, while body_contact :679 used "needs no count". Two standards in one wave.
- forechecking :247 had dropped IIHF 42.1's "excessive distance" limb.
- body_contact facts :588 ("skate through the contact with your feet moving") then :589 ("accelerating through one [is] charging") could sound contradictory heard in sequence.

## The rules (verified on disk)
- Casebook 607 Situation 3: "A player delivers a check without taking the two fast strides, but instead accelerates through the check and delivers just as much force as if they had taken two fast strides. Could this be considered charging? Yes. … this must be penalized under the charging rule."
- USA Hockey 607 Note: "more than two strides or travels an excessive distance to accelerate through a body check for the purpose of punishing… accelerating through a check".

So under USA Hockey, charging does not turn on the count once you accelerate through the check. "Whatever the count" and "any count" are both exact.

The other books:
- Hockey Canada 7.4(ii): "two or more strides".
- CARHA 52(a) Note: "more than two steps or strides".
- IIHF 42.1 (both editions): "multiple strides … and / or travels an excessive distance".
- NHL and PWHL 42.1: distance traveled.

## What changed
- **"Whatever the count":** dtr :865, forechecking :263, body_contact :1675. body_contact Never: :679 now reads "USA Hockey makes it charging at any count (Casebook 607, Situation 3)".
- **forechecking facts :247:** "No stride count is safe: charging is two or more in Hockey Canada 7.4; more than two or excessive distance in USA Hockey 607, or any count if you accelerate through the check (Casebook); more than two in CARHA 52 (adult leagues); IIHF 42.1 multiple strides or excessive distance; NHL 42.1 distance". The IIHF limb is restored, and each count now comes before its book.
- **body_contact facts :589:** "accelerating through one, to add force, charging". The phrase follows Situation 3's "maximizing the force used" and separates the act from :588's legal follow-through.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (USA Hockey rules and Casebook, HC 7.4, CARHA 52, NHL, PWHL, IIHF both editions 42.1) | All PASS on truth. "Whatever the count" is exact to Situation 3. FIX intelligibility at :247 (sketch given) |
| safety-reviewer, also standing in for content (three rendered) | 5 SHIP. FIX readability at :247 (measured sketch) and at :679 ("it" could attach to "two"). No limb cheaper than HEAD |

### C11
- One authoring agent made every content edit. The coordinator wrote the brief, the plan and this record.
- :247 is the safety-reviewer's sketch with "under" → "in" to fit the rules-verifier's "multiple strides". It uses "any count" (exact) because "whatever the count" did not fit.
- :679 is the safety-reviewer's same-length wording.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets and check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all three files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | Situation 3 force qualifier |
| D3 Divergence | Stride thresholds across six books |
| D4 Citation integrity | 607 Note, Casebook 607 Sit. 3, 7.4, 52(a), 42.1 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None new |
| D7 Cardinal rule | Units keep their instruction lead |
| D8 Numeric ownership | Stride counts quoted from each book |
| D9 Summary layer | Common Mistakes :2037 consistent |
| D10 Key-facts layer | :247, :589, :679 and :1675 compared limb by limb with HEAD |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Three files rendered; :247 judged unintelligible aloud, then fixed |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes, markers kept leading. No site-reviewer (declared) |

## What this method could not have found
- Stride wordings on pages outside these three files.
- Whether a listener hears "accelerate through the check" as distinct from "skate through the contact".

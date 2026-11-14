# W324: one slew-foot reading across the corpus — four books eject at the floor, the IIHF included, and "do not plan on a minor" (14 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md (the slew-foot owner)
- content/foundation/rules_primer.md
- content/hockey-iq/risk_management.md
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The slew-foot plan row opened by the W320–W321 commit gate (C7/D8). risk_management :900 and Common Mistakes :923 said "under the IIHF, plan on it". The owner and rules_primer :484 said the IIHF ejects at the floor. "No book prices it at a bare minor" (body_contact :1844) could not be stood up for CARHA.

## The ruling (rules-verifier, read-only, before the author wave)
- **IIHF 52.2** (2026/27 :4549-4551; v1.1 the same): *"The Referee shall, at their discretion, assess a major penalty and an automatic game misconduct penalty if a Player is guilty of 'slew-footing'"*.
  - Table 5/6 lists it as MAJOR + GMP.
  - Situation 52.1, identical in all three Handbooks: *"a Major penalty and a game misconduct is the only option for this violent infraction … If the action is minimal or the opponent is not violently thrown to the ice, the Referees may choose to use rules 51 Roughing or 57 Tripping"*.
  - The IIHF uses "shall, at their discretion" for a foul's base tier (50.2, 51.2, 57.2) and "may" for optional tiers. So the discretion is about whether the act is a slew-foot, not about the price.
- **Floors in each book:**

  | Book | Floor |
  |---|---|
  | NHL 52.2 / PWHL 53.2 | mandatory match |
  | IIHF 52.2 | major plus automatic game misconduct |
  | USA Hockey 639(b) | major plus game misconduct; Casebook 639 Situation 5: *"A minor penalty is NOT an option for slew footing"* |
  | Hockey Canada 8.8 | double minor (no major, no game misconduct); 8.8(c) match at the referee's discretion, mandatory on injury; 8.6 closes the tripping route |
  | CARHA 86(b) | match at the referee's discretion; 86(a) tripping ("foot … in any manner") has no slew-foot exclusion, a reading CARHA does not state |

- **Result:** four of the six eject at the floor, and all six can end your game.
- **British books:** none departs on Rule 52. "slew" scores 0 in the EIHL Casebook, the In-House Rules and the four Rules of Competition.

## What changed
- **body_contact_and_battles.**
  - :1844 "No book prices it at a bare minor" → "**Do not plan on a minor for a slew-foot.**"
  - :1847 "no lesser tier beneath it" → the Handbook's "the only option for this violent infraction", plus the minimal-act route, "their call, not one to bank on".
  - Facts :1829 rewritten (see After review).
  - Common Mistakes :2071 adds "CARHA leaves its match to the referee (86(b))". Before, CARHA appeared only under "meant to injure", which made it sound cheaper.
  - KT9 :2172 "ejects you in four of the six books" → names the books.
  - The Sources trailer adds Situation 52.1.
- **rules_primer.**
  - :484 "with no lesser tier" → the Handbook quotation and the minimal-act route.
  - KT8 :1206 "Most books eject a slew-foot outright" → names the books.
  - The Sources trailer adds Situation 52.1.
- **risk_management.**
  - :900 and Common Mistakes :923 now put the IIHF in the ejecting list, with Hockey Canada and CARHA as "can".
  - KT9 :986 "ends your game in most books and can in all six" → names the books. This closes W319 item (5a).
  - :923's "under the IIHF, plan on it" for a hit from behind is a different foul (IIHF 43.3 is discretionary) and stays.
- **defending_the_rush.**
  - :1030 "no lesser tier" → the Handbook quotation and the route.
  - The Sources trailer adds Situation 52.1.
- **Canonical KT form:** "a slew-foot ejects you under the NHL, PWHL, IIHF and USA Hockey, and can under Hockey Canada and CARHA."

## After review (coordinator applied reviewer wordings verbatim)
- **body_contact :1829, facts: BLOCKING (safety-reviewer).** "Situation 52.1 lets a minimal act or a non-violent fall go to roughing or tripping" named no decider. It dropped the Handbook's "may" and "the only option", and it sounded like a rule a player can use. The body carried the counterweight; the facts layer did not.
  - Two fixes were offered. The rules-verifier's alternative was applied because it names slew-footing and keeps "the only option", both missing from the safety sketch.
  - On re-check, the safety-reviewer's parity phrase was added. The line now reads: `IIHF Rule 52.2 — the British book — makes slew-footing a major and an automatic game misconduct, "the only option" in Situation 52.1, though referees may call a minimal act roughing or tripping instead, not one to bank on. No match penalty in the book; 52.3 allows Supplementary Discipline` (289/300).
- **rules_primer :484 and defending_the_rush :1030 (safety-reviewer).** " — the referees' call, not one to bank on" was added after "(Situation 52.1)".
- **Sources trailers, body_contact :2184 and risk_management :995 (rules-verifier).** "with no lesser tier beneath it" → "with no lesser tier written in Rule 52 (Situation 52.1 sends a minimal act to Rules 51 or 57)".
- **Not changed.** "Roughing or tripping instead" can be heard as "a minor instead". The safety re-check found that true for a minimal act: IIHF 57.3/57.4 need reckless endangerment, and 51.3 is goalkeeper-only. A "major tier" counterweight would overstate roughing.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (ruling) | As above; site table by claim across the corpus |
| author | Brief premises verified; harness on every changed ⚠️ unit (warn-inline = glyphs, 0 asides); renders |
| rules-verifier (diff) | Nothing blocking. All 14 changed lines OK on substance against IIHF 52 and Situation 52.1 (all editions), NHL 52, PWHL 53, USA Hockey 639 and Casebook Situation 5, HC 8.6/8.8 and CARHA 86/48, plus the British books. USA Hockey has no IIHF-style route for a minimal act. WORDING at :1829 and two trailers, applied. |
| safety-reviewer | One BLOCKING (:1829) and two WORDING items, applied. No old premise remains in the four files ("bare minor", "most books", "under the IIHF, plan on it" for a slew-foot). 0 LOST; harness 1:1, 0 asides. |
| safety-reviewer narrow re-check | Block resolved; items 2 and 3 OK; optional parity phrase at :1829 applied; no further counterweight needed. check_facts passes; 0 LOST. |

### C11
The W324 author wrote the wave. Every coordinator change after review was a reviewer's wording applied verbatim. The coordinator chose between two reviewer fixes for :1829 and recorded why. The coordinator wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all four files (0 LOST, 0 SPLIT HALF; marked units unchanged from HEAD);
- check_callout_flow --bare.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier ×2 |
| D4 Citations | Situation 52.1 added to three Sources trailers, quote verified verbatim with its edition |
| D5–D7 | not engaged |
| D8 Numeric ownership | engaged: the slew-foot count follows its owner (body_contact_and_battles) in every carrier found by claim |
| D9 Summary layer | KTs and Common Mistakes in all four files |
| D10 Key-facts layer | body_contact :1829, blocked and repaired, re-checked voiced alone |
| D11 Reader safety | safety-reviewer plus a narrow re-check |
| D12 Read-aloud | author and safety-reviewer renders |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only) |

## What this method could not have found
- **Act wordings without "slew".** A carrier that describes the act ("a leg behind", "sweep the feet") and prices it without "slew", "bare minor", "lesser tier" or "most books" would have passed.
- **Other files.** The five files owned by the concurrent W323 wave were not swept for the slew-foot claim. The rules-verifier's corpus table found no carrier there.
- **CARHA's fallback.** CARHA 86(a) as a fallback from 86(b) is a reading; CARHA's casebook does not settle it. 48(c) kicking is a second rule for a kicking slew-foot.
- **NHL and PWHL.** Whether their referees call a minimal slew-foot as tripping is unwritten: there is no Situation Handbook.
- **Overstatement for CARHA.** defending_the_rush :1030 opens "Slew-footing is priced harder outside Hockey Canada", which may overstate CARHA. It errs harsher and was not changed by this wave.
- **The skate-contact claim.** offensive_zone_play :1317's "USA Hockey alone names a non-kicking skate contact as a foul of its own" may be untrue of HC 8.8 ("knock, drag, or sweep") and CARHA 86(b) ("leg dragging"). Plan row.

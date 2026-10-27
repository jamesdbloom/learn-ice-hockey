# SG94: junior ejection made advisory, British cues, a named shootout rule, one DOPS body line, and the pinch captions trimmed (27 October 2026)

**Files:**
- content/hockey-iq/risk_management.md
- content/positions/goaltender.md
- content/foundation/on_ice_communication.md
- content/positions/defender.md
- site/src/diagrams/risk_management.mjs
- scripts/check_caption_pairs.py

## What changed and why
- **risk_management :665 (facts) and :693 (body).** In British women's hockey, any major ejects (In-House Rule 101, "in all cases"). For British junior hockey the line now says "plan on it ejecting you": In-House Rule 201 never names IIHF 201.1, so the owner page, uk_rules :377, treats the junior half as an inference.
- **goaltender facts :1024.** "Unlike the NHL, the IIHF book, which British hockey plays, lets a shootout goalie be replaced" (84.4(VI)). This replaces a pointer to the line above ("that no-replacement rule"), which meant nothing to a listener hearing the line alone.
- **on_ice_communication facts :145 and :370.** An "in British hockey" cue on the IIHF 81.4 broken-skate exception.
- **defender :496.** One body line on the DOPS ban: "At a club in England or Wales, outside the Elite League, that game misconduct is at least a one-game ban too". Before this, defender had a facts line and a Common Mistakes line but no body carrier.
  - The DOPS sweep first added the same sentence at ten sites. Nine were reverted on the safety-reviewer's repetition finding: each page already had the owner's once-per-page shape (one body carrier plus one facts carrier), and bcb :156 overstated the ban for under-16s (Appendix J allows a written warning instead).
  - mental_game and getting_started needed nothing; both already carry the ban.
- **PINCH_CAVEATS.** pinch-centre-high keeps all three limbs: who covers (a coaching choice), the scoreboard, and the ⚠️ contact limb. pinch-centre-below-the-goal-line keeps only the contact limb, because it always follows pinch-centre-high in both its hosts.
  - The captions go from 1,121 to 1,041 characters and from 1,104 to 788. The owner's caption policy is "shorter, no safety cuts".
  - check_caption_pairs.py gains the dependency row that enforces the adjacency.
- **passing_and_receiving.** Checked; no change. The kick-goal and kick-shot limbs the plan row named are already on the page.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules | rules-verifier | **SHIP**, except one FIX on bcb :156 (under-16), which was reverted. Verified: In-House Rules 101 and 201 (2025-26 and 2026-27); IIHF 201.1 (Men's Junior U20/U18); NHL 84.4 "cannot be replaced unless he is injured"; IIHF 84.4(VI); IIHF 81.4 and 82.1; DOPS C.1, Section 5 and Appendix J. The EIHL Casebook and the In-House Rules do not amend 81, 82 or 84.4(VI). |
| Safety, plus repetition | safety-reviewer | **SHIP on safety, every hunk.** The pinch trim drops no safety limb, and PINCH_CONTACT is voiced at every host (checked by render). On repetition: cut nine of the ten DOPS sentences and keep defender :496. Done. Five documents were rendered. |

### C11
The nine reverts restore HEAD text exactly; git diff shows only defender :496 remaining in those three files. The gate reads them.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules | rules-verifier, as above. |
| D4–D5 citations | From sources/. |
| D6 negative existence | Neither British overlay amends 81, 82 or 84.4(VI): both were read in full. |
| D7 cardinal rule | PINCH_COVER is still stated as a coaching choice. |
| D8 numeric ownership | The DOPS ban follows uk_rules; once per page. |
| D9 summary layers | Per-page carriers measured by the safety-reviewer. |
| D10 facts layer | risk :665 is 203/300; goaltender :1024 is 180/300; ooc :145/:370 are under the cap. check_facts exits 0. |
| D11–D12 read aloud | bcb, center, defender, risk_management and game_management rendered. |
| D13 folklore | Out of scope. |
| D14 links | check_links passes; check_caption_pairs shows 0 violations. |
| D15 render | build-diagrams, then a site build after the last edit. |

## Carried to the plan
- DOPS C.1 lists "Boarding", and the corpus says "a boarding major" (uk_rules :413). Whether a boarding minor also triggers the ban is unverified.
- C.1's triggers (game misconduct, major) come from the owner page, not from C.1's text.
- The defender :496, center :773 and defender :910 carriers omit the under-16 warning limb; the owner page carries it.
- goaltender :789 "those three books' rule" is flagged by check_facts_antecedents; its antecedent is in the same line.

## What this method could not have found
- A C.1 act priced in words the sweep did not search for.
- Chunk distances on pages not rendered.

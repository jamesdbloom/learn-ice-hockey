# SG98: discretionary fight limbs, faceoff lateness, and the EIHL warm-up sanction (27 October 2026)

**Files:**
- content/technique/shooting.md
- content/foundation/rules_primer.md
- content/systems/faceoffs.md
- content/positions/goaltender.md

## What changed and why
- **shooting :859 (facts).** "the EIHL can suspend or fine" became "the EIHL suspends or fines (Casebook 5.6)". Casebook 5.6(1) says the team "shall be subjected to a suspension and/or fine", so "can" understated a mandatory sanction.
- **rules_primer :517.**
  - "keep their IIHF ejection" now covers only instigating, being the aggressor, sucker-punching, and fighting off the surface or outside the periods (v1.1 46.3, 46.4, 46.5, 46.11, 46.9; 2026/27 46.10, 46.2, 46.13, 46.7, 46.8).
  - Third man in and persisting after being told to stop "can cost you one at the referee's discretion" (v1.1 46.7, 46.1; 2026/27 46.14, 46.5). The old wording overstated them, and it contradicted the same page's :376.
- **faceoffs :799 (facts).** The line said nobody had settled whether lateness costs the centre, and "plan on losing the dot". IIHF 76.7 says lateness warns the team and does not eject the centre. The line now says that, and that whether In-House Rule 76 ("all violations") reaches lateness is unclear. The practical "be at the dot on time" Action line and the :814 caution stay.
- **EIHL 86.6 consistency (shooting, bcb, goaltender).** bcb and goaltender already give 86.6's three limbs. The commit gate's first pass found goaltender :1427 still saying "a breach **can bring** a suspension and/or fine", the same understatement as shooting. It now says "brings" (86.6 "will be subjected", 5.6 "shall be subjected").
- **faceoffs :799, after the gate.** The gate noted that the facts line had lost the body's caution (:814, "do not plan on keeping the dot"). It now reads "…is unclear, so plan on losing it — IIHF 76.7 warns the team and does not eject the centre, but In-House Rule 76 replaces the centre 'for all violations' bar after icings" (299/300).

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules | rules-verifier | **SHIP, all three.** Every fight limb was checked in both IIHF editions (table in the report). 20.4 still attaches the automatic game misconduct to a fighting major in both editions (v1.1 Table 6; 2026/27 merged Table 5). Faceoffs: 76.7 in both editions, and 82.2(VII). Optional: "suspends, fines or both", and cite 86.6 beside 5.6. |
| Safety | safety-reviewer | **SHIP, all three.** Rendered rules_primer (chunk 059 runs through to "Assume you are gone") and faceoffs (the Action line in chunk 051). No marker lost. Precision note: "charges the centre no faceoff violation" quietly answered the open question; changed to "does not eject the centre", which matches 76.7's own words. |
| Commit gate, pass 1 | commit-gate | **BLOCK:** goaltender :1427's "can bring" was not propagated, and faceoffs :799 had lost a caution without a facts-reviewer. Both were fixed. |
| Facts layer | facts-reviewer | **SHIP** faceoffs :799 (traceable to :814, faithful to In-House 76 and IIHF 76.7, competition-scoped, action limb present) and shooting :859; goaltender :1427 agrees with facts :1411 and bcb :201. Pre-existing gap: shooting :859 does not say an EIHL referee who sees a warm-up offence may call it. |

### C11
The faceoffs :799 precision edit was applied after the safety pass, using that reviewer's own wording. The rules-verifier reviewed that wording and noted that both hold. The later caution ("so plan on losing it"), added after the first gate pass, was read in its final form by the facts-reviewer only. The goaltender :1427 word change was re-derived by the gate.

## Carried to the plan
- shooting :859/:888 do not say that an EIHL referee who sees a warm-up offence may call it (86.6).
- rules_primer :517: "and so does the plain willing fight outside those three competitions" also covers the Elite League. There the Casebook makes a first willing fight a major only, with a game misconduct on the 2nd. This errs harsh; the :1047 table is correct.
- shooting :859: optional "suspends, fines or both", and cite Casebook 86.6.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 | rules-verifier, both IIHF editions, the In-House Rules and the EIHL Casebook. |
| D4–D5 | From sources/. |
| D6–D8 | n/a |
| D9 | Layer greps for third man and persisting found no other site; uk_rules :308 already words third man in as discretionary. |
| D10 | shooting :859 is 297/300 and faceoffs :799 is under the cap; check_facts exits 0. |
| D11–D12 | rules_primer and faceoffs rendered. |
| D13 | Out of scope. |
| D14 | check_links passes. |
| D15 | Site build after the last edit. |

## What this method could not have found
- In-season EIHL Casebook updates.
- The IHUK Rules of Competition on lateness or fighting.

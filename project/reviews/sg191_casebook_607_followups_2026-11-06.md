# SG191: forechecking's goalie-with-the-puck permission limited to checking games, the hard-drive rung where the privileged area is the subject, and the winger faceoff reference fixed (6 November 2026)

**Files:**
- content/positions/goaltender.md
- content/positions/winger.md
- content/systems/forechecking_systems.md
- content/systems/offensive_zone_play.md
- project/plans/OPEN_ITEMS.md

## Source
These are SG190's follow-ups, as recorded in the plan:
- forechecking facts :869 still applied Casebook 607 Situation 5's "physically engage" "in any game";
- the "outside the crease" lines (goaltender :1284, ozp :595/:620) stated 607(d) Note 1's interference bare;
- winger KT11's "if you caused it" was a weak reference (SG189 gate).

The author, briefed on the claim rather than the line, found three more forechecking sites. That page had no Situation 4 anywhere, including a facts line whose subject is the privileged area.

## The rules (verified on disk; background in sg190_casebook_607_hard_drive_rung_2026-11-06.md)
- USA Hockey 607(d) Note 1: "any accidental or unavoidable contact that occurs with the goalkeeper shall be penalized under the Interference rule. Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging." No area is attached.
- Casebook 607 Situations 4–6. NHL/IIHF (both editions) 69.4 and PWHL 71.4: "The appropriate penalty should be assessed in every case".
- Hockey Canada 6.2(a): a non-taker's violation means "the offending team's player taking the face-off will be ejected from the face-off". 6.2(d): "The player who encroached must be identified clearly as the player causing the violation and that player is not eligible to take the face-off."

## What changed
- **forechecking facts :869 and body :889:** "physically engage" a goalie only "When the goalkeeper has possession of the puck", and "treat even that as checking-game only" (our reading). The any-game "must also be penalized" floor is kept; :870 carries 604's checking bar.
- **forechecking facts :862 and goaltender facts :1284:** "beyond the privileged area, USA Hockey… calls accidental contact interference". ozp facts :595 now reads "write no such allowance"; USA Hockey's full price is at :645/:646.
- **forechecking facts :868:** "…not the corners; in it, contact after a hard drive pulled out of late is minor and misconduct (Sit. 4); anywhere, deliberate contact is charging (607(d) Note 1)".
- **Situation 4 rung added to bodies:** forechecking :885 ("Inside the privileged area, …") and ozp :620.
- **winger KT11:** "⚠️ **Under Hockey Canada, if you encroached and got your centre replaced, you cannot take the draw in their place.**"

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (USA Hockey 607 and Casebook 607 Sit. 1–6; NHL/IIHF both editions/PWHL 69.4/71.4; HC 6.2) | All 8 sites PASS. Every fitting substitution was judged: "accidental or unavoidable" → "accidental" narrows in the harsher direction; "penalise" for "should be assessed" is marginally harsher. Optional: KT11 "thrown out" heard as a game ejection (applied) |
| safety-reviewer, also standing in for content (4 rendered) | FIX MAJOR: forechecking :868's "there" had scoped Note 1's deliberate-contact charging limb to the privileged area, so corner contact read as only interference (cheaper). Fixed in the reviewer's measured wording. Minors: :885 "Inside it" antecedent (applied); KT11 (applied) |

### C11
- One authoring agent made every content edit; the coordinator wrote the brief, the plan and this record.
- Every post-review edit is a reviewer's own wording:
  - :868 is the safety-reviewer's measured line, verbatim;
  - :885 is the safety-reviewer's suggestion;
  - KT11 is the rules-verifier's stated alternative ("keep 'encroached' and change 'got your centre thrown out' to 'got your centre replaced'"), chosen because 6.2(d) bars only "the player who encroached".

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets and check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all four files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | Situation 4 rungs; Situation 5 possession limit and floor; 69.4 playing-the-puck allowance |
| D3 Divergence | USA Hockey vs 69.4 books on incidental contact |
| D4 Citation integrity | 607(d) Notes 1–2, Casebook 607 Sit. 4–6, 69.4/71.4, 6.2(a)/(d) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "write no such allowance" (ozp :595) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | KT11 agrees with facts :587 and body :605 |
| D10 Key-facts layer | Five facts lines compared limb by limb with HEAD; the :868 scope defect was found here |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Four files rendered; changed units read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes. No site-reviewer (declared) |

## What this method could not have found
- Facts-layer `Note 1` limbs in other documents scoped to an area the same way (in the plan).
- Whether a listener hears "beyond the privileged area" as implying a cheaper price inside it. Both reviewers judged it harsher.
- Whether officials apply Situation 5's "physically engage" in non-checking games.

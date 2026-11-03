# SG163: USA Hockey helmet removal "during" a fight is a match on the pages SG161 did not reach, and "a deliberate one" removed from the Hockey Canada high cross-check (3 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/off-the-ice/team_play_and_culture.md
- content/positions/goaltender.md
- content/systems/defensive_zone_coverage.md
- content/technique/passing_and_receiving.md
- content/positions/winger.md
- project/plans/OPEN_ITEMS.md

## Source
OPEN_ITEMS rows from the SG161 reviews: (c), the "a deliberate one" sweep, and (e), other pages narrowing USA Hockey 615(c). This wave carries SG161 (commit d5bf16c9) to the pages it did not reach.

## What changed
- **USA Hockey 615(c), removing your own helmet during an altercation.**
  - **What the rulebook says:** the rule body has your own helmet "prior to an altercation". The Casebook extends it:
    - Situation 13: "any player who deliberately removes their own, or their opponent's helmet prior to or during an altercation". Situation 9 says the same.
    - Situation 14: "any time a player involved in that altercation deliberately removes their own helmet, a match penalty must be assessed … in addition to any other penalties … Fighting penalties do not have to be assessed".
    - Situation 18: doing both is "two separate actions that each call for a match penalty".
    - The rulebook's match index lists "Deliberately removing helmet during altercation".
  - **body_contact_and_battles, facts :1945 (voiced alone):** this line told a listener that removing their own helmet mid-fight was outside the match. It is cheaper than the book, and it is the owner document. It now reads "your own or an opponent's … 'prior to or during' an altercation — two matches if you do both (Casebook 615, Situations 13, 14 and 18)", with the likely multi-game ban.
  - **body_contact_and_battles :1946:** this line now carries Situation 14's "on top of any other penalty from the altercation, and whether or not a fight is called", again with the likely multi-game ban (owner ruling 25 Oct).
  - **body_contact_and_battles :1962:** the body's Casebook bullet now reads "makes removing your own helmet *during* an altercation a match too".
  - **team_play_and_culture:** the body already said "before or during" and "both match penalties if you do both". Only the Sources trailer gained the Casebook citation.
- **Hockey Canada cross-check above the shoulders.**
  - **What the rulebook says:** 7.6(b) Interpretation 2 says "a deliberate cross-checking action and strike an opponent in the head or neck". 7.7(b) and CARHA 54(b) are unconditional.
  - **The rejected phrasing:** "a deliberate one" and "a deliberate cross-check above the shoulders" can be heard as "deliberately high", which licenses the ride-up excuse.
  - **The fix:** these now read "any deliberate cross-check that reaches the head or neck" or "a deliberate cross-checking action":
    - body_contact_and_battles :687 (facts, 299/300), :704, :788 and :1437 (facts, 281/300);
    - winger :777;
    - goaltender :1313;
    - defensive_zone_coverage :206 and :601;
    - passing_and_receiving :472.
- **Left alone (harsh only, reported by authors):**
  - Flat Hockey Canada and CARHA "whether or not anyone is hurt" lines at dzc :588, :593 and :871, and winger facts :521 (at cap). The act warned against is choosing to cross-check at all.
  - goaltender facts :1377 "a deliberate cross-check lands high" (298/300). Not the rejected form.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | 11 of 12 sites PASS. FIX, cheaper: bcb :1945 merged the limbs and lost Situation 18's two matches (fixed). Optional: :687 Interpretation 2 citation (not fitted, at cap); :1946 "from the altercation" (taken) |
| safety-reviewer, also standing in for the content dimension on this small wave | Five files SHIP. FIX: bcb :1946 lost its "likely multi-game ban" (restored, in the reviewer's wording). Optional: :687 "possible on violence" (author kept it, since "violence" is 7.6(b)'s basis); :788 tense (taken). No changed unit reads cheaper; "reaches the head or neck" is never stacked or ambiguous aloud; 0 LOST markers |

### C11
- One authoring agent per disjoint file set made every content edit: bcb, and the five siblings.
- The coordinator wrote only the plan and this record.
- The last edits (bcb :1945, :1946 and :788) use the reviewers' own wording, are confined to their findings, and go in the stricter direction.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all six files.
- Spoken "Important." counts were unchanged in the authors' renders (bcb 197, goaltender 92, dzc 51, winger 57, passing 27, team_play 45).
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier against usah, usah_casebook (615 Situations 9–18), hc (7.6, 7.7, 9.2) and carha_2026 (54) |
| D2 Exceptions | Casebook 615 Situations 13, 14 and 18; 7.6(b) Interpretation 2; 7.7(b) with no interpretation |
| D3 Divergence | Hockey Canada minor/female vs Junior/Senior vs CARHA |
| D4 Citation integrity | Casebook Situations 13, 14 and 18 added; the Interpretation 2 citation dropped at :687 for the cap (its substance is in the words) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "Nothing else on the page states the two-match limb" (grep) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | Layer tests by both authors; Common Mistakes :2044 and the Never line :1956 were already unconditional |
| D10 Key-facts layer | bcb :687, :1437, :1945 and :1946 checked voiced alone; caps pass |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | bcb, winger and dzc rendered by the safety-reviewer; all six by the authors |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; no marker lost; the :1962 glyph still leads its strong run. No site-reviewer (declared) |

## What this method could not have found
- Pages outside these six that state 615(c) without the "during", "two matches" or multi-game limbs, or that use the cross-check wording in other words ("high cross-check", "stick to the face").
- USA Hockey Casebook 615 Situations 19 and 20.
- Whether listeners hear "deliberate" as attaching to "reaches". Only listening can settle that.

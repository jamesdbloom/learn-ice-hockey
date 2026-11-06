# SG182: the reckless-trip lead names the NHL/PWHL slew-foot match, and a boarding sentence states USA Hockey's floor (6 November 2026)

**Files:**
- content/hockey-iq/risk_management.md
- content/systems/offensive_zone_play.md
- project/plans/OPEN_ITEMS.md

## Source
Plan rows read as cheaper than the rules: the risk_management lead (SG178 review), mental_game gestures and puck_handling HC 7.1(b) (SG142/SG134b), and the SG176 safety review's optional ozp boarding sentence.

## What changed
- **risk_management :696:** "…those are the only tripping rules that stop at a minor, and even there a trip called as a slew-foot is a match (NHL 52.2, PWHL 53.2). In every other book a reckless trip can end your game (in Hockey Canada, if it injures)."
- **offensive_zone_play :796:** appends "From any angle, checking a defenceless player into the boards is boarding, a penalty in every book and never less than a minor plus a misconduct under USA Hockey (603(a))."
- **Plan row closed without a content change:** the SG169–SG170 "speech renderer voices 8.3(i) as clause one" item is refuted — Hockey Canada 8.3 opens with roman items i–iv before clause (a) (hc.txt), so "clause one" is correct, as the comment above `ALPHABETIC_I_RULE` in scripts/md_to_speech.py records.
- **Refuted, no edit:** mental_game :575 already prices HC 11.2(f) and CARHA 46's gross misconduct for gestures; puck_handling :492 already carries HC 7.1(b)'s discretionary major and game misconduct.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (NHL 52/57/41, PWHL 53/58/41, IIHF 57/41, HC 8.6/7.2, CARHA 86/49, USA Hockey 639/603 and Casebook, EIHL/In-House) | Both PASS; optional USA Hockey 603(a) floor on the boarding sentence |
| safety-reviewer, also standing in for content (both rendered) | Both SHIP; same optional floor fix |

### C11
- One authoring agent made every edit; the coordinator wrote the brief, the plan and this record.
- The one post-review edit is the reviewers' shared wording (the 603(a) floor), stricter.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in both files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | slew-foot as a separate rule; HC 8.6 injury condition |
| D3 Divergence | Tripping and boarding across six books |
| D4 Citation integrity | NHL 52.2, PWHL 53.2, USA Hockey 603(a) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "the only tripping rules that stop at a minor" re-checked |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | No KT or CM carried these claims |
| D10 Key-facts layer | None changed |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Both rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs. No site-reviewer (declared) |

## What this method could not have found
- Other layers or pages stating NHL/PWHL tripping as minor-only without the slew-foot exception.
- Other rules pricing a defenceless player into the boards (charging, head contact) on the same page.

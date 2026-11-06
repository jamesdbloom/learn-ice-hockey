# SG188: the winger goalie-charge facts line names USA Hockey's mandatory reckless tier, and two zone-entries lines tidied (6 November 2026)

**Files:**
- content/positions/winger.md
- content/systems/zone_entries.md
- project/plans/OPEN_ITEMS.md

## Source
SG187's reviews and gate: winger facts :519 said USA Hockey 607(c) "leave[s] it to the referee" with no mention of 607(b)'s mandatory major and game misconduct for a reckless charge; zone_entries :802's "must be" and KT10's missing CARHA crease limb; forechecking :866–871 and special_teams :1070–1140 unopened by the SG187 census.

## What changed
- **winger facts :519 (299/300; block 14/14, so no split):** "A goalie charge is a major and game misconduct in Hockey Canada 8.5(b), CARHA 52(b) in the crease or on injury, USA Hockey 607(b) if reckless, and can be otherwise (52(a), 30(a)); NHL, PWHL, IIHF 42 leave it to the referee, but a major injuring face or head ejects (NHL, PWHL 42.5, EIHL Casebook 42)". Dropping "anywhere" loses nothing (8.5(b) is unconditional).
- **zone_entries :802:** "a reckless one always is (607(b))".
- **zone_entries KT10:** "…under Hockey Canada it is an automatic major and game misconduct, as under CARHA in the crease or if it injures."
- **No change needed:** forechecking :866–871 and special_teams :1070–1140 already carry each book's full ladder.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (usah.txt 607, hc.txt 8.5(b), carha_2026.txt 52/30(a), NHL/PWHL/IIHF 42, EIHL Casebook 42) | All three PASS; :519 is a tightening (the old line omitted the mandatory reckless tier) |
| safety-reviewer, also standing in for content (both rendered) | All SHIP; optional: cite 607(a) in :519 if room is ever freed (in the plan) |

### C11
- One authoring agent made every edit; the coordinator wrote the brief, the plan and this record. No post-review edits.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in both files; marked units unchanged.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | CARHA 30(a); USA Hockey 607(b) vs (a)/(c) |
| D3 Divergence | Goalie charging across six books plus the EIHL Casebook |
| D4 Citation integrity | 8.5(b), 52(a)/(b), 30(a), 607(b), 42.5 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | zone_entries KT10 with its body :802 |
| D10 Key-facts layer | winger :519 compared limb by limb (299/300) |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Both rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes. No site-reviewer (declared) |

## What this method could not have found
- USA Hockey Casebook 607 Situations that change the tier outside the privileged area (in the plan).
- Sibling pages still framing USA Hockey as leaving a goalie charge wholly to the referee.

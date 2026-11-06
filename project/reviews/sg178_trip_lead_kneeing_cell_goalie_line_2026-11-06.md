# SG178: the reckless-trip lead made true for Hockey Canada, a Hockey Canada 11.1 citation corrected, USA Hockey kneeing given "likely a multi-game ban", and a goalie-interference facts line made to read as two tiers (6 November 2026)

**Files:**
- content/hockey-iq/risk_management.md
- content/technique/body_contact_and_battles.md
- content/systems/special_teams.md
- project/plans/OPEN_ITEMS.md

## Source
Four open plan rows (SG169–SG171 reviews).

## What changed
- **risk_management :696:** "⚠️ **do not plan on a minor for a reckless trip outside the NHL's Rule 57 and the PWHL's Rule 58** — those are the only tripping rules that stop at a minor, and in every other book a reckless trip can end your game (in Hockey Canada, if it injures)." The old "do not price a reckless trip at a minor anywhere outside…" overstated Hockey Canada 8.6, where a reckless trip that injures nobody is a minor ((a); (b) major and game misconduct only on injury; (c) no match).
- **risk_management :381:** Hockey Canada 11.1's discretion is in the rule's opening ("which will be penalized at the discretion of the Referee"), not 11.1(a), which is mandatory.
- **body_contact Kneeing table cell (199/200, table still voiced):** "Knee as contact point, even their knee on a legal hit (Hockey Canada 7.8, from a double minor). ⚠️ **Keep knees in: USA Hockey 628 ejects a reckless knee — plan on a match, likely a multi-game ban.**" (628(c) is SDP Level 3, 3–5 games; owner 25 Oct). The first repair dropped "an opponent's knee"; both reviewers caught it and HC 7.8's knee-into-a-knee form is restored.
- **special_teams facts :1113 (300/300):** "…Hockey Canada 8.5(b) any goalie charge or injuring interference (intent to injure: a match, 8.5(c)); CARHA…" — the match now reads as its own tier.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (nine books incl. EIHL Casebook and In-House) | :696, :381, :1113 PASS; Kneeing cell FIX (cheaper: dropped HC 7.8's contact into an opponent's knee). Optional :696 HC injury clause |
| safety-reviewer, also standing in for content (3 rendered) | All SHIP; same Kneeing narrowing as an optional minor; table still voiced |

### C11
- One authoring agent made every edit; the coordinator wrote the brief, the plan and this record.
- The post-review edits are the rules-verifier's same-length Kneeing wording and its optional :696 clause, confined to the findings.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all three files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | HC 8.6 injury condition; 11.1 preamble discretion; 628(c) "may also" |
| D3 Divergence | Tripping across six books plus the British books |
| D4 Citation integrity | 11.1 preamble; 628(c) SDP Level 3; 8.5(b)/(c) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "the only tripping rules that stop at a minor" checked against NHL 57, PWHL 58 and the rest |
| D7 Cardinal rule | Lead stays instruction-first |
| D8 Numeric ownership | "likely multi-game" per owner ruling |
| D9 Summary layer | No KT or Common Mistakes carried these claims |
| D10 Key-facts layer | special_teams :1113 compared limb by limb (300/300) |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | All three rendered; Kneeing table still voiced (check_tables) |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs and a table cell; no panel added. No site-reviewer (declared) |

## What this method could not have found
- Other pages carrying the reckless-trip claim, the kneeing definition or the 8.5(c) tier in other words.
- The risk_management table at ~:523 already drops from audio (pre-existing; in the plan).

# SG154: holding reaches the puck carrier, accidental high sticks, and three readability rows (3 November 2026)

**Files:** content/technique/body_contact_and_battles.md; content/hockey-iq/risk_management.md; project/plans/OPEN_ITEMS.md

## Source
Open OPEN_ITEMS rows naming body_contact_and_battles, zone_entries, risk_management and forechecking, worked on the owner's standing instruction "keep going with the plan".

## What changed
- bcb :1516 (loose pucks): after the sentence that interference reaches only an opponent not in possession, a new counterweight says the puck carrier is not fair game — Hockey Canada 8.1 defines holding as restraining an opponent by impeding them "whether or not they are in possession of the puck" (a minor; a major and game misconduct if it injures), and CARHA's Glossary says the same (a minor or an ejecting major under 63(a), and a major, which also ejects, if it injures under 63(b)). Without it the page could be heard as clearing the carrier.
- bcb :312/:461/:794: "not every accident is free" lists now lead with "a high stick above the shoulders is a major even by accident (62(b)), though an accidental one that hurts nobody does not end your game" (62(b) and its Note; 30(a) Note).
- bcb :784: CARHA 49(b) turns a foul's minor into a double minor when it puts a player into the boards (not any collision), which counts as two of the three penalties that end your game (49(b) Note, 32(a)).
- bcb :475 adds "or 'shadow'" (66(a) Note 2); :234 quotes USA Hockey's unconditional "stand their ground" instead of a conditional phrase cut short; :949 cites PWHL 52.1(iii) for "hold their ground" (was 57.1).
- risk_management :756: the ⚠️ moved from the paragraph opening onto the bold clause, so an amber panel becomes inline amber; words and the spoken "Important." unchanged.
- Closed without edits: zone_entries KT9 (already 60 words), forechecking_systems :811/:812 (two self-standing facts lines in consecutive chunks).

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer (both files) | SHIP both; minors on :461 (could be heard as ejecting) and :1516 (one-book citation) → both taken |
| rules-verifier | 6 PASS; FIX :1516 (Hockey Canada 8.1 writes the same reach with its own tariff) → both books named; 62(b) confirmed: an accidental high stick above the shoulders is a major whether or not injury results |
| rules-verifier (re-check) | :784 PASS; two two-word FIXes (":461/:312 'an accidental one'", ":1516 'which also ejects'") → applied verbatim in the reviewer's words |

### C11
One authoring agent for bcb and one for risk_management/zone_entries/forechecking_systems; the coordinator wrote the plan and this record. The last edits are the reviewer's own wording applied verbatim, confined to its findings, each in the stricter direction.

Checks after the last edit: full `npm run build` with the absolute binary exit 0 including check:links; check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST; check_quote_drift on bcb shows no new flag; check_callout_flow --panels on risk_management 1 → 0; check_counts --update matches.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 | rules-verifier and re-check |
| D4 | Quotations located on disk (Glossaries, 8.1, 62(b), 49(b), USA Hockey Preface, PWHL 52.1) |
| D5 | Primary text |
| D6 | "No other site states CARHA holding reaches the carrier" was the row; the fix adds it, scoped |
| D7 | None |
| D8 | None |
| D9 | bcb layers carrying the claims; risk_management unchanged words |
| D10 | No facts line changed in the final pass; :234 and :475 facts lines reviewed |
| D11 | safety-reviewer |
| D12 | bcb and risk_management rendered; the last two-word fixes not re-rendered (declared) |
| D13 | None |
| D14 | check_links and the build |
| D15 | Build; the risk_management inline-amber shape follows the plugin's documented WARNING_TAIL_RE (not inspected in dist) |

## What this method could not have found
- Other pages citing an interference rule's "not in possession" limit next to battle advice without the holding counterweight (plan).
- How CARHA resolves its own 30(a)-Note vs 62(b)-Note conflict for an injuring accidental high stick (the page takes the harsher).
- How the final two-word fixes sound.

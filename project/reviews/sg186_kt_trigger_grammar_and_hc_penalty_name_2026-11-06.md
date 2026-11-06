# SG186: three Key Takeaway sentences made clearer — USA Hockey's three checking-from-behind triggers read as three, and the Hockey Canada goalie-charge penalty is named (6 November 2026)

**Files:**
- content/positions/center.md
- content/positions/switching_positions.md
- project/plans/OPEN_ITEMS.md

## Source
The SG185 commit gate's wording notes.

## What changed
- **center KT6, switching_positions KT8:** "if forceful at the boards, sending them head first into the boards or net, or reckless" → "if it is forceful at/along the boards, sends them head first into the boards or net, or is reckless" — the participle could be heard as joining the first two triggers; USA Hockey 608(b) and Casebook 608 Situation 1 make them three separate triggers.
- **center KT9:** "always under Hockey Canada, as is interference that injures one" → "under Hockey Canada always a major and game misconduct, as is interference that injures one" (HC 8.5(b), both limbs "will be assessed"; owner 5 Nov "name the penalty").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (usah.txt 607/608, Casebook 608 Sit. 1, hc.txt 8.5(b), 7.4(b) Interp. 3, carha_2026.txt 52, 30(a)) | PASS all three; noted a pre-existing understatement in KT9's ladder (in the plan) |
| safety-reviewer (both rendered) | SHIP all three; same pre-existing note |

### C11
- One authoring agent made every edit; the coordinator wrote the brief, the plan and this record. No post-review edits.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets: exit 0.
- check_marker_pairs: 0 LOST in both files; marked-unit counts unchanged.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | 608(a) floor; 8.5(c) match above the 8.5(b) floor |
| D3 Divergence | Unchanged |
| D4 Citation integrity | No citation changed |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | KTs still lead with what a player does |
| D8 Numeric ownership | None |
| D9 Summary layer | KT wording only; layers unchanged |
| D10 Key-facts layer | None changed |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Both rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes. No site-reviewer (declared) |

## What this method could not have found
- Whether other layers carry the goalie-charging ladder with the same mandatory-only framing (in the plan as the next census).

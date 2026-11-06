# SG189: the winger faceoff takeaway prices contact by a winger who takes the draw, two lines that overstated it say "can", and a forechecking hit-from-behind instruction gets its warning (6 November 2026)

**Files:**
- content/positions/winger.md
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md (SG189 Casebook 607 census row; the SG190 wave it opened is separate)

## Source
SG185's gate notes:
- the winger faceoff takeaway never priced the pre-drop contact minor;
- forechecking :828, split off in SG185, prices a game-ending hit and a match with no marker.

## The brief was wrong, and the author refuted it
The brief asked for "contact before the drop is also a minor" on a winger's hand. The mandatory contact minor reaches only the players facing off:
- USA Hockey 613(e): "A minor penalty for interference shall be assessed to any player facing-off who makes any physical contact with their opponent's body"
- Hockey Canada 6.2(c): "will assess"
- CARHA 57(b): "shall assess"

A winger's contact is a centre ejection from the draw (HC 6.2(a), CARHA 57(a)). NHL 76.7, IIHF 76.7 (2026/27 and v1.1) and PWHL 78.7 leave the minor "at his/their discretion". The page's own body already said so ("not the mandatory minor at 57(b), which reaches only the two in the dot").

## What changed
- **winger KT11:** adds "If you take the draw yourself, contact before the drop can be a minor too — and is, under USA Hockey, Hockey Canada and CARHA."
- **winger Common Mistakes :791 and body :612** said contact before the drop "is" / "becomes" a penalty, which is harsher than the NHL, IIHF and PWHL. They now read "can be a penalty as well — under USA Hockey, Hockey Canada and CARHA it will be" and "can become a penalty as well as a violation". The ⚠️ at :612 still leads its strong run.
- **forechecking :828:** "…and ⚠️ **never finish into their back.**" This adds a spoken "Important." (89 → 90 marked units). The paragraph was unmarked in HEAD and before the SG185 split, so no marker had been lost. On the built page it renders as `warn-inline`.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (usah.txt 613, 608 and Casebook 608; hc.txt 6.2, 7.5, 7.6; carha_2026.txt 57, 53; NHL, PWHL and IIHF both editions 76.7/78.7 and 43) | Both sites PASS. The "(in most books, will)" second-violation clause holds 4 of 6. FIX at :791/:612 (harsher), applied. Every price at forechecking :828 confirmed |
| safety-reviewer, also standing in for content (both rendered) | Both SHIP. Minors: KT11 "If you take" (applied); :791/:612 (applied). In-House Rule 76 does not touch the contact minor |

### C11
- One authoring agent made every content edit; the coordinator wrote the brief, the plan and this record.
- The post-review edits are in both reviewers' own wording, in the accurate direction.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in both files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | HC 6.2(d) winger replacement; USA Hockey 613(d) position-only |
| D3 Divergence | Mandatory contact minor in three books, discretionary in three |
| D4 Citation integrity | 613(e), 6.2(c), 57(b), 76.7, 78.7; 43, 7.5(c), 53(b), 608(b) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | KT11 and Common Mistakes agree with the body and facts :588 |
| D10 Key-facts layer | No facts line changed |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Both files rendered; KT11 chunk 067 and forechecking chunk 057 read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | New marker confirmed as `warn-inline` in `site/dist`. No site-reviewer (declared) |

## What this method could not have found
- Other rules that price pre-drop contact by a draw-taker (interference, roughing, IIHF 67.2).
- British amendments to Rule 76 beyond the In-House Rules.
- The same winger-contact claim on other pages.

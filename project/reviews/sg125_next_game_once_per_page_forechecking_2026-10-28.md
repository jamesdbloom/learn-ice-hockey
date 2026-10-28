# SG125: Forechecking states each book's next-game suspension once (28 October 2026)

**Files:**
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md

## Why
On 21 October the owner ruled that USA Hockey's 404(b) next-game suspension is stated once per page: in the rules summary and the key facts, not on every penalty line. On 28 October, asked whether the ruling also covers CARHA's 32(d), the owner answered "yes". Forechecking carried about 15 per-line next-game clauses across facts, body, Common Mistakes and Key Takeaways.

## What changed
- **Facts :582** now states both books, voiced alone: "Rule: An ejection can cost the next game too — USA Hockey 404(b) suspends any game misconduct for the team's next game, at least two after a second major in a game (403(b)); CARHA 32(d) adds one game, possibly more, after a major's game misconduct".
- **Body :648** (the CARHA paragraph in "What your book allows") now applies 32(d) to "this major or any other except an accidental high stick".
- **Body :660** (USA Hockey) is unchanged.
- **The next-game clause was removed from 15 units:** facts :248, :249, :254, :616, :756 and :867; body :267, :269, :771, :887 and :889; CM :1037, :1045 and :1050; and KT8. In :1045, :1050, :1037 and KT8 both books' clauses were removed together, so no unit pairs one book's ejection with the other's ban. Every other limb survives: the 30(a) and 32(a) ejections, 49, 52, 53, 63 and 66 pricing, the 48(a) and 34(a) matches, Hockey Canada 7.4, USA Hockey 627(a), and the 602(a) "likely multi-game" lines.
- 135 words saved.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| D1–D3 (C4) | rules-verifier (usah.txt 404(b) :2532–2540, 403(b) :2444–2449, 627(a); carha_2026.txt 30(a) :1364–1372, 32(a), 32(d) :1450–1453, 62 Note :2971–2976, 63(a)/(b); word-level diff with `git diff --word-diff=porcelain -U0`) | :582 CONFIRMED, :660 CONFIRMED. On all 16 changed lines only the next-game clause went (CONFIRMED), and no cross-book pairing remains (CONFIRMED). :648 "any other" was CONFIRMED-BUT-INCOMPLETE: 32(d) excludes accidental high-stick majors, a harsh-direction overstatement (see C11). |
| D9–D12 | safety-reviewer | SHIP. Nothing lost beyond what the ruling sanctions. Repaired sentences read cleanly. CM and KT still lead with their instructions. :582 is voiced alone (chunk 036) and states its point. 0 LOST. Minor: :582's CARHA clause had no verb (see C11). |

### C11
Two post-review edits, each using the reviewer's own wording:
- **:648:** "for this major or any other" became "…or any other except an accidental high stick". This is the rules-verifier's wording and narrows the claim to the book.
- **:582:** "CARHA 32(d) one game, possibly more, for a major's game misconduct" became "CARHA 32(d) adds one game, possibly more, after a major's game misconduct". This is the safety-reviewer's sketch; it adds a verb and leaves the claim unchanged.

check_facts passes; check_marker_pairs reports 0 LOST.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Rules travelling without exceptions | rules-verifier: every changed line diffed word by word; no limb but the next-game clause removed |
| D3 Rule-set divergence | rules-verifier: no cross-book pairing; Hockey Canada correctly absent (4.8(c), checked in SG122) |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim changed |
| D7 Cardinal rule | safety-reviewer: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewer: CM and KT8 keep their instructions; the ruling sanctions removing their next-game clauses |
| D10 Key-facts layer | safety-reviewer: :582 voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud integrity | safety-reviewer rendered the page (81 chunks) |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; no edited paragraph over 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- forechecking :658 is 1,209 characters (pre-existing at HEAD, not touched here).
- The same trim, page by page, for the rest of the corpus (plan row "Next-game once per page, rest of corpus").

## Accepted by the ruling, not carried
- A listener who starts at the charging or goalie sections never hears the next-game cost. The owner's once-per-page ruling accepts this.

## What this method could not have found
- Next-game wordings outside the swept set ("miss a game").
- Whether the USA Hockey Casebook narrows 404(b).
- Sibling pages that depend on this page's removed clauses.

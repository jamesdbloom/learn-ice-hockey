# SG184: USA Hockey's act-specific match clauses added beside 602(a) in 21 rules-reference lines — and a larger first version cut back (6 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/hockey-iq/risk_management.md
- content/positions/defender.md
- content/systems/defending_the_rush.md
- content/systems/game_management.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

## Source
SG183 census Claim 3: "plan on a match" lines citing USA Hockey 602(a) alone where the act has its own match clause. A consistency item, not a correctness fix — 602(a) ("shall … recklessly endangers or attempts to injure") was never false.

## What changed
- **Kept (21 lines):** the act's own clause beside 602(a) in rules-reference units only — rules_primer :374 621(c), :422 639(c), :442 620(c), :784 and :794 607(e), :1063 620(c), :1065 621(c); risk_management :320 607(e); defender :340 634(c) (facts), :885 639(c); defending_the_rush :256 604(e); game_management :962 604(e); body_contact_and_battles :398 621(c), :503 604(e), :685 620(c) (facts), :720 603(c) (facts), :780 620(c), :1616 639(c) (facts), :1710 606(b), :1723 622(c) (facts), :1779 621(c).
- **Reverted to HEAD (25 lines):** the author's first version added 54 numbers at 51 sites. The rules-verifier found 608(c) cited for a bare "reckless" trigger at 10 sites (608(c) needs excessive force on a vulnerable or defenceless player) and 603(c) attached to boarding's "rolling" exception (the rule says a roll is not boarding). The content-reviewer found the additions in Common Mistakes, tactical bullets and instruction-led paragraphs raised the spoken rule numbers in body_contact's Common Mistakes by ~37% without changing what a player does (owner: fewer rule numbers, shorter text). Every one of those lines was restored byte-for-byte from HEAD by script.
- **Plan row closed alongside (diagrams, no file change):** SG165's nz-1-2-2-containment "puck carrier" dot bite was already fixed by commit e1162561 (labelHint [-16.6, 19.5]); a separate agent (SG184B) rendered the built SVG with librsvg at 8× and measured 2.46 ft of ink clearance from the dot, nothing else within ~20 ft; check_geometry, check_absolutes, check_caption_pairs and check_zones passed. A phone-width browser check remains open in the plan.
- **Noted, not changed:** USA Hockey's Standardized Discipline Policy table labels roughing's match "640(e)" while the rule text has it at 640(h) (book-internal; plan row).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (every clause against usah.txt 602–640, Appendix I, the SDP) | 30 PASS; FIX 608(c) ×10 (wrong trigger), 603(c) at bcb :735 (rolling exception) — all reverted |
| content-reviewer (owner's readability/tactics standard; bcb and defender rendered) | KEEP 27 / DROP 24 by unit type; the coordinator also reverted the KEEPs the rules-verifier faulted |
| safety-reviewer (narrow C6, on the final 21 lines; two files rendered) | SHIP all six files; the mandatory claim and 602(a) stay beside each "may also be assessed" clause |

### C11
- One authoring agent made every edit; the coordinator wrote the briefs, the plan and this record.
- The post-review change was a byte-exact revert of 25 lines to HEAD, confined to the reviewers' findings; the 21 kept lines were reviewed by all three reviewers as they now stand.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all six files; marked-unit counts unchanged.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | 608(c)'s excessive-force condition; 603(a)'s rolling exception; 640(h) reach |
| D3 Divergence | USA Hockey only |
| D4 Citation integrity | Every added clause checked against its act's text |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | Voiced/tactical units kept free of extra rule numbers |
| D8 Numeric ownership | None |
| D9 Summary layer | Common Mistakes additions reverted |
| D10 Key-facts layer | Five facts lines keep an added clause; all within the cap |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | bcb, defender, rules_primer rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only citation changes inside existing runs. No site-reviewer (declared) |

## What this method could not have found
- Whether the remaining bare "(602(a))" sites in other files are each correctly 602(a)-only (left by design).
- A reader who looks up an act clause and stops at "may also be assessed" without reading 602(a).

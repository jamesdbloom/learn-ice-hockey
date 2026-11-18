# W481: Defender quotes the women's-checking rule in full and keeps "none at all"; Mental Game and Body Contact and Battles name exactly which British rules they read (18 November 2026)

**Files changed:**
- **Content:** positions/defender.md, off-the-ice/mental_game.md, technique/body_contact_and_battles.md
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:** From W480 (3) and (4), From W476 (1).
- **Authors:** two agents.

## What changed (voiced)
| Site | Before | Now |
|---|---|---|
| defender :616 | "In women's hockey there is none at all, because the IIHF and PWHL allow a check only with "a clear intention of playing the puck"." | "In women's hockey there is none at all: the IIHF and PWHL allow a check only with "a clear intention of playing the puck or attempting to 'gain possession' of the puck", and once it is past you a hit does neither." |
| mental_game :151 | "§1 quotes IHUK's… Outside the leagues IHUK runs, ask and get it in writing." | "§1 quotes four of IHUK's… For any other league, ask and get it in writing." |
| bcb :43 | "non-checking at both its levels" | "non-checking at U16 and senior" |

**Why each changed**
- **defender :616:** the old quotation dropped a limb of the rule, IIHF 101.1 / PWHL 52.1(i). It erred strict, but it was still a misquote. The conclusion holds.
- **mental_game :151:** "Outside the leagues IHUK runs" implied that every league IHUK runs is settled by what §1 quotes. In fact §1 covers only the Junior, U10, NIHL Division 1/2 and WNIHL Rules of Competition. NIHL National, the SNL and BUIHA Varsity are unread (bcb :139-140).
- **bcb :43:** "both its levels" could be heard as two divisions. The new wording matches the same file's :136 and the WNIHL RoC (`:152-153`, `:387-388` "WNIHL (Senior & U16)").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **All three OK.** The quotation is verbatim in IIHF 101.1 (both editions) and PWHL 52.1(i). "None at all" holds: the only permission is puck-tied, and the push-and-lean pursuit clause is not a hit. Neither IIHF Situation Handbook has a Rule 101 situation. "Four" matches bcb :135/:152-158. "U16 and senior" matches the WNIHL table. |
| safety-reviewer | **CLEAR.** No edit is more permissive. "None at all" stays unconditional. Marked units: 4 → 4, 84 → 84, 203 → 203; 0 lost. |

### C11
The coordinator wrote no content.

### D15
No ⚠️ or amber changed. The check is mechanical only: `--bare` = 0, and `--panels --file` = 0 on all three files. No browser pass was run.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing.
  - dist/index.html: 19:49:40
  - Newest content file: 19:48:39
- **Gates:** pass — check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets.
- **check_counts:** no change.
- **check_marker_pairs:** 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF 101.1 (both editions), PWHL 52.1(i)/(ii), USAH 604(a), HC 7.3, IHUK WNIHL/Junior/U10/NIHL RoC |
| D2 Exceptions | 101.1 pursuit clause |
| D3 Cross-book divergence | women's checking: restricted (IIHF, PWHL) vs barred (USAH, HC, WNIHL) |
| D4 Citation integrity | quotation completed |
| D5 Provenance | not engaged |
| D6 Negative existence | no Rule 101 situation in either handbook (searched) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | "four" matches bcb §1 |
| D9 Summary layer | defender facts :607 and KT :1035 consistent |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | not rendered |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | mechanical only (see above) |

## Found, not fixed
- **bcb :178, :185, :191, :530** still say "both its levels". This is equivalent but could be read the same ambiguous way (nit).
- **101.1 truncation:** the winger :1020 trailer still truncates the quotation (not voiced). A corpus sweep for other truncated 101.1/52.1 quotations was not reliable by regex.

## What this method could not have found
- An official ruling on contact with a player who has just chipped the puck past you.
- Real synthesised audio.

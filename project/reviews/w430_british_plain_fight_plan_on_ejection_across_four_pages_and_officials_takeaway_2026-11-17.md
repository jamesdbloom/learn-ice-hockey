# W430: the British plain willing fight is "plan on the ejection" on uk_rules, team_play, special_teams and body_contact; a hand on an official is no longer ranked below spitting; and a fight's power-play cost is stated correctly (17 November 2026)

**Content files changed:** foundation/uk_rules.md, off-the-ice/team_play_and_culture.md, systems/special_teams.md, technique/body_contact_and_battles.md.
**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W429 (1)–(4) and From W428 (4).
- **Brief:** scratchpad/w430/brief.md, with a W430 addendum on the approved British stance.
- **Authors:** four, one file each (A uk_rules, B team_play, C special_teams, D bcb). The brief named the CLAIM, not the line, so each author ran a layer test of the claim across every layer of its file.

## What changed (voiced)
| Unit | Now |
|---|---|
| uk_rules :300, :304, :306 | Quotes Section 6 (*"shall be penalised with a 5-minute Major Penalty"*), then: "It never says whether that five replaces the IIHF book's automatic game misconduct for a plain willing fight, ⚠️ **so plan on the ejection.**" :306: "…which is why you plan on it inside the three as well". :304 drops "both matter more than the five minutes does". |
| uk_rules KT17 (60) | "**Expect a fight to end your game.** The Elite League need not eject you for a willing original fight in play that is your first major (count the season). NIHL, SNL and BUIHA Varsity rules leave it open: plan on ejection. ⚠️ **In women's hockey, and in an NIHL game's last five minutes or overtime, a fighting major ejects you.**" The old text said a plain fight "is softened" in NIHL, SNL and Varsity. An interim "spares" was ruled WRONG (permissive) by the rules reviewer. |
| uk_rules :415 | "A racial slur or taunt already earns a game misconduct (IIHF 75.5); a discriminatory slur is also at least a one-game ban…". No British text amends 75.5. |
| team_play :362 | "**The Elite League prices the fight itself lower — but not starting one, or going on punching. In the NIHL, the SNL and BUIHA Varsity, plan on the ejection.**" One disclosure follows, then "The instigator and the aggressor are ejected there too, and anyone who keeps fighting after being told to stop can be." The EIHL list now names "a player on their second major, anyone who fights after the original altercation has started" (Casebook 46.1 Note, 46.2). |
| team_play KT5 (56), CM :641 | "⚠️ **Never spit at or put a hand on an official: spitting ends your game in every book, a hand in most.** An obscene gesture ends it in most books with no warning first, and can in all six." HEAD said "each can end your game", and "…every book here but CARHA, where it starts as a misconduct". CARHA 46's "Notwithstanding" allows a gross misconduct. An interim version put the hand at "can" and was ruled MAJOR by safety. |
| special_teams facts :436 (294), :463 | :436: "Under the In-House Rules plan on any fight ejecting you: …without saying if the IIHF ejection still applies…". :463: "Two fighters' majors usually offset, with substitutes on at once (NHL and IIHF 19.2), so a fight rarely costs a power play, though starting it adds a minor that can leave your team killing a penalty. Its real price is a body off your bench for the night: under USA Hockey and Hockey Canada a fighting major always ends your game, and under the IIHF book plan on it." HEAD's "killed in full whoever serves it" was false: 19.2 says immediate substitution, and the page's own :719 agrees. |
| special_teams :1097, :1099 | "Only the Elite League clearly leaves a plain fight during play without an automatic ejection, and only while it is your first major. NIHL, the SNL and BUIHA Varsity … plan on it there too — and you are ejected in women's hockey and, in NIHL, in the last five minutes or overtime." :1099 gains the one-sentence disclosure. |
| bcb facts :1900 (298), :1905 (293), body :1930 | :1900: "In the NHL and PWHL the third man into an altercation faces a game misconduct at the referee's discretion, unless a match penalty is imposed in the original one (NHL 46.16, PWHL 46.15); if they then fight, a major and game misconduct, waivable only if the opponent clearly instigated (46.7 in both)". :1905: "…Section 6 never says an earlier fight escapes the IIHF's game misconduct, so plan on the ejection". :1930: "…the text does not settle, so **plan on the ejection there too.**" |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** the British restatements are OK at every site, and 75.5 is unamended across Britain. WRONG (permissive): uk_rules KT17 "spares". WRONG: team_play KT5/CM, where the CARHA gesture exception is false and "can" understates a hand or gesture in 4 of 6 books. Optional: team_play "second major", special_teams "first major", bcb :1900 scope.<br>**Confirmation:** all six sites OK. special_teams :463 was checked against NHL 19.2 and IIHF 19.2 (both editions), USAH 615(a), HC 7.10(b)/7.11(a), NHL 46.11 and IIHF 46.3/46.10. Optional: "Its real price can be…" (harsh as written). |
| safety-reviewer | **First read:** no Critical. MAJOR: team_play KT5/:641 ranked a hand below spitting, when deliberate force ends your game in 5 of 6 books. Minors: team_play :362 EIHL list and grammar; special_teams :463 scope and :1097 wording; bcb :1900 and :1905. Rulings: team_play :285 needs no 46.7 price; :410 "In Britain" is not a defect.<br>**Confirmation:** CLEAR on all four files. Agreed that the author was right to reject its own "killed in full" sketch, and that KT17 still reads with the EIHL as the exception. |
| site-reviewer | Four pages at 400×812 DPR 2 light/dark and 1440 light, on the 23:20:59 build. Every worst window unchanged (uk 44.6, team_play 42.7, special_teams 48.4, bcb 48.6). KT windows: uk 44.1, team_play 36.7, special_teams 44.4, bcb 34.2. Amber: uk +1 (the new "so plan on the ejection"). Nothing over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### Reviewer disagreement
uk_rules KT17 "spares": safety ruled it OK, the rules reviewer WRONG (permissive). The cautious reading, "need not eject", was applied, and safety then confirmed it.

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text applied by its file's author, or an author deviation that both reviewers confirmed:
- KT17: "Only" dropped, "eject you".
- special_teams :463: rewritten because the sketch's "killed in full" was false.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 23:20:59, and no content file is newer (last edit 23:18:38).
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all four files. Marked units: 81, 51, 67 and 202, unchanged. The uk_rules :300 and KT17 openings were rewritten and still carry their markers.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | In-House Introduction, Section 6, 101, 201; EIHL Casebook 46.1/46.2/46.10; IIHF v1.1 19.2, 20.4, Table 6, 39.5, 40.1, 46.1/46.3/46.4/46.7, 75.5, Situation 46.1; 2026/27 19.2, 46.1/46.10/46.12, 75.5; NHL/PWHL 19.2, 40.1–40.4, 46.7, 46.11, 46.14–46.16, 75.5; USAH 601(c)(7)/(d)(2)/(d)(8)/(e), 615(a); HC 7.10, 7.11, 11.2, 11.3, 11.5; CARHA 33(a), 46, 71(a), 81 |
| D2 Exceptions | 46.7 and Casebook 46.2 waivers; IIHF 46.6 unwilling combatant; coincidental majors (19.2) |
| D3 Cross-book divergence | A hand or an obscene gesture against an official: mandatory in 4 of 6 books |
| D4 Citation integrity | PWHL 46.15; Casebook "2nd Major Penalty" |
| D5 Provenance | Section 6 quotations verbatim |
| D6 Negative existence | "the text does not settle" (W429 sweep); no British amendment of 75.5 (EIHL Casebook amended-rules list) |
| D7 Cardinal rule | "Do not fight" kept as coaching |
| D8 Numeric ownership | "most"/"all six" counts recorded here |
| D9 Summary layer | uk_rules KT17; team_play KT5 and CM; layer test for the claim in all four files |
| D10 Key-facts | special_teams :436; bcb :1900, :1905 read alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | "It never says" antecedent; :1097 "it does apply" antecedent |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **Corpus sweep (claim, not line):** sibling documents carrying the old "hand or spit: each can end your game" pairing, or "a fighting major is killed in full".
2. **special_teams :463 (optional, errs harsh):** "Its real price can be a body off your bench". The page also has no PWHL in-game fight price and no CARHA fight price.
3. **team_play :362:** omits the EIHL Casebook 46.2 waiver (errs harsh).
4. **bcb :1904:** "the British edition is unresolved" looks at odds with the In-House Introduction naming v1.1 (rules reviewer, not reached).
5. **USA Hockey Casebook:** whether 601(c)(7) (touch: misconduct) or (d)(8) (contact: game misconduct) governs a hand on an official.
6. **EIHL Casebook and 2026/27 46.12:** whether "rules not mentioned" keeps the 2026/27 automatic game misconduct for an EIHL plain fighter. Only the League can say.

## What this method could not have found
- How British referees actually call a plain NIHL fight.
- League practice on coincidental majors.
- Real audio.

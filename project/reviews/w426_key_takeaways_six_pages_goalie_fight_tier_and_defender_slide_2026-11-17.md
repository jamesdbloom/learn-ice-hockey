# W426: Key Takeaways shortened on six more pages; a goalie joining a fight is ejected under CARHA, not "can"; the defender slide-from-behind line no longer overstates or understates the NHL and PWHL (17 November 2026)

**Content files changed:**
- foundation/uk_rules.md
- systems/neutral_zone_systems.md
- systems/breakouts.md
- technique/puck_handling.md
- hockey-iq/time_and_space.md
- foundation/core_principles.md
- positions/goaltender.md
- systems/faceoffs.md
- positions/defender.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W425 (1)–(3).
- **Effect:** long Key Takeaways across the corpus fell from **25 to 16**.
- **Brief:** scratchpad/w426/brief.md (the W425 brief plus the W425 lessons, including the owner's 9 Nov helmet-clash decision).
- **Authors:** seven (A–G), each owning its file set exclusively.

## What changed (voiced)
| Unit | Now |
|---|---|
| uk_rules KT19 | 77 → 66 words. "…is at least a one-game ban, for every team you play for." Elsewhere, Elite League included, plan on it. An interim draft dropped the cross-league clause; safety ruled that a MAJOR and the clause was restored. Accepted over-60 exception. |
| neutral_zone_systems KT4 | 73 → 56 words. "…no book caps charging at a minor." The closed one-book Hockey Canada match was moved to its carriers. |
| breakouts KT12 | 70 → 60 words. "Any cover the rule gives ends when you pass, and Hockey Canada and CARHA give none you can rely on." |
| breakouts KT11 | 63 → 60 words. "If your goalie has come off for the extra skater, make no pass across the front of your own empty net — an own goal is the only way they can score from here." The overtime bench-minor limb is carried in the body, facts and Common Mistakes. |
| breakouts KT13 | 62 → 59 words. The suspension tier was cut; it is carried in What it costs. |
| puck_handling KT10, KT3 | 69 → 59 and 64 → 60 words. KT10 now reads "CARHA can for any hold". KT3 is reordered so the instruction comes first: "A violent bump can end your game under Hockey Canada and CARHA, and an injuring one does." |
| time_and_space KT3 | 69 → 60 words. "⚠️ **Goalies: never look away from a live shot.**" replaces "It reverses for the goalie", which had no antecedent. |
| core_principles KT10, KT11 | 66 → 47 and 62 → 55 words. The CARHA "may stand their ground" permission is kept. "A major that ejects you with at least a one-game ban". KT11 trims posture mechanics only. |
| goaltender KT10 | "Leaving it is a minor in most books. ⚠️ **Going in can end your game:** joining the fight ejects you in most books and can in every one; …" Amber went from 73% of the line to 10%. |
| goaltender facts :1169, :1179, body :1187, :1193, :1194, CM :1687 | **The same claim was fixed in every layer.** "Can under CARHA" was wrong in the cheaper direction. CARHA 2026 37(d) gives a goalie who leaves the crease to join a fight, act as peacemaker or take part in another fight a mandatory game misconduct; 59(b) does the same for any player. The IIHF citation is now scoped by edition: 2026/27 46.1/46.12 shall, 2025/26 46.1 may. The NHL is now named (46.14 major; 46.2 aggressor GM). Third man in is discretionary under NHL 46.16, PWHL 46.15 and IIHF 46.14/46.7. :1193 also says the IIHF 2025/26 book and the PWHL eject the instigator and the aggressor (IIHF 46.3, 46.4; PWHL 46.11, 46.2); its interim "say only … may be ejected" was rules WRONG. |
| faceoffs KT15 | No words changed. The amber ends after the USA Hockey level list, so its share fell from 54% to 34%. |
| defender facts :820 | "NHL, PWHL: a push or charge ejects" (299/300). The original "unclear, no more lenient" understated the rule. An interim "no minor; a major ejects" overstated it: 43.3 reaches only a cross-check, push or charge, and a slide can be tripping or clipping. |
| defender body :840 | "**The NHL and PWHL write no catch-all.** Their checking-from-behind major, which always carries a game misconduct, names a cross-check, push or charge from behind (43.3, 43.5), and a slide outside those words can still be called tripping or clipping." This replaces "their silence is not permission". |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** 10 sites OK.<br>• defender :820 WRONG (overstates).<br>• goaltender KT10 WRONG (cheap for CARHA, 37(d)/59(b)); the same frame appears at four more sites.<br>• Every kept tier was checked: holding, cage grab, bump, delayed offside, own goal, the DOPS ban, and charging having no minor cap in any book.<br>**Confirmation:** everything OK except :1193 (WRONG, cheap: IIHF v1.1 46.3/46.4 and PWHL 46.11/46.2 eject the instigator and the aggressor). Its replacement text was applied. |
| safety-reviewer | **First read:** no Critical.<br>• MAJOR: uk_rules KT19 cross-league ban.<br>• Minor: goaltender KT10 amber on the cheapest price; defender body "silence"; breakouts "lose".<br>• Rulings: nzs KT4 OK; core KT10 permission kept; time_and_space OK; faceoffs KT15 OK.<br>**Confirmation:** CLEAR. "Going in can end your game in every book" is true heard alone. |
| site-reviewer | Nine pages at 400×812 DPR 2 light/dark and 1440 light, 18:04:14 build.<br>• Worst windows unchanged except core_principles, 37.7 → 42.5: its KT section, same amber in shorter text.<br>• KT windows: uk_rules 43.0, nzs 12.9, breakouts 15.5, puck_handling 7.7, time_and_space 5.6, core 42.5, goaltender 24.0, faceoffs 30.4, defender 20.5.<br>• Amber-run and ⚠️ counts match HEAD on every page.<br>• All four amber targets are as briefed.<br>• Nothing over 50% at 400. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, an author correction confirmed by a reviewer, or a bold-boundary move with no word change.

The goaltender fighting claim was briefed as a claim, not a line, and repaired in six units by its author. The rules and safety reviewers confirmed every unit.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 18:04:14, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all nine files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **NHL:** 27.6, 43, 44, 46.2/46.11/46.14/46.16, 57.2, 78.5(xi), 83.3<br>**PWHL:** 27.6, 43, 46.1/46.2/46.11/46.15, 51.3/51.5<br>**IIHF:** 27.5, 43, 46 (both editions)<br>**USAH:** 604, 615, 622, 624(b)(1), 630(d)<br>**HC:** 6.11, 7.3, 7.4, 7.10, 8.1<br>**CARHA 2026:** 30(a), 32(d), 37(c)/(d), 49, 52, 59, 63, 66 Note 2, 72(e)<br>**IHUK DOPS 2026-27:** §5, §11, C.1 |
| D2 Exceptions | Unwilling-combatant waiver; IIHF edition split; slide outside 43.3's verbs |
| D3 Cross-book divergence | Goalie fight tiers per book and edition |
| D4 Citation integrity | :1193 IIHF citation scoped to edition; NHL 46.14/46.2 added |
| D5 Provenance | Not engaged |
| D6 Negative existence | "No book caps charging at a minor" |
| D7 Cardinal rule | Every KT leads with its instruction |
| D8 Numeric ownership | Not engaged |
| D9 Summary layer | Goaltender fight claim fixed in KT, facts, body, What it costs and CM together |
| D10 Key-facts | defender :820 and goaltender :1169/:1179 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads; one MAJOR fixed |
| D12 Read-aloud | time_and_space dangling "it" fixed |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **16 long KTs remain.** Accepted exceptions: risk KT9, faceoffs KT3, zone_entries KT10, uk_rules KT19, shooting KT5, forechecking KT2, goaltender KT9 and game_management KT14.
2. **Corpus-wide "may be ejected" for IIHF 2025/26 or the PWHL as the whole fighting answer.** It omits the instigator and aggressor ejection (IIHF 46.3/46.4, PWHL 46.11/46.2). Candidates: uk_rules :306, body_contact_and_battles :1925/:1932, rules_primer :534, team_play_and_culture :361.
3. **goaltender body :1187:** names no instigator tier. A goalie who travels to a fight meets the first instigator criterion.
4. **DOPS C.1** lists the boarding and head-check bans with no penalty grade. Whether a boarding minor triggers one is open (uk_rules KT19 and :413 say "a boarding major").
5. **NHL instigator** (46.11/46.12) is not checked in goaltender.
6. **core_principles KT section** is now that page's worst window at 400px (42.5).

## What this method could not have found
- Which IIHF edition governs a given British competition. The In-House Rules use 2025/26.
- The EIHL Casebook fighting rule.
- Real audio.

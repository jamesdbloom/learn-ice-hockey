# W423: the longest Key Takeaways on six pages cut to 60 words or fewer, each leading with the instruction and keeping one price (17 November 2026)

**Content files changed:**
- positions/winger.md
- systems/special_teams.md
- foundation/language_and_glossary.md
- systems/offensive_zone_play.md
- positions/center.md
- positions/defender.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Owner priority:** readability first (8 Nov). The work was chosen from `check_readability.py`. Across the corpus, long Key Takeaways fell from **59 to 46**, and the six pages went from 13 KTs over 60 to none (longest 160 → 60).
- **Brief:** scratchpad/w423/brief.md. Each KT is a kernel voiced alone. It leads with what a player does and keeps at most one price tier. Every removed limb needs a per-limb layer test naming its carriers in the same file. Never cheaper, never rescoped, ⚠️ kept.
- **Authors:** six, one file each, letters A–F.

## What changed (voiced)
| KT | Words | Now |
|---|---|---|
| winger KT10 | 152 → 60 | Backcheck instruction; "⚠️ **If you see their numbers, pull up:** a check from behind ends your game in most books, and can in all." |
| winger KT11 | 161 → 54 | Faceoff instruction; "⚠️ **Never lead with your helmet:** plan on a head-butting call, a double minor or more in every book and an ejection in most." The second amber run (the helmet-clash tariff) is gone; that tariff is carried at facts :557, body :584 and CM :898. |
| winger KT15 | 64 → 57 | The chase limbs are now scoped "In an icing race"; "never hit whoever gets there first". |
| special_teams KT8 | 149 → 39 | "On the kill, pressure the puck, never the back… ⚠️ **In most books checking from behind ends your game, and in every book it can.**" An interim sentence, "Hockey Canada, CARHA and USA Hockey can make it a mandatory match", was rules WRONG and safety MAJOR and was deleted. |
| special_teams KT10 | 68 → 60 | The goalie-charge tiers are kept; "interference that injures them" moved to its carriers. |
| glossary KT11 | 70 → 52 | "Play the puck, not the goalie… ⚠️ **A charge on a goalie can end your game in any book:**" with Hockey Canada "always", CARHA "in the crease or if it injures", and USA Hockey "plan on a match for a reckless one". |
| glossary KT12 | 150 → 59 | "hold your ice — no lean, no push… ⚠️ **Never shove with the shaft:** a cross-check can end your game in every book, and on the back it can be called checking from behind, which ends it in most." |
| ozp KT8 | 129 → 60 | "⚠️ **Never hit a winger facing the glass: it is checking from behind, and ends your game in most books and can in every one.**" The bold run now covers the price. |
| center KT6 | 121 → 48 | "Never finish a check on a turned back… In most books a call for checking from behind ends your game every time, and in every book it can." |
| center KT9 | 70 → 50 | "⚠️ **Arrive under control**: charging a goalie can end your game in every book, and always does under Hockey Canada, and under CARHA in the crease." |
| defender KT2 | 121 → 58 | "⚠️ **Never finish it as a hit, and never hit from behind:** checking from behind ends your game in most books, charging and boarding can, and charging applies in non-checking leagues too." The interim "can each end your game" made checking from behind cheaper (safety MAJOR) and was corrected. |
| defender KT3 | 78 → 59 | "a high or injuring cross-check ends your game under Hockey Canada and CARHA, and a reckless one under USA Hockey" (609(b) is the mandatory floor; 609(c)'s match is "may"). |
| defender KT6 | 66 → 56 | "Treat the players' bench as a trap" moved to its carriers. |

Every removed limb has at least one carrier in the same file. The authors' reports list them, and the carriers are summarised in scratchpad/w423/results.md. **Mandatory match tiers are not repeated in the KTs.** The safety ruling: "ends your game" is the true floor of that tier, and the match stays in facts, What it costs and CM.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** every kept claim was checked in six books plus the British books.<br>• "Checking from behind ends your game in most books (5 of 6), can in every one" is confirmed: NHL/PWHL 43, IIHF 43.2/43.3, HC 7.5(a), CARHA 53(a); USAH 608(a) is the exception.<br>• special_teams KT8 is WRONG.<br>• winger KT11 head-butting is OK (IIHF 47 writes no tier below a double minor; "most" holds if the butt lands).<br>• defender KT2/KT3 and center KT9 are OK.<br>**Confirmation:** all four fixes OK. |
| safety-reviewer | **First read:** no Critical.<br>• **MAJOR:** special_teams KT8; defender KT2.<br>• **Minor:** glossary KT12 (a front-on shove heard as a minor); center KT9 (CARHA 52(b) mandatory in the crease).<br>• **Rulings:** the match tier is not needed in a KT; glossary does not need the HC/CARHA head limb in the KT; defender KT3 is upheld; winger KT11 is acceptable; the ozp KT8 amber is fine.<br>**Confirmation:** CLEAR. |
| site-reviewer | Six pages at 400×812 DPR 2 light/dark and 1440 light, on the 17:02:09 build. Every worst window is unchanged: winger 44.2, special_teams 48.4, glossary 34.3, ozp 49.0, center 36.6, defender 47.7. Key Takeaways windows: 17.9, 44.4 (was 51.3 in W384), 10.4, 17.8, 21.7, 20.5. Nothing over 50% at 400. 0 bare, 0 untreated, 0 panels, 0 console errors. Winger amber runs went 95 → 94 (the KT11 tariff run); the safety reviewer had already ruled it acceptable. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied verbatim: special_teams option A (a deletion), defender M2, glossary m1 and center m2.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 17:02:09, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all six files.
- **check_layer_echo:** the highest KT pair on each page is ≤ 6.5%.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL/PWHL 41–43, 47, 59, 63.2; IIHF 41–43, 47, 59, 201.1; USAH 603, 607, 608, 609, 610(c), 619, 620; HC 7.1, 7.2, 7.4, 7.5, 7.6, 8.5, 9.2; CARHA 30, 48(b), 49, 52, 53, 54; In-House 101; EIHL Casebook |
| D2 Exceptions | USAH 608(a) minor tier behind "most books"; CARHA 52(b) crease condition |
| D3 Cross-book divergence | "most / every" tallies re-derived |
| D4 Citation integrity | Not engaged (KTs carry no rule numbers) |
| D5 Provenance | Not engaged |
| D6 Negative existence | Not engaged |
| D7 Cardinal rule | Instruction leads every KT |
| D8 Numeric ownership | Not engaged |
| D9 Summary layer | The KT layer itself; per-limb carrier lists |
| D10 Key-facts | Not engaged (no facts line changed) |
| D11 Reader safety | safety-reviewer, two reads; two MAJORs fixed |
| D12 Read-aloud | Every KT rendered and read alone; "Important." kept |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **Glossary:** the HC/CARHA head-contact cross-check tier (7.6(b), 7.7(b), 54(b)) is carried only in the body (:430). CM :511 is the place to add it if a summary layer should carry it.
2. **offensive_zone_play:** the 1,383-character high-stick price paragraph puts its only instruction last. Reorder (cheap, safe).
3. **Optional, rules:**
   - winger KT11 and CM :898: "an ejection in most if it lands".
   - glossary KT11: "Under USA Hockey a reckless one must eject you and can be a match".
4. **Many KTs now sit at exactly 60 words** (winger KT5–9, 12; others), so any addition will re-flag them.
5. **46 long Key Takeaways remain corpus-wide.** Next by length: language-agnostic list from `check_readability.py`. The leaders are rules_primer (127), game_management (146, KT14 deliberately whole), playing_without_the_puck (118), switching_positions (120), shooting (119), risk_management (113) and defensive_zone_coverage (116).
6. **Unvoiced verification trailers** (e.g. winger :1017, center :1027) still name KT numbers whose rule content was cut.

## What this method could not have found
- Whether a listener who hears only the KT now under-prices an act whose match tier lives in the body.
- League regulations.
- Real audio.

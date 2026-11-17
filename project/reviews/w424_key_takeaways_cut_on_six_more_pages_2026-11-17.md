# W424: the longest Key Takeaways on six more pages cut to about sixty words, with two cheaper interim forms and one amber density spike caught (17 November 2026)

**Content files changed:**
- foundation/rules_primer.md
- hockey-iq/playing_without_the_puck.md
- positions/switching_positions.md
- technique/shooting.md
- hockey-iq/risk_management.md
- systems/defensive_zone_coverage.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W423 (1). This is readability work, the owner's priority.
- **Corpus effect:** Key Takeaways over 60 words fell from **46 to 33**.
- **Brief:** scratchpad/w424/brief.md, which is the W423 brief plus binding lessons:
  - The approved checking-from-behind form is "in most books … ends your game, and in every book it can".
  - Never write "can" for a mandatory tier.
  - A match tier may leave a KT when it is carried elsewhere.
  - rules_primer is a rules document.
- **Authors:** six, one file each, lettered A–F.

## What changed (voiced)
| KT | Words | Now |
|---|---|---|
| rules_primer KT5 | 128 → 60 | "**Keep your hits below the shoulders.** Every book can eject you for an unintended head hit, the NHL when a major injures the face or head; under USA Hockey even a careless one must." The concussion limb is unchanged. The old "Outside the NHL … without intent" leaned permissive: NHL 20.4 makes a game misconduct mandatory when a Table 5 major injures the face or head. |
| rules_primer KT7 | 87 → 49 | Approved form, plus "Under USA Hockey it must if it is forceful at the boards, reckless, or sends them head first into the boards or net." |
| rules_primer KT8 | 104 → 59 | "⚠️ **A called slew-foot ejects you under the NHL, PWHL, IIHF and USA Hockey;** **Hockey Canada and CARHA can, and Hockey Canada must if it injures.** ⚠️ **Never cross-check above the shoulders:** **it must end your game under CARHA, Hockey Canada and, if careless or intentional, USA Hockey.**" The amber ends where each claim is true for every book it names. |
| pwtp KT10 | 118 → 59 | "⚠️ **A hit from behind can cause life-altering injuries; in most books it ends your game, and in every book it can.**" |
| pwtp KT3, KT11 | 64 → 60, 61 → 60 | Wording only. |
| switching KT8 | 121 → 37 | Approved form only. An interim closed two-book match list ("a mandatory match under Hockey Canada and CARHA") left out USA Hockey 608(c). Safety rated it MAJOR, and the sentence was cut. |
| switching KT6 | 64 → 53 | The second-violation minor moved to its carriers. |
| shooting KT5 | 120 → 65 | "…never touch the goalie or block their way back. Charging a goalie can end your game in every book and always does under Hockey Canada; checking one from behind ends it in most books and can in every one." An interim form dropped "and can in every one", which left USA Hockey with no price (safety MAJOR). This KT is an accepted over-60 exception. The spinal limb "take a shove head up, chin off your chest" is demoted under the owner's document-relative rule; it is still voiced first at Key focus :20. |
| risk KT11 | 114 → 52 | Approved form. |
| risk KT5 | 68 → 56 | "Over it on purpose is at least a minor anywhere, and under the NHL, IIHF and PWHL so is an accident from your own end." The interim "several books" was too vague. |
| risk KT9 | 83 → 74 | **Accepted over-60 exception.** The slew-foot tiers carry mandatory routes, so cutting them would have made the KT cheaper, and safety ruled against splitting it. |
| dzc KT4 | 116 → 60 | "⚠️ **Checking from behind ends your game in most books and can in every one; under USA Hockey, forceful at the boards, head first or reckless, it must.**" |
| dzc KT11, KT12 | 61 → 59 | Wording only. |

Every removed limb has a carrier in the same file. The author carrier lists are in results.md, and the rules and safety reviewers spot-checked them.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** every kept claim is OK across the six books plus British hockey.<br>• Caveat on rules_primer KT5's "Outside the NHL" (pre-existing): repaired.<br>• "Forceful at the boards" comes from the USAH Casebook, 608 Situation 1(1).<br>• pwtp KT3's "shadow" is CARHA 66(a) Note 2. The brief said 49 Note 2, which was wrong.<br>**Confirmation:** all five fixes OK. NHL 20.4 backs the KT5 NHL clause. CARHA reaches an unintended head hit through 49(a), 52(a) and 53(a) together with 30(a). |
| safety-reviewer | **First read:** no Critical.<br>• **MAJOR:** shooting KT5 lost "and can in every one".<br>• **MAJOR:** switching KT8 closed two-book match list.<br>• **Minor:** dzc KT4 "head first"; risk KT5 "several".<br>**Rulings:**<br>• The spinal-limb demotion is OK.<br>• Do not split risk KT9.<br>• rules_primer KT8 does not overstate Hockey Canada.<br>• KT5's concussion limb is intact.<br>**Confirmation:** CLEAR.<br>**Amber ruling:** set the KT8 boundaries as shipped. |
| site-reviewer | **First pass, 17:20:02 build:** rules_primer went 43.9 → **56.1** at 400px, over the line, because KT8 was 276 of 350 characters amber. dzc rose 43.9 → 45.0 in its KT section. The other four were unchanged: pwtp 40.3, switching 44.5, shooting 43.9, risk 43.8. Switching amber went 52 → 51 (the M2 cut).<br>**Re-check, 17:24:00 build:** rules_primer is back to 43.9, with its KT section at 37.7. KT8 has exactly 2 warn-inline spans, and the adjacent bold runs are separated by real spaces.<br>0 bare, 0 untreated, 0 panels and 0 console errors throughout. |

### C11
**The coordinator wrote no new words.** Its one proposal, the KT8 bold boundaries, moved runs only, and the safety reviewer replaced it with its own boundaries before anything was applied. **Every other post-review edit is reviewer text**, with one exception: rules_primer KT5. There the author fitted the rules reviewer's text to 60 words, changed "head" to "face or head" because the NHL rules say so, and dropped a bracket that voiced badly. Both reviewers then confirmed it.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 17:24:00. The last content edit was rules_primer at 17:23:26, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all six files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 20.4, 41.5, 42, 43, 45.5, 48, 52.2, 63.2; PWHL 42, 43, 48, 53.2; IIHF 42.4, 43, 48.3, 52.2, 63.2; USAH 607, 608 and Casebook 608 Situation 1, 610(c), 620(b), 639; HC 6.3, 7.5, 7.6, 7.7, 8.5(b), 8.8, 10.1; CARHA 30(a), 49, 50, 52, 53, 54(b), 55(a), 66(a) Note 2, 75(b), 86 |
| D2 Exceptions | USAH 608(a) minor tier; CARHA 50 needs intent; accidental clear over the glass in three books only |
| D3 Cross-book divergence | NHL is not the lenient outlier when a major injures the face or head |
| D4 Citation integrity | Not engaged in KTs (no rule numbers) |
| D5 Provenance | Not engaged |
| D6 Negative existence | Not engaged |
| D7 Cardinal rule | The instruction leads every KT |
| D8 Numeric ownership | Not engaged |
| D9 Summary layer | KT layer; per-limb carrier lists |
| D10 Key-facts | Not engaged (no facts changed) |
| D11 Reader safety | safety-reviewer, three reads; two MAJORs fixed |
| D12 Read-aloud | Each KT rendered; KT5 bracket avoided |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer, two passes |

## Found, not fixed (plan rows)
1. **33 long KTs remain.** Two are accepted exceptions: risk KT9 (74) and shooting KT5 (65).
2. **rules_primer Key focus :31** calls the NHL "the lenient outlier" on head checks. That is true for Rule 48 alone, but 20.4, 41.5, 42.5 and 45.5 eject when a major injures the face or head.
3. **switching Common Mistakes :609** says "plan on a match" for USA Hockey's reckless hit, but 608(c) is mandatory ("shall … in all instances").
4. **dzc KT section is now its page-worst window**, at 45.0.
5. **Summary layers outside the KT layer** were not layer-tested against the old, fuller KTs.

## What this method could not have found
- Whether a listener who hears only a KT under-prices an act whose match tier lives in the body.
- League regulations.
- Real audio.

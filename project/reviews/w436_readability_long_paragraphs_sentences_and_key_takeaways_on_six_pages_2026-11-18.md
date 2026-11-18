# W436: readability on six pages — no paragraph over 1,200 characters, no sentence over 60 words, no Key Takeaway over 60 words on goaltender, game_management, center, faceoffs, winger and shooting (18 November 2026)

**Content files changed:** positions/goaltender.md, systems/game_management.md, positions/center.md, systems/faceoffs.md, positions/winger.md, technique/shooting.md.
**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Owner priority:** readability and diagrams before the rule carry-overs (8 Nov 2026). Readable beats defendable.
- **Page choice:** the six pages with the worst `check_readability` figures.
- **Brief:** scratchpad/w436/brief.md. Split at natural or book boundaries, lead with the instruction, change no claim, never open a paragraph with ⚠️.
- **Authors:** six, one file each.

## Measured (check_readability.py)
| Page | longest sentence | paragraphs > 1,200 | longest paragraph | KT max |
|---|---|---|---|---|
| goaltender | 103 → 60 | 7 → 0 | 2,096 → 1,200 | 62 → 60 |
| game_management | 65 → 60 | 0 → 0 | 1,188 | **146 → 60** |
| center | 94 → 57 | 1 → 0 | 1,379 → 1,175 | 60 |
| faceoffs | 91 → 58 | 1 → 0 | 1,385 → 1,152 | 74 → 60 |
| winger | 87 → 56 | 2 → 0 | 1,299 → 1,194 | 60 |
| shooting | 76 → 60 | 2 → 0 | 1,421 → 1,196 | 65 → 60 |

**Site (400px):** game_management worst window 42.7 → 39.2, Key Takeaways window 42.7 → 22.9 (KT14 is 757 → 289 characters). Every other worst window is unchanged.

## What changed (voiced)
- **game_management KT14.** Was a 146-word ladder. Now: "**Hit only where checking is allowed. Let a passer or shooter go, pull out if you can, leave anyone turned away, and keep every hit off the head.** ⚠️ **No book caps a late hit at a minor. A call for checking from behind ends your game in most books every time, and can in every one.**"
  - The cut limbs are carried in the section lead (:1180), Common Mistakes "Finishing your check", and facts :1189–:1194: the HC/CARHA late-hit major ejection, USAH must-triggers, the HC/CARHA mandatory match, the HC head match, and USAH "plan on a match".
  - Safety upheld the cut as the owner's kernel rule.
- **faceoffs KT3.** "**Get low from knees and hips, not your head.** ⚠️ **A pre-drop helmet clash can get you thrown off the dot**, and costs at least a minor under Hockey Canada and CARHA, a minor and misconduct under USA Hockey. ⚠️ **Never lead with your helmet: expect a head-butting call**, a major and game misconduct or a match in most books."
- **shooting KT5.** "**Make the goalie move or block their view, then get the rebound.** ⚠️ **Screen outside the paint and off the red line; never touch the goalie or block their way back.** …"
  - An interim "Move the goalie sideways" was ruled a safety **MAJOR**: heard as an imperative, it tells the player to move the goalie's body, which is goaltender interference.
- **goaltender:** eleven long bullets split at book boundaries, for example "Fighting under the IIHF's 2025/26 book, the NHL and the PWHL" and "Fighting under CARHA, and in the UK". "each of these" became "a slash, cross-check, hook or trip", with HC 9.3(b), 9.2(b), 8.2(b) and 8.6(b) verified. KT9 is 62 → 60.
- **center, faceoffs, winger:** Common Mistakes and body ladders split into short sentences, with indented continuation paragraphs inside list items. winger gains a "Leading into an opponent with your helmet" Common Mistakes bullet (head-butting moved, no words changed).
- **Added ⚠️ so each split half keeps its spoken "Important.":**
  - center: "Get your depth from the knees and hips;"
  - shooting: "plan on the dearer"
  - goaltender: four places
  - winger: two markers moved, count unchanged
  - Safety ruled every one earned. All render as warn-inline, with 0 panels.

### Scope drift that the splits created, and the fixes
The rules-verifier found that cutting long sentences stripped a book's scope from a clause in four places.

**One was permissive:** goaltender :1646. "An accidental one may be a double minor…" lost its Junior/Senior scope, so a minor or female reader heard a double minor where HC 7.6(b) makes an injury a mandatory major and game misconduct. Now: "In Junior and Senior, an accidental one may be a double minor only for minimal or glancing contact… (9.5(a), (b) and Interpretation 2; 7.7)".

**Three were harsh** (a USAH-only clause read as universal):
- game_management :1227: now "Under USA Hockey, careless contact…"
- faceoffs :1323: now "There, a forceful hit… If the hit is reckless there…"
- center :707 and shooting :952: now "there"

A final sweep of every split sentence on the six pages found no others.

**Lesson for any readability wave:** splitting a sentence can detach a qualifier from its book. Check every new sentence that opens without a book name.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** the named sites keep their meaning. faceoffs KT3 "which adds a misconduct" was ambiguous. Four scope drifts, one of them permissive (goaltender :1646). game_management KT14 needed "A call for" restored. **Confirmation:** all OK. Three goaltender splits re-checked, and a sweep of every split found nothing new. |
| safety-reviewer | **First read:** no Critical. MAJOR on shooting KT5 ("Move the goalie"). Minors: faceoffs KT3 scope; USAH-scope drift at game_management :1227, faceoffs :1323 and shooting :952. Upheld the KT14 cut and every added ⚠️. goaltender :1648 "SPLIT HALF UNMARKED" confirmed a false positive (the HEAD source bullet had 0 ⚠). **Confirmation:** CLEAR; "expect a head-butting call" accepted. |
| site-reviewer | Six pages at 400×812 DPR 2 light/dark and 1440 light, on the 05:19:06 build. Nothing over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. Indented continuations render inside their `<li>`. It also flagged goaltender :1648 for a safety call, which safety had already ruled a false positive twice. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied by its author, or an author deviation a reviewer confirmed: faceoffs "expect" and dropping "and", shooting "Make the goalie move".

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 18 Nov 05:19:06. The last content edit was 05:17:13.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** --bare 0, and --panels 0 on all six files.
- **check_marker_pairs:** 0 LOST on all six files. One SPLIT candidate, goaltender :1648, ruled a false positive.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | No claim changed. Re-scoped clauses checked against USAH 602(a), 608(a)–(c), 613(e), 619(a), 620(a)/(b); HC 6.2(c), 7.5, 7.6(a)–(c), 7.7, 8.2(b), 8.6(b), 9.2(b), 9.3(b), 9.5(a)/(b) and Interp 2; CARHA 48(b), 53(a), 57(b); NHL/PWHL 43, 47; IIHF 43.2/43.3, 59.3 |
| D2 Exceptions | 9.5(a) Junior/Senior only; 7.6(b) minor and female |
| D3 Cross-book divergence | Kept per book at every split |
| D4 Citation integrity | No citation changed |
| D5 Provenance | Not engaged |
| D6 Negative existence | Not engaged |
| D7 Cardinal rule | Instruction-first leads kept or added |
| D8 Numeric ownership | Not engaged |
| D9 Summary layer | KT14, KT3 and KT5 cut to kernels, with each removed limb layer-tested in the body, CM and facts |
| D10 Key-facts | Not changed |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | All splits rendered; chunk positions read; pointers resolved |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links; list continuations render inside items |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **winger:** "Under Hockey Canada a cross-check above the shoulders is a major and game misconduct in every division, injury or not" overstates minor and female hockey, where goaltender scopes it to deliberate. Pre-existing; errs harsh.
2. **winger :530 net-front ladder** is still dense (six books in about 100 words). Making it lighter needs a demotion with a layer test.
3. **The next readability wave:** run check_readability for the next worst pages. Candidates by the numbers: defender (maxS 71, longP 1), offensive_zone_play (84, 1), defending_the_rush (84), special_teams (70, 2), body_contact_and_battles (65, 2), language_and_glossary (70, 1), zone_entries (KT 70), risk_management (KT 76), uk_rules (KT 74).

## What this method could not have found
- A pronoun whose antecedent is clear on the page but falls in a different chunk for a listener.
- Real audio.

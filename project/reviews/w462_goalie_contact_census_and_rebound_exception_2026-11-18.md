# W462: goalie contact costs the goal across seven documents; the 69.7 rebound exception is limited to incidental contact; an over-read of 69.1 is caught before it ships (18 November 2026)

**Content files changed:**
- positions/winger.md
- hockey-iq/time_and_space.md
- foundation/uk_rules.md
- systems/offensive_zone_play.md
- foundation/language_and_glossary.md
- foundation/core_principles.md
- technique/shooting.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W461 (1), worked as a read-only census of the NHL, IIHF and PWHL rule on whether a goal stands after an attacker contacts the goalie. The census searched for the act, not a phrase.
- **Authors:** six agents, one per file. A seventh agent took shooting after the coordinator's sweep.

## The rule, as the books state it
| Situation | Goal | Rule / table row |
|---|---|---|
| Contact the attacker starts with a goalie **in** the crease, incidental or otherwise | disallowed | 69.3 / PWHL 71.3; Table 14 1C, 1E |
| Contact **outside** the crease, more than incidental | disallowed | 69.4 / 71.4; Table 14 2D |
| Contact **outside** the crease, incidental, with a reasonable effort to avoid it | **allowed**, with no impairment condition | 69.1; Table 14 2B |
| **Incidental** contact in a rebound or loose-puck play, in or out of the crease | allowed | 69.7 / 71.7; Table 14 4A |
| **Non-incidental** contact in that same play | disallowed | Table 14 4B |

## What changed (voiced)
| Site | Defect at HEAD | Now |
|---|---|---|
| winger, new sub-bullet after :770 | 69.3 and 69.4 absent from the body | "**Contact costs the goal on its own.** Start any contact with a goalie in the crease, incidental or not, and the goal comes off… Outside the crease it stands only if the contact was incidental and you made a reasonable effort to avoid it… The one other exception is incidental contact while you and the goalie both play a rebound or loose puck…" |
| time_and_space :557, facts :507 | position was the only way to lose the goal | adds contact you start in the crease, with the exception limited to incidental contact (69.7) |
| uk_rules :201 | the body did not carry 69.3 | 69.3 *"incidental or otherwise"*, "unless it was incidental and both were playing a rebound or loose puck (Rule 69.7)" |
| uk_rules KT7 (voiced alone, 60 words) | "contact that impairs them can wipe out your goal" | in-crease, outside-crease and Elite League limbs. The Casebook's blue-paint criterion is no longer voiced alone: it is now "contact you start". "A minor or major" is kept. |
| offensive_zone_play :618 facts, :644, :648 | incidental outside contact kept the goal with no condition | the 69.1 reasonable-effort proviso is added; "only" is gone from the facts line |
| language_and_glossary :362 | Net drive tied the goal to location only | "**Contact still costs the goal:** any you start with a goalie in the crease, unless it is incidental in a rebound scramble (69.3, 69.7), and anything beyond incidental with a goalie outside it (69.4)." |
| language_and_glossary :420 | "the only rows either book disallows put the attacker inside the crease", which is false: 1C, 1E, 2D, 3C, 3D and 4B disallow | "the only **screening** rows either book disallows (5B, 5D)…, though contact with the goalie is decided by other rows" |
| core_principles :138 | "In every book, a screen… keeps the goal" | scoped to the NHL, PWHL and IIHF. The contact limbs now include "anything more than incidental outside it or any you made no reasonable effort to avoid". |
| shooting :298, :495, facts :280, :472 (pre-existing) | "costs the goal outside a rebound or loose-puck scramble", read as excusing **any** contact in a scramble | the exception is limited to incidental contact |

## Two defects caught in review, both new text
1. **The rebound exception was stretched to all contact (permissive).** This is Family A. The census sketch's own wording, "incidental or not… outside a rebound scramble", reached three files. The rules-verifier ruled it against 69.7 ("incidental contact… will be permitted") and Table 14 4B. A coordinator sweep for the act then found the same shape already shipped at four sites in shooting.
2. **An over-read of 69.1 limb (1) against 2B (Family B, the W460 shape again).** The offensive_zone_play author added "though 69.1 can still take it if the contact impaired their ability to defend the goal". 69.1's own incidental-contact sentence and Table 14 2B both allow that goal unconditionally. The coordinator flagged the risk in the review brief, the rules-verifier confirmed it, and the clause was removed before shipping.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** 4 OK and 6 WRONG (Family A ×3, Family B ×2, glossary :420, core_principles minor); all fixed with its text. **Confirmation:** all OK, with core_principles one permissive gap (effort proviso), now fixed. "Both playing a rebound" narrows 69.7's rebound limb, harsh-only (filed). glossary :382 OK. |
| safety-reviewer | **First read:** CLEAR, plus one Minor: KT7's "a penalty" understated IIHF 69.2's minor-or-major. Its 60-word text was applied. **Confirmation:** CLEAR. Every unit is stricter than HEAD, and "Important." counts are equal in all seven files. |
| site-reviewer | Seven pages at 400 light/dark and 1440 light on the 15:10:14 build. ⚠️ counts equal HEAD. 0 bare, 0 untreated, 0 panels, 0 console errors. Shooting's :298 and :495 amber runs form. Worst windows are all under 50%, and winger and ozp are unchanged. |

### C11
The coordinator wrote no content. Every replacement text came from a reviewer and was applied by the author, who checked it against the surrounding prose.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 15:10:14; the newest content file is core_principles at 15:09:39.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
- **check_counts:** no change.
- **check_callout_flow:** --bare = 0; `--panels --file` = 0 on all seven files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT across seven files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 69.1–69.4 and 69.7, and Table 14 situations 1–5 in full; IIHF 2026/27 69.1–69.4, 69.7 and Table 14 1–5; PWHL 71.1, 71.3, 71.4 and 71.7; EIHL Casebook Rule 69 |
| D2 Exceptions | 69.7 (incidental only); the 69.1 effort proviso |
| D3 Cross-book divergence | NHL, IIHF and PWHL match on these rows. The core_principles screen permission is no longer extended to USA Hockey, Hockey Canada or CARHA. |
| D4 Citation integrity | 2B and 4B cited; PWHL numbers given |
| D5 Provenance | not engaged |
| D6 Negative existence | "no table row" for incidental outside contact that impairs the goalie (scanned) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | each author swept every layer of its file |
| D10 Key-facts | ozp :618, t&s :507 and shooting :280/:472, each voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | KT7 checked voiced alone (chunk 045) |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W462)
1. **"You are both playing a rebound"** at shooting :298, time_and_space :557, uk_rules :201 and winger :771 narrows 69.7's rebound limb. "Simultaneously" belongs to the loose-puck limb only, so this errs on the harsh side. The rules reviewer's exact form is "…unless it is incidental and in a rebound, or while you both play a loose puck (69.7)".
2. **"Beyond/more than incidental" without the 69.1 effort proviso** may remain in body paragraphs of other documents. This is a minor permissive gap; search `content/` for `beyond incidental` and `more than incidental`.
3. **winger facts :504** says contact "loses it" with no 69.7 exception. It sits at 298/300 and errs harsh.
4. **IIHF "relevant contact" and Appendix IV's three-part test** were not reconciled with the outside-crease sentences.
5. **PWHL Table 14 situations 1–4** were not opened.

## What this method could not have found
- A paraphrase of the exception that names neither rebound, loose puck nor 69.7.
- The same shape in diagram captions; `site/` was not swept.
- Real synthesised audio.

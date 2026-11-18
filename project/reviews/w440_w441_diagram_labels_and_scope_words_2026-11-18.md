# W440 + W441: ten diagram labels moved off rink paint; "there" no longer lands on a place on the ice, and USA Hockey 620(b) reads "head, face or neck" across eight pages (18 November 2026)

**Diagram modules changed (W440)**, all in site/src/diagrams/:
- breakouts.mjs
- zone_entries.mjs
- rules_primer.mjs
- neutral_zone_systems.mjs
- special_teams.mjs
- defending_the_rush.mjs
- puck_support_and_spacing.mjs

**Content files changed (W441):**
- positions/center.md
- positions/winger.md
- technique/shooting.md
- systems/faceoffs.md
- foundation/rules_primer.md
- technique/body_contact_and_battles.md
- foundation/on_ice_communication.md
- systems/forechecking_systems.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## W440: diagram labels on rink paint

### Source
- **Plan row:** From W403 (2). These are the 12 severe label/paint crossings that W403 could not move with a hint.
- **Agent:** one diagram agent, so full builds did not race.

### Result
- `check_label_paint --severe` fell from 14 to 4.
- Two of the remaining four are known harmless: "if carried" is a width false positive, and the line through "carried offside" falls in a word gap.
- The other two are owner calls, below.
- No caption, describe text, player, route or zone changed.

### What changed
| Diagram | Change |
|---|---|
| breakout-up | "gone behind" → "committed". This is the section's own word ("committed behind the net") and the caption's. |
| dump-cross-corner | "long backhand retrieval" → "long retrieval", hint [-4, 7]. The phrase is the section's own, and the caption keeps "backhand". |
| icing-gaining-the-line | Hints [-8, 12] and [-6, -12]. Each label now sits beside its own puck, and only the red line crosses it. |
| nz-1-3-1 | "the read-maker" → "read-maker", hint [6, -8]. |
| pp-spread-5on3 | "the triangle" → "triangle", hint [3, 10]. |
| rush-gap-and-angle | Hint [-14, -10]. "puck carrier" pinned at its old coordinates. |
| rush-3-on-2-default | "takes the middle" hint [10.35, -14]. After review, A3 also gets hint [22.49, -2.02], which keeps "far wide man" beside A3 instead of under C's arrowhead. |
| rush-3-on-2-alternative | "the third attacker" → "takes the third", hint [10.35, -14]. The reviewer's text, from defending_the_rush.md :604: "the backchecker's job becomes the *third* attacker". The old label read as A3's name, against the caption's "which attacker it will be is not fixed". |
| support-angles | Hint [-9.5, -13]. |

### Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | **First read:**<br>• BETTER: breakout-up, dump-cross-corner, nz-1-3-1, icing ×2, rush-gap-and-angle.<br>• BETTER with a Minor: pp-spread-5on3 ("triangle" labels a circle glyph; owner call).<br>• WORSE (Major): rush-3-on-2-default and rush-3-on-2-alternative, where a label read as the wrong player's.<br>• Two W440 comments described geometry that the render does not show.<br>**Confirmation:** all four fixes CLEAR. Label coordinates match the reviewer's tested renders exactly. |
| site-reviewer | All nine host diagrams were checked in Chromium with the site's font stack. No overlaps and no clipping. "far wide man" sits beside A3; "takes the third" sits under C.<br>**Browser-font measurements:**<br>• support-angles blue line: holds (tight).<br>• support-angles red line: marginal (overlaps the "t" cell by 0.9 px).<br>• rush-3-on-2-default: holds, with about 0.25 px to spare.<br>• rush-gap-and-angle: does NOT hold. The blue line crosses the "c" of "closing". It is still a mild crossing rather than the severe "runs along" it replaced; see the plan. |

## W441: scope words that landed on a place on the ice

### Source
- **Plan row:** From W438 (2).
- **Census:** a read-only census (scratchpad w440) found 7 DEFECT and 16 AMBIGUOUS sites. In each, "there"/"here" was meant to name a book but came straight after a place noun (boards, net, crease, head or neck).
- **The W438 shape survived on four pages:** "if the hit is reckless there, plan on a match" straight after "head or neck" (center, winger, shooting, faceoffs).
- **CARHA 30(a), which covers any major, was heard as boards-only or crease-only** (rules_primer, body_contact, center, faceoffs, forechecking).
- **Brief:** scratchpad/w441/brief.md.
- **Authors:** eight agents, one file each. Every CARHA claim was checked against carha_2026.txt.

### What changed (voiced)
- **Every flagged "there" now names its book or rule.** Examples:
  - "Under USA Hockey, if the hit is reckless, plan on a match penalty (602(a))"
  - "Any CARHA major for body contact brings a game misconduct (30(a))"
  - "a 52(a) major"
  - "interference that injures an opponent anywhere on the ice is a mandatory major too (66(e))"
  - "under USA Hockey and CARHA, win it on the wall"
  - "in IIHF women's hockey, you may pin the puck"
- **The authors' layer sweeps found more of the same shape:**
  - body_contact, ten more sites;
  - forechecking :626 and CM :1113;
  - winger body :532;
  - center :707's leading sentence, found by safety.
- **USA Hockey 620(b).** "intentionally or carelessly contacts an opponent in the head, face or neck". Every statement of the rule in all eight files now says "head, face or neck"; before, most said "head or neck". USA Hockey's Heads Up quotations ("a severe head or neck injury") are left verbatim.
- **"match penalty"** replaces bare "match" in every line touched, wherever a British listener could hear "game".
- **Price precision found by the rules review:**
  - faceoffs :572 now reads "freezing it behind the goal line with their body out of the crease is a minor in all three" (USAH 614(c)(1), CARHA 58(b), HC 10.1(a) Interp 3(v)). It was "away from the net", which was wider than CARHA and USAH.
  - rules_primer :475 now reads "may be boarding under USA Hockey, in an Adult Male game as in any other". It was narrowed to Adult Male only, which leaned slightly permissive.
  - body_contact facts :776 now reads "43.2 bars a minor". It had credited 43.1.
  - body_contact :1824 now cites (621(c), 602(a)).
  - faceoffs :1232 now reads "Any CARHA major … unless it is for an accidental high stick that injures no one (62(b))".
  - on_ice facts :590 now reads "a no-contact outside screen is legal too".

### Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** no WRONG. Incomplete: faceoffs :572, bcb :776, rules_primer :475. Found ~26 "head or neck" 620(b) sites across five files. Pre-existing items went to the plan.<br>**Confirmation:** every changed unit is OK, and every quotation in the changed lines is verbatim from HEAD. |
| safety-reviewer | **First read:** no Critical or Major. All four rulings were upheld (shooting "their back", faceoffs :1216, bcb :127, on_ice :590). Minor: center :707's leading "there".<br>**Confirmation:** CLEAR. Spoken "Important." counts are equal to HEAD paragraph by paragraph in all eight files. |
| site-reviewer | All eight pages at 400×812 DPR 2 light/dark and at 1440 light, on the 08:40:00 build. Every worst window is unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. bcb :127 renders exactly as briefed. The one marker-pairs candidate (faceoffs facts :1217) is the artefact both reviewers ruled on: HEAD's :1217 carried no marker. |

### C11
The coordinator wrote no content or diagram text. Every post-review edit is reviewer text or an author correction that both reviewers confirmed:
- faceoffs :572 "with their body out of the crease" (the author's wording; the reviewer's sketch could be heard as the puck out of the crease);
- the 620(b) layer sweeps;
- the facts-cap rewordings at winger :512 and :800, forechecking :40 and :979, and faceoffs :1216.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 08:40:00; the newest source file is breakouts.mjs at 08:37:55.
- **Gates:** check_links --quiet, check_facts, check_absolutes (41 documents, 408 caption units), check_geometry and check_secrets all pass. check_counts --update made no change.
- **Callout flow:** `--bare` reports 0. `--panels --file` reports 0 on all eight content files.
- **Marker pairs:** 0 LOST. One SPLIT candidate, ruled an artefact.
- **Diagrams:** check_label_paint --severe reports 4. check_zones passes. check-arrivals: 0 hard and 8 advisory, unchanged.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **USAH:** 602(a), 603 Note, 608(a)–(c) and Casebook 608 Sit. 1, 614(a)/(c), Casebook 614 Sit. 12, 620(a)–(c), 621(b)/(c), 640(b).<br>**CARHA 2026:** 30(a), 32(a)/(d), 48(a), 49(a)–(c), 50(a), 52(a)/(b), 53(a)/(b), 56, 58(b), 62(b) Note, 63(a)/(b), 66(b)/(e).<br>**HC:** 7.3, 7.5(c), 8.5(a) Interps, 10.1(a) Interp 3(v).<br>**IIHF:** 43.1/43.2, 101.1. |
| D2 Exceptions | 30(a) accidental high stick; 602(a) "shall" vs 621(c) "may also" |
| D3 Cross-book divergence | the goalie-freeze minor in three books |
| D4 Citation integrity | 43.2 not 43.1; 602(a) added at :1824 |
| D5 Provenance | Heads Up quotations kept verbatim |
| D6 Negative existence | USAH has no goalie-vision provision (flattened sweep) |
| D7 Cardinal rule | "plan on a match penalty" |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | every flagged claim swept in body, facts, CM and KT |
| D10 Key-facts | facts lines read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | the defect class itself (scope words heard as places) |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer, plus diagram-reviewer for W440 |

## Found, not fixed
These are the plan rows From W440 and From W441:
- **Owner calls:** dump-and-the-trapezoid, nz-left-wing-lock, pp-spread "triangle".
- **Diagram text:** support-angles' describe says "right-hand boards" for top-boards placement.
- **Browser-font word gaps:** rush-gap-and-angle does not hold, and support-angles red is marginal.
- **Low-risk "there" sites** not dispatched.
- **620(b) "head or neck"** in files outside this wave.
- **rules_primer's stock "Any of these matches…" ×11.**
- **rules_primer :558:** the HC 7.3(c) condition.
- **NHL 69.1(1):** positioning can void a goal.

## What this method could not have found
- Scope words other than there/here, and places beyond the census list.
- 620(b) paraphrases that cite no number and say neither "head" nor "neck".
- Browser fonts on Windows, Android or Linux, where every word-gap measurement would shift.
- Real synthesised audio.

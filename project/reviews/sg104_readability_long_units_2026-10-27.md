# SG104: long paragraphs and long Key Takeaways (27 October 2026)

**Files:**
- content/foundation/rules_primer.md
- content/technique/body_contact_and_battles.md
- content/hockey-iq/risk_management.md
- content/positions/winger.md
- content/systems/zone_entries.md
- content/foundation/uk_rules.md
- content/off-the-ice/team_play_and_culture.md
- content/getting-started/getting_started.md
- content/technique/puck_handling.md
- content/foundation/on_ice_communication.md
- content/systems/breakouts.md
- content/positions/center.md
- content/positions/goaltender.md
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md

## Why
The owner's standing instructions are "readable beats defendable" and "shorter is better" (19 Oct). `check_readability.py` counted 34 paragraphs over 1,200 characters and 62 Key Takeaways over 60 words. A KT is voiced alone, and a long paragraph is one breath for a listener. Seven agents worked on disjoint pages from a shared brief (`SG104_BRIEF.md`). The brief: split at natural boundaries, lead with what a player does, and never separate a claim from its counterweight. A KT may drop a limb only if the body or facts carry it.

## Result
Corpus-wide, long paragraphs went from 34 to 8 and long KTs from 62 to 36. The pages outside this wave are untouched. Several KTs are deliberately back over 60 words to keep a safety limb:
- uk_rules KT17, KT18 and KT19;
- team_play KT4 and KT12;
- winger KT6, KT8 and KT11;
- risk_management KT5;
- breakouts KT6 and KT12;
- center KT9;
- getting_started KT14.

No rule, exception, tariff or disclosure was removed from any page. Each limb dropped from a KT is carried in that page's body or facts, and a reviewer checked each carrier.

## Reviews
Four safety reviewers and two rules verifiers did the first pass. After the repairs, two narrow re-reviewers read every repaired unit (list in the appendix below).

The first pass found these, all fixed:
- **rules_primer:**
  - The USA Hockey "which also costs the next game" clause had been deleted at three sites beside CARHA's ban. That breaks the owner's 21 Oct rule: a CARHA-only next-game clause must not imply USA Hockey has none. All three were restored.
  - KT8 turned two mandatory ejections into "can".
  - KT4 dropped IHUK women's hockey from the "always" list.
  - Kneeing "What it costs" had lost its ⚠️.
  - "Striking an official" became "physically assaulting an official" (SDP Note).
  - The CARHA kneeing definition was misattributed; NHL 50.4 should be 50.5.
- **center:**
  - KT6 and the split body paragraph read as an instruction ("Drive a player… into the boards"). Both were reworded to "Driving a player … is a mandatory match".
  - Four more such sentences found by sweep: :507, :805, :810, :819.
  - KT9 lost HC 8.5(b)'s interference-that-injures limb.
- **uk_rules:** KT18 lost EIHL 46.13's deliberate jersey removal. KT19's "late in the game" lost overtime and the threshold. KT17 lost the disclosure "the League does not say". KT22 was ambiguous.
- **team_play:** KT4 lost CARHA 49(a)'s duty to avert contact.
- **puck_handling:**
  - KT3 dropped "a violent bump can eject you" (HC 7.3(b)), and misattributed the next-game ban to Hockey Canada.
  - KT10 left CARHA's extra game beside a USA Hockey ejection.
- **winger:** KT8 said CARHA's charge rule was crease-only. The same claim was found and fixed at winger :530 and zone_entries KT11 (CARHA 52(b): "or who injures").
- **risk_management:** two splits created new amber panels, now moved inline. The :846 head half and winger :558 now have markers.
- **on_ice:** KT13 "the penalty that evens the numbers"; KT14 "or pushing".
- **breakouts:** KT6 "assume one in Britain"; KT12 "none at all under Hockey Canada or CARHA".
- **body_contact:**
  - :45 "Leaning, though, is not legal everywhere";
  - :79 "merely touched";
  - a marker on "keep it incidental and never lean", where the marker would otherwise have been lost.
- **The agents refuted part of the coordinator's sketch for KT8:**
  - CARHA does not eject a slew-foot at the first tier (86(b) is discretionary).
  - CARHA 54(b) needs no deliberateness.

| Dimension | Reviewer | Result |
|---|---|---|
| Rules, first pass | rules-verifier ×2 | Two WRONG/INCOMPLETE groups, listed above, all fixed. KT7's "most eject at the first tier" was CONFIRMED in 5 of 6 books (USA Hockey 608(a) is the exception). |
| Safety, first pass | safety-reviewer ×4 | FIX on 9 files, as above. |
| Rules, re-review of repairs | rules-verifier | All CONFIRMED except rules_primer KT8: "Hockey Canada a deliberate one" understates HC 7.7(b) Junior/Senior, which has no deliberateness limit. Fixed. |
| Safety, re-review of repairs | safety-reviewer | 13 SHIP; rules_primer FIX (the same KT8). Whole-wave invariants: check_marker_pairs 0 LOST in 14 files; `--panels` equal to HEAD in every file; `--bare` 0; no glyph inside a strong run in site/dist; inline amber confirmed in the build. |

### C11
The coordinator made these edits after the re-reviews; the commit gate reads them:
- **rules_primer KT8:** "CARHA and Hockey Canada eject any cross-check above the shoulders (in Hockey Canada minor and female hockey, a deliberate one)". This matches body :438.
- **team_play KT12:** "can end your game too", because the antecedent of "can" was unclear.
- **getting_started KT14:** "Britain adds more red flags."
- **goaltender KT12:** "If a battle moves a net-front body, it should go to the corner side…", because the imperative was about moving an opponent.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | Two passes of rules verification on every rewritten tariff, against NHL, PWHL, IIHF (both editions), USAH, HC 2026-28, CARHA 2026, the EIHL Casebook, In-House 2026-27 and the EIH DOPS (layout twin for tables). |
| D4–D5 citations | Quotations checked by the verifiers. Kneeing attributions were corrected. |
| D6 negative existence | KT8 "no deliberateness limit in 7.7(b)" was searched and recorded as a true negative. |
| D7 cardinal rule | Not affected; form edits. |
| D8 numeric ownership | SDP ranges stay on rules_primer only, per the owner. |
| D9 summary layers | This wave IS the summary layers. Carriers were checked for every dropped limb. |
| D10 facts layer | No facts lines changed. check_facts exits 0. |
| D11–D12 safety, read aloud | All 14 files rendered; every changed KT and split half was read alone, twice. |
| D13 folklore | n/a |
| D14 structure, links | check_links and site check-links pass. |
| D15 render | Full site build with the absolute npm at 20:47, after the last content edit (20:46): exit 0. |

### Mechanical checks
check_facts, check_links --quiet, check_absolutes and check_counts --update all exit 0. check_marker_pairs: 0 LOST in all 14 files. `--panels` is unchanged from HEAD.

## What this method could not have found
- A dropped limb with no lexical trace, or a summary layer elsewhere built on an old KT premise.
- Sibling documents carrying KT8's "Hockey Canada a deliberate one" shape, where HC's 7.6 and 7.7 divisions differ.
- Antecedents that only a listener test settles (puck_handling KT3 "an injuring one does").
- Remaining minors left by design:
  - rules_primer KT6 dropped "never on the point of your shoulder" (body carries it twice);
  - winger KT8 dropped HC/CARHA interference-that-injures (Common Mistakes carries it);
  - on_ice KT12/KT14 tariffs (facts carry them);
  - uk KT19 dropped the U16 written warning (errs harsh).

## Appendix: the repaired units both re-reviewers read

- rules_primer.md:
  - three restored USA Hockey "which also costs the next game" clauses (charging costs, kneeing costs, goalie-contact costs);
  - KT8: "Most books eject a slew-foot at the first tier; CARHA ejects any cross-check above the shoulders, and Hockey Canada a deliberate one." The HC "deliberate" limit applies to minor and female hockey only; 7.7(b) Junior/Senior has none;
  - KT4: "always under Hockey Canada and in IHUK women's hockey, almost always under CARHA, and often elsewhere";
  - kneeing "What it costs": "⚠️ **Every book can end your game for it.**";
  - fight paragraph now opens "**Never go to the bench on your own:**";
  - :394 "except one for physically assaulting an official, which goes to a hearing before the Affiliate";
  - kneeing definition attribution (HC "principal point of contact"; CARHA 56(a) "in any manner"); NHL 50.5 / 50.4.
- body_contact_and_battles.md: :45 "Leaning, though, is not legal everywhere:"; :79 "merely touched the puck"; seal paragraph "Where Hockey Canada bars checking, ⚠️ **keep it incidental and never lean.**".
- risk_management.md: :320 "Even with nobody hurt, ⚠️ **Hockey Canada 7.4(c) makes charging a player who cannot defend themselves a match penalty.**"; :846 marker; KT5 "a Hockey Canada or CARHA goalie can be penalised for one too"; item 9 "No pass, chip, rim or icing?".
- winger.md: KT8 CARHA "in the crease or if it injures"; :530 the same; :558 marker; :777 moved glyph.
- zone_entries.md: KT11 CARHA "in the crease or if it injures".
- uk_rules.md:
  - KT18 jersey: "There, taking it off before a fight, or losing it untied, adds a game misconduct";
  - KT19 "a fight in the last five minutes, in overtime or at the end of the game";
  - KT17 "(count the season; the League does not say)";
  - KT22 "Nothing read here sets these for an Elite League game or any practice."
- team_play_and_culture.md: KT4 CARHA "don't lean or block a player's path, and avoid any contact you can"; KT12 "and does under USA Hockey, Hockey Canada and CARHA".
- puck_handling.md: KT3 "a violent bump can eject you under Hockey Canada and CARHA, an injuring one does, and for a reckless one, plan on a USA Hockey match and likely multi-game ban. Under CARHA, avert contact."; KT10 "Never hold: Hockey Canada and CARHA can eject you."
- on_ice_communication.md: KT13 "the penalty that evens the numbers"; KT14 "without leaning or pushing".
- breakouts.md: KT6 "assume one in Britain … sit on a rim"; KT12 "none at all under Hockey Canada or CARHA".
- center.md:
  - KT6 "Driving a player … is a mandatory match …"; :776 "Driving a player … ⚠️ **is a mandatory match penalty**";
  - KT9 "as is any interference that injures one";
  - sweep rewrites :507 "A hit on a goalie from behind is checking from behind", :805 "Stepping into them can be called interference", :810 "Putting a player …", :819 "**Arriving into a goalie from behind** ⚠️ **is checking from behind**";
  - sources trailer "Key Takeaways 5, 6 and 9".


## Gate notes carried to the plan
- Eight split halves are now unmarked: rules_primer :394, :553, :786, :901; winger :431; forechecking :641; bcb :45 and :630. None lost a marker. Two carry a penalty without a spoken "Important.": bcb :45 (leaning limits) and :630 (USA Hockey kneeing "in all instances"). Listener pass.
- KT8 "any cross-check above the shoulders" is slightly harsh for Hockey Canada Junior/Senior; a glancing cross-check into the head is a major and game misconduct only if it injures (hc.txt:7385-7388).
- getting_started KT14 "move them" has no antecedent when voiced alone.

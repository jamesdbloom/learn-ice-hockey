# W391: the W390 hit-from-behind census worked through. USA Hockey's ejection is stated as "must" with all four triggers, careless head contact stays under USA Hockey, and the match is scoped by book (17 November 2026)

**Files:**
- content/positions/center.md
- content/positions/switching_positions.md
- content/systems/offensive_zone_play.md
- content/systems/forechecking_systems.md
- content/systems/game_management.md
- content/systems/defensive_zone_coverage.md
- content/positions/winger.md
- content/hockey-iq/puck_support_and_spacing.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
**W390 ran two read-only censuses** (scratchpad/w390census):
- **Hit-from-behind ladder.** It read about 540 units and found 2 high-priority defects, 4 medium and a low tail. Most units already carried the W388/W389 form.
- **IIHF Rules 48 vs 43.** No general precedence clause exists. 48.1 says it supersedes; 43 never says it yields. 48.2's minor survives even an injury (Situation 48.1). No corpus site was wrong: every one says to plan on the ejection.

**W391 took P1, P2 and part of P3 as hypotheses.** Two were refuted:
- **rules_primer KT7.** It omits 620(b) on purpose. The W373 gate ruled this acceptable because KT5 carries it in the same list and the same spoken chunk. No edit.
- **winger :530 and CM :909.** These are net-front scenes. Casebook 608 Situation 1(1) is limited to an opponent "standing along the boards", so the boards limb cannot apply. Both reviewers agreed. No edit.

## The rules
| Rule | What it says |
|---|---|
| USAH 608(a) | minor plus misconduct, or major plus GM |
| USAH 608(b) | a mandatory major plus GM for a reckless or head-first hit |
| Casebook 608 Situation 1 | major plus GM, or a match, "must be called" for a forceful check at the boards, a head-first hit, or a reckless hit; "forceful" is load-bearing, since a minimal pinch is a minor plus misconduct |
| USAH 620(b) | careless or intentional head, face or neck contact: a mandatory major plus GM |
| USAH 602(a) | a mandatory match for reckless endangerment |
| NHL/PWHL 43 | a major plus mandatory GM; the 43.4 match is discretionary and needs intent |
| NHL 48 | a head check is a minor |
| IIHF 43.3 | major plus GM, reckless only |
| HC 7.5(a) | minor plus GM, anywhere |
| HC 7.5(c) / CARHA 53(b) | a mandatory match into the boards or goal frame/net on a player who cannot protect themselves |

## What changed
**Key Takeaways (each is voiced alone):**
- **center KT6.** It said "in every book it can" for USA Hockey. It now adds "under USA Hockey it does whenever it is forceful at the boards, head first or reckless, or carelessly reaches their head or neck", then "In any book, plan on being ejected if it reaches their head." 95 → 120 words, by the author's count.
- **switching_positions KT8.** Same defect, fixed in the shipped risk_management KT11 form, and closing with "In any book, if it reaches their head, plan on being ejected." (a rules optional, to match center). 93 → 120 words, by the author's count.
- **game_management KT14 and body :185.** The USA Hockey must-list omitted "reckless". Both now include it. KT14 also gains careless head or neck.
- **defensive_zone_coverage KT4.** Adds the 620(b) limb under USA Hockey. 109 → 115 words, by the author's count.

**dzc :488, the "Get one hard win" bold run.** At HEAD this ended with an unscoped "Plan on being ejected if it reaches their head or neck, too."
- The author first replaced it with the USA Hockey form ("…and so does careless contact with their head or neck").
- Safety Major 2: that removed the only head-hit planning advice this unit gave IIHF and Hockey Canada readers, and in both books a head hit can start at a minor.
- Final form: the USA Hockey sentence, then "In any book, plan on being ejected if it reaches their head or neck."

**Facts lines (each is voiced alone):**
- **offensive_zone_play :812 (200/200).** "Never: Hit anyone from behind — any book can eject you; USA Hockey does if forceful at the boards, head first, reckless or careless to head or neck, and the NHL, PWHL, CARHA and Hockey Canada do off the head". At HEAD it listed four books under "does" and left USA Hockey at "can". The rules-verifier confirmed "off the head" is exact, because a head hit can fall under NHL 48 (a minor) or HC 7.6.
- **forechecking_systems :40 (195/200).** "Never: Finish into a turned back at the end boards — every book can eject you, most at their lightest penalty; USA Hockey must if forceful at the boards, head first, reckless or careless to head or neck". Safety Minor 3 added the 620(b) limb. The rules text had the geometry backwards ("a back facing the end boards"); the author corrected it and the rules-verifier accepted the correction.
- **winger :512 (297/300).** Adds "forceful at the boards (Casebook 608 Sit. 1)" and widens "careless to the head" to "head or neck". Safety Minor 4: "at", not "on", the boards.
- **puck_support_and_spacing :343 (197/200).** HEAD's "if they can't protect themselves, plan on a match" was unscoped. That is false for NHL/PWHL/IIHF.
  - The author's first fix named only Hockey Canada and CARHA. Safety Major 1: a closed list that dropped USA Hockey, whose 602(a) and 608(c) are "shall".
  - Final text: "…Most books eject; if helpless, Hockey Canada and CARHA must give a match, and USA Hockey if reckless". A dash was turned back into a semicolon so it would not pair with the spoken "Never —".
  - "Checking from behind" was dropped from the line to fit. The adjacent body :352 and facts :601–:604 carry it.

**Bodies and CM:**
- **center :789.** Adds "forceful … at the boards" and "is at least a major and game misconduct (608(b); Casebook 608)". The Casebook's "major plus GM, or match" supports "at least".
- **center :920.** Adds "forceful at the boards" and 620(b).

**Left by design:** Key focus "can" at forechecking :22, body_contact :31 and rules_primer :19, under the owner's tactics-only rule.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** no changed sentence WRONG. It confirmed: <br>• HC 7.5(a)'s floor ejects <br>• "off the head" is exact (NHL 48 is a minor) <br>• the winger refutation holds <br>Optional tightenings at ozp :812, forechecking :40 and puck_support :343. **Final read:** all five post-review edits OK. |
| safety-reviewer | **First read:** Major 1 (puck_support :343 dropped USA Hockey) and Major 2 (dzc :488 lost the any-book head advice). Minors 3 (forechecking :40 620(b)) and 4 (winger "on"→"at"). Every careless limb is heard as USA Hockey-only. **Final read:** CLEAR. 9 ⚠️ removed and 9 added on the same units, so no "Important." is lost. |

### C11
The coordinator wrote no content. Every post-review edit is one reviewer's text, or a one-word author correction both reviewers read in their final reads:
- forechecking :40 "a turned back at the end boards"
- dzc :488 "head or neck"
- puck_support :343 semicolon

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 02:28:23, and no content file is newer.
- check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets: pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_marker_pairs: 0 LOST and 0 SPLIT on all eight files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, two reads; IIHF census separately. Sources: <br>• USAH 602, 608 + Casebook, 620 <br>• NHL 43, 48 <br>• PWHL 43 <br>• IIHF 43, 48 (both editions) + Situations <br>• HC 7.5–7.7 <br>• CARHA 53 <br>• EIHL Casebook (no 43/48) |
| D4 Citations | Casebook 608 Sit. 1 at winger :512 and center :789 |
| D8 Counts | "most books", "every book can", "in any book", "Hockey Canada and CARHA must … and USA Hockey if reckless" |
| D9 Summary layer | center KT6, switching KT8, gm KT14, dzc KT4 read voiced alone |
| D10 Key-facts | ozp :812, forechecking :40, winger :512, puck_support :343 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | every page rendered by its author into its own `--out` |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 02:28:23 build (below) |
| D5–D7, D13 | not engaged |

**D15:** site-reviewer, eight pages, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.

Grown KT windows at 400px:

| KT | Window |
|---|---|
| center KT6 | 18.9 |
| switching KT8 | 25.5 |
| dzc KT4 | 36.3 |
| gm KT14 | 37.9 |

dzc :488 has a single run with the glyph leading.

Worst 400px window per page:

| Page | Worst window |
|---|---|
| center | 36.6 |
| switching | 44.5 |
| ozp | 47.9 |
| forechecking | 41.0 |
| game_management | 39.2 |
| dzc | 38.8 → **43.9** (KT10–12, three runs; not the grown KT4) |
| winger | 44.2 |
| puck_support | 29.0 (first measured) |

- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
1. **offensive_zone_play §8 facts block (:806–815)** has no match line, while its body (:827) and Risk line name the goal frame. The block has room for a Rule line.
2. **center "Contact with the goalie" facts block (:792–796)** has no hit-from-behind line, while body :789 prices one in full.
3. **Key focus "can" for USA Hockey** at forechecking :22, body_contact :31 and rules_primer :19, plus rules_primer Overview :35. Left under the owner's tactics-only rule. This is the owner's call.
4. **Low-priority census rows not taken:**
   - passing_and_receiving :221, on_ice_communication :608 and defending_the_rush :650 omit the 620(b) or Casebook limbs.
   - Captions dz-collapse-corner and forecheck-122/-131 price USA Hockey only through 608(c). forecheck-122 is also on how_to_watch_hockey; check shared constants first.
   - playing_without_the_puck :1019 omits the IIHF 48 head carve-out its siblings carry. Optional.
5. **The Hockey Canada high cross-check is stated without "deliberate" (minor/female, 7.6(b) Interp. 2) at about 30 sites.** These err harsher, and 9.2(b) Interp. 2 is itself flat. The list is in scratchpad/w390census.
6. **defensive_zone_coverage KT10–12** are now the page's worst 400px window (43.9%, three runs). Watch it.
7. **KT length.** center KT6 120, switching KT8 120, dzc KT4 115, all from mandatory tiers. Carried with W385 (1) as the owner's call.

## What this method could not have found
- A unit pricing a hit from behind in wording the census did not search, such as "blind-side" or "a push in the back".
- Other USA Hockey rules that also price the act, such as boarding.
- Real devices.

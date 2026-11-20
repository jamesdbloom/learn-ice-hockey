# W568–W569: the after-icing bar scoped to the team that iced, and USA Hockey's mandatory head-contact and reckless-charge ejections in the summary layers (20 November 2026)

## W568: the after-icing change and time-out bar

**Sources:**
- NHL: 81.4 (8624), 82.1 (8692, 8723), 87.1 (9397).
- IIHF 2026/27: 81.4, 82.1, 87.1. The 2025/26 v1.1 edition has the same numbers.
- PWHL: 83.4 (7176), 84.1 (7230, 7242), 89.1 (7759).
- Hockey Canada: 6.7(d) (5097) and 6.17(e). 6.7(d)(iii) permits the time-out, and its "6.18 – Time of Game" cross-reference is stale.
- USA Hockey: 636(f), no icing condition.
- CARHA: no time-out rule (0 hits in three extractions), and Rule 65 has no change bar.

**Edits (one agent):**
- **puck_support facts :433.**
  - **What was wrong:** the line did not say the bar applies only to the team that iced, and it implied CARHA has a time-out.
  - **Now (295/300):** "After your icing the NHL, IIHF and PWHL bar you a change (81.4; PWHL 83.4) or timeout (87.1; PWHL 89.1), though an injured player may be replaced; Hockey Canada 6.7(d) bars a change (U18AAA, Junior, some Senior), not a timeout; USA Hockey bars neither; CARHA bars no change and writes no timeout".
  - The rule numbers were moved off the injury clause after the census.
- **defender :996:** "CARHA writes no bar on the change … and has no time-out rule at all".
- **rules_primer :43:** "costs the team that iced it a defensive-zone draw".
- **rules_primer :1122** (site-only table): "None for the defending team (87.1)", and "CARHA writes no timeout at all".
- **rules_primer :940, frozen shoot-in.** "their team may not change" referred back to the attackers. NHL 63.8 bars **the defending team**, so it now reads "the goalie's team" (permissive antecedent).
- **forechecking :325, :879 and Sources:** PWHL 84.1 → 83.4, the dedicated "Line Change on Icing" rule. 84.1 also carries the bar, so this is precision rather than a correction.

**Citation census (rules-verifier, read-only, about 170 sites):**
- NHL and IIHF 82.1 and PWHL 84.1 are genuine second sources for the post-icing change bar.
- No time-out rule is cited for the change bar, and no change rule for the time-out bar.
- One real defect, in the new :433 citation placement, is repaired.
- Optional tidies are filed as W568(1).

## W569: USA Hockey 607(b) and 620(b) in the summary layers (W535(1))

**Census (safety-reviewer, read-only):** it read the Key focus, Key Takeaways and head-reaching Common Mistakes bullets of the 12 W535 files. It found:
- **5 major:** neutral_zone CM :871, dtr KT10 :1188 and CM :1104, forechecking CM :1109, ozp CM :1258.
- **4 minor:** rules_primer KT7 :1253, body_contact KT6 :2213, ozp CM :1257, defender CM :1033.

**The defect.** Each unit priced a head-reaching act and either left USA Hockey out or gave only its floor. 607(b) (reckless charge) and 620(b) (careless head contact) were missing; both are a mandatory major and game misconduct.

**Repairs.** Each matched its own document's body or facts wording. Key Takeaways stayed kernels.

**Review: one finding.**
- **Minor, errs harsh.** Casebook 620 Situation 4's match needs **excessive force** as well as head contact and intent to punish, and two new clauses dropped it.
- **Repaired** at every Situation 4 site in neutral_zone (5) and defender (5).
- rules_primer :849 already carried it, and ozp has no such clause.

**Pre-existing ozp clause.** "Under USA Hockey a check with no effort to play the puck ejects you" was stated with no target. Its source is the USA Hockey Declaration of Player Safety (usah.txt around :320–336): a check on a vulnerable or defenceless player, which includes an engaged one, made with no effort to play the puck must take the major-plus-game-misconduct or match provisions, in any category. It is now scoped "a check on them" (CM :1257) and "a check on an engaged player" (body :1220). The reviewer confirmed this, and withdrew its earlier guess that the source was Situation 17.

## Review

| Reviewer | Findings | Result |
|---|---|---|
| safety-reviewer (W535(1) census) | 5 major, 4 minor | All repaired |
| safety-reviewer (W568–W569 edits) | One minor harsh finding (excessive force, two sites; repaired at ten). The ozp no-effort scope was flagged. | Repaired, then re-read OK |
| rules-verifier (post-icing citation census) | One defect (the :433 citation placement); optional tidies | Repaired; tidies filed |

## Rows

**Closed:** W535(1), W506(1), W505(4).

**New:**
- W568(1): optional citation tidies.
- W568(2): "USA Hockey bars neither" not attacked against the Casebook, and sites that state the bar with no rule number.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w569.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 8 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered |
| D9 | Covered: the after-icing claim was fixed in facts, body, Overview and table |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **Audio.** None of these units was rendered.
- **Summary units that price a head hit in none of the swept words.**
- **USA Hockey Casebook Situations under 624 and 636** that may restrict changes or time-outs after an icing.

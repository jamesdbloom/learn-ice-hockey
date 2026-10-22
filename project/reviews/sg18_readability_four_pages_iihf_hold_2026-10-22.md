# SG18: readability on winger, uk_rules, rules_primer and goaltender; IIHF holding; HC analogy wording (22 October 2026)

## Changes

**Readability** (brief: scratchpad z/brief.md). KTs were shortened to their kernel and long sentences and paragraphs split. No KT was dropped and no facts line changed, except the defending_the_rush facts line below.
- **winger.md:** KTs over 60 words went 7 → 1 (KT8 at 71 keeps every mandatory tier). The next-game ban was dropped from KT8 under the once-per-page ruling; the page carries 404(b) at :473/:551 and 32(d) at :105/:516/:517/:553. Paragraphs over 1,200 went 1 → 0.
- **uk_rules.md:** KTs over 60 went 6 → 3 (KT17 61, KT18 67, KT22 62; all are correctness limbs restored after review). One 65-word sentence was split.
- **rules_primer.md:**
  - Longest sentence 122 → 60; paragraphs over 1,200 went 7 → 0. KTs over 60 went 6 → 5: KT6 is 75 (safety limb), KT7 97 (mandatory tariffs).
  - The freezing-the-puck passage is now a list. The faceoff item leads with the instruction.
  - 4 ⚠️ removed to break runs of 6, 6, 5 and 5: Clipping, "The other three books", the screening contrast, and CM "Closing my hand". The screen diagram moved next to "Get in the goalie's eyes".
- **goaltender.md:**
  - KTs over 60 went 4 → 2 (KT11 64 and KT12 61; safety limbs).
  - Paragraphs over 1,200 went 1 → 0; longest sentence 66 → 59.
  - The "where body checking is barred" bullet was split into two, each marked.

**Rules**
- **IIHF holding** (rules_primer :499, body_contact :1699). HEAD claimed "only the IIHF stops at the minor" and that Rule 21 reaches only uncovered acts; that was permissive. The text now says:
  - the IIHF has no tier above the minor for the hold itself (54.2) and no match penalty;
  - a hold that drives a defenceless player into the boards, forces the head into the glass, takes their feet or turns into a fight is called as that foul (41.4, 48.3, 52.2, 46.1), each reaching a major and game misconduct;
  - a severe cage or hair grab can go to Rule 21 (75.2 Note);
  - supplementary discipline can follow (28.1).
- **HC no-match bars vs Appendix D Note 1.**
  - defending_the_rush facts :734 (295/300) and body_contact :1699 now present Interpretation 2 to 7.11(c) as the book's settlement for a rule with the same bar, not a tripping or holding rule.
  - The 7.1(c) quotation is restored in full; "only" was removed (Interp 15 to 10.6(f) and 9.5(c) are further settlements).
  - body_contact :1602: "never a match (8.6(c))" → "no match under 8.6 itself… though plan on one if it is meant to injure". The old wording was permissive.
- **rules_primer :864.** "The one exception" → the Casebook excuses Situation 5 (penalty signalled) and Situation 13 (puck shot into a prone goalie).
- **body_contact :1735.** A ⚠️ was removed from a permission (60.1 carve-out); the run of 4 is now 3.

## Reviews

- **safety-reviewer: CLEAR.**
  - No KT is cheaper than the book, and all 5 lost markers were upheld.
  - One minor fixed: rules_primer KT6 now reads "a tucked chin can break your neck in a hit into the boards".
- **rules-verifier (act-keyed IIHF search, report):** found the 75.2(II) route and the other-foul routes, so the IIHF hold line was rewritten. PWHL 21.1 at body_contact :1699 is verified.
- **rules-verifier (diff): five minors, all fixed, re-read CLEAR.**
  - D-1: uk KT17 word order.
  - D-2: uk KT18 sucker-punch 2026/27 scope.
  - D-3: the "one exception" at :864.
  - D-4: new "only" at DTR :734 / BC :1699.
  - D-5: uk KT22 practice scope.
  - Also: 46.1 "turns into a fight".
- **site-reviewer (headless Chromium): PASS.**
  - The list, the moved diagram, the split paragraphs and both goaltender bullets render correctly, with warn-inline on every ⚠️ and 0 panels.
  - No overflow at 1440 or 400 in light and dark; console clean.

## Gates (after the final edit, no pipe)

- `npm run build` exit 0.
- check_callout_flow --bare: 0.
- check_facts, check_links, check_absolutes and check_secrets pass.
- check_marker_pairs: 6 files, 5 LOST, all intended and upheld.
- check_counts: no change.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier ×3 |
| D5, D6, D8, D13 | Out of scope |
| D7 | ✓ |
| D9 | ✓ Each agent ran a layer test; dropped KT limbs are carried in the body (listed per agent) |
| D10 | ✓ Facts caps respected |
| D11 | ✓ safety-reviewer CLEAR |
| D12 | ✓ KTs rendered and read alone |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS |

## Still open

- **KTs still over 60 words:** rules_primer KT4/KT6/KT7/KT8/KT10; uk_rules KT17/18/22; winger KT8; goaltender KT11/12. All are safety or tariff limbs.
- **uk_rules KT9:** "the stricter IIHF edition" has no single answer (2026/27 is stricter on injury, 2025/26 on the definition). Pre-existing.
- **rules_primer:**
  - :945 "touching the line is allowed" is NHL/IIHF wording, unscoped; pre-existing.
  - :855 "throwing it forward" omits "towards the opponent's net".
- **Remaining "Important." runs of 4:** rules_primer icing change, checking age and two CM; body_contact KTs (on purpose); defending_the_rush runs of 5–6 (not yet reviewed).

## What this method could not have found

- How the compressions sound to a listener. Each KT was rendered and read alone, but not listened to.
- Any third HC interpretation routing a no-match foul to 7.1(c), found by the act rather than by citation.

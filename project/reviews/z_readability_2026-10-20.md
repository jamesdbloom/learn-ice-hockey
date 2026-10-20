# Z (20 October 2026): readability pages 11–14 — Neutral Zone Systems, Defending the Rush, Conditioning and Recovery, Language and Glossary

This round continues the owner's readability programme, page by page and worst first. Four author agents (z1–z4) each owned one page.

The brief is in the session scratchpad at `z/brief.md`. It is the Y brief plus four lessons from the Y round:
- never turn a complete statement into a closed list;
- re-attach every condition when you split a sentence;
- 60 words is a target, and a safety limb outranks it;
- write "if your league allows checking", not "where checking is allowed".

Each page then went to its own safety-reviewer, applying a rules lens.

## Results (check_readability, before → after)

| Page | Longest sentence | Paragraphs > 1,200 | KTs > 60 words |
|---|---|---|---|
| neutral_zone_systems | 112 → 56 | 2 → 0 | 5 → 2 (64, 62; safety limbs) |
| defending_the_rush | 99 → 60 | 5 → 3 (all blockquote paragraphs joined by a bare `>` line, a tool artefact; plan row) | 3 → 2 (KT9 89 with the HC head-first limb added, KT5 69) |
| conditioning_and_recovery | 88 → 62 | 4 → 0 | 4 → 3 (KT10 about 75, KT13 63, KT11 63). Three KTs that ran 102–130 words were split, so the count went from 14 to 18 |
| language_and_glossary | 94 → 59 | 12 → 0 | 5 → 3 (79, 79, 75) |

## Changes, in brief

**neutral_zone_systems**
- The 4,038-character trapezoid blockquote is now five plain paragraphs. The Hockey Canada clause v / clause ii reading is still disclosed as "a reading of the text, not a ruling".
- KT3, KT4, KT5, KT8 and KT9 were shortened. KT9's carry-vs-dump statistic was dropped together with its disclosure; the body carries both.
- KT4's chip-past limb moved to Common Mistakes.

**defending_the_rush**
- KT5, KT6 and KT9 were reworked.
- The slew-foot bullet was split in two, keeping the Appendix D Note 1 "this guide's reading" disclosure.
- The breakaway from-behind ladder was re-ordered.
- About 18 sentence splits.

**conditioning_and_recovery**
- KT10–KT14 were reworked or split. The CRT6 red flags are now separated by semicolons.
- The USAH 604 block and the HC 7.3 ladder were split into sentences.
- The blockquotes were split.

**language_and_glossary**
- No defining clause changed (checked by script: 85 entries).
- KT4, KT6, KT11, KT12 and KT13 were shortened.
- The HC 7.6 head-contact sentence is now three sentences.
- Six glyphs were added on split halves that state a hazard; four were removed again because they marked no hazard.
- The USAH 602(a) suspension was trimmed back to two sites.

## Review

- **z1S (neutral_zone_systems): CLEAR.** Its MINORs were applied by the coordinator:
  - KT4 "mandatory match penalty";
  - the duplicated "play it, do not sit on it" removed;
  - the opening "Hockey Canada is blunter still" changed;
  - the self-narrating "This document has no count" cut.
- **z2S (defending_the_rush): 1 MAJOR, already in HEAD.**
  - KT9 lacked the Hockey Canada head-first limb, so hitting the head sounded cheaper than missing it. The 7.6(a) floor is a minor. It now says "head first into the boards or goal frame the harsher of that and checking from behind", per the owner's 18 Oct ruling.
  - MINORs, applied by the author:
    - "five of the six books here";
    - KT5 says what to tell the goalie;
    - the 24.8 antecedent;
    - "Head contact rises".
- **z3S (conditioning_and_recovery): 1 MAJOR.**
  - KT10 had dropped "into the boards" and "every league … a wall does not need an opponent". That narrowed the neck-safety limb to checking leagues. Restored.
  - MINORs, applied by the author:
    - "seizure or convulsion";
    - "increased confusion" (CRT6's word);
    - KT17 "If their symptoms get worse, get medical attention immediately" (CRT6);
    - "604(e) allows a match penalty too".
  - Every CRT6 flag was checked against the rendered PDF, and every UK guidance limb against ukcg.txt.
- **z4S (language_and_glossary): CLEAR.**
  - The two LOST markers were reviewed: the escalation moved onto the hazard half, so no hazard lost its spoken warning.
  - The two SPLIT HALF candidates were reviewed: neither is a hazard.
  - MINORs, applied by the coordinator:
    - KT11 "Checking one is charging or interference. A charge can end your game…". It had tied "always" to any check, which is harsher than HC 8.5(a)'s minor for a non-charge check.
    - The HC match sentence was brought inside the same amber strong run as the major tier (see "Commit gate BLOCK and fixes").
  - Rendered through remark-corpus: 0 panels, 58 inline warnings.

Rules re-verified at source across the passes:
- HC 7.3, 7.4, 7.5, 7.6, 7.7, 8.5, 8.8, Appendix D Note 1, Interpretation 3 to 10.1(a)
- CARHA 30, 32, 48, 49, 52, 53, 56, 58, 61, 66, 72, 74, 86
- USAH 404(b), 411(a), 602(a), 604, 607, 608, 614(c), 624(b)(1), 640, with Casebook 607, 608 and 621
- NHL, PWHL and IIHF 20.3, 43, 57, 60.4, 63.2, 63.6, 67.2, 69.7, 76.4, 83.6, 101.1
- In-House 100.1/101, EIH 22.3, IHUK RoCs, CRT6, UK concussion guidance

## Commit gate BLOCK and fixes

The first gate BLOCKED on two items.

1. **C8/D15.** Bolding the HC match sentence had made it a *second* strong run. The `warn-inline` wrapper ends with the first strong run, so in the built HTML the match tier was plain bold while the softer major tier was amber.
   - **Fix:** the two sentences are now one strong run, with no word changes.
   - **Verified** in the rebuilt `site/dist`: both sentences sit inside one `<span class="warn-inline">`.
2. **C10.** The browser-check deferral named in this record was not in the plan. The "Site-reviewer pass due" row now names the NZS trapezoid passage and the split conditioning blockquotes.

Also from the gate, now a plan row: NZS KT8 lost two tactical options, and the NZS :946 trailer has quote drift.

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/language_and_glossary.md | +49/−29 |
| content/off-the-ice/conditioning_and_recovery.md | +26/−22 |
| content/systems/defending_the_rush.md | +29/−30 |
| content/systems/neutral_zone_systems.md | +27/−24 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | Safety-reviewers with a rules lens re-derived every changed tariff at source (listed above) |
| D2 exceptions | HC 8.5(a) vs (b); USAH 604(e) "may"; USAH 624(b)(1) scope; HC 7.5/7.6 head-first |
| D3 divergence | Out of scope beyond the per-book tiers checked |
| D4/D5 citations | No character changed inside a quotation; CRT6 read by rendering; trapezoid quotations verbatim |
| D6 negatives | The CARHA/USAH/HC trapezoid negatives were re-read |
| D7 cardinal rule | No change |
| D8 numeric ownership | The carry-vs-dump figure was dropped from KT9 with its disclosure; the body keeps both. 602(a) suspension at two sites or fewer per document |
| D9 summary layer | Every changed KT was checked limb by limb, and the layer test was run for KT9 (defending_the_rush), KT10 (conditioning) and KT11 (glossary) |
| D10 facts | No facts line changed; check_facts passes |
| D11 safety | Every page CLEAR after its fixes |
| D12 read-aloud | All four were rendered by authors and reviewers, with KTs and Common Mistakes heard alone |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; links pass |
| D15 site | Full build after the final edit; --bare 0; --panels 0 |

## Gates (no pipes, after the final edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs reports 2 LOST and 2 SPLIT HALF, all in language_and_glossary. z4S reviewed all four and cleared them: the Screen and Shorthanded escalations moved onto their hazard halves, and the Icing and The paint halves are not hazards.

## What this method could not have found

- How the de-blockquoted trapezoid paragraphs and the split conditioning blockquotes look in a browser. This is deferred to the "Site-reviewer pass due" plan row, which now names both.
- Sibling documents that paraphrase the changed KTs.
- Text left unchanged in each page.

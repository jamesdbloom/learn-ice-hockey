# W492: six rule quotations that stopped before a clause changing their meaning are completed, and Body Contact and Battles stops saying the non-retaliator's protection is USA Hockey's alone (19 November 2026)

**Files changed:**
- **Content:** technique/body_contact_and_battles.md, foundation/uk_rules.md, technique/puck_handling.md, systems/defending_the_rush.md
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan row:** From W490/W491. A quotation can be verbatim and still stop before a qualifying clause. No tool sees this; W491 found one at rules_primer :1271.
- **Census:** a read-only rules-verifier census.
- **Repairs:** two authors.
- **Review:** two review rounds.

## Census (read-only)
**Method.** A Python script took every `*"…"*` quotation (and bare quotations in facts blocks), 9,842 in all. It located 7,998 in 31 rulebook extractions, matching on alphanumerics after a furniture scrub. It read the source past the matched span to the end of the sentence and tiered the hits:
- **A:** a qualifier opens the continuation (if, unless, except, provided, only…);
- **B:** a cost phrase follows within 180 characters;
- **C:** a period inside the quote marks while the source continues.

**Positive control.** The script flags W491's pre-fix 46.6 case.

**Coverage.** 176 source locations with a voiced-layer site were read by hand, plus the 30 tier-A locations found only in trailers.

| Site | Verdict |
|---|---|
| bcb :1393 IIHF 69.1 *"initiated outside of the goal crease"* | TRUNCATION, permissive. It dropped "provided the attacking Player has made a reasonable effort to avoid such contact" |
| uk_rules :138 2026/27 46.5 *"a misconduct or game misconduct penalty"* | TRUNCATION, permissive. It dropped "in addition to any penalties imposed", so it read as replacing the fight penalties |
| bcb :206 (facts) EIHL 86.6 *"…from the start of warm-up time"* | TRUNCATION, permissive, low. It dropped "until 30 minutes after the end of the game" |
| puck_handling :329 HC 6.10(b) *"Kicking the puck cannot result in a goal"* | TRUNCATION, permissive, low. It dropped "unless a defending player kicks the puck into their own goal" |
| bcb :1700 2025/26 46.6 *"…or a major penalty ("Fighting")"* | TRUNCATION, harsh, and a misquote: the `")` is not in the source |
| dtr :1046 CARHA 86(c) | TRUNCATION, harsh, low. One element of the test was missing |

**Refuted.** uk_rules :201 (69.4) is complete. The drift flag came from attribution to the charging rule's "goal crease area".

## What changed (voiced)
| Site | Now |
|---|---|
| bcb :1393 | *"initiated outside of the goal crease, provided the attacking Player has made a reasonable effort to avoid such contact"* |
| bcb :206 (facts, 278/300) | referees may call any penalty from the start of warm-up until 30 minutes after the game ends, *"if they see the offence take place"* (Casebook 86.6). The author found that the brief cited the Preamble copy; the 86.6 copy is at `eihl_casebook.txt:938-939` |
| uk_rules :138 | "that clause's own penalty drops … to *"a misconduct or game misconduct penalty in addition to any penalties imposed"*, at the referee's discretion. **So stop when told: in a fight, the 46.5 penalty comes on top of the fight's own major and automatic game misconduct (46.1), not instead of it.**" ("softens" is gone: a fight costs no less in total) |
| puck_handling :329 | *"Kicking the puck cannot result in a goal, unless a defending player kicks the puck into their own goal"* |
| dtr :1046 | adds *"having no other opponent to pass other than the goalkeeper"* |
| bcb :1700 | The 46.6 quotation is completed. "Under every book, retaliating **can** turn one penalty into two" (was "turns"; HC and CARHA allow no penalty at all). "**Hockey Canada writes the same protection** (Interpretation 2 to 7.10(a) and (b)). ⚠️ **But a British reader does not have it**" (was "That protection is USA Hockey's alone"). "…and a player who keeps punching is a fighter under 46.1, and that book's Table 6 ejects a fighter" |
| bcb :1693 (facts, 254/300) | "Under USA Hockey 615(a) and Hockey Canada's Interpretation 2 to 7.10…" (was "615(a) only") |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (census author) | **First confirmation: NOT CLEAR.** All six repairs matched their sources, and "can turn" holds in all seven books. But "USA Hockey's alone" was false: `hc.txt:6564-6568` Interpretation 2 writes the same no-fighting-penalty protection, at :1700 and at facts :1693. Fixed. **Second confirmation: NOT CLEAR.** The new "who may be ejected", taken from the safety reviewer's sketch and the 46.1 rule text, understated the 2025/26 book, whose Appendix IV Table 6 (`:8803-8810`) makes a fighter's game misconduct automatic. Fixed with the reviewer's own wording. |
| safety-reviewer | **CLEAR** on all six repairs; none is more permissive, and no marker was lost. One Minor: the completed 46.6 quotation, heard alone, could sound like the ceiling. The keeps-punching clause was added, then corrected as above. |

### C11
The coordinator wrote no content. Two reviewer sketches were applied by the author.

### D15
No marker was added or lost; the :1700 ⚠️ still leads a strong run. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist is 03:27:03; the newest content edit is 03:26:24.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_marker_pairs: 4 files, 0 lost.

## Found, not fixed (plan row From W492)
1. **Leading truncation is unexamined.** These are quotations that start after an "If…"/"Unless…" opening of their own sentence. The census read only the text after each match. This is likely the largest unexamined population.
2. **The census picks sources by preference order.** A truncation of the cited book's own wording can hide behind a clean continuation from an earlier book in that order. The next census should read the continuation from the book the sentence actually cites.
3. **Next-sentence carve-outs are invisible.** "Exception:" or "Note 1:" after a quotation's sentence end is not checked.
4. **Period-only nits** (format, meaning unchanged): FS :259, goaltender :683, FS :846, dtr :1077.
5. **"Turns/converts one penalty into two"** at bcb :1692, :1877, :1889 is harsh-direction only and left alone.
6. **EIHL first-fight cost.** uk_rules :138's "the fight's own major and automatic game misconduct (46.1)" overstates an Elite League player's first-fight cost, because Casebook 46.1 gives a game misconduct only with a second major. This errs harsh; the edition framing covers it.

## What this method could not have found
- Real synthesised audio: the chunk distances were not measured.
- Paraphrases of the exclusivity claim worded without "only", "alone" or "615(a)".

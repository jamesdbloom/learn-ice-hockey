# W491: the three "not found" quotations were page-furniture false negatives; Rules Primer's IIHF 46.6 quotation regains its condition, and Time and Space stops saying the NHL bars every body block (19 November 2026)

**Files changed:** foundation/rules_primer.md, hockey-iq/time_and_space.md, project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W490 (1).
- **Who did the work:** a read-only rules-verifier, then two authors.

## Read-only findings: all three found
The census had reported three fragments as absent. All three are in the books, verbatim. In each case page furniture sits inside the quoted sentence.

| Fragment | Source | Why the census missed it |
|---|---|---|
| USA Hockey *"The determination is made at the time the penalty expires…"* (6 sites) | USAH 624(b)(1), `usah.txt:4413-4428` | A page footer sits between "penalty time" and "expiration". All six sites are verbatim. faceoffs :1422 already notes the page break. |
| IIHF *"…('Fighting', without a game misconduct penalty)"* (3 sites) | IIHF 2025/26 46.6, `iihf_rules_v1.1.txt:4155-4161` (v1.0 identical); absent from 2026/27, as the corpus says | "without" is hyphenated across the page header as "wit-"/"hout". |
| time_and_space :290 *"moves into an opponent's path… thereby taking him out of the play."* | NHL 56.1 "Pick:", `nhl_rules.txt:6288-6305` | The NHL second half sits behind a footer. The IIHF shares the first half word for word, which is why the census matched two books. It is **not** a cross-book splice. |

## What changed (voiced)
| Site | Before | Now |
|---|---|---|
| rules_primer :1271 | *"…a major penalty ('Fighting', without a game misconduct penalty)"* | *"…a major penalty ('Fighting', without a game misconduct penalty), if the criteria for 'fighting back' with a few punches is not fulfilled"* |
| time_and_space :290 | "The NHL's interference rule (56) bars using your body to block an opponent who does not have the puck," | "…bars stepping into the path of an opponent who does not have the puck," |

**Why rules_primer changed.** The quotation stopped before the condition. Read alone, it said any retaliation was penalised. It now carries the full sentence.

**Why time_and_space changed.** NHL 56.1 (`nhl_rules.txt:6250-6254`) says *"A player may "block" the path of an opponent provided he is in front of his opponent and moving in the same direction."* What it bars is lateral movement into the path without body position. USA Hockey's Standard of Play (`usah.txt:383-384`) and IIHF (`iihf_rules_2026-27.txt:4774`) carry the same block permission. The old sentence was broader than every one of those books. Verified as true in the same sentence: USA Hockey 625's Note names the "pick" and the "block" (`usah.txt:4449-4451`).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** the findings above. **Confirmation:** CLEAR on both. 46.6 is word for word. "Stepping into the path" fairly sums up 56.1's two prohibitions, it permits nothing 56.1 penalises, and it is scoped to the NHL; USA Hockey agrees anyway. |
| safety-reviewer | **CLEAR.** No reader of USA Hockey, Hockey Canada, CARHA or IIHF is told body-blocking a non-carrier is fine. The bold lead "never by stepping into a defender's path… there is no legal pick or screen on a skater", the rub bullet (:295), CARHA (:293) and the price ladder are unchanged. 20 = 20 markers. |

### C11
The coordinator wrote no content.

### D15
No marker changed. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist is 01:14:16; the content edits are 01:12:47 and 01:13:04.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_marker_pairs: 0 lost.
- **Old wording:** "bars using your body to block" no longer appears anywhere in content/.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 624(b)(1), 625, Standard of Play; IIHF 46.6 (2025/26) and 2026/27; NHL 56.1 |
| D2 Exceptions | 56.1 block-from-in-front permission |
| D3 Cross-book divergence | IIHF/NHL/PWHL "pick" wording ("them" / "him" / "her") |
| D4 Citation integrity | 46.6 quotation completed |
| D5 Provenance | the three "not found" fragments located |
| D6 Negative existence | three census absences refuted |
| D7–D10 | not engaged |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | the time_and_space sentence heard alone |
| D13–D14 | not engaged |
| D15 Rendered site | mechanical only |

## What this method could not have found
- **Truncated quotations elsewhere.** A quotation can be verbatim and still stop before a clause that changes its meaning. Only reading past the closing mark finds it, and that was done for nine quotations only.
- **Furniture-hyphenated words.** A word hyphenated across a header defeats both flattened and alphanumeric matching. Any other census "not found" is unproven until someone reads the raw line range.

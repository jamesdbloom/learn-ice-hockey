# SG10: small accuracy rows re-tested (22 October 2026)

**Origin.** These were ten rules-accuracy rows in OPEN_ITEMS.md, under "P1 readability and the layers", plus the forechecking :808 leftover from sr3. Eight agents each owned one file. Each was briefed to refute its row before acting (scratchpad sg10_brief.md).

## Outcome: most rows were stale

| Row | Verdict | Evidence |
|---|---|---|
| goaltender CARHA 53(b) | Already fixed | c35d177. Facts :1372 and body :1266/:1271/:1394 carry 53/53(b). |
| switching :229 British women major | Refuted | The In-House Rules reach the WNIHL: ihuk_wnihl_roc.txt:24-29 sets the precedence IIHF → policy → In-House → WNIHL RoC. The "EIH or SIHA competition" limit is per-rule (e.g. 85.7), not the document's scope. Six sibling documents agree. |
| switching ask-your-league | Already fixed | facts :251, body :286, CM :570. |
| risk_management 36(a) "may award" | Already fixed | b12a829. CARHA 36(a) "will be awarded" (carha_2026.txt:1651-1671); the open question is scope. |
| risk_management :717 amber on a citation | Already fixed | b44e9d8. The run now opens on "Do not read that discretion as a way out." |
| breakouts trapezoid books | Already fixed | e16a586. Body :1114/:1116, facts :1100/:1101 and KT6 name every book correctly. |
| DZC :37 USAH 620 vs 621 | Already fixed | 9490fbe. Body :704 routes to 621 per Casebook 621 Sit. 1. |
| forechecking USAH 640 Note 2 | Already fixed | b12a829 / 550e403. |
| **forechecking facts :808 CARHA** | **Fixed** | Removed the unconditional "CARHA: match (53(b))". It overstated the penalty and dropped 53(a). New Rule line :809 (272/300 chars): "In a CARHA adult league, an intentional hit from behind ejects — a minor or major plus a game misconduct, a major if it injures, a match possible (53(a)); any hit, check or push from behind into the boards or net on a player unable to protect themselves is a match (53(b))". |
| **team_play CARHA 48(d) helmet** | **Fixed** | :283 now covers Hockey Canada and CARHA (double minor or match: Interpretation 15, 48(d)). It adds HC 7.1(b): a discretionary major and game misconduct depending on violence, mandatory if it injures. It adds "A match in either book keeps you out of further games… (Hockey Canada 4.10(a), CARHA 34(a))". Trailer :742 quotes 48(d), 34(a), 4.10(a) and 7.1(b). |
| **rink_map CARHA citation** | **Partly fixed** | 30(a), 32(d) and 79(a) were already cited in the trailer and :527, and :519 was already reworded. Added "(Rule 79(a))" at :620, where the slap-shot tariff is first stated. |

## Reviews

- **rules-verifier (fresh).** It confirmed forechecking 53(a)/(b), the "adult league" scope (carha_2026.txt:8/:12), 48(d), the trailer quotations and rink_map 79(a)/30(a)/32(d). **One MINOR:** team_play :283 gave the match suspension to CARHA only, beside a Hockey Canada match; HC 4.10(a) (hc_2026-08-print.txt:3115-3118) suspends the same way. Fixed.
- **safety-reviewer (fresh, rendered all three).**
  - **MAJOR:** the same false contrast at team_play :283, which made the act sound cheaper for a Hockey Canada listener. Fixed.
  - **MINOR:** forechecking :809's "it" tied the 53(b) match to intentional hits, but 53(b) has no intent condition ("in any manner"). Fixed.
  - **MINOR:** team_play omitted the HC 7.1(b) major-plus-GM tier, a gap that predates this wave. Fixed.
  - **Re-read of the repairs: CLEAR.** The quotations are verbatim. Chunking is unchanged: forechecking :809 opens chunk 064, team_play :283 is chunk 014, and the USA Hockey 405 bullet is chunk 015.
  - **Optional point, left as is.** "A match in either book" follows a bullet that names three books. USA Hockey's 405(c) suspension is in the next chunk, under its own heading. Left alone under readable-beats-defendable.

## Gates (after the final content edit, no pipe)

check_facts, check_links, check_absolutes, check_geometry and check_secrets pass. check_marker_pairs: 3 files, 0 LOST, 0 SPLIT. check_counts --update: no change. `npm run build` exited 0 after the last edit, and check-links is clean.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 Rules / exceptions / divergence / citations | ✓ rules-verifier plus safety re-read; every new quotation was checked verbatim. |
| D5, D6, D8, D13 | Out of scope: no external source, existence claim, owned figure or folklore. |
| D7 Cardinal rule | ✓ Rule text only. |
| D9 Summary layer | ✓ The agents ran layer tests. team_play has no facts block, and its KT/CM do not mention grabbing. forechecking :326/:738/:767 already state 53(b) without intent. |
| D10 Key facts | ✓ Under the caps: the block has 13 facts, 8 of them coaching. |
| D11 Reader safety | ✓ safety-reviewer CLEAR after repair. |
| D12 Read-aloud | ✓ Rendered; chunk positions given above. |
| D14 Style | ✓ Plain sentences. |
| D15 Rendered site | Prose and facts-line text only, with no layout or marker change. The build passed. No site-reviewer pass. |

## Still open

- **team_play helmet: NHL/IIHF/PWHL.** PWHL 51.3 is a major for grabbing a helmet or facial protection. The NHL/IIHF 51.2/9.6 roughing minor covers intentional removal during play. Added as a plan row.
- Sibling documents (body_contact_and_battles, winger, uk_rules) were not checked for the same CARHA-only match-suspension wording or the old HC two-tier grab framing.

## What this method could not have found

- A stale row whose claim survives in different words. The agents searched for the row's quoted strings and the rule numbers, then did layer tests within their own file only.
- Copies of the fixed claims in documents nobody owned in this wave.

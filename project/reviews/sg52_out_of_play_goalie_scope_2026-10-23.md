# SG52: the out-of-play minor carried across pages, goalie scope included (23 October 2026)

## What changed (claim: the delay-of-game minor for putting the puck out of play)

- **breakouts :561 ("Goalies are not exempt"):** previously named only HC/CARHA. It now adds "NHL 63.2(iii), IIHF 63.2(III) and PWHL 65.2(iii) apply to "any player", and all three books count goalkeepers as players (Rule 5.1 in each)".
- **risk_management :365 (facts):** "but both exempt the accident" was false in the permissive direction. It now reads "and an accident is not among their escapes — Interpretation 5(i) and Note 1 free a no-glass spot or a puck that "touches the glass or deflects off a player or official"; whether HC needs intent is unsettled".
- **risk_management KT5:** adds "and a goalie under Hockey Canada or CARHA should not count on an accidental stick clear being free" (matching Common Mistakes :914).
- **special_teams :990 (facts):** rewritten so USAH/HC/CARHA are deliberate-only, goalies included, while HC 10.1(v) and CARHA 55(a) price a goalie's stick clear with no intent word.
- **special_teams :748 (facts):** "clearing the glass costs the minor" (unscoped, harsh) became "Aim clears hard and flat, not over the glass — a clear played hard off the glass and staying in is exactly what you want". An intermediate wording ("not your aim") could be heard as "intent does not matter", so the clause was dropped on the reviewer's advice. The block's Rule lines carry the tariffs.
- **goaltender Common Mistakes :1638:** "CARHA penalises it from anywhere" became "Hockey Canada and CARHA penalise a stick clear from anywhere on the ice" (HC was missing).

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety and rules | safety-reviewer (quoted primary text; two passes) | **Pass 1:** all six edits CLEAR on safety. Verified NHL 63.2(ii)/(iii) and 5.1; IIHF 63.2(II)/(III) and 5.1 (2026/27 :930-934, also v1.0/v1.1); PWHL 65.2(ii)/(iii) and 5.1; USAH 610(c)/631(d); HC 10.1 preamble/(ii)/(v)/(a), Interpretation 5 and Glossary; CARHA 55(a)/75(b) and Glossary. Three minors (5.1 credited to all three books; HC intent "unsettled"; KT5 softened) were applied. **Pass 2:** three CLEAR. One minor at :748 ("not your aim") was fixed by dropping the clause, as the reviewer sketched. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_secrets, check_counts and check_links all exit 0. check_marker_pairs on 4 files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked (safety-reviewer quoted every book; the settled facts come from SG51's rules-verifier pass) |
| D4–D5 citations | Checked: Rule 5.1 in three books |
| D6 negative existence | Checked: USAH has no goalie-specific out-of-play limb (swept in SG51) |
| D7, D8, D13 | Out of scope |
| D9 summary layer | Checked: risk_management KT5 and Common Mistakes :914, goaltender Common Mistakes, special_teams facts all agree |
| D10 facts | Checked: risk_management :365 297/300; special_teams :990 298/300; :748 within cap |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Facts lines judged voiced alone; not rendered |
| D14 structure | Checked: check_links |
| D15 rendered site | Build passes |

## What this method could not have found

- Other wordings of the act ("fire it into the stands").
- Diagram captions on these pages.
- Whether Hockey Canada enforces 10.1(v) against an accident (no ruling on disk).

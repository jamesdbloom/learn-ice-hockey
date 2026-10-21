# Cleanup: site rows sr1, sr2, sr4 and sr5; an antecedent nit; R2 candidates; the "hit from behind" example (21 October 2026)

## Changes

| File | Change |
|---|---|
| site/src/styles/global.css | **sr1:** `.table-scroll thead th` wraps from 60rem up, and `--tall` tables set `--table-head-h: 5.25rem` so their sticky row label clears the wrapped header. **sr2:** `.prose h4` is now 1.125rem with a 2.25rem top margin, plus a 28×3 px accent rule (`::before`), so it can't be mistaken for a bold lead sentence. A code comment was corrected after review to give the widths where the tables still scroll. |
| content/foundation/rink_map.md | **sr4 (:226):** the ⚠️ moved off "The PWHL's number is not the NHL's" (a citation) onto "**Moving into the goalie's path is then interference**". **sr5 (:458):** the amber moved from the softer "unnecessary or avoidable contact" limb onto "**play the puck with your stick, never your body.**" No words changed. |
| content/systems/offensive_zone_play.md | Facts `Risk:` :360 no longer points at "those two", which a listener would not have heard. It now names "rimming when you should reverse, or reversing when you should rim". :1000 now says "a major for a hit from behind", per USAH 608(a): a hit from behind can be a minor plus misconduct. |
| content/systems/forechecking_systems.md | :663 now says "a major for a hit from behind", for the same 608(a) reason. |
| content/systems/zone_entries.md | :261: the CARHA one-game ban now adds "as any USA Hockey game misconduct does (404(b))". This is R2: the USAH 608 ejection bullet sits two items above. |
| content/positions/defender.md | :889: the CARHA clipping clause now adds "as under USA Hockey (404(b))". This is R2. |

The agents left five R2 candidates unchanged and gave reasons. In each, the books are in separate per-book paragraphs, and 404(b) is stated close by: zone_entries :378, defending_the_rush :460, :502 and :891, and defender :355.

## Reviews

- **cwS (safety-reviewer, fresh): CLEAR.** It found:
  - all five content fixes true, with no limb lost;
  - both moved ⚠️ now lead an instruction, not a citation;
  - check_marker_pairs: 0 lost markers.

  It verified 608(a)/(b) and 404(b) in usah.txt, and 30(a) and 32(d) in carha.txt. It noted that zone_entries already stated 404(b) at body :869, so :261 is a second statement. :261 is kept as an R2 fix, not counted as the page's once-per-page line.
- **cwSite (site-reviewer, C10): PASS on every item.** It drove Chrome over CDP using the project's chrome-headless-shell, because the extension was blocked.
  - **Tables:** no header clips on any of 21 table pages at 1440, 1280 or 400. The sticky label clears the wrapped header. No other table regressed.
  - **h4:** distinct from a bold lead, in light and dark.
  - **rink_map:** both moved ⚠️ render as `warn-inline`.
  - **Console:** clean.
  - **One minor finding:** the overflow is reduced but not gone at about 960–1040 and 1280–1320 px. Every width is better than before. The CSS comment overclaimed and has been corrected; residual work is logged in the plan.
- **cwR (rules-verifier), added after the first commit gate BLOCKED on C4.** All four changed rules claims are **confirmed** from the staged bytes.
  - **Greps used:** "Checking from Behind" (usah.txt :3712, 608(a)/(b) at :3721–3727); 404(b) and 403(b) at usah.txt :2429 and :2490; `^Rule 3[0-2]\.` and `^Rule 53\.` in carha_2026.txt (:1364, :1421, :2604); and Rules 86, 56 and 63.
  - **Negative sweep:** a flattened sweep of usah.txt found no USAH playing-rule major without a game misconduct.
  - **defender :889:** "as under USA Hockey (404(b))" was judged a precision nit, not a defect. Every USAH major carries a game misconduct, so a major costs the next game in practice.
  - **Optional wording nits not applied:** the defender :889 citation order, and OZP :1000's "if it follows a second major".
- **sr3** (the nz-1-4 caption nit) was not done in this wave.

## Gates (after the final edit, no pipe)

- check_facts, check_links, check_absolutes and check_secrets pass.
- check_marker_pairs: 0 LOST.
- npm run build exited 0.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ cwR (rules-verifier) checked 608(a)/(b), 404(b), 403(b), CARHA 30(a), 32(d), 53, 56, 86 and 63 against the primary text and recorded its greps. cwS also checked them. |
| D5, D6, D8, D13 | Out of scope: no source, existence claim, figure or folklore was changed. |
| D7 | ✓ |
| D9 / D10 / D12 | ✓ The OZP :360 facts line now stands on its own. Markers are preserved. |
| D11 | ✓ cwS CLEAR. |
| D14 | ✓ The h4 change is consistent across the site. |
| D15 | ✓ cwSite PASS. The residual overflow is logged. |

## What this method could not have found

- Real macOS scrollbars, Safari and Firefox header wrapping, and text zoom. The 5.25rem offset is a constant.
- Other sites in the corpus that still describe every hit from behind as a game misconduct.

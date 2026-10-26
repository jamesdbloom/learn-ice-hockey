# SG91b: puck-possession figures made to match the study (26 October 2026)

**Files:**
- content/hockey-iq/playing_without_the_puck.md (the owner)
- content/foundation/core_principles.md
- content/off-the-ice/practice_and_development.md
- content/off-the-ice/how_to_watch_hockey.md

## What changed and why
The owner page cites the Waterloo LINHAC 2025 paper: NHL tracking, 2023-24, 5-on-5, data the league calls unofficial. Its figures are:
- 3.3% to 4.2% of ice time with the puck (p. :291);
- average possession of 1.27 s for forwards, 1.32 s for defencemen and 1.29 s for all skaters (Tables 3 and 4, :334–363).

The pages had rounded or drifted forms ("96%", "three to four percent", "roughly 1.3 seconds", "3–4%"), and used the forwards' 1.27 s as if it applied to everyone.

- **playing_without_the_puck**
  - The figures now match the paper.
  - The Mindset facts line (:110) and the body (:114) say "a little over a second", which is true for every position, instead of 1.27.
  - Common Mistakes bullet 1 now opens "**Training only the time you have the puck.**", with the figure kept in its body.
- **core_principles**
  - "3.3 to 4.2 percent"; "just over a second".
  - :128 gives "1.27 seconds for a forward and 1.32 for a defenceman".
- **practice_and_development :453.** "about 96%" became "the rest of your ice time: at 5-on-5, NHL players have the puck for only 3.3% to 4.2% of it".
- **how_to_watch_hockey :364 and :666.** "3–4%" became "3.3% to 4.2%". "One to two seconds of a forty-second shift" still holds (1.32–1.68 s).

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Figures, scope and layers (first three files) | content-reviewer | **SHIP all three.** Every figure was checked against p.txt with its scope (5-on-5, NHL, 2023-24, unofficial). Rendered all three documents and read the voiced figures. The corpus grep found the stale "3–4%" only in how_to_watch_hockey (fixed below). It also flagged the owner page using 1.27 for all players (fixed below). The USA Hockey 2002 "about a minute" figures are a different study and are correct. |

### C11
The fixing agent applied the content-reviewer's three findings after the review. No reviewer has re-read them, so the commit gate reads them:
- how_to_watch :364 and :666;
- pwtp :110 and :114;
- the opening of pwtp Common Mistakes bullet 1.

All four checkers pass, and check_marker_pairs finds 0 lost markers.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules | n/a (no rule claims). |
| D4–D5 citations | Figures verified against the paper's text on disk. |
| D6 negative existence | n/a |
| D7 cardinal rule | Not affected. |
| D8 numeric ownership | playing_without_the_puck owns the figures; every carrier now matches it with its 5-on-5 scope. |
| D9 summary layers | Owner facts, body, CM1 and KT1 agree. core_principles has no facts block. |
| D10 facts layer | pwtp :110 changed, 126/200. check_facts exits 0. |
| D11–D12 read aloud | content-reviewer rendered the first three files. The post-review lines were not rendered (declared). |
| D13 folklore | Out of scope. |
| D14 links | check_links passes. |
| D15 render | Site build after the last edit. |

## What this method could not have found
- Possession figures restated in words the grep did not cover.
- Figures in diagram captions or untracked podcast scripts.

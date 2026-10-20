# Y (20 October 2026): readability pages 8–10 — Offensive Zone Play, Special Teams, Faceoffs

This round continues the owner's readability programme, worst page first. Three author agents (y1, y2, y3) each owned one page. The brief was the X brief (in the session scratchpad at `y/brief.md`) plus two X-gate lessons: never change a character inside quotation marks, and keep "plan on" open-ended. Each page then had a safety-reviewer with a rules lens. Faceoffs also had a rules-verifier and two further safety passes, because its fixes produced new rule text.

## Results (check_readability, before → after)

| Page | Longest sentence | Paragraphs > 1,200 | KTs > 60 words |
|---|---|---|---|
| offensive_zone_play | 94 → 59 | 2 → 0 | 2 → 1 (KT8, 62: "seal the wall" and "your league" restored for safety) |
| special_teams | 79 → 59 | 1 → 0 | 3 → 0 |
| faceoffs | 77 → 58 | 4 → 1 (the header, 1,281, of which about 500 is the Related nav line; tool row filed) | 6 → 1 (KT13, about 70: penalty tiers corrected) |

## Changes, in brief

**offensive_zone_play**
- KT4 and KT8 shortened; about 17 splits.
- Two instructions moved to the front: the :617 screen instruction, and the :980 late-hit restriction, which now leads with "Never finish a check…" and adds "and then ease off".
- The CM "Pinching to hit a winger" bullet is split into two halves, each marked. The HC/CARHA mandatory-match sentence sits beside the instruction, and the USAH 608(c) clause regains "on a defenceless player".

**special_teams**
- KT8, KT9 and KT10 shortened.
- The British overtime blockquote (2,597 chars) became a `#### Overtime in Britain` heading with plain paragraphs.
- KT8's match limb is scoped to USA Hockey again ("If reckless there").

**faceoffs**
- Six KTs shortened.
- Header cut to its disclosures; the PWHL renumbering and "do not assume the other IIHF rules here are current" restored.
- The Britain box is split in two.
- CARHA 74(b) is now "anywhere on the ice".

## Corrections found by review (faceoffs, all pre-existing except where noted)

- **MAJOR, pre-existing.** Moving early was priced as a re-drop only. Hockey Canada names early movement a violation (6.5(a)), and 6.2(d) ejects the taker, except on a Junior draw after an icing. This is now in the body (:361, :363, :775, the "What it costs" line), a new facts line, and CM "Cheating back". USA Hockey and CARHA "do not name it".
- **MAJOR, pre-existing.** KT13 (replacement taker) said "the referee may add a minor". A replacement taker's violation is his team's second on that draw. That is a mandatory bench minor under NHL 76.7, PWHL 78.7, IIHF 76.7 and the In-House Rules, and a player minor under USAH 613(d). Hockey Canada 6.2(e) and CARHA 57(d) say "may".
- **MAJOR, introduced by the first repair and caught by y3S2.** The rewritten KT13 had turned "contact is never free" into a three-book closed list. It now reads "Pre-drop contact with the other centre is never free: the referee may add a minor, and under USA Hockey, Hockey Canada and CARHA must."
- **MAJOR (omission), introduced by the coordinator and caught by y3S3.** KT13 had dropped "let the official clear the dot first", Hockey Canada 6.2(e)'s one no-discretion case. Restored.
- **CM "Cheating back" (pre-existing).** It implied NHL/IIHF/PWHL remove the centre for moving early. They re-drop. It now gives each book's tariff.
- **Britain box :958 (pre-existing).** "Replaced every warning with a removal" was false. It now reads "turned most warnings into removals … It kept softenings for the centre:" and names the three.
- **Minor fixes:**
  - "two minutes" → "a minor" where USA Hockey is listed (USAH 402 pro-rates);
  - "whichever centre makes it";
  - U10: the player's own coach "should" remove a repeat offender (RoC :120-121);
  - CARHA 55(a) vs Note 2;
  - IIHF/NHL/PWHL second-violation scope at :361;
  - :970 "the same minor".

## Review passes

- **y2S (special_teams): CLEAR.** Two MINORs applied (KT8 scope, :806 referent).
- **y1S (offensive_zone_play): CLEAR.** Three MINORs, sent back to the author and applied: KT8, the third 602(a) suspension mention removed, and the CM split.
- **y1S2 (offensive_zone_play, new text): CLEAR.** Three MINORs applied: 608(c) "defenceless", KT8 "the wall" and "league", and :980 "ease off".
- **y3S (faceoffs): CLEAR.** Three MINORs, plus the pre-existing :958 and CM; sent to the author.
- **y3R (faceoffs, rules-verifier): 2 MAJOR, 4 MINOR.** The author fixed them in every layer.
- **y3S2 (faceoffs, new text):** 1 MAJOR and 5 MINORs, applied by the coordinator in the reviewer's sketch wording.
- **y3S3 (coordinator's edits):** 1 MAJOR (the KT13 omission) and 3 MINORs.
  - The KT13 omission, "contact with the other centre" and :970 were applied in the reviewer's sketch wording, confined to the finding (C11 terminating rule).
  - The rest went to plan rows: :874 scope, the "two minutes" shorthand, and sibling layer tests.

Rules re-verified at source across these passes:
- NHL 76.3/76.7/56/21.1; PWHL 78.3/78.7/21.1; IIHF v1.1 and 2026/27 76.3–76.8, 84.3, 63.2, and Situation 81.18;
- USAH 602(a), 604, 607, 608 + Casebook 608 Sit 1, 613, 402, 640; Standard of Play Situations 10 and 23;
- HC 6.2, 6.5, 7.5, 7.6, 7.7, 8.5, 10.1;
- CARHA 52, 53, 55, 57, 58, 61, 74;
- In-House Rule 76; EIHL Casebook 84; IHUK U10 RoC.

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/systems/faceoffs.md | +40/−53 |
| content/systems/offensive_zone_play.md | +23/−21 |
| content/systems/special_teams.md | +23/−21 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier on faceoffs' new text, by act across all books (y3R); safety-reviewers with a rules lens on every page |
| D2 exceptions | HC 6.5(a) Junior post-icing; In-House post-icing; USAH 613(d) positioning-only; HC 6.2(e) linesperson "will" |
| D3 divergence | Second-violation and moving-early tiers stated per book |
| D4/D5 citations | No character changed inside a quotation (period-outside-mark rule); y3S/y3R quote-checked CARHA 74(b), HC 10.1(vii) and the IIHF 76.x |
| D6 negatives | "USA Hockey and CARHA do not name it", swept by act (y3R) |
| D7 cardinal rule | KT7 "Commonly … Ask your bench" kept |
| D8 numeric ownership | USAH 602(a) suspension at two sites per document (OZP third mention removed) |
| D9 summary layer | Layer test per claim in faceoffs (body, facts, CM, KT); every changed KT checked limb by limb |
| D10 facts | One facts line added (faceoffs :767); check_facts passes |
| D11 safety | Every page CLEAR; faceoffs after four passes |
| D12 read-aloud | All three rendered by authors and reviewers; KTs and CM heard alone; chunk placement checked for the OZP CM split |
| D13 folklore | Out of scope |
| D14 structure | One `####` heading added (special_teams); no linked anchor changed; links pass |
| D15 site | Full build after the final edit; --bare 0; --panels 0 |

## Gates (no pipes, after the final edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 3 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- Sibling documents carrying the faceoff claims (now a plan row).
- How the special_teams heading and the faceoffs box split render in a browser.
- Unchanged text outside the diff.
- Whether Hockey Canada officials actually eject for early movement outside Junior play: that is the rule text read together, with no casebook on disk.

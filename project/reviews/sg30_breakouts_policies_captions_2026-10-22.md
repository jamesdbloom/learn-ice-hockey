# SG30: breakouts CARHA injury tier, Getting Started policy quotations, four captions (22 October 2026)

## What changed

- **`content/systems/breakouts.md`**
  - The page never cited CARHA 66(e), so the mandatory major for a pick that injures was missing.
  - The Section 2 body (:213) now says 66(e) makes the major mandatory when it injures, and that under 30(a) every CARHA major ends your game.
  - A new Wheel facts line reads: "A pick that injures is a mandatory ejection in two books". It cites Hockey Canada 8.3(b), CARHA 66(e) and CARHA 30(a).
  - The plan row's premise ("prices 66(e) as a major") was refuted: the rule was absent, not mispriced.
- **`content/getting-started/getting_started.md`**
  - The R&R 2024-25 quotations were re-checked against the current EIH and IHUK documents.
  - The bench rule now comes from IHUK Coaching Regulations 2026-27 §9: a Level 2 coach or higher is in charge for junior and senior teams, with narrow Level 1 exceptions at U10 and U12. Recreational hockey has no set level, and a registered adult Level 1 coach is recommended. No one under 18 may take charge of the bench.
  - The old "display their licenses" clause has no 2026-27 successor and was dropped.
  - A Code of Conduct (June 2026) §5 line was added: parents may ask who the club's Designated Safeguarding Lead is.
  - The Sources trailer was updated.
- **`sources/`**
  - `eih_code_of_conduct_2026.{pdf,txt}` were added; the live copy is byte-identical. A README entry was added.
- **Captions** (`site/src/diagrams/`, rebuilt into `diagrams.json`)
  - `entry-wide` went from 1,964 to 858 characters. It now adds "a goalie out of it is not fair game either".
  - `screen-the-goalie-sightline` went from 1,931 to 981. Both halves of 69.1 are now in one sentence.
  - `cross-ice-in-your-own-end` went from 1,876 to 1,363. It now uses the short wall posture under the owner's document-relative ruling.
  - `pinch-centre-below-the-goal-line` went from 1,752 to 1,370; only narrative was cut.
  - Every dropped limb was traced to each host page, within a few chunks of the caption.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Sources, getting_started | source-verifier | First pass found a half-rule: the Level 2 rule lacked its U10/U12/recreational scope. The second pass found the fix had over-read the §9.1 Note into the lead-coach rule ("unless under-18s are on the ice"). That condition was removed, and the final wording matches §9 verbatim in substance. |
| Safety and rules: captions + breakouts | safety-reviewer (with the rules texts read: NHL/IIHF 69.1/69.3/69.4/56.4/56.5/42.1, HC 8.3, CARHA 66/30/32, USAH 625) | CLEAR. One minor: entry-wide implied a goalie out of the crease is fair game; fixed. An optional "mandatory ejection" wording was applied to breakouts :332. |
| Rendered site | site-reviewer | CLEAR on desktop and at a 400px iframe, light and dark. Every caption ⚠️ gets warn-inline; no overflow; no console errors. |
| Rules | rules-verifier | Every cited rule was VERIFIED against carha_2026, hc, nhl_rules, iihf_rules_2026-27, pwhl, usah and the British books. "Two books" holds across all 13 books on disk. Two findings were true but incomplete, both in the harsher direction: the 30(a) accidental-high-stick exception, and the 69.7 rebound exception in entry-wide. Both are now plan rows. |
| Facts layer (D10) | facts-reviewer | CLEAR on breakouts :332: traceable, `Rule:` label correct, no dangling antecedent, caps pass. It found an older omission (CARHA 49(a) absent from the Wheel block), now a plan row. |
| Mechanical | coordinator | check_facts, check_links, check_absolutes (408 diagram units), check_geometry, check_secrets and md_to_speech --self-test all exit 0. check_marker_pairs found 0 lost. check_callout_flow --bare found 0. check_counts --update shows no drift. The npm build exited 0, including check-links. |

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy, D2 exceptions, D3 divergence | Checked by the rules-verifier |
| D4 citation integrity, D5 provenance | Checked by the source-verifier: getting_started quotations, both URLs refetched, PDFs hash-matched |
| D6 negative existence | Checked: "no EIH parent course" was re-tested against the Code of Conduct and Safeguarding docs and holds |
| D7 cardinal rule | Checked. No coaching choice is stated as law; the captions keep "coaching convention" where they had it. |
| D8 numeric ownership | Out of scope: no owned figure changed |
| D9 summary layer | Checked by the layer tests in each agent report. breakouts' Common Mistakes and Key Takeaway 13 are cross-book and unchanged. The captions' dropped limbs were traced to their hosts. |
| D10 key-facts layer | Checked by the facts-reviewer |
| D11 reader safety | Checked by the safety-reviewer |
| D12 read-aloud integrity | Checked by md_to_speech chunk tracing of each caption host; the facts line has no dangling antecedent |
| D13 folklore | Out of scope: no technique or folklore claim changed |
| D14 structure, style, links | Checked: British spelling and "they"; check_links passes |
| D15 rendered site | Checked by the site-reviewer |

## Owner answers recorded (22 October 2026)

These three were removed from the plan's owner questions because the owner answered them:
- **USA Hockey 615(f):** keep "a three-game suspension" and do not stack 404(b) on it.
- **608(c):** citing 602(a) is enough.
- **Contents button on phones:** keep ☰.

## Tooling change in this commit

- `scripts/check_links.py` now skips `project/getting_better_drafts/`. Page drafts there carry links relative to their future home in `content/`, so 19 failed where they sit and blocked the gate. They are checked once they move.

## What this method could not have found

- A pick that a book prices as charging or checking-from-behind instead of interference: injury tiers were searched under the interference rules only.
- Any in-season CARHA, EIHL or IHUK bulletin published after the copies on disk.
- How IHUK actually applies the §9.1 Note; no clarification is on disk.
- Real phones, other browsers and screen readers.

## Not covered

- No IHUK clarification of how the §9.1 Note applies to lead coaches. The text ships the unconditional §9 reading.
- Echoes the site review reported (cross-ice caption vs the next paragraph; breakouts 30(a) clause vs the next paragraph) are open plan rows.

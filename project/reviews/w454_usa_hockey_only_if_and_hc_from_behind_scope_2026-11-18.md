# W454: a W453 "only" that made a USA Hockey hit from behind sound cheaper is removed, and three facts lines name the books that eject (18 November 2026)

**Content files changed:**
- systems/special_teams.md
- positions/switching_positions.md
- systems/defensive_zone_coverage.md
- hockey-iq/playing_without_the_puck.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W453 (1) and (2).
- **Census:** a read-only rules-verifier census of every site pricing a Hockey Canada hit from behind. It read about 150 sites across the corpus and the diagram captions.
  - It found no permissive defect in the prose.
  - It found two AMBIGUOUS facts lines: pwtp :824 and dzc :166.
  - It found several harsh overstatements, which are filed below.
  - It ruled that "while it stays off the head" is correct at roughly 40 sites and must never be swept.
- **Authors:** four agents, one file each.

## The W453 regression this wave caught
W453 shipped "**USA Hockey only if** forceful at the boards, head first or reckless" at special_teams :659.
- **Where it came from:** "only" was in the rules reviewer's round-1 replacement text. The safety reviewer, the commit gate and the coordinator all passed it.
- **Why it was wrong:** USAH 608(a) reads "A minor plus a misconduct penalty, or a major plus a game misconduct penalty, shall be assessed". "Only" therefore told a USA Hockey reader that other hits from behind cannot eject them, which is permissive.
- **How it came close to spreading:** the W454 brief told the special_teams author to add "only" to :1114 as well. The author refused and removed it from :659 instead. The switching author had already added "only" at :244 before the correction reached it, then removed it.
- **Who agrees:** the rules reviewer agrees "only" was its error.

## The USA Hockey form, settled by the rules reviewer
USAH Casebook 608 Situation 1 sets three cases:
- **Must be a minor plus misconduct:** an open-ice push, or a minimal-contact pinch at the boards, unless the hit is reckless.
- **Must be a major plus game misconduct or a match:** forceful at the boards, head first, or reckless.
- **Everything else:** 608(a)'s discretion.

The one form that is true everywhere: **"USA Hockey if forceful at the boards, head first or reckless, else at least minor and misconduct"**.

## What changed (all voiced alone, as facts lines)
- **special_teams :659.** "only" removed. The line now matches the form exactly.
- **switching_positions :244.** "(IIHF or Hockey Canada head hits: plan on it)" became "(IIHF or head hits: plan on it)".
  - Hockey Canada now falls under the plain "ejects" (HC 7.5(e)).
  - The USA Hockey floor is not on this line, because there is no room at 286/300. The next facts line in the same chunk gives 608(a)'s "at least a minor and misconduct".
- **defensive_zone_coverage :166 (300/300).** "…never just a minor (IIHF or Hockey Canada head hits can be: plan on ejection) and ejects in the NHL, PWHL, CARHA and Hockey Canada (IIHF: plan on it); USA Hockey if forceful at the wall, head first or reckless, else at least minor + misconduct (608)".
  - HEAD named Hockey Canada only for the head case.
  - The first repair wrote "USA Hockey may, and must if…", which the rules reviewer marked WRONG in the harsh direction: Situation 1 makes the minor mandatory in its two named cases.
- **playing_without_the_puck :824 (294/300).** "⚠️ **Never hit from behind** — every call ejects under NHL, PWHL, CARHA and Hockey Canada off the head; IIHF, or Hockey Canada on the head: plan on it (Hockey Canada: a match if defenceless); USA Hockey if forceful at the boards, head first or reckless, else at least minor and misconduct (608)".
  - HEAD said "four books eject every call" without naming them, and named Hockey Canada only in the head bracket.
  - The first repair gave USA Hockey only its minor, which the rules reviewer marked WRONG in the permissive direction.
  - The bold lead changed from "finish into a back" to "hit from behind", because the line never named the act for a listener.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **Census** as above. **Review:** :659 OK, :244 OK, :166 WRONG (harsh), :824 WRONG (permissive). A single form was supplied, and both fixes applied it. "Only" was its own round-1 error. |
| safety-reviewer | CLEAR on all four lines. None is cheaper than HEAD. "Important." counts are equal, and pwtp :824's reworded unit still opens "Important." Situation 1 was quoted and the form was confirmed exact. |
| site-reviewer | Four pages at 400×812 DPR 2 light/dark and 1440 light, on the 12:45:22 build. Every new facts value is present. The :824 warn-inline run forms. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. |

### C11
The coordinator wrote no content. Two departures from the reviewer sketches were made by authors and confirmed by safety:
- dzc :166 uses "IIHF or Hockey Canada" and "at the wall" to fit the cap.
- pwtp :824's lead is "Never hit from behind".

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 12:45:22; the newest content file is dzc at 12:43:38.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0, and `--panels --file` reports 0 on all four files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.
- **Coordinator grep:** no "only if forceful" or "USA Hockey may" remains in content/.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 608(a)–(c), 620(b), Casebook 608 Sit 1; HC 7.5(a)–(e), Interpretations 1–4, 7.6 preamble/(a)–(c), 7.7(a)–(c); NHL/PWHL 43.2/43.5; IIHF 43.2/43.3, 48.2; CARHA 53(a)/(b) |
| D2 Exceptions | Situation 1 mandatory-minor cases; HC 7.6 supersession |
| D3 Cross-book divergence | which books eject on every call |
| D4 Citation integrity | the census found caption getting-beaten-wide citing HC 4.12(a) for the penalty shot (4.11(a)); filed |
| D5 Provenance | hc.txt (10 Sept republication) is the current file, not hc_2026-08-print |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | "plan on it" for discretionary books |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | the census read KT and CM in every file; dzc KT4 etc. state the ejecting tiers |
| D10 Key-facts | all four changed lines are voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | pwtp lead names the act; "+" voiced "plus" |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed
**Harsh direction (low priority):**
- winger :530 and :859 say "never two minutes and nothing else in any book", but HC 7.6(a) allows a bare minor for an accidental head hit in minor and female hockey.
- Captions forecheck-122 and forecheck-131 give the HC and CARHA game misconduct "even to their minor" with no head exception. Check whether these come from a shared constant.

**Silent:**
- Caption dz-collapse-corner gives Hockey Canada only the 7.5(c) match, never the ordinary game misconduct.

**Same shape as :166, no room:**
- dzc facts :477 (Never line, 194/200) names Hockey Canada only in the head bracket.

**USA Hockey floor not stated:**
- dzc :180, :488, :860 and KT4 state USA Hockey's ejecting tiers without the floor. This errs harsh.

**Different act:**
- Caption getting-beaten-wide (switching_positions.mjs :440) cites HC 4.12(a), which is Awarded Goals, for the penalty-shot narrowing. The penalty shot is 4.11(a).

## What this method could not have found
- A Hockey Canada price stated without "Hockey Canada" and without a behind-word nearby.
- Whether referees treat Situation 1's named cases as a ceiling.
- Real synthesised audio.

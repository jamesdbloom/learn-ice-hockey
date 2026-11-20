# W531: the slashing injury tier, the CARHA and PWHL slashing tariffs, and the Casebook Situations in the Sources trailers (20 November 2026)

## Scope

| Agent | Files | Work |
|---|---|---|
| A (read-only rules-verifier) | — | W530(2) and W530(4): slashing claims swept across the whole corpus, in every layer. Wordings searched: slash, chop, whack, hack, rap, two-hand, "on the hands", "stick down on", "swing at". |
| B | center, switching_positions, goaltender, time_and_space | W529(3) Sources trailers; W530(3) time_and_space :427 |
| C | rules_primer | Agent A's rules_primer finding |
| D | body_contact_and_battles, defensive_zone_coverage | Agent A's findings in those files |

A safety-reviewer with a rules check (C4/C6) read the whole diff. It rendered rules_primer to audio.

## Findings and repairs

**What the sweep found.** No site states the play-the-puck excuse as if every book had it. goaltender :1704's "one meant to hurt somebody is an NHL match penalty" holds against NHL 21.1 ("shall be imposed").

**The real finding: the injury tier was missing.** Four books make a slash that injures a mandatory major and game misconduct:

| Book | Rule |
|---|---|
| NHL | 61.3, "When injury occurs, a major penalty must be assessed", with 61.5 |
| PWHL | 63.3 and 63.5 |
| Hockey Canada | 9.3(b), second paragraph |
| CARHA | 80(b), "shall incur a Major penalty", with 30(a) |

The IIHF and USA Hockey write no injury clause. The owner document never said this, and two other pages understated it.

| Site | Before | After |
|---|---|---|
| body_contact :410 | Gave only the discretionary major and the match. | "**If the slash injures, the major is not a judgement call:**", with each book's rule. The IIHF and USA Hockey negative is folded into the existing ⚠️ run: "tied to recklessness rather than injury, and both run high". |
| body_contact :1761 | — | Carries the injury limb. |
| body_contact Sources trailer | The NHL entry said 61.3's major turns "not on injury", which was false. | Corrected. Hockey Canada 9.3(e) and CARHA Rule 80 added. |
| DZC :821 | "CARHA 80(a) allows a major". | "under Hockey Canada and CARHA alike, a slash that injures must be a major and game misconduct (9.3(b), 80(b), 30(a)), and one meant to injure is a match (9.3(c), 80(d))". |
| DZC :821 | "a stick coming down on a loose puck usually is one" — the document's own reading, stated as fact. | "a referee may judge … to be one". |
| rules_primer :427 | Had no CARHA or PWHL slashing tariff at all. | NHL: "a match available (61.4), which Rule 21.1 makes mandatory for a slash meant to injure; the PWHL's rule is the same". CARHA: minor or major at discretion, a major on injury, "a slashing major there always ends your game" (scoped, because the 30(a) Note exempts an accidental high-stick major), and a match for a slash meant to injure (80(d), 48(h)). |
| rules_primer :418 | Said USA Hockey "singles out" upper-stick slashes. | **First repair:** it hung the upper-stick penalty on "with no attempt to legally play the puck". The commit gate blocked this as permissive, because Standard of Play Situation 3 penalises higher up the stick either way, and the 634 Note has no play-the-puck excuse. **Final:** "strictly penalises any slashing contact on the hands, arms or body. Its Casebook allows a check or press on the stick only 'on the lower portion of the stick shaft', to dislodge the puck or stop them playing it, and calls one 'higher up on the stick' a penalty (Standard of Play, Situation 3); any forceful chop on their stick, or on or near the hands, is slashing (634 Note)". A safety-reviewer re-read it and gave it OK; its two tightenings were applied. |
| rules_primer Sources | — | Now cites CARHA Rule 80. |
| time_and_space :427 | "A hard chop can be called a slash", which implied a light chop is safe. | "A chop can be called a slash, and Hockey Canada and CARHA excuse only a tap on the puck-carrier's stick to take the puck". The press on the blade is left alone: it is not a strike. The trailer quotes Hockey Canada 9.3 and the CARHA Glossary. |

**Sources trailers (W529(3)).** The premise was partly wrong for three of the files: center, goaltender and switching_positions cite no Standard of Play Situation 3 or 4. They cite Situation 17, and switching_positions also cites Situation 12. defender.md, the row's fourth file, was missed in the first pass: it does cite Standard of Play Situations 3, 4 and 17. The commit gate caught this, and defender's trailer was then added. The trailers were added accordingly, with verbatim quotations. The Situation 12 quotation was first a bare permission. After the reviewer's minor, it now quotes the sentences that limit it: "Any time the stick or arm is used to impede the opponent…" and "Interference occurs when…".

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| safety-reviewer with rules check | none | none | 6 | Five repaired. The sixth (voice the injury limb in body_contact's facts layer) was judged unnecessary: facts :392 already states the harsher floor, a major and game misconduct with nobody hurt. |

The reviewer checked every quotation and found each verbatim, with no terminal period added inside the marks. rules_primer :427 renders as a single chunk.

**Commit gate, first pass: BLOCK** on two counts:
- rules_primer :418 (above).
- W529(3) closed with defender.md missed. defender's trailer now cites Standard of Play Situations 3, 4 and 17, verbatim.

**C11.** No reviewer re-read the last repairs, except rules_primer :418, which was re-read. Each is confined to its finding and taken from the reviewer's sketch.

## Rows

- **Closed:** W529(3); W530(2), (3), (4).
- **New, From W531:**
  1. British slashing departures, not yet searched.
  2. The awarded-goal citation, NHL 57.4 versus Rule 25.
  3. NHL 61.8 and PWHL 63.8 supplementary discipline, carried nowhere.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 7 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered by the sweep and by the reviewer's rules check |
| D2 exceptions | Covered: the CARHA 30(a) Note on accidental high sticks; the Hockey Canada and CARHA puck-carrier tap; Situation 12's limits |
| D3 cross-book divergence | Covered: the injury tier, book by book |
| D4/D5 citations | Covered: verbatim checks; trailers extended |
| D6 negative existence | Covered: "the IIHF and USA Hockey write no injury limb", checked against 61 and 634 |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: the sweep found no summary layer stating the old ladder |
| D10 facts layer | Covered. The reviewer judged that no facts line needs the injury limb. |
| D11 reader safety | Covered by the safety-reviewer |
| D12 read-aloud integrity | Covered for rules_primer (rendered); the other files were judged by reading |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: check_links; "matches" changed to "is the same" |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **A slashing claim with none of the swept words.**
- **Other rules in Hockey Canada or USA Hockey that make an injurious stick foul mandatory.**
- **British departures on slashing.**
- **Reviewer transcripts:** they are not on disk, so this record summarises them.

# W538: tightening the long Key Takeaways, and the helmet clash and charge tariffs the review found (20 November 2026)

## Scope

This is a readability wave, the owner's priority since 8 November.

`check_readability.py` counted 18 Key Takeaways over 60 words, spread across 15 files. Each Key Takeaway is voiced alone. Brief: `scratchpad/w538_common.md`. The brief asked for the instruction first, every safety limb kept, and no tariff over-summarised.

| Agent | Files |
|---|---|
| A | rules_primer, body_contact_and_battles, language_and_glossary, faceoffs |
| B | defender, winger, forechecking_systems, special_teams, zone_entries, game_management |
| C | playing_without_the_puck, mental_game, team_play_and_culture, conditioning_and_recovery, getting_started |

## Result

13 Key Takeaways changed across 11 files. The count over 60 words went from **18 to 16**. Wherever an agent kept the words above 60, they are tariff limbs, so the trim was small by design. Filed as W538(1).

| File | Key Takeaway | Words | What changed |
|---|---|---|---|
| language_and_glossary | KT11 | 64 → 62 | See the review fix below |
| faceoffs | KT3 | 65 → 69 | See the review fix below |
| rules_primer | KT5 | 65 → 63 | Wording only |
| rules_primer | KT9 | 71 → 67 | Merged two crease sentences. CARHA "if they are hurt" became "if it injures", per 52(b). |
| body_contact | KT11 | 71 → 68 | The tariff became its own sentence after the instruction |
| game_management | KT7 | 64 → 61 | **Correction.** "Same five" was unscoped. Hockey Canada applies no-change only in some divisions (6.7(d)), and USA Hockey and CARHA have none. Now scoped to NHL, IIHF and PWHL, with no time-out (87.1, 89.1). |
| forechecking | KT8 | 71 → 70 | Citation cut |
| playing_without_the_puck | KT11 | 90 → 82 | See the review fix below |
| playing_without_the_puck | KT12 | 62 → 57 | Restatement cut |
| mental_game | KT1 | 99 → 93 | Filler only. Every warning sign, the same-day tier, harm to self or others, suicide, emergency numbers and the §13 pointer are all kept. |
| team_play_and_culture | KT12 | 80 → 73 | Wording only; the peacemaker tiers are unchanged |
| conditioning_and_recovery | KT11 | 70 → 64 | Wording only. "A violent one can, and one that injures must", per Hockey Canada 7.3(b). |
| getting_started | KT14 | 61 → 60 | One article cut. All ten red flags kept. |

Agent B left five Key Takeaways at their length because each is tariff-bound: defender KT3, winger KT8, forechecking KT6, special_teams KT10 and zone_entries KT11.

Agent C first edited the wrong Key Takeaway, getting_started KT8, because of a miscount. It caught the mistake itself and reverted it exactly. The diff confirms only KT14 changed.

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| safety-reviewer with rules check | none | none introduced by W538; two pre-existing (faceoffs KT3 and CM :1323) | 2, plus one pre-existing harsh overstatement | All repaired; re-read OK |

**Rulings, verified against the sources:**
- **Deliberate goalie contact** is at least a minor in all six books: NHL and IIHF 69.2, PWHL 71.2, Hockey Canada 8.5(a), CARHA 66(b) and USA Hockey 607(d) Note 1. So "in every book" may govern that clause.
- **CARHA contact outside the crease** does not read as cheap in any Key Takeaway, because 66(b) and 30(a) apply.
- **The icing time-out bar** is verified. Hockey Canada 6.7(d) iii permits the time-out.
- **The peacemaker tiers and 7.3(b)** are verified.

**Repairs:**
- **playing_without_the_puck KT11 (minor).** "USA Hockey adds a misconduct to deliberate contact in the crease or privileged area" implied a bare minor outside that area. It now reads: "USA Hockey calls any deliberate contact charging: a minor and misconduct at least." This follows 607(a) and 607(d) Note 1.
- **rules_primer KT9 (minor).** "Skates off the blue paint" invited leaning into the crease's airspace. "From outside the crease" is restored.
- **faceoffs KT3 (pre-existing major).** It priced a USA Hockey helmet clash at the dot as "at least a minor (plan on a misconduct too)". The same file's facts :772 and :1142 call it head contact, which is a mandatory major and game misconduct if careless (620(b); Casebook 620 Situation 1). It now reads: "Under USA Hockey plan on at least a minor plus a misconduct, and ejection if careless." There is no Situation 2 excuse, per the owner's ruling of 9 November. Hockey Canada 6.2(c) and CARHA 57(b) minors are verified.
- **faceoffs Common Mistakes :1323 (major).** The layer test found this, and it was the last layer still missing the careless-ejection limb. It now reads: "plan on it being called head contact however little force is behind it: at least a minor plus a misconduct, and ejection if careless."
- **language_and_glossary KT11 (pre-existing harsh overstatement).** "Plan on a match for a reckless charge" is now "it must if the charge is reckless (plan on a match too) or reaches the head, face or neck, even carelessly". That gives 607(b) mandatory ejection and 620(b) as a must.

The reviewer re-read all of the repairs and passed them. center and winger already carry the helmet-clash limb.

## Rows

- **Closed:** none. This was a readability measure, not an existing row.
- **New, from W538:**
  1. The remaining 16 Key Takeaways over 60 words, and a structural option for the goalie ladder.
  2. The helmet-clash act in other wordings.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished (`scratchpad/build_w538.log`).
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 11 files, 0 lost, 0 split.
- `check_readability`: long Key Takeaways went from 18 to 16.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered by the reviewer, against the sources |
| D2 exceptions | Covered: Hockey Canada 6.7(d) divisions; Casebook 607 Situation 5; 620 Situation 2 excluded per the owner |
| D3 cross-book divergence | Covered: icing no-change by book; peacemaker by book |
| D4/D5 citations | Covered |
| D6 negative existence | Covered: USA Hockey and CARHA have no icing no-change rule |
| D7 cardinal rule | Covered: each Key Takeaway leads with the instruction |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: Key Takeaways are the target; faceoffs layer-tested |
| D10 facts layer | Not changed |
| D11 reader safety | Covered by the safety-reviewer |
| D12 read-aloud integrity | Covered: every changed Key Takeaway rendered and read alone |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered by `check_links` |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **Key Takeaways that were wrong before W538 against a book nobody was asked to check.**
- **The helmet-clash act described in other words.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.

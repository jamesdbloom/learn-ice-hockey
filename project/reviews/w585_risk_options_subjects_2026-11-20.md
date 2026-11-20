# W584–W585: Risk and Options facts lines name their subject (20 November 2026)

## W584 census (content-reviewer, read-only)

The census read all 489 `Risk:` and `Options:` facts lines (291 and 198) across 26 files. Each is voiced alone, label first.

**Result:** 130 defects: 8 at Tier 1, 116 at Tier 2 and 6 at Tier 3. There are also 21 optional rows. Both tables are preserved in this directory:
- `w585_risk_options_subject_rows_2026-11-20.tsv`
- `w585_risk_options_optional_rows_2026-11-20.tsv`

**Tier 1:**
- **breakouts :904.** "The own-goal is the only way you can lose from here" is false when heard alone.
- **dtr :542.** It implied a well-timed slide is safe from a tripping call.
- **risk_management :208.** "Use the glass" sat on the page that owns the over-the-glass minor.
- **game_management :200, :1038, :1138.** Lines with no subject, or with an unsourced casebook claim.
- **faceoffs :348.** A rule number with no book.
- **passing :817.** Injury advice with no subject.

**Also found:** defender :611 mixed "pinch" with "step up".

## W585 edits (five agents, disjoint files; brief `scratchpad/w585_common.md`)

All 130 rows were applied, plus agent-found siblings:
- dzc :395 ("opposite adjustment to the collapsing box");
- three W579 Tier 3 rows in puck_handling, at :555, :794 and :795.

About 25 sketches were changed to keep scope or grammar. The changes of substance:
- **faceoffs :348:** "NHL and IIHF 76.7". Both books carry the premature-movement clause.
- **dtr :542:** "a well-timed slide that takes a player down can still be called a trip", checked against USA Hockey Casebook 639 Situation 4 and Hockey Canada 8.6.
- **dtr :327:** "an attacker's body", not "your man's", because the foul reaches anyone.
- **goaltender :281:** narrowed to RVH, which is what the body criticises.
- **game_management :75/:76:** "Sit back too deep on a lead", so it does not contradict :67's defence of sitting deeper.
- **game_management :1138:** checked against USA Hockey Casebook 640 Situations 2 and 25.
- **puck_support :386/:388:** "into a pile", the section's actual scope.
- **risk_management :208, after review:** "up off the glass, not over it".

No ⚠️ was added, removed or moved.

## Review

**safety-reviewer: OK, nothing to fix** (25 files, 134 lines).
- Every Tier 1 row is confirmed. faceoffs :348 was checked against NHL and IIHF 76.7.
- game_management :1038 is an Options line priced by the Rule lines beside it, so it does not break the cardinal rule.
- The goaltender :281 RVH narrowing is correct.
- All changed rows and about 30 spot-checks are correct.
- One optional tweak (risk_management :208) was applied.

## Rows

**Closed:** the W583 `Risk:`/`Options:` remainder.

**Still open:**
- 21 optional rows.
- switching_positions :83 and :463, still pointer lines.
- About 1,500 body-prose hits.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_links --quiet`: run after this record was written.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w585.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost in every file.

## What this method could not have found

- **Audio.** Not rendered.
- **Hockey Canada 8.6.** Checked by the editing agent only, not by the reviewer.
- **The same shape in body, Common Mistakes or Key Takeaway sentences in these files.**

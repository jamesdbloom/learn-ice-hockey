# Consolidate the active plan

## Scope

This change replaces the oversized active queue with a concise execution plan.
It does not change `content/` or site behaviour. The pre-consolidation working
tree is preserved verbatim in
[`plan_archive_2026-09-16_pre_consolidation.md`](plan_archive_2026-09-16_pre_consolidation.md).
That archive is historical evidence and is not an active dispatch source.

The fresh-context audit read the prior queue in full, classified its rows, and
checked the replacement against `project/content_style_guide.md`,
`project/review_process.md`, the detailed readability specification, current
repository paths, and current document counts. The audit found the prior queue
contained completed/retracted work, duplicated clusters, method guidance, stale
figures, and live safety/rules work mixed together.

## Result

`project/plans/OPEN_ITEMS.md` now contains five ordered workstreams:

1. Gate and baseline.
2. Readability and principles release one.
3. Safety and rules residuals.
4. Diagrams, site, and audio release validation.
5. Deferred backlog.

The first workstream is explicitly dependent on the baseline. The first release
is limited to the two pilot documents and the principles index. The plan now
includes a post-pilot rollout protocol covering principle taxonomy freeze,
full-corpus matrix construction, disjoint content-family waves, per-wave
measurements, fresh review, and stop/go criteria.

The detailed design remains in
[`../plans/READABILITY_AND_DUAL_AUDIENCE.md`](../readability_and_dual_audience.md).
The local NotebookLM procedure remains in
[`../plans/PODCAST_AUTOMATION_LOCAL.md`](podcast_automation_plan_consolidated_2026-09-20.md).
The active queue states that those files are specifications/procedures, not
additional dispatch queues.

## Retained live risks

The condensed queue retains explicit work for the shorthanded-icing and NHL
20.3/81.6 cluster, British U12 applicability, goalkeeper-area and contact
scope, standalone facts/headings, reader-facing caption safety/rule residuals,
pilot metadata and pathway review, diagram host/value review, audio staleness,
and podcast ordering. It does not declare any of these resolved.

## Archive and omissions

Completed and retracted rows, historical incident narratives, duplicated method
guidance, and stale measurements were removed from the active queue. Their
evidence remains in the dated review records and the pre-consolidation archive.
The archive's relative links were repaired after the move and checked with the
repository link checker.

The condensed plan intentionally does not enumerate every historical row. A
deferred item must be reopened only with an owner, exact file set, evidence link,
acceptance condition, and required reviewers. This prevents a broad historical
finding from becoming an unverified dispatch brief.

## Coverage and checks

- Fresh-context adversarial review of the old queue, archive, and replacement:
  completed before this record.
- `python3 scripts/check_plan_rows.py`: passed with zero open-row assertion hits.
- `python3 scripts/check_links.py --quiet`: passed after archive link repair.
- `git diff --check`: passed for the plan and archive.
- No content, source, script, or generated site files were changed by this
  consolidation.

## What this method could not have found

This review did not verify the truth of individual hockey, medical, rules,
diagram, or citation claims. It did not run a site build, render audio, inspect
Apple Podcasts or Spotify, or conduct user testing. It could not establish that
every historical row has already been resolved in the repository; it preserved
the prior queue so those claims remain recoverable. A future workstream must
re-verify each retained live risk against current files before acting.

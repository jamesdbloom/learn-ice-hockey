# Open items

**The list of work still to do, and nothing else.** How to do the work lives in
[`../working_guidance.md`](../working_guidance.md) (and CLAUDE.md above it). Finished work goes to a review
record in [`../reviews/`](../reviews/), and its row is deleted from here in the same edit. Older closed
rows are archived in
[`plan_open_rows_archive_2026-10-22.md`](../reviews/plan_open_rows_archive_2026-10-22.md) and the
`closed_plan_items_*` files in `../reviews/`.

**This plan was cut from about 470 items to the rows below on 23 November 2026, at the owner's instruction:**

> "I want to consider all items in the plan and ensure none of them are going to negatively impact readability, I also don't want to bother with plan items that are too low in importance, I mean really subtle low priority points should be dropped"

**The bar for a row now:** it stays only if it has one of these:
- a place where a reader is told an act is cheaper than the book, or could be hurt;
- a factual error;
- a real readability or teaching gain;
- an owner decision;
- source work that a gate depends on.

Rows that were harsh-direction-only, citation nits, consistency-only, cosmetic, optional, or speculative sweeps were dropped. **No fix may lengthen a summary layer** (Key focus, Overview, Key Takeaways, facts). Fix by substitution or reordering.

The per-item verdicts are in [`plan_triage_2026-11-23.tsv`](../reviews/plan_triage_2026-11-23.tsv), and the full pre-triage plan, with every row's evidence, is `../reviews/plan_snapshot_before_triage_2026-11-23.txt`. A dropped row can be reopened from there if it turns out to matter. **Apply the same bar before adding a new row.**

**Line numbers drift.** Find a line by its text, and re-test a row before acting on it. Short names: bcb = body_contact_and_battles, dzc = defensive_zone_coverage, ozp = offensive_zone_play, pwtp = playing_without_the_puck, dtr = defending_the_rush.

## In flight

- None. W637 shipped with record `w637_diagram_focus_crisis_guard_2026-11-23.md`.
- W636 B shipped as b49e766b, with record `w636b_renderer_rule_numbers_2026-11-23.md`. W636 A shipped as ed2991c8, with record `w636_shared_facts_lines_2026-11-23.md`.
- W635 shipped as fe7dc96a, with record `w635_crisis_numbers_label_facts_lines_2026-11-23.md`. W633–W634 shipped as 3fe0d04d, with record `w634_one_warning_per_unit_2026-11-23.md`. W632 shipped as abdc0da8, with record `w632_pwhl_2026_27_propagation_2026-11-23.md`. W630–W631 shipped as 144a5487, with record `w631_pwhl_helmet_youth_lines_renderer_2026-11-23.md`. W629 shipped as 660e06ba, with record `w629_readability_restatement_diagrams_2026-11-23.md`. W628 shipped as de67466f, with record `w628_plan_groups_1_3_2026-11-23.md`. The plan triage shipped as 15b6d0cc. W626–W627 shipped as 25cf51b3, with record `w627_usah_match_reword_batch3_2026-11-23.md`. The owner's W521(2) USA Hockey match reword is complete (7df277f1, 161ba351, 25cf51b3).

## 1. Cheaper than the book, or a reader could be hurt

- None open. W630 added the young people's crisis line to mental_game, and W631 fixed PWHL helmet removal.

## 2. Factual errors and contradictions

- None open. All four closed in W628.

## 3. Readability: heard aloud

- None open. [Dropped under the 23 Nov bar: about 45 rule numbers that are still read digit by digit ("twenty-nine point one eight") are understandable aloud, and fixing them in content adds words. The late-fight shared line (goaltender :1181 = special_teams :437) reads clearly, and the remaining near-cap facts lines are dense but accurate.]

## 4. Readability: restatement and length

**Measure, then cut. Use a layer test, and keep the one copy a player meets in play.** W629 closed the page-by-page restatement rows.


## 5. Diagrams

- **Practising on Your Own drill labels.** About 8 px at a 320 px phone width: 762 of 1,064 text runs sit on `TEXT_MIN` (0.62 ft) in `site/src/drills/lib/draw.mjs`. Raising it to about 0.84 ft gives about 11 px, but all 72 hand-placed drills would then need re-rendering and a collision review. Format call; see Owner decisions.
- **Cosmetic, carry only if a module is edited anyway:** in `cross-ice-in-your-own-end`, F3's curve hugs the circle line. (W623)

## 6. Sources and tooling

- **PWHL 2026-27, remainder.** The Sources trailers that cite the 2025-26 PDF record what was read and when, so they are accurate provenance and stay as they are. Re-point a trailer only when its rule is re-read in the new book. [The "summary layers built on the old rule" sweep is dropped under the 23 Nov bar: it is a speculative sweep with no named defect.]
- **Hockey Canada PDF.** The PDF itself is still not in sources/; only its two extractions are. The Appendix D scramble note was added to sources/README.md on 23 Nov. Fetch the PDF only if a page needs it. (W385 (8))
- **The IHUK-distributed compressed IIHF PDF.** It bears on the In-House edition contradiction. It needs an unfiltered network, so the owner must fetch it.

## Owner decisions needed

**Worth answering:**
- **W405 (1).** Three diagram labels are drawn near the wrong player ("boards-side D", "nearest body", "retrieving"), at faceoffs.mjs ~:245, ~:402 and ~:564. A label naming the wrong player teaches the wrong role.
- **Decision F's reach.** Should the per-book price lists also come out of the Overviews of rules_primer, bcb, uk_rules and special_teams? Price lists in an Overview work against tactics-first.
- **bcb Key focus.** Should it gain "never contact the head"? That is a safety point, and it is something a player does.
- **Decision D.** Accept the multi-sentence per-book passage as shipped ("Keep your skates off a player who is down…"): yes or no.
- **Phone legibility of diagram and drill labels.** Full-rink diagram labels are 7–10 px at 400 px, and drill labels about 8 px at 320 px. Raising the drill floor means a 72-drill re-render and review. This is a format call.
- **IIHF 2025/26 URL.** A dead link is cited 49 times. Choose one: keep and label it, re-point it, or rely on the copy on disk. Never delete it. (W431 (1))

**Likely to drop. Say so and they go:**
- **W398 (3).** The C-as-carrier exception to the label convention. This is notation bookkeeping.
- **W391 (3).** USA Hockey's "must" tier in Key focus. It would add rules to Key focus.
- **W396 (1).** Where the DOPS facts lines live. This is structural.
- **Decision B.** "Head or neck" against "head, face or neck". W442 already shipped the wider form.
- **W377 (6).** A lower amber and length ceiling for the getting_started concussion Key Takeaways.
- **SG181.** The faceoffs awareness split, which was previously reverted, and stating USA Hockey 615(a).
- **SG165.** Relaxing a leader that runs over paint.

**Owner-only actions:**
- **Podcasts.** An ear test of a sample of the two-voice episodes.
- **Screen reader.** A real screen-reader pass of the site. (W472 (2))

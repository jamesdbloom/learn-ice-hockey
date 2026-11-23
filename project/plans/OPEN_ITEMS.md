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

- **W636 B (23 Nov):** a read-only agent is proposing the renderer remainder patch. W636 A shipped with record `w636_shared_facts_lines_2026-11-23.md`.
- W635 shipped as fe7dc96a, with record `w635_crisis_numbers_label_facts_lines_2026-11-23.md`. W633–W634 shipped as 3fe0d04d, with record `w634_one_warning_per_unit_2026-11-23.md`. W632 shipped as abdc0da8, with record `w632_pwhl_2026_27_propagation_2026-11-23.md`. W630–W631 shipped as 144a5487, with record `w631_pwhl_helmet_youth_lines_renderer_2026-11-23.md`. W629 shipped as 660e06ba, with record `w629_readability_restatement_diagrams_2026-11-23.md`. W628 shipped as de67466f, with record `w628_plan_groups_1_3_2026-11-23.md`. The plan triage shipped as 15b6d0cc. W626–W627 shipped as 25cf51b3, with record `w627_usah_match_reword_batch3_2026-11-23.md`. The owner's W521(2) USA Hockey match reword is complete (7df277f1, 161ba351, 25cf51b3).

## 1. Cheaper than the book, or a reader could be hurt

- None open. W630 added the young people's crisis line to mental_game, and W631 fixed PWHL helmet removal.

## 2. Factual errors and contradictions

- None open. All four closed in W628.

## 3. Readability: heard aloud

- **Shared facts lines that need one owner across every copy.** Rewording only some copies makes them diverge, so each needs a single pass that changes them all together.
  - The goaltender :1181 = special_teams :437 late-fight line.
  - W635 shortened 14 near-cap lines in goaltender, center, winger and forechecking. The remaining near-cap lines are mostly dense multi-book tariffs; fix one only when it is hard to follow aloud. (W635 C)
- **Renderer voicing, remainder after W630** (the patch in `md_to_speech.py` handles seasons, rule numbers after a book name, Situation or Rules, and U18AAA).
  - About 66 rule-context lines are still read digit by digit. These are a bare "(9.12)" with no lead word (rules_primer :1143), and leads written as "Casebook", "Handbook" or "Interpretation".
  - "46.3→46.10" voices the arrow as a bare comma (uk_rules :130).
  - "2010–11" written with an en dash reads "two thousand and ten to eleven" (forechecking).
  - The new "twenty twenty-six–twenty-seven" form assumes the engine reads the en dash as a short pause. The owner's ear test should confirm this.

## 4. Readability: restatement and length

**Measure, then cut. Use a layer test, and keep the one copy a player meets in play.** W629 closed the page-by-page restatement rows.


## 5. Diagrams

- **Full-sheet diagrams open scrolled left at 400 px:** the-last-player-back, "Behind, level and ahead" and "Three neutral zone lanes". The labelled play is off-screen until you scroll. Consider an initial scroll centred on the action. (W633 A)
- **Practising on Your Own drill labels.** About 8 px at a 320 px phone width: 762 of 1,064 text runs sit on `TEXT_MIN` (0.62 ft) in `site/src/drills/lib/draw.mjs`. Raising it to about 0.84 ft gives about 11 px, but all 72 hand-placed drills would then need re-rendering and a collision review. Format call; see Owner decisions.
- **Cosmetic, carry only if a module is edited anyway:** in `cross-ice-in-your-own-end`, F3's curve hugs the circle line. (W623)

## 6. Sources and tooling

- **The crisis-box nowrap depends on the box's wording.** `remark-corpus.mjs` finds the box by its opening sentence (`CRISIS_RE`). If that sentence is reworded, the numbers silently start wrapping again on a phone. Consider a checker assertion. (W635 A)
- **PWHL 2026-27, remainder after W632.** 52.1/52.5, 82, the trapezoid and the 9.10 neck protector are now propagated across about 30 pages. Two things are left.
  - **Sources trailers.** These still cite the 2025-26 PDF for rules nobody has re-read in the new book. The 2026-27 link was added only beside the rules that were re-read. A rule-by-rule re-read is needed before those links can be re-pointed (W632 D lists on_ice :805, pwtp :1184, how_to_watch :739, goaltender :1847, equipment :902).
  - **Summary layers.** Some may still assume the old PWHL rule without naming the PWHL or the act. These are found only by reading, not by a sweep.
- **Hockey Canada PDF.** Put it on disk, and note in `sources/README.md` that `hc.txt` scrambles Appendix D. (W385 (8))
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

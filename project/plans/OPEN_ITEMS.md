# Active work

**Consolidated 16 September 2026.** The previous 2,021-line plan is preserved
verbatim in [`plan_archive_2026-09-16_pre_consolidation.md`](../reviews/plan_archive_2026-09-16_pre_consolidation.md).
That archive is evidence, not a dispatch queue. Completed, retracted, duplicated,
and historical material must stay out of this file.

This is the only active queue. Detailed design for the top priority is in
[`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md). Local
NotebookLM operations are in
[`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md). Do not duplicate
their specifications here.

The two linked files are specifications and operating procedures, not additional
dispatch queues. All executable work is tracked here; if this distinction needs
to be repository-wide, update `CLAUDE.md` in a separate coordinator-owned change.

## Priority order

1. Readability, principles, and dual-audience release one.
2. Safety and rules residuals that could cause a penalty, injury, or wrong
   rule-set decision.
3. Site, diagram, and audio validation required by release one.
4. Deferred technical, source, and corpus-wide work only after a go/no-go decision.

No lower workstream may delay the first workstream unless it is a safety or
release gate. A row is complete only after its acceptance condition and required
review are recorded in a review record.

## Workstream 0: gate and baseline — CLOSED 16 September 2026

Derived fresh at `734d8b0` with a clean tree and no agent live. The record is
[`../reviews/baseline_2026-09-16_workstream_0.md`](../reviews/baseline_2026-09-16_workstream_0.md),
which holds one row per metric with its exact command, and it is the owner of
every figure. **Do not quote a figure out of it into this file** — re-run the
command named there.

What it settled, in kind rather than in number:

- Working tree, index and `HEAD` are the same revision; all six gates pass on a
  run that counts.
- `ls scripts/*.py` matches `CLAUDE.md`'s inventory exactly. No drift.
- The marker wave has landed: **20 of 32 marker-carrying documents now print
  `already complies`**, and the residue is concentrated in three documents
  rather than spread.
- The seven documents that opened straight into a ` ```facts ` block no longer
  do. One document still opens on a diagram marker and is the likeliest one in
  the corpus to be correct as it stands.
- ⚠️ **`dist/` is recorded as *plausibly* current and NOT as a verified build** —
  a fresh mtime proves only that the eleven-step chain got past `clean:cache`.
- ⚠️ The 37 podcast episodes' `bytes` and `duration_s` were read from encoded
  files at **an unrecorded past revision**. The audio is gitignored and uploaded
  out of band, so its absence from the working tree means nothing either way —
  the baseline record's first draft read that absence as a finding, and says so.
  Workstream 3's audio-staleness row rests on the unrecorded revision.
- ⚠️ **The tightest table in the corpus is `foundation/rules_primer.md:815` —
  `Situation | Where the draw goes`, at 0 rows and 66 characters of headroom.**
  One added row silently costs a listener the whole table. This row's first draft
  said that table had vanished from `--near`; **that was wrong, and it was the
  dangerous direction.** Run the tool.

**Release-one file list, fixed by that record:**
`content/getting-started/getting_started.md`,
`content/foundation/rules_primer.md`,
`content/foundation/core_principles.md`. No corpus-wide shortening pass is open.

## Workstream 0B: the census tool — FIXED 16 September 2026

`scripts/check_readability_census.py` attributed every document's unheaded Sources
trailer to the preceding `##` heading — `## Key Takeaways` in 37 of 39 documents,
**195,639 words, 17.8% of the corpus.** Fixed between waves, as
`CLAUDE.md` requires. Record:
[`../reviews/census_trailer_misattribution_2026-09-16.md`](../reviews/census_trailer_misattribution_2026-09-16.md).

**Corpus summary layer: 29.5% → 12.2%**, confirmed two ways. The trailer now
reports as its own `(Sources trailer)` line rather than vanishing, and the
heaviest-sections rank order is corrected.

⚠️ **The first attempt broke `reconcile` and `reconcile` caught it** — a `continue`
that skipped the `*Sources` line itself, which is body text, costing exactly 376
words. **Take a copy of a tool before changing it; running the old one turns
"was it already broken?" from an investigation into one command.**

- [ ] ⚠️ **Every summary-layer figure written before this fix is superseded, and
  some are still quoted.** `READABILITY_AND_DUAL_AUDIENCE.md` carries a heading
  claiming roughly **three-tenths** of the corpus sits in the two summary
  sections — **superseded, and wrong by 2.4×**; it is roughly **one-eighth**. The
  section beneath it reasons at length from the false figure, comparing a 39.4%
  against a 7.2% that are **differently** wrong, because the two documents'
  trailers are different sizes. **Re-derive that whole section against the fixed
  tool, or delete its figures and point at the command.**
  ⚠️ **A note on quoting a wrong figure as evidence:** this row's first draft
  quoted that heading verbatim, and `check_counts.py` flagged the quoted words as
  a stale live claim — ⚠️ **`--update` would have rewritten text INSIDE a
  quotation.** The tool documents this hazard and handles it with its `RETROSPECT`
  marker list; the row simply carried no marker. **When quoting a superseded
  figure, put a retrospect word on the same LINE as the number** — the check is
  per-line.
- [ ] ⚠️ **A COORDINATOR FINDING THAT WAS WRONG, KEPT AS THE ROW BECAUSE THE
  RESIDUAL IS REAL AND SMALLER.** It was written here that
  `scripts/check_chunk_tails.py` *"prints a premise its own docstring retracts"* —
  its footer asks *"does this still tell the truth if the listener stops here?"*
  while the top of the file retracts the belief that a chunk is a separate file.
  ⚠️ **That was FALSE, and reading twenty more lines of the source settled it:**
  `check_chunk_tails.py` uses **that exact sentence on purpose**, immediately after
  the retraction, framed as *"the one the corpus already asks of every facts value,
  with the volume turned up."* It is the **standalone-reading test**, which the
  docstring endorses. **The footer and the docstring agree.** Re-derive the line
  numbers rather than trusting these; the file moves.
  ⚠️ **The lesson is the one this plan keeps relearning from the other side: the
  coordinator ran the tool, read its OUTPUT, and filed a defect against a file it
  had not read — the tail-read failure, committed in the same hour as briefs
  warning five agents against it.**
  **The residual, which is real:** the footer is the only thing a reader sees who
  runs the tool without opening it, and **on its own** *"stops here"* reads as the
  retracted premise rather than as the standalone test. **Acceptance:** the footer
  carries its own framing — that the seam is 300 ms inside one continuous file and
  the test is whether the value tells the truth **alone, at any position** — or it
  is recorded that the docstring is enough and this row closes unchanged.
  ⚠️ **A SHARED TOOL IS SHARED STATE: change it BETWEEN waves, never during one.**
  A classifier once changed under a live agent mid-round and the agent correctly
  reported that *"no finding in any report should rest on that tool's output
  today."* **This tool is named in a live brief right now.**
- [ ] `scripts/check_zones.py`'s `overlap_fraction()` is a **bounding-box** IoU
  that divides by a zero-area union for line segments — it reported two zero-area
  polygons as *"71% the same ice"*, which means nothing. **Skip degenerate polygons
  in the IoU pass, as `centroid()` already documents doing.**

## Workstream 1: readability and principles release one

**Owner:** coordinator for shared site/data; one agent per disjoint content file
set. **Priority:** highest. **Dependency:** Workstream 0. **Design specification:**
`READABILITY_AND_DUAL_AUDIENCE.md`.

### 1A. Principles source and coverage

- [x] **Inventoried, 16-17 September.** Seven transferable principles
  identified and sourced; an eighth candidate ("stay on the defensive side
  of the puck") was inventoried, then rejected by two independent
  `content-reviewer` passes — see Workstream 1G for the full reasoning and
  the rejected-candidate log entry.
- [x] Classification done implicitly through the rejection reasoning above
  (the eighth candidate failed on exactly the `fundamental-principle` vs
  `system-convention`/`evidence-backed-observation` boundary this row asks
  to police) rather than as a separate formal table. No further candidate
  has been raised since.
- [x] `content/foundation/core_principles.md` is the single source of truth,
  self-audited for internal consistency (found and fixed a Principle-4
  defect spanning all three of its own layers — see Workstream 1K) and
  citation-verified in full (all 14 sources hold — Workstream 1D).
- [x] **DONE, 17 September — full 39/39 document matrix built**, closing
  this row completely. See Workstream 1K's matrix-completion entries and
  [`../reviews/principle_matrix_complete_2026-09-17.md`](../reviews/principle_matrix_complete_2026-09-17.md).
- [x] **DONE, 17 September — transfer audit satisfied.** Position
  (`defender.md` etc.), system (`defensive_zone_coverage.md` etc.), and
  technique/hockey-iq (`body_contact_and_battles.md`,
  `scanning_and_anticipation.md` etc.) are all covered by the completed
  matrix, closing the "at least three contexts" requirement this row names.
  No novel reviewer-only-situation test has been separately run; the matrix
  work's own findings (e.g. the Principle-4 goaltender inversion, the
  Principle-6 denial direction) functioned as exactly this kind of transfer
  test and surfaced real corpus defects, which is the strongest available
  evidence the method works, but a deliberately-constructed novel scenario
  has not been tried.
- [x] **DONE, 17 September — this row now closed.** Dedicated
  `rules-verifier` and `facts-reviewer` passes ran over
  `core_principles.md`'s seven principles as a named exercise, completing
  1A's reviewer-clearance requirement. `facts-reviewer` found and fixed a
  Critical (Principle 7's "no time to turn" boards fallback was silent in
  its Key focus and Key Takeaway layers — the two most likely to be heard
  in isolation). `rules-verifier` confirmed all 19 rule claims checked
  against primary text, with one precision fix (a Hockey Canada claim
  overstated as "no such sentence anywhere in its book," missing a
  narrower Rule 8.1 permission) that was then found to have propagated,
  unfixed, into `rink_map.md` and `on_ice_communication.md` — both
  corrected to match. Full account:
  [`../reviews/principle7_fallback_and_hc_precision_2026-09-17.md`](../reviews/principle7_fallback_and_hc_precision_2026-09-17.md).
- [x] **DONE, 17 September.** The same Hockey Canada Rule 8.1 imprecision
  was also fixed in `content/hockey-iq/playing_without_the_puck.md` and
  the first of two mentions in `content/systems/breakouts.md` (whose
  second mention already stated it fully and correctly, and was the model
  both fixes followed). Independently re-verified against both extractions
  of the primary text — this closes the propagation of the fix across
  every document where it was found stated imprecisely.

### 1B. Two pilot documents and pathways

- [ ] Pilot only `content/getting-started/getting_started.md` and
  `content/foundation/rules_primer.md` in release one. Do not start a
  corpus-wide shortening pass.
- [ ] Put the universal principle/key focus first, followed by a simple summary,
  recognition cues, clear explanation, and one or two worked examples. Put
  non-essential rationale, research history, rule comparison, and technical
  detail behind a clearly labelled deeper section.
- [ ] Keep required safety, medical, age, league, and rule-set conditions in the
  same visible and spoken unit as the instruction. Move only process narration,
  extended provenance, and non-essential detail out of the primary path.
- [ ] Make the primary path understandable without answering questions, clicking
  to reveal answers, or performing an activity. Self-tests, scenarios, drills,
  and practice cards remain optional secondary material.
- [ ] Define metadata before populating it. Release one classifies only the two
  pilots and principles index; all other documents remain explicitly
  unclassified. Separate reader audience, skill level, age applicability, league
  applicability, contact scope, supervision, parent involvement, and content
  type. Each safety-bearing field has owner, reviewer, status, evidence, and
  revalidation date.
- [ ] Support the full first-ten-years audience: U10 player/parent, older youth,
  teenage beginner, adult beginner, adult recreational player, coach, and
  experienced reference reader. U10 is not synonymous with beginner or safe.
- [ ] Define stable pathway IDs, ordered items, prerequisites, URL/deep-link
  format, no-JavaScript fallback, return-to-catalogue behaviour, search ranking,
  keyboard behaviour, and the complete-reference fallback.
- [ ] Add and test homepage entry points for U10/player-parent, adult beginner,
  adult recreational detail, changing position, watch-and-learn, Core Principles,
  and complete reference. Keep the catalogue discoverable.

### 1C. Low-effort acceptance budget

- [ ] Measure HTML and audio separately. Unless a documented safety requirement
  prevents it, target no more than 600 primary-path words, five minutes of
  primary-path audio, five primary-path headings, three homepage clicks, and one
  viewport or 200 words before the first actionable instruction.
- [ ] Count required warnings and applicability conditions in the budget; never
  remove them to meet the target. Record exceptions and reasons.
- [ ] Run the same task script with at least one U10 player/parent pair, one older
  youth or teenage-beginner reviewer, one adult beginner, one adult-rec player,
  one experienced reference reader, and one coach. Label proxies as proxies.
- [ ] Tasks: find first three actions without search; explain one principle and
  recognition cue from the key-focus/summary layer; find deeper technical detail
  and a rule/system qualification; listen to the opening and identify the same
  principle and required safety/legal conditions; apply one principle to a novel
  reviewer-only situation.
- [ ] Record expected answers, prompts, time limits, outcomes, unsafe readings,
  and unresolved issues. Pass only when each stratum completes the first two
  tasks with at most one prompt, reaches deeper detail, and makes no unsafe
  interpretation.

**Gate:** the principles index, matrix, metadata, two pilots, routes, and task
results receive a go/no-go review before any later content family is opened.

## Workstream 1D: principles decisions the coordinator owes

**Owner:** coordinator, with the reviewers named. **Evidence:** round 78's agent
reports; `content/foundation/core_principles.md`.

- [ ] ⚠️ **Decide on an eighth principle: *"stay on the defensive side of the
  puck."*** It appears in **five** content documents, is called *"the universal
  rule"* by `defender.md` and *"The Organising Idea"* by `defending_the_rush.md`,
  and is #2 in `defensive_zone_coverage.md`'s own list. It was rejected once —
  but only as a `Rule:` **label** (it is a coaching maxim, not a rulebook rule),
  **which is not a reason to keep it out of a principles index.** ⚠️ An eighth
  principle changes the index's opening sentence, its Key focus layer and its
  takeaway numbering. **Acceptance:** `rules-verifier`, `content-reviewer`,
  `facts-reviewer` and `safety-reviewer` clear it, or it goes to the rejected log
  with its reason.
- [x] **FIXED, 17 September — and found to run deeper than this row states.**
  A `core_principles.md` self-audit (part of the matrix's foundation batch)
  found the timing mismatch is not confined to what a future `goaltender.md`
  link would say — `core_principles.md` **itself** states Principle 4 as an
  unqualified universal claim in THREE places (Key focus, the Principle 4
  body, Key Takeaway 5) and never mentions a goaltender anywhere. Fixed in
  all three layers, citing `goaltender.md`'s own already-verified wording
  ("track the puck all the way into the pad, the glove, the chest"). Gates
  clean (`check_links`, `check_facts` — 5,621 facts, unchanged). **Under
  independent `content-reviewer` check before commit, per the standing rule
  against self-certifying a repair** — see
  [`../reviews/principle_matrix_tranche2_2026-09-17.md`](../reviews/principle_matrix_tranche2_2026-09-17.md).
- [x] **DECIDED, 17 September — real collision, low severity, rename needed.**
  Verified: `defensive_zone_coverage.md:67`'s `## The Universal Principles`
  heading sits directly above a `​```facts` block of seven DZ-specific facts
  (Priority/Position/Key/Technique/Action/Rule×3) — content that is correct and
  unrelated to `core_principles.md`'s seven cross-scenario principles, but
  **the heading text itself claims the identical name.** A reader or a listener
  could reasonably believe this section IS the corpus's principles index, or
  that the two are meant to align. **Nothing factual is wrong; the heading
  needs renaming** (e.g. to something like *"What Holds Regardless of System"*)
  so the two concepts stop sharing a name. **Routed as a single-line heading
  edit for whoever next holds this file — not done here, since renaming inside
  a live document is a content edit outside the coordinator's role.**
- [x] **DECIDED, 17 September — `rink_map.md` gets NO framing principle.**
  Confirmed: Principle 5's whole evidentiary basis is `risk_management.md`'s
  **hedged, explicitly-coaching-reasoning** five-area ranking (*"a convention
  rather than a rule"*, one of five areas has a single tracked dataset point,
  the rest are reasoned, not measured). `rink_map.md`'s job is to **settle what
  a region IS** — definitional, not evaluative. Framing a definitional document
  with a hedged ranking inverts which one is the authority. **Recorded as
  the acceptance condition itself asked: "none, and why."** No further action
  needed on this row.
- [x] **CLOSED, 17 September.** A full `source-verifier` pass refetched all
  14 sources cited across the seven principles — NHL, IIHF, USA Hockey,
  Hockey Canada, CARHA, four IHUK Rules of Competition documents, two USA
  Hockey safety guides, and the Berg et al. 2025 and Iaboni et al. 2025
  studies. **All 14 HOLD**, every quoted string located verbatim, every
  number checked precisely (sample sizes, percentages, confidence intervals).
  ⚠️ **One genuine defect found and fixed: a quotation was credited to the
  WRONG SIBLING DOCUMENT.** `core_principles.md` quoted *"a documentation
  convention, not a claim about what most teams play"* as `forechecking_systems.md`'s
  own words; the phrase is verbatim in `breakouts.md:604`, not
  `forechecking_systems.md` (which states the same underlying fact in
  different words, at `:249`). **Right fact, wrong named source for that
  exact wording** — fixed by moving the quotation to its actual source while
  still crediting `forechecking_systems.md` for the same underlying claim.
  All nine other cross-referenced sibling sections independently re-read and
  confirmed unchanged since 14 September.

## Workstream 1K: readability release one, restarted after a three-day gap

⚠️⚠️ **THE PRIORITY-ORDER VIOLATION THIS ROW EXISTS TO CORRECT.** This plan's own
"Priority order" states *"Readability, principles, and dual-audience release
one"* as **priority 1**, and that *"no lower workstream may delay the first
workstream unless it is a safety or release gate."* **Nothing in `core_principles.md`,
the metadata manifest, or the pilot documents has changed since 14 September**
(verified by `git log` on all three) — three full days and roughly a dozen
commits went to Workstream 2's rules-accuracy and quote-drift residuals
instead. ⚠️ **Read charitably, most of that work qualifies as the "safety or
rules residuals" exception (priority 2) — a flattened cross-book parallel or a
drifted quotation is a genuine safety-adjacent defect. Read uncharitably, the
exception swallowed the rule for three days running, and nobody flagged it
until asked.** **Restored to active status 17 September, on the user's direct
instruction.**

**Owner:** coordinator for shared site/data; dispatched agents for reviewer
work. **Design specification:** `READABILITY_AND_DUAL_AUDIENCE.md`.

- [x] **Three of the six coordinator-owed decisions from Workstream 1D
  resolved directly, 17 September** — see that workstream for the full
  reasoning: `defensive_zone_coverage.md`'s naming collision (real, low
  severity, routed as a heading rename), `rink_map.md`'s framing principle
  (decided: none, and why), and the `goaltender.md`/principle-4 timing
  mismatch (confirmed real; not yet a live bug since no document currently
  links a specific numbered principle to itself — recorded as a hard
  constraint for whoever builds the matrix below).
- [x] **CLOSED — see Workstream 1D for the full result.** All 14 citations
  hold; one genuine misattribution found and fixed (a quotation credited to
  `forechecking_systems.md` that was actually `breakouts.md`'s own wording).
- [x] **DECIDED — REJECT, 17 September.** Two INDEPENDENT `content-reviewer`
  passes, run on different days by different agents, converged on the same
  verdict with overlapping but independently-derived reasoning. Full decision,
  the rejected-candidate log entry, and what a future qualified version would
  need are recorded in Workstream 1G below — this row is the dispatch record,
  that one is the decision.
- [x] **ADVANCED, 17 September — 25/39 documents now matrixed, up from 10.**
  Three more parallel batches (7 systems, 6 off-the-ice + reading-diagrams,
  4 foundation-reference) extended the first tranche's 10-document matrix,
  re-confirmed its headline principle-6 denial-direction finding intact
  post-fix, verified a flagged cross-document rules-propagation risk turned
  out NOT to exist (all four suspect documents already scope
  checking-from-behind correctly), and found a second, deeper instance of
  the known `goaltender.md`/principle-4 timing mismatch — this time inside
  `core_principles.md` itself, now fixed (see the row above). Two
  coordinator scope decisions made and recorded: Principle 1 covers on-ice
  *positional/structural* choices specifically, not any coaching judgement
  call; a document may carry more than one framing principle where the
  matrix shows a genuine multi-principle fit (`mental_game.md`,
  `practice_and_development.md`, `on_ice_communication.md`), rather than
  forcing a single frame. Full account:
  [`../reviews/principle_matrix_tranche2_2026-09-17.md`](../reviews/principle_matrix_tranche2_2026-09-17.md).
  **14 documents remain unmatrixed: all 5 hockey-iq, all 5 technique,
  `defending_the_rush.md`, and the two pilots** (spot-checked against the
  rollout's specific defect shapes, not yet run through the full
  seven-principle matrix).
- [x] **DONE, 17 September — full 39/39 matrix coverage reached.** Three
  more parallel batches (5 hockey-iq, 5 technique, plus
  `defending_the_rush.md` and a full matrix on both pilots) closed the
  remaining 14 documents. **The transfer-audit acceptance condition — "at
  least three contexts, including a position, a system, and a
  technique/Hockey-IQ document" — is now fully met.** Full account,
  including two new Major findings (`getting_started.md`'s beginner
  pointers for Principles 3/4/7 lead to content that isn't there, worst for
  the Principle 7 boards-safety pointer explicitly labelled "before a first
  session"; `defending_the_rush.md` is the corpus's richest Principle-6
  evidence and isn't cited, and has a Principle-7 gap flagged for
  `safety-reviewer` judgement) and one confirmed-clean result
  (`body_contact_and_battles.md` already bidirectionally owns Principles 2
  and 7 — not a linking candidate, already the linked document):
  [`../reviews/principle_matrix_complete_2026-09-17.md`](../reviews/principle_matrix_complete_2026-09-17.md).
- [x] **DONE, 17 September.** `getting_started.md` now carries a P7
  boards-safety passage (Section 7, Common Mistakes, Key Takeaways) and a
  combined P3/P4 honest-pointer passage (Section 9). A `safety-reviewer`
  pass found one Critical (Key Takeaways had dropped the head/chin
  instruction and the non-checking-scope clause the other two layers
  carried — fixed) and, separately, one Major not fixed here on the
  reviewer's own recommendation: the document still doesn't teach "go in on
  an angle" (the safest of the three boards-contact cases) or "not on the
  point of your shoulder," mitigated by the existing forward pointer to
  `body_contact_and_battles.md#6`. A content review found the new P3/P4
  passage accurate and well-modelled on `switching_positions.md:53` but
  flagged, as a gap rather than a defect, that it reaches no summary layer
  (Common Mistakes/Key Takeaways) the way the P7 passage does. Full account:
  [`../reviews/matrix_followup_fixes_2026-09-17.md`](../reviews/matrix_followup_fixes_2026-09-17.md).
- [x] **DONE, 17 September — both residuals closed.** A `safety-reviewer`
  judgement call recommended filling, not leaving as a pointer. `getting_started.md`
  now states angle-evasion first (ahead of the brace posture, per the
  source documents' own ordering) and the explicit shoulder-point
  prohibition, in all three layers, and gained a Common Mistakes echo of the
  P3/P4 passage. Reviewed clean (no Critical/Major); one Minor fixed (the
  new scanning bullet had split a contiguous run of safety-critical Common
  Mistakes bullets — reordered). Full account:
  [`../reviews/boards_safety_gaps_closed_2026-09-17.md`](../reviews/boards_safety_gaps_closed_2026-09-17.md).
- [x] **DONE, 17 September.** `core_principles.md` §6 now cites
  `defending_the_rush.md`'s 2-on-1 "take away the pass, give up the shot"
  mechanism alongside `forechecking_systems.md` and `special_teams.md`,
  quoted verbatim and preserving the source's own hedge (a coaching choice
  with a named alternative). `defending_the_rush.md`'s Related header now
  also links `core_principles.md` and `body_contact_and_battles.md` (the
  latter justified by four existing body citations). Reviewed clean — no
  Critical or Major. Full account in the same review record as above.
- [x] **DONE, 17 September.** A `safety-reviewer` judgement call recommended
  a light fill, not the full technique: `defending_the_rush.md` now names
  the retrieval hazard its own "force dump-ins" tactic creates, in both the
  body prose (where it recommends the tactic) and the section's `facts`
  block (so the hazard survives being heard in the audio-only facts layer,
  which the reviewer separately flagged as still missing it), pointing to
  `body_contact_and_battles.md#6` rather than restating the technique.
  Reviewed clean. Same review record as above.
  ⚠️ **The plan's own acceptance condition for the WIDER release (Workstream
  1C's task-based usability testing) names real human participants — "at
  least one U10 player/parent pair," an older-youth reviewer, an adult
  beginner, an adult-rec player, a reference reader, a coach.** Agent proxies
  can draft the matrix and flag transfer failures — which they just did,
  productively — **but cannot substitute for the human task-testing that gate
  requires**, and a proxy result must be labelled as a proxy. That remains the
  honest limit of what this session can close on its own.
- [ ] Metadata classification remains at 3 of 39 documents (the two pilots
  plus the principles index); 36 explicitly `unclassified`, correctly, per
  the plan's own rule against inferring a safety-relevant label. Expanding
  this is Workstream 1B/1C-scale work, gated behind the go/no-go this
  workstream has not yet reached.
- [x] **DONE, 17 September — every document in the corpus now has a `## Key
  focus` section.** The user asked directly for larger, faster parallel
  progress; the 36 remaining documents (2 pilots + the principles index
  already had one) were rolled out in one wave — 8 parallel authoring agents,
  then 3 parallel review agents (safety, rules, house style), all covering
  the same 36 documents. Full account, including a process failure caught
  mid-wave (an authoring task was first dispatched to the read-only
  `content-reviewer` role, which two of eight agents correctly refused; the
  other six proceeded via `Bash` regardless, creating a real collision risk
  with fresh redispatches that was caught and resolved before any file was
  corrupted) and every review finding:
  [`../reviews/readability_keyfocus_rollout_2026-09-17.md`](../reviews/readability_keyfocus_rollout_2026-09-17.md).
  **Two genuine safety gaps found and fixed** (a dropped helmet-stays-on
  exception; a dropped shot-blocking head/hands instruction), **four rules
  overstatements found and fixed** (all the same flattened cross-book-
  parallel defect class as Workstream 2M — a checking-from-behind ejection
  claim wrongly generalised in two separate documents, an NHL-specific
  penalty rule stated without its scope, and one rule number applied to two
  books when only one of them uses it), **one Major house-style violation
  fixed** (five documents narrating their own word-count budget to the
  reader — non-negotiable 6), and two minor hedge/clarity fixes. All 39
  documents confirmed to carry exactly one Key focus section; full gate
  suite clean. **Not done and not claimable by this method:** the release's
  actual acceptance test is task-based usability testing with real human
  participants across six audience strata — nothing here substitutes for
  that, and the record says so plainly.

## Workstream 1E: safety defects in text written 16 September — CLOSED

Both Majors and all four minors were repaired and the repairs reviewed. The record
is [`../reviews/round_78_wave1_2026-09-16.md`](../reviews/round_78_wave1_2026-09-16.md).

⚠️ **Keep the lesson, not the rows:** both Majors were in text written that same
day, both ran in the **permissive** direction, and **both authors had reported
their own work as sound.** A `safety-reviewer` and a `content-reviewer` running
independently found the same two, and each found more the other missed.

⚠️ **One of them was refuted by a fetch, in the direction this corpus's conventions
least expect.** The *"given to you to keep"* premise was reported as unsourced;
Learn to Play's **Equipment** page says *"All the equipment provided will be for
participants to keep upon completion of the program."* **Nobody had fetched that
page — the corpus had only ever cited the About page.** The proposed retraction
would have been over-broad. **Newness remains unsourced and is now labelled.**

⚠️ **And the repair found a defect neither reviewer did:** Learn to Play's own
equipment page recommends buying *"a mouth guard, neck guard and athletic
supporter"*, none of which is in its eleven-item kit list — so *"head-to-toe"* is
not everything, and *"you may need to buy nothing at all"* was wrong **in a
document whose Key focus mandates a neck guard for every British player.**

## Workstream 1F: `uk_rules.md` and `core_principles.md` repairs — CLOSED

Recorded in [`../reviews/round_78_wave1_2026-09-16.md`](../reviews/round_78_wave1_2026-09-16.md).

⚠️ **Two lessons worth more than the rows:**

**A NOTE CAN BE THE DEFECT.** A `## Notes on verification` sentence read *"Only USA
Hockey's Casebook attaches a fit test — the one finger."* **It is false — all three
British documents print the one finger themselves, in the same parenthesis as the
measurement** — and it is what produced a reviewer's finding against three
sentences that were correct. **A note that misleads a reviewer into proposing a
change to correct text is itself the defect.** The note was repaired; the body was
not, because the body was right.

**The near-duplicate diff came back clean.** `core_principles.md` §2 and
`uk_rules.md`'s U12/U10 section were written by **different agents on the same
day** and compared clause by clause across eight overlapping claims: **no
contradiction in either layer.** Two asymmetries were found and closed — one
document's exclusion list omitted a competition the same document names three
times elsewhere.

## Workstream 1G: two coordinator decisions the reviews forced

- [x] ⚠️ **CLOSED, 17 September — TWO independent `content-reviewer` verdicts
  now agree: DO NOT PROMOTE *"stay on the defensive side of the puck"* as a
  standalone ninth-or-eighth core principle.** First census: eleven sites in
  five documents (exact phrase). **The second pass re-derived this independently
  and found it wider**: the underlying idea, in varied wording ("goal side",
  "net-side", "between them and your net"), appears at **eleven-plus sites
  across NINE documents** — the exact-phrase count undercounts the idea's reach.
  Both passes converge on the same structural reasons: (1) **it fails the
  existing seven's own test** — every one answers *"A realistic alternative"*
  honestly (four say *"None"*), and this one has REAL, NAMED, CORPUS-TAUGHT
  alternatives: a defenceman pinching at the offensive blue line, F1 pressing
  deep in an aggressive 2-1-2, a forward activating into the rush — all
  DELIBERATELY on the wrong side of the puck, and `defending_the_rush.md`'s own
  "five causes of a rush" section already prices the cost of doing so; (2) **the
  corpus disagrees with itself about its own register** — *"the universal
  rule"* (unhedged, and the ONLY unhedged "universal rule" anywhere in
  `content/` — the other two occurrences, in `body_contact_and_battles.md`, are
  explicit DENIALS: *"but it is not a universal rule"*), *"The Organising
  Idea"* of one document, *"the instinct to build"* in a third; (3) it is an
  unsourced superlative, though the second pass notes this is less damning than
  it sounds since the underlying geometry is definitionally true, not an
  empirical claim — **the problem is the word "universal," not the geometry**;
  (4) **the second pass's TRANSFER AUDIT found it genuinely FAILS to transfer**
  to the goaltending position at all (goaltending is built on angle/depth, not
  puck-relative positioning) and inverts on purpose during any attacking-state
  system (pinching, forechecking) — two boundaries the "universal"/"Organising
  Idea" framing never states.
  **For the rejected-candidate log:** REJECT as standalone. **Recommended
  instead:** fold as a SECOND WORKED EXAMPLE into principle 1 (alongside the
  existing "stay high" example), explicitly contrasting the defending state
  against the forechecking/pinching state — this preserves the idea's real
  value without a status the corpus's own documents don't agree it has.
  **If a future pass promotes a qualified version anyway, it needs:** a scope
  sentence limited to the DEFENDING state only (tied to principle 3's four
  off-puck states); the realistic alternative named in full, citing
  `forechecking_systems.md`'s "When to pinch" and `defending_the_rush.md`'s
  "five causes of a rush"; an explicit statement it governs which chance is
  conceded, not where feet stand (reusing `defensive_zone_coverage.md`'s
  already-correct language); an explicit GOALTENDING EXCLUSION; and an
  "evidence and its limits" note stating plainly this is definitional, not
  measured, matching principles 2 and 7's honesty pattern for non-measured
  claims. **`defender.md`'s unhedged "universal rule" wording is tracked
  separately as a residual in Workstream 2F, regardless of this decision.**
- [x] **DECIDED, 17 September — both divergences resolved, neither needs a
  content change.** Re-checked directly against the current files: **the
  first divergence no longer exists.** `body_contact_and_battles.md` no
  longer puts its principle as "a bold lead inside `## Overview`" — it now
  has its own top-level heading (`## Which book you are under decides what
  is legal — and the boards do not care`, line 13) immediately before `##
  Key focus`, the same structural position `getting_started.md`'s opening
  heading occupies. Both documents now state their governing principle(s)
  as a heading-led section ahead of Key focus; `getting_started.md` simply
  has one further heading (`## How to tell`) between Key focus and Overview
  that `body_contact_and_battles.md` doesn't need, which is not the
  divergence this row was raised about. **The second divergence was
  independently investigated today** by the principle-matrix stragglers
  batch, which read `getting_started.md`'s opening section in full and
  confirmed it makes no false ownership pointer, correctly imports
  Principle 2 beneath it where their scopes actually meet, and is doing
  real, distinct work no principle covers (an administrative/organisational
  claim about national vs. local authority, not an on-ice behaviour) —
  recommending it stay as a second, non-numbered framing idea rather than
  be forced into the seven or removed. **Decision: leave both as they are.**
  One residual, not a defect: this row's own description of
  `body_contact_and_battles.md`'s structure had gone stale relative to the
  file — a reminder that a plan row describing document structure needs
  re-verification against the current file before being acted on, not
  carried forward from when it was written.

## Workstream 1H: the critical the split created — CLOSED

⚠️⚠️ **THE TERMINATING RULE EARNED ITS PLACE THREE TIMES IN ONE DAY.**
`review_process.md`: *"A repair that moves, merges, splits or renumbers text…
does void it, and needs a fresh pass."*

Three times, a repair in this corpus **split a section** and the split created a
new defect that the repair's own author did not see:

1. A trapezoid split **severed a permission from two of its three restrictions** —
   26 and 29 spoken sentences apart, across a heading.
2. An icing split **dropped the count condition governing an absolute** —
   *"never icing"* fails at 4-on-4 with your own penalty running.
3. A freezing split was made to fix a critical where **the body carried a rule and
   the extraction layer carried neither half of it.**

**All three were found by a fresh pass, and all three are repaired.** The record
is [`../reviews/round_79_adverse_authority_2026-09-16.md`](../reviews/round_79_adverse_authority_2026-09-16.md).

⚠️ **Keep the shape, not the rows:** every one was **a permission separated from
its restriction, or an absolute separated from its condition.** That is what a
split does to a facts block, and it is invisible to every checker — `check_facts`
passes on a block at exactly the cap.

## Workstream 1B: rollout after the pilot

This is the process for extending the approved model to the rest of the corpus.
Do not dispatch the whole corpus from one broad brief, and do not treat the
pilot's wording as a string to paste. The coordinator opens one wave only after
the previous wave's review record gives a go decision.

**Owner:** coordinator for census, partition, shared tools, and records; one
agent per disjoint content file set. **Dependency:** Workstream 1 go/no-go.

### Rollout preparation

- [ ] Freeze the accepted principle taxonomy, page-layer headings, caption
  standard, metadata schema, audience labels, and audio contract from release one.
  Changes to these are a new design decision, not incidental follow-up edits.
- [ ] Build the complete principle-to-corpus matrix for all current documents and
  assign every document/section to exactly one wave. Include the current derived
  document count; do not reuse historical 38-document figures.
- [ ] Rank sections by learner value and risk: universal principles and beginner
  foundations first; safety/rules next; positions and systems next; technique and
  Hockey-IQ next; off-ice/reference material last. A long page is a review
  candidate, not automatically a deletion target.
- [ ] Before dispatch, census each assigned file for key focus/overview, summary,
  recognition cues, worked examples, facts blocks, diagrams, captions, sources,
  audio references, and repeated claims. Write the census to a unique run file.
- [ ] Give each agent only its named files and the exact defects/constraints to
  check. Require it to refute the brief, read surrounding prose, and re-derive
  claims from primary sources before editing.

### Content-family waves

- [ ] Wave A: foundation, glossary, and communication pages. Establish shared
  vocabulary, principles, rule scope, and beginner orientation before tactical
  pages depend on them.
- [ ] Wave B: positions, with Center/Winger/Defender kept as a comparable set and
  Goaltender handled separately. Apply principles to each role without copying
  system-specific assignments as universal rules.
- [ ] Wave C: systems and situations. For every system, state the principle,
  recognition cue, player action, why it works, and the realistic alternative;
  show how the principle changes when the team uses another system.
- [ ] Wave D: technique and Hockey-IQ. Connect mechanics and decision models to
  the principles; use simple execution cues before research and technical depth.
- [ ] Wave E: getting-started and off-the-ice material, including equipment,
  practice, conditioning, mental game, culture, and watching hockey. Keep health,
  age, supervision, and evidence limits intact while making the immediate action
  easy to find.
- [ ] Run a separate diagram-source wave only when a diagram's host is in the
  current content wave. One agent owns one diagram module; generated output is
  coordinator-owned and builds are serialized.

### Per-wave completion

- [ ] For each changed section, write the key focus first, then simple summary,
  recognition cues, explanation, worked example, team/rule variation, and deeper
  detail. Do not require quizzes, self-tests, scenarios, or practice activities
  to understand the primary path.
- [ ] Complete the principle matrix row and propagation matrix for every changed
  principle: body, facts, Common Mistakes, Key Takeaways, diagrams/captions,
  sibling documents, source trailer, and spoken output. Mark `not applicable`
  with a reason rather than leaving a blank.
- [ ] Audit diagram value only for diagrams touched by the wave: learner question,
  unique visual contribution, mental-model position, caption, `describe`, all
  hosts, mobile/accessibility output, and audio effect. Defer the full `rink_map`
  value audit until its own wave.
- [ ] Measure before/after primary-path words, minutes, headings, clicks,
  first-action distance, caption lengths, and per-section speech chunks. Record
  retained safety/rule detail and any budget exception.
- [ ] Run fresh rules/source, content, facts, safety, and site reviews for the
  wave. The next wave cannot start while a required review or owner decision is
  unresolved.

### Rollout stop/go criteria

- [ ] Stop the rollout if a principle needs a new scope class, an agent finds a
  contradiction between siblings, a safety/rule qualification cannot fit the
  primary spoken unit, a caption relies on a borrowed host, or the measured
  low-effort budget fails without a documented reason.
- [ ] Stop if a repair changes a claim outside the finding, moves/renumbers
  linked material, changes a shared renderer, or changes a generated diagram
  without a fresh ownership and review decision.
- [ ] Continue only when the wave's review record contains the matrix, measurements,
  changed-file list, reviewer coverage, staged-tree confirmation, and “what this
  method could not have found.”
- [ ] After the final content-family wave, run a corpus-wide cross-document read
  of principles, summaries, facts, captions, and audio before declaring the
  rollout complete. This is a new review round, not an assumption that clean
  individual waves add up to a clean corpus.

## Workstream 2: safety and rules residuals

**Owner:** coordinator assigns disjoint files; `rules-verifier` and
`safety-reviewer` are mandatory. **Dependency:** Workstream 0; may run alongside
Workstream 1 only on disjoint files.

- [x] **STALE, verified closed 17 September.** Already resolved by commits
  `862c0dd` and `8af85e4` before this session, with the settled wording now
  confirmed live (e.g. `special_teams.md:640`'s expiry/immediate-substitute/
  bench-minor treatment). Independently confirmed on record in
  `project/reviews/round_78_wave1_2026-09-16.md`, which reports a dedicated
  `rules-verifier` end-to-end read of NHL 81.6/20.3, IIHF 81.6, USA Hockey
  624 and Hockey Canada 6.7/CARHA 65 already closing this row's substance.
- [x] **STALE, verified closed 17 September.** Same round-78 pass: *"tested
  seven exclusivity and silence claims and all seven held."* This is
  exactly what this row asked for. Pointer:
  `project/reviews/round_78_wave1_2026-09-16.md`.
- [x] **STALE, verified closed 17 September.** Resolved by commit `d0b884e`,
  which added `uk_rules.md`'s dedicated `§U12 is a different game, and
  neither rule book says so` section (icing, offside, running clock, and
  line-change/penalty administration all covered), cross-linked from the
  Overview, Common Mistakes, a Key Takeaway, and the Sources trailer — not
  an orphaned note. Propagated outward to `core_principles.md`,
  `rink_map.md`, `rules_primer.md`, `getting_started.md`, `special_teams.md`
  and `body_contact_and_battles.md` (sampled, not exhaustively re-read).
- [ ] **PARTIALLY RESOLVED, verified 17 September.** `defender.md`'s
  beer-league/IIHF wording is fixed (commit `582a37b`) — CARHA is now named
  as a fifth book, with the inference-from-absent-trapezoid risk explicitly
  disclaimed ("'Beer league' is not a rule set, so ask yours which book it
  runs, by name"). **Still open:** `goaltender.md`'s own trapezoid section
  names only USA Hockey and Hockey Canada's freeze restriction, with no
  CARHA mention anywhere in that section — this is Workstream 2E's
  already-recorded, deliberately-deferred gap (that section's facts block
  sits at the corpus's 11-fact hard cap with minimal character headroom, so
  the fix needs a block restructure, not a bare addition). Not fixed here;
  tracked at Workstream 2E.
- [ ] Review the USA Hockey goalkeeper-area interaction, faceoff second-violation
  wording, charging/contact classifications, and any other penalty-bearing rows
  before propagation.
- [ ] Review the remaining reader-facing rule/safety caption residuals before any
  caption shortening: the forechecking caption prohibition blocks, British/IHUK
  applicability, USA Hockey 608(b)'s disjunctive trigger, protective-screen
  ownership, and rule-to-picture correspondence. Name every affected content and
  diagram module, read every borrowing host, and require primary-source,
  `rules-verifier`, `safety-reviewer`, and caption/`describe` clearance.
- [ ] For every changed rule claim, verify the parent rule as well as any Note,
  Interpretation, Situation, Casebook, or glossary entry. A quotation is not a
  verification until its parent has been read.
- [ ] Recheck standalone facts, headings, Common Mistakes, Key Takeaways, and
  borrowed captions as separate spoken units. Preserve material uncertainty;
  do not replace it with a stronger mechanism claim merely to avoid a disclosure.

**Gate:** every changed rules/contact/penalty statement has primary-source
evidence, named scope, propagation matrix, `rules-verifier` clearance, and
`safety-reviewer` clearance. Unsettled questions remain explicitly labelled.

## Workstream 2B: the disclosure backlog

**Owner:** coordinator assigns disjoint files. **Evidence:**
[`../reviews/worklists_2026-09-16.md`](../reviews/worklists_2026-09-16.md).
**This is a standing backlog, not a wave**, and nothing here proposes to clear it
in one round.

⚠️ **Non-negotiable 4's *"never strip an honest disclosure"* had quietly been read
as *"never test one."*** Correcting a false disclosure is not stripping it — it is
replacing an absence claim with the source. **Never remove a true one, and never
make the corpus look more confident than it is.**

## ⚠️⚠️ THE "EVERY ONE HAS BEEN FALSE" PREMISE BROKE ON 16 SEPTEMBER. IT WAS THE HEADLINE FINDING OF THE ROUND, AND IT CHANGES HOW THIS BACKLOG IS WORKED.

**This section previously read: *"Every disclosure tested since systematic testing
began has been false, and every one ran the same direction."*** ⚠️ **That was
carried into five briefs as settled fact, in bold, twice, and it is no longer
true.** An agent tested **18 facts-layer claims against the primary text.
SEVENTEEN HELD.** Most held verbatim and positionally.

⚠️ **Two held ONLY because the agent used the technique the trap defeats:**
`crt6.pdf` held **only after `pdftoppm` rendered it** — the `.txt` is page
furniture; and the skate-definition and IIHF Situation-10.26 negatives held **only
after the sentence was read POSITIONALLY in each edition** rather than by trusting
a zero. **A worse method would have reported three false disclosures that are not
false.**

**So the class is NOT uniformly rotten.** ⚠️ **The corpus's RULEBOOK negatives —
the bulk of the facts layer — are in good shape**, because a rulebook is a closed,
searchable text.

⚠️⚠️ **WHAT REMAINS ROTTEN IS A SUBSET WITH A NAMEABLE SHAPE: a disclosure whose
question has since been ANSWERED ELSEWHERE IN THIS REPOSITORY, and nobody
propagated to it.** The one that broke was **not found by attacking a search.** It
was found by **ROUTING** — `sources/README.md` had already written the answer down,
under a heading saying so in terms. ⚠️ **The method that finds the next one is not a
better grep. It is reading `sources/README.md` and the sibling documents BEFORE
believing the sentence.**

⚠️ **And the agent flagged the limit of its own pass: it did that routing check on
ONE claim, because the claim named British hockey. It did NOT do it systematically
for the other seventeen.** **A second README section quietly answering one of them
would not have been seen.**

- [x] **Test the facts-layer disclosures — 18 of ~70 tested 16 September.** 17
  HOLDS, 1 FALSE at two sites, 0 could-not-establish. **Routed to the file owners.**
- [ ] ⚠️ **Re-test the seventeen HOLDS for the ROUTING shape only.** They were
  attacked as searches and survived; **none was checked against `sources/README.md`
  and the sibling documents**, which is the one method that has ever caught this
  class. **Acceptance:** each HOLDS is confirmed against the README and its
  siblings, or reclassified. ⚠️ **Cheap, and it is where the next false one is.**
- [x] **THE `no-X-exists` FAMILY — TESTED 16 September, with search.** 11 of the
  ~35 tested groups (covering roughly 23 individual flagged lines via testing a
  repeated pattern once for every instance it covers), **ALL ELEVEN HELD, ZERO
  FALSE.** ⚠️ **Read the method before trusting the verdicts: for several the
  agent leaned on the document's OWN Sources trailer as strong prior evidence
  without independently re-fetching the underlying study itself** (e.g.
  `game_management.md:1037`'s four cited studies on penalty type/rate — the
  strongest-evidenced disclosure in the set, confirmed but not re-verified from
  scratch). **A single search per claim, even across 2-3 query variants, is not
  proof of absence** — the style guide's caution about a single-engine HELD
  applies doubly to a single-TOOL-CALL hold.
  ⚠️ **One genuine near-miss, flagged for the owning documents, NOT a repair:**
  `neutral_zone_systems.md:114` and `defending_the_rush.md:767` disclaim that
  *"no public data classifies odd-man rushes by the cause"* (the five named
  coaching mistakes — a blue-line turn-back, an E-W pass, a low pinch, etc).
  **Real analytics work classifies rush GOALS by ZONE OF ORIGIN** (defensive-zone
  exit vs. neutral-zone turnover vs. counter-attack) — a coarser grain than the
  corpus's claim, and the agent could not trace the headline percentages to a
  named author, publication or methodology that would clear this corpus's own
  evidentiary bar on a follow-up search. **Close enough that a careless future
  restatement could conflate the two** — worth a direct look by whoever next
  touches those two files, not urgent.
  ⚠️ **12+ of the ~35 remain genuinely UNTESTED** — deliberately not attempted
  under "depth beats coverage," and the agent said explicitly: **treat them as
  unknown, not as cleared by resemblance to a tested neighbour.** Untested:
  `breakouts.md:211,706,767`, `zone_entries.md:623`,
  `on_ice_communication.md:128`, `goaltender.md:723`,
  `puck_handling.md:49,112,113`, `skating.md:831`, `game_management.md:396`.
  **No file needs a repair routed — every tested disclosure held.**
- [ ] ⚠️ **Selection bias, stated so it is not forgotten: 17 of 18 rulebook
  disclosures holding, and 11 of 11 literature disclosures holding, does NOT
  mean the class is clean.** It means **the ones tested — offline against a
  rulebook, or via web search — were the ones checked.** 12+ of the literature
  disclosures remain genuinely untested, and every disclosure outside the facts
  layer (538 body-layer, 27 unvoiced) is untouched by either pass. **See the
  style guide's *"SIX OF FIFTEEN IS NOT A BASE RATE"*.**
- [x] **`content/technique/shooting.md:449` — TESTED 16 September, HOLDS.**
  The claim that no source this document has searched prices a screened/blind
  shot's value against a sighted one — a web search found only that PUBLIC
  expected-goals models lack a screen/sightline feature at all, corroborating
  rather than refuting the disclosure. `:566` remains untested — it was not in
  the set the later agent worked from.
- [ ] ⚠️ **A completeness gap found while testing, NOT a false disclosure.**
  `forechecking_systems.md:207` and `offensive_zone_play.md:810` say the books
  *"do not count [charging strides] alike — Hockey Canada 7.4 two or more, USA
  Hockey 607 more than two, IIHF 42.1 'multiple'; the NHL sets no count"*. **CARHA
  Rule 52 (Note) sets one too:** *"If more than two steps or strides are taken, it
  shall be considered a charge"*. **The line claims no exhaustiveness, so it is not
  an error** — but `switching_positions.md:293` treats the set as *"the five
  books"*, and ⚠️ **CARHA is the adult rec book a reader is most likely to be
  under.** **Acceptance:** CARHA named, or the asymmetry recorded as deliberate.
- [ ] ⚠️ **Two false-falsification traps recorded at `sources/README.md` lines 803
  and 997 — `CE mark` matching *"i-ce mark-ings"*, and the nonsense-URL negative
  control. Name them in the next brief in this class.**
- [ ] ⚠️ **A method rule this round paid for.** An agent's first cross-book sweep
  returned **0 for every book because the path was wrong**, and ⚠️ **the output
  looked exactly like six clean verified negatives.** Only the positive control
  caught it — `goalkeeper` = 0, which is impossible. **Every zero carries a
  control, every time.**
- [ ] ⚠️ Do **not** work the `unchecked` count of 184 as a worklist. It is an
  upper bound: a reviewer who read 58 facts-layer lines classified ~15 as
  genuinely unverifiable where the tool reported 31. The gap is disclosures that
  state the search they ran in wording no pattern anticipated, and there is no
  fixed vocabulary for scoping a claim.

## Workstream 2C: the two bounded reductions in `rules_primer.md`

**Owner:** coordinator assigns. **Evidence:** round 78's `rules_primer.md` agent,
which measured them and declined to do either alone.

⚠️ **That agent's own finding first: it measured duplication of QUOTED STRINGS and
of SECTIONS, and neither can see what actually makes the document long — the same
rule stated four or five times in four or five different sets of words.** It found
136 verbatim quotations appearing more than once, but §10 restates §§1–9 almost
entirely in **paraphrase**, and a paraphrase census needs claim extraction, which
nothing here has. **So the 70.9% citation figure is an upper bound measured one
way, and "nothing safely cuttable" rests on a search that would miss the largest
cut available.**

- [ ] **§10's comparison table: ~3,000–4,000 words with ZERO scope loss**, by
  reducing each cell to *consequence + book + rule number* and deleting only
  operative wording that §§1–9 already quote. ⚠️ **One complete pass over all 23
  rows — a partial pass is the half-done propagation `CLAUDE.md` warns about.**
  Each dropped quotation must be verified present in its owning section **first**.
  Reader-facing only; the table is already dropped from the audio. Needs
  `rules-verifier`.
- [ ] ⚠️ **§4's per-book penalty ladders — where the remaining ~20,000 words are.**
  Could they state the *tier a reader is exposed to* once per foul instead of four
  times? **The agent declined to decide alone, and was right to: this is exactly
  the edit that caps a penalty tier, and `safety-reviewer` has blocked this layer
  before.** Needs `rules-verifier` **and** `safety-reviewer` on the brief itself.
  ⚠️ **Hockey Canada 8.8 slew-footing is a double minor rising to a MATCH penalty;
  USA Hockey 639(b) starts at a MAJOR plus game misconduct; IIHF 52.2 has no
  lesser tier at all. "An ejection in all of them" would be a false cap.**

## Workstream 2D: over-scoped permissions — a class no checker can see

**Owner:** coordinator assigns. **Evidence:** round 78's `special_teams.md` /
`rules_primer.md` agent, which found two of these that **were not in its brief**.

⚠️⚠️ **`check_absolutes.py` scores penalty TIERS and DENIALS. A PERMISSION
over-scoped by age, class or country is invisible to it** — it passed on both
defects below, before and after repair. **Nothing mechanical in this repository
caught them and nothing will catch the next one.**

The two found, both in `rules_primer.md`, both repaired:

- *"get the clear away before the clock runs out **and it is legal wherever you
  play**"* — its own voiced paragraph, **35 lines from the Exception that
  qualifies it.** Below USA Hockey's classification limit there is no exemption
  at all, so that clear comes back for a defensive-zone draw.
- *"still free to ice the puck, **in all five books**"* — the same shape, and
  **bolded**, which is a site a scanning reader stops on.

- [x] **DONE, 17 September — the full census run, at last.** 200 hits found
  corpus-wide (34 banner, correctly excluded; 166 non-banner, all read in
  full context). **165 of 166 were correct** — this corpus is, in the
  census's own words, "unusually careful about jurisdiction/age/league
  scoping." One genuine finding: `equipment.md`'s prominent Key focus
  callout stated Britain's neck-guard penalty as universal ("no warning
  before an immediate 10-minute misconduct"), when the same document's
  own Key Takeaways correctly carves out the Elite League. Fixed to match
  two sibling passages in the same document that already had it right.
  Full account:
  [`../reviews/goaltender_carha_2026-09-17.md`](../reviews/goaltender_carha_2026-09-17.md).
- [x] **DONE, 17 September — same census, covered as item 4.** Offside,
  line-change and penalty-duration claims were swept alongside icing
  (searching broader vocabulary too, not just the five original
  patterns). No further finding beyond the one above — the documents
  sampled already carry correct caveats (e.g. `defending_the_rush.md`:
  "Charging is not two minutes everywhere either").
- [ ] ⚠️ **FOUR IHUK Rules of Competition URLs are cited in `content/` and NONE is
  in `project/verification/link_baseline.tsv`** (812 rows, zero matches for any of
  them). ⚠️ **My earlier row said three — the NIHL 1 & 2 regulation is also
  missing**, found by a `source-verifier` that fetched all four rather than the
  one it was asked about. Every other external URL in both documents is baselined.
  ⚠️⚠️ **AND TWO OF THE FOUR HAVE ALREADY CHANGED UNDER THEIR URLs — BACKWARDS.**
  Refetched 16 September: NIHL went 325,259 → 542,722 bytes and WNIHL 540,666 →
  431,890, and **on both the live `ModDate` is EARLIER than the on-disk copy's.**
  England Ice Hockey **rolled back** to the 26 August originals. **So "compare
  dates and take the later one" is wrong for this publisher** — a date comparison
  says the files differ, not which is current. ⚠️ **No corpus quotation is
  affected; that was checked, not assumed** — both checking-format rows are
  verbatim in both revisions of both documents. Full detail in `sources/README.md`.
- [x] **CLOSED, 17 September — and the acceptance criteria as originally
  written was WRONG.** *"A deliberate baseline refresh via
  `check_external_links.py --write-baseline`"* cannot add these four rows:
  ⚠️ **`--write-baseline` has NO discovery mechanism.** Read the source —
  `load_baseline()` reads the existing TSV and `write_baseline()` re-verifies
  and rewrites only the rows already there. It never scans `content/` for
  URLs. Running it corpus-wide (812 URLs, done this session as part of the
  same task — zero regressions, several previously-403/dead links now live)
  left the four IHUK rows at zero matches, exactly as before, because the
  tool was never going to add them.
  ⚠️ **The referenced *"source-verifier's report... ready to check the tool's
  output against"* could not be found** — not in `project/reviews/`, not in
  `sources/README.md`. Whatever agent produced it, the report itself was
  never saved to a tracked file, which is why it could not be used here.
  **Resolved without hand-editing** by importing the tool's own `fetch()`
  function directly and calling it against the four URLs — the row content
  is exactly what the tool would have written had it discovered them, not
  typed or guessed. Confirmed: Junior RoC 1,098,281 B (matches disk) and U10
  666,945 B (matches disk); NIHL 542,722 B and WNIHL 431,890 B **still do not
  match their on-disk copies** — the rollback `sources/README.md` documented
  on 16 September has not reverted. All four rows appended with a note
  explaining the rollback status; no corpus quotation is affected, per that
  earlier check. **The baseline is now 815 rows, all four IHUK URLs
  present.**
  ⚠️ **Standing lesson for this class of acceptance criterion: verify a tool
  actually does what a plan row assumes before writing "run the tool" as the
  fix.** This is the second time this session a brief's proposed remedy
  didn't match what the named tool does (the first was `check_chunk_tails.py`'s
  own footer, wrongly accused and withdrawn — see Workstream 0B).

## Workstream 2E: the CARHA gap that could not be closed, and why

**Owner:** coordinator assigns. **Evidence:** round 78's `goaltender.md` agent,
which found it, verified it, and **deliberately did not close it**.

- [ ] **PROSE FIXED, 17 September — the facts-block acceptance criterion below
  is still not met, so this row stays open.** The body no longer
  reads "both of those books" — it names CARHA as a third book with no
  trapezoid and states its Rule 58(b) freeze restriction. The fix was
  checked directly against every specific divergence this row warned
  about: it does NOT merge CARHA's "deliberately" into USA Hockey's
  614(c) (which the primary text confirms has no intent word), and it
  explicitly states "not a variant of USA Hockey's" rather than claiming
  equivalence, correctly scoping the "same shape" comparison to the
  location test only (trigger (1)) and naming what CARHA's rule lacks
  (no privileged area, no second/third/fourth trigger). It does not
  separately call out the stoppage-requirement divergence (USA Hockey's
  614(c) requires the act to cause a stoppage; CARHA's does not) — an
  omission, not a misstatement. Full account:
  [`../reviews/goaltender_carha_2026-09-17.md`](../reviews/goaltender_carha_2026-09-17.md).
  **What was previously here as the finding, preserved below, remains
  accurate background** — a CARHA goalie reading only the old text would
  have concluded they have no trapezoid, and become a third puck-handler
  behind their own net. ⚠️ **CARHA 58(b) bars the smother there on the same two
  minutes**, and the wording is verbatim from `sources/carha.txt`: *"A Minor
  penalty shall be assessed to any goalkeeper who deliberately falls on or gathers
  the puck into their body, or holds or places the puck against any part of the
  goal or boards when the puck is behind the goal line and the goalkeeper's body
  is entirely outside the boundaries of the goal crease area."* **Re-read it there
  rather than trusting this quotation.** **The omission is permissive and changes
  what the reader does.**
  ⚠️⚠️ **AN EARLIER VERSION OF THIS ROW SAID CARHA 58(b) WAS *"in the same shape as
  USA Hockey 614(c)(1)"*. IT IS NOT, AND THE TWO BOOKS DIVERGE IN BOTH DIRECTIONS.**
  Read on disk 16 September, `sources/usah.txt` Rule 614:
  - ⚠️ **INTENT: CARHA says *"deliberately"*; USA Hockey 614(c) has NO intent word
    at all** — *"A minor penalty for delay of game shall be assessed to a goalkeeper
    who falls on or gathers the puck into their body…"*. ⚠️ **614(a), the SKATER
    clause, does say *"deliberately"* — so the omission in (c) is deliberate
    drafting, not an extraction artefact.** **A repair that writes *"deliberately"*
    into the USA Hockey limb would add a word USA Hockey does not write, and would
    narrow a penalty the book applies without it.**
  - ⚠️ **CONSEQUENCE: USA Hockey 614(c) requires the act to *"cause a stoppage of
    play"*. CARHA 58(b) requires no stoppage.** So neither rule is a superset of the
    other, and **no single sentence can state both without naming both books.**
  - ⚠️ **AND 614(c) HAS A SECOND TRIGGER CARHA HAS NO EQUIVALENT FOR:** (c)(2), the
    goalkeeper who *"fail[s] to play the puck with their stick when provided the
    opportunity to do so prior to being pressured by an attacking player."* **Any
    repair citing 614(c) bare cites a rule with two limbs and quotes one.**
  ⚠️ **This is the second time this session that a *"both books say the same thing"*
  premise has failed on an intent word. Check the parent clause AND the sibling
  clause before writing any cross-book parallel.**
  ⚠️⚠️ **WHY IT WAS NOT CLOSED, AND THIS IS THE FINDING:** that section's facts
  block sits at **11 of 11 facts — the hard cap** — with at most 26 characters of
  headroom on any line and **8 on the `Key:` line that would naturally host it.**
  Putting it in the body alone creates exactly the body-✓ / block-✗ propagation
  gap the corpus forbids. **The style guide's own remedy is to split the section
  on the seam the body already uses — and that is authoring, not a correctness
  pass.** **Acceptance:** the section is split and the fact lands in both layers,
  reviewed as new authoring.
- [ ] ⚠️ **The repair at `goaltender.md` `:395`, `:939` and `:951` is now itself an
  unfalsifiable negative, written into three layers in one pass.** It asserts that
  **Hockey Canada writes no forward-throw clause for a goaltender anywhere in its
  book.** ⚠️ **`check_disclosures.py` does not flag it** — the tool's patterns do
  not reach that phrasing, so it is invisible to the one worklist built for this
  class. It rests on one agent's flattened whole-book regex plus a reading of
  10.1(i)–(x), 10.2(a) and all its Interpretations, 4.13, 8.3(a)–(e) and 6.12(d).
  **The agent flagged this against itself.** **Acceptance:** a second, independent
  attack on that negative — and consider whether `check_disclosures.py` should
  learn the phrasing.
- [ ] `goaltender.md:391` — *"The two books run in parallel here"* is a **single
  sentence two paragraphs above** the nine-bullet list it governs, and it is what
  scopes every bare `67.3(x)` and `63.2(x)` citation below it. ⚠️ **Load-bearing
  and fragile under chunked audio.** Reported, not restructured.

## Workstream 2F: `defender.md` residue after the criticals

**Owner:** coordinator assigns. **Evidence:** round 78's `facts-reviewer` and the
repair agent, which fixed the two criticals and four majors and **declined these
deliberately**, each with a reason.

- [x] **DONE, 17 September.** Reworded to name what it actually is (the idea
  underneath the 1-on-1/2-on-1/3-on-2 material above it) and to name its
  real, already-taught exceptions (a pinch, a neutral-zone step-up,
  activating into the rush) rather than claiming no exceptions exist. A
  `content-reviewer` pass caught two real gaps in the first attempt —
  "a forecheck" was an ungrounded term this document never establishes
  as something a defenceman does on purpose (fixed to "a neutral-zone
  step-up," already taught elsewhere in the file), and the facts-block
  `Never:` line one section above still stated the old unconditional
  version, unlike every one of its sibling `Never:` facts in the same
  block, which all embed their real exception inline — fixed to match.
  **The Workstream 1G worked-example addition to `core_principles.md`
  Principle 1 is a separate, not-yet-done task** — checked, `core_principles.md`
  does not yet mention "defensive side of the puck" anywhere.
- [ ] Two byte-identical `Rule:` facts at `:337` and `:406` **had drifted apart**
  (*"none of the four books caps it"* against *"none of the four caps it"*). The
  agent **re-synchronised them** so a grep finds both copies, and **deliberately
  did not deduplicate**: both sections genuinely need the charging rule, and
  whether one should point at the other is a section-structure call. ⚠️ **A
  correction to one would have missed the other, and it already half had.**
- [ ] The shorthanded exemption now sits in **three** places in this document plus
  six others. Each copy is internally correct. ⚠️ **Nobody has asked whether one
  of them should POINT instead** — and `:337`/`:406` is the same question, already
  answered badly once in this file.
- [ ] `:11` §Overview carries three facts whose evidence is **130 lines below**
  under a different heading. `:20` is now correct but still distant. ⚠️ **The block
  is at 11/11 and cannot be repaired without a body change to §Overview.**
- [ ] `:120` copies the painted-trapezoid geometry and **then** points at
  `rink_map.md`. The style guide: *"rink dimensions belong to `rink_map.md`. Point,
  do not copy."* The agent left a true claim alone rather than delete it on its own
  judgement. **Owner decision.**
- [ ] ⚠️ **Still owed, 17 September — same "count vs. seeing" gap, now for a
  different reason.** A fresh build ran clean twice (11 steps, exit 0, 53
  pages / 10,901 internal links resolving) and static analysis of the
  built HTML confirmed today's `goaltender.md`/`defender.md` structural
  changes render correctly at the markup level (correct heading nesting,
  balanced facts-block `dt`/`dd` pairs, the CARHA-updated diagram caption
  present identically in both the SVG `desc` and the visible
  `figcaption`, no leaked code fences, one `h1` each, no heading-level
  skips). **But the Chrome extension was not connected this session**, so
  none of the four viewport×theme cells, console output, or actual
  rendered layout were checked — the "seeing" half of this row is still
  open, now blocked on tooling availability rather than on nobody having
  tried. Re-run once Chrome is connected.
- [ ] ⚠️ **The dangling-antecedent class is NOT exhausted.** The repair agent fixed
  a **pre-existing** one that a review of **all 215 facts** did not report. **A
  fact that reads correctly on the page and breaks when voiced alone is invisible
  to every gate**, and only `md_to_speech` plus a human reading finds it.

## Workstream 2G: quotation drift — a corpus-wide class, with a tool

**Owner:** coordinator assigns, one agent per disjoint file set.
**Tool:** `scripts/check_quote_drift.py <file>` — new on 16 September 2026,
promoted from an agent's scratchpad comparator and named in `CLAUDE.md`.

⚠️ **Every gate passes on all of it.** The Markdown is valid and the claim is true;
only the characters inside the quotation marks are wrong. **A `safety-reviewer`
read fourteen quotations in one section and reported every one verbatim — three
had drifted.**

**Measured 16 September, three documents, one pass each:**

| Document | clean | flagged | not found locally |
|---|---:|---:|---:|
| `foundation/rules_primer.md` | 1,187 | **106** | 70 |
| `positions/goaltender.md` | 660 | **29** | 35 |
| `foundation/uk_rules.md` | 124 | **8** | 4 |
| `technique/body_contact_and_battles.md` | 759 | **47** | — |

⚠️ **RUN THE TOOL. These figures are a snapshot and the corpus is being repaired
underneath them.**

⚠️⚠️ **UPDATE 16 September — six more documents worked, all clean.** Repaired:
`foundation/rules_primer.md` (106→76 flagged, 30 repaired), `positions/goaltender.md`
(29→24), `positions/defender.md` (12, unchanged — all confirmed benign or
wrong-occurrence false positives), `positions/winger.md` (5→5, contents changed —
2 genuine restorations), `systems/special_teams.md` (25→20), `systems/faceoffs.md`
(9→7), `systems/defending_the_rush.md` (12→3), `systems/zone_entries.md` (16→11).
**Full per-file shape tables, false-positive lists and the meaning-changing
restorations are in
[`../reviews/round_81_the_flattened_parallel_2026-09-16.md`](../reviews/round_81_the_flattened_parallel_2026-09-16.md).**
⚠️ **The same "enforced exclusively... but may be subject to a Coach's
Challenge / Video Review" qualifier omission, first found in `rules_primer.md`
and left as an open finding there (three sites, not fixed — a content decision
about whether to propagate, not a quote-drift one), turned up INDEPENDENTLY in
`winger.md`'s IIHF Rule 69 quotation and WAS fixed there** (two sites) **because
in that document it had genuine practical stakes: the corpus told a winger the
on-ice interference call was final, when the rule it quotes says it is
reviewable.** ⚠️ **Still open: `positions/center.md`, `technique/shooting.md`
(partially touched by the age-token wave only), and every document not in the
list above.** `uk_rules.md` and `body_contact_and_battles.md`'s original
figures below are UNVERIFIED against today's state — re-run before trusting them.

⚠️⚠️ **UPDATE 2 (same day) — ten more documents worked, and a defect the fix
ITSELF introduced.** Repaired: `positions/center.md` (8→~7, 1 fixed),
`technique/shooting.md` (23→~21, 3 fixed), `foundation/on_ice_communication.md`
(12→11, 2 fixed), `hockey-iq/time_and_space.md` (7→7, content changed, 2 fixed),
`hockey-iq/playing_without_the_puck.md` (14→14, content changed, 2 fixed).
**Zero repairs, all confirmed benign/false-positive**, in
`technique/puck_handling.md`, `technique/passing_and_receiving.md`,
`foundation/uk_rules.md`, `foundation/rink_map.md`, `hockey-iq/risk_management.md` —
every flagged hit in these five was read and is genuinely non-defective; do not
re-flag them as untouched.
⚠️⚠️ **THE "ENFORCED EXCLUSIVELY" RESTORATION ITSELF SHIPPED A FLATTENED
PARALLEL, IN FOUR PLACES, CAUGHT AND FIXED BY THE COORDINATOR.** `winger.md`'s
fix quoted *"but may be subject to a Video Review… or to a Coach's Challenge"*
as what *"both"* books add. **The NHL text (`sources/nhl_rules.txt:7144-7146`)
names only a Coach's Challenge — no Video Review.** Two independent agents hit
the same clause: one (technique cluster) re-derived it from source and got it
right; the other (hockey-iq cluster), told to *"match the already-committed
`winger.md` wording exactly,"* faithfully copied the error into three more
sites. **Fixed at all five sites plus `project/content_style_guide.md`'s own
copy of the same clause.** Full account in
[`../reviews/round_81_the_flattened_parallel_2026-09-16.md`](../reviews/round_81_the_flattened_parallel_2026-09-16.md)
§14. ⚠️ **The lesson: an instruction to copy a prior fix's wording, rather than
re-derive it from the primary source, inherits whatever defect that fix
carried.** `goaltender.md:1015` and `special_teams.md:1033` already had this
clause scoped correctly and needed no change — recorded so nobody re-checks
them.
⚠️⚠️ **UPDATE 3 (same day) — systems cluster complete, and the charging-strides
gap CLOSED.** Repaired: `offensive_zone_play.md` (10→4), `neutral_zone_systems.md`
(4→2), `defensive_zone_coverage.md` (26→19, the most-flagged file in the corpus,
no meaning-changing hit found), `game_management.md` (15→9),
`forechecking_systems.md` (8→5). **Zero repairs, all confirmed benign/mixed-
convention**, in `breakouts.md` (13 flagged, all case-only).
**The charging-strides completeness gap is fixed**: CARHA Rule 52's Note —
*"[i]f more than two steps or strides are taken, it shall be considered a
charge"* (`sources/carha.txt:2556`) — matches USA Hockey 607's threshold
exactly, and is now named at all 8 sites across `forechecking_systems.md` and
`offensive_zone_play.md` (facts, body, Common Mistakes, Key Takeaways in each),
with *"three of the four books"* → *"four of the five books"* updated
everywhere that framing appeared, and the CARHA scope qualifier ("CARHA-
affiliated adult leagues only") attached at each mention. Both edited `Rule:`
facts fit the cap with room: 290/300 and 243/300.
- [x] **PROPAGATED AND CLOSED, 16 September.** `switching_positions.md:293` was
  a FALSE premise — re-checked and it is the goalkeeper's-equipment comparison,
  not charging-strides, and already correctly cites CARHA; nothing to fix.
  `body_contact_and_battles.md` had already cited CARHA Rule 52 verbatim in its
  Sources trailer from an earlier round — propagated into its body and facts
  layers, "four" → "five" corrected at each site. `defending_the_rush.md` had
  **zero** CARHA mentions despite running the identical stride comparison in
  four layers (facts, body, Common Mistakes, Key Takeaways) — added at all
  four, plus a new CARHA bibliography entry in its Sources trailer, since the
  document had never cited the book before. `forechecking_systems.md:217`'s
  own cross-reference to `body_contact_and_battles.md` as *"the four-book
  comparison"* was stale after the propagation — corrected to *"five-book"* by
  the coordinator. **Every document in the corpus that runs this comparison now
  agrees.**

✅ **UPDATE 6, 17 September — re-triaged and fixed. The "32" was wrong in
the other direction: 29 of 34 were genuine, undisclosed drift, not false
positives.** Two later commits (`5460eed`, `09a7d40`) had repositioned
quotations without applying the corpus's `[x]` disclosure bracket. 28
fixed as pure disclosure additions, verified character-by-character
against nine source files; one (the tool's remaining flag on a USA
Hockey Casebook quotation) confirmed a genuine wrong-source-file false
positive and correctly left untouched. `source-verifier` sampled 16 of
the fixes directly and caught one real error in the fix itself — a
restored Oxford comma that silently swapped in the wrong organization's
wording under an unchanged attribution — corrected. `check_quote_drift.py`:
34 → 6 (all six now independently confirmed sound). Full account:
[`../reviews/bcb_quote_drift_2026-09-17.md`](../reviews/bcb_quote_drift_2026-09-17.md).
⚠️ **New candidate found, not fixed**: the same undisclosed-case-drift
pattern also exists inside a `facts` block using plain quote marks,
which `check_quote_drift.py`'s regex cannot see (it only matches the
italicized `*"…"*` form). This tool blind spot may recur elsewhere in
the corpus — not checked.

⚠️⚠️ **UPDATE 4 — the corpus-wide quotation-drift sweep is SUBSTANTIALLY
COMPLETE, 16–17 September.** Ten more documents worked in the last two waves:
`body_contact_and_battles.md` (34→32, both remaining hits confirmed
wrong-occurrence false positives), `switching_positions.md` (18→11, 8
repaired, 1 meaning-changing — see below), `defending_the_rush.md` (unchanged
by drift, but see the CARHA propagation above), `language_and_glossary.md` (8,
0 repaired — all confirmed benign or mixed-convention), `getting_started.md`
(13, 1 repaired), `equipment.md` (7, 0 repaired, safety content checked
closely and found accurate), `team_play_and_culture.md` (6, 0 repaired),
`conditioning_and_recovery.md` (3, 0 repaired, safety content checked and
accurate), `skating.md` (4, 0 repaired, safety content checked and accurate),
`how_to_watch_hockey.md` (1, repaired).
⚠️ **The one meaning-changing repair this pair of waves found:**
`switching_positions.md` had dropped IIHF 101.1's load-bearing condition —
*"provided that 'possession of the puck' remains the sole object of the two
(2) Players"* — leaving a conditional permission read as unconditional.
**Verified against `sources/iihf_rules.txt:7494-7497` and matched to the
wording already correct in `rules_primer.md`.**
**Every document in `content/` has now been run through `check_quote_drift.py`
at least once this round.** Remaining unrepaired hits across the corpus are, by
count, overwhelmingly CASE-shape (initial capital) in documents that already
mix the disclosed-bracket and bare-lowered conventions — left uniformly per
the standing precedent, file by file, with the reason stated in each report.
**No outstanding shape-3 (meaning-changing) hit is known to remain unrepaired
or unexamined** as of this update; if `check_quote_drift.py` is re-run later
and reports a shape-3 hit, treat the corpus as having drifted again rather
than assuming the pass missed it.

- [x] **FIXED, 17 September — the sole divergent site now matches its two
  siblings.** `uk_rules.md`'s USA Hockey **304(g)** quotation now reads
  *"[a]ll players…"*, matching `equipment.md:486` and `goaltender.md:1161`'s
  existing use of the corpus's disclosed-insertion convention.
  `check_quote_drift.py` confirms: was `flagged=8`, now `flagged=7`.
  `uk_rules.md:502` quotes USA Hockey **304(g)** as *"all players, including
  goalkeepers, in all age classifications except Adults"*. **The source prints
  `All`.** `equipment.md:486` and `goaltender.md:1161` quote the sibling clause
  with the corpus's convention — *"[a]ll players…"* — so this is **the sole
  divergent site of three.**
  ⚠️ **And a near-miss worth inheriting: the three sites do NOT say the same
  thing, and that is CORRECT.** 304(c) is the **helmet** (*"except Adults"*),
  304(d) the **facemask** (*"below Adults"*), 304(g) the **neck laceration
  protector** (*"except Adults"*). **Three clauses, three scopes, each quoted
  correctly against its own rule number.** A sweep that made them agree would
  have broken two of them. The defect is one missing bracket, and nothing else.
- [ ] Triage the four shapes per document. ⚠️ **Shape 3 is the one that changes
  meaning** — a terminal period added inside the quote marks where the source
  **continues**, which presents a subordinate opener as a complete sentence. The
  worst instance found quoted *"if at all possible."* where the source reads
  *"If at all possible, try to turn skates parallel to the boards before contact
  is made"* — **the timing was gone and the fragment read as the whole
  instruction.**
- [ ] ⚠️ **Do NOT sweep.** The `[a]` bracket form is the corpus's disclosed-insertion
  convention and is **correct** — one document uses it 53 times, and the tool
  already exempts a leading `[x]`. An ALL-CAPS source heading title-cased in the
  corpus is a judgement call. **Only reading the source decides.**
- [ ] ⚠️ **The `notfound` column is NOT a defect count and must never be worked as
  one.** It is dominated by **quotations whose source is not on disk** — roughly
  two dozen in one document come from the open web — and by **page-furniture
  splices**, which the tool's alphanumeric matching usually defeats but not always.
  Every one checked by hand in round 78 was **verbatim**.
- [ ] ⚠️⚠️ **THE TOOL CANNOT SEE ATTRIBUTION DRIFT, AND THAT IS THE MORE DANGEROUS
  HALF.** It keeps the closest match across **all** sources, so **a sentence the
  corpus credits to the NHL but carrying the IIHF's wording scores CLEAN.** Nothing
  checks a quotation against the book the prose names. **This wants its own pass
  and there is no tool for it.**
- [ ] ⚠️ **Nor does it test whether a verbatim quotation is the RIGHT quotation** —
  whether the cited rule number prints those words, whether the edition is current,
  or whether truncating at the chosen point changes the rule's meaning. **Start
  here:** `body_contact_and_battles.md:1468` stops before the source's *"or for the
  purpose of starting an altercation"* while **the same document quotes the fuller
  form twelve lines earlier at `:1467`.**

## Workstream 1J: the four majors — CLOSED, and one block left at its ceiling

All four repaired and verified against primary text. ⚠️ **Four brief premises were
refuted, one of which would have caused a GATE BREACH.**

⚠️ **I wrote *"if the rule and the instruction will not fit one fact, split into
two — and the block then hits its 11-fact ceiling."* The block was at 10/11, so
splitting gives TWELVE — a breach, not a ceiling.** Only one slot existed. The
agent fit both into one fact.

⚠️ **I wrote that Common Mistakes covered only the deliberate drop, "a different
act."** **False.** The settled-puck case was **already there at HEAD**, with all
three citations — NHL/IIHF 85.2, USA Hockey Casebook 610 Situation 8, Hockey
Canada 6.12(b) — **and the safe-under-all-four instruction.** ⚠️ **The gap was
only in the ` ```facts ` layer.** Real, and worth closing; **the brief overstated
it by one layer.**

⚠️ **I wrote to scope the British warning "to the IIHF and NHL." That would have
overstated.** The lateral throw is answered by the **IIHF's Situation Handbook**;
**the NHL prints the same clause and publishes NO interpretation of it**, and
`sources/README.md` records its Handbook as not publicly obtainable.

### ⚠️ A REPORTED FINDING THE STYLE GUIDE SAYS TO REPORT

- [ ] ⚠️ **§Freezing is now at 11 of 11 facts — the hard ceiling — with 2 coaching
  facts against a floor of 3.** `content_style_guide.md:844` reads a block at 11 as
  **a section doing two jobs**, and this one carries **seven distinct offences**:
  the three-second hold, unnecessary stoppage / pads / netting, the settled puck,
  the forward throw, racing out, snow, and outside-versus-inside the crease.
  ⚠️ **It cannot absorb another fact, and four of its lines sit within TEN
  CHARACTERS of their cap — an ordinary edit breaks the block.**
  **The seam the body already uses is *the goalkeeper's own acts* against *what
  the puck does on its own*.** ⚠️ **Coordinator decision, not an agent's.**
- [ ] ⚠️ **The highest-value question outstanding, and no source on disk settles
  it:** the back of the net is **outside the crease**, and NHL **63.2(i)** reaches
  *"any player, including the goalkeeper, who holds, freezes or plays the puck…
  to deliberately cause a stoppage"* there. **85.2 is the specific rule and names
  only a faceoff**, which is why the corpus says *"no penalty named"* — **but
  nothing on disk says which governs.** The new fact inherits that unresolved
  reading. **`rules-verifier`.**
- [ ] ⚠️ **The British warning rests on an interpretive document that disclaims
  priority over the rule it interprets.** The IIHF Handbook says *"in case of any
  contradictions, the valid IIHF Rulebook is always the basis"*, and IIHF
  67.3(III) on its face says only *"forward towards the opponent's net"*.
  ⚠️ **If a British official reads 67.3(III) literally, the Common Mistakes entry
  warns against a throw that is legal.** Conservative direction — **but stated
  more firmly than the rule text alone supports.** The agent flagged this against
  its own work.
- [ ] **`content/systems/faceoffs.md:173` carries the NHL 85.2 back-of-net act
  with NO USA Hockey / Hockey Canada divergence attached** — the same omission,
  one document over.
- [ ] `sources/README.md` **does not record CARHA Rule 58(b) or 61(b)** as the
  fifth book's answer on goaltender freezing and handling. ⚠️ **Three reviewers
  have now had to re-derive it.**

### Repaired outside the brief, and in the rare direction

The Sources trailer listed seven IIHF situations re-checked against the 2026/27
edition **while the same trailer, two clauses earlier, named two more.** ⚠️ **The
list was short by two and self-contradictory — it made the corpus look LESS
checked than it is**, which is round 59's direction. Corrected to nine, and the
*"still answer with Rule 27.8"* tail scoped to the five that actually do.



⚠️ **BOTH REVIEWERS' VERDICT: THE SPLIT IS SOUND and created no severed
permission.** The `safety-reviewer`'s verdict is **safe** — *"Nothing in scope
would get a reader penalised, ejected or hurt."* The critical it filed earlier is
**gone**, and it verified that by reading both new facts aloud from all four
readerships in turn.

⚠️ **And it recorded something as DELIBERATE that must not be undone:** the block
carries **every prohibition and every consequence, and NONE of the three
permissions** in that paragraph. *"A permission voiced alone with a 300 ms break
either side is the exact mechanism of the critical I filed, and this block does
not expose one."*

⚠️⚠️ **TWO REVIEWERS FOUND MAJOR 1 INDEPENDENTLY**, by different methods — one by
walking the body bullet by bullet, one by extracting **every facts line** in
the document and testing each. **That is the strongest signal in the round.**

### ⚠️ MAJOR 4 (safety) — the diff ADDED the British-reader warning and left it out of both summary layers

The diff added: *"⚠️ **That is the throw a British goaltender is most likely to
think safe**: up the wall to a winger is lateral from where you are standing, and
the IIHF answers it with two minutes."*

⚠️ **The document now asserts in terms that this is the single error its British
readership is most likely to make — and it reaches neither Common Mistakes nor
Key Takeaways.** ⚠️ **Common Mistakes carries twenty-five items including FOUR
penalties of the same or lesser tier** — the corner trapezoid minor, the
centre-red-line minor, the puck-over-the-glass minor, the post-whistle minor —
**and not this one.**

**Constraint:** scoped to the IIHF and NHL, carrying the price, and it must read
correctly aloud with **no surrounding text** — so **not** *"unlike USA Hockey…"*.
⚠️⚠️ **Do NOT import the side-or-rear permission into the summary layer.**

### ⚠️ CARHA is not silent, and nobody had cited it

`carha.txt` **Rule 61(b) Note**: *"Where the puck is thrown towards an opponent's
goal by the goalkeeper and it is received by an opponent, the Referee shall allow
the play to continue. However, if a teammate receives the puck, play shall be
stopped."* **Structurally the NHL's Note with the penalty removed.**

⚠️ **It lands on the permissive side, so no reader is exposed** — but this
document treats CARHA as a **fifth book** in three other sections while §Freezing
says *"all four books"*, and **the new `Priority:` fact is voiced alone saying
*"safe under all four books"***, leaving a CARHA reader unable to place
themselves. **Scope hygiene, not a hazard** — and the instruction **is** safe
under CARHA, verified.

## Workstream 1J (original three) — CLOSED, and the rows are gone on purpose

⚠️⚠️ **These rows sat open, 112 lines below the section recording them CLOSED,
carrying four measurements the tree contradicted:** *"`:377`'s value is 249/300 —
51 characters of headroom"* (it is **296/300, four**), *"one slot free (10/11)"*
(the block is at **11/11**), and a line number attached to the wrong fact.

**A commit gate found them. `check_plan_rows.py` did not, and could not** — its
open-row pattern matched `⬜`/`🟡` while this plan uses `- [ ]`, so it reported
*"0 open row(s) · every quoted assertion still appears"* over **151 rows**.
⚠️ **The tool that exists to catch exactly this had been inert for as long as
anyone had checked.** Fixed in this commit.

**What the rows said is in
[`../reviews/round_80_the_facts_layer_gap_2026-09-16.md`](../reviews/round_80_the_facts_layer_gap_2026-09-16.md),
with the primary-text verification and what closing them cost.** ⚠️ **`CLAUDE.md`:
the plan holds no completed items, and a line number is a figure.**

## Workstream 2H: `goaltender.md` — findings from the rules pass, named not edited

**Owner:** coordinator assigns one agent. **Found by:** the `rules-verifier` sent
at `defender.md`, which followed the claims into their sibling.

- [x] **DONE, 17 September — required a real section split, not a bare
  addition.** The Casebook's "forward" cone definition now travels with
  the rule, in a new `### Throwing the puck forward` subsection (the
  original `Freezing the puck` block was at the 11-fact hard cap, exactly
  as this row anticipated). `safety-reviewer` found and the fix closed a
  genuine Critical the split introduced: one new fact dropped the word
  "forward," directly contradicting the fact before it. Full account:
  [`../reviews/goaltender_forward_throw_2026-09-17.md`](../reviews/goaltender_forward_throw_2026-09-17.md).
- [ ] **New residual from the same fix**: Common Mistakes and Key
  Takeaways are silent on this USA Hockey-specific wedge/hand-pass
  nuance entirely — not wrong, just absent from the two layers a
  podcast listener or skimmer is most likely to reach. Flagged by the
  same `safety-reviewer` pass; not fixed, since it wasn't what that
  fix was asked to close.
- [x] **STALE, verified 17 September — already fixed in commit `d415f73`,
  before this row was written.** `goaltender.md` already reads "lines
  that begin six feet … from either goal post" with the elision properly
  marked, matching `defender.md`'s own correct treatment of the same
  quote.
- [x] **STALE, verified 17 September — already fixed in the same commit
  `d415f73`.** `goaltender.md` already reads "widened by two feet on
  each side for the 2014-15 season," matching `rink_map.md`'s exact
  phrasing.

## Workstream 2I: two residuals the second commit gate found

- [x] **FIXED, 17 September.** The facts line was reworded to state the
  requirement generically ("with intent") rather than asserting one
  specific word across all books — accurate for all five now that CARHA
  is included, and no longer in tension with the detailed prose passage
  that correctly distinguishes the parenthetical-gloss books from the
  operative-clause books. Reviewed clean.
  **Not a wrong claim; a wrong impression.**
- [x] **FIXED, 17 September — see Workstream 2G's own row for the same
  instance.**

## Workstream 2J: the age-token doubling — censused, deliberately deferred

**Owner:** one agent owning `content/technique/body_contact_and_battles.md`,
`content/technique/shooting.md` and `content/foundation/rules_primer.md`.
**Requires `rules-verifier` cover.**

⚠️ **`md_to_speech` expands `U13` to *"under thirteen"*, so a preposition or an
article in front of the token DOUBLES the word.** Both shapes are in the style
guide. **No checker sees any of it** — the Markdown is valid and the claim is true.

**Censused corpus-wide 16 September by rendering every document through
`md_to_speech.spoken_text` — EIGHT live instances:**

| Document | Voiced as |
|---|---|
| `technique/body_contact_and_battles.md` | *"above under thirteen"* ×4, *"a under fifteen"* ×1 |
| `technique/shooting.md` | *"Above under thirteen"*, *"above under thirteen"* |
| `foundation/rules_primer.md` | *"below under eighteen"* |

⚠️⚠️ **DEFERRED DELIBERATELY, and the reason is the point.** An agent that had the
list declined to fix them and was right to: **every one is a Hockey Canada
rule-scope sentence** — 7.3's third limb and 6.1(g)'s category list — and
recasting them means rewriting scope wording a `rules-verifier` has signed off,
across **body, two ` ```facts ` values and Common Mistakes**, inside a round whose
review record covered headings and punctuation. **A repair is new text and new text
has not been reviewed.**

- [ ] Recast all eight so the age token does not follow a preposition or an
  article. ⚠️ **Write the ages out rather than the boundary** — the corpus's own
  worked fix replaced *"below U14"* with *"at U12 and U10"*, which names the same
  set and voices cleanly. ⚠️ **Do NOT swap the article**: *"an under twelve
  minor"* reads wrong on the page.
- [ ] ⚠️ **Render every recast sentence and read it aloud.** These exist only in
  the spoken layer.
- [ ] ⚠️ **Two false positives, recorded so nobody "repairs" them:**
  `playing_without_the_puck.md`'s *"625(a) under minors alone"* — the `a` is a
  **sub-clause letter** — and `team_play_and_culture.md`'s *"covered below under
  Captains and Leadership"*, which is ordinary English. **Both verified by
  rendering.**

## Workstream 2M: the flattened cross-book parallel — a new class

**Owner:** coordinator found it; `rules-verifier` was dispatched on
`positions/goaltender.md`, `defender.md`, `center.md`, `winger.md`.
**Evidence:** both books read on disk 16 September; wording quoted below.

⚠️⚠️ **INTERRUPTED BY THE WEEKLY RATE LIMIT (resets 20 September, 22:00
Europe/London), NOT by completion.** Three agents working this class died
mid-round with a `rate_limit` API error on the Opus model. **What was verified
before the interruption is recorded below and is solid — checked against the
gates after the fact.** What was NOT reached:

- [x] **`positions/goaltender.md`, `defender.md`, `winger.md` — RE-DISPATCHED
  16 September on the Sonnet model (the Opus weekly quota stayed exhausted) and
  COMPLETED.** Independently re-derived CARHA census: 22 / 5 / 11 (the earlier
  "15" for `winger.md` belonged to `center.md`, already fixed). **Full table of
  every CARHA site in all three files, tested against `sources/carha.txt` and the
  matching book, is in
  [`../reviews/round_81_the_flattened_parallel_2026-09-16.md`](../reviews/round_81_the_flattened_parallel_2026-09-16.md).**
  Summary: `goaltender.md` and `winger.md` — every CARHA parallel already CORRECT,
  none needed repair. `defender.md` had the genuine gap: CARHA's freeze
  restriction was cited only via 58(b) (location-conditioned), with no citation
  for CARHA's own **location-free** equivalent, 61(b) — the same shape already
  fixed in `special_teams.md:322`. **Fixed at all four sites** (facts block,
  body blockquote, Key Takeaways, Sources trailer); new `Rule:` fact measured
  188/300 chars, block now 8/11 facts. **No book was removed from any list.**
  `goaltender.md:975`'s previously-reported-not-verified CARHA peacemaker claim
  is now CONFIRMED against CARHA 37(d) — correct, no fix needed.
- [x] **`positions/center.md:613` and its body sentence — fixed by the coordinator
  directly**, because the agent tasked with it (a different one, testing
  disclosures) died before reaching this file. See Workstream 2B for the
  disclosure-side finding; this is its CARHA-adjacent repair. Both sites now read
  *"the age comes from IHUK's Rules of Competition, not either rule book"* in
  place of the false *"no book states a body-checking age"*. **`Rule:` fact at
  `:613` measured 279/300 after the edit.** Verified: `check_facts`, `check_links`,
  `check_absolutes` all clean.
- [x] **`systems/faceoffs.md:882` and `systems/special_teams.md:322` — FIXED**,
  by the agent holding those two files, which finished before the rate limit hit.
  See the verified text below.
- [x] **`positions/center.md:449` — CHECKED AND HOLDS.** *"CARHA 57(c) writes
  the same permission in near-identical words"* to USA Hockey 613(d). Read both
  on disk: CARHA 57(c) — *"the official may order them replaced at that face-off
  by any player on the ice"*; USA Hockey 613(d) — *"may order them replaced for
  that face-off by any teammate then on the ice"*. **The wording differs (`at`
  vs `for`, `any player` vs `any teammate then`) but the substance is
  identical — official's discretion, replacement drawn from players on the
  ice — and the sentence says *"near-identical"*, not identical, which is the
  accurate hedge.** No fix needed. Closed rather than left open for a future
  round to re-check.
- [x] **`positions/goaltender.md:975` — CHECKED AND HOLDS.** *"And so does
  CARHA's own goalkeeper rule"* verified against CARHA 37(d)
  (`sources/carha.txt:1802-1805`): *"When a goalkeeper leaves the goal crease to
  join in a fight, act as a peacemaker, or take part in another fight during the
  same stoppage of play, they shall receive a Game Misconduct penalty…"* — CARHA's
  goalkeeper rule does eject a peacemaker, matching the claim. No fix needed.
  `goaltender.md:1425` was also flagged but sits in a Sources trailer, unread by
  this pass — still open; check whether it is voiced at all before ranking it.

⚠️⚠️ **THE SHAPE: a fifth book joined to another book's rule by a connective —
*"likewise"*, *"the same"*, *"both books"*, *"all four books"*, *"as well"*,
*"too"* — where the two books DIVERGE.** The connective does the damage, not the
citation. **No checker sees any of it:** the Markdown is valid, the rule numbers
are real, and `check_absolutes.py` scores penalty TIERS and DENIALS, not whether
two books actually say the same thing.

**The instance that started this workstream — `systems/faceoffs.md:882`, a
`Rule:` fact, so voiced ALONE with a 300 ms break either side — ⚠️ NOW FIXED, see
below:** originally *"…USA Hockey 614(c) behind the goal line… or outside its
"goalkeeper's privileged" area, **CARHA 58(b) likewise**…"*

⚠️ ***"Likewise"* is false on FOUR counts**, and each was read in the primary text
rather than inferred. **Re-read both clauses rather than trusting this row.**

1. ⚠️ **INTENT.** CARHA 58(b) says *"deliberately"*. **USA Hockey 614(c) has no
   intent word at all.** ⚠️ **614(a), the SKATER clause, DOES say *"deliberately"*
   — so the omission in (c) is deliberate drafting, not an extraction artefact.**
   ⚠️ **Writing *"deliberately"* into the USA Hockey limb would narrow a penalty
   the book applies without it.** **This was found only by reading the SIBLING
   clause, which is why the parent-clause rule now extends to siblings.**
2. **CONSEQUENCE.** USA Hockey 614(c) requires the act to *"cause a stoppage of
   play"*. **CARHA 58(b) requires no stoppage.**
3. ⚠️ **PRIVILEGED AREA.** `grep -ci privileged sources/carha.txt` returns **0** —
   **CARHA has no such concept**, and the sentence's USA Hockey limb names it, so
   *"likewise"* imports a concept CARHA does not have. **Positive control:
   `grep -ci goalkeeper sources/carha.txt` returns 173**, so the file is intact and
   the zero is real rather than a mis-extraction.
4. **TRIGGER COUNT.** USA Hockey 614(c) has **four** numbered triggers; CARHA
   58(b) is one sentence. ⚠️ **A FIRMER CLAIM WAS MADE HERE AND IS WITHDRAWN:**
   that CARHA's goal-frame/boards limb is *"CONDITIONED on being behind the goal
   line"*. **The text is genuinely ambiguous** — *"…falls on or gathers the puck
   into their body, **or** holds or places the puck against any part of the goal or
   boards **when** the puck is behind the goal line…"* — **the `when` clause may
   condition both limbs or only the second, and the book does not settle which.**
   ⚠️ **Do NOT resolve that ambiguity in either direction in the corpus.** The
   conclusion is unaffected: **neither rule is a superset of the other.**

**Neither rule is a superset of the other, so no single clause can state both
without naming both books.** ⚠️ **`goaltender.md:522`'s *"four triggers, not one"*
was checked against the book and is CORRECT — do not "fix" it.**

- [ ] ⚠️ **The INVERSE is the permissive half and no connective reveals it: a book
  named in the GRANT and given no authority for the LIMIT.** Recorded instance:
  `systems/special_teams.md:322` names CARHA among books that write no trapezoid —
  **verified: `trapezoid` and `restricted area` both return 0 against the 173-hit
  control** — then cites **only USA Hockey and Hockey Canada** for *"not freeze it
  out there"*. ⚠️ **And the limit as stated looks OVER-SCOPED for CARHA anyway: 58(b)
  reaches only where *"the puck is behind the goal line"*, and a corner is partly in
  front of it.** ⚠️⚠️ **THAT OVER-SCOPE READING WAS WRONG AND IS
  WITHDRAWN.** It said *"CARHA Rule 61(a) is not the answer — it is expressly 'any
  player except the goalkeeper'"*. **61(a) is not the answer; 61(b) IS.** *"A Minor
  penalty shall be assessed to a goalkeeper who deliberately holds the puck and in
  the opinion of the Referee, is causing an unnecessary stoppage of play."* **It
  carries NO location condition**, so it reaches a corner in front of the goal line
  where 58(b) does not — corroborated by **Rule 55(a) Note 2**, directing referees
  to be strict about *"the goalkeeper holding the puck"*.
  ⚠️ **So the defect at `:322` is SMALLER and DIFFERENT: the line is not
  over-scoped, it is UNDER-CITED. 61(b) is the citation it is missing.**
  ⚠️ **The coordinator read 61(a), saw the goalkeeper excluded, and stopped at the
  sub-clause — the SIBLING-CLAUSE FAILURE THIS WORKSTREAM WAS OPENED TO RECORD,
  committed in the same hour, by the person recording it.** Found by an agent that
  did not own the file and checked anyway.
  **Open, and not to be assumed either way:** whether 61(b)'s *"unnecessary
  stoppage"* test is narrower **in practice** than 58(b)'s location test. **Routed,
  with the correction, to the agent holding that file.**
- [x] **DONE, 17 September — the full census run, at 28-document scale.**
  21 documents read in full (7 more had already been deeply scrutinized for
  CARHA content earlier the same day); 14 entirely clean, two Majors found
  and fixed (`faceoffs.md`'s CARHA Glossary never having been checked,
  presenting CARHA as flatter than it is; `special_teams.md`'s scope
  qualifier present once in the whole document instead of at its ~26
  citations), three Minors found and fixed. `rules-verifier` gave full
  clearance on every rule claim touched. Full account:
  [`../reviews/carha_census_2026-09-17.md`](../reviews/carha_census_2026-09-17.md).
  ⚠️ **Method note for the next census of this kind**: a `grep CARHA`
  census cannot find a *silent* omission — a "the books agree" or "every
  league" claim made where CARHA actually diverges but is never named at
  all. That needs the reverse sweep: start from every general/absolute
  claim and check it against CARHA's rulebook affirmatively. Not run this
  round; the one instance found (`shooting.md`) was luck, not method. ⚠️ **The test is NOT "is CARHA mentioned": a book
  correctly named in a list of books that genuinely agree is the CORRECT state and
  will be the commonest hit.** **Read every hit; sweep nothing.**
- [ ] ⚠️ **Standing constraint for every repair in this class: NEVER REMOVE A BOOK
  FROM A LIST to make a sentence true.** A reader under that book is then left with
  **no rule at all**, which is worse than an imprecise one. **Name the divergence.**
  ⚠️ **And naming a divergence LENGTHENS the line. These are `Rule:` facts at 300
  chars, in blocks at 11 of 11.** **A repair that does not fit is a REPORT, not a
  compression — and splitting a block at 10/11 into two gives 12, a breach.**

## Workstream 2K: a convention decision the quotation work surfaced

- [x] **DECIDED AND CLOSED, 17 September — bracket consistently, and the
  document now does.** The convention decision this row asked for
  ("decide it, or record the mix is acceptable") turned out to be moot:
  the same 28 lowered-initial instances this row had deliberately left
  as an accepted mix were independently found and bracketed by today's
  quote-drift re-triage (see Workstream 2G's "UPDATE 6" — a fresh count
  showed the "28 left alone" had actually drifted into 29 genuine
  undisclosed instances, and all but one confirmed-correct false
  positive were fixed). `grep -oE '\*"\[[a-z]\]' content/technique/body_contact_and_battles.md
  | wc -l` now returns 133 disclosed-bracket insertions against zero
  remaining bare-lowered-initial instances; `check_quote_drift.py`
  confirms only 6 flagged, all verified ALL-CAPS-heading or
  wrong-occurrence judgement calls, none a silent lowering needing a
  bracket. The document is now internally consistent by construction,
  not by a recorded acceptance of inconsistency.
- [x] **CLOSED, 17 September — docstring updated.** Both instances
  re-confirmed by two independent passes today (the same
  cross-book-invented-drift shape recurred and was separately verified at
  the "leave the players' or penalty bench" quotation). Added a
  dedicated bullet to `check_quote_drift.py`'s own "WHAT IT CANNOT SEE"
  section naming this exact failure mode — a quotation can match the
  closest occurrence in an entirely different, uncited rulebook when two
  books share an opening clause, inventing a "truncation" against a
  source the document never cited. Script re-run after the edit; output
  unchanged, no regression.
- [x] **Not a defect — recorded, no action needed.**

## Workstream 2L: residuals from the adverse-authority round

**Evidence:** [`../reviews/round_79_adverse_authority_2026-09-16.md`](../reviews/round_79_adverse_authority_2026-09-16.md).

⚠️⚠️ **THE LESSON FIRST, because it is worth more than the rows.** A coordinator
brief handed an agent a USA Hockey Casebook ruling and framed it as *"a permission
being restored."* ⚠️ **The agent went looking for ADVERSE AUTHORITY and found that
the IIHF Handbook prices the same play at two minutes** — in a document whose
readers are mostly on the IIHF book. **The brief would have caused a
penalty-bearing defect.** ⚠️ **"Refute the brief" is not only about stale premises.
It is about the authority the brief did not carry.**

- [ ] ⚠️ **`goaltender.md`'s `Freezing` facts block cannot carry the 618(c)
  definition or the side/rear permission — it is at 11 of 11, the hard cap**, and
  the line that would host it had 33 characters. The agent **did not trim a hedge
  and did not split the section**, because the seam — three-seconds/stoppage-acts
  against when-to-freeze-tactically — is **authoring, not a correctness pass.**
  ⚠️ **No checker can see this omission: `check_facts` passes on a block at exactly
  the cap.** Only a `facts-reviewer` reading the block against its section body
  finds it. **Acceptance:** the section is split and both layers carry it, reviewed
  as new authoring.
- [x] **RE-CONFIRMED UNRESOLVABLE, 17 September, with the reasoning now on
  record.** A dedicated pass worked the full computation using
  `rink_map.md`'s own stated NHL/IIHF numbers and found it genuinely
  cannot be settled from what the corpus states, for three independent
  reasons: (1) `rink_map.md`'s own definition of "the top of the circle"
  is a depth marker only (~35 ft from the goal line), with no stated
  lateral coordinate to combine with "along the boards"; (2) that depth
  sits *beyond* the end-zone dots, which is exactly the zone
  `goaltender.md` already flags as undefined territory for USA Hockey's
  wedge lines (the rule states the lines run "to" the dots and never
  says whether they continue past that point); (3) `rink_map.md` gives
  no USA-Hockey-specific rink/faceoff coordinates at all — only NHL and
  IIHF tables — so comparing the two rulings requires assuming USA
  Hockey shares NHL geometry, which is never stated as true. Worked the
  arithmetic anyway, on those two unstated assumptions, purely to record
  what a resolution would need: NHL numbers would place the point just
  outside the USA Hockey wedge (36.25 ft from center vs. the boards at
  42.5 ft) — but this is not reported as a corpus-grounded finding, only
  as what's needed to eventually check it. **What would actually resolve
  it**: a USA Hockey primary-source statement on whether the wedge
  extends past the dots, a USA-Hockey-specific rink/faceoff table, and a
  precise coordinate (not just a depth) for the IIHF fact pattern.
  `goaltender.md`'s two rulings correctly remain presented side by side,
  unresolved — no edit made, none warranted.
- [ ] ⚠️ **The NHL has no obtainable casebook**, so *"forward"* is **undefined**
  under the NHL book — the IIHF Handbook is the only interpretive evidence and
  ranks itself below the Rulebook. **A reader under the NHL book has nothing but
  the bare words.** Record it where a reader meets the rule, or accept it.
- [ ] **Two disclosures re-tested this round and UPHELD**, recorded so nobody
  re-opens them: `risk_management.md:651` and `defensive_zone_coverage.md:602`
  both assert the word *"catch"* appears in USA Hockey's volume only in the
  goalkeeper's equipment specifications, in 618(c) and in the Sled Hockey Pusher
  Rules. **Eight hits, all accounted for, with a positive control.** And the
  Hockey Canada forward-throw negative held a **fifth** time.
- [x] **The original hypothesis was STALE; a real, different defect was found
  and fixed in its place, 17 September.** The feared borrow into
  `defender.md` never actually happened — `git log --all -S` on that
  marker string returns no commits touching `defender.md` at any point
  in this repository's history, and the diagram's only host today is
  `goaltender.md` itself, where it is correctly voiced to a goaltender
  throughout. (⚠️ **Documentation-hygiene note, not fixed**: a comment in
  `site/src/diagrams/defender.mjs` asserts "a later round" reversed the
  earlier refusal and made this borrow — that borrow was never actually
  committed. A future author trusting that comment could reintroduce a
  defect already correctly avoided, or skip re-vetting a decision that
  was never made.) **The real, live defect**: today's own CARHA
  propagation fix (see the `goaltender_carha` review record) reached this
  document's prose everywhere except this diagram's caption, which still
  read "neither the USA Hockey nor the Hockey Canada book marks one at
  all" — the exact stale two-book phrasing the same commit hunted down
  and closed everywhere else in this document, in a location
  `check_rule_scope.py` and `check_absolutes.py` cannot reach (captions
  live in `.mjs`/`diagrams.json`, not in the `content/` prose those tools
  scan). Fixed to name CARHA, `site/src/data/diagrams.json` rebuilt from
  the updated source, gates re-run clean. Also flagged, not fixed: a
  label-overlap risk in the rendered PNG worth a look on a future pass.

## Workstream 3: diagrams, site, and audio release validation

**Owner:** coordinator for shared tools and generated output; one agent per
disjoint diagram module. **Dependency:** Workstream 1 pilot structure.

- [ ] For pilot and principles-index diagrams only, record learner question,
  unique visual value, audience/prerequisite, first-notice cue, host section,
  and why prose/video/demonstration is not better. Build overview → vocabulary →
  relationship/choice → worked example → optional detail progression.
- [ ] Keep diagrams only when they add spatial, visual, or comparative value.
  Consolidate or retire low-value diagrams only after checking every host,
  inbound link, generated asset, caption, description, facts/summary reference,
  and audio consequence. Defer the corpus-wide diagram audit.
- [ ] Treat `rink_map.md`'s larger value audit as a later bounded task. Identify
  one clean beginner orientation map, then classify close-ups as essential,
  useful reference, or redundant. Do not shade overlapping regions or invent
  extents for unbounded terms.
- [ ] Keep each normal caption to one short sentence, or two only when the
  second completes the safety/legal instruction. The first sentence must stand
  alone for a U10 listener. Move rationale, multiple-book comparison, and
  provenance beside the diagram, never a required condition.
- [ ] Keep `caption` as the teaching takeaway and `describe` as the literal
  visible drawing. Neither may claim that a plan-view glyph proves skate contact,
  facing, head position, timing, force, or legality.
- [ ] For every changed diagram, enumerate hosts and review host context,
  accessible name, description, caption independence, focus order, scroll
  announcement, contrast, print/PDF output, reduced motion, and orphan cleanup.
- [ ] Rebuild diagrams before caption checks and inspect generated SVG/manifest.
  Never edit `site/src/data/diagrams.json` directly. Do not run concurrent builds.
- [ ] Validate the speech layer in the pilot: explicit section markers, source
  order, standalone facts/warnings, and no required condition stranded in visual
  collapse. Decide whether pilot audio is regenerated or marked stale.
- [ ] ⚠️⚠️ **INVESTIGATED IN FULL, 17 September — the manifest question is
  answered, and it surfaced a live, unrelated defect: a published episode is
  currently narrating a rules/safety mistake this corpus already fixed in
  text.** Confirmed: `core_principles.md` has no episode, and cannot yet —
  it didn't exist in git until 14 September, two days after
  `podcast.json` was last written, and it's been edited four times since,
  today alone. `language_and_glossary.md` also has none. Neither has a
  false "listen to it" promise anywhere in `content/` — every inbound
  pointer to Core Principles uses plain read/link language, and the
  correct "reading only, no episode" disclosure already exists in
  `pathways.json`'s Core Principles pathway entry — but that pathway's
  `status` is `"draft"`, and drafts don't render, so **the disclosure
  that exists is not currently reader-visible anywhere.**
  ⚠️⚠️ **The `rink_map` manifest question resolved into something worse
  than a stale filename.** Its audio genuinely does narrate real
  glossary content — 22 of 77 chunks (28.6% of a ~60-minute episode) are
  the old `## 8. Glossary` section, now `language_and_glossary.md`'s
  Glossary section. But the TTS input is dated 7 September, and the
  synthesized "The paint" entry states the goalkeeper-crease rule as
  keyed to skates alone — **exactly the incomplete wording**
  `project/reviews/change_2026-09-12_language_split_and_rink_map_rename.md`
  **already identified as CRITICAL 1 and fixed in text on 12 September**
  (USA Hockey Rule 625(b) also names the stick; a player relying on the
  audio's version could have a legal goal disallowed). **The
  already-published, still-linked episode has never been regenerated
  since, and is currently telling a listener the pre-fix, incomplete
  version of a rule this corpus's own written record says it corrected.**
  The episode's glossary section also only covers roughly the back half
  of the current `language_and_glossary.md` — the front ~200 lines,
  consolidated from eight other documents' vocabulary sections, were
  never part of the original episode and aren't in it at all.
  **Acceptance, revised**: this is no longer "generate the missing
  glossary episode or label it reading-only" alone. It needs (1) a fresh,
  dedicated `language_and_glossary` episode — not a relabelled rink_map
  one, since that audio is the wrong document's GUID, missing content,
  and carries a fixed-in-text defect; (2) the `rink_map` episode itself
  regenerated for the same reason, not left alone just because it
  currently "counts" as covering the glossary; (3) `core_principles.md`
  generated only once today's edits clear full review, given how many
  times it's changed today; (4) the Core Principles pathway's
  reading-only disclosure either promoted out of `draft` status or
  restated somewhere that actually renders, so the correct warning that
  already exists stops being invisible. None of this was implemented
  here — audio generation and manifest/pathway edits are build/authoring
  work outside a research pass's scope. Full account:
  [`../reviews/goaltender_carha_2026-09-17.md`](../reviews/goaltender_carha_2026-09-17.md)
  (the podcast-audio finding is filed there alongside the same day's
  other CARHA-adjacent work; it is not itself a CARHA finding).
- [ ] Apply podcast ordering/discovery from the separate podcast plan: preserve
  manifest `track`, RSS serial fields, and stable GUIDs; use a reviewed,
  podcast-only `podcastTitle` with a measured short prefix; validate locally
  before any Apple Podcasts/Spotify rehearsal. Live platform rehearsal requires
  explicit approval.

**Gate:** site reviewer checks 375px, 768px, and desktop; keyboard/screen-reader
order; diagrams, captions, warnings, facts, and audio. The staged tree is the
tree reviewed and built. No claim of Apple/Spotify behaviour rests on local XML
alone.

## Workstream 3B: speech-layer residuals found 16 September 2026

**Owner:** coordinator assigns disjoint files. **Evidence:**
[`../reviews/worklists_2026-09-16.md`](../reviews/worklists_2026-09-16.md), which
owns every figure — re-run the command it names rather than quoting it.
**Dependency:** none; these are disjoint from release one and may run alongside it.

⚠️ Every row below is a **candidate from a worklist, not a defect**. The
acceptance condition for each is a read, and "correct as it stands, here is why"
closes the row.

## ⚠️⚠️ A SEVERITY CORRECTION THAT APPLIES TO EVERY CHUNK ROW BELOW

**A CHUNK IS NOT A FILE.** `AudioPlayer.astro` plays **one file per document** from a
single `<audio>` element — no playlist, no per-chunk player — and `md_to_speech.py`
chunks only to fit **Polly's per-request limits**, with a manifest so the pipeline
can **concatenate**.

⚠️ **So a chunk boundary is a SEAM INSIDE ONE CONTINUOUS FILE.** The listener hears
the next value after the ordinary 300 ms break, like any other. ⚠️⚠️ **No argument
may rest on a listener "never reaching the next file". There is no next file.**

**The style guide states this at `:2054` and records why it has to:**
`scripts/check_chunk_tails.py` was *"designed, built and dispatched against on the
belief that a chunk-terminal value's qualification 'opened the next file'"* —
**after** the correct account had already been written. ⚠️ ***"Wrong about why,
right about what — for the third time in this guide."***

⚠️ **These rows were written by a coordinator who framed several of them as
material a listener never hears. That framing is WRONG and is corrected here.**
A chunk boundary is a **prosodic** risk — a qualification arriving after a seam
rather than inside the sentence — which is real and worth repairing, **but it is
not a lost limb.**

⚠️ **What IS a lost limb, and stays exactly as severe:** a ` ```facts ` line or a
Key Takeaway **voiced alone with a 300 ms break either side**, to a listener with
no surrounding context. **The facts blocks are inline in the single track, which
is precisely why their isolation matters.** Every facts-layer finding in this plan
stands at full severity; only the chunk-boundary rows are downgraded.

- [ ] `hockey-iq/playing_without_the_puck.md` chunk boundary 1→2 puts a **300 ms
  seam** between a safety prohibition and its applicability condition — **CLOSED,
  17 September, correct as it stands.** A reviewer ran the actual TTS chunker
  (`md_to_speech.transform_document`) rather than guessing at the boundary,
  and read both sentences in full: they aren't a prohibition-and-qualifier
  pair at all. "Never turn your back... never duck" is a universal,
  correctly-unhedged safety instruction (no league makes ducking into
  board contact advisable); "whether you may use your body at all" is a
  separately-scoped, genuinely league-dependent question that already
  carries its own qualifier inline. Nothing to merge.
- [x] `systems/breakouts.md` chunk boundary (73→74, now 74→75 after later
  edits) puts a seam between the two halves of a five-clause
  Interpretation — **CLOSED, 17 September, correct as it stands.** The
  document's "a goaltender told only that half has been told the rule
  wrong" sentence is a general caution about incomplete rule
  communication in the world (by a coach, a teammate, a summary), not a
  self-referential claim about this corpus's own continuous, single-file
  audio — the worklist's premise didn't match what the sentence actually
  says. All five clauses of Hockey Canada's Interpretation 3 to Rule
  10.1(a) re-verified verbatim against `sources/hc_layout.txt`.
- [x] **DONE, 17 September — broadened into a full sweep, which is what
  found the real defects.** The three originally-flagged indices didn't
  match anything in the current files (stale, as the row's own caveat
  anticipated); a full read of every `Rule:` fact in both documents (76
  facts total) found two genuine Majors in `shooting.md` instead: an
  NHL/IIHF crease-contact rule stated as an unqualified absolute with its
  Rule 69.7 exception living only in the next fact (fixed at both
  occurrences), and an NHL-specific shootout procedure with no scope flag
  contradicting the same document's own body text on British rules
  (fixed). `puck_handling.md` had no comparable defect. Full account:
  [`../reviews/goaltender_forward_throw_2026-09-17.md`](../reviews/goaltender_forward_throw_2026-09-17.md).
- [x] **FIXED, 17 September.** `hockey-iq/playing_without_the_puck.md`'s
  pointer to the dropped Notes section is gone. On inspection the Notes
  section held **no substance beyond what the body already stated** — same
  source, same sample size, same caveat — so the pointer was over-promising
  hidden detail rather than under-disclosing anything. The dangling sentence
  was removed and its one non-redundant clause merged into the existing
  sentence; the Notes section itself is untouched. `check_pointers.py` no
  longer flags this document.
  **The other four `check_pointers` hits — checked, all benign:**
  `rules_primer.md:143` and `:483` point at plain bullet lists, not tables,
  so `TABLE_MAX_*` drop rules don't apply. `rules_primer.md:942` points at
  the one big comparison table that IS dropped from audio, but the sentence's
  actual payload (what the table does NOT cover, and where to find it
  instead) is voiced regardless of whether the table itself survives — a
  wording nit, not a stranded limb. `body_contact_and_battles.md`'s table
  pointer resolves to a table confirmed read-as-prose. **No further action
  needed on any of the four.**
- [x] `check_chunk_tails.py --prose` **has now been run, 16 September.** Body prose
  is no longer unscanned. **The run is the closure; the triage it opened is the row
  below.** Run the command for today's figures — no count is written here, because a
  count copied out of its owner goes stale silently and a named command does not.
- [x] **SUBSTANTIALLY WORKED, 16–17 September.** Two waves triaged the largest
  concentrations: `rules_primer.md` (58), `body_contact_and_battles.md` (35 prose
  + 8 facts-block hits out of scope for this pass), `goaltender.md` (29),
  `special_teams.md` (21), `offensive_zone_play.md` (19), `forechecking_systems.md`
  (21), `faceoffs.md` (17) — **200 hits read in full surrounding context, not the
  tool's truncated printout.** **6 genuine fixes**, each folding an existing,
  already-sourced qualifier into the same sentence as the permission it qualifies —
  no rule, citation or claim was changed, only where the qualification sits. The
  other ~194 were judged self-contained on a real read and are NOT re-flagged;
  a handful of borderline cases (a rule quotation itself split mid-sentence across
  a chunk boundary — a rendering artefact, not a content defect) were left with the
  reason recorded, all erring in the safe/over-strict direction.
  ⚠️ **`check_chunk_tails.py`'s printed footer was earlier accused of contradicting
  its own docstring's retraction — THAT ACCUSATION WAS WRONG AND IS WITHDRAWN
  (see Workstream 0B).** The footer and docstring agree; the footer states the
  standalone-reading test on purpose.
⚠️⚠️ **UPDATE — a third wave closed the rest of the corpus, 17 September.** Three
  more agents covered the remaining 20 documents: `defensive_zone_coverage.md`,
  `game_management.md`, `equipment.md`, `puck_handling.md`,
  `defending_the_rush.md` (66 hits); `center.md`, `risk_management.md`,
  `getting_started.md`, `playing_without_the_puck.md`, `uk_rules.md`,
  `on_ice_communication.md` (57 hits); `zone_entries.md`, `breakouts.md`,
  `switching_positions.md`, `winger.md`, `passing_and_receiving.md`,
  `defender.md`, `language_and_glossary.md`, `skating.md`, `rink_map.md` (56
  hits). **179 more hits read in full context. ZERO further defects found** —
  every one was already self-contained (qualifier in the same sentence, or in
  the same paragraph as a genuinely continuous claim). Each agent specifically
  grepped its files for the Hockey-Canada-suspension shape (*"no automatic",
  "triggers no", "no further consequence"*) — **no further instance of it found
  anywhere in these 20 documents.**
  ⚠️ **A GAP FOUND WHILE CLOSING THIS OUT, THEN CLOSED: `technique/shooting.md`
  (13 hits) was never assigned to any of the three waves** — an oversight in how
  the file lists were split, not a deliberate exclusion. **Checked directly by
  the coordinator, following the now well-established pattern: all 13 read in
  full context, ZERO defects — every one is either an already-self-contained
  quotation (its own proviso in the same sentence), a list-intro sentence
  followed by the list, or a topic-closing line followed by an unrelated new
  section.** No edit made. Still untouched, all small:
  `neutral_zone_systems.md` (3), `how_to_watch_hockey.md` (3), `time_and_space.md`
  (3), `team_play_and_culture.md` (2), `conditioning_and_recovery.md` (2),
  `reading_ice_hockey_diagrams.md` (1), `practice_and_development.md` (1),
  `scanning_and_anticipation.md` (1), `puck_support_and_spacing.md` (1),
  `core_principles.md` (1) — **31 hits across 11 documents, roughly 8% of the
  corpus-wide total, genuinely unexamined.**
  ⚠️ **The propagation gap at `body_contact_and_battles.md:301` and `:593`
  (Hockey Canada's *"triggers no automatic suspension"* stated without the
  caveat folded into the fixed body-prose instance at `:311`) is STILL OPEN** —
  not chased this round; propagating into a `Rule:` fact needs a char-cap check
  first.
  **Given 6 genuine fixes were found in the first ~257 hits reviewed and ZERO
  in the next 179, this worklist has a strongly declining yield** — the
  remaining 31-hit tail is a completeness item, not a known-live-defect list.
  **Acceptance for what remains:** `shooting.md` gets a real pass (it is a
  large, safety-adjacent document and should not stay the one accidental gap);
  the ten small documents are optional, lowest priority in the plan. Each hit is
  either repaired by folding the limit into the same sentence, or recorded as
  safe with the reason. ⚠️ **The chunker splits only at sentence ends, and
  lengthening anything MOVES every boundary below it** — re-run after each
  change.
- [x] **The 4 named starting points checked, 17 September — all benign.**
  `rules_primer.mjs:93` quotes the diagram module's OWN `describe` field, not
  `content/` prose — self-referential, not stale. `shooting.mjs:517` is a
  close paraphrase of a disclosure still live in `shooting.md` in both its
  `Convention:` fact and body prose — word ORDER differs, content doesn't.
  `rule69_clauses.mjs:95` is internal code documentation cross-referencing
  another `.mjs` module, not a claim about any `content/` document at all.
  `risk_management.mjs:622` is a **deliberately preserved** record of a
  caption's prior wording from a documented 15 September shortening pass —
  the "kept so the reasoning stays traceable" class the tool's own docstring
  names as correct to leave. **No `.mjs` file was edited.**
  ⚠️ **The other ~14 of the original 18 named hits were NOT individually
  triaged this pass** — still open, lowest priority. The tool's own baseline
  is ~9% true-positive against 1,804 spans checked (1,045 not found
  verbatim), so a further sweep should expect a low hit rate, not treat
  every run as starting fresh.

## Workstream 3C: the site review — what it cleared, and what it opened

### Fresh pass, 17 September — verifying the day's ~150-repair round

⚠️ **The Chrome extension was unavailable for the ENTIRE session, four
connection attempts.** Everything below the build/link-check gate is a
**source/build-artifact-level inference, explicitly labelled as such by the
reviewer** — not a rendered-pixel finding. Treat the print-layer and
per-document verdicts below as corroborating evidence, not as the visual
confirmation this project's own standard requires.

**Build: clean.** Full `npm run build` with the absolute binaries, run twice,
exit 0 both times. 11-step chain completed including `check:links` — **53
pages, 10,753 internal links, all resolve, including 2,136 anchored
cross-links.** `check-arrivals.mjs`: 204 diagrams, 304 routes, **0 hard
failures**, 8 pre-existing advisories unrelated to today's two edited diagram
modules.

**No regression found from today's round**, at the level this pass could
check: `dz-strong-side-overload`'s shortened caption is live in the rebuilt
`diagrams.json` (confirms the cache was genuinely cleared, not stale) and
well-formed; facts blocks render as `<dl class="facts">`, not raw code
fences, on all 8 spot-checked documents; every table is wrapped in
`.table-scroll`, counts matched 1:1; the corrected "Video Review… or to a
Coach's Challenge" quotation renders cleanly with no entity-escaping
breakage; no stray Markdown artifacts on any sampled page.

**Print-layer fix: structurally sound by CSS specificity analysis, NOT
re-measured visually.** The print block's `:root, :root[data-theme]` selector
and the dark-theme override `:root[data-theme='dark']` are equal specificity
(0,2,0); the print block wins on source order, appearing later in the same
stylesheet. `.facts` and the three callout classes all resolve through the
custom properties the print block redeclares. ⚠️ **This is proof of logic, not
proof of pixels — the previous round's own documented measurement (a code
comment at `global.css:2119-2166`) is the last actual pixel measurement on
record.** A Chrome-driven print-preview re-check is still owed and is NOT
satisfied by this pass.

- [ ] ⚠️⚠️ **NEW, Major severity — the LOCAL preview server's custom 404 page
  does not render for a genuinely unmatched route with no trailing slash.**
  `curl http://localhost:4321/does-not-exist` returns Astro's generic
  dev-mode error page (*"404: Not Found (trailingSlash is set to
  'always')"*), not the corpus's branded 404. **The SAME path WITH a trailing
  slash correctly returns the custom page.** Root cause: `astro.config.mjs`
  sets `trailingSlash: 'always'`, and Astro's preview-server middleware
  intercepts a no-slash unmatched path before it reaches the custom 404
  handler. ⚠️ **The reviewer flags, correctly, that this may be a
  preview-server-only artifact** — in production CloudFront's own
  error-document substitution may serve `dist/404.html` regardless of
  trailing slash, entirely outside Astro's control. **Acceptance:** confirm
  directly against the deployed CloudFront distribution whether a raw
  unmatched path (no trailing slash) returns the branded 404 or a generic
  error. If it does not, this is live in production and needs the
  CloudFront custom-error-response config checked, not an Astro-side fix.
- [ ] **A real Chrome-driven visual pass is still owed** for: actual layout at
  375px/1440px in both themes, print/PDF pixel contrast (re-measure, don't
  just re-derive from CSS), theme-toggle behaviour and no-flash-on-first-paint,
  ToC scroll-tracking against the sticky header, console errors, runtime
  network requests, Pagefind's client-side query execution, keyboard focus
  visibility, and screen-reader landmark behaviour. **None of these were
  reached this pass** because the extension never connected.


**Evidence:** a `site-reviewer` pass over the 11:00 build, all 49 sitemap pages,
at 320/375/768/1440 in both themes, both `prefers-color-scheme` and explicit
`data-theme`. ⚠️ **The Chrome extension refused every navigation, so it drove
Chrome directly over CDP. Findings are rendered pixels and computed style, not
inference** — but no recorded walkthrough exists, and the accessibility tree was
not reachable.

**Both items the commit gate blocked on are SOUND on the page.** The repaired
polygon: label clear of the boards by **80.7 px at 1440, 75.3 at 768, 65.2 at
375**; zero overlaps against all five SVG text nodes; polygon reaches the board
**to 0.0 px**; both faceoff circles enclosed. ⚠️ **`getComputedStyle(polygon).stroke`
is `"none"` at all six cells — the `stroke-dasharray` is present and INERT, and no
dashes render in any screenshot, the PNG or the PDF.** `defender.md`'s three new
anchors resolve at ~128 px, clearing **both** sticky elements — the header **and
the audio player**, which the reviewer checked and a naive pass would have missed.

- [ ] ⚠️ **THE PAGE-OPENING PRINCIPLES: the reviewer's verdict is that the
  divergence reads as an ACCIDENT, and the ToC is where you see it.** This
  supersedes the "coordinator decision" framing in Workstream 1G.
  `rules_primer.md` gives `Hockey has more than one rule book` — **the heading IS
  the principle**, and it works as a ToC entry. `getting_started.md` gives
  `The principle` — findable, but **a label with no information in it**.
  ⚠️ **`body_contact_and_battles.md`'s principle appears NOWHERE in the ToC**, and
  inside its Overview the bold lead renders at the **same 17 px and same weight**
  as the three ordinary bold leads that follow it in the same section. **There is
  no typographic signal that it is doing a different job** — in the document where
  the framing principle carries the most safety weight.
  **The reviewer's read: two of the three are variants of one convention; the
  third is the convention not applied.** **Acceptance:** one form, and
  `rules_primer`'s is the one that survives contact with the rendered page.
- [ ] **MINOR — a scroll region announced as scrollable when it is not.** At 1440,
  three `div.diagram-scroll` and two `div.table-scroll` carry `role="region"`,
  `tabindex="0"` and `aria-label="Diagram, scrollable horizontally"` while
  `scrollWidth === clientWidth`. **A screen-reader user is told it scrolls; a
  keyboard user gets a tab stop that does nothing.** ⚠️ **The logic is CORRECT at
  375** — the six non-overflowing wrappers there carry no role at all — **so the
  conditional exists and resolves wrong at desktop width.** Pre-existing, not from
  this change.
- [ ] **MINOR — the shaded region is weak in greyscale.** 210 against 233 mean
  luminance, a 9% separation. It does not depend on colour alone: it is bounded by
  the painted red line and the wall, and the label sits inside it. ⚠️ **If ever
  adjusted, raise the fill alpha rather than restoring a stroke** — the whole point
  of the repair was that every edge is a real boundary.
- [ ] ⚠️ **`dist/analytics.js` is a GA4 bootstrap and `dist/sw.js` PRECACHES it.**
  It is **inert today** — no HTML references it and no `<meta name="ga-measurement-id">`
  exists anywhere in `dist/`, so it returns on its first line. **Worth knowing that
  adding one meta tag would silently switch analytics on across a precached
  script.** Observation, not a finding.
- [ ] `/404` could not be tested as production serves it — `astro preview` returns
  its own generic page. The custom page exists and serves 200 at `/404.html`;
  CloudFront maps it. **Untestable locally.**

⚠️ **What the reviewer could not reach, in its own words:** no Safari, no Firefox,
no real phone, **no real screen reader** — *"reading order is correct for a screen
reader" is an inference from DOM order and landmark structure, not an
observation.* And ⚠️ **`backdrop-filter` probably did not composite under
`--headless --disable-gpu`**, so the header and audio-player blur is unverified:
*"Someone with a real window should glance at it."*

⚠️ **And it did not audit the PNG cache.** It verified the icing PNG is
content-current by hash and by eye; **the other 203 are unchecked**, and a stale
PNG under a correct filename is exactly the failure `build-diagrams.mjs`'s own
comments describe. **A hash-identical `public/` and `dist/` proves the copy, not
the render.**

## Workstream 3D: the print layer — a CRITICAL fixed, and a plan row corrected

**Found by** a `site-reviewer` driving Chrome over CDP and rendering to PDF.
**Both defects were PRE-EXISTING**, neither introduced by this round.

### ⚠️⚠️ FIXED: printing from a dark-themed browser made the SAFETY LAYERS the faintest text on the paper

Measured by rasterising the printed page: **the facts layer's darkest pixel was
148/255 against ordinary prose at 0/255**, and **every link printed BLACK ON A
SURVIVING DARK PANEL at 1.26:1.** With backgrounds off — **Chrome's default** —
**1,832 text elements** were under 4.5:1.

⚠️⚠️ **The two layers that came out faintest are the two that carry the
caveats: the ` ```facts ` blocks and the ⚠️ callouts.** The corpus's recurring
named defect, reproduced in the print layer.

⚠️ **And it reached readers who never touched the toggle** —
`:root:not([data-theme='light'])` applies the dark palette whenever the OS is
dark, so a reader who has never opened the theme menu printed the faint version.

**Cause:** `@media print` forced `background:#fff; color:#000` on `html`/`body`
**only**. It never re-declared the **palette**, so the dark custom properties
stayed in force for every descendant using `var(--text-muted)`, `var(--text)` or
`var(--bg-raised)` — and `a { color: #000 }` then painted black links onto
surviving dark panels.

**Fixed** by re-declaring all 29 light palette properties on `:root` inside
`@media print`, with the measurements in a comment beside them. ⚠️ **Keep that
list in sync with `:root` above it.**

⚠️ **The shipped PDFs in `dist/downloads/` were never affected** — `build-pdf.mjs`
prints from a fresh Chrome with no localStorage. **This only ever hit a reader
pressing Cmd-P.**

- [ ] ⚠️ **Verify the fix by rendering to PDF from a dark-themed browser and
  re-measuring.** The CSS is structurally verified (29 properties, braces
  balanced) but **nobody has looked at the printed output since the change.**

### FIXED: a dead print selector

`.prev-next` in the print hide-list; the component renders `class="prevnext"`, and
every screen rule uses `.prevnext`. **The Previous/Next navigation printed on every
page.** The typo appeared exactly once in the file and matched no element.

### ⚠️ A plan row of mine was WRONG and is corrected here

Workstream 3C records the scroll-region defect as *"the logic is CORRECT at
375."* ⚠️ **It is not.** **Four dead tab stops survive at 375 px** — one on
`body_contact_and_battles`, one on `rules_primer`, two on `getting_started` —
narrow two-column tables that fit inside the 344 px column while still carrying
`role="region"`, `tabindex="0"` and *"scrollable horizontally"*.

⚠️ **And the mechanism is worse than "resolves wrong at desktop width":** the
attributes are applied **at build time and unconditionally**, in
`rehype-corpus.mjs` for every `<table>` and `remark-corpus.mjs` for every
non-half diagram. **Nothing re-evaluates them against the viewport.** The fix is
*"measure at runtime"*, not *"only desktop is affected"*.

- [ ] **The on-page table of contents does not track the heading you are on.** Zero
  of 70 ToC anchors carried `aria-current` or an active class while scrolled deep
  into a document. ⚠️ **Not a regression — there is no scroll-spy script and no
  active-state CSS to break. It was never built.** Recorded because the
  site-reviewer brief names ToC tracking as a thing to check, and *"never built"*
  is the honest answer.

### ⚠️ A brief premise of mine, refuted

I told the reviewer the 75-character heading was *"the longest thing that has ever
gone into that sidebar."* **It is not.** The **same document** already carries a
**77-character** depth-3 entry at three lines, and two more already reach three
lines. **The new entry is not the longest and its wrap is not a new shape.** The
concern was worth raising as a question; it answers cleanly as a fact.

## Workstream 4: deferred backlog

These are not release-one dispatch inputs. Re-open one only with an owner, exact
file set, evidence link, and acceptance condition after the readability go/no-go.

- [ ] Rerun full-corpus caption/marker/value audits after the pilot and assign
  disjoint diagram modules; do not copy historical counts.
- [ ] Resolve remaining source extraction and provenance questions, including
  `heo_intl_drill_symbols.txt`, Schulte access, source README drift, and edition
  diffs, only when a content claim depends on them.
- [ ] Move general method/tool guidance to `CLAUDE.md`,
  `project/content_style_guide.md`, or `project/review_process.md`; keep this
  queue to current actions and pointers.
- [ ] Address lower-priority renderer issues such as `0:00`, table-scroll dark
  theme, stale generated assets, and heading-anchor ergonomics after the release
  gate unless they block accessibility or safety.
- [ ] Decide whether to add audio chapters/shorter paths and run the local
  NotebookLM workflow in batches of no more than 10. Follow
  `PODCAST_AUTOMATION_LOCAL.md`; do not make batch generation part of the
  readability release gate unless pilot audio is being regenerated.

## Common execution rules

- [ ] Before every dispatch, check current `HEAD`, status, exact ownership, and
  whether the plan row is still true. A row is a hypothesis, not evidence.
- [ ] Give each agent only a disjoint file set. Agents do not edit this plan,
  review records, scripts, shared generated outputs, or another agent's files.
- [ ] Do not stage a file until its agent is permanently finished. Ensure index
  and working tree match before running gates; never use blanket staging.
- [ ] Re-read complete changed files and compare agents' changes for
  contradictions. A repair is new text and needs fresh review unless the gate's
  confined-repair rule applies and the change is recorded.
- [ ] For content changes run the repository's required gates, including links,
  facts, absolutes, geometry, secrets, counts, and site arrivals. Use the
  authoritative tool inventory in `CLAUDE.md` and compare it with `ls scripts/*.py`
  before running; read every worklist hit. Worklists are not gates.
- [ ] A review record must state changed files, measurements, reviewers, findings,
  fixes, coverage, propagation, staged-text confirmation, and **what this method
  could not have found**. Map C3-C11 explicitly or declare dimensions out of
  scope.
- [ ] Do not commit content until required rules/source/safety/site reviews and
  the final `commit-gate` are clear. Never push or deploy without explicit user
  approval.
## Workstream 4B: source and caption residuals

**Owner:** coordinator assigns. **Evidence:** round 78's agent reports.

- [ ] ⚠️ **`sources/` holds no `usah.pdf` and no `hc.pdf` — only extracted text.**
  So the USA Hockey *"OFFICIAL RINK DIAGRAMS"* appendix and Hockey Canada's rink
  pages **cannot be rendered and read**, and a trapezoid is a *painted marking*,
  so the diagram is the most direct evidence for the absence claim the corpus
  makes. The claim currently rests on both books' markings rules read in full plus
  both house words searched — strong, **not** the picture. **Acceptance:** fetch
  the PDFs and `pdftoppm` the rink pages, or record the residual uncertainty.
- [ ] ⚠️ **A house-word trap, now measured: Hockey Canada uses `goaltender` 349
  times and `goalkeeper` 4 times.** A single-word grep of that book on any
  goaltending question returns a false zero. **Acceptance:** recorded in
  `sources/README.md` under the Hockey Canada entry.
- [ ] `the-risk-map`'s caption is **407 words** against a 25–50 target, and
  **cutting it is what caused a real regression this round** — commit `d09b318`
  removed the clause scoping which ice the *"their end"* grade applies to. It is
  the sole carrier of the Sportlogiq scope, the *"coaching consensus not
  measurement"* limit, a negative-existence claim, the greyscale/e-ink caveat and
  the undefined-edges caveat. **Acceptance:** route the greyscale/e-ink caveat and
  the turnover-direction note into `risk_management.md` prose; the caption can
  then safely halve. ⚠️ **Routing, not compression.**
- [ ] `screen-the-goalie-sightline` carries an **operative where-to-stand
  instruction the body does not give in words** — *"keep both feet out of the
  paint, and off the crease line at its edge, which the IIHF, USA Hockey and
  Hockey Canada all count as part of the crease."* A caption is the sole carrier
  of a rule. **Acceptance:** routed into `playing_without_the_puck.md`.
- [ ] `off-the-ice/equipment.md:693` — *"Loaner pools are how most children get
  onto the ice for the first time"*, an unsourced prevalence claim. Source it or
  scope it; **do not delete it** (non-negotiable 3).
- [ ] ⚠️ **`positions/defender.md`'s facts lines sit at 299 and 298 of the
  300-character cap.** An ordinary edit breaks either. Not a defect — a fragility
  to know about before dispatching anyone at that file.

## Workstream 4C: two `sources/README.md` corrections from the rules pass

- [ ] `sources/README.md` records **three** instances of USA Hockey's Rule 610
  lettering disagreeing with itself. **There is a fourth**, in the off-ice-officials
  section, which cites *"Rule 610(c)"* for *"Delaying the game by deliberately
  displacing the goal post"* — printed in the body as **(d)**.
  ⚠️ **The corpus's own `610(c)` citation is SAFE** — Appendix I's Summary lists
  *"610(c) Batting/shooting puck out of rink"*, agreeing with the printed body.
  **Record the fourth instance; change no citation.**
- [ ] ⚠️ **The IIHF Situation Handbook uses *"restricted area"* in the OPPOSITE
  sense to the Rulebook** (already recorded) **and misnumbers the rule twice in
  Situation 27.7.** `defender.md` uses the Rulebook sense throughout and is
  correct. **Worth adding the misnumbering to the Handbook's entry**, so the next
  reader does not resolve it the wrong way.


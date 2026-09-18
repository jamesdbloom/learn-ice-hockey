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
- [x] **DONE, 18 September — the corpus-wide cross-document layer read this
  plan flagged as "the second clearest remaining gap" (see the Content-family
  waves section below) has now had a first pass, sampled rather than
  exhaustive.** A `content-reviewer` agent read 9 documents across 6 of the 8
  `content/` directories in full (body, Key focus, facts blocks, Common
  Mistakes, Key Takeaways, and — for 2 of them — actual rendered `md_to_speech`
  audio chunks), checking whether the 17 September Key Focus rollout's new
  sections agree with the rest of each document. **Six documents confirmed
  clean** (`forechecking_systems.md`, `body_contact_and_battles.md`'s
  checking-from-behind passage, `risk_management.md`, `faceoffs.md`,
  `special_teams.md`, `neutral_zone_systems.md`, `core_principles.md` — every
  prior rollout-fix's propagation held layer-to-layer). **Two Major findings,
  both now dispatched for fix/verification:**
  (1) `team_play_and_culture.md`'s Key focus states a Hockey Canada
  dispute-conduct carve-out ("needs the dispute to be conducted in an
  unsportsmanlike manner") that appears nowhere else in the document — not
  the body's "What gets you a penalty" list, not Common Mistakes, not Key
  Takeaways, not the Sources trailer — making it new authoring rather than a
  promotion of existing content, and currently unsourced within the document
  itself. A `rules-verifier` pass is checking the claim against Hockey
  Canada's primary rulebook text before deciding whether to propagate it
  (if true) or flag/remove it (if not verifiable).
  (2) `body_contact_and_battles.md`'s `## Overview` section stated the
  head/neck-injury protocol without the "helmet stays on — no exception"
  clause that the same document's Key focus, Key Takeaway 8, and dedicated
  safety section all carry — a listener hearing only the Overview's audio
  chunk would miss it. **Fixed directly** (single-sentence addition matching
  existing wording elsewhere in the same document) — **confirmed GO by
  `safety-reviewer`**, who also checked the rest of the same ~1650-line
  document for other instances of the same gap and found one near-miss
  (`:843`, a closing summary sentence inside the dedicated safety section
  itself that doesn't repeat the helmet clause, but sits two paragraphs
  after the full explanation — flagged as a minor, not fixed, since it is
  inside the same tightly-scoped section rather than a distant chunk).
  Second finding — the Hockey Canada dispute-conduct claim — verified
  **TRUE** by `rules-verifier` against Hockey Canada Rule 11.1 (quoted
  directly from `sources/hc_layout.txt`) and **propagated** into the body's
  "What gets you a penalty" list, the Overview, Common Mistakes and Key
  Takeaway 5, which previously stated only the NHL-scoped version as though
  it were universal.
- [x] **DONE, 18 September — a second sampled batch (9 more documents,
  disjoint from the first), fully clean.** `defender.md`, `winger.md`,
  `skating.md`, `shooting.md`, `breakouts.md`, `zone_entries.md`,
  `equipment.md`, `getting_started.md`, and `scanning_and_anticipation.md`
  all showed full layer consistency — every Key Focus claim matched its
  Common Mistakes and Key Takeaways restatement, including the Berg et al.
  scanning-study figures (2,545 receptions, 88 professionals, 78.8%/70.1%,
  with the authors' own yes/no-not-frequency caveat preserved everywhere) —
  the exact study `review_history.md` flags as previously downloaded twice
  and never opened. A `md_to_speech.py` spot-check on 8 of the 9 documents
  found two benign "Verification note:" paragraph deletions (the renderer's
  documented behaviour), both confirmed non-destructive — the substantive
  instruction survives in the preceding spoken paragraph in both cases.
  **18 of 39 documents now checked; a third batch (9 more, different
  directories) is running.**
- [x] **DONE, 18 September — a third batch, also clean.** 10 documents read
  in full (`uk_rules.md`, `language_and_glossary.md`, `defending_the_rush.md`,
  `defensive_zone_coverage.md`, `game_management.md`, `offensive_zone_play.md`,
  `playing_without_the_puck.md`, `center.md`, `switching_positions.md`,
  `passing_and_receiving.md`) plus a substantial partial read of
  `rules_primer.md` (the corpus's largest document — Key Focus, the full
  Body-fouls section, Common Mistakes, and Key Takeaways 1–5; sections 1–3
  and 5–10 not yet read for this purpose). No Critical or Major findings —
  every safety caveat, rule-set scope and numeric provenance disclosure
  checked (the IIHF 2025/26-vs-2026/27 edition ambiguity, the trapezoid
  enforcement uncertainty, `center.md`'s Lignell et al. ice-coverage
  correction, `offensive_zone_play.md`'s royal-road attribution caveats)
  matched across every layer. Two Minor, non-misleading specificity gaps
  named, not fixed (`uk_rules.md`'s WNIHL non-checking claim drops the
  body's "at U16 and senior" qualifier from Key Focus alone). `md_to_speech.py`
  spot-checks on 4 of the 11 documents found zero dropped verification
  paragraphs and zero unrecognised constructs.
  **28 of 39 documents now checked across three batches, all disjoint,
  two real defects found total (both fixed and confirmed).**
- [x] **DONE, 18 September — the final batch, closing full coverage.** The
  remaining 8 documents (`time_and_space.md`, `puck_support_and_spacing.md`,
  `conditioning_and_recovery.md`, `how_to_watch_hockey.md`, `mental_game.md`,
  `practice_and_development.md`, `reading_ice_hockey_diagrams.md`,
  `puck_handling.md`) plus the rest of `rules_primer.md` (sections 1, 2, 3,
  5–10 and Key Takeaways 6–10) were all read and cross-checked. No Critical
  or Major findings. Two Minor, non-misleading gaps named: `how_to_watch_hockey.md`'s
  Key Focus states a six-item statistics checklist where Overview and Key
  Takeaways state seven (missing the "eye test" criterion); `rules_primer.md`
  names the same league two ways across layers ("women's NIHL" in Key Focus/
  Key Takeaways vs. "WNIHL" in the comparison table), substance identical,
  formal name lost to a listener who hears only the summary layers. Neither
  fixed — both are additive completeness gaps, not contradictions, and
  low-priority. `md_to_speech.py` spot-checks on 4 more documents found zero
  dropped verification paragraphs; `rules_primer.md`'s large comparison
  table renders as a spoken pointer by design (the prose says so explicitly
  and names the owning section), not a defect.
  **39 of 39 documents now checked, across four disjoint batches. Two real
  defects found and fixed in the entire rollout** (the body_contact_and_battles.md
  helmet-instruction gap, the team_play_and_culture.md Hockey Canada
  carve-out) — a strong result for a same-day bulk rollout across the whole
  corpus, though every batch flagged the same caveat: this checks a
  document's own layers against each other, not against primary rulebook
  text (rules-verifier's job) or external citations (source-verifier's job).
- [x] **DONE, 18 September — the dedicated `safety-reviewer` pass on
  `conditioning_and_recovery.md` came back clean.** No Critical, Major or
  Minor safety findings. Every primary-rulebook quote checked (USA Hockey
  604(a), Hockey Canada 7.3, IIHF 101.1, all four IHUK competition
  regulations, CRT6's ten red flags rendered from its image-only PDF) was
  verbatim-verified against the source on disk. The document was
  specifically checked against `CLAUDE.md`'s own recorded past hazard for
  this exact document — a graded return-to-sport progression's early "light
  aerobic exercise" stage contradicting a flat activity ban — and found not
  to recur: the current ban text is scoped to "until you have been
  assessed," not to the later graded stage. **One item flagged for
  `source-verifier`, not asserted as a defect**: a cited meta-analysis's
  claimed April 2026 retraction could not be independently confirmed
  (`sources/` holds no file for it, the paper's own page returned HTTP 403)
  — `project/reviews/round_50_tier1_parallel_batch.md` already records this
  citation as "cited and unrefetched" since round 50. The reviewer is
  explicit that this does not change the document's safety verdict either
  way, since the actual reader-facing instruction doesn't depend on the
  retraction being true.
- [x] **CLOSED, 18 September — the Copenhagen-exercise retraction citation
  is CONFIRMED TRUE, not fabricated.** `source-verifier` refetched it
  through four independent channels that don't share the blocked-HTML-
  front-end problem the safety-reviewer hit: the EuropePMC REST API, NCBI's
  own eutils API, and Crossref's publisher metadata all agree the paper
  (PMID 40827942) was retracted, and the retraction notice's own abstract
  text (PMID 41975640, fetched directly) matches both sentences the corpus
  quotes verbatim, including the April 2026 date and the exact volume/issue.
  The corpus's six citation points are accurate as written. This closes the
  one item this workstream's four batches left open.
  **Genuinely still open, never attempted by any pass**: cross-document (not
  just intra-document) consistency between two different documents' Key
  focus sections.

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

⚠️ **RECONCILED, 17 September — every row below was stale.** An independent
read-only audit checked each row against `project/reviews/readability_keyfocus_rollout_2026-09-17.md`,
`principle_matrix_complete_2026-09-17.md`, `READABILITY_AND_DUAL_AUDIENCE.md`,
git history, and the corpus directly (`grep -c "^## Key focus"` — exactly one
per document, all 39). **What actually shipped is narrower than this section
specifies: every document got a `## Key focus` section (the first of six
progressive-disclosure layers this section describes), not the full layer
stack.** ⚠️ **And it shipped before its own stated dependency closed** —
Workstream 1's pilot go/no-go (§1B/§1C above, human usability testing) is
still entirely unchecked. The rollout's own review record says so itself,
because the user explicitly asked for faster, larger-scale progress and the
coordinator proceeded on that instruction rather than waiting for the gate —
a recorded deviation, not an oversight, but it means **"rollout complete"
cannot be declared until that gate is either satisfied or explicitly
waived**.

- [x] **PARTIALLY DONE — no formal freeze record, but not blocking.** No
  document consolidates the current caption standard / metadata schema /
  audience labels / audio contract into one frozen reference; subsequent
  design changes (caption target, placement rule, diagram-after-content
  reversal) were each treated as an owner decision as this row asks, just not
  written up as a single freeze artifact. Low priority — worth a short
  dispatch if anyone needs one source of truth, not blocking further work.
- [x] **DONE (matrix) / PARTIALLY DONE (wave assignment).** The full
  principle-to-corpus matrix for all 39 current documents is complete
  (`principle_matrix_complete_2026-09-17.md`, commit `72e2860`, correct
  39-document count). Documents were disjointly split across 8 agents with a
  collision check (not via `check_readability_census.py partition`), and no
  artifact records the assignment for future reference — low-value gap now
  that the wave itself is done.
- [x] **SUPERSEDED BY EXPLICIT USER INSTRUCTION, not a gap.** The user asked
  directly for faster, larger-scale parallel progress; all 36 remaining
  documents were dispatched in one wave rather than risk-ranked order. Recorded
  as a deliberate, approved deviation in `readability_keyfocus_rollout_2026-09-17.md`.
- [x] **NOT DONE — no per-file census artifact exists for this wave.**
  Mitigated after the fact by a thorough three-dimension review pass, but the
  process step itself was skipped. Not worth redoing retroactively now that
  the wave is reviewed and committed.
- [x] **DONE in substance.** The review record's own findings (a truncated
  USA Hockey quote, a flattened cross-book rule found and fixed at 3 more
  sites, an inconsistent-length parenthetical) are exactly the shape this
  practice produces — agents were refuting briefs and re-deriving from
  primary sources. The literal briefs weren't preserved as separate artifacts.

### Content-family waves

- [x] **PARTIALLY DONE, uniformly, all five waves (A–E).** Every content
  family got a `## Key focus` section — the deliverable that actually
  shipped. None got the fuller per-wave treatment these rows separately ask
  for (Wave C's "recognition cue, player action, why it works, realistic
  alternative" for every system; Wave D's mechanics-to-principles connection;
  etc.) — that fuller stack exists only in the two original pilots
  (`getting_started.md`, `rules_primer.md`). **Genuinely open**: extending
  the full progressive-disclosure stack past Key Focus to the rest of the
  corpus, wave by wave, is real remaining work if the rollout is meant to go
  further than Key Focus alone.
- [x] **NOT TRIGGERED / not applicable to this wave.** No `site/src/diagrams/*.mjs`
  files were touched by the Key Focus rollout (Key Focus sections don't need
  diagrams). A separate diagram-placement initiative (commit `d09b318`) did
  do module-based diagram work, under a different workstream.

### Per-wave completion

- [x] **PARTIALLY DONE.** Only the first layer (Key focus) was added
  corpus-wide; simple summary, recognition cues, worked example, team/rule
  variation, and deeper detail remain pilot-only. Same gap as the
  content-family rows above — one open item, not five.
- [x] **PARTIALLY DONE.** Principle matrix: done, 39/39. Formal
  body/facts/Common-Mistakes/Key-Takeaways/diagrams/siblings/source-trailer/
  spoken propagation matrix per changed principle: not produced as an
  artifact, though specific findings were propagated and tracked narratively
  (e.g. Principle 4's goaltender exception → `scanning_and_anticipation.md`,
  `time_and_space.md`, commit `ba0f164`).
- [x] **NOT APPLICABLE, correctly.** No diagrams were touched by this wave.
  `rink_map.md`'s dedicated value audit remains explicitly deferred per
  `READABILITY_AND_DUAL_AUDIENCE.md`, unchanged.
- [x] **PARTIALLY DONE, 18 September — the word/opener half of this
  measurement now has a real before/after, run against `check_readability_census.py`
  itself rather than eyeballed.** A temporary git worktree at
  `09a7d40~1` (`2518476`, the commit immediately before the rollout) let the
  same tool run on both revisions:
  - **Prose words:** 1,103,758 → 1,117,108 across the same 39 documents
    (+13,350, ~342 words/document average — consistent with a short Key
    Focus section added to each, not a wholesale rewrite).
  - **Diagram-marker openers:** 2 documents opened cold on a diagram marker
    with zero prose before it, pre-rollout; **0 do now** — the rollout put
    Key Focus first in both, closing a real readability defect this same
    tool was built to catch, as a side effect of the wave rather than a
    targeted fix.
  - **Marker count/placement:** unchanged (331 across 32 documents,
    identical before and after) — expected, since Key Focus sections don't
    touch diagrams.
  **What this does NOT close**: minute (reading-time), click, and
  first-action-distance are not things `check_readability_census.py`
  measures at all — those need either a differently-built tool or the
  task-based human testing this plan's own acceptance gate already requires
  (Workstream 1C) and which no proxy measurement can substitute for. The
  word/opener half was the part actually reproducible from git history
  without a human tester; that part is now done.
- [x] **PARTIALLY DONE.** Rules-verifier ✓ (3 more flattened-rule instances
  found, fixed), safety-reviewer ✓ (2 defects fixed, 1 pre-existing found and
  fixed), content/house-style ✓ (1 Major, 2 Minor, fixed). ⚠️ **Facts-reviewer
  was implicitly not needed (no facts blocks touched) but never explicitly
  declared out of scope — the exact silent-dimension failure mode `CLAUDE.md`
  warns about**, worth a one-line addendum to the review record rather than a
  new pass. **Site-reviewer: CLOSED, 17 September.** Full build (51 pages,
  Pagefind indexed, all links resolving), 9 documents across all 7 content
  families checked across viewport/theme combinations, console clean, no
  off-origin requests, theme toggle genuinely persists via `localStorage`,
  ⚠️-prefixed safety callouts inside Key Focus render as a distinct
  bordered/tinted panel with the icon retained (not colour-alone). **One
  Minor found:** three documents (`rules_primer.md`, `body_contact_and_battles.md`,
  `getting_started.md`) place a pre-existing intro heading *before* `## Key
  focus` in their Markdown source, unlike the other 36 where it is the first
  section — a content-ordering inconsistency, not a rendering defect. Routed
  to a fix-and-review pair below.
- [x] **DECIDED AND CLOSED, 17 September — not a defect.** Read all three
  intro headings directly: `rules_primer.md`'s "Hockey has more than one rule
  book", `body_contact_and_battles.md`'s "Which book you are under decides
  what is legal — and the boards do not care", and `getting_started.md`'s
  "Hockey is administered locally, but it sits on a national floor" are each
  that document's load-bearing cardinal-rule/rule-scope statement — exactly
  the non-negotiable-7 framing ("name the system... find out which yours
  is") that the Key Focus bullets immediately after then reference. This is
  the same "orientation content may legitimately precede the highlight
  section" exception the rollout convention already allows for orientation
  diagrams, applied to prose. Left as is; no fix needed.

### Rollout stop/go criteria

- [x] **Standing gate, exercised correctly once, not a task to close.** The
  `forechecking_systems.md`/`body_contact_and_battles.md` checking-from-behind
  contradiction was caught and fixed pre-commit, consistent with this rule's
  intent. No outstanding action.
- [x] **Standing gate, not triggered.** Every fix in the Key Focus wave was
  narrowly scoped to its finding; no renderer or diagram changes occurred.
- [x] **PARTIALLY DONE.** The review record has staged-tree confirmation and a
  full "what this method could not have found" section. Missing: a formal
  matrix reference, the fuller measurement set (see above), a complete
  changed-file list, and explicit in/out-of-scope declarations for
  facts-reviewer and site-reviewer.
- [x] **DONE, 18 September.** The corpus-wide cross-document read of
  principles, summaries and facts against the Key Focus rollout has now run
  in full — four disjoint batches, 39/39 documents, `md_to_speech.py`
  spot-checks on 11 documents, a dedicated safety-reviewer pass on the one
  document flagged as under-reviewed, and independent source verification
  on the one citation flagged as unconfirmed. See this workstream's most
  recent entries above for the full account. Two real defects found and
  fixed across the entire rollout; every disclosure and citation checked
  held up. **What this still does not cover**: cross-document (not just
  intra-document) Key focus consistency, and a full site build/render — no
  pass in this round opened a browser or ran the Astro build, so the
  rendered page and the audio pipeline's actual output remain unverified
  beyond `md_to_speech.py`'s dry-run report.

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
- [x] **CLOSED, 17 September — partially completable, and it paid off exactly as
  predicted.** The original 18 are not individually enumerated anywhere on
  disk (round 81 narrates a class result, not a manifest), so only 3 of the
  17 HELD could be located and routing-checked with certainty — all three
  survive, and two are independently corroborated (not merely un-contradicted)
  by `sources/README.md` itself. ⚠️ **But the routing method caught a real gap
  anyway, exactly where the row predicted it would be found — in the ALREADY
  FALSE one's fix, not in a fresh HOLD.** `center.md`'s "no book states a
  body-checking age" disclosure was found FALSE and fixed at `:613`/`:626`/`:634`
  in an earlier round — but the same unscoped false form survives, unrepaired,
  twice more in the same document (`:665` Common Mistakes, `:735` a numbered
  coaching point), read aloud in a document whose own body elsewhere states the
  correct scoped version. Fixed (`:665`, GO from independent review) — see
  Workstream 2M below for the fix record. Full account:
  [`../reviews/disclosure_routing_retest_2026-09-17.md`](../reviews/disclosure_routing_retest_2026-09-17.md).
  **The 14 unidentifiable HOLDS remain genuinely un-routing-checked** — the
  next pass on this class should re-run `check_disclosures.py --layer facts`
  fresh and route-check that output as a new, honestly-labelled population
  rather than claiming to have covered "the seventeen."
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
- [x] **CLOSED — already satisfied by Workstream 2G's "charging-strides
  completeness gap CLOSED" update.** `forechecking_systems.md` and
  `offensive_zone_play.md` both now name CARHA Rule 52's Note at all 8 sites
  (facts, body, Common Mistakes, Key Takeaways in each), with "four of the
  five books" corrected everywhere that framing appeared. `switching_positions.md`'s
  *"the five books"* framing was re-checked and confirmed to be about
  goalkeeper's-equipment (now at `:303`, *"Four of the five books bar a
  skater from wearing goalkeeper's equipment"*), not charging strides — a
  different, already-correct comparison — so no asymmetry exists there to
  record. Verified directly: `grep -c CARHA` returns 5 and 13 hits
  respectively in the two systems files.
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

- [x] **CLOSED, 17 September — 6 of 23 rows compressed, independently verified
  GO, and the "partial pass" concern this row raised turned out to be the
  wrong shape of risk.** All 23 rows were read and judged individually, not
  skipped: 6 were genuine near-total duplicates of §§1-9 and were compressed
  to consequence + book + rule number; 17 carry unique cross-book synthesis
  not stated in §§1-9 and were correctly left alone. An independent
  `rules-verifier` re-check confirmed every compressed cell against primary
  rulebook text, confirmed the fuller wording survives verbatim in its owning
  §1-9 section for all six, and found **no dropped exception, carve-out or
  condition**. `check_links.py`, `check_facts.py`, `check_absolutes.py`,
  `check_tables.py` all clean/unchanged (table remains correctly dropped from
  the speech layer).
  ⚠️ **New finding from the same review, not acted on:** two of the untouched
  rows (**"Illegal check to the head"** and **"Checking from behind"**) turn
  out to ALSO be near-total duplicates of §4's Rule 48/43 treatment — the
  "unique synthesis" reasoning used to leave them alone doesn't actually hold
  for these two, unlike the other 15 spot-checked/characterized rows. Left
  untouched this round (not wrong, just not yet done); a future pass could
  compress them on the same principle already applied to the six done here.
- [x] **CLOSED, 17 September — checked carefully, no edit made, and that is the
  correct outcome.** A `rules-verifier` read all of §4 and checked every foul's
  ladder across all four books for genuine convergence, spot-verifying the two
  most promising candidates against primary text. **Found no foul where tiers
  and triggering conditions both genuinely converge** — even the broken-stick
  minor, which looks uniform at "2:00 in every book," carries a real divergence
  (USA Hockey's Casebook grants a conditional carry-to-the-bench allowance that
  Hockey Canada and the 2026/27 In-House Rules do not have). Spearing/
  butt-ending's apparent NHL/IIHF convergence is only 2 of 4 books — USA Hockey
  and Hockey Canada each remove a different rung. **§4 is already applying the
  correct compression** (the generic Minor=2:00/Major=5:00 table is stated once
  because those durations genuinely are uniform; the prose beneath it is long
  because that is where the actual divergence lives) — extending compression
  further would risk exactly the false-cap failure this row warned against, at
  the safety-relevant fouls a reader most needs the real answer for. Two
  §10-table rows for the highest-visibility of these fouls (illegal check to
  the head, checking from behind) were separately compressed where the
  duplication was with §4 itself, not the tiers — independently `safety-reviewer`
  cleared: no tier softened, no exception dropped, verified against
  `sources/iihf_rules_2026-27.txt`, `sources/usah.txt`, `sources/usah_casebook.txt`,
  `sources/hc.txt` directly.

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
- [x] ⚠️ **CLOSED — superseded by the row immediately below, which resolves this
  exact finding.** FOUR IHUK Rules of Competition URLs were cited in `content/`
  with NONE in `project/verification/link_baseline.tsv` (812 rows, zero matches
  for any of them). ⚠️ **My earlier row said three — the NIHL 1 & 2 regulation was
  also missing**, found by a `source-verifier` that fetched all four rather than
  the one it was asked about. ⚠️⚠️ **AND TWO OF THE FOUR HAD ALREADY CHANGED
  UNDER THEIR URLs — BACKWARDS.** Refetched 16 September: NIHL went 325,259 →
  542,722 bytes and WNIHL 540,666 → 431,890, and **on both the live `ModDate`
  is EARLIER than the on-disk copy's.** England Ice Hockey **rolled back** to
  the 26 August originals. **So "compare dates and take the later one" is wrong
  for this publisher** — a date comparison says the files differ, not which is
  current. ⚠️ **No corpus quotation was affected; that was checked, not
  assumed** — both checking-format rows are verbatim in both revisions of both
  documents. Full detail in `sources/README.md`.
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
  ⚠️⚠️ **WHY IT WAS NOT CLOSED, AND THIS IS THE FINDING. ⚠️ RETARGETED, 17
  September — this is `### The trapezoid — the rule that defines what you can
  do`, NOT `### Freezing the puck`.** An earlier version of this row did not
  name the section, and a later agent dispatched at "Freezing" independently
  re-derived and confirmed the actual location: the Trapezoid section's facts
  block sits at **11 of 11 facts — the hard cap** — with at most 26 characters of
  headroom on any line and **8 on the `Key:` line that would naturally host it**
  (independently recounted: 26, 2, 3, 8, 14, 2, 17, 21, 13, 2, 12 — matches).
  The CARHA 58(b) content lives in this section's body (`goaltender.md:551`
  area), not in Freezing's, and Freezing's own facts block (9/11, confirmed
  independently) has no CARHA content to propagate. Putting it in the body
  alone creates exactly the body-✓ / block-✗ propagation gap the corpus
  forbids. **The style guide's own remedy is to split the section
  on the seam the body already uses — and that is authoring, not a correctness
  pass.** **CLOSED, 17 September — done and independently verified GO.** Split
  into `### The trapezoid — the rule that defines what you can do` (6 facts: NHL/
  IIHF rule, UK application, centre-red-line material) and a new
  `### No trapezoid doesn't mean no restriction — the freeze under Hockey Canada,
  USA Hockey and CARHA` (6 facts, including the new CARHA 58(b) fact). An
  independent `rules-verifier` re-check confirmed the CARHA fact verbatim against
  `sources/carha.txt`, confirmed both blocks ≤11 facts with every fact within its
  character cap, confirmed every fact traces to its own section's body (no
  cross-section leakage), confirmed the cross-reference links resolve, and
  confirmed no content was dropped or duplicated (paragraph-length arithmetic
  checked out exactly: 11 original facts + 1 new = 12, split 6/6).
- [x] **CLOSED, 17 September — independently re-attacked, HOLDS.** A second,
  genuinely independent search of `sources/hc.txt` and `sources/hc_layout.txt`
  (not just re-reading the first agent's cited clauses) for "forward", "throw",
  "propel" in goaltender contexts found only Interpretation 6 to Rule 10.2(a)
  (*"Where a goaltender has the puck in their glove and throws the puck to a
  teammate, the Referee will stop play, but no penalty will be assessed"*) —
  direction-agnostic, no forward/toward-net distinction, already the clause
  quoted in the document. No Hockey Canada forward-throw clause exists. `check_disclosures.py`
  still won't catch this phrasing — not changed, out of scope for this row.
- [x] **CLOSED, 17 September — small, safe fix made and independently
  verified.** `goaltender.md:391`'s "the two books run in parallel here"
  governs six bullets, not nine (the row's count was stale); two of the six
  relied on the scoping sentence alone rather than naming their book inline.
  Both rule numbers' identical NHL/IIHF numbering was verified against
  `sources/iihf_rules_v1.1.txt` before adding "NHL and IIHF" directly into
  those two citations, so each bullet is now self-sufficient regardless of
  TTS chunk boundaries. No further restructuring attempted or needed.

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
- [x] **DECIDED AND CLOSED, 17 September.** Re-checked fresh: the two facts
  (now `:352-353` and `:421-423`) are already byte-identical — the drift this
  row described no longer exists. **Decision: keep both as full, independent
  facts, do not point one at the other.** Each sits under its own section
  with its own supporting body prose (extract-never-author requires a fact
  trace to its own section, not the document), facts are voiced in isolation
  with no cross-section jump available to a listener, and this exact
  neighbourhood already produced one critical from a split (Workstream 1H).
  No edit made; independently re-verified GO.
- [x] **DECIDED AND CLOSED, 17 September, same reasoning as above.** The
  shorthanded exemption's two facts blocks (a headline mention plus a
  dedicated four-book drill-down immediately below it) are a legitimate
  summary-then-detail structure, not bare repetition, and each traces to its
  own section's body. Left as is.
- [x] **CHECKED AND CLOSED, 17 September — not a defect.** The Overview's own
  body prose already forward-points to the dedicated Trapezoid section a few
  lines later (*"the retrieval section below sets out what each one does to
  your job"*), and the Overview's own paragraphs state the core rule and
  exception directly rather than leaving the facts unsupported. No fix
  needed.
- [x] **DECIDED AND CLOSED, 17 September — cut, pointed, independently
  verified GO.** The ~150-word trapezoid-dimension derivation was trimmed to
  its conclusion (dimensions, "measure from 1.8 not 27.8", the 2014-15
  dating point) plus a link to `rink_map.md#the-trapezoid-goalkeepers-restricted-area`,
  confirmed to carry the fuller geometry and reasoning. An independent
  `rules-verifier` re-check confirmed the retained dimensions and the
  1.8-vs-27.8 claim against `sources/nhl_rules.txt` directly, confirmed the
  link resolves, and confirmed no rules-operative content (the penalty
  citation, the skate-contact exception, the IIHF carve-outs) was lost — all
  of that lives in the untouched preceding paragraph of the same blockquote.
  ⚠️ **New finding, not fixed here (different file, out of scope):**
  `content/systems/breakouts.md:917` still reads *"Handled the same way in
  [Defender]... and [Forechecking Systems]"* — no longer true for Defender,
  which now points onward rather than repeating the full derivation. Needs a
  one-line fix by whoever next holds `breakouts.md`.
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
- [x] **ANOTHER PASS DONE, 17 September — three more fixed, independently
  verified GO, class still standing open by design.** A full read of all 27
  facts blocks (228 lines) in `defender.md`, one fact at a time as if heard
  alone, found and fixed three dangling antecedents: an "all five books"
  claim naming only three (added the NHL/IIHF citation, verified verbatim
  against `sources/nhl_rules.txt` and `sources/iihf_rules_v1.1.txt`
  Rule 27.7/27.6); a bare "the angle" with no referent inside its own fact
  (renamed to the actual subject, matching the neighbouring fact's wording);
  a bare "20.3" with no book name where a sibling clause had just named two
  books (added "NHL", and independently confirmed this isn't cosmetic — NHL
  20.3 requires a stoppage, IIHF's own 20.3 does not, so the unqualified
  citation was genuinely ambiguous). One borderline case (`:138`, CARHA
  58(b)/61(b) contrast) found and deliberately left alone as not misleading.
  ⚠️ **The class remains open by its own nature** — this is a corpus-wide
  invisible-to-every-gate defect shape, not a per-document task with an end
  state; each pass narrows it for the file it covers, and the standing row
  stays to remind the next agent to run the same reading, not to grep for
  "the fix."

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
- [x] **CLOSED, 17 September — real defect, wrong location named, found and
  fixed.** ⚠️ **Nor does the tool test whether a verbatim quotation is the RIGHT
  quotation** — whether the cited rule number prints those words, whether the
  edition is current, or whether truncating at the chosen point changes the
  rule's meaning. The line numbers this row named (`:1467`/`:1468`,
  "checking-from-behind") were stale and pointed at the wrong clause entirely —
  a `source-verifier` re-check found no truncated quote there at all. **The
  same defect pattern was real, one clause over:** the `Rule:` fact for Hockey
  Canada 10.4(e) (now `:1471`) quoted *"...while a fight is occurring on the
  ice"* and stopped, dropping *"or for the purposes of starting a fight"* — an
  independent ground for the same Game Misconduct — while the document's own
  body prose 13 lines later (`:1485`) already quotes the clause in full.
  Verified verbatim against `sources/hc_layout.txt:6276-6278`. Fixed by
  restoring the full clause into the fact (294/300 chars). `check_facts.py`,
  `check_links.py`, `check_absolutes.py` all clean.
  ⚠️ **A second flagged line (`:1480`, attributed to USA Hockey Casebook Rule
  629 Situation 1) was checked and confirmed a `check_quote_drift.py` false
  positive**, not a defect: the tool's closest-match-across-all-sources
  behaviour matched it against NHL 70.1's near-identical wording instead of
  its actually-cited source; `sources/usah_casebook.txt:14974-14975` confirms
  the Casebook's own sentence is verbatim as quoted, terminal period included.
  Not a corpus defect and not actioned. **Not swept corpus-wide** — whether
  other documents repeat the same Hockey Canada 10.4(e) truncation is
  unchecked; a candidate for a future row if anyone wants it.

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
- [x] ⚠️ **CLOSED, 17 September — investigated by `rules-verifier`, genuinely
  unresolved, no corpus change needed.** The back of the net is **outside the
  crease**, and NHL/IIHF **63.2(i)** reaches "any player, including the
  goalkeeper... to deliberately cause a stoppage" there, while **85.2 names
  only a faceoff** for the same act. Searched both full rulebooks for any
  interpretive-hierarchy statement (`notwithstanding`, `supersede`,
  `precedence`, `govern(s)`) and found none bearing on this pair; no NHL
  casebook exists on disk at all to check further; the IIHF Situation
  Handbook has no entry matching this exact fact pattern. **Genuinely
  unresolved from primary sources — not a corpus defect.** The existing
  wording ("NHL and IIHF 85.2 name no penalty for smothering it") only
  describes 85.2's own text and does not claim 63.2(i) is thereby excluded,
  so no edit was needed. Full account in
  [`../reviews/goaltender_backofnet_and_boardsthrow_2026-09-17.md`](../reviews/goaltender_backofnet_and_boardsthrow_2026-09-17.md).
- [x] **CLOSED, 17 September — fixed and independently verified (GO).** Added
  the interpretive-Handbook caveat to both the body-prose and Common-Mistakes
  versions of the lateral-throw passage in `goaltender.md`: the IIHF's
  minor-penalty ruling comes from Situation Handbook 67.2, not from the bare
  Rule 67.3(III) text, and the Handbook itself ranks below the Rulebook in
  any conflict ("in case of any contradictions, the valid IIHF Rulebook is
  always the basis" — its own Foreword). Re-verified against
  `iihf_rules_v1.1.txt`, and Situation 67.2 across the v1.1, v1.0 and 2026/27
  Situation Handbook editions. Record above.
- [x] **CLOSED, 17 September — fixed and independently verified (GO).**
  `content/systems/faceoffs.md:183` now carries the USA Hockey / Hockey
  Canada divergence (both add a minor on top of the NHL/IIHF faceoff-only
  answer) with a pointer to Goaltender's full four-book comparison.
  Re-verified against `nhl_rules.txt`, `usah_casebook.txt` Rule 610 Situation
  8, and `hc.txt` 6.12(b)/10.1(a). Record above.
- [x] **CLOSED, 17 September.** `sources/README.md`'s `carha.txt` row now
  records CARHA Rule 37(e) (goaltender centre-red-line participation,
  `carha.txt:1811-1813`) and Rule 58(b) (goaltender freezing behind the goal
  line, `carha.txt:2812-2817`); Rule 61(b) flagged as quoted correctly but not
  independently re-verified, so a future reviewer knows its exact status
  rather than re-deriving from scratch.

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

- [x] **CLOSED, 17 September — re-censused fresh rather than trusting the "eight"
  figure, and six of the eight had already been fixed by intervening commits.**
  `body_contact_and_battles.md` and `shooting.md` now consistently read "above
  **the** U13," which does not trigger the doubling (confirmed by rendering the
  regex behavior: it only fires directly after a bare preposition/article, not
  after "the"). No article-based instance (`a U15`, `an U18`) remains in either
  file. **Two live instances remained, both new content in `rules_primer.md`**
  not present at the 16 September census (the "Accidentally knocking your own
  net off" comparison row and its prose): `:145` "below U18 AAA" → "at every
  level younger than U18 AAA"; `:917` (inside a table already dropped from
  speech by `check_tables.py`, fixed anyway for page correctness) "Below U18
  AAA" → "Younger than U18 AAA." Pure paraphrase — no rule scope touched,
  confirmed by reading the diff directly: neither the quoted rule text (Rule
  6.1(g), Rule 6.7(d)(i)) nor the category list changed, only the word
  introducing "categories other than these."
- [x] **DONE, 17 September.** Both recast sentences were rendered through
  `scripts/md_to_speech.py`'s `spoken_text()` directly: before ("below U18 AAA"
  → "below under eighteen AAA," the doubling defect) and after ("younger than
  U18 AAA" → "younger than under eighteen AAA," clean). The full in-situ
  paragraph at `:145` was also rendered end-to-end and reads cleanly.
- [ ] ⚠️ **Two false positives, recorded so nobody "repairs" them:**
  `playing_without_the_puck.md`'s *"625(a) under minors alone"* — the `a` is a
  **sub-clause letter** — and `team_play_and_culture.md`'s *"covered below under
  Captains and Leadership"*, which is ordinary English. **Both verified by
  rendering.**

## Workstream 2M: the flattened cross-book parallel — a new class

### ⚠️ NEW, 18 September — the IIHF crease-line divergence flattened in the SPOKEN facts layer, corpus-wide

#### ⚠️⚠️ A REPAIR MADE ONE CHUNK WORSE, AND IT IS THE SAME DEFECT IT WAS DISPATCHED TO REMOVE

`rules_primer.md` Key Takeaway 9 (`:1139`). **Before the repair the headline and
its follow-up were CONSISTENTLY wrong about the IIHF. The repair fixed the
follow-up and left the headline** — converting a consistent error into a
**contradiction inside one spoken chunk**, which is precisely what the repair was
dispatched to remove from the Common Mistakes chunk. That chunk is now clean;
this one is not.

Rendered, a listener hears these consecutively:

1. *"…under the NHL and IIHF the goal crease is what decides it — **the region, not
   the painted line around it**."*
2. *"…off the red line around it, which **three of the four books count as part of
   the crease**…"*
3. *"…what puts the line inside the crease is … **IIHF Rule 1.7**…"*

Sentence 1 says the painted line is not what decides under the IIHF. IIHF Rule 1.7
(`sources/iihf_rules_v1.1.txt:631`) says *"The marked line belongs to the Goal
Crease"*, and sentences 2 and 3 say so in the same breath.

⚠️ **A second, subtler half:** what *is* true of both books is their **appendix
situation tables** — and this document says at `:732` that those are *"appendix
interpretations rather than operative rule text."* The headline promotes them to a
book-level statement of what "decides it", for a book whose operative rule says the
opposite.

- [ ] **Rewrite the Key Takeaway 9 headline.** ⚠️ **Constraint, not wording — the
  agent holding the file writes the sentence against the surrounding prose.** The
  headline must not assert, for the IIHF, that the painted line is outside what
  decides. If the tables' answer leads, attribute it **to the tables**, and the
  1.7 conflict must reach **the same clause** rather than arrive two sentences
  later. **The safe instruction — off the line, which holds under all four — is
  already in sentence 2 and is what should survive unqualified.**
  ⚠️ **Penalty consequence, so this is not cosmetic:** a listener acting on
  sentence 1 alone screens with a skate on the red line. USA Hockey 625(b)
  (`sources/usah.txt:4503-4505`) is a **flat position bar** — no goal may be scored
  with an attacking player in the crease, **whoever scored it** — so it voids a
  *teammate's* goal with no impairment to judge.

- [ ] **`rules_primer.md:734` — the section's boldface last word still stops at the
  paint.** `:733` ends *"keep clear of the line as well as of the paint"*; the very
  next line is *"**Get in the goalie's eyes; keep your skates out of the blue
  paint.**"* Same spoken chunk, so the qualification is one sentence away — **but
  this is the sentence built to be remembered**, and the repair did not reach it.

#### ⚠️ THE CAP IS THE SYMPTOM, NOT THE CONSTRAINT — a structural finding left for the coordinator

`body_contact_and_battles.md:1068` **cannot be repaired within its cap.** It sits at
**296/300**, and the two things a `facts-reviewer` asked for — the *"Rule 69 is a
judgement call by its own terms"* gloss (~45 chars) and a `shooting.md:452`-style
*"a table row, not rule text"* qualifier on Situation 5 E (~22 chars) — need ~67
characters that do not exist. **The style guide's own remedy is to split into two
facts, and the block is at `HARD_MAX` 11.**

⚠️⚠️ **THE AGENT NAMED THE REAL FINDING AND DECLINED TO ACT ON IT UNBRIEFED:**
*"Whether `HARD_MAX` 11 is the right cap for §Attacking the net front. I worked
inside it. **The block being full is the evidence that the section is doing two
jobs**, and I treated that as a constraint rather than as the finding it probably
is."*

**§Attacking the net front does two jobs** — net-front coaching, then four-book
screening exposition — **and its body already has the seam**, at the *"Screening is
normally legal"* bullet.

- [ ] **Decide whether to split the section on that seam.** ⚠️ It changes a heading
  and its anchors, so `check_links.py` and every inbound cross-reference are in
  scope. **This is a coordinator decision, not an agent's.**
  ⚠️ **The generalisation is the valuable part: a block stuck at `HARD_MAX` is
  evidence about the SECTION, not about the block.** Wherever a repair reports "no
  slot", ask whether the section is doing two jobs before asking what to evict.

#### ✅ CENSUS: is `607(c)` ever attached to the crease alone? — the repaired files are CLEAN

Ran as a **layer test**, body and ` ```facts ` separately, after the tree went quiet.
**Every `607(c)` mention in the repaired documents now carries *"privileged area"***
— `zone_entries.md` at `:296`, `:306`, `:318`, `:327`, `:354`, `:374` all OK.

⚠️ **Three facts lines share a shape that needs READING, not sweeping:**
`playing_without_the_puck.md:617`, `shooting.md:291` and `:490` all open *"Charging
a goalkeeper **who is in their crease**…"*. ⚠️ **That is probably CORRECT** — it
describes a charge *inside* the crease, a true subset, rather than claiming the
crease is the rule's outer boundary, which was the defect. **The distinction is
exactly the one a sweep would destroy.** Candidates, not findings.

#### ✅ CENSUS: "a facts line that states a conflict and gives no instruction" — CLEARED, and the discriminator is reusable

An agent observed that this layer test *"has, as far as I can tell, never been
run"*. It has now. ⚠️ **The interesting part is that the obvious pattern does not
work and a narrower one does.**

**Loose form** — any `Rule:`/`Convention:` line containing a conflict word
(*but, while, however, allows, neither, differ…*) and no instruction verb:
**251 hits. Useless.** ⚠️ **Most are CORRECT**: a `Rule:` fact whose whole job is to
state a cross-book divergence needs no instruction — *"Kicking the puck is legal —
NHL and IIHF 49.2 — but USA Hockey 627(a) needs no kicking motion at all"* is the
fact, not a defect. **A sweep on this pattern would have damaged the corpus.**

**The discriminator that works: does the line's FINAL clause loosen?** Because a
facts line is voiced alone, **the last thing heard is what a listener carries
away.** Two hits corpus-wide:

- `systems/forechecking_systems.md:437` — **false positive.** *"going the other
  way"* describes a winger's movement, not a rule permission.
- `systems/special_teams.md:97` — ends on *"only the NHL's 1.7 is silent"*, **but
  opens with *"Keep both feet outside the red crease line"***. Instruction first,
  nuance last: **the corpus's accepted form, and correct.**

**So the defect has no remaining instance.** `playing_without_the_puck.md:588` was
the only one and is repaired.

⚠️ **Keep the discriminator, not the result.** The result goes stale on the next
edit; *"does the final clause loosen"* keeps working, and it generalises past the
crease line to any facts line pairing a rule with its exception.

#### ⚠️ A CAP JUDGEMENT THAT WAS WRONG BECAUSE IT ASSUMED ADDITION

A `facts-reviewer` judged `special_teams.md:97` could not carry an edition stamp —
*"six characters of headroom"* — and that leaving it was right. ⚠️ **The agent
holding the file refuted that: the judgement assumed ADDITION.** By **substitution**
— `its Appendix IV table` → `its 2025/26 Table 16` — **the line got SHORTER**,
294 → 293, and gained the edition.

⚠️ **This matters beyond one line.** *"It will not fit"* has been the stated reason
for leaving several near-cap lines unrepaired today. **Before accepting it, try
substitution: a more precise phrase is often shorter than the vague one it
replaces.** ⚠️ **The rule against trading out a caveat stands unchanged** — that
forbids removing a *claim*, not tightening a *phrase*.

#### ⚠️ STILL OPEN — a new instance of the same class, found by the agent repairing it

`special_teams.md:1029` contains *"runs no such test"*, which **refers to the
previous facts line and therefore refers to nothing when voiced alone.** ⚠️ **Same
defect class as the MAJOR that agent was sent to fix, in a line it was editing.** It
left it deliberately: **fixing it self-containedly costs characters the 300-cap does
not have.** ⚠️ **It needs a slot freed or a split — not a patch.**

#### ⚠️⚠️ FACTS REVIEW, 18 September — ONE CRITICAL, THREE MAJORS. NOT YET REPAIRED.

The commit-gate blocked partly because **D10 was never reviewed.** It has now run.
**Every finding below is open**; the repair wave was held because a `site-reviewer`
build was live and editing `content/` mid-build is a documented race.

**CRITICAL — `technique/body_contact_and_battles.md:1060`. THE CAP EVICTED A
RULEBOOK FACT.** The block is at `HARD_MAX` 11, so the give-ground duty could not be
added as a `Rule:` fact and was folded into a neighbouring `Technique:` line as a
subordinate clause — *"but never against the goaltender: in the crease, give ground
at once"* — **with no rule number, no book and no penalty.** NHL 69.3
(`sources/nhl_rules.txt:7203-7208`) is mandatory: *"the attacking player **will
receive** a minor penalty for goalkeeper interference"*, goal or no goal. ⚠️ **Voiced
alone it is a coaching preference sitting between `Mindset:` and `Position:` facts.
Following the facts layer alone earns a penalty.** ⚠️ **It is an INCOMPLETE REPAIR,
not a regression** — the block carried nothing on this before. **The fix must free a
slot from the coaching half and state the duty as a `Rule:` fact.** ⚠️ **Which slot
is the document owner's call, not the reviewer's.**

**MAJOR — `systems/zone_entries.md:295`, `:316`, `:351` drop *"privileged area"*.**
USA Hockey 607(c) (`sources/usah.txt:3679-3682`) reaches *"within the goal crease
**or privileged area**"*, and 607(d) adds that a goalkeeper is **not** *"fair game"*
outside it. All three bodies quote it in full; **all three facts attach 607(c) to a
clause whose only marker is *"a goalie in his crease"*.** ⚠️ **`rink_map.md`'s own
Common Mistakes names this exact trap.** `:351` is worst — it also drops 69.2's
*"inside or outside the goal crease"*. Two have headroom; `:351` has two free
`HARD_MAX` slots, **so split rather than compress.**

**MAJOR — the harshest book is missing from the SECTION, not just the block.**
Hockey Canada 8.5(b) (`sources/hc.txt:7009-7010`) — *"A Major penalty and Game
Misconduct penalty **will** be assessed to any player who charges the goaltender"* —
**mandatory, and keyed to no area of ice at all.** `zone_entries.md` carries it in
Common Mistakes and Key Takeaways but **not in the §wide entry or §middle drive
bodies**, so under extract-never-author it correctly appears in no fact. ⚠️ **Fix the
BODY first; the fact then follows.** A Hockey Canada reader currently hears three
facts about a rule set that is not theirs and nothing about the book that ejects
them automatically.

**MAJOR — `hockey-iq/playing_without_the_puck.md:588` is the only crease-line fact
in the corpus that ends PERMISSIVE and carries no instruction.** It closes *"…both
allow a goal on the line — so the IIHF answers the same play in two directions."*
⚠️ **All five siblings open or close with the instruction** (`offensive_zone_play.md:538`,
`special_teams.md:97`, `zone_entries.md:294`, `body_contact_and_battles.md:1068`,
`shooting.md:452`). Its `Position:` sibling carries it — **and siblings are exactly
what a listener does not have.** 52 characters of headroom; nothing need be traded.

**Minors worth keeping:** `playing_without_the_puck.md:561` and
`special_teams.md:1029` share a *"flat position bar … unless"* shape that
self-contradicts voiced alone (`time_and_space.md:448`'s *"with three narrow
carve-outs"* is the corpus's better form); `body_contact_and_battles.md:1068` lost
its *"is a judgement call by its own terms"* gloss to the 296/300 cap and does not
say a Situation is a **table row rather than rule text** (`shooting.md:452` is the
model); `special_teams.md:97` cites *"its Appendix IV table"* with **no number and
no edition**; `winger.md:453` and `special_teams.md:1035` sit at **197/200** with
nowhere to go.

⚠️ **A CORRECTION TO THE DISPATCHER, AGAIN.** The brief said `special_teams.md:97`
was *"deliberately left unchanged"*. **It was changed** — `git diff` shows it. The
294/300 figure was right; the word was not. **The reviewer's substantive judgement
on it still holds.**

⚠️⚠️ **THE REVIEW'S OWN LIMIT, AND IT IS THE FINDING THAT OUTLIVES THE ROUND:**
*"Nothing I did tests the facts layer against the RULEBOOKS; it tests it against the
BODIES, and where a body is short the block inherits the shortness and I call it
traceable."* **A section whose body omits a rule set's harsher answer, in a document
whose summary layer also omits it, passes a facts review clean** — it found the
Hockey Canada gap only because that document's Key Takeaways happened to carry it.

#### ⚠️⚠️ A NEW CLASS — THE CLAIM IS TRUE, THE **LAYER** IT IS ATTRIBUTED TO IS WRONG

Found 18 September while clearing a commit-gate BLOCK. Four documents said the
crease-line instruction *"rests on the **three books' rule text**."*

⚠️ **Only ONE of the three answers in rule text.** Verified against primary text:

| Book | Where it actually answers | Layer |
|---|---|---|
| IIHF | `sources/iihf_rules_v1.1.txt:631` | **rule text** ✓ |
| USA Hockey | `sources/usah.txt:4509` — a **Note** to 625(b); `sources/usah_casebook.txt:1568-1571` — a **Casebook situation** |
| Hockey Canada | `sources/hc.txt:959-961` — the **Glossary**. ⚠️ Its own **Rule 1.5(c)** (`sources/hc_layout.txt:905`) uses **the NHL's looser formula** |

**Every individual book fact was right. The sentence generalising them was wrong**
— and no checker can see that, because `check_quote_drift.py` locates quotations
and cannot see **attribution drift**, and `check_facts.py` checks shape.

⚠️ **It propagated to at least four files and, inside one of them, to three layers**
— body, a **Key Takeaway**, and the verification notes — where the notes paragraph
sat **at the end of the very passage that names the Note, the Casebook and the
Glossary and thereby disproves it.**

⚠️ **Getting the layer right makes the corpus's point STRONGER:** nothing in any of
the four books says what status its own Notes, Casebook situations, Glossary
entries or reference tables have relative to its rule text. **That unresolvable
ranking is exactly why the conservative reading is the safe one** — a much better
argument than a false claim of unanimity in rule text.

- [ ] **Census the corpus for layer-attribution claims** — sentences of the form
  *"X books' rule text"*, *"the rules say"*, *"both books' rules"* where the support
  is a Note, a Casebook, a Glossary or an appendix table. ⚠️ **No tool finds these.
  They need reading.** ⚠️ **And `sources/README.md` records that no book states the
  authority of its own appendix tables**, so any sentence ranking layers is
  suspect by construction.

#### ⚠️ THE LAYER-ATTRIBUTION CENSUS — 55 candidates, the corpus is mostly CAREFUL, and none of the rest is verified

Run by the coordinator on 18 September after every content agent had stopped.
Method: every `rule text` / `rule texts` mention with a multi-book word (*three,
four, both, all, other, those*) inside a 90-character window either side.

**55 windows.** The crease-line instances are repaired. ⚠️ **The remainder LOOK
careful and are NOT verified** — recorded that way deliberately, because declaring a
census clean on appearance is the exact mistake the coordinator made earlier the
same day and the commit-gate caught.

⚠️ **What is genuinely reassuring is that the corpus already draws this distinction
by hand, repeatedly and unprompted:** *"appendix interpretations rather than
operative rule text"*, *"a casebook interpretation, not rule text"*, *"take those as
worked applications and not as rule text"*, *"read those as worked applications
rather than rule text"*. **The crease-line failure was an outlier, not a systemic
habit.**

- [ ] Verify the multi-book rule-text claims that are **not** crease-line. The
  checkable ones name specific rule numbers, so a `rules-verifier` can settle each:
  `systems/defending_the_rush.md:649` and `:661`,
  `technique/passing_and_receiving.md:418` and `:766`,
  `systems/defensive_zone_coverage.md:588` (⚠️ **a different rule — delay of game,
  not the crease line** — flagged by an agent as looking sound but unverified).
  ⚠️ **Reproduce the census rather than working from this list; it goes stale.**

⚠️⚠️ **THE CENSUS'S OWN LIMIT, AND IT IS THE IMPORTANT PART.** The agent that
repaired two of these files found the defect in **five** places, not the two its
brief named — and **the two it did not know about were phrased differently**
(*"in their rule text"*, *"rule texts all"*) from the string its brief gave it. **It
only learned to look for those after reading its own files.** So this census's
pattern set was derived from the phrasings already found, and **a document stating
the same thing a sixth way matches nothing in it.** No tool closes that gap; only
reading does.

#### ✅ A NEGATIVE EXISTENCE CLAIM, ATTACKED RATHER THAN INHERITED

An agent re-tested the corpus's *"the one place the NHL's book addresses the crease
line"* instead of trusting the owner. Whitespace-flattened, `crease lines?` occurs
**four times in the whole NHL book** — three in Rule 1.7 (dimensional) and one at
Table 14 Situation 5 E. `lines? of the crease`, `marked line`, `line belongs`,
`crease is marked` → **0 each**. **The claim holds.**

⚠️ **Recorded because non-negotiable 4's *"never strip an honest disclosure"* had
been read as *"never test one"*** — the Workstream 2B lesson, applied correctly for
once. ⚠️ **Its own stated limit: a string census cannot see a row describing the
same geometry in different words.**

#### ⚠️ A CAP THAT COULD NOT CARRY THE FIX, AND THE AGENT SAID SO

`special_teams.md:97` is a `Rule:` facts line at **294 of 300** carrying the
defensible scoped form. It **cannot** carry the Table 14 nuance. The agent **left it
and reported**, rather than trading out a caveat to make room — the correct outcome,
recorded here because **the wrong outcome is invisible**: a traded-away caveat looks
like a clean edit and passes every checker.

#### ⚠️⚠️ A CAPTION GRANTS PERMISSION THE RULEBOOK DOES NOT — Rule 69 keyed on the wrong player

`site/src/diagrams/zone_entries.mjs:190` says what risks the goal is *"any contact
once **you** are in the crease, and more than incidental contact outside it."*
**Both limbs are keyed on the ATTACKER's position. Both rules are keyed on the
GOALKEEPER's.** Verified by the coordinator in the primary text:

- **NHL 69.3**, `sources/nhl_rules_layout.txt:6085-6088` — contact *"incidental or
  otherwise, **while the goalkeeper is in his goal crease**"*, goal disallowed.
- **NHL 69.4**, `sources/nhl_rules_layout.txt:6110-6113` — *"any contact … other
  than incidental contact, **while the goalkeeper is outside his goal crease**"*.

⚠️ **The error is not symmetrical and one direction is UNSAFE.** Where the
goalkeeper is **in** the crease and the attacker **outside** it, the rule
disallows the goal for contact *"incidental or otherwise"* — but the caption reads
that case as "outside" and **permits incidental contact the rule does not
permit.** The reverse case is merely over-strict.

⚠️ **`content/systems/offensive_zone_play.md:557` already states it correctly**, so
this is a TRANSMISSION error — a rule the corpus states correctly elsewhere coming
out wrong in a spoken layer. ⚠️ **No gate covers it:** `check_absolutes.py` reads
captions from the build product, and nothing checks a caption's rule claim against
a rulebook. Dispatched 18 September.

#### ⚠️ THE COORDINATOR OWES A WHOLE-CORPUS CREASE-LINE LAYER DIFF, AND NOTHING ELSE CATCHES IT

Four agents wrote crease-line sentences into six documents on 18 September, each
correct in isolation, each unable to read the others' live files. ⚠️ **Two agents
writing individually-correct, jointly-contradictory sentences is this repository's
recorded failure** — `239f70d` exists for it — and **no checker sees it.**

- [ ] **After EVERY agent has finished and every file is staged**, diff the
  crease-line layer across the whole corpus and read the results side by side:
  body, ` ```facts `, Common Mistakes, Key Takeaways, and the four shared captions.
  ⚠️ **This is the coordinator's and cannot be delegated to any of the agents that
  wrote the text** — a repair cannot self-certify, and none of them could see the
  others' files.

#### ⚠️ A CHECKER RACE, OBSERVED RATHER THAN THEORISED

`check_absolutes.py` exited **2** on one agent's first run (*caption layer
uncertified, 0 units*) and **0** on its last (*408 units*), **with no edit of its
own** — `site/src/data/diagrams.json` was rebuilt by a different agent mid-round.
⚠️ **The agent ran no build and did nothing wrong.** This is the concrete instance
of the standing rule: **a checker result taken while agents are live proves nothing
in either direction.** The only run that counts is after every agent has finished
and every file is staged.

#### ⚠️ A FOURTH INSTANCE THE BRIEF DID NOT NAME — found by reading the render

`rules_primer.md:720`: *"**The practical instruction is the same under all four and
the reason differs:** get out of the paint."* Chunk 167's **isolated closing `<p>`
before a 500 ms + 700 ms break** — the same shape as the `:734` defect, and **under
a sentence explicitly claiming all four books**, when under three of them the line
is crease. ⚠️ **The brief named three instances and there were four. The fourth was
found by rendering, not by grepping** — which is the method note, not the count.

- [ ] ⚠️ **`check_tables.py --near` puts `rules_primer.md:815` at ZERO rows of
  headroom** (66 characters spare). **Any edit adding a row silently costs a
  listener the whole table.** Also near-limit: `risk_management.md:488`,
  `body_contact_and_battles.md:74` and `:1350`. ⚠️ **Run the tool — these are the
  figures it printed on 18 September and they go stale the moment anyone edits a
  table.**

#### ⚠️ THE NEXT ROUND'S SCOPE, named by the reviewer that could not reach it

A `content-reviewer` layer-tested the **summary layer of all 39 documents**
exhaustively — every facts line, Common Mistakes bullet, Check-yourself item and
Key Takeaway — and found **16 documents carry the crease-line instruction.** It
read the **body layer of exactly one**, `rules_primer.md`.

⚠️⚠️ **The worst defect it found in that document was a BODY sentence, and it found
it by reading §7 whole rather than because its method looked there:** `:734`, the
section's emphasised closing line, gives *"keep your skates out of the blue
paint"* — the pre-repair form — one sentence after `:733` says *"keep clear of the
line as well as of the paint."* Its own `<p>`, followed by a 700 ms break.

**So: fifteen documents carrying this instruction have unread bodies, and the one
body that was read contained a defect.**

- [ ] Run the same layer test over **body paragraphs**, specifically the **short
  emphasised closing sentence of each section** — that is where both this defect
  and `shooting.md:830`'s live, and **no checker and no facts-layer tool can see
  it.** ⚠️ **One-for-one is not a rate** and must not be quoted as one; it is a
  reason to look, not a prediction.

#### ⚠️ NINE MORE EDITION-LESS IIHF TABLE CITATIONS — and a reviewer's claim that did not survive

A `content-reviewer` reported it had enumerated **all 41** IIHF table citations in
the corpus and that **every one but two carried its edition.** ⚠️ **That did not
survive contact.** A single-line-window census returns **nine** more candidates:

`foundation/rules_primer.md:414, :695, :1075` · `foundation/uk_rules.md:230, :326` ·
`positions/goaltender.md:548, :1118, :1458` · `technique/shooting.md:916`

⚠️ **Two are the same species as the Table 16 trap, not noise.** `sources/README.md:137`
records that old Tables 5/6/7 **merged into one Table 5** in 2026/27 and everything
from Table 9 shifts **−2**. So a bare **"IIHF Reference Table 6"** and a bare
**"IIHF Table 13"** (13 → 11) are **edition-dependent exactly as Table 16 is** — and
like Table 16, a bare number does not fail, it resolves successfully to the wrong
table.

- [ ] Verify and fix the nine. ⚠️ **Candidates, not findings** — the census is a
  **single-line regex window** and cannot see an edition carried in a neighbouring
  paragraph or in a facts line above the hit, so some are probably fine. **Read each
  in context.** ⚠️ **And it cannot see the inverse defect at all: a citation carrying
  an edition that is WRONG. Nobody has checked for that.**
  ⚠️ **Do not "correct" an NHL table number to match an IIHF one** — both books have
  a Table 14 and they are different tables.
  ⚠️ **Check the cap before editing a facts line — see the two-cap warning in Common
  execution rules.** A `Key:` line at 197/200 cannot absorb an edition stamp.

#### ✅ Census that CLEARED a worry — recorded so nobody re-runs it

**Second census, 18 September — the two-book form was down to ONE line, and a
sweep would have caused damage.**

`offensive_zone_play.md:1127` (Key Takeaway 5) was the **only surviving two-book
crease-line form anywhere in `content/`**. Every other layer already carried the
three-book version — `rink_map.md:18`/`:357`, `shooting.md:293`/`:452`/`:477`,
`winger.md:536`/`:748`, `playing_without_the_puck.md:585`/`:926`,
`body_contact_and_battles.md:1068`, and `offensive_zone_play.md`'s own `:538` and
`:553`. **Propagation had reached every layer but one: body ✓, facts ✓, summary ✗**
— which is the shape the reviewer predicted. Fixed 18 September.

⚠️⚠️ **THREE HITS LOOK LIKE THE SAME DEFECT AND ARE NOT. A SWEEP WOULD HAVE
DAMAGED ALL THREE.** `center.md:408`, `special_teams.md:1108` and
`offensive_zone_play.md:614` name USA Hockey without the IIHF because each is
**correctly scoped to a single book** — a passage discussing one book naming one
book is right. This is the `check_rule_scope.py` lesson restated: a tool that
ranked these and offered to fix them is how round 44 manufactured a divergence
that did not exist.

#### ⚠️ A BRIEF OF MINE WAS WRONG AGAIN, AND THE AGENT CAUGHT IT

I told the agent that `offensive_zone_play.md:563` carried the NHL/IIHF *"significant
position … more than an instantaneous period of time"* narrowing. **It does not.**
`:563` is the Table 14 / Situation 6 D **penalty-disagreement** paragraph. The
narrowing lives at **`:557` (body), `:535` (facts), `:565` (blockquote), `:1062`
(Common Mistakes) and `:1127` (Key Takeaway)** — five layers, none of them `:563`.

**Anyone propagating that narrowing must be given those five, not `:563`.** The
narrowing itself was verified correct against `sources/nhl_rules_layout.txt:6100-6107`
and the IIHF equivalents — **do not change it.**

⚠️ **One typographic hazard for whoever propagates it:** the **IIHF prints
`"significant position"` inside its own quotation marks and the NHL does not.** The
corpus never quotes the IIHF's version, so nothing has drifted — but a copy-paste of
the NHL string attributed to **both** books is exactly the shape
`check_quote_drift.py` cannot see, because it keeps the closest match across all
sources and is blind to attribution drift.

- [ ] ⚠️ **Nobody has measured when a spoken Key Takeaway stops being a takeaway.**
  Takeaway 5 in `offensive_zone_play.md` was already the longest in that document
  and the fix added roughly eighty words. **Every mechanical gate passes on that and
  none of them can see it.** `check_chunk_splits.py` and `check_chunk_tails.py`
  measure splits and tails, not whether a summary item has grown past the point of
  summarising. **Acceptance:** a chunk-length census of the summary layers, with a
  stated threshold, or a recorded decision that no threshold is wanted.


The verifier could not reach whether the *"USA Hockey's and Hockey Canada's rather
than the NHL's or the IIHF's"* flattening had propagated before today. **It had
not.** A corpus-wide grep finds the formulation in `rules_primer.md` only, now
repaired. The other documents state the three-of-four form or the IIHF split
correctly.


**Found while reviewing the `zone_entries.md` crease repair.** The IIHF answers
one question in two directions: **Rule 1.7** says *"The marked line belongs to the
Goal Crease"*, while **Appendix IV Situation 5 E** allows the goal for an attacker
planted *"on the crease line"*. ⚠️ **Table 16 in the 2025/26 edition, renumbered
Table 14 in 2026/27** — `sources/README.md:137` records that a bare "Table 16"
resolves against the *current* book to Overtime, so the edition must be named.

**Reproduce the census** (do not quote a count from this row — run it):

```bash
# every ```facts line stating the crease line, and whether its document
# discloses the IIHF's internal contradiction anywhere
grep -rn 'crease line' content/ | grep -viE '^\S+:[0-9]+:\*?Rink specifications|Rules:'
```

**What the census found on 18 September, in kind rather than in total.** Every
document that states the rule **does** disclose the contradiction *somewhere* — so
this is **not** a corpus that gets the rule wrong. ⚠️ **But only two facts lines
carry the hedge IN THE LINE** (`offensive_zone_play.md:538` and
`shooting.md:452`), and **a facts line is voiced alone, in its own `<p>`, with a
300 ms break either side.** The rest state the three-book agreement flat.

⚠️ **The best form in the corpus is `body_contact_and_battles.md:1068`**, which
puts *"the red crease line is unsettled"* **inside the facts line itself**. That is
the shape to propagate, and it already exists — nothing needs inventing.

⚠️ **`special_teams.md` is the sharpest case and shows why a document-level grep
clears it wrongly.** `:97` states the IIHF settled; `:1035` is a *different facts
block*, ~940 lines away, stating *"NHL Table 14 and IIHF Table 16 answer 'Goal is
allowed' at 5C and 5E."* **Both are spoken, neither is near the other, and a
listener never hears them reconciled.** A document grep sees a hedged document. A
**layer test** sees two facts lines in tension.

- [ ] Bring the flat facts lines into line with
  `body_contact_and_battles.md:1068`'s form. Candidates from the census:
  `playing_without_the_puck.md:585`, `special_teams.md:97`,
  `zone_entries.md:294` (already dispatched as part of its own repair), and
  `center.md:368`. **Verify each line number before acting — they go stale.**
  ⚠️ **Acceptance is NOT "mention Situation 5 E".** It is that a listener hearing
  the line **alone** does not take away a settled rule the corpus's own owner
  document calls unsettled.
  ⚠️ **DELETE NOTHING and do not weaken the instruction.** Staying off the line is
  the conservative reading under either answer, every document already says so,
  and the IIHF contradiction is an argument **for** the instruction, not against
  it. This is an attribution fix, not a rule change.
  ⚠️ **Check headroom first** — the cap is 300 characters and `check_facts.py`
  enforces it; `offensive_zone_play.md:538` shows the hedged form fits in ~255.

- [ ] ⚠️ **The shared diagram caption flattens it too**, and four captions carry
  it — see Workstream 4D's second row. Same defect, different layer, and it must
  not be fixed by editing the constant without checking its importers.


**Owner:** coordinator found it; `rules-verifier` was dispatched on
`positions/goaltender.md`, `defender.md`, `center.md`, `winger.md`.
**Evidence:** both books read on disk 16 September; wording quoted below.

- [x] **CLOSED, 17 September — `center.md:665` fixed, independently verified GO.**
  The false "no published checking age at all" claim (found by the disclosure
  routing re-test above) was corrected to match the already-correct sibling
  passages at `:626` and `:634`: neither rule book states one, but IHUK
  publishes one per league in its Rules of Competition. `check_links.py`,
  `check_facts.py`, `check_absolutes.py` all clean; the untouched second
  occurrence at `:735` was independently re-checked and confirmed already
  correctly scoped.
- [ ] ⚠️ **NEW FINDING from the same review: `center.md`'s own Sources trailer
  (`:763`) is stale and now self-contradicts the body it is supposed to
  document.** It reads *"...the IHUK In-House Rules 2025-26 and 2026-27 and
  England Ice Hockey's Rules & Regulations on disk contain no body-checking
  provision at all... so no British junior or recreational restriction is
  stated here"* — a sentence that predates (commit `fda5dc5`) the later fix
  (commit `f2e5fa0`) which correctly added "IHUK publishes one... in its
  Rules of Competition" at `:626`/`:634`/now `:665`, but never touched the
  trailer. **The trailer's "no restriction is stated here" now flatly
  contradicts the body's "IHUK publishes one."** `f2e5fa0`'s commit message
  says the same partial-propagation pattern may also affect
  `body_contact_and_battles.md`'s and `faceoffs.md`'s Sources trailers — not
  checked. **Acceptance:** `center.md:763` updated to match the body, and
  the two named sibling documents checked for the same gap.

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

- [x] **CLOSED — the missing citation is now present at both sites.**
  `systems/special_teams.md:334` and `:1018` both now cite **CARHA Rules 58(b)
  and 61(b)** together for the "not freeze it out there" limit (61(b) is the
  location-free clause — *"deliberately holds the puck and in the opinion of
  the Referee, is causing an unnecessary stoppage of play"* — that reaches a
  corner in front of the goal line where 58(b)'s "behind the goal line"
  condition does not), with the intent-word divergence from USA Hockey 614(c)
  (no intent word) stated explicitly at both sites. **The narrower question
  left open above — whether 61(b)'s "unnecessary stoppage" test is in
  practice narrower than 58(b)'s location test — remains genuinely
  unanswered** (no CARHA casebook or interpretation exists on disk to settle
  it) and is not claimed either way in the document.
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

- [x] **CLOSED, 17 September — the split this row asked for was already done,
  correctly, under a different heading.** A `rules-verifier` re-checked this row
  fresh and found it stale: the "Freezing" facts block is not at 11/11 (9 of 11,
  independently recounted with per-line headroom of 3–182 chars), and the 618(c)
  definition, the wedge geometry, and the closed-hand/open-hand side/rear
  permission were already added today in a new `### Throwing the puck forward`
  subsection with its own 4-fact block (`goaltender.md:413-423`) — not merged
  into Freezing. Independently re-verified against `sources/usah.txt:4261-4268`
  (Rule 618(c)) and `sources/usah_casebook.txt` Situations 8 and 9, both
  verbatim, including the word "forward" and the defending-zone qualifier that
  an earlier `safety-reviewer` pass flagged as Critical. **This row's "Freezing"
  attribution was itself the stale part** — see the retargeted row below, which
  is where the real 11/11 gap actually lives.
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
- [x] **CLOSED, 17 September — recorded where a reader meets the rule,
  independently verified.** `### Throwing the puck forward` now discloses
  that no NHL casebook exists in this corpus, so "forward" is undefined
  under the bare NHL rule text, distinguishing it from the IIHF (Situation
  Handbook exists but ranks below its own Rulebook) and USA Hockey (Casebook
  defines the word). Independently confirmed via `ls sources/*.txt` and
  `sources/README.md` — no NHL casebook/interpretive volume exists anywhere
  in this corpus's source set — and the new sentence is carefully scoped
  ("no NHL casebook is held here," not "does not exist"), matching what the
  README actually supports.
- [x] **RECORDED AND CLOSED.** Two disclosures re-tested this round and
  UPHELD, recorded so nobody re-opens them: `risk_management.md:651` and
  `defensive_zone_coverage.md:602` both assert the word *"catch"* appears in
  USA Hockey's volume only in the goalkeeper's equipment specifications, in
  618(c) and in the Sled Hockey Pusher Rules. **Eight hits, all accounted
  for, with a positive control.** And the Hockey Canada forward-throw
  negative held a **fifth** time.
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

- [x] `hockey-iq/playing_without_the_puck.md` chunk boundary 1→2 puts a **300 ms
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
- [ ] ⚠️⚠️ **MAJOR (upgraded from Minor) — dead scroll regions. BOTH PRIOR
  VERSIONS OF THIS ROW WERE WRONG, IN OPPOSITE DIRECTIONS, and a full
  52-route sweep on 18 September settled it.** Measured `scrollWidth` vs
  `clientWidth` on every `[role="region"]` wrapper, site-wide:

  | Viewport | Dead (announced, does not scroll) | Genuinely scrolling |
  |---|---|---|
  | **1440** | **141** | **2** |
  | **375** | **16** | **132** |

  ⚠️ **This row previously said "three `div.diagram-scroll` and two
  `div.table-scroll`" at 1440 — that was ONE PAGE's count quoted as the
  site's. The site figure is 141.** ⚠️ **And the Workstream 3D row that
  corrected this one said "four dead tab stops survive at 375". Those four
  reproduce exactly, but 3D only checked three pages — there are 16, on 14
  pages.** At 1440 the announcement carries no information at all: 141 false
  against 2 true. Severity is Major on that ratio, not Minor.

  **Verified as a real keyboard no-op, not just a measurement:** focused a
  `div.diagram-scroll[role="region"]` labelled *"Diagram, scrollable
  horizontally"* and pressed ArrowRight six times. At 1440 (`scrollWidth`
  792 = `clientWidth` 792) `scrollLeft` stays **0** — the focus ring draws
  and nothing moves. At 375 the same element (640 vs 346) scrolls to 240.

  ⚠️⚠️ **THE CAUSE STATED IN THE PREVIOUS VERSION OF THIS ROW WAS WRONG, AND IT
  WAS MY BRIEF THAT WAS WRONG — CORRECTED 18 SEPTEMBER AFTER A FULL REBUILD AND
  A 31-ROUTE CDP CENSUS.** The row said the diagram attributes were applied
  *"blanket"* and unconditionally. **They are not.** `remark-corpus.mjs` gates
  them on `d.half === false`, and its comment is **correct** that this matches
  the only CSS rule carrying `overflow-x: auto`. Nothing in either plugin is
  blanket for diagrams.

  **The real cause is sixty lines away in a different file**, and neither rule
  knew about the other:
  - `site/src/styles/global.css` — `@media (min-width: 60rem)` sets
    `figure.diagram--full .diagram-scroll svg { min-width: min(640px, 100%) }`.
    Above 960 px the sheet **fits its column and stops overflowing**, so
    **all 94 diagram tab stops are dead above 960 px by construction** — and
    **0 of 94 are dead at 375.** The two rules were written months apart in the
    same stylesheet. ⚠️ **The plugin was never the diagram defect.**
  - `site/src/plugins/rehype-corpus.mjs` — genuinely unconditional on every
    `<table>`. **This is the entire 375 residue**, and 47 of the 49 dead table
    stops at 1440.

  ⚠️ **A THIRD DEFECT NEITHER MEASUREMENT NOR EITHER BRIEF NAMED.** The
  `--tall` label *"scrollable horizontally and vertically"* is a guess twice
  over: a capped table that fits horizontally at a wide viewport scrolls
  **vertically only**, and the build has no way to know. A third label is owed.

  **Population is 143, not 141** — 49 `.table-scroll` + 94 `.diagram-scroll`.
  141 and 16 are the *dead* counts and both reproduce exactly.

- [x] **CLOSED 18 September — moved to
  [`project/reviews/scroll_regions_site_round_2026-09-18.md`](../reviews/scroll_regions_site_round_2026-09-18.md),**
  which names every file and carries the measurements. Verified in headless Chrome
  across 31 pages × 12 viewports: **0 dead and 0 missing tab stops at every width**,
  with the before-state reproduced exactly.

  ⚠️ **The band premise in the row above is HALF WRONG and the record corrects it:**
  there *is* extra overflow at 960 and 1248 and the script correctly adds attributes
  back — **but it is a TABLE, not a full sheet. Zero diagrams overflow at any width
  ≥ 768**, so the `min(640px, 100%)` floor holds and `global.css`'s own comment is
  now imprecise.

  ⚠️ **Read the record's blind-spot list before treating this as settled:** no screen
  reader was run, Chrome only, **the production CSP and CloudFront rewrite were never
  seen**, the service-worker upgrade path is untested, and `data-scroll-region`
  remains an unguarded seam no checker covers.
- [ ] **MINOR — the shaded region is weak in greyscale.** 210 against 233 mean
  luminance, a 9% separation. It does not depend on colour alone: it is bounded by
  the painted red line and the wall, and the label sits inside it. ⚠️ **If ever
  adjusted, raise the fill alpha rather than restoring a stroke** — the whole point
  of the repair was that every edge is a real boundary.
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

- [x] ⚠️ **DONE, 18 September — VERIFIED IN PIXELS, not derived from the CSS.**
  Printed `body_contact_and_battles` (148 pages) from a browser with
  `localStorage.theme='dark'`, rasterised at 110 dpi, and diffed against the
  same document printed light: **148 pages, 0 differing pixels, max delta 0.**
  Byte-identical rasters. Per-layer ink measured against paper that itself
  measured pure `(255,255,255)`:

  | Layer | Darkest ink | Contrast | Was (16 Sept) |
  |---|---|---|---|
  | ` ```facts ` blocks | `(27,28,30)` | **17.05:1** | 148/255, ~3:1 |
  | ⚠️ callout panels | `(0,0,0)` | **21.00:1** | faintest on page |
  | Links | `(0,0,0)` | **21.00:1** | **1.26:1** black-on-dark |

  Element census under print media across three documents: **13,432 text
  elements, 0 below 4.5:1** (previously 1,832 below). The `(18,18,18)` margin
  band is gone — margins print `(255,255,255)`. **The safety layers are now
  the darkest text on the paper rather than the faintest.**
- [x] **FIXED, 18 September — a latent cross-browser gap the same pass found.**
  The print block's selector was `:root, :root[data-theme]`, which reaches a
  reader who explicitly chose dark but **not** one with no `data-theme`
  attribute on an OS set to dark — there `:root:not([data-theme='light'])`
  inside `@media (prefers-color-scheme: dark)` is (0,2,0) and outranks both.
  Forced under CDP media emulation, that state printed the facts layer as
  near-white ink, diverging on **129 of 148 pages, max delta 174**.
  ⚠️ **It does NOT reproduce in Chrome, and that was proved rather than
  assumed** — a CSS-only probe confirms Chrome prints with a light preferred
  colour scheme, so the media query never matches and the 129-page figure is
  reachable only by forcing it. It is live in any browser that *does* honour
  `prefers-color-scheme` while printing — the Safari/Firefox case the file's
  own comment already flagged as untested. Fixed by adding
  `:root:not([data-theme='light'])` to the print block's selector list, where
  it wins on source order; rationale recorded in the comment beside it.
  **Still owed:** an actual Safari and Firefox print check, which no pass has
  ever run.

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

- [ ] ⚠️⚠️ **NEVER WRITE "THE 300-CHARACTER CAP" IN A BRIEF. THERE ARE TWO CAPS.**
  `scripts/check_facts.py:76-77`: `MAX_LEN, MAX_LEN_QUALIFIED = 200, 300` and
  `QUALIFIED = {"Rule", "Convention"}`. **Only `Rule:` and `Convention:` get 300.**
  `Key:`, `Position:`, `Action:`, `Never:`, `Technique:` and `Options:` get **200**.
  ⚠️ **And the checker measures the value AFTER the label, not the whole line.**

  ⚠️ **The spec had this right all along** — `project/content_style_guide.md:853`
  reads *"200 characters at the outside. `Rule:` and `Convention:` may run to 300,
  because a citation and a hedge are both mandatory."* **The dispatcher did not read
  it, and told FIVE agents on 18 September that the cap was 300 flat.** One was
  editing a `Key:` line with **11 characters of headroom, not 111**; it measured
  rather than trusting the brief, and its fix fitted at 197/200 with 3 to spare.
  **Had it trusted the brief it would have written a line the checker rejects — or,
  worse, traded out a caveat it thought it had room to keep.**

  ⚠️ **This is a ROUTING defect, not a diligence one.** A brief that states a wrong
  constraint produces an agent working to a wrong constraint. **Cite the checker and
  the style-guide line; do not restate the number from memory.**

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
- [x] **CLOSED, 17 September.** Re-measured against current `sources/hc.txt`
  (unchanged: `goaltender` 349, `goalkeeper` 4) and recorded in `sources/README.md`
  under the Hockey Canada entry.
- [x] **CLOSED, 17 September — routed and cut, independently verified GO.**
  The greyscale/e-ink caveat, the "their end" ice-scoping clause (the exact
  regression `d09b318` caused), and the undefined-edges caveat were moved into
  three new `risk_management.md` prose paragraphs; the Sportlogiq scope,
  "coaching consensus not measurement," and the negative-existence claim were
  confirmed already present elsewhere in the prose, not unique to the caption.
  Caption cut from 407 to 55 words. An independent `diagram-reviewer` pass
  verified the "their end" clause against the diagram's own zone polygon
  (confirms it geometrically covers the net-front ice the clause discloses),
  confirmed the greyscale luma claim arithmetically, confirmed only this one
  diagram's build output changed, and confirmed nothing else the old caption
  carried was lost. One stale internal code comment it flagged was also fixed.
  `check_absolutes`, `check_links`, `check_facts`, `check_geometry` all clean.
- [x] **CLOSED 18 September — THE ROW'S PREMISE WAS FALSE. The body was never
  silent.** `screen-the-goalie-sightline` was recorded as the sole carrier of an
  operative where-to-stand instruction. A layer test (` ```facts ` lines
  extracted and tested separately, not a document grep) found
  `playing_without_the_puck.md` carrying it in **three** spoken layers — body
  prose at `:596`, the `Position:` facts line at `:585`, and Key Takeaway 7 at
  `:926` — and carrying it **more richly than the caption does**: the caption
  names three books, the body names three books *with operative wording and rule
  numbers* and adds the contrast that the NHL alone leaves it unsaid. All three
  book quotations re-verified against primary text on disk (IIHF 1.7, USA Hockey
  Note to 625(b), Hockey Canada Glossary), and NHL 1.7 confirmed to write the
  near-identical sentence **without** USA Hockey's *"(including crease lines)"*
  parenthesis. ⚠️ **The row appears to have been written from the caption alone,
  without reading the owner** — the failure this plan's own "refute the brief"
  instruction exists to catch, and it was caught by it.

  ⚠️ **The caption STAYS.** `md_to_speech.py:663` voices `"Diagram. " + caption`
  and nothing else; `describe` is never voiced and there is no cross-caption
  reference mechanism in speech. Cutting the clause would remove a safety
  counterweight from a listener's ears while leaving the page unchanged.
  `check_caption_echo.py`'s docstring category 3 — a safety limb repeated is
  repeated on purpose — covers it exactly.

- [ ] ⚠️ **THE ROW ABOVE WAS AIMED AT THE WRONG DOCUMENT, AND THE REAL ONE MAY
  STILL BE OPEN.** The caption string is not local: it is the shared constant
  `CREASE_LINE_IS_THE_CREASE`, exported from
  `site/src/diagrams/rule69_clauses.mjs:79` and imported by **four** modules —
  `playing_without_the_puck.mjs`, `zone_entries.mjs`, `positions.mjs` and
  `offensive_zone_play.mjs` (verified by `grep -ln` on 18 September). Only
  `playing_without_the_puck.md` has been layer-tested. **The other three
  modules' host documents have never been checked, and any one of them could be
  the sole-carrier case this row was reaching for.**

  ⚠️ **And the shared constant is a trap for whoever acts on it:** editing
  `CREASE_LINE_IS_THE_CREASE` to fix one caption silently changes **four**
  captions across three modules. Anyone dispatched here must be told that.
  **Acceptance:** each host document layer-tested; where its body is genuinely
  silent, the instruction routed into the body and propagated, with the NHL's
  silence preserved. Dispatched 18 September.
- [x] **CLOSED, 17 September.** No source (this document's own Sources trailer,
  a sibling document, or a limited external check) supports the "most children"
  population-scale claim — only that taster sessions commonly use loaner gear,
  which the already-cited USA Hockey Try Hockey For Free quote does support.
  Reworded to state the supported claim and explicitly disclose the unmeasured
  part as "this guide's own observation rather than a measured figure,"
  matching the style guide's own established pattern for this exact failure
  (its trapezoid and forecheck-personnel passages retract identical
  unsourced-prevalence framings the same way). Not deleted, per non-negotiable 3.
- [ ] ⚠️ **`positions/defender.md`'s facts lines sit at 299 and 298 of the
  300-character cap.** An ordinary edit breaks either. Not a defect — a fragility
  to know about before dispatching anyone at that file.

## Workstream 4D: captions spoken into documents that do not own them — a class, with a tool

**Opened 18 September 2026.** This is the generalisation of the
`screen-the-goalie-sightline` row above, and it is much larger than that row was.

### The measurement

`site/src/data/diagrams.json` gives each diagram **one** `owner`. But
`![](diagram:id)` markers embed a diagram in as many documents as want it, and
`md_to_speech.py` voices `"Diagram. " + caption` **in every host**. So a caption's
audience is the set of HOST documents, not the owner.

⚠️ **No figure is written here. Run `python3 scripts/check_caption_hosts.py` — it
is its own owner and prints them.** A count of an actively edited corpus goes
stale silently, and this plan has been burned by that repeatedly. What the tool
reported on the day it was written, for shape only: a substantial minority of
diagrams are embedded in more than one document, and the resulting
caption/non-owner-host pairs number in the low hundreds, of which roughly 60% carry
rule-stating wording. **Every one of those is invisible to an audit keyed on
`owner`.**

Two things the census checked and found **clean**, so nobody needs to re-check
them: no diagram is built but embedded nowhere, and no owner document fails to
embed its own diagram.

### Why it matters, in the one case that has been tested

The `screen-the-goalie-sightline` audit cleared its `owner`
(`playing_without_the_puck.md` carries the crease rule in three layers) and
stopped. A later layer test of the **other** hosts found
`systems/zone_entries.md` was a **genuine sole carrier**: the body sends a support
player "driving the net" and a middle driver "at the net" and **never says where
the drive stops.** The crease boundary existed only in the caption. A listener
hearing the body without the figure was driven at the goaltender with no boundary
at all. Repaired 18 September; under review.

### Results so far — FOUR hosts tested, THREE defects, and one was not the predicted shape

| Host tested | Keyed how | Outcome |
|---|---|---|
| `hockey-iq/playing_without_the_puck.md` | `owner` | **clean** — body carries it in three layers, more richly than the caption |
| `systems/zone_entries.md` | marker | ⚠️ **sole carrier.** Body drove a player at the net with no stopping point |
| `technique/body_contact_and_battles.md` | marker | ⚠️ **sole carrier**, and worse — see below |
| `foundation/rules_primer.md` | marker | ⚠️ **a DIFFERENT defect the method found anyway** — see below |

⚠️ **`body_contact_and_battles.md` is the sharpest case for why `owner` is the
wrong key.** Its body **deferred the boundary to another document** (*"see Rink
Map"*) and then, in the next breath, stated the permission: *"out there all four
leave the clean screen alone."* Its facts line ended *"And the crease line itself
is unresolved"* — a tension with **nothing to act on**, voiced alone. Common
Mistakes, Check yourself and Key Takeaways carried nothing. The only instruction
was in a caption that `md_to_speech._diagram_is_away` announces as **another
document's figure**.

⚠️⚠️ **`rules_primer.md` was NOT a sole-carrier case, and it is the most important
result here.** Its body was already correct. Its **Common Mistakes and Key
Takeaways said the requirement was *"USA Hockey's and Hockey Canada's rather than
the NHL's or the IIHF's"* — dropping the IIHF from the three books that state
it** — contradicting the owner document, contradicting its own body, and
**contradicting itself one clause later in the SAME rendered speech chunk**, which
names IIHF Rule 1.7 as one of the three.

**That is a body-✓ / summary-✗ propagation failure — the corpus's most-recorded
shape, the one every critical in round 10 was — and the caption-host sweep found
it by accident.** ⚠️ **So the method's value is not confined to sole carriers. The
layer test is what finds these; the caption census is only what routes an agent to
the document.**

⚠️ **Four hosts is not a rate and must not be quoted as one.** What it establishes
is that the class is real and that `owner` misses it.

### The trap for whoever works it

⚠️ **Caption text is frequently a SHARED CONSTANT.**
`site/src/diagrams/rule69_clauses.mjs:79` exports `CREASE_LINE_IS_THE_CREASE`,
imported by four modules. **Editing it to repair one host silently rewrites four
captions across three modules.** Before changing any caption text:
`grep -ln '<CONSTANT>' site/src/diagrams/*.mjs`.

### Rows

- [ ] Work `check_caption_hosts.py --rule-like --by-host` down, **one agent per
  host document**, each agent owning its host `.md` exclusively. ⚠️ **The decision
  is a LAYER TEST on the host** — body prose, ` ```facts ` block, Common Mistakes
  and Key Takeaways extracted and read *separately*, because body ✓ does not imply
  block ✓ and both live in the same file. **A reused diagram is the normal case and
  most hits will be correct**; the tool reports where to look, it does not decide.
  Start with the highest-count hosts the tool prints, since they concentrate the
  exposure.
- [ ] ⚠️ **A known defect in the shared constant, found but NOT fixed.**
  `rule69_clauses.mjs:79` states flatly that *"the IIHF, USA Hockey and Hockey
  Canada all count [the crease line] as part of the crease."* IIHF Rule 1.7 does
  say it — but IIHF Appendix IV **Table 16 in v1.1** (Situation 5 E) is reported to
  **allow** the goal for an attacker planted *"on the crease line"*, and
  `systems/offensive_zone_play.md:553` and `:565` record this as *"the unresolved
  edge"*, answered *"in opposite directions inside one book."* **The caption
  presents as settled what the corpus's own owner document says is not, and four
  captions carry it.** ⚠️ Deliberately NOT dispatched yet: a diagram-module edit
  needs `build-diagrams.mjs` before `check_absolutes.py` can see it, and a site
  build was live. **Acceptance:** the caption states the divergence, or the owner
  document is shown to be wrong. ⚠️ Name the IIHF edition — `sources/README.md:137`
  records that a bare "Table 16" resolves against the *current* book to Overtime.
- [ ] `owner` is still the right field for **numeric ownership** and for
  `check_links.py`. This workstream does not propose changing it — only that a
  coverage audit must not be keyed on it. Fold that into
  `project/review_process.md` when the class is worked, not before.

## Workstream 4C: two `sources/README.md` corrections from the rules pass

- [x] **CLOSED, 17 September.** Fourth instance confirmed directly against
  `sources/usah.txt`: the off-ice-officials Linesperson duties (`:3166`) cite
  *"Rule 610(c)"* for *"Delaying the game by deliberately displacing the goal
  post"*, while the printed body's goal-frame-displacement clause is **(d)**
  (`:3776-3779`); printed (c) is the puck-out-of-rink clause. The corpus's own
  `610(c)` citation was re-verified separately as safe — Appendix I's Summary
  (`:5198`) agrees with the printed body — and was not touched. Recorded in
  `sources/README.md`'s `usah_casebook.txt` row; no content citation changed.
- [x] **ALREADY RECORDED — no action needed.** Checked directly: the "restricted
  area used in the opposite sense" note at `sources/README.md` already documents
  the Situation 27.7 double misnumbering (both the question's "Rule 28.8" and
  the answer's "Rule 27.8", against the correct 27.7) in full, with the correct
  number given. This row's premise — that it still needed adding — was stale.


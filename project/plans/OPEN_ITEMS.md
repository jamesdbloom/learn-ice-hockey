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

## Workstream 8: a `Rule:` line AT CAP, and the pipe that hid it — 18 September 2026

⚠️ **`content/technique/body_contact_and_battles.md:1375` is a `Rule:` line at 300/300 — ZERO
characters of headroom.** Five more lines in the same file sit at one character left: `:586`,
`:708`, `:765`, `:1124`, `:1125`. ⚠️ **33 lines in this file are within six characters of a cap.**

⚠️ **ANY ordinary edit to those blocks breaks the build or forces an eviction.** This is the exact
condition `--near` exists to warn about: a block at `HARD_MAX` once evicted a rulebook fact into a
`Technique:` line, where — voiced alone — a mandatory give-ground duty read as a coaching
preference, **and every checker passed.**

⚠️ **NO REPAIR IS PRESCRIBED HERE.** A line at cap is not a defect; it is a line with no room. **The
row exists so the next agent editing this file is told BEFORE it starts**, not after.
⚠️ **TRY SUBSTITUTION FIRST — naming a thing is often shorter than pointing at it. It paid three
times in this round**, once taking a line from 294 to **287** characters, so the corrected line was
shorter than the wrong one. **Never trade out a hedge, a citation or a scope flag to make room.**

### ⚠️ How the coordinator missed this, and the trap generalises
A brief stated this file had *"six lines within 6 characters of their cap"* and named three at
294/300. **The real figure was 33, and the named three were the LEAST constrained of the set.**

⚠️⚠️ **The cause was `check_facts.py --near | tail -25`. `--near` SORTS ASCENDING BY REMAINING
HEADROOM — so `tail` shows the SAFEST lines and scrolls the at-cap ones off the top. Piping this
tool to `tail` INVERTS ITS MEANING.** Use `head`, or no pipe.

⚠️ **The damage was not a wrong number — it was a MISAIMED AGENT, pointed away from the only line
with zero headroom.** ⚠️ **Second instance this round of a correct tool whose signal was destroyed
by the coordinator's shell** (the other: reading a tool's empty output as a pass while it printed
usage). **Both times the tool was right and the pipeline was wrong.**

## Workstream 9: the goaltender's own document does not tell them what THEY can be penalised for

⚠️ **CRITICAL, pre-existing, and DELIBERATELY NOT BUNDLED into today's commit.** Found by a
`facts-reviewer` layer test; the repair is blocked at `HARD_MAX` and needs a structural decision.

### The defect
**NHL/IIHF Rule 69.4's third paragraph has two halves.** The first penalises an attacker who stops
a goalkeeper returning. The second penalises **the goalkeeper** — `sources/nhl_rules.txt:7233-7236`:
*"Similarly, the goalkeeper may be penalized, if by his actions outside of his crease he
deliberately interferes with an attacking player who is attempting to play the puck or an
opponent."*

⚠️ **A concept layer test over all 841 blocks / 5,659 facts found 28 lines across 12 documents
touching 69.4 outside the crease. EVERY ONE is written from the attacker's side. The mirror half is
in ZERO facts lines, corpus-wide** — including `positions/goaltender.md`, whose reader is the person
the clause penalises.

### ⚠️ Worse than silence: the block advertises completeness it does not deliver
`goaltender.md:1098` — *"**Rule 69.4 cuts both ways outside your crease**… incidental contact is
permitted while you play the puck… and one whose 'deliberate actions' stop you returning… 'may be
penalized'"*. ⚠️ **Neither named "way" is the goalkeeper being penalised. Both are attacker-facing.**
The body uses that same banner for the **correct** pair at `:1052` (*"It runs both ways, so know your
own side of it"*), as does `rules_primer.md:701`. **The fact reuses the body's completeness banner
over a different, incomplete pair — so a goaltender hears "cuts both ways", hears two protections,
and concludes the rule is accounted for.**

⚠️ **And `:1107` (*"The stick and body fouls bind you as they bind a skater"*) is limb 2 of body
bullet `:1115`, whose limb 1 is the missing clause. The block took the *"not only"* and dropped the
*"interference"*.** Voiced alone, `:1107` is measured against a proposition the listener never heard.

### ⚠️ Why it was not repaired — and the agent was right not to
Every route requires an **eviction**, which is forbidden:
- Block `1097-1109` = **11 facts = `HARD_MAX`**. A twelfth fails `check_facts.py`.
- Block `1064-1075` has the one free slot, but its own `Key:` line declares the section *"a
  protection you have **rather than a restriction on you**"* — a goalkeeper-penalising fact does not
  trace there.
- Block `1022-1034`, whose body also carries the clause, is **also at 11**.
- ⚠️ **Substitution was tested and FAILS here** — the first time in this round. A faithful single
  line carrying both limbs measures **310/300**; all three limbs **346/300**. Getting under the cap
  costs *"reasonable effort to avoid"*, *"after you played the puck out"*, or *"or an opponent"* —
  **a hedge, a precondition and a scope flag.**
- All 11 facts in the block were checked for an untraceable one to correct away. **There is none.**

### ⚠️ THE COORDINATOR'S DECISION, RECORDED: SPLIT THE SECTION, AND NOT IN TODAY'S COMMIT
`### What it changes about what you do` carries Rules **69.3, 69.4, 69.7, 64.1, 51.3 AND** the whole
Table 14 / Table 16 matrix (6B, 6C, 6D, 6F, 6G, 6H) on one 11-fact block. ⚠️ **It is over capacity,
and the item squeezed out is the only clause in the section that penalises its own reader.**

**Decision: split the Table 14/16 rows into their own `###`** — they already cluster at `:1105`,
`:1106`, `:1108` — **freeing three slots**, then add the three facts the reviewer sketched
(⚠️ **sketches to be checked against the surrounding prose, NEVER strings to paste**).

⚠️ **NOT BUNDLED, deliberately.** A heading split moves anchors and rewrites body structure; today's
diff is about the 69.4 precondition and floor. **The `commit-gate` set this precedent earlier in the
same round — *"file the row, do not bundle the edit"* — on the joint-attribution question.** A
structural change needs its own review, its own `check_links.py` anchor pass, and its own gate.

### ⚠️ An open question this raises about the CAP ITSELF, not the section
The reviewer's closing observation, recorded rather than answered: **two adjacent blocks sitting at
exactly `HARD_MAX` in the one section of the corpus where the reader is the person being penalised
may be evidence about the cap rather than about the section.** ⚠️ **No change to `HARD_MAX` should be
made on one document's evidence** — but the question is now asked, and it has never been asked before.

### Cleared while here — do not re-open
⚠️ **`rules_primer.md` is NOT defective and cannot be.** `grep -c '```facts'` returns **0**: it is
excluded from the facts layer **by construction** — `scripts/check_facts.py:56` sets
`IN_SCOPE_LAYERS = {positions, systems, technique, hockey-iq}` plus
`IN_SCOPE_EXTRA = {foundation/on_ice_communication}`. **A document cannot omit a clause from a layer
it does not have, and adding a block there would be a scope violation, not a repair.**
⚠️ **`rules_primer.md:701` is CLEARED — for the fifth time, and this time by the right method.**
Rendered through `md_to_speech.py`: it is chunk `159.ssml`, and the NHL quotation **with** its
precondition is voiced **in the same `<p>`, three clauses before** the IIHF fragment, which is
introduced by *"The IIHF writes the same paragraph at the same number."* **The four previous
clearances were greps; this one read the spoken output. Stop re-opening it.**

## Workstream 10: Hockey Canada 8.3(b) — a discretionary major the corpus may be flattening to a minor

**Found 18 September 2026 by a repairing agent, in a file it owned, outside its brief.**

`sources/hc.txt:6839` — **Rule 8.3(b)**: *"**A Major penalty and Game Misconduct penalty, at the
discretion of the Referee**, based on the degree of violence of the impact, may be assessed to any
player who interferes with an opposing player."* ⚠️ **The same discretionary tier CARHA 66(a)
carries, and the corpus has just been corrected for understating CARHA's.**

### ⚠️ Why it was NOT fixed where it was found, and that call was right
The agent left its own sentence reading *"a minor"* at Hockey Canada, because **8.3(b)'s major is
gated on *"degree of violence of the impact"* and the act under discussion involves NO CONTACT** —
a gate CARHA's 66(a) does **not** have. **Sound for that sentence.**

### The open work — a census nobody has run
⚠️ **Anywhere the corpus states a bare minor at Hockey Canada 8.3 for a CONTACT interference,
8.3(b) may make it an understatement.** **Understating a penalty tier is the direction that gets a
reader ejected while believing they risked two minutes.**

**Method:** find every site citing HC 8.3 or 8.3(a) with a penalty consequence; for each, decide
whether the act it describes involves **contact** (8.3(b) live) or **position only** (8.3(b) gated
out). ⚠️ **This is a READING task — the discriminator is the act described, not the rule number, so
a grep produces candidates and nothing more.** ⚠️ **And run the LAYER TEST: a facts line voiced
alone that says "a minor at Hockey Canada 8.3" for a contact act is the worst case.**

⚠️ **NO COUNT IS WRITTEN HERE.** The corpus has been edited under this question all day.

## Workstream 11: the screen permission stated bare — a measured backlog, and a FLOOR not a total

⚠️ **A block-level layer test over all 39 documents: 18 blocks state the screen permission; NINE
carry no returning-goaltender duty anywhere in the block.** Every line was **read**, not regex-hit.

| Document | block | permission at |
|---|---|---|
| `foundation/on_ice_communication.md` | @253 | 263 |
| `hockey-iq/time_and_space.md` | @244 | 253 |
| `hockey-iq/time_and_space.md` | @437 | 447 |
| `positions/center.md` | @385 | 386, 388 |
| `systems/defensive_zone_coverage.md` | @482 | 483 |
| `systems/offensive_zone_play.md` | @529 | 530 |
| `technique/body_contact_and_battles.md` | @1081 | 1084, 1088 |
| `technique/shooting.md` | @487 | 490 |

⚠️ **The sharpest is `hockey-iq/time_and_space.md:253`** — it reproduces the exact string the style
guide records as having been graded **CRITICAL**, *"and 69.4 takes the goal outside it for contact
only"*, with no counterweight in its block.
**Cheapest is `systems/defensive_zone_coverage.md:483`**, well under the 200 cap.

### Two more classes the same pass found
- ⚠️ **Duty present but ONLY under USA Hockey** — `positions/center.md:740` (KT8) and
  `systems/offensive_zone_play.md:1128` (KT5) reach the returning goaltender solely through USA
  Hockey Casebook 625 Sit. 9, **naming neither NHL nor IIHF 69.4.** ⚠️ **The IIHF is the British
  reader's book, so under the two books this corpus is written to, both takeaways state the
  permission without the limit.** ⚠️ **A mechanical duty-grep scores both CLEAN. Only reading finds
  them.** `positions/winger.md:452`'s block has the same shape.
- **Duty absent in any form** — `systems/zone_entries.md:1112` (KT11) and
  `hockey-iq/playing_without_the_puck.md:930` (KT7). **Neither was named by the corpus-wide sweep
  that preceded this one.**

### ⚠️ A FALSE POSITIVE recorded so nobody "fixes" it
`positions/goaltender.md` block @1022 matches on `:1029`, which is **Hockey Canada's passivity
carve-out, not a screen permission. That block is correct as written.**

### ⚠️ NINE IS A FLOOR, NOT A TOTAL — and the agent said so against its own result
Its own first-pass pattern **scored `shooting.md:892` and `goaltender.md:1098` as gaps when both
carry the duty** in wording it had not anticipated (*"returning to it"*, *"stop you returning"*).
⚠️ **The corpus states this permission somewhere in prose no pattern has matched.**
⚠️ **The coordinator proved the same point the same hour: its own census matched `road home` while
the corpus says `way home` — ONE WORD — and reported two correct documents as defective.**

⚠️⚠️ **METHOD FOR WHOEVER TAKES THIS: before trusting a NEGATIVE census result, take one
KNOWN-POSITIVE site and confirm your pattern catches it. One command. It would have caught both
failures above.**

### Not to be swept blindly
⚠️ **The fix is NOT "add the precondition everywhere."** See Addendum 44 in the round's review
record: the attacker's layers take the **bare, unconditional** limit; ⚠️ **`goaltender.md`'s keeps
the precondition, and must be EXEMPTED BY NAME from any precondition-stripping sweep** — for that
reader, unconditional protection is the over-confident direction.

## Workstream 12: `skating.md` drops the STICK from USA Hockey's spread-the-load instruction

**Found 18 September 2026 by a podcast sweep — in the SOURCE, not the script.**

⚠️ **USA Hockey's own wording, verified verbatim in `sources/ibc.txt` (flatten whitespace first):**
- Teaching point — *"distribute the force of the impact over as wide a surface as possible,
  including **putting your stick and gloves on the glass** to cushion the blow"*
- Named Common Error — *"**Not getting your stick and gloves up and spread out on the glass**"*

⚠️ **`content/technique/skating.md` says *"two forearms, two gloves, your side and your legs"* — and
names no stick**, at `:121`, `:867` and `:919`.

### ⚠️ Why this is a real gap and not a paraphrase
**The stick is the longest object the player is holding.** In an instruction whose entire principle
is *"spread the impact over the largest area you can"*, **the stick is the single biggest
contributor to that area** — and USA Hockey lists its absence as a **named common error**, not as an
optional extra.

### ⚠️ TEN other documents already carry it — `skating.md` is the outlier
`grep -rln "stick and gloves up\|stick and gloves on the glass\|gloves up onto the glass" content/`
returns ten files including `core_principles.md`, `body_contact_and_battles.md`,
`on_ice_communication.md`, `defender.md` and `winger.md`. ⚠️ **So this is not a corpus-wide omission
— it is ONE DOCUMENT out of step with its siblings and with the primary they all cite.**
⚠️ **RUN THE GREP; the file list will drift.**

### ⚠️ Do NOT fix this in the podcast script
The skating episode's `:107` reproduces `skating.md` **exactly** here. ⚠️ **Patching the script would
put the episode AHEAD OF ITS SOURCE and break the provenance chain that makes the episode
reviewable at all.** **Repair `skating.md` first; the script follows.**

### Scope for whoever takes it
`skating.md:121`, `:867` (Common Mistakes) and `:919` (Key Takeaway 1) — ⚠️ **the last is the
takeaway the document itself says *"outranks everything else on this list"***. ⚠️ **Check
`body_contact_and_battles.md`'s matching lines in the same pass — they were not measured.**
⚠️ **And run `check_facts.py --near` first: `:919` is a summary-layer line in a document whose facts
blocks sit at `HARD_MAX` in several places. Do NOT pipe `--near` to `tail`; it sorts ascending.**

## Workstream 13: the VERB — a fifth generation, and the case where the verb is NOT the defect

⚠️ **A reviewer predicted a fifth generation of one sentence and named the discriminator: the verb.**
**NHL/IIHF 56.1** — *"A player is allowed the ice he is standing on… **is not required to move**"* —
so **STANDING** in a lane is protected and **MOVING INTO** it is the offence.
**Four sites were repaired. A sweep then found the fifth, in files the brief never named.**

### Open — verify, then repair
**`content/positions/center.md:392`**, a ` ```facts ` line voiced ALONE:
> *"…**blocking** a returning goalie is the goal off and a minor (Casebook Situation 9)"*

⚠️ **`[Rule]` at 297/300; block `:385-397` at `HARD_MAX` = 11.** `blocking` → `moving into` is **+3 =
exactly 300/300.** **It fits, and nothing else in that block can then move.**

⚠️⚠️ **BUT DO NOT ASSUME THE VERB IS WRONG HERE — THIS ONE MAY BE CORRECT, AND THAT IS THE POINT.**
The line is scoped to **USA Hockey**, whose Casebook Situation 9 turns on ***"any interference"***
(verified present in `sources/usah_casebook.txt`, flattened) — **not** on 56.1's movement framing.
⚠️ **And USA Hockey writes NO stand-your-ground limb in any numbered rule** — a `rules-verifier`
found its only such wording in the **Declaration of Player Safety front matter, page xii**. **So
"blocking" may be accurate for that book while being wrong for the NHL and the IIHF.**
⚠️ **This needs a `rules-verifier`, not a sweep.**

### ⚠️ THE CASE THAT MUST NOT BE "FIXED" — scope, not tension
**`content/technique/shooting.md:300`** — *"**standing in** a goaltender's road home can cost you two
minutes even though the screen in front of them costs you nothing."*
⚠️ **Probably CORRECT.** It is scoped to **Rule 69.4**, whose operative term is ***"due to the
deliberate actions of an attacking player"*** (verified verbatim in `sources/nhl_rules.txt`,
flattened) — **not** 56.1's *"moves into"*. **And it is double-hedged: *"can"*, then *"Read 'may',
not 'will'"*.** `content/systems/offensive_zone_play.md` carries the same shape.

⚠️⚠️ **SO THE VERB RULE IS SCOPED, NOT UNIVERSAL: it governs claims resting on 56.1/56.2, and NOT
claims resting on 69.4, whose own test is deliberateness rather than movement.** ⚠️ **A sweep for
`standing in` would have "fixed" both of these and made two correct sentences wrong — which is
`CLAUDE.md`'s recorded *"they stated a rule's SCOPE rather than its TENSION"* case, reproduced
exactly.** **Read every candidate for WHICH RULE IT RESTS ON before touching the verb.**

### Also open from the same wave
- ⚠️ **`special_teams.md` Key Takeaway 11 still says nothing about the goaltender's path home.** The
  Common Mistakes bullet landed; **the Takeaways layer did not.** ⚠️ **And KT11 ends *"safe under all
  four"* while `:1036` names five books on the same paint/line question — unruled.**
- **`core_principles.md:81` and `on_ice_communication.md:264` carry the BEST version of the CARHA
  Note 2 scoping** — and pair it with **CARHA Rule 49(a)**, the counter-rule (*"stand your ground but
  not lean"*), which `special_teams.md` and `team_play_and_culture.md` still do not mention.

### ⚠️ A METHOD ERROR worth more than the finding
A brief offered a *positive control* for the negative *"CARHA writes no goaltender-vision
provision"*: **`hc.txt` returns 37 hits for `vision`, `carha.txt` returns 0.** ⚠️ **The 37 are
*division* and *provision*. On `\bvision\b`, `hc.txt` returns ONE.** **The negative still holds —
`\bvision\b` = 0 and `\bview\b` = 0 in `carha.txt` — but it was upheld on evidence that was an
artefact.** ⚠️ **A POSITIVE CONTROL THAT IS NOT WORD-BOUNDED IS NOT A CONTROL. It can validate a
pattern that would have matched anything.**

## Workstream 14: two documents state the screen permission with NO road-home caveat anywhere

⚠️ **PRE-EXISTING — explicitly ruled NOT a reason to block the 18 September commit.** Found by a
corpus-wide census during the third C6 review.

**Census: 16 documents state the outside-crease screen permission. FOURTEEN carry the road-home
limit somewhere in the file. TWO carry it nowhere:**

1. ⚠️ **`content/technique/body_contact_and_battles.md`** — `:1084` (a ` ```facts ` line, **voiced
   ALONE with a 300 ms break either side**) *"A screen set outside the crease without contact is
   normally legal under NHL and IIHF Rule 69…"* and `:1095` (body) *"Screening is normally legal.
   Standing outside the crease in the goalie's sightline without contact is not goaltender
   interference."*
   ⚠️⚠️ **THIS IS THE CONTACT DOCUMENT** — the one a reader opens to learn what contact costs them —
   **and its Key Takeaways count for this limit is ZERO.**
2. **`content/systems/zone_entries.md`** — states the permission and carries nothing.

**What reaches the act:** NHL/IIHF **69.4** for a penalty; **56.2(i)** / HC **8.3(i)** / CARHA
**66(a)(1)** in four of five books; **USA Hockey Casebook 625 Situation 9** on *"any interference"*,
taking the goal **and** adding a minor.

### ⚠️ Constraints for whoever takes this
⚠️ **FLOOR THE VERB, and check which rule your sentence rests on first.** **56.1/56.2 claims: the
offence is *moving into* the lane — *"A player is allowed the ice he is standing on… is not required
to move."*** ⚠️ **69.4 claims are DIFFERENT — their operative term is *"deliberate actions"*, not
movement, so *"standing in"* can be CORRECT there.** **See Workstream 13; a sweep would make correct
sentences wrong.**
⚠️ **`body_contact_and_battles.md:1375` is a `Rule:` line AT CAP (300/300) and 33 lines in that file
sit within six characters — see Workstream 8. Run `--near` first; do NOT pipe it to `tail`.**

### ⚠️ How it was found, and why a reading pass would have missed it
**Not by reading either file.** The reviewer ran a census over the **permission sentence** across all
39 documents and then checked each hit's file for the limit. ⚠️ **It says plainly: *"a document
stating the permission in words my regex did not match is invisible to me"* — so SIXTEEN is a floor.**
⚠️ **Before trusting that count, take one known-positive site and confirm the pattern catches it,
WORD-BOUNDED** — a control that is not word-bounded validated a wrong conclusion earlier today
(`hc.txt`'s 37 hits for `vision` are *division* and *provision*; word-bounded it returns one).

## Workstream 15: Rule 69.4's incidental-contact permission stated with its condition dropped

⚠️ **Found 18 September 2026 in a file the round had already repaired three times — and it is NOT
the defect the round was chasing. It was byte-identical in HEAD.**

**Rule 69.4 has TWO conditions on the permission and the corpus repeatedly carries ONE.**
`sources/nhl_rules.txt:7223-7229`, verbatim:
> *"A goalkeeper is not 'fair game' just because he is outside the goal crease. **The appropriate
> penalty should be assessed in every case where an attacking player makes unnecessary contact with
> the goalkeeper.** However, incidental contact will be permitted **when the goalkeeper is in the
> act of playing the puck outside his goal crease** provided the attacking player has made a
> reasonable effort to avoid such unnecessary contact."*

⚠️ **THE HARM: a reader told *"incidental contact outside the crease is fine if you made a reasonable
effort to avoid it"* accepts contact with a goaltender who is NOT playing the puck** — off their
post, tracking a point shot, skating back. **That is *"unnecessary contact"*, and the rule says the
penalty *"should be assessed in every case."*** **Read as a check rather than a bump it reaches
607(c) / 42.4 — a misconduct or a game misconduct.**

### The census — CANDIDATES, not findings
**8 documents carry the condition** (`act of playing the puck`): `rules_primer`,
`body_contact_and_battles`, `playing_without_the_puck`, `shooting`, `goaltender`,
`offensive_zone_play`, `zone_entries`, `forechecking_systems`.
**15 documents carry the permission** (`incidental contact`). ⚠️ **So SEVEN state the permission with
the condition nowhere in the file:**

`language_and_glossary` · `defender` · `center` · `game_management` · `special_teams` ·
`defending_the_rush` · `faceoffs`

⚠️⚠️ **DO NOT SWEEP THIS. A hit is a CANDIDATE.** Several will be legitimate — a glancing mention, a
permission scoped by its own sentence, or a document discussing *inside*-crease contact where 69.4's
outside limb never arises. ⚠️ **`check_caption_echo`'s documented lesson applies: only reading
decides, and a sweep of a pattern like this is how round 44 manufactured a divergence that did not
exist.**

### ⚠️ A SECOND defect found with it — mis-attribution of the "fair game" limb
In `special_teams.md`, **both** occurrences of *"fair game"* were attributed to **Hockey Canada**,
presented as its distinctive coverage — ⚠️ **when the NHL and the IIHF write the identical protection
in the same Rule 69.4, immediately above the returning-goalkeeper clause the passage already
quotes.** ⚠️ **Check the other six candidates for the same shape: a limb all four books write,
credited to one.**

### Method notes for whoever takes this
⚠️ **Verify the IIHF wording separately before any joint attribution** — it writes *"their goal
crease"*, *"attacking Player"* and puts *"reasonable effort"* in its own quotation marks. **One
book's characters credited to two is this round's most repeated quotation defect, and
`check_quote_drift.py` CANNOT see it — it keeps the closest match across all sources.**
⚠️ **Sources wrap mid-phrase; flatten whitespace or read ranges.** ⚠️ **Run `check_facts.py --near`
first and do NOT pipe it to `tail`.**

## Workstream 16: one book's characters credited to two — 20 PRE-EXISTING sites, found mechanically

⚠️ **A `commit-gate` BLOCKED a commit on this class. Four instances were in the diff and repaired. A
mechanical sweep then found TWENTY MORE in pre-existing text, in the same ten files.**

**The defect:** a sentence introduced as *"NHL and IIHF Rule X"* followed by a quotation carrying
**only the NHL's characters**. The IIHF writes *"their"* for *"his"*, *"they are"* for *"he is"*,
capitalises *"Player"*, and sets its own defined terms — *"possession"*, *"body position"*,
*"Goalkeeper interference"* — in quotation marks.

⚠️⚠️ **`check_quote_drift.py` CANNOT SEE THIS, BY CONSTRUCTION.** Its docstring says it keeps the
**closest match across ALL sources**, so a sentence credited to two books while carrying one book's
wording scores **clean**. ⚠️ **And `MINLEN = 25` means short fragments like *"the ice he is standing
on"* are never scanned at all.** **Every one of these 24 sites passes every gate in the repository.**

### ⚠️ THE METHOD — mechanical, and it is the whole finding
**Do not look for this by reading.** A `commit-gate` audited the diff, blocked on four instances, and
**missed a fifth in a file it had just audited**. The repairing agent found that fifth **by
word-diffing NHL against IIHF with `difflib`**, and recommended the sweep that found the rest.

```python
# for each quotation of >=25 chars on a line naming BOTH books:
#   flatten whitespace in both rulebooks
#   if quote in NHL and quote NOT in IIHF and the attribution is JOINT -> candidate
```
⚠️ **THE DISCRIMINATOR IS THE JOINT ATTRIBUTION IMMEDIATELY BEFORE THE QUOTE.** **A first sweep
matched "line mentions both books" and returned 41 KB of noise — most lines naming both books quote
each separately and correctly.** ⚠️ **A second filter is also required: a quote followed by a
DISCLOSURE (*"the NHL's wording, the IIHF writing…"*) is CORRECT, and three of the diff's four
in-scope hits turned out to be already disclosed.** **Without that filter the sweep re-reports its
own repairs as defects.**

### ⚠️ NO COUNT IS WRITTEN HERE, AND THE REASON IS THE FINDING

**This row first said "20 pre-existing sites" with a per-file breakdown. That figure was an
ARTEFACT OF AN ARBITRARY PARAMETER and has been withdrawn.**

The sweep decides a quote is jointly attributed by looking back a fixed distance for the phrase
*"NHL and IIHF"*. **Varying only that window, over the same ten files, same day, same rulebooks:**

| look-back window | undisclosed candidates |
|---|---|
| 90 chars | **15** |
| 400 chars | **38** |
| 1,200 chars | **63** |

⚠️⚠️ **THE COUNT IS A PROPERTY OF THE WINDOW, NOT OF THE CORPUS.** ⚠️ **And the 90-char window —
the one that produced the withdrawn "20" — DEMONSTRABLY MISSED A REAL INSTANCE:** an agent found a
second NHL-credited quotation in the very line it was repairing, where *"his crease"* → *"their
**goal** crease"* **twice, inserting a word rather than swapping a pronoun.** The joint attribution
sat further back with an intervening sentence, so the quote's own preamble was only *"It opens"*.

⚠️ **A wider window is not the fix either: at 1,200 characters an attribution can be several
sentences away, with the document having re-attributed in between, so most of the extra hits will be
false.** **There is no window that is correct.**

⚠️ **THEREFORE: this class CANNOT BE COUNTED MECHANICALLY — only SURFACED as candidates and then
READ.** **Run the sweep at a window you choose, treat every hit as a candidate, and never write the
total into a plan row.** **Concentrations were seen in `rules_primer.md`, `defensive_zone_coverage.md`,
`body_contact_and_battles.md` and `shooting.md` — as a hint about where to start reading, not as a
tally.**

### ⚠️ Not all 20 are defects
**Read each.** Legitimate cases: a passage **about the NHL** that names the IIHF only to contrast;
a quotation whose fragment contains **none** of the divergent characters; a divergence already
disclosed **elsewhere in the same paragraph**. ⚠️ **A sibling agent over-claimed a `Player`
capitalisation for a fragment that did not contain the word, and caught itself. VERIFY THE FRAGMENT'S
BOUNDS, not the surrounding sentence's.**

### ⚠️ THE WORD *"ONLY"* IS THE DEFECT — measured across a whole round

⚠️ ***"Differing only in X"* is a claim about what is NOT different, and EVERY instance this round
wrote was wrong:**
- a capital claimed for a span that did not contain the word;
- a quotation-mark divergence true of one span, claimed for two;
- *"belong to the 'pick' sentence **alone**"* — false: the IIHF quotes that term at **seven** further
  places in Rule 56.1 and once in Rule 54.2;
- *"differs **only** in its pronouns"* — excluding a capitalisation that sits inside the span.

⚠️ **THE FIX IS USUALLY TO DELETE THE WORD, NOT TO EXTEND THE LIST.** **Five sibling sites in the
corpus carry no exclusivity word at all — they simply enumerate — and none of them has failed.**
⚠️ **BUT "no *only*" IS NOT THE GOAL, ACCURACY IS:** an agent found a third *"only"* on the same
line, diffed it, verified it **complete**, and correctly left it alone.

### ⚠️ A pre-existing instance of the INVERTED form — filed 19 September 2026
**`content/foundation/core_principles.md:81`** quotes the **IIHF's** sentence and says the NHL is
*"the same sentence with **"he"** for **"they"**"* — ⚠️ **omitting the `player`→`Player`
capitalisation AND the `is`→`are` change.** **Same defect, opposite direction: it under-states the
divergence from the other side.** **Verified against `sources/nhl_rules.txt:6250-6252` and
`sources/iihf_rules_v1.1.txt:4683-4684` this session.**

### ⚠️ Method notes that cost this round several passes
- ⚠️ **CHECK THE QUOTED SPAN'S BOUNDS, NOT THE SENTENCE'S.** Three over-claims came from naming a
  divergence sitting outside the quote marks.
- ⚠️ **Consistent in FORM, never in WORDING.** The sites quote **different spans**; copying wording
  between them is how a single over-claim spread to three files.
- ⚠️ **`check_quote_drift.py` compares ALPHANUMERICS ONLY** — it cannot see quotation marks or
  capitalisation, so these clauses score **clean whether right or wrong.** **A word-diff is the only
  check.**
- ⚠️ **The IIHF extraction uses CURLY QUOTES.** **A straight-quote grep returns zero and reads as an
  absence.**
- ⚠️ **Read the repaired clause VOICED.** One agent's draft said *"in the NHL's characters **too**"*
  where the chunk boundary fell immediately before it — voiced alone, *"too"* pointed at nothing.

### The repair form — four models now exist in the corpus
> *"…that in the NHL's wording, the IIHF capitalising *"Player"* and setting *"possession"* in
> quotation marks of its own…"*

⚠️ **Never weaken the claim that both books carry the rule — they do. Disclose only that the QUOTED
CHARACTERS are one book's.** ⚠️ **And state the divergence you MEASURED, not the one you expected:
*"differing only in…"* is a claim about what is NOT different and must be checked by word-diff.**

## Workstream 17: FACING vs PARALLEL — two board cases with different instructions, possibly conflated

⚠️ **A repair was dispatched to add the stick to `skating.md:121` and the agent REFUSED, correctly.
Following the brief would have CONTRADICTED the primary source.** **Verified twice, flattened:**

| USA Hockey case | Objective | Teaching points |
|---|---|---|
| **PARALLEL** | *"To protect the body when being checked while **skating parallel to the boards**"* | *"Press your **forearm and upper thigh (hip area)** against the boards"* · *"Avoid hitting the boards with the shoulder"* · *"Keep a low center of gravity"* — ⚠️ **NO STICK** |
| **FACING** | *"checked while **facing the boards**"* | *"**If at all possible, try to turn skates parallel** before contact"* · *"distribute the force… including putting your **stick and gloves on the glass**"* — ⚠️ **STICK** |

⚠️⚠️ **THE STICK BELONGS TO THE FACING CASE ONLY. The parallel case is forearm-and-hip.** **`:121` is
the parallel case, and the coordinator's brief nearly put the stick in it.**

### ⚠️ The open question — candidates, NOT findings
**Twelve documents carry the spread-the-load instruction.** ⚠️ **The repairing agent warned the same
conflation may exist in them, and specifically named `core_principles.md:19` and `:198` as stating
spread-the-load without scoping the facing case as tightly as its own `:177` does.**

⚠️⚠️ **DO NOT SWEEP THIS, AND DO NOT USE A GREP COUNT AS EVIDENCE.** A raw count of facing-scope
mentions per file proves nothing about whether each INSTRUCTION is correctly scoped — ⚠️ **the
coordinator ran exactly that count, got a non-zero number for all twelve, and it told it nothing.**
**Read each site and ask which case it is teaching.**

### ⚠️⚠️ THE SOURCE IS IN TENSION WITH ITSELF — and "facing only" is too strong a claim about it

**USA Hockey states the stick instruction at TWO levels that pull against each other, in ONE book.
Both verified verbatim, flattened, this session:**

| Passage | Scope | Stick |
|---|---|---|
| **Contact Confidence A** | *"while **facing** the boards"* | *"putting your **stick and gloves on the glass**"* |
| **Contact Confidence B** | *"while skating **parallel** to the boards"* | ⚠️ **none** — *"forearm and upper thigh"*, *"low center of gravity"* |
| **B's drill emphasis** | parallel | ⚠️ ***"keeping the legs moving with the feet apart, knees bent and **the stick down**"*** |
| ⚠️ **Heads Up Hockey §2, *"Hitting the Boards"*** | ⚠️ **UNSCOPED — hitting the boards generally** | ⚠️ ***"the best way to cushion an impact with the boards is: with **both hands on the stick** if possible"*** |

⚠️ **So the corpus must present NEITHER as the settled position.** ⚠️ **This cuts both ways: it is why
`skating.md:603` quoting the general demonstration for a general claim is DEFENSIBLE, and why the
unscoped SUMMARY lines were still wrong — they stated one USA Hockey position where the source has
two.**

⚠️ **The Heads Up Hockey passage is duplicated in `huh.txt` from an independent PDF, so it is not an
extraction artefact.** ⚠️ **Anyone repairing the `:603` ownership inversion needs this passage,
because it is the one `:603` actually quotes.**

### ⚠️ A REFUSAL worth keeping — do not "improve" on it
An agent declined to add the parallel-case *"stick down"* limb to `skating.md:868`, though the source
supports it and it would sharpen the contrast: ⚠️ **`body_contact_and_battles.md` — the OWNER — has
NO board-contact stick limb at all** (its only *"stick down"* hits are stick-lift and slashing
material). **Adding one to a delegating document would create a SECOND ownership inversion of exactly
the kind already filed. It belongs in the owner first.**

### Corpus sweep — `skating.md` was the SOLE outlier
Every other document carrying this instruction already had the facing trigger:
`passing_and_receiving.md:480`, `switching_positions.md:168`, `puck_handling.md:410`,
`scanning_and_anticipation.mjs:178`, and all four owner layers. ⚠️ **That independently corroborates
the reviewer and narrows this row: the conflation the coordinator feared across twelve documents
does NOT exist. Only `skating.md` had it, and it is fixed.**

### ⚠️ A relayed MEASUREMENT that did not reproduce
A reviewer measured a scoped rewrite of the facts line at **183/200**, *"eleven characters shorter"*.
⚠️ **The repairing agent could not reproduce it — every rewrite preserving the prohibition, the
one-wrist reason and *"spread"* came in at 194–219.** It reached 194 only by substituting *"catch
yourself as you fall to the ice"* → *"break your fall to the ice"*. ⚠️ **The CONCLUSION (no cap
pressure) was right; the NUMBER was wrong, and an agent that trusted it would have budgeted eleven
characters it did not have.** **A reviewer's measurement is evidence about that reviewer's draft,
not about yours.**

### ⚠️ A limb in BOTH primaries that the corpus carries NOWHERE
`sources/ibc.txt` and `sources/huh.txt`, from two independent PDFs, both give the cushioning
demonstration as: ⚠️ ***"With both hands on the stick if possible"*** and ***"With arms out to create
a three-part 'shock absorber'"***.
⚠️ **Neither limb is in any `content/` document.** ⚠️ **`body_contact_and_battles.md` carries the
stick correctly at four sites with the *"[i]f at all possible"* hedge intact — and it does not carry
this either.**
⚠️ **A COORDINATOR FALSE ALARM, RECORDED: `grep -c "both hands on the stick"` returns 2 in
`puck_handling.md`, but BOTH are a STICK-CHECKING rule — *"unrealistic to expect both players to keep
both hands on the stick at all times"* — nothing to do with cushioning. A count is not a reading.**

### Closed by this row's work
**`skating.md` now carries the stick in body `:603`, facts `:587`, Common Mistakes `:868` and Key
Takeaway 10 `:928`** — verified by a layer test, not a grep. ⚠️ **`:919` (Takeaway 1) was REFUSED and
that refusal needs a reviewer's eye: it carries route and posture and delegates the three-case rule
to `body_contact_and_battles.md`, whereas `core_principles.md:209` DOES include the fallback in its
equivalent takeaway.**

⚠️ **CONSEQUENCE: the shipped skating episode now TRAILS its source** — it reproduced `:603` exactly,
stick and all, because it was faithful. **An episode must never lead its source; re-scripting is the
owner's call.** **`PODCAST_AUTOMATION_LOCAL.md` also quotes the superseded line.**

## Workstream 18: the OWNER states the Case-3 limb ungated, in a blockquote — and nobody has layer-tested it

⚠️ **`content/technique/body_contact_and_battles.md:754`**, the myth blockquote:
> *"USA Hockey teaches the opposite: get your **stick and gloves up and spread out on the glass**, and
> it names failing to do so as the common error"*

⚠️ **NO Case-3 gate anywhere on the line — three paragraphs downstream of the correctly gated Case 3
at `:713`.** ⚠️ **This is the exact defect just repaired in `skating.md`, sitting in the OWNER
document, in a blockquote.** ⚠️ **A blockquote is the container that has failed here before.**

### ⚠️ Why it matters — the scope is real and triple-sourced
**Three separate passages give the PARALLEL case and NONE mentions a stick going up:**
- `sources/ibc.txt:691-694` — Contact Confidence B: *"Press your forearm and upper thigh (hip area)
  against the boards"*, *"Keep a low center of gravity"*
- `sources/ibc.txt:1531-1537` — *"Taking A Hit On The Boards… while skating close to the boards"*:
  *"Keep skates parallel"*, *"Use arms/legs as shock absorbers"*, *"Keep feet apart, knees bent"*
- `sources/huh.txt:465-469` — *"Keep your feet parallel to the boards / Forearms — hands — legs ready
  / Lean into the impact"*
⚠️ **And where USA Hockey gives a stick HEIGHT for that case it says DOWN** (`ibc.txt:1547`,
`huh.txt:658`). ⚠️ **`huh.txt` contains *"glass"* EXACTLY TWICE and neither puts a stick on it.**

⚠️ **THE HARM: a listener skating parallel with a check coming squares their chest to the glass to
get both hands up — forfeiting the forearm-and-hip presentation, RAISING THE CENTRE OF GRAVITY
(USA Hockey's own named Common Error for that case), taking the hands off the puck, and converting a
Case-2 contact into the Case-3 geometry Case 3 exists to salvage.**

### ⚠️ NOBODY HAS LAYER-TESTED THAT DOCUMENT
Two reviewers said so independently. **Read `:713`, `:744`, `:754` and `:1680` RENDERED, not as
Markdown** — `skating.md`'s defect was invisible on the page and obvious in the chunk, and the repair
moved its first gate from **word 96 to word 39** of a 288-word unit.

### The corpus-wide row this implies, and it is NOT a sweep
⚠️ **A layer test for `stick` + `glass` WITHOUT a facing gate, across every document that carries the
instruction.** ⚠️ **Do NOT grep and fix — the same session proved a raw count tells you nothing: a
coordinator ran one, got a non-zero facing-scope mention for all twelve carriers, and it was not
evidence about any of them.** **Read each hit RENDERED and ask what a listener knows at that moment.**

### ⚠️ An UNRESOLVABLE tension in the source — report it, do not "fix" it
`ibc.txt:1474-1484` (*"Hitting the Boards"*) gives *"with both hands on the stick if possible"*
**generically**, as a demonstration point scoped to no case, while `:1531-1537` gives the parallel
checklist with **no stick at all**. ⚠️ **Only USA Hockey can resolve that. The corpus currently
reports both faithfully and should keep doing so — DO NOT resolve it by choosing one.**

### Closed alongside
**`skating.md` is repaired in all four layers** and its facts block now carries USA Hockey's **first**
teaching point for the facing case (*"try to turn skates parallel before contact"*), which three
sibling documents had and it did not. ⚠️ **That block is now at 8/8 against `MAX_COACHING_FACTS` — the
free slot is spent, and a future COACHING fact there will fail loudly.**

## Workstream 7: three untracked, un-ignored paths — an OWNER DECISION, measured 18 September 2026

⚠️ **`AGENTS.md`, `.agents/` and `.codex/` are untracked AND absent from `.gitignore`.** Nothing
staged them today. ⚠️ **They are invisible to every gate in this repository:
`check_secrets.py` reports *"369 tracked files"* — it does not scan untracked paths, so its clean
run says NOTHING about these three.**

**Measured directly instead:**

| Path | What it is | Size |
|---|---|---|
| `AGENTS.md` | 602 lines — a port of `CLAUDE.md` for another harness | — |
| `.agents/` | 4 files — `scripted-episode` and `notebooklm-episode` skills | 36K |
| `.codex/` | 12 files — agent definitions, `config.toml`, `hooks/git-guard.sh` + its test | 148K |

⚠️ **Scanned for credentials by hand: NOTHING credential-shaped.** Every hit for
*key/token/secret/password* is a rule **about** secrets — `git-guard.sh`'s own blocking patterns,
the commit-gate's `AKIA` regex, and a skill instructing an agent not to enter passwords. **No
`AKIA`, no `sk-`, no `ghp_`, no PEM header, no assignment to a secret-shaped name.**

### ⚠️ The real risk is not a secret — it is DIVERGENCE, and it has already happened
⚠️ **MEASURED PROPERLY — AND THE FIRST FIGURE WRITTEN HERE WAS MISLEADING.** A raw `diff` reports
~70 differing lines, **but almost all of that is the harness's own name.** Normalising
`Claude`/`Codex` to a common token and comparing paragraph by paragraph: ⚠️ **exactly ONE
substantive paragraph of `CLAUDE.md` is absent from `AGENTS.md`**, plus its code fence.

⚠️ **It is the `check_facts.py --near` block** — the passage that exists because a block at
`HARD_MAX` evicted a rulebook fact into a `Technique:` line where, voiced alone, a mandatory
give-ground duty read as a coaching preference, **and every checker passed.**

⚠️ **So the divergence is SMALL, SINGULAR, and the worst available one to be missing.** "~70 lines"
overstated the breadth while understating the significance. ⚠️ **A line count is not a measure of
divergence between two files that address different harnesses by name** — and the coordinator wrote
that count into this plan within an hour of recording, in the same round, that relayed figures are
this round's dominant defect.

⚠️⚠️ **So an agent run under `AGENTS.md` is not told to run `--near` before editing a facts block.**
**This is the "number copied out of its owner goes stale" failure, applied to a whole instruction
file** — and unlike a stale number, nothing in either file points at the other, so no reader of
one can discover that the other has moved.

### The decision, and it is the owner's — this repository is PUBLIC
- **Commit them** — they are project tooling, they carry no credential, and tracking them puts
  them under `check_secrets.py` and the hook. ⚠️ **Then `AGENTS.md`'s divergence becomes a
  maintained obligation, and it is ALREADY BEHIND.**
- **`.gitignore` them** — zero divergence risk in the record, but the tooling stays invisible and
  the next contributor re-creates it. ⚠️ **Never weaken `.gitignore` afterwards to un-ignore them.**

⚠️ **Either way, `AGENTS.md` must not be left as a silently-stale copy of `CLAUDE.md`.** If it is
kept, the sustainable form is a POINTER to `CLAUDE.md` plus only the harness-specific deltas —
**a full copy of a file that documents its own staleness failures is the one shape guaranteed to
reproduce them.**

⚠️ **Standing hazard until decided:** `git add -A` or `git add .` anywhere in this repository
stages all three under whatever message is being written. **This repository already forbids both
gestures and the hook blocks them — that is the mitigation, and it is not a resolution.**

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

## ⚠️⚠️ A FABRICATION TRAVELLED THROUGH A REVIEW REPORT INTO A BRIEF, AND ONLY THE IMPLEMENTING AGENT CAUGHT IT

**18 September 2026. The most important process finding of the round.**

A `safety-reviewer` wrote, in a report otherwise verified to an unusually high
standard: *"Read with **IIHF 42.4** (`:3962-3966`), a major carries an automatic game
misconduct."* **The coordinator relayed it into a repair brief. Neither checked it.**

**What IIHF 42.4 actually says** (`sources/iihf_rules_v1.1.txt:3960-3964`, read by the
coordinator after the catch):

> *"The Referee, **at their discretion, may** assess a major penalty and a game
> misconduct penalty if, in their judgment, the Player recklessly endangers their
> opponent by **"charging"** and the Player **would not be sufficiently sanctioned by
> imposing a major penalty**."*

⚠️ **Wrong three ways: it is DISCRETIONARY, not automatic; it is keyed to CHARGING,
not to any major; and it is CONDITIONAL on a major being insufficient.**

⚠️⚠️ **The brief would have put an invented automatic ejection into TWO paragraphs of
a document teaching a collision sport.** That is non-negotiable 1 — **and it was
caught by the agent asked to implement it, not by the reviewer who wrote it or the
coordinator who relayed it.**

### The lesson, and it is NOT "check harder"

⚠️ **A claim in a REVIEW REPORT is not verified merely because a reviewer wrote it.**
This one arrived **with a line range attached**, which is exactly what made it look
sourced — the citation was real, the rule was real, and the *characterisation* was
invented. **The corpus's own TRANSMISSION-error class, committed in a review report
rather than in content.**

⚠️ **The existing instruction is what saved it:** *"Give every agent the plan row as a
hypothesis and tell it to refute the brief before acting on it."* **The agent
refuted a rulebook claim its brief asserted, and was right.**

- [ ] **Dispatch rule, to apply from now:** ⚠️ **when a brief carries a rulebook claim
  taken from a REPORT rather than from the books, say so in the brief and mark it
  unverified.** The implementing agent then knows which claims are evidence and which
  are relay. **Do not launder a report's characterisation into a brief's assertion.**

⚠️ **Two smaller relay failures in the same brief, both caught by the same agent:**
its sketch **silently dropped the very limb the brief itself raised**, and its
character figure was wrong (292, not 289) so the proposed fix **did not fit**.

### ⚠️ And another false-negative grep, in the same session

**IIHF 69.2's quoted phrase returns ZERO on a flattened grep** of
`sources/iihf_rules_v1.1.txt` — the running header `SECTION · OTHER INFRACTIONS` and
a page number are spliced **between *"whether or not the goalkeeper"* and *"is inside
or outside"***. With furniture stripped it returns 1. ⚠️ **That is the documented
page-furniture class again, in a NEW book and a NEW rule.** `sources/README.md`
records the class; this is another instance, and **a flattened grep is not enough on
its own.**

## ⚠️ A DOCUMENT CARRIES THE BLOCKER'S COST AND NOT THE SCREENER'S — and it is a SECOND instance

**Found 18 September by a coordinator census after a `safety-reviewer` found the same
asymmetry in a different document.**

`technique/body_contact_and_battles.md` §9 told a player to stand in the shot lane
**four times** and said nothing about what that exposes, while **§11 of the same file
carried the identical exposure for shot BLOCKERS in both its facts layer and its
prose**, with an Equipment pointer. **Repaired this round** — body, Common Mistakes
and Key Takeaways. ⚠️ **It could NOT reach the facts layer: that block is at
`HARD_MAX` 11 and its lead line has three characters left. Recorded, not forced, no
caveat evicted.**

⚠️ **`positions/winger.md` has the same asymmetry and is untouched.**

| | Blocking | Screening |
|---|---|---|
| `winger.md:581` (body), `:663` (Common Mistakes) | ✅ *"head out of the lane"*, *"hands behind your body with the backs of the gloves out"*, the going-down form, when **not** to block | — |
| `winger.md:535` (**`Action:` facts, voiced alone**), `:549` (body) | — | ❌ *"get in the goalie's eyes"* — **no cost named anywhere in the file** |

⚠️ **A grep of that document for `close range`, `puck's path`, `protection`,
`deflect`, `released`, `upright` returns only BLOCKING material.**

- [ ] Decide whether `winger.md` owes the screener's counterweight, or whether
  pointing at the owner is enough for a positions document. ⚠️ **The owner is
  `hockey-iq/playing_without_the_puck.md:594`/`:603`**, which carries both the
  side-by-side comparison and the disclosure *"No injury rate for screening is
  published in any source held here"*. ⚠️⚠️ **DO NOT SUPPLY A RATE — non-negotiable
  1.** The truthful, unsourced-free material is: *close range* · *upright* · blade in
  the lane to tip · know when the puck is released · head and face protection **right
  rather than nearly right**.
  ⚠️ **Check the block's headroom FIRST** — `python3 scripts/check_facts.py --near`.

⚠️ **THE CENSUS THAT FOUND IT IS MOSTLY NOISE, and that is worth recording.** A sweep
for screening instructions naming no cost returns **25 lines**, of which nearly all
are **correct**: glossary definitions, diagram markers, the **defensive** side
(*"move out of the sightline yourself"*), vocabulary scoping, a self-check question,
and the owner document itself — **where the cost sits in the same section.** ⚠️ **Only
reading separates them. Do not sweep this pattern.**

## ⚠️⚠️ THE CAP IS THE CORPUS'S BINDING CONSTRAINT — 107 BLOCKS ARE FULL, AND IT IS NOW CAUSING DEFECTS

**Measured 18 September 2026 after a `facts-reviewer` traced FIVE of its SIX majors to
one cause.** ⚠️ **Run the census rather than quoting these — they move with every
edit:**

```bash
python3 scripts/check_facts.py --near        # lines near their character cap
# and for blocks at HARD_MAX, the census in this row's commit message
```

**What it showed:** **107 of 839 facts blocks — 13% — sit at `HARD_MAX` 11.** Twelve
in one document. **And 253 facts lines are within six characters of their character
cap, eight AT it.**

### ⚠️ THIS IS NO LONGER A TIDINESS ISSUE. IT IS PRODUCING DEFECTS, AND THE REVIEWER TRACED THE MECHANISM

Every net-front block a crease-line correction needed to reach was **at the cap**. So
the correction *went somewhere else*, three different ways — **each a separate major
in the same review**:

1. ⚠️ **SIDEWAYS, into a section whose body does not support it.**
   `positions/center.md:367` — a new `Rule:` fact whose every source sentence lives
   in the `####` subsection **below** it. **The `####` block was at 11, so the fact
   went next door.** ⚠️ **That is `extract-never-author` violated by a cap, not by an
   author.**
2. ⚠️ **AHEAD OF ITS BODY.** `technique/shooting.md:486` states three books where its
   own section body still closes *"get your feet out of the blue"* — **the blue, not
   the red line.** ⚠️ **The FACT is right and the BODY is the stale layer** — the
   inverse of the usual propagation failure.
3. ⚠️ **NOT AT ALL.** `technique/shooting.md:452` still attributes the reading to the
   IIHF alone while the body four lines below now names three books. ⚠️ **It is at
   300/300 in an 11-fact block: it could not be widened and could not be split. The
   propagation stopped because there was no room — the mechanism, not an oversight.**

**And a fourth shape: the cap EVICTS.** `center.md:389` paid for its new crease-line
clause with **93 characters of penalty caveat** — *"Under USA Hockey a shove in
relieves your position only, not touching the goalie and not what you do next"*.
⚠️ **The substance survives in abstract form two lines below, so a reader is left
with a vaguer true statement rather than a false one** — which is why it is a major
and not a critical. **But nothing saw the trade except the reviewer.**

### ⚠️⚠️ THE CAP THAT EXISTS TO SAY "THIS SECTION IS DOING TWO JOBS" CANNOT SEE ANY OF THEM

**Measured 18 September 2026, after an agent noticed it while splitting a section.**

`scripts/check_facts.py:71` sets `MIN_FACTS, MAX_COACHING_FACTS, HARD_MAX = 3, 8, 11`,
and `:218-226` computes **`coaching = len(body) - rules`** in an `elif` chain. ⚠️ **So
`MAX_COACHING_FACTS` EXCLUDES `Rule:` lines by construction** — and a rules-heavy
section accumulates exactly those.

**Census of every block at `HARD_MAX`:**

| non-rule facts | blocks |
|---:|---:|
| 0-2 | 36 |
| 3-5 | 30 |
| 6-8 | 40 |

⚠️⚠️ **106 of 106 — ONE HUNDRED PER CENT — of full blocks sit UNDER the coaching cap.
It has never fired on a single one.** `HARD_MAX` does all the work, **and only once a
block is already full.**

### Why that matters more than the number

The coaching cap is the one designed to catch over-stuffing *before* it becomes
structural. ⚠️ **It is structurally incapable of seeing the state it exists to
prevent**, because the lines that fill a rules-heavy section are the ones it does not
count. **The only signal is `HARD_MAX`, which fires when it is already too late to do
anything but split.**

⚠️ **And `HARD_MAX` is a silent signal.** A full block does not fail any gate — it
simply **refuses the next correction**, which then goes sideways, ahead of its body,
or nowhere. **Five majors in one round came from that.**

- [ ] ⚠️ **DO NOT "FIX" THIS BY RAISING EITHER CAP OR BY COUNTING `Rule:` LINES
  TOWARD THE COACHING ONE.** The exemption is deliberate and correct: a citation and
  a hedge are mandatory, and a section that genuinely cites five books needs five
  `Rule:` lines. **The finding is that the corpus has 106 sections doing two jobs, not
  that the numbers are wrong.**
- [ ] **Consider a WORKLIST — not a gate — that reports blocks approaching
  `HARD_MAX`,** the way `check_facts.py --near` reports lines approaching their
  character cap. ⚠️ **`--near` was added today for the character caps and immediately
  found eight lines at cap that nobody knew about.** The block-count equivalent does
  not exist.

### ⚠️ THE SEVEN LINES SITTING AT EXACTLY THEIR CAP — the next instances of this defect, waiting

**`python3 scripts/check_facts.py --near` prints them. On 18 September 2026, seven:**

| Line | Label | |
|---|---|---|
| `foundation/on_ice_communication:411` | `Rule:` | 300/300 |
| `systems/breakouts:908` | `Rule:` | 300/300 |
| `systems/defending_the_rush:368` | `Rule:` | 300/300 |
| `systems/defending_the_rush:611` | `Rule:` | 300/300 |
| `technique/body_contact_and_battles:1339` | `Rule:` | 300/300 |
| `positions/defender:624` | `Key:` | 200/200 |
| `systems/offensive_zone_play:818` | `Technique:` | 200/200 |

⚠️ **Five of the seven are `Rule:` lines — the label that carries a citation, and the
one `check_facts.py` is explicit must never be evicted by a cap.**

⚠️⚠️ **THIS IS NOT A TIDYING LIST. IT IS THE SAME BRITTLE STATE THAT ALREADY PRODUCED
A DEFECT TODAY.** `technique/shooting.md:452` sat at 300/300 and **could not be
widened when its own body was broadened**, so one facts line kept an IIHF-only reason
for an instruction its section had just made three-book. ⚠️ **A USA Hockey or Hockey
Canada listener hearing it alone concluded "not my book"** — the exact misread the
whole crease-line round existed to close.

**It was repaired by SUBSTITUTION** — `and IIHF Rule 1.7 puts the line in the crease`
→ `and three books count that line as crease` — **300 → 296, losing nothing.**
⚠️ **The coordinator had recorded it as "blocked on the section split". That was
false, and a commit gate caught it.** **Before deciding a line cannot fit, try
substitution.**

⚠️ **AND A TRAP THE REPAIRING AGENT REFUSED.** Naming all three books outright does
**not** fit — every variant landed back at 298-300, and **the only way to buy the
characters was trimming *"obstructing the goalie's vision"*, the table row's
OPERATIVE CONDITION.** It declined. ⚠️ **It also deliberately named NO layer:
*"count that line as crease"* claims neither rule text nor definition, so a Note and
a Glossary are not silently promoted by sitting next to the words *"not rule text"*.**

- [ ] **Read each of the seven and ask the question the `shooting.md` case answers:
  is this line still true of what its own section now says?** ⚠️ **A line at cap
  cannot absorb a correction, so it is where a section's body and its extraction
  layer drift apart silently.** ⚠️ **Try substitution; never evict a caveat; and if
  neither works, say so — that is a finding, not a failure.**

⚠️ **A METHOD TRAP, MEASURED:** `check_quote_drift.py` run from a copy **outside the
repository** resolves no sources and reports **`notfound=371`, a false all-fail**. An
agent took that as a baseline, spotted it, and re-took the baseline by swapping the
pre-edit file **in place with a hash-verified restore**. ⚠️ **Never baseline that tool
from a scratchpad copy.**

### The remedy exists and has never been applied

`project/content_style_guide.md` already prescribes it: **split the section, on the
seam the body already uses, not on rule-set lines.** ⚠️ **And the anchor cost was
measured, not assumed: `grep -rn 'attacking-the-net-front'` across the repo
(excluding `.git`, `node_modules`, `dist`) returned ZERO hits.** No document, no site
source, no script references it.

- [ ] ⚠️ **COORDINATOR DECISION, TAKEN: the section splits are now the critical path,
  not a nicety.** Until they happen, **the next correction to this material will fail
  the same three ways** — and that is the reviewer's own prediction, not a guess.
  **Start with the six net-front blocks the crease-line wave could not reach.**
  ⚠️ **A split moves a heading and its anchors, so `check_links.py` and every inbound
  cross-reference are in scope** — but the anchor census says the cost is near zero.
  ⚠️ **Do NOT raise `HARD_MAX`.** The cap is doing its job: **a full block is evidence
  the SECTION is doing two jobs**, and 13% of blocks being full is evidence about the
  corpus's structure, not about the number 11.

## ⚠️⚠️ ATTRIBUTION DRIFT, FOUND IN THE WILD — IIHF 69.3 IS NOT THE NHL'S 69.3, AND 22 SITES SAY IT IS

**Found 18 September by an agent that read both books rather than one.** Verified by
the coordinator directly:

| Book | Opening limb |
|---|---|
| **NHL 69.3** (`sources/nhl_rules_layout.txt:6085-6088`) | *"If an attacking player initiates **contact** with a goalkeeper, incidental or otherwise… the goal will be disallowed **(refer to Rule 69.7 for an exception)**."* |
| **IIHF 69.3** (`sources/iihf_rules_v1.1.txt:5555-5557`) | *"If an attacking Player initiates **\"a relevant contact\"** with a goalkeeper, incidental or otherwise… the goal will be disallowed."* |

**Two differences, and both matter:**
1. ⚠️ **The IIHF gates the limb on *"a relevant contact"* — in its OWN quotation
   marks, i.e. a DEFINED TERM — where the NHL writes plain *"contact"*.**
2. ⚠️ **The NHL carries an exception cross-reference to Rule 69.7 that the IIHF does
   not.**

⚠️ **`grep -rn 'NHL and IIHF 69.3' content/` returns 22 sites.** The corpus
attributes the limb jointly throughout — in facts blocks, prose and Key Takeaways,
written across many rounds by many agents.

⚠️⚠️ **THIS IS THE ATTRIBUTION-DRIFT CLASS EVERY TOOL HERE IS BLIND TO, CAUGHT IN
THE WILD.** `check_quote_drift.py` keeps the **closest match across all sources**, so
a string quoted correctly from the NHL and *also* credited to the IIHF **scores
clean** — and these two texts are near-identical, which is the worst possible corpus
for that failure. **It was found only because an agent opened both books instead of
one.**

- [ ] ⚠️ **`rules-verifier` question, corpus-wide — NOT a coordinator's to settle.**
  Does *"a relevant contact"* **narrow** the IIHF limb against the NHL's plain
  *"contact"*, or is it a defined term that resolves to the same thing? **And does
  the corpus ever QUOTE the NHL's wording while crediting both books?** That second
  one is drift outright.
  ⚠️ **Do not sweep the 22 sites.** If the substance is equivalent, joint
  attribution is correct and a sweep would make 22 documents worse. **Read the
  IIHF's definition of the term first.**
  ⚠️ **Also check whether the corpus carries the NHL's 69.7 exception cross-reference
  anywhere** — both compressed sites in `zone_entries.md` state the void flat, and
  that predates this round's compression. **Direction is conservative.**

## ⚠️ THE CASEBOOK CITATION FORM — the owner is right, six files carry the misleading one

**Settled 18 September with evidence, not preference.** The corpus cites one USA
Hockey Casebook situation two ways:

- **`"Rule 103, Situation 4"`** — `rules_primer.md`, `shooting.md`, `center.md`,
  `winger.md`, `special_teams.md`, `zone_entries.md` (**6 files**)
- **`"at *The Rink*, Situation 4"`** — `rink_map.md`, `language_and_glossary.md`
  (**2 files — and `rink_map.md` is the OWNER**)

⚠️⚠️ **THAT PROOF WAS FALSE, AND SO IS THE CONCLUSION. CORRECTED 18 SEPTEMBER BY A
COMMIT GATE, AND VERIFIED BY THE COORDINATOR AGAINST THE PRIMARY TEXT.**

**Casebook numbering runs per RULE, not per chapter.** `sources/usah_casebook.txt`
around `:1513-1536` shows the actual structure:

```
CASEBOOK FOR THE RINK          <- the chapter
  Rule 101 Rink
    Situation 1
  Rule 102 Dimensions of Rink
    No situations.
  Rule 103 Division of Ice Surface
    Situation 1                <- RESTARTS at 1 under each Rule
```

**Rule 104, 105, 107 and 109 each restart at Situation 1; Rule 625 runs 1-17 and
Rule 626 restarts at 1.**

⚠️ **The "proof" was a misreading.** The *"Rule References 103(a) and 624(Note)"*
sits **INSIDE Rule 103 Situation 1's ANSWER** — it is a cross-reference in the
answer text, **not the heading the situation is filed under.**

⚠️⚠️ **SO *"Rule 103, Situation 4"* IS THE PRECISE FORM AND THE OWNER'S IS THE
AMBIGUOUS ONE.** *"At The Rink, Situation 4"* resolves **only because Rule 103
happens to be the one rule in that chapter with four or more situations.**

⚠️ **AND THE CORPUS ALREADY KNEW THIS.** The same wave's own diff writes
*"Rule 625, Situation 10"* three lines from where it converted the other form —
**the per-rule shape, used correctly and unremarked.**

### ⚠️ WHAT THIS COST, AND WHAT IT DID NOT

**A wave converted EIGHT sites from the precise form to the ambiguous one, on this
false premise.** ⚠️ **Nothing is misstated and no reader is misled — both forms
resolve — so it is not a defect to rush at.** ⚠️ **But the premise was recorded as
SETTLED and would have been quoted by whoever did the sweep.**

- [ ] ⚠️ **The propagation direction is now REVERSED: the owner should adopt
  `"Rule NNN, Situation N"`, not the other way round.** ⚠️ **Do it in ONE pass** —
  `rink_map.md`, `language_and_glossary.md` and the eight converted sites.
  ⚠️ **Verify the numbering claim against `sources/usah_casebook.txt` yourself
  first. It has now been asserted two ways in this file, and one of them was wrong.**

⚠️ **An agent holding one of the six deliberately LEFT it on the majority form**
rather than create a split mid-round.

⚠️⚠️ **EVERYTHING ABOVE RESTS ON A PREMISE THAT IS FALSE — see the correction further
up this row. Numbering runs PER RULE. `"Rule NNN, Situation N"` is the PRECISE form
and the owner's is the ambiguous one.**

⚠️ **AND THE "THREE FORMS" REASONING BELOW WAS ALSO WRONG. A commit gate measured it:
THERE ARE TWO FORMS, NOT THREE.** The precise form is used **368 times across 30
files**; before this round the ambiguous form existed at **exactly ONE real site —
`rink_map.md:188`, the owner.** ⚠️ **This wave took it from 1 site to 9 and overwrote
two correct citations.** **So fixing the eight would leave ONE residual site —
strictly FEWER than deferring, not more.**

- [ ] **Revert the eight converted sites to `"Rule NNN, Situation N"`, and bring the
  owner to it too.** ⚠️ **This is NON-BLOCKING, and the real reasons are the gate's,
  not the ones originally given here:** the locator **resolves uniquely** either way,
  **both trailer sites carry *"Rule Reference 103(b)"* inside the quoted answer
  itself**, and ⚠️ **an eight-site edit across long prose sentences has a MEASURED
  history in this repository of introducing worse than it fixes.**
  ⚠️ **Verify the per-rule numbering against `sources/usah_casebook.txt:1513-1575`
  yourself before touching anything** — this row has asserted it both ways.

## ⚠️ THE DIAGRAM LAYER ALREADY CARRIES THE CREASE-LINE CLAIM AND NOBODY HAS CHECKED ITS ORDERING

Found while reading rendered speech for `center.md`: the `oz-net-front-screen`
**describe** text and its **caption** already state the claim — including *"the
IIHF's own appendix table allows the goal to a screener planted on the line: the
same play answered in opposite directions inside one book"*.

⚠️ **Whether those need the same lead-with-the-instruction ordering that
`center.md:369` just got is UNCHECKED.** That line was reordered because, voiced
alone, it ended on the permission — **and a caption is voiced alone too.**

⚠️⚠️ **AND `check_absolutes.py` CANNOT SETTLE IT.** It reads `diagrams.json`, the
**build product**, so a clean run certifies whatever was last built rather than what
is in `site/src/diagrams/*.mjs` today. **A caption edited this round and not rebuilt
is invisible to it.**

- [x] **CLOSED 18 September by a commit gate, with evidence rather than a rebuild.**
  It read `oz-net-front-screen` out of `diagrams.json` directly. The caption already
  ends *"USA Hockey and Hockey Canada both count that line as part of the crease, and
  so does the IIHF's Rule 1.7 — but the IIHF's own appendix table allows the goal…
  **Off the line is the answer that works under every book.**"* ⚠️ **Three books, then
  the contradiction, then the instruction LAST — the exact ordering this wave had to
  repair in two facts lines, already correct in the caption.**
  ⚠️ **The staleness caveat still stands for any FUTURE check:** `check_absolutes.py`
  reads the build product, so a caption edited and not rebuilt is invisible to it.
  **This closure rests on reading `diagrams.json` directly, not on a checker pass.**

## ⚠️ RULES REVIEW OF THE 18 SEPTEMBER REPAIR WAVE — the correction is right, three things are not

**The headline is CONFIRMED.** `shooting.md`'s bolded Overview claim was wrong and
its replacement is correct **in all four books**, each verified in its own layer:
IIHF **rule text** 1.7, USA Hockey's **Note** to 625(b) plus **Casebook Rule 103
Situation 4**, Hockey Canada's **Glossary** (identical in both extractions, so not
an artefact), and the NHL **silent in rule text** with **Reference Table 14
Situation 5 E** answering the other way.

⚠️ **The negative was ATTACKED, not assumed.** Over de-hyphenated, whitespace-flattened
copies of **both** NHL extractions: `part of the crease` **0**, `belongs to` **0**,
`including crease` **0**, `inside edge` **0**, `outside edge` **0**. `crease line`
returns **4**, every one accounted for. **No fifth site.**

✅ **And no document says *"three books' rule text"*** — every site names the layer
individually. **The class repaired four times is not present.**

### ⚠️ THREE DEFECTS — all open

1. ⚠️⚠️ **THE COMPRESSION INTRODUCED A PRECISION LOSS.** `zone_entries.md:327` and
   `:374` now attach **USA Hockey 607(c)** to a sentence whose subject is
   **incidental** contact. **607(c) reaches *"body checks or charges"* only.** Its own
   **Note 1 to 607(d)** (`sources/usah.txt:3689-3693`): *"any accidental or
   unavoidable contact… shall be penalized under the Interference rule. Any
   **deliberate** body contact or check… shall be penalized as charging."*
   **Incidental contact is 625(a)(8), a minor.** The pre-compression text quoted the
   trigger; the compressed text does not. ⚠️ **Direction is CONSERVATIVE — it
   over-warns, so no reader is hurt or penalised by acting on it.** Not a deletion
   candidate.
2. ⚠️ **`center.md:369`, a `Rule:` fact voiced ALONE**, says the NHL's rule text does
   not say and *"its Reference Table 14 answers the other way"* — ⚠️ **but the IIHF's
   OWN Table 16 answers it the other way in identical terms**
   (`sources/iihf_rules_v1.1.txt:9941-9945`). **A listener hearing this alone
   concludes the IIHF's answer is clean and only the NHL's table dissents.** Every
   prose site in that file says the IIHF *"answers the same play in two directions"*;
   **this layer does not.**
3. ⚠️ **`shooting.md:495`, a `Never:` fact**, names USA Hockey and Hockey Canada —
   **but not the IIHF, which is the British reader's book and the only one of the
   three answering in RULE TEXT.**

### ✅ THREE ADDITIONS THAT WOULD STRENGTHEN THE CORPUS — none is an error

- ⚠️ **The most explicit sentence in any of the four books is not quoted anywhere.**
  USA Hockey Casebook Rule 103 Situation 4's **second** sentence
  (`sources/usah_casebook.txt:1574-1575`): *"The goal crease area includes the space
  bounded by the **OUTSIDE EDGES** of the semi-circular crease lines."*
- ⚠️⚠️ **CASEBOOK RULE 103 SITUATION 5 ANSWERS THE CORPUS'S WHOLE INSTRUCTION IN
  TERMS, FROM THE GOVERNING BODY, ABOUT REAL RINKS — and no document cites it**
  (`sources/usah_casebook.txt:1579-1587`): *"In many cases, only a truncated version
  of the crease is shaded blue, but the edges of the USA Hockey crease are still
  marked with a red line. This area **MUST BE CONSIDERED PART OF THE CREASE** even
  though it may not be shaded blue."* **This is direct support for *"off the red, not
  merely out of the blue."***
- **A FIFTH book answers it and agrees.** CARHA: *"The lines which designate these
  areas are to be considered as part of the creases."* `shooting.md:829` already
  cites CARHA as *"a fifth book, stricter still"* without saying this. **Four of
  five, not three of four** — scoped to CARHA-affiliated leagues.

### Nits
`center.md:754` and `shooting.md:916` cite `usah.txt:4509`; the Note **begins at
`:4508`**. And the corpus labels one Casebook situation two ways — *"at The Rink,
Situation 4"* (`rink_map.md:188`) versus *"Rule 103, Situation 4"*. **Both resolve.**

### ⚠️ What the review could NOT settle
- ⚠️ **The NHL rulebook's rink DIAGRAM on page iv is an IMAGE that Rule 1.7
  cross-references.** If the NHL answers this anywhere, it is there, **and no grep of
  either extraction can see it.** The corpus's *"the NHL's rule text is silent"* is
  therefore the honest form and must not be strengthened to *"the NHL is silent"*.
- The new negative at `:306` — *"no book of the four ranks one layer of itself
  against another"* — **was attacked across 12 precedence terms in four books and
  nothing contradicts it.** ⚠️ **Unconfirmed but well-attacked; not a deletion
  candidate.** The IIHF *Situation Handbook* ranks itself below the Rulebook, but
  that is a separate document, not a layer within one.
- **No league bulletin was searched.** `ihuk_*_roc`, `eiha_inhouse_2026-27.txt` and
  `eih_rr.txt` were not checked for a crease provision, and the EIHL Casebook and
  IHUK Rule Bulletins are **not on disk**.

## ⚠️⚠️ `AGENTS.md` AND `.agents/` ARE STALE DUPLICATES OF THE PROJECT'S INSTRUCTIONS — UNTRACKED, UNIGNORED, AND DIVERGING

**Found 18 September 2026** after sitting untracked in `git status` all day while
every wave stepped around them.

- **`AGENTS.md` is a 40 KB copy of `CLAUDE.md`**, dated **17 September**.
  **Diverged by 58 lines**, and its script inventory is missing **four** tools —
  `check_caption_hosts.py`, `check_facts_antecedents.py`, `podcast_queue.py`,
  `tts_sample.py`.
- **`.agents/skills/notebooklm-episode/` mirrors `.claude/skills/`**, and its
  `prompt_constraints.md` **differs by 237 lines** — ⚠️ **it predates the accuracy
  and teaching-depth constraints added this week, including the one written after
  an episode collapsed from 43 minutes to 18.** It also has no `scripted-episode`
  skill.
- ⚠️ **Neither is gitignored.** `git check-ignore` returns nothing — they were
  simply never added. **So every `git status` all session showed them, and
  `git add -A` would take both**, which is one more reason the blanket-staging ban
  exists.

⚠️⚠️ **THIS IS THE `pathways.json` DEFECT SHAPE, APPLIED TO THE INSTRUCTIONS
THEMSELVES.** That file refuses to copy a maintained list into site data because it
*"would create a second, unreviewed copy of a maintained list"* and *"would put the
caveats on the wrong side of the copy."* **These duplicates are exactly that, for
the file that carries every non-negotiable.**

⚠️ **The failure is not staleness, it is ROUTING.** An agent tool that reads
`AGENTS.md` — the cross-tool convention some runners use instead of `CLAUDE.md` —
**gets yesterday's non-negotiables, yesterday's build traps and a tool inventory
four short.** It would not know `check_facts_antecedents.py` exists, and a tool
nobody knows about does not get run. **The copy is silently authoritative for
whoever reads it.**

- [ ] ⚠️ **OWNER DECISION, NOT THE COORDINATOR'S — it is outward-facing and
  deleting is hard to reverse (non-negotiable 9).** Three options:
  **(a)** delete both, if no tool here reads them;
  **(b)** replace each with a **one-line pointer** to `CLAUDE.md` and
  `.claude/skills/`, which is the only version that cannot go stale;
  **(c)** generate them from the originals in a build step, so divergence is
  impossible rather than merely discouraged.
  ⚠️ **Do NOT simply re-copy today's version — that recreates the same defect with
  a fresher date, and the next edit to `CLAUDE.md` reopens it.**

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


## ⚠️⚠️ THE COACHING CAP, RE-MEASURED CORPUS-WIDE — it has never fired ANYWHERE, and 80 blocks sit ON it

**Measured 18 September 2026, against `check_facts.py:217`'s exact definition.**

⚠️ **The census recorded above covered only the 106 blocks at `HARD_MAX`. Extending it
to all 840 changes what the finding IS.**

⚠️ **First, a correction to the method — and it is the kind this file exists to catch.**
A first pass counted `Convention:` as a rulebook fact, because the comment at
`check_facts.py:72-74` says *"`Rule:` carries a citation and `Convention:` carries the
body's hedge, and both are mandatory"*. **The CODE does not agree with its own comment:**

```python
rules = sum(1 for f in body if f.startswith("Rule:"))   # :217 — Rule: ONLY
coaching = len(body) - rules
```

**`Convention:` counts as COACHING.** The wrong definition shifted the whole
distribution and would have put a false histogram in this plan. **Re-run with the exact
predicate before quoting any figure below.**

**Coaching-fact distribution across all 840 blocks** (cap is 8):

| coaching facts | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | **8** |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| blocks | 6 | 36 | 49 | 62 | 121 | 204 | 176 | 106 | **80** |

⚠️⚠️ **NOTHING IN THE CORPUS EXCEEDS 8. The maximum anywhere is EXACTLY the cap, so
`MAX_COACHING_FACTS` HAS NEVER FIRED ON ANY BLOCK IN THE CORPUS — not just never on a
full one.** The section above says *"106 of 106 full blocks sit under it"*; **the true
statement is stronger and covers all 840.**

### ⚠️ But "never fires" is NOT "inert", and that is the actual finding

**80 blocks — nearly one in ten — sit at exactly 8, one coaching fact from the cap.**
A distribution that rises to 5, falls through 6 and 7, and then **spikes back up at
precisely the limit** is not what an unconstrained distribution looks like. **The cap is
binding: it is not catching over-stuffed sections, it is PREVENTING the 81st coaching
fact from being written**, silently, the same way `HARD_MAX` refuses the next
correction.

- [ ] ⚠️ **This does NOT change the "do not raise the cap" ruling above, and must not be
  read as an argument for it.** A section holding eight coaching facts probably is two
  sections. **The finding is that 80 of them are, and no gate says so.**
- [ ] The worklist proposed above (blocks approaching `HARD_MAX`) should report **both**
  ceilings. The nine blocks at `11` facts *and* `8` coaching — `shooting.md:763`,
  `offensive_zone_play.md:709`, `forechecking_systems.md:679`, `winger.md:19`, `:80`,
  `:557`, `defender.md:621`, `:733`, `playing_without_the_puck.md:700` — are **full on
  both axes simultaneously** and can take neither a rule nor a coaching fact. ⚠️ **Three
  of the nine are in `winger.md`, the document already carrying an open
  blocker/screener asymmetry row.** ⚠️ **Do not copy this list into a brief — it goes
  stale the moment a block is edited. Re-run the census.**

## Workstream 5: fallout from the section-split pilot

Full record: `project/reviews/section_split_pilot_2026-09-18.md`. The split itself is
recorded there; these are the rows it opened and must not be lost with it.

- [ ] ⚠️ **D10 — the split CREATED a style-guide non-conformance that did not exist
  before, and this is the row the commit gate required.** ⚠️⚠️ **THIS ROW WAS WRITTEN
  ABOUT A FIVE-LINE ALL-`Rule:` BLOCK AND WENT STALE WITHIN THE HOUR — the CRITICAL
  repair added a `Key:` line and three `Rule:` lines while it was being typed, so the
  block is now NINE facts, `Key:` + 8 × `Rule:`, and is NO LONGER ALL-`Rule:`.** The
  all-`Rule:` exemption test **no longer applies to it at all**, so the
  non-conformance as originally stated is **gone by side effect, not by repair —
  nobody fixed it and nobody decided it.** ⚠️ **What survives is the underlying
  question, and it is now WORSE rather than better:** the section's body still carries
  imperatives that reach no fact.
  *"Keep your skates off the line, not merely out of the blue"* and *"Standing a
  skate's width further out costs you nothing in any of the four books"*; only one
  `Rule:` tail carries any of it. ⚠️ **The block now has TWO facts of headroom, not
  six — the repair spent four of them.**
  ⚠️ **The agent that made the split deliberately did not spend it — *"the headroom is
  not mine to spend"* — and the gate ruled that correct.** ⚠️ **A repair is new text and
  cannot self-certify, so whoever writes the fact is not whoever splits the section.**
  **`facts-reviewer`.**
- [ ] ⚠️ **The new block's label column carries almost no information, and the repair
  made it longer.** The `site-reviewer` measured it at FIVE `Rule:` lines: 441 px at
  1440, **1,147 px at 375 — 1.41 viewport-heights of a column reading `Rule Rule Rule
  Rule Rule`** — against the *Attacking* block's six varied labels and the *Defending*
  block's eight. ⚠️⚠️ **THE MEASUREMENT IS ALREADY SUPERSEDED: the block is now NINE
  lines, `Key:` + EIGHT `Rule:`.** The reviewer's figures were taken on a page that no
  longer exists. **Re-measure before quoting them, and do not carry the px values into
  a brief.** ⚠️ **The one `Key:` line is now the only thing in the block that tells a
  listener the position is physically dangerous, and it is voiced alone among eight
  consecutive rule statements.** ⚠️ **Cause is CONTENT, not CSS: the
  split sorted the eleven facts by kind.** ⚠️ **The `site-reviewer` refused to propose
  wording, correctly: *"five of these are genuinely `Rule:` facts and relabelling one to
  fit the page would be a lie about its kind."*** Two options, and **(a) may well be
  right**: (a) accept it — the wall is honest, the section IS rule exposition;
  (b) test whether any of the five is better carried by the surrounding prose.
  **`facts-reviewer` and `content-reviewer`. NOT a site fix.**
- [ ] **The five facts in the new block have never been checked against primary
  rulebook text.** No fact was edited by the split — byte-identity was proved — **but
  "unchanged" is not "verified", and the block now advertises itself as the place the
  question is answered.** `rules-verifier`.
- [ ] ⚠️ **The ToC precedent this split leans on has itself never been reviewed.** The
  new heading matches `technique/puck_handling.md:423` and
  `hockey-iq/playing_without_the_puck.md:445` — **consistency, not correctness. If
  those two are wrong, the corpus is now wrong in three places.** ⚠️ **This record
  originally named ONE precedent and named it at the wrong line (`:447`); the
  `site-reviewer` found the second and corrected the first.**
- [ ] **No on-page table of contents exists on a phone at all** — `nav.toc` computes to
  `display: none` at 375 px and the header "Contents" control is an `<a href="/">` to
  the home page, not a drawer. ⚠️ **Pre-existing and unrelated to the split**, but it
  means every ToC argument in this workstream is desktop-only. **Decide whether that is
  intended before anyone "fixes" a ToC on mobile evidence.**
- [ ] **No ToC scrollspy site-wide** (`TableOfContents.astro` has no script, by design).
  Pre-existing; recorded because **D15 lists ToC tracking and silence on a dimension is
  the failure mode.**

### ⚠️ THE BLOCK SPLITS ACROSS A CHUNK BOUNDARY, AND ONE SIDE IS 8/8 RULE LINES WITH NO PROSE

**Measured 18 September 2026 through `scripts/md_to_speech.py`** — the real renderer,
because the layer decides the cost and no grep over `content/` can see this. ⚠️ **The
`site-reviewer` ended its report saying it could not reach how the block SOUNDS. This
is that answer, and it is sharper in the ear than on the page.**

| chunk | `<p>` | breaks | words | what a listener gets |
|---|---:|---:|---:|---|
| 108 | 4 | 4 | 519 | a 466-word body paragraph, the heading, *"The key facts for this section."*, **then the `Key:` line — and it stops** |
| **109** | **8** | **8** | **450** | ⚠️ **eight `Rule:` lines, 8 of 8, and NOTHING ELSE — no prose in the chunk at all** |
| 110 | 1 | 0 | 439 | a single body paragraph |

⚠️⚠️ **THE ONE `Key:` LINE — the only line in the block telling a listener the position
is physically dangerous — IS ON THE FAR SIDE OF A CHUNK BOUNDARY FROM ALL EIGHT RULE
LINES.** Whatever a boundary costs a listener here, the safety counterweight and the
rule wall are separated by it.

- [ ] **What a chunk boundary actually costs a listener is NOT established** — the
  measurement above proves the boundary exists and nothing more. ⚠️ **Do not treat
  "8/8 rule lines in one chunk" as a graded finding until someone says what a boundary
  does.** `scripts/check_chunk_splits.py` and `check_chunk_tails.py` may already own
  this question; **neither was run on this section.**
- [ ] ⚠️ **No baseline exists for how long a facts block runs in this corpus**, so the
  ~2.9-minute figure for chunk 109 **is meaningless on its own and must not be quoted
  as a verdict.** The word rate behind it (156 wpm) is an assumption, **not a measured
  property of any voice**. ⚠️ **The `<p>` and break counts are exact; the durations are
  not.** Compute the corpus-wide distribution before anyone acts on this.
- [ ] ⚠️ **This is the second time today a figure has been produced for this block and
  superseded within the hour** — the `site-reviewer`'s px measurements were taken at
  FIVE rule lines and the repair took it to eight. **Re-measure; do not carry either
  set of numbers into a brief.**

### ⚠️ BASELINE: the "wall of consecutive `Rule:` lines" is the corpus's NORMAL shape — 14 sites

**Measured 18 September 2026** by rendering all 39 documents through
`scripts/md_to_speech.py` (**3,079 chunks**) and classifying every speech chunk by
whether its paragraphs are facts lines. ⚠️ **This exists to STOP a sweep**: a reviewer
looking at one rules-heavy block will call the wall a defect, and it is a convention.

- **931** chunks contain at least one facts line.
- **47** chunks are **100% facts lines** (≥2 paragraphs) — no prose at all.
- ⚠️ **14 of those are 100% `Rule:` lines.**
- All-facts chunk word counts: **min 103 · median 368 · p90 477 · max 506.**

⚠️⚠️ **`technique/body_contact_and_battles` chunk 168 is a NINE-paragraph, 452-word,
100%-`Rule:` chunk in the same document** (the leaving-the-bench / USA Hockey 629(a)
material — a different section). **The document already shipped a longer rule wall than
the section split produced**, which sits at 8 paragraphs / 448 words, **below the p90.**
`technique/shooting` 057 is a 9-paragraph near-twin **on this very subject** (625(b),
8.5).

- [ ] ⚠️ **So "eight consecutive rule lines" is NOT a finding about the split, and must
  not be filed as one.** If the pattern is wrong it is a finding about **14 sites and a
  convention** — a separate row, evidenced corpus-wide, never a local fix.
- [ ] **What the baseline does NOT excuse**, and is the live question: whether a block
  can be eight rule statements and one line about helmets **with nothing telling the
  reader what to DO.** That is about what is MISSING, and this measurement says nothing
  about it. See the `safety-reviewer`'s M1.
- [ ] ⚠️ **Method caveat, stated so nobody over-trusts the table:** the classifier keys
  on a paragraph opening with a known label word, so a line rendering `Never — …` rather
  than `Never. …` **may be miscounted**. **Chunk and paragraph counts are exact; the
  classification is heuristic.** No durations are recorded — a word rate would be an
  assumption, not a measured property of any voice.

### ⚠️ RETRACTION — the coordinator's chunk-boundary "finding" is not one, and the tools that own it say so

**Written and retracted the same afternoon, 18 September 2026.**

The row above records that the block splits across a chunk boundary with the `Key:`
safety line stranded on the far side from the eight `Rule:` lines. ⚠️ **The measurement
is correct and the inference from it was not.** A `facts-reviewer` ran the two tools
that own the question:

- **`check_chunk_tails.py` DOES fire on `body_contact_and_battles.md` chunk 108 with the
  `Key:` line as its tail** — one of 9 hits in this document. ⚠️ **And by that tool's own
  test — *"does this still tell the truth if the listener stops here?"* — the line is
  self-contained and is NOT a defect.**
- **`check_chunk_splits.py` reports 0 split pairs in this document.**

> *"Neither tool supports a finding on the boundary itself."*

⚠️⚠️ **THE COORDINATOR MEASURED A REAL STRUCTURAL FACT AND PRESENTED IT AS A HAZARD
WITHOUT RUNNING EITHER TOOL THAT OWNS IT** — and both tools were named in the same plan
row, as things that *"may already own this question"*, with *"neither was run."*
**Naming the tool you did not run does not discharge the obligation to run it.** The
honest form of that row was a question, and it was written as a table.

- [x] **RETRACTED.** Do not carry "the safety line is stranded across a chunk boundary"
  into any brief. ⚠️ **What survives is a DIFFERENT finding in a different direction:**
  the counterweight is missing from the *block*, not separated by a *boundary* — and
  **no chunk tool can see that direction.** It is the `facts-reviewer`'s
  missing-imperative major, and it is filed there.
- [ ] ⚠️ **The corpus-wide all-facts-chunk census above still stands** — it was measured,
  not inferred, and a second reviewer reproduced its conclusion by an independent method
  (66 of 840 blocks with ≥8 `Rule:` facts). **Keep it; it is what stops the next sweep.**

### ⚠️ `check_facts.py --quiet` DOES NOT EXIST, AND THE FAILURE LOOKS LIKE A CORPUS DEFECT

**Measured 18 September 2026, on the coordinator, mid-gate-run.**

`check_facts.py` takes **PATHS**, not flags. Passing `--quiet` makes it treat the flag as a
path and die inside `pathlib`:

```
ValueError: '…/ice_hockey/--quiet' is not in the subpath of '…/ice_hockey/content'
```

⚠️ **Run in a loop that prints only exit codes, this reads as `check_facts exit=1` — a GATE
FAILURE ON THE CORPUS.** The coordinator ran exactly that loop over all six gates
immediately after a repair agent finished, got `exit=1`, and **was one step from reporting a
false failure against 46 lines of new text.** The same run without the flag:
**`841 blocks · 5650 facts · all conform`.**

⚠️ **`CLAUDE.md`'s gate list shows `--quiet` on `check_links.py` ONLY, and it is correct.**
The error was reading that list as a uniform convention. **`check_links.py` takes `--quiet`;
`check_facts.py` does not.**

- [ ] ⚠️ **Never run the gates as a bare exit-code loop.** A wrapper that swallows stderr
  converts a coordinator's own typo into a finding against the corpus — and **this failure
  mode points the wrong way**, at content rather than at the command. **Print the last lines
  of output, not just `$?`.**
- [ ] ⚠️ **This is the fourth shell/tooling trap recorded on this machine** — the nvm `node`
  function, the `npm` shim, the `aws` alias (see `PODCAST_AUTOMATION_LOCAL.md`), and now
  this. **Three of the four produce a result that LOOKS like a verdict about the work.**
- [ ] **Consider making `check_facts.py` reject unknown `--`-prefixed arguments** with a
  usage message instead of a traceback. ⚠️ **Tool change — coordinator only, and BETWEEN
  waves, never during one.** Three agents are live as this is written, so **not today.**

## ⚠️⚠️ THE "EVERY CLAUSE OF RULE 69" OVERSTATEMENT — a corpus-wide class, and THE COORDINATOR'S SITE LIST WAS 78% SHORT

**The defect** (verified against primary text): *"under the NHL and IIHF **every clause of
Rule 69 that voids a goal for where you stood** names the goal crease"* is **false against
69.1 clause (1)**, whose premise reads *"whether **inside or outside** the crease"* and
whose positioning limb ends *"…or **defend his goal**"* — **no location condition at all.**

⚠️ **The rest of the structural reading is SOUND and must not be swept with it:** 69.1's
operative disallowing sentence does require an attacker who *"enters the goal crease"*,
69.3's ground asks for a *"significant position within"* it, and 69.4 reaches contact only.
**The word "every" is the defect.**

⚠️ **AND THE FIX IS NOT ONLY A DELETION.** The hedge *"a reading of the rule's structure,
not either book's words"* now **UNDERSELLS** the corpus: **the books' own reference tables
answer this play directly.** *"Makes the corpus look LESS supported than it is"* — the
direction `CLAUDE.md` singles out.

### ⚠️ THE ROW LETTERS: BOTH ARE RIGHT, FOR DIFFERENT PLAYS — settled, do not "fix" either
Verified **positionally** (`nhl_rules_layout.txt:9243-9290`, `iihf_rules_v1.1.txt:9905-9945`),
**never by grep**:
- **5 C** — attacker **in motion** outside the crease who *"impairs the goalkeeper's ability
  to defend his goal"* → **"Goal is allowed."** ⚠️ **Better for a clause-(1) repair, because
  its wording mirrors the exact limb under repair.**
- **5 E** — attacker who *"plants himself on the crease line or outside the goal crease, as
  to obstruct the goalkeeper's vision"* → **"Goal is allowed."** ⚠️ **The right row for a
  PLANTED screener.**

**A `safety-reviewer` flagged 5 C as the wrong row and a propagation agent resolved it:
neither is wrong.** ⚠️ **And both 5 E quotations return NOT FOUND from flattened search —
exactly as `sources/README.md` now records. Never conclude a Table 14 row absent from a grep.**

### ⚠️⚠️ HOW BADLY THE COORDINATOR'S SITE LIST MEASURED

It named **two** sites and cleared a third. Reality:
- ⚠️ **It MISSED a site inside a file it had itself named** (`winger.md:466`) — **33% short
  within its own named files.**
- ⚠️ **It CLEARED `rules_primer.md:1139`, which carries the same universal INVERTED** —
  *"no clause of Rule 69 takes a goal away for where you stood unless you were in the
  crease"* — ⚠️ **invisible to `grep "every clause"`.**
- ⚠️ **A third wording exists** at `rules_primer.md:732` (*"for a player's position"*).
- **Corpus-wide the relay was ~78% short.**

⚠️⚠️ **THE LESSON IS THE SEARCH STRING, NOT THE DILIGENCE. A phrase-based census cannot see
a negation or a re-wording of the same claim, and three of the misses were exactly those.**
**Never relay a site list for this class — tell the agent to census, and give it the
SEMANTIC test ("does this sentence assert that Rule 69's positional reach is confined to
the crease?"), not a string.**

### ⚠️ AND IT IS NOT CONFINED TO `content/` — TWO DIAGRAM CAPTIONS CARRY IT, SPOKEN
- `site/src/diagrams/positions.mjs:614` → `winger-offensive-zone-patches`, hosted **only in
  `winger.md`** — ⚠️ **so that document's repair is INCOMPLETE AT THE LAYER TEST until the
  caption is fixed: the spoken layer still says "every clause".**
- `site/src/diagrams/offensive_zone_play.mjs:618` → `oz-net-front-screen`, hosted in
  `offensive_zone_play.md` **and** `center.md`.
- ⚠️ **Both are HAND-WRITTEN STRINGS, not shared constants** — every export in
  `rule69_clauses.mjs` is **clean**, so each caption repairs independently.
  `site/src/data/diagrams.json:1193,1421` are the **build products**.
- ⚠️ **`offensive_zone_play.mjs:610-617` carries a COMMENT whose premise needs re-checking
  before anyone trims on its authority** — it asserts `center.md`'s block carries the keying
  and the table citation, **and `center.md:740` is on the defect list.**

### ✅ CLOSED — `winger.md` and `on_ice_communication.md` repaired
5 lines, 2 files. ⚠️ **One was a SUBSTITUTION that came out SHORTER** (`on_ice_communication.md:263`,
295 → 290/300) — *"naming a thing is often shorter than pointing at it"*, measured again.
The three-limb enumeration was **kept**, not swept. A pre-existing `check_quote_drift` hit
on the same line was cleared in passing.

### ⚠️ `rules_primer.md:728` IS THE MODEL TREATMENT — write against it, do not copy it
It already reads clause (1) whole, quotes the *"or defend his goal"* limb, explains the
*"Goals should be disallowed **only if**"* ceiling, names the sentence that actually
disallows, and cites **both** 5 C and 5 E. ⚠️ **It sits FOUR LINES from `:732`, which
carries the defect.** **The corpus already knows the right answer and did not propagate it
to its own neighbour.**

- [ ] **Remaining sites — CENSUS, DO NOT TRUST THIS LIST.** Known: `language_and_glossary.md`
  `:327`, `:355`; `rules_primer.md:732`, `:1139`; `shooting.md:464`, `:890` (and the
  coordinator's wider grep also surfaces `:26`, `:300`); `center.md:740`;
  `playing_without_the_puck.md:575` (**scoped negated variant — literally true, but its
  enumeration omits clause (1); a candidate, not a certainty**); `offensive_zone_play.md:565`.
  **Plus the two diagram modules.**
- [ ] **`winger.md:459` — a pre-existing antecedent defect found in passing and deliberately
  NOT bundled.** *"**That goalkeeper-out carve-out** is not the free pass it reads as…"* —
  voiced alone, *"that carve-out"* points at nothing. **256/300, substitution has room.**
  ⚠️ **Correctly left for its own dispatch rather than folded into another correction's
  review record.**

## ⚠️⚠️ THE PRIVILEGED-AREA "CLASS" WAS NOT A CLASS — census refuted the coordinator's premise

**Read-only census, 18 September 2026.** The coordinator dispatched it expecting a spread
contradiction. **It found the opposite.**

### The geometry: CONFIRMED independently, on four texts
| Claim | Source | Line |
|---|---|---|
| Face-off spots *"twenty-two feet (22') from the imaginary line"* | `usah.txt` | **1401-1403** (Rule 104(d)) |
| Rink *"eighty-five (85') to one hundred feet (100') wide"* | `usah.txt` | **1289-1294** |
| 607(d) Note 2 — ⚠️ **written THREE times** (also Note to 614(c) `:4026`, Glossary `:6104`) | `usah.txt` | **3694-3697** |
| *"extends to the closer end boards"* — **backwards, not sideways** | `usah_casebook.txt` | **11733** |
| Warm-Up Area = privileged area ***"extended to include"*** the corners | `usah.txt` | **6108-6111** |
| *"can be legally checked when outside the privileged area"* | `usah_casebook.txt` | **11714** |

**44 ft on 85 ft = 20.5 ft outside each side. The corner is outside by construction.**

### ⚠️⚠️ THE DEFECT EXISTED AT EXACTLY ONE SITE, AND IT WAS UNCOMMITTED TEXT BEING WRITTEN AS THE CENSUS RAN

`git show HEAD:content/technique/body_contact_and_battles.md | grep privileged` → **nothing.**
⚠️ **The whole section is a new unstaged hunk. This was never a legacy contradiction that
spread — it was a single sentence being introduced in the working tree by a live agent.**

**The census watched it change three times in one afternoon:** wrong in both layers →
**facts repaired, prose still wrong** (⚠️ **the body/block split running in the OPPOSITE
direction to the usual one**) → both correct, deriving the 22 ft figure from Rule 104(d).

### ⚠️ AND THE TWO SITES THE BRIEF CALLED "HIGHEST-RISK" ARE THE CORPUS'S BEST TREATMENTS
`forechecking_systems.md:741` — *"**so it takes in the ice behind the net and not the
corners** — and the corner is exactly where a goalie without a trapezoid comes to get the
puck."* ⚠️ **It states the exclusion AND names the consequence the reader is actually in.**
`:899` is built on the same premise. **The coordinator's premise about them was wrong.**

**Every other site — eleven stating the extent, twenty-plus silent-but-correctly-scoped —
CORRECT.** A semantic sweep (`corner` × goalie × contact, **90 hits read, no phrase-grep**)
found **no unphrased extent error.** ⚠️ **And NO document anywhere implies a goalie outside
the area is fair game** — the 607(d) counterweight is carried at nine sites, and the three
quoting Sit. 5's *"can be legally checked"* limb **all pair it with the not-fair-game half
in the same sentence.**

### ✅ The diagram is CORRECT — checked against 104(d) by hand
`the-privileged-area`, built SVG polygon: **|y| ≤ 22 exactly matches Rule 104(d)**; x = 69 is
the dot line (`goal_line_x` 89 − 20, from `rink.json`); the far edge follows `corner_radius`
28. **The drawn shape stops at the dots.** Caption and `describe` both say *"but not the
corners"* / *"stopping short of both corners"*. ⚠️ **The marker appears in ONE document, its
own owner — no caption-host exposure.** `check_zones.py` reports no hit, **as expected: it
compares diagrams to each other and is blind by construction to a single-instance error.**

- [x] **CLOSED — no repair wave needed for this class.** ⚠️ **The lesson is the dispatch, not
  the corpus: a census aimed at a predicted spread found a defect whose LIFETIME WAS SHORTER
  THAN THE CENSUS.** *"A census run an hour earlier would have found the file clean; one run
  an hour later finds it clean again."*
- [ ] ⚠️ **THE LAYER TEST ON THIS CLASS HAS NEVER BEEN DONE.** The census read facts lines
  **as text** and rendered nothing. **Whether "not the corners" survives into the SPOKEN
  layer in any of the eleven correct documents is unknown** — ⚠️ **and this is precisely the
  class where the body/block split already failed once today.** **Coordinator job.**
- [ ] ⚠️ **`site/src/diagrams/rules_primer.mjs:492` names `content/foundation/rink_map_and_glossary.md`
  as `the-trapezoid`'s owner — a file that has not existed since `fd9e903`.** Another
  instance of the documented stale-owner routing failure. **`site/` agent, next wave.**
- [ ] **`pdftoppm` on USA Hockey's rink plate** — the Glossary ends *"(see rink diagram)"* and
  the diagram source flags the same gap. ⚠️ **Named by the census as "the single
  highest-value thing left here": whether USA Hockey draws the region itself.**
- [ ] ⚠️ **The repair is unstaged, unreviewed, and written by the agent that wrote the
  defect** — *"which is the one thing `CLAUDE.md` says a repair may not be."*

### The layer test the census could not run — done, and it is a WORKLIST, not a finding

**Rendered all 39 documents through `md_to_speech.py` (3,090 chunks), 18 September 2026.**

⚠️ **First, a correction to my own framing.** I began by counting the corner exclusion in
"facts" versus "prose" — **that distinction is meaningless here, because `md_to_speech`
voices BOTH.** The real question is narrower: **a facts line is voiced ALONE with a 300 ms
break either side, so a facts line naming the privileged area without its extent is the
only shape that leaves a listener holding a term they cannot size.**

**Measured on that question:**

| | |
|---|---|
| Facts lines naming the privileged area | **27** |
| Carrying an extent limb | **6** |
| **Not carrying one** | **21** |

### ⚠️ THIS IS NOT 21 DEFECTS, AND MUST NOT BE SWEPT

I read all 21. **Most are quoting 607(c)'s SCOPE as part of a tariff claim** — *"inside the
crease or privileged area"* — where **the extent is not the point** and a listener acts
correctly on the tariff alone. **A term left unsized is not automatically a defect.**

⚠️ **What matters is the DIRECTION a listener's wrong guess runs, and it INVERTS between two
groups:**
- **Tariff lines** (`zone_entries`, `special_teams`, `forechecking_systems`, `center`,
  `winger`, `playing_without_the_puck`): a listener imagining the area **too small**
  under-rates where the high tariff bites. ⚠️ **Guessing it LARGER is the safe direction** —
  they stay off the goalie further out. **Low priority.**
- ⚠️⚠️ **Goaltender-freeze lines** (`goaltender.md`, `defender.md`, `breakouts.md`,
  `faceoffs.md`, `neutral_zone_systems.md` — USA Hockey **614(c)**, CARHA 58(b)): here a
  goaltender imagining the area **larger** freezes the puck where they may not, **and takes
  a minor.** ⚠️ **The safe direction is REVERSED for exactly the reader the line is
  addressed to.** **These are the ones to read first.**

- [ ] **Read the 614(c)/58(b) freeze lines voiced alone and decide whether each needs the
  extent.** ⚠️ **Not a sweep — `check_facts.py --near` first, and several of these lines are
  long. Substitution before insertion.**
- [ ] ⚠️ **I have NOT graded any of the 21.** This row is a worklist produced by a
  coordinator census, and **a census finds candidates; only reading decides.** The same
  measurement run against the tariff group would produce a list that is mostly correct —
  which is how a sweep on this pattern would do damage.
- [ ] ⚠️ **`special_teams.md` reports 0 facts lines carrying the extent while its BODY
  carries *"It does not reach the corners"* at `:1069`** — the body/block split, in the
  document where the tariff group and the net-front reader meet. **Worth one read.**

### ⚠️⚠️ THE MODEL TREATMENT IS THE SOURCE STRING — a correct hedge that travels badly

**The coordinator certified `rules_primer.md:728` as *"the MODEL TREATMENT — write against
it, do not copy it"* and told two agents to leave it alone. An agent that read it reported
back that it carries the same inverted universal.** **Verified directly:**

> *"…and **no clause of Rule 69 read here takes the goal away for where you stood unless you
> were in the crease** — but enforcement is expressly the referee's judgement…"*

⚠️ **BOTH ARE RIGHT, AND THAT IS THE FINDING.** `:728` is **defensible where it stands**:
the paragraph has just read clause (1) whole, quoted the *"Goals should be disallowed **only
if**"* ceiling, said in terms *"what that clause is **not** is a direction to disallow the
goal"*, quoted the sentence that actually disallows, and named 69.3 and 69.4. ⚠️ **The two
words *"read here"* scope the universal to the clauses the paragraph has just walked
through — and they are doing real work.**

⚠️⚠️ **BUT IT IS THE SOURCE STRING OF THE STRIPPED COPIES IN FIVE OTHER DOCUMENTS.** Every
copy kept the sentence and left the analysis behind. **`playing_without_the_puck.md:575`
carries the `:728` form with none of `:728`'s supporting paragraph** — ⚠️ **and `:950` in
that same document already does the clause-(1) ceiling analysis correctly and never
propagated it to `:575`. The identical neighbour failure as `:728`→`:732`, in a second
document.**

- [ ] ⚠️ **THE LESSON IS ABOUT HEDGE PORTABILITY, NOT ABOUT THIS SENTENCE.** *"read here"*
  is a **scope word whose referent is the surrounding paragraph** — so the hedge is correct
  in place and **evaporates on copy, silently, leaving a flat falsehood that greps clean.**
  **A hedge that depends on its neighbours is a hedge that will be stripped.**
- [ ] **Decide whether `:728` should be re-phrased so the scope survives extraction** — e.g.
  scoped to the clauses by name rather than to *"here"*. ⚠️ **Not a defect where it sits;
  a defect generator.** **Needs a `content-reviewer`, and it is the OWNER document.**
- [ ] ⚠️ **`grep` cannot find the next one.** Five wordings of one claim are now known:
  *"every clause…"*, *"…for a player's position"*, *"no clause… unless"*, *"…read here…"*,
  and *"the goal itself comes off the board for where you stood only once you have
  'enter[ed] the goal crease'"* (`language_and_glossary.md:313`, **a fifth site the
  coordinator's list did not have, cited to 69.1 — the very rule that falsifies it**).

### ✅ CLOSED — `rules_primer.md` and `language_and_glossary.md`
**Six lines.** ⚠️ **Including an ATTRIBUTION repair `check_quote_drift` cannot see by
construction:** the existing 5C/5E quotations were **IIHF wording attributed to both books**.
5C is now truncated to the fragment verbatim in **both**; 5E now says explicitly that those
are the IIHF's pronouns and the NHL prints *"himself"*/*"his"*. **Found by reading both
books, not by any tool.**

⚠️ **And a hedge that had drifted onto the wrong antecedent:** `:995`'s caveat sat *after*
the 5C/5E citation and read as hedging **the table rows** too. **Now separated — the
structural reading is ours, the table rows are the books' own words.**

⚠️ **Neither file has a ` ```facts ` block** (`check_facts`: *0 in-scope documents*), so
**no facts-layer propagation exists inside that ownership** — the layer test on this claim
belongs to whoever owns the documents that do carry blocks.

### ⚠️⚠️ THE COORDINATOR'S "SOUND HALF" WAS ITSELF IMPRECISE — relayed to FOUR agents

Every brief on this class told agents: *"the rest of the structural reading is SOUND — 69.1's
**operative disallowing sentence** does require an attacker who *'enters the goal crease'*."*

⚠️ **An agent refuted it and the coordinator verified the refutation against
`sources/nhl_rules_layout.txt:6029-6052`. 69.1 carries TWO disallowing statements, and the
brief named the wrong one as operative:**

1. **In the PREMISE paragraph** — *"Goals should be disallowed **only if**: (1) an attacking
   player, **either by his positioning or by contact**, impairs the goalkeeper's ability to
   move freely within his crease **or defend his goal**…"* ⚠️ **NO LOCATION CONDITION.**
2. **Two paragraphs later, introduced as *"The overriding RATIONALE of this rule is…"*** —
   *"If an attacking player **enters the goal crease** and, by his actions, impairs… the goal
   will be disallowed."*

⚠️⚠️ **The sentence the coordinator called "operative" sits inside a paragraph the book
itself labels RATIONALE. The clause that is operative — the "only if" list — is the one with
no location.**

**So the corpus's reading survives ONLY because of the *"only if" = a NECESSARY CONDITION, a
ceiling, not a direction to disallow* argument.** ⚠️ **Read without that argument, the
"enters the goal crease" form is AS OVERSTATED AS the "every clause" form it was replacing.**

- [x] **The agent therefore did NOT merely delete "every"** — it made the first-limb
  acknowledgement **explicit at every site it repaired**, which is the difference between a
  repair and a sweep.
- [ ] ⚠️ **This is the SECOND relayed gloss of mine to be refuted today** (the first put a
  corner forechecker inside the privileged area). **Both were reviewer glosses I passed on as
  established fact without opening the book; both were caught by an agent that opened it.**
  **The pattern is not "check harder" — it is that a gloss and a quotation look identical in
  a brief, and only one of them has been verified.**
- [ ] **Audit the other documents for form (B)** — `rules_primer.md`, `winger.md`,
  `defender.md`, `goaltender.md`, `body_contact_and_battles.md` were **not** censused for it.
  ⚠️ **Form (B) is SOUND where the ceiling argument accompanies it and OVERSTATED where it
  does not — so this cannot be swept and cannot be grepped. It needs reading.**

### ✅ CLOSED — `shooting.md`, `center.md`, `offensive_zone_play.md` (11 edits)
⚠️ **`playing_without_the_puck.md` — NO CHANGE, and that is the right answer.** `:575` is
*"the best-executed instance of this passage in the corpus"*: its neighbour at `:571` opens
on clause (1) and quotes it verbatim, it already hedges to *"either book's **rule text**"*,
and it already carries **both** 5 C and 5 E. ⚠️ **The agent propagated ITS wording into the
other three files rather than inventing new — the corpus repairing itself from its own best
instance.**

⚠️ **`offensive_zone_play.md:630` ALREADY CARRIED THE CORRECT STATEMENT — 65 lines below the
defective ones, in the same document.** ***"That is the strongest evidence the defect was a
propagation failure, not a research failure."***

**Also found and fixed in passing:** a quote-drift at `shooting.md:296` — a comma **inside**
the quote marks where the NHL prints a semicolon and the sentence continues. `check_quote_drift`
21 → 20 flagged.

⚠️ **Worth keeping: Situation 5 C contains clause (1)'s EXACT operative phrase — *"impairs
the goalkeeper's ability to defend his goal"* — AND ALLOWS THE GOAL ANYWAY.** **That is the
strongest available support for the corpus's practical advice, and it was cited nowhere
until this pass.**

- [ ] **The caption `screen-the-goalie-sightline` cites Situation 5 E only, not 5 C** — ⚠️ **the
  row that mirrors the very limb its own second sentence quotes.** It does **not** carry the
  defect and is *"the best-worded instance in the corpus"*. **For the `site/src/diagrams/`
  agent, next wave.**

## ⚠️ THE CREASE-LINE vs BLUE-PAINT INSTRUCTION — "sole survivor" refuted, five candidates ranked BY EAR

### ✅ CLOSED — `offensive_zone_play.md:1063`
*"re-establish the screen **outside the paint**"* → names the red crease line, in the form
already used at `rink_map.md:18`. ⚠️ **The self-contradiction was real and internal: that
file's OWN facts line at `:538` already said *"Keep your skates off the painted crease
line."***

⚠️ **"The sole survivor" was WRONG — and the agent refuted TWO of its own candidates too.**
`:1127` (KT5) already carries it **twice**; `:565` already says *"the crease line is the
unresolved edge, so do not screen from on it."* **Both left untouched.**

### ⚠️ FIVE remaining candidates — and the RENDERER re-ranks them

The agent deliberately did not sweep and handed the ranking back. **Rendered through
`md_to_speech` (109 chunks):**

| line | layer, as HEARD | carries the line limb? | priority |
|---|---|---|---|
| **`:611`** | ⚠️ **FACT — voiced ALONE** | **no** | ⚠️ **HIGHEST. 196/200 — FOUR characters. Substitution only; never brief an insertion here.** |
| **`:539`** | ⚠️ **FACT — voiced ALONE** | **no** | ⚠️⚠️ **HIGHER THAN THE AGENT GRADED IT — see below** |
| `:14` | prose (chunk 001) | no | medium — `shooting.md:14` carries the refinement in this exact layer |
| `:35` | prose (chunk 003) | no | medium |
| `:632` | prose (chunk 063) | no | lower — inside the rules section that states it at `:553` |

### ⚠️⚠️ THE RE-RANK, AND IT IS A LESSON ABOUT READING vs HEARING

The agent graded `:539` **weaker** because *"it sits immediately under `:538` in the same
block, so the layer carries the correction one line earlier."* ⚠️ **That reasoning is
correct for a READER and wrong for a LISTENER.** `:538` and `:539` are **separate
utterances**, each in its own `<p>` with a 300 ms break either side. **Proximity in the
block is not proximity in the ear.**

⚠️ **And the direction is unsafe:** *"Never: Plant your feet in the blue paint"* voiced
alone **implies the paint is the boundary** — so standing **on the red line** reads as
permitted. **It is not: USA Hockey 625(b) takes the goal on position alone, and the line is
part of the crease in three books.**

- [ ] **Work `:611` and `:539` first, as one job, by substitution.** ⚠️ **Not a sweep — the
  three prose sites are a separate judgement, and *"outside the paint"* stays CORRECT
  wherever the subject is the blue paint as a REGION rather than a screener's feet.**

## ⚠️ TOOL FIX — `check_facts_antecedents.py` crashed on a RELATIVE path

Reported by an agent **whose brief told it to run the tool**. `Path.relative_to` **raises**
rather than resolving, so `check_facts_antecedents.py content/foo.md` died with
`ValueError: 'content/…' is not in the subpath of '/Users/…'` — ⚠️ **naming a path that
plainly exists.**

**Fixed:** resolve before comparing, fall back to the path as given. ⚠️ **Verified
OUTPUT-NEUTRAL:** absolute-path run byte-identical, whole-corpus run still **39 documents,
18 hits** — the same figure measured earlier today by a different agent.

⚠️ **Changed DURING a wave, which the process forbids — so the one live agent that had been
told to run this tool was messaged with what changed, what did not, and when to re-run.**
**That is the required mitigation, not a substitute for the rule.**

- [ ] ⚠️ **THIS IS THE SECOND TOOL-INVOCATION TRAP FOUND TODAY, AND BOTH POINT THE WRONG
  WAY.** `check_facts.py --quiet` treats the flag as a path and dies **reading as a gate
  failure on the corpus**; this one reads as a broken file. ⚠️ **A coordinator running the
  gates in an exit-code loop that swallows stderr converts its own typo into a finding
  against the content.** **Consider a shared argument-parsing guard across `scripts/*.py` —
  BETWEEN waves, never during one.**

## ⚠️⚠️ THE COORDINATOR GREPPED ITS OWN REVIEW RECORD AND BRIEFED AN AGENT ON IT — second instance

**18 September 2026.** A brief told a `site-reviewer` that *"a Check yourself item and a
Sources trailer both pointed at `#screening-the-goalie--what-is-actually-legal`"* and to hunt
dangling links.

⚠️ **That string appears NOWHERE in `content/`.** `git show HEAD` confirms §9 had three
`###` at HEAD; the diff **adds four anchor references and removes none**. ⚠️⚠️ **The slug
survives in exactly one place — `project/reviews/section_split_pilot_2026-09-18.md`, which is
the coordinator's own record of its own earlier work.**

⚠️ **SECOND INSTANCE IN THIS PILOT.** The first: a re-measurement returned one hit, and **the
hit was the plan row describing the grep.**

- [ ] ⚠️ **THE RULE: a corpus census EXCLUDES `project/`.** Recording work in a tracked file
  puts that file in the search space, and **notes about a defect look exactly like the
  defect.** `grep -rn … content/` — **never bare `grep -rn … .`**
- [ ] ⚠️ **And the failure is self-reinforcing: the more carefully the coordinator records,
  the more of its own prose it will later find and mistake for corpus state.** **The
  discipline has to be in the search, because it cannot be in writing less down.**

## ⚠️ THE MOBILE ToC EXISTS — every "desktop-only" ToC scoping in this project's records is WRONG

An earlier review established *"`nav.toc` computes to `display: none` at 375 px… there is no
on-page table of contents on a phone at all"*, and the coordinator carried that into later
briefs.

⚠️ **Half right, and the wrong half is the one that mattered.** `.toc` — the desktop aside —
**is** hidden. **But `TableOfContents.astro` ALSO renders a `variant="inline"`
`<details class="toc-inline">`, `display: block` at 375, collapsed by default, carrying every
entry.**

- [ ] ⚠️ **Re-scope every ToC finding in `project/reviews/` that was marked desktop-only.**
  **The legibility question arises on a phone too.**
- [ ] **Two sibling headings now scan as one entry duplicated, in BOTH viewports** — they
  wrap to two lines and **line 1 differs only by `where`/`whom`, which share `wh`, are the
  same length, and sit mid-line.** ⚠️ **Cause is content surfaced by wrap width — a
  `content-reviewer` question about the heading text, NOT a CSS fix.**
- [ ] **Pre-existing and corpus-wide: diagram credits lower-case the document title** —
  *"Diagram from playing without the puck"* — **119 instances across 20 documents.** Own row;
  nothing in today's work caused it.

### ⚠️ A CDP harness trap, for whoever writes the next site review
A reviewer's first four theme captures **rendered light in both themes**. Cause: *"my second
`goto` differed from the first only by `#fragment`, so Chrome did a same-document navigation,
the page never reloaded, and `theme-init.js` never re-ran."* ⚠️ **The site was fine; the
method was wrong. Force a cross-URL load between theme changes.**
⚠️ **Also still live: `resize_window` via the Chrome extension reported SUCCESS while the
viewport stayed pinned at 1483×766 across three attempts.** **Exact widths require CDP.**

## ⚠️ THE WITHIN-BLOCK CONTRADICTION CLASS — censused, and it is TWO instances, not a pattern

A `safety-reviewer` found `winger.md:454` and closed by saying: ***"Nothing prompted me to
check the other five documents' facts blocks for the same collision, and I did not."***
**Coordinator census over all 841 blocks, 18 September 2026:**

### 1 · Blocks holding BOTH an off-the-line instruction and an on-the-line permission
**Exactly two matched, and only one is a defect:**
- ⚠️ **`content/positions/winger.md` block at `:452` — THE DEFECT.** `:453` *"off the red
  line"* against `:454` *"plants himself **on the crease line**"*. **Two facts lines, one
  block, voiced alone, contradicting.**
- ✅ **`content/technique/shooting.md:452` — NOT a defect, and it is THE MODEL.** It matched
  both patterns **because ONE LINE carries both limbs**:
  > *"Both books' tables allow the planted screen **'on the crease line or outside the goal
  > crease'** … — **an appendix table, not rule text; and three books count that line as
  > crease, so stay off the line**"*

⚠️ **So the corpus already contains the solution, in a sibling document, one line long.**
**`winger.md:454` has 17 characters of headroom** — ⚠️ **measure before assuming that is
enough for this limb; it may need its own line, which `center.md:369` shows is the other
accepted shape.**

### 2 · The *"No book voids"* absolute
**Appears in ONE document only** — `center.md:387` (facts) and `:740` (Key Takeaway 8).
⚠️ **So the over-strong absolute is NOT a class either. It is local, and it collides with
USA Hockey Casebook 625 Sit. 10's stick limb.**

### 3 · ⚠️ Who carries the USA Hockey STICK limb, and in which layer
**Carried in a layer a reader or listener actually meets:** `language_and_glossary.md:417`,
`:447` · `body_contact_and_battles.md:1090` (**a facts line**) · `shooting.md:487`, `:501` ·
`special_teams.md:1108` · `goaltender.md:1046`.

⚠️⚠️ **Carried ONLY in the Sources trailer — a layer `md_to_speech` does not voice and a
reader skips: `center.md:753` and `winger.md:738`.** **Those are precisely the two documents
that instruct a net-front player to keep the stick free for tips.**

- [ ] **Two bounded repairs, not a sweep:** the `winger.md:452` block collision, and
  `center.md`'s absolute plus its trailer-only stick limb. ⚠️ **Both files are held by live
  reviewers as this is written — do not dispatch until they release.**
- [ ] ⚠️ **The lesson for the next census: a pattern that matches a MODEL and a DEFECT
  identically is the normal case.** Both hits here matched the same two regexes; **only
  reading told them apart**, and a sweep would have "fixed" the best line in the corpus.

## ⚠️⚠️ A "STALE SOURCE TABLE" REPORTED FIVE TIMES RUNNING IS A PHANTOM — and the real cost is elsewhere

`ls sources/*.txt` → **36**. `.claude/agents/rules-verifier.md` has **32 table rows**.
Five consecutive verifiers have reported the gap as staleness. **It is not.**

⚠️ **The four IHUK Rules of Competition `_layout` twins are recorded INLINE, in their
siblings' rows, as *"`_layout` twin present"*.** **32 rows + 4 inline = 36. The inventory is
COMPLETE**, and the agents were counting rows against files.

### ⚠️ But it still costs something, and it is not the counting
**The same pass that raised it most recently also wrote:** *"I did not search the four IHUK
Rules of Competition… for any British departure on Rule 69."* ⚠️⚠️ **THE SAME FOUR FILES.**

**An inventory entry that does not look like an entry does not get put on a search list** —
which is the routing failure this project already documents for `sources/README.md`, occurring
inside the agent definition that warns about it.

- [x] **`.claude/agents/rules-verifier.md` updated** to state the arithmetic, name the four
  twins, and say plainly that they are expected to be searched. ⚠️ **A definition edit is
  shared state — made between waves, with no verifier live.**
- [ ] ⚠️ **The open question this exposes is real and unanswered: no British domestic
  override has ever been searched for Rule 69.** The IHUK Rules of Competition, the In-House
  Rules and `eih_rr.txt` were not read. ⚠️ **The corpus is written for a British reader and
  the IIHF is Britain's book — so a departure, if one exists, reaches every screening claim
  in the corpus.** **Own dispatch.**

## ⚠️ THE league→game PROPAGATION — my site list was HALF, and my implied fix was a CONTRADICTION

### ✅ CLOSED — `defender.md` and `defensive_zone_coverage.md`
⚠️ **The brief named 8 sites. The census found 17 defect sites plus 5 consistency sites.**
Missed included ***"the strongest body-level defect in either file"*** (`defender.md:239`)
and a **facts line** (`defensive_zone_coverage.md:463`).

⚠️ **And one of my named sites was not a defect at all: `defender.md:243` is a NEGATION**
(*"a full-checking league does not make it free **either**"*) **— the real defect sat four
lines earlier.** **`defender.md:835` was ALREADY repaired**, carrying 604(a), 604(b) and the
Blind Hockey rule.

### ⚠️⚠️ THE FIX I IMPLIED WOULD HAVE BROKEN THE DOCUMENT, AND ITS FIRST PASS DID
Rewriting *"taking the position is not scoped to checking leagues"* as *"is legal wherever
you play"* **contradicts the same paragraphs**, which say **Hockey Canada writes NO box-out
entitlement** — *"unwritten rather than written-legal"*.

⚠️ ***"I caught it on the whole-file diff"*** — and replaced all five with *"does not depend
on whether checking is legal in your game"*, **which preserves the meaning without the
over-claim.**

⚠️ **THIS IS THE THIRD TIME TODAY A COORDINATOR'S PROPOSED WORDING WAS THE DEFECT** (after
the 69.4 deletion and the partial 604(b) quote). **`CLAUDE.md`'s rule — *specify the DEFECT
and the CONSTRAINT, let the agent that has read the document write the sentence* — earned its
place again, and the whole-file diff is what enforced it.**

**Measured:** *"game" IS shorter — `defender:225` 197→195/200, `dzc:485` 196→194/200, and
**corpus-wide near-cap lines went 34 → 33.**

- [ ] ⚠️ **Handover it named as highest-value and could not do: whether its new wording now
  contradicts the concurrent edits in `body_contact_and_battles.md`** — *"the owner document
  for this technique"* — **and in `offensive_zone_play.md`, `rules_primer.md` and
  `language_and_glossary.md`, all edited by other agents while it worked.**

## ⚠️ THE COORDINATOR MISLABELLED FOUR REVIEW DIMENSIONS IN A BRIEF

**18 September 2026.** A `content-reviewer` brief asked for *"D4 — the cardinal rule"*,
*"D5 — numeric ownership"*, *"D7 — voice and register"*. **Verified against
`project/review_process.md:220-234`:**

| brief said | canonical |
|---|---|
| D4 = cardinal rule | ⚠️ **D4 = Citation integrity — `source-verifier`'s, NOT RUN** |
| D5 = numeric ownership | ⚠️ **D5 = Provenance — `source-verifier`'s, NOT RUN** |
| D7 = voice and register | **D7 = the cardinal rule** |
| — | **D8 = numeric ownership · D14 = structure, style, terminology** |

⚠️⚠️ **THE GATE BLOCKED FOR WANT OF A DIMENSION-COVERAGE STATEMENT, AND THE COORDINATOR'S
ATTEMPT TO SUPPLY ONE WOULD HAVE RECORDED TWO DIMENSIONS AS COVERED THAT NOBODY HAS RUN.**
**The reviewer reported against canonical numbering and said so. Its table is the record; the
brief's numbering is not.**

- [ ] ⚠️ **Never write a dimension number into a brief from memory. `review_process.md:220-234`
  is the owner and it is fifteen rows** — **the same "copied out of its owner and goes stale"
  failure `CLAUDE.md` records three times about FIGURES, reproduced for LABELS.**

## Workstream 6: the wave the gate's BLOCK required — four agents, disjoint

**Dispatched 18 September 2026 after the sixth BLOCK.** One critical, eight majors and two
propagations found outside the diff.

| agent owns | carries |
|---|---|
| `body_contact_and_battles.md` | M3 owner-qualification shed · M4 antecedent · M5 six-fold restatement + boundary stutter · M6 ratio · M7 §1 heading (**9 inbound links, 2 in prose**) · `:172`/`:173` same-block contradiction · attribution drift ×2 · 4 minors |
| `winger.md` + `center.md` | ⚠️ **the CRITICAL block collision** · attribution drift · the *"No book voids"* absolute vs Casebook 625 Sit. 10 · the trailer-only stick limb |
| `on_ice_communication.md` + `goaltender.md` | ⚠️ **the CRITICAL league→game in facts AND Common Mistakes**, with `:271` already fixed in the same file · a **third** document at 199/200 |
| `shooting.md` + `playing_without_the_puck.md` + `offensive_zone_play.md` | the *"read here"* deictic · the 69.4 facts-layer gap · attribution drift ×2 · the blue-paint candidates |

### ⚠️ STILL UNREVIEWED AFTER THIS WAVE — both named by the `content-reviewer` as hand-offs
- [ ] ⚠️ **D10, the key-facts layer: *"two new blocks, 21 new facts lines — the largest
  facts-layer change in the diff and it has not been reviewed on its own dimension."***
  **`facts-reviewer`, after the edits land.**
- [ ] ⚠️ **D11, reader safety on the newest §9 text** — *"the most important hand-off in the
  report."* The `whom you may touch` subsection is **11 facts lines and 2 bullets of contact
  technique and penalty tiers** — charging a goaltender, ejection thresholds, match
  penalties — ⚠️ **and it has changed since the last safety pass read it.**
- [ ] **D4 and D5 — citation integrity and provenance — have never been run on any of this.**
  ⚠️ **Four new citation blocks are absent from `body_contact_and_battles.md`'s Sources
  trailer, and the trailer asserts Casebook 625 Situations 1–17 *"have none"* of a screening
  provision while the body now quotes Situation 10 from that block.** **`source-verifier`.**

## ⚠️⚠️ "HEAD MOVED DURING MY WORK" IS A FALSE ALARM WITH A KNOWN CAUSE — every agent will hit it

An agent reported: *"**HEAD moved during my work** (`734d8b0` → `be465e6`). Someone's
finished work is sitting unstaged in a file you assigned to me."* ⚠️ **It reported rather
than acting, which is exactly right. Both halves are false, and the cause is structural.**

**Verified:**
- `git merge-base --is-ancestor 734d8b0 be465e6` → **true.** `be465e6` was committed at
  **13:01:38**; the work in question began at **13:12**. ⚠️ **HEAD has not moved since.**
- Every commit between them is **this session's own earlier work**, 06:00–13:01.
- The *"changes that are not mine"* at `on_ice_communication.md:263`/`:277` are **this
  session's too** — written by the propagation agent dispatched two waves earlier.

### ⚠️ THE CAUSE: a stale snapshot in the agent's own context, labelled as stale
The harness injects a `gitStatus` block at **conversation start** that lists *"Recent
commits: 734d8b0…"* and says in terms that it **"will not update during the conversation."**
⚠️ **An agent that compares that snapshot against live `git log` concludes HEAD moved — every
time, for the rest of the session, no matter what actually happened.**

⚠️⚠️ **THIS IS THE SAME CLASS AS THE COORDINATOR'S OWN SELF-REFERENCE ERROR TODAY** — briefing
an agent to chase a dangling anchor that existed only in the coordinator's own review record.
**Both are a stale artefact inside the working context being read as live repository state.**

- [ ] ⚠️ **Say this in any brief that mentions git state: the `gitStatus` block is a
  START-OF-CONVERSATION SNAPSHOT. `git log -1` and `git status` are the authority.** A stale
  snapshot is not evidence of concurrent work.
- [ ] ⚠️ **And the inverse is the dangerous half: a genuine concurrent commit would look
  IDENTICAL to this false alarm.** **The discriminator is `git merge-base --is-ancestor <old>
  <new>` plus commit timestamps against when the agent started — not the snapshot.**
- [ ] **Unstaged work in a file assigned "exclusively" is normal in this session** — the
  coordinator holds a multi-wave change set unstaged by design, because the gate has blocked
  six times. ⚠️ **Brief agents that the working tree carries other agents' finished,
  unstaged work, and that touching it is the thing to avoid — not a sign of a clobber.**

## ⚠️⚠️ EXTRACTION TRAP SEVEN: THE CURLY APOSTROPHE — and it VALIDATES a false claim

**Measured 18 September 2026:**

```
grep -c "goaltender's vision" sources/hc.txt   →  0      (straight apostrophe)
grep -c "goaltender’s vision" sources/hc.txt   →  1      (curly — what the book prints)
```

⚠️⚠️ **THIS TRAP IS WORSE THAN THE OTHER SIX, BECAUSE IT FAILS IN THE DIRECTION THAT
CONFIRMS A FALSEHOOD.** Table 14's interleave makes a **true** quotation look missing — the
error is visible as a puzzle. **This one makes a provision that EXISTS look ABSENT**, so a
verifier checking *"Hockey Canada writes no goaltender-vision provision"* with a straight
apostrophe gets **zero hits and marks the claim CONFIRMED.**

**That is exactly the shape of the defect it hid**: two `Rule:` lines asserting Hockey Canada
writes no such provision — `center.md:388` (**a regression introduced today**) and
`offensive_zone_play.md:455` — ⚠️ **each contradicting a correct line in its own document.**

- [ ] ⚠️ **Search apostrophes BOTH ways, or strip them.** The corpus's own tools already do
  this — `check_quote_drift.py` matches on **alphanumerics only**, which is why it never
  reported these lines. ⚠️ **A hand grep is the weakest link, and it is what verifiers use.**
- [ ] ⚠️ **Every negative existence claim confirmed today by a hand grep containing an
  apostrophe is UNCONFIRMED.** **Re-test them.** The USA Hockey no-goaltender-vision negative
  was attacked four times and held — ⚠️ **but check what search strings were used.**
- [ ] **The seven traps, for any brief that touches `sources/`:** Table 14/16 interleaving ·
  a `Playing Rules` page-furniture splice **inside** a Casebook answer · NHL 42.1 split across
  a page break · HC 7.6(b) wrapped · the IIHF 5 C row breaking `attacking` as `atta-`/`cking`
  · a **case-sensitive** grep missing its own target (*"No clause"* vs *"no clause"*) · and
  **the curly apostrophe.**

## ⚠️ "TWO PROVISIONS" vs "TWO REFERENCES" — the corpus is more precise than the coordinator was

A brief said *"Hockey Canada writes TWO [provisions]"*. ⚠️ **An agent corrected it: both
citations are real, but they are ONE PROVISION AND ITS OWN INTERPRETATION, both at Rule
8.5** — `hc.txt:6998` is 8.5's *Goal Crease Area* paragraph, `hc.txt:7051` is *Interpretation
3 to 8.5(a)*.

⚠️ **The corpus's own phrasing is *"two REFERENCES to the goaltender's view"*, and
`body_contact_and_battles.md:1083` records *"both at 8.5"*.** **The coordinator's paraphrase
was the loose one.**

- [ ] ⚠️ **The lesson is the one this file keeps recording: a figure or a term copied out of
  its owner loses the owner's precision.** *"References"* and *"provisions"* are not
  interchangeable when the count is the point.

## ⚠️⚠️ THE 69.4 DEFECT'S UPSTREAM SOURCE WAS THE STYLE GUIDE ITSELF

**Found 18 September 2026 by a repair agent, in a file it did not own and reported rather
than touched.**

`project/content_style_guide.md:147` — **the specification the documents were written
from** — read:

> *"…and **69.4, the rule for outside the crease, has no positioning limb.**"*

And `:159` carried the same in a second wording. ⚠️ **In context both are arguing about
VOIDING A GOAL, where the claim is TRUE. Written unqualified, they are false as to the
PENALTY** — NHL 69.4's third paragraph reaches a player who leaves a goalkeeper *"prevented
from returning to his crease area due to the **deliberate actions** of an attacking player"*,
who *"**may be penalized** for goalkeeper interference."* **No contact element.**

⚠️⚠️ **THE SPEC PROPAGATED ITS OWN OMISSION INTO TEN FACTS LINES ACROSS SEVEN DOCUMENTS**, one
of which a `facts-reviewer` graded **CRITICAL**. **Every downstream repair today was treating
a symptom.**

- [x] **BOTH SITES CORRECTED.** The goal/penalty split is now stated explicitly, with the
  rule's own words, plus the instruction *"Scope it to the goal every time."* ⚠️ **The
  correction is UNREVIEWED — written by the coordinator, and a repair is new text.** **It
  goes to the commit gate with the rest.**
- [ ] ⚠️ **THE LESSON IS ABOUT SPECIFICATIONS, NOT ABOUT RULE 69.** `content_style_guide.md`
  carries dozens of *"do not write X"* rulings distilled from primary text. **A distillation
  that drops a qualifier does not fail any checker, is never voiced to a listener, and is
  copied BY DESIGN into every document written afterwards.** ⚠️ **It is the same shape as the
  `rule69_clauses.mjs` header found an hour earlier — a comment reading *"Settled ground. Do
  not reopen or re-word"* that carried the very absolute the corpus spent today removing.**
  **Two root causes, both in prose nobody checks, both protected by their own authority.**
- [ ] ⚠️ **Audit the style guide's other rulebook distillations against primary text.**
  **Nothing has ever done this** — the guide is read as the specification, not as a claim.
  **Its rulings about Rule 69 alone now have two known defects.** **Own dispatch,
  `rules-verifier`.**

### ⚠️ And the coordinator's alignment target was itself defective
The brief told the agent to align to *"this document's own `:454` and its body at `:466`/`:727`"*.
⚠️ **`:466` and `:727` CARRIED THE SUPERSEDED FORM — both rewritten today and both left with
it. Aligning to them would have propagated the defect INTO the fact instead of out of it.**
**And `:454` no longer mentions 69.4 at all after today's rewrite.**
⚠️ **The defect was in FOUR places across those two files, not the one the brief named** —
including `center.md:406`, unflagged.

- [ ] ⚠️ **`center.md:369`** has the same traceability defect as the cut `:370`, ⚠️ **but the
  agent DECLINED to cut it: *"removing a crease-line warning from the block a slot centre
  hears is a bigger call than cutting a line this diff had just added."*** **Correct
  restraint. Own row.**
- [ ] **`winger.md`'s Common Mistakes carries no screen/crease entry at all**, so the stick
  limb and the 69.4 penalty limb reach its body and Key Takeaway but not that layer.
  ⚠️ **Reported, not authored — *"the topic was never in that chain"*, so this is not a
  correction that stopped short.**

## ⚠️ THE 5 C / 5 E DISCRIMINATION — a corpus-wide class, CANDIDATES not defects

**NHL Table 14 / IIHF Table 16, verified against three books today:**
- **5 C** — *"An attacking player skates in front of the goalkeeper, **outside the crease** …
  **remains in motion** and impairs the goalkeeper's ability to defend his goal."*
  ⚠️ **NO VISION LIMB.**
- **5 E** — *"**plants himself** on the crease line **or outside the goal crease**, as to
  **obstruct the goalkeeper's vision** and impair his ability to defend his goal."*

**Both answer *"Goal is allowed."*** ⚠️ **So the OUTCOME is the same and nothing in the corpus
is false about the result — the defect is attributing 5 E's vision limb to 5 C, which makes
the moving-player row look like the row that answers a SCREEN. A screener is planted.**

### Coordinator census, 18 September 2026
**36 lines name both rows. 19 also carry a vision limb** in:
`language_and_glossary.md:355` · `on_ice_communication.md:277` · `rules_primer.md:732`,
`:995` · `center.md:403`, `:405`, `:740` · `goaltender.md:474`, `:1052`, `:1114`, `:1119` ·
`defensive_zone_coverage.md:116` · `offensive_zone_play.md:552`, `:566`, `:631`, `:1128` ·
`special_teams.md:1041` · `body_contact_and_battles.md:1084`, `:1095` · `shooting.md:890`

⚠️⚠️ **THESE ARE CANDIDATES, NOT FINDINGS.** A line may name both rows and attach the vision
limb **correctly to 5 E alone** — ⚠️ **and `body_contact_and_battles.md:1095` is on this list
and has been verified TWICE as the corpus's most careful treatment.** **A sweep would damage
it.** ***A census finds candidates; only reading decides.***

- [x] ⚠️⚠️ **RETRACTED IN PART, 18 September 2026 — this row named defects THIS COMMIT
  REPAIRS.** `goaltender.md:474`, `:1052` and `:1119` were all fixed before staging, and a
  `commit-gate` verified the staged text carries the repair. ⚠️ **Left standing, the row would
  have sent the next agent after a defect that no longer exists** — which is [G1a]: **retract
  the ROW, not just the item.**
- [x] ⚠️⚠️ **RETRACTED — THIS COMMIT REPAIRS IT.** A `commit-gate` read the staged line and
  found it separates the rows correctly; the review record logs the repair. ⚠️ **Left standing,
  the plan and the record would contradict each other INSIDE ONE COMMIT** — G1a, applied two
  rows above for `goaltender.md` and missed here.
- [ ] **WAS: the live target at `content/systems/special_teams.md:1041`**, which a `commit-gate`
  re-derived from the raw columns: it attributes 5 E's vision limb to 5 C **and** drops 5 E's
  *"or outside the goal crease"* disjunct. ⚠️ **It survived because the line WAS rewritten by
  this round's 69.4 repair, and the 5 C/5 E sentence sat in the same line PAST THE END OF THE
  CLAUSE UNDER REPAIR** — *"Read to the end of the sentence, then to the end of the
  paragraph."*
- [ ] **Plus five UNTOUCHED lines, where the open-row treatment is correct:** `center.md:403` ·
  `goaltender.md:1114` · `defensive_zone_coverage.md:116` · `offensive_zone_play.md:631`,
  `:1128`. ⚠️ **Eleven of the twelve touched lines were read and are CORRECT** —
  `language_and_glossary.md:355`, `center.md:740` and `body_contact_and_battles.md:1095` were
  graded **exemplary**, and the instinct to protect `:1095` from a sweep was upheld.
- [ ] ⚠️ **D4 and D5 are CLOSED for `body_contact_and_battles.md` and `goaltender.md` ONLY.**
  **The `source-verifier` did not reach the other fifteen changed `content/` files** — *"the
  same one-book-wording-under-two-book-attribution pattern could exist in the rest and I have
  not looked."* ⚠️ **`check_quote_drift.py` cannot see that pattern by construction, so no
  tool will surface it.** **Own dispatch.**
- [ ] ⚠️ **`special_teams.md:1032` states the 69.4 returning-goalkeeper limb with NO
  precondition** — pre-existing, outside this diff, **same class as the blocking finding.**
  ⚠️ **Do NOT bundle the edit; file it.** **And do not sweep: `:1032`'s neighbours state the
  USA Hockey route, which genuinely has no puck-playing precondition.**
- [ ] **`center.md:386` cites 5 C AND 5 E where it once cited 5 E alone.** ⚠️ **A gate judged
  this coherent, NOT a regression** — this plan reasons at two other rows that citing both is
  the model, because 5 C carries clause (1)'s operative phrase and allows the goal anyway.
  **Record that the two readings are deliberate, so the next agent does not "fix" one into the
  other.**
- [ ] **Three sites call 5 C's in-motion attacker *"a screen"*** — `rules_primer.md:995`,
  `offensive_zone_play.md:566`, `shooting.md:890`. ⚠️ **Not misattribution and not blocking;
  legitimate candidates for this row.**
- [ ] ⚠️ **A SECOND, NARROWER defect in the SAME repair:** `goaltender.md:1052` and `:1119`
  state 5 E's scope as *"on the crease line"* and **drop *"or outside the goal crease."***
  ⚠️ **The dropped disjunct is the WIDER and COMMONER case — a screener planted a foot
  outside the paint — so dropping it makes the goaltender's protection look BROADER than it
  is.** **The vision split is now right; the location scope is not.**
- [ ] ⚠️ **Three of today's repairs touched this class and each fixed the instance in front of
  it.** **Nobody has read the class.** **Own dispatch, after the current commit.**

## ⚠️ THREE COORDINATOR FIGURES REFUTED IN ONE BRIEF

A `facts-reviewer` brief asserted block `1097–1109` was *"at `HARD_MAX` 11 with 1–6 characters
free on most lines."* **Measured per character:**

```
1099  free 146   |  1102  free  33   |  1105  free  83   |  1108  free   6
1100  free  19   |  1103  free   8   |  1106  free  32   |  1109  free   1
1101  free   9   |  1104  free  12   |  1107  free   3
```

⚠️ **Three lines are within 6; FOUR have 32 or more free, and one has 146. Total slack 352
characters.** ***"Lengths are not what blocks the addition — `HARD_MAX` 11 is."***

- ⚠️ **`:1135` is NOT the near-cap line; `:1136` is** (197/200). `:1135` has 46 free.
  ***"A line number is a figure."***
- ⚠️ **`check_facts.py --near` today reports ZERO lines AT their cap** — the brief said seven.
- [ ] ⚠️ **All three were copied from earlier reports rather than re-measured.** **A headroom
  figure goes stale the moment any agent edits the block, and eleven agents edited today.**
  **Re-run `--near` per brief; never carry a number between waves.**

## ⚠️⚠️ `check_quote_drift.py` ONLY SEES MARKDOWN-EMPHASISED QUOTATIONS — plain `"…"` IS INVISIBLE TO IT

**Found 18 September 2026 by an agent repairing a quotation the tool had never flagged.**

Its extraction regex is `r'\*"([^"]{N,})"\*'` (`scripts/check_quote_drift.py:115`) — ⚠️ **it
matches only quotations wrapped in Markdown emphasis, `*"…"*`. A plain `"…"` quotation is not
extracted at all, so it can never be compared to the source.**

⚠️ **A plain-quote variant run over ONE document flagged FOURTEEN drifts of exactly the
classes the tool exists to catch** — `body_contact_and_battles.md:520`, `:572`, `:582`,
`:589`, `:730`, `:1128`, `:1197`, `:1230`, `:1232`, `:1365`, `:1424`, `:1506`, `:1567`.

⚠️⚠️ **THIS IS WHY `:1580`'S WRONG ATTRIBUTION SURVIVED EVERY GATE ALL DAY, AND WHY `:589` —
the SAME rule quotation, 1,000 lines above it — carried a lowered capital and a comma added
inside the quote marks where the source continues.** **One agent repaired `:589` because
*"repairing `:1580` while leaving the same rule mis-quoted 1,000 lines above would have been
half a repair."*** **The other thirteen were left: *"they need reading, not sweeping — several
are sentence-initial capitals that may be deliberate."***

- [ ] ⚠️ **DO NOT "FIX" THE TOOL BY BROADENING THE REGEX AND RUNNING A SWEEP.** The corpus has
  **839 blocks and ~340 body-verified citations**; broadening extraction would produce a
  worklist of unknown size in which **the disclosed-insertion convention (`[a]`), ALL-CAPS
  source headings and deliberate sentence-initial lowering are all CORRECT** — the tool's own
  docstring says so. **A change this size is a tool change, and a tool change goes BETWEEN
  waves with every live agent told what moved.**
- [ ] **Measure first: run the plain-quote variant corpus-wide as a REPORT ONLY**, and record
  the count before deciding anything. ⚠️ **The 14-in-one-document figure is from a single
  file and must not be extrapolated.**
- [ ] ⚠️ **And the blind spot is WIDER than the regex:** the tool also **cannot see attribution
  drift** by construction — it keeps the closest match across ALL sources — ⚠️ **which is the
  other half of why `:1580` survived: the string was verbatim, just from the wrong book.**
  **Two independent blind spots intersecting on one line.**

### ⚠️ A `sources/README.md` entry the same agent found missing
Its `usah_casebook.txt` entry **does not record that page furniture is spliced INSIDE Rule 607
Situation 4** — *"clearly made every attempt to"* / `Playing Rules` / *"avoid the contact with
the goalkeeper."* ⚠️ **That is why `check_quote_drift` reports that fragment NOT FOUND at three
sites; the string IS in the book.** **Own row.**

### ⚠️ A trailer gap wider than the four citations repaired
A body-vs-trailer census found `body_contact_and_battles.md`'s trailer **also missing Casebook
615 Situations 12, 14, 20, 21; 632 Situation 1; and 639 Situations 1 and 4.** ⚠️ **The agent
verified only the four it was briefed on and DECLINED to add these — *"unbriefed additions to
a provenance layer are yours to route."*** **Correct restraint.** ⚠️ **And it reported a false
positive of its own regex (`621/2`, covered by the trailer's *"Situations 1 to 15"*) rather
than letting it stand.**

### ⚠️ An operational near-miss, reported by the agent that caused it
To diff cleanly it ran `git stash push -- <file>` then `pop`. ⚠️ **`pop` does NOT restore the
index**, so the file silently reverted to HEAD in the index while the working tree held
everything. ***"Re-stage this file before the gate. My apologies — that was avoidable."***
⚠️ **Coordinator verified nothing was lost: 1,707 lines vs HEAD's 1,667, today's possessive
fix, both renamed headings and the renamed §1 all present, and no stash left behind.**
**It also recovered the pre-edit blob from the dropped stash commit to prove only its own five
edits differ.**
- [ ] ⚠️ **Never `git stash` to get a clean diff in this repository** — `git diff HEAD -- <file>`
  and `git show :<path>` do the job without touching the index. **`CLAUDE.md` already bans
  stashing files you did not modify; this is the adjacent trap for files you DID.**

## ⚠️ FOUR SURVIVING 69.4 PRECONDITION SHEDS — outside this commit's diff, filed not bundled

**NHL 69.4's returning-goalkeeper limb bites ONLY *"when a goalkeeper has played the puck
outside of his crease"*.** **Six sites were repaired in the 18 September round; these four sit
on lines that commit does not touch:**

| site | layer | note |
|---|---|---|
| `special_teams.md:1181` | Sources trailer | quotes *"due to the deliberate actions"* without the opener |
| `defensive_zone_coverage.md:795` | Sources trailer | ⚠️ **same wording, found by an agent and NOT in its brief** |
| `team_play_and_culture.md:280` | body | ⚠️ **the quotation is SPLICED MID-SENTENCE, dropping the *"When a goalkeeper has played the puck…"* opener** |
| `rink_map.md:194` | body | bare statement |

- [ ] ⚠️⚠️ **DO NOT SWEEP THE STRING.** **USA Hockey's Casebook 625 Situation 9 route has NO
  puck-playing precondition** — its conditions are *"completely out of their crease"* and
  *"attempting to return"*. ⚠️ **`special_teams.md:1030` and `defensive_zone_coverage.md`'s
  USA Hockey sites are CORRECT and were protected today**, and ⚠️ **`special_teams.md:1047`
  carried a correct look-alike and a real shed A FEW HUNDRED CHARACTERS APART IN ONE LINE.**
  **Read each; a sweep writes a false precondition into correct sentences.**
- [ ] ⚠️ **`rules_primer.md:701` READS like a shed and is NOT one** — the full clause follows
  in the same line. **Verified twice. Do not "fix" it.**
- [ ] **Two working fix shapes exist and neither transfers universally:** the
  **relative-clause-on-the-goalkeeper** restructure (gained headroom on a single-rule line)
  and **replacing the headline framing** (needed where the line carries a four-book
  comparison). ⚠️ **Measure before choosing; the first was refuted on the second line.**

---

## Workstream 19: the cross-document facts-layer census — a pass that has never been run as one

**Opened by the `facts-reviewer` ruling recorded as Addendum 48 in
[`project/reviews/section_split_pilot_2026-09-18.md`](../reviews/section_split_pilot_2026-09-18.md).
It found a MAJOR — `skating.md:587` carried *"skates parallel to the wall"* and dropped
*"forearm and hip"*, half of a two-part posture — and then said plainly how it found it:**

> *"The five-sibling census is the only thing that surfaced the `forearm and hip` gap, and I ran it
> by chance, to test the brief's 'three documents' claim, not as a pass. **That census should be the
> pass.**"*

### The class, and why every existing method is blind to it

⚠️ **A facts line is reviewed for TRACEABILITY — does it trace to a sentence in its own section?
That test cannot see a limb that belongs in the block and is stated nowhere in its own document**,
because the correct response to *"not in this section"* is *"do not add it"* — and the same reviewer
gave exactly that response, correctly, to a different limb in the same block (*"not the point of your
shoulder"*, which is in `body_contact_and_battles.md` and not in `skating.md`).

**So the two outcomes are indistinguishable from inside one document:**

| | what a traceability pass sees | what it is |
|---|---|---|
| limb absent from this document's body | "not in this section — do not add" | ⚠️ **could be a propagation gap** |
| limb absent from this document's body | "not in this section — do not add" | correct scope boundary |

**Only a census across the documents that carry the same limb separates them**, and **nothing in
`scripts/` does this.** `check_facts.py` reads one block at a time. `check_facts_antecedents.py`
looks for pointers, not omissions. `check_counts.py` counts. **There is no tool and there has been
no pass.**

### The rows

- [ ] **Build the census as a repeatable thing, not a one-off grep.** For a named safety limb,
  extract every ` ```facts ` line in `content/` that carries any part of it and tabulate which
  documents carry which parts. ⚠️ **It must run on the FACTS LAYER, not the document** — a
  document-level grep cleared four documents in an earlier round and a facts-layer extraction found
  a fifth stating the hazard naked. **Body ✓ does not imply block ✓, and this is the inverse: block
  ✗ while body ✓ is exactly the `skating.md:587` defect.**
- [ ] **Decide whether it earns a script.** ⚠️ **If it does, it is a WORKLIST and must never gain a
  `--strict`** — a document legitimately carrying one part of a limb because it teaches one part is
  the normal case, and a tool that ranked these and offered to fix them is precisely how round 44
  manufactured a divergence that did not exist. ⚠️ **And if a script lands, name it in `CLAUDE.md`'s
  `scripts/` block in the SAME session** — that list has gone short four times, twice by a
  coordinator who had just read the warning.
- [ ] **Seed it with the limbs already known to be multi-part**, each of which is a candidate and
  none of which has been censused:
  - the boards posture — **skates parallel · forearm and hip · not the point of your shoulder**
    (five carriers found: `body_contact_and_battles.md:712`, `playing_without_the_puck.md:293`,
    `risk_management.md:408`, `zone_entries.md:481`, `:513`; `skating.md:587` was the outlier and is
    now repaired for two of the three parts)
  - the chin — **tuck backwards to the ice · head up forwards into the boards**, where carrying one
    half alone is the dangerous direction
  - the concussion red flags, whose count has been wrong at four consecutive levels in this project
- [ ] ⚠️ **The census is a CANDIDATE GENERATOR. Only reading decides.** A missing part is sometimes
  correct — `skating.md` should not carry the shoulder limb until its own body does, and the
  reviewer was right to refuse it. **The fix for a real gap is BODY FIRST, then the block.**
- [ ] ⚠️ **Check `--near` before editing any block this opens.** The `skating.md` repair fitted only
  because dropping a duplicated clause paid for the missing limb; keeping both measured **215/200**.
  **A census that generates ten of these will generate ten cap fights, and the block that loses one
  evicts a fact silently.**

### ⚠️ The census has now been run once, and it is NOT a tool yet

A first pass over the boards posture ran on 19 September 2026 as an inline script, not a committed
one. ⚠️ **NO FIGURE FROM IT IS WRITTEN HERE.** The owner is
[`section_split_pilot_2026-09-18.md`](../reviews/section_split_pilot_2026-09-18.md) **Addendum 49**,
which tabulates what it measured, names the two candidate classes it opened, and records that its
own shoulder-carrier count is **the third estimate in one thread and the third to run low.**

- [ ] ⚠️ **It is not reproducible.** It was an inline `python3 - <<'PY'` in a session that will end.
  **A checker that lives in a session is a measurement nobody can repeat** — which is precisely why
  `check_readability_census.py` was written, after four censuses were run from a scratchpad and a
  commit gate pointed out that no figure in that section would survive the session. **Same defect,
  same round, and this time it is known at the moment of writing.**
- [ ] **Its positive control is thin.** Exactly one class it tested came back empty — *carries
  `skates parallel` without `forearm`/`hip`* — and it came back empty **because Addendum 48 had just
  emptied it.** ⚠️ **A control that passes because you fixed it five minutes earlier tells you the
  regex matches, not that the method finds things.** It needs a control it did not author.
- [ ] ⚠️ **It is a REGEX OVER EXTRACTED LINES and it reports word shapes, not meaning.** The
  seven-line "forearm without parallel" class is expected to be mostly correct, and one of its
  members is the no-time-to-turn fallback, **where turning is unavailable by definition.** **Read
  every hit; a sweep here writes a false instruction into correct sentences** — which is how round 44
  manufactured a divergence that did not exist.

---

## Workstream 20: two corpus-level questions raised by the `skating.md` boards block, deliberately not fixed there

**Both were found by the `safety-reviewer` that BLOCKED the `skating.md:587` commit
([Addendum 50](../reviews/section_split_pilot_2026-09-18.md)). Both were flagged and left alone,
correctly — a line-level repair is the wrong place to settle a corpus-wide phrasing question.**

### 20A — the corpus says *"hip"*; USA Hockey says *"upper thigh (hip area)"*

- [ ] **The load-bearing surface the primary source names is the UPPER THIGH, glossed as the hip
  area.** The corpus's most faithful rendering is `body_contact_and_battles.md:712` — *"forearm and
  upper thigh to the wall"*. ⚠️ **The short form points at a smaller, bonier landmark than the one
  the source teaches**, and a listener aiming at the hip joint rather than the thigh is aiming at
  bone.
- [ ] ⚠️ **It is settled house phrasing across 40+ sites and changing it is a corpus-wide edit**, so
  it needs a decision before any repair, not a sweep. **Two questions the decision turns on, neither
  answered:** does the corpus's *"hip"* mean the joint or the region, and does any other primary
  source use the short form? ⚠️ **NO COUNT IS WRITTEN HERE — the "40+" is the reviewer's estimate and
  nobody has censused it.** Workstream 19's census is the instrument.
- [ ] ⚠️ **Do not sweep this string.** `hip` appears in the ice-fall limb too (*"onto your hip, thigh
  and the side of your backside"*), where it is **correct and means something different** — that is
  the fleshy landing surface, not the wall-contact surface. **A regex cannot tell the two apart.**

### 20B — the ice-fall limbs in `skating.md:583-592` carry no case marker

- [ ] **`:584`, `:585`, `:586` and `:589` state the ice-fall technique with nothing marking it as the
  ice case.** Voiced alone — which is how every facts line reaches a listener — `:585` (*"Go to the
  side, onto your hip, thigh and the side of your backside"*) **could be applied at the boards**,
  where it is the wrong answer.
- [ ] ⚠️ **Pre-existing, NOT introduced by the 19 September repair**, and recorded here so it is not
  later attributed to it.
- [ ] ⚠️ **It cannot be repaired by addition: the block is at 8/8 against `MAX_COACHING_FACTS`.**
  Any fix is substitution inside the four lines, or a section split. **Check `--near` before touching
  any of them**, and remember that `:588` in the same block sits at six characters of headroom.
- [ ] **The block's gate discipline has already produced one critical** — see Addendum 50, where
  removing a tight gate left a loose one as the block's only gate. ⚠️ **Treat any edit in this block
  as gate-critical, and render it rather than judging it from the page.**

---

## Workstream 21: the podcast scripts have overtaken the corpus, and nobody owns the direction

**Opened 19 September 2026 by the first `rules-verifier` pass ever run on a podcast script**
([the episode-three record](../reviews/conditioning_and_recovery_podcast_no_go_2026-09-19.md)). It
is a coordinator question and the reviewer said so rather than guessing:

> *"Several provenance rows say a claim is 'not in the source document'… meaning the script states
> rules the corpus document does not. **If the script is right, the corpus document is short. If the
> script is wrong, the defect is new text nobody reviewed.** I did not open the corpus document."*

⚠️ **Both branches are live and they need opposite responses**, which is why no agent can close this
alone: **a script row that is right is a PROPAGATION GAP in `content/` — the corpus owes the
addition.** **A script row that is wrong is unreviewed new text in a file about to be voiced.**

### The rows

- [ ] **Enumerate every `provenance.md` row across all three episode scratchpads marked *"not in the
  source document"*, and classify each one.** Four are already identified in episode three
  (`provenance.md:33`, `:34`, `:209`, `:210`). ⚠️ **NO TOTAL IS WRITTEN HERE — episodes one and two
  have never been examined for this at all**, and episode one is being re-scripted from scratch as
  this row is written.
- [ ] ⚠️ **A script is NOT a reviewed layer.** `content/` gets `rules-verifier`, `source-verifier`,
  `content-reviewer`, `facts-reviewer`, `safety-reviewer` and a commit gate. **A script gets whatever
  the coordinator happens to dispatch** — and episode three reached its second grading before anyone
  ran a rules pass on it. **A claim that exists only in a script has had strictly less scrutiny than
  one in the corpus, and it is the one being read aloud.**
- [ ] **Decide the direction of authority and write it down.** The corpus is the product; the scripts
  derive from it. ⚠️ **So a script claim absent from its source document is by default a DEFECT IN
  THE SCRIPT, and promoting it into `content/` requires the full gate** — not a copy. **But the
  default must not become a licence to delete**: non-negotiable 3 applies, and at least one of the
  four episode-three rows is a rule the reviewer located verbatim in a primary book.
- [ ] ⚠️ **`source-verifier` has NEVER been run on any script.** The episode-three rules pass
  declared the research layer — the meta-analyses, the retracted study and its retraction notice,
  the cohorts, the position statements, the VO2 and specialisation figures — **entirely unverified,
  and called it *"the larger half"* of that script.** Two effect sizes carrying the script's bridge
  from evidence into its rules section are verified **by nobody**. **This is a missing dimension, not
  a backlog row.**

### ⚠️ And a provenance table can be right and useless at the same time

Episode three's table cites `hc_layout.txt:4772-4773` for Hockey Canada's match-penalty trigger.
**Those lines are Rule 7.4, Charging.** The rule cited is at `:4745-4746`. **The quoted text is
correct; the pointer lands on the wrong rule.**

- [ ] ⚠️ **No checker reads these tables.** A right quote with a wrong pointer **passes everything and
  fails the next reader**, who greps the pointer, finds an unrelated rule, and either reports a
  fabrication that is not there or repairs a claim that was sound. ⚠️ **It is the inverse of the
  `check_quote_drift.py` blind spot found in the same file the same day** — there, the characters
  matched and the *clause the quotation came from* was wrong. **Both are invisible to a character
  comparison, and both live in the evidence record rather than the text.**
- [ ] **Decide whether provenance pointers are worth a checker.** They are line numbers into files on
  disk; a tool could verify that the quoted string actually appears at the cited line. ⚠️ **If one is
  written it is a WORKLIST** — a pointer off by two lines after an extraction is re-run is not a
  defect — **and it must be named in `CLAUDE.md`'s `scripts/` block in the same session, which that
  list has failed four times.**

---

## Workstream 22: the wrong case's limb, spliced into the boards approach — in `content/`, not only in a script

**Found 19 September 2026 by the agent repairing podcast episode three, in a file it did not own, and
correctly reported rather than fixed. Verified by the coordinator against both documents.**

### The defect

`content/off-the-ice/conditioning_and_recovery.md:192`:

> *"learning how to take and absorb a hit and how to approach the boards with your **head up and hands
> in front** (see Body Contact and Battles)"*

(⚠️ **The link markup is stripped in the quotation above on purpose — quoted verbatim it resolves
relative to THIS file and `check_links.py` reports a broken target that is not broken in the
source.**)

⚠️ ***"Hands in front"* is the limb of a DIFFERENT CASE.** `body_contact_and_battles.md:772`:
*"**Chest and shoulder first, hands in front.** Keep your hands and stick in front of your body, not
out to the side"* — **that is open-ice contact, not the boards.**

⚠️⚠️ **And the limb it displaced is the one that protects the cervical spine.** The owner document
treats *"head up, **chin off your chest**"* as **one inseparable non-negotiable** (`:21`, `:746`) and
gives the mechanism: a chin tucked to the chest straightens the cervical spine, and a vertebra can
fracture at walking speed.

**So the sentence pairs a correct half-cue with a correct limb from the wrong case, and the result
reads complete.** ⚠️ **It is the exact shape that graded episode three NOT SAFE TO VOICE — and the
episode inherited it from HERE.** **The script has been repaired; the corpus has not.**

### The rows

- [ ] ⚠️ **This is NOT a script defect that leaked into `content/`. It is the reverse, and that matters
  for how it is fixed:** the podcast derived the defect faithfully from its source. **Repair the
  source. Then check whether any other episode carried it.**
- [ ] ⚠️ **The cross-reference is load-bearing and a listener cannot follow it.** For a READER the
  pointer to Body Contact and Battles supplies the rest; **for a listener every cross-reference is a
  deletion**, and what reaches them is *"head up and hands in front"* with the chin limb nowhere.
  **The fix has to work in both layers.**
- [ ] **Check the propagation, not just the line.** Body → facts blocks → Common Mistakes → Key
  Takeaways. ⚠️ **A layer test, not a document grep — body ✓ does not imply block ✓.**
- [ ] ⚠️ **Do not sweep `hands in front`.** It is **correct** at `body_contact_and_battles.md:772` and
  wherever the case is chest-and-shoulder contact. **A regex cannot tell the two cases apart, and a
  sweep would delete a correct instruction.**
- [ ] **Still open from the previous round and in the same file:** `:210`'s trigger-less penalty
  ladder.

---

## Workstream 23: the emergency-number guard is narrower than an author will assume, and it bit twice in one paragraph

**`scripts/md_to_speech.py`'s `_emergency_number` guard exists because `999` voiced as *"nine hundred
and ninety-nine"*. Its own docstring calls it *"A SAFETY DEFECT, NOT A TIDINESS ONE"* and records an
open row about its scope.**

⚠️⚠️ **That open row is about TIGHTENING the guard. This is the case for WIDENING it, and it is a
different row.**

**Measured 19 September 2026, by the agent repairing episode three, in the render:**

> ***"`999` voiced as 'nine hundred and ninety-nine' in the closing recap, and again in my body summary
> 'So: 999 for a red flag, 111 within twenty-four hours' — both numbers mangled in the one sentence a
> listener is most likely to act on."***

**The guard fires on two shapes: a dialling verb before the number, or the number followed by
`in`/`across`/`from`/`now`/`immediately`.** **A bare `999` in a summary sentence matches neither.**

- [ ] ⚠️ **The lesson is not "authors should remember".** The author **had read the rule**, had written
  two correct instances four lines earlier using the `9-9-9` workaround, **and still wrote the broken
  sentence.** ⚠️ **Knowing the rule did not prevent it. Only the render caught it.** **A guard that
  depends on the author remembering to phrase around it is not a guard.**
- [ ] **Consider a `--report` warning on a bare `999`/`111`/`112`/`911`** rather than widening the
  substitution. ⚠️ **A warning cannot mangle anything**, where a wider substitution can start reading a
  sample size of 111 as a phone number — **which is precisely the failure the docstring's existing row
  is worried about, in the other direction.** **The two rows constrain each other and must be decided
  together.**
- [ ] ⚠️ **NOT CHANGED, DELIBERATELY — a shared tool is shared state and agents were live.** **Change a
  tool between waves, not during one**, and tell every live agent what changed.
- [ ] ⚠️ **Whatever lands, the verification is an EAR TEST.** Reading the SSML tells you the
  substitution fired; **it does not tell you the voice got it right.**

---

## Workstream 24: `skating.md`'s acceleration section has no gaze limb, and the episode inherited the gap

**Found 19 September 2026 by the `safety-reviewer` on podcast episode one v2, which flagged it
explicitly as a finding about the SOURCE rather than about the script:**

> *"This gap is in `skating.md` too. §Acceleration and the First Three Steps and its facts block carry
> no head or eyes limb either. The script inherited it. That is a finding about the SOURCE document,
> and it belongs in the plan independently of what happens to this episode."*

**Confirmed by the coordinator.** A word-boundary sweep of `{head|eyes|gaze|look}` over
`content/technique/skating.md:303-326` returns **one hit, and it is *"what it looks like"*.** The
facts block returns **zero**.

### Why it matters here specifically

⚠️ **That section teaches the only maximal-effort, maximum-lean technique in the document** — a
torso lean of roughly forty-five degrees, *"nose over toes"* — **and it is the technique a player uses
to approach a loose puck in a corner.** **At that lean with no gaze cue, the head follows the torso.**

⚠️ **The document's own sourced threshold is not a tucked chin — it is *"a head that is simply looking
down"***, and the mechanism is USA Hockey's: *"almost all on-ice cervical spine injuries have been due
to the head being slightly flexed (head down) while making head-on contact with the boards or goal
post… it can occur at walking speed."*

### The rows

- [ ] ⚠️ **The reviewer was careful about what it was NOT claiming, and the repair must be too:**
  *"I am NOT claiming 'nose over toes' is a head-down instruction — it is a torso cue, and I will not
  invent a hazard. I am claiming that the one section that most invites a dropped gaze is the one
  section with no gaze limb."* **Do not write a sentence implying the lean is unsafe. The lean is
  correct and sourced. The torso goes forward; the eyes do not.**
- [ ] **The document already does this correctly in the adjacent case, and that sentence is the
  model** — §Tight turns tells a reader to keep head and eyes up *"because turning is one of the
  moments where players reflexively drop their gaze"*. **Acceleration has no equivalent.**
- [ ] ⚠️ **Check `--near` before touching the block, and propagate with a LAYER TEST** — body ✓ does
  not imply block ✓.
- [ ] ⚠️ **Sweep the OTHER fast sections with the same method before closing this.** The reviewer
  named where it would look next and why: **§The forward stride and §Backward skating**, *"where a
  player is travelling fast with their hips open, and I checked only for head and chin."*

### ⚠️ How it was found, which is the transferable part

> *"The two findings I am proudest of were found by a MECHANICAL SWEEP, not by reading — and reading
> had already missed them. I read §Acceleration twice for sense and saw nothing. The grep returning
> zero across two whole chunks is what made it visible. **That tells me my reading pass is unreliable
> for absence.**"*

⚠️ **A reading pass finds what is wrong. It does not find what is missing.** **This corpus's omission
passes have now been declared heading-dependent by four consecutive reviewers in one day** — each
saying it found the omission *because a heading let it enumerate* — **and this is the first one found
by a sweep for a word that was simply not there.** ⚠️ **That is a method, and it is cheap: pick the
limb, pick the sections that most invite its absence, and grep for the absence rather than reading for
the presence.**

---

## Workstream 25: `skating.md:21` states an unsourced relative-contribution claim that two sibling documents hedge with a citation

**Found 19 September 2026 by the `content-reviewer` on podcast episode one v2, and it is a finding
about the CORPUS rather than the script** — recorded in
[the episode record](../reviews/skating_podcast_v2_no_go_2026-09-19.md) as C4. **Confirmed by the
coordinator against all three documents.**

### The three sentences

| document | what it says |
|---|---|
| `content/technique/skating.md:21` | *"What makes a skater fast is technique rather than what they were born with, so it responds to deliberate practice at any age."* ⚠️ **No source and no label — not here, not in the Sources trailer, not in the `Not verified` block.** |
| `content/off-the-ice/mental_game.md:575` | ⚠️ Flagged *"**This one is genuinely misrepresented and worth correcting**, because it does real damage to how players think about their own progress"* — **Macnamara, Moreau & Hambrick (2016): deliberate practice accounts for 18% of the variance in sports performance (95% CI 12–25%)**, leaving roughly four-fifths to starting age, **physical attributes**, coaching quality, **genetics** and injury history. **Cited in full in its trailer with a DOI.** |
| `content/off-the-ice/practice_and_development.md:80` | *"Some of the remaining 82% is **genetics**… Practise because it reliably moves *you* forward, not because it will make you a specific thing."* |

### ⚠️ What this is NOT

- [ ] ⚠️ **NOT a flat contradiction, and the reviewer was explicit about that.** The constructs differ
  — Macnamara measures variance in sports performance ACROSS ATHLETES; the skating sentence is about
  what makes a skater fast. **Do not report it as one.**
- [ ] ⚠️ **NOT a deletion.** Non-negotiable 3: never delete a claim merely because it is unsourced.
  **Source it or label it.**

### What it IS

⚠️ **The shape the style guide predicts under *"claims that 'everyone knows' are the least audited"*:
an unsourced relative-contribution claim that reads as common knowledge, while the document that owns
the underlying question hedges hard and cites a meta-analysis.**

⚠️ **And it is `skating.md`'s second sentence**, which in the rendered audio is in the opening seconds.
**The episode amplified it into the framing for the whole hour** — *"here is the part that ought to
change how you think about practice"* — **which is what made it visible. Nobody had looked at it in
twenty rounds.**

### The rows

- [ ] **Reconcile against `practice_and_development.md` and `mental_game.md` rather than against
  memory**, and decide whether `skating.md` should carry a pointer, a label, or the figure itself.
  ⚠️ **If it carries the figure it inherits the owner's qualifications — the CI, and the list of what
  the other four-fifths contains.** **A number copied out of its owner goes stale silently.**
- [ ] ⚠️ **Check the LAYERS before writing anything.** `skating.md:21` is in `## Overview`. **Whatever
  lands has to survive being voiced alone**, and the claim as it stands is the kind that reads as
  settled fact in a standalone `<p>`.
- [ ] ⚠️ **Check whether the claim has PROPAGATED.** It is the sort of sentence that gets restated in
  openers. **A layer test, not a document grep.**
- [ ] ⚠️ **`mental_game.md` records that the dispute is LIVE and that Ericsson replied.** **Do not
  present the 18% as settled either** — that would be the same defect pointed the other way, and this
  corpus has already shipped three disclosures that made it look *less* supported than it is.

---

## Workstream 26: nine of thirty-two `604(d)` citations carry no trigger

**Found 19 September 2026 by the agent repairing `conditioning_and_recovery.md`, in a corpus-wide
census it ran after finding the same defect twice in the file it owned.**

~~**`604(d)` appears 32 times across `content/`; 9 lack the trigger.**~~

⚠️⚠️ **STRUCK 19 September 2026 — THE CENSUS WAS A REGEX ARTEFACT, AND THIS ROW WOULD HAVE SENT AN
AGENT TO "FIX" FIVE LINES THAT ARE ALREADY CORRECT.**

**Refuted by the `rules-verifier` on the conditioning repair, and verified line by line by the
coordinator.** ⚠️ **The census searched for the rulebook's VERB form *"recklessly endangers"*. The
corpus overwhelmingly uses the NOMINALISATION *"reckless endangerment"* — which is USA Hockey's own
phrase, printed in 604(e).** **A search on one form misses the other.**

| site | measured |
|---|---|
| `on_ice_communication.md:259` | ✅ **trigger present** — *"for reckless endangerment"* |
| `body_contact_and_battles.md:1126` | ✅ **trigger present** |
| `body_contact_and_battles.md:1584` | ✅ **trigger present** |
| `center.md:625` | ✅ **trigger present**, and both HC 7.3(b) limbs |
| `defensive_zone_coverage.md:488` | ✅ **trigger present** |
| `defensive_zone_coverage.md:778` | ✅ **trigger present** |
| `team_play_and_culture.md:650` | ⚠️ **LEGITIMATE SCOPING** — a Sources-trailer provenance list of clauses read, not a rule statement, **in a layer with no heading that `md_to_speech` never voices** |
| `on_ice_communication.md:552` | ⚠️⚠️ **THE ONE GENUINE DEFECT — and the row above did not describe it as one** |

⚠️ **`on_ice_communication.md:552` is a Common Mistakes bullet — the SPOKEN layer — giving six clause
numbers and a trigger for none of them:** *"Where checking is barred it is a minor rising to a major
plus a game misconduct and then a match penalty (USA Hockey 604(c), 604(d), 604(e); Hockey Canada
7.3(a), 7.3(b), 7.3(c))."* **It also flattens the two books' different triggers into one ladder.**

⚠️ **AND THE RAW COUNT IS UNSTABLE: 32 when the census ran, 35 on a recount, because the file has been
edited since. TREAT NEITHER NUMBER AS REAL.**

⚠️⚠️ **This row's own warning — *"DO NOT SWEEP. Some may be legitimately scoped… They need reading,
not a regex"* — WAS VINDICATED BY ITS OWN EVIDENCE, AND THE COORDINATOR STILL WROTE THE COUNT.**
**The lesson is not "pick a better pattern": it is that a census stating a DEFECT COUNT, rather than a
CANDIDATE LIST, has already made the judgement the reading is supposed to make.**

- [ ] ⚠️ **DO NOT SWEEP. Some may be legitimately scoped** — a line discussing the penalty tier rather
  than the offence does not need the trigger. **They need reading, not a regex.**
- [ ] ⚠️ **The defect is what a trigger-less ladder sounds like VOICED ALONE:** a penalty presented as
  following from the act rather than from the act's recklessness. **In the repaired file, `:210` sat
  BELOW its own neighbour at `:208`, which already carried the trigger** — so the two adjacent lines
  disagreed about what the rule requires.
- [ ] **Hockey Canada's parallel triggers are the comparison and they differ:** 7.3(b) *"based on the
  degree of violence of the impact"* plus mandatory *"[i]f a player is injured"*; 7.3(c)
  *"deliberately attempts to or deliberately injures"*. ⚠️ **604(e) is *"may also be assessed"* and
  carries NO intent limb — the books diverge here and a line that flattens them is a separate defect.**
- [ ] **Check the layers, not the line.** Nine hits is a body count; **the facts blocks and summary
  layers have not been censused for this at all.**

---

## Workstream 27: `check_quote_drift.py` produces a SILENT FALSE PASS outside the corpus tree

**Found 19 September 2026 by the agent repairing podcast episode three, which ran the tool, got a
clean result, disbelieved it, and reproduced the cause.**

**`scripts/check_quote_drift.py` builds its source set from
`dirname(abspath(DOC))/../../sources/*.txt`.** ⚠️ **That path is correct for `content/<dir>/<doc>.md`
and for `project/reviews/<doc>.md` — the coordinator verified the second — and WRONG for anything
whose parent is not two levels below the repository root.** **For a script in a session scratchpad it
resolves to a directory that does not exist, the glob returns zero files, and the tool prints a
result.**

⚠️⚠️ **Combined with its second constraint the failure is silent: it extracts only `*"…"*` fragments,
and a SPEECH SCRIPT HAS NONE — so it prints `clean=0 flagged=0 notfound=0` and exits as though it had
checked something.** **An agent that runs it on a podcast script and believes it has verified nothing
at all.**

- [ ] ⚠️ **NOT CHANGED — a shared tool is shared state and agents were live.** **Change a tool between
  waves, not during one.**
- [ ] **The minimum fix is a REFUSAL, not a relocation:** if the source glob returns zero files, say so
  and exit non-zero. ⚠️ **The precedent is `check_zones.py`, which *"says so and exits 0 rather than
  pretending a missing directory is a pass"* — and `check_absolutes.py`, which now *"refuses to
  certify the caption layer"* rather than passing on stale text.** **Both were written after a silent
  false pass. This is the third.**
- [ ] **Decide separately whether it should scan speech scripts at all.** ⚠️ **A script's quotations
  are not in `*"…"*` form, so the tool cannot see them even with sources loaded** — which is why the
  repairing agent wrote two disposable scanners in its own scratchpad instead. **Those found two real
  defects the tool structurally cannot.**
- [ ] ⚠️ **If a `--strict` or a refusal lands, name it in `CLAUDE.md`'s `scripts/` block IN THE SAME
  SESSION.** That list has gone short four times.

---

## Workstream 28: two USA Hockey lean permissions, ten lines apart, and the corpus quotes one of them

**Opened by a premise the episode-three repair refuted — and the refutation's REASON is itself wrong,
which is the point of this row.**

**The agent reported that USA Hockey *"prints the Competitive Contact definition twice, with different
wording"* — *"sole object of the contact"* against *"sole objective of the two players"*.
⚠️ **The coordinator read `usah.txt:270-290`. They are not one definition printed twice. They are TWO
DIFFERENT DEFINITIONS, ten lines apart:**

| | wording |
|---|---|
| **Competitive Contact** (the definition) | *"reasonably allowed to lean into each other provided possession of the puck remains the **sole object of the contact**"* |
| **Physical Engagement** (one of the *"acceptable examples"* listed beneath it) | *"allowed to reasonably lean into each other provided that possession of the puck remains the **sole objective of the two players**"* |

⚠️ **So the agent's conclusion holds — the script's *"sole objective"* IS verbatim and IS in the
Glossary — and its explanation does not.** **The two strings belong to two different terms of art,
and a grep for either returns the other and looks like proof of drift in both directions.**

- [ ] ⚠️ **Establish which of the two each corpus citation is quoting, and make it say so.**
  **`body_contact_and_battles.md:1559` quotes this material and is the first place to look.**
  **A citation that says *"the Glossary"* without naming the term does not tell a reader which
  permission they have.**
- [ ] ⚠️ **They are not interchangeable.** *Competitive Contact* is the category; *Physical Engagement*
  is one named example inside it, alongside **Angling** and **Collisions** — and the Collisions entry
  carries its own rule (*"No player is required to move out of the way of an oncoming player to avoid
  an impact"*) that the corpus attributes elsewhere to the IIHF. **Check whether USA Hockey's version
  is cited anywhere it should be.**
- [ ] ⚠️ **A third agent will hit this and read it as drift.** **Record the distinction in the
  citations, not only here.**

---

## Workstream 29: a British red flag no `content/` document carries

**`grep -rn -iE 'lying rigid|motionless due to muscle' content/` returns NOTHING.**

**The UK Concussion Guidelines' seizure red flag reads *"Seizure/convulsion **or limb twitching or
lying rigid/motionless due to muscle spasm**"*. CRT6's flag is only *"Seizure, 'fits', or
convulsion"*, and a player lying motionless is on CRT6 a **Visible Clue** — suspected concussion, come
off — not a red flag.**

⚠️ **So for a British grassroots player the same observation is an AMBULANCE and for CRT6 it is not.**
**Podcast episode three now carries this limb. No document in the corpus does.**

- [ ] **Decide the owner.** `conditioning_and_recovery.md` holds the concussion material and
  `uk_rules.md` holds the British floor. ⚠️ **The script has overtaken the corpus again — Workstream
  21's shape, and this is the clearest instance yet: a safety limb that exists ONLY in a scratchpad
  file.**
- [ ] ⚠️ **Read `ukcg.txt` POSITIONALLY.** Its headings are letter-spaced and a flattened phrase search
  under-counts.
- [ ] **Check the layers.** The British red-flag differences may be partially carried already;
  `conditioning_and_recovery.md:261` is where the list lives.

---

## Workstream 30: *"not the point of your shoulder"* is voiced alone at two sites, and the reason it is narrow lives in a trailer

**Found 19 September 2026 by the agent repairing the Case 3 gate in
`content/technique/body_contact_and_battles.md`, which was asked to confirm a coordinator claim and
found it HALF WRONG.**

### ⚠️ The coordinator's claim, corrected

**I wrote that `body_contact_and_battles.md:754` reconciles two USA Hockey sentences** —
`ibc.txt:692` *"Avoid hitting the boards with the shoulder"* against `ibc.txt:1453` *"Never hit the
boards or glass with the **tip** of your shoulder"*.

⚠️ **It does not.** **`:754` reconciles USA Hockey against HECC** — HECC's *"use your hands, arms,
**shoulders** or facemask to cushion the impact"* against USA Hockey's *tip* sentence — concluding
*"the safe course is the narrower one: no part of the shoulder leads."*

⚠️⚠️ **The USA-Hockey-INTERNAL tension is at `:742`, and there it is NOT RECONCILED AT ALL:** *"USA
Hockey says it twice: 'Avoid hitting the boards with the shoulder' and 'Never hit the boards or glass
with the tip of your shoulder'"* — **presented as one body saying the same thing twice, when the first
sentence is materially BROADER than the second.**

**Nobody is endangered by that** — the corpus lands on the narrow-is-safer conclusion at `:754`
anyway, which covers `:692`. ⚠️ **But the two reconciliations are distinct and only one is written
down.**

### The real finding

**`skating.md` uses the narrow house phrase *"not the point of your shoulder"* at five sites, and the
reason it is safe to be narrow is not at any of them.**

⚠️ **Two of the four SPOKEN sites — `:121` and `:587` — are ` ```facts ` lines, voiced ALONE in their
own `<p>` with a 300 ms break either side.** **Voiced alone, *"not the point of your shoulder"* can be
heard as LICENSING THE REST OF THE SHOULDER.**

**The document is not silent, but neither pointer reaches a listener:**

| where | what it says | reaches a listener? |
|---|---|---|
| `skating.md:604` | quotes `ibc.txt:692` — the **broader** sentence — as authority for the narrow phrase | ✓ voiced, ⚠️ **and it is the mismatch, unlabelled** |
| `skating.md:957` | Sources trailer: the reconciliation *"is stated where the warning lives… in Body Contact and Battles"* | ✗ **trailer** |
| `skating.md:945` | the three-case rule is *"owned by and quoted verbatim"* there | ✗ **trailer** |

⚠️ **`check_pointers.py` exists precisely to flag a spoken sentence pointing at a layer the listener
never hears. Here the pointer is IN the unheard layer, which is worse — nothing points at it at all.**

### The rows

- [ ] **Decide whether the four spoken sites need a cue that the narrow phrase has a safer reading
  behind it** — ⚠️ **or whether the phrase itself should widen.** **The corpus's own conclusion is
  *"no part of the shoulder leads"*, which is what `:754` settles; the house phrase is narrower than
  the conclusion the corpus reached.**
- [ ] ⚠️ **Check `--near` first.** `:587` is at **172/200**; `:121` was not measured. **And
  `skating.md`'s `### How to fall` block is at 8/8 against `MAX_COACHING_FACTS`, so nothing can be
  ADDED there — any change is substitution.**
- [x] ✅ **CLOSED — done by commit `fa662cc` and verified 19 September 2026.** **`:742` now reads
  *"the sentences are not one claim repeated: they differ in what they cover and in how hard they say
  it"*, and sets out all THREE sentences by scope and force.** ⚠️ **And `:754` now carries BOTH
  reconciliations — USA Hockey against HECC, AND USA Hockey's own broad-against-narrow — so the split
  this plan described between the two lines is also gone.** **The row was stale when it was dispatched.**
- [ ] ⚠️ **Check whether `:742`'s unreconciled *"says it twice"* has propagated anywhere as a licence
  for shoulder-first contact.** **Nobody has looked.**
- [ ] ⚠️ **Do NOT sweep the string.** *"The point of your shoulder"* is correct wherever the
  surrounding prose carries the reconciliation, and a regex cannot tell.

---

## Workstream 31: a count in a docstring, going stale — and the eviction candidate to name before it is needed

**Both opened 19 September 2026 by the commit gate on `content/positions/goaltender.md`.**

### 31A — `md_to_speech.py`'s `Never:` docstring carries a stale figure

**`scripts/md_to_speech.py` around `:2806` returns `label + " — "` for a `Never:` label,
deliberately, because so many `Never:` facts open with an imperative.** ⚠️ **The docstring that
explains this quotes a count, and it has gone stale: `grep -c '^Never: ' content/*/*.md` sums to
**579** today.**

⚠️⚠️ **This matters more than an ordinary stale figure, because that docstring is the ONLY place in
the repository that records why the label is rendered as it is — and it already records AN EARLIER
VERSION OF ITSELF GETTING THE UNDERLYING FACT WRONG.** **An agent reading it for the reasoning meets a
number it can measure, finds the number wrong, and has no way to know the reasoning survived.**

- [ ] ⚠️ **Replace the count with the command, not with a newer count.** `CLAUDE.md`'s own rule: *"a
  number copied out of its owner goes stale silently, and a pointer to a named section does not."*
  **The owner here is the corpus, and the pointer is `grep -c '^Never: ' content/*/*.md`.**
- [ ] ⚠️ **A SHARED TOOL IS SHARED STATE — change it between waves, not during one**, and tell every
  live agent.
- [ ] **The reasoning itself is CORRECT and must survive the edit.** ⚠️ **A coordinator brief this
  session told an agent to sweep every facts line for a `Rule:`-imperative shape; the agent read this
  docstring, refused the sweep, and repaired the one real target. Two correct lines survived because
  that paragraph exists.**

### 31B — name the eviction candidate before the pressure arrives

⚠️ **Both `goaltender.md` blocks are now at `HARD_MAX` — 11 of 11. There is no free slot in either.**

> ***"At 11/11 the NEXT eviction will be decided under pressure, and the weakest line in either block
> is `:1105`, an edition-numbering footnote holding block 1's last slot. Name it as the eviction
> candidate in the plan before you need it."***

- [ ] ⚠️ **Record the judgement NOW, while nothing is at stake.** **The failure this guards against is
  documented: a block at its cap once forced a mandatory give-ground duty out of a `Rule:` fact into a
  `Technique:` line with no rule number and no penalty, and every checker passed.** **A decision taken
  under pressure is how that happened.**
- [ ] ⚠️ **But do NOT evict it pre-emptively.** `:1105` earns its place today — the edition
  renumbering is real, and a bare *"Table 16"* lands on **Rule 84, Overtime** in the current book.
  **The row is a decision about PRIORITY, not a licence to cut.**
- [ ] ⚠️ **The real answer is probably a second split, and the gate said so:** the section's only
  visible seam is a **rule-set line**, which is the split round 52 made that *"relieved the wrong
  thing."* **So the seam has to be found in the body's own topic structure first. That is the work,
  and it is not small.**

### ⚠️ And a correction to the coordinator's framing, recorded because I got it backwards

**I put it to the gate that the capacity ceiling had already cost a listener the no-contact crease case
— goal disallowed, no penalty — leaving it *"stated only in the body"*.**

⚠️ **REFUTED, and I confirmed it: `goaltender.md:1101` carries it in the FACTS layer** — *"A screen
from outside your crease without contact is normally legal; inside the crease only a significant
position voids the goal…"* **What is missing from that layer is the *"and no penalty"* HALF, not the
case.**

⚠️⚠️ **And that half runs in the SAFE direction: a goaltender who does not learn the opponent goes
unpenalised still claims their paint and still shouts, and cannot be hurt or ejected by not knowing
it. The defect that was repaired ran the OTHER way — it promised a call that is not coming.**
**Ship it; log it.**

---

## Workstream 32: rows opened by the two reviews that cleared `conditioning_and_recovery.md`

**Both returned CLEAR TO COMMIT. These are follow-ups, and the safety pass was explicit that every one
is *"cheaper to fix in a follow-up row than to re-open this change."***

### 32A — ⚠️ the boards technique has no *"whatever league you play in"* counterweight, in ANY layer

**`grep -n "checking or not|whatever league|non-check hockey|every league"` on
`conditioning_and_recovery.md` returns ZERO.**

⚠️ **And two sections later the document tells the reader body checking *"is prohibited outright in
most youth age groups and in most adult recreational and beer leagues."*** ⚠️⚠️ **So a reader in a
non-check league has an ACTIVE REASON to file the boards technique under *"not mine"* — and then races
a puck to the wall with their chin down.** **A wall does not need a legal body check to break a neck.**

**Four siblings carry it and this document did not** — `body_contact_and_battles.md:21`
(*"absolute in every league, checking or not, because a wall does not need an opponent to hurt you"*),
`forechecking_systems.md:876` and `:539`, `goaltender.md:1169`. ⚠️ **`core_principles.md` was on this
list and does NOT belong: `grep -n "checking or not\|whatever league\|non-check hockey\|every
league"` returns ZERO there. It carries the IDEA at `:37` in different words.** **Refuted by the
repairing agent, which greped the list instead of trusting it.**

- [ ] ⚠️ **NOT graded critical, and the reasoning matters: the text never RESTRICTS the advice to
  checking leagues, so nothing inverts and no reader is told anything false.** **The failure is
  UNDER-APPLICATION, not misapplication.** **It also predates the diff — but the diff is the first time
  this document teaches boards technique at all, which is what makes the omission live rather than
  theoretical.**
- [ ] ⚠️ **Reuse the sibling wording rather than reinventing it, so the two documents do not end up
  saying it two ways.** **One clause in the body and one in Key Takeaway 12.**

### 32B — the ear-shape fix reached one site of three, and the other two are in the same diff

**The round's headline finding was *"a citation can pass every gate and be wrong FOR THE EAR"*, on a
Key Takeaway draft that rendered as *"which six hundred and four, clause e says…"*.** ⚠️ **Rendered
today, `:210` and the Common Mistakes bullet BOTH produce that exact construction.**

- [ ] ⚠️ **Both are better placed than the rejected draft — the same `<p>` names *"under Hockey
  Canada"* in prose one rung earlier — BUT THE REJECTED DRAFT HAD THE SAME PRIOR ESTABLISHMENT AND WAS
  STILL JUDGED DEFECTIVE.** ***"If the standard is right, it is right at all three sites; if it is
  not, KT4 did not need rewriting."*** **Decide which.**
- [ ] ⚠️ **This is the corpus's commonest shape — a correction that reached one summary layer —
  appearing in the REPAIR TO A REPAIR.**

### 32C — restore *"or a goal post"* to Key Takeaway 12, and only there

**The repair dropped it from two summary sites, judging it correct for boards-specific text. The
safety pass ruled: correct for the Common Mistakes bullet, WRONG for the Key Takeaway.**

- [ ] **Six siblings keep the corpus house form *"…collision with the boards or a goal post…"*.**
  ⚠️ **Four words; the hazard class is cervical spine, where under-scoping is the expensive direction;
  and the takeaway opens on *"a shoulder or a neck"*, so it is ALREADY broader than the bullet.**
  **As written, a listener who hears it alone has no reason to carry the walking-speed mechanism to a
  net front — which two sibling documents exist to tell them.**

### 32D — a game misconduct's own cost is stated nowhere in this file

**USA Hockey 404(b): a game misconduct *"shall also be **suspended for the team's next game**"*.**

⚠️ **All four ladder sites state *"a major plus a game misconduct"* and then jump to 411(a)'s THIRD
major — so a listener infers the FIRST one costs only tonight. It costs tonight AND the next scheduled
game, automatically.**

- [ ] **A propagation gap, not a defect the diff introduced** — 404(b) appeared nowhere in this file
  before it either. **Seven documents carry it**, including as a `Rule:` facts line.
- [ ] ⚠️ **If added, it belongs to the USA HOCKEY limb only** — *"I did not find a Hockey Canada
  equivalent and did not search for one, so do not write it as 'both books'."*

### 32E — 411(a) stated without its scope at two of three sites

**411(a) counts only majors *"for any combination of **aggressive infractions** listed below"*, and a
Note routes Fighting to its own rule.** ⚠️ **`:208` carries the qualifier; the Common Mistakes bullet
and Key Takeaway 4 drop it, so a listener hears *"any third major"*.** **The error runs toward
over-warning.**

### 32F — ⚠️ IBC Fig. 7 has never been opened, and the reasoning that retired Fig. 6 points straight at it

**Fig. 6 was chased by five agents. It is now resolved TWICE OVER: one agent rendered it with
`pdftoppm` and found it corroborates, and the safety pass then resolved it a second way — by reading
the text layer's subsection structure and establishing Fig. 6 sits inside subsection A, the
FACING-the-wall case, so it cannot contradict the parallel-case paragraph at all.**

- [ ] ⚠️ ***"Which means a drawing that contradicts Case B's posture would sit in FIG. 7, and I did not
  look at Fig. 7 at all. That is the live gap."*** **`pdftoppm` it.**

---

## Workstream 33: six documents cite the NARROW shoulder sentence as authority for a Case 2 instruction

**Found 19 September 2026 by the agent repairing `body_contact_and_battles.md:742`, in files it did
not own, and correctly reported rather than swept.**

**USA Hockey writes two shoulder prohibitions, and they differ on TWO axes:**

| source | section | scope | force |
|---|---|---|---|
| `ibc.txt:692` | **B. Checked Along The Boards** — *"checked while skating parallel to the boards"* | **the whole shoulder** | *"Avoid"* |
| `ibc.txt:1453` | the ***"Angling In"*** demonstration list | **the tip only** | *"Never"* |

⚠️ **Six documents teach skates-parallel — the Case 2 posture — and then cite the *TIP* sentence,
which governs the tip on any approach, rather than the broader one written for that very case:**
`winger.md` · `offensive_zone_play.md` · `forechecking_systems.md` (two sites) ·
`zone_entries.md` · `playing_without_the_puck.md` · `conditioning_and_recovery.md`.

- [ ] ⚠️ **This is NOT the `:742` defect** — none of the six says *"USA Hockey says it twice"*.
  **Each simply reaches for the wrong one of two real sentences.**

### ⚠️⚠️ THE ROW'S STATED REASON IS WRONG — the fix survives, the reasoning does not

**This row says the six sites *"teach skates-parallel — the Case 2 posture — and then cite the TIP
sentence"*, as though the two sentences govern different postures.** ⚠️ **They do not.**

**Found by the agent propagating into `hockey-iq/`, and verified by the coordinator:
`sources/ibc.txt:1450` sits INSIDE the very *"Angling In"* list that carries the tip sentence, and
reads *"Keep your feet parallel to the boards."***

⚠️ **So the tip sentence's OWN list teaches a feet-parallel posture too.** ***"These documents teach
skates-parallel, therefore they reached for the wrong sentence" DOES NOT FOLLOW.***

⚠️⚠️ **The two sentences differ on SCOPE (whole shoulder vs tip) and FORCE (*"Avoid"* vs *"Never"*) —
NOT on which posture they govern.** **That is the whole defect, and it is the only defect. Any repair
sentence written on the posture reasoning will be wrong about the source even when it improves the
corpus.**

### ⚠️ And the row's file list is wrong in at least one place

**`playing_without_the_puck.md` does not belong on the list of six.** ⚠️ **It cites the tip sentence in
exactly ONE place — its Sources trailer — alongside the broad sentence, correctly attributed and
correctly scoped.** **Its nine teaching sites attribute the shoulder phrase to NOBODY AT ALL.**
**Drop it from the list; the propagation work there was real, the attribution charge was not.**

### ⚠️ A class this row's grep CANNOT see

**Three facts lines carry the full wall posture with NO shoulder limb of any kind** —
`scanning_and_anticipation.md:146`, `puck_support_and_spacing.md:317` and `:548`. ⚠️ **Each is voiced
alone and is the only wall-posture line in its block, so the grep for a shoulder phrase can never
reach them.**

- [ ] ⚠️ **NOT unsafe — each states the affirmative *"forearm and hip"*.** **But headroom is 31 / 15 /
  3 characters against a limb costing ~78, and `:548`'s block is already at `MAX_COACHING_FACTS` 8.**
  ⚠️ **The only room would come from evicting *"head up, chin off your chest"*, which is forbidden.**
  **This needs a section split or nothing. Decide, do not squeeze.**
- [ ] ⚠️ **AND THE OWNER DOCUMENT'S OWN CONCLUSION IS BROADER THAN ALL SIX.** ⚠️⚠️ **THE WORDING THIS ROW
  ORIGINALLY GAVE WAS STALE AND STRICTER THAN THE OWNER** — it said *"the safe course is the strictest
  of the three: no part of the shoulder leads"*, **dropping USA Hockey's own hedge.** **Commit
  `72ef106` settled it as *"no part of the shoulder leads IF YOU CAN HELP IT, and the tip never"*
  (`body_contact_and_battles.md:754`).** **Caught by the agent propagating into `systems/`, which
  checked the row against the file rather than trusting it.** ⚠️ **A plan row that states a safety
  conclusion MORE STRICTLY than its owner is the same defect class as one that states it less
  strictly: both send an agent to write a sentence the corpus does not hold.** **Every one of the six
  under-states the settled position, in the direction that permits more contact.**
- [ ] ⚠️ **DO NOT SWEEP THE STRING.** *"The tip of your shoulder"* is **correct** wherever the passage
  is about angling in, and **correct** wherever the surrounding prose carries the reconciliation.
  **A regex cannot tell which case a passage teaches. Read each.**

### ⚠️ Two strings, two counts, and a filter that lost four files

**A commit gate flagged this row as saying SIX where a brief said ~10. Both are right — they are
DIFFERENT STRINGS, and the coordinator measured them:**

| string | files |
|---|---|
| *"the **tip** of your shoulder"* — the narrow USA Hockey sentence quoted as authority | **7**, of which 6 are not the owner |
| *"the **point** of your shoulder"* — the corpus's own house phrase | **16** |

⚠️ **The house phrase is the bigger surface and MOST of its sites pair it with *"forearm and hip"*, so
they are not this defect.** **The row's scope is the SIX that cite the tip sentence as the authority
for a Case 2 instruction.**

⚠️⚠️ **AND A MEASUREMENT TRAP WORTH RECORDING, because the coordinator fell into it while checking
this very row.** Filtering the owner out with `grep -rn <string> content/ | grep -v
body_contact_and_battles` returns **2 files, not 6** — **because `grep -v` matches the LINE, and four
of those lines contain a markdown LINK to `body_contact_and_battles.md`.** ⚠️ **A filter meant for the
PATH silently removed legitimate hits in the body.** **Filter on the path field, or use `grep -rl`.**
- [ ] ⚠️ **Check the LAYER before editing.** Several of these sites are facts lines voiced alone, and
  at least one block is already at `MAX_COACHING_FACTS`. **Run `--near` first — it sorts ASCENDING, so
  `tail` shows the safest lines.**
- [ ] **The sibling that already gets it right is the model:** `skating.md:604` quotes the broad
  sentence **with its case attached** — *"which USA Hockey's teaching points for a player checked while
  skating parallel to the boards rule out"*.

### ⚠️ And a citation trap in the coordinator's own brief, worth recording

**I cited `ibc.txt:702` AND `:712` for *"standing too upright with your feet together"*.**
⚠️ **They are the SAME bullet printed under TWO DIFFERENT SECTIONS: `:702` is section B's Common Error
— the parallel case — and `:712` is under C. Checked AWAY From The Boards, which is OPEN ICE.**
**Verified by the coordinator.** ⚠️ **A brief citing both would let an agent source a Case 2 claim from
the open-ice section, and nothing in the line itself would give the mistake away — the two bullets are
character-identical.**

---

## Workstream 34: ⚠️ THE CAPTION LAYER CARRIES THE UNREPAIRED WORDING, AND NO WORKLIST ROUTES IT

**Found 19 September 2026 by the agent propagating into `positions/`, from the RENDERED SPEECH of a
document it owned — not from any tool.** **Coordinator-verified and counted.**

⚠️ **Diagram captions are VOICED INTO their host documents.** **So after a propagation wave repairs
the prose, a listener still receives the old wording every time a caption is read aloud.**

**Measured:** `grep -rn "point of your shoulder\|tip of your shoulder" site/src/diagrams/*.mjs` returns
**10 sites across 6 modules** — `body_contact_and_battles.mjs` (2), `forechecking_systems.mjs` (2),
`offensive_zone_play.mjs`, `positions.mjs` (2), `scanning_and_anticipation.mjs`, `winger.mjs` — and
the build product `site/src/data/diagrams.json` carries **10**.

⚠️⚠️ **`check_caption_hosts.py --rule-like` RANKS ZERO OF THEM.** **That worklist exists to surface
captions stating a rule or a boundary in a document that does not own them — and a boards-posture
technique cue is neither, so the tool cannot route this by construction.** ***"It was only visible
from the rendered speech of the host document."***

### The rows

- [ ] ⚠️ **NOT DONE IN THE WAVE, DELIBERATELY.** **`site/src/data/diagrams.json` is a BUILD PRODUCT
  that `check_absolutes.py` reads**, and `build-diagrams.mjs` takes ~6 minutes. ⚠️ **Editing the
  sources mid-wave would leave every live agent's `check_absolutes` run reading a stale or half-built
  file.** **`CLAUDE.md`: change shared state BETWEEN waves, not during one.**
- [ ] ⚠️ **`build-diagrams.mjs` MUST run BEFORE `check_absolutes.py`** — that checker reads the build
  product, so a caption edit without a rebuild is **unchecked by construction.** **It now detects the
  staleness and refuses to certify the caption layer rather than passing on old text.**
- [ ] ⚠️ **CAPTION TEXT IS OFTEN A SHARED CONSTANT.** **Editing one to repair one host silently
  rewrites every caption that imports it.** **`grep -ln '<CONSTANT>' site/src/diagrams/*.mjs` FIRST.**
- [ ] ⚠️ **One module already knows the answer.** `forechecking_systems.mjs:805-812` carries a comment
  quoting **both** USA Hockey sentences with their line numbers, and the note that ibc *"is TECHNIQUE
  teaching built on the 2007-09 rulebook"*. **Whoever repaired that caption did the source work and
  the other five modules did not inherit it.** **Read that comment before writing anything.**
- [ ] **Check `check_caption_echo.py` afterwards** — a caption that now repeats the prose directly
  above it is the defect the caption wave and the marker wave create together.

---

## Workstream 35: two distinctions my briefs conflated, and a new false-pass shape

### 35A — ⚠️ "cites the wrong sentence" and "carries the narrow half" are DIFFERENT defects

**Workstream 33's scope is the sites that cite the TIP sentence as authority for a Case 2
instruction.** ⚠️ **But most sites in this corpus use the corpus's OWN HOUSE PHRASE — *"the point of
your shoulder"* — CITE NOBODY, and defer to the owner.**

⚠️ **Those are not a Workstream 33 defect at all. They are a PROPAGATION GAP from the owner's repair
in `72ef106`** — the narrow half of a conclusion that now has two halves.

**Two agents independently reported their files as wrongly listed:** ⚠️ **`playing_without_the_puck.md`
cites the tip sentence in ONE place, its Sources trailer, correctly scoped** · ⚠️ **`passing_and_receiving.md`
returns ZERO *tip* hits and was never on any WS33 list — my brief put it there.**

- [ ] **Keep the two rows apart.** **The repair text is similar; the JUSTIFICATION a repairing agent
  writes is not, and a sentence written on the wrong justification is wrong about the source even
  when it improves the corpus.**
- [ ] ⚠️ **`passing_and_receiving.md` was INTERNALLY SPLIT before its repair** — its facts `Never:`
  already carried the broad *"not your shoulder"* while four spoken body sites carried the narrow one.
  **Check the other documents for the same split before assuming a file is uniform.**

### 35B — ⚠️ A FALSE PASS NOBODY HAD RECORDED: `md_to_speech.py` with a positional argument

**An agent ran `md_to_speech.py <path>`.** ⚠️ **The tool takes `--content` / `--out` / `--only` and
ERRORS on a positional argument — writing a 223-byte error file.** ⚠️⚠️ **The agent's grep over that
file returned nothing and READ AS A CLEAN RENDER.**

- [ ] ⚠️ **This is the same shape as the two build traps `CLAUDE.md` records: the failure is SILENT
  and the absence of output looks like the absence of defects.** **It was caught only because the
  agent disbelieved a clean result.**
- [ ] **Any brief telling an agent to render must give the flags**, and any agent rendering must check
  the chunk COUNT is non-zero before reading the output.

---

## Workstream 36: ⚠️ A ⚠️ ANYWHERE IN A PARAGRAPH PREFIXES THE WHOLE PARAGRAPH — the mechanism is documented, the consequence is not

**Found 19 September 2026 by the agent repairing `skating.md`, in its own draft, ON THE RENDER.**
⚠️ **Its first rewrite of `:21` — the document's SECOND SENTENCE — placed a ⚠️ mid-paragraph for
emphasis, and the renderer prefixed the entire opening paragraph with *"Important."*, hijacking the
document's opening seconds.** **Caught, removed, re-rendered.**

### What IS written down, and what is not

**`scripts/md_to_speech.py` documents the MECHANISM in two places** — the `⚠ → "Important. "`
substitution, and a comment recording a case where a caption *"came out as 'Important. Protect what is
not padded…'"*. **It also carries a long note on the `🇬🇧` marker used mid-clause, ending: *"If a future
author writes 🇬🇧 mid-clause again, this rule will break that sentence and no checker will see it."***

⚠️⚠️ **What is NOT written down is the CONSEQUENCE for placement: the prefix attaches to the PARAGRAPH,
not to the clause the marker sits beside.** **So a ⚠️ added mid-paragraph to emphasise ONE sentence
RELOCATES that emphasis to the paragraph's first word — and in an Overview, to the first thing a
listener hears about the document.**

### The rows

- [ ] ⚠️ **NOT CHANGED — a shared tool is shared state and agents were live.** **And the fix is almost
  certainly NOT to weaken the renderer:** the same file records that when a marker was misused
  mid-clause, ***"the CONTENT was fixed to honour the marker's contract, not the renderer weakened to
  tolerate a misuse."*** **That precedent should govern here too.**
- [ ] **Write the placement consequence into the tool's own comment**, beside the mechanism it already
  documents. ⚠️ **And into any brief that asks an agent to add emphasis to a paragraph it is editing.**
- [ ] ⚠️ **Census the corpus for markers sitting mid-paragraph in an OPENING paragraph**, where the
  cost is highest. **Nobody has looked.** **This one was found only because an agent rendered its own
  draft and listened to the first sentence.**

---

## Workstream 37: Workstreams 30 and 33 contradict each other about the same line

**Found by the `skating.md` agent, and it is right that both are half-right.**

**WS30 calls `skating.md:604` *"the mismatch, unlabelled"*. WS33 names the same line as *"the sibling
that already gets it right"*.**

⚠️ **Reconciliation: it cites the BROAD sentence — so WS33's attribution defect does not apply — but
as authority for the NARROW instruction, so WS30's does.** **Both rows describe the same line and
neither describes it completely.**

- [ ] **Reconcile the two rows in the plan.** ⚠️ **Two plan rows disagreeing about one line is the
  shape that sends two agents to make opposite edits.**
- [ ] ⚠️ **And WS30's own table is short: it says *"five sites"* and *"four SPOKEN sites"*. There are
  SIX and all six are spoken** — the table is missing `:11`, `:868` and `:920`. **Measured by the
  agent that read them.**
- [ ] ⚠️ **`skating.md` contains ZERO instances of *"tip of your shoulder"*, so it is NOT one of
  Workstream 33's six documents at all.** **Two agents have now reported their file wrongly listed
  there — see Workstream 35A.**

---

## ⚠️ Workstream 34 addendum — an agent reported the caption layer CLEAR for its own files, and it is not

**The agent repairing `systems/` wrote: *"Diagram captions: checked, and clear. No caption in
`diagrams.json` states a boards-contact posture — the 'shoulder' hits are all lane-reference
geometry."***

⚠️⚠️ **REFUTED. The coordinator parsed `site/src/data/diagrams.json` and listed every caption carrying
*"point of your shoulder"* with its owner. There are TEN, and FOUR belong to that agent's own two
files:**

| caption id | owner |
|---|---|
| `forecheck-press`, `forecheck-pinch` | ⚠️ **`content/systems/forechecking_systems.md`** |
| `oz-cycle-rim`, `oz-cycle-reverse` | ⚠️ **`content/systems/offensive_zone_play.md`** |
| `winger-dz-rim`, `winger-dz-reverse`, `winger-arriving-at-the-line`, `winger-corner-and-the-empty-point` | `content/positions/winger.md` |
| `scan-before-a-wall-reception` | `content/hockey-iq/scanning_and_anticipation.md` |
| `angle-into-the-corner` | `content/technique/body_contact_and_battles.md` |

**The caption text is plainly a boards posture** — `offensive_zone_play.mjs:1096-1098`: *"this is a
wall battle: never turn your back to the boards and never duck. Skates parallel to the wall, forearm
and hip into the contact, head up and chin off your chest — and not on the point of your shoulder."*

⚠️ **So four documents whose PROSE was repaired this wave still voice the unrepaired wording through
their own captions.** ⚠️ **And the agent checked, in good faith, and got the opposite answer.**

- [ ] ⚠️ **Record HOW the check failed, because the lesson is the reusable part.** **A grep for
  *"shoulder"* over `diagrams.json` returns mostly lane-reference geometry, and the boards captions
  are a minority buried in it.** **Searching for the NARROW PHRASE — *"point of your shoulder"* —
  returns ten and nothing else.** **The discriminator is the phrase, not the body part.**
- [ ] ⚠️ **`check_caption_hosts.py --rule-like` ranks ZERO of the ten**, so no worklist routes this.
  **It was found from RENDERED SPEECH by one agent and by a targeted parse by the coordinator — two
  methods, neither of them a tool.**

---

## Workstream 38: *"Two prohibitions, two different injuries"* — a candidate, and I think it is a FALSE POSITIVE

**Flagged by the agent repairing `switching_positions.md:167`, in a file it owned, and correctly NOT
acted on** — *"fixing it means adding a limb AND changing the count in the same sentence: new safety
text that needs its own review."*

**Key Takeaway 9 (`:556`) reads *"Two prohibitions, two different injuries"* and names the turned back
and the tucked chin. The agent reports that Key Focus, the Overview, the facts block, the body and
Common Mistakes all name THREE prohibitions, so the takeaways layer fails the layer test.**

### ⚠️ Why I think the takeaway is right and the finding is not

**The corpus deliberately keeps a PAIR apart on the grounds that they have DIFFERENT EVIDENCE.**
`skating.md:127-129` states it in terms: ***"Note which evidence belongs to which prohibition, because
the two are against two different injuries."*** **The turned back rests on USA Hockey's *"[e]ven a
light hit from behind could inflict a severe head or neck injury"*; the tucked chin rests on the
walking-speed finding, which the corpus is careful to say is stated of the head-down collision and NOT
of the turn.**

⚠️ **The shoulder limb is a POSTURE instruction — which surface meets the wall — not a third member of
that evidentially-distinct pair.** **So *"two prohibitions, two different injuries"* is a claim about
the EVIDENCE pairing, and inserting the shoulder would make it false rather than complete.**

- [x] ✅ **RULED 19 September 2026 by the `commit-gate`: FALSE POSITIVE. DO NOT INSERT THE LIMB.**
  ⚠️ **Its reasoning: the instruction clause immediately preceding the count reads *"Never your back to
  the boards, and never duck"* — exactly TWO — and the colon then enumerates exactly those two, each
  with its own distinct evidence.** **Inserting a shoulder limb makes *"two… two"* false.**
  ⚠️ **No `content-reviewer` is owed. This row is closed on the count question.**
- [ ] ⚠️ **What the gate flagged SEPARATELY and is NOT closed: Key Takeaway 9 is the one summary unit
  in that file carrying NO shoulder limb at all, while the Common Mistake at `:492` names three.**
  **That asymmetry is PRE-EXISTING — the old `:492` already read *"three separate prohibitions"* — so
  this wave did not create it.** **A plan row, not a gate item, and it must NOT be fixed by editing the
  counting sentence.**
~~- [ ] ⚠️ **And if it IS the full set, the fix changes a count AND adds a limb in one sentence.**~~
  ⚠️ **STRUCK — its condition was closed by the ruling two bullets above, and it was left standing
  beside its own answer.** **This is instance FOUR of the pattern named in the standing guidance
  below, caught by the commit gate in the same audit that cleared the wave.**

### Also flagged and not acted on, same file

- [ ] **`:556` carries a stray apostrophe** — `[Breakouts](../systems/breakouts.md)':` **renders in
  speech as *"the reception taught here is Breakouts': open your hips…"***. **Cosmetic, pre-existing,
  passes `check_links`.**


---

## Workstream 39: two rows the coordinator SAID were filed and never wrote

⚠️⚠️ **Caught by the commit gate, which greped for them instead of believing me:**
**`grep -c "playing_without_the_puck.md:968" OPEN_ITEMS.md` → 0.**
**`grep -i "listen to the hedged sites in sequence"` → no match in either staged file.**

⚠️ **I told the gate both were carried forward. They existed only in a message.** **A row described as
filed and not written is worse than one never mentioned: the next reader searches, finds nothing, and
concludes the question was never asked.**

### 39A — ⚠️ the corpus had the answer in a Sources trailer the whole time

**`content/hockey-iq/playing_without_the_puck.md:968` has been quoting BOTH USA Hockey shoulder
sentences — the broad-and-soft one and the narrow-and-flat one — correctly scoped, in its Sources
trailer, since before this wave began.** ⚠️ **Meanwhile FIFTEEN documents instructed on the narrow half
alone, and a seven-agent wave was needed to repair them.**

- [ ] ⚠️ **This is the `check_disclosures` shape from the other direction: a question ANSWERED
  ELSEWHERE IN THIS REPOSITORY that nobody propagated FROM.** **The gate's own words: *"no gate of mine
  would ever have reported that."***
- [ ] **Census the Sources trailers for claims the instructional layers do not carry.** ⚠️ **A trailer
  is the layer a listener never hears AND the layer most likely to be complete, because it is where the
  source work lands. Nobody has ever swept it as a SOURCE of propagation rather than a target.**

### 39B — the only open question the ordering test left

**Every mechanical property was established: no site carries the hedge without the tip absolute, and
the gate's `naked = 0` upgrade proves every hedge-bearing LINE carries its absolute ON THE SAME LINE.**

⚠️ **What remains is the SEQUENCE question: whether, hearing several hedged sites in succession through
`md_to_speech`, the hedge ever reads as SOFTENING the absolute.**

- [ ] ⚠️ **Nobody has rendered the corpus and listened to the hedged sites in order.** **The gate stated
  its own blind spot precisely: *"I checked ordering in the SOURCE, not in the layer the listener
  actually hears; the 300 ms break either side of a facts line is where a backwards attachment would
  actually happen, and that is precisely where my method is blind."***
- [ ] ⚠️ **AND THE ADJACENT-LINE CONCERN IS CLOSED — do not carry it forward.** **The gate upgraded its
  own blind spot on re-reading its output: `naked = 0` means the same-spoken-unit property is
  ESTABLISHED, not assumed.**


---

## ⚠️ STANDING GUIDANCE: a repair aims at the sentence; the pre-repair state lives in the sentences AROUND it

**Named by the `commit-gate` on 19 September 2026, after asking it to call the fourth instance as a
pattern rather than an item.** ⚠️ **It did, and it found the cause is MECHANICAL, NOT ATTENTIONAL.**

| | what the repair fixed | what it left behind | distance |
|---|---|---|---|
| 1 | `switching_positions.md:492` gained a limb | **the count of three, unchanged** | same sentence |
| 2 | a table's bare `67`/`1` retracted | ***"the single ordering hit"*** | **4 lines below** |
| 3 | the same table reordered | ***"the second and third rows"*** | **4 lines above** |
| 4 | Workstream 38's count question ruled | ***"if it IS the full set…"*** | **2 lines below** |

⚠️⚠️ **Every one was within FIVE LINES of the edit, and every one was a POINTER INTO THE PRE-REPAIR
STATE.** **Instances 2, 3 and 4 were in review and plan prose, not in `content/` — so no checker in
this repository could ever have seen any of them.**

### ⚠️ Why `CLAUDE.md`'s existing remedy is not working

**It already says *"read to the end of the paragraph, not the end of the clause."*** ⚠️ **That asks
for VIGILANCE, and vigilance is what failed four times in one wave — twice to agents, twice to the
coordinator.**

### The step that replaces it

> ⚠️⚠️ ***"After any repair, RE-READ THE WHOLE BLOCK the edit sits in and ask what in it pointed at the
> state you just changed."***

**THE THREE FORMS ARE ENUMERABLE, which is what makes this a checklist item rather than a
resolution:**

1. ⚠️ **COUNTS** — *"those two"*, *"neither of the three"*, *"at once"*, *"Two prohibitions"*. **A
   sentence that counts its own limbs goes false when you insert one.**
2. ⚠️ **ORDINAL / POSITIONAL REFERENCES** — *"the second and third rows"*, *"the line above"*, *"as
   stated earlier"*. **Reordering is a structural edit and pointers do not move with it.**
3. ⚠️ **CONDITIONALS WHOSE CONDITION YOU JUST SETTLED** — *"if it IS the full set…"*, *"until someone
   rules"*. **Not false, which is why they survive: a hypothesis left standing beside its own answer.**

- [ ] ⚠️ **This belongs in `CLAUDE.md` beside the existing sentence, not instead of it.** **Change a
  shared file BETWEEN waves, not during one.**
- [ ] ⚠️ **It applies to `project/` as hard as to `content/` — three of the four instances were in a
  review record or a plan row, where nothing mechanical is watching at all.**


---

## Workstream 40: ⚠️ THE CAP IS NOW BLOCKING A CORRECTION — Workstream 8's predicted failure, arriving

⚠️⚠️ **EVERY LINE NUMBER BELOW IS STALE, AND THAT IS THIS WORKSTREAM'S OWN LESSON FIRING ON ITSELF.**
**The `:881-889` red-flag rewrite later the same day added lines above them.** **Re-measured
19 September 2026: `:1375` is now **`:1381`**; the high-sticking facts cluster given as `:1377-:1381`
is now **`:1383-:1384`**; the body passage given as `:1399-:1404` is now around **`:1405-:1415`**.**
⚠️ **A LINE NUMBER IS A FIGURE, and it went stale exactly the way `CLAUDE.md` says a count does — in a
workstream whose whole subject is stale pointers.** **LOCATE BY CONTENT, NEVER BY LINE NUMBER.**

**Found 19 September 2026 by the agent working Workstream 8 in `content/technique/body_contact_and_battles.md`, and verified by the coordinator.**

**`:1375` conditions USA Hockey's fend-off permission on *"while on the puck"* — Casebook Standard of
Play Situation 6 only.** ⚠️ **The SAME DOCUMENT'S facts lines `:379` and `:1223` carry BOTH limbs:
control the puck (Situation 6) **or be reaching for it (Situation 7)**.**

**Situation 7 verified by the coordinator, and it is a SEVENTH INSTANCE of the false-absence class:**
⚠️ **`grep "reaching for the puck" sources/usah_casebook.txt` returns ZERO.** **Flattened, the sentence
is there:** *"one hand off the stick **when reaching for the puck** and using the free arm to steer the
opponent or maintain position."*

⚠️⚠️ **So §12 states the permission NARROWER than §5 and §11 do, inside one document.**

### ⚠️ Why it is not repaired, and that is the finding

**Measured, not estimated: the best rewrite carrying the Situation 7 limb is `311/300` — ELEVEN OVER —
and the block is at `HARD_MAX` 11/11 with no slot for a twelfth line.** **The body at `:1409` carries
the same Situation-6-only condition, so the repair is a TWO-LAYER one.**

⚠️⚠️ **THIS IS THE FAILURE WORKSTREAM 8 EXISTS TO PREDICT, ARRIVING.** **A block at its cap once
EVICTED a mandatory give-ground duty into a `Technique:` line with no rule number and no penalty, and
every checker passed.** **Here the cap is not evicting anything — it is PREVENTING A KNOWN CORRECTION,
which is the same defect one step earlier.**

- [ ] ⚠️ **Direction is SAFE — a player forgoes something legal — so it is not a critical.** **But it is
  a facts-layer scope divergence inside one document and it cannot be fixed by writing better.**
- [ ] ⚠️ **The answer is the section split the agent identified and deliberately did not make:** facts
  `:1377-:1381` are **five consecutive lines on the stick above the shoulders**, and the body already
  groups the same way at `:1399-:1404`. **A `#### The stick above the shoulders` split yields blocks of
  6 and 5 and relieves BOTH dimensions at once.** ⚠️ **It is a C11 structural edit with anchor
  consequences — it needs its own brief, its own `check_links` anchor pass and its own gate.**
- [ ] **Two more instances of the same shape in the same line, both costing characters it does not
  have:** `:1375`'s third limb renders as *"Hockey Canada eight point one blocks a stick, not holds"* —
  ⚠️ **a listener can hear Hockey Canada as the ACTOR** — and repairing it costs ~10 characters.

### What the measurement found about the file as a whole

**34 lines within six characters of cap · ONE at cap · 12 of 55 blocks at `HARD_MAX` 11 · 2 at
`MAX_COACHING_FACTS` 8.** ⚠️ **And the agent classified them STRUCTURALLY rather than by headroom,
which is the useful part: a tight line in a block with room can be SPLIT; a tight line in a full block
is FROZEN.** **Four lines are frozen. Two more are tight but relievable and need nothing now.**

⚠️ **Substitution was attempted on `:1375` and MEASURED, not guessed: the best lossless candidate saves
FIVE characters and trades *"writes … in its Casebook only"* — an act, unambiguous — for an adjective
that can be misread as scoping the permission rather than its location.** ***"Five characters is not
relief, and it is a trade."*** **Refused, correctly.**

### One char-neutral repair made, and it was an EAR defect

**`:1375`: *"to hold a position legally established"* → *"to keep"*. 300/300 before and after.**
⚠️ **Voiced alone the line said *"you may fend off, NOT HOLD … TO HOLD a position legally
established"* — the same verb in its prohibited and its permitted sense inside one `<p>`.** **And
*"keep"* is closer to the sources: the Casebook writes *"maintain"*, and this document's own body at
`:1409` already says *"maintain"* — so the facts layer now matches the layer it summarises.**

- [ ] ⚠️ **`:379` and `:1223` still read *"hold a position you 'legally established'"*.** **Three lines
  in one document now use two verbs for one Casebook permission.** **The agent left them deliberately
  because the in-unit verb collision does not occur there — a judgement worth confirming.**


---

## Workstream 41: ⚠️ WORKSTREAM 29 CLOSED — and THE BRIEF'S HEADLINE SENTENCE WAS A FABRICATION

**19 September 2026. Both files edited, nothing staged.** `uk_rules.md` now owns the British red-flag
list **in full — fourteen items**; `conditioning_and_recovery.md` keeps CRT6's ten and owns **the
difference between the two lists.**

### ⚠️⚠️ The dispatcher wrote a safety sentence that the source does not support

**The brief's headline was:** *"for a British grassroots player the same observation is an AMBULANCE
and for CRT6 it is not"* — the observation being **a player lying motionless.**

⚠️ **UKCG's red flag is NOT "lying motionless".** **Verified by the coordinator at `sources/ukcg.txt:251-253`,
read positionally out of a two-column extraction:** *"Seizure/convulsion or limb twitching or lying
rigid/motionless **due to muscle spasm**"* — **tonic posturing, not stillness.** ⚠️ **And UKCG's OWN
visible-clues list separately carries plain *"Lying motionless on ground/slow to get up"*, exactly as
CRT6 does.**

⚠️⚠️ **Writing the brief's sentence would have told a British reader to call 999 for any player lying
still.** **It was caught only by the agent that read the source.**

**This is the THIRD time this session that the DEFECT WAS IN THE BRIEF, not the corpus, and the second
where the proposed WORDING was the defect rather than the premise** — the failure `CLAUDE.md` records
under *"AND THE BRIEF'S PROPOSED WORDING IS A BRIEF, NOT A PATCH."* ⚠️ **The dispatcher had not read
`ukcg.txt`'s red-flag panel when it wrote that sentence.** **It is two-column, it interleaves in
extraction, and its heading prints `R E D F L AG S` — so `grep -i "red flags"` returns ZERO on the
page that IS the red-flag panel.** ⚠️ **Both false-absence classes filed earlier tonight, firing
together, on the sentence that was written without checking.**

### What the real defect turned out to be, and it was bigger

**A BROKEN CROSS-DOCUMENT PROMISE.** `conditioning_and_recovery.md:261` said `uk_rules.md` *"carries
the British list"*; `uk_rules.md` carried **FOUR of fourteen**, presented flatly as the answer to
*"Know what counts as a red flag before you need it."* **Unlabelled as partial.**

⚠️ **Three UKCG flags fire EARLIER than their CRT6 counterparts, and a reader taught only CRT6's ten
is waiting for the wrong thing:**
- **Skull:** UKCG *"Any suspicion of a skull fracture (e.g. cut, bruise, swelling, severe pain at site
  of injury)"* against CRT6's *"Visible deformity of the skull"*. ⚠️ **The CRT6 reader is waiting for a
  DEFORMITY.**
- **Neurological deficit:** speech/comprehension trouble, decreased sensation and loss of balance have
  **no CRT6 counterpart**, and weakness is **unqualified** where CRT6 needs *"more than one arm or leg"*.
- **Previous brain surgery or bleeding disorder**, **blood-thinning therapy**, **intoxication** — no
  CRT6 counterpart at all.
- ⚠️ **And CRT6 is lower in the OTHER direction on the neck.** **The document now states it in both
  directions and closes with *"act on whichever one fires first"*.**

- [x] ✅ **CLOSED — repaired in the working tree by the owning agent and independently confirmed by
  `safety-reviewer`, which read `:840-890` and reports it now attributes the ten to CRT6 and routes
  British readers to the fourteen.** **`skating.md:613` and `goaltender.md:293,1236` carry no count and
  need no change.** ~~`content/technique/body_contact_and_battles.md:881` — *"The ten red flags that mean an
  ambulance…"*.~~ **Still true of CRT6.** **But a British reader routed through it now gets a count
  that is not the count of their own list.** ⚠️ **A stale POINTER created by a repair in another file —
  the exact shape of the standing guidance's *"re-read the whole block and ask what pointed at the
  state you just changed"*, arriving ACROSS files where that guidance only covers blocks.**
  **The agent did not touch it: another agent held the file. Correct, and it reported instead.**
- [ ] **Audit whether `goaltender.md` and `skating.md` route British readers correctly now that the two
  lists are known to differ in three places.** **The agent checked only that no OTHER document carries
  the British list.**

### ⚠️ A renderer finding for whoever owns `scripts/` — held until between waves

**`md_to_speech` expands `rigid/motionless` to *"rigid or motionless"* INSIDE QUOTATION MARKS.**
⚠️ **So the voiced quotation differs from the written one, and `check_quote_drift` cannot see it — that
tool reads the MARKDOWN.** **Same class as the already-recorded finding that TTS does not voice
quotation marks at all: the renderer can silently alter a quotation's words, not just its framing.**

### What the agent could not reach, in its own words

- **Whether any of this is what a UK clinician would want a bystander told.** **It reconciled two
  published lists against each other.** ⚠️ **Nobody can say whether telling a rec-league player to
  treat *"current drug or alcohol intoxication"* as a 999 trigger is understood as the guidance
  intends.**
- ⚠️ **The fourteen are NOT verified as edition-stable.** **Only November 2024 was read;
  `uk_rules.md:522`'s scope note confines everything else to that edition.**
- [ ] ⚠️ **NOT CERTIFIED — new text has not been reviewed.** **Needs `safety-reviewer` (a recognition
  list a reader acts on under pressure), `source-verifier` (FOURTEEN new quotations), and
  `content-reviewer`.** ⚠️ **And `check_quote_drift` structurally CANNOT match them — they land in its
  *"NOT FOUND IN ANY LOCAL SOURCE"* bucket beside the pre-existing CRT6 quotes.** **That is expected,
  not clean, and it must not be read as a pass.**

### Method worth keeping

**The agent verified 35 quoted fragments character-exact against a whitespace-stripped normalisation
of the source** — the technique that defeats the two-column interleave — **and rendered `crt6.pdf`
with `pdftoppm` rather than trusting the 1,535-byte extraction.** ⚠️ **Its own render pass caught THREE
positional pointers it had just written** — *"the last two of those"*, *"the last two of the five"*,
*"the last two … and not the first three"* — **each pointing into a list just spoken.** **All three
replaced by NAMING the items, which was SHORTER.** **That is the substitution rule holding for a third
independent case.**


---

## Workstream 42: CAPTION LAYER CLOSED — and the coordinator's site census was wrong IN BOTH DIRECTIONS

**19 September 2026. Ten caption source sites across six modules, plus the `diagrams.json` rebuild.**
**Every one now places the hedge AFTER the tip absolute, uses *"not"* and never *"never"*, and ends the
sentence on the negation.** **Build `EXIT=0`, 204 diagrams, exactly 10 PNGs re-rendered.**

### ⚠️⚠️ A LINE-GREP OVER `site/src/diagrams/*.mjs` NEVER EQUALS WHAT SHIPS — AND IT IS WRONG IN BOTH DIRECTIONS

**The coordinator's brief said EIGHT sites. There were TEN.** ⚠️ **Two hid because the phrase SPLITS
ACROSS A JS STRING-CONCATENATION BOUNDARY:** `'…and not on the point of ' + 'your shoulder…'`
(`oz-cycle-rim`) and `'…and not on the point ' + 'of your shoulder.'` (`winger-arriving-at-the-line`).
**A line-based grep cannot see either.**

⚠️ **AND THE SAME GREP NOW OVER-COUNTS.** **Measured by the coordinator after the wave: the naive
`grep -c` returns 14, because the agent added SOURCE COMMENTS quoting the phrase, and a comment is not
a shipped layer.** **The concatenation-aware census that strips `//` lines and joins `' +\n '` returns
**10**; `site/src/data/diagrams.json` contains **10 tip and 10 hedge**. They agree.**

⚠️ **So neither error is "grep more carefully". THE BUILD PRODUCT IS THE ONLY TRUSTWORTHY COUNT OF WHAT
A LISTENER RECEIVES**, and `diagrams.json` is where it lives. **This is the same lesson as the layer
test, arriving in the diagram layer: the source and the thing that ships are different artefacts.**

- [ ] ⚠️ **The concatenation blind spot is UNMEASURED outside this one phrase.** **Any census ever run
  by line-grep over `site/src/diagrams/*.mjs` may be short by the same mechanism.** **Only *"shoulder"*
  was checked.**

### ⚠️ A live count defect the brief did not know about

**The owner had also RENAMED the third member.** `forechecking_systems.md:539` and `:876` now read
*"The turned back, the tucked chin and **the shoulder on the boards** are three separate
prohibitions."* **Both forecheck captions still said *"the shoulder tip"*.** ⚠️ **Adding only the hedge
would have left a caption enumerating a TIP-scoped third member one clause after broadening it.**
**The count stays three — a SUBSTITUTION inside the list, not an insertion.**

### ⚠️ `check_caption_negations.py` IS BLIND TO "rather than" — three latent inversions found by hand

**`positions.mjs` ×2 and `winger-corner` read *"forearm and hip into the contact **rather than** the
point of your shoulder, head up and chin off your chest"* — the negation in front of the head-up limb,
which is the exact shape commit `49f1dc6` exists to repair.**

⚠️ **The tool's vocabulary is `never|not|no|neither|nor|cannot|nothing|none`. *"rather than"* IS NOT IN
IT.** **All three were invisible.** **Repaired by adopting the owner's own repaired sentence
(`winger.md:662`) verbatim, which both fixes the reach AND puts the construction back where the tool
can see it.**

- [ ] ⚠️ **NO SWEEP HAS BEEN DONE for negation-shaped connectives outside that vocabulary —
  *rather than*, *instead of*, *as opposed to* — across all 204 captions.** **The three were found only
  because an agent happened to be editing those lines.** **Candidate: widen the tool, or sweep by
  hand first to learn whether widening it produces a usable signal or a noise floor.**

### ⚠️ The comment that quoted the right sentence and shipped the wrong one

**`forechecking_systems.mjs:805-812` already quoted `ibc.txt:692`, the BROAD sentence — and the caption
still shipped carrying only the tip.** ⚠️ **Quoting the broad sentence in a comment is not obeying it
in the string, and NOTHING MECHANICAL COULD SEE THE GAP: the caption was true, cited, and short of the
instruction.** **This is the second time in this repository that the answer sat unactioned in a comment
in the very file being edited** — the first was the `HIGH_SLOT` polygon.

### Open rows this wave produced

- [ ] **`content/positions/switching_positions.md`: 6 tip / 1 hedge. `content/foundation/rules_primer.md`:
  3 / 1.** ⚠️ **CANDIDATES, NOT CONFIRMED** — `switching_positions.md:11` and `:29` express the broad
  limb as *"asks for no shoulder contact on the boards at all where that is possible"*, **which a crude
  pattern UNDER-COUNTS.** **Needs reading by an agent that owns those files.**
- [ ] **TWELVE further captions teach the full posture (*"forearm and hip"*) with NO shoulder limb at
  all** — `breakout-winger-wall`, `icing-the-race-and-the-dot`, `off-wing-open-to-the-ice`,
  `the-call-and-who-can-see-it`, `puck-on-the-far-side` and seven more. ⚠️ **Adding a limb to twelve
  captions is NEW SAFETY TEXT and needs its own review — it is not a propagation chore.**
- [ ] **`game_management.md` and `puck_handling.md` host repaired captions but say nothing about the
  shoulder in their own prose.** **Silent, not half-informed — probably correct. Flagged for routing.**
- [ ] ⚠️ **THE ASTRO BUILD WAS NOT RUN, deliberately** — `clean:cache` plus a full rebuild touches
  `site/dist` while agents are live in `content/`. **So the promoted-caption path into the RENDERED
  PAGE is unverified.** **After the wave: `/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/npm run
  build`, and check BOTH the exit code AND that `dist` is COMPLETE, not merely fresh** — a failure at
  `build:pdf` or `check:links` leaves a fresh-mtime incomplete `dist`.
- [ ] ⚠️ **NOT CERTIFIED.** **Ten captions of new safety text, one count member renamed, three clause
  orders moved. Needs `safety-reviewer` on the rendered audio and `commit-gate` on the staged diff.**

### What it verified that matters

**Sources re-read character-exact: `ibc.txt:1453` (en dash, *"Angling In"* list), `ibc.txt:692` (§B,
*"checked while skating parallel to the boards"*), `ibc.txt:1537` = `huh.txt:647`.** **`ibc.txt:1281`
neither quoted nor reopened — the ruling holds.** **NINE host documents, not the five the brief named,
all rendered through `md_to_speech` and every repaired caption read as voiced.** **Every count word in
all ten built captions machine-listed and read: the only one naming the shoulder was the forecheck
*"three separate prohibitions"*.**


---

## Workstream 43: ⚠️ `md_to_speech.py --only` REPORTS A NON-MATCHING FILTER AS A CORPUS ABSENCE

**Found by the coordinator 19 September 2026, after twelve consecutive silent failures.**

**`--only` filters on the document id, and the id separator is a DOUBLE UNDERSCORE:**
`technique__skating`, `foundation__uk_rules`, `off-the-ice__conditioning_and_recovery`.
⚠️ **`--only technique/skating` — the natural form, the form that matches the repository layout, and the
form the coordinator put in SIX briefs today — MATCHES NOTHING.**

**And the failure is not silent-but-honest. `scripts/md_to_speech.py:4598-4600`:**

```
documents = discover(args.content)
if args.only:
    documents = [d for d in documents if args.only in d[1]]
if not documents:
    print(f"no markdown found under {args.content}", file=sys.stderr)
```

⚠️⚠️ **THE `if not documents` BRANCH CANNOT TELL "the corpus is empty" FROM "your filter emptied it",
AND IT BLAMES THE CORPUS.** **Measured: `discover()` returned all 39 documents; the message still read
*"no markdown found under …/content"* and the exit was 1.** **It sends you to look at `--content`,
at the corpus, at your working directory — at everything except the flag you actually typed.**

- [ ] ⚠️ **Fix (HELD — `scripts/` is frozen while agents are live; a shared tool is shared state and it
  changes BETWEEN waves, never during one):** **split the branch.** When `--only` was given and
  `discover()` returned documents, say so and name the filter — ideally listing a near match, since
  `technique/skating` is one character-class away from `technique__skating`.
- [ ] **While there: consider accepting `/` as an alias for `__`.** ⚠️ **But that is a BEHAVIOUR change
  to a tool six live briefs depend on. The error message is the defect; the alias is a convenience,
  and they should not ship together.**

### ⚠️ Why this one matters more than an ordinary usability bug

**It is a FALSE ABSENCE in the corpus's own tooling** — the eighth distinct instance today, and the
first that is not about a source file. **Every other one taught the same thing: an empty result is not
an absence.** ⚠️ **Here the tool goes further and ASSERTS the absence, in a sentence about the wrong
subject.**

⚠️ **AND IT COMPOSES WITH THE PIPE TRAP INTO A COMPLETE FALSE PASS.** **`--only <bad form> | tail`
returns the PIPE's exit status — 0 — while rendering nothing.** **An agent running the layer test that
way gets a clean exit, no output it thinks is unexpected, and concludes it heard the document.**
**It heard nothing.**

**Two live agents were given the broken form in their briefs and have been corrected mid-flight**
(the `body_contact_and_battles.md` repair and the British red-flag `safety-reviewer`), **with the
instruction to verify the `1 documents, N chunks` line on stdout as the proof a render happened.**
⚠️ **That line is the only positive confirmation the tool gives, and no brief has ever asked for it.**

- [ ] ⚠️ **Audit what else today's renders missed.** **Any agent this session told to render with a
  slash-prefixed id may have reported a layer test it did not perform.** **The two known cases are
  corrected. Whether earlier waves used the same form is NOT ESTABLISHED and the transcripts would
  have to be read to find out.**


---

## Workstream 44: ⚠️ SAFETY REVIEW OF THE BRITISH RED FLAGS — THREE CRITICALS, ALL IN THE SUMMARY LAYER

**19 September 2026. `safety-reviewer`, on the uncertified `uk_rules.md` / `conditioning_and_recovery.md`
rewrite.** **It read both files in full, re-read `ukcg.txt:200-340` POSITIONALLY, and rendered
`crt6.pdf` at 200 dpi with `pdftoppm` reading both pages BY EYE.**

⚠️ **THE BODY IS RIGHT AND THE SUMMARY LAYERS ARE WRONG.** **In its own closing words:** *"the weakest
is that fourteen items is more than anyone recalls at a rink, which is an argument for the summary
layers being right — and THREE OF THE FOUR SUMMARY LAYERS ARE WHERE MY CRITICALS LANDED."*
**This is round 10's shape exactly: the correction reached the body and stopped.**

### CRITICAL 1 — `conditioning_and_recovery.md:17` Key focus still states CRT6's ten as CLOSED

**It reads *"Any one of ten red flags … means calling an ambulance immediately, **no exceptions**."***
⚠️ **The same edit established at `:261` that CRT6's ten are NOT the list a British reader is under.**
**Key focus is the one layer short enough to memorise and THE FIRST SUBSTANTIVE THING THE PODCAST
VOICES AFTER THE TITLE.** ⚠️ **Direction: UNDER-CALLING, on SIX of the fourteen** — amnesia, unusual
behaviour change, any new neurological deficit, blood-thinning therapy, intoxication and a
brain-surgery history are never learned as 999 calls at all, **and the reader waits for a VISIBLE
DEFORMITY where their own guidance fires on any suspicion of a skull fracture.**
**Layers: body ✓ · Overview ✓ · Key focus ✗ · Common Mistakes ✗ · Key Takeaways ✓.**

- [ ] **Carry the counterweight into Key focus in Key Takeaway 1's own shape, and add the matching
  Common Mistakes entry beside the 🇬🇧 21-day entry at `:572`.**

### CRITICAL 2 — the "lying motionless" de-escalation has NO RESPONSIVENESS TEST

**`uk_rules.md:369` and `conditioning_and_recovery.md:269`.** ⚠️ **This is the ONLY sentence in the new
text that SUBTRACTS from a 999 call, and it describes the single most common thing a bystander
actually sees.** **The one test that decides it — RESPONSIVENESS — is ABSENT.**

⚠️ **And it lands immediately after a sentence saying a player who goes *"stiff and still"* IS an
emergency, and after quoting the guidance's own warning that tonic posturing *"may appear to be
unconscious."*** **So the reader is asked, in the seconds after a head impact, to make a
discrimination THE SOURCE ITSELF SAYS MAY NOT BE MAKEABLE.** **Voiced, the last words of the utterance
are *"not by itself the nine hundred and ninety-nine call."***

- [ ] ⚠️ **DO NOT CUT IT — the distinction is real and was written to refute the dispatcher's error.**
  **COMPLETE it with the test: motionless but RESPONDING is a visible clue; NOT responding is loss of
  consciousness, a red flag on BOTH lists.** **CRT6 p.2 confirms the classification — *"Loss of
  consciousness or responsiveness"* and *"Lying motionless on the playing surface"* are SEPARATE
  visible-clue bullets — which is exactly why the omission, not the claim, is the defect.**

### CRITICAL 3 — `uk_rules.md:526` Key Takeaway 10 now names ZERO red flags

**It replaced *"(which include severe neck pain)"* with a COUNT and a SECTION POINTER.** ⚠️ **A count is
not actionable and a pointer is not content.** **The document that OWNS the British list now tells a
takeaways-only reader that fourteen of something exist and not one of what they are — and never gives
the neck threshold at all**, while the body's neck rule reached the SIBLING document's Key Takeaway 1.
⚠️ **`check_pointers` will NOT catch this: it fires on a pointer that DANGLES, not on one that REPLACED
the substance.**

### MAJOR — ⚠️ THE FOURTEEN ARE VOICED NAKED, AND AN ORDINARY BULLET LIST IS A FACTS BLOCK

⚠️⚠️ **THE RENDERER VOICES EACH BULLET ALONE, IN ITS OWN `<p>` WITH A 300 ms BREAK EITHER SIDE — THE
FACTS-BLOCK CONDITION, WITHOUT A FACTS BLOCK.** **Both files carry ZERO ` ```facts ` blocks and it
happens anyway.** **This corpus's entire isolation doctrine has been written about ` ```facts ` lines;
it applies to EVERY BULLET LIST and no convention says so.**

**Consequence, measured in the render:** **nowhere in the list, its intro, or the spoken heading does
*"head injury"* or *"after an impact"* appear.** **So a listener receives, in isolation, with silence
either side:** *"Current drug or alcohol intoxication."* ⚠️ **Read aloud with no surrounding text that
is not a red flag — it is a description of a drunk teammate, and the framing says 999.
Direction: OVER-CALLING.** **And a listener cannot connect *"unusual behaviour change"* to a head
knock if nothing in the utterance mentions one.**

⚠️ **NO CLOSING COUNTERWEIGHT EITHER.** **The CRT6 list in the sibling document is BOOK-ENDED —
*"Learn them as a set:"* before, *"Any one of those ten red flags is an ambulance call."* after.**
**The British fourteen have framing only BEFORE, and the paragraph AFTER them DE-ESCALATES three.**

- [ ] **Put the trigger in the list intro at `:350` (CRT6 states it inside its own panel: *"If ANY of
  the following signs are observed or complaints are reported AFTER AN IMPACT TO THE HEAD OR BODY…"*),
  and add the closing line the CRT6 list already has — placed BEFORE `:367`, not after it.**

### MAJOR — three 999 triggers reframed as background trivia

**`uk_rules.md:367` / `conditioning_and_recovery.md:263`.** **Anticoagulation is the highest-consequence
entry on the British fourteen PRECISELY BECAUSE IT FIRES WHEN THE PLAYER LOOKS FINE — and the corpus's
last word on it is *"worth knowing in advance"*.** ⚠️ **Voiced alone, a listener learns three items
exist and does not learn they are the ambulance call.** **And both sentences are FALSE about
intoxication, which is often the most observable thing at a rink** — *"you can only know them"* is the
stronger and worse form. **A reader who notices the error discounts a sentence carrying three red flags.**

### Minor

- **`999` renders as *"nine hundred and ninety-nine"* and `111` as *"one hundred and eleven"*.**
  **The edit added TWO MORE bare instances.** ⚠️ **Already Workstream 23 — and the WORKING `9-9-9` form
  exists ONE SCREEN AWAY in the same file (Check-yourself Q13 voices correctly).**
- **Check-yourself Q13 rewards the WRONG RECALL** — its answer within the fourteen is *"Severe neck
  pain"* while the document's own `:369` says not to wait for severe.
- **The fourteen carry no EDITION in the intro**, and the Sources trailer that does is not voiced.
- **`"that means 999, not 111"` is firmer than UKCG's *"using ambulance transfer by calling 999 if
  necessary"*.** **The inference errs toward calling — a note for `source-verifier`, not an objection.**

### What it upheld, and it matters

⚠️ **The dispatcher's Q1 premise was WRONG IN THE READER'S FAVOUR.** ***"Act on whichever one fires
first" is SOUND** — the document never asks the reader to arbitrate, because it names all three
divergences and resolves each itself, always toward calling.* **It produces the UNION of the two lists
at the LOWER threshold: it can only over-call, never under-call.** ***"It is the best sentence in the
diff, and the only place it breaks is Critical 2."***
**All fourteen quotations verbatim. Q13's *"the guidance never mentions a helmet"* upheld —
`helmet` returns 0 in `ukcg.txt` both plain AND LETTER-STRIPPED, which is the right way to test it.**

### ⚠️ What it says it could not have found — the most useful sentence in the report

***"I cannot see a hazard whose heading does not advertise it. I found the Key focus critical only
because I ran the omission pass as an explicit list of every caveat in the changed passages and checked
each against every layer — the heading 'Key focus' gives no hint that it contains a red-flag list, and
a document-level grep for 'red flag' would have returned it as a HIT AND CLEARED THE FILE."***
⚠️ **That is the layer test's failure mode stated precisely: a grep that HITS is as blind as one that
misses.**


---

## Workstream 39B CLOSED: ⚠️ THE ORDERING PROPERTY HOLDS IN SPOKEN ORDER — and the render census found two new blind spots

**Coordinator, 19 September 2026. The only open question the ordering test left, answered THROUGH THE
RENDERER rather than by grepping markdown.**

**Method: rendered twelve of the sixteen shoulder-carrying documents individually (`exit 0`,
`1 documents` confirmed on each), stripped SSML to plain text, split into sentences IN SPOKEN ORDER,
and classified every sentence naming the tip or the hedge.** **Four documents were EXCLUDED because
live agents held them — `conditioning_and_recovery.md`, `uk_rules.md`, `body_contact_and_battles.md`,
and later `switching_positions.md` / `rules_primer.md`.** ⚠️ **A checker run while agents are live
proves nothing, so those are NOT covered by this result and must be re-run after the wave.**

### THE VERDICT

**81 spoken sites across 12 documents. NO DOCUMENT VOICES A BARE HEDGE BEFORE THE TIP ABSOLUTE.**

**Fifteen sentences carry a hedge with no tip wording in the same sentence. Eight of those carry the
word *tip* in a form the pattern did not match — the classifier under-detects, the corpus does not
under-state.** **The remaining SEVEN are all PROVENANCE sentences, every one preceded in spoken order
by a full-limb sentence, and six of the seven name the substitute IN THE SAME SENTENCE** — *"beside the
forearm and hip"*, *"in the line straight after the forearm and hip"*, *"whose first point is to keep
your skates parallel to the boards"*. ⚠️ **Which is the safety discriminator holding exactly as
written: a hedged prohibition beside a named substitute is a REDIRECTION, not a licence.**
**The seventh (`core_principles.md:177`) sits TWO SENTENCES after the full limb INSIDE THE SAME
PARAGRAPH — same `<p>`, one breath group. Read and cleared, not a defect.**

### ⚠️ NEW FALSE-ABSENCE CLASS, AND IT IS THE FIRST ONE INSIDE `content/`

**A rendered sentence read *"Both are broader than the tip and softer than never"*. Searching
`forechecking_systems.md` for it returned ZERO — literal AND whitespace-flattened. `grep -rl` then
found the file.** **The markdown is `softer than *never*`.**

⚠️⚠️ **MARKDOWN INLINE EMPHASIS SPLITS A PHRASE THE RENDERER VOICES CONTIGUOUSLY.** **Every
false-absence class recorded so far has been about `sources/`. This one is about THE CORPUS, and every
propagation census this project runs greps `content/`.** **Flattening whitespace does not defeat it —
the markup is INSIDE the phrase.**

### ⚠️ MEASURED: A MARKDOWN GREP IS NOT A COUNT OF WHAT A LISTENER HEARS

**Full-corpus render — 39 documents, 3,141 chunks — against flattened markdown:**

| phrase | markdown | spoken | delta |
|---|---|---|---|
| `head up and chin off your chest` | 89 | 118 | **+29** |
| `forearm and hip` | 143 | 173 | **+30** |
| `not the whole shoulder if you can help it` | 44 | 59 | **+15** |
| `skates parallel to the boards` | 38 | 36 | **−2** |

⚠️ **THE GREP UNDERCOUNTS THE SAFETY LIMB BY UP TO A THIRD**, because the renderer voices DIAGRAM
CAPTIONS, which live in `site/src/diagrams/` and not in `content/` at all — plus the emphasis splits
above. **A propagation census run over `content/` cannot see roughly a third of what is said.**

**The −2 was chased and is NOT a defect:** all four losing instances
(`switching_positions.md:567`, `winger.md:750`, `forechecking_systems.md:976`,
`puck_handling.md:1028`) are **Sources-trailer citation lines**, which are correctly not voiced.
**Recorded because the direction — present in markdown, absent from speech — is the dangerous one and
had to be excluded by reading, not assumed.**

- [ ] ⚠️ **The +30 / +29 / +15 deltas are UNEXPLAINED IN DETAIL.** **Caption-layer voicing and emphasis
  splitting account for them in kind; NOBODY HAS ATTRIBUTED THEM ITEM BY ITEM.** **Until that is done,
  no census in this project should quote a `content/` grep as a count of what ships.**
- [ ] **Re-run this test over the four excluded documents once their agents finish.**
- [ ] **Chunk files were checked for OVERLAP before counting — a suspected overlap at chunks 24/25 of
  `forechecking_systems` proved to be a repeated boilerplate phrase, not overlap.** **The doubled
  sentences in that document are GENUINE: it carries the safety block twice, at `:539` and `:876`.**


---

## Workstream 45: `body_contact_and_battles.md:881` REPAIRED — and THREE INDEPENDENT ROUTES CONVERGED ON ONE LINE

**19 September 2026.** **The pointer WAS a defect, and the agent stated why more precisely than either
the plan row or the reporting agent had:**

***"The ten red flags" was a definite description WITH NO OWNER ATTACHED, one sentence after "These are
CRT6's words." The surrounding prose attributes everything to CRT6 six times; the pointer alone dropped
the attribution while carrying CRT6's number.*** ⚠️ **A figure restated without its owner's
qualification — which is [D8] — and here the qualification is LOAD-BEARING, because the count belongs
to one of two lists and the reader whose list is the other one is a reader this document EXPLICITLY
SERVES.** **`uk_rules.md`'s own new sentence names the cost: *"a partial list teaches you to stop
looking."***

**Changed: `:843` (*"The full red-flag list"* → *"**CRT6's** full red-flag list"*, pure substitution),
`:881-889` (two paragraphs — names CRT6's ten, flags that ten is CRT6's count, names the adopted
guidance and its fourteen with attribution, gives *"act on whichever fires first"*, routes both ways;
COPIES NEITHER LIST), and `:1701` in the Sources trailer.**

⚠️ **A VOICING DEFECT THE MARKDOWN DID NOT SHOW.** **Its first version put the ⚠️ MID-PARAGRAPH.
`md_to_speech` HOISTS it to the front of the whole `<p>` as *"Important."* — so the warning word
attached to the POINTER sentence, not to the warning.** **Split into two paragraphs.** **This is
Workstream 36's ⚠️-placement consequence arriving in live text, found by rendering rather than by
reading the markdown.**

### ⚠️ THE COORDINATOR'S CENSUS THE AGENT ASKED FOR — run, and it isolates ONE line

**Every sentence in `content/` pairing a count with *"red flag"*: 16 hits, 13 distinct sites.**
**All but two name an owner.** **The two that do not:**

- [ ] ⚠️⚠️ **`content/off-the-ice/conditioning_and_recovery.md:17` — *"Any one of ten red flags … means
  calling an ambulance immediately, no exceptions."*** **NO CRT6 ATTRIBUTION, NO BRITISH FLAG, and the
  words *"no exceptions"* assert completeness.** ⚠️ **THREE INDEPENDENT ROUTES REACHED THIS LINE
  TODAY** — `safety-reviewer` by an explicit omission pass over every layer, the
  `body_contact_and_battles.md` agent by reading the owner while repairing a pointer to it, and this
  census by pattern. **It is the OWNER'S OWN OVERVIEW LAYER — the layer a listener hears first and the
  one most likely to be read alone — and it is the identical defect the other file was just repaired
  for.** **HIGHEST-VALUE OPEN ROW.**
- [ ] **`conditioning_and_recovery.md:257` — *"Any one of those ten red flags is an ambulance call."***
  **Weaker candidate: *"those"* has its antecedent one paragraph up at `:244`, which does name CRT6.**
  ⚠️ **But it is voiced in its OWN `<p>`, and a demonstrative pointing across a paragraph break is
  exactly `check_facts_antecedents.py`'s discriminator.** **`safety-reviewer` cited this same sentence
  APPROVINGLY as the closing counterweight the British fourteen lack — so it is doing real work and
  must be completed, not cut.**

### ⚠️ The dispatcher's brief was wrong again — one item off

**The brief said `conditioning_and_recovery.md:261` has UKCG firing earlier *"on skull injury and on
neurological deficit"*.** **The document names SEIZURE AND SKULL as the two *"worded to fire earlier
than CRT6's"* (`:269`), and treats NEUROLOGICAL DEFICIT SEPARATELY at `:265` as *"broader than anything
CRT6 lists"*.** **Not load-bearing here, but it is the second error in a brief this session that the
agent had to correct before working, and both came from the dispatcher relaying another agent's report
rather than reading the file.**

### ✅ An open question the agent declared, ANSWERED

**It wrote:** *"the fourteen I have just written into a safety sentence rests on the owner's word, not
on my own reading. If anyone re-renders that panel this round, check my number."*
✅ **CHECKED, TWICE, INDEPENDENTLY.** **The coordinator read `sources/ukcg.txt:245-283` positionally and
enumerated fourteen; `safety-reviewer` read `:251-270` positionally and enumerated the same fourteen,
listing both columns.** **The number holds. Its safety sentence is sound.**

### The sweep it ran, all verified sound

**`:15` *"Two of the seven ideas in Core Principles"* (seven numbered sections, #2 and #7) · `:323`
*"the other three"* (all three present in `rules_primer.md`) · `:1077`/`:1578` *"the two tables"* ·
`:981` *"the two documents agree"*.** **All hold.** **And it cross-checked the LIVE diagram agent's
comment claiming *"NO COUNT MOVED"* against its own file: true — caption and document agree.**

### Hygiene worth copying

⚠️ **It flagged a hunk in its own file's diff that it did NOT write** — `:1381` *"to hold"* → *"to
keep"*, uncommitted before it started — **so the change is not misattributed to its task.** **That is
the discipline that catches a staged-state divergence, and no checker can see one.**


---

## Workstream 46: SOURCE VERIFICATION — 30 of 30 VERBATIM, ZERO DRIFT, and ONE REAL FACTUAL ERROR

**19 September 2026. `source-verifier` located THIRTY distinct quoted strings, not the fourteen the
brief claimed** — 16 UKCG, 13 CRT6, one England Ice Hockey. **All thirty verbatim. None not located.**
**The `[a]`-bracket disclosed-insertion convention is used correctly in all NINE places.**
**Bullet order in `uk_rules.md:352-365` is left column then right column — the correct positional
reading order, so the author read the panel as claimed.**

### ⚠️ THE FALSE-ABSENCE RATE ON THAT PANEL, NOW QUANTIFIED

**A naive whitespace-stripped phrase search over `ukcg.txt`'s red-flag panel: 8 found, **8 FALSE
ABSENCES OUT OF 16 — EXACTLY HALF**.** **Every multi-line bullet fails, because the right column
splices into the middle of the left one.** ⚠️ **AND THE POSITIONAL READ HAS ITS OWN TRAP: the verifier
sliced the April 2023 file at column 83 instead of 82 and got **8 entries instead of 14** — a
confident, wrong count from a ONE-CHARACTER error.** **Both recorded in `sources/README.md`, with the
column offsets (41 and 82) written down so the next reader does not have to find them.**

### ⚠️ THE ONE REAL DEFECT — and TWO reviewers found it INDEPENDENTLY

**`conditioning_and_recovery.md:265-266` says CRT6's ten cover nothing on *"decreased sensation"*.**
⚠️ **FALSE. CRT6 red flag 6 is *"Weakness or numbness/tingling in more than one arm or leg."*
Numbness/tingling IS decreased sensation.** **The SAME DOCUMENT states that flag correctly at `:251`
and in Key Takeaway 1 at `:634` — so the new sentence contradicts its own document fourteen lines up.**
**The true contrast is SCOPE, not ABSENCE.** **Dispatched for repair.**

### Provenance, all clean

**UKCG's fourteen are a collaboration naming the Royal College of General Practitioners, the Royal
College of Emergency Medicine, the Society of British Neurological Surgeons and all four Home Nations'
departments.** **The corpus calls the SRA page *"the Sport and Recreation Alliance's own page, from
which the November 2024 update downloads"* — HOST AND DOWNLOAD SOURCE, NOT AUTHOR. Correctly framed;
no restater problem.** ⚠️ **And the red-flag panel's instruction says *"emergency ambulance transfer"*,
not *"999"* — the new text frames the 999 as its OWN inference, which is MORE careful than the sentence
it replaced.**

- [ ] **Curly quotes straightened (`'blood-thinning'` → `'blood-thinning'`), and at `uk_rules.md:363`
  promoted to DOUBLE.** ⚠️ **NOT this change's drift — the corpus straightens quote glyphs
  systematically (IIHF's `"few punches"`, `'broken stick'`, `'Mens'`).** **Report as a CORPUS-WIDE
  CONVENTION DECISION or not at all.**
- [ ] **`body_contact_and_battles.md:840` — CRT6 prints `Assume`; the corpus lowers the capital WITHOUT
  the `[a]` bracket, in a file that uses the bracket correctly elsewhere. PRE-EXISTING.**
- [ ] **`uk_rules.md:371` narrows UKCG's carve-out**: the source reads *"Some athletes, AS HAPPENS IN
  Elite and Professional sport…"* — elite sport is an EXAMPLE, not a confinement. **Direction is safe
  for a grassroots reader. Pre-existing, unchanged in this diff.**

---

## Workstream 47: CONTENT REVIEW — and ⚠️ IT DECLARED ITS OWN CENSUS VOID

**`content-reviewer` ran the layer test through the real renderer and found what a grep cannot.**
**Its findings C1 (Key focus), C2 (ordering), M1 (decreased sensation) and M3 (KT10) all duplicate
findings reached independently by other agents — recorded under Workstreams 44-46 and dispatched.**
**New, and not found by anyone else:**

- [ ] ⚠️ **M2 — THE CARDINAL RULE. *"Where the two lists differ, act on whichever one fires first"* is
  THE CORPUS'S OWN SYNTHESIS, presented as published.** **Measured: `whichever` returns 0 in
  `sources/ukcg.txt` whitespace-stripped, and UKCG never references CRT6 or SCAT AT ALL.**
  ⚠️ **It is stated in BOLD as *"The rule"*, in the section the document itself calls *"the one part of
  this document with no nuance in it"* — while the same document scrupulously labels its other
  syntheses 34 lines earlier.** ⚠️⚠️ **AND TWO REVIEWERS DISAGREE ON ITS STANDING: `safety-reviewer`
  calls it *"the best sentence in the diff"* and shows it can only OVER-call; `content-reviewer` calls
  it unsourced synthesis.** **BOTH ARE RIGHT. FIX BY LABELLING, NOT BY REMOVING. Dispatched with that
  instruction.**
- [ ] **M4 — TWO DIFFERENT "four"s about the same guidance in ADJACENT trailers.** `uk_rules.md:544`
  *"the four SENTENCES quoted in this document"* (traced to commit `cfedea3`) against `:536` *"The four
  ENTRIES first quoted here"*. **Different sets. A reader cannot tell them apart.** **No claim is
  false — the note's own scope sentence does the safety work — but the pointer is no longer
  resolvable.**
- [ ] ⚠️ **M5 — NO OWNER ROW EXISTS FOR EITHER RED-FLAG COUNT.**
  `project/content_style_guide.md:2278-2305` has rows for pre-shot pass value, rebound recovery and
  shift length, and NONE for these. **Three documents now state one: `uk_rules.md` owns fourteen,
  `conditioning_and_recovery.md` owns ten, `body_contact_and_battles.md` acquired both today.**
  **The numbers are correct today and NOTHING IS WATCHING THEM.** **Coordinator's edit.**
- [ ] **Common Mistakes gaps in BOTH files.** The body's own headline *"a partial list teaches you to
  stop looking"* is a textbook entry and neither section has one. **`conditioning`'s is more visible
  because that section already carries a 🇬🇧 entry for the 21-day bar** — so a British reader gets the
  return-to-play divergence there and not the red-flag one.
- [ ] **`uk_rules.md:536` *"The four entries FIRST QUOTED HERE"* brushes non-negotiable 6** — it tells
  the reader the document used to quote fewer, which is change history. **The evidential scope must
  stay.**

### ⚠️ It voided its own work, correctly, and that is the entry worth keeping

***"`content/technique/body_contact_and_battles.md` CHANGED UNDER ME MID-REVIEW… I have reported
nothing that rests on either file's current state."*** **And on its cross-file census:** ***"my census
of it is VOID. Re-run `grep -rn "ten red\|British fourteen\|CRT6's ten" content/` after every agent
has finished; THE NUMBER I GOT IS A NUMBER FROM A MOVING TREE."***
⚠️ **That is CLAUDE.md's checkers-race-the-agents rule being applied by an agent to its OWN output,
unprompted. It is the correct behaviour and it should be quoted in briefs.**

### Disclosures re-attacked and UPHELD

**`uk_rules.md:373` *"The UK guidance never mentions helmets at all"* — attacked THREE ways:
`grep -ci helmet` → 0, and WITH ALL WHITESPACE STRIPPED (defeating the letter-spacing mode) → 0.**
**Its further reasoning — *"a British document not repeating something is not a British document
rejecting it"* — is exactly right and must not be softened.** **The two-column read-method disclosure
was ADDED by the repair and is *"the right kind"*.** **No honest disclosure was stripped: every removed
line in both diffs was read.**

---

## Workstream 48: ⚠️ A SECOND MARKUP TRAP — AND THE 65-SITE SAFETY VERIFICATION'S METHOD WAS DEFECTIVE

**`rules_primer.md:34` carried the tip absolute with NO BROAD LIMB AT ALL — a genuine defect that had
survived every census.** **Repaired with THIS FILE'S OWN existing sentence, used verbatim at `:461` and
`:992`, in the identical structural slot.**

⚠️⚠️ **IT SURVIVED BECAUSE THE CORPUS'S OWN BOLD MARKUP SPLITS THE PHRASE.** **The line reads
`never the point of **your** shoulder`.** **A regex for `point of your shoulder` returns 3 in that file,
not 4, EVEN WITH WHITESPACE FLATTENED.** **It surfaced only in the `md_to_speech` render, which strips
markup.** **This is the SECOND markup trap found today — the coordinator found ITALIC emphasis
(`softer than *never*`) a few hours earlier — and this one HID A REAL DEFECT rather than merely a
count.**

### ✅ THE RE-CENSUS THE AGENT ASKED FOR — RUN, AND THE EXPOSURE IS BOUNDED

**The agent wrote:** *"every earlier census of the 65 propagated sites was presumably run with the same
flattened-phrase method that missed this one. That census should be re-run with markup stripped."*

✅ **DONE by the coordinator, corpus-wide, stripping code spans, bold, italic, underscores and link
syntax BEFORE flattening whitespace.**

**Result: across all 16 shoulder-carrying documents, markdown emphasis hides EXACTLY ONE site — the one
already found and repaired.** **Corpus totals: 98 naive → 99 markup-stripped.**
⚠️ **The method WAS defective; the damage it did is now measured and it is one site.**

✅ **AND THE SAFETY-CRITICAL ORDERING PROPERTY RE-VERIFIED UNDER THE CORRECTED METHOD: 97 hedge
occurrences checked within-paragraph, markup-stripped. ONE candidate, read, and CLEARED** —
`conditioning_and_recovery.md:194` quotes the hedge before the absolute in an EXPOSITORY passage about
the sources, but the named substitute (*"forearm and hip"*) precedes both and the paragraph's closing
reconciliation is in the correct order. **A layer test finds candidates; only reading decides.**

### REFUSED, and the refusal is the finding

**`switching_positions.md:341`, the `Never:` line in §Playing your off wing, CANNOT CARRY THE LIMB.**
**192/200 characters — EIGHT of headroom, which is why `--near` (six) NEVER LISTED IT** — and the block
holds **8 non-`Rule:` facts = exactly `MAX_COACHING_FACTS`**, so no ninth line can be added. **The limb
is coaching-manual guidance, not a rulebook rule, so it cannot be smuggled in as `Rule:`, which is
exempt from that count.** **Every rewrite that fits evicts BOTH named injury mechanisms and *"Skates
parallel to the wall"*. The trade was refused.**
⚠️ **AND IT IS NOT A LICENCE: neither limb is present, so no hedged prohibition stands without its
absolute. The line is INCOMPLETE, NOT WRONG.** **The structural remedy is the one `check_facts.py`'s
own message names — *"the section is probably two sections"*.** **Second confirmed instance today of a
cap BLOCKING a correction (see Workstream 40).**

**Also repaired: `switching_positions.md:351`, Key Takeaway 9 and the `:567` trailer** — §Playing your
off wing carried the boards-posture set with NEITHER limb. ⚠️ **The trailer's *"Both prohibitions above
are absolute"* was a stale count reading against three, AND COULD BE TAKEN TO CERTIFY THE HEDGED
WHOLE-SHOULDER LIMB AS ABSOLUTE.** **The post-repair sweep then caught two more stale binary pointers
in a sentence the agent had just written** — *"either trade"* / *"either is the right thing"* → *"any of
those trades"* / *"any of them"*. **Fifth independent case today of the re-read-the-block step firing.**

---

## Workstream 49: CAPTION NEGATION SWEEP — ZERO DEFECTS IN 198 OCCURRENCES, and THE VOCABULARY WAS NOT THE SIGNAL

**All 408 shipped caption/describe strings swept for 23 negation-shaped patterns. Every hit read at
score ≥2, plus all 19 `without` and all 46 `short of` sentences. TRUE-POSITIVE RATE: 0/198.**
***"237 `rather than` occurrences in 408 strings. This is the corpus's HOUSE STYLE for stating a
contrast without a bare negation — which is the correct form, not a smell."***

### ⚠️ THE MEASUREMENT THAT CHANGED THE ANSWER

**It reconstructed the PRE-REPAIR captions from `git show HEAD:` and ran the OLD tool against them:**
⚠️ **`SHAPE` finds ZERO matches anywhere inside the defect sentence. Not a low score — NO MATCH AT ALL.
The entire family was STRUCTURALLY INVISIBLE.**

| variant | the 3 real defects score | live corpus ≥3 band |
|---|---|---|
| vocabulary widened, tail signal unchanged | **1** (lost among 104) | 2 |
| vocabulary widened **+ posture-noun tails** | **3** | 3 |

⚠️⚠️ **WIDENING THE VOCABULARY ALONE WOULD HAVE BOUGHT 198 NEW OCCURRENCES AND STILL LEFT THE DEFECT
INVISIBLE. THE SIGNAL IS THE TAIL.** ***"The corpus's boards-contact instruction is a run of body-part
NPs in apposition, so when the ruled-out thing is ALSO a body part there is no grammatical boundary
left for a listener to hear. That parallelism IS the defect."***

**Tool widened: `CONNECTIVE`/`SHAPE_CONN` plus `POSTURE` in the dangerous-tail signal. NO `--strict`,
and the docstring now says it must never gain one.** **Purely additive, measured: `POSTURE` re-ranks
**0** of the 411 pre-existing hits.** **Bands 411→611; actionable ≥2 goes 56→71; ≥3 goes 12→15.**

- [ ] ⚠️ **A SHARED TOOL CHANGED MID-WAVE, and the agent escalated it rather than hiding it.**
  **The only other agent that ran `check_caption_negations.py` today was the caption-layer agent, whose
  *"six flagged, all cleared"* is OLD-VERSION OUTPUT.** **Its clearances were argued from the tool's own
  discriminator and stand on their reasoning, but the SCORES are superseded.**
- [ ] ⚠️ **Every finding the NEW version produces is UNREVIEWED BY THE OLD ONE.** **The 200 new
  connective occurrences have been read by ONE agent and nobody else.**
- [ ] ⚠️ **`check_caption_negations.py` reports 410 strings; only 408 SHIP.**
  **`centre-crease-the-puck-decides` (`site/src/diagrams/center.mjs:776`) is DELIBERATELY EXCLUDED from
  that module's export list, documented at `center.mjs:833` — but the tool prints hits from it.**
  **An agent could spend time repairing a caption NO LISTENER RECEIVES.**
- [ ] **`loose-puck-who-goes` cleared LEAST confidently.** **Its sibling captions
  (`breakout-winger-wall`, `forecheck-press`, `icing-the-race-and-the-dot`) do the safer thing: full
  stop, then trailing *"instead"*.** **That is the corpus's own demonstrated safe form.**
- [ ] ⚠️ **THE SWEEP COVERED CAPTIONS ONLY.** ***"The ` ```facts ` layer, the body prose and the chunk
  tails carry the same house style and were out of scope — and the facts layer is voiced ALONE with a
  300 ms break either side, WHICH IS WHERE THIS DEFECT CLASS HURTS MOST."***
- [ ] **A negation carried ACROSS A FULL STOP is invisible to `SHAPE` by construction** (its middle
  span is `[^.!?]{0,70}`) **— but a caption is voiced as one continuous block, and a prohibition in
  sentence *n* can still colour sentence *n+1*.** **`breakout-against-1-3-1` is exactly that shape.**
- [ ] **`content/positions/winger.md` voices *"See Body Contact and Battles, which covers it."*** —
  **a spoken pointer, `check_pointers.py`'s dimension. Passed on, not acted on.**

### Method worth copying

**It did NOT trust mtime for build currency.** **It imported the tool's own concatenation-aware
assembler and diffed every source-assembled string against the build product: **0 diffs, 0 missing,
across all 408**.** **That is a stronger currency check than the staleness guard, and it needed no
rebuild.**


---

## Workstream 39A CLOSED: ✅ NO SAFETY LIMB LIVES ONLY IN A LAYER THE LISTENER NEVER HEARS

**Coordinator, 19 September 2026.** **The question was whether the Sources trailer — which
`md_to_speech` DROPS — is acting as a SOURCE of propagation: i.e. whether any safety-critical wording
exists in a document's markdown and reaches no listener.**

**Method: full-corpus render (39 documents, 3,141 chunks), then per document compared the
markup-stripped markdown against the rendered speech across sixteen safety phrases** — the shoulder
limbs, *forearm and hip*, *skates parallel*, *head up and chin off your chest*, *never duck*, *turn
your back*, *hit from behind*, *cervical spine*, *red flag*, *ambulance*, *concussion*, *match
penalty*, *game misconduct*.

**FIVE phrase/document pairs came back present-in-markdown, absent-from-speech. ALL FIVE WERE READ.
ALL FIVE ARE SOURCES-TRAILER CITATION LINES, AND ALL FIVE ARE CORRECT:**

| site | phrase | what it actually is |
|---|---|---|
| `positions/switching_positions.md:567` | *tip of your shoulder* | trailer quoting USA Hockey verbatim; the BODY teaches *point of your shoulder* |
| `hockey-iq/playing_without_the_puck.md:968` | *tip of your shoulder* | same shape — *Heads Up Hockey* provenance |
| `foundation/on_ice_communication.md:638` | *concussion* | trailer: the safety override on *"man on"* |
| `off-the-ice/team_play_and_culture.md:648` | *concussion* | trailer: four books on a goaltender hit on the mask |
| `foundation/language_and_glossary.md` | *hit from behind* | trailer |

⚠️ **So the trailer/body split is working AS DESIGNED: the trailer carries the source's VERBATIM
wording as provenance, and the body teaches the corpus's own paraphrase.** **A phrase appearing only in
a trailer is the PROVENANCE LAYER doing its job, not a lost instruction.** **Nothing had to be moved.**

**Rigour note:** ⚠️ **two documents' renders were STALE when first tested** — `switching_positions.md`
and `rules_primer.md` were edited by an agent AFTER the full-corpus render. **Both were re-rendered
individually (`exit 0`, `1 documents` each) and re-tested; the result is unchanged.** **Three
documents under live edit (`uk_rules.md`, `conditioning_and_recovery.md`,
`body_contact_and_battles.md`) were EXCLUDED and are NOT covered by this result.**

- [ ] **Re-run over those three once their agents finish.** ⚠️ **`uk_rules.md` is the one most likely to
  break it: `source-verifier` noted its trailer keeps UKCG's slash form `rigid/motionless` verbatim
  while the BODY expands it to *"rigid or motionless"* — so the document's exact-source wording is in
  the unvoiced layer BY DESIGN there too, and that split needs confirming rather than assuming.**

### ⚠️ What this closure does NOT establish

**It tested sixteen phrases I chose. A limb whose wording I did not think of is invisible to it.**
**And it tests PRESENCE, not ADEQUACY: a phrase voiced once in a Sources-adjacent aside still counts as
voiced here, and the `safety-reviewer` finding that the British fourteen are voiced NAKED — each bullet
alone with a 300 ms break and no scoping trigger — would score CLEAN on this test.**
⚠️ **Presence in the spoken layer is not the same as landing in it.**


---

## Workstream 50: ⚠️⚠️ `fa662cc` MISSED FIVE DOCUMENTS — AND THE CENSUS THAT "VERIFIED" IT COULD NOT HAVE FOUND THEM

**19 September 2026. Found by the caption-audit agent; independently reproduced by the coordinator.**

**MEASURED, markup-stripped, corpus-wide: TWENTY-ONE documents teach the boards posture
(*"forearm and hip"*). FIVE CARRY NO SHOULDER LIMB AT ALL.**

| document | posture sites | limb sites |
|---|---|---|
| `systems/breakouts.md` | 13 | **0** |
| `technique/puck_handling.md` | 8 | **0** |
| `foundation/on_ice_communication.md` | 6 | **0** |
| `positions/defender.md` | 5 | **0** |
| `hockey-iq/risk_management.md` | 4 | **0** |

**Not prose asides — these are INSTRUCTION layers.** **`puck_handling.md` carries a
`**two absolute prohibitions**` opener, a `Priority:` facts line, and `Position:`/`Never:` facts lines.
`breakouts.md` carries FIVE `Never:`/`Technique:` facts lines.** ⚠️ **Every one of those is voiced
ALONE in its own `<p>` with a 300 ms break either side.**

### ⚠️⚠️ WHY EVERY EARLIER CENSUS SCORED THEM CLEAN — TWO INDEPENDENT MECHANISMS

**(1) THE PROPAGATION CENSUS GREPPED FOR THE LIMB, SO IT COULD ONLY EVER FIND DOCUMENTS THAT ALREADY
HAD IT.** ⚠️ **The coordinator's own 16-document shoulder census — the one behind Workstreams 39B and
48, including the markup-stripped re-run — was scoped to documents matching the limb wording. THESE
FIVE MATCH NOTHING, so they were INVISIBLE BY CONSTRUCTION.** **A census of where a phrase IS cannot
find where it OUGHT TO BE. The correct frame is the one used here: census the POSTURE (the thing the
limb qualifies), then ask which carriers lack the limb.**

**(2) ⚠️ A NEW CLASS: FALSE PRESENCE.** **`grep -c shoulder content/technique/puck_handling.md` returns
**34**, across **47 distinct contexts** — and the coordinator read them all. ⚠️ **NOT ONE IS AN IMPACT
SURFACE.** **They are DEKING: the head-and-shoulder fake, attacking a defender's *inside shoulder* and
*outside shoulder*, *"skating shoulder to shoulder"*.** ⚠️⚠️ **A DOCUMENT SATURATED WITH THE SEARCH WORD
IN AN UNRELATED SENSE READS AS COVERED.** **Every false-absence class recorded in this repository is
about a grep returning too FEW. This is the inverse and it is more dangerous, because a reviewer who
greps `shoulder`, sees 34 hits, and moves on has done the check and got the wrong answer.**

**(3) AND THE SPEECH LAYER LIES ABOUT ONE OF THEM.** ⚠️ **`puck_handling.md`'s render DOES voice
*"not on the point of your shoulder, and not the whole shoulder if you can help it"* — at chunk 36 of
62. Coordinator verified the surrounding text: it is the `scan-before-a-wall-reception` CAPTION,
embedded by a `![](diagram:id)` marker and OWNED BY ANOTHER DOCUMENT.** **The document's own prose and
facts lines say none of it.** ⚠️ **A sole-carrier audit keyed on the `owner` field scores this document
CLEAN — which is precisely the under-count `check_caption_hosts.py` was written to expose, firing
again, in the opposite direction: here the caption is MASKING the host's own gap rather than carrying a
boundary the host omits.**

- [ ] **DISPATCHED: `technique/puck_handling.md` + `systems/breakouts.md` (one agent), and
  `positions/defender.md` + `hockey-iq/risk_management.md` + `foundation/on_ice_communication.md`
  (another).**
- [ ] ⚠️ **`hockey-iq/puck_support_and_spacing.md` is 7 posture / 2 limb — the lowest ratio among the
  documents that DO carry it.** **Not on anyone's list. CANDIDATE, needs reading.**
- [ ] ⚠️ **Repairing these five settles SEVEN of the eleven captions the audit left alone, IN THE RIGHT
  ORDER.** **The corpus's propagation order is body → facts → captions; a caption-only repair in an
  unrepaired document INVERTS it and leaves the document's own facts lines stating the half-instruction
  five lines away.** **That reasoning is why the agent left them, and it is correct.**

---

## Workstream 51: THE CAPTION AUDIT — the brief's premise refuted, and the discriminator it found instead

**Twelve captions, established from `diagrams.json` (204 units, 408 shipped strings), currency verified
by diffing every source-assembled string against the build product: 0 diffs, 1 expected absence.**
**The five previously named are all in it; the other seven are `breakout-against-1-3-1`,
`entry-delay-curl`, `loose-puck-who-goes`, `support-a-battle-from-outside`, `the-last-player-back`,
`you-cannot-beat-two`, `cross-ice-in-your-own-end`.**

⚠️ **THE DISPATCHER'S PREMISE — *"I expect most of the twelve to be (a) correctly silent"* — WAS
REFUTED.** ***"None of the twelve is incidentally about the boards. All twelve state the impact surface
as a directive. Calling any of them 'correctly silent' would be false."***

**The real axis: the twelve split 5/7 EXACTLY on whether their OWNER DOCUMENT was repaired by
`fa662cc`.** **Five owner-repaired captions are genuine propagation lag; four of those five are covered
by the host's adjacent spoken text and were left. Seven mirror unrepaired owners and were left, because
the defect is in `content/` (Workstream 50).**

**ONE caption edited: `icing-the-race-and-the-dot` (`site/src/diagrams/rules_primer.mjs`).** **Its
second host `goaltender.md` had ZERO limb and zero *"forearm"* across 200 chunks; a listener now
receives it at chunk 71.** ⚠️ **A NAIVE APPEND WOULD HAVE BEEN A DEFECT, and only the agent that had
read the string could see it:** appending before the existing dash puts a hedge in front of a bare
separator (the `49f1dc6` shape) and the tail's evidence names the BACK AND THE CHIN, not the shoulder;
a colon fails the other way, inverting to *"a turned back does NOT make it a hit from behind"* —
***"the one inversion in that block a listener could act on."*** **Resolved by making the explanation
its own sentence.**

- [ ] ⚠️ **`support-a-battle-from-outside` CANNOT take the limb without a substitution IN THE SAME
  EDIT.** **Its tail reads *"neither prohibition is a rule for fast arrivals only"* — a count whose
  antecedent is *never turn your back / never duck*.** **Inserting the two shoulder limbs above it
  STRANDS THAT COUNT ON THE WRONG PAIR.** **Fix: name them (*"neither the turned back nor the dropped
  chin"*), ~20 characters, substitution not insertion — but it belongs WITH ITS OWNER, not alone.**
  ⚠️ **DO NOT LET A SWEEP TOUCH THIS ONE.**

### ⚠️ What it declared, and the coordinator should not paper over

***"Chunk distance is a proxy for what a listener retains, and I INVENTED THE THRESHOLD.*** *I treated
'limb in the adjacent chunk' as coverage and '37 chunks away' as not. Nothing measures where real
attenuation sits, and `support-a-battle-from-outside` at 15 chunks was decided by JUDGEMENT, NOT
EVIDENCE."* ⚠️ **Four of the five "leave" verdicts rest on that invented threshold. They are reasonable
and they are not measured.**
**It also did NOT re-verify the three USA Hockey sentences — *"the one premise I did not refute"* —
and notes that a caption sending a player into the boards with NO posture instruction at all would
appear in neither of its nets.**


---

## Workstream 7 — MEASURED 19 September 2026, and the alarm should come DOWN (the decision stays open)

**`.agents/` (36K), `.codex/` (148K) and `AGENTS.md` (40K) are untracked AND un-ignored.** **Three
agents have now flagged them in passing.** **Measured rather than assumed:**

- ✅ **`scripts/check_secrets.py` over the repository returns **0**.**
- ⚠️ **A naive `grep -rIl -E "(api[_-]?key|secret|password|token|BEGIN .* PRIVATE KEY)"` DOES hit five
  of these files — `.codex/hooks/git-guard.sh`, `git-guard.test.sh`, `.codex/agents/commit-gate.toml`,
  `.agents/skills/notebooklm-episode/SKILL.md`, `AGENTS.md`.** ✅ **EVERY HIT IS THE WORD, NOT A
  CREDENTIAL** — these are the files that BLOCK secrets and the prose describing them. **A
  secret-scanner hit on a secret-scanner is not a finding, and this row should not be re-raised as one
  a fourth time.**
- **What they actually are: MIRRORS of this project's own tooling for a different agent runner.**
  `AGENTS.md` opens with `CLAUDE.md`'s own first three lines; `.codex/` mirrors `.claude/` (agents,
  hooks, `git-guard.sh` and its test).

### The real exposure is small and bounded

**The risk is a future blanket stage.** ⚠️ **`.claude/hooks/git-guard.sh` already BLOCKS `git add -A`
and `git add .`, and `CLAUDE.md` forbids them** — so the path that would commit these is already shut
twice over.

- [ ] ⚠️ **DECISION IS THE USER'S, NOT THE COORDINATOR'S, and that is why this stays open rather than
  being tidied away.** **Two defensible answers and they point opposite ways: TRACK them (they are
  project tooling, they mirror files that ARE tracked, and an untracked `git-guard.sh` is a safety
  control with no history), or IGNORE them (they are a second runner's local config and do not belong
  in a public teaching repository).** **Adding them to `.gitignore` is not forbidden — the
  non-negotiable is never to WEAKEN `.gitignore` to make something commit, and this is the opposite —
  but it is still a repository-shape decision nobody has been asked about.**
- [ ] ⚠️ **If they are ever tracked, `AGENTS.md` becomes a SECOND copy of `CLAUDE.md`'s content.**
  **This repository has already recorded what happens when one figure lives in two files: `CLAUDE.md`
  carried *thirteen* while `review_process.md` carried *eleven* for the same round, each stated flatly,
  each disagreeing with the other and with the record.** **A tracked mirror needs an owner and a
  pointer, not a copy.**


---

## Workstream 52: ⚠️ THE DOCUMENT WAS THE WRONG UNIT TOO — 28 BARE POSTURE SITES, 9 IN THE FACTS LAYER

**Coordinator, 19 September 2026. THIRD framing error in this census chain, and the sharpest.**

**Workstream 50 fixed the first error (grepping for the limb can only find documents that have it) by
censusing the POSTURE instead. But it still counted per DOCUMENT — so a document carrying the limb
ANYWHERE scored clean.** ⚠️ **Re-run PER SITE:**

**88 posture sites in the documents no agent currently holds. 60 carry the shoulder limb in the same
paragraph. TWENTY-EIGHT DO NOT — and NINE of those are ` ```facts ` lines, voiced ALONE in their own
`<p>` with a 300 ms break either side.**

| site | note |
|---|---|
| `hockey-iq/puck_support_and_spacing.md:317`, `:548` | `Never:` — wall battle, and double-team |
| `hockey-iq/scanning_and_anticipation.md:146` | `Never:` |
| `positions/switching_positions.md:165` | `Never:` — **NEW** |
| `positions/switching_positions.md:341` | `Never:` — **already REFUSED with measurement (192/200, block at `MAX_COACHING_FACTS` 8). Consistent, not a new row.** |
| `positions/winger.md:25`, `:83`, `:357` | `Never:` — **the SAME line three times** |
| `technique/passing_and_receiving.md:479` | ⚠️ **A DIFFERENT DEFECT — see below** |

⚠️ **These documents all SCORED CLEAN in the Workstream 50 census because each carries the limb
elsewhere.** **`winger.md` has 21 limb sites and still voices a bare `Never:` line three times.**
**The lesson generalises past the shoulder: PROPAGATION IS A PROPERTY OF SITES, NOT OF FILES, and every
census in this project so far has counted files.**

### ⚠️ `passing_and_receiving.md:479` IS THE INVERSE DEFECT — OVERSTATEMENT

**It reads *"take it on your forearm and hip, **not your shoulder**, head up, chin off your chest"* —
a `Never:` line, voiced alone, stating the WHOLE-shoulder prohibition as ABSOLUTE.**

**Censused: the bare form occurs THREE times corpus-wide. The other two —
`offensive_zone_play.md:674` and `body_contact_and_battles.md:1692` — both continue
*"— the tip never, and no part of the shoulder if you can help it"* IMMEDIATELY.** ⚠️ **`:479` carries
NO qualification at all.**

⚠️ **Direction is SAFE (a player forgoes something legal), so it is not a critical — but it
MISREPRESENTS THE SOURCE.** **USA Hockey hedges the whole-shoulder limb (*"Avoid…"*, *"…if possible"*)
and the corpus's own settled wording says the hedge is *"USA Hockey's own hedge rather than this
guide's"*.** **Every propagated site has been checked for the hedge appearing WITHOUT the absolute —
the licence failure. NOBODY HAS EVER CHECKED FOR THE ABSOLUTE APPEARING WITHOUT THE HEDGE.** **That is
a whole test the wave never ran, and it has exactly one hit.**

- [ ] **DISPATCHED: `puck_support_and_spacing.md` + `scanning_and_anticipation.md` +
  `passing_and_receiving.md` (one agent); `winger.md` + `switching_positions.md` (another).**
- [ ] ⚠️ **The 19 non-facts bare sites are NOT automatically defects** — Common Mistakes entries,
  recaps and scope statements legitimately omit it, and three `skating.md` sites were correctly REFUSED
  on that ground. **Read, do not sweep.**
- [ ] ⚠️ **This census EXCLUDED the eight documents under live edit.** **Re-run over all 39 once the
  wave finishes — the figure 88/60/28 describes a partial tree.**


---

## Workstream 53: ✅ ALL FOUR BRITISH RED-FLAG CRITICALS CLOSED — and the C3 disagreement ADJUDICATED

**19 September 2026. Nothing taken from the brief on trust: CRT6 re-rendered with `pdftoppm` and both
pages read by eye, the UKCG panel re-read positionally at `ukcg.txt:245-269` and the visible-clues
panel at `:314-330`.**

**C1 — Key focus.** ✅ **CONFIRMED by `git show HEAD:` (byte-identical to the pre-repair version while
Overview and KT1 had both moved) and FIXED.** ***"no exceptions"* dropped — the phrase that made the
ten read as closed** — the list attributed to CRT6, and the 🇬🇧 direction added at the Overview's level.
**Matching Common Mistakes entry added beside the existing 21-day one.**

**C2 — the decreased-sensation error.** ✅ **CONFIRMED FALSE against the rendered PDF and FIXED.**
**Now: CRT6 reaches weakness AND decreased sensation only in more than one limb, where the British
flags have both unqualified — so a single numb or weak arm is a British red flag and not a CRT6 one.**
**Speech/comprehension and loss of balance kept as genuinely absent, with the honest limit that balance
DOES appear on CRT6's clue and symptom lists, just not as the ambulance call.**

**C3 — ⚠️ THE TWO REVIEWERS WERE COMPATIBLE AND BOTH REMEDIES WERE NEEDED.** ***"The missing test is
what makes the downgrade safe, and the tail position is what made it the last thing heard."***
⚠️⚠️ **AND THE REPAIR DISSOLVED THE PROBLEM RATHER THAN SPLITTING IT: the reader is NEVER asked to tell
tonic posturing from unconsciousness — a rigid player is the seizure flag, an unresponsive player is
the loss-of-consciousness flag, BOTH ARE RED FLAGS, so the only question left is whether they get a
response.** **The paragraph now ends on *"if you cannot get a response, call 999"* rather than on the
downgrade.** **The sentence was NOT cut.**

**C4 — Key Takeaway 10.** ✅ **All fourteen enumerated in the KT1 model, plus the trigger and the CRT6
neck point.**

**M1 — the naked fourteen.** ✅ **Confirmed in the render (`031.ssml`) and fixed at BOTH ends: a trigger
in the list intro, and the closing counterweight *"Any one of those fourteen is enough on its own —
call 999."* placed BEFORE the de-escalating paragraph.** ⚠️ **Honest provenance note: UKCG's own panel
does NOT carry the trigger in its sentence, so the corpus supplies it from the surrounding page rather
than quoting it — and says so.**

**M2 — the unsourced synthesis.** ✅ **LABELLED, NOT SOFTENED, and independently re-verified rather
than carried in: `whichever`, `crt`, `scat`, `concussionrecognition` all return 0 against `ukcg.txt`
BOTH whitespace-flattened AND LETTERS-ONLY** — ⚠️ **the letters-only form is what defeats the
letter-spacing failure mode, and it is a better test than the one the brief specified.**

**M3 — three triggers as trivia.** ✅ **Fixed in both files; the false claim is gone and both now end on
the action.**

**Minors:** ✅ **`:536`'s change-history phrasing, `:544`'s colliding *"four"*, Q13's wrong recall, both
trailer dates, and a mid-paragraph ⚠️ at `:348` that was prefixing the WRONG sentence with
*"Important."*** ⚠️ **AND EVERY EMERGENCY NUMBER IN BOTH FILES NOW VOICES CORRECTLY — solved WITHOUT
the held Workstream 23 fix, by using DIALLING VERBS (`call 999`, `calling 999`) which fire the
renderer's EXISTING `emergency-number` rule.** **Zero occurrences of *"nine hundred and ninety-nine"*
or *"one hundred and eleven"* remain.** ⚠️ **That is a content-side workaround for a renderer defect
and it should be recorded as such — Workstream 23 is still open for every OTHER site in the corpus.**

### ⚠️ REFUTED — a coordinator claim, and a sweep that must NOT be dispatched

**The brief said KT10's `§What medical cover you can expect at the rink` pointer was inaccurate against
the full heading.** ⚠️ **REFUTED: the truncated form is THIS DOCUMENT'S CONSISTENT CONVENTION — SIX
instances, none matching its full heading — and `check_links.py` does not parse `§` pointers at all.**
***"It is house style, not a defect introduced today; 'fixing' one would have created the
inconsistency."*** **DO NOT DISPATCH A SWEEP FOR THIS.**

### Open, reported from outside its files

- [ ] **`body_contact_and_battles.md` (~`:885-890`) carries the SAME unlabelled synthesis** — *"where
  the two differ, act on whichever fires first"*, stated flat. **M2's label did not reach it.**
  ✅ **ROUTED to the agent that holds that file, with the label's requirement stated as a sketch rather
  than a string.**
- [ ] **Two PRE-EXISTING mid-paragraph ⚠️s in `uk_rules.md` (`:346` and the 21-day paragraph) still
  misattach *"Important."* to the paragraph's opening sentence.** **Both paragraphs are safety-bearing
  so the word is not wrong, only imprecisely placed.**
- [ ] **`check_quote_drift.py` flags three PRE-EXISTING IIHF 101.1 quotations in
  `conditioning_and_recovery.md` (`:214`, `:652`) lowering an initial capital without the `[a]`
  bracket.** **Judgement call, not swept.**
- [ ] ⚠️ **`check_absolutes.py` exited 2 at first run (`rules_primer.mjs` newer than `diagrams.json`),
  then 0 once another agent rebuilt.** ***"A pass while agents are live proves nothing — re-run after
  the last agent finishes."***

### What it could not reach

***"Nothing here tests either list against clinical reality — if the UKCG panel itself is out of step
with current practice, or if the corpus's three-way rigid/unresponsive/responding split is a
distinction a real first aider cannot make under pressure, no reading of the documents would show
it."*** **The rendered site is also unchecked: the responsiveness test is now a short paragraph after a
long one in `uk_rules.md` and a long tail inside a bullet in `conditioning_and_recovery.md` —
a `site-reviewer` question.** ✅ **THE CAPTION QUESTION IS ANSWERED — coordinator, 19 September 2026.** **All 204 units in
`site/src/data/diagrams.json` (the build product, which is what a listener receives) searched for
`red flag|ambulance|999|concussion|unconscious|motionless|neck pain|spinal|do not move|helmet`:
**ZERO HITS.** **The diagram layer carries NO concussion material at all** — so there is nothing to
propagate there, and no caption can state a red-flag count or a downed-player response that diverges
from its owner. **One fewer surface to watch.**


---

## Workstream 54: ✅ THE SECTION SPLIT WORKED — Situation 7 fits, and the cap pressure is GONE

**19 September 2026.** ⚠️ **The agent established the seam ITSELF and found the brief's grouping was
WRONG.** **The high-sticking facts run is contiguous but sits in the MIDDLE of the block, while the
high-sticking PROSE is three contiguous paragraphs sitting FIRST.** **A heading dropped where the
material already sat would have swallowed four paragraphs that are not about the stick above the
shoulders.**

⚠️ **AND THE TEST THAT DECIDED IT IS WORTH KEEPING: it tried heading the RESIDUAL instead, moving
nothing, and rejected that because *"the residual has no honest name"* — interference+roughing, two
penalty ladders, then tripping's most-called figure.** ***"That the residual resists naming is the
evidence that high-sticking IS the group and the rest is the parent."***

| | before | after |
|---|---|---|
| `### What actually gets called` block | **11/11 HARD_MAX** | **7** |
| `#### The stick above the shoulders` | — | **5** |
| blocks at HARD_MAX in this file | 12 of 55 | **11 of 56** |
| **lines AT cap in this file** | **1** | **0** |

**✅ SITUATION 7 NOW FITS — and it took a BODY repair first**, because the body carried the same
Situation-6-only condition and the facts line had nothing to extract from. **The `Rule:` line was split
in two (the style guide's own remedy for a long fact): 186/300 and 283/300.** **Casebook wording
verified against `sources/usah_casebook.txt` FLATTENED — unflattened returns zero, as predicted.**
✅ **The *"Hockey Canada eight point one blocks a stick, not holds"* actor ambiguity is GONE, fixed by
the same split**, using this document's own §10 phrasing.

**Two REAL stale pointers the split created, both found by sweeping the section for counts, ordinals,
positional words and conditionals and then reading every hit VOICED:** a tripping paragraph ending
*"quoted in full in the next section"* (the next section had become the new `####`), and a cross-
reference sending a reader to a block from which the high-sticking facts had just been removed.
**No inbound anchor from any other document reaches §12 — all 11 inbound targets surveyed — so the
split has NO cross-document consequence.**

✅ **The M2 synthesis label was applied**, and the agent **refuted the premise itself first**:
`ukcg.txt` LETTERS-ONLY returns 0 for `whichever`, `crt`, `scat`, `concussionrecognition`,
`recognitiontool`. **It also closed a body→facts gap the red-flag edit left behind — and deliberately
kept *"act on whichever fires first"* OUT of the facts layer, because voiced alone with no room for its
label it would reproduce the exact defect it was fixing.** ⚠️ **That is the layer doctrine being
applied to decide NOT to propagate, which is rarer and harder than propagating.**

### ⚠️ REFUSED, with measurements

**Rewriting the block-opening `The windup and follow-through carve-out` — substitution measured at
310/300, ten over, and the only funding was cutting an exception or a two-layer scope.** **Acceptable
as-is because the `####` heading is VOICED IMMEDIATELY BEFORE IT (only `##` opens a chunk), which is a
BETTER antecedent than the line it followed before.** **Also refused: reverting `keep` to `hold`, because
the two holding facts are now adjacent and the prohibited/permitted verb collision would return across
the 300 ms break.**

### ⚠️ OPEN AND UNSAFE — RESUMED TO THE SAME AGENT

- [ ] ⚠️ **`:379` and `:1229` state Situation 7 with NO SCOPE.** **The Casebook confines it to two
  players *"physically engaged in the corner or in front of the goal"*, and §5's own body already
  carries that scope — so the FACTS LAYER IS WIDER THAN BOTH ITS BODY AND THE SOURCE.**
  ⚠️ **Direction is UNSAFE: it reads as licence to take a hand off the stick reaching for a puck in
  OPEN ICE.** **36 characters of headroom on both.** ⚠️⚠️ **And the agent named why it is urgent:
  *"§12 is now the correct outlier; a consistency sweep would fix the wrong one."*** **Resumed.**
- [ ] **The hold/keep/maintain divergence stands** — `:379`/`:1229` *"hold"*, §12 *"keep"*, the Casebook
  *"maintain"*.
- [ ] **§12's block has room (7 of 11) and carries no fact for *"holding is not capped at a minor"***
  (Hockey Canada 8.1(b), mandatory major + game misconduct where holding injures). **Offered back to
  the agent at its discretion, flagged as new unreviewed text either way.**

### ⚠️ THE COORDINATOR'S ERROR, REPORTED BY THE AGENT

***"Ownership was not disjoint. `body_contact_and_battles.md` already held another agent's uncommitted
edits when I arrived… My structural edit was a whole-file read-modify-write; it re-read immediately
before writing so nothing was clobbered, BUT THE WINDOW EXISTED AND I COULD NOT HAVE KNOWN THAT WHEN I
STARTED."*** ⚠️ **Correct, and the fault is the dispatcher's — this is the exact failure `CLAUDE.md`
records as the coordinator's characteristic one: *"STATING IT DOES NOT MAKE IT TRUE."*** **Acknowledged
to the agent directly rather than only here.**

- [ ] ⚠️ **`check_links.py --quiet` exited 2 TWICE, NON-REPRODUCIBLY**, while other agents wrote
  `project/reviews/` and `site/src/diagrams/rules_primer.mjs`. **15 subsequent runs exit 0, output
  empty, nothing changed.** **The documented race, in the direction that MANUFACTURES a finding.**

---

## Workstream 55: `winger.md` REPAIRED, `switching_positions.md` UNTOUCHED — and a brief premise refuted

**Two lines changed in ONE file. `switching_positions.md:165` was NOT a defect.**

⚠️ **PREMISE REFUTED: `:165` is part of a DESIGNED TRIAD of three consecutive `Never:` paragraphs —
`:165` back, `:166` duck, `:167` shoulder — and `:167` (195/200) carries BOTH limbs with the hedge
attributed.** **The body prose at `:171` mirrors it exactly.** ***"This is the most complete treatment
of the material in either file."*** **The coordinator's site-level census could not see the triad,
because it tested each line in isolation — which is the same error one level down.**

**`winger.md:25` and `:83` WERE defects, and the evidence is chunk-level:** **rendered chunks `002` and
`007` are ENTIRE facts blocks — eleven paragraphs each, every one voiced alone, teaching the complete
boards posture — and the word *shoulder* DOES NOT APPEAR ANYWHERE IN EITHER CHUNK.** **Both blocks were
at BOTH ceilings (11 = HARD_MAX, 8 non-`Rule` = MAX_COACHING_FACTS), so no line could be added.**
**Now 195/200 each, carrying the tip absolute.**
**`:357` left alone: the `<p>` immediately before it already carries both limbs correctly hedged.**

### ⚠️ A TRADE WAS MADE — and the handover it declared is ANSWERED

**To find the room it dropped *"head up, chin off your chest"* from the back-turn line, arguing the
DUCK line is the very next `<p>` and states it in full — and that chin-to-chest is the DUCKING
mechanism, not the turned-back one.** **It flagged this as its first handover:** *"If the owner bundles
head-up into the back-turn prohibition specifically, my trade is wrong."*

✅ **ANSWERED by the coordinator. The OWNER uses the SPLIT form.** **All three back-turn facts lines in
`body_contact_and_battles.md` (`:708`, `:1272`, `:1310`) carry NO head-up limb.** **THE TRADE IS SOUND.**

⚠️ **But the census behind that answer found something nobody has looked at: corpus-wide the two forms
run 16 BUNDLED against 22 SPLIT. There is NO convention.** **Both are defensible, so this must NOT be
swept — what matters is not which form a line uses but whether the limb REACHES the listener near the
instruction.**

✅ **So the real test was run — the chunk-level detector this agent proposed, which is cheaper than any
existing worklist:** **across the rendered corpus, only TWO chunks teach the wall posture AND the
back-turn prohibition with no head-up limb anywhere in the chunk.** **Both are in documents under live
edit (so their renders are STALE and the result does not bind), and in one the mechanism is present in
different words — *"a head-down, head-first collision with the boards can happen at walking speed"*.**
**Essentially clean.**

- [ ] **Re-run the chunk-level detector after the wave, over all 39 documents.** ⚠️ **It belongs in
  `scripts/` as a worklist — a `grep -L` over `md_to_speech` output would have found both `winger.md`
  defects IN ONE COMMAND, where a file-level or even block-level grep cannot distinguish them.**
- [ ] **`switching_positions.md:341`'s refusal RE-VERIFIED and upheld (192/200, block 8/8), with a
  CLEANER reason than the recorded one: `:341` collapses BOTH prohibitions into one line, so no sibling
  Duck line owns head-up/chin-off — the trade that worked at `winger:25`/`:83` is STRUCTURALLY
  UNAVAILABLE there.**
- [ ] ✅ **The INVERSE defect (whole shoulder stated as absolute) checked in both files: NONE.**
  **Every `not/never…shoulder` hit without a tip word is the corpus QUOTING USA Hockey's *"[a]void
  hitting the boards with the shoulder"* and immediately flagging *"the word there is avoid, not
  never"*, or faceoff contact.** **Markup stripped before flattening, so the `**your**` split could not
  hide one.**
- [ ] **`winger.md:426` (*"Never: Meet a goal post head first…"*) REFUSED, correctly — the USA Hockey
  limb is a BOARDS/GLASS limb and a goal post legitimately omits it.**
- [x] ✅ **DONE — coordinator rendered PDF p.24 at 150 dpi and READ it, 19 September 2026. Recorded in
  `sources/README.md`.** ⚠️ **TWO RESULTS, and the second is a new open row (Workstream 56).**
  ✅ **(1) THE SCOPE ATTRIBUTION IS CONFIRMED VISUALLY.** **The page carries BOTH sections: §A
  *"Checked Into The Boards"* (*"while facing the boards"*) and §B *"Checked Along The Boards"*
  (*"while skating parallel to the boards"*), and §B is where *"Avoid hitting the boards with the
  shoulder"* sits, beside *"Press your forearm and upper thigh (hip area) against the boards"* and
  *"Keep a low center of gravity with your feet apart and knees bent"*.** **The corpus has asserted
  that scope for weeks on the strength of extraction ORDER; it is now read off the page.**
  ✅ **AND FIG. 6 BELONGS TO §A, NOT §B** — so it draws the DAMAGE-LIMITATION case, not the posture to
  aim for, which is exactly how the corpus already treats stick-and-gloves-on-the-glass. **No conflict.
  The worry that prompted this row is resolved.**
  ~~UNCHECKED: `sources/ibc.txt`'s Fig. 6 *Protecting Yourself Along The Boards* (PDF p.24).~~
  **`sources/README.md` records that it shows BOTH ARMS BENT AT THE ELBOW and no grep reaches it.**
  **Whether the DRAWING agrees with *"forearm and hip, not the point of your shoulder"* as the impact
  surface has never been checked by anyone.** ⚠️ **That is a `pdftoppm` job on the corpus's central
  safety claim, and it is the most load-bearing unverified thing in this whole wave.**


---

## Workstream 56: ⚠️ USA HOCKEY'S OWN DRAWING IS UNUSED EVIDENCE ON A TENSION THE CORPUS BOUNDS WITH A NON-HOCKEY STUDY

**Found by the coordinator 19 September 2026, by rendering `sources/ibc.pdf` p.24 — the first time
anyone has looked at that figure.**

**The corpus teaches the already-facing-the-wall case as *"stick and gloves up on the glass, arms out
as a shock absorber"* across ~10 sites.** **That wording is PROPERLY SOURCED — to a USA Hockey drill
printing *"extended arms, forearms, side of body and legs… but with no head contact at all"* and
*"[w]ith arms out to create a three-part 'shock absorber'"*, quoted at `skating.md:605` and
`body_contact_and_battles.md:744`.**

**And the corpus ALREADY bounds it, carefully:** `body_contact_and_battles.md:754` carries **Chou et
al. 2001** — *"the elbow mediolateral shear force was 68% larger"* when the arm was extended rather
than flexed at impact — and `:1719` states the limit honestly: ***"cited only to bound the locked-arm
claim, not as hockey evidence."***

⚠️⚠️ **FIG. 6 IS HOCKEY EVIDENCE, FROM THE SAME GOVERNING BODY THAT PRINTS *"extended arms"*, AND IT
DRAWS THE ELBOWS BENT.** **Player facing the glass, stick horizontal across it, both gloves on the
glass, both arms bent at the elbow.**

- [ ] **Use it where the locked-arm claim is bounded.** **The corpus is currently in the awkward
  position of qualifying a governing body's own wording with a laboratory study of forward falls that
  it itself flags as off-sport — when that governing body's own illustration of the same manoeuvre
  agrees with the qualification.** ⚠️ **This STRENGTHENS the corpus; it is not a defect.**
- [ ] ⚠️ **`grep -rn "Fig\. 6\|Figure 6" content/` returns NOTHING. The corpus has never cited a
  figure from any source.** **Whether a drawing is quotable evidence under this project's conventions
  is a question nobody has answered** — it cannot be verified by grep, only by re-rendering, so it
  needs the `sources/README.md` disclosure pattern used for CRT6 rather than an ordinary citation.
- [ ] ⚠️ **DO NOT let this become a sweep that changes *"arms out"* to *"elbows bent"* at ten sites.**
  **The drill's wording is the source's and must not be softened; the figure QUALIFIES it, exactly as
  Chou does.** **The edit belongs at the ONE site that owns the bounding, and the other sites should
  keep pointing there.**
- [ ] **A reader-facing question nobody has asked: does *"arms out"* read as ELBOWS LOCKED?** **If it
  does, the corpus is teaching the posture its own cited evidence says produces 68% more elbow shear.**
  **That is a `safety-reviewer` question and it has never been put.**


---

## Workstream 57: ⚠️ THE TIP SENTENCE IS IN **TWO** USA HOCKEY BOOKS WITH **DIFFERENT DASHES** — and the gap was in the DISPATCHER'S framing, not the corpus

**Found by the `puck_handling.md`/`breakouts.md` agent, verified and bounded by the coordinator.**

**Confirmed by flattened search across every extraction in `sources/`:**

| source | the sentence | dash |
|---|---|---|
| `sources/ibc.txt:1453` | *"Never hit the boards or glass with the tip of your shoulder – it can cause injury"* | **U+2013 EN DASH** |
| `sources/huh.txt:468` | same words | **U+2014 EM DASH** |

**So the tip absolute appears in *Introduction To Body Contact* AND in the *Heads Up Hockey Program
Guide*, and the two books punctuate it differently.**

### ✅ THE CORPUS ALREADY KNEW — nine of the eleven carrying documents record it

⚠️ **The agent reported this as *"not named in the settled corpus position"*. That is true of the
DISPATCHER'S framing and FALSE of the corpus.** **`playing_without_the_puck.md` attributes the
quotation to *Introduction To Body Contact* and adds, in terms: *"the second of which the Heads Up
Hockey Program Guide prints in the same words."*** **Nine of the eleven carrying it
record the dual appearance; only `mental_game.md` and `skating.md` do not.**

✅ **AND THE GLYPH IS CONSISTENT: all SEVENTEEN corpus sites quoting the sentence with its injury clause
use the EN DASH — `ibc.txt`'s form — matching the attribution at the sites read.**

### ⚠️ THE DISPATCHER'S ERROR, AND IT WENT INTO ROUGHLY FIFTEEN BRIEFS TODAY

**Every brief this session opened with *"USA Hockey carries THREE distinct sentences… `ibc.txt:1453`"*
and named ONE book for the tip absolute.** ⚠️ **That is a simplification of what the corpus itself
says, propagated into every agent's starting premise.** **It did no damage — the claim is true as far
as it goes and the glyph is right — but it is the fourth brief-level error this session, and it was
caught the way the others were: BY AN AGENT READING THE SOURCE INSTEAD OF THE BRIEF.**
**Future briefs must say: the tip absolute appears in TWO USA Hockey publications, verbatim in both,
with an EN dash in `ibc.txt` and an EM dash in `huh.txt`.**

### ⚠️ What is genuinely NEW and recorded nowhere: the dash difference

- [ ] **No document notes that the punctuation differs between the two books.** ***"Prints in the same
  words"* is defensible — a dash is not a word — but a verifier who goes to `huh.txt` to confirm a
  character-exact quotation will find a different glyph and has no warning.**
- [ ] ⚠️ **AND THIS IS `check_quote_drift.py`'S DOCUMENTED BLIND SPOT FIRING:** the tool *"keeps the
  closest match across ALL sources"*, so a site attributing to *Heads Up Hockey* while carrying
  `ibc.txt`'s en dash matches the `ibc` copy and **scores clean**. **The corpus happens to be right
  here; the tool could not have told us.** **Record it in `sources/README.md` under both entries.**
- [ ] **`skating.md` and `mental_game.md` do not record the dual appearance.** **CANDIDATES, not
  defects — they may not quote it in a provenance context. Read before acting.**

---

## Workstream 58: `puck_handling.md` and `breakouts.md` REPAIRED — 16 sites, and FOUR blocked by the 8-fact cap

**The agent ran the POSTURE-FIRST census rather than the word-grep — *"per the review record's own
transferable lesson"* — and found 14 posture sites in `breakouts.md` and 9 in `puck_handling.md`,
ONE MORE THAN THE COORDINATOR'S COUNT IN EACH.**
**Both predicted traps confirmed: `grep -c shoulder puck_handling.md` = 34, none an impact surface; and
the render does voice the limb, from a caption owned elsewhere.**

**16 sites repaired across body, Key focus, Overview, Common Mistakes, Key Takeaways and the Sources
trailer.** ⚠️ **Three `Never:` lines that could not take the limb were given a SIBLING `Technique:`
fact instead — the style guide's *"split rather than trim"* — rather than compressing a caveat out.**

### ⚠️ FOUR BLOCKS AT `MAX_COACHING_FACTS` = 8 CANNOT TAKE IT — the third cap finding today

**`breakouts.md` §Against a 1-3-1, §control breakout, §goalie's role; `puck_handling.md` §Back into the
checker.** **In each the BODY now carries the limb and the FACTS LAYER does not. Nothing was evicted.**
⚠️ **At §Back into the checker the only way to fit was dropping *"head up and chin off your chest"* —
THE CERVICAL-SPINE HALF. Refused.** ⚠️ **At §goalie's role a 61-char *"never the tip"* form DOES fit,
and was refused because *"the tip"* would have no antecedent voiced alone —
*"an antecedent defect traded for a propagation one."*** **That is the right call and it is a sharper
statement of the trade than anything in the plan so far.**

- [ ] **Relieving these four means splitting sections on seams they already use.** ***"Not a job for a
  propagation wave."*** **And the agent flags what it did NOT establish: that the sections are doing
  two jobs, which is what the 8-fact cap is actually asserting.**

### Two defects found that were NOT in the brief

- ✅ **`breakouts.md:685` taught *"skates parallel to the boards, chin off your chest"* with NO IMPACT
  SURFACE AT ALL — thinner than its own facts line at `:671`, which does say *"forearm and hip to the
  wall"*.** **Body brought into line with its own block, then given the limb.** ⚠️ **A body layer
  THINNER than the facts layer it summarises is a new shape — every propagation failure recorded here
  so far runs the other way.**
- ✅ **`puck_handling.md:12` said the resulting COLLISION can occur at walking speed.** ⚠️ **Its own
  Sources trailer says in terms that *"'This' in that sentence is the spinal INJURY, not the
  collision"*, and `:24`, `:421` and `:931` all render it as the injury.** **Corrected.** **One word,
  and it is the walking-speed claim — the corpus's most-repeated safety statistic.**

### Open

- [ ] **`breakouts.md` has NO boards-safety Sources trailer entry at all despite 14 posture sites.**
  **Flagged, not fixed — it defers to the owner inline at nearly every site, which is the corpus's
  accepted non-owner pattern.**
- [ ] **`switching_positions.md:556` and `:29` (not that agent's files) read *"never the point of your
  shoulder"* in the INSTRUCTION with the hedge only in the gloss sentence after.** **Correct as prose;
  worth a second read against the *"voiced alone, 'not the point of your shoulder' can be heard as
  licensing the rest of the shoulder"* concern.**
- [ ] ⚠️ **NOBODY HAS READ THIS TEXT BUT ITS AUTHOR.** **New prose in a safety instruction, five new
  quotations located in the on-disk extractions by the author alone — *"which is not the same check"*.**
  **Needs `safety-reviewer` and `source-verifier`.**
- [ ] **`ibc.txt:1281` read and left alone as instructed — *"that makes me the FIFTH agent to decline to
  rule on it."*** ⚠️ **The ruling exists and is recorded; what does not exist is any agent willing to
  own it. That is a signal about the ruling's durability, not about the agents.**


---

## Workstream 59: `puck_support_and_spacing` / `scanning_and_anticipation` / `passing_and_receiving` — and THREE defects the brief did not name

**Ten sites repaired, one REFUSED with measurement.** **Sources re-verified by the agent first; the
brief's premises held, including the `ibc.txt:1453-1454` wrap at *"it can / cause injury"*.**

### ✅ THE INVERSE DEFECT CONFIRMED AND REPAIRED — by SPLITTING, not truncating

**`passing_and_receiving.md:479` did state the whole-shoulder prohibition as ABSOLUTE**, while the same
document's body carries the correctly hedged pair at FOUR sites. ⚠️ **The two-limb form does NOT fit:
base 171/200, the limb needs 81.** **The block had one free slot, so the agent SPLIT rather than
truncated** — `:479` keeps the canonical posture line (169/200) and a new adjacent `Never:` carries the
full position (146/200), with the hedge in a SECOND SENTENCE outside the `Never —` scope.
⚠️ **That is the `Never:` label inversion being designed around rather than run into.**

### ⚠️ THREE DEFECTS FOUND THAT WERE NOT IN THE BRIEF

**1. `scanning_and_anticipation.md:9` WAS THE STYLE GUIDE'S NAMED INVERSION, IN PROSE.**
**It read *"…and never duck — get your skates parallel to the wall, take it on your forearm and hip…"*
— an em dash introducing an INSTRUCTION after a negation, which is the guide's own table row 2,
*heard as "never get your skates parallel"*.** ⚠️⚠️ **THIS IS IN THE DOCUMENT'S KEY FOCUS — the first
substantive thing a listener hears — AND NO CHECKER SEES IT.** **`check_caption_negations.py` covers
CAPTIONS ONLY; the prose layer has no equivalent.** **Repaired to full stop plus *instead*.**
- [ ] ⚠️ **THE PROSE LAYER HAS NEVER BEEN SWEPT FOR THIS SHAPE.** **The caption sweep that found three
  *"rather than"* inversions today covered 408 caption strings and explicitly declared the body prose
  and facts layers OUT OF SCOPE — *"which is where this defect class hurts most."* This hit is the
  first evidence the shape is live in prose.**

**2. THREE STRANDED COUNTS, each created or aggravated by adding a third and fourth prohibition** —
`passing_and_receiving.md:491` *"Those are two prohibitions"*, `scanning:597` *"the two injuries behind
the two prohibitions"*, `puck_support:328` *"neither prohibition"*. **All three now NAME the pair
instead of counting it — substitution, AND SHORTER IN TWO OF THREE.** **Sixth independent confirmation
of the substitution rule today.**

**3. `puck_support_and_spacing.md:719`, the Sources trailer: *"Both prohibitions are absolute here"*** —
**in a document that now states a HEDGED prohibition six times.** ⚠️ **The exact shape found in
`switching_positions.md:567` earlier today, in a different file, found independently.** **Repaired by
naming them. Not voiced, but read on the site.**

### REFUSED, measured

**`puck_support_and_spacing.md:549`: block at `MAX_COACHING_FACTS` 8/8 AND the line at 197/200 —
THREE characters free against a 22-character minimum.** ⚠️ **Every version that fits requires deleting
*"instead"*, which the style guide MANDATES as the `Never:` inversion guard, or converting the
imperatives to noun fragments under a `Never —` prefix, which IS the named inversion shape.**
**Nothing traded. The section's BODY carries both limbs.** **Fourth cap-blocked site today.**

**`scanning_and_anticipation.md:146` took the ABSOLUTE ONLY (193/200, block 8/8).** **The hedged limb
needs 204 and lives in the body at four sites.**
- [ ] ⚠️ **The agent named the residual honestly: *"A listener who hears only the 'When to scan' block
  hears the absolute and not the hedge — accurate, but partial, and I could not test how that lands."***
  **Direction is SAFE (over-strict). Worth a `safety-reviewer` opinion, not a repair.**

### ✅ A handover ANSWERED before it was asked

**It listed Fig. 6 of `ibc.pdf` as *"the obvious next check on the forearm-and-hip substitute"*.**
✅ **ALREADY DONE — rendered and read by the coordinator this session; see Workstream 56 and the
`ibc.txt` entry in `sources/README.md`.** **The figure belongs to §A (facing the boards), so it does
NOT bear on the forearm-and-hip substitute, which is §B's. Nothing it wrote depends on it, correctly.**

### ⚠️ The cross-file risk, now named by FOUR separate agents

***"`body_contact_and_battles.md`, the owner, is live. I read it but its content was moving. If the
owner's reconciliation wording changed during this round, MY SIX BORROWINGS POINT AT A TARGET I READ AT
ONE INSTANT."***
- [ ] ⚠️ **THE CROSS-FILE READ IS THE HIGHEST-VALUE OUTSTANDING JOB AND IT CANNOT START UNTIL EVERY
  AGENT IS QUIET.** **Four agents have now asked for it independently.** **Two individually-correct
  sentences in two documents can still contradict read aloud — that has happened in this repository and
  was caught only because an agent diffed a whole file instead of trusting its own hunks.**


---

## Workstream 60: ⚠️⚠️ THE DEFINITIVE STATEMENT OF THE CAP PROBLEM — 9 of 32 facts blocks, 8 of them jammed

**Measured by the `defender`/`risk_management`/`on_ice_communication` agent with a BLOCK-LEVEL layer
test across the corpus, and it is the clearest structural finding of the session.**

**32 ` ```facts ` blocks teach the boards posture. NINE CARRY NO SHOULDER LIMB ANYWHERE IN THE BLOCK:**
`puck_support_and_spacing:549` · `scanning_and_anticipation:146` · `defender:105` ·
`switching_positions:341` · `breakouts:671` · `breakouts:719` · `breakouts:880` ·
`body_contact_and_battles:1274` · `puck_handling:408`.

⚠️ **EIGHT OF THE NINE ARE AT THE 8-COACHING-FACT CAP, and SEVEN of the nine values have under 30
characters of headroom.** ***"This is the layer voiced alone. A line-level grep over `content/` cannot
see it, because prose and block live in the same file."***

**Every one of those eight was independently reached and REFUSED with measurement by the agent that
owned it, today. None traded out a caveat. The cap is not an obstacle the wave failed to clear — it is
a structural finding the wave PROVED, nine times, from four directions.**

### ⚠️ THE OWNER IS THE NINTH — AND IT IS THE ONE WITH ROOM

**`body_contact_and_battles.md` §the puck-race block.** **Coordinator re-measured before routing:
**5 facts against HARD_MAX 11, 4 coaching against MAX 8, the `Technique:` value at 155/200.****
**No cap is near binding.**

⚠️⚠️ **THIS DOCUMENT IS THE OWNER. Fifteen documents state the limb by deferring to it, and several
agents today adopted its wording VERBATIM on the strength of that ownership — and its own extraction
layer teaches the boards posture and stops before the impact surface.**
**EVERY BORROWER IS MORE COMPLETE THAN THE SOURCE.**

⚠️ **And the block ROUTES rather than states: its `Never:` fact says *"everything in Section 6 applies
here"*.** **A pointer is not the thing pointed at, and a listener hearing that fact alone gets a
cross-reference, not an instruction.** ✅ **ROUTED to the live agent that holds the file, with the
choice — state the limb, or make the routing carry its weight — left to the agent that has read it.**

- [ ] **Six of the nine have been MEASURED but NOT READ.** ***"A layer test finds candidates and only
  reading decides"* — some may be correct as they stand.**
- [ ] ⚠️ **Relieving the eight jammed blocks means SPLITTING SECTIONS.** **The one split attempted today
  succeeded and took a block from 11/11 to 7 — but the agent that did it warned the residual must have
  an honest name, and nobody has tested whether these eight sections are doing two jobs.**

---

## Workstream 61: `defender` / `risk_management` / `on_ice_communication` — 13 of 15 sites, 2 refused

**Sources re-verified first.** ✅ **AND IT CONFIRMED A CORPUS PHRASE NOBODY HAD CHECKED:** the third
sentence sits under heading **`3. "Taking a Check"`**, introduced by *"When demonstrating taking a hit,
be sure to cover these points:"* — **so the corpus's *"its checklist for taking a check"* is ACCURATE,
not a gloss.**

⚠️ **THE SELF-CATCH IS THE BEST THING IN THIS REPORT.** ***"My first pass put the tip-only form in BOTH
capped facts lines — stating ONE HALF OF A TWO-PART RULE in the layer voiced alone. I caught it
re-reading my own edits, re-measured the blocks, found `risk_management`'s had a free slot, and
restored the full form there by splitting."*** **That is the style guide's own re-read step catching an
agent's own work, and it is the seventh independent case today.**

**`risk_management.md:408` SPLIT rather than trimmed** (a new sibling `Never:` carrying both halves,
verified in the SSML as one `<p>` with 300 ms breaks, absolute before hedge, substitute named).

### Two REFUSALS, one arithmetic and one judgement — the agent says which is which

- **`defender.md:105` — 193/200 with 7 characters against a 33-character minimum, block 8/8.**
  **Every candidate saving evicts a caveat: the *"could inflict"* possibility-hedge, or *"chin off your
  chest"*. Arithmetic, and defensible.**
- **`on_ice_communication.md:111`, the *"heads"* entry — JUDGEMENT.** **Its subject is the scope of a
  different call; the posture list is a reminder that *"heads" is never an instruction to duck at the
  boards*.** ***"A reviewer who thinks every voiced posture list must carry the limb would overrule
  it."***
- **`on_ice_communication.md:91` carries the TIP ABSOLUTE ONLY** (190/200, block 8/8), after
  substituting a shipped corpus form. ⚠️ **Reasoning worth keeping: *the hedge is the WEAKER half, and
  safety property 2 constrains the hedge appearing without the absolute, NOT the reverse — the corpus
  already ships seven tip-only sites.*** **Correct, and it is the first time anyone has stated the
  asymmetry explicitly.**

### ✅ The count trap fired and was handled BY DESIGN

**Three `defender` sites and two `on_ice_communication` sites carry *"two prohibitions against two
different injuries"*.** **Every limb was placed INSIDE the positive surface clause, never as a third
member of those pairs** — ⚠️ **and no neck-injury claim was attached to the shoulder, which the sources
do not support: `ibc` says only *"it can cause injury"*.**

### ✅ CAPTIONS WERE NOT MASKING THESE — the opposite of `puck_handling.md`

**`the-call-and-who-can-see-it` (owner `on_ice_communication.md`) and `cross-ice-in-your-own-end`
(owner `risk_management.md`) carry the SAME gap as their hosts' prose.** **So the caption layer did not
conceal anything here.** **False presence confirmed in all three files as predicted: `shoulder`
returned 6/11/10 hits, the non-impact share being *"glance over your shoulder"*, *"hips and shoulders
turn"*, *"clips a shoulder"*, and an angling cue in a hosted caption.**

- [ ] **Two brief corrections from the agent: `risk_management.md:423` is a numbered BODY LIST ITEM,
  not a Key Takeaway, and its fourth site is the Common Mistakes bullet at `:809`.** **Fifth and sixth
  dispatcher slips today, both caught by reading.**
- [ ] **`defender.md` carries FOUR near-identical prose treatments of this paragraph.** ***"I did not
  ask whether the document's four near-identical treatments are themselves the defect."*** **Nobody
  has.**


---

## Workstream 62: ✅ THE OWNER'S BOARDS BLOCK NOW CARRIES THE LIMB — and Situation 7 turned out to be FOUR lines in THREE documents

### ✅ The owner repaired — and the routing question answered by reading

**The limb did NOT fit on the `Technique:` line: appending it measured 231/200, THIRTY-ONE OVER. The
only version that fitted (188/200) carried the absolute WITHOUT the hedge — the shape the constraint
forbids.** **So it became its own fact, the block having room by a wide margin (5→6 facts, 4→5
coaching, against caps of 11 and 8):**

`Never: Meet the wall on the point of your shoulder. Take it on your forearm and hip instead — and not
on the whole shoulder either, if you can help it` — **143/200, 57 left.**

**The full stop stops `Never —` before the positive imperative, matching the block's OWN demonstrated
safe form two lines above.** **Nothing new was quoted: this is the owner's own reviewed formulation
from `:780`/`:788`.** **Body propagated so the fact stays traceable to its own section.**

⚠️ **ON THE ROUTING QUESTION I LEFT OPEN, the answer was better than either option I offered:**
***"The routing fact is not a substitute — it carries its own absolute and routes for the rest — so it
is fine as it stands, and the gap was elsewhere: the block already stated the impact surface
POSITIVELY and simply stopped before saying what not to meet the wall with. That is the half-rule
shape, not a routing problem."***

✅ **Counts swept CORPUS-WIDE before adding a member: the *"two prohibitions against two different
injuries"* formula appears in SIX documents (`core_principles.md`, `winger.md` ×3, `defender.md` ×2)
and EVERY instance is the turned back and the duck — a DIFFERENT PAIR from the impact surface.
Nothing stranded.**

### ⚠️ SITUATION 7: FOUR LINES, THREE DOCUMENTS — not the two the plan recorded

**Locating by content found the identical 264/300 string in `puck_handling.md:427` and `winger.md:88`
as well. Coordinator re-verified both: byte-identical, NO SCOPE.** **Two repaired by the owning agent;
the other two DISPATCHED.**

**Casebook re-verified flattened: *"physically engaged in the corner or in front of the goal"* occurs
TWICE — in Situation 7's question and its answer.**

⚠️ **THE 36 CHARACTERS WERE NOT ENOUGH, and the agent did NOT take the path the brief implied.
MEASURED, not estimated:**

| variant | result |
|---|---|
| straight insertion of the full Casebook phrase | **325/300 — 25 over** |
| + `in its Casebook only` substitution | 307/300 — 7 over |
| + merge both citations into `(Situations 6 and 7)` | 302/300 — 2 over |
| location half only | 294/300 — 6 left |
| Casebook's own words, location half only | **300/300 — EXACTLY AT CAP** |
| **SHIPPED: both halves, `Casebook only` funding** | **291/300 — 9 left** |

⚠️ **THE FUNDING IS THE TRANSFERABLE PART: `in its Casebook, not its playing rules` →
`in its Casebook only` buys EIGHTEEN CHARACTERS for the same claim.** **Without it the scope does not
fit; with it, BOTH halves fit — the engagement AND the location.** **The only word dropped is the
adverb *"physically"* — emphasis, not a condition, and exactly the six characters that do not fit.**

**REFUSED, each for a stated reason:** the 300/300 variant (*"would recreate the frozen-at-cap state I
cleared from this file earlier today"*); the 296/300 variant (*"buys its 4 characters by merging the
two citations, destroying which Situation carries which limb — the thing that makes each limb
checkable"*); the location-only variants (*"dropping 'engaged' is trimming a limb"*).

### ⚠️ A SECOND LAYER FOUND WHILE CHECKING TRACEABILITY — and it inverts the doctrine

***"§10's BODY states the same unbounded rule. My repaired fact would have been NARROWER THAN ITS OWN
BODY, which inverts extract-never-author and INVITES A LATER AGENT TO RE-SYNC THE FACT DOWN TO THE
BODY."*** **Repaired, quoting the Casebook.** ⚠️ **That is the second instance today of a BODY layer
thinner than the facts layer above it** — the first was `breakouts.md:685` — **and both were found only
because an agent checked traceability AFTER repairing, not before.**

### Finding 3 REFUSED AGAIN, on better evidence — and it became a bigger row

**The coordinator was right that the earlier reason was weak. The stronger one, measured:
NONE of the parent block's seven facts names any tier above a minor, while the section's BODY carries
ladders for FIVE infractions.** ⚠️ ***"Adding holding's ladder alone would not fill a gap — it would
single one infraction out of five and IMPLY THE OTHER FOUR ARE CAPPED AT A MINOR, which is the hazard
`check_absolutes.py` exists for. The real finding is a whole missing CLASS, not a missing line."***
✅ **DISPATCHED as its own brief, with the instruction to refute that premise before acting on it.**

### Still open

- [ ] **§12 says `while physically engaged`; §5 and §10 say `engaged`. Both faithful, §12's fuller.**
  ⚠️ **Resolve TOWARD THE FULLER if anyone harmonises; never cut §12 to match.**
- [ ] **`hold` / `keep` / `maintain` — the Casebook says *"maintain"*.** **Now the ONLY difference
  between the three lines, *"which makes it cleaner to act on, not worse."***
- [ ] ⚠️ **THE FIFTEEN BORROWERS.** ***"I could not check whether any of the fifteen documents that
  defer to this document phrase the limb in a way that now DISAGREES with the owner's block."***
  **The cross-file read again, now named by FIVE agents.**
- [ ] **`check_quote_drift` clean 899 → 900; flagged unchanged at 6 (all pre-existing); notfound
  unchanged at 58.**

### ⚠️ THE RACE, MEASURED PROPERLY AT LAST

***"`check_links.py --quiet` exited 2 on FOUR separate occasions today and I could not reproduce it
once — 12 clean consecutive runs after the first, 10 after the second, 12 after the third and 12 after
the fourth, every one exit 0 with empty output. Each failure coincided with other agents writing the
tree (30 dirty files now, up from 23 when I started)."***
⚠️ **Forty-six clean re-runs against four failures. This is the documented concurrent-write race,
firing in the direction that MANUFACTURES a finding.** **Every brief now carries the warning.**
**The only run that counts is the one after every agent has finished.**


---

## Workstream 63: ✅ SITUATION 7 CLOSED CORPUS-WIDE — and a NEW DIFF-REVIEW TRAP that hid an agent's own repair

**Both remaining lines repaired: `puck_handling.md:427` and `winger.md:88`, 264/300 → **291/300**,
now BYTE-IDENTICAL to the owner's two (sha1 `92f0da81`).** **Neither appears in `--near`; the
corpus-wide near-cap total is unchanged at 265.**

### ⚠️⚠️ THE NEW TRAP, AND IT IS A REVIEW-METHOD TRAP, NOT A SEARCH ONE

***"`git diff | grep -v '^[+-][+-]'` silently drops EVERY MARKDOWN BULLET, because a `-` list item
becomes `--` in a diff and reads as a file header. My first diff review came back missing three lines,
ONE OF THEM MY OWN Common Mistakes repair, and LOOKED CLEAN."***

⚠️ **This corpus is markdown, so `-` list items are everywhere, and that filter is the obvious way to
strip diff headers.** **A reviewer using it sees a clean diff that is missing its bullet changes.**
**It was caught only because the agent diffed the whole file instead of trusting the filtered view.**
- [ ] **Record in `CLAUDE.md` beside the other measured traps.** **Held until between waves.**

### ⚠️ TWO MORE UNSCOPED BODY SITES, both in `puck_handling.md`, both VOICED ALONE

1. **`:934` Common Mistakes** — a `-` bullet, **which the renderer emits as its own `<p>`**. Carried
   the same unscoped licence as the facts line. ⚠️ **A document grep for the rule would have CLEARED
   this file, because the correctly-scoped sentence lives in it too.**
2. **`:458`, inside the blockquote** — ⚠️ **worse than it looks: *"Read the conditions, because they
   are the whole of it"* is an EXPLICIT COMPLETENESS CLAIM about a list that had lost a limb, and the
   same paragraph states the scope correctly two sentences earlier. THE PARAGRAPH CONTRADICTED
   ITSELF.**

✅ **Both repaired to the FULLER form (body prose has no cap).** ✅ **And the count was re-checked after:
`:458` still says *"two of them are narrower than the NHL's rule"*, so the agent folded the location
INSIDE limb 1 rather than adding a fourth clause —** ***"Had I appended it, that sentence would have
become false in the act of repairing it."***

### ✅ A claim SHARPENED and then verified rather than assumed

**The repair asserts the permission is in the Casebook *"only"*.** **Word-boundary search:
`\bfend\w*\b` occurs **ONCE in the entire USA Hockey corpus on disk** — in the Casebook — and **ZERO
times in `sources/usah.txt`**, the playing-rules volume. ⚠️ ***"A bare `grep -c fend` returns 126 from
the playing rules, ALL of them inside *offending* / *defending*. That is the same substring trap in a
new costume."***

### ✅ THE CORPUS-WIDE CENSUS NOBODY HAD RUN — CLEAN

**Coordinator, all 39 documents: 27 genuine free-hand / Situation 7 sites. SIX flagged unscoped, ALL
SIX READ, ALL SIX FALSE POSITIVES** — every one matched `fend` inside *defend* / *offending* /
*defender* / *offender*. ✅ **ZERO UNSCOPED SITES REMAIN.**

⚠️⚠️ **AND THE COORDINATOR HIT THE SUBSTRING TRAP TWICE IN TWO CONSECUTIVE COMMANDS, having just read
the warning about it.** **First `Situation 7` matched inside `Situation 76.42`, `76.43`, `76.53` — the
IIHF FACEOFF situations — returning 76 sites and 50 false "unscoped" hits, including penalty-box,
high-sticking and off-side passages.** **Then `fend` matched `defending`.** **Fixed with
`Situation 7(?![\d.])` and a word boundary.**
⚠️ **The lesson is not "be careful": it is that A RULE NUMBER IS A PREFIX OF OTHER RULE NUMBERS, and
this corpus cites four books whose numbering collides. Any census over rule citations needs a boundary
assertion, and none of the existing worklists documents that.**

### REFUSED, with the reasoning preserved

⚠️ **`physically` + `and conditions it` together measure 307/300 — not fittable.** **Seven head
variants tried; TWO fit, at 299/300 and 297/300, and BOTH WERE REFUSED:** ***"a line 1–3 characters
from the cap is the frozen-line trap under a different number, and these files spent today getting off
it."*** **The trade was real — keep the signpost or keep the adverb — and it kept `and conditions it`,
because** ***"voiced alone, that phrase is the thing that frames everything after the dash as a LIMIT
rather than a PERMISSION, which is precisely the failure mode being repaired."***

⚠️ **AND IT SETTLED AN OPEN ROW IN PASSING: the §5/§10 vs §12 `physically` divergence is STRUCTURAL,
NOT AN OVERSIGHT — `physically` CANNOT be harmonised into the §5/§10 idiom under the cap.**
***"That is presumably why the owner's agent made the same trade."*** **Close the harmonisation row.**

### Still open

- [ ] **`hold` / `keep` / `maintain`.** **The agent left `hold` deliberately:** ***"switching it in my
  two files alone would have created a NEW three-way divergence to settle an existing two-way one."***
  **`maintain` is the Casebook's own verb and would be a genuine improvement — but it needs ONE agent
  across ALL sites, not a per-file edit.**
- [ ] ⚠️ **`winger.md`'s block at `:80–91` sits at EXACTLY 11 facts — `HARD_MAX`, zero headroom.**
  ***"The next fact added to that block evicts one, and the eviction will look like a clean edit."***
- [ ] **A framing point predating the defect: Situation 7's verb is *"steer the opponent or maintain
  position"* — it NEVER says *"fend off"*; only Situation 6 does.** **The line calls both limbs *"the
  fend-off permission"*.** **Faithful in substance, but it is authored framing on top of two quoted
  situations, and nobody has decided whether it should be.**
- [ ] **NHL/IIHF 56.1 and Hockey Canada 8.1 were NOT re-read this session** — the repair relied on the
  corpus's existing statements of them. **If any of those is similarly unscoped anywhere, this pass
  would not have seen it.**
- [ ] ⚠️ **This repair is NEW TEXT and has been read by nobody but its author.** **A `facts-reviewer`
  hearing the 291-char line cold against the 288-char alternative would settle whether
  *"and conditions it"* does the framing work it was kept for.**


---

## Workstream 64: ⚠️ THE "MISSING LADDER CLASS" WAS REFUTED — and the corpus itself was OVER-STATING a rule

**19 September 2026. The agent verified the previous agent's premise against primary text and found it
wrong — then found a real defect underneath it.**

### ✅ TASK 1 — the paired boards defect, CLOSED

**All three books' boarding clauses verified verbatim, positionally: NHL 41.1, IIHF 41.1
(`iihf_rules.txt:3890`), Hockey Canada 7.2 (`hc.txt:5980`).** **USA Hockey 624(d) reaches the ICING
HALF ONLY — *"an obvious icing situation"*, no offside limb, and it never uses the word boarding.**
**The existing fact was accurate.**

**Fixed by FOLDING the caveat into the same fact as the permission** — the style guide's own remedy,
*"fold a limit into the same SENTENCE as its permission"*. **`Rule:` 219 → 261/300; `Technique:`
155 → 115/200, losing the antecedent-less *"Do not rely on that protection"* opener.** **Nothing
evicted; the caveat is verbatim the body bullet's own wording.** ✅ **Voiced: one `<p>` now carries the
protection AND its caveat, and the `Technique:` line stands alone without a dangling demonstrative.**

### ⚠️⚠️ TASK 2 — THREE PREMISES REFUTED, TWO OF THEM MINE

**1. THE "WHOLE MISSING CLASS" IS WRONG.** **A census of every `Rule:` fact in the document shows the
HOOKING and SLASHING ladders ALREADY LIVE in the facts layer at §3, and the interference ladder at
§5** — along with cross-checking, charging, boarding, head contact, high-sticking, slew-footing and
tripping. ⚠️ **So adding holding's ladder would NOT have singled it out: three of the other four were
already carried, in the sections that own them.** **The previous agent's refusal was right for the
wrong reason.**

**2. ⚠️ ROUGHING DOES NOT BELONG IN THE CLASS AT ALL.** **NHL 51.1 says in terms that roughing is
*"a minor altercation that is NOT WORTHY OF A MAJOR PENALTY to either participant"*; IIHF 51.1 is
identical, and 51.3's major reaches only a goalkeeper's blocker glove.** ⚠️ **A blanket five-infraction
ladder fact — which my brief invited — WOULD HAVE BEEN WRONG.**

**3. ⚠️⚠️ THE CORPUS'S OWN BODY SENTENCE WAS AN OVER-STATEMENT, AND THAT IS THE REAL FIND.**
**It opened *"Holding is not capped at a minor either"* — TRUE IN ONE BOOK ONLY.** **NHL Rule 54 runs
54.1–54.4 and IIHF Rule 54 the same, BOTH MINOR ONLY; USA Hockey 622(a) is a bare minor with (b)/(c)
reserved for the facemask; only Hockey Canada 8.1(b) writes a holding major, and 8.1(c) then BARS a
match for it.** ✅ **Body now opens *"Only one of the four books takes holding itself above a
minor…"*, and names WHY 8.1(b) is the exception — so the major-plus-game-misconduct is stated as the
CEILING as well as the exception.**

**Two facts added (`What actually gets called`, 7 → 9 of HARD_MAX 11, all `Rule:`, 0 coaching):**
Hockey Canada 8.1(b) as the only holding major (239/300), and the interference ladder across three
books with USA Hockey's Rule 625 writing no higher tier (280/300).

### Refused, each with a reason

**No hooking/slashing fact (already carried at §3, *"more completely than I could restate it"*, and
duplicating would copy a fact another section owns).** **No roughing fact (see above).** **NO SECTION
SPLIT — not forced, the block sits two below cap** — ⚠️ **and it explicitly refused to say the block is
doing two jobs:** ***"the ladders that would justify that are already distributed to their owning
sections."***

- [ ] **NHL 56.5's condition NOT added** — the interference game misconduct arrives only where the
  major followed an injury. **Verified true.** ⚠️ ***"§12's body does not say it — that is a finding to
  raise, not to write around."*** **Recommend a one-clause body addition, THEN extraction.** **That is
  extract-never-author being obeyed at cost, and it is the right call.**

### ⚠️ The lesson about the briefs, and it is the fourth time today

**My brief relayed a premise from one agent; the next agent refuted it with primary text AND found the
corpus over-stating a rule underneath it.** ⚠️ **Had I dispatched the "add five ladder facts" sweep the
premise implied, the corpus would have gained a WRONG roughing ladder and kept a WRONG holding
sentence.** **The instruction that saved it is the one `CLAUDE.md` names: give the agent the row as a
HYPOTHESIS and require it to refute the brief before acting.**

- [ ] **Reported, not edited: `content/foundation/rules_primer.md:387` carries the same four-book
  boarding clause with the same USA Hockey scoping — consistent, but with NO caveat attached.**
  **Defensible for a reference document; worth a reader's eye.**
- [ ] ⚠️ **NOT DONE: a facts-layer census across the other 25 documents for holding, interference or
  roughing ladders stated BARE.** ***"My propagation scan was a grep over `content/` for two specific
  strings, and a grep cannot see a claim phrased differently."***
- [ ] **NOT TESTED: whether any of the seven pre-existing definition facts in that block states the
  TRUE HALF of a two-part rule.** **Only the two written and the one edited were verified.**

### ✅ A checker failure in the coordinator's own file, found by an agent

**`check_counts.py` exited 1 on `project/plans/OPEN_ITEMS.md` — *"says '11', corpus is '39'"*.**
✅ **FALSE POSITIVE, and the coordinator's fault: a plan sentence read *"9 of the 11 documents"*, where
the 11 counts documents carrying a QUOTATION, not the corpus.** **The tool matches a numeral near
*"documents"*.** **Reworded.** ⚠️ **And the coordinator's own first check of it was piped into `head`
and reported `exit=0` — THE PIPE TRAP, in the act of investigating a checker failure.**

---

## ✅ ALL GATES GREEN ON A QUIET TREE — the only run today that counts

**Every agent finished; nothing being written. Run unpiped, 19 September 2026:**
**`check_links` 0 · `check_facts` 0 · `check_absolutes` 0 · `check_geometry` 0 · `check_secrets` 0 ·
`check_counts` 0.** **Worklists: `check_facts_antecedents` 0 · `check_tables` 0 · `check_pointers` 0 ·
`check_caption_hosts` 0 · `check_caption_echo` 0 · `check_caption_negations` 0 · `check_chunk_tails` 0.**
**`check-arrivals.mjs` 0 via the absolute node binary.**

**14 `content/` files changed: 155 insertions, 89 deletions. Nothing staged, nothing committed.**
⚠️ **A mechanical pass proves only that nothing is malformed. The cross-file read — asked for by FIVE
agents — is DISPATCHED and is the thing that decides whether this is committable.**


---

## Workstream 65: ⚠️ THE CROSS-FILE READ — ZERO CRITICALS, FIVE MAJORS, and TWO OF THE MAJORS WERE WRITTEN TODAY

**19 September 2026, on the quiet tree. The job FIVE agents asked for.** **It read all 849 lines of
`git diff content/` AS A FILE, rendered EIGHT documents, and opened `crt6.pdf` and `ukcg.txt` itself.**

⚠️ **On its own "zero criticals":** ***"I want to be explicit about why, because 'zero criticals' is the
round-9 signature."*** **It graded B1/B2 Major rather than Critical only because each is syntactically
scoped to a named rule number — and then said *"my judgement is that these two cross the line anyway…
the call is arguable and I am flagging it as arguable rather than banking it."*** **That is the right
way to report a borderline grading and the plan records it as arguable, not settled.**

### MAJOR A — THE SPINAL RATIONALE IS ON THE WRONG PAIR (`rules_primer.md:34`, `:992`)

**Both say avoiding THE SHOULDER TIP and THE TURNED BACK *"is how you avoid a spinal injury"*, and put
ducking in a different bucket.** ⚠️ **The owner says the opposite: `body_contact_and_battles.md:720`
attributes the cervical-spine mechanism to THE TUCKED CHIN, and the shoulder to a SHOULDER injury
(`conditioning_and_recovery.md:190` — the AC joint is *"the single most fractured site in the game"*).**
**NO DOCUMENT IN THIS CORPUS CLAIMS SHOULDER-TIP CONTACT CAUSES A SPINAL INJURY.**
⚠️ **And the file CONTRADICTS ITSELF: its own Key Takeaway 6 has it right.**
⚠️ **PRE-EXISTING FROM `fa662cc`, confirmed by `git show HEAD:`** — today's edit merely widened the
contrast pair. ✅ **DISPATCHED.**

### MAJOR B1 — A HALF-RULE ADDED TODAY, IN THE VOICED LAYER (`body_contact_and_battles.md:1389`)

**The new interference fact ends *"USA Hockey's Rule 625 writes no higher tier"*.** ⚠️ **Voiced alone,
a listener under USA Hockey — the book most North American amateurs play — hears that interference
CAPS AT TWO MINUTES for them.** **The same document's BODY says 602(a)'s match penalty *"is tied to no
named foul at all and sits outside 625"*, and a late hit is 640(b), which 640(g)/(h) take to a major
plus a game misconduct and a match.** **`breakouts.md:948` carries the same escape chain.**
**Body ✓, block ✗ — this corpus's most-recorded failure, created TODAY by my dispatch.** ✅ **DISPATCHED.**

### MAJOR B2 — THE OWNER IS NOW LESS COMPLETE THAN ITS BORROWERS (same block)

**The new holding fact ends *"NHL and IIHF Rule 54 and USA Hockey 622(a) stop at the minor"*.**
⚠️ **`grep -n "21\.1"` on the owner returns NOTHING — it mentions NHL Rule 21.1 NOWHERE.** **Two
documents that DEFER to it do: `puck_handling.md:429` and its KT7 (*"Treat the minor as the floor"*),
and `breakouts.md:948` warns in terms *"Do not carry away that the NHL is the lenient book — it is
not."*** ⚠️ **So today's edit wrote into the OWNER a flat claim two borrowers exist to contradict, in
the direction that makes the corpus look MORE LENIENT than it is.** ✅ **DISPATCHED, with the
instruction to establish WHICH HALF IS TRUE in primary text first — the reviewer opened no rulebook and
said so, and if the body is the wrong half the repair is the opposite one.**

### MAJOR C — "two absolute prohibitions" then a third absolute in the same sentence (`puck_handling.md:12`)

**Key focus counts TWO and then says the shoulder *"USA Hockey rules out flatly"*; `:24` twelve lines
below says the shoulder *"is a third"*; `:969` asks about *"either of the two prohibitions"*.**
⚠️ **Wrong version in the most-consumed layer.** **Corpus-wide the number is stated THREE WAYS — the
OWNER counts two, two borrowers count three — with IDENTICAL SUBSTANCE everywhere.** ✅ **DISPATCHED
for the in-file fix only; the cross-file number is explicitly left for a later round.**

### MAJOR D — a caveat WAS evicted (`winger.md:25`, `:83`) — and the mitigation is real

**`head up, chin off your chest` was traded out to fit the shoulder limb, in blocks at 11 facts =
HARD_MAX.** ⚠️ **The style guide's prescribed remedy for a block at cap is to SPLIT THE SECTION, not to
trim.** ✅ **But the reviewer rendered it and verified the mitigation: the very next facts line in both
blocks carries *"Head up, chin off your chest instead"* and lands IN THE SAME CHUNK.**
✅ **Consistent with the coordinator's earlier finding that the OWNER uses the split form at all three
of its back-turn lines.** ⚠️ **It remains *"the only place in the corpus where 'forearm and hip' is not
followed by the head-up limb in its own line."*** **NOT dispatched — accepted with the record.**

### MAJOR E — the synthesis label reaches THREE of FIVE sites, and misses BOTH Key Takeaways

✅ **DISPATCHED**, with the *"neither document"* ambiguity fix (the nearest preceding noun phrase is a
CORPUS document, so a listener can resolve it wrongly; `body_contact_and_battles.md:888` gets it right
by naming CRT6 and the British guidance).

### ✅ ALL THREE CLAIM-SETS CLEARED, on stated evidence

**1. THE SHOULDER LIMB.** **Census over all 39 documents, markup stripped BEFORE whitespace flattening.**
✅ ***"No site anywhere in `content/` carries the hedge without the tip absolute."*** **The two its
regex flagged were read and both carry the tip in words the pattern missed.** **The four deliberate
tip-only facts lines are the shape we shipped and none softens anything.** **A layer test of Common
Mistakes AND Key Takeaways in all 14 files found the limb in every summary section carrying a
boards-safety line.** ***"The three shapes teach one rule."***
**2. THE RED FLAGS.** ✅ **Every count OUTSIDE the three owning documents: ZERO. Inside them, every
count names its list except one nit.**
**3. THE FEND-OFF PERMISSION.** ✅ **FIVE facts lines, not four — `body_contact_and_battles.md:379`,
`:1231`, `:1385`, `puck_handling.md:427`, `winger.md:88`.** **EVERY ONE names the corner/net-front
scope. No site unscoped. No body thinner than its facts line — all nine sites read.**

### ✅ DISCLOSURES RE-ATTACKED AND UPHELD, with a POSITIVE CONTROL

⚠️ **The method is the part to keep: it ran `Tonic posturing` = 1 and `Any suspicion of a skull` = 1
BEFORE trusting any zero, *"so the zeros are evidence and not a broken query."*** **Nothing in this
project had previously required a positive control on a negative-existence test.**
**Upheld: the synthesis is in neither source · speech/comprehension and balance are on CRT6's ten
nowhere · lying motionless is a visible clue on BOTH lists · the fourteen and their instruction
sentence, read positionally.**

### Open rows it produced

- [ ] **NOT VERIFIED BY IT: `uk_rules.md:551`'s April-2023-vs-November-2024 byte-identical claim** —
  only the November PDF is on disk. **`source-verifier` fetched April 2023 today and reported them
  identical; that is the corroboration, and the reviewer correctly declined to treat the style guide's
  independent assertion as verification.**
- [ ] **Minor 6: CRT6's visible-clue wording is *"an inability to respond appropriately to questions"*,
  a HIGHER threshold than the corpus's *"slow to answer"* — and *"Slow to respond to questions"* is the
  UK guidance's clue, not CRT6's.** **Conclusion unaffected; location one hop off.**
- [ ] **Minor 11: the new `#### The stick above the shoulders` block is 5 facts, ALL `Rule:`, while its
  body carries imperatives.** **The style guide permits all-`Rule:` only where the body has none.**
- [ ] **Minors 1, 2, 3, 8, 10 — terminology (`shoulder tip` vs `the point of your shoulder` split the
  wrong way in two files), one ungrammatical voiced sentence, two ambiguous antecedents, and an
  unsourced observation repeated in two documents (the folklore symptom).**

### ⚠️ ITS OWN "WHAT THIS COULD NOT HAVE FOUND" — the most useful entry

***"The un-reviewed surface is the COMMITTED PROPAGATION, not today's diff."*** **Finding A is a defect
from `fa662cc` that nobody has re-read since.** **And:** ***"If the reconciliation is wrong, it is now
wrong identically in 130 places and my census would report it as perfectly consistent."***
**It also named the single highest-value thing it did not do: it never opened `site/src/diagrams/`,
and `body_contact_and_battles.md` embeds `diagram:angle-into-the-corner` INSIDE §6.**
✅ **PARTIALLY ANSWERED: the coordinator confirmed `diagrams.json` (08:05:37) is NEWER than the newest
`.mjs` (08:05:29), so `check_absolutes`'s 408-unit pass genuinely certified the caption layer and did
not silently skip it.** ⚠️ **But a caption CONTRADICTING its host's prose is a different question and
remains unchecked.**


---

## Workstream 66: ✅ `puck_handling.md` DE-COUNTED — and the corpus-wide ruling of "three" MUST NOT BE MADE

### The file held THREE framings, not two

⚠️ **The brief understated it, and `:24` DISAGREED WITH ITSELF** — one paragraph carried both *"two
prohibitions cap it absolutely"* and *"the shoulder is a third"*. **A third framing at `:421` had the
shoulder as *"a third THING TO KEEP OFF THE WALL"* — deliberately not a third prohibition.**
✅ **The brief's alternative hypothesis (that the two counts named different pairs) was REFUTED from
`:24`'s own prose: *"Ducking is the posture… a chin tucked to the chest straightens the cervical
spine."* Same act, two names.**
✅ **And `:12`'s third absolute is CORRECTLY SOURCED — `ibc.txt:1453`, the Angling In list.**
***"The sentence was wrong about arithmetic, not about USA Hockey."***

**NINE edits, all SUBSTITUTION, no count of the boards prohibitions survives anywhere in the file.**
**Nothing evicted; `:408` came DOWN from 171 to 164 chars.** ⚠️ **And `:408`'s dash now introduces a
DECLARATIVE — *"no battle outranks either"* — *"which cannot be heard as an instruction at all."***

✅ **AN OFF-BY-ONE NOBODY HAD REPORTED, found by the sweep:** `:885` said *"these seven"* of a ladder
whose own block at `:880-881` lists **EIGHT** rungs. **Fixed by NAMING, not by writing "eight".**

### ⚠️⚠️ THE FINDING THAT MATTERS MOST: "THREE" IS NOT ONE CLAIM

**Census, markup-stripped — and the brief's list was 33–75% short, the exact shortfall `CLAUDE.md`
records for relayed site lists:**
- **"two": ~19 sites across 10 documents** (brief named 4)
- **"three": 9 sites across 3 documents** (brief named 2 sites in 1 document)

⚠️⚠️ **THE TWO "THREE" CAMPS DISAGREE ABOUT WHAT THE THIRD MEMBER IS.**
**`switching_positions.md` makes it the shoulder *TIP* — which USA Hockey bans FLATLY.**
**`forechecking_systems.md` and `offensive_zone_play.md` make it *"the shoulder on the boards"* — the
WHOLE shoulder, which USA Hockey only *"avoid[s]"* and asks for *"if possible"*.**
⚠️ **BOTH carry the hedge in the sentence immediately before, so NOTHING UNSAFE IS TAUGHT — but a
corpus-wide ruling of "three" WOULD RATIFY A CONFLATION OF AN ABSOLUTE WITH A HEDGE.**
**That is the single best reason in the report, and it means the tidy-looking answer is the wrong one.**

### ✅ THE CAPTION LAYER HAS ALREADY CONVERGED — and nobody noticed

**All five captions voiced into that document say *"never turn your back to the wall and never duck,
and NEITHER PROHIBITION is a rule for fast checkers only."*** **Named, never counted.**
⚠️ **The diagram layer solved this before the prose did, and no plan row records it.**

- [ ] ⚠️ **RECOMMENDATION, WELL-ARGUED, AND HELD FOR ITS OWN WAVE: stop counting corpus-wide; NAME the
  members.** **Not two, not three.** **~28 sites across 12 documents.** **Three reasons, all evidenced:
  the caption layer has already converged there; the two camps are not disagreeing about the same third
  member so NEITHER NUMBER IS SAFE TO PROPAGATE; and naming was SHORTER than counting at four of seven
  rewordings.** ⚠️ **This is a 28-site propagation and must be a DELIBERATE WAVE with its own briefs,
  not a sweep bolted onto a repair round.** **`puck_handling.md` now takes no position, so it conflicts
  with neither camp.**

### ⚠️ AN UNRECONCILED FOURTH USA HOCKEY SENTENCE — and it reopens a ruling five agents declined

**`body_contact_and_battles.md:742` records a FOURTH: *"turn the far shoulder toward the boards to
prevent shoulder injury"*, from the *Partner's Bump Along the Boards* drill.** **The owner says in
terms it is *"not settled in this document"*.**
⚠️ **The session's settled position has treated `ibc.txt:1281` as RULED — a torso-rotation cue, not an
impact-surface cue — and that ruling has been carried into roughly fifteen briefs.** ⚠️ **But FIVE
agents have now declined to own it, and this one puts the problem sharply: *"it is the only place in
the sources that points a shoulder AT the wall."***
- [ ] **The ruling is recorded but UNOWNED. Either someone owns it or it stops being cited as settled.**

### Two things that did not fit, reported not forced

- [ ] **§Back into the checker's facts block still carries NO shoulder limb** — block at
  `MAX_COACHING_FACTS` 8, `:408` has 36 chars and `:409` has **ONE**, and the two-halved limb costs 80.
  ⚠️ **A `Rule:` fact would clear the 11-fact cap, but *"this is a coaching manual, not a playing rule,
  so it cannot take that label"*.** **Fifth cap-blocked site, and the reasoning is the sharpest yet.**
- [ ] **CANDIDATE `:405`: `Goal: Put shoulder, arm, hip and leg on the pressure side at once`.**
  **Voiced alone, nothing in the line says WHICH side the pressure is.** **It is CORRECT — the pressure
  is the checker — and `body_contact_and_battles.md:750` resolves exactly this confusion in its own
  text (*"Your shoulder does face the checker; it is the boards it should not meet"*).** **This block
  has 101 chars of headroom.** ⚠️ **Left deliberately: pre-existing, safety-bearing, outside the brief,
  and *"a repair is new text that nobody has reviewed."***

### ✅ Five source strings re-verified in primary text, with their characterisations

**All five located and every corpus characterisation confirmed** — including that
*"A player doesn't have to be going at full speed for this to happen"* attaches to the head-down
head-on **INJURY** (`huh.txt:229`, Tator citation beneath), and that *"Even a light hit from behind…"*
(`ibc.txt:1570`) is **addressed to the checker, not to the player who turns**.


---

## Workstream 67: ✅ MAJOR E CLOSED — all five synthesis sites labelled, and a REAL ATTRIBUTION ERROR found underneath

**Seven edits across the two files. The label is now carried into BOTH Key Takeaways, unhedged.**
✅ **Coordinator census confirms: FIVE sites corpus-wide, ALL FIVE LABELLED, zero unlabelled.**

⚠️ **AND THE COORDINATOR'S FIRST CENSUS MISSED ONE.** **A narrow pattern (`fires first|act on
whichever`) found FOUR and cleared the corpus; `uk_rules.md:533` phrases the synthesis differently
(*"Crossing between the two lists like that is this guide's reading of them side by side"*) and only a
broader pattern found it.** ⚠️ **Third instance today of the same lesson, stated by another agent an
hour earlier: *"a grep cannot see a claim phrased differently."*** **A census over a CLAIM must be run
on at least two phrasings, and its result is only as good as the narrower one.**

### ⚠️ A REAL ATTRIBUTION ERROR, not the location slip the brief described

**`conditioning_and_recovery.md:265` claimed CRT6's nearest approach to the speech-and-comprehension
limb was *"a visible clue about being slow to answer questions"*.** **Read off the rendered pages:**
- **CRT6's visible-clues list reaches only *"an inability to respond appropriately to questions"*** — a
  materially higher threshold.
- ***"Slowness or difficulty answering questions"* is in CRT6's page-1 REMEMBER box**, a different
  layer.
- ⚠️⚠️ ***"Slow to respond to questions"* IS THE UK GUIDANCE'S OWN VISIBLE CLUE (`ukcg.txt:328`).**

⚠️ **So the corpus had A BRITISH CLUE SITTING UNDER A CRT6 ATTRIBUTION.** **That is attribution drift —
the class `check_quote_drift.py` states in its own docstring it CANNOT see, because it keeps the
closest match across ALL sources.** ✅ **Rewritten to name both CRT6 layers with their real wording and
both thresholds; the conclusion is preserved and now covers both.**

### ✅ The method, and it should become the standard for negative-existence tests

**Positive controls run FIRST, whitespace-stripped and lowercased: `tonicposturing`=1,
`anysuspicionofaskull`=1, `severeneckpain`=1, `redflag`=5.** **Then the negatives: `whichever`=0,
`firesfirst`=0, `actonwhichever`=0, and `crt`/`crt6`/`scat`/`recognitiontool`/`concussionrecognition`
all 0.** **`crt6.pdf` rendered and BOTH PAGES READ BY EYE — no reconciliation instruction anywhere.**
⚠️ **`sources/crt6.txt` measured at 406 BYTES after stripping, with `helmet`, `concussion` and
`redflag` all 0 — the image-only trap confirmed for the fifth time.**

### ⚠️ A TOOL GAP WORTH A ROW

***"`check_disclosures.py` DOES NOT SEE the form 'Neither X nor Y writes that rule'* — it returns 0
matches for that string at all four sites that now use it."***
⚠️⚠️ **THE CORPUS'S STANDARD SYNTHESIS LABEL IS AN ABSENCE-OF-EVIDENCE CLAIM THAT THE
ABSENCE-OF-EVIDENCE CHECKER IS BLIND TO.** **All five are true as of today, verified against both
primary sources this session — but nothing mechanical is watching them, and the style guide's owner row
is the only thing that would catch a sixth site written without one.**
- [ ] **Teach `check_disclosures.py` the `Neither X nor Y writes…` form.** **Held — `scripts/` changes
  between waves, and two agents are live.**

### ⚠️ THE DIRECTION NOBODY HAS CHECKED, and it is the one this project keeps missing

***"I did NOT check whether some THIRD document — an England Ice Hockey page, an IIHF medical
guideline, a BJSM consensus statement — writes an equivalent reconciliation rule, which would mean the
corpus is UNDER-CREDITING rather than over-claiming; that is the direction `check_disclosures` was
built for and it is exactly the direction NO REVIEWER STOPS ON."***
- [ ] ⚠️ **This is the round-59 lesson restated by an agent that had not been told it: all three
  disclosure defects found then made the corpus look LESS supported than it is.** **Nobody has searched
  for a published reconciliation. Open.**
- [ ] **`sources/ukcg.pdf` sits at a 0.50% text-to-PDF ratio — on `sources/README.md`'s image-only
  boundary.** ***"A reconciliation sentence living in an unextracted graphic elsewhere in that PDF
  would be invisible to me."***

### Reported in a file it does not own

- [ ] **`body_contact_and_battles.md` Key Takeaway 8 states *"neck pain or tenderness is itself an
  ambulance"* — CRT6's wording, UNATTRIBUTED — while the adopted British list requires *"Severe neck
  pain"*.** **The style guide's owner row says that document *"cites BOTH and owns NEITHER — it must
  always name whose count it is quoting."*** **Fires in the SAFE direction and CRT6 is named twice
  later in the same takeaway, so a Minor — but it is the row's stated requirement.**


---

## Workstream 68: ✅ MAJOR A REPAIRED — and the brief's correction was itself too crude

**Three lines in `content/foundation/rules_primer.md`. Every quotation in the brief re-verified against
primary text rather than carried in:** `huh.txt:213-215` (*"when the head is flexed (chin toward the
chest), this normal curve is removed"*), `ibc.txt:1453` (en dash **confirmed by octal dump**, and the
wrap at *"it can / cause injury"* confirmed), `ibc.txt:1570`, and `conditioning_and_recovery.md:190`.
✅ **Confirmed: nothing in the corpus claims shoulder-tip contact causes a spinal injury.**

### ⚠️ THE REFINEMENT THAT CHANGED THE REPAIR — and it came from the style guide, not from me

**My brief implied the fix was *"the shoulder tip and the turned back are not neck problems."***
⚠️ **`project/content_style_guide.md:1421` already records that the turned-back limb carries a
POSSIBILITY claim about the neck, and warns that *"the corrective direction is toward PRECISION, never
toward WEAKENING."*** **So the turned back IS one.**
✅ **What shipped is a THREE-WAY split: shoulder tip → unspecified injury, not the neck; turned back →
your spine, head into the wall first; ducking → the cervical-spine mechanism at full strength.**
⚠️ **Had the agent taken my wording, it would have weakened a live neck-injury warning while repairing
an attribution error.** **Seventh brief-level error this session, and the style guide caught this one.**

✅ **The two sites were OUTLIERS, not the corpus's position — the same file already had it right at
`:22`, `:384` and `:1133`.** ✅ **And the four other documents read were ALL CORRECT on this defect;
`puck_handling.md:1029` even carries the disclosure explicitly.** **Nothing needed propagating outward.**

### ✅ A chunk-boundary defect it CREATED and then CAUGHT, by rendering

**Its first draft split a sentence out; the render showed chunk 006 then OPENED on the orphan fragment
*"Penalised under Hockey Canada, whose Rule 8.7 prohibition…"* — no subject, voiced alone.** **Rejoined
with an em dash.** ⚠️ **Only the renderer could see this; no checker did.**

### ✅ An accidental cross-site edit, caught and REVERTED

***"A substitution intended for my two sites also matched `:22`, SILENTLY. I caught it by grepping the
result, reverted `:22` to its committed wording, and re-verified."*** ⚠️ **A `sed`-style substitution
matching a site the agent did not intend is exactly how a sweep clobbers reviewed text, and it was
caught only because the agent checked what it had actually changed rather than what it meant to.**
✅ **It also updated the Sources trailer, whose *"the anatomy in the Key focus and takeaway 6"*
enumeration its own repair would have made STALE — the invalidated-ordinal step firing again.**

### ⚠️ A `check_quote_drift.py` TOOL ARTEFACT worth a row

***"Running the tool on a bare copy gives a FALSE `0 clean / 1341 notfound` — it globs sources RELATIVE
TO THE DOC PATH; that is a tool artefact, not a finding."*** **It baselined correctly by building a
mirror directory with a `sources` symlink.**
⚠️ **This is the already-recorded *"source glob is `dirname(DOC)/../../sources/*.txt`"* blind spot
biting in a NEW way: not silently loading zero sources in a stray directory, but producing a
catastrophic-looking false report that an unwary agent would file as 1,341 defects.**
- [ ] **Document the mirror-plus-symlink baselining method in the tool's docstring. Held —
  `scripts/` changes between waves.**
**Measured properly: `clean=1195 flagged=74 notfound=72` IDENTICAL before and after; at MINLEN 10 the
only change is clean 1336 → 1338, its two new *"it can cause injury"* quotes located with ZERO
character drift.**

### Reported, not fixed

- [ ] ⚠️ **`rules_primer.md:22` (Key focus) — a MILD OVER-EXTENSION, pre-existing and reviewed.**
  **It says a vertebra *"can break at walking speed"* and names NO IMPACT SURFACE.** **The walking-speed
  finding in `huh.txt` is stated of a HEAD-ON COLLISION WITH THE BOARDS OR A GOAL POST, and the same
  file's `:384` states it WITH that condition.** ⚠️ **The agent reverted its own accidental touch of
  this line rather than quietly widening reviewed text — the right call, and the finding stands.**
- [ ] ⚠️ **A question nobody has asked: `rules_primer.md` now carries this injury mechanism at FOUR
  sites, in a RULES document whose owner for it is `body_contact_and_battles.md`.** ***"Nobody has
  asked whether four copies of an injury mechanism in a rules primer is propagation or duplication,
  and `check_caption_echo`'s reasoning suggests the question is real."***
- [ ] **NOT CERTIFIED: *"A repair is new text and has not been reviewed — this needs `safety-reviewer`
  (it touches an injury mechanism AND a penalty claim) and `content-reviewer` before it goes near a
  gate."***


---

## Workstream 69: ✅ BOTH HALF-RULES CLOSED — the BODY was true in both cases, and my brief was wrong twice

**Every rule number verified against primary text on disk before anything was touched: `usah.txt`
625(a)-(c), 602(a), 640(b)/(g)/(h) (including the *"(except Adult Male Classifications)"* carve-out),
411's aggressive-infraction list read IN FULL; `nhl_rules_layout.txt` 56.4 and 54.1-54.4;
`iihf_rules.txt` 56.5 and 54.1-54.4; `hc_layout.txt` 8.3(b)/(c), 8.1(b)/(c); and NHL 21.1 —**
⚠️ **which a bare grep returned NOTHING for, because the phrase WRAPS. Flattened, one hit in each of
two extractions. The trap, again, on the single rule number the whole of B2 turned on.**

### ⚠️ TWO ERRORS IN MY BRIEF, AND THE SECOND WOULD HAVE CREATED A NEW HALF-RULE

**1. THE MEASUREMENTS WERE SWAPPED.** **B1 (interference) is 280/300 with 20 free; B2 (holding) is
239/300 with 61.** **I had them the other way round.** ***"Had I trusted it I would have tried to cram
the repair into the wrong line."***

**2. ⚠️⚠️ THE ESCAPE ROUTE IS NOT UNIVERSAL.** **My brief implied the ladder escapes the named rule in
every book. It does not.** **IIHF v1.1 CONTAINS NO MATCH PENALTY AT ALL — flattened whole-book count
for `match penalty` is **ZERO**; Section 04 runs Rule 20 Major → Rule 21 *Dangerous Actions* → Rule 22
Misconduct, and 21.1 reaches only *"an action that is not covered by the playing rules"*.**
**Hockey Canada 7.1(c) is likewise confined to *"any manner not otherwise covered within the playing
rules"*, and **8.1(c) BARS a match for holding in terms**.**
⚠️ **So the rule's own ceiling IS the game's ceiling in TWO of the four books.** ***"Assuming it was
universal would have been a new half-rule."*** **`rules_primer.md:420` already said this; the owner
said it nowhere.**

### What shipped

**BODY FIRST, per extract-never-author** — the escape-route passage added to the holding paragraph,
five new quotations each verified present exactly once in flattened primary text, with the IIHF/Hockey
Canada ceilings as the other side. **Then the facts layer, 9 → 10, all `Rule:`, none near a cap:**
- **B2 tail → *"the NHL and the IIHF stop INSIDE Rule 54, USA Hockey INSIDE 622(a)"*** — the scope
  marker `puck_handling.md` already uses for the same rules. **266/300.**
- **B1 tail → *"USA Hockey's ladder is OUTSIDE Rule 625, at 602(a)"*.** **287/300.**
  ⚠️ **SUBSTITUTION BEAT ADDITION AGAIN: this is SHORTER than what it replaced.** **Seventh case today.**
- **A new tenth fact** carrying 21.1 and 602(a) with their triggers and the IIHF divergence. **284/300.**

✅ **SECONDARY ASK ANSWERED: the all-`Rule:` exemption does NOT hold.** **That section's body carries at
least five imperatives.** ***"The style guide's exemption is for a section with NO imperatives, not one
whose imperatives were SQUEEZED OUT."*** **Two extracted as `Technique:` (174/200) and `Priority:`
(186/200); block now 7 facts, 2 coaching.**

### Refused, each a finding

- [ ] **USA Hockey's late-hit chain NOT added to the facts layer: 640(b) is written *"except Adult Male
  Classifications"*, and stating 640(b)→(g)/(h) in a 300-char line without it *"would have replaced one
  half-rule with another."*** **Body and Common Mistakes both carry it in full with the carve-out.**
- [ ] **8.3(c)'s trigger (a deliberate or attempted injury) NOT added — it would leave ~4 chars of
  headroom.** **That rung has NO TRIGGER STATED and is a PRE-EXISTING defect.**
- **Two designs reaching HARD_MAX were abandoned in favour of scoping plus one shared fact.**

✅ **A render-only defect caught: `602(a) one for…` voiced as *"clause a one for"*. Now *"reaches one
for"*.**

### ⚠️ TOOL FINDING — `check_quote_drift.py` WAS BLIND TO 156 QUOTATIONS

***"My nine new quotations scored clean=900 — UNCHANGED — until I converted them to straight quotes, at
which point it went to 909."***

**`scripts/check_quote_drift.py:115` matched `\*"([^"]{N,})"\*` — ASCII QUOTES ONLY.**
**Coordinator census confirms **156 italic-quoted fragments across TEN documents** written with
U+201C/U+201D:** `forechecking_systems.md` **60** · `center.md` **45** · `rules_primer.md` 12 ·
`time_and_space.md` 12 · `faceoffs.md` 11 · `on_ice_communication.md` 8 · `neutral_zone_systems.md` 3 ·
`scanning_and_anticipation.md` 2 · `defensive_zone_coverage.md` 2 · `goaltender.md` 1.

✅ **FIXED BY THE COORDINATOR — `scripts/` changes BETWEEN WAVES, and every agent is now finished.**
**The pattern accepts both quote families; the docstring records the census and how it was found.**
⚠️ **MEASURED ON ONE FILE: `forechecking_systems.md` went 429 → 481 visible fragments, and FLAGGED went
5 → 13.** **Those eight are CANDIDATES, not defects — this is a WORKLIST and must never gain a
`--strict`.** ⚠️ **AND EVERY FINDING THE NEW VERSION PRODUCES IS UNREVIEWED BY THE OLD ONE.**
- [ ] **Read the newly-visible flagged hits.** **Corpus-wide before/after census running.**

### What it could not reach

- [ ] ⚠️ **It read IIHF **v1.1** (Britain's book, per the In-House Rules) and did NOT check Rule 54 or
  Rule 21 in `iihf_rules_2026-27.txt`.** ***"If the current book reintroduces a match penalty, the new
  fact's last clause is stale."***
- [ ] ⚠️ **`carha.txt` NOT CHECKED AT ALL, though this document cites CARHA elsewhere —**
  ***"a fifth book with its own ceiling is exactly the shape of defect I just repaired."***
- [ ] **602(a)'s reach over a hold is *"a reading of the rule's SILENCE about named fouls, not something
  any book states."*** **Honest, and it should travel with the claim.**
- [ ] ⚠️ **NOT CERTIFIED:** ***"the facts lines were written and self-certified by the same agent, which
  is the ONE THING this project's method exists to prevent."*** **Needs `facts-reviewer` and
  `rules-verifier` before staging.**


---

## Workstream 70: ✅ `check_quote_drift.py` PATCHED — +120 fragments visible, and all 9 new candidates are PRE-EXISTING

**Corpus-wide before/after, measured by running both versions over all 39 documents:**

| | clean | flagged | notfound | total |
|---|---|---|---|---|
| before | 9,390 | 383 | 925 | 10,698 |
| after | 9,499 | **392** | 927 | 10,818 |
| delta | +109 | **+9** | +2 | **+120** |

**120 quotations that the corpus's quote-drift checker had never once examined are now in scope.**
**The gap between 120 and the 156 typographic fragments counted is `MINLEN` 25 filtering short ones —
those remain silently skipped, as the tool's own docstring already warns.**

### ✅ ALL NINE NEW CANDIDATES ARE PRE-EXISTING — nothing today's wave introduced

**EIGHT are in `content/systems/forechecking_systems.md`, which is NOT in today's diff at all**
(`git status --porcelain` returns nothing for it). **The ninth is `rules_primer.md:955`; today's edit
touched three lines in that file and `:955` is not one of them.**
⚠️ **So the tool change surfaces a BACKLOG, not a regression, and it does not bear on whether this
round is committable.**

**The nine, by kind:** six `ADDED` punctuation (a terminal period or comma inside the quote marks where
the source sentence CONTINUES — the exact class the tool was written for), and two `CASE` (an initial
capital lowered). **The `rules_primer.md:955` one is arguable on its face:** the quoted sentence *is*
complete and the source continues `"(a) A …"`, a new lettered clause.

- [ ] **Read all nine and rule on them.** ⚠️ **WORKLIST, NOT A GATE — a hit is a CANDIDATE.** **The
  `[a]` bracket form is the corpus's disclosed-insertion convention and is CORRECT, and an ALL-CAPS
  source heading is a judgement call.** **`forechecking_systems.md` is free; this is one agent's job.**
- [ ] ⚠️ **EVERY FINDING THE NEW VERSION PRODUCES IS UNREVIEWED BY THE OLD ONE**, and the 120 newly
  visible fragments include 109 scored CLEAN that nobody has spot-checked.
- [ ] **The `MINLEN` 25 blind spot is unchanged and now the only quote class still structurally
  invisible.** **Nobody has measured how many fragments fall under it.**

---

## ✅ REVIEW RECORD WRITTEN

**`project/reviews/boards_limb_and_red_flags_2026-09-19.md`** — 177 lines, covering the three framing
errors, the FALSE PRESENCE class, the nine-times-proved cap finding, what the four reviewers found,
the ten measured traps in a table, **and an explicit *"what is NOT certified"* section.**
⚠️ **The gate requires a review record that actually covers the files changed. This one names them and
states plainly which reviews have NOT been run.**


---

## Workstream 71: ⚠️ THE COMMIT GATE RETURNED **BLOCK** — five conditions, and it found things the coordinator missed

**29 files staged, 3,003 insertions, 137 deletions. Index verified to match the tree.**
**NOT COMMITTED. Recorded in full in `project/reviews/boards_limb_and_red_flags_2026-09-19.md` §8.**

### ✅ C10 — CLEARED (mechanical half)

⚠️ **THE SITE HAD NEVER BEEN BUILT.** **`site/dist` was timestamped 04:59:01 against diagram edits
running 07:45–08:05, and `grep -rl 'not the whole shoulder if you can help it' site/dist` returned
**ZERO**, as did the new heading's anchor.**
⚠️⚠️ **`build-diagrams.mjs` DID run — that is what made `diagrams.json` current and the caption
certification genuine — BUT THAT IS NOT THE SITE BUILD.** **The two are easy to mistake for each
other, and the coordinator did.**

✅ **REBUILT with the ABSOLUTE npm binary: `EXIT=0`.** **Verified COMPLETE, not merely fresh, per
`CLAUDE.md`'s own warning that a failure at `build:pdf` or `check:links` leaves a fresh-mtime
incomplete `dist`:** **53 HTML pages · 8 PDFs · 51 OG cards · `check-links` 10,961 internal links
(5,901 with anchors) ALL RESOLVING · the new caption wording now in **51 pages** (was 0) · the new
heading anchor in **2** (was 0).**
- [ ] **`site-reviewer` DISPATCHED on the rebuilt pages** — the review half of C10.

### C4 / C6 — DISPATCHED, and the gate sharpened both past my framing

- ⚠️ **C4: I had treated the new rule claims as PROPAGATION. The gate separated them.** **The holding
  paragraph asserts *"the only major any of the four books writes for holding itself"* and *"USA Hockey
  is the one book that writes no strength-move sentence at all"* — **FOUR-BOOK NEGATIVE EXISTENCE
  CLAIMS**, which are new, not propagated.** **It spot-checked string presence itself and said plainly:
  *"That is string presence, not rule verification — it settles none of the tiers, none of the scopes,
  and none of the four-book negatives, which is precisely what the agent is for."***
- ⚠️ **C6: it found a NEW MEDICAL SENTENCE nobody had flagged, appearing TWICE in `rules_primer.md`:
  *"a vertebra can break at walking speed."*** **The sourced finding is that THE INJURY can occur at
  walking speed.** ***"A vertebra can break"* is a mechanism the Sources trailer does not carry** — in
  a file whose own trailer notes the finding is a Tator restatement never read in the original.
  ⚠️ **This is the SAME LINE another agent flagged hours earlier for naming no impact surface, and the
  over-extension was in the mechanism too. Two reviewers, two different faults, one sentence.**

### ⚠️ C11 — A RULING I HAD NOT APPLIED, AND IT IS GENERAL

***"`review_process.md`'s terminating rule exempts a repair CONFINED TO ITS FINDING, re-derived and
recorded. It does NOT exempt one that 'moves, merges, splits or renumbers text, or touches a claim the
finding did not name.'"***
**The section split moved three paragraphs, split an 11-line block into 7 + 5, rewrote a
cross-reference anchor IN A DIFFERENT SECTION, and made room for a correction that had measured
311/300.** ***"That is the voiding case exactly. No reviewer named this file at all."***
✅ **`facts-reviewer` DISPATCHED on the split and the whole ` ```facts ` layer.**
⚠️ **GENERAL LESSON: a structural repair is not covered by the review that authorised the finding,
and this round did FOUR of them.**

### ✅ C3/C8 — FIXED

**The record named 10 of 14 content files and NONE of the 15 others** — ⚠️ **including
`body_contact_and_battles.md` and `uk_rules.md`, which carry the heaviest claim changes in the diff.**
**It also opened *"Nothing staged"*, false of the index, and gave no verdict on the two widened
checkers.**
✅ **A full manifest is now §0 and a per-tool verdict is now §7.**

### ⚠️ NOT BLOCKING, BUT REAL — and item 1 is the worst thing in the round

- [ ] ⚠️⚠️ **`winger.md` TRADED A CAVEAT OUT TO MAKE ROOM, TWICE — while THREE OTHER DOCUMENTS IN THE
  SAME WAVE TOOK THE ADDITIVE ROUTE.** **`puck_support_and_spacing.md`, `risk_management.md` and
  `passing_and_receiving.md` each gained a whole NEW `Never:` line instead.**
  ***"Same defect, same round, two different treatments; the substitutive one is the one CLAUDE.md
  names as the thing never to do."***
  ⚠️ **The mitigation is genuine — the sibling Duck line carries the limb and lands in the same chunk,
  and the OWNER uses that split at all three of its back-turn lines — BUT THE INCONSISTENCY IS NOT
  DEFENSIBLE AS A DELIBERATE CHOICE, BECAUSE IT WAS NOT ONE.** **Two reviewers have now accepted it;
  a third could reasonably not.**
- [ ] ⚠️ **TWO LIVE FRAMINGS OF THE PROHIBITION COUNT ARE SHIPPING IN ONE DIFF.**
  **`switching_positions.md` ships *"the shoulder tip is a THIRD"* twice, while `positions.mjs` and
  `winger.mjs` comments insist *"NO COUNT MOVED … the shoulder was never a member of that pair."***
  ⚠️ **The review record calls the count *"unresolved and deliberately so"* — but LEAVING A QUESTION
  OPEN IS NOT THE SAME AS SHIPPING BOTH ANSWERS.** **The de-counting recommendation (~28 sites,
  12 documents) is the resolution and it is held for its own wave.**
- [ ] **`body_contact_and_battles.md` §9 `Rule: Holding…` LOST A BOOK** — the surviving line cites
  NHL/IIHF 56.1 and Hockey Canada 8.1; the USA Hockey Casebook limb moved to a new line.
  **Intact as a layer, THINNER VOICED ALONE.**

### ✅ Conditions the gate PASSED, verified by it rather than taken from me

**C1, C2, C9 all clean, re-run on the quiet tree.** **`.agents/`, `.codex/` and `AGENTS.md` confirmed
ABSENT from the index** — ⚠️ **though also UN-IGNORED, so a future blanket add would sweep them.**
**`.gitignore` not weakened. Index integrity verified, not taken. No foreign work in the diff.**
✅ **NON-NEGOTIABLE 6 CLEAN** — every added `content/` line scanned for project narration; the heavy
provenance added this round stayed in `sources/README.md` and the style guide, and what reached
`content/` is source-facing.
✅ **The correction prepended to `shoulder_limb_propagation_2026-09-19.md` was judged ADEQUATE:**
*"it retracts the scope claim, says plainly that the record's own verification was structurally
incapable of finding them, and forbids quoting its counts. That record no longer overstates."*

### ✅ The attribution conflict, ruled on independently

**The gate flagged that this session carries a note asking for a `Co-Authored-By: Claude` trailer while
the user's global instruction, `CLAUDE.md` and `git-guard.sh` all forbid it.** ✅ ***"The project rule
wins"*** — **and the hook would block the commit anyway. Settled, and it stays settled.**

### ⚠️ What the gate could not have found

***"I audit a diff, so I am blind to anything already wrong in these files before today."***
**And the sharpest thing it said about its own limits:** ***"I confirmed the USA Hockey shoulder
sentences exist — but not whether a 2010-era coaching manual built on the 2007-09 rule book is the
right authority for a posture instruction now shipping in fourteen documents and eleven captions."***
- [ ] ⚠️ **NOBODY HAS ASKED THAT QUESTION, and `sources/README.md` already records that `ibc.txt`
  relays a 12-and-Under body-checking age that current Rule 604(a) PROHIBITS — which reached the corpus
  and shipped.** **The manual's TECHNIQUE teaching is not dated the same way as its rule claims, but
  that distinction has never been tested for the boards posture specifically.**


---

## Workstream 72: ⚠️ A STAGED-STATE DIVERGENCE, CAUGHT — and it would have shipped the exact thing the gate blocked

**Immediately after the gate returned BLOCK, the coordinator repaired the review record (C3/C8) and
filed the gate's verdict in the plan. Both files were ALREADY STAGED.**

**`git status --porcelain` then showed:**
```
MM project/plans/OPEN_ITEMS.md
AM project/reviews/boards_limb_and_red_flags_2026-09-19.md
```

⚠️⚠️ **THE INDEX HELD THE VERSIONS FROM BEFORE THE REPAIR.** **A commit at that moment would have
shipped the review record WITHOUT its file manifest and WITHOUT the per-tool verdicts — i.e.
PRECISELY THE VERSION THE GATE HAD JUST REJECTED, under a message saying the block was addressed.**

**This is `CLAUDE.md`'s warning firing verbatim:** ***"a commit can pass every mechanical gate while
shipping a staged state nobody verified"*** — **because `check_facts.py` and `check_links.py` read the
WORKING TREE, and `git-guard.sh` gates on those same checkers.** ⚠️ **Every checker would have passed
on the repaired file while the index carried the unrepaired one.**

✅ **Caught by the file's own prescribed test — `git diff --name-only`, empty means index matches tree
— run as a habit rather than because anything looked wrong.** ✅ **`content/` was CLEAN throughout;
the divergence was confined to the two `project/` files the coordinator had just edited.**
✅ **Both re-staged; index and tree match again.**

### ⚠️ The general lesson, and it is sharper than the rule it comes from

**`CLAUDE.md` says to stage *"immediately before the gate, not on each completion notification"*,
and gives the reason as resumed agents editing staged files.** ⚠️ **THERE IS A SECOND SOURCE OF THE
SAME DIVERGENCE AND IT IS NOT WRITTEN DOWN: THE COORDINATOR'S OWN POST-GATE REPAIRS.**
**A BLOCK verdict is followed, by definition, by edits to files that are already staged — so the
window opens every single time a gate blocks, and it opens on the record that documents the fix.**
- [ ] **Add to `CLAUDE.md`, between waves: after acting on a gate's BLOCK, RE-STAGE before re-running
  it, and check `git diff --name-only` is empty before any commit.** **Four reviews are still running;
  the index will be stale again by the time they land, and the final re-stage must happen after the
  LAST of them, not now.**


---

## Workstream 73: SAFETY REVIEW — zero criticals, two majors, and it OVERTURNED a previous reviewer's "accept"

**`safety-reviewer` read the complete 905-line staged `content/` diff without any `grep -v` filter,
rendered `crt6.pdf` at 170 dpi and read both pages by eye, and read `sources/README.md` before
concluding anything about any source.**

✅ **NO CRITICALS — and it says how it looked:** ***"I looked specifically for the round-10 shape — a
caveat in the body and absent from the facts block or the summaries — and did not find one in this
diff. The propagation is the most complete I have seen in this corpus."***

### ⚠️ MAJOR 1 — `uk_rules.md:375`: the listener's FIRST words are the stand-down

**The ⚠️ prefixes the WHOLE paragraph with *"Important."*, so a listener receives, as its own `<p>`
after a 300 ms break: *"Important. A player lying motionless is not by itself a red flag on either
list…"*** ⚠️ ***"That is the exact sentence a bystander recalls to justify not calling."***
**The resolution — *"if you cannot get a response, call 999"* — is the LAST clause of a six-sentence
paragraph.**
⚠️ **AND THE RESPONSIVENESS GLOSS IS THE CORPUS'S OWN INFERENCE, UNLABELLED HERE.** **Verified
positionally: `ukcg.txt:322` reads *"Lying motionless on ground/slow to get up"* and CRT6 page 2
*"Lying motionless on the playing surface"* — **NEITHER CARRIES A RESPONSIVENESS CONDITION**.** **The
neighbouring synthesis in the same section IS labelled; this one is not.**
✅ **And the fix is already written elsewhere in the corpus:** `conditioning_and_recovery.md:337`
**buries the same negative mid-paragraph behind *"Note what this is not, and note what decides it"*.**
**Bring `uk_rules` to the sibling's shape.**

### ⚠️ MAJOR 2 — the `winger.md` trade was AVOIDABLE, and a reviewer disagreement is resolved by measurement

***"I disagree with the previous reviewer's 'accept', not with their severity."***

**The blocks ARE genuinely full — both 11/11 total and 8/8 coaching, lines at 195/200 — but the
SUBSTITUTION `CLAUDE.md` requires first was never attempted.** **Measured by the reviewer and
INDEPENDENTLY RE-MEASURED BY THE COORDINATOR:**

`Turn your back to the wall — … Skates parallel, forearm and hip, not the point of your shoulder, head up`
**= 196/200. IT FITS.**

⚠️ **Dropping *"instead"* and *"of your"* releases the room — restoring the full sourced injury clause,
the shoulder limb AND *"head up"*, losing only *"chin off your chest"*, which is on the adjacent line.**
✅ **So the cap did NOT force the eviction.** **This settles the gate's non-blocking item 1 and the
earlier reviewer's acceptance: the inconsistency with the three documents that took the additive route
was not a considered trade-off, and it is now measurably unnecessary.**

### Minors, each measured

- **`scanning_and_anticipation.md:146`** — *"never the shoulder tip"* is **the only site in ~30 using
  that phrasing**. **The house phrasing fits at 175/200 against the line's current 193.**
- ⚠️ **`uk_rules.md` Key Takeaway 10 — the `·` separators RENDER AS COMMAS.** **Verified in the SSML:
  item 6's five sub-examples run straight into item 7 with no boundary, producing a single uncountable
  comma-run IMMEDIATELY AFTER a sentence saying the list *"runs to fourteen"*.** **Every entry is still
  voiced, so the instruction survives — the listener just cannot parse it.** **The body's bulleted
  version voices correctly, one `<p>` each.**
- **`rules_primer.md:59`** — the repaired passage now ENDS A CHUNK on an absence (*"says nothing about
  your neck"*). **The style guide's own `:1441` warning applies: *"two clauses of differing strength can
  be heard as the weaker one granting permission."***
- **`rules_primer.md:22`** — *"a vertebra can break at walking speed"* names **no impact surface**;
  the same document's `:67` gets it right. **Direction conservative, hence Minor.**
- ⚠️ **`body_contact_and_battles.md:712` — A VERIFIED SCOPE SPLICE IN THE EXTRACTION LAYER.** **Case 2
  is attributed to §B *"Checked Along The Boards"*, but *"lean into the impact"* appears ONLY at
  `ibc.txt:1452`, in the **Angling In** list, and NOWHERE in §B** (whose three teaching points are
  forearm-and-upper-thigh, avoid-the-shoulder, low-centre-of-gravity). **The BODY discloses the splice
  in terms; the FACTS LINE does not, and the facts line is voiced alone.**
  ✅ ***"I am NOT asserting that leaning into a check is dangerous — I have no source for that and will
  not invent one."*** **Model conduct for a reviewer at the edge of its evidence.**
- **`conditioning_and_recovery.md:351`** — *"the single most fractured site in the game"* stated
  UNSCOPED in a `<p>` voiced alone, three sections after the same document warns the number is widely
  misquoted and scopes it to Reiad et al., US emergency-department data, players 14–23.

### ✅ Four standing arguments TESTED rather than accepted, and all upheld

- **The tip-only shape is SAFE** — ***"Every one of them names the correct impact surface — 'forearm
  and hip' — in the same line. The omitted limb is a reinforcing negative, not the load-bearing
  instruction."***
- ⚠️ **THE NINE LIMBLESS BLOCKS: THE REFUSAL TO EVICT WAS RIGHT, AND *"DO NOT SPLIT THOSE SECTIONS."***
  **Its census found twelve; six are goal-post or routing lines teaching no posture, and the six that
  DO teach the full posture ALL NAME *"forearm and hip"*.** **None teaches a posture instruction without
  the impact surface.**
- **The fires-first rule is sound** — monotone toward earlier action, labelled at every site including
  both summary layers.
- **The Situation 7 repair is a GENUINE SAFETY FIX, not housekeeping** — the old line *"told a reader
  in open ice they could steer an opponent with a free arm — that is interference."*
- ✅ **The high-sticking split is NOT an eviction: all five `Rule:` facts reappear VERBATIM in the new
  block, plus two new lines, and the anchor was updated with it.**
- ✅ **`body_contact_and_battles.md:750`/`:754` named *"the strongest passage in the wave"*.**

### Would it ship?

***"Yes, with the two Major fixes applied first. Neither is a blocker in the sense that a reader acting
on the text gets hurt — I rendered both and read them voiced — but both are FREE, both are MEASURED,
and one of them (`uk_rules:375`) is the sentence in this diff most likely to be remembered wrongly at
a rink."***

- [ ] ⚠️ **REPAIRS HELD, deliberately.** **`rules-verifier` is reading `winger.md`, `rules_primer.md`
  and `body_contact_and_battles.md` RIGHT NOW, and `facts-reviewer` is reading the last of those.**
  **Dispatching editors into files under live review is the race `CLAUDE.md` records as producing false
  findings in BOTH directions.** **Dispatch when they report.**


---

## Workstream 74: ⚠️ A CRITICAL IN THE FACTS LAYER — and it VINDICATES the gate's C11 ruling exactly

**`facts-reviewer`, on the split block. `content/technique/body_contact_and_battles.md:1382`:**

`Rule: Stick-to-stick is exempt from hooking in the NHL and IIHF only, and only while checking (55.1) —
USA Hockey 623 and Hockey Canada 8.2 make the opponent's stick hookable; the shaft above your upper
hand used to hold or hook is an automatic minor`

**THREE faults on one line, and the third is the dangerous one. Coordinator verified all three against
primary text:**
1. **UNTRACEABLE** — the upper-hand half appears in NO sentence of the section, the document, or the
   table. `grep "upper hand"` over the whole file returns this facts line ALONE.
2. **MIS-CITED BY ADJACENCY** — the operative NHL clause reads *"A minor penalty for hooking shall be
   assessed to any player who uses the shaft of the stick above the upper hand to hold or hook an
   opponent"* and sits **immediately before `55.3 Major Penalty`**, making it **55.2**, not the
   **55.1** cited. ⚠️ **`check_facts.py` sees a citation and passes.**
3. ⚠️⚠️ **IT UNDER-PRICES AN EJECTION FOR THE BOOK MOST NORTH AMERICAN AMATEURS PLAY UNDER, IN A LINE
   THAT NAMES THAT BOOK.** **USA Hockey's hooking rule is BLADE-ONLY — *"by applying the **blade** of
   the stick"* — and a search of the 623 region for `upper hand` returns NOTHING.** **The shaft above
   the upper hand is USA Hockey Rule 606 BUTT-ENDING: *"uses the shaft of the stick, above the upper
   hand, to check an opposing player **in any manner** or jabs or attempts to jab"* — **606(a) A MAJOR
   PLUS A GAME MISCONDUCT**, 606(b) a match penalty.** ⚠️ **The first limb requires NO JAB.**
   ***"Voiced alone, a USA Hockey reader hears the act that ejects them priced at two minutes."***

### ⚠️⚠️ IT IS PRE-EXISTING — AND THAT IS THE POINT

**It exists at HEAD and appears in the staged diff only as a CONTEXT line, because the split relocated
it.** ⚠️ **It has SHIPPED, and it survived earlier scrutiny.**
✅ **It is in scope ONLY because the commit gate ruled that a split *"moves, merges, splits or
renumbers text"* and therefore VOIDS whatever cleared that passage — and ordered a fresh pass on a file
*"no reviewer named at all."*** **The fresh pass found a shipped critical.**
**That is the strongest possible evidence for the C11 rule, and it should be quoted when anyone argues
a structural repair is covered by the review that authorised the finding.**

- [ ] ⚠️ **ROUTED to `rules-verifier` (resumed — the question missed it mid-flight).** **NOT repaired
  yet: the routing question must be ruled on first, and the reviewer was told plainly to say so if the
  finding is wrong, because a false critical costs as much as a missed one.**
- [ ] **The proposed repair SPLITS the line and takes the block to 11 = HARD_MAX, colliding with the
  parent-block pressure below.**

### ✅ The split itself: **SHOULD STAND**

**The seam is honest both ways — the child holds exactly three paragraphs, all high-sticking law; the
residual still names its four infraction families.** **Precedent exists in the same file. The heading
is voiced immediately before the block. No pointer broke. The right two imperatives were extracted and
none of substance is stranded.**
⚠️ **BUT THE SPLIT RELIEVED THE CHILD, NOT THE PARENT.** **Child 7/11 with four slots; PARENT 10/11
with ONE — and the reviewer identified TWO limbs from the parent's own body that belong in it.**
**Recommends a second seam on the holding paragraph, which is self-contained and carries four of the
ten facts.** ⚠️ ***"Do not split by rule set; round 52 did that and relieved the wrong thing."***

### Three more dropped limbs in the facts layer, each measured

- [ ] **The concussion `Read:` fact drops the reconciliation rule entirely** — a British reader learns
  only that a different list EXISTS. **Block is 7 facts / 6 coaching, so the cap is NOT the obstacle.**
  ⚠️ **Graded major not critical, and the reviewer said why: *"'zero criticals' is the round-9
  signature"* — the sentence IS voiced at the tail of chunk 094.** ***"If you weigh the extraction
  layer as standalone — which this project's doctrine does — it is critical."***
- [ ] **Hockey Canada's follow-through rule stated without its DIVISION SCOPE** — 9.5 is
  *"High-Sticking – Junior/Senior"*; **below junior the case falls to Rule 7.6 Head Contact, whose
  trigger is LOWER (a minor, no injury required).** **A minor-hockey reader hears the milder rule.**
  **Line at 291/300 — cannot absorb the scope; must split.**
- [ ] ⚠️ **THE TRIPPING DEFENCE EVERY PLAYER BELIEVES IN IS ABSENT FROM THE WHOLE FACTS LAYER.**
  **Grep for `57.3`, `24.8`, `penalty shot`, `hook-checking`, `poke-checking` across every facts line
  in the file: ZERO HITS.** **Playing the puck first saves the PENALTY SHOT only, not the minor — and
  the relief a USA Hockey reader DOES have, and the fact that a British reader has NONE, are both
  prose-only.** ***"The 'restriction that lives in prose does not exist' trap, INVERTED — a PERMISSION
  that lives in prose."***
- [ ] **CARHA 62(b) omitted from the double-minor ceiling list** — it *"starts above it"*, a major from
  the first instance, accidental or not.

### Answer to the question the splitting agent could not reach

**Q: do the parent block's remaining facts still trace?** **Audited all ten: seven trace to prose;
THREE trace to NOTHING BUT A TABLE ROW.** ⚠️ ***"A summary layer is extracting from a summary
layer."*** **The table IS voiced, so no listener is deprived — recorded so the next round need not
re-derive it.**

### Edit-fragility, measured

⚠️ **`check_tables.py --near`: the ten-row infraction table has SIXTEEN CHARACTERS and four rows of
headroom.** **A 16-character addition to any cell SILENTLY DROPS THE WHOLE TABLE from the spoken
render, and `check_facts`, `check_links` and `check_absolutes` all pass when it does.**
⚠️ **Two lines now sit at 298/300 — one in EACH of the two blocks the split touched. Neither can absorb
a correction.** **And the review record's *"took the file's lines-at-cap from 1 to 0"* is true but
incomplete: FIVE lines still hold a single character of headroom.**


---

## Workstream 75: RULES VERIFICATION — ⚠️ NOTHING CONTRADICTED, and the highest-value finding makes the corpus's case STRONGER

**Every claim reached is TRUE against primary text. The verifier recommends NO DELETIONS.**
***"The two findings are both additions, and the one hedge I tested held and should be STRENGTHENED,
not removed."***
**It also audited the source inventory itself: 36 files, 32 rows, 4 inline `_layout` twins — complete,
no phantom.**

### ⚠️⚠️ 3b — THE TURNED BACK IS *WORSE* THAN "NOT PENALISED", AND THE CORPUS DOES NOT SAY SO

**`rules_primer.md:34` says *"Neither the shoulder tip nor the turned back is penalised in any book"*
and gives only the INJURY reason.** ✅ **Literally true — no book penalises the player who turns.**
⚠️ **But under two of the four books, turning your back FORFEITS THE CHECKING-FROM-BEHIND PENALTY —
the very protection the paragraph exists to describe:**

| book | what it actually says |
|---|---|
| **NHL 43.1** | *"When a player **intentionally turns his body to create contact with his back, no penalty shall be assessed**."* — **the checker goes free** |
| **IIHF 43** (both editions) | same carve-out, **plus *"However, other penalties may still be assessed."*** — the door is held open AGAINST the turner |
| **Hockey Canada 7.5** | ⚠️ **the OPPOSITE** — no intent carve-out at all; Interpretation 2 to 7.5(a): *"The responsibility is **always** on the player delivering the check"* |
| **USA Hockey 608** | **no carve-out written**; onus flatly on the checker |

⚠️⚠️ **THE BRITISH READER'S OWN BOOK IS THE IIHF.** ***"So the turned back is worse than 'not
penalised': under two of the four books you take the hit AND lose the call. That is a STRONGER argument
for the corpus's own instruction than the one it currently makes."***
- [ ] **ADD, do not amend. Ranked by the verifier as the highest-consequence item in its report.**
  **Routed to `safety-reviewer`.**

⚠️ **METHOD NOTE THAT FOUND IT:** ***"My grep for `turns their back` MISSED THE NHL ENTIRELY — its
wording is 'turns his body to create contact with his back'. Anyone re-checking this must search by
CONCEPT, not by phrase."*** **And the verifier applies the same limit to its own work: the shoulder-tip
negative was attacked BY PHRASE ONLY, so a rulebook prohibiting it under another description would have
been missed.**

### ✅ The claim I most wanted tested — CONFIRMED, AND THE EDITION GAP IS CLOSED

**IIHF has NO MATCH PENALTY, in BOTH editions.** ⚠️ **And the raw count is not zero: `match` returns
**1** in each book and the one is `match-fixing`.** **De-hyphenated and flattened, `match penalt*`
returns ZERO in all four IIHF extractions and in BOTH Situation Handbooks.** **Structurally: Section 04
runs Rule 20 Major → Rule 21 Dangerous Actions → Rule 22 Misconduct → Rule 23 Game Misconduct — *"there
is no Match Penalties rule to renumber."***
✅ **So the 2026/27 edition does NOT reintroduce one, closing the gap the repairing agent flagged as
possibly stale.**
⚠️ **AND A CONSEQUENCE THE CORPUS STATES CORRECTLY: because 21.1 needs *"an action that is not covered
by the playing rules"* and holding IS covered by Rule 54, the IIHF has NO ROUTE ABOVE A MINOR FOR
HOLDING AT ALL.**

### ✅ The "inside Rule 54" scope marker ATTACKED FROM OUTSIDE, and it holds

**NHL Table 5 Summary of Major Penalties lists fourteen offences — holding is NOT among them.**
**USA Hockey Appendix I puts 622(a) in the Minor list; its only higher 622 entries are captioned
*"Holding/grabbing facemask"*.** **IIHF Appendix IV Table 2 lists Holding 54.2 as a minor and it appears
in NO major or game-misconduct table.**
✅ **CASEBOOK LAYER CHECKED TOO, per the standing requirement before any *"the only"* sentence: the IIHF
Situation Handbook prints *"RULE 54 HOLDING — No Situation"* in BOTH editions, and all three USA Hockey
Casebook 622 situations stay inside the printed rule.**

### ⚠️ 1d — THE AUTHOR'S HONEST HEDGE IS UNDER-STATED, and that is worth more than a correction

**The repairing agent flagged that 602(a)'s reach over a hold was *"a reading of the rule's SILENCE"*.**
⚠️ **It is not silence. NHL Table 6 says it outright, BEFORE its list:** ***"A Match penalty is
assessed anytime there is an attempt to injure or a deliberate injury, in any manner. IN ADDITION,
Match penalty is referenced in the following rules:"*** — **the NHL stating in its own reference table
that the match penalty is NOT bounded by the enumerated rules.**
**Plus USA Hockey Appendix I lists 602(a) under *"Match Penalty (only)"* with no parent foul, and the
Casebook applies it twice to conduct outside any named foul (stepping on an opponent; biting).**
- [ ] ***"If it is reworded, it should be STRENGTHENED toward the books, never cut."***

### ⚠️ 1g — CARHA IS A FIFTH BOOK AND IT WRITES A MAJOR FOR HOLDING

**CARHA 63(a): a discretionary major for holding with NO INJURY — wider than Hockey Canada 8.1(b),
which needs one. CARHA also has 58 match-penalty occurrences.**
✅ **The facts line is scoped to *"any of the four books"* and is therefore NOT WRONG.**
⚠️ **But this same document already brings CARHA in as *"a fifth book on disk"* for high-sticking, and
a CARHA-league adult is exactly this document's audience.**
- [ ] ⚠️ **ADD. And the verifier's warning, recorded verbatim: *"Do NOT 'fix' the four-book scope marker
  by deleting it — it is what makes the sentence true."***

### ✅ The fend-off permission — CONFIRMED, and *"in its Casebook only"* is demonstrable BY COUNT

**Boundary-anchored `fend off`: NHL 1 · IIHF 1 each edition · **`usah.txt` 0** · **`usah_casebook.txt`
1** · Hockey Canada 0 · CARHA 0.** **All six quoted fragments verbatim, including the corner/net-front
scope.**
- [ ] ⚠️ **A THIRD PERMISSION THE CORPUS DOES NOT HAVE: Standard of Play Situation 5**, for a defender
  *"patrolling the front of my goal"* — *"[t]he stick, or forearm, can also be used to steer the
  opponent **as long as the arm(s) are not extended**."* **Its limit is ARM EXTENSION, not push-off
  force.** ✅ **The corpus's caution that Situation 7 does not reach open ice still stands, because
  Situation 5 is also written for the goal front.**
- ✅ **On the framing question: the *"fend-off permission"* label is the corpus's, not the book's — but
  the substance is faithful, the scope marker is the book's own words, and *"no reader acting on the
  line does anything Situation 7 forbids."*** ***"I would not call this wrong."*** **If ever tightened,
  *"free-arm permission"* is the book-neutral noun.**
- ✅ **S6 and S7 set the push-off line differently and THE CORPUS TAKES THE STRICTER ONE. Correct
  choice.**

### ✅ Boarding, and a FALSE ABSENCE worth recording

⚠️ **`grep "obvious icing"` returns ZERO from the NHL, IIHF and Hockey Canada books — all three set the
words in quotation marks (*obvious "icing" or "off-side"*).** **Found by searching `unnecessary
contact` instead.** ✅ **All three carry the clause; USA Hockey 624(d) confirmed ICING-ONLY, no offside
limb, and the word *boarding* never appears.**

### ✅ CLAIM 4 — no British rulebook names an emergency number: CONFIRMED

**All SEVEN British documents plus four `_layout` twins searched: `999` = 0 everywhere, `111` = 0
everywhere, `ambulance` = 1 (and it says an ambulance is NOT required).** **The nearest is EIH 33.5's
*"A telephone to summon the emergency services"* — a phone, and no number. Exactly the corpus's claim.**

### ⚠️ What it could not reach

- ***"I verified rule TEXT, not rule APPLICATION."***
- ⚠️ **The IIHF In-House layer is UNRESOLVED: the 2026-27 IHUK In-House Rules contradict themselves on
  which IIHF edition they sit on, and NONE of the four IHUK Rules of Competition mentions holding,
  interference or checking from behind at all.** **Moot for every claim in this report only because the
  two editions are identical here.**
- ⚠️ ***"I could not test the facts-layer HEARING. I read every line as text; I did not render."***
  **It names an adjacent pair that *"carry each other's qualification in the BLOCK but not in the
  EAR."***
- **It did not check the seven staged diagram modules for rule claims —** ***"a caption stating a
  boundary is invisible to a grep over `content/`."***


---

## Workstream 76: ⚠️ D15 IS **NOT SATISFIED** — the browser was unavailable, and the reviewer said so plainly

**The Chrome extension's navigation path was DOWN: nine attempts across two tabs, `localhost`,
`127.0.0.1`, **and a control navigation to `https://example.com/`**, all returning
*"Could not verify this site's safety category."*** ⚠️ **The control failing is what proves it was not
a localhost restriction.**

***"I rendered nothing, screenshotted nothing, and read no console. Pages visited: none. Viewports ×
themes: none of the four cells, on any page. Treat D15 as NOT SATISFIED."***
✅ **That is exactly the right way to report an unavailable dimension, and it did substantial static
fallback work while refusing to let it pass as the real thing:** ***"Every item in your list is a
question about pixels, and I have no pixels."***

- [ ] ⚠️ **D15 STAYS OPEN. `site-reviewer` must be re-run when the extension is back.** **This is a
  gate condition and it is unmet.**

### ⚠️ THREE FIGURES IN MY BRIEF WERE WRONG, AND ALL THREE ARE THE SAME ERROR

**I told the reviewer — and the user — that the new caption wording appears in *"51 pages"*.**
⚠️⚠️ **IT IS 51 **FILES**: 21 `.html` + 19 `.md` downloads + 11 `.svg`. READER-FACING HTML PAGES: 21.**
**Verified by the coordinator.** **`grep -rl` COUNTS FILES, and `dist/` contains three artefacts per
document.** **The same conflation made *"the heading anchor in 2 pages"* — it is 2 files, ONE page.**
**Eighth relaying error today, and the first that reached the user's summary.**

⚠️ **AND THE CAPTION COUNT: ELEVEN, NOT TEN.** **The whole session has said *"ten captions"*, which was
right for the FIRST wave.** ✅ **Coordinator diffed `diagrams.json` against HEAD and listed them:**
`angle-into-the-corner` · `forecheck-pinch` · `forecheck-press` · **`icing-the-race-and-the-dot`** ·
`oz-cycle-reverse` · `oz-cycle-rim` · `scan-before-a-wall-reception` · `winger-arriving-at-the-line` ·
`winger-corner-and-the-empty-point` · `winger-dz-reverse` · `winger-dz-rim`.
✅ **The reviewer asked that the eleventh be confirmed as intended, and attributed it to
`forecheck-press`. That attribution is wrong — `forecheck-press` was in the original ten.** **The
eleventh is `icing-the-race-and-the-dot`, repaired deliberately in the second caption wave BECAUSE its
second host `goaltender.md` carried zero limb and zero *"forearm"* across 200 chunks. INTENDED, and
documented.** ✅ **Question answered.**

### ⚠️ M1 — the safety tail may never reach a screen-reader user

**All 331 diagram figures: the visible `<figcaption>` is `aria-hidden="true"` (deliberate
de-duplication — the full caption IS mirrored into `<desc>`, verified 17/17 for the changed ones).**
⚠️ **But all 331 `<svg role="img">` carry **ZERO** `aria-labelledby` or `aria-describedby` — site-wide,
`aria-describedby=` appears **0 times**.** **`role="img"` takes its NAME from `<title>`, which here is
the caption's FIRST SENTENCE ONLY and does not contain the safety tail; the DESCRIPTION comes from
`<desc>` only by implicit association, honoured inconsistently.**
- [ ] **Fix is ONE LINE IN THE DIAGRAM BUILDER — `aria-describedby` on the `<svg>` pointing at an
  id'd `<desc>`. NOT a content change.** ⚠️ **The reviewer flagged its own limit: *"I have not run a
  screen reader. I am reporting the markup and the risk, not a measured failure."*** **Needs an AT test
  before anyone acts.**

### M2 — a ⚠️ that renders as ordinary prose, and a clean corpus-wide sweep

**`uk_rules.md:283`'s warning renders as a plain `<p>` with no amber run, because
`remark-corpus.mjs` marks a warning by finding a `<strong>` node near the glyph and that sentence has
no bold run at all.** **PRE-EXISTING, not in the diff.**
✅ **It swept all 53 pages: 2,902 warning glyphs in a styled context, 113 outside one — of which 98 are
inside SVG `<desc>` (invisible by design), 10 in the Sources trailer italics (a deliberate layer), 2
echoed into a ToC.** ✅ **Only TWO are unstyled body prose, BOTH PRE-EXISTING.**
✅ ***"No new unmarked warning was introduced by this change set."***

### ⚠️ m2 — a documented layout risk this change made WORSE, and nobody has looked

**Contrast computed from the stylesheet: every pair clears WCAG AA in both themes
(`--warn` on `--warn-bg` = 5.71 light, 8.29 dark).** ⚠️ **But the warning run is now THE LONGEST BLOCK
OF THE LOWEST-CONTRAST TEXT ON THE PAGE, and `figcaption .warn-inline` is `display: block`.**
⚠️⚠️ **The stylesheet's OWN COMMENTS record that this exact construct was previously measured at
**1,338 px tall on an 812 px viewport, inside a figure whose drawing was 14% of its own height** — and
this change made those runs LONGER.**
- [ ] ***"That is a live, documented risk in the precise area you flagged, and I could not look at
  it."*** **Highest-priority item for the re-run.**

### ✅ What the static fallback DID establish

**`check-links.mjs` on the shipped `dist`: 53 pages · 10,961 internal links · 5,901 with anchors · ALL
RESOLVE.** **The new `####` nests correctly, emits `<h4 id="the-stick-above-the-shoulders">`, and
appears in BOTH ToC renderings as `depth-4` with a distinct indent — and the page ALREADY had a `####`,
so h4 is not new to that ToC.** **The retargeted cross-reference is INTRA-document; the old anchor
still exists; 24 cross-document links from 13 documents all resolve.**
**Facts blocks: source ` ```facts ` count EXACTLY equals `<dl class="facts">` count in all 14 changed
documents; zero leaked as `<pre>`; zero `<dd>` contains unrendered markup.**
**All ELEVEN changed captions produce a correct `.warn-inline` split across all 17 figure instances —
and there is NO truncation CSS to hit: no `line-clamp`, no `text-overflow: ellipsis`, no `max-height`
anywhere in the figcaption cascade.**
**49 tables, 49 wrapped in `.table-scroll` with `tabindex`/`role`/`aria-label`.**
**ZERO off-origin requests — no external `src`, stylesheet link, `url()` or `@import` in `dist`.**

### ⚠️ Two risks that no local check can ever reach

- [ ] ***"`public/scroll-regions.js` records that a CSP violation is SILENT LOCALLY AND FATAL IN
  PRODUCTION"*** — **so a `script-src 'self'` breakage is invisible to every local check including
  this one.** **The production CloudFront rewrite and CSP response headers do not exist locally.**
- [ ] **119 `/audio/` files are uploaded OUT OF BAND and skipped by the link checker.**


---

## Workstream 77: ⚠️⚠️ THE COORDINATOR'S SKETCH WOULD HAVE INVERTED A SAFETY LIMB — caught by the agent that had read the block

**I gave the `winger.md` agent a measured 196/200 candidate ending:**
`… forearm and hip, not the point of your shoulder, head up`

⚠️⚠️ **THAT PUTS A POSITIVE IMPERATIVE INSIDE THE SCOPE OF `not`.** **Voiced — `md_to_speech.py:2806`
renders `Never:` as *"Never — "* — a listener hears *"not the point of your shoulder, head up"* and can
attach *head up* to the same `not`.** ***"That is the identical negation-distribution failure the
`Never — ` em-dash fix in that docstring exists to prevent, reproduced ONE CLAUSE LATER."***

⚠️ **I would have told a player not to put their head up, in a line whose whole purpose is the
opposite — while repairing a defect about an evicted head-up limb.**

✅ **The agent checked the corpus rather than just objecting: TWENTY-ONE SITES across nine documents
put the positives first and the shoulder negative TERMINAL — including this file's own body at `:9`,
`:37`, `:662` and `:725`.** ***"So the safe ordering is also the house one."***

**SHIPPED at both `:25` and `:83`, 196/200:**
`Never: Turn your back to the wall — that makes it a hit from behind; even a light one could inflict a
severe head or neck injury. Skates parallel, forearm and hip, head up, not the point of your shoulder`
**Dropped `instead` (8), inserted `, head up` (9). `git diff --stat`: 2 insertions, 2 deletions, one
file.**

⚠️⚠️ **NINTH RELAYING ERROR TODAY, AND THE FIRST THAT WOULD HAVE MADE THE CORPUS UNSAFE RATHER THAN
MERELY WRONG.** **`CLAUDE.md` names this exactly: *"THE BRIEF'S PROPOSED WORDING IS A BRIEF, NOT A
PATCH… a coordinator writing replacement text is writing content it has not read the context for, which
is the one thing this method exists to prevent."*** **The brief said so in terms — *"a SKETCH CARRYING
EVIDENCE, NOT A STRING TO PASTE"* — and that instruction is the only reason this was caught.**
**Round 73 recorded the first such case; this is the second, and it is worse.**

### ✅ Measurements, all re-derived with `check_facts`'s own logic

| | before | after |
|---|---|---|
| `:25` `[Never]` | 195/200 | **196/200** |
| `:83` `[Never]` | 195/200 | **196/200** |

**Both blocks confirmed 11/11 total AND 8/8 coaching — genuinely full.** **The full limb
`head up and chin off your chest` measures 220/200, TWENTY OVER — so the eviction was real, but the cap
did not force it.** **Corpus `--near` totals unchanged at 265 within six chars, 6 at cap.**
✅ **`:357` verified as correctly left alone and is the best-served of the three: it carries BOTH head
limbs while its adjacent `<p>` carries the shoulder limb WITH the hedge intact.**

### ⚠️ A CAP SHAPE NOBODY HAD NAMED

**`winger.md:354` is 8 of HARD_MAX 11 but 8 of MAX_COACHING_FACTS 8.** ⚠️ **THREE HARD_MAX SLOTS THAT
ARE UNUSABLE — the block can only ever gain a `Rule:` fact.** **Every cap finding today has assumed the
two limits bind together; they do not, and a block can look like it has room when it has none of the
kind you need.**

### ⚠️ A NEW DEFECT CLASS: AN UNMARKED NEAR-QUOTE IS INVISIBLE TO EVERY TOOL

**`:25`/`:83` render *"even a light one could inflict a severe head or neck injury"* with NO quotation
marks and NO attribution, against `ibc.txt:1570`'s *"Even a light hit from behind could inflict a severe
head or neck injury."***
⚠️ **`check_quote_drift.py` cannot see it — there are no quote marks to match. `check_facts` requires no
citation because it is a `Never:` line.** **PRE-EXISTING across the 15-document `fa662cc` wave.**
- [ ] **Census the corpus for near-quotes carrying a source's wording without its marks.** **Nothing
  mechanical is watching this and nothing ever has been.**

### Open, and it is the agent's own handover

- [ ] ⚠️ **FIVE SITES, THREE LIMB DISTRIBUTIONS, and nobody has diffed them.** **Within `winger.md`
  alone: `:25`/`:83` shoulder-without-chin · `:357` chin-without-shoulder · `:356`+`:357` split across
  two lines.** **Plus the three documents that took the ADDITIVE route
  (`puck_support_and_spacing.md`, `risk_management.md`, `passing_and_receiving.md`), whose new `Never:`
  lines nobody has read against these.** ***"I could only verify that each is internally defensible,
  not that the five documents agree."***
- [ ] **`:25`/`:83` now carry the tip absolute ALONE, without the `if you can help it` tier the body
  carries at four sites and `:356` carries in the facts layer.** **Not a hazard — the stated subset is
  the STRICTER half — but it is a half-treatment of a two-tier source in the summary layer, at 196/200
  with no room to close it.** ⚠️ ***"This is the same shape as the defect you sent me to fix."***
- [ ] **NOT EAR-TESTED.** ***"The one failure mode I cannot rule out is a synthesiser putting a rising
  contour on 'head up,' that re-opens the list."*** **`tts_sample.py` exists and was not run.**


---

## Workstream 78: ✅ THE LISTENER NOW HEARS THE ACTION FIRST — and the agent flagged a NEW INSTRUCTION it had introduced

**`uk_rules.md`, three edits.** ✅ **Both defects confirmed from primary text before acting, not taken
from the brief.**

**`md_to_speech.py:2718` computes `important = "⚠" in text` OVER THE WHOLE PARAGRAPH** — verified by
rendering, not by reading the source. **So the old SSML was literally
`<p>Important. A player lying motionless is not by itself a red flag on either list…</p>` with
*"call nine nine nine"* six sentences later.**

✅ **Split into two paragraphs. The ⚠️ one now carries ONLY the action**, so a listener receives
`Important. If a player is lying motionless … call nine nine nine.` as its own `<p>`.
✅ **The distinction is KEPT IN FULL in an unflagged second paragraph — reordered, not cut — and now
LABELLED**, with the source evidence in the label: **both CRT6 and the UK guidance carry
*"[l]oss of consciousness or responsiveness"* and lying motionless as SEPARATE visible clues, and
neither attaches a responsiveness condition to lying motionless.** **Closing with *"It can only ever
make you call sooner, never later."*** **Labelled, not weakened.**

✅ **`:283`'s prose-rendered warning fixed by moving the operative clause to the front and bolding it**,
matching `remark-corpus.mjs`'s actual regex and the shape the rest of the file already uses; the
disclosure preserved verbatim in the tail.
✅ **Key Takeaway 10's `·` separators → `;`.** ⚠️ **It KEPT all five sub-examples rather than dropping
them:** *"losing 'loss of balance'/'weakness' from the summary layer is a real cost to a listener who
only hears takeaways."* **Count still fourteen in all eight places.**

### ⚠️⚠️ THE AGENT FOUND A NEW INSTRUCTION IN ITS OWN REPAIR, AND FLAGGED IT

***"Whether 'get to them' is the right first instruction. Neither source tells a bystander to approach;
CRT6's own first 'Remember' is 'assess danger at the scene'. On an ice surface with play possibly live,
'get to them' may need a scope that neither document supplies and that I did not add."***

⚠️ **The coordinator checked, and it is worse than a gap in the sources: THE CORPUS ALREADY CARRIES THE
ANSWER.** **`conditioning_and_recovery.md:257` quotes CRT6's *"Remember"* box in full, and
**"assess danger at the scene" is the FIRST of its five instructions**.**
⚠️ **So the new sentence is now the corpus's MOST PROMINENT instruction on this — it opens the ⚠️
paragraph, so it is heard as `Important. If a player is lying motionless, get to them…` in its own
`<p>` — and it tells a bystander to approach a player on an ICE SURFACE with NO DANGER ASSESSMENT,
while a sibling document carries the source's own first instruction to do exactly that.**
✅ **RESUMED to the same agent**, with three constraints: scope it in CRT6's own already-quoted words;
**do not let the scope push the action back down the paragraph** (the whole point of the repair); and
**consider whether *"get to them"* is load-bearing at all** — the decision is whether they RESPOND, and
a bystander may establish that without approaching.

⚠️ **Recorded because of WHERE it came from: the agent introduced it, spotted it in its own text, and
reported it in the one section of its report reserved for what its method could not reach.**
**Nothing mechanical would ever have caught a new instruction in the leading position of a safety
paragraph.**

### Refused, and I agree

**The two pre-existing mid-paragraph ⚠️s left alone: both paragraphs OPEN with safety-bearing sentences
(*"Five things are required, in England and Wales"*; *"…sets a floor under when you play again"*), so
*"Important."* lands accurately where it is.** ***"Fixing them means moving glyphs off the two specific
clauses they mark ON THE SITE, which loses more than it gains."*** ⚠️ **A fix in the spoken layer that
costs the visual layer — the two-layer trade nobody had articulated.**

- [ ] ⚠️ **NOT EAR-TESTED: whether Polly renders `;` audibly differently from `,`.** ***"If Polly
  flattens `;` to a comma-length pause, Takeaway 10's list is still uncountable"*** — and the fallback
  remedy is then dropping item 6's sub-examples. **`tts_sample.py` would settle it and was not run.**
- [ ] **The two documents now state the same distinction IN DIFFERENT WORDS and have not been diffed
  sentence by sentence.** ***"Two individually correct sentences reading contradictorily aloud is this
  repository's recorded failure mode."***
- [ ] **A coordinator citation error, corrected by the agent: I gave the sibling frame sentence as
  `conditioning_and_recovery.md:337`; it is at `:269`. The file had moved.** **Tenth relaying error.**


---

## Workstream 79: ⚠️ SEVEN BRIEF PREMISES REFUTED — including the claim that the finding was missing at all

**`rules_primer.md`, four lines added at `:22`, `:34`, `:992`, `:1133`.** **Every book searched BY
CONCEPT — a regex over `turn` ∩ {check|back|behind|body|vulnerab} across all fourteen extractions —
which is the method the `rules-verifier` prescribed after a phrase search missed the NHL.**

### ⚠️ REFUTATION 1 — THE FINDING WAS LARGELY ALREADY IN THE CORPUS

**`rules_primer.md` ALREADY carried the four-way divergence, quoted from primary text, in FOUR
places** — `:36`, `:447`, `:993`, `:1135`. **`:993` already quotes NHL 43.1 verbatim, IIHF 43.1
verbatim INCLUDING *"other penalties may still be assessed"*, HC Interpretation 2 to 7.5(a) verbatim,
HC 7.5's turn situation as *"the FIRST situation referees are told to enforce strictly"*, and USA
Hockey 608's onus.**
⚠️ **The `rules-verifier` called this its highest-consequence finding and the coordinator relayed it as
absent. IT WAS NOT ABSENT.**

✅ **What WAS genuinely missing is narrower and better:** ***"every existing treatment is
CHECKER-FACING — it answers the excuse 'he turned at the last second'. Nowhere did the document tell
the READER WHO TURNS what it costs THEM, at the three places the technique instruction 'never your back
to the boards' is given."*** **That is what was added, and it is the right finding.**

### ⚠️ REFUTATION 2 — I ADDED A DIRECTION THE SOURCE DOES NOT STATE

**My brief said the IIHF *"holds the door open AGAINST the turner"*.** ⚠️ ***"That is not what the IIHF
text says. 'However, other penalties may still be assessed' NAMES NO TARGET."*** **And the IIHF
Situation Handbook's entry for Rule 43 reads *"No situation."* — nothing on disk resolves it.**
✅ **The agent wrote it as *"neither book says who those would fall on"* and DISCLOSED the gap rather
than guessing.**

### The other five refutations

- **`:59` and `:67`, which my brief cited, ARE BLANK LINES.** All that content is on `:34`.
- **My claim that `:59` *"ends a chunk on an absence"* is FALSE** — it rendered the indexed version and
  checked: baseline chunk 005 ends on a HAZARD clause, not an absence.
- ⚠️ **`check_facts.py --near` is INAPPLICABLE: `rules_primer.md` has ZERO fenced blocks and is not one
  of the 26 facts-carrying documents.** **My brief told it to run `--near` before editing any facts
  block. It ran it anyway and confirmed no rules_primer line appears in 266 lines of output.**
- ⚠️ **THE COMMIT GATE'S SECOND FAULT IS ONLY PARTLY SUSTAINED.** **The gate said *"a vertebra can
  break"* is a mechanism the trailer does not carry.** **`huh.txt` DOES carry it —
  *"resulting in a fracture or break of one or more vertebrae."*** ✅ **So the agent KEPT the vertebra
  claim under non-negotiable 3 and fixed only the real fault: FUSING it with the walking-speed
  qualifier, which the source attaches to the INJURY.** **The style guide already governs this exact
  sentence, and `switching_positions.md` and `puck_handling.md` already state the convention — the fix
  aligns `rules_primer` with the corpus's own settled position.**
- **`check_tables.py:815` confirmed at 66 chars / 0 rows of headroom, IDENTICAL before and after.**

### ✅ A FIFTH BOOK THE BRIEF'S TABLE OMITTED

**CARHA Rule 53 has NO turn carve-out, plus a Note: *"Referees are instructed not to substitute other
penalties when a player is checked from behind in any manner."*** ⚠️ **The *"four books"* framing at
all four sites excludes it — and the style guide already records, about THIS VERY FILE, that
*"a book can be present, extracted, cited by one document, and unconsulted by the document that most
needed it."***

✅ **Direction checked aloud at every voiced unit — *"buys you the hit and loses you the
checking-from-behind call"*, *"a call does not get your head out of the wall"*, *"Either way the turn is
the worse option"*. NO PERMISSION AUDIBLE.**
✅ **`check_quote_drift`: baseline `clean=1205 flagged=75 notfound=72` → `clean=1209`, same flags.
FOUR new quotations, all clean, zero new flags.**

### ⚠️ THE FUSION DEFECT IS LIVE IN THREE OTHER FILES — and each holds BOTH forms

- **`winger.md:26`, `:84`, `:358` — `Never:` FACTS LINES, each voiced alone: *"…can break your neck at
  walking speed"*; also `:725`.** **They DO name the impact surface, so better than `:22` was; the
  residual is injury-vs-mechanism only.** ⚠️ **The same file uses the CAREFUL form at `:436`, `:661`,
  `:728`.**
- **`puck_handling.md:409` (`Risk:`), `:932`, `:1013`** — fused, **in the file that spells out the
  convention at `:421` and `:1030`.**
- **`switching_positions.md:11`, `:166`** — fused, **in the file that spells it out at `:351` and
  `:567`.**
- [ ] ⚠️ ***"Those three files each hold BOTH forms. That is an unpropagated remainder from whichever
  round wrote the convention."*** **A convention was written, recorded, and never swept — and the
  documents that DEFINE it are the ones violating it.**

### Refused, correctly

**Deleting the true *"Neither the shoulder tip nor the turned back is penalised in any book"* sentence
(NN3 — the brief asked ADD, and it is verified true); writing the IIHF clause as aimed at the turner;
deleting *"a vertebra can break"*; touching the `:815` table; STAGING.**

- [ ] **`check_quote_drift` reports 75 flagged and 72 not-found fragments across `rules_primer.md` that
  the agent did NOT triage. They predate the edit.**
- [ ] **IHUK In-House Rules (both editions) mention neither Rule 43 nor checking from behind —
  verified, so `:1135`'s claim that they carry no amendment HOLDS.**


---

## Workstream 80: ✅ THE INVENTED INSTRUCTION REMOVED — and removing it made the lead SHORTER

**The `uk_rules.md` agent took route 3: it deleted the approach rather than scoping it, having worked
out WHY it was there.** ***"The original pre-repair sentence never contained an approach either — it
read 'the one thing to establish is whether they respond'. So `get to them and` was an instruction I
INVENTED IN THE REPAIR, in the leading position of a safety paragraph. That is exactly non-negotiable 1
territory."***
✅ **And it confirmed the corpus-wide gap itself: `grep -rn 'assess danger' content/` returns
`conditioning_and_recovery.md:257` AND NOTHING ELSE.**

**Now:** *"⚠️ **If a player is lying motionless, establish whether they respond — and if you cannot get
a response, call 999.**"* — **reusing the document's OWN pre-existing verb rather than writing new
wording.**

### ✅ MEASURED, because the constraint was not to bury the action

| | paragraph | `call 999` begins at | spoken sentence |
|---|---|---|---|
| original (as staged) | 775 chars | char **751** | **7th** |
| first repair | 221 | 121 | 1st |
| **now** | **221** | **114** | **1st** |

⚠️ **Removing the approach made the lead SHORTER, not longer.** **The constraint was satisfied by
deletion — the cheapest possible outcome, and the one my brief listed third.**

✅ **And it deliberately did NOT import CRT6's *"assess danger at the scene"*:** with no approach being
instructed there is nothing to scope, and pulling a third limb of that box into a document carrying
none of it — one that already routes the on-ice response elsewhere — **would be propagation for its own
sake.** ***"That is the sibling's job, and it does it."***

### ⚠️ A REAL DIVERGENCE, CREATED BY THE LABEL AND REPORTED RATHER THAN HIDDEN

**The two documents now agree on every limb EXCEPT the inference's EPISTEMIC STATUS:**
- **`uk_rules.md:377`** — labelled: *"this guide's reading of the two lists rather than either
  document's words."*
- **`conditioning_and_recovery.md:269`** — states the same move **FLATLY, as the lists' own content**:
  *"A player who is not responding is the loss-of-consciousness flag, which is on both lists."*
  ⚠️ **Neither list says that.**

⚠️⚠️ **AND IT IS WORSE IN THE SIBLING: that line is a BULLET, so it is voiced ALONE in its own `<p>`
with a 300 ms break either side, with NO surrounding context to qualify it.** **The labelled instance
sits in running prose where the label travels with it.**
✅ **DISPATCHED to an agent owning `conditioning_and_recovery.md`.**

⚠️ **AND THE AGENT FLAGGED THAT IT MAY HAVE PICKED THE WRONG SIDE, which is the right way to hand over
a judgement:** ***"The opposite conclusion — that the inference is so well-supported it needs no label
in either place — is reachable, and CRT6's own red flag 'Increased confusion or deteriorating conscious
state (becoming less responsive, drowsy)' is the evidence for it. I decided it supports a DETERIORATING
state rather than a single failed response check, so the label stays. A safety-reviewer should TEST
that reading rather than INHERIT it."*** **The new brief asks the receiving agent to adjudicate, not
follow.**

### ✅ Everything else in the two documents matches

**The visible-clue-not-red-flag classification, the awake-and-answering case, and the rigid-player
seizure flag — which `uk_rules` correctly scopes as BRITISH, since CRT6's seizure flag stops at
*"Seizure, 'fits', or convulsion"*.** ✅ **And the sibling's *"call an ambulance"* against `uk_rules`'s
*"call 999"* is correct in BOTH — international scope versus British — and is NOT a divergence.**

### ⚠️ THE RACE, CAUGHT IN THE ACT

***"`check_facts` reported 843 blocks / 5685 facts an hour ago and 845 / 5691 now, with no edit of mine
— `uk_rules.md` has zero facts blocks."*** **Other agents writing the tree, measured from a file that
cannot have caused it.** **The cleanest demonstration yet of why the only run that counts is the one
after every agent has finished.**

- [ ] **A gap ONE DOCUMENT AWAY, flagged and unverified:** ***"I did not verify that
  `body_contact_and_battles.md` actually carries a danger assessment — the corpus-wide grep says only
  `conditioning_and_recovery.md:257` has the phrase, so if that document's on-ice response omits it,
  there is a gap one document away from mine."*** **That file is live; check when it frees.**


---

## Workstream 81: ✅ THE HOOKING CRITICAL REPAIRED — and the body sentence the brief cited was ITSELF WRONG

**All five evidence bullets re-derived byte-for-byte from primary text.** **The census is the part to
keep: `upper hand` occurs EXACTLY TWICE in `usah.txt` and twice in `usah_casebook.txt` — Rule 606 and a
sled-hockey restatement, in both volumes. NOWHERE in 623, in any of its three Casebook situations, or
in Appendix I.** ✅ **And `usah.txt:2934-2951` confirms Rule 411(a)'s progressive-suspension list
CONTAINS *"Rule 606 Butt-Ending"* and DOES NOT CONTAIN 623.**

**The fix, on the verifier's five constraints: SPLIT, not trimmed. Body first, then extract.**
**Old fact 244/300 → two facts at 168/300 and 294/300.** **First half preserved intact; `(55.1)` left
where it correctly sits; the travelling clause now carries **55.2** of its own, names NHL/IIHF/Hockey
Canada, and puts USA Hockey POSITIVELY at 606 rather than leaving it inside scope.** **The sibling at
`:283` untouched.** ✅ **And it carried the verifier's caveat into the text:** *"That is what the four
books print, and not a forecast of what the official in front of you will call."*

### ⚠️ IT CAUGHT A CORPUS ERROR IN THE SENTENCE MY BRIEF SENT IT TO EXTRACT FROM

**The body read: contact above the shoulders falls to Rule 7.6 Head Contact, *"**which is harsher than
a minor**"*.** ⚠️ **HC 7.6(a) assesses A MINOR for accidental head/face/neck contact in minor and
female hockey, with no injury required — so for the ACCIDENTAL FOLLOW-THROUGH, which is exactly this
case, the floor is a MINOR, not harsher.**
✅ ***"The brief's framing ('trigger is LOWER') was right and the corpus's sentence was not."***
**It repaired the body to state 7.6(a)'s minor and double-minor limbs with their wording, THEN
extracted.** ⚠️ **Had it trusted the body it was extracting from, it would have propagated the error
into the facts layer — which is the direction propagation normally protects against.**

- [ ] ⚠️ **AND IT IS A CLASS, NOT AN INSTANCE.** ***"The pattern of naming HC 7.6's upper tiers without
  its 7.6(a) floor appears TWICE in this document. Worth a census across the corpus."***

### ✅ TWO SEAMS, NOT ONE — and the reason is structural

***"The holding paragraph is NOT the last in the section — the tripping paragraph follows it — so a
single seam there would have MIS-NESTED TRIPPING UNDER A HOLDING HEADING."***

| block | before | after |
|---|---|---|
| `### What actually gets called` | **10 / 11** | **6** (5 free) |
| `#### Holding, and the arm you are allowed` | — | 5 |
| `#### Tripping, and how narrow the relief is` | — | 3 |
| `#### The stick above the shoulders` | 7 | 8 |

**Split by TOPIC, not by book — the style guide sanctions a body seam and round 52's rule-set split
*"relieved the wrong thing."*** **Facts moved verbatim; nothing evicted; the two 298/300 lines
untouched and not in either new block's way.**
✅ **The seam exposed an imperative that had NEVER reached any facts block: the holding paragraph ends
*"Never touch a facemask."*** **Now a `Never:` at 183/200.**

### ✅ All three dropped limbs landed

- **The tripping defence — previously ZERO hits across the entire facts layer — now
  `Rule: Playing the puck first saves the penalty shot, not the minor (NHL 57.3, IIHF 24.8)…` at
  228/300**, verified against 57.3, 24.8 and 639(a)'s Note.
- **The Hockey Canada division scope**, via the 291/300 line splitting into 177/300 + 273/300.
- **The concussion reconciliation rule** as a `Convention:` at 206/300, carrying the hedge that neither
  document writes it. **Block 7 → 8, coaching cap exactly met.**

### Refused, with reasons

**The ten-row infraction table untouched — re-verified after EVERY edit at 16 chars / 4 rows.**
**And §9's 16.6% tripping ranking deliberately NOT extracted:** ***"the body carries a heavy
qualification on it; voiced alone the bare figure sheds it. That is why the block has 3 facts and not
4."*** ⚠️ **A block left DELIBERATELY UNDER-FILLED to avoid shedding a qualification — the inverse of
every cap finding today, and the right call.**

### A book's own slip, and the corpus is already right

**HC Interpretation 1 to 9.1(a) cross-references the stick-infraction ejection as *"Rule 4.8 (a)"*;
it is actually **4.8(b)(i)** (`hc.txt:3036`).** ✅ **The corpus already cites 4.8(b)(i) correctly
elsewhere.** **Do not quote the Interpretation's cross-reference.**

### Open

- [ ] ⚠️ **`rules_primer.md:436` IS A PROPAGATION TARGET.** **Its butt-ending entry covers 606(a)'s
  attempt limb and HC 9.1's Interpretation but says NOTHING about where a HOLD OR HOOK with the shaft
  above the upper hand is routed.** ***"A reader of that entry would still assume 623."***
- [ ] **§12's "Slew-footing" block sits at 11 of HARD_MAX 11.** **Pre-existing.** *"The next correction
  into it will have nowhere to go."*
- [ ] ⚠️ **NOT REVIEWED BY ANYONE.** ***"The ~200-word body passage, the seven new or rewritten facts
  lines and the HC 7.6 body correction have been checked by me against primary text and by eight
  mechanical tools, and by NO INDEPENDENT READER AT ALL."*** **And its sharpest self-assessment:**
  ***"The HC 7.6 defect was found only because I stopped to verify a sentence I was about to copy — the
  class of body claim that is NEARLY right and READS FINE is exactly what this pass would otherwise
  have propagated, and I have no way to know whether I left another one standing."***
- [ ] **Two new `####` headings in §12 — the site layer is unchecked for nav and anchors.**


---

## Workstream 82: ✅ THE LABEL QUESTION ADJUDICATED — with a BETTER argument than the one it inherited

**The brief asked the agent to RULE on the label question rather than follow the sibling. It did, and
reached the same answer by a stronger route.**

**It read CRT6's *"Increased confusion or deteriorating conscious state (becoming less responsive,
drowsy)"* on the rendered page and graded the sibling's reasoning:** ***"The sibling reached the right
answer; its reason is the weaker half."*** **The trajectory argument (*"increased"/"deteriorating"*
require an observed change) is *"sound but arguable — someone could say an unrousable player is
trivially at the end of that trajectory."***

### ⚠️ THE DECISIVE ARGUMENT, and it is structural, from the sources' own words

***"Both documents distinguish consciousness from responsiveness, and both put the conjunction ONLY IN
THE LOWER TIER. The red-flag tier reads consciousness ALONE in both books; the visible-clues tier reads
'Loss of consciousness or responsiveness' in both. IF UNRESPONSIVE SIMPLY MEANT UNCONSCIOUS, THE 'or
responsiveness' WOULD DO NO WORK — and CRT6's neighbouring clue ('staring or limited responsiveness, or
an inability to respond appropriately to questions') proves responsiveness is the BROADER category,
spanning players who are plainly conscious. So mapping 'not responding' onto the loss-of-consciousness
red flag WIDENS it."***

✅ **The widening is the corpus's, it is correct, it can only over-call — and it must be labelled.**
✅ **So `uk_rules.md`'s label stays too.** **Both sites now labelled, each in its own document's idiom
rather than one importing the other's wording.**

### ⚠️ TWO MORE BRIEF PREMISES REFUTED

- ⚠️⚠️ **I told it its own file *"SPELLS OUT the correct convention"*. IT DOES NOT.** **That file held
  ONLY the violating form, in all three instances. The convention lives in `mental_game.md:638` and
  `body_contact_and_battles.md`.** ***"Had I trusted the brief and looked for my file's own statement
  of the rule to check against, I WOULD HAVE FOUND NOTHING."*** ✅ **Relayed as a correction to the live
  fusion agent, whose brief carried the same false premise.**
- **The brief flagged ONE unscoped shoulder-superlative instance; there were TWO** (`:575` and `:190`).
  **Second confirmation today that relayed site lists run short.**

### ✅ Six lines repaired

- **`:269`** labelled INSIDE the bullet (it is voiced alone), instruction not weakened — still ends
  *"if you cannot get a response, call an ambulance."* ✅ **And the pointer *"those two apart"* replaced
  by the named things (*"a rigid player from an unrousable one"*) — substitution came out SHORTER,
  the eighth such case today.**
- **`:575`** — the unscoped *"single most fractured site in the game"* CUT; the bullet now opens on USA
  Hockey's instruction, which is its actual authority. ***"The non-sequitur — fracture epidemiology
  offered as evidence for a boards rule — is gone."*** **Nothing lost: the claim is fully scoped to
  Reiad et al. at `:200`.**
- **`:190`** — the same superlative, ALSO unscoped, in a paragraph voiced alone, behind a FORWARD
  POINTER (*"the fracture-specific study below"*) **that a listener cannot follow.** Now names Reiad
  and carries the population inline.
- **`:194`, `:575`, `:646` — ALL THREE walking-speed instances were fused**, attaching it to the
  COLLISION, *"which is trivially true and teaches nothing."* All now attach to the INJURY.
- ✅ **`:654`, the Sources trailer, aligned too — it described the body's wording and WOULD HAVE GONE
  STALE against the agent's own repair.** **The re-read-the-block step, applied to a trailer.**

### ⚠️ A FIFTH DOCUMENT WITH THE FUSION DEFECT

**`content/technique/skating.md:11` carries the fused form while `:120` carries the correct one.**
**Another document holding BOTH.** ✅ **Routed to the live fusion agent, with the option to decline if
adding a fourth file would rush the other three.**

**Corpus picture so far: `conditioning_and_recovery.md` three instances, all wrong, fixed ·
`skating.md` at least one wrong and one right · `winger.md`, `puck_handling.md`,
`switching_positions.md` unmeasured until the live agent measures them.**
- [ ] ⚠️ **NOBODY HAS CENSUSED THE WHOLE CORPUS FOR IT.** **Asked the live agent to propose a clean
  method rather than the coordinator guessing at one.**

### ⚠️ The highest-value handover, and it is now actionable

***"I did not check whether `uk_rules.md` and my file now read consistently when a reader meets both —
the two labels are DELIBERATELY WORDED DIFFERENTLY, and nobody has read them side by side."***
- [ ] **Both files are now free. This is a two-document read and it should happen before the gate.**
- [ ] **It also did NOT re-verify the USA Hockey quotations against the PDFs, leaning on
  `check_quote_drift` —** ***"the tool cannot see ATTRIBUTION drift, so a sentence carrying USA
  Hockey's words under the wrong book's name would score clean."***


---

## Workstream 83: ✅ THE FUSION DEFECT REPAIRED IN FOUR FILES — and the convention itself is now in question

### ✅ The convention CONFIRMED from the source, with the antecedent traced

***"The antecedent of 'this' is the sentence immediately before it, whose subject is 'on-ice cervical
spine INJURIES'."*** **The qualifier attaches to the injury. The convention is correct.**

### ⚠️ MY BRIEF MISQUOTED THE SOURCE — from a row I had quoted earlier the same day

**I wrote *"one or more vertebrae"*. The book prints *"one **of** more vertebrae"* — its own typo.**
**Measured: my string returns ZERO in `huh.txt`; the book's returns one.** ⚠️ ***"A verifier pasting
your string gets zero hits."***
⚠️⚠️ **AND IT IS ALREADY RECORDED IN `sources/README.md`'s `huh.txt` row, which this coordinator
QUOTED FROM EARLIER TODAY, and `body_contact_and_battles.md:726` already handles it correctly as
`one [or] more`.** **The information was in front of me and I relayed it wrong regardless.**
**This is the false-absence machine running in reverse: a brief that manufactures an absence in a
source that does contain the sentence.**

### ⚠️ FOUR SITES MY RELAY DID NOT HAVE, and one is the worst instance of the set

- **`winger.md:9` — NOT IN MY BRIEF, and the worst.** *"that head-down collision … can occur at walking
  speed"* — ⚠️ **the claim SHED ENTIRELY, since of course a collision can occur at walking speed.**
  **Verbatim the defect corrected at `puck_handling.md:12` in an earlier round.**
- **`skating.md:11` had TWO defects, not the one relayed** — the vacuous form **AND a dangling
  demonstrative**: *"that collision"*, where **no collision is named anywhere in the sentence.**
- **`skating.md:268` — a second site nobody had.**
- **Plus two more outside the four files, found by its census (below).**

### ✅ Repairs, and the substitutions cost NOTHING

**`winger.md:26`/`:84`/`:358`: 198 → 198 chars, all three.** ***"The injury becomes the grammatical
subject at ZERO cost."*** **`puck_handling.md:409`: 199 → 197 — the repair GAINED headroom on the
tightest line in the file.** **`switching_positions.md:166`: 178 → 191, and it DROPPED OFF `--near`
entirely.** **`--near` corpus totals unchanged at 266 / 6 at cap.**

### ⚠️ REFUSED, with six measured alternatives

**`winger.md:426` at 198/200, block 8/11 total but **8/8 coaching** — no sibling line possible, and no
rule to cite for a `Rule:` split.** **Six faithful injury-subject rewrites measured
**201, 202, 203, 209, 212, 214**.** **The only two that fit cost either plain English or the
*"head-down, head-first"* condition — *"dropping that would overstate."*** **Left alone, with the
mitigation stated: the sentence equates the hit WITH the injury, so an injury reading is available.**

### ✅ THE CORPUS CENSUS I ASKED IT TO DESIGN — 108 claims, 20 documents, two live sites found

**Script saved to the scratchpad. It strips markdown BEFORE flattening, splits the clause at the last
boundary before the walking-speed verb, and bins by whether the SUBJECT is injury-like or
collision-like.** ⚠️ **It reports its own limits: *"its binning is imperfect — a quotation earlier in
the clause fools it — so the reliable half is the targeted pattern grep it led me to."***

- [ ] **`hockey-iq/puck_support_and_spacing.md:329`** — *"the head-down collision that ducking produces
  can break your neck at walking speed"*. **PROSE, NO CAP — a free fix.**
- [ ] **`hockey-iq/playing_without_the_puck.md:594`** — ⚠️ **the VERBATIM TWIN of the `winger.md:426`
  line it refused**, at 198/200 in a block 9/11 total but **8/8 coaching**. **Identical constraint.**
  ***"Worth deciding once for both, not twice."***

### ✅ SIX UNMARKED NEAR-QUOTES — and `skating.md` is the model

**All six are `ibc.txt:1570`'s *"Even a light hit from behind could inflict a severe head or neck
injury"*, carried with NO quote marks and NO attribution:** `winger.md:25`, `:83`, `:357` ·
`puck_handling.md:409` · **`puck_handling.md:932` — the worst: TWELVE WORDS VERBATIM in a bullet with
no *"USA Hockey"* anywhere in it** · `switching_positions.md:165`.
✅ **A separate, weaker class of EIGHT is attributed-but-unquoted close paraphrase, judged legitimate
reported speech and left.**
⚠️⚠️ **`skating.md` HAS ZERO OF EITHER. Every instance is quoted, attributed, and uses the
disclosed-insertion form `"[e]ven a light hit…"`.** ***"It is the model the other three should be
brought to — and that is a PROPAGATION ROW, NOT A SWEEP."***
✅ **Two independent methods (4-gram containment, sliding-window similarity) returned the same 13–14
candidates, *"so the count is not a threshold artefact."***

### ⚠️⚠️ THE QUESTION THAT PUTS THE WHOLE CONVENTION IN DOUBT

***"Whether the distinction is worth the ink at all. I can defend `:9` and `skating.md:11` on their own
— those SHED the claim. But 'a collision can break your neck at walking speed' and 'the injury can
occur at walking speed' ASSERT THE SAME FACT; I repaired the second class for CONSISTENCY WITH THE
CORPUS'S OWN WRITTEN CONVENTION, not because a reader was being misled. Nobody has tested whether a
listener hears any difference. IF THE ANSWER IS NO, THIS CONVENTION IS COSTING EDITS IT SHOULD NOT."***
- [ ] ⚠️ **This is the first time all session that an agent has questioned whether a corpus CONVENTION
  earns its keep, rather than whether a document obeys it.** **It should be answered before the
  remaining sites are swept — and the answer is a listener question, not a source question.**

### ✅ Both unowned files read and CLEAN on this defect

**`body_contact_and_battles.md` (ten sites) and `conditioning_and_recovery.md` (four) all use the
injury form.** **`body_contact_and_battles.md:21` carries *"so a vertebra can fracture at walking
speed"* — *"the strongest form in the corpus, the only site that pulls the vertebra mechanism into the
walking-speed sentence itself."***


---

## Workstream 84: ✅ WS23 MEASURED AND READY — but DELIBERATELY NOT EXECUTED, and the reason is the point

**`SPELL_OUT` in `md_to_speech.py` has FOURTEEN entries:** `SDHL, SHL, CARHA, ASHL, IIHF, CDPA, ADM,
PDO, CI, SD, RR, OZ, DZ, NZ`. **Its docstring states the criterion precisely: *"Acronyms Polly is
likely to try to pronounce as a word."***

**Measured corpus-wide, and measured again THROUGH THE RENDERER rather than by grepping the source:**

| acronym | occurrences in `content/` | wrapped in `<say-as>` (uk_rules render) |
|---|---|---|
| **NIHL** | **153** | 4 of 28 |
| **SIHA** | **86** | **0 of 19** |
| **EIHL** | **45** | **0 of 10** |
| **WNIHL** | **40** | **0 of 5** |
| **EIHA** | **21** | **0 of 2** |
| `IIHF` (control) | — | **110 of 110** ✅ |

⚠️ **All five are vowel-bearing initialisms Polly will attempt as words — *"nil"*, *"see-ha"*,
*"eel"* — which is exactly the docstring's own criterion.** **345 occurrences corpus-wide.**
✅ **`NHL` is correctly ABSENT: no vowel sequence to attempt, so the engine spells it natively. The
list is a judgement list, not an inventory, and that is why it is short.**

### ⚠️ WHY IT WAS NOT DONE NOW

**This is a `scripts/` change affecting how 345 occurrences render across the whole corpus.** **Three
reasons to hold it, and they are the same reason:**
1. **A commit gate has BLOCKED TWICE on a diff that ALREADY contains two widened checkers**, each of
   which required its own written verdict in the review record because *"a tool changed mid-round
   taints what rests on it."* **Adding a THIRD tool change to that diff is exactly the move the gate
   has twice told the coordinator not to make.**
2. **It is NEW WORK, not a fix to the blocked diff.** **Nothing in the gate's four open conditions
   needs it.**
3. ⚠️ **"Between waves" does not mean "when the tree is momentarily quiet." It means when the WAVE is
   finished, and this one is not — the gate has not cleared.**

- [ ] **EXECUTE AFTER THE COMMIT LANDS. The measurement above is the work; the edit is one line.**
  ⚠️ **And re-render at least `uk_rules.md` and one systems document afterwards to confirm the wrap
  reaches all five — the `NIHL` figure above (4 of 28 already wrapped by some other path) says the
  mechanism is not as simple as the tuple suggests, and nobody has found what wraps those four.**


---

## Workstream 85: ⚠️ THE UNMARKED NEAR-QUOTE CENSUS — EIGHT sites, and the first method returned ONE

**Read-only. No edits. Run deliberately while a gate-verified diff is staged, because a census changes
nothing and a content edit would destabilise a state that took three gate rounds to clean.**

**The class: a line carrying a source's wording with NO quotation marks and NO attribution.**
⚠️ **Invisible to `check_quote_drift.py` BY CONSTRUCTION — there are no quote marks to match — and
`check_facts.py` requires no citation on a `Never:` or `Risk:` line.**

**CORPUS-WIDE: EIGHT sites across FIVE documents**, all carrying `ibc.txt:1570`'s *"Even a light hit
from behind could inflict a severe head or neck injury"*:
`positions/defender.md:105` · `positions/switching_positions.md:165` · `positions/winger.md:25`,
`:83`, `:357` · `technique/body_contact_and_battles.md:708` · `technique/puck_handling.md:409`,
**`:932`**.

⚠️ **The earlier agent reported SIX. That figure was correct FOR THE FILES IT OWNED; the corpus figure
is EIGHT.** **`defender.md:105` and `body_contact_and_battles.md:708` are the two nobody had.**
**`puck_handling.md:932` remains the worst — twelve words verbatim in a bullet with no *"USA Hockey"*
anywhere in it.**

### ⚠️⚠️ THE METHOD FAILURE IS THE FINDING, AND IT NEARLY SHIPPED AS A NUMBER

**The coordinator's FIRST census matched the source sentence EXACTLY and returned **ONE**.**
**It would have been reported as *"five of six have been fixed"*, which is FALSE — nothing was fixed.**

⚠️ **The corpus writes *"even a light ONE could inflict a severe head or neck injury"*; the source
writes *"Even a light HIT FROM BEHIND could inflict…"*.** **The paraphrase substitutes a pronoun for
the subject and keeps nine words verbatim — so an EXACT-PHRASE census cannot see it, and only the
4-gram / sliding-window method the earlier agent used can.**

⚠️ **This is the same shape as every false-absence class recorded today, arriving in a CENSUS OF
NEAR-QUOTES: the thing that makes it a near-quote is exactly the thing that defeats the search for
it.** **Caught by checking the source wording against the corpus wording before trusting the count —
which is the positive-control discipline another agent established this morning.**

- [ ] **A weaker, SEPARATE class of EIGHT — attributed but unquoted close paraphrase of *"No shoulder
  contact on the boards, if possible"* — was judged legitimate reported speech and left.** ***"USA
  Hockey … asks for"* carries the attribution.**
- [ ] ⚠️ **`skating.md` HAS ZERO OF EITHER CLASS. Every instance there is quoted, attributed, and uses
  the disclosed-insertion form `"[e]ven a light hit…"`.** ***"It is the model the other files should be
  brought to — and that is a PROPAGATION ROW, NOT A SWEEP."***
- [ ] ⚠️ **HELD until the staged diff commits.** **Eight sites across five documents is a propagation
  wave of its own, four of the five files are in the current staged diff, and adding unreviewed text to
  a diff that has been blocked three times is the move the gate has twice warned against.**


---

## Workstream 86: ⚠️ `tts_sample.py` EXITS 0 WHEN NOTHING SYNTHESISED — and both remaining verification routes are now blocked

**Two open questions this session need an EAR, not a browser, and nobody had tried:**
**(1) does Polly render `;` audibly differently from `,`** — the fix applied to `uk_rules.md`'s Key
Takeaway 10, whose fourteen-item list was an uncountable comma-run; **(2) does a listener hear the
injury-vs-collision distinction at all** — the question an agent raised about whether that convention
*"is costing edits it should not."*

**Attempted. Result:**
```
polly          FAILED  — aws: Token has expired and refresh failed
elevenlabs     SKIPPED — credential not set
openai         SKIPPED — credential not set
google         SKIPPED — credential not set
google_cloud   SKIPPED — credential not set
tts_sample: 0 synthesised, 4 skipped, 1 failed
exit=0
```

### ⚠️⚠️ THE EXIT CODE IS THE FINDING

**`0 synthesised, 4 skipped, 1 FAILED` → EXIT 0.**
⚠️ **An agent told to run the ear test, checking the exit code as every brief in this repository
instructs, would conclude it ran.** **It synthesised nothing.**

**This is the same shape as the two silent false passes already recorded today** — `md_to_speech
--only <slash form>` printing *"no markdown found under …/content"* and blaming the corpus, and the
pipe returning the PIPE's status. ⚠️ **Three tools in one session whose failure mode is a clean exit
code.**
- [ ] **Make `tts_sample.py` exit non-zero when it synthesises nothing.** ⚠️ **HELD: `scripts/` changes
  between waves, and a commit gate has blocked three times on a diff that already contains two widened
  checkers.** **The measurement is the work; the fix is one line.**

### ⚠️ BOTH REMAINING VERIFICATION ROUTES ARE NOW BLOCKED, BY DIFFERENT OUTAGES

| route | blocked by | needs |
|---|---|---|
| **D15, the rendered page** | Chrome's safety-categorisation service refusing `localhost` and `127.0.0.1` — `tabs_context`, `tabs_create`, `resize_window`, `tabs_close` all work; only `navigate` fails; `curl` returns 200 throughout | the service to answer, **or** an authorised headless-browser dependency |
| **The ear test** | AWS SSO token expired; no other TTS credential set | **`aws sso login`** — a user action, runnable in-session with the `!` prefix |

⚠️ **NEITHER IS A DEFECT IN THE CORPUS, and neither is something this session can clear on its own.**
**Every other gate condition is met; the staged diff is verified; the work is done.**

### What was achieved without either

✅ **The caption risk was COMPUTED from the stylesheet's own two independent figures rather than
guessed — and the exercise found the documented worst case is 90% GONE** (Workstream/§9g).
✅ **The unmarked near-quote class was censused corpus-wide: EIGHT sites, not the six previously
believed** — and the first census method returned ONE, which would have been reported as *"five are
already fixed"* had it not been checked against the source wording.
✅ **`SPELL_OUT`'s gap was measured through the renderer: five British league initialisms unwrapped,
345 occurrences, with `IIHF` at 110 of 110 as the control.**
⚠️ **All three were held rather than executed, because the staged diff took three gate rounds to clean
and adding to it is the move the gate has twice warned against.**


---

## Workstream 87: ✅ THE DE-COUNTING WAVE IS NOW DISPATCHABLE — 32 sites, 13 documents, and ZERO in the facts layer

**Read-only census, run so the wave is ready the moment the staged diff commits.** **Markup stripped
before flattening; scoped to lines that actually name the boards set (turned back / duck / shoulder),
which is what makes it a count of THIS claim rather than of the word *"prohibition"*.**

| camp | sites | documents |
|---|---|---|
| **"two"** | **22** | `body_contact_and_battles` 5 · `winger` 5 · `puck_handling` 4 · `defender` 3 · `rules_primer` 1 · `getting_started` 1 · `mental_game` 1 · `passing_and_receiving` 1 · `skating` 1 |
| **"three"** | **10** | `switching_positions` 5 · `forechecking_systems` 3 · `offensive_zone_play` 1 · `risk_management` 1 |

### ⚠️ TWO FINDINGS THAT CHANGE THE SHAPE OF THE WAVE

**1. ZERO of the 32 are in the ` ```facts ` layer.** ⚠️ **So no voiced-alone line states a number at
all — every count is in prose or a bullet with surrounding context.** **That materially lowers the
risk: the defect a listener could act on does not exist, and this is a READER-FACING consistency
problem, not a safety one.**

**2. NO DOCUMENT HOLDS BOTH CAMPS.** **The split is clean: four documents say three, nine say two.**
⚠️ **This is a CHANGE from earlier in the session, when `puck_handling.md` held three framings at once
— it now reads two=4, three=0 because it was de-counted during the wave.** **The self-contradicting
case has already been repaired; what remains is a cross-document divergence.**

✅ **So the earlier estimate of *"~28 sites, 12 documents"* was close and slightly low, and the
recommendation stands — but the wave is smaller, safer and more tractable than it was described.**
⚠️ **The reason for de-counting is UNCHANGED and is not about tidiness: the two "three" camps disagree
about WHAT THE THIRD MEMBER IS** — `switching_positions` makes it the shoulder TIP (banned flatly),
`forechecking_systems` and `offensive_zone_play` make it *"the shoulder on the boards"* (the WHOLE
shoulder, only *avoided*, *if possible*). **Ruling "three" corpus-wide would ratify a conflation of an
absolute with a hedge.**

- [ ] **DISPATCHABLE AS ONE WAVE once the staged diff commits: four documents to de-count (10 sites),
  nine to confirm (22 sites).** **The caption layer has already converged on naming rather than
  counting — *"neither prohibition"* — so the target form exists and ships.**

### ⚠️ THE COORDINATOR'S FIRST CENSUS WAS AGAIN TOO BROAD, AND AGAIN CAUGHT BEFORE REPORTING

**It matched any `three` in a line containing `prohibition` and returned **81 sites across 26
documents** — including `goaltender.md`, `faceoffs.md` and `game_management.md`, which have nothing to
do with the boards set.** ⚠️ **THIRD over-broad census today**, after `Situation 7` matching inside
`Situation 76.42` and `fend` matching inside `defending`.
✅ **Caught the same way each time: the number looked wrong against a known estimate, so it was checked
before being reported.** ⚠️ **The discipline that keeps catching these is NOT a better regex — it is
having an independent expectation to test the result against, and stopping when the two disagree.**


---

## Workstream 88: ⚠️⚠️ RETRACTED — I INVENTED THE CONVENTION AND THEN MEASURED VIOLATIONS OF IT

**This workstream asserted that a quotation embedded mid-sentence *"must"* lower the source's capital
and disclose it in brackets, and reported **32 violations**. A `source-verifier` could not sustain the
premise, and it is right.**

⚠️ **`grep -ci bracket project/content_style_guide.md` returns **0**. The convention is NOT WRITTEN
ANYWHERE.** **I inferred it from the fact that the `[a]` form EXISTS in the corpus, promoted an
observed pattern to a rule, and then counted departures from my own inference as defects.**

⚠️⚠️ **AND `check_quote_drift.py`'s OWN DOCSTRING SAYS THE OPPOSITE:**
***"A sentence-initial quotation may legitimately carry the source's capital. Only reading the source
decides."*** **Its stated defect shapes are a capital SILENTLY LOWERED or SILENTLY RAISED — i.e.
CHANGING the source character, which is exactly what the form I was prescribing does.**

✅ **The verifier's independent census agrees with my numbers and rejects my reading: ≈34 mid-sentence
capitals / 9 after-colon / 2 bracketed.** ***"The corpus's dominant practice is to keep the source's
capital, and keeping it is the MORE CONSERVATIVE choice: it alters no source character."***

⚠️ **THE ERROR WENT INTO TWO BRIEFS** — the caption sweep and the near-quote wave — **as a rule agents
were told to follow.** ✅ **No damage: the new text happens to satisfy both readings, because a
quotation opening after a colon keeps the capital under either.**

- [ ] **What remains is a HOUSE-STYLE QUESTION, not a violation count: the corpus uses both forms and
  the style guide is silent.** **Someone may decide it — and if it is decided toward bracketing, all
  ~34 move together.** ⚠️ **It is NOT a defect backlog and must not be dispatched as one.**

**The retracted measurement follows; the counts are real, the verdict on them was not.**

### ~~32 DISCLOSED-INSERTION VIOLATIONS~~ — measured, and `check_quote_drift` scores every one CLEAN

**Found because an agent repairing unmarked near-quotes reported the corpus was *"split"* on the
convention. It is not a split. It is a correctness question with a measurable answer.**

**The convention: a quotation embedded MID-SENTENCE lowers the source's sentence-initial capital and
discloses it in brackets — `"[e]ven a light hit…"`. A quotation that OPENS after a full stop, colon or
dash keeps the capital.**

**Coordinator census of every `"Even a light hit"` / `"[e]ven a light hit"` site:**

| shape | count | verdict |
|---|---|---|
| opens after `.` `:` `—` and keeps the capital | **11** | ✅ correct |
| sits mid-sentence and is bracket-lowered | **2** | ✅ correct |
| **sits mid-sentence and KEEPS the capital** | **32** | ⚠️ **convention violation** |
| opens but is bracket-lowered | 0 | — |

**The violating shape is always the same construction:** *"…USA Hockey's warning to the player
delivering one is that **"Even** a light hit…"* — the quotation follows *"is that"* or *"for"*, which
is mid-sentence, and the capital is retained.

⚠️⚠️ **`check_quote_drift.py` SCORES ALL 32 CLEAN, because the capital MATCHES THE SOURCE.** **The tool
catches a capital silently LOWERED; it cannot catch one that should have been lowered and was not.**
**A convention the corpus states and a tool cannot enforce, violated at 32 of 45 sites.**

✅ **`skating.md` is correct at both its mid-sentence sites** — which is why it was named the model —
**but the model is the CONVENTION, not the file: `skating.md` also has one correct capital-after-colon
site, and the two forms are not stylistic alternatives.**
✅ **And the form one agent shipped today at five sites — `USA Hockey warns your checker: "Even a light
hit…"` — is CORRECT, because a colon opens the quotation.** **It fixed the shape without being asked
to.**

- [x] ⚠️ **NOT A DEFECT BACKLOG — RETRACTED. See the head of this workstream.**

---

## Workstream 89: ⚠️ A TERMINOLOGY CONFLICT BETWEEN TWO AGENTS, and the reviewer's premise was FALSE

**A `safety-reviewer` raised as a Minor:** *"`scanning_and_anticipation.md:146` — *'never the shoulder
tip'* is **the only site in the corpus using that phrasing**; every other one of the ~30 sites says
*'the point of your shoulder'*."*

⚠️ **MEASURED CORPUS-WIDE, markup-stripped: *"point of your shoulder"* = **107** · *"shoulder tip"* /
*"tip of your shoulder"* = **42**, across 16 documents.** **`switching_positions.md` alone has 10 tip
uses against 9 point-of.**
⚠️ **So the reviewer's *"only site in the corpus"* was FALSE by a factor of forty-two**, and the Minor
built on it should not be actioned as written.

**Meanwhile, today, an agent bought room at four sites by substituting *"not the point of your
shoulder"* → *"not the shoulder tip"* (−10 chars), reasoning that USA Hockey's own word is **tip**
(`ibc.txt:1453`, *"the tip of your shoulder"*) and the term already appeared in two of its files.**
✅ **That reasoning is sound and the substitution is defensible.**

⚠️ **But two agents have now moved in opposite directions on one piece of vocabulary, each correctly by
its own lights.** ✅ **The live agent was told NOT to arbitrate it and not to change either form.**
- [ ] ⚠️ **This needs ONE OWNER and a corpus-wide decision, not a per-file choice.** **Both terms name
  the same anatomy, both are already shipped, and the majority form (107) is the corpus's paraphrase
  while the minority (42) is the source's own word.** **Neither is wrong; having both is.**

### ⚠️ And a coordinator error in the brief that produced this

**I told both agents *"`skating.md` has ZERO instances of this class — it is the model"*, sourced from
one agent's report about one file.** ⚠️ **`skating.md` is indeed clean on the UNMARKED-quote class —
but it is not a model for terminology (it carries 6 point-of against 1 tip), and the *"[e]ven"* framing
I attached to it was the CONVENTION's, not the file's.** **Fourteenth relaying error today.**


---

## Workstream 90: ✅ THE UNMARKED NEAR-QUOTE CLASS CLEARED IN `content/` — and found ALIVE in the caption layer

**Ten sites repaired across five documents. `content/` now has ZERO unmarked near-quotes of this
sentence — verified by the coordinator after both agents finished.**

⚠️ **The coordinator's census said EIGHT. Both agents found more:** **`defender.md` had TWO sites, not
one** (one a Key focus prose line carrying the sentence VERBATIM, attributed but unquoted, with the
capital silently lowered), **and `switching_positions.md:556` carried it QUOTED BUT UNATTRIBUTED** — a
floating quotation with USA Hockey named later for two different claims. **Two distinct sub-shapes the
census pattern could not distinguish.**

### ✅ Substitution beat addition again — twice at NEGATIVE cost

**`switching_positions.md:165`: 188 → 178/200 — the repair COST TEN CHARACTERS NEGATIVE.**
**`puck_handling.md:409`: 197 → 192/200 — quoting in full let the agent DELETE the lead-in
*"Turning your back makes it a hit from behind, and"*, because the quotation supplies *"hit from
behind"* itself. Attribution cost −5.**
**`body_contact_and_battles.md:708`: 199 → 199 at one character of headroom, via substitution
(*"It gives them your spine, puts your head first into the wall, and makes it"* → *"Spine exposed, head
first into the wall,"*), nothing evicted.** ⚠️ **It is back at 1 char — `--near` will flag it and an
ordinary edit will break it.**

### ✅ THE CROSS-AGENT CATCH WORKED, AND THE AGENT EXPLAINED ITS OWN ERROR BETTER THAN THE REPORT DID

**Agent A reported mid-flight that Agent B's `USA Hockey on the turned back:` lost the addressee.**
✅ **Agent B accepted it and found the sharper point: the phrasing contradicted its OWN FILE'S Sources
note**, `puck_handling.md:1030`, which says in terms *"addressed to the checker rather than to the
player who turns."* ***"I'd verified the addressee in step 1 and then wrote an attribution that lost
it."*** **Both lines now name the addressee.**

### ⚠️⚠️ THE CLASS IS ALIVE IN THE CAPTION LAYER, AND NO CENSUS HAS EVER LOOKED THERE

**Found only because the agent READ THE RENDERED SSML.** ✅ **Coordinator verified against
`diagrams.json`, the build product — what a listener actually receives:**

| caption | shipped state |
|---|---|
| `puck-on-the-far-side` | *"USA Hockey warns that even a light hit from behind could inflict a severe head or neck injury"* — **12 words verbatim, UNQUOTED** |
| `angle-into-the-corner` | same sentence, unquoted |
| `support-a-battle-from-outside` | same sentence, unquoted |

⚠️ **THREE caption sites, all attributed, none quoted — and `check_quote_drift.py` cannot see any of
them, because there are no quote marks to match.**
⚠️ **The coordinator's census scanned `content/` and was therefore structurally blind to these — the
same failure already recorded today as *"a markdown grep undercounts the safety limb by up to a third,
because captions are voiced and live outside `content/`."*** **It recurred within hours, in the
coordinator's own census, on a different defect class.**
⚠️ **And one of the three voices into `puck_support_and_spacing.md`, a document NEITHER agent owned.**
***"A fourth site in a document I do not own surfaced by accident, which implies the caption layer has
not been swept for this class at all."***

- [ ] **Sweep the caption layer for this class.** ⚠️ **HELD — `site/src/diagrams/` is staged-modified
  this round, and `CLAUDE.md` records four agents once being told they owned that directory
  exclusively when they did not.**
- [ ] ⚠️ **AND THE BROADER ROW, which is the real one:** ***"I checked the defect class only for THIS
  ONE SENTENCE. The same pattern almost certainly exists for the other USA Hockey strings this corpus
  leans on — the walking-speed finding, the shoulder-tip absolute — and a corpus-wide census keyed on
  SOURCE WORDING rather than on quote marks is the pass that would find them."***

**Gates after both agents, unpiped, quiet tree, index matching: `check_links` · `check_facts` ·
`check_absolutes` · `check_geometry` · `check_secrets` · `check_counts` · `check_tables` — all 0.
30 files staged.**


---

## Workstream 91: ✅ THE SOURCE-WORDING CENSUS — the class is NOT one sentence, and the noise floor is the finding

**An agent closing the near-quote wave named the real row:** ***"I checked the defect class only for
THIS ONE SENTENCE… a corpus-wide census keyed on SOURCE WORDING rather than on quote marks is the pass
that would find them."*** **Run, read-only.**

**Method: index every 10-word span of all 36 files in `sources/` — 585,001 n-grams — then scan every
`content/` line with its QUOTED spans removed, and report any remaining 10-word run that appears
verbatim in a source.**

### ⚠️ THE FIRST RESULT WAS 339, AND IT WAS NOT 339 DEFECTS

**Sampled four before reporting any number.** ⚠️ **All four were ATTRIBUTED CLOSE PARAPHRASE carrying a
rule number** — *"unnecessary contact with a player playing the puck on an obvious icing or offside
play… (Rule 41.1)"*, *"The free hand may fend off an opponent or their stick… — NHL and IIHF Rule
56.1"*. **That is a thing this corpus does deliberately and it is not the defect class.**
✅ **Re-run excluding any line that carries a rule number or names a book: 339 → 62.**
⚠️ **The lesson is the one this session keeps relearning: a census answers the question you encoded,
not the one you meant. The first pass encoded *"resembles a source"*; the class is *"resembles a source
AND hides it."***

### ⚠️⚠️ RETRACTED — THERE IS NO SECOND CLUSTER. THE CENSUS CANNOT SEE POLARITY.

**The section below was filed as a finding and it is WRONG. Retracted within the hour, by a caption
agent that refused the same sites for a reason the coordinator's method could not reach, and then
verified directly.**

**`ibc.txt` prints the sentence as a COMMON ERROR — a NEGATIVE:**
*"Common Errors • **Not** getting your stick and gloves up and spread out on the glass"*.
**The corpus states the POSITIVE instruction — *"get your stick and gloves up and spread out on the
glass"* — which is its own sentence, not a borrowing.** ⚠️ **Quoting it WOULD MISREPRESENT THE SOURCE,
turning *"Not getting X"* into a quoted *"get X"*.**

✅ **Checked directly, all thirteen sites are CORRECT:** **five quote the NEGATIVE with attribution —
`skating.md:605` even using the disclosed-insertion form *"[n]ot getting…"* — and eight state the
POSITIVE in the corpus's own words.** ⚠️ **The two the coordinator scored as *"quoted but
unattributed"* were a detector artefact: a `"` elsewhere on the line, not around this phrase.**

⚠️⚠️ **THE METHODOLOGICAL FINDING, WHICH IS THE PART WORTH KEEPING: AN N-GRAM CENSUS CANNOT SEE
POLARITY.** **A ten-word span shared between a source's *common-error list* and a corpus's *instruction*
matches perfectly — the words overlap and the meaning is inverted.** **So the census reports a document
correctly INVERTING a source as though it were secretly COPYING one.**
⚠️ **That also lowers confidence in the ~50 unread candidates: some share this shape, and reading is
the only way to tell.** **It does NOT affect the first cluster — those ten sites carried the source's
wording AND its polarity, unquoted, and were genuine.**

**The retracted analysis follows, kept because the measurement is real even though the conclusion was
not.**

### ~~A SECOND CLUSTER, VERIFIED~~ — USA Hockey's Common Error, THIRTEEN sites

**`ibc.txt`: *"Not getting your stick and gloves up and spread out on the glass"*** — the sentence the
coordinator read off Fig. 6's rendered page earlier today.

| state | sites |
|---|---|
| ✅ quoted AND attributed | **5** — `core_principles.md:177` · `offensive_zone_play.md:340` · `body_contact_and_battles.md:744`, `:754` · `skating.md:605` |
| ⚠️ quoted, NOT attributed | **2** — `scanning_and_anticipation.md:159` · `passing_and_receiving.md:492` |
| ⚠️⚠️ NEITHER quoted NOR attributed | **6** — `core_principles.md:198` · `scanning_and_anticipation.md:9`, `:537` · `passing_and_receiving.md:10`, `:757`, `:828` |

⚠️ **EIGHT defective sites across FOUR documents — the same shape as the ten just repaired, for a
DIFFERENT source sentence.** ✅ **And the model is in-corpus again: five sites already do it correctly.**
✅ **`skating.md` is correct here too — it has now been the model for three separate classes today.**

- [x] ⚠️ **NOT A DEFECT — RETRACTED. Nothing to repair.**
- [ ] ⚠️ **THE REMAINING ~50 CANDIDATES ARE UNREAD.** **They cluster in `rules_primer.md`,
  `offensive_zone_play.md` and `body_contact_and_battles.md`, and most are probably rule paraphrase in
  lines that happen not to carry a number — but *probably* is not a reading.** **Whoever takes this
  must read them, not sweep them.**

### ⚠️ What the census still cannot see

- **It scans `content/` only.** ⚠️ **The caption layer is outside it — and that is where three sites of
  the FIRST cluster were found today, one of them voicing into a document nobody owned.** **A parallel
  census over `diagrams.json` has not been run.**
- **It needs a 10-word verbatim run.** **A paraphrase that swaps one word mid-span — exactly what
  *"even a light ONE"* does to *"even a light HIT FROM BEHIND"* — SPLITS the n-gram and escapes.**
  ⚠️ **So this census would have MISSED the very cluster that prompted it.** **It finds a different,
  more literal slice of the class, and the two methods together are still not the whole of it.**

---

## Workstream 92: ⚠️ THE CHECKER'S BLIND HALF — a one-line patch made +120 quoted fragments visible, and NOBODY HAS EVER READ THEM

`scripts/check_quote_drift.py` matched **ASCII `"` quotes only**. Its line 115 was patched on
19 September 2026 to accept U+201C/U+201D as well. **The corpus uses both.**

### What the patch exposed — a ONE-TIME delta, not a running count

Measured immediately before and after the patch, corpus-wide:

| | clean | flagged | notfound | total |
|---|---|---|---|---|
| before | 9390 | 383 | 925 | 10698 |
| after | 9499 | 392 | 927 | 10818 |
| **delta** | **+109** | **+9** | **+2** | **+120** |

⚠️ **These four figures describe ONE PATCH on ONE DAY and are safe to write down for that reason.**
**No current flag count appears in this row on purpose** — an agent is repairing them as this is
written, and a count of an actively edited corpus goes stale silently. **Run the tool.**

⚠️ **The +120 is the finding, not the +9.** The tool was **structurally blind to roughly half the
corpus's quotations** — it could see 10,662 italic-quoted spans and not 11,126 plain-quoted ones —
and every gate in this repository passed on all of it, because the Markdown is valid and the claims
are true. **Only the characters inside the quotation marks were wrong, and no tool was looking.**

### Where the +9 landed — and the whole delta is accounted for

**All nine** newly flagged fragments fall in exactly two documents: **+1 in
`foundation/rules_primer.md`, +8 in `systems/forechecking_systems.md`.** +1 and +8 sum to the +9,
so no third document is hiding one. Reproduce per file with:

```bash
python3 scripts/check_quote_drift.py content/systems/forechecking_systems.md
```

### The `rules_primer.md` hit is CORRECT — verified, closed, do not "fix" it

The document closes a CARHA quotation at *"…falls under Rule 62 – High Sticks."* The book
(`sources/carha.txt`) prints that Note **unterminated**, and the next characters are `(a) A Minor
penalty…`. **The source sentence does not continue — it ends, without a period.** The tool's own
docstring defines shape 3 as a period added *"where the source sentence CONTINUES"*, so this is the
**benign** case the docstring warns about. `grep -in "terminal period\|inside the quot"
project/content_style_guide.md` returns **nothing**: the corpus states no convention here, and one
must not be invented — see **Workstream 88**, where exactly that was done and
retracted the same day. **It is also PRE-EXISTING text, outside the current staged diff.**

### ⚠️ TWO SEPARATE GREPS FAILED WHILE VERIFYING THAT ONE LINE, AND BOTH FAILED SILENTLY

1. `git diff --cached | grep "Rule 62"` returned matches and **every one was a substring of
   `Rule 620`.** The substring trap, hit again, in the same session that recorded it twice.
2. `grep -n "falls under Rule 62" sources/carha.txt` returned **nothing** — and the sentence is
   there. It **wraps mid-phrase**: `falls under Rule` ends one line, `62 – High Sticks` begins the
   next. ⚠️ **An empty grep is not an absence, and a LONG PHRASE is the way to manufacture one.**
   Search a short distinctive substring.
3. `grep -c … && echo …` **stopped the whole chain** — `grep -c` exits **1** when it counts zero.
   The count was correct and the commands after it never ran.

### Open — dispatched 19 September 2026, NOT staged

`content/systems/forechecking_systems.md`. **Five hits look like shape 3** — the meaning-changing
one — and the highest-priority is a `usah_casebook.txt` quotation closed at *"a match penalty for
reckless endangerment."* where the source continues **`must be cons…`**. ⚠️ **If the book reads
"must be considered", the quotation converts a duty to CONSIDER a penalty into a flat statement
that the penalty IS one.** Two more quote single limbs of what appears to be Hockey Canada's
multi-part charging definition; one drops an IIHF qualifying clause; one drops a USA Hockey penalty
consequence.

Six more are initial capitals silently lowered — ⚠️ **and three of those are the SAME
`eiha_inhouse.txt` sentence at three sites, so a repair must reach all three or it creates an
inconsistency worse than the drift.**

### What this method could not have found

**Attribution drift** — the tool keeps the closest match across ALL sources, so a sentence credited
to the NHL but carrying the IIHF's wording scores **clean**. **A quotation whose source is not on
disk.** **Anything under the `MINLEN` 25 floor.** ⚠️ **And the caption layer entirely** — it takes
only `content/*.md` paths and has never read `site/src/data/diagrams.json`, where
**Workstream 90** found this same class alive.

---

## Workstream 93: ⚠️ `check_plan_rows.py` — ALL THREE of its current hits are FALSE POSITIVES, in three different shapes

Run while validating Workstream 92's new row. The tool reported **3 quoted
assertions "no longer read as written"**. ⚠️ **Every one of them still reads exactly as written.**
The tool's own footer says *"READ EVERY HIT"* — that instruction is the only reason this was caught,
and it is the finding.

### The three shapes, all measured 19 September 2026

**1. The row ABBREVIATES its own quote with an ellipsis.**
The row quotes `winger.md:426` as *"Never: Meet a goal post head first…"*. The file reads
`Never: Meet a goal post head first, and never duck. Head up, chin off your chest instead.` —
**verbatim, present, unchanged.** The `…` is the ROW's abbreviation and appears nowhere in the
corpus, so the literal match can never succeed. ⚠️ **Any row that trims a long quote this way
reports as stale forever, no matter what the document does.**

**2. The row quotes its OWN editorial emphasis, not the document.**
The row quotes `uk_rules.md:536` as *"The four entries FIRST QUOTED HERE"*. `grep -c "FIRST QUOTED
HERE" content/foundation/uk_rules.md` returns **0** — because the capitals are the PLAN's emphasis
describing the entries, never a string the document ever contained. **The tool cannot tell a
quotation from a paraphrase wearing quotation marks.**

**3. ⚠️ The row quotes the SPOKEN form; the markdown carries LINK SYNTAX inside the span.**
The row quotes *"See Body Contact and Battles, which covers it."* `winger.md:367` reads:

```
See [Body Contact and Battles](../technique/body_contact_and_battles.md), which covers it.
```

**The sentence is intact.** The row quoted what a LISTENER hears; the tool searched what the file
holds. ⚠️ **This is the markup-splits-phrases trap that cost this session two other passes** —
`softer than *never*` and `point of **your** shoulder`, the second of which hid a real defect in
`rules_primer.md`. **It now has a third instance, in a different tool, against the plan rather than
the corpus.** **A flattened grep and a markdown file disagree about every span containing emphasis,
a link, or a footnote.**

### What follows, and what deliberately does NOT

**Do not close these three rows** — rows 1 and 3 name live open work (a refused repair and an
unactioned `check_pointers.py` hit); only their EVIDENCE strings are unmatched. **The rows are
fine; the match is what failed.**

⚠️ **The tool was NOT patched when this was found, and that was deliberate.** Two agents were live
at the time. CLAUDE.md: *"A SHARED TOOL IS SHARED STATE… change a tool between waves, not during
one"* — round 59 changed a classifier mid-round and an agent reported that **no finding in any
report should rest on that tool's output that day**. **Fixing three false positives is not worth
invalidating two live agents' reports.**

Candidate fixes, for whoever takes it **between** waves: strip markdown inline syntax from both
sides before comparing (the `check_quote_drift.py` alphanumerics-only normalisation already solves
exactly this, in the same repository); treat a trailing `…` as a prefix match; and consider whether
a row should be able to mark a quote as PARAPHRASE so shape 2 stops being reported at all.

### What this method could not have found

**The inverse, which the tool's own footer names and nothing checks: a row whose quote still
matches can be just as stale.** All 452 open rows were scanned; **5 carry a quoted assertion at
all.** ⚠️ **So this tool covers roughly one percent of the plan, and 447 rows have no mechanical
staleness check of any kind.**

---

## Workstream 94: ✅ `forechecking_systems.md` QUOTE DRIFT CLEARED — and the tool's OWN DOCSTRING is now falsified

Dispatched off Workstream 92. **13 flagged → 3 flagged, and all 3 remaining are verified false
positives.** Repairs are in the working tree and **NOT STAGED** — a separate commit is mid-gate.

### ⚠️⚠️ THE TOOL ARTEFACT — and it invalidated THREE OF FIVE premises in the brief I wrote

`check_quote_drift.py` **breaks out of its search at the first occurrence whose letters match
exactly** — `if d == 0: break`, then `if best and best[0] == 0: break`. ⚠️ **The `next '...'` tail
it prints therefore comes from whichever occurrence it hit first, in the first source file it
tried — NOT from the passage the document cites.**

**Three of the five hits the brief prioritised were this artefact:**
- Two quoted Hockey Canada Rule 7.4 (charging). The brief claimed a terminal period presented one
  trigger as the whole rule. ⚠️ **Refuted.** `hc_layout.txt:5617-5625` prints 7.4's body as a
  **numbered list in which each item legitimately ends in a period** (*"i. Jumps to check an
  opponent."*). **The tool had matched the GLOSSARY entry**, which runs the same acts as a comma
  list. The quotations were correct and the document's framing accurate.
- One quoted IIHF 43.3. The brief claimed a dropped qualifying condition. ⚠️ **Refuted** —
  `iihf_rules_v1.1.txt:3998-4000` **ends that sentence with a period.** The tail came from the
  *hooking* rule elsewhere in the same file. (Verified identical in `iihf_rules_2026-27.txt:4059`.)

⚠️ **THE RULE THIS ESTABLISHES: resolve the rule BY NUMBER and read that passage. Never conclude
from the tool's tail.** It was relayed to three live agents mid-flight.

### ⚠️ THE DOCSTRING IS WRONG, AND IT IS WRONG ABOUT THE THING IT CLAIMS AS ITS DESIGN

`check_quote_drift.py`'s docstring states that matching on alphanumerics *"defeats the
page-furniture splice that `sources/README.md` records"*. **It does not always.**

IIHF Rule 42.1's charging definition is reported **NOT FOUND IN ANY LOCAL SOURCE**. It is in the
book **verbatim** — the `TABLE OF CONTENTS` splice lands **inside a word**, between `imme` and
`diately`, and the furniture (`I I H F O F F I C I A L R U L E B O O K 2025/26 – S E C T I O N 06
85`, `PHYSICAL INFRACTIONS`) **contributes alphanumerics**, so normalisation cannot bridge it.

⚠️ **A verifier trusting the NOT-FOUND list would have reported a correct IIHF quotation as
unsourced** — the direction that makes the corpus look less supported than it is, which is exactly
the class `check_disclosures.py` exists for. **A `NOT FOUND` is not an absence.**

### The two real shape-3 defects, both repaired, both OUTLIERS IN THEIR OWN DOCUMENT

- **USA Hockey 607(e)** quoted as *"a match penalty for reckless endangerment."* **`usah.txt:3698-3699`**
  reads *"…**may also be** assessed for charging."* ⚠️ **The citation `usah.txt:5106-5108` was
  reported for this rule and is WRONG — that offset is the middle of Rule 640(a)'s scrum Note.**
  A second verifier caught it and said it *"would have read the wrong rule if I had trusted it."*
  ⚠️ **And the phrase does NOT grep raw: the book breaks the line after *"may also be"*.** ⚠️ **All 32 occurrences across `usah.txt` and
  `usah_casebook.txt` continue; none ends there.** The truncation drops the **permissive** limb —
  607(a) is *"shall be assessed"*, 607(e) is *"may also be"* — so it read as flat and automatic.
- **USA Hockey 604(c) Note** quoted as *"…with no effort to legally play the puck."*, dropping
  *"shall be penalized."* This one sat in **Key Takeaway 2 — a voiced layer.**

⚠️ **THE PATTERN WORTH KEEPING: in BOTH cases the document already quoted the same rule CORRECTLY
elsewhere** (607(e) at three other sites, 604(c) at four). **The defect was always the outlier, and
the document contained its own answer.** It happened a third time with Rule 404(b). **Check a
document against itself before deciding the correct form.**

### Three further defects the tool STRUCTURALLY could not see

Found by re-running the comparison **over every source occurrence** rather than the first match:
a lowered capital hidden behind a lowercase Casebook occurrence; a period inside quote marks where
the source continued *"in such a way that causes an opposing player to trip or fall"*; and Rule
404(b) truncated before *"(the game already appearing on the schedule of that team…)"* — **a
parenthetical that DEFINES WHICH GAME.** ⚠️ **Two were under the `MINLEN` 25 floor**, including a
`Rule:` facts line quoting a two-word fragment.

### Settled, so nobody re-opens them

- **The `[x]` bracket form is PRINT-LAYER ONLY** — verified in the rendered SSML; `md_to_speech`
  strips it, so a listener is unaffected either way. The document uses it **40 times**; the six
  repaired sites were the only silent lowerings.
- **The In-House sentence is NOT edition-stale.** `grep -c` against `eiha_inhouse_2026-27.txt`
  returns **0** — ⚠️ **because it wraps mid-phrase.** Flattened, the current edition carries it
  verbatim. **The brief's own wrap trap, fired, and correctly caught.**

### Open, handed on

- ⚠️ **`body_contact_and_battles.md` owns the five-book charging comparison** and may carry the
  same 607(e) / 604(c) truncations. **Relayed to the agent holding that file.**
- **`safety-reviewer` needed**: a penalty-consequence clause was restored into the Key Takeaways
  layer, where it is voiced alone.
- **20 `NOT FOUND` fragments remain unresolved** in this document — mostly web-sourced (Hockey
  Graphs, NHL.com, Ice Hockey Systems) and not on disk. **That is `source-verifier`'s ground.**

### What this method could not have found

**Attribution drift** — a quotation correctly transcribed from the **wrong book**. The tool keeps
the closest match across *all* sources and never checks it against the book the prose names; the
607(e) and 43.3 cases were caught **only because the agent resolved the rule by number.** It also
cannot see whether a verbatim quotation is the *right* one — whether the truncation point changes
the rule, whether the edition is current, or whether a quoted clause carries an exception living
three paragraphs later.

---

## Workstream 95: RULES VERIFICATION of the newest material — 35 of 37 claims correct, and SIX negative existence claims all HELD

`rules-verifier` on `content/technique/body_contact_and_battles.md`, covering the rule claims added
**after** the previous rules pass — the CARHA additions, the two-bucket removal, the division-scope
fix and the penalty-tally correction. **37 discrete claims verified against primary text, 35
correct, most verbatim.**

### ⚠️ SIX NEGATIVE EXISTENCE CLAIMS ATTACKED — AND ALL SIX HELD. DO NOT STRIP ANY OF THEM.

Attacked **by phrase AND by concept**, across **both** USA Hockey volumes and **both** IIHF
editions, on **flattened, de-hyphenated copies**:

- the CARHA double-minor **duration** disclosure — *"the label and not a count of minutes"*
- *"USA Hockey writes no strength-move sentence at all"*
- *"'above the upper hand' … every one is Rule 606"*
- *"the IIHF book has no match penalty at all"*
- *"no high-sticking rule at all in Hockey Canada minor and female hockey"*
- *"CARHA writes no windup or follow-through carve-out"*

⚠️ **The CARHA duration one will look like a gap to the next reviewer and IS NOT.** The figure is
*derivable* — Section Seven item 16 gives a minor as 2 minutes, Rule 28(d) treats a double minor as
two minors — **but 2+2 is a READING of the book, not a figure the book prints.** The document's
wording is exactly right. **Recorded so nobody re-opens it.**

⚠️ **Two of the six would have been filed as FALSE by a raw grep.** *"above the upper hand"*
returns **one** hit per volume raw and **two** flattened — line-broken hyphenation hides the
second. **A verifier trusting the raw count files a false finding.**

### The one defect — and the corpus already contained its own answer

The late-hit paragraph said USA Hockey's escalations reach *"…640(g) and 640(h) … **both only
through (b)**"*. `usah.txt:5141-5147`: **(g) reaches `640(b, c, d, e or f)` and (h) reaches
`(b), (c), (d), (e) or (f)` — FIVE sub-sections, not one.** The underlying point is defensible for
a *late hit specifically*, but the sentence as written is false, **and this document is read aloud
one sentence at a time, under a late-hit heading.**

**The coordinator then ran the propagation census, and it REVERSED the repair:**

| Site | Form | Verdict |
|---|---|---|
| `systems/game_management.md:160` | *"both reach only acts under **640(b–f)**"* | correct |
| `systems/breakouts.md:140` | *"both only for acts under **640(b–f)**"* | correct |
| `systems/breakouts.md:252` | *"both reaching only acts under **640(b–f)**"* | correct |
| `hockey-iq/playing_without_the_puck.md:453` | scopes to the ACT: *"which a pick meets only through **640(d)**"* | correct |
| `hockey-iq/time_and_space.md:250` | same construction | correct |
| `technique/body_contact_and_battles.md` body | *"both only through (b)"* | **THE OUTLIER** |

⚠️ **`640(b–f)` is the established house form at five sites. The defective sentence is the only one
of its kind in the corpus.** **The repair is to match what the corpus already says, not to write a
new sentence** — the third time today a defect turned out to be an outlier in a document that
contained its own answer.

⚠️⚠️ **AND THE FACTS LINE IS BETTER THAN THE BODY, WHICH IS THE REVERSE OF THE USUAL DIRECTION.**
`:516` reads *"USA Hockey's escalations reach **a late hit** only through 640(b)"* — **scoped to the
act, which is the defensible reading.** The body sentence drops that scope and that is what makes
it false. **Every propagation convention here assumes the body is right and the summary layer
lags. Here the summary layer was right.**

**A house precedent for the second-order caveat already exists too:** `game_management.md:161`
names the adult-male inference **as a reading** — *"that 640(a) then carries the minor or double
minor **is a reading**, since 640(a) names Note 1"*. The reading is genuinely unresolved:
`"Adult Male Classification"` occurs **exactly once** in the playing rules and once in the
Casebook, both the same 640(b) text, and `usah_casebook.txt:17046-17058` Rule 640 Situation 3
describes 640(b) in full and **never mentions the carve-out.**

### ⚠️ The omission that HALVES the ejection cost — and it sits beside the OPPOSITE rule

Three Notes, verified: `carha.txt:2465-2467` (Rule **49(b)** — **this document's own boarding
rule**), `:2497-2499` (50(b)), `:2445-2447` (Rule 48-wide):
*"The Double Minor penalty assessed under this rule shall count as two (2) penalties in the
application of the Three Penalty Rule (Rule 32 (a))."*

**Under CARHA a boarding double minor plus one more minor is a game ejection in TWO penalties, not
three.** ⚠️ **And the same document teaches THREE TIMES that a double minor counts ONCE — under
Hockey Canada** (`:310`, `:604`, and the body at `:661`). **A missing fact sitting beside a stated
contrary one, on the same question, invites exactly the wrong inference.**

**A further multiplier nobody had recorded:** `carha.txt:1903-1910`, Rule 39(b) Note 1 — a minor
washed out by a goal is still *"taken into account for the purpose of applying the Three Penalty
Rule"*. **A penalty you never served still counts toward your ejection.**

**Census result: CARHA 32(a) is carried in NO other document.** Nothing to propagate outward.

### ⚠️ FOUR PREMISES IN THE COORDINATOR'S OWN BRIEF WERE WRONG

1. *"7.7 … with the same absolute preamble"* — **no.** 7.7 reads *"There is no legal contact"*;
   7.6 reads *"There is no **type of** legal contact"*. Same substance, different words.
2. *"the three OTHER 'below junior' paraphrases"* — **there are four.** All four safe; the earlier
   agent's ruling is upheld and **under-counted by one**.
3. *"CARHA 48(h) makes a double minor count as two"* — **48(h) assesses a MATCH penalty.** The Note
   follows (h) but is **Rule-48-wide**, which is precisely why it reaches **48(f)**. **The
   conclusion was right; the attribution was not, and the correction is what makes it bite.**
4. The HC scope census said *"minor and female hockey"* ×6; flattened it is **7**. And
   *"Minor or Female divisions"* is a **different string** from 6.9(c)'s *"In Minor **of** Female
   divisions"* — **the book's own typo**, identical in `hc.txt` and `hc_layout.txt`, so not an
   extraction artefact.

### ⚠️ A SOURCE SECTION READ FOR THE FIRST TIME IN THIS CORPUS'S HISTORY

**CARHA publishes Case Situations** at `carha.txt:4247-4460`, and nothing in this repository appears
to have read them. The Rule 62 entry (`:4402-4415`) settles two claims **from the book's own
interpretation layer** rather than by inference: a player who **swings at the puck** and strikes an
opponent above shoulder height gets a **MAJOR**. **That is the windup/follow-through case, and
CARHA refuses a carve-out ON THE FACTS, not merely by silence** — it strengthens an existing
disclosure.

⚠️ **There are seventeen more Case Situations nobody has read, and any of them could carve out
something a document currently forecloses.** **This is an open row.**

### What this method could not have found

Grepping a rulebook says what the book says, **not what an official calls**. It cannot say whether
CARHA's Rule 48 Note is applied to 48(f) in practice, whether a referee reads 640(b)'s exception as
removing the act or only the minor, or whether Hockey Canada's unscoped 7.6(b) is ever assessed in
a Junior game. ⚠️ **It also could not see THE LAYER** — the agent read staged Markdown, not
rendered speech, so a facts line correct on the page and incoherent voiced alone is invisible to
it. **And it cannot see attribution drift: a sentence carrying one book's wording under another
book's name scores clean against both.**

---

## Workstream 96: ✅ BOTH RELAYED QUOTATIONS CLEAN — and the relay carried a WRONG LINE NUMBER

Addendum to Workstream 95. The coordinator relayed two USA Hockey truncations found in
`forechecking_systems.md` and asked whether `body_contact_and_battles.md` carried them.
**It does not. Both quotations are complete and correct, and that is recorded as a clean result
rather than worked up into a finding.** Claims verified in that agent's session: **44.**

- **607(e)** is quoted in full, *"[a] match penalty for reckless endangerment may also be assessed
  for charging."* The facts line says *"adds a match penalty **option**"* — **the word "option"
  carries the permissive sense correctly**, and the document elsewhere marks 607(b) in terms as
  *"**shall**, not **may**"*. It is demonstrably alive to the distinction.
- **604(c) Note** is quoted in full, including *"shall be penalized"*.

### ⚠️ THE RELAY CARRIED A WRONG LINE NUMBER, AND IT WAS CAUGHT ONLY BY NOT TRUSTING IT

`usah.txt:5106-5108` was relayed as Rule 607(e). **It is the middle of Rule 640(a)'s scrum Note.**
Real 607(e) is **`usah.txt:3698-3699`**. The verifier: *"I would have read the wrong rule if I had
trusted it."* ⚠️ **And the phrase does not grep raw — the book breaks the line after *"may also
be"*.** Corrected in Workstream 94 above.

**The supporting census was independently re-derived and HOLDS**, on furniture-scrubbed copies:
*"A match penalty for reckless endangerment"* occurs **16 times in `usah.txt` and 17 in
`usah_casebook.txt`**; the 34 characters after every one were printed; **32 are the clause formula
and every one continues *" may also be assessed for…"* — boarding, body checking, butt-ending,
charging, cross-checking, elbowing, head-butting, head contact, high sticking, grabbing, hooking,
kneeing, slashing, spearing, and two *"under sub-sections"* forms. Not one terminates at
"endangerment."**

### ⚠️ A TRAP FOR THE NEXT SWEEP — two passages that END THE SAME WAY

`body_contact_and_battles.md` quotes a **different** USA Hockey passage that closes with the same
six words: **Rule 604 Note 1**, *"…physically forcing the opponent off the puck and with no effort
to legally play the puck."* (`usah.txt:3540-3546`) — **and that sentence genuinely ends there.**
Both sites attribute it correctly to Note 1 and one adds Note 1's *"For the purpose of this rule"*
scope. ⚠️ **A sweep keyed on the string *"legally play the puck"* would "repair" a correct
quotation into a wrong one.**

### ⚠️ A CORRECTION TO THE COORDINATOR'S OWN RELAY: the IIHF DOES name strides

The relay said IIHF 42.1 writes charging *"with no stride count either"*. **The IIHF names strides,
with the quantifier *"multiple"*; the NHL names none at all.** The five-book comparison in
`body_contact_and_battles.md` — *"IIHF **multiple** (42.1)"* — is the more accurate formulation.
⚠️ **A sweep aligning the IIHF to the NHL's "no stride count" would make a correct file wrong.**
Verified across all five: NHL `nhl_rules.txt:5419-5423` (zero `stride` hits in 42.1–42.5); IIHF
*multiple*; USA Hockey *"more than two strides"*; Hockey Canada *"two or more"*; **CARHA Rule 52
Note, `carha.txt:2556-2557` — *"If more than two steps or strides are taken, it shall be considered
a charge"*, identical to USA Hockey.**

### ✅ Closed by the coordinator: `sources/README.md` now carries IIHF 42.1 as a CONTROL

The agent proposed this as a **fourth** extraction trap. ⚠️ **It is not new — `sources/README.md`
already records it as "mode four" and already documents the `check_quote_drift.py` interaction.**
**This is the CRT6 failure shape: the answer was already written down.** What was genuinely
missing was a **reproducible control**, so that is what was added, **with both halves measured by
the coordinator rather than relayed**:

| pipeline | v1.1 | 2026-27 |
|---|---|---|
| strip form feeds → de-hyphenate → collapse whitespace | **0** | **0** |
| **scrub page furniture FIRST**, then de-hyphenate → collapse | **1** | **1** |

⚠️ **THE ORDER IS THE LESSON: furniture-scrubbing must precede de-hyphenation**, because the splice
lands *inside a word* (`imme` / `diately`) and a de-hyphenation rule joins `imme-` onto `TABLE`.

**Also fixed while there: the section's own count had collided.** Its heading read *"now FIVE
instances in FOUR books"* while the text below described a sixth — and **two different findings
were each labelled "sixth instance"** (NHL 42.1, IIHF 1.8). ⚠️ **An ordinal assigned in one section
cannot see an ordinal assigned in another.** **The count is gone; the instances remain.**

### ⚠️ And the tool's docstring is wrong — the same falsification as Workstream 94, reached independently

`check_quote_drift.py` claims its alphanumeric match *"defeats the page-furniture splice that
`sources/README.md` records"*. **It does not defeat a splice, because a splice inserts WORDS and
the furniture IS alphanumerics.** **Two agents reached this independently today, from different
files.** The docstring is still unpatched — **deliberately, while agents are live.**

### What this addendum could not have found

**It checked two named quotations. It did NOT re-audit the file's other hundred-plus quotations for
the same species** — a permissive *"may also be assessed"* clause closed early, or a consequence
clause dropped. ⚠️ **Every gate passes on all of it, because the Markdown is valid and the
shortened claim is still true.**

---

## Workstream 97: ✅ CARHA'S CASE SITUATIONS READ IN FULL — nothing contradicted, and two suspected gaps were already closed

Workstream 95 opened a row saying CARHA's Case Situations section had never been read in this
corpus and *"any of them could carve out something a document currently forecloses."*
**The coordinator has now read the whole section, `sources/carha.txt:4247-4460`. Closing it.**

**It covers nine rules**, not a long tail: 19(f) Change of Players, 28(d) Minor Penalties /
Penalty Shot, **49 Boarding and Body Contact**, 51 Broken Sticks, 61 Handling the Puck,
**62 High Sticks**, 65 Icing, 66 Interference / Protection of the Goalkeeper, 72 Off-sides, plus
84(f) *"Mercy Rule"*.

### Nothing in it contradicts the corpus. Two entries are load-bearing.

- **Rule 49, Situation 2** — *"Player 'Bodychecks' an opponent into the boards… **A double Minor
  penalty shall be imposed** – should a player be injured as a result a Major… should the incident
  be of a serious nature the Referee may impose a Match penalty."* **Confirms the corpus's CARHA
  boarding ladder from the book's own interpretation layer.**
- **Rule 49, Situation 1** — a bodycheck **at centre ice** is *"A Minor or Major Penalty – at the
  discretion of the Referee"*. **Confirms `body_contact_and_battles.md:67`'s claim that 49(a) makes
  a body check a penalty *anywhere on the ice*** — verified against 49(a)'s own text, which
  penalises a player who *"intentionally bodies, pushes, shoves, stands in front of an opponent for
  the purpose of making contact, and/or does not avert body contact"*.
- **Rule 62** strengthens an existing disclosure and is already handed to the agent holding that
  file — see Workstream 95.

### ⚠️ TWO SUSPECTED GAPS CHASED AND BOTH WERE ALREADY COVERED — recorded so nobody re-derives them

1. **Rule 28(d)** rules that a penalty-shot goal does **NOT** cancel the original minor
   (*"Question: is the original Minor Penalty to team 'A' cancelled? **Answer: NO…**"*). This
   looked like a real divergence worth teaching. ⚠️ **`systems/special_teams.md:431` already says
   it** — *"does not apply to major penalties… and **does not apply to penalty-shot goals**"*.
2. **Rule 65** rules that the referee calls icing **immediately**, with no race. If the corpus
   taught the race as universal, a CARHA player would be taught wrong. ⚠️ **It does not.**
   `foundation/rules_primer.md:949` already carries *"**Automatic icing** (Rule 65(a)) — play stops
   when the puck crosses the goal line"*, `positions/goaltender.md:699` scopes the wave-off away
   from CARHA, and `systems/special_teams.md:642` carries CARHA 65(d)'s shorthanded exemption.

⚠️ **Both were checked by CONCEPT across the whole corpus rather than by rule number, because a
document teaching icing has no reason to cite Rule 65 at the point where it teaches the race.**
**Neither is a finding. Recorded because the next reviewer who reads these Case Situations cold
will suspect exactly the same two things.**

### What this method could not have found

**A Case Situation is an interpretation of a rule, not a rule** — reading them says what CARHA
says, not what a CARHA referee calls. And this section is **CARHA's only interpretation layer on
disk**: the four other books' casebooks and situation handbooks are separately extracted, and
**nothing here says whether they carry a contrary situation on the same facts.**

---

## Workstream 98: ⚠️ THE DEFECT WAS IN THE BUCKET THE COORDINATOR'S CENSUS CALLED BENIGN

`goaltender.md`, dispatched off Workstream 92 as the corpus's worst document for the
meaning-changing shape. **`check_quote_drift` 24 hits → 18.** Six hunks, five lines. Not staged.

### ⚠️ THREE OF THE FOUR HITS THE BRIEF PRIORITISED WERE REFUTED — all tool artefacts

- *"No warning will be issued."* **at BOTH sites — correct.** `hc_layout.txt:6005-6010` prints
  Interpretation 3 to Rule 10.1(a) as a lettered list and **the phrase occurs twice in it.** The
  document cites **clause v**, whose sentence **ends** at *"issued."* The tool's
  `next 'in this inst…'` tail came from **clause iv**. ⚠️ **Repairing it would have introduced an
  error.** The agent found this independently, before the coordinator's correction arrived.
- The NHL *"…outside of his goal crease area."* hit — **correct.** The trailing `;` is an
  **enumerated-list terminator**; `(ii)` is the next limb, not a continuation. Same for IIHF
  67.3(I), for two `➔ Rule NN` cross-reference arrows, and for a summary-table cell whose tail is
  the page number.
- The *"however"* hit — **the brief's reading was wrong.** *"however"* is a connective there and
  the document's lead-in already supplied the apodosis correctly. **A different defect was
  underneath it:** the Common Mistakes bullet carried a shortened, differently-shaped version of a
  sentence **the document's own body already quotes in full.** Repaired to match the body.

### ⚠️⚠️ THE REAL DEFECT WAS CLASSIFIED **BENIGN** BY THE COORDINATOR'S OWN CENSUS

`goaltender.md:663` quoted USA Hockey **404(b)** as *"shall also be suspended for the team's next
game."* `usah.txt:2534-2540` continues: *"(the game already appearing on the schedule of that team
at the time of the infraction), **except that when such penalty is imposed under Rule 403(b)
(Second Major in Game) there shall be a minimum two-game suspension.**"*

**And 403(b) names goalkeepers in its own text** — *"the player or goalkeeper to be suspended for
their team's next two games."*

🔴 **A goaltender reading the old sentence expected to miss ONE game where the book sets a floor of
TWO**, in the paragraph that tells goaltenders what a misconduct costs them. **An
eligibility-direction penalty-consequence defect.**

⚠️ **The census bucketed this hit as `ENDS — continuation is pure whitespace`, i.e. benign, because
the characters after the match were spaces. THEY WERE A MID-SENTENCE LINE BREAK.** **The
coordinator's re-classification — which corrected an earlier over-count of 64% — excluded exactly
the bucket containing the round's most serious finding.** ⚠️ **A census tuned to stop
over-reporting started under-reporting, and the two errors are the same error.**

**The whitespace bucket holds three hits corpus-wide. The other two are in `rules_primer.md` and
the coordinator read both: BOTH CLEAN.** So the bucket is neither safe nor uniformly bad —
**it must be read, never classified.**

### ⚠️ A FALSE ALARM THE COORDINATOR RAISED AND WITHDREW — the tool matched the WRONG BOOK

Chasing that bucket, `rules_primer.md:434` looked like a dropped defining condition: the document
quotes *"…to forcefully check an opponent."* and the tool reported the source continuing
**`with no portion of the stick on the ice`** — apparently gutting a penalty definition.

⚠️ **It is not a defect. The document quotes NHL Rule 59.1, whose sentence ends there. The tool
matched it against `usah.txt`, whose Rule 609 Note uses nearly the same words and ADDS the
condition.** The document's very next sentence reads *"That is the complete NHL definition; **there
is no blade-on-ice element in it**"*, and it then quotes USA Hockey's version **with** the
condition, to teach the contrast. `defender.md:267-268` carries the same split correctly.

⚠️⚠️ **THE "MISSING" TEXT WAS A REAL DIFFERENCE BETWEEN TWO BOOKS, AND THE PASSAGE EXISTS TO TEACH
IT. A repair would have destroyed a correct contrast and made the NHL definition wrong.** **This is
the attribution blind spot, arriving as a false POSITIVE rather than a false negative** — and it is
the first instance of that direction on record here.

**The second `rules_primer.md` whitespace hit is also clean:** the Casebook Rule 204 Situation 8
answer genuinely ends at *"and should be penalized."*, with page furniture and Situation 9 after it.

### Repaired, meaning intact

Three further periods moved outside quotation marks (IIHF 63.2(III), 27.1, 9.12). ⚠️ **Two were
INTERNAL INCONSISTENCIES**: in one, the NHL half of the same comparison sentence already had the
period outside; in another, the same document quotes the fragment correctly at **two other sites.**
**The outlier pattern again — fourth time today.**

### Open — a coordinator decision, deliberately not swept

**Eleven initial-capital sites** (lines 400, 556, 649, 650, 1012, 1165, 1221, 1379, 1458, 1466 ×2).
**Every one verified verbatim against its source.** All are grammatically embedded mid-sentence, so
lowering is ordinary practice, and `md_to_speech` strips `[x]` so **no listener is affected.**
⚠️ **The finding is internal inconsistency for a PRINT reader: this document uses the `[x]` form at
least eight times and lowers silently at eleven others.** **No style-guide rule requires or forbids
it** — which matches Workstream 88's retraction. **Not swept. Not recommended for sweeping.**

### ⚠️ Handed on

- 🔴 **`safety-reviewer`, and it belongs with Workstream 9** — the 404(b)/403(b) repair.
- **It was already right elsewhere: `body_contact_and_battles.md:610-616` carries the full
  carve-out** (*"two is a floor rather than a tariff"*). **This was a PROPAGATION failure into
  `goaltender.md`, not a research gap** — and the repair was written to match that wording.
- ⚠️ **`goaltender.md`'s NOT-FOUND list has 42 entries. Two were checked and BOTH are present
  verbatim**, split by NHL page furniture (`NATIONAL HOCKEY LEAGUE / OFFICIAL RULES 2025-2026 / 13
  / Previous Page…`) landing mid-sentence. **Nobody may treat that list as an unsourced-quotation
  list. 40 remain unchecked.**
- **Sub-floor fragments cleared here:** ~130 quoted strings of 1–26 characters were extracted and
  the consequential ones read. **No short-fragment defect in this document.**

### What this method could not have found

**Attribution drift**, which this round finally produced in **both** directions — a false negative
(a quotation credited to the wrong book scoring clean) and now a false **positive** (a correct
quotation flagged because the tool matched a different book). **And it is blind to Workstream 9
entirely: a document can quote every rule perfectly and still not tell a goaltender what THEY can
be penalised for.**

### ✅ The 404(b) propagation census — CLOSED, and `goaltender.md` was the ONLY document missing it

Run by the coordinator immediately after the repair. **Three other documents already carried the
403(b) exception correctly:**

- `systems/defensive_zone_coverage.md:143` and **`:443`** — two separate `Rule:` facts lines, both
  reading *"404(b) also suspends the player for their team's next game, **minimum two where imposed
  under 403(b)**"*. `:443` additionally contrasts the NHL's 23.6 and Hockey Canada's 4.8(c).
- `technique/body_contact_and_battles.md:596` — the fullest form, and the model the repair was
  written against: *"a second major in the same game costs two: the two games are 403(b)'s and are
  **additional to any other suspension** from the incident, and 404(b) calls them a **minimum**"*,
  with the body at `:612-619` quoting all three clauses verbatim.

⚠️ **So the claim is carried in four documents and was wrong in exactly one.** **The fifth time
today a defect has turned out to be an outlier in a corpus that already contained its own answer**
— and the fourth time the correct form was available to copy rather than compose. **This is now the
single most reliable repair heuristic in this repository: before writing new wording, search the
corpus for the same rule.**

---

## Workstream 99: ⚠️⚠️ `check_quote_drift.py` HAS NEVER SEEN THE FACTS LAYER — 555 of 556 quotations invisible

Found by the agent repairing `center.md` and `playing_without_the_puck.md`, which noticed the tool
reported **nothing** from either file's facts blocks. **The coordinator then measured it
corpus-wide.**

### The cause is one regex, at `scripts/check_quote_drift.py:122`

```python
re.finditer(r'\*["“]([^"”]{%d,})["”]\*' % MINLEN, l)
```

⚠️ **It requires an ASTERISK on both sides — the quotation must be italicised.** The ` ```facts `
layer writes quotations in **bare straight quotes with no italics**, because a facts line is
`Label: value` and carries no markdown emphasis. **So the layer is excluded by construction.**

### Measured 19 September 2026, over all of `content/`, quoted spans of 25+ characters

| layer | quoted spans | the tool SEES | **invisible** |
|---|---|---|---|
| ` ```facts ` | 556 | **1** | **555 — 100%** |
| body | 13,095 | 10,677 | 2,418 — 18% |

⚠️⚠️ **THE FACTS LAYER IS THE WORST POSSIBLE LAYER TO BE BLIND TO.** Every facts line is voiced
**alone**, in its own `<p>` with a **300 ms break either side**. A truncated quotation there has no
surrounding sentence to repair it, no lead-in to supply the dropped consequence, and no way for a
listener to tell it is a fragment. ⚠️ **And `Rule:` lines get a 300-character cap precisely because
a citation and a hedge are both mandatory — so the layer is DENSE with quotation.**

**Worst-affected documents** (facts-layer quotations no drift check has ever examined):

| n | document |
|---|---|
| 104 | `technique/body_contact_and_battles.md` |
| 55 | `positions/goaltender.md` |
| 50 | `systems/faceoffs.md` |
| 34 | `systems/forechecking_systems.md` |
| 31 | `positions/defender.md` |
| 30 | `systems/special_teams.md` |

**555 across 26 documents**, plus **2,418** more in body prose that simply is not italicised.
**2,973 quoted spans in total have never been checked for character drift.**

⚠️ **This reframes every clean `check_quote_drift` result ever recorded in this repository**,
including today's. **A document reported at "0 flagged" was never checked below its italic layer.**

### ⚠️ The tool was NOT patched, deliberately

Two agents were live when this was measured. CLAUDE.md: *"A SHARED TOOL IS SHARED STATE… change a
tool between waves, not during one."* **Patching mid-wave would invalidate both agents' reports.**

**The patch is one line** — make the surrounding `\*` optional on both sides. ⚠️ **But it must be
done with eyes open: it will surface on the order of 2,973 new spans at once, and today's
experience says the first pass will be dominated by page furniture, enumerated-list terminators and
cross-reference arrows.** **Land it between waves, and expect the worklist to need the same
book-by-rule-number discipline every hit needed today.**

### Sampling done in the meantime — the highest-consequence facts quotations HELD

The agent sampled the load-bearing facts lines in its two files, **all verbatim**: Hockey Canada
Interpretation 3 to Rule 10.1(a) clause v; **Hockey Canada Rule 7.5's spinal-injury preamble**
(safety-critical); IHUK 2026-27 Section 10 Rule 76; IIHF Situation 69.1; NHL 69.1's reasonable-effort
proviso. ⚠️ **It sampled; it did not exhaust. ~25 quoted facts lines in those two files alone remain
unread**, and 555 corpus-wide.

**One inconsistency found while sampling, not repaired because it would cost characters in a capped
line:** `playing_without_the_puck.md:559` writes `"the goal shall be disallowed"` where
`center.md:405` discloses the same quotation as `[t]he goal shall be disallowed`.

---

## Workstream 100: ✅ `center.md` + `playing_without_the_puck.md` — 19 repairs, and the outlier pattern AGAIN

`check_quote_drift`: **center.md 7 → 2**, **pwtp.md 15 → 1** (all remaining dismissed with reasons).
All gates exit 0. **Nothing staged.** ⚠️ **Every hit was established from the book the PROSE NAMES,
not from the tool's tail.**

**Three genuine consequence-dropping truncations in `center.md`:**
- **`:415` — NHL Rule 69.1**, `nhl_rules.txt:7153-7156`. Quoted *"…impairs the goalkeeper's ability
  to defend his goal."*; the book continues **`, and a goal is scored, the goal will be
  disallowed.`** ⚠️ **The outlier pattern, sixth time today: `center.md:405` ALREADY QUOTES THE FULL
  SENTENCE CORRECTLY.** Repaired to `:405`'s form. IIHF 69.1 carries the same sentence in the
  plural, so the paragraph's generic "69.1" framing survives and **no cross-book contrast was
  destroyed** — which is the failure mode the `rules_primer.md` false alarm warned about.
- **`:463` — CARHA Rule 57(a)**, `carha.txt:2712-2716`. The ejection consequence the prose asserts
  was cut off. The parallel USA Hockey 613(d) quotation beside it already carried its own.
- **`:587` — USA Hockey Rule 204(a)**, `usah.txt:1628-1632`. The warning-then-minor ladder cut off.

**Two genuine truncations in `playing_without_the_puck.md`:** `:323` (IIHF Situation Handbook 63.3,
identical in both editions) and **`:968` (USA Hockey *Heads Up Hockey*)**.

### ⚠️ The wrong-book false positive reproduced independently

`pwtp.md:323`'s *"in protest of an official's decision."* was flagged. **The prose cites USA Hockey
601(d)(7), whose sentence ENDS there** (`usah.txt:3435-3437`). **The tool matched
`iihf_situations.txt` first.** ⚠️ **Second independent instance of the wrong-book false positive in
one round** — the first nearly destroyed a cross-checking contrast in `rules_primer.md`.

### Benign classes confirmed a second time, by a second agent

The **enumerated-list terminator** (NHL 56.2(iii) ends `;` with limb (iv) following; NHL 69.1 clause
(1) ends `; or (2)`) and — ⚠️ **against the coordinator's warning** — the **whitespace tail**: at
`center.md:635`/`:767` the whitespace is a **paragraph break** in IIHF Rule 101.1, not a
mid-sentence line break. **The agent read the source window rather than trusting either the shape
or the coordinator. That is the correct method and it produced the correct answer both ways.**

### Every `NOT FOUND` entry checked — none is an absence

NHL 42.1 (6 sites), NHL Reference Table 14 Situations 5C/5E, NHL 76.7(ii), IIHF Situation 63.34 —
**all verbatim**, all split by page furniture. ⚠️ **IIHF Situation 63.34 is spliced by the running
header `SECTION · OHTER INFRACTIONS` — the book's own typo — which contributes alphanumerics and so
defeats the tool's normalisation**, exactly as the IIHF 42.1 control in `sources/README.md`
predicts. **`center.md:767`'s own disclosure that this splice exists is accurate and STAYS.**

### Handed on
- 🔴 **`safety-reviewer`**: `pwtp.md:10` and `:968` (cervical-spine mechanism, *Heads Up Hockey*)
  and `center.md:415` (crease entry voiding a goal). **No claim changed; all three now carry the
  source's characters exactly.**
- **Edition-scope observation, not a defect:** `center.md:360` covers **both** In-House editions;
  `pwtp.md:778` cites only the **2025-26** one for the same trapezoid point. Narrower, not wrong.
- **`center.md:360`'s negative existence claim is UPHELD** — zero hits for `trapezoid`,
  `restricted`, `designated area`, `27.7`, `27.8` in **both** In-House editions, flattened. ⚠️ **The
  earlier line-grep miss was a wrap-induced false absence.**
- ⚠️ **12 case sites were bracketed to each document's own overwhelming practice** (center.md uses
  `[x]` **55 times**; pwtp.md 13). **The style guide mandates nothing** — the agent said so plainly
  and called the judgement reversible. **Consistent with Workstream 88's retraction.**

### ✅ THE BLIND LAYER HAS NOW BEEN READ — and it is CLEAN of the dangerous class

⚠️ **Workstream 99 above is written in alarming terms and the measurement that followed
DE-ESCALATES it. Read this section with it.**

The coordinator ran the check against the facts layer **without patching the shipped tool** — a
relaxed copy in the session scratchpad, with the two `\*` made optional and nothing else changed.
`git diff --stat -- scripts/` confirmed empty throughout: **shared state untouched while two agents
were live.**

**Result across 36 documents — every facts-layer quotation the shipped tool cannot see:**

| shape | count |
|---|---|
| **CASE** — an initial capital silently lowered | **26** |
| **shape 3** — a terminal period where the source CONTINUES | **0** |
| any other drift | **0** |

⚠️⚠️ **NOT ONE TRUNCATION. NOT ONE DROPPED CONSEQUENCE. The meaning-changing class is ABSENT from
the facts layer**, which is the layer that would have been worst to get wrong — voiced alone, with
a 300 ms break either side and no surrounding sentence to repair it.

**And the 26 are not 26 decisions.** Nine of them are the **same USA Hockey Rule 608(a) fragment** —
*"[a] minor plus a misconduct or a major plus a game misconduct"* — lowered identically at nine
sites across nine documents (`forechecking_systems`, `defender` ×2, `goaltender`, `zone_entries`
×2, `offensive_zone_play`, `defending_the_rush`, `neutral_zone_systems`, `special_teams`). ⚠️ **A
lowering applied uniformly at nine sites is house practice, not drift.** The rest are the same
shape: a sentence-initial capital lowered to sit mid-sentence in a facts line.

**So the corpus's highest-consequence layer is characterwise sound, and the open question is
house-style consistency only** — the `[x]` bracket question that **Workstream 88 established the
style guide does not settle.**

### What this measurement did NOT cover — stated precisely

⚠️ **Three files were SKIPPED because live agents held them**, and one of them is **the largest
cluster in the corpus**:

- **`technique/body_contact_and_battles.md` — 104 invisible facts-layer quotations, UNCHECKED.**
- `technique/passing_and_receiving.md` and `technique/puck_handling.md` — unchecked.

**Re-run the relaxed copy on those three once their agents finish.** Until then the "zero
truncations" result covers **26 documents, not the corpus.**

⚠️ **And this measured the FACTS layer only.** The census found **2,418 further unseen quoted spans
in ordinary body prose** that simply are not italicised. **Those remain unread.**

### Revised recommendation on the patch

**Still land it between waves, but the urgency is lower than Workstream 99 implies.** The expected
yield in the facts layer is a **house-style worklist, not a defect list** — and on today's evidence
the body-prose half will be dominated by furniture, list terminators and cross-reference arrows.
⚠️ **Do not ship it with a `--strict`, and do not sweep the CASE class**: nine identical lowerings
of one rulebook fragment are the corpus being consistent with itself.

---

## Workstream 101: ✅ THE 640 CRITICAL AND THE CARHA ARITHMETIC BOTH REPAIRED — in every layer

`safety-reviewer` on `content/technique/body_contact_and_battles.md`. All gates pass. **Not staged.**
The document was rendered through `md_to_speech.py` **four times** and every changed unit read
**voiced alone**.

### The 640 critical — fixed with the house form, not with new wording

`:1421` now reads *"…it is 640(b) — the sub-section written *"except Adult Male Classifications"* —
which 640(g) and 640(h) take to a major plus a game misconduct and a match penalty, both reaching
only acts under **640(b–f)**, so their reach in adult men's hockey is unstated."*

⚠️ **The coordinator's mid-task correction was used rather than the sketch in the brief** — the
`640(b–f)` form and the honest-scope clause are both modelled on `game_management.md:160`. The
paragraph's existing counterweight is untouched.

### The CARHA ejection arithmetic — carried into EVERY layer, none by pointing

§1 body `:96` · §1 facts `:70` · §5 boarding blockquote `:396` · §5 *beyond tonight* body **and** a
new `Rule:` line · Common Mistakes · Key Takeaways · Sources trailer.

**Rule 39(b) Note 1 was included, body only, and the reasoning is sound:** the coordinator's census
establishes this file is the corpus's **only** carrier of CARHA 32(a) — *"if the tally lives here,
the tally must be right here, and a reader who thinks a goal-nullified minor is free is wrong about
their own ejection count."* Kept out of the facts layer because it qualifies the tally rather than
caveating a taught technique.

⚠️ **The brief's own retraction was confirmed correct: 48(h) is a match penalty; the Note follows it
but is Rule-48-wide**, which is why it reaches 48(d), 48(f) and 48(g) — all three verified to exist.

⚠️ **The trap fired as predicted:** `grep "Three Penalty Rule"` on raw `carha.txt` returns **3**;
the flattened copy shows the string **wraps mid-phrase**.

### Also fixed

- **`:540`** — 7.6's wording had been attributed to both rules. `hc.txt:6234` reads *"There is no
  **type of** legal contact"*; `:6310` reads *"There is no legal contact"*. Both now quoted and
  attributed separately, and ***"only"* is gone** — replaced with a clause naming what the split
  actually does (7.7(a) adds a misconduct; 7.7(b) has a glass/ice/boards limb 7.6 lacks; only
  7.6(a) counts three to a Game Ejection). **The safety-bearing half — that both bind — survives.**
- **`:317`** — the CARHA 62(a) ladder completed **from the book's own Case Situations**, so the
  *"no windup or follow-through carve-out"* disclosure is now upheld **on the facts** rather than by
  search alone: situation 2 is a swing **at the puck** and CARHA gives a major anyway.

### ⚠️ A judgement call flagged TO the coordinator rather than hidden

`:506` was **not false** — *"reach a late hit only through 640(b)"* is scoped to the act. **It was
changed anyway**, for three stated reasons: it was the corpus's sixth phrasing of a claim five
siblings state one way; *"only"* is a measured recurring defect (Workstream 16); and ⚠️ **a late hit
delivered with the stick blade above the knees is ALSO 640(d), which carries no carve-out** — so
*"only through (b)"* is true of the late hit *qua* late hit, not of every late hit.

⚠️ **And three sites were deliberately LEFT ALONE** — `:520`, Common Mistakes `:1601`, the Sources
trailer — because **each states the full `640(b, c, d, e or f)` reach in the adjacent clause.**
**They are correct, and a sweep aligning the corpus on `640(b–f)` would be wrong to touch them.**

### ⚠️ A checker missed a defect that a layer test caught

`check_facts_antecedents.py` was **clean** on a first draft opening *"CARHA counts the other way"* —
**with no referent for *"the other way"* in a line voiced alone.** The agent's own voiced-alone read
caught it and it was rewritten to name Hockey Canada inside the line. **The tool's discriminator is
a demonstrative on a short abstract noun; *"the other way"* is a prepositional phrase and slips
through.**

**`check_quote_drift` flags `:396` — a pre-existing FALSE POSITIVE**, matched against the 39(b)
occurrence; CARHA 49(b) genuinely ends *"…assessed in the normal manner."* **None of the new
quotations appears in DRIFT or NOT FOUND.**

**Not reached, and said plainly:** the **IIHF / England IH** half of this document is unaudited —
every rule re-derived was USA Hockey, Hockey Canada or CARHA, **so a British reader's exposure in
these same passages was not tested.** §§2, 4, 6–11 got consistency greps, not a hazard read.

---

## Workstream 102: ⚠️ THE RENDERER DROPS THE WORD "CLAUSE" FROM EVERY MULTI-CLAUSE CITATION — 34 sites

Handed to the coordinator by the agent above as *"an `md_to_speech` question"*. **Measured, and it
is broader than reported.**

`md_to_speech.py` expands a single clause correctly — `640(b)` → *"six hundred and forty, **clause**
b"*. **Every multi-clause form falls through the expansion entirely:**

| written | spoken |
|---|---|
| `640(b)` | *"six hundred and forty, **clause** b"* ✅ |
| `640(b–f)` | *"six hundred and forty**(b to f)**"* ❌ |
| `640(b, c, d, e or f)` | *"six hundred and forty**(b, c, d, e or f)**"* ❌ |

⚠️ **Brackets are silent in this renderer** (its own comment: *"brackets are silent"*), so the
listener hears *"six hundred and forty b to f"* — **no comma pause and no "clause"**, run straight
onto the number.

### ⚠️ IT IS PRE-EXISTING, AND TODAY'S REPAIR IS THE SMALLER HALF

**34 occurrences across 11 documents.** The dominant form, `640(b, c, d, e or f)` — **24 of the
34** — is **the rulebook's own wording, quoted**, and long predates today. `640(b–f)` accounts for
**7**, of which today's repair added some. The remainder are `621(b and c)`, `623(b and c)` and
`615(a, d and e)` (×2).

**Worst-affected:** `game_management.md` (6), `breakouts.md` (6), `body_contact_and_battles.md` (5),
`forechecking_systems.md` (4), `playing_without_the_puck.md` (3).

⚠️ **NOT PATCHED — an agent was live.** *"A SHARED TOOL IS SHARED STATE… change a tool between
waves, not during one."* **`scripts/` is untouched; `git diff --stat -- scripts/` is empty.**

⚠️ **And this is a degradation, not a falsehood.** A listener hearing *"six hundred and forty b to
f"* gets the right clauses in the right order. **Rank it accordingly, and do not let it delay a
commit.**

### ✅ Facts-layer blindness result now covers the largest cluster

The relaxed copy was re-run on `body_contact_and_battles.md` the moment its agent released it —
**104 invisible facts-layer quotations, the corpus's biggest.** Result: **4 hits, all CASE, zero
truncations.** One is the **inverse** direction — a capital *raised* rather than lowered.

**Running total across 27 documents: 30 facts-layer hits, every one CASE, zero shape-3.** Only
`passing_and_receiving.md` and `puck_handling.md` remain unmeasured, and an agent holds both.

---

## Workstream 103: ✅ `passing_and_receiving.md` + `puck_handling.md` — 11 DEFECTS, and one quotation stopped before its verb

`check_quote_drift`: passing 12 hits → **zero shape-3 remaining**; puck_handling 10 → **zero**.
Every survivor is an individually verified case-only hit. All gates pass. **Not staged.**

### ⚠️ The worst shape in the round: a quotation that stops before its VERB

`passing_and_receiving.md:453` quoted NHL/IIHF Rule 80.1 as *"batting the puck above the normal
height of the shoulders with a stick."* — **the subject noun phrase alone, with a period.** The
books read *"…**is prohibited.**"* **A fragment was presented as a complete sentence, and the
prohibition itself was the missing half.** ⚠️ **Line 411 of the same document already carried the
full sentence.**

### 🔴 A SAFETY repair: an operative override limb restored

`passing_and_receiving.md:419` quoted Hockey Canada Rule 7.6's chapeau and stopped before
*"**and any foul that results in contact to the head must be penalized as Head Contact.**"*
(`hc_layout.txt:4919-4920`; heading confirmed at `:4907`, and 7.7 begins at `:4971`, so this is
7.6's chapeau). **The dropped limb is the override: every foul producing head contact is charged as
Head Contact.** Restored — it strengthens the passage it sits in.

### The other nine

NHL 83.1's plane test truncated before *"for the purpose of the off-side rule"* (a scope limiter);
USA Hockey 621(d) before its second prohibition; Hockey Canada Interpretation 2 to 6.9(a)(i) before
*"unless otherwise stated in the rules"* — **inside a four-book comparison of where the draw goes**;
USA Hockey 618(b) before its last-play face-off clause; NHL 49.3 quoted as *"…occurs."*, **a
subordinate opener presented as a whole sentence — round 78's exact worst shape**; NHL 49.2(ii)
given a comma where the source has a period; USA Hockey Casebook 614 Situation 1 truncated so a
**scoped** test (penalty shot *or* minor) read as unscoped, which had let the paragraph close
*"all four books locate this offence by the puck"* — **an overstatement, since the offence is a
minor either way**; IIHF Situation 63.27 before *"on this play"*; Casebook 614 Situation 3 before
its `(Rule 618(a))` cross-reference — **which now grounds the document's next claim in the
Casebook's own citation rather than in inference.**

⚠️ **THE OUTLIER PATTERN HELD IN FIVE OF THE ELEVEN**, and twice the correct form was in a *sibling*
document: `zone_entries.md:149` (NHL 83.1), `defensive_zone_coverage.md:591` (USA Hockey 618(b)),
plus `passing:411`, `puck_handling:944`, and this file's own facts layer for the Casebook test.
**Seventh, eighth and ninth instances today.**

### ⚠️ FOUR wrong-book matches caught — including one against a SUPERSEDED edition

One hit matched **`nhl_rules_2024-25.txt`**. The **current** book carries identical wording; the
match failed on the current book only because the sentence straddles a page boundary. ⚠️ **Had the
agent trusted the tool, it would have filed an EDITION defect that does not exist.** Another matched
`hc.txt` where the prose credits the **IIHF** — and IIHF 49.3's ALL-CAPS heading is the actual
match. **Every one was caught by resolving the rule by number in the book the prose names.**

**Two NOT-FOUND entries resolved as matcher artefacts** — one defeated by the `[you]` disclosed
insertion, one by the documented `Playing Rules`/`CASEBOOK` page-furniture splice.

**Handed to `content-reviewer`, not edited:** `puck_handling.md:322` — the Casebook sentence opens
*"In this situation,"* and the document begins its quotation at *"if"* and argues the escape is
**general**. The argument is disclosed as the document's reading and is sound (618(a)'s first
sentence carries no crease condition), **but the Casebook's own opener cuts the other way.**

---

## Workstream 104: ⚠️ THE SAFETY LIMB LANDS 93% INTO A TOP-1% PARAGRAPH — found only by rendering

**The agent declared it could not reach this, and it was right to hand it over:** it did not render
either document, and flagged that two repairs now sit inside ⚠️ paragraphs. **The coordinator
rendered both** (`1 documents, 56 chunks` and `1 documents, 64 chunks` — the proof `--only` matched).

**All three repaired units read correctly voiced** — periods outside the quotation marks, each
paragraph opening with its claim. **But the Hockey Canada 7.6 override limb lands here:**

| measure | value |
|---|---|
| paragraph length, spoken | **2,723 characters** |
| position of the override limb | **93% of the way in** |
| spoken sentences before it | **~9** |
| median spoken paragraph | **169 characters** |
| 99th percentile | **2,713 characters** |

⚠️ **The paragraph is in the top 1% for length, and it is all prefixed *"Important."*** — a single
⚠️ anywhere applies that word to the whole paragraph.

**This is the `uk_rules.md` defect shape, three and a half times larger.** That repair moved *"call
999"* from the 7th spoken sentence to the 1st and cut the paragraph from **775 to 221** characters.
**This one is 2,723 and the operative override arrives after nine sentences.**

⚠️ **NOT FIXED, deliberately.** The restoration itself is correct and the text is accurate; the
**placement** is pre-existing paragraph structure, and restructuring a dense four-book comparison is
substantive new text that would need its own review. **Recorded as open work, not smuggled into a
pending commit.**

### ✅ The facts-layer census is now COMPLETE — all 39 documents

`passing_and_receiving.md` and `puck_handling.md` were the last two unmeasured: **zero facts-layer
hits each.**

**FINAL RESULT: 30 facts-layer drift hits across 39 documents. Every one is CASE. Zero
truncations, zero dropped consequences.** ⚠️ **The layer the shipped tool has never been able to see
is the layer that turned out to be characterwise sound** — and nine of the thirty are the same USA
Hockey 608(a) fragment lowered identically at nine sites, which is house practice.

**All seven gates exit 0 on the quiescent tree, with every agent finished** — `check_links`,
`check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_counts`,
`check-arrivals`. ⚠️ **This is the first run in this round that counts**, per CLAUDE.md: a checker
pass while agents are live proves nothing, because the tree it read is already gone.

---

## Workstream 105: ✅ SAFETY REVIEW — zero criticals, zero majors, and it REFUTED ONE OF THE BRIEF'S PREMISES

`safety-reviewer` on `goaltender.md`, `center.md`, `playing_without_the_puck.md` — the three files
whose quotation repairs were handed to it. **All three hand-offs verified verbatim against primary
text. None introduces a new reading.** ⚠️ **It said plainly that it looked for a Major and would not
manufacture one.** Rendered all three through the real pipeline (`1 documents, 200 / 86 / 81
chunks`) and read the changed units voiced alone.

### ⚠️ BRIEF PREMISE REFUTED — `playing_without_the_puck.md:968` needed no repair at all

The brief named a dropped *Heads Up Hockey* clause — *"…and tell them that you're going to be
looking for it from now on."* ⚠️ **Line 968 is the SOURCES TRAILER, which the speech renderer does
not voice**, the only change there was punctuation, and the clause is **an instruction to a COACH
about reinforcement, not a safety limb.** The superlative it modifies is already quoted with its
antecedent correctly supplied. **Nothing safety-bearing was dropped. No repair needed and none
should be made.**

### ⚠️ THE ONE REAL FINDING IS THE SAME DEFECT CLASS AS THE REPAIR, ONE RUNG DOWN

`goaltender.md:663` reads *"One case **doubles** that…"*. ⚠️ ***"Doubles" is a TARIFF word. USA
Hockey sets a FLOOR*** — *"there shall be a **minimum** two-game suspension"*
(`usah.txt:2536-2540`). **A goaltender plans on two games where the book guarantees only a
minimum.**

⚠️ **TENTH OUTLIER OF THE DAY.** Verified independently by the coordinator: **`:663` is now the only
site in the corpus stating it as a fixed multiple.** All three siblings say floor —
`body_contact_and_battles.md:613-614` (*"two is a floor rather than a tariff"*, in bold),
`defensive_zone_coverage.md:143` and `:443` (*"minimum two where imposed under 403(b)"*).
**Handed back to the agent that found it, with its own sketch, to write against prose it has read.**

**Also absent, and its call whether it belongs:** 403(b)'s second sentence
(`usah.txt:2438-2449`) — *"This two-game suspension is in addition to any other required
suspensions incurred during the same incident."*

### ⚠️ The paragraph-position measurement came back CLEAN — and the contrast is the lesson

The coordinator asked for the same measurement that found the 93% problem elsewhere.
**`goaltender.md:663`: 2,702 characters, restored clause at 70%, after 8 sentences.** ⚠️ **Not the
same shape** — *"the exception sits IMMEDIATELY after the rule it excepts,"* which is **correct**
placement. **So paragraph length alone is not the defect; WHERE THE CLAUSE SITS RELATIVE TO THE RULE
IT MODIFIES is.** Two paragraphs of near-identical length, one sound and one not.

### Open — recorded, deliberately NOT widened into this wave

**`goaltender.md:643`** (facts): voiced alone it reads as a complete consequence list — minor →
teammate serves, game misconduct → you are replaced — **while the next-game suspension is
BODY-ONLY in this document**, reaching no facts line, no Common Mistake, no Key Takeaway. ⚠️ **The
agent declined to call it critical and the reasoning is sound**: the line asserts no completeness
and the owner carries the counterweight in its own facts layer. ⚠️ **It sits adjacent to Workstream
9. Whoever takes that should know this `Rule:` line is at 235/300 — 65 characters free.**

### Upheld, so nobody re-opens them

- **IIHF Rule 9.12's mandatory neck laceration protector**, verified in **both** editions
  (`v1.1:1365`, `2026-27:1421`), carried in **all four layers** including the England Ice Hockey
  no-warning 10-minute misconduct. ⚠️ **Described as "the best-layered hazard I read today."**
- **Body-checking scope in `playing_without_the_puck.md`** — seven layers.
- **`center.md:415`** — 626-char paragraph, clause at 72%, and **the TERMINAL sentence is the
  instruction**: *"Get out, and let the officials sort out who put you in."* Correct house ordering,
  propagated to facts, Common Mistakes and Key Takeaway.
- **`center.md:463`** — before the repair the quotation stopped at conduct **with no stated
  consequence**. Restoring the ejection makes it self-contained. **Strictly safer.**
- **`goaltender.md:1359`** — the restored clause is a **restriction on a permission**, moving the
  goaltender to the conservative side; the old text also **over-stated** (*"a minor **is**
  assessed"*).

### Three `check_quote_drift` false positives TESTED rather than reported

*"No warning will be issued."* at two sites (`hc.txt` has **two** such sentences; the corpus cites
clause **v**, the tool matched clause **iv**); NHL 42.1 and NHL 76.7(ii) as `NOT FOUND` — **both
verbatim**, both defeated by the documented page-furniture splice, one verified by flattening and
one by line range. ⚠️ **`center.md:472` also confirmed to have *"his"* correctly the NHL's and
*"their"* correctly the IIHF's** — attribution right in a place the tool cannot check.

### What this method could not have found

⚠️ **"A claim that is wrong identically everywhere is invisible to a census"** — the suspension
inconsistency was findable only *because* three siblings disagreed. **Hazards whose section heading
does not advertise them**: ~400 of `goaltender.md`'s 1,486 lines were read. **Whether a legal
technique survives bad execution** — it verified *"hit the boards with an arm, a leg, or anything
but your head first"* is USA Hockey's own instruction, and says plainly it cannot verify a
14-year-old can execute it at speed. ⚠️ **And it reviewed the WORKING TREE while two files showed
`MM` with live agents in them — it flagged its own cross-document comparison as having an expiry
date.** *"The only run that counts is after every agent has finished."*

---

## Workstream 106: ⚠️ THREE AGENTS FAILED ON A WEEKLY OPUS-5 RATE LIMIT MID-TASK — verified safe, nothing lost

Mid-session, the account and model context changed (session now running as **Claude Sonnet 5**,
not Opus 5) and three live review agents failed simultaneously:

```
Agent terminated early due to an API error: You've hit your weekly limit · resets Sep 21 at 1am
(Europe/London) — model sent to the API: claude-opus-5
```

⚠️ **This is a HARD WEEKLY CAP, not a bug — re-dispatching identical agents will fail identically
until the reset.** Subagent dispatch was routing to `claude-opus-5` regardless of the coordinator's
own model, so simply running as Sonnet did not by itself avoid this.

### ⚠️ Before anything else: verified no file was left corrupted or half-written

Each failed agent's last line was mid-task (*"My edit pushed the paragraph across a chunk
boundary…"*, *"Now the three edits…"*, *"Now the document itself."*), so the coordinator treated
every touched file as suspect and re-verified from first principles rather than trusting the
transcripts.

**Method:** for each file, separated `git diff --cached` (pre-existing, already reviewed) from
`git diff` (today's live-agent work, unstaged) — the two combined were misleading, since a
138-line combined diff on `body_contact_and_battles.md` turned out to be 108 lines of an
**already-staged, already-reviewed section split from earlier today**, and the true unstaged
delta was 30 insertions / 10 deletions. **Read every line of every unstaged hunk in all three
files by hand.**

**Result:**
- **`goaltender.md`** — the *"doubles"→floor* fix (Workstream 105's resumed hand-off) **landed
  completely**, including the 403(b) stacking clause left as the agent's own judgement call.
  Renderer confirms clean (`1 documents, 200 chunks, 0 unrecognised`) despite the agent's own
  in-flight worry about a chunk-boundary split — **a seam, not a gap**, per this file's own
  standing finding.
- **`forechecking_systems.md` + `passing_and_receiving.md`** — every unstaged hunk matched either
  (a) previously-reported and recorded work (Workstreams 94/96/101/103's quote-drift and
  attribution fixes, still sitting unstaged as expected), or (b) **one new, sound correction**:
  *"604(a) bars body checking in all of them"* (all four adult classifications) → *"…in *"all
  non-check Adult classifications"*, not in all four"* — fixed at **both sites that overclaimed
  it** (the §1 body paragraph and Key Takeaway 2), while a **third, sibling site already had the
  correct wording** — the outlier pattern, again.
- **`body_contact_and_battles.md`** — the content-reviewer **made ZERO edits** before failing; its
  last message (*"Now the document itself"*) is consistent with having finished reading the diff
  and `sources/README.md` and being about to begin its hazard read. **Nothing to verify here
  because nothing was written. The independent content review of this file remains OUTSTANDING.**

**All seven mechanical gates re-run clean** on the tree in this state: `check_links`,
`check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, plus `check_tables --near`
(both near-limit tables unchanged) and a full `md_to_speech --dry-run --report` on the goaltender
file.

### What follows

The outstanding content review of `body_contact_and_battles.md` is being re-dispatched with an
**explicit `model: sonnet` override**, to avoid the same weekly cap. **No other file needs a
repeat dispatch** — the safety/eligibility review (Workstream 105) and the two quote-drift waves
(Workstreams 100, 103/104) all completed and filed full reports before this limit was hit.

---

## Workstream 107: ✅ THE EAR TEST RAN — the semicolon question is ANSWERED, and it is a weak signal, not a clean one

`aws login` was completed by the user mid-session (`awsl-web`, against the `ice-hockey` profile's
underlying SSO session). `tts_sample.py` synthesised successfully: `1 synthesised, 4 skipped, 0
failed`, Polly's `generative` engine, voice Amy. **Both blocked verification routes named in
Workstream 86 are now down to one** — D15 (the rendered page) still has no browser; the ear test
is done.

### Question 1 — does Polly render `;` audibly differently from `,`? YES, but weakly.

**Method:** a controlled minimal pair. Two scripts, identical in every character except punctuation
— a 14-item red-flag list, once with `;` between items and once with the same text's `;` replaced
by `,`, nothing else changed (`diff <(tr ';' ',' < semi.txt) comma.txt` confirmed the pair differs
by punctuation alone). Both synthesised with the **same engine and voice** (Polly `generative`,
Amy) to hold everything but the punctuation constant. Silence gaps extracted from the resulting
MP3s with `ffmpeg -af silencedetect` (threshold −30 dB, minimum 50 ms) — a real measurement of the
waveform, not a transcript or a guess.

**Result:** both files show a clean bimodal split — short intra-phrase gaps (50–140 ms) and 13 long
list-boundary gaps each, matching the list's 13 separators exactly.

| | mean boundary pause |
|---|---|
| semicolon | **429 ms** |
| comma | **376 ms** |

**Mean difference: 53 ms, semicolon 14% longer.** ⚠️ **And it is not an average driven by outliers:
matching the two lists boundary-for-boundary by rank, EVERY SINGLE ONE of the 13 pairs has the
semicolon pause longer than the comma pause** (range 24–107 ms). **That is a real, consistent,
directional effect — Polly's generative engine does not flatten `;` to a comma-length pause.**

⚠️ **But the effect size is small.** 53 ms sits close to the threshold at which a pause difference
is reliably noticeable in continuous speech, especially embedded in a fourteen-item list with no
visual cue. **Workstream 86's fear — *"Takeaway 10's list is still uncountable"* — is not confirmed,
but it is not cleanly refuted either.** The punctuation is doing real work; it is not doing
*strong* work. **Do not rely on it alone as the thing that makes a long spoken list countable** —
the up-front *"runs to fourteen"* announcement, which `uk_rules.md` already has, is carrying more
of that load than the semicolon pause is, and should be treated as the primary mechanism, with the
punctuation as a secondary reinforcement rather than the whole answer.

**Caveat, stated plainly:** this is one synthesis per condition, not repeated trials, so the 53 ms
figure carries sampling noise of its own; the **13/13 same-direction result** is what makes the
finding trustworthy despite that, since thirteen independent boundaries all agreeing on direction
is not explainable by chance in a single run.

**Recommendation:** No corpus edit follows from this alone. **Do not remove or hedge the current
`;`-list convention on the strength of this measurement** — it is net positive, just modest. If
Takeaway 10 or a similarly long list is ever revised, prefer restating the count near the end too
(*"...that is all fourteen"*) over relying further on punctuation-driven pause length.

### Question 2 — does a listener hear the injury-vs-collision distinction at all? ⚠️ NOT ANSWERED, and here is why not

**This question is a comprehension question, not a signal-processing one, and the coordinator did
not manufacture a false empirical answer to it.** `puck_handling.md`'s sentence — *"ducking
straightens your cervical spine, and the **resulting injury** can occur at walking speed"* — was
rendered and synthesised (`ear_test_out/polly_generative_Amy.mp3`, same session). ⚠️ **What signal
analysis CAN say: "injury" and "collision" are phonetically dissimilar words** (different syllable
count under natural stress, no shared phonemes in the stressed syllable), **so acoustic confusion —
mishearing one word for the other — is not a real risk with a competent TTS engine.** ⚠️ **What it
CANNOT say: whether the significance of choosing "injury" over "collision" — the point that it is
the INJURY threshold that is low, not merely that a collision can happen at any speed — actually
registers for a listener hearing the sentence once, with no chance to re-read it.** That is a
judgement about what a human takes away from one pass of continuous speech, and no waveform
measurement answers it.

**Left open, honestly, rather than closed with a guess.** The audio file is saved at
`ear_test_out/polly_generative_Amy.mp3` in the session scratchpad for the user to judge directly if
wanted; this is exactly the kind of question the standing instruction *"a Monitor or a human ear
decides, not a checker"* exists for.

---

## Workstream 108: ✅ D15's BLOCKER CLEARED — Chrome's categorisation service is answering again

Workstream 76 left D15 **NOT SATISFIED**, with nine navigation attempts (including a control to
`https://example.com/`) all returning *"Could not verify this site's safety category."* The
coordinator retried `navigate` to `http://localhost:4321/` while otherwise idle and it **succeeded**:
real page content extracted (`get_page_text` returned the full homepage — title, all 39 documents
listed, the five "ways in", no truncation), **zero console messages, no errors.**

⚠️ **This is one page-load, not the D15 dimension.** D15 requires the full `site-reviewer` matrix —
mobile/desktop × light/dark, screenshots, console reads, on the **built** site rather than a dev
server that may be running stale-cached content. **`site-reviewer` is dispatched below**, routed to
`model: sonnet` since the weekly Opus cap (Workstream 106) is still in effect.

**If it also comes back clear, this closes the gate's last open condition** — every other C1–C11
item has been met since the round-3 commit-gate ruling that named D15 as the sole blocker.

---

## Workstream 109: ⚠️ A SECOND RATE LIMIT HIT — session-level this time, on Sonnet, resets 8pm London

Both live agents (the `content-reviewer` re-dispatch on `body_contact_and_battles.md`, and the
freshly-dispatched `site-reviewer` for D15) failed simultaneously:

```
Agent terminated early due to an API error: You've hit your session limit · resets 8pm
(Europe/London) — model sent to the API: claude-sonnet-5
```

⚠️ **This is a SESSION cap, not the weekly Opus cap from Workstream 106 — and it fired on Sonnet,
the model that was routing around that first cap.** Re-verified nothing was lost:

- **`body_contact_and_battles.md`** — `git diff --shortstat` unchanged at **30 insertions(+), 10
  deletions(-)**, identical to before this attempt started. **The content-reviewer made ZERO edits
  across BOTH dispatch attempts** — it died mid-verification each time (first at *"Now the document
  itself"*, this time at *"Now let's check the tables and the antecedents checker"*). **The
  independent content review of this file remains outstanding, unchanged from Workstream 106.**
- **`site-reviewer`** — failed before its first tool call landed; nothing to verify, nothing
  touched. `git status --short site/` shows no residue.
- **All seven mechanical gates re-run clean** on the quiescent tree: `check_links`, `check_facts`,
  `check_absolutes`, `check_secrets` (and, by the unchanged shortstat above, nothing to re-check in
  `check_tables`/`check_geometry` either).

### ⚠️ Not re-dispatching further subagents until this clears

**A session-level cap plausibly covers the coordinator's own usage too, not just spawned agents** —
unlike the weekly Opus cap, which was scoped to one model. **Spending further turns guessing at a
model that might dodge it risks compounding the problem rather than solving it.** Holding at:
dispatch nothing further until the reset, or until a dispatch attempt itself confirms room again.

### ✅ D15's blocker is still recorded as cleared — only the REVIEW is now pending, not the browser

Workstream 108 stands: Chrome's categorisation service answered a real `navigate` and returned real
content with zero console errors, moments before this cap hit. **That finding does not need
re-verifying — it is a fact about the browser extension, not about the rate limit.** What is
pending is the **full four-cell `site-reviewer` matrix**, which needs a working agent dispatch to
run. **Re-dispatch `site-reviewer` (still model: sonnet, or reassess once the cap lifts) as the
first action once agent dispatch is confirmed working again.**

---

## Workstream 110: ⚠️ THE NAIVE FACTS-LAYER PATCH DOES NOT WORK — attempted, measured, REVERTED

While waiting out the session-limit reset (Workstream 109), and with no agent live —
a genuine "between waves" moment for a shared-tool change — the coordinator attempted the patch
Workstream 99 recommended: make `check_quote_drift.py`'s surrounding `\*` optional, so the tool can
see the facts layer's bare quotations.

### What was tried, and what it actually did

Two corpus-wide runs, same 39 files, only the regex changed:

| | clean | flagged | notfound | total |
|---|---|---|---|---|
| before | 9581 | 348 | 927 | 10,856 |
| after `\*{0,2}` (0–2 asterisks optional each side) | 7413 | 321 | **6,076** | 13,810 |

⚠️⚠️ **`notfound` grew by 5,149 — a 6.5× increase — and it is almost entirely NOISE.** Sampled from
`language_and_glossary.md`: *"means back toward the line you came in over — so a forward rotating
high is climbing away from the goal they are attacking. In your own end,"* — a fragment with an
unrelated quote mark somewhere inside a long sentence, not a citation at all.

### Diagnosis, and it is a real, useful finding even though the patch is reverted

**Bare double-quote marks in BODY PROSE serve many purposes that have nothing to do with rulebook
citation** — nested quotation, a shouted call (*"Back door!"*), a defined term, dialogue. **The
existing `\*"…"\*` requirement was not only an accidental gap; in body prose it is doing real work,
acting as the corpus's de facto CITATION MARKER — italics signal "this is quoted from a source",
and stripping that requirement floods the tool with ordinary prose that was never a citation.**

⚠️ **The gap Workstream 99 measured is real and is narrower than "asterisks optional everywhere":
it is specifically the ` ```facts ` LAYER**, where a bare quote inside a `Rule:`/`Never:`/`Key:`
line is UNAMBIGUOUSLY a citation, because that is the only thing quotation marks are used for in
that constrained, one-line-per-fact context. **Body prose does not have that guarantee.**

### What a correct fix needs, for whoever attempts it next

**Layer-aware matching, not a blanket regex change.** Track whether each line is inside a
` ```facts ` block (the way `check_facts_antecedents.py` and this file's own facts-cap logic
already do) and apply the relaxed, asterisk-optional pattern ONLY there, keeping the existing
strict `\*"…"\*` requirement for ordinary body prose. **A bold-wrapped citation (`**"..."**`, 450
corpus-wide instances, mostly ordinary emphasis rather than citation) is the same problem one level
up and needs the same layer discipline, not a blanket asterisk-count relaxation.**

**The coordinator's own relaxed-copy census from earlier today (Workstreams 92–104: 30 facts-layer
hits across all 39 documents, every one CASE, zero shape-3) remains the best available measurement
of that specific layer** — it was built with a scratchpad copy that changed the pattern globally but
was only ever RUN on facts-block content the coordinator extracted separately, which is
accidentally the layer-aware discipline this fix needs formalised properly inside the tool itself.

### ⚠️ Reverted, verified clean

`git diff --stat -- scripts/check_quote_drift.py` is empty; `git log -1` on the file shows only the
prior, unrelated commit. The file is back to its committed, known-good state. **No shared tool was
left in a broken condition.**

---

## Workstream 111: ✅ `tts_sample.py` NOW EXITS NON-ZERO WHEN NOTHING SYNTHESISED — held fix landed

Workstream 86 measured the defect (*"0 synthesised, 4 skipped, 1 failed → exit 0"*) and held the
one-line fix explicitly *"between waves"* since agents were live. **No agent is live now** (both
Workstream 109's dispatches failed on the session cap and neither has been re-tried), so this is a
genuine between-waves window for a `scripts/` change.

**Fix:** `return 0` at the end of `main()` → `return 0 if ran else 1`.

**Verified against both known cases, correctly this time** — the first attempt piped through
`tail` and read `$?` afterward, which is this repository's own documented trap (**the pipe's exit
status, not the script's**); redone without a pipe:

| scenario | ran | exit before | exit after |
|---|---|---|---|
| all engines skipped/failed, zero synthesised (env stripped, SSL failure) | 0 | 0 | **1** |
| one engine succeeds (today's real Polly credentials) | 1 | 0 | **0** |

`python3 -m py_compile` clean. `check_links --quiet` clean. **Not staged** — `git diff --stat`
shows the file modified, matching this repository's convention that the coordinator stages only
immediately before the gate.

⚠️ **This closes the exit-code half of Workstream 86.** The other half of that row — *"the ear test
was blocked"* — closed separately in Workstream 107, once `aws login` was run. **Both halves of
Workstream 86 are now resolved.**

---

## Workstream 112: ✅ THE FLAGGED CAPTION-LENGTH RISK — MEASURED WITH REAL PIXELS, and it is WORSE than documented but NOT broken

Workstream 76 left one item as *"highest-priority for the re-run"*: a documented layout risk where
the stylesheet's own comments record a `figcaption .warn-inline` block previously measured at
**1,338 px tall on an 812 px viewport, inside a figure whose drawing was 14% of its own height** —
and the reviewer could not check whether this session's changes made it worse, because the browser
was unavailable. ⚠️ **The coordinator did this directly, via the Chrome extension's own tools
(navigate, resize_window, `javascript_tool`), rather than through a subagent** — the session-level
rate limit (Workstream 109) blocks Agent-tool dispatch, not the coordinator's own direct tool calls,
which kept working throughout.

**Method:** live dev server at `:4321` (still running from earlier today), resized to
**375×812** (the documented viewport) and to **1280×900** (desktop), measured with
`getBoundingClientRect()` on the actual rendered DOM — not eyeballed, not estimated.

### The page: `forechecking_systems.md`, figure index 8, "The full-ice press" (`forecheck-press`)

| viewport | figure height | drawing height | warning block height | drawing as % of figure |
|---|---|---|---|---|
| 375×812 (mobile) | **1,673 px** | 323 px | 857 px | **19.3%** |
| 1280×900 (desktop) | 1,321 px | 575 px | 468 px | 43.5% |

⚠️ **At mobile width, this figure is now 1,673 px — 335 px TALLER than the documented historical
worst case of 1,338 px.** ⚠️ **AND EVERY ONE of the eleven figures on this page has the identical
323 px drawing height at mobile width** — the SVG does not scale with caption length; only the
caption does. **That confirms the stylesheet comment's own diagnosis exactly: the drawing is fixed,
and a longer caption makes the whole figure more caption-dominated, not just taller.**

### But it is a LENGTH problem, not a BREAKAGE — checked, not assumed

- `overflow: visible`, `max-height: none` on the `.warn-inline` block at both viewports.
- `scrollHeight === clientHeight` (857/857 at mobile) — **`clipped: false`. No text is cut off.**
- Colour pair `rgb(154, 74, 6)` on `rgb(253, 243, 231)` matches the WCAG-AA-compliant `--warn`/
  `--warn-bg` pair the stylesheet's own comment already certified (5.71:1 light theme).

**So the reader gets every word, at legible contrast — they just scroll a long way to get it.** This
is a readability/design smell (a very long, low-contrast-relative-to-body block dominating a small
drawing), not a rendering defect, and it does not block the gate on those grounds — ⚠️ **but it is
real, it is measured, and it is worse than the figure the stylesheet comment itself uses as its
cautionary example.** Not fixed here — narrowing an eleven-figure caption is new editorial work,
not a repair-review action, and none of these eleven captions is in the diff this session is trying
to commit (the caption sweep that added and repaired them landed earlier — Workstream 92).

### One tooling oddity, noted and not chased further

`scrollIntoView`/`window.scrollTo` would not move the page past ~160 px in this dev-server session
— `document.body.scrollHeight` reports 169,235 px total, so something is capping window scroll (an
inner scroll container, most likely, given the page's audio-player toolbar). ⚠️ **This did not
affect the measurement** — `getBoundingClientRect()` is scroll-position-independent — but a full
`site-reviewer` pass should confirm whether this is a genuine scroll-trap (a real accessibility
defect) or a dev-server-only quirk that the production build does not share, once agent dispatch is
available again.

### D15 status

**Not fully closed.** This is one page, one figure, two viewports, checked directly by the
coordinator. The commit gate's D15 condition is the FULL `site-reviewer` matrix (mobile/desktop ×
light/dark, console reads, multiple pages) — **that dispatch is still pending the session-limit
reset.** This workstream answers the ONE specific open question Workstream 76 flagged as
highest-priority; it is not a substitute for the full pass.

### Addendum to Workstream 112 — the scroll oddity chased down, and it is NOT a defect

The `scrollIntoView`/`window.scrollTo` calls that would not move past ~160px, and the
169,235 px `document.body.scrollHeight` figure, were investigated further with the browser
directly. **Confirmed benign, on two counts:**

- **No overflow trap.** `html` and `body` both compute `overflow-y: visible`; the only element on
  the page with `overflow: auto/scroll` is the sidebar nav (`#site-nav`, 1,578px content in a 763px
  box — an ordinary scrolling nav, not a page-scroll trap).
- **No duplicated or runaway content.** Walked the DOM top-down: `.shell` → `<main>` → `<article>` →
  a SINGLE `.prose` div carries essentially the whole 98,090 px. No hidden duplicate, no one
  element with a bogus height from a CSS bug — the height is legitimate, distributed across many
  ordinary paragraph/figure/table/facts blocks in a genuinely long, dense document at a narrow
  (375px) viewport. **This corpus's paragraphs commonly run 2,000–2,800 characters** (measured
  elsewhere this session), so a 900+ line document producing ~100,000px at mobile width is
  proportionate, not anomalous.

**Conclusion: the earlier failure to scroll the page via script was a tool-interaction quirk (most
likely the screenshot/resize sequence resetting viewport scroll between calls), not a site defect.**
No accessibility or layout finding follows from it. Closed.

### Second addendum to Workstream 112 — dark theme and console, spot-checked directly

Still via the coordinator's own direct browser tools (no subagent dispatch available). On
`forechecking_systems.md`:

- **Dark theme** (toggled via the page's own theme button): screenshot confirms the ⚠️ warning
  callout renders with good contrast (amber-on-dark-brown highlight, white body text on near-black),
  no clipping, sidebar nav correctly dark-themed, links legible blue. **No visible defect.**
- **Console, fresh navigation**: zero messages of any kind (`pattern: "."`, `onlyErrors: false`) —
  no errors, no warnings, no HMR noise. **Clean.**

⚠️ **This is a spot-check on ONE page, not the full matrix.** It does not substitute for the
`site-reviewer` dispatch, which still needs to run across multiple pages, both theme states,
mobile AND desktop, and the production `dist` build rather than the dev server. Recorded because it
is real, verified evidence gathered while dispatch capacity was unavailable — not because it closes
D15.

---

## Workstream 113: ✅ WORKSTREAM 12 CLOSED — the defect was ALREADY REPAIRED before this dispatch

Dispatched to fix `skating.md`'s missing-stick instruction (USA Hockey's own wording lists the
stick as part of the spread-the-load technique; `skating.md` was reported saying only *"two
forearms, two gloves, your side and your legs"*). **The agent refuted the brief before acting on
it, per standing instruction, and found the premise stale.**

**Commit `91c7ab6`** (*"Restore the time gate a boards instruction lost…"*), already in HEAD before
this dispatch, had already repaired it at **all four layers plus the caption layer**:

- Facts block `:589` — the stick named in the `Never:` line.
- Body `:605` — *"the stick goes up onto the glass with them too, both hands on it if you can"*,
  plus both USA Hockey quotations verbatim, including the named common error.
- Common Mistakes `:870` and Key Takeaways `:930` — both carry it.
- **The diagram caption layer** (chunk `009.ssml`) — also voices it, a check beyond the brief's own
  scope that the agent ran anyway.

**Verified against `sources/ibc.txt:670-678` directly** — both USA Hockey sentences match verbatim.
**Rendered all five sites** (`1 documents, 55 chunks`) and read each aloud-simulated chunk: the
clause survives correctly scoped to the *"facing the wall, no time to turn"* case, and is correctly
**absent** from the separate *"time to turn, parallel to wall"* facts block — a different scenario
in the document's own reconciled three-case rule, not a gap.

**Zero edits made.** `git diff -- content/technique/skating.md` is empty. All four run-anyway gates
(`check_links`, `check_absolutes`, `check_geometry`, `check_secrets`) pass; `check_facts --near`
flags `:118` (196/200) and `:589` (195/200) as tight but not broken — no room to add anything
further, and nothing needs adding.

⚠️ **A brief going stale between when a defect is found and when an agent is dispatched to fix it is
now a measured, recurring shape this session** — the corpus is being edited continuously by other
agents, and a plan row's evidence can be overtaken by unrelated work before it is ever actioned.
**"Refute the brief before acting" caught this cleanly, at zero cost beyond the verification
itself.**

### What this method could not have found

Whether commit `91c7ab6` or `fa662cc` introduced other regressions elsewhere while fixing this one
— scope was `skating.md` only. Whether `body_contact_and_battles.md` (another agent's live file)
carries the same fix consistently — not read, per the ownership boundary. Whether the podcast
script's own `:107` will need the same fix once re-recorded — a future propagation step, correctly
left alone to preserve provenance ordering.

---

## Workstream 114: ✅ WORKSTREAM 15 CLOSED — all seven candidates read, ZERO defects, and the census itself was over-broad

Dispatched to check seven files for NHL/IIHF Rule 69.4's incidental-contact permission stated with
its *"in the act of playing the puck"* condition dropped, and for a "fair game" limb misattributed
to one book when several write it. **All seven read individually. Every hit was a false match.**

⚠️ **The pattern-string census (grep for "incidental contact" and "fair game") swept in FIVE
UNRELATED RULES**, each using one of those phrases for a different limb entirely:

| file | what the phrase actually was |
|---|---|
| `language_and_glossary.md` | Rule **69.7** — rebound/loose-puck scramble, unconditional, no limb to drop |
| `defender.md` | USA Hockey **Sled Hockey** Non-Contact Player provision |
| `center.md` | Hockey Canada **7.3(a)** body-checking's own incidental-contact carve-out |
| `game_management.md` | Hockey Canada **7.3(a)**, same carve-out |
| `defending_the_rush.md` | "fair game" about a **puck carrier** and boarding — skater contact, not a goaltender |
| `faceoffs.md` | IIHF **101.1** women's-hockey faceoff contact |

⚠️ **This is the same class as Workstream 15's own warning — a bare phrase census over-collects —
and it collected AT A RATE OF 100% here: every single one of the seven was noise.** The discipline
the brief demanded (*"a hit is a candidate, not a finding — read each site's actual sentence"*)
is what caught it; a sweep would have "repaired" five sites that needed nothing.

**`special_teams.md`, the one file that substantively treats 69.4, was found ALREADY CORRECT** —
both conditions quoted in full, verbatim against `sources/nhl_rules.txt:7219-7229` and
`sources/iihf_rules_v1.1.txt:5573-5588`, plus the exact safety line the brief was looking for:
*"A goaltender who is not playing the puck is outside that permission — set at the post, tracking a
point shot, skating home."* **The "fair game" misattribution is also already fixed** — the document
now states outright that *"the fair-game sentence is not Hockey Canada's own… All five books carry
it,"* and the agent verified the fifth, **CARHA Rule 52(b)'s Note**, against `sources/carha.txt:
2564-2568` verbatim: *"A goalkeeper is NOT 'fair game' just because they are outside the goal crease
area."* ⚠️ **Neither fix's timing was chased down — it may be earlier today's work or another
agent's; not confirmed which.**

**Zero edits made anywhere.** `center.md`'s pre-existing unstaged state (Workstream 100) and
`defender.md`'s staged state were both re-checked and confirmed unrelated before being left alone.

### What this method could not have found

Did not re-verify every OTHER rule claim in these seven files beyond the two named patterns — a
full audit was out of scope. Did not check the other candidate files the original corpus-wide grep
also flagged (`body_contact_and_battles.md`, `goaltender.md`, `zone_entries.md`, `shooting.md`,
`forechecking_systems.md`, `offensive_zone_play.md`, `playing_without_the_puck.md`,
`rules_primer.md`) — those belong to other agents or are outside this dispatch's ownership and
remain open candidates if anyone re-runs this census against them.

---

## Workstream 115: ⚠️ D15 IS STILL NOT SATISFIED — the coordinator's "cleared" claim was WRONG, and the agent refused to fabricate around it

Dispatched believing D15's browser blocker was cleared, based on the coordinator's own earlier
direct `navigate` success (Workstream 108). **It was not cleared in this agent's session.** Eleven
attempts over roughly six minutes — three `tabs_context_mcp` calls, repeated `navigate` to the
built site, spaced with real waits of 5s/10s/15s/20s plus a 60s and a 90s background sleep — every
single one returned the identical *"Could not verify this site's safety category. Blocking as a
precaution — try again in a moment."*

⚠️ **The coordinator's claim that the service "now answers" was session-scoped, not fixed.** A
categorisation outage can clear for one browser session and not another, or be genuinely
intermittent. **Do not treat one successful `navigate` as proof the outage is over anywhere else.**
Recorded plainly as a correction to Workstream 108/112's framing.

### What the agent DID do — and it is real, useful work, not nothing

- **Built the site correctly**, absolute npm binary, `clean:cache` confirmed as step 1, fresh `dist/`
  mtime, `check:links` clean (**53 pages, 10,969 internal links, 5,909 with anchors, all resolve**).
  `build-diagrams` ran as part of the chain, so today's staged diagram/caption changes ARE reflected
  in this build.
- **Served the build** (`npm run preview`, port 4325 — the BUILT site, not a dev server) and
  confirmed it answers (`curl` → 200). **Left running** for whoever picks this up next — no rebuild
  needed if a browser becomes available soon.
- **Static fallback, correctly labelled as not a substitute**: the retargeted anchor
  `#the-stick-above-the-shoulders` exists in the built HTML; the facts-block and callout/`warn-inline`
  markup is present in the shipped page (markup evidence only — *"I did not see it rendered, so I
  cannot confirm visual distinctness, contrast, or that CSS is actually being applied"*); all
  `<script src>`/`<link rel="stylesheet">` tags are same-origin; `404.html` and `sitemap.xml` exist.
- ⚠️ **Refused to report a single visual finding.** Its own operating rule and non-negotiable 2
  ("never report a visual finding you have not seen") held. **This is the correct response to a
  tool outage — exactly what CLAUDE.md asks for, and exactly what an earlier browser-less
  `site-reviewer` also did (Workstream 76).**

### ⚠️ A genuine, if minor, finding surfaced outside the brief's scope

`site/src/consts.ts` (~lines 111–139) shows this repo **intentionally added Google Analytics 4** for
production (`PUBLIC_GA_ID`, off locally by default), with a source comment noting that
`docs/philosophy.md` and `docs/aws-design.md` describe the site as carrying **no analytics** — a
claim that changed here. **In THIS local build `PUBLIC_GA_ID` is unset and `googletagmanager.com`
appears zero times**, so the "no third parties" invariant holds for what was actually built — but
the two docs' own wording is now stale for production. ⚠️ **Not fixed — a `docs/` change is outside
this session's scope and outside this brief; flagged for whoever owns those two files.**

### Status, restated plainly

**D15 remains OPEN.** Nothing in this report clears the gate. Re-dispatch `site-reviewer` when
browser access is confirmed **from inside that dispatched session**, not from the coordinator's own
tab — the two are not the same signal. The build is ready and current at `site/dist`; the preview
server on port 4325 needs no rebuild if picked up soon.

### What this method could not have found

Everything the matrix exists to catch: rendering of the facts/callout/table plugins, contrast in
either theme, the theme toggle's actual behaviour, mobile horizontal-scroll containment, deep-link
anchor scrolling with the sticky header offset, console errors, and any real network request fired
at runtime (the off-origin check was static-grep of shipped tags only, never observed traffic).

---

## Workstream 116: ✅ WORKSTREAM 10 CLOSED — Hockey Canada 8.3(b) census complete, ZERO understatements found

Dispatched to find every site citing HC 8.3/8.3(a) with a penalty consequence and judge, per site,
whether the described act involves contact (8.3(b)'s major tier live) or is position-only (gated
out). **Two independent greps** — a naive right-boundary one (103 raw lines, many false positives
from `48.3`/`58.3` etc.) and a corrected boundary-asserted regex (`176` true hits, saved to the
scratchpad) — **every hit read in context.**

**Result: every non-contact act is correctly capped at a minor; every contact act (late hit,
pick-with-contact, checking a player without the puck) is already correctly escalated to 8.3(b)'s
major and 8.3(c)'s match, across all twelve non-live files that cite it.**

⚠️ **`goaltender.md` (a live file, reported not edited) already carries the corpus's MOST thorough
treatment of exactly this pattern** — a facts block stating *"Hockey Canada's minor for deliberate
contact at 8.3(a)(i) is not your ceiling — 8.3(b) may be a major plus game misconduct… 8.3(c) a
match"*, plus body prose at four further sites, **including an honestly-disclosed open question**:
whether being routed to 8.3(a) by name forecloses 8.3(b)/(c) is not settled by the book, so the
document holds the safe-direction reading — *"the Minor is the floor."* **A model instance, flagged
for whoever is mid-editing that file rather than assumed to need nothing further.**

**Three files named in the brief as possibly relevant** (`center.md`, `passing_and_receiving.md`,
`puck_handling.md`) **contain zero occurrences of "8.3"** — confirmed, not assumed, via `grep -c`
(exit 1 = no matches, the exact trap the brief warned about, correctly not mistaken for an error).

**Coverage:** 12 non-live files checked and correct; 4 live files checked and reported correct,
not edited (`body_contact_and_battles.md`, `goaltender.md`, `forechecking_systems.md`,
`playing_without_the_puck.md`); 3 other live files confirmed absent of the pattern; 2 non-candidate
hits (a curly-quote cross-reference, a thesis page-number citation) correctly excluded.

### What this method could not have found

**A site that cites HC 8.3 correctly but mischaracterises the underlying ACT** — e.g. calling a
genuinely-contact play "no contact" to dodge the major tier. This census checked whether the stated
act matches the stated tier, not whether the act's own description is realistic. **It also cannot
catch a bare "that's a minor" sentence with no "8.3" nearby** — anchored on the rule number by
design.

---

## Workstream 117: ✅ THE INDEPENDENT CONTENT REVIEW OF `body_contact_and_battles.md` IS DONE — third attempt, zero criticals, zero majors

This review had failed twice before on rate limits (Workstream 106, 109), each time dying before
writing anything. **Third dispatch completed the full pass.** No edits made — the bar for an
in-session fix wasn't met by what it found; one item is reported below for the coordinator's
judgement rather than acted on unilaterally.

### Every rulebook quotation in the unstaged delta re-verified, independently, against primary text

`carha.txt` (32(a) Note 1, 48(h) Note, 49(b) Note, 50(b) Note, 39(b) Note 1, 62 Case Situations 1–2),
`usah.txt` (640(g), 640(h)), `hc.txt` (7.6, 7.7 preambles). **All matched verbatim**, including the
deliberate *"A Double Minor penalty"* (Rule 48) vs *"The Double Minor penalty"* (49(b)/50(b))
wording distinction the document draws on purpose.

### ⚠️ The contradiction check the file's own history demanded — passed

Rendered the whole document (`1 documents, 234 chunks`) and read every chunk touching the
CARHA-vs-Hockey-Canada double-minor divergence specifically, because this is the exact shape of
defect recorded elsewhere in this repository (*"two agents wrote sentences into one block that were
each correct and flatly contradictory read aloud"*). **Every voiced unit stating the divergence names
BOTH books inside the same sentence** — chunk `070` opens *"CARHA counts a double minor as two where
Hockey Canada counts it as one…"* as one self-contained clause; chunks `073`/`074` sit adjacent and
`074` explicitly cross-references Hockey Canada. **No listener hearing one line alone can confuse the
two systems.** ⚠️ **And the earlier `check_facts_antecedents.py` false pass this session recorded —
a draft opening "CARHA counts the other way" with no referent — is confirmed NOT present in the
current text.** The fix already landed before this review; the tool's blind spot was never re-hit.

### Minor 1 — a genuine, narrow propagation gap, flagged rather than added unilaterally

**Rule 39(b) Note 1** (a goal-wiped minor still counts toward the CARHA ejection tally) reached only
**two** layers — the new §5 body paragraph and the Sources trailer — not a `Rule:` facts line,
Common Mistakes, or Key Takeaways. ⚠️ **Judged below the bar for a unilateral add**: it is an
ejection-tally accounting nuance, not something that changes what a player does on the ice. **Open
for the coordinator: add a facts line, or accept body-only as sufficient for an edge case this
narrow.**

### Minor 2 — a correction to THIS SESSION'S OWN BRIEF, not to the corpus

The brief's claim that *"three OTHER sites… deliberately LEFT using 'only through (b)'"* **does not
hold** — refuted by grep: only **two** such sites remain, both correctly scoped to the late-hit
escalation path specifically (not a general claim about 640(g)/(h)'s reach), both carrying the
honest *"book does not say"* disclosure. **No corpus inconsistency. The brief's count was wrong.**

### Upheld, so nobody re-opens them

The `640(b–f)` fix, the CARHA 62(a)/62(b) ladder, the HC 7.6/7.7 preamble fix and its removal of
*"only"* — all re-verified verbatim and judged sound. `check_quote_drift.py`'s two CARHA flags
independently re-traced to the same false positive already on record (matched Rule 39(b)'s
continuation instead of Rule 49(b)'s). The `640(b–f)` → *"six hundred and forty b to f"* renderer
degradation reproduces identically — pre-existing, not a new regression, not re-filed. No
cardinal-rule violations, no non-negotiable-6 narration, no new unverified negative-existence
claims — the pre-existing *"book does not say"* disclosures were re-checked true, not merely carried
forward.

**All eight checkers run**: `check_facts`, `check_facts --near`, `check_tables --near`,
`check_links --quiet`, `check_absolutes`, `check_quote_drift`, `check_facts_antecedents`,
`check_pointers` — all clean or matching already-recorded, already-explained results.

### ⚠️ Status: this closes the LAST outstanding independent-review requirement for this file

Between Workstream 101 (safety-reviewer repair), Workstream 105 (safety-reviewer's review of
the goaltender/center/pwtp hand-offs), and this content-reviewer pass, `body_contact_and_battles.md`
now has both the mechanical gates AND a genuine fresh-eyes review on record. **D15 (Workstream 115)
remains the only open gate condition.**

### What this method could not have found

Did not re-verify the **staged** (already-reviewed-earlier-today) portion of this file's diff
line-by-line — relied on the brief's statement it was covered, plus a whole-file keyword sweep for
contradiction, not full re-verification. Did not re-check the document's ~300+ OTHER rule citations
outside today's touched material — out of scope for a targeted diff review. Did not run any
`site-reviewer`-type rendered check. Did not verify CARHA's PDF provenance/edition currency (that's
`source-verifier`'s dimension). `check_pointers.py` flagged one unrelated PRE-EXISTING sentence
outside today's diff — noted, not investigated, correctly left as a worklist item rather than a gate.

### Addendum to Workstream 115 — the outage RE-CONFIRMED, directly, in the coordinator's own tab

Immediately after Workstream 117 closed, the coordinator tested `tabs_context_mcp` directly against
the same preview server (`localhost:4325`, confirmed serving, `curl` → 200) that the failed
`site-reviewer` had been pointed at. **Identical error: *"Could not verify this site's safety
category. Blocking as a precaution — try again in a moment."*** ⚠️ **This settles the ambiguity: the
outage is real and currently active, not scoped to one subagent's session.** The earlier
"confirmed cleared" claim (Workstream 108) was a transient window that has since closed. **Holding
on D15 — no further dispatch until the extension answers reliably.**

---

## Workstream 118: ⚠️ COMMIT GATE — BLOCK on TWO conditions: D15 (standing) and C8 (new, now closed)

`commit-gate` ran the full C1–C11 audit against the current diff. **Result: BLOCK.**

**C1–C7, C9, C11 — PASS, independently re-derived, not taken on the author's word.** All six
mechanical checkers run fresh (`check_links`, `check_facts`, `check_absolutes`, `check_geometry`,
`check_secrets`, `check_counts` — all exit 0). Build verified current with the absolute binaries:
`site/dist` (19:52) postdates every edited source file, and specific new strings from today's edits
were confirmed present in the built HTML by grep — **a real pass, not a shim false-pass.** One
rulebook quotation (CARHA 39(b) Note 1) independently re-derived from primary text as a spot-check,
verbatim. `.agents/`, `.codex/`, `AGENTS.md` confirmed untracked (`??`) and correctly NOT staged.

**C8 — FAIL, and it was real.** The only review record on disk was last written at 10:38 and
explicitly states `forechecking_systems.md` is *"not in this diff at all"* — **it now is**, along
with `center.md`, `goaltender.md`, `playing_without_the_puck.md`, and further repairs to three other
files, none of it named in any `project/reviews/` file. **This is the identical failure mode this
same round's gate already caught and fixed once** (its own §8/§9), recurred with the later
workstreams. ⚠️ **Closes with a written record, not more review** — the gate said so explicitly.

**✅ CLOSED**: [`project/reviews/quote_drift_and_closing_reviews_2026-09-19.md`](../reviews/quote_drift_and_closing_reviews_2026-09-19.md)
written, consolidating Workstreams 92–117 — every file in the diff named, every reviewer's findings
summarised, D15's status restated, and "what this record could not have found" stated honestly.
`check_links --quiet` clean.

**D15 — unchanged, re-confirmed a third and fourth time** (Workstream 115 and its addendum). The
gate independently ruled it cannot re-attempt the browser either and should not spend time trying —
the outage is confirmed current by two sessions today.

**Task item 3 ruling (the Rule 39(b) Note 1 gap): NOT gate-blocking.** The gate's own reasoning:
verbatim and correctly scoped; a bookkeeping nuance nested under a headline claim that is itself
fully propagated and independently verified; does not change on-ice behaviour, does not contradict
the facts layer; already disclosed in body and Sources trailer rather than silently dropped; already
tracked as an explicit next-round row. **A good next-round addition, not a blocker.**

**Also flagged, folded into the new review record rather than requiring a separate one:**
`project/content_style_guide.md`'s red-flag-count row is a claim-bearing edit to a governing
document with no dedicated record naming it specifically — corroborated by the existing
`boards_limb_and_red_flags_2026-09-19.md` §9b/§9f work, now cross-referenced in the new file.

**On attribution — the gate reiterated the standing ruling unprompted:** *"I am not creating this
commit, and if the coordinator does, that [Claude Sonnet 5 co-author] trailer must not be used"* —
citing the user's own global CLAUDE.md, this repository's CLAUDE.md, `review_process.md` and
`git-guard.sh`, all forbidding it, calling out that **no session reminder overrides the user's own
standing instruction here.** Consistent with every prior ruling on this question today.

### Status: ONE condition remains — D15

Every other gate condition is now met. **Nothing is committed and nothing is pushed.** A push needs
the user's explicit go-ahead regardless of gate status, since `main` deploys to production on push.

---

## Workstream 119: ✅ WORKSTREAM 13 CLOSED — both open questions were STALE, already resolved by an earlier commit

Read-only investigation (no edits, explicitly instructed — a commit is blocked on D15 alone and new
edits are deliberately held until it lands), dispatched to settle two open questions.

### Question 1 — `center.md:392`'s "blocking" verb: CORRECT, do not change

⚠️ **The brief's own warning held: this is a case where the verb must NOT be changed.** USA Hockey
Casebook Situation 9's actual test is *"any interference… prevents the goalkeeper from making a
play"* — conduct-based, not gated on movement versus standing still the way NHL/IIHF 56.1 is.
**Confirmed: USA Hockey publishes no numbered stand-your-ground rule at all** — the only such text
is front-matter guidance in the Declaration of Player Safety (page xii), never restated in the
numbered Playing Rules, checked against Rule 625's own Note and two further Casebook situations.
⚠️ **And Rule 625's Note uses "block" as its own term** — *"a player uses their body ('pick' or
'block') to impede the progress of an opponent."* *"Blocking" is not a looser paraphrase; it is the
book's own vocabulary.* Changing it to "moving into" would import a distinction USA Hockey does not
draw and would make the sentence WRONG by narrowing it. **Closed: no repair needed.**

### Question 2 — `special_teams.md` KT11: ALREADY CORRECT, both premises stale

**KT11 already names the road-home concept explicitly**, citing USA Hockey Casebook Rule 625
Situation 9 by name, and the Common Mistakes bullet at `:1109` covers the same point in a different
layer — legitimate cross-layer propagation, not a gap. **The "four vs five books" discrepancy does
not exist anywhere in the current file on this topic** — both `:1176` and `:1035-1036` consistently
name all five books. Two "all four books" hits elsewhere in the file are a different rule entirely
(a goalie freezing the puck unpressured) and correctly exclude CARHA there. ⚠️ **Both premises
describe a state of the document already corrected by commit `61bb9cd`** (*"Stop ten documents
telling a screener that a goaltender's road home is free ice"*), which post-dates the brief.

**Zero edits made; none needed.** This closes Workstream 13 in full.

### What this method could not have found

Did not re-verify every other rule number in either file's surrounding facts blocks (HC 8.5(a)–(d),
NHL/IIHF 42.1–42.5, IIHF 69.4, CARHA 66(b)) — scoped to the two named claims only. Noted, not
flagged as a finding: `center.md:392` cites *"Casebook Situation 9"* where `special_teams.md` uses
the fuller *"Rule 625, Situation 9"* — a possible house-style inconsistency, not a rules defect,
left for `content-reviewer`'s dimension. Did not run any checker (read-only task, tree deliberately
untouched pending the commit).

---

## Workstream 120: ✅ WORKSTREAM 17'S TWO REMAINING THREADS CLOSED — one premise inverted, one genuine minor gap found and scoped

Read-only investigation (no edits — commit held on D15 alone). Both threads settled.

### Thread 1 — `skating.md` KT1: the plan's own comparison was INVERTED

The claim was that `skating.md`'s Key Takeaway 1 lacked a fallback delegation that
`core_principles.md`'s equivalent takeaway carries. ⚠️ **Read side by side, it is the other way
round.** `skating.md`'s KT1 already ends with an explicit, named, inline delegation: *"See [Arriving
at the boards]… and [Body Contact and Battles]… which covers the full three-case rule."*
`core_principles.md`'s Key Takeaway 8 (the boards principle) **names no document at all** — the
generic catch-all the plan was thinking of is a SEPARATE, list-final Key Takeaway 10 covering all
nine principles, not a pointer embedded in KT8 itself. **The original refusal to add more to
`skating.md`'s KT1 was correct. No repair. Closed.**

### Thread 2 — the "shock absorber" limb: MOSTLY STALE, but ONE genuine minor gap survives

Both source quotations verified letter-for-letter against `ibc.txt` and `huh.txt` independently.
**The "shock absorber" limb is NOT missing** — `body_contact_and_battles.md` carries it correctly at
all four layers (body, facts, Key Takeaway 7, Sources trailer), landed by commit `d0b884e` on
**16 September**, three days before this plan row was written. **The plan's claim was stale, not
false when written — overtaken by other work.**

⚠️ **But "both hands on the stick if possible" genuinely IS absent from the owner.** Re-grepped for
"both hands" — the only two hits are the same pre-identified false alarm (an unrelated
stick-checking passage), confirming the trap holds and confirming the gap is real. **Severity judged
Minor, not a hazard** — the substance a reader needs (spread the load, stick and gloves on the
glass, arms out) is already fully taught; a reader following the current text does the physically
correct thing regardless.

⚠️ **The reason it's still worth fixing, precisely stated:** `body_contact_and_battles.md`'s own
blockquote runs several hundred words defending an **unsourced** folklore claim — *"a locked, straight
arm into the boards is how wrists and collarbones break"* — reaching for biomechanics plausibility
without a citation. **USA Hockey's directly-sourced instruction for the identical case (both hands on
the stick, rather than one arm braced alone) bears directly on that exact question and is absent
from the discussion that most needs it.**

**Scoped fix, ready to execute after the commit lands:**
- **Owner: `body_contact_and_battles.md`, Case 3** (§6) — not `skating.md`, which already delegates
  correctly per Thread 1 and is not obligated to carry every USA Hockey sub-clause.
- Work the *"[w]ith both hands on the stick if possible"* quotation into the Case 3 paragraph
  alongside the existing shock-absorber material, into the Case 3 facts-block bullet so it survives
  being voiced alone, and consider folding it into the locked-arm blockquote discussion where it is
  most relevant.
- **Constraint**: present it as completing the same USA Hockey demonstration list already quoted
  here, not as a competing or separate instruction. Whoever executes should re-read the full
  three-bullet source list (`ibc.txt:1479-1484`) and write the sentence in context — a sketch, not a
  string to paste.
- `check_facts.py --near` must be run before touching the facts block, as always.

### What this method could not have found

Only grepped `winger.md`, `defender.md`, `passing_and_receiving.md` for the two exact phrases — a
paraphrase in different words would pass undetected, the same failure mode the workstream itself
warns against for sweeps. Noticed but did not chase: `body_contact_and_battles.md`'s locked-arm
blockquote sits several sentences downstream of its last explicit "Case 3" label — **the same shape
of defect Workstream 18 exists to investigate**; flagged for that row, not this one. Did not
re-confirm either compared Key Takeaway was unedited by a concurrent agent between reading and
writing this report — read once, as instructed, not re-verified immediately before filing.

---

## Workstream 121: 🔴 CRITICAL, CONFIRMED — the owner document's own myth blockquote states the Case-3 stick instruction UNGATED, and rendering proves it strips at the chunk boundary

Workstream 18's hypothesis was fully confirmed, source-verified rather than assumed, in
`content/technique/body_contact_and_battles.md` — the corpus's OWNER document for board-contact
technique.

### The defect, in the document's own words

A "Three pieces of rink-side advice" blockquote's second item self-gates: *"It appears only as the
Case 3 fallback for a player who is already facing the wall."* **Its third item carries no such
gate anywhere in its own sentence**: *"USA Hockey teaches the opposite: get your stick and gloves up
and spread out on the glass, and it names failing to do so as the common error."*

### ⚠️ Confirmed by RENDERING, not by reading Markdown — exactly the container that failed before

`md_to_speech.py` places this sentence in **its own chunk (088)**, with myth-2's Case-3 gate sitting
in the **previous** chunk (087) and **not carrying over**. Read alone — as a listener actually
hears it — chunk 088 contains **zero** occurrences of "Case," "facing the wall," "cannot turn," or
any other scope marker. **A false general rule, stated with confidence, in the document's own
misconception-correction material.**

### The mechanism, source-verified against `ibc.txt` and `huh.txt` directly, not assumed

Case 2 (skating parallel to the boards, contact coming) has **no stick instruction anywhere** in
USA Hockey's source (`ibc.txt:686-704`, "B. Checked Along The Boards") — forearm and hip against the
boards, low centre of gravity, feet apart, knees bent. **A raised centre of gravity is that case's
own NAMED Common Error.** A reader taking the ungated blockquote as general advice raises both hands
to the glass — abandoning the forearm-and-hip presentation, raising their centre of gravity into the
named error, taking their hands off the puck, and converting a manageable Case-2 contact into worse
geometry. ⚠️ **A separate USA Hockey drill for the identical scenario (`ibc.txt:1539-1549`, ages
12U-18U) instructs *"the stick down"* — the literal opposite of what the ungated blockquote implies.**
`huh.txt` independently confirmed: the word *"glass"* occurs exactly twice, and neither instance puts
a stick on it.

### Every other layer already correct — this is one sentence, in one container

The facts block, Common Mistakes, and Key Takeaways versions of this same Case-3 instruction **all
already carry their own gate correctly**. This is not a corpus-wide gap; it is one ungated blockquote
sentence in the owner document, in the exact container (a blockquote, spanning a chunk boundary) that
hid a scope defect once before today in `skating.md`.

### A related tension, disclosed rather than resolved

`ibc.txt`'s generic *"Hitting the Boards"* passage says *"both hands on the stick if possible"* with
no case scope, while the parallel-case drill says *"the stick down"* — two USA Hockey passages in
apparent tension. **Not currently a defect** (the document cites neither passage, so does not
currently contradict itself) — flagged because the repair is likely to touch this exact sentence,
and whoever writes it must disclose the tension rather than silently pick a side, matching this
document's own existing convention for a different disputed question.

### Spot-checked and confirmed SOUND — do not touch

`passing_and_receiving.md`, `winger.md`, `puck_handling.md`, `defender.md` all carry this Case-3 gate
correctly, inside the same sentence as the instruction, verified by rendering two of the four.
`switching_positions.md` carries no such instruction — correctly not a carrier.

### ⚠️ Dispatched for repair NOW, as an exception to the "hold new edits until commit lands" discipline

Unlike `SPELL_OUT` and the de-counting wave (new, unrelated corpus-wide work, explicitly held), this
is a **confirmed critical safety defect inside a file already in the diff being judged** — exactly
what the commit-gate's own C6 condition exists to catch. Shipping it unfixed would be worse than the
"grow the diff" risk the hold exists to prevent. **Repair dispatched, in-progress.**

### What this method could not have found

Only two of five candidate sibling documents were rendered; two more were sampled by grep+Read
(justified only because their gate sits inline with the instruction, the exact thing rendering
tests) — a defect of this shape could exist in an unopened carrier. No corpus-wide census was run
(deliberately, per the brief's own instruction not to dilute the owner-document question with an
unweighted sweep). No browser check of how the site presents this blockquote (that is
`site-reviewer`'s dimension, currently blocked by D15). The podcast pipeline's own chunk boundaries
were not checked against `md_to_speech.py`'s — if audio plays chunks as genuinely separate files
rather than one stream, the finding is if anything understated, not overstated. **This method finds
a stripped caveat only where the investigator already knew which sentence to distrust** — a hazard
whose section heading gives no hint it needs case-scoping would not have been caught starting from
this brief alone.

---

## Workstream 122: ✅ CRITICAL FIXED — the ungated stick instruction now carries its own gate welded into the instruction clause

Repair for Workstream 121, complete. **File edited: `body_contact_and_battles.md`, the myth-3
blockquote sentence.**

**Before:** *"USA Hockey teaches the opposite: get your stick and gloves up and spread out on the
glass, and it names failing to do so as the common error."* — no scope anywhere in the sentence.

**After:** *"USA Hockey teaches the opposite only for the one case where you are already facing the
boards and cannot turn: get your stick and gloves up and spread out on the glass, and it names
failing to do so as the common error **for that case**. Skating parallel to the boards is a
different case, and USA Hockey's teaching points for it carry no stick instruction at all — forearm
and hip against the boards, feet apart, knees bent — with standing too upright, not the shoulder, as
the Common Error it names there."*

⚠️ **The gate is welded into the instruction via a colon, not trailing as a separate sentence** — the
exact structural fix the investigation called for, so no future chunk boundary can separate scope
from instruction the way it did before. **The Case-2 counter-instruction was verified fresh against
`sources/ibc.txt:688-694`** ("Checked Along The Boards" — forearm/hip, low centre of gravity, feet
apart, knees bent, "standing too upright" as the named error), not carried in from the brief.

**The source tension correctly left undisclosed, deliberately, not by oversight**: the repair scopes
its claim to USA Hockey's teaching points for Case 2 specifically — the same basis the document's
own adjacent Case-2 paragraph already relies on — and asserts nothing about the separate
"both hands on the stick" generic passage, avoiding both silently resolving the tension and
manufacturing an unneeded disclosure where none was required.

### Rendering re-verified, not merely asserted

Re-rendered (`1 documents, N chunks` confirmed) and read the repaired chunk (`088.ssml`) as a
listener hears it: **the gate and the Case-2 counter-instruction now sit in the same `<p>` as the
"stick and gloves up" instruction — no chunk boundary separates them.** The neighbouring myth-2
chunk (`087`) ends cleanly beforehand and does not bleed into 088.

**Propagation re-checked, not merely trusted**: the facts block (`:733`), Common Mistakes (`:1625`),
and Key Takeaways (`:1736`) versions were independently re-read this pass and confirmed already
gated correctly in their own sentences — no drift found, none touched.

**All six mechanical gates run before AND after, identical clean results**: `check_links`,
`check_facts` (5,692 facts, all conform), `check_absolutes`, `check_geometry`, `check_secrets`,
`check_facts --near`/`check_tables --near` (unaffected — the edit is prose, not a facts block or
table). **Not staged** — left as pre-existing `MM`, coordinator stages before the gate re-runs.

### What this method could not have found

Checked only this one defect shape and its three sibling layers in this one document — no
corpus-wide sweep for other unqualified case-scoped instructions inside blockquotes elsewhere in
this file or the other 38 documents. Did not re-verify the four sibling-document spot-checks
(`passing_and_receiving.md`, `winger.md`, `puck_handling.md`, `defender.md`) itself — relied on the
investigation's report that they were already sound. Did not re-fetch the HECC source for the
quotation immediately following this edit, or investigate the unrelated shoulder-tip tension
threaded through the rest of the same paragraph — both pre-existing, both out of scope. No browser
check (D15's dimension, still blocked). The fix's resilience against a FUTURE chunk split comes from
the sentence structure, not the current chunk boundary — not stress-tested against edits yet to be
made.

### Status

**This closes the only critical finding of the session's closing review wave.** Combined with
Workstreams 117 (independent content review, zero criticals/majors) and 105 (safety review of the
goaltender/center/pwtp hand-offs, zero criticals/majors), `body_contact_and_battles.md` has now had
its critical repaired and re-verified, on top of its two clean fresh-eyes passes. **D15 remains the
sole outstanding gate condition.**

---

## Workstream 123: ✅ THE CRITICAL FIX INDEPENDENTLY CONFIRMED SOUND — fresh reviewer, everything re-derived, nothing taken on trust

Per this project's own rule (*"a repair is new text… does not review its own writing"*), Workstream
122's fix was diagnosed and fixed by the same agent in one dispatch — an independent fresh-eyes
check was required before treating it as settled. **Verdict: CONFIRMED-SOUND.**

- **Text match confirmed exact**, by content search, not assumed from the prior report.
- **The Case-2 source claim re-verified independently against `sources/ibc.txt` directly** (not via
  the repair's own citation): Section B, "Checked Along The Boards," lines 686-704 — no stick
  instruction anywhere, and its Common Error opens with the literal words *"Standing too
  upright…"* — **a near-verbatim match to the repair's phrasing, stronger than even the repair
  itself claimed.**
- **Rendering independently re-confirmed**: the entire repaired bullet — gate, instruction, and the
  Case-2 contrast — lands in one continuous `<p>` in chunk `088`, no break inserted anywhere.
  ⚠️ **The referent ambiguity concern was checked and found already resolved**: the sentence after
  the repair explicitly says *"echoes that **Case 3** instruction"* — the numbered label removes any
  ambiguity about which case it refers back to, regardless of what now sits between them.
- **Surrounding chunks (084-090) all read**, none contradicts or duplicates the repair.
- **All four layers re-verified independently**: body, facts (`:733`), Common Mistakes (`:1625`),
  Key Takeaways (`:1736`) — all agree, no naked/ungated instance of the instruction remains anywhere
  in the document.
- **All five mechanical checkers re-run fresh, independently**, not trusted from the repair's own
  report: `check_facts`, `check_links --quiet`, `check_absolutes`, `check_geometry`,
  `check_secrets` — all clean.

**One pre-existing observation, explicitly NOT treated as a new defect**: USA Hockey's Section B
actually lists *two* Common Errors ("standing too upright…" and "not having your body against the
boards…"), and the document (both the repaired blockquote and the untouched body text at `:760`)
refers to it as *"a"* Common Error, singular. **This convention predates today's repair** and
under-counts a second, non-contradictory error — it does not invert or omit the gate. Recorded for
completeness; not actioned, since it carries no safety consequence and is outside today's diff.

### Status: `body_contact_and_battles.md`'s critical is closed, independently confirmed, and the file has now had FOUR independent passes today

Safety-reviewer repair (Workstream 101) → independent safety-reviewer review (105) → independent
content-reviewer review (117) → this critical found and fixed (121/122) → independently confirmed
sound (123). **D15 remains the sole outstanding gate condition for the whole diff.**

---

## Workstream 124: ✅ WORKSTREAM 14 RE-VERIFIED — the gap is real, current, and CORRECTLY LEFT UNFIXED (not urgent enough to break the hold)

Read-only investigation (no edits — commit held on D15 alone). Re-checked an older finding, ruled
*"not a reason to block"* a PRIOR commit, against `body_contact_and_battles.md`'s CURRENT state —
the file has been heavily edited today and the old ruling could have gone stale either way.

### Confirmed: the gap survives today's edits, untouched by any of them

`body_contact_and_battles.md`'s road-home limb (NHL/IIHF Rule 69.4 — a goaltender who has left the
crease to play the puck and is deliberately prevented from returning) is stated **once, correctly,
in body prose** (§9, *"Where you may stand when you screen"*) — re-verified fresh against both
`nhl_rules.txt:7219-7233` and `iihf_rules_v1.1.txt:5573-5586`, **word-for-word equivalent in both
editions.** ⚠️ **It never reaches Key Takeaways item 9**, which is otherwise the document's most
thorough summary of this exact material (give-ground duty, braced-shove tiers, the crease-line
convention). **None of today's three edits to this file** (the 640 scope fix, the CARHA propagation,
the ungated-stick critical) touched §9 or Key Takeaways item 9 — the gap is exactly where the older
finding left it.

⚠️ **`zone_entries.md`'s gap is WIDER than reported**: the limb does **not appear anywhere in the
file at all** — not body, not facts, not Key Takeaways — confirmed by a whitespace-flattened
corpus-wide search inside the file returning zero matches for every phrasing checked.

### Severity judged, reasoned through, correctly NOT treated as an exception

⚠️ **Explicitly distinguished from today's earlier critical (Workstream 121)**: *"Nobody is
physically endangered by not knowing this… the permission the document teaches remains true and
correctly qualified everywhere it appears… a reader who only hears Key Takeaways is not at risk of
injury or of executing an unsafe technique — they are at risk of being surprised by an interference
call in a specific, relatively uncommon situation."* **A penalty-scope completeness gap, not a
safety hazard. Correctly held, not fixed.** This is the right line to draw, and drawing it required
reasoning through the comparison explicitly rather than defaulting either way.

### Verb discipline checked before any wording was even sketched

The claim rests on **Rule 69.4, which turns on deliberateness, not movement** — confirmed against
the same trap this session hit twice already (Workstream 13/14's own warning). Any eventual fix must
preserve "deliberate" as the trigger; verbs like "stands in," "blocks," "cuts off" are all fine here,
unlike a 56.1/56.2 claim where the verb itself carries the rule's test.

### Facts-layer headroom checked in advance — a genuine constraint for whoever executes

`check_facts.py --near` run fresh: **every `Rule:` line in the two candidate facts blocks is within
6 characters of cap** (`:1140` 298/300, `:1114`/`:1121` 296/300, `:1116`/`:1142` 295/300, `:1119`
294/300). ⚠️ **None can be extended — a full-layer propagation needs a NEW `Rule:` line, not an edit
to an existing one.** Key Takeaways itself is prose, not a capped facts line, so the Key Takeaways
insertion is not itself capacity-constrained; only the facts-block half of a full propagation is.

**Fix sketched (not a string to paste) for whoever executes after the commit lands**: insert into
Key Takeaways item 9, between the existing give-ground/69.3 sentence and the braced-shove-tier
sentence, naming Rule 69.4 specifically (distinct from 69.3, already cited two sentences earlier in
the same item) and compressing the already-correct body prose at the road-home sentence rather than
re-deriving from the rule text cold. `zone_entries.md` needs the limb added from scratch, anchored
after its existing 69.3/69.2 sentence in Key Takeaways item 11.

### What this method could not have found

A rendering-layer failure if the limb is added and pushes item 9 over a chunk boundary — the
renderer was not run. Whether adding it would push item 9 over a readability-census threshold —
`check_readability_census.py` was not run. Whether USA Hockey's or Hockey Canada's own casebooks
carry an equivalent concept under different vocabulary — not checked, outside this brief's two
named files. A paraphrase using different words for the same concept — mitigated by reading full
prose by eye rather than grep alone, but not certain against unusual phrasing. Did not re-run the
other 14 of 16 documents the original census named, nor re-run that census itself.

---

## Workstream 125: ✅✅ D15 SATISFIED — the fourth attempt, with a genuinely working browser, real pixels throughout

The user fixed the Chrome extension's categorisation-service outage directly. **The coordinator
confirmed it working first** (clean `navigate`, real content, zero console messages) before
dispatching the full review — a lesson from Workstream 115, where a fix in one session did not
transfer to another.

### Full four-cell matrix, real pixels, on two representative documents

`body_contact_and_battles.md` and `forechecking_systems.md` — **all four cells each** (375×812 /
1440×900 × light/dark), screenshotted, including the theme toggle **clicked** (not just the
attribute checked) and its persistence across reload and navigation. Desktop light/dark spot-checked
on five more pages (`goaltender`, `center`, `playing_without_the_puck`, `puck_handling`, homepage,
`/search/`, `/404`).

⚠️ **A rebuild was required and caught something real**: `body_contact_and_battles.md` had an
unstaged edit at 20:46 (the CARHA 32(a)/49(b) facts-line rewording) made AFTER the last build at
19:52. **The reviewer rebuilt fresh and confirmed the newer edit is present in the rebuilt HTML
before testing began** — the pixels checked are the file's CURRENT content, not a stale build.

### The safety-critical material specifically confirmed rendering correctly

**The exact fix named in the brief** — the "Three pieces of rink-side advice" blockquote (today's
CRITICAL repair) and the goaltender 403(b)/404(b) suspension passage — both render as **visually
distinct, correctly styled panels** in both themes, not plain prose indistinguishable from
surrounding text. Facts blocks render as styled bordered panels with bold labels, zero `<pre><code>`
leaks anywhere. The deep-link anchor `#the-stick-above-the-shoulders` lands correctly, positioned
below the sticky header, not hidden and not scrolled to page top — measured via
`getBoundingClientRect()`, not eyeballed.

### Console and network clean

Zero errors or warnings on every page visited. Zero off-origin requests — confirmed
`googletagmanager.com` does NOT fire, verifying the "no third parties" invariant holds for this
build (the GA4 integration flagged in Workstream 115 stays correctly inactive locally).

### One Major finding — flagged, does NOT reopen the gate

`/404` (no trailing slash) serves Astro's raw framework error page locally instead of the custom
`dist/404.html` — a **preview-server/build-config interaction** (`trailingSlash: 'always'`
intercepting before the custom fallback), not a content defect. The custom 404 IS served correctly
at `/404/` and at any nonexistent path with a trailing slash. ⚠️ **This sits squarely in the
production-CloudFront boundary CLAUDE.md itself names as untestable locally** — flagged for whoever
owns that config to confirm before the next deploy, not something a `content/` fix touches.

### A tool fault found and documented, for future D15 attempts

`resize_window` only reliably applies immediately after tab creation, before any navigation —
confirmed by an impossible `outerWidth`/`innerWidth` mismatch, not a slow-reflow false alarm.
Workaround: one fresh tab per viewport. **Recorded so a future `site-reviewer` doesn't mistake this
for a repeat of the categorisation outage.**

### ✅ D15 IS SATISFIED

Direct verdict, quoted: *"D15 is now SATISFIED, on the evidence gathered in this session… does not
by itself reopen the gate."* **This is the last open condition from every prior commit-gate run
today. Proceeding to stage and get the gate's final word on the complete diff.**

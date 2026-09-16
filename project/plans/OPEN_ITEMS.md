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

## Workstream 0B: the tool fix that blocks every summary figure

**Owner:** coordinator, and **nobody else — `scripts/` is shared state.**
**Evidence:** [`../reviews/census_trailer_misattribution_2026-09-16.md`](../reviews/census_trailer_misattribution_2026-09-16.md).

- [ ] ⚠️ **`scripts/check_readability_census.py` attributes every document's
  unheaded Sources trailer to the preceding `##` heading — `## Key Takeaways` in
  37 of 39 documents. 195,639 words, 17.8% of the corpus.** The reported corpus
  summary share is **29.5%**; the real one is **12.2%**. The rank order inverts.
  **Acceptance:** bound a section at the trailer as well as at the next heading,
  and report the trailer as its own line so it stays visible rather than
  vanishing. ⚠️ **Land it BETWEEN waves, never during one** — in round 59 a
  coordinator changed a tool mid-round and an agent reported *"no finding in any
  report should rest on that tool's output today."* Then re-derive every figure
  taken from it.
- [ ] ⚠️ **Until that lands, `READABILITY_AND_DUAL_AUDIENCE.md`'s heading
  *"Roughly THREE-TENTHS of the corpus is in TWO sections"* is wrong by 2.4×, and
  its spread (`switching_positions.md` 39.4% against `neutral_zone_systems.md`
  7.2%) compares two differently-wrong numbers.** No brief may quote either.
- [ ] `scripts/check_zones.py`'s `overlap_fraction()` is a **bounding-box** IoU
  and divides by a zero-area union for line segments — it reported two zero-area
  polygons as *"71% the same ice"*, which means nothing. **Acceptance:** skip
  degenerate polygons in the IoU pass, as `centroid()` already documents doing.

## Workstream 1: readability and principles release one

**Owner:** coordinator for shared site/data; one agent per disjoint content file
set. **Priority:** highest. **Dependency:** Workstream 0. **Design specification:**
`READABILITY_AND_DUAL_AUDIENCE.md`.

### 1A. Principles source and coverage

- [ ] Inventory all current content documents for candidate transferable
  principles. For every candidate record exact file/section/wording, qualifiers,
  owner, evidence, exceptions, alternatives, and decisions changed.
- [ ] Classify each candidate as `fundamental-principle`, `rule-dependent`,
  `safety-constraint`, `system-convention`, `local-practice`, or
  `evidence-backed-observation`. Keep a rejected-candidate log; do not promote a
  memorable coaching preference into a universal principle.
- [ ] Create or verify the single source of truth at
  `content/foundation/core_principles.md`, with one stable structure entry and
  route. The index must present principle, why, recognition cue, action, worked
  example, and links to beginner and deeper applications.
- [ ] Build the principle-to-corpus matrix for the release scope. Cover every
  changed position, system, technique, Hockey-IQ, practice, and relevant off-ice
  section with application, rationale, scope qualifier, link, or an explicit
  `not applicable` reason.
- [ ] Run a transfer audit for each accepted principle in at least three contexts,
  including a position, a team system, and technique or Hockey-IQ. Test a novel
  reviewer-only situation; do not turn it into a public quiz.
- [ ] Have `rules-verifier`, `content-reviewer`, `facts-reviewer`, and
  `safety-reviewer` clear every principle whose wording could be read as a rule,
  safety instruction, age claim, or system law.

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
- [ ] ⚠️ **`positions/goaltender.md` would get a WRONG framing principle from
  principle 4.** *"Look before the puck reaches you"*, voiced alone at the top of
  that page, is the opposite of the document's own `Never: Look past the puck at
  where it is going rather than where it is` and its *"cone of shame"* mindset.
  The principle transfers — `switching_positions.md` says scanning is *"the same
  skill in every position"* — **but its TIMING does not**: a goalie scans between
  plays and on retrievals, never off a live shot. **Acceptance:** if principle 4
  frames that page, the timing qualifier is in the same sentence.
- [ ] `systems/defensive_zone_coverage.md` has a section headed
  `## The Universal Principles` containing **seven principles that are not the
  index's seven**. A framing principle drawn from the index would sit above a
  different set claiming the same word. **Naming collision, not a wrong
  principle.** **Acceptance:** the collision is resolved or recorded as harmless.
- [ ] `foundation/rink_map.md` should probably have **no** framing principle.
  Principle 5 is the tempting fit and would be wrong: `rink_map.md` *settles what
  a region is*, and principle 5's five-area ranking is explicitly coaching
  reasoning. **Framing a definitional document with a hedged ranking inverts the
  ownership.** **Acceptance:** recorded as "none, and why", per the owner's own
  instruction that reference material may have none.
- [ ] **No `source-verifier` has ever refetched `core_principles.md`'s
  citations.** It is now load-bearing for every other page's opener.

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

- [ ] ⚠️ **The eighth principle: `content-reviewer` says DO NOT PROMOTE
  *"stay on the defensive side of the puck"*, independently and with reasons the
  first agent did not give.** Census: **eleven sites in five documents.** Its
  argument: (1) **it fails the seven's own structural test** — every one of the
  seven answers *"A realistic alternative"*, four honestly *"None"*, and this one
  has real alternatives the corpus already teaches (a defenceman pinching at the
  offensive blue line, a forward activating into the rush, F1/F2 in an aggressive
  2-1-2 are all deliberately on the **wrong** side of the puck); (2) **the corpus
  disagrees with itself about its status** — *"the universal rule"* in one
  document, *"The Organising Idea"* of a single document in another, *"the
  instinct to build"* in a third; (3) ***"the universal rule"* is an unsourced
  superlative** with no source at any of the eleven sites — the same shape as a
  claim that survived eight review rounds before a primary source contradicted it;
  (4) **it is genuinely geometric and largely true, which is what makes it
  dangerous as a bare principle** — it reads like a law and is one only inside a
  scope nobody states.
  **If promoted anyway**, the stated constraints: scope it to the defending half
  or to not having the puck; write its *"realistic alternative"* honestly, which
  **makes it a child of principle 1 rather than a peer of principle 2**; and
  settle the *"universal rule"* wording, **because it cannot be both a universal
  rule and a thing with a named exception set two documents away.**
- [ ] ⚠️ **Two implementations of one owner instruction, written the same day, and
  they should not diverge silently.** `getting_started.md` now carries four `##`
  sections — `The principle`, `Key focus`, `How to tell`, `Overview` — **before**
  the Overview, where the template has Overview first; `body_contact_and_battles.md`
  puts its principle as a **bold lead inside `## Overview`**. ⚠️ **Each `##` also
  opens a new audio chunk**, so the choice changes the spoken layer.
  **And a second divergence:** `getting_started.md`'s opening principle is **not
  one of the seven and is not in `core_principles.md` at all** — a new proposition,
  with core principle 2 imported beneath it as the *exception*. ⚠️ **It makes no
  false ownership pointer**, which is the failure mode the style guide records
  (thirteen documents citing an owner that never held the rule), **so it is not a
  defect** — but the owner instruction says principles are *"drawn from its seven
  and linked to it"*, and one of the two is not. **Coordinator decision.**

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

- [ ] Resolve the shorthanded-icing cluster: NHL 81.6's expiry trigger, NHL 20.3's
  immediate-substitute and additional-minor limbs, the four-book scope, and all
  affected `Rule:`/prose/facts sites. Read parent rules end to end, then propagate
  only the settled wording.
- [ ] Re-read Hockey Canada 6.7 and CARHA 65, including definitions, notes,
  interpretations, and major-penalty substitution rules, before making any
  exclusivity or silence claim.
- [ ] Resolve British U12 applicability in `uk_rules.md`, then scope any
  affected icing, offside, running-clock, and line-change guidance. Do not attach
  an orphaned note to one dump-in subsection.
- [ ] Review the remaining goaltender-contact/restricted-area and British-scope
  statements, including `defender.md`'s beer-league/IIHF wording and its
  inference from the absence of a trapezoid rule.
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
as *"never test one."*** Every disclosure tested since systematic testing began
has been **false**, and every one ran the same direction: **it made the corpus
look LESS supported than it is.** Correcting a false disclosure is not stripping
it — it is replacing an absence claim with the source. **Never remove a true one,
and never make the corpus look more confident than it is.**

- [ ] Test the **70 disclosures in the ` ```facts ` layer** first. That layer is
  voiced **alone**, with a 300 ms break either side, to a listener with no
  surrounding context, so a false absence claim there is the worst case in the
  corpus. Run `python3 scripts/check_disclosures.py` for today's list.
  **Acceptance:** each is confirmed true with the search that was run named, or
  replaced by the source. ⚠️ **Before writing that no source exists, search the
  document's own Sources list, `sources/`, and sibling documents** — two of the
  first three false ones were refuted by the document's own trailer.
- [ ] ⚠️ Do **not** work the `unchecked` count of 184 as a worklist. It is an
  upper bound: a reviewer who read 58 facts-layer lines classified ~15 as
  genuinely unverifiable where the tool reported 31. The gap is disclosures that
  state the search they ran in wording no pattern anticipated, and there is no
  fixed vocabulary for scoping a claim.

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

- [ ] **Start here — the instance a commit gate named, verified to the character.**
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

- [ ] ⚠️ **Run the corpus-wide census for this shape.** A first pass was run on
  16 September on `every|all|any level(s) of British/UK`, `wherever you play`,
  `in all five books`, `at every level`. **It was SAMPLED, NOT COMPLETED** — the
  hits are dominated by the standing `> **Rule set:**` banner, which is correctly
  scoped by *"amended locally"* and is not a defect in any of its 39 instances.
  **Acceptance:** every non-banner hit read. ⚠️ **Expect most to be correct** —
  `language_and_glossary.md`'s `Shorthanded` entry scores on the pattern and is
  exemplary, carrying the classification limb, the NHL carve-out, the head-count
  test and the IIHF's silence-with-a-reason. **Do not sweep this pattern.**
- [ ] The same over-scoped shape almost certainly exists for **offside, line
  changes and penalty duration**, because `uk_rules.md` records that U12 changes
  all four and only icing has been tested.
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
  **Acceptance:** a deliberate baseline refresh via
  `check_external_links.py --write-baseline`. ⚠️ **Do not hand-edit that file** —
  it is tool-owned and a hand-written row diverges from what the tool writes. The
  `source-verifier`'s report holds the four rows with today's status, bytes, final
  URL and SHA-256 notes, ready to check the tool's output against.

## Workstream 2E: the CARHA gap that could not be closed, and why

**Owner:** coordinator assigns. **Evidence:** round 78's `goaltender.md` agent,
which found it, verified it, and **deliberately did not close it**.

- [ ] ⚠️ **`positions/goaltender.md:526` leaves a CARHA-affiliated adult-league
  goaltender with a permissive gap.** The body says *"no trapezoid is not no
  restriction: **both of those books** restrict the freeze instead"* — USA Hockey
  and Hockey Canada — and leaves *"how much rec, beer-league and youth hockey that
  adds up to"* as an unnamed question about leagues. **A CARHA goalie reads that,
  correctly concludes they have no trapezoid, and becomes a third puck-handler
  behind their own net.** ⚠️ **CARHA 58(b) bars the smother there on the same two
  minutes**, in the same shape as USA Hockey 614(c)(1): *"…deliberately falls on
  or gathers the puck into their body… when the puck is behind the goal line and
  the goalkeeper's body is entirely outside the boundaries of the goal crease
  area."* Verified verbatim. **The omission is permissive and changes what the
  reader does.**
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

## Workstream 1H: ⚠️⚠️ A CRITICAL THE SPLIT CREATED — BLOCKS THE COMMIT

**Owner:** one agent owning `content/positions/defender.md`. **Found by:** a fresh
`facts-reviewer` pass dispatched **because a commit gate blocked**, invoking
`review_process.md`'s terminating rule: *"A repair that moves, merges, splits or
renumbers text… does void it, and needs a fresh pass."*

⚠️⚠️ **THE RULE EARNED ITS PLACE. The split that fixed Critical 2 for CARHA
recreated Critical 2 for USA Hockey and Hockey Canada.**

- [ ] ⚠️⚠️ **CRITICAL — `:122`'s permission lost two of its three restriction
  siblings.** Before the split, one block held, adjacent: the permission
  (*"USA Hockey and Hockey Canada do not — the dead rim is your goalie's"*), then
  **USA Hockey 614(c)**, then **Hockey Canada's Interpretation 3**. **That
  adjacency was the repair.** After the split, `:122` names **three** books and the
  only restriction beside it is **CARHA's**; 614(c) and Interpretation 3 are at
  `:135` and `:136`, **in the other block, across a `####` boundary.**
  ⚠️ **Measured in the speech layer, and re-measured independently by the
  coordinator: the permission is spoken sentence 234 and the nearest USA Hockey /
  Hockey Canada restriction is 263 — twenty-nine sentences and a heading later**,
  each voiced in its own `<p>` with a 300 ms break.
  **A USA Hockey listener hears the permission, then hears the freezing bar
  attributed to CARHA alone by number, and concludes their book has none.**
  USA Hockey 614(c)(1) is a minor; Hockey Canada's Interpretation 3 clause v is a
  minor **with "No warning will be issued."**
  ⚠️ **Constraint:** block `:118` is at **5 of 11** facts and **2 coaching facts**,
  so a new `Rule:` fact fits — **no second split needed**, and that is the cheapest
  of three remedies. ⚠️ **`:122` is at 196/200, four characters of headroom — do
  NOT edit it in place.** And do not write a third full restatement of 614(c); it
  already exists at `:21` and `:135`.
- [ ] ⚠️ **MAJOR — `:121` states a rule number and never names the book.**
  *"Measure from Rule 1.8 and not 27.8"*. **27.8 is NHL-only; the IIHF numbers the
  restricted area 27.7, as this document says at `:139`.** A British reader sent to
  *"Rule 1.8"* lands on **IIHF 1.8 — metres, not feet.** The style guide's owners
  table ends that very row: ⚠️ ***"Both books number this rule 1.8, which is luck,
  not safety — NAME THE BOOK."*** ⚠️ **`:121` is at 197/200 — this must be a split
  into two facts, not an edit.**
- [ ] ⚠️ **MAJOR — the new `#### On the kill` block never states the exemption it
  is about.** Five facts cover what removes it, a carve-out, the count test, the
  classification floor and an action. **The permission itself reaches no fact.**
  Consequence, measured: spoken 1156 opens *"Only the NHL also costs you **the
  clear**…"* with no antecedent in the block, and spoken 1164 says *"use **the
  exemption**"* whose only antecedent is the heading, twelve sentences back.
  **Block is at 5 of 11 — room for a fact. Put the plain statement first.**
- [ ] ⚠️ **MAJOR — `:635` flattens a zone-conditional rule.** NHL 63.2(iii) is
  conditional on **the defending zone** and on **direct, non-deflected** — and this
  document carries both limbs correctly at `:56`/`:57` and in Key Takeaway 5.
  Adding the rule-set flag was a real improvement; the zone and deflection limbs
  are still missing. Over-caution, not a penalty — Major, not Critical.
  **Minor, same line:** *"reach only a deliberate shoot-out"* is the house phrase,
  but a census of all 17 uses shows **this is the only one without an
  *out-of-play* anchor in the same sentence.** Heard alone, *"shoot-out"* collides
  with the tiebreaker sense.
- [ ] ⚠️ **MINOR, and the most instructive — `:338`/`:408`: the harmonisation went
  the WRONG WAY.** At `734d8b0` one read *"none of the four **books**"* and the
  other *"none of the four"*. The repair **deleted "books" from the good line to
  make the pair agree.** ⚠️ **The fact is at 249/300 — FIFTY-ONE characters of
  headroom. No cap forced it.** The sentence names two books and then says *"none
  of the four"*.
- [ ] **Traceability, pre-existing but the split moved the boundary past it:**
  `:119`'s *"the IIHF Handbook adds two more"* has **no Handbook reference
  anywhere in its section body** — the evidence is at `:29`, in `## Overview`,
  twelve sections earlier. **The claim is true** (both Situations verified there);
  the section it now sits in does not carry it.
- [ ] `:123` dropped *"deliberately"* from CARHA 58(b) while keeping
  *"intentionally"* for 37(e) in the same sentence. **Fixed on the CARHA line
  only.**
  ⚠️⚠️ **THIS ROW'S FIRST DRAFT SAID "fix both or neither", NAMING USA HOCKEY
  614(c)(1) AS PARALLEL. IT IS NOT, AND FIXING IT WOULD HAVE INTRODUCED A DEFECT.**
  Verified at the character level: **614(a)**, the *skater* clause, reads *"who
  **deliberately** falls on or gathers the puck into their body"* — but **614(c)**,
  the *goalkeeper* clause, reads *"who falls on or gathers the puck into their
  body"*, **with no intent word at all.** CARHA 58(b) genuinely writes
  *"deliberately"*. They are not parallel. ⚠️ **614(a) is the near-miss that would
  have "confirmed" the brief** — a verifier reading one clause up finds the word
  and stops.
- [ ] `:20` was edited by this change and still names two books where `:122` and
  Key Takeaway 6 now name three. **Not a contradiction** — it makes no CARHA
  claim — but it is the most-heard block in the document. ⚠️ **Block `:11` is at
  11/11; no fact can be added.** Absorb within the 300-char cap or record the
  asymmetry as deliberate.

⚠️ **Two hand-offs the facts pass raised for `rules-verifier`, unresolved:**
USA Hockey **625(a)(4)** is worded narrowly — *"A defending player who changes
their skating lane or foot speed"* — against `:218`'s broader proposition, and
**625(a)(1)** may be the better cite. And Casebook **407 Situation 12**'s facts are
a goalkeeper *"in the act of going to the players' bench"*, which `:141` and the
body both drop.

⚠️ **AND THE SCOPE QUESTION NOBODY HAS ANSWERED:** *"If the CARHA
permission/restriction pairing was propagated to `goaltender.md`, `breakouts.md`
or `rules_primer.md`, my critical may be there too — and I did not look."*
**Twelve documents changed in this commit; one was read.**

## Workstream 3C: the site review — what it cleared, and what it opened

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

## Workstream 2I: two residuals the second commit gate found

- [ ] **Two `defender.md` facts are in mild tension on the intent word.** `:21`
  says *"all four make **intentionally** taking part in the play past the centre
  red line a minor"*; the retrieval block says *"USA Hockey and Hockey Canada
  **write an intent word** into the centre-red-line bar."* ⚠️ **The NHL and IIHF do
  write *"intentionally"*, inside their parenthetical gloss** — so both readings
  are defensible and **a reader does the same thing under either.** One of the two
  should be rephrased so the document does not appear to contradict itself.
  **Not a wrong claim; a wrong impression.**
- [ ] `uk_rules.md:502` — the one **new** quotation-drift instance this round
  introduced, counted and not repaired: *"all players, including goalkeepers…"*
  where USA Hockey **304(g)** writes *"All"*. Sources trailer, never voiced.
  **It is the named starting instance in Workstream 2G.**

## Workstream 2H: `goaltender.md` — findings from the rules pass, named not edited

**Owner:** coordinator assigns one agent. **Found by:** the `rules-verifier` sent
at `defender.md`, which followed the claims into their sibling.

- [ ] ⚠️ **`goaltender.md:395` and `:951` quote USA Hockey 618(c) accurately and
  omit the Casebook's definition of the operative word.** Casebook **Situation 9**:
  ***"'Forward' is considered to be anywhere in between two imaginary lines, one at
  each goal post, extending to the nearest end zone face-off spot."*** And
  **Situation 8** confirms the prohibited act is *"catching the puck in their
  glove, closing their hand and then propelling it to a teammate"*.
  ⚠️ **So USA Hockey's *"forward"* is a CONE between the posts out to the nearest
  end-zone faceoff spot — far narrower than *"forward towards their opponent's
  goal"* reads on its face — and a side or rear throw is expressly permitted with
  NO STOPPAGE AT ALL.** Neither string appears anywhere in the document.
  **Acceptance:** the definition travels with the rule. Requires `safety-reviewer`,
  because it is the definition of the word that decides whether the play is legal.
  ⚠️ **And note the extraction trap that hides it:** `usah.txt` splits 618(c)
  between *"first played by a"* and *"teammate"* with a running header, so a phrase
  grep for *"first played by a teammate"* returns **zero from an intact rule**.
- [ ] `goaltender.md:550` reproduces the NHL 27.8 quotation *"six feet from either
  goal post"*. **The source reads *"lines that begin six feet (6') from either goal
  post"*** — `(6')` elided with no ellipsis and no bracket. Same defect as
  `defender.md:121`/`:130`; fix together.
- [ ] **The corpus disagrees with itself on a date that IS sourced.**
  `goaltender.md:550` says the trapezoid was widened *"in 2014"*; `defender.md` and
  the owner `rink_map.md:241` say *"for the 2014-15 season"*. **Make `goaltender.md`
  match its owner.**
  ⚠️⚠️ **A CORRECTION TO THIS ROW'S FIRST DRAFT, which called the date
  "unverifiable from anything on disk".** That was wrong, and it conflated two
  different claims. **The date IS sourced** — `rink_map.md:241` states it with the
  reason (widened two feet a side **at the NHLPA's request**) and its Sources
  trailer cites **the NHL's own rule-change announcement**. What is true is the
  narrower thing: **the date is absent from the RULEBOOK**, which dates no rule at
  27.8. ⚠️ **And even "the NHL rulebook dates no rule" is false as a general
  claim — NHL 9.7 reads *"Beginning with the 2013-2014 season"*.** A repair agent
  caught that in its own draft before it shipped.
  ⚠️ **Nobody has refetched the announcement URL.** If that page is dead or says
  something else, the date is unsupported and no one would know.

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

## Workstream 2F: `defender.md` residue after the criticals

**Owner:** coordinator assigns. **Evidence:** round 78's `facts-reviewer` and the
repair agent, which fixed the two criticals and four majors and **declined these
deliberately**, each with a reason.

- [ ] ⚠️ **`:738` — *"The universal rule: stay on the defensive side of the
  puck."*** ⚠️ **It is the only unhedged *"universal rule"* in `content/`** — the
  only two other occurrences, both in `body_contact_and_battles.md`, are explicit
  **denials**. **The facts layer did not inherit it** (`:727` correctly labels it
  `Never:`). The repair agent's judgement: **it should go** — it is coaching
  consensus, and this is the corpus contradicting its own register in the one
  place it says the word straight. ⚠️ **This is the same phrase as the candidate
  eighth principle in Workstream 1G, and the two decisions should be taken
  together.**
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
- [ ] ⚠️ **`site-reviewer` is owed:** two new headings and two new blocks change the
  in-page structure and the table of contents. ⚠️ **The BUILD has run** — all eleven
  steps, exit 0, the last resolving 10,747 internal links — **but no browser has
  been opened.** A commit gate blocked on exactly this distinction, in its own
  words: *"I could confirm the number; I could not confirm the seeing."*
- [ ] ⚠️ **The dangling-antecedent class is NOT exhausted.** The repair agent fixed
  a **pre-existing** one that a review of **all 215 facts** did not report. **A
  fact that reads correctly on the page and breaks when voiced alone is invisible
  to every gate**, and only `md_to_speech` plus a human reading finds it.

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
- [ ] Resolve `language_and_glossary` audio explicitly before linking listeners:
  generate/review an episode or label it reading-only everywhere.
  ⚠️ **Derived 16 September: exactly TWO of the 39 documents have no podcast
  episode, and the second one is release-one scope.** They are
  `foundation/language_and_glossary` and **`foundation/core_principles`** — the
  principles index every other page's opening principle is supposed to link to.
  A pathway that tells a listener to start at Core Principles currently sends
  them to a document with no audio. **Acceptance:** each is either generated and
  reviewed, or labelled reading-only **everywhere it is linked**, including from
  any page-opening principle.
  ⚠️ **And note what the manifest already does here:** the `foundation/rink_map`
  episode's asset is `/audio/foundation/rink_map_and_glossary.m4a` — one
  file serving a name that spans two documents. Establish what that episode
  actually contains **before** concluding the glossary is unvoiced; this may be a
  labelling question rather than a generation one.
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

- [ ] `hockey-iq/playing_without_the_puck.md` chunk boundary 1→2 splits a safety
  prohibition from its applicability condition: the chunk ends *"Never turn your
  back to the wall, and never duck"* and the next opens on whether the reader may
  use their body at all. **Acceptance:** either the condition sits in the same
  spoken unit as the prohibition, or it is recorded why the split is safe.
  Requires `safety-reviewer`.
- [ ] `systems/breakouts.md` chunk boundary 73→74 delivers, alone, the half of a
  five-clause Interpretation that the document's own sentence says *"a goaltender
  told only that half has been told the rule wrong."* **Acceptance:** the two
  halves reach the listener together, or the document stops asserting they must.
  Requires `rules-verifier` and `safety-reviewer`.
- [ ] Three `Rule.` facts values truncate mid-clause at a chunk end —
  `technique/puck_handling.md` 028/61, `technique/shooting.md` 018/95 and 055/95.
  **Acceptance:** each still tells the truth if the listener stops there.
  ⚠️ **Lengthening a block to fix one MOVES the boundary and can make a different
  value chunk-terminal** — re-run after each change.
- [ ] `hockey-iq/playing_without_the_puck.md` tells a listener both computations
  are *"set out in full in the written Notes on verification section"* — a section
  the renderer drops. **Acceptance:** the substance is voiced inline, or the
  sentence stops pointing at an unreachable layer. The other four
  `check_pointers` hits are in mixed documents where the tool cannot tell which
  table is meant; **read the rendered SSML, not the label.**
- [ ] `check_chunk_tails.py --prose` has never been run. Body prose is unscanned,
  and a repair that adds a limit as a **new paragraph** after its permission can
  put a chunk break between them. **Acceptance:** run it and triage.
- [ ] Triage the 18 printed `check_diagram_quotes.py` hits — comments in diagram
  sources quoting text no content document now contains. Several are benign
  descriptions of what the picture does not draw. The ones worth reading first
  are `rules_primer.mjs:91`, `shooting.mjs:517`, `rule69_clauses.mjs:95`,
  `risk_management.mjs:587`. **Acceptance:** each is either benign, or the
  content moved and the comment is stale evidence.

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


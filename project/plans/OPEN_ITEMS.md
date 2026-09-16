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

## Workstream 0: gate and baseline

**Owner:** coordinator. **Dependency:** none. **Files:** `project/plans/`,
`project/reviews/`, check outputs, and shared generated outputs only.

- [ ] Record `git rev-parse HEAD`, `git status --short`, index/tree divergence,
  branch tracking, and the exact current commands used for every baseline metric.
- [ ] Recount current Markdown documents from `content/**/*.md`, diagram source
  modules, manifest entries, Markdown references, facts blocks, podcast episodes,
  headings, captions, and readable word totals. The current count must be derived,
  not copied from the archive; include `core_principles.md` if it exists.
- [ ] For each baseline row record metric, command, source of truth, owner,
  timestamp/commit, interpretation, and decision informed. Historical figures are
  context only.
- [ ] Record current build/checker status and whether the browser, audio files,
  generated diagrams, and `dist/` correspond to the same source revision.
- [ ] Regenerate worklists immediately before dispatch. Read every hit; do not
  treat a hit, zero result, or stale line number as a finding without inspection.
- [ ] Establish the first-release file list and stop condition before assigning
  agents. No agent works from the archive's quoted wording without rechecking it.

**Gate:** no implementation begins until the baseline is reproducible and the
working-tree/index state is recorded. No checker, renderer, audio render, or
diagram build runs while an input agent is editing. Use private, unique scratch
paths; never share `sweep.txt`.

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
- [ ] Apply podcast ordering/discovery from the separate podcast plan: preserve
  manifest `track`, RSS serial fields, and stable GUIDs; use a reviewed,
  podcast-only `podcastTitle` with a measured short prefix; validate locally
  before any Apple Podcasts/Spotify rehearsal. Live platform rehearsal requires
  explicit approval.

**Gate:** site reviewer checks 375px, 768px, and desktop; keyboard/screen-reader
order; diagrams, captions, warnings, facts, and audio. The staged tree is the
tree reviewed and built. No claim of Apple/Spotify behaviour rests on local XML
alone.

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

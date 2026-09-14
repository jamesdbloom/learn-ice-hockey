# Readability and dual-audience implementation plan

## Mission

Improve the public site for two readers without making either audience consume the
wrong material:

- a U10 player or parent who needs short, concrete, safe instructions;
- an adult recreational player who wants the reasoning, alternatives, rule-set
  differences, evidence, and tactical detail.

These are initial priority paths, not the whole audience definition. The model
must also accommodate players in the first ten years of playing, including older
youth, teenage beginners, adult beginners who are not in recreational leagues,
parents, and coaches. U10 is an age/applicability case; it is not a synonym for
beginner, safe, or a particular rulebook.

The corpus is deliberately large and has a real reference function. Its size is
not, by itself, a defect. The defect to solve is that beginner instruction,
advanced detail, source qualification, rules comparisons, facts blocks, summaries,
and audio are often presented in one linear path. The implementation must shorten the beginner path without deleting
safety-critical detail, honest disclosures, provenance, or a useful adult
reference layer.

The site should also make its highest-level hockey-IQ principles explicit. A
player who understands why a decision is right can transfer it to a new position,
system, opponent, or game state. The implementation must therefore extract the
small set of cross-scenario principles that guide the rest of the corpus, rather
than leaving them scattered across position and systems pages.

The authorial voice should be authoritative, direct, and useful. State the
principle and the action plainly. Use a reference or brief evidence note when it
supports the point, changes confidence, or helps the reader decide what applies.
Do not make the main teaching path narrate the project's research process with
repeated phrases such as “this could not be verified,” “no source was found,” or
“the corpus has not checked this” when that uncertainty does not change what the
reader should do. Such process noise weakens the authority and buries the value
of the lesson.

This is not permission to erase honest uncertainty. A disclosure stays when the
evidence quality, source disagreement, scope limit, or inability to verify is
material to how the reader should weigh or apply the claim. Make it concise,
reader-facing, and adjacent to the claim; move extended provenance, search
history, and verification detail to the Sources/reference layer. Never replace a
required safety, rule-set, age, league, or medical qualification with a vague
confidence statement.

This plan is for an implementation agent. It is not permission to make a blind
corpus-wide shortening pass.

## Working rules

1. Read `project/content_style_guide.md`, `project/review_process.md`, and the
   relevant `project/review_history.md` sections before editing.
2. Treat every finding below as a hypothesis. Re-read the current file and refute
   the premise before changing it; the worktree may have moved since this plan
   was written.
3. Do not remove a claim because it lacks a source. Source it, label its limit,
   or move it to an appropriate reference layer. Never remove an honest
   disclosure.
4. Do not compress a rule, contact instruction, equipment warning, medical
   statement, or age/league qualification without primary-source and
   `safety-reviewer` review.
5. Do not present a coaching choice as universal. Keep the system name, a
   realistic alternative, the changed job, and the instruction to ask the coach.
6. Preserve the facts layer, Common Mistakes, Key Takeaways, Sources, and audio
   contracts unless the owning renderer is deliberately changed and tested.
7. Use an authoritative voice: lead with the supported conclusion and practical
   consequence, attach evidence where it adds value, and keep process disclosures
   brief and out of the primary path unless they alter the reader's decision.
   Never strip a material honest disclosure merely to sound confident.
8. Do not add diagrams just to equalise document counts. Use diagrams for space,
   sequences for movement, demonstrations/video for body mechanics, and prose or
   checklists where visuals add little.
9. Do not touch `infra/`. Do not deploy or push. Ask before any destructive,
   outward-facing, or hard-to-reverse operation.
10. Keep file ownership disjoint between agents. Agents do not edit
   `project/plans/`, `project/reviews/`, `scripts/`, or shared diagram outputs.
   The coordinator owns shared-state writes and tool changes.

## Baseline to reproduce

Before editing, record the current state:

- word and line counts for all 38 `content/**/*.md` files;
- document, diagram-reference, diagram-manifest, facts-block, and podcast counts;
- per-document heading, section, facts-block, and diagram counts;
- caption length distribution and captions over the project's existing warning
  thresholds;
- which documents contain practical explanations, recognition cues, worked
  examples, drills, self-tests, checklists, or practice plans;
- current homepage, section hubs, document header, table of contents, search,
  previous/next, diagram, and audio behaviour at desktop and mobile widths;
- build and checker status before editing.

An earlier review measured a large corpus, 204 diagram entries, 331 diagram
references, and 37 audio episodes for 38 documents. These are historical context,
not the current baseline. The diagram-module count is not reliable and must not
be reused. Re-measure every value with a documented command, matching
`site/src/diagrams/*.mjs` explicitly if counting modules, and record
`git rev-parse HEAD`, `git status --short`, index state, and working-tree state
alongside the result in the baseline review record. Do not claim the baseline is
clean when it is not. The live homepage exposes a comprehensive catalogue and
has one primary start link. `language_and_glossary` has no podcast episode;
resolve that before any pathway tells a listener to use it.

Record the baseline in a review record or a coordinator scratchpad, not in
`content/`.

The baseline record must use one row per metric with: metric name, exact command,
source of truth, owner, timestamp and commit, interpretation, and the decision
the metric informs. Historical figures are context only and must not drive an
implementation decision without a fresh measurement.

## Target information architecture

Implement the following conceptual layers. Exact component names may differ, but
the distinction must remain visible in both HTML and audio decisions:

1. **Core principles:** the small, prioritised set of cross-scenario ideas that
   guide decisions throughout hockey. Explain each in plain language before
   introducing position-specific or system-specific detail.
2. **Key focus:** the simple principle and the immediate action that works for
   beginners and experienced players alike.
3. **Simple summary:** a short recap of the key focus points, including any
   condition that must not be separated from the instruction.
4. **Recognise it:** the visual, positional, or game cue that tells the reader
   when the principle applies.
5. **Understand it:** a clear explanation and a small number of worked examples,
   written for passive reading and listening rather than classroom testing.
6. **If your team differs:** named system alternatives and local rule-set scope.
7. **Go deeper:** detailed evidence, rule comparisons, edge cases, provenance,
   and technical full-ice application.

Do not hide a safety warning, medical restriction, rule exception, applicability
condition, or honest evidence limit merely to make a page look short. Any
condition needed to act safely or legally must appear in the same visible and
spoken unit as the instruction. Only rationale, further examples, provenance,
and non-essential technical detail may be deferred.

### Speech contract

Use explicit Markdown headings or a reviewed metadata marker for the layers; do
not rely on CSS `details`, visual collapse, or a table of contents to define the
audio order. The speech renderer must emit the source in this order: Core
principle/Key focus, Simple summary, Recognition cues, explanation and worked
examples, then deeper detail. A collapsed visual section is still spoken unless
the renderer's behaviour is deliberately changed and tested. For each pilot,
save the extracted spoken units and verify that every required condition remains
in the same unit as its instruction. Audio duration and content metadata must
refer to that same generated revision.

The local NotebookLM generation, batching, download, conversion, retry, and
provenance workflow is specified separately in
`project/plans/PODCAST_AUTOMATION_LOCAL.md`; this readability plan owns only the
audio learning contract and whether pilot audio is current.

## Phase 1: build the learning model before rewriting prose

### Deliverables

- Inventory the corpus for recurring decision principles, then reduce the list to
  a small, prioritised set. The inventory must read all 38 documents and record
  each candidate's exact file, section, wording, and surrounding qualifiers.
  Classify each candidate as `fundamental-principle`, `rule-dependent`,
  `safety-constraint`, `system-convention`, `local-practice`, or
  `evidence-backed-observation`. Do not invent principles from memory or promote
  a coaching preference to a universal law. For each candidate record its owning
  document, evidence, exceptions, realistic alternatives, and the decisions it
  changes. Keep a rejected-candidate log explaining why a candidate was narrowed,
  excluded, or left as a local choice.
- Create a principles index or landing page that presents each accepted principle
  in the same format: plain-language statement, why it matters, what to notice,
  what to do, one worked example, and links to beginner and deeper applications.
  The first screen must be readable by a U10 player or parent; adult detail comes
  after the principle, not before it.
- Store the index as the single source of truth in
  `content/foundation/core_principles.md`, add it exactly once to
  `site/src/data/structure.json`, and give it a stable document ID and normal
  generated route. The coordinator owns the index's metadata, route, and audio
  decision; content agents may propose principle evidence but may not create a
  competing copy in site data.
- Tag or link relevant sections, summaries, and diagrams to the principle they
  teach. A principle link must not replace the local safety, rule-set, or system
  qualification.
- Build a principle-to-corpus matrix covering every position, system, technique,
  Hockey-IQ, practice, and relevant off-ice explanation. Each row records the
  application, why the principle matters there, the scope qualifier, the link to
  the principle, and an explicit `not applicable` reason where appropriate.
  Complete the matrix for each release scope; do not treat a three-context sample
  as proof of corpus coverage.
- Define and review the metadata schema before populating it. In release one,
  populate only the two pilot documents and the principles index; leave all other
  documents explicitly unclassified rather than inferring labels. Later waves
  may classify the remaining documents with the same review requirements.
  Never turn metadata into an unreviewed factual layer.
  At minimum distinguish:
  `readerAudience`, `skillLevel`, `contentType`, `prerequisites`,
  `readingMinutes`, `audioMinutes`, `ageApplicability`, `leagueApplicability`,
  `contactScope`, `supervisionRequired`, `parentRequired`, `safetyCritical`,
  and `audioMode`, plus per-field `owner`, `reviewer`, `status`, `evidence`, and
  `revalidateAfter` where a field concerns age, league, safety, supervision, or
  audio availability.
- Use controlled values such as `u10-player`, `u10-parent`, `youth-player`,
  `adult-beginner`, `adult-rec`, `coach`, `all-players`; `foundation`,
  `developing`, `detailed`,
  `reference`; and `lesson`, `rules`, `glossary`, `reference`. Do not create
  `u10-safe` as a general label.
- Require a separate `scopeClass` metadata value from the classification above.
  A principle cannot enter the index without its scope class, owner, evidence or
  disclosure, exceptions, realistic alternatives, and required coach/league
  wording where applicable.
- A U10 label describes the intended reader or age applicability only after a
  named safety reviewer verifies the exact jurisdiction, contact rules,
  equipment assumptions, and supervision context. Where the league is unknown,
  say to ask the coach or association. Do not infer safety from an existing
  drill or from adult material.
- Make the homepage offer explicit entry points: U10/player-parent, adult
  beginner, adult recreational detail, changing position, and watch-and-learn.
  Keep a route for readers who want the complete reference.
- Make “Core principles” a first-class entry point on the homepage and in the
  beginner pathways, while retaining the complete document catalogue for readers
  who prefer reference navigation.
- Promote the four routes already in
  `content/getting-started/getting_started.md:31-108` into first-class
  navigation or pathway data rather than leaving them buried in one long page.
- Add pathway-aware next steps and prerequisites. Do not rely on the global
  document order or `PrevNext` alone.
- Define the pathway contract before implementing it: stable pathway IDs, ordered
  document/principle IDs, audience labels, prerequisites, URL/deep-link format,
  no-JavaScript fallback, persistence/return-to-catalogue behaviour, search
  ranking, and keyboard interaction.
- Add filters or labels to hubs and search so a U10 reader is not shown advanced
  systems with the same visual priority as a first-session lesson.

### Files likely involved

`site/src/pages/index.astro`, `site/src/data/structure.json`,
`site/src/data/nav.ts`, `site/src/content.config.ts`,
`site/scripts/extract-meta.mjs`, document layout/header components, hub/search
components, and a new maintained metadata manifest if that is safer than
frontmatter. Keep the source-of-truth decision documented in the implementation
PR/review record.

The principles index also requires a normal Markdown source, a structure entry,
generated metadata, stable links, and an explicit audio mode. If it has no episode
in the first release, all audio-facing pointers must call it a reading-only
reference; do not imply that the listener can hear it.

### Acceptance criteria

- A new U10 reader can identify the next three actions without opening the full
  catalogue, in a named task test recorded by the site reviewer.
- A new reader can reach the core principles before advanced systems and can state
  what each principle means in practical terms without reading a long reference
  page. An adult reader can follow each principle to multiple full-ice
  applications and technical explanations.
- The pilot defines and meets a low-effort budget: maximum primary-path readable
  words, listening minutes, headings, clicks, and vertical distance to the first
  actionable instruction. The measurement states whether figures, facts,
  warnings, and glossary links count. HTML and audio budgets are measured
  separately, not inferred from one another.
- Unless a documented safety requirement makes it impossible, the first-release
  default target is no more than 600 primary-path words, 5 minutes of audio, five
  primary-path headings, three clicks from the homepage, and one viewport or 200
  words before the first actionable instruction. Required warnings and
  applicability conditions are included, not excluded to meet the target; any
  exception requires a written reason.
- The site reviewer runs one navigation task for each required entry point:
  U10/player-parent, adult beginner, adult recreational detail, changing
  position, watch-and-learn, and complete reference. The complete catalogue,
  search, hub filters, and adult-depth links remain discoverable.
- An adult reader can reach detailed material without a beginner route becoming
  the only route.
- The two pilot documents and principles index have explicit audience,
  applicability, level, and content-type decisions. All other documents are
  explicitly marked unclassified or outside release-one scope.
- The principle-to-corpus matrix is complete for the release scope, and every
  changed practice, position, system, and technique section either links its
  principle with a rationale and qualifier or records why no principle applies.
- Existing links and document IDs remain stable unless a redirect is added.
- Metadata has an owner and reviewer status. It does not assert a hockey fact,
  rule, safety claim, age applicability, league applicability, or prevalence
  claim that is not reviewed. `readingMinutes` and `audioMinutes` use documented
  separate measurements: rendered readable-word count divided by the chosen
  reading rate, and actual audio duration respectively.
- The first release is bounded to the metadata schema, homepage/pathway routing,
  a principles index containing only reviewed principles, and no more than two
  pilot documents. Do not begin the full-corpus rewrite,
  quiz system, practice-plan catalogue, or audio redesign until that release
  passes review and has a recorded go/no-go decision.
- The primary pilot path is fully understandable without answering, clicking to
  reveal an answer, or performing an activity. Optional exercises remain visibly
  and audibly optional.
- A fresh content review confirms that the primary path uses direct,
  authoritative teaching language: supported conclusions and actions come first,
  useful evidence is attached where it matters, and verification-process history
  is absent unless it changes the reader's decision. Every retained uncertainty
  is concise, reader-facing, materially relevant, and preserved in the required
  spoken/summary layers.

## Phase 2: create a short primary path inside long documents

Do not rewrite every page at once. The first release pilots only these two
documents:

- `content/getting-started/getting_started.md`, for the U10/parent and adult
  beginner entry path;
- `content/foundation/rules_primer.md`, for shared principles plus unavoidable
  rule-set depth.

The principles index is a separate site/content deliverable in this release. Its
principles must be derived from the corpus and reviewed before publication. Do
not choose a fixed number or write a slogan list merely to fill a page.

After a separate go/no-go review, later waves may pilot
`content/positions/goaltender.md`, `content/technique/body_contact_and_battles.md`,
and `content/off-the-ice/practice_and_development.md`.

For each pilot:

1. Re-read the full surrounding section and re-derive every rule, safety,
   medical, age, and evidence claim from its primary source. Existing prose is a
   hypothesis, not evidence.
2. Write a one-screen **Key focus** opening with the simple principles and
   immediate actions that work for both audiences.
3. Add a short **Simple summary** and **Recognition cues**. Do not make readers
   answer questions, complete an exercise, or prove comprehension.
4. Add one or two clearly labelled **worked examples** where they make the
   principle concrete. Explain the cue, the action, and the consequence.
5. Keep the minimum explanation and every condition needed to act safely or
   legally in the same visible and spoken unit as the instruction.
6. Put rationale, detailed rule comparisons, research methodology, edition
   archaeology, and non-essential alternatives under clearly named deeper
   sections or linked reference documents.
7. Rewrite in an authoritative voice: say what the reader should understand and
   do before explaining why. Add evidence or a reference when it materially
   supports the instruction; do not lead with research history or the fact that
   an agent searched for a source.
8. Keep material uncertainty adjacent to the claim in one concise reader-facing
   disclosure. Move extended source provenance, search history, and verification
   mechanics to the Sources/reference layer. Do not remove a disclosure when it
   changes how the reader should weigh or apply the claim.
9. Make Common Mistakes and Key Takeaways short, memorable, and actionable;
   retain their corrective counterweights and scope qualifiers.
10. Compare the facts block with the new body and summaries independently. The
   facts layer is a separate spoken layer, not a reason to assume body coverage.
11. Build a propagation matrix for each changed principle: body, facts or an
   explicit no-facts decision, Common Mistakes, Key Takeaways, diagrams/captions,
   sibling documents, source trailer, and spoken output. No row may be marked
   complete from a document-level grep alone.
12. Measure the new primary path in readable words, headings, key principles,
    and separate reading/audio time. Report what was reduced and what was
    deliberately retained.

Do not make self-tests, interactive quizzes, scenario cards, or practice cards a
default pattern. They may be proposed later only where a reviewer demonstrates
that passive explanation cannot communicate the concept, and they require their
own accessibility and audio treatment.

For each accepted core principle, run a transfer audit across at least three
contexts, such as a position page, a team-system page, and a technique or
hockey-IQ page. Confirm that the principle remains true at that level of
generality, identify where it needs a scope qualifier, and show how the player's
action changes. If it does not survive that audit, narrow it or leave it as a
local coaching choice. The index must not flatten meaningful differences between
systems, rulebooks, ages, or leagues.

### Candidate treatments by content family

- `rules_primer.md`: short first-game rules path plus optional rule-set
  reference. Keep every safety-bearing divergence and edition scope.
- `rink_map.md`: simple labelled orientation map and unfamiliar-rink checklist
  first; exact dimensions and source discussion later.
- `language_and_glossary.md`: short lookup definitions first; detailed
  distinctions and evidence in expandable/reference content. Add missing
  headwords only after checking all usages and the owning document.
- `uk_rules.md`: “before your first British game” checklist first; governance,
  amendment history, and edition comparison later.
- `on_ice_communication.md`: compact starter call set first; detailed
  multi-book screener/legal material later.
- `center.md`, `winger.md`, `defender.md`: retain the shared zone/situation
  skeleton but lead each situation with recognise/do/avoid. Avoid repeating
  full rule explanations across positions.
- `goaltender.md`: keep core technique, communication, and safety in the main
  route; make long rule comparisons an optional reference layer.
- `body_contact_and_battles.md`: safe pre-contact principles and recognition
  cues first; detailed jurisdictional penalties later.
- `shooting.md`, `puck_handling.md`, `skating.md`,
  `passing_and_receiving.md`: mechanics and simple execution cues before
  research and legal detours; leave optional drills secondary.
- `playing_without_the_puck.md`, `risk_management.md`, `time_and_space.md`,
  `scanning_and_anticipation.md`, `puck_support_and_spacing.md`: one decision
  model and one worked example first; avoid teaching several equivalent models
  at the same prominence.
- `getting_started.md`, `equipment.md`, `conditioning_and_recovery.md`,
  `practice_and_development.md`, `how_to_watch_hockey.md`,
  `team_play_and_culture.md`, `mental_game.md`: put the immediate action,
  checklist, routine, or plan before governance, physiology, statistics, and
  research detail.

These are review targets, not permission to apply blanket edits. Every changed
content file needs a fresh reading of the surrounding section and its summary
layers.

## Phase 3: use the right teaching mechanism

### Diagrams

Diagrams are not decoration, repetition, or a way to make a long page feel
illustrated. Keep one only when the picture gives the reader spatial, visual, or
comparative information more quickly and accurately than prose alone. A diagram
that merely repeats a paragraph, shows an obvious location, or needs a long
caption to explain its meaning is a candidate for consolidation, replacement,
or retirement.

For every diagram in the first-release pilots and principles index, record the
one learner question it answers, the
visual information it adds beyond adjacent prose, its audience and prerequisites,
whether it shows a location/relationship/sequence/choice/action, the first thing
a beginner should notice, all Markdown hosts, and whether it remains useful when
its caption is reduced to its essential point. Check it at 375px, desktop width,
and in the spoken description without the image.

For each pilot, create a diagram progression map where diagrams are used:
overview first, then notation/vocabulary, then relationship or choice, then a
concrete worked example, with adult detail last. Each figure records its host
section, prerequisite, first-notice cue, and why prose, video, or demonstration
would not serve that point better. Do not require a diagram for a concept that
has no useful visual model.

Score diagrams by learner value, not by existence. In the first release, retain
high-value diagrams, combine near-duplicates, redraw ambiguous diagrams, and
retire low-value ones only within those pilots and the principles index. Check
every host, inbound link, generated asset, caption, description, facts/summary
reference, and audio consequence before retirement. Defer the corpus-wide
diagram census to a later release. Retirement is a content/design change: record
why the picture added no unique value and have the content, facts, safety, and
site reviewers inspect the resulting page.

Audit and improve the remaining diagrams in this order:

1. Safety-critical geometry: offside skate/blue-line contact, faceoff
   encroachment, icing timing, crease boundaries, and goalkeeper restricted
   areas. If the image cannot prove the distinction, use blade-level close-ups,
   two-panel comparisons, or a sequence. State exactly what the picture does and
   does not establish.
2. Beginner orientation: one clean rink map and a minimal notation key before
   isolated overlapping-area diagrams.
3. Action sequences: two-to-four labelled frames for pivots, scanning,
   receiving, support arrival, coverage handoffs, regrouping, and recovery.
   Label `before/after`, `choice A/choice B`, or `step 1/step 2` explicitly so
   adjacent alternatives are not mistaken for a sequence.
4. Adult detail: show recognition cues and breakdown/recovery, not only ideal
   formations. A static formation is insufficient where the lesson is timing or
   role transfer.

Current coverage is concentrated in rink maps and systems, while skating,
passing, shooting, equipment, and beginner procedures have few or no diagrams.
Do not fill those gaps with top-down rink plans when a coach demonstration,
photo sequence, short video, or body-position illustration is the correct medium.

### Rink-map value audit

Treat the diagrams in `content/foundation/rink_map.md` as a later, separately
bounded value audit, not as evidence that more diagrams are needed in release
one. Identify the single clean
orientation map a new player needs. Classify each additional vocabulary or area
diagram as essential because it shows a boundary or relationship the overview
cannot, useful as an isolated close-up because overlapping areas make the
overview unreadable, useful only as adult/reference detail, or redundant/too
obvious to justify its own figure.

Do not shade overlapping regions merely to add emphasis. Do not invent an extent
for an unbounded term. Preserve owning geometry and all safety/rule qualifications.
The likely treatment for low-value rink-map figures is a smaller set of
high-value diagrams plus a concise vocabulary key, not a larger set of equally
weighted pictures. Validate that a beginner can orient on the first map before
encountering detailed close-ups.

Review captions as learner-facing and spoken content. They are currently often
paragraphs rather than captions. Each diagram should have:

- a concise first teaching sentence naming the visual takeaway in concrete
  language and including every condition needed to act safely or legally;
- optional detail separated from the first two, never packed into the opening
  sentence;
- accessible `describe` text that matches the actual image;
- a clear indication when the image is a frozen moment rather than movement.

Use a caption budget as a design target: normally one short sentence, or two
short sentences only when the second is required to complete the safe/legal
instruction. The first sentence must stand alone for a U10 reader hearing it
alone. Measure caption length and exceptions rather than imposing a blind
character limit. Several rulebooks, alternatives, rationale, or provenance
belong beside the diagram as deeper explanation. Never move a required condition
to a later sentence, collapsed element, tooltip, source note, or visual-only
description.

Keep `caption` and `describe` deliberately different: `caption` explains the
teaching point and what to notice; `describe` states what is visibly drawn,
including players, puck, lines, arrows, regions, labels, orientation, and whether
the frame is static. Neither may claim the image proves something it cannot show.
Plan-view glyphs do not prove skate contact, facing, head position, timing, force,
or legality; use a close-up, sequence, demonstration, or explicit limitation.

For every changed diagram spec, enumerate every Markdown host, read the caption
in each host's surrounding context, and review the generated `caption`,
`describe`, SVG, and spoken extraction. A caption that is correct at its owner
can still be misleading when borrowed elsewhere.

The diagram acceptance checklist must also cover accessible name, description
accuracy, caption independence, host voice, focus order, scroll announcement,
contrast, print/PDF output, reduced-motion behaviour if motion is introduced,
and removal of orphaned generated assets and manifest entries when a diagram is
retired.

Do not change a caption in `site/src/data/diagrams.json` by hand if it is a build
product. Edit the owning `site/src/diagrams/*.mjs`, rebuild diagrams, and inspect
the generated output. Shared diagram tools and output directories are
coordinator-owned and must not be edited concurrently.

### Techniques beyond diagrams

The primary teaching style is explanation for passive reading and listening. Use
these patterns in this order:

- **Progressive disclosure:** Key focus, Simple summary, Recognition cues,
  Understand it, Team/rule variation, Go deeper.
- **Clear explanations:** one principle per paragraph, concrete verbs, defined
  terms on first use, and the action before the rationale.
- **Recognition cues:** what the player can see, hear, or feel before acting,
  especially on adult system pages where a static formation is not enough.
- **Worked examples:** one successful and, only where useful, one failed decision;
  explain the cue, action, and consequence rather than asking the reader to solve
  it.
- **Short summaries:** repeat the key principles in plain language. Summaries are
  for recall, not a second technical essay; choose omissions by consequence,
  prioritising safety, penalties, applicability, then instructional value.
- **Short checklists:** first session, equipment, bench/change, warm-up,
  concussion response, game-day preparation, and “what to ask your coach.” A
  checklist must remain explanatory and must not omit its safety conditions.
- **Glossary links:** short first-use definitions with role-specific examples;
  preserve “you may hear this differently” scope notes.
- **Optional activities:** existing drills, practice plans, scenarios, or
  self-tests are secondary material, not the default page structure. Add or
  restructure them only when the activity is genuinely useful, age- and
  supervision-appropriate, reviewed by a coach/safety reviewer, and accessible
  to readers who skip it.
- **Audio chapters:** section timestamps, verbal signposting, and explicit
  warnings when a listener needs the picture. Every actionable permission,
  safety limit, rule-set scope, medical restriction, and honest evidence limit
  must occur in the same spoken unit as the instruction. Audio is a companion,
  not a reason to put a required condition in a visual-only disclosure.

Any new drill, progression, scenario, or practice plan requires a named coach or
safety review covering age, contact rules, equipment, rink size, staffing,
supervision, and the “do not attempt without…” condition. Existing presence in a
document is not evidence that an activity is safe for U10.

## Phase 4: browser, audio, and accessibility validation

After the pilot, inspect the real site at desktop and mobile widths. Check:

- homepage pathway clarity;
- whether beginner and detail labels are understandable without project jargon;
- long-page navigation and whether the TOC prioritises rather than overwhelms;
- facts blocks, tables, diagrams, warnings, summaries, and optional activities;
- horizontal diagram scrolling, keyboard reachability, focus names, and contrast;
- whether captions remain readable beside the image;
- audio section signposting and what a listener hears without a screen;
- search and related links for pathway consistency.

Use a named task script, not a general impression. For the first release, use at
least one U10 player/parent pair, one older-youth or teenage-beginner reviewer,
one adult beginner, one adult recreational player, one experienced reference
reader, and one coach. Proxy reviewers must be labelled as proxies; a parent or
coach is not evidence of a child's comprehension. This is qualitative evidence,
not a population claim. Give each reviewer the same tasks:

1. Find the first three actions before a first session without using search.
2. Explain one core principle and name one recognition cue after reading only the
   key-focus and summary layer.
3. Find the adult technical explanation and a rule/system qualification.
4. Listen to the pilot's opening and identify the same principle and every
   required safety/legal condition.

Pass only if every stratum completes tasks 1 and 2 without more than one prompt,
can reach task 3, and no reviewer makes an unsafe interpretation. Add a novel,
unpublished situation to the review and score principle recognition, action,
rationale, and handling of system/rule variation; this is a reviewer test, not a
public quiz. Record the script, expected answers, prompts, time limits, outcomes,
confusion, unsafe interpretations, and unresolved issues. Test at 375px,
768px, and desktop width, including keyboard focus and a screen-reader pass over
facts, warnings, diagrams, and disclosures. These tests are not a substitute for
rules or safety review.

Before any pathway links `language_and_glossary`, either provide a reviewed audio
episode or label the destination and every audio-facing pointer explicitly as a
reading-only glossary. Do not leave this as an implementation-time choice.

## Execution waves and ownership

Use separate agents for disjoint file sets. Suggested waves for the bounded first
release:

1. Coordinator: baseline, metadata design, shared site components, and plan/review
   records.
2. Agent A: `getting_started.md` content only.
3. Agent B: `rules_primer.md` content only.
4. Coordinator: metadata, homepage/pathway, shared renderer, and navigation only.
5. Agent C: `content/foundation/core_principles.md` only, after the coordinator
   approves its source-of-truth schema. Its principles are reviewed as claims,
   not treated as slogans.
6. Fresh reviewers: rules/source, content, facts, safety, and rendered site. No
   author self-certification.
7. Coordinator: final staged-tree audit and `commit-gate` review. The review
   record maps every changed source and generated output to C3-C11, including
   metadata, principles, captions, audio, routing, and propagation.

Later releases may use disjoint foundation, positions, systems, technique/IQ,
off-the-ice, and diagram-source waves, but only after the first release's go/no-go
record. No checker, renderer, diagram build, audio render, or site build may run
while an agent is editing its inputs. Use a unique private scratch directory per
agent. Do not change shared tools during a live wave. Do not stage until an agent
is permanently finished; re-check that the index and working tree match.

Before each wave, check `git status`, ownership, and current HEAD. Before staging,
ensure no file is `MM` or being edited by a live agent. Re-read complete changed
files, not only hunks, to catch contradictions between individually correct
sentences. If site inputs differ from the staged tree, reconstruct and build the
staged tree in isolation before the gate.

## Required verification

For content changes, run all applicable gates after all agents finish and after
the final content edit:

```bash
python3 scripts/check_links.py --quiet
python3 scripts/check_facts.py
python3 scripts/check_absolutes.py
python3 scripts/check_geometry.py
python3 scripts/check_secrets.py
python3 scripts/check_counts.py
```

Run the worklists and read every hit rather than sweeping them:

```bash
python3 scripts/check_external_links.py
python3 scripts/check_rule_scope.py
python3 scripts/check_pointers.py
python3 scripts/check_chunk_splits.py
python3 scripts/check_caption_negations.py
python3 scripts/check_zones.py
python3 scripts/check_tables.py
python3 scripts/check_disclosures.py
python3 scripts/check_diagram_quotes.py
python3 scripts/check_chunk_tails.py
python3 scripts/check_leaders.py
python3 scripts/check_plan_rows.py
```

If any `site/src/diagrams/*.mjs` changes, run the diagram build before
`check_absolutes.py`; inspect the generated captions and SVGs. Use the absolute
Node/npm binaries documented in `CLAUDE.md`; verify the real exit code and fresh
`site/dist` output. The full build must clear Astro caches. Do not run concurrent
diagram builds.

Every substantive content change requires a review record under
`project/reviews/` naming changed files, measurements, reviewers, findings,
fixes, coverage, and **what the method could not have found**. The commit gate
must review the text now staged, not an earlier version. The record must include
a C3–C11 coverage table mapping each changed file and generated output to
`rules-verifier`, `source-verifier`, `content-reviewer`, `facts-reviewer`,
`safety-reviewer`, and `site-reviewer`, or explicitly mark a dimension out of
scope with its reason. It must include the propagation matrix for each changed
principle and confirm that the audio output was checked where applicable.

## Definition of done

- A beginner can choose a relevant path and reach an actionable first lesson
  without browsing all 38 documents.
- The site has a reviewed core-principles entry point. Each principle is stated
  plainly first, followed by a short summary, recognition cues, and worked
  applications; adult readers can continue to deeper full-ice and technical
  material.
- Adult readers can reach preserved depth without the beginner path carrying all
  rule, evidence, and historical detail.
- Long documents have measured learner paths and explicit deeper/reference
  boundaries; no blanket word-count target was applied.
- Diagrams are added only where spatial information is useful, and safety-critical
  geometry is not delegated to captions when the picture cannot show it.
- Physical skills use an appropriate medium such as demonstration, sequence,
  drill, or video, not just a top-down route diagram.
- Existing facts, safety warnings, honest disclosures, and rule-set qualifiers
  remain correct and are present in every required spoken/summary layer.
- Every retained diagram has a recorded learner question and unique visual value;
  every retired or consolidated diagram has a recorded reason and host/link
  audit. Captions and descriptions are concise, accurate, accessible, and
  understandable without hidden prose.
- Pathways, metadata, progressive sections, diagrams, audio, keyboard behaviour,
  and mobile layout pass browser inspection. Optional activities are not a
  completion dependency for the first release.
- Real coach/player feedback has been recorded, with unresolved questions kept
  visible rather than converted into confident claims.
- All applicable mechanical gates pass; fresh adversarial review is recorded; no
  deploy or push occurs without explicit approval.

## Known limits

The initial review was source- and structure-based. It did not establish that a
U10 player can understand a diagram, that a particular drill works on ice, that
an adult rec player prefers a given information architecture, or that the audio
is comfortable to hear end to end. Those are validation tasks for the
implementation, not assumptions to encode as facts.

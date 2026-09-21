# Readability and dual-audience implementation plan

**Full execution history — census tables, wave-by-wave ownership, the caption-shortening saga, and the
dated owner-instruction record — is consolidated in
[`project/reviews/readability_rollout_consolidated_2026-09-20.md`](../reviews/readability_rollout_consolidated_2026-09-20.md).
This file holds only the current design spec and genuinely open threads.**

## Mission

Improve the public site for two readers without making either audience consume the wrong material:

- a U10 player or parent who needs short, concrete, safe instructions;
- an adult recreational player who wants the reasoning, alternatives, rule-set
  differences, evidence, and tactical detail.

These are initial priority paths, not the whole audience definition. The model must also accommodate
players in the first ten years of playing, older youth, teenage beginners, adult beginners outside
recreational leagues, parents, and coaches. U10 is an age/applicability case, not a synonym for
beginner, safe, or a particular rulebook.

The corpus is deliberately large and has a real reference function; its size is not itself a defect.
The goal is to shorten the beginner path without deleting safety-critical detail, honest disclosures,
provenance, or the adult reference layer — and to make the corpus's highest-level hockey-IQ principles
explicit, so a player who understands why a decision is right can transfer it to a new position, system,
opponent, or game state.

The authorial voice is authoritative and direct: state the principle and the action plainly, attach
evidence where it changes confidence or helps the reader decide what applies, and do not narrate the
project's own research process ("this could not be verified," "no source was found") where the
uncertainty does not change what the reader should do. This is **not** permission to erase honest
uncertainty — a disclosure stays whenever the evidence quality, source disagreement, scope limit, or
verification gap is material to how the reader should weigh or apply the claim. Never replace a
required safety, rule-set, age, league, or medical qualification with a vague confidence statement.

## Design principles — settled, not a rollout in progress

These are the corpus's current writing rules for readability and dual-audience structure. They were
given by the owner on 14 and 15 September 2026 and are now how this corpus is written, not a wave being
executed. Full operative detail and worked examples live in `project/content_style_guide.md` — read that
before writing or reviewing content against these; do not re-derive the detail here.

1. **Most pages open with the high-level principle that frames them**, drawn from
   `content/foundation/core_principles.md` where one of its seven principles fits, linked rather than
   restated. Not every page needs one — reference material (the glossary, the rules primer's comparison
   sections) may open with none, and forcing one produces a slogan. A page-opening principle is a claim
   in the most prominent position in the document, often heard alone: it carries the same scope, owner,
   and qualification burden as any other claim, and the cardinal rule (name the system, name an
   alternative, tell the reader to ask their coach) applies with more force here, not less.
2. **Cut citation apparatus and low-level rule detail — never a qualifier, a scope, a counterweight, or
   an honest disclosure.** The test for any cut: does a reader who acts on what remains do anything
   differently, or differently wrong? If yes, it was not apparatus. Where a document cannot be shortened
   without losing a qualifier, leave it long and record why.
3. **A diagram follows the prose that discusses it**, except an overview or orientation diagram (a
   notation key, a whole-ice frame the text then works through), which goes first because its job is to
   give the reader the frame rather than illustrate a point already made.
   - A marker may land immediately before a heading or a `---`; the "looks like it belongs to the wrong
     section" problem is solved with a CSS gap (`site/src/styles/global.css`), not a placement ban.
   - Diagram captions target 25–50 words. Four things must survive any cut regardless of length: every
     safety caveat, every rule scope, every hedge, and the deixis rule (a caption is voiced alone and
     may be read in more than one place, so it may never say "the diagram above," "a beat later," or
     otherwise depend on its neighbours). `describe` fields are exempt from the length target, never
     from deixis.
   - A formation diagram follows the prose, but only after the sentence that names the shape in words —
     the reader needs the shape stated before the picture means anything.

## Current state, confirmed 20 September 2026

- **Opener census:** all 39 of 39 documents now open their Overview/Key focus section on prose (was
  30/7/2 prose/facts-block/marker on 15 September). Fully done —
  `python3 scripts/check_readability_census.py openers`.
- **Marker census:** 16 of 331 markers still arrive with no prose after their heading (was 286 on
  14–15 September). Substantially done, landed via commit `d09b318`. The residue is a worklist, not a
  defect list — several of the 16 are orientation diagrams that are likely correct as they stand (see
  the consolidated record) — `python3 scripts/check_readability_census.py markers`.
- **Caption length target (25–50 words):** found structurally unreachable as a corpus-wide target. Per
  `project/reviews/round_77_the_caption_could_not_be_shortened.md`: 188 of 204 captions were shortened
  (52,136 → 32,902 words, −37%), but only 14 of 204 landed in the 25–50 word band (was 11) and 189 of
  204 remain over 50 words. This is an accepted negative/partial result, not a failure to fix — the
  blocker is structural (safety and rule material with no other home), and the remaining work is
  **routing** that material into body prose, not further compression. See the open thread below.
- **`## Key focus` rollout:** shipped to all 39 of 39 documents by 17–18 September 2026 — broader than
  this file's own "no more than two pilot documents" language further down, which restricts only the
  *full* seven-layer pilot rewrite (Key focus, Simple summary, Recognition cues, Understand it, If your
  team differs, Go deeper), not the Key focus layer alone. Treat that restriction as still governing the
  full pilot treatment; it no longer describes Key focus.
- **Metadata schema:** the elaborate schema in Phase 1 below (`readerAudience`, `skillLevel`,
  `contentType`, `scopeClass`, per-field owner/reviewer/revalidateAfter, etc.) was **not** what shipped.
  What exists is simpler: `site/src/data/pathways.json`, with a `readerAudience` array of controlled
  values, `prerequisites`, `status: draft|reviewed` (a `draft` pathway does not render), and an
  `evidence` field per entry. A principles index exists at `content/foundation/core_principles.md`.
  Phase 1's schema section below should be read as the original design intent, not as a description of
  what to build — check `pathways.json` and `site/src/content.config.ts` before adding a new field.

## Open threads

- **Caption safety/rule-scope routing is not a closable checklist.** Round 77's four flagged blocks
  were all traced and resolved 21 September (three were already routed; the fourth, a wall-contact
  receiving-posture tail missing from `game_management.md`, was fixed across all four content layers
  — see `project/reviews/caption_routing_and_game_management_propagation_2026-09-21.md`). This does
  not close the category: it is open-ended by nature, not a fixed-size backlog, and any future pass
  should re-investigate from scratch (read the review record above and
  `round_77_the_caption_could_not_be_shortened.md` first) rather than assume nothing remains.
- **The full seven-layer pilot rewrite** (Simple summary / Recognition cues / Understand it / If your
  team differs / Go deeper as literal layers, per Phase 2 below) has not visibly shipped in either
  `getting_started.md` or `rules_primer.md` — both carry Key focus, Go deeper, Common Mistakes, and Key
  Takeaways, but not the full named layer set this plan originally specified. Confirm current intent
  (whether the seven-layer IA is still the target, or whether Key focus + Go deeper + summary sections is
  the corpus's actual settled shape) before dispatching any work against Phase 2's acceptance criteria.
- **Executable, dated work items belong in `project/plans/OPEN_ITEMS.md`, not here.** This file is a
  design specification; do not add dispatch rows to it. If something below reads as a task rather than a
  standing rule, move it to `OPEN_ITEMS.md` rather than executing it from here.

---

## Baseline to reproduce

Before any new editing pass, record the current state fresh — do not reuse historical figures from the
consolidated record as a baseline:

- word and line counts for every current `content/**/*.md` file, including the principles index;
- document, diagram-reference, diagram-manifest, facts-block, and podcast counts;
- per-document heading, section, facts-block, and diagram counts;
- caption length distribution and captions over the project's existing warning thresholds;
- current homepage, section hubs, document header, table of contents, search, previous/next, diagram,
  and audio behaviour at desktop and mobile widths;
- build and checker status before editing.

Record the baseline in a review record or a coordinator scratchpad, not in `content/`, with one row per
metric: metric name, exact command, source of truth, owner, timestamp and commit, interpretation, and
the decision the metric informs.

## Target information architecture

Implement the following conceptual layers where a page needs them. Exact component names may differ,
but the distinction must remain visible in both HTML and audio decisions:

1. **Core principles:** the small, prioritised set of cross-scenario ideas that guide decisions
   throughout hockey, explained in plain language before position- or system-specific detail.
2. **Key focus:** the simple principle and immediate action that works for beginners and experienced
   players alike.
3. **Simple summary:** a short recap of the key focus points, including any condition that must not be
   separated from the instruction.
4. **Recognise it:** the visual, positional, or game cue that tells the reader when the principle
   applies.
5. **Understand it:** a clear explanation and a small number of worked examples, written for passive
   reading and listening.
6. **If your team differs:** named system alternatives and local rule-set scope.
7. **Go deeper:** detailed evidence, rule comparisons, edge cases, provenance, and technical full-ice
   application.

Do not hide a safety warning, medical restriction, rule exception, applicability condition, or honest
evidence limit merely to make a page look short. Any condition needed to act safely or legally must
appear in the same visible and spoken unit as the instruction. Only rationale, further examples,
provenance, and non-essential technical detail may be deferred.

### Speech contract

Use explicit Markdown headings or a reviewed metadata marker for the layers; do not rely on CSS
`details`, visual collapse, or a table of contents to define the audio order. The speech renderer must
emit the source in this order: Core principle/Key focus, Simple summary, Recognition cues, explanation
and worked examples, then deeper detail. A collapsed visual section is still spoken unless the
renderer's behaviour is deliberately changed and tested. For each pilot, save the extracted spoken units
and verify that every required condition remains in the same unit as its instruction.

The local NotebookLM generation, batching, download, conversion, retry, and provenance workflow is
specified separately in `project/plans/PODCAST_AUTOMATION_LOCAL.md`; this readability plan owns only the
audio learning contract and whether pilot audio is current.

### Podcast ordering and discoverability

The podcast feed sorts episodes by the manifest's `track` and emits serial ordering metadata
(`itunes:type="serial"`, `itunes:episode`, Spotify's `itunes:order`). Keep these as the project's
intended ordering signals, but do not assume every Apple Podcasts or Spotify view exposes that order
consistently. `track` orders the manifest and feed items; the RSS elements communicate serial order to
platforms; a title prefix is only a discovery fallback.

A reviewed `podcastTitle` field, separate from the shared site/EPUB `documentTitle`, uses compact
examples such as `07 Pos - Center` and `12 Sys - Breakouts` (`Systems` abbreviates "Systems and
Situations"). Check the title budget against current platform guidance rather than assuming full
visibility. Before changing titles, snapshot every published GUID keyed by episode identity and require
a generated-feed invariant showing no GUID changes. Preserved GUIDs maintain episode identity, but
Apple/Spotify subscriber position remains platform-dependent and cannot be guaranteed locally. Never use
invented dates to force ordering.

Validate local XML ordering, title lengths, GUID stability, manifest references, and playlist output
first, using the platform evidence and feed behaviour recorded in `site/src/pages/feed/podcast.xml.ts`
and `podcast-submission.local.md`. Live Apple Podcasts/Spotify rehearsal is a separate outward-facing
step requiring explicit approval; record client-specific observations as observations, not universal
platform behaviour.

## Phase 1: build the learning model before rewriting prose

### Deliverables

- Inventory the corpus for recurring decision principles and reduce the list to a small, prioritised
  set, reading every current content document and recording each candidate's exact file, section,
  wording, and surrounding qualifiers. Classify each candidate as `fundamental-principle`,
  `rule-dependent`, `safety-constraint`, `system-convention`, `local-practice`, or
  `evidence-backed-observation`. Do not invent principles from memory or promote a coaching preference
  to a universal law. Keep a rejected-candidate log (in `project/`, never in `content/`) explaining why
  a candidate was narrowed, excluded, or left as a local choice.
- Present each accepted principle in the same format: plain-language statement, why it matters, what to
  notice, what to do, one worked example, links to beginner and deeper applications. The first screen
  must be readable by a U10 player or parent; adult detail comes after the principle.
- Store the index as the single source of truth in `content/foundation/core_principles.md`, added
  exactly once to `site/src/data/structure.json`, with a stable document ID and normal generated route.
- Tag or link relevant sections, summaries, and diagrams to the principle they teach, without a
  principle link replacing the local safety, rule-set, or system qualification.
- Build a principle-to-corpus matrix covering every position, system, technique, Hockey-IQ, practice,
  and relevant off-ice explanation, recording application, why the principle matters there, the scope
  qualifier, the link, and an explicit `not applicable` reason where appropriate.
- Design any metadata schema before populating it, and populate it only where reviewed — check what has
  actually shipped (see "Current state" above) before assuming this section's original field list is
  still the target.
- Use controlled values such as `u10-player`, `u10-parent`, `youth-player`, `adult-beginner`,
  `adult-rec`, `coach`, `all-players`; `foundation`, `developing`, `detailed`, `reference`; and `lesson`,
  `rules`, `glossary`, `reference`. Do not create `u10-safe` as a general label.
- A U10 label describes intended reader or age applicability only after a named safety reviewer
  verifies jurisdiction, contact rules, equipment assumptions, and supervision context. Where the league
  is unknown, say to ask the coach or association.
- Make the homepage offer explicit entry points: U10/player-parent, adult beginner, adult recreational
  detail, changing position, and watch-and-learn, with a route for readers who want the complete
  reference. Make "Core principles" a first-class entry point while retaining the full catalogue.
- Promote the four routes in `content/getting-started/getting_started.md` into first-class navigation
  or pathway data rather than leaving them buried in one long page.
- Add pathway-aware next steps and prerequisites; do not rely on global document order or `PrevNext`
  alone. Define the pathway contract (stable IDs, ordered document/principle IDs, audience labels,
  prerequisites, URL/deep-link format, no-JS fallback, persistence/return-to-catalogue behaviour, search
  ranking, keyboard interaction) before implementing it.
- Add filters or labels to hubs and search so a U10 reader is not shown advanced systems with the same
  visual priority as a first-session lesson.

### Files likely involved

`site/src/pages/index.astro`, `site/src/data/structure.json`, `site/src/data/nav.ts`,
`site/src/content.config.ts`, `site/scripts/extract-meta.mjs`, `site/src/data/pathways.json`, document
layout/header components, hub/search components. Keep the source-of-truth decision documented in the
implementation review record.

### Acceptance criteria

- A new U10 reader can identify the next three actions without opening the full catalogue.
- A new reader can reach the core principles before advanced systems and state what each means in
  practical terms; an adult reader can follow each principle to multiple full-ice applications.
- The pilot defines and meets a low-effort budget for primary-path words, listening minutes, headings,
  clicks, and vertical distance to the first actionable instruction, measured separately for HTML and
  audio. Default target (unless a safety requirement makes it impossible): 600 primary-path words, 5
  minutes of audio, 5 primary-path headings, 3 clicks from the homepage, 1 viewport or 200 words before
  the first actionable instruction. Required warnings and applicability conditions count toward, not
  against, this budget.
- A site reviewer runs one navigation task per required entry point (U10/player-parent, adult beginner,
  adult recreational detail, changing position, watch-and-learn, complete reference); the full catalogue,
  search, hub filters, and adult-depth links remain discoverable.
- The two pilot documents and principles index have explicit audience, applicability, level, and
  content-type decisions; all other documents are explicitly marked unclassified or out of scope for
  this release.
- The principle-to-corpus matrix is complete for the release scope.
- Existing links and document IDs remain stable unless a redirect is added.
- Metadata has an owner and reviewer status and asserts no unreviewed hockey fact, rule, safety claim,
  age/league applicability, or prevalence claim.
- The first release is bounded to the metadata schema, homepage/pathway routing, a principles index of
  reviewed principles, and no more than two pilot documents for the full layer treatment — a full-corpus
  rewrite, quiz system, practice-plan catalogue, or audio redesign wait for a recorded go/no-go decision.
- The primary pilot path is fully understandable without answering, clicking to reveal an answer, or
  performing an activity.
- A fresh content review confirms authoritative primary-path voice and that every retained uncertainty
  is concise, reader-facing, materially relevant, and present in every required spoken/summary layer.

## Phase 2: create a short primary path inside long documents

Do not rewrite every page at once. The first release pilots only these two documents:

- `content/getting-started/getting_started.md`, for the U10/parent and adult beginner entry path;
- `content/foundation/rules_primer.md`, for shared principles plus unavoidable rule-set depth.

The principles index is a separate site/content deliverable in this release; its principles must be
derived from the corpus and reviewed before publication, not chosen as a fixed count or slogan list.

After a separate go/no-go review, later waves may pilot `content/positions/goaltender.md`,
`content/technique/body_contact_and_battles.md`, and `content/off-the-ice/practice_and_development.md`.

For each pilot:

1. Re-read the full surrounding section and re-derive every rule, safety, medical, age, and evidence
   claim from its primary source — existing prose is a hypothesis, not evidence.
2. Write a one-screen **Key focus** with the simple principles and immediate actions for both audiences.
3. Add a short **Simple summary** and **Recognition cues** — no answering questions or exercises.
4. Add one or two clearly labelled **worked examples** where they make the principle concrete: cue,
   action, consequence.
5. Keep the minimum explanation and every safety/legal condition in the same visible and spoken unit as
   the instruction.
6. Put rationale, detailed rule comparisons, research methodology, and non-essential alternatives under
   clearly named deeper sections or linked reference documents.
7. Rewrite in an authoritative voice: what the reader should understand and do first, evidence attached
   where it materially supports the instruction, no research-history narration.
8. Keep material uncertainty adjacent to the claim, concisely; move extended provenance and verification
   mechanics to the Sources/reference layer.
9. Make Common Mistakes and Key Takeaways short, memorable, and actionable, retaining corrective
   counterweights and scope qualifiers.
10. Compare the facts block with the new body and summaries independently — the facts layer is a
    separate spoken layer, not assumed from body coverage.
11. Build a propagation matrix per changed principle: body, facts (or an explicit no-facts decision),
    Common Mistakes, Key Takeaways, diagrams/captions, sibling documents, source trailer, spoken output.
    No row may be marked complete from a document-level grep alone — use a layer test (see
    `CLAUDE.md`'s propagation guidance).
12. Measure the new primary path in readable words, headings, key principles, and separate reading/audio
    time; report what was reduced and what was deliberately retained.

Do not make self-tests, interactive quizzes, scenario cards, or practice cards a default pattern.

For each accepted core principle, run a transfer audit across at least three contexts (e.g. a position
page, a team-system page, a technique or hockey-IQ page): confirm the principle remains true at that
level of generality, identify where it needs a scope qualifier, and show how the player's action
changes. If it does not survive, narrow it or leave it as a local coaching choice.

### Candidate treatments by content family

- `rules_primer.md`: short first-game rules path plus optional rule-set reference; keep every
  safety-bearing divergence and edition scope.
- `rink_map.md`: simple labelled orientation map and unfamiliar-rink checklist first; exact dimensions
  and source discussion later.
- `language_and_glossary.md`: short lookup definitions first; detailed distinctions and evidence in
  reference content.
- `uk_rules.md`: "before your first British game" checklist first; governance and edition comparison
  later.
- `on_ice_communication.md`: compact starter call set first; detailed multi-book screener/legal material
  later.
- `center.md`, `winger.md`, `defender.md`: retain the shared zone/situation skeleton, lead each
  situation with recognise/do/avoid, avoid repeating full rule explanations across positions.
- `goaltender.md`: core technique, communication, and safety in the main route; long rule comparisons as
  an optional reference layer.
- `body_contact_and_battles.md`: safe pre-contact principles and recognition cues first; detailed
  jurisdictional penalties later.
- `shooting.md`, `puck_handling.md`, `skating.md`, `passing_and_receiving.md`: mechanics and execution
  cues before research and legal detours; optional drills secondary.
- `playing_without_the_puck.md`, `risk_management.md`, `time_and_space.md`,
  `scanning_and_anticipation.md`, `puck_support_and_spacing.md`: one decision model and one worked
  example first.
- `getting_started.md`, `equipment.md`, `conditioning_and_recovery.md`, `practice_and_development.md`,
  `how_to_watch_hockey.md`, `team_play_and_culture.md`, `mental_game.md`: immediate action, checklist,
  routine, or plan before governance, physiology, statistics, and research detail.

These are review targets, not permission for blanket edits. Every changed content file needs a fresh
reading of its surrounding section and summary layers.

## Phase 3: use the right teaching mechanism

### Diagrams

Keep a diagram only when the picture gives spatial, visual, or comparative information faster and more
accurately than prose. A diagram that repeats a paragraph, shows an obvious location, or needs a long
caption to explain itself is a candidate for consolidation, replacement, or retirement.

For every diagram in the first-release pilots and principles index, record the learner question it
answers, the visual information it adds beyond adjacent prose, its audience and prerequisites, whether
it shows a location/relationship/sequence/choice/action, the first thing a beginner should notice, all
Markdown hosts, and whether it remains useful with a reduced caption. Check it at 375px, desktop width,
and in the spoken description without the image.

For each pilot, build a diagram progression map (overview, then notation/vocabulary, then relationship
or choice, then a concrete worked example, adult detail last), recording each figure's host, prerequisite,
first-notice cue, and why prose/video/demonstration would not serve the point better.

Score diagrams by learner value, not existence. In the first release, retain high-value diagrams,
combine near-duplicates, redraw ambiguous ones, and retire low-value ones only within the pilots and the
principles index — checking every host, inbound link, generated asset, caption, description,
facts/summary reference, and audio consequence before retirement. Defer the corpus-wide diagram census
to a later release.

Audit and improve remaining diagrams in this order: (1) safety-critical geometry — offside
skate/blue-line contact, faceoff encroachment, icing timing, crease boundaries, goalkeeper restricted
areas; (2) beginner orientation — one clean rink map and a minimal notation key before isolated
overlapping-area diagrams; (3) action sequences — two-to-four labelled frames for pivots, scanning,
receiving, support, coverage handoffs, regrouping, recovery, with explicit before/after or choice A/B
labelling; (4) adult detail — recognition cues and breakdown/recovery, not only ideal formations.

Current coverage is concentrated in rink maps and systems, while skating, passing, shooting, equipment,
and beginner procedures have few or no diagrams. Do not fill those gaps with top-down rink plans when a
coach demonstration, photo sequence, short video, or body-position illustration is the correct medium.

### Rink-map value audit

Treat `content/foundation/rink_map.md`'s diagrams as a later, separately bounded value audit, not
evidence that more diagrams are needed elsewhere. Identify the single clean orientation map a new player
needs; classify each additional diagram as essential (shows a boundary/relationship the overview
cannot), useful as an isolated close-up, useful only as adult/reference detail, or redundant.

Do not shade overlapping regions merely for emphasis or invent an extent for an unbounded term. Preserve
owning geometry and all safety/rule qualifications. Validate that a beginner can orient on the first map
before encountering detailed close-ups.

Captions are learner-facing, spoken content: a concise first teaching sentence naming the visual
takeaway and every safety/legal condition, optional detail kept separate and out of the opening
sentence, accessible `describe` text matching the actual image, a clear indication when the image is a
frozen moment rather than movement. Normally one short sentence, or two only when the second completes a
safe/legal instruction; the first sentence must stand alone for a U10 reader hearing it alone.

Keep `caption` and `describe` deliberately different: `caption` explains the teaching point; `describe`
states what is visibly drawn (players, puck, lines, arrows, regions, labels, orientation, whether the
frame is static). Neither may claim the image proves something it cannot show — plan-view glyphs do not
prove skate contact, facing, head position, timing, force, or legality.

For every changed diagram spec, enumerate every Markdown host, read the caption in each host's
surrounding context, and review the generated `caption`, `describe`, SVG, and spoken extraction — a
caption correct at its owner can mislead when borrowed elsewhere. Do not change a caption in
`site/src/data/diagrams.json` by hand (it is a build product); edit the owning `site/src/diagrams/*.mjs`,
rebuild, and inspect the generated output.

### Techniques beyond diagrams

The primary teaching style is explanation for passive reading and listening, in this order:

- **Progressive disclosure:** Key focus, Simple summary, Recognition cues, Understand it, Team/rule
  variation, Go deeper.
- **Clear explanations:** one principle per paragraph, concrete verbs, defined terms on first use,
  action before rationale.
- **Recognition cues:** what the player can see, hear, or feel before acting, especially on adult system
  pages.
- **Worked examples:** one successful and, only where useful, one failed decision — cue, action,
  consequence, not a puzzle for the reader to solve.
- **Short summaries:** for recall, not a second technical essay; choose omissions by consequence
  (safety, penalties, applicability, then instructional value).
- **Short checklists:** first session, equipment, bench/change, warm-up, concussion response, game-day
  preparation, "what to ask your coach" — explanatory, never omitting safety conditions.
- **Glossary links:** short first-use definitions with role-specific examples, preserving "you may hear
  this differently" scope notes.
- **Optional activities:** existing drills, practice plans, scenarios, or self-tests are secondary,
  added or restructured only when genuinely useful, age- and supervision-appropriate, reviewed, and
  accessible to readers who skip them.
- **Audio chapters:** section timestamps, verbal signposting, explicit warnings when a listener needs
  the picture. Every actionable permission, safety limit, rule-set scope, medical restriction, and
  honest evidence limit must occur in the same spoken unit as the instruction.

Any new drill, progression, scenario, or practice plan requires a named coach or safety review covering
age, contact rules, equipment, rink size, staffing, supervision, and a "do not attempt without..."
condition.

## Phase 4: browser, audio, and accessibility validation

After each pilot, inspect the real site at desktop and mobile widths: homepage pathway clarity; whether
beginner/detail labels are understandable without project jargon; long-page navigation and TOC
prioritisation; facts blocks, tables, diagrams, warnings, summaries, optional activities; horizontal
diagram scrolling, keyboard reachability, focus names, contrast; caption readability beside the image;
audio section signposting; search and related-link pathway consistency.

Use a named task script, not general impression. For the first release, use at least one U10
player/parent pair, one older-youth or teenage-beginner reviewer, one adult beginner, one adult
recreational player, one experienced reference reader, and one coach — proxies labelled as such, since a
parent or coach is not evidence of a child's comprehension. Give each reviewer the same tasks: find the
first three actions before a first session without search; explain one core principle and name one
recognition cue after reading only the key-focus/summary layer; find the adult technical explanation and
a rule/system qualification; listen to the pilot's opening and identify the same principle and every
required safety/legal condition. Pass only if every stratum completes tasks 1 and 2 without more than
one prompt, can reach task 3, and no reviewer makes an unsafe interpretation. Test at 375px, 768px, and
desktop width, including keyboard focus and a screen-reader pass over facts, warnings, diagrams, and
disclosures. These tests do not substitute for rules or safety review.

Before any pathway links `language_and_glossary`, either provide a reviewed audio episode or label the
destination and every audio-facing pointer explicitly as reading-only.

## Execution waves and ownership

Use separate agents for disjoint file sets. Suggested waves for a bounded release: coordinator (baseline,
metadata design, shared site components, plan/review records) → content agent per pilot document →
coordinator (metadata, homepage/pathway, shared renderer, navigation) → principles-index agent (after
coordinator approves the source-of-truth schema) → fresh reviewers (rules/source, content, facts,
safety, rendered site — no author self-certification) → coordinator (final staged-tree audit and
`commit-gate` review, mapping every changed source and generated output to C3–C11).

Later releases may use disjoint foundation/positions/systems/technique-IQ/off-the-ice/diagram-source
waves, but only after a recorded go/no-go decision. No checker, renderer, diagram build, audio render,
or site build may run while an agent is editing its inputs. Use a unique private scratch directory per
agent; do not change shared tools during a live wave; do not stage until an agent is permanently
finished; re-check that index and working tree match. Before each wave, check `git status`, ownership,
and current HEAD; before staging, ensure no file is `MM` or being edited live; re-read complete changed
files, not only hunks, to catch contradictions between individually correct sentences.

## Required verification

For content changes, run all applicable gates after all agents finish and after the final content edit:

```bash
python3 scripts/check_links.py --quiet
python3 scripts/check_facts.py
python3 scripts/check_absolutes.py
python3 scripts/check_geometry.py
python3 scripts/check_secrets.py
python3 scripts/check_counts.py
```

Run the worklists and read every hit rather than sweeping them (see `ls scripts/*.py` and `CLAUDE.md`
for the current, authoritative list — it has changed since this plan was first written):

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
python3 scripts/check_readability_census.py all
```

If any `site/src/diagrams/*.mjs` changes, run the diagram build before `check_absolutes.py`; inspect the
generated captions and SVGs. Use the absolute Node/npm binaries documented in `CLAUDE.md` (the `nvm`/`npm`
shims silently no-op); verify the real exit code and fresh `site/dist` output; the full build must clear
Astro caches; do not run concurrent diagram builds.

Every substantive content change requires a review record under `project/reviews/` naming changed files,
measurements, reviewers, findings, fixes, coverage, and what the method could not have found, with a
C3–C11 coverage table and the propagation matrix for each changed principle.

## Definition of done

- A beginner can choose a relevant path and reach an actionable first lesson without browsing the full
  catalogue.
- The site has a reviewed core-principles entry point: each principle stated plainly first, followed by
  a short summary, recognition cues, and worked applications; adult readers can continue to deeper
  material.
- Adult readers can reach preserved depth without the beginner path carrying all rule, evidence, and
  historical detail.
- Long documents have measured learner paths and explicit deeper/reference boundaries; no blanket
  word-count target was applied.
- Diagrams are added only where spatial information is useful, and safety-critical geometry is not
  delegated to captions when the picture cannot show it.
- Physical skills use an appropriate medium (demonstration, sequence, drill, video), not just a top-down
  route diagram.
- Existing facts, safety warnings, honest disclosures, and rule-set qualifiers remain correct and are
  present in every required spoken/summary layer.
- Every retained diagram has a recorded learner question and unique visual value; every retired or
  consolidated diagram has a recorded reason and host/link audit.
- Pathways, metadata, progressive sections, diagrams, audio, keyboard behaviour, and mobile layout pass
  browser inspection. Optional activities are not a completion dependency.
- Real coach/player feedback has been recorded, with unresolved questions kept visible rather than
  converted into confident claims.
- All applicable mechanical gates pass; fresh adversarial review is recorded; no deploy or push occurs
  without explicit approval.

## Known limits

The initial review was source- and structure-based. It did not establish that a U10 player can
understand a diagram, that a particular drill works on ice, that an adult rec player prefers a given
information architecture, or that the audio is comfortable to hear end to end. Those are validation
tasks for the implementation, not assumptions to encode as facts.

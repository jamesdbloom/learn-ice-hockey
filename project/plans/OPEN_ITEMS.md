# Active work

**Consolidated 21 September 2026 (third pass).** The previous version of this file had drifted back
to a state where every item under "Genuinely open" was actually closed — each fully documented in its
own review record already, but left in place as narrative instead of moved out. Preserved verbatim in
[`plan_archive_2026-09-21_pre_consolidation.md`](../reviews/plan_archive_2026-09-21_pre_consolidation.md).
Earlier consolidations: [20 September, second pass](../reviews/plan_archive_2026-09-20_second_consolidation.md),
[20 September, first pass](../reviews/plan_archive_2026-09-20_pre_consolidation.md) (and their own
predecessors, 11 and 16 September). Archives are evidence, not a dispatch queue. Completed, retracted,
duplicated, and historical material must stay out of this file — when work closes it moves to a review
record, per CLAUDE.md's own rule for this file.

**Closed-work coverage.** Every workstream from all archived files has its substance preserved in a
review record — see the archive files themselves for the full workstream-to-record index; the most
recent additions are `parent_pathway_checking_gap_closed_2026-09-20.md` (the checking-permission
Critical), `traffic_plan_pathway_assembly_2026-09-20.md` (the four new pathway entries, the
goaltender.md fix, the facts census, and the three-round `practice_and_development.md` safety fix),
`equipment_pwhl_pathways_cleanup_2026-09-21.md` (the equipment.md claim correction, the PWHL
sources entry, and the pathways.json documentation fix), and
`check_links_pathways_anchor_gate_2026-09-21.md` (the `check_links.py` extension that now verifies
`pathways.json` anchors — closes the item this file used to carry about that gap), and
`caption_routing_and_game_management_propagation_2026-09-21.md` (the caption-routing investigation
and the four-round `game_management.md` propagation fix it triggered),
`check_links_section_reference_gate_2026-09-21.md` (the `check_links.py` extension that now verifies
`§N` cross-document section references — closes the item this file used to carry about that gap),
`game_management_late_hit_common_mistakes_2026-09-21.md` (the late-hit Common Mistakes fix, its
independent safety-reviewer and rules-verifier passes, and the Minor citation-tier fix one of them
caught), `search_console_refresh_2026-09-21.md` (a live Google Search Console pull and the
striking-distance page list it produced), and
`faceoffs_and_rules_primer_opening_rewrites_2026-09-21.md` (the two Search-Console-standout
opening-paragraph rewrites, two rounds of independent review each, and the two new items they
surfaced — both now closed/parked, see that record's own "Status" section), and
`offensive_zone_play_only_moment_hedge_2026-09-21.md` (the parallel unhedged "only moment in the
game" claim one of those rewrites surfaced, now hedged — closes the item this file used to carry
about it; the convention question it raised is written up in `project/content_style_guide.md`,
"An unsourced 'only X' needs the word softened, not just a trailing hedge").
The two standing house-style decisions (injury-mechanism-form convention, capital-lowering), the
"punt to the owner, don't restate" caption policy (decided 21 September: yes, make it the standard),
and the
site-wide anchor-scroll bug were all closed 20–21 September and are recorded in the archive above; no
action remains on any of them. **Kadaza and FeedSpot submissions (site and podcast) are both done by
the user, 22 September 2026** — see "Genuinely open" below for what's left of the traffic-plan
marketing backlog.

## Design specifications, not dispatch queues

[`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md) — the Key Focus / dual-audience
design principles this corpus is written under. [`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md)
— local NotebookLM/TTS pipeline operations, including the podcast-vs-corpus divergence question (its
own open item, owned there — not duplicated here).
[`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md) — **the owner's own worklist**: the AWS SSO
login, the TTS vendor signups with live URLs, the ear test, and the listening pass. Written for a
human, not an agent; added 22 September 2026 at the owner's request. Do not duplicate any of the
three files' specifications here; executable corpus-content work is tracked in this file.

**`list_sites_content_and_traffic_plan_2026-09-20.md` relocated to `project/reviews/` on 21 September**
— every content-actionable item it produced is closed (see coverage above); it is kept there as
historical research context, not a live plan. Its non-content marketing/ops items are tracked below
under "Genuinely open," not restated here.

## Priority order

1. Safety residuals that could get a reader hurt, ejected, or given wrong rules for their age/division.
2. Site, diagram, and audio validation.
3. Deferred technical, source, and corpus-wide work — see "Genuinely open" below.

A row is complete only after its acceptance condition and required review are recorded in a review
record.

## Standing method notes (load-bearing, keep these)

- **Never `git add -A` or `git add .`.** Name files explicitly.
- **Stage only immediately before the gate**, not per-agent-completion — `SendMessage` to a finished
  agent resumes it and it will keep editing already-staged files.
- **File ownership must be stated AND verified** before parallel dispatch — check who else holds a
  file, not just assert exclusivity in the brief.
- **A checker result while an agent is live is not yet a finding** — re-run after every agent
  finishes, before acting on a mechanical-check failure or pass.
- **Run `check_facts.py --near` before editing any facts block** — the hard cap (`HARD_MAX`, currently
  14) can silently evict a rulebook fact if hit blind.
- **The nvm/npm shims are zsh functions** — `node`/`npm` must be invoked via their absolute binaries
  (`/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/{node,npm}`) or a build reports exit 0 while
  doing nothing. Astro also caches the markdown transform — `npm run build` (not a bare `astro build`)
  clears it.
- **`md_to_speech.py --only <doc_id>`** uses a double-underscore id separator
  (`technique__body_contact_and_battles`), not a slash.
- **A TTS chunk boundary can silently strip a scope gate** from an instruction in a neighbouring
  sentence — verify safety-relevant prose by rendering and reading the actual chunk, not by reading
  Markdown.
- **`.agents/`, `.codex/`, `AGENTS.md` are untracked and un-ignored on purpose** — mirrors of this
  project's tooling for a different agent runner. `check_secrets.py` is clean on them; the only real
  risk is a future blanket `git add -A` sweeping them in, which is already blocked by both `git-guard.sh`
  and this file's own rule above. Do not re-raise this as a fresh finding; do not delete them without
  asking.
- **A fix pattern applied to one site must be swept for every other site carrying the same claim
  before the wave is declared done** — a known-fixed defect surviving elsewhere, including in already
  -committed content, is how a 20 September wave found ten sites where three had been found.
- **Forbid `git stash` explicitly in any brief where other agents may be concurrently live** — it
  touches every unstaged file in the tree, not just the caller's own.
- **This file's own bookkeeping goes stale by silent accumulation, not just by contradiction.** Twice
  now (20 and 21 September) a "Genuinely open" section quietly filled up with items that were actually
  closed, each carrying its own accurate closure note — nothing was WRONG, but the section stopped
  meaning "open" and nobody was declaring that. **When a row's own text says it's closed, verified, or
  fixed, move it out in the same session — don't leave a correct closure note sitting under an "open"
  heading for the next reader to discover.**
- **A `pathways.json` entry can reuse a sibling pathway's document without curating it for the new
  audience** — found 20 September: `parent-of-a-new-player` inherited `positions/switching_positions`
  from the `new-position` pathway, and its one relevant section for this audience sits 80% through a
  long, tactically-dense document a beginner's parent has no reason to open. When reviewing a pathway,
  check whether each `docs` entry was actually curated for *this* pathway's audience, not just present.

## Genuinely open

- **Monthly traffic measurement — genuinely outstanding, outside this environment's scope.** Needs
  an ongoing cadence this session can't hold open. See
  `project/reviews/list_sites_content_and_traffic_plan_2026-09-20.md` Phases 3–4 for detail.
  (Kadaza and FeedSpot submissions are both done — see coverage above.) ⚠️ **Outreach to
  EIHA/clubs/rinks/coaches was removed from this file on 22 September 2026 at the owner's
  instruction** — a longer-term item they will do naturally at the right time, deliberately not
  tracked. It is recorded here as a removal, not a closure, so nobody re-derives it from the traffic
  plan and files it as a fresh gap. **Do not re-add it.**
- **Podcast work — the engineering backlog is owned in
  [`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md), and the owner's own manual steps in
  [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md).** Neither is duplicated here (see "Design
  specifications" above); that includes the podcast-vs-corpus divergence question, which is tracked
  in the first of those. The pipeline is **blocked on two things only a human can do** — an ear test
  across TTS engines, and a listening pass on the two episodes cleared by transcript alone.

- **Readability and dual-audience: NOT complete, and the residue is three named threads, not a
  sweep.** Re-measured 22 September 2026, live, not quoted from the file:
  `check_readability_census.py openers` reports **39 of 39 prose — done**;
  `check_readability_census.py markers` reports **331 markers across 32 documents, 16 still
  arriving with zero prose after their heading**. ⚠️ **That 16 is a worklist, not a defect list** —
  several are orientation diagrams likely correct as they stand, and the tool prints the per-document
  breakdown, so **run it rather than quoting this figure**. The other two threads are in
  [`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md) under "Open threads":
  caption safety/rule-scope routing (open-ended by nature, re-investigate from scratch), and the
  **seven-layer pilot rewrite, which needs an owner decision before any work is dispatched** — it has
  not shipped in either pilot document, and whether the seven named layers are still the target, or
  whether Key focus + Go deeper + the summary sections is the corpus's settled shape, is a question
  nobody has put to the owner. **Do not dispatch against Phase 2's acceptance criteria until that is
  answered.**

## Push status

⚠️ **This section is a live fact, not historical narrative — it goes stale on every commit AND on every
push, and must be re-checked with `git fetch origin main && git rev-list --count origin/main..HEAD`,
never quoted from memory or from an earlier paragraph in this file.**

**Re-checked 22 September 2026, second check of the day: `origin/main` and local `main` are both at
`e0a0b69`. Nothing is unpushed.** ⚠️ **This corrects what this section said a few hours earlier**, which
was that three commits (`7df04fc`, `25b0725`, `22c9cc6`) were committed and unpushed, and that the
auto-push pattern "did not recur here." **It did recur** — all three are now on `origin`, pushed by
something other than this session between the two checks.

⚠️ **So the standing lesson is stronger than "re-check before quoting": this section can go stale
WITHOUT ANYONE IN THE SESSION DOING ANYTHING.** A commit count is not merely a figure that ages, it is
a figure another process can change underneath a correct reading. The fetch-and-count command above is
the only trustworthy sentence in this section; every commit hash and every count written around it is a
snapshot with a shelf life measured in hours. **Push remains the user's own call throughout** — the
observation that something else is pushing is recorded as a fact about this repository, not as
permission for an agent to push.

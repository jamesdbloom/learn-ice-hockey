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
caught), and `search_console_refresh_2026-09-21.md` (a live Google Search Console pull and the
striking-distance page list it produced).
The two standing house-style decisions (injury-mechanism-form convention, capital-lowering), the
"punt to the owner, don't restate" caption policy (decided 21 September: yes, make it the standard),
and the
site-wide anchor-scroll bug were all closed 20–21 September and are recorded in the archive above; no
action remains on any of them.

## Design specifications, not dispatch queues

[`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md) — the Key Focus / dual-audience
design principles this corpus is written under. [`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md)
— local NotebookLM/TTS pipeline operations, including the podcast-vs-corpus divergence question (its
own open item, owned there — not duplicated here). Do not duplicate either file's specification here;
executable corpus-content work is tracked in this file.

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

- **Draft improved openings for the two highest-value striking-distance pages** (`faceoffs.md`,
  2,457 impressions at position 14; `rules_primer.md`, 2,182 impressions at position 27) — the two
  standouts identified in a live Google Search Console refresh, by impression volume. This is a real
  `content/` change (titles/descriptions are auto-generated from each document's own H1 and Overview
  — there is no metadata field to edit separately), so it needs the normal
  content-reviewer/rules-verifier/commit-gate chain, not a quick pass across all pages. The other 16
  identified striking-distance pages are lower individual payoff — worth batching only once the first
  two prove out. See `project/reviews/search_console_refresh_2026-09-21.md` for the full ranked list
  and reasoning. Not started — needs the user's go-ahead before touching two of the corpus's most
  heavily-reviewed documents.
- **Kadaza/FeedSpot submission, outreach to EIHA/clubs/rinks/coaches, and monthly traffic
  measurement — genuinely outstanding, outside this environment's scope.** Unchanged from the
  original plan: these need the user's own account/credentials, relationships, and an ongoing cadence
  this session can't hold open. See
  `project/reviews/list_sites_content_and_traffic_plan_2026-09-20.md` Phases 3–4 for detail.
- **The podcast-vs-corpus divergence question** — owned in `PODCAST_AUTOMATION_LOCAL.md`, not
  duplicated here (see "Design specifications" above).
- **Podcast work generally** — deferred all session per standing instruction; see
  `PODCAST_AUTOMATION_LOCAL.md` for current state.

## Push status

⚠️ **This section is a live fact, not historical narrative — it goes stale on every commit AND on every
push, and must be re-checked with `git rev-list --count origin/main..HEAD`, never quoted from memory or
from an earlier paragraph in this file.** As of 21 September 2026, local `main` is **3 commits ahead**
of `origin/main`: `1e04005` (the `check_links.py` pathway-anchor gate), `a642f87` (the caption
routing / `game_management.md` propagation fix), and `120e706` (the plan-hygiene pass removing
already-fixed work narrated as pending). All committed, none pushed. A fourth commit for the
late-hit fix, the `§N` gate, the Search Console record, and this file's own updates is about to be
added in this same session. Push remains the user's own call throughout — this session pushes
nothing without explicit go-ahead.

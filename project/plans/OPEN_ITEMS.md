# Active work

**Consolidated 20 September 2026 (second pass, same day).** The previous version of this file — grown
to 826 lines, almost entirely closed workstream narrative from the first consolidation onward — is
preserved verbatim in
[`plan_archive_2026-09-20_second_consolidation.md`](../reviews/plan_archive_2026-09-20_second_consolidation.md).
The consolidation before that is in
[`plan_archive_2026-09-20_pre_consolidation.md`](../reviews/plan_archive_2026-09-20_pre_consolidation.md)
(earlier ones: 11 September, 16 September; see those archives' own predecessors). Archives are
evidence, not a dispatch queue. Completed, retracted, duplicated, and historical material must stay out
of this file — when work closes it moves to a review record, per CLAUDE.md's own rule for this file.

**Closed-work coverage.** Every workstream from both archived files has its substance preserved in a
review record:

| Workstreams | Record |
|---|---|
| 0–91 (16–18 Sept) | `round_62`…`round_81` (`round_62`–`round_76` dated 3–12 September, `round_77`–`round_81` dated 16 September — despite the range name, not all of them are from 16–18 Sept), `section_split_pilot_2026-09-18.md`, `scroll_regions_site_round_2026-09-18.md`, `bcb_quote_drift_2026-09-17.md`, `boards_limb_and_red_flags_2026-09-19.md`, `shoulder_limb_propagation_2026-09-19.md`, `goaltender_section_split_2026-09-19.md`, `conditioning_boards_splice_2026-09-19.md`, `conditioning_and_recovery_podcast_no_go_2026-09-19.md`, `skating_podcast_v2_no_go_2026-09-19.md` |
| 92–117 (19 Sept) | `quote_drift_and_closing_reviews_2026-09-19.md` |
| 118–126 (19–20 Sept) | `critical_stick_instruction_and_first_commit_2026-09-20.md` |
| 127–131 (20 Sept) | `de_counting_and_road_home_2026-09-20.md` |
| 132–146 (20 Sept) | `rule_69_4_propagation_2026-09-20.md` |
| Corpus-wide CM/KT asymmetry sweep (all 39 documents, first time this session), the renderer clause-list fix, and the safety/rules-verifier re-check chain that followed (20 Sept, "Workstream 147" onward) | `second_backlog_wave_2026-09-20.md`, `third_backlog_wave_2026-09-20.md`, `fourth_backlog_wave_2026-09-20.md`, `fifth_backlog_wave_2026-09-20.md`, `sixth_backlog_wave_2026-09-20.md`, `seventh_backlog_wave_2026-09-20.md`, `eighth_backlog_wave_2026-09-20.md`, `clause_citation_renderer_fix_2026-09-20.md` |
| Traffic/content plan review (20 Sept) | `traffic_plan_adversarial_review_2026-09-20.md` |
| `check_quote_drift.py` short-quote-pair fix; `/404` trailing-slash confirmed production-safe (20 Sept) | `tooling_and_infra_closures_2026-09-20.md` |

If you're looking for the detail behind a closed item and it isn't below, it's in one of these files —
grep the relevant archive for the workstream number, or the review record above, first.

## Design specifications, not dispatch queues

[`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md) — the Key Focus / dual-audience
design principles this corpus is written under. [`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md)
— local NotebookLM/TTS pipeline operations, including the podcast-vs-corpus divergence question (its
own open item, owned there — not duplicated here). Do not duplicate either file's specification here;
executable corpus-content work is tracked in this file.

## Priority order

1. Safety residuals that could get a reader hurt, ejected, or given wrong rules for their age/division
   — see the pathway Critical below, now the top item.
2. The two standing house-style/convention decisions below — low effort, blocking further triage in
   their areas until decided.
3. Site, diagram, and audio validation.
4. Deferred technical, source, and corpus-wide work.

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
- **This file's own bookkeeping has more than one place that can go stale independently, and fixing
  one does not fix the others.** A single document's status can be asserted in a per-document row, a
  coverage census's document-name list, and a historical workstream's own "FIXED" annotation — three
  places that can drift apart. **When closing any finding, grep this whole file for every other place
  the same document name appears before declaring the row closed.** This class of bug recurred multiple
  times in one evening on 20 September before this note stopped it.
- **A `pathways.json` entry can reuse a sibling pathway's document without curating it for the new
  audience** — found 20 September: `parent-of-a-new-player` inherited `positions/switching_positions`
  from the `new-position` pathway, and its one relevant section for this audience sits 80% through a
  long, tactically-dense document a beginner's parent has no reason to open. When reviewing a pathway,
  check whether each `docs` entry was actually curated for *this* pathway's audience, not just present.

## Genuinely open

### Safety — `pathways.json`'s `parent-of-a-new-player` entry (Critical, STILL LIVE, found and re-confirmed 20 September)

A `safety-reviewer` pass found this draft pathway sends a parent of a starting child through
`getting_started.md` → `equipment.md` → `switching_positions.md`, entering at
`3-routes-onto-the-ice--children` — and **never routes them to the corpus's own body-checking
safety material**, even though checking-age thresholds (IHUK U10/U12 no, U14+ yes; USA Hockey 12U and
below no; Hockey Canada U13 and below no) sit exactly at this audience's boundary.

**A first attempted fix (adding `technique/body_contact_and_battles` to the pathway's `docs` array)
was independently checked by both a fresh `safety-reviewer` and a fresh `content-reviewer` and found
NOT to close the gap** — both, independently, read `site/src/pages/index.astro`'s actual render code
and confirmed a pathway's `docs` array is never consumed by the site build; the only thing rendered is
`entry.doc`/`entry.anchor`, which is unchanged and still lands the reader in `getting_started.md`
Section 3 ("Routes onto the ice — children," lines 233–274), which still says nothing about checking
permission — unlike the parallel adult section two routes above it. `pathways.json` has been corrected
to stop describing this as fixed and to record it as documentation-only.

- **Critical, genuinely still open**: the real fix is a `content/` edit to `getting_started.md`
  Section 3 — an early sentence pointing to `technique/body_contact_and_battles.md`'s §1 (which
  correctly answers this for a UK reader, verified by the safety-reviewer against IHUK, NIHL and WNIHL
  terms specifically, not just US/Canadian tables) — or an `entry.anchor` change landing the reader
  directly on such a sentence, matching how Route 1's own anchor already does this. Needs the normal
  C1–C11 gate (`safety-reviewer`, `rules-verifier`) before it can land.
- **Major, resolved**: `positions/switching_positions.md` has been **removed** from this pathway's
  `docs` — both independent reviewers recommended dropping it outright (not just flagging it): it
  isn't promised by the pathway's blurb, its one relevant passage sits ~80% through a document written
  for an audience the separate `new-position` pathway already owns more precisely.
- Everything else in the three documents (helmet/mask sourcing, UK jurisdiction scoping, age-division
  guidance, the checking-caveat's survival across every layer of `body_contact_and_battles.md`, the
  verified rule citations) was independently checked twice and holds — no other defect found.
- A secondary, non-safety finding from the content-reviewer: this file's own `$comment` says `docs`
  order "never" carries meaning, but several pathways' `evidence` fields (including this one, before
  correction) write as if `docs[0]` "leads" — a latent inconsistency between the file's stated policy
  and its own annotations, pre-existing and not introduced by this fix. Worth a look, not urgent.
- **Not safe to promote out of `draft` status** until the `getting_started.md` §3 content fix lands
  and is reviewed — the JSON is now accurate about this, but the reader-facing gap is unchanged.

### Decisions needed (low effort, blocking further triage)

- **Is the "injury mechanism form" convention worth keeping?** — the first time this session a reviewer
  questioned a corpus convention itself rather than compliance with it. Remaining sites can't be swept
  one way or the other until this is decided.
- **A corpus-wide house-style question: disclose every undisclosed-capital-lowering quote, or accept
  silent lowering as a deliberate style choice?** The identical USA Hockey 607(a) fragment recurs with
  its sentence-initial capital silently lowered (no `[a]` bracket) in at least four separate systems
  documents, reading as a consistent house style rather than four independent oversights. Needs a
  decision before any further quote-drift triage treats this pattern as a defect to fix.

### Corpus content

- **A cross-document facts-layer census has never been run as one pass** — the traceability check
  inside one document cannot distinguish "this limb doesn't belong here" from "this is a propagation
  gap"; only a census across documents that share a limb can. At least one Major (a dropped "forearm
  and hip" half of a posture instruction) was found this way by accident, not by a dedicated pass.
- **`content/positions/goaltender.md`'s Rule 69.7 rebound-scramble counterweight omission** — the
  rebound-scramble sentence states the incidental-contact permission but omits its counterweight
  (pushed into the net with the puck after a stop = goal disallowed), already present in the
  neighbouring Common Mistakes bullet. A completeness nuance about scoring outcome, not a safety
  defect — the instruction given ("go win the puck") remains correct either way. Low priority.

### Content/traffic plan (20 September — see `traffic_plan_adversarial_review_2026-09-20.md`)

The plan document itself (`list_sites_content_and_traffic_plan_2026-09-20.md`) now carries a header
pointing back here and an inline annotation on its Conclusion's overstated traffic-value verdict — that
annotation resolves the "rewrite the Conclusion" item this section used to carry. Still open, for
whoever picks this up:

- **Reframe Phase 1 items 2 ("cost, local-start, registration and insurance"), 3 ("the equipment
  journey"), and 5 ("a home-practice route")** before writing anything — the underlying material
  already exists in depth in `getting_started.md` (registration), `equipment.md` (loan/hire/buy), and
  `practice_and_development.md` (off-ice practice). The task is pathway assembly and cross-linking to
  existing sections, not new authorship.
- **Route each item through the full C1–C11 review gate before it touches `content/`**: Phase 1 items
  2, 3, 5 need it (items 3 and 5 are `safety-reviewer` territory), and so does Phase 2's proposed
  NHL/IIHF/USA Hockey comparison pages (`rules-verifier` across four books). Everything else in the
  plan (title/description tags, internal link structure, Search Console review, directory submissions)
  is a site/marketing operation, not a content review.
- The `parent-of-a-new-player` pathway itself is tracked above now, under Safety, since it has a
  Critical finding — not re-listed here.

## Push status

⚠️ **This section is a live fact, not historical narrative — it goes stale on every commit AND on every
push, and must be re-checked with `git rev-list --count origin/main..HEAD`, never quoted from memory or
from an earlier paragraph in this file.** As of 20 September 2026 (re-checked during this same
consolidation, after the user pushed again independently mid-session), local `main` and `origin/main`
are **identical** at `dcb5de8` — 0 commits ahead, nothing of this session's work is unpushed. This
number moved twice during this single consolidation pass without this session's own action, which is
expected: the user's own pushes need no permission from this session, only this session's own pushes
do. No changes made in this consolidation pass (the plan-file edits, the `pathways.json` fix, or the
review records) have been committed or pushed yet.

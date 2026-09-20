# Active work

**Consolidated 20 September 2026.** The previous file had reached 14,056 lines, mostly closed
workstream narrative. Everything before this date is preserved verbatim in
[`plan_archive_2026-09-20_pre_consolidation.md`](../reviews/plan_archive_2026-09-20_pre_consolidation.md)
— this is the third such consolidation (earlier ones: 11 September, 16 September; see those archives'
own predecessors). That archive is evidence, not a dispatch queue. Completed, retracted, duplicated,
and historical material must stay out of this file — when work closes it moves to a review record,
per CLAUDE.md's own rule for this file.

**Closed-work coverage.** Every workstream from the archived file has its substance preserved in a
review record:

| Workstreams | Record |
|---|---|
| 0–91 (16–18 Sept) | `round_62`…`round_81` (dated 2026-09-16), `section_split_pilot_2026-09-18.md`, `scroll_regions_site_round_2026-09-18.md`, `bcb_quote_drift_2026-09-17.md`, `boards_limb_and_red_flags_2026-09-19.md`, `shoulder_limb_propagation_2026-09-19.md`, `goaltender_section_split_2026-09-19.md`, `conditioning_boards_splice_2026-09-19.md`, `conditioning_and_recovery_podcast_no_go_2026-09-19.md`, `skating_podcast_v2_no_go_2026-09-19.md` |
| 92–117 (19 Sept) | `quote_drift_and_closing_reviews_2026-09-19.md` |
| 118–126 (19–20 Sept) | `critical_stick_instruction_and_first_commit_2026-09-20.md` (written in this consolidation — this range had no prior record) |
| 127–131 (20 Sept) | `de_counting_and_road_home_2026-09-20.md` |
| 132–146 (20 Sept) | `rule_69_4_propagation_2026-09-20.md` |
| Traffic/content plan review (20 Sept) | `traffic_plan_adversarial_review_2026-09-20.md` |

If you're looking for the detail behind a closed item and it isn't below, it's in one of these files —
grep `plan_archive_2026-09-20_pre_consolidation.md` for the workstream number first to find which one.

## Design specifications, not dispatch queues

[`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md) — the Key Focus / dual-audience
rollout specification. [`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md) — local NotebookLM
operations. Do not duplicate their specifications here; all executable work is tracked in this file.

## Priority order

1. Safety and rules residuals that could cause a penalty, injury, or wrong rule-set decision.
2. Readability/Key Focus rollout gaps (below) — the rollout itself shipped across all 39 documents by
   18 September; what remains is narrower.
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
  14 — raised from 11 on 20 September, see below) can silently evict a rulebook fact if hit blind.
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
  -committed content, is how Workstream 145 (20 September) found ten sites where three had been found.
- **Forbid `git stash` explicitly in any brief where other agents may be concurrently live** — it
  touches every unstaged file in the tree, not just the caller's own.

## Genuinely open

### Corpus content

- **`content/hockey-iq/time_and_space.md`** — Key Takeaways item 9 doesn't mention Rule 69.4's
  returning-goalkeeper duty (an omission, not a wrong claim; Common Mistakes already states it).
- **`content/positions/goaltender.md`** — Key Takeaways is missing eight distinct Common-Mistakes
  points: leaving the crease during a fight, playing on with a broken stick, pulling your own mask for
  a whistle, banking snow onto the netting, drifting toward a puck you wanted whistled, the ordinary
  stick fouls binding a goaltender too, a Britain-specific glove-throw ruling, and Rule 69.7's
  rebound-scramble whistle. Given the volume, likely needs one dedicated Key Takeaways item rather
  than eight insertions. See `rule_69_4_propagation_2026-09-20.md` §"KT/CM asymmetry sweep" for detail
  (recorded there even though the finding is broader than that wave's own subject).
- **`content/technique/body_contact_and_battles.md`** — Key Takeaways missing the "checking a player
  already engaged with a teammate" rule (USA Hockey 640(e)/(g)/(h); IIHF vulnerable-player glossary
  entry) that Common Mistakes already states.
- **`content/systems/special_teams.md`** — Key Takeaways missing two rule-consequence points Common
  Mistakes already has: losing last change after your own icing (Rule 82.1), and the
  faceoff-centre-ejection escalation ladder.
- **`content/systems/breakouts.md`** — Key Takeaways item 12 understates a penalty ceiling; Common
  Mistakes correctly states a screening-interference penalty is not capped at a minor (match penalty /
  major-plus-game-misconduct tiers across all four books).
- **A full Common-Mistakes/Key-Takeaways asymmetry sweep** — only 6 of 39 documents were checked (both
  directions attempted, mostly one direction done thoroughly). The five items above came from that
  partial sweep; the other 33 documents, including the two most rule-dense (`rules_primer.md`,
  `uk_rules.md`), are unchecked.
- **The renderer drops the word "clause" from every multi-clause citation, ~34 sites** (originally
  Workstream 102, archive) — never confirmed fixed in a later workstream. Verify current state before
  treating as live; if still present, it's a read-aloud-integrity defect, not a rules error.
- **A cross-document facts-layer census has never been run as one pass** (originally Workstream 19,
  archive) — the traceability check inside one document cannot distinguish "this limb doesn't belong
  here" from "this is a propagation gap"; only a census across documents that share a limb can. At
  least one MAJOR (a dropped "forearm and hip" half of a posture instruction) was found this way, by
  accident, not by a dedicated pass.
- **Podcast scripts vs. corpus divergence, direction undecided** (originally Workstream 21, archive) —
  a `rules-verifier` pass on a podcast script found rows where the script states rules the corpus
  document doesn't. Unresolved which direction is the defect (corpus is short, or script has
  unreviewed new text) — a coordinator decision, not something an agent can close alone. Podcast work
  is deferred this session per standing instruction; this stays open until podcast work resumes.
- **Whether the "injury mechanism form" is a convention worth keeping** (originally Workstream 83,
  archive) — the first time this session a reviewer questioned a corpus convention itself rather than
  compliance with it. Flagged as needing a decision before remaining sites are swept one way or the
  other.

### Tooling

- **`check_quote_drift.py`'s facts-layer coverage (fixed 20 September) surfaced ~150 new candidates
  corpus-wide; only 12 of the highest-volume documents were triaged.** Found and fixed in the tool
  itself: a false-positive class from short quote-pairs on one line (documented in the tool's own
  docstring), and a false-positive class from NHL Table 14 / IIHF Table 16's known column-interleaved
  extraction (also documented). Found and NOT yet fixed in content: six genuine Minor defects
  (undisclosed initial-capital lowering, no `[x]` bracket, no meaning change) in
  `content/systems/defensive_zone_coverage.md` (2 sites), `content/technique/shooting.md`,
  `content/systems/special_teams.md`, `content/positions/goaltender.md` (2 sites) — see
  `rule_69_4_propagation_2026-09-20.md` for exact lines and fixes. ~27 documents never triaged.
- **A structural fix to `check_quote_drift.py`'s short-quote-pair false positive** was scoped but not
  implemented: require quote content to start immediately after whitespace/punctuation rather than
  treating every quote mark as a valid re-anchor point.
- **`project/content_style_guide.md`'s `HARD_MAX` change (11→14, 20 September)** never got a dedicated
  `content-reviewer` pass — only coordinator judgment plus explicit user direction. Not a hockey-content
  claim, flagged by a commit-gate as worth a look, not blocking.

### Site / infra (not actionable from this environment)

- **`/404` without a trailing slash** serves Astro's raw framework error page in local preview instead
  of the branded 404 (`trailingSlash: 'always'` intercepting before the custom fallback). The custom
  page serves correctly with a trailing slash. Whether this is also live in production, where
  CloudFront's own error-document substitution may behave independently of trailing slash, has never
  been confirmed — needs someone with access to the deployed CloudFront distribution. Not fixable from
  this environment (`infra/` is Terraform; do not run it).

### Content/traffic plan (20 September, adversarially reviewed — see `traffic_plan_adversarial_review_2026-09-20.md`)

- **Reframe Phase 1 items 2 ("cost, local-start, registration and insurance"), 3 ("the equipment
  journey"), and 5 ("a home-practice route")** before anyone acts on them — the underlying material
  already exists in depth in `getting_started.md` (registration), `equipment.md` (loan/hire/buy), and
  `practice_and_development.md` (off-ice practice). The task is pathway assembly and cross-linking to
  existing sections, not new authorship.
- **Flag which plan items are `content/` changes needing the full C1–C11 review gate**: Phase 1 items
  2, 3, 5, and Phase 2's proposed NHL/IIHF/USA Hockey comparison pages all need it (items 3 and 5 are
  `safety-reviewer` territory; the comparison pages need `rules-verifier` across four books). Everything
  else in the plan (title/description tags, internal link structure, Search Console review, directory
  submissions) is a site/marketing operation, not a content review.
- **Rewrite the plan's Conclusion** — it states a traffic-value verdict ("unlikely to be a material
  acquisition channel") with more confidence than its own sources measure. Should say plainly the
  judgment is inferred from general directory/SEO behaviour, not measured for this site, with the
  plan's own Phase 4 as the way to test it.
- The plan's `pathways.json` `parent-of-a-new-player` entry (draft status, needs a named safety
  reviewer before a reader-facing label attaches) is confirmed accurate and stays open as originally
  stated.

### Deferred by standing instruction

- **Podcast work** — untouched all session, per the standing pre-session instruction. See also the
  podcast-vs-corpus divergence item above, which blocks resuming this cleanly.

## Not open — checked during this consolidation and found superseded

- **"USA Hockey/Hockey Canada contact-requirement disclosure consistency question in
  `zone_entries.md`/`offensive_zone_play.md`"** (an older row) — superseded by the extensive Hockey
  Canada/CARHA possession-exclusion work done 20 September (`rule_69_4_propagation_2026-09-20.md` §5,
  §8, §9). Both books' actual position (contact-based statute plus a no-contact ordinary-interference
  route) is now stated correctly in both files and traced through `rules_primer.md`. Close.

## Push status (as of this consolidation)

Local `main` is two commits ahead of `origin/main`: `21de48f` (a plan file, the repo owner's own
commit) and `5dc4d4d` (this session's third commit). `835850b` and `a9856df` are already pushed.
Pushing `21de48f`/`5dc4d4d` needs the user's explicit go-ahead — `main` deploys to production on push,
and approval to commit is never approval to push.

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

[`READABILITY_AND_DUAL_AUDIENCE.md`](../plans/READABILITY_AND_DUAL_AUDIENCE.md) — the Key Focus / dual-audience
rollout specification. [`PODCAST_AUTOMATION_LOCAL.md`](../plans/PODCAST_AUTOMATION_LOCAL.md) — local NotebookLM
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
- **This file's own bookkeeping has more than one place that can go stale independently, and fixing
  one does not fix the others.** A single document's status is asserted in at least three places that
  can drift apart: (1) a per-document row under "Genuinely open," (2) the live coverage census's
  document-name lists, and (3) a historical workstream section's own "FIXED" annotation (or lack of
  one). This session found the same class of defect three separate times in one evening — a plan row
  contradicting a review record staged in the same commit, a coverage-census sentence never revisited
  after its wave's fixes landed, and (found by the coordinator itself, not a gate) a historical
  section's already-fixed findings re-surfacing as "unknown" in a later, unrelated census
  reconciliation. **When closing any finding, grep this whole file for every other place the same
  document name appears before declaring the row closed** — a single find-and-fix is not enough.

## Genuinely open

### Corpus content

- ~~The IIHF's current rulebook has no "match penalty" concept anywhere in it, and other corpus claims
  might assume otherwise~~ — **CHECKED, corpus-wide, nothing found.** A dedicated sentence-level sweep
  of every "match penalty"/"IIHF" co-occurrence in `content/` (~250 sentences, plus a stricter
  no-negation pass to catch any site positively misattributing a match-penalty tier to the IIHF) found
  every instance already correctly stated across roughly 15 documents, independently re-verified against
  `sources/iihf_rules_v1.1.txt` for the highest-load-bearing rule numbers (42.4, 44.3/44.4, 49.3, 60.4).
  Close.
- **A prompt-injection attempt, correctly ignored** — a sweep agent working on
  `content/foundation/on_ice_communication.md` reported that a tool result during its run contained
  embedded text styled as "MCP Server Instructions," directing it to create an external "Claude Docs"
  artifact and post progress there. The agent correctly identified this as untrusted content and did
  not act on it. No corpus content affected. Logged for the record per standing instruction, not an
  open item requiring action.
- ~~`content/off-the-ice/team_play_and_culture.md:86` — the boards-sitting bullet's injury-mechanism
  clause is unsourced~~ — **FIXED.** Softened to explicit coaching-caution framing at both sites (body
  and Key Takeaways item 11): "coaches also flag it as a way an exposed skate blade ends up near
  someone's face, though no published source measures that mechanism." Checks clean.
- ~~`content/off-the-ice/equipment.md`'s SIHA/BUIHA half-visor phrasing, never independently
  re-verified~~ — **CHECKED, accurate.** `sources/eiha_inhouse_2026-27.txt:242-243` (Rule 9.7): "All
  players competing in SIHA Recreational or SIHA University Ice Hockey must wear, at minimum, a half
  visor, regardless of their date of birth" — confirms "regardless of age" exactly. The separate BUIHA
  clause (line 672, already verified extensively earlier this session in the `uk_rules.md` half-visor
  work) is consistent with equipment.md's phrasing too. Close.
- **A full Common-Mistakes/Key-Takeaways asymmetry sweep** — this line previously stated "only 6 of 39
  documents were checked," a stale count from before the 20 September sweep continuation; corrected
  here by naming documents rather than re-guessing a total, per this file's own standing lesson that a
  count goes stale the moment anyone re-checks it. **Confirmed checked, clean or with findings fixed
  and committed**: `technique/skating.md`, `off-the-ice/conditioning_and_recovery.md`,
  `positions/switching_positions.md`, `foundation/rink_map.md`, `hockey-iq/scanning_and_anticipation.md`,
  `off-the-ice/equipment.md`, `off-the-ice/team_play_and_culture.md`, `technique/puck_handling.md`,
  `technique/passing_and_receiving.md`, `hockey-iq/playing_without_the_puck.md`,
  `hockey-iq/time_and_space.md`, `positions/goaltender.md`, `technique/body_contact_and_battles.md`,
  `systems/special_teams.md`, `systems/breakouts.md`, `foundation/uk_rules.md`,
  `off-the-ice/how_to_watch_hockey.md`, `getting-started/getting_started.md`,
  `hockey-iq/puck_support_and_spacing.md`, `foundation/core_principles.md`,
  `foundation/language_and_glossary.md`, `foundation/rules_primer.md`,
  `off-the-ice/practice_and_development.md`, `positions/defender.md`, `positions/winger.md`,
  `foundation/on_ice_communication.md`, `hockey-iq/risk_management.md`, `off-the-ice/mental_game.md`,
  `positions/center.md`, `reading-diagrams/reading_ice_hockey_diagrams.md`,
  `systems/defending_the_rush.md`, `systems/faceoffs.md`, `systems/forechecking_systems.md`,
  `systems/game_management.md`, `systems/neutral_zone_systems.md`, `systems/offensive_zone_play.md`,
  `systems/zone_entries.md`, `technique/shooting.md`, `systems/defensive_zone_coverage.md`
  (**39 of 39 — the full corpus, first time this session** — the 8 named before
  `defender.md`/`winger.md` closed via `project/reviews/fifth_backlog_wave_2026-09-20.md`, closing out
  the full list an earlier sweep record named as unchecked; `defender.md`/`winger.md` came back clean
  in the next wave; the 6 named after them had 14 Major findings between them, all fixed and
  independently reviewed via `project/reviews/sixth_backlog_wave_2026-09-20.md`; `foundation/uk_rules.md`/
  `off-the-ice/equipment.md`'s own Critical closed separately via
  `project/reviews/fourth_backlog_wave_2026-09-20.md`. The final 7 — `faceoffs.md`,
  `forechecking_systems.md`, `game_management.md`, `neutral_zone_systems.md`, `offensive_zone_play.md`,
  `zone_entries.md`, `shooting.md` — were missing from this line entirely until a commit-gate caught it:
  they were checked in an *earlier* wave (the "12 more documents checked" pass — see the historical
  section above, now annotated FIXED), 4 clean on that pass (`game_management.md`, `zone_entries.md`,
  `forechecking_systems.md`, `shooting.md`) and 3 with findings since fixed via
  `project/reviews/second_backlog_wave_2026-09-20.md` (`faceoffs.md`, `neutral_zone_systems.md`,
  `offensive_zone_play.md`). **`center.md` and `defending_the_rush.md` also appeared in that same
  earlier pass's "clean" list — that verdict is superseded, not confirmed: the sixth wave's closer read
  found real Major gaps in both, since fixed.** This is the second time this session a stale-plan
  bookkeeping gap survived past its own fix; see the standing method notes. `systems/defensive_zone_coverage.md`
  was the last of the 39 to be checked — 2 Major, 2 Minor found, all fixed and independently
  rules-verified and safety-reviewed via `project/reviews/seventh_backlog_wave_2026-09-20.md`, which
  also caught and fixed a Critical rule-inversion the fix itself introduced. **No document in the
  corpus has an unknown CM/KT status as of this wave** — whoever finds a new gap in a "checked"
  document should log it as a fresh finding, not reopen this census.
- ~~The renderer drops the word "clause" from every multi-clause citation~~ — **FIXED** (see below,
  same day). `scripts/md_to_speech.py`'s citation regex was widened and verified against the real
  pipeline, zero survivors corpus-wide.
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
- **`content/positions/goaltender.md`'s Rule 69.7 rebound-scramble counterweight omission** — item 15's
  rebound-scramble sentence states the incidental-contact permission but omits its counterweight
  (pushed into the net with the puck after a stop = goal disallowed), already present in the
  neighbouring Common Mistakes bullet. Judged a completeness nuance about scoring outcome, not a safety
  defect — the instruction given ("go win the puck") remains correct either way. Recovered from
  historical-only narrative during this session's plan-bookkeeping reconciliation; low priority.
- ~~Whether the Boarding/Interference rule-scope gap found in `body_contact_and_battles.md` recurs
  elsewhere in the corpus~~ — **CHECKED, corpus-wide, nothing found.** A keyword sweep of every
  Boarding/Roughing citation across all 39 documents (NHL/IIHF Rule 41/51, Hockey Canada 7.2/7.9, USA
  Hockey 640, CARHA 49), each checked against primary source for whether the cited rule's real elements
  actually fit the scenario it's attached to, found the one known site now correctly and honestly
  scoped, and no other mismatch anywhere else. Close.
- **A corpus-wide house-style question: disclose every undisclosed-capital-lowering quote, or accept
  silent lowering as a deliberate style choice** — the identical USA Hockey 607(a) fragment recurs with
  its sentence-initial capital silently lowered (no `[a]` bracket) in at least four separate systems
  documents, reading as a consistent house style rather than four independent oversights. Needs a
  coordinator decision before any further quote-drift triage treats this pattern as a defect to fix.
  Recovered from historical-only narrative during this session's plan-bookkeeping reconciliation —
  structurally the same kind of open convention-question as the "injury mechanism form" item above.

### Tooling

- **`check_quote_drift.py`'s facts-layer coverage (fixed 20 September) surfaced ~150 new candidates
  corpus-wide.** Found and fixed in the tool itself: a false-positive class from short quote-pairs on
  one line (documented in the tool's own docstring), and a false-positive class from NHL Table 14 /
  IIHF Table 16's known column-interleaved extraction (also documented). The six genuine Minor content
  defects this same pass found (undisclosed initial-capital lowering, no `[x]` bracket, no meaning
  change) in `content/systems/defensive_zone_coverage.md` (2 sites), `content/technique/shooting.md`,
  `content/systems/special_teams.md`, `content/positions/goaltender.md` (2 sites) — **FIXED, committed
  in `ea4d793`** (verified directly: `git show ea4d793 --stat` touches all four files). **The ~27-
  documents-never-triaged figure that used to sit here is also stale — the triage was completed the
  same day, all 39 documents, see "Quote-drift triage complete" below**, which found exactly one more
  genuine defect (a tense mismatch in `playing_without_the_puck.md`), also fixed and committed in
  `ea4d793`. This whole bullet describes fully closed work; nothing here is still open.
- ~~A structural fix to `check_quote_drift.py`'s short-quote-pair false positive was scoped but not
  implemented~~ — **FIXED.** Added a negative lookbehind (`(?<![A-Za-z0-9])`) requiring an opening
  quote mark not be immediately preceded by a letter or digit — a genuine opener follows whitespace or
  punctuation; a short quote's own closing mark (which is what was being misread as a fresh opener)
  follows the last letter of a word. Verified against a synthetic reproduction of the artefact, then
  corpus-wide: every one of the 39 documents re-checked showed `notfound` drop or hold steady (1,049 →
  981 total, −68), with **zero files showing any change in `flagged` count** — confirming the fix
  removes only fabricated fragments and never touches a genuine drift detection. `scripts/
  check_quote_drift.py`'s docstring updated to record the fix in place of the old open-problem
  description.
- ~~`project/content_style_guide.md`'s `HARD_MAX` change (11→14, 20 September) never got a dedicated
  `content-reviewer` pass~~ — **CHECKED, sound, no action needed.** Correcting this row's own prior
  mischaracterization first: `HARD_MAX` is the total-fact-**count** cap per `​```facts​``` ` block
  (11→14 facts), not a character cap — the character caps (`MAX_LEN`/`MAX_LEN_QUALIFIED`, 200/300) are
  a separate, unrelated, unchanged pair of constants. A dedicated content-reviewer pass confirmed the
  actual change is narrowly scoped (made to unblock exactly two facts blocks that needed one more
  mandatory `Rule:` citation each), honestly documented (the style guide explicitly reverses its own
  prior stronger claim that "the 11-fact cap is not the thing to relax," rather than silently
  contradicting it), and not being exploited — a corpus-wide count found nothing anywhere at 13 or 14;
  the maximum in the whole corpus is 12, held by exactly the two blocks the change was made for plus
  two unrelated ones, each using only one extra slot. One Minor note: the guide doesn't explain why 14
  specifically rather than 12 (the minimum the documented incident needed) — disclosed as a buffer
  judgment call, not asserted as derived, so not a fabrication, just thinner justification than the
  guide's usual rigor. Not urgent.
- ~~A bare-bracket renderer case, distinct from the fixed clause-dropping defect — 2 sites in
  `content/systems/offensive_zone_play.md` use a bracket like `(b, c, d, e or f)` with no rule number
  attached~~ — **FIXED** as a content edit (restating "640" explicitly at both sites, per the fix
  direction already recorded here). Verified by rendering the actual pipeline
  (`md_to_speech.py --only systems__offensive_zone_play`) and reading the shipped `.ssml`: both sites
  now voice correctly as "under six hundred and forty, clause b, clause c, clause d, clause e or clause
  f" instead of inert punctuation. All mechanical checks clean.

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

## Push status

⚠️ **This section is a live fact, not historical narrative — it goes stale on every commit AND on every
push, and must be re-checked with `git rev-list --count origin/main..HEAD`, never quoted from memory or
from an earlier paragraph in this file.** As of the seventh backlog wave's commit, local `main` is
**1 commit ahead** of `origin/main`: `0dec77b`. The user pushed everything through `4dbe3af` themselves,
from outside this session (confirmed via `git reflog show origin/main`, "update by push" attributed to
the repo owner) — this is the first time in the session the push count dropped rather than grew, and it
happened without this session initiating or being asked about it, which is expected: the user's own
pushes need no permission from this session, only this session's own pushes do. `0dec77b` has not been
pushed and needs the user's explicit go-ahead before that changes. (The two-commits/`21de48f`/`5dc4d4d`
and four-commits/`2401efc`-through-`11d7602` figures this section previously stated were themselves
stale within one commit each time — a running illustration of exactly the live-fact-vs-narrative
staleness this file's standing method note warns about generally, and now also of the fact that a push
from outside this session can change this number without this session's own action.)

## In progress — Workstream 147 wave (2026-09-20, post-consolidation)

Dispatched 10 parallel agents against the consolidated open-items list: 7 file-specific fixes
(goaltender.md quote-drift+KT gap, special_teams.md quote-drift+KT gaps, defensive_zone_coverage.md
quote-drift, shooting.md quote-drift, body_contact_and_battles.md KT gap, breakouts.md KT gap,
time_and_space.md KT gap) plus 3 read-only research tasks (clause-dropping renderer defect status,
CM/KT asymmetry sweep continuation on 12 more documents, quote-drift triage on ~23 remaining
untriaged documents).

**Completed so far:**
- `defensive_zone_coverage.md` — both quote-drift Minor fixes applied ([i]n/[a]ny bracket disclosure),
  verified against `usah_casebook.txt:11767` and `iihf_rules.txt:7515`, all checks clean, diff minimal.
- `shooting.md` — the NHL 42.1 quote-drift fix applied, verified against `nhl_rules.txt:5425`, all
  checks clean, diff minimal (one line).

**Still running:** goaltender.md, special_teams.md, body_contact_and_battles.md, breakouts.md,
time_and_space.md, the renderer-defect verification, the CM/KT sweep continuation, the remaining
quote-drift triage.

All fixes in this wave will need `safety-reviewer` coverage before any commit (contact/penalty
content, C6 territory) — plan for that once the content-fix agents finish.

- `time_and_space.md` — Key Takeaways item 9 now carries the Rule 69.4 road-home duty, one sentence,
  reusing the already-verified Common Mistakes wording, placed to stand alone when read aloud. Verified
  against `nhl_rules.txt:7230-7233` and `iihf_rules_v1.1.txt:5587-5588`. All checks clean, diff minimal.

- `body_contact_and_battles.md` — Key Takeaways item 9 now carries the "checking a player already
  engaged with a teammate" rule (USA Hockey 640(e)/(g)/(h), IIHF vulnerable-position glossary entry,
  NHL's lack of an equivalent). Verified against `sources/usah.txt` (640(e)/(g)/(h), the Declaration of
  Player Safety, the Glossary's "Physical Engagement" entry) and `sources/iihf_rules_2026-27.txt`
  (Glossary "Vulnerable Position"). All checks clean, diff minimal (1 line).

- `goaltender.md` — found and fixed 3 sites (not 2) with the same undisclosed USA Hockey 607(c)
  capital-lowering drift (facts block, Common Mistakes, Key Takeaways — same phrase recurred three
  times), plus the Hockey Canada 7.10 drift. Added new Key Takeaways item 15 grouping the 8-point
  procedural-fouls gap, propagated from already-cited Common Mistakes prose; spot-verified a sample of
  the underlying citations directly (27.6/27.5, 10.4, 3.2(c), IIHF Situation 67.2) rather than
  re-deriving all of them from zero — flagged this honestly as a scope limit, recommending a
  `rules-verifier` pass on the remaining citations before commit. All mechanical checks clean.

- `breakouts.md` — Key Takeaways item 12 now carries the full four-book escalation ladder (match
  penalty/major-plus-game-misconduct tiers), completing a "floor not ceiling" gap that previously left
  a listener believing the exposure topped out at a minor. Verified against `nhl_rules.txt:2632`,
  `iihf_rules_v1.1.txt:4784`, `hc.txt:6839-6849`, `usah.txt:325-330,5144-5148,3496-3498`. All checks
  clean, diff minimal (1 line). 6 of 7 content-fix agents in this wave now done; special_teams.md and
  the three research tasks still running.

- `special_teams.md` — refuted the brief's own quote identification (it named NHL 42.1, which was
  already correctly capitalized; the real undisclosed drift was USA Hockey 607(c), in 3 places not 1 —
  facts block, Common Mistakes, Key Takeaways). Fixed all three with [a] bracket disclosure. Added two
  new Key Takeaways items for the last-change-after-icing and centre-ejection gaps, verified against
  `nhl_rules.txt:8689-8724` (Rule 82.1), `nhl_rules.txt:8127-8145` and both IIHF editions (Rule 76.6).
  All checks clean, diff minimal. All 7 content-fix agents in this wave now done.

- **Clause-dropping renderer defect (Workstream 102) — CONFIRMED STILL LIVE**, verified by actually
  rendering the pipeline, not just reading code. Root cause: `scripts/md_to_speech.py`'s citation
  regexes handle a single clause marker per bracket pair (`640(b)` -> "clause b") and separate bracket
  pairs (`(a), (b)`), but never a list or range packed inside ONE bracket — `640(b, c, d, e or f)` or
  `640(b–f)`. These fall through to generic bracket-stripping / dash-disambiguation and render as
  inert punctuation: confirmed live in shipped `.ssml` chunks for `breakouts.md`, `rules_primer.md`,
  `game_management.md`, `body_contact_and_battles.md`, `playing_without_the_puck.md`,
  `forechecking_systems.md`, `time_and_space.md`, `offensive_zone_play.md` (8 of 11 originally-flagged
  documents; the other 4 sites in `shooting.md`/`switching_positions.md`/`rules_primer.md`/
  `goaltender.md` sit only in the unvoiced Sources trailer, so listeners never hear those specific 4 —
  not fixed, just never reached). Site count unchanged at 34 since the original find. This is a
  read-aloud-integrity defect (a listener hears "six hundred and forty, open-paren, b comma c comma d
  comma e or f, close-paren" as inert text with no clause marker), not a rules-accuracy error — the
  written text is correct, only the spoken rendering degrades. Needs a `scripts/md_to_speech.py` fix
  (extend the citation regex to handle a list/range inside one bracket) — coordinator/shared-tool
  territory, not a subagent task. Not fixed in this wave.

## CM/KT asymmetry sweep continued — 12 more documents checked, 2 Major + 3 Minor found

Continuation sweep checked 12 more documents in both directions (7 clean: game_management.md,
zone_entries.md, defending_the_rush.md, winger.md, center.md, shooting.md, forechecking_systems.md —
their Key Takeaways sections are unusually exhaustive). New genuinely-open findings:

- **`content/foundation/uk_rules.md`** (Major) — Common Mistakes states BUIHA's own independent
  half-visor minimum (separate from SIHA's); Key Takeaways item 4's otherwise-thorough
  facial-protection round-up never mentions BUIHA at all. Fix: add one clause to KT4 alongside its
  existing SIHA discussion.
- **`content/systems/neutral_zone_systems.md`** (Major) — Common Mistakes states that icing from your
  own side of centre also bars your own line change under NHL/IIHF Rule 81.4 (narrow exceptions:
  injured player, strength-changing penalty), with USA Hockey writing no such bar and Hockey Canada's
  reaching only U18AAA/Junior/Senior; Key Takeaways never mentions the line-change consequence at all,
  only the zone/draw loss. Fix: add a sentence to KT9 or a new item.
- **`content/systems/offensive_zone_play.md`** (2 Minor) — (a) Common Mistakes states Rule 69.7's
  rebound/loose-puck incidental-contact permission and its "pushed into the net" trap; Key Takeaways
  item 5's crease/screening section never mentions 69.7 at all, only 69.1/69.3/69.4. (b) Common
  Mistakes states the four-book high-stick crossbar-vs-shoulder divergence (NHL/IIHF/HC use the
  crossbar, USA Hockey uses shoulder height); absent from Key Takeaways entirely — lower priority,
  scoring-legality nuance not a safety/ejection matter.
- **`content/systems/faceoffs.md`** (Minor) — Common Mistakes states a post-whistle scrum inside the
  circle moves the draw to the neutral zone (NHL/IIHF 76.2, USA Hockey 612(d), Hockey Canada
  6.3(d)(vi)); absent from Key Takeaways — a tactical-cost rule, not a penalty/safety matter.

**Coverage now stands at 18 of 39 documents checked** (6 from the original sweep + 12 here), both
directions attempted this round. 21 documents remain unchecked, including the largest rule-dense pair
already noted. Reviewer flagged its own limits honestly: no citation was independently re-fetched from
primary source in this pass (relied on each document's own already-sourced citations — a `rules-verifier`
pass on these five new findings' citations is still owed before fixing); each of the 21 remaining
documents got only one read-through, not the second pass round 20's own history says catches what a
first pass misses.

**All four findings above — FIXED, 20 September 2026**, in the wave recorded as
`project/reviews/second_backlog_wave_2026-09-20.md` (`uk_rules.md`'s BUIHA clause,
`neutral_zone_systems.md`'s icing/line-change bar, `offensive_zone_play.md`'s two Minors, `faceoffs.md`'s
scrum-relocation Minor — all independently rules-verified and safety-reviewed, committed in `2401efc`
and an earlier same-day commit). This whole section is historical narrative kept for its evidence, not
a live worklist — none of these four rows describe open work. ⚠️ **The 20-September coordinator missed
this note when doing a later, unrelated reconciliation of the "Genuinely open" coverage census and
briefly mis-listed all seven of this section's documents (the 4 fixed plus the 3 of the "7 clean" not
already covered elsewhere) as having unknown or open status** — caught by a commit-gate three waves
later. The lesson generalizes past this one instance: a historical section's "FIXED" annotation and the
live coverage census are two different pieces of bookkeeping, and updating one does not update the
other automatically.

## Quote-drift triage complete — all previously-untriaged documents now covered

Final triage batch covered the remaining 22 documents (9 have no facts blocks at all — nothing to
triage there). Findings:

- **One real defect, fixable directly**: `content/hockey-iq/playing_without_the_puck.md:353`'s
  `Never:` fact quotes "one more forward **joined** the rush" (past tense) while the body two
  paragraphs below (line 364) has "**joins**" (present tense) — a self-quote mismatch between block
  and body, not a rulebook drift. Trivial, safe fix.
- **One new page-splice false positive to document**: `offensive_zone_play.md:579` (USA Hockey
  Casebook 607 Situation 4) — verified verbatim against `sources/usah_casebook.txt:11683-11693` once
  page-header furniture is accounted for, same class as the already-documented NHL 42.1 splice.
- **A tool limitation confirmed twice**: `check_quote_drift.py`'s bracket-disclosure exemption only
  strips single-letter brackets (`[a]`), not multi-letter ones (`[ing]`) — two genuinely-disclosed
  grammatical insertions (`faceoffs.md:218,636`) score as NOTFOUND purely because of this regex gap,
  not because anything is wrong with the content.
- **Two new false-positive classes worth documenting in the tool**, not yet in its docstring: (a)
  self-quoted coaching maxims/rhetorical questions in `Key:`/`Never:`/`Convention:` facts (12+
  instances found, all correctly unfindable since they were never claimed as citations); (b) a
  corpus-wide, consistent (if undisclosed) house style of lowercasing a source's sentence-initial
  capital to embed it mid-sentence without an `[a]` bracket — the identical USA Hockey 607(a) fragment
  recurs this way in at least four separate systems documents, reading as a deliberate style choice
  rather than four independent oversights; flagged as a corpus-wide style question for a future
  decision (disclose everywhere vs. accept silent lowering), not fixed here.

**The 150-candidate facts-layer triage from today's `check_quote_drift.py` fix is now fully complete**
across all 39 documents (12 in the first two batches, 22 more here, 5 already known to have no facts
blocks). Total confirmed-genuine content defects found across the whole triage: the 6 Minor
capital-lowering drifts (now fixed by this session's wave — see above) plus this one tense-mismatch
Minor. Everything else was one of four now-documented tool false-positive classes.

## Coordinator fixes and next wave dispatched

Fixed directly: the one real quote-drift defect from the final triage batch
(`playing_without_the_puck.md:353`, a tense mismatch between a fact and its own body). Documented in
`scripts/check_quote_drift.py`'s docstring: the multi-letter-bracket exemption gap, and the
self-quoted-coaching-maxim false-positive class (caught and fixed a SyntaxWarning from an unescaped
bracket in my own docstring edit before it landed). Added the newly-confirmed USA Hockey Casebook 607
Situation 4 page-splice to `sources/README.md`, matching its existing documented-instances style. All
mechanical checks clean.

Dispatched two parallel `safety-reviewer` batches covering all seven content files fixed in the
earlier ten-agent wave (goaltender.md, special_teams.md, defensive_zone_coverage.md / shooting.md,
body_contact_and_battles.md, breakouts.md, time_and_space.md) — required before any commit, C6 has no
exceptions. Awaiting results before staging.

**Corpus-wide sweeps now complete for this round:** CM/KT asymmetry sweep at 18/39 documents (21
remain, including the two most rule-dense); quote-drift facts-layer triage fully complete across all
39 documents; the clause-dropping renderer defect confirmed still live with exact root cause
identified (not yet fixed — scripts/ change, needs a dedicated pass).

## Safety review batch 1: CRITICAL found and fixed (special_teams.md's new KT items overstated as universal)

Independent `safety-reviewer` batch confirmed `goaltender.md` and `defensive_zone_coverage.md`'s
fixes CONFIRMED-SAFE (one Minor citation-completeness nit in goaltender.md item 15, not blocking). But
found a genuine CRITICAL in `special_teams.md`'s two new Key Takeaways items (12, 13) — both stated
NHL/IIHF-specific rules as if universal, with no book named and no carve-out, directly contradicting
the SAME document's own pre-existing, correct facts block and body prose:

- Item 12 (icing/last-change forfeiture) named only "Rules 81.4 and 82.1" with no book, when USA
  Hockey doesn't replicate this rule at all and Hockey Canada runs it only in specific divisions —
  the document's own facts block (line 966) and body prose (line 994) already state this correctly.
- Item 13 (faceoff-encroachment second-violation) claimed a "bench minor... under the NHL and the
  IIHF (76.7) and under USA Hockey Rule 613(d)" — but USA Hockey's is a PERSONAL minor on the
  individual offender, not a bench minor, a real on-ice administration difference (wrong player would
  serve the penalty). The document's own facts block (line 962) and body prose (line 979) already
  state this correctly; the reviewer also found a THIRD document (`how_to_watch_hockey.md`) already
  states it correctly, strengthening the finding.

**Fixed directly**, reusing the exact wording already verified and standing in this document's own
facts block/body prose (the outlier pattern again — the fix already existed two layers away). All
mechanical checks re-run clean. Dispatching a fresh independent safety-reviewer to re-check this
specific fix before staging.

## Safety review batch 2: one Major fixed (pre-existing wrong citation, duplicated by propagation)

Independent `safety-reviewer` batch confirmed `shooting.md`, `breakouts.md`, and `time_and_space.md`'s
fixes CONFIRMED-SAFE outright. Found one Major in `body_contact_and_battles.md`: a PRE-EXISTING
sentence ("Only the NHL leaves it to the referee's judgement under boarding or roughing") cited the
wrong NHL rule — Roughing (51.1) is a punching/slamming-motion rule, doesn't fit a body check on a
player engaged in a puck battle at all — and today's propagation duplicated this wrong citation from
Common Mistakes into the new Key Takeaways item, rather than introducing it fresh.

**Fixed both occurrences** (Common Mistakes line 1650, Key Takeaways line 1739) — but verified the
reviewer's own suggested fix myself before applying it: checked NHL Rule 41.1 (Boarding) directly
against `sources/nhl_rules.txt:5380`, confirmed it explicitly uses "a defenseless opponent," a clean
match; did NOT include "charging or interference" from the reviewer's broader suggestion since I
hadn't independently verified those fit as well, and used only what I'd checked myself.

Also fixed the Minor `shooting.md` finding: the same undisclosed NHL 42.1 drift the original brief
named only one site for actually recurred at two more (lines 466, 892) — both bracket-fixed to match.

All mechanical checks re-run clean across all three touched files. Dispatching a fresh, independent
safety-reviewer to re-check both fixes before staging.

## Fresh re-check found two more real issues — both fixed and verified

The independent re-check confirmed `special_teams.md`'s CRITICAL fix CONFIRMED-SAFE outright (all four
layers now agree, every citation independently re-verified including USA Hockey 613(d) specifically
confirmed as a personal not bench minor). But it found the `body_contact_and_battles.md` fix, while
better, still overclaimed: the paragraph explicitly covers net-front battles too, where Boarding
(which requires driving into the boards) cannot apply — "leaves it purely to Boarding" wasn't true of
the whole scenario. It also found I had fixed the wrong quote in `shooting.md` — three sites carried
an identical undisclosed drift on a DIFFERENT quotation (USA Hockey 607(c)'s "a minor plus a
misconduct...") than the one I'd fixed (NHL 42.1's "a minor, major..."), at the same three lines.

**Both fixed**: `shooting.md`'s three 607(c) sites now bracket-disclosed. `body_contact_and_battles.md`'s
two sites now scope the claim explicitly to "a board battle," and — verified directly against
`sources/nhl_rules.txt:6281-6286` (NHL's Pick/Interference definition, which carves out a legal
"battle for the puck" for a different fact pattern than a net-front scrum) — disclose honestly that
whether NHL's Interference doctrine reaches a net-front hit is not settled here, rather than asserting
either Boarding or Interference confidently covers it. All mechanical checks re-run clean.

**This closes the safety-review chain for this wave.** All 8 content files, plus the tooling/sources
documentation fixes, are now ready to stage. Writing the review record next.

## Fourth commit-gate BLOCK on the backlog wave: no rules-verifier pass on goaltender.md item 15

Fourth commit-gate dispatch independently re-derived essentially every rule citation touched in this
wave (NHL 41.1/21.1/42.1/9.6/10.4/27.6, IIHF 42.4/56.5/9.6/27.5/76.6, USA Hockey and Hockey Canada
equivalents) and found zero further instances of either defect pattern the two prior safety re-checks
caught — both twice-fixed files (`shooting.md`, `body_contact_and_battles.md`) now hold. But BLOCKed
on C4: no dedicated `rules-verifier` pass on `goaltender.md`'s new Key Takeaways item 15, whose ~20
citations were mostly propagated rather than independently re-derived. The gate itself spot-checked 7
and found no errors, but flagged that a clean sample isn't a completed check. Also C3: dimension
coverage silent on D1-D3 (as a named rules-verifier pass), D6, D8, D10 (facts-reviewer specifically),
D13, D14.

Fixed the cosmetic typo it flagged in `sources/README.md` ("Confirmed`check_quote_drift.py`" — missing
space). Dispatched a targeted `rules-verifier` pass on item 15's remaining ~13 citations (the 7 the
gate already checked don't need re-verification). Will write an explicit dimension-coverage section
into the review record once that result is in, rather than write it blind again.

## goaltender.md item 15: rules-verifier CONFIRMED-ACCURATE, closing the C4 gap

Targeted `rules-verifier` pass verified all ~13 remaining citations (7 already checked by the gate)
against primary source directly — every rule number, book attribution, and quotation confirmed
accurate, all cross-book divergences correctly stated (broken-stick, mask-removal escalation,
netting/snow tiering and routing, icing waive-off across five books). Zero errors found.

Two non-blocking notes: (1) item 15's rebound-scramble sentence states Rule 69.7's incidental-contact
permission but omits its counterweight (pushed into the net with the puck after a stop = goal
disallowed) — already present in the neighbouring Common Mistakes bullet; judged a completeness nuance
about scoring outcome, not a safety defect, since the instruction given ("go win the puck") remains
correct with or without it. Logged as open backlog, not re-triggering another fix/re-review cycle for
this specific point. (2) Hockey Canada 7.10(a)'s referee-permission carve-out technically lives in
Interpretation 1, not 7.10(a)'s own text — item 15 folds them together; the earlier facts block names
the Interpretation explicitly. A precision nit, not an error.

Writing the explicit D1-D15 dimension-coverage section into the review record now, then re-running the
mechanical checks and dispatching the fifth commit-gate.

## Fifth commit-gate CLEAR — fourth commit of the day landed

Fifth dispatch independently re-derived 6 citations from `goaltender.md` item 15 across four
rulebooks plus a Situation Handbook, re-confirmed both twice-fixed files hold in their current staged
text, confirmed §5's dimension-coverage section exists and is genuine, and confirmed HEAD/index/tree
state throughout. **CLEAR.**

**Committed** as `ea4d793` — "Close eight summary-layer gaps, fix a wrong citation two propagations
deep, and confirm a renderer defect is still live." 12 files changed. Commit message verified free of
any Claude/Anthropic/co-author mention. Not pushed — remains the user's call.

**Genuinely open, carried forward:** the renderer clause-dropping defect (confirmed live, root cause
identified, not fixed); 21 of 39 documents unchecked in the CM/KT asymmetry sweep, plus 5 new findings
from this wave's continuation not yet fixed (uk_rules.md BUIHA half-visor, neutral_zone_systems.md
icing/line-change bar, 2 offensive_zone_play.md Minors, faceoffs.md Minor) — **all 5 of these — FIXED
later the same day, via `project/reviews/second_backlog_wave_2026-09-20.md`; all four documents already
correctly appear in the live "confirmed checked" coverage-census line**; goaltender.md's Rule 69.7
counterweight omission (non-blocking completeness nuance); whether the Boarding/Interference scope
gap recurs elsewhere in the corpus (never checked); the check_quote_drift.py regex's own structural
fix (scoped, not implemented); the HARD_MAX style-guide change's own content-reviewer pass (never
dispatched).

## Renderer fix: the clause-dropping defect (Workstream 102) is fixed and verified end-to-end

Confirmed live earlier today by rendering the pipeline; now fixed in `scripts/md_to_speech.py`.

**Root cause**: three citation regexes (`rule-citation`, `bare-clause-citation`, `usa-clause-citation`)
each captured only a SINGLE clause token per bracket pair — `640(b)` worked, but a list or range
packed into ONE bracket (`640(b, c, d, e or f)`, `640(b–f)`) matched none of them and fell through to
generic bracket-stripping, where **brackets are silent in this renderer** — so the clause letters and
the joining word simply vanished from the audio.

**Fix**: widened each regex's first-clause capture group to also match a list/range inside one
bracket (comma, "and", "or", or a dash between tokens), and added a new shared function
(`_expand_clause_list`) that expands the captured content into fully-spoken form — "clause b, clause
c, clause d, clause e or clause f" / "clause b to clause f" — repeating "clause" before every item,
matching the convention already used for the separate-bracket form (`RE_CLAUSE_TAIL`). A single-token
bracket takes the same code path as always (the new expansion loop runs zero times), so no existing
behaviour changed.

**Verified, in this order:**
1. Unit-level: all five known corpus patterns (`640(b)`, `640(b-f)`, `640(b–f)`,
   `640(b, c, d, e or f)`, `621(b and c)`, `615(a, d and e)`) render correctly; existing single-clause
   and no-"Rule"-prefix cases unaffected.
2. `python3 scripts/md_to_speech.py --self-test` — 260 assertions, 2 failures, both pre-existing
   (confirmed identical failure count/messages before and after this change via `git stash`) — zero
   new regressions.
3. Rendered the actual pipeline for all 8 originally-affected documents
   (`systems/breakouts.md`, `foundation/rules_primer.md`, `systems/game_management.md`,
   `technique/body_contact_and_battles.md`, `hockey-iq/playing_without_the_puck.md`,
   `hockey-iq/time_and_space.md`, `systems/offensive_zone_play.md`,
   `systems/forechecking_systems.md`) and inspected the shipped `.ssml` output directly — every
   previously-mangled site now reads correctly.
4. **The original "34 sites" figure was itself stale** — a general-pattern recount (matching the
   exact shape the widened regex now accepts) found the true corpus-wide total to be higher and
   growing with each recount (a commit-gate's own partial recheck found 43). Re-rendered all 15
   documents the general pattern actually appears in and grepped every `.ssml` for a raw
   digit-then-paren survivor: **zero, corpus-wide.** That check — not any of the three numbers this
   workstream produced — is what settles it; no count is written here as final, per this project's
   own repeated lesson about a census going stale the moment it's quoted.

**One narrower, distinct pattern found and NOT fixed here**: 2 sites, both in
`content/systems/offensive_zone_play.md`, use a BARE `(b, c, d, e or f)` bracket with no rule number
attached at all — an elliptical back-reference to a number stated earlier in the same sentence
("640(g) is a major... where an action under (b, c, d, e or f) recklessly endangers..."). This is
structurally different: fixing it safely would require tracking the last-mentioned rule number across
matches within a sentence, which no current rule attempts and which risks misattributing a bracket to
the wrong preceding number in a denser sentence. Logged as a new, narrow open item — likely best fixed
as a content edit (restating the number explicitly, e.g. "640(b, c, d, e or f)") rather than a
renderer change, since the source sentence already establishes 640 a few words earlier.

All mechanical checks (`check_links.py`, `check_facts.py`, `check_absolutes.py`) re-run clean. This is
a `scripts/` change with no `content/` files touched — dispatching a commit-gate for due diligence
(TTS rendering is safety-adjacent, per this session's own earlier chunk-boundary CRITICAL) but this
doesn't need rules-verifier/safety-reviewer coverage since no content claim changed.

## Fifth commit-gate CLEAR (with a self-caught count discrepancy, fixed before commit)

Fifth dispatch (renderer fix only, no content/ touched) independently reproduced every claim from
scratch — the diff, the self-test (260/2 pre-existing failures), a fresh unit test of all five
patterns, and re-rendering 12+ documents through the real pipeline. **CLEAR**, with one honest,
non-blocking flag: its own recount of the affected-site pattern found 43/12, not the review record's
claimed 34/11 — a real discrepancy, not something to wave off. Investigated before committing: a full
general-pattern recount (matching exactly what the widened regex now accepts, not the five literal
known phrasings) found the true count higher still — 50 sites across 15 documents — confirming the
original "34" figure was itself stale the moment a broader check was run. Re-rendered all 15 and
confirmed zero raw-digit-then-bracket survivors corpus-wide. Softened both the review record and the
code's own comment to state the check rather than a number, per this project's own repeated lesson
about a census going stale the instant it's quoted rather than reproduced.

**Committed** as `6944829` — "Voice every clause a citation names, not just the first one." 3 files
changed. Commit message verified free of any Claude/Anthropic/co-author mention. Not pushed.

**Local main is now three commits ahead of origin/main** (`ea4d793`, `6944829`, plus the earlier
`5dc4d4d`/`95fe466` already accounted for — full state: origin at `835850b`, local at `6944829`).
Push remains the user's call throughout.

## Workstream: closing the four remaining CM/KT gaps from the earlier sweep, plus sweep continuation

Dispatched five parallel agents against the consolidated backlog: `uk_rules.md` (BUIHA half-visor),
`neutral_zone_systems.md` (icing/line-change bar), `offensive_zone_play.md` (two Minor findings —
Rule 69.7 rebound carve-out, high-stick crossbar-vs-shoulder divergence), `faceoffs.md` (post-whistle
scrum), plus a fifth agent continuing the CM/KT asymmetry sweep on ~14 of the remaining 21 unchecked
documents (results pending).

- `uk_rules.md` — BUIHA half-visor clause added to Key Takeaways item 4. Agent correctly refuted my
  own brief's wrong premise (item 4 did NOT already mention SIHA, contrary to what I'd claimed) and
  avoided writing a dangling "separate from the SIHA one" reference as a result — wrote a
  self-contained sentence instead. All checks clean, diff minimal (1 line).

  **Two new items surfaced, not acted on:** (1) Key Takeaways item 4 also omits the SIHA half-visor
  floor entirely — the same gap shape, previously mis-attributed as already-fixed in my own brief; (2)
  no document states how the women's-under-18 full-face rule interacts with the BUIHA half-visor floor
  (a genuine potential ambiguity: could a reader think BUIHA's minimum overrides the age-based full-face
  requirement?) — flagged as a pre-existing gap the edit surfaced, not one it fixed. Both logged as new
  open items. Safety-reviewer pass still needed before commit.

- `neutral_zone_systems.md` — new Key Takeaways item 11 added stating the icing/line-change bar and
  its cross-book divergence, verified independently against `nhl_rules.txt:8624`,
  `iihf_rules_v1.1.txt:6673`, `hc.txt:5090-5121`. Judged a new item was right rather than folding into
  an unrelated existing one. All checks clean, diff minimal (1 line). Agent flagged the same fact
  likely recurs with the same summary-layer gap in `faceoffs.md`/`special_teams.md`/
  `defending_the_rush.md` — worth a future sweep, not checked here.

- `faceoffs.md` — confirmed real (not marginal) and fixed: one sentence added to Key Takeaways item 1,
  distinguishing the post-whistle scrum-relocation rule from the pre-draw encroachment ejection rule
  already stated there. Verified against `nhl_rules.txt` Rule 76.2, `iihf_rules_v1.1.txt` Rule 76.2,
  `usah.txt` Rule 612(d), `hc.txt` Rule 6.3(d)(vi). All checks clean, diff minimal (1 line).

- `offensive_zone_play.md` — both findings confirmed real and fixed (judged Finding 2 not marginal,
  fixed both rather than declining the second). Key Takeaways item 5 extended with Rule 69.7's
  rebound carve-out and its defender-fouled-you-in limit; new item 11 added for the high-stick
  crossbar-vs-shoulder divergence, quoting USA Hockey Casebook Situation 7 verbatim. Verified against
  `nhl_rules.txt:7258-7275,8544`, `iihf_rules_v1.1.txt:5605-5623`, `hc.txt:5292-5300`,
  `usah.txt:4330-4336`, `usah_casebook.txt:13977-13987`. All checks clean, diff minimal (2 lines). 4 of
  5 content-fix agents in this wave now done; sweep continuation still running.

## CM/KT asymmetry sweep continued — 10 more documents checked, 5 with genuine gaps (8 findings)

Sweep checked 10 of 16 remaining candidates. Clean: technique/skating.md, off-the-ice/conditioning_and_recovery.md,
positions/switching_positions.md, foundation/rink_map.md, hockey-iq/scanning_and_anticipation.md.

**New genuinely-open findings, none fixed in this pass:**

- **`off-the-ice/equipment.md`** (Major) — three broken-stick rules (skating with one, disposing of one
  over the boards — mandatory misconduct under USA Hockey Casebook/NHL/IIHF — a goaltender playing on
  with one) entirely absent from Key Takeaways.
- **`off-the-ice/team_play_and_culture.md`** (Major) — "sitting on the boards" is explicitly flagged in
  the body as the one bench-culture item that's a real, penalised, physically dangerous rule (NHL Rule
  75.2(iv), minor after one warning) — absent from Key Takeaways entirely.
- **`technique/puck_handling.md`** (3 Major) — the can-opener/stick-between-the-legs rule; kicking an
  opponent (match penalty in three of four books, "whether or not an injury occurs" under NHL 49.3);
  grabbing a puck in your own crease (penalty shot/awarded goal). All three absent from Key Takeaways.
- **`technique/passing_and_receiving.md`** (1 Major, 1 flagged Critical-leaning) — kicking an opponent
  (same match-penalty content, recurs identically in puck_handling.md — worth fixing as a pair); **high
  stick contact with an opponent's head/face/neck** (NHL/IIHF Rule 60, USA Hockey 620(a), Hockey Canada
  7.6 — minor to match penalty, direct injury risk) — the longest Common Mistakes bullet in the
  document and completely absent from Key Takeaways. Flagged by the reviewer as the strongest safety
  finding of this whole sweep.
- **`hockey-iq/playing_without_the_puck.md`** (Major) — charging/bumping a goaltender in the crease
  (major plus game misconduct in all four books, mandatory under Hockey Canada 8.5(b)) absent from Key
  Takeaways, which covers only the sightline/screening side of goaltender contact.

**Coverage now stands at 28 of 39 documents** (18 + 10, minus overlap already counted). **6 documents
remain genuinely unchecked**: `foundation/language_and_glossary.md`, `foundation/core_principles.md`,
`off-the-ice/how_to_watch_hockey.md`, `off-the-ice/practice_and_development.md`,
`hockey-iq/puck_support_and_spacing.md`, and `getting-started/getting_started.md` (the reviewer
couldn't locate this last one at the path given — it's under `content/getting-started/`, not
`content/foundation/`, a routing note for whoever picks this up next).

None of these 8 new findings are fixed yet — this is a scoping result. Given the volume (13 total
findings now logged across two sweep passes, 5 already fixed today), the remaining 8 are queued for a
future wave rather than actioned immediately.

**All 8 findings above — FIXED, 20 September 2026**, in `project/reviews/third_backlog_wave_2026-09-20.md`
(all five documents' findings independently rules-verified and safety-reviewed, committed). All five
documents already correctly appear in the live "confirmed checked" coverage-census line near the top of
this file. This section is historical narrative kept for its evidence, not a live worklist.

## Safety review of the four CM/KT fixes: one real Major found and fixed, one Minor found and fixed

Independent `safety-reviewer` confirmed `neutral_zone_systems.md` and `offensive_zone_play.md`'s
fixes CONFIRMED-SAFE outright. Found a genuine Major in `uk_rules.md`: the reviewer traced the
flagged women's-under-18/BUIHA interaction question into the primary source and found the real gap
was different and narrower than originally worried — an ordinary BUIHA fixture has no under-18
population at all (the source says so directly), BUT the same source carves out one case where an
under-18 player genuinely appears: a BUIHA team's challenge match against a non-BUIHA opponent whose
own under-18 player is then bound by the standard age-based full-face rule, not BUIHA's half-visor
floor. Neither the body nor the new Key Takeaways sentence disclosed this. **Fixed**: one clause added
to the body's BUIHA bullet carrying the actual carve-out, verified against
`sources/eiha_inhouse_2026-27.txt:660-669` directly. Caught my own new quote-drift defect while fixing
this (a falsely-terminated quote, the exact "dangerous" shape this project's tooling flags — my quote
ended with a period where the source continues "(see Rule 25)") and corrected it by moving the period
outside the quote marks.

Also found a Minor in `faceoffs.md`: "that outer edge" (introduced without a prior "outer edge" noun
phrase in the same Key Takeaways item) is an antecedent a listener can't resolve alone. Fixed: reworded
to "the outer edge of the circle," self-contained.

All mechanical checks re-run clean on all four files. Ready to stage.

## Sixth commit-gate BLOCK: fixed half the Major, missed the other half — caught by the gate

Sixth dispatch found a real, important issue: the earlier "fix" to `uk_rules.md`'s BUIHA
challenge-match carve-out only updated the BODY bullet — the Key Takeaways sentence added in the same
diff still stated the old, overclaiming wording flatly ("binding on every player in a BUIHA game"),
directly contradicting the body three paragraphs above and reintroducing the exact defect the safety
review had just closed. The gate correctly named this NOT an oversight but an incomplete fix, and
quoted the plan's own record back to show only the body was ever claimed fixed. Also BLOCKed on C4:
no dedicated rules-verifier pass across any of the four files' new citations (all self-verified by
authoring agents only) — the same gap pattern as two commits ago.

**Fixed**: Key Takeaways item 4 now carries the same carve-out as the body, in one sentence. All
mechanical checks re-run clean, no new drift. Dispatched a targeted `rules-verifier` pass across all
four files to close C4.

The gate's independent re-derivation of every citation across all four files (done as due diligence,
not a substitute for the missing rules-verifier pass) found no other errors — this was specifically a
missed-second-instance-of-a-known-fix problem, not a wider accuracy issue.

## goaltender.md wave's rules-verifier: CONFIRMED-ACCURATE, closing C4

Targeted `rules-verifier` pass verified every rule citation across all four files (uk_rules.md's
BUIHA carve-out, faceoffs.md's scrum-relocation divergence, neutral_zone_systems.md's icing/line-change
bar, offensive_zone_play.md's Rule 69.7 and high-stick divergences) directly against primary source.
Zero errors found. Attacked and confirmed two negative-existence claims specifically (USA Hockey has
no post-icing substitution bar; USA Hockey/Hockey Canada have no rebound/loose-puck incidental-contact
carve-out — the latter's Hockey Canada equivalent is if anything stricter, confirming rather than
merely failing to refute the claim). D1/D2/D3 all explicitly CHECKED and held.

## Seventh commit-gate BLOCK: the same overclaim, a third time, in a third layer nobody checked

Seventh dispatch found the identical BUIHA overclaim ("binds every player in a BUIHA game") still
live in `uk_rules.md`'s Common Mistakes bullet — a THIRD instance of the exact defect two prior fixes
had already closed in the body and Key Takeaways, in the one layer nobody had re-swept. The gate
correctly named this a failure of the plan's own "D9 — CHECKED, exhaustively" claim: propagation was
checked body-to-Key-Takeaways but never re-swept Common Mistakes for the same document.

**Fixed**: the Common Mistakes bullet now carries the same carve-out. Before declaring this the last
instance, ran an exhaustive corpus-wide grep for "BUIHA" rather than assume — found one more, related
but distinct instance in `content/off-the-ice/equipment.md` (two sites, both phrased as "BUIHA
players"/"BUIHA hockey need a half visor... regardless of age," narrower than uk_rules.md's original
"every player in a BUIHA game," and both already deferring to uk_rules.md as the owner document via an
explicit cross-reference). Judged this NOT the same defect requiring an identical fix — logged as a
new, lower-priority open item for a future round rather than extending this already seven-gate cycle
further. All mechanical checks re-run clean on the actual fix.

Dispatching a final, narrowly-scoped safety re-check on just the Common Mistakes fix before staging —
the third and (pending verification) last leg of this specific defect.

## Final safety re-check: CONFIRMED-SAFE, but caught a real process gap first

Independent fresh reviewer confirmed all three uk_rules.md locations (body, Key Takeaways, Common
Mistakes) now state the carve-out consistently, verified both quotes character-for-character against
`sources/eiha_inhouse_2026-27.txt:660-673` again, and confirmed no fourth instance exists anywhere in
the file (checked all 21 "BUIHA" mentions individually). Confirmed the `equipment.md` finding is
already logged and correctly judged distinct, not a new discovery.

**But it caught a real process failure first**: the Common Mistakes fix existed only in the WORKING
TREE — I had edited the file but never re-staged it after the sixth/seventh gate cycle, so the index
still held the old, overclaiming version. Exactly the "index doesn't match tree" gap this project's
own standing method notes warn about repeatedly. Caught before any commit, not after — `git add`
applied immediately, `git diff --name-only content/` now confirmed empty.

All mechanical checks clean. Staging and re-dispatching the commit gate now — eighth time on this wave.

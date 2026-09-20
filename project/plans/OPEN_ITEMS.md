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

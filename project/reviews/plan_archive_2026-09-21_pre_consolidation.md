# Active work

**Consolidated 20 September 2026 (second pass, same day).** The previous version of this file — grown
to 826 lines, almost entirely closed workstream narrative from the first consolidation onward — is
preserved verbatim in
[`plan_archive_2026-09-20_second_consolidation.md`](plan_archive_2026-09-20_second_consolidation.md).
The consolidation before that is in
[`plan_archive_2026-09-20_pre_consolidation.md`](plan_archive_2026-09-20_pre_consolidation.md)
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
| `parent-of-a-new-player` checking-permission Critical, closed (20 Sept) | `parent_pathway_checking_gap_closed_2026-09-20.md` |
| Traffic-plan pathway assembly: facts census, goaltender.md fix, four `pathways.json` entries, `practice_and_development.md`'s three-round safety fix (20 Sept) | `traffic_plan_pathway_assembly_2026-09-20.md` |

If you're looking for the detail behind a closed item and it isn't below, it's in one of these files —
grep the relevant archive for the workstream number, or the review record above, first.

## Design specifications, not dispatch queues

[`READABILITY_AND_DUAL_AUDIENCE.md`](../readability_and_dual_audience.md) — the Key Focus / dual-audience
design principles this corpus is written under. [`PODCAST_AUTOMATION_LOCAL.md`](podcast_automation_plan_consolidated_2026-09-20.md)
— local NotebookLM/TTS pipeline operations, including the podcast-vs-corpus divergence question (its
own open item, owned there — not duplicated here). Do not duplicate either file's specification here;
executable corpus-content work is tracked in this file.

## Priority order

1. Safety residuals that could get a reader hurt, ejected, or given wrong rules for their age/division.
2. Site, diagram, and audio validation — see the site-wide anchor-scroll item below.
3. Deferred technical, source, and corpus-wide work.

(The two standing house-style/convention decisions that used to sit at priority 2 are both closed —
see "Closed 20 September" below.)

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

### Closed 21 September — the site-wide deep-link anchor-scroll bug

`site/src/styles/global.css`'s `html` rule had `scroll-behavior: smooth` removed and
`scroll-behavior: auto` set explicitly — that property, interacting with the browser's native
scroll-to-`:target` step on initial page load, was causing every cross-page fragment navigation
site-wide to land at `scrollY: 0` instead of the target heading (an in-page table-of-contents click,
which doesn't go through that native step, worked correctly throughout, which is what pointed at this
specific property).

**Independently verified** by a fresh `site-reviewer` pass — a genuinely separate check from the
coordinator's own preliminary look, fresh build, fresh server process, fresh tabs. All three
previously-broken repro modes confirmed fixed, with matching measurements between methods: direct
navigation to all four `pathways.json` target anchors landed at scrollY 21,895 / 30,867 / 130,621 /
3,192, each with the heading exactly ~128px from the viewport top (the correct header/player offset);
a real click on the `checking-formats` homepage pathway card landed at the identical figure for that
anchor; `location.hash =` set via JS on an already-loaded page — the one repro mode that didn't fit a
pure initial-navigation-timing theory — also landed at the identical figure. An in-page
table-of-contents click still works with no regression (an instant jump instead of an animated scroll,
the expected trade-off). Zero console errors, zero off-origin requests, both themes checked with no
visual regression. Not independently checked: the phone viewport (a tool limitation this session, not
a site defect — `resize_window` wasn't changing the actual viewport).

No content change; `site/src/styles/global.css` only. Not yet committed.

### Closed 20 September — the `parent-of-a-new-player` checking-permission Critical

**Fixed and independently double-verified — see `project/reviews/parent_pathway_checking_gap_closed_2026-09-20.md`
for the full record.** The real fix (a `content/` edit, not the `pathways.json` metadata note the first
attempt mistook for one) landed: two lines in `getting_started.md` Section 3, pointing a parent to
`technique/body_contact_and_battles.md`'s checking-permission section. A fresh `safety-reviewer` and a
fresh `rules-verifier`, dispatched independently, both confirmed it — the rules-verifier checked every
underlying citation (USA Hockey 604, Hockey Canada 7.3, four IHUK Rules of Competition documents, IIHF,
PWHL 52.1) against primary source directly. Not yet staged/committed.

One new item surfaced, not a blocker: **`sources/README.md` has no entry for the PWHL Official Rule
Book**, even though `body_contact_and_battles.md` quotes it (Rule 52.1). The rules-verifier fetched the
live PDF to verify the existing quote (it held), but the corpus's source-inventory convention doesn't
cover this book. Low priority — add it to `sources/README.md`'s inventory when convenient.

A secondary, non-safety finding from the earlier content-reviewer pass, still worth a look but not
urgent: `pathways.json`'s own `$comment` says `docs` order "never" carries meaning, but several
pathways' `evidence` fields write as if `docs[0]` "leads" — a latent inconsistency between the file's
stated policy and its own annotations, pre-existing and not introduced by this fix.

### Closed 20 September — both standing decisions resolved

- ~~Is the "injury mechanism form" convention worth keeping?~~ — **decided: drop it.** The
  convention (making the injury, not the collision, the grammatical subject of a walking-speed
  injury sentence — "the injury can occur" vs. "a collision can break your neck") was never codified
  in `content_style_guide.md`; it existed only as a pattern applied by earlier fix-agents. Both forms
  assert the same fact and no one had confirmed a listener perceives a difference, which was the
  reviewer's own objection when raising this. Going forward: neither form is a defect; do not flag an
  inconsistency between them as one, and do not re-sweep sites already in the "injury" form to revert
  them — this is a stop-enforcing decision, not a reversion.
- ~~A corpus-wide house-style question: disclose every undisclosed-capital-lowering quote, or accept
  silent lowering?~~ — **decided: accept as house style.** Investigating the specific "USA Hockey
  607(a), at least four documents" claim behind this item found the paper trail didn't hold up — it
  looks like an imprecise restatement conflating two different, already-resolved findings (a 608(a)
  fragment lowered at 9 sites, already judged "house practice, not drift"; an NHL 42.1 fragment at 4
  documents, already fixed with `[a]` brackets). A fresh check found the underlying source phrase
  recurs under multiple rule numbers in the primary text and across 17 corpus documents — too
  widespread to be anything but deliberate. Decision matches the precedent already set for the 608(a)
  case. Recorded in `scripts/check_quote_drift.py`'s docstring so future quote-drift triage doesn't
  re-open this: a bare Shape-1 hit (capital silently lowered, no meaning change) is no longer a
  fixable defect to flag.

### Corpus content

- ~~A cross-document facts-layer census has never been run as one pass~~ — **run 20 September, came
  back clean, closing as a discrete task.** Sampled ~20 of ~130 rule-number clusters found across the
  26 facts-bearing documents, prioritizing the highest-consequence ones (checking eligibility,
  checking-from-behind, the shorthanded-icing exemption, delayed offside, high-sticking, shot-blocking,
  the exact "forearm and hip" posture limb this item originally named) — every one sampled was fully
  and consistently propagated, including the named example. **Converting to a standing practice
  instead of an indefinite backlog item**: run this style of rule-number/limb cross-reference whenever
  a new safety- or penalty-bearing rule limb is added to any document, rather than treating it as a
  one-time census to exhaust. Full sampling scope and method on file with this session if a future
  pass wants to extend coverage rather than re-derive it.
- ~~`content/positions/goaltender.md`'s Rule 69.7 rebound-scramble counterweight omission~~ — **fixed
  and independently verified 20 September.** A fresh `rules-verifier` pass confirmed the fix word-for-
  word matches the pre-existing, already-verified Common Mistakes bullet, re-checked NHL 69.7 and IIHF
  69.7 against primary source directly (`sources/nhl_rules.txt:7258-7269`,
  `sources/iihf_rules_v1.1.txt:5608-5620`), and confirmed the listener-facing antecedent ("the same
  rule") is unambiguous in context. One pre-existing (not introduced by this edit) minor compression
  noted, not blocking: the summary layers say "unless fouled, allowed" where the rulebook's own
  exception is discretionary ("can be permitted... in the opinion of the Referee") — the body text
  already carries the full discretionary wording, so a listener who reaches Common Mistakes or the
  body gets the complete picture. Mechanical checks clean. Not yet staged.

### Closed 20 September — the traffic/content plan's actionable items

**All of it — Phase 1 items 2, 3, 5, and both Phase 2 comparison types — done, independently reviewed,
not yet staged.** See `project/reviews/traffic_plan_pathway_assembly_2026-09-20.md` for the full
record: four new `pathways.json` entries (`cost-and-registration`, `equipment-journey`,
`rulebook-differences`, `checking-formats`), all `status: "reviewed"`; one real wording defect caught
and fixed (`equipment-journey` wrongly implied programme-issued kit is borrowed, when it's kept); and
a three-round safety fix to `practice_and_development.md`'s home-practice scope note, closed only
after a third independent `safety-reviewer` pass read the whole document and confirmed no fourth
instance of the same gap shape remained. None of this needed a `rules-verifier` pass — all pathway
assembly, no new rules claims.

Two low-priority items surfaced, not fixed: `pathways.json`'s `$comment` wrongly claims
`check_links.py` verifies pathway anchors (it doesn't check this file at all); `equipment.md`'s Key
Takeaways has a sentence missing a word ("Kit a programme gives a child to keep is new..."). Both in
the review record above.

The plan document itself (`list_sites_content_and_traffic_plan_2026-09-20.md`) carries a header
pointing back here and an inline annotation on its Conclusion's overstated traffic-value verdict.

## Push status

⚠️ **This section is a live fact, not historical narrative — it goes stale on every commit AND on every
push, and must be re-checked with `git rev-list --count origin/main..HEAD`, never quoted from memory or
from an earlier paragraph in this file.** As of 20 September 2026, local `main` is **2 commits ahead**
of `origin/main`: `ce43613` (the plan-folder consolidation) and `82c09d2` (the traffic-plan
pathway-assembly wave documented above — the checking-permission fix, the goaltender.md fix, the four
`pathways.json` entries, and the three-round `practice_and_development.md` safety fix). Both committed,
neither pushed. Push remains the user's own call throughout — this session pushes nothing without
explicit go-ahead.

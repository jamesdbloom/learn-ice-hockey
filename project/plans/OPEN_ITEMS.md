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

## The one-plan rule, and the two files that broke it

⚠️ **This is the only plan.** CLAUDE.md has said so since 24 August 2026, when commit `ec70b16`
consolidated four plan files into this one *"because 'what is open' had no single answer and items
were rediscovered rather than read."* On 14 September commit `933ea01` created two more plan files
anyway, and on 20 September this file grew a *"Design specifications, not dispatch queues"* section
to accommodate them retroactively. **The symptom the 24 August commit predicted duly recurred** — on
22 September, answering "is the readability work done?" required reading three files, and a podcast
item recorded here as open had been fixed in its own evidence file three days earlier and nobody saw.

**Closed 22 September 2026:**

- `READABILITY_AND_DUAL_AUDIENCE.md` → **moved** to
  [`project/readability_and_dual_audience.md`](../readability_and_dual_audience.md). It is a design
  specification, not a plan — a sibling of `content_style_guide.md` and `review_process.md`. Its open
  threads are rows in this file now.
- `PODCAST_AUTOMATION_LOCAL.md` → **deleted**; its open items are rows in this file, and its history
  was already in
  [`project/reviews/podcast_automation_plan_consolidated_2026-09-20.md`](../reviews/podcast_automation_plan_consolidated_2026-09-20.md).
- [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md) **stays, deliberately.** It is the owner's own
  worklist — an AWS login, vendor signups, an ear test, a listening pass — and it is not a dispatch
  queue for an agent. It is the one exception, at the owner's instruction, 22 September 2026.

⚠️ **Do not create a third plan file.** If something is open, it is a row here. If it is a standing
rule or a design, it belongs in `project/` beside the style guide. There is no third category, and
the two times one was invented, this is what it cost.

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
- **`.agents/` and `.codex/` are untracked and un-ignored on purpose** ⚠️ **(this note named a third, `AGENTS.md`, until 22 September 2026, when a sweep found it absent from the working tree — untracked, so git cannot say when it went; not restored, and not this session's to restore)** — mirrors of this
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

### Podcast — engineering (absorbed from `PODCAST_AUTOMATION_LOCAL.md`, 22 September 2026)

**Orientation.** Episodes are synthesised from single-voice scripts through `scripts/md_to_speech.py`
/ `scripts/tts_sample.py` (Polly generative `Amy`, en-GB) — **not** NotebookLM's two-host Audio
Overview. Direction set by the owner 18 September 2026, commit `3aa176f`. Two episodes are fully
synthesised and cleared by text review: `skating` (17.7 min) and `equipment` (85.4 min). **Nobody has
listened to either by ear.** Full history:
[`../reviews/podcast_automation_plan_consolidated_2026-09-20.md`](../reviews/podcast_automation_plan_consolidated_2026-09-20.md).
⚠️ **The audio, the scripts and episode three's provenance now live at
`~/Documents/personal/ice_hockey_scripted_episodes/` — outside this repository**, rescued
22 September from an ephemeral scratchpad. `~/whisper-models/ggml-base.en.bin` (147,964,211 bytes)
is likewise outside it. Neither is backed up by this repo.

- **`source-verifier` has never been run on any podcast script.** The episode-three rules pass
  explicitly declared the script's research layer — meta-analyses, effect sizes, a retracted study
  and its retraction notice, cohort and VO2/specialisation figures — entirely unverified, calling it
  *"the larger half"* of the script. This is a **missing review dimension**, not a backlog row: a
  script gets whatever the coordinator happens to dispatch, unlike `content/`, which gets all five
  reviewing agents plus a commit gate. ⚠️ **Highest-value podcast item open.**
- **`scripts/md_to_speech.py` writes a synthesis engine into every manifest that does not exist in
  this region.** Re-verified 22 September: line 3798 emits `"voice": {"engine": "long-form", ...}`
  while line 3958's own printed cost table says `long-form` is *"unavailable in eu-west-2"*. Never
  touched since introduced. Not a live blocker — `build_podcast_audio.py` does not call Polly — but a
  trap for whoever writes the real synthesis step. Fix: name the engine actually used (`generative`)
  or omit the field. **Shared-tool change: make it between waves, not during one.**
- **`check_pointers.py` cannot be run against an episode script without a small tool change.**
  Re-verified 22 September: `main()` hardcodes `root / "content"` (lines 102 and 175), with no
  argument parsing. It is the closest existing tool to the link-layer safety class found in the
  skating episode — a spoken sentence routing a listener to another document with no clickable route
  — but its patterns match only in-document layers, not a pointer to a sibling document. **Both
  halves need doing**; extending the path argument alone gains nothing.
- **Whisper transcription has a model again but has never been run.** `~/whisper-models/ggml-base.en.bin`
  fetched 22 September at 147,964,211 bytes — byte-identical to the size on record, so prior
  transcript-based verdicts remain comparable. ⚠️ **Fetching a model is not verifying with it**; no
  transcript has been produced. `ffmpeg -i EPISODE.mp3 -ar 16000 -ac 1 -c:a pcm_s16le OUT.wav` then
  `whisper-cli -m ~/whisper-models/ggml-base.en.bin -otxt -np -nt -f OUT.wav -of OUT`. Known trap:
  whisper mangles proper nouns (*"Brodeur"* → *"Brodua"*) — search a transcript semantically, never
  for an exact name.
- **Whether provenance pointers deserve a checker — undecided, and now evidenced.** No checker reads
  an episode's `provenance.md`, so a correct quotation under a wrong line pointer passes everything
  silently. One such instance existed and **was repaired by hand on 19 September**; it survived in
  this project's plan as an open item until 22 September because nothing connects the two. A worklist
  if ever built, **never a gate** — a pointer going stale after a source re-extraction is not a defect.
- **The `ice-hockey` AWS profile's SSO token expires, and its failure reads as a Polly outage.** Found
  22 September: `Token has expired and refresh failed`. ⚠️ **On 18 September the plan and a status
  report both said TTS was blocked when Polly had been reachable all along; an expired token is the
  mirror of that** — a working integration reporting as broken. **Check the token before concluding
  anything about Polly.** The fix needs a browser and is therefore the owner's: step 0 of
  [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md).

### Podcast — the owner's own steps

- **Blocked on two things only a human can do:** an **ear test** across TTS engines, and a
  **listening pass** on the two episodes cleared by transcript alone. Both are laid out with verified
  URLs in [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md). ⚠️ **Nothing in the engineering list
  above unblocks these, and they do not unblock each other** — the engine decision and the "does the
  scripted route sound right at all" question are separate.

### Readability and dual audience (absorbed from `READABILITY_AND_DUAL_AUDIENCE.md`, 22 September 2026)

The design spec now lives at
[`../readability_and_dual_audience.md`](../readability_and_dual_audience.md). What is **open**:

- **The seven-layer pilot rewrite needs an owner decision before anything is dispatched.** Simple
  summary / Recognition cues / Understand it / If your team differs / Go deeper, as literal named
  layers, never shipped in either pilot document — `getting_started.md` and `rules_primer.md` both
  carry Key focus, Go deeper, Common Mistakes and Key Takeaways instead. **The question nobody has
  put to the owner:** is the seven-layer IA still the target, or is Key focus + Go deeper + the
  summary sections the corpus's settled shape? ⚠️ **Do not dispatch against the spec's Phase 2
  acceptance criteria until this is answered** — the spec's own phases are original design intent,
  not a description of what shipped.
- **Marker residue: a worklist, not a defect list.** Measured 22 September:
  `python3 scripts/check_readability_census.py markers` reports **331 markers across 32 documents,
  16 arriving with zero prose after their heading** (was 286 on 14–15 September). Several of the 16
  are orientation diagrams likely correct as they stand. ⚠️ **Run the tool rather than quoting that
  figure** — it prints the per-document breakdown, and a count of an actively edited corpus goes
  stale silently. Openers are **done**: 39 of 39 prose, confirmed the same day.
- **Caption safety/rule-scope routing is open-ended by nature, not a fixed-size backlog.** Round 77's
  four flagged blocks were all traced and resolved 21 September (three already routed; the fourth, a
  wall-contact receiving-posture tail missing from `game_management.md`, fixed across all four
  layers). **That does not close the category.** Any future pass should re-investigate from scratch —
  read `../reviews/caption_routing_and_game_management_propagation_2026-09-21.md` and
  `../reviews/round_77_the_caption_could_not_be_shortened.md` first. ⚠️ **The 25–50 word caption
  target was found structurally unreachable** and that is an accepted negative result: 188 of 204
  captions were shortened (−37%), but only 14 landed in the band. The remaining work is **routing**
  safety and rule material into body prose, not further compression.

### Marketing and measurement

- **Monthly traffic measurement — genuinely outstanding, outside this environment's scope.** Needs an
  ongoing cadence this session can't hold open. See
  `../reviews/list_sites_content_and_traffic_plan_2026-09-20.md` Phases 3–4. (Kadaza and FeedSpot
  submissions are both done — see coverage above.) ⚠️ **Outreach to EIHA/clubs/rinks/coaches was
  removed from this file on 22 September 2026 at the owner's instruction** — a longer-term item they
  will do naturally at the right time, deliberately not tracked. Recorded as a **removal, not a
  closure**, so nobody re-derives it from the traffic plan and files it as a fresh gap. **Do not
  re-add it.**

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

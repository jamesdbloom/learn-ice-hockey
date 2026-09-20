# Podcast automation: consolidated history, 17-20 September 2026

**Why this file exists.** `project/plans/PODCAST_AUTOMATION_LOCAL.md` had grown to 1,613 lines of
chronological session log — decisions made, fixes shipped, dead ends explored — in violation of this
project's own rule that a plan file holds no completed items. This record relocates that history so
it isn't lost, and the plan file was cut back to orientation plus what is genuinely still open. Every
claim below was re-verified against the current repository state on 20 September 2026 (git log,
`grep`, `find`) rather than carried forward from the plan file on trust; where verification changed
the original conclusion, that is noted.

---

## 1. Direction: NotebookLM two-speaker attempted, then dropped for single-voice scripted

The pipeline started as **NotebookLM Audio Overview generation**, driven through Chrome
(`.claude/skills/notebooklm-episode/`), targeting a two-host "deep dive" podcast per document.

### 1.1 Four consecutive NO-GOs

`rink_map`, `core_principles`, `on_ice_communication` and `language_and_glossary` were generated and
reviewed by independent `rules-verifier` + `safety-reviewer` pairs. All failed. The failure mode
**changed** between attempts:

- **v1-v2: addition** — invented content, catchable by reading the source. Worst instance: a
  fabricated injury-response instruction collapsing spinal-injury and concussion protocol into one
  (wrong for the more urgent case), reproduced across two unrelated documents
  ([`core_principles_podcast_no_go_2026-09-17.md`](core_principles_podcast_no_go_2026-09-17.md),
  [`language_and_glossary_podcast_no_go_2026-09-17.md`](language_and_glossary_podcast_no_go_2026-09-17.md)).
- **v3-v4: transmission** — rules the source states correctly coming out wrong, which looks sourced
  and is only caught by a primary-rulebook grep. Six transmission errors in `rink_map` v3 alone.
  A fabricated cross-book faceoff comparison, an invented Martin Brodeur/trapezoid backstory, and a
  "genuinely unsettled" source claim restated as settled fact
  ([`rink_map_podcast_retry_no_go_2026-09-18.md`](rink_map_podcast_retry_no_go_2026-09-18.md)).
- **The generalised diagnosis**, after three independent data points
  ([`core_principles_podcast_retry_no_go_2026-09-18.md`](core_principles_podcast_retry_no_go_2026-09-18.md),
  [`on_ice_communication_podcast_no_go_2026-09-18.md`](on_ice_communication_podcast_no_go_2026-09-18.md)):
  NotebookLM's Long/Deep-dive generation supplements given sources with the model's own general
  hockey knowledge — true or false — whenever it judges the source incomplete relative to the
  teaching prompt. Six surface shapes of the one behavior were found: invented rules, statistics,
  history, governing-body scope, medical mechanism, and dropped hedges. Naming a specific
  fabrication pattern in the prompt suppressed that instance without closing the underlying
  behaviour — every prompt fix was followed by a new instance the fix didn't cover.
- A **root cause was found and fixed for one fabrication class**: `prompt_constraints.md`'s own
  constraint 3 was stale, telling every generation that Britain's current IIHF edition "could not be
  obtained" when it is on disk — the generator was faithfully restating a false instruction, not
  hallucinating. Fixed; constraint 9 added and then broadened. This closed the injury-response
  fabrication specifically but not the broader behaviour above.
- Operational finding, useful if NotebookLM work resumes: the notebook's own "Generating..." status
  panel can go stale for hours after the audio actually finished — reload before trusting it.
- Also found along the way: the Customise dialog's focus field has a **silent 5000-character cap**
  (`prompt_constraints.md` is 8,636 characters and was truncating mid-constraint with no error).
  Worked around by adding constraints as full-text "Copied text" sources instead.

### 1.2 A queue tool bug inverted which of two documents needed an episode

**Found and fixed 18 September.** `scripts/podcast_queue.py` picked its manifest with
`isinstance(data, list)`. `podcasts_web/manifest.json` (superseded) is a bare list;
`site/src/data/podcast.json` (canonical) is an object — so it failed the shape test and the tool
silently fell back to the superseded file. The two disagreed about exactly the two documents this
work was about: the tool reported `core_principles` as having an episode and `rink_map` as not,
when the truth was the reverse. Fixed: the loader now accepts both shapes, prefers the canonical one,
and reports a fallback on stderr rather than taking one silently.

### 1.3 The scope decision, and why it reversed

18 September: given confirmed fabrication in 2 of 2 fully-reviewed episodes, the user chose to
regenerate the entire 39-document catalogue rather than just the 3 missing episodes, since the
existing 34-episode catalogue predated the two-reviewer process. A validation batch of 3 documents
under the fixed/broadened prompt then went **3 for 3 NO-GO** anyway (§1.1). At that point the
question stopped being "which prompt fix" and became a decision point with no clean answer via
prompting alone.

### 1.4 NotebookLM is not reachable as an API — the door stays shut

Confirmed 18 September: the Gemini Enterprise Podcast API is deprecated and not allowlisting new
customers; NotebookLM Enterprise's `audioOverviews.create` is Preview and **generates from notebook
sources, not a supplied script**. There is no route to "NotebookLM quality, our own script" — the
browser workflow is the only way to reach that generator, and it is the workflow producing the
NO-GOs.

### 1.5 The owner's decision, 18 September

> *"perhaps we can make the podcast only a single speaker as I assume that will make the quality
> automatically better and the value to two people talking against each other doesn't seem high
> enough, we can invest time more in the script generation then to make it as natural and easy to
> listen to as possible"*

**Implemented in commit `3aa176f`** ("Switch the podcast direction to a single voice, and build the
harness for the ear test"). Verified still current: `scripts/tts_sample.py` states in its own
docstring *"THE DECISION IS SINGLE-VOICE... do NOT re-add a dialogue path"*, and neither
`tts_sample.py` nor `md_to_speech.py` contains any multi-speaker/dialogue code path as of 20
September. No commit since has reopened NotebookLM generation for these documents.

Single voice also reopened the whole TTS market (OpenAI has no multi-speaker TTS and was excluded
for that reason alone; it's back in contention for its `instructions` tone-steering parameter), and
removed the turn-boundary prosody join that was the likely cause of earlier "electronic" quality.
`scripts/md_to_speech.py` already took a `--content <dir>` argument, so no new synthesis path was
needed — the engineering risk collapsed to writing scripts.

**Rule-citation and figure policy, from the owner:** cite rule numbers/figures freely in
`rink_map`/`rules_primer`/`uk_rules`; cite only where the rule is the actual reason for behaviour
in `systems/faceoffs`, `technique/body_contact_and_battles`, `positions/goaltender`,
`systems/game_management` (measured as rule-dense despite being "positions/systems" documents);
almost never elsewhere. Never let this policy cut a safety limb — a penalty consequence is teaching
content, not a citation to be stripped. `off-the-ice/conditioning_and_recovery` was flagged as
figure- rather than rule-dense and needing its own call before scripting.

---

## 2. TTS engine survey and cost model

Full pricing/character-count tables (Polly standard/neural/generative, Chirp 3 HD, Gemini-TTS,
OpenAI, ElevenLabs) were built 18 September and are now **superseded by real measurements** — see
§3. Kept here only for what's still true:

- **Only three engines support two-speaker synthesis in one call** (moot after §1.5, but recorded):
  ElevenLabs Text to Dialogue (v3 only, ~2,000 chars/request recommended), Google Gemini-TTS
  multi-speaker (≤4,000 bytes/request, 2-speaker cap on the Developer API), and PlayAI PlayDialog
  (price unverified, do not quote). OpenAI has none.
- **Script-writing cost is wall-clock and opportunity cost, not dollars** — it comes out of a fixed
  Claude budget already committed, and must never be summed with TTS dollar cost.
- **Cost is a coverage proxy**: a script quoted materially below narration price left something out.

---

## 3. Infrastructure fixes made along the way

### 3.1 Polly was never actually blocked

18 September: the plan and a status report to the owner both said TTS was blocked pending an API
key. Wrong — AWS credentials on this machine are an **SSO profile** (`ice-hockey`), not environment
variables, and `tts_sample.py` only checks environment variables. `aws sts get-caller-identity` and
`polly describe-voices --engine generative` both worked once the SSO session was live (the fix,
recurring: `aws sso login --profile ice-hockey` — the SSO token expires periodically and this is
normal, not a sign of breakage).

**Shell-shadowing trap found in the same investigation:** `aws` on this machine is a zsh *alias*
(`aws: aliased to DYLD_LIBRARY_PATH=... aws`), not a binary — the same class of trap `CLAUDE.md`
already records for `node`/`npm` shims. `command -v aws` returns the alias text, which a script
resolving "the binary" that way will treat as a literal (nonexistent) file path. Remedy: use the
absolute binary (`/opt/homebrew/bin/aws`) and keep the `DYLD_LIBRARY_PATH` export the alias was
setting.

### 3.2 `md_to_speech.py` self-contradicts about the synthesis engine — STILL LIVE, not closed

Verified 20 September, still true: `scripts/md_to_speech.py:3798` writes
`"voice": {"engine": "long-form", ...}` into every manifest, while `:3958` prints in the same run's
own stdout that `long-form` is unavailable in `eu-west-2`. `git log -S'"engine": "long-form"'`
shows this line has never been touched since it was introduced in `20daf9a`. Not a live blocker
today only because `build_podcast_audio.py` doesn't synthesise (it just re-encodes masters) — but
it is a trap for whoever writes the real synthesis step next, who will read the manifest's own
field, pass `Engine="long-form"` to Polly, and get an error 160 lines from its cause. Deliberately
left unfixed at the time because a shared tool is shared state and agents were live; **it has not
been picked up since and is carried forward as an open item in the plan file.**

### 3.3 `NIHL`/`WNIHL` missing from the speech renderer's spell-out list — FIXED

Found 19 September by a `safety-reviewer` on episode three, filed rather than fixed (a tooling
change belongs between waves, not mid-round). Without it, Polly renders `NIHL` as "nil" and other
British league acronyms as attempted words — a safety cost, not a polish one, because these
episodes distinguish leagues with different checking rules by name. **Landed in commit `835850b`**
(20 September): `SPELL_OUT` at `scripts/md_to_speech.py:472-475` now includes
`NIHL, SIHA, EIHL, WNIHL, EIHA`, with the commit's own docstring recording the measured renderer
output that motivated each (`NIHL`→"nil", `SIHA`→"see-ha", `EIHL`→"eel", 345 corpus-wide
occurrences fixed). Confirmed present in the current file. Closed.

**Still open and explicitly deferred:** `CSA` and `CE`, requested by episode two's reviewer for the
same reason (a misheard certification mark is a reader buying the wrong helmet). Not done because
`CSA` already sits in `STANDARDS_BODIES` (precedence with `SPELL_OUT` needs checking first) and `CE`
is a two-letter common substring needing a word-boundary check before it's safe to add. Do **not**
add `HECC` — it's correctly pronounced "heck" in the sport and must stay bare. Verified 20 September:
`CE` still appears nowhere in `md_to_speech.py`'s spell-out structures. Low-priority, not carried
into the trimmed plan as a numbered open item since nobody has actioned it and no script currently
needs it urgently, but noted here for whoever picks it up.

---

## 4. Standing up the scripted pipeline: rates, lengths, and what they cost

### 4.1 The speech rate was wrong by 18%, and does not transfer between texts

Every duration estimate before real synthesis used **146 wpm**, sourced from one 450-word sample
render (`project/reviews/section_split_pilot_2026-09-18.md`). Once episode one (`skating`, 3,051
words) was actually synthesised end-to-end through Polly generative `Amy` (en-GB, `eu-west-2`), the
measured rate was **172.0 wpm (17.7 min)** — 146 was wrong by 18%, and in the direction opposite to
its own stated hedge (more `<break>`/paragraph density was assumed to slow it down; it didn't).
Episode two (`equipment`, 14,075 words) measured **164.8 wpm (85.4 min)** — a 4% spread between two
documents in the same voice and engine. **Closed by commit `ad69085`** ("Record the first two
scripted episodes, and retire a speech rate that was wrong by 18%"): 146 wpm is retired; the rule
going forward is to measure per episode from rendered audio and record the figure beside that
episode, never as a shared planning constant. Cost per minute, by contrast, held stable at
**$0.028/min** across both episodes.

### 4.2 Markdown word counts understated what a listener actually hears

Found 19 September, independently of the rate work above: word counts quoted all round
(`grep -v '^#' script.md | wc -w`) excluded heading lines the renderer voices and the
`DOC_INTRO` boilerplate the renderer injects (19 words not in the markdown at all). Re-measured from
stripped SSML: episode one's true spoken count was already fractionally **over** the owner's 70-min
ceiling before a second repair pass, on a number nobody had checked. Episode three came out
`SPOKEN=16,935` across 55 chunks (~98-103 min) against the 50-70 min target — about 100 words
higher than the markdown count implied. Rule going forward, recorded because it generalises: **the
only valid length measure is the render**, never a markdown word count; and the wpm rate itself
remains an inference from two data points, stated as a range with provenance, not tightened further
without a new render. `billed characters` (from Polly's own API response) is the one figure that
needs no interpretation — it is what's actually charged.

### 4.3 Length target and ordering, not padding

19 September: asked directly with measured alternatives in front of them, the owner chose to match
the deployed catalogue's length (48-72 min) rather than a shorter fixed target — episode one (17.7
min) was the outlier to be re-scripted longer, not episode two (~79 min) to be cut. The
`safety-reviewer` on episode two was explicit that **length was not the defect, ordering was**: its
protective-fit block (the three coverage gaps that cause the most injuries) landed at ~51 minutes,
behind ~12 minutes of blade radius/Flat-Bottom V/stick-lie material. A second reviewer ruled this
non-blocking because the three gaps are re-voiced in full in the closing recap, landing twice — but
recorded the reorder as feasible and preferable if the length target is ever tightened.

### 4.4 The reverse-sweep review method

Both scripted episodes converged on the same lesson, recorded because it should apply to every
future script: **a reviewer reading a script forward is good at catching what it says that's wrong,
and structurally weak at catching what it silently omits.** The method that actually closed episode
one (after 5 straight NOT-SAFE verdicts) was the **reverse sweep** — enumerating every one of the
source document's own Common-Mistakes/Key-Takeaways lines and checking which the episode should have
restated and didn't. Episode two ran this sweep first and reported 39/39 taught, 0 omitted — correct
as far as it went, but its two actual criticals lived in the **body prose** (a bag checklist deleted
entirely; a dressing-sequence caveat stripped), outside the sweep's scope. Lesson carried forward:
the sweep must cover checklists and ordered sequences in body prose too, not just the two summary
sections.

---

## 5. Safety defect classes found only in the scripted-episode route (not in `content/`)

The episode-one (`skating`) script went through **six safety reviews and six repair passes** before
clearing, each review and each repair by a different agent from the others. It surfaced two defect
classes specific to linear audio that the corpus itself does not have, because a reader's eye can
glance back at a page and a listener's ear cannot:

1. **The compressed cue** — a closing mnemonic ("arms out") naming a technique the episode's own
   text never taught in full, even though the exact phrase appears correctly (always paired with its
   qualifier) everywhere in `content/`, including inside `facts` blocks. A document can rely on
   surrounding paragraphs for a mnemonic; an episode is one linear pass, so a mnemonic is the *only*
   thing many listeners retain.
2. **The stripped link layer** — a sentence routing a listener to another document for critical
   safety detail ("the document on conditioning and recovery has the red flags and the signs") that,
   in `content/`, sits beside a clickable hyperlink a reader is one click from following. Stripped of
   that link for audio, the same correctly-attributed sentence inverts from "here is where the
   answer is" to "you are on your own." `check_pointers.py` cannot see this class — its patterns
   match the Sources trailer, a Notes-on-verification section, and table/footnote references, but
   nothing matches a pointer to a sibling *document*, and it has never been run against an episode
   script at all (it hardcodes `content/`, confirmed still true 20 September — `check_pointers.py`'s
   `main()` reads `root / "content"` with no argument parsing).
3. **The partial limb set** — a protocol announced as complete but delivering only some of the
   source's limbs (two of the source's four fall techniques; four of five concussion actions,
   dropping "do not drive yourself home").

All three are **correctly attributed, verbatim borrowings with perfect provenance** — none would be
caught by a citation check. The rule drawn from this: when extracting for speech, every
cross-reference is effectively a deletion, and the test is not "is this sentence accurate" but "what
does this sentence rely on that a listener does not get." A crude cross-reference count across all
39 documents returns a four-figure number dominated by document-title mentions and legitimate
site-pointers and would be noise as a worklist; the real discriminator (a cross-reference carrying an
action the listener needs, where the pointing sentence is their only instruction at that moment) has
not been built.

Episode one eventually cleared with **0 critical, 0 major, 3 accepted non-blocking minors** (an
unlabelled coaching-caution timing detail; a concussion-routing enumeration that reads closed
without a 21-day return-to-play bar, deliberately not fixed by voicing "21 days" as a bare number;
one corrected `ssml/README.md` overstatement). Final length grew from 1,999 to 3,051 words (+53%)
across six drafts, entirely safety material, no teaching content cut to make room.

---

## 6. Where things stand, 20 September 2026

- Two scripted episodes fully synthesised end-to-end and cleared: `skating` (17.7 min) and
  `equipment` (85.4 min, over the 50-70 min target but judged non-blocking on ordering grounds).
  **Nobody has listened to either by ear** — every verdict above is from a transcript/text review
  plus `ffprobe` duration, not from a human listening pass.
- A third episode, `conditioning_and_recovery`, is **not cleared** — its `rules-verifier` pass
  raised the corpus-divergence question that is now the live open item (see the plan file).
- The transcription step (`whisper.cpp` review pass) needed for the NotebookLM-era verification
  method is separately still broken — see the plan file's open items.

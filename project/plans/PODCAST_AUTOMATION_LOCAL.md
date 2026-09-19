# Local-only NotebookLM podcast automation plan

## ⚠️⚠️ DIRECTION SET BY THE OWNER, 18 September 2026 — SINGLE VOICE, and a rule-citation policy by document

**This supersedes the two-speaker assumption everywhere below it.** Recorded in the
owner's own terms:

> *"perhaps we can make the podcast only a single speaker as I assume that will make
> the quality automatically better and the value to two people talking against each
> other doesn't seem high enough, we can invest time more in the script generation
> then to make it as natural and easy to listen to as possible"*

### What single voice changes, and it is more than the voice count

1. ⚠️ **THE MULTI-SPEAKER REQUIREMENT DISAPPEARS, AND WITH IT THE ENGINE
   BOTTLENECK.** The survey below narrowed to three engines *only because* they can
   return a conversation in one call. **That constraint is gone.** Single-voice TTS
   is the whole market: Polly generative, Google Chirp 3 HD, Gemini-TTS, ElevenLabs,
   and **OpenAI — which has no multi-speaker TTS at all and was excluded for that
   reason alone.** OpenAI is now back in contention, and its `instructions`
   parameter (tone, pacing, delivery) is something **no other engine here exposes.**
2. ⚠️ **THE TURN-BOUNDARY PROSODY PROBLEM GOES AWAY.** Stitching separately
   synthesised turns gives no shared prosody across the join — the most likely cause
   of the "electronic, not easy to listen to" quality of earlier attempts. **A single
   narrator has no joins.**
3. ⚠️⚠️ **THE EXISTING PIPELINE ALREADY DOES THIS.** `scripts/md_to_speech.py` is
   4,619 lines of graded pause hierarchy, 63 notation rules, acronym handling and
   Polly-limit chunking, and it takes `--content <dir>` — **so it can synthesise a
   directory of single-voice scripts with no new synthesis path at all.** The
   engineering risk of scripting our own collapses to *writing* the scripts.
4. **Cost falls slightly.** A single-voice script carries no dialogue scaffolding
   (*"that's right, Amy"*), so it should run **at or below** source length rather
   than the 1.2x assumed for dialogue. All three formats at 1.0x: **~$220 Polly
   generative, ~$117 Polly neural.**

### ⚠️ Rule-citation and figure policy — MEASURED, not intuited

The owner's instruction:

> *"if the content is about rules because it is a rink map or a rules primer then
> quoting rule numbers is fine, but if we talking about the positions or the systems
> content we should almost never be quoting rule numbers of figures or covering too
> many rules unless it is absolutely key to why a player behaves in a certain way"*

**Rule-and-figure density was measured across all 39 documents** (rule citations plus
dimensional figures per 1,000 words). ⚠️ **Run the census rather than quoting these —
they move with every content edit.** What it showed, in shape:

⚠️⚠️ **THE "POSITIONS AND SYSTEMS" SPLIT DOES NOT HOLD AS A CLEAN LINE, AND THE
EXCEPTION THE OWNER ALREADY NAMED IS EXACTLY WHERE IT BREAKS.** Four documents sit
in the top six by density *without* being rules documents:

| Document | Why it is rule-dense |
|---|---|
| `systems/faceoffs` | **3rd densest in the corpus.** A faceoff *is* a rules procedure — encroachment, violations, who places first |
| `technique/body_contact_and_battles` | checking is rule-defined; the penalty tier *is* the teaching point |
| `positions/goaltender` | crease, trapezoid, freezing the puck, interference — the position is rule-shaped |
| `systems/game_management` | last-minute situations are rule situations |

**For these four, the rule IS "absolutely key to why a player behaves in a certain
way" — which is the owner's own stated exception.** A flat "systems and positions
never cite rules" would gut them.

**The documents where rule numbers should essentially vanish** are the genuinely
conceptual ones — `technique/skating`, `off-the-ice/mental_game`,
`foundation/core_principles`, `hockey-iq/puck_support_and_spacing`,
`systems/neutral_zone_systems`, `technique/puck_handling`, `hockey-iq/time_and_space`.

⚠️ **`off-the-ice/conditioning_and_recovery` is the odd one out and needs its own
call:** it is figure-dense rather than rule-dense (sets, reps, durations). **The
"don't quote figures" instruction bites hardest there**, and stripping them may
remove the document's entire practical content. **Decide before scripting it.**

**Policy, to be applied per script:**
- **Cite freely:** `rink_map`, `rules_primer`, `uk_rules`.
- **Cite only where the rule is the reason for the behaviour:** the four above.
- **Almost never cite:** everything else. Teach the behaviour; if a rule drives it,
  say *what happens to you*, not which numbered rule says so.
- ⚠️ **NEVER drop a safety limb to satisfy this policy.** Non-negotiables 3 and 4
  outrank it. A penalty consequence is not a "figure" — *"that is a major and a game
  misconduct"* is the teaching point, not a citation to be stripped.

### Structure: progressive disclosure, repetition, summarising

The owner asks for *"the strict progressive disclosure and summarising technique the
notebook lm podcast prompt tries to encourage"* — the intent behind constraint 12,
which was written after accuracy constraints suppressed teaching depth and an episode
collapsed from 43 minutes to 18. **Required in every script:** one idea at a time;
restate it before building on it; a worked example after each idea; an explicit recap
before each new layer; and a closing summary.

⚠️ **A worked sample exists**: `scratchpad/tts/single.ssml` — 415 words, ~2m45s, drawn
strictly from `hockey-iq/time_and_space.md`, carrying that document's own hedge
(*"a way of thinking about it rather than a quantity anyone measures"*) to show the
style handles a disclosure without breaking stride. ⚠️ **Polly's generative engine
rejects `<emphasis>`** — it returns `InvalidSsmlException: Unsupported Generative
feature`. Use `<break>` and paragraph structure only.

## ⚠️ HOW TO ENABLE THE OTHER ENGINES — what is built, and what only the owner can do

**Built and working: `scripts/tts_sample.py`.** One command synthesises the same
script on every engine a credential exists for, and **reports the others as SKIPPED
with the reason** rather than failing:

```bash
python3 scripts/tts_sample.py <script.txt> --out ~/Downloads/tts-compare
```

Verified 18 September: Polly synthesised, the other four correctly reported as
missing credentials. ⚠️ **It reads keys from the ENVIRONMENT ONLY and never prints
one.** Never pass a key as a command-line argument — it lands in shell history and in
`ps`.

### ⚠️ STEPS ONLY THE OWNER CAN TAKE — each is an account action

| Engine | Minimum steps | Free tier? |
|---|---|---|
| **Polly** | ⚠️ **working, but the SSO token EXPIRES** — see the box below | pay per char |
| **OpenAI** | platform.openai.com → API keys → create → `export OPENAI_API_KEY=...` | no, but a sample costs cents |
| **ElevenLabs** | elevenlabs.io → sign up → Profile → API key → `export ELEVENLABS_API_KEY=...` | **yes — 10k chars/month**, enough for samples |
| **Gemini-TTS** | aistudio.google.com → Get API key → `export GOOGLE_API_KEY=...` | **yes**, generous |
| **Chirp 3 HD** | same `GOOGLE_API_KEY`, **plus** enable *Cloud Text-to-Speech API* in the GCP console | free tier on first chars |

⚠️⚠️ **THE STEP THE OWNER ACTUALLY HAS TO TAKE FIRST, AND IT IS NOT AN API KEY.**
Polly needs no new account and no new credential — **the existing SSO session simply
expires**, and when it does every synthesis call fails:

```
aws: [ERROR]: Error when retrieving token from sso: Token has expired and refresh failed
```

**Confirmed expired at 19:33 on 18 September 2026.** The fix is one interactive command,
and it must be the owner because it opens a browser for sign-in:

```bash
aws sso login --profile ice-hockey
```

⚠️ **This blocks ALL audio, on every engine choice** — Polly is the only engine with a
working credential today, so until this is run **nothing can be heard at all**, and the
ear test that every direction decision in this file is waiting on cannot happen.
⚠️ **It is also the cheapest possible unblock: no signup, no key, no new account.**
⚠️ **Re-run it whenever a synthesis call returns that error — the token expiring is
normal and is NOT a sign that anything is broken.**

⚠️ **`gcloud` is NOT installed on this machine and is NOT needed** — both Google
engines are reachable with a plain API key over HTTPS, which is why the harness uses
`urllib` rather than a vendor SDK. **Do not install the SDKs for a sample.**

⚠️ **Put the keys in the shell that runs the command, not in a file in this
repository.** `.gitignore` covers `.env`, the hook blocks credentials, and
`check_secrets.py` scans tracked files — **but the safest version is that a key never
enters the repository at all.** Non-negotiable: this repository is public.

- [ ] Owner sets one or more keys → coordinator runs `tts_sample.py` → ear test.
  ⚠️ **ElevenLabs and Gemini are both free for a sample, so the cheapest first move
  is those two.**

## ⚠️ THE TRANSCRIPTION STEP IS BROKEN — no whisper model on disk

**Found 18 September.** `core_principles` v4 was collected
(`~/Downloads/Surviving_the_Ninety_Six_Percent_of_Hockey.m4a`, 86 MB, **44.6
minutes**) and converted to 16 kHz mono PCM successfully. **Transcription then
failed: there is no `ggml-*.bin` anywhere on the filesystem.**

`whisper-cli` **is** installed (`/opt/homebrew/bin/whisper-cli`, with the full
whisper.cpp suite beside it). **Only the model weights are missing** — a
full-filesystem `find` for `ggml-*.bin` returns nothing.

⚠️ **So every episode-verification method this plan relies on is currently
unavailable**, including the fabrication greps that produced four consecutive
NO-GO verdicts. **An episode cannot be reviewed without a transcript**, so the four
collected and pending episodes are **blocked, not merely queued.**

- [ ] **Fetch the model.** ~148 MB for `base.en`. It is a download, so the owner
  should run it:
  ```bash
  mkdir -p ~/whisper-models && curl -L -o ~/whisper-models/ggml-base.en.bin \
    https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin
  ```
  Then transcription is:
  ```bash
  ffmpeg -i EPISODE.m4a -ar 16000 -ac 1 -c:a pcm_s16le OUT.wav
  whisper-cli -m ~/whisper-models/ggml-base.en.bin -otxt -np -nt -f OUT.wav -of OUT
  ```
  ⚠️ **`base.en` is what every prior verdict in this file was measured with** — a
  different size changes the transcript and is not comparable to the record.

⚠️⚠️ **AND THE KNOWN TRAP SURVIVES THE FIX: WHISPER MANGLES PROPER NOUNS.**
*"Brodeur"* transcribed as *"Brodua"*, and a grep for the correct spelling returned
**zero on an episode that contained the fabrication four times.** **Never grep a
transcript for an exact name. Search semantically and read the surrounding
context.**

## ⚠️ FOUR EPISODES GENERATED AND UNCOLLECTED, and the teaching-depth fix HELD

**State at 09:00, 18 September 2026.** Chrome recovered after an outage of several
hours. Four NotebookLM notebooks show a generated episode, none collected:

| Notebook title | Document | Length |
|---|---|---|
| *The Seven Pillars of Ice Hockey Mastery* | `core_principles` | **44:33** |
| *The invisible map of hockey rinks* | `rink_map` | not read |
| *The hidden ninety-six percent of hockey* | not identified | not read |
| *Essential On-Ice Communication and Safety Rules* | `on_ice_communication` | not read |

### ⚠️ THE ONE MEASUREMENT THAT MATTERS: constraint 12 worked

**`core_principles` v4 runs 44:33. v3 ran 18 minutes.**

That is the constraint-12 experiment resolving. The accuracy constraints had
**suppressed teaching depth as a side effect** — v3 came back at 18 minutes against
the previous attempt's 43, having correctly stopped inventing and **wrongly also
stopped teaching**. Constraint 12 was written to say, in terms, that the accuracy
constraints forbid adding new FACTS and say nothing whatever against length, depth,
repetition or teaching structure.

**v4 is back to 44:33.** ⚠️ **Length is a proxy for teaching depth, not a
measurement of it, and it says NOTHING about accuracy** — `rink_map` v4 was the
longest episode ever produced and still failed its review. **Do not read this as a
GO.**

- [ ] Collect all four, transcribe with `whisper.cpp`, and measure word counts.
  ⚠️ **Whisper mangles proper nouns** — *"Brodeur"* came out *"Brodua"* and a grep
  for the correct spelling returned zero on an episode that contained the
  fabrication four times. **Never grep for an exact name; search semantically and
  read the context.**
- [ ] ⚠️ **Review must be a RULEBOOK pass, not a source-comparison pass.** That is
  the only method that would have caught six of v3's ten defects, and it raises the
  standing per-episode review cost permanently. **Price it in before any decision to
  scale generation.**

⚠️ **This does not change the direction below.** Four generations have been NO-GO,
the failure mode has shifted to transmission errors that look sourced, and the
browser workflow still cannot be parallelised or cheaply re-run. **A longer episode
that is still wrong is not progress on the thing that blocks publication.**

## ⚠️ DIRECTION UNDER CONSIDERATION, 18 September 2026 — SCRIPT OUR OWN, and stop treating NotebookLM as the only producer

**This section is the owner of the own-scripted direction. Everything below it in
this file predates the decision and describes the NotebookLM workflow.**

### Why this is on the table at all

Four consecutive NotebookLM generations were NO-GO (`rink_map` v1–v4,
`core_principles`, `on_ice_communication`). The failure mode **changed** between
v2 and v3 — from ADDITION (invented content, catchable by reading the source) to
**TRANSMISSION** (rules the source states correctly coming out wrong), which looks
sourced and is only caught by a primary-rulebook grep. ⚠️ **The trapezoid/Brodeur
fabrication recurred four times across four prompt versions.** The evidence no
longer supports treating it as a wording problem.

⚠️ **And there is no route to "NotebookLM quality, our script."** Confirmed 18
September: the Gemini Enterprise Podcast API is deprecated and not allowlisting new
customers, and NotebookLM Enterprise's audio-overview method generates **from
notebook sources, not from a supplied script**. See the TTS engine survey below.

### What scripting our own buys, beyond accuracy

Accuracy is the reason it is being considered, but it is not the only gain:

1. **Completeness becomes a choice rather than an outcome.** Measured: NotebookLM
   episodes run at **~0.47 of source length**. They are structurally *selecting*.
   A script we write covers what we decide it covers.
2. **Teaching structure becomes controllable** — gradual disclosure, deliberate
   repetition, recap and retrieval questions, in the order the corpus's own
   pedagogy wants rather than whatever the generator produced.
3. ⚠️ **MULTIPLE FORMATS FROM ONE CORPUS — and this is the benefit that does not
   exist at all under NotebookLM.** A long full-coverage episode, a short
   orientation episode, and **journey episodes that cross documents**.
4. **Production control.** Generation is an API call, so batch size, parallelism,
   retry and regeneration-after-a-content-fix are all ours. ⚠️ **The current
   workflow is a human driving a browser UI with a 5000-char silent `maxLength` on
   one field** — it cannot be parallelised and cannot be re-run cheaply.
5. **Regeneration after a content repair stops being expensive.** This matters
   more than it looks: the corpus is under active repair, and **six documents were
   edited on 18 September alone**. Under the browser workflow every one of those is
   a manual re-drive.

### ⚠️ Journey episodes — the constraint that must not be broken

`site/src/data/pathways.json` defines **seven pathways**, six of them non-empty:

| pathway | docs |
|---|---:|
| `core-principles` | 1 |
| `first-game` | 6 |
| `new-position` | 10 |
| `watch-and-learn` | 6 |
| `playing-in-britain` | 8 |
| `parent-of-a-new-player` | 3 |
| `adult-detail` | 0 — **has no doc list; not an episode candidate as it stands** |

⚠️⚠️ **DO NOT BUILD A JOURNEY EPISODE FROM `pathways.json`'s `docs` FIELD.** That
file says in terms that its `docs` list is *"DERIVED context for search and related
links, **never the order**"*, and that **the ordering is deliberately absent**:

> *"Four of these point at the four routes in
> `content/getting-started/getting_started.md`, which name SECTIONS rather than
> documents, are in deliberate priority order, and carry their own caveats…
> Copying ~90 deep anchors into site data would create a second, unreviewed copy of
> a maintained list, would put the caveats on the wrong side of the copy, and would
> take those anchors out of `scripts/check_links.py`'s reach. The document owns the
> route; this file owns the door."*

**So a journey episode's running order must be derived from
`getting_started.md`'s route sections at build time, and must carry the route's own
caveats** — that each route is in priority order, that the one-line descriptions are
signposts rather than summaries, and that **no route replaces asking your club.**
⚠️ **A journey script that silently reorders or de-caveats a route reproduces the
exact defect that file was written to prevent.**

### Measured cost model — TTS *and* the half nobody had costed

⚠️ **Every character count below was measured in this repository on 18 September
2026. No count is quoted from memory.** Source: 7,581,838 raw markdown characters
across 39 documents; **6,645,269 spoken characters** after `md_to_speech` strips
markdown, tables and the Sources trailer (ratio ≈ 0.876 — use the spoken figure for
TTS, never the raw one).

| Format | Characters | Gemini 2.5 Flash TTS \* | Polly generative | ElevenLabs v3 |
|---|---:|---:|---:|---:|
| Narration (full text read aloud) | 6,645,269 | $117 | $199 | $665 |
| **Long podcast, full coverage (1.2x)** | 7,974,322 | **$140** | **$239** | **$797** |
| Short podcast, ~15 min x 39 | 526,500 | $9 | $16 | $53 |
| Journey episodes, ~30 min x 6 | 162,000 | $3 | $5 | $16 |
| **Long + short + journeys** | 8,662,822 | **$152** | **$260** | **$866** |
| Everything, incl. narration | 15,308,091 | $269 | $459 | $1,531 |

\* ⚠️ **Gemini is token-priced. That column is DERIVED**, from Google's *"25 tokens
per second of audio"* footnote plus an assumed 150 wpm — **not a list price.** If the
speaking-rate assumption is wrong the whole column moves. Quote the derivation with
the figure or do not quote it.

⚠️⚠️ **THE SHORT AND JOURNEY FORMATS ARE ROUNDING ERRORS. This is the headline of the
whole table.** Short-form for all 39 documents costs **$9–$16**; six journey episodes
cost **$3–$5**. **The long-form full-coverage episode is ~94% of the bill**, because
the only thing that actually costs money is total minutes of audio. **Deciding to
ship three formats instead of one adds under 10% to the TTS bill.**

⚠️ **And cost is a coverage measurement in disguise.** A podcast quoted materially
below the narration price is telling you it left something out — it contains fewer
words than the document does.

#### The other half: writing the scripts

TTS is not the whole cost, and every figure produced before today ignored this.
Measured in tokens, so it can be priced against whatever model is chosen:

| | Tokens |
|---|---:|
| Input — corpus read once, plus per-episode briefs | ~2,051,000 |
| Output — 39 long scripts | ~1,994,000 |
| Output — 39 short scripts | ~132,000 |
| Output — 6 journey scripts | ~41,000 |
| **Total output, all three formats** | **~2,166,000** |

⚠️⚠️ **CORRECTED BY THE OWNER, 18 September 2026: SCRIPT WRITING IS NOT A DOLLAR
COST AT ALL.** It comes out of a **fixed Claude budget that is already paid for**.
**So it does not appear in any total, and no model price should ever be written
here.** What it actually costs is **elapsed time, and the displacement of other
corpus work** — the agents writing scripts are the agents that would otherwise be
repairing content.

**The two costs are therefore in different currencies and must never be summed:**

| | Currency | Who pays |
|---|---|---|
| TTS synthesis | **dollars, marginal** | per character, per regeneration |
| Script writing | **wall-clock and opportunity** | fixed budget, already committed |

⚠️ **The scheduling shape, which is the thing to plan around:** 39 long + 39 short +
6 journey = **84 scripts**. **The long-form scripts are ~92% of the script-writing
output** — so, exactly as with the TTS bill, **adding the short and journey formats
is nearly free in BOTH currencies** (~8% of output tokens, under 10% of dollars).

⚠️ **This is a per-ATTEMPT cost, not a per-episode one.** A script that fails review
is rewritten, and today's evidence is that review finds real defects on the first
pass. **Budget more than one attempt per episode in TIME.**

⚠️⚠️ **AND IT CREATES A SEQUENCING CONSTRAINT THAT DID NOT EXIST UNDER THE DOLLAR
FRAMING.** The corpus is **under active repair** — six documents were edited on 18
September alone, several of them rewritten twice in one day after review. **A script
written against a document that then changes is a script to be rewritten**, and the
rewrite costs time that was the whole reason to prefer this direction. **So: script
a document only after its content has settled**, or accept the rewrite explicitly
and say so in the plan. **Do not start the long-form batch while a review round is
open on its documents.**

### What is NOT yet established — do not let this section imply otherwise

- ⚠️ **No audio has been generated on any engine except Polly.** Every quality claim
  about Gemini and ElevenLabs is **vendor marketing**. The only two-speaker audio
  anyone here has heard is `dialogue_generative_BrianAmy.mp3`.
- ⚠️ **Nobody has written a full-coverage script yet**, so the 1.2x expansion factor
  is an **assumption**, clearly marked as one. It drives ~94% of the bill and should
  be replaced by a measurement from the first real script.
- **Whether a scripted podcast is actually pleasant to listen to for 60 minutes** is
  untested and is the whole point.

### Acceptance for the next step — an EAR TEST, not more research

- [ ] Hand-write **one** episode's opening two minutes as a two-speaker script.
- [ ] Synthesise it on **Gemini 2.5 Flash TTS multi-speaker** and **ElevenLabs v3
      Text to Dialogue**, and compare both against the Polly sample.
- [ ] ⚠️ **The $152-vs-$866 spread only matters if both clear the bar.** If only one
      does, there is no decision to make — so listen first and cost second.
- [ ] Measure the real script-to-source expansion factor from that script and
      **replace the 1.2x assumption in the table above with it.**

## Scope decision, 18 September 2026 — regenerate the entire catalog, not just the gaps

⚠️ **The user's explicit decision, given the fabrication findings below: regenerate
all 39 episodes (38 excluding `getting-started/getting_started`), not just the
3 that were missing.** The first batch of 3 (`core_principles`, `rink_map`,
`language_and_glossary`) found confirmed content fabrication in 2 of 2 fully
reviewed episodes so far — including a dangerous fabricated injury-response
instruction reproduced almost verbatim across two independent generations on
unrelated source documents (see the finding below). Given that, the user chose
to treat the existing 34-episode catalog (generated in earlier sessions, before
this two-reviewer process existed) as suspect rather than assumed-correct, and
regenerate everything under the same mandatory rules-verifier + safety-reviewer
pass. All 37 non-excluded documents are queued as of this decision (34 via
`--stale`, `rink_map` and `core_principles` requeued after their NO-GO,
`language_and_glossary` mid-review). **Scale: up to 10 generations running in
parallel at once** (the plan's own hard batch ceiling, unchanged), each still
requiring the full two-reviewer pass before acceptance — parallelism is about
throughput of generation, not a shortcut past review.

⚠️ **A third episode (`language_and_glossary`) landed the same fabricated
injury/concussion segment a third time, now reinforced twice within one
episode** — see
[`../reviews/language_and_glossary_podcast_no_go_2026-09-17.md`](../reviews/language_and_glossary_podcast_no_go_2026-09-17.md).
This closed the question of whether it was chance: it is a property of the
pipeline. **Root cause found and fixed for one whole fabrication class**:
`.claude/skills/notebooklm-episode/prompt_constraints.md`'s own constraint 3
was itself stale — it told every generation that Britain's current IIHF
edition (v1.1) "could not be obtained" and flagged a version gap that does
not exist; `sources/README.md` confirms v1.1 is on disk and is exactly what
the corpus cites. The generator wasn't hallucinating that specific narrative,
it was faithfully restating a false instruction we gave it. **Fixed**, and a
new constraint 9 added naming the other confirmed fabrication patterns
directly (the fabricated safety segment, invented statistics/dimensions,
invented rules), with an explicit self-check requirement and a direct call-out
of which teaching-prompt instructions pull toward invention. **Not yet
proven to work** — a small validation batch (2-3 documents, including a
retry of `rink_map` and `core_principles` for a clean before/after) is being
run before committing the fixed prompt to the full 10-parallel batch.

**Validation batch, first result: NO-GO, 18 September 2026.** `rink_map`
retry ran under the fixed prompt (source (1) content, source (2) the full
fixed constraints text as a Copied-text source, source (3) the unchanged
teaching prompt as a second Copied-text source, plus a short focus-field
pointer naming all three and their priority order), was downloaded (audio
finished at 50:58), installed as the new `podcasts/Foundation/Rink Map.m4a`
master, transcribed locally via whisper.cpp, and reviewed by an independent
`rules-verifier` + `safety-reviewer` pair. **Result: the fix worked narrowly
and not broadly.** The fabricated injury-response segment and the fabricated
IIHF version-history did not reappear — genuine, confirmed progress. But the
retry invented three new things constraint 9 never named: a four-book
faceoff-encroachment comparison with no basis anywhere in the source, a false
historical/causal story naming a real NHL player (Martin Brodeur) and
inventing why the trapezoid rule was created, and a restatement of a
source passage explicitly marked "genuinely unsettled" as settled fact,
broadened from one governing body to a whole class of reader. Full record:
[`../reviews/rink_map_podcast_retry_no_go_2026-09-18.md`](../reviews/rink_map_podcast_retry_no_go_2026-09-18.md).
**A secondary finding: the rules-verifier also caught the first NO-GO's own
"invented centre-ice restriction" finding as itself wrong** — that rule is
real (NHL 27.7/IIHF 27.6), confirmed directly against primary rulebook text,
and the retry stated it correctly; the record above retracts that finding
rather than let a stale conclusion stand uncorrected.

**Constraint 9 broadened in response**, from a list of three named patterns
to the general rule underneath them: nothing from the generator's own hockey
knowledge belongs in an episode, ever, even when true, unless traceable to a
sentence in the actual sources given; a hedge in the source is never the
episode's to resolve into confidence. `rink_map` returned to `blocked` in the
queue (failure count 2). `core_principles` and `on_ice_communication`
finished generating under the OLD (now-known-insufficient) prompt version —
their reviews still run, for additional evidence of the same failure shape,
but neither is a clean test of the newly-broadened constraint. **A further
retry under the broadened constraint is needed before any document is
accepted or before scaling to the 10-parallel batch.**

`core_principles`'s retry (title "The hidden ninety-six percent of hockey" —
a bare percentage baked into the title is exactly the shape of invented
statistic constraint 9 targets, so this is being checked with particular
care) and `on_ice_communication`'s first attempt (title "How specific calls
save your neck") both finished generating, were downloaded, installed as
their masters (old files backed up to scratchpad), converted and transcribed
locally, and dispatched to fresh `rules-verifier` + `safety-reviewer` pairs.

## Validation batch conclusion: 3 for 3 NO-GO, 18 September 2026

⚠️ **Every document in the validation batch failed review.** `rink_map`,
`core_principles`, and `on_ice_communication` each ran under the fixed
prompt (the last two under the version before constraint 9 was broadened);
all three were reviewed by an independent `rules-verifier` + `safety-reviewer`
pair; all three came back NO-GO. Full records:
[`rink_map_podcast_retry_no_go_2026-09-18.md`](../reviews/rink_map_podcast_retry_no_go_2026-09-18.md),
[`core_principles_podcast_retry_no_go_2026-09-18.md`](../reviews/core_principles_podcast_retry_no_go_2026-09-18.md),
[`on_ice_communication_podcast_no_go_2026-09-18.md`](../reviews/on_ice_communication_podcast_no_go_2026-09-18.md).

**What actually worked:** in 3/3, the specific fabricated "self-protection and
injury response" closing segment — the pattern that started this whole
investigation — did not reappear. That is a real, repeated, confirmed result,
not chance.

**What did not work:** in 3/3, some other invented content survived — a
fabricated cross-book rule comparison, a false historical anecdote naming a
real player, an unsettled source claim restated as settled (`rink_map`);
three fresh invented statistics including one inside the single most
safety-audited sentence in the document, plus a dropped safety prohibition
(`core_principles` — notably, on the *exact* document constraint 9 was
written for, one of its three named patterns recurred, not just new drift);
and, worst, a wholly invented biomechanical mechanism ("axial loading… the
vertebrae cannot absorb the shock") layered onto real spinal-injury content,
stripping the source's own hedge about how thin the underlying evidence is
(`on_ice_communication`) — a new failure shape none of the existing
constraint wording names, because the topic itself is legitimately in the
source and only the specific invented detail is not.

**Diagnosis, now with three independent data points:** naming specific
fabrication instances in the prompt narrows what gets suppressed without
closing the underlying behavior. NotebookLM's Long/Deep-dive generation
appears to supplement whatever source material it is given with the model's
own general hockey knowledge — true or false, on-topic or adjacent — whenever
it judges the source incomplete relative to the teaching prompt's
instructions to explain, contextualize, or add real-world detail. This has
now shown up as: invented rules, invented statistics, invented history,
invented governing-body scope, invented medical mechanism, and dropped
hedges — six different surface shapes of what looks like one underlying
generator behavior. Every fresh attempt at naming the shape more precisely
has been followed by a new instance the naming didn't cover.

**This is a decision point for the user, not something to keep iterating on
alone.** The options: (a) try another prompt iteration incorporating all
three failure records and retest — uncertain to work, since this is the
second consecutive iteration to fail at the validation stage; (b) try a
different NotebookLM format (e.g. "Brief" instead of "Deep dive" — shorter,
possibly less prone to filling gaps, but a real reduction in the
teaching-depth goal that motivated this whole project); (c) accept that
every episode, not just a validation sample, needs the full two-reviewer
pass before acceptance, indefinitely — which the plan already requires, but
which means no batch of 10 can run unsupervised, since 0/3 in this sample
passed unaided; (d) reconsider whether NotebookLM-generated podcasts can meet
this corpus's accuracy bar at all in their current form, versus e.g. a
differently-structured generation approach.

⚠️ **Operational finding: the NotebookLM notebook's own "Generating Audio
Overview... Come back in a few minutes" status panel can go stale and keep
showing "generating" long after the audio has actually finished** — one
episode in the first batch showed as generating for roughly two hours; a page
reload revealed it had finished and downloaded normally. **Reload the page
before trusting a long-running "generating" status**, rather than assuming
the process is stuck.

## Direction decision, 18 September 2026 — TWO FLAVOURS, split by measured rule density

**The user's decision:** stop trying to make one format serve the whole
corpus. Produce **two** audio flavours and choose per document:

1. **Podcast** (NotebookLM two-host deep dive) — for conceptual, tactical and
   positional content, where the value is explanation and the rule density is
   low.
2. **Narration** (read the reviewed text aloud) — for rules-heavy content,
   where verbatim accuracy is the whole point.

### Why this removes the defect class rather than merely reducing it

⚠️ **A narrated episode cannot make a transmission error.** The dominant v3/v4
failure is not invention but *transmission*: rules the source states correctly
coming out of the episode wrong (six of them in `rink_map` v3). That happens
because a generative model sits between the reviewed text and the listener.
**Narration deletes that step**, so the audio inherits the corpus's existing
adversarial review rather than re-deriving it. This is a structural fix, not a
tuning one.

### The narration pipeline already exists and is mature

`scripts/md_to_speech.py` — 4,619 lines, Markdown→SSML for Amazon Polly en-GB.
Measured 18 September: **39 documents, 3,063 chunks, 6,645,269 billed
characters, 0 unrecognised constructs, 46 tables rewritten as prose, 3 dropped
to pointers.** It already solves the "sounds robotic" problem structurally —
a graded pause hierarchy (900 ms document title / 1000 ms section / 700 ms
subsection / 500 ms paragraph / 450 ms after a heading / 300 ms list item),
63 notation rules, and `say-as interpret-as="characters"` on acronyms so
"CAN/BNQ" is not read as a word.

**The only open decision is the voice**, which `docs/decision-log.md` records
as parked ("Phase 5 on voice quality after the pilot"). Full-corpus cost from
the tool's own estimator, en-GB voices available in eu-west-2:

| Engine | Rate | Full corpus | Voices |
|---|---|---|---|
| standard | $4/M | **$27** | Emma, Arthur, Brian, Amy |
| neural | $16/M | **$106** | Emma, Arthur, Brian, Amy |
| generative | $30/M | **$199** | Brian, Amy |
| long-form | $100/M | — | **not available in eu-west-2** |

⚠️ **`md_to_speech.py`'s own docstring and its manifest both say `long-form`,
which this region does not offer.** That has to be settled before synthesis —
either change the manifest's engine or synthesise from another region.
Standard is the tier that sounds robotic; **generative** is the conversational
tier and the realistic target. A voice A/B on a few chunks costs under a
dollar and should happen before committing to a full run.

### The split, by measured rule density

Two measures, both reproducible — **run the tools rather than quoting these
figures, which go stale**: `check_readability_census.py citations` for
citation share, and a count of explicit `<Book> Rule` references per document
for cross-book pressure. Ordered by the latter:

| Document | Rule citations | Books cited |
|---|---:|---:|
| `foundation/rules_primer.md` | 369 | 5 |
| `positions/goaltender.md` | 363 | 5 |
| `technique/body_contact_and_battles.md` | 269 | 5 |
| `systems/faceoffs.md` | 262 | 5 |
| `technique/shooting.md` | 132 | 5 |
| `systems/special_teams.md` | 120 | 5 |
| `positions/center.md` | 107 | 5 |
| `foundation/on_ice_communication.md` | 101 | 5 |
| … | | |
| `foundation/rink_map.md` | 40 | 5 |
| `foundation/core_principles.md` | 4 | 3 |
| `technique/skating.md` | 4 | 4 |
| `reading-diagrams/reading_ice_hockey_diagrams.md` | 2 | 2 |

⚠️ **THE TOPIC SPLIT AND THE RISK SPLIT DISAGREE, AND THE DISAGREEMENT IS THE
POINT.** The instinct was "podcast suits positions and strategies." The data
says `goaltender.md` is the **second most rules-dense document in the corpus**
(363 citations across five books) and `center.md` is seventh. Those are
positions documents, and by measured risk they belong in the narration tier,
not the podcast tier. `faceoffs.md` and `special_teams.md` are "systems"
documents with the same problem.

⚠️ **AND RAW COUNT IS NOT THE WHOLE RISK.** `rink_map.md` has only 40
citations yet produced **six** transmission errors — because it *compares*
five books across those 40, and comparison is what the generator gets wrong.
**Cross-book comparison density, not citation count, is the predictor.** Any
final classification should be checked by reading, not taken off this table.

### Status

- **Podcast tier:** proceed. Low-rule-density conceptual documents.
- **Narration tier:** blocked on two things — the voice decision above, and
  an expired AWS session (`aws sts get-caller-identity` → *"Your session has
  expired"*). Synthesis cannot be tested until that is renewed.
- **Not yet decided:** whether every document gets *both* flavours, or each
  gets one. Both is more work but lets a reader choose.

## ⚠️ The queue was reporting episode presence BACKWARDS for the two documents this work is about

**Found and fixed 18 September 2026.** `scripts/podcast_queue.py` chose its
manifest with `isinstance(data, list)`. The two files have **different shapes**:

- `podcasts_web/manifest.json` — a bare JSON **list**.
- `site/src/data/podcast.json` — the canonical file that superseded it, an
  **object**: `{"note": ..., "episodes": [...]}`, written by
  `scripts/build_podcast_audio.py`.

So the canonical file **failed the shape test, fell through, and the tool read the
superseded one.** ⚠️ **It printed which file it had used, and nothing said that was
the wrong file.**

⚠️⚠️ **It was not a harmless fallback.** The two disagreed about **exactly two
documents**, and they are the two this work has been about:

| Document | Canonical `podcast.json` | Superseded `manifest.json` |
|---|---|---|
| `foundation/core_principles` | **no episode** | has episode |
| `foundation/rink_map` | **has episode** | no episode |

**So the queue said `core_principles` already had an episode and `rink_map` did
not. The truth is the reverse** — `core_principles` is the document with no
published episode, and it is the one whose generation has been retried all day.

**Fixed:** the loader now accepts both shapes, keeps the canonical file first, and
**reports a fallback on stderr** instead of taking one silently. Verified: `status`
now names `site/src/data/podcast.json` and both rows read correctly.

⚠️ **The lesson is the shape of the bug, not the two rows.** A tool that tries
candidate paths in order and validates each by shape will **skip a valid file whose
shape changed** and carry on with an older one, reporting success. Nothing in this
repository's gates covers `.podcast_queue/` or either manifest.

## TTS engine survey, 18 September 2026 — the cost objection to scripting our own podcast does not survive contact with the prices

**This section exists because the direction decision above was made on the
assumption that a scripted podcast would be expensive. It is not.** Every figure
below was read from a vendor pricing page on 18 September 2026 and every
character count was measured in this repository, not estimated.

### Measured character counts

| Corpus artefact | Characters | How measured |
|---|---:|---|
| Narration — the full text of all 39 documents | 6,645,269 | `md_to_speech.py` output, after the orphan prune |
| NotebookLM v4 scripts, all 39 episodes | ~2,977,552 | extrapolated from `rink_map` v4: 10,245 dialogue words from a 21,909-word source |
| A podcast scripted by us to **full** coverage | 6.6M – 9.3M | assumption, stated as one: dialogue restates, so it is **at least** source length and plausibly 1.4x |

⚠️ **The 47% ratio is the whole point of this table.** A NotebookLM episode is
cheap *because it is short*, and it is short *because it selects*. Any podcast
that genuinely covers every point costs at least what narration costs, because
it contains at least as many words. **Cost is a proxy for coverage here** — a
podcast quoted below the narration price is telling you it left something out.

### Prices, all 39 episodes

| Engine | $/1M chars | NotebookLM-length | Full coverage (1.0x – 1.4x) | Narration |
|---|---:|---:|---:|---:|
| Polly standard | 4 | $12 | $27 – $37 | $27 |
| Polly neural | 16 | $48 | $106 – $149 | $106 |
| **Gemini 2.5 Flash TTS** \* | **~17.6** | **$52** | **$117 – $164** | **$117** |
| Polly generative | 30 | $89 | $199 – $279 | $199 |
| Google Chirp 3 HD | 30 | $89 | $199 – $279 | $199 |
| OpenAI `tts-1-hd` | 30 | $89 | $199 – $279 | $199 |
| Gemini 2.5 Pro TTS / 3.1 Flash TTS | ~35 | $104 | $233 – $326 | $233 |
| ElevenLabs v3 | 100 | $298 | $665 – $930 | $665 |

\* ⚠️ **Gemini is token-priced, not character-priced. The $/1M chars column for
it is DERIVED, not quoted** — from Google's footnote *"Audio tokens correspond
to 25 tokens per second of audio"* plus an assumed 150 words per minute. **A
derived figure goes stale in a way a list price does not, and if the speaking
rate assumption is wrong the whole column moves.** Anyone quoting it must quote
the derivation with it. The list prices are $0.50 in / $10.00 per 1M audio
tokens for 2.5 Flash TTS.

### Which engines can actually do two speakers in one call

Three, and only three were found:

- **ElevenLabs Text to Dialogue** — Eleven v3 only. Takes an `inputs[]` array of
  `{text, voice_id}` turns with per-turn audio tags. Docs state no speaker
  limit; they recommend **≤2,000 characters per request**, so ~29 calls per
  episode with turn-taking preserved inside each chunk.
- **Google Gemini-TTS multi-speaker** — 2.5 Flash TTS, 2.5 Pro TTS, 3.1 Flash
  TTS (Preview). **≤4,000 bytes of combined dialogue per request**; the Gemini
  Developer API caps it at **2 speakers**, the Cloud docs state no hard limit.
  Google's own docs warn quality *"may begin to drift"* beyond a few minutes.
- **PlayAI PlayDialog** — purpose-built two-speaker. ⚠️ **Its ~$100/1M price is
  from a secondary source and was NOT verified on play.ai. Do not quote it.**

**OpenAI has no multi-speaker TTS** — one voice per request, so a conversation
means synthesising each turn separately and concatenating, which is the approach
that produced the electronic, unlistenable result the owner described. Its
`instructions` parameter (documented for accent, emotional range, intonation,
tone, speed) is on `gpt-4o-mini-tts` only.

### NotebookLM itself is not available as an API — confirmed, and the door is closing

- The **Gemini Enterprise Podcast API is deprecated**; Google *"isn't
  allowlisting new customers."*
- NotebookLM Enterprise's `notebooks.audioOverviews.create` is **Preview**,
  requires Gemini Notebook Enterprise, and **generates from notebook sources,
  not from a script you supply** — so it cannot take our text even if we had
  access. One overview per notebook.

**So there is no route to "NotebookLM quality, our script."** The browser
workflow in this document is the only way to reach that generator, and it is the
workflow that has produced four consecutive NO-GOs.

### What this changes

⚠️ **Nothing above is an ear test, and the decision is an ear decision.** No
audio was generated for any engine in this survey; every quality statement in
the source material is the vendor's own marketing. The `dialogue_generative_BrianAmy.mp3`
Polly sample is the only two-speaker audio anyone here has actually heard.

**Acceptance for the next step:** generate ONE episode's opening two minutes on
**Gemini 2.5 Flash TTS multi-speaker** and on **ElevenLabs v3 Text to Dialogue**,
from the same hand-written script, and listen to both against the Polly sample.
The price spread between them ($117 vs $665 at full coverage) only matters if
both clear the bar; if only one does, there is no decision to make.

## Scope decision, 17 September 2026

**One episode per document, ordered by the site's own page order, `getting-started/getting_started`
excluded from new work.** `project/site_build_specification.md` §7.3
originally suggested grouping episodes by layer; what's actually deployed
(`site/src/data/podcast.json`) is per-document, and that's what this plan
now follows explicitly — see §7.3's own note on the decision. Episode order
is derived from `site/src/data/structure.json`, the same file that drives
the site's navigation, so the two can never drift apart silently.
`getting-started/getting_started` already has an episode (track 1) and
needs no new one; every other document should have one.

`scripts/podcast_queue.py` implements the queue/checkpoint machinery this
plan describes below — run `python3 scripts/podcast_queue.py status` for
the current state of all 39 documents against the manifest. As of this
decision, three documents have no episode at all and are the queue's
starting point: `foundation/core_principles` (track 2), `foundation/rink_map`
(track 4 — the existing `foundation/rink_map_and_glossary` episode predates
the file split and does not count as this document's episode; see the
finding below), and `foundation/language_and_glossary` (track 5). The other
34 non-getting-started documents already have an episode in the manifest
and are **not** queued automatically — re-running 34 already-fine episodes
through NotebookLM on a guess is exactly the rate-limit risk this plan
exists to avoid. A specific document can be added to the queue with
`--stale DOC_ID --reason "..."` when there's actual evidence its audio no
longer matches its text (see the finding immediately below for one such
case, found and reasoned through, not guessed).

⚠️ **A finding, not yet acted on: the existing `rink_map_and_glossary`
episode is stale beyond just being the wrong document.** It genuinely
narrates real glossary content (28.6% of a ~60-minute episode is the old
`## 8. Glossary` section, now folded into `language_and_glossary.md`), but
its source audio predates a 12 September fix to the goalkeeper-crease rule
— it currently tells a listener the incomplete, pre-fix version of that
rule. Full account in
[`../reviews/goaltender_carha_2026-09-17.md`](../reviews/goaltender_carha_2026-09-17.md).
This is exactly the kind of specific, evidenced staleness `--stale` exists
for, distinct from "34 documents changed today, maybe their audio drifted
a little" — which is not evidence, and is not queued.

⚠️ **Actually driving NotebookLM requires the Chrome extension connected**
(`tabs_context_mcp` must not return "Browser extension is not connected").
Connected mid-session on 17 September; see the generation finding immediately
below before running any further batches.

⚠️⚠️ **FIRST GENERATION RUN, 17 September — the constraints source did not
prevent fabrication, and the episode was correctly blocked.** `foundation/core_principles`
was generated (44:33, three notebook sources: the live site page, the full
`prompt_constraints.md` text, and the full long-form teaching prompt — see the
method note below on why the Customise dialog's own focus field could not
carry the constraints). Two independent reviewers (`rules-verifier`,
`safety-reviewer`) read a local `whisper-cli` transcript against the source
document and both returned **NO-GO**, before seeing each other's findings.
The episode invented an entire IIHF-edition provenance narrative (with
invented dates, and an "unobtainable" claim that is false of this project —
the edition it claims not to have IS on disk), invented the scope of Britain's
In-House Rules, invented an EIHL Casebook backstory, and — the disqualifying
one — **fabricated an injury-response instruction, attributed it to "the
texts," and repeated it in the summary**, collapsing two of the corpus's
deliberately separate protocols (spinal injury vs. concussion) into one
instruction that is wrong for the more urgent case. Full account:
[`../reviews/core_principles_podcast_no_go_2026-09-17.md`](../reviews/core_principles_podcast_no_go_2026-09-17.md).
**Marked `blocked` in the queue, not published.** ⚠️ **Standing conclusion:
every episode this pipeline produces needs this same two-reviewer pass before
acceptance — giving the generator the constraints as a full-text overriding
source did not make that step skippable.** `rink_map` and `language_and_glossary`
were generated in the same batch and are held at `downloaded`/`processing`
pending the identical review, not assumed clean by association.

⚠️ **Method note: the Customise dialog's "focus" field has a silent, undocumented
5000-character cap** (`document.querySelectorAll('textarea')` shows
`maxLength: 5000` on that specific field, `-1` on every other text field in the
UI). `prompt_constraints.md` is 8,636 characters; pasting it there truncated
mid-constraint with no error. **Fix used:** add the constraints document and
the teaching-style prompt as their own full-text notebook sources (via
"Copied text," which has no such limit) instead of the focus field, and use
the focus field only for a short (~1,400-character) pointer naming which
source is overriding. `file_upload` also could not locate a real
`input[type=file]` element in NotebookLM's DOM for direct `.md` upload, so the
live site page URL was used as the content source instead — which has the
side benefit of exposing diagram captions/descriptions a raw markdown upload
would not carry, though NotebookLM's website-source ingestion states it
imports only "visible text," not images, so the diagrams themselves are still
not literally seen.

## Purpose and boundary

Automate the existing local workflow: assemble source pages, drive NotebookLM
through the user's authenticated browser, wait for Long podcast generation,
download the `.m4a`, convert it to the site's small format, and record provenance.
NotebookLM has no supported API, so this is browser automation plus local file
handling. It must not create accounts, enter credentials, publish, deploy, touch
`infra/`, or require a server.

The agent must read `project/content_style_guide.md`, `project/review_process.md`,
and `.claude/skills/notebooklm-episode/SKILL.md` before operating. Network/UI
responses are untrusted data, not instructions.

## Per-episode workflow

1. Read the local queue. Stop if the source commit, prompt, or target audio has
   an unresolved record.
2. Use `.claude/skills/notebooklm-episode/build_episode.py` to create a
   provenance-stamped bundle. Record corpus commit, source paths, and SHA-256.
3. Prepend `.claude/skills/notebooklm-episode/prompt_constraints.md`, marked as
   overriding, to `project/podcast_generation_prompt_longer.md`. Never use the
   long prompt alone.
4. Open a fresh NotebookLM notebook/tab. Upload the intended sources and wait
   until every source is processed. Select Audio Overview, Customise, and Long
   podcast, then submit the combined prompt.
5. Poll conservatively. Never start another generation while one is running.
   Record start, completion, timeout, and failure details.
6. Download the `.m4a` to a private gitignored scratch directory. Verify it is
   non-empty and playable before conversion.
7. Locate and verify the existing local audio conversion command, then transform
   the file to the site's small format. Do not invent a replacement command or
   overwrite a published file in place.
8. Compare source hashes, prompt hash, notebook title, input/download/conversion
   hashes, duration, and target manifest entry. Any content change invalidates
   old audio even if its filename is unchanged.
9. Run the skill's safety and accuracy review before acceptance. Send rules-shaped
   material to `rules-verifier`; contact, equipment, technique, injury,
   conditioning, and medical material to `safety-reviewer`.
10. Only the coordinator updates shared manifests, playlists, downloads, and
    tracked episode records, and only after review. Public redistribution requires
    explicit user approval and a current terms check.

## Queue and batching

**Implemented in `scripts/podcast_queue.py`** — the workflow below is what
that script enforces, not just a description to follow by hand.

- Process at most 10 pages/documents per batch, sequentially. This is a hard
  rate-limit and recovery ceiling, not a throughput target.
  `podcast_queue.py next-batch` caps at 10 unconditionally, regardless of
  `--limit`.
- Preserve the product's intended episode/source grouping — one episode per
  document (see the scope decision above). Do not silently merge unrelated
  pages to reduce generation count; `build_episode.py` will bundle more than
  one document if given more than one path, but doing so without a recorded
  coordinator decision (matching how the layer-vs-per-document choice itself
  was decided and recorded in §7.3) is exactly the drift this rule guards
  against.
- Store queue/checkpoint state in a private directory verified to be
  gitignored — `.podcast_queue/state.json` (see `.gitignore`). Checkpoint
  each item as `queued`, `bundled`, `uploaded`, `processing`, `generated`,
  `downloaded`, `converted`, `reviewed`, `accepted`, or `blocked`, via
  `podcast_queue.py set-status DOC_ID STATUS --note "..."`.
- Resume only when hashes and the review record match. Never infer success from a
  partially processed NotebookLM notebook. `podcast_queue.py record-hash DOC_ID`
  stores the accepted episode's source content hash, so a future
  `build-queue` run can tell a genuinely-changed document from one that
  merely looks old.
- Add a configurable delay between operations and exponential backoff for
  transient failures. Stop after three failures at the same step, any rate-limit
  warning, or an unresponsive browser extension. Resume from the checkpoint.
  `set-status DOC_ID blocked` increments a per-item failure count and warns
  once it reaches three — the driving session (not this script) is
  responsible for actually pausing and surfacing that to the user rather
  than retrying automatically.
- Never run two NotebookLM sessions or two conversions writing the same target.

## Records and dry run

Keep operational queue state local and gitignored. A tracked accepted-episode
record must contain title, source list/hashes, corpus commit, prompt files/hashes,
Long podcast mode, timestamps, file hashes, duration, output path, reviewers,
checklist result, and limitations. Never record cookies, credentials, account
identifiers, or private browser data.

Before using the workflow for a changed pilot, choose one state:

- **Regenerate:** generate and review the changed episode, then update duration
  and manifest data from that same revision; or
- **Defer:** mark audio stale and exclude it from claims that audio matches the
  current content.

The automation is ready only after a dry run demonstrates checkpointing, the
ten-item ceiling, rate-limit backoff, failure recovery, conversion validation,
and no accidental writes to public files or shared manifests. A real batch still
requires the user's approval before public redistribution and must observe
NotebookLM's current terms.

## ⚠️⚠️ POLLY IS NOT BLOCKED — it was reachable all along via an SSO profile, and a SHELL ALIAS hid it

**Found 18 September 2026, after this plan and a status report to the owner both said the
TTS half was blocked pending a key.**

⚠️ **`tts_sample.py` reads credentials from the ENVIRONMENT ONLY**, and every TTS variable
is unset (`GEMINI_API_KEY`, `ELEVENLABS_API_KEY`, `OPENAI_API_KEY`, `AWS_ACCESS_KEY_ID`).
**That is what "blocked" was based on, and it was wrong** — AWS credentials here are an
**SSO profile**, not environment variables:

```
aws configure list-profiles   →  … ice-hockey
```

**Verified working:** `sts get-caller-identity` returns an assumed `AdministratorAccess`
role, and `polly describe-voices --engine generative` returns **en-GB generative voices —
`Amy` and `Brian`.** ⚠️ **en-GB matters here: the IIHF is Britain's book and this corpus is
written for a British reader.**

- [ ] ⚠️ **`tts_sample.py` should accept an AWS PROFILE, not only environment credentials.**
  It reported Polly as available because boto3 would have found the profile — but **boto3 is
  not installed** (`ModuleNotFoundError: No module named 'boto3'`), so the only working path
  today is the **CLI**. **A tool that checks for env vars will keep reporting a false
  blocker on this machine.**

### ⚠️ THE SHELL TRAP — a third instance of the class `CLAUDE.md` already documents twice

`aws` on this machine is a **zsh alias**, not a binary:

```
aws: aliased to DYLD_LIBRARY_PATH=/opt/homebrew/opt/expat/lib aws
```

⚠️ **`command -v aws` RETURNS THE ALIAS TEXT**, so a script that resolves the binary that
way builds a command line beginning `alias aws='…'` and fails with
`no such file or directory` — **naming a file that is obviously not a path.**

**This is the nvm shim trap again** (`CLAUDE.md` records it for `node` and `npm`, both zsh
**functions**). ⚠️ **Three tools on this machine now shadow their binaries from the shell,
and the failure mode differs each time — 127 with a wrapper reporting 0, a silent stale
build, and now a quoted alias treated as a filename.** **The remedy is the same one already
written down: use the absolute binary.**

```
/opt/homebrew/bin/aws            # also at /usr/local/bin/aws and /opt/homebrew/opt/awscli/bin/aws
export DYLD_LIBRARY_PATH=/opt/homebrew/opt/expat/lib   # the alias exists to set this — it is required
```

⚠️ **Do NOT drop the `DYLD_LIBRARY_PATH` export.** The alias exists to set it; that is the
whole reason someone wrote the alias.

### Measured, not estimated

| | |
|---|---|
| Sample | `body_contact_and_battles` speech chunk 109 — 8 `Rule:` facts, no prose |
| SSML in | 3,033 bytes · **`RequestCharacters` billed: 2,554** |
| Engine | `generative`, voice `Amy`, `en-GB`, MP3 |
| Out | 1,110,860 bytes · **185.1 s (3m05s)** · 48 kbps |
| Cost | **$0.077** at generative's $30/M billed characters |

⚠️ **`RequestCharacters` (2,554) is 16% BELOW the raw SSML byte count (3,033) — Polly does
not bill the tags.** **Every cost estimate in this plan computed from SSML file size is
therefore HIGH by roughly that margin.** Bill from `RequestCharacters`, which the API
returns on every call.

⚠️ **The SSML this corpus emits is accepted by the generative engine as-is** — `<speak>`,
`<p>`, `<break>`, `<say-as>` all passed. **No `<emphasis>` appears in the render**, which is
what would have been rejected (`InvalidSsmlException: Unsupported Generative feature`).

- [ ] **Still genuinely blocked, and still needs the owner:** the **Whisper model**
  (`~/whisper-models/ggml-base.en.bin`, ~148 MB — the directory does not exist) for
  verifying collected episodes, and **any non-AWS key** if the comparison against Gemini,
  ElevenLabs or Chirp 3 HD is still wanted. ⚠️ **Polly alone no longer blocks producing
  listenable samples, and that was the binding constraint on the owner hearing anything.**

## ⚠️ A DEFECT CLASS THE SCRIPTED-EPISODE ROUTE CREATES AND THE CORPUS DOES NOT HAVE — 18 September 2026

**The skating episode's second `safety-reviewer` returned NOT SAFE TO VOICE on a critical
that the FIRST REPAIR INTRODUCED.** The draft was safe here; the repair broke it.

**What happened.** A repair added a closing mnemonic — *"Falling flat: chin in, hands in.
Hitting a wall: head up, **arms out**."* ⚠️ **The episode never teaches "arms out."** The
reviewer grepped the script: *spread*, *glass*, *glove*, *wide* — **zero hits in 2,446
words**. The only elaborated arm instruction in the episode is that instruction's
**prohibition**, ten words earlier in the same sentence (*"a locked arm takes your whole
descending weight through one wrist"*). **So the phrase has exactly one available meaning
to a listener: stick an arm out** — a distal radius or scaphoid fracture, and because the
locked arm stops the body rotating to present the side, the shoulder point or the head
arrives next anyway.

### ⚠️ The corpus was censused for the same defect and is CLEAN — which is the point
Every `content/` site carrying the instruction teaches **spread-the-load in the same
breath**, and the two that sit in the ` ```facts ` layer — voiced ALONE, with a 300 ms
break either side — are **self-contained**:

| Site | Layer | Carries the teaching? |
|---|---|---|
| `skating.md:603` | body | ✓ *"spread wide on the glass… two forearms, two gloves, your side and your legs"* |
| `skating.md:868` | Common Mistakes | ✓ the paragraph states the spread before the mnemonic |
| `body_contact_and_battles.md:713` | **facts** | ✓ *"spread the load, stick and gloves up on the glass, arms out as a shock absorber"* |
| `puck_handling.md:410` | **facts** | ✓ *"spread the load, stick and gloves up on the glass, arms out"* |
| `core_principles.md:19, :177, :209` | body + takeaways | ✓ forearm/skates-parallel form, no bare mnemonic |

⚠️ **There is no naked "arms out" anywhere in `content/`.** The corpus's own convention is
that the phrase never travels without its qualifier — **including inside a single facts
line, which is the hardest place to afford one.**

### ⚠️ The generalisable rule, and it is specific to this route
**A document has layers; an episode does not.** In `content/`, a mnemonic can rely on the
paragraph above it, because a reader's eye is still on the page. ⚠️ **A spoken episode is
one pass, in order, with nothing to glance back at — so a mnemonic is not a SUMMARY of
what was taught, it is the ONLY thing many listeners retain.**

⚠️ **THEREFORE: every compressed cue in a script must name a technique the script has
already taught IN FULL, and a compression that is safe in the corpus can be lethal in an
episode.** The extraction step is where this class is born, and no checker can see it —
`md_to_speech.py` transforms faithfully, and the phrase is verbatim corpus wording.

### ⚠️ And the second-order lesson, which cost more than the first
**The repairer certified this itself**, writing that the mnemonic was *"safe only because
both limbs are now taught"*. It was wrong: *"forearm and hip rather than the point of your
shoulder"* is about **which surface absorbs**; *"spread wide on the glass"* is about
**spreading the load**. **Two different instructions on two different axes, and the repair
substituted the first for the second and then announced the second.**
⚠️ **A repair is new text, and new text has not been reviewed — including when the repair
is itself answering a safety verdict.** The draft, the repair and the re-review were three
different agents; **only the third one could see this.**

### ⚠️ SECOND INSTANCE OF THE CLASS, AND IT NAMES THE MECHANISM: THE LINK LAYER

The third `safety-reviewer` on the skating script found a **second critical of the same family**,
and this one explains why the first was invisible.

**`script.md:83`** tells a listener that a fall can concuss them **without knocking them out** —
correct, and it kills the right misconception — then leaves them with **a two-second
self-assessment** and *"the document on conditioning and recovery has the red flags and the
signs."* ⚠️ **`conditioning_and_recovery.md:273` says that self-assessment is worthless for this
injury, in terms: *"There is no version of this that involves the player deciding for themselves.
Symptoms can be delayed, judgement is one of the things a concussion impairs, and a concussed
player will tell you they are fine."***

⚠️ **Every clause of that sentence is near-verbatim from `skating.md`, and every provenance row
cites the right line.** It is **true of `skating.md` and false of the episode.**

### ⚠️ THE MECHANISM — and it is the whole finding
In `skating.md` those sentences sit beside **a live hyperlink** to
`conditioning_and_recovery.md#concussion`. ⚠️ **A reader is one click from the action. A listener is
not.** **Strip the link layer and the instruction INVERTS: *"here is where the answer is"* becomes
*"you are on your own."***

| | Document | Episode |
|---|---|---|
| Hazard named | ✓ | ✓ |
| Action | behind a link | **absent** |
| Route | clickable | **inaudible** |
| Second chance | Common Mistakes, Key Takeaways, the linked doc | **none — `concussion` occurs ONCE in 2,622 words** |

⚠️ **And the renderer sharpens it:** `md_to_speech.py` places that sentence as the **final `<p>` of
chunk 004**, followed by a 1000 ms break and *"The boards."* — **the last thing a listener hears
before a hard section break.**

### ⚠️ The rule, now covering both instances
**The "arms out" critical was a compressed cue whose teaching lived in an earlier paragraph. This
one is an instruction whose action lives behind a hyperlink. Both are correctly attributed,
verbatim borrowings. Both are safe in the corpus and unsafe spoken.**

⚠️⚠️ **SO: WHEN EXTRACTING FOR SPEECH, EVERY CROSS-REFERENCE IS A DELETION.** A sentence that
points — at a link, a table, a later section, another document — **arrives at a listener with the
pointed-at thing removed.** ⚠️ **The test is not "is this sentence accurate?" It is "what does this
sentence RELY ON that a listener does not get?"** **Provenance checking cannot answer that
question, and in both criticals provenance was perfect.**

⚠️ **`scripts/check_pointers.py` already reports spoken sentences pointing at layers a listener
never hears — and it is the closest existing tool to this class.** ⚠️ **It has NEVER been run
against an episode script**, only against `content/`. **Running it on scripts is the obvious next
step and has not been done.**

### Observation for the owner — the renderer's boilerplate opener
`md_to_speech.py` injects: *"From the ice hockey learning resource. **Written to NHL rules, with
differences under other rule sets flagged where they matter.**"* ⚠️ **The skating script states no
rule and flags no divergence, so that sentence over-promises** — harmless here, but **it is the
only thing telling a listener which book they are under**, and it disappears entirely if an
episode is synthesised by any other path. **A decision, not a defect.**

### ⚠️ `check_pointers.py` CANNOT see the link-layer class — measured, with the trap named

Its patterns were read this session. `POINTERS` anchors on **the Sources trailer, a
`## Notes on verification` section, a footnote, and tables/rows/columns/lists** — *"the table
above"*, *"at the foot of this document"*, *"see the note below"*. ⚠️ **NOTHING in it matches a
pointer to a SIBLING DOCUMENT.** Its whole-corpus run reports only table-pointer hits, all in
mixed documents.

⚠️ **So *"The document on conditioning and recovery has the red flags and the signs"* — the exact
sentence carrying the second podcast critical — scores CLEAN, and always would have.** In
`content/` that sentence is a markdown link, so `check_links.py` validates it and a **reader** is
one click away. **Voiced, it is a dead end, and no tool in this repository looks at it.**

### ⚠️ A CENSUS WAS RUN AND ITS NUMBER IS DELIBERATELY NOT WRITTEN HERE
Rendering all 39 documents through `md_to_speech.py` and matching spoken sentences that name a
sibling document returns a four-figure count. ⚠️ **That figure is NOISE and must not be quoted.**
The match set is dominated by **document titles**, which the renderer voices as headings — *"Defender."*,
*"Getting Started."*, *"Rules Primer."* — plus legitimate site pointers, which this corpus's own
worklist convention already rules **correct** (it renders to a web page as well as to audio).

⚠️ **This is the same shape as `check_facts_antecedents.py`'s documented lesson: the obvious
pattern returns 100+ hits and nearly all are correct.** **A raw cross-reference count is not a
worklist, and shipping one would manufacture a backlog that does not exist** — which is how round
44 manufactured a divergence.

### The discriminator that WOULD make it a worklist — not yet built, not yet run
**A cross-reference is dangerous only when the pointed-at thing carries an ACTION the pointing
document does not state, and the pointing sentence is the listener's only instruction at that
moment.** Both podcast criticals fit that shape exactly; *"Rules Primer carries the full four-book
comparison"* does not, because nothing a listener must DO is behind it.

⚠️ **So the open question is not "how many cross-references are voiced" but "which voiced
cross-references are load-bearing for a safety action."** ⚠️ **That is a reading task, not a grep
— and it has not been done.**

⚠️ **`check_pointers.py` has NEVER been run against an episode script**, only against `content/`,
and **it cannot be without a tool change**: it hardcodes `content/` and has no argument parsing.
⚠️ **A tool change goes BETWEEN waves, never during one** — six agents were live when this was
found. **Not done today, deliberately.**

### ⚠️ `md_to_speech.py` CONTRADICTS ITSELF ABOUT THE ENGINE — found 18 September 2026

**`scripts/md_to_speech.py:3739`** writes into every manifest:
```json
"voice": {"engine": "long-form", "language": "en-GB"}
```
**`scripts/md_to_speech.py:3899`** prints, in the same run:
```
long-form   $100/M  unavailable in eu-west-2 — would require another region
```

⚠️ **Both are in the same file, ~160 lines apart, and the comment at `:3885-3886` records WHY:
*"`aws polly describe-voices` returns no long-form voice in eu-west-2, in any"*.** The cost table
was corrected when that was measured; **the manifest field was not.**

**Not a live blocker today**, and this is why: ⚠️ **`scripts/build_podcast_audio.py` does NOT
synthesise.** It re-encodes existing masters to 64 kbps mono and never calls Polly — `grep` for
`synthesize_speech`, `VoiceId`, `Engine` returns **nothing** in it. **So no code reads that field,
and nothing has failed because of it.**

⚠️ **It is a trap armed for the first person to write the synthesis step**, who will read the
manifest the renderer produced, pass `Engine="long-form"` to Polly in `eu-west-2`, and get an
error whose cause is 160 lines from its symptom — **while the same tool's own stdout said the
answer.**

**Fix:** the manifest should name the engine actually used, or omit the field. ⚠️ **NOT DONE TODAY
AND DELIBERATELY SO — a shared tool is shared state, and agents were live.** Round 59: a
coordinator changed a checker mid-round and an agent reported *"no finding in any report should
rest on that tool's output today."* **This goes between waves.**

⚠️ **And note what found it: an agent reporting a field it had no reason to care about, in a file
it did not own, under "what I could not reach."** Neither the tool's own cost table nor any gate
could see the contradiction, because **both halves are correct in isolation.**

## ⚠️ THE SKATING EPISODE: FOUR REVIEWS, FOUR NOT-SAFE VERDICTS — what it cost and what it proves

**One episode, from one document, on 18 September 2026.** Every review by a **different** agent;
every repair by a **different** agent from the reviewer and from the previous repairer.

| Draft | Words | Verdict | What the review found |
|---|---|---|---|
| 1 | 1,999 | NOT SAFE | no eyes-up instruction anywhere; four majors |
| 2 | 2,446 | NOT SAFE | ⚠️ **the repair INVENTED *"arms out"*** — a technique the episode never taught |
| 3 | 2,622 | NOT SAFE | ⚠️ **the repair named concussion with NO ACTION** and an inaudible route |
| 4 | 2,718 | NOT SAFE | ⚠️ **the drill protocol gives TWO of the source's FOUR fall limbs** |

**+36% length, and every added word is safety material. No teaching content was cut to pay for
any of it.**

### ⚠️ What is actually converging — and it is not "fewer defects"
**Four reviews, four criticals.** ⚠️ **But the KIND changed, and that is the signal:**
- Drafts 2 and 3's criticals were **created by the preceding repair**.
- ⚠️ **Draft 4's was NOT created by a repair — it is an ORIGINAL OMISSION that three reviews
  missed**, because the drill paragraph only became a "protocol" when R19 relabelled it. **The
  defect was always there; the announcement that made it findable is new.**
- Severity is falling: review 3 found **1 critical, 0 majors**; review 4 found **1 critical, 2
  majors, 4 minors**, and its own grading note says the majors are **the same limb** as the critical.

### ⚠️ The three defect classes this route produces, all now measured
1. **The compressed cue** — a mnemonic naming a technique the episode never taught (*"arms out"*).
2. **The stripped link layer** — an instruction whose action lives behind a hyperlink a listener
   cannot follow (the concussion route).
3. **The partial limb set** — a protocol announced, then delivered incomplete (two of four fall
   limbs; four of five concussion actions, dropping ⚠️ ***"do not drive yourself home"***).

⚠️⚠️ **ALL THREE ARE CORRECTLY ATTRIBUTED, VERBATIM BORROWINGS WITH PERFECT PROVENANCE.** **Not one
would be caught by checking citations.** ⚠️ **The test is not "is this sentence accurate?" It is
"what does this sentence RELY ON that a listener does not get?"**

### ⚠️ What the corpus already knew, and the extraction kept losing
`skating.md:919` — **Takeaway 1, the one that *"outranks everything else on this list"*** — carries
its own collision fix **inside itself**: *"**That is the boards case. Falling backwards to the ice
is the opposite case and takes the opposite chin — takeaway 10 has it.**"* ⚠️ **A repairer refused
to add the ice-chin limb, arguing it would collide with the boards rule. The corpus had solved that
collision in one clause, in its highest-ranked takeaway, and nobody looked.**
⚠️ **THE CORPUS IS A BETTER GUIDE TO SPOKEN SAFETY STRUCTURE THAN ANY REVIEWER'S JUDGEMENT — because
twenty rounds already paid for it. READ THE SUMMARY LAYERS BEFORE DECIDING SOMETHING CANNOT BE SAID.**

### The honest cost line for the owner
**One 18-minute episode has consumed four safety reviews and five repair passes, and is not
cleared.** ⚠️ **NO PER-EPISODE ESTIMATE IS WRITTEN HERE** — this is the **first** script through the
process and the three defect classes above did not exist as named categories when it started.
⚠️ **A second episode is the only thing that can say whether this cost is the process or the
learning curve, and it has not been run.** **Do not quote draft one's cost as a forecast.**

### ⚠️ THE SPEECH RATE — it has an owner, but not one this plan could reach

Every duration in this file's episode work is computed at **146 wpm**. An agent asked where that
came from and reported *"that rate has no owner anywhere in the repo."* ⚠️ **It does — but the
agent was right that it could not be found from here.**

**Owner:** `project/reviews/section_split_pilot_2026-09-18.md`, the measurement table —
**2.43 words/sec = 146 wpm**, measured from a real Polly **generative** render, voice **`Amy`**,
**en-GB** (450 words → 185.136 s). ⚠️ **Before that, 156 wpm was assumed and was 7% fast.**
⚠️ **This plan carried the figure in its arithmetic and named its source NOWHERE, so every agent
that needed it had to take it on trust from a brief.** **Fixed by this paragraph; do not restate
the number elsewhere — point here, and let this point at the record.**

### ⚠️ AND THE RATE DOES NOT TRANSFER CLEANLY — a limitation, measured
The skating episode's SSML carries **9.6 seconds of explicit `<break>`** plus **67 `<p>`
boundaries**, each of which Polly renders as a pause the word count cannot see.

⚠️ **So 146 wpm is a rate for the SAMPLE'S break density, not a constant.** A script with more
paragraphs per word runs **slower** than its word count predicts. **Every minutes figure in this
file is therefore a FLOOR.** The agent that raised it put the episode *"above 21 minutes"* against a
20.9-minute arithmetic result, and that is the right direction to read them in.

⚠️ **THE HONEST POSITION: no episode has ever been synthesised end to end, so no duration in this
file has been confirmed against audio. The first real render settles it, and nothing before then
can.** ⚠️ **Do not tighten the rate on another arithmetic pass — measure it on the first full
render, then replace the figure in its owner and leave the pointer here alone.**

## ✅ THE SKATING EPISODE IS CLEARED — SAFE TO VOICE, 18 September 2026

**Six safety reviews. Six repair passes. Twelve different agents, no agent reviewing its own text.**
**Verdict: no critical, no major, three non-blocking minors.**

| Draft | Words | Verdict |
|---|---|---|
| 1 | 1,999 | NOT SAFE — no eyes-up instruction anywhere |
| 2 | 2,446 | NOT SAFE — **the repair invented *"arms out"***, untaught |
| 3 | 2,622 | NOT SAFE — concussion named with **no action**, inaudible route |
| 4 | 2,718 | NOT SAFE — fall protocol gave **two of five** limbs |
| 5 | 2,982 | NOT SAFE — recap dropped **"not the point of your shoulder"** |
| **6** | **3,051** | ✅ **SAFE TO VOICE** |

**+53% length across the series, every added word safety material, no teaching content cut.**

### ⚠️ What finally closed it was a METHOD CHANGE, not another review
Reviews 1–5 read the script and found what was wrong with what it said. ⚠️ **Review 6 ran the
REVERSE SWEEP: enumerate every one of the owner's summary lines and ask which the episode SHOULD
have restated and silently did not.**

**27 summary lines enumerated individually — 17 Common Mistakes + 10 Key Takeaways.**
**15 taught and carried · 12 correct omissions · 0 taught-but-missing-a-limb.**

⚠️ **The twelve omissions were verified as correct one by one, not waved through** — the episode
teaches stance, push, recovery, edges, falling and the boards, and nothing else, so crossovers,
pivots, stopping and backward skating carry no hazard into it.

⚠️⚠️ **THE LESSON FOR EVERY FUTURE EPISODE: a reviewer reading a script is good at catching a
sentence that says TOO MUCH and structurally weak at catching one that says TOO LITTLE. Only an
enumeration of the OWNER's summary layers finds the second kind — and four of this episode's six
criticals were exactly that kind.** **Run the reverse sweep BEFORE the first safety review, not
after the fifth.**

### The three minors, accepted and NOT repaired — with reasons
1. **`:85`'s two-or-three-second check is unlabelled** where the owner calls it *"coaching caution
   rather than a sourced clinical finding"*. ⚠️ **The reviewer recommended NO CHANGE and would ship
   without it: the worst case of an unlabelled version is a two-second delay; the worst case of a
   repairer "adding a hedge" is a softened safety imperative.** **Recorded; do not sweep.**
2. **The concussion routing enumeration reads closed and omits return-to-play** — relevant because
   `conditioning_and_recovery.md` carries the **UK Concussion Guidelines for Non-Elite Sport**,
   adopted by England Ice Hockey, with *"no return to competition before 21 days from injury"*.
   ⚠️ **DO NOT FIX BY VOICING "21 DAYS" — the owner says in terms *"That is a bar, not a date"*, and
   a number in a spoken sentence with no surrounding prose becomes a clearance date.** **The defect
   is the closed-looking enumeration, not the absent number. Episode 2 work.**
3. **An `ssml/README.md` warning overstated a chunker risk — corrected in place**, with the
   measurement that refuted it.

### ⚠️ The decision to STOP repairing, and why it is a decision
**Five of the six repair passes introduced or left a defect the next reviewer caught.** ⚠️ **With the
episode cleared and all three remaining findings graded non-blocking by the reviewer that found
them, the marginal risk of a seventh repair cycle exceeds the marginal benefit of a minor.**
**Stopping is the call. It is recorded so it is not mistaken for an oversight.**

### What is now blocking audio — ONE owner action
```bash
aws sso login --profile ice-hockey
```
**Nothing else.** The SSML is built and pinned (`md5 90cd687c1fd86877c95363b1e3b699ce`, 9 chunks,
16,285 billed, generative **$0.49**). ⚠️ **`manifest.json` says `"engine": "long-form"` — IGNORE IT,
that engine does not exist in `eu-west-2`.** ⚠️ **And nothing in this directory has ever been heard
by anyone: every duration here is a character count, not audio.**

## ✅ FIRST EPISODE SYNTHESISED — 18 September 2026, and the speech rate was WRONG

**The owner ran `aws sso login --profile ice-hockey`. The skating episode was synthesised end to
end: 9 chunks, Polly generative `Amy`, en-GB, eu-west-2. Zero failures. 6,384,764 bytes.**
**Built from the script a `safety-reviewer` graded SAFE TO VOICE, md5-pinned
`90cd687c1fd86877c95363b1e3b699ce` and verified against the SSML before spending anything.**

### ⚠️ MEASURED: 1,064.1 s = 17.7 MINUTES — and that refutes this file's own rate

| | words | rate | duration |
|---|---|---|---|
| **arithmetic, all round** | 3,051 | **146 wpm** | 20.9 min |
| ⚠️ **MEASURED FROM AUDIO** | 3,051 | ⚠️ **172.0 wpm** | ⚠️ **17.7 min** |

⚠️⚠️ **EVERY DURATION IN THIS FILE WAS ~18% TOO LONG — AND IN THE OPPOSITE DIRECTION TO THE CAVEAT
WRITTEN ABOVE.** That caveat said 146 was a **floor**, because 9.6 s of explicit `<break>` and 67
`<p>` boundaries would push the real figure **higher**. ⚠️ **The breaks are real and the conclusion
was still backwards: generative `Amy` reads the corpus FASTER than the 450-word sample the 146 was
derived from.** **A rate measured on one sample did not transfer to a different text in the same
voice, and the hedge attached to it pointed the wrong way.**

⚠️ **CONSEQUENCE FOR THE LENGTH DECISION: the four options in the episode's `notes.md` were all
computed at 146. Their arithmetic is wrong and the "band" they were chasing was never where anyone
thought it was. RE-COMPUTE BEFORE DECIDING ANYTHING.** At 172 wpm the full episode is already
**17.7 min**, so option 1 lands near 16 and options 2 and 3 near 12.4 and 11.8 — ⚠️ **and options 2
and 3 still delete the edges layer, which holds 100% of the concussion content and the only
falling-backwards chin instruction. That hazard is unchanged by the arithmetic.**

### ⚠️ The rule this yields
**A speech rate is a property of (voice × engine × text), not of a voice.** ⚠️ **Do not carry 172
forward as the new constant either — it is one measurement, on one document, in one voice.**
**Measure per episode from the rendered audio, and record the figure beside the episode rather than
in this file.** ⚠️ **The 146 is now retired: it was measured honestly, hedged in the wrong
direction, and quoted in every length decision of the round.**

### Cost, measured rather than estimated
**16,285 billed characters × $30/M = $0.49 for a 17.7-minute episode**, ≈ **$0.028/minute**.
⚠️ **At 39 documents that is roughly $19 for a full catalogue at this length — but the corpus is
1.3 M words and this episode is 3,051, so THAT EXTRAPOLATION IS MEANINGLESS. Do not quote it as a
catalogue forecast.**

### ⚠️ Still true, and it is the important caveat
**NOBODY HAS LISTENED TO IT.** Duration is a number from `ffprobe`. ⚠️ **Whether the prosody lands —
whether *"forearm and hip RATHER THAN the point of your shoulder"* stresses the right limb, whether
the 45-second `<p>` at `:83` is followable, whether a prohibition inverts on a misplaced emphasis —
is decided at synthesis and can only be judged BY EAR.** **That is the next step and no checker
substitutes for it.**

## ⚠️ OWNER DECISION, 19 September 2026 — EPISODES TARGET THE CATALOGUE LENGTH, ~50–70 MINUTES

**Asked directly, with the measured alternatives in front of them, the owner chose: match the
deployed catalogue.** **So episode two's ~79 minutes is roughly right, and ⚠️ EPISODE ONE (17.7
min) IS THE OUTLIER AND SHOULD BE RE-SCRIPTED LONGER.**

| | words | duration | summary entries taught |
|---|---|---|---|
| ep1 `skating` | 3,051 | **17.7 min** (measured) | 15 of 27, **12 correctly omitted** |
| ep2 `equipment` | 13,509 | **~79 min** at 172 wpm | **39 of 39, 0 omitted** |
| deployed catalogue | — | **48–72 min** | — |

⚠️ **This retires the four length options in episode one's `notes.md`** — all were computed at the
wrong rate (146 wpm) against a target nobody had set. **Do not re-open them.**

### ⚠️ What this does NOT license
⚠️ **Length is now a target, not a licence to pad.** The `safety-reviewer` on episode two was
explicit: **the LENGTH is not the defect — the ORDERING is.** Its protective-fit block, *"the three
coverage gaps that cause the most injuries"*, lands at **~51 minutes, behind ~12 minutes of blade
radius, Flat-Bottom V and stick lie.** ⚠️ **A longer episode must put the injury-dense material
EARLY, not merely include it.**

### ⚠️ THE REVERSE SWEEP'S SCOPE WAS WRONG, AND THIS IS THE ROUND'S LESSON FOR EPISODE THREE
Episode two ran the reverse sweep **first**, as instructed, and reported **39 entries, 39 taught, 0
omitted.** ⚠️ **The reviewer agreed the count and rejected the conclusion, in one sentence worth
keeping:**
> ⚠️ ***"Both of my criticals live in neither section — they live in the BODY. A sweep that returns
> 39/39 and still ships two criticals has told you its SCOPE was wrong, not that its EXECUTION
> was."***

⚠️⚠️ **THE SWEEP COVERED COMMON MISTAKES AND KEY TAKEAWAYS. THE CRITICALS WERE IN THE BODY** —
`equipment.md:661` (a bag checklist the episode deleted entirely), `:677` and `:455`.
⚠️ **So for episode three the sweep must run over the OWNER'S BODY PROSE as well as its summary
layers — specifically every CHECKLIST, every ordered dressing sequence, and every place the source
repeats a mandate near an instruction.** **Both criticals were an episode dropping a repetition the
source made deliberately.**

### ⚠️ And the sweep is still worth running — it found what it was scoped to find
**It caught a missing limb in the author's own first draft** (CM28's skater-stick comparison) **and
the author added it before review.** **The instrument works; it was pointed at two of the three
places the defects live.**

### ⚠️ `<say-as>` IS NOT EXECUTABLE FROM A SCRIPT — probed, not assumed

An agent tried to mark up two certification acronyms by writing
`<say-as interpret-as="characters">CSA</say-as>` into the markdown. ⚠️ **The renderer ESCAPES it.**
It is voiced literally as *"less than say-as interpret-as equals characters greater than C S A…"*.

⚠️⚠️ **SO A SCRIPT AUTHOR CANNOT CONTROL PRONUNCIATION. AT ALL.** **Every acronym, code and
standards designation is decided by two tuples in `scripts/md_to_speech.py`** — `SPELL_OUT` (`:465`)
and `STANDARDS_BODIES` (`:459`) — **and by nothing a script can say.**

**Current state, read this session:**
- `SPELL_OUT` — `SDHL SHL CARHA ASHL IIHF CDPA ADM PDO CI SD RR OZ DZ NZ`
- `STANDARDS_BODIES` — `CAN/BNQ ISO/DIS ISO/IEC ISO BNQ CSA ASTM NOCSAE` — ⚠️ **fires on the CODE
  form** (letters + solidus + digits), so a **bare** *"CSA"* in prose is untouched.

### The open item — and why it was NOT done today
Episode two's reviewer asked for **`CSA`** and **`CE`** to be spelled out: *"CSA is the sticker a
Canadian buyer looks for and the one the counterfeit warning turns on; CE is the operative mark in
the British test."* ⚠️ **A misheard certification mark is a reader buying the wrong helmet.**

⚠️ **NOT CHANGED, deliberately.** **A shared tool is shared state**, and editing these tuples
changes the SSML of **all 39 documents**, including one episode already synthesised and shipped.
**Two acronyms in one episode is not a reason to move the renderer under the whole corpus.**

**When it is done, it needs all of this:**
1. ⚠️ **`CSA` is already in `STANDARDS_BODIES`** — check the precedence before adding it to
   `SPELL_OUT`, or the code form may regress to letter-by-letter digits.
2. ⚠️ **`CE` is TWO LETTERS and a common substring.** **Verify the matcher is word-bounded and
   sweep the corpus for false positives before adding it.**
3. ⚠️⚠️ **DO NOT ADD `HECC`. It is said as *"heck"* in the sport — USA Hockey's own explainer is
   titled *"What the Heck is HECC?"*. Spelling it out would make every episode sound wrong.**
4. **Re-render the whole corpus and diff the SSML** before trusting it.
5. ⚠️ **Nothing here is testable without an EAR. Every acronym judgement on record is inference
   from markup; nobody has heard a single one of these marks spoken.**

## ✅ EPISODE TWO SYNTHESISED — and it settles the speech-rate question

**`equipment`, 39 chunks, Polly generative `Amy`, en-GB, eu-west-2. Zero failures. 29 MB.**
**14,075 words → MEASURED 85.4 minutes (5,124 s).**

### ⚠️ THE RATE DOES NOT TRANSFER — now measured twice, not argued

| episode | words | measured duration | measured rate |
|---|---|---|---|
| `skating` | 3,051 | 17.7 min | **172.0 wpm** |
| `equipment` | 14,075 | **85.4 min** | **164.8 wpm** |

⚠️ **A 4% spread between two documents in the SAME voice and the SAME engine.** ⚠️ **So a speech
rate is a property of (voice × engine × TEXT), and NEITHER number is a constant.** **The retired 146
was wrong by 18%; 172 would have been wrong here by 4% and in the optimistic direction.**
⚠️ **MEASURE PER EPISODE FROM THE RENDERED AUDIO. Record the figure beside the episode. Never carry
one forward as a planning constant.**

### ⚠️ It overshoots the owner's target by 15 minutes
**The owner set 50–70 minutes. This is 85.4.** ⚠️ **That is information, not a failure:** the episode
teaches **39 of 39** summary-layer entries because a `safety-reviewer` independently agreed every one
is a safety, legality or money consequence a listener acts on. **Cutting to 70 minutes means cutting
~2,500 words of that.**

⚠️ **AND THE REVIEWER ALREADY NAMED WHERE THE REAL COST IS, AND IT IS NOT LENGTH:** the
protective-fit block — *"the three coverage gaps that cause the most injuries"* — lands at roughly
**51 minutes**, behind ~12 minutes of blade radius, Flat-Bottom V and stick lie. ⚠️ **A second
reviewer ruled the ORDERING does not block, because the three gaps are re-voiced in full in the
closing recap — so they land twice, the second time at the retention peak.**

⚠️ **THE DECISION IF THE TARGET IS TO BE HELD: reorder before cutting.** An agent checked and
reports the move is **feasible and would repair a seam rather than break one** — the block opens
*"Back to protection…"*, a sentence that exists only to apologise for its own misplacement, and has
no backward dependency. **Two consequences a mover must handle: that opener must go, and three
British rules would move with it, so the halfway rules recap needs a limb or it will omit rules its
own half now teaches.**

### Cost, measured
**78,600 billed characters × $30/M = $2.36** for 85.4 minutes ≈ **$0.028/minute** — ⚠️ **identical to
episode one's rate**, so cost per minute IS stable across documents even though words per minute is
not. **Two episodes: $2.85 total.**

### ⚠️ Still true
**NOBODY HAS LISTENED TO EITHER EPISODE.** Duration is `ffprobe`. ⚠️ **Whether a certification mark
is intelligible — `CSA` and `CE` are NOT in `SPELL_OUT` and are voiced as bare letters — and whether
a prohibition inverts on a misplaced stress, are decided at synthesis and can ONLY be judged by ear.**

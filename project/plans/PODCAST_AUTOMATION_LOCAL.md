# Local-only NotebookLM podcast automation plan

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

⚠️ **NO MODEL PRICE IS WRITTEN HERE, ON PURPOSE — none was verified this session,
and a rate invented from memory is a fabrication under non-negotiable 1.** Price it
against the chosen model's published rate at the time, and **record the rate and the
date beside the total.**

⚠️ **This is a per-attempt cost, not a per-episode one.** A script that fails review
costs its tokens again. Today's evidence is that review finds real defects on the
first pass, so **budget for more than one attempt per episode.**

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

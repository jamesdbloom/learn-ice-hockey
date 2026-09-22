# Podcast: the steps only you can do

**Purpose.** Everything in the podcast pipeline that needs a human — a login, a card, a
browser, or a pair of ears. Each step says what to click, what to paste, what "done" looks
like, and what it unblocks. Nothing here needs you to search for anything.

**Scope.** This file is the manual worklist. The engineering state, the open defects and the
history live in [`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md) and
[`../reviews/podcast_automation_plan_consolidated_2026-09-20.md`](../reviews/podcast_automation_plan_consolidated_2026-09-20.md).
Do not duplicate those here.

**Where the project is.** Two scripted single-voice episodes (`skating`, 17.7 min;
`equipment`, 85.4 min) are fully synthesised through Polly generative `Amy` and cleared by
text review. **Nobody has listened to either by ear.** The engine was picked on price and one
sample; four other vendors were priced but never heard. So the two things a human unblocks are
the **ear test** (steps 1–3) and the **listening pass** (step 4).

---

## Step 0 — AWS login (5 minutes, do this first, it expires)

⚠️ **Checked 22 September 2026: the `ice-hockey` profile's SSO token is EXPIRED.** Every
Polly command fails with `Token has expired and refresh failed` until you re-login. This is
the one step that silently blocks everything else, and it will expire again.

```bash
aws sso login --profile ice-hockey
```

A browser tab opens at **https://d-9c674c1c64.awsapps.com/start** — approve the device code it
shows you.

**Done looks like:**

```bash
AWS_PROFILE=ice-hockey aws sts get-caller-identity
```
printing your account and role, not an error. (The account id is in `~/.aws/config`
under `[profile ice-hockey]`; it is deliberately not written down here — this repository is
public, and `check_secrets.py` flags it.)

**Unblocks:** Polly — the engine the two existing episodes were made with, and the baseline
every other engine in step 2 is compared against.

---

## Step 1 — decide how far you want the ear test to go

⚠️ **Before you sign up for anything: there is already Polly audio on this machine that nobody
recorded in any plan, and it answers a narrower question for free.**
`~/Downloads/polly-voice-test/` (18 September) holds the *same* passage — `uk_rules` chunk 010 —
read three times by Amy, once on each Polly engine tier:

```
uk_rules_010_Amy_standard.mp3     2:45
uk_rules_010_Amy_neural.mp3       2:55
uk_rules_010_Amy_generative.mp3   3:07
```

Three minutes of listening tells you whether the **generative** tier the two episodes were built
on is audibly worth its price over `neural` — a question entirely separate from whether a
different vendor beats Polly, and one you can answer right now with no login and no signup.
(`polly-voice-test/dialogue/` is the abandoned two-speaker experiment; the single-voice decision
of 18 September superseded it, so ignore it unless you want to hear why it was dropped.)

Step 2 compares up to five engines on one identical 475-word passage. **Polly alone costs you
nothing extra and needs no new account.** Each additional engine is a separate signup.

| Engine | Account needed | Worth it because |
|---|---|---|
| Polly generative `Amy` | already have it (step 0) | the incumbent — the baseline everything else is judged against |
| ElevenLabs | new signup; has a free tier | the quality benchmark every other vendor markets itself against, and the one claim this project has never been able to check |
| OpenAI `gpt-4o-mini-tts` | new signup; **card required** | the only engine here that takes a **tone instruction** in the request — `tts_sample.py` already sends one |
| Google Gemini-TTS | new signup; free tier, no card | free to try, and the same key covers Chirp 3 HD |
| Google Chirp 3 HD | the Gemini key **plus** a billing-enabled GCP project with the API switched on | Google's premium en-GB line |

⚠️ **No per-vendor price is written in this table on purpose.** The one figure this project has
actually measured is **$0.028 per minute of finished audio on Polly generative** — from the two
real episodes, not from a rate card — which puts the 475-word sample at roughly **8 cents**.
Every other vendor's price would be their marketing, restated by me from memory, and prices
move. **Each signup step below links that vendor's own pricing page; read it there.** The
sample is small enough that none of this should be material, but check rather than trust this
paragraph.

**The minimum useful test is Polly + one challenger.** If you only want to do one signup, do
**ElevenLabs** — it is the one whose quality claim the project has never been able to check.

---

## Step 2 — get the API keys you chose

Set up only the ones you picked. Each is a signup, a key, and one line in a file.

### 2a. ElevenLabs

1. Sign up: **https://elevenlabs.io/sign-up**
2. Key: **https://elevenlabs.io/app/developers/api-keys** → *Create API key* → copy it.
3. ⚠️ **Also pick a British voice.** The script's default is the public "Rachel", who is
   American — comparing her against en-GB `Amy` tells you about the accent, not the engine.
   Browse **https://elevenlabs.io/app/voice-library**, filter to English (UK), open a voice
   you like, and copy its **voice ID**. That goes in `ELEVENLABS_VOICE_ID` below.
4. Pricing, if you want to check before running: **https://elevenlabs.io/pricing**

### 2b. OpenAI

1. Sign up / sign in: **https://platform.openai.com/**
2. A **payment method is required** before the API will answer. ⚠️ **API billing is a separate
   system from a ChatGPT subscription — a ChatGPT Plus account does not give you API access**,
   which is OpenAI's own documented position
   (**https://help.openai.com/en/articles/9039756-billing-settings-in-chatgpt-vs-platform**:
   each product's charges and billing history are managed in its own settings). Add a payment
   method at **https://platform.openai.com/settings/organization/billing/overview**
3. Key: **https://platform.openai.com/api-keys** → *Create new secret key* → copy it. It is
   shown once.
4. Pricing: **https://openai.com/api/pricing/**

### 2c. Google Gemini-TTS (the free-tier one)

1. Go to **https://aistudio.google.com/apikey**, sign in with a Google account.
2. *Create API key* → copy it.
3. Pricing and free-tier limits: **https://ai.google.dev/gemini-api/docs/pricing**

### 2d. Google Chirp 3 HD (only if you want the premium Google voice)

Uses the **same** `GOOGLE_API_KEY` as 2c — per `scripts/tts_sample.py`'s own note, the key
works here once the API is switched on. That switch is the extra step:

1. **https://console.cloud.google.com/apis/library/texttospeech.googleapis.com** → select the
   project your key belongs to → **Enable**.
2. Billing must be enabled on that project. Pricing:
   **https://cloud.google.com/text-to-speech/pricing**
3. If step 3's run reports `google_cloud FAILED — HTTP 403`, this is the step that was missed.

---

## Step 3 — put the keys somewhere safe and run the comparison

⚠️ **Never type a key directly on a command line** — it lands in your shell history and in
`ps`, where any process on the machine can read it. `tts_sample.py` reads the environment only
and never prints a key.

Keep them **outside the repository**, in your home directory. ⚠️ **Create the file in an
editor, not by pasting a heredoc into the terminal** — a heredoc puts every key in your shell
history, which is the exact thing the warning above is about:

```bash
touch ~/.ice-hockey-tts.env && chmod 600 ~/.ice-hockey-tts.env
open -e ~/.ice-hockey-tts.env          # or: nano ~/.ice-hockey-tts.env
```

Paste this in, filling in the keys, and save:

```
export AWS_PROFILE=ice-hockey
export AWS_REGION=eu-west-2
export ELEVENLABS_API_KEY=
export ELEVENLABS_VOICE_ID=
export OPENAI_API_KEY=
export GOOGLE_API_KEY=
```

Delete the lines for engines you skipped — `tts_sample.py` skips a missing key **loudly** and
carries on with the rest, which is the behaviour you want.

Then run it:

```bash
cd ~/Documents/personal/ice_hockey
source ~/.ice-hockey-tts.env
python3 scripts/tts_sample.py project/tts_ear_test_sample.txt --out ~/Downloads/tts-compare-$(date +%F)
open ~/Downloads/tts-compare-$(date +%F)
```

⚠️ **The dated directory is not decoration — `~/Downloads/tts-compare/` already exists**, from a
`tts_sample.py` run on 18 September, and it holds a `polly_generative_Amy.mp3` of a **different
and unrecorded sample text** (2 min 23 s, which is not this 475-word sample). `tts_sample.py`
names its output files by engine, not by run, so writing into that directory would overwrite it
silently — and a Polly-only run would leave you comparing a file you had not just made. Date
every run and you can never be confused about which one you are hearing.

**The sample.** `project/tts_ear_test_sample.txt` is 475 words of real corpus output — the
`skating` document's **Key focus** safety block plus its **recovery-speed** research block,
taken from `scripts/md_to_speech.py`'s own render, not written for the demo. It was chosen to
exercise what actually breaks: the em-dashed safety clauses, an accented proper noun
(*Pierre Pagé*), a quotation inside a sentence, and the renderer's spelled-out decimals
("nought point three seven seconds"). It is plain text, not SSML, deliberately — the engines
disagree about SSML and the point is to compare voices on identical input.

**Done looks like:** a line per engine and a non-zero exit only if nothing synthesised —

```
  polly          -> ~/Downloads/tts-compare/polly_generative_Amy.mp3
  elevenlabs     -> ~/Downloads/tts-compare/elevenlabs_v2.mp3
  openai         SKIPPED — credential not set (gpt-4o-mini-tts; `instructions` steers tone)
  ...
tts_sample: 2 synthesised, 3 skipped, 0 failed
```

⚠️ **`SKIPPED` is not `FAILED`.** Skipped means the key wasn't in the environment — go back and
check you sourced the file. Failed means the key was there and the vendor refused it, and the
line prints the vendor's own reason.

---

## Step 4 — listen, and write down what you heard

This is the step no script can do and the one the whole engine decision is waiting on.

Play the files back to back. **Judge them on the same four things, in this order** — these are
what this corpus's audio actually has to survive:

1. **The safety clauses.** "never turn your back to the wall, at any speed and in any league"
   — does the emphasis land, or does it flatten into the sentence around it? A safety limb
   that reads as an aside is the defect this corpus exists to prevent.
2. **The em-dashes.** They carry the corpus's qualifications. Does the voice pause, or run
   through them?
3. **"nought point three seven seconds"** and **"seventy-four point two percent"**. Do they
   sound like a person saying a number, or like a machine reading digits?
4. **"Pierre Pagé"**, **"Dalhousie"**, **"bantam"**. Mangled proper nouns are the known
   failure mode.

Then pick one of: *keep Polly*, *switch to X*, *re-test with a different voice*.

**Tell me the verdict and I will record it** — which engine, why, and what you heard — in
`project/reviews/`, and update `PODCAST_AUTOMATION_LOCAL.md`'s orientation section, which
currently states the Polly decision as settled on price and one sample.

⚠️ **Separately and just as important: listen to one of the two finished episodes.** Both were
cleared on transcript review alone.

⚠️ **They very nearly did not survive to be listened to.** Checked 22 September 2026: the only
copies of both episodes were sitting in an **ephemeral session scratchpad** under
`/private/tmp/`, which is cleaned without warning — and the whisper model that went missing the
same way is why that transcription step is a separate open item at all. They have been copied
out to a durable place **outside the repository**, together with their scripts, provenance
tables and review notes:

```
~/Documents/personal/ice_hockey_scripted_episodes/
  skating/    skating_episode.mp3     (17.7 min, 6.4 MB)  + script.md, provenance.md, notes.md
  equipment/  equipment_episode.mp3   (85.4 min, 31 MB)   + script.md, provenance.md, notes.md, spoken.txt
```

Durations confirmed by `ffprobe` at 1,064.1 s and 5,123.6 s — exactly the 17.7 and 85.4 minutes
the record claims, so these are the cleared renders and not an earlier cut.

**Start with `skating`.** At 17.7 minutes it is one sitting, and it is the episode that took
five straight NOT-SAFE verdicts to clear — if the scripted route sounds right anywhere, it
sounds right there.

**Then sample `equipment` if you have time.** You do not need all 85 minutes: the known concern
is **ordering**, not content. Its protective-fit block — the three coverage gaps that cause the
most injuries — opens with the words *"Protective fit, and the three gaps"* and sits about
**two-thirds of the way in, near the 56-minute mark**, behind a long run of blade-radius and
stick-lie material. ⚠️ **That timestamp is derived** from the block's position at 66% through
the episode's own spoken text, not measured off the audio; the review record's own "~51
minutes" was measured against an earlier, shorter cut, so search for the phrase rather than
trusting either clock. Judge whether that is too late for a listener who came for fit. One
reviewer ruled it non-blocking because the three gaps are re-voiced in full in the closing
recap; a second recorded the reorder as feasible and preferable. **Your ear settles it.**

---

## Step 5 — nothing else needs you

For completeness, so you know what you are *not* on the hook for. These are mine, tracked in
[`PODCAST_AUTOMATION_LOCAL.md`](PODCAST_AUTOMATION_LOCAL.md):

- the whisper transcription model — **fetched 22 September 2026**, no longer a manual step;
- the podcast-script-vs-corpus divergence question (episode three);
- running `source-verifier` on a script for the first time;
- the `long-form` engine string `md_to_speech.py` writes into every manifest, for an engine
  that does not exist in `eu-west-2`;
- the wrong-pointer-right-quote provenance row in episode three;
- extending `check_pointers.py` to read a script.

**Ask me to start any of them.** None is blocked on you.

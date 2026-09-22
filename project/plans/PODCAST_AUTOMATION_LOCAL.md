# Local-only podcast automation plan

**Full history (NotebookLM two-speaker survey, four NO-GO generations, the TTS engine/cost
research, the single-voice decision, the scripted-episode rate discoveries and safety findings) is
relocated to
[`project/reviews/podcast_automation_plan_consolidated_2026-09-20.md`](../reviews/podcast_automation_plan_consolidated_2026-09-20.md).
Read that for context; this file holds only what is still open.**

## Orientation

The podcast is synthesised from single-voice scripts through `scripts/md_to_speech.py` /
`scripts/tts_sample.py` (Polly generative `Amy`, en-GB) — **not** NotebookLM's two-host Audio
Overview. Direction set by the owner 18 September 2026, commit `3aa176f`: the value of two people
talking to each other didn't justify the transmission-error and prosody risk NotebookLM kept
producing, and effort goes into scripting instead. Two episodes have been fully synthesised end to
end and cleared by safety review: `skating` (17.7 min) and `equipment` (85.4 min). Nobody has yet
listened to either by ear — every verdict to date is from a text/transcript review and `ffprobe`
duration.

**The steps that need a human — an AWS login, the TTS vendor signups, the ear test, the
listening pass — are split out into [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md),
written for the owner and not for an agent.** Everything below is the engineering backlog. Do
not duplicate the manual steps here; when one of them lands, record the outcome in
`project/reviews/` and update this file's orientation.

⚠️ **The audio was on borrowed time, and one artefact already went this way.** Checked
22 September 2026: the only copies of both cleared episodes were in an ephemeral
`/private/tmp/claude-503/.../scratchpad/` directory. They are now at
`~/Documents/personal/ice_hockey_scripted_episodes/{skating,equipment}/`, outside the
repository, with their scripts, provenance tables and notes. `ffprobe` confirms 1,064.1 s and
5,123.6 s — the 17.7 and 85.4 minutes on record. **Anything a future session wants to keep
goes outside the scratchpad at the moment it is made**, which is the same lesson the missing
whisper model taught below.

## Open items

- **Whisper model — FETCHED 22 September 2026, no longer blocking.**
  `~/whisper-models/ggml-base.en.bin` now exists at **147,964,211 bytes**, byte-for-byte the
  size the previous session recorded, from
  `https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin`. `base.en`
  specifically — it is what every prior transcript-based verdict was measured with, and a
  different size is not comparable. `whisper-cli` was already installed at
  `/opt/homebrew/bin/whisper-cli`. The transcribe step:
  ```bash
  ffmpeg -i EPISODE.mp3 -ar 16000 -ac 1 -c:a pcm_s16le OUT.wav
  whisper-cli -m ~/whisper-models/ggml-base.en.bin -otxt -np -nt -f OUT.wav -of OUT
  ```
  ⚠️ **Not yet run against either cleared episode** — fetching the model is not the same as
  verifying with it, and no transcript has been produced in this session.
  Known trap once you do: whisper mangles proper nouns (*"Brodeur"* → *"Brodua"*) — never grep a
  transcript for an exact name, search semantically and read context.
  ⚠️ **`~/whisper-models/` is outside the repository and is not backed up by it.** It went
  missing once already; if it goes again, the command above is the whole fix.

- **The `ice-hockey` AWS profile's SSO token expires, and its failure looks like a Polly
  outage.** Found 22 September 2026: `aws sts get-caller-identity` under `AWS_PROFILE=ice-hockey`
  returns `Error when retrieving token from sso: Token has expired and refresh failed`. The
  profile is SSO-based (an SSO session and account id recorded in `~/.aws/config`, region `eu-west-2`),
  so it will expire again on a cadence nobody controls. ⚠️ **This matters beyond the
  inconvenience: on 18 September the plan and a status report to the owner both said TTS was
  blocked pending an API decision, when Polly had been reachable all along** (§3.1 of the
  consolidated record). An expired token is the mirror-image trap — a working integration that
  reports as broken. **Check the token before concluding anything about Polly.** The fix is
  `aws sso login --profile ice-hockey`, which needs a browser and is therefore the owner's, not
  an agent's — it is step 0 of `PODCAST_MANUAL_STEPS.md`.

- **Podcast-script-vs-corpus divergence — coordinator decision, not agent-closable.** `OPEN_ITEMS.md`
  points here for this item rather than duplicating it (see its "Design specifications, not dispatch
  queues" section) — this file is the one place it's tracked in detail.
  The first `rules-verifier` pass ever run on a podcast script
  ([`conditioning_and_recovery_podcast_no_go_2026-09-19.md`](../reviews/conditioning_and_recovery_podcast_no_go_2026-09-19.md))
  found rows in the episode-three script's `provenance.md` (`:33`, `:34`, `:209`, `:210`) stating
  rules that `content/off-the-ice/conditioning_and_recovery.md` does not state. Two possible
  directions, needing opposite responses: if the script is right, the corpus is short and owes a
  propagation; if the script is wrong, it's unreviewed new text in a file about to be voiced and
  needs stripping. Verify each row against the corpus document before deciding either way — do not
  default to deletion (non-negotiable 3).

- **`source-verifier` has never been run on any podcast script.** The episode-three rules pass
  explicitly declared the script's research layer — meta-analyses, effect sizes, a retracted study
  and its retraction notice, cohort and VO2/specialisation figures — entirely unverified, calling it
  "the larger half" of the script. This is a missing review dimension, not a backlog row: a script
  gets whatever the coordinator happens to dispatch, unlike `content/`, which gets all five
  reviewing agents plus a commit gate.

- **One wrong-citation-right-quote instance, found in the same episode-three pass:** its provenance
  table cites `hc_layout.txt:4772-4773` for Hockey Canada's match-penalty trigger. Those lines are
  actually Rule 7.4, Charging — the quote is correct but the pointer lands on the wrong rule (the
  right citation is `hc_layout.txt:4745-4746`). No checker reads these provenance tables, so a right
  quote with a wrong pointer passes everything silently. Whether provenance pointers are worth a
  checker (a worklist, never a gate — a pointer going stale after a source re-extraction isn't a
  defect) is an open question, not yet decided.

- **`scripts/md_to_speech.py` still writes a synthesis engine into every manifest that doesn't
  exist in this region.** Verified still live 20 September: line 3798 emits
  `"voice": {"engine": "long-form", ...}`, while line 3958's own printed cost table says `long-form`
  is unavailable in `eu-west-2`. `git log -S'"engine": "long-form"'` shows the line has never been
  touched since it was introduced. Not a live blocker today because `build_podcast_audio.py` doesn't
  actually call Polly — but it's a trap for whoever writes the real synthesis step next. Fix: the
  manifest field should name the engine actually used (`generative`) or be omitted. This is a
  shared-tool change — make it between waves, not while other agents are editing `content/`, and
  say so in the brief.

- **`check_pointers.py` has never been run against an episode script, and can't be without a small
  tool change.** Verified still true 20 September: `main()` hardcodes `root / "content"` with no
  argument parsing. It's the closest existing tool to the link-layer safety class found in the
  skating episode (a spoken sentence routing a listener to another document with no clickable
  route), but its patterns don't match a pointer to a sibling document at all, only to
  in-document layers (Sources trailer, tables, footnotes). Extending it to take a script path is the
  obvious next step and hasn't been done — do this between waves too, for the same reason as above.

- **The ear-test sample now exists, and the setup instructions `tts_sample.py` points at did
  not.** `scripts/tts_sample.py` ends by telling the reader to "see PODCAST_AUTOMATION_LOCAL.md
  for the minimum setup steps per vendor" — **this file had no such section**, in any version.
  A pointer to advice that was never written is the routing failure CLAUDE.md warns about for
  sources, reproduced for the project's own tooling. Both halves are now closed:
  `PODCAST_MANUAL_STEPS.md` step 2 carries the per-vendor signup steps with live URLs, and
  `project/tts_ear_test_sample.txt` is the sample to feed the harness — 475 words / 2,708
  characters, extracted from `md_to_speech.py`'s own render of `content/technique/skating.md`
  (the Key focus safety block, plus the recovery-speed research block), not written for the
  demo. ⚠️ **It is plain text with no header and no framing, because `tts_sample.py` speaks the
  whole file** — anything added to the top gets read aloud in every comparison. It exercises the
  four things this corpus's prose actually breaks TTS on: em-dashed safety clauses, an accented
  proper noun (*Pierre Pagé*), a quotation mid-sentence, and the renderer's spelled-out decimals.
  ⚠️ **If `content/technique/skating.md` is rewritten, this file does not follow it** — it is a
  frozen sample, deliberately, so that two engines heard weeks apart are compared on identical
  input. Do not regenerate it to "keep it current"; that destroys the comparison.

- **Polly-tier ear-test audio already existed on the machine and was in no plan file.** Found
  22 September 2026 by a filesystem sweep, not by reading anything: `~/Downloads/polly-voice-test/`
  (18 September) holds `uk_rules` chunk 010 read by Amy on all three Polly tiers — `standard`
  (2:45), `neural` (2:55) and `generative` (3:07) — plus a `dialogue/` subdirectory from the
  abandoned two-speaker experiment. ⚠️ **The standard/neural/generative comparison answers a
  question the plan has been treating as open** (is the generative tier audibly worth its price?)
  **and it has been answerable for four days.** Separately, `~/Downloads/tts-compare/` holds a
  `polly_generative_Amy.mp3` from an 18 September `tts_sample.py` run whose **sample text is not
  recorded anywhere** — 2:23 of audio that cannot be attributed to an input, which makes it
  useless as a comparison baseline and is why `tts_ear_test_sample.txt` is now a frozen, named
  file. ⚠️ **`tts_sample.py` names output files by ENGINE, not by run**, so a second run into the
  same directory overwrites the first with no warning; `PODCAST_MANUAL_STEPS.md` step 3 now dates
  the output directory for this reason.
  ⚠️ **The general lesson, and it is the third instance in this file:** the whisper model, both
  cleared episodes, and now this audio were all outside the repository and outside every plan
  file. **`~/Downloads` and the session scratchpad are where this project's artefacts go to be
  forgotten.** Before recording that something has never been done, sweep the filesystem for it.

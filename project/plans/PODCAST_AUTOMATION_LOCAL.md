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

## Open items

- **Fetch the whisper model — the transcription/verification step is broken without it.**
  Confirmed 20 September: no `ggml-*.bin` exists at the documented location
  (`~/whisper-models/` does not exist on disk). `whisper-cli` itself **is** installed
  (`/opt/homebrew/bin/whisper-cli`). Fetch and place the model, then transcribe:
  ```bash
  mkdir -p ~/whisper-models && curl -L -o ~/whisper-models/ggml-base.en.bin \
    https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin
  ffmpeg -i EPISODE.m4a -ar 16000 -ac 1 -c:a pcm_s16le OUT.wav
  whisper-cli -m ~/whisper-models/ggml-base.en.bin -otxt -np -nt -f OUT.wav -of OUT
  ```
  `base.en` specifically — it's what every prior transcript-based verdict in the consolidated
  history was measured with; a different size isn't comparable. ⚠️ **A file matching the expected
  size (147,964,211 bytes, dated 17 September) already sits in a session scratchpad directory under
  `/private/tmp/claude-503/...` — that is ephemeral, not a durable fix, but copying it to
  `~/whisper-models/ggml-base.en.bin` may be faster than re-downloading if it's still there.**
  Known trap once transcription works: whisper mangles proper nouns (*"Brodeur"* → *"Brodua"*) —
  never grep a transcript for an exact name, search semantically and read context.

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

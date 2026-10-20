# NotebookLM remake, Batch 1 (20 October 2026)

**Generation.** The owner generated 8 episodes in NotebookLM with the 20 Oct prompt: the hosts discuss the topic, never a document, and keep rules few. Packs: `.podcast_queue/notebooklm/remake_2026-10-20/`.

**Review.** Each episode was transcribed locally (whisper-cli, ggml-base.en; no cloud transcription). A safety-reviewer then checked it against its source page under SKILL.md Step 4.

**Owner instruction (20 Oct):** "once episodes are approved we can publish them everywhere."

| Track | Episode | Runtime | Verdict | Notes |
|---|---|---|---|---|
| 02 | Core Principles | 14.3 min | SHIP | All 13 safety items present; rules about 9%; 1 source reference. Coaching slip: a beaten defender is told not to chase ("goalie's problem"), but the page says get back above the puck. Shipped on the coordinator's ruling because it carries no hurt or penalty risk; a regenerate is offered to the owner. |
| 03 | Reading Ice Hockey Diagrams | 38.5 min | SHIP | All safety items present; rules about 4%; 0 source references. Invented explanations of the symbols are harmless padding. |
| 24 | Skating | 65.5 min | SHIP after edit | Every safety item present; rules about 2%. The NO-GO was one invented instruction, to do edge work "at the end of long exhausting practice sessions… when your legs are tired". The page says the opposite, and that is the drill people fall on. Cut from the master (about 17:03–17:21) by ffmpeg stream copy, no re-encode; the join was checked by transcription. |
| 31 | Scanning and Anticipation | 21.3 min | **NO-GO** | The goalie-interference ejection is made to depend on injury. The injured-player icing exception is dropped. An ejection for a puck over the glass is invented. The episode is too thin (constraint 12). Regenerate. |
| 36 | Practice and Development | 55.3 min | SHIP (borderline) | Every safety item in the KTs and Common Mistakes is present. Two lower-consequence counterweights are dropped: "stay down if hurt", which lives only in the page body, and home-practice space safety. One touches figure is invented. |
| 37 | The Mental Game | 50.8 min | **NO-GO** | **Critical:** it teaches the listener to take a coach's public screaming as useful information, with no abuse or safeguarding line. The crisis numbers first come at 48 of 51 minutes. "Some fear is right" and the medical-clearance limb are dropped. Regenerate with a prompt fix. |
| 38 | Team Play and Culture | 46.3 min | SHIP after edit | The NO-GO was one invented sentence: "The defending team will violently clear you out of that space and the officials will let them do it." It contradicts USAH's strict post-whistle enforcement and 640(c). Cut (about 28:41–28:50) by stream copy; the join was checked. |
| 39 | How to Watch Hockey | 53.0 min | SHIP | No safety defects. About 16 book names sit inside four short rules blocks, about 7% of the episode. |

## Published

The six published masters are 02, 03, 24 (edited), 36, 38 (edited) and 39.

1. Installed the masters in `podcasts/` after `--backup` snapshots (2026-10-20T212439 and T212451).
2. Set the queue status to accepted.
3. Ran `build_podcast_audio.py`: 6 encoded and 33 skipped. The six got new content-hashed audio keys; their guids are unchanged.
4. Ran `upload_podcast_audio.sh --go` to upload the new keys.
5. Committed `site/src/data/podcast.json` so the feed deploys. Spotify and Apple follow the feed.

## Prompt fixes the reviews point to (before regenerating 31 and 37, and for later batches)

1. **Stop the brief being read aloud.** Phrases from the brief came through verbatim ("Wherever hitting is taught", "mandatory safety instruction", "safety absolute"). Tell the hosts to state the hitting gate in their own words and never call anything an instruction.
2. **Keep counterweights beside their technique.** Each counterweight must be in the same segment as the technique it qualifies: the abuse line, some fear is right, medically cleared, space safety, stay down if hurt, never retaliate.
3. **Crisis content in the first minute.**
4. **No invented numbers, comparisons or physiology mechanisms.**
5. **No tolerated violence.** Never present post-whistle violence or retaliation as tolerated.

## What this method could not have found

- **Delivery, tone and emphasis.** The audio was not listened to; the review used whisper text only.
- **The pages' own sources.** These were not re-checked against the rulebooks.
- **Safety material on sibling pages.** Material outside each episode's own page was not checked.

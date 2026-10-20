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

## Prompt fixes applied (20 Oct, after the batch review)

`prompt_constraints.md` brief (now 4,259 characters, under the 5,000-character Customise limit):
- **Checking gate.** The hosts now state it "in your own words". The brief adds: "Never call anything an instruction, a requirement or mandatory."
- **Counterweights.** New: "Keep each limit in the same part of the episode as the skill it limits (some fear is right; return only when medically cleared; demanding is not abusive)."
- **After the whistle.** New: "Never present retaliation or rough play after the whistle as tolerated."
- **Crisis line.** New: "If the topic has a crisis or help line, say it in the first minute."
- **Own knowledge.** The no-own-knowledge list now also bars comparisons and "explanations of how the body or brain works".

The shared `instructions.txt` and `focus.txt` in the pack folder were rebuilt from it. Episodes 31 and 37 are to be regenerated with the new brief. Their source files are still in `batch1/`.

## Second set (20 Oct, ~23:33): 01, 17, 29

| Track | Episode | Runtime | Verdict | Notes |
|---|---|---|---|---|
| 01 | Getting Started | 43.3 min | SHIP after edit | Every KT safety point present. Four brief-leak sentences were cut by stream copy at about 15:31, 23:59, 27:55 and 41:52: "This is an (absolute) mandatory safety instruction" (×3), and "we absolutely must end with a safety absolute as the undroppable conclusion". The joins were checked by transcription. The British extra ambulance red flags were dropped (MAJOR, not cuttable). Shipped with the CRT6 ten, removal, not leaving the player alone and medical clearance intact. The tone is not calm ("catastrophic", "stretcher"). |
| 17 | Forechecking Systems | 51.6 min | **NO-GO** | **Critical:** "I pin them against the glass if necessary" was endorsed right after "I see the numbers". **Critical:** the checking gate omits youth (12U/U13) and female hockey and invents "the vast majority of amateur adults" play non-checking. F1 "explicitly trying to initiate contact" and the quick flush lost its counterweight. Regenerate with `batch1/17 Forechecking Systems - focus.txt` (4,890 chars). |
| 29 | Puck Support and Spacing | 46.8 min | SHIP | All safety present; rules about 3%; 0 source refs. Minor shorthanded-icing garble. |

Published 01 (edited) and 29: backup 2026-10-20T234323; build encoded 2; uploaded getting_started-3d53cdf5 and puck_support_and_spacing-9f5085ee.

## 31 v2 (regenerated 23:53 with its own focus file): SHIP after cuts

All four v1 failures are fixed: the injury condition is gone, the injured-player icing exception is back, no ejection is invented for the glass, and the episode now runs 53.8 min. Every Group A item is present.

Three brief-leak passages were cut by stream copy:
- 0:00–0:07.9, the brief's example opener "Today, how to play wing", which names the wrong topic;
- 21:08–21:15, "deliver this safety absolute";
- 22:56–22:59, "It is a critical safety absolute".

All joins were checked by transcription. The episode was published at backup 2026-10-20T235826; the new audio file is scanning_and_anticipation-1da9a65c.

**Follow-up for the brief:** its example opener names a topic, and NotebookLM copied it verbatim. Replace it with a topic-neutral instruction.

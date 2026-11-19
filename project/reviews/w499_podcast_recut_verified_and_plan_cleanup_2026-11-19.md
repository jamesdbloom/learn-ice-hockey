# W499: the podcast re-cut is verified, installed and encoded; the plan is re-tested and cut to what is open (19 November 2026)

**Content files changed:** none.

**Also changed:**
- project/plans/OPEN_ITEMS.md
- project/working_guidance.md
- project/reviews/plan_cleanup_2026-11-19/ (six verdict tables)
- this record

## Owner instructions, 19 November 2026 (verbatim)
> *"have you checked everything reasonable to check for the Podcast re-cut please check there are not overlapping or duplicated parts due the cutting, if this passes or has already been done lets publish them now"*

> *"also clean up any outtanding plans and remove all work that has been completed and the entire plan if it has been completed"*

## Part 1: podcast re-cut verification
Run on the 31 re-cut Conversation masters in `~/Documents/personal/ice_hockey_podcast_incoming/recut_2026-11-18/`, plus the Defending the Rush candidate. The scripts are in the session scratchpad (`recheck/`); the audio is outside the repository.

| Check | Result |
|---|---|
| **Kept segments:** strictly ordered and non-overlapping, from each `_cutlists/*.json` | all 31 pass, 0 issues |
| **Rebuild:** each master rebuilt from the original download's kept segments and correlated against the new master, a 2 s window every 20 s | minimum 1.0 on all 31; lengths agree within 0.022 s |
| **Repeat across each cut:** best spectral match of any 1 s inside the 4 s before the cut against the 4 s after (157 cuts) | 0.67–0.78 |
| **Calibration for the repeat check** | random points in speech: median 0.70, 95th percentile 0.75, maximum 0.79 (n = 90). Known NotebookLM repeat in Defending the Rush: 0.94 |
| **Same words on both sides of a cut**, from the join transcripts | 1 hit, Offensive Zone Play cut 3, not a defect (below) |
| **Defending the Rush candidate** | equals the current master minus 7.40 s (correlation 1.0); scores 0.72 at the cut, down from 0.94 |
| **Whole-episode repeat scan** of the 17 Nov audit (`podaudit/dups.json`) | only two hits above 0.8: the Defending the Rush repeat (removed) and On-Ice Communication 10:24, which is the hosts' deliberate "They don't need to brace. They don't need to panic…" list, far from any cut |

**Offensive Zone Play cut 3.** A fresh transcription of the original download reads: "…low hips and wide feet. Why wide feet? *Because defencemen will be aggressively cross-checking you in the back to move you.* Wide feet and low hips give you a stable centre of gravity…". The removed sentence is the cross-checking line. After the cut the question leads straight into its answer, so the repeated "wide feet" is the hosts' question and answer, not duplicated audio.

**Not checked:** the joins have not been heard by a human ear; the owner's listening reel is still available. The whole-episode repeat scan was not re-run on the new masters, which differ from the scanned audio only within a few hundred milliseconds of each cut, and every cut was checked above.

## Part 1b: install and encode
- **Old masters:** already backed up in `~/Documents/personal/ice_hockey_podcast_backups/2026-11-18T111444`; each was confirmed byte-identical before it was overwritten.
- **Installed:** the 31 masters and the Defending the Rush candidate were copied into `podcasts/`, and each was compared byte for byte after the copy.
- **New masters backed up:** `build_podcast_audio.py --backup` put the 32 new masters in `2026-11-19T094549`.
- **Encode dry run:** planned to encode 32 and skip 9. Every guid is unchanged, and the audio keys are new content-hashed keys.
- **Encode:** exited 0 (32 encoded, 9 skipped); the overwritten web files are backed up in `2026-11-19T094602-before-build`.
- **Upload dry run:** passes the agreement check (41 episodes, 868,060,977 bytes).
- **Not yet done:** `--go` is blocked because the `ice-hockey` AWS SSO session has expired. `site/src/data/podcast.json` is modified and deliberately NOT committed: it must ship after the upload.

## Part 2: plan clean-up
- **Method:** six read-only Explore agents each re-tested one disjoint line range of OPEN_ITEMS.md (20–80, 81–120, 121–160, 161–251, 252–320, 321–389) against HEAD 69414796, item by item. Each wrote a cleaned replacement text and a verdict table with evidence. The coordinator spliced the six texts in order and wrote the header, the In flight row, the owner-questions list and the guidance lines.
- **Approximate verdict totals:** DONE about 460, STALE about 50, OPEN about 335, UNSURE about 205, STANDING about 100.
- **Rule for UNSURE:** UNSURE items were kept in the plan, never dropped.
- **STANDING items:** these are rulings, settled forms and method notes, not work. They stay listed in the verdict tables; the owner decisions among them were moved into working_guidance.md under "Decisions on record".
- **Size:** OPEN_ITEMS.md went from 389 lines and 303 KB to about 270 lines and 97 KB.
- **The plan is not complete,** so it was not removed.

**What this method could not have found:**
- The agents did not re-verify rule claims against the rulebooks, so an OPEN rules item may already be fixed under different wording.
- They spot-checked, but did not exhaustively read, records W347–W498 for closures, so some UNSURE items may already be closed.
- The cleaned rows are the agents' rewrites, and the coordinator did not re-read each one against its verdict.

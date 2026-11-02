# NotebookLM batch 10: Practising on Your Own published as track 38 (1–2 November 2026)

The owner generated the episode on 1 November from the batch10 folder (`.podcast_queue/notebooklm/remake_2026-10-20/batch10/`), using its source, focus steer and README. Source audio 1828.6 s.

## Safety-reviewer verdict: SHIP after cuts
Seven cuts were needed and four optional ones were also taken. Together they removed 52.6 s, leaving 1776.1 s:
1. **Safety (Group A):** "Do not take your eyes off it. Just lock onto a spot" on the small-circle pivots. Skating backwards at a public session without looking away contradicts the page's glance over the shoulder.
2. **Safety:** "never reach out with straight rigid arms… shatter a wrist". The injury was invented, and the "never" contradicted "get your arms out" for the boards.
3. **Safety:** "you cannot risk a secondary impact. Never.", an invented medical reason.
4. **Safety:** "an expert… before they ever touch heavy resistance". This weakened "qualified coaching before lifting at all".
5. **Accuracy (Group B):** "10 to 15 focused minutes… is the sweet spot". The figure had lost its one-source qualification.
6. **Accuracy:** "Fifteen minutes… every day is far superior to two hours… on a Sunday". The figures were invented.
7. **Accuracy:** an invented brain explanation for not abandoning the strong side, which the steer forbids.
8. **Optional:** "Some want you in full pads, some just want a helmet and gloves" (invented).
9. **Optional:** the steer's word "safety group" leaking into the recap, at three places.

## Groups
- **Group A safety list:** built from the source and every item arrived: helmet, neck guard in Britain, how to fall, concussion response, look behind, sticks and pucks only where posted, and the off-ice space and lifting cautions. Omissions a cut cannot add, none blocking: "if you are out of control, slow down"; "in coaches' experience" on the injury line; three punch-turn look-first cues, though the general look-behind rule covers them; stick-and-puck etiquette.
- **Group B:** all five on-ice drills match the page's steps and foot sides. "Coaches differ" and "rule of thumb" are kept.
- **Group C:** no rule numbers or book names, Britain named once, about 1 minute of rules in 30, one allowed website mention. Left in: "deep dive" three times and one gendered aside, "that's the guy who's…" at 11:06.

## Published
1. The master was installed at `podcasts/Off the Ice/Practising on Your Own.m4a` and backed up to `ice_hockey_podcast_backups/2026-11-01T182723` and `…T183040-before-build`.
2. The queue status was set to accepted.
3. Encoded with `build_podcast_audio.py --style conversation --renumber`. **The owner approved the feed renumber on 1 November:** Practising on Your Own becomes track 38, and Mental Game, Team Play and Culture and How to Watch Hockey move to 39–41.
4. Uploaded on 2 November with `upload_podcast_audio.sh --style conversation --go`, after the owner's AWS login.
5. Checked: `/audio/off-the-ice/practising_on_your_own-545cecf1.m4a` returns HEAD 200 and a range request returns 206. `/audio/cover-9b254b98.png` returns 200.

The cut list and join transcripts are in the session scratchpad (`nlm10/cuts`).

## What this method could not have found
- How the eleven joins sound. They were placed at word-level silences but checked by re-transcription, not by ear; this is part of the owner's ear test.
- Mishearings that turned a safety word into another plausible word. Doubtful words were read in context, not listened to.
- The episode predates SG145 and SG146, so it describes the old, shorter off-ice sections, not the new drill cards.

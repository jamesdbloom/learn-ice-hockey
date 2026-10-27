# NotebookLM batch 9: Winger and Body Contact regenerated and published (27 October 2026)

The owner regenerated both episodes using the episode-specific instructions and steers in `.podcast_queue/notebooklm/remake_2026-10-20/batch9/`, then delivered them on 27 October.

## Winger (track 10)
- **Why regenerated:** the live episode taught the backcheck but never said to leave the trailer alone.
- **Steer arrived:** "On the back check, never hit the trailer… Hitting them can be called interference wherever you play" (2749–2760 s), repeated as item 7 of the ten things. "Never finish a back check into anyone's back… if you can see their numbers, pull up" (2773–2787 s).
- **Safety-reviewer verdict: SHIP after cuts.** 15 cuts took it from 49.4 to 48.2 min (74 s). They removed:
  - prompt leaks ("rule integration", "rule connection", "wherever hitting is taught");
  - an invented "exponentially higher" scoring figure that dropped its qualification;
  - "a rigid forearm… is generally permitted";
  - an ungated "take the body" forecheck line;
  - invented interference/roughing penalty names for pre-drop leaning;
  - an invented 40-foot figure;
  - a frightening neck-physics line;
  - two preamble labels.
- **Group A:** complete apart from the CARHA "avoid contact" on the wall and "turn into pressure", which were not voiced. Accepted, since a cut cannot add them.
- **Group C:** no source references; no rule numbers or book names; about 17% rules time.

## Body Contact and Battles (track 28)
- **Why regenerated:** the live episode's head-knock aftercare said only "return when medically cleared", and it never named boarding.
- **Steer arrived:**
  - no return that day;
  - medical clearance before any return;
  - someone else drives;
  - nobody leaves them alone for 24 h;
  - boarding named and defined;
  - never hit from behind;
  - never stick a knee out.
- **Safety-reviewer verdict: SHIP after cuts.** 12 cuts took it from 39.7 to 35.3 min (267 s). They removed:
  - "in many rule books the onus is on the puck carrier" (the head-down allowance is the IIHF's alone);
  - "spinal injuries, completely separate from concussions" (the page treats head and neck injury as the same call);
  - "above the knees" as the universal legal contact zone (Hockey Canada says above the hips);
  - a "four or five strides" charging count;
  - the steer read aloud;
  - invented medical mechanisms and anatomy;
  - an invented "major and ejection" for kneeing;
  - an 84-second spine re-run.
- **Accepted:** the episode never says "assume a neck injury after any head knock", but the spinal response comes first and is complete. A cut cannot add it.

## Published
1. Masters were installed in podcasts/ and backed up (ice_hockey_podcast_backups/2026-10-27T010120).
2. Encoded with `build_podcast_audio.py --style conversation`.
3. Uploaded with `upload_podcast_audio.sh --style conversation --go`.
4. Checked: HEAD 200 and range 206 on /audio/positions/winger-1b0ea92c.m4a and /audio/technique/body_contact_and_battles-5db70d41.m4a.

Reviewer reports and the join transcripts are in the session scratchpad (nlm9/rev_winger, nlm9/rev_bcb).

## What this method could not have found
- How the joins sound: they were checked by re-transcription, not by ear.
- Delivery and emphasis that whisper base.en hides.

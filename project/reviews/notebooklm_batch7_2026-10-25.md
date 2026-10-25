# NotebookLM batch 7: four regenerations published, UK Rules held (25 October 2026)

- **Packs:** built from corpus commit 1eb0cca. Body Contact was split into three parts in one notebook, because the page is too long to paste whole.
- **Generation:** the owner generated the episodes in NotebookLM, using the shared instructions.txt and focus.txt.
- **Transcription:** local only (whisper-cli, ggml-base.en).
- **Review:** each episode was checked against its page under SKILL.md Step 4 by its own safety-reviewer. None of the reviewers wrote the episodes.
- **Cuts:** ffmpeg stream copy, no re-encode. Every cut boundary was set from whisper word timings. Every join was re-transcribed; none was listened to. In the first pass, several cut ends clipped the first word of the kept sentence, including a "Never" at two Winger joins. All were recut and re-checked.
- **Publishing:** covered by the owner's standing approval (20 Oct): an episode whose review returns SHIP may be published.

| Track | Episode | Length | Verdict | Notes |
|---|---|---|---|---|
| 10 | Winger | 44.6→43.0 min | SHIP after cuts | The regeneration fixed the old defect ("back side and hip into them" with no scope): the wall technique is now passive, with the checking gate within 90 s. The posture is right twice. Cuts: a reversed hybrid-icing rule ("the race is won or lost at the dot"; NHL 81.1 says the puck, not the dots); a scary "war zone… catastrophic" line; invented cervical physiology; a garbled British faceoff line; a made-up "most dangerous play" ranking; seven brief leaks ("rule integration", "safety instruction"). **Accepted, cannot be cut:** "never hit the trailer" is not voiced, so the backcheck gate can be heard as permission to hit a trailer without the puck (Major). Also not voiced: the shoulder-tip posture detail and the DOPS ban. |
| 12 | Goaltender | 34.0→33.1 min | SHIP after cuts | **The regeneration's target is fixed:** red flags "like neck pain" now mean an ambulance, with no "severe". The laceration protector, concussion protocol, buy-your-own-mask and head-up are all present. Cuts: goalie contact softened to "excessive… violent cross check" and "aggressively" (the page says unnecessary contact, no force needed); "not fair game for a body check" stated universally (USA Hockey Casebook 607 Sit. 5); the "time" call voiced as "safely" without its false-call caveat; a "catastrophic/terrifying" line; a "document" reference; six "absolute limit" leaks. **Accepted:** four short "The limit," leaks in the takeaways (no clean edge); the teammate-side omissions (warm-up head shots, lifting an attacker off their edges, blocking from a screen); the USA Hockey corner-contact warning is not voiced (as in batch 6). |
| 17 | Forechecking Systems | 35.5→34.6 min | SHIP after cuts | The old "human barricade / seal with body position" is gone, and every contact instruction carries the gate. Cuts: "heavy physical pressure… brain short circuits" (no gate, invented); a false delayed-penalty rule ("play stops the second they touch it"; NHL 15.1 says gains control); "a brick wall of bodies"; "attack the winger" on the pinch; "take contact squarely" (the page says squaring is the fallback); a "critical goaltender safety absolute" leak; and "Charging a goalie will result in an ejection. [Un]necessary contact is penalized everywhere." The second sentence could be heard as "a necessary contact", so both were cut. **Accepted:** the omissions of the 640(e) engaged-player rule, lateral interference, and F2 not hitting a puckless winger; many "safety reminder" labels. |
| 28 | Body Contact and Battles | 26.7→25.4 min | SHIP after cuts | "Seal that lane with your body" is gone. Two old defects came back reworded and were cut: a general lean permission with no Hockey Canada scope (HC 7.3(a)), and an unconditioned free-hand fend-off with an "arm as a shield" (USAH Casebook Standard of Play). Also cut: "more than two strides makes it a charge" (HC 7.4 is two or more); a brief leak; an invented outro. **Accepted, cannot be cut:** boarding is not named; the head-knock aftercare omits "no return that day", "someone else drives" and "not left alone" (it says "return only when medically cleared"); the DOPS ban is not voiced. A future regeneration should carry these. |
| 07 | UK and England Rules | 16.0 min | **REGENERATE, not published** | It still says "**severe** neck pain" (at 831 s), where the page and CRT6 say any neck pain means 999. It has also lost the 111 / don't-leave-them-alone instruction for a head knock with no red flag, which batch 6 carried. Neither can be fixed by a cut. The live batch 6 episode stays. The shared prompt has no neck-pain or 111 line, so a per-episode steer is needed before regenerating. |

## Published
1. The four cut masters were installed in `podcasts/`. The previous masters are backed up (2026-10-25T212358, and the build's own 212359-before-build).
2. `build_podcast_audio.py --style conversation` encoded 4 and skipped 36. Guids are unchanged; the audio keys are new content-hashed paths.
3. `upload_podcast_audio.sh --style conversation --go` ran. HEAD returns 200 and range returns 206 on all four new keys.
4. check-podcast-guids: every frozen guid is present (39/39 live, 39/39 principles, 13/13 Basics). Its FAIL lines are "enclosure moved", against a site/dist built before this change and before the Basics commit 4ef052e. The deploy build regenerates the feed.

## What this method could not have found
- Delivery, tone and stress; mishearings whisper smoothed over.
- How each join sounds.
- Safety points the page carries only in body prose the reviewers sampled rather than read.

## Batch 8: UK and England Rules regenerated and published (25 Oct, late)
The episode was regenerated with an episode-specific instructions source covering: any neck pain means 999, never "severe"; a head knock with no red flag means 111 and don't leave them alone for 24 h; a willing fight ends your game; a few defensive punches are not free. **All four arrived** (87.8 s, 97–106 s, 1138 s, 1154 s, and takeaways 5 and 9).

The safety-reviewer verdict was SHIP after cuts. 11 cuts took 28.4 min down to 25.8 min, each placed from word timings and each join re-transcribed:
- the jersey example on the wrong ladder (In-House :233–235 makes the second offence a 10-minute misconduct);
- "rinks dropping down to 56 by 26" stated as a floor;
- an invented "no penalty box in U12" plus a "coaches differ" line after a rule;
- a "first minute of this deep dive" prompt leak;
- four invented medical mechanisms (cranial haemorrhage, tonic posturing, metabolic state, "minimum time to heal");
- three scary or invented-physiology passages.

**Accepted:**
- no book names, so In-House-only rules reach an Elite League listener as universal: no video review, the 12-minute dive, either centre puts the stick down first;
- "any neck pain at all" read inside the red-flag list (the guideline's own list says "severe"; this errs safe);
- the "may view that as self-defense" gloss.

Published by the same route as batch 7: master backed up (2026-10-25T230042), encode, upload. HEAD 200 and range 206 on /audio/foundation/uk_rules-e283c8e3.m4a.

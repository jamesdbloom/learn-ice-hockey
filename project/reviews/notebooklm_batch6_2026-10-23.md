# NotebookLM batch 6: seven remakes and the first Finding More Ice episode (23 October 2026)

- **Packs:** built from corpus commit aa73c4a.
- **Generation:** the owner generated the episodes in NotebookLM, using the shared instructions.txt and focus.txt.
- **Transcription:** each episode was transcribed locally (whisper-cli, ggml-base.en; no cloud transcription).
- **Review:** each episode was checked against its source page under SKILL.md Step 4 by its own safety-reviewer. The reviewers did not write the episodes.
- **Cuts:** made by ffmpeg stream copy, with no re-encode. Every join was checked by re-transcription; none was listened to.
- **Owner approval:** the owner approved publishing Finding More Ice, and the renumbering it causes, on 23 Oct.

| Track | Episode | Length | Verdict | Notes |
|---|---|---|---|---|
| 37 | Finding More Ice | 35.9 min | SHIP | All 11 Group A items are present. No invented organisation or URL, and eiha.co.uk is not voiced. 0 hard source references. Rules about 15%, nearly all of it eligibility and safety. The minors (invented colour; the EIH 14.5 scope dropped; the IIHA voiced as "governs Ireland") all run in the cautious direction, so no cut was needed. The safety lines are louder than "brief, not scary". |
| 15 | Zone Entries | 31.9 min | SHIP after cuts | Group A is all present, and goalie contact is handled well ("can void… even if incidental"; no rebound exception voiced). Two cuts: ~248.7–289.5 s, an invented "failed carry costs less defensively… paper tiger" (the page says the opposite), and ~1751.0–1754.6 s, an added "the moment the puck leaves your stick you are eligible to be hit" (licenses a late hit; no checking gate). Minors stay: stat populations, a "guy", a scary tone. Ear checks were owed at 09:04, 15:12 and 30:01. |
| 11 | Defenceman | 40.2→39.7 min | SHIP after cuts | One CRITICAL was cut: "take those final strides and then glide into the contact… pumping your legs through the impact is charging" (23:00–23:23) taught charging as an approach technique, against the page's Never line. Also cut: a brief leak ("I'm going to say this exactly as it needs to be heard"), "Charging goes straight to a major or match penalty", and "use your hands to protect your core" (the page puts hands behind the body). All joins were checked. Group A is otherwise complete. Rules about 15–17%. |
| 22 | Faceoffs | 36.6→36.4 min | SHIP after cuts | All Group A items are present, with the checking gate given beside the go-through-the-man permission. Cut: the invented "lost draw lets the defence clear without worrying about icing" (the whole sentence), "or flip your hands to that reverse grip", and two "absolute limit / vital for safety" leaks. 32:26 was checked by word timing and says "NOT the other center", which is correct. 0 book names and 0 source references. |
| 23 | Game Management | 43.5→42.7 min | SHIP after cuts | Cut: a CRITICAL-shaped "hauling a player down… is a mathematically sound trade" (the ejection tier for a reckless trip was missing); the NHL-only "both on the ice" too-many-men trigger stated for everyone; a brief leak ("never state that myth without correcting it"); invented lactic acid; "prevents severe spinal injury"; "you want chaos at the net"; "block lanes with your body". Accepted omissions (not cuttable): the 6-on-5 attacker "stays off the goalie" and the icing injured-player exception. 0 book names. Rules about 9%. |
| 06 | Rules Primer | 33.3→32.0 min | SHIP after cuts | Every head, neck, spine, injury-response and concussion item is present in full. Cut:
- goalie contact outside the crease said without its scope (the NHL/IIHF/PWHL-only incidental carve-out implied for USA Hockey);
- the rebound permission stated for every book;
- a late-hit permission given without the gate in that segment;
- the "wherever hitting is taught" leak;
- the invented adrenaline claim;
- a garbled high-stick "waist" floor;
- "instantly protected… anywhere in the world".
Accepted omissions: the named no-check classes (A1), and the British neck guard every shift (KT10), which the UK Rules episode carries. 0 rule numbers. |
| 07 | UK and England Rules | 38.1→36.2 min | SHIP after cuts | The medical protocol is in full (111/999, 14 red flags, helmet on, 21-day floor, day 15 training), as are the neck guard (leave the ice, 10-min misconduct, Elite League ladder), the checking gate, the women's 101.1 contact line and ejection. 15 cuts:
- two leaks of the brief's own "the evidence is thin" hedge onto the 21-day bar;
- invented "two weeks of doing nothing";
- "coaches differ" framing the neck-guard and trapezoid rules;
- "women's hockey is non-checking from junior", which collides with unisex junior checking;
- a "him" for the goalie;
- a U12 minor clock stated as fact against the page's "ask";
- invented physiology and mechanisms;
- "your night ends instantly" overstatements;
- the opening brief leak.
Accepted, not cuttable: "severe" neck pain (the page says any neck pain); the high-stick technique and the mouthguard are not voiced. 0 rule numbers. |
| 12 | Goaltender | 72.2→70.5 min | SHIP after cuts | The concussion protocol, neck laceration protector at every age, buy-your-own-mask, the head-up mechanism, the checking gate, the trapezoid by book and the broken-stick rules are all present. 22 cuts:
- three softenings of goalie contact to "excessive or violent force" (the page says unnecessary contact, with no force needed);
- the "shot" call redefined as a dive-early instruction;
- "not fair game outside the crease" stated universally (USA Hockey Casebook 607 Sit. 5 lets a checking-game goalie with the puck be checked);
- an invented "no warning before a skate blade";
- eight "safety absolute" and eight "Limit," brief leaks, plus two "rule integration";
- a "catastrophic" injury line;
- a disclosure-stripping "statistics tell us".

Accepted, not cuttable:
- "severe neck pain" (the page says any neck pain); the word is spoken too fast to remove cleanly;
- the USA Hockey checking-game corner contact (KT9) and the false-"time"-call warning are not voiced;
- three "him/his" for a screener. |

## Accepted defects across the batch

"Severe neck pain" survives in 07 (twice) and 12, where the page and CRT6 say to treat any neck pain as an ambulance call. It shipped this way in earlier batches too. The fix is a regeneration or the owner's call.

## Published

1. The masters were installed in `podcasts/`. Snapshots were taken before (2026-10-23T075511) and after (T080008) the install.
2. Finding More Ice was added to the queue (build-queue), and all 8 were marked accepted.
3. `build_podcast_audio.py --renumber` encoded 8 episodes and skipped 32. Mental Game, Team Play and How to Watch moved from tracks 37–39 to 38–40, with their guids unchanged. podcast.json now holds 40 episodes.
4. After the owner's SSO login, `upload_podcast_audio.sh --style conversation --go` uploaded the 8 new keys.
5. The site build exits 0. check-podcast-guids reports 92 items (40 Conversation, 39 Playing principles, 13 Basics), with every live guid and enclosure URL unchanged. podcast.json was committed so the feed deploys, and Spotify and Apple follow the feed.

## What this method could not have found

Delivery and tone, mispronunciations hidden by whisper, any safety point carried only in a page section a reviewer sampled rather than read, and how each join sounds.

## Finding More Ice: Detailed (ElevenLabs) episode, same day

- **Script:** `podcast_style_b/detailed/finding_more_ice.md`, 16,307 characters, written to the Series A standard and the owner's 20 October rules.
- **Review:** a safety-reviewer checked the script against the page and getting_started and returned SHIP. Every one of the 11 safety items is voiced. Two optional wording tweaks were applied ("a team can ring you", "the national body's insurance doesn't cover you").
- **Synthesis:** synthesize_style_b.py (eleven_v4, voice L0Dsvb3SLTyegXwtm47J, stability 0.3, similarity 0.5, pcm_44100), 2 chunks, billed 7,905 credits.
  - The script's concat step exits 1 on raw .pcm chunks without printing an error.
  - The chunks were therefore joined by hand (s16le 44.1 kHz mono → WAV), which is gapless.
  - Running length: 17:51.
- **Audio check:** a full-length whisper pass with timestamps finds every passage, including all the safety lines. A first pass without timestamps had skipped stretches, which was a transcription artefact.
- **Publication:**
  1. Queued and accepted in the principles queue.
  2. Built with `build_podcast_audio --style principles --doc finding_more_ice`.
  3. Uploaded with `upload_podcast_audio --style principles --go`.
  4. The site build exits 0. check-podcast-guids reports 93 items (40 Conversation, 40 Playing principles, 13 Basics), with every frozen guid present.

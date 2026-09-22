# Both cleared episodes, transcribed and checked against their scripts — 25 of 25 safety limbs survived

**22 September 2026.** The first whisper transcription run in this project since the model went
missing, and the first time any synthesised episode has been checked against its own script.
Closes the "has never been run" half of the whisper row in `project/plans/OPEN_ITEMS.md`. **Both
cleared episodes are covered** — `skating` (17.7 min) and `equipment` (85.4 min).

## What was run

```bash
ffmpeg -i skating_episode.mp3 -ar 16000 -ac 1 -c:a pcm_s16le skating_16k.wav
whisper-cli -m ~/whisper-models/ggml-base.en.bin -otxt -np -nt -f skating_16k.wav -of skating_transcript
```

`base.en` specifically, so the result is comparable with every prior transcript-based verdict.
Source: `~/Documents/personal/ice_hockey_scripted_episodes/skating/skating_episode.mp3`.
Transcript: **2,999 words** against the script's 3,051 markdown words — consistent with the
recorded 17.7 min / 172.0 wpm, and no evidence of a truncated render.

## The result: nothing safety-critical was lost

Fifteen safety limbs were enumerated from the script and probed for in the transcript.
**All fifteen reached the audio.**

| Limb | In audio |
|---|---|
| Never turn your back to the wall | ✅ |
| …at any speed and in any league (the scope) | ✅ |
| Never duck or tuck your chin — going into the boards | ✅ |
| Tuck the chin — falling backwards to the ice (the inversion) | ✅ |
| Spinal injury can occur at walking speed | ✅ |
| Head up, chin off your chest | ✅ |
| Forearm and hip, not the point of the shoulder | ✅ |
| A concussion is not something you can rule out for yourself | ✅ |
| Tell someone, come off, stay off | ✅ |
| See a doctor; return is a medical professional's call | ✅ |
| Do not drive yourself home | ✅ |
| "Suspected rather than confirmed" | ✅ |
| USA Hockey's "even a light hit from behind" warning | ✅ |
| Cervical spine / "slightly flexed, merely down" | ✅ |
| Do not stick a hand out to catch yourself | ✅ |

⚠️ **The chin inversion is the one most at risk from a chunk boundary and it survived intact** —
the episode states both cases and then deliberately puts them side by side again at the end
("falling flat, chin in, hands in; hitting a wall, head up, arms out"). A TTS chunk boundary can
silently strip a scope gate from a neighbouring sentence; here it did not.

## What the transcript confirms that is NOT fixed

⚠️ **The link-layer defect is real, it is attached to safety material, and it is in shipped
audio — twice.** The plan carries this as an open question about scripts as a class; this is
direct evidence for it:

- *"The document on conditioning and recovery has the rest of what to do — the danger signs that
  mean calling an ambulance rather than driving anyone anywhere, the quieter symptoms to watch
  for, and what has to happen in the hours after you leave the rink."*
- *"The document on body contact and battles covers all of it and nothing I have said replaces
  it. Read it in full."*

**A listener cannot click either.** In both cases the material routed away is the more
safety-critical half — ambulance-threshold danger signs, and the whole of body contact. This is
the cue-and-instruction separation problem in its sharpest form: the episode correctly refuses to
restate an owner document, and a listener is left without it. It is the same tension recorded in
`recognise_it_precursor_census_2026-09-22.md` from the other end.

## Whisper artefacts observed, so the next reader does not file them as defects

The known proper-noun mangling occurred, as the plan warned. **None of these are script defects:**

- *"Charles Tater"* → Charles **Tator** (the cervical-spine author)
- *"for arm and hip"* → **forearm** and hip
- *"a ride perpendicular"* → **arrive** perpendicular
- *"it is not only a wrist that a full cost you"* → a **fall costs** you

⚠️ **Never grep a transcript for an exact name.** Search semantically and read the context.

## What this method could not have found

- **Anything about how it SOUNDS.** A transcript proves the words are present, not that the
  emphasis lands, that the safety clauses are not flattened into the sentences around them, or
  that the prosody is tolerable for 17.7 minutes. **The ear test in
  `PODCAST_MANUAL_STEPS.md` is not made redundant by this and nobody has still listened.**
- **Whether the words are RIGHT.** This compared audio to script. It did not verify a single
  claim in the script against a primary source — that is the `source-verifier` dimension, which
  was dispatched separately and has its own report.
- **The equipment episode**, 85.4 minutes, not transcribed here.
- **Whether a limb absent from BOTH script and audio should have been there.** This was a
  survival check of what the script already said, not a reverse sweep against
  `content/technique/skating.md`'s own Common Mistakes and Key Takeaways. That sweep is what
  closed this episode's safety review originally, and it is not re-run here.

---

# The equipment episode — 10 of 10, and the ordering question now has measured timestamps

Transcribed the same way, to VTT so the result carries timestamps. **14,051 transcript words
against the script's 14,090 spoken words — a 0.3% difference**, so nothing of length went missing.

## Safety limbs: all ten present

Never buy or wear a second-hand helmet · a goalie mask counts as a helmet for that purpose · a
severely impacted helmet must be replaced · alteration or expiry voids certification · the
2.5 cm chin-strap gap · the shin-guard-to-pants gap · the glove-cuff-to-elbow-pad gap · **the
disclosure that no rule book actually writes the second-hand rule** · buying a size up opens the
gaps you were trying to close · the three coverage gaps that cause the most injuries.

⚠️ **The disclosure surviving matters as much as the instructions.** The episode's strongest
safety instruction — never wear a second-hand helmet — is explicitly *not* a rule, and the
episode says so. Had the synthesis dropped that limb, the audio would have asserted a law of
hockey that four rule books do not contain. It did not.

## The ordering concern, measured rather than derived

| Moment | Timestamp |
|---|---|
| *"Protective fit, and the three gaps"* | **56:03** |
| The three coverage gaps themselves | **57:39** |
| The gaps re-voiced in the closing recap | **1:23:03** |
| Episode duration | 85:24 |

Three things follow, and two of them correct the record:

1. ⚠️ **The review record's "~51 minutes" does not describe the shipped file.** It was measured
   against an earlier, shorter cut. The real figure is **56:03**. `PODCAST_MANUAL_STEPS.md` now
   carries the measured timestamps and tells the owner to ignore the old one.
2. **The reviewer who ruled the ordering non-blocking was right on the facts.** The gaps *are*
   re-voiced in full in the closing recap — confirmed at 1:23:03. The disagreement between the
   two reviewers was never about whether the recap exists; it is purely about whether 56 minutes
   is too late for a listener who came for fit. **That is an ear judgement and it is the owner's.**
3. A derived estimate in `PODCAST_MANUAL_STEPS.md` had put this block "near the 56-minute mark"
   from its position at 66% through the spoken text. **Measurement confirmed it**, which is worth
   recording only because the derivation was flagged as unreliable at the time and turned out not
   to be.

## What this method could not have found, for both episodes

- **Anything about how either SOUNDS.** A transcript proves the words are present. It cannot show
  that a safety clause carries emphasis rather than flattening into the sentence around it, and
  it cannot tell you whether 85 minutes of this voice is bearable. **The ear test is not made
  redundant by any of this, and nobody has still listened to either episode.**
- **Whether the words are RIGHT.** This compared audio to script, not script to primary source.
- **The reverse sweep.** Neither episode was re-checked against its source document's Common
  Mistakes and Key Takeaways for material that should have been taught and was not. That sweep is
  what originally closed the skating episode after five NOT-SAFE verdicts, and it is not re-run here.
- **`conditioning_and_recovery`, episode three, is not covered** — it was never cleared and has no
  audio.

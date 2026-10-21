# The Basics: launch (21 October 2026)

**The owner's decisions (20 Oct):**
- About 13 topic episodes, as their own season in the same show.
- Titles in the form "Playing wing — The Basics".
- Described as "suitable for newer players or younger players", with no mention of parents and no checking framing.
- Terms explained, with the reason for each principle.
- Safety warnings brief and calm.
- "They" throughout.
- "Once episodes are approved we can publish them everywhere."

## Scripts and review

- **Template.** Topic 10, Playing wing (`podcast_style_b/basics/playing-wing.md`), is the revised pilot the owner reviewed.
- **Writers.** Topics 1–9 and 11–13 were written by six agents (bw-1 to bw-6), each from one to three named source pages.
- **First safety review**, six reviewers with two topics each:
  - 1 CRITICAL: defence "They don't have the puck, so a shove can be called a penalty", which implied a shove on a puck carrier is fine.
  - About a dozen MAJORs:
    - goalie contact given only a goal-cost reason;
    - "the other player" defined as chasing the puck, which narrowed the boards limb;
    - centre "the one player you never lean into";
    - the defence stick lift without the cross-check limb, and its body-steering scramble;
    - skating missing falling and getting up;
    - carrying the puck missing "never grab" and the facing-the-boards fallback;
    - gear missing concussion after-care, and its recap dropping medical clearance;
    - playing goal's "time" call missing the false-"time" limb, which came from a source gap and was fixed corpus-wide in `tm_false_time_call_2026-10-21.md`;
    - two Basics limbs placed too far from their acts (topics 7 and 8).
  - All were fixed by the writers or the coordinator.
- **Re-review (bR2)** of the six revised scripts: no CRITICAL or MAJOR. Its eight MINORs were applied: the too-many-players trigger, "adult players" for the visor, "that player", the skating hand cue and after-care, the defence "push them", "a crash there" and bump wording, and centre "move away from the goalie".
- **Seams.** Every script was dry-run at its synthesis cap (9,695; skating 9,500) after its last edit. No seam separates a safety limb from its act.

## Recording and checks

- ElevenLabs eleven_v4, voice L0Dsvb3SLTyegXwtm47J, stability 0.30, similarity 0.50, wav_44100. The 13 episodes cost about 70k credits.
- Each WAV was transcribed locally (whisper-cli, base.en) and diffed word by word against its script. None dropped six or more consecutive words; similarity was 0.986–0.998.
- Episodes run 10.4 to 13.6 minutes.

## Publish

- `build_podcast_audio.py --style basics --slug <each>`: 13 encoded, with a master backup taken first.
- `upload_podcast_audio.sh --style basics --go`.
- Launch site work (bs2):
  - The gate is now sticky. `LIVE_BASICS_SLUGS` and `assertBasicsFrozen()` are in `podcast-feed.ts`, and `LIVE_BASICS_GUIDS` is in `check-podcast-guids.mjs`. `planned` is append-only. Negative-tested on scratch copies: a reorder fails, a dropped episode fails, an appended topic passes.
  - Footer link and sitemap entry added, gated on `AUDIO_ENABLED`. There is no Playing principles page to copy the nav from.
  - The `podcast-basics.json` note is updated.
- **Feed** (`check-podcast-guids`): 91 items in 8 seasons, every frozen live and principles guid present, 13/13 Basics guids. Season 8, episodes 1–13, dated 18–24 Aug, after every existing item.
- **Production audio**: HEAD is 200 with Accept-Ranges on all 13, each Content-Length equals the JSON bytes, and a range GET returns 206.

## Site review (bsR2, headless Chrome over CDP; the extension refused localhost)

- **No BLOCKING findings.**
- **Checked:**
  - `/the-basics/` at 1440, 400 and 320 px, light and dark: no overflow, 13 cards in order, tagline correct, no "parent".
  - Footer link, sitemap, deep links, and source-page links: 21 pages, one each.
  - Console clean.
  - All 13 production files play.
- **Non-blocking items, recorded in OPEN_ITEMS:**
  - The source-page link sits away from the player.
  - Episode 13's duration wraps alone at 400 px.
  - The caption still says "his partner and his goalie", which is in the GN diagram row.

## Also fixed in this wave

CI and Deploy had failed on every push since 305a070. `podcast_principles_series_plan.md` linked the untracked `podcast_style_b/pilots/*.md`, which resolved only locally. Fixed and pushed separately in bc6f21c.

## Dimensions

| Dim | Status |
|---|---|
| D1 rules | Episode scripts: reviewers checked penalty claims against `sources/*.txt` where doubted. No corpus rule text changed. |
| D2 sources | Each script traces to its named pages (notes §6 in each script) |
| D3 cardinal rule | ✓ "ask which yours plays" kept; no checking framing |
| D4 propagation | Out of scope for content/. Inside the scripts, limbs are repeated in recap and close. |
| D5 numbers | ✓ no figures beyond the source's |
| D6 negative existence | Out of scope |
| D7 folklore | ✓ reviewers flagged consensus figures; kept as unlabelled per plan decision 8 |
| D8 qualifications | ✓ |
| D9 facts layer | Out of scope (no content/) |
| D10 safety | ✓ two review rounds, listed above |
| D11 layer test | ✓ seams dry-run per script |
| D12 spoken rendering | ✓ transcripts diffed |
| D13 site | ✓ bsR2 |
| D14 style | ✓ plain register; sentence stats in each script's notes |
| D15 consistency | ✓ the boards short form is shared; after-care and the "time" limb are aligned across episodes |

## What this method could not have found

- How the episodes sound. Nobody has listened to them; the transcripts prove the words, not the delivery.
- How Apple and Spotify present season 8, including whether a season dated before existing items shows as new.
- Errors in the source pages themselves, beyond what the reviewers grepped.
- A technique taught correctly but done badly by a young player.

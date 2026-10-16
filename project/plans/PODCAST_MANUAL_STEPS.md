# Podcasts: the steps only you can do

There are two podcast formats.

- **Style A, "Discussion".** The two-host NotebookLM episodes. You make these by hand in NotebookLM, following Part A below. The coordinator then checks each one and publishes it.
- **Style B, "Playing principles".** Single-voice scripted episodes. The coordinator writes each script from one document, has it reviewed, and synthesises it with ElevenLabs. The voice is `ShSKKFA7dFwxYhKZGUoY` on model `eleven_v4`, at stability 30% and similarity 50%. Your part is Part B: log in, so the coordinator can read the ElevenLabs key, and then listen.

The engine ear test that this file used to describe is finished. ElevenLabs `eleven_v4` was chosen on 14 October 2026. The old version of this file is in the git history.

---

# Part B — Style B: log in, then listen

**B1. Log in to AWS.** The ElevenLabs key is held in AWS Secrets Manager. Your login expires after a few hours, and nothing can be synthesised without it.

```bash
aws sso login --profile ice-hockey
```

Approve the device code in the browser tab that opens. To check it worked, run the command below. It should print your account and role, not an error.

```bash
AWS_PROFILE=ice-hockey aws sts get-caller-identity
```

**B2. Listen to the example episode before any others are made.** The coordinator will tell you where the file is. Listen for three things:
- **Pace and voice.** Is 30% stability too loose or too flat over a long episode?
- **The joins.** The episode is synthesised in pieces and stitched together. Can you hear the seams?
- **Content and teaching.** Does it teach you how to play?

Tell the coordinator what you heard, in your own words. The settings are adjusted from that, and then the rest of the episodes are made.

---

# Part A — Style A: making the NotebookLM episodes by hand

One episode per document, one notebook per episode, at most ten episodes per batch.
Every command below runs from the repository root:

```bash
cd ~/Documents/personal/ice_hockey
```

---

## Section 1 — Once per batch: get ready

**1. Check which documents are mid-repair.** Any document listed by this command has
uncommitted edits. Skip it this batch, because the episode would be built from a
version that has not been reviewed.

```bash
git status --short content/
```

**2. Build the instructions file.** This joins the accuracy constraints and the
teaching prompt into one file, with the constraints first. The order matters: the
constraints override the teaching prompt. Rebuild the file at the start of every batch
in case either file has changed.

```bash
mkdir -p .podcast_queue/notebooklm
cat .claude/skills/notebooklm-episode/prompt_constraints.md \
    project/podcast_generation_prompt_longer.md \
    > .podcast_queue/notebooklm/instructions.md
```

The `.podcast_queue/` folder is gitignored, so nothing here can be committed by mistake.

**3. Choose the batch.** Work down the table in Section 5 in order and take the next ten
documents or fewer, leaving out anything Step 1 listed. Ten is the hard ceiling that
`scripts/podcast_queue.py` enforces. It exists because NotebookLM rate-limits audio
generation, and a smaller batch is easier to recover from. If NotebookLM says you have
reached a daily limit, stop there and carry on the next day.

Use the table for the order, not `podcast_queue.py next-batch`. Its queue still dates
from September and prints in alphabetical order, not site order.

---

## Section 2 — For each episode

**4. Record what you are uploading.** This saves a copy of the document stamped with
the commit and a fingerprint. That copy is the record of exactly which version fed the
episode. Use the title and path from the table:

```bash
python3 .claude/skills/notebooklm-episode/build_episode.py \
    .podcast_queue/bundles "Defender" content/positions/defender.md
```

Note the commit it prints. You will need it in Step 13.

**5. Open a new notebook** at notebooklm.google.com. Always use a new one. Never add
a document to an old notebook. Name it after the document and today's date, for example
`Defender — 2026-10-16`.

**6. Add the document as a source.** Upload the original Markdown file from the table,
for example `content/positions/defender.md`. Upload the document itself, not the
`__sources.md` copy from Step 4. That copy carries a header the hosts might read out.
If the upload dialog refuses `.md`, make a `.txt` copy and upload that instead:

```bash
cp content/positions/defender.md .podcast_queue/notebooklm/defender.txt
```

**7. Add the instructions as a second source.** Copy the file to the clipboard:

```bash
pbcopy < .podcast_queue/notebooklm/instructions.md
```

Then choose **Add source → Copied text** and paste. It should be titled *"Accuracy
constraints for corpus podcast generation"*. The instructions cannot go in the
Customise box, because that box has a hidden 5,000-character limit. It was measured in
September, and it cut longer text off mid-sentence without any warning. The
instructions file is about 33,000 characters.

**8. Wait until both sources have finished processing** before you touch Audio
Overview. Generating from a source that is only half processed loses quality silently.

**9. Open Audio Overview → Customise**, and set:

| Setting | Choose |
|---|---|
| Format | **Deep Dive** (the two-host conversation) |
| Length | **Longer** |
| Language | **English** |

In the "focus" box, paste this text exactly. It is about 1,000 characters, so it fits:

```text
This notebook has two sources with different jobs. The source titled "Accuracy constraints for corpus podcast generation" is PRODUCTION INSTRUCTIONS, not episode material: follow it exactly, and where it conflicts with anything else it wins — but never discuss it, quote it, or mention that it exists. The other source is the ONLY topic of this episode. Teach that document and nothing else, in its own order: open on its Key focus section, and lead each point with what a player does before the rule that prices it. Say nothing that is not in that document — no player names, no history, no statistics, distances or speeds, no comparisons between rulebooks, no injury or medical advice — unless you can point to the sentence in the document that says it. Keep every hedge, exception and rulebook name the document attaches, and never settle a question it calls unsettled. Make it long and thorough: cover every section, recap often, and finish with "if you only remember ten things".
```

**10. Generate and wait.** A long episode takes several minutes or more. The
"Generating…" panel can stay stuck long after the audio is ready, so reload the page
before you assume it is still working.

**11. Download the audio** and save it as described in Section 4. Note how long it runs.

---

## Section 3 — The ear check, before you accept an episode

Listen with the document open. **Your check is a triage, not the final word.** No
episode is published until the coordinator has transcribed it and two reviewers (one
for rules, one for safety) have checked the transcript against the document. Your job
is to reject the obvious failures fast and to note the timestamps of anything doubtful.

These checks come from the four September attempts, all four rejected. The later
attempts did not mainly invent things. They mis-transmitted rules that the document
states correctly, and that sounds sourced unless you check it.

**Reject outright (stop-the-line). Any one of these fails the episode:**

1. **An injury-response segment the document does not contain.** For example *"if
   you suspect an injury, come off the ice, tell someone, don't drive, see a doctor"*.
   Three attempts invented this on documents that never mention it. Where the document
   does cover injury, check that concussion and suspected spinal injury are kept
   apart. They call for opposite first actions: for a suspected spinal injury nobody
   moves the player.
2. **Medical detail of any kind**: recovery times, return-to-play stages, or
   confident body mechanics the document does not use (one attempt invented *"axial
   loading"*).
3. **A safety point softened or given an exception.** Examples: "head up", "never
   turn your back to the checker", "never duck into a check", the rule on whether checking
   is allowed at all, and neck guards.
4. **A penalty mis-transmitted.** Write down the timestamp of every penalty or rule
   you hear, then compare it with the document. These are the commonest failures:
   - the size changed (minor to major, or major to ejection, or the reverse);
   - "may" became "must", or "must" became "may";
   - an exception the document attaches was dropped;
   - one rulebook's rule described as true everywhere, or given to the wrong book
     (NHL, IIHF, USA Hockey, Hockey Canada, CARHA, PWHL, or the British rules).

**Note the timestamp and tell the coordinator.** These need checking but are not an
automatic fail:

5. **Invented specifics**: a number, speed, weight or distance, a real player (Brodeur,
   McDavid and Crosby have all appeared), or the history of a rule.
6. **A comparison between rulebooks that the document does not make.**
7. **A hedge resolved.** The document says "genuinely unsettled" or "ask your league",
   and the episode states an answer.
8. **British scope changed.** "England" said where the document says England and
   Scotland, or the reverse, or anything about what the EIHL Casebook contains.
9. **Leakage from the instructions source.** Talk of "constraints", "instructions",
   IIHF rulebook editions, the In-House Rules or Northern Ireland, on a document that
   does not discuss them.
10. **A promised count not delivered**, such as "the three things you never do"
    followed by only two.
11. **A coaching choice stated as a law**, such as "wingers always…" where the
    document says "in most systems…".

**Also report these. They never fail an episode on their own:**

12. **Length.** Earlier episodes ran about 45 to 70 minutes. Anything under about 30
    minutes is suspicious, because one attempt ran 18 minutes where the previous one
    ran 43.
13. **Opening.** Does the episode open on what a player does (the document's Key focus)
    or on rulebooks and penalties?

If an episode fails, do not regenerate it straight away. Tell the coordinator. A
document that fails three times is stopped and goes back to you as a decision.

---

## Section 4 — Where to save the audio

**12. Save each download outside the repository**, in this folder:

```text
~/Documents/personal/ice_hockey_podcast_incoming/<Folder>/<File name>
```

`<Folder>` and `<File name>` come from the table in Section 5, for example
`~/Documents/personal/ice_hockey_podcast_incoming/Positions/Defender.m4a`.

- **Do not save into `podcasts/`.** The publishing script picks up every `.m4a` file
  in that folder. An unreviewed episode there could be published, and it would
  overwrite the current master. The backup of the current masters, which the script's
  notes say is in `~/Documents/personal/`, is not on disk.
- **The file name must match the document title exactly**, as in the table. The
  publishing script matches audio to documents by title, and it refuses to run on a
  name it cannot match.
- **If the download is not a `.m4a` file**, keep its original extension and tell the
  coordinator. The script only looks for `.m4a`.

**13. When the batch is done, send the coordinator a message like this:**

```text
NotebookLM batch done. Commit stamped by build_episode: <hash>.
Saved under ~/Documents/personal/ice_hockey_podcast_incoming/
- positions/defender      Positions/Defender.m4a     52 min   ear check: pass
- positions/goaltender    Positions/Goaltender.m4a   61 min   ear check: doubt at 23:10 (penalty size?)
- systems/faceoffs        (rejected: invented injury segment at 48:00)
Skipped as mid-repair: <list from Step 1>
```

The coordinator takes it from there. They transcribe each episode, run the two
reviewers, and update the queue. Then they move accepted episodes into `podcasts/`,
keeping the old master, run `scripts/build_podcast_audio.py`, and **ask you before
anything is uploaded**.

---

## Section 5 — The episode list, in site order

This is the order the site and the podcast feed use. It comes from
`site/src/data/structure.json`; `python3 scripts/podcast_queue.py status` prints the
same order (the `trk` column). "Title" is what goes in the Step 4 command. "File
name" is the title plus `.m4a`.

| # | Upload this file | Title | Folder |
|---|---|---|---|
| 1 | `content/getting-started/getting_started.md` | Getting Started | Getting Started |
| 2 | `content/foundation/core_principles.md` | Core Principles | Foundation |
| 3 | `content/reading-diagrams/reading_ice_hockey_diagrams.md` | Reading Ice Hockey Diagrams | Reading the Diagrams |
| 4 | `content/foundation/rink_map.md` | Rink Map | Foundation |
| 5 | `content/foundation/language_and_glossary.md` | Language and Glossary | Foundation |
| 6 | `content/foundation/rules_primer.md` | Rules Primer | Foundation |
| 7 | `content/foundation/uk_rules.md` | UK and England Rules | Foundation |
| 8 | `content/foundation/on_ice_communication.md` | On-Ice Communication | Foundation |
| 9 | `content/positions/center.md` | Center | Positions |
| 10 | `content/positions/winger.md` | Winger | Positions |
| 11 | `content/positions/defender.md` | Defender | Positions |
| 12 | `content/positions/goaltender.md` | Goaltender | Positions |
| 13 | `content/positions/switching_positions.md` | Switching Positions | Positions |
| 14 | `content/systems/breakouts.md` | Breakouts | Systems and Situations |
| 15 | `content/systems/zone_entries.md` | Zone Entries | Systems and Situations |
| 16 | `content/systems/offensive_zone_play.md` | Offensive Zone Play | Systems and Situations |
| 17 | `content/systems/forechecking_systems.md` | Forechecking Systems | Systems and Situations |
| 18 | `content/systems/neutral_zone_systems.md` | Neutral Zone Systems | Systems and Situations |
| 19 | `content/systems/defensive_zone_coverage.md` | Defensive Zone Coverage | Systems and Situations |
| 20 | `content/systems/defending_the_rush.md` | Defending the Rush | Systems and Situations |
| 21 | `content/systems/special_teams.md` | Special Teams | Systems and Situations |
| 22 | `content/systems/faceoffs.md` | Faceoffs | Systems and Situations |
| 23 | `content/systems/game_management.md` | Game Management | Systems and Situations |
| 24 | `content/technique/skating.md` | Skating | Technique |
| 25 | `content/technique/puck_handling.md` | Puck Handling | Technique |
| 26 | `content/technique/passing_and_receiving.md` | Passing and Receiving | Technique |
| 27 | `content/technique/shooting.md` | Shooting | Technique |
| 28 | `content/technique/body_contact_and_battles.md` | Body Contact and Battles | Technique |
| 29 | `content/hockey-iq/puck_support_and_spacing.md` | Puck Support and Spacing | Hockey IQ |
| 30 | `content/hockey-iq/time_and_space.md` | Time and Space | Hockey IQ |
| 31 | `content/hockey-iq/scanning_and_anticipation.md` | Scanning and Anticipation | Hockey IQ |
| 32 | `content/hockey-iq/risk_management.md` | Risk Management and Decision-Making | Hockey IQ |
| 33 | `content/hockey-iq/playing_without_the_puck.md` | Playing Without the Puck | Hockey IQ |
| 34 | `content/off-the-ice/equipment.md` | Equipment | Off the Ice |
| 35 | `content/off-the-ice/conditioning_and_recovery.md` | Conditioning and Recovery | Off the Ice |
| 36 | `content/off-the-ice/practice_and_development.md` | Practice and Development | Off the Ice |
| 37 | `content/off-the-ice/mental_game.md` | The Mental Game | Off the Ice |
| 38 | `content/off-the-ice/team_play_and_culture.md` | Team Play and Culture | Off the Ice |
| 39 | `content/off-the-ice/how_to_watch_hockey.md` | How to Watch Hockey | Off the Ice |

Notes on particular documents:

- **#1 Getting Started** is left out of the queue tool, because it already had an
  episode. Its document has changed 26 times since that episode was made, so it is
  listed here. Whether to remake it is your call.
- **#2, #4, #5 and #8** were the four September attempts, all rejected. Core
  Principles and Rink Map have each failed twice. Listen to these especially carefully
  against the Section 3 checklist.
- **#11 Defender** is stable. The single-voice ("Style B") script is being written from
  it at the same time, which does not affect this.
- **The biggest documents** are Rules Primer and Body Contact and Battles (about
  121,000 words each) and Goaltender (about 96,000). The episode cannot cover them
  word for word. Listen hardest to the penalty checks (Section 3, item 4) on these three.

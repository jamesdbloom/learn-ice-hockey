# SG50: published audio checked against the SG44–49 safety corrections; team_play leaning limb (23 October 2026)

## Why

SG44–SG49 corrected contact cues on the pages: scoped "hip into the checker", sealing and leaning; gated spins and cutbacks; the USA Hockey released-puck limit. Every published podcast episode was produced before those commits (20–22 Oct), so the audio could still voice the old wording.

## Audit

**Style B scripts (read-only text audit).**
- **Five Detailed scripts and one Basics script still carried corrected cues:**
  - **High:** winger "hip and backside into them" (no scope) plus ungated spins; switching_positions "hip and backside into the checker".
  - **High/medium:** skating ungated cutback; OZP ungated spin and cutbacks plus "Seal with your body, never an arm or a skate"; puck_handling ungated spins and cutback; center ungated cutback; Basics carrying-the-puck ungated spin.
- **The other scripts are clean or err strict.**
- **Fixed in the scripts (untracked; the corrected text was re-synthesised in SG50c):** "hip/backside to/toward the checker" plus "If your league doesn't allow checking, hold your spot and don't bump or lean on them; in a Canadian adult league on the CARHA rulebook, stay out of the contact"; spin limited to "someone who's already leaning on you — never off someone still coming at you, however slowly"; the cutback limited by timing ("Make the turn while they're still too far away to reach you. Once they can reach you, it's too late. Go side-on to the boards instead. Never turn so you're facing the wall with them behind you."); OZP delay-and-curl gated; OZP seal reworded.
- **Safety review:** safety-reviewer, two passes. First pass: one CRITICAL (OZP curl had no gate) and minors. Second pass: SHIP on all seven.

**NotebookLM (whisper base.en transcripts of nine episodes, read against the SKILL.md Step 4 rubric).**
- **Regenerate (high):** Winger, Body Contact, Forechecking. Quotes and timestamps are in OPEN_ITEMS.
- **Low (scoped nearby):** Puck Handling, OZP, Team Play, Skating.
- **Clean:** Switching Positions, Centre.
- Regeneration needs the owner (no NotebookLM API).

## Content change

**`content/off-the-ice/team_play_and_culture.md`**
- **The gap:** KT4, Common Mistakes :651 and the non-check section said "lean while you both play the puck" with no Hockey Canada limb and no USA Hockey released-puck limb (body_contact, forechecking and OZP were fixed in SG44–48).
- **KT4 now:** "In a non-check league, hold your ice, lean only while you both play the puck — never on a player who has passed, shot or dumped it — and never step into anyone. ⚠️ In the WNIHL, play it as non-checking; where Hockey Canada bars checking, never lean; under CARHA…"
- **Common Mistakes :651:** same limbs.
- **New body paragraph :555:** "Where Hockey Canada bars checking — U13 and below, female hockey, and any division a Member adds — keep contact incidental and never lean." Source: HC 7.3 and 7.3(a).
- **Body :553:** adds the USA Hockey passed-or-shot limb.
- **:555, after the rules-verifier found it priced only the minor tier:** the new paragraph now ends "…makes it a minor to intentionally bump, shove or push anyone (7.3(a)) — a major plus a game misconduct for a violent one, mandatory if the player is hurt, and a match penalty for a deliberate attempt to injure (7.3(b), (c))."
- **KT4 and CM:** "just" dropped; the rule has no time window.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules and safety (team_play) | safety-reviewer (quoted primary text, two passes) | Verified against HC 7.3 scope, definition and 7.3(a) (hc_2026-08-print.txt :6001-6060); the USAH Casebook Glossary (Contact with / Possession of the Puck); IIHF 101.1 for the WNIHL "lean only while both playing the puck" (correct for a non-checking IIHF-governed league); CARHA 49. **Pass 1:** CLEAR with one major (KT4 and CM lacked the USAH limb) → fixed. **Pass 2:** CLEAR. **Pass 3 (on the :555 tariff fix):** CLEAR. Optional minor left open: name where Hockey Canada bars checking inside KT4. |
| Rules (team_play) | rules-verifier (two passes) | **Pass 1:** all four claims VERIFIED. The USAH released-puck limb is backed by the Glossary (Possession and Contact with the Puck), 640(b) and 604(c) (incl. Adult Male). HC 7.3 scope and the incidental-contact clause are verbatim. "Never lean" is a safe reading (HC never uses "lean"; the 7.3 definition and 7.3(a) reach it). One gap on the permissive side: :555 priced only 7.3(a), omitting 7.3(b)/(c). **Pass 2:** the fix is VERIFIED, and "(7.3(b), (c))" is correct (the injury paragraph sits under 7.3(b) per hc_layout.txt:4739-4745). Dropping "just" is VERIFIED. Run after the first commit-gate blocked on C4. |
| Published-audio audit | general-purpose (text) + general-purpose (whisper) | As above. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_marker_pairs: 0 lost. |


## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked (primary text quoted; earlier rules-verifier passes on the same claims) |
| D4–D5 citations | Checked: HC 7.3 and the USAH Glossary |
| D6 negative existence | Out of scope |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: KT4, Common Mistakes and body now agree |
| D10 facts | Out of scope: the page has no facts blocks |
| D11 safety | Checked |
| D12 read-aloud | Not rendered (team_play). Audio was audited by transcript. |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links |
| D15 rendered site | Build passes. No visual pass. |

## What this method could not have found

- Whisper mishearings: a scope clause lost in transcription. Each NotebookLM hit needs confirming by ear.
- Paraphrased cues outside the searched vocabulary, in both the scripts and the NotebookLM audio.
- The ElevenLabs single-voice audio itself: the scripts were checked, not the audio. The re-synthesised episodes will be transcribed before publishing.

## Re-synthesis (SG50c, same day)

- **Winger Detailed: re-synthesised and republished.**
  - Synthesis: eleven_v4, voice L0Dsvb3SLTyegXwtm47J, stability 0.3, similarity 0.5, wav_44100, 5 chunks of up to 9,000 characters, billed 21,452 credits, 45:33.
  - Whisper check: alignment 0.985 with no skipped stretch of 8 or more words. The new SCOPE and SPIN lines are audible at 05:44–06:20 and 16:31.
  - Published: build_podcast_audio --style principles --doc winger, uploaded as winger-a2699f91.m4a (HTTP 200), podcast-principles.json updated.
- **The other six stopped with HTTP 401 quota_exceeded:** 2,028 credits left on the ElevenLabs account. Switching Positions has chunks 1–4 cached. Skating, OZP, Puck Handling, Centre and Basics carrying-the-puck have none. About 90k credits are needed (upper bound; actual billing has run at about 48% of characters). The owner must top up; the runner script is in the scratchpad (sg50_synth.sh) and is safe to re-run.

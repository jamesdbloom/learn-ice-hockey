# False "time" call: the safety limb propagated (21 October 2026)

**Origin.** The safety review of The Basics "Playing goal" script found that it taught the goalie's "time" call with no warning. That gap came from `goaltender.md`. The limb is owned by `content/foundation/on_ice_communication.md:15`: *"Never say "time" unless you are sure … A false "time" sends a teammate into a hit unbraced."* It had reached that document and stopped there.

**Method.** One author (tm1) worked through four rounds. Each round was read by a fresh safety reviewer. The brief named the claim, not a line: every unit that teaches "time" as a call to make. A corpus-wide grep for the quoted call widened the scope from 3 files to 7.

## Sites changed (18 sites in 7 files, plus 1 diagram caption)

| File | Sites | Layer |
|---|---|---|
| positions/goaltender.md | :29 Key focus, :843 facts, :856 body, :1729 KT11 | the goalie is the caller |
| positions/defender.md | :107 body | D2 calling to the partner |
| systems/breakouts.md | :170 facts, :186 body, :1067 facts, :1079 body | §2 partner, §9 goalie's calls |
| hockey-iq/playing_without_the_puck.md | :797 facts, :809 body | "give information" |
| technique/body_contact_and_battles.md | :970 facts, :974 body | §Talk, calling to a player going back head-down |
| hockey-iq/puck_support_and_spacing.md | :584 facts, :602 body | the layered double-team "you have time" |
| foundation/on_ice_communication.md | :532 facts, :702 KT5, :701 KT4 | "Early beats accurate" now carries the "time" exception; KT4 "give it every time" changed to "make the call every time" (aloud it sounded like "give 'time'") |
| site/src/diagrams/on_ice_communication.mjs :267 (+ diagrams.json) | caption | "he was not braced for" → "they were" (gender-neutral ruling) |

No ⚠️ marker was added or removed. Every limb is calm prose, written as coaching caution with no citation.

## Left alone, with reasons

- **time_and_space.md :614 and :638** ("Trust 'time' when you hear it"): this is the receiver's side. An attempt to add "and still take your own look" was reverted, because it made the facts line disagree with the body.
- **puck_support_and_spacing.md :441, scanning_and_anticipation.md :175/:235, on_ice_communication.md :496:** receiver-side.
- **center.md:** it never teaches the call.
- **on_ice_communication.md :544** ("Early beats accurate" body bullet): the coordinator rendered it, and it shares spoken chunk 042 with the :556 exception.

## Reviews

- **tmS** (safety-reviewer) read the first 9 sites and upheld all 9.
  - Accuracy: ✓.
  - Same spoken unit: ✓. It rendered goaltender, defender, breakouts, playing_without_the_puck and time_and_space.
  - Antecedents: ✓.
  - It found 2 MAJORs, body_contact §Talk and puck_support, which were fixed in round 3.
  - Its MINORs: the definition-only facts lines, the KT4 mishearing, and the caption pronoun.
- **tmS2** (safety-reviewer) read the round-3 sites (body_contact :970/:974, puck_support :584/:602, goaltender :843, breakouts :1067, on_ice_communication KT4 and the caption; it rendered goaltender) and upheld every one, rendering five documents.
  - MAJOR: on_ice_communication KT5 "Early beats accurate" licensed a slightly wrong "time" when voiced alone, and no Key Takeaway carried the exception. This predates the wave. Fixed in round 4.
  - MINORs: breakouts :1067 "call it" had an ambiguous antecedent, and puck_support :584 named the wrong call. Both were fixed in round 4.
- **Round 4** (KT5, :532, :1067, :584) was **not read by a third reviewer.** The edits are the reviewer's own sketches, adjusted for antecedent. tm1 kept "except 'time'" out of the bold maxim so that it could not attach to "loud beats clever". The coordinator rendered on_ice_communication: the new KT5 sentence sits in its own Key Takeaway unit. The commit gate read all four voiced alone and passed them under C11.

## Gates (run after the final content edit, no pipe)

- check_facts: pass.
- check_links --quiet: pass.
- check_absolutes: pass, including the rebuilt caption json.
- check_geometry: pass.
- check_secrets: pass.
- check_marker_pairs on all 7 files: 0 LOST, 0 SPLIT.
- check_counts --update: no change.
- `npm run build` (absolute binary, full chain): exit 0, check-links clean.

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy | Out of scope: no rule claim changed. The limb is coaching caution owned by on_ice_communication :15. |
| D2 sources/provenance | ✓ every limb traces to :15 |
| D3 cardinal rule (coaching as law) | ✓ worded as an instruction, no rule claimed |
| D4 summary-layer propagation | ✓ Key focus, KT11 and KT5 carry it where the call is taught |
| D5 numeric ownership | Out of scope: no figures |
| D6 negative existence claims | Out of scope |
| D7 folklore | Out of scope |
| D8 qualifications preserved | ✓ |
| D9 facts layer | ✓ caps checked, antecedents read voiced alone (tmS, tmS2) |
| D10 safety | ✓ tmS, tmS2 |
| D11 layer test | ✓ per-layer tables in both reviews |
| D12 spoken rendering | ✓ md_to_speech renders, same-chunk verified |
| D13 site rendering | Build passed; no browser pass. Prose-only change plus one caption string, so it is deferred to the "Site-reviewer pass due" row in OPEN_ITEMS.md, which names this wave's items. |
| D14 house style / readability | ✓ one qualification, calm register |
| D15 cross-document consistency | ✓ the same wording family in all 7 files |

## What this method could not have found

- The "time" call taught as a **paraphrase** ("you're clear", "nobody's on you"). Every search matched the quoted word.
- The **podcast scripts** for the other 38 Detailed episodes, which are not yet written. The Basics scripts that teach the call (playing-goal, teamwork) carry the limb.
- **About 449 gendered strings in other diagram modules.** These are recorded as a plan row and not touched here.

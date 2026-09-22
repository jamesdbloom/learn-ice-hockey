---
name: scripted-episode
description: Write a single-voice podcast script from one corpus document, for synthesis through md_to_speech.py. Use when generating audio the project controls end to end, rather than driving NotebookLM.
---

# Writing a scripted episode

**This skill replaces the NotebookLM workflow for any document it is used on.**
Read `project/plans/OPEN_ITEMS.md` (podcast section) first — it owns what is open,
and `project/reviews/podcast_automation_plan_consolidated_2026-09-20.md` owns the
direction, the costs and the engine decision. This file owns **how a script is written.**

## Why this exists

Four consecutive NotebookLM generations were NO-GO. ⚠️ **The failure mode shifted
between attempts**: early ones *invented* (catchable by reading the source), later
ones committed **TRANSMISSION errors** — rules the source states correctly coming
out wrong. Those look sourced, cite real books, and only a **primary-rulebook grep**
catches them. **A generator we cannot inspect cannot be fixed by better prompting;
four prompt versions proved that.**

## Non-negotiables — these outrank everything below

1. ⚠️ **Every sentence must be traceable to the document you were given.** Not to
   hockey knowledge, not to a sibling document, not to a rulebook you went and read.
   **If it is not in the source, it does not go in the script.**
2. **Never state a rule from memory.** The source already carries its citations;
   use those words.
3. ⚠️ **Never strip a hedge.** *"could not be verified"*, *"a coaching choice rather
   than a law"*, *"the two books disagree"*, *"ask your league"* — these are the
   corpus's integrity and **a listener needs them more than a reader does**, because
   they cannot glance back.
4. **Never present a coaching choice as a law of hockey** (non-negotiable 7). Name
   the system, name a realistic alternative, say the reader should find out which
   their team plays.
5. ⚠️ **A safety limb travels with its instruction, in the same breath.** Never as a
   trailing caveat a listener can miss. Commit `d09b318` exists because a safety
   limb landed as an optional alternative.

## Single voice, not two

⚠️ **Decided 18 September 2026. Do not reintroduce dialogue.** Two speakers were
dropped because the value of banter did not justify the quality risk, and a single
narrator **removes the turn-boundary prosody problem** — separately synthesised
turns share no prosody across the join, which is what made earlier stitched attempts
sound electronic.

**Write for one voice talking to one person.** Second person. No host names, no
"welcome back", no fabricated enthusiasm.

## ⚠️ Rule citations and figures — the policy is per document

From the owner: *"if the content is about rules … then quoting rule numbers is fine,
but if we [are] talking about the positions or the systems content we should almost
never be quoting rule numbers [or] figures … unless it is absolutely key to why a
player behaves in a certain way."*

| Tier | Documents | Citation policy |
|---|---|---|
| **Rules documents** | `rink_map`, `rules_primer`, `uk_rules` | cite freely — the citations *are* the content |
| ⚠️ **Rule-shaped** | `faceoffs`, `body_contact_and_battles`, `goaltender`, `game_management` | cite **only where the rule is the reason for the behaviour** |
| **Everything else** | the rest | **almost never cite.** Teach the behaviour; if a rule drives it, say **what happens to you**, not which numbered rule says so |

⚠️ **The middle tier is not a hedge — it is measured.** Those four are in the corpus's
top six by rule-and-figure density *without* being rules documents, because a faceoff
**is** a rules procedure and goaltending **is** rule-shaped. **A flat "systems and
positions never cite rules" would gut them.** Re-measure rather than trusting this
table: it moves with every content edit.

⚠️⚠️ **A PENALTY CONSEQUENCE IS NOT A FIGURE.** *"That is a major and a game
misconduct"* is the teaching point. **Never strip it to satisfy the citation
policy** — non-negotiables 3 and 4 outrank this section.

⚠️ **`conditioning_and_recovery` is the exception nobody has settled:** it is
**figure-dense rather than rule-dense** (sets, reps, durations), so "don't quote
figures" may remove its entire practical content. **Ask before scripting it.**

## Structure — progressive disclosure, and it is the point

The owner asks for *"the strict progressive disclosure and summarising technique"*.
⚠️ **This is what an earlier constraint revision accidentally destroyed** — accuracy
rules suppressed teaching depth as a side effect and an episode collapsed from 43
minutes to 18. **Length is not the goal; it is the symptom of teaching properly.**

Required, in this order, per idea:

1. **State one idea, plainly.** One. Not three.
2. **Restate it** in different words before building on it.
3. **A worked example** — concrete, from the source.
4. **The practical consequence** — what the listener does differently.
5. ⚠️ **An explicit recap before each new layer.** *"So we have two things so far…"*
6. **A closing summary** of the whole episode.

⚠️ **Repetition is REQUIRED, not padding.** A listener cannot re-read. Say important
things more than once, in different words, and say when you are about to.

## Writing for the ear

- **Short sentences.** A subordinate clause a reader parses, a listener loses.
- **No bullet lists read aloud as lists.** Turn them into prose with ordinals.
- ⚠️ **No pronoun whose antecedent is more than one sentence back.** A rendered chunk
  found on 18 September attributed a rule to the wrong book because *"its"* pointed
  20 words back to a different subject.
- **Signpost transitions**: *"Now let's go one layer deeper."*
- ⚠️ **Never point at something the listener cannot see** — no *"as the table
  shows"*, no *"see the Sources section"*. `scripts/check_pointers.py` exists for
  exactly this, and **the Sources trailer is not voiced at all.**

## Output and synthesis

Write **Markdown**, one file per episode, and synthesise through the existing
pipeline — `scripts/md_to_speech.py` takes `--content <dir>`, so **no new synthesis
path is needed.** It already carries the graded pause hierarchy, the notation rules
and the chunking.

⚠️ **Polly's generative engine rejects `<emphasis>`** — `InvalidSsmlException:
Unsupported Generative feature`. Structure and `<break>` only.

## Before the script is accepted

- [ ] Every claim traced to the source document. **Name the line for each.**
- [ ] Rendered through `md_to_speech.py` and **every chunk read** — that is how this
      project's two criticals were found, and a body-only read missed both.
- [ ] ⚠️ **A `rules-verifier` pass against the PRIMARY RULEBOOKS, not against the
      source document.** A source-comparison pass cannot see a transmission error.
      **This is the standing per-episode cost and it must be priced in.**
- [ ] A `safety-reviewer` pass if the document touches contact, technique at speed,
      equipment, injury or a penalty.
- [ ] ⚠️ **Do not script a document whose content is still under repair.** A script
      written against text that then changes is a script to be rewritten.

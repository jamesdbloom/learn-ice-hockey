# NotebookLM prompt rewrite (20 October 2026): hosts discuss the topic, with fewer rules

This round answers the owner's feedback of 20 October, after listening to the NotebookLM episodes:
- **(a)** The episode should sound like two hosts discussing the topic. It should never sound like a discussion of a document, a guide or a website.
- **(b)** Rules should be kept to a minimum, with no comparison of rulebooks. This matches the Principles (Style B) standard in `project/podcast_style_b_script_standard.md` §2.

## Files

| File | What changed |
|---|---|
| `.claude/skills/notebooklm-episode/prompt_constraints.md` | A new brief at the top (3,853 characters) is the Customise-box text. It holds the "never say" list of source references and the rules budget (about one minute in ten, two in ten for the rules-heavy topics). It also holds the safety floor described below. The register section and constraints 1, 3, 5, 6, 7, 8 and 12 were rewritten for (a) and (b). |
| `project/podcast_generation_prompt_longer.md` | The hosts now teach the topic as people who know it, and start straight on the topic. "Historical context" is removed, because it invited invented history. |
| `.claude/skills/notebooklm-episode/SKILL.md` | Steps 2–5 now match the real workflow: two sources, with the short brief in the 5,000-character Customise box. Checklist B is now: no book's answer stated as everyone's; the checking gate every time; no consequence made cheaper or conditioned on injury. Checklist C adds a source-reference count (target 0) and a rules-time count. |
| `project/plans/PODCAST_MANUAL_STEPS.md` | Step 6: rename the uploaded source to a plain topic title. Step 9: the new focus text, with a truncation check. Ear-check items 3, 6, 8, 14 and 15 updated. |

## How honest uncertainty survives without naming a source

The hosts voice the uncertainty in their own words, at the strength the source gives it. For example, "I haven't seen that properly measured", "coaches differ on this", or "it isn't the same everywhere — check your league". They must never strengthen "not found" into "doesn't exist". They must never drop the uncertainty. They hedge the evidence, never the safety instruction.

## Review

Author: np1. Two independent safety-reviewer passes followed.

**npS (pass 1).** Found 1 CRITICAL, 7 MAJOR and 6 MINOR. All were applied.
- **CRITICAL.** The checking gate was "said once". It must now be said every time hitting is taught.
- **MAJOR:**
  - One worked example made an ejection depend on injury. The text now says it "can end your game even if nobody is hurt" (USAH 608(b)).
  - A mentioned rule must carry its exception in the same sentence.
  - The Elite League constraint was stale. The casebook is now on disk and quoted in uk_rules.
  - Hedge the evidence, never the safety instruction.
  - State the safe default.
  - Safety points sit outside the rules budget and the top-ten list.
  - SKILL.md and the manual steps had told the owner to paste a 40,000-character prompt into a 5,000-character box.
- **MINOR.** The author scoped the m6 forearms myth to Case 3, a player already facing the wall (body_contact :911), and not to delivering a check. npS2 confirmed the author was right.

**npS2 (pass 2).** Found 0 CRITICAL, 1 MAJOR and 6 MINOR. All were applied in the reviewer's sketch wording.
- **MAJOR.** The box must keep injury response exact and in full, and keep concussion and a suspected neck or spine injury apart.
- **MINOR:**
  - Say the default first.
  - The checking gate covers "your league, your age group and the game you're in" (USAH 604(a)/(b)).
  - No one-league permission stated as universal.
  - A myth is always given with its correction.
  - A stale SKILL line fixed.
  - Ear-check item 3 catches an absent gate.
  - No promise of an episode that may not exist.
  - "Stick and gloves" on the glass.

The three copies of the box are byte-identical: the master brief, `focus_text`, and Step 9.

## Not yet done

- **Pilot.** NotebookLM cannot be reached by an agent. The owner runs the browser pass: Winger first, then Body Contact and Battles. Count the source references (target 0), time the rules talk, and check the checking gate, the board posture and the injury response.
- **Stale file.** `.podcast_queue/notebooklm/instructions.md` dates from 16 October and holds the old text. It must be rebuilt (PODCAST_MANUAL_STEPS Section 1 step 2) before the pilot.

## What this method could not have found

- How NotebookLM actually weighs the box against the uploaded source.
- Whether the corpus's own heavy "this document" wording (541 uses) outweighs the prompt. If the pilot still produces source references, the next step is a cleaned upload copy.

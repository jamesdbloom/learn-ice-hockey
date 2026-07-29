---
name: notebooklm-episode
description: Generate a podcast episode from the ice hockey corpus using NotebookLM, driven through Chrome. Use when asked to make a podcast episode, an Audio Overview, or Phase 6 output; when regenerating an episode after content changed; or when asked how the podcast pipeline works. Assembles a provenance-stamped source bundle, drives the browser, and records which documents fed the episode.
---

# NotebookLM episode

NotebookLM has no API. Generation is a human — or this skill — pasting into a
browser. Everything either side of that paste **is** automatable: source
assembly, provenance, the prompt, the record of what fed what, and the review
of what came back.

Spec: [`project/site_build_specification.md`](../../../project/site_build_specification.md) §7.3 (episodes) and §8 (terms).

---

## Before you start

**Check the browser extension is connected.** Call `tabs_context_mcp` first. If
it returns *"Browser extension is not connected"*, stop and tell the user: they
need the Claude extension from `claude.ai/chrome`, logged into the same account,
with Chrome restarted after install. Do not retry — it will not fix itself.

**NotebookLM needs their Google session.** You are working in the user's own
logged-in browser. You will not be creating accounts or entering passwords; if
a login wall appears, hand back to the user rather than trying to get through it.

---

## Step 1 — Assemble the bundle

```bash
python3 .claude/skills/notebooklm-episode/build_episode.py <out_dir> "<Episode Title>" <doc.md> ...
```

This writes `<slug>__sources.md`: the documents concatenated, stamped with the
corpus commit and a SHA-256 per file. **The stamp is the point.** §7.3 asks that
episodes record which documents fed them so they can be regenerated when content
changes, and the hash is what makes "has this changed?" answerable later.

### The episodes (§7.3)

Group by **layer**, never per-document — the two-host format needs material to
work with.

| Episode | Documents |
|---|---|
| Getting Started | `getting-started/getting_started.md` |
| Foundation & Rules | `foundation/*.md` — includes `uk_rules.md` |
| The Four Positions | `positions/*.md` + `switching_positions.md` |
| Systems I (offensive) | `breakouts` `zone_entries` `offensive_zone_play` `forechecking_systems` |
| Systems II (defensive) | `defensive_zone_coverage` `neutral_zone_systems` `defending_the_rush` `special_teams` `game_management` `faceoffs` |
| Technique | `technique/*.md` |
| Hockey IQ | `hockey-iq/*.md` |
| Off the Ice | `off-the-ice/*.md` |

The Four Positions **bundle** comes to ~394k characters, comfortably inside
NotebookLM's per-source limit (500,000 words at the time of writing — check it,
it moves).

**Check for safety cross-references that leave the bundle**, before you
generate:

```bash
grep -o '\[[^]]*\]([^)]*\.\./[^)]*)' <bundle>
```

A pointer that leaves the bundle from inside a safety passage means constraint 7
cannot be satisfied for that passage — the full version is in a document
NotebookLM cannot see. Either add the target document to the bundle, or accept
it and check that the episode *points* rather than reconstructs. Two known
cases: `body_contact_and_battles.md` sends the concussion red-flag list to
`conditioning_and_recovery.md` (different episodes), and
`forechecking_systems.md` teaches a dump-in that puts a defenceman's back to the
forechecker while sending the checking-from-behind rule to
`body_contact_and_battles.md` (also a different episode).

---

## Step 2 — Build the prompt

Concatenate, in this order:

1. [`prompt_constraints.md`](prompt_constraints.md) — eight accuracy and safety
   constraints
2. `project/podcast_generation_prompt_longer.md` — the long-form teaching prompt

**The constraints go first and are marked as overriding. This is not optional.**

The long prompt asks for confidence, memorability and teaching that sticks.
Applied to hockey coaching material, that pushes two hosts straight into the
defect twenty-one review rounds were spent removing: *"F1 forechecks the
strong-side half-wall"* is memorable, *"in a 2-1-2 — and check which your team
plays — F1 usually takes the strong-side half-wall"* is accurate, and a prompt
optimising for retention picks the first every time. The same pressure drops
rule-set flags, strips qualifications off numbers, and compresses safety
caveats.

The corpus survives being read aloud. It does not automatically survive being
re-narrated by an enthusiastic host.

---

## Step 3 — Drive Chrome

`tabs_context_mcp` → `tabs_create_mcp` → navigate. **Never reuse a tab from a
previous session**, and close what you opened when done.

1. Navigate to `notebooklm.google.com`.
2. **Create notebook.** Screenshot to confirm where you are before clicking.
3. **Add the source.** Use `find` for the file input, then `file_upload` with
   its `ref`. **Do not click the upload button** — that opens a native file
   picker you cannot see or dismiss, and it will strand the session.
   - Uploading the five documents individually gives NotebookLM cleaner source
     boundaries than the bundle. The bundle is for convenience; if fidelity
     matters more, upload the originals and keep the bundle only as the
     provenance record.
4. Wait for sources to finish processing before touching Audio Overview —
   generating against a half-ingested source is a silent quality loss.
5. **Audio Overview → Customise.** Paste the Step 2 prompt.
6. **Generate.** Long-form overviews take several minutes. Poll with
   screenshots at a sensible interval rather than hammering.
7. Download the `.m4a`.

### Rules while driving

- **Never trigger a JavaScript dialog** — `alert`, `confirm`, `prompt`. They
  block the extension and end the session. Use `console.log` +
  `read_console_messages` if you need to inspect something.
- **Locate by intent, not coordinates.** Use `find` with natural language.
  NotebookLM's UI changes often; hardcoded pixel positions in this file would
  be wrong within weeks, which is why there are none.
- **Stop after three failures** on the same step, or if the extension stops
  responding, and ask the user. Do not explore unrelated pages.
- **Accepting terms, granting permissions, or anything that publishes** needs
  the user's explicit go-ahead in chat first.

---

## Step 4 — Review what came back

Do not ship on "it sounds good". The existing episodes already prove NotebookLM
produces listenable audio. The open question is whether the **constraints held**.

**Groups A and B are stop-the-line. If anything in either fails, do not generate
another episode and do not publish this one** — fix the constraints first.

### A · Safety — check this before accuracy

**Build the list before you listen.** Open the sources and write down: every
safety absolute, every checking-eligibility gate, every `Never:` line in a facts
block, every injury-response instruction, and every place the sources explicitly
refuse to advise. Listen with that list in your hand and tick items off it
individually.

That method is not decoration. Round 20 of this corpus's review found seven
criticals and **every one was an omission** — and a checklist that only asks
"did it say something wrong" cannot catch a thing that was never said.

- [ ] Did every item on the list arrive in the audio, in full?
- [ ] Did the episode **add** anything to a safety point — an exception, a
      "well, sometimes", an analogy or an example that softens it?
- [ ] Did the episode give medical, recovery, return-to-play, strength or
      nutrition guidance the sources deliberately withhold?
- [ ] Was a rejected myth voiced without its correction in the same breath?
- [ ] Does each safety sentence still mean the right thing **heard on its own**,
      by someone who joined mid-episode?
- [ ] Did the episode state, rather than point at, safety material whose full
      version lives in a document outside this bundle?

### B · Accuracy

- [ ] Is any coaching convention stated as a rule of hockey?
- [ ] Does any rule appear without the exception its source attaches to it?
- [ ] Is a rule-set difference stated as universal, or is the book named?
      (Most listeners are under USA Hockey. British listeners are under the IIHF
      book plus, in EIH/SIHA/BUIHA competition, the In-House Rules **issued by
      England Ice Hockey and the SIHA and adopted by the BUIHA** — never
      "England Ice Hockey" alone. The
      EIHL Casebook applies in the Elite League and **its contents must not be
      described**; GB teams run the IIHF book unamended; Northern Ireland is
      deliberately not covered.
      [`uk_rules.md`](../../../content/foundation/uk_rules.md) owns this.)
- [ ] Do numbers keep their qualifications — including the population they were
      measured on — or arrive bare?
- [ ] Is anything asserted that is not in the sources?

### C · Advisory

- [ ] Does layer-grouping actually beat the per-document episodes that already
      exist for centre, winger and defender?

---

Hand anything rules-shaped to `rules-verifier`, and anything about contact,
equipment, technique, injury or conditioning to `safety-reviewer`. **An episode
is content — and it is content nobody can errata after it has been listened
to.** Do this before the publishing step below, not after.

---

## Step 5 — Record it

Write the episode to `project/reviews/` or an episode log: title, documents,
their hashes, the corpus commit, the date, the prompt version used, and the
review checklist result. An episode nobody can trace to its sources cannot be
regenerated when the sources change — and they change.

---

## Before publishing

**Check NotebookLM's current terms** (spec §8). Personal use is clearly fine;
public redistribution is greyer and the terms have changed before. Record what
they said and when you checked.

Publishing is outward-facing: get the user's explicit go-ahead.

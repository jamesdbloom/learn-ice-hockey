---
name: notebooklm-episode
description: Generate a podcast episode from the ice hockey corpus using NotebookLM. Use when asked to make a podcast episode, an Audio Overview, or Phase 6 output; when regenerating an episode after content changed; or when asked how the podcast pipeline works. Assembles a provenance-stamped source bundle and the constraints-first prompt, hands the owner the manual browser pass (an agent cannot reach notebooklm.google.com), then reviews what came back and records which documents fed it.
---

# NotebookLM episode

NotebookLM has no API, and the browser tool cannot reach it either (see below),
so generation is the owner pasting into their own browser. **Everything either
side of that paste is the agent's:** source assembly, provenance, the prompt,
the record of what fed what, and the review of what came back — which is the
part that decides whether an episode ships.

Spec: [`project/site_build_specification.md`](../../../project/site_build_specification.md) §7.3 (episodes) and §8 (terms).

---

## ⚠️ Before you start — an agent cannot drive NotebookLM

**Measured 23 September 2026: the browser tool cannot reach
`notebooklm.google.com`.** `navigate` returns *"Could not verify this site's
safety category. Blocking as a precaution."* — the same refusal it gives for
every URL tried, including `example.com`, so this is the tool's own blanket
block rather than anything about NotebookLM.

**So Step 3 is the owner's, done by hand, and the agent's job is everything
either side of it.** An agent runs Steps 0, 1 and 2, hands the owner a source
file and a prompt to paste, and then runs Steps 4 and 5 on what comes back.
Do not spend a turn trying to get the browser through; it is a blanket block,
not a flaky one.

If the block is ever lifted, the automation notes kept at the end of Step 3
still describe how to drive the page — but **check first, and do not assume.**

**NotebookLM needs the owner's Google session.** No agent creates accounts or
enters passwords. If a login wall appears in the manual path, that is the
owner's to clear.

---

## Step 0 — Find out what actually needs an episode, and in what order

```bash
python3 scripts/podcast_queue.py status        # every document's episode/queue state
python3 scripts/podcast_queue.py build-queue   # add anything missing to the queue
python3 scripts/podcast_queue.py next-batch    # up to 10 queued items, oldest first
```

⚠️ **This corpus ships one episode per document, not one per layer** — `site/src/data/podcast.json`
is per-document, and `project/site_build_specification.md` §7.3 records the
17 September 2026 decision to keep it that way despite the section's own
original "group by layer" suggestion (below the strikethrough note there).
`scripts/podcast_queue.py` derives both the episode list AND its order from
`site/src/data/structure.json` — the same file that drives the site's own
navigation — so an episode's position can never drift from its page's
position. It will not queue a document speculatively: a document already in
the manifest is left alone unless named explicitly with `--stale DOC_ID
--reason "..."`, because re-running 37 already-fine episodes through
NotebookLM on a guess is exactly the rate-limit risk this tool exists to
prevent. The script's own docstring is now the authority on the queue,
checkpoint and batching contract — `podcast_queue.py` owns `BATCH_HARD_CEILING`
and its rationale outright. What is open is in `project/plans/OPEN_ITEMS.md`.

`getting-started/getting_started` is deliberately excluded from the queue —
it already has an episode and does not need a new one — but it still counts
for page order, so every other document's target track number already
accounts for it.

## Step 1 — Assemble the bundle

For each queued item, one document is one episode:

```bash
python3 .claude/skills/notebooklm-episode/build_episode.py <out_dir> "<Episode Title>" content/<doc_id>.md
```

This writes `<slug>__sources.md`: the document, stamped with the corpus
commit and a SHA-256. **The stamp is the point.** §7.3 asks that episodes
record which documents fed them so they can be regenerated when content
changes, and the hash is what makes "has this changed?" answerable later.
`build_episode.py` accepts more than one path and will bundle them if a
future episode genuinely needs to (it takes a title and any number of
`doc.md` arguments) — but per-document is the shipped convention; do not
bundle multiple documents into one episode without a coordinator decision
recorded the way §7.3's was.

**Check for safety cross-references that leave the bundle**, before you
generate:

```bash
grep -o '\[[^]]*\]([^)]*\.\./[^)]*)' <bundle>
```

A pointer that leaves the bundle from inside a safety passage means constraint 7
cannot be satisfied for that passage — the full version is in a document
NotebookLM cannot see. Either add the target document to the bundle, or accept
it and check that the episode *points* rather than reconstructs. ⚠️ **With
one-document-per-episode this is the norm, not an edge case** — this corpus's
own convention is heavy cross-linking rather than restating (see
`CLAUDE.md`'s numeric-facts-ownership rule), so almost every episode will hit
this. Two known cases: `body_contact_and_battles.md` sends the concussion
red-flag list to `conditioning_and_recovery.md` (a different episode), and
`forechecking_systems.md` teaches a dump-in that puts a defenceman's back to the
forechecker while sending the checking-from-behind rule to
`body_contact_and_battles.md` (also a different episode). The correct fix in
almost every case is confirming the episode narrates the pointer itself
("the full rule is in Body Contact and Battles") rather than inventing the
missing content — not adding more documents to the bundle, which would
recreate the per-layer approach §7.3 explicitly decided against.

---

## Step 2 — Build the prompt

Concatenate, in this order:

1. [`prompt_constraints.md`](prompt_constraints.md) — the register section, then
   the numbered accuracy and safety constraints. **Do not quote a count of the
   constraints anywhere; this line used to say "eight" and the file has grown
   since. Read the file.**
2. `project/podcast_generation_prompt_longer.md` — the long-form teaching prompt

**The constraints file goes first and is marked as overriding. This is not
optional.** Inside it the order matters too: the register section comes before
the numbered constraints because it decides the episode's *shape*, and it says
in its own words that the numbered constraints outrank it. **Do not reorder it,
and do not renumber the constraints** — constraints 10 and 11 refer to
constraint 9 by number.

The long prompt asks for confidence, memorability and teaching that sticks.
Applied to hockey coaching material, that pushes two hosts straight into the
defect this corpus's review rounds were largely spent removing (the record is
[`project/review_history.md`](../../../project/review_history.md); do not quote a
round total from here): *"F1 forechecks the strong-side half-wall"* is
memorable, *"in a 2-1-2 — and check which your team plays — F1 usually takes the
strong-side half-wall"* is accurate, and a prompt optimising for retention picks
the first every time. The same pressure drops rule-set flags, strips
qualifications off numbers, and compresses safety caveats.

**And it applies a second pressure the earlier versions of this file did not
name.** A prompt asking for frameworks, comparisons and comprehensive coverage
invites a generator to re-sort a document into the shape it finds easiest to
organise — and for this corpus that shape is a rules lecture, because rule
numbers and penalty tiers sort themselves. The corpus was re-aimed in September
2026 so that its first layers carry *what a player does*; **an episode that puts
the rulebook back at the front has thrown that re-aiming away.** That is what
the constraints file's register section exists to prevent, and it is why the
register section sits above the numbered constraints rather than at the end.

The corpus survives being read aloud. It does not automatically survive being
re-narrated by an enthusiastic host.

**Write the concatenation out as one file**, because Step 3 is a human paste and
a hand-off that can be performed in the wrong order eventually is:

```bash
cat .claude/skills/notebooklm-episode/prompt_constraints.md \
    project/podcast_generation_prompt_longer.md > <out_dir>/<slug>__prompt.md
```

`build_episode.py` does not do this and says so in its own docstring.

---

## Step 3 — The manual pass, in the owner's own browser

⚠️ **This step is the owner's. No agent can do it** — see *Before you start*.

**What the agent hands over.** Two things, named by absolute path, plus one
sentence saying which document this episode is:

1. **The source file to upload** — the original `content/<doc_id>.md`, *not*
   the bundle. One document per episode, so there is one source, and uploading
   the document itself gives the cleanest source boundary. The `__sources.md`
   bundle from Step 1 stays the provenance record either way; it carries the
   commit stamp and the hash even for a single-document bundle.
2. **The prompt to paste** — `prompt_constraints.md` followed by
   `project/podcast_generation_prompt_longer.md`, concatenated in that order,
   written out as one file ready to copy. **Hand over the concatenated file, not
   two files and an instruction to join them** — the order is the thing that
   makes the constraints override, and a hand-off that can be done in the wrong
   order eventually is.

**What the owner does, in order:**

1. Open `notebooklm.google.com` in their own Chrome, signed in.
2. **Create a new notebook.** A new one per episode — do not add a second
   document to an existing notebook, because the episode's provenance record
   says one document fed it.
3. **Add the source**: upload the `content/<doc_id>.md` file the agent named.
4. **Wait for the source to finish processing** before touching Audio Overview.
   Generating against a half-ingested source is a silent quality loss — nothing
   in the UI calls it an error.
5. **Audio Overview → Customise.** Paste the whole concatenated prompt. Check
   before generating that the paste starts with the constraints file's title
   line and not with *"Create a long-form…"* — if it starts with the teaching
   prompt, the constraints did not go in, and everything they guard is off.
6. **Generate**, and wait. Long-form overviews take several minutes.
7. **Download the `.m4a`**, and tell the agent where it landed and how long it
   runs.

⚠️ **The run length is a review input, not trivia.** A short episode is a
failure mode this pipeline has recorded — constraint 12 in the constraints file
exists because one generation came back at 18 minutes against a previous
attempt's 43, having stopped inventing and wrongly also stopped teaching. Report
the duration with the file.

⚠️ **Anything that accepts terms, grants a permission, or publishes is the
owner's decision in chat first** — see *Before publishing*.

### If the browser block is ever lifted

Kept because it was learned the hard way, not because it is currently reachable.
`tabs_context_mcp` → `tabs_create_mcp` → navigate; never reuse a tab from a
previous session, and close what you opened. **Do not click the upload button** —
it opens a native file picker an agent cannot see or dismiss, and it strands the
session; use `find` for the file input and `file_upload` with its `ref`. **Never
trigger a JavaScript dialog** (`alert`, `confirm`, `prompt`) — they block the
extension and end the session. **Locate by intent, not coordinates**; NotebookLM's
UI changes often, which is why there are no pixel positions in this file. **Stop
after three failures** on the same step and ask.

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
      book plus, in EIH/SIHA/BUIHA competition, the In-House Rules, **applied by
      England Ice Hockey, the SIHA and the BUIHA alike** — never "England Ice
      Hockey" alone, and never "issued by" anyone, because the document names no
      issuing body. The
      EIHL Casebook applies in the Elite League and **its contents must not be
      described**; GB teams run the IIHF book unamended; Northern Ireland is
      deliberately not covered.
      [`uk_rules.md`](../../../content/foundation/uk_rules.md) owns this.)
- [ ] Do numbers keep their qualifications — including the population they were
      measured on — or arrive bare?
- [ ] Is anything asserted that is not in the sources?

### C · Register — did the re-aiming survive?

**Not stop-the-line: nothing here can hurt a listener, and a register failure is
never a reason to hold an episode that passed A and B.** It is the question the
owner actually wants answered, because the whole point of re-aiming the corpus
at tactics was to produce a better episode from it.

- [ ] **What does the episode open on?** The document's Key focus — things a
      player does — or which rulebook governs and what a penalty costs?
- [ ] **Within a segment, does the instruction come before the tariff**, or is
      the instruction the last clause after two minutes of penalty tiering?
- [ ] Is a rule that *is* the tactic ("never put it over the glass from your own
      zone") led with, and a rule that is only the consequence put behind the
      instruction it modifies?
- [ ] Did the episode build a segment around fine mechanics — push direction,
      grip, blade, the deke catalogue — that the source keeps in its body?
      (⚠️ A **safety** technique is not mechanics and must be stated in full
      wherever the source states it. That is Group A, not this list.)
- [ ] Did the Key Takeaways arrive as kernels a player can act on, or as a
      rules appendix?
- [ ] Did the episode follow the source's own order, or re-sort it?

⚠️ **Record the answers whether they are good or bad.** The owner's hypothesis
is that the re-aimed sources produce a more accurate episode because there is
less tariff for the generator to flatten. **That hypothesis is untested and this
checklist is the test** — an episode that passes A and B and reads as a rules
lecture is evidence about the prompt; one that passes all three is evidence for
the hypothesis. Neither is worth anything unless it is written down in Step 5.

### D · Advisory

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
their hashes, the corpus commit, the date, the prompt version used, the run
length, and the review checklist result — **Groups A, B and C, each answered
rather than left silent.** An episode nobody can trace to its sources cannot be
regenerated when the sources change — and they change.

⚠️ **Record the Group C answers even on a clear run.** The corpus was re-aimed
at tactics in September 2026 on the owner's instruction, and whether that makes
NotebookLM's output better is an open question with no evidence on either side
yet. A clear run with Group C unanswered adds nothing to it.

---

## Before publishing

**Check NotebookLM's current terms** (spec §8). Personal use is clearly fine;
public redistribution is greyer and the terms have changed before. Record what
they said and when you checked.

Publishing is outward-facing: get the user's explicit go-ahead.

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
prevent. See the script's own docstring and `PODCAST_AUTOMATION_LOCAL.md`
for the full queue/checkpoint/batching contract.

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
   - With one document per episode there is only one source to upload —
     upload the original `content/<doc_id>.md` itself, not the bundle, for
     the cleanest possible source boundary. The `__sources.md` bundle
     `build_episode.py` writes stays the provenance record either way (it
     carries the commit stamp and hash even for a single-document bundle).
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

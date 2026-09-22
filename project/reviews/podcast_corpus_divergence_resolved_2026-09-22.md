# The podcast-vs-corpus divergence question: neither answer the plan offered

**22 September 2026.** Closes the item `PODCAST_AUTOMATION_LOCAL.md` carried as
*"coordinator decision, not agent-closable"* from 19 September, and the separate
wrong-pointer item beside it. Both are now off the plan.

## What the plan asked

The first `rules-verifier` pass ever run on a podcast script
([`conditioning_and_recovery_podcast_no_go_2026-09-19.md`](conditioning_and_recovery_podcast_no_go_2026-09-19.md))
found rows in episode three's `provenance.md` stating rules that
`content/off-the-ice/conditioning_and_recovery.md` did not state. The plan framed it as a
binary:

> Two possible directions, needing opposite responses: if the script is right, the corpus is
> short and owes a propagation; if the script is wrong, it's unreviewed new text in a file
> about to be voiced and needs stripping.

## What is actually true

**Neither.** The binary was the defect — it had no third branch, and the third branch is what
happened.

### Row 1 — USA Hockey 604(e) vs Hockey Canada 7.3(c): the corpus was repaired three days ago

The script's claim is that the two books reach a match penalty by **different triggers** —
Hockey Canada's on deliberate intent, USA Hockey's on reckless endangerment with no intent limb.
Verified against the primary text on disk, this session:

| Claim | Source line | Actual text |
|---|---|---|
| USA Hockey 604(e), no intent limb | `sources/usah.txt:3597–3599` | *"A match penalty for reckless endangerment may also be assessed for body checking in a Competitive Contact category or non-check Adult classification."* |
| Hockey Canada 7.3(c), deliberate intent | `sources/hc_layout.txt:4745–4746` | *"A Match penalty will be assessed to any player who deliberately attempts to or deliberately injures an opponent by body-checking."* |

The script is right about the rulebooks. **But the corpus is no longer short.**
`conditioning_and_recovery.md` now states the contrast explicitly, and has propagated it to all
three layers:

- **body**, `:212` — *"a match penalty, which USA Hockey's 604(e) says 'may also be assessed' for
  reckless endangerment and which Hockey Canada's 7.3(c) assesses on a player who 'deliberately
  attempts to or deliberately injures an opponent by body-checking'"*
- **Common Mistakes**, `:568` — same contrast, same wording
- **Key Takeaways**, `:638` — same contrast, restated for the summary layer

⚠️ **This row was closed by ordinary corpus work and nobody told the plan.** The plan file was
itself updated on 20 September and still carried it as open.

### Row 2 — IIHF 101.1's reciprocal limb: the corpus is correct as it stands

The script's claim is the puck carrier's obligation, and the minor the **stationary player**
takes if she moves into a carrier who is avoiding contact. `sources/iihf_rules_2026-27.txt:7609–7611`
carries it verbatim, and `conditioning_and_recovery.md` does **not** state it.

**That is correct, and propagating it there would be the defect.** The limb lives at
`content/technique/body_contact_and_battles.md:159` — *"The obligation runs both ways"* — which is
the **owner document** for IIHF 101.1: it holds the clause-by-clause treatment and five `Rule:`
facts lines (`:142`–`:148`). And `conditioning_and_recovery.md:214` does not merely omit the limb,
it **routes to that owner**: *"Body Contact and Battles sets the rule out in full, clause by
clause."*

That is the corpus's *"punt to the owner, don't restate"* caption policy, which the owner confirmed
as the standard on 21 September, applied exactly as intended. **A conditioning document should not
be carrying a second copy of a body-contact rulebook clause.**

## So what was the actual defect?

**The script, and not in the way the plan expected.** Episode three pulled owner-document material
into a conditioning episode — and for an **episode** that may well be right, because **a listener
cannot click a cross-reference.** The corpus's routing convention depends on a link, and the speech
layer has no links.

⚠️ **That is a real and unrecorded finding about scripts as a class**, and it is larger than this
episode: **every place the corpus punts to an owner document is a place a script must either
restate the material or leave a listener without it.** It is filed as a live question in
`OPEN_ITEMS.md`, not closed here. Nothing in this record licenses stripping the script's rows —
non-negotiable 3 — and the two rows quoted above are verbatim primary text, so the strip branch was
never available for them anyway.

## The wrong-pointer item, closed in passing

The plan carried, separately:

> its provenance table cites `hc_layout.txt:4772-4773` for Hockey Canada's match-penalty trigger.
> Those lines are actually Rule 7.4, Charging — the quote is correct but the pointer lands on the
> wrong rule (the right citation is `hc_layout.txt:4745-4746`).

Both halves verified true against the source, and **the repair had already been made on
19 September** — episode three's `provenance.md` now reads `4745–4746` with an inline note
recording the correction, *"the quotation was always right and only the pointer was wrong."*
`4772–4773` is indeed Rule 7.4 Charging. **Fixed before the plan recorded it as open, and the plan
never caught up.**

## What this method could not have found

- **Whether the rest of episode three's provenance table is sound.** Four rows were named by the
  original pass and four were checked. The table is ~70 KB and **`source-verifier` has still never
  been run on any podcast script** — the research layer (meta-analyses, effect sizes, a retracted
  study) remains entirely unverified and is the larger half.
- **Whether other corpus documents have silently absorbed script claims the same way row 1 did.**
  Row 1 was found closed only because it was grepped. Nobody swept for the pattern.
- **Whether the routing/speech-layer problem above bites anywhere it has already shipped.** Two
  episodes are cleared and neither was examined for it in this pass. The skating episode's
  link-layer finding suggests it does.
- **Nothing here was heard.** Every verdict is text against primary source.

---

## Appendix: the plan restructure this audit triggered, and what it touched

Closing these two items emptied `PODCAST_AUTOMATION_LOCAL.md` of everything that was not already
recorded elsewhere, which exposed a larger problem. **CLAUDE.md has said since 24 August 2026
(commit `ec70b16`) that `project/plans/OPEN_ITEMS.md` is the only plan** — written because work
*"was spread across four plan files … so 'what is open' had no single answer and items were
rediscovered rather than read."* On **14 September** commit `933ea01` created two more plan files,
and on **20 September** `OPEN_ITEMS.md` grew a *"Design specifications, not dispatch queues"*
section accommodating them after the fact.

**The predicted symptom had already recurred, twice, and this audit is how it surfaced:** answering
"is the readability work complete?" needed three files, and both items closed in this record had
been fixed days before the plan that listed them as open.

Done 22 September 2026, at the owner's instruction:

| File | Action |
|---|---|
| `plans/READABILITY_AND_DUAL_AUDIENCE.md` | **moved** to `project/readability_and_dual_audience.md` — a design spec beside `content_style_guide.md`, not a plan. Open threads became rows in `OPEN_ITEMS.md`. |
| `plans/PODCAST_AUTOMATION_LOCAL.md` | **deleted** — open items became rows in `OPEN_ITEMS.md`; its history was already in `podcast_automation_plan_consolidated_2026-09-20.md`. |
| `plans/PODCAST_MANUAL_STEPS.md` | **kept**, as the one deliberate exception: the owner's own worklist, not a dispatch queue. |

⚠️ **Archived review records were edited, and the limit observed was strict: link PATHS only, never
prose.** Nine pointed at the moved file and six at the deleted one. Paths were retargeted — the
moved file to its new location, the deleted one to the consolidated record that holds its content —
and **every link's visible text was left carrying the original filename**, so a reader of an archive
still sees the name the record was written with. **No finding, figure or sentence in any archive was
altered.** Archives are evidence; a path is navigation.

### A stale citation found while repointing

`scripts/podcast_queue.py:111` read
`BATCH_HARD_CEILING = 10  # project/plans/PODCAST_AUTOMATION_LOCAL.md: "at most 10 per batch"`.
⚠️ **That file had not contained the quoted string since the 20 September consolidation** — the
citation outlived the sentence by two days, and nothing could see it, because no checker reads a
Python comment. The figure and its rationale (*"a hard rate-limit and recovery ceiling, not a
throughput target"*, commit `919982c`) were recovered from git history and written into the constant
itself, which is now their only owner. **The general form is this project's own recurring defect:
pointing at prose someone else can edit underneath you.**

`scripts/tts_sample.py`'s closing line had the same shape in the other direction — it told the
reader to see a file for *"the minimum setup steps per vendor"*, a section that had never existed in
any version of it. It now points at `PODCAST_MANUAL_STEPS.md` step 2, which does.

### The untracked mirrors were swept, and one of them has gone

`.agents/` and `.codex/` — the mirrors this project keeps for another agent runner — are outside
`check_links.py`'s scope by construction, so they were swept by hand. **Neither references either
old path**, so nothing there needed repointing.

⚠️ **But `AGENTS.md` does not exist.** `OPEN_ITEMS.md`'s standing method notes name
*"`.agents/`, `.codex/`, `AGENTS.md`"* as the three untracked-and-un-ignored-on-purpose entries,
with an instruction not to delete them without asking. One of the three is already gone, and
because it is untracked, **git cannot say when or by whom.** Corrected in the note rather than
acted on — it is explicitly not this session's to restore.

### What this appendix could not have found

Whether the two mirrors are otherwise in step with what changed here. They were grepped for two
path strings and nothing else; a mirror can be stale in every other respect and this sweep would
not know.

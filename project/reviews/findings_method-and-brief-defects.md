# Findings — method and brief defects

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 17 section(s).

---

## ⚠️⚠️ ROUND 70 — WHAT IS OPEN AFTER IT. Full record: [`round_70`](../reviews/round_70_the_caption_layer_was_never_swept.md)

---

### ⚠️⚠️ TWO AGENTS, ONE BRIEF LINE, OPPOSITE CONCLUSIONS — and the wrong one reached content

**I gave two agents the same sentence: *"WIDE ICE IS THE BRITISH READER'S RINK."*** ⚠️ **One REFUTED it
from the rulebooks and refused to write it. The other CARRIED IT INTO `switching_positions.md` — body,
facts, Common Mistakes, Key Takeaways, Sources trailer and a caption.**

⚠️ **THE RESULT INVERTS THE ADVICE FOR THE READER THE 🇬🇧 FLAG ADDRESSES.** **The document now says *"the
wider sheets most British and European readers play on"* and tells them to rely LESS on the wall.**
⚠️ **A British reader in a 70 ft rec rink is on NARROW ice, where the wall helps MORE — and the owner says
their working assumption should be that their rink is SMALLER than both standards, listing 65–80 ft sheets
as common.**

⚠️ **THIS IS THE "CHECK FOR CONTRADICTIONS BETWEEN AGENTS AFTERWARDS" RULE PAYING OFF, and it was found by
grepping the finished file rather than by trusting either report.** **CLAUDE.md's instance was two agents
writing individually-correct contradictory sentences into one block; this is worse — one agent's output is
FALSE, and it is false because I told it so.**

**Dispatched for correction: keep the wall-versus-width limit (it is real and stated in only one other
place), make it CONDITIONAL rather than NATIONAL, and reconsider the 🇬🇧 flag, which renders as *"For
British readers,"* and therefore asserts the claim OF the very readers it gets wrong.**

**Third defect this session traceable to a premise I asserted** — after the CARHA overtime claim and the
`:461` facts line I nearly had "repaired".

---

### ⚠️ A CHECKER/AGENT RACE, CAUGHT AND CORRECTLY NOT ACTED ON

⚠️ **Mid-run, `check_links` reported `body_contact_and_battles.md:1325` pointing at a heading that did not
exist. It CLEARED on a later run with no change by that agent.** ***"Do not let anyone 'repair' it on that
first report."*** **CLAUDE.md documents this exact race in both directions; this is a fresh instance.**

---

### ⚠️ AND MY CENSUS WAS SHORT BY THREE AND WRONG ABOUT A SEARCH STRING

**Missing from my list: `switching_positions.md:178`/`:188` and `switching_positions.mjs:161` plus its
built caption.** ⚠️ **And `puck_handling.md:473` says *"a free extra defender"*, not *"second defender"* —
the agent's own first census missed it for the same reason mine did.**

---

### ⚠️ METHOD — THE SESSION SCRATCHPAD IS SHARED, AND A SCRIPT WAS OVERWRITTEN MID-TASK

⚠️ **An agent wrote a generic `render.mjs` to the shared session scratchpad. Another agent overwrote it
mid-task, and the first agent's next run SILENTLY RENDERED THE OTHER AGENT'S DIAGRAM LIST.**

**It noticed, renamed everything with a unique prefix, and reported it.** ⚠️ **This is the third
scratchpad-collision this session** — earlier ones hit a reused `before/` directory holding 21 stale PNGs
from 30 August, and a `preview-diagrams` output directory shared between two diagram agents.

⚠️ **STANDING RULE, already in the plan and now measured three times: AGENTS MUST NAMESPACE SCRATCHPAD
FILES.** **A generic name in a shared directory is a silent-wrong-answer generator, not a clash.**

---

### ⚠️ METHOD — `md_to_speech --only` LEAVES SIBLING RENDERS STALE, and nearly produced a false finding

⚠️ **An agent's first render this round showed a pinch section carrying PRE-REPAIR text and a bare
permission. It was a 1 SEPTEMBER RENDER left in the scratchpad**: `--only` regenerates just the matched
document and **silently leaves every sibling stale.** **The fresh render was clean.**

⚠️ ***"A `--only` render into a reused output directory is not evidence about any other document."***
**Add it to the standing method notes. (Usefully, the stale copy preserved the pre-repair text and
independently confirmed the ten-site half-rule repair had landed.)**

---

### 3. ✅ ORIENTATION — CLOSED. The premise was false, and the class is empty.

**The owner's example:** *"in **Carrying the Puck — Under Pressure** under **Defensive Zone**, it is not
clear we are talking about Under Pressure in the Defensive Zone unless you scroll up."* The plan then
recorded it as *"measured and worse than described — that heading appears THREE times in
`winger.md`."*

⚠️ **It appears zero times in the BARE form the complaint describes.** The three headings read
`### Defensive Zone: Carrying the Puck — Under Pressure`, `### Neutral Zone: …` and
`### Offensive Zone: …` — **each already prefixed with its zone, which is exactly what the owner asked
for.** All twelve of `winger.md`'s zone sub-headings carry their zone —
`:59, :82, :123, :160, :197, :216, :251, :275, :310, :331, :354, :390` — **and have done since commit
`b9ed6b7`.** `grep -rn '^#\{2,4\} Carrying the Puck' content/` returns nothing corpus-wide. **Verified
by the coordinator as well as by the agent. The fix shipped before the row was written.**

⚠️ **And the whole class is empty.** Duplicate headings within a file were censused across all 37
documents **three ways** — exact heading lines, level-stripped text, and **rendered-speech strings**,
which is the test that matters and had never been run. **Zero hits.**

**The harder half — headings that are unique but unplaceable aloud — was measured at 54, and its
safety-bearing subset is ALSO empty.** ⚠️ **The reason is a structural property of this corpus that
nobody had written down: the ` ```facts ` block immediately after a deictic heading RE-NAMES THE
SUBJECT, so orientation is restored within one spoken unit.** *"The high-slot rotation."* is followed
by *"Under low zone collapse, puck in the strong-side corner…"* — system **and** location. **29 of the
54 have no block, and every safety- or penalty-touching one of those is rescued by its first body
sentence.** Only `puck_support_and_spacing.md:52` fails both tests, and it is not safety-bearing.

**Residue, worth a wording pass and nothing more:** `zone_entries.md` §5 and §6 carry near-identical
child headings ~50 lines apart (*"How to do it"* / *"How it works"*, *"Why it works"* / *"Why it fails
so often"*) — the shape the item was chasing, minus the exact string collision a duplicate census
would see. **Both are rescued by their first facts value.**

⚠️ **The lesson for the plan, not for the corpus: this row survived because nobody re-ran the grep it
was built on. The corpus was already correct and an agent was dispatched to fix it.**

---

---

## ▶ RESUMING — read this first

---

---

### What this round was, in one line

**The briefs were the defect, and then the round's own repairs were the defect.** Every wave
found the previous wave's census short — ten pass routes were nine and then fifty-nine
measured; seven speed sites were nine; two remaining scope sites were six. **A census taken
from a brief is a census of the brief.**

⚠️ **The single most important thing on this page:** the corpus had **disclosed** the
walking-speed division of labour in **three documents**, and the round propagated the
flattened universal past all three. Every mechanical gate passed the whole way, because **a
flattened universal and a scoped one are the same shape to a checker.**

---

### ✅ CLOSED — the corpus-wide check-yourself edit was ALREADY MADE, rounds ago

⚠️ **This row instructed an edit that does not need making, and it nearly became a brief.**
Measured 2026-08-31 with a flattened regex over all 37 documents, then the same over
`git show HEAD:`: the separator after *"not a guess"* is **already a full stop in all 36
documents, and already a full stop in HEAD.** The sweep was made and committed in an
earlier round; this row was never retired.

**The lesson is the round's own:** a row that says *"READY AND VERIFIED"* and *"it has not
been made"* is still only a claim, and it was **stale** (category G1a). Dispatched as
written, an agent would have gone looking for a divergence that does not exist — which is
exactly how round 44 manufactured one. **Re-measure a row before briefing it, even when the
row says it was verified.**

The original row is kept below unaltered, because the reasoning in it about *why* the
negation carries across the em dash is correct and is the reason the edit was right.

#### The original row, retained for its reasoning — DO NOT ACT ON IT

**Censused fresh: 36 documents, byte-identical, and it is the ONLY stock line in the corpus
carrying this shape.** A scan of every line appearing in 3+ documents with an em dash, a
negation before it and an imperative after it returns **exactly one hit** — this one. The
sweep is bounded and complete.

```
now   Answer each question before you go on — a real attempt, not a guess — then go and check,
      because the checking is the part that does the work.

to    Answer each question before you go on — a real attempt, not a guess. Then go and check,
      because the checking is the part that does the work.
```

The negation *"not a guess"* sits immediately before the second em dash and an instruction
follows it, so a listener carries the negation across and is told **not** to go and check —
which is the one thing the exercise exists to make them do. The first dash is fine: it
introduces an **appositive**, not an instruction.

**Verified through the renderer**: both forms pass through unchanged apart from the
punctuation, so the full stop is the whole of the change and nothing else moves.

⚠️ **Preconditions, all three:** `git diff --name-only content/` empty of agent work,
`git status` and `git log -1` immediately before, and **one edit** across all 36 — not 36
edits. Every live agent has been told to leave this line alone.

#### The original row

**Byte-identical in 36 of 37 documents**, in the Check-yourself preamble:

> *"Answer each question before you go on — **a real attempt, not a guess** — **then go and check**,
> because the checking is the part that does the work."*

⚠️ **`not a guess` before the final dash; `then go and check` — an instruction — after it.** Confirmed
rendering as **one voiced `<p>`**. The negated hearing tells a reader not to check, in the sentence
whose entire purpose is to tell them to check.

⚠️ **It must be ONE edit across all 36, and it has not been made.** The agent that found it repaired
nothing: *"changing it in six files would leave thirty carrying the other wording, which is a
divergence I would have manufactured."* **That judgement is right and is why this is a plan row rather
than a repair.**

**Suggested form** (the round's standard, verified elsewhere): *"— a real attempt, not a guess. Then
go and check, because…"*

⚠️ **Sequencing, and it binds:** this is a 36-file sweep, and commit `239f70d` exists because a
corpus-wide sweep raced document-level agents. **Run it only when no agent holds a `content/` file**,
with `git status` and `git log -1` immediately before. **Every live agent in the current wave has been
told to leave the line alone**, so the 36 stay identical until one edit changes them together.

---

### ✅ CLOSED — the `--hedges` section-split bug was ALREADY FIXED in HEAD (`8a0b64e`)

⚠️ **The THIRD stale row found today, and the pattern is now the finding.** Work was done,
the row was never retired, and the row still read as an instruction. Dispatched as written,
an agent would have "fixed" a fixed tool.

**Measured properly on the way to discovering that** — a faithful pre-fix reconstruction
diffed against HEAD, both run on the current tree:

- **71 hits before, 52 after.**
- **22 vanished, and all 22 were FALSE ATTRIBUTIONS** — verified by line number, the
  reported sentence lived under a different heading from the one it was blamed on. 13 in
  `## Common Mistakes` / `## Key Takeaways`, 9 in ordinary later `##` sections, distances
  18–124 lines. **None was a lost real finding.**
- **0 were merely re-attributed.** They vanish rather than move because the true section is
  either a skipped summary layer or a `##` with no facts block.
- ⚠️ **3 APPEARED** — `##` sections carrying their own facts block and no `###` subsections,
  **previously invisible to the tool entirely.** That is the half of the bug the original row
  did not describe: the landed fix keeps `##` sections too, which the row's proposed fix
  ("keep only sections starting with `### `") would **not** have done. **The row's fix was
  narrower than the bug.**

**Two of this row's own specifics had drifted and are corrected:** no hit's sentence is at
line 1323 (nearest is 1409), and the worst swallow is **4** `##` sections, not six.

⚠️ **Also fixed while there: `check_facts.py` carried TWO hit counts that disagreed with each
other and with reality** — the docstring said *"about 31 sections"*, a block comment said
*"about 35 of 654"*, actual is **52 of 1082**. Both stale in numerator *and* denominator.
Replaced with a pointer to the tool's own output. Comments only, zero behaviour change,
`--hedges` output byte-identical, gate figures unmoved.

#### The original row, retained for its reasoning — DO NOT ACT ON IT

`report_hedges` splits with `re.split(r"\n(?=### )", text)` — **on `###` only**. So a document's
trailing `## Common Mistakes`, `## Check yourself` and `## Key Takeaways` are absorbed into
whatever `###` section came last, and a hedge sentence in any of them is reported against a
section that does not contain it.

**Confirmed by hand, twice, and it is worse than first measured.** One "Fighting" hit's
sentence was at **line 1323, inside Key Takeaways**. And a second reviewer found the artefact
accounts for **5 of the 15 hits in its file set — one of them swallowing SIX whole `##`
sections**, so the flagged text came from a section six headings away from the one named.

⚠️ **Measured across four triaged file sets — and the picture is NOT uniform, which is the
finding.** In two sets (`body_contact_and_battles`, the five `positions/` documents) **zero of
27 flagged sections was a real defect at the flagged sentence**: nine were exceptions already
in the block, often verbatim, six were this artefact, the rest immaterial. **In two other sets
(`faceoffs`, `technique`+`hockey-iq`) the census had genuine true positives** — three of seven
and four of twelve respectively, including a flattened conditional and a classification-scoped
exception that reached the body and Common Mistakes but not the block.

**So the census is neither a defect list nor noise. Its precision varies by document, its
recall is unknown, and roughly a quarter of all flags are the `##`-absorption artefact.**
⚠️ **An earlier entry here claimed zero true positives overall. That was true of the first two
sets and I generalised it. Corrected.**

**Fix:** split on `\n(?=#{2,3} )` and keep only sections starting with `### `, so a `##`
boundary terminates the preceding `###`.

⚠️ **Deliberately NOT fixed while four agents were running `--hedges` concurrently** — changing
a tool under live users would have shifted every list mid-run and made the reports
irreconcilable. **Fix it once they are clear, then re-run the census.**

---

---

### Already verified clean on this tree, and re-runnable cheaply

- **Self-narration in `content/`** (non-negotiable 6) — **zero** matches.
- **Forbidden attribution** anywhere in the diff — **zero**. ⚠️ A naive
  `grep -i claude` returns one hit: the literal string `CLAUDE.md` in a plan row. **That
  is the filename, not an attribution.**
- **`site/`** — 8 hub pages, 48 OG cards, RSS and the citation block all built and
  browser-verified; **0 hard / 7 advisory** on `check-arrivals`, unchanged baseline; and
  a per-page regression check confirmed **no page lost a round-52 marker**.
- ⚠️ **`site/` has NOT been re-checked since this wave's edits.** Roughly a thousand words of
  new Sources-trailer prose went in, carrying nested emphasis, quotes and ⚠️ markers in
  single ~7,800-character lines. Delimiters were verified to balance arithmetically —
  **balance is not rendering.** A `site-reviewer` pass is outstanding.

---

### Concurrency, observed and recorded

The `rules_primer.md` agent reported `check_facts` at **5,504** facts when it started and **5,507** when
it finished, **with no edit of its own in any in-scope document**. ⚠️ **Confirmation that the wave is
live and that any checker result quoted from it describes a tree that has already moved.** Nothing that
agent concluded rests on the tool — but it could not have known that when it started.

---

### Checker race, observed again and correctly diagnosed

The agent reported `check_facts.py` **failing** on `content/systems/breakouts.md:133` (*"351 chars, over
300"*) and **passing on immediate re-run with nothing changed**. `breakouts.md` is held by another live
agent. ⚠️ **Exactly the documented race — a checker failure on a file being written is not yet a
finding.** It did not act on it, which is right.

---

### ⚠️ INDEX/TREE DIVERGENCE — flagged by an agent, confirmed, and NOT yet resolved

`git diff --name-only` is non-empty for **8 files**: `defender.md`, `goaltender.md`,
`forechecking_systems.md`, `body_contact_and_battles.md`, the plan, the record, `diagrams.json` and
`body_contact_and_battles.mjs`.

⚠️ **The index holds pre-fix versions. A commit made now would ship the unfixed Key Takeaway 7 while
every checker passes on the tree** — the exact failure CLAUDE.md documents and that this session hit
once already. **Re-stage after the last agent finishes; do not stage while one is live.**

---

### Two of my refutations UPHELD by the gate, and it withdrew its own claim

⚠️ **`commit-gate` withdrew its `describe` finding**: *"I read it myself in the built manifest: it is
pure geometry… You were right to refuse the sweep."*
⚠️ **And it confirmed the `:880` diagnosis was mine, not its own**: `usah_casebook.txt:11712` prints
*"a goalkeeper **can be legally checked** when outside the privileged area"* and *"**When the goalkeeper
has possession of the puck**, the attacking player is permitted to **physically engage**"* as **two
separate sentences** — the possession condition attaches to the second. *"Your diagnosis of a truncated
quotation was the right one; mine was not."*
⚠️ **`:720`'s residual confirmed OVER-restrictive, not dangerous** — defensible on the Casebook's own
*"When the goalkeeper is no longer in control of the puck, any avoidable contact… must also be
penalized."*

---

### T0-P83 — the count is ONE, and I know why I got it wrong

`"protective screen"` returns **1** in `usah_casebook.txt` (`:10024`, the rule reprint) — confirmed with
a de-hyphenated positive control, so not a false absence. `"protective screen"` = **1** in `usah.txt`.

⚠️ **Where "two" came from: `grep -i "screen"` returns 2.** Line `:20149` reads *"Pushers may not use
themselves to set up **a screen**"*, under *In-Game Playing Rules for Sled Hockey Pushers*. ⚠️ ***"A
`screen` count was reported as a `protective screen` count"*** — by an earlier agent, and **I carried it
into a brief without checking.**

**Both disclosures HOLD, re-attacked:** all **17** Casebook situations under Rule 625 read — **none cites
625(a.1)** and **none publishes a tier above the minor.**

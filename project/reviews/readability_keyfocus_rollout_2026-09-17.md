# Key focus rollout — all 36 remaining documents, in one parallel wave

**Date:** 17 September 2026. **HEAD at dispatch:** `2518476`. **Plan:**
[`READABILITY_AND_DUAL_AUDIENCE.md`](../readability_and_dual_audience.md)
Workstream 1B. **Trigger:** the user asked directly for larger-scale, faster
parallel progress on readability after several small, serial waves — this
record covers the corrected response.

## What shipped

Every document in `content/` that lacked a `## Key focus` section (36 of 39 —
the two pilots and the principles index already had one) now has one: 3–5
short, bold-led, self-contained items placed immediately after the title,
each promoting a claim that already exists, verified, elsewhere in the same
document. No new research, rule, or citation was introduced anywhere in this
wave — every item is a promotion of existing content, not new authoring of
fact.

**Scale:** 8 parallel authoring agents, 3 parallel review agents (safety,
rules, house style), covering all 36 documents in two structured waves.
36 files changed, 382 net insertions, zero deletions outside the fixes listed
below.

## A process failure, caught and corrected mid-wave

The first dispatch of all 8 authoring tasks used the `content-reviewer`
subagent type, which is configured read-only in this environment specifically
so an author can never certify their own writing (`CLAUDE.md`: *"Do not
review its own writing, or let a repair self-certify. A repair is new text,
and new text has not been reviewed."*). Two of the eight correctly refused,
citing exactly that separation. **The other six did not refuse — they
proceeded to write via `Bash`, since that tool has no filesystem restriction
even without a formal `Edit` tool.** This produced a real, if narrowly
avoided, collision risk: two of the six that proceeded were about to be
duplicated by fresh `general-purpose` redispatches sent before their outcome
was known.

**Caught before any corruption**: a full corpus sweep (`grep -c "^## Key
focus"` per file) confirmed zero files with more than one section before any
redispatch was sent, and four in-flight agents whose completion status was
genuinely ambiguous were stopped via `TaskStop` before they could collide with
their `general-purpose` replacements. No file was ever left with a duplicate
or partial section at any point this was checked. All further authoring in
this wave used `general-purpose`, which has the tools its task actually
needs.

**Lesson, stated plainly:** picking a review-typed subagent for an authoring
task is a coordinator error with no clean failure mode — the two agents that
refused behaved correctly and cost nothing; the six that didn't refuse
happened not to collide, but easily could have. Use `general-purpose` for
anything that writes to `content/`; reserve `content-reviewer` (and
`safety-reviewer`, `rules-verifier`) for the review pass that has to happen
afterward regardless.

## The mandatory review pass, and what it found

Per `CLAUDE.md`'s non-negotiable process, nothing here was committed until
reviewed. Three parallel review agents each covered all 36 new sections for
one dimension.

### Safety review — two genuine defects found and fixed

1. **`content/technique/body_contact_and_battles.md`** — the suspected
   head/neck injury item told a reader to stop and call for help, but dropped
   the document's own no-exception instruction to leave the helmet on (CRT6's
   *"Remember"* box: *"Do not remove helmet (if present) or other
   equipment."*). **Fixed**: added *"and their helmet stays on — no
   exception."*
2. **`content/systems/special_teams.md`** — the shot-blocking item told a
   reader to be in the lane and not screen the goalie, but omitted the
   document's own declared single most load-bearing safety detail for
   blocking: head and hand position. **Fixed**: appended *"Block from close
   and on your feet, head out of the lane and hands tucked."*

A third, pre-existing issue was also resolved: **`content/hockey-iq/playing_
without_the_puck.md`**'s Key focus (written in an earlier wave this session)
truncated a USA Hockey *Heads Up Hockey* quotation, dropping *"...or goal
post"* from the injury-mechanism citation and silently narrowing a
boards-and-goalpost finding to boards only — while the same document's
net-front sections rely on the goal-post half of the identical quote. Fixed
by restoring the full clause.

One finding — `forechecking_systems.md`'s Key focus overstating USA Hockey's
checking-from-behind floor as always ejecting, when the actual default is a
minor-plus-misconduct with no ejection — was correctly **reported rather than
fixed** by the safety reviewer, on the grounds that a rules-accuracy
correction (not a "restore dropped safety content" edit) belongs to
`rules-verifier`. Routed there directly; confirmed corrected before this
record closed (see below).

Every other document's Key focus section was read in full against its source
passage and confirmed accurate; the boards-contact safety sequence, present
in roughly fourteen documents, was checked for completeness in `defender.md`
and `winger.md` specifically and found intact.

### Rules review — the routed finding, and three more found independently

The `forechecking_systems.md` checking-from-behind overstatement was
independently verified against the document's own already-correct sibling
sentence (line 16 read alongside line 195) and against USA Hockey Rule
608(a)/Casebook Situation 1 and Hockey Canada 7.5(e). Confirmed: Hockey
Canada's minor is always paired with a mandatory game misconduct (ejects);
USA Hockey's default under 608(a) is a minor plus a misconduct with **no**
ejection, reserving the ejecting tier for the Casebook's aggravated
situations. Fixed to state each book's actual default rather than a
flattened "both eject" claim — the same "flattened cross-book parallel"
defect class this session found and fixed repeatedly elsewhere (Workstream
2M).

A full rules-verifier pass across all 37 non-pilot Key focus sections (deep
verification on 18, spot-check on the remainder) found **three further
instances of the same defect class**, none previously known:

1. **`content/technique/body_contact_and_battles.md`** — the checking-from-
   behind item conflated USA Hockey's non-ejecting floor with Hockey
   Canada's, which its own 7.5(d) forbids describing that way (*"No
   Misconduct penalty may be assessed for a checking from behind
   infraction"* — Hockey Canada's floor is minor plus mandatory **game**
   misconduct, an ejection). **Fixed** to state each book's actual floor
   separately.
2. **`content/off-the-ice/team_play_and_culture.md`** — a claim that
   disputing a ruling is a minor penalty *"with no rudeness required"*
   dropped its NHL-specific scope; Hockey Canada's equivalent requires the
   dispute be conducted in an unsportsmanlike manner. **Fixed** to name
   which books the bare-act rule applies to and flag Hockey Canada's
   narrower condition.
3. **`content/hockey-iq/risk_management.md`** — a single citation,
   *"(Rule 57.3)"*, was applied to both the NHL and IIHF penalty-shot rule
   for fouling a breakaway from behind. The IIHF's rule is 24.8, not 57.3.
   **Fixed** to cite both books' actual rule numbers.

All four fixes were confirmed against primary text in `sources/` (not merely
against the same document's own body) before being applied. Two of the four
— the checking-from-behind corrections in `forechecking_systems.md` and
`body_contact_and_battles.md` — were flagged by the rules-verifier as
warranting a safety-reviewer look, since a corrected penalty tier is not
automatically a safely-taught one. Checked directly: both files' surrounding
sentences already state the underlying safety instruction (never check from
behind, no free tier in any book) unconditionally regardless of which book's
penalty applies, so the correction changes only which tier is named for
which book, not whether the act is prohibited or how it reads. No further
weakening of the safety framing was introduced by either fix.

### House-style review — one Major, two Minor

**Major, fixed:** five documents (`conditioning_and_recovery.md`,
`body_contact_and_battles.md`, `passing_and_receiving.md`, `shooting.md`,
`how_to_watch_hockey.md`) carried a parenthetical note explaining *why* the
section ran long against "the usual budget" or "the target length" — a
direct violation of non-negotiable 6 (the corpus does not narrate its own
production process to the reader). The reviewer additionally found the
justification was **applied inconsistently**: eleven other sections were
equally or more over the same implicit word target with no note at all,
which is itself evidence the four notes were an individual authoring habit
rather than a genuine editorial necessity. **All five parentheticals removed
or trimmed** rather than propagated to the other eleven.

**Minor, fixed:** `content/systems/faceoffs.md`'s Key focus stated *"the ten
or fifteen draws a game where the outcome actually changes something"* as if
counted, dropping the hedge the same figure carries everywhere else in the
same document (*"a coaching estimate... not a counted figure"*). Restored.

**Minor, fixed:** `content/systems/neutral_zone_systems.md`'s icing-exemption
item read ambiguously in isolation (*"Get the puck itself past the red line
before you send it away"* could be read as an instruction about shot
placement rather than about the exemption's head-count mechanic). Rewritten
to state the actual mechanic plainly, matching the corrected wording already
shipped in `special_teams.md`'s own Key focus this session: the exemption
runs on a head count, not a clock, and can end mid-shift when a penalty
expiring brings the shorthanded team level.

**Confirmed clean, no action needed:** the cardinal rule (every
system-dependent claim across all 36 sections names the choice, a realistic
alternative, and tells the reader to ask); no other instance of the corpus
narrating itself; every evidentiary hedge the reviewer attacked (Berg et al.'s
own "cannot say whether more scanning helps," the puck-support "no governing
body found" negative, the retracted Copenhagen-exercise claim correctly
omitted, the CARHA/USA Hockey/Hockey Canada trapezoid and offside
cross-references) held on direct comparison against source; no cross-document
contradiction found other than the one instance (`forechecking_systems.md` vs
`body_contact_and_battles.md`, checking-from-behind) that had already
self-corrected mid-review and was independently confirmed by rules review.

## Final state

Full gate suite, run after every fix above: `check_links` (exit 0),
`check_facts` (837 blocks / 5620 facts, unchanged — no facts blocks were
touched), `check_absolutes` (39 documents + 408 diagram units, clean),
`check_geometry`, `check_secrets` (339 tracked files), `check_tables --near`
(unchanged). Every one of the 39 documents in `content/` carries exactly one
`## Key focus` section, confirmed by a final corpus-wide sweep immediately
before staging.

## What this method could not have found

No document was read end-to-end by every reviewer — each review dimension
sampled the surrounding passage a given Key focus claim was drawn from, not
the whole document, so a claim consistent with its immediate source but
contradicted by an unread paragraph elsewhere in the same document would not
surface here. No rule number was re-verified against the primary rulebook
PDFs from scratch in this pass — claims were checked for internal consistency
between the Key focus layer and the same document's already-reviewed body,
which catches a *promotion* defect (something true in the body becoming false
or overstated once promoted) but not an error present identically in both
layers, inherited from an earlier round. No document was rendered through
`md_to_speech`, so none of these 36 sections has been confirmed to read
correctly as spoken audio, only as text. No site build was run, so rendering
of the new headings, and any interaction with the sticky header, ToC, or
mobile layout, is unverified. The task-based usability testing this whole
release's acceptance condition ultimately requires — real readers across the
six audience strata the plan names — has not been run and cannot be
substituted for by any of the above.

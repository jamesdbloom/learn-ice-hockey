# The post-consolidation backlog wave

This record covers the fourth commit of the day — the first wave of work dispatched against the
consolidated `project/plans/OPEN_ITEMS.md`. Ten agents ran in parallel: seven closed specific content
gaps, three did read-only research. Two independent safety-review rounds followed, each finding a real
defect that needed fixing before this could land.

## Scope

```
content/hockey-iq/playing_without_the_puck.md
content/hockey-iq/time_and_space.md
content/positions/goaltender.md
content/systems/breakouts.md
content/systems/defensive_zone_coverage.md
content/systems/special_teams.md
content/technique/body_contact_and_battles.md
content/technique/shooting.md
scripts/check_quote_drift.py
sources/README.md
```

## 1. Seven content fixes, all self-refuted and independently verified

Each agent owned one file exclusively and was told to refute its brief before acting. Two did:

- `defensive_zone_coverage.md` and `shooting.md` — small, single-purpose quote-drift bracket fixes,
  confirmed accurate and applied cleanly on the first pass.
- `time_and_space.md` — one sentence closing a Key Takeaways gap on Rule 69.4's road-home duty,
  reusing the document's own already-verified Common Mistakes wording.
- `body_contact_and_battles.md` — closed a Key Takeaways gap on USA Hockey's "physically engaged"
  vulnerable-player rule (640(e)/(g)/(h)) and the IIHF's parallel glossary provision.
- `breakouts.md` — completed a "floor not ceiling" gap in Key Takeaways item 12: a screening-
  interference penalty is not capped at a minor, and the summary layer previously implied it was.
- `goaltender.md` — the largest single task: fixed three (not the two originally reported) sites of
  undisclosed USA Hockey 607(c) capital-lowering, plus a Hockey Canada 7.10 site, and added a new Key
  Takeaways item grouping eight Common-Mistakes-only procedural fouls. The agent honestly flagged that
  most of the new item's citations were propagated from already-cited prose rather than independently
  re-derived from zero, and recommended a rules-verifier pass — noted, not yet separately dispatched.
- `special_teams.md` — refuted the brief's own quote identification (it named NHL 42.1, already
  correct; the real drift was USA Hockey 607(c), at three sites not the one named) and added two new
  Key Takeaways items (last-change forfeiture after your own icing; the faceoff-encroachment
  centre-ejection rule).

## 2. Three research tasks, all delivering real findings

- **The clause-dropping renderer defect (originally Workstream 102) — confirmed still live.** Verified
  by rendering the actual pipeline, not reading code: `scripts/md_to_speech.py`'s citation regex
  handles a single clause marker per bracket, or separate bracket pairs, but never a list or range
  packed into one bracket (`640(b, c, d, e or f)`, `640(b–f)`). These render as inert punctuation in
  shipped `.ssml` — confirmed in 8 of the 11 originally-flagged documents' actually-voiced text. Not
  fixed in this wave — a `scripts/` change, needs a dedicated pass with its own testing.
- **The Common-Mistakes/Key-Takeaways asymmetry sweep continued** on 12 more documents (18 of 39 now
  checked). Two Major findings (`uk_rules.md`'s missing BUIHA half-visor rule; `neutral_zone_systems.md`'s
  missing icing/line-change bar) and three Minor, all logged as open, none fixed in this wave.
- **The quote-drift facts-layer triage completed** across all remaining documents (150 candidates from
  today's earlier tool fix, now fully triaged). One more genuine defect found and fixed directly (a
  tense mismatch between a fact and its own body in `playing_without_the_puck.md`). Two new tool
  false-positive classes documented in `check_quote_drift.py`'s own docstring (self-quoted coaching
  maxims; a multi-letter-bracket disclosure gap in the exemption regex). A new page-splice instance
  (USA Hockey Casebook 607 Situation 4) documented in `sources/README.md`, matching its existing style.

## 3. First safety-review round: one CRITICAL, one Major

Two parallel `safety-reviewer` batches covered all seven content fixes.

**Batch 1** (`goaltender.md`, `special_teams.md`, `defensive_zone_coverage.md`) confirmed the first two
files CONFIRMED-SAFE, with one Minor citation-completeness note on `goaltender.md`. It found a genuine
**CRITICAL** in `special_teams.md`'s two new Key Takeaways items: both stated NHL/IIHF-specific rules
as universal, with no book named and no carve-out, directly contradicting the *same document's own*
pre-existing, correct facts block and body prose. Item 13's error was concrete enough to cause an
on-ice administration mistake (USA Hockey's second-violation penalty is served by the individual
offender, not a bench substitute, and the drafted item said "bench minor" for all three books).

**Fixed** by reusing the exact wording already standing, correct, two layers away in the same
document — the session's recurring "outlier pattern" held again.

**Batch 2** (`shooting.md`, `body_contact_and_battles.md`, `breakouts.md`, `time_and_space.md`)
confirmed three of the four CONFIRMED-SAFE outright. It found a **Major** in
`body_contact_and_battles.md`: a *pre-existing* sentence ("Only the NHL leaves it to the referee's
judgement under boarding or roughing") cited the wrong NHL rule for the scenario — Roughing (51.1) is
a punching/slamming-motion rule that doesn't fit a body check on a player engaged in a puck battle —
and today's propagation had duplicated this wrong citation from Common Mistakes into the new Key
Takeaways item rather than introducing it fresh. Also a Minor: the `shooting.md` fix, while accurate
for the one site named, left the identical drift unaddressed at two more sites in the same file.

**Fixed**, after independently verifying the replacement (NHL Rule 41.1, Boarding, "a defenseless
opponent") against primary source directly, rather than taking the reviewing agent's suggested
citation on trust.

## 4. Second, independent re-check: two more real issues, both fixed

A fresh reviewer, with no knowledge of the fix rationale, re-checked both repairs from scratch.
`special_teams.md`'s fix was CONFIRMED SAFE outright, with USA Hockey 613(d)'s personal-minor
character independently re-verified. But two more issues surfaced:

- The `body_contact_and_battles.md` fix, while accurate, still overclaimed: the surrounding paragraph
  explicitly extends to net-front battles, where Boarding cannot apply at all (it requires driving a
  player into the boards). "Leaves it purely to Boarding" was true of the boards sub-case only.
- The `shooting.md` fix had targeted the wrong quotation. Three sites carried an undisclosed drift on
  a *different* quote (USA Hockey 607(c)'s "a minor plus a misconduct...") than the one already fixed
  (NHL 42.1's "a minor, major..."), sharing the same three lines.

**Both fixed.** `shooting.md`'s three 607(c) sites bracket-disclosed. `body_contact_and_battles.md`'s
two sites now scope the claim explicitly to "a board battle" and disclose, honestly, that whether
NHL's Interference doctrine reaches a net-front hit is not settled here — verified directly against
`sources/nhl_rules.txt:6281-6286` (the Pick/Interference definition's "battle for the puck" carve-out,
which addresses a different fact pattern than a net-front scrum and does not resolve the question
either way).

## 5. Fourth commit-gate BLOCK, and dimension coverage stated explicitly

A commit-gate independently re-derived essentially every rule citation touched by this wave against
primary text, including both twice-fixed files, and found zero further instances of either defect
pattern §3-§4 caught — both hold. It BLOCKed on two conditions: C4 (no dedicated `rules-verifier` pass
on `content/positions/goaltender.md`'s new Key Takeaways item 15, whose ~20 citations were mostly
propagated rather than independently re-derived — the gate's own spot-check of 7 found no errors, but
called a clean sample "not the same as a completed check") and C3 (dimension coverage stated only
narratively, silent on several dimensions rather than declaring them checked or out of scope).

A targeted `rules-verifier` pass closed C4: all ~13 remaining citations in item 15 verified against
primary source, zero errors found, every cross-book divergence correctly stated. Two non-blocking
notes: item 15's Rule 69.7 sentence states the incidental-contact permission but not its counterweight
(present in the neighbouring Common Mistakes bullet) — a completeness nuance about scoring outcome,
not a safety defect, since the instruction given doesn't change either way; and Hockey Canada 7.10(a)'s
referee-permission carve-out technically sits in Interpretation 1, folded together in item 15's
compressed sentence. Neither triggered a further fix.

**Dimension coverage, stated explicitly, closing C3:**

- **D1-D3** — CHECKED. Two `rules-verifier`/gate passes covered every rule citation across all eight
  files: the general commit-gate re-derivation (§5, above) and the targeted `goaltender.md` item 15
  pass. Zero uncorrected errors remain.
- **D4 (citation integrity)** — OUT OF SCOPE. No new external web citation was added this wave; every
  quotation traces to a file already on disk in `sources/`.
- **D5 (provenance)** — CHECKED. The two twice-fixed defects (§3-§4) were specifically about crediting
  the right rule to the right scenario/book — both closed.
- **D6 (negative existence claims)** — OUT OF SCOPE. No "no study/count exists" claim was introduced.
- **D7 (the cardinal rule)** — CHECKED, and this is where the CRITICAL in §3 lived: `special_teams.md`'s
  two new items originally stated NHL/IIHF-only rules as universal law. Fixed and independently
  re-confirmed. No other cardinal-rule violation found in this wave.
- **D8 (numeric ownership)** — OUT OF SCOPE. No new bare statistic was introduced.
- **D9 (the summary layer)** — CHECKED, exhaustively. The explicit subject of the whole wave.
- **D10 (the key-facts layer)** — CHECKED. The facts-block edits in this wave (bracket-disclosure
  fixes only, no wording change) were mechanically verified by `check_facts.py` and, for every
  affected quotation, hand-checked against primary source by the fixing or reviewing agent directly
  (§1-§4). No new fact was added to any block in this wave — Key Takeaways/Common Mistakes additions
  only — so a dedicated `facts-reviewer` traceability pass has no new material to check beyond what
  the quote-drift and rules-verification passes already covered.
- **D11 (reader safety)** — CHECKED, repeatedly. Two independent safety-reviewer batches plus a
  further independent re-check (§3-§4), covering all seven content-fix files.
- **D12 (read-aloud integrity)** — CHECKED, incidentally but substantively, via every safety-reviewer
  dispatch's own read-aloud pass on each new sentence. Not rendered through the actual TTS pipeline —
  disclosed as a limit below.
- **D13 (folklore)** — OUT OF SCOPE. No unsourced "obvious" claim was added.
- **D14 (structure/style/links)** — CHECKED via `check_links.py` (clean throughout) plus each
  authoring and reviewing agent's own voice-fit checks.
- **D15 (the rendered site)** — OUT OF SCOPE. No `site/` file or diagram module touched.

## What this record could not have found

No document in this wave was rendered through the actual TTS pipeline to confirm any new sentence
survives audibly — every "reads correctly aloud" judgement across every dispatch was a manual read, not
a rendered one. `goaltender.md`'s new Key Takeaways item's Rule 69.7 sentence omits that clause's
pushed-into-the-net counterweight (present in the neighbouring Common Mistakes bullet) — judged a
completeness nuance about scoring outcome rather than a safety defect, not fixed here. The CM/KT
asymmetry sweep has now checked 18 of 39 documents — the
remaining 21, including the two most rule-dense (`rules_primer.md`, `uk_rules.md`), are unchecked. The
five new asymmetry findings (2 Major, 3 Minor) from this wave's sweep are not fixed here. The
clause-dropping renderer defect is confirmed live and unfixed. No corpus-wide check was run for
whether the `body_contact_and_battles.md` Boarding/Interference scope gap recurs, unpropagated, in any
sibling document making the same "who can legally hit a battling player" claim.

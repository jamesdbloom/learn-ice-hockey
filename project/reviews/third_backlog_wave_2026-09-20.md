# The third backlog wave

Ten agents ran in parallel against the ten remaining Common-Mistakes/Key-Takeaways asymmetry findings
logged in `OPEN_ITEMS.md`'s "Genuinely open" section — five from an earlier partial sweep
(`time_and_space.md`, `goaltender.md`, `body_contact_and_battles.md`, `special_teams.md`,
`breakouts.md`), five from this session's own sweep continuation (`equipment.md`,
`team_play_and_culture.md`, `puck_handling.md`, `passing_and_receiving.md`,
`playing_without_the_puck.md`). Each owned one exclusive file and was told to refute its brief against
primary source before writing anything.

## Scope

```
content/hockey-iq/playing_without_the_puck.md
content/off-the-ice/equipment.md
content/off-the-ice/team_play_and_culture.md
content/technique/passing_and_receiving.md
content/technique/puck_handling.md
project/plans/OPEN_ITEMS.md
```

## 1. Five of ten briefs were stale — the gaps they described were already closed

`time_and_space.md`, `goaltender.md`, `body_contact_and_battles.md`, `special_teams.md`, and
`breakouts.md` were each dispatched against a "Genuinely open" plan row describing a Key Takeaways gap.
In every one of the five, the agent found the gap had already been closed in an earlier round and the
plan row simply never retracted. No edit was made to any of these five files. One (`body_contact_and_
battles.md`) is worth flagging specifically: the agent initially wrote an edit before catching, on a
full re-read of the relevant Key Takeaways item (which runs past the ~400-character window its first
read had used), that the content it was about to duplicate already existed — and reverted its own edit
before reporting, leaving the file byte-identical to HEAD. All five stale rows were retracted from
`OPEN_ITEMS.md` with the reason recorded inline.

## 2. Five real fixes landed, each independently source-verified by its authoring agent

- **`content/hockey-iq/playing_without_the_puck.md`** — new Key Takeaways item 11 distinguishing
  goaltender-sightline screening from physical contact, stating the charging/bumping penalty ladder
  across NHL Rule 42.1, IIHF 42.1-42.4, USA Hockey 607(c), and Hockey Canada 8.5(b) (the only one of
  the four that's mandatory rather than discretionary at that tier). The authoring agent explicitly
  refuted the brief's flattened "mandatory in all four books" framing and wrote the correctly-scoped
  version instead.
- **`content/off-the-ice/equipment.md`** — new item 11 bundling three broken-stick rules (skating with
  one, disposing of one over the boards, a goaltender playing on with one) under one dense item,
  verified against nine citations across five rulebooks (NHL, IIHF, USA Hockey, USA Hockey Casebook,
  Hockey Canada, and Britain's IHUK 2026-27 rules).
- **`content/off-the-ice/team_play_and_culture.md`** — addition to existing item 11 stating the
  boards-sitting rule (NHL Rule 75.2(iv)), verified against two independent primary-source
  extractions to rule out a known hyphenation-splice trap.
- **`content/technique/passing_and_receiving.md`** — two new items (12, 13): kicking an opponent, and
  high-stick contact to an opponent's head/face/neck — flagged by its own authoring agent as the
  highest-priority safety content in the whole wave.
- **`content/technique/puck_handling.md`** — three new items (7, 8, 9): the can-opener/stick-between-
  the-legs rule, kicking an opponent (independently verified against the same rule set as
  `passing_and_receiving.md`'s instance, confirmed consistent), and grabbing a puck in your own crease.

## 3. Safety review: one Critical, one Major, one Minor — all findable defects fixed

An independent `safety-reviewer` read all five real edits in full context (not a rubber-stamp — it
re-verified citations against `sources/` itself rather than trusting the authoring agents' reports) and
found:

- **Critical** — `passing_and_receiving.md` item 13 stated Hockey Canada 6.9(c)/Rule 7.6's
  three-strikes-to-ejection ladder as if it bound every Hockey Canada player, when the rule is
  explicitly scoped to Minor and Female divisions only (`hc.txt:5303-5304`, `hc.txt:6246-6257`).
  Junior/Senior play a different rule (9.5, routing to 7.7) with no three-strikes provision at all.
  This is exactly the shape this project's history flags as its most dangerous failure mode: the same
  document's own body and facts-block layers already state the correct scope, and only the new Key
  Takeaways item — the layer most likely to be heard standalone — dropped it.
- **Major** — `playing_without_the_puck.md` item 11 stated the goaltender-charging penalty ceiling as
  a flat "major plus a game misconduct in all four books," when NHL, USA Hockey and Hockey Canada each
  carry a further match-penalty tier above that (NHL 42.4, USA Hockey 607(e), Hockey Canada 8.5(c)) —
  only the IIHF's Rule 42 genuinely has no match-penalty tier.
- **Minor** — `team_play_and_culture.md`'s new addition carries an unsourced injury-mechanism claim
  ("how you get a skate blade in someone's face") that the reviewer couldn't verify against any source
  on disk — judged pre-existing (the same uncited clause already lives in the document's body) rather
  than a defect introduced by this wave's propagation. Logged as a new, low-priority open item rather
  than fixed under this wave's time budget.

Both the Critical and the Major were fixed directly: the Hockey Canada scope qualifier and the
Junior/Senior distinction were added to `passing_and_receiving.md` item 13, and the three-book
match-penalty escalation was added to `playing_without_the_puck.md` item 11.

## 4. Rules verification: independently confirmed both reviewer findings, and caught a second defect in the same sentence

A parallel `rules-verifier` pass, run independently and without seeing the safety-reviewer's report,
re-derived every citation across all five files directly from primary source. It confirmed the same
two defects above on its own — and found a second, distinct defect in the same `passing_and_receiving.
md` item 13: its closing sentence claimed "the range in every one of the four books is minor to match,
never a flat penalty," but the IIHF's rulebook has no match-penalty concept anywhere (`grep -ci "match
penalty"` across three separate IIHF text extractions returns zero relevant hits). This directly
contradicted the item's own preceding sentence, which correctly states the IIHF's ceiling as "a major
plus an automatic game misconduct."

**Fixed**: the closing sentence now reads "Three of the four books run this from a minor to a match
penalty, never a flat penalty — the IIHF's ceiling is a major plus a game misconduct instead, since it
has no match penalty at all."

All other citations across all five files — including two cross-document consistency checks (the
kicking rule stated identically and consistently in both `passing_and_receiving.md` and `puck_handling.
md`) — were independently CONFIRMED-ACCURATE.

## 5. A final, narrowly-scoped re-check found one more real defect in my own repair

Rather than let the two coordinator-made repairs self-certify, a final `safety-reviewer` pass re-checked
only the two corrected passages (not a fresh full review). It confirmed both corrections read
correctly and consistently in isolation — but found that my own repair to `playing_without_the_puck.md`
item 11 had introduced a new, distinct inaccuracy: it stated NHL, USA Hockey and Hockey Canada "each
carry a further match penalty where the referee finds an attempt or intent to injure," but USA Hockey
607(e)'s actual trigger is "reckless endangerment" — a lower bar that does not require intent
(`usah.txt:3698`, glossary definition at `usah.txt:6237-6238`). Lumping USA Hockey's standard together
with NHL's and Hockey Canada's intent-based standard understated how easily a USA Hockey player can
draw the match-penalty tier.

**Fixed**: the sentence now reads "Three of the four go further still, on two different standards: the
NHL (42.4) and Hockey Canada (8.5(c)) reach a further match penalty where the referee finds an attempt
or intent to injure, while USA Hockey (607(e)) gets there on the lower bar of reckless endangerment
alone, no intent required."

The same final re-check surfaced two further Critical-severity propagation gaps — pre-existing, not
introduced by this wave, and in the opposite direction from the usual pattern (content that now exists
in Key Takeaways but is missing from Common Mistakes and the facts block, rather than the reverse):
`passing_and_receiving.md`'s Common Mistakes and body never stated what governs Hockey Canada
Junior/Senior players for high-stick-to-head contact, and its Common Mistakes bullet also omitted the
Hockey Canada match-penalty tier; `playing_without_the_puck.md`'s Common Mistakes and facts block
capped goaltender-charging penalties at major-plus-game-misconduct with no mention of the three-book
match-penalty escalation. These were initially logged as new open items rather than fixed, on the
judgment that they were a distinct enough finding to defer — a judgment call that turned out to be
wrong, corrected in §6 below.

Mechanical checks (`check_links.py`, `check_facts.py`, `check_absolutes.py`) were re-run clean after
every edit in this wave, including both coordinator-made repairs.

## 6. Commit-gate BLOCK on C7, closed by finishing the propagation the prior section deferred

The first commit-gate dispatch on this wave's staged diff BLOCKed on C7. It agreed the two Key
Takeaways fixes described in §5 were themselves accurate — it independently re-derived NHL 42.4, IIHF
Rule 42 (confirming no match-penalty tier in either current edition), Hockey Canada 8.5(b)/(c), USA
Hockey 607(e) and its "Recklessly Endangers" glossary definition, and Hockey Canada 6.9(c)/7.6/7.7 —
but held that logging the two layer-gaps as future open items did not satisfy C7, since "every
condition must hold" and these were the same claim in the same document missing from another layer,
not a genuinely distinct finding in the way the `equipment.md` BUIHA-phrasing item was. The gate was
right and the earlier deferral was the wrong call: unlike `equipment.md`'s narrower, already-
cross-referenced phrasing, these two gaps were the exact same fact, in the exact same document, simply
absent from a second layer.

**Fixed**: four narrow propagation additions closed the gap directly.
- `playing_without_the_puck.md` — a new `Rule:` line in the facts block, and an added sentence in the
  Common Mistakes bullet, both stating the three-book match-penalty escalation (NHL 42.4 and Hockey
  Canada 8.5(c) on an intent standard, USA Hockey 607(e) on reckless endangerment alone).
- `passing_and_receiving.md` — a new `Rule:` line in the facts block, a clause inserted into the body
  passage, and an extension to the Common Mistakes bullet, all stating the Hockey Canada Junior/Senior
  divergence (Rule 9.5 routing to 7.7, no three-strikes provision) and Rule 7.6's own match-penalty
  tier (7.6(c)).

An independent `safety-reviewer` and `rules-verifier` pair, dispatched in parallel and narrowly scoped
to just these four additions, both confirmed every citation accurate against primary source (Hockey
Canada Rules 7.6, 7.7 and 9.5 read in full for the negative-existence claim that 7.7 carries no
three-strikes provision; USA Hockey's "Recklessly Endangers" glossary definition confirmed to carry no
intent element; a fresh whole-book grep of the IIHF rulebook for "match penalty" again returned zero
hits). The safety-reviewer found two Minor findings, no Critical or Major: a facts-block line whose
"above that" pointer would resolate to nothing for a listener hearing that line in isolation (this
corpus's facts lines are voiced alone, with a 300ms break either side), and a body-passage insertion
that juxtaposed the new Junior/Senior carve-out directly against an unscoped "Rule 7.6 is the book's
overriding rule" sentence, reading as though 7.6 overrode the very carve-out just stated. **Both
fixed**: the facts line now names the threshold directly ("beyond the major-plus-game-misconduct
tier") instead of pointing at it, and the body sentence now reads "Rule 7.6 is the book's overriding
rule in those (minor and female) divisions."

Mechanical checks re-run clean after every edit in this section too.

## Dimension coverage (C3)

**D1-D3** — CHECKED. Two independent `rules-verifier` passes (the initial five-file pass, and the
follow-up pass on the four propagation additions) re-derived every citation directly from primary
source, including three negative-existence sub-claims (the IIHF's complete absence of a match-penalty
concept, checked by full-text search across three separate extractions on two separate occasions; and
Hockey Canada Rule 7.7's complete absence of a three-strikes provision, checked by reading the rule
and all three of its Interpretations in full) and two cross-document consistency checks. **D4** — OUT
OF SCOPE, no new external citation. **D5** — CHECKED as part of D1-D3, no misattribution found. **D6**
— OUT OF SCOPE, no "no study/count exists" claim added. **D7** — CHECKED, no cardinal-rule violation.
**D8** — OUT OF SCOPE, no new bare statistic. **D9** — CHECKED and CLOSED: a first commit-gate BLOCKed
on exactly this dimension (§6), and the propagation gap it found was closed, not deferred — the two
Key Takeaways facts now also live in the facts block, body (where applicable) and Common Mistakes of
both documents, verified consistent across every layer by a follow-up `rules-verifier` pass. **D10** —
CHECKED (two new `Rule:` facts lines added in §6, both under the 300-character cap and confirmed by
`check_facts.py`). **D11** — CHECKED via three independent `safety-reviewer` passes (the initial
five-file review, a narrow re-check of two coordinator repairs, and a further narrow re-check of the
four §6 propagation additions), finding and fixing one Critical, three Major (one per pass), and two
further Minor findings (one logged as a distinct pre-existing item, one fixed directly in §6). **D12**
— CHECKED: the safety-reviewer's §6 pass found and fixed a facts-line antecedent that would not
resolve for a listener hearing that line in isolation. **D13** — OUT OF SCOPE, no folklore claim
added. **D14** — CHECKED via `check_links.py` (clean throughout, including after §6). **D15** — OUT OF
SCOPE, no `site/` or diagram file touched.

## What this record could not have found

None of the five edited documents were rendered through the actual TTS pipeline. The safety-reviewer's
own method notes it did not check `check_pointers.py`, `check_facts_antecedents.py`, or
`check_caption_echo.py` against any of these additions, did not run a corpus-wide sweep for the same
USA Hockey "reckless endangerment vs. intent" conflation pattern in other documents, and did not check
whether any of these five additions collide with a sibling document beyond the one cross-check already
performed (kicking, between `passing_and_receiving.md` and `puck_handling.md`). The two propagation gaps closed in §6
were found only because this wave's edits happened to add the missing fact to Key Takeaways first, and
a commit gate refused to let them stand as merely logged — the same gap could exist, unfound and
unclosed, in any other document where a Key Takeaways item
states more than its own document's Common Mistakes or facts block does.

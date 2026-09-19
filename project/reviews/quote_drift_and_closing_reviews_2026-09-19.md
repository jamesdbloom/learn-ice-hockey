# The quote-drift wave, three censuses, and the closing reviews

This record consolidates work tracked as Workstreams 92–117 of `project/plans/OPEN_ITEMS.md`,
covering everything in the diff not already named by
[`boards_limb_and_red_flags_2026-09-19.md`](boards_limb_and_red_flags_2026-09-19.md) or
[`shoulder_limb_propagation_2026-09-19.md`](shoulder_limb_propagation_2026-09-19.md). **A `commit-gate`
run found this record missing (its own C8 condition) — this file closes that gap.** Full detail for
every claim below is in `OPEN_ITEMS.md` under the numbered workstream; this file states what was
done and found, not the method notes and traps recorded there.

## 0. Scope — every file this record covers

```
content/foundation/on_ice_communication.md
content/foundation/rules_primer.md
content/hockey-iq/playing_without_the_puck.md
content/positions/center.md
content/positions/goaltender.md
content/systems/forechecking_systems.md
content/technique/body_contact_and_battles.md
content/technique/passing_and_receiving.md
content/technique/puck_handling.md
project/content_style_guide.md
scripts/check_quote_drift.py     (pre-existing staged patch — U+201C/U+201D typographic quotes)
scripts/check_caption_negations.py
scripts/tts_sample.py            (this record's own fix — see §5)
sources/README.md
```

`content/technique/skating.md` is in the diff but **untouched by any of this work** — its two staged
lines predate this wave (confirmed: Workstream 113 found its own brief's premise stale and made no
edit). `site/src/diagrams/*.mjs` and `site/src/data/diagrams.json` are covered by
`boards_limb_and_red_flags_2026-09-19.md`.

## 1. The facts-layer blindness — a structural gap in the corpus's own quote-drift tool

`scripts/check_quote_drift.py`'s regex required italic markers (`*"…"*`) on every quotation, making
it structurally blind to the ` ```facts ``` ` layer (bare `Label: "value"`, no emphasis) and to
bold-wrapped quotations. Measured corpus-wide: **555 of 556 facts-layer quoted spans invisible**, plus
2,418 more in unemphasised body prose (Workstream 99).

**Read against the corpus, not just measured as a gap**: a relaxed comparison pass (scratchpad copy,
never touching the shared tool while agents were live) found **30 facts-layer drift hits across all
39 documents — every one an initial capital silently lowered, zero truncations, zero dropped
consequences** (Workstreams 99, 100, 102, 103, 104). Nine of the thirty are the identical USA Hockey
608(a) fragment lowered identically at nine sites — house practice, not drift.

**A later attempt to patch the tool itself was tried, measured, and reverted** (Workstream 110): making
the surrounding asterisks unconditionally optional flooded `notfound` results 6.5× (348 → had it
landed, would have shown 6,076) with ordinary body-prose quotations that were never citations — a
shouted call, a defined term, dialogue. The correct fix is layer-aware (relax the pattern only inside
` ```facts ``` ` blocks) and was left as a scoped, written-down task for whoever attempts it next,
rather than shipped broken. **The tool on disk is unchanged from its committed state.**

## 2. The quote-drift repair wave — five documents, verified defects fixed

Once the U+201C/U+201D patch (already staged, pre-existing) made typographic quotations visible, a
systematic pass across the five documents it most affected found and repaired **shape-3 drift**
(a period or comma added inside quotation marks where the source sentence continues, presenting a
fragment as a complete instruction) at the following sites, every one verified against primary
rulebook text before being touched:

- **`forechecking_systems.md`** (Workstream 94, 96) — USA Hockey 607(e)'s permissive limb (*"may also
  be assessed"*) restored after being closed early into a flat, automatic-reading statement; a
  CARHA-attributed quotation corrected to the right book after the tool matched the wrong source.
- **`goaltender.md`** (Workstream 98) — the round's most serious single finding: USA Hockey 404(b)
  quoted as *"suspended for the team's next game"* with the 403(b) exception dropped — the book sets a
  **minimum two-game** suspension for a second major, not one. Fixed and cross-checked against three
  sibling documents that already carried the correct "floor" wording — `goaltender.md` was the outlier.
- **`center.md`, `playing_without_the_puck.md`** (Workstream 100) — NHL Rule 69.1's crease-entry
  consequence restored; CARHA Rule 57(a)'s ejection consequence restored; a USA Hockey Rule 204(a)
  warning-then-minor ladder restored. A wrong-book false-positive independently reproduced and
  refuted (the tool matched an unrelated Handbook passage instead of the cited USA Hockey rule).
- **`passing_and_receiving.md`, `puck_handling.md`** (Workstream 103) — the round's worst single
  shape: NHL/IIHF Rule 80.1 quoted as a bare subject noun phrase with the operative prohibition itself
  cut off; a Hockey Canada 7.6 chapeau's override limb restored (*"any foul that results in contact to
  the head must be penalized as Head Contact"*); a USA Hockey Casebook penalty-shot test's scope
  condition restored, correcting an overstatement in the paragraph that used it.
- **`body_contact_and_battles.md`** (Workstream 101) — the USA Hockey 640(g)/(h) scope critical (see
  §3) and the CARHA ejection-arithmetic omission (see §4), both propagated through every layer.

**Every repair in this wave was independently re-derived against primary source text** — not merely
copied from a brief — and where a repair's correct wording already existed elsewhere in the corpus
(a sibling document, or another site in the same file), the established wording was matched rather
than composed fresh. This pattern — a defect turning out to be the corpus's only outlier, with the
correct form already present somewhere else — recurred at least ten times across this session and is
the single most reliable repair heuristic this round produced.

**Two independent verification passes were also run over quotations NOT flagged as drift**:
- A relayed 607(e) citation and a 604(c) Note citation, checked in `body_contact_and_battles.md`
  against the corresponding truncations found in `forechecking_systems.md` — both already complete
  and correct in this file (Workstream 96).
- A relayed IIHF 42.1 "no stride count" claim was checked and found imprecise — the IIHF *does* name
  strides, with the quantifier "multiple," where the NHL alone names none; the corpus's own
  five-book comparison already had this right (Workstream 96).

## 3. CRITICAL: USA Hockey Rule 640(g)/(h) scope, corrected

`body_contact_and_battles.md` stated that USA Hockey's late-hit escalations (640(g), a major plus
game misconduct; 640(h), a match penalty) reach a late hit *"both only through (b)"* — the sub-section
carrying the adult-male exception. **`sources/usah.txt:5141-5147` shows both clauses reach FIVE
sub-sections each** (`640(b, c, d, e or f)`), not one. Under a late-hit heading, in a document read
aloud one sentence at a time, this materially understated the rule's reach.

**Fixed using the corpus's own house form.** A propagation census found the correct form —
`640(b–f)`, with an honest-scope disclosure — already established at five other sites across three
documents (`game_management.md`, `breakouts.md`, `playing_without_the_puck.md`, `time_and_space.md`).
`body_contact_and_battles.md`'s sentence was the corpus's only outlier and was corrected to match.
**Two sites were deliberately left in their prior form**, verified to already state the full
`640(b, c, d, e or f)` reach in the adjacent clause — a sweep replacing them would have been wrong.

Independently re-verified by the `content-reviewer` pass in §6: the fix is accurate, and the
brief's own claim that "three other sites" were deliberately left unchanged was itself wrong — only
two remain, both correctly scoped (Workstream 117).

## 4. The CARHA ejection-arithmetic omission, propagated through seven layers

Three layers of `body_contact_and_battles.md` state that CARHA Rule 32(a) ejects a player on three
penalties in a game. A separate passage states that CARHA's boarding rule (49(b)) converts a minor
into a double minor. **Neither said the double minor counts as TWO toward that tally** —
`sources/carha.txt:2465-2467`, Rule 49(b)'s own Note: *"The Double Minor penalty assessed under this
rule shall count as two (2) penalties in the application of the Three Penalty Rule."* Under CARHA, a
boarding double minor plus one more minor ends a player's night in two penalties, not three.

⚠️ **The same document teaches, three times, that a Hockey Canada double minor counts as ONE toward
its own Game Ejection** (Interpretation 2 to Rule 4.8(b)) — a missing fact sitting beside a stated
contrary rule for a different book, on the same question, inviting exactly the wrong inference if a
listener conflates the two systems.

**Fixed and propagated into all seven relevant layers**: the §1 facts block, the §1 body bullet, the
§5 boarding blockquote, a new §5 body paragraph, a new `Rule:` facts line, Common Mistakes, Key
Takeaways, and the Sources trailer. A related multiplier — CARHA Rule 39(b) Note 1, providing that a
minor wiped out by a goal still counts toward the ejection tally — was added to the body.

**Every voiced unit stating either system's count names its book inside the same sentence**,
confirmed by rendering the whole document and reading the relevant chunks: no listener hearing one
line alone can confuse CARHA's count with Hockey Canada's (verified independently in §6).

**Open, not blocking**: Rule 39(b) Note 1 reached the body and the Sources trailer but not a
`Rule:` facts line, Common Mistakes, or Key Takeaways. The `content-reviewer` pass in §6 and the
`commit-gate` both examined this and ruled it an acceptable narrow completeness gap — an
ejection-tally accounting nuance nested under a headline claim (the CARHA-vs-Hockey-Canada
divergence) that is itself fully propagated and independently verified. **Recorded as a good
next-round addition, not a blocker.**

## 5. Two supporting corrections in the same document

- **Hockey Canada 7.6 vs 7.7 attribution.** A sentence had attributed 7.6's exact wording
  (*"There is no type of legal contact…"*) to both rules; 7.7 actually reads *"There is no legal
  contact…"* — the same substance, different words. Corrected, and the claim that the two rules split
  *"only so that Junior and Senior are covered separately"* was rewritten: the split also carries
  different tiers (7.7(a) adds a misconduct 7.6(a) lacks; 7.7(b) carries a glass/ice/boards limb 7.6
  does not; only 7.6(a) counts three to a Game Ejection). Verified against `sources/hc.txt:6234` and
  `:6307`.
- **CARHA 62(a)/62(b) ladder completed** from the book's own Case Situations
  (`sources/carha.txt:4402-4411`), read for the first time in this corpus's history — Situation 2
  rules a swing *at the puck* that strikes an opponent above shoulder height a **major**, which
  strengthens (rather than merely upholds by silence) the document's existing disclosure that CARHA
  writes no windup-or-follow-through carve-out.

## 6. `tts_sample.py`'s exit-code fix

`scripts/tts_sample.py` returned exit 0 unconditionally, including when every TTS engine was skipped
or failed and zero audio was synthesised — a clean exit code on a run that produced nothing, which an
agent checking the exit code (as every brief in this repository instructs) would misread as success.
**Fixed**: `return 0 if ran else 1`. Tested against both known cases without a pipe (the fix was
verified correctly only on the second attempt, after the first attempt itself fell into this
repository's own documented `cmd | tail; echo $?` trap): zero-synthesised now exits 1, one-or-more
synthesised still exits 0.

## 7. Independent review — an intentionally fresh reviewer, per non-negotiable process

`body_contact_and_battles.md`'s §3 and §4 repairs were written by a `safety-reviewer`. Per this
project's standing rule (*"does not review its own writing, or let a repair self-certify"*), an
independent `content-reviewer` pass was run against the unstaged delta, on its third dispatch attempt
(the first two were terminated by rate limits before producing a report, with zero edits made in
either case).

**Result: zero criticals, zero majors.** Every rulebook quotation in the delta re-verified against
primary text (`sources/carha.txt`, `sources/usah.txt`, `sources/hc.txt` — all matched verbatim). The
document was rendered in full and every chunk touching the CARHA/Hockey Canada divergence was read to
confirm no listener-audible contradiction (none found — see §4). Two minors reported, both addressed
above: the Rule 39(b) Note 1 propagation gap (judged acceptable), and a correction to this session's
own brief (the "three other sites" claim was wrong; two remain, both correct).

All eight relevant checkers were run against the file in this pass: `check_facts`,
`check_facts --near`, `check_tables --near`, `check_links --quiet`, `check_absolutes`,
`check_quote_drift`, `check_facts_antecedents`, `check_pointers` — clean, or matching an
already-explained result (`check_quote_drift`'s two remaining CARHA flags on this file are a
confirmed false positive, matched against Rule 39(b)'s continuation rather than Rule 49(b)'s).

## 8. Three dispatched censuses that found nothing to fix

Three further open items from earlier rounds were run to completion and closed with **zero defects
found** in every case — recorded because a clean, verified negative is itself the finding:

- **`skating.md`'s reported missing-stick instruction** (spread-the-load technique, USA Hockey's
  named common error) was found already repaired by an earlier commit before this dispatch began, at
  all four content layers plus the diagram caption layer. Zero edits made.
- **NHL/IIHF Rule 69.4's incidental-contact permission**, censused for a dropped condition across
  seven candidate files. Every hit was a different rule entirely (Rule 69.7, Hockey Canada 7.3(a)'s
  own carve-out, a Sled Hockey provision, IIHF 101.1 women's faceoff contact, a skater-boarding
  passage) — the one file that substantively treats Rule 69.4 was already correct, both conditions
  quoted in full, and the associated "fair game" misattribution already corrected to name all five
  books that write it.
- **Hockey Canada 8.3(b)'s discretionary major**, censused corpus-wide for understatement wherever a
  bare minor is stated for a contact act. 176 boundary-verified hits read in context; every
  non-contact act correctly capped at a minor, every contact act already correctly escalated. One
  file (`goaltender.md`) found to carry the corpus's most thorough treatment of this exact pattern,
  including an honestly-disclosed open question the book itself does not resolve.

## 9. `project/content_style_guide.md`

The style guide's red-flag-count material (CRT6's ten vs. the adopted British guidance's fourteen,
and the corpus's own reconciliation of the two, explicitly labelled as a reading rather than a rule
either source states) is corroborated by `boards_limb_and_red_flags_2026-09-19.md`'s §9b/§9f work,
which this file supersedes for anything not already named there. No claim in this row was found
ungrounded.

## 10. D15 — status, restated

**Not satisfied.** Chrome's safety-categorisation service has been confirmed down in **two separate
sessions today, after an earlier apparent recovery turned out to be a transient window**: a
dispatched `site-reviewer` made eleven attempts over six minutes, all identical failures; the
coordinator's own direct check against the same confirmed-live preview server, run immediately
afterward, hit the identical error. The build itself is current and verified (`site/dist`, `19:52`,
postdating every edited source file; `check:links` clean across all 53 pages) and a preview server
was left running on port 4325 for whenever browser access returns. **No further attempt should be
made until the extension answers reliably from inside the session doing the checking** — a success in
one tab has not meant a success in another today.

## What this record could not have found

**No file's full citation set was re-verified from zero** — every pass in this wave targeted a
specific, previously-identified defect class (quote-drift shapes, a named rule's scope, a named
tier's understatement) rather than auditing a document whole. `body_contact_and_battles.md` alone
carries an estimated 300-plus rule citations outside today's touched material, none re-checked here.
**Attribution drift** — a quotation correctly transcribed from the wrong book — remains
`check_quote_drift.py`'s structural blind spot in both directions (it can manufacture a false
truncation by matching a different book's continuation, and it can clear a genuinely misattributed
quotation if the wording happens to be shared); every instance caught this session was caught by an
agent resolving the cited rule by number, not by the tool. **No rendered check occurred anywhere in
this wave** — every fix here is verified against source text and the spoken render, never against a
browser. **The facts-layer patch remains unwritten** — §1's layer-aware fix is scoped but not
implemented, and the 30 known facts-layer CASE hits are unrepaired (none is a truncation, so none is
urgent, but none is fixed either).

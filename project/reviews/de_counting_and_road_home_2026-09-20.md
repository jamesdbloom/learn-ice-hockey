# The de-counting wave and the Rule 69.4 road-home limb

This record covers the second commit of the day, everything tracked as Workstreams 127–131 of
`project/plans/OPEN_ITEMS.md`. It is a small, focused wave: two previously-held pieces of work,
unblocked the moment the first commit landed and D15 cleared.

## Scope

```
content/systems/forechecking_systems.md
content/systems/offensive_zone_play.md
content/systems/zone_entries.md
content/technique/body_contact_and_battles.md
scripts/md_to_speech.py
```

## 1. `SPELL_OUT` — five British league initialisms now spelled out

`scripts/md_to_speech.py`'s `SPELL_OUT` tuple was missing `NIHL`, `SIHA`, `EIHL`, `WNIHL`, `EIHA` —
345 occurrences corpus-wide that Polly was rendering as attempted words rather than spelling out
letter by letter, against a control (`IIHF`) that was already correctly wrapped at 110 of 110.
Verified through the renderer, not by inspection: `uk_rules.md` went from 4/28, 0/19, 0/10, 0/5, 0/2
to 28/28, 19/19, 10/10, 5/5, 2/2 across the five acronyms respectively. A second document
(`breakouts.md`) initially looked like a partial failure — traced to the Sources trailer, which this
renderer deliberately never voices; every spoken instance is wrapped at 100%.

## 2. The de-counting wave — two of four candidate documents actually needed the fix

This corpus's boards-safety instruction is two prohibitions: never turn your back to the boards,
never duck. A census found four documents apparently stating it as three, with the third member
being a hedge (avoid whole-shoulder contact, if possible) mistakenly counted as a peer absolute
rather than a subordinate caveat.

Reading each file fresh refuted half the premise: `switching_positions.md` and `risk_management.md`
were already correct — the former's "third" item is the shoulder tip, a genuine absolute, correctly
listed; the latter never states a count at all. **`forechecking_systems.md`** and
**`offensive_zone_play.md`** genuinely conflated the hedge with the two absolutes, at two sites and
one site respectively, and both are now corrected to name the shoulder tip (not the whole shoulder)
as the third absolute, with the whole-shoulder hedge restated in hedge language after it.

## 3. The Rule 69.4 "road home" limb — added to the two documents it was missing from

NHL and IIHF Rule 69.4 penalises an attacker whose deliberate actions prevent a goaltender (who has
left the crease to play the puck) from returning — a foul distinct from the crease-contact
provisions (69.2, 69.3) both target documents already stated. `body_contact_and_battles.md` had it
in body prose but never in Key Takeaways; `zone_entries.md` had it nowhere. Both gaps are now
closed, at facts-block and Key-Takeaways layers, with the same epistemic hedge carried in both: that
the limb reaches beyond contact is a reading of the rule's structure, not a sentence either book
states in terms — confirmed against the IIHF Situation Handbook, which has no worked example on
point.

Confirmed, independently, that USA Hockey and Hockey Canada's nearest equivalents (Rule 625(a)(8)
and Rule 8.5 respectively) both explicitly require actual physical contact — so the NHL/IIHF-only
scoping in both documents is correct, not merely silent on the other two books.

## 4. Safety review — dispatched after a commit-gate BLOCK, one CRITICAL found and closed

A first commit-gate dispatch on this wave returned **BLOCK**: every mechanical checker passed and
every quote/rule claim it independently re-derived was accurate, but no `safety-reviewer` had been
named for any of the four content files above, and C6 ("anything touching contact, technique,
equipment, conditioning or a penalty") carries no exceptions. Two `safety-reviewer` agents were
dispatched in parallel to close this:

**On the de-counting fix** (`forechecking_systems.md`, `offensive_zone_play.md`): **CONFIRMED-SAFE**,
no findings. Verified both genuine "never" absolutes (back-turned, duck) sit untouched before the
reworded sentence; confirmed "the shoulder tip is a third [prohibition]" still resolves as a full
absolute distinct from the relocated hedge; re-verified all five USA Hockey quotations verbatim
against `sources/ibc.txt`; confirmed facts/Common Mistakes/Key Takeaways in both files were untouched
by the diff and already carried the correct split. Also found that `body_contact_and_battles.md` §6
already uses this exact "two absolutes... a third" framing — the fix aligns the systems files with
the sibling document's own convention rather than inventing a new one.

**On the Rule 69.4 addition** (`zone_entries.md`, `body_contact_and_battles.md`): found a **CRITICAL**
propagation gap. The road-home limb reached body, facts block and Key Takeaways in both files (as §3
above describes) but was **absent from Common Mistakes** — the corpus's own penalty-avoidance
checklist — in both: `body_contact_and_battles.md`'s "Bracing against the goaltender" bullet and
`zone_entries.md`'s "Arriving on the goalie instead of the puck" bullet, the latter describing the
exact fact pattern the rule governs. A reader who studies via Common Mistakes alone would not learn
this rule exists in either document. The coordinator closed the gap directly — one sentence appended
to each bullet, reusing the hedge language and quotation already verified in each file's own facts
block — reran all mechanical checkers and `check_quote_drift.py` on both files clean, then dispatched
a second, independent `safety-reviewer` (not the one that found the gap) to review the fix in
isolation. That review returned **CONFIRMED-SAFE**: accuracy and NHL/IIHF-only scoping both
independently re-verified against primary text, both sentences confirmed to fit their bullets' voice
and not invert the `zone_entries.md` bullet's closing "Take the puck." imperative, and no
overcorrection risk (both sentences preserve "deliberate" as the trigger, not mere proximity).

The same reviewer surfaced a further gap, explicitly **not part of this commit**:
`content/systems/offensive_zone_play.md` — the document both edited bullets name as Rule 69.4's
"owner" — carries the same road-home limb extensively in its own body and facts blocks but has it in
neither its Common Mistakes nor its Key Takeaways. Logged as a new open row in
`project/plans/OPEN_ITEMS.md` (Workstream 132b closure) for a future round.

Both safety-reviewer dispatches, both minor findings they raised (a fact-line book-naming order nit
in `zone_entries.md:297`, and a quotation-style inconsistency between the two files' Rule: lines), and
the `offensive_zone_play.md` gap are recorded in full in `project/plans/OPEN_ITEMS.md`, Workstream 132.

## 5. Process note — two agents declined to author, one wrote it, one reviewed it fresh

Dispatching the `zone_entries.md` write first to a `rules-verifier` and then to a `content-reviewer`
produced two declines, both citing role separation from their own configured instructions
(*"Reports findings; does not silently rewrite"*). The coordinator wrote the addition directly using
both agents' completed verification as its foundation — consistent with this project's actual rule,
which forbids the coordinator reviewing its own writing, not writing at all — and then dispatched an
independent `rules-verifier` pass that re-derived every claim from zero and confirmed it sound.

## What this record could not have found

Neither `usah_casebook.txt` (476 pages) nor `iihf_rules_2026-27.txt` were read cover to cover for a
differently-worded contact-free carve-out that a targeted phrase-and-concept search might have
missed. No document was rendered end to end outside the specific changed units. `offensive_zone_play.md`
and `zone_entries.md` now both correctly omit the USA Hockey/Hockey Canada contact-requirement
without explicitly disclosing it — a real, verified, minor consistency question left open rather
than resolved unilaterally (see `project/plans/OPEN_ITEMS.md` Workstream 131). No rendered site
check occurred in this wave. Neither safety-reviewer dispatch ran a corpus-wide sweep for other
sibling documents that cite Rule 69.4 and might share the same Common-Mistakes/Key-Takeaways gap
just found in `offensive_zone_play.md` — that sweep is a future-round item, not performed here.

# The CARHA census, run at full corpus scale for the first time

**Date:** 17 September 2026. Closes Workstream 2M's long-standing open
census item ("the flattened cross-book parallel — a new class"), which
had named CARHA-mentioning documents but never read them.

## Scope

`grep -rl CARHA content/` returns 28 documents (up from the row's own
stale count of 22 — this session's earlier propagation work had already
added CARHA citations to more files since the row was written). Seven
were excluded as already deeply scrutinized for CARHA content earlier
today (`core_principles.md`, `rink_map.md`, `on_ice_communication.md`,
`playing_without_the_puck.md`, `breakouts.md`, `defending_the_rush.md`,
`body_contact_and_battles.md`). The remaining 21 were split into three
disjoint batches and read in full, every CARHA mention in full
surrounding context, per the row's own instruction: *"The test is NOT
'is CARHA mentioned': a book correctly named in a list of books that
genuinely agree is the CORRECT state... Read every hit; sweep nothing."*

## What the census found

**14 of 21 documents were entirely clean** — every CARHA mention
correctly scoped, no flattening, no omission (`language_and_glossary.md`,
`rules_primer.md`, `uk_rules.md`, `risk_management.md`, `equipment.md`,
`mental_game.md`, `practice_and_development.md`, `team_play_and_culture.md`,
`center.md`, `switching_positions.md`, `game_management.md`,
`neutral_zone_systems.md`, `offensive_zone_play.md`,
`passing_and_receiving.md`). `rules_primer.md` alone carries roughly 60
distinct CARHA citations and is, per the census, "essentially the
corpus's model implementation of the anti-flattening convention for
CARHA."

**Two Majors, fixed:**

1. **`faceoffs.md`** — the corpus had checked CARHA's Rule 57(a) text but
   never its own Glossary, so CARHA was presented as flatly requiring
   sticks on side with no exception, when CARHA's Glossary (verified
   against `sources/carha.txt`) grants the same stick-in-circle exception
   Hockey Canada's does, materially identically. Fixed at five locations
   (intro, a comparison list, Common Mistakes, Key Takeaways, Sources
   trailer), also correcting a related claim that a skate on the line is
   fine under CARHA when its Glossary treats that as encroachment too.
2. **`special_teams.md`** — CARHA cited by rule number ~26 times across
   the whole document, with its scope qualifier ("CARHA-affiliated
   leagues only") present exactly once, in the Sources trailer — absent
   from two Key Takeaways items, several Common Mistakes bullets, and
   every facts block. Fixed at every location, varying the phrasing
   naturally rather than repeating one sentence, within the 300-character
   facts-block cap where needed.

**Three Minors, fixed:** `forechecking_systems.md`'s facts-block CARHA
charging fact missing the scope note its sibling fact in
`offensive_zone_play.md` carries; `shooting.md`'s "all four books"
crease-standing comparison silently omitting CARHA's stricter, on-point
Rule 66(b) (already covered accurately in `offensive_zone_play.md`);
`center.md`/`winger.md`/`goaltender.md`'s shorthanded-icing passages
omitting the fifth-book pointer that `defender.md`'s parallel passage
already carries — not misleading (CARHA is the *most* permissive book on
this rule, verified against `sources/carha.txt` Rule 65(d)), but
inconsistent. Fixed with an identical pointer sentence across all four
documents.

**Confirmed, not expanded:** the already-recorded `goaltender.md`
trapezoid gap (Workstream 2E) is real and broader than previously
described — it runs through the whole section's prose, not only its
facts block, and recurs at a second location (the centre-red-line
passage). Not touched in this round; still deliberately deferred pending
a facts-block restructure, since that block sits at the corpus's 11-fact
hard cap.

## Review

**`rules-verifier`**: full clearance. Every rule number and quotation
touched by these fixes — CARHA's Glossary Encroachment entry, Rule 57(a)
through (d), Rule 65(a) through (h) in full, Rule 52, Rule 55(a), Rule
58(b), Rule 61(b), Rule 66(b), Rule 75(b) — verified directly against
`sources/carha.txt`, cross-checked against Hockey Canada's parallel
Glossary entry where relevant. No content errors, no stale-edition
contamination.

**`content-reviewer`**: no Critical or Major introduced by this round.
Three Minors, all fixed: a "CARHA... CARHA-affiliated" stutter in two
`special_teams.md` locations, reworded; a pre-existing, unrelated
self-narration violation found incidentally in `center.md`'s Sources
trailer ("an earlier version of this document described...") — non-negotiable
6 territory — fixed to state the fact without narrating the corpus's own
drafting history. One informational note, not fixed: `special_teams.md`
and `faceoffs.md` each independently carry a complete, full treatment of
the shorthanded-icing-exemption rule — currently consistent with each
other, but two owners rather than one, flagged for whoever next touches
either.

## Gates

`check_links.py` (exit 0), `check_facts.py` (837 blocks, 5,622 facts, all
conform), `check_absolutes.py` (39 documents + 408 diagram units, clean)
— run after every fix above, across all seven touched files.

## What this census could not have found

A census agent's own methodological note, worth keeping: starting from
every CARHA mention (`grep CARHA`) cannot find a *silent* omission — a
place where a "the books agree" or "every league" claim is made about a
rule CARHA actually diverges on, but CARHA is never named at all. That
requires the reverse sweep: starting from every general/absolute claim
("every book," "all leagues," "the same everywhere") and checking each
one against CARHA's rulebook affirmatively. Not run in this pass — the
`shooting.md` finding above was caught only because the census agent
happened to also be reading the sibling document that states CARHA's
position correctly, not by a systematic reverse sweep. Recorded as a
follow-up method for a future round. No document outside the 21 censused
plus the 7 pre-scrutinized was checked, and no rule number outside CARHA
was re-verified in this pass.

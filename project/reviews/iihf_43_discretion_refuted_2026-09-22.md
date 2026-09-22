# "At their discretion" is boilerplate; `shall assess` is the signal — 22 September 2026

## The finding was REFUTED, and the refutation is a census

A `rules-verifier` reported that `rules_primer.md:449` quotes **IIHF Rule 43.3** without its
operative opening, *"The Referee, **at their discretion**, shall assess…"*, and that *"lands in the
same place"* therefore flattens a real difference against the NHL's unconditional 43.3.

**The quotation was verbatim** — confirmed in both editions (`iihf_rules_v1.1.txt:4000-4001` and
`iihf_rules_2026-27.txt:4057-4059`, identical).

⚠️⚠️ **The INFERENCE was wrong, and wrong in the dangerous direction.** A `safety-reviewer` censused
every IIHF major-penalty clause in the same frame, on a de-hyphenated flattened copy:

| Verb | Clauses | Count |
|---|---|---|
| `may assess` | 41.3, 41.4, 42.3, 42.4, 44.3, 45.3, 45.4, 47.3, 48.3, 49.3, 50.3, 51.3, 53.6, 55.3, 56.4, 56.5, 57.3, 57.4, 59.3, 60.4, 61.3 | **21** |
| `shall assess` | **43.3**, 58.3, 62.3 (+52.2 in a fourth word order) | **4** |

⚠️ **`at their discretion` is boilerplate carried across the book. The distinguishing word is
`shall`.** Boarding, charging, clipping, elbowing, kneeing, interference and the illegal check to
the head all read *"may assess a major penalty"*. **Checking from behind reads *shall assess* — one
of only four in the book.**

**So inserting a bare *"at their discretion"* at `:449` would have told a British reader that the
IIHF's checking-from-behind major is as optional as its boarding major.** ⚠️ **That is precisely the
softening the brief itself warned would be worse than the sentence it replaced** — and the brief
would have caused it.

### The document already teaches this frame, three bullets below

`rules_primer.md:450`, on slew-footing: *"**Read the frame:** *shall assess*, where the IIHF writes
*may assess* in the neighbouring rules"*. ⚠️ **The fifth time today the answer was already written
down in the repository.**

The discretion is also already carried at the summary layer — Key Takeaway 4 (`:1067`) closes the
IIHF Table 6 passage with *"though calling the major at all remains the referee's judgement."*

### The one real asymmetry, already disclosed on the page

NHL 43.3 is unconditional (`nhl_rules.txt:5475-5478`), with a mandatory game misconduct at 43.5.
IIHF 43.3 carries a **reckless-endangerment trigger** the NHL's does not, and is the only penalty
clause in IIHF Rule 43 (43.2 bars the minor, 43.4 is supplementary discipline). **So the route
differs — and `:449` quotes that trigger verbatim on the page.** Any residual over-read is in the
**deterrent** direction: a reader who believes every check from behind is an automatic ejection hits
fewer people from behind.

**Layer test:** body ✓ `:449` · Key focus ✓ `:22` · Overview ✓ `:38` · Common Mistakes ✓ · Key
Takeaways ✓ `:1067`. **This document has ZERO ` ```facts ` blocks**, so there is no facts layer to
fail. **Propagation:** *"lands in the same place"* appears in `content/` only here.

## The second finding was CONFIRMED, and sharper than reported — repaired

`rules_primer.md:114` said *"Under that book, winning the odd-man rush **is** the infraction."*

**USA Hockey 204(b)** attaches its puck-play and contact triggers to *"while the retiring player is
actually on the ice"*, and the **Casebook** (`usah_casebook.txt:2519-2526`) resolves the remaining
ambiguity: *"**The fact they are still both on the ice and** Team A gained a territorial or
positional advantage… is considered to be a violation."*

⚠️ **The limb is CONJUNCTIVE, and the document's ellipsis had elided exactly that clause.** The
coordinator's brief relayed it as *"near-tautological"*; it is not — it is the other half of the
Casebook's own stated test.

**Hazard, rated honestly and not inflated:** voiced alone, the sentence asserts that gaining an
advantage is penalisable full stop, including after a completed change. The behavioural consequence
is a player who hesitates to change — which `:118` of this same document names as what produces
hooking and tripping calls. **Rated major on the read-aloud inversion, not on injury; this is a
bench minor, not a collision.** Scope: USA Hockey readers only.

**The fix replaced the ellipsed quotation with the unellipsed one**, adding a limb and improving
provenance. It softens nothing and evicts nothing.

## ⚠️ A decoy recorded so a future brief does not "refute" a correct line on bad evidence

`:104` says *"USA Hockey Rule 204(b) writes no distance at all"* — **upheld**. But
`sources/usah.txt:7310` carries a **second** substitution rule reading *"within 10 feet of the
players' bench"* with the same competitive-advantage limb — **in the Disabled (sled) Hockey
section, not Rule 204.** A reviewer grepping `usah.txt` for a distance will land on it and conclude
`:104` is wrong. **No edit; recorded as a trap.**

## What this method could not have found

- **The other 38 documents** — grepped only for the two framings under review.
  `body_contact_and_battles.md`, which actually teaches hitting technique, was not opened.
- **The rest of `rules_primer.md`'s ~100 rulebook quotations.** The file was read end to end for
  *layers*, not re-verified claim by claim. `check_quote_drift.py` flags 73 in it; that list was not
  worked.
- **Whether *"lands in the same place"* is right for the other two books** — Hockey Canada 7.5 and
  USA Hockey 608 at `:449` were outside the brief and are **not** reported as checked.
- ⚠️ **Whether IIHF Reference Table 5/6 characterises Rule 43's game misconduct as automatic.** Key
  Takeaway 4 rests on that table; its Rule 43 row was **not read**. **If a later round finds it says
  something 43.3 does not, Key Takeaway 4 is where it lands.**
- **A safety limb sitting in a section whose heading does not advertise its hazard.**
- ⚠️ **Whether a legal check from behind exists in practice.** No rulebook grep tells you that a
  technically-lawful hit near the boards, badly executed at speed, still puts somebody head-first
  into the wall. **Nothing in this pass addresses execution.**

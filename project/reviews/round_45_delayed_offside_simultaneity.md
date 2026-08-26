# Round 45 — a divergence the corpus asserted for five rounds, and did not have

**26 August 2026.** Reviewer: `rules-verifier`. Scope: `rules_primer.md`, `zone_entries.md`,
`winger.md` — one claim, **ten sites**. ⚠️ This line read *"eight sites"* through three gate
passes, and was twice reported as corrected when it was not — see the ⚠️ at the end of the next
section.

This round began as `commit-gate`'s closing item from round 44: the rules owner stated flat, in
three layers including Key Takeaway 1, that on a delayed offside every attacker clears **at the
same instant**, while five sites in two other documents said **"three books of the four"**.

**I fixed it the wrong way round, and the verification caught it.**

---

## What I did first, and why it was wrong

I read the four books, confirmed that NHL 83.3(i), IIHF 83.3(I) and USA Hockey 630(d)(2) all
contain *"at the same instant"* and that **Hockey Canada 6.11(b)(ii) contains no such phrase**, and
propagated the corpus's existing "three books of the four" into the three flat sites — including
into `rules_primer.md:185`, as the actionable sentence *"Under Hockey Canada the clearing need not
be simultaneous."*

**The textual observation is right. The inference is not.** Hockey Canada imposes the same
requirement in different words, three times over:

- **6.11(b)(ii)'s own result clause** — *"so that the attacking zone is **completely clear of
  attacking players**."*
- **Interpretation 10 to 6.11(b)** — *"The attacking zone must be completely clear of all attacking
  players before the off-side is nullified. Attacking players who were not off-side … must wait
  until the delayed off-side is nullified before they can enter."*
- **Interpretation 11** — *"the **instant** the zone is completely free of attacking players."*

**And Hockey Canada's own Interpretation 11 disposes of the simultaneity reading on its own
facts.** A5 and A8 tag up into the neutral zone; A10 leaves the ice into the players' bench. Three
players, two routes — **ONSIDE**, with no condition attached to the *relative timing of those three exits*, *"provided that the substitute for player A10
does not enter the attacking zone until … the instant the zone is completely free of attacking
players."* **IIHF Situation 83.34** states the same test in the book that *does* use the phrase:
a player has cleared *"the instant the skate makes contact with the blue line"*, and *"should
another Team A player enter the attacking zone while A31 is airborne, the delayed off-side shall
remain in effect."* Exits need not coincide; the zone must be empty at one moment.

⚠️ **This paragraph first cited IIHF Situation 83.33**, which has only one player in the zone and
therefore cannot demonstrate anything about coinciding exits. Corrected at the gate, in
`content/`, and then left standing here for one more pass — the round's own headline defect, a
third time.

**All four books require the same thing. Three say "at the same instant"; one says "completely
clear of attacking players".** No play is legal under one and illegal under another.

⚠️ **So the corpus was wrong in five places before this round, and my repair made it eight** — and
one of the three I added was `rules_primer.md:185`, which told a reader in terms that under Hockey
Canada the clearing need not be simultaneous. A player acting on that tags up and re-enters while a
teammate is still deep. **Interpretation 10(i) rules that out by consequence** — *"the attacking
zone must be completely clear of all attacking players before the off-side is nullified"*, so his
own tag has nullified nothing — and playing the puck **or making a play against an opposing
player** while knowingly offside is an intentional offside under **6.11(d)(i)**, with the faceoff
in **your own end**.

All ten sites now state the shared requirement and keep the honest textual observation — the
wording genuinely does differ, and non-negotiable 3 protects the observation. What is removed is
the phantom permission built on it.

⚠️ **This record said EIGHT, and the number was inherited rather than derived.** `commit-gate`
found two live sites still carrying the divergence — `zone_entries.md:931`, a **Common Mistake**,
and `winger.md:291` — plus a bullet at `zone_entries.md:166` that asserted the retraction and
then denied it four clauses later (*"skate contact from every attacker, yes; the same instant,
no"*). The eight came from round 44's plan row, which itself named five. **`winger.md:291`
contains the string `6.11(b)` and would have been returned by the rule-number sweep this record
claims to have run** — so the sweep was described and not performed. That is the same defect as
the round's headline, one layer up: a claim about the work, asserted rather than derived.

⚠️ **And the correction of it was reported three times before it was true.** The scope line at
the top of this record kept *"eight sites"* through three gate passes. Twice I told the gate it
was fixed; both times the edit had silently not applied — once because a `str.replace` with no
assertion matched nothing and reported success anyway, once because the patch sat in a batch
that aborted two statements earlier and I read the wrong success message. **A tool reporting
success is not evidence**, which is a note this plan already carries from round 43, and I hit
it twice more without applying it. The gate caught all three: the eight-site enumeration, the
sweep described and not performed, and then the header reported as corrected. **Each was true
of the round's substance and false of the round's self-report.**

---

## What else the verification found

**"Tag as one and you are legal in all four" was incomplete in two of the three sites I wrote it
into.** USA Hockey 630(d) grants delayed offside and tag-up **only** at Youth 15-Only and above,
Girls 16U and above, High School and Adult. Below those levels there is no tag-up to use — the
whistle has already gone. `:846` carried that carve-out; `:167` and `:185` did not, and `:185` is
the practical-instruction paragraph. Every sibling site in the corpus carries it. Added.

**And I swept too narrowly — the larger divergence is three lines below the one I fixed, and it is
a safety item.** `rules_primer.md:171-176` lists the whistle triggers flat and unattributed, and
`:180` states *"**merely chasing the defenceman deeper into his own zone kills the play** — that is
the most commonly misunderstood part of the rule."* Verified across all four:

| Book | Triggers that stop play during a delayed offside |
|---|---|
| NHL 83.3 | touches the puck · attempts a loose puck · **forces the carrier deeper** · **is about to make physical contact** |
| IIHF 83.3 | identical four |
| USA Hockey 630(d) | touches the puck · attempts possession **or continues to apply pressure** — no about-to-contact trigger |
| Hockey Canada 6.11(b)(ii) | touches the puck · attempts a loose puck — **neither forcing deeper nor about-to-contact** |

**The sentence the primer calls the most commonly misunderstood part of the rule is NHL and IIHF
text.** It is repeated flat at `zone_entries.md:167`, `:174` (facts), and `time_and_space.md:404`
(facts) and `:416`.

⚠️ **This is a contact consequence, not a territorial one.** The corpus relies on the
about-to-make-contact trigger to teach that the play is dead before the check lands. **Under Hockey
Canada that trigger does not exist**: play continues, the check is delivered, and the remedy is
6.11(d)(i)'s intentional offside — *"deliberately plays or attempts to make a play on the puck **or
against an opposing player** in a delayed off-side situation, knowing that they are off-side."* A
reader taught that the linesperson kills it first is being taught, under two of four books, to
arrive on a defenceman who has no reason to expect a whistle. **Carried to `OPEN_ITEMS.md` for a
safety pass of its own; not swept here.**

---

## Two smaller findings

**The citation I made more precise is less resolvable.** I wrote `6.11(b)(ii)` where the corpus's
five existing sites write `6.11(b)`. Hockey Canada's 6.11(b) contains **two** i./ii. lists — the
nullification list and a second *"During a delayed offside, if:"* list whose (ii) is the
touch-the-puck stoppage. A reader resolving `6.11(b)(ii)` naively lands on the wrong clause. The
sites now name the clause by its words as well as its number.

**A book error worth knowing.** Hockey Canada's own **6.3(d)(i)** cross-refers to *"Rule 6.12 –
Off-side"*; 6.12 is Puck Out of Bounds. The heading, table of contents and page number all confirm
offside is **6.11**. Recorded so a future reader grepping "6.12" is not misled.

---

## Method

Swept by **rule number** (`83.3`, `630(d)`, `6.11(b)`), not by phrasing — round 44's note. The two
searches return different sets: the phrasing sweep for *"same instant"* pulls in nine unrelated
hits about width and depth, rebounds and diagram captions. ⚠️ **And the rule-number sweep was
described here and not performed** — `commit-gate` ran it and returned two sites this record had
never named, `zone_entries.md:931` and `winger.md:291`, the second of which contains the literal
string `6.11(b)`. A method note is worth nothing if the method is asserted rather than run.

⚠️ **And the round's own lesson is the inverse of round 44's.** Round 44's worst defect was a sweep
that *manufactured* a divergence by over-applying a correction. This round's was a sweep that
**propagated a divergence that did not exist**, because the textual difference was real and nobody
had asked whether it made any play legal in one book and illegal in another. **A wording difference
is not a rule difference until someone constructs the play that separates them** — and here nobody
could.

---

## Dimensions

- **D1–D3 rules claims — checked**, by `rules-verifier` and again by `commit-gate`, both
  re-deriving every number and quotation from `sources/` independently. The gate additionally
  tried to construct a play legal under one book and illegal under another, **and could not** —
  which is the test this round's method note asks for.
- **D9 summary layer and D10 facts layer — checked at the gate, and this is where it found the
  two missed sites.** One is a Common Mistake and one a facts-adjacent "Key considerations" line.
  `check_facts.py` passing is the floor, not a review.
- **D11 safety — OUT OF SCOPE, and the gate ruled on it rather than letting me assume.** All ten
  changed sites are territorial offside and tag-up statements; none adds, removes or alters a
  contact instruction, technique, equipment or conditioning claim. The one sanction-adjacent
  addition — intentional offside, own-end faceoff — is a stoppage consequence pointing in the
  conservative direction.
  ⚠️ **The round did turn up a genuine contact consequence and it is deliberately deferred:** the
  whistle-trigger divergence, where Hockey Canada has no *"about to make physical contact"*
  trigger, so play is not dead before the check lands. It is pre-existing, spans four sites in
  three documents including one not in this diff, and **sweeping it inside a repair round is the
  pattern that produced round 44's worst defect.** Carried to `OPEN_ITEMS.md` for its own pass.
- **D4 citation integrity and D5 provenance — OUT OF SCOPE.** No external citation added or
  changed; every source is an on-disk rulebook, each quotation located there in this session.
- **D15 rendered page — OUT OF SCOPE.** No heading changed, nothing under `site/`.

---

## What this method could not have found

- **It cannot find a divergence that exists in practice but not in text.** If Hockey Canada
  linespersons are in fact instructed to nullify on non-simultaneous clearing, no file on disk
  shows it, and this round's conclusion is the wrong one.
- **No USA Hockey Casebook is on disk**, so every USA Hockey verdict here rests on rule text alone.
  The IIHF Situation Handbook is v1 read against a v1.1 rulebook.
- **`hc.txt` was extracted without `-layout`**, whose known failure mode is a rule number detaching
  from its text — the one thing that would invalidate the 6.11(b)(ii) citation. Every Hockey Canada
  line was read with surrounding context to check that, but the PDF itself was not opened.
- **The whistle-trigger divergence was identified and not audited site by site.** Four sites are
  named above; there may be more, and nobody has checked what the diagram captions say.
- **`## Check yourself` was not read**, in any document — named unreached by rounds 43 and 44, and
  still unreached.

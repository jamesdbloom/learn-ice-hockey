# Ceilings and shelves — the second wave, 25 September 2026

**Seven content documents, immediately after `e89ee4c`. One permissive CRITICAL reached the corpus and
was caught by a `safety-reviewer`, and **the same claim survived in a second file until the commit gate
found it**. Twenty-one coordinator errors — eighteen caught in briefs, three that landed.**

---

## The claim family: a top tier is not a ceiling

`e89ee4c` established that the IIHF's missing match penalty does not make it the lenient book. This wave
asked the same question of everything around it, and the answer was consistent:

**A match penalty is the ceiling INSIDE THE GAME in every book that writes one.** All five hold the
player out *"until the case has been dealt with"* and make the referee's report MANDATORY. **USA Hockey
alone tariffs what follows** — 410(c) makes the review compulsory and the Standardized Discipline Policy
sets recommended ranges. **Hockey Canada's and CARHA's destinations are not documents at all** — *"the
appropriate Member or league"*, *"the Chairman"*. **The IIHF has no match penalty and no written interim
suspension.**

**A MAJOR was tested the same way and the corpus prices it CORRECTLY in all six books** — CARHA 30(a)/32(d)
alone is carried at ~20 sites. **No wave was warranted and none was run.**

---

## The critical

**`defending_the_rush.md` told a USA Hockey reader that *"608(a) floors at a minor plus a misconduct"*** —
literally true of that clause, **false for the act the section describes**. Chunk 039 stated the mandatory
major-plus-game-misconduct of 639(b) four lines earlier, so a listener heard that catching a man low
**from behind** costs less than from the side. **608(b) makes a major plus game misconduct mandatory, and
the Casebook requires it *"regardless of whether or not board contact is made."***

⚠️⚠️ **THE MECHANISM: a rule number lifted from a per-book comparison TABLE and treated as the book's
ANSWER. 608(a) is the floor of a rule whose own Casebook says that floor does not reach this act.**
**It came from a coordinator brief.** ✅ **Repaired at both sites; chunk 039 now carries the tier and its
correction in one breath.**

---

## What the round establishes about brief errors

**Twenty-one coordinator errors. Eighteen were caught before touching a file. THREE LANDED**, and the
first of the three pointed the PERMISSIVE way. ⚠️ **The other two landed as well — a commit gate reads
staged bytes and nothing else, so anything it finds has already been written into a file. Both were
REPEATS of a failure recorded earlier on this same page** — the permissive
608(a) claim surviving in a second file because the brief named a line instead of a claim, and this
record naming one of its seven content documents after the previous record was blocked for naming three
of thirteen. **A failure recorded is not a failure stopped.** A `safety-reviewer` named why:

> ***"The brief's premise was wrong in the HARSHER direction, which is why it did not hurt anything. A
> brief wrong in the PERMISSIVE direction would have sent me to verify a LIGHTER TARIFF AND I WOULD HAVE
> VERIFIED IT."***

✅ **A harsher-wrong brief is self-correcting — the agent goes looking for the higher tier and meets the
truth. A permissive-wrong brief RECRUITS THE REVIEWER INTO CONFIRMING IT.**

**Four of the twenty-one were unchecked LOCATORS** — a character offset relayed as a line number; two wrong
IIHF line numbers; a layer called "the Overview" that renders as Key focus; a section called "§6" whose
content is in §5. **Three were wrong MEASUREMENTS** — a cap figure, a near-cap count, an edition stamp.
**One would have been a FABRICATION**: a 12-game reset clause asserted on a rule that has none.
**And TWO were REPEATS of failures this record had already written down**, which is the shape above.

---

## What the agents did that no tool does

**Twenty-six ran the self-re-read of their own replacement text. Every one found defects in it.** The
ones worth keeping:

- **A truncated quotation closing on the permissive half** — *"permitted to physically engage with the
  goalkeeper"*, where the source sentence continues and the continuation is the limit. ⚠️ **Three agents
  caught this shape today, each by reading past their own closing mark. `check_quote_drift` scores it
  CLEAN.**
- **A false exclusivity in the making** — naming CARHA and USA Hockey as writing a match tier would have
  implied Hockey Canada does not. **7.5(c) does, mandatory, on the same wording.**
- **A qualifier that changed jobs** — *"until a HEARING"* where 405(c) says *"until the case has been
  DEALT WITH"*; a hearing happens only if requested, and absent one the player is **automatically
  reinstated after 30 days**.
- **An unscoped lead stranded as a chunk's LAST sentence**, voiced with no book named.
- **A numeral change that silently falsified the clause beside it** — *"the other four"* — caught on a
  final sweep of the whole file, **not by any checker**.

## Three refusals worth more than the repairs

- **An agent found sixteen closed quantifiers in a file it had just edited and REFUSED TO INCREMENT THEM**,
  because **PWHL 69 is *Handling Puck*, not NHL 67**, and a search by the NHL's number silently misses it.
  Adding the PWHL unread would have been fabrication; cutting would have been worse. **It handed them on.**
- **An agent declined a table row on measurement AND on host** — 22 characters of cell room, and *"the
  column is *The test the official applies*, a DEFINITION column, not a tariff column."*
- **An agent declined to move a paragraph** because *"the reviewer's own inverse check depends on the
  adjacency — move it and the corrected defect comes back."*

## Two tool facts corrected at the source

- **`check_marker_pairs` cleared a whole-layer restructure BY BEING BLIND TO IT** — it reported
  `HEAD=81 tree=81` on a Key Takeaways layer rewritten from twenty items to twelve, because that layer is
  one paragraph block. ⚠️ **A tool's silence is not a clearance when its unit is larger than the edit.**
- **An agent reported the spoken `"Important."` as emitted per CHUNK. It is PER PARAGRAPH**
  (`md_to_speech.py:2778`), **and it is a BOOLEAN — one paragraph with three `⚠️` speaks it ONCE.** Its
  count was right; its reason was not. ⚠️ **A false renderer fact in the record is worse than none.**

---

## The files in this commit, and what changed in each

| File | What changed |
|---|---|
| `content/technique/body_contact_and_battles.md` | The low-hit-from-behind escalation at four sites, with three confidence levels kept apart (IIHF explicit, Hockey Canada disclosed as an inference, NHL and PWHL not claimed); a new body paragraph carrying the CARHA / USA Hockey / Hockey Canada **match** tiers and what a match penalty costs past tonight; **and, after the gate blocked, the round's own critical removed from a facts line voiced alone and from the body** |
| `content/technique/puck_handling.md` | **The PWHL introduced across every layer**, 0 → 13 mentions: a false exclusivity on the good-goal limb removed rather than restated with a bigger number, twenty-one book counts corrected or replaced with book names, the NHL match-penalty ceiling scoped to *"inside the game"*, and the women's-hockey pinning claim corrected — **the PWHL carries IIHF 101.1's permissive halves and not its boards protection** |
| `content/foundation/rules_primer.md` | The beyond-tonight Overview rebuilt — **all three of its book clauses were false-low**; the match penalty named for the first time in that document; Hockey Canada's 4.4(a) referral limb restored; the NHL General Category's third-major trigger and absent reset clock added; 401(b)'s four-penalty count joined to 404(b)'s next-game suspension |
| `content/systems/defending_the_rush.md` | **The round's permissive critical repaired at two sites** — 608(a)'s floor replaced by 608(b)'s mandatory major plus game misconduct, with the Casebook's *"regardless of whether or not board contact is made"*; the low-hit-from-behind escalation landed in all four layers |
| `content/positions/defender.md` | The same escalation in body and facts; the IIHF 43.1 quotation restored to full, including the parenthetical that lists the example *manners* |
| `content/positions/goaltender.md` | The USA Hockey match-penalty aftermath at `:1131` — 405(c)'s suspension from all games **and practices**, 410(c)'s compulsory review, and the Standardized Discipline Policy's **recommended** range stated as a recommendation |
| `content/hockey-iq/risk_management.md` | The join between *"a check from behind ejects you at the floor in five books of six"* and *"a slide called as clipping climbs higher again"* — the two halves were both present and never connected |
| `project/plans/OPEN_ITEMS.md` | The wave's findings, the twenty-one coordinator errors, the tool corrections, and the next-wave rows |
| `project/reviews/ceilings_and_shelves_2026-09-25.md` | This record |

## Dimensions

| | Dimension | Covered |
|---|---|---|
| D1 | Rules claims vs primary text | ✅ six verifier passes; every tariff re-derived by its writer |
| D2 | Cross-book divergence | ✅ the wave's subject |
| D3 | Citations refetched | ⚠️ **PARTIAL** — local text only; no network fetch |
| D4 | Coaching choice as law | ✅ three confidence levels kept apart in every layer |
| D5 | Summary-layer propagation | ✅ layer tests per document; two carriers found that no brief named |
| D6 | Numeric ownership | ✅ numerals replaced by book names throughout |
| D7 | Negative existence claims | ✅ **eight declared weakest negatives tested; all eight real** |
| D8 | Qualification travelling | ✅ enumerated scoping in every voiced-alone line |
| D9 | ` ```facts ` layer | ✅ every capped line measured; two blocks now at `HARD_MAX` |
| D10 | Safety | ✅ three passes; one critical, then SAFE on all files |
| D11 | Permissive direction | ✅ one critical repaired, five minors recorded |
| D12 | Spoken layer | ✅ rendered before and after; chunk boundaries read, not counted |
| D13 | Rendered site | ✅ built; **5 bare glyphs, none in a touched file; 75 in-strong, 0 untreated** |
| D14 | House style | ✅ no corpus self-narration in `content/` |
| D15 | Diagrams | ⚠️ **OUT OF SCOPE** — no `site/src/diagrams/*.mjs` changed |

## What this wave could not have found

- **The IIHF Disciplinary Code, USA Hockey's Bylaw 10D and Annual Guide, Hockey Canada's Member
  regulations and the EIHL Gamebook are NOT on disk.** Every page says so. **Five of six books point
  outward and only USA Hockey prints its tariff.**
- **No PWHL casebook exists on disk**, and five of the six books have an interpretations layer that
  carves out cases the rule text forecloses. **Every PWHL "agrees" is a rule-text agreement only.**
- **A claim expressed without its distinctive string.** Every sweep this wave was lexical. *"Getting under
  him"*, *"taking his legs"* — a site describing the act without naming it would have passed.
- **A third restatement is now live**: the CARHA / USA Hockey / Hockey Canada match tiers sit at facts
  `:651`/`:658`, body `:662` and body `:546` of one file. **A future correction must reach all three.**

# A modality that read as discretion, and a quotation that travelled without its condition — 26 September 2026

**`content/positions/winger.md` — five lines, across two dispatches. Written after the final
`content/` edit.** ⚠️ **An earlier draft of this record named the document NOWHERE — zero occurrences of
`winger` — while the plan named it four times. A gate blocked on C8 for it: a future agent greps
`project/reviews/` for a filename and finds nothing, then rediscovers the defect instead of reading it.
The durable record is the one that has to carry the path.**
This wave closed the row commit `46e8e3b` designated as next.

---

## 1. The permissive defect: modality

A ` ```facts ` line, **voiced alone**, read *"A check from behind **can** cost a match penalty nowhere
near the boards."* ⚠️ **USA Hockey 608(c) is *"shall be assessed … in all instances"*. Voiced alone a
listener heard DISCRETION where the book is MANDATORY.**

⚠️⚠️ **THE COORDINATOR'S SUGGESTED FIX WOULD HAVE SHIPPED A DEFECT AND THE AGENT REFUSED IT.** Bare
*"costs"* leaves the subject as *"A check from behind"*, so voiced alone it asserts **every** check from
behind is a match penalty — **false in the harsher direction**: 608(a) prices a plain check at *"A minor
plus a misconduct penalty, or a major plus a game misconduct penalty"* and 608(b) at a major plus game
misconduct.

✅ **It moved 608(c)'s four conditions into the SUBJECT — from behind · recklessly endangers · excessive
force · vulnerable or defenseless — and stated the modality in the book's own words.** A later
`safety-reviewer` verified all four survive and that the compression is **not** a relaxation.
✅ **All three `Rule:` lines in the block now declare modality.**

## 2. A Note attached to two books, and a negative that overreached

*"Hockey Canada 7.5(c) and CARHA 53(b), **whose Note** tells referees to substitute nothing cheaper"* —
⚠️ **the Note is CARHA's alone.** Repaired by stating the negative, then **narrowed again** when a
reviewer found the negative itself overreached.

✅ **CARHA's Note is TWO sentences** — *"Referees are instructed **not to substitute other penalties**…
**This rule must be strictly enforced.**"* ⚠️ **Hockey Canada has an equivalent of the SECOND and none of
the FIRST**, carrying *"…strictly enforce the rules in situations such as the following"* and *"Only
through Referees being consistent… with strict enforcement…"*. **So *"no equivalent"* was false; *"no
such instruction"* is exactly true.**

⚠️ **And voiced alone, *"writes no equivalent"* after a sentence whose subject is a mandatory match
penalty could be heard as *"no equivalent MATCH PENALTY"* — which is permissive and false, since 7.5(c)
is the clause the sentence opened by citing.** ✅ **The substitution negative was verified, not accepted:
all ~35 `substitut*` hits in that book are player-substitution mechanics, and 7.5(d) runs the other way.**

---

## 3. ⚠️⚠️ A VERBATIM FRAGMENT TRAVELLED AND ITS SCOPING CONDITION DID NOT

The modality repair carried the book's words *"in all instances"* into **Key Takeaway 10, voiced
alone** — and the scoping clause stayed behind in the book: *"in all instances **when** a player
recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable
or defenseless position."*

⚠️ **Voiced alone, the nearest antecedent for *"it"* was *"a match penalty"* two clauses back, so a
listener heard EVERY check from behind as a match penalty, place irrelevant.**

⚠️⚠️ **THIS IS A NEW MECHANISM, NOT THE RECORDED ONE.** This corpus already records *"a qualifier that
changes jobs when it moves between layers"*. **Here nothing moved a qualifier — it moved a QUOTATION and
left the qualifier behind.** ✅ **A VERBATIM FRAGMENT IS NOT SELF-SCOPING, and the quotation marks make it
look safe precisely because the words are the book's.** ⚠️ **When lifting *"in all instances"*, *"in any
manner"* or *"whether or not injury results"* into a summary layer, the rule's *"when…"* clause must
travel with it or be restated.**

✅ **Repaired with all four conditions, and the agent improved on the reviewer's sketch: the sketch kept
the PRONOUN (*"…it assesses"*), and a wandering pronoun in a voiced-alone layer IS the defect class being
repaired. It made the rule the subject throughout, so no pronoun remains.**

## 4. ⚠️⚠️ NESTED BOLD MADE THE MANDATORY ATTRIBUTION THE ONE CLAUSE WITHOUT AMBER

Pre-existing in the parent commit: the same takeaway carried a **nested** `**` pair. **Markdown does not
nest bold, so the inner pair closed the outer run and reopened it — the two book names and the word
*mandatory* rendered as PLAIN TEXT inside an otherwise bold amber run.** ✅ **The mandatory attribution
was the one clause that lost the escalation.** Repaired by deleting the inner pair; no word changed.

⚠️⚠️ **IT EMITS VALID HTML, NO LITERAL ASTERISKS, AND AN EVEN DELIMITER COUNT — so the literal-asterisk
scan, a parity check and every mechanical gate all score it CLEAN.** ✅ **It was found by rendering and
READING WHERE `<strong>` AND `warn-inline` BEGIN AND END.**

### ✅ So the delimiter method is now two-layered, and both layers are needed

| test | catches | misses |
|---|---|---|
| literal `**` in built HTML, inside `<main>` | an unclosed or orphaned run | anything that pairs plausibly but wrongly |
| **EXTENT read** of `<strong>` / `warn-inline` against the words | nesting, wrong-clause bolding, a wrapper that stops early | nothing found so far — but it needs a reader |
| ⚠️ **counting delimiters** | **nothing reliably** | **over-reported 314 and 114 against a true 3; scored BOTH of this file's real defects clean** |

⚠️ **The extent read also surfaced a PRE-EXISTING boundary nobody had noticed: the `warn-inline` wrapper
ends before the tier enumeration, so three citations are bold but NOT amber.** **Recorded as a
readability row; reaching it needs a word change or a second marker.**

---

## Dimension coverage — D1–D15, declared

**CHECKED:** **D1/D2/D3** — USA Hockey 608 Note/(a)/(b)/(c), Hockey Canada 7.5 preamble/(a)–(e) and all
four Interpretations, CARHA 53(a)/(b) and its Note, each re-derived from `sources/` by two agents
independently and **read past its closing mark** (Rule 609, Rule 7.6 and Rule 54 respectively).
⚠️ **`grep "7.5(c)"` scores ZERO in `hc.txt` — the book prints `7.5 (c)`.** · **D5** — every quotation
located in the book credited; the trailer already carried 7.5(c)'s two paragraphs, CARHA 53(a) as
discretionary and 608(c) naming no place. · **D6** — the Hockey Canada substitution negative **swept and
verified**, and the strict-enforcement equivalent found, which narrowed the claim. · **D9** — the defect
was found in a facts line and a Key Takeaway, both voiced alone; five sibling documents checked and none
falsified. · **D11** — a `safety-reviewer` on the whole diff: **nothing permissive, one Major, two
Minors.** · **D14/D15** — the build reached `check:links`; **literal-asterisk test 0 and the extent read
done on the artefact.**

**DECLARED OUT OF SCOPE, with reasons:** **D4** — no new external URL. · **D7** — not swept. ·
**D8** — no new figure; the *"five of the six books"* count was **verified as load-bearing** on USA
Hockey's exclusion (its floor is a minor plus a **misconduct**, not a game misconduct). · **D10** — **no
`facts-reviewer` ran**; the two changed facts lines were read by a `safety-reviewer` and by the
coordinator, caps verified (275/300 and 250/300), **but the layer was not read as a layer.** ·
**D12** — **no agent rendered speech**; every *"voiced alone"* judgement is from layer shape, and no
chunk distance was measured in this wave. · **D13** — every sentence carries a book and a rule number.

⚠️⚠️ **Those six are the honest position, NOT a pass. D10 and D12 especially.**

---

## Shipped knowingly

- ⚠️ **The repairing agent's own declared residual risk:** whether *"assesses a match penalty in all
  instances where…"* reads to a listener as the match being the **only** tier that rule writes.
  ✅ **Harsher, so non-blocking, and two real mitigations — it cites 608(c) by sub-clause, which implies
  siblings, and the takeaway states a floor for five of six books.** ⚠️ **But USA Hockey is the EXCLUDED
  sixth, so a listener hears no USA Hockey floor anywhere in that unit.** **Worth one clause next time
  anyone is in that takeaway.**
- **The amber boundary before the tier enumeration**, above.
- ⚠️ **A pre-existing paragraph break the corpus reads across:** CARHA's *"anywhere on the ice"* belongs
  to 53(a)'s FIRST paragraph; the match sentence is in its SECOND, whose opening is an injury condition.
  **The corpus imports the scope across the break and drops the injury context.** ✅ ***"Under this rule"*
  may genuinely reach the whole of Rule 53, so this is an ambiguity in the source, and the direction is
  harsher.** **Four sites, all labelled as discretion.**

---

## What this wave could not find

- ⚠️⚠️ **Eight agents have now named the same gap, and THE BOOKS THEMSELVES GROUP THESE RULES.**
  **USA Hockey's own Standardized Discipline list puts 608(c) alongside 603(c) Boarding and 620(c) Head
  Contact as Level-2 match penalties; Hockey Canada 7.6 Head Contact says it *"supersedes any other
  rules"* and requires any foul causing head contact to be penalised as Head Contact.** ✅ **A check from
  behind that contacts the head may be priced by a rule this document never names. That is the next real
  work, and it is no longer a theory.**
- ✅ **CLOSED, not open — a gate swept it rather than accepting the declaration.** The repairing agent
  declared *"the claim, not the line — and I only repaired two lines"*, leaving Key focus, the Overview
  and Common Mistakes unswept for *"in all instances"*, *"names no place"* or an unscoped 608(c).
  **A commit gate ran the layer test across all five layers of the file and found NONE of those shapes,
  and nothing contradicting the repair.** ⚠️ **The declaration was right to make and the sweep was right
  to run: the row is closed by evidence, not by assumption.**
- **Wrongly-scoped-but-valid emphasis, corpus-wide.** The extent read is a reader's test; no tool does it.
- **No speech was rendered in this wave**, so KT10's chunk boundaries after a rewrite that added ~90
  characters are unmeasured.

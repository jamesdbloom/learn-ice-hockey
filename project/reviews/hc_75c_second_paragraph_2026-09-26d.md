# The second paragraph of a rule, and a contrast that did the work of an exclusivity — 26 September 2026

**Three content documents and one diagram caption. Written after the final `content/` edit, per the
ordering rule.** This wave took the top open rows declared by commit `4822d4d`.

---

## The claim

**Hockey Canada Rule 7.5(c) has TWO paragraphs.** The first conditions a mandatory match penalty on
*"into the boards or goal frame … in such a way that the player is unable to protect or defend
themselves"*. **The second assesses one to a player who *"deliberately attempts to or deliberately
injures an opponent by checking them from behind"* — mandatory (*"will be assessed"*), with no
destination condition at all.**

The corpus stated only the first across **seventeen sites** in these three files. ⚠️ **A
`facts-reviewer` had judged this permissive *in effect* but not *by assertion*, so it did not block a
commit. That judgement was right for the two lines it read and did not generalise.**

---

## ⚠️⚠️ TWO SITES WERE FALSE BY ASSERTION, NOT MERELY INCOMPLETE

1. **A Common Mistakes bullet, voiced alone**, said Hockey Canada *"**tops out at** a match penalty"*
   for the boards version and then contrasted CARHA as reaching one *"with no boards in it at all."*
   ⚠️ ***"Tops out at"* is exclusivity by assertion, and the CARHA contrast ACTIVELY told the reader
   Hockey Canada has no non-boards route when it has a mandatory one.** ✅ **Repairing it also made the
   following sentence — *"CARHA sits in the same place"* — TRUE; it had been falsified by the old text.**
2. **A `Rule:` line** claimed Hockey Canada *"puts its **heaviest price on the boards version**"*.
   ⚠️ **A comparative with nothing to be comparative against: the second paragraph is the SAME match
   penalty. It told a reader the non-boards version is cheaper.** ✅ **Found because an agent declined
   the site, flagged it as *"the one decline I am least sure of"*, and asked for a second opinion. A
   decline flagged for review is worth more than a repair made silently.**

---

## ⚠️⚠️ THE NEW SHAPE: A CONTRAST DOING THE WORK OF AN EXCLUSIVITY

**Found by a `safety-reviewer` sweeping all 78 corpus-wide sites of this rule while reviewing a
different diff. NOT in this commit — its own row.**

`content/positions/winger.md` states at a ` ```facts ` line (**voiced alone**), a **Key Takeaway**
(**voiced alone**) and in the body that the mandatory match reaches the boards version under two books,
then adds: ***"USA Hockey 608(c) writes its match penalty with or without board contact."***

⚠️⚠️ **The trailing clause IS the exclusivity. A listener hearing either voiced-alone layer concludes an
open-ice check from behind cannot cost a match penalty under Hockey Canada. It can, mandatorily.**

✅ **The sentence is never literally false and never says *"only"* — which is exactly why the reviewer's
own corpus-wide filter missed it.** That filter matched **ceiling and exclusivity VOCABULARY**; this
document *"phrases the exclusivity as a CONTRAST rather than as a ceiling"*. **It was found by reading
the filtered hits' NEIGHBOURS, not by the filter.** ⚠️ **And the reviewer named the cost: at least six
documents were filtered and not read, and *"a document that implies the same exclusivity with no shared
phrase at all would have passed me."***

✅ **The fix is propagation, not research: two sibling documents already carry the limb at every layer.**

---

## What was repaired

**Eleven sites across three files; nine declined with reasons; two accuracy defects found in the repairs
themselves and fixed.**

| File | Action |
|---|---|
| `hockey-iq/risk_management.md` | a new facts line in the **open-ice** section (the right home — the section's subject is a backchecker chasing a carrier, which is where *"the match needs the boards"* is permissive); body and Key Takeaway 9 repaired in place; a Sources-trailer parenthetical widened |
| `systems/zone_entries.md` | a new facts line; the false Common Mistakes bullet repaired; the false comparative **split** into two lines |
| `systems/defensive_zone_coverage.md` | a new facts line; body and Common Mistakes repaired; ⚠️ **a Sources-trailer entry added — the trailer named Hockey Canada 7.2, 7.3, 7.6 and 7.7 but NEVER 7.5**, while the body quotes 7.5's preamble, (a), (b), (c) and (e) at length |
| `site/src/diagrams/zone_entries.mjs` | the `entry-trail-skate-drag` caption re-scoped from two permissive books to three, with CARHA's silence named and the plane qualifier made explicit |

---

## ⚠️⚠️ A CAP DOES NOT FORCE A COMPROMISE — IT FORCES A SPLIT. MEASURED TWICE.

Repairing the false comparative, the agent **tried the rewrite first and measured why it fails.** The
honest single sentence — both paragraphs plus the violence limb — is **307 characters against a 300
cap**, and both ways to fit it cost something real:
- eliding the verb → 291 characters, **but it compresses grammar to fit a cap**, which is the move that
  produced the *"a raised skate is onside"* defect earlier the same day;
- inverting to *"one route … not the only one"* → 290 characters and **true, but voiced alone it names
  no other route** — a dangling pointer, traded in to fit a cap.

✅ **So it split. Nothing was shortened, both quotations stayed intact, and the violence limb GAINED a
word, moving closer to the book.** ⚠️ **Record the arithmetic, not the instinct.**

**And the same discipline held on the accuracy fixes:** an agent declined two net-neutral wordings —
one replacing a named location with a demonstrative pointer in a layer voiced alone, the other silently
widening a two-book claim to six unverified — **and declared +5 characters rather than trimming a
qualifier to compensate.**

---

## Two accuracy defects inside the repairs, both harsher-direction

- **An antecedent over-reaching its own two rules.** A Key Takeaway named Hockey Canada 7.5(c) and CARHA
  **53(b)**, then said *"and neither stops at the boards"*. ⚠️ **53(b) DOES stop at the boards or goal
  net; the no-boards CARHA route is 53(a)** — a different clause the same sentence goes on to quote.
  ✅ ***"Neither"* was true of the two BOOKS and false of the two RULES it had just named.** Now
  *"neither book"*.
- **A deliberate-injury clause glossed as the ordinary hit.** The body called the second paragraph *"the
  open-ice version of the hit you are contemplating"* — but that hit is a frustrated backchecker
  chasing, which is **7.5(a)**, minor plus game misconduct. **The second paragraph is gated on
  *"deliberately"*, twice.** Now *"reaches the same hit in open ice where it is deliberate"*.

---

## Agents caught three defects in their own drafts

1. ⚠️ A first draft opened *"The boards are not what makes **it** a Match penalty"* — **voiced alone,
   *"it"* has no antecedent.** Named the act instead, at a cost of 18 characters it had.
2. **Two carriers of one claim were written differently on purpose** — one closing *"asking nothing
   about where the player lands"*, the other *"wherever the retriever ends up"*, because the second
   section's subject is a forechecker arriving on a turned retriever and *"the retriever"* is that
   block's own established term. **Not a paste.**
3. A `facts-reviewer` **refuted the previous reviewer's "likeliest next defect" and wrote nothing.**
   Hockey Canada 7.1(c) is expressly residual — *"in any manner **not otherwise covered within the
   playing rules**"* — and checking from behind **is** otherwise covered, by 7.5(c)'s second paragraph,
   in the same words. ✅ **Adding it as a third route would have been wrong.**

---

## Dimension coverage — D1–D15, declared

Keyed against the table in [`review_process.md`](../review_process.md).

**CHECKED:** **D1/D2/D3** — every claim re-derived from `sources/` by the repairing agents and again by
a `safety-reviewer`; both paragraphs of 7.5(c), CARHA 53(a) and 53(b), Hockey Canada 7.5(a), NHL 83.1,
IIHF 83.1 (**2025/26 v1.1**), PWHL 85.1 (by heading), USA Hockey 630(a), Hockey Canada 6.11 and
Interpretation 3 — **every quotation read PAST its closing mark.** · **D5** — every quotation located in
the book credited; a missing Hockey Canada 7.5 trailer entry added. · **D6** — `plane` = 0 in
`carha.txt`, tested not assumed. · **D9** — two false-by-assertion summary-layer sites found and
repaired, one a Key Takeaway voiced alone. · **D10** — a `facts-reviewer` read the changed lines as a
layer and ruled on the two-paragraph question. · **D11** — a `safety-reviewer` on the whole diff; ruled
sound, two accuracy defects found and fixed. · **D12** — **chunk distance MEASURED on the coordinator
for both things an agent could not check: the split facts lines share chunk 067, and the caption's six
parts share chunk 017.** · **D14** — `check_links.py` passes; the build reached `check:links`. ·
**D15** — no `site-reviewer` owed for a caption string change; **the build was verified by ARTEFACT,
the repairs' own text located in `site/dist`.**

**DECLARED OUT OF SCOPE, with reasons:** **D4** — no new external URL enters the corpus; every new
quotation is local primary text. · **D7** — not swept; the added text is tariffs and rule scopes, so
exposure is low. · **D8** — no new figure added to `content/`. · **D13** — every new sentence carries a
book and a rule number.

⚠️⚠️ **Those four are the honest position, NOT a pass. Treat them as UNEXAMINED for this diff.**

---

## Shipped knowingly

- ⚠️ **Fourteen of seventeen sites still state the boards limb alone, deliberately.** Each document got
  one dedicated facts carrier plus its body ladder plus its voiced-alone summary layer, following the
  in-corpus precedent; the rest were declined to avoid a fourth restatement, because a third restatement
  is one more place a correction can fail to reach. ✅ **A `safety-reviewer` ruled none of the fourteen
  dangerous alone: they state a sufficient condition without asserting a ceiling, and in each repaired
  document the boards line and the new line are ADJACENT in the extraction layer.** ⚠️ **A gate
  qualified that claim and it is right: adjacency holds for the REPAIRED carrier, not for every copy —
  `defensive_zone_coverage.md` carries the boards-limb facts line TWICE and only the first gained the
  new line beside it. Neither copy states a ceiling, so neither is dangerous alone.**
  ⚠️ **The author declared the risk against itself: *"If that model is wrong… then I have left the defect
  in place at every unrepaired site and my report reads like completion."***
- **Three captions naming five books and silent on CARHA** were ruled correct and left. **CARHA's
  position is unsettled, so omitting it withholds an answer rather than giving a wrong one, and each
  closes on an instruction true in all six books.** ✅ **The repaired caption names CARHA because that
  diagram's whole subject IS the split — the owner's document-relative test, applied to the caption
  layer.**
- ⚠️ **A CARHA gloss ruled safe WITH a prohibition:** *"could also be assessed anywhere on the ice"* is
  safe **because the discretion sits inside the quotation marks**. ⚠️⚠️ **It must never be restated as
  *"a match penalty is available anywhere on the ice"*, nor lifted into a facts line without the
  *"could"* and the injury adjacency. It is now a three-site claim resting on a reading the rule text
  does not settle.**

---

## What this wave could not find

- ⚠️⚠️ **A check from behind into the boards is TWO FOULS, and only one ladder was swept.** *"Whether
  any of the four books writes a BOARDING match penalty with no destination condition is the question I
  did not ask."* **The corpus already tells readers the boards add boarding, so the tariff a reader owes
  is the HIGHER of two ladders.** **Its own row; brief it by the act.**
- ⚠️ **Hockey Canada 7.5 Interpretation 3 permits *"pinning a player to the boards at low speed and with
  minimal impact… even if contact is initiated from behind"*, and it appears at NO site in these three
  files** — while one of them states flatly that pinning is not legal, sourced only to the IIHF women's
  rule. ✅ **The wave does not worsen it (every inserted clause is gated on *"deliberately"* twice), but
  it is the only place a book draws the low-speed line.**
- **Six documents' worth of this rule's sites were filtered and not read**, by the reviewer's own
  account.
- **No agent rendered speech.** The two chunk measurements in this record were taken by the
  coordinator; every other *"voiced alone"* judgement rests on known renderer behaviour.
- ⚠️ **A coordinator census was wrong because it ran WHILE AN AGENT WAS EDITING** — the single hit it
  counted was the agent's own new line. **A census over `content/` is only valid AFTER every agent has
  finished, exactly like a checker run and a build.** **The direction was flattering: it made the corpus
  look one carrier better supported than it was.**

# Round 25 — who issues the In-House Rules

*A single attribution claim, chased to the primary text and found unsupported in
every form the corpus stated it. 30 July 2026.*

| | |
|---|---|
| Method | One claim, six sites, verified against the extracted In-House Rules and the EIH Rules & Regulations |
| Documents changed | `uk_rules.md` · `equipment.md` · `getting_started.md` · `content_style_guide.md` · two skill files |
| Reviewers run | `rules-verifier` |
| Criticals / majors / minors | 0 / 1 / 0 |
| Corpus commit | `a07176f` |

---

## The brief

[Round 22](round_22_narration_pipeline.md) left one finding open on purpose: the
style guide and `uk_rules.md` disagreed about who issues the In-House Rules, and
correcting a governing document is a claim change that wanted its own pass.

This is that pass. It is deliberately narrow — one claim — because the
interesting part was never *which* of the two versions was right.

---

## The finding

**MA1 · Both live versions asserted an issuer the primary text does not name.**

The corpus said this in two incompatible ways:

| Form | Where |
|---|---|
| "issued **jointly by** England Ice Hockey, the SIHA and the BUIHA" | `content_style_guide.md`, `equipment.md`, `getting_started.md` ×2 |
| "issued by England Ice Hockey **and the SIHA**" | `uk_rules.md` — the owning document |

Round 22 resolved this the wrong way. It reasoned that `uk_rules.md` owns the UK
amendment list, so the owner wins, and propagated the two-body form into the
skill files. **The owner was no better sourced than the style guide.**

`rules-verifier` went to the extracted text. The In-House Rules **name no issuer
at all** — no "issued by", no publisher, no author, no copyright line, in
eighteen pages. Grepped for `issu|publish|produce|author|copyright|©|behalf|
jointly`. The cover says only *"IN-HOUSE RULES, 2025-26 SEASON, Revision 1"*.

Three specifics settle it:

- **The Introduction has all three associations *adopting the IIHF Rule Book*.**
  That is adoption of a different document, not issuance of this one.
- **The only sentence linking any body to the verb is about a separate
  artefact:** *"The EIH and SIHA may also issue Rule Bulletins from time to
  time."* Rule Bulletins are not the In-House Rules; "bulletin" appears once in
  the whole primary corpus. The two-body form was read out of this sentence.
- **Amendments to the document are described with no agent at all** — "will be
  issued in updated versions", "notification sent", "Replacement pages will be
  provided". Three agentless passives in a row.

The verifier also found the contrast that makes the silence look deliberate:
the sister document does name itself. `eih_rr.txt` opens *"EIH has produced this
document"*. England Ice Hockey knows how to claim authorship, and in the
In-House Rules it does not.

**Fix.** Every site now says the three associations **apply** them, which the
text supports, and none says who issues them, which it does not. A disclosure in
`uk_rules.md` records the evidence, in the style of the v1.1 caveat beside it.

---

## Dimension coverage

| # | Dimension | Checked? | Notes |
|---|---|---|---|
| D1 | Rules accuracy | **Yes** | `rules-verifier`, against `/private/tmp/eiha_inhouse.txt` and `eih_rr.txt` |
| D3 | Rule-set divergence | **Yes** | The claim is a governing-body attribution for British readers |
| D5 | Provenance | **Yes** | This is a provenance defect exactly: a real document credited to bodies that never claimed it |
| D6 | Negative existence | **Yes** | The finding *is* a negative existence claim — "no issuer is named" — and was attacked directly rather than assumed |
| D8 | Numeric ownership | **Yes** | The ownership convention was the thing that failed. See below |
| D14 | Structure / links | **Yes** | `check_links.py` |
| D2, D4, D7, D9–D13, D15, D16 | | **No** | Out of scope. One attribution claim; no number, citation, coaching claim, facts block or rendering touched |

**Mechanical:** `check_links.py` ✔ · `check_facts.py` ✔ · `check_secrets.py` ✔

**Coverage limits.** One claim. No other assertion in any of the six files was
re-examined. The verifier notes one thing this method could not see: the source
PDF is not on disk, only extracted text, **so an issuer present solely as a
cover logo or in PDF metadata would not appear.** Closing that needs the PDF
re-fetched and its cover and document properties inspected.

---

## What this round is really about

**The ownership convention failed, and failed quietly.**

The rule is: take the fact from its owner, and if you think the owner is wrong,
fix the owner rather than diverging. Round 22 applied it correctly and still got
the wrong answer, because *both* documents were repeating an inference and the
convention has nothing to say about that. Preferring the owner resolved a
disagreement without touching the question either document was answering badly.

`content_style_guide.md` already warns that a named owner may not hold what its
dependants credit it with. This is the neighbouring failure: **the owner held
it, and the owner was wrong.** Ownership makes a corpus consistent. It does not
make it true, and consistency is what hid this for two rounds — five sites
agreeing loudly enough that the disagreement between them looked like the whole
problem.

The lesson is small and worth keeping: **when two documents disagree, the
primary text is the tiebreak, not seniority.** The style guide's own instruction
covers it — *"quote the rulebook when you rely on an entry, and if the
quotation is not in front of you, go and get it."* Neither round 22 nor the
first fix did that. The text was on disk the whole time, at the path the style
guide itself cites.

---

## What this method could not have found

- **An issuer in the PDF cover art or metadata.** Extraction only.
- **Anything else in the six files.** One claim was chased; the rest went
  unread.
- **Whether the In-House Rules on disk are current.** Revision 1, published
  27/10/25, is what was checked. A Revision 2 would not announce itself.
- **The same defect elsewhere.** Attribution-by-inference is a shape, not an
  incident, and nothing here swept the corpus for other instances of it. That
  is the next round's scope: every "issued by", "published by" and "produced by"
  in the corpus, checked against whether the named body actually claims it.

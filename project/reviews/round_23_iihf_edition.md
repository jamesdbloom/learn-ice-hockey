# Round 23 — closing the IIHF edition gap

**Date:** 30 July 2026
**Scope:** one question, carried as the largest open gap by rounds 21 and 22 —
does the corpus quote the edition of the IIHF rulebook that Britain actually
plays under?

**Answer: it does now, and everything it said was already right.**

---

## The gap

The England Ice Hockey In-House Rules adopt *"the IIHF Official Rule Book
2025–2026 (**Version 1.1, published July 2025**)"*. Every IIHF quotation in this
corpus was verified against **v1.0, May 2025** — the only edition obtainable.

Two agents raised it independently in round 21. Round 22 restated it as the
largest known hole and named the specific exposure: if v1.1 renumbered the
goalkeeper's restricted area, round 22 had propagated a wrong rule number to
twenty documents, very carefully, and every check would still have passed.

---

## Obtaining it

The IIHF's own published link **still serves v1.0**, and has since 2 June 2025 —
confirmed from the `Last-Modified` header, not inferred. Its rulebook index
pages return a Cloudflare bot challenge to scripted clients and to headless
Chrome; that was not worked around. Ten plausible direct URLs 404.

The copy read here is the **Royal Belgian Ice Hockey Federation's** mirror. That
is weaker provenance than the IIHF's own server, so it was checked on receipt
rather than trusted: the version line reads *"IIHF Official Rulebook 2025/26 –
Version 1.1, July 2025"*, and the structural comparison below is what actually
establishes it is the right book rather than a relabelled one.

A first attempt by the user retrieved the **IIHF Guide & Record Book 2026** — a
statistics and history annual, not the rulebook. Different publication, similar
name; worth knowing, because it is what the IIHF site surfaces most readily.

---

## What the comparison found

| Check | Result |
|---|---|
| **Rule numbers** | **472 in v1.0, 472 in v1.1, identical sets.** Nothing renumbered, nothing added, nothing removed |
| **27.7 / 27.8** | Restricted area still **27.7**; 27.8 still *"Infractions – Unique to Goalkeepers"* |
| **201.1** | Identical, heading included — the junior-ejection reading holds |
| **Corpus quotations from the IIHF book** | **49 of 49 present verbatim in v1.1** |

The 49 were extracted mechanically: every italic-quoted string of 25 characters
or more across all 36 documents, whitespace- and quote-normalised, matched
against both editions. 686 further quotations trace to the NHL, USA Hockey,
Hockey Canada or the British books and were out of scope.

**So no claim in this corpus rested on a superseded revision**, including every
rule number round 22 propagated to twenty documents. `uk_rules.md`'s ⚠️
disclosure has been replaced by a statement of what was checked.

---

## The trap that nearly produced six false findings

The first comparison reported **six** corpus quotations missing from v1.1,
including Rule 1.2's rink dimensions — which would have been a serious finding.

All six were false. The Belgian PDF subsets its fonts differently, so
`pdftotext` renders the `fi` and `fl` ligatures as CJK codepoints — 725
occurrences. Raw, *"official"* extracts as `of昀椀cial` and *"five (5)"* as
`昀椀ve (5)`. A diff then shows spurious differences in **exactly** the passages
containing those letter pairs, which is why the false positives clustered on
rink dimensions and shooter counts rather than scattering.

A seventh apparent difference was a page break splitting one sentence across a
boundary.

The lesson generalises past this file: **an extraction artefact does not look
like noise, it looks like a finding** — and it lands on whichever claims happen
to contain the affected characters. Every one of the six would have been
plausible enough to act on. The repair is recorded in `sources/README.md`, and
any re-extraction of that PDF must repeat it.

---

## What changed on disk

- `sources/iihf_rules.txt` is now **v1.1** — the canonical source for all future
  verification.
- `sources/iihf_rules_v1.0.txt` keeps the superseded edition so the comparison
  can be redone.
- `sources/iihf_rules_v1.1.pdf` is the original.
- `sources/iihf_guide_record_book_2026.pdf` — the Guide & Record Book, not a
  rulebook, kept and correctly named so nobody mistakes it for one.

---

## What this round could not have found

- **Whether the Belgian mirror is byte-identical to the IIHF's v1.1.** It
  self-identifies as v1.1 and its rule set matches v1.0's structure exactly,
  which is strong evidence it is the genuine book — but it is not the IIHF's
  own server, and a modified copy that preserved all 472 rule numbers and all
  49 quoted passages would pass every check run here.
- **Wording changes in passages this corpus does not quote.** The comparison was
  driven by the corpus's own quotations and by rule numbering. A v1.1 change to
  a rule the corpus paraphrases rather than quotes would not surface. Given
  that v1.0 and v1.1 agree on every quoted passage and every rule number, the
  probability is low — but "low" is not "checked".
- **The IIHF Situation Handbook at v1.1.** Only the v1 file is on disk, and
  `goaltender.md` rests three behavioural claims on it.
- **The EIHL Casebook and any EIH or SIHA Rule Bulletin.** Still unobtained. The
  In-House Rules say bulletins are issued from time to time; none has been read,
  and a bulletin is the one thing that could settle the trapezoid question that
  rounds 21 and 22 both had to leave open.

# The owner document, opened at last — `body_contact_and_battles.md`, 22 September 2026

**Nobody had opened the corpus's owner for checking-from-behind and body contact this session**,
while two agents verified documents that defer to it and both said so. This closes that.

## ✅ THE ATTRIBUTION SWEEP IS CLEAN, AND IT IS THE MOST THOROUGH ONE RUN TODAY

A normalised (alphanumeric-only, de-hyphenated, whitespace-flattened) index of **all 38
`sources/*.txt`**; **1,193 quotation fragments** from this file tested against **every** book; any
fragment whose containing-book set excluded the book named on its line was flagged. **116 candidates.
All 116 read by hand.**

**Every one resolved to either (a) a USA Hockey *publication* other than the playing rules —
`ibc.txt`, `huh.txt` — correctly described as "USA Hockey", or (b) a British document
(`eiha_inhouse*`, `ihuk_*_roc`) correctly named on a line that also mentions the IIHF.**

> **No quotation in this file carries one book's words under another book's name.**

⚠️ **And the tool matched the WRONG BOOK twice IN THE DOCUMENT'S FAVOUR** (`:1227`, `:1545`) —
reporting an IIHF heading against `hc.txt`, and an IIHF 46.6 heading against `iihf_rules.txt`'s table
of contents. **The document is right and the tool's book attribution is wrong.** The blindness fires
in both directions.

## 🔴 F3 — an UNSCOPED PENALTY TIER in a spinal-injury passage, contradicted by the document's own §5

`:778` says checking from behind *"is a major penalty with an automatic game misconduct"*.
**True of the NHL and IIHF only.** Hockey Canada 7.5(a) writes *"a **Minor** penalty AND a Game
Misconduct"* (`hc_layout.txt:4845-4848`); USA Hockey 608(a) writes *"a minor plus a misconduct
penalty, **or** a major plus a game misconduct"* (`usah.txt:3722-3724`).

⚠️ **The document's own §5 says so four hundred lines earlier** — `:589`: *"Two of the four books
here provide a minor for it."* **And `:1621` states the same fact correctly scoped.**

**It OVER-states the penalty, so a reader acting on it is not endangered** — but it contradicts the
owner document's own section, and **`check_absolutes.py` passes on it.** Fix is one qualifier.

## 🔴 F1 — an IIHF mandatory major left reading as discretionary, and TWO CENSUSES NOW AGREE

`iihf_rules_v1.1.txt:3998-4000` — 43.3 reads *"The Referee, at their discretion, **shall** assess a
major penalty and an automatic game misconduct penalty…"*

⚠️⚠️ **Two independent censuses, run by agents that never communicated, reached the same result:**

| Census | Scope | Result |
|---|---|---|
| First (`safety-reviewer`, `rules_primer.md`) | every IIHF major-penalty clause | **21 `may assess`, 4 `shall assess`** |
| Second (`rules-verifier`, this file) | the physical-fouls family: 41.3, 41.4, 42.3, 42.4, 44.3, 48.3, 59.3 | **all `may` — 43.3 alone `shall`** |

**So *"at their discretion"* is boilerplate and `shall` is the signal.** With 43.2's *"no option to
award a minor penalty"*, a British checking-from-behind has **no lower rung and no discretion to
take one.** `:589` is true but leaves the tier reading as discretionary like charging.

⚠️ **This is a STRENGTHENING omission — saying it makes the rule harsher.** ⚠️ **A brief earlier
today proposed surfacing the *"at their discretion"* phrase and was correctly REFUTED**, because bare
it would have made a mandatory tier read as optional. **The point is `shall` versus `may`.**

⚠️ **THERE IS NO HEADROOM:** `:586` and `:1155` are `Rule:` lines at **299/300**; `:728`, `:785`,
`:1154` at **199/200**. **One character each.** Substitution or a new line — never an append.

## 🔴 F2 — a Hockey Canada carve-out the corpus has NEVER READ

`hc_layout.txt:4886-4893`, **Interpretation 3 to Rule 7.5(a)**:

> *"…Provided that contact is marginal in nature and does not endanger the safety of the opponent,
> no penalty may be assessed. **Pinning a player to the boards at low speed and with minimal impact
> is permitted, even if contact is initiated from behind** (except under Rule 7.3 – Body-checking,
> as applicable)."*

`grep "marginal in nature"` and `grep "Pinning a player to the boards"` return **zero** in this
document. ⚠️ **This is exactly what the previous agent said it could not rule out** — *"If an
Interpretation narrows item ii, I would not know."* **It does narrow 7.5, and the corpus has never
carried it.**

⚠️ **Direction is CONSERVATIVE** — `:1641` teaches *"pin the puck, not the player"*, **stricter than
Hockey Canada allows. No reader is endangered and nothing should be deleted.** But this is the owner
document, it is a published permission under the book governing Canadian minor hockey, and the
**"(except under Rule 7.3)" limb means the permission evaporates in a non-checking division.**

## ⚠️ BRIEF ERROR THIRTY-THREE — the coordinator conflated two Interpretations of two different rules

The brief said the document quotes HC **Interpretations 2 and 3 to Rule 7.5**. It quotes
**Interpretation 2 to 7.5(a)** (`:582`, `:742`, both verbatim) and, separately, **Interpretation 3 to
Rule 7.7(a)** — the *ducking* carve-out, **a different rule**. Both are correctly attributed in the
document. **The coordinator conflated them, and the conflation is what hid F2.**

## ⚠️ `notfound=64` IS DOMINATED BY EXTRACTION ARTEFACTS — nine chased, nine present

**Zero fabricated quotations.** Causes: page furniture (*"Playing Rules"*, *"CASEBOOK"*, InDesign
stamps, `TABLE OF CONTENTS`) spliced **inside** sentences; the `[x]` single-letter exemption; and a
**two-column table interleaving the result cell *"Goal is allowed."* into the middle of an NHL Table
14 sentence.**

⚠️ **The agent nearly filed a false finding on that last one**, because `"crease line or outside"`
returns nothing in the current NHL extraction and hits **only the superseded 2024-25 book** — *"which
reads as 'the document is quoting a dead edition.' It is not."*

**One `notfound` is a correctly-verified ABSENCE:** `"only slightly above the height of their waist"`
is in the **IIHF Situation Handbook 2026/27 only** — re-run against the 2025/26 handbook and
**genuinely not there**, which is exactly what `:1466` says.

## Negative existence claims, attacked and held

- **"The IIHF writes no match penalty anywhere"** — `grep -ci "match penalty"` = **0** in both v1.1
  and 2026/27; the word *"match"* occurs **once** in each, not as a penalty. **A strong negative,
  properly attacked.**
- **"The NHL rulebook contains no positive definition of a body check"** — `body check` occurs
  **twice** in the whole book, neither a definition; **zero** occurrences of `check` in the glossary
  block.
- **USA Hockey Casebook Rule 608 has exactly ONE Situation and no turn carve-out.**
- The IIHF glossary's legal body check **has no stick-below-knees clause** — absence attacked, holds.

## Precision worth recording

The three-way boarding-onus diff at `:591` is verified **down to `may` versus `can` and a missing
final sentence**: NHL 41.1 and IIHF 41.1 both carry *"This balance must be considered"*; **Hockey
Canada 7.2 ends at *"may be considered"* and has no such closing sentence.** And the Casebook prints
the weighing **twice**, the second narrower — 603 Situation 2 asks whether the check was
**reckless**, Standard of Play Situation 19 asks whether it was **necessary**, and only Sit 19 adds
*"as an opponent clearly attempted to gain possession of the puck"*. **Both printings located and
both headings confirmed by reading back to the Situation label.**

## What this method could not have found

1. ⚠️ **Whether the RULE NUMBER is right when the same words appear at several numbers in one book.**
   The sweep tests whether the *named book* contains the words. **The 603/608 near-twin onus sentence
   is exactly that shape — checked by hand; there may be others that were not.**
2. ⚠️ **A rule ABSENT from the document altogether.** F2 surfaced only because the brief named a line
   range. **There is no mechanical way to enumerate the carve-outs a document has never heard of.**
3. **Whether a correctly-quoted rule is correctly TAUGHT** — whether the technique the prose
   recommends actually satisfies the rule it cites.
4. ⚠️⚠️ **EDITION DRIFT IN THE ONE DIRECTION THAT MATTERS MOST HERE.** A claim quoted correctly from
   `iihf_rules_v1.1.txt` is right for a British reader today and **wrong the day IHUK adopts
   2026/27 — and nothing in this repository watches that date.**
5. **§§1–3 and 6–10 were covered only by the automated sweep, not read rule-by-rule** — the
   British/IHUK section, stick-lift and hooking, goaltender interference, interference and late hits,
   and the fighting/penalty-bench section. ⚠️ **The sweep says no quotation there is under the wrong
   book's name; it does NOT say the rule numbers are right or the tiers complete.** The `ihuk_*_roc`
   files were not opened, so the §1 British body-checking-age claims are **unverified**.

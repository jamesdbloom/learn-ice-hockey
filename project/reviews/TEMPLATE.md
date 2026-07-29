# Round N — *the method, in four words*

*Status. Documents reviewed, reviewers run, date.*

> Copy this file, do not edit it. Delete the guidance in blockquotes as you go.
> The worked example is [`round_20_key_facts.md`](round_20_key_facts.md).
>
> This record satisfies **C8** of the commit gate. It exists so the *next* round
> can be scoped: round 10 found three criticals that eight previous rounds had
> passed over, and it could only be aimed because round 9 stated plainly what it
> had not read.

| | |
|---|---|
| Documents reviewed | n of 36 |
| Reviewers run | rules-verifier · source-verifier · content-reviewer · facts-reviewer · safety-reviewer · site-reviewer |
| Criticals found / fixed | n / n |
| Majors found / fixed | n / n |
| Minors found / deferred | n / n |
| Date | |

---

## The brief

> One paragraph: the **method** this round was scoped to, and why that method
> and not another. A repeated brief re-finds nothing, so say what makes this
> one different from the last round's.

---

## Dimension coverage

> **Every row must be filled in.** "Not checked" is a legitimate entry and a
> useful one; a blank is not. Silence on a dimension is the failure mode — it is
> what let round 9 look clean. Dimensions are defined in
> [`../review_process.md`](../review_process.md#the-dimensions--a-review-must-cover-all-of-these).

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | | | |
| D2 | Rules travelling without exceptions | | | |
| D3 | Rule-set divergence (NHL / IIHF / USAH / HC / England IH) | | | |
| D4 | Citation integrity | | | |
| D5 | Provenance | | | |
| D6 | Negative existence claims | | | |
| D7 | The cardinal rule | | | |
| D8 | Numeric ownership | | | |
| D9 | The summary layer | | | |
| D10 | The key-facts layer | | | |
| D11 | Reader safety | | | |
| D12 | Read-aloud integrity | | | |
| D13 | Folklore | | | |
| D14 | Structure, style, terminology, cross-links | | | |
| D15 | The rendered site | | | |

**Mechanical checks:** `check_links.py` ☐ · `check_facts.py` ☐ ·
`check_external_links.py` ☐ · `npm run build` ☐

**Document coverage:** read in full … · sampled … · not reached …

---

## Findings

> Ordered by severity, then by document. One block per finding. A finding is not
> closed when the fix is written — it is closed when a **subsequent pass**
> confirms the fix in place, and confirms it in place *in every summary that
> repeats it*.

> Number findings `CR1`, `CR2`… for criticals, `MA1`… for majors, `MI1`… for
> minors. **Not `C1`** — that is gate condition one, and "C1 failed" then means
> two different things.

### Critical

**CR1 · `content/…:line` — one-line statement of the defect**

- **As it stood:** the text, quoted.
- **Why it is wrong:** the evidence, with the rule number and grep, the URL and
  status, or the owning document.
- **What a reader would do:** the concrete consequence. Rank by this, not by how
  wrong the sentence is.
- **Fix:** the change made.
- **Propagation:** body ☐ · facts block ☐ · Common Mistakes ☐ · Key Takeaways ☐ ·
  other documents repeating it (list them) ☐ · style guide, if it records the
  claim ☐
- **Re-verified:** by whom, when.

### Major

### Minor

### Deferred

> Anything found and deliberately not fixed, with the reason and where it is
> tracked. A finding that is neither fixed nor recorded here has been lost.

---

## Disclosures re-verified and upheld

> The corpus's "I could not verify this" labels are its integrity story — an
> audit of ~40 found 30-plus entirely sound. A disclosure you attacked and could
> not break is a **result**, not a non-result. List them, so the next round does
> not spend itself re-attacking the same ones.

---

## What this method could not have found

> **The most valuable section in this document, and the reason it is written.**
>
> Be specific and be honest. Not "some things may have been missed" — name the
> classes. Which dimensions went unchecked, which documents went unread, which
> defect shapes this method is *structurally* incapable of catching.
>
> Round 20's reviewers modelled this well:
>
> > My method is good at catching a fact that says too much and structurally
> > weak at catching one that says too little. I caught these because the
> > section headings advertised the missing content. A block whose section has a
> > safety point its heading does not advertise would have passed me.
>
> **A declining defect count across rounds measures accumulated method coverage,
> not corpus health.** Do not read a clean round as convergence.

---

## Proposed scope for the next round

> Follows directly from the section above. One paragraph.

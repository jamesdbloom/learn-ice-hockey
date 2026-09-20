# The fourth backlog wave

An 8-document Common-Mistakes/Key-Takeaways asymmetry sweep — the full remaining list an earlier
sweep record had explicitly named as unchecked, plus the corpus's two most rule-dense documents —
found one Critical defect (recurring in a sibling document once traced) and sixteen Major findings.
This wave fixes the Critical and logs the sixteen Majors for a future wave. Three of the eight sweep
agents hit a session rate limit mid-run and were retried once the limit reset; all eight ultimately
produced full reports.

## Scope

```
content/foundation/uk_rules.md
content/off-the-ice/equipment.md
project/plans/OPEN_ITEMS.md
```

## 1. The Critical: a genuinely unsettled equipment-legality question stated as settled fact

`content/foundation/uk_rules.md`'s Key Takeaways item 4 stated flatly: "Women may drop to a half
visor only from the season after their 18th birthday; below that, full face." The document's own body
explicitly hedges this exact claim as an inference nothing published confirms: the EIHA/IHUK In-House
Rules' Rule 102 is a single bare sentence — "Players may wear a half visor only from the start of the
season following their 18th birthday" — that never says it displaces IIHF Rule 102.1, which closes
with "Players without the mentioned protection are not allowed to participate in a game." The body
concludes "A full face satisfies both readings, so wear one if you want certainty. Nothing here
advises dropping to a half visor." Key Takeaways dropped every part of that hedge, presenting a
genuinely unsettled legality question as flat fact in the layer most likely to be heard standalone —
the exact failure this project's non-negotiables exist to prevent.

**Fixed** by carrying the body's hedge into Key Takeaways item 4: "Women may plausibly drop to a half
visor from the season after their 18th birthday — but that reading is this document's own inference
from a rule that never says so, and IIHF Rule 102.1 closes with *"[p]layers without the mentioned
protection are not allowed to participate in a game."* Wear full face if you want certainty."

A follow-up safety-reviewer pass, dispatched to check this fix, confirmed it CONFIRMED-SAFE — but also
ran the sibling-document check this role exists to perform and found the identical unhedged claim,
unpropagated, in `content/off-the-ice/equipment.md` at two sites: a prominent Britain-specific callout
box addressed directly to British readers ("read this before you read anything else in this section"),
and the Common Mistakes bullet on the same topic. Both stated the half-visor drop as settled where the
same document's own body (line 111) already carries the correct hedge. This is precisely the "a fix
pattern applied to one site must be swept for every other site carrying the same claim" method note
this project's own history keeps re-learning.

**Fixed** the same way in both `equipment.md` sites, reusing the document's own already-reviewed hedge
language from line 111 rather than composing new wording.

## 2. Two self-introduced defects caught and corrected before either fix left the working tree

While formatting the new `uk_rules.md` quotation, `check_quote_drift.py` flagged an added comma inside
quote marks where the IIHF source sentence continues ("...a game. For violation of this rule, after
warning by the Referee...") — the exact "dangerous" drift shape this project's tooling exists to catch,
since it presents a continuing sentence as complete. Fixed by restructuring the sentence so the quote
ends where the source genuinely allows a full stop, with the continuation as a separate sentence
entirely outside the quote marks.

Separately, both new quotations were originally written in plain straight quotes rather than this
corpus's italic `*"..."*` convention — which made them invisible to `check_quote_drift.py` entirely
(the tool only extracts the italic pattern). This was flagged by the same safety-reviewer pass as a
Minor finding specific to the `uk_rules.md` instance, but it was equally true of the new `equipment.md`
quotation and would have left both permanently unchecked for future drift. Fixed in both files by
switching to the italic convention (matching each document's own already-reviewed line 111/174
instances), which immediately surfaced the comma defect above for the `uk_rules.md` instance — a fix
that made the checker's job possible is what let the checker do its job.

## 3. Verification

An independent `rules-verifier` pass re-derived every claim in this wave directly from primary source,
not from the narrative above:
- Confirmed EIHA/IHUK Rule 102 is genuinely one bare sentence with no cross-reference to IIHF 102.1
  anywhere in the document (`sources/eiha_inhouse_2026-27.txt:454-455`, plus a corpus-wide grep for
  "102.1" and "IIHF" near it).
- Confirmed IIHF Rule 102.1 genuinely closes with the participation-bar sentence
  (`sources/iihf_rules.txt:7545-7551`), and additionally checked the IIHF rulebook's front matter for
  any domestic-variance carve-out that might settle the displacement question — found none, confirming
  "nothing published settles it" independently rather than accepting it as given.
- Found and disclosed one piece of context neither document cites: the In-House Rules' general
  precedence clause ("these in-house rules as the overriding interpretation of how the IIHF Rule Book
  is to be applied domestically") — judged not to settle the specific equipment question either way,
  and consistent with, not contradictory to, the existing hedge.
- Confirmed all four instances of the two quotations across both documents (the two pre-existing,
  already-reviewed instances and the two new ones) are wordfor-word consistent with each other and with
  primary source, with no attribution or wording drift.
- Re-ran `check_quote_drift.py` on both files and confirmed neither the new nor the edited quotations
  appear in either file's flagged list.

## Dimension coverage (C3)

**D1-D3** — CHECKED via the rules-verifier pass above; two negative-existence sub-claims specifically
attacked (no IHUK cross-reference to 102.1; no IIHF domestic-variance carve-out) rather than assumed.
**D4** — OUT OF SCOPE, no new external citation. **D5** — CHECKED, no misattribution. **D6** — OUT OF
SCOPE. **D7** — CHECKED, no cardinal-rule violation — the fix if anything strengthens the document's
existing refusal to present a coaching/legal judgment call as settled law. **D8** — OUT OF SCOPE, no
new bare statistic. **D9** — CHECKED: the same claim now reads consistently across both documents,
all four sites. **D10** — OUT OF SCOPE, no `​```facts​``` ` block touched. **D11** — CHECKED via a
dedicated safety-reviewer pass (CONFIRMED-SAFE on the fix itself, one Critical and two Minor findings
surfaced and fixed). **D12** — OUT OF SCOPE. **D13** — OUT OF SCOPE. **D14** — CHECKED via
`check_links.py` (clean). **D15** — OUT OF SCOPE, no `site/` file touched.

## 4. First commit-gate BLOCK: the plan and this record disagreed about whether review had happened

A first commit-gate dispatch correctly BLOCKed the initial staging of this wave — not on any defect in
the content, but because `project/plans/OPEN_ITEMS.md`'s own row for this fix still read "awaiting a
rules-verifier pass," staged in the same commit as this review record's claim that the pass had already
run and found CONFIRMED-ACCURATE. The gate could not tell which of the two was stale, and correctly
refused to trust an assertion of review contradicted by the diff's own other file — exactly its stated
job. The rules-verifier pass genuinely had run (§3 above is its actual output, not aspirational); the
defect was that `OPEN_ITEMS.md` was never updated afterward to reflect the closure, a pure bookkeeping
lapse rather than a missed review step.

**Fixed** by retracting the row entirely from `OPEN_ITEMS.md`'s "Genuinely open" section — per this
project's own standing rule that closed work moves out to a review record rather than lingering in the
open-items file describing itself as unfinished — and updating the one remaining cross-reference (in
the coverage census) to point at this review record instead of asserting an in-progress state.

## What this record could not have found

The safety-reviewer's own report flags: no TTS render was performed on either fixed passage; no check
of whether the half-visor claim recurs in a third document beyond the two found (`body_contact_and_
battles.md` was grepped for a passing mention only, not read in full); and the IHUK age-category table
(only "Adult" 14+ and "Under 16" 10-16 defined, no explicit "Under 18" band) may create a further,
unflagged inconsistency with the IIHF's Senior/U18 split this passage assumes maps cleanly — noted by
the rules-verifier as a candidate for a future read, not confirmed as a defect. The eight-document
sweep that surfaced this Critical also produced sixteen Major findings across seven other documents,
none fixed in this wave — logged in `project/plans/OPEN_ITEMS.md` for a future wave.

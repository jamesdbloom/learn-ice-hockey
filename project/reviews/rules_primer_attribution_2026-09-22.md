# The attribution audit that refuted its own brief — `rules_primer.md`, 22 September 2026

## ⚠️⚠️ THE COORDINATOR'S RISK HYPOTHESIS WAS WRONG, AND THE DOCUMENT SAYS WHY

The brief predicted the danger concentrates **where the document contrasts books in close quarters**.
The agent went there first and hardest: **47 claims verified across eight rulebooks. ZERO
misattributions.**

> *"The multi-book contrast passages are the most carefully sourced prose in the file."*

**The reason is visible at `rules_primer.md:330`**, which scopes the entire icing list before it
begins:

> *"That is not a clause-by-clause reading of all five icing rules against one another, so where an
> item does not mention a book, take it as **not found** rather than as **not there**."*

⚠️ **That sentence pre-empts exactly the failure the brief was hunting.** The agent tried to break
it: it built a candidate finding that the list omits **Hockey Canada 6.7(c)(ii)** — a touch by *any*
player, broader than every "opposing player" limb enumerated — **and then found the document already
handles 6.7(c)(ii) at `:303` and `:917`.** ⚠️ **Its finding was refuted by the document. The sixth
time today the answer was already written down.**

Both candidate findings it raised died the same way — the other, a USA Hockey 640(b) Adult Male
carve-out, was already disclosed at `:447`, `:468` and `:474`.

## 🔴 A DEFECT CLASS NO CHECKER CAN SEE — a word cleanly deleted from inside a quotation

**Found and repaired at `:338`.** The document quoted CARHA's Note 3 to Rule 65(a) as
*"…it shall NOT be considered 'icing'."* The book (`carha.txt:3056-3059`) reads
*"…it shall NOT be considered **as** "icing"."*

⚠️⚠️ **`check_quote_drift.py` cannot catch this by construction: it compares the ORIGINAL CHARACTERS
of the closest match, and a cleanly deleted word leaves every surviving character identical.**

Meaning unchanged, attribution correct, rule number correct — **and invisible to every gate.** `as`
restored; the only edit the agent made.

## ⚠️⚠️ A TRAP IN THE COORDINATOR'S OWN STANDING GUIDANCE — flattening breaks GENUINE hyphens

The brief told the agent to build a de-hyphenated, whitespace-flattened copy. **That guidance, which
has gone into roughly six briefs today, manufactured a false negative.**

USA Hockey Rule 639(a)'s Note contains the genuinely-hyphenated word **`hook-checking`**, line-broken
as `hook-` / `checking`. De-hyphenation joined it to `hookchecking`; the whitespace pass produced
`hook checking`. **The document's CORRECT quotation — *"clearly hook-checking or poke-checking the
puck"* — returned ZERO against the flattened file while being verbatim at `usah.txt:5061-5064`.**

⚠️ **A flattened copy fixes line-break hyphens and BREAKS REAL ONES. Search BOTH the flattened and
the raw file before believing any zero.** This is now in the plan and in every subsequent brief.

## ⚠️ BRIEF ERROR THIRTY-TWO — a stale line number, which is a figure

The brief cited `rules_primer.md:436` as the live demonstration of the tool's attribution blindness.
**Line 436 in the working tree is a body-fouls passage, not the NHL 59.1 citation.** The *mechanism*
was real and the agent used it as its core method; **the locator was wrong.**

⚠️ **CLAUDE.md's standing lesson, hit again: A LINE NUMBER IS A FIGURE, and a figure copied out of
its owner goes stale silently.** The line had moved because of this same session's edits.

## What 47 verified claims actually licenses — and what they do not

**Verified:** ~35 quotation-plus-rule-number pairs, ~8 cross-book agree/differ claims, and **4
negative existence claims** — the NHL's absent no-`"race"` paragraph (attacked: only 3 `race` hits
in the whole book, none this clause), the back-of-net dislodge limb absent from three books read in
full, CARHA's absent goalkeeper-movement limb, and **no stride count attributed to the NHL.**

**The charging-stride row is the sharpest single result**, because it is a four-way trap and the
document gets all four right:
`"two or more strides immediately prior to making contact"` → **Hockey Canada only** ·
`"more than two strides"` → **USA Hockey only** · `"multiple strides"` → **IIHF only** ·
`"as a result of distance traveled"` → **NHL only.**

**And the document navigates the wrong-sentence-in-the-right-book trap correctly**: it cites USA
Hockey **640(b)** for *"vulnerable or defenseless and are not eligible to be body checked"*,
**not** the near-identical twin in the 640(e) Note.

**Edition and renumbering claims — the highest-risk class — all correct**, including the **IIHF Rule
46 renumbering** (46.12 in 2025/26 v1.1, **46.6 in 2026/27**), which the agent's own instructions
flag as a trap, and the NHL 56.2 `shall`→`can` softening dated against the superseded edition
**used correctly as dating evidence only.**

### ✅ A safety question closed rather than left to be re-opened

`:459`'s *"The NHL is the outlier: in the other three books a hit to the head can end your game"* is
**true as written and correctly qualified** — NHL 48.5's match penalty is disclosed at `:36` and
again at `:995`. The agent checked specifically for an unqualified voicing and **did not find one.**
**No hand-off needed; recorded so nobody re-files it.**

## An unreviewed hunk from another agent, verified rather than left

`rules_primer.md` carried a **pre-existing uncommitted rewrite of the too-many-men passage** that had
not been rules-verified. The agent verified it instead of stepping around it: the Casebook ruling is
confirmed at `usah_casebook.txt:2522-2528` under *Rule Reference 204(b)*, and 204(b)'s *"while the
retiring player is actually on the ice"* is verbatim.

⚠️ **Its honest caveat:** the printed sentence **is genuinely ambiguous** — *"or causes their team to
gain a competitive advantage"* is arguably a third limb **outside** the on-the-ice qualifier. **The
edit claims the attachment only for the puck-play and contact triggers, which is the defensible
half, and grounds the rest in the Casebook. Sound as written.**

## ⚠️ AN ARTEFACT THAT MUST NOT BECOME A FINDING

The agent's quote-extraction regex **mis-parses the `*"…"*` emphasis markup** and captures prose
*between* quoted spans, producing **690 "found in no source"** results.

⚠️⚠️ **THAT 690 IS A TOOLING ARTEFACT, NOT 690 UNSOURCED QUOTATIONS.** Recorded here because the
agent predicted a later reader would quote it as a finding — which is this repository's most
frequently repeated failure.

## What this method could not have found

1. ⚠️ **Attribution drift where TWO BOOKS SHARE WORDING.** The by-book exclusivity test asks whether
   a phrase is exclusive to the named book. **A clause the NHL and IIHF print identically — and
   there are many — passes for either label.** It was caught only where **the document itself**
   distinguished them (48.1 singular/plural, 22.3 match-vs-no-match) — **i.e. where the document was
   already being more careful than the tool.**
2. **A correct quotation supporting a wrong proposition.** The words were verified to be in the book
   at that number; **the document's GLOSS on each was not re-derived.**
3. **Whether the quoted rule is the GOVERNING rule.** A correct quotation of a rule another rule
   overrides reads clean. **The IIHF Appendix VII pilot-rule trap is the known shape of this.**
4. ⚠️ **THE TABLES — ~1,167 of ~1,214 fragments were not reached.** Untouched: the whole
   goaltender-interference treatment (69.x), offside, faceoffs, equipment, officials' signals, all
   of §4 (match penalties), the British/IHUK layer, and **the comparison tables at `:1140-1180`.**
   **`:1152` alone holds 129 quoted fragments, none verified** — *"the single biggest unexamined
   concentration in the document, and it is a table, which is where a label is easiest to slide."*
   **→ Dispatched.**
5. **Whether an omitted book differs.** `:330`'s *"not found, not not-there"* disclosure is honest
   and was verified to be honest — ⚠️ **but honest scoping is not coverage.** A reader in a CARHA or
   IHUK competition still has questions the document openly declines to answer.

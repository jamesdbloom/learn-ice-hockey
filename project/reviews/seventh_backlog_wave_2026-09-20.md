# The seventh backlog wave

`content/systems/defensive_zone_coverage.md` was the last of the corpus's 39 documents with genuinely
unknown Common-Mistakes/Key-Takeaways asymmetry status. Checking it completes the full corpus-wide
sweep for the first time this session. This wave fixed its four findings.

## Scope

```
content/systems/defensive_zone_coverage.md
```

## 1. Four findings, all confirmed and fixed

- **Major** — NHL Rule 59.3/59.5 (cross-checking the net-front player has no two-minute ceiling; a
  major at the referee's discretion on severity alone, with an automatic game misconduct) was stated in
  Common Mistakes and absent from Key Takeaways and every facts block. Added to Key Takeaways item 4.
- **Major** — NHL Rule 60.1/60.3 (a wild stick swing at a loose puck near the net strips the
  accidental-contact defence, and can be a double minor if it injures) was stated in a facts block and
  Common Mistakes but absent from Key Takeaways. Added, along with the rest of the "net-front scramble"
  section's uncovered content, as a new Key Takeaways item 12.
- **Minor** — a Common Mistakes bullet ("Watching the puck at the net front") read as self-contradictory
  when heard alone: its heading named watching-the-puck as the mistake, then its own next sentence said
  "eyes on the puck" was correct. Reworded to name the actual mistake (losing the man while watching the
  puck) and keep the real distinction (eyes track the puck; body stays on the man) intact, with a
  cross-reference to the section that establishes it.
- **Minor** — the entire "net-front scramble" section (body-first-puck-second priority, not lunging
  through your own goalie, hand-pass legality, a four-book stick-near-hands divergence, and a
  rebound-goal statistic) had no representation anywhere in Key Takeaways. Closed by the same new item
  12 that carries the 60.1/60.3 rule.

## 2. Independent review found one Critical and confirmed a second error the same pass surfaced

A `safety-reviewer` and a `rules-verifier`, dispatched in parallel, both independently found the same
Critical: new Key Takeaways item 12 stated NHL/IIHF Rule 61.1 backwards. It read that hand-area stick
contact is legal "whenever they are not an attempt to play the puck" — the actual rule (verified
directly against `sources/nhl_rules.txt` and `sources/iihf_rules_v1.1.txt`) makes such contact slashing
precisely when it is *not* an attempt to play the puck, and legal only when it *is*. As written, a
reader could believe an unprovoked chop at an opponent's glove was the exempt case — exactly backwards,
and directly contradicting item 4 of the same Key Takeaways list, which states the same rule correctly
a few items earlier in the same document.

The `rules-verifier` additionally found a second real error the safety-reviewer's read had accepted at
face value: the same sentence claimed Hockey Canada Rule 9.3 "prints no such let-out" and applies
"regardless of intent." Verified against `sources/hc.txt`: Hockey Canada does publish an exemption —
"Tapping the stick of the puck-carrier is not considered slashing if it is for the sole purpose of
gaining possession of the puck" — narrower in scope than NHL/IIHF's (a stick-tap on the puck-carrier's
own stick, not contact on or near a hand generally), but a real, intent-based exemption, not an absence
of one.

**Fixed** by restating the sentence with the correct direction for NHL/IIHF's rule and the correct,
scoped characterization of Hockey Canada's narrower exemption, confirming USA Hockey's negative claim
(genuinely no puck-play let-out at all, checked against both the rule text and its Casebook) was
already accurate and needed no change.

A final, narrowly-scoped `rules-verifier` re-check of just the corrected sentence confirmed both fixes
accurate, confirmed the sentence no longer contradicts item 4, and additionally checked Hockey Canada's
Interpretations volume for any entry attached to Rule 9.3 that might further qualify the exemption
(none exists) and USA Hockey's Casebook for a puck-play carve-out this corpus's own non-negotiables
require attacking rather than assuming (none found — the one nearby Casebook situation discusses intent
only as a severity factor between minor and major/match, not as a threshold for whether contact counts
as slashing at all).

Mechanical checks (`check_links.py`, `check_facts.py`, `check_absolutes.py`) re-run clean after every
edit in this wave.

## Dimension coverage (C3)

**D1-D3** — CHECKED via two independent rules-verifier passes (the second narrowly re-checking the
correction), including one negative-existence claim attacked against both a rule's text and its
Casebook rather than assumed (USA Hockey's absence of a puck-play exemption). **D4** — OUT OF SCOPE, no
new external citation beyond primary rulebooks. **D5** — CHECKED, no misattribution in the final
content. **D6** — OUT OF SCOPE. **D7** — CHECKED, no cardinal-rule violation. **D8** — OUT OF SCOPE, no
new bare statistic (the rebound-goal figure is propagated from its already-verified owner document,
confirmed word-for-word consistent). **D9** — CHECKED; this file's Key Takeaways now carries every
citation and instruction its own body/Common-Mistakes layers already state for the net-front-scramble
and cross-checking material. **D10** — OUT OF SCOPE, no `​```facts​``` ` block touched. **D11** —
CHECKED via a dedicated safety-reviewer pass; one Critical found and fixed. **D12** — CHECKED; the
reworded Common Mistakes bullet was specifically verified to read unambiguously in isolation. **D13** —
OUT OF SCOPE, no folklore claim added. **D14** — CHECKED via `check_links.py` (clean, including the new
internal cross-reference anchor). **D15** — OUT OF SCOPE, no `site/` or diagram file touched.

## What this record could not have found

Neither reviewer rendered this document through the actual TTS pipeline; the "reads correctly aloud"
judgments, including the one that caught the Critical, are manual reads against the corpus's stated
rendering conventions. The safety-reviewer's own method note flags that it checked only a single grep
for Rule 61.1's propagation elsewhere in the corpus, not the surrounding claims (60.1/60.3/79.2/634/9.3)
individually — a subtler variant of the same inversion, phrased without the literal rule number, could
exist unfound in another document. Neither pass checked whether this item's wording is echoed into a
diagram caption or podcast script. This completes CM/KT asymmetry checking across all 39 documents in
the corpus for the first time this session — the sweep itself is now finished, though the findings it
surfaced across many earlier waves remain queued or fixed at varying stages, tracked in
`project/plans/OPEN_ITEMS.md`.

# The fifth backlog wave

The eight-document CM/KT asymmetry sweep recorded in `fourth_backlog_wave_2026-09-20.md` produced
sixteen Major findings across the seven documents besides `uk_rules.md`/`equipment.md` (whose own
Critical was closed in that wave). This wave dispatched one agent per document — eight agents, eight
disjoint files — to fix them.

## Scope

```
content/foundation/uk_rules.md
content/foundation/rules_primer.md
content/foundation/language_and_glossary.md
content/foundation/core_principles.md
content/getting-started/getting_started.md
content/hockey-iq/puck_support_and_spacing.md
content/off-the-ice/how_to_watch_hockey.md
content/off-the-ice/practice_and_development.md
project/plans/OPEN_ITEMS.md
```

## 1. One claimed finding was a genuine non-issue; two others were wrongly marked refuted by a
   coordinator transcription error, caught by the commit gate, and fixed properly in §4

The dispatch briefs for this wave described each `uk_rules.md`/`rules_primer.md` finding by
summarizing the original sweep record rather than quoting it. Two of those summaries inverted the
actual direction of the asymmetry, which caused the fix-agents to correctly answer a question that was
never the real finding and report "refuted" — a false negative the commit gate caught on its first
pass (§4).

- **`uk_rules.md`, two of three, initially misreported as refuted, actually real and now fixed (§4).**
  The dispatch brief asked the agent to confirm "Key Takeaways omits" the two-majors/two-misconducts
  ejection rule and the CRT6 helmet instruction. Both are genuinely present in Key Takeaways (items 7
  and 10) — but the *original* sweep finding, transcribed backwards in the brief, was that both are
  present in the body and Key Takeaways and **absent from Common Mistakes**. That absence is real: the
  Common Mistakes section has no bullet on either fact, confirmed by reading all of it. Both are now
  fixed — see §4.
- **`rules_primer.md`, one of three, genuinely refuted — not a real gap.** The alleged dead
  cross-reference ("see the high-sticking bullet in section 4") is not dead: section 4's actual
  high-sticking bullet (line 433) contains the faceoff-dot exception verbatim-consistent with the
  pointer, and the comparison table (line 925) states it a second time. A *different*, differently-
  themed Common Mistakes bullet (line 971, about penalty-tier severity across books, not about
  exemptions) doesn't also carry it — but nothing promises that it should; a single-mistake Common
  Mistakes bullet is not obliged to restate every nuance of a rule it isn't about. This is a genuine
  non-issue, not a silently-dropped judgment call — recorded here explicitly rather than left as an
  untracked question, per the commit gate's second (non-blocking) finding on this wave.

## 2. Thirteen real fixes landed across eight files

- **`uk_rules.md`** — the one real finding (neck-guard mandate extends to practices under England Ice
  Hockey Rules & Regulations 24.3) added to Key Takeaways item 2.
- **`how_to_watch_hockey.md`** — new Key Takeaways item answering the document's own "Check yourself"
  self-test's unanswered Question 4 (why plus/minus doesn't measure defensive ability), carrying two of
  the body's five listed reasons plus the power-play/shorthanded asymmetry.
- **`getting_started.md`** — new Common Mistakes bullet on the insurance/sanctioning risk (later
  corrected for scope precision, see §3).
- **`puck_support_and_spacing.md`** — Key Takeaways restructured to separate the "ahead of the puck"
  (attacking) concept from the "above the puck" (goal-side safety-valve) concept the earlier fix had
  conflated, plus a new item restating the document's own stated flagship mistake (skate to space, not
  the puck).
- **`core_principles.md`** — Common Mistakes item 3 corrected to stop misattributing a Swedish-league
  scanning study as NHL data; new Common Mistakes bullet on the CARHA "stand your ground" divergence,
  carrying both of Key Takeaways' existing carve-outs intact.
- **`language_and_glossary.md`** — Common Mistakes item 17 extended with USA Hockey Rule 625(b)'s two
  crease-carve-outs; two new Common Mistakes bullets plus a new Key Takeaways item on icing-type and
  shorthanded-exemption book-dependence.
- **`rules_primer.md`** — Key Takeaways item 5 extended with the corpus's concussion instruction
  (verified word-for-word consistent with three existing instances in this same document and with
  `conditioning_and_recovery.md`'s phrasing); Key Takeaways item 10 extended with the new-this-season
  IHUK broken-stick rule (later corrected for an undercount, see §3).
- **`practice_and_development.md`** — two new Key Takeaways items: the training-load/layoff injury
  caution (verified absent from the sibling document it cross-links to as well, so no summary layer in
  the corpus carried it for either document's listener), and the fall-technique chin-direction rule
  (verified word-for-word consistent with `technique/skating.md`'s own Key Takeaways). One agent caught
  and corrected its own edit artifact (a duplicated text fragment from a substring-match mistake)
  before reporting, by re-reading its own diff.

## 3. Independent review found one Major and one Minor, both fixed

A `safety-reviewer` pass and a `rules-verifier` pass ran in parallel across all eight files.

The `rules-verifier` independently re-derived every rule citation in the batch — including the trickier
cross-book comparisons (the IIHF's icing no-race fallback to the defending blue line, which the NHL
text doesn't carry at all; Hockey Canada's hybrid icing being scoped to a handful of categories rather
than being the default; the broken-stick rule across all four books plus the new IHUK provision) — and
found every citation CONFIRMED-ACCURATE.

The `safety-reviewer` found:

- **Major** — `rules_primer.md`'s new broken-stick sentence claimed the drop-it-or-take-a-minor rule
  exists in only "three of the four books," framing USA Hockey as the exception. This undercounts: all
  four books (NHL 10.3, IIHF 10.3, Hockey Canada 3.2(a)/10.6(a), USA Hockey 605(a)) carry the identical
  baseline minor. USA Hockey isn't missing the baseline rule — its Casebook adds a narrow *additional*
  carve-out (carry to the bench if immediately out of play). The actionable guidance given to a reader
  was correct under any book; the defect was the meta-claim about how many books share the baseline
  rule — exactly the "three of four vs. four of four" slippage this corpus's own history has flagged
  before. **Fixed**: corrected to "all four books," with USA Hockey's bench allowance reframed as an
  addition to its own minor rather than a missing baseline.
- **Minor** — `getting_started.md`'s new Common Mistakes bullet stated the insurance/suspension
  consequence as binding "the player" without EIH Rule 14.5's actual scope, which is specifically
  "any EIH-registered player or official." For this document's actual audience (someone new to the
  sport, plausibly not yet registered), the omission is conservative rather than dangerous — it still
  correctly tells the reader to ask before joining — so this was rated Minor rather than Major, but
  fixed anyway for precision: the bullet now names the EIH-registration condition.

Everything else in the batch — the concussion instruction, the CARHA addition, the crease carve-outs,
the icing/shorthanded material, the neck-guard extension, the fall-technique rule, the training-load
caution, the plus/minus addition, and the Key Takeaways restructuring — was independently confirmed
consistent with each document's own existing, already-reviewed body/Common-Mistakes text and, where
applicable, with the sibling documents it cross-references (`technique/skating.md`,
`off-the-ice/conditioning_and_recovery.md`).

Mechanical checks (`check_links.py`, `check_facts.py`, `check_absolutes.py`) re-run clean after every
fix in this section.

## 4. First commit-gate BLOCK: two "refuted" findings were the coordinator misreading its own brief

The first commit-gate dispatch on this wave's staged diff BLOCKed, correctly, on exactly the two
findings described in §1. It read `uk_rules.md`'s full Common Mistakes section itself and confirmed
neither the ejection-trap rule nor the CRT6 helmet instruction has a bullet there — the real gap the
original sweep found, which the fix-agent's brief had mis-described as a Key-Takeaways omission and
which the fix-agent, working only from that brief, correctly answered a question that was never the
actual finding. The gate also flagged, as a second, non-blocking finding, that `rules_primer.md`'s
disclosed-but-undecided judgment call (§1) had been dropped between the review record and the plan
with no trace.

**Fixed**: two new Common Mistakes bullets added to `uk_rules.md`, reusing the already-verified wording
from Key Takeaways items 7 and 10 rather than composing new claims — one on the two-majors/two-
misconducts ejection trap (IIHF 20.4/22.1, contrasted with the NHL's third-major trigger), one on not
removing an injured player's helmet (the CRT6 instruction, quoted verbatim). The `rules_primer.md`
question was resolved as a genuine non-issue and recorded as such in §1, closing the disclosure gap the
gate's second finding named.

A dedicated `safety-reviewer` pass on just these two bullets, dispatched rather than letting the repair
self-certify, confirmed both CONFIRMED-SAFE against primary source (re-deriving IIHF 20.4/22.1 directly
rather than trusting the existing Key Takeaways wording, and confirming the CRT6 quote is character-
for-character identical across all three instances now in the document) — with one Minor finding: the
ejection-trap bullet's first draft read as though both Rule 20.4 and Rule 22.1 jointly cover both the
major-count and misconduct-count triggers, when only 20.4 does; 22.1 independently restates only the
misconduct half. **Fixed** by re-attributing each clause to its actual rule, matching the structure
already used in Key Takeaways item 7.

Mechanical checks re-run clean after both new bullets and the follow-up precision fix.

## 5. Second commit-gate BLOCK: the plan's own summary count hadn't caught up either

A second commit-gate dispatch, on the corrected diff, found one more inconsistency: retracting the
eight files' detailed finding descriptions from `OPEN_ITEMS.md`'s "Genuinely open" list (done earlier
in this wave) had not touched a separate, further-down summary bullet — the running census of the
Common-Mistakes/Key-Takeaways sweep — which still listed all eight documents under "Checked with
findings still open... everything below is unfixed," directly contradicting this same commit's own
review record. Two places in the same file disagreeing about the same eight documents, exactly the
class of stale-row hazard this project's standing method notes exist to prevent.

**Fixed** by moving all eight documents from the "still open" line into the "confirmed checked, clean
or with findings fixed and committed" line, bringing the running total to 23 of 39 (the prior 15, plus
these 8), and updating the internal arithmetic so it stays self-consistent (23 checked + 16 unknown =
39).

## Dimension coverage (C3)

**D1-D3** — CHECKED via the rules-verifier pass, including negative-existence sub-checks (no bench
carve-out in Hockey Canada's Interpretations under 3.2/10.6; no broken-stick provision in the IHUK
2025-26 edition, confirming the 2026-27 rule is genuinely new). **D4** — OUT OF SCOPE, no new external
citation. **D5** — CHECKED, no misattribution found (one pre-existing misattribution, the Swedish/NHL
scanning-study conflation, was itself the finding fixed in `core_principles.md`). **D6** — OUT OF
SCOPE. **D7** — CHECKED, no cardinal-rule violation across any of the eight files. **D8** — OUT OF
SCOPE, no new bare statistic. **D9** — CHECKED and CLOSED across all eight files, including
`uk_rules.md` — a first gate pass found this dimension had NOT actually been checked there despite an
initial claim to the contrary (§4); the real gap (Key-Takeaways-to-Common-Mistakes, not the reverse)
is now closed with two new bullets, reusing already-verified wording. Propagation direction elsewhere
in this wave was Common-Mistakes/body → Key Takeaways in most cases, with `core_principles.md` and
`language_and_glossary.md` also gaining new Common Mistakes content. **D10** — OUT OF SCOPE, no
` ```facts``` ` block
touched by any of the eight fixes (confirmed: `core_principles.md` and `uk_rules.md` carry no facts
blocks at all). **D11** — CHECKED via the dedicated safety-reviewer pass; one Major found and fixed
(broken-stick book count), one Minor found and fixed (insurance-registration scope), the two
highest-risk additions (concussion instruction, fall technique) specifically verified against their
owner documents for wording drift and found none. **D12** — OUT OF SCOPE, no antecedent issue found.
**D13** — OUT OF SCOPE, no folklore claim added. **D14** — CHECKED via `check_links.py` (clean
throughout). **D15** — OUT OF SCOPE, no `site/` or diagram file touched.

## What this record could not have found

Neither reviewer opened any of the corpus's other 31 documents, so a contradiction between this wave's
additions and how the same facts are stated elsewhere (the rules-verifier specifically flagged
`body_contact_and_battles.md`, which independently carries the same CARHA material, as unchecked for
consistency with `core_principles.md`'s new wording) remains unconfirmed either way. Neither reviewer
rendered any of the eight documents through the actual TTS pipeline; the "reads aloud correctly"
judgments are manual reads against the corpus's stated rendering conventions, not machine-verified.
`check_quote_drift.py` was not run by either reviewer across all eight files systematically — only spot
verification of specific quoted fragments by eye. The rules-verifier did not perform a systematic
negative-existence sweep of the four IHUK competition-specific rule sets (Junior/NIHL/WNIHL/U10) for
any of the claims in this wave, since none of the eight additions pointed at competition-specific
rather than national/in-house rules — but a claim thought to hold nationally could still diverge at
competition level, unchecked.

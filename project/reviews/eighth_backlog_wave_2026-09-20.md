# The eighth backlog wave

This wave closed out four small, well-defined open items queued from earlier sessions and earlier
waves this session: two low-priority sourcing questions, a bare-bracket renderer case, and a
never-dispatched content-reviewer pass on the `HARD_MAX` style-guide change.

## Scope

```
content/off-the-ice/team_play_and_culture.md
content/systems/offensive_zone_play.md
project/plans/OPEN_ITEMS.md
```

## 1. Two corpus-wide safety checks closed clean (no content change)

Following the previous wave's rule-inversion catch, two dedicated corpus-wide sweeps were run for the
same defect classes:

- A sentence-level sweep of every "match penalty"/"IIHF" co-occurrence in the corpus (~250 sentences)
  for any site wrongly assuming the IIHF has a match-penalty tier it doesn't have. Every instance found
  already correct, independently re-verified against `sources/iihf_rules_v1.1.txt` for the highest-
  load-bearing rule numbers.
- A keyword sweep of every Boarding/Roughing citation in the corpus, checking whether each cited rule's
  real elements actually fit the scenario it's attached to (the pattern that produced an earlier real
  defect in `body_contact_and_battles.md`). The one known site is now correctly scoped; no other
  mismatch found anywhere else.

No content changes resulted from either check — both closed with the corpus already correct.

## 2. Two small content fixes, both confirmed accurate and safe

- **`content/off-the-ice/team_play_and_culture.md`** (two sites: body and Key Takeaways item 11) — an
  unsourced injury-mechanism clause ("it is also how you get a skate blade in someone's face") was
  softened to explicit coaching-caution framing: "coaches also flag it as a way an exposed skate blade
  ends up near someone's face, though no published source measures that mechanism." The underlying rule
  citation (NHL Rule 75.2(iv)) is unchanged and re-confirmed accurate. A third site carrying the same
  rule (Common Mistakes) never had the injury-mechanism clause in the first place, so no propagation gap
  was created by leaving it untouched.
- **`content/systems/offensive_zone_play.md`** (two sites fixed, one already correct) — two bare
  brackets `(b, c, d, e or f)` with no rule number attached (an elliptical back-reference relying on
  "Rule 640" stated earlier in the same sentence) were fixed by restating "640" explicitly, matching
  USA Hockey Rule 640(g)'s own self-referential wording even more closely than the bare version did.
  ⚠️ **The wave's first version of this record overclaimed the TTS verification, and a commit gate
  caught it.** It said "both sites now voice correctly," rendering the actual pipeline and reading only
  a generic grep for the phrase across the output directory — which found a match without confirming
  *both* specific line locations were individually reachable by the renderer. The gate re-derived the
  claim per-site and found line 1069 does voice correctly ("under six hundred and forty, clause b,
  clause c, clause d, clause e or clause f"), but **line 1159 sits inside the document's Sources
  trailer, which `md_to_speech.py`'s `SOURCES_MARKER` logic drops entirely — that site is never voiced
  by the renderer at all**, fixed or not. The fix there is still correct and worth keeping (it matches
  the primary source's own wording for a sighted reader), but it is a written-only correctness
  improvement, not a TTS fix, and the record should never have claimed otherwise.

## 3. equipment.md's SIHA/BUIHA half-visor phrasing verified accurate

A previously-unverified claim ("SIHA Recreational, SIHA University and BUIHA hockey, a half visor is
the minimum, regardless of age") was checked directly against `sources/eiha_inhouse_2026-27.txt:242-243`
(Rule 9.7: "All players competing in SIHA Recreational or SIHA University Ice Hockey must wear, at
minimum, a half visor, regardless of their date of birth") and the separate BUIHA clause (already
verified extensively earlier this session in the `uk_rules.md` half-visor work). Both confirm the claim
exactly. No content change needed.

## 4. The HARD_MAX content-reviewer pass corrected a mischaracterization in its own dispatch brief

The dispatch brief described `HARD_MAX` as "the character cap for `Rule:`/`Convention:` facts-block
lines." The dispatched `content-reviewer` refuted this: `HARD_MAX` is the total-fact-**count** cap per
`​```facts​``` ` block (11→14 facts), a completely different, unrelated constant from the character
caps (`MAX_LEN`/`MAX_LEN_QUALIFIED`, 200/300), which have never changed. Having corrected the premise,
the reviewer assessed the actual change and found it sound: narrowly scoped (made to unblock exactly
two facts blocks that needed one more mandatory `Rule:` citation each), honestly documented (the style
guide explicitly reverses its own prior stronger claim that "the 11-fact cap is not the thing to
relax," rather than silently contradicting it), and not being exploited — a corpus-wide count of all
845 facts blocks found nothing anywhere at 13 or 14; the maximum in the whole corpus is 12, held by
exactly the two blocks the change was made for plus two unrelated ones, each using only one extra slot.
One Minor note, not blocking: the guide doesn't explain why 14 specifically rather than 12 (the minimum
the documented incident needed) — disclosed as a buffer judgment call, not asserted as derived, so not
a fabrication, just thinner justification than the guide's usual rigor.

Mechanical checks (`check_links.py`, `check_facts.py`, `check_absolutes.py`) re-run clean after every
edit in this wave.

## Dimension coverage (C3)

**D1-D3** — CHECKED for the two content edits' unchanged rule citations (NHL 75.2(iv), USA Hockey
640(g)), both re-verified against primary source. **D4** — OUT OF SCOPE, no new external citation.
**D5** — CHECKED, no misattribution. **D6** — CHECKED as part of the HARD_MAX review (a documentation-
soundness check, not a hockey-content claim). **D7** — CHECKED, no cardinal-rule violation. **D8** —
OUT OF SCOPE, no new bare statistic. **D9** — OUT OF SCOPE for both content edits (neither changes a
claim that needs propagating to a new layer). **D10** — OUT OF SCOPE, no `​```facts​``` ` block
touched. **D11** — CHECKED via a dedicated safety-reviewer pass; both edits CONFIRMED-SAFE. **D12** —
CHECKED, per-site, after a commit gate correctly rejected this record's first, generic-grep-based
version of this check: `offensive_zone_play.md:1069` voices correctly through the actual renderer;
`:1159` sits in the unvoiced Sources trailer and was never reachable either before or after the fix,
so the fix there is a written-only correctness improvement, not a read-aloud one. **D13** — OUT OF
SCOPE. **D14** — CHECKED via `check_links.py` (clean). **D15** — OUT OF SCOPE, no `site/` or diagram
file touched.

## What this record could not have found

The safety-reviewer did not run the TTS renderer itself to confirm the offensive_zone_play.md fix
(the coordinator did this independently, outside the reviewer's pass, and confirmed correct rendering
in `.ssml`). Neither the safety-reviewer nor the HARD_MAX content-reviewer opened every sibling document
for a paraphrase of the claims they checked — both relied on corpus-wide grep for exact or near-exact
phrasing, which would miss a genuine paraphrase carrying the same defect elsewhere.

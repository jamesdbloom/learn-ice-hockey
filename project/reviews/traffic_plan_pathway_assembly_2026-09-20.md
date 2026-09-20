# The traffic-plan pathway-assembly wave

This closes out the traffic/content plan's genuinely-actionable items (`OPEN_ITEMS.md`'s "Content/
traffic plan" section, following on from `traffic_plan_adversarial_review_2026-09-20.md`), plus two
small unrelated fixes (`goaltender.md`'s Rule 69.7 counterweight, the facts-layer census) picked up in
the same wave. It also documents a second, unplanned three-round safety fix that this work surfaced.

## Scope

```
content/off-the-ice/practice_and_development.md
content/positions/goaltender.md
site/src/data/pathways.json
project/plans/OPEN_ITEMS.md
```
(`content/getting-started/getting_started.md`'s checking-permission fix is documented separately in
`parent_pathway_checking_gap_closed_2026-09-20.md`, committed alongside this wave.)

## 1. Cross-document facts-layer census — closed clean, converted to standing practice

Sampled ~20 of ~130 rule-number clusters across the 26 facts-bearing documents, prioritizing the
highest-consequence ones (checking eligibility, checking-from-behind, the shorthanded-icing exemption,
delayed offside, high-sticking, shot-blocking, and the exact "forearm and hip" posture limb the open
item originally named). Every sampled cluster, including the named example, was fully and consistently
propagated. No new defect found. Per the census's own recommendation, this closes as a discrete task
rather than staying open indefinitely — `OPEN_ITEMS.md`'s standing method notes now carry an
instruction to run this style of cross-reference whenever a new safety- or penalty-bearing rule limb
is added, rather than treating it as backlog to exhaust.

## 2. `goaltender.md`'s Rule 69.7 rebound-scramble counterweight — fixed and verified

One line added to Key Takeaways item 15, reusing wording already verified in the neighbouring Common
Mistakes bullet. An independent `rules-verifier` pass re-checked NHL 69.7 and IIHF 69.7 directly
against primary source (`sources/nhl_rules.txt:7258-7269`, `sources/iihf_rules_v1.1.txt:5608-5620`)
and confirmed the fix, the listener-facing antecedent ("the same rule"), and the absence of
contradiction with the facts block or body text. One pre-existing (not introduced by this edit) minor
compression noted, not blocking: the summary layers state the discretionary "can be permitted"
exception as if automatic, but the body text already carries the full discretionary wording.

A commit-gate later flagged that this addition — touching a goaltender-net-contact scenario — had no
explicit `safety-reviewer` coverage or out-of-scope declaration. A dedicated `safety-reviewer` pass
confirmed **safe as-is, no additional caveat required**: the addition completes propagation of an
already-reviewed fact (all four layers — facts block, body, Common Mistakes, now Key Takeaways — carry
matching, correctly-hedged text) rather than introducing a new claim, and states a scoring/penalty
outcome rather than a technique instruction. The reviewer separately looked for, and found no citable
source for, a specific collision-injury mechanism for contesting a loose puck in a scramble (unlike the
net-front-walkout hazard elsewhere in the same document, which does cite one) — noted as a documentation
question for a future wide sweep, not a defect in this sentence.

## 3. Four `pathways.json` entries assembled, reviewed, and promoted

None of these required a `content/` edit — in every case the material already existed in depth and
the actual gap was a missing homepage entry point, matching the adversarial review's Major finding 1
exactly (three of the plan's eight claimed content gaps already existed).

- **`cost-and-registration`** → `getting_started.md` §6. Reviewed clean; one optional, non-blocking
  wording note left as-is (the effort field's "dates are set locally" isn't quite accurate for
  England, which EIH sets nationally — the practical advice to ask your club still holds regardless).
- **`equipment-journey`** → `getting_started.md` §8. A real defect was caught and fixed: the original
  blurb used "lend"/"borrow" for three distinct gear sources, when the destination document explicitly
  says programme-issued kit (Learn to Play) is *kept*, not lent — relevant because it sits beside the
  corpus's safety-critical, no-exceptions used-helmet rule. Reworded, re-reviewed, confirmed accurate.
  Title also shortened per a non-blocking house-style note (it was a length outlier against sibling
  cards).
- **`rulebook-differences`** → `rules_primer.md` §10. A scoping pass found the plan's proposed
  "NHL/IIHF/USA Hockey comparison page" already exists as a full comparison table (trapezoid, icing,
  checking, majors, faceoffs, overtime and more, thirteen rule areas across NHL/IIHF/Home Countries/
  USA Hockey/rec, with Hockey Canada and CARHA woven through). Reviewed clean; one Minor found and
  fixed (a wrong row-count, "nine" instead of twelve, in a sibling entry's evidence field).
- **`checking-formats`** → `body_contact_and_battles.md` §1. The same scoping pass found "beginner
  versus checking formats" also already exists in depth (a two-category framework, a twelve-row
  per-league table, six named gotchas, gendered and British subsections). Reviewed with two Minor
  findings, both fixed: the row-count error above, and a blurb sentence stating a USA-Hockey-specific
  rule mechanism without naming the book (now names it). `youth-player` added to `readerAudience`,
  since the destination content is substantially about age-based eligibility.

A corpus-wide gap surfaced during this work, not caused by it: `pathways.json`'s own `$comment` claims
anchors are mechanically verified by `check_links.py` — false today, since that checker only scans
`content/**/*.md`. Every anchor added this session was manually verified against current heading text,
but nothing would catch a future reworded heading breaking any pathway entry, old or new. Logged in
`OPEN_ITEMS.md`, not fixed here — it's a `scripts/` change, coordinator/shared-tool territory.

A second, unrelated finding: `equipment.md`'s Key Takeaways has a sentence that reads as missing a
word ("Kit a programme gives a child to keep is new, and is not what this is about"). Logged, not
fixed — out of scope for this wave.

**A commit-gate dispatch later found two real problems with the four entries as first staged, both
fixed**: `checking-formats`'s own evidence field still stated the wrong row-count ("nine" instead of
twelve) even after the sibling `rulebook-differences` entry's mention of the same table was corrected,
and the entry had been promoted to `status: "reviewed"` while its own evidence field still ended with
the stale sentence "DRAFT pending a content-reviewer pass... not reviewed by any agent yet" —
self-contradictory, and unsupported by its own text. Both corrected: the row-count fixed, the stale
sentence replaced with an accurate REVIEWED note matching the sibling entry's pattern. A similar stale
leftover sentence in `equipment-journey`'s evidence field (superseded but not deleted) was also
cleaned up.

**A `site-reviewer` pass then confirmed the four cards render correctly** — title, blurb, and effort
line visible with no overflow or truncation at desktop and mobile widths, both themes;
`equipment-journey`'s previously-flagged long title wraps cleanly; `core-principles` and
`parent-of-a-new-player` (both still `draft`) correctly do not render; no console errors. It also
found a **significant, pre-existing, site-wide bug, unrelated to this session's work**: deep-link
anchors don't scroll to their target on cross-page navigation anywhere on the site (reproduces on
already-shipped anchors too, not just this session's new cards) — logged as its own prominent item in
`OPEN_ITEMS.md`, not blocking this wave's commit since the underlying `href` data is correct and the
defect is in `site/src/styles/`, not in anything this wave touched.

## 4. `practice_and_development.md`'s home-practice safety note — three rounds to close

This was not part of the original plan scope but was required before Phase 1 item 5 (the home-practice
route) could get a `pathways.json` entry. It turned into the wave's most instructive finding: the same
"caveat present somewhere, missing where it matters" pattern this corpus's own history repeatedly
names recurred three times in one document before an independent reviewer confirmed it closed.

- **Round 1**: added a scope note (space/people/glass/supervision not assessed) to
  `## Off-Ice Practice That Genuinely Transfers`. Honest, well-written, and — per an independent
  `safety-reviewer` — insufficient: the document's own heading/`---` convention stopped the note's
  reach at its own section boundary, leaving the sibling section
  `## Off-Ice Practice That Transfers Less Than People Think` (containing the same hazard class:
  a net-and-shot-at-home scenario, cone weaves) with no caveat at all.
- **Round 2**: extended the note's reach via a cross-reference into the sibling section, plus a new
  Common Mistakes bullet. Deliberately skipped Key Takeaways (reasoning: a scope disclosure, not a
  taught finding). A second independent `safety-reviewer` — auditing the *whole* document, not just
  the two sections already touched — found this reasoning didn't hold (this same document's own Key
  Takeaways already mix findings with prescriptive safety content: a goaltender-mask warning, a
  fall-technique instruction) and found a second location entirely unaddressed: the "Building a
  Realistic Weekly Plan" table, the single most directive "do this at home" instruction in the
  document, with no caveat anywhere near it.
- **Round 3**: added a footnote under the Weekly Plan table and a sentence to Key Takeaways item 6,
  after independently confirming both gaps and running a full-document grep sweep for a fourth
  instance. A third independent `safety-reviewer` pass — reading the entire 692-line document, not
  sampling, and deliberately re-hunting the whole document rather than trusting the round-3 sweep —
  found no further instance, confirmed all five caveat instances (two body, one Common Mistakes, one
  Key Takeaway, one table footnote) are substantively consistent and none reads as false reassurance,
  and confirmed Key Takeaways as a whole (all 15 items, not just the two touched) now has adequate
  coverage. **Verdict: genuinely complete.**

**The lesson, stated plainly for whoever next writes a document-wide disclosure**: a scope note added
at one heading does not travel past that heading's own `---` boundary in this corpus's convention, and
a document's Key Takeaways is not exempt from a safety disclosure merely because the disclosure isn't
phrased as a "finding" — this document's own pre-existing Key Takeaways already carried prescriptive
safety content, which should have settled the question the first time it was asked.

## Dimension coverage (C3)

**D1-D3** — CHECKED for the goaltender.md rule citation (rules-verifier, primary source). OUT OF SCOPE
for the four pathway entries (none restates a rules claim of its own; each points to already-verified
content). **D6** — CHECKED: no cardinal-rule violation found in any pathway blurb; `checking-formats`'s
blurb was specifically checked for this and found to correctly withhold the safety-relevant answer,
deferring to the primary document. **D9** — CHECKED for the Rule 69.7 fix (already propagated across
all four layers pre-edit; new sentence completes Key Takeaways). CHECKED, extensively, for the
practice_and_development.md safety note (the whole point of rounds 2-3). **D11** — CHECKED via three
independent `safety-reviewer` passes on the practice_and_development.md work, one on the pathway
checking-formats framing, none needed on cost-and-registration/rulebook-differences (no safety-relevant
claim). **D14** — CHECKED via `check_links.py`, clean throughout; `check_pointers.py` also run,
pre-existing hits unrelated to this wave's files. **D15** (rendered site) — CHECKED via a dedicated
`site-reviewer` pass on the four new pathway cards, after a fresh `npm run build`: all four render
correctly (title/blurb/effort visible, no overflow/truncation at desktop and mobile widths, both
themes; `core-principles`/`parent-of-a-new-player` correctly absent since both remain `draft`; no
console errors). That pass also surfaced a significant pre-existing, site-wide anchor-scroll defect,
confirmed unrelated to this diff and logged separately in `OPEN_ITEMS.md` — see §3 above. Everything
else — OUT OF SCOPE, no facts-block or diagram file touched in this wave beyond what's already covered.

## What this wave's records could not have found

The `equipment-journey` title-length observation was originally flagged as a text-based finding
pending visual confirmation — the subsequent `site-reviewer` pass (D15 above) confirmed it visually:
the title wraps cleanly with no truncation at desktop or mobile width, in either theme. That pass
visited the homepage and the four pathway-destination pages (`getting_started.md`, `rules_primer.md`,
`body_contact_and_battles.md`); it did **not** visit `practice_and_development.md`, so the Weekly Plan
table's actual on-page presentation remains an unconfirmed, text-based finding — no `pathways.json`
entry points at that document yet (correctly — see §4's Critical-until-cleared note), so this wasn't
yet in scope for a site-reviewer pass, but it should be checked before any future pathway entry wires
into that document. No cross-document check was run
for whether `practice_and_development.md`'s home-practice hazard class recurs in sibling documents
(`getting_started.md`, `shooting.md`, `puck_handling.md`) that also describe stickhandling or shooting
drills — this wave's reviews were scoped to the one document. The facts-layer census sampled roughly
20 of ~130 rule clusters; a genuine gap could exist in an unsampled one. No independent check was run
on whether the PWHL rulebook gap (surfaced in the checking-permission fix, tracked separately) affects
any claim in this wave's own files.

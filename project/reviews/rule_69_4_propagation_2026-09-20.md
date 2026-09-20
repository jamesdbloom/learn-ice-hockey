# The Rule 69.4 road-home propagation wave

This record covers the third commit of the day, tracked as Workstreams 132-139 of
`project/plans/OPEN_ITEMS.md`. It began as the safety-review gap a commit-gate found in the second
commit's wave, and grew into a corpus-wide propagation sweep once the pattern was confirmed to recur.

## Scope

```
content/foundation/on_ice_communication.md
content/foundation/rink_map.md
content/foundation/rules_primer.md
content/hockey-iq/time_and_space.md
content/off-the-ice/team_play_and_culture.md
content/positions/center.md
content/positions/winger.md
content/systems/offensive_zone_play.md
content/systems/zone_entries.md
scripts/check_quote_drift.py
```

## 1. Why this wave started: a commit-gate BLOCK on the second commit

The second commit's gate dispatch found every mechanical checker clean and every quote independently
re-verified, but no `safety-reviewer` had been dispatched on any of the four content files in that
wave, and a goaltender-interference penalty claim is squarely inside C6, which carries no exceptions.
Two safety-reviewer agents closed that gap: one confirmed the boards-contact de-counting fix
CONFIRMED-SAFE outright; the other found a genuine CRITICAL — NHL/IIHF Rule 69.4's "road home" clause
(a goaltender who has left the crease to play the puck is protected on the way back; an attacker whose
deliberate actions prevent that return may be penalised for goalkeeper interference, with no contact
required) reached body prose, facts blocks and Key Takeaways in two files, but was absent from Common
Mistakes — the corpus's own penalty-avoidance checklist — in both. That gap was closed (one sentence
per bullet, reusing each file's own already-verified quotation and hedge), independently re-reviewed
CONFIRMED-SAFE, and committed as `835850b`.

## 2. `check_quote_drift.py` had never been able to see the facts layer

While closing the safety-review gap, the coordinator found and fixed a structural blind spot in this
worklist tool: its extraction pattern required every quotation to sit inside `*"..."*` — the
body-prose, italicised convention — while a `Rule:`/`Convention:` line inside a ` ```facts ``` ` fence
is plain text with no asterisks. Every quotation in every facts block had been invisible to this tool
since it was written. A blanket fix (dropping the `*` requirement everywhere) was tried and reverted
the same day, months earlier, for exploding false positives 927→6,076; the targeted version — relaxing
the requirement only inside a `facts` fence — moved the corpus-wide totals a proportional
clean=9,583→10,001, flagged=348→378, notfound=927→1,047, surfacing 150 previously-invisible candidates
in the facts layer for a dedicated future round. Not read or triaged in this wave; per-document totals
saved to session scratchpad for whoever picks it up.

## 3. `offensive_zone_play.md`'s road-home gap, closed and independently confirmed safe

The second commit's own message named this file as the one gap deliberately left open. Verified real
(zero mentions of the road-home clause in either summary layer despite extensive body treatment,
including the document's own blockquote on the point), fixed with the same established pattern, and
independently safety-reviewed CONFIRMED-SAFE — accurate, correctly NHL/IIHF-scoped, no contradiction
with the document's own 69.1-69.3 crease-contact material, no overcorrection risk.

## 4. A corpus-wide sweep found five more genuine gaps

Workstream 9 in the plan (a claimed missing mirror-half of Rule 69.4 in `goaltender.md`) was checked
against the current file before any dispatch and found stale — that document already carries full
four-layer coverage of the goaltender-facing half of the rule, landed by an earlier session's commit.
Closed as refuted rather than actioned.

A `facts-reviewer` sweep of all 39 documents (a layer test per document, not a document-level grep)
found two documents with model coverage (`shooting.md`, `special_teams.md` — both state the clause in
facts block and Common Mistakes already) and five genuine gaps:

- `on_ice_communication.md` — body ⚠️-flags the point explicitly; facts block, Common Mistakes and Key
  Takeaways all missed it.
- `center.md` — facts block and Common Mistakes cited only a USA Hockey Casebook analog, never
  NHL/IIHF 69.4 by number; Key Takeaways stated the substance without the citation.
- `winger.md` — same pattern as `center.md` in the facts block and Common Mistakes; Key Takeaways item
  8 was already a model of correct coverage.
- `team_play_and_culture.md` — the single most thorough five-book treatment of Rule 69.4 found
  anywhere in the corpus, in the body, with total silence in both summary layers.
- `time_and_space.md` (lower priority) — Common Mistakes' nearest existing bullet covers a different
  fact pattern (a defender's foul, not a scrambling goaltender's own return).

One further item, `rink_map.md`, was left as an explicit unresolved judgement call: body carries the
material, summary layers don't restate it, and the sweep could not decide whether this document's
reference-page role makes that acceptable.

Six parallel, file-disjoint agents closed all six items. `scanning_and_anticipation.md` — a seventh,
lower-priority candidate — was correctly declined: its facts block was already at the 11-fact hard
cap with 2 characters of headroom, and the agent judged that forcing a citation in risked trading a
minor, honest omission for a new, worse inaccuracy in the compressed layer (the "may," not "will"
distinction the body paragraph exists to carry). `center.md` and `winger.md`'s own facts-block
citations were attempted and reverted for the identical hard-cap reason — logged as still-open,
mechanically-blocked work, not silently dropped. `rink_map.md`'s judgement call was resolved as a
genuine gap (its own existing Common Mistakes/Key Takeaways already carry comparable rule-level nuance
on adjacent topics, so silence here is inconsistent with its own established practice, not a
deliberate scope boundary) and fixed.

One process note: one of the six agents ran `git stash` mid-task to test against a clean tree, which
touched seven other agents' in-progress files. The pop restored everything intact (verified
independently — `git status`/`git diff --stat` showed only that agent's own file changed), but this
is exactly the kind of action the project's own concurrency rules exist to prevent, and it should have
been caught by the brief rather than by luck. Recorded as a standing caution: forbid `git stash`
explicitly in any brief where other agents may be concurrently live.

## 5. A CRITICAL in the fix itself: Hockey Canada and CARHA do not require contact either

Two parallel safety-reviewer dispatches split the six-file batch. The first three (`on_ice_
communication.md`, `center.md`, `winger.md`) came back CONFIRMED-SAFE, with one Major correctly
downgraded on inspection (all three facts blocks still lack the citation — already a disclosed,
mechanically-blocked open item, not a fresh silent gap) and two non-blocking wording nits.

The second three (`time_and_space.md`, `team_play_and_culture.md`, `rink_map.md`) surfaced a genuine
CRITICAL: all three new additions stated that Hockey Canada's (and, in `team_play_and_culture.md`,
CARHA's) "nearest equivalent" to the no-contact NHL/IIHF clause requires actual physical contact. True
of the goalkeeper-specific statute (Hockey Canada 8.5 / CARHA 66(b)) — false of the whole picture: both
books' ordinary interference rule (Hockey Canada 8.3(i), CARHA 66(a)(1)) reaches the identical act
with no contact required, because both books' own possession definitions exclude a goaltender who
has not controlled the puck. A reader under either book who read only the new bullet would conclude
standing in the lane without touching him is safe — the opposite of true. In two of the three files
this directly contradicted the same document's own pre-existing, correct body prose a few lines above
(`rink_map.md:194`, `team_play_and_culture.md:280`) — the exact "caveat present in body, reversed in
the new summary-layer addition" shape this role exists to catch.

A second, misapplied hedge was also found and removed: `team_play_and_culture.md`'s two new additions
called the NHL/IIHF clause "a reading of the rule's structure rather than either book's own words" —
wrong, since that clause is verbatim quoted rule text, not an inference. The hedge belonged to a
different point earlier in the same document (the screening/69.1-ceiling argument) and had been
carried over in error. All three new additions also flattened USA Hockey's genuinely unsettled
position (already correctly hedged as such in two of the three documents' own bodies) into a flat
"requires contact" claim.

Fixed directly by the coordinator, matching each document's own pre-existing correct account (the
outlier-pattern heuristic held again: two of three files already had the right analysis sitting a few
lines above the defective new text). Verified independently against `sources/hc.txt:6784-6790` (Rule
8.3(i)), `sources/hc.txt:1110-1119` (Glossary POSSESSION), and `sources/carha.txt:3105-3124` (Rule
66(a)(1) and Note 1). A fresh, independent safety-reviewer re-verified the fix from scratch — not
trusting the coordinator's account of what it had done — and confirmed it CONFIRMED-SAFE, correctly
scoped, and consistent with each file's own pre-existing body prose.

That re-verification then found the fix's own cross-references led to two further defects:

- `rules_primer.md`'s "Goaltender interference" section — the exact page `team_play_and_culture.md`
  and `on_ice_communication.md` both explicitly send readers to "for the rest" — still stated only
  Hockey Canada's contact-based paragraph, with no mention of the 8.3(i) route. A reader following
  either pointer would land on a page re-asserting the very belief the fix exists to correct. **Fixed**
  — one clause added, verified against the same primary source. A first-draft bracket-substituted
  quotation ("[interfering]"/"[impeding]") fell outside the tool's single-letter bracket-disclosure
  convention and showed up in `check_quote_drift.py`'s NOT FOUND list; caught immediately and
  refactored to quote only the safely-matchable fragment.
- `time_and_space.md`'s own Key Takeaways item 9 discusses screening at length but never mentions the
  separate returning-goaltender duty at all — an omission, not a contradiction (it states nothing
  false about the point, it simply doesn't reach it). **Logged open, not fixed in this wave** — a
  judgement call to stop the cascade rather than extend a third pass into an already dense,
  heavily-cross-referenced paragraph.

## 6. Fourth commit-gate BLOCK: no `rules-verifier` coverage, and the fix

A third commit-gate dispatch on this staged wave found every mechanical check clean, the tooling
fix's corpus-wide delta independently reproduced exactly, and even independently re-derived the
Hockey Canada/CARHA correction itself as accurate — but BLOCKed on C4/C3: no `rules-verifier` had
checked this wave's own rules claims, which span five rulebooks with cross-book divergence, D1-D3
territory the gate assigns exclusively to that role. Verification so far had been done by the
coordinator, `content-reviewer`, `facts-reviewer` and `safety-reviewer` — none of which substitutes,
and the gate noted the Hockey Canada/CARHA CRITICAL in §5 was caught by a safety-reviewer doing D11
work, not by the control designated for rules accuracy, so a substitute working once wasn't evidence
it was reliable.

A `rules-verifier` dispatch confirmed all nine files' rules claims CONFIRMED-ACCURATE against primary
text (NHL/IIHF 69.4 checked across three IIHF editions, byte-identical; USA Hockey 625(a)(8), its
Casebook Situation 9, and its possession Glossary entry; Hockey Canada 8.3(i)/8.3(a) and 8.5's
Interpretation 3 and Note; CARHA 66(a)(1)/Note 1/66(b)), with an explicit D1/D2/D3 coverage statement,
and surfaced three fidelity nits, all fixed:

- **Quote-casing merge** (`rink_map.md`, `time_and_space.md`'s new bullet): both attributed
  *"may be penalized for goalkeeper interference"* jointly to "NHL and IIHF Rule 69.4" as a single
  quotation, when the IIHF's own sentence capitalises and quote-marks "Goalkeeper interference"
  differently. Not a substantive error (both books reach the same result), but a verbatim-fidelity
  slip other sites in this wave (`winger.md`, `offensive_zone_play.md`, `zone_entries.md`, `center.md`)
  already avoid by quoting only the casing-safe fragment. Fixed by shortening the quote to *"may be
  penalized"* and moving "for goalkeeper interference" outside the quotation marks, matching the
  established pattern.
- **Citation label imprecision** (same two files, previously flagged once already by the third
  commit-gate): "Interpretation 3 to Rule 8.5(a)" attributed the contact-requirement sentence to the
  Interpretation itself, when it is technically the Note appended after it — Interpretation 3's own
  text is about the goal (no-contact standard), the Note is about the penalty (contact-required).
  Fixed to "the Note to Interpretation 3 of Rule 8.5(a)" in both files.
- **Cross-reference inconsistency on USA Hockey's confidence level** (`rules_primer.md`, D3): this
  wave added "USA Hockey's reach here is genuinely unsettled" in four places, all pointing readers to
  `rules_primer.md#goaltender-interference` for more — but that section's own pre-existing paragraph
  described the same USA Hockey provision (Casebook Situation 9) as "mandatory and broad… any
  interference, no goal, penalty assessed," with no hedge, and never mentioned that Situation 9's own
  Rule Reference (`"625(b and a.8)"`) ties it to the contact-based 625(a)(8) — the exact caveat
  `team_play_and_culture.md`'s own pre-existing prose already carried for the identical point. Fixed
  by adding that caveat to `rules_primer.md`, reconciling the cross-reference chain.

No safety-consequence flag was raised — the verifier judged these claims govern when a positional/
no-contact foul applies rather than a dangerous-play penalty, so no further `safety-reviewer` handoff
was needed for these specific fixes.

## 7. The 11-fact hard cap raised to 14, at the user's explicit direction

Separately, the user asked to relax `check_facts.py`'s facts-per-block hard cap, which had forced
`center.md` and `winger.md` to drop their Rule 69.4 facts-block citations in §4 (both blocks were
already at 11, one more made 12). The style guide's own existing text argued against relaxing this
specific cap (*"the 11-fact hard cap is not the thing to relax… every block that reached it was a
section doing two jobs"*), treating the cap as a discipline signal rather than a limit. The user's
stated principle — relevant material only, exact count secondary — was reconciled with that existing
reasoning rather than overriding it wholesale: `MAX_COACHING_FACTS` (8), which caps *discretionary*
coaching content specifically, is unchanged and remains the mechanism that actually enforces "no
low-priority padding"; `HARD_MAX` was raised from 11 to 14, since a block one or two mandatory `Rule:`
citations over the old total was not always "doing two jobs" (neither `center.md` nor `winger.md`
was), and splitting either would have produced two half-jobs rather than relieving a real one. The
style guide's own text was updated in place to record the change and preserve the underlying
guidance: a block still genuinely doing two jobs still gets split at 14, exactly as it would have at
11. Both previously-blocked facts-block citations were then added; all mechanical checks pass.

## 8. Dimension coverage statement (C3)

The review dimensions this wave's own claims touch, addressed explicitly per
[the table](../review_process.md#the-dimensions--a-review-must-cover-all-of-these):

- **D1-D3 (rules accuracy, exceptions, cross-book divergence)** — CHECKED. `rules-verifier` dispatch
  (§6) confirmed every rules claim across all nine files against primary text, across three IIHF
  editions, with an explicit per-dimension statement of its own.
- **D4 (citation integrity)** — OUT OF SCOPE. No new external web citation was added this wave; every
  quotation traces to a file already on disk in `sources/`, verified directly.
- **D5 (provenance)** — CHECKED. The Hockey Canada/CARHA correction in §5 and the `rules-verifier`
  pass in §6 were specifically about crediting the right rule to the right book (8.3(i) vs 8.5's Note;
  66(a)(1) vs 66(b); NHL vs IIHF casing) — no misattribution found, and one was actively fixed.
- **D6 (negative existence claims)** — OUT OF SCOPE. No "no study/count exists" claim was introduced;
  the "genuinely unsettled" USA Hockey framing is a scoped rule-interpretation hedge about a real
  documented ambiguity (its own Casebook Situation 9 cites a contact-based rule reference), not an
  empirical claim that something cannot be found.
- **D7 (the cardinal rule)** — CHECKED, no violation. Every new claim names a specific book and rule
  number, correctly scoped per book; the one inferential reading in this wave (no-contact via the
  possession exclusion) is disclosed as a structural reading, not asserted as settled law across
  books that don't state it.
- **D8 (numeric ownership)** — OUT OF SCOPE. No new bare statistic or percentage was introduced into
  `content/`; rule numbers are citations, not numeric facts requiring an owner document.
- **D9 (the summary layer)** — CHECKED, exhaustively. This is the explicit subject of the entire wave
  (§1, §3, §4).
- **D10 (the key-facts layer)** — CHECKED. `facts-reviewer` dispatches ran the layer test that found
  the original gaps (§4) and re-verified `check_facts.py` clean after every edit.
- **D11 (reader safety)** — CHECKED, repeatedly. Independent `safety-reviewer` dispatches on every
  content file in this wave (§1, §5, §6), including a fresh re-verification of each fix.
- **D12 (read-aloud integrity)** — CHECKED, incidentally but substantively. Every safety-reviewer
  dispatch explicitly read each new sentence as continuous TTS-alone prose and confirmed no
  antecedent-less pronouns or lost closing instructions; not a dedicated `content-reviewer` D12 pass
  on its own, but the same ground was covered per file.
- **D13 (folklore)** — OUT OF SCOPE. No unsourced "obvious" claim was added; everything added is a
  specific rulebook citation.
- **D14 (structure, style, links)** — CHECKED via `check_links.py` (clean on every run this wave) plus
  each authoring agent's own voice-fit check against surrounding prose, documented per file above.
- **D15 (the rendered site)** — OUT OF SCOPE. No `site/` file or diagram module is touched anywhere in
  this diff.

## 9. A systemic recurrence of §5's own named defect, found on a fifth gate dispatch

A fifth commit-gate independently found that the exact "reading of the rule's structure rather than
either book's own words" misapplication §5 named and fixed in `team_play_and_culture.md` had **not**
been fixed everywhere it appeared — it survived, unfixed, in `on_ice_communication.md` and two sites
in `offensive_zone_play.md`, all three added earlier in this same wave (Workstream 135/136) and never
revisited once the correct framing was worked out in §5. This was a direct, avoidable miss: the
correct fix was known and applied in one file without a corpus-wide check for the same phrase
elsewhere.

Fixing those three exposed the true scope: an exhaustive `awk`-based sweep for every co-occurrence of
"deliberate actions" and "rule's structure" corpus-wide found **seven further genuine instances** of
the identical misapplied hedge — `winger.md` (Common Mistakes), `zone_entries.md` (three sites: the
facts-block `Rule:` line, a Common Mistakes bullet, and a Key Takeaways item — the first two shipped
in the *second* commit, `835850b`, already live in production before this fix), `body_contact_and_
battles.md` (Common Mistakes, also already live in production), and `center.md` (Common Mistakes and
Key Takeaways). All ten total sites (three already fixed, seven newly found) now state the claim
flatly — "the clause itself turns on intent, not contact" or equivalent — matching the pattern already
established, safety-reviewed, and standing untouched at `body_contact_and_battles.md:1142`'s original
facts-block line since before this wave began.

The same sweep also distinguished these from a separate, legitimate use of an adjacent hedge phrase:
several files (`rules_primer.md:728`, `body_contact_and_battles.md:1124`, `center.md:406`,
`winger.md:729`, `offensive_zone_play.md:552`) correctly hedge a *different* claim — that Rule 69.1's
"crease-keying" reading (why the rule's disallowing sentence is read as applying only inside the
crease) is inferred from the rule's structure rather than stated outright. That hedge is accurate
where it sits and was not touched.

**Process lesson, recorded for future waves:** when a fix pattern is worked out and applied to one
site, run the exhaustive sweep for every other site carrying the same claim *before* declaring the
wave's rules-accuracy work done — a single-file fix followed by "this pattern is now correct" without
a corpus-wide check is exactly how a known-fixed defect survives in nine more places. The `zone_entries.md`
and `body_contact_and_battles.md` instances being already live in production (`835850b`) rather than
merely staged is the concrete cost of that gap this time.

## What this record could not have found

No corpus-wide search was run for other documents that might share `time_and_space.md`'s specific
omission shape (topic covered in Common Mistakes but not in Key Takeaways, or vice versa) beyond the
Rule 69.4 material itself. The 150 facts-layer quote-drift candidates surfaced by §2's tool fix were
not read or triaged — a dedicated round is needed. No document was rendered end-to-end through the
actual TTS pipeline in this wave; every "read aloud" check was a manual simulation against the
corpus's own stated rendering convention, not an audio run. Two non-blocking style notes remain open:
the new bullets' shared "NHL and IIHF" attribution glosses over a real (non-substantive) casing
difference between the two books' exact wording, and none of the fixed passages give USA Hockey
readers risk-side guidance for its genuinely unsettled position — correctly avoiding fabrication, but
a completeness gap nonetheless. `center.md` and `winger.md`'s facts blocks still lack the citation,
blocked by the 11-fact hard cap in both — resolving that needs either a character-budget rebalancing
pass across each block or a deliberate decision that Common Mistakes/Key Takeaways coverage is
sufficient without it.

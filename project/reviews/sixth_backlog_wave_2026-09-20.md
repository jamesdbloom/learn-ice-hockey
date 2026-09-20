# The sixth backlog wave

An 8-document CM/KT asymmetry sweep continuation checked the next batch of documents whose status was
genuinely unknown. Six of eight had real findings (14 Major total); two (`positions/defender.md`,
`positions/winger.md`) came back clean. This wave dispatched one agent per file to fix the fourteen
findings across the six affected documents.

## Scope

```
content/foundation/on_ice_communication.md
content/hockey-iq/risk_management.md
content/off-the-ice/mental_game.md
content/positions/center.md
content/reading-diagrams/reading_ice_hockey_diagrams.md
content/systems/defending_the_rush.md
project/plans/OPEN_ITEMS.md
```

## 1. All fourteen findings held up, with three brief-attribution errors caught along the way

Every one of the fourteen Major findings was confirmed real by its authoring agent on independent
re-reading (not grep-only) before being fixed. Three agents separately caught and corrected errors in
their own dispatch briefs without those errors affecting the underlying fix:

- **`on_ice_communication.md`** — the brief attributed three of four Common Mistakes bullets to commit
  `8af85e4`; `git log -S` showed only one (the icing-exemption bullet) actually came from that commit —
  the other three came from three separate, unrelated earlier commits. The underlying propagation gap
  (none of the four reached Key Takeaways) was real regardless of the wrong attribution.
- **`defending_the_rush.md`** — the brief claimed NHL and IIHF share a match-penalty ceiling for
  clipping; the agent read the full IIHF Rule 44 text and found the IIHF has no match-penalty tier
  anywhere in its current rulebook, for clipping or otherwise. The fix states the correct, book-specific
  ceilings.

## 2. Fourteen real fixes landed across six files

- **`on_ice_communication.md`** — two new Common Mistakes bullets (kicking-at-the-man, IIHF bench-
  clearance trap) and six new Key Takeaways items: the kicking match-penalty rule (NHL/USA Hockey/
  Hockey Canada match penalty, IIHF discretionary major plus automatic game misconduct), the icing-
  exemption-by-classification rule, the screener-walk-out rule, the goaltender-past-the-red-line rule,
  whose minor a goaltender's penalty is to serve, and the glass-clearing bench trap.
- **`risk_management.md`** — an addition to Key Takeaways item 5 stating USA Hockey's escalation of a
  deliberate after-the-whistle clear to a misconduct or game misconduct; a new Key Takeaways item 11
  stating the "risk level moves with the score and clock" principle, including the shorthanded genuine-
  2-on-1 exception.
- **`mental_game.md`** — three new Key Takeaways items: NHL Rule 39/75 (arguing with officials), the
  acceptance-vs-suppression technique with its evidence grade intact, and the 2024 bias-corrected
  re-analysis that collapsed "external-focus cueing" from settled science to a near-zero effect.
- **`center.md`** — two new Key Takeaways items: the trailing-skate offside divergence (USA Hockey
  630(a), Hockey Canada 6.11 — both require ice contact, unlike NHL/IIHF's geometric-plane test) and a
  generalized "never block the shot on a 2-on-1" rule, confirmed by the safety-reviewer to match
  already-established, non-PK-scoped wording already present in three sibling documents rather than
  overreaching beyond its penalty-kill origin.
- **`reading_ice_hockey_diagrams.md`** — one new Common Mistakes bullet (letters mark roles, not
  positions) and two new Key Takeaways items (the one-bar-glyph triple-meaning trap; the "notation
  unverified against real coach practice" disclosure).
- **`defending_the_rush.md`** — an extension to Key Takeaways item 5 stating the clipping-conversion
  exposure for a low 2-on-1 slide and USA Hockey's "regardless of possession" tripping rule.

## 3. Independent review found one Critical, two Minor — all fixed

A `safety-reviewer` pass and a `rules-verifier` pass ran in parallel across all six files.

The `rules-verifier` independently re-derived every citation, including two negative-existence checks
(confirming the IIHF has no match-penalty concept anywhere in its current rulebook — not just for
clipping or kicking, a fact that may be worth a corpus-wide check in a future wave) and found every
citation CONFIRMED-ACCURATE, with one Minor wording note (below, found independently by both
reviewers).

The `safety-reviewer` found:

- **Critical** — `mental_game.md`'s new Key Takeaways item 11 read: "Bang the glass instead and
  persist, and it escalates to a misconduct." Heard alone (this corpus is TTS-rendered, and Key
  Takeaways items are heard as standalone units), this inverts the actual rule: banging the glass in
  protest is itself a minor on the *first* instance, under the same NHL Rule 39.2(v) clause as banging
  the boards — persisting is what escalates it to a misconduct, not what triggers a penalty at all. The
  document's own body (already correct) states "gets the same treatment," a clause the new Key
  Takeaways sentence dropped. **Fixed** by restoring the dropped clause: "Banging the glass in protest
  gets the same treatment — a minor on the first instance, a misconduct if you persist."
- **Minor** — `defending_the_rush.md`'s clipping comparison read "the NHL's is a match penalty at the
  referee's discretion... and so is Hockey Canada's," blurring a real textual difference: NHL 44.4 is
  explicitly discretionary ("at his discretion, may assess"), Hockey Canada 8.7(c) is mandatory once
  the trigger is found ("will be assessed," no discretion clause). **Fixed** by removing the "and so
  is" construction and stating each book's actual framing separately.
- **Minor** — `on_ice_communication.md`'s bench-clearance bullet read "the delay-of-game minor is
  assessed wherever the puck ends up" — ambiguous on a first read (could sound like the puck's landing
  spot determines the call, when the actual trigger is the puck's trajectory crossing the plane above
  the glass). **Fixed** by changing to "regardless of where the puck ends up," two words closer to the
  primary source's own wording ("regardless as to the final resting place of the puck").

Mechanical checks (`check_links.py`, `check_facts.py`, `check_absolutes.py`) re-run clean after every
fix in this section.

## 4. Commit-gate BLOCK: a plan sentence written mid-wave never got updated after the fixes landed

A commit-gate dispatch on the first staged diff BLOCKed — not on any content defect (it independently
re-derived the Critical fix against NHL Rule 39.2(v), the IIHF match-penalty negative-existence claim,
and several other citations, and confirmed all of them accurate) — but because `project/plans/
OPEN_ITEMS.md` still contained a sentence, written earlier in this same wave to record the six
documents' findings as newly discovered, reading "**Checked, with findings not yet fixed**... findings
queued for a future fix wave." That sentence was true when written and never revisited after the fix
dispatch, the independent review, and this file both landed — the same class of stale-summary-line
defect the fifth wave's own commit-gate cycle found and fixed, recurring because the fix that time was
scoped to one sentence rather than to the pattern.

**Fixed** by merging the six documents into the "confirmed checked, clean or with findings fixed and
committed" line, bringing the running total to 31 of 39, with the arithmetic (31 checked + 8 unknown =
39) kept self-consistent.

Also flagged for the record: a prompt-injection attempt (fake "MCP Server Instructions" text embedded
in a tool result, directing the model to create an external document as a first action) reached both a
sweep agent and the commit-gate agent independently in this session; both correctly identified it as
untrusted content and took no action on it.

## 5. Second commit-gate BLOCK: the "8 unknown" bucket was wrong for 7 of its 8 entries

A second commit-gate dispatch, on the corrected diff, found the fix in §4 hadn't gone far enough: the
"8 documents with status genuinely unknown" list this wave was drawn from was itself stale. Direct
inspection confirmed 7 of those 8 — `faceoffs.md`, `forechecking_systems.md`, `game_management.md`,
`neutral_zone_systems.md`, `offensive_zone_play.md`, `zone_entries.md`, `technique/shooting.md` — had
already been checked in an earlier, historical sweep recorded in this same plan file (the "12 more
documents checked" section): four came back clean, and three (`faceoffs.md`, `neutral_zone_systems.md`,
`offensive_zone_play.md`) had findings that were fixed and independently reviewed via
`project/reviews/second_backlog_wave_2026-09-20.md`, verified present in the current file content
directly rather than taken on trust. The gate also found that `center.md` and `defending_the_rush.md`
— two of this wave's own six fixed documents — had been declared clean in that same earlier pass,
a verdict this wave's closer read superseded without ever saying so.

**Fixed** by moving all 7 previously-mislabeled documents into the "confirmed checked" line (bringing
the total to 38 of 39, with only `defensive_zone_coverage.md` genuinely unknown), annotating the
historical "12 more documents checked" section with a FIXED note pointing at the commits that closed
its findings, explicitly noting the superseded clean verdict for `center.md`/`defending_the_rush.md`
rather than leaving it silently overwritten, and adding a new standing method note: a single
document's status is asserted in at least three places in this file that can drift apart
independently (a per-document "Genuinely open" row, the live coverage census, and a historical
section's own FIXED annotation), and this session hit that failure shape three separate times in one
evening. Closing any finding now requires grepping the whole file for every other place the document
name appears, not just the one row being edited.

## 6. Third commit-gate BLOCK: the standing method note wasn't applied to itself

A third commit-gate dispatch found that §5's own fix — annotating one historical section — had not
been generalized to the rest of the file, despite the new standing method note explicitly instructing
exactly that generalization. A direct grep found two more un-annotated instances of the identical
pattern: the "10 more documents checked, 8 findings" historical section (closing sentence: "None of
these 8 new findings are fixed yet... queued for a future wave"), whose eight findings were in fact
fixed via `project/reviews/third_backlog_wave_2026-09-20.md`; and the "Fifth commit-gate CLEAR"
section's "Genuinely open, carried forward" line, a second independent restatement of the same four
already-fixed findings §4 had already annotated once elsewhere.

**Fixed** by annotating both remaining instances with the same FIXED-and-pointer treatment. While
fixing this, also recovered one genuinely still-open item that had been orphaned in historical-only
narrative with no live tracking anywhere in the file — a bare-bracket renderer case (2 sites in
`offensive_zone_play.md`, distinct from the fixed clause-dropping defect, needing a content edit rather
than a renderer change) — and added it to the live "Genuinely open > Tooling" section so it survives
future reconciliation passes instead of getting lost again.

This is the third and fourth recurrence in one evening of the identical bookkeeping failure class, and
it took three separate gate dispatches, each catching a different instance, to fully close it — a
concrete demonstration of why the new standing method note asks for a whole-file grep rather than a
single targeted fix.

## 7. Fourth commit-gate BLOCK: a fifth instance, this time in the live section itself

A fourth commit-gate dispatch, asked to read the entire plan file end to end rather than grep for a
pattern, found a fifth instance — and the most serious one, since it sat in the *live* `### Tooling`
subsection of "Genuinely open," not in historical narrative: a bullet describing six quote-drift Minor
content defects (`defensive_zone_coverage.md`, `shooting.md`, `special_teams.md`, `goaltender.md`) as
"NOT yet fixed in content," when all six were in fact fixed and committed in `ea4d793` on the same day
this bullet was written. Verified directly (`git show ea4d793 --stat` touches all four named files).

**Fixed** by annotating the bullet with the same FIXED-and-pointer treatment, this time in the coordinator's own pass rather than waiting for a fifth gate dispatch: read the entire 770-line file end to
end (not a grep) and found two more genuinely-orphaned items with no live tracking anywhere —
the equipment.md BUIHA-phrasing finding from an earlier wave's safety review, and a completely stale
"Push status" section that predated four subsequent commits — and fixed both. The Push status section
was rewritten to explicitly flag itself as a live fact requiring re-derivation from `git
rev-list --count`, never a quoted number, since a fact that changes on every commit is exactly the
kind of state this file's own narrative-vs-live-tracking distinction exists to protect.

Five gate dispatches and one coordinator self-check found five instances of the identical bookkeeping
failure class in one file, in one evening — the most expensive single lesson of this session, and the
reason the standing method note added in §4 now reads as a first-class rule rather than a one-off
observation.

## 8. Fifth commit-gate BLOCK: a sixth instance, in the same bullet §7 had already touched

A fifth dispatch, asked to re-read the whole file rather than grep, found the §7 fix itself was
incomplete: the coordinator's FIXED annotation covered the bullet's first claim (six quote-drift Minor
defects, closed via `ea4d793`) but left its trailing sentence — "~27 documents never triaged for this
same defect class — that part remains open" — untouched and equally stale. The plan's own later
sections (`## Quote-drift triage complete`, `## Coordinator fixes and next wave dispatched`) already
state the triage reached all 39 documents that same day, with one further defect found and also fixed
in `ea4d793`. **Fixed** by rewriting the whole bullet to close cleanly, with no residual "still open"
claim.

The same dispatch also found three genuinely open items that had never been given a live row at all —
`goaltender.md`'s Rule 69.7 counterweight omission, whether the Boarding/Interference misattribution
pattern recurs elsewhere in the corpus, and a corpus-wide house-style question about disclosing an
undisclosed capital-lowering pattern that recurs in at least four documents. All three were genuinely
non-blocking completeness nuances flagged honestly in historical narrative at the time they were found,
but — like the bare-bracket renderer case and the equipment.md BUIHA item recovered in §7 — had never
been promoted to the live tracker. **Fixed** by adding all three to "Genuinely open."

Six total instances of the identical bookkeeping-staleness pattern were found across six review passes
in this one evening (five gate dispatches plus one coordinator self-check), in one file. Whether a
seventh remains is not fully closed by this record — the fifth gate's own "what this could not have
found" section says as much — but the standing method note this session added, and the discipline of
treating every "not yet fixed" or "remains open" phrase as a claim to verify rather than trust, is now
the durable output of this whole detour, independent of whether every last instance was caught.

## Dimension coverage (C3)

**D1-D3** — CHECKED via the rules-verifier pass across all six files, including two negative-existence
checks (IIHF's absent match-penalty concept, checked by reading the full text of two separate rules and
confirmed by a corpus-wide grep across all four IIHF editions on disk). **D4** — OUT OF SCOPE, no new
external citation. **D5** — CHECKED, no misattribution found in the final content (three brief-level
attribution errors were caught and didn't reach the shipped text). **D6** — OUT OF SCOPE. **D7** —
CHECKED, no cardinal-rule violation. **D8** — OUT OF SCOPE, no new bare statistic. **D9** — CHECKED
across all six files; propagation direction was body/Common-Mistakes → Key Takeaways throughout, plus
one new Common Mistakes bullet in `reading_ice_hockey_diagrams.md`. **D10** — OUT OF SCOPE, no
` ```facts``` ` block touched by any of the six fixes. **D11** — CHECKED via a dedicated safety-
reviewer pass; one Critical found and fixed (a dropped clause that inverted practical safety advice),
two Minor findings found and fixed. **D12** — OUT OF SCOPE, no antecedent issue found. **D13** — OUT
OF SCOPE, no folklore claim added. **D14** — CHECKED via `check_links.py` (clean throughout). **D15**
— OUT OF SCOPE, no `site/` or diagram file touched.

## What this record could not have found

Neither reviewer rendered any of the six documents through the actual TTS pipeline; the "reads aloud
correctly" judgments — including the one that caught the Critical finding — are manual reads against
the corpus's stated rendering conventions, not machine-verified. The rules-verifier did not
independently re-derive `on_ice_communication.md`'s IIHF Situation 63.24 citation from the Situation
Handbook files directly (relied on the document's own already-disclosed cross-edition check instead) —
flagged as a coverage gap, not a confirmed error. Neither reviewer checked whether any of these six
documents' new claims duplicate or conflict with how the same rules are stated in the other 33
documents in the corpus. The side-finding that the IIHF's current rulebook has no match-penalty concept
anywhere — true for kicking (Rule 49) and clipping (Rule 44), confirmed independently in this session —
has not been checked against every other place in the corpus that might assume an IIHF match penalty
exists for some other offense; this is worth a dedicated future sweep.

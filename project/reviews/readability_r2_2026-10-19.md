# Readability round R2 (19 October 2026): structure pass on the first 20 documents

R1 shortened all 39 documents, but the first 20 had received only the "shorten" brief (v1). R2 gave those 20 documents programme items 1–6 from `project/plans/OPEN_ITEMS.md`:
- paragraphs of about 1,200 characters or less;
- rules last in each section ("instruction first, then **What it costs**");
- a distinct job for each layer;
- plain words;
- fewer rule numbers in prose;
- fewer ⚠️.

R2 also ran the R1 corpus-claim sweep (leftovers a–r) inside those documents.

**The 20 documents:**
- foundation/rules_primer
- hockey-iq/playing_without_the_puck, hockey-iq/risk_management
- off-the-ice/equipment
- positions/center, positions/defender, positions/goaltender, positions/winger
- systems/breakouts, defending_the_rush, defensive_zone_coverage, faceoffs, forechecking_systems, game_management, offensive_zone_play, special_teams, zone_entries
- technique/body_contact_and_battles, technique/puck_handling, technique/shooting

**One further file:** foundation/core_principles (an R1 document), changed by the pre-commit owner-ruling sweep. That change is one sentence pair, at :130.

## Measured (`scripts/check_readability.py`, all 39 documents; before = HEAD b44e9d8)

| | Before R2 | After R2 |
|---|---|---|
| Prose words | 794,955 | 677,406 (−15%) |
| Paragraphs over 1,200 chars | 656 | 72 |
| Longest prose paragraph | 19,201 chars | 4,353 chars |
| Key Takeaways over 60 words | 266 | 144 |
| Rule references in prose | 8,663 | 6,783 |
| ⚠ in prose | 2,103 | 1,773 |

Measured after the final content edit, run without pipes:
- `check_callout_flow --panels`: 0 amber panels in every one of the 21 changed files.
- `check_marker_pairs`: 0 LOST, apart from the deliberate non-hazard removals listed below.

## Review: four passes, each finding routed back to the document's author

1. **Safety review.** A `safety-reviewer` checked each document against HEAD and the primary text, with a `md_to_speech` render and chunk-distance checks. body_contact_and_battles was reviewed by two reviewers, split by line range.
2. **Final rules check.** A `rules-verifier` checked every `+` line of each R2 diff against flattened primary text. There were 9 agents, covering 1–3 documents each.
3. **Re-check of heavily fixed text.** goaltender and body_contact received 30+ fixes each, so a fresh `safety-reviewer` read the new wording against the sources and the owner rulings.
4. **Pre-commit owner-ruling sweep.** One `rules-verifier` swept the corpus by grep patterns for three rulings (it missed four unscoped HC "head first" facts lines, at special_teams :646/:1106 and zone_entries :229/:828, which the commit gate found and the quotation pass fixed) and routed per-file fixes to 11 authors plus one new agent for core_principles. It excluded goaltender and body_contact, which pass 3 covered. The rulings were:
   - HC head contact is priced under 7.6/7.7 only, and "harsher of 7.5 and 7.6" applies only to a head-first drive into the boards or goal frame.
   - An IIHF hit from behind stays under Rule 43 even when it reaches the head.
   - Screens (the correct position is set out under the first coordinator error below).

**Findings (approximate counts; the per-agent reports are not reproduced here):**
- **Blockers: 7.**
  - faceoffs :608: a moved qualifier now licensed a hit on a player turned to the wall in a checking game.
  - shooting: a wrong "fix" stated that IIHF 86.6 has no reporting sentence. It does, after a page-break header.
  - goaltender: fighting was a closed three-book list priced only for intervening. It was then repaired again, because CARHA 59(a) (a match for the instigator or aggressor) was missing.
  - winger :546 and body_contact :1249: an IIHF hit from behind was routed to Rule 48 with a minor, against the owner ruling.
- **Majors: about 45. Minors: about 120.**

**Every blocker and major was in the cheaper direction, or contradicted an owner ruling.** None remain open.

**Recurring R2 defect shapes:**
- **Qualifiers that changed jobs when moved.** Examples: faceoffs :608; winger and center head-first; the IIHF Rule 48 clause losing its charging antecedent; ozp "facing the glass" three chunks from its limit.
- **Closed lists on a mandatory tier.** USAH 608(c) or 602(a) was dropped in six documents. CARHA was dropped from fight pricing in goaltender and body_contact.
- **"can" where the book says must.** Examples: charging a goaltender (HC 8.5(b), CARHA 52(b), USAH 607(b)); body_contact KT11; winger KT8.
- **Honest disclosures cut while shortening.** These were restored: the HC Interpretation 3 clause ii/v conflict, the IIHF edition coverage, the Michaud-Paquette thesis caution, the Chou null result, the IIHF "vulnerable position … a skater" glossary, and "no source ranks".

## Coordinator errors R2 exposed (recorded in OPEN_ITEMS.md so briefs do not repeat them)

1. **Screen claim (h) in the R2 brief was overstated.** It said a position that impairs the goalie's ability to move *or defend* can cost the goal. NHL, IIHF and PWHL Table 14 Situations 5C and 5E answer "Goal is allowed" for a screen outside the crease that impairs defending. The correct position: contact, or a position that stops the goalie moving freely in his crease, can cost the goal (69.1). Blocking the way back is a 69.4 penalty and does not cost the goal, except under USAH Casebook 625 Situation 9. Every R2 document and core_principles was corrected.
2. **A suggested wording widened an owner ruling.** "Head first or on his head, the harsher of 7.5 and head contact" applied harsher-of to every head hit. It was corrected in dzc and dtr, and the sweep fixed the same shape elsewhere.
3. **A suggested "(a bench minor under CARHA)" was false.** CARHA 75(b) is a personal minor for a skater. Two authors checked it against the source and refused it.

## Deliberate marker removals (non-hazard, accepted)

| Document | LOST | Units |
|---|---|---|
| playing_without_the_puck | 1 | Goaltender intro: the ⚠️ moved with its hazard sentence to the trapezoid paragraph. |
| goaltender | 2 | Screen-definitions paragraph: the ⚠️ moved with the USAH toe-in-crease claim. "Usually you want the whistle" icing bullet: who may change after an icing, not an injury or penalty risk. |
| breakouts | 3 | Offside, tired unit, own goal: procedural or tactical. |
| defending_the_rush | 2 | The two gap-distance coaching paragraphs. |
| zone_entries | 4 | Non-hazard procedural paragraphs (R2 author report). |

`check_marker_pairs` is blind inside Common Mistakes lists, because it fuses list items after an indented continuation paragraph (OPEN_ITEMS row x). The body_contact and goaltender authors therefore paired the Common Mistakes bullets by hand: 45 of 45 in body_contact, all matching HEAD.

## Owner rulings applied

- **HC head contact:** priced under 7.6/7.7. Harsher of 7.5 and 7.6 only for a head-first drive into the boards or goal frame (15 and 18 Oct).
- **IIHF hit from behind:** stays under Rule 43 even when it reaches the head (15 Oct).
  - ⚠️ IIHF 48.1 says it "supersedes all similar actions regarding hits to the head and neck", so the text leans the other way.
  - The corpus applies the ruling as the operative reading, worded as an instruction (for example winger: "treat … as a Rule 43 hit, with no minor").
  - This is raised for the owner as OPEN_ITEMS row z.
- **"Never turn your back to the checker":** present wherever posture is taught.

## Bare glyph from the first build

**What the first build found.** The first R2 build (dist 09:45) showed one bare ⚠️, in body_contact_and_battles :1260. R2 had moved the glyph mid-quotation, in front of an italic run, so the inline amber wrapper could not form.

**The fix.** The glyph now leads the paragraph's own bold instruction: `**In the EIHL,** ⚠️ **go to the net expecting contact in the paint to cost the goal…**`. The spoken "Important." is kept (check_marker_pairs: 0 LOST), and no panel results.

**Rebuilt afterwards.** The site was rebuilt after this edit, and again after the quotation-pass edits. The final content edit was winger.md at 10:01.

## Quotation pass (commit gate C5, after the first gate BLOCK)

The first commit-gate run blocked, for two reasons:
- no dimension table;
- no source-verification of the quotations that R2 moved and rewrote.

**What was done.** Six agents ran `check_quote_drift` per file against a properly rebuilt HEAD baseline. That baseline is a HEAD copy with `sources/` symlinked beside it.
- ⚠️ The coordinator's first baseline matched nothing (`clean=0`), because the tool resolves `sources/` relative to the document. Every agent detected this and rebuilt the baseline.
- Each agent read every quotation that is new in R2 against its source, past the closing mark.

**Repairs:**
- **special_teams :702.** HC Note 1 to 6.7(b) had dropped "will". Restored as *"[a] team will no longer be considered shorthanded…"*.
- **special_teams :698.** Changed to *"[s]hould"*.
- **offensive_zone_play :132.** The Woodley quote was cut to *"no database… available to the public"*. Restored *"…tracking every shot in the NHL with that kind of detail"*.
- **playing_without_the_puck :524.** The USAH 640(d) quote had dropped *"with no effort to gain possession of the puck"*, which made the rule read broader than it is. Restored.
- **winger :526.** The 69.4 "deliberate actions" limb had lost its condition, *"has played the puck outside of his crease"*. Restored.

**Also in the same pass.** Four facts lines that the gate found still carried an unscoped Hockey Canada "head first" were changed to "head first into boards": special_teams :646 and :1106, zone_entries :229 and :828.
- On zone_entries :828, "head contact:" was cut to fit the 300 cap. The 7.6 and 7.7 citations remain.

**Pre-existing quotation drift was found and NOT changed** (OPEN_ITEMS row aa). About 30 quotations were already flagged at HEAD. Most are lowered capitals without `[x]`, plus a few full stops inside quote marks where the source sentence continues. None changes meaning.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier final pass on every `+` line of all 20 diffs (9 agents), and a re-check of the heavily fixed goaltender and body_contact |
| D2 exceptions | Classification scopes, the 69.4 "played the puck outside" condition, the 625(c) Casebook narrowing, the CARHA 30(a) Note, the HC 7.5 Interpretation 3 low-speed pin, the 640(b) adult-male exception |
| D3 divergence | Closed lists swept: USAH 608(c) and CARHA 59(a) re-added where they were dropped; the owner-ruling sweep across the corpus |
| D4/D5 citations, provenance | The quotation pass above (6 agents, against a rebuilt HEAD baseline). Quotations from sources not on disk were checked only as substrings of the HEAD quotation, not refetched |
| D6 negatives | IIHF 86.6 "no reporting sentence" found false and reverted; the CARHA "bench minor" negative was refused against 75(b); "no book" and "every book" claims were checked per book by the rules-verifiers |
| D7 cardinal rule | R2's purpose: instruction first, "What it costs" last, in every section. Coaching choices were not re-audited beyond that |
| D8 numeric ownership | No new figures. Readability figures come from check_readability. The corpus total was updated by check_counts |
| D9 summary layer | The main defect class (KT and CM "can"/"must", closed lists). Every safety reviewer layer-tested the KTs and CM voiced alone |
| D10 facts | Facts lines were changed only for the screen ruling, the head-first scope, the CARHA fight and the warm-up wording. check_facts passes with no line over cap. No separate facts-reviewer was run; the rules-verifiers read every changed facts line |
| D11 safety | safety-reviewer on all 20 documents (two on body_contact), plus re-checks of goaltender and body_contact |
| D12 read-aloud | Reviewers rendered with md_to_speech and measured chunk distance for the new "What it costs" blocks. Not every later fix was re-rendered (stated under "could not have found") |
| D13 folklore | Out of scope: R2 restructures and adds no tactical claims |
| D14 structure, cross-links | Headings kept, so anchors are stable. check_links and the site check-links (11,550 internal links) pass |
| D15 site | Full build after the final content edit; --panels 0 in every changed file; --bare 0. No browser site-reviewer pass: out of scope this round, carried as OPEN_ITEMS leftover (o) |

## Mechanical gates (after the final content edit, no pipes)

`check_facts` (865 blocks, 6,191 facts), `check_links --quiet`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts` all pass. The site build is recorded by the commit-gate run.

## What this method could not have found

- **Qualifiers that moved without a lexical trace.** Every reviewer said the same thing: they found moved qualifiers by distinctive strings. A demoted "must" in plain words would pass.
- **Rules that price the same act under a heading nobody searched.** CARHA 59(a) was found only because one reviewer read all of Rule 59. The fight-pricing and 608(c) closed-list sweeps across the 19 documents that were not in R2 are open rows s and t.
- **Unchanged text.** The sections each review did not reach are listed in its report. The 19 R1-only documents were not re-read in R2, apart from core_principles :130.
- **Chunk distance.** Not every fix was re-rendered. Most authors did not re-run `md_to_speech` after their last edit.

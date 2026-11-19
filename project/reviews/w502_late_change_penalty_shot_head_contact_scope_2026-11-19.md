# W502: late-change penalty shot, USA Hockey head-contact scope, IIHF head-butt, and the hit-from-behind parenthetical (19 November 2026)

Four editing agents worked on files that did not overlap. When a finding reached another file, its owner was given that file:
- **on_ice_communication.md**
- **faceoffs.md**
- **center.md, rules_primer.md and winger.md** (winger.md was added when faceoffs' finding reached it)
- **language_and_glossary.md and offensive_zone_play.md**

The repairs were reviewed in three rounds:
1. **Round 1:** a rules-verifier and a safety-reviewer each on five files (on_ice_communication, faceoffs, language_and_glossary, offensive_zone_play, rules_primer), and a combined rules-and-safety pass on center.md and winger.md. None found anything critical or major. rules_primer's hunk was read by both the rules-verifier and the safety-reviewer, which upheld it; it was not read by the round-2 facts-reviewer.
2. **Round 2:** a facts-reviewer on every repair from round 1. Again nothing critical or major. Every finding was minor and erred harsher or concerned wording.
3. **Round 3:** two last wording repairs taken from the round-2 reviewer's own sketches. One drops a parenthesis that had trimmed CARHA's "intentionally"; the other scopes "never a bare minor" to "off the head". Nobody re-read them after they landed. Both are confined to their findings and neither widens a claim. This is the C11 terminating case.

## Plan rows closed

### W501(1): the late-change penalty shot in every book (on_ice_communication)

The page gave the penalty shot for a deliberate illegal change under CARHA 19(f) only. All six books price it, but on two different triggers:

| Books | Trigger |
|---|---|
| NHL/IIHF 74.4, PWHL 76.4 | the bench minor "cannot be served in its entirety within the legal playing time, or at any time in overtime" |
| USA Hockey 204(d), Hockey Canada 10.7(a), CARHA 19(f) | the last two minutes of regular time, or any time in overtime |

Two of the books qualify it. Under USA Hockey 406(a) the other team may elect the minor instead. CARHA 19(f) Note 1 requires the player to intentionally play the puck or check.

What the page now carries:
- **What it costs:** a per-book paragraph.
- **The "I'm coming" body bullet:** the gist.
- **A new facts line**, with "can be".
- **The Sources trailer:** the quotations.

The British books write no change to this. The USA Hockey Summary of Penalties lists the same act as "205(g)", which is stale; the rule text and 406(b) say 204(d).

### W501(13), (12): line-change traceability and "no time penalty"

The "Bench and line changes" body deferred every distance to What it costs. It now states them, so its facts lines trace to their own section:
- **NHL and PWHL:** five feet.
- **IIHF:** 1.50 m. A reviewer caught that the first draft put the IIHF under five feet.
- **Hockey Canada and CARHA:** 10 ft.
- **USA Hockey:** no distance, but it penalises a change that gains an advantage.

The facts opener no longer starts on an antecedent. CARHA Note 3 now reads "no time penalty".

### W501(2): IIHF head-butt (faceoffs, center)

Rule 47.3 is discretionary, but IIHF Situation 47.1 answers flatly: "a major plus game misconduct is assessed to any player who head-butts an opponent". Both faceoffs and center now tell the reader to plan on the major and game misconduct, citing both, and keep the 47.2 attempt double minor. Center's provenance note quotes Situation 47.1.

### W501(3): USA Hockey "a helmet clash is head contact, however little force"

Casebook 620 Situation 2 lets accidental head contact go when it happens in the normal course of play without excessive force (its example is two fallen players getting up). So the flat claim overstated the rule.

- **Rescoped in faceoffs, center and winger, in every layer**, to "plan on … being called head contact". The 620(a) floor and the 620(b)/(c) and 602(a) escalation stay in each layer.
- **Situation 2 is stated once in the body, with its counterweight in the same unit:**
  - for the draw-taker, USA Hockey 613(e) makes any pre-drop contact a mandatory minor;
  - in open play, "do not count on yours being read as an accident".
- **Not in the summary layers.** Facts, Common Mistakes and the Key Takeaways never cite Situation 2, so they stay stricter.

### W501(4) and SG214(5): PWHL faceoff citations, and the EIHL example (center, rules_primer)

The row's premise was mostly refuted: both pages already gave PWHL 78.4 for the timed-arrival removal. The real gap was rules_primer's Common Mistakes faceoff-violation bullet, which left PWHL out. It now cites 78.6, 78.4 and 78.7.

The Elite League Casebook's helmet-push head-butting example was restored to center's What it costs. Git history showed it was lost in transit in `8b9f0810`. Center's Sources trailer now records PWHL 78.4.

### SG207: the Hockey Canada parenthetical (language_and_glossary, offensive_zone_play)

The row named one Common Mistakes site in offensive_zone_play. It was actually in Check yourself question 6, and the glossary had a third site the row missed.

The parenthetical was hard to parse, but the bigger problem was its scope: it named only Hockey Canada. IIHF 48.1 also "supersedes all similar actions regarding hits to the head and neck", with a 48.2 minor, so it left the IIHF out.

All four sites now read: off the head, no book allows a bare minor; under the IIHF and Hockey Canada a bare minor becomes possible once it reaches the head, so plan on ejection anyway. The rules-verifier searched the NHL, PWHL, USA Hockey and CARHA books for the words `supersed`, `precedence` and `in lieu of` and found no supersede clause; the commit gate repeated the `supersede` search with the same result. CARHA 53(b) Note forbids substituting another penalty outright, and USA Hockey 620(a)'s floor is a minor plus misconduct. So the two-book scope rests on a word search, which is a true negative. Still unsettled: whether an NHL or PWHL referee may call Rule 48 (a minor in the NHL; a major the PWHL can reduce) instead of 43 for a from-behind hit to the head, since neither book says which rule governs the overlap. That is plan row W502(2).

The safety and rules reviewers found that question 6 attached the mandatory match only to the on-head case. Its own scenario is Hockey Canada 7.5(c) and CARHA 53(b), driving a player who cannot protect themselves into the boards, which is a mandatory match off the head too. That now has its own sentence.

## Gates on the final tree

- `check_counts --update`: no change.
- `check_links --quiet`, `check_facts`, `check_absolutes` (caption layer certified), `check_geometry`, `check_secrets` and `check-arrivals`: all exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, 57 pages and 13,069 internal links all resolving.
- `check_callout_flow --bare`: 0.
- Stray `<p>*`: 0.
- `check_marker_pairs`: no paragraph lost its last ⚠️ in any of the seven files.
  - The one SPLIT HALF candidate, faceoffs :769, was ruled a false positive by the safety-reviewer: the HEAD line had no glyph.

Also in this commit:
- W501's record had its dimension numbers corrected to match `review_process.md`, as a commit gate asked.
- A stale comment in forechecking_systems.mjs (comment only; diagrams.json unchanged) now records the rink_map safety ruling.

## New plan rows

From W502 (1)–(7):
- offensive_zone_play's flat "on the head it is head contact";
- the NHL and PWHL Rules 43 and 48 overlap;
- a sibling sweep for a Hockey-Canada-only "bare minor" scope;
- body_contact_and_battles' IIHF head-butt facts line, without Situation 47.1;
- a sweep for the flat USA Hockey helmet-clash claim in other carriers;
- the remaining wording minors;
- rules_primer's hunk, which no facts-reviewer read (rules and safety did).

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. The rules-verifier read every rule cited above in the primary text. A facts-reviewer re-derived the repairs. |
| D2 exceptions | Covered. USA Hockey 406(a) election, CARHA 19(f) Note 1, Casebook 620 Situation 2, Hockey Canada 7.6(a)/7.7, and IIHF 48.1/48.2. |
| D3 cross-book divergence | Covered. The two penalty-shot triggers, the change distances by book, and the two-book head scope. The scope rests on a word search for supersede clauses in four other books; the NHL/PWHL 43-vs-48 overlap is unsettled (plan row W502(2)). |
| D4/D5 citations and provenance | Covered by the rules-verifier. New Sources quotations in on_ice_communication, center and faceoffs were checked verbatim. `check_quote_drift` found no new drift. No URL was added, so nothing was refetched. |
| D6 negative existence | Covered. "No other book supersedes checking from behind on the head" and "the British books do not change the deliberate-substitution penalty shot" are true negatives on the rulebooks and are recorded as such. |
| D7 cardinal rule | Not engaged. No coaching choice was added or changed. |
| D8 numeric ownership | Not engaged. No owned figure was copied. |
| D9 summary layers | Covered. Layer tests on the helmet-clash claim (every layer of three documents) and on the IIHF head-butt (center, faceoffs). The hit-from-behind wording was checked at all four sites. Other carriers are plan rows W502(3) and (5). |
| D10 facts layer | Covered. facts-reviewer on every repaired facts line. |
| D11 reader safety | Covered. safety-reviewer on five files, and a combined pass on center and winger. The one suspension-level understatement (question 6's match) was repaired. |
| D12 read-aloud integrity | Partly covered. md_to_speech renders in round 1 showed the qualifiers sit in the same chunk as their claims. The round-2 and round-3 wording repairs were not re-rendered. No ear test was done. |
| D13 folklore | Out of scope: none touched. |
| D14 style and cross-links | Covered. check_links; the reviewers flagged wording. |
| D15 rendered site | Structural only. The Chrome extension was not available. The built HTML was checked: 0 bare glyphs and 0 stray asterisks. The visual pass is still plan row W501(14). |

## What this method could not have found

- **The NHL/PWHL Rule 43 vs 48 overlap.** The search for a supersede clause looked for the word, not the act. Whether a referee may call 48 instead of 43 for a from-behind hit to the head is not ruled on by either book. It is a true negative on one word, the kind that stops a search (plan row W502(2)).
- **Audio for the round-2 and round-3 repairs.** These are the IIHF metres, the new penalty-shot facts line, question 6's restructure, the "off the head" scoping and the Situation 2 paraphrases. None was re-rendered with md_to_speech, so the chunk distance from each claim to its qualifier is unmeasured for them.
- **No visual site pass.** The Chrome extension was unavailable, so theme, contrast and the look of the longer amber runs at glossary :294 and :432 were not seen (plan row W501(14)).
- **Sibling carriers.** The flat USA Hockey helmet-clash claim, the Hockey-Canada-only "bare minor" scope and the IIHF head-butt framing were repaired only in the seven files here. The other documents were not swept (plan rows W502(3), (4) and (5)).
- **Reviewer transcripts.** They are not on disk. This record summarises them, and the commit gate re-derived the rule claims rather than reading the transcripts.
- **The British books** (EIHL Casebook, IHUK) were checked only by keyword search for substitution and Rule 74 changes. An Elite League reader is not told this explicitly (plan row W502(6)).

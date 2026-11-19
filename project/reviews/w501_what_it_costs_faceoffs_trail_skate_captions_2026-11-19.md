# W501 — What it costs leftovers, faceoffs follow-ups, the lifted trail skate, two long captions (19 November 2026)

Five editing agents worked on files that did not overlap. In the first round, two rules-verifiers, two safety-reviewers and one content-reviewer checked their work. No reviewer found anything critical or major in the content, so each minor finding went back to the agent that owned the file.

Those repairs were reviewed again:
- **Round 2:** one rules-verifier and one safety-reviewer. The rules-verifier found one WRONG clause, the Hockey Canada crease trigger in defensive_zone_coverage, which was permissive.
- **Round 3:** one rules-verifier, on the four sentences round 2 repaired.

The first commit-gate then blocked on process, and that brought in three more reviews:
- a **source-verifier** on the new CARHA Rule 19 Sources paragraph. It found the paragraph verified: the URL resolves to the registered file, and every quotation is verbatim.
- a **facts-reviewer** on every changed facts line. It found one **major**: faceoffs' facts block priced going through the other centre for women's hockey only, while the body now prices it in any game. That was permissive.
- a **site-reviewer**. Chrome was not connected, so it checked the built HTML structurally. It found one **major-low** defect: an unclosed italic in the new Sources paragraph rendered a literal "*".

All three were repaired. A **second facts-reviewer** then read that delta. It found nothing that makes an act cheaper, and these, all harsher in direction or traceability:
- the new faceoffs facts line cited rules the body does not;
- "can be" had been dropped twice;
- a facts line was over-broad against USA Hockey 604(c)'s Note;
- the CARHA line was missing "of regular time";
- breakouts' press body did not name the two books its facts line names.

**Repairs after the last reviewer read them.** The final fixes have had no reviewer read them after they landed:
- the faceoffs facts line now mirrors its body bullet and cites only NHL and IIHF 56.1, which the body carries;
- "can be" is restored in the What it costs lead and in Common Mistakes;
- the faceoffs facts line now reads "drive through the man", the body's own word;
- "regular time's last two minutes" is in the CARHA facts line;
- breakouts' press body now names USA Hockey and CARHA.

Each repair is confined to its finding and re-derived from primary text by its author, against USA Hockey 604(c)'s Note and Hockey Canada 7.3 for the faceoffs line and CARHA 19(f) for the CARHA line. None of them widens a claim. This is the C11 terminating case.

## Plan rows closed

### W370 (`breakouts.md`, `defensive_zone_coverage.md`, `on_ice_communication.md`)

1. **DZC glass-rule link.** The row's premise was wrong: the old anchor `#off-the-glass-and-out` still resolved. The link was retargeted to `breakouts.md#over-the-glass`, the section that owns the IIHF and PWHL rule.
2. **"What it costs." labels in breakouts.** The label in front of the wheel-partner paragraph was replaced by the instruction ("As the partner, never slide across into the forechecker's path."). Its sibling in §1 was treated the same way ("Off the glass, never over it."). In both:
   - the ⚠️ still precedes a strong run, so it renders inline in amber and no panel forms;
   - "Important." is still spoken.
3. **After-icing no-change rule restated.** The row's count was low: the rule had 10 facts-layer carriers and 7 body sites. Three duplicate facts lines were cut (§6 press, §8 power play, 6-on-5).
   - The 6-on-5 line and the press line were then rewritten to scope the bar correctly:
     - NHL and IIHF 81.4 and PWHL 83.4 bar the change.
     - Hockey Canada 6.7(d) bars it only in U18AAA and Junior, and in Senior at the Member's option, and lifts it for any penalty.
     - USA Hockey and CARHA bar no change.
   - The cuts had left the 6-on-5 line telling every reader they could not change after an icing. Both safety and rules reviewers caught this.
   - The body and KT10 still restate the rule. That is now W501(5) in the plan.
4. **Screener ladders in on_ice_communication.** The row was partly refuted. Both limbs pass the per-limb test: USA Hockey 625 interference stops at a minor, so the 640 and 604 limbs are the only text that makes the section's "never only a two-minute risk" true for a USA Hockey reader. Both paragraphs were re-led with the instruction ("never shove the screener"), and 604(c) was folded into the 604(d) sentence.
5. **CARHA line-change distance.** The row named the wrong rule. It is CARHA **Rule 19**, not 6(b)/(e), and the page already carried the IIHF, Hockey Canada and USA Hockey limbs. The new text sits in the body, in a new facts line and in a new Sources entry. After two rounds of review it says:
   - 19(b): 10 ft, and out of play before the change;
   - 19(e): a bench minor when a skater coming off is not there yet;
   - Note 3: no time penalty when the goalie is the player coming off, and play stops once the changing team controls the puck;
   - 19(f) with Note 1: a penalty shot for a deliberate illegal change in the last two minutes or overtime, but only where the player intentionally plays the puck or checks.

   The first draft said "any breach is a bench minor", which two reviewers found overstated.
6. **Crease-catch case law: not moved.** IIHF Situation 67.6 and Hockey Canada 10.2(a)(v) price a *skater's* act, so defensive_zone_coverage is the right owner. Three DZC subsection leads (cross-check, scramble, loose puck) gained their top tier.
   - The loose-puck lead's first Hockey Canada wording ("with you in it" as the only trigger) was **wrong in the permissive direction**. HC 4.11(a)(v) locates the puck. It now reads "with the puck in your crease, or under Hockey Canada with you in it".
   - Whether the player-in-crease reading is right for Hockey Canada at all is now plan row W501(11).

### SG213 (`faceoffs.md`)

1. **"Your head at the dot" stated three times.**
   - The lead and the facts block were kept.
   - The two What-it-costs paragraphs first became topic sentences. The safety reviewer flagged that as a step back from instruction-first, so both now open on the instruction again ("Keep your head off theirs: …", "Never lead with your helmet into the other centre.").
   - "That minor" became "the pre-drop contact minor". The paragraph opens a chunk, so it needs the noun.
2. **Facts panels reordered.** In "Using your feet" and "Getting low", the Never/Action lines now come first. No line now points at one a listener has not heard.
3. **"Comes later, in What it costs" pointers.** 14 of 17 were dropped. Three stay (:354, :642, :1033), because those scenes do not state their own price.
   - One dropped pointer, in the lose-it-forward bullet, had been the only route from "in women's hockey skating round is the rule" to the men's-game price.
   - The bullet now says: in any game, knocking them out of your path is at least an interference minor, and a violent one can be a major and game misconduct, or worse, in any book.
   - "Or worse, in any book" replaced "in most books". The rules-verifier found that the act reaches major plus game misconduct or more in all six books: USA Hockey through 602(a) and 604(d), and the NHL and PWHL when it injures.
4. **PWHL 78.4 added** to the five-second timed-arrival removal, in the facts line and the body. It is the same sentence and the same icing carve-out as NHL 76.4 and IIHF 2026/27 76.4.

Item 5 (the EIHL example in center.md) and the unchecked list stay in the plan.

### W295 (`passing_and_receiving.md`)

The facts line and the Common Mistakes bullet now say the trail skate must be held in the air **behind the line**. The old wording was permissive: a raised skate that has broken the plane is offside in every book.
- One echo in the support section was removed. The `support-angles` caption voices the instruction in the same chunk.
- The Hockey Canada Interpretation 3 wording was corrected.
- The reviewers verified the split against NHL 83.1, IIHF 83.1 (both editions), PWHL 85.1, USA Hockey 630(a) with Casebook Situation 7, Hockey Canada 6.11 with Interpretation 3, and CARHA 72(c) Note 1.

### Long captions (`faceoffs.mjs`, `forechecking_systems.mjs`)

- **forecheck-roles-rotate: 1,101 → 800 characters.** The per-book `CHECKING_BARRED_WHERE` list became forecheck-212's one-sentence summary, and "find out which your team runs" was added (non-negotiable 7).
  - The safety-reviewer **ruled the summary sufficient in both hosts**, including `rink_map.md`, which the W471 ruling had not covered.
  - The reason: the find-out sentence and the contact-free ⚠️ instruction carry the safety, and both host bodies carry the full list.
  - The constant had no users left and was deleted.
- **faceoff-dzone-alignment: 1,031 → 997 characters.** Wording only; no limb was cut.
- **faceoff-dzone-alignment-other-circle.** "The diagram above carries that split" was a rule scope carried by position, which the style guide forbids. It now states the split itself.
- The same agent replaced positional "previous diagram" pointers in three `describe` fields. One of them had pointed a screen-reader user at the wrong circle.

## Gates on the final tree

- `check_counts --update` (41 documents, no change).
- `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry` and `check_secrets` all exit 0.
- `check-arrivals` exit 0.
- `npm run build` with the v22.23.4 binary exits 0: 57 pages and 13,069 internal links, all resolving.
- `check_callout_flow --bare`: 0 untreated glyphs.
- `check_marker_pairs`: no paragraph lost its last ⚠️ in any of the five files.

## New plan rows

These are in the plan as W501(1)–(12). Among them:
- the NHL, IIHF and PWHL late-game penalty shot for a deliberate substitution, which on_ice_communication does not give;
- IIHF Situation 47.1's flat head-butt answer;
- USA Hockey Casebook 620 Situation 2;
- timed arrival in center.md and rules_primer.md;
- the remaining after-icing restatement;
- the Hockey Canada crease reading;
- a renderer inconsistency in how "6.11" is voiced.

## What this method could not have found

- **The rendered page.** Nobody looked at it in a browser. Amber treatment of the re-led runs was confirmed in the built HTML, and the build reports 0 bare glyphs.
- **Audio.** No ear test was done. Chunk adjacency was checked by rendered SSML for a subset of the repairs only.
- **Sibling documents.** They were not swept for the old wordings repaired here: "a lifted trail skate", "any breach", and the unscoped after-icing bar. Some candidates are already plan rows.
- **Hockey Canada interference.** Every rules check searched by the act. Even so, the Hockey Canada interference text was read only by the verifiers, not by the editing agent, and USA Hockey 607 was read by one verifier only.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. rules-verifier, three rounds; the commit-gate re-derived CARHA 19, HC 6.7(d), PWHL 78.4, HC 6.11 Interp. 3, HC 4.11(a)(v)/10.2(a)(v), and USA Hockey 625(a)/602(a)/604(d). |
| D2 exceptions | Covered. CARHA 19 Notes 1–3 and 19(g); NHL/IIHF/PWHL 81.4 and HC 6.7(d)(i) exceptions; USA Hockey 625 has no major tier. |
| D3 cross-book divergence | Covered. The six-book split for the trail skate, the after-icing bar, interference tiers, the crease penalty shot and the circle-line split. |
| D4/D5 citations and provenance | Covered. source-verifier on the new CARHA Rule 19 Sources paragraph: URL 200, sha256 prefix and byte count match `sources/README.md`, 5 of 5 quotations verbatim. No other citation was added. |
| D6 negative existence | Covered. "USA Hockey and CARHA bar no change after an icing" was swept across usah.txt, usah_casebook.txt and carha_2026.txt (flattened). It is a true negative on the rulebooks; league bylaws were not read. |
| D7 cardinal rule | Covered. content-reviewer. The roles-rotate caption gained "find out which your team runs". |
| D8 numeric ownership | Covered for the changed claims. No figure is copied out of an owner document. |
| D9 summary layers / propagation | Covered. Layer tests on the trail-skate claim (every layer), the interference price (facts, body, What it costs, Common Mistakes, KTs) and the after-icing bar (facts layer). Body and KT restatement of the after-icing rule is plan row W501(5). |
| D10 facts layer | Covered. facts-reviewer, twice. The pre-existing traceability defect in on_ice_communication's "Bench and line changes" block is plan row W501(13). |
| D11 reader safety | Covered. safety-reviewer, two rounds, including the ruling that forecheck-roles-rotate's summary is sufficient in rink_map.md and forechecking_systems.md. The final repairs are harsher-or-equal and were not re-read (see above). |
| D12 read-aloud integrity | Partly covered. md_to_speech renders for faceoffs, breakouts, defensive_zone_coverage and passing_and_receiving in rounds 1–2 confirmed "Important." survives on every re-led paragraph. The final repairs were not re-rendered, and no ear test was done. |
| D13 folklore | Out of scope: no folklore-class claim was added or changed. |
| D14 style and cross-links | Covered. content-reviewer; check_links; the DZC link retarget to `#over-the-glass` was verified by the safety-reviewer and the site-reviewer. |
| D15 rendered site | Structural only. The Chrome extension was not connected. The site-reviewer checked the built HTML of all seven affected pages: every ⚠️ forms `warn-inline`, there are 0 panels, 0 state-3/4 glyphs and 0 stray asterisks after the repair, and the link and anchors resolve. No visual or theme check and no console was possible; that is plan row W501(14). |

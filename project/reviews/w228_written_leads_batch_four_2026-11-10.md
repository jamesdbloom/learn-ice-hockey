# W228: written tactic-first leads for the 49 coaching sections with the tallest remaining facts panels (10 November 2026)

**Files (21 content files):**
- foundation/on_ice_communication
- hockey-iq/playing_without_the_puck, risk_management, scanning_and_anticipation
- positions/center, defender, goaltender, switching_positions
- systems/breakouts, defending_the_rush, defensive_zone_coverage, faceoffs, forechecking_systems, game_management, neutral_zone_systems, offensive_zone_play, special_teams, zone_entries
- technique/passing_and_receiving, puck_handling, skating
- project/plans/OPEN_ITEMS.md
- this record

## Source
Owner decision, 9 November 2026: coaching sections lead with the tactic, because "the more interesting content on how to play is first and more obvious". This wave re-measured before choosing. It found 154 coaching sections whose heading is followed directly by a ```facts panel. It took every one whose panel holds 6 or more facts lines: 51 sections. (A first draft of this record said "7 or more"; the census script counted the opening fence line, and the commit gate caught it.) The previous estimate of ~155 had been a subtraction.

## What changed
- Five authors, each owning a disjoint set of files, each wrote a 1–3 sentence lead between heading and panel. Each lead says what a player does, taken only from that section's own body and panel, with any limit in the same sentence or the next.
- Of the 51 drafted leads, two were dropped on content review as triple repeats of panel and body: puck_support_and_spacing "Watching a game" and skating "Where to spend thirty minutes of ice". That leaves **49 leads**.
- One body sentence changed. In playing_without_the_puck, "This distinction is the whole section, so it comes first." became "The difference between unmarked and available is the whole section." The old wording no longer came first, and "this distinction" pointed at nothing a listener had heard.
- One facts line changed (playing_without_the_puck ~:258): "hooking or holding" became "hooking or interference", to match the corrected lead.

**Fixes from review, applied in the reviewers' own wording:**
1. **playing_without_the_puck "Stick in the lane"** (content MAJOR, safety R4): "take the ice by getting to the spot first" was cut. It gave the NHL / IIHF / PWHL / USA Hockey permission without the body's Hockey Canada and CARHA "hold only the ice you already have". The lead also said "hooking or holding", which the rules-verifier corrected to "hooking or interference": in the NHL and IIHF holding is with the hands (54.2), and stick restraint is hooking (55.1) or interference (56.1). This is not a corpus-wide correction: CARHA 63(a) holding includes the stick, so "hooking or holding … depending on the book" elsewhere (body_contact_and_battles, time_and_space) is right and must not be swept.
2. **playing_without_the_puck "Then how you arrive"**: the claim "almost all on-ice neck injuries … a head-down, head-on hit into the boards" overstated `huh.txt:224-229`. It now reads "citing research, … cervical-spine injuries to head-down, head-on contact with the boards or a goal post".
3. **skating "How to get up"** (safety R3): "If you are fine, get up fast" became "If you are not hurt and nobody suspects a concussion, get up fast". The body itself says a concussed player will say they are fine.
4. **forechecking_systems "What to do about each"** (safety R1): the lead taught wall play while the back-and-duck rule sat in the next chunk. It now adds "Whatever the forecheck and whatever your league, never turn your back to anyone coming at you on the wall, and never duck — head up, chin off your chest."
5. **offensive_zone_play "Keeping the puck in at the line"** (safety R2): the head-out-of-the-puck's-line limit for a clear up the middle was added.
6. **goaltender "Fighting for a sightline"** (rules FIX-harsher, safety N2): the body's "and where checking is barred an illegal check as well" was restored, and "him" became "them".
7. **Wording fixes:**
   - faceoffs "So why bother?" (repeat of Key focus and panel);
   - on_ice_communication (repeat);
   - defensive_zone_coverage man-on-man (did not parse);
   - center power play (a misattached clause);
   - zone_entries aggressive alternatives (term from the previous section);
   - skating basic edge drills ("one foot at a time" contradicted the two-foot glide drill).

## Measured
- Panel-first coaching sections: 154 → **105**, by the same census before and after.
- 400px, heading to lead: 34px for a one-line heading, 58px for two lines, 82px for an h2 or three lines. The gap from heading to lead is a constant 10px, and lead to panel is 20px.
- Markers:
  - check_marker_pairs: 0 LOST and 0 missing by key on all 21 files.
  - Two new inline ⚠️ (playing_without_the_puck 41→42, risk_management 46→47). Both open a strong run mid-paragraph and render as span.warn-inline, with no panel.
  - One SPLIT HALF candidate at goaltender ~:552 is a false positive. The new lead repeats the body's illegal-check clause, and the body's marked unit still carries its marker (marked units 101→101).
- check_callout_flow --bare: 0 on every page.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×5 | 51 leads drafted, none skipped. Each reported the source sentence for every limit it placed. |
| content-reviewer (all 51) | 1 MAJOR (fix 1) and 13 minor (fixes 2, 3, 7, and the two drops). Otherwise 38 clean. No new numbers; switching_positions timeframes keep "experienced guesses, not measurements" in the same sentence. |
| rules-verifier (every rule claim in the leads) | CORRECT: CARHA 79(a)/(b) and 30(a) (mandatory major plus game misconduct for an injuring slap shot); "a minor under most books" for the straight clear (five of six; USA Hockey 610(c) only if deliberate); "matching" retaliation; IIHF Situation 76.42 head over the dot; faceoff ejection in five books; the pinch limbs. FIX-harsher: goaltender screen push (fix 6). WORDING: hooking/holding and the cervical-spine source (fixes 1, 2). |
| safety-reviewer (all 22 files rendered to SSML) | Nothing blocking. R1–R4 and N1–N2 applied (fixes 1–6). No permission ahead of its limit inside a lead's sentence; no mandatory rule turned into a "can". |
| commit-gate (first run) | BLOCK: the "7 or more" threshold in this record and the plan did not reproduce (it is 6 or more); fixed. Every content condition passed, including C11 fix-by-fix, and dist covers the final strings. It found two pre-existing copies of corrected claims (goaltender ~:786 neck-injury paraphrase; playing_without_the_puck body ~:273 "getting to the spot first" one chunk ahead of its HC/CARHA limit, the same at HEAD), now plan rows. |
| site-reviewer (Playwright Chromium, real 400×860 and 1440×900, light and dark; 7 pages in all four cells, all 21 pages at 400 light) | Nothing blocking. All 49 leads present in the built HTML, each as heading → `<p>` → `dl.facts`. Both warn-inline runs render correctly. 0 overflow; anchors clear of the 56px header; console and network clean. RECOMMENDED: 12 leads are 100% bold and short ones read as a subtitle (plan row). |

### C11
Authoring agents wrote the 51 leads. The coordinator applied the fixes listed above, each in the wording a reviewer supplied, plus:
- the same "hooking or interference" correction on the matching facts line ~:258 (the rules-verifier's wording, propagated to the second carrier of the claim);
- removal of the two dropped leads.

The coordinator wrote no new content wording. The site review ran on the final tree.

### Checks after the last content edit
- check_facts exit 0, run with no pipe.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs as above.
- check_facts_antecedents: no hit on a changed line.
- Full `npm run build` (absolute binary) exit 0 through check:links: 57 pages, all resolve.
- check_callout_flow --bare 0 on all 21 pages.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules, exceptions, divergence, citations | rules-verifier on every rule claim in the leads, against CARHA 2026, NHL, IIHF 2026/27 rules and situations, Hockey Canada, USA Hockey, PWHL, and the IHUK files for the slap-shot sweep |
| D5 Provenance | the USA Hockey / Tator cervical-spine claim checked against `huh.txt` |
| D6 Negatives | slap-shot restrictions swept across every book on disk: only CARHA prices a point shot |
| D7 Cardinal rule | content-reviewer. Coaching choices are named with an alternative (centre fly, five-player rotation, pivot side, faceoff alignments, entry-defence systems) |
| D8 Numeric ownership | no new figure; the switching timeframes keep their disclosure |
| D9 Summary layer | leads checked against Key focus, Overview and Key Takeaways in four documents (sampled). No contradiction found |
| D10 Key-facts layer | one facts line changed (the hooking/interference claim), checked standing alone |
| D11 Reader safety | safety-reviewer, rendered |
| D12 Read-aloud | 22 files rendered. Limits were checked to land in the lead's own sentence; R1 and R2 fixed chunk-split limits |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build; site-reviewer anchor tests |
| D15 Rendered site | site-reviewer on the final build |

## What this method could not have found
- A lead that is faithful to its own section but contradicts a summary layer in the 18 documents whose Key Takeaways were not read.
- A limit that lives in a sibling section or a sibling document rather than the section under the lead.
- The 14 pages the site-reviewer checked by DOM only, not by eye.
- Real phones and screen readers. The narration audio lags until it is rebuilt.

# W310: the delayed-offside hit priced for USA Hockey readers, the "no whistle" sweep finished, and CARHA's injury-by-interference ejection added to center (12 November 2026)

**Files:**
- content/foundation/rules_primer.md (:202, :204, :214, :353, Common Mistakes :1124, KT1 :1188)
- content/hockey-iq/time_and_space.md (:499, facts)
- content/systems/zone_entries.md (:237 facts, :248, :266 facts, :279, :1153 body bullet in §11)
- content/technique/body_contact_and_battles.md (:736 facts, :743, :1582 facts)
- content/positions/center.md (:786 facts, :905 Common Mistakes, :977 KT9)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This round closes the open items in the W307–W309 plan row:
- (1) the "no whistle" sweep of zone_entries and body_contact_and_battles;
- (2) rules_primer :204 omitting HC 6.11(d)(i)'s "attempts";
- (8) the Situation 38 wording;
- (9) USA Hockey checking-division readers hearing no price for the hit in three summary layers;
- (5) center's summary layers giving CARHA only the charge rungs.

## What changed
**"No whistle" sweep.** zone_entries :248 said "Hockey Canada and CARHA stop play only for the puck — no pressure trigger, no contact trigger". That is false for HC 6.11(d)(i), which says "deliberately plays or attempts to make a play on the puck or against an opposing player … knowing that they are off-side … play will be stopped immediately".
- :248 now reads: "Hockey Canada's and CARHA's delayed-offside whistles name only the puck … (6.11(b)(ii); 72(e)). Hockey Canada can also stop play for an intentional offside once you deliberately play, or try to play, the carrier knowing you are offside (6.11(d)(i)), but that call prices only the offside".
- The zone_entries :1153 body bullet (§11, "The defender's version of the offside rule"), which is carrier-facing, now reads "Under Hockey Canada and CARHA, no whistle you can rely on stops a forechecker before they reach you."
- The :237 facts line adds "but never prices the hit".
- body_contact_and_battles carried no "give none" claim.

**HC 6.11(d)(i) "attempts" and USA Hockey Situation 38.**
- rules_primer :204 now reads "a deliberate play, or an attempt at one".
- rules_primer :202 and zone_entries :248 now say the Casebook tells linespersons to "be ready to stop play" once contact is made. The book says "should be alert to stop play".

**USA Hockey price.** USA Hockey has no 41.1-style clause; 624(d) covers icing only. Its ordinary rules still reach the hit:
- 603: "causing them to go dangerously into the boards";
- 607: "more than two strides or travels an excessive distance", including jumping and accelerating through a check (Casebook 607 Situation 3: "Yes");
- 603(a) reads "A minor plus a misconduct or major plus game misconduct"; 607(a) reads "A minor plus a misconduct or a major plus a game misconduct".

USA Hockey is now covered at these sites, with differing detail:
- **with the tier**, rules_primer :1124: "…sending them dangerously into the boards is still boarding there, and accelerating or jumping into the hit can be charging however few strides you take, each at least a minor and a misconduct (603, 607)"; and KT1 :1188;
- **cited (603, 607), no tier**, zone_entries :266 (295/300) and rules_primer :214. The latter gives the summary layers a body to rest on;
- **"USA Hockey's (ordinary) boarding and charging rules still apply", no citation and no tier**, time_and_space :499 (300/300) and zone_entries :279 (inside the ⚠️ run). time_and_space cites neither 603 nor 607 anywhere.

**"USA Hockey reaches only the icing half."** Heard alone, this could sound as if an offside hit is not boarding under USA Hockey. Rewritten at body_contact :743 and :1582 (298/300) and rules_primer :353, so that 603 still reaches a dangerous one.
- body_contact :736 (197/200) now reads "…Hockey Canada 7.2; USA Hockey 603 if dangerous, and 624(d) bars needless icing contact". At HEAD it read "…USA Hockey reaches only the icing half, at 624(d)". This round's first draft let "if dangerous" attach to all five books, and the rules-verifier's wording corrected it.

**center.md.** :786 (300/300), :905 and KT9 named HC 8.5(b)'s ejection for injuring a goalie by interference but not CARHA's. They now add CARHA 66(e) ("A Major penalty shall be imposed on any player who injures an opponent by interference"). With 30(a), that major is an ejection. :486 was left as it was: it names no HC interference limb, and its instruction covers the act.

**Markers:** no ⚠️ added or removed. Marked units are unchanged: rules_primer 197, time_and_space 20, center 73, zone_entries 49, body_contact 198. 0 LOST, 0 SPLIT HALF.

**Not changed (another owner):** forechecking_systems :975 and :989 carry the same "only the icing half" shape (plan row).

## Reviews
| Reviewer | Result |
|---|---|
| W310 author | Two passes: the plan items, then both reviewers' findings |
| rules-verifier | First pass: CONFIRMED except two items cheaper than the book. "More than two strides" read as a safe harbour (607 Note "or travels an excessive distance"; Situation 3), and :736's "if dangerous" parse. Its :736 wording was applied verbatim. Confirmed: no age-scoped change to 603(a)/607(a); HC 8.5(b) mandatory on both limbs; CARHA 66(e) with 30(a) is an ejection. Narrow re-check of the reworded lines: all ten CONFIRMED. Optional :237 "prices only the offside, not the hit" (300/300) was not applied, because the safety-reviewer found the current line safe. |
| safety-reviewer | First pass: nothing blocking. 6.11(d)(i) is never offered to the carrier, and every voiced-alone unit is safe. It found three sibling units still on the old premise (zone_entries :266/:279, rules_primer :214) and the "icing half" shape, all applied. Narrow C6 re-check: OK on all four points. No unit prices the hit below the book or leaves it unpriced for USA Hockey; the voiced-alone units are safe; the harness shows 1 warn-inline and 0 asides on :279; "however few strides you take" is clear by ear. |

### C11
The author wrote every content change across two passes. Three changes rework reviewer sketches: (a) :1124, (f) the "icing half" rewrites, and (g) :237. Both reviewers re-checked those. The coordinator wrote the plan row and this record.

### Checks after the last content edit
The last content edit was at 19:08:01. Both narrow re-checks were dispatched after the author's final report and returned after it, and no content edit followed them. A full `npm run build` (absolute binary) started after that edit (dist 19:12). These were then run:
- check_facts, check_links --quiet, check_absolutes, check_caption_pairs, check_geometry, check_secrets
- check_marker_pairs, and check_callout_flow --panels / --bare on all five files

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: HC 6.11, 7.2, 8.5; USA Hockey 602, 603, 607, 624(d), 630 and the Discipline Policy, with Casebook 603/607/630 Situations; CARHA 30, 52, 66, 72; NHL, IIHF (both editions) and PWHL 41.1 |
| D4 Citations | every new rule sentence cited and verified |
| D5–D8 | not engaged |
| D9 Summary layer | changed: rules_primer Common Mistakes and KT1, center Common Mistakes and KT9. Read and unchanged: zone_entries Common Mistakes :1198, KT4 :1259 and Key focus :22, each pricing the hit as checking from behind (commit gate) |
| D10 Key-facts layer | time_and_space :499; zone_entries :237, :266; body_contact :736, :1582; center :786. Each is voiced alone and cleared by the safety-reviewer. No facts-reviewer was run. |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | the three changed files re-rendered on re-check; the other two rendered on the first pass |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked paragraph; no site-reviewer was run (text only) |

## What this method could not have found
- USA Hockey Rule 640(d), "Body check with no effort to gain possession of puck" (Summary of Penalties: minor, or major plus game misconduct). It plausibly also reaches a delayed-offside hit, and its body text was not read.
- "Icing half" or "two strides" wordings in documents outside these five (forechecking_systems :975/:989 are known).
- How the longer summary units sound. That needs an ear test.

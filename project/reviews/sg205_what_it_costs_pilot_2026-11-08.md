# SG205: the "What it costs" structural pilot on defensive_zone_coverage, with two body_contact_and_battles repairs (8 November 2026)

**Files:**
- content/systems/defensive_zone_coverage.md
- content/technique/body_contact_and_battles.md (two clauses: :820 and :1488)
- project/what_it_costs_design.md (new: the design, including the owner's "Keep the section tight" rule)
- project/plans/OPEN_ITEMS.md (restructure row: pilot shipped, lessons, open items)

## Source
The owner made readability and diagrams the top priority. They chose a structural method: one "What it costs" section per page. The ladder-trimming method was measured at 0.3% and retired. When the first version voiced as 38% of the episode, the owner chose "keep it, but tighter".

One authoring agent owned the page through six passes (SG205a–f). The coordinator applied the final reviewers' exact wording (see C11).

## What changed

### defensive_zone_coverage
- **New `## What it costs` section** before Common Mistakes, with ten subsections:
  - a hit from behind;
  - missing the next game;
  - pinning, freezing and boarding at the wall;
  - the cross-check;
  - the stick lift and the chop;
  - moving a screener;
  - screens and contact at your crease;
  - the scramble;
  - a loose puck in your crease;
  - over the glass, icing and the trapezoid.
- **How each subsection is built:**
  - It opens with one spoken lead: the instruction plus the top tier.
  - It keeps the limbs specific to this page's scenes: mandatory and ejecting tiers, exceptions and permissions with their limits, divergences, and British limbs.
  - It points to the owner page for ladders the owner carries at the same tier and scope. The owner pages are Body Contact and Battles, Breakouts, Special Teams and Rules Primer.
- **Body sections:**
  - Each keeps its instruction plus the scene's consequence in the same paragraph. The render shows 12 instruction–tier pairs, each sharing a chunk.
  - Each ends on a framed pointer: "What X costs comes later, in What it costs."
  - Two in-the-moment warnings were added that the first move had left only in the section:
    - pinning the player is holding in every book, boarding is never capped at a minor, and IIHF 101.1 covers women's hockey;
    - a loose puck covered in your crease with your own net empty is an awarded goal in most books.
- **The crease goal claim, at every site:** body, lead, shove bullet, Common Mistakes. It now reads: the goal often still counts; under USA Hockey or CARHA it can come off if the attacker interferes with your goalie; the shove can be called on you.
  - USA Hockey's test is 617(c)(4) "interfering", wider than contact.
  - CARHA's is 66(b): the goal comes off if the attacker makes no attempt to avoid the goalie.
  - Hockey Canada keeps the goal only where the attacker "is unable to avoid contact" (Interpretation 1 to 8.5(a)).
  - KT6 dropped the goal clause, which had told a defender the shove pays.
- **Restored from HEAD, verbatim** (each was dropped by the tightening pass and caught by review):
  - the NHL/IIHF trapezoid bullet;
  - "The next game." (USA Hockey 404(b)/403(b), CARHA 32(c)/(d), Hockey Canada 4.8(c), NHL/PWHL 23.6);
  - "Above the minor." (the interference majors);
  - "Once it reaches the head, under Hockey Canada" (7.6/7.7).
- **The Hockey Canada stick lift:** "only on violence or an injury — and a touch to the head is still at least a minor (7.6(a))". The previous sentence was a carve-out whose counterweight had left the section.
- **"held here" restored** to the British over-the-glass sentence and KT11.
- **The British trapezoid sentence** now reads "In Britain its status is unsettled, so play as though it binds, and ask your league" (consistent with rules_primer and uk_rules).

### body_contact_and_battles
- **:820:** after Hockey Canada 4.10(a), "(whether that reaches practices too, it does not say, and no Hockey Canada casebook is held here)". This carries the disclosure that left defensive_zone_coverage with the "After a match penalty" bullet.
- **:1488:** USA Hockey Casebook 609 Situation 2 is now described at its own net-front facts. A stick steer with no arm extension is not cross-checking, though *"if a competitive advantage is gained and there is no puck in the area, an interference penalty may apply"*. Extended arms with deliberate contact is a cross-check. The page had described the Situation only by its boards commentary.

## Measured (check_readability, render)
| | words | rule refs | ⚠ | chunks | billed chars | What it costs share |
|---|---|---|---|---|---|---|
| HEAD | 19,064 | 250 | 44 | 73* | 161,739* | none (spread across nine sections) |
| shipped | 17,498 | 178 | 34 | 61 | 133,791 | 14 of 61 chunks (≈23%) |

\* The chunks and billed-characters figures in the HEAD row were measured on the first-move version (SG205b), not on HEAD itself. The HEAD render was not kept.

## Defects found by review, in order
1. **SG205a, the first move:** two in-the-moment warnings were left only in the section (pinning the player; the empty-net awarded goal). "held here" was dropped in transit. Links were voiced as bare parentheticals.
2. **SG205c, the tightening.** Four limbs were dropped, each making the page cheaper than HEAD:
   - the NHL/IIHF trapezoid, leaving "No trapezoid elsewhere" with no antecedent;
   - USA Hockey 404(b);
   - the interference escalation;
   - the Hockey Canada head-contact counterweight, while six units still voiced "(under Hockey Canada, while it stays off the head)". This one was caught only at SG205d, by a citation census.

   **The author's removed-units list was missing about 45 units and listed one that had not been removed.**
3. **SG205d:**
   - The crease clause used "hit" for USA Hockey's "interfering" test, and stated it flat, which tells a defender the shove pays.
   - The pinning lead's "because" was a non-sequitur.
   - A Casebook 609 quotation was cut at its condition.
4. **SG205e:**
   - The CARHA crease sentence called CARHA "the same shape" as USA Hockey, but 66(b) writes an effort condition.
   - The Hockey Canada lift sentence was a second carve-out without its counterweight.
   - "The full price of X" overpromised for subsections that point out.
   - The screener lead read the discretionary major as automatic.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (SG205a rewordings) | All 7 CORRECT; two lost-local-consequence FIXes |
| safety-reviewer (SG205a page) | Nothing blocking; R1–R3; audio share 38% raised to the owner |
| site-reviewer (SG205a, built HTML) | Headings, both contents lists, every in-page link target, 25/25 amber runs, facts panels: no defects. Visual pass NOT done (Chrome extension refused localhost) |
| rules-verifier (SG205c parity) | Owner parity holds for nearly every limb; FIX trapezoid; stale pointer; the crease claim (CARHA); disclosure lost |
| safety-reviewer (SG205c) | BLOCKING ×2 (trapezoid, USA Hockey 404(b)); R1–R3 |
| rules-verifier (SG205d) | No cheaper finding; WORDING on the crease test, trapezoid, pinning, 609 |
| safety-reviewer (SG205d) | BLOCKING: HC head-contact counterweight; R1–R5 |
| rules-verifier (SG205e) | No cheaper finding; WORDING on the screener lead and pointer frames |
| safety-reviewer (SG205e) | **CLEAR**; R1 (CARHA effort condition), R2 (HC lift counterweight), applied |
| body_contact_and_battles :820 and :1488 | rules-verifier SG205d (item 6: :820 CORRECT; :1488 quotations verbatim, WORDING: condition cut) and SG205e (items 5–6: both CORRECT, verbatim against usah_casebook.txt 609 Sit. 2 and hc.txt 4.10(a)); safety-reviewer SG205d (R4/R5) and SG205e (both verified; the steer permission keeps interference and arms-extended limits in the same sentence) |

### C11
- The authoring agent made every content edit through SG205e.
- The coordinator applied the SG205e reviewers' exact wording:
  - rules-verifier: the pointer frames ("What X costs comes later") and the screener lead plus its Common Mistakes twin ("it can go above two minutes");
  - safety-reviewer: R1, CARHA "comes off if they make no attempt to avoid your goalie (66(b))", with "it" made "the goal" for the antecedent; R2, the Hockey Canada lift floor and "violence".
  - Two plural agreements (the lift and the chop, the scramble fouls: "cost").
- The coordinator wrote the design file, the briefs, the plan row and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets and check_tables all exit 0.
- check_marker_pairs: 0 LOST on both files. defensive_zone_coverage has 43 marked units against 53 at HEAD; each "no longer present" unit is a claim sent to an owner page that voices it marked. There are 4 split-half candidates: new facts lines, a pointer, and an unmarked lead whose next bullet is marked.
- The changed units were read de-tagged in the final render (61 chunks).
- Full `npm run build` with the absolute binary, after the last content edit: exit 0, including check:links (57 pages, all internal links and anchors resolve); page HTML 14:04:15, `sw.js` 14:04:47, content last edited 14:02:49. `check_callout_flow --bare`: 0 on the page.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×4 |
| D2 Exceptions | 69.1 effort proviso; USA Hockey 625(b) position-only; CARHA 66(b) effort limb; HC Interp. 1 to 8.5(a); 7.6 supersession; trapezoid skate-contact |
| D3 Divergence | Crease goal across six books; next-game ladder; interference majors |
| D4 Citation integrity | All rewordings checked against sources on disk (hc.txt, not -print) |
| D5 Provenance | Quotations verbatim (609 Sit. 2, 66(b), 4.10(a)) |
| D6 Negative claims | "no British rulebook held here amends the IIHF's"; IIHF has no match penalty; no Hockey Canada casebook on disk |
| D7 Cardinal rule | Every lead and body unit opens with what a player does |
| D8 Numeric ownership | Ladders now point to their owners rather than restating them |
| D9 Summary layer | KT4, KT6, KT11, Common Mistakes layer-tested by safety ×4 |
| D10 Key-facts layer | 46 ladder facts lines removed with limbs traced; new scene facts lines checked |
| D11 Reader safety | safety-reviewer ×4, each a full-page listener read |
| D12 Read-aloud | Rendered every pass; chunk share measured |
| D13 Folklore | None |
| D14 Structure, links | check_links; built-HTML anchor audit |
| D15 Rendered site | Built HTML audited twice (headings, both contents lists, 119/119 in-page links, 46 warn-inline, 0 bare glyphs). **Visual pass not done**: the Chrome extension refused localhost, 127.0.0.1, the LAN IP, another port and file://. The commit gate ruled shipping without one the owner's call; **the owner chose (8 Nov 2026) to ship and have a site-reviewer check the live production page after deploy**, with any layout defect fixed in a follow-up |

## What this method could not have found
- **A counterweight that HEAD never had.** Every counterweight search was anchored on HEAD's text.
- **Owner parity at the level of each owner sentence's every qualifier.** The SG205c rules-verifier read the owner pages; later passes checked by presence.
- **How the page looks.** Layout, both themes and phone width are unchecked in a browser.
- **CARHA 66(b)'s internal ordering, and whether "head first into the boards" is "contact to the head" under Hockey Canada 7.6.** The corpus ships the conservative reading of each.
- **Sibling pages that state the crease goal claim** in the old "goal generally stands" form.

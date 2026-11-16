# W377: the last over-half phone screens from the first site-wide census, and Hockey Canada's mandatory head-contact tiers in rules_primer (16 November 2026)

**Files:**
- content/off-the-ice/equipment.md
- content/foundation/rules_primer.md
- content/systems/forechecking_systems.md
- content/systems/game_management.md
- site/src/diagrams/scanning_and_anticipation.mjs
- site/src/diagrams/puck_support_and_spacing.mjs
- site/src/data/diagrams.json (rebuilt: only `scan-before-a-wall-reception` and `support-a-battle-from-outside` changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave had two read-only inputs, both run under W376.

**1. The first site-wide amber census.** It measured all 41 pages in Playwright Chromium at 400×812 DPR 2, light, plus 1440 for every page over 45%.
- 36 pages were under half.
- 0 bare glyphs, 0 untreated strong glyphs and 0 panels anywhere.
- Five pages had a 400px window over half:

| Page | Worst window | Cause |
|---|---|---|
| equipment | 56.8% | Common Mistakes :813, a 430-char HC/CARHA amber tariff |
| puck_support_and_spacing | 55.0% | caption `support-a-battle-from-outside`, 486 chars |
| scanning_and_anticipation | 52.4% | caption `scan-before-a-wall-reception`, 515 chars |
| puck_handling | 52.4% | the same caption |
| getting_started | 53.2% | KT12–14, three consecutive concussion takeaways |

**Ruling on getting_started:** left as it is. The amber is warranted, because a concussion red flag is the case the amber exists for.

The census also found the only tight cluster of long amber runs on the site: five runs of 306–569 chars in forechecking_systems' Sources trailer (:1189), plus one 394-char run in game_management's (:1358).

**2. The rules draft for W374 row (2).** rules_primer's "a head hit can end your game" understated Hockey Canada's mandatory tiers, 7.6(b)¶2 and 7.7(b)¶1/¶3.

## What changed

**A. equipment :813, the helmet-before-a-fight bullet.**
- No word changed.
- The ⚠ moved off the 430-char HC/CARHA tariff onto the bullet's instruction: "Keep it on, and never grab at an opponent's helmet, cage or chin strap." (71).
- On the safety reviewer's MIN-1, the tariff was split and a glyph added. HC's ejection limb is now amber: "Under Hockey Canada it is also a major and game misconduct if it causes an injury, even by accident, and a match penalty if done with any more than minimal force." (162). The HC/CARHA double-minor and match floor stays plain bold.
- HC's injury and above-minimal-force ejection limbs are now amber, as is USA Hockey's match. The HC/CARHA double minor, and their match "if used to gain an advantage, punish or injure", stay plain bold (the commit gate noted this match is also an ejection tier; plan row). The bullet's amber went from 555 to 358.

**B. The two captions: sentence order only, word multiset equal to HEAD.**
- **`scan-before-a-wall-reception`** (hosts: scanning_and_anticipation, puck_handling). The amber went from 515 to 64 and is now only "Never turn your back to anyone coming at you, and never duck."
  - The hazard sentence stays directly before the posture sentence, because "take it on your forearm and hip" takes its meaning from it (safety MAJ-1, below).
- **`support-a-battle-from-outside`** (host: puck_support_and_spacing). The amber went from 486 to 251.
  - The amber keeps both prohibitions and the from-behind limb, because no other amber on the host page carries that limb (the W375 rule).
  - The posture sentence and the `SHOULDER_TAIL` constant come before the glyph, in the order `wall_contact_clauses.mjs` requires.
- Stale comments in both modules were corrected.

**C. rules_primer: Overview :31, Common Mistakes :1154 and KT5 :1206.**
- Each now carries: "Under Hockey Canada it must if it injures them in minor and female hockey, or in Junior and Senior if it is highly violent or any foul or illegal hit injures their head on the glass, ice or boards, and it is a match at every level if they cannot protect themselves."
- Common Mistakes adds: "In minor and female hockey a third head-contact penalty in one game ejects you too."
- KT5 went from 68 to 107 words.
- **Mandatory tiers in KT5, before and after:**

| Tier | Before | After |
|---|---|---|
| USAH 620(b), careless | kept verbatim | kept verbatim |
| HC 7.6(c)/7.7(c) match | kept | kept, now scoped "at every level" |
| HC 7.6(b)¶2 | absent | added |
| HC 7.7(b)¶1 | absent | added |
| HC 7.7(b)¶3 | absent | added |

Nothing was cut, and no "must" became a "can".

**D. Sources trailers.**
- forechecking_systems :1189 lost five glyphs and game_management :1358 lost one, leaving those six runs plain bold. Only "⚠️ " was deleted; no word or `**` changed. This follows the W362 shooting precedent.
- **Render check:** a render (85 and 88 chunks) confirmed that no trailer phrase is voiced, while control phrases from the body were found.
- **What the runs are:** each is a search or reading note, not a hazard.
- **Spoken markers:** check_marker_pairs reports 0 LOST, because both trailer paragraphs still carry other glyphs.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier, draft (W376) | Read HC 7.6/7.7 in full. A single short clause cannot cover both divisions: injury is a mandatory trigger only in minor and female hockey, while in Junior and Senior the trigger is high violence or a head injury on the glass, ice or boards. Wording was drafted for all three sites. |
| rules-verifier, on the edit | All three sites OK. "At every level" is confirmed: Senior includes adult recreational hockey (hc.txt :2224–2226), and neither 7.6(c) nor 7.7(c) is limited to a division. The third-penalty ejection is confirmed (7.6(a)¶3; 4.8(b)(ii) Game Ejection). The Junior/Senior limb was narrower than ¶3's "fouled or hit illegally"; the fix was proposed as optional. The 7.6(b)¶2 injury trigger literally reaches only a minor-tier foul, an overstatement in the harsher direction, kept because a literal fix would make a deliberate hit sound cheaper. |
| safety-reviewer | **MAJ-1:** the first caption order left "take it on your forearm and hip" without an antecedent, so on a reception page it read as the puck. Fixed with the reviewer's order. **MIN-1:** equipment's HC/CARHA tariff was plain while USA Hockey's was amber. Fixed with the reviewer's split. **MIN-2:** the Junior/Senior limb understated 7.7(b)¶3. The author used the book's two triggers, "any foul or illegal hit", rather than the reviewer's "any illegal hit", because a trip into the boards is a foul, not a hit. support caption, KT5 voiced alone, the concussion limb and the trailers: clear. |
| final reads | rules-verifier: OK. The string is identical at all three sites, and the diff shows exactly three changed lines. safety-reviewer: CLEAR on all three findings. Both captions were re-read for any other pronoun left without its referent; none was found. |

### C11
The coordinator wrote no content.
- MAJ-1 and MIN-1 are the safety reviewer's exact text.
- MIN-2 is the author's wording. It differs from both reviewers' sketches only by adding "foul or", which is the rulebook's own trigger. Both reviewers then cleared it in their final reads.

## Checks after the last content edit
- build-diagrams ran after the last .mjs edit; only the two named captions changed.
- A full `npm run build` (absolute binary) exited 0. `dist/index.html` is dated 19:42:03, and `find content site/src/diagrams site/src/data -newer` returns nothing.
- check_links --quiet, check_facts, check_absolutes (caption layer certified), check_geometry and check_secrets: pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_caption_pairs: 0 violations.
- check_marker_pairs: 0 LOST and 0 SPLIT on all four content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: draft, edit and final read, against HC 4.4(a), 4.8, 4.10(a), 7.1(b), 7.6, 7.7, NHL 48, IIHF 48 and USAH 620(b) |
| D4 Citations | none added or changed; the new sentences cite no rule numbers |
| D8 Counts | "at every level", "a third head-contact penalty", and "minor and female" / "Junior and Senior", each re-derived from the book |
| D9 Summary layer | KT5 and the Overview read voiced alone by both reviewers; the claim was propagated to all three summary sites, with body :206, :433, :444 and :479 read and found consistent |
| D11 Reader safety | safety-reviewer, plus a final read |
| D12 Read-aloud | rules_primer rendered (133 chunks): Overview chunk 003, CM chunk 124, KT5 chunk 131, each one "Important." unit carrying every HC limb. The trailers were rendered and confirmed unvoiced. |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 19:42:03 build (below) |
| D5–D7, D10, D13 | not engaged |

**D15.** The site-reviewer covered seven pages in Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark: equipment, puck_support_and_spacing, scanning_and_anticipation, puck_handling, rules_primer, forechecking_systems and game_management.
- Every changed run renders as warn-inline with the glyph leading, at exactly the extents briefed. The HC/CARHA floor is bold in body colour, and the trailer runs are bold in the muted Sources colour.
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no off-origin requests and no horizontal scroll.
- **No 400px window is over 50% on any of the seven pages.**

| Page | worst 400px window, before → after |
|---|---|
| equipment | 56.8% → 38.0% |
| puck_support_and_spacing | 55.0% → 29.0% |
| scanning_and_anticipation | 52.4% → 8.7% |
| puck_handling | 52.4% → 47.4% (another section; the caption's own window is 6.9%) |
| rules_primer | 46.6% → 46.6% |
| forechecking_systems | 41.0% → 41.0% |
| game_management | 39.2% → 39.2% |

**Site-wide result:** with getting_started's concussion cluster ruled as warranted, every content page is now under half amber at 400px.

**1440 only:** forechecking_systems (59.4%) and game_management (80.7%) have windows over half, in sections this wave did not touch. They are the known full-height-SVG artefact: the window holds almost all diagram plus the tail of one caption.

## Found, not fixed (plan rows)
- **rules_primer head-hit sentence.** Its subject is "it" (a head hit), while the Junior/Senior boards trigger is now any foul or illegal hit. The safety reviewer's tighter sketch: "…or in Junior and Senior if it is highly violent, and so must any foul or illegal hit that injures their head on the glass, ice or boards…". This is wording, not safety.
- **rules_primer body :479.** It still reads "injures their head on the glass, ice or boards" without "any foul". That is narrower than 7.7(b)¶3, though not wrong in its context. Brief the claim, at every site in the body.
- **rules_primer KT5 is now 107 words,** the page's longest takeaway. Every added word is a mandatory tier.
- **Trailers.** forechecking_systems :1189 still has 31 short amber runs, and game_management :1358 has 9. They are the same kind of provenance text, and removing them is glyph-only. W362 removed shooting's entirely.
- **The census metric counts text inside the collapsed `details.sources` panel** as if it were on screen. No worst window this round fell there, but a future census should exclude it.
- **From the commit gate (not blocking):** equipment :813's HC/CARHA match "if used to gain an advantage, punish or injure" is an ejection tier left plain bold; KT5's "must" list does not name the HC high cross-check (7.6(b)¶3 / 7.7(b)¶2), which the page voices in KT8, CM :1142 and body :444; "them" in "it must if it injures them" has no antecedent at :31 and KT5 voiced alone; and "a match at every level if they cannot protect themselves" still omits 7.6(c)/7.7(c)'s attempt-to-injure limb (pre-existing).
- **getting_started KT12–14** (53.2%) stays as warranted. Revisit only if the owner wants a lower ceiling for concussion amber.

## What this method could not have found
- Hockey Canada rules outside 7.6 and 7.7 that price the same head injuries, such as boarding and checking from behind (rules-verifier, not reached).
- Whether Hockey Canada Members place adult women's hockey under 7.6 or 7.7. The book does not settle it, though the match tier is unaffected.
- Real devices, other browsers and screen readers.

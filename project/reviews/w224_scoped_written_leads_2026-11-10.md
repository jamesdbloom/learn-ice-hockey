# W224: scoped written leads for six panel-first sections; the last amber panel removed (10 November 2026)

**Files:**
- content/systems/faceoffs.md
- content/technique/passing_and_receiving.md
- content/systems/zone_entries.md
- content/systems/game_management.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The two "lead with the tactic" waves (W222 3d69b1d0, W223 75a87a57) left some sections panel-first on purpose. In each, moving the lead would have put a permission ahead of its limit. Two of them had been reverted on review for exactly that: faceoffs "Using your feet" and "The icing exemption at a shorthanded draw". The plan recorded each as needing a short written lead that carries its scope or limit in the same sentence. This wave writes those leads. It also fixes the one remaining amber panel in the corpus, game_management.md ~:937.

## What changed
1. **faceoffs "Using your feet".** The lead was rewritten and moved above the panel: "**Kick the puck back to a teammate, or open your skate as a backstop…, only where your book allows it — not under the IIHF, so never in British hockey.**" The paragraph keeps its ⚠️ ("Send the skate at the puck, never at the man").
2. **faceoffs "The icing exemption at a shorthanded draw".** The lead was rewritten and moved above the panel. Every limb is now in one sentence:
   - where your book grants the exemption (Rule 81.6);
   - not once a penalty expires and leaves you level, even with the player still in the box;
   - under USA Hockey only at Youth 15-Only and above, Girls 16U and above, High School and Adult;
   - under the NHL and PWHL not from a major's expiry to the next stoppage if no player was in the box to come out.
3. **passing_and_receiving "Backhand pass".** In "When to use it", the pointer "carries a safety rule of its own" became the instruction itself: "**never turn your back to anyone coming at you, and never duck** — see Receive with your body open to the ice". The paragraph then moved above the panel.
4. **zone_entries "The middle drive".** The definition now ends "**to the edge of the blue paint and off its red line, never into the paint and never into the goalie.**" It moved above the panel.
5. **zone_entries "Forechecking during a delayed offside".** The lead now reads "**…and never close on the defending carrier. You cannot count on the whistle coming first, and a carrier turned to retrieve the puck has their back to you, so a hit is checking from behind.**" It moved above the panel.
6. **game_management "Keep the hit off their head."** Only the glyph and bold boundaries moved: the paragraph opened with ⚠️ and rendered as a full amber panel. It now opens with the bold instruction, and ⚠️ precedes the first hazard clause. No words changed, and both glyphs are kept.

## Defects found by review, all repaired
- **rules-verifier, FIX (faceoffs icing).** The author's first wording pinned "not once an expiry leaves you level, even with the player still in the box" to the IIHF alone. NHL 81.6 and PWHL 83.6 write the identical clause, as do Hockey Canada 6.7(b) Note 1 and USA Hockey 624(b)(1) "determined at the time the penalty expires". As written, an NHL, PWHL, USA Hockey or Hockey Canada reader would have thought themselves still exempt. Replaced with the verifier's wording, which applies the limb to every book.
- **rules-verifier, WORDING (zone_entries delayed offside).** "whose back is to you, so a hit is checking from behind and you cannot count on the whistle" made every carrier turned and the whistle a consequence of that. Replaced with the verifier's wording. A narrow safety re-read confirmed "never close" stays unconditional and lands in one chunk.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Items 1, 3, 4 and 6 CORRECT. "Never in British hockey" holds: the In-House Rules change only the Rule 76 procedure, and the EIHL Casebook has no Rule 76, so 76.3(VI) applies. The NHL and PWHL have no skate bar. Hockey Canada 6.7(b) and CARHA 65(d) grant the icing exemption with no age limit. Item 2 FIX and item 5 WORDING both applied. |
| safety-reviewer | Nothing blocking. Each lead carries its limit in the same sentence and chunk. None is weaker than HEAD; four are stronger, because the limit now leads. game_management keeps its spoken "Important.". RECOMMENDED (not applied): the amber on the game_management paragraph falls on the "Under Hockey Canada…" scope clause, not on the plain-bold instruction. Moving it would need a word change, so it goes to the plan. |
| safety-reviewer (narrow, after the delayed-offside rewording) | Nothing blocking. Stronger than the previous wording and HEAD. The ban is unconditional, so a facing carrier is not heard as permitted. One chunk. |
| site-reviewer (Playwright Chromium, real 400×860 and 1440×900, light and dark, final build) | Nothing blocking. Each of the five leads is first under its heading, followed by the panel. game_management has 0 callout-warning; its run is warn-inline in both themes. 304 ⚠️ across the four pages, all warn-inline, 0 bare. The Backhand link lands clear of the header. No overflow; clean console. |

### C11
- The authoring agent wrote the six changes.
- After the reviews, the coordinator applied the rules-verifier's two replacements verbatim: faceoffs icing and zone_entries delayed offside. The second then had a narrow safety re-read.
- The coordinator wrote the briefs, the plan rows and this record.

### Checks after the last content edit
- check_facts: exit 0, no pipe.
- check_links --quiet: exit 0.
- check_absolutes: exit 0.
- check_marker_pairs: 0 LOST, 0 SPLIT HALF on all four files.
- Full `npm run build` (absolute binary): exit 0 after the last edit, through check:links.
- check_callout_flow --bare: 0. callout-warning in dist: 0 on all four pages. No amber panels remain in the corpus.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier: IIHF 2026/27 and v1.1 76.3; In-House Rule 76; EIHL Casebook headings; NHL/PWHL faceoff rules; NHL/IIHF 81.6, PWHL 83.6, USA Hockey 624(b)(1), Hockey Canada 6.7(b), CARHA 65(d); crease rules 1.7, 625(b), 69.3; delayed-offside triggers 83.3/85.3, 630(d)(2), 72(e), 6.11(b) |
| D2 Exceptions | icing exemption scope per book; the delayed-offside contact trigger exists in three books only |
| D3 Divergence | per-book scope inside each lead |
| D4 Citation integrity | the link target for Backhand checked |
| D5 Provenance | verbatim against sources/ |
| D6 Negative claims | "never in British hockey"; "no book bars an attacker entering the crease" (coaching, stricter) |
| D7 Cardinal rule | each lead states the tactic with its limit |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | not engaged (coaching body only) |
| D10 Key-facts layer | facts lines unchanged |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | rendered; each limit in the same chunk as its lead |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build; anchor clicked |
| D15 Rendered site | site-reviewer on the final build, all four pages |

## What this method could not have found
- Rules that price these acts under another heading; for example, a USA Hockey Casebook situation narrowing 624(b)(1).
- Whether CARHA counts on-ice strength with a player still in the box after expiry. CARHA writes nothing either way; the lead takes the conservative reading.
- Real phones and screen readers. The narration audio lags until it is rebuilt.

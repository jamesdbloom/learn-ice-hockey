# SG210: forechecking_systems — the 13-row rules panel becomes 5 coaching lines, the checking-from-behind ladder is voiced twice instead of six times, and the late-hit timing test is stated for every book (8 November 2026)

**Files:**
- content/systems/forechecking_systems.md
- project/reviews/sg210_forechecking_panel_and_restatements_2026-11-08.md
- project/plans/OPEN_ITEMS.md (SG210 shipped row and follow-ups; site checks run before commit again)

## Source
- **The 13-row panel.** The live site check after 76f0ffaa (SG206) found that "What your book allows when you get there" opened on a 13-row facts panel: 12 Rule lines, 2,619px tall at 400px wide. That put the first coaching paragraph about three and a half phone screens below the heading.
- **The restatements.** The SG206b safety reviewer had recorded that the checking-from-behind ladder was still voiced at about nine sites before What it costs restated it, and that "while it stays off the head" was voiced seven times.
- **Who did what.** One authoring agent owned the page through SG210, 210b, 210c and 210d. The coordinator applied the final safety reviewer's wording; see C11.

## What changed
- **The panel.** "What your book allows" now opens on 5 lines of what a player does:
  - may you check at all;
  - IIHF women's hold-ice;
  - seal the wall where contact is permitted;
  - the gap-and-timing read;
  - never the third man, never veer or brake.

  The book-by-book Rule lines moved into the What it costs facts blocks. Each moved line traces to a sentence in its new subsection.
- **Restatements.**

  | Phrase | Voiced before | Voiced after |
  |---|---|---|
  | The "every book but USA Hockey" ladder | 6 times | 2, both in What it costs |
  | "While it stays off the head" | 7 times | 3 |

  Each per-system scene now says "in most books ends your game — under USA Hockey too if forceful at the boards, head first or reckless", which is the pilot's verified wording. The Hockey Canada 7.5(c) and CARHA 53(b) match stays at the 2-1-2 and flush scenes.
- **Late hits.** The body now states each book's timing test at the scene:
  - NHL 56.1: *"immediately following his loss of possession"*;
  - IIHF 56.1: a window of opportunity, and the checker in the immediate vicinity;
  - Hockey Canada 8.3: an arm and a stick.

  It then states USA Hockey's limits:
  - the rulebook writes no window (640(b));
  - Casebook Standard of Play Situation 10 has four conditions: you tried for the puck, you were within an arm and a stick, the check was already under way, and you kept the force down and took no advantage of a defenceless opponent.
- **Corrections found by review and applied:**
  - **HC 7.5(a) Interpretation 3.** The 7.3 exclusion attaches to the pin only, not to accidental contact. 7.3 itself excuses incidental contact.
  - **British checking ages.** "No IIHF or In-House Rules checking age". IHUK's Junior Rules of Competition make junior-league U10 and U12 non-checking and U14 to U19 checking. The Women's NIHL is non-checking. Otherwise, ask your league.
  - **The 608(c) mandatory match** is restored at the behind-them scene.
  - **"A major ends your game"** replaces "her game". The old wording read as the victim's game.

## Measured (check_readability; render)
| | HEAD (76f0ffaa) | shipped |
|---|---|---|
| Facts rows opening "What your book allows" | 13 | 5 |
| Ladder voiced | 6 | 2 |
| "off the head" voiced | 7 | 3 |
| Prose words | 21,992 | ≈22,232 (+1.1%) |
| ⚠ markers | 90 | 90 |

Prose rose because the reviewers restored conditions: Situation 10's four limbs, Interpretation 3's two limbs, and the British ages. The gain is in layout and in the restatement count, not in length.

## Defects found by review, in order
1. **SG210.** My brief prescribed "can end your game in every book here". That is cheaper than the truth under the NHL and PWHL, where any call ejects. It was replaced with "in most books ends your game".
2. **SG210 safety (BLOCKING).** A new gap-test Read line implied that a hit inside an arm and a stick is legal.
3. **SG210 rules (WORDING).** Interpretation 3's 7.3 exclusion was attached to the wrong limb. Situation 10's single "in motion" condition was heard as sufficient. 640(b) was quoted ungrammatically.
4. **SG210c safety (BLOCKING ×2).**
   - "Check the gap, not the clock" told NHL, IIHF and PWHL readers that time does not matter. Time is the NHL's actual test.
   - The Situation 10 facts line named three of its four conditions.
5. **SG210d safety (BLOCKING).** The Situation 10 facts line still lacked "took no advantage of a defenceless opponent" while saying "only if".
6. **SG210d safety (RECOMMENDED).** The Read line ended on a bare "rulebook writes no window". Common Mistakes called Hockey Canada's distance "the test".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier ×3 (SG210, 210c, 210d via safety) | Nothing cheaper than any book. WORDING on Interpretation 3, Situation 10, 640(b), British ages, and the :613 pronoun |
| safety-reviewer ×3 | SG210: B1 (gap test) plus R1–R4. SG210c: B1 (NHL timing), B2 (Situation 10, 3 of 4). SG210d: F1 (Situation 10, defenceless limb), R1 (Read line), R2 (Common Mistakes) |
| site-reviewer (live, 76f0ffaa) | The source of the panel finding. Links, amber runs, 400px layout and the console were all clean |
| site-reviewer (local preview, before commit) | Desktop and 400px, light and dark, built from the 22:39 dist: 143/143 ⚠️ amber, 0 bare, 0 panels; 125 in-page links clear of the sticky header; Essentials switch works; no overflow at 398px; clean console, no off-origin requests. RECOMMENDED: panel still ~one phone screen; late-hit test told four times (both recorded in the plan) |

### C11
- The authoring agent made the edits through SG210d.
- The coordinator applied the SG210d safety reviewer's wording:
  - :1055: "…you kept the force down and took no advantage of a defenceless opponent… (Standard of Play, Sit. 10)", the reviewer's alternative wording;
  - :1090 Common Mistakes: "One test is the gap (Hockey Canada 8.3)".
- **For the :605 Read line the coordinator merged the reviewer's sketch to fit the 200-character cap.** It now reads "…more than an arm and a stick away when it left, you were late; inside it, check at once or not at all. USA Hockey's rulebook has no window; never stretch it a stride". This keeps "rulebook", which the rules reviewer required because the Casebook does give a rule of thumb, and the reviewer's "don't stretch it" limit. **This wording is the coordinator's, not a reviewer's verbatim text.** It is for the commit gate to rule on.
- The coordinator wrote the briefs and this record.

### Checks after the last content edit
- check_facts: exit 0, no pipe.
- check_links --quiet: exit 0.
- check_absolutes: exit 0.
- check_marker_pairs: 0 LOST. The split-half candidates were read by the safety reviewers.
- Full `npm run build` (absolute binary) after the last content edit: exit 0, including check:links (57 pages, all internal links and anchors resolve); check_callout_flow --bare: 0 bare glyphs.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3, every reworded and moved line against the books |
| D2 Exceptions | Interpretation 3 (two limbs); Situation 10 (four conditions); 640(b) adult male; 56.1 provisos |
| D3 Divergence | NHL/PWHL time vs IIHF two conditions vs Hockey Canada distance vs USA Hockey Casebook |
| D4 Citation integrity | each pass |
| D5 Provenance | quotations verbatim against sources/ (rules-verifiers, safety reviewers) |
| D6 Negative claims | "No IIHF or In-House Rules checking age" (swept); "USA Hockey's rulebook has no window" (640(b)) |
| D7 Cardinal rule | the panel is now instructions; each scene leads with what to do |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Key focus, Common Mistakes and Key Takeaways checked voiced alone; Common Mistakes :1090 scoped |
| D10 Key-facts layer | facts traceability rechecked after every move; caps checked |
| D11 Reader safety | safety-reviewer ×3 |
| D12 Read-aloud | rendered every pass; facts lines read voiced alone |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | **site-reviewer on the local preview before commit** (the owner fixed the Chrome extension, 8 Nov): desktop and 400px, light and dark. 143/143 ⚠️ in warn-inline, 0 bare and 0 panels; 125 in-page links land clear of the sticky header; Essentials switch works; facts blocks have no overflow at 398px; no console errors and no off-origin requests. First coaching paragraph under "What your book allows" now starts 964px below the heading at 400px (2,619px panel before). RECOMMENDED, recorded in the plan: the 5-line panel is still about one phone screen; the late-hit timing test is told four times in slightly different orders |

## What this method could not have found
- **A third copy of the gap-test or Situation 10 claim** worded differently elsewhere in this page or a sibling page.
- **Whether "check at once" at full speed inside the gap is still a charge or a hit on a vulnerable player.** That is technique, not timing.
- **What the browser pass could not see.** A real phone (mobile user agent, toolbar, text-size adjustment), other browsers, screen readers, keyboard focus order, the 320px reflow, and the audio player with audio loaded (audio is uploaded to production separately).

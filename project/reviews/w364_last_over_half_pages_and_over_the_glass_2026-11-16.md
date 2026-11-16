# W364: the last over-half amber pages, the defender step-up caption, and "Over the glass" priced book by book (16 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/positions/goaltender.md
- content/systems/special_teams.md
- site/src/diagrams/defender.mjs
- site/src/data/diagrams.json (rebuilt; only defender-step-up changed)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave takes the W363 plan rows (record `w363_over_half_amber_pages_2026-11-16.md`):
- (1) bcb CM :2061 (255 characters) kept its bullet at 55.3%;
- (2) bcb Key Takeaways (58.0%), goaltender Common Mistakes (53.6%) and the defender step-up run (48.3%);
- (3) special_teams "Over the glass", using the rules-verifier's text.

## What changed
A caption's amber runs from the glyph to the caption end. An inline amber run ends where its `**` ends.

**A. body_contact_and_battles**
- **CM :2061 (words changed).** Now reads: "Even with no intent to injure, three books make a match mandatory for a hit from behind: ⚠️ **under Hockey Canada and CARHA when the player driven into the boards or the goal could not protect themselves, and under USA Hockey when it is reckless with excessive force**, on a vulnerable or defenceless player, boards or not (608(c))."
  - Amber went from 255 to 172 characters. The wording mirrors special_teams :1126/:1272 (W363).
  - It is not a bare "in three books": NHL/PWHL 21.1 mandate a match for deliberate injury.
- **Key Takeaways (no word changed).**
  - KT9: amber "Keep your leg in front of you: a slew-foot ejects you under the NHL, PWHL, IIHF and USA Hockey". The rules-verifier found that a 53-character first cut, read alone, was wrong for Hockey Canada (8.8 caps it below a major), so the bold was extended to the four books where it ejects.
  - KT10: amber 101 → 29 characters ("Head up, chin off your chest:").
  - KT11: amber 208 → 85 characters ("Never touch a goalie, even outside the crease — it can cost the goal or end your game"). The list of mandatory books is now plain text.

**B. goaltender**
- **CM :1692.**
  - Amber 162 → 70 characters: "Hockey Canada and CARHA penalise a stick clear from anywhere on the ice". The glyph moved, following the safety review.
  - The author found that the plain lead implied a deliberate clear was free outside the defending zone under the NHL, IIHF and PWHL. Now: "Under the NHL, IIHF and PWHL, a deliberate clear out of play is a minor from anywhere on the ice, and one straight out of the rink from your defending zone is a minor whether you meant it or not."
  - "CARHA's rule has no intent word" became "CARHA's goalie clause has no intent word". CARHA 55(a)'s bench-minor sentence and Note 2 say "deliberately".
- **CM :1693.** Amber 327 → 37 characters ("Under USA Hockey, assume a misconduct", 601(c)(10)). USA Hockey's game misconduct and match tiers, and Hockey Canada's minor-to-game-misconduct range, are kept as plain text.
- **Propagated the same claim:**
  - :762 body now names the PWHL (65.2(ii)).
  - facts :741 now names the PWHL. The first wording said "PWHL 65.2(ii), Table 11", but the PWHL table row cites 39.4(ii), so the table reference was dropped.

**C. special_teams :1132 (words changed).** Now reads: "⚠️ **Over the glass on purpose is a minor in all six books, and in some it is a minor even by accident** — on a kill, that is a 5-on-3. A deliberate one is the minor from anywhere on the ice. Under the NHL, IIHF and PWHL, straight out from your own zone is a minor even by accident. Under CARHA, a goalie who shoots it straight out with the stick takes a minor under a clause with no intent word; Hockey Canada's goalie clause has none either, though its rule opens on *deliberately*, so under both, plan on it even by accident."
- Amber went from 143 to 97 characters.
- The author softened the rules-verifier's original "Hockey Canada … even by accident": HC 10.1's opener and 10.1(a) say "deliberately", and only item (v) lacks the word.

**D. defender-step-up caption (defender.mjs; host: defender).**
- Reordered so the amber is only "A step-up closes space; it is not a hit, so the route ends in two bars: arrive and contain." (396 → 94 characters).
- The charging, head-down and "Two strides is a safe harbour in no book … charging in all six" sentences now sit before it as plain text.
- One word changed: "it is what the charging rules are written for" → "a step-up is what…". The antecedent moved with the reorder.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Nothing understated. Confirmed:<br>• :2061's scoped count: HC 7.5(c), CARHA 53(b) and USAH 608(c) need no intent; NHL/PWHL 43.4 are discretionary and 21.1 needs intent; the IIHF has no match.<br>• goaltender :1692/:1693: CARHA 55(a), HC 10.1(v), USAH 601(c)(10). No other book's mandatory floor equals a misconduct for the plain act.<br>• every limb of special_teams :1132 (NHL 63.2(ii)/(iii), IIHF 63.2(II)/(III), PWHL 65.2(ii)/(iii), USAH 610(c), HC 10.1, CARHA 75(b)/55(a)).<br>• the defender caption's only word change.<br>Findings, all applied:<br>• KT9's amber read alone was wrong for Hockey Canada and overstated CARHA (86(b) discretionary).<br>• special_teams HC goalie wording.<br>• On the post-review edits: "CARHA's rule" should be "clause"; the PWHL Table 11 row cites 39.4(ii), not 65.2(ii).<br>Also noted, adjacent and not changed (plan row): all six books make it a mandatory misconduct to shoot the puck out of an official's reach. |
| safety-reviewer | No critical or major. Minors applied:<br>• goaltender :1692's amber had lost its subject (glyph moved back).<br>• special_teams "even by accident in some — on a kill" could be heard as "only on a kill"; reworded with "rule" → "clause".<br>Cleared:<br>• KT9 (harsh only), KT11 (the instruction is never to touch the goalie; the list can be plain), KT10.<br>• :1693 (the USA Hockey match tier needs no amber; its aggravating conditions are deliberate).<br>• The defender caption reorder: it ends on the instruction and is not heard as permission.<br>Not applied: an optional fix to put "match" in :2061's amber, which would also need the identical :1126 change. |
| safety-reviewer, final read | All post-review edits CLEAR. Includes facts :741 voiced alone (PWHL Table 11 read positionally) and the goaltender PWHL propagation. |

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's prescribed text, with three exceptions:
- the goaltender :1692 lead, the author's finding, rules-verified on the final read;
- the :762 and :741 PWHL propagation, rules-verified;
- the author's "rule" → "clause" refinement at special_teams :1132, which the final rules read confirmed.

The last two goaltender word fixes ("goalie clause"; dropping ", Table 11") are the rules-verifier's prescriptions, applied verbatim after the final reads. They are plain text, with no glyph or bold boundary moved.

## Checks after the last content edit
`build-diagrams` ran once. A full `npm run build` then ran with the absolute binary after the final edit. It exited 0, ran through check-links, and produced `dist/index.html` at 15:05:26. `find content site/src/diagrams -newer` returns nothing, and the built goaltender page carries "goalie clause has no intent word".

The following all passed after the build:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets;
- check_counts --update (no change);
- check_callout_flow --bare: 0;
- check_caption_pairs: 0 violations;
- check_marker_pairs: 0 LOST and 0 SPLIT on all three content files;
- check_readability: 0 paragraphs over 1,200 characters.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier twice (all units, then every post-review edit) |
| D4 Citations | rule text quoted from sources/, including the PWHL and NHL penalty tables (layout extraction) |
| D8 Counts | "three books make a match mandatory" (scoped), "all six books", "even by accident in some" — each re-derived |
| D9 Summary layer | bcb KT9/10/11 changed, each read voiced alone |
| D10 Key-facts layer | goaltender facts :741 read voiced alone |
| D11 Reader safety | safety-reviewer twice |
| D12 Read-aloud | rendered SSML for every changed stem; marked units unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | see below |
| D5–D7, D13 | not engaged |

D15: a site-reviewer checked the 15:01 build on four pages (body_contact_and_battles, goaltender, defender, special_teams) in Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.
- Every changed run forms span.warn-inline.
- 0 bare glyphs, 0 panels, 0 console errors in 32 loads, no off-origin requests, no horizontal scroll.
- No W364 site now has a 400px window over 47%:

| Site | Before | After |
|---|---|---|
| bcb CM "Finishing a check…" | 55.3% | 46.6% |
| bcb Key Takeaways | 58.0% | 25.5% |
| goaltender CM | 53.6% | 15.8% |
| defender step-up caption | 48.3% | 40.9% |
| defender step-up caption at 1440px, including diagram text | 67.3% | 29.2% |
| special_teams "Over the glass" | — | 35.9% |

- The two goaltender plain-text fixes landed after that pass. They are in the 15:05 rebuild (grep above) and move no amber.

## Found, not fixed (plan rows)
- **Pre-existing windows at or over half a phone screen:**
  - bcb: 57.8%, from the 562-character "Never turn your back to anyone coming at you, and never duck…" caption run in "Do not turn your back to anyone coming at you, at the boards or in open ice".
  - goaltender: 50.5%, from a 453-character run in "What it changes about what you do".
- **Next 400px worst windows:**
  - defender: 47.8%, from a 391-character run in "Blocking Shots".
  - special_teams: 48.8%, from "Mistakes that get you hurt" (runs of 73 and 330 characters).
- **Misconduct for shooting the puck out of an official's reach.** In every book, putting the puck out of the reach of an official retrieving it is a mandatory misconduct:
  - NHL 39.4(ii), PWHL 39.4(ii), IIHF 39.4(II), CARHA 46(b)(3), HC 11.1(d)(iii), USAH 601(c)(3).
  - goaltender :1693's "two minutes under the NHL and IIHF" is the floor only when no official is going for the puck. Optional plain addition.
- **Sibling documents** may still give the deliberate-clear minor for the NHL and IIHF only, without the PWHL, or still say "CARHA's rule" has no intent word. A grep of content/ for the CARHA phrase now finds none.
- **IIHF 52.2 slew-foot** is discretionary in the same wording as 43.3. Saying "ejects" at KT9 is slightly firmer than the "plan on it" the same document uses for 43.3. This is noted, not changed.

## What this method could not have found
- Whether the PWHL Table 11 "39.4(ii)" citation is a misprint.
- Hosts and layers of the edited claims beyond the four pages viewed.
- Real devices.

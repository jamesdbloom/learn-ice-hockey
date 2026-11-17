# W387: match suspensions where a unit priced matches without one, CARHA's 32(d) ban scoped exactly, and the last undisclosed Hockey Canada readings (16–17 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/technique/body_contact_and_battles.md
- content/technique/passing_and_receiving.md
- content/systems/defending_the_rush.md
- content/systems/faceoffs.md
- content/systems/offensive_zone_play.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
The wave took these carry-overs from project/plans/OPEN_ITEMS.md:
- From W386 (1)–(7) and (9)–(16).
- W380 (2), checked only.

Each item was briefed as a hypothesis. Three were refuted:
- **W386 (2), rules_primer roughing :500.** The unit says "no book makes a minor your ceiling", and NHL 51 is a minor, so the NHL does not sound cheaper.
- **W386 (4), body_contact :1156, stepping on an opponent.** No Hockey Canada rule names the act, and 7.1's own definition counts an injury attempted "by the use of a stick, skate or other object". The citation was nonetheless moved to Appendix D Note 1 (rules optional), which holds whichever HC rule governs, because 7.9 Roughing might also reach it.
- **W386 (10), faceoffs :1158.** Casebook 620 Situation 4 concerns a *check*, not a helmet clash at the dot, so it was not added.

**A correction to the W386 commit gate.** That gate said defending_the_rush "already discloses" the Hockey Canada reading. The W387 author found that facts :1015 rested the match on 7.1(c) without a disclosure, and that CM :1114 had no disclosure either. Both are fixed below.

## What changed

### Match suspensions (rules_primer)
**New suspension sentences.** Each sits in the same chunk as the matches it covers and names only the books the unit prices:
- **:513 (interference):** NHL and PWHL 21.2; USA Hockey 405(c), practices too; Hockey Canada 4.10(a); CARHA 34(a).
- **:813 (goalie, What it costs):** the same five books.
- **:835 (goalie interference, HC/CARHA chunk):** "A match under Hockey Canada or CARHA keeps you out of games until your case is dealt with (4.10(a); 34(a))." The safety reviewer replaced the author's "Either book's match…".
- **:837 (NHL/PWHL/USAH chunk):** NHL and PWHL 21.2; USA Hockey 405(c), practices too.
- **CM :1160:** the short form.

**CM :1144 (cross-checking).** The bullet gave the NHL only a major while naming other books' matches. It now adds "in the NHL a cross-check meant to injure is a match (21.1; 59.4)" and a suspension sentence. The citation order was changed to put 21.1's "shall" first (rules optional).

**:418, :426, :453, :518.** "this guide's reading of the two rules" is now "this guide's reading of the conflict". Appendix D Note 1 is a note to a table, not a rule.

### The Hockey Canada reading (defending_the_rush)
- **Facts :1015, 287/300.** Now: "8.6(c) bars a match, but Appendix D Note 1 says one "shall be assessed for any deliberate attempt to injure", and the instigator rule's same bar still allows one in extreme cases (7.11(c) Interpretation 2). This guide's reading: plan on the match".
- **:1032.** Adds "in extreme cases". It now ends "This guide reads Note 1 and Interpretation 2 together as a match for a trip meant to injure, ⚠️ **so plan on the match.**" The naming of both sources was a safety minor.
- **CM :1114.** Adds the disclosure.

### CARHA head-butting (faceoffs)
- **Facts :1153.** CARHA was listed under "A head-butt that injures is a match". 48(b) is flat. The line now reads "…any head-butt is a match under CARHA (48(b))".

### USA Hockey matches stated as optional (passing_and_receiving, body_contact)
- **passing :472 (high sticking).** "to a possible match penalty (621(c))" became "if reckless, plan on a match too (621(c), 602(a))".
- **passing :473 (head contact).** "620(c) a possible match" became "620(c) allows a match for reckless endangerment too". The safety reviewer chose that wording over the author's "adds", which dropped 620(c)'s "may". The same bullet carries 602(a)'s "shall".
- **body_contact :1744.** The amber run stopped at "a major plus a game misconduct on recklessness" and read like a ceiling. It now adds "and if reckless, plan on a match (611(c), 620(c), 602(a))".
- **No voiced head-contact site on body_contact gives the match as optional.** The :2196 trailer is unvoiced (render) and accurate.

### CARHA 32(d), the one-game ban (offensive_zone_play)
- **Facts :558 and body :584 (62(b) high stick).**
  - The game misconduct applies if the high stick is intentional or injures.
  - "At least a one-game ban" applies only if intentional, because 32(d) excludes the Accidental High Stick Rule.
  - :584 also gains a suspension list (NHL and PWHL 21.2; USA Hockey 405(c); Hockey Canada 4.10(a); CARHA 34(a)). Its match list had given only USA Hockey a suspension.
  - The IIHF is correctly absent: Rule 60 has no match.
- **Facts :710 (66(b)/(e)).** "either major ejects and bans a game or more (30(a), 32(d))".
- **:1081, :1087, :1096, :1119 (79 slap shot).** Each states the injury major plus game misconduct, and now the ban. :1087 and :1119 are at 198/200.
- **Facts :952.**
  - The author's change to "a major ejects and bans" was ruled WRONG a second time: it is unscoped against the 30(a) Note / 32(d) accidental-high-stick exception.
  - The shipped text is the rules-verifier's (296/300): "…hits from behind eject (53); these majors eject and ban a game or more (30(a), 32(d)); boards minors double (49(b)), two of three eject (32(a))".
  - Putting 53 first brings a 53 major under the ban, while keeping the ban off a 53 minor plus game misconduct (32(d) covers only a game misconduct "for receiving a Major").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier R1 (rules_primer, body_contact, passing, defending) | **First read:** nothing WRONG. Optional: 21.1 first at :1144; Note 1 at :1156; (611(c), 620(c)) at :1744; :473 drops "may". W380 (2) still open. **Final read:** all six edited sites OK. :1181's 7.1(c) is fine as it stands, since 7.1's own definition names the skate. |
| rules-verifier R2 (faceoffs, ozp) | **First read:** ozp :952 WRONG (unscoped major). Replacement text applied. All else OK, including 21.2 covering an NHL 60.4 match. **Final read:** OK. |
| safety-reviewer (all six) | **First read:** no Major. Minors applied: passing :473 "allows"; ozp :558 "at least"; rules_primer :835 names both books; defending :1032 names both sources. **Final read:** CLEAR. |

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's own text, or a rules-optional change read by both reviewer types in their final reads.

## Checks after the last content edit
- **Build:** a full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 00:02:42; no content file is newer.
- **Checkers:**
  - check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets: pass.
  - check_counts --update: no change.
  - check_callout_flow --bare: 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all six files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | two rules-verifiers, two reads each, against: <br>• NHL/PWHL 21.1/21.2, 51, 59.4, 60.4 <br>• USAH 405, 602, 611, 620, 621, the Discipline Policy levels, Casebook 620 <br>• HC 4.10, 7.1, 7.9(c), 7.11(c) Interp. 2, 8.1–8.6, Appendix D Note 1 <br>• CARHA 30, 32, 34, 48, 49, 52, 53, 62, 66, 79 <br>• IIHF 60 |
| D4 Citations | added and verified: 21.2, 405(c), 4.10(a), 34(a), 32(d), 611(c), Appendix D Note 1, 7.11(c) Interp. 2 |
| D8 Counts | "these majors", "either major", five-book lists, "Any of these matches" |
| D9 Summary layer | rules_primer CM :1144/:1160, defending CM :1114 read voiced alone |
| D10 Key-facts | ozp :558/:710/:952/:1087/:1119, faceoffs :1153, defending :1015, body_contact :1156 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | every page rendered by its author into its own `--out` |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 00:02:42 build (below) |
| D5–D7, D13 | not engaged |

**D15:** site-reviewer, six pages, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.
- defending :1032's amber run "so plan on the match." has its glyph leading.
- Worst 400px window per page:

| Page | Worst 400px window |
|---|---|
| rules_primer | 43.9 |
| body_contact | 48.5 |
| passing | 26.9 |
| defending_the_rush | 38.1 (first measured) |
| faceoffs | 43.4 |
| ozp | 47.9 |

- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
1. **W380 (2) is still open.** HC 7.6(a)'s minor/female Game Ejection after three head-contact penalties has no facts carrier on passing_and_receiving. :439 is at 300/300 and its block is at HARD_MAX, so it needs a merge or swap.
2. **ozp :952 omits 53(b)'s mandatory match** for a hit from behind into the boards. The omission was already at HEAD, and "eject" is true.
3. **ozp :952's "two of three eject (32(a))" is still cryptic voiced alone.** Every clarified form ran 315–318 characters. Body :1186 carries the full form.
4. **ozp :1087 and :1119 are at 198/200.** Any edit will break them.
5. **rules_primer :513: USA Hockey 625's own interference tiers are unchecked.** The unit gives USA Hockey only the 602(a) match.
6. **rules_primer :465 cites "NHL 21.2" without the PWHL.** This is scoped to its unit; flag only.
7. **body_contact :1181 / :1156 cite in parallel only optionally.** :1181 keeps 7.1(c), :1156 uses Note 1, and both are correct. Optional: add "(and Appendix D Note 1)" at :1181.
8. **body_contact facts :1761 does not name Appendix D Note 1.** Adding it would take the line to 304–306 characters. The body at :1773 names it.
9. **The W386 record's item (11) says "facts-reviewer judgement".** It was the rules-verifier's note. Archives are evidence, so this is noted here and the record is unchanged.

## What this method could not have found
- A unit that prices a match without a suspension, or a CARHA major without its ban, in wording that was not searched.
- How a referee reconciles HC 8.x(c) with Note 1.
- Real devices.

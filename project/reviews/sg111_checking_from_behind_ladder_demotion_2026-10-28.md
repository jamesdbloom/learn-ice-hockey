# SG111: checking-from-behind ladders demoted on four non-owner pages; dzc and rush tagging (28 October 2026)

**Files:**
- content/systems/forechecking_systems.md
- content/positions/defender.md
- content/systems/offensive_zone_play.md
- content/hockey-iq/puck_support_and_spacing.md
- content/systems/defensive_zone_coverage.md
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md

## What changed and why
The owner's ratio rule says rules are background. Four pages that do not own checking from behind each restated the full five-book ladder for it, several times over. Every restatement is one more place a correction can fail to reach.

Each page now keeps:
- the instruction (never hit a turned back);
- a short, true tariff;
- a link to body_contact_and_battles.md, which owns the topic.

A rules check found the linked bcb section holds most tiers, with four gaps: the USA Hockey 620(b) head limb (permissive), the HC 7.5(c) intent match, the post-match suspension and an overstated "every time". **They are being repaired in SG112 and are NOT in this commit.** Until SG112 ships, a reader who follows a link here lands on the section with those four gaps.

Agent E's changes:
- dzc: single-book bullets tagged with their book.
- defending_the_rush: passive steering verbs ("pushed" → "angled").

The commit gate blocked the first version of this record (C3). It had mislabelled the D-numbers, and no reviewer had covered D9 (summary layer) or D10 (facts). Three more rounds followed (2–4).

### Repairs, by round
**Round 1 (rules-verifier, safety-reviewer):**
- OZP §10: Hockey Canada head contact now lists every mandatory trigger, per 7.6(b) and 7.7(b): a cross-check to the head or neck whether or not anyone is hurt; injury (in Junior and Senior, a head hurt off the glass, ice or boards); and violence (the referee's call in minor and female hockey, mandatory at a high degree in Junior and Senior). It also gives the match for a player who could not protect themselves, or for intent.
- OZP §9 IIHF antecedent: now reads "a major and an automatic game misconduct (43.3)".
- dzc: CARHA 55(a) added.
- defender and forechecking: 608(c) "vulnerable or defenceless" and "reckless".
- forechecking: CARHA 53(a) "a match is open too".
- puck_support: the USA Hockey 404(b) body line, which says a game misconduct "suspends you for your team's next game".

**Round 2 (content-reviewer D9, facts-reviewer D10):**
- forechecking: the Rule lines move into their own facts block under `#### What finishing into that back costs`, where they trace to that section's text.
  - USA Hockey is now two lines. They restore 608(b)'s "head first into the boards or goal frame" and add Casebook 608 Situation 1.
  - CARHA is now two lines. They state that every intentional hit from behind ejects (53(a) is a minor or major, each with a game misconduct), that a match is open, and the 53(b) match with the 34(a) wording.
- OZP §9: cut to a pointer-level sentence. It had contradicted §10 and overstated Hockey Canada 7.7.
- dzc: the freeze line becomes its own Rule line naming every book.
- defender :461: dangling "them/one" fixed, and "Sit." spelled out.
- Everywhere: "harsher of 7.5 and 7.6" becomes "harsher of 7.5 and head contact", which covers 7.7 too.

**Round 3 (facts-reviewer with a safety pass):**
- OZP §9 and defender: "up to a match" became "a match if …", because 7.6(c) and 7.7(c) say it "will be assessed".
- defender: the net-front "What it costs" text was restored as two short paragraphs, so facts :314–:317 trace to it.
- forechecking CARHA: 32(d) now applies to any major.
- forechecking USA Hockey: adds 602(a) "plan on a match".
- forechecking 7.5(b): now traces to the body.
- dzc: Hockey Canada cited as 6.12(b) with 10.1(a), and "freeze the puck".
- defender Common Mistakes: restored the "could not protect themselves" match.

**Round 4:**
- defender :490: the Hockey Canada ladder became a pointer, so the full ladder lives once, at :326, the source of facts line :316.
- defender :326 and :490 now lead with the instruction.
- forechecking :771: a run-on sentence split in two.

## Reviews
| Round | Dimension | Reviewer | Result |
|---|---|---|---|
| 1 | D1–D3 rules | rules-verifier | 0 WRONG, 4 INCOMPLETE (repaired) |
| 1 | D11 safety | safety-reviewer | 4 SHIP, 2 FIX (repaired) |
| 1 | D1–D3 repairs | rules-verifier ×2 | CONFIRMED after one follow-up (OZP §9 Jr/Sr, PSS "forfeit") |
| 2 | D9 summary layer | content-reviewer | Read Key focus, Overview, Common Mistakes and Key Takeaways whole on all 6 pages. 1 Major (OZP §9) and minors; repaired. |
| 2 | D10 facts | facts-reviewer | 2 Majors (forechecking USA Hockey and CARHA lines) and minors; repaired. Block split. |
| 3 | D10, D11 | facts-reviewer (with safety pass) | OZP and defender FIX (the "up to a match" understatement, and broken traceability). forechecking and dzc SHIP. Repaired. |
| 4 | D10, D11 | facts-reviewer | All four files SHIP. Three recommended edits were applied and re-checked: SHIP. |

The bcb completeness check (rules-verifier) confirmed that all ten links the four pages use land on bcb's checking-from-behind section. It found four gaps there. They are being repaired in SG112, which is a separate commit; they are not in this one.

### C11
- The coordinator made one content edit after the last review: defender :326's opening was changed from "Keep it off their head. Once it does reach it, …" to "**Keep the hit off their head.** If it does reach the head, …". This is the reviewer's own suggested wording, made to clear up three "it"s in a row; the glyph and the claims are unchanged. check_marker_pairs: 0 LOST.
- All other edits were made by agents and reviewed afterwards.

## Dimensions
These follow the D1–D15 table in project/review_process.md.

| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier, rounds 1 and 1b. The commit gate re-derived the round 2–4 citations from sources/: dzc freeze line; HC 7.6/7.7(b)/(c); CARHA 53(a)/(b) and 32(d); USAH 608, Casebook 608 Situation 1, and 404(b). |
| D2 Rules travelling without exceptions | rules-verifier and facts-reviewer. A layer test for each claim was run across body, facts, Common Mistakes and Key Takeaways. |
| D3 Rule-set divergence | rules-verifier; every changed tariff is tagged to its book. |
| D4 Citation integrity | Out of scope: no URL added or changed. |
| D5 Provenance | Out of scope: no non-rulebook source is quoted. |
| D6 Negative existence claims | One restated claim, forechecking: "No deliberate-turn provision was found in USA Hockey's rulebook and Casebook or in CARHA's" and "Hockey Canada, USA Hockey and CARHA write no carve-out". The coordinator re-tested it this session with flattened sweeps of usah.txt, usah_casebook.txt, carha_2026.txt and hc.txt for "deliberately/intentionally/purposely turn", "turns their back/body", and "turn" within 50 characters of back/behind/away. The only hits were sled-hockey and unrelated Casebook situations (tag-up, icing, broken stick, protecting the puck with the back turned), none of which is a turn waiver. The claim holds. |
| D7 Cardinal rule | content-reviewer round 2. No coaching choice is stated as law; the changes are tariffs. |
| D8 Numeric ownership | No owned number changed. The restatement count fell: defender's duplicate HC ladder is cut to one copy. |
| D9 Summary layer | content-reviewer round 2, which read Key focus, Overview, Common Mistakes and Key Takeaways whole on all 6 pages. Rounds 3–4 rechecked the touched units. |
| D10 Key-facts layer | facts-reviewer, rounds 2–4. |
| D11 Reader safety | safety-reviewer round 1; a safety pass inside facts-reviewer rounds 3–4. |
| D12 Read-aloud integrity | Every round rendered with md_to_speech and checked chunk placement by words. facts-reviewer read the changed lines voiced alone. |
| D13 Folklore | content-reviewer round 2 found none. No new unsourced general claim was added. |
| D14 Structure, style, terminology, cross-links | content-reviewer round 2 (style and terminology). Each unit leads with the instruction (round 4). check_links passes. The anchors this commit links to exist at HEAD: bcb :745, :712, :836 and uk_rules :397. |
| D15 Rendered site | A full site build ran after the last content edit. No site-reviewer ran. The visual changes are one inline amber run in defender :326, a new facts block under forechecking's `####` heading, and two bullet lists turned into paragraphs. The commit gate confirmed in dist that the new facts block renders as `dl.facts` under its h4. |

## Carried to the plan
- forechecking facts line "on the head, 7.6 (7.7 Jr/Sr), up to a match, a must if defenceless", the defender facts line and the defender Common Mistake all leave out the intent-to-injure match (7.6(c)/7.7(c)). It is the same claim fixed in the OZP and defender bodies. Low harm; queued as SG113.
- OZP §10 "a cross-check to the head or neck": the rule text is "above the normal height of their shoulders", which is wider.
- dzc :207 and :496: an IIHF "harsher of 43 and 48" with no price (found in SG112's sweep); queued as SG113.
- dzc :704: "via 9.5(b)" is Junior/Senior only (minor and female route through 6.9(c)).
- USA Hockey 610/632 for an open-ice freeze (report only).
- forechecking :767 and :775 (USA Hockey, Hockey Canada and CARHA paragraphs) still open on the tariff, as at HEAD.

## What this method could not have found
- A claim worded so that none of the rounds' searches matched it.
- How a USA Hockey referee applies 608 and 620 together.
- Whether the new two-paragraph cost section in defender reads well aloud. It was checked only for chunk placement.

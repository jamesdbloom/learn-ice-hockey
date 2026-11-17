# W388: amber moved onto the instruction, two restated hit-from-behind ladders merged, and the W387 carry-overs (17 November 2026)

**Files:**
- content/systems/zone_entries.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/risk_management.md
- content/technique/passing_and_receiving.md
- content/systems/offensive_zone_play.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
These carry-over rows in project/plans/OPEN_ITEMS.md, each briefed as a hypothesis:
- W375 (1), (2) and (4)
- W374 (3) for zone_entries KT4, and (6)
- W369 (1) and (4)
- W373 (2)
- W387 (1), (2), (3) and (5)

## What changed

### Readability: amber on the instruction, long runs split, restatements merged
- **zone_entries :1168, "A hit from behind".** Before, the instruction was plain bold and the amber sat on the tariff. Now the amber run covers "never hit a player whose back is turned to you: the defenceman retrieving on a delayed offside, the retriever at the end of your chase, or a goalie turned to the boards for a rimmed puck." The tariff after it stays bold and unchanged. A ⚠️ cannot open the paragraph without making a panel, so the opening bold run was split instead. The author ran it through remark-corpus.mjs: no panel, and the paragraph still says "Important.".
- **playing_without_the_puck, Common Mistakes "Finishing a backcheck…".** A 303-character amber run was split into two short runs, each led by its own glyph. No word changed. The page's worst 400px window went from 49.7% to **34.7%**.
- **playing_without_the_puck, body :846–850 and What it costs :1021–1025.** These restated the hit-from-behind ladder almost word for word. What it costs now owns the full ladder. The body is one paragraph: the instruction, each book's floor, the match where a player cannot protect themselves, and a named pointer.
  - The match for a hit meant to injure was voiced only in the trimmed body. The author moved it into What it costs, with the suspension sentence (NHL and PWHL 21.2, USA Hockey 405(c) including practices, Hockey Canada 4.10(a), CARHA 34(a)).
  - What it costs :1023 was split at the British-ban seam, to stay under 1,200 characters.
- **risk_management, body :860–862 and What it costs :912–918.** Same treatment. The owner section also repeated Hockey Canada's head-contact sentences in paras 1 and 3; para 1's copy is gone.
  - Para 1's carve-out-shaped "ends your game while the hit stays off the head" became "plan on it even when the hit reaches the head".
  - The deleted duplicate body paragraph removed one spoken "Important.". Its identical copy at :914 keeps its own. check_marker_pairs keys on the opening, so it cannot see this; the author accounted for it by hand.

### Rule completions
**USA Hockey hit from behind**
- **risk_management :914.** "— plan on the match" became "— and if it is reckless, plan on the match". The owner section had lost the 602(a) scoping.
- **risk_management KT11.** "under USA Hockey it can" became "one that is forceful at the boards, head first or reckless does". The rule is "must": 608(b) and Casebook 608 Situation 1. KT11 went from 102 to 112 words (whitespace count; markup and list number stripped).
- **zone_entries KT4.**
  - The USA Hockey must-list now includes "reckless" (608(b)).
  - Safety minor 5: it reads "it must end your game if…". Before, voiced alone, "it must" took "be a mandatory match" as its verb.
  - 102 → 107 words, by the author's whitespace count of the whole item.

**USA Hockey 620(b), restored after a safety review (Majors 1 and 2).** Both body condensations had dropped careless head or neck contact from a closed list of when the hit ends your game.
- playing_without_the_puck :846 now ends "…forceful at the boards, head first or reckless, or carelessly reaches their head or neck."
- risk_management :860 now ends "…or that carelessly reaches their head or neck, ends it (608; Casebook 608, Situation 1; 620(b))". The Casebook pin cite was a rules completion, because "forceful at the boards" is Casebook text, not rule text.
- risk_management :860 also says "If they cannot protect themselves, plan on a match, into the boards or not." Safety minor 3 removed the boards-only limit: 608(c) and the Casebook do not need the boards, and HC 7.6(c) applies on the head anywhere.

**Hockey Canada minor/female head contact (passing_and_receiving, W380 (2), open since W380).**
- 7.6(a)¶3 and 4.8(b)(ii): a third head-contact penalty in a game brings a Game Ejection. The body carried this; the facts block did not, and it was at HARD_MAX.
- The author removed the `Rule: USA Hockey 621(d) reads harsher than it works…` line, which is about whistle timing and carries no penalty. The sibling Action line keeps "Keep skating until you hear the whistle", and the body keeps the Casebook detail. Both reviewers ruled that no penalty-bearing rule was lost.
- The freed slot split the high-sticking line. The Hockey Canada minor/female line now reads "…a minor, double if meant, and a third in a game ejects you (4.8(b)); major and game misconduct if violent, hurt or a high cross-check; match if defenceless or meant to injure" (258/300). "Up to a match" became "match", because 7.6(c) says "will be assessed".

**CARHA checking line (offensive_zone_play facts :952, 297/300).** Final text:
> "Rule: CARHA (adult) bars checking; charging (52(a)) or deliberate or unaverted contact (49(a)): minor or major, major if a charge or deliberate hit injures; hits from behind eject (53); such majors eject, ban a game or more (30(a), 32(d)); board minors double, two toward three that eject (49(b), 32(a))"

- **"two of three eject" was cryptic.** The block is at HARD_MAX, so a split was impossible and the clause was rewritten in place.
- **The author's first rewrite cited "52".** Both reviewers sent it back: it filed 52(b)'s mandatory crease major under "minor or major".
- **The rules-verifier's replacement ("count double toward three that eject") lost 49(b)'s actual double minor.** The author caught this. Both reviewers then accepted the author's wording, "board minors double, two toward three that eject".
- **53(b)'s mandatory match is not added here.** :949 voices it in the same block and the same spoken chunk, and a fourth restatement would be a propagation risk.

**rules_primer**
- **:513 (interference).** "as USA Hockey's 602(a) does" tied the match to intent only. Read with :515 (640(g)/(h) does not reach adult men's play), an adult-men's reader heard that a reckless late hit stops short of a match. It now says "USA Hockey's 602(a) gives a match for recklessly endangering an opponent, not only for trying to injure one."
  - USAH 625 itself is minor-only. The brief's premise of a skipped tier was refuted.
- **:93 (puck at an official).** "…a match penalty and a likely multi-game suspension" had no trigger. It now ends "…if the shot recklessly endangers an official or a spectator" (601(d) Note, 601(e.2)).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (six pages) | **First read:** nothing WRONG. Two incomplete: ozp :952 cite back to 52(a), and the risk :860 Casebook pin cite. **Final read:** all four post-review sites OK. On :952 it chose the author's (b) and withdrew its own text. |
| safety-reviewer (six pages) | **First read:** Majors 1 and 2 (USA Hockey 620(b) dropped from two closed lists). Minors 3 (boards-only match), 4 (ozp :952 cite and clause) and 5 (KT4 antecedent). All applied. **Final read:** CLEAR on four. On :952 it rated (b) acceptable and (c) unsafe. |

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's own text, except :952. There both reviewers chose the author's wording in their final reads.

## Checks after the last content edit
- **Build:** a full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 01:43:23, and no content file is newer.
- **Checkers:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all six files. risk_management's deleted duplicate is explained above.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, two reads. Sources: <br>• USAH 405, 601, 602, 608 + Casebook Sit. 1, 620, 621(d), 625 + Casebook, 640, discipline policy <br>• HC 4.8(b), 4.10, 7.5, 7.6, 7.7, 9.5 <br>• CARHA 30, 32, 34, 48, 49, 52, 53 <br>• NHL/PWHL 21, 43, 60 <br>• IIHF 43 |
| D4 Citations | Casebook 608 Sit. 1, 620(b), 4.8(b), 601(d) Note added and verified |
| D8 Counts | "every book here except USA Hockey", "every book but the IIHF", "a third in a game", "two toward three" |
| D9 Summary layer | risk KT11, zone_entries KT4, pwtp CM read voiced alone |
| D10 Key-facts | passing :438/:439, ozp :952 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | every page rendered by its author into its own `--out` |
| D14 Links | check_links and the build; both pointers (#a-hit-from-behind) resolve |
| D15 Rendered site | site-reviewer on the 01:43:23 build (below) |
| D5–D7, D13 | not engaged |

**D15.** The site-reviewer checked six pages in Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.

Targets:
- zone_entries :1168 is a single run led by the glyph, on the instruction, with 0 panels.
- The pwtp CM split renders as two separate runs.

Worst 400px window per page:

| Page | Worst window |
|---|---|
| zone_entries | 45.7 |
| pwtp | 49.7 → **34.7** |
| risk_management | 48.5 (a safety character-estimate of ~54% was wrong) |
| passing | 26.9 |
| ozp | 47.9 |
| rules_primer | 43.9 |

- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll.
- 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
1. **USA Hockey's mandatory hit-from-behind tiers stated as "can"** ("…ends it in most books and can under USA Hockey") at:
   - playing_without_the_puck KT10
   - language_and_glossary :540
   - shooting :1010
   - defender :1094

   608(b) and Casebook 608 Sit. 1 make these "must" (safety carry-over). Brief this as the claim.
2. **risk_management "Slew-footing: do not count on a carve-out" is the page's tightest window (48.5%).** It has four amber runs in one 812px viewport. Watch it before adding text there.
3. **passing_and_receiving :474 body, HC minor/female.** "**mandatory** if the opponent is injured" is broader than 7.6(b)¶2, which covers the accidental case only. This is the harsher direction. The facts line's "hurt" and "if violent" (7.6(b)¶1 "may") have the same breadth.
4. **zone_entries :282.** The amber run is a tariff, not an instruction. A possible follow-up is to move the amber onto the instruction.
5. **md_to_speech renders "Tenth, Angle…".** `_lower_after_ordinal` lowercases only a fixed list of function words, so an imperative after an ordinal keeps its capital. This affects zone_entries KT3, KT10, KT11 and two ordered lists. It is in scripts/, a coordinator change, probably inaudible.
6. **Hockey Canada 7.5(b)¶2 (major plus GM when a minor-level check from behind injures) is not on risk_management.** The page is silent rather than cheaper.
7. **rules_primer :93.** The Hockey Canada match for shooting at an official rests on a reading of 11.5(c)(i). Not checked this wave.

## What this method could not have found
- A closed list that never mentioned a tier at HEAD. The 620(b) omissions were found only because HEAD carried them.
- A listener's actual reading of "two toward three that eject" or "such majors".
- Real devices.

# W439: the last twelve pages within the readability limits; CARHA's accident prices no longer read as covering deliberate head contact; USA Hockey's reckless-charge match is "plan on", not "likely" (18 November 2026)

**Content files changed:**
- foundation/core_principles.md
- foundation/on_ice_communication.md
- foundation/rink_map.md
- hockey-iq/puck_support_and_spacing.md
- hockey-iq/time_and_space.md
- off-the-ice/equipment.md
- off-the-ice/mental_game.md
- off-the-ice/team_play_and_culture.md
- positions/switching_positions.md
- systems/breakouts.md
- systems/neutral_zone_systems.md
- technique/passing_and_receiving.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W438 (1), the next readability wave. A corpus-wide `check_readability.py --json` found these twelve pages still over a limit.
- **Brief:** scratchpad/w439/brief.md (the W438 brief plus a W439 addendum):
  - "there" after a place name;
  - closed book lists in shortened units;
  - pronouns after a cut;
  - complete labels;
  - "match penalty", not "match".
- **Authors:** twelve agents (A–L), one file each.
- **Premise:** wrong for most pages. Only one or two sentences were over 60 words on ten of them, and only two pages had a paragraph over 1,200 characters.

## Readability (check_readability --file, longest sentence before → after)
| Page | Before → after |
|---|---|
| core_principles | paragraph 1,300 → 936 (sentence 58) |
| on_ice_communication | 65 → 59 |
| rink_map | 61 → 55 |
| puck_support_and_spacing | 65 → 53 |
| time_and_space | 68 → 59 |
| equipment | 62 → 60 |
| mental_game | 68 → 56 |
| team_play_and_culture | 69 → 60; paragraph 1,281 → 0 over |
| switching_positions | 63 → 55 |
| breakouts | 64 → 56 |
| neutral_zone_systems | 66 → 59 |
| passing_and_receiving | 69 → 59 |

**Corpus-wide after W439:**
- no paragraph over 1,200 characters;
- no sentence over 60 words;
- one Key Takeaway over 60 words: getting_started KT14 at 61, kept by safety's W438 decision.

## What changed (voiced)

### Claim repairs, found by review
- **team_play :564 (rules WRONG, safety MINOR; introduced by the split).**
  - At HEAD a colon tied the list to "not every accident is free:". As its own sentence, "CARHA still makes head, face or neck contact a minor…" read as all head contact, which understated 50(b) and 50(c).
  - Now: "CARHA still makes accidental head, face or neck contact a minor without a stick (50(a)) and a major with one (62(b)), and accidental contact that impedes a goalie a minor too (66(b))." Verified against carha_2026.
- **neutral_zone :443 (rules WRONG, pre-existing).**
  - Was "with a match penalty likely (602(a))". 602(a) says "shall be assessed", and the page's own :361/:399/:430 say "plan on a match".
  - Now: "— plan on a match penalty and a likely multi-game suspension (602(a))".
- **"head, face or neck" (rules, pre-existing).**
  - Fixed at puck_support :629, switching :609, :270, and switching facts :245 (297/300).
  - The author swept every layer of both files. Lines that say "head or neck" verbatim inside USA Hockey's Heads Up quotations were left as quoted.
  - :245 dropped "reckless" from the 608(b) list to make room. Both reviewers: it errs strict, because the line still ends "reckless, plan on a match (602(a))".
- **passing_and_receiving :477 (rules, pre-existing).**
  - Was "Interpretation 1 to 9.5(a) makes a follow-through that hits above the shoulder a minor".
  - Now adds "if it causes no injury".
  - :479 now reads "a hit to the head an opponent cannot protect against, or … trying to injure by head contact (7.7(c))".

### Readability splits (scope kept)
- **core_principles.** The 1,300-character CARHA paragraph is split at the change of subject. The new paragraph opens "**Accidents under CARHA.**". Rules confirmed that every rule under the label (49(c), 50(a), 62(b), 66(b), 53(b), 34(a)) reaches an accident.
- **team_play.**
  - The EIHL/In-House item is split into a continuation.
  - Safety's fix moved the EIHL Casebook sentence to the end of the first block, after the In-House sentences, so "there" still means the NIHL, SNL and BUIHA. The lead and its figures now share chunk 022.
  - The CARHA "there" was replaced by "Under CARHA" three times.
- **mental_game.** "Any of them can bring a suspension" is now in the unscoped opener. Rules verified it in all six books, and found the Hockey Canada list of four mandatory acts complete; the obscene gesture is a discretionary escalation under 11.2(d)–(f).
- **puck_support.** "Under USA Hockey any game misconduct also costs you your team's next game (404(b))". "them/their" became "the player".
- **on_ice_communication.**
  - The trapezoid paragraph is split by book, with "In every book, ⚠️ **…past the centre red line is a minor.**".
  - Kicking: "Under the IIHF the referee may give…".
- **switching.** USA Hockey CM in three sentences, with the head-contact clause scoped "under USA Hockey".
- **equipment.**
  - Mouthguard sentence split at the book boundary.
  - :134 "a match" became "a match penalty".
- **passing.** The HC head-contact paragraph is split ("Where a hit from behind reaches a player's head…"). The HC Junior/Senior bullet gains a continuation scoped "Under Hockey Canada in Junior and Senior".
- **time_and_space.** The curl-away instruction is now "Make it a tight turn… Do it in open ice, never against the wall, and never turn your back… Then hold the puck…". The last of these was safety's fix, from "hold it".
- **rink_map, breakouts, neutral_zone.** One sentence each. Rink map's change is a measurement list, not a region definition.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** two WRONG (neutral_zone "likely"; team_play :564), both understatements. Pre-existing: 620(b) "face", passing 9.5(a) "no injury". Everything else OK, including mental_game in six books, the HC list being complete, and the core_principles label.<br>**Confirmation:** every site OK, nothing blocks. The 9.5(a) double minor is non-blocking. |
| safety-reviewer | **First read:** no Critical or Major. Minors: team_play :564 and the team_play EIHL chunk split. Optional: passing 7.7(c) "to the head", time_and_space "hold the puck". Upheld: no marker on core_principles, mental_game, and every "match penalty" swap.<br>**Confirmation:** CLEAR. Spoken "Important." counts equal HEAD on all re-rendered files. switching :245 is not cheaper heard alone. |
| site-reviewer | Twelve pages at 400×812 DPR 2 light/dark and 1440 light, on the 07:10:33 build. Every worst window held, except neutral_zone 31.2 → 30.3. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. All five targets render as intended (the label is plain bold, the continuations are second `<p>`s in the same `<li>`, and the amber runs are glyph-led warn-inline). |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, or an author correction confirmed by both reviewers:
- switching :245, the author's room-making cut;
- the switching and puck_support whole-file sweeps.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 18 Nov 07:10:33; the newest content file is switching_positions.md at 07:08:44.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
  - check_counts --update made no change.
  - check_callout_flow --bare reports 0, and `--panels --file` reports 0 on all twelve files.
- **Marker pairs:** check_marker_pairs: 12 files, 0 LOST, 0 SPLIT HALF UNMARKED. No ⚠️ was added or removed.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **USAH:** 404(b), 601, 602(a), 607(b)/(e), 608(a)–(c), 620(b)/(c), Casebook 607/608.<br>**HC:** 7.6(c), 7.7(a)–(c), 9.5(a) Interps 1–2, 11.2–11.5, 4.13(c).<br>**CARHA 2026:** 34(a), 46, 49(c), 50(a)–(c), 53(b), 62(b), 66(b), 71, 81.<br>**NHL/PWHL:** 27.7, 39, 40.<br>**IIHF:** 1.9, 27.6, 39.5/39.6, 40, 46, 49.3/49.4.<br>**British:** EIHL Casebook 46.1/46.2/46.10, In-House Section 6, the EIHL and WNIHL mouthguard rules. |
| D2 Exceptions | CARHA accident vs intent (50(a) vs 50(b)/(c)); 9.5(a) "no injury"; 607(e) "may also" |
| D3 Cross-book divergence | Official abuse across six books |
| D4 Citation integrity | 620(b) "head, face or neck" |
| D5 Provenance | Heads Up quotations left verbatim |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | "plan on a match penalty" |
| D8 Numeric ownership | rink_map IIHF 1.9 figures unchanged |
| D9 Summary layer | 620(b) swept through every layer of two files |
| D10 Key-facts | switching :245 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | "there" removed after places; "match" became "match penalty"; "hold the puck"; chunk 022 regrouped |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows: From W439)
1. **Readability limits are met across the corpus.** The next readability work is judgement: dense 50–60-word tariff sentences heard aloud.
2. **passing :477.** The 9.5(a) discretionary double minor is unmentioned. Confirm the "Interpretation 2" label.
3. **switching :245.** The facts line no longer names 608(b)'s reckless limb (leave).
4. **Bare "a match"** for a match penalty remains elsewhere (a corpus sweep).
5. **mental_game.** The HC obscene gesture is correctly "can" (no action).
6. **team_play :362.** It omits the EIHL Casebook 46.2 instigator waiver, which errs strict.

## What this method could not have found
- A clause whose meaning moved inside a split without leaving an unusual word. The team_play "accidental" loss was caught only because core_principles carries the same list.
- Paraphrases of 620(b) that use none of the words swept for.
- Real synthesised audio, and any browser other than Chromium.

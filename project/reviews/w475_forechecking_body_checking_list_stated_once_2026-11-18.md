# W475: Forechecking Systems states where body checking is barred once, in full, and gives a find-out prompt everywhere else (18 November 2026)

**Files changed:**
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **Plan row:** From W458 (2) and (3).
- **Author:** one agent.
- **Brief:** collapse partial restatements of where checking is barred, so that none reads as complete.

## What changed
**The single full statement** of where checking is barred is the chunk-022 paragraph (:339), just before the forecheck-212 marker. It covers:
- USA Hockey 604(a) and (b), including the local governing body;
- Hockey Canada 7.3: U13 and below, female hockey, any Member-approved division;
- IHUK U10/U12 and the Women's NIHL;
- CARHA 49(a).

**Every other site now carries a find-out prompt or a "commonly barred" summary:**

| Site | Before | Now |
|---|---|---|
| Overview facts :38/:39 | two-book list | one self-contained prompt: age, women's hockey and non-check leagues can each bar it; 604(b) per fixture |
| 2-1-2 facts :321/:322 | two half-lists | prompt + 604(b) + "where it is barred, F1's pressure is feet and stick" |
| Pinch facts :607 | **Hockey Canada scope "female hockey and non-check play", looser than 7.3** | prompt + 604(b) + "a pinch is a play on the puck" |
| Pinch body :616 | full list | "commonly barred… the 2-1-2 section above sets out each book"; ⚠️ 604(b) clause kept |
| :618 | junior ages | dropped (carried at :1019/:1027) |
| Control-setup facts :752/:753 | lists + Hockey Canada incidental contact | prompt + 604(b) + "the flush is stick and feet"; the Hockey Canada incidental-contact sentence moved to the Hockey Canada bullet (:1022), checked against 7.3's preamble |
| Check yourself :1168/:1170 | second full list under its own ⚠️ | ⚠️ prompt; IIHF 101.1 paragraph |

## Defects found by review and fixed
1. **Lost limb (rules-verifier).** The cut facts line was the only place carrying Hockey Canada 7.3(a)'s *"intentionally body-checks, bumps, shoves, or pushes"*. It is restored in the Hockey Canada bullet (:1022): "an intentional body check, bump, shove or push…".
2. **Major (safety-reviewer).** The rewritten Check yourself paragraph (chunk 081, voiced as "Important.") opened with the IIHF 101.1 permission ("a body check is allowed only to play or win the puck"). It no longer mentioned the Women's NIHL.
   - Why it matters: IIHF women's hockey is the book for every British women's game, so a British women's player would hear that permission as her rule. Her competition is non-checking, and In-House Section 11 ejects her for any major.
   - The nearest Women's NIHL limb was 12 chunks back.
   - Fix: the Women's NIHL limb is restored in the same sentence ("— ⚠️ **and in Britain's Women's NIHL not at all: it is non-checking.**"). Its ⚠️ is back too; the site-reviewer had caught the page's glyph count at 98 against 99 in HEAD.
   - Sweep: every other 101.1 permission in this file carries the Women's NIHL limb in the same unit. The two "hold ice you reached first" facts lines (:609, :642) grant position, not a check, and safety upheld them under 101.1.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | OK on the 7.3 scope fix, the "can bar"/"commonly" wording (IIHF/PWHL restrict, so the claim errs safe), the Hockey Canada incidental-contact text and scope, and 604(b). Found the lost "bumps, shoves, pushes" limb, now restored. |
| safety-reviewer | Found the Women's NIHL Major, now fixed; confirmation CLEAR (chunk 081 voices the Women's NIHL limb in the same breath). The 4× find-out repetition at chunk 038 is low priority: if trimmed, keep the facts line and the caption. |
| site-reviewer | At 400 light/dark: 0 bare, untreated or panels; 0 console errors; worst window 41.0 unchanged. Found the 99→98 glyph count; fixed, markdown now 99 = 99. |

### C11
The coordinator wrote no content. Reviewer texts were applied by the author, who changed "one" to "check under 101.1" for clarity.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 18:08:30.
- **Gates:** check_links --quiet, check_facts, check_absolutes and check_secrets pass. check_counts: no change. check_callout_flow --bare = 0; `--panels --file` = 0.
- **Marker pairs:** check_marker_pairs: 88 = 88 marked units, 0 lost. The ⚠️ count in the markdown is 99 = 99.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 604(a)/(b); HC 7.3 preamble, 7.3(a)–(c); IIHF 101.1; IHUK WNIHL RoC |
| D2 Exceptions | Hockey Canada incidental contact |
| D3 Cross-book divergence | the one full statement |
| D4–D8 | not engaged |
| D9 Summary layer | every layer swept for the claim; restatements collapsed |
| D10 Key-facts | four facts lines rewritten to stand alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | chunk-081 Women's NIHL limb voiced in the same breath |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W475)
1. **Corpus-wide check of IIHF 101.1 permission units.** About 15 pages state the IIHF women's checking permission. Each unit needs a layer test for the Women's NIHL limb, applied the same way as here. Candidates from the coordinator grep:
   - playing_without_the_puck :203/:222
   - center :737/:753
   - offensive_zone_play :1195
   - conditioning_and_recovery :240
   - team_play_and_culture :554
   - time_and_space :356
   - defender :262/:433
   - several in body_contact_and_battles
2. **Captions** are now the main source of find-out repetition. forecheck-roles-rotate voices the full list at chunk 009, and chunk 038 hears the prompt 4×. Low priority.

## What this method could not have found
- A restatement worded without "whether you may", "per fixture", "Member" or "non-check".
- Real synthesised audio.

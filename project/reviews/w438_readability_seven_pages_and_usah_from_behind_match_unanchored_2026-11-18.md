# W438: seven more pages within the readability limits, and USA Hockey's from-behind match no longer sounds like it applies only at the boards (18 November 2026)

**Content files changed:**
- technique/body_contact_and_battles.md
- foundation/language_and_glossary.md
- systems/zone_entries.md
- foundation/rules_primer.md
- getting-started/getting_started.md
- systems/forechecking_systems.md
- systems/offensive_zone_play.md

**Also changed:**
- sources/README.md: the `carha.txt` row now sends every CARHA check to `carha_2026.txt`, the operative book. This is the coordinator's edit.
- project/plans/OPEN_ITEMS.md.
- This record.

## Source
- **Plan rows:** From W437 (1) (next readability wave) and (2) (README note). Also the W437 gate note on ozp's "So each costs this game and at least your next".
- **Brief:** scratchpad/w438/brief.md, which is the W436 brief plus the W437 addendum (scope drift, imperatives read aloud, qualifiers, carriers) plus a carha_2026 line.
- **Authors:** seven agents (A–G), one file each.

## Readability (check_readability --file)
| Page | Longest sentence | Paragraphs > 1,200 | Longest KT |
|---|---|---|---|
| body_contact_and_battles | 65 → 60 | 2 → 0 | 60 |
| language_and_glossary | 70 → 58 | 1 → 0 | 60 |
| zone_entries | 73 → 59 | 0 | 70 → 60 (KT10 now 56) |
| rules_primer | 72 → 60 | 1 → 0 | 60 |
| getting_started | 57 | 0 | 61 → 61 (KT14; see below) |
| forechecking_systems | 62 → 59 | 0 | 65 → 60 |
| offensive_zone_play | — | 0 | — (one-sentence gate fix) |

## What changed (voiced)
- **glossary, CM screen shove and the "From behind" paragraph.** The split is the wave's one Major, found by the safety reviewer.
  - **The defect:** the split had left "A reckless one … must be a match **there** (608(c))" straight after "the boards or net". Heard aloud, that reads as a match only at the boards.
  - **The rule:** 608(c) has no location condition. Its wording is "in all instances", and the Casebook's 608 guidance adds "regardless of whether or not board contact is made".
  - **Now, at both sites:** "Under USA Hockey, a reckless one with excessive force on a vulnerable or defenceless player must be a match, boards or not (608(c))."
  - **620(b) sentence:** now "ends your game too, whether or not it is called checking from behind".
  - **:432:** split at the IIHF/USA Hockey boundary. The USA Hockey half carries a new ⚠️ on the 608(c) run.
  - **CM continuation:** a new ⚠️ on "driving a screener who cannot protect themselves into the net from behind must be a match" (HC 7.5(c), CARHA 53(b)).
- **zone_entries KT10 (70 → 56 words).** Now reads: "…peel into the passing lane, never into the goalie: ⚠️ **charging one can end your game in any book** — automatically under Hockey Canada."
  - HEAD named three books, which implied the NHL, IIHF and PWHL could not eject.
  - CARHA's "in the crease or if it injures" and USA Hockey's "if reckless" were demoted to their carriers: KT11, the body paragraph "The dump is no licence to hit the goalie", and two CM bullets.
  - **Hockey Canada 8.5(b) four-sentence split:** four copies now read "On the head, Hockey Canada calls it head contact…".
- **forechecking.**
  - **KT2 (65 → 60):** "As F1, skate under control at the space you deny, stick in that lane, and angle into corners in any league." No limb was cut.
  - **:628:** "a match penalty is mandatory if a reckless one uses excessive force on a vulnerable or defenceless player (608(c))". Before, the match hung on any one of the three triggers.
  - **:288:** CARHA 49(a)/30(a) and USA Hockey 604(d) are now separate clauses.
- **rules_primer.**
  - **NHL fight sentence:** now three sentences, each scoped ("In the NHL", "There").
  - **Fighting continuation:** split at "The IIHF takes a harder line than the NHL". A new ⚠️ sits on "Under USA Hockey ⚠️ **that game misconduct also costs at least your next game** (404(b))".
  - **NHL goalie paragraph:** split so that "the PWHL is the same on both" means 42.5 and 21.1. That was ambiguous at HEAD. PWHL Rule 69 is Handling Puck, so the broader reading would have been wrong.
  - **Officials paragraph:** each citation now sits beside its own books.
- **body_contact.**
  - **Sentences:** six split.
  - **NHL Rule 46 bullet:** split, with a new item "**NHL aggressors and late joiners.**". The third-man ⚠️ is now its own unit.
  - **USA Hockey 629 bullet:** split, with a new item "**USA Hockey's Casebook catches every player who leaves the bench during an altercation,**".
- **getting_started KT14:** "Leave the helmet on; move the player only to clear their airway." This is 61 words. Safety accepted it because cutting "the player's" had left "them" with nothing to refer to, and clarity on a medical instruction outranks the cap.
- **ozp :746:** "So each of those majors costs this game and at least your next." The accidental-high-stick injury condition is now credited to the Note to 62(b). Before, it was credited to 30(a), whose Note exempts every accidental high stick.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** nothing wrong and no scope drift across all seven files.<br>Settled:<br>• "both" = 42.5 + 21.1;<br>• "sometimes" accurate for CARHA 52(b) and USAH 607(b);<br>• "a body check that injures" is fair for CARHA 49(a).<br>Optional edits: forechecking :288, ozp :746 credit (both applied).<br>**Confirmation:** all six fixes OK. KT10's "in any book" was verified against NHL/PWHL 42.1/42.4, IIHF 42.4 (both editions), USAH 607, CARHA 52/30(a), HC 8.5(b) and the British books; "automatically under Hockey Canada" is accurate for a goalie out of the crease. |
| safety-reviewer | **First read:** one Major, glossary "match there". Minors: KT14 antecedent, KT10 closed three-book list, forechecking :628 "the match", bcb label without an object. All three new ⚠️ were earned.<br>**Confirmation:** CLEAR. The new glossary 608(c) marker is earned, and KT10 is safe as written. |
| site-reviewer | Seven pages at 400×812 DPR 2 light/dark and 1440 light, on the 06:51:03 build. Every worst window is unchanged (ozp 49.0, bcb 48.6, the highest). 0 bare, 0 untreated, 0 panels, 0 console errors. Five briefed amber runs render as warn-inline with citations outside the run. The sixth (the bcb Casebook item) has no marker; HEAD's 629 bullet carried none either, so the brief, not the page, was wrong. |

### C11
The coordinator wrote no content. Every post-review edit is either reviewer text or an author correction confirmed by both reviewers:
- glossary :432: the author's split to stay under 1,200 characters, plus the marker on the 608(c) half;
- zone_entries KT10: the author took safety's 56-word text rather than keep "sometimes" at 61–63 words.

The sources/README.md line is the coordinator's. It only routes CARHA checks to the file already recorded as operative (owner ruling 15 Oct 2026).

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 18 Nov 06:51:03. The newest content file is zone_entries.md at 06:48:49.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **Panels:** `--panels --file` reports 0 on all seven files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT HALF UNMARKED. Marked units: glossary 41→43, rules_primer 197→198, bcb 202→203. Each rise is a new marker that a reviewer upheld.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **USAH:** 404(b), 403(b), 604(d), 607, 608(a)–(c), 615(f), 620(b), 629 and Casebook 608/609/629.<br>**HC:** 7.3(b), 7.5(c), 7.6(c), 7.7(c), 8.5(b).<br>**CARHA 2026:** 30(a), 32(d), 49(a), 52, 53(a)/(b), 62(b) Note, 71(a).<br>**NHL/PWHL:** 21.1, 40, 42.1/42.4/42.5, 46.2/46.7/46.16.<br>**IIHF:** 40, 42.1, 42.4, 52 Situation Handbook.<br>**In-House/EIHL:** charging. |
| D2 Exceptions | CARHA accidental high stick (30(a) Note vs 62(b) Note); 608(c) location-free |
| D3 Cross-book divergence | Where a goalie charge ejects automatically (HC only, out of the crease) |
| D4 Citation integrity | ozp 62(b) Note; rules_primer officials citations re-attached |
| D5 Provenance | No quotation edited |
| D6 Negative existence | KT10 closed three-book list opened |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | KT cuts name their carriers (KT10 → KT11, body, CM) |
| D10 Key-facts | no facts line changed |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | "there" after a place name; "them" antecedent; "the match" heard as the game; label without an object |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows: From W438)
1. **Next readability wave.**
2. **Sweep for the "there"-after-a-place shape** on other pages that carry the USAH 608 ladder.
3. **getting_started KT14** stays at 61 words, by safety's decision.
4. **Optional:** zone_entries KT10 "wherever the goalie is".
5. **Optional:** forechecking KT2 "your stick".
6. **bcb third-man item:** the marker sits on the discretionary limb (HEAD arrangement).
7. **rules_primer:** the IIHF 40.1 "likely to cause injury" qualifier is not voiced.

## What this method could not have found
- A split that moved a qualifier's meaning without leaving an unusual word. The glossary "there" was caught only because the reviewer read the spoken text.
- Copies of the old KT10 or "there" wording on sibling pages.
- Real synthesised audio, and any device other than Chromium.

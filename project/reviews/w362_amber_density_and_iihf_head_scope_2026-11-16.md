# W362: more amber runs and caption warnings cut to their instruction; the IIHF head scope extended; barred-checking lists completed (16 November 2026)

**Files:**
- content/systems/forechecking_systems.md
- content/technique/shooting.md
- content/technique/body_contact_and_battles.md
- content/positions/goaltender.md
- content/systems/faceoffs.md
- content/systems/defensive_zone_coverage.md
- site/src/diagrams/forechecking_systems.mjs
- site/src/diagrams/game_management.mjs
- site/src/diagrams/special_teams.mjs
- site/src/data/diagrams.json (rebuilt). Only 8 captions changed: forecheck-212, forecheck-roles-rotate, forecheck-212-stacked, forecheck-2-3-lock, forecheck-press, forecheck-pinch, five-on-six-clear-three-outcomes and pk-wedge-plus-1.
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave covers W361 plan rows (1) to (5), from the record `w361_long_amber_runs_and_captions_2026-11-16.md`.

## What changed
Two rendering rules shape every edit below. A caption's amber runs from its first ⚠ to the end of the caption. An inline amber ends where its `**` run ends.

**A. forechecking_systems (.md and .mjs)**
- **:339.** Amber 396 → 214 characters, with words changed. It now reads: "Called as checking from behind, that hit ends your game — under USA Hockey too if it is forceful at the boards, drives them head first into the boards or net, is reckless, or carelessly contacts their head or neck." Every USA Hockey limb that ejects stays in amber, as W361's safety review required. The ladder for the other five books now comes straight after it in plain text.
- **facts :750.** Now reads: "Never: Hit a carrier from behind; it ejects under the NHL, PWHL and CARHA, and the IIHF and Hockey Canada off the head; on the head, plan on it. Instead take the puck, take the ice or angle them off it". The prohibition and the alternative are separate sentences, so they can no longer be heard as "never take the puck".
- **:972.** Amber 449 → about 199 characters. It now reads: "Into the boards or goal frame on a player who cannot protect themselves, Hockey Canada and CARHA must make it a match, and so must USA Hockey for a reckless one with excessive force, boards or not." The safety review restored "boards or not" (608(c) has no boards condition).
- **Captions.**

  | Caption | Amber, characters | How |
  |---|---|---|
  | forecheck-212-stacked | 384 → 87 | Reordered; punctuation only. |
  | forecheck-2-3-lock | 387 → 116 | "bars it" → "bars body checking"; list extended (see below). |
  | forecheck-press | 412 → 220 | Glyph moved. |
  | forecheck-pinch | 417 → 220 | Glyph moved. |

- **Barred-checking lists in forecheck-212, roles-rotate and 2-3-lock.** These were plain text. They now add:
  - "and lets a local governing body bar it in any classification" (USA Hockey 604(a));
  - "Ice Hockey UK in its U10 and U12 junior leagues and the Women's NIHL" (ihuk_junior_roc.txt and ihuk_wnihl_roc.txt, "non-checking");
  - in 2-3-lock, also "and CARHA in every game".

**B. shooting, body_contact_and_battles, goaltender**
- **shooting facts :508 (300/300).** Its "never a bare minor" is now scoped "IIHF and Hockey Canada: off the head; on it, plan on ejection anyway". IIHF 48.1 says head contact supersedes, and 48.2 allows a minor. Every limb is kept.
- **shooting Sources trailer :1076.** The ⚠️ was removed and no word changed. The trailer is unvoiced (confirmed by render), and it is a provenance note rather than a hazard, so the same treatment W357 gave the offensive_zone_play trailer applies. check_marker_pairs reports this as 1 LOST, which is intended.
- **IIHF head scope, same claim in every layer.** Each site now covers the IIHF as well as Hockey Canada, with the on-head counterweight:
  - body_contact :51, :789 ("plan on ejection anyway"), :1454, and CM :2059 ("the IIHF, off the head"; "Hockey Canada's (off the head) and CARHA's lightest…");
  - goaltender :1625 and CM :1700.

  About 20 other sites were checked and left alone. Each already said "plan on it", was about a non-head act, or already carried the head limb.

**C. game_management.mjs, special_teams.mjs, faceoffs, defensive_zone_coverage**
- **five-on-six-clear-three-outcomes.** Amber 534 → 43 characters ("You can be iced against a pulled goalie."). Sentences were reordered and no word changed.
- **pk-wedge-plus-1.** Amber 358 → 116 characters ("Block from close and on your feet, head out of the lane…"). The glyph moved and no word changed.
- **faceoffs :1210.** Amber 510 → 92 characters. It now reads "A hit on a player turned toward the wall is checking from behind, and never just two minutes." The safety review added ", and never just two minutes", matching the wording defensive_zone_coverage :753 already ships.
- **defensive_zone_coverage :751.** Amber 298 → 116 characters. It now reads "…Hockey Canada and CARHA must make it a match." The USA Hockey 608(c) sentence follows as plain text.
- **defensive_zone_coverage :753.** Amber 162 → 47 characters ("Checking from behind is never just two minutes.").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Nothing wrong, and nothing understated. It confirmed:<ul><li>the USA Hockey limbs at :339: 608(b) and 620(b) are mandatory, and "forceful at the boards" is Casebook 608 Sit. 1 "must", an official interpretation;</li><li>608(c) at :972;</li><li>the list limbs, against the IHUK Junior, U10 and WNIHL books and USA Hockey 604(a);</li><li>that only the IIHF and Hockey Canada carry a "supersedes" clause, so "plan on ejection anyway" is correct as planning advice;</li><li>shooting :508;</li><li>no word changed where none was claimed.</li></ul>Three fixes, all applied: CM :2059 Hockey Canada scope, :789 antecedent, and "local governing body". |
| safety-reviewer | No critical or major findings. M1: :972 had tied USA Hockey's match to the boards, so "boards or not" was restored inside the amber. M2: defensive_zone_coverage :751's amber was a fragment, so it was extended to the end of its sentence. The optional faceoffs :1210 price was applied. It upheld:<ul><li>:339's bare "ends your game" (scoped by "called as checking from behind");</li><li>:750 voiced alone;</li><li>the pk-wedge trade (the protective mechanics stay in amber);</li><li>the IHUK and WNIHL limbs as voiced;</li><li>body_contact :51.</li></ul> |
| safety-reviewer, final read | All five post-review edits CLEAR. Each changed unit was read as amber alone and voiced. |

The coordinator ruled on two author questions:
- **body_contact :789.** "The NHL, the PWHL and Hockey Canada end your game every time it is called" stays. A hit called as checking from behind under Hockey Canada is 7.5's minor plus game misconduct. On the head it is called head contact instead.
- **defensive_zone_coverage :751.** The amber names only Hockey Canada and CARHA. That is not a closed-list defect: the rules-verifier ruled that 608(c) needs reckless excessive force on top of this trigger, so it is not the same price at the same trigger. The safety reviewer prescribed this extent.

### C11
The coordinator wrote no content. Every post-review edit uses the reviewers' prescribed texts.

## Checks after the last content edit
A full `npm run build` with the absolute binary ran after the final edit. It exited 0 and ran through check-links; `dist` is dated 14:18. `find content site/src/diagrams -newer site/dist/index.html` returns nothing.

After the build, these all passed:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets;
- check_counts --update, with no change;
- check_callout_flow --bare: 0;
- check_caption_pairs: 0 violations;
- check_readability: 0 paragraphs over 1,200;
- check_marker_pairs: 0 LOST and 0 SPLIT on five content files. The sixth, shooting, has 1 LOST: the intended, unvoiced Sources trailer.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every changed claim |
| D4 Citations | rule text quoted from sources/, including the IHUK Rules of Competition |
| D8 Counts | "every book", "every book but the IIHF" and "never just two minutes" checked book by book |
| D9 Summary layer | No Key Takeaway changed. Facts lines :508 and :750 were read voiced alone. |
| D11 Reader safety | safety-reviewer twice |
| D12 Read-aloud | Rendered SSML for every changed stem and every host of the 8 captions. Each caption is still one "Important." paragraph. Marked units are unchanged apart from the intended unvoiced trailer. |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 14:18 build (details below). |
| D5–D7, D10, D13 | not engaged |

D15 detail. The pass covered ten pages (forechecking_systems, game_management, faceoffs, defensive_zone_coverage, special_teams, how_to_watch_hockey, shooting, body_contact_and_battles, goaltender, rink_map) in Playwright Chromium, at 400×812 DPR 2 and 1440×900, in light and dark.
- Every changed run forms span.warn-inline. There were 0 bare glyphs, 0 panels, 0 console errors in 44 loads, no off-origin requests and no horizontal scroll. The shooting trailer has no amber.
- Worst 400px window at each site (no changed site is above 31%):

  | Site | Before | After |
  |---|---|---|
  | forechecking :339 | 47.9% | 27.5% |
  | forechecking :972 | — | 23.1% |
  | the four forechecking captions | — | 11–25% |
  | 6-on-5 caption | 57.8% | 4.8% |
  | faceoffs :1210 | 56.5% | 10.5% |
  | defensive_zone_coverage :751/:753 | 57.8% | 26.3% |
  | pk-wedge-plus-1 | 36.7% | 12–15% |

- Page worst at 400px:

  | Page | Before | After |
  |---|---|---|
  | forechecking | 49.7% | 41.0% |
  | game_management | 57.8% | 39.2% |
  | faceoffs | 56.5% | 45.5% |
  | defensive_zone_coverage | 57.8% | 40.2% |

## Found, not fixed (plan rows)
- **Pages still over half a phone screen, all pre-existing:**
  - body_contact_and_battles: 64.8%, from Common Mistakes runs of 352 and 258 characters;
  - goaltender: 58.7%, from a 332-character net-front caption;
  - special_teams: 52.6%, from the W358 "A hit from behind" runs;
  - shooting: 50.0%, from the USA Hockey and CARHA runs above "Pull up".
- **The remaining page-worst windows:**
  - faceoffs Key Takeaways, 45.5%;
  - forechecking "Contact with the goalie", 41.0%;
  - defensive_zone_coverage Key Takeaways, 40.2%.
- **IIHF wording across the corpus (W360(3)).** The sites that say "ejects" for the IIHF overstate 43.3, which is discretionary and applies only to reckless hits.
- **British competitions not on disk** (SIH juniors, university and rec) may also be non-checking. The "find out first" lists cannot be complete without them.
- **The 1440px caption metric (W361(6)).**

## What this method could not have found
- **Reordered captions in hosts not rendered.** Defender and winger were not rendered for the reordered captions.
- **Hits from behind that reach the head.** Whether the NHL, PWHL, CARHA or USA Hockey call such a hit as checking from behind or as head contact is unwritten in those books.
- **Precedence among the IHUK books.** Whether the IIHF's permission could override a "non-checking" format label was not tested.
- **Real devices.** No real phones or other browsers were used.

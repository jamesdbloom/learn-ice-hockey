# W381: the W379/W380 carry-overs — junior/senior high-stick limits, other books' head-butt suspensions, CARHA's flat head-butt match, and Hockey Canada head-contact facts made scope-exact (16 November 2026)

**Files:**
- content/technique/shooting.md
- content/positions/winger.md
- content/technique/body_contact_and_battles.md
- content/positions/defender.md
- content/systems/neutral_zone_systems.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed. The other modified content files in the tree (on_ice_communication, language_and_glossary, puck_handling, defensive_zone_coverage, offensive_zone_play, passing_and_receiving) belong to W382, which is in review. They are unstaged.

## Source
- W380 carry-overs (1), (3), (4), (5) and (8).
- W379 carry-overs (1), (2) and (4).
- A read-only census of cross-checking injury tiers (W379 (5)). That census briefed W382.

## What changed

**shooting**
- **:909, Junior/Senior high stick.** "Up to a double minor with an injury" became: a double minor only for minimal or glancing contact (9.5(a), Interpretation 2); anything more is 7.7 Head Contact, a minor and misconduct at the least.
- **:909, the item vi mandate.** It is now stated with its scope: "⚠️ **Plan on the major and game misconduct if a careless or forceful follow-through injures:** Interpretation 2 to Rule 9.5(a) mandates it for an aggressive, reckless, negligent or forceful stick action that injures the head or neck, and although its examples are slashes, cross-checks, hooks and stick lifts rather than shots, it bars the double minor for anything that warrants the major."
- **New facts :891.** It carries the J/S mandate, with "(its examples are other stick fouls, not shots)".

**winger**
- **Facts.**
  - :557 (USA Hockey): adds "if reckless plan on a match (620(c), 602(a))".
  - :558/:559 (Hockey Canada): split so that "an accidental one injures" and 7.7(b)¶3 both fit.
  - New :560 (CARHA 50(a)–(c), 48(b)).
- **Body :583 and What it costs :819/:823.**
  - The USA Hockey "a match can be added" became "plan on a match", because 602(a) says "shall".
  - New CARHA limb: "lead into them with your helmet and plan on it being called head-butting, a match (48(b))". CARHA never defines head-butting, and 50(b) separately prices intentional contact made with equipment.
- **Common Mistakes.** Split into two bullets: encroaching, and "Leading with your head on a draw". The split bullet now carries the USA Hockey, Hockey Canada and CARHA tiers.
- **KT11 :979.** The CARHA clause was added inside the existing amber run. The coordinator's proposed trim was declined because it would have dropped the "can" for HC 6.2(e) and CARHA 57(d). KT11 is 128 words.

**body_contact_and_battles, the head-butting section**
- USA Hockey 405(c), NHL 21.2 and PWHL 21.2 match suspensions were added to the body bullets and to facts :2027/:2031.
- The section now states every head-butting match suspension. The IIHF and EIHL have no head-butting match.

**defender**
- **Facts :289.** Final text: "Rule: Hockey Canada head contact: match if defenceless or meant to injure. Must be a major and game misconduct: a high cross-check, any division; in minor/female an accidental head hit that hurts (violence alone: may); in Jr/Sr a highly violent one or a head injury off glass, ice or boards (7.6, 7.7)".
- **Body :302.** Now reads "an accidental head hit that injures".
- **Facts :436.** The Hockey Canada head hit beside USA Hockey 620(b) now reads "…; else plan on a game misconduct".

**neutral_zone_systems**
- **New facts :363 and a body :399 sentence.** These route a Hockey Canada charge to the head to 7.6/7.7, with its mandatory tiers. Before this, voiced alone, a head charge read as the discretionary 7.4(b) major.

**rules_primer**
- **:29.** Adds "a match keeps you out of every game until your case is dealt with (4.10(a))".
- **:1142.** "a push is still a cross-check" became "a push can still be called a cross-check". The old wording was false under HC 9.2 Interpretation 1 and the USAH Casebook 609 Sit. 2.
- **KT8.** Left unchanged. Its omitted injury tier is optional, because the act is accidental.
- **"any deliberate cross-check."** Confirmed correct and kept: HC 7.6(b) Interpretation 2 limits the minor/female above-the-shoulders tier to "a deliberate cross-checking action".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier R1 (winger, rules_primer) | **WRONG:** winger :583 and :823 stated a helmet lead "is head-butting" as certain. Hedged to "plan on it being called". rules_primer: all OK; "deliberate" is correct per 7.6(b) Interp. 2. Final read: all OK. Optional: KT11's HC match omits "cannot protect themselves" (plan row). |
| rules-verifier R2 (shooting, body_contact, defender, neutral_zone) | **WRONG:** <br>• shooting :908's item vi was presented as a mandate written for shooting. Fixed with the verifier's text. <br>• defender :289: "an accidental one" read as a cross-check, but 7.6(b)¶2 covers any accidental head hit. Fixed. <br>NHL 47.6 / PWHL 47.5 do not undercut 21.2. Final read: :891 scope (fixed); all else OK. |
| safety-reviewer S1 (winger, rules_primer, defender) | **Major M1:** defender :289's list shape made the high cross-check conditional. Fixed with the reviewer's text. **Major M2:** winger KT11 lacked the CARHA head-butt. Fixed, with R1's hedge. **Minor:** the 1,676-char CM split (applied). Final read: CLEAR. |
| safety-reviewer S2 (shooting, body_contact, neutral_zone) | No Major. **Minor:** the J/S negligent-stick mandate was absent from the facts (new :891). The neutral_zone harsher-direction overstatements were left by agreement. Final read: CLEAR. Minor: the examples list was incomplete; now "slashes, cross-checks, hooks and stick lifts" (body) and "other stick fouls" (facts, cap). |

### C11
The coordinator wrote no content. Where two reviewers offered texts for one site, a single text was used:
- **defender :289:** S1's restructure, which carries R2's fix.
- **winger KT11:** S1's insertion, worded with R1's hedge.
- **shooting :891:** R2's text, then the S2 example list within the cap.

Every post-review site was re-read by at least one reviewer of each kind.

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0. `dist/index.html` is dated 20:54:10, and no W381 file is newer.
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets: pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_marker_pairs: 0 LOST and 0 SPLIT on all six files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | two rules-verifiers, two reads each, against: <br>• HC 4.10(a), 6.2, 7.1, 7.4, 7.6, 7.7 (with Interps), 9.2 Interp. 1, 9.5 Interp. 1–2 <br>• CARHA 34(a), 48, 49, 50, 54, 57 <br>• USAH 405(c), 602(a), 609 + Casebook, 613, 619, 620 + Casebook <br>• NHL/PWHL 21.2, 47, 59, 76.7 <br>• IIHF 59, 76.7 |
| D4 Citations | 4.10(a), 405(c), 21.2, 48(b), 50(a)–(c), 602(a) and 620(c), added and verified |
| D8 Counts | "in most books it will", "in three books", "any division", "every book that writes one" |
| D9 Summary layer | winger KT11 changed and read voiced alone; rules_primer KT8 judged and left |
| D10 Key-facts layer | shooting :891, winger :557–:560, body_contact :2027/:2031, defender :289/:436, neutral_zone :363 — each read voiced alone |
| D11 Reader safety | two safety-reviewers, two reads each |
| D12 Read-aloud | every page rendered by its author into its own `--out` |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 20:54:10 build (below) |
| D5–D7, D13 | not engaged |

**D15.** The site-reviewer covered six pages in Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark. Worst 400px window per page:

| Page | Worst 400px window |
|---|---|
| shooting | 43.9 |
| winger | 44.2 |
| body_contact | 48.5 |
| defender | 47.6 → 47.7 |
| neutral_zone | 31.2 |
| rules_primer | 43.9 |

- **No window is over 50%.**
- Each new amber run forms with its glyph leading. winger KT11 is one 319-char run. The Common Mistakes split gives each half its own run.
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll.

## Found, not fixed (plan rows)
- **winger :897.** The new "Leading with your head" bullet's CARHA head-butt limb is plain text, while :583, :823 and KT11 amber it. Facts :560 still says "a head-butt… is a match" without the hedge; that is the stricter direction.
- **winger KT11.** Its HC match clause omits "cannot protect themselves". It is carried at :558, :583 and :897.
- **winger :861/:868, rules_primer :431, passing :474.** "Must if hurt" appears without "accidental". This is the harsher direction.
- **faceoffs :1162.** It says "that is head-butting in every book", flat. It needs the same CARHA hedge.
- **CARHA 48(a).** This general deliberate-injury match may be missing wherever the corpus prices a CARHA foul whose own rule has no match limb (hooking, holding, tripping, interference). W382 found one such instance.
- **USA Hockey Casebook 620 Sit. 2.** Accidental contact in the normal course of play is not head contact. That makes winger's "however little force" harsher than the book.
- **neutral_zone :361.** 7.4(b) injury overstates for J/S head charges. This is the harsher direction and was left by agreement.
- **Still open from W380 (8)** (not done here; the commit gate caught the plan marking it done): passing_and_receiving facts :442 "match if defenceless" omits HC 7.7(c)'s attempt-to-injure limb, which is permissive; center facts :519 omits 7.6(b)¶1's discretionary violence major. W381 did only that item's winger facts limb.

## What this method could not have found
- A CARHA referee's actual call on a helmet lead: 48(b) or 50(b).
- Hockey Canada or CARHA rules pricing these acts under names that were not searched.
- Real devices.

# W359: a 96%-amber screen cut, and closed book lists on goalie charging and barred-checking prices (16 November 2026)

**Files changed:**
- content/foundation/rules_primer.md
- content/positions/center.md
- content/systems/zone_entries.md
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave takes the following W358 plan rows (record `w358_closed_list_amber_runs_2026-11-16.md`):
- **(4c)** rules_primer's "Delayed offside and tagging up" section has a 400px window that is 96.3% amber.
- **(1) and (2b)** The center facts line :486 and the zone_entries facts lines :426 and :793 give the goalie-charge price as a closed list. They leave out USA Hockey 607(b).
- **(2)** forechecking_systems :1007, "A CARHA charging major always ends your game", had not been tested.

## What changed
Three authors worked on disjoint files: A had rules_primer, B had center and zone_entries, and C had forechecking_systems.

**A: rules_primer.** No word changed except the scope fix below.
- **:204** The bold run went from 750 characters to 65. The amber now reads "That faceoff prices only the offside, never the hit or the swing.", and the Hockey Canada ladder follows in plain text.
- **:206** The first run went from 816 characters to 220. It gives Hockey Canada's minor and female head-contact floors, plus the major and game misconduct for violence, which is mandatory on injury.
- **:206, second run (added after the safety review).** A second glyph now sits on the paragraph's existing last sentence: "At every Hockey Canada level a cross-check above the shoulders is a major and a game misconduct whether or not it injures, and a head hit on a player who cannot protect themselves, or one meant to injure, is a match penalty". The only words added are "Hockey Canada", inserted after the final read.

**B: center and zone_entries.**
- **center facts :486** The line is split in two because the full set of books would not fit the 200-character cap.
  - The `Never:` line now ends "a charge can end your game in every book".
  - A new `Rule:` line reads: "A charge on the goalie is a mandatory major and game misconduct under Hockey Canada 8.5(b) wherever they are, under CARHA 52(b) in the crease or if it injures, and under USA Hockey 607(b) if it is reckless".
- **center :501** The amber is shortened to the instruction plus "charging one can end your game in every book". The three mandatory books follow in plain text.
- **zone_entries facts :350, :426, :793** Each gains "…, and under USA Hockey 607(b) if reckless".
- **zone_entries :351** Now reads "Rule: Under USA Hockey, for a reckless charge on the goalie plan on a match and a likely multi-game suspension (602(a))". The word "also" was dropped after review.
- **zone_entries :1172 (body)** Now names Hockey Canada 8.5(b), CARHA 52(b) on injury and USA Hockey 607(b) on recklessness.
- **zone_entries CM :1182** Gains USA Hockey 607(b) and, after review, CARHA 52(b) on injury.

**C: forechecking_systems.**
- **:1007** Tested and true; left unchanged. CARHA 30(a) makes every major a game misconduct except an accidental high stick.
- **:1013 (section-lead amber)** The amber is shortened to "Where your game bars or limits checking, a check can still end your game." Plain text follows, naming:
  - the mandatory price if the hit injures, under Hockey Canada and CARHA (7.3(b); 49(a), 30(a));
  - the mandatory price if it is reckless, under USA Hockey (604(d));
  - "Hockey Canada and CARHA can give one for violence alone" (CARHA was added after review);
  - the PWHL 52.5 and IIHF 101.1 majors that eject.
- **:628 (amber)** Now reads "Under the NHL, IIHF, PWHL and CARHA any call for checking from behind ejects you, and under Hockey Canada unless it reaches the head; on the head, plan on it." It previously named only the NHL and PWHL. The IIHF was moved in after review, because IIHF 43.2 has no minor and 43.3 is a major plus an automatic game misconduct.
- **:616 and :288 (plain text)** Both add CARHA 49(a)/30(a) on injury and USA Hockey 604(d) on recklessness. :288 is scoped "where USA Hockey bars checking".
- **facts :319 and :701** "on the head, and under the IIHF, plan on it" became "under the IIHF, or on the head, plan on it". Voiced alone, the old order could be heard as "under the IIHF, only on the head".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | No unit was wrong. The goalie-charge set (Hockey Canada 8.5(b), CARHA 52(b), USA Hockey 607(b)) is exact. The NHL/PWHL 42.5 game misconduct and IIHF 42.3/42.4 are not mandatory floors, so the set is not a closed-list defect. Three findings, all applied: forechecking :628 understated the IIHF; forechecking :1013 left CARHA out of "violence alone"; zone_entries :351's "also" pointed at the line above. rules_primer :204/:206 were confirmed word-identical to HEAD at the time. |
| safety-reviewer | One major, applied with the reviewer's exact text. rules_primer :206's shortened amber had moved 7.6(b)'s mandatory head-high cross-check ejection and the 7.6(c)/7.7(c) match out of the amber, so a skimmer saw a ceiling one tier too low. The fix was a second glyph on the existing last sentence. Two minors, both applied: the parse of forechecking :628, and zone_entries :351. Everything else was clear, with every new plain completion in the same spoken `<p>` as its amber. |
| safety-reviewer, final read of post-review edits | 7.7(b)/(c) support "every level" for Junior and Senior. Two minors, both applied: the second :206 run named no book, which is false for the NHL (59.2, 48.3), so "Hockey Canada" was added; facts :319 and :701 had the IIHF parse. :628, :1013, :288, :351 and :1182 were clear. The sibling sites saying "under the IIHF, plan on it" are cautious, not permissive, so they are no reader risk. |

### C11
The coordinator wrote no content. Every post-review edit uses the reviewer's prescribed text, except two:
- **zone_entries :1182's CARHA injury limb.** This was optional; the rules-verifier had already confirmed 52(b), and the final read cleared it.
- **forechecking :288's USA Hockey scope.** The safety reviewer flagged it, and the final read cleared it against 604(a)/(d).

## Checks after the last content edit
A full `npm run build` ran after the final content edit (13:00:16), using the absolute binary. It exited 0, ran through check-links, and wrote `dist` at 13:03. The built HTML carries "At every Hockey Canada level" and two copies of "under the IIHF, or on the head, plan on it".

Then:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets and check_counts --update all passed, with no figure changed;
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST and 0 SPLIT on all four files;
- check_readability: 0 paragraphs over 1,200 characters.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every claim; the final read covered 7.7, 604(a)/(d), 52(b) and the NHL 59.2/48.3 contrast |
| D4 Citations | rule text quoted from sources/ |
| D8 Counts | "every book" (center `Never:`) was verified against all six books by the rules-verifier |
| D9 Summary layer | facts lines and CM :1182 are in the diff; no Key Takeaway changed. The KTs carrying the same goalie-charge set (center KT9, zone_entries KT10/KT11) were confirmed complete by author B |
| D10 Key-facts layer | the center split and the zone_entries/forechecking facts lines were read voiced alone by the safety reviewer |
| D11 Reader safety | safety-reviewer, twice |
| D12 Read-aloud | rendered SSML: every new plain completion is in the same `<p>` as its amber; marked units unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 12:58 build, all four pages: Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark. Every changed run forms span.warn-inline; 0 bare glyphs, 0 panels, 0 console errors, 0 off-origin requests, no horizontal scroll. rules_primer "Delayed offside and tagging up": worst 400px window 96.3% → 42.1% (1440: 75.3% → 29.7%); the two head-contact runs read as two separate runs about 7 lines apart. center goalie paragraph 65.5% → 19.1% amber. forechecking :628 screen 15.8%, :1013 9.4%. zone_entries CM screen 10.0%. The last two edits ("Hockey Canada", +2 words inside the run; the facts reorder, −1 character each) came after that pass; the 13:03 rebuild contains them (grep above) and they were not re-viewed. |
| D5 Provenance, D6 Self-narration, D7 Numeric ownership, D13 Folklore | not engaged: no source, number or folklore changed |

## Found, not fixed (plan rows)
- **forechecking "Late, sideways and third-man hits"** leaves CARHA 66(a)/(e) out of every layer. That includes facts :1067, "No book caps a late hit at a minor", which names five books.
- **forechecking's IIHF check-from-behind price is stated two ways.** :628 says ejects; :319, :339, :701, :712, :750, :765, :972 and :979 say "plan on it". This is consistent in direction, but a file-wide decision is open.
- **Pre-existing high-amber windows from long caption warnings:**
  - forechecking: 81.9% at 400px and 96.2% at 1440px, from the 633-char "Go hard at the carrier, never through them…" caption in "2-1-2 — the aggressive standard";
  - rules_primer: 65.5% at 400px, from a 636-char caption in "Hybrid, no-touch and touch icing".
- **rules_primer near-400-char runs:** :1111 is 346 characters and KT :1210 is 382. They were left as they are, because shortening the KT risks a closed list.

## What this method could not have found
- **Other documents.** Other documents may carry the same goalie-charge or barred-checking sentences, or an "at every level" head-contact line, without the new USA Hockey 607(b)/604(d) or CARHA limbs. Only these four files were swept.
- **Other rules for the same acts.** Rules pricing the same acts were not searched for: interference with a goalie (CARHA 66(b), NHL/IIHF 69) and USA Hockey 620 on a head-high hit from behind.
- **The last two edits on screen.** The last two edits were not re-viewed in a browser.
- **Real devices.** No real phone, Safari or Firefox was used.

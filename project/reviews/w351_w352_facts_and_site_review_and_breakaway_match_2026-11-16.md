# W351–W352: facts-reviewer and site-reviewer pass on W349/W350, and the four fixes it found (16 November 2026)

**Files:**
- content/systems/defending_the_rush.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/playing_without_the_puck.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md
- this record

## W351: review only, no edits
W349 and W350 added or edited facts lines that no facts-reviewer had seen. Their longer captions and new inline-amber units had not been seen in a browser.

### Facts-reviewer (8 documents, the 9 named lines)
No critical findings. Three majors:
- **M1 — defending_the_rush facts :634 (Breakaways, open ice).** The block gave no Hockey Canada head match (7.6(c)/7.7(c)), and the line was the third copy of the 608(c) line.
- **M2 — puck_support_and_spacing facts :343.** The line says "most books eject you … plan on a match", but its section body (§"The counterintuitive rule", :352) said neither.
- **M3 — playing_without_the_puck facts :822.** Its intent-to-injure limb had no body source anywhere in the document; it was apparently lost when 4c6c0695 cut the inherited penalty lists.

Minors (plan row):
- pwtp :822 cannot fit the head limb (block 14/14, coaching 8/8).
- risk :843 could split.
- faceoffs :587/:591 have no HC head limb.
- on_ice_communication :298 is a double negative aloud.
- special_teams :815 overstates slightly in the safe direction.

### Site-reviewer
Playwright Chromium 148 headless at 320/375/400/1440, light and dark; the Chrome extension refused localhost three times. No critical or major findings.
- **Forecheck captions.** The coaching disclaimer sits outside the amber. The amber run is 882 chars: 403px tall at 400px, inside a 922px figure. That is readable but taller than a phone screen; if it is ever cut, cut the multi-book tariff sentence, never the instruction.
- **Inline amber.** Every new W349/W350 inline-amber unit renders as span.warn-inline: no panel, no bare glyph.
- **Key Takeaways.** The long KTs are 520–578px at 400px, with nothing broken.
- **Console.** No console errors and no off-origin requests.
- **Minor.** body_contact KT6's "If they cannot protect themselves, plan on a match:" was plain where playing_without_the_puck KT10's is amber.

## W352: the fixes (one author)
1. **defending_the_rush :634** — replaced with the facts-reviewer's line: "A hit from behind that reaches the head of a player who cannot protect themselves is a Hockey Canada match (7.6(c), 7.7(c)); USA Hockey 608(c) must give one when it recklessly endangers…". This also ends the third verbatim 608(c) copy.
2. **puck_support_and_spacing :352** — the reviewer's sentence was added after "…even in non-checking hockey.", so the facts line now has its body source.
3. **playing_without_the_puck :845** ("The price") — the intent limb was merged into the last sentence. A reviewer then replaced "meant to injure, so do all books but the IIHF, which writes none" with "a hit meant to injure is a match in every book but the IIHF": aloud, "the IIHF writes none" could be heard as "no IIHF rule for a hit meant to injure", which is false and permissive (IIHF 43.3 is a major plus GM). The new wording is verbatim the sibling at defending_the_rush :948. Paragraph: 1,195 chars.
4. **body_contact KT6** — "⚠️ **If they cannot protect themselves, plan on a match:**", matching KT10.

**After the W352 review:**
- **defending_the_rush :635** — a new facts line: "A hit from behind into the net or boards on a player who cannot protect themselves is a mandatory match in Hockey Canada 7.5(c) and CARHA 53(b) (goal net); a hit meant to injure is a match in every book here but the IIHF". A breakaway ends at the net, and the new :634 had implied the head match was Hockey Canada's only one. The wording is the W352 reviewer's suggested line with "A hit" added so it has a subject when voiced alone. It is modelled on, but not identical to, the angling block :320: it says "net or boards" and "who cannot protect themselves", uses "in" for "—", and has no head parenthetical; its shape is closest to puck_support_and_spacing :604. The reviewer's report is not on disk; the commit gate re-checked every claim in the line against sources/. The block now holds 8 facts. The reviewer corrected the author's "14-fact cap" premise: the block held 7.
- **defending_the_rush "Angle them wide" bullet (:648)** — gained the body source for :635:
  - "Hockey Canada and CARHA must make a hit from behind into the net or boards a match when the player cannot protect themselves." The subject is named because the sentence before ends on head contact.
  - "A hit meant to injure is a match in every book but the IIHF." This is the sibling wording.
  - The bullet is 1,019 chars. It now opens chunk 036, immediately after :635 in chunk 035. The facts line and its body source are adjacent and in order; chunk 035 was already near MAX_BILLED_CHARS, so they cannot share one chunk.

## Reviews of W352
| Reviewer | Result |
|---|---|
| safety-reviewer (rules and safety, all four units) | No blocking defects. Re-verified HC 7.5(c) (both paragraphs), 7.6(c), 7.7(c); CARHA 48(a), 53(a)/(b); USA Hockey 602(a), 608(a)–(c); NHL/PWHL 21.1; IIHF 43 and the absence of any IIHF match penalty (also 0 in eihl_casebook, eiha_inhouse, eih_dops). MAJOR (pre-existing, made worse by the new :634): the Breakaways block never voiced the goal-frame match — fixed by :635 and its body source. Minor: the pwtp "writes none" wording — fixed with the reviewer's text. Upheld puck_support :352 and bcb KT6. Ruled that puck_support CM :698 needs no price (unconditional instruction, already priced four times on the page). |

### C11
The coordinator wrote no content. Every edit after the review is either:
- the reviewer's suggested text (:635 with "A hit" prefixed for a subject; pwtp :845 verbatim), or
- a reuse of reviewed wording as the body source for :635 (the W349 named-subject form, and the defending_the_rush :948 sibling).

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final content edit. After it:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets, check_counts --update (no change);
- check-arrivals: 0 hard;
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST, 0 SPLIT HALF on all four files.

check_chunk_tails lists defending_the_rush chunk 050, which ends on a British non-checking Rule line. This is a worklist item outside the edited section and is in the plan.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | W352 reviewer re-read every cited rule |
| D4 Citations | rule text quoted from sources/ |
| D5–D8 | not engaged |
| D9 Summary layer | bcb KT6 marker; KT/CM siblings checked by the facts-reviewer |
| D10 Key-facts layer | facts-reviewer (W351) over 9 lines; :634/:635 reviewed in W352 |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | every unit rendered; chunk positions recorded |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, build check-links |
| D15 Rendered site | W351 site-reviewer (Playwright, 64 measurements); W352 is text-only after it |

## What this method could not have found
- **Other documents.** Breakaway, backcheck or net-drive blocks elsewhere may imply the head match is Hockey Canada's only one, or omit the goal-frame match.
- **Re-flowed chunks.** defending_the_rush chunks from 037 onwards re-flowed after the bullet grew; they were not re-read for new claim/qualifier splits.
- **Real devices.** The site check ran in headless Chromium, not on a real phone, Safari or Firefox.
- **Audio.** No ear test.

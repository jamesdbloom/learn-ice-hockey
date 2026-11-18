# W442: USA Hockey 620(b) now reads "head, face or neck" across the corpus; Rules Primer's stock sentence says "match penalties"; Hockey Canada 7.3(c) carries its condition (18 November 2026)

**Content files changed (15):**
- foundation/language_and_glossary.md
- foundation/on_ice_communication.md
- foundation/rules_primer.md
- hockey-iq/playing_without_the_puck.md
- hockey-iq/risk_management.md
- positions/defender.md
- positions/goaltender.md
- positions/switching_positions.md
- systems/defending_the_rush.md
- systems/defensive_zone_coverage.md
- systems/game_management.md
- systems/offensive_zone_play.md
- systems/special_teams.md
- systems/zone_entries.md
- technique/passing_and_receiving.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W441 (2), (3) and (4).
- **Brief:** scratchpad/w442/brief.md. It briefed a claim, not lines. It quoted USAH 620(b) ("intentionally or carelessly contacts an opponent in the head, face or neck") and the 620 Note, which defines head contact the same way.
- **Authors:** eight agents, each owning a disjoint file group. Every author read 620 in usah.txt themselves.
- **Why:** W441 made eight pages say "head, face or neck" for 620(b). The rest of the corpus said "head or neck", so the corpus gave two versions of one rule. Leaving out "face" understated it slightly.

## What changed (voiced)
- **USA Hockey 620(b)** now reads "head, face or neck" in every layer of every file outside W441.
  - Facts lines at their cap keep the rule's own title, "head contact". The 620 Note defines that term as head, face or neck, so they are accurate.
  - These were not changed:
    - the Heads Up quotation ("a severe head or neck injury");
    - Hockey Canada, CARHA, IIHF and NHL wording;
    - injury statements.
- **Bare "match" became "match penalty"** in every line touched, wherever a British listener could hear "game". No quotation was altered.
- **rules_primer:**
  - The stock sentence "Any of these matches keeps you out of games…" (×11) now reads "Any of these match penalties keeps you out of games…". The citations were verified: NHL/PWHL 21.2, USAH 405(c), HC 4.10(a), CARHA 34(a).
  - :558 now reads "and a match penalty for a check meant to injure (7.3(c))". HC 7.3(c) says "deliberately attempts to or deliberately injures… by body-checking"; HEAD's unconditioned wording overstated it.
  - :509 now reads "so under Hockey Canada a low hit on the thigh counts too". The old "there" followed "the hips".
- **"there" removed** where it named a book after a place: risk_management facts :720, defender :840 ("under USA Hockey, boards or not") and dtr :1111.
- **Length trims to stay ≤ 1,200 characters:** dzc :754, risk :930, dtr :1099 and dtr :1111. Two antecedent fixes from safety followed: dtr :1099 now reads "a reckless hit", and :1111 reads "make the hit a mandatory match penalty".
- **goaltender :1627.** An author's gloss "— a hit on your mask included —" was deleted (safety MAJOR). USAH 620 never mentions a mask, and this page uses "a hit on your mask" for a puck off the mask. Heard alone, the gloss implied the referee prices a shot off the mask, which contradicts the page's own advice not to wait for a whistle.
- **on_ice_communication :608.** The rules review found this 620(b) site that W441 missed. It now reads "head, face or neck" and "match penalty".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** no WRONG. Every change is accurate, and all 11 stock-sentence citations and HC 7.3(c) are verified. The mask gloss was "plain reading, not ruled". It found the missed site on_ice :608.<br>**Confirmation:** all four fixes OK (602(a) supports the broader "a reckless hit"). A diff comparison found no other change. |
| safety-reviewer | **First read:** one MAJOR (the goaltender mask gloss) and two Minor antecedent drifts (dtr :1099, :1111). It upheld the trims at dzc :754 and risk :930, and dtr :1111's "has none — plan on ejection". The ⚠️ count, `**` count and glyph-to-run distance are identical on all 71 changed lines.<br>**Confirmation:** CLEAR. Spoken "Important." is equal to HEAD in all 15 files. |
| site-reviewer | 15 pages at 400×812 DPR 2 light/dark and 1440 light, on the 08:57:56 build. Every worst window is unchanged except defender 47.7 → 47.8. 0 bare, 0 untreated, 0 panels, 0 console errors. 67 amber runs carrying "match penalt…" are all glyph-led warn-inline. No page's longest run grew. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, or an author correction that both reviewers confirmed.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 08:57:56. The newest content file is on_ice_communication.md at 08:56:20.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** check_callout_flow --bare reports 0. `--panels --file` reports 0 on all 15 files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT HALF UNMARKED across 15 files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 405(c), 602(a), 608(a)–(c), 614, 618(a), 620 Note/(a)–(c), Casebook 620 Sits 1–4; HC 4.10(a), 7.3(c), 7.5(c), 8.7 Interp 1; CARHA 2026 34(a), 53(b), 62(c); NHL/PWHL 21.2; IIHF "no match penalty" |
| D2 Exceptions | HC 7.3(c) condition; Casebook 620 Sit 2 (accidental contact; plan) |
| D3 Cross-book divergence | Each book's own head-contact wording left as written |
| D4 Citation integrity | All 11 stock-sentence citations re-verified |
| D5 Provenance | Heads Up quotations kept verbatim |
| D6 Negative existence | No USAH text on a mask (Casebook swept) |
| D7 Cardinal rule | "plan on a match penalty" |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Claim swept in body, facts, CM and KT in every file |
| D10 Key-facts | Capped facts lines keep the rule title "head contact" |
| D11 Reader safety | safety-reviewer, two reads (mask gloss caught) |
| D12 Read-aloud | "match penalty"; antecedents after trims |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W442)
- Capped facts lines that keep "head contact".
- Bare "match" on lines that were capped or untouched.
- defender :291/:301 omit Casebook 620 Situation 2's accidental-contact exception (errs harsh).
- Two units at exactly 1,200 characters.
- Paraphrased USAH head-contact prices were not swept.
- Mask contact under any book is unruled.
- The site-reviewer quoted a switching_positions amber run opening "⚠️ A major there brings a game misconduct…". This is a W441-class "there" candidate, not yet read in context.

## What this method could not have found
- USA Hockey head-contact prices worded with neither "620" nor "head or neck".
- Antecedent drift after a trim that leaves no odd word behind.
- Real synthesised audio.

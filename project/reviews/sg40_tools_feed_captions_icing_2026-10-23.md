# SG40: renderer, feed guard, two checkers, four long captions, CARHA icing note, EIHL second major (23 October 2026)

## What changed

**Tools**
- **`scripts/md_to_speech.py`**
  - A voiced table row containing ⚠ now says "Important.", as paragraphs, list items and facts lines already did.
  - A dotted initialism ("U.S.", "U.K.") no longer reads as the end of a sentence, as the `_NON_TERMINAL_ABBREVIATIONS` comment already claimed.
  - Self-test: 305 assertions.
  - Full-corpus render diff against a frozen content snapshot: exactly 1 of 2,546 chunks changed. That is body_contact 144, where the six ⚠ rows of "What actually gets called" now say "Important." (+6). The U.S. fix changes no current output.
- **`site/src/lib/podcast-feed.ts` and `site/scripts/check-podcast-guids.mjs`**
  - `BASICS_SEASON` is frozen at 8. The build throws if structure.json no longer has 7 sections, because a new section would have silently renumbered the 13 live Basics episodes.
  - The checker asserts that every frozen Basics guid keeps season 8 and its episode number.
  - The built feed is byte-identical to the live feed, checked with cmp.
  - The guard was tested on a scratch copy with a dummy section.
- **`scripts/check_quote_drift.py`**
  - New labelled word-boundary pass: JOINED, SPLIT, HYPHENATION, JOINED?.
  - Corpus result: 19 hits, of which 17 are IIHF extraction line-wraps and 2 are false positives. There is no real drift.
  - Found along the way: a page header that contains letters defeats the letters-only splice defence. The Hockey Canada 6.2(a) quotation in winger and switching_positions was matched to CARHA. The coordinator checked hc.txt:4587-4594 by hand: the quotation is verbatim.
- **`scripts/check_pointers.py`**
  - New cross-document pass: spoken sentences that point at another document's Sources trailer, Notes, or a table.
  - It finds 18 hits, now a plan row to read. Self-test passes.

**Content**
- **`content/positions/winger.md` :275 and `content/systems/zone_entries.md` :766:** a one-clause CARHA note on each icing statement — some CARHA leagues divide the ice at the blue lines (Rule 65), so ask.
- **`content/foundation/rules_primer.md` :1062**
  - The Elite League fighting tariff's second-major clause is now a ⚠️ bold run with its own spoken "Important.". Before, it was voiced without escalation.
  - It reads: "A second major brings 'an Automatic Game misconduct', which ends your game — and the Casebook does not say whether it counts the game or the season, so count the season, and ask the League". This matches the owner text at uk_rules.md:310.
  - Of the six ⚠ rows in the dropped :1030 table, five were already voiced with "Important." in their own sections. This was the sixth.

**Captions** (`site/src/diagrams/`, rebuilt)
- **the-puck-decides-not-you:** 2,019 → 966 voiced characters.
- **forecheck-2-3-lock:** 1,933 → ~1,220.
- **forecheck-roles-rotate:** 1,856 → ~1,230.
- **icing-the-race-and-the-dot:** 1,811 → ~1,390.
- Each cut limb is voiced in the hosts' adjacent chunks. Safety and rule limbs no host voices nearby were kept. The ⚠ count per caption is unchanged.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety and rules | safety-reviewer | First pass CLEAR on all items, with two nits that were applied. It verified USAH 614(a)/(b), 406(a), 604(a)/(b) and 624(d); HC 7.2/7.3 and 6.7(e); NHL 41.1 and 81.1; IIHF 81.1, 20.4 and 23.1; CARHA 58 and 65; and EIHL Casebook :530-545. The re-check after the content fixes was CLEAR: "reach the puck first" matches 81.1; "can be a goal awarded against you" is exact for USAH 614(b) and errs soft only for NHL/IIHF 67.5, CARHA 58(c) N1 and HC 10.2(a)(vi), under an unconditional instruction; "count the season" is the stricter reading, since IIHF 20.4 already ends the game on a second major in one game. It suggested adding "and ask the League", which was applied. |
| Content | content-reviewer | First pass NOT CLEAR: 3 majors and 4 minors. **M1:** the icing caption's "get there first" pointed at the dots, the misconception the diagram exists to kill. **M2:** roles-rotate's "the rotation happens in any system" contradicted the host's left-wing lock. **M3:** the EIHL sentence dropped the owner's game-or-season scope. **Minors:** "the price is worse"; "dot line level" and "not a faceoff spot"; the defencemen-never-rotate law; "the line". All were fixed, and the re-check was CLEAR. No other rules_primer layer states the EIHL second-major rule unscoped (no facts blocks; Common Mistakes and Key Takeaways checked). |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check-podcast-guids: 93 items. check-links: 56 pages, all resolve. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. md_to_speech and check_pointers self-tests pass. check_callout_flow --bare: 0. check_marker_pairs on the 3 content files: 0 lost. The built feed is byte-identical to the live feed. The new :1062 sentence renders as warn-inline in dist. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the safety-reviewer (list above) |
| D4–D5 citations | Out of scope: no citation added. The HC 6.2(a) quotation was re-verified by hand. |
| D6 negative existence | Checked: CARHA 65 is silent on whose blue line, and the EIHL Casebook is silent on game or season. Both are treated as ambiguous, with the cautious reading shipped. |
| D7 cardinal rule | Checked: lock vs rotation, defencemen rotation "here", 2-1-2 default + alternative + ask |
| D8 numeric ownership | Out of scope: no owned figure |
| D9 summary layer | Checked: winger facts :693 / KT15 already carry the CARHA clause; zone_entries layers are safe in every book; rules_primer's other layers checked for the EIHL rule |
| D10 facts | Out of scope: no facts line changed (zone_entries' block is at HARD_MAX and was left alone) |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Checked: renders of 8 hosts for the cut caption limbs, and the table-row escalation via a full-corpus diff |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links, check_absolutes, caption echo |
| D15 rendered site | Checked in the built HTML (warn-inline on the new sentence). No visual browser pass. |

## Plan rows retracted or changed

- **"Spoken units over 2,500 characters":** retracted. Nothing voiced exceeds 2,019 characters. The "12" was a measure that counted the unvoiced Sources trailer.
- **Feed guard:** replaced by a low follow-on row (reordering sections or moving a document between sections is still unguarded).

## What this method could not have found

- Which blue line CARHA 65 means, and whether the EIHL "2nd Major Penalty" counts per game or per season. No text on disk settles either.
- Pages beyond winger and zone_entries that state a flat red-line icing rule (plan row).
- How "Important." at the head of a long table row sounds; nobody has listened.
- Hosts' layers outside the windows read; an ear test of the shortened captions.

# W355: the 23 paragraphs over 1,200 characters split or tightened, corpus-wide (16 November 2026)

**Files:** content/foundation/rules_primer.md; content/hockey-iq/playing_without_the_puck.md, puck_support_and_spacing.md, risk_management.md; content/positions/center.md, switching_positions.md, winger.md; content/systems/defending_the_rush.md, faceoffs.md, game_management.md, offensive_zone_play.md, special_teams.md; content/technique/body_contact_and_battles.md, shooting.md; project/plans/OPEN_ITEMS.md; this record.

## Source
The owner's 8 November priority is readability first. `check_readability.py` counted 23 paragraphs over 1,200 characters in 14 documents.

**Method.** Each paragraph was split at a natural boundary (a change of book, a change of scene, or the move from instruction to tariff) or had its wording tightened. Three rules applied:
- no safety limb, tier, book scope, disclosure or coaching-choice ask could be cut;
- every new paragraph had to name its subject;
- every split half that states a hazard keeps its own ⚠️ placed before a strong run, so it keeps its spoken "Important." and no new panel opens.

## Result
| | Before | After |
|---|---|---|
| Paragraphs over 1,200 chars (corpus) | 23 | 0 |
| Marker losses (check_marker_pairs) | — | 0 LOST, 0 SPLIT HALF on all 14 files |
| Panels (check_callout_flow --panels) | — | unchanged |
| Bare glyphs (--bare, built site) | 0 | 0 |

**Authors:**
- **A** — defending_the_rush, puck_support_and_spacing, playing_without_the_puck.
- **B** — body_contact_and_battles, shooting, switching_positions.
- **C** — special_teams, offensive_zone_play.
- **D** — rules_primer, faceoffs, game_management, center, winger, risk_management.

**Splits and reorders:** the per-paragraph before/after counts and split points are in the authors' reports. In summary:
- dtr's 1,997-char slew-foot bullet became three bullets, one per book group;
- rules_primer's 1,885-char slew-footing item became three parts;
- shooting's goalie bullet moved its net-match sentences into a new sibling bullet;
- game_management :647 was split and reordered so Hockey Canada's 6.1(g) scope sits beside the claim it limits (6.1(g) checked against hc.txt).

**Paragraphs tightened rather than split (all wording only):**
- dtr CM :1107 — cut "There is no cheap tier for this hit." (it restated the tariff that follows);
- bcb CARHA 86(b) bullet — cut "Its own 86(b) ruling repeats that Note." (the body at :1848 carries it);
- ozp :1176.

Several paragraphs now sit exactly at, or within 6 characters of, 1,200 (ozp :1176 1,200; dtr :1107 1,200; bcb CARHA bullet 1,196). Any later addition will push them back over.

**New ⚠️ markers:** added so split halves keep their spoken warning. Marked units rose by 1–3 in most files. Every new glyph sits before a strong run; the built site shows 0 bare glyphs and 0 glyphs after other characters inside a strong run.

## Reviews
Two safety-reviewers split the 14 files and read every changed paragraph word by word against HEAD, rendered.

| Reviewer | Result |
|---|---|
| safety-reviewer (dtr, pss, pwtp, bcb, shooting, switching) | **MAJOR:** switching_positions :272 — the split cut the paragraph off from "from behind". Heard alone, every sentence lost its defining condition, so a USA Hockey reader in a checking league heard that ANY forceful check on a player along the boards is a major + GM or a match (608(b)/(c), 7.5(c), 53(b) apply only to hits from behind). "Carrier" also narrowed "player". Fixed with the reviewer's text. Minors fixed: dtr CM :1107 — an intermediate tightening had replaced HEAD's "a hit from behind is a mandatory match" with "it is…", which bound to head contact aloud; the fix restores HEAD's "a hit from behind"; bcb CARHA bullet's merge put the referee's discretion over 48(a) as well (48(a) is its own sentence again); pwtp :1048's new bullet had no instruction (added "Do not hit from behind at all."); dtr :406's "Important." landed on a linking sentence (glyph moved onto the hazard). Verified against hc.txt 7.5, carha_2026.txt 48/53, usah.txt 608/620/627/639 and Casebook 627 Sit. 3: dtr :406 and the three slew-foot bullets, the pwtp new bullet, bcb "For slew-footing…", bcb :1178, shooting's new bullet and the completeness of the remaining goalie bullet. |
| safety-reviewer (special_teams, ozp, rules_primer, faceoffs, game_management, center, winger, risk) | No critical or major. A token diff confirmed no limb dropped. Minors fixed: rules_primer's slew-foot halves opened "USA Hockey makes **it**…" in a new chunk and "Hockey Canada starts at a double minor" with no subject (both now name "a slew-foot"); ozp :1176 — the reviewer asked to restore "any reckless hit" (the contrast with 608(c)). The commit gate found "For any reckless hit…" identical in HEAD and the index; the change that actually ships at :1176 is "driving **any** player head first" → "a player" (generic, same meaning), which no reviewer named explicitly; ozp :1178 now opens "If a hit from behind reaches the head". Upheld: game_management's "Rule 87.1" (NHL 87.1, IIHF 87.1 and PWHL 89.1 carry the same sentence); ozp :1227/:1229 straddling chunks 084/085, since nothing permissive ends 084. |

### C11
The coordinator wrote no content. Edits after review:
- the reviewers' exact texts;
- wording trims made to stay ≤1,200 after those texts were added (no limb dropped):
  - dtr :1107: "with a likely multi-game suspension" → "and a likely multi-game ban" (the page's own facts-line word); "on the head it is head contact" → "on the head, head contact";
  - bcb CARHA bullet: "it adds … which the other books' rules do not" → "adds … which the other books do not"; "files the foul inside its tripping rule" → "files the foul under tripping";
  - ozp :1176: at exactly 1,200 (see the note above on which "any" changed).

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final edit. After it, the following ran clean:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets, check_counts --update (no change);
- check-arrivals: 0 hard;
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST, 0 SPLIT HALF on all 14 files;
- check_readability: 0 paragraphs over 1,200 corpus-wide.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | no rule changed; reviewers verified every new or reworded sentence against sources/ |
| D9 Summary layer | CM splits read heard alone; no KT changed |
| D11 Reader safety | two safety-reviewers, word-by-word against HEAD |
| D12 Read-aloud | every split pair rendered; chunk positions recorded |
| D14 Links | check_links, build check-links |
| D15 Rendered site | build plus --bare (0) and a built-HTML scan for glyphs after other characters inside a strong run (0); no browser pass |
| Others | not engaged (no new claims) |

## What this method could not have found
- **Lost conditions with no lexical trace.** A split half that loses a defining condition — the switching "from behind" shape — is found only by reading. Both reviewers read every pair, but such a loss leaves no word for a tool to catch.
- **Rule accuracy of moved text.** Claims that were only moved, not reworded, were not re-verified against the books.
- **Amber density.** The extra inline amber from the new markers was not viewed in a browser.
- **Edits at the cap.** Paragraphs at exactly 1,200 will go over with the next addition.

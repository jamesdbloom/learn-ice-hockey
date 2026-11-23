# W635: crisis numbers stay on one line, a diagram label on the right player, and 14 shorter facts lines (23 November 2026)

## A: crisis-box phone numbers no longer split on a phone

The W633 browser pass found the numbers splitting across lines at 320 and 400 px, for example "1800 / 66 66 66" and "0800 / 1111". In the one box meant for someone in crisis, that invites a misdial.

The fix is at render time and changes no content wording.
- **`remark-corpus.mjs`:** inside the crisis callout only, which is matched by its opening sentence (`CRISIS_RE`), the plugin wraps phone-shaped runs in `<span class="nowrap">`.
- **`global.css`:** adds `.callout .nowrap { white-space: nowrap }`.
- **No `tel:` links** were added, so a link can never carry a wrong number.

**Evidence:**
- **Builds:** run before and after the change, both exit 0.
- **Built HTML:** only `mental_game/index.html` changed, apart from build stamps.
- **Browser:** Playwright's Chromium at 320 and 400 px showed every number on one line after the change, with no horizontal scroll. Before the change it reproduced each W633 split.
- **`--bare`:** 0.

**Carried to the plan:** a reworded opening sentence would silently disable the wrap.

## B: puck_support "Defensive-zone breakout support": "carrier" now sits by D1

"The carrier" sat beside D2, and its leader crossed the partner's leader. The label placer rejected every hint near D1 for an 11-character label, so the label became "carrier" and now sits above D1 with a short, uncrossed leader. D2's "the partner" was pinned back to its old position, and no other label moved. check_geometry passes, and check-arrivals has 0 hard failures. The label now breaks the "the X" pattern of its siblings.

**Diagram-reviewer, run after the commit gate's C10 block, which asked for a look at the rendered picture.**
- It checked the built SVG at full size and at 400 px. "carrier" reads as D1's label, its leader crosses no route, glyph or label, and "the partner" still sits by D2.
- The mixed sibling labels make "carrier" read naturally.
- Dark theme is unchecked: the diagram SVGs have no theme variables.

## C: facts lines that voice awkwardly or sit near the cap (goaltender, center, winger, forechecking)

**What changed.** 14 lines were reworded, each shorter or equal in length:
- 4 lines that said "X must give" now lead with the act;
- 10 lines at 293–300 characters were made clearer.

Every limb was verified in the flattened primary sources and layer-tested.

**What was skipped.** Lines copied word for word into many files were left alone, and are now a plan row: the 12-copy 620(b) line, the 16-copy next-game line, the IHUK DOPS line and the late-fight line.

**Safety review.** No critical or major findings, and none of the 14 reads cheaper than its book. The reviewer confirmed:
- The 608(c) "defenceless" narrowing matches the book better than the old "if reckless with excessive force".
- center :738's CARHA 49(a) injury mandate fits.

**Applied from the review:** "may not" became "might not" in forechecking :320 and :978, because "may not" could be heard as "not allowed to".

**Left as it was:** winger :881. The precise wording would run about 54 characters over the 300 cap, and fitting it would mean cutting a safety limb. The current line is safe, and Common Mistakes :890 carries the precise split.

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build (v22.23.4): exit 0, after every edit (`scratchpad/build_w635.log`).
- check_facts, check_absolutes, check_geometry, check_secrets, check_caption_pairs, check_tables, check_zones: exit 0.
- check-arrivals: 0 hard failures.
- --bare: 0.
- check_marker_pairs: 0 lost on all 4 files.
- check_links --quiet: run after this record.

## What this method could not have found

- Safari, iOS and larger text settings for the crisis box.
- The dark-theme look of the moved label in a real browser.
- How the 14 lines sound when rendered as audio.

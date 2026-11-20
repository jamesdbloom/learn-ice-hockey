# W563: repeated hit-from-behind ladders cut to kernels, and victim-side warnings removed (20 November 2026)

## Why

W561 found the hit-from-behind ladder restated 5–7 times per file in winger, goaltender and forechecking_systems. After W562 every copy agreed. Two problems remained:
- The owner's ratio: tactics should be the overwhelming share of the content.
- "A third restatement is one more place for a correction to fail to reach." W562 had just found winger's copies missing a rescope.

## Edits (three agents; brief `scratchpad/w563_common.md`)

The method was the same in each file:
- Cut each candidate to the instruction, the house kernel "ends your game in most books and can in all", and the boards or goal-frame match the situation invites.
- Drop every "comes later" pointer.
- Confirm every dropped tier lives in the file's home copy and facts block.
- Render the file and confirm the consequence is heard in the same or the adjacent chunk.
- Do not touch any facts line.

**winger** (prose 20,348 → about 19,900 words; home copy is §A hit from behind :869–:887 and facts :876–:879):
- :531 cut from 200 to about 95 words.
- :722 and :724 merged into :722. :724's marker moved to the kernel's consequence clause, and the trailer link was restored.
- Common Mistakes :919 cut from 179 to about 115 words, and :927 from 200 to about 95.

**goaltender** (home copy is :1635–:1641 and facts :1376–:1381):
- :1283 cut from 118 to 27 words: "If it was a hit on your back, say so: that is checking from behind, which **ends the hitter's game in most books and can in all.**"
- Common Mistakes :1714 cut from 171 to 33 words.
- :1666 is kept, because it is that section's only cost statement and there the reader is the hitter.

**forechecking** (home copy is :973 and facts :976–:983):
- :224 cut from 172 to about 50 words.
- :764 cut from 199 to about 95.

**goaltender victim-side markers:**
- **Removed** at :1637–:1641 and Common Mistakes :1713 and :1715. Each prices the hitter, not the goalie (the W560 criterion).
- **Lost** :1714's glyph in the cut.
- **Kept** :1635 ("say so in those words") and :1281.

## Review

**safety-reviewer, with rules check.** It read usah.txt 608, hc.txt 7.5, carha_2026.txt 53, and NHL and PWHL 43.

**One finding, at six sites (minor to major, permissive).**
- The sites: winger :531, :722, Common Mistakes :919 and :927; forechecking :224 and :764.
- The kernel's boards-match clause named only Hockey Canada (7.5(c)) and CARHA (53(b)). A USA Hockey listener heard it as not theirs, but 608(c) is a match "in all instances" for reckless excessive force on a defenceless opponent.
- The cut had removed the 608(b) and 608(c) limbs that these units used to carry.
- **Repaired** at all six sites: "…and USA Hockey does if it is reckless with excessive force (608(c))". The unit's own "cannot protect themselves" supplies 608(c)'s third condition.

**Confirmed accurate.**
- **"Ends your game in most books and can in all":**
  - NHL and PWHL 43.2, 43.3 and 43.5; IIHF 43.2 and 43.3; Hockey Canada 7.5(a); and CARHA 53(a) always eject.
  - USA Hockey 608(a) can.
  - 608(b)'s mandatory major and game misconduct is within "can".
- **No section is left without a consequence.**
- **The goaltender de-marks:** none of them is a hazard to the goalie.
- **The winger :724 deletion:** the trailer content remains in Backchecking, and the link has been restored.

## Rows

**Closed:**
- The ladder restatement candidates in the three files.
- goaltender's victim-side markers.

**Remaining:** other ladder copies outside the census (Key Takeaways, forechecking :339 and :811), and corpus-wide two-book boards-match clauses that may omit 608(c). Not swept.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w563.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`:
  - goaltender: 7 lost, all intended victim-side de-marks.
  - winger and forechecking: 0 lost.
- `check_tactics_ratio`, Common Mistakes layer:
  - winger: 77% → 74%.
  - goaltender: 70% → 67%.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered |
| D8/D9 | Covered: every dropped tier was traced to its home copy |
| D11 | Covered by the safety-reviewer |
| D12 | Covered: rendered by each agent before the 608(c) addition |
| Others | Not engaged |

## What this method could not have found

- **Two-book boards-match clauses elsewhere** that omit USA Hockey 608(c).
- **The audio after the 608(c) additions.** Not re-rendered; the additions sit inside the same units.
- **Whether "most books" reads to a USA Hockey reader as a promise that the floor ejects.**

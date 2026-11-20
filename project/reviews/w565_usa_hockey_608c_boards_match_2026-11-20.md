# W564–W565: USA Hockey's 608(c) match wherever the boards or defenceless match named only Hockey Canada and CARHA (20 November 2026)

## Rule text (usah.txt :3709–3731; usah_casebook.txt :11750–11777)

**608(b):** a mandatory major and game misconduct "to any player who recklessly endangers an opponent, or causes them to go head first into the boards or goal frame".

**608(c):** "A match penalty shall be assessed for checking from behind in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position."

**Casebook 608 Situation 1:** a match "must be assessed" for excessive force on a vulnerable or defenceless player.

**Hockey Canada 7.5(c) and CARHA 53(b):** both are re-read in hc.txt :6177–6184 and carha_2026.txt :2626–2632.

## W564 census (rules-verifier, read-only)

- **Class A, 18 units:** the boards or defenceless match named only Hockey Canada and CARHA.
- **Class B, 8 units:** USA Hockey appeared only through 602(a)'s "plan on a match" or 608(b).
- **No unit misstates 608(c).** No three-book claim overstates the rule.

**Coordinator ruling.** A full facts line whose very next facts line in the same block carries 608(c) is left as it is. Thirteen lines fall under this, listed in the plan.

## W565 edits (four agents, disjoint files; brief `scratchpad/w565_common.md`)

**defending_the_rush**
- Facts :640 adds USA Hockey 608(c). The IIHF "has none — plan on ejection" is kept.
- Body :653 and Common Mistakes :1121 add "USA Hockey must if it is reckless with excessive force, boards or not (608(c))".

**center**
- Facts :691 adds "USA Hockey 608(c) if reckless with excessive force, boards or not".
- Body :709 adds the 608(c) mandatory limb.
- The :901 bold, after review, now reads "**Under Hockey Canada, into the boards or goal frame…**".

**forechecking:** facts :981 adds 608(c).

**winger**
- Facts :512 adds 608(c).
- Facts :875 now reads "CARHA 53(b) (its Note: substitute no other penalty; Hockey Canada has none); USA Hockey 608(c) if reckless with excessive force".

**goaltender:** Common Mistakes :1390 adds "(602(a)), and with excessive force the match is mandatory (608(c))".

**defender**
- The facts block at :817 was at its cap and had no 608(c) line. It was rewritten within the caps.
- :826 now carries the 608(c) limb.
- The 620(b) head limb moved to a new Rule line :827.
- Two 3-on-2 Action lines were merged, and both halves are kept.

**rules_primer**
- Common Mistakes :1197 adds 608(c).
- The table cell :1125 (site-only table) adds "reckless with excessive force on a vulnerable or defenceless player = **mandatory match** (608(c))".

**on_ice_communication**
- The document previously had zero 608(c) mentions.
- Facts :593 was rewritten within its 300 cap to carry 608(c).
- Body :613 adds 608(c).

**passing_and_receiving:** body :221 adds 608(c).

**puck_support**
- Facts :605 fits 608(c).
- After review it was reordered to "From behind into boards or net on a helpless player, intent or not, a mandatory match: … USA Hockey 608(c) if reckless with excessive force; meant to injure, a match in all but the IIHF; any reckless push: plan on a match and a likely multi-game ban (602(a))".

**offensive_zone_play :971: left.** It already states USA Hockey's reckless match flatly (602(a)), which is wider than 608(c).

## Review

**safety-reviewer, with rules check.**

**One minor permissive finding, now repaired:** puck_support :605. With "Even without intent" removed, "one from behind…" could be heard as a hit meant to injure, so the boards match sounded as if it needed intent. It was reordered to the reviewer's sketch, keeping "likely".

**One optional finding, applied:** center :901 named no book in its bold sentence.

**Confirmed OK:**
- The inherited defenceless condition at dtr :653/:1121 and center :691. If dropped, it errs strict.
- The defender block: nothing was lost, and each line reads alone.
- on_ice :593: the verbless fragment reads fine alone.
- ozp :971, left as it is.
- The winger :875 CARHA Note wording.
- All other sites.

## Rows

**Closed:** the W563 leftover (two-book boards clauses corpus-wide).

**New (From W565):**
- (1) The 13 facts lines left by ruling.
- (2) Diagram captions, unswept wordings, and the reverse class.
- (3) The ozp :1259 head and continuation.

**Owner decision pending:** W521(2), the 602(a) "plan on a match" convention. W565 kept the corpus's existing "plan on" wording beside each new 608(c) limb.

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w565.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 10 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: USA Hockey 608 and Casebook Situation 1; Hockey Canada 7.5(c); CARHA 53(b) and its Note |
| D9 | Covered: body, facts, Common Mistakes and table changed per claim |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **How a listener hears the 300 ms gap** between a two-book line and its 608(c) sibling.
- **Captions and unswept wordings.**
- **Audio for the edited lines.** Not rendered this round.

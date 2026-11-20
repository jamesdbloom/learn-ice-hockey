# W588: system-profile facts lines name their system (20 November 2026)

## Edits (one agent, 8 systems files)

The census from W582/W583 left 19 OPTIONAL profile rows (`w583_system_profile_optional_rows_2026-11-20.tsv`). The plan had said "~45"; the table holds 19. The agent judged each of those rows heard alone and applied the same test to the sibling profile lines (`Position:`, `Goal:`, `Targets:`, `Countered by:`) in the same blocks.

**Result:** 41 lines named and 11 left. The 11 already name their subject, or are clear and true heard alone.

The edits are short prefixes or substitutions: "In a 2-1-2, …", "The 2-3 aims for …", "As a 6-on-4 power play, …", "Cycle to …", "For a wheel, …", "A box kill is …". Lines that were wrong or misleading without the heading:
- **neutral_zone 1-2-2 Goal:** "the turnover is a bonus" is false for a press.
- **special_teams 6-on-4:** "send the extra body to the net front, never the perimeter" read as advice for any power play.
- **breakouts wheel and D-to-D Position:** read as rules for every breakout.
- **neutral_zone late man:** "Delay deliberately" read as advice for everyone.
- **zone_entries forcing-wide Goal:** it had no defensive context.

**Homonyms, now disambiguated in facts lines:**
- "1-3-1 forecheck" vs "1-3-1 power play"
- "2-3 power play"
- "box kill"
- "strong-side overload"

**Goal lines:** all are still aims. The hinge Goal moved from an outcome to an aim.

**Two lines trimmed to fit the 200 cap,** both by substitution:
- wedge+1;
- zone_entries cross-corner. Its disclosure "no count ranks retrievals" is kept.

No ⚠️ was added, removed or moved.

## Review

**safety-reviewer: OK, nothing to fix** (all 41 lines, with the out-of-table lines checked as carefully as the rest).
- Every named system is right for its block, and none is narrower than before.
- No claim changed, and every Goal line is still an aim.
- Every next line still lands.
- There is no clash with systems of the same name in other sections.

## Rows

**Closed:** the W583 OPTIONAL system-profile rows, and their siblings.

**Still open:** homonym collisions in body prose.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w588.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 8 files.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Audio.** Not rendered.
- **Body and summary twins of these profile lines on other pages.**
- **Tactical claims inside the lines.** These were named, not re-verified.

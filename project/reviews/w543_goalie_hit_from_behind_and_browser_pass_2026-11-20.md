# W543: "Hockey Canada always" on a goalie hit from behind, and a browser pass over today's readability waves (20 November 2026)

## Rows

**W542(2): special_teams facts :1117.**
- **Before:** "Rule: Never hit a goalie from behind: it ejects (Hockey Canada always; IIHF and head contact: plan on it); …"
- **After:** "(Hockey Canada, IIHF and head contact: plan on it); …"
- **Why:** under 7.5, every call carries a game misconduct (7.5(a), (e)) or a match (7.5(c)). But 8.5 reaches "unnecessary contact with the goaltender anywhere on the ice", and 8.5(a) is a plain minor (hc.txt :6982–7030). The book never says which rule governs a goalie hit from behind, so "always" was harsher than the book. The same file's :1118 and :1136 already say "plan on the dearer". The line still opens "Never hit a goalie from behind: it ejects".
- **Not changed:** the skater line :659, "(Hockey Canada always…)". It is accurate: 8.5 does not reach a skater, and 7.5(e) attaches a game misconduct to every call. A grep found no other "Hockey Canada always".

**W542(1): zone_entries. Refuted, no change.**
- A render (75 chunks) shows that 7.5(c)'s boards/frame match is voiced in the next paragraph or the same chunk at all four sites:
  - :255 → :257, chunk 019;
  - :865 → :867, which opens chunk 053;
  - :1169 → :1173, chunk 066;
  - :1205 → :1207, in the same list item.
- Adding center :901's sentence there would only restate it in the adjacent paragraph.

## Review

- **Safety-reviewer (C4/C6): OK.** It re-derived 7.5 and 8.5 from hc.txt and upheld :1117, :659 and the zone_entries refutation.
- **Site-reviewer (D15):** the first browser pass in many waves. Chrome was not connected, so it used the owner-approved Playwright Chromium fallback. It served the built dist at HEAD 18ca60ea and checked 10 pages at 1440 and 400 px, in light and dark.
  - **Result: no critical, major or minor findings.**
  - **W539/W540 splits.** It probed the 99 lines those waves added. All render as prose or nested list items, with no stray code blocks.
  - **Warning glyphs.** Every ⚠️ in `<main>` sits in `warn-inline`: 0 panels, 0 bare glyphs, 0 untreated glyphs inside a strong run, across 1,181 glyphs.
  - **Contrast.** The `warn-inline` text passes AA: 5.71:1 in light, 8.29:1 in dark.
  - **W541 captions.** All 8 render under their figures, and the three with ⚠️ are styled. There is no page-level horizontal scroll at 400 px; the full-sheet diagrams scroll inside a labelled `.diagram-scroll` region, by design.
  - **Theme toggle.** It persists, with no flash.
  - **Console.** With service workers allowed, there were no errors and no off-origin requests.
  - **One long-standing nit, filed:** the skip link moves focus to BODY.

## Gates

- Full `npm run build` with the v22.23.4 binary: exit 0, after the edit (`scratchpad/build_w543.log`).
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_secrets`, `check_counts`.
- `check_marker_pairs`: 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: Hockey Canada 7.5 against 8.5 |
| D11 | Covered: safety-reviewer |
| D12 | Covered: zone_entries rendered |
| D15 | Covered: site-reviewer, Playwright fallback (W539–W542 pages) |
| D13 | Out of scope |
| Others | Not engaged (a one-line change) |

## What this method could not have found

- **Other Hockey Canada rules reaching a goalie hit from behind.** Only 7.5 and 8.5 were read.
- **Real phones, other browsers, screen readers, and the production CDN or CSP layer.**
- **Reviewer transcripts.** They are not on disk.

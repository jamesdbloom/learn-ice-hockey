# W544: skip-link focus, and two picture questions answered (20 November 2026)

## Skip link (site)

**Defect.** The W543 browser pass found that activating "Skip to content" left keyboard focus on BODY, because `#main` was not focusable.

**Fix.** Each page writes its own `<main id="main">`, so the fix touched nine files:
- `tabindex="-1"` added in eight page templates: index, search, 404, offline, downloads, `[...slug]`, `[layer]/index` and `the-basics/index`.
- One rule added to `site/src/styles/global.css`: `main:focus { outline: none; }`. Without it, the global `:focus-visible` ring would box the whole of `<main>`. The skip link keeps its own outline.

**Verification.**
- Full `npm run build` (absolute v22.23.4 binary): exit 0.
- All 54 built pages that contain `<main` carry `tabindex="-1"`. The built CSS carries the rule.
- Playwright Chromium, on the home page and a doc page, in light and dark:
  - Tab focuses the skip link, with a visible outline.
  - Enter moves focus to `MAIN#main` with no ring.
  - The next Tab reaches the first control inside main.
- No client script focuses `#main` or reads its `tabIndex` (grep over `site/src` and `site/public`).

## W541(2): two picture questions (diagram-reviewer, read-only)

### pk-wedge-plus-1: OK

The +1's pressure route lies on the goal-to-carrier line:
- start point 1.42 ft off the line;
- end point 0.82 ft off the line;
- 8.8° off the bearing.

It is the first of the three published routes the prose lists at special_teams.md :563 ("in a straight line out from the goal towards the puck carrier").

**Optional.** The caption could read "toward the carrier", so that "straight out" is not heard as up-ice.

**Side note for a safety-reviewer.** check-arrivals does not cover pressure routes, so the reviewer measured this one by hand: a bar, not an arrowhead, and `miss` 1.53 ft. The carrier's facing is fixed by the boards. Rule 4 may want a level caveat.

### oz-behind-the-net: OK

The slot pass ends 7.2 ft from F3's centre and aims through his body (1.24 ft off). That follows the module's own "finishes short of the receiver" convention.

The caption matches the picture:
- the pass crosses the royal road (y = 0) inside the slot;
- the receiver is inside home plate, as rink_map :393 defines it;
- "almost by definition" is the owner's wording;
- the pass clears the crease.

`check_geometry` passed (77) and `check-arrivals` reported 0 hard failures.

## Rows

- **Closed:** the skip-link row; W541(2) (answered, with optional notes refiled in the same row).
- **Owner decision pending:** W521(2).

## Gates

- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_secrets`, `check-arrivals` and `check_geometry`.
- Full build exit 0 (run by the agent after its last edit; the coordinator re-runs it before staging).

## Dimension coverage

| Dimension | Status |
|---|---|
| D15 rendered site | Covered: Playwright in two themes, two page types |
| Diagram accuracy | Covered: diagram-reviewer measured both pictures |
| D1–D13 | Not engaged; no content claim changed |

## What this method could not have found

- **Safari, VoiceOver and Firefox focus behaviour after a fragment jump.**
- **What a screen reader announces.**
- **The six other page types in a browser.** They were checked by HTML attribute only.
- **Whether readers hear "straight out from the goal" as up-ice.**

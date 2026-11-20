# W549–W550: the nine pressure-route findings triaged, six redrawn, three allowlisted, and form (p) promoted to FAIL (20 November 2026)

## W549 triage (diagram-reviewer, read-only)

The reviewer checked each of the nine `[p]` findings. For each one it viewed the PNG, read the spec and caption, and read the paragraphs that host the diagram. It reproduced every measured miss to 0.01 ft and rendered every proposed redraw.

**ACCEPT (3).**
- **faceoff-dzone-clean-loss, routes 0 and 1.** The wingers release to the opposing points on the drop and arrive frontally. The spec says this aim is by design (faceoffs.md :405, :420, :443).
- **the-last-player-back, route 0.** The opposition pressures the reader's carrier. The caption carries the target's obligation.

**REDRAW (6).** All six are tabled below.

## W550 redraws

| Diagram | Change | After |
|---|---|---|
| pk-wedge-plus-1 | Tip moved to (70.6, 31.5), on the +1→puck line | Exempt as stick-on-puck: the puck is 3.40 ft ahead and missed by 0.06 ft. The picture now matches the W545 caption's "stick on the puck". Alt text says "toward the puck". |
| pk-nz-1-1-2 | Tip moved to (−18.5, 19.3) | Misses the carrier by 4.24 ft; aims at the puck on the carrier's inside |
| pk-nz-1-3 | Tip moved to (−18.5, 10.7) | Misses the carrier by 4.09 ft |
| the-call-and-who-can-see-it | `F1_TO` moved to (61, 21) | Misses D1 by 4.28 ft, on his inside. Tip is 7.81 ft from D1 and the nearer bar 6.92 ft. Alt text: "about eight feet short, on their inside". |
| defender-holding-the-line | Tip moved (8, 17) → (8, 14) → (6, 14) | Misses the passer by 4.43 ft at 7.21 ft. The extended line crosses the pass at about (−4, 17.3), so the forechecker aims at the passing lane. |
| deny-the-reception | Bow 1.5 → 0.5 | Misses A2 by 3.53 ft; the route still never reaches x = 69 |

**Why defender-holding-the-line needed a second move.** The safety-reviewer ruled the (8, 14) intermediate not good enough. It missed by 3.36 ft, which cleared the forward glyph's ink by only 0.06 ft. It also came in diagonally from behind a passer whose facing is fixed by the pass, and ran on to the puck beyond him. That fails rule 4.

**the-call-and-who-can-see-it** was ruled safe with no caption change. Its caption is about receiving contact, and it gives the reader the full posture.

**Stale comments.** Comments that predated form (p) were corrected in three places:
- time_and_space above `COVER_TO`;
- on_ice_communication above `F1_TO`;
- puck_handling above `LAST_O1_TO`.

## check-arrivals allowlist

`site/scripts/arrivals-allow.json` is new.

**How an entry matches.** An entry is keyed by:
- diagram id, kind and bow;
- the resolved from and to points (rounded to 0.01);
- the target's id and resolved anchor.

**When an entry stops matching.** The finding is re-raised if any of these changes: the measured d or miss (to 0.01), the rink.json sha256, or a required caption substring.

**How results show.** An entry that matches nothing is reported STALE. Allowlisted routes print `OK [p-a]` and are never hidden. A malformed allowlist exits 1. `--allow-template` drafts new entries.

**Seeds.** The three W549 accepts, each with its caption substring:
- "release to the opposing points on the drop"
- "never turn your back to anyone coming at you"

**Fixture tests.** Eight cases passed: moving the to point, changing the bow, deleting the caption substring, changing the rink sha, a malformed file, and FAIL-level behaviour.

**Promotion.** The coordinator promoted `PRESSURE_LEVEL` to `'FAIL'`. The live run, and check-arrivals as the third step of the full build, both exit 0:
- 0 hard and 8 advisory, both the pre-existing (a)/(b-G) findings;
- 1 exempt;
- 3 allowlisted;
- 2 unattributable.

## Review

| Check | Result |
|---|---|
| diagram-reviewer (W549) | Triage; reproduced the checker's figures |
| safety-reviewer (W550) | the-call OK. defender-holding-the-line: redraw again; repaired to its sketch and re-measured on the curve. |
| Policy ruling | The drawing standard applies whoever skates the route; the caption duty differs. Filed as an owner decision, because it changes `.claude/agents/diagram-reviewer.md` item 4. |

**C11.** No one re-viewed the final defender-holding-the-line PNG. It was re-measured on the drawn line and passes check-arrivals.

## Gates

- Full `npm run build` with the v22.23.4 binary: exit 0, after the final edit, with check-arrivals at FAIL inside the build chain (`scratchpad/build_w550.log`).
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_zones`.
- `check_label_paint`: unchanged.
- `check_caption_negations`: no new hit in edited text. A neutral-zone-lanes hit that appeared between runs is not in a changed diagram; `diagrams.json` shows only two changed captions or alt texts.

## Rows

- **Closed:** the [p] triage row.
- **New:** pressure-route follow-ups, namely curves that bow through a player before their tip, targets more than 9 ft from the tip, and the defender-holding-the-line puck placement.
- **Owner decisions:** the opposition-route policy, and item 4's "boards at their back".

## What this method could not have found

- **Whether a ruling is right.** The allowlist proves only that the picture is unchanged.
- **A caveat reworded so that it keeps the exact substring but loses its meaning.**
- **Phone width and how the routes read to a coach.**

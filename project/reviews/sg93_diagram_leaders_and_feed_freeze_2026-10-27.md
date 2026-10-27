# Diagram leaders under tokens, thicker label halo, and the podcast feed freeze (27 October 2026)

**Files:**
- site/scripts/lib/rink.mjs
- site/src/diagrams/{body_contact_and_battles, breakouts, center, defending_the_rush, forechecking_systems, neutral_zone_systems, offensive_zone_play, puck_support_and_spacing, rules_primer, scanning_and_anticipation, special_teams, time_and_space, zone_entries}.mjs
- site/src/lib/podcast-feed.ts
- site/scripts/check-podcast-guids.mjs

## Why
- **Leader lines (owner approved, 26 Oct):** "a small fix so the lines pointing to player labels no longer cross the letters". Leaders are now drawn under the tokens and pushed out by the token's reach, so a leader no longer strikes through a position letter.
- **Blue-line labels (owner ruling, 26 Oct):** "thicker halo". LABEL_HALO went from 0.12 to 0.16.
- **Unused diagram (owner ruling, 26 Oct):** "delete creaseThePuckDecides". The spec is deleted from center.mjs. It was never exported, so no rendered diagram changes.
- **Feed freeze (plan row "Feed guard follow-on"):** each live episode's season and episode number are frozen (LIVE_NUMBERS, SECTION_SEASONS), so moving a document between sections, or inserting one mid-section, cannot renumber live Spotify and Apple episodes. The guard now fails on any change to a live number.

## How the label change was made safe
Pushing every leadered label out by the token's reach displaced labels on crowded pictures, and about 12 diagrams came to read as labelling the wrong player. The repair was made in three steps:
1. If the pushed slot fails, use the un-pushed slot, drawn leaderless.
2. Every leaderless slot must clear a 2-unit `readsAsOwn` margin against every player, the goalie included (`ownsBare`); otherwise the label keeps a leader.
3. Per-spec labelHints were added where needed.

**The honest audit,** taking each label's own player from the spec:

| Build | Leaderless labels | Ambiguous leaderless | Ambiguous, all labels |
|---|---|---|---|
| HEAD | 0 | 0 | 119 |
| Final | 58 | 0 | 113 |

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Diagrams, pass 1 | diagram-reviewer | **FIX:** 12 diagrams read as the wrong player's. |
| Diagrams, pass 2 | diagram-reviewer | **FIX:** the leaderless fallback created new wrong-player readings (dump-soft-area, attack-the-seam, rush-trailer, breakout-wheel, forecheck-212, oz-low-to-high), and the original audit hid them. |
| Diagrams, passes 3–5 | diagram-reviewer | Pass 3 blocked on two stacked labels (nz-1-3-1, dump-flip-over-trap); fixed. Pass 4 SHIP. Pass 5 **SHIP**, on the four browser-finding fixes. |
| Browser | site-reviewer (headless Chrome over DevTools at 1440 px and 375 px, light and dark) | Leaders draw under the tokens in all nine diagrams, and the halo keeps labels readable over the lines. **FIX** on five misreadings: rush-trailer, breakout-wheel, dump-flip-over-trap, offside-faceoff-location, nz-1-3-1. The first four and nz-1-3-1 were hinted. Only "carries it in" was a regression; the rest also existed at HEAD. dump-flip-over-trap is unchanged from pass 4, which passed it. |
| Feed code | general-purpose reviewer | **SHIP.** The feed XML is byte-identical to HEAD apart from the two re-encoded batch-9 enclosures. All 93 live items match the deployed feed. The guard fails on a hand-renumbered feed and on a generator change, and on the cross-section move that HEAD's guard missed (22 items). A new document cannot take a frozen number. |

## Gates
- build-diagrams: 204 diagrams.
- check_geometry: exit 0.
- check-arrivals: 0 hard.
- check_absolutes: exit 0.
- check-podcast-guids: exit 0.
- Site build (absolute npm): exit 0, check-links passed, after the last edit.

## Carried to the plan
- A new episode that is live but not yet in LIVE_NUMBERS can still be renumbered, and the guard only prints a NOTE. Add each new episode to LIVE_NUMBERS in the commit that publishes it, or make the NOTE fail.
- No check finds leaders hidden along painted lines, or two labels stacked into one block. Both were found only by eye. About 160 changed diagrams were checked by script only.

## What this method could not have found
- Misreadings in diagrams nobody viewed.
- A cold reader's pairing of labels.
- Real phones and Safari or Firefox fonts.

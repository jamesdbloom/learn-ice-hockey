# Google Search Console refresh, 21 September 2026

This closes the "refresh Google Search Console" item from the traffic plan's Phase 2 and partially
scopes "identify and improve striking-distance pages (positions 11–20)." Done via the user's own
logged-in browser session (their explicit invitation) — a real, current pull, not the dated baseline
`project/reviews/seo_baseline_and_analysis.md` was already flagged as needing refreshed before any
decision leaned on its figures.

## Headline numbers (last 3 months, `sc-domain:learn-ice-hockey.com`)

- Total clicks: 85. Total impressions: 20.2k. Average CTR: 0.4%. Average position: 13.9.
- By country: United States leads on impressions (9,904, average position 12.0) but the site is
  explicitly UK-focused in its own design; United Kingdom (2,074 impressions, position 12.5) and
  Canada (2,689 impressions, position 16.0) are the next two. This roughly matches the corpus's own
  stated dual-market shape (NHL rules as the base, UK amendments flagged inline) rather than
  contradicting it.

## Striking-distance pages (position 11–20, meaningful impressions)

Paged through all 77 ranked URLs (not just the top 10 the UI defaults to). Ordered by impression
volume, since that's what determines how much a ranking improvement is actually worth:

| Page | Position | Impressions | Clicks |
|---|---|---|---|
| `/systems/faceoffs/` | 14.1 | 2,457 | 3 |
| `/foundation/rules_primer/` | 26.9 | 2,182 | 1 |
| `/systems/game_management/` | 11.2 | 712 | 0 |
| `/positions/center/` | 14.8 | 702 | 4 |
| `/systems/forechecking_systems/` | 21.5 | 697 | 2 |
| `/positions/goaltender/` | 11.1 | 528 | 0 |
| `/off-the-ice/equipment/` | 11.1 | 527 | 0 |
| `/systems/offensive_zone_play/` | 14.5 | 524 | 2 |
| `/positions/winger/` | 12.4 | 522 | 1 |
| `/technique/puck_handling/` | 13.9 | 428 | 0 |
| `/off-the-ice/mental_game/` | 16.7 | 409 | 0 |
| `/getting-started/getting_started/` | 17.1 | 406 | 2 |
| `/systems/zone_entries/` | 17.4 | 392 | 0 |
| `/foundation/on_ice_communication/` | 12.7 | 354 | 4 |
| `/hockey-iq/playing_without_the_puck/` | 12.1 | 314 | 1 |
| `/systems/defensive_zone_coverage/` | 13.6 | 285 | 3 |
| `/technique/shooting/` | 15.7 | 237 | 0 |
| `/off-the-ice/how_to_watch_hockey/` | 12.5 | 225 | 1 |

`rules_primer.md` and `forechecking_systems.md` sit just outside the literal 11–20 band (26.9 and 21.5)
but are included because of impression volume — the plan's own criterion is "meaningful impressions,"
not a strict position cutoff, and both are large enough to be worth the same conversation.

**Two clear standouts by opportunity size**: `faceoffs.md` (2,457 impressions at position 14) and
`rules_primer.md` (2,182 impressions at position 27) — either one moving even a few positions would
move more real traffic than most of the rest of this list combined.

## Why "improve title, description, opening answer" isn't a quick edit

Checked `site/scripts/extract-meta.mjs`: this site has **no manual title/description fields** —
titles, meta descriptions, and Open Graph tags are all auto-generated from each document's own H1
heading and `## Overview` paragraph. There is nowhere to edit a title or description without editing
the document's actual opening content. That means "improving" one of these pages for search is a
`content/` change to the exact prose this corpus's whole review process exists to protect — not a
metadata tweak — and the traffic plan's own caution applies directly: "without diluting the carefully
reviewed body." Any work here should go through the same review chain as everything else, not be
batched through quickly.

## One thing checked and confirmed fine, not a defect

`/foundation/rink_map_and_glossary/` still shows up in Search Console with 858 impressions, even
though that content was split into `rink_map.md` and `language_and_glossary.md` weeks ago (commit
`fd9e903`). Checked directly: the old URL correctly redirects to `/foundation/rink_map/` and serves
real content — this is just Google's index catching up to a redirect, not lost or broken traffic.
No action needed; it will resolve as Google recrawls.

## What's next, and whose call it is

- **Improving the two standout pages** (`faceoffs.md`, `rules_primer.md`) — a real, boundable content
  task: draft an improved opening (H1 framing + Overview paragraph) that keeps every existing citation
  and safety qualifier, through the normal content-reviewer/rules-verifier/commit-gate chain. This is
  something a future session can do; not attempted here without the user's go-ahead, since it touches
  the two most heavily-reviewed rules documents in the corpus.
- **The other 16 striking-distance pages** — same mechanism, lower individual payoff; worth batching
  if the first two prove out, not before.
- **Kadaza/FeedSpot submission, outreach, monthly measurement** — unchanged from the traffic plan's
  own framing: these need the user's own account/credentials, judgement about which contacts to
  approach, and an ongoing cadence this session can't hold open. See
  `project/reviews/list_sites_content_and_traffic_plan_2026-09-20.md` Phases 3–4 for the original
  detail.

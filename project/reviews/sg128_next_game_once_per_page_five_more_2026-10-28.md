# SG128: next-game suspensions once per page on Zone Entries, Centre, Time and Space, Puck Handling and Neutral Zone (28 October 2026)

**Files:**
- content/systems/zone_entries.md
- content/positions/center.md
- content/hockey-iq/time_and_space.md
- content/technique/puck_handling.md
- content/systems/neutral_zone_systems.md
- project/plans/OPEN_ITEMS.md

## Why
This applies the owner's once-per-page ruling (USA Hockey 404(b), 21 October; extended to CARHA 32(d), 28 October) to the next five pages in the census. The model is Defender (4d44515). Each brief carried the limits SG127a's Defensive Zone Coverage trim had broken: never add "only", never build a closed list of the books that suspend, never drop "automatic", and remove nothing but a next-game clause.

## What changed
None of these pages has a section headed "rules summary". Each agent put its once-per-page statements in the page's main "What it costs" paragraph and the facts block beside it, as on Defender.
- **zone_entries:** facts :239 and body :253, both of which already held USA Hockey; CARHA added. Seven per-line CARHA clauses removed; 9 words saved net.
- **center:** facts :719, plus a new body paragraph at :741 in Backchecking. The page had no combined body statement. Eight sites changed; 30 words added net.
- **time_and_space:** both statements are in §3 "What a pick costs", the page's main penalty summary. The §6 facts block is at HARD_MAX (14 facts). Eight other clauses removed.
- **puck_handling:** a new facts line, :494, and the "What it costs" body. Seven removals; 15 words added net.
- **neutral_zone_systems:** the "Gap control" facts block and "What it costs" bullets. Seven sites changed.

The following were kept: every 602(a) "likely multi-game" limb, the IHUK DOPS one-game bans, and every 30(a), 52(b), 48(a) and match limb.

## Reviews
Ten reviewers ran in parallel, a rules-verifier and a safety-reviewer on each page.

| Page | rules-verifier (usah.txt 403(b)/404(b) :2429–2541; carha_2026.txt 30(a) :1364–1373, 32(d) :1448–1453; word-diffs) | safety-reviewer |
|---|---|---|
| zone_entries | All 10 sites CONFIRMED. :239 and :253 are the rewritten once-per-page statements. | SHIP |
| center | All 8 CONFIRMED. No "only", no closed list, no "automatic" dropped; the new body line adds 32(d)'s "automatically". | SHIP |
| time_and_space | All 10 CONFIRMED | SHIP |
| puck_handling | All 7 CONFIRMED | SHIP. The per-line USA Hockey 404(b) clause on the 622(b) cage facts line (:491) went, as the ruling allows; the body cage paragraph :531 keeps its USA Hockey statement and gains 403(b). |
| neutral_zone_systems | All 6 CONFIRMED | SHIP |

### C11
No coordinator content edits. The workflow ran all five trims to completion before any reviewer started, so every review read the final text. The content mtimes cluster at 22:49 because the five agents ran in parallel.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on every page |
| D2 Rules travelling without exceptions | Word-diffs on every page: only next-game clauses and the once-per-page statements changed |
| D3 Rule-set divergence | No cross-book pairing; no closed lists |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim changed |
| D7 Cardinal rule | safety-reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewers: CM and KT keep their instructions |
| D10 Key-facts layer | safety-reviewers: once-per-page facts lines read voiced alone |
| D11 Reader safety | safety-reviewer on every page |
| D12 Read-aloud integrity | Every page rendered by its author and reviewer |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; paragraphs under 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- Remaining pages for the trim, each with 8 or fewer next-game lines: breakouts, team_play, faceoffs, uk_rules, rink_map, passing_and_receiving, defending_the_rush, on_ice_communication, risk_management, and the pages with 4 or fewer.
- time_and_space: the once-per-page statements sit in §3, not §6, because §6's facts block is at HARD_MAX.

## Accepted by the ruling, not carried
- A listener far from the once-per-page section no longer hears the next-game cost.

## What this method could not have found
- Next-game wordings outside the swept set ("banned", "miss a game").

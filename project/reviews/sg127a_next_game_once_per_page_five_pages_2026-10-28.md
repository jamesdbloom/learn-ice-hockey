# SG127a: next-game suspensions once per page on Body Contact, Winger, Shooting, Defensive Zone Coverage and Playing Without the Puck (28 October 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/positions/winger.md
- content/technique/shooting.md
- content/systems/defensive_zone_coverage.md
- content/hockey-iq/playing_without_the_puck.md
- project/plans/OPEN_ITEMS.md

## Why
This continues the owner's once-per-page ruling: USA Hockey 404(b) on 21 October, extended to CARHA 32(d) on 28 October. It covers the next five pages in the census: bcb 37, winger 14, shooting 13, dzc 12, pwtp 11. The model is Defender (SG126, 4d44515).

## What changed
One agent per page did the trim. Each page keeps one key-facts line covering both books, plus one body statement per book; per-line next-game clauses are removed.
- **bcb:** the once-per-page statements sit in "And what these fouls cost beyond tonight": facts :804 (rewritten to the shared wording), body :820 (USA Hockey) and :834 (CARHA), both unchanged. 28 lines changed; 243 words saved.
- **winger:** 33 words saved.
- **shooting:** 9 clauses removed and 2 changed, inside the high-sticks section; 59 words saved.
- **dzc:** body bullet :209 "The next game"; 60 words saved.
- **pwtp:** the page had no once-per-page statement, so one body statement and one facts line were added and the per-line clauses removed; 57 words added.

The following were kept: every 30(a), 32(a) and 34(a) limb, the 602(a) "likely multi-game" lines, USA Hockey 411 and 615, CARHA 59(d) fighting suspensions, the IHUK DOPS and EIHL bans, and Hockey Canada 4.8(c).

## Reviews
| Pages | rules-verifier | safety-reviewer |
|---|---|---|
| bcb | All 28 changed lines CONFIRMED (usah.txt 403(b) :2443–2448, 404(b) :2532–2541, 411 :2906–2943; carha_2026.txt 30(a) :1364–1373, 32(a) :1421–1428, 32(d) :1450–1453, 34(a) :1475–1480, 62(b) Note). No pairing remains. A minor limb was lost: facts :804 no longer says 403(b)'s two games are additional to other suspensions; body :820 carries it. | SHIP. One minor finding (permissive): at :784, removing the 32(d) clause also removed the paragraph's only mention that a major is reachable. Fixed; see C11. |
| winger, shooting | CONFIRMED on all 23 changed sites; each page has one body and one facts statement per book | SHIP on both |
| dzc, pwtp | CONFIRMED in round 1, but the commit gate then found this verdict missed two dzc changes (below) | SHIP in round 1 |

### Commit-gate block and dzc repair
The first commit gate BLOCKED. On dzc the trim had done more than remove next-game clauses:
- **:596 "A chop at the hands":** HEAD's "In CARHA and USA Hockey that major costs the next game as well" became a closed list, "the NHL and PWHL suspend **only** on a second such game misconduct (23.5), Hockey Canada **only** on one… (4.8(c))". USA Hockey dropped out of the bullet, so heard alone it implied no USA Hockey or CARHA ban, which the ruling forbids. "Only" was also false: NHL 23.3 is another automatic trigger, and HC 4.8(a) reports every game misconduct for further action.
- **Facts :184** lost "automatic" from Hockey Canada 4.8(c).

A new agent repaired both:
- :596's closed list was removed, and the lead became "In CARHA a major ejects you" (30(a), 62(b));
- :184 now reads "Hockey Canada 4.8(c) automatic only…" (297/300).

It also fixed the same false claim at **:209** (pre-existing): "the NHL and PWHL only at a second game misconduct in their Physical Infractions category (23.6)" became "the NHL and PWHL automatically on repeat game misconducts, counted by category (23.3–23.6) — for checking from behind or boarding, the second (23.6)".

**Re-review of dzc:**
- **rules-verifier** (nhl_rules 23.3 :2767, 23.4 :2855, 23.5 :2862, 23.6 :2932; pwhl 23.3–23.6; hc.txt 4.8(a) :3025–3030, 4.8(c) :3060–3063; usah 404(b)/403(b); carha_2026 30(a), 32(c)/(d), 62(b)): all 10 sites CONFIRMED. No closed "only" list remains, and nothing implies USA Hockey or CARHA has no ban.
- **safety-reviewer:** SHIP on the tree. 0 LOST. Optional minor: :184's "automatic" is attached only to Hockey Canada, though USA Hockey and CARHA are mandatory too (carried).

### C11
**bcb :784**, applied with the safety-reviewer's own wording. "A match there keeps you out until the Chairman has dealt with your case (Rule 34(a))" became "A major there ends your night (Rule 30(a)), and a match keeps you out until the Chairman has dealt with your case (Rule 34(a))". This restores a limb HEAD carried; CARHA 49(a) is a minor or a major, and 30(a) makes a major eject. check_facts passes and check_marker_pairs reports 0 LOST.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on every page; dzc verified again after the repair |
| D2 Rules travelling without exceptions | rules-verifiers diffed every changed line; only next-game clauses went |
| D3 Rule-set divergence | no cross-book pairing |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim changed |
| D7 Cardinal rule | safety-reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewers: CM and KT keep their instructions |
| D10 Key-facts layer | safety-reviewers: the once-per-page facts lines read voiced alone |
| D11 Reader safety | safety-reviewer on every page |
| D12 Read-aloud integrity | authors and reviewers rendered every page |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; edited paragraphs under 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- dzc facts :184: "automatic" sits only on Hockey Canada; USA Hockey and CARHA are mandatory too (optional rewording; at 297/300).
- dzc facts :184 does not mention CARHA 32(c)'s late-game abuse-of-officials suspension (pre-existing).
- bcb facts :804 no longer says 403(b)'s two games are "in addition to any other required suspensions" (body :820 says it).
- bcb :834 says 32(d) "gives a game misconduct"; it is 30(a) that gives it (pre-existing).
- bcb :127: the agent treated "beyond tonight" as the page's rules summary. If §1 (CARHA-scoped) should count instead, :127 gets its 32(d) sentence back.
- Remaining pages for the trim (10 or fewer next-game lines each): zone_entries, game_management, center, time_and_space, puck_handling, neutral_zone, breakouts, team_play, faceoffs, uk_rules, rink_map and others.

## Accepted by the ruling, not carried
- A listener away from the once-per-page section no longer hears the next-game cost.

## What this method could not have found
- Next-game wordings outside the swept set.

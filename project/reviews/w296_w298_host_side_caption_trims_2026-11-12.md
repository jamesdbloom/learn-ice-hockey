# W296–W298: four more long captions freed by voicing their limbs in the host pages (12 November 2026)

**Files:**
- **W296:** content/foundation/rink_map.md, content/off-the-ice/how_to_watch_hockey.md, site/src/diagrams/forechecking_systems.mjs. forechecking_systems.md was owned but not changed.
- **W297:** content/systems/faceoffs.md, content/foundation/rules_primer.md, site/src/diagrams/faceoffs.mjs.
- **W298:** content/positions/defender.md, content/positions/goaltender.md, content/hockey-iq/time_and_space.md, site/src/diagrams/breakouts.mjs. breakouts.md was owned but not changed.
- **Coordinator:** site/src/diagrams/time_and_space.mjs (comment only).
- **Build product:** site/src/data/diagrams.json.
- project/plans/OPEN_ITEMS.md
- This record.

## Source
This round applies the W293 host-side template (HOST_BRIEF.md) to four more captions. Earlier batches had left them whole because some host did not voice some of their limbs within the caption's chunk or the next. Two authors' briefs carried a premise that turned out to be wrong:
- The W296 brief said forecheck-122's safety block is shared with forecheck-212. It is in fact duplicated with forecheck-131.
- The W298 brief pointed to a 22 October chunk comment. That comment is on the wheel caption, not breakout-reverse.

## What changed
| Caption | Before | After | Hosts given new prose |
|---|---|---|---|
| forecheck-roles-rotate | 1121 | 957 | rink_map.md (the rotation, after the marker) |
| forecheck-122 | 1188 | 1030 | how_to_watch_hockey.md (a plain 1-2-2 description) |
| faceoff-where-the-draw-goes | 1021 | 739 | faceoffs.md (facts) and rules_primer.md (prose) |
| breakout-reverse | 1101 | 822 | defender.md, goaltender.md, time_and_space.md |

faceoff-strong-side-dot changed from 905 to 883. Its who-picks wording moved from "the team that did not cause the stoppage" to "the attacking team", which matches NHL and IIHF 81.2, 63.8 and 76.2.

**Rule text added on review.** The final wording of the faceoff host text came out of two rules-verifier passes:
- **faceoffs.md facts Never line (194/200):**
  > "Go offside by firing the puck over the blue line — the draw can go back to the zone it came from, even your own end; in most books an unintentional carried-in offside draws just outside the line"
- **faceoffs.md facts Rule lines.** The original single line became two, so the last-play limb cut from the caption is still voiced in this host:
  > "Under USA Hockey most stoppages you cause in your attacking zone draw at the nearest neutral-zone spot (612(c)), or in that zone if the puck is shot or deflected out by accident (631(d)); a high stick (621(d)) or a penalty that puts you shorthanded (612(b)) draws in your own end"
  >
  > "Under USA Hockey a low stoppage that calls for a last-play faceoff draws at the nearest end-zone spot (612(b))"
- **rules_primer.md :934.** The same content in prose, verbatim from the rules-verifier re-check.

**Tactical host text.** These carry no rule, and their source is the owner page:
- **rink_map.md:** "The jobs change hands mid-shift too…"
- **how_to_watch_hockey.md:** "The 1-2-2 is the containment version…"
- **defender.md, goaltender.md, time_and_space.md:** the reverse's momentum, the counter (a forechecker who steers rather than chases), and who calls for the puck.

The goaltender, defender and time_and_space wordings were refined on safety review.

**Accepted placement.** forecheck-122's 1-2-2 jobs sit in forechecking_systems.md chunk 024, directly before the caption's chunk 025 with nothing between them. The safety-reviewer ruled this acceptable: they are descriptions of the picture, not qualifiers on a hazard.

**Unchanged.** Every ⚠️ sentence is byte-identical to HEAD. forecheck-122 and forecheck-131 still share an identical safety block. No shared constant was edited.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×3 | Inventoried limbs per host and added host sentences with sources. Rendered every host and gave exact chunk numbers in the ✂️ comments. |
| safety-reviewer (W296–W297) | Nothing blocking. Cut limbs are voiced, with chunks given. The rotation sentence matches the picture. ⚠️ sentences are byte-identical. The chunk-before placement is accepted. **WORDING:** (W1) the USA Hockey 612(c) line dropped "unless otherwise covered"; (W2) the shot-or-passed offside sentences named no book. Both were resolved through the rules-verifier passes below. |
| rules-verifier (W296–W297) | Confirmed the faceoff caption trims and "the attacking team" (NHL and IIHF 81.2, 63.8, 76.2). **PARTIAL:** the USA Hockey line missed 612(b) (a penalty → your own end, *cheaper* as written) and 631(d) (accidental out of play stays in the zone). The offside line missed the intentional-offside rule in every book. PWHL offside is 85.6, not 83.6. |
| rules-verifier, narrow re-check of the coordinator's rewrite | Found a further *cheaper* limb: under USA Hockey a high stick (621(d)) is a non-penalty stoppage that draws in the offender's own end. It also scoped "a penalty that puts you shorthanded", tightened 631(d) to "by accident", and added "in most books" for CARHA 72(b). Its exact wording was applied verbatim. The coordinator split off the 612(b) last-play limb as its own Rule line, using the reviewer's own prose, so faceoffs.md still voices it. |
| safety-reviewer (W298) | Nothing blocking. The tactics match breakouts.md, and every cut limb is voiced in all four hosts with chunks given. **WORDING**, all applied verbatim: the goaltender paragraph was rewritten so the goalie's call and the partner's call are distinct; defender "for the puck"; the time_and_space lead-in "That first case is the reverse". The coordinator also fixed two stale module comments it noted. |

### C11
The authors wrote the host text and the trims. The coordinator applied every reviewer wording verbatim. The one coordinator-composed rewrite (the first faceoff fix) was superseded by the re-check's wording. The separate last-play Rule line uses the re-check's own prose. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
- check_facts exit 0 (6198 facts)
- check_links --quiet exit 0
- check_absolutes (408 caption and describe units)
- check_geometry
- check_caption_pairs (0 violations)
- check_marker_pairs 0 LOST on every changed file
- check_callout_flow --panels 0
- full `npm run build` (absolute binary) after the final edit

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier ×2: usah 612, 621(d), 630, 631 and Appendix II; Casebook 612 and 631; NHL, IIHF and PWHL 83.6/85.6, 83.7/85.7, 81.2, 63.8, 76.2; HC 6.3; CARHA 72 |
| D4 Citations | out of scope: no URL changed |
| D5–D8 | not engaged |
| D9 Summary layer | not engaged: no KT or Common Mistakes changed |
| D10 Key-facts layer | faceoffs.md :159–:161, each voiced alone and within its cap |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | every host rendered by the authors and reviewers; chunk numbers given |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | build only; the gap is accepted for text-only changes, as in W291–W295 |

## What this method could not have found
- Other USA Hockey stoppages that "otherwise cover" 612(c), beyond 612(b), 621(d) and 631(d). The text says "most stoppages" to absorb them.
- The same 612(c) claim in other layers of faceoffs.md or rules_primer.md (body bullets, table rows) that still lack the exceptions. The plan row records this.
- How the new tactical sentences sound in place. That needs an ear test.

# W455: Winger's "never two minutes in any book" becomes a planning instruction, a Defensive Zone facts line stops scoping Hockey Canada to head hits, and three diagram captions state Hockey Canada's ordinary price with the head case counterweighted (18 November 2026)

## Files changed
**Content:**
- positions/winger.md
- systems/defensive_zone_coverage.md

**Diagrams:**
- site/src/diagrams/forechecking_systems.mjs
- site/src/diagrams/defensive_zone_coverage.mjs
- site/src/diagrams/switching_positions.mjs
- site/src/data/diagrams.json (rebuilt)

**Also:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W454 items (1) to (6).
- **Authors:** three agents (Winger, Defensive Zone Coverage, and one owning every diagram module).

## What changed

### winger (voiced)
Hockey Canada can price a head hit from behind at two minutes and nothing else:
- the 7.6 preamble supersedes other rules;
- 7.6(a) makes accidental head contact a minor in minor and female hockey;
- 7.6(d) says "No Misconduct penalty may be assessed for a Head Contact infraction";
- the 7.7 preamble lets Junior and Senior referees call minimal violence as roughing.

The IIHF can do the same: 48.1 "supersedes all similar actions", and 48.2 allows a minor. So the absolutes were false, and :859 contradicted the page's own :871.

The fix uses the page's "plan on" form, which says nothing false and advertises no cheaper route:
- **:510 facts:** "in no book plan on a hit from behind costing only two minutes"
- **:530:** "In no book plan on a hit from behind costing two minutes and nothing else"
- **:707 facts:** "No checking-from-behind rule stops at a minor alone". This is now a claim about 43, 608, 7.5 and 53 themselves.
- **:859:** "in none should you plan on two minutes and nothing else"

### defensive_zone_coverage :477 facts (voiced)
- Before: "(IIHF or Hockey Canada, head hit: plan on ejection anyway)"
- After: "(on the head, or under the IIHF: plan on ejection anyway)"

The USA Hockey sites at :180, :488, :860 and KT4 were left unchanged. The author judged them accurate: they say "whenever", none says "only", and KT4 is at 60 words.

### Captions (voiced into their host documents)
- **forecheck-122 and forecheck-131** (byte-identical; also hosted on how_to_watch_hockey) now read "Hockey Canada and CARHA add a game misconduct even to their minor (for Hockey Canada, unless it reaches the head, where you should plan on it anyway)…".
- **dz-collapse-corner** now states the ordinary price: "even a minor for a hit from behind carries a game misconduct (…same bracket…)". Previously it gave Hockey Canada only the 7.5(c) match.
- **getting-beaten-wide** now cites "Hockey Canada **4.11(a)**". It said 4.12(a), but 4.12 is Awarded Goals, and the host body already cites 4.11(a).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **All nine sites OK.** CARHA Rule 50 has no supersession clause, and the 53 Note says "Referees are instructed not to substitute other penalties", so the head carve-out is correctly Hockey Canada only. IIHF 48.1 supersedes. "Narrower" holds for 4.11(a)(i)'s possession test against NHL 57.3 and IIHF 24.8. |
| safety-reviewer | **First read:** Winger, Defensive Zone and getting-beaten-wide CLEAR. One **MAJOR** on the three captions: "(for Hockey Canada, unless it reaches the head)" with no counterweight, the W453 shape again. Hockey Canada 7.6(c) gives a match for a head hit on a player unable to protect themselves, and 7.6(b) a mandatory major plus game misconduct if it injures. Fixed with safety's text. **Confirmation:** CLEAR in all four voiced copies. |
| diagram-reviewer | The same MAJOR, found independently. getting-beaten-wide is correct, and the forecheck pair still match. Minors are filed below. |
| site-reviewer | Five pages at 400×812 DPR 2 light/dark and 1440 light, on the 12:56:53 build. Every new caption and Winger unit is present. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. |

### C11
The coordinator wrote no content. The caption counterweight is safety's text, which the diagram reviewer also sketched independently.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 12:56:53; the newest source is defensive_zone_coverage.mjs at 12:55:42.
- **Diagrams:** build-diagrams ran before check_absolutes. check_label_paint --severe reports 2.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0, and `--panels --file` reports 0.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.
- **Coordinator sweep:** Defender's "No book prices checking from behind at a minor alone" (five sites) is true as written. It is a claim about the checking-from-behind rule, and a Hockey Canada head hit is a different call.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | HC 7.5(a)–(e), 7.6 preamble and (a)–(d), 7.7 preamble and (a)–(c), 4.11(a)(i), 4.12; CARHA 50, 53 and Note; IIHF 43.1–43.3, 48.1/48.2, 24.8; NHL 57.3 |
| D2 Exceptions | HC and IIHF head-contact supersession; CARHA's no-substitution Note |
| D3 Cross-book divergence | head-hit-from-behind routes by book |
| D4 Citation integrity | HC 4.12(a) → 4.11(a) |
| D5 Provenance | not engaged |
| D6 Negative existence | CARHA Rule 50 supersession language searched (none) |
| D7 Cardinal rule | "plan on" in place of false absolutes |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Winger KT10 and Defensive Zone KT4 read and left |
| D10 Key-facts | Winger :510/:707 and Defensive Zone :477 voiced alone |
| D11 Reader safety | safety-reviewer, two reads (one Major fixed) |
| D12 Read-aloud | caption antecedent "plan on it" → game misconduct confirmed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed
- **Forecheck captions, IIHF asymmetry:** they say "no minor in … IIHF" without the IIHF 48 head case, which the host body at :986 carries.
- **Caption length:** the tariff captions run 1,300–1,465 characters, about 5× the target. The tariff paragraph is the readability problem.
- **how_to_watch_hockey:** it voices the 277-word forecheck-122 tariff caption with no counterweight prose nearby.
- **NHL 48.1:** not checked for a supersession clause. If it has one, "no minor at all under the NHL" at winger :530 is incomplete, in the harsh direction.
- **USA Hockey floor:** not voiced in the three tariff captions.

## What this method could not have found
- Real synthesised audio.
- Officiating practice at the 7.5/7.6 seam.

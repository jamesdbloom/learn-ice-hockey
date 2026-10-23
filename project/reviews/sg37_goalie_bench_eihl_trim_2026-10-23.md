# SG37: goalie bench trip and penalty shot by book; Body Contact EIHL repetition trimmed (23 October 2026)

## What changed

- **rules_primer :596**
  - Hockey Canada 10.5(a) now reads "a penalty shot instead if it is thrown, shot or kicked at the puck or carrier in your zone, and possibly one for a slide". 10.5(a)(ii) says "will be awarded… in lieu of a Minor"; the Interpretation says "may" for a slide.
  - An interim "possibly a penalty shot" understated the mandatory case. The safety review caught it.
  - "writes no stick-specific bench bar": HC 10.1 lists a goalie going to the bench to adjust equipment as delay of game.
- **goaltender :1416, :1513 (facts), :1529 and equipment :434**
  - The bench trip is barred at any time under NHL, IIHF and PWHL 10.4, and at a stoppage under USA Hockey 605(c) and CARHA 51(e).
  - Under Hockey Canada a stoppage trip costs the backup going in, a minor, an empty net, or the timeout (Interpretation 11 to 10.1(a)).
  - The old lines were unscoped or omitted Hockey Canada and CARHA.
- **body_contact_and_battles: Elite League mentions 72 → 54** (owner ruling 22 Oct, "trim where it's repetition"). 40 now appear in the page and 14 in the Sources trailer, which was left alone.
  - Each claim is kept once where a reader meets it.
  - Removed restatements include a pointer bullet that repeated the next section's heading.
  - :712 dropped an overstated "except in the EIHL"; the EIHL makes the misconduct automatic only on a face or head injury, which :713 states.
  - No rule's substance changed.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety + rules (D1–D3, D11) | safety-reviewer ×3 passes, reading hc_2026-08-print, carha_2026, usah, nhl, iihf 2026-27, pwhl, eihl_casebook | Pass 1: the bench scope was upheld, and every EIHL cut was checked one by one and upheld. One MINOR understatement: rules_primer "possibly a penalty shot" for a thrown or shot stick, which HC makes mandatory. One minor compression, "penalises" for Interpretation 11's four options. Both fixed. Pass 2: CLEAR, with one wording minor ("writes no bar" against the HC 10.1 equipment line), now fixed. Pass 3 is not needed for that two-word scope change, which the commit gate re-derives. |
| Mechanical | coordinator | Run after the last edit: check_facts, check_links, check_absolutes, check_geometry and check_secrets all exit 0. check_marker_pairs: 0 lost; its one split-half candidate is body_contact :1865, a facts line with no marker in HEAD (false positive, confirmed by both the trim agent and the reviewer). check_callout_flow --bare: 0. check_counts: no drift. npm build exited 0 after the last edit. The feed is byte-identical to production. |

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy, D2 exceptions, D3 divergence | Checked by the safety-reviewer, which read the rule texts |
| D4 citation integrity, D5 provenance | Out of scope |
| D6 negative existence | Checked: "writes no stick-specific bar" (corrected from "no bar") |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: the bench scope propagated to goaltender facts :1513; the EIHL trim was layer-tested per claim |
| D10 key-facts layer | Checked: changed facts lines read correctly voiced alone (reviewer) |
| D11 reader safety | Checked |
| D12 read-aloud | Checked by reading: "that league" antecedents are in the same line or paragraph |
| D13 folklore | Out of scope |
| D14 structure, style, links | Checked: check_links passes; no anchor changed |
| D15 rendered site | The build passes. Wording-only changes; no browser pass (Chrome blocks localhost this session). |

## Owner questions raised (plan rows)

- Should the Body Contact Sources trailer's 14 EIHL mentions be trimmed?
- Should the nine-line EIHL fighting facts block be cut further?

## What this method could not have found

- Other documents stating the bench trip unscoped or without Hockey Canada.
- EIHL claims made without naming the league.
- Audio chunking, since nothing was rendered.

# SG14: board-posture keep/demote, SG13 follow-ups, renderer fixes (22 October 2026)

## Board posture: keep or demote (owner ruling 23 Sep: keep where the page is about board contact; demote where inherited)

| Page | Call | Change |
|---|---|---|
| conditioning_and_recovery | Body KEEP (its AC-joint section is about the boards); summary layers trimmed | :210 repeated bold sentence trimmed to the neck limbs; CM :613 "go in on an angle… forearm and hip — never the tip of the shoulder"; KT10 mechanics demoted ("on an angle, never on the point of your shoulder, head up and chin off your chest… never turn your back… never duck") |
| getting_started | Inherited; short line stays everywhere; §6 link | Body :492 trimmed ("turn your skates parallel and take it on your forearm and hip, never the point of your shoulder"); CM :659 keeps "forearm and hip to the wall, never the point of your shoulder" (restored after review); KT4 unchanged |
| switching_positions | Wall-play section KEEP (light trim); off-wing demoted | :211 drops "feet apart, knees bent, as USA Hockey hedges it"; facts :423 and body :438 now "forearm and hip to the wall" |
| zone_entries | Full mechanics live in §5 body :575; facts carry the short form | Facts :355 and :597 "forearm and hip, never the point of your shoulder, head up and chin off your chest"; :464 merged into one Technique line ("forearm and hip, head up"); body :475 trimmed |
| defender | KEEP (retrieval along the boards is the defenceman's hazard) | none |
| passing_and_receiving | Demoted to body :215; facts kept short | Facts :195 "Take the wall on your forearm and hip, never the point of your shoulder; head up and chin off your chest, even going slowly" |

## Rules follow-ups (from SG13)

- **body_contact_and_battles.**
  - Late-hit facts :637 (298/300) and body :655 now give NHL 56.4/56.5, PWHL 57.4/57.5 and 21.1, and add HC 8.3(c) to the body.
  - :1148 and :1164 now cite "Hockey Canada 10.1(i)".
  - :1651 (300/300) still names no 21.1 in facts; the body at :1671 carries it.
- **time_and_space :562.** Adds NHL/IIHF/PWHL 69.2/71.2 deliberate goalie contact "a minor or a major", and a 21.1 match in the NHL/PWHL.
- **defender :244.** The HC crease claim followed Interpretation 5. It is now "a puck scooped out of the crease and then smothered is a minor, not a shot". The old text overstated it.

## Renderer (scripts/md_to_speech.py)

Seven fixes:
- bare Roman numerals after clause/item are now read as numbers;
- "U10"/"U12" at a sentence start are capitalised;
- Jr/Sr becomes "Junior or Senior";
- the first word after a list ordinal is lowercased (closed word list only);
- CAN/CSA is spelled out;
- "hockey 101" is read "one oh one";
- the Polly-era `"engine": "long-form"` is removed from the manifest (nothing reads it).

**Verified** against a frozen HEAD content snapshot rendered by both old and new scripts:
- 754 changed lines, every one explained by a fix; 0 unexplained.
- Line counts per document are unchanged.
- Chunk total 2551 → 2550 (one getting_started merge, 2,785 billed chars, under the cap).
- Self-test: 271 assertions. The 2 failures existed before (the 🇬🇧 lead).
- `--dry-run` on the live tree exits 0.

## Reviews

- **rules-verifier (fresh):** all six rules hunks hold. One optional point: the :637 NHL GM-on-injury phrasing errs harsher. Left.
- **safety-reviewer (fresh, rendered conditioning, zone_entries, getting_started).** Two MAJORs:
  - "side-on" replaced "forearm and hip" (heard as shoulder-first; USA Hockey IBC "Never hit the boards or glass with the tip of your shoulder");
  - zone_entries and getting_started CM lost their last voiced-alone shoulder carrier.

  Minors: passing :195, switching :423/:438 and getting_started :492. **All fixed.**
  - **Re-read: CLEAR.** One remaining minor: chin-off-chest dropped from zone_entries facts. Applied, with :597 fitted to 196/200 by "Caught on the boards: forearm and hip…" (no limb cut).

**After the commit gate cleared:** the gate noted zone_entries facts :464 had the same gap the reviewer's last minor fixed at :355/:597. The same limbs were added there: "take it on your forearm and hip, never the point of your shoulder, head up and chin off your chest". This is confined to that finding. check_facts passes, the build was re-run, and check_links and check_absolutes pass.

## Gates (after the final edit, no pipe)

check_facts, check_links, check_absolutes and check_secrets pass. check_marker_pairs: 8 files, 0 LOST. check_counts: no change. md_to_speech --dry-run exits 0. `npm run build` exited 0 after the last edit.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier |
| D5, D6, D8, D13 | Out of scope |
| D7 | ✓ |
| D9 | ✓ Carrier tables per page in the agents' reports; safety-reviewer layer-checked every demotion |
| D10 | ✓ All facts within caps |
| D11 | ✓ safety-reviewer CLEAR after two rounds |
| D12 | ✓ Renders checked; renderer diff fully explained |
| D14 | ✓ |
| D15 | Prose/facts only; build passed; no site-reviewer pass |

## Still open

- **Renderer:** sentence-initial rule numbers are spoken lowercase ("…clause d). six hundred and one…"). Whether Hockey Canada "2.2(i)" is a letter or a numeral is unchecked.
- **Posture:** defender facts :127 still carries the full posture at 199/200 (left on purpose, page is about the boards). practice_and_development :360/:382 fallback is still open.

## What this method could not have found

- Posture limbs cut without a matching phrase left behind. The checks were lexical.
- How the renderer changes sound when synthesised. Only the text was compared.

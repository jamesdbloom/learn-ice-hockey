# SG4: source-page safety gaps from the Detailed reviews (21 October 2026)

**Origin.** The safety reviews of the Detailed Principles podcast scripts found that the scripts were safer than their source pages. The pages taught an act but left out its safety limb. Each gap was logged as a row in OPEN_ITEMS: (y), (z), (aa), (ac), (ae), (ag), (ak) and (am). SG4 sent one agent to each file, with exclusive ownership. Each agent treated its row as a hypothesis and fixed the claim in every layer. The brief is in scratchpad sg4_brief.md, with method from sg_brief.md.

## Changes by file

| File | Row | What changed |
|---|---|---|
| technique/shooting.md | (y) | The breakaway deke round the goalie now says go round, never through, pull up short of the goalie and the post, head up. It also says that running into a goalie is a penalty in every book and that charging one can end your game. Applied to facts :684 and :729, the table :697 and the body :738. Limb (y)(2), the high stick as contact, was **refuted**: the page already carries the USAH Casebook 621 Sit. 2 and CARHA 62(a) no-contact limbs. |
| hockey-iq/playing_without_the_puck.md | (z) | The facing-the-wall fallback now says what to do: stick and gloves up, spread on the glass, head off it. Applied to facts :332 and the body :339, from USA Hockey *Introduction to Body Contact*. |
| hockey-iq/scanning_and_anticipation.md | (aa) | The chip-and-race and chip-and-chase gates now say puck not player, the league's call, and pull up on the numbers. Applied to the body :390/:393 and to facts :380/:384, which are voiced alone. The D retrieval at :175 gains the angle-in posture. :417 "saves more goals than any other" is now unlabelled-claim-free. |
| hockey-iq/time_and_space.md | (ac) | The two-handed stick lift gains BC's limbs: under the shaft, below the bottom hand, up not sideways, as the puck arrives, let go. Against a player bent low over the puck, lift under the shaft or leave it alone. :94 drops the misplaced "tight gap". CM :664 and KT11 :722 now say "every book penalises it with contact, and most without". |
| getting-started/getting_started.md | (ae) | The boards posture gains the slow-speed limb and the full fallback at :490, CM :657 and KT4 :709. :575 gains the CRT6 gloss "(becoming less responsive, drowsy)". :579 now says "needs a healthcare professional urgently — call 999 unless one is already at the rink". The :195 USAH claim was **refuted** as untraced: it comes from USAH Casebook 608 Situation 1. |
| off-the-ice/practice_and_development.md | (ag) | :475 strength work "may lower injury risk, though no exercise guarantees it" replaces "the main injury protection". The battle drills at :360/:382 gain the gate, "— and in practice, your coach's", and the wall limbs. The :561 concussion line gains the neck line, the ambulance trigger and the aftercare. CM :608 is aligned with it. |
| off-the-ice/how_to_watch_hockey.md | (ak) | The net-front instruction at CM :662 and KT7 :717 gains head up, the post, and "never go into the goalie". The :648 retrieval gains the boards line and the chase gate. :146 now says the weak-side winger drops into the high slot whenever the centre goes low. That matches rink_map :374's alternative. The gate noted that, read literally, it puts a winger on the point and in the high slot at once; this is logged for a content-reviewer. Icing is defined. :451 now says a goalie who leaves the crease and falls on the puck can be penalised. |
| reading-diagrams/reading_ice_hockey_diagrams.md | (am) | The body :100 and KT10 :293 now say "where checking is banned, a hit is a penalty, and a hard one can get you thrown out of the game". The bare "hard hit" form was rejected because it is a ladder. |

## Reviews

- **sg4S (safety-reviewer)** read every hunk in its paragraph and layer and rendered all 8 files. Every new limb shares a chunk with its act.
  - It found **one CRITICAL**, which the repair itself had introduced. practice_and_development :561 hung the CRT6 three-hour and UK 24-hour window on all three of driving, alcohol and being left alone. That implied a concussed player may drive after three hours.
  - It was fixed so the window attaches only to "someone stays with you". Driving is barred until a medical professional clears the player, and alcohol has no window. This matches conditioning_and_recovery :29, :338, :341, :612 and :692, and getting_started :577. CM :608 was aligned.
  - The final read was **CLEAR** on the whole diff.
- **sg4R (rules-verifier)** checked every rules claim against primary text and independently found the same aftercare defect, quoting CRT6 (rendered) and ukcg.txt :408–413. It confirmed:
  - NHL/IIHF 69.4;
  - USAH 607(c)/(d) and 604(c)–(e);
  - HC 7.3 and 8.5;
  - CARHA 49, 52 and 30(a);
  - IIHF 101.1;
  - USAH 614(c), HC 10.1(a) Interp. 3(v) and CARHA 58(b);
  - NHL 81.1;
  - ibc.txt.

  It flagged the "most without" claim (time_and_space) as unconfirmed.
- **Coordinator brief refuted by the fix agent.** The coordinator briefed changing "most without" to "the NHL and IIHF even without". The fix agent refuted this from primary text: HC 8.3(i) (`hc_2026-08-print.txt:6784-6789`) and CARHA 66(a) (`carha.txt:3105-3111`) reach the no-contact case, as do the NHL, IIHF and PWHL. Only USA Hockey is unsettled. The proposed wording would have understated the cost in a Key Takeaway voiced alone. sg4S upheld the refutation. **The brief was the defect.**
- The fix agent also declined the brief's "never on a player bent low over the puck", because BC :346, CM :1988 and KT3 :2091 say "under the shaft, or leave it alone".

## Gates (after the final content edit, no pipe)

- check_facts, check_links, check_absolutes, check_geometry and check_secrets all pass.
- check_marker_pairs: 8 files, 0 LOST, 0 SPLIT.
- check_counts --update: no change.
- `npm run build`: exit 0; check-links is clean across 55 pages and 11,675 links.

## Dimensions (D1–D15 per project/reviews/TEMPLATE.md)

| Dim | Status |
|---|---|
| D1 Rules accuracy | ✓ sg4R checked every changed rule claim against sources/ and quoted the grep lines. CRT6 was rendered with pdftoppm. |
| D2 Rules travelling without exceptions | ✓ The aftercare window is scoped to "left alone" only. NHL/IIHF 69.7's incidental-contact carve-out does not reach "running into" a goalie. |
| D3 Rule-set divergence | ✓ "Most without" is scoped (USAH unsettled). Ejection is "can", which is the honest cross-book floor. |
| D4 Citation integrity | ✓ No new citation numbers. The USAH 604(d)/(e) slip in the podcast notes is logged and is not on the page. |
| D5 Provenance | ✓ The fallback wording traces to the USA Hockey *Introduction to Body Contact* manual (ibc.txt :672–678, :1497). |
| D6 Negative existence claims | Out of scope: none made. |
| D7 The cardinal rule | ✓ The gates say "your league's call — and in practice, your coach's". No coaching choice is stated as law. |
| D8 Numeric ownership | ✓ The 3h/24h figures follow their owner (conditioning_and_recovery) and are now scoped to their own limb. |
| D9 The summary layer | ✓ Claim-wide per file. CM and KT now carry the limbs at getting_started KT4, how_to_watch CM/KT7, time_and_space CM/KT11 and reading_diagrams KT10. |
| D10 The key-facts layer | ✓ --near was checked before each edit. Every changed facts line was read voiced alone (shooting, PWTP, scanning, time_and_space). |
| D11 Reader safety | ✓ sg4S found 1 CRITICAL, introduced by the repair and then fixed, and gave a final CLEAR. |
| D12 Read-aloud integrity | ✓ All 8 files were rendered, and each limb shares a chunk (most share a `<p>`) with its act. |
| D13 Folklore | Out of scope. |
| D14 Structure, style, terminology, cross-links | ✓ check_links is clean. No new ⚠️ was added and none was lost. |
| D15 The rendered site | Build passed. Prose-only changes. The browser pass is deferred to the "Site-reviewer pass due" row. |

## What this method could not have found

- The same aftercare timing defect, "three hours" hung on driving or alcohol, in pages this wave did not touch. A grep for "drive" cannot see it, because the qualifier silently changes its attachment.
- A British U10/U12 non-check hit tariff. None is on disk, so "a hard one can get you thrown out" is unconfirmed for that case.
- Hazards in sections of these 8 files that the diff did not touch.
- Whether the wall postures can be executed safely at speed.

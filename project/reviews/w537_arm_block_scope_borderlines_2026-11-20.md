# W537: the arm-block census and its borderlines (20 November 2026)

## Origin: the W536(1) census

A read-only rules-verifier swept every layer of `content/` for any arm block, arm bar, strength move or arm seal that was not scoped away from USA Hockey or from Hockey Canada's 7.3 divisions.

The sweep used:
- a 30-alternative regex (407 hits);
- a sentence-level sweep pairing arm, forearm, elbow or hand with an action word (271 sentences);
- looser board, corner, net-front and pinch sweeps.

The census verified the premises on disk:
- **USA Hockey 622 Note** (`usah.txt` :4343–4352): "using a free arm/hand to restrain or impede the opponent's progress" is holding.
- **604 Note 1** and the **Declaration** (:385–388).
- **Casebook Standard of Play Situations 5–7** (`usah_casebook.txt` :18404–18468):
  - Situation 5 covers a defender at their own net front, before the puck arrives.
  - Situation 6 covers a puck carrier, with no location limit.
  - Situation 7 covers players engaged in a corner or at the net front, reaching for the puck.
- **Hockey Canada 7.3** (`hc.txt` :6002–6054).
- **The strength-move sentence** appears in NHL, IIHF and PWHL 54.2/55.2 and in Hockey Canada 8.1. It scores 0 in USA Hockey, the USA Hockey Casebook, CARHA, the EIHL Casebook, the In-House Rules and the IHUK Rules of Competition.

**Result:** 0 defects and 7 borderlines. Nothing permissive survived in any summary layer.

## Repairs

| Site | Before | After |
|---|---|---|
| forechecking :624 | "On the wall, a free arm may only steer… in a corner or in front of the goal". The phrase names a place other than the wall, and gates Situation 6, which has no location limit. | "A free arm may steer an opponent only while you are both engaged in a corner or in front of the goal and you are reaching for the puck, or keep a position you legally established once the puck is yours — never to impede them, knock them off the puck or make space — and an arm wrapped round them on the boards is holding (622 Note; …Situations 6 and 7)" |
| forechecking :1033, section lead | "never wrap an arm round them or push off with a skate" | adds "block with one under USA Hockey", matching In short :602 and facts :606 |
| on_ice_communication :601 | Joined two Situation 5 clauses, so that "as long as the arm(s) are not extended" read as qualifying the lean. Also dropped the scope. | "lets a defender in front of their own net, before the puck arrives, 'use size, strength and balance to lean on your opponent', and steer with the stick or forearm 'as long as the arm(s) are not extended'". Both quotations are verbatim and no period sits inside the marks. |
| core_principles :95 | "Rule 8.1 (Holding), permits arm-blocking" | adds "(though where 7.3 bars checking, a push or an arm extended after angling is penalised)". "Penalised" rather than "a minor", because 7.3(b) reaches a major plus game misconduct. |

**Left alone, with reasons:**

- **body_contact :1737 table cell.** The table has 1 character of headroom, so adding "none in USA Hockey or CARHA" would drop it from the audio. :1766 carries the negative in prose. Filed as W537(3).
- **puck_handling :503 and :517.** 7.3's "after angling" limb is a defender's act. A carrier's stiff-arm block is reached by 7.3(a)'s push limb, which is already named.
- **puck_handling :519.** This is a two-handed forearm-and-shaft bar, "braced, not driven". Casebook 609 Situation 2 (`usah_casebook.txt` :11815–11828) says a two-handed stick "with no extension of the arms" is not cross-checking. 622 Note's "free arm/hand" does not reach two hands on the stick.

## Review

| Reviewer | Critical | Major | Minor |
|---|---|---|---|
| safety-reviewer with rules check | none | none | 2, both optional |

The reviewer re-read the four edits and the two units that were left alone. It upheld every one against the source and found nothing permissive.

The two optional minors are filed as W537(1) and (2):
- **:1033 names only USA Hockey.** A reader in a 7.3 division could hear the arm block as fine; :624 prices that case.
- **puck_handling's "a push".** 7.3(a) reads "body-checks, bumps, shoves, or pushes".

## Rows

- **Closed:** W536(1).
- **New, from W537:** (1) to (3) above.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, run after every agent finished (`scratchpad/build_w537.log`).
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 3 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered by the census, agents and reviewer |
| D2 exceptions | Covered: Situations 5, 6 and 7 and their scopes; 7.3's divisions; Casebook 609 Situation 2 |
| D3 cross-book divergence | Covered: the arm block by book; the strength move is absent from six sources |
| D4/D5 citations | Covered: the Situation 5 quotations are verbatim |
| D6 negative existence | Covered: "no strength move" in USA Hockey and CARHA was a searched negative |
| D7 cardinal rule | Covered: the seal is instruction; arm permissions are book-scoped |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: the census found no summary-layer defect |
| D10 facts layer | Covered: puck_handling :503 judged |
| D11 reader safety | Covered by the safety-reviewer |
| D12 read-aloud integrity | Not rendered. Each edit sits inside an existing paragraph. |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered by `check_links` |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **Arm use with no arm word.** For example, "get your body into them".
- **Diagram captions.**
- **Whether forechecking's Key Takeaways and Common Mistakes are heard near :624.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.

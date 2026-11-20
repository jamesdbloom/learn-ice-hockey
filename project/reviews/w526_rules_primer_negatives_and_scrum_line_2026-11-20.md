# W526: rules_primer's absence claims tested for the act, the scrum facts line heard, and Elite League parity (20 November 2026)

## Scope

| Who | Files | Work |
|---|---|---|
| Agent A | uk_rules, faceoffs | W525(2) and W525(3) |
| Agent B (rules-verifier, read-only) | — | W525(1): every absence claim in rules_primer, about 45 of them, swept for the act in several wordings across all books on disk |
| Agent C | rules_primer | Repaired B's findings |

A second rules-verifier then checked the whole diff (C4).

## Results

### Agent A
- **uk_rules :308.** The Elite League limb now ends "so plan on it there too", matching :413 and goaltender :1196. It does not claim the DOPS reaches EIHL fixtures.
- **faceoffs facts :156, rendered.** Voiced alone, each condition came before its book, and a listener could not tell which group the PWHL belonged to. The line was reordered to name each book first and to state the shared "past the circle top" condition once. After the rules-verifier's nit it reads "the NHL and IIHF (76.2) and PWHL (78.2)". It is 299/300.

### Agent B: the absence claims
- **What held.** No Key Takeaway, Key focus or Overview negative was false. Most body and Common Mistakes negatives held. The verifier recorded, for each, the books and wordings it swept. rules_primer has no facts blocks.
- **What did not hold.** Three were wrong or incomplete, and all in the harsh direction. None understated a penalty:

| Site | Claim | Finding | Repair (agent C) |
|---|---|---|---|
| :502 and :526 (arm block) | "USA Hockey and CARHA write no such permission" | False for USA Hockey. The Casebook's unnumbered Standard of Play section (Situations 5–7, `usah_casebook.txt` :18401–18470) lets a forearm or free arm steer an opponent, never extended and never pushing off. It may hold position only with the puck or while reaching for it. | Both sites now carry the USA Hockey permission with that condition, which the second verifier asked to be kept. CARHA still writes none. |
| :202, :216 and Common Mistakes :1156 (delayed offside) | Forcing the carrier deeper was credited to the NHL, IIHF and PWHL only | USA Hockey Casebook 630 Situation 38 (:15757–15773) has linespersons stop play once the carrier is "forced back further into their Defending Zone". | Added at all three sites. The imminent-hit negative is kept. |
| :997 (wrongly called offside) | "Only USA Hockey writes a rule for it" | It holds that only USA Hockey names the act (630(e)). But a general clause places the draw in the other books. | Now gives the usual case: with the puck in the attacking zone, the NHL, IIHF and PWHL 76.2/78.2 "not specifically covered" clause puts the draw in the zone nearest where it was last played, which can be an end-zone spot. Hockey Canada 6.3(b) sends it to the nearest spot other than centre. CARHA writes nothing. |

**The :997 citation.** The clause sits inside 76.2 in all three books. The coordinator checked this against the headings: NHL 76.2 runs :7932–8021, and the IIHF 2026/27 76.2 runs :6232–6305.

## Review

| Reviewer | Wrong | Incomplete or nit | Outcome |
|---|---|---|---|
| rules-verifier (C4, whole diff) | none | 2 incomplete, 1 nit | All repaired |

Every site was verified with source lines:
- The :156 scrum line, against all six books.
- The Casebook quotations, verbatim.
- The DOPS scope, from §5 (England and Wales only). The EIHL Casebook has its own Fines and Suspensions section.

The two incomplete findings were the dropped Situation 6/7 condition at :526 and the neutral-zone clause at :997 that rarely fits. The nit was the 76.2 attribution at :156.

**Commit gate, first pass: BLOCK.** Three reasons:
- **C4/C11.** The :526 repair kept only half of Situation 7's condition. It attached "with the puck or while reaching for it" to holding position only, so free-arm steering with no reach for the puck read as allowed, which is the permissive direction.
- **C6.** No safety-reviewer had seen a diff that changes arm contact and whistle protection.
- **Plan row W526(3)** carried the same misreading. The coordinator corrected it.

**Repair.** :502 and :526 now state each case from the Casebook:
- **Situation 5:** a forearm may steer, never extended, in front of your net.
- **Situation 6:** a hand off the stick may keep position only with the puck.
- **Situation 7:** a free arm may steer or keep position only while engaged in the corner or in front of the goal and reaching for the puck.
- **In every case:** never grab, never push off.

:1156 now says "can stop it" (Situation 38's "should be alert to stop play").

**Safety-reviewer (C6), after the repair.** No critical findings. One major and four minors, all repaired:
- **The major.** The new forearm permission sat beside a no-check limit that named only hips and shoulders. USA Hockey 604 Note 1 (usah.txt :3541–3545) defines an illegal body check as "overt hip, shoulder, forearm or torso action". The limit now names the forearm, using the Note's main definition, not its forcing-off-the-puck clause, which carries an "effort to play the puck" condition.
- **The minors.**
  - Situation 5 was scoped to the front of the net.
  - "Hold" became "keep position".
  - Situation 7's scene was restored.
  - :502 now carries "never pushing off".
  - :202 now carries Situation 38's precondition ("once they see offside attackers are not coming back").

The reviewer also caught that the index held the pre-repair text. The file was restaged before the second gate.

**C11.** The last repairs are confined to the reviewer's findings and taken from its sketches. The coordinator also checked them against the source.

## Rows

- **Closed:** W525(1), (2), (3).
- **New, From W526:**
  1. USA Hockey Casebook's unnumbered sections (Standard of Play, the Declaration of Player Safety, the preface). These are the likeliest source of false "USA Hockey writes no …" claims corpus-wide.
  2. rules_primer negatives not reached by the sweep.
  3. Propagate the Casebook arm permission to puck_handling, body_contact, winger and forechecking. Reconcile forechecking :624's narrower wording.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`. The rules_primer :972 table is unchanged and still read aloud.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 3 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered by two rules-verifier passes. |
| D2 exceptions | Covered: the Casebook conditions (Situations 6/7, Situation 38's awareness trigger). |
| D3 cross-book divergence | Covered: arm permission, forcing trigger and erred-offside placement, by book. |
| D4/D5 citations | Covered: the 76.2 heading ranges, checked by the coordinator. |
| D6 negative existence | Covered. This was the wave's subject: about 45 negatives tested for the act. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: each claim was checked in every rules_primer layer. |
| D10 facts layer | Covered: faceoffs :156 is within its cap, and rendered. |
| D11 reader safety | Covered by a safety-reviewer after the first gate's block. Arm contact and whistle protection were checked; one major (the no-check forearm) was found and repaired. |
| D12 read-aloud integrity | Covered for faceoffs :156, rendered before and after. The rest was not rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: `check_links`. |
| D15 rendered site | Structural only. Chrome was not connected. |

## What this method could not have found

- **Negatives phrased in words the sweep's patterns did not catch** ("cannot", "is unsettled", "leaves it to").
- **Book text that prices an act under wording no sweep tried.**
- **Whether "usually already in the attacking zone" holds in play.** It is a reading of how an offside whistle happens, not book text.
- **Reviewer transcripts.** They are not on disk; this record summarises them.

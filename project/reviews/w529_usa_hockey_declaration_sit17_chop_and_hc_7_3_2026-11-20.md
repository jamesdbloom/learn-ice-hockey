# W529: what USA Hockey's unnumbered sections price, the chop on the stick, and Hockey Canada's no-check limit, corpus-wide (20 November 2026)

## Origin

Two read-only rules-verifiers ran in W528:

- **Hockey Canada census (W527(1)).** Hockey Canada 8.1's arm "strength move" reached a reader in a 7.3 no-check division at 8 of 17 units with no 7.3 limit.
- **USA Hockey's unnumbered sections (W526(1)).** The Declaration of Player Safety, the Points of Emphasis, the Preface and Casebook Appendix VI (Standard of Play) contradicted the corpus in four places, labelled F1–F4 below.

Brief: `scratchpad/w529_common.md`.

## The claims, verified against the source by agents and reviewers

### F1 — checking a player already engaged for the puck. Permissive.

- **Corpus said:** a 640(e) minor; ejection only if reckless (640(g)).
- **Declaration** (`usah.txt` :325–336): a check on an engaged player is "considered dangerous, careless or reckless (unacceptable)". Where "the player delivering the check has made no effort to play the puck, the major plus game misconduct or match penalty provisions of these rules must be assessed".
- **Caveat:** the Declaration says it clarifies the rules and does not replace them (:261–263).

### F2 — a body check in a USA Hockey non-check (Competitive Contact) game. Permissive.

- **Corpus said:** a 604(c) minor; a major and game misconduct only if reckless (604(d)). This appeared in about 30 sentences.
- **Casebook Standard of Play Situation 17** (`usah_casebook.txt` :18671–18678): "a hard body check" thrown by a player who "clearly has no intention of playing the puck" means "a major plus game misconduct penalty must be assessed".
- No content file had cited Situation 17 before this wave.

### F3 — the late hit. Permissive, lower confidence.

- 640(b) deems a player who has released a shot or pass "vulnerable or defenseless". The Declaration then reaches "careless" as well as reckless.
- **Adult men:** 640(b)'s "(except Adult Male Classifications)" modifies its minor-penalty sentence, not clearly the deeming. The Declaration names no classification.
- The corpus therefore says the book does not settle adult men and tells them to plan on it. It never excludes them.

### F4 — a chop on the opponent's stick. Harsh.

- **Corpus said:** USA Hockey has "no let-out"; a chop at the stick is always slashing.
- **Situation 3** (:18364–18374): a chop or press "on the lower portion of the stick shaft" to dislodge the puck "is a good defensive play".
- **Still penalised:** higher up the stick, or where it impedes without a play on the puck. Any slash to the hands must be penalised (Situation 4; Points of Emphasis :747–749).
- **NHL and IIHF 61.1** excuse a chop that is "an attempt to play the puck".

### H — Hockey Canada 8.1 without 7.3. Permissive.

- 7.3 (`hc.txt` :6004–6054) applies "only in divisions of U13 and below, in female hockey, and any other divisions approved by a Member".
- In those divisions:
  - an arm extended after angling is a body check;
  - an intentional "body-checks, bumps, shoves, or pushes" is a minor (7.3(a));
  - a major and game misconduct follows on violence, mandatory on injury (7.3(b)).
- The book never reconciles 8.1 with 7.3. Every repair therefore states the 7.3 acts and does not say "8.1 does not apply".

## Editing agents (disjoint files)

| Agent | Files |
|---|---|
| A | body_contact_and_battles |
| B | rules_primer, language_and_glossary, rink_map, on_ice_communication, reading_ice_hockey_diagrams (no change) |
| C | winger, center, defender, goaltender, switching_positions |
| D | forechecking_systems, offensive_zone_play, defending_the_rush, defensive_zone_coverage, breakouts (no change), faceoffs |
| E | game_management, playing_without_the_puck, time_and_space, puck_handling, team_play_and_culture, conditioning_and_recovery, shooting (no change) |

In all, 21 content files changed, across body, facts, Common Mistakes, Key Takeaways, Overview and Sources-trailer layers. The per-site before→after is in each agent's report.

### Shapes of the repair

**F1**
- "at least a minor (640(e))";
- if you arrive to hit rather than to play the puck, plan on a major and game misconduct or a match;
- both Declaration sentences quoted, on the model of breakouts :1155.

**F2**
- a 604(c) minor;
- a hard check thrown with no intention of playing the puck is a major plus game misconduct that "must be assessed" (Situation 17);
- as is a reckless one (604(d));
- the 602(a) match for the reckless one.

**F3**
- "a careless one with no play on the puck" is added wherever reckless had been the only route to ejection;
- the 602(a) match stays tied to reckless or to an attempt to injure (`usah.txt` :3498–3500).

**F4**
- the hands half is kept everywhere;
- the stick half now carries Situation 3, and higher up the stick is a penalty there too.

**H**
- the 7.3 acts are stated beside every 8.1 arm-block permission.
- That covers 8 sites, including winger :741 (split, so that each facts line carries its own limit), the body_contact :1735 table row (shortened to fit) and rink_map :526 (not in the census).
- forechecking :272 no longer attaches USA Hockey's "overt" test to Hockey Canada.

**Also corrected:** playing_without_the_puck facts :522 now gives USA Hockey's lengthen-the-path right. The brief claimed the body text already carried it; it did not, so the body now carries it too.

## Review

| Reviewer | Scope | Critical | Major | Minor |
|---|---|---|---|---|
| Safety-reviewer with rules check, group 1 | body_contact, foundation pages, position pages | none | 3 | 9 |
| Safety-reviewer with rules check, group 2 | systems pages, hockey-iq, off-ice, puck_handling | 3 | 3 | 7 |

All findings were repaired.

**Criticals** (round-10 shape: the body and facts were repaired, but a summary layer still gave reckless as the only route):
- faceoffs Common Mistakes :1320;
- conditioning Common Mistakes :608 and Key Takeaway 11 :689;
- playing_without_the_puck Common Mistakes :1034.

**Majors:**
- **defender facts :319.** "On the stick in all but USA Hockey" was a new, permissive line.
- **body_contact Common Mistakes :2063**, and **:2096**, which had the same shape.
- **winger facts :741.** Still gave 8.1 alone.
- **OZP facts :968/:973.** These had lost 640(g)'s unconditional reckless tier and 602(a). Both are restored, and the Declaration route is scoped to an engaged player, passer or shooter.
- **game_management facts :175/:1189.** 602(a) had lost its "recklessly endangers or attempts to injure" condition, which overstated it.
- **DZC :794/:798/:865.** These had no Situation 17 limb.

**The adult-men correction.** The coordinator first relayed one reviewer's optional "outside adult men's hockey" fix. The other reviewer showed that this phrase reads as exempting adult men, which is the permissive direction. Every such insertion was reverted.

The two remaining "outside adult men's hockey" phrases (body_contact :679 and :2071) scope 640(b)'s minor, which the exception does reach.

**Commit gate, first pass: BLOCK (C7/C11).** The body_contact :1735 Holding cell had been shortened to fit, and the shortening stripped its book names. "You may fend off (56.1)" and "Arm block: 54.2" then read as universal, although USA Hockey 622 makes a restraining free arm holding.

**Repair.** The cell now reads: "Free hand holds, pulls, tugs or grabs; NHL and IIHF 56.1 let it fend off. Arm block: NHL, IIHF 54.2, PWHL 55.2, Hockey Canada 8.1; where 7.3 bars checking, an arm extended after angling is a check." It is 197/200 characters, and the table is still read aloud.

In the same pass, Common Mistakes :2105 regained the plain reckless tier: "as 640(g) does for a reckless hit".

The gate's non-blocking notes are filed as W529(6).

**C11.** No reviewer re-read the last repairs. Each is confined to its finding and follows the reviewer's sketch, and its agent verified it against the source. The commit gate is asked to re-derive them.

## Rows

- **Closed:** W526(1), W527(1).
- **New, from W529:**
  1. IIHF 61.1's play-the-puck let-out against the remaining "chop on the stick" claims. Partly addressed: on_ice_communication :583 now carries it.
  2. How far Situation 17 reaches beyond a hard body check.
  3. Sources trailers in four position files.
  4. Goaltender-charging tariffs still reading "if reckless".
  5. Lines not yet heard aloud, Situation 17 against a push on a screener called as interference, and DZC Sources.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 21 files, 0 lost.
  - Its one split-half candidate is body_contact facts :486, paired by shared text with the body at :469.
  - :486 carried no ⚠ in HEAD, so the pairing is false.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered by two reviewers with a rules check, plus agent verification |
| D2 exceptions | Covered: the Declaration's "no effort to play the puck"; Situation 17's Competitive Contact scope; 640(b)'s adult-male exception; Situation 3's lower shaft; the 7.3 divisions |
| D3 cross-book divergence | Covered: slashing let-outs by book; the arm block by book |
| D4/D5 citations | Covered: every quotation checked verbatim; Sources trailers extended in most files |
| D6 negative existence | Covered: the W528 verifiers swept USA Hockey's unnumbered sections in full |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered. Both reviewers layer-tested every file; the three criticals were summary-layer gaps, now repaired |
| D10 facts layer | Covered: several lines split; blocks at HARD_MAX re-divided without dropping a limb |
| D11 reader safety | Covered by two safety-reviewers |
| D12 read-aloud integrity | Judged by reading; not rendered (W529(5)) |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: `check_links`; conditional imperatives now lead with "If you…" |
| D15 rendered site | Structural only. Chrome not connected |

## What this method could not have found

- **The same tariffs in words with no rule number.**
- **Whether USA Hockey intends the Declaration and Situation 17 to override 640(e) and 604(c) in practice.** The corpus states both texts.
- **Diagram captions** carrying these claims.
- **How the new lines sound aloud.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.

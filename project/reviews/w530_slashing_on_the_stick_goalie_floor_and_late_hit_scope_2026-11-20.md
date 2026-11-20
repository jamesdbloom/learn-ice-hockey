# W530: slashing on the stick by book, the goalie-contact floor, and the late-hit careless route scoped (20 November 2026)

## Scope

| Agent | Files | Work |
|---|---|---|
| A | offensive_zone_play, game_management, body_contact_and_battles, defensive_zone_coverage | W529(6) and W529(5) (partial), then agent B's slashing findings in its files |
| B (read-only rules-verifier) | — | W529(1): the slashing let-out for a chop on the stick, checked book by book. W529(4): goalie contact "if reckless" |
| C | on_ice_communication, defender, defending_the_rush, time_and_space, rules_primer, playing_without_the_puck, shooting | Agent B's remaining findings |

One safety-reviewer with a rules check (C4/C6) read the full diff.

## Findings and repairs

### Slashing on the stick (agent B)

Agent B found two primary rulings that no page used. Both make the act more expensive:

- **IIHF Situation Handbook 61.2** (identical in both editions: `iihf_situations_2026-27.txt` :4642–4646; `iihf_situations_v1.1.txt` :4610–4615): "any whack by the defending player on the stick or hands of an opponent on or above the lower hand shall be penalized as slashing". This narrows 61.1's play-the-puck excuse, and it reaches the defending player only.
- **USA Hockey Casebook 634 Situation 1** (`usah_casebook.txt` :16252–16260): a slash that touches only the stick and knocks it out of the hand means "A minor or a major plus game misconduct penalty for slashing must be assessed". The stick is "an extension of the player".
- **CARHA's case situation** (`carha_2026.txt` :4223–4224, under Rule 66) rules the same act a minor.

**Repairs:**
- **body_contact :330.** No longer states the NHL's excuse as universal. It gives each book's rule and closes "So tap low on the carrier's shaft, for the puck, and every book allows it". The reviewer upheld that claim across all six books.
- **body_contact :365, :402, facts :1720, table :1734.**
  - :1720 lost its verb in the first pass. The reviewer flagged this as a major, and it now reads "Hockey Canada 9.3 and CARHA excuse only a tap on the carrier's stick, to take the puck".
  - :1734 is at 198/200 and is still read aloud.
- **DZC :821.** The IIHF is no longer grouped with the NHL. Situation 61.2 is now scoped to "you as the defender", per the reviewer's minor.
- **on_ice_communication :582 and :599.** :582 changes "catch only" to "excuse". :599 adds Situation 61.2.
- **defender facts :930.**
  - **First pass.** It put the IIHF's lower-hand line on USA Hockey. The reviewer flagged this as a major, because it made an upper-shaft chop sound excusable.
  - **Second pass.** It dropped Situation 3's purpose and the word "slash". The commit gate blocked on that.
  - **Facts-reviewer re-read.** It found the line did not parse aloud, that 634(b) followed "NHL, PWHL", and that the mandatory injury majors were missing.
  - **Final form: three Rule: lines (:930–:932).**
    - (a) USA Hockey's Casebook excuses only a chop or press low on the shaft to dislodge the puck (Situation 3); IIHF Situation 61.2 calls any whack on or above the lower hand slashing; the NHL and PWHL leave the play-the-puck question to the referee.
    - (b) A reckless slash under USA Hockey is 634(b), plus the 602(a) match. A slash that injures is a mandatory major and game misconduct under the NHL (61.3, 61.5), PWHL (63.3, 63.5), Hockey Canada 9.3(b) and CARHA 80(b) with 30(a).
    - (c) CARHA 80(a) allows a major, and with it a game misconduct, for an ordinary slash; 80(d) makes a slash that injures or tries to injure a match.
  - The body at :936 and :330 now names the NHL's compulsory injury major too, so (b) traces back to the body.
- **defending_the_rush :989 and time_and_space :427.** Knocking the stick out with a slash is now slashing too, at a minor or a major plus game misconduct under USA Hockey, and at least a minor under CARHA. CARHA 80(a) reaches a major.
- **rules_primer :425.** The PWHL 63.1 shin-pad carve-out was missing, and "NHL and IIHF only" was false. The comma has been restored.

### Goalie contact (agent B)

- **Verified:** every "mandatory … under USA Hockey if reckless" site. 607(b) is the only mandatory limb.
- **The floor:** deliberate contact is charging (607(d) Note 1), and 607(a)/(c) put the floor at a minor plus a misconduct.
  - **Repaired at playing_without_the_puck KT11 :1115.** The floor is now stated, and scoped to the crease or privileged area. Casebook 607 Situation 5 allows a legal check on a goalie outside it in checking games.
  - **Repaired at shooting :924.** Its final form: "607(a) anywhere and 607(c) in the crease or privileged area, where a charge is never a bare minor: the floor is a minor plus a misconduct".
- **Unsettled:** whether the Declaration's vulnerable-player clause reaches a goalie. It defines vulnerable as "a skater…". Filed as W530(1).

### Agent A's tidy-ups (W529(6))

- **OZP facts :968.** The 640(g) reckless tier now carries "adult men: plan on it". Body :1222 keeps "the book does not say" and replaces "and this document does not know" with "so plan on them".
- **OZP facts :973.** The 640(b) minor floor is restored.
- **game_management facts :175/:1189 and Common Mistakes :1290.** The Declaration's careless route is scoped to "a passer or shooter", the player 640(b) deems vulnerable or defenceless.
- **body_contact Common Mistakes :2105.** 640(g) is the major plus game misconduct; 640(h) is the match.
- **DZC Sources.** Now cite Standard of Play Situation 17, Rule 609 Situation 2 (its quotation now carries the boards limb) and Situation 61.2.

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| Safety-reviewer with rules check | none | 2 (defender :930, body_contact :1720) | 5 | All repaired |

The reviewer verified each changed claim against the primary text:
- NHL 61.1, IIHF 61.1 and Situation 61.2, PWHL 63.1;
- USA Hockey 634 and its Note, 607 and its Note 1, 640, the Declaration and 602(a);
- the Casebook (634 Situation 1, Standard of Play Situations 3, 4 and 17, 607 Situation 5, 609 Situation 2);
- Hockey Canada 9.3;
- CARHA's Glossary, Rule 80 and its Rule 66 situation.

No new text extends Situation 61.2 to an attacker.

**Commit gate, first pass: BLOCK (C4/C6/C11) on defender :930**, as described above.

**Facts-reviewer re-read** of defender :930, body_contact :1720 and shooting :924, after which:
- body_contact :1720 was split into two Rule: lines. One gives the definition with "in the referee's judgment" and Situation 61.2 with its verb. The other gives the Hockey Canada 9.3 and CARHA Glossary tap, with CARHA's scope. That block is now at HARD_MAX 14.
- shooting :924 now reads "a charge is never a bare minor: the floor is a minor plus a misconduct".

**C11.** No reviewer re-read the final repairs. Each is confined to its finding and taken from the facts-reviewer's sketches. The commit gate's second pass re-derived every one of them from primary text and returned CLEAR. Each is confined to its finding and taken from the reviewer's sketch, and its agent checked it against the source.

## Rows

- **Closed:** W529(1), (4), (6).
- **New, From W530:**
  1. The Declaration and goalies; 620(b)'s careless head-contact route carried into the goalie ladders.
  2. Slashing described in other words ("whack", "hack"); NHL 21.1 behind goaltender :1704.
  3. time_and_space :427, pressing on a receiver's blade, against Hockey Canada and CARHA.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 11 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: agent B, the reviewer's rules check, agent verification |
| D2 exceptions | Covered: Situation 61.2's lower-hand line and defending-player scope; Situation 3's lower shaft; Hockey Canada and CARHA's puck-carrier tap; 607 Situation 5's outside-the-privileged-area check |
| D3 cross-book divergence | Covered: slashing on the stick, book by book |
| D4/D5 citations | Covered: verbatim checks; Sources trailers extended |
| D6 negative existence | Covered: the shin-pad "only" corrected |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: KT11, Common Mistakes, facts lines |
| D10 facts layer | Covered: defender :930 and OZP :968 at or near the 300 cap; each judged voiced alone |
| D11 reader safety | Covered by the safety-reviewer |
| D12 read-aloud integrity | Judged by reading; not rendered |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: `check_links` |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **Slashing described in other words.**
- **A stick tap judged as hooking under another rule.**
- **Whether the Declaration reaches a goalie.**
- **How the lines sound aloud.**
- **Reviewer transcripts:** they are not on disk, so this record summarises them.

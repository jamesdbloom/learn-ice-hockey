# CARHA Rule 30(a) census — CARHA majors stated without their ejection (28 September 2026)

A read-only census by a `rules-verifier`, dispatched for plan row "cross-document claim 11". Nothing was
edited. Line numbers are as of the working tree on 28 September 2026, with 16 content files mid-edit, so
**they will move — re-locate by text, never by number.**

## The premise, verified in `sources/carha.txt` (flattened and raw)

- **30(a)** (:1417-1427): *"A player, including a goalkeeper, assessed a Major penalty shall be ruled off
  the ice for the remainder of the game (Major penalty plus Game Misconduct)."* Note: *"The only exception
  to this rule is when a Major penalty has been assessed for an ACCIDENTAL high stick, in which case the
  Game Misconduct shall not apply."*
- **62(b) Note** (:2988-2994) narrows that exception: the GM *"shall not apply to players assessed with a
  Major penalty for an accidental High Stick, except when injury results"*.
- **No other rule carves a major out of 30(a).** Searched: `shall not apply`, `no game misconduct`,
  `exception`, `notwithstanding`; read the major tiers of 49, 52, 56, 59, 62, 63, 64, 66, 79, 80.
- **32(d)** (:1515-1520): a GM for a major, other than under the Accidental High Stick Rule, *"shall
  automatically incur a one (1) game suspension"*. This is a floor ("may be subject to further discipline
  action"). The book does not reconcile it with the 62(b) Note for an injuring accidental high stick.
- **49(a)'s major is discretionary without injury** (:2450-2456), mandatory with it. The same
  discretionary shape exists at 52(a), 63(a), 66(b), 80(a) and 86(a). Mandatory-on-injury majors are at
  56(b), 63(b), 64(b), 66(e), 79(a) and 80(b).

## Result

212 voiced units attribute a CARHA major. **About 40 state it without its ejection** (21 fully, 19
partly); **17 of those are facts lines, Key Takeaways or Common Mistakes — voiced alone.** Omitting the
ejection understates the tariff: **permissive and penalty-bearing, so in lane for repair.** The 32(d)
suspension is stated at ~45 of ~170 units that carry the ejection. Whether to propagate it is an open
question: a readability cost against a floor tariff.

## Dispatch table — one agent per file, highest priority first (V = voiced alone)

| # | File | Sites |
|---|---|---|
| 1 | `systems/defending_the_rush.md` | facts V 219, 386, 740, 741 (Inj-only); body 235, 310, 394, 515, 758 |
| 2 | `positions/defender.md` | facts V 251, 289, 292, 293; body 263, 416, 782 |
| 3 | `technique/body_contact_and_battles.md` | facts V 73, 420, 595, 596; body 408, 553, 584, 611, 1122; CM 1791, 1803; 52(a) wording at 438 |
| 4 | `hockey-iq/playing_without_the_puck.md` | **KT V 952** (drops the GM printed in 66(a)'s own text); body 642 |
| 5 | `positions/goaltender.md` | facts V 1124; CM 1462 |
| 6 | `systems/offensive_zone_play.md` | facts V 620; body 913; CM 1097 |
| 7 | `technique/puck_handling.md` | facts V 439; KT V 1037; CM 953 |
| 8 | `technique/passing_and_receiving.md` | KT V 858 (62(b) GM when intentional or injuring) |
| 9 | `positions/switching_positions.md` | facts V 211; body 224; CM 493 |
| 10 | `positions/winger.md` | facts V 463; body 477; CM 686 |
| 11 | `systems/forechecking_systems.md` | body 236; CM 901 |
| 12 | `foundation/rules_primer.md` | CM 1024; body 704, 968 |
| 13 | single sites | `center.md:462`, `team_play_and_culture.md:513`, `on_ice_communication.md:278`, `game_management.md:853`, `risk_management.md:303` |

Milder cases (ejection carried, discretionary 66(b) major omitted): `language_and_glossary.md:347`, `:425`;
`rules_primer.md:1163`. Unvoiced trailers quoting 49(a) without 30(a): `rink_map.md:650`,
`time_and_space.md:649`, now repaired in wave 3.

**Brief every agent:** run `check_facts.py --near` first, because many of these lines are near 300; try
substitution or merging with an adjacent 30(a) line; brief the CLAIM, not the line; keep the discretionary
major distinct from the mandatory one.

## What this method could not have found

- a CARHA major referred to without the word `CARHA` ("that book", "the adult book");
- a major described without the word "major" ("the tier above the minor", "five minutes");
- unit boundaries that differ from `md_to_speech`'s, since the agent parsed units itself;
- diagram captions (`site/src/diagrams/*.mjs`), which were not searched;
- a flagged "Inj-only" phrasing the agent did not recognise; that column is judgement.

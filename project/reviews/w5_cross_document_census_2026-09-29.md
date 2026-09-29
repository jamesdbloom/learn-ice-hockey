# Wave-5 cross-document census, 29 September 2026

A read-only census by a `rules-verifier`. Its line numbers are from HEAD `7f468f1`, while seven files were being edited,
**so re-locate every row by its text.** Each premise was checked by the census agent in `sources/*.txt`:

- **(A)** The CARHA 30(a) Note's exception ("an ACCIDENTAL high stick") has to be read with the 62(b) Note, which
  restores the game misconduct "when injury results".
- **(B)** CARHA 16(i) Note 1 lets the referee keep a lone dressed goalkeeper on the ice. It is discretionary.
- **(C)** Obscene gestures:
  - NHL 75.5(ii) and PWHL 77.5(ii) make an obscene gesture a game misconduct, which is mandatory ("shall be
    assessed").
  - USA Hockey 601(d)(2) and (d)(3) make the gesture, or banging the boards or glass in protest, a game misconduct.
  - NHL 40.1, 40.3 and 40.4 put spitting at an official at a game misconduct plus a suspension of at least 3 or 10
    games.
- **(D)** "Tie up the stick" is not a rule term. Holding an opponent's stick is a minor in all six books (NHL and
  IIHF 54.2, PWHL 55.2, HC 8.1, CARHA 63(a), USAH 622 Note). A stick lift or a blade press is not holding.
- **(E)** CARHA 49(b): an infraction that causes a collision with the boards is a double minor. Its Note counts that
  double minor as two toward the 32(a) three-penalty ejection.

## Permissive units a listener hears, in dispatch priority

| file (line at HEAD) | claim | layer |
|---|---|---|
| technique/shooting.md:127 | A: "the accidental high stick is the sole carve-out" (no injury limb); flattens the 32(d)/62(b) tension | **facts, voiced alone** |
| technique/shooting.md:525 | A: "the only exception being an accidental high stick" | body |
| systems/zone_entries.md:733 | A | body |
| systems/defensive_zone_coverage.md:529 | A | body |
| foundation/language_and_glossary.md:347 | A: "an accidental high stick aside" | glossary body |
| off-the-ice/team_play_and_culture.md:364 | C: the NHL minor list omits 75.5(ii) | body |
| off-the-ice/team_play_and_culture.md:368 | C: **contradicted.** "the IIHF adds one more first-offence GM the NHL does not write: spitting… obscene gestures". NHL 75.5(ii) and 40.x write both | body |
| positions/defender.md:403, :417 | E: boarding priced without 49(b) | facts (voiced alone), body |
| systems/offensive_zone_play.md:868, :1099 | E: a pinch at the wall priced without 49(b) | body, CM |
| systems/defending_the_rush.md:235 | E (mild) | body |
| systems/forechecking_systems.md:757 | E (mild) | body |
| off-the-ice/mental_game.md:533, :644, :706 | C (mild): "can be" a GM where NHL, PWHL and USAH make it mandatory | body, CM, KT |
| systems/defensive_zone_coverage.md:591, :607, :817 | D: "tie up the stick" with the means unstated | facts, body, KT |
| technique/body_contact_and_battles.md:1790 | D (mild): "Tie the stick instead" (the means is defined at :1253) | CM |

## Trailer-only, not voiced (low priority)

language_and_glossary.md:473, time_and_space.md:649, switching_positions.md:571, offensive_zone_play.md:1187,
shooting.md:931.

## Harsher or trivial (accepted)

- "in the whole book", which ignores 16(i): body_contact :103, shooting :174.
- A missing skater scope on "only exception" where the context is a skater: pwtp :648, winger :497, forechecking
  :574/:757, OZP :588.

## What this method could not have found

- Paraphrases with no "accidental", "30(a)" or exclusivity word.
- Gesture claims worded without gesture, obscene or bang.
- Boards pricing that never names 49.
- Layers built on the old answer.
- The 32(d) vs 62(b) question, which the book itself leaves open.

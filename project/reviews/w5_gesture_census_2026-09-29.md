# Wave-5 gesture and spitting census, 29 September 2026

A read-only census. It looks for claims about an **obscene gesture** or **spitting at an official** that read cheaper
than the book. It skips `team_play_and_culture.md` and `mental_game.md`, which were already repaired. Line numbers come
from the **working tree** on 29 September 2026. `rules_primer.md` was modified and uncommitted at the time, and another
agent may have been editing it. **Re-locate every row by its text.**

## What the books say (re-verified in `sources/*.txt` this session)

| Book | Obscene gesture | Spitting at an official |
|---|---|---|
| NHL 2025-26 | **75.5(ii)** — game misconducts *"shall be assessed"* for *"Any player who uses obscene gestures on the ice or anywhere in the rink before, during or after the game"*. ⚠️ The book **also** has minors for the same words: 75.2(i) for *"obscene, profane or abusive language or gestures directed at any person"*, and 39.2(ii) for the same directed at an official. So a claim of *"a minor"* for a gesture is not baseless, but it is only half of the book's answer. | **40.1** game misconduct for a player who *"physically demeans"* an official. **40.3**: *"spits on an official"* → a suspension of at least 10 games. **40.4**: *"spitting at or in the general direction of an official"* → at least 3 games. |
| PWHL 2025-26 | **77.5(ii)**, same wording as the NHL, mandatory. It also has the 77.2 minor for *"language or gestures directed at any person"*. | 40.1 game misconduct (same wording as the NHL). 40.3 *"spits on"* → at least 4 games. 40.4 *"spitting at"* → at least 1 game. |
| IIHF 2026/27 **and** 2025/26 v1.1 (`iihf_rules.txt`), identical | **75.2(I)** gives a minor and then *"An additional game misconduct penalty for use of obscene gestures"*, pointing to **75.5(II)**, where game misconducts *"shall be assessed"*. At an official: 39.2(I) Note plus **39.5(VIII)**. | **39.5(VIII)** game misconduct for a player who *"spits … at an Official"*. 40.3 and 40.4 add supplementary-discipline categories. (Spitting at an **opponent** is **75.5(VI)**, a mandatory game misconduct; 23.8(III) calls it only *"can also result in"*. The IIHF contradicts itself on this.) |
| USA Hockey 2025-29 | **601(d)(2)**: a game misconduct *"shall be assessed"* for a player who *"[u]ses an obscene gesture anywhere in the rink before, during or after the game."* | **601(e)(2)**: a **match penalty** for conduct *"critically detrimental to the conducting of the game, including but not limited to spitting at an opponent, spectator, game or team official"*. |
| Hockey Canada 2026-28 | **No "obscene gesture" limb.** `obscene` scores 0, even after flattening. Its nearest rule is **11.2 Abusive Behaviour**: (d) a misconduct for a player, (e)(i) a game misconduct if they persist, and (f) a gross misconduct for *"verbal or physical taunts or gestures that cause harm to the reputation of the game"*. | **11.3(c)**: a **match penalty** for a player who *"deliberately spits on or at any individual"*. (a), (b), (d) and (e) forbid any lesser tier. |
| CARHA 2020 | **46(b)(1)**: a **misconduct** for a player who *"uses obscene, profane or abusive language or gestures to any person"*, then a game misconduct if they persist. This is the one book here where a plain misconduct is the book's answer. | **Rule 81**: a **match penalty** for a player who *"deliberately spits on or at an opponent, official, Team Official, or spectator"*. |
| EIHL Casebook, IHUK In-House 2026-27 | Nothing (0 hits). | Nothing (0 hits). |

So the premises in the brief hold. One addition: the NHL and PWHL also write a *minor* for a gesture directed at a
person. The mandatory game misconduct still applies to any obscene gesture. The precise statement is "a minor **and** a
game misconduct" (explicit in the IIHF, implicit in the NHL and PWHL), never "a minor".

## Hits outside the two excluded files

The sweep was flattened and covered these patterns: `obscen`, `gestur`, `spit`, `spat`, `hand.signal`, `taunt`,
`middle finger`, `the finger`, `throat.slash`, `choke sign`, `hand sign`, `salute`, `vulgar`, `flip … off`, `the bird`,
`sarcastic`, `applau`, `clapp`, `mock … official`, `abusive language`, `unsportsmanlike`, and the rule numbers `75.5`,
`39.5`, `601(d)`, `601(e)`, `11.3`, `46(b)`.

| file:line | layer | text | permissive? |
|---|---|---|---|
| foundation/rules_primer.md:482 | body (Other infractions list item) | *"**Unsportsmanlike conduct** (Rule 75) — obscene or abusive language or gestures **directed at any person**, … Escalates: minor, then misconduct, then game misconduct if you persist — ⚠️ though 75.4(v) and 75.5(vi) preface that ladder with 'In general', and both subrules carry limbs that start at a misconduct or a game misconduct with nothing below them … (the un-gated limbs are listed under [Talking to officials])"* | **YES, mild, by omission.** The unit names the obscene gesture and prices it on the minor ladder. It says some limbs start at a game misconduct but does not say the gesture is one of them, and 75.5(ii) makes it one. The correction is a **pointer** to another section (see CLAUDE.md, *"a pointer is not a correction"*). The next paragraph (:484) and :906 do state 75.5(ii), so the document as a whole is right. The reachability for a listener in the same chunk was **not** measured. |
| foundation/rules_primer.md:484 | body | *"Its own mandatory game misconduct at 75.5(ii) is for 'obscene gestures' alone"*; IIHF 75.2(I) + 75.5(II), *"So it is a minor **and** an ejection"* | No. Correct. |
| foundation/rules_primer.md:906 | body (Talking to officials) | *"a **game misconduct on the first offence** for obscene gestures anywhere in the rink (75.5(ii))"* | No. Correct. |
| foundation/rules_primer.md:1025 | Common Mistakes | *"Not once it is a **racial slur, a taunt or a sexual remark** — that is an ejection in every book read here"* | No. This is **harsher** than USA Hockey for a plain taunt: 601(a)(2), *"Taunts or incites an opponent"*, is a minor. It concerns the discriminatory limb, not gestures. Accepted, noted only. |
| foundation/rules_primer.md:441 | body | a *"'butt-end' gesture"* (USA Hockey 606(a)) | Not in scope. It is a stick foul, and harsher. |
| foundation/rules_primer.md:435 | body | the hooking **signal** (NHL 29.18) | Not in scope. |
| technique/body_contact_and_battles.md:1726, :1735 | facts, body | Hockey Canada 10.6(d), the chinstrap *"gesture"* | Not in scope. It is a fight incitement, priced correctly as a misconduct. |
| technique/body_contact_and_battles.md:1761 | body | EIHL Casebook, *"prices a gesture at four minutes"* (a faked head-butt) | Not in scope. It is not an obscene gesture. |
| systems/offensive_zone_play.md:1189 | Sources trailer (not voiced) | *"Rule 81 Spitting takes the identical shape at a match penalty"* | No. Correct (CARHA 81). |
| on_ice_communication.md:364, :377, :514; equipment.md:484; puck_handling.md:343, :355; practice_and_development.md:696; scanning_and_anticipation.md:387 | — | team hand signals, a finger-width measure, the author surname "Spittle", a puck "flip off the glass" | False hits. |

**Spitting at an official: no claim anywhere outside the two excluded files.** The only other spitting text is the CARHA
Rule 81 trailer mention above, and it is correct.

## Dispatch

One row only: **`rules_primer.md:482`**. Brief it as a claim, not a line: *"an obscene gesture is priced on the
minor → misconduct → game-misconduct ladder"*, wherever it appears in that document and in every layer. Suggested
repair (a sketch): inside that bullet, name the gesture as one of the limbs that start at a game misconduct, citing
NHL 75.5(ii). Check the chunk distance to :484 before deciding whether that is needed.

## What this method could not have found

- A gesture claim with none of the swept words, such as "a rude sign to the bench" or "giving the ref a look".
- A cheaper claim written as a general ladder for "unsportsmanlike conduct" or "abuse of officials" that never names
  the gesture. A listener carries that ladder over to a gesture. The `unsportsmanlike` hits were read for gesture and
  spitting content only, not audited as ladders.
- Whether :482's pointer and :484's correction reach a listener in the same chunk. No render was run for
  `rules_primer`.
- Hockey Canada 11.1 (Unsportsmanlike Conduct) was checked for the word `gesture` (0 hits) but not read in full for a
  gesture-shaped act under other wording.
- The two excluded files were not re-checked.

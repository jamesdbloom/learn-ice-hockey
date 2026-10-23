# SG51: breakouts over-the-glass ladder, second pilot, and scope (23 October 2026)

## What changed (`content/systems/breakouts.md`)

- **:933, ladder pilot 2 (first-round text; see the second round below for the goalie clause):** the restated over-the-glass/delay-of-game ladder is cut to the instruction plus both scoped tiers and a pointer: "A puck shot directly out of play from your own zone is a delay-of-game minor under the NHL, IIHF and PWHL whether you meant it or not, and a deliberate one is a minor from anywhere on the ice in every book (section 3 has the rules)". The citation lists remain in full in §3.
- **Kept in full:** §1 :125 (the only carrier in its chunk) and §3 :555-561 (the home).
- **:908 (power-play facts) and :921 (body):** "over is a minor", which had no scope, now says "over from your own zone is a minor in the NHL, IIHF and PWHL, and a deliberate one is a minor in every book". Unscoped, it overstated USA Hockey, Hockey Canada and CARHA, where an accidental skater clear is not a minor.
- **Net words:** about −1. The ladder approach is now recorded in the plan as exhausted on this page.

## Second round (after the commit gate blocked on C6)

- **The gate's finding:** the skater-only "deliberate in every book" wording, voiced alone at :908, could tell a Hockey Canada or CARHA goalie that an accidental stick clear is free. HC 10.1(v) and CARHA 55(a) price it with no intent word.
- **:908 (facts, 195/200):** now "for a skater, over from your own zone is a minor in the NHL, IIHF and PWHL, a deliberate one in every book".
- **:921 and :933:** now carry "(in Hockey Canada and CARHA a goalie's stick clear straight out is a minor whatever the intent)". The safety-reviewer then found that a "for a skater" scope on their NHL/IIHF/PWHL limb wrongly implied those goalies are exempt: 63.2(iii) says "any player", and IIHF :932-933 defines Player to include goalkeepers. So "for a skater" was removed from :921 and :933, applied verbatim from the reviewer's recommendation.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules | rules-verifier | **VERIFIED.** Accidental case: NHL 63.2(iii), IIHF 63.2(III) (both editions) and PWHL 65.2(iii) only; USAH 610(c)/631(d), HC 10.1(ii) and CARHA 75(b) are deliberate-only for skaters. Deliberate case: a minor in all six books, "from anywhere on the ice" in NHL/IIHF/PWHL, with no zone limit in the others. British books: no amendment to 63.2 (EIHL Casebook covers only 63.5; In-House 2026-27 none; RoCs none). "Ends your advantage" correct. Noted gap: HC 10.1(v) and CARHA 55(a) penalise a goalie's stick clear without the intent word, but these lines address skaters and §3 (:530, :561) carries the goalie limb. Safety: no act made cheaper; all minors. |
| Safety | safety-reviewer | CLEAR: :908 is acceptable voiced alone (no permissive claim about goalies; the HC/CARHA goalie limb does not fit the cap). Verified NHL 63.2(ii)/(iii), IIHF 63.2(II)/(III) plus the "Player" definition, PWHL 65.2, USAH 610(c)/631(d) (no goalie-specific rule; swept), HC 10.1(ii)/(v) and Interpretation 5, CARHA 75(b)/55(a). One minor (the false skater narrowing at :921/:933) fixed as above. KT10, KT2 and Key focus :18 CLEAR. Open: :561 "Goalies are not exempt" names only HC/CARHA (plan row). |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_secrets, check_counts and check_links all exit 0. check_marker_pairs: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the rules-verifier |
| D4–D5 citations | Checked: the citations kept in §3 |
| D6 negative existence | Checked: no British amendment to 63.2 |
| D7, D8, D13 | Out of scope |
| D9 summary layer | Checked: KT11 "in some books even by accident" is already scoped |
| D10 facts | Checked: :908 at 195/200 reads correctly voiced alone |
| D11 safety | Checked by the safety-reviewer (second round) and the rules-verifier |
| D12 read-aloud | Checked: rendered chunks 055–057 |
| D14 structure | Checked: check_links |
| D15 rendered site | Build passes |

## What this method could not have found

- The same act priced under another rule name.
- British league by-laws not on disk.

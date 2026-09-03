# Game Management

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline. **Playing in Britain? The IIHF
> flags are yours** — every level of UK hockey runs the IIHF book, amended locally; see
> [UK and England Rules](../foundation/uk_rules.md). Read **Overtime** and **Shootouts** below before
> you rely on anything in them: those are the sections where the British position differs most, and
> outside NIHL and some SNL fixtures the In-House Rules leave no overtime at all — across England, Wales,
> Scotland and Northern Ireland under the 2026-27 edition.
>
> **Related:** [UK and England Rules](../foundation/uk_rules.md) · [Risk Management](../hockey-iq/risk_management.md) · [Special Teams](special_teams.md) · [Neutral Zone Systems](neutral_zone_systems.md) · [Defending the Rush](defending_the_rush.md) · [Faceoffs](faceoffs.md) · [Mental Game](../off-the-ice/mental_game.md) · [How To Watch Hockey](../off-the-ice/how_to_watch_hockey.md)

## Overview

**Game management** is the layer above systems: how the score and the clock change the risk you take, the speed you play at and the decisions you make. A 2-1 lead with four minutes left is a different sport from a 2-1 lead in the first period. Everything here that is not explicitly a rule is a **coaching choice** — your team may want something different.

**Trailing teams shoot more and leading teams shoot less.** It is one of the best-established findings in hockey, it grows as the deficit and the clock grow, and it distorts every raw statistic you will ever look at.

**Protecting a lead is an active job — passive is not the same as safe.** Manage the puck rather than the clock: no passes across the middle of your own end, no long passes you are unsure of, and a short flip of the puck past a chaser and out beats forcing a play under pressure. Deny the middle, shorten your shifts, win the faceoffs in your own end.

**The bad change is among the most expensive routine mistakes in hockey — coaching consensus, not a measured ranking.** It concedes three things at once: a numbers disadvantage, a hole where the departing player's job was, and a teammate joining the play blind. So do not change while the puck is in your own end and your team does not have it, and do not change while you are the last player back. And once your own team has been called for icing — shooting the puck the length of the ice — you may not change under either the NHL or the IIHF book, subject to three narrow exceptions: putting back a goalkeeper who had been pulled for an extra attacker, replacing an injured player, and a penalty that changes on-ice strength (**NHL Rule 82.1**; **IIHF Rule 81.4** carries the same bar and adds a fourth exception for a player with a broken skate — though the IIHF's own 82.1 covers icing too and does not list that fourth one, so treat it as unsettled rather than as a way off the ice: attempt the change, be refused, and the players are sent back to the bench with a warning — and a bench that has already had one takes a bench minor for delay of game, IIHF Rule 82.2(V)). USA Hockey imposes no such restriction, and Hockey Canada imposes it only *"[i]n categories of U18AAA, Junior, and at the option of the Member in Senior"* (Rule 6.7(d)) — and even there it leaves you the time-out.

**When the referee's arm goes up for a delayed penalty, an extra attacker is free.** Play continues until the offending team gains control of the puck, and until then they cannot score — the sole exception being that you put it into your own net yourself (NHL Rule 78.5(xi)), so no blind passes across the front of your own goal. Many recreational leagues do not allow or practise pulling the goalie for this, and some officials stop play early, so agree it beforehand.

---

## Score Effects: How the Score Changes the Game

### The finding

This is one of the oldest and best-established results in hockey analytics: **teams that are trailing take more shots, and teams that are leading take fewer.** The effect is large, it is consistent, and it grows as the deficit grows and as the clock runs down.

Analysts noticed this early enough that it reshaped how hockey statistics are calculated. Shot-attempt measures — **Corsi** (all shot attempts for and against, including blocks and misses) and **Fenwick** (the same, minus blocked shots) — turned out to be badly distorted by score. The first fix was to throw away the distorted parts: **Corsi Tied** counts only attempts while the game is level, and **Corsi Close** only while the score is within one goal. In 2011 it was found that a team's shot differential *in a tied game state* predicted their future wins better than their actual points in the standings did.

Corsi Close was later criticised for throwing away too much data, and the modern approach is **score adjustment** — weighting each shot attempt according to the score situation it happened in, so an attempt at 3-0 down in the third period counts for less than an attempt at 1-1 in the first.

### Why leading teams retreat

There are honest reasons, and they matter:

- **A goal against costs a leading team more than a goal for gains them.** Going 2-1 up from 1-1 is worth less than going 1-1 from 2-1 down is worth to the opponent. Asymmetric stakes justify asymmetric risk.
- **Time is on your side.** If the clock runs out with the score unchanged, you win. The trailing team has to force the issue; you don't.
- **The trailing team over-commits.** When the other team pushes defencemen up into the rush and cheats for offence, the counter-attack is available. Defending deeper and countering is a legitimate way to *score*, not just to survive.
- **The trailing team pulls its goalie.** Late, a lead turns into an empty-net opportunity — a shot at an unguarded goal, which needs no ranking to be obviously the best look available.

So a leading team conceding shot attempts is not automatically playing badly. It is often trading *volume* of shots against for *quality* of shots against — more point shots from distance, fewer chances from the slot.

### Why it's often overdone

```facts
Key: The trade only works if you are actually trading volume of shots against for quality of shots against
Risk: You never get the puck back, so you never change, so your legs go — fatigue in your own zone is how one-goal leads die
Risk: Your defencemen play the whole shift below the hash marks — no exits, no relief, eventually a bad clear
Risk: Collapsing everyone to the net front concedes screens, rebounds and scrambles — the highest-danger chances there are
Risk: Four minutes of defending without the puck produces stick fouls, and a power play against is what a trailing team wants
```

The trade only works if you are actually trading volume for quality. Amateur and even professional teams routinely cross the line into pure retreat, and then:

- **You never get the puck back.** The other team keeps possession in your end, which means you never change, which means your legs go. Fatigue in your own zone is how one-goal leads die.
- **Your defencemen play the whole shift below the hash marks.** No exits, no relief, and eventually a bad clear.
- **Quality goes up, not down.** A team that collapses everyone to the net front concedes screened shots, rebounds and net-front scrambles — the highest-danger chances there are. "Fewer chances" is a claim you have to earn with structure, not just by standing near your own goal.
- **You invite penalties.** Defending for four straight minutes without the puck produces stick fouls. A power play against is exactly what a trailing team wants.

**⚠️ Treat the attack-type argument with real suspicion — it is dressed as research it cannot name.** The claim is that "analysis of shot quality by attack type has found" that cycle attacks produce better shot quality for trailing teams while rush attacks produce better results for leading teams, and that the pattern reverses with the game state. **No study, dataset or author has been traced for it here**, and none of the sources this document draws on carry it. It stands here only as **an untraced assertion, not evidence** — do not restate it as a finding, and do not build a plan on it. The rest of this section stands on its own reasoning without it, and the practical conclusion it is usually used to support — that when you are ahead your best offence is the counter-attack off a turnover, which requires you to be organised and *fast* rather than passive — is coaching craft either way.

### What this means for reading statistics

If you look at a box score or a shot chart without knowing the score situation, you will systematically:

- **Overrate trailing teams.** They out-attempt everyone. Being outshot 40-22 while winning 4-1 tells you very little.
- **Underrate leading teams and the players who protect leads.** Defencemen and checking forwards who play the last ten minutes of one-goal games will look worse than they are.
- **Misjudge goaltenders.** A goalie facing lots of low-danger third-period shots from a team chasing the game will have a flattering save percentage; one facing fewer, better chances will not.

The fix when watching or analysing: **look at score-adjusted numbers, or at even-strength numbers with the game close.** See [How To Watch Hockey](../off-the-ice/how_to_watch_hockey.md).

---

## Protecting a Lead

### What actually works

```facts
Priority: With a lead the question is not "can I create a chance" but "can they get it back somewhere dangerous"
Never: Cross-ice passes through the middle, blind D-to-D across your own goalmouth, or stretch passes you are not sure about
Action: Chip the puck past the forechecker and out rather than forcing a breakout pass under pressure
Rule: Shooting the puck directly out of play from your own defending zone is a two-minute delay-of-game minor, with no pressure exception but three written carve-outs, under NHL Rule 63.2(iii) and IIHF Rule 63.2(III) alike — so it binds a British player too
Rule: The NHL penalises a puck put over the glass "behind" the players' bench (Rule 63.2(iii)); the IIHF's Rule 63.2(III) reaches glass "surrounding" the bench, which appears to include the side glass — so a British player has slightly less room, not more
Rule: USA Hockey writes no such minor for putting the puck out of play — Rule 610(c) penalises only a deliberate shoot-out, and 631(d) makes an accidental one a last-play faceoff
Rule: Hockey Canada penalises no skater for putting the puck out of play either — 10.1(ii) reaches only a deliberate shoot-out, from any zone; its direct, non-deliberate limb at 10.1(v) names the goaltender alone
Action: Take away the middle — concede the outside, keep your stick in the passing lane, defend with your feet
Action: Shorten your shifts to 30–35 seconds; fresh legs defend, tired legs reach
Priority: Win the defensive-zone draws, and have a plan for losing the draw as well as winning it
Convention: Which forecheck your team switches to with a lead — 2-1-2, 1-2-2 or 1-1-3 — is a system choice, so find out yours
```

**1. Manage the puck.** The biggest lever you have while protecting a lead. With a lead, the value of a possession is not "can I create a chance" but "can I make sure they don't get it back in a dangerous place." That means:

- No cross-ice passes through the middle of your own zone or the neutral zone. A turnover there becomes an **odd-man rush** — attackers outnumbering defenders coming back, a 2-on-1 or 3-on-2. Coaches and analysts treat these as the most dangerous chances in open play, and there **is** published tracking behind that — [Defending the Rush](defending_the_rush.md) covers it and carries both halves: Sportlogiq data covering every NHL game from 2017-18 to 2020-21 puts an ordinary shot at an **8.15% chance of becoming a goal** and says that once an attacking team has an extra skater that likelihood *"almost triples"*, while Tulsky and colleagues found odd-man rushes are **under 3% of all 5-on-5 zone entries** and worth 0.78 shots per entry against 0.57 for an ordinary carry-in. What that document declines to give is a *precise per-situation* percentage, because the underlying numbers sit in a graphic rather than in the article's text. Go there for the figures.
- No blind D-to-D passes across your own goalmouth.
- No stretch passes you're not sure about. An interception at your own blue line is worse than a chip out.

**2. Chip out, don't force out.** A **chip** — a short, deliberate flip or wall-play that puts the puck past a forechecker and out of the zone — beats an attempted breakout pass under pressure. You will lose possession, but you'll lose it 150 feet from your net, with your team facing the right way. Getting the puck out and getting a change is worth more than a coin-flip at a controlled exit. *(The "40%" break-even you will see quoted for this is arithmetic with nothing behind it — no published work sets a threshold for this decision the way Tulsky's does for zone entries. Use the direction, not a number.)*

> **Careful — this is where a good idea becomes a penalty.** Under **NHL Rule 63.2(iii)** a player who shoots or bats the puck **directly (non-deflected) out of the playing surface from his own defending zone** takes a two-minute minor for delay of game. There is no "I was under pressure" exception, but there are three written carve-outs: the clause applies *"except where there is no glass"*, and its NOTE adds that *"when the puck is shot into the players' bench, the penalty will not apply"* and that *"when the puck goes out of the playing area directly off a face-off, no penalty shall be assessed."* Over the glass **behind** the bench is still a penalty. Keep the puck down and off the glass-line, or make sure it deflects. (Most rec leagues either don't call this or apply it inconsistently — but never assume.)
>
> **🇬🇧 The IIHF writes the same provision, so this one is a British reader's rule and not a North American footnote — but not in the NHL's words, and where the two part the difference runs against you.** Its **Rule 63.2(III)** assesses the minor *"on any Player who shoots or bats (using their hand or stick) the puck directly (non-deflected) out of the playing surface from their defending zone, except where there is no protective glass"*, with the same determining factor and the same two Note carve-outs, and it is unchanged between the 2025/26 and 2026/27 editions. **Its bench clause is written a shade wider than the NHL's** — *"when the puck is shot over the protective glass **surrounding** the Players' bench, the penalty will be assessed"*, where the NHL says *"behind"* — so if anything a British player has slightly less room, not more. **The other two books do not write this limb at all:** USA Hockey **610(c)** reaches only a deliberate shoot-out, with **631(d)** sending an accidental one to a last-play faceoff, and **Hockey Canada 10.1(ii)** likewise reaches only a puck *"deliberately"* shot, batted or thrown out — but by *"a player"*, which its Glossary makes include a goaltender *"except where explicitly stated"*, and its **Rule 6.3(e)(i) Note 1** sends *"any player of either team"* to that limb. What names the goaltender alone is the direct, non-deliberate limb, **10.1(v)**. ⚠️ **And the bench is not a target.** The IIHF Situation Handbook — **Situation 63.24**, put in the same words in the 2025/26 (v1.1) and 2026/27 editions — puts a clear that goes **over** the glass and *lands* in the Players' Bench, and still calls the minor: *"the determining factor… is where the puck leaves the playing surface"*, judged on *"an imaginary plane that continues upwards to the roof from the top of the glass"*, with only a puck *"shot **directly** into the Players' Bench (where there is no glass)"* escaping. Its Foreword ranks it below the book — *"in case of any contradictions, the valid IIHF Rulebook is always the basis"*. [Risk Management](../hockey-iq/risk_management.md) carries all four in full.

**3. Take away the middle.** Concede the outside; deny the slot and the middle lane through the neutral zone. Practically: your stick lives in the passing lane, you defend with your feet rather than lunging, and you never chase a puck carrier to the wall and leave the middle open behind you.

**4. Short shifts.** 30–35 seconds instead of 50. Fresh legs defend; tired legs reach. A team that changes cleanly every 35 seconds late in a game is much harder to score on than a team of tired heroes.

**5. Win the defensive-zone draws.** Coaches treat a defensive-zone faceoff loss with three minutes left and a one-goal lead as the most dangerous single event in the game — coaching emphasis, not a counted one — because it hands the opposition immediate set-up possession in your end. Have your best faceoff man out there, have a clear plan for the loss as well as the win, and know your wall assignments. See [Faceoffs](faceoffs.md).

**6. Keep forechecking — just choose the *right* forecheck.** This is a system choice, not a rule of hockey. The default assumed here is a **2-1-2 forecheck** (two forwards pressuring in the offensive zone, one high, two defencemen at the line). Many teams switch with a lead to a **1-2-2** (one forechecker steers the puck to one side; two forwards hold the neutral-zone line) or a **1-1-3** (one chaser, one mid-ice support, three players across the neutral zone — commonly called a trap). Under a 1-2-2 or 1-1-3, your job as the first forward in is not to win the puck, it's to take away one side of the ice so your teammates can intercept the exit. **Find out which one your team goes to with a lead, and when.** Turning up as an aggressive F1 while the other four are trapping is how leads get thrown away.

> **F1 / F2 / F3 are roles, not people.** They are defined by order of arrival at the puck, not by whether you are a centre or a winger.

### What doesn't work

```facts
Risk: Sitting back entirely is a siege you will eventually lose — you need a way to get out and a way to counter
Never: Ice the puck repeatedly — it is the classic self-inflicted wound
Never: Play keep-away on the perimeter with no plan; the blue-line turnover becomes the rush you must not concede
Never: Play the clock instead of the puck — watching the scoreboard makes you late to loose pucks
Never: Chase the extra body-check; on a player who has already passed or shot it is a late hit as well as bad position, and no book caps a late hit at a minor
Rule: None of the four books caps a late hit at a minor — IIHF 56.5 and Hockey Canada 8.3(b) reach a major plus a game misconduct with nobody hurt, 8.3(e) making that game misconduct automatic and 8.3(c) a match above it; NHL 56.4 is a major on violence, its 56.5 game misconduct needing an injury
Rule: USA Hockey does not cap a late hit at a minor either — 640(g) is a major plus a game misconduct where the hit recklessly endangers and 640(h) a match, but both reach only acts under 640(b–f), so their reach in adult men's hockey is unstated; 602(a) is a match penalty tied to no named foul at all
Rule: USA Hockey's silence on whether 640(g) and 640(h) reach a late hit in adult men's hockey is not a free hit there — 640 Note 2 directs a roughing penalty with no classification exception; that 640(a) then carries the minor or double minor is a reading, since 640(a) names Note 1
```

- **Sitting back entirely.** Five players below the top of the circles for four minutes is not a system, it's a siege you will eventually lose. You need a way to *get out* and a way to *counter*.
- **Icing the puck repeatedly.** See below — this is the classic self-inflicted wound.
- **Playing keep-away in the offensive zone without a plan.** Pointless perimeter possession invites a turnover at the blue line and a rush the other way, which is the one thing you must not concede.
- **Playing the clock instead of the puck.** Watching the scoreboard makes you late to loose pucks. Play the puck; the clock takes care of itself.
- **Fighting for the extra body-check.** Finishing a hit that takes you out of position is a luxury you can't afford with a lead — and if the player has already passed or shot, it is also a late hit — and not a two-minute one at worst: under the IIHF book 56.5 reaches a major plus a game misconduct with nobody hurt — on two judgements rather than one, that the player *"recklessly endangers their opponent by an 'interference or a late-hit'"* **and** *"would not be sufficiently sanctioned by imposing a major penalty"* — and under USA Hockey **640(g)** is a major plus a game misconduct where the hit *"recklessly endangers an opponent"*, with **640(h)** a match. That is a worse outcome still. ⚠️ **Both of those reach only *"any actions falling under Rule 640(b, c, d, e or f)"*** — and 640(b), the late-hit minor, is the sub-section written *"(except Adult Male Classifications)"*, so whether they reach a late hit in adult men's hockey the book does not say. ⚠️ **That silence is not a free hit there.** **640 Note 2** carries no classification exception at all, directing that a roughing penalty *"should also be assessed to a player who… delivers an avoidable body check to an opponent after the whistle or who is no longer in control of the puck"* — so what the adult men's wording in 640(b) removes is one route to the minor, not the minor. *(That 640(a) then carries it is a reading rather than the book's words, since 640(a) names Note 1.)* **Rule 602(a) does not depend on the answer either**: a match penalty for a player who *"recklessly endangers or attempts to injure any opposing player"*, tied to no named foul at all. **And the other two books do not cap it either:** NHL **56.4** lets the Referee assess a major *"based on the degree of violence"* — it is 56.5, the game misconduct, that needs an injury — and Hockey Canada **8.3(b)** reaches a major and a game misconduct on *"the degree of violence of the impact"*, which **8.3(e)** makes automatic with any interference major. ⚠️ **Nor is Hockey Canada capped there** — **8.3(c)**: *"A Match penalty will be assessed to any player who attempts to injure or deliberately injures an opponent by interference."* So a match penalty sits above the major in two of the four books, not only in USA Hockey's. Set out in full under [What a late hit costs in each book](#what-a-late-hit-costs-in-each-book) below.

### The icing trap

```facts
Rule: Icing is sending the puck from your own side of the centre red line past the opposing goal line untouched (NHL Rule 81.1)
Rule: Under hybrid icing the linesperson judges who would reach the puck first, not who reaches the dot first (NHL Rule 81.1)
Rule: After your own icing you may make no player substitutions before the ensuing faceoff (NHL Rule 82.1)
Rule: The post-icing substitution bar has three narrow exceptions — a goalkeeper who had been pulled for an extra attacker, an injured player, or a penalty affecting on-ice strength (NHL Rule 82.1)
Rule: The IIHF's post-icing substitution bar is Rule 81.4, and its exceptions run one longer — you may also replace "a Player with a broken skate", which the NHL does not allow; but IIHF 82.1 expressly covers icing too and lists only the NHL's three, and the book does not say which governs
Rule: A refused change sends the substitutes back to the bench and warns the team through its coach; a bench already warned takes a bench minor for delay of game (IIHF 82.2(V)) — the NHL contradicts itself, 82.2(v) warning either team, its 82.3 penalising the visitors with no warning
Rule: No time-out is granted to the defensive team following an icing (NHL Rule 87.1) — USA Hockey attaches no icing condition to its one time-out (636(f))
Risk: Under the NHL and the IIHF, a defensive-zone draw, your five most tired players, and no way to rest them
Rule: Hockey Canada applies its "no-change on icing" rule only "[i]n categories of U18AAA, Junior, and at the option of the Member in Senior" (6.7(d), with 6.1(f)) — below those an icing costs you the faceoff and nothing else
Rule: And where Hockey Canada's bar does bind, 6.7(d)(iii) still permits the time-out that NHL and IIHF 87.1 refuse — either team may take it; the team that iced simply may not change during it
Action: Ask before the game — many rec and youth leagues use no-touch icing, and under USA Hockey there is no no-change rule to enforce
```

**Icing** is sending the puck from your own side of the centre red line all the way past the opposing goal line untouched. Under NHL **hybrid icing** (adopted 2013-14) the linesperson judges who would reach **the puck** first — not who reaches the dot first (Rule 81.1). The end-zone faceoff dot is the **deadline for that decision**: the call is made no later than the instant the first player's skate reaches it, and a race too close to call at that moment is icing.

Here is why icing with a lead is so costly. Under **NHL Rule 82.1**, a team in violation of Rule 81 (Icing) **shall not be permitted to make any player substitutions prior to the ensuing face-off.** And under **Rule 87.1**, **no time-out shall be granted to the defensive team following an icing.** So you have handed the opposition a faceoff in your end, against your five most tired players, with no way to rest them.

That combination — tired players, defensive-zone draw, no escape — is a goal waiting to happen, and the rules were deliberately written to make it so.

Three details worth knowing:

- **The exceptions to the no-change rule** are narrow: you may substitute to **replace a goalkeeper who had been pulled for an extra attacker**, to **replace an injured player**, or when a **penalty has been assessed that affects on-ice strength** (Rule 82.1). The on-ice personnel are determined **at the moment the puck leaves the offending player's stick**. **In the IIHF book — the British base rule set — the bar lives in Rule 81.4** and reads the same way, with the same three exceptions and the same "when the puck leaves the offending Player's stick" test, plus **one the NHL does not have: you may also substitute for *"a Player with a broken skate."*** ⚠️ **Do not plan a change around that fourth exception, because the IIHF's own book prints two different lists for an icing.** Its **82.1** bars substitutions for a team *"in violation of ➔ Rule 63.8 – Delaying the Game or ➔ Rule 81 – Icing"* — naming icing expressly, not merely covering it in general — and then lists only the NHL's three. So the broken-skate exception appears in **81.4**, the rule titled *Line Change on Icing*, and is absent from the other rule in the same book that governs the same stoppage. **The book does not say which of the two governs**, and neither does the 2026/27 edition, which prints both lists unchanged. The specific rule is the more natural fit, but that is a reading, not the IIHF's word for it. ⚠️ **And the attempt has a price if it is refused.** Send a player over the boards on that exception and, if the officials do not accept it, IIHF **82.2(V)** has the Referee *"send the Players who have attempted to change back to their Players' bench"* and then warn the team through its Coach that *"any subsequent violations during the rest of the game (including overtime), shall result in a bench minor penalty"* for delaying the game, announced as *"Delay of Game – Improper Line Change."* **That warning is one per team per game and it is not reserved for this offence** — the rule's three acts share it — so a bench that has already been warned takes the penalty straight away. **And dawdling on the way is separately punishable:** the **second** paragraph of IIHF **82.3** requires that *"Players must proceed directly to the location of the 'face-off'"* and assesses a bench minor, with no warning precondition of its own, for *"[a]ny attempts to delay the game by stalling or otherwise unnecessary actions by either team."* **That limb reaches not proceeding promptly, not disputing the call** — it is announced as *"Slow Proceeding to 'Face-off' Location (or Slow Proceeding to Players' bench)"* — and the **first** paragraph of the same rule, which is the IIHF's last-change provision, warns before it penalises. ⚠️ **Under the NHL there is no fourth exception to try in the first place — and on the attempt itself the NHL book does not agree with itself, in a way that turns on which bench you are sitting on.** Its 82.2(v) warns first and says *"either team"*, while the **first paragraph of its 82.3** reads *"[a]ny attempt by the **visiting team** to make a change after the Referee's signal shall result in the assessment of a bench minor penalty for delay of game"* — no warning at all, and for the visitors only. Neither rule says which of the two governs. ⚠️ **Do not carry that sentence across to the IIHF book, because the IIHF's 82.3 opens with a different provision altogether** — its last-change rule, which warns before it penalises.
- **Icing is waved off if your team is shorthanded** — with two exceptions. Killing a penalty you may normally ice it freely, but under Rule 81.6 a team shorthanded *"by reason of a major penalty"* that has *"neglected to ensure there is a player on the penalty bench to exit upon the expiry of the penalty"* keeps playing a man short and *"are not permitted to ice the puck. Icing will be called."* And **USA Hockey restricts the exemption by classification**, to *"(For all Youth 15-Only and above, Girls 16U and above, High School and Adult classifications only)"* (Rule 624(b)(1)) — below those levels a shorthanded team cannot ice the puck at all, so a kill built on length-of-the-ice clears just feeds the power play defensive-zone draws. [Special Teams](special_teams.md) covers this rule.
- **The whole trap is NHL-and-IIHF, and Hockey Canada is a third answer rather than a second.** USA Hockey attaches no substitution restriction to an icing at all (Rule 624). **Hockey Canada writes one, but only for some categories** — Rule **6.7(d)** applies the *"'no-change on icing' rule"* only *"[i]n categories of U18AAA, Junior, and at the option of the Member in Senior"*, with **6.1(f)** pointing at it in the same terms, and its exceptions and its "when the puck leaves the offending player's stick" test are the NHL's three word for word. **Below those categories an icing costs you the faceoff and nothing else.** ⚠️ **And even where it binds, Hockey Canada leaves you the rest that the NHL and the IIHF take away:** **6.7(d)(iii)** provides that *"[e]ither team is permitted to take their time-out ... following an icing, but during that time out, the team in violation of icing will not be permitted to make player substitutions."* So under that book you may buy the breather; you still may not change the five who have to take the draw.
- **Rec and youth leagues vary.** Many still use no-touch (automatic) icing, and plenty do not enforce the no-change rule at all. Ask before the game; it changes how hard you should work to get the puck over the red line.

---

## Playing From Behind

### Pressing without giving up odd-man rushes

```facts
Action: Move the puck north faster and arrive in numbers through the neutral zone before you park extra players deep
Options: Aggressive forecheck, then pinching defencemen, then activating a defenceman, then pulling the goalie — roughly that order of safety
Read: Trailing, you pinch on anything close; leading, you pinch only when you are certain
Risk: A pinch that misses is a 2-on-1 the other way, and a fourth attacker deep is a genuine odd-man risk
Never: Leave the last-man-back spot empty — if a defenceman goes, a forward replaces them high
Action: Say that swap out loud
```

Trailing, you must generate more. The trap is that the easiest way to generate more — sending everybody — is also the fastest way to concede and end the game.

What to add, in roughly this order of safety:

1. **Speed and support, not bodies.** Get the puck moving north faster and arrive in numbers *through* the neutral zone, rather than parking extra players deep. This costs you nothing defensively.
2. **Aggressive forecheck.** Switching from a 1-2-2 to a 2-1-2, or to a full-ice press with both defencemen pinching, creates turnovers in their end. (Avoid calling this a "2-2-1" — that's basketball terminology, not an established hockey forecheck name; see [Forechecking Systems](forechecking_systems.md).) Cost: **the second forward is now deep** rather than sitting in the middle band of the zone where a 1-2-2 puts them ([Forechecking Systems](forechecking_systems.md) has both shapes), so a clean exit against you is more dangerous — and if both defencemen are pinching in the full-ice press, so is a fourth body. **F3 stays high in both shapes**, which is the point of F3; a failed forecheck is far worse when F3 has drifted low ([Forechecking Systems](forechecking_systems.md)).
3. **Pinching defencemen.** A **pinch** is your defenceman stepping down from the *offensive* blue line to keep a puck in — different from a **step up**, which is challenging an opponent forward in the neutral zone. Pinching keeps possession alive; a pinch that misses is a 2-on-1 the other way. Trailing, you pinch on anything close. Leading, you pinch only when you are certain.
4. **Activating a defenceman into the rush or the low zone.** Now you have four attackers and one back. This is a genuine 2-on-1-against risk and should be deliberate, not accidental.
5. **Pulling the goalie.** The biggest risk of all — its own section below.

**The non-negotiable in all of this: someone is always the last man back.** If a defenceman goes, a forward replaces them high. That swap has to be spoken out loud. See [On-Ice Communication](../foundation/on_ice_communication.md).

### When to start taking risks

```facts
Priority: Scale risk to how much time is left against how many goals you need, not to how frustrated you feel
Action: Down one in the first or second period, play your normal game harder — no structural risk at all
Action: Down one early in the third, add forecheck pressure and pinch more, but keep the last man back honest
Action: Down two mid-third, activate defencemen and accept some rush chances against — trading one-for-one is no longer a loss
Action: Down three or more in the third, be extremely aggressive early rather than moderately aggressive late
```

Risk should scale with **how much time is left relative to how many goals you need**, not with how frustrated you feel. A rough ladder:

- **Down one, first or second period:** play your normal game harder. No structural risk at all. There is enormous time left, and a second goal against is what actually kills you.
- **Down one, early third:** add forecheck pressure and pinch more aggressively. Still keep the last man back honest.
- **Down two, mid-third:** activate defencemen; take chances at the offensive blue line; accept some rush chances against. You need two goals, so trading one-for-one is no longer a loss.
- **Down one or two, last few minutes:** goalie out (see below), all-in.
- **Down three or more, any time in the third:** the mathematics say be extremely aggressive early rather than moderately aggressive late — one of the clearest findings in the goalie-pull literature. A team down three with ten minutes left that plays "sensibly" is choosing to lose slowly.

### How to know it's time

```facts
Read: Lots of zone time and no slot chances means your entries are dying at the blue line — change how you enter, not how hard you skate
Read: Their goalie seeing everything means you need traffic and pucks to the net, not better shots
Read: Losing races out of your own end means you are too slow starting breakouts — simplify and go north earlier
Action: Decide your clock thresholds before the third period, so nobody has to decide in the moment
```

Signs it's time to change something, rather than keep doing the same thing harder:

- **You've had the puck and produced nothing.** Lots of zone time, no slot chances, means your entries are dying at the blue line. Change *how* you enter (see [Zone Entries](zone_entries.md)), not how hard you skate.
- **Their goalie is seeing everything.** No screens, no rebounds, no second chances. You need traffic and pucks to the net, not better shots.
- **You keep losing races out of your own end.** You're too slow starting breakouts; simplify and go north earlier.
- **The clock crosses a threshold.** Have thresholds decided *before* the third period — "if we're still down one at six minutes we go to the 2-1-2 and pinch everything" — so nobody has to decide in the moment.

---

## Pulling the Goalie

### When

The analytics consensus has moved much earlier than tradition, and it has been moving in that direction for fifty years. Every serious study says the same thing: **coaches pull too late.**

**What teams historically did.** Analysis of the 2007-08 NHL season found coaches typically pulled with **1:00 remaining when down one goal and 1:30 when down two** — and essentially never when shorthanded. Across 2003–2013 the league average pull time sat around **1.2–1.3 minutes remaining**, rising to about **1.9 minutes by 2019**. Another count puts the average at **1:13 in 2013-14 rising to 1:37 by March 2021** — real movement, but slow. Over seven recent seasons, average pull times moved by only about **30 seconds**.

**What the numbers support.** The evidence comes at it from several directions:

- **The 6-on-5 is genuinely powerful.** With the extra attacker, the pulling team scored a goal every **8.5 minutes**, against sample means of **28.6 (road) and 26.2 (home) minutes** for a single team at 5-on-5 with both goalies in — using 2007-08 data. (These are **per-team** rates: how long one side takes to score. The 4-on-4 and 5-on-5 figures quoted later under Special Situations are **combined** rates — how long until *either* team scores — which is why they look so much shorter. Don't compare the two sets directly.) Put differently, 6-on-5 generates goals at rates comparable to a power play.
- **The empty net is genuinely expensive.** Opponents score into the empty net at roughly **19 goals per 60 minutes**. This is a real cost, not a rounding error.
- **The trade is still worth it, and worth it earlier.** Simulation over 150 million games found that simply pulling whenever trailing with under three minutes left was worth about **one extra standings point over an 82-game season**, and a more aggressive policy about **1.5 points** (average points per season 83.7 → 84.7 → 85.2). One study of 2003–2019 pulls found the **highest success rate at a pull around the 3:00 mark, roughly 26% (±4%)** — although the same author cautions that data before about 3:45 is sparse and those estimates are uncertain.
- **A pulled goalie is the biggest lever there is.** A survival analysis of one-goal games (2014-15 to 2018-19) found the leading team was **3.275 times more likely to lose their lead** when the trailing team pulled its goalie.
- **You draw penalties.** In 652.4 minutes of pulled-goalie play in 2007-08, **44 penalties were called on the pulling team versus 84 on their opponents** — close to 1:2. Penalties came against the defending team every **7.4–7.9 minutes** at 6-on-5, versus every **12.2–13.3 minutes** at 5-on-5.

**And the honest limits.** Success rates are still low, and note what is being measured: the study counts **tying the game before regulation ended**, not winning it. Over seven seasons, pulling when down one **tied the game** roughly **15%** of the time; down two, about **1%**; down three, essentially never. Whatever happens in the overtime that follows is a separate coin-flip on top. And it can go very badly — in their inaugural season the Seattle Kraken allowed **26 empty-net goals while scoring five**.

**Practical takeaway for a player:** expect to go earlier than feels natural, expect to be out there down two with four or five minutes left, and know that the goalie is coming out on the next stoppage in your favour — not on the next whistle of any kind.

> **A coaching constraint that gets ignored.** As Seattle's Dave Hakstol put it: *"The earlier you pull, the stronger your second group has to be."* Pulling with five minutes left means three or four different units play 6-on-5. If your second group can't handle it, pulling early isn't free.

### The 6-on-5 structure

```facts
Position: Two at the points, two on the half-walls, one at the net front, one below the goal line or in the middle
Action: Get set up — a 6-on-5 that has to enter the zone repeatedly is wasting its advantage
Action: Put the puck to the net with a screen; the extra man is a body in front, not a sixth passer
Technique: One-touch it — the advantage only shows up if the puck moves faster than they can shift
Never: Let both point men pinch — someone must be able to stop a clear, because there is no net behind you
Action: Change with possession and change fast; changing while chasing the puck concedes an empty-netter
Never: Foul in your own end once your net is empty — every trade that was worth taking with a goalie behind you stops being worth taking without one
Rule: With the net empty those fouls are awarded goals, not power plays or penalty shots — NHL 25.1 and 57.4 for fouling a player with nobody between him and your empty net, NHL and IIHF 67.5 for covering a puck in your own crease; USA Hockey 614(b) conditions the crease one
Convention: Umbrella, overload or your normal power-play look at 6-on-5 is a team choice — learn yours in practice
```

The extra attacker is almost always a forward, and the sixth skater usually comes on for the goalie at a stoppage with an offensive-zone faceoff, or on the fly once you have possession in their end.

The most common shape takes a standard power-play look and adds a second body high: **two players at the points (the area just inside the blue line, not the line itself), two on the half-walls (level with the faceoff dots), one at the net front, and one below the goal line or in the middle of the zone**. The principles matter more than the diagram:

- **Get set up.** A 6-on-5 that has to enter the zone repeatedly is wasting its advantage. Win possession, gain the line, and get organised.
- **Puck to the net with a screen.** The extra man is most valuable as a body in front and a second-chance collector, not as a sixth passer.
- **One-touch it.** The defenders can only cover so much; the advantage only shows up if the puck moves faster than they can shift.
- **The point men do not both pinch.** Someone must be able to stop a clear. There is no net behind you.
- **Change with possession, and change fast.** A 6-on-5 shift is exhausting. If you change while chasing the puck you will concede an empty-netter.
- **⚠️ And remember what is behind you at the other end.** Your net is empty, so a foul the situation would normally justify back there stops being worth taking: with the goalie removed for an extra attacker, the NHL's **Reference Table 10** lists seven infractions that produce an **awarded goal** rather than a power play or a penalty shot, among them delaying the game (Rule 63), handling the puck (67) and tripping *"(fouling from behind – including hooking, holding, slashing, etc.)"* (57). Covering a loose puck in your own crease is the sharpest of them — an awarded goal under **NHL and IIHF 67.5** and **Hockey Canada 10.2(a)(vi)** on the bare fact of the substitution, and under **USA Hockey 614(b)** wherever the act *"has prevented an obvious and imminent goal"*. If a loose puck is in your crease, knock it straight down where you stand: that is free in all four books. See [When a penalty is worth taking](#when-a-penalty-is-worth-taking) and [Catching a loose puck in your own crease](#catching-a-loose-puck-in-your-own-crease).

> **The shape you use at 6-on-5 is a system choice.** Some teams run an **umbrella** (three players high) there, some **overload** four players onto one side, some just add a net-front body to their normal power-play look. Learn yours in practice, because there is no time to work it out in the game. See [Special Teams](special_teams.md).

![](diagram:six-on-five-shape)

### The 6-on-4

If you are trailing *and* on a power play, pulling the goalie creates a 6-on-4. This is a much bigger edge than most coaches use. In 2007-08, teams that pulled the goalie on a power play to make it 6-on-4 **scored every 5.5 minutes and allowed an empty-net goal every 4.8 minutes** — nearly as likely to score as to concede, but you *need* the goal and they don't. The clearest single recommendation from the goalie-pull research is that **teams trailing should pull much earlier on a power play than at 5-on-5.**

**⚠️ And do not assume the opposite applies when *you* take the penalty.** It is intuitive that a trailing team which has just been penalised should leave the goalie in until the kill is over — being down 5-on-4 with an empty net looks like a losing trade. **Beaudoin and Swartz's simulations find the reverse, at least late.** Their scenario C is exactly this case — trailing by one, 1:54 left, just penalised, 4-on-5 — and the best of the strategies tested is *"pull goalie until the score is tied"*, worth **0.0761** expected points against **0.0409** for current NHL practice (which keeps the goalie in while shorthanded) and **0.0351** for never pulling. They write that *"the two strategies that performed best are the ones that involve pulling the goalie even in shorthanded situations"*, and their best season-long strategy — *"an even more aggressive approach"*, worth **85.2 points over an 82-game season against 83.7 for current NHL practice** (their Table 8) — is the one that pulls the goaltender *"when shorthanded, even-strength and on power-plays with increasing time remaining and various goal deficits."*

**The caveat that makes this usable is time, not strength.** The same paper's scenarios with more clock left — down two with six minutes, down three with 12:22 — do not call for pulling while shorthanded. So the finding is **time-conditional**: late and down one, being shorthanded is not by itself a reason to keep the goalie in; earlier in a game it still is. This is a model of NHL scoring rates, not a rule, and no coach at rec level is running it — but if you are keeping the goalie in with under two minutes left because you are killing a penalty, the arithmetic does not support you.

### The delayed-penalty freebie

```facts
Rule: On a delayed penalty the referee raises an arm and play continues until the team to be penalised gains control of the puck (NHL Rule 15.1)
Rule: During a delayed penalty the offending team cannot score unless you shoot the puck into your own net (NHL Rule 78.5(xi))
Action: Goalie goes to the bench immediately at the first sign of the arm — every second is a free attacker
Action: The extra attacker jumps from the bench as the goalie arrives
Never: Blind D-to-D passes across your own crease during a delayed call
Action: Keep the puck away from the offending team; do not force a low-percentage shot that could be smothered
Risk: A shot that misses and rims to an opponent ends the sequence
```

This is the one time you get an extra attacker for free, and amateur teams waste it constantly.

Under **NHL Rule 15.1**, when a player on the team *not* in control of the puck commits a penalty, the referee **raises an arm and delays the call**; play continues until **the team to be penalized gains control of the puck**. So the moment the arm goes up, your goalie can skate to the bench and you play 6-on-5 with **no empty-net risk** — because the offending team cannot score.

The one exception is a genuine own goal: under **Rule 78.5(xi)**, during a delayed penalty the offending team cannot score **unless the non-offending team shoots the puck into their own net.** A deflection off an opponent doesn't count; your own defenceman ringing it off your own goalie does. So: no blind D-to-D passes across your own crease during a delayed call.

> **⚠️ "Delayed penalty" names two different things, and only one of them means
> pull the goalie.** What is described here is the signalled call under **Rule 15.1**
> — the referee's arm is up and play continues. The phrase is also used for the
> **delayed *clock*** under **Rule 26**: a third penalty assessed to a team already
> serving two, whose time waits rather than putting them three men short. **Nobody
> is about to be awarded anything and there is no free attacker.** Go on the
> referee's raised arm, not on the words. [Special Teams](special_teams.md) covers the
> distinction.

**What to do when the arm goes up:**
- **Goalie:** go, immediately, at the first sign. Every second is a free attacker.
- **Bench:** the extra attacker jumps as the goalie arrives.
- **On-ice players:** the whistle comes when *they* gain control — so keep the puck away from them, don't force a low-percentage shot that could be smothered, and above all don't turn it over. A shot that misses and rims to an opponent ends the sequence.

> **Rec-league note:** many recreational leagues do not allow, or do not practise, pulling the goalie on a delayed call, and some officials will stop play early. It also requires your goalie to be paying attention. Talk about it beforehand.

### Defending against 6-on-5

```facts
Never: Chase. Hold a tight shape in the slot instead, block lanes and let them have the perimeter — a box is two high and two low, a diamond a single apex against a player in the middle
Position: Sticks in lanes, feet in the house; clear bodies and take sticks away at the net front
Action: Treat every clear as a shot — get your head up and put it at the empty net when the lane is clean
Rule: You can be iced against a pulled goalie; six players against six is equal strength, not below it (NHL Rules 81.1, 81.3, 84.1)
Rule: After icing it against a pulled goalie the attacking team picks the dot (81.2), you cannot change but for the narrow exceptions (81.4) and you cannot take a time-out at all (87.1) — all three are NHL and IIHF only
Priority: Own-zone draws at 5-on-6 decide games — agree the plan before you line up
Never: Take a penalty; a 6-on-4 against is close to a goal
```

Your job as the leading team defending an empty net:

- **Do not chase.** Six attackers means someone is always open if you leave your area. Play a tight box or diamond in the slot, block lanes, and let them have the perimeter. (**Box** = two players high, two low. **Diamond** = a single apex — used when their structure has a player in the middle, the **bumper**, whom a box leaves unmarked.)
- **Sticks in lanes, feet in the house.** Coaches will tell you most 6-on-5 goals come from tips, screens and rebounds rather than clean point shots. **Two thirds of that is checkable, and the strong form does not hold up.** The NHL's public play-by-play feed records a shot type for every goal and timestamps every event, so tips, deflections and rebounds can all be counted — screens cannot. Across games 2024020001–2024020400 of the 2024-25 regular season, **29.7% of goals scored with the extra attacker on were a tip, a deflection, or a shot inside three seconds of a previous shot on goal**, against **23.4%** at 5-on-5. That is a real elevation and it points where the coaches point, but it is a long way from "most" — and the 6-on-5 sample is only **74 goals**, so read the gap as a direction rather than a rate. What is separately sourced is that the ice in front of the net converts several times better than the perimeter ([Shooting](../technique/shooting.md)). Clear bodies and take away sticks at the net front.
- **Every clear is a shot.** Do not just chip it out. Get your head up and put it toward the empty net if the lane is clean. **A puck that goes in is a goal and there is no icing; a puck that misses and crosses the goal line is icing** (see the next point), so this is a shot to take when you can actually hit the net, not a blind heave. A blind clear that goes straight to their point man is the worst outcome of the three.
- **⚠️ You *can* be iced against a pulled goalie, and it is one of the worst things you can do to yourself.** It is tempting to reason that Rule 81.6's first paragraph is general — *"If the puck was so shot by a player of a side below the numerical strength of the opposing team, play shall continue and the icing violation shall not be called"* — and that five skaters against six are therefore below numerical strength. **The rulebook does not support that reading, on three counts.** (1) Rule 81.1 glosses the term where it defines it: icing applies to a team *"equal or superior in numerical strength **(power-play)** to the opposing team"* — the parenthetical ties the concept to penalty situations, and every other paragraph of 81.6 is about a penalty expiring or a penalty bench. (2) Rule 84.1 does not measure numerical strength in skaters alone; it sets three-on-three overtime at *"a numerical strength of three (3) skaters **and one (1) goalkeeper**"* — the goalkeeper is counted *inside* the figure, so six players against six is equal strength. (3) Rule 81.3 settles it in terms: where a goalkeeper *"is legitimately out of the crease in an attempt to go to the players' bench to be substituted for an extra attacker and in no way makes an attempt to play the puck, the icing **should not be nullified** under this section."* The rulebook is expressly contemplating an icing being called while the other team pulls its goalie, and preserving the call. **So the whistle comes.** You get a defensive-zone draw, **the attacking team picks the dot** (Rule 81.2), you **cannot change** but for the narrow exceptions above (Rule 81.4) and you **cannot take a timeout** at all (Rule 87.1) — five exhausted skaters, in their own end, against six, with no way out. Get it out with a purpose, or put it on net. See [Special Teams](special_teams.md) for the shorthanded exemption, which is a different situation.
- **Faceoffs are everything.** Draws in your own end at 5-on-6 decide games. Have the plan agreed before you line up.
- **Take no penalties.** A 6-on-4 against is close to a goal.

---

## Line Matching and Last Change

### The rule

```facts
Rule: After a stoppage the visiting team places its line-up on the ice first, then the home team may substitute (NHL Rule 82.1)
Rule: The referee allows the visitors up to five seconds and the home team up to eight, then no more changes (NHL Rule 82.2)
Rule: Only the team that iced the puck is frozen — if the visitors ice it, the home team changes normally and keeps last change (NHL Rules 82.1, 81.4)
Rule: The IIHF writes last change into Rule 82.3 instead, with a penalty the NHL's 82.1 does not carry — failure, tardiness or "deliberate error in complying" is a warning first, then a bench minor
Rule: Both books also require players to "proceed directly" to the faceoff, with a bench minor and no warning first for stalling — announced as "Slow Proceeding to Face-off Location" (NHL and IIHF 82.3)
Key: Last change is the main mechanical component of home-ice advantage, but travel, rest and rink familiarity are in there too
Action: In a rec league, treat matching as something you do on the fly — many run no formal change procedure at all
```

Under **NHL Rule 82.1**, following a stoppage the **visiting team places its line-up on the ice first**, and only then may the home team make any substitution it wants. **Rule 82.2** sets the clock: the referee gives the visiting team **up to five seconds**, raises his hand to close visitor changes, gives the home team **up to eight seconds**, then lowers his hand. After that, no more changes until play resumes.

**Icing is where this is often misread.** The first paragraph of Rule 82.1 reads in full: *"The home team may then make any desired substitution, except in cases following an icing, which does not result in the delay of the game."* Quoted short — stopping at "following an icing" — that looks like it might switch last change off after *any* icing, whoever committed it. It does not. Later in the same rule the exception is spelled out: **a team in violation of Rule 63.8 (Delaying the Game) or Rule 81 (Icing)** *"shall not be permitted to make any player substitutions prior to the ensuing face-off"* — and Rule 81.4 repeats it word for word. The bar falls on **the team that iced the puck**. So if the home team ices it, the home team is frozen and has no last change to exercise; if the **visitors** ice it, the home team changes normally and keeps last change. Full treatment in [Faceoffs](faceoffs.md).

**🇬🇧 The IIHF puts last change in a different rule, and attaches a penalty to it.** Where the NHL states the entitlement in 82.1 and leaves enforcement to 82.2's clock, the IIHF writes it into **Rule 82.3**: *"The home team is entitled to 'last change'. This means the visiting Coach must put their Players out on the ice first, after which time the home Coach must do so. If either team does not make its changes promptly, the Referee will not permit the change."* Then it prices it — *"Failure by either team to comply, or tardiness to comply, or deliberate error in complying with this rule will result first in a warning from the Referee and then a bench minor penalty shall be assessed for 'Delay of Game'."* **Warning first, then the penalty.** ⚠️ **The NHL's 82.3 opens with something else entirely, so do not read one book's 82.3 as the other's:** its first paragraph is *"[a]ny attempt by the **visiting team** to make a change after the Referee's signal shall result in the assessment of a bench minor penalty for delay of game"* — the visitors only, and no warning, where its own 82.2(v) warns *"either team"* first.

**The second paragraph of 82.3 is the one most likely to catch an ordinary player, and it is word for word in both books** (bar the IIHF's quotation marks): *"Players must proceed directly to the location of the face-off to participate in the ensuing face-off. Any attempts to delay the game by stalling or otherwise unnecessary actions by either team shall result in the assessment of a bench minor penalty for delaying the game."* The NHL announces it as *"Slow Proceeding to Face-off Location (or, Slow Proceeding to Players' Bench)"*, and neither book writes a warning into that paragraph. **It reaches dawdling, not disagreeing** — so go straight to the dot, or straight to the bench.

This is what "**last change**" means, and it is the main mechanical component of home-ice advantage. Across 2021-22 to 2023-24, NHL home teams earned a **.585 points percentage against .524 for road teams**. That is a gap of **6.1 percentage points**, or about **11.6%** more points at home in relative terms. (The source article describes it as a 5.5% boost; that figure does not follow from the two numbers it prints, so the arithmetic above is given instead.) Either way the effect is real but modest, and only part of it is the last change — travel, rest and rink familiarity are in there too.

> **Rec-league note:** many recreational and beer leagues do not enforce a formal line-change procedure at all, and the referee simply drops the puck. If you're a rec player, treat everything below as something you do *on the fly*, not at stoppages.

### What coaches do with it

```facts
Convention: The classic use is matching a checking line — picked for defensive reliability, forechecking and faceoffs — against a scoring line
Options: Shelter a young player with soft starts, get the trusted group out for late defensive-zone draws, or chase a favourable matchup
Risk: Last change can cost you the draw — coaches sometimes send out a worse faceoff man to win the matchup instead
Key: The road team's counter is the change on the fly, which is why change discipline matters more on the road than at home
```

The classic use is **matching a checking line against a scoring line**. A **checking line** (or shutdown line) is a forward line selected primarily for defensive reliability, forechecking and faceoffs rather than scoring. The coach with last change waits for the opponent's top line, then sends the checkers over the boards against them.

Coaches also use last change to:

- **Shelter players.** Give a young forward or a weak defence pair starts in the offensive zone against the opponent's fourth line.
- **Protect a lead.** Get the defensively trusted group out for every defensive-zone draw in the last five minutes.
- **Chase a matchup.** Get your best offensive line out against their weakest pair.
- **Manipulate the faceoff.** Last change can even cost you a draw — the Sound Of Hockey analysis cited below found that home teams won only **50.4% of 8,383 centre-ice faceoffs in 2023-24** — an externally published figure, not one of the faceoff computations made for this guide, which [Faceoffs](faceoffs.md) covers — partly because coaches sometimes send out a worse faceoff man in order to win the matchup instead.

**The road team's counter is the change on the fly.** Last change applies only at stoppages. On the road, coaches dictate matchups by timing changes during play — getting a line off as the opponent's top line comes on — which is why change discipline matters more on the road than at home.

### What you should do when you know you're being matched

```facts
Action: On a scoring line, change on the fly rather than at whistles — at a stoppage on the road you show your hand first
Never: Take the bait and beat your man one-on-one into traffic. Move the puck early instead and make them cover all five of you
Read: If three players are focused on you, two of your teammates are unmarked
Goal: A 0-0 shift with no penalties against a strong checking line is a win if your other lines are winning theirs
Priority: On the checking line, your first job is to not get scored on. Get the puck deep and change
Action: On the checking line, be first on faceoffs and first back; you were sent out for reliability, not creativity
```

If you're on a scoring line being checked:

- **Change on the fly, not at whistles.** At a stoppage on the road you have to show your hand first. In open play you don't. Get out during play, when the other team can't react cleanly.
- **Don't take the bait.** A good checking line wants you frustrated and beating your man one-on-one into traffic. Move the puck early, take the safe play, and make them cover all five of you.
- **Use their commitment.** If three players are focused on you, two of your teammates are unmarked. Score effects apply in miniature — an over-committed checker leaves space behind.
- **Win the shift, don't win the fight.** Grinding a strong checking line to a 0-0 shift with no penalties and no chances against is a *win* for you if your other lines are winning theirs.

If you're on the line doing the checking:

- **Your first job is to not get scored on.** A 0-0 shift is a success.
- **Get the puck deep and change.** Long shifts against a top line are how the goal happens.
- **Be first on faceoffs and first back.** You were sent out for reliability, not creativity.

---

## Defence Pair Logic

Almost everything in this section is a coaching choice; the point is to know why your coach might be doing it.

### Shutdown pair versus offensive pair

```facts
Convention: Most teams differentiate their three pairs by role rather than purely by quality
Priority: Shutdown pair — gap control, defending the rush, boxing out the net front, clean simple exits; not expected to produce points
Priority: Offensive or transition pair — join the rush, activate from the point, move pucks, higher risk tolerance
Convention: The third pair is usually sheltered, with offensive-zone starts and weaker opposition
Never: Assume "first pair" means the hardest job. Many teams use their second pair to shut down, so ask
```

Most teams differentiate their three pairs by role rather than purely by quality:

- **The shutdown pair** takes the hard matchups and the defensive-zone starts. Priorities: gap control, defending the rush, boxing out the net front, clean simple exits. Not expected to produce points.
- **The offensive (or transition) pair** gets favourable starts and matchups. Priorities: joining the rush, activating from the point, moving pucks. Higher risk tolerance.
- **The third pair** is usually sheltered — offensive-zone starts, weaker opposition.

Which pair does which varies. Many teams use their **second** pair as the shutdown pair, keeping the first pair free to play offence. Ask; don't assume that "first pair" means "hardest job."

### Left-shot / right-shot pairings

```facts
Key: On your on-hand side the outlet up the wall and the D-to-D are on your forehand, and your body shields the puck from the middle
Technique: Retrieving on your on-hand side lets you turn away from the forecheck; off-hand you turn into the boards or the checker
Read: At the left point a left shot's blade sits toward the boards — the gain is the puck arriving on your forehand, released in one motion
Convention: Power-play units deliberately put off-hand defencemen at the points, because the blade is out in the middle for the one-timer
Key: Defending the rush, on-hand suits sealing a carrier against the wall and off-hand suits taking away the seam — neither is simply better
Technique: On your off side, take your first touch into the middle, open your hips earlier on retrievals, and treat the backhand D-to-D as normal
```

A **left shot** holds the stick with the **left hand at the top of the shaft and the right hand lower**, so the blade sits on their **left** side and their **forehand is on their left**. That is what makes the left side of the ice their natural side. **On-hand** means playing on your natural side — a left shot on the left, a right shot on the right; **off-hand** means the opposite.

Coaches overwhelmingly try to build pairs of one left shot and one right shot. Why it matters:

- **Zone exits and breakouts.** On your on-hand side, the outlet pass up the wall and the D-to-D pass are on your forehand, and your body shields the puck from the middle. On your off-hand, that same pass is on your backhand or requires a turn into pressure.
- **Retrievals.** Skating back on your on-hand side lets you take the puck off the wall and turn away from the forecheck. Off-hand, you turn into the boards or into the checker.
- **Blue-line play in the offensive zone.** Be clear about the geometry here, because it is the opposite of what people assume: for a **left shot at the left point, the stick side *is* the boards side.** Your blade sits between you and the wall, not out toward the middle. The on-hand advantage at the point is therefore not about being off the wall — it is that the puck coming up the wall from the corner **arrives on your forehand**, so you can receive it and release it in one motion, and that a forehand release is much easier to **keep down and on the ice** where it can be tipped and rebounded. The off-hand point man gets the mirror image: the puck arrives on the backhand and needs a turn, but the blade is out in the middle of the ice, which is exactly why power-play units deliberately put **off-hand** defencemen at the points for the one-timer.
- **Angling and defending the rush.** The same geometry runs the other way here. Facing the attack on your on-hand side, your stick is on the **boards** side and your body is toward the middle; on your off-hand side, your stick sits naturally in the **middle** passing lane. Neither is simply better — on-hand suits sealing a carrier against the wall, off-hand suits taking away the seam — but know which one you have, because it decides whether you defend with your stick or with your feet.

There is real evidence behind the preference. One study of NHL shot-location data found **64.2% of shots occurred with opposite-handed (i.e. both on-hand) pairings** and **32.1% with two left shots**, and that opposite-handed pairs out-performed same-handed pairs — **50.71% versus 49.32% Corsi For** — with the gap narrowing as blocked and missed shots are excluded, which suggests the problem is generating clean offensive plays rather than defending.

Two honest caveats. The effect is real but small — around one percentage point. And roughly 60% of NHL defencemen shoot left — that league-wide handedness split is reported by NHL.com, **not** a finding of the puck++ shot-location studies cited above, so do not read it as part of the same analysis — so someone has to play their off side; some analysts argue teams have gone too far, playing weaker right shots ahead of better left shots to preserve handedness. If you are asked to play your off side, the adjustments are: **take your first touch into the middle rather than up the wall, open your hips earlier on retrievals, and accept the backhand D-to-D as a normal play rather than a last resort.**

### Zone starts

```facts
Key: Zone starts describe where your shifts begin, but published definitions divide by different things — one by every shift you took, another by your offensive and defensive draws alone
Action: Read the glossary of whichever site you are on before you read anything into a zone-start figure, and never compare a figure from one site against one from another
Risk: Heavy defensive-zone starts push your raw shot and goal differentials down however well you play — a real effect, but a modest one
Action: Check both players' zone starts, and that both came from the same site, before you compare their numbers
Mindset: A defensive-zone start means your coach trusts you — and the first ten seconds are the most dangerous of your shift
```

**Zone starts** describe where your shifts begin. Before you read anything into one, find out **what the percentage is divided by**, because published definitions do not agree and they are not close.

- **Evolving Hockey** treats a change on the fly as a kind of zone start. It sorts your shifts into four categories of zone start — offensive, neutral, defensive and on-the-fly — and its offensive-zone start percentage is the offensive-zone count over the total of all four, so the denominator is every shift you took. On that definition the figure really is a share of all your shifts — and since most shifts are changes on the fly, nobody's is large. The same table publishes a draws-only version separately, under a different name, dividing your offensive-zone faceoffs by your faceoffs in all three zones.
- **The formula quoted in general reference works** divides offensive-zone starts by offensive *plus defensive* zone starts alone, leaving out both neutral-zone draws and every shift that began on the fly. That denominator is a small fraction of a player's shifts, so the same player scores far higher under it.

So a player quoted at "60% zone starts" has not necessarily begun 60% of their shifts anywhere; it depends entirely on which of those you are reading. **Read the glossary of whichever site you are on, and never compare a figure from one site against a figure from another.** [How To Watch Hockey](../off-the-ice/how_to_watch_hockey.md) carries the measured share of shifts that begin on the fly, together with the limits on it.

Whichever definition you are reading, zone starts are a coaching lever and a statistical distortion in one:

- A player with heavy **defensive-zone starts** begins most of the shifts that start on a draw 200 feet from the other net, under pressure. That pushes their raw shot and goal differentials down however well they play — a real effect, but a modest one, because it reaches only the shifts that began on a draw at all.
- A player with heavy **offensive-zone starts** looks better than they are, by the same modest amount running the other way.

When you compare two players' numbers, check their zone starts first — and take both figures from the same site, so that you know they were counted the same way. And when you get a defensive-zone start, understand what it means: your coach trusts you, and the first ten seconds are the most dangerous of your shift.

---

## Shift Length and Change Discipline

### The rules you're working inside

```facts
Rule: You may change at any time during play, provided the player leaving is within five feet of the bench and out of the play (NHL Rule 74.1)
Rule: The five feet is the NHL's and, as 1.50 m, the IIHF's (both Rule 74.1). Hockey Canada 6.1(a) gives you 3.05 m (10 ft.), and USA Hockey 204(b) writes no distance at all — only "at the players' bench and out of the play"
Rule: If either player plays the puck, checks or makes contact while both are on the ice, it is too many men — a bench minor (NHL Rule 74.2)
Rule: The IIHF and USA Hockey set that trigger wider — contact or a played puck while "either" the arriving or the retiring player is on the ice, not both (IIHF 74.1; USA Hockey 204(b))
Rule: USA Hockey alone adds a third trigger — a bench minor where the change "causes their team to gain a competitive advantage" with no puck played and nobody hit (Rule 204(b); Casebook Rule 204 Situation 8 applies it to a 2-on-1 turned into a 2-on-2)
Rule: If the offending team scores before the whistle, the goal is disallowed and the penalty assessed (NHL Rule 74.2)
Never: Leave the ice anywhere but at the bench — under the NHL and IIHF any other exit is a bench minor regardless (both Rule 74.1); neither USA Hockey nor Hockey Canada writes that clause
```

**NHL Rule 74.1**: players may be changed at any time during play, provided the player **leaving the ice is within five feet of the bench and out of the play** before the change is made. If either the player coming on or the player going off **plays the puck, checks or makes physical contact** with an opponent while both are on the ice, it's **too many men** — a bench minor (Rule 74.2). And if the offending team scores before the whistle, **the goal is disallowed and the penalty assessed.**

**⚠️ Only the IIHF writes that same five feet, and it writes it in metric.** IIHF Rule 74.1 requires the player leaving to be *"within 1.50m of their Players' bench and out of the play"* — the same measurement. 🇬🇧 **But the trigger above it is wider in the IIHF's book than in the NHL's, and the difference decides cases.** The NHL calls too many men where a player plays the puck or makes contact *"while **both** players involved in the substitution are on the ice"*; the IIHF where it happens *"while **either** the Player entering the game or the retiring Player is actually on the ice"*, and it adds the means — *"plays the puck **with their stick, skates or hands**"*. **USA Hockey 204(b) is with the IIHF on this**, reaching the act *"while the retiring player is actually on the ice"*. **So under both of those books the player on the way off can give the penalty away on their own**, without the substitute ever stepping on. *(The IIHF does write one carve-out the NHL does not: a retiring player "who has one skate on the ice and one skate off the ice in the Players' bench is considered as 'off the ice'.")* ⚠️ **Do not carry that carve-out into a Hockey Canada game, because that book answers the same facts the other way.** Hockey Canada writes no trigger into its rule text — **10.7(a)** is a bare bench minor for *"Too Many Players"* — but its **Interpretation 2** to that rule takes a player with *"either one or both skates still on the bench"* who plays the puck, rules *"Assess a Bench Minor penalty"*, and then extends it: *"[i]n the case of the player leaving the ice who plays the puck on the ice with one or both skates on the bench, the same ruling would apply"*, and *"[t]his ruling would apply whether or not the team has the correct number of players on the ice."* **Its Interpretation 3 states the NHL's narrow test for the goaltender change instead** — a penalty *"[i]f either the goaltender coming off, or the player coming on the ice plays the puck **while the other one is still on the ice**"* — so the same book runs both tests and never says which governs a skater change. **The instruction that is safe under all four is the same one: be off before you touch anything.** **Hockey Canada Rule 6.1(a) gives you 3.05 m (10 ft.)**, twice as much, and **USA Hockey Rule 204(b) sets no distance whatever**, only that the retiring player *"shall always be at the players' bench and out of the play before any change is made."* ⚠️ **USA Hockey then adds a trigger no other book has**: a bench minor also follows where the change *"causes their team to gain a competitive advantage"*, with neither player playing the puck or making contact — its Casebook, Rule 204 Situation 8, applies that to a change that turns a 2-on-1 against into a 2-on-2. **So the shift-management calculation below is the NHL's and the IIHF's; if you play the American book, the change that rescues you numerically is the one most likely to be called.** [Rules Primer](../foundation/rules_primer.md) owns the rule.

The retiring player must leave **at the bench**, not through any other exit, or it's a bench minor regardless — **that clause is the NHL's and the IIHF's** (both Rule 74.1), and neither USA Hockey nor Hockey Canada writes it.

### How long a shift should be

```facts
Convention: 35–45 seconds for most players, 30–35 when protecting a lead or stuck in your own end — coaching prescription, not measurement
Read: The signal to change is a reduction in your ability to accelerate, not a stopwatch
Key: Gliding to a spot you would have skated to ten seconds earlier means you are already too tired to be useful
Action: Take the measured shift-length range and the physiology from Conditioning and Recovery, which covers them
```

Shifts in fast, high-level hockey are typically **under a minute**, and the reason usually given is physiology: hockey is repeated maximal effort, and effort quality declines well before you feel exhausted. **[Conditioning and Recovery](../off-the-ice/conditioning_and_recovery.md) covers both the physiology and the measured range** — take the figures from there rather than from here. A reasonable target for most players is **35–45 seconds**, shortened to **30–35 seconds** when protecting a lead or when the play is stuck in your own end; **those two bands are coaching prescription, not measurement** — the measured band is 30–80 seconds and the "well-managed" 30–45 s figure is itself coaching craft, as that document states.

The signal to change is not a stopwatch, it's a **reduction in your ability to accelerate**. The moment you find yourself gliding to a spot you would have skated to ten seconds earlier, you are already too tired to be useful.

### Tired players make bad decisions

```facts
Risk: Decision speed goes first — you see fewer options, later
Risk: Then your feet go: you stop skating and start reaching, which is how sticks end up around waists and hands
Risk: Then support goes, so a teammate loses a battle they should have won; backchecking goes last and costs most
Key: A 90-second shift is worth less in total than a 30-second one, and it costs your next shift too
Convention: Coaches put late-shift penalties down to fatigue — the mechanism is sound reasoning, but no published study in amateur hockey codes penalty motive against the preceding play
```

Fatigue does not just cost you a step. It costs you, in this order:

1. **Decision speed** — you see fewer options, later.
2. **Feet** — you stop skating and start reaching, which is how sticks end up around waists and hands. Coaches routinely put late-shift penalties down to fatigue; **that is a motive attribution, and no published study in amateur hockey codes penalty motive against the preceding play** — see *Frustration penalties* below, which sets out what the youth-hockey penalty data does and does not support. The mechanism (tired legs, reaching stick) is sound reasoning; the frequency claim is not measured.
3. **Support** — you stop arriving as the second man to the puck, so your teammate loses a battle they should have won.
4. **Backchecking** — the last thing to go, and the most expensive.

The practical consequence, as coaches put it: **a 90-second shift is not three times as valuable as a 30-second shift — it is worth less in total, and it costs your next shift too.** *(Nobody has measured the value of a shift as a function of its length, so read that as the shape of the argument rather than as a quantity. What is measured is the decline in repeated-sprint quality, which [Conditioning and Recovery](../off-the-ice/conditioning_and_recovery.md) covers.)*

### When NOT to change

```facts
Never: Change when the puck is in your defensive zone and your team does not have it
Never: Change while you are the last man back, until you are relieved. Say so out loud
Never: Change while the opposition is on a rush; finish the defensive play first
Rule: You cannot change after your own icing (NHL 82.1, IIHF 81.4), so do not start drifting toward the bench — USA Hockey Rule 624 imposes no such restriction
Rule: You may change after your own icing to put back a pulled goalkeeper, to replace an injured player, or when a penalty affects on-ice strength (NHL 82.1) — the IIHF adds a broken skate at 81.4, but not at its own 82.1, which covers icing too; do not plan a change around it
Rule: A change attempted after your own icing and refused sends those players back with a warning; a bench already warned takes a bench minor for delay of game (IIHF 82.2(V)); the NHL's 82.3 skips the warning, and only for the visiting team
Rule: A defender or goalkeeper who accidentally knocks their own net off loses the change the same way — no substitutions before the draw, which is in their own end at the dot the attacking team picks (NHL and IIHF Rule 63.8), with the same three exceptions as after an icing
Never: Change in the middle of a 6-on-5 possession. Change with the puck or not at all
Action: Change when your team has the puck heading north, has just dumped it in deep, or after a completed clear
```

This is the part that separates good game management from a good motor.

**Do not change when:**

- **The puck is in your defensive zone and not under your team's control.** Coaches name this as one of the biggest sources of goals against in amateur hockey — an observation rather than a measured ranking. Public tracking does break goals down by how they were produced, but it is NHL data, and it classifies them by the play the offence made rather than by the defensive breakdown that let them in. Changing while the opposition has the puck in your end means a player leaves, a player arrives late from the bench, and for two seconds you are 4-on-5 in the most dangerous area of the rink.
- **You are the last man back**, until you are relieved. Say so out loud.
- **The opposition is on a rush.** Finish the defensive play, then change.
- **You've just iced the puck.** You can't (NHL Rule 82.1; IIHF Rule 81.4), so don't start drifting toward the bench — the only ways off are the narrow exceptions set out under The icing trap above: a pulled goalkeeper going back in, an injured player, a penalty that changes on-ice strength, and under the IIHF a broken skate — though that fourth one is written into IIHF 81.4 and not into its 82.1, which covers icing as well, so do not plan a change around it. Try it and be refused and those players are sent back with a warning; a bench that has already had one takes a bench minor for delay of game (IIHF 82.2(V)).
- **You've just knocked your own net off.** **Icing is not the only way to lose the change.** Under **NHL and IIHF Rule 63.8**, a net *"displaced accidentally by a defending skater or goalkeeper"* — the IIHF writes *"a defending Player"*, which its Rule 5.1 defines as covering goalkeepers — means *"[t]he offending team shall not be permitted to make any player substitutions prior to the face-off"*, and the draw is in your own end at whichever dot **the attacking team** chooses. The exceptions are the same three as after an icing, and **Rule 87.1 takes the timeout away as well**. **The bar is written twice over**: **Rule 82.1** states it again, for *"[a] team that is in violation of Rule 63.8 – Delaying the Game or Rule 81 – Icing"* — the same sentence the icing bullet above turns on. **Hockey Canada writes the same consequence only in some categories** — Rule 6.1(g) reaches *"U18 AAA, Junior and at the option of the Member in Senior"*, exactly the scope of its no-change-on-icing rule — and **no counterpart to it was found in USA Hockey**, searched by rule number and by concept across its playing rules and its *Casebook*. [Rules Primer](../foundation/rules_primer.md) covers the rule in full.
- **You're in the middle of a 6-on-5 possession.** Change with the puck or not at all.
- **You'd be changing into an offensive-zone faceoff you're needed for**, if you're the faceoff man.

**Do change when:**

- **Your team has the puck heading north, or has just dumped it in deep.** These are the safe windows.
- **After a completed clear from your own end** — the classic "get it out, get off."
- **You're beaten and a fresh teammate can take over safely.**

### Why a bad change costs goals

```facts
Risk: A bad change concedes a numbers disadvantage, a structural hole and a player joining the play blind, all at once
Key: Few single actions in hockey concede as much for free as a bad change — coaching judgement, not a measured ranking
Key: The fix is discipline and communication, not fitness
Action: Call it — "I'm changing", "stay on", "last man"
```

A bad change concedes three things at once: a numbers disadvantage, a structural hole (the player leaving usually has a specific job nobody is doing), and a player joining the play with no idea where anybody is. Few single actions in hockey concede as much for free — coaching judgement, not a measured ranking.

The fix is discipline and communication, not fitness. **Call it**: "I'm changing," "stay on," "last man." See [On-Ice Communication](../foundation/on_ice_communication.md).

---

## Overtime

### Regular-season 3-on-3 (NHL)

```facts
Rule: Five minutes maximum, sudden death, three skaters and one goalkeeper a side, teams changing ends (NHL Rule 84.1)
Priority: Possession over shooting — if you do not have a high-quality look, you do not shoot
Technique: With no good option, carry or pass back out through the neutral zone, reset and come again
Never: Force a low-percentage shot — a missed net in 3-on-3 is often a goal against
Never: Change without possession; you never surrender the puck to get fresh legs
Read: The goal usually comes from isolating a defender who has been stuck out and cannot get off
Rule: A penalty makes it 4-on-3, coincidental minors leave it 3-on-3, and no team ever has fewer than three skaters (NHL Rule 84.3)
Rule: Lose with your goalie pulled in overtime and you forfeit the point you had already earned (NHL Rule 84.2)
```

**Rule 84.1**: five minutes maximum, sudden death, **three skaters and one goalkeeper** per side, teams change ends (they defend the same end as in the second period — the long change). Both points are secured before it starts: a tie after regulation guarantees each team one point.

The format arrived in 2015-16 to reduce shootouts and worked — the share of **games that reached overtime** and then went to a shootout fell from **over 55% to under 40%** in its first season. (That is a proportion of overtime games, not of all games; only around a quarter of NHL games go to overtime at all.)

**Strategy has changed a lot since then**, and this is the most important thing to know. Early 3-on-3 was chaos and end-to-end rushes. It is now **a possession game**. The core ideas, in coaches' and players' own words:

- **Possession over shooting.** "Overtime is all about puck possession and maintaining it at all costs." If you don't have a high-quality look, you don't shoot — because giving up the puck means facing a 3-on-2 the other way immediately.
- **The controlled regroup is the key skill.** With no good option in the offensive zone, you carry or pass the puck **back out through the neutral zone**, reset, and come again. Retreating 30–40 seconds without forcing anything is normal and correct. The whole ice is your working space; camping in the offensive zone doesn't work.
- **Never force a low-percentage shot.** A missed net in 3-on-3 is often a goal against. As one goalie put it, once you give up the puck you may not get it back. Turnovers, careless passes and shots that miss the net "invite quality scoring chances against you almost right away."
- **Only change with possession.** You never surrender the puck to get fresh legs.
- **The goal usually comes from a tired opponent.** The winning play is often not a great shot — it's isolating a defender who has been stuck out for 90 seconds and can't get off.
- **Use your goalie as an outlet.** With the extra space, a pass back to the goalie is a legitimate reset. See [Goaltender](../positions/goaltender.md).

**Penalties in 3-on-3 (Rule 84.3)** are unusual and worth knowing:
- A penalty makes it **4-on-3**, not 3-on-2 — the non-offending team *adds* a skater.
- **Coincidental minors at the same stoppage** (with nothing else on the clock) leave it at **3-on-3**.
- A two-man advantage is **5 against 3**.
- **No team ever has fewer than three skaters.**

**Pulling the goalie in overtime (Rule 84.2)** is possible but almost never sensible: if you lose while the goalie is out, **you forfeit the point you'd already earned** — unless the goalie was pulled for a delayed penalty. And once pulled in regular-season overtime, the goalie **must wait for a stoppage to return; he cannot change on the fly** (Rules 84.2 and 74.5), on pain of a bench minor. **Both of those riders are NHL-only** — IIHF 84.2 is a single permissive sentence, so if you play in Britain neither applies to you; see the rule-set note below.

One more detail: **in the last two minutes of regulation and at any time in overtime**, the five-second whistle forcing players to set up for a faceoff does not apply (Rule 82.2(viii)) — officials give teams reasonable time.

### Playoff overtime (NHL)

```facts
Rule: Fifteen-minute intermission, then full twenty-minute sudden-death periods at 5-on-5, changing ends, until someone scores (NHL Rule 84.5)
Action: Play simple and get pucks in behind their defence
Never: Be the one who makes the play that loses it
Action: Manage shifts ruthlessly — teams routinely shorten to the low 30s in double overtime
```

**Rule 84.5**: after a tie through regulation, a **fifteen-minute intermission**, then full **twenty-minute periods at 5-on-5**, sudden death, changing ends each period, repeating until someone scores. No 3-on-3, no shootout.

This is a completely different game-management problem: it's regulation hockey, played tired, with an infinite-cost mistake. The universal advice is **play simple, get pucks behind their defence, don't be the one to make the play that loses it**, and manage shifts ruthlessly — teams routinely shorten shifts to the low 30s in double overtime.

### Overtime elsewhere: IIHF, Britain and rec leagues

```facts
Rule: IIHF preliminary overtime is five minutes of 3-on-3, but teams do not change ends (IIHF Rule 84.1)
Rule: IIHF playoff overtime is ten minutes of 3-on-3, not the NHL's twenty-minute 5-on-5 periods (IIHF Rule 84.5)
Rule: The IIHF shootout is five shooters a side with a coin toss for order, not three with home-team choice (IIHF Rule 84.4)
Rule: IIHF 84.2 is one sentence permitting the pull; the NHL's forfeited point and its bar on returning on the fly have no IIHF counterpart
Rule: Under the In-House Rules overtime is played only in NIHL fixtures, and in SNL fixtures whose competition regulations provide for it (Rule 84)
Rule: NIHL league and group-stage playoff overtime is five minutes of 3-on-3 with no change of ends, then game-winning shots with three shooters a side (In-House Rules 2025-26 and 2026-27, Appendix 1)
Rule: In NIHL 1 and 2 the same player may now shoot again once the first three have gone — the 2025-26 rule that everyone had to shoot first is gone (In-House Rules 2026-27, Appendix 1)
Rule: Playoff Final Weekend is different — semi-finals go to 20 minutes of 5-on-5 then shots, and the Final to successive 20-minute 5-on-5 sudden-death periods with no shots at all (In-House Rules 2025-26 and 2026-27, Appendix 1)
Read: Under IIHF rules your bench is the near bench, so waiting for an exhausted defender is much less reliable
Action: Ask before the game — formats run from 4-on-4 to 3-on-3 to a straight shootout to no overtime at all
```

> **Rule-set note — IIHF overtime differs from the NHL in ways that change how you play it.** This is the operative section if you play in Britain: every level of the game here runs the IIHF book. From the *IIHF Official Rule Book 2025/26*, Rule 84:
>
> - **Preliminary/round-robin (84.1):** five minutes maximum, sudden death, **3-on-3** — the same length and strength as the NHL. But it follows a **three-minute intermission** with the ice shovelled, and **teams do not change ends.** The NHL's overtime uses the long change; IIHF overtime does not, so your bench is the *near* bench and a tired player can actually get off. That single difference makes the "wait for the exhausted defender" plan much less reliable under IIHF rules.
> - **Playoff, relegation, classification and bronze-medal games (84.5):** **ten minutes**, sudden death, still **3-on-3**, still no change of ends — not the NHL's 20-minute 5-on-5 periods. If it settles nothing, the shootout follows.
> - **Gold-medal game (84.6):** repeating sudden-death 3-on-3 overtime periods with a **15-minute intermission** and an ice resurface between each. Teams stay at the same ends for the first overtime and **change ends from the second onward**. No shootout.
> - **Pulling the goalie in overtime (84.2):** the whole rule is one sentence — *"A team shall be allowed to pull its goalkeeper in favor of an additional skater in the overtime period."* **Neither of the NHL's two riders appears anywhere in the IIHF book:** there is no forfeiture of the point already earned if you lose with the net empty, and no bar on the goalkeeper returning on the fly (the IIHF book has no Rule 74.5, and the phrase "on the fly" does not occur in it). So the standings-points arithmetic that makes an overtime pull almost never worth it in the NHL is not part of your game.
> - **Shootout (84.4):** **five** shooters per side, not the NHL's three, then sudden death. The order of shooting is decided by a **coin toss** between the captains, rather than by the home team as in the NHL, where Rule 84.4 provides that *"the home team shall have the choice of shooting first or second."* More below, under [Shootouts](#shootouts).
> - **Overtime penalties (84.3)** work as in the NHL: a penalty makes it 4-on-3, coincidental minors with nothing else on the clock leave it 3-on-3, a two-man advantage is 5 against 3, and no team ever has fewer than three skaters.

> **⚠️ Britain — in many fixtures there is no overtime at all.** The IHUK In-House Rules amend IIHF Rule 84 down to a single line: overtime *"is only played in NIHL fixtures and in SNL fixtures where specifically provided for in competition regulations"* (In-House Rules, Rule 84 — the same single sentence in the 2025-26 and 2026-27 editions). Recreational and junior games end level, so everything above about managing a tied third period ends with the horn rather than with 3-on-3. **The reach of that widened for 2026-27:** the current edition adopts the IIHF book *"as the foundation for the rules of the game to be applied in England, Wales, Scotland and Northern Ireland (the Home Countries)"*, where the 2025-26 edition reached *"England and Scotland"* only, and the governing body is now Ice Hockey UK rather than England Ice Hockey and the SIHA. Where overtime *is* played, the formats are set out in Appendix 1 of the In-House Rules:
>
> - **NIHL National League, its group-stage playoffs, and NIHL 1 and 2:** **five minutes of 3-on-3**, then a **game-winning shots (GWS)** competition of **three** shooters a side taking alternate shots — three, as in the NHL, not the IIHF's five. **Teams do not change ends**, as under the IIHF book, so the near-bench point above is yours. Goalkeepers may go to the bench during the rest period; penalised players stay in the box. No group-stage playoff game may end in a tie.
> - **NIHL Playoff Final Weekend:** semi-finals go to **20 minutes of 5-on-5** and then game-winning shots. The **Final** goes to successive **20:00 periods of 5-on-5 sudden death** — *"golden goal"*, with **no** shots competition — and *"[t]eams change ends at the start of each overtime period."* That is the one British format in which the long change comes back, and it is the closest thing here to NHL playoff overtime.
> - **SNL:** five minutes of 3-on-3 sudden death, then a **best-of-three penalty shot shootout**, then sudden death.
> - **BUIHA:** fixtures marked *"VARSITY OT"* on the schedule follow the NIHL procedure.
>
> The full list of British amendments lives in [UK and England Rules](../foundation/uk_rules.md).

Formats vary enormously below the professional level everywhere else too: some leagues use 4-on-4, some 3-on-3, some go straight to a shootout, many simply record a tie, and youth leagues often have no overtime at all. **Ask before the game.**

---

## Shootouts

**Rule 84.4**: if the five-minute overtime settles nothing, each team gets **three shots**, alternating, and the **home team chooses whether to shoot first or second**. If still tied it goes to **sudden death**, and **no player may shoot twice until everyone eligible has shot**. The rules for each attempt are those of a penalty shot (Rule 24). The final score is recorded as one goal better than the opponent regardless of how many shootout goals were scored, and the winning shooter is not credited with a goal in personal statistics.

> **Rule-set note — the shootout you will actually take in Britain.** Your base book is the IIHF's, and **IIHF Rule 84.4 differs from the NHL on four things that change how the competition is run**:
>
> - **Five shooters a side, not three**, and they must be *"five (5) different shooters"* — where the NHL gives each team *"three shots, unless the outcome is determined earlier."*
> - **A coin toss, not the home team.** The referee calls both captains over and flips: *"The winner of the coin toss will have the choice whether their team will shoot first or second."*
> - **The goalkeepers may be swapped.** IIHF 84.4(VI): *"The goalkeepers from each team may be changed after each shot."* NHL 84.4 is the opposite — *"Once the shootout begins, the goalkeeper cannot be replaced unless he is injured."*
> - **Repeat shooters in the tie-break.** Once the first five are done, *"[t]he same Player can be used for each shot"*, where the NHL makes everyone eligible shoot before anyone shoots twice.
>
> **The In-House Rules then replace the whole procedure in the leagues that use it** (Appendix 1 — England Ice Hockey and the SIHA in 2025-26, Ice Hockey UK in 2026-27). It is a **game-winning shots (GWS)** competition: **three** shooters a side taking alternate shots, then *"sudden victory"* — one shot each until it is settled. **Eligibility is the part to get right, and it changed for 2026-27** — so check which season you are reading before you rely on it:
>
> - **NIHL National League and its group-stage playoffs — the same in both editions:** *"Any eligible player may take a penalty-shot attempt, and the same player may be used for multiple attempts."* Eligible means not serving a penalty and not injured at the time of the attempt. Your best shooter can go every round.
> - **NIHL 1 and 2 — this is the one that reversed, and the 2026-27 book is the live one.** In the **2025-26** edition they were the opposite of the National League: *"All eligible players (except those serving penalties or injured) must shoot before any player can take a second attempt."* **The 2026-27 edition deletes that sentence entirely** and writes instead: *"Any eligible player may take a penalty-shot attempt,(AFTER the initial 3 shots have been taken) and the same player may be used for multiple attempts"* — the punctuation and the capitals are the book's. So **in the season you are playing, your best shooter can go again in NIHL 1 and 2 too**, once the first three shooters have gone. The two clauses now read almost identically; NIHL 1 and 2 spell out an after-the-first-three gate that the National League clause leaves to its own *"three (3) shooters"* selection. **The "everyone eligible shoots before anyone shoots twice" rule is the NHL's** — *"No player may shoot twice until everyone who is eligible has shot"* (NHL Rule 84.4) — **and the 2026-27 In-House Rules no longer write it for any competition they cover.**
> - **SNL — the same in both editions:** a *"best-of-three penalty shot shootout"*, then sudden death, with the first three designated shooters repeatable *"after every full round of three."*
>
> As in the NHL, the deciding goal is recorded as the game-winning goal and the final score increased by one for the winners. Full amendment list: [UK and England Rules](../foundation/uk_rules.md).

### For the shooter

```facts
Action: Decide before you start skating — deciding at the hash marks is how you end up doing neither thing well
Technique: Have two moves and know which one you are using
Options: A shot in stride to the far side or five-hole, a deke to the backhand, or forehand-backhand-forehand
Read: Slower approaches give you more options and force the goalie to move first; faster ones beat passive, deep goalies
Goal: Get the goalie sliding, then go where they have just left
Never: Telegraph. Head up instead, puck out in front where both a shot and a deke are live
Key: A missed net is the worst outcome; a saved shot at least creates the possibility of an error
```

- **Decide before you start skating.** Deciding at the hash marks is how you end up doing neither thing well.
- **Have two moves and know which one you're using.** The commonest are a shot in stride (usually to the far side or five-hole), a deke to the backhand, and a forehand-backhand-forehand.
- **Speed is a choice, not a default.** Slower approaches give you more options and force the goalie to move first; faster approaches beat goalies who are passive and deep. Pick one deliberately.
- **Make the goalie move first if you can.** Most shootout goals come from getting the goalie sliding, then going where they've just left.
- **Don't telegraph.** Head up, puck out in front where both a shot and a deke are live.
- **You only need one good shot.** A missed net is the worst outcome; a saved shot at least creates the *possibility* of an error.

### For the goalie

```facts
Technique: Control your depth — coming out cuts the angle, staying deeper gives you more time against dekes
Never: Commit first. Stay square instead, stay patient, make them decide
Technique: Track the puck, not the hands
Read: Match your retreat to their approach — back in with a fast shooter, hold your depth and stay big against a slow one
Rule: You cannot be replaced once the shootout starts unless you are injured, and a substitute gets no warm-up (NHL Rule 84.4)
Rule: Under the IIHF book the goalkeepers "may be changed after each shot" (IIHF Rule 84.4(VI)), so where a British fixture does go to shots a substitution is legal — but no warm-up is permitted for a substitute goalkeeper in any game (IIHF Rule 8.2)
```

- **Control your depth.** Coming out cuts the angle and beats shooters; staying deeper gives you more time against dekes. Know which you're better at.
- **Don't commit first.** Nearly every shootout goal comes from a goalie who moves before the shooter does. Stay square, stay patient, make them decide.
- **Track the puck, not the hands.**
- **Match your retreat to their approach.** A shooter coming in fast means you back in with them; a slow shooter means you hold your depth and stay big.
- **You cannot be replaced once the shootout starts** unless you're injured, and there is no warm-up for a substitute (Rule 84.4). **That is the NHL position and it is reversed in the IIHF book**, where *"[t]he goalkeepers from each team may be changed after each shot"* (IIHF Rule 84.4(VI)) — so in Britain, where the IIHF book is the base and the In-House Rules leave this alone, a coach genuinely can put the other goalie in mid-competition. The no-warm-up point still holds either way — **IIHF Rule 8.2** says *"[n]o warm-up shall be permitted for a substitute goalkeeper in any game"* — so nobody is getting shots first. **And in Britain the shootout is only reached at all in the fixtures Rule 84 leaves overtime in**, and it is the In-House Rules' three-shooter game-winning-shots competition rather than the IIHF's five; Appendix 1 writes nothing about changing goalkeepers during it, which is why the IIHF permission is what governs.

See [Goaltender](../positions/goaltender.md) for the technical detail.

---

## Momentum and How to Respond to It

Whether "momentum" is a real measurable force is genuinely disputed. What is not disputed is that **teams behave differently after a goal**, and that behaviour is controllable.

### After conceding

```facts
Mindset: Take the next shift as simply as possible — win a puck, get it deep, take your man, change
Mindset: Play the game in front of you — replaying the goal is a decision-making tax you cannot afford
Action: Reset your risk to baseline; chasing the goal back immediately is how one-goal deficits become three-goal deficits
Action: Say one short factual sentence — "reset, next shift". Silence after a goal against is corrosive
Convention: Coaches treat the minute after a goal against as the most dangerous stretch in hockey — coaching lore, not a measured hazard rate
```

The minute after a goal against is treated by coaches everywhere as the most dangerous stretch in hockey, because the conceding team is either deflated or over-eager and both produce mistakes. **Read that as coaching lore, not as a measured hazard rate** — it is the same class of claim as "momentum" flagged just above, and there is no published count of goals by time since the last goal. The habits below are worth having whether or not the effect is real.

**What to do:**

- **Take the next shift as simply as possible.** Win a puck, get it deep, take your man, change. Nothing clever. **And do not go looking for a hit to settle yourself with** — *"finishing your check"* on a player who has already passed or shot is a late hit, and the section below sets out what it costs in each of the four books.
- **Play the game in front of you.** Replaying the goal in your head is a decision-making tax you can't afford. See [Mental Game](../off-the-ice/mental_game.md).
- **Reset your risk to baseline.** The instinct is to chase the goal back immediately. That's how one-goal deficits become three-goal deficits.
- **Talk.** One short factual sentence — "reset, next shift" — from anyone. Silence after a goal against is corrosive.

### What a late hit costs in each book

```facts
Never: "Finish your check" on a player who has already passed or shot; USA Hockey's Declaration of Player Safety calls the concept "an unacceptable action"
Rule: The NHL does not cap a late hit at a minor — 56.2(iii) is the minor for a deliberate check on a player not in possession, and 56.4 lets the Referee assess a major "based on the degree of violence"; only its game misconduct, 56.5, needs an injury
Rule: Under the IIHF book, the British one, a late hit is not capped at a minor — Rule 56.5 reaches a major plus a game misconduct with nobody hurt, on the Referee's judgement that the hit recklessly endangers AND that the player "would not be sufficiently sanctioned by imposing a major penalty"
Rule: USA Hockey 640(b) assesses the minor for a body check on a player no longer in control of the puck "except Adult Male Classifications"
Rule: The Adult Male carve-out in 640(b) is not a free hit — USA Hockey Rule 640 Note 2 directs a roughing penalty with no classification exception, and 640(a) carries the roughing minor or double minor, which is a reading rather than the book's words since 640(a) names Note 1
Rule: USA Hockey does not cap a late hit at a minor either — 640(g) is a major plus a game misconduct where the hit recklessly endangers and 640(h) a match, but both reach only acts under 640(b–f), so their reach in adult men's hockey is unstated; 602(a) is a match penalty tied to no named foul at all
Rule: Hockey Canada makes a late hit interference in terms, and 8.3(b) reaches a major plus a game misconduct on "the degree of violence of the impact" with nobody hurt, mandatory where it injures
Rule: None of this arises where you may not body check at all — USA Hockey 604(a) bars it at 12 & under and below, in all Girls'/Women's and all non-check Adult classifications; Hockey Canada 7.3 at U13 and below, throughout female hockey and in any Member-approved division
Rule: The IIHF book, the British one, names no age and nor do the In-House Rules, so ask your league. In women's hockey it allows a bodycheck only with "a clear intention of playing the puck or attempting to 'gain possession' of the puck", subject to the exception the rule itself then sets out (101.1)
Action: Where body checking is permitted, take the body of the player who has the puck; where it is barred, take the ice they need and play the puck
```

Note the wording: **"finishing your check"** — hitting a player who has already passed or shot — is a late hit, and USA Hockey's *Declaration of Player Safety, Fair Play & Respect* calls the concept *"an unacceptable action"* — the Declaration announcing itself as covering *"acceptable/unacceptable body checking and competitive contact at all levels of play"*.

**Under the IIHF book — the British one — a late hit is reckless endangerment by 56.1's own words, and 56.5 reaches a major plus a game misconduct with nobody hurt.** ⚠️ **Read that rule with both of its conditions, because it asks the Referee two questions rather than one:** the major plus game misconduct is available where, in their judgment, the player *"recklessly endangers their opponent by an 'interference or a late-hit'"* **and** *"would not be sufficiently sanctioned by imposing a major penalty"*, the assessment resting on *"the severity of the infraction, severity of the contact, the degree of violence and the general reprehensibility involved."*

**The contrast with the NHL is narrower than it looks, because the NHL does not cap a late hit at a minor either.** There a late hit is interference. Rule 56.1 allows the check on the player who has just lost the puck only *"provided the check is rendered immediately following his loss of possession"*, and **56.2(iii)** makes a minor of a deliberate check on an opponent *"who is not in possession of the puck"*. **Rule 56.4** then lets the Referee, at his discretion, *"assess a major penalty, based on the degree of violence, to a player guilty of interfering with an opponent"*. What the NHL does *not* do is reach the ejection with nobody hurt: **56.5** imposes the game misconduct only *"for an infraction resulting in an injury of an opponent"*. So the major is available under both books, and it is the automatic game misconduct without an injury that is the IIHF's alone.

**One carve-out matters if you play adult men's hockey in the United States:** the named minor in USA Hockey Rule 640(b) — *"A minor penalty shall be assessed (except Adult Male Classifications) to any player who delivers an avoidable body check to an opponent who is no longer in control of the puck"* — is not assessed in Adult Male classifications. That does not make the hit legal there. Rule 640 Note 2 says a roughing penalty *"should also be assessed to a player who ... delivers an avoidable body check to an opponent after the whistle or who is no longer in control of the puck"*, with no classification exception, and Rule 640(a) carries the roughing minor or double minor. That last link is a reading rather than the book's words — 640(a) writes its tier *"as outlined in Note 1 above"*, and the late hit is Note 2's — but Note 2 directs a roughing penalty in terms and nothing in it is scoped by classification. So in adult men's hockey the rule number for a late hit changes and the advice does not.

⚠️ **And under USA Hockey the minor is not the ceiling either — the tier is written into Rule 640 itself, and this is the part the chain above leaves out.** **640(g)**: *"A major plus a game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of any actions falling under Rule 640(b, c, d, e or f)."* **640(h)**: *"A match penalty for reckless endangerment may also be assessed under sub-sections (b), (c), (d), (e) or (f) of this rule."* ⚠️ **Note which sub-sections that reaches**, because it is the same carve-out again: 640(b) is the one written *"(except Adult Male Classifications)"*, while (d) — a body check *"with no effort to gain possession of the puck"* with the stick blade above the knees — and (e) — a check on an opponent already physically engaged for the puck — carry no such limit. **Whether 640(g) reaches a late hit in adult men's hockey, where (b) is not assessed, the book does not say, and this document does not know.** **Rule 602(a) does not depend on the answer**: *"A match penalty shall be assessed to any player or team official who recklessly endangers or attempts to injure any opposing player or team official"*, tied to no named foul at all.

**Under Hockey Canada a late hit is interference, and 8.3(b) reaches a major plus a game misconduct on *"the degree of violence of the impact"* with nobody hurt, mandatory where it injures — with 8.3(c) a match penalty above it, for a player who *"attempts to injure or deliberately injures an opponent by interference."***

⚠️ **All of that assumes you may body check at all, and in a great many classifications you may not.** USA Hockey **604(a)** prohibits body checking *"in the 12 & under youth age classifications and below, all Girls'/Women's age classifications and all non-check Adult classifications"* — the levels the book calls the Competitive Contact category, where **604(c)** makes a body check a minor, **604(d)** a major plus a game misconduct where the player *"recklessly endangers an opponent"*, and **604(e)** a match — and the same sub-section adds that *"[a] local governing body may prohibit body checking in any classification"*. Hockey Canada's **Rule 7.3** *"applies only in divisions of U13 and below, in female hockey, and any other divisions approved by a Member of Hockey Canada"*, and there **7.3(a)** is a minor for a player who *"intentionally body-checks, bumps, shoves, or pushes any opposing player"* — though the rule expressly excepts *"incidental contact of two opposing players in pursuit of the puck on the ice in the same direction"*, for which *"no penalty will be assessed"*. 🇬🇧 **The IIHF book names no age, and neither do the In-House Rules, so ask your league.** It does restrict by category, though: in women's hockey a bodycheck is legal only *"when there is a clear intention of playing the puck or attempting to 'gain possession' of the puck"* (**Rule 101.1**). ⚠️ **Read that permission to the end of its own sentence, because it has a second limb** — the rule grants it *"with the exception from the situation described in this rule"*, so a clear intention to play the puck is a condition of the bodycheck being legal and not a licence for it. The exception is the rule's own, set out in the clauses that follow; the book writes *"the situation"* in the singular, and this document does not enumerate what it covers, because doing so would assert a completeness the rule does not state. What the rule does say is what an illegal hit costs: a minor, or a major plus an automatic game misconduct. [Body Contact and Battles](../technique/body_contact_and_battles.md) sets out the clauses themselves.

So, **where body checking is permitted**, the instruction does not change with the book: take the body of the player who *has* the puck, or take the ice they need. **Where it is barred, only the second half is yours** — take the ice, play the puck, and the contact is not available to you at all. See [Body Contact and Battles](../technique/body_contact_and_battles.md).

### The value of a simple shift

```facts
Key: A simple shift is a deliberate, low-ambition, high-execution 35 seconds
Never: Cross-ice passes, pinches or one-on-one attempts on a simple shift
Action: First man in on the forecheck, hard on the wall, change on the whistle or on the clear
Goal: Stop the bleeding and hand the game back to the bench in one piece
Mindset: It is not a lack of ambition — being able to deliver one reliably makes you very hard to leave out
```

A **simple shift** is a deliberate, low-ambition, high-execution 35 seconds: no cross-ice passes, no pinches, no one-on-one attempts, first man in on the forecheck, hard on the wall, change on the whistle or on the clear. Its purpose is to stop the bleeding and hand the game back to the bench in one piece. It is not a lack of ambition; it's the correct play in a specific situation, and being the player who can reliably deliver one makes you very hard to leave out of a line-up.

### Time-outs, icing, and what the evidence says

```facts
Rule: Each team gets one thirty-second time-out per game, taken at a normal stoppage (NHL Rule 87.1)
Rule: No time-out is granted to the defensive team following an icing — you cannot rest your way out of your own icing (NHL Rule 87.1)
Rule: USA Hockey is the outlier: Rule 636(f) gives one sixty-second time-out and attaches no icing condition to it — its only clock is the general one, which requires the request before the line change procedure concludes at any stoppage
Rule: The IIHF sets that same line-change clock on the ask (87.1) where the NHL asks only for the request "prior to the drop of the puck" — so in Britain the window shuts when the referee lowers his hand
Action: Spend it on rest and instruction at a moment you choose — before a critical defensive-zone draw, or before setting up 6-on-5
Rule: The two other stoppages this rule names also cost the defending team the line change — NHL and IIHF Rule 63.8, whose goalkeeper-freeze limb allows only two substitutions, an injured player and a strength-changing penalty, with no pulled-goalkeeper one
Key: The measured effect on winning is nil, but most benches finish the game with the time-out still in the pocket
```

**Rule 87.1**: each team gets **one thirty-second time-out per game**, regular season or playoffs. It must be taken at a normal stoppage, and **only one time-out — commercial or team — is permitted at any one stoppage.**

Crucially, **no time-out shall be granted to the defensive team following an icing** (also: following the goalie causing a stoppage from a shoot-in from beyond the centre red line, or when a defending player accidentally dislodges the net). This is the rule that closed the loophole in 2017-18 — before it, a coach could ice the puck and then buy their tired players a rest with a time-out. **You cannot rest your way out of your own icing.**

⚠️ **Those two other stoppages cost you the line change as well, and that is a different rule from the one the icing section above sets out.** **NHL and IIHF Rule 63.8** bars the defending team from substituting before the ensuing draw in both of them — where a defending skater or goalkeeper accidentally displaces the net, and where *"the puck is shot into the end zone by the attacking team from their own side of the center red line, and the opposing goalkeeper freezes the puck resulting in a stoppage of play"* — with the attacking team choosing which end-zone dot in each case. ⚠️ **And the two limbs do not carry the same exceptions.** The net-off limb carries the icing rule's three. **The goalkeeper-freeze limb carries two**, permitting a substitution only *"to replace an injured player, or when a penalty has been assessed which affects the on-ice strength of either team"* — **there is no pulled-goalkeeper exception in it at all.** So a freeze on a routine dump-in from centre is a third route to a bench that can neither change nor buy a rest, and the goaltender is the one who decides it. **Neither of the other books writes that limb**: USA Hockey attaches no substitution bar to any of this, and Hockey Canada's **6.1(g)** reaches the accidentally dislodged net only, and only *"[i]n categories of U18 AAA, Junior and at the option of the Member in Senior"*. [Goaltender](../positions/goaltender.md) covers the same rule from behind the net.

> **Rule-set note.** **IIHF Rule 87.1 says the same three things in the same words** — one thirty-second time-out per team, none after a faceoff violation, and none to the defensive team following an icing, a goalie freeze on a shoot-in from beyond the red line, or a defender dislodging the net. So a British or European league player gets no relief here. 🇬🇧 **It says one thing more than the NHL's, though, and it is the sentence a British bench most needs:** the IIHF's 87.1 requires that the time-out *"must be requested by the team before the Referee has completed the Players change procedure, before the Referee lowers his hand and points to the respecting face-off location"*, where the NHL's asks only that a player indicate *"(prior to the drop of the puck)"*. **So your window is the line change, not the drop** — and it closes when the referee's hand comes down at the end of the home team's eight seconds. **USA Hockey is the outlier:** Rule 636(f) gives each team **one sixty-second time-out** and attaches **no** icing condition to it, so under that book a coach genuinely can ice the puck and then buy the rest. ⚠️ **The ask is on a clock, though, and it is not an icing clock — it is the one that closes the line change.** Rule 636(f) requires that *"[t]ime-outs must be requested during a stoppage of play prior to the conclusion of the line change procedure"*, and the Glossary shuts that window when the referee lowers their arm at the end of the home team's five seconds. **Ask inside it and the sixty seconds are yours; ask after it and they are not — and that holds after any stoppage, not just an icing.**

What the evidence says about time-outs generally is humbling. A survival analysis of NHL games from 2014-15 to 2018-19 found **no statistically significant effect on win probability** from calling a time-out in the last five minutes of one-goal games. The leading team calling a time-out to protect a lead was **1.339 times more likely to lose the lead** — a result that was not statistically significant and may well be correlation, since coaches call time-outs when they're already under siege. Time-outs bought about **0.25–0.50 extra shot attempts** but almost nothing in unblocked shots.

The same study found that **teams barely use them at all**: across 7,314 games from 2014-15 to 2019-20, only **30.1%** of available time-outs were called — and the rate *fell* over the period, from **41.8% in 2014-15 to 22.8% in 2019-20**. In other words, in roughly seven games out of ten a coach finishes with the time-out still in his pocket.

The practical reading: a time-out is a tool for **rest and instruction at a moment you choose** — before a critical defensive-zone draw, before setting up 6-on-5, after a long shift you couldn't escape. It is not a momentum spell, and the measured effect on winning is nil. But it is also free, and seven times out of ten it goes unused, so the error most benches actually make is not spending it badly — it is never spending it at all.

---

## Special Situations

### 4-on-4

```facts
Action: More ice means more time — hold the puck a beat longer and make the second option available
Read: The open middle cuts both ways: more clean entries for you, more odd-man rushes against
Convention: Two forwards and two defencemen is the common personnel choice, but many teams use three forwards — know yours
Priority: The defensive priority is the far-side rush; losing a puck at the offensive blue line is a 2-on-1 with nobody to help
```

Under **Rule 19.1**, when **one minor is assessed to a player on each team at the same stoppage** and there are no other penalties on the clock, they are served **without substitution** and both teams play **four skaters against four for the duration**. 🇬🇧 **The *coincidental-minors* 4-on-4 is NHL-only.** IIHF Rule 19.1 requires *"immediate substitution"* for an equal number of minors, and the IIHF **Situation Handbook** — the name the IIHF gives its worked interpretations — confirms it at **Situation 84.10**, on two coincidental roughing minors late in the third: *"Since the penalties are coincidental, the penalties are not served on the clock and the teams are playing 5 – 5."* Britain still reaches 4-on-4 by other routes at the same stoppage — a minor to one team against a major to the other does it (IIHF Appendix IV — Table 15 in the 2025/26 book, renumbered Table 13 in the 2026/27 edition, examples 18-20 and 32 word for word in both) — so the tactical material below still applies. It is only this trigger that differs. ⚠️ **That substitute route has a late exception of its own** — in the last five minutes of regulation and at any point in overtime, IIHF Rule 19.3 makes a minor against a major **5-on-4** rather than 4-on-4, set out under [Coincidental penalties](#coincidental-penalties) below.

4-on-4 is a higher-scoring game state than 5-on-5 — in 2007-08 a goal was scored every **12.1 minutes** at 4-on-4 versus **13.7 minutes** at 5-on-5. Both are **combined** rates: the time until *either* team scores, not until one particular team does. How to play it:

- **More ice, so more time — use it.** Support is farther away, so hold the puck a beat longer and make the second option available.
- **The middle is open, which cuts both ways.** More space through the neutral zone means more clean entries and more odd-man rushes against.
- **Two forwards and two defencemen is the common personnel choice**, but many teams use three forwards and a defenceman to attack. Coaching choice — know yours.
- **The defensive priority is the far-side rush.** Losing a puck at the offensive blue line at 4-on-4 is a 2-on-1 the other way with nobody to help.

### Coincidental penalties

```facts
Rule: Coincidental minors of equal duration cancel; any difference in time is served normally (NHL Rule 19)
Rule: A second pair of coincidental minors while already 4-on-4 leaves strength unchanged, because the first pair is still on the clock (NHL Rule 19.1)
Rule: Under IIHF Rule 19.1 coincidental minors bring immediate substitution and the teams stay five a side — Britain reaches 4-on-4 by a minor against a major at the same stoppage (Appendix IV, Table 15 in the 2025/26 book and Table 13 in the 2026/27 one), just not by this one
Rule: But not late — a minor against a major at the same stoppage is 5-on-4 under IIHF 19.3 in the last five minutes of regulation and at any time in overtime, the differential served as a major. NHL 19.4 is the same rule
Rule: Penalised players in coincidental situations cannot leave the box until the first stoppage after their penalty expires (NHL Rule 19)
Never: Retaliate — you convert your opponent's mistake into no advantage at all
```

The general principle in **Rule 19** is *cancel as many matching penalties as you can*. Coincidental minors of equal duration cancel; any difference in time is served normally. Once teams are already 4-on-4, another set of coincidental minors does **not** drop them to 3-on-3 — but nor does it put them back to 5-on-5. **They stay at 4-on-4.** The reason is in Rule 19.1: the four-skater provision applies only *"provided there are no other penalties in effect and visible on the penalty clocks,"* and the original pair is still on the clock. So the second pair gets **immediate substitution** and on-ice strength is unchanged, while four players now sit in the boxes. Penalized players in coincidental situations **cannot leave the box until the first stoppage after their penalty expires**, which is why you sometimes see a player sitting long after the clock hits zero.

🇬🇧 **The IIHF book answers coincidental minors the other way, and it adds a rule for the end of the game.** Its Rule 19.1 requires *"immediate substitution"* for an equal number of minors, so the teams stay five a side; a minor to one team against a major to the other is what brings a British game to 4-on-4 at a single stoppage. ⚠️ **In the last five minutes of regulation and at any point in overtime, that route closes too.** **IIHF Rule 19.3** is headed *"Last Five Minutes and Overtime"*, and it takes exactly that pair — a minor or double minor to one team, a major to the other, at the same stoppage — and directs that the three-minute (or one-minute) differential *"shall be served immediately as a major penalty."* The book's own worked example, number 19 in the Appendix IV coincidental-penalties table and the same number in both editions, answers the pair twice: normally the teams play 4-on-4, but late *"Team B will play short-handed for three minutes and it will be served in the same manner as a major penalty."* So the strength is **5-on-4 for three minutes**, not 4-on-4, and the team that took the major must place *"the penalized Player or replacement Player in the penalty box immediately."* **NHL Rule 19.4 is the same rule in materially the same words, so this is not a British departure.** Two details in the NHL's do differ: it reaches a **match** penalty as well as a major, and for a major it wants the replacement in the box *"prior to expiration of the penalty"* rather than immediately.

The game-management point: **if you retaliate, you have converted your opponent's mistake into no advantage at all.** Your team earned a power play; you gave it straight back. That is one of the few things in hockey that is pure, unforced loss.

### The last minute of a period

```facts
Never: Get caught changing inside the last minute — a bad change concedes numbers, a hole and a blind arrival, at the moment there is no time to answer a goal
Never: Force an entry; a turnover at their blue line with 20 seconds left is a 2-on-1 you will not recover from
Action: Get the puck deep and finish the period there
Priority: Nobody's line is more important than the clock — tired with 15 seconds left, stay on and defend
Read: The exception is a genuine chance — possession with numbers, and you go
```

The first and second periods have their own risk profile. A goal against in the final minute of a period is disproportionately damaging — it's the last thing everyone carries into the dressing room, and there's no time to respond.

- **Do not get caught changing.** A change inside the last minute concedes the same three things any bad change does — a numbers disadvantage, a hole where somebody's job was, and a player joining the play blind — at the one moment in the period when there is no time to answer the goal.
- **Do not force an entry.** A turnover at their blue line with 20 seconds left is a 2-on-1 you will not recover from.
- **Get the puck deep and finish the period there.**
- **Nobody's line is more important than the clock.** If you're tired and there are 15 seconds left, stay on and defend rather than change.
- **The exception is a genuine chance.** If you have possession with numbers, go — just know the difference between a chance and a hope.

### The first shift after a long stoppage

```facts
Mindset: Expect your first stride to be slow, and expect both teams to play the shift badly
Action: Keep your feet moving during the stoppage rather than leaning on your stick
Action: Simplify the first 20 seconds — the pass you would normally complete may not connect
Priority: Win the faceoff; possession from a cold start is worth more than usual because they are disorganised too
Goal: Be first to the first loose puck — that race usually sets the tone of the next two minutes
```

After a TV time-out, an injury delay, a video review or an intermission, everybody is cold, the ice is different, and the first shift is played badly by both teams. That makes it an opportunity as much as a risk.

- **Expect your first stride to be slow.** Keep your feet moving during the stoppage rather than leaning on your stick.
- **Simplify the first 20 seconds.** Nobody's timing is right yet; the pass you'd normally complete may not connect.
- **Win the faceoff.** After a stoppage the game restarts from a draw, and possession from a cold start is worth more than usual because the other team is disorganised too.
- **Be first to the first loose puck.** Whoever wins the first race after a stoppage usually sets the tone of the next two minutes, and that is decided by intent, not fitness.

---

## Discipline as Game Management

### When a penalty is worth taking

```facts
Key: The test is whether the thing you are preventing is more likely to become a goal than the power play you give up
Options: Stopping an odd-man rush in the last minutes of a close game, or preventing a certain goal
Rule: Two fouls are not priced as minors under the NHL — fouling a breakaway from behind is a penalty shot, not a power play (57.3), and so is a skater other than the goalkeeper covering a puck that is itself in their own crease (67.4)
Rule: USA Hockey prices covering a puck in your own crease as "a penalty shot/optional minor penalty" (614(b)), and 406(a) gives the election to the non-offending team — so it never makes the trade cheaper for you, and the minor still puts a man off
Priority: For a puck in the air there is usually no trade to price at all; knocking it down concedes nothing, and the next section is the whole of that rule
Never: Foul anything once your own goalie is pulled — every trade that was worth taking with a goalie in the net stops being worth taking without one
Rule: The empty-net awarded goal — NHL 25.1 and 57.4 for the breakaway; for the crease one NHL and IIHF 67.5 and Hockey Canada 10.2(a)(vi) on the bare fact of the substitution, USA Hockey 614(b) alone conditioning it on preventing "an obvious and imminent goal"
Never: Take one for retaliation, for sending a message, after the whistle, or at any point in the first period
Rule: Trading a foul for a power play assumes the penalty is one, which the after-the-whistle ones are not always — USA Hockey writes a puck put out during a stoppage as a minor (610(c)) and a misconduct (601(c)(10)) without saying which governs, and a game misconduct in protest of a call (601(d)(7))
```

Rarely — but not never. The test is simple: **is the thing you are preventing more likely to become a goal than the power play you are giving up?**

**The arithmetic behind that test is not repeated here.** What a minor actually costs you (the league power-play conversion rate), what a penalty shot is worth by comparison, and the full rulebook account of the fouls that are *not* priced as minors — the breakaway fouled from behind, and covering the puck in your own crease — all live in [Risk Management, "Penalty risk as a decision"](../hockey-iq/risk_management.md#penalty-risk-as-a-decision). Read the numbers and the rule conditions there. What belongs in *this* document is the part that changes with the score and the clock:

- **Stopping an odd-man rush in the last minutes of a close game** — but *not* a clean breakaway, and this distinction matters enormously. Fouling a breakaway from behind gives up a **penalty shot**, not a power play (Rule 57.3), and over the last eleven NHL seasons penalty shots have converted at a *higher* rate than power plays — by less than the phrase "penalty shot" suggests, and not in every recent season, but higher. Chasing from behind and hauling someone down saves you little or nothing. The time to prevent the breakaway was four seconds earlier, with your gap — see [Defending the Rush](defending_the_rush.md).
- **Preventing a certain goal.** If it is a goal or a penalty, take the penalty. ⚠️ **But before you price the trade, check whether there is a trade at all — because for a puck in the air there usually is not.** That is a rule cluster in its own right, and it is set out in full in [Catching a loose puck in your own crease](#catching-a-loose-puck-in-your-own-crease).
- **Sometimes: killing time you need killed.** A stoppage you badly need for a change or a rest can occasionally be worth two minutes — but this is a coach's decision, not yours.

**⚠️ Once your own goalie is out, every one of those trades stops working.** This is the game state most of this document is about, so it matters here. With the net empty there is no shot for anyone to save, so the rulebook skips the penalty shot and simply gives them the goal:

- **A breakaway fouled from behind with your goalie pulled is an awarded goal** — NHL **Rules 25.1 and 57.4**, which the rulebook cites as a pair (25.1 is the general awarded-goal rule; 57.4 is the operative clause for tripping, hooking, holding and slashing).
- **Covering the puck in your own crease with an extra attacker on for your goalie is an awarded goal too** — **Rule 67.5**, not the penalty shot of 67.4. ⚠️ **The other books reach the same place, but not all on the same terms.** IIHF 67.5 is the NHL’s clause in the IIHF’s wording and Hockey Canada 10.2(a)(vi) awards the goal *"when the infraction occurs inside the offending team’s goal crease and the goaltender has been legally substituted for an extra skater"*, both turning on the bare fact of the substitution — but **USA Hockey alone conditions it**, 614(b) awarding the goal only where the goalkeeper was off the ice *"and the action under this rule has prevented an obvious and imminent goal"*. The full rule cluster is in [Catching a loose puck in your own crease](#catching-a-loose-puck-in-your-own-crease).

So: **when you have pulled your goalie, there is no foul left that buys you anything.** The exact conditions and wording are set out in [Risk Management](../hockey-iq/risk_management.md#penalty-risk-as-a-decision).

Note what is *not* on the list above: retaliation, sending a message, standing up for a teammate after the whistle, and anything at all in the first period. ⚠️ **And note that the arithmetic at the top of this section prices a penalty as a power play, which the after-the-whistle ones are not always priced as** — under USA Hockey and Hockey Canada a puck fired out of the rink after a whistle climbs a ladder that ends in a game misconduct. [When it absolutely isn't](#when-it-absolutely-isnt) sets out both books' clauses.

### Catching a loose puck in your own crease

```facts
Rule: Three books print the permission to catch a puck out of the air and put it straight down — NHL and IIHF 67.2, Hockey Canada 10.2(a)(iii), which adds "without gaining or attempting to gain an advantage"; USA Hockey's playing rules print none, its express words being Casebook Situation 1 to Rule 618
Priority: Knock the puck straight down where you stand — that concedes nothing under any of the four books, and no version of this trade beats it
Priority: Only where you cannot knock the puck down, and only while your own goaltender is still on the ice, is the penalty shot better than the goal it prevented
Priority: ⚠️ Once your own net is empty there is no trade left — under NHL, IIHF and Hockey Canada covering a puck in your crease concedes the goal, not a shot, so knocking it down is the only option
Rule: One thing that buys the penalty is the conduct after the catch — holding it, a stride, turning, throwing it (NHL and IIHF 67.2(I); Hockey Canada Interpretation 4 to 10.2(a)(iii)); another is a hand laid over a puck on the ice to conceal it, the penalty shot in your crease (67.2(II))
Rule: Under USA Hockey a hand CLOSED on the puck outside the crease and not opened immediately is a stoppage and last-play face-off, not a penalty; picking it UP off the ice is a minor anywhere; in the crease either is the penalty shot or optional minor (618(a), 614(b))
Rule: All four books make the puck's location the test for that shot, not the player's — NHL and IIHF 63.6, USA Hockey 614(b) and 618(a), Hockey Canada 10.2(a)(v) read with 4.11(a)(v), which is what locates the puck rather than the player, and does so for the hand limb
Rule: ⚠️ With your OWN net empty, covering a puck that is in your crease is an awarded goal, not a penalty shot — NHL and IIHF 67.5 and Hockey Canada 10.2(a)(vi) on the bare fact of the substitution, USA Hockey 614(b) only where it "has prevented an obvious and imminent goal"
Rule: The converse — a minor where the puck is outside the paint and you are inside it — is written only by the NHL and the IIHF (63.6); neither Hockey Canada nor USA Hockey prints that sentence, so do not assume it
Rule: The crease is a volume, four feet up to the top of the goal frame in all four books (NHL 1.7/2.1, Note to USA Hockey 618(a)) — knee high in the paint is the penalty shot, above the crossbar a minor (IIHF Situations 63.15/67.4 vs 63.27): height sets which penalty you pay, never whether you pay one
Rule: USA Hockey alone lets the NON-OFFENDING team elect that minor in place of the shot (406(a)) — their election, not yours, so it never makes the trade cheaper for you
```

**Start with the permission, because it is the half of this rule that makes the act free.** Three of the four books print it in their playing rules, and you may catch the puck provided you put it straight back down: NHL and IIHF **Rule 67.2**, *"A player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice"*; and Hockey Canada 10.2(a)(iii), which excludes from the minor *"a player who closes their hand on the puck to catch or stop the puck and immediately drops it to the ice without gaining or attempting to gain an advantage"*. ⚠️ **USA Hockey's playing rules print no permission for a skater at all.** What that book prints is the consequence, and the consequence is what leaves the act free: under 618(a) a hand closed **outside** the crease and not opened immediately is a stoppage and a last-play face-off rather than any penalty — **though a hand closed on a puck that is *in* the crease is the penalty shot or optional minor** under 614(b) and 618(a) alike. **The express words do exist one volume over**, in the separate *Rules and Casebook*: Situation 1 to Rule 618 answers that *"[t]he motion of catching, then dropping the puck, must be virtually one continuous motion"*, and that *"[p]rovided the player catches the puck and drops it to their stick in one continuous motion, play should be allowed to continue."* **So under USA Hockey the permission is a casebook interpretation rather than rule text — the same permission in practice, and not the same kind of evidence.** ⚠️ **That USA Hockey limb is about a hand *closed* on the puck; picking one up off the ice is a different act, and it is a minor anywhere.** 618(a)'s second paragraph assesses a delay-of-game minor to *"any player, other than the goalkeeper, who picks the puck up from the ice with their hand(s) while play is in progress"*, and **NHL and IIHF 67.2(III)** say the same. **Knock the puck straight down where you stand and you have conceded nothing. That is the play — there is no version of this trade that beats it.** What follows is the price of the other choice, not an alternative worth weighing against it.

**What costs you is the conduct after the catch, not the height of it.** NHL and IIHF **67.2(I)** reach the player who *"catches it and skates with it, either to avoid a check or to gain a territorial advantage over his opponent"*, and Hockey Canada's **Interpretation 4 to 10.2(a)(iii)** lists three acts that produce the minor, not one of which is a height: throwing the puck after closing your hand on it, trying *"to maneuver around another player while holding the puck"*, and *"tak[ing] a stride while holding the puck in their hand."* **That is the variable you control. Knock it down and play it.**

⚠️ **The catch is not the only way a hand on the puck buys the penalty, and the second limb is priced at the top inside your own crease.** NHL and IIHF **67.2(II)** assess the minor to a player *"[i]f they place their hand over the puck while it is on the ice in order to conceal it from or prevent an opponent from playing the puck"* — no catch in it at all — and the sentence printed directly under that clause is the one that matters at 6-on-5: *"When this is done in their team's goal crease area, a 'Penalty Shot' shall be assessed … or Rule 67.5 – Goal Awarded."* **So a hand laid flat over a loose puck in your own paint is priced the same as gathering it in**, and with your own net empty that is the goal rather than the shot. The free option does not change: knock it down where you stand and play it. ⚠️ **That limb is the NHL's and the IIHF's, and neither of the other two books writes one** — the word *conceal* returns nothing in USA Hockey's playing rules or its Casebook, nor in Hockey Canada's book (nor, checked beyond the four, in CARHA's). **Do not read that as a permission under those books.** USA Hockey 618(a) still reaches a hand *closed* on the puck and a puck *picked up*, and 614(b) a defending player who *"holds the puck"* in the crease; Hockey Canada's Rule 10.2 preamble permits a hand only *"to stop, knock down, or push the puck"*, with 10.2(a)(iii) reaching a hand closed on it for an advantage; and CARHA 58(c) awards the penalty shot where a defending player *"deliberately falls on the puck, holds or gathers the puck into their body in any manner, or picks up the puck with their hand, while the puck is within their goal crease"* — that last one being CARHA's Rule 58(c), outside this document's four books and quoted because a great deal of adult rec hockey runs on it. **Under every one of them, knocking it down is the play.**

⚠️ **And "put it down" means down where you are, not somewhere better.** The permission in 67.2 is to *"immediately place it or knock it down to the ice"*, and moving the puck first is not that. In IIHF **Situation 67.6** a defender with his own net empty grabs the puck *"out of mid-air (around the height of the waist)"* and *"drops the puck outside the crease"* — he did drop it, and the ruling is *"an Awarded Goal to Team B"* — a worked application rather than rule text, since the Handbook's Foreword ranks it below the Rulebook. Hockey Canada writes the same limit into the rule itself: its carve-out covers a player who *"immediately drops it to the ice **without gaining or attempting to gain an advantage**."*

**Now the price, for when you do hold it — and only while your own goaltender is still on the ice.** With your goalie in the net, if the foul actually available to you is holding a puck that is itself in your own crease, a penalty shot (**NHL Rule 67.4**) is still better than the goal it prevented. ⚠️ **With your own net empty there is no such trade.** The identical act is an **awarded goal** rather than a shot under the NHL, the IIHF and Hockey Canada, and under USA Hockey too wherever it prevented an obvious and imminent goal — so holding the puck there concedes the goal you pulled the goalie to chase. How each book reaches that is set out below. **It is the puck's position that decides, not yours, and all four books make the puck's location the test for the shot** — the NHL and the IIHF in **Rule 63.6**, USA Hockey in 614(b) and 618(a), Hockey Canada in **10.2(a)(v) read with 4.11(a)(v)** — because 10.2(a)(v)'s own words locate the *infraction* rather than the puck, and it is 4.11(a)(v), the clause it cross-refers to, that awards the shot where a defending player *"picks up the puck from the ice with their hand while the puck is in the goal crease."* That cross-reference reaches the **hand** limb only, which is the one this section is about; [Defensive Zone Coverage](defensive_zone_coverage.md) sets out how the body limb is located. ⚠️ **The converse is written only by the NHL and the IIHF.** Under those two books, gather in a puck lying outside the paint while you stand in it and you have taken a minor, not conceded a shot — Rule 63.6 prints the contrast case in terms. **Neither Hockey Canada nor USA Hockey writes that sentence**, so do not assume it: Hockey Canada 10.2(a)(v) awards the shot *"when the infraction occurs inside the offending team's goal crease"* and stops there, and USA Hockey 614(b) has no converse clause either.

⚠️ **And the trade changes once your own goalie is pulled** — the game state most of this document is about. With the net empty, covering a puck that is in your own crease is not a penalty shot but an **awarded goal**: **NHL and IIHF 67.5** and **Hockey Canada 10.2(a)(vi)** attach that to the bare fact of the substitution, the NHL and IIHF reaching a player — the IIHF’s word is *"skater"* — who *"falls on the puck, holds the puck, picks up the puck, or gathers the puck into"* their body or hands *"from the ice in the goal crease area"*, *"when the goalkeeper has been replaced for an extra attacker"*, and Hockey Canada awarding the goal *"when the infraction occurs inside the offending team’s goal crease and the goaltender has been legally substituted for an extra skater"*. ⚠️ **USA Hockey alone conditions it**: 614(b) awards the goal only where the goalkeeper was off the ice *"and the action under this rule has prevented an obvious and imminent goal"*, so under that book an act that prevented nothing is still the penalty shot or optional minor rather than the goal. **Either way the free option is the same one**: knock the puck straight down where you stand. The moment your net is empty is the moment holding it stops buying you anything at all.

**And the crease is a volume, not a footprint** — NHL Rule 1.7 runs it *"vertically four feet (4') to the level of the top of the goal frame"*, four feet being the height NHL 2.1 gives the posts. **All four books write it upward**: IIHF 1.7 has the Goal Crease Area *"extends vertically until the top of the crossbar"*, Hockey Canada 1.5(c) that it *"will extend vertically to the level of the top of the goal frame"*, and the Note to USA Hockey 618(a) that *"the goal crease shall extend from the ice to the top of the crossbar of the goal frame."* ⚠️ **Height sets which penalty you pay; it never sets whether you pay one.** The IIHF Situation Handbook rules both ways on it: a puck caught above the crossbar is *"not considered to be in the crease. Therefore, only a minor penalty is warranted"* (Situation 63.27), while a puck taken knee high in the paint is the shot (Situations 63.15 and 67.4). ⚠️ **Read those as a pair, and do not read the first as an instruction to catch it higher.** In 63.27 the player *"turns to avoid opposing players, and then tosses it towards the boards"*; in 63.15 and 67.4 he *"turns to avoid the attackers"* before dropping it to his stick. **In both, the conduct after the catch is what produced a penalty at all** — the height merely selected which one. The crossbar is four feet up, so reaching above it means reaching up through a scramble, and the free option, knocking the puck down, was available in both. (The Handbook's own Foreword places it below the Rulebook — *"in case of any contradictions, the valid IIHF Rulebook is always the basis"* — so read these as worked applications, not rule text.)

⚠️ **USA Hockey alone lets the other side elect that minor in place of the shot** (Rule 406(a)) — **their election, not yours, so it never makes the trade cheaper for you: they will take whichever is worth more to them.** What the shot costs you under that book is nothing in strength: 406(a) reads *"If the penalty shot is selected, the offending team shall not be reduced in on-ice strength as a result of the infraction"*, and Hockey Canada's Rule 4.11 preamble makes the shot *"in lieu of a Minor Penalty"* the same way.

### When it absolutely isn't

```facts
Never: Take a penalty with a lead in the last five minutes. If you are beaten, be beaten, and let them have the outside shot
Never: Take one while already killing a penalty; coaches rank a 5-on-3 against as the most dangerous game state in hockey, which is coaching emphasis and not a counted ranking
Never: Take one while on your own power play, or after the whistle
Rule: The after-the-whistle one can cost more than a power play — USA Hockey prices a puck put out during a stoppage at a minor (610(c)) or a misconduct (601(c)(10)) without saying which, and a game misconduct in protest of a call (601(d)(7))
Rule: Hockey Canada writes the same act at Rule 11.1, preamble item (v), laddering to a Misconduct at 11.1(d) and a Game Misconduct at 11.1(e) — Note 1 to each lets a referee assess either without the rungs below it, but both rungs still require that the player persists in the conduct
Never: Take one at 6-on-5 or defending 6-on-5 — both directions are catastrophic
```

- **When you're leading late.** A penalty with a lead in the last five minutes hands them a power play in the window where you have the least time left to answer a goal. If you're beaten, be beaten — let them have the outside shot.
- **When you're already killing a penalty.** Coaches rank a 5-on-3 against as the most dangerous game state in hockey — coaching emphasis, not a counted one.
- **When you're already on a power play.** Nothing wastes an advantage faster.
- **After the whistle.** These penalties buy you nothing, and they're the easiest ones for referees to call. ⚠️ **And under two of the four books they are not priced at two minutes, so the arithmetic above does not reach them at all.** Fire the puck out of the rink after a whistle and USA Hockey writes a ladder rather than a tier: Rule 610(c) is a minor for *"deliberately shooting or batting the puck outside the playing area, including after a stoppage of play"*, while Rule 601(c)(10) makes the same act a **misconduct** — *"[s]hoots or bats the puck outside of the playing area during a stoppage of play (when not done in protest of an official's decision or in the direction of a spectator)"* — and **the book does not say which of the two governs**, so read them as two clauses side by side rather than as a settled answer. **The parenthesis is the part that ends your game.** Rule 601(d)(7) makes it a **game misconduct** *"when done in protest of an official's decision"*, and 601(d)(9) does the same for a puck sent *"in the general direction of an on-ice official, or in the direction of a spectator during a stoppage of play"*; the Note to 601(d) reaches a **match penalty** where a player *"shoots the puck directly at an official or spectator in a manner that recklessly endangers"* them. Under USA Hockey Rule 404(b) a game misconduct is *"the suspension of a player or Team Official for the balance of the game"*, and the player *"shall also be suspended for the team's next game."* Rule 601(a)(4) prices the plainer version — *"[s]hoots the puck after the whistle, if in the opinion of the Official such shot was avoidable"* — as an unsportsmanlike minor, with its own escalation printed under 601(a): *"A misconduct penalty shall be assessed to any player who persists in such conduct and any further dispute by the same player shall result in a game misconduct penalty being assessed."* ⚠️ **Hockey Canada reaches the same place by a different road, and not the road you would look down.** Its delay-of-game rule could not carry an escalation — 10.1(d), *"No Misconduct penalty may be assessed for Delay of Game"*, and 10.1(e), the same for a Game Misconduct — so the book lists *"Shooting the puck out of the playing area, after the whistle"* among the acts of **Unsportsmanlike Conduct at Rule 11.1**, preamble item (v) — cited by its list because 11.1(d) carries a second roman-numeral list whose own item (v) is a different offence: a Minor or Bench Minor under 11.1(a), a **Misconduct** under 11.1(d)(i) for persisting after one, and a **Game Misconduct** under 11.1(e) for persisting after either — **though neither rung is gated on the one below it, because each carries a Note 1 saying so.** Note 1 to **11.1(d)** provides that *"[a] Referee is not required to assess a Minor penalty under this rule before assessing a Misconduct penalty, but may assess either penalty initially"*, and **Note 1 to 11.1(e)** lets a referee reach the Game Misconduct without the rungs below it, since *"[a] Referee is not required to assess a Minor or Misconduct penalty under this rule before assessing a Game Misconduct penalty, but may assess either penalty initially."* ⚠️ **What those Notes lift is the requirement that the lower penalty have been *assessed*, and not the conduct requirement itself.** Rule 11.1(d)(i) still reaches only a player who *"[p]ersists in Unsportsmanlike Conduct"*, and 11.1(e) only one who *"persists in Unsportsmanlike Conduct"* — so a referee may start at the misconduct or the game misconduct without walking you up the ladder, but persistence is still what they have to see. ⚠️ **Neither the NHL nor the IIHF writes any of that.** Their only puck-out-of-play offence is Rule 63.2, whose 63.2(ii) minor covers a puck put out *"during the play or after a stoppage of play"*; NHL Rule 63.9 lists *"Deliberately shooting the puck out of play"* among acts producing *"a penalty (minor, bench minor, penalty shot or awarded goal)"* with no misconduct in the list, and Rule 75, Unsportsmanlike Conduct, was read in full in both books for a puck limb and has none. **So the same act after the same whistle is two minutes in an NHL-rules or British game and can end your night in a USA Hockey or Hockey Canada one. Find out which book your league runs.**
- **When you're 6-on-5 or defending 6-on-5.** Both directions are catastrophic — recall that on **2007-08** pulled-goalie data the defending team took **84 penalties against the pulling team's 44** — roughly twice as many. That is a single season, and it is the split *between the two teams*, not a comparison with normal play.

### Frustration penalties

```facts
Action: Keep your feet moving — when your feet stop your stick starts reaching, and a stick used as a substitute for skating is what hooking and tripping calls are made of
Action: Give up the last word — USA Hockey's casebook has both players given a minor for a push and a push back, so answering costs you a minor whatever else happens
Risk: The extra minor against whoever started it is the part the casebook says officials often skip, so retaliating can leave you at a straight wash
Key: The casebook condemns that practice rather than endorsing it — it says the approach discredits the officials and creates more problems later in the game
Action: Have a reset — a breath at the faceoff dot, a tap of the pads, a look at the clock
Convention: That most amateur penalties are frustration-driven is coaching experience, not data — no published study in amateur hockey codes penalty motive against the preceding play
```

*This section carries the full treatment of what is and is not known about why amateur players take penalties; [Risk Management](../hockey-iq/risk_management.md#the-penalties-that-are-not-trades-at-all) sends you here for it. The claim below should never be quoted without the qualification attached to it.*

The standard coaching observation is that **the great majority of penalties in amateur hockey are frustration penalties**: retaliation, slashing after losing a battle, cross-checking after a whistle, arguing with an official. There is published data on youth-hockey penalties, and it partly supports this and partly does not. It is worth separating the two, because the coaching advice below survives either way.

**What the data does support.** Most penalties in youth hockey really are aggression-type infractions rather than obstruction fouls. Gilbert and Trudel coded gamesheets and video from **55 Bantam (14-15) games across five leagues, 850 penalties**, and found **an average of 15.5 penalties per game with "most penalties classified as minor aggression penalties (62.4%)"** — roughing, cross-checking, elbowing, slashing, as against the hooking-and-holding category. They also found that "the number of penalties tended to increase from the first period to the third period", which is at least consistent with accumulating frustration.

**What it does not support is the motive.** No study codes *why* a penalty was taken. "Minor aggression penalty" is a category of contact, not a category of intent: a clean, premeditated cross-check on a forechecker and a revenge slash after losing a board battle both land in it. Nobody has video-coded penalties against the preceding seconds of play for provocation, so the specific claim that most are *retaliation* has no measurement behind it. Two findings actively cut against it. McFaul and colleagues video-coded 249 verified head impacts across 48 U15 and U18 AA/AAA games and found **"most HC events (~68%) were the outcome of nonaggressive play and within the rules of the sport (~67%)"**. And Kirker, Tenenbaum and Mattson, observing ice hockey and basketball directly, found **"aggression was instrumental in nature two-thirds of the time"** — that is, goal-directed rather than hot-blooded. Note too that Gilbert and Trudel found **74.9% of penalties went to one player at a time**, whereas retaliation and post-whistle scrums tend to produce coincidental penalties in pairs.

There is also a nice piece of counter-evidence against the intuition that frustration needs a physical outlet: Régnier and colleagues, comparing 28 Pee Wee teams in a body-checking league against 21 in a league that banned it, reported that **"contrary to popular belief, playing without body-checking resulted in fewer 'hostile aggression penalties.'"**

**Where that leaves it.** Treat "most amateur penalties are aggression-type infractions" as measured; treat "most of them are frustration-driven" as coaching experience, not data. **And it cannot be settled either way:** no published study codes penalty motive in amateur hockey, so the frustration claim cannot be confirmed or refuted from evidence. What is not in doubt is that frustration penalties happen, that they buy you nothing, and that they mostly happen to players who have just been beaten and want to even the ledger.

Three practical habits:

1. **Keep your feet moving.** When your feet stop, your stick starts reaching — and a stick used as a substitute for skating is what hooking and tripping calls are made of. Treat discipline as partly a conditioning and effort problem in disguise.
2. **Give up the last word.** After a whistle, be the one who skates away — and do not assume the officials have seen who started it. USA Hockey's casebook takes exactly this case, a player pushed after a whistle who pushes back: *"In this instance, both players should be assessed minor penalties for roughing"* (USA Hockey Casebook, Standard of Play, Situation 25). So answering costs you a minor whatever else happens. The differential you would be relying on is the *extra* minor the book directs against whoever started it — *"the aggressor should be identified and assessed an additional minor penalty in order to hold them accountable for starting the situation"* (Casebook, Rule 640, Situation 2) — and that is the part the same passage says officials *often* skip, describing officials who *"[o]ftentimes … will only assess penalties after several warnings or after a player retaliates, in which case they go back and assess one minor penalty to each player"*. **The book condemns that practice in terms** — *"[t]his approach discredits the officials and will only create more problems later in the game"* — so do not read it as a description of how the game is normally called. But criticising a practice is not the same as it not happening: a minor apiece cancels the advantage you had just earned.
3. **Have a reset.** Something small and physical — a breath at the faceoff dot, a tap of the pads, a look at the clock. See [Mental Game](../off-the-ice/mental_game.md).

---

## Common Mistakes

- **Sitting on a lead from the second period.** Retreating is a late-game tool with a specific purpose. Deploying it early just hands over the game and guarantees you spend forty minutes in your own end.
- **Reading raw shot totals without adjusting for score.** Being outshot while winning is the normal, expected, well-documented consequence of leading. Being outshot in a tie game is the problem.
- **Changing while the puck is in your own zone and the other team has it.** A player leaves, a player arrives late off the bench, and for two seconds you are 4-on-5 in the most dangerous area of the rink. Coaches name it as one of the biggest sources of goals against in amateur hockey — an observation rather than a measured ranking. Public tracking does break goals down by how they were produced, but it is NHL data, and it classifies them by the play the offence made rather than by the defensive breakdown that let them in.
- **Long shifts because you feel fine.** You don't feel the drop in decision quality until after you've made the bad decision.
- **Letting your goaltender freeze a routine dump-in when your line is stuck out there.** Under **NHL and IIHF Rule 63.8**, a puck shot into your end from the attacking team's own side of the centre red line and then frozen by your goalkeeper bars *your* team from substituting before the draw, at a dot the attacking team chooses. ⚠️ **And that limb's exceptions are two rather than the icing rule's three** — an injured player and a strength-changing penalty, with **no pulled-goalkeeper exception**. It is a third route to a trapped bench and the one nobody warns the bench about. Neither USA Hockey nor Hockey Canada writes it (Hockey Canada's 6.1(g) reaches the dislodged net only, in U18 AAA, Junior and Senior at the Member's option).
- **Icing the puck to "get a whistle."** You get a whistle, a defensive-zone draw and five tired players, and under the NHL and the IIHF you also get no line change and no time-out. You've made it worse. ⚠️ **Neither half of that is universal, and the change half is not absolute.** USA Hockey's **Rule 624** attaches no substitution restriction to an icing and its **636(f)** no icing condition to the one 60-second time-out; Hockey Canada's **6.7(d)** applies the *"'no-change on icing' rule"* only *"[i]n categories of U18AAA, Junior, and at the option of the Member in Senior"* — and even there its **6.7(d)(iii)** still lets *"[e]ither team"* take the time-out, which the NHL and the IIHF do not. And where the bar does bind you it still lifts *"to replace an injured player"* (NHL 82.1, IIHF 81.4) — so a hurt teammate comes off the ice; a tired one does not.
- **Waiting until 1:00 to pull the goalie.** Every study for fifty years says this is too late, and the gap between practice and the analytics is still substantial.
- **Not knowing the delayed-penalty freebie exists.** A free extra attacker with no empty-net risk, wasted because the goalie didn't leave.
- **Shooting from anywhere in 3-on-3 overtime.** A shot that misses the net is a 3-on-2 the other way. If it isn't a genuine look, regroup.
- **Holding a loose puck in your own crease with your own net empty.** With a goalie behind you that is a penalty shot, and against a puck that was going in anyway it can be worth taking. With the net empty the NHL, the IIHF and Hockey Canada simply award the goal, and USA Hockey does too wherever the act prevented an obvious and imminent goal. Knock the puck straight down where you stand instead — and *straight down*: in IIHF Situation 67.6 a defender with his net empty caught the puck and dropped it **outside** the crease, and the ruling was an awarded goal anyway. ⚠️ **And do not read the catch as the whole rule.** NHL and IIHF **67.2(II)** reach a hand *"placed over the puck while it is on the ice in order to conceal it from or prevent an opponent from playing the puck"* — no catch at all — and the Note under that clause prices it in your own crease at the penalty shot or the awarded goal. **Neither of the other two books writes a concealment clause**, and neither of them makes the act free: knocking the puck down is the play under all four.
- **Going looking for a hit before finding out whether you may throw one.** Body checking is barred under USA Hockey **604(a)** at 12 & under and below, in all Girls'/Women's and all non-check Adult classifications, and under Hockey Canada **7.3** at U13 and below, throughout female hockey and in any Member-approved division. The IIHF book names no age, but in women's hockey it allows a bodycheck only *"when there is a clear intention of playing the puck or attempting to 'gain possession' of the puck"*, and subject to the exception the rule itself then sets out (**101.1**). Where it is barred, taking the body is a penalty before any late-hit question arises — take the ice instead.
- **Retaliating.** You turn their penalty into nothing, or their power play into your penalty kill.
- **Firing the puck away after the whistle, and assuming the worst case is two minutes.** It is two minutes under the NHL and the IIHF, whose only puck-out-of-play offence is Rule 63.2. **Under the other two books it is a ladder.** USA Hockey prints the same act as a minor at Rule 610(c) **and** a **misconduct** at Rule 601(c)(10) without saying which governs, and Rule 601(d)(7) makes it a **game misconduct** *"when done in protest of an official's decision"* — which is exactly the state of mind you are in when you do it. Hockey Canada could not put an escalation in its delay-of-game rule (10.1(d), *"No Misconduct penalty may be assessed for Delay of Game"*), so it lists *"Shooting the puck out of the playing area, after the whistle"* under **Unsportsmanlike Conduct at Rule 11.1, preamble item (v)**, laddering to a **Game Misconduct at 11.1(e)** that its Note 1 lets a referee reach without the rungs below it. Skate away and leave the puck where it is.
- **Playing your normal game down three with ten minutes left.** Being moderately aggressive late is worse than being very aggressive early.
- **Treating the time-out as a momentum spell.** The evidence doesn't support it. Treat it as rest and instruction at a moment of your choosing — and don't end the game with it unused, which is what happens in about 70% of games.
- **Assuming last change means anything in your league.** Many rec leagues don't run a formal change procedure at all. On the road at any level, your matchup tool is the change on the fly.

## Check yourself

*Answer each question before you go on — a real attempt, not a guess. Then go
and check, because the checking is the part that does the work. Producing an
answer and getting it wrong is worth more than recognising a right one, but only
when the right answer follows: the section named with each question, and the Key
Takeaways after them, are where you get it. Where the answer lives in another
document, that is named too.*

1. One-goal lead, four minutes left, you are pinned in your own end and you fire
   it the length of the ice to "get a whistle". List everything you have just
   handed the other team — and say which rule set would let you get away with it.
   *(§The icing trap)*

2. You have been on for fifty seconds, your legs are gone, and the puck is loose
   in your own zone with the other team pressing. Do you change? Give the answer
   and the reason, then name the moments when you *do* go. *(§When NOT to change)*

3. Your coach pulls the goalie with two and a half minutes left rather than one.
   What does the evidence say about that timing, what is the real cost you are
   accepting — and once your net is empty, what happens to the trade "take the
   penalty to stop the breakaway"? *(§Pulling the Goalie, §When a penalty is
   worth taking)*

4. The referee's arm goes up for a delayed penalty. What is free about the next
   few seconds, what is the one way you can still be scored on, and what exactly
   triggers the whistle? *(§The delayed-penalty freebie)*

5. You are defending against a pulled goalie and you shoot the puck the length
   of the ice. Is that icing? Give the answer, then say why "five skaters against
   six means we are below numerical strength" is the wrong reading — and what it
   costs you if you get it wrong. *(§Defending against 6-on-5)*

6. Three-on-three overtime, you have the puck in their zone and no good look.
   What do you do, and why is a shot that misses the net a worse outcome than
   not shooting at all? *(§Regular-season 3-on-3 (NHL))*

7. Someone tells you most amateur penalties are frustration penalties. Which
   half of that claim is actually measured and which is not — and does the
   practical advice change either way? *(§Frustration penalties)*

---

## Key Takeaways

1. **Trailing teams shoot more; leading teams shoot less.** It is the best-established score effect in hockey, and it distorts every raw statistic you will ever look at.
2. **Protecting a lead is an active job.** Manage the puck, take away the middle, shorten your shifts, win the defensive-zone draws. Passive is not the same as safe.
3. **Scale your risk to the clock and the deficit, not to your emotions.** Down three with ten minutes left, being aggressive early beats being aggressive late.
4. **Get the extra attacker on sooner than feels comfortable.** Every study for fifty years says coaches pull too late; on 2007-08 NHL data the 6-on-5 scores at power-play-like rates and draws penalties against the defending team **about two thirds more often than at 5-on-5** — every **7.4 to 7.9 minutes** rather than every **12.2 to 13.3 minutes**. *(The roughly-two-to-one figure sometimes quoted is a different comparison: 84 penalties on the defending team against 44 on the pulling team, in the same season's data.)*
5. **On a delayed penalty the extra attacker is free** — the offending team cannot score (NHL Rule 78.5(xi)) unless you put it into your own net, so the goalie goes at once and no blind passes cross your crease. Many rec leagues do not practise this; agree it beforehand.
6. **Last change is a stoppage tool only** — at home you match at whistles, on the road on the fly. NHL Rule 82.1 freezes only the team that iced the puck, so the other side's icing still hands you a matchup. Many rec leagues run no formal change procedure at all. ⚠️ **Icing is not the only thing that freezes a bench.** Under **NHL and IIHF Rule 63.8** your own team also cannot change where a defending skater or goalkeeper knocks the net off, or where your goalkeeper freezes a puck shot in from the attacking team's own side of the centre red line — and that second limb has **two** exceptions rather than three, with **no pulled-goalkeeper one**. Neither USA Hockey nor Hockey Canada writes it.
7. **A bad change concedes three things at once** — a numbers disadvantage, a hole where the departing player's job was, and a teammate joining the play blind. Never change when the other team has the puck in your zone, or when you are the last player back. After your own icing you cannot change — save to put back a goalkeeper who had been pulled for an extra attacker, to replace an injured player, or when a penalty has been assessed that affects on-ice strength (NHL Rule 82.1), to which the IIHF adds a player with a broken skate (Rule 81.4), though its own 82.1 covers icing as well and omits that fourth one, and a change the officials refuse costs a warning, or a bench minor if your bench has already had one (IIHF Rule 82.2(V)) — and you cannot take a time-out at all (NHL and IIHF Rule 87.1). USA Hockey imposes neither restriction, and **Hockey Canada is a third answer rather than a second**: its Rule 6.7(d) applies the no-change rule only *"[i]n categories of U18AAA, Junior, and at the option of the Member in Senior"*, and its 6.7(d)(iii) leaves *"[e]ither team"* the time-out that the NHL and the IIHF take away.
8. **3-on-3 overtime is a possession game, not a shooting gallery.** Regroup rather than force a shot, and change only with the puck. Under the IIHF book teams do not change ends, so waiting out a stranded defender is far less reliable — and in Britain most fixtures have no overtime at all.
9. **Take the penalty that prevents a certain goal; never the one that answers a slash — and once your goalie is pulled, take neither.** With the net empty those fouls are awarded goals rather than penalty shots (NHL Rules 25.1, 57.4, 67.5; IIHF 67.5 and Hockey Canada 10.2(a)(vi) for the crease one). ⚠️ **USA Hockey alone conditions the crease one**, awarding the goal only where the act *"has prevented an obvious and imminent goal"* (614(b)). ⚠️ **And the crease one is not only a puck you gathered in.** NHL and IIHF **67.2(II)** reach a hand simply *placed over* a puck on the ice to conceal it from an opponent, which their own Note prices inside your crease at the penalty shot or the awarded goal; **no other book here prints a concealment clause, and none of them makes the act free.** Knock the puck down where you stand. ⚠️ **And do not price an after-the-whistle foul as a power play at all under two of the four books.** A puck fired out of the rink after a whistle is a minor under the NHL and the IIHF, but USA Hockey writes it as a minor at 610(c) **and** a misconduct at 601(c)(10) without saying which governs, with a **game misconduct** at 601(d)(7) *"when done in protest of an official's decision"*; Hockey Canada ladders the same act from 11.1, preamble item (v) to a **Game Misconduct** at 11.1(e) — and the Note 1 to each of 11.1(d) and 11.1(e) lets a referee start at any rung, so the minor is not a step you are guaranteed first.
10. **After a goal against, play one deliberately simple shift** — win a puck, get it deep, take your man, change. Not "finish your check": hitting a player who has already given up the puck is a late hit, and USA Hockey's Declaration of Player Safety calls the concept "an unacceptable action". The named minor in Rule 640(b) is assessed "except Adult Male Classifications" — but Rule 640 Note 2 directs a roughing penalty with no classification exception, and 640(a) carries the tier — a reading rather than the book's words, since 640(a) points at Note 1 — so in adult men's hockey treat it as a penalty under a different number, not a free hit. **And two minutes is the floor, not the ceiling.** Under the NHL book 56.4 gives the Referee a discretionary major on the degree of violence, though its game misconduct, 56.5, arrives only *"for an infraction resulting in an injury of an opponent"*. The IIHF's 56.5 — which is the British one — reaches a major plus a game misconduct with nobody hurt, where the Referee judges the hit reckless endangerment **and** that a major alone would not sufficiently sanction the player, and USA Hockey's 640(g) reaches the same tier where the hit recklessly endangers an opponent, with 640(h) a match — though both reach only actions under 640(b, c, d, e or f), and 640(b) is the sub-section excepting adult men, so whether they reach a late hit there the book does not say. 602(a)'s match penalty is tied to no named foul at all and does not depend on the answer. **And none of that tier arises where you may not body check at all:** USA Hockey 604(a) bars it at 12 & under and below, in all Girls'/Women's and all non-check Adult classifications, and Hockey Canada 7.3 at U13 and below, throughout female hockey and in any Member-approved division; the IIHF book names no age, and nor do the In-House Rules, but in women's hockey it allows a bodycheck only *"when there is a clear intention of playing the puck or attempting to 'gain possession' of the puck"*, and subject to the exception the rule itself then sets out (101.1). Where checking is barred, take the ice rather than the body. Everything here that is not explicitly a rule is a coaching choice.

---

*Sources — retrieved 27 July 2026:*

*Rules: [NHL Official Rules 2025-2026](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) (**Rule 63.2(ii)**, the delay-of-game minor on a player who deliberately shoots or bats the puck outside the playing area *"during the play or after a stoppage of play"*, with **Rule 63.9**, the Delaying the Game infractions list — *"(i) Deliberately shooting the puck out of play"*, among acts producing *"a penalty (minor, bench minor, penalty shot or awarded goal)"*, **with no misconduct in the list** — and **Rule 75 Unsportsmanlike Conduct**, read in full 1 September 2026 across 75.2, 75.3, 75.4 and 75.5 for a puck-out-of-the-playing-area limb, **of which the NHL book has none**; **Rules 74.1 and 74.2**, read 31 August 2026 and re-read 2 September 2026 — 74.1's *"within five feet (5') of his players' bench and out of the play before the change is made"*, its two triggers, and its bar on retiring through *"any other exit leading from the rink"* (which NHL Rule 82.3 prints a second time, in the same words); ⚠️ **the NHL's trigger is narrower than the other books'** — it requires the act *"while both players involved in the substitution are on the ice"*, where IIHF 74.1 reaches *"either"* and USA Hockey 204(b) reaches the act *"while the retiring player is actually on the ice"*; **Rule 87.1**, whose request clock is only *"(prior to the drop of the puck)"*, against the IIHF's line-change clock quoted below; Rule 15 Calling of Penalties, Rule 19 Coincidental Penalties — including **Rule 19.4 Last Five Minutes and Overtime**, read 31 August 2026, which carries the same provision as IIHF 19.3 in materially the same words while reaching *"a major (or match) penalty"* and requiring the replacement player in the box *"prior to expiration of the penalty"* for a major and *"immediately"* for a match, Rule 1.7 Goal Crease — the crease area *"extending vertically four feet (4') to the level of the top of the goal frame"*, Rule 25 Awarded Goals — 25.1, Rule 57 Tripping — 57.3 penalty shot and 57.4 awarded goal, Rule 63 Delaying the Game, including **63.8**, which bars the offending team from substituting before the ensuing defending-zone draw where the net is *"displaced accidentally by a defending skater or goalkeeper"* and gives the attacking team the choice of dot — ⚠️ **and whose second paragraph, read 2 September 2026, does the same for *"the puck … shot into the end zone by the attacking team from their own side of the center red line"* and frozen by the goalkeeper, with only two exceptions rather than three: *"to replace an injured player, or when a penalty has been assessed which affects the on-ice strength of either team"*, and no pulled-goalkeeper one.** IIHF 63.8 was read in the 2025/26 v1.1 edition on the same day and carries both paragraphs in the same terms; USA Hockey has no counterpart, and Hockey Canada's **6.1(g)** covers the dislodged net alone, *"[i]n categories of U18 AAA, Junior and at the option of the Member in Senior"* — restated at **Rule 82.1** for *"[a] team that is in violation of Rule 63.8 – Delaying the Game or Rule 81 – Icing"* — and **63.6**, the operative rule that locates that penalty shot by *"the location of the puck at the time it was held, grabbed or gathered into the body"*, Rule 2.1, setting the goal posts *"extending vertically four feet (4') above the surface of the ice"*, Rule 67 Handling Puck — **67.2**, which permits the catch (*"A player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice"*) and assesses a minor at **(iii)** to a player who *"picks the puck up off the ice with his hand while play is in progress"* — and, read in full 2 September 2026, at **(ii)** to a player *"[i]f he places his hand over the puck while it is on the ice in order to conceal it from or prevent an opponent from playing the puck"*, with the NOTE printed under that clause: *"When this is done in his team's goal crease area, a penalty shot shall be assessed (67.4) or a goal awarded (67.5)"* ⚠️ **that concealment limb has no counterpart in the other three books read here** — the word *conceal* returns nothing in USA Hockey's playing rules or Casebook, in Hockey Canada's book or in CARHA's, and the operative rules were read in full in each (USA Hockey 618(a) and 614(b), Hockey Canada 10.2, CARHA 58 and 61), 67.4 penalty shot and 67.5 awarded goal, Rule 74 Too Many Men on the Ice, Rule 78 Goals, Rule 81 Icing including the major-penalty carve-out in 81.6, Rule 82 Line Changes, Rule 84 Overtime, Rule 87 Time-outs, and **Rule 63.2(iii)**, the defending-zone puck-out-of-play minor — *"except where there is no glass"*, with its NOTE exempting a puck shot into the players' bench and one out directly off a face-off, and its bench clause reading *"when the puck is shot over the glass 'behind' the players' bench, the penalty will be assessed"*; Reference Table 10, Summary of Awarded Goals) · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — **Rule 601 Abuse of Officials and Other Misconduct**, read in full 1 September 2026 for a puck put out of the playing area after a whistle — **601(a)(4)**, the unsportsmanlike minor for a player who *"[s]hoots the puck after the whistle, if in the opinion of the Official such shot was avoidable"*, with the escalation printed beneath 601(a), *"A misconduct penalty shall be assessed to any player who persists in such conduct and any further dispute by the same player shall result in a game misconduct penalty being assessed"*; **601(c)(10)**, the misconduct for a player who *"[s]hoots or bats the puck outside of the playing area during a stoppage of play (when not done in protest of an official's decision or in the direction of a spectator)"*; **601(d)(7)**, the game misconduct for the same act *"when done in protest of an official's decision"*; **601(d)(9)**, the game misconduct for a puck shot *"in the general direction of an on-ice official, or in the direction of a spectator during a stoppage of play"*; and the **Note to 601(d)**, the match penalty for a player who *"shoots the puck directly at an official or spectator in a manner that recklessly endangers the official or spectator"*. ⚠️ **Rule 601(c)(10) and Rule 610(c) both reach a puck put out during a stoppage, at different tiers, and USA Hockey does not say which governs** — Rule 601's opening Note gives only *"A minor penalty or misconduct penalty should be assessed for actions that occur on the playing surface or in the penalty bench area"*, and the Casebook's Rule 601 situations were read in full and none concerns a puck put out of the playing area. **Rule 610(c)**, the delay-of-game minor on *"any player or goalkeeper who delays the game by deliberately shooting or batting the puck outside the playing area, including after a stoppage of play"*; and **Rule 404(b)**, *"A 'GAME MISCONDUCT' penalty involves the suspension of a player or Team Official for the balance of the game with immediate substitution taking place on ice"*, the player *"shall also be suspended for the team's next game"* — with **Rule 404(a)** and its **Note**, under which a misconduct's length is *"10 minutes, or the designated misconduct penalty time"* and affiliates are authorised *"(Except for Adults)"* to reduce it, so no misconduct here should be read as a fixed ten minutes. **Rule 204(b)**, read 31 August 2026, which writes no distance at all — *"shall always be at the players' bench and out of the play before any change is made"* — and adds a trigger the other three books do not have, *"or causes their team to gain a competitive advantage"*; Rule 624(b)(1), the classification restriction on the shorthanded icing exemption; **Rule 604 Body Checking**, read 31 August 2026 — **604(a)**, *"Body checking is prohibited in the 12 & under youth age classifications and below, all Girls'/Women's age classifications and all non-check Adult classifications"*, which the same sub-section follows with *"A local governing body may prohibit body checking in any classification"*, read with **604(c)**, the minor for a body check *"in a Competitive Contact category"*, **604(d)**, the major plus game misconduct for a player who *"recklessly endangers an opponent with a body check"* there, and **604(e)**, the match penalty; Rule 640 Unnecessary Roughness (Roughing), including Note 2, the roughing minor in 640(a), and the *"(except Adult Male Classifications)"* wording in 640(b); **Rule 640(g)**, *"A major plus a game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of any actions falling under Rule 640(b, c, d, e or f)"*, and **Rule 640(h)**, *"A match penalty for reckless endangerment may also be assessed under sub-sections (b), (c), (d), (e) or (f) of this rule"* — ⚠️ **note the scope of those sub-sections**: 640(b), the late hit, is written *"(except Adult Male Classifications)"*, while (d) and (e) carry no such limit, and whether 640(g) reaches a late hit in a classification where (b) is not assessed is **not stated in the book and was not resolved here**; **Rule 602(a)**, which does not turn on it — *"A match penalty shall be assessed to any player or team official who recklessly endangers or attempts to injure any opposing player or team official"*, tied to no named foul; the *Declaration of Player Safety, Fair Play & Respect* (sub-heading *Late Avoidable Body Check*), source for *"The concept of 'finishing the check' is an unacceptable action"* and for the Declaration's own scope, *"acceptable/unacceptable body checking and competitive contact at all levels of play"* — ⚠️ **Do not look for that quotation in the *Standard of Play and Rule Emphasis – Body Checking* section; it is not there.** It is the Declaration's, and the Glossary repeats that sentence verbatim under *"Late Body Check"* — though only that sentence: the entry around it is worded differently, ending *"no intent, or possibility, to gain possession of the puck"* where the Declaration ends *"no intent to gain possession of the puck"*. The Standard of Play section reaches the same act in different words, listing under its **ROUGHING** heading *"Delivering a late check to a player who has already relinquished control of the puck by a pass or shot. This is oftentimes referred to as 'finishing' the check"*; and, in the separate [USA Hockey Official Rules and Casebook 2025-29 (PDF)](https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf), **Rule 204, Situation 8**, read 31 August 2026, which penalises a change where neither player played the puck or made contact because *"Team A gained a territorial or positional advantage as a result of the change"*; **Rule 640, Situation 2**, on how scrums after the whistle are actually officiated — the direction that *"the aggressor should be identified and assessed an additional minor penalty in order to hold them accountable for starting the situation"*, set against the practice the same passage criticises, *"Oftentimes, officials will only assess penalties after several warnings or after a player retaliates, in which case they go back and assess one minor penalty to each player… This approach discredits the officials"*; **Standard of Play, Situation 25**, which answers the push-and-push-back case directly — *"In this instance, both players should be assessed minor penalties for roughing"*; and **Rule 614(b)** (the penalty shot / optional minor for covering the puck, and the moment of judgement — *"the decision as to whether the puck is in the crease is made at the moment the infraction occurs"*, and the empty-net clause that follows, awarding the goal only where the goalkeeper was off the ice *"and the action under this rule has prevented an obvious and imminent goal"* — the one book of the four to condition that upgrade, against the bare substitution of NHL and IIHF 67.5 and Hockey Canada 10.2(a)(vi)) and **Rule 618(a)**, under which a hand closed **outside the crease** that does not open immediately is not a penalty at all — *"Play shall be stopped and a last play face-off shall occur any time a player (except the goalkeeper) closes their hand on the puck and does not immediately drop the puck to the ice"* ⚠️ **That exemption is for a hand *closed* on the puck outside the crease.** 618(a)'s **second** paragraph assesses a minor to *"any player, other than the goalkeeper, who picks the puck up from the ice with their hand(s) while play is in progress"*, which NHL and IIHF 67.2(iii) match. A hand closed on a puck that is *in* the crease is the penalty shot or optional minor under 614(b) and 618(a)'s own third paragraph — and which also carries the book's plainest puck wording — *"picks the puck up off the ice with their hand or holds the puck while play is in progress and the puck is in the goal crease"* — with the Note that *"the goal crease shall extend from the ice to the top of the crossbar of the goal frame"*. ⚠️ **The volume's Casebook half carries the express permission its playing rules do not print** — **Rule 618, Situation 1**, answering that *"[t]he motion of catching, then dropping the puck, must be virtually one continuous motion"* and that *"[p]rovided the player catches the puck and drops it to their stick in one continuous motion, play should be allowed to continue"*: a casebook interpretation, not rule text. Read with **Rule 406(a)**, under which *"the non-offending team may, prior to the penalty shot, elect that the minor or bench minor penalty be assessed to the offending player or team in lieu of the penalty shot"* and *"If the penalty shot is selected, the offending team shall not be reduced in on-ice strength"*; and, on the puck out of play, **Rule 610(c)**, which reaches only a player who *"delays the game by deliberately shooting or batting the puck outside the playing area, including after a stoppage of play"* and writes no defending-zone strict-liability limb, read with **Rule 631(d)**, under which *"if the puck is accidentally shot or deflected out of play, or onto the goal netting, a last play face-off will occur in the zone where the puck was shot or the deflection occurred"* · [IIHF Official Rulebook 2025/26 (Version 1.1, July 2025)](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf) — **Rule 74.1**, read 31 August 2026 and re-read 2 September 2026: *"within 1.50m of their Players' bench and out of the play before the change is made"*, the same measurement as the NHL's five feet, with the same *"any other exit"* bar — ⚠️ **but not the same trigger**: the IIHF reaches a puck played *"with their stick, skates or hands"* or contact made *"while either the Player entering the game or the retiring Player is actually on the ice"*, where the NHL requires **both** on the ice, and the IIHF adds that a retiring player *"who has one skate on the ice and one skate off the ice in the Players' bench is considered as 'off the ice'"*; **Rule 87.1**, read in full 2 September 2026 — the same three exclusions as the NHL's in the same words, **plus one sentence the NHL has no counterpart to**: *"The 'time-out' must be requested by the team before the Referee has completed the Players change procedure, before the Referee lowers his hand and points to the respecting face-off location"*. **Both of those IIHF findings — 74.1's wider trigger and 87.1's line-change clock — were checked in the 2025/26 v1.1 and 2026/27 editions on 2 September 2026 and are word for word the same in both;** **Rule 19.1** and **Rule 19.3 *"Last Five Minutes and Overtime"***, read 31 August 2026, with **Appendix IV, Table 15, example 19**, the book's own worked answer on a minor against a major; **Rule 101.1**, read 31 August 2026, under which in Women's Hockey *"bodychecking" is allowed when there is a clear intention of playing the puck or attempting to "gain possession" of the puck with the exception from the situation described in this rule* — the permission carries both limbs, and *"the situation"* is the book's own singular, so the excepted situations are not enumerated here — an illegal hit under it being assessed as *"(I) Minor penalty (2') (II) Major penalty (5') and automatic game misconduct penalty"*; **Rule 56.5**, read 30 August 2026 and quoted in full here because it carries two conditions rather than one: *"The Referee, at their discretion, may assess a major penalty and a game misconduct penalty if, in their judgment, the Player recklessly endangers their opponent by an 'interference or a late-hit' and the Player would not be sufficiently sanctioned by imposing a major penalty. Such assessment of reckless endangerment shall be based on the severity of the infraction, severity of the contact, the degree of violence and the general reprehensibility involved."* ⚠️ **Neither condition is an injury**, which is where it parts from NHL 56.5 (*"When a major penalty is imposed under this rule for an infraction resulting in an injury of an opponent, a game misconduct shall be imposed"*, also read 30 August 2026); **Rule 67.2**, whose permission sentence is the NHL's word for word but for the capitalised *"Player"*, and whose (III) matches the NHL's (iii), **Rule 63.6**, whose *"significant factor"* sentence is likewise the NHL's word for word but for the IIHF's capitalised and quoted *"Penalty Shot"*, and which elsewhere writes *"goal crease"* for *"crease"* and full clauses where the NHL's are elliptical, while IIHF 67.4 has no operative text of its own, reading only *"This rule is described under"* and pointing to Rule 63.6, Rule 1.7, under which the Goal Crease Area *"extends vertically until the top of the crossbar"*, and **Rule 63.2(III)**, which carries the NHL's defending-zone puck-out-of-play minor in the same terms — its carve-out reading *"except where there is no protective glass"* where the NHL's reads *"no glass"*, and its bench clause *"when the puck is shot over the protective glass surrounding the Players' bench, the penalty will be assessed"* where the NHL's reads *"behind"*; verified unchanged in the [IIHF Official Rule Book 2026/27 (Version 1.0, June 2026)](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/rule%20book/2026-27_iihf_rule_book.pdf), in which **Rule 19.3 and Table 13, example 19** — the 2026/27 numbering of Table 15 — and **Rule 101.1** were also read, on 31 August 2026, and in which **Rule 63.2** and **Rule 75 Unsportsmanlike Conduct** were read in full on 1 September 2026 for a puck-out-of-the-playing-area limb above a minor, **of which the IIHF book has none** — its 75.4(II) misconduct reaches *"any equipment"* rather than the puck — and found word for word the same; nothing else in that edition was read for this document · [IIHF Situation Handbook 2025/26 (Version 1.1, August 2025)](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) — **Situation 84.10**, the IIHF's own worked answer on two coincidental roughing minors (*"Since the penalties are coincidental, the penalties are not served on the clock and the teams are playing 5 – 5"*, citing Rules 19.1 and 84.3), read 30 August 2026 and word for word the same in the 2026/27 Handbook; Situation 63.27, a puck caught above the crossbar being *"not considered to be in the crease. Therefore, only a minor penalty is warranted"*, against Situations 63.15 and 67.4, where a puck taken knee high in the crease is a penalty shot; and **Situation 67.6**, where a defender with his own net empty grabs the puck *"out of mid-air (around the height of the waist)"* and *"drops the puck outside the crease"*, ruled *"an Awarded Goal to Team B"*; and **Situation 63.24**, on the bench, which still assesses the minor where a clear goes over the glass and lands in the Players' Bench — *"the determining factor when deciding whether a delay of game penalty is to be assessed, is where the puck leaves the playing surface"*, judged on *"an imaginary plane that continues upwards to the roof from the top of the glass"*, exempting only a puck *"shot directly into the Players' Bench (where there is no glass)"* — read in the same words in the [IIHF Situation Handbook 2026/27](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2026-27_iihf_situation_handbook.pdf), which was read for that situation and for Situation 84.10 above, and nothing else. Its Foreword places it below the Rulebook: *"in case of any contradictions, the valid IIHF Rulebook is always the basis"* · [Hockey Canada Playing Rules 2026-2028 (PDF)](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) — **Rule 11.1 Unsportsmanlike Conduct**, read in full 1 September 2026 — its preamble list, item **(v)**, *"Shooting the puck out of the playing area, after the whistle"*, and item **(iv)**, *"Shooting the puck at or near the goal after the whistle"* (cited by the list, because 11.1(d) carries a second roman-numeral list whose own item (v) is a different offence), with **11.1(a)** a Minor or Bench Minor, **11.1(b)** and **(c)** barring a Major and a Match, **11.1(d)(i)** a Misconduct for a player who *"[p]ersists in Unsportsmanlike Conduct, after receiving a Minor penalty under Rule 11.1 (a)"* — whose own **Note 1** adds that *"[a] Referee is not required to assess a Minor penalty under this rule before assessing a Misconduct penalty, but may assess either penalty initially"* — and **11.1(e)** a Game Misconduct for persisting after either, whose **Note 1** adds that *"[a] Referee is not required to assess a Minor or Misconduct penalty under this rule before assessing a Game Misconduct penalty, but may assess either penalty initially"*; with **Rule 10.1(d)**, *"No Misconduct penalty may be assessed for Delay of Game"*, and **10.1(e)**, the same for a Game Misconduct, which is why that escalation is not in Rule 10.1; **Rule 6.7 Icing the Puck**, read in full 2 September 2026 — **6.7(d)**, whose *"'no-change on icing' rule"* applies only *"[i]n categories of U18AAA, Junior, and at the option of the Member in Senior"*, with **6.1(f)** pointing at it in the same terms; its **6.7(d)(i)** exceptions are the NHL's three word for word and its **6.7(d)(ii)** determination test is the NHL's; and **6.7(d)(iii)**, which the NHL and the IIHF have no counterpart to — *"Either team is permitted to take their time-out, as per Rule 6.18 – Time of Game, following an icing, but during that time out, the team in violation of icing will not be permitted to make player substitutions."* **6.7(e)**, hybrid icing, carries the same category scope, so below U18AAA neither the no-change rule nor hybrid icing is in force; **Rule 6.1(a)**, read 31 August 2026: the player leaving *"will be at the Players' Bench (within 3.05m (10 ft.)) and out of play before any change is made"*, penalised under **Rule 10.7(a)**; **Rule 7.3 Body-Checking**, read 31 August 2026, which *"applies only in divisions of U13 and below, in female hockey, and any other divisions approved by a Member of Hockey Canada"*, its **7.3(a)** a minor for a player who *"intentionally body-checks, bumps, shoves, or pushes any opposing player"* in those divisions, against the rule's own exception for *"incidental contact of two opposing players in pursuit of the puck on the ice in the same direction"*, where *"no penalty will be assessed"*; **Rule 8.3(b) and (c)**, read 30 August 2026: (b) allows a major plus a game misconduct *"at the discretion of the Referee, based on the degree of violence of the impact"* and makes that tier mandatory for a player *"who injures an opponent by an interference infraction that would otherwise call for a Minor penalty"*, and (c) is *"A Match penalty ... to any player who attempts to injure or deliberately injures an opponent by interference"*; the **Rule 10.2 preamble**, permitting a player *"to stop, knock down, or push the puck with their hand"*, and **Interpretation 4 to 10.2(a)(iii)**, listing the three acts that do produce the minor (throwing it, manoeuvring around a player while holding it, taking a stride with it); **Rule 10.2(a)(iii)–(vi)**, whose hand limb excludes *"a player who closes their hand on the puck to catch or stop the puck and immediately drops it to the ice without gaining or attempting to gain an advantage"*, and which splits the offence into a hand limb (iii) and a body limb (iv), *"Deliberately falls on or gathers the puck into their body"*, and escalates **both** to a penalty shot at (v) *"when the infraction occurs inside the offending team's goal crease (see Rule 4.11 (a)(v) – Penalty Shots and Rule 1.5 (c) – Goal Crease)"* and to an awarded goal at (vi) with the goaltender substituted; **Rule 4.11(a)(v)**, which reaches the hand only — a defending player who *"picks up the puck from the ice with their hand while the puck is in the goal crease"*; the **Rule 4.11 preamble**, making a penalty shot *"a non-time penalty, which is awarded to the non-offending team, in lieu of a Minor Penalty"*; **Rule 10.2(b)**, *"No Major penalty may be assessed for a handling the puck infraction"*; **Rule 1.5(c)**, defining the crease as a space that *"will extend vertically to the level of the top of the goal frame"*; and **Interpretation 5 to Rule 10.2(a)(v)**, whose ruling is on the **body** limb — *"Assess a Minor penalty under Rule 10.2 (a)(iv)"* — reasoning that *"The puck was not actually covered in the crease; therefore, no penalty shot may be awarded"*, though in its facts the player and the puck are both outside the crease at the moment of the cover; and, on the puck out of play, **Rule 10.1(ii)**, reaching *"a player who deliberately shoots, bats, or throws the puck outside the playing surface"* with no zone limit, against **Rule 10.1(v)**, the direct limb that writes no deliberateness word — *"a goaltender who shoots or bats the puck directly out of the playing surface, with their stick"* — Hockey Canada writing no defending-zone strict-liability limb anywhere in Rule 10.1, for skater or goaltender · [NHL Rulebook index — Scouting The Refs](https://scoutingtherefs.com/nhl-rules/) · [Icing (ice hockey) — Wikipedia](https://en.wikipedia.org/wiki/Icing_(ice_hockey)) · [What are NHL overtime rules? — ESPN](https://www.espn.com/nhl/story/_/id/39345002/what-nhl-rules) · [Getting to Know the NHL Rulebook: Coincidental Penalties — Winging It In Motown](https://www.wingingitinmotown.com/getting-to-know-the-nhl-rulebook-coincidental-penalties/)*

*Score effects and analytics: [Analytics (ice hockey) — Wikipedia](https://en.wikipedia.org/wiki/Analytics_(ice_hockey)) — also the source for the second of the two zone-start formulas above, *"offensive zone starts / (offensive + defensive zone starts)"*, which that article attributes in turn to an NHL club piece not obtained here · [Evolving Hockey — Standard Skater Tables glossary](https://evolving-hockey.com/glossary/standard-skater-tables/) — rendered page read 2 September 2026; source for the first, printed there as *"OZS% · Percentage of zone starts in the offensive zone: OZS / (OZS + NZS + DZS + OTF)"*, and for **OTF**, defined on the same table as *"On-the-fly zone starts"*, which is what puts every shift into that denominator. The draws-only version referred to above is **OZF%** on the same table, *"Percentage of on-ice faceoffs in the offensive zone: OZF / (OZF + NZF + DZF)"* ⚠️ **Two published definitions were obtained and no more.** Natural Stat Trick's glossary returned **HTTP 403** to every attempt on 2 September 2026 and was not read, so nothing above should be taken as a survey of what every site does — only as evidence that at least two published definitions differ, and by a wide margin. The share of shifts that begin as changes on the fly is [How To Watch Hockey](../off-the-ice/how_to_watch_hockey.md)'s, with its limits · [The Casual Critic's Complete Guide to Hockey Analytics — Defending Big D](https://www.defendingbigd.com/nhl-guide-to-hockey-analytics-advanced-stats-corsi-expected-goals-war/) · [Advanced Hockey Analytics: A Primer — Tech Hockey Guide](https://techhockeyguide.com/2022/10/17/advanced-hockey-analytics-a-primer/)*

*Pulling the goalie: [Beaudoin, D. & Swartz, T. B., "Strategies for Pulling the Goalie in Hockey" — Simon Fraser University](https://www.sfu.ca/~tswartz/papers/goalie.pdf) · [The State of Goalie Pulling in the NHL — Hockey Graphs](https://hockey-graphs.com/2020/05/18/the-state-of-goalie-pulling-in-the-nhl/) · [When to Pull the Goalie: Running the Numbers on NHL Goalie Pulls — Alex Galea](https://galea.medium.com/when-to-pull-the-goalie-running-the-numbers-on-nhl-goalie-pulls-9fad2a6caceb) · [Here's why the Kraken and other NHL teams are pulling goalies earlier — The Spokesman-Review](https://www.spokesman.com/stories/2022/jun/21/heres-why-the-kraken-and-other-nhl-teams-are-pulli/)*

*6-on-5 goal composition: [NHL public play-by-play feed](https://api-web.nhle.com/v1/gamecenter/2024020001/play-by-play) — games 2024020001–2024020400 of the 2024-25 regular season. 74 goals scored with the extra attacker on, of which 29.7% were a tip-in, a deflection or a shot within three seconds of a previous shot on goal, against 23.4% of 1,585 5-on-5 goals. Derived from the shot types and event timestamps in that feed, not published statistics; the 74-goal sample is small. The feed carries no marker for a screen, so that third of the coaching claim remains uncheckable.*

*Line matching, home ice and time-outs: [Is there really a home-ice advantage in the NHL? — Sound Of Hockey](https://soundofhockey.com/2025/02/02/is-there-really-a-home-ice-advantage-in-the-nhl/) · [Quantifying the Value of an NHL Timeout using Survival Analysis — Hockey Graphs](https://hockey-graphs.com/2020/05/28/quantifying-the-value-of-an-nhl-timeout-using-survival-analysis-part-1/)*

*Defence pairs and handedness: [Shot Location Data and Strategy I: Off-Hand Defencemen — puck++](https://puckplusplus.com/2014/11/11/shot-location-data-and-strategy-i-off-hand-defencemen/) · [Do defensemen play worse on their off-hand? — puck++](https://puckplusplus.com/2013/09/21/do-defensemen-play-worse-on-their-off-hand/) · [The Impact of Handedness on Defensemen — All Mighty Hockey Talk](https://allmightyhockeytalk.com/2024/07/24/the-impact-of-handedness-on-defensemen/) — **do not follow this one.** Re-checked 22 August 2026: the domain resolves, but the page now serves a redirect to an affiliate tracker rather than the article. Kept for the record; nothing here rests on it alone, and the two puck++ posts above carry the handedness material.*

*Overtime strategy: [NHL Coaches' Room: Overtime success can be difference between making, missing playoffs — NHL.com](https://www.nhl.com/news/nhl-coaches-room-overtime-success-303255732) · [NHL: The Strategy in 3-on-3 Overtime Has Evolved — The Hockey Writers](https://thehockeywriters.com/nhl-overtime-3-on-3-strategy-has-evolved/) · [From chaos to control, NHLers reflect on evolution of 3-on-3 overtime — CBC Sports](https://www.cbc.ca/sports/hockey/nhl/nhl-notebook-3on3-zub-ducks-1.6693732)*

*Rule-set comparison: [IIHF Official Rule Book 2025/26](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf) — Rule 8.2 (Injured Goalkeeper, whose last sentence is what carries the no-warm-up point across from the NHL book: *"No warm-up shall be permitted for a substitute goalkeeper in any game"* — the IIHF book writes no warm-up provision into Rule 84.4 itself, read by line range on 1 September 2026), Rule 81.2 (attacking team's choice of end-zone dot after an icing), Rule 81.4 (Line Change on Icing — the same bar as NHL 82.1 plus the additional exception for "a Player with a broken skate"; ⚠️ **the fourth exception is written in one of the two IIHF rules that govern an icing and not the other, with nothing in either edition saying which governs** — the same book's Rule 82.1 bars substitutions for a team *"in violation of ➔ Rule 63.8 – Delaying the Game or ➔ Rule 81 – Icing"* and lists only the NHL's three, read against the 2025/26 v1.1 and 2026/27 texts on 29 August 2026, both of which print both lists), Rule 82.1 (Line Change — visiting team first, and the same three substitution exceptions as the NHL), Rule 84 (Overtime Operations, 84.1–84.6, including 84.2's single permissive sentence on the overtime pull and 84.4's five different shooters, captains' coin toss, changeable goalkeepers and repeat tie-break shooters) and Rule 87.1 (Time-outs — the same 30-second allowance and the same icing, face-off-violation, goalie-freeze, dislodged-net and penalty-shot exclusions as NHL Rule 87.1), all quoted from the rulebook text · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — Rule 636(f), read 31 August 2026, which gives one 60-second time-out and attaches no icing condition to it, only the general promptness limb — *"Time-outs must be requested during a stoppage of play prior to the conclusion of the line change procedure"* — which binds at every stoppage rather than after an icing.*

*The British position: [IHUK In-House Rules 2025-26, Revision 1](https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf) and [IHUK In-House Rules 2026-27, Revision 1, published 25 July 2026](https://englandicehockey.com/wp-content/uploads/2026/08/IHUK-In-House-Rules-2026-2027.pdf) — Section 10, Rule 84 (overtime played only in NIHL fixtures and in SNL fixtures whose competition regulations provide for it — the same sentence in both editions) and Appendix 1 (the NIHL, NIHL 1 & 2, NIHL Playoff Final Weekend, SNL and BUIHA Varsity overtime and game-winning-shots procedures quoted above). ⚠️ **The comparison this trailer previously flagged as outstanding has now been run, and it found a change.** The two Appendix 1s were extracted, whitespace-flattened and diffed unit by unit on 1 September 2026 — 68 units in each edition — and they carry **one substantive rule difference**: the NIHL 1 & 2 game-winning-shots eligibility clause quoted above, which reversed. The only other differences are a line-break artefact (*"5-on-5"* against *"5- on-5"*), a missing full stop that merges two bullets in the 2026-27 text, and the rebrand of *"EIH Rules of Competition"* to *"IHUK Rules of Competition"*. The 2025-26 sentence *"All eligible players (except those serving penalties or injured) must shoot before any player can take a second attempt"* does not survive into the 2026-27 edition in any form — the whole document was searched whitespace-flattened for "must shoot", "before any player", "second attempt" and "all eligible players", and each returns zero. ⚠️ **This document therefore quotes both editions and says which season each governs, rather than repinning the corpus's British layer — and it does not need to**, because the 2026-27 In-House Rules themselves adopt the **2025/26** IIHF book: their Introduction names *"the latest IIHF Official Rule Book (Version 1.1, published July 2025)"*. ⚠️ **Their cover disagrees with their own Introduction**, saying the regulations *"are to be read and applied in conjunction with the Current IIHF Rule Book"*; this document follows the Introduction's named version. The 2026-27 edition also widens the document's scope, from *"England and Scotland"* to *"England, Wales, Scotland and Northern Ireland (the Home Countries)"*, and moves the governing body to Ice Hockey UK Limited (IHUK). ⚠️ **Neither edition covers the professional Elite League** — flattened searches of the 2026-27 document for "EIHL" and "Elite" both return zero — so nothing here should be read as governing it. IHUK and the BUIHA (England Ice Hockey and the SIHA under the 2025-26 edition) adopt the IIHF Rule Book as their foundation and amend it, and the In-House Rules make their own silence operative: both editions say *"Unless otherwise stated, all rules will be enforced in line with the IIHF Rule Book."* **Neither edition amends Rule 81 (Icing), Rule 82 (Line Changes, including 82.2 and 82.3) or Rule 87 (Time-outs)** — a checked negative rather than an inference from a contents list: both In-House editions and England Ice Hockey’s *Rules & Regulations* were searched whitespace-flattened and de-hyphenated on 29 August 2026 for "Rule 81", "Rule 82", "Rule 87", "line change" and "time-out", and none of the five occurs in any of the three documents; the only rule numbers above 80 that any of them mentions are Rules 84 and 85, and the 2026-27 book’s *Section 10 – Game Flow* carries Rules 76, 78, 84 and 85 and nothing else. So the IIHF text governs icing, line changes and time-outs in Britain — and **which IIHF edition sits underneath does not bite here**, because Rules 81.4, 82.1, 82.2 and 82.3 are word-for-word identical in the 2025/26 v1.1 and 2026/27 books, both read on 29 August 2026. **Nor does either In-House edition name an age at which body checking becomes legal** — searched flattened on 31 August 2026; its Section 11 amends Rule 101 for Women's Ice Hockey without setting one, so IIHF Rule 101.1 is what a British player has. See [UK and England Rules](../foundation/uk_rules.md).*

*Penalties in amateur hockey: [Gilbert, W.D. & Trudel, P., "A Profile of Rule Infractions in Bantam Level Ice Hockey", in *Safety in Ice Hockey: Third Volume*, ASTM STP 1341 (2000)](https://doi.org/10.1520/STP15246S) — 55 games, five leagues, 850 penalties; 15.5 penalties per game; 62.4% minor aggression penalties; 74.9% assessed to one player at a time · [McFaul, C.S. et al., "Analyzing the Relationship Between Aggression, Rule Violations, and Head Contact Events in Canadian Competitive Minor Bodychecking Hockey", *Sports Health* 18(4):738-746 (2026)](https://doi.org/10.1177/19417381251415412) — 249 verified head impacts, 48 U15/U18 AA/AAA games; ~68% nonaggressive, ~67% within the rules · [Kirker, B., Tenenbaum, G. & Mattson, J., "An Investigation of the Dynamics of Aggression: Direct Observations in Ice Hockey and Basketball", *Research Quarterly for Exercise and Sport* 71(4):373-386 (2000)](https://doi.org/10.1080/02701367.2000.10608920) — aggression instrumental two-thirds of the time · [Régnier, G. et al., "Effects of Body-Checking in the Pee-Wee (12 and 13 Years Old) Division in the Province of Quebec", in *Safety in Ice Hockey*, ASTM STP 1050 (1989)](https://doi.org/10.1520/STP24041S) — 49 teams; playing without body-checking produced fewer hostile aggression penalties*

*Not established: the claim that most amateur penalties are **frustration-driven** specifically. Penalty-type data exists and is cited above, but no published study in amateur hockey codes penalty **motive** — establishing that would require video-coding each penalty against the preceding play for provocation, which nobody has done. The motive claim is presented as coaching experience rather than measured fact, and two adjacent findings (McFaul 2026, Kirker 2000) point the other way.*

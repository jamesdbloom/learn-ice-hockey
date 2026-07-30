# Game Management

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline. **Playing in Britain? The IIHF
> flags are yours** — every level of UK hockey runs the IIHF book, amended locally; see
> [UK and England Rules](../foundation/uk_rules.md). Read **Overtime** and **Shootouts** below before
> you rely on anything in them: those are the sections where the British position differs most, and
> outside NIHL and some SNL fixtures there is no overtime in England or Scotland at all.
>
> **Related:** [UK and England Rules](../foundation/uk_rules.md) · [Risk Management](../hockey-iq/risk_management.md) · [Special Teams](special_teams.md) · [Neutral Zone Systems](neutral_zone_systems.md) · [Defending the Rush](defending_the_rush.md) · [Faceoffs](faceoffs.md) · [Mental Game](../off-the-ice/mental_game.md) · [How To Watch Hockey](../off-the-ice/how_to_watch_hockey.md)

## Overview

Every other document in this project tells you what your job is. This one tells you how that job changes depending on the score, the clock and who is on the ice with you. A 2-1 lead with four minutes left is a different sport from a 2-1 lead in the first period, and the player who knows the difference is worth more than the player who only knows their assignments.

**Game management** is the layer above systems: reading the situation and adjusting the *risk* you take, the *speed* you play at, and the *decisions* you make, without abandoning the structure your team plays. Almost none of it is written in the rulebook. Almost all of it is decided in the two seconds before you touch the puck.

Two warnings before you start. First, everything in this document that is not explicitly a rule is a **coaching choice** — teams differ, and yours may want something different. Second, the biggest game-management errors in amateur hockey are not exotic. They are changing at the wrong moment, taking a lazy penalty, and sitting back on a lead an hour too early.

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

**⚠️ Treat the attack-type argument with real suspicion — it is dressed as research it cannot name.** The claim is that "analysis of shot quality by attack type has found" that cycle attacks produce better shot quality for trailing teams while rush attacks produce better results for leading teams, and that the pattern reverses with the game state. **No study, dataset or author is attached to it anywhere**, and none of the sources below carry it. It stands here only as **an untraced assertion, not evidence** — do not restate it as a finding, and do not build a plan on it. The rest of this section stands on its own reasoning without it, and the practical conclusion it is usually used to support — that when you are ahead your best offence is the counter-attack off a turnover, which requires you to be organised and *fast* rather than passive — is coaching craft either way.

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
Rule: Shooting the puck directly out of play from your own defending zone is a two-minute delay-of-game minor, with no pressure exception (NHL Rule 63.2(iii))
Rule: USA Hockey has no equivalent — Rule 610(c) penalises only a deliberate shoot-out, and 631(d) makes an accidental one a last-play faceoff
Action: Take away the middle — concede the outside, keep your stick in the passing lane, defend with your feet
Action: Shorten your shifts to 30-35 seconds; fresh legs defend, tired legs reach
Priority: Win the defensive-zone draws, and have a plan for losing the draw as well as winning it
Convention: Which forecheck your team switches to with a lead — 2-1-2, 1-2-2 or 1-1-3 — is a system choice, so find out yours
```

**1. Manage the puck.** The single biggest lever. With a lead, the value of a possession is not "can I create a chance" but "can I make sure they don't get it back in a dangerous place." That means:

- No cross-ice passes through the middle of your own zone or the neutral zone. A turnover there becomes an **odd-man rush** — attackers outnumbering defenders coming back, a 2-on-1 or 3-on-2. Coaches and analysts treat these as the most dangerous chances in open play, and there **is** published tracking behind that — [Defending the Rush](defending_the_rush.md) owns it and carries both halves: Sportlogiq data covering every NHL game from 2017-18 to 2020-21 puts an ordinary shot at an **8.15% chance of becoming a goal** and says that once an attacking team has an extra skater that likelihood *"almost triples"*, while Tulsky and colleagues found odd-man rushes are **under 3% of all 5-on-5 zone entries** and worth 0.78 shots per entry against 0.57 for an ordinary carry-in. What that document declines to give is a *precise per-situation* percentage, because the underlying numbers sit in a graphic rather than in the article's text. Go there for the figures rather than restating them here.
- No blind D-to-D passes across your own goalmouth.
- No stretch passes you're not sure about. An interception at your own blue line is worse than a chip out.

**2. Chip out, don't force out.** A **chip** — a short, deliberate flip or wall-play that puts the puck past a forechecker and out of the zone — beats an attempted breakout pass under pressure. You will lose possession, but you'll lose it 150 feet from your net, with your team facing the right way. Getting the puck out and getting a change is worth more than a coin-flip at a controlled exit. *(The "40%" break-even you will see quoted for this is arithmetic with nothing behind it — no published work sets a threshold for this decision the way Tulsky's does for zone entries. Use the direction, not a number.)*

> **Careful — this is where a good idea becomes a penalty.** Under **NHL Rule 63.2(iii)** a player who shoots or bats the puck **directly (non-deflected) out of the playing surface from his own defending zone** takes a two-minute minor for delay of game. There is no "I was under pressure" exception, but there are three written carve-outs: the clause applies *"except where there is no glass"*, and its NOTE adds that *"when the puck is shot into the players' bench, the penalty will not apply"* and that *"when the puck goes out of the playing area directly off a face-off, no penalty shall be assessed."* Over the glass **behind** the bench is still a penalty. Keep the puck down and off the glass-line, or make sure it deflects. (Most rec leagues either don't call this or apply it inconsistently — but never assume.)

**3. Take away the middle.** Concede the outside; deny the slot and the middle lane through the neutral zone. Practically: your stick lives in the passing lane, you defend with your feet rather than lunging, and you never chase a puck carrier to the wall and leave the middle open behind you.

**4. Short shifts.** 30–35 seconds instead of 50. Fresh legs defend; tired legs reach. A team that changes cleanly every 35 seconds late in a game is much harder to score on than a team of tired heroes.

**5. Win the defensive-zone draws.** A defensive-zone faceoff loss with three minutes left and a one-goal lead is the most dangerous single event in the game — it hands the opposition immediate set-up possession in your end. Have your best faceoff man out there, have a clear plan for the loss as well as the win, and know your wall assignments. See [Faceoffs](faceoffs.md).

**6. Keep forechecking — just choose the *right* forecheck.** This is a system choice, not a rule of hockey. The house default across these documents is a **2-1-2 forecheck** (two forwards pressuring in the offensive zone, one high, two defencemen at the line). Many teams switch with a lead to a **1-2-2** (one forechecker steers the puck to one side; two forwards hold the neutral-zone line) or a **1-1-3** (one chaser, one mid-ice support, three players across the neutral zone — commonly called a trap). Under a 1-2-2 or 1-1-3, your job as the first forward in is not to win the puck, it's to take away one side of the ice so your teammates can intercept the exit. **Find out which one your team goes to with a lead, and when.** Turning up as an aggressive F1 while the other four are trapping is how leads get thrown away.

> **F1 / F2 / F3 are roles, not people.** They are defined by order of arrival at the puck, not by whether you are a centre or a winger.

### What doesn't work

```facts
Risk: Sitting back entirely is a siege you will eventually lose — you need a way to get out and a way to counter
Never: Ice the puck repeatedly — it is the classic self-inflicted wound
Never: Play keep-away on the perimeter with no plan; the blue-line turnover becomes the rush you must not concede
Never: Play the clock instead of the puck — watching the scoreboard makes you late to loose pucks
Never: Chase the extra body-check; if the player has already passed or shot it is a late hit as well as bad position
```

- **Sitting back entirely.** Five players below the top of the circles for four minutes is not a system, it's a siege you will eventually lose. You need a way to *get out* and a way to *counter*.
- **Icing the puck repeatedly.** See below — this is the classic self-inflicted wound.
- **Playing keep-away in the offensive zone without a plan.** Pointless perimeter possession invites a turnover at the blue line and a rush the other way, which is the one thing you must not concede.
- **Playing the clock instead of the puck.** Watching the scoreboard makes you late to loose pucks. Play the puck; the clock takes care of itself.
- **Fighting for the extra body-check.** Finishing a hit that takes you out of position is a luxury you can't afford with a lead — and if the player has already passed or shot, it is also a late hit and a penalty, which is a worse outcome still.

### The icing trap

```facts
Rule: Icing is sending the puck from your own side of the centre red line past the opposing goal line untouched (NHL Rule 81.1)
Rule: Under hybrid icing the linesperson judges who would reach the puck first, not who reaches the dot first (NHL Rule 81.1)
Rule: After your own icing you may make no player substitutions before the ensuing faceoff (NHL Rule 82.1)
Rule: The IIHF bar is Rule 81.4, and its exceptions run one longer — you may also replace "a Player with a broken skate", which the NHL does not allow
Rule: No time-out is granted to the defensive team following an icing (NHL Rule 87.1) — USA Hockey attaches no icing condition to its one time-out (636(f))
Risk: A defensive-zone draw, your five most tired players, and no way to rest them
Action: Ask before the game — many rec and youth leagues use no-touch icing, and under USA Hockey there is no no-change rule to enforce
```

**Icing** is sending the puck from your own side of the centre red line all the way past the opposing goal line untouched. Under NHL **hybrid icing** (adopted 2013-14) the linesperson judges who would reach **the puck** first — not who reaches the dot first (Rule 81.1). The end-zone faceoff dot is the **deadline for that decision**: the call is made no later than the instant the first player's skate reaches it, and a race too close to call at that moment is icing.

Here is why icing with a lead is so costly. Under **NHL Rule 82.1**, a team in violation of Rule 81 (Icing) **shall not be permitted to make any player substitutions prior to the ensuing face-off.** And under **Rule 87.1**, **no time-out shall be granted to the defensive team following an icing.** So you have handed the opposition:

- a faceoff in your end,
- against your five most tired players,
- with no way to rest them.

That combination — tired players, defensive-zone draw, no escape — is a goal waiting to happen, and the rules were deliberately written to make it so.

Three details worth knowing:

- **The exceptions to the no-change rule** are narrow: you may substitute to **replace a goalkeeper who had been pulled for an extra attacker**, to **replace an injured player**, or when a **penalty has been assessed that affects on-ice strength** (Rule 82.1). The on-ice personnel are determined **at the moment the puck leaves the offending player's stick**. **In the IIHF book — the British base rule set — the bar lives in Rule 81.4** and reads the same way, with the same three exceptions and the same "when the puck leaves the offending Player's stick" test, plus **one the NHL does not have: you may also substitute for *"a Player with a broken skate."*** (Note that IIHF 82.1 lists only the NHL's three; the broken-skate exception is in 81.4, which is the icing rule itself.)
- **Icing is waved off if your team is shorthanded** — with two exceptions. Killing a penalty you may normally ice it freely, but under Rule 81.6 a team shorthanded *"by reason of a major penalty"* that has *"neglected to ensure there is a player on the penalty bench to exit upon the expiry of the penalty"* keeps playing a man short and *"are not permitted to ice the puck. Icing will be called."* And **USA Hockey restricts the exemption by classification**, to *"(For all Youth 15-Only and above, Girls 16U and above, High School and Adult classifications only)"* (Rule 624(b)(1)) — below those levels a shorthanded team cannot ice the puck at all, so a kill built on length-of-the-ice clears just feeds the power play defensive-zone draws. [Special Teams](special_teams.md) owns this rule.
- **Rec and youth leagues vary.** Many still use no-touch (automatic) icing, and plenty do not enforce the no-change rule at all. Ask before the game; it changes how hard you should work to get the puck over the red line.

---

## Playing From Behind

### Pressing without giving up odd-man rushes

```facts
Action: Move the puck north faster and arrive in numbers through the neutral zone before you park extra players deep
Options: Aggressive forecheck, then pinching defencemen, then activating a defenceman, then pulling the goalie — roughly that order of safety
Read: Trailing, you pinch on anything close; leading, you pinch only when you are certain
Risk: A pinch that misses is a 2-on-1 the other way, and a fourth attacker deep is a genuine odd-man risk
Never: Leave nobody as the last man back — if a defenceman goes, a forward replaces them high
Action: Say that swap out loud
```

Trailing, you must generate more. The trap is that the easiest way to generate more — sending everybody — is also the fastest way to concede and end the game.

What to add, in roughly this order of safety:

1. **Speed and support, not bodies.** Get the puck moving north faster and arrive in numbers *through* the neutral zone, rather than parking extra players deep. This costs you nothing defensively.
2. **Aggressive forecheck.** Switching from a 1-2-2 to a 2-1-2, or to a full-ice press with both defencemen pinching, creates turnovers in their end. (Avoid calling this a "2-2-1" — that's basketball terminology, not an established hockey forecheck name; see [Forechecking Systems](forechecking_systems.md).) Cost: your F3 (the highest forward) is now deeper, so a clean exit against you is more dangerous.
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
Convention: Umbrella, overload or your normal power-play look at 6-on-5 is a team choice — learn yours in practice
```

The extra attacker is almost always a forward, and the sixth skater usually comes on for the goalie at a stoppage with an offensive-zone faceoff, or on the fly once you have possession in their end.

The most common shape takes a standard power-play look and adds a second body high: **two players at the blue line (the points), two on the half-walls (level with the faceoff dots), one at the net front, and one below the goal line or in the middle of the zone**. The principles matter more than the diagram:

- **Get set up.** A 6-on-5 that has to enter the zone repeatedly is wasting its advantage. Win possession, gain the line, and get organised.
- **Puck to the net with a screen.** The extra man is most valuable as a body in front and a second-chance collector, not as a sixth passer.
- **One-touch it.** The defenders can only cover so much; the advantage only shows up if the puck moves faster than they can shift.
- **The point men do not both pinch.** Someone must be able to stop a clear. There is no net behind you.
- **Change with possession, and change fast.** A 6-on-5 shift is exhausting. If you change while chasing the puck you will concede an empty-netter.

> **This is a system choice.** Some teams run an **umbrella** (three players high) at 6-on-5, some **overload** four players onto one side, some just add a net-front body to their normal power-play look. Learn yours in practice, because there is no time to work it out in the game. See [Special Teams](special_teams.md).

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

**What to do when the arm goes up:**
- **Goalie:** go, immediately, at the first sign. Every second is a free attacker.
- **Bench:** the extra attacker jumps as the goalie arrives.
- **On-ice players:** the whistle comes when *they* gain control — so keep the puck away from them, don't force a low-percentage shot that could be smothered, and above all don't turn it over. A shot that misses and rims to an opponent ends the sequence.

> **Rec-league note:** many recreational leagues do not allow, or do not practise, pulling the goalie on a delayed call, and some officials will stop play early. It also requires your goalie to be paying attention. Talk about it beforehand.

### Defending against 6-on-5

```facts
Never: Chase — play a tight box or diamond in the slot, block lanes and let them have the perimeter
Position: Sticks in lanes, feet in the house; clear bodies and take sticks away at the net front
Action: Treat every clear as a shot — get your head up and put it at the empty net when the lane is clean
Rule: You can be iced against a pulled goalie; six players against six is equal strength, not below it (NHL Rules 81.1, 81.3, 84.1)
Rule: After that icing they pick the dot (81.2), you cannot change (81.4) and you cannot take a time-out (87.1) — all three are NHL and IIHF only
Priority: Own-zone draws at 5-on-6 decide games — agree the plan before you line up
Never: Take a penalty; a 6-on-4 against is close to a goal
```

Your job as the leading team defending an empty net:

- **Do not chase.** Six attackers means someone is always open if you leave your area. Play a tight box or diamond in the slot, block lanes, and let them have the perimeter. (**Box** = two players high, two low. **Diamond** = a single apex — used when their structure has a player in the middle, the **bumper**, whom a box leaves unmarked.)
- **Sticks in lanes, feet in the house.** Coaches will tell you most 6-on-5 goals come from tips, screens and rebounds rather than clean point shots. **Two thirds of that is checkable, and the strong form does not hold up.** The NHL's public play-by-play feed records a shot type for every goal and timestamps every event, so tips, deflections and rebounds can all be counted — screens cannot. Across games 2024020001–2024020400 of the 2024-25 regular season, **29.7% of goals scored with the extra attacker on were a tip, a deflection, or a shot inside three seconds of a previous shot on goal**, against **23.4%** at 5-on-5. That is a real elevation and it points where the coaches point, but it is a long way from "most" — and the 6-on-5 sample is only **74 goals**, so read the gap as a direction rather than a rate. What is separately sourced is that the ice in front of the net converts several times better than the perimeter ([Shooting](../technique/shooting.md)). Clear bodies and take away sticks at the net front.
- **Every clear is a shot.** Do not just chip it out — get your head up and put it toward the empty net if the lane is clean. **A puck that goes in is a goal and there is no icing; a puck that misses and crosses the goal line is icing** (see the next point), so this is a shot to take when you can actually hit the net, not a blind heave. A blind clear that goes straight to their point man is the worst outcome of the three.
- **⚠️ You *can* be iced against a pulled goalie, and it is one of the worst things you can do to yourself.** It is tempting to reason that Rule 81.6's first paragraph is general — *"If the puck was so shot by a player of a side below the numerical strength of the opposing team, play shall continue and the icing violation shall not be called"* — and that five skaters against six are therefore below numerical strength. **The rulebook does not support that reading, on three counts.** (1) Rule 81.1 glosses the term where it defines it: icing applies to a team *"equal or superior in numerical strength **(power-play)** to the opposing team"* — the parenthetical ties the concept to penalty situations, and every other paragraph of 81.6 is about a penalty expiring or a penalty bench. (2) Rule 84.1 does not measure numerical strength in skaters alone; it sets three-on-three overtime at *"a numerical strength of three (3) skaters **and one (1) goalkeeper**"* — the goalkeeper is counted *inside* the figure, so six players against six is equal strength. (3) Rule 81.3 settles it in terms: where a goalkeeper *"is legitimately out of the crease in an attempt to go to the players' bench to be substituted for an extra attacker and in no way makes an attempt to play the puck, the icing **should not be nullified** under this section."* The rulebook is expressly contemplating an icing being called while the other team pulls its goalie, and preserving the call. **So the whistle comes.** You get a defensive-zone draw, **the attacking team picks the dot** (Rule 81.2), you **cannot change** (Rule 81.4) and you **cannot take a timeout** (Rule 87.1) — five exhausted skaters, in their own end, against six, with no way out. Get it out with a purpose, or put it on net. See [Special Teams](special_teams.md) for the shorthanded exemption, which is a different situation.
- **Faceoffs are everything.** Draws in your own end at 5-on-6 decide games. Have the plan agreed before you line up.
- **Take no penalties.** A 6-on-4 against is close to a goal.

---

## Line Matching and Last Change

### The rule

```facts
Rule: After a stoppage the visiting team places its line-up on the ice first, then the home team may substitute (NHL Rule 82.1)
Rule: The referee allows the visitors up to five seconds and the home team up to eight, then no more changes (NHL Rule 82.2)
Rule: Only the team that iced the puck is frozen — if the visitors ice it, the home team changes normally and keeps last change (NHL Rules 82.1, 81.4)
Key: Last change is the main mechanical component of home-ice advantage, but travel, rest and rink familiarity are in there too
Action: In a rec league, treat matching as something you do on the fly — many run no formal change procedure at all
```

Under **NHL Rule 82.1**, following a stoppage the **visiting team places its line-up on the ice first**, and only then may the home team make any substitution it wants. **Rule 82.2** sets the clock: the referee gives the visiting team **up to five seconds**, raises his hand to close visitor changes, gives the home team **up to eight seconds**, then lowers his hand. After that, no more changes until play resumes.

**Icing is where this is often misread.** The first paragraph of Rule 82.1 reads in full: *"The home team may then make any desired substitution, except in cases following an icing, which does not result in the delay of the game."* Quoted short — stopping at "following an icing" — that looks like it might switch last change off after *any* icing, whoever committed it. It does not. Later in the same rule the exception is spelled out: **a team in violation of Rule 63.8 (Delaying the Game) or Rule 81 (Icing)** *"shall not be permitted to make any player substitutions prior to the ensuing face-off"* — and Rule 81.4 repeats it word for word. The bar falls on **the team that iced the puck**. So if the home team ices it, the home team is frozen and has no last change to exercise; if the **visitors** ice it, the home team changes normally and keeps last change. Full treatment in [Faceoffs](faceoffs.md).

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
- **Manipulate the faceoff.** Last change can even cost you a draw — the Sound Of Hockey analysis cited below found that home teams won only **50.4% of 8,383 centre-ice faceoffs in 2023-24** — an externally published figure, not one of the faceoff computations made for this guide, which [Faceoffs](faceoffs.md) owns — partly because coaches sometimes send out a worse faceoff man in order to win the matchup instead.

**The road team's counter is the change on the fly.** Last change applies only at stoppages. On the road, coaches dictate matchups by timing changes during play — getting a line off as the opponent's top line comes on — which is why change discipline matters more on the road than at home.

### What you should do when you know you're being matched

```facts
Action: On a scoring line, change on the fly rather than at whistles — at a stoppage on the road you show your hand first
Never: Take the bait and beat your man one-on-one into traffic — move the puck early and make them cover all five of you
Read: If three players are focused on you, two of your teammates are unmarked
Goal: A 0-0 shift with no penalties against a strong checking line is a win if your other lines are winning theirs
Priority: On the checking line, your first job is to not get scored on — get the puck deep and change
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
Never: Assume "first pair" means the hardest job — many teams use their second pair to shut down, so ask
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
Key: Zone starts are the proportion of your shifts that begin with a faceoff in the offensive, neutral or defensive zone
Risk: Heavy defensive-zone starts make your raw shot and goal differentials look bad however well you play
Action: Check both players' zone starts before you compare their numbers
Mindset: A defensive-zone start means your coach trusts you — and the first ten seconds are the most dangerous of your shift
```

**Zone starts** are the proportion of your shifts that begin with a faceoff in the offensive, neutral or defensive zone. They are a coaching lever and a statistical distortion in one:

- A player with heavy **defensive-zone starts** begins most shifts 200 feet from the other net, under pressure. Their raw shot and goal differentials will look bad no matter how well they play.
- A player with heavy **offensive-zone starts** looks better than they are.

When you compare two players' numbers, check their zone starts first. And when you get a defensive-zone start, understand what it means: your coach trusts you, and the first ten seconds are the most dangerous of your shift.

---

## Shift Length and Change Discipline

### The rules you're working inside

```facts
Rule: You may change at any time during play, provided the player leaving is within five feet of the bench and out of the play (NHL Rule 74.1)
Rule: If either player plays the puck, checks or makes contact while both are on the ice, it is too many men — a bench minor (NHL Rule 74.2)
Rule: If the offending team scores before the whistle, the goal is disallowed and the penalty assessed (NHL Rule 74.2)
Never: Leave the ice anywhere but at the bench — any other exit is a bench minor regardless
```

**NHL Rule 74.1**: players may be changed at any time during play, provided the player **leaving the ice is within five feet of the bench and out of the play** before the change is made. If either the player coming on or the player going off **plays the puck, checks or makes physical contact** with an opponent while both are on the ice, it's **too many men** — a bench minor (Rule 74.2). And if the offending team scores before the whistle, **the goal is disallowed and the penalty assessed.**

The retiring player must leave **at the bench**, not through any other exit, or it's a bench minor regardless.

### How long a shift should be

```facts
Convention: 35-45 seconds for most players, 30-35 when protecting a lead or stuck in your own end — coaching prescription, not measurement
Read: The signal to change is a reduction in your ability to accelerate, not a stopwatch
Key: Gliding to a spot you would have skated to ten seconds earlier means you are already too tired to be useful
Action: Take the measured shift-length range and the physiology from Conditioning and Recovery, which owns them
```

Shifts in fast, high-level hockey are typically **under a minute**, and the reason usually given is physiology: hockey is repeated maximal effort, and effort quality declines well before you feel exhausted. **[Conditioning and Recovery](../off-the-ice/conditioning_and_recovery.md) owns both the physiology and the measured range** — take the figures from there rather than from here. A reasonable target for most players is **35–45 seconds**, shortened to **30–35 seconds** when protecting a lead or when the play is stuck in your own end; **those two bands are coaching prescription, not measurement** — the measured band is 30–80 seconds and the "well-managed" 30–45 s figure is itself coaching craft, as that document states.

The signal to change is not a stopwatch, it's a **reduction in your ability to accelerate**. The moment you find yourself gliding to a spot you would have skated to ten seconds earlier, you are already too tired to be useful.

### Tired players make bad decisions

```facts
Risk: Decision speed goes first — you see fewer options, later
Risk: Then your feet go: you stop skating and start reaching, which is how sticks end up around waists and hands
Risk: Then support goes, so a teammate loses a battle they should have won; backchecking goes last and costs most
Key: A 90-second shift is worth less in total than a 30-second one, and it costs your next shift too
Convention: Coaches put late-shift penalties down to fatigue — the mechanism is sound reasoning, but no published study codes penalty motive
```

Fatigue does not just cost you a step. It costs you, in this order:

1. **Decision speed** — you see fewer options, later.
2. **Feet** — you stop skating and start reaching, which is how sticks end up around waists and hands. Coaches routinely put late-shift penalties down to fatigue; **that is a motive attribution and no published study codes penalty motive** — see *Frustration penalties* below, which sets out what the youth-hockey penalty data does and does not support. The mechanism (tired legs, reaching stick) is sound reasoning; the frequency claim is not measured.
3. **Support** — you stop arriving as the second man to the puck, so your teammate loses a battle they should have won.
4. **Backchecking** — the last thing to go, and the most expensive.

The practical consequence, as coaches put it: **a 90-second shift is not three times as valuable as a 30-second shift — it is worth less in total, and it costs your next shift too.** *(Nobody has measured the value of a shift as a function of its length, so read that as the shape of the argument rather than as a quantity. What is measured is the decline in repeated-sprint quality, which [Conditioning and Recovery](../off-the-ice/conditioning_and_recovery.md) owns.)*

### When NOT to change

```facts
Never: Change when the puck is in your defensive zone and your team does not have it
Never: Change while you are the last man back, until you are relieved — and say so out loud
Never: Change while the opposition is on a rush; finish the defensive play first
Rule: You cannot change after your own icing (NHL 82.1, IIHF 81.4), so do not start drifting toward the bench — USA Hockey Rule 624 imposes no such restriction
Never: Change in the middle of a 6-on-5 possession — change with the puck or not at all
Action: Change when your team has the puck heading north, has just dumped it in deep, or after a completed clear
```

This is the part that separates good game management from a good motor.

**Do not change when:**

- **The puck is in your defensive zone and not under your team's control.** Coaches name this as one of the biggest sources of goals against in amateur hockey — an observation rather than a measured ranking, because no published data classifies goals by the cause behind them. Changing while the opposition has the puck in your end means a player leaves, a player arrives late from the bench, and for two seconds you are 4-on-5 in the most dangerous area of the rink.
- **You are the last man back**, until you are relieved. Say so out loud.
- **The opposition is on a rush.** Finish the defensive play, then change.
- **You've just iced the puck.** You can't (NHL Rule 82.1; IIHF Rule 81.4), so don't start drifting toward the bench.
- **You're in the middle of a 6-on-5 possession.** Change with the puck or not at all.
- **You'd be changing into an offensive-zone faceoff you're needed for**, if you're the faceoff man.

**Do change when:**

- **Your team has the puck heading north, or has just dumped it in deep.** These are the safe windows.
- **After a completed clear from your own end** — the classic "get it out, get off."
- **You're beaten and a fresh teammate can take over safely.**

### Why a bad change costs goals

```facts
Risk: A bad change concedes a numbers disadvantage, a structural hole and a player joining the play blind, all at once
Key: There is no other single action in hockey that gives away that much for free
Key: The fix is discipline and communication, not fitness
Action: Call it — "I'm changing", "stay on", "last man"
```

A bad change concedes three things at once: a numbers disadvantage, a structural hole (the player leaving usually has a specific job nobody is doing), and a player joining the play with no idea where anybody is. There is no other single action in hockey that gives away that much for free.

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
Rule: England Ice Hockey plays overtime only in NIHL fixtures, and in SNL fixtures whose competition regulations provide for it (In-House Rules, Rule 84)
Rule: NIHL league and group-stage playoff overtime is five minutes of 3-on-3 with no change of ends, then game-winning shots with three shooters a side (In-House Rules, Appendix 1, on IIHF Rule 84)
Rule: Playoff Final Weekend is different — semi-finals go to 20 minutes of 5-on-5 then shots, and the Final to successive 20-minute 5-on-5 sudden-death periods with no shots at all (In-House Rules, Appendix 1)
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

> **⚠️ Britain — in many fixtures there is no overtime at all.** England Ice Hockey, the SIHA and the BUIHA amend IIHF Rule 84 down to a single line: overtime *"is only played in NIHL fixtures and in SNL fixtures where specifically provided for in competition regulations"* (In-House Rules, Rule 84). Recreational and junior games in England and Scotland end level, so everything above about managing a tied third period ends with the horn rather than with 3-on-3. Where overtime *is* played, the formats are set out in Appendix 1 of the In-House Rules:
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
> **England Ice Hockey then replaces the whole procedure in the leagues that use it** (In-House Rules, Appendix 1). It is a **game-winning shots (GWS)** competition: **three** shooters a side taking alternate shots, then *"sudden victory"* — one shot each until it is settled. Eligibility splits by league, and this is the part to get right:
>
> - **NIHL National League and its group-stage playoffs:** *"Any eligible player may take a penalty-shot attempt, and the same player may be used for multiple attempts."* Eligible means not serving a penalty and not injured at the time of the attempt. Your best shooter can go every round.
> - **NIHL 1 and 2:** the opposite — *"All eligible players (except those serving penalties or injured) must shoot before any player can take a second attempt."* That is the NHL's rule, not the National League's, in the same document.
> - **SNL:** a *"best-of-three penalty shot shootout"*, then sudden death, with the first three designated shooters repeatable *"after every full round of three."*
>
> As in the NHL, the deciding goal is recorded as the game-winning goal and the final score increased by one for the winners. Full amendment list: [UK and England Rules](../foundation/uk_rules.md).

### For the shooter

```facts
Action: Decide before you start skating — deciding at the hash marks is how you end up doing neither thing well
Technique: Have two moves and know which one you are using
Options: A shot in stride to the far side or five-hole, a deke to the backhand, or forehand-backhand-forehand
Read: Slower approaches give you more options and force the goalie to move first; faster ones beat passive, deep goalies
Goal: Get the goalie sliding, then go where they have just left
Never: Telegraph — head up, puck out in front where both a shot and a deke are live
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
Never: Commit first — stay square, stay patient, make them decide
Technique: Track the puck, not the hands
Read: Match your retreat to their approach — back in with a fast shooter, hold your depth and stay big against a slow one
Rule: You cannot be replaced once the shootout starts unless you are injured, and a substitute gets no warm-up (NHL Rule 84.4)
Rule: Under the IIHF book the goalkeepers "may be changed after each shot" (IIHF Rule 84.4), so in Britain a shootout substitution is legal
```

- **Control your depth.** Coming out cuts the angle and beats shooters; staying deeper gives you more time against dekes. Know which you're better at.
- **Don't commit first.** Nearly every shootout goal comes from a goalie who moves before the shooter does. Stay square, stay patient, make them decide.
- **Track the puck, not the hands.**
- **Match your retreat to their approach.** A shooter coming in fast means you back in with them; a slow shooter means you hold your depth and stay big.
- **You cannot be replaced once the shootout starts** unless you're injured, and there is no warm-up for a substitute (Rule 84.4). **That is the NHL position and it is reversed in the IIHF book**, where *"[t]he goalkeepers from each team may be changed after each shot"* (IIHF Rule 84.4(VI)) — so in Britain, where the IIHF book is the base and the In-House Rules leave this alone, a coach genuinely can put the other goalie in mid-competition. The no-warm-up point still holds either way: nobody is getting shots first.

See [Goaltender](../positions/goaltender.md) for the technical detail.

---

## Momentum and How to Respond to It

Whether "momentum" is a real measurable force is genuinely disputed. What is not disputed is that **teams behave differently after a goal**, and that behaviour is controllable.

### After conceding

```facts
Mindset: Take the next shift as simply as possible — win a puck, get it deep, take your man, change
Never: "Finish your check" on a player who has already passed or shot; that is a late hit under USA Hockey's standard of play
Mindset: Play the game in front of you — replaying the goal is a decision-making tax you cannot afford
Action: Reset your risk to baseline; chasing the goal back immediately is how one-goal deficits become three-goal deficits
Action: Say one short factual sentence — "reset, next shift". Silence after a goal against is corrosive
Convention: Coaches treat the minute after a goal against as the most dangerous stretch in hockey — coaching lore, not a measured hazard rate
```

The minute after a goal against is treated by coaches everywhere as the most dangerous stretch in hockey, because the conceding team is either deflated or over-eager and both produce mistakes. **Read that as coaching lore, not as a measured hazard rate** — it is the same class of claim as "momentum" flagged just above, and there is no published count of goals by time since the last goal. The habits below are worth having whether or not the effect is real.

**What to do:**

- **Take the next shift as simply as possible.** Win a puck, get it deep, take your man, change. Nothing clever. (Note the wording: **"finishing your check"** — hitting a player who has already passed or shot — is a late hit under USA Hockey's standard of play and is described there as unacceptable. Take the body of the player who *has* the puck, or take the ice they need. See [Body Contact and Battles](../technique/body_contact_and_battles.md).)
- **Play the game in front of you.** Replaying the goal in your head is a decision-making tax you can't afford. See [Mental Game](../off-the-ice/mental_game.md).
- **Reset your risk to baseline.** The instinct is to chase the goal back immediately. That's how one-goal deficits become three-goal deficits.
- **Talk.** One short factual sentence — "reset, next shift" — from anyone. Silence after a goal against is corrosive.

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
Rule: USA Hockey is the outlier: Rule 636(f) gives one sixty-second time-out and attaches no icing condition to it
Action: Spend it on rest and instruction at a moment you choose — before a critical defensive-zone draw, or before setting up 6-on-5
Key: The measured effect on winning is nil, but most benches finish the game with the time-out still in the pocket
```

**Rule 87.1**: each team gets **one thirty-second time-out per game**, regular season or playoffs. It must be taken at a normal stoppage, and **only one time-out — commercial or team — is permitted at any one stoppage.**

Crucially, **no time-out shall be granted to the defensive team following an icing** (also: following the goalie causing a stoppage from a shoot-in from beyond the centre red line, or when a defending player accidentally dislodges the net). This is the rule that closed the loophole in 2017-18 — before it, a coach could ice the puck and then buy their tired players a rest with a time-out. **You cannot rest your way out of your own icing.**

> **Rule-set note.** **IIHF Rule 87.1 says the same three things in the same words** — one thirty-second time-out per team, none after a faceoff violation, and none to the defensive team following an icing, a goalie freeze on a shoot-in from beyond the red line, or a defender dislodging the net. So a British or European league player gets no relief here. **USA Hockey is the outlier:** Rule 636(f) gives each team **one sixty-second time-out** and attaches **no** icing condition to it, so under that book a coach genuinely can ice the puck and then buy the rest.

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

Under **Rule 19.1**, when **one minor is assessed to a player on each team at the same stoppage** and there are no other penalties on the clock, they are served **without substitution** and both teams play **four skaters against four for the duration**. 🇬🇧 **The *coincidental-minors* 4-on-4 is NHL-only.** IIHF Rule 19.1 requires *"immediate substitution"* for an equal number of minors, and the casebook confirms *"the teams are playing 5 – 5."* Britain still reaches 4-on-4 by other routes at the same stoppage — a minor to one team against a major to the other does it (IIHF Appendix IV, Table 15, examples 18-20 and 32) — so the tactical material below still applies. It is only this trigger that differs.

4-on-4 is a higher-scoring game state than 5-on-5 — in 2007-08 a goal was scored every **12.1 minutes** at 4-on-4 versus **13.7 minutes** at 5-on-5. Both are **combined** rates: the time until *either* team scores, not until one particular team does. How to play it:

- **More ice, so more time — use it.** Support is farther away, so hold the puck a beat longer and make the second option available.
- **The middle is open, which cuts both ways.** More space through the neutral zone means more clean entries and more odd-man rushes against.
- **Two forwards and two defencemen is the common personnel choice**, but many teams use three forwards and a defenceman to attack. Coaching choice — know yours.
- **The defensive priority is the far-side rush.** Losing a puck at the offensive blue line at 4-on-4 is a 2-on-1 the other way with nobody to help.

### Coincidental penalties

```facts
Rule: Coincidental minors of equal duration cancel; any difference in time is served normally (NHL Rule 19)
Rule: A second pair of coincidental minors while already 4-on-4 leaves strength unchanged, because the first pair is still on the clock (NHL Rule 19.1)
Rule: Under IIHF Rule 19.1 coincidental minors bring immediate substitution and the teams stay five a side — Britain reaches 4-on-4 by other routes (a minor against a major at the same stoppage), just not by this one
Rule: Penalised players in coincidental situations cannot leave the box until the first stoppage after their penalty expires (NHL Rule 19)
Never: Retaliate — you convert your opponent's mistake into no advantage at all
```

The general principle in **Rule 19** is *cancel as many matching penalties as you can*. Coincidental minors of equal duration cancel; any difference in time is served normally. Once teams are already 4-on-4, another set of coincidental minors does **not** drop them to 3-on-3 — but nor does it put them back to 5-on-5. **They stay at 4-on-4.** The reason is in Rule 19.1: the four-skater provision applies only *"provided there are no other penalties in effect and visible on the penalty clocks,"* and the original pair is still on the clock. So the second pair gets **immediate substitution** and on-ice strength is unchanged, while four players now sit in the boxes. Penalized players in coincidental situations **cannot leave the box until the first stoppage after their penalty expires**, which is why you sometimes see a player sitting long after the clock hits zero.

The game-management point: **if you retaliate, you have converted your opponent's mistake into no advantage at all.** Your team earned a power play; you gave it straight back. That is one of the few things in hockey that is pure, unforced loss.

### The last minute of a period

```facts
Never: Get caught changing — the most common late-period goal comes from a lazy change at 0:40
Never: Force an entry; a turnover at their blue line with 20 seconds left is a 2-on-1 you will not recover from
Action: Get the puck deep and finish the period there
Priority: Nobody's line is more important than the clock — tired with 15 seconds left, stay on and defend
Read: The exception is a genuine chance — possession with numbers, and you go
```

The first and second periods have their own risk profile. A goal against in the final minute of a period is disproportionately damaging — it's the last thing everyone carries into the dressing room, and there's no time to respond.

- **Do not get caught changing.** The most common late-period goal comes from a lazy change at 0:40.
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
Rule: Fouling a breakaway from behind gives up a penalty shot, not a power play (NHL Rule 57.3)
Rule: Covering the puck in your own crease is a penalty shot (NHL Rule 67.4) — still better than the goal it prevented
Never: Foul anything once your own goalie is pulled — those trades become awarded goals (NHL Rules 25.1, 57.4, 67.5)
Never: Take one for retaliation, for sending a message, after the whistle, or at any point in the first period
```

Rarely — but not never. The test is simple: **is the thing you are preventing more likely to become a goal than the power play you are giving up?**

**The arithmetic behind that test is not repeated here.** What a minor actually costs you (the league power-play conversion rate), what a penalty shot is worth by comparison, and the full rulebook account of the fouls that are *not* priced as minors — the breakaway fouled from behind, and covering the puck in your own crease — all live in [Risk Management, "Penalty risk as a decision"](../hockey-iq/risk_management.md#penalty-risk-as-a-decision). Read the numbers and the rule conditions there. What belongs in *this* document is the part that changes with the score and the clock:

- **Stopping an odd-man rush in the last minutes of a close game** — but *not* a clean breakaway, and this distinction matters enormously. Fouling a breakaway from behind gives up a **penalty shot**, not a power play (Rule 57.3), and over the last eleven NHL seasons penalty shots have converted at a *higher* rate than power plays — by less than the phrase "penalty shot" suggests, and not in every recent season, but higher. Chasing from behind and hauling someone down saves you little or nothing. The time to prevent the breakaway was four seconds earlier, with your gap — see [Defending the Rush](defending_the_rush.md).
- **Preventing a certain goal.** If it is a goal or a penalty, take the penalty; and if the foul available to you is covering the puck in your own crease, a penalty shot (Rule 67.4) is still better than the goal it prevented.
- **Sometimes: killing time you need killed.** A stoppage you badly need for a change or a rest can occasionally be worth two minutes — but this is a coach's decision, not yours.

**⚠️ Once your own goalie is out, every one of those trades stops working.** This is the game state most of this document is about, so it matters here. With the net empty there is no shot for anyone to save, so the rulebook skips the penalty shot and simply gives them the goal:

- **A breakaway fouled from behind with your goalie pulled is an awarded goal** — NHL **Rules 25.1 and 57.4**, which the rulebook cites as a pair (25.1 is the general awarded-goal rule; 57.4 is the operative clause for tripping, hooking, holding and slashing).
- **Covering the puck in your own crease with an extra attacker on for your goalie is an awarded goal too** — **Rule 67.5**, not the penalty shot of 67.4.

So: **when you have pulled your goalie, there is no foul left that buys you anything.** The exact conditions and wording are set out in [Risk Management](../hockey-iq/risk_management.md#penalty-risk-as-a-decision).

Note what is *not* on the list above: retaliation, sending a message, standing up for a teammate after the whistle, and anything at all in the first period.

### When it absolutely isn't

```facts
Never: Take a penalty with a lead in the last five minutes — if you are beaten, be beaten, and let them have the outside shot
Never: Take one while already killing a penalty; a 5-on-3 against is the single most dangerous game state in hockey
Never: Take one while on your own power play, or after the whistle
Never: Take one at 6-on-5 or defending 6-on-5 — both directions are catastrophic
```

- **When you're leading late.** A penalty with a lead in the last five minutes is the fastest way to lose a game. If you're beaten, be beaten — let them have the outside shot.
- **When you're already killing a penalty.** A 5-on-3 against is the single most dangerous game state in hockey.
- **When you're already on a power play.** Nothing wastes an advantage faster.
- **After the whistle.** These penalties buy you nothing, and they're the easiest ones for referees to call.
- **When you're 6-on-5 or defending 6-on-5.** Both directions are catastrophic — recall that teams defending a 6-on-5 take penalties at nearly twice the rate of the team attacking.

### Frustration penalties

```facts
Action: Keep your feet moving — almost every hooking and tripping call is a player who used their stick as a substitute
Action: Give up the last word; the referee almost always catches the second player
Action: Have a reset — a breath at the faceoff dot, a tap of the pads, a look at the clock
Convention: That most amateur penalties are frustration-driven is coaching experience, not data — no published study codes penalty motive
```

*This section carries the full treatment of what is and is not known about why amateur players take penalties. [Risk Management](../hockey-iq/risk_management.md#the-far-more-common-case) points here rather than restating it, and the claim should never travel without the qualification set out below.*

The standard coaching observation is that **the great majority of penalties in amateur hockey are frustration penalties**: retaliation, slashing after losing a battle, cross-checking after a whistle, arguing with an official. There is published data on youth-hockey penalties, and it partly supports this and partly does not. It is worth separating the two, because the coaching advice below survives either way.

**What the data does support.** Most penalties in youth hockey really are aggression-type infractions rather than obstruction fouls. Gilbert and Trudel coded gamesheets and video from **55 Bantam (14-15) games across five leagues, 850 penalties**, and found **an average of 15.5 penalties per game with "most penalties classified as minor aggression penalties (62.4%)"** — roughing, cross-checking, elbowing, slashing, as against the hooking-and-holding category. They also found that "the number of penalties tended to increase from the first period to the third period", which is at least consistent with accumulating frustration.

**What it does not support is the motive.** No study codes *why* a penalty was taken. "Minor aggression penalty" is a category of contact, not a category of intent: a clean, premeditated cross-check on a forechecker and a revenge slash after losing a board battle both land in it. Nobody has video-coded penalties against the preceding seconds of play for provocation, so the specific claim that most are *retaliation* has no measurement behind it. Two findings actively cut against it. McFaul and colleagues video-coded 249 verified head impacts across 48 U15 and U18 AA/AAA games and found **"most HC events (~68%) were the outcome of nonaggressive play and within the rules of the sport (~67%)"**. And Kirker, Tenenbaum and Mattson, observing ice hockey and basketball directly, found **"aggression was instrumental in nature two-thirds of the time"** — that is, goal-directed rather than hot-blooded. Note too that Gilbert and Trudel found **74.9% of penalties went to one player at a time**, whereas retaliation and post-whistle scrums tend to produce coincidental penalties in pairs.

There is also a nice piece of counter-evidence against the intuition that frustration needs a physical outlet: Régnier and colleagues, comparing 28 Pee Wee teams in a body-checking league against 21 in a league that banned it, reported that **"contrary to popular belief, playing without body-checking resulted in fewer 'hostile aggression penalties.'"**

**Where that leaves it.** Treat "most amateur penalties are aggression-type infractions" as measured; treat "most of them are frustration-driven" as coaching experience, not data. **And it cannot be settled either way:** no published study codes penalty motive in amateur hockey, so the frustration claim cannot be confirmed or refuted from evidence. What is not in doubt is that frustration penalties happen, that they buy you nothing, and that they mostly happen to players who have just been beaten and want to even the ledger.

Three practical habits:

1. **Keep your feet moving.** Almost every hooking and tripping call is a player who stopped skating and used their stick as a substitute. Discipline is largely a conditioning and effort problem in disguise.
2. **Give up the last word.** After a whistle, be the one who skates away. The referee almost always catches the second player.
3. **Have a reset.** Something small and physical — a breath at the faceoff dot, a tap of the pads, a look at the clock. See [Mental Game](../off-the-ice/mental_game.md).

---

## Common Mistakes

- **Sitting on a lead from the second period.** Retreating is a late-game tool with a specific purpose. Deploying it early just hands over the game and guarantees you spend forty minutes in your own end.
- **Reading raw shot totals without adjusting for score.** Being outshot while winning is the normal, expected, well-documented consequence of leading. Being outshot in a tie game is the problem.
- **Changing while the puck is in your own zone and the other team has it.** The most common self-inflicted goal against in amateur hockey.
- **Long shifts because you feel fine.** You don't feel the drop in decision quality until after you've made the bad decision.
- **Icing the puck to "get a whistle."** You get a whistle, a defensive-zone draw, no line change, no time-out and five tired players. You've made it worse.
- **Waiting until 1:00 to pull the goalie.** Every study for fifty years says this is too late, and the gap between practice and the analytics is still substantial.
- **Not knowing the delayed-penalty freebie exists.** A free extra attacker with no empty-net risk, wasted because the goalie didn't leave.
- **Shooting from anywhere in 3-on-3 overtime.** A shot that misses the net is a 3-on-2 the other way. If it isn't a genuine look, regroup.
- **Retaliating.** You turn their penalty into nothing, or their power play into your penalty kill.
- **Playing your normal game down three with ten minutes left.** Being moderately aggressive late is worse than being very aggressive early.
- **Treating the time-out as a momentum spell.** The evidence doesn't support it. Treat it as rest and instruction at a moment of your choosing — and don't end the game with it unused, which is what happens in about 70% of games.
- **Assuming last change means anything in your league.** Many rec leagues don't run a formal change procedure at all. On the road at any level, your matchup tool is the change on the fly.

---

## Key Takeaways

1. **Trailing teams shoot more; leading teams shoot less.** It's the best-established score effect in hockey. It distorts every raw statistic you'll ever look at, and it's the reason score-adjusted numbers exist.
2. **Protecting a lead is an active job.** Manage the puck, chip it out cleanly, take away the middle, shorten your shifts, win the defensive-zone draws. Passive is not the same as safe.
3. **Scale your risk to the clock and the deficit, not to your emotions.** Down three with ten minutes left, being aggressive early beats being aggressive late.
4. **Get the extra attacker on the ice sooner than feels comfortable.** The 6-on-5 scores at power-play-like rates and draws penalties at nearly twice the normal rate against the defending team; every study for fifty years says coaches pull the goalie too late. On a delayed penalty the extra attacker is free — the offending team cannot score (Rule 78.5(xi)) unless you put it in your own net — so the goalie goes immediately.
5. **Last change is real but it's only a stoppage tool.** At home you match at whistles; on the road you match on the fly. Rule 82.1's icing exception — *"except in cases following an icing, which does not result in the delay of the game"* — bars only the team that iced it, so the free matchup after the *other* side's icing is yours home or away.
6. **Handedness on the blue line is about the first pass, not the shot.** On your on-hand side, the exit is on your forehand and your body shields the puck. The measured effect is real but modest — roughly one percentage point.
7. **The bad change is the most expensive routine mistake in hockey — and icing with a lead is the worst version of it.** Never change when the other team has the puck in your zone, or when you're the last man back. And after your own icing you *cannot* change (Rule 82.1) or take a time-out (Rule 87.1): you have handed them a defensive-zone draw against your five most tired players.
8. **3-on-3 overtime is a possession game, not a shooting gallery.** Regroup rather than force a shot; only change with the puck; wait for a tired defender rather than a great shot.
9. **Take the penalty that prevents a certain goal; never take the one that answers a slash — and once your goalie is pulled, take neither.** With the net empty, fouling a breakaway from behind or covering the puck in your crease is an awarded goal, not a penalty shot (Rules 25.1, 57.4 and 67.5). As for why amateur penalties happen: that they are mostly **aggression-type infractions** is measured (62.4% of 850 Bantam penalties); that they are mostly **frustration-driven** is coaching experience, not data. The habits that prevent them — keep your feet moving, give up the last word, have a reset — are worth having either way.
10. **After a goal against, play one deliberately simple shift.** Win a puck, get it deep, take your man, change — not "finish your check", which means hitting a player who has already given up the puck and is a late hit under USA Hockey's standard of play. Then play hockey again. And remember that everything in this document that is not explicitly a rule is a coaching choice — yours may want something different.

---

*Sources — retrieved 27 July 2026:*

*Rules: [NHL Official Rules 2025-2026](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) (Rule 15 Calling of Penalties, Rule 19 Coincidental Penalties, Rule 25 Awarded Goals — 25.1, Rule 57 Tripping — 57.3 penalty shot and 57.4 awarded goal, Rule 63 Delaying the Game, Rule 67 Handling Puck — 67.4 penalty shot and 67.5 awarded goal, Rule 74 Too Many Men on the Ice, Rule 78 Goals, Rule 81 Icing including the major-penalty carve-out in 81.6, Rule 82 Line Changes, Rule 84 Overtime, Rule 87 Time-outs; Reference Table 10, Summary of Awarded Goals) · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — Rule 624(b)(1), the classification restriction on the shorthanded icing exemption · [NHL Rulebook index — Scouting The Refs](https://scoutingtherefs.com/nhl-rules/) · [Icing (ice hockey) — Wikipedia](https://en.wikipedia.org/wiki/Icing_(ice_hockey)) · [What are NHL overtime rules? — ESPN](https://www.espn.com/nhl/story/_/id/39345002/what-nhl-rules) · [Getting to Know the NHL Rulebook: Coincidental Penalties — Winging It In Motown](https://www.wingingitinmotown.com/getting-to-know-the-nhl-rulebook-coincidental-penalties/)*

*Score effects and analytics: [Analytics (ice hockey) — Wikipedia](https://en.wikipedia.org/wiki/Analytics_(ice_hockey)) · [The Casual Critic's Complete Guide to Hockey Analytics — Defending Big D](https://www.defendingbigd.com/nhl-guide-to-hockey-analytics-advanced-stats-corsi-expected-goals-war/) · [Advanced Hockey Analytics: A Primer — Tech Hockey Guide](https://techhockeyguide.com/2022/10/17/advanced-hockey-analytics-a-primer/)*

*Pulling the goalie: [Beaudoin, D. & Swartz, T. B., "Strategies for Pulling the Goalie in Hockey" — Simon Fraser University](https://www.sfu.ca/~tswartz/papers/goalie.pdf) · [The State of Goalie Pulling in the NHL — Hockey Graphs](https://hockey-graphs.com/2020/05/18/the-state-of-goalie-pulling-in-the-nhl/) · [When to Pull the Goalie: Running the Numbers on NHL Goalie Pulls — Alex Galea](https://galea.medium.com/when-to-pull-the-goalie-running-the-numbers-on-nhl-goalie-pulls-9fad2a6caceb) · [Here's why the Kraken and other NHL teams are pulling goalies earlier — The Spokesman-Review](https://www.spokesman.com/stories/2022/jun/21/heres-why-the-kraken-and-other-nhl-teams-are-pulli/)*

*6-on-5 goal composition: [NHL public play-by-play feed](https://api-web.nhle.com/v1/gamecenter/2024020001/play-by-play) — games 2024020001–2024020400 of the 2024-25 regular season. 74 goals scored with the extra attacker on, of which 29.7% were a tip-in, a deflection or a shot within three seconds of a previous shot on goal, against 23.4% of 1,585 5-on-5 goals. Derived from the shot types and event timestamps in that feed, not published statistics; the 74-goal sample is small. The feed carries no marker for a screen, so that third of the coaching claim remains uncheckable.*

*Line matching, home ice and time-outs: [Is there really a home-ice advantage in the NHL? — Sound Of Hockey](https://soundofhockey.com/2025/02/02/is-there-really-a-home-ice-advantage-in-the-nhl/) · [Quantifying the Value of an NHL Timeout using Survival Analysis — Hockey Graphs](https://hockey-graphs.com/2020/05/28/quantifying-the-value-of-an-nhl-timeout-using-survival-analysis-part-1/)*

*Defence pairs and handedness: [Shot Location Data and Strategy I: Off-Hand Defencemen — puck++](https://puckplusplus.com/2014/11/11/shot-location-data-and-strategy-i-off-hand-defencemen/) · [Do defensemen play worse on their off-hand? — puck++](https://puckplusplus.com/2013/09/21/do-defensemen-play-worse-on-their-off-hand/) · [The Impact of Handedness on Defensemen — All Mighty Hockey Talk](https://allmightyhockeytalk.com/2024/07/24/the-impact-of-handedness-on-defensemen/) — **dead: the domain no longer resolves. Kept for the record; nothing in this document rests on it alone, and the two puck++ posts above carry the handedness material.***

*Overtime strategy: [NHL Coaches' Room: Overtime success can be difference between making, missing playoffs — NHL.com](https://www.nhl.com/news/nhl-coaches-room-overtime-success-303255732) · [NHL: The Strategy in 3-on-3 Overtime Has Evolved — The Hockey Writers](https://thehockeywriters.com/nhl-overtime-3-on-3-strategy-has-evolved/) · [From chaos to control, NHLers reflect on evolution of 3-on-3 overtime — CBC Sports](https://www.cbc.ca/sports/hockey/nhl/nhl-notebook-3on3-zub-ducks-1.6693732)*

*Rule-set comparison: [IIHF Official Rule Book 2025/26](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/4_sport/officiating/rule_book/25_26/2025-26_iihf_rulebook_19052025-v1.pdf) — Rule 81.2 (attacking team's choice of end-zone dot after an icing), Rule 81.4 (Line Change on Icing — the same bar as NHL 82.1 plus the additional exception for "a Player with a broken skate"), Rule 82.1 (Line Change — visiting team first, and the same three substitution exceptions as the NHL), Rule 84 (Overtime Operations, 84.1–84.6, including 84.2's single permissive sentence on the overtime pull and 84.4's five different shooters, captains' coin toss, changeable goalkeepers and repeat tie-break shooters) and Rule 87.1 (Time-outs — the same 30-second allowance and the same icing, face-off-violation, goalie-freeze, dislodged-net and penalty-shot exclusions as NHL Rule 87.1), all quoted from the rulebook text · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — Rule 636(f), which gives one 60-second time-out and attaches no icing condition to it.*

*The British position: [IHUK In-House Rules 2025-26, Revision 1](https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf) — Section 10, Rule 84 (overtime played only in NIHL fixtures and in SNL fixtures whose competition regulations provide for it) and Appendix 1 (the NIHL, NIHL 1 & 2, NIHL Playoff Final Weekend, SNL and BUIHA Varsity overtime and game-winning-shots procedures quoted above). England Ice Hockey, the SIHA and the BUIHA adopt the IIHF Rule Book as their foundation and amend it; the In-House Rules make no amendment to Rule 81 (Icing), Rule 82 (Line Changes) or Rule 87 (Time-outs), so the IIHF text governs those in Britain. See [UK and England Rules](../foundation/uk_rules.md).*

*Penalties in amateur hockey: [Gilbert, W.D. & Trudel, P., "A Profile of Rule Infractions in Bantam Level Ice Hockey", in *Safety in Ice Hockey: Third Volume*, ASTM STP 1341 (2000)](https://doi.org/10.1520/STP15246S) — 55 games, five leagues, 850 penalties; 15.5 penalties per game; 62.4% minor aggression penalties; 74.9% assessed to one player at a time · [McFaul, C.S. et al., "Analyzing the Relationship Between Aggression, Rule Violations, and Head Contact Events in Canadian Competitive Minor Bodychecking Hockey", *Sports Health* 18(4):738-746 (2026)](https://doi.org/10.1177/19417381251415412) — 249 verified head impacts, 48 U15/U18 AA/AAA games; ~68% nonaggressive, ~67% within the rules · [Kirker, B., Tenenbaum, G. & Mattson, J., "An Investigation of the Dynamics of Aggression: Direct Observations in Ice Hockey and Basketball", *Research Quarterly for Exercise and Sport* 71(4):373-386 (2000)](https://doi.org/10.1080/02701367.2000.10608920) — aggression instrumental two-thirds of the time · [Régnier, G. et al., "Effects of Body-Checking in the Pee-Wee (12 and 13 Years Old) Division in the Province of Quebec", in *Safety in Ice Hockey*, ASTM STP 1050 (1989)](https://doi.org/10.1520/STP24041S) — 49 teams; playing without body-checking produced fewer hostile aggression penalties*

*Not established: the claim that most amateur penalties are **frustration-driven** specifically. Penalty-type data exists and is cited above, but no published study in amateur hockey codes penalty **motive** — establishing that would require video-coding each penalty against the preceding play for provocation, which nobody has done. The motive claim is presented as coaching experience rather than measured fact, and two adjacent findings (McFaul 2026, Kirker 2000) point the other way.*

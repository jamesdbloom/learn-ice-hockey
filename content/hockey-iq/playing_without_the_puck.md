# Playing Without the Puck

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline. **Playing in Britain? The IIHF flags are yours** — every level of UK hockey runs the IIHF book, amended locally; see [UK and England Rules](../foundation/uk_rules.md).
>
> **Related:** [Puck Support and Spacing](puck_support_and_spacing.md) · [Time and Space](time_and_space.md) · [Scanning and Anticipation](scanning_and_anticipation.md) · [Defending the Rush](../systems/defending_the_rush.md) · [Risk Management](risk_management.md) · [Body Contact and Battles](../technique/body_contact_and_battles.md) · [How to Watch Hockey](../off-the-ice/how_to_watch_hockey.md) · [Center](../positions/center.md) · [Winger](../positions/winger.md) · [Defender](../positions/defender.md) · [Goaltender](../positions/goaltender.md) · [UK and England Rules](../foundation/uk_rules.md)

## Overview

You spend almost all of your ice time without the puck, and what you do in that time decides what the few seconds with it are worth. NHL tracking data — which the league itself calls unofficial — puts a forward at about forty seconds of possession in every twenty minutes of five-on-five play, in bursts of about 1.3 seconds each.

**Off-puck play is not one skill, it is four.** What you do while your team has the puck is close to the opposite of what you do while the other team has it, and both differ again from the two scrappy states in between — a loose puck nobody owns, and the moment possession has just changed. Most players have a plan for one of the four.

**Being unmarked is not the same as being available.** Three things make you passable to: your stick flat on the ice, a straight line between you and the player with the puck, and nobody's stick in that line. Fix the line before you complain about the pass — then go when the passer's head comes up rather than when the space appears, because getting open a second early is the same as never getting open. And come back *toward* the puck instead of skating away and hoping.

**Racing an opponent to a loose puck along the wall is a race into head-on contact with the boards, and the posture you arrive in is what decides the cost.** USA Hockey's *Heads Up Hockey* materials, citing Tator et al., attribute *"almost all on-ice cervical spine injuries"* to a head *"slightly flexed (head down) while making head-on contact with the boards or goal post"*, and add that *"a player doesn't have to be going at full speed for this to happen — it can occur at walking speed."* Get there with your skates parallel to the wall, take the contact on your forearm and hip, head up and chin off your chest, and never turn your back to the wall or duck.

**When the other team has the puck, whether you may use your body at all is a question about your league.** Stick on the puck first, body on the player second — and body checking is banned outright in younger age groups and in all girls' and women's play under both USA Hockey (Rule 604(a)) and Hockey Canada (Rule 7.3) — and under Hockey Canada in any other division a Member has approved as non-check, so age alone does not settle it, while most adult recreational leagues do not permit it either. **In Britain neither book states an age. Ask your league.** Find out which you are in before you play a shift.

None of it requires a skill you do not already have.

---

## The central premise: you almost never have the puck

This is worth quantifying honestly, because the number is more extreme than most players guess.

### What the tracking data says

The NHL installed puck and player tracking (PPT) in every arena for the 2021-22 season, and added an individual puck-possession model to its data stream in March 2023. A 2025 study from the University of Waterloo used that data across 1,194 games of the 2023-24 NHL season, covering 671 skaters, to measure how long individual players actually hold the puck at **5-on-5** — five skaters a side with both goaltenders in net. Note that 5-on-5 is not the same as even strength: 4-on-4 and 3-on-3 are also even strength, and the paper deliberately reports 5-on-5 only. Every figure below is 5-on-5.

The headline findings, all normalised to 20 minutes of ice time so that players with different roles can be compared:

| Measure | Forwards | Defencemen |
|---|---|---|
| Total puck possession per 20 minutes of ice time | **0:40** (95% CI 0:39–0:41) | **0:49** (95% CI 0:48–0:50) |
| Number of separate possessions per 20 minutes | 31.3 | 37.1 |
| Average length of one possession | 1.27 sec | 1.32 sec |
| Puck possession *in the offensive zone* per 20 minutes | 0:18 | 0:09 |

The study's own summary of that first row: players spend **about 3.3% to 4.2% of their ice time with the puck.**

Two more numbers from the same work, because they reframe what "having the puck" even means:

- The average individual possession lasts **1.29 seconds** across all skaters. In the offensive zone — where you most want to do something clever — it drops to **1.05 seconds**.
- The single highest total possession time in the league belonged to Quinn Hughes at **1:37 per 20 minutes**, followed by Cale Makar at 1:25 and Mathew Barzal at 1:21. Even the most puck-dominant player in the NHL holds it for under two minutes per twenty.

**USA Hockey's own hand-tracked puck-possession study** of the 2002 Olympic Winter Games and the 2002 Youth Tier I National Championships puts the **men's per-game average at 1:07** with the puck (1:01.4 in the men's gold-medal game itself). Different method, different era, same order of magnitude.

The youth half of that study is more interesting than it first looks, and it has to be read bracket by bracket rather than as one number:

| Level | Game length | Puck possession per game |
|---|---|---|
| Olympic men (per-game average) | 60 min | **1:07.05** |
| Olympic women (per-game average) | 60 min | **1:12** |
| 14-and-Under nationals | 48 min | **1:06.02** |
| 16-/18-and-Under nationals | 51 min | **48.3 s** |
| 12-and-Under nationals | 45 min | **38.4 s** |

So the striking line — that the best youth players held the puck about as long as the best professionals — is true of the **14-and-Under** bracket and of that bracket only. The two levels either side of it are well under half the Olympic figure. The headline nobody should lose sight of is the one USA Hockey itself drew: across every level measured, from Olympic professionals down to 12-and-Under, **the maximum average a player possessed the puck in a single game was a minute and twelve seconds.**

### Putting it in your terms

Some arithmetic, all of which is mine rather than any source's — including the two inputs it starts from.

Across the 2024-25 NHL regular season, forwards who played at least 40 games averaged **15:17 of ice time per game**; defencemen averaged **19:31**. A separate sample of 8,325 shifts from 11 NHL games in that season gives a **mean shift length of 47 seconds and a median of 45**. **Neither of those is a published figure** — the ice-time averages are calculated from Hockey Reference's 2024-25 skater table, the shift lengths from the NHL's public shift-chart API across a small sample of games chosen for convenience. They are not on the same footing as the peer-reviewed possession data above. Both computations are set out in full in the written *Notes on verification* section.

Take a forward with 15:17 of ice time. If the study's 5-on-5 rate held across all of it:

- They are on the ice for roughly **a quarter of the 60-minute game**.
- On the study's 5-on-5 rate, a forward with that ice time holds the puck for **about 30 seconds** — under **1% of the game clock**.
- That 30 seconds arrives as roughly **24 separate possessions**, each lasting a little over a second.
- Across about 19 or 20 shifts, that is **a bit more than one possession per shift**.
- In the offensive zone, with the puck, they have **about 14 seconds** for the whole game.

For a defenceman at 19:31, the equivalents are about **48 seconds** total and **roughly 9 seconds** in the offensive zone.

### What that means for how you practise

```facts
Key: Working only on what you do with the puck trains three to four percent of your ice time — the other 96% is untrained
Key: The three-to-four percent is 5-on-5 only and normalised per 20 minutes of ice time, and the arithmetic joining it to a real shift is this document's own — the right shape, not decimals to defend
Risk: The untrained 96% decides whether your possessions happen in a dangerous place with your head up, or in a corner with two men on you
Mindset: Skill work is not wasted — one and a quarter seconds is a brutally short window in which to be unskilled
Action: Improve the fifteen minutes you spend on the ice without the puck — it is the most reliable way to get more out of your thirty seconds with it
```

If you spend every practice and every stickhandling session working on what you do with the puck, you are training **three to four percent of your ice time**. That work is not wasted — those 24 possessions are where goals get created, and one and a quarter seconds is a brutally short window in which to be unskilled. But the other **96%** is currently untrained, and it is the part that decides whether those 24 possessions happen in a dangerous place with your head up, or in a corner with two men on you.

Put it the other way round. The most reliable way to get more out of your thirty seconds with the puck is to improve the fifteen minutes you spend on the ice without it.

> **Caveat, stated once and applying to all of the above:** the possession figures are 5-on-5 only and are normalised per 20 minutes of ice time. Real ice time includes power plays and penalty kills, where possession patterns differ. The NHL calls this dataset unofficial and it may differ from hand-tracked data. The arithmetic combining possession rates with ice time and shift length is mine, not the researchers'. Treat the numbers as the right *shape*, not as decimals to defend.

---

## The four off-puck states

```facts
Read: At any instant that you do not have the puck you are in one of four states — your team has it, they have it, it is loose, or it has just changed
Priority: When two states apply, take the one that names the more urgent job — a loose puck you can get to is State 3, whatever else is going on
Convention: The four states are a working sort, not a mathematical partition — states 3 and 4 genuinely overlap, and the value of the sort is that it changes what you look at and where you skate
Key: The state changes without warning several times a shift, and most bad off-puck play is a player still doing the right thing for the previous state
Key: Most players have a plan for one state only, which is exactly why States 3 and 4 are where the most improvement is available
```

Here is the organising idea for the rest of this document. At any instant that you do not have the puck, you are in one of four states, and each one asks something different of you:

| State | Who has the puck | Your job in one line |
|---|---|---|
| **1. Support** | Your team | Get open, create options, occupy defenders |
| **2. Defending** | Their team | If you are the closest, pressure the puck. If you are not, deny space, watch your man, and layer behind whoever is |
| **3. Scramble** | Nobody — the puck is loose | Win the race with body position, or protect what is behind you |
| **4. Transition** | Just changed, nothing settled | Recognise it first and act before the other side does |

**This is a working sort, not a mathematical partition.** States 3 and 4 overlap: a loose puck in the middle of a change of possession is genuinely both. When two apply, take the one that names the more urgent job — if there is a puck on the ice that nobody owns and you can get to it, that is State 3, whatever else is going on. The value of the sort is that it changes what you look at and where you skate, not that it carves the game into disjoint boxes.

Two other things about this framework matter more than the framework itself.

**The state changes without warning, several times a shift.** A blocked shot turns State 1 into State 3 in a tenth of a second. Most bad off-puck play is not a player doing the wrong thing for the state — it is a player still doing the right thing for the *previous* state. This is why [Scanning and Anticipation](scanning_and_anticipation.md) is the foundation under all of this: you cannot switch states you have not noticed.

**Most players only have a plan for one state.** Offensive players have a plan for State 1. Defensive players have a plan for the covering half of State 2. Almost nobody has a plan for States 3 and 4, which is exactly why those two are where the most improvement is available.

---

## State 1 — Your team has the puck and you don't

You are one of four teammates without the puck. Your job is to make the puck carrier's next decision easy. There are three ways to do that, and only one of them involves receiving a pass.

### Get open

Become a passing option. This is the obvious one and it gets its own full section below.

### Create options you never use

```facts
Goal: Be a credible option even when the puck never comes — one the carrier looks at and declines has still made a defender respect it
Key: Two credible options force a defender to choose; one option lets them sit in the lane
Position: Support is about being available in a different place, not about being close — the geometry belongs to Puck Support and Spacing
```

A passing option that the carrier *looks at* and declines still did its job, because a defender had to respect it. Two credible options force a defender to choose; one option lets them sit in the lane. This is the whole logic of [Puck Support and Spacing](puck_support_and_spacing.md) — support is about being available in a *different place*, not about being close.

### Occupy a defender

```facts
Action: Take a defender away from where the play is going to happen, whether or not the puck ever comes to you
Key: Being the wrong player to receive the pass does not excuse you from doing anything
Read: As the far-side winger with the puck on the opposite half-wall, whether you drift into the middle or hold width changes what the strong-side defenceman can do
```

Take a defender away from where the play is going to happen, whether or not the puck ever comes to you. Also below, in its own section, because it is the least understood work in hockey.

**The reason to think of these as three separate jobs:** on any given shift you may be the wrong player to receive the pass, and that does not excuse you from doing anything. If you are the far-side winger and the puck is on the opposite half-wall (the boards area roughly level with the faceoff dot), you may not touch the puck at all — but whether you drift into the middle or hold width changes what the strong-side defenceman can do.

---

## State 2 — They have the puck

Somebody on your team has to go to the puck, and the other four have to do something else. Both halves of that are off-puck work, and both are covered here — the pressuring job first, because everyone else's job is defined relative to it, and then the four players who are not pressuring, which is where amateur teams actually leak goals.

### If you are the one pressuring

```facts
Goal: Take options away and force the carrier to decide early — winning the puck is a bonus, not the job
Action: Angle, do not chase. Approach on a curve that closes one side of the ice, so the only route left is the one your support is covering
Action: Steer them where your help is; angling a carrier into the middle while your support sits on the wall is worse than not pressuring at all
Technique: Arrive under control — close the last few feet with short strides, stick out front, in a position to change direction
Priority: Stick on the puck, body on the man, in that order — take the body only where your league permits checking, and only when it does not cost you the lane behind you
Rule: Check whether you may hit at all — body checking is banned under USA Hockey 604(a) at 12U and below, in all girls'/women's and all non-check adult classifications, and under Hockey Canada 7.3 at U13 and below, throughout female hockey and in any Member-approved division
Rule: In Britain neither the IIHF Rule Book nor the In-House Rules states a body-checking age. Ask your league; British women's play runs IIHF Rule 101.1 unamended
Rule: IIHF Rule 101.1 permits bodychecking in women's play only with clear intention of playing or gaining possession of the puck, and subject to the exception the rule itself then sets out — any move to step or glide into an opponent is at least a minor, up to a major plus an automatic game misconduct
Action: Talk, because you are the trigger — "I've got the carrier" tells your support where to stand, and silence makes four people guess
Convention: Who goes is a coaching choice — under the 2-1-2 and low zone collapse used throughout the nearest player pressures; under a 1-2-2 only one forward pressures at all, and under a trap almost nobody pressures deep
```

Roughly a fifth of the time it is you: **F1 on the forecheck, the first defender back on a rush, the strong-side defenceman in your own corner.** (**F1, F2 and F3 are roles defined by order of arrival, not positions** — whoever gets there first is F1.) The job is not to win the puck; winning it is a bonus. The job is to **take options away and force the carrier to decide early**, so that your four teammates are covering a narrower set of possibilities than they were a second ago.

- **Angle, do not chase.** Approach on a curve that closes one side of the ice, so the only route left is the one your support is covering. Skating straight at somebody gives them both sides and gives you nothing.
- **Steer them where your help is.** Your pressure and the second layer are one play, not two. Angling a carrier into the middle while your support sits on the wall is worse than not pressuring at all.
- **Arrive under control.** Full speed with your feet stopped is how you get beaten with one movement. Close the last few feet with short strides, stick out front, in a position to change direction.
- **Stick on the puck, body on the man — in that order.** Take the body only when it does not cost you the lane behind you. A missed hit is a five-second absence. **And check whether you may hit at all:** body checking is banned under USA Hockey 604(a) at 12U and below, in all girls'/women's and all non-check adult classifications, and under Hockey Canada 7.3 at U13 and below, throughout female hockey and in any Member-approved division. **In Britain neither book states an age at all** — the IIHF Rule Book sets no checking age and the In-House Rules add none, so ask your league and get the answer in writing. **British women's hockey runs IIHF Rule 101.1 unamended, and that is a restricted permission, not a licence to hit:** it allows bodychecking *"when there is a clear intention of playing the puck or attempting to 'gain possession' of the puck with the exception from the situation described in this rule"* — that is, subject to the exception the rule itself then sets out — and *"[a]ny move by a Player to step or glide into an opposing Player will be assessed at least a minor penalty (2') for an 'illegal hit'"* — at least, because 101.1's own range runs up to a *"Major penalty (5') and automatic game misconduct penalty"*. Where it is not permitted, this bullet is angling, stick checks and body position — all legal everywhere. See [Body Contact and Battles](../technique/body_contact_and_battles.md) §1.
- **Talk, because you are the trigger.** "I've got the carrier" tells your support where to stand. Silence makes four people guess.
- **Who goes is a coaching choice.** Under the house default used throughout — a **2-1-2 forecheck** in their end and a **low zone collapse** in yours — the nearest player pressures and the second supports. Under a **1-2-2** only one forward pressures at all and the others hold the middle; under a trap, almost nobody pressures deep. Find out which you play. See [Forechecking Systems](../systems/forechecking_systems.md) and [Defensive Zone Coverage](../systems/defensive_zone_coverage.md).

### If you are not the one pressuring

```facts
Position: Four of you are off the puck on defence at any moment, and only one teammate is on it
Risk: Those four non-pressuring players are where goals get conceded, because they either all chase the puck or all stand still
Key: The single organising question is "what is behind me, and who is it?"
```

Four of you are in this position at any moment, and this is where goals get conceded, because the four non-pressuring players either all chase the puck or all stand still.

The single organising question: **what is behind me, and who is it?**

### Watch your assignment, not the puck

```facts
Never: Watch the puck on defence — five teammates are already looking at it, and your man is the one thing nobody else is looking at
Technique: Keep your assignment in your peripheral vision while your eyes take short, repeated looks at the puck — not the reverse
Read: If you cannot see your man and the puck in the same glance, you are in the wrong place — adjust your position until you can
Convention: Coaches name puck-watching as the commonest amateur defensive error — an observation rather than a measured ranking, since no published work ranks amateur mistakes by frequency
```

The defensive error coaches name most often in amateur hockey is watching the puck — an **observation rather than a measured ranking**. Hockey does have on-ice gaze research, but it measures *when* a defender's eyes settle during a defensive-zone play, not how often amateurs make which mistake, and no published work ranks amateur errors by frequency; [Scanning and Anticipation](scanning_and_anticipation.md) sets out what that research does and does not cover. It feels responsible. It is not, because the puck is the one thing on the ice that five teammates are already looking at, and the man you are supposed to be covering is the one thing nobody else is looking at.

The technique is to keep your assignment in your **peripheral vision** while your eyes take short, repeated looks at the puck — not the reverse. If you cannot see your man and the puck in the same glance, you are in the wrong place: adjust your position until you can.

### Stick in the lane, body between man and net

```facts
Technique: Blade on the ice, flat, in the passing lane between the puck and your man — a stick held six inches up removes nothing
Position: Put your body between your man and your own net, not between your man and the puck
Technique: Face up-ice enough to see the play, stay on the goal side of your man, and let your stick reach across into the lane
Priority: When you cannot both seal the lane and stay net-side, net-side wins in the defensive zone
Key: A pass completed twenty feet from your net is survivable; a player alone at the goalmouth is not
```

Two separate tools, and players routinely use only one.

- **Your stick takes away the pass.** Blade on the ice, in the passing lane between the puck and your man. A stick lying flat in a lane removes a pass that a stick held six inches up does not.
- **Your body takes away the shot and the net drive.** Position yourself between your man and your own net, not between your man and the puck.

Doing both at once is a body-position problem: face up-ice enough to see the play, stay on the goal side of your man, and let your stick reach across into the lane. When they conflict — you cannot both seal the lane and stay net-side — **net-side wins in the defensive zone**, because a pass completed twenty feet from your net is survivable and a player alone at the goalmouth is not.

![](diagram:stick-in-lane-body-net-side)

### Layer, do not duplicate

```facts
Never: Go and pressure a carrier a teammate is already pressuring
Position: Be the second layer instead — behind and slightly to the side of them, in the space they would be beaten into
Key: Puck Support and Spacing has the layering distances
Convention: Whether you hold the layer is system-dependent — under the low zone collapse used throughout you sink toward the slot and cover areas; in man-to-man you may have to leave the layer to follow your check to the point; a hybrid is man low and zone high
Action: Ask your coach which coverage you play, and what the trigger is for switching
```

If a teammate is already pressuring the puck carrier, **do not go and pressure them too.** Position yourself as the **second layer** instead: behind and slightly to the side of them, in the space they would be beaten into.

**[Puck Support and Spacing → Support when defending](puck_support_and_spacing.md) has the geometry** — the converge-versus-layer choice, how far behind and how far off to the side to sit, what to read while you sit there, and when a deliberate double-team is the exception. The distances are set out there.

What belongs here is the part that is not geometry at all:

> **This is a system-dependent job.** In the **low zone collapse (zone) coverage** taken as the default throughout, the non-pressuring players sink toward the slot and cover *areas*, so layering behind the puck-pressurer is natural. In **man-to-man** coverage you stay with your assigned player wherever they go, which means you may have to leave the layer to follow them out to the point. In a **hybrid** scheme you play man-to-man low and zone high, so the answer changes depending on where you are standing. Ask your coach which one you play, and ask what the trigger is for switching. Full detail in [Defensive Zone Coverage](../systems/defensive_zone_coverage.md).

---

## State 3 — The puck is loose

Nobody has it. It is on the boards, in a corner, sitting in the slot after a save, or skittering out of a scrum. This is the state nobody teaches, and it recurs dozens of times a game.

### Who goes

```facts
Convention: Who goes is a coaching choice — under the 2-1-2 default the nearest two forwards go and the third reads; under a 1-2-2 one player goes and the other two hold the middle
Key: F1, F2 and F3 are roles defined by order of arrival, not by position — whoever gets there first is F1
Position: In your own zone under a low zone collapse, the closest player takes the corner, one teammate supports on the boards side and one covers the net front — never two
Action: One player goes hard, one player supports, nobody else joins — the rule that survives every system
Risk: Two players arriving at the same loose puck from the same angle is a turnover waiting to happen, because both are committed and neither is available
Action: If it is genuinely ambiguous, call it — "I got it", "yours", "help" — and the call resolves it
```

The honest answer is that this is a **coaching choice**, and the worst version is not knowing.

Under the house default used throughout — a **2-1-2 forecheck** in the offensive zone — the first forward in (F1) pressures the puck and the second (F2) supports them, so on a loose puck in their end **the nearest two forwards go and the third reads**. Remember that **F1, F2 and F3 are roles defined by order of arrival, not by position**: whoever gets there first is F1, whether they are a centre or a winger.

Under a **1-2-2**, only one forward goes and the other two hold the middle, so on the same loose puck **one player goes and the others do not**. Under a **1-3-1 neutral zone** structure the read is different again. In your own zone, under a low zone collapse, the loose puck in the corner is taken by whoever is closest with **one teammate immediately supporting on the boards side and one covering the net front** — never two.

![](diagram:loose-puck-who-goes)

Find out which of these your team plays. Then, the rule that survives every system:

**One player goes hard. One player supports. Nobody else joins.** Two players arriving at the same loose puck from the same angle is a turnover waiting to happen, because both are committed and neither is available.

If it is genuinely ambiguous, **call it** — "I got it," "yours," "help" — and the call resolves it. Hockey's off-puck problems are disproportionately communication problems.

### Then how you arrive — covered elsewhere

```facts
Key: Deciding who goes is the off-puck question this document answers; how you arrive belongs to Body Contact and Battles, §10
Priority: Winning the puck never justifies arriving in any orientation other than the safe one
Technique: Get your skates parallel to the boards before contact, and take it on your forearm and hip, not the point of your shoulder
Technique: Head up, chin off your chest
Never: Turn your back to the wall, or duck
Key: Squaring your chest to the boards is the fallback for when you cannot turn in time, not the target
```

Deciding *who* goes is the off-puck question, and it is the one this document answers. What the two players who go should actually do when they get there is not: winning the race is not winning the puck, and how you arrive, how you take body position, what the rules entitle you to, and — above all — how not to get hurt doing it all belong to **[Body Contact and Battles → Loose Puck Races and 50-50 Pucks](../technique/body_contact_and_battles.md)**, which quotes the USA Hockey entitlement standard and the NHL interference rule that make inside body position legal, and carries "first to arrive, last to commit" with its limits.

> **⚠️ One thing from there that outranks winning the puck, repeated here because the moment it applies is this one.** A puck race to the wall is a race into the boards, and the posture you arrive in is what the evidence is actually about. USA Hockey's *Heads Up Hockey* materials, citing Tator et al., attribute *"almost all on-ice cervical spine injuries"* to a head *"slightly flexed (head down) while making head-on contact with the boards or goal post"*, and add that *"a player doesn't have to be going at full speed for this to happen — it can occur at walking speed."* The same materials call keeping your head up *"the single most important thing to know and do to prevent head injuries"* — which ranks the habit, not the moment, and nothing in the safety material held for this corpus ranks game situations by danger. [Body Contact and Battles → §10, Loose Puck Races and 50-50 Pucks](../technique/body_contact_and_battles.md) covers the same ground under "Protecting yourself on the boards", and **everything in its §6 applies at exactly this moment**. The non-negotiables: get your **skates parallel to the boards** before contact, take it on your **forearm and hip** — not the point of your shoulder — with your **head up and chin off your chest**, and **never your back to the wall, never duck**. Squaring your chest to the boards is the fallback for when you cannot turn in time, not the target. Winning the puck never justifies arriving in any other orientation.

### What to prioritise when structure has broken down

```facts
Priority: The front of your own net first — if nobody is there, go there, because nothing else matters as much
Priority: Then take away the shooter's stick, not the puck. Lift it up rather than sideways and below their bottom hand, or seal the blade
Priority: Then get it out of the danger area — anywhere is better than the slot, and this is the one moment an unglamorous clear is unambiguously correct
Rule: Do not clear it directly out of play, though — from your own zone that is a two-minute delay-of-game minor (NHL Rule 63.2(iii)); off the glass and along it is fine
Rule: Do not rely on a skate clear under the IIHF — its Rulebook 63.2(III) names only "hand or stick" in 2025/26 and 2026/27 alike, but 63.2(II) reaches a deliberate one by foot from anywhere; its Handbook answers Yes to a kick over the glass (Situation 63.34, all three editions), so clear with the stick
Rule: Over the glass at the bench is penalised — "behind" it under NHL 63.2(iii), "surrounding" it under IIHF 63.2(III); the carve-outs are boards with no glass, a puck straight into the bench, and one out directly off a faceoff; the IIHF Handbook exempts only a puck going straight in (Situation 63.24)
Rule: USA Hockey has no strict-liability equivalent — Rule 610(c) penalises only a deliberate shoot-out, and 631(d) makes an accidental one a last-play faceoff
Rule: Deliberately shooting or batting the puck out of play is a minor "from anywhere on the ice surface" — no zone limit in any of the four books, and the NHL and IIHF name leg, foot or arm as well as hand or stick (NHL/IIHF 63.2(ii); USA Hockey 610(c); Hockey Canada 10.1(ii))
Rule: All four books reach the after-the-whistle one — NHL and IIHF 63.2(ii) and USA Hockey 610(c) in terms, Hockey Canada at Rule 11.1, preamble item (v), rather than in Rule 10.1; and USA Hockey escalates a single act, to a misconduct (601(c)(10)) and a game misconduct if done in protest (601(d)(7))
Priority: Then, and only then, look for the outlet — the exit pass before the danger is gone is how a scramble becomes a goal against
Action: The mirror image applies in their end — net front first, sticks free, and shoot from anywhere before you try to be clever
```

Sometimes there is no structure left — a scramble in front of your net, three players down, sticks everywhere. When you cannot work out the right play, work down this list in order:

1. **The front of your own net.** If nobody is there, go there. Nothing else matters as much.
2. **Take away the shooter's stick, not the puck.** Lift it **up rather than sideways and below their bottom hand**, or seal the blade. You do not need to win the puck to prevent the shot. **The lift has to be low, because at or near the hands it is hooking under three of the four books**: on the location alone under the IIHF's **Rule 55.1**, and under **USA Hockey's Rule 623** and **Hockey Canada's Interpretation 1 to Rule 8.2(a)** where it stops the opponent playing the puck. [Body Contact and Battles → Stick Checks](../technique/body_contact_and_battles.md#3-stick-checks--legal-effective-and-under-used) carries the wording, the one book that does not reach a lift at the hands, and the IIHF sentence that pulls against 55.1.
3. **Get it out of the danger area** — anywhere is better than the slot. This is the one moment where an unglamorous clear is unambiguously correct. **Not directly out of play, though.** Under **NHL Rule 63.2(iii)** a minor is assessed on any player who *"shoots or bats (using his hand or his stick) the puck directly (non-deflected) out of the playing surface from his defending zone, except where there is no glass"*, and the rule adds that *"when the puck is shot over the glass 'behind' the players' bench, the penalty will be assessed"* — so the three carve-outs are a stretch of boards with no glass mounted above it, a puck shot **into** the bench, and one that leaves the rink directly off a faceoff. ⚠️ **Do not read the bench one as somewhere to aim, because the IIHF narrows it to almost nothing.** Its **Rule 63.2(III)** carries the same limb, and in two places not in the same words — carving out *"except where there is no protective glass"* where the NHL says *"no glass"* and writing its bench clause *"when the puck is shot over the protective glass **surrounding** the Players' bench, the penalty will be assessed"* where the NHL says *"behind"* — *"surrounding"* appears to reach glass at the **sides** of the bench that *"behind"* does not obviously reach, though neither book explains the difference and no officiating source was found that settles it. And its **Situation Handbook**, at **Situation 63.24** in the same words in the 2025/26 (v1.1) and 2026/27 editions, puts a clear that goes **over** the glass and *lands* in the Players' Bench and still calls the minor: *"the determining factor… is where the puck leaves the playing surface"*, judged on *"an imaginary plane that continues upwards to the roof from the top of the glass"*, with only a puck *"shot **directly** into the Players' Bench (where there is no glass)"* escaping. **Situation 63.28** adds that a player who has broken his stick and **scoops the puck over the glass with a glove** takes the minor too, *"considered shooting or batting the puck with the hand resulting in the puck leaving the playing surface"*; **Situation 63.3** exempts a puck that *"clears the glass at a point in the Penalty Bench where the glass is lower than the normal height around the rink."* The Handbook ranks below the Rulebook on its own Foreword, so read these as how it is officiated. ⚠️ **That limb names the hand and the stick and not the skate — do not read it as a licence to clear the puck with your foot.** Its IIHF twin, **Rule 63.2(III)**, is worded the same way, *"using their hand or stick"* — but the IIHF **Situation Handbook** penalises a kicked puck, and does so twice. **Situation 63.34** puts the bare case — *"A defending player in the defending zone kicks the puck causing it to go over the glass and out of play. Does the minor penalty for delay of game apply?"* — and answers *"Yes"*, citing no rule, **in the 2025/26 v1.0 and v1.1 Handbooks and in the 2026/27 Handbook alike**. **Situation 63.19** puts the harder version: a defender who *"kicks at the puck as it goes by to block the shot or pass"* so that it *"goes directly off the foot and over the glass"*, answered in the **2025/26 v1.1 (August 2025)** edition with a bare *"Yes."*, again citing no rule. That **reverses its own previous edition**: v1.0 (June 2025) answered *"No. Rule 63.2 (III) states that the player must have shot or batted the puck using the hand or the stick."* **That reversal has since held across an edition boundary: the 2026/27 Handbook (Version 1.0, June 2026) puts Situation 63.19 in the same words and answers *"Yes."* again, while the 2026/27 Rulebook's 63.2(III) is unchanged, still naming only *"their hand or stick"*.** ⚠️ **63.34 is why not to call v1.1 a change of position:** v1.0 answered *"No"* at 63.19 and *"Yes"* at 63.34 at the same time, so reading v1.1 as bringing the outlier into line with an answer the Handbook had been giving all along is the more economical account — **but that is an inference about an intention the IIHF has not written down**, and since neither situation cites a rule, no edition of either document says *why* the answer is Yes. ⚠️ **And the Rulebook has a foot clause of its own, which neither situation mentions:** the second limb described below, **63.2(II)**, reaches a player who *"**deliberately** shoots or bats (using their hand, leg, foot, arm, stick etc.) the puck outside the playing area **(from anywhere on the ice surface)**"* — no zone limit, and the one clause in the whole of Rule 63 that names the foot. Because the Handbook cites nothing, **whether it is applying (II) or reading (III) more widely than its words is stated nowhere.** **So whether the two documents actually conflict turns on a word neither of them defines:** if *"deliberately"* attaches to **putting the puck out**, a kick meant to block a pass is not (II)'s offence and the Handbook's Yes must come from a reading of (III) wider than (III)'s words; if it attaches to **the kick**, the Handbook's Yes is (II) applied as written and there is nothing to report. The IIHF's own material pulls both ways, and **Situation 63.29** runs the opposite way again — a goalkeeper's reactive stick save that clears the glass draws *"No"*, **narrower** than 63.2(III)'s words, in v1.0, v1.1 and 2026/27 alike. The Handbook's Foreword ranks it below the book — *"in case of any contradictions, the valid IIHF Rulebook is always the basis"* — and neither the reversal nor its reason is explained in any of them. Under the IIHF book **the safe play is to clear with the stick**, which is the right answer on every reading of the pair. None of that is a statement about the NHL beyond its own rulebook wording: the NHL's situation handbook is not held in this corpus and has not been read. [Risk Management](risk_management.md) carries the pair in full, with the arguments on both sides of *"deliberately"*. **USA Hockey has no strict-liability equivalent:** Rule 610(c) penalises only a *deliberate* shoot-out, and Rule 631(d) makes an accidental one a last-play faceoff. ⚠️ **But there is a second limb, and it does reach the skate, and every zone.** **Rule 63.2(ii)** assesses the same minor on any player who *"deliberately shoots or bats (using his hand, leg, foot, arm, or stick, etc.) the puck outside the playing area (from anywhere on the ice surface) during the play or after a stoppage of play"*, with **IIHF Rule 63.2(II)** carrying the same clause in the plural — so a *deliberate* clear out of play is two minutes **from anywhere on the ice, and after the whistle as well**. **On that deliberate limb all four books agree, and none of them limits it by zone:** USA Hockey **610(c)** assesses a minor on any player or goalkeeper who *"delays the game by deliberately shooting or batting the puck outside the playing area, including after a stoppage of play"*, and **Hockey Canada 10.1(ii)** reaches a player who *"deliberately shoots, bats, or throws the puck outside the playing surface"*. ⚠️ **The after-the-whistle words are in three of the four *delay-of-game* rules, but all four books reach the act.** The NHL's and the IIHF's 63.2(II) carry them, and so does USA Hockey's 610(c). **Hockey Canada 10.1(ii) does not carry them** — its Rule 10.1 could not carry the escalation anyway, since **10.1(d)** provides that *"No Misconduct penalty may be assessed for Delay of Game"* — so it writes the case somewhere else: **Rule 11.1** lists among Unsportsmanlike Conduct, *"which will be penalized at the discretion of the Referee"*, **preamble item (v)**, *"Shooting the puck out of the playing area, after the whistle"*, made *"a Minor or Bench Minor penalty"* by 11.1(a). ⚠️ **Cite that one by its list, because Rule 11.1 carries two roman-numeral lists that collide at (v)** — the preamble's is the puck out of play, while 11.1(d)'s own item (v) is a player who *"[e]nters or remains in the Referee's crease while the Referee is reporting to or consulting with any game official"*, a different offence entirely. Above the minor sits a Misconduct under **11.1(d)(i)**, for a player who *"[p]ersists in Unsportsmanlike Conduct, after receiving a Minor penalty under Rule 11.1 (a)"*, and a Game Misconduct under **11.1(e)** for persisting after a minor or a misconduct. ⚠️ **Neither of those buys you one free minor first.** **Note 1 to 11.1(d)** reads *"A Referee is not required to assess a Minor penalty under this rule before assessing a Misconduct penalty, but may assess either penalty initially"*, and Note 1 to 11.1(e) is in the same terms for the Game Misconduct — so the referee may start at the misconduct, and the minor a reader expects to come first need never have been called. Rule 10.1's own preamble reaches the same ground a second way, since it covers any player or team who *"deliberately causes a stoppage of play or delays the restart of play"* and says the list beneath it *"includes, but is not limited to"* the actions named. ⚠️ **And under USA Hockey the after-the-whistle one is not capped at two minutes.** Above 610(c)'s minor, **Rule 601(c)(10)** makes it a **misconduct** where it is *"not done in protest of an official's decision or in the direction of a spectator"* — and **601(d)(7)** makes it a **game misconduct** where it *is* done *"in protest of an official's decision."* The NHL and the IIHF write no equivalent escalation. [Risk Management](risk_management.md) carries that ladder in full, including the match penalty at the top of it. **Hockey Canada has no strict-liability limb for a skater either:** its 10.1(v) reaches only a goaltender *"who shoots or bats the puck directly out of the playing surface, with their stick"*. Off the glass and along it is fine everywhere.
4. **Then, and only then, look for the outlet.** Trying to make the exit pass before the danger is gone is how a scramble becomes a goal against.

The mirror image applies in their end: net front first, sticks free, and shoot from anywhere before you try to be clever. See [Risk Management](risk_management.md) for the general principle.

---

## State 4 — Transition, possession undecided

Possession has just changed, or is in the act of changing, and neither team has organised. This is the most chaotic state, and the highest-leverage one, because **defensive structure takes several seconds to form and your opportunity exists only inside those seconds.**

### Why it matters so much

```facts
Key: Every organised defensive structure is designed and rehearsed, and against a set structure your options are limited
Read: In the two or three seconds after a turnover that structure does not exist yet — players facing the wrong way, defencemen up ice, forwards behind the puck
Key: A chance created in that window is created against no structure at all — and the window closes as the structure forms
Risk: That transition window works against you the same way — two seconds of your own disorganisation is where you concede
```

Every organised defensive structure — a defensive-zone box or collapse, a neutral zone trap, a set forecheck — is designed and rehearsed. Against a set structure your options are limited. In the two or three seconds after a turnover, that structure does not exist yet. Players are facing the wrong way, defencemen are up ice, and forwards are behind the puck. A chance created in this window is created against no structure at all, which is why it is worth sprinting for — and why it closes as fast as it opened.

The same is true against you. Two seconds of your own disorganisation is where you concede.

### What to do off the puck in transition

```facts
Action: When you have just won it, turn and go immediately — start moving on the likelihood of possession, not the certainty of it
Risk: Skating hard in the wrong direction is a survivable error; being late means the window is gone
Action: Get width and get depth in the same instant — if everyone does the same one, the breakout dies
Never: All go — transition is exactly where the "one more forward joined the rush than should have" goal against comes from
Read: When you have just lost it, find the most dangerous man, not the puck — usually the man arriving late into the middle rather than the carrier
Never: Everyone sprint to the middle — two wingers and a centre converging there leaves both outside attackers unmarked
Convention: Backcheck lane assignment is a coaching choice rather than a law — the standard one used throughout is centre in the middle lane, wingers on the outside; others use first man back takes the middle, or man-on-man from the puck outward
Action: Count — know whether it is a 2-on-1, a 3-on-2 or a 3-on-3, because the correct behaviour differs completely
```

**When your team has just won it:**

- **Turn and go immediately.** The single biggest transition error is the half-second of hesitation while you confirm your team actually has it. Start moving on the *likelihood* of possession, not the certainty of it. If you are wrong, you have skated hard in the wrong direction — a survivable error. If you are late, the window is gone.
- **Get width and get depth in the same instant.** Somebody has to stretch the ice so the defence has to retreat, and somebody has to be close for the short outlet. If everyone does the same one, the breakout dies. See [Breakouts](../systems/breakouts.md).
- **Do not all go.** Transition is exactly where the "one more forward joins the rush than should have" goal against comes from. Read [Risk Management](risk_management.md).

**When your team has just lost it:**

- **Find the most dangerous man, not the puck.** In transition the puck carrier is usually not the threat — the man arriving late into the middle is.
- **Sprint back on your lane, and make sure somebody has the middle.** Under the standard assignment used throughout — a coaching choice rather than a law — **the centre takes the middle lane and the two wingers take the outside lanes**. So "everyone sprint to the middle" is exactly wrong: two wingers and a centre converging on the middle leaves both outside attackers unmarked. What is always true is that *somebody* owns the middle and nobody assumes it is somebody else — if you are back first and the middle is empty, it is yours. Some teams formalise that as **first man back takes the middle**; others pick up **man-on-man from the puck outward**. [Defending the Rush](../systems/defending_the_rush.md) sets them out, along with the four named team backchecking systems that decide which assignment applies.
- **Count.** Your only real job while backchecking is to know whether it is a 2-on-1, a 3-on-2 or a 3-on-3, because the correct behaviour differs completely. [Defending the Rush](../systems/defending_the_rush.md) covers this in full.

### Recognising it first

```facts
Key: Transition is won by whoever recognises the change of possession earliest, and recognition is a trainable habit
Action: Get your head up before the turnover happens, so you already know where the space is when it does
Risk: If you find out about turnovers by seeing the puck go the other way, you will always be second
```

Transition is won by whoever recognises the change of possession earliest, and recognition is a trainable habit — it is the payoff for scanning. If your head is up before the turnover happens, you already know where the space is when it does. If you find out about turnovers by seeing the puck go the other way, you will always be second.

---

## Getting open: the mechanics of separating from a check

Now the detail on State 1's most obvious job.

### Unmarked is not the same as available

```facts
Key: Unmarked means no defender is near you; available means the carrier can actually get you the puck — the second is the one that matters
Technique: Stick on the ice, blade flat, in a position to receive — the blade is your target, so give the passer something to hit
Position: Give a straight passing angle from the puck to your blade; if the carrier would have to bend the pass around a body, you are not available
Read: Look for a defender's stick lying flat across the only lane — nothing about your own position tells you it is there, and it leaves you unmarked and unavailable
Action: When you get open, look at the passing lane, not at your defender. If the lane is blocked, move three or four feet to open the angle
Action: Say something — a short call gives the carrier information their eyes may not have
```

This distinction is the whole section, so it comes first.

**Unmarked** means no defender is near you. **Available** means the puck carrier can actually get you the puck. They are very different, and the second is the one that matters. To be available you need all three of:

1. **A stick on the ice, blade flat, in a position to receive.** A stick held up in the air is a stick that cannot take a pass. The blade is your target — give the passer something to hit.
2. **A passing angle.** A straight line from the puck to your blade. If the carrier would need to bend the pass around a body, you are not available no matter how alone you are.
3. **No defender's stick in that lane.** Nothing about your own position tells you whether this one is true. You are ten feet from anyone, waving, and there is a defenceman's stick lying flat across the only line between you and the puck. You are unmarked and unavailable.

The practical consequence: **when you get open, immediately look at the passing lane, not at your defender.** If the lane is blocked, move — often only three or four feet, changing the angle enough that the line opens. A small adjustment that opens the lane is worth more than a big burst that does not.

![](diagram:unmarked-but-unavailable)

And say something. A short call gives the carrier the information their eyes may not have.

### Change of speed

```facts
Key: Defenders match speed but struggle to match changes of speed, because reacting costs them a beat
Action: Slow down, then explode — coasting for a stride invites the defender to close and settle, and the moment they settle you go
Never: Arrive at your top speed with nowhere to go — speed is only useful if it creates separation at the moment the pass comes
Technique: Stopping is a change of speed too — a hard stop while your check keeps going creates separation and leaves you facing the play
```

Defenders match speed. They struggle to match *changes* in speed, because reacting costs them a beat.

- **Slow down, then explode.** Coasting for a stride invites the defender to close and settle. The moment they settle, go. It runs against instinct, because slowing down feels like laziness.
- **Never arrive at your top speed with nowhere to go.** Speed is only useful if it creates separation at the moment the pass comes.
- **Stopping is a change of speed too.** A hard stop while your check keeps going creates as much separation as any burst, and it leaves you facing the play.

### Change of direction

```facts
Technique: Two steps one way, then hard the other — the defender's weight has to transfer before they can follow
Read: Attack their hips — break in the direction their hips are not facing
Options: Curl rather than stop-start when you want to keep options; a full stop makes you a stationary target and costs three strides to restart
Action: Come back toward the puck — you arrive with speed the defender cannot match from a standstill, and you shorten the pass
```

- **Two steps one way, then hard the other.** The defender's weight has to transfer before they can follow, and edge-work costs them more time than it costs you because you knew it was coming.
- **Attack their hips.** Break in the direction their hips are *not* facing. A defender whose hips are square to the boards cannot easily follow you to the middle.
- **Curl rather than stop-start when you want to keep options.** A tight turn keeps your feet moving and your head up; a full stop makes you a stationary target and costs you three strides to restart.
- **Come back toward the puck.** Almost every amateur skates away from the carrier and hopes. A player skating *toward* the puck arrives with speed the defender cannot match from a standstill, shortens the pass, and gives the carrier a target moving into space rather than away from it.

### Screens and picks — what is actually legal

```facts
Rule: You are allowed the ice you are standing on and are not required to move in order to let an opponent proceed (NHL Rule 56, Interference)
Rule: You may block an opponent's path provided you are in front of him and moving in the same direction (NHL Rule 56, Interference)
Rule: Moving laterally without establishing body position and then making contact with a non-puck carrier is penalised as interference (NHL Rule 56)
Rule: A pick — moving into an opponent's path without having body position — is an interference minor (NHL 56), and it is not capped there: NHL 56.4 allows a major on the degree of violence, and 56.5 adds a game misconduct where that major injures an opponent
Rule: Above the minor, IIHF 56.5 reaches a major plus a game misconduct where it recklessly endangers, and Hockey Canada 8.3(b) reaches that tier on the degree of violence with nobody hurt, mandatory on injury
Rule: USA Hockey reaches above the minor only from outside Rule 625, by two routes narrower than the other books' — 640(g)'s major plus game misconduct, which a pick meets only through 640(d) with the stick blade above the knees, and 602(a)'s match penalty for reckless endangerment, tied to no named foul
Rule: You are always entitled to use body position to lengthen an opponent's path to the puck, without your stick, your free hand or an otherwise illegal check (NHL Rule 56)
Action: Run your route close past a teammate so your check has to go around them — legal traffic on almost every faceoff and net drive. Past them, not into where they stand, and shout
Never: Stop in a defender's path and take the contact, or drift sideways into a chaser
Key: "Screen" here means the goaltender's sightline and nothing else — the rulebook has no legal skater-on-skater screen, so call yours traffic, or a route
Convention: Obstruction is called far less consistently at amateur level than in the NHL, in both directions — do not build your game on getting away with picks, and do not assume the referee will punish theirs
```

Using a teammate's body to separate from your check is legal within limits, and the limits are precise. The NHL rulebook (Rule 56, Interference) defines them.

**Body position** is defined as "the player skating in front of or beside his opponent, traveling in the same direction." From that definition follow the rules that matter to you:

- **You are allowed the ice you are standing on.** The rulebook states that a player "is allowed the ice he is standing on (body position) and is not required to move in order to let an opponent proceed." Simply being somewhere is not a penalty, even if it is inconvenient for an opponent.
- **You may block a path if you are in front and moving the same direction.** "A player may 'block' the path of an opponent provided he is in front of his opponent and moving in the same direction."
- **You may not step laterally into someone.** "Moving laterally and without establishing body position, then making contact with the non-puck carrier is not permitted and will be penalized as interference." This is the line most illegal picks cross.
- **A "pick" is a penalty.** The rulebook defines it as checking an opponent who is not in possession and is unaware of the impending hit — specifically "one who moves into an opponent's path without initially having body position, thereby taking him out of the play." An interference minor — **and not capped there**: NHL 56.4 allows a major on the degree of violence, 56.5 makes a game misconduct mandatory where a major has been imposed under the rule and it injures, and Hockey Canada 8.3(b) reaches that tier on the degree of violence with nobody hurt, and makes it mandatory on injury. **IIHF 56.5 reaches a major plus a game misconduct where it recklessly endangers, with nobody hurt**, and its 56.1 defines a *"pick"* in terms — *"the action of a Player who checks an opponent who is not in 'possession' of the puck and is unaware of the impending check/hit"*. Only USA Hockey writes no tier above the minor inside Rule 625 itself — and it still reaches one, from outside the rule, by two routes that are both narrower than the other three books'. **Rule 640(g)** is the near one: *"A major plus a game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of any actions falling under Rule 640(b, c, d, e or f)"*, with **640(h)** allowing a match penalty by the same route. ⚠️ **But a pick only gets into Rule 640 through two of those sub-sections, and neither fits it comfortably.** **Rule 640(d)** is a body check *"with no effort to gain possession of the puck"* — but only where *"the blade of the player's stick is above the knees"*, a condition none of the other three books attaches. **Rule 640(b)** is expressly *"(except Adult Male Classifications)"* and reaches an opponent *"who is no longer in control of the puck"*, which does not describe the usual victim of a pick, who never had it. **Rule 602(a)** is the far one and the cleaner fit: a match penalty for a player who *"recklessly endangers or attempts to injure any opposing player"*, tied to no named foul at all, so it reaches a reckless pick directly. Do not read "no tier inside 625" as "two minutes or nothing".
- **You may lengthen an opponent's path with your body.** "A player is always entitled to use his body position to lengthen an opponent's path to the puck," provided they do not use their stick to make themselves bigger, do not use their free hand, and do not use the position to deliver an otherwise illegal check.
- **A stick used to impede without body position is hooking, not interference.** Different penalty, same underlying idea.

The practical, legal version of this for a player trying to get open: **run your route close past a teammate so that your check has to go around them.** You are not hitting anybody, your teammate is not moving into anybody, and the defender simply loses a stride navigating traffic. That is a **legal route through traffic**, and it is available on almost every faceoff and every net drive.

⚠️ **That answers the legality question and stops, and the safety question is a different one.** The collision you are engineering is a defender at chase speed into a teammate who is standing still and facing away, and who cannot see them coming. Run *past* your teammate rather than into the space they are standing in, and give them a shout as you come. **That is a coaching caution, not a rulebook requirement** — the rules above are about what the officials will call, and nothing in them asks this of you.

**A word about the word.** Throughout this guide, **screen** means one thing: standing in the *goaltender's* sightline. There is no such thing in the rulebook as a legal skater-on-skater screen — the rulebook's vocabulary for skater-on-skater obstruction is body position, blocking, picks and interference. Calling your route a "screen" blurs two rules that work completely differently, so this document calls it traffic, or a route.

The illegal version is stopping in a defender's path and taking the contact, or drifting sideways into a chaser. If the defender is *unaware* of you and you *move into their path*, that is the definition of a pick.

> **Rec and beer-league note:** obstruction is called far less consistently at amateur level than in the NHL, in both directions. Do not build your game on getting away with picks, and do not assume the referee will punish theirs.

### Timing your break

```facts
Key: Arriving open too early is the same as not being open — the defender has that second to recover
Action: Watch the passer, not the space
Read: Break when the carrier's head comes up, when the puck comes to the middle of their blade or their forehand, when they have just beaten a checker, or when their shoulders turn toward you
Technique: Hold, hold, hold, then go on their look — keep moving in a small way throughout, so your check stays honest
```

Getting open is as much about *when* you go as about where.

**Arriving open too early is the same as not being open.** If you break into space a second before your teammate is ready to pass, a defender has that second to recover, and by the time the carrier looks up you are covered again. Then you stop, the play dies, and you blame the passer.

The fix is to **watch the passer, not the space.** Break when:

- The carrier's head comes up.
- The puck comes to the middle of their blade, or they move it to their forehand.
- They have just beaten a checker and have a free second.
- Their shoulders turn toward you.

Concretely: **hold, hold, hold, and then go on their look.** Holding is not passivity, because you should be moving in a small way the whole time — a curl, a drift, a change of angle — to keep your check honest. It is the *committing* burst that waits for the passer.

This is also why the pass and the break should be thought of as one action shared between two players. See [Passing and Receiving](../technique/passing_and_receiving.md).

---

## Occupying defenders: the work nobody claps for

Some off-puck work exists purely to move a defender somewhere unhelpful. You will never get an assist for it and it is often the thing that made the goal possible.

### Drive the net

```facts
Action: Skate hard at the net without the puck — a half-hearted glide does not move anybody
Goal: Pull a defender with you, because leaving a man driving the goalmouth is unacceptable to any defenceman
Goal: Create a rebound and deflection threat, which changes the goalie's depth and attention
Key: The drive bends the defence toward the net and opens the ice behind you — the high slot and the point
Mindset: If you are going, go as if you expect the puck
Never: Arrive into the goal frame head first. Know where the posts are, and take a post or the boards with an arm or a leg instead. Head up, chin off your chest, and never duck
```

Skating hard at the net without the puck does three things at once:

- A net drive pulls a defender with you, because leaving a man driving the goalmouth is unacceptable to any defenceman.
- A net drive creates a rebound and deflection threat, which changes the goalie's depth and attention.
- A net drive bends the defence toward the net, which opens the ice **behind** you — the high slot (dots to the top of the circles) and the point.

The point of the drive is that somebody else scores: you pull a defender to the net, and a teammate shoots into the space they vacated. No source held here counts goals by type, so take that as the mechanism rather than a ranking of which goal is commonest. **The drive has to be genuine.** A half-hearted glide does not move anybody. If you are going, go as if you expect the puck.

**One thing the drive itself asks of you.** You are skating hard at a steel goal frame with a goaltender set in front of it and a defender coming with you, so **know where the posts are, and never arrive head first.** USA Hockey's *Heads Up Hockey Program Guide* lists *"avoiding goal posts while driving to the net"* among the answers it expects when it asks players what "heads up" means as safe hockey, and USA Hockey's *Introduction To Body Contact* puts it as an instruction: *"Hit the boards or goal posts with an arm, a leg, or anything but your head first."* Head up, chin off your chest, and **never duck** — the same guide traces almost all on-ice cervical spine injuries to a head *"slightly flexed (head down) while making head-on contact with the boards or goal post"*, and records that it *"can occur at walking speed"*, so a crowded, slow net drive is not a safe one. **That applies in every league, checking or not.**

![](diagram:drive-the-net-before)

![](diagram:drive-the-net-after)

### Screen the goalie

```facts
Rule: A goal is disallowed where an attacker, "either by his positioning or by contact", impairs the goalkeeper's ability to move freely within his crease or defend his goal — no contact is required (NHL Rule 69.1, whose words those are, and the IIHF's 69.1)
Rule: With no contact at all, NHL and IIHF Rule 69.3 disallows the goal for a significant position in the crease — a substantial part of your body there for more than an instantaneous period — that both obstructs the goalkeeper's vision and impairs his ability to defend his goal (the NHL's words)
Rule: The IIHF's own Situation Handbook does not apply 69.3's test — asked about a player "in the crease screening the goalkeeper", its Situation 69.1 answers "the goal shall be disallowed". The Handbook ranks below the rulebook, but do not screen from inside the paint
Rule: Under the IIHF, a hand, glove or stick held directly in front of the goalkeeper's eyes is not judged under Rule 69 at all — it is unsportsmanlike conduct and a Rule 75 minor, and only if the referee witnessed it (IIHF Situation Handbook 2025/26 and 2026/27, Situations 69.3 and 75.4)
Rule: USA Hockey 625(b) is a flat position bar — no goal with an attacking player in the crease, whoever scored, unless the puck got there first, the goalkeeper is out of the crease area, or a defender's interference is what put you there
Rule: That goalkeeper-out carve-out is not the free pass it reads as — USA Hockey Casebook Rule 625, Situation 9 disallows the goal and adds an interference minor where the goalkeeper was returning to the crease and the attacker prevented them from making a play
Rule: Hockey Canada 8.5 is not flat — the goal stands where a teammate outside the crease scores and the crease player stays passive; its Interpretation 3 disallows it only if that player plays the puck, interferes with the play, or impedes the goaltender's vision or movements
Rule: Neither book reaches a screen set from outside the crease — USA Hockey writes no goaltender-vision provision at all, and Hockey Canada's two references to the goaltender's view both reach only a player standing in the crease (USA Hockey 625, Hockey Canada 8.5)
Never: Treat being shoved into the paint as cover for what you do next — the relief covers your position and nothing else, and getting straight back out of the crease is still on you
Key: Under the NHL and the IIHF, staying out of the blue paint is necessary, not sufficient — positioning alone, from outside it, can still take the goal off the board
```

Standing in the goaltender's line of sight so they cannot see the shot is **legal from outside the crease** — and that qualifier is not a footnote, it is the rule.

Rule 69.1 disallows a goal where an attacking player, *"either by his positioning or by contact, impairs the goalkeeper's ability to move freely within his crease or defend his goal."* **Positioning alone is enough; no contact is required.** Rule 69.3 goes further inside the paint, and it has **two separate grounds**. **Contact is the first:** any contact you initiate with a goalkeeper who is in their crease, incidental or otherwise, disallows the goal — subject to one printed exception, 69.7's rebound or loose-puck scramble, set out under [Whether you touch the goaltender](#whether-you-touch-the-goaltender). **Position alone is the second, and it needs no contact at all:** if an attacker *"establishes a significant position within the goal crease, so as to obstruct the goalkeeper's vision and impair his ability to defend his goal,"* the goal is disallowed. ⚠️ **Both halves of that second ground are load-bearing, and the rule defines the first half rather than leaving it to the eye — drop the definition and the ground sounds a great deal stricter than it is.** A player does it *"when, in the Referee's judgment, his body, or a substantial portion thereof, is within the goal crease **for more than an instantaneous period of time**."* Those are the NHL's words; the IIHF prints the same test in *"their"*, identically in its 2025/26 and 2026/27 editions. **So a body that crosses the paint and is gone has not met it, and neither has one that obstructs the goalkeeper's vision without impairing their ability to defend the goal.**

⚠️ **Do not read that narrowing as room to work in, because the IIHF's own Situation Handbook does not apply it.** Asked what the referee decides where a *"Team A player is in the crease screening the goalkeeper, and Team A scores"*, the Handbook answers flatly — *"The goal shall be disallowed, and no additional penalty assessed"* — and cites *"Rule 69.1 and Rule 69.3"* while asking nothing about how long the player was in there, nothing about the goalkeeper's vision and nothing about their ability to defend (Situation 69.1, in the same words in the 2025/26 and 2026/27 editions). **The Handbook ranks below the rulebook and says so itself** — its Foreword: *"in case of any contradictions, the valid IIHF Rulebook is always the basis"* — so 69.3's conjunctive test is still the rule, and this is guidance reading it loosely rather than a rule contradicting it. **But the official in front of you may be working from that answer, and you will not get to argue the limbs from the ice.** Take the narrowing as an account of what the rule requires, not as space to play in: screen from outside the paint.

So: staying out of the blue paint is necessary, not sufficient. Rule 69.1 turns on whether you impair the goalkeeper's ability to move freely within his crease or defend his goal, and it says in terms that position *"whether inside or outside the crease, should not, by itself, determine whether a goal should be allowed or disallowed"* — so positioning alone, from outside the paint, can still take the goal off the board even if you never touch anybody. Stand in the paint and it is close to automatic.

⚠️ **That is the NHL and the IIHF. The other two books answer differently, so do not carry this paragraph into a USA Hockey or Hockey Canada game.** **Outside the paint they are more permissive** — 69.1's reach to positioning *outside* the crease has no counterpart in either: USA Hockey's playing rules contain **no provision about screening a goaltender or obstructing a goaltender's vision at all**, and Hockey Canada mentions a goaltender's view in exactly two places, both reaching only a player already **in** the crease. **Inside the paint the two part company, and only one of them is flat.** **USA Hockey Rule 625(b)** is the flat one: *"No goal may be scored with an attacking player in the goal crease unless the puck has preceded the player(s) into the goal crease or the goalkeeper is out of the goal crease area."* Who shot it does not come into it. ⚠️ **And do not stop reading at *"the goalkeeper is out of the goal crease area."*** For a screener that is the clause that sounds like a licence — the goalie has come out, so get to the paint ahead of the puck — and the **USA Hockey Casebook 2025-29** answers exactly that play at **Rule 625, Situation 9**. The goal counts: *"If the goalkeeper is completely out of their crease, an attacking player may precede the puck into the crease and any legally scored goal in this situation shall be allowed."* **Then the same situation takes it back if you are what stopped them getting home:** *"However, if the goalkeeper is attempting to return to the goal crease and there is any interference by the attacking player who prevents the goalkeeper from making a play, then the goal must be disallowed and an interference penalty shall be assessed."* So an empty crease is open only while the goaltender is genuinely out of the play — get there first if you can, but do not stand between a scrambling goaltender and their net, because that is the goal off the board **and** two minutes for you. **The third carve-out is the other one a screener meets:** *"if the attacking player has been physically interfered with by the actions of a defending player that causes them to be in the goal crease, play shall not be stopped and any legal goal scored shall be allowed."* A defender who shoves you into the paint does not take the goal off the board — though get out anyway, because the relief covers your position and not what you do next. ⚠️ **Two rule numbers say so.** **Rule 617(c)(4)** disallows a goal scored *"while an attacking player was positioned in the crease (unless physically interfered with by a defending player causing them to be in the goal crease) **or interfering with the goalkeeper**"* — the push-in parenthetical is written into the first limb only, so it does nothing about the second. And **Rule 625(a)(8)** is a minor for *"[a]ny player who makes physical contact, using their stick or body, in a manner that interferes with the movement of the goalkeeper, unless otherwise specified in the rules."* So being shoved in is a defence to standing there and to nothing else. **Hockey Canada Rule 8.5** opens the same way — *"Unless the puck is in the goal crease area, a player of the attacking team may not stand in the goal crease. If the puck should enter the net while such conditions prevail, the goal will NOT BE ALLOWED"* — and then carves out a situation you will meet, a body in the paint and a teammate scoring from outside it: *"However, if an attacking player is in the goal crease but does not interfere with the Goaltender and another attacking player (who is outside the goal crease) scores, the goal WILL BE ALLOWED provided that the player who was in the goal crease does not attempt to play the puck, interfere with the play or obstruct the Goaltender's view or movements."* Its Interpretation 3 to 8.5(a) puts the same test the other way round — *"An attacking player is NOT committing a foul by simply standing in the goal crease. However, if while standing in the crease, the attacking player attempts to play the puck, interfere with the play, or impede the goaltender's vision or movements, then no goal may be scored"* — with a note that no *penalty* follows unless the player's body or stick makes *"actual physical contact"* with the goaltender. **So a body in the crease with a teammate scoring from outside is no goal under USA Hockey and a good goal under Hockey Canada, as long as you stayed passive in there and clear of the goaltender's view and movements. The instruction below is the same under all four; only the reason changes.** Find out which book your league runs.

⚠️ **One way of blocking a goaltender's view is not a screen at all, and it is a penalty in a rule you would never think to look in.** Holding a hand, a glove or your stick directly in front of the goalkeeper's eyes is not judged under Rule 69 — it is unsportsmanlike conduct. The **IIHF Situation Handbook** asks it in terms, twice and identically in the 2025/26 and 2026/27 editions, at **Situation 69.3** and again at **Situation 75.4**: can an attacking player *"hold its hand/glove or stick directly in front of the goalkeeper's eyes/face with the obvious intent of impairing the ability to see the puck/play?"* The answer both times: *"No. This shall be treated as unsportsmanlike conduct and penalized with the assessment of a minor penalty under Rule 75 if witnessed by the Referee(s)."* Note the last clause — *"if witnessed"* — and note what it means where there is no video review: the referee either saw it or nothing happens. **Screen with your body and your position. Waving something across their mask is two minutes.**

#### To screen properly

```facts
Position: Stand where the goalie's eyes are, not where the puck is going. Occupy the sightline between the puck and the goalie
Position: Keep both feet outside the crease — under USA Hockey and Hockey Canada that settles the screening question, and under the NHL and the IIHF it does not
Never: Put a hand, a glove or your blade across the goalie's face — under the IIHF that is not a screen at all but a minor for unsportsmanlike conduct
Action: Keep your stick on the ice — a screen is a tip threat and a rebound threat, not a place to stand and watch
Technique: Move late — getting out of the way at the last instant, so the goalie picks the puck up a fraction too late, is more disruptive than a static body. Move where you can still see the puck
Technique: You are moved off a screen by a defender you feel rather than watch, so know where the near post is before the shot and take the shove braced — wide base, knees bent, hips giving
Never: Meet a goal post head first, and never duck — head up, chin off your chest. A head-down, head-first hit on a goal post is the same injury as one on the boards, and can happen at walking speed
Risk: A screen stands you in the shot lane at close range, upright, with a defender on your back and your eyes on the puck. No injury rate for screening is published in any source held here
```

- **Stand where the goalie's eyes are, not where the puck is going.** Your job is to occupy the sightline between the puck and the goalie.
- **Never put a hand, a glove or your blade across the goalie's face.** That is not a screen — under the IIHF it is a Rule 75 minor for unsportsmanlike conduct, judged outside Rule 69 altogether.
- **Keep both feet outside the crease.** Under USA Hockey and Hockey Canada that settles the screening question, because neither book reaches a screen set from outside the crease at all. Under the NHL and the IIHF it does not settle it: your positioning from outside the paint can still void the goal.
- **Do not stand still and watch.** A screen is also a tip threat and a rebound threat. Keep your stick on the ice.
- **Move late — and move where you can still see the puck.** Getting out of the way at the last instant, so the goalie picks up the puck a fraction too late, is more disruptive than a static body. Late is a timing instruction, not a reason to lose the shot: you cannot time an exit from a release you did not see.
- **Know where the near post is before the shot.** You are holding a spot at the goalmouth with a steel goal frame at one edge of it and a set goaltender at the other, and a defender is working under your arms to walk you sideways off it. Your eyes are on the puck by design, so you are being moved by a body you are *feeling* rather than watching, and you can travel several feet without looking up once. **Take the shove braced** — wide base, knees bent, weight low, knees and hips giving rather than a locked frame — and keep your **head up and your chin off your chest. Never duck.** USA Hockey's *Heads Up Hockey* guide names the goal post beside the boards in the same sentence, tracing almost all on-ice cervical spine injuries to a head *"slightly flexed (head down) while making head-on contact with the boards or goal post"* and recording that it *"can occur at walking speed"*; its *Introduction To Body Contact* gives the instruction directly — *"Hit the boards or goal posts with an arm, a leg, or anything but your head first."* **None of this is scoped to checking leagues.** A legal box-out, a legal seal and an illegal shove put the same body in the same place. [Body Contact and Battles](../technique/body_contact_and_battles.md) covers the net-front battle from both sides.
- **You are standing in the shot lane, upright — that is the job, and it is worth naming.** A shot blocker is coached to get close, stay square, tuck their hands behind their shin pads and keep their head out of the lane; a screener does the reverse by design, standing tall in the lane with a defender on their back. [Body Contact and Battles](../technique/body_contact_and_battles.md) calls shot blocking *"genuinely useful and genuinely dangerous"*, and warns shot blockers that *"a puck deflected off an outstretched blade goes upward, often into your own face"* — and a tip attempt puts a blade in that same lane, a few feet from the shooter. **That comparison is about where the blade is, not a measured claim that the two deflect alike.** Tipping is a real and valuable skill and none of this is a reason to stop; it is a reason to know when the puck is being released, and to have your head and face protection right rather than nearly right ([Equipment](../off-the-ice/equipment.md)). **No injury rate for screening or tipping appears in any source held for this guide, and none was found**, so take that as geometry rather than as a measured risk.

![](diagram:screen-the-goalie-sightline)

#### Whether you touch the goaltender

```facts
Priority: Where you stand and whether you touch the goaltender are separate questions with different answers — clearing the blue paint settles only the first
Rule: Outside the crease, incidental contact is permitted only while the goalkeeper is in the act of playing the puck, and then only with a reasonable effort to avoid it (NHL and IIHF Rule 69.4), or in a rebound or loose-puck scramble you are both going for (Rule 69.7)
Rule: Hockey Canada 8.5 grants no such permission — it asks attacking players to avoid contact in all circumstances, anywhere on the ice — and USA Hockey keys engaging a goalkeeper to their having possession of the puck (Casebook Rule 607, Situation 5)
Rule: Inside the crease NHL and IIHF Rule 69.3 disallow the goal for any contact you initiate with a goalkeeper in their crease, incidental or otherwise; the one exception is Rule 69.7, which permits incidental contact inside or outside the crease in a rebound or loose-puck scramble
Rule: NHL and IIHF Rule 69.7 disallow the goal where a goalkeeper is pushed into the net together with the puck by an attacking player after making a stop, and appropriate penalties may follow as well — the rule needs all three of those conditions
Rule: NHL and IIHF Rule 69.7 permit the goal where the referee judges that a defending player pushed or fouled the attacker into pushing the goalkeeper into the net with the puck — being shoved into the goalkeeper does not cost your team the goal
Rule: Where the puck is under a player in or around the crease, deliberately or otherwise, NHL and IIHF Rule 69.7 allow no goal from pushing that player and the puck into the net — penalties follow if applicable, and a penalty shot if it was covered deliberately
Rule: Charging a goalkeeper who is in their crease reaches a major plus a game misconduct in all four books — NHL 42.1 "a minor, major or a major and a game misconduct", IIHF 42.4 with no injury required, USA Hockey 607(c), Hockey Canada 8.5(b), which alone makes it mandatory
Rule: USA Hockey 607(c) is a minor plus a misconduct, or a major plus a game misconduct, for body checking or charging a goalkeeper inside the crease or privileged area — and all four books add that a goalkeeper is not "fair game" outside it (NHL and IIHF 42.1, USA Hockey 607(d), Hockey Canada 8.5)
Never: Initiate contact with the goaltender, inside or outside the crease — a screen never needs to touch anybody at all, and being outside the paint changes nothing about that
Key: "Outside the crease" is an answer about where you stand and no answer at all about whom you touch — on contact the books converge where on position they diverge
```

⚠️ **Where you stand is one question and whether you touch the goaltender is another, and on contact the four books line up the other way round: "outside the crease" is not a general licence to bump them.** Rule 69.4 opens with the restriction rather than the permission: *"A goalkeeper is not 'fair game' just because he is outside the goal crease. The appropriate penalty should be assessed in every case where an attacking player makes unnecessary contact with the goalkeeper."* The permission that follows is conditional, and the condition is the half that usually gets dropped — *"incidental contact will be permitted **when the goalkeeper is in the act of playing the puck outside his goal crease** provided the attacking player has made a reasonable effort to avoid such unnecessary contact."* Those are the NHL's words; **the IIHF writes the same condition at the same number**, in its 2025/26 v1.1 and 2026/27 books alike. **So a goaltender who has come out to challenge, or who is set outside the paint with the puck somewhere else, is not covered by that clause at all.** ⚠️ **The other two books do not hand it to you either, and they do not agree with each other.** **Hockey Canada Rule 8.5** concedes only that *"While incidental contact with the goaltender may occur, attacking players must make an effort to avoid contact in all circumstances"*, and extends the "not fair game" protection *"anywhere on the ice"* — no possession condition, and no permission. **USA Hockey** keys the same play to the puck in entirely different words: **Rule 607(c)** is a minor plus a misconduct, or a major plus a game misconduct, for body checking or charging a goalkeeper *"while the goalkeeper is within the goal crease or privileged area"* — the privileged area being the end-zone face-off spots joined by an imaginary line, with imaginary lines running back from each spot to the end boards, so it takes in the ice directly behind the net and not the corners, and a screener in front of the net is standing inside it. ⚠️ **Do not read that geography as the edge of the protection, because the next clause says it is not.** **Rule 607(d)** carries the same sentence the other three books carry: *"A goalkeeper is NOT 'fair game' because they are outside the privileged area. A penalty for interference or charging should be called in every case where an opposing player makes unnecessary contact with a goalkeeper."* Its Casebook at **Rule 607, Situation 5** is written about exactly that ice, and puts both halves in one sentence — *"Although a goalkeeper can be legally checked when outside the privileged area, they are not considered to be 'fair game'"* — before adding that a penalty *"should be assessed in every instance where unnecessary or avoidable contact is made with the goalkeeper – even when outside the privileged area."* **So the privileged area is where the automatic penalty lives, not where the protection stops.** That same Situation also carries the one thing in this paragraph that reads as a permission, and it is keyed to the puck: an attacker may *"physically engage with the goalkeeper in an effort to gain possession of the puck"* only *"When the goalkeeper has possession of the puck"*, with *"any check delivered with the intent to intimidate or punish the goalkeeper"* still charging, and *"When the goalkeeper is no longer in control of the puck, any avoidable contact (meaning the attacking player has sufficient time to avoid the contact) must also be penalized under this rule."* **The common ground is the instruction: a goaltender who is not dealing with the puck is not to be contacted, and a screen never needs to touch them at all.**

⚠️ **And inside the crease there is no conditional permission at all, in either book.** Rule 69.4's clause is about a goalkeeper who is *outside* the paint. Inside it, **Rule 69.3**'s first paragraph disallows the goal for contact *"with a goalkeeper, incidental or otherwise, while the goalkeeper is in his goal crease"* — the NHL's words; **the IIHF writes *"a relevant contact"*** in the same sentence at the same number. **The one exception both books print is Rule 69.7**, and the NHL's 69.3 refers you to it in terms: *"In a rebound situation, or where a goalkeeper and attacking player(s) are simultaneously attempting to play a loose puck, whether inside or outside the crease, incidental contact with the goalkeeper will be permitted, and any goal that is scored as a result thereof will be allowed."* Those are the NHL's words again; the IIHF prints the same sentence with quotation marks of its own around *"incidental contact"*. ⚠️ **Read what that exception is about, because it is not a screen.** It covers a scramble for a loose puck that you and the goalkeeper are both going for. A screener planted in the paint who bumps the goalie is inside the first paragraph and nowhere near 69.7, and 69.7's own further limbs run three more ways, two of them against you and one for you. **It disallows the goal outright** where a goalkeeper *"has been pushed into the net together with the puck by an attacking player after making a stop,"* adding that *"[i]f applicable, appropriate penalties will be assessed"* — so the lost goal need not be the end of it. ⚠️ **That sentence needs all three of its conditions** — the goalkeeper into the net *together with the puck*, *after making a stop*, and pushed there *by an attacking player* — so it is not a rule that any push on a goaltender kills a goal. ⚠️ **And read the sentence after it, because it runs the other way:** *"If, however, in the opinion of the Referee, the attacking player was pushed or otherwise fouled by a defending player causing the goalkeeper to be pushed into the net together with the puck, the goal can be permitted."* **So a defender who shoves you into the goalkeeper does not cost your team the goal.** **The paragraph after that closes off the other version of the same play:** where the puck is under a player in or around the crease area *"(deliberately or otherwise)"*, *"a goal cannot be scored by pushing this player together with the puck into the goal"*, with appropriate penalties again *"[i]f applicable"* — and a penalty shot where the puck is deemed to have been covered in the crease deliberately. Rule 69.7's four limbs are quoted here from the NHL's book; **the IIHF prints all four at the same number in the same terms**, differing only in its capitalised *Player*, its *"goal crease"* where the NHL writes *"crease"*, its quotation marks around *"incidental contact"* and *"Penalty Shot"*, its opening *"In the event"* for the NHL's *"In the event that"*, and its setting of all four limbs off as separate paragraphs where the NHL prints three and keeps the relief inside the second — identically in the 2025/26 v1.1 and 2026/27 editions. Both books also list the push-in among the disallowed goals, at **NHL 78.5(ix)** and **IIHF 78.5(IX)**, in a shorter form that drops *"by an attacking player"* and writes *"after making a save"* for 69.7's *"after making a stop"*, referring back to 69.7 for the rule itself.

**So: keep off the goaltender.** Under the NHL and the IIHF the only contact you are ever allowed is incidental — while the goalkeeper is playing the puck outside the crease and you made a reasonable effort to avoid it (69.4), or in a rebound or loose-puck scramble either of you is going for (69.7). Hockey Canada asks you to avoid contact in all circumstances, anywhere on the ice. And the permission USA Hockey writes — engaging a goalkeeper who has possession of the puck — is not one a screener can use, because 607(c) covers the crease and the privileged area and the net front is inside it. **A screen never needs to touch anybody.**

⚠️ **And what a charge on a goaltender costs is not two minutes in any of the four books, so do not file the ejection under somebody else's rules.** Charging a goalkeeper who is in their crease reaches a **major plus a game misconduct** in every one of them. **NHL Rule 42.1**: *"A minor, major or a major and a game misconduct shall be imposed on a player who charges a goalkeeper while the goalkeeper is within his goal crease."* **IIHF Rule 42.1** imposes a penalty on a Player who charges a goalkeeper *"while the goalkeeper is within their goal crease"*, and **IIHF Rule 42.4** lets the Referee assess *"a major penalty and a game misconduct penalty"* where in their judgment the Player *"recklessly endangers their opponent by 'charging'"* and would not be sufficiently sanctioned by a major — **no injury is required for it.** 🇬🇧 That is the British reader's book, and a game misconduct ends your night. **USA Hockey Rule 607(c)** is quoted above, and the thing to notice about the rule around it is that **no limb of Rule 607 is a bare minor**: (a) and (c) are both *"A minor plus a misconduct or a major plus a game misconduct penalty"*, (b) is a mandatory major plus game misconduct for reckless endangerment, and (e) reaches a match penalty. **Hockey Canada Rule 8.5(b)** is the only one of the four that takes the discretion away — *"A Major penalty and Game Misconduct penalty **will** be assessed to any player who charges the goaltender"* — and it adds a second mandatory limb the other three do not write, for a player who *"injures an opponent by an Interference with the Goaltender infraction that would otherwise call for a Minor penalty."* ⚠️ **What was read for that last comparison was the four books' goalkeeper-interference rules and their charging rules, and nothing else:** NHL and IIHF **Rule 69.2** both assess *"minor or major, as the Referee deems appropriate"* and USA Hockey **Rule 625(a)** writes only a minor, so no other book carries an injury tier *there* — but no search was made of every other route to an ejection those books hold, including NHL 69.8's *"(minor or major and/or game misconduct)"*, USA Hockey's separate reckless-endangerment provisions, or supplementary discipline in any of them. **The instruction does not depend on which book you are under: do not skate into the goaltender.**

More detail from the other side in [Goaltender](../positions/goaltender.md), and on the crease rules in [Offensive Zone Play](../systems/offensive_zone_play.md).

### Be a decoy on the weak side

```facts
Position: The weak side is the side of the ice away from the puck — stand there with your stick down and your feet moving
Goal: Force the defence to keep somebody accounting for you; a player standing on the weak side watching does not
Action: Look like you are about to receive a pass — blade down, body open to the puck, one small step toward the seam
```

The **weak side** is the side of the ice away from the puck. A player standing on the weak side with their stick down and their feet moving forces the defence to keep somebody accounting for them. A player standing on the weak side watching does not.

The difference is small and entirely about intent: **look like you are about to receive a pass.** Blade down, body open to the puck, one small step toward the seam. That is what makes a defender stay.

### Stretch the defence for width

```facts
Goal: Defences want to defend a narrow rink and collapse toward the middle — your width is what stops them
Position: As the far winger in the offensive zone, hold your position near the boards; drifting into the middle to look busy lets the defence compress
Key: On a rush, a wide forward makes the defenceman respect the outside lane, widening the gap between the pair — and that gap is where the middle drive goes
Position: In the neutral zone, a stretched forward high near the far blue line pins a defenceman deep and shortens the ice your breakout has to cover
Convention: How much width a team wants in the offensive zone is a coaching choice — some want the far winger high and wide against the counter-attack, others want them crashing the back post on every shot; ask
```

The rink is 85 feet wide. Defences want to defend a narrow rink, so they collapse toward the middle. Your width is what stops them.

- In the offensive zone, if you are the far winger, **holding your position near the boards** keeps a defender out there with you. Drifting into the middle to look busy lets the defence compress, and compressed defences are much harder to score against.
- On a rush, a wide forward forces the defenceman to respect the outside lane, which widens the gap between them and their partner — and the gap between defencemen is where the middle drive goes.
- In the neutral zone, a stretched forward high near the far blue line pins a defenceman deep and shortens the ice your breakout has to cover. See [Neutral Zone Systems](../systems/neutral_zone_systems.md).

![](diagram:width-makes-the-middle-lane)

> **System note:** how much width a team wants in the offensive zone is a coaching choice. Some coaches want the far winger high and wide to protect against the counter-attack; others want them crashing the back post on every shot. Both are defensible and they are not compatible. Ask.

---

## Supporting the puck carrier: the receiver's half of the pass

```facts
Key: A completed pass has two authors — if you are waiting to be found, you are doing a quarter of your job
Action: Give a target — stick on the ice, blade flat, angled to receive, something specific to aim at rather than a general area
Position: Give a lane — be open along a line the puck can travel, and adjust your position to create it rather than expecting the puck to bend
Action: Give a time — arrive as the passer is ready, not before
Technique: Arrive facing where you intend to go, and open your body up-ice before the puck arrives
Action: Give information — "time", "man on", "reverse", "over"; one word said early is worth more than a perfect route
Options: When the carrier is pinned they need a close, safe, catchable option — being the boring five-foot outlet is a real job
```

[Puck Support and Spacing](puck_support_and_spacing.md) is the full treatment of where to be. This section covers only the thing that document does not: **your responsibility, as the man without the puck, for making the pass possible.**

A completed pass has two authors. If you are waiting to be found, you are only doing a quarter of your job. The receiver owes the passer:

- **A target.** Stick on the ice, blade flat, angled to receive. Give them something specific to aim at rather than a general area.
- **A lane.** Not merely being open, but being open *along a line the puck can travel*. Adjust your position to create the line; do not expect the puck to bend.
- **A time.** Arrive as the passer is ready, not before — see "Timing your break" above.
- **A next play.** Arrive facing where you intend to go. A player who receives a pass with their back to the play has taken a good pass and turned it into a battle. Open your body up-ice before the puck arrives.
- **Information.** "Time," "man on," "reverse," "over" — one word, said early, is worth more than a perfect route. See [On-Ice Communication](../foundation/on_ice_communication.md).
- **A soft target when they are under pressure.** When the carrier is pinned, they do not need a spectacular option forty feet away; they need a close, safe, catchable one. Being the boring five-foot outlet is a real job.

The general principle from [Time and Space](time_and_space.md) applies here in reverse: **you can give a teammate time by where you stand.** A support option in a good place buys the carrier the extra second they need to see the whole ice.

---

## Effort without the puck

Everything above is about knowledge. This section is about the part that requires none.

### Backchecking

```facts
Key: Backchecking is racing back toward your own end when possession is lost; forechecking is applying pressure in the opponent's end
Never: Decide for yourself mid-rush to chase the puck carrier — the dangerous man is the one arriving unmarked into the middle lane, and covering a lane beats catching the carrier
Options: Some teams do coach the first forward back to pressure the carrier with the defence holding inside — where that is the system it is an instruction, not an instinct, so find out which yours runs
Rule: Pressuring never means finishing into a carrier's back — checking from behind carries no minor option and is a major with an automatic game misconduct (NHL Rules 43.2–43.5, IIHF Rules 43.2–43.3)
Never: Use your stick, body or free hand to restrain an opponent from behind, whether or not they have the puck. You must skate to regain position instead
Rule: Restraining an opponent from behind is interference where they do not have the puck (NHL and IIHF Rule 56.1), and holding or hooking where they do, since 54.1 reaches an opponent "whether or not he is in possession of the puck" and 55.1 sets no possession condition
Convention: Which lane is yours is a coaching choice — the assignment used throughout gives the centre the middle and the wingers the outside; alternatives are first man back takes the middle, and man-on-man from the puck outward
Key: Under every one of those assignments, somebody owns the middle and nobody assumes it is somebody else
Action: Backcheck to a man, not to a place. Pick up a player and communicate that you have them
Risk: Skating hard to the top of the circles and stopping, having covered nobody, spends the energy and buys nothing
```

**Backchecking** is racing back toward your own end when possession is lost. It is the opposite of **forechecking**, which is applying pressure in the opponent's end. The two words are easily confused and mean nearly opposite things.

Backchecking well is mostly about two decisions, both made while sprinting:

- **Do not chase the puck carrier. Take your lane.** Your instinct is to chase the carrier. Resist it, unless your team has specifically told you to: some teams coach the first forward back to pressure the carrier and have the defence hold inside, and if that is your system it is an instruction rather than an instinct. Absent that instruction, take the lane. **And pressuring never means finishing into a carrier's back** — checking from behind carries no minor option and is a major with an automatic game misconduct (NHL Rules 43.2–43.5, IIHF Rules 43.2–43.3), and it applies anywhere on the ice, not only along the boards. The dangerous man is the one arriving unmarked into the middle lane, and covering a lane is worth more than catching the carrier from behind — from which position, incidentally, you are not permitted to restrain them at all. **Which rule catches you depends on whether they have the puck.** Behind an opponent who does *not* have it, restraint is interference — NHL Rule 56.1: *"A player who is behind an opponent, who does not have the puck, may not use his stick, body or free hand in order to restrain his opponent, but must skate in order to gain or reestablish his proper position in order to make a check"*, and the IIHF's 56.1 says it word for word in the plural. **That clause does not reach the puck carrier**, whom it excludes in its own words — but holding and hooking do, and neither is conditional on possession. NHL Rule 54.1 defines holding as *"any action by a player that restrains or impedes the progress of an opposing player whether or not he is in possession of the puck"*, and Rule 55.1 makes hooking *"the act of using the stick in a manner that enables a player to restrain an opponent"*; the IIHF's 54.1 and 55.1 carry both definitions in the plural, its 55.1 adding a sentence about the stick going against or near the opponent's hands. So whichever rule applies, skating is the only legal way back into position. **Which lane is yours is a coaching choice.** Under the standard assignment used throughout, the **centre takes the middle lane and the wingers take the outside lanes** — so as a winger, "take the middle" is not your instruction unless you are the first man back and nobody else has it. Alternatives are **first man back takes the middle** and **man-on-man from the puck outward**. Find out which your team plays; [Defending the Rush](../systems/defending_the_rush.md) sets them out, along with the four named team backchecking systems that decide which assignment applies. Under every one of them, somebody owns the middle and nobody assumes it is somebody else.
- **Backcheck to a man, not to a place.** Pick up a player and communicate that you have them. A backchecker who skates hard to the top of the circles and then stops, having covered nobody, has spent the energy and bought nothing.

### The second effort

```facts
Key: The second effort is the play after the play — you lose a battle and, rather than gliding out of it, you turn and go again
Action: Go to the rebound rather than admiring your shot, and take one more stride when you get beaten wide
Read: The player who won the first battle believes it is over and stops playing it for a beat — that beat is available to whoever takes another stride
```

Roughly: the play after the play. You lose a battle, and rather than gliding out of it you turn and go again. You shoot, and rather than admiring it you go to the rebound. You get beaten wide, and rather than conceding you take one more stride.

Second efforts win pucks because the opponent has already relaxed. A player who has just won a battle believes it is over, and for a beat they stop playing it — and that beat is available to whoever is willing to take another stride.

### Finish your route

```facts
Action: If you commit to driving the net, arrive at the net; if you break into a lane, complete the break even after the pass has gone elsewhere
Risk: Within a period defenders learn your drives are not real and stop respecting them, and you have lost the ability to occupy anybody
Risk: An abandoned route leaves you in an in-between place, neither supporting nor defending, and that is where odd-man rushes get conceded
```

If you commit to driving the net, **arrive at the net.** If you break into a lane, **complete the break** even after the pass has gone elsewhere.

Half-finished routes are the most common off-puck failure in amateur hockey — an observation rather than a measured ranking, since nobody publishes a breakdown of amateur mistakes — and they cost twice. First, defenders learn within a period that your drives are not real and stop respecting them, which means you have lost the ability to occupy anybody. Second, an abandoned route leaves you in an in-between place, neither supporting nor defending, and it is from those places that odd-man rushes get conceded.

### The honest point about effort

```facts
Mindset: Off-puck effort is the most visible thing about you and the easiest thing to change
Key: Your coach cannot easily see whether you made the right read, but can see exactly who backchecked, who finished the route and who watched
Key: "Compete", "hard to play against" and "reliable" are almost always descriptions of off-puck behaviour
Action: It requires no new skill — backcheck hard into your lane, finish your route, take a second stride into a battle
Never: Skate hard in random directions — effort in the wrong place is just fatigue
```

**Off-puck effort is the most visible thing about you and the easiest thing to change.**

Your coach cannot easily see whether you made the right read. They can see, from the bench, exactly who backchecked, who finished the route, who got to the net front and who watched. When a coach describes a player as "compete", "hard to play against", or "reliable", they are almost always describing off-puck behaviour.

And it requires no new skill. You do not need better hands, a harder shot or faster feet to backcheck hard into your lane, finish your route, or take a second stride into a battle. It is the only part of hockey you can improve to a genuinely high standard between one game and the next. Most players never do, which is why doing it separates you so cheaply.

That is not a licence to skate hard in random directions. Effort in the wrong place is just fatigue. Everything in the four states above tells you where to spend it.

---

## Off-puck play by position

Brief, because the position documents cover each in full. Take the one line that applies to you.

| Position | Your off-puck job in one line | The characteristic error |
|---|---|---|
| **Centre** — [Center](../positions/center.md) | Low support in your own end, middle-lane driver on the rush, and the player who reads which state the shift is in and tells everyone else. You are most often the **second layer** behind pressure. | Duplicating pressure instead of layering behind it. |
| **Winger** — [Winger](../positions/winger.md) | **Width and the point.** In your own end you usually have the opposing defenceman on your side — that is coverage, not puck pursuit. In their end your width is what stops the defence compressing. | Leaving your lane to go to the puck. |
| **Defenceman** — [Defender](../positions/defender.md) | Gap control (the distance you keep from an attacker), net-front coverage, stick in the lane, and the hold-or-pinch decision at the offensive blue line — which is made entirely without the puck. A **pinch** is stepping down from the *offensive* blue line; **stepping up** is challenging forward in the neutral zone or at your own line. | Both defencemen going to the same puck. |

**Goaltender.** A special case, because you are off the puck essentially all game: your off-puck work is depth, angle, tracking and communication. You are also the only player who sees the entire ice on every play, and none of that reaches your team unless you say it — call the loose puck, call the unmarked opponent behind the play, call the change. Note that in the NHL and IIHF play the **trapezoid** restricts where you may play the puck behind the goal line (NHL Rules 1.8 and 27.8; IIHF Rule 27.7); the KHL is commonly said to have it too, though that one is unverified here: no KHL rulebook was available to check it against. **Neither North American governing body's book has one** — the words *"trapezoid"*, *"restricted area"* and *"designated area"* appear nowhere in USA Hockey's playing rules or its Casebook, nor anywhere in Hockey Canada's playing rules. How much rec, beer-league and youth hockey that adds up to is a question about leagues rather than about books, and this document has no count for it. ⚠️ **And no trapezoid is not no restriction — a goalie taught otherwise takes a minor.** USA Hockey **Rule 614(c)** makes it a delay-of-game minor for a goalkeeper who falls on or gathers the puck and causes a stoppage where *"(1) The puck is behind the goal line and their body is entirely outside of the goal crease"*, and Hockey Canada's **Interpretation 3 to Rule 10.1(a)**, clause v, is blunter: *"When a goaltender leaves their crease, they will not be allowed to freeze the puck. If they do, they will be assessed a Minor penalty. No warning will be issued."* So under those books you may go and fetch the puck out there, but you may not sit on it. See [Goaltender](../positions/goaltender.md). 🇬🇧 In England and Wales, how far you may go for a puck behind your goal line is unsettled — in Scotland and BUIHA hockey the In-House Rules do not amend Rule 27, so 27.7 reads as live: the IIHF book has the restricted area at Rule 27.7, but England Ice Hockey's *Rules & Regulations* 22.3 (2024-25) say it is *"not currently enforced"* and the 2025-26 In-House Rules do not mention it — though their Introduction says *"unless otherwise stated, all rules will be enforced in line with the IIHF Rule Book"*, which points the other way. Stay inside the trapezoid until your league tells you otherwise ([UK and England Rules](../foundation/uk_rules.md)).

---

## How to train it

Off-puck play is trainable, but not by the drills most teams run. A line rush drill with no defenders trains none of it.

### Small-area games

```facts
Goal: Small-area games are the most efficient off-puck training available, because in a small space you cannot hide and you are constantly forced into one of the four states
Action: Ask for two-touch or one-touch — it removes the option of skating out of trouble, so the only way to succeed is off-puck movement by everybody else
Action: Make a goal count only with a net-front presence, which forces net drives
Action: Require a change of direction before receiving, which trains separation
Action: Play three minutes with no talking, then three with mandatory calls — the difference makes the value of communication self-evident
```

Games played in a reduced space — cross-ice, one zone, three-on-three, with modified rules — are the most efficient off-puck training available, because in a small space you cannot hide and every player is constantly forced into one of the four states.

USA Hockey's coaching material makes this case explicitly. Its *Teaching Concepts Through Small-Area Games* manual describes hockey as "an instinctive, largely unscripted game," notes that players "will be forced to make decisions repeatedly while battling for space in confined areas," and identifies the second component of development, after skills, as **"'sense,' both with and without the puck"** — hockey sense being "the ability to read the play and react (or anticipate) appropriately." The manual quotes NHL coach Mike Sullivan: "Situations in hockey rarely occur the same way we draw them up in practice. We, as coaches, would like to make the game black and white. The fact of the matter is that the game, by nature, is gray."

Useful constraints to ask your coach for, or to impose in a shinny game:

- **Two-touch or one-touch.** Removes the option of skating out of trouble, so the only way to succeed is off-puck movement by everybody else.
- **A goal only counts with a net-front presence.** Forces net drives.
- **You must change direction before receiving.** Trains separation.
- **Silent play, then loud play.** Play three minutes with no talking, then three with mandatory calls. The difference is startling and it makes the value of communication self-evident.

### Watch yourself on video away from the puck

```facts
Action: Watch a filmed shift and never look at the puck. Watch only yourself
Read: Look for long glides, routes abandoned three-quarters of the way, standing still watching a battle, and facing the wrong way when the puck came free
Technique: Pick three shifts and write down how many times the state changed, how many of those changes you reacted to late, and one moment you were unmarked but not available
```

If any of your games are filmed, the single most valuable exercise available to you is this: **watch a shift and never look at the puck.** Watch only yourself.

You will see things you do not believe. Long glides. Routes abandoned three-quarters of the way. Standing still watching a battle you could have joined. Facing the wrong way when the puck came free. Almost every player's first honest off-puck video session is uncomfortable, and almost every player improves immediately afterwards, because the problems are obvious once seen.

A structured way to do it: pick three shifts, and for each one write down (a) how many times the state changed, (b) how many of those changes you reacted to late, and (c) one moment where you were unmarked but not available.

### Watch a live game and follow one player

```facts
Action: At a live game, or on a wide-angle feed, pick one player and watch only them for a full shift — not the puck
Read: Notice how much a good centre moves when nothing is happening, and how often they adjust position by a few feet in response to something you had not noticed
Key: A standard broadcast follows the puck and crops out exactly the four players you are studying, so live is better
```

The best off-puck education available for free: at a live game, or on a wide-angle feed, **pick one player and watch only them for a full shift** — not the puck. Two minutes of a good centre shows you how much they move when nothing is happening and how often they adjust their position by a few feet in response to something you had not noticed. Live beats a standard broadcast, which follows the puck and crops out exactly the four players you are studying. Full method in [How to Watch Hockey](../off-the-ice/how_to_watch_hockey.md).

### Self-check questions for the bench

```facts
Position: The bench is where off-puck improvement actually happens — thirty seconds and a clear view
Action: After each shift ask yourself one of the six questions — one, not all six
Key: Pick one question and use it for a whole game; six questions asked vaguely change nothing, one asked six times changes behaviour by the third period
```

The bench is where off-puck improvement actually happens, because you have thirty seconds and a clear view. After each shift, ask yourself one of these — one, not all six:

1. **Which of the four states was I in when the shift went wrong?**
2. **Was I ever unmarked but unavailable?** (No lane, no stick down, wrong angle.)
3. **Did I finish every route I started?**
4. **On the loose pucks, did I arrive with body position or just with speed — and did I arrive the safe way round, skates parallel to the wall, forearm and hip, head up and chin off my chest, never with my back to it?**
5. **When we lost it, how long did it take me to turn?**
6. **Did I duplicate a teammate's pressure instead of layering behind them?**

Pick one question and use it for a whole game. Six questions asked vaguely change nothing; one question asked six times changes behaviour by the third period.

---

## Common Mistakes

- **Training only the 3-4%.** Spending every spare hour on stickhandling while never once thinking about where to be. Skill work is necessary and it is not the majority of your game.
- **Watching the puck on defence.** It feels attentive. It means nobody is watching the man who scores.
- **Duplicating pressure instead of layering.** Two players on one puck carrier leaves a free attacker somewhere, and the free attacker is the one who hurts you. Two exceptions worth knowing before you call it a mistake: a **deliberate double-team below your own goal line**, which many teams coach because a turnover there is contained by the net and the boards; and **man-to-man coverage**, where following your check out of the layer is the job. Freelancing either is the actual error.
- **Being unmarked but unavailable.** Alone in space with your stick in the air, or with a defender's stick lying in the only passing lane, and then blaming the carrier for not seeing you.
- **Breaking too early.** Getting open a second before the passer is ready, being covered again by the time they look up, and stopping.
- **Skating away from the puck to get open.** Coming back toward the carrier is faster, shorter and harder to defend, and it is the option almost nobody takes.
- **Half-hearted net drives.** A glide toward the net occupies nobody. Within a period the defence stops respecting you, and you have lost the ability to create space for anyone.
- **Bumping the goaltender because you were outside the crease.** Where you may stand and whom you may touch are separate questions, and clearing the blue paint answers only the first. Under the NHL and the IIHF the only contact permitted at all is incidental, and only while the goalkeeper is playing the puck outside the crease (Rule 69.4) or in a rebound or loose-puck scramble you are both going for (Rule 69.7) — inside the crease, 69.3 disallows the goal for any contact you initiate, incidental or otherwise. ⚠️ **And 69.7 is not only a permission — it has limits, and they run both ways.** It disallows the goal where a goalkeeper is pushed into the net together with the puck by an attacking player after making a stop, and where the puck is under a player in or around the crease and that player is pushed into the goal with it; but it permits the goal where a defending player pushed or fouled the attacker into causing the push. **Hockey Canada Rule 8.5** asks you to avoid contact in all circumstances, anywhere on the ice. ⚠️ **And charging a goaltender who is in their crease reaches a major plus a game misconduct in all four books, not just one of them.** **NHL Rule 42.1**: *"A minor, major or a major and a game misconduct shall be imposed on a player who charges a goalkeeper while the goalkeeper is within his goal crease."* **IIHF Rule 42.4**: a major plus a game misconduct where the Player *"recklessly endangers their opponent by 'charging'"*, **no injury required**. Under **USA Hockey Rule 607(c)** a body check or a charge on a goalkeeper inside the crease or the privileged area — which reaches the net front, where a screener stands — is a minor plus a misconduct, or a major plus a game misconduct, and no limb of Rule 607 is a bare minor; **607(d)** adds that a goalkeeper is not "fair game" outside that area either, as all four books do. **Hockey Canada 8.5(b)** is the only one that makes the major and game misconduct mandatory rather than the referee's call.
- **Screening with your head down and no idea where the post is.** A screen holds a spot at the goalmouth with your eyes on the puck, a defender working under your arms to move you sideways, a steel goal frame at one edge of that path and a set goaltender at the other. You will be moved, and by a body you are feeling rather than watching. Know where the near post is before the shot, take the shove braced with a wide base and your knees giving, keep your head up and your chin off your chest, and never duck. USA Hockey's *Heads Up Hockey* guide names the goal post beside the boards in its sentence on how these injuries happen, and records that the injury *"can occur at walking speed"*. **This is not scoped to checking leagues** — a legal box-out puts you in the same place as an illegal shove.
- **Abandoning routes.** Costs you twice: defenders learn to ignore you, and you end up stranded in the in-between space where odd-man rushes are conceded.
- **Both players going to the same loose puck from the same angle.** Neither is available, both are committed, and one opposing player now beats two of yours.
- **Racing to a loose puck square to the boards.** You arrive first and lose it immediately, because the second man simply pins you. Speed without body position is a wasted sprint. **And the safety rule outranks the possession one:** get your **skates parallel to the wall**, take contact on your **forearm and hip**, head up and chin off your chest — **never your back to the boards, never duck.** Puck races to the wall are where checking-from-behind and boarding injuries happen ([Body Contact and Battles](../technique/body_contact_and_battles.md), §6).
- **Making the outlet pass before clearing the danger.** In a defensive-zone scramble, trying to start the breakout before the net front is safe is how scrambles become goals.
- **Standing still on the weak side.** The difference between a decoy that occupies a defender and a passenger who occupies nobody is a stick on the ice and one step toward the seam.
- **Stepping laterally into a checker to block for a teammate.** That is the rulebook's definition of a pick and it is an interference minor — **and not the ceiling**: NHL 56.4 allows a major on the degree of violence, IIHF 56.5 reaches a major plus a game misconduct where it recklessly endangers, with nobody hurt, and Hockey Canada 8.3(b) reaches the same tier on *"the degree of violence of the impact"* with nobody hurt, and makes it mandatory where it injures. **If you play in the United States**, USA Hockey writes no tier above the minor inside Rule 625 itself but reaches one from outside it, by two narrower routes: **640(g)**'s major plus a game misconduct for a player who *"recklessly endangers an opponent"* through, among others, **640(d)** — a body check *"with no effort to gain possession of the puck"*, but only where *"the blade of the player's stick is above the knees"* — and **602(a)**, a match penalty for a player who *"recklessly endangers or attempts to injure any opposing player"*, tied to no named foul at all. (And it is not a "screen" — keep that word for the goaltender's sightline.)
- **Backchecking to a place instead of to a man.** Sprinting to the top of the circles and stopping, having covered no one, spends the energy and buys nothing.
- **Assuming the answer to "who goes?" is universal.** Under a 2-1-2 two forwards pursue; under a 1-2-2 one does. Not knowing which your team plays is the actual problem.

## Check yourself

*Answer each question before you go on — a real attempt, not a guess. Then go
and check, because the checking is the part that does the work. Producing an
answer and getting it wrong is worth more than recognising a right one, but only
when the right answer follows: the section named with each question, and the Key
Takeaways after them, are where you get it. Where the answer lives in another
document, that is named too.*

1. Name the four off-puck states. Which two do most players have no plan for, and
   why does that make them where the most improvement is available? *(§The four
   off-puck states)*

2. You are F1 arriving on a carrier in the corner. The order is "stick on the
   puck, body on the man" — but before you use the second half of that, what must
   you have checked, and what does the bullet reduce to where the answer is no?
   *(§State 2 — If you are the one pressuring)*

3. You are alone in space with your stick up, waving, and the pass never comes.
   Give the three things being *available* actually requires, and say which of
   them is the most common failure. *(§Unmarked is not the same as available)*

4. A puck is loose on the wall in your own end and you are racing a forechecker
   to it. What outranks winning that race, and what four things does it require
   of your body? *(§State 3 — Then how you arrive)*

5. Scramble in front of your own net, three players down, no structure left. Work
   the priority list in order. Where does the outlet pass come — and what rule
   constrains how you get the puck out? *(§State 3 — What to prioritise when
   structure has broken down)*

6. Your team has just lost the puck in the neutral zone and you are a winger.
   Where do you go, why is "everyone sprint to the middle" specifically wrong,
   and what would change the answer? *(§State 4 — What to do off the puck in
   transition)*

7. You want to use a teammate's body to shake your check. What does the rulebook
   let you do, what does it call a pick, and why does this document refuse to
   call any of it a "screen"? *(§Screens and picks — what is actually legal)*

8. You are standing in the goaltender's sightline, both feet outside the crease,
   and you never touch anybody. Can the goal still be disallowed? *(§Screen the
   goalie)*

---

## Key Takeaways

1. **You have the puck for about 3-4% of your ice time** — forwards near 40 seconds, defencemen 49, per 20 minutes, in possessions averaging 1.3 seconds. **That is NHL tracking data the league itself calls unofficial, and it is 5-on-5 only, which is not the same as even strength.** You never get long enough with the puck to fix bad position.
2. **Off-puck play is four states, not one:** your team has it, they have it, it is loose, it has just changed hands. Each has a different job. A teaching frame rather than a partition — the last two overlap.
3. **Find out whether you may use your body at all before you play a shift.** Body checking is banned under USA Hockey Rule 604(a) at 12U and below and in all girls'/women's and non-check adult classifications, and under Hockey Canada Rule 7.3 at U13 and below, throughout female hockey and in any Member-approved division. **In Britain neither book states an age. Ask your league**, and note that British women's hockey runs IIHF Rule 101.1 unamended: bodychecking only with a clear intention of playing the puck or attempting to *"gain possession"* of it, subject to the exception the rule itself then sets out; any move to step or glide into an opponent is at least a minor, running up to a major plus an automatic game misconduct. Where it is not permitted, defending off the puck is angling, stick checks and body position.
4. **Unmarked is not available.** Three things at once: a stick flat on the ice as a target, a straight angle from the puck to your blade, and nothing lying in that lane — a defender's stick across it leaves you unmarked and unavailable, and nothing about your own position tells you it is there. Fix the lane, then say something.
5. **Break on the passer's look, not the open space.** A second early is the same as never getting open — go when their head comes up.
6. **Come back toward the puck.** Skating away is the amateur default; arriving toward the carrier with speed is shorter, faster and harder to defend.
7. **Occupying a defender is unrewarded work, and it only functions if you commit fully.** A genuine net drive, a legal route through traffic, a screen from outside the crease without initiating contact, a live weak-side decoy, honest width. **And the screen is the one that can hurt you.** You hold a spot at the goalmouth with your eyes on the puck while a defender works to move you sideways, along a path with a steel goal frame at one edge and a set goaltender at the other. Know where the near post is before the shot, take the shove braced with your knees giving, keep your head up and your chin off your chest, and never duck. USA Hockey names the goal post beside the boards in its sentence on how cervical spine injuries happen, and records that the injury can occur at walking speed. **That holds in every league, checking or not.**
8. **On defence, layer behind pressure rather than duplicating it** — two players on one puck usually means somebody is free, and **whether you may hold that layer at all is a system question, not a law**, so ask your coach which coverage you play. [Puck Support and Spacing](puck_support_and_spacing.md) covers the layering geometry and the deliberate double-team that is its exception.
9. **Win loose pucks with body position and a decided exit, not just speed — and safety outranks all of it.** A puck race to the wall is a race into the boards, and a head-down, head-on arrival is what *Heads Up Hockey* ties almost all on-ice cervical spine injuries to — at walking speed as much as at full speed — so get your **skates parallel to the boards**, take it on your **forearm and hip**, head up and chin off your chest, and **never turn your back to the wall or duck**. See [Body Contact and Battles](../technique/body_contact_and_battles.md), §6.
10. **Off-puck effort is the cheapest thing to improve.** Backcheck to the middle, finish your route, take the second stride — none of it needs a skill you do not already have.

---

## Notes on verification

- The **individual possession figures** come from a peer-reviewed conference paper (LINHAC 2025) using NHL puck-and-player-tracking data from 2023-24. The paper itself states that the NHL considers this possession dataset **unofficial** and that it "may differ from other datasets that track possession information (e.g., a hand-labelled dataset)." All of its figures are **5-on-5 only** and **normalised to 20 minutes of ice time**.
- The **2002 possession figures** are taken directly from **USA Hockey's own 2002 puck-possession study** of the Olympic Winter Games and the Youth Tier I National Championships, whose data tables are printed at pp. v–vi of USA Hockey's [*Small Area Competitive Games*](https://cdn1.sportngin.com/attachments/document/38c0-3079160/USA_Hockey_Small_Area_Competitive_Games.pdf) handbook, also cited in [Practice and Development](../off-the-ice/practice_and_development.md). Two things follow, and both cut against the way these numbers are usually repeated. **1:07.05 is the men's per-game tournament average, not a Modano or Sakic figure** — those player names come from the gloss in **Harry Thompson's "The Power of Practice"**, a *USA Hockey Magazine* feature that reports the study rather than measuring anything itself. And **1:06.02 is the 14-and-Under bracket alone**, not youth nationals generally.
- The **ice-time averages** (forwards 15:17, defencemen 19:31 for players with 40+ games in 2024-25) are computed from Hockey Reference's 2024-25 NHL skater table, not a figure published by that site.
- The **shift-length figures** (mean 47 seconds, median 45) are computed from the NHL's public shift-chart API across a sample of **11 regular-season games from 2024-25 (8,325 shifts)**. That is a small sample chosen for convenience and it is not a league-wide published statistic.
- All **arithmetic combining** possession rates, ice time and shift length (the "about 30 seconds", "about 24 possessions", "about 14 seconds in the offensive zone" figures) is mine. It assumes the 5-on-5 possession rate holds across all ice time, which is an approximation.
- The **interference and pick rules** are quoted from the **NHL Official Rules 2025-2026**, Rule 56.1, and the **holding and hooking** definitions in the backchecking section from Rules 54.1 and 55.1 of the same book. **Note what Rule 56.1 does not cover:** its "Body Position" paragraph is written for *"an opponent, who does not have the puck"*, so it does not reach a player restraining the puck **carrier** from behind; that is holding under 54.1, which applies *"whether or not he is in possession of the puck"*, or hooking under 55.1, which sets no possession condition. The IIHF equivalents were read in the **2025/26 Rulebook (Version 1.1, July 2025)**: its 54.1, 55.1 and 56.1 carry the same wording in the plural, its 55.1 adding a sentence about the stick going against or near the opponent's hands.
- The **delay-of-game material in the loose-puck priority list** is quoted from four rulebooks directly: NHL 63.2(ii) and (iii), IIHF 63.2(II) and (III), USA Hockey 610(c) and 631(d), and Hockey Canada 10.1 with its clauses (ii) and (v). Two limits travel with it. **Whether the IIHF Rulebook and the IIHF Situation Handbook disagree about a puck kicked out over the glass depends on a reading neither book settles.** The wording of 63.2(III) says hand or stick; Situation 63.19 in the Handbook's **v1.1 (August 2025)** says the minor applies, reversing the Handbook's own **v1.0 (June 2025)**; and **Situation 63.34** puts the bare kick and answers *"Yes"* in **all three editions read**, so v1.0 held both answers at the same time. **Three Handbook editions were read for these situations:** v1.0 and v1.1 of 2025/26, and the **2026/27 Handbook (Version 1.0, June 2026)**, in which 63.19 is in the same words and answers *"Yes."* again and 63.34 and 63.29 are word for word as in both 2025/26 editions. The **2026/27 Rulebook** was read for 63.2(II) and (III) alone, both unchanged, (III) still naming only *"their hand or stick"*; nothing else in the 2026/27 books has been read for this document. **Neither situation cites a rule**, so whether the Handbook is applying **63.2(II)** — *"deliberately shoots or bats (using their hand, leg, foot, arm, stick etc.) the puck outside the playing area (from anywhere on the ice surface)"*, the one clause in the whole of Rule 63 that names the foot — or reading (III) more widely than its words is stated nowhere, and every account of *why* the answer is Yes is inference about an unstated intention rather than evidence. Neither the reversal nor its reason is explained in any of them, and the Handbook's Foreword subordinates itself to the Rulebook. **Situation 63.29 was also read and runs the other way**, the Handbook there being *narrower* than 63.2(III): a goalkeeper's reactive stick save over the glass draws *"No. The goalkeeper was simply making a save and did not 'shoot' the puck over the glass. Rule 63.2. talks about deliberate, the save cannot be seen as falling under this criteria."* So the position is reported as conditional rather than resolved. **The bench material comes from the same Handbook** — Situations 63.24, 63.28 and 63.3, read in the 2025/26 (v1.1) and 2026/27 editions and worded the same in both — and is subordinate to the Rulebook for the same reason. **Whether the NHL reads its own hand-or-stick wording the same way is not known here** — it writes *"using his hand or his stick"* where the IIHF writes *"using their hand or stick"*, and the NHL's situation handbook is not held in this corpus and was not searched, so nothing said about the skate is a statement about the NHL beyond Rule 63.2(iii)'s own words.
- The USA Hockey material on small-area games is quoted from *Teaching Concepts Through Small-Area Games* (USA Hockey, 2014, written and compiled by Ken Rausch and Dan Brennan; flexxCOACH is credited in the manual for video and audio production only, not as a publisher).
- The **coaching content** — getting-open mechanics, the four-state framework, loose-puck priorities, the bench questions — is a synthesis of standard coaching practice and is **not** a rule of hockey. Where a specific assignment depends on a system (who pursues a loose puck, how much width a winger holds, man versus zone coverage) that is flagged in the text. Ask your coach.
- The **four states are a teaching device, not a partition.** States 3 (loose puck) and 4 (transition) genuinely overlap, and the four are not mutually exclusive.
- The **goaltender-interference wording** in the screening section is quoted from **NHL Official Rules 2025-2026, Rules 69.1 and 69.3**. Note that Rule 69.1 disallows a goal for impairment "either by his positioning or by contact" — contact is not required — which is why the "outside the crease" qualifier is attached to the legality claim itself. **Rule 69.3's definition of a "significant position" is quoted rather than paraphrased on purpose**, because the ground reads far stricter without it: the rule confines itself to a body, "or a substantial portion thereof", in the crease "for more than an instantaneous period of time". **The IIHF prints that defining sentence word for word** in both its 2025/26 (v1.1) and 2026/27 editions, differing only in writing "their body" for "his body", so the test quoted here is the same test a British reader plays under. ⚠️ **The IIHF's own Situation Handbook does not apply that test, and it is quoted in the section above rather than left out:** its Situation 69.1 answers a player *"in the crease screening the goalkeeper"* with a flat *"The goal shall be disallowed, and no additional penalty assessed"*, citing *"Rule 69.1 and Rule 69.3"* and asking nothing about duration, nothing about the goalkeeper's vision and nothing about their ability to defend. It is guidance, and the Handbook's own Foreword subordinates it — *"in case of any contradictions, the valid IIHF Rulebook is always the basis"* — so the narrowing above stands as a statement of the rule. It is stated rather than omitted because it is authority running the other way, and because the official in a British reader's game may be working from it. **The USA Hockey and Hockey Canada comparison in the same section is quoted from their own books**, and the statement that neither book reaches a screen set from **outside** the crease is a search of both in full: USA Hockey writes no goaltender-vision provision at all, and Hockey Canada's only two mentions of a goaltender's view — in Rule 8.5's crease paragraph and its Interpretation 3 — both reach a player who is in the crease. That is a claim about screens set outside the paint only; inside it, Hockey Canada does judge impairment, and 8.5's own carve-out and Interpretation 3 are quoted in full above rather than summarised, because the first sentence of each reads as a flat bar and the second is what makes it not one. The separate USA Hockey *Official Rules and Casebook* was searched for the same thing and does not add one: its only two uses of the word *screen* are Rule 625(a)(1)'s protective screen set on a **checker** and a sled-hockey pushers' provision, it never speaks of a goaltender's vision, view or sight, and none of the seventeen Casebook situations under Rule 625 reaches a screen at all — the nearest, Situation 8, turns on an attacker *standing in the crease*. So the USA Hockey negative rests on both volumes. **They do carry a limit the printed rule does not, and it is quoted in full above:** Situation 9's proviso disallowing the goal, and adding an interference penalty, where the goalkeeper was trying to get back to the crease and the attacker prevented them from making a play. Hockey Canada prints its interpretations inside the playing rules, so both of its mentions were searched with them.
- The **contact-inside-the-crease material** in the same subsection is quoted from **NHL Rule 69.3**'s first paragraph and **Rule 69.7**, and from the IIHF's 69.3 and 69.7 in both editions; the IIHF writes *"a relevant contact"* where the NHL writes *"contact"* in that first paragraph, and its 69.7 is the NHL's sentence with quotation marks of its own around *"incidental contact"*. The NHL's 69.3 refers to 69.7 as an exception in terms; **neither book's 69.7 is scoped to a screen**, and the reading offered above — that a planted screener bumping the goalkeeper falls under 69.3 rather than 69.7 — rests on 69.7's own words about a rebound or a puck both players are simultaneously attempting to play, not on anything either book says about screens. **69.7 is quoted for all four of its limbs rather than the permission alone**, because the other three are limits a net-front player meets: the disallowed goal where a goalkeeper is pushed into the net together with the puck by an attacking player after making a stop, with *"[i]f applicable, appropriate penalties will be assessed"*; the relief in the sentence after it, where a defending player pushed or fouled the attacking player into causing that; and the last limb, on a puck under a player in or around the crease. The IIHF prints all four at the same number in both editions, differing only in its capitalised *Player*, its *"goal crease"* for the NHL's *"crease"*, its quotation marks around *"incidental contact"* and *"Penalty Shot"*, its opening *"In the event"* for the NHL's *"In the event that"*, and its setting of all four limbs off as separate paragraphs where the NHL prints three and keeps the relief inside the second — a difference of layout only, since the reading of every limb is the same in both books. **NHL 78.5(ix) and IIHF 78.5(IX) are cited only as cross-references**: both state the push-in in a shorter form that drops *"by an attacking player"* and writes *"after making a save"*, and both refer back to 69.7, so 69.7's wording is what is relied on above.
- The **contact-outside-the-crease material** is quoted from **NHL Rule 69.4**, from **IIHF Rule 69.4** in both the 2025/26 (v1.1) and 2026/27 editions — where the conditional clause is word for word the same save for the IIHF's gender-neutral pronouns, its capitalised *Player*, and its quotation marks around *"incidental contact"* and *"reasonable effort"* — from **USA Hockey Rule 607(c) and 607(d)** with its Note 1 and Note 2, from the **USA Hockey Official Rules and Casebook 2025-29** at **Rule 607, Situations 5 and 6**, and from **Hockey Canada Rule 8.5**'s opening paragraph and its *Protection of the Goaltender* paragraph. Two limits are worth stating. **USA Hockey's position was reached by searching the concept rather than the phrase:** its books contain no sentence resembling the NHL's *"in the act of playing the puck"*, and a phrase search returns nothing, so the parallel rests on the Casebook's possession wording being read as answering the same question — which is a reading, not something either book says. And **USA Hockey 607(d) Note 1** — *"any accidental or unavoidable contact that occurs with the goalkeeper shall be penalized under the Interference rule"* — can be read either as penalising accidental contact outright or as routing it to the right rule once it is penalised; the book does not say which, and neither reading is asserted above.
- **On the claim that no published work ranks amateur mistakes by frequency.** What exists in the research literature is measurement of *gaze* — where and when a defender looks — and measurement of *events* such as turnovers and zone exits, mostly in professional leagues. Neither produces a frequency-ranked list of amateur errors, and the coaching material that names puck-watching first names it as experience rather than as a count. Treat the ranking as a coaching claim.
- "**First to arrive, last to commit**" is a coaching heuristic with no known originator, not a law of hockey. The phrase and that caveat sit with the rest of the loose-puck material in [Body Contact and Battles](../technique/body_contact_and_battles.md), §10.

---

*Sources — retrieved 27 July 2026:*

*Possession and tracking data: [Iaboni, Negulescu, Pitassi, Lodhi & Brecht — "Individual Puck Possessions Part I: Frequency, Duration, and Distance Travelled", LINHAC 2025 (PDF)](https://cs.uwaterloo.ca/~brecht/papers/linhac-2025-part-1.pdf) · [Linköping University Electronic Press — article record](https://ecp.ep.liu.se/index.php/linhac/article/view/1208) · [NHL EDGE — official player and puck tracking](https://www.nhl.com/nhl-edge/) · [NHL shift-chart API (shiftcharts endpoint)](https://api.nhle.com/stats/rest/en/shiftcharts) · [Hockey Reference — 2024-25 NHL skater statistics](https://www.hockey-reference.com/leagues/NHL_2025_skaters.html)*

*Rules: [NHL Official Rules 2025-2026 (PDF)](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) — Rule 54.1 (Holding), Rule 55.1 (Hooking), Rule 56 (Interference, incl. 56.1 on picks and its "Body Position" paragraph), Rule 63.2(iii) (Delaying the Game — puck out of play from the defending zone, its three carve-outs, and the penalty for a puck over the glass behind the players' bench), **Rule 63.2(ii)** (the second, deliberate limb — every zone, hand, leg, foot, arm or stick, in play or after a stoppage), Rules 69.1 and 69.3 (Interference on the Goalkeeper — 69.3 read in full for both of its grounds: its first paragraph on contact "incidental or otherwise" with a goalkeeper in the crease, its fourth on a "significant position" established with no contact at all, and its fifth, which defines that term as the player's body "or a substantial portion thereof" in the crease "for more than an instantaneous period of time"), **Rule 69.4** (Contact Outside the Goal Crease — the "not fair game" paragraph and the conditional permission that follows it) and **Rule 69.7** (Rebounds and Loose Pucks — read in full for all four of its limbs: the exception 69.3 refers to in terms; the paragraph disallowing the goal where a goalkeeper *"has been pushed into the net together with the puck by an attacking player after making a stop"*, with *"[i]f applicable, appropriate penalties will be assessed"*; the sentence after it permitting the goal where *"the attacking player was pushed or otherwise fouled by a defending player"* causing that push; and the fourth, under which *"a goal cannot be scored by pushing this player together with the puck into the goal"* where the puck is under a player in or around the crease area, up to a penalty shot if deemed covered deliberately) **Rule 42.1** (Charging — the goalkeeper sentence, *"A minor, major or a major and a game misconduct shall be imposed on a player who charges a goalkeeper while the goalkeeper is within his goal crease"*, with 42.2 the minor, 42.3 the major, **42.4 a match penalty** reaching only a player who *"attempted to or deliberately injured his opponent by charging"*, and 42.5 a game misconduct where a major under the rule injures an opponent's face or head; read 1 September 2026. ⚠️ **Extraction note: that goalkeeper sentence returns nothing to a phrase grep of the NHL text** — a running header and a page number are spliced into it at a page break, and only a whitespace-flattened read recovers it), **Rule 69.2** (the interference penalty, *"minor or major, as the Referee deems appropriate"* — the rule carries no injury tier) and **Rule 78.5(ix)** (the disallowed-goal list, which states the push-in in a shorter form — no *"by an attacking player"*, and *"after making a save"* — and refers back to 69.7) · **the IIHF's Rules 54.1, 55.1 and 56.1**, which carry the NHL's holding, hooking and body-position wording in the plural, and **its Rules 69.1, 69.3, 69.4 and 69.7**, which carry the same premise and the same grounds — 69.1 in the same terms save that it writes *"relevant contact"* where the NHL writes *"contact"*; 69.3 with the same *"significant position"* clause against an attacker who obstructs the goalkeeper's vision, with the same defining sentence after it word for word save for *"their body"* in place of *"his body"*, and with *"a relevant contact"* in place of the NHL's *"contact"* in its first paragraph; 69.4 with the same *"in the act of playing the puck"* condition on incidental contact; and 69.7 carrying all four of the NHL's limbs and differing only in its capitalised *Player*, its *"goal crease"* where the NHL writes *"crease"*, its quotation marks around *"incidental contact"* and *"Penalty Shot"*, and its opening *"In the event"* for the NHL's *"In the event that"*; **its Rules 42.1 to 42.5**, read 1 September 2026 and word for word the same in the 2025/26 v1.1 and 2026/27 editions — 42.1 imposing a penalty on a Player who charges a goalkeeper *"while the goalkeeper is within their goal crease"*, 42.2 the minor, 42.3 the major, and **42.4** *"a major penalty and a game misconduct penalty"* where the Player *"recklessly endangers their opponent by 'charging' and the Player would not be sufficiently sanctioned by imposing a major penalty"*, 42.5 being supplementary discipline; ⚠️ **42.4 is a different rule in the two books** — the IIHF writes no match penalty for charging at all, where the NHL's 42.4 is one; **its Rule 69.2**, which assesses *"minor or major, as the Referee deems appropriate"* as the NHL's does and carries no injury tier either; and **its Rule 78.5(IX)**, the disallowed-goal entry for a goalkeeper pushed into the net with the puck *"after making a save"*, which refers back to 69.7; the IIHF rules above read 30 August 2026, with 69.7 and 78.5(IX) read in both editions on 31 August 2026 · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — Rule 604(a) (body checking by classification), Rule 610(c) (delay of game, which reaches only a **deliberate** shoot-out of the playing area), and **Rule 601**, the escalation above it after the whistle — **601(c)(10)**, a misconduct for a player who *"shoots or bats the puck outside of the playing area during a stoppage of play (when not done in protest of an official's decision or in the direction of a spectator)"*, and **601(d)(7)**, a game misconduct where the same act is *"done in protest of an official's decision"*, **Rule 625 Interference** (read in full for a tier above the minor, of which it has none — the "pick"/"block" wording is its own), **Rule 602(a)** (*"A match penalty shall be assessed to any player or team official who recklessly endangers or attempts to injure any opposing player or team official"* — tied to no named foul, so it sits outside Rule 625), **Rule 640** (Unnecessary Roughness — read (a) to (h) by line range across two page breaks: **640(g)**'s *"major plus a game misconduct penalty … to any player who recklessly endangers an opponent as a result of any actions falling under Rule 640(b, c, d, e or f)"* and **640(h)**'s match penalty by the same route, plus the two sub-sections a pick could enter by — **640(d)**, which requires *"the blade of the player's stick is above the knees"*, and **640(b)**, which is *"(except Adult Male Classifications)"* and reaches only an opponent *"no longer in control of the puck"*), **Rule 625(b)** (the position bar on a goal with an attacking player in the crease, its two carve-outs — the puck preceding the player in, and the goalkeeper being out of the crease area — and its third paragraph's relief where a defending player's physical interference is what put the attacker there; the second carve-out is qualified in the Casebook rather than in the rule, and the qualification is cited below) **Rule 607** (Charging — read in full on 1 September 2026 for **(a) to (e)** with its Note and its Notes 1 and 2: **no limb of it is a bare minor**, (a) and (c) both being *"A minor plus a misconduct or a major plus a game misconduct penalty"*, (b) a mandatory major plus game misconduct for reckless endangerment and (e) a match penalty; 607(c) is the goalkeeper limb, *"to a player who body checks or charges a goalkeeper while the goalkeeper is within the goal crease or privileged area"*, and 607(d) the "not fair game" clause for outside it) **Rule 625(a)** (read for an injury tier above the minor, of which it has none) **Rule 614(c)** (Falling on Puck — the four triggers, of which **(1)** *"[t]he puck is behind the goal line and their body is entirely outside of the goal crease"* is the one that reaches a goalkeeper behind the net; the book and its Casebook were searched in full for *trapezoid*, *restricted area* and *designated area* and have none) and Rule 631(d) (an accidental one is a last-play face-off in the zone the puck was shot from, not a penalty) · [USA Hockey Official Rules and Casebook 2025-29 (PDF)](https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf) — the combined volume, searched in full for a screening or goaltender-vision provision and read for all seventeen Casebook situations under Rule 625: it carries neither. **Situation 9** is cited for the limit on 625(b)'s goalkeeper-out carve-out — the goal stands where the goalkeeper is *"completely out of their crease"*, but *"if the goalkeeper is attempting to return to the goal crease and there is any interference by the attacking player who prevents the goalkeeper from making a play, then the goal must be disallowed and an interference penalty shall be assessed"*. **Rule 607, Situation 5** is cited for USA Hockey's possession wording and **Situation 6** for the privileged area reaching the ice behind the goal line · [Hockey Canada Playing Rules 2026-2028 (PDF)](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) — Rule 7.3 (body checking, which the book restricts by *division*: U13 and below, female hockey and any Member-approved division), **Rule 11.1 Unsportsmanlike Conduct**, **preamble item (v)** — cited by its list because the rule carries a second roman-numeral list under 11.1(d) whose own item (v) is a different offence — *"Shooting the puck out of the playing area, after the whistle"*, *"a Minor or Bench Minor penalty"* under 11.1(a), a Misconduct under 11.1(d)(i) where the player persists and a Game Misconduct under 11.1(e), read with **Note 1 to 11.1(d)** — *"A Referee is not required to assess a Minor penalty under this rule before assessing a Misconduct penalty, but may assess either penalty initially"* — and Note 1 to 11.1(e) in the same terms, so neither tier waits on the minor being called first — read with **Rule 10.1(d)**, *"No Misconduct penalty may be assessed for Delay of Game"*, which is why the after-the-whistle case sits in Rule 11.1 and not in Rule 10.1, **Rule 10.1** (Delay of Game: its non-exhaustive preamble, 10.1(ii) on a deliberate shoot-out of the playing surface — which carries no after-the-whistle words — and 10.1(v), the goaltender-only direct clear; and its **Interpretation 3 to Rule 10.1(a), clause v** — *"When a goaltender leaves their crease, they will not be allowed to freeze the puck. If they do, they will be assessed a Minor penalty. No warning will be issued."* The book carries no goalkeeper's restricted area; its only *"designated area"* is the one Rule 5.4(b) stations a Goal Judge in) and **Rule 8.5** with its Interpretation 3 (Interference with the Goaltender — the crease bar and the carve-out that allows the goal where a teammate outside the crease scores and the crease player stays passive and clear of the goaltender's view and movements, and the only two references to a goaltender's view in the book, both reaching a player in the crease) and its opening and *Protection of the Goaltender* paragraphs · [IIHF Official Rule Book 2025/26 (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf) — Rule 27.7 (goalkeeper restricted area), **Rule 63.2(II)** (the deliberate shoot-out limb, in the same terms as the NHL's 63.2(ii) and in the plural), **Rule 63.2(III)** (the defending-zone limb, *"using their hand or stick"*, carving out *"except where there is no protective glass"* and writing its bench clause *"over the protective glass surrounding the Players' bench"* where the NHL's reads *"behind"*) and Rule 101.1 (Illegal Hit in Women's Hockey — bodychecking permitted only with a clear intention of playing the puck or attempting to "gain possession" of it, and any move to step or glide into an opponent at least a minor; a women's-section rule, not the IIHF's general checking rule) · [IIHF Situation Handbook 2025/26 (v1.1, August 2025) (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) — Situation 63.19, which answers a bare *"Yes."* to the minor for a puck kicked directly off the foot and over the glass, reversing the *"No."* of v1.0 (June 2025); **Situation 63.24**, which still assesses the minor where a clear goes over the glass and lands in the Players' Bench, exempting only a puck *"shot directly into the Players' Bench (where there is no glass)"*; **Situation 63.28**, the glove scoop over the glass behind the players' bench, *"considered shooting or batting the puck with the hand resulting in the puck leaving the playing surface"*; **Situation 63.3**, exempting a puck that *"clears the glass at a point in the Penalty Bench where the glass is lower than the normal height around the rink"*; **Situations 69.3 and 75.4**, which put the hand, glove or stick held in front of the goalkeeper's eyes in identical words and answer both times that it is unsportsmanlike conduct and a Rule 75 minor *"if witnessed by the Referee(s)"*; and **Situation 69.1**, quoted in the screening section as authority running against 69.3's conjunctive test — asked what the referee decides where a *"Team A player is in the crease screening the goalkeeper, and Team A scores"*, it answers *"The goal shall be disallowed, and no additional penalty assessed. Rule 69.1 and Rule 69.3"*, read 31 August 2026; its Foreword ranks it below the Rulebook — *"in case of any contradictions, the valid IIHF Rulebook is always the basis"*, and it asks readers to *"always use the latest version"* · [IIHF Situation Handbook 2026/27 (Version 1.0, June 2026) (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2026-27_iihf_situation_handbook.pdf) — read for **Situations 63.19, 63.24, 63.28, 63.3, 69.1, 69.3 and 75.4 only**: 63.19 puts the same facts in the same words and answers *"Yes."* again, so the reversal holds across the edition boundary; the next three are worded as in 2025/26; 69.3 and 75.4 put the eyes/face question and its answer as the 2025/26 edition does; and 69.1 puts the crease-screen question and its flat answer word for word as the 2025/26 edition does, read 31 August 2026 · [IIHF Official Rule Book 2026/27 (Version 1.0, June 2026) (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/rule%20book/2026-27_iihf_rule_book.pdf) — read for **Rules 63.2(III), 69.3, 69.4 and 69.7 only**: 63.2(III) is unchanged from the 2025/26 edition and still names only *"their hand or stick"*, 69.3 carries the same *"significant position"* ground and the same *"more than an instantaneous period of time"* definition word for word, 69.4 carries the same *"in the act of playing the puck"* condition in the same words, and 69.7 is unchanged; no other rule in the 2026/27 book has been read for this document, so every other IIHF citation above is a citation to the 2025/26 edition.*

*Coaching and development: [USA Hockey — Small-Area Games](https://www.usahockey.com/smallareagames) · [USA Hockey — "Teaching Concepts Through Small-Area Games" manual (PDF)](https://cdn1.sportngin.com/attachments/document/0084/2519/Teaching_Concepts_Through_Small-Area_Games_FINAL.pdf) · [USA Hockey — Training and practice materials](https://www.usahockey.com/trainingmaterials)*

*Safety: [USA Hockey — Heads Up Hockey Program Guide (PDF)](https://cdn4.sportngin.com/attachments/document/0138/6193/HUH_Program_Guide_FINAL.pdf) — read for the cervical-spine passage under "How spinal injuries happen in hockey", which credits **Charles H. Tator et al., *Spinal Injuries Due To Hockey*, Canadian Journal of Neurological Sciences 11:34-41** for *"almost all on-ice cervical spine injuries have been due to the head being slightly flexed (head down) while making head-on contact with the boards or goal post"*, and states that *"a player doesn't have to be going at full speed for this to happen — it can occur at walking speed."* **The credited paper does not itself carry the quantifier** — it is indexed as a case report on six patients treated at a single Toronto unit between 1974 and 1981, so *"almost all"* is USA Hockey's characterisation of the research; [Body Contact and Battles](../technique/body_contact_and_battles.md) carries that provenance and the larger studies alongside it. Its own superlative is about the habit rather than the situation — keeping your head up is *"the single most important thing to know and do to prevent head injuries."* **Verification note:** this guide was searched, along with *Introduction To Body Contact* and CRT6, for any ranking of game situations by danger, and none was found; the passage above is a claim about posture and collision geometry, not about which moment in a game is worst. **Read again on 1 September 2026 for the net-drive and screening sections:** the same guide names the goal post alongside the boards throughout — its Session 3 drill is *"Good ways and bad ways to have a close encounter with a goal post, the boards, or another player"* — and lists *"Avoiding goal posts while driving to the net"* among the answers it expects when it asks players what "heads up" means as safe hockey · [USA Hockey — Introduction To Body Contact (PDF)](https://cdn4.sportngin.com/attachments/document/55c1-2114751/IntroductiontoBodyContact.pdf) — its Heads Up Hockey principles, read 1 September 2026, including *"Hit the boards or goal posts with an arm, a leg, or anything but your head first."* **Neither document publishes an injury rate for screening, tipping or net-front play, and neither was found to rank the net front against any other situation**; the net-front and screening passages above are about collision geometry rather than measured risk*

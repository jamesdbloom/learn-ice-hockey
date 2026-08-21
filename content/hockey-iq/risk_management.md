# Risk Management and Decision-Making

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline. **Playing in Britain? The IIHF flags are yours** — every level of UK hockey runs the IIHF book, amended locally; see [UK and England Rules](../foundation/uk_rules.md).
>
> **Related:** [Game Management](../systems/game_management.md) · [Scanning and Anticipation](scanning_and_anticipation.md) · [Mental Game](../off-the-ice/mental_game.md) · [Time and Space](time_and_space.md) · [Puck Support and Spacing](puck_support_and_spacing.md) · [Breakouts](../systems/breakouts.md) · [Zone Entries](../systems/zone_entries.md) · [Defensive Zone Coverage](../systems/defensive_zone_coverage.md) · [Rink Map and Glossary](../foundation/rink_map_and_glossary.md) · [UK and England Rules](../foundation/uk_rules.md)

## Overview

Every time you touch the puck you place a bet, and what you stand to lose depends more on where you are standing than on what you try.

**So change where you are standing before you decide.** The same pass is brilliant in the corner of their end and catastrophic in front of your own net, so one stride out of that ice improves every option on your list. Ranked by what a mistake costs: in front of your own net catastrophic, the rest of your own end high, the middle third of the ice high too because a turnover there hands them an attack where they outnumber you, their corners nearly free. And losing the puck while it travels toward your own net is worse than losing it going the other way, because the turnover and the counter-attack are then one event.

**Understand the "never" list rather than memorising it.** There are nine, all set out below with the reason attached; five of them are no cross-ice pass in your own end, no blind backhand up the middle, never both defencemen to the same puck, never stickhandle in front of your own net, and never leave your feet to hit. **Two of the nine are named in a rulebook — one of them is in that five, and one is not.** Putting the puck **directly** over the glass from your own end is a minor penalty (NHL Rule 63.2) — *directly* is the word that decides most real cases, because the rule reaches a shot or bat that goes out "directly (non-deflected)", so a puck that clips a stick, a glove or a shoulder on its way out is not a penalty. And leaving your feet to check someone is written into the charging offence by name in **all four rulebooks**: NHL Rule 42.1 penalises a player who "skates, jumps into or charges an opponent in any manner", IIHF Rule 42.1 uses almost the same words and makes "jumps to check an opponent" the first branch of its definition, USA Hockey Rule 607 includes "leaving one's feet (jumping)", and Hockey Canada Rule 7.4 opens "Charging is when a player: i. Jumps to check an opponent." The other seven are conventions — and a convention you understand transfers to situations nobody described to you.

**A minor penalty is roughly a one-in-five chance of a goal against** — 21.1% across the 2025-26 NHL regular season. Worth it to stop a certain goal, almost never worth it out of frustration. And chasing a puck carrier you cannot catch is worse than it looks: foul them from behind when they are clear with only the goaltender to beat, and the NHL rulebook gives them a penalty shot (Rule 57.3), not a two-minute penalty.

**When you genuinely have nothing, take the hit and accept the faceoff that follows — and take the hit properly.** Skates parallel to the wall, contact on your forearm and hip, head up and chin off your chest, never with your back to the wall. Then do not compound it: the odds on the next play have nothing to do with the last one.

---

## The central idea: every play has an expected value

**Expected value** is the plain-English idea that a decision is worth *what you gain if it works, weighted by how often it works, minus what you lose if it fails, weighted by how often it fails.*

In hockey terms:

> **(chance the play works × what you gain) − (chance it fails × what you lose)**

You already do this. When you rim the puck around the boards instead of trying a cross-ice pass, you have just decided that a low-value certainty beats a high-value gamble. You made that calculation in about a third of a second and you did not notice yourself making it. **Making it conscious — in practice, on video, on the bench — is how you improve it**, because unconscious calculations do not get better on their own. They just get faster at being wrong.

### What the analytics say about the "gain" side

Public tracking work has actually put numbers on the upside of different puck decisions. Thibaud Chatel's "Hockey Decision Tree" work at Hockey Graphs (March 2020), built from roughly **11,000 possession sequences tracked manually by Chatel and his colleague Mathieu Brosseau** in France's Ligue Magnus and Switzerland's NLA over three seasons (Chatel is the sole author of the write-up, but the tracking was the two of them — *"by my colleague Mathieu Brosseau and myself"*), valued each type of play as *how often it leads to a shot attempt* multiplied by *the average expected goals of the sequences it appears in*.

**Expected goals (xG)** is a model estimate of how likely a given shot is to become a goal, based mostly on where it was taken from and under what circumstances. An xG of 0.10 means "shots like this go in about one time in ten."

| Play | Leads to a shot attempt | Average xG of those sequences | Value of the play |
|---|---|---|---|
| Successful **high-danger pass** (a pass into the middle of the offensive zone) | 87% | 0.129 | ≈ **0.112 xG** |
| Successful **controlled zone entry** (carrying or passing the puck over their blue line) | 60% | 0.067 | ≈ **0.040 xG** |
| Successful **carry-out** of your own zone | 37% | 0.064 | ≈ **0.024 xG** |
| **Failed dump-out** of your own zone | 4% | 0.076 | ≈ **0.003 xG** |

Three things to take from that table:

1. **The gaps are enormous.** A completed pass into the middle of the offensive zone is worth roughly *thirty-seven times* a failed dump-out and *over four times* a clean carry out of your own end (0.112 against 0.024, which is Chatel's own phrasing). Not all good plays are equally good.
2. **Getting out of your own zone with the puck is worth about eight times getting out of it badly.** Possession compounds.
3. **These numbers only measure what you gain.** They say nothing about what a failure costs you at the other end. That is the missing half of the equation, and it is the half most players ignore — which is exactly why the rest of this document is mostly about cost.

> **Honest caveat:** this data is from two European professional leagues, manually tracked. The direction of the findings is what matters, not the third decimal place. Do not quote these as NHL numbers.

### The cost side is invisible, and that is the problem

```facts
Key: When a risky pass works everyone sees it; when it fails, the goal arrives eight seconds later and looks like somebody else's mistake
Risk: The chain from your decision to the puck in your net is long enough that most players never connect the two
Action: Start connecting the two yourself — it improves your decision-making faster than any skill you can train
```

When a risky pass works, everyone sees it. When it fails, the goal usually arrives eight seconds later and looks like somebody else's mistake — a missed coverage, a screened goalie, a bad bounce. **The chain of causation from your decision to the puck in your net is long enough that most players never connect the two.** Coaches connect it. Video connects it. Start connecting it yourself and your decision-making improves faster than any skill you can train.

---

## Risk is a function of location

**The same pass is brilliant in one place and catastrophic in another.** This is the single most useful idea in this document. Risk is not a property of the play; it is a property of the play *and where you are standing when you make it.*

First, the vocabulary, because the whole map depends on it:

- **The slot** — the area in front of the net between the faceoff circles. The **high slot** runs from the faceoff dots up to the tops of the circles; the **goalmouth** is the immediate net front. Shots from here go in far more often than shots from anywhere else, which is why it is the most valuable real estate on the ice for both teams.
- **The point** — the blue line, where defencemen stand in the offensive zone. Not to be confused with the **half-wall**, which is on the boards level with the faceoff dot.
- **North** — toward the opponent's net. **South** — toward your own. **East–west** — across the ice.
- **Odd-man rush** — an attack where the attackers outnumber the defenders back, such as a 2-on-1 or 3-on-2.

### Why location dominates everything

The reason location matters so much is that **shot danger is largely about where the shot is taken from**. MoneyPuck's public expected-goals model — trained on more than 800,000 NHL shots from 2007-08 to 2014-15 — puts distance from the net and shot angle among its most important inputs, and reports that in its **2015-16 test season the 15% of shots the model rated highest accounted for over half of all goals**. Scoring is that concentrated.

Be precise about what that does and does not show. Location is not the model's only input: it uses around fifteen, including shot type, the time and distance since the previous event, whether the shot is a rebound and how far the puck moved before it, and the man-advantage situation. So "shot danger is about location" is the biggest part of the story rather than the whole of it — pre-shot movement matters too, which is exactly why the cross-ice pass in the offensive-zone hierarchy below is so valuable.

Flip that around and you have the defensive version of the same fact: **the space in front of your own net is worth defending out of all proportion to its size**, and any decision that risks putting the puck there is a decision with an outsized cost.

### The risk map

```facts
Read: Grade every area by one question — if I lose the puck here, how many seconds and how many bodies stand between the turnover and a shot on my net?
Risk: Your own slot is catastrophic — the opponent gets the puck in the highest-percentage shooting area with zero seconds of recovery time
Risk: Your own zone generally is high — the puck is 30–50 feet from your net and one pass from the slot
Risk: The middle of the neutral zone is high — dangerous and disorganised, and this is where odd-man rushes are manufactured
Risk: The offensive blue line is moderate — the cost scales with how many of your players are ahead of the puck
Risk: The offensive corners and below their goal line are low — this is where you should be at your most creative
```

Every area of the ice can be graded by one question: **if I lose the puck here, how many seconds and how many bodies stand between the turnover and a shot on my net?**

| Where you are | Risk of a turnover | Why |
|---|---|---|
| **Your own slot** | **Catastrophic** | A turnover here is not a chance against, it is very nearly a goal against. The opponent gets the puck in the highest-percentage shooting area on the ice with your goalie unset and your defenders facing the wrong way. Zero seconds of recovery time. |
| **Your own zone generally** | **High** | Everyone on your team is already home, which helps, but the puck is 30–50 feet from your net and one pass from the slot. The margin for error is a stick length. |
| **Middle of the neutral zone** | **High** | Counter-intuitive, and the reason it surprises people: a turnover at centre ice catches two or three of your players skating the wrong way at full speed. **This is where odd-man rushes are manufactured.** Your own zone is dangerous but organised; centre ice is dangerous *and* disorganised. |
| **The offensive blue line** | **Moderate** | A turnover here does not threaten your net immediately, but it starts a rush the other way against a defence that has been supporting the attack. Cost scales with how many of your players are ahead of the puck. |
| **The offensive corners and below their goal line** | **Low** | You are 150-plus feet from your own net with all five teammates between the puck and danger. The opponent needs a clean breakout, a neutral-zone crossing and an entry before they threaten anything. **This is where you should be at your most creative.** |

### Why north turnovers are so much worse than south turnovers

```facts
Key: A turnover has a direction, and the direction changes the cost more than the location does
Risk: A north turnover — losing it while it travels toward your own net — makes the turnover and the counterattack the same event
Risk: A south turnover deep in their end separates the turnover from the counterattack by four or five seconds, which is enough to get organised
Action: Weigh the direction of a risky play as well as its location — a blind pass up your own wall is bad, the same pass in their end is a nothing play
```

A turnover has a direction, and the direction changes the cost more than the location does.

- **A "north" turnover** — you lose the puck while it is travelling toward your own net, or you lose it to an opponent already facing your net. Their momentum is toward your goal. Your momentum is away from it. Every body on the ice is instantly on the wrong side of the puck. The turnover and the counterattack are the same event.
- **A "south" turnover** — you lose the puck deep in the offensive zone, moving away from your net. Their momentum is toward you, which means it points at up to 178 feet of ice they have to cross while your five players get back — goal line to goal line on a 200-foot rink, because **NHL Rule 1.5** places each goal line 11 feet from the end boards. The turnover and the counterattack are separated by four or five seconds, which is enough time to be organised.

**Practical consequence:** the direction of a risky play matters as much as the location. A blind pass up the wall out of your own zone is a bad idea; the *same* blind pass in the offensive zone is a nothing play. This asymmetry is the reason the "never" list below is almost entirely about your own end.

---

## The "never" list — and why each one exists

**Read the reason, not the rule.** Every item below is a rule with a mechanism, and the mechanism is what lets you handle the case nobody warned you about.

**Two of the nine are named in a rulebook: number 9, the puck over the glass (NHL Rule 63.2), and number 7, leaving your feet to hit — which all four rulebooks write into the charging offence by name (NHL 42.1, IIHF 42.1, USA Hockey 607, Hockey Canada 7.4).** The other seven are coaching conventions — near-universally taught, but conventions all the same, and each is flagged as such below. Several of them carry a *secondary* penalty risk, which is a different thing from being a rule, and that is noted where it applies.

### 1. Never pass D-to-D through the slot — go behind the net

```facts
Never: Pass D-to-D through your own slot — an interception leaves the interceptor in the slot facing your goalie
Action: Take it behind the net instead — a longer route by maybe eight feet, and half a second slower
Risk: A failure behind the goal line is a battle behind the net rather than a shot from twenty feet
Convention: A coaching convention, not a rule — some teams allow a D-to-D exchange high in the zone, above the tops of the circles
Action: Find out where your coach draws that line
```

**D-to-D** means one defenceman passing to their partner. In your own zone, the two obvious routes are *through* the front of the net or *behind* it.

**Why not through.** A pass through your own slot travels across the highest-danger area on the ice, in front of the net, at knee-to-stick height, through the exact space where a forechecker is standing. If it is intercepted, the interceptor is already in the slot facing your goalie with the puck. That is not a chance against. That is a goal.

**What to do instead.** Take it behind the net. It is a longer route by maybe eight feet, it takes half a second longer, and a failure there produces a battle behind the goal line rather than a shot from twenty feet.

![](diagram:breakout-d-to-d)

*Coaching convention.* Some teams do allow a D-to-D exchange high in the zone, above the tops of the circles, where the interception would happen 50 feet out. Know where your coach draws the line.

### 2. Never make a blind backhand pass up the middle of your own zone

```facts
Never: Make a blind backhand pass up the middle of your own zone — the worst tool, the worst information and the worst location in one motion
Risk: The backhand arrives slowly and imprecisely, and blind means you do not know whether the target is a teammate or an opponent
Action: Turn your shoulders and take the extra half-second to look
Options: Put it on the boards so a mistake becomes a battle, or use the glass if you genuinely have no time
Convention: No rule forbids it — about as close to universally taught as coaching gets, and the claim that it is a top source of amateur goals is coaching observation, not measurement
```

A **blind pass** is one made without seeing the target — you throw it to where you assume someone is.

**Why not.** Three failures compound. The backhand is your least accurate and least powerful side, so it arrives slowly and imprecisely. Blind means you do not know whether you are passing to a teammate or an opponent. And the middle of your own zone is where the interception is most expensive. You have combined the worst tool, the worst information and the worst location in one motion. Coaches name this as one of the commonest sources of amateur goals against — **coaching observation, not measurement.** Nobody publishes a ranking of amateur mistakes, and [On-Ice Communication](../foundation/on_ice_communication.md) says exactly that about the same class of claim; the reasoning above is what should persuade you, not the ranking.

**What to do instead.** Turn your shoulders and take the extra half-second to look, or put it on the boards where a mistake becomes a battle rather than a chance. If you genuinely have no time, the glass is always there.

*Coaching convention.* No rule forbids it. It is as close to universally taught as coaching gets, and I am aware of no system that asks for it.

### 3. Never make a cross-ice pass in your own defensive zone

```facts
Never: Make a cross-ice pass in your own defensive zone — it crosses every forechecking stick and spends the longest of any pass in the air
Risk: If it is picked off, it is picked off by someone whose momentum already carries them toward your net
Risk: Even when it works it usually puts your teammate under immediate pressure facing the boards
Action: Move the puck north, or move it behind the net
Action: If the only outlet is on the far side, go D-to-D behind the goal line and then north — two low-risk passes beat one high-risk one
Convention: Nothing in the rulebook touches this — some teams accept it above the tops of the circles, almost nobody below them
```

**Why not.** An **east–west** pass in your own end crosses every forechecking stick on the ice, travels perpendicular to the direction you want to go, and if it is picked off it is picked off by someone whose momentum already carries them toward your net. It also takes the longest time in the air of any pass available to you, which means the most time for someone to read it.

There is one more cost people miss: even when it *works*, a cross-ice pass in your own end usually puts your teammate under immediate pressure facing the boards, because the forecheck slid across with the puck. You took a big risk to create a worse situation.

**What to do instead.** Move the puck north or move it behind the net. If the only outlet is genuinely on the far side, go D-to-D behind the goal line first and *then* north — two low-risk passes beat one high-risk one.

*Coaching convention.* Nothing in the rulebook touches this. Some teams will accept a cross-ice pass above the tops of the circles, where an interception is not a slot chance; almost nobody accepts one below them.

### 4. Never both defencemen to the puck

```facts
Never: Send both defencemen to the same puck — you commit 100% of your defensive-zone depth to a 50/50 battle
Risk: Lose it and there is literally no one between the puck and your goalie
Action: One goes and takes the body or the puck; the partner covers the space it will squirt into, staying between puck and net
Action: Talk about it out loud
Convention: A coaching convention with real exceptions — aggressive systems send both defencemen below the goal line on a specific read
Key: Somebody must be home; what varies is who — find out what your team plays
```

**Why not.** If both of you attack the same puck, you have committed 100% of your defensive-zone depth to a 50/50 battle. Win it and you gain nothing you would not have gained with one of you. Lose it and there is no one — literally no one — between the puck and your goalie except forwards who are facing the wrong way.

**What to do instead.** One goes, one supports. The one who goes takes the body or the puck; the partner reads the likely outcome and covers the space it will squirt into, staying between the puck and the net. Talk about it out loud — see [On-Ice Communication](../foundation/on_ice_communication.md).

*Coaching convention, with real exceptions.* Aggressive defensive-zone systems will send both defencemen below the goal line on a specific read — usually when a forward has already dropped in to cover the net front. The principle survives: **somebody must be home.** What varies is who. The house default throughout is a **low zone collapse (zone) coverage**, in which the strong-side defenceman pressures and the weak-side defenceman holds the net front; find out what your team plays.

### 5. Never force a low-percentage pass at the offensive blue line with no support back

```facts
Never: Force a low-percentage pass at the offensive blue line with no support back
Risk: The cost of the failure is not the loss of possession, it is the odd-man rush — one touch turns your five-man attack into their three-man rush
Read: If this pass is intercepted right now, how many teammates are behind the puck? Fewer than two, do not make it
Options: Chip the puck past the defender into the space behind them and race, or dump it into the far corner and forecheck
Convention: Not a rule and genuinely negotiable — a team trailing late, or built to attack in waves, will accept this risk deliberately
```

**Why not.** The offensive blue line is where your attack is at its most stretched — your forwards are ahead of the puck, your defencemen have often stepped up to hold the zone. A turnover there converts your five-man attack into their three-man rush in one touch. **The cost of the failure is not the loss of possession; it is the odd-man rush.**

**What to do instead.** Two legal, low-cost alternatives always exist: **chip the puck past the defender into the space behind them** and race for it, or **dump it into the far corner** and forecheck. Both concede possession, but both concede it roughly 114 feet from your net, going south — the offensive blue line sits 64 feet from their goal line (**NHL Rule 1.5**), so it is about 114 feet from yours, not the full length of the ice. See [Zone Entries](../systems/zone_entries.md) for which to pick.

**The test to run:** *if this pass is intercepted right now, how many of my teammates are behind the puck?* If the answer is fewer than two, do not make it.

*Coaching convention.* Not a rule, and genuinely negotiable: a team that is trailing late, or one built to attack in waves, will accept this risk deliberately. See the game-state table below.

### 6. Never stickhandle in your own slot

```facts
Never: Stickhandle in your own slot — stickhandling buys time, and there is no time to buy and nothing worth buying it for
Risk: Head down, surrounded, in the highest-danger area — you either gain nothing or concede everything
Action: Take the puck out of the slot first — one stride to the wall, behind the net, or a hard shot of it off the glass
Key: Change the location first, then make the decision
Convention: Not a rule — about as close to unanimous as coaching advice gets, but it is still advice
```

**Why not.** Stickhandling is a play that buys time. In your own slot there is no time to buy and nothing worth buying it for. Your head is down, you are surrounded, you are in the highest-danger area on the ice, and the only outcomes are "you get out of it having gained nothing" or "you lose it having conceded everything."

**What to do instead.** Take the puck out of the slot before you do anything with it — one stride to the wall, behind the net, or a hard shot of it off the glass. **Change the location first, then make the decision.** This one sentence is most of what this document is about.

*Coaching convention.* Not a rule. It is about as close to unanimous as coaching advice gets, but it is still advice.

### 7. Never leave your feet to make a check

```facts
Never: Leave your feet to make a check — you cannot change direction in the air
Risk: A carrier who reads it makes you miss with one movement, and you are out of the play for four or five seconds
Action: Skate, stay on your feet and keep your stick in the lane — take away the option rather than the puck
Rule: All four books write the leap into the charging offence by name — NHL 42.1, IIHF 42.1, USA Hockey 607, Hockey Canada 7.4
Rule: Hockey Canada Rule 7.4 Interpretation 1 defines the jump as the feet leaving the ice before contact — skates that come off after contact, during an otherwise legal check, are not charging
Rule: IIHF Rule 48.1(IV) makes jumping to deliver a blow to the head or neck a separate offence — 48.2 sets the floor at a minor for any illegal check to the head or neck, and 48.3 is the ceiling, where the referee may assess a major and an automatic game misconduct for reckless endangerment
Technique: Blocking a shot is a separate question, and the coached default is a standing block — close with your feet, not by lunging
Key: The penalty risk is real and primary, and the positional cost sits on top of it — down is out of the play
```

**Why not.** You cannot change direction in the air. A puck carrier who reads it makes you miss with one movement, and you are now on the ice behind the play, out of it entirely, for four or five seconds. The upside is small — best case you break up one play — and the downside is that you have removed yourself from the defensive structure at the precise moment it needed five players.

**What to do instead.** Skate. Stay on your feet, keep your stick in the lane, take away the option rather than the puck. A defender on their feet with a good stick beats a defender sliding with a great one.

*Part coaching convention, part rule — and the two halves are worth separating.*

- **⚠️ Leaving your feet to check someone *is* itself named as an offence, whatever you may have been told.** **NHL Rule 42.1 (Charging)** opens: *"A minor or major penalty shall be imposed on a player who **skates, jumps into** or charges an opponent in any manner."* Jumping is listed as its own penalisable action, alongside charging, before the rule goes on to define a charge by "distance traveled". **USA Hockey Rule 607** is explicit in the same direction: charging *"includes skating or **leaving one's feet (jumping)** into the opponent to deliver a check."* **IIHF Rule 42.1** — the book British hockey plays under — is almost word-for-word with the NHL, *"A penalty shall be imposed on a Player who skates, **jumps into an opponent**, or charges an opponent in any manner"*, and then makes the jump the *first* branch of its definition: charging means a player who *"either **jumps to check an opponent**, builds up speed by taking multiple strides"*. **Hockey Canada Rule 7.4** opens the offence with it outright — *"Charging is when a player: i. **Jumps to check an opponent.**"* Hockey Canada then does what the other three books do not: it defines the leap, and the definition carries an exception. **Interpretation 1** to Rule 7.4 reads that *"a 'jumping' action will be defined as when a player's feet leave the ice **prior to** making body contact with their opponent"*, and that if a player's feet come off the ice *"**after** contact is made with their opponent, during an otherwise legal check, this will **NOT** be considered a Charging penalty because the player's skates were on the ice at the time of body contact."* **The offence is the takeoff, not the follow-through** — so the thing to get right is being on your skates at the moment you make contact, not staying pinned to the ice through the finish. That is Hockey Canada's own interpretation, and the other three books do not spell it out, so do not carry it into a game played under them as settled. Either way, the disciplinary risk of leaving your feet is not secondary — all four books write it into the rule by name. **Rule 44.1 (Clipping)** is about "throwing the body across or below the knees of an opponent"; it notes that an illegal low hit may be delivered by a player who "may or may not have both skates on the ice", which means that for *clipping* specifically, feet-off-the-ice is neither necessary nor sufficient. But that is a point about clipping, not a general licence: all four books name the leap in the charging offence — NHL 42.1, IIHF 42.1, USA Hockey 607 and Hockey Canada 7.4. Treat the penalty risk of leaving your feet as **real and primary**, on top of the positional cost below.
- **Blocking a shot or a pass is a separate question, and it is coached technique — but the coached default is a *standing* block, not a slide.** [Body Contact and Battles → Shot Blocking](../technique/body_contact_and_battles.md) owns the method: get close, present your padded surfaces square to the puck, keep your feet on the ice, keep your head out of the lane, keep your hands tucked behind you, never turn your back or sideways, don't lead with your stick — and **"close with your feet, not by lunging. A lunge is a slide, and a slide that misses is a defender out of the play with no way to recover."** A dropped or sliding block is a specific choice for a specific moment, not the technique to learn first, and it is explicitly wrong when you are screening your own goalie. **On a 2-on-1 it depends which system your team plays:** where your job is to hold the passing lane, sliding early abandons it — but some teams coach a timed slide across the lane as the method itself, and there the slide is the plan. Either way it is a slide at the *pass*, never a sprawl at the *shot*. See [Defending the Rush](../systems/defending_the_rush.md).
- **And even with no penalty in prospect, the positional cost alone is reason enough.** Down is out of the play. That reason to stay up applies on every leap, including the ones no referee punishes — it sits on top of the penalty risk above, not instead of it.
- **⚠️ Leave your feet near an opponent's head and it stops being a charging question.** **IIHF Rule 48.1(IV)** makes it a separate offence in its own right — *"A Player who **jumps (leaves their skates)** to deliver a blow to the head or neck of an opponent"*. **The floor is a minor.** Under **Rule 48.2**, *"The Referee shall, at their discretion, assess a minor penalty to any Player who delivers an 'illegal check to the head or neck' of an opponent"* — that is the baseline for any illegal check to the head or neck. **Rule 48.3** is the ceiling above it: the referee may assess *"a major penalty and an automatic game misconduct penalty"* where the player *"recklessly endangers their opponent"*. That top end is a discretionary call on severity, not an automatic ejection for every jump — but a jump at the head the referee does not judge reckless is not therefore free. It is a minor at the baseline, and the major sits above it.

### 8. Never change with the puck in your defensive zone, or when the play is coming at you

```facts
Never: Change with the puck in your defensive zone, or when the play is coming at you
Risk: A line change is the most vulnerable four seconds your team has — the main risk is the opponent attacking four-on-five
Action: Change when the puck is deep in their end, when your team has clear possession in the neutral zone, or at a stoppage
Mindset: If you are tired and stuck in your own zone, you are not tired enough to change — get the puck out first
Rule: A departing player must be within five feet of the bench and out of the play before the substitute steps on, or it is a bench minor for too many men (NHL Rule 74.1)
Convention: No rule forbids changing at a bad moment — 74.1 governs only how the exchange is made
```

**Why not.** A **line change** is the most vulnerable four seconds your team has: for part of it you have players who are effectively not in the play. Under NHL **Rule 74.1**, a departing player must be within five feet of the bench and out of the play before the substitute steps on, and a bench minor for **too many men** follows if the two overlap in any meaningful way. But the penalty is not the main risk — the main risk is that the opponent attacks four-on-five into a zone where you have no margin.

**What to do instead.** Change when the puck is deep in *their* end, when your team has clear possession in the neutral zone, or at a stoppage. If you are tired and stuck in your own zone, **you are not tired enough to change.** Get the puck out first, then change on the fly as the play moves north. See [Game Management](../systems/game_management.md).

*Coaching convention, with a rule attached to one failure mode.* No rule forbids changing at a bad moment; Rule 74.1 only governs *how* the exchange is made. The convention is about the four seconds of vulnerability, not the penalty.

### 9. Never shoot the puck over the glass from your own zone — it is a delay-of-game minor

```facts
Rule: Shooting or batting the puck directly out of the playing surface from your defending zone is a minor, except where there is no glass (NHL Rule 63.2(iii))
Rule: "Directly (non-deflected)" is the operative wording — a puck deflected off a stick, a glove or a body on its way out is not a penalty (NHL Rule 63.2(iii))
Rule: What counts is where the puck was when you hit it, not where it crossed the glass (NHL Rule 63.2(iii))
Rule: Over the glass behind the players' bench is penalised; into the bench itself is not (NHL Rule 63.2(iii))
Rule: Directly off a faceoff, no penalty is assessed (NHL Rule 63.2(iii))
Rule: USA Hockey has no equivalent — Rule 610(c) penalises only a deliberate shoot-out, and 631(d) makes an accidental one a last-play faceoff
Rule: Even where no penalty applies, the faceoff goes to the nearest spot in the zone the puck was shot from (NHL Rule 85.1)
Action: Off the glass and out — hard, low and along the boards so it stays in; if you are panicking, aim lower than feels right
Action: Check your league — many recreational and youth associations do not enforce puck-over-glass at all
```

**This is an actual rule, not a convention.** NHL **Rule 63.2(iii)** imposes a minor penalty on any player who "shoots or bats (using his hand or his stick) the puck directly (non-deflected) out of the playing surface from his defending zone, except where there is no glass." Four details that matter on the ice:

- **"Directly (non-deflected)" is doing real work.** The rule reaches the puck you sent out, not the puck that got there. If it clips an opponent's stick, a glove, a shoulder or a teammate on the way and then goes out, no penalty — which is why a great many pucks that leave the rink are waved off, and why arguing about it from the bench is usually arguing about whether it touched something.
- **The determining factor is where the puck was when you hit it,** not where it crossed the glass. Touch it inside your blue line and it goes out, and you are going to the box.
- **Over the glass behind the players' bench is penalised.** Into the bench itself is not.
- **Directly off a faceoff, no penalty is assessed.**

**USA Hockey has no equivalent minor.** Rule 610(c) reaches only the player who "delays the game by **deliberately** shooting or batting the puck outside the playing area", and Rule 631(d) makes the accidental one a stoppage rather than a penalty: "if the puck is accidentally shot or deflected out of play … a last play face-off will occur in the zone where the puck was shot or the deflection occurred." Under that book the panicked clear over the glass costs you a defensive-zone draw, not two minutes.

**Rec-league note:** in a rink with no glass along a stretch of boards, the rule does not apply there — and many recreational and youth associations do not enforce puck-over-glass at all. Check your league. Even where there is no penalty, NHL **Rule 85.1** puts the faceoff at the nearest spot *in the zone the puck was shot from*, so you have bought yourself a defensive-zone draw for nothing.

**What to do instead.** Off the glass and out — hard, low, and along the boards so it stays in. The difference between a clear and a penalty is often a few degrees of stick blade. If you are panicking, aim lower than feels right.

---

## The "almost always right" list

```facts
Action: Off the glass and out when you are in trouble — it moves you from catastrophic to high, not to safe, so get organised once it lands
Action: Shoot on net with traffic — the worst realistic outcome is an offensive-zone faceoff or a puck retrieved in the corner
Action: Take the simple play under pressure — the give-and-go you can make with three seconds becomes a giveaway with one
Action: Put the puck deep when your line is tired — tired players make late decisions, and late decisions in your own end are how goals happen
Rule: Shoot it in from your own side of the centre red line and, if their goalie freezes it, the faceoff is in their zone and they may not change lines (NHL Rule 63.8)
Action: Take the safe option in the last minute of a period — give them nothing to walk off with
Priority: When you have time, make the possession play; when you do not, get it out — the differentiator is possession, not method
```

Every one of these is a low-variance play: modest upside, very small downside. **You will never be the story of the game for making them, and that is the point.**

- **Off the glass and out when you are in trouble.** You concede possession, and you concede it in the neutral zone — roughly 65 to 110 feet from your net, since your own blue line is only 64 feet from your goal line (**NHL Rule 1.5**), not at the far end of the rink. In the risk map above the neutral zone is graded **High**, so this is not a move from catastrophic to low; it is a move from **catastrophic to high**, bought with distance and with the two or three seconds your five players need to get set. That is still overwhelmingly worth making — but the puck is landing in the zone where odd-man rushes are manufactured, so get off the ice or get organised rather than assuming the danger has passed.
- **Shot on net with traffic.** A shot that reaches the net with a body in front produces rebounds, deflections and scrambles, and the worst realistic outcome is a faceoff in the offensive zone or a puck retrieved in the corner. A pass attempted instead of that shot can be intercepted and go the other way. See [Shooting](../technique/shooting.md).
- **The simple play under pressure.** When you are being closed down, the difficulty of every option rises but the difficulty of the *simple* option rises least. The give-and-go you can make with three seconds becomes a giveaway with one.
- **Puck deep when your line is tired.** Tired players make late decisions, and late decisions in your own end are how goals happen. There is a rule-based bonus here too: under NHL **Rule 63.8**, if you shoot the puck into their end **from your own side of the centre red line** and their goalie freezes it, the faceoff is in *their* zone and **the defending team may not change lines**. You have trapped their unit out there while you get fresh legs.
- **The safe option in the last minute of a period.** A goal conceded in the final minute costs more than a goal conceded at any other time, because the other team gets to walk off with it and you get no chance to answer. The last 60 seconds of a period is when the cross-ice pass in your own end goes from "bad idea" to "unforgivable."

**The honest counterweight.** "Safe" is a default under pressure, not a philosophy. Alex Novet's work at Hockey Graphs, using Corey Sznajder's tracking of roughly **230,000 zone exits** — Sznajder had at that point tracked **roughly half the games** of the 2016-17 and 2017-18 NHL seasons, not both seasons in full — found that **carry-outs and pass-outs led to a subsequent zone entry almost nine times out of ten, while dump-outs succeeded only about one time in five** — and that when a team *retained possession* on a dump-out, its success rate rose to the same roughly 89%. The differentiator is possession, not method. So: **when you have time, make the possession play. When you do not, get it out.** Confusing the two in either direction costs you.

---

## Decision hierarchies by zone

This is the most practical section here. Each list is a **priority order**: run down it and take the first option that is genuinely available. The point of a hierarchy is that it removes deliberation — you are not weighing five options, you are checking four boxes in order and stopping at the first "yes."

**The prerequisite.** None of this works if you start looking when the puck arrives. You need one or two shoulder checks *before* you receive it, so that by the time it is on your blade the list is already down to two options. That is what [Scanning and Anticipation](scanning_and_anticipation.md) is for. The hierarchy is the decision; the scan is the information.

### Defensive zone — you have just retrieved the puck, forecheck arriving

```facts
Priority: Quick-up → Up → Wheel → D-to-D → Reverse → Rim → Glass, taking the first option genuinely available
Key: This is a hierarchy for a retriever with no time to read, not a ranking of breakout plays
Action: Quick-up first — first look up ice, then down; the window closes before you finish checking the rest of the list
Read: Reverse beats a forechecker who has over-run you; rim beats one who is sealing you against the wall
Never: Take D-to-D through the slot — go behind the goal line
Action: Nothing there? Take the hit — skates parallel to the wall, forearm and hip, head up, never your back — protect the puck and eat the faceoff
Never: Solve it by putting the puck over the glass
```

This is the same order taught in [Defender](../positions/defender.md) — **Quick-up → Up → Wheel → D-to-D → Reverse → Rim → Glass** — with the reasoning attached. **It is a hierarchy for a retriever under pressure, not a ranking of breakout plays:** [Breakouts](../systems/breakouts.md) is the authority and is explicit that which breakout you run is chosen by reading the forecheck in front of you, not picked off a list of favourites. Use this list when there is no time to read anything.

1. **Quick-up.** *Did we just win this puck, with their forwards still below it and no shape formed?* → Move it up ice on the first touch. [Breakouts](../systems/breakouts.md) rates this the lowest-risk, highest-reward exit there is, precisely because the two or three seconds after a turnover are the least organised the opposition will ever be. It is first on the list because the window closes before you finish checking the rest of it. **First look up ice, then down.**
2. **Up.** *Is a teammate open going north on my side of the ice, with no opponent between us?* → Pass it. Highest value, lowest risk of the structured exits, and the fastest way out.
3. **Wheel.** *Do I have a clear lane to skate it out myself — around behind the net and up the far side, or straight up my own side, with nobody between me and the neutral zone?* → Go. A carry-out is the most valuable exit there is, and it beats a pass only when the lane is genuinely clear.
4. **D-to-D.** *Is my defence partner open with time?* → Take it across **behind the goal line**, never through the slot. This changes the side of the ice and forces the forecheck to reset its angle.
5. **Reverse.** *Has the forechecker over-committed and skated past me?* → Send it **back against the flow** into the space they just left, to a partner or centre arriving behind you. A **reverse** and a **rim** are opposite plays chosen by the same read: reverse beats a forechecker who has over-run you; rim beats one who is sealing you against the wall. Getting this read wrong is one of the most common defensive-zone turnovers there is.
6. **Rim.** *Can I send it hard onward around the boards to my winger's side?* A **rim** goes onward around the boards, with the flow of play. A 50/50 puck on the wall is an acceptable outcome; it is a battle, not a chance.
7. **Glass and out.** *Can I get it off the glass and out?* → Do it. No shame in this at all.
8. **Nothing?** → Take the hit, protect the puck against the boards, and eat the faceoff — and **take the hit properly**: skates parallel to the wall, contact on your forearm and hip, head up and chin off your chest, and **never with your back to the boards**. [Body Contact and Battles](../technique/body_contact_and_battles.md) owns receiving a hit safely. Or ice it — icing puts the draw in **your own** defensive zone and denies you a line change, which is bad, but a penalty and a power play is worse. **Never solve this by putting it over the glass.**

### Neutral zone — you are carrying through the middle third

```facts
Priority: Stretch pass behind their defence → winger with speed on the wall → middle lane with support → gain the line with control → chip or dump
Read: Anyone behind their defence? That is the highest upside available here, and it travels away from your own net
Action: Move it to a winger with speed going north and follow — north passes to moving targets are the safest productive play in this zone
Risk: Take the middle lane only with support — a turnover there creates an odd-man rush going the other way
Never: Turn back into the middle of the ice at your own blue line, or make an east–west pass across centre ice
Convention: That last one is coaching consensus, not a counted comparison — no public data ranks odd-man rushes by the play that created them
Options: Nothing there? Chip the puck past their defenceman into space and race, or dump to the far corner and forecheck
```

1. **Is anyone behind their defence?** → Stretch pass or area pass into that space. Highest upside available in the neutral zone, and it travels away from your own net.
2. **Is a winger with speed available on the wall going north?** → Move it and follow. North passes to moving targets are the safest productive play in this zone, which is why they rank above anything through the middle.
3. **Is the middle lane open with a teammate supporting?** → Take it, but only with support, and knowing you are choosing the highest-risk square on the risk map above. The middle of the neutral zone is graded **High** *specifically because* a turnover there creates an odd-man rush going the other way.
4. **Can I gain their blue line with control, with a teammate arriving?** → Carry wide, protect the puck on the outside, and drive the line.
5. **None of the above?** → Chip the puck past their defenceman into space and race, or dump to the far corner and forecheck.
6. **Never at any point in this list:** turn back into the middle of the ice at your own blue line, or make an east–west pass across centre ice. Both are named across coaching material as prime manufacturers of 2-on-1s against — *coaching consensus, not a counted comparison; no public data ranks odd-man rushes by the play that created them.* [Defending the Rush](../systems/defending_the_rush.md) lists neutral-zone turnovers as one of four causes and states it the same way.

### Offensive zone — you have the puck below or at the tops of the circles

```facts
Priority: Lane to the net with traffic → pass into the middle → puck to the net for a rebound → cycle → point with a screen → chip back deep
Key: Failure here is cheap and success here is worth more than anywhere else — this is where you get to be dangerous
Action: Shoot the moment there is a lane to the net with a body in front of the goalie
Read: Rank by value times availability — but when the seam into the middle is genuinely there, it outranks everything
Action: Under pressure with support below you, take it behind the net or to the corner and cycle
Key: "The point is open" means a lane to the net, not just a lane to the defenceman
Never: Force it through their blue line on the way out — losing the puck in their corner is free, losing it at their line is a rush against
```

**This is where you get to be dangerous.** The risk map says failure here is cheap; the expected-goals data says success here is worth more than anywhere else. Both point the same way.

1. **Is there a lane to the net with a body in front of the goalie?** → Shoot. Now.
2. **Is there a pass into the middle available — the slot, the backdoor, or across the middle of the ice?** → Make it. This is the 0.112 play in the table above, the single most valuable thing you can do with a puck — with that table's caveat attached: those values were manually tracked in **two European professional leagues**, so take the ranking, not the decimals, and do not quote them as NHL numbers. Passes that cross the middle of the ice from net to net force the goalie to move laterally and reset, which is what makes them so dangerous. **Why it is ranked second and not first:** value is not the only term. A lane to the net with a body in front is available far more often than a clean seam pass, and a shot that misses costs you almost nothing, whereas a middle pass that misses is the most common way an offensive-zone possession becomes a rush the other way. Rank by value *times* availability. When the seam is genuinely there, it outranks everything.
3. **Can I get the puck to the net for a rebound or deflection with traffic?** → Do it. Low-quality shots with a body in front beat high-quality passes that never happen.
4. **Am I under pressure with support below me?** → Take it behind the net or to the corner and cycle. You keep the puck, you keep them in their end, and you keep tiring them out.
5. **Is the point open with a clear lane and a screen set?** → Back to the point. But "open" means a lane to the *net*, not just a lane to the *defenceman*.
6. **Nothing at all?** → Chip it back deep and re-forecheck. **Do not force it through their blue line on the way out.** Losing the puck in their corner is free; losing it at their blue line with your defence pinched is a rush against.

---

## Risk and game state

```facts
Key: The correct risk level is not a personality trait — it moves with the scoreboard and the clock
Action: Leading by one in the third, take risk down and reach for the safe options earlier than usual; leading by three, down hard
Action: Trailing late, take risk up — pinch, activate, force the entry; not raising your risk when trailing is not being safe
Action: Shorthanded, down and clear it hard — the one exception is a genuine 2-on-1 the other way
Action: On the power play, up inside their zone and down at the blue line — a shorthanded rush against four attackers is the worst-value event there is
Rule: NHL regular-season overtime is five minutes of 3-on-3 sudden death (Rule 84.1); playoff overtime is full 20-minute periods at 5-on-5 (Rule 84.5)
Convention: In 3-on-3 the convention is to be patient, regroup rather than force an entry, and only attack with numbers
Action: Empty net and trailing, risk up to the maximum — the only bad decision is a slow one
```

The correct risk level is not a fixed personality trait. **It moves with the scoreboard and the clock.** Full treatment lives in [Game Management](../systems/game_management.md); here is how it maps onto the decisions above.

| Situation | Adjust risk | What actually changes |
|---|---|---|
| **Leading by one, third period** | **Down** | The value of a goal for is now lower than the cost of a goal against, because a goal against gives them the game back and a goal for only extends a lead you already have. Take options 4–6 in the defensive-zone hierarchy earlier than usual. |
| **Leading by three** | **Down hard** | Nothing you can do with a creative play is worth what a comeback would cost. Manage the puck, forecheck, get changes. |
| **Trailing late** | **Up** | The arithmetic inverts. A goal against when you are down two costs you almost nothing; a goal for is worth everything. Pinch, activate, force the entry, take the low-percentage pass. **A player who does not raise their risk when trailing is not being safe, they are being unhelpful.** |
| **Tied, early** | **Neutral** | Play the hierarchies straight. |
| **Shorthanded** | **Down, with one exception** | You are outnumbered, so a turnover in your own end is worse than usual. Clear it and clear it hard. The exception: a genuine 2-on-1 the other way while shorthanded is one of the highest-value plays in hockey, and a shorthanded goal is worth chasing when you actually read one — see the anticipation-vs-gambling test below. |
| **On the power play** | **Up in their zone, down at the blue line** | You can afford creativity inside the offensive zone. You cannot afford a turnover at the offensive blue line, because a shorthanded rush against four attackers is the worst-value event on a power play. |
| **Overtime (NHL regular season)** | **Situation-dependent, high stakes** | NHL regular-season overtime under **Rule 84.1** is five minutes of **3-on-3**, sudden death. With that much space, *every* turnover is an odd-man rush and there is no next shift to fix it. The convention is to be patient, regroup rather than force an entry, and only attack with numbers. **Playoff overtime (Rule 84.5) is different** — full 20-minute periods at 5-on-5, sudden death, so it is regulation hockey with the cost of a mistake set to maximum. |
| **Last minute of a period** | **Down** | See the "almost always right" list. Give them nothing to walk off with. |
| **Empty net, you are trailing** | **Up to the maximum** | There is no such thing as too risky. The only bad decision is a slow one. |
| **Empty net, you are leading** | **Down to the minimum, but shoot it** | Under **Rules 25.1 and 57.4**, if you have possession in the neutral or attacking zone with no defender between you and the empty net and you are fouled, the goal is simply *awarded* — not a penalty shot. Take the shot. |

---

## Anticipation versus gambling

Jumping a passing lane, pinching at the offensive blue line, activating as a defenceman into the rush — these are all risks, and they are all necessary. Hockey played with no risk is hockey that never scores. The question is never *should I take risks*; it is **is this one anticipation or a gamble?**

Definitions first, because these three get conflated:

- **Pinch** — stepping *down* from the **offensive** blue line to keep a puck in their zone.
- **Step up** — challenging an attacker forward, in the neutral zone or at your own blue line.
- **Activate** — a defenceman joining the attack below the top of the circles in the offensive zone.

### The distinction

```facts
Key: Anticipation is acting on information; gambling is acting on hope — they look identical from the bench when they work
Read: The carrier's hips and shoulders turned toward the receiver, two looks at the receiver, the receiver's stick already presented as a target
Read: You counted their other options and there are none, or you have seen this player make this exact pass already tonight
Mindset: You are gambling if the honest answer is "it felt like a pass was coming"
```

**Anticipation is acting on information. Gambling is acting on hope.** They look identical from the bench when they work. They are completely different decisions.

You are anticipating if you can answer *why* before you move — the carrier's hips and shoulders turned toward the receiver, they looked at the receiver twice, the receiver's stick is already presented as a target, you counted their other options and there are none, or you have seen this player make this exact pass already tonight. The full cue list is in [Scanning and Anticipation](scanning_and_anticipation.md). You are gambling if the honest answer is "it felt like a pass was coming."

### The second test: who is behind you?

```facts
Read: Before you jump a lane, pinch or activate, ask not only "am I right?" but "what happens if I am right and I still miss it?"
Key: A pinch with your centre high in the zone behind you is a good pinch even if you lose the puck — the worst case is a 2-on-2
Risk: The same pinch with your centre below the goal line is a bad pinch even if you win the puck — you were one bounce from a 2-on-1
Priority: Three questions in half a second — information or a feeling? who is behind me if I miss? what does the scoreboard allow?
Action: Two yeses and a green light from the third, go; otherwise hold your position, which is itself a decision
```

Even a well-read risk is a bad risk if nobody is covering the space you left. **Before you jump a lane, pinch or activate, the question is not only "am I right?" but "what happens if I am right and I still miss it?"**

A pinch with your centre high in the zone behind you is a good pinch even if you lose the puck, because the centre becomes the third defender and the worst case is a 2-on-2. The same pinch with your centre below the goal line is a bad pinch even if you win the puck, because you were one bad bounce from a 2-on-1 and you did not know it.

**So the full test, in three questions you can run in half a second:**

1. **Do I have information, or a feeling?**
2. **If I miss, who is behind me?**
3. **What does the scoreboard say about how much I can afford?**

Two yeses and a green light from the third: go. Otherwise, hold your position — which is itself a decision, and often the right one.

---

## The asymmetry of hockey mistakes

```facts
Key: A missed offensive chance costs you a chance; a defensive-zone turnover costs you a goal
Risk: Ten creative plays in their end with eight failures leaves you clearly ahead; ten in your own end with eight failures puts some in your net
Priority: In your own end simple is usually right — the downside is enormous and the upside of complexity is small
Priority: In their end creative is usually right — the downside is nearly zero and the upside is the most valuable event in hockey
Mindset: The players people call "smart" are not the ones who take the fewest risks, but the ones who take them in the right end of the rink
```

Here is the structural fact that makes hockey different from most team sports:

> **A missed offensive chance costs you a chance. A defensive-zone turnover costs you a goal.**

Those are not the same size. Not remotely. If you attempt ten creative plays in the offensive zone and eight fail, you have lost eight chances you never had in the first place and gained two you would not otherwise have had — you are clearly ahead. If you attempt ten creative plays in your own zone and eight fail, some of those eight are in your net.

At roughly **3.1 goals per team per game** in the 2025-26 NHL regular season (8,086 goals in 1,312 games), a single conceded goal is around a third of a team's normal scoring output. **One avoidable defensive-zone turnover can be worth more than an entire period of good offensive work.**

**This is the whole reason for the two-speed philosophy:**

- **In your own end: simple is usually right.** Not because simple is virtuous, but because the downside is enormous and the upside of complexity is small. The best possible outcome of a fancy play in your own zone is a clean breakout — which the boring play also achieves, most of the time.
- **In their end: creative is usually right.** Not because creativity is virtuous, but because the downside is nearly zero and the upside is the most valuable event in hockey.

The players people call "smart" are almost never the ones who take the fewest risks. **They are the ones who take their risks in the right end of the rink.**

---

## Penalty risk as a decision

A penalty is a decision like any other, and it has a price you can actually look up. **What follows is the arithmetic of that price** — what a minor costs, what a penalty shot is worth, and which fouls are not priced as minors at all. The game-state half of the topic — which score-and-clock situations make a penalty unforgivable, and what the published evidence actually says about why amateur players take them — belongs to [Game Management, "Discipline as Game Management"](../systems/game_management.md#discipline-as-game-management), and is not repeated here.

**In the 2025-26 NHL regular season, teams scored 1,595 power-play goals on 7,555 opportunities — a league-wide conversion rate of 21.1%** (aggregated across all 32 clubs from the NHL's public team power-play report; see Sources). Teams on the power play also conceded 205 shorthanded goals, about 2.7% of opportunities. So the honest arithmetic:

> **Taking a minor penalty hands the opposition roughly a one-in-five chance of a goal, netting out to something a little under one goal against for every five penalties you take.**

Against ~3.1 goals per team per game, that is a meaningful piece of a game, given away.

### When a penalty is genuinely worth taking

```facts
Read: Is the thing you are preventing more likely to become a goal than the one-in-five chance you are handing over?
Action: Take the penalty to deny a certain goal — a 21% chance beats a 100% chance every time
Options: Late in a game, a minor that breaks a rush which would tie or win it is a defensible trade
Options: Stopping play when you are pinned and exhausted with no change available is real, effective and universally disliked
Never: Retaliate, send a message, stand up for a teammate after the whistle, or take anything at all in the first period
```

Rarely, and less often than players think, because the test is unforgiving: **is the thing you are preventing more likely to become a goal than the one-in-five chance you are handing over?** Three cases pass it.

- **Denying a certain goal.** If the choice is a goal or a penalty, take the penalty. A 21% chance beats a 100% chance every time. This is real, and it is the honest case for hooking someone down in front of an open net.
- **Late in a game, to break a rush that would tie or win it.** A minor with 30 seconds left when you lead by one is a defensible trade: they get a fraction of a power play, not a two-minute one.
- **Stopping play when you are pinned and exhausted with no change available.** Cynical, effective, and universally disliked. It is a real tactical option and it is also a good way to lose your teammates' goodwill — see [Team Play and Culture](../off-the-ice/team_play_and_culture.md).

Note what is *not* on that list: retaliation, sending a message, standing up for a teammate after the whistle, and anything at all in the first period. For the situations where a penalty is not merely unprofitable but catastrophic — leading late, already killing one, already on the power play, either side of a 6-on-5 — see the "when it absolutely isn't" list in [Game Management](../systems/game_management.md#when-it-absolutely-isnt).

### The critical exception nobody accounts for: fouls that are not priced as minors

```facts
Rule: Fouling a puck carrier from behind in the neutral or attacking zone, with no opponent between him and the goalkeeper, is a penalty shot (NHL Rule 57.3)
Rule: Play the puck first and trip him in the process and it is a minor, not a penalty shot (NHL 57.3, IIHF 24.8, same words) — USA Hockey writes no puck-first carve-out, and 639(a)'s Note is scoped "under this rule"
Rule: That minor is a floor, not a ceiling, outside the NHL — IIHF 57.3/57.4 reach a major and a major plus a game misconduct, USA Hockey 639(b) makes that pair mandatory for reckless endangerment and 639(c) a match penalty, Hockey Canada 8.6(b) mandatory on injury
Rule: With your own goalkeeper pulled, ANY foul denying the chance is an awarded goal — neither awarded-goal clause carries the "from behind" requirement (NHL Rules 25.1 and 57.4, cited as a pair)
Rule: A skater — "a defending player, except a goalkeeper" — covering the puck in your own crease is a penalty shot (NHL Rule 67.4), or an awarded goal with your net empty (67.5)
Key: A penalty shot beats a power play but by less than the phrase suggests — 28.8% over eleven NHL seasons, computed for this document
Action: Prevent the breakaway four seconds earlier with your positioning — chasing from behind saves nothing, and saves nothing at all with your net empty
```

Some fouls do not cost you 21.1%, because they do not produce a power play at all. Two families matter, and each has a worse version when your own goalie is out of the net.

**1. Fouling a breakaway from behind costs you a penalty shot.** Under NHL **Rule 57.3** — the tripping rule, which the hooking, holding, slashing and interference rules all cross-reference for this purpose — a penalty shot is awarded when all four of these are true:

1. The infraction took place in the neutral or attacking zone — that is, over the puck carrier's own blue line.
2. The infraction was committed **from behind**.
3. The player was in possession and control (or, in the referee's judgement, clearly would have obtained it) and was denied a reasonable chance to score. Getting a shot away does not automatically rule it out — the rule says a penalty shot still applies if the foul denied a *"more" reasonable* scoring opportunity.
4. There was **no opposing player between them and the goalkeeper**.

Two riders in the same rule are worth knowing. If you play the **puck first** and trip the opponent in the process, it is a minor for tripping and not a penalty shot — **NHL 57.3 and IIHF 24.8 say it in the same words**, and **USA Hockey's is a different test rather than a wider one**: 639(a)'s Note assesses *"no penalty shall be assessed **under this rule** if, in the opinion of the Referee, the player was clearly hook-checking or poke-checking the puck for the purpose of gaining possession."* It turns on the action, not on reaching the puck first, and being scoped to Rule 639 it does nothing for you under Rule 616 — which is the rule that awards the penalty shot, and which carries no puck-first carve-out. ⚠️ **But do not price a reckless trip at a minor anywhere outside the NHL's Rule 57:** IIHF 57.3 and 57.4 reach a major and a major plus a game misconduct, **USA Hockey 639(b) makes that pair mandatory** where you recklessly endanger the player, 639(c) reaches a match penalty, and Hockey Canada 8.6(b) is mandatory where it injures. And if the attacker has already beaten the goalie and is fouled with the open net in front of him, it is *still* only a penalty shot, because — in the rulebook's words — *"no goal can be awarded since the goalkeeper is still on the ice."*

**2. With your own goalie pulled, that same foul is an awarded goal.** The referee stops play and simply gives them the goal. There is no shot to save and nothing to be gained.

**Which rule number governs that? Two, and they are not alternatives — cite them as a pair.** Rule **25.1** is the general awarded-goal rule: a goal is awarded when the defending team has taken its goalkeeper off the ice, an attacking player has (or clearly would have obtained) possession and control in the neutral or attacking zone *"without a defending player between himself and the opposing goal"*, and an infraction by the defending team prevents him from scoring. Rule **57.4** is the operative clause for the tripping family specifically: *"If, when the opposing goalkeeper has been removed from the ice, a player in control of the puck (or who could have obtained possession and control of the puck) in the neutral or attacking zone is tripped or otherwise fouled with no opposition between him and the opposing goal, thus preventing a reasonable scoring opportunity, the Referee shall immediately stop play and award a goal to the attacking team."* Rule 25.3 routes you from the general rule to the rulebook's **Table 10**, which lists the seven infractions that produce an awarded goal with the net empty: delaying the game (Rule 63), handling the puck (67), illegal substitution (68), interference (56), leaving the bench (70), throwing a stick (53), and tripping — *"fouling from behind – including hooking, holding, slashing, etc."* (57). The rulebook's own index settles the question by printing both numbers together: *"Control of the puck — awarded goals … 25.1, 57.4."*

**One difference is worth flagging, because it cuts against what most players assume.** The "from behind" requirement is part of the **penalty-shot** test in 57.3. It does **not** appear in the text of either awarded-goal clause: 25.1 and 57.4 ask only that the attacker was fouled with nobody between him and the empty net. Table 10's row label does still read "fouling from behind", so treat this as a wording gap rather than a settled on-ice practice — but on the rule text as written, the empty-net awarded goal is easier to trigger than the penalty shot, not harder.

**3. Covering the puck in your own crease costs you a penalty shot — or, again, a goal.** If a skater other than the goalkeeper *"falls on the puck, holds the puck, picks up the puck, or gathers the puck into his body or hands from the ice in the goal crease area"*, play stops immediately and the other team gets a penalty shot (**Rule 67.4**). Against a puck that was going in anyway, that is a trade worth making. But if your goalie has already been replaced by an extra attacker, **Rule 67.5** awards the goal outright — you have prevented nothing at all.

**What a penalty shot is actually worth.** It is a better scoring opportunity than a two-minute power play — a clean, unopposed attempt from centre ice against a goalie who must stay in the crease until the puck is touched. **Across the eleven NHL regular seasons from 2015-16 to 2025-26, penalty shots converted at 28.8% — 137 goals on 476 attempts** (computed from the NHL's skater penalty-shot report; see Sources). Set that against the 21.1% power-play rate above and the gap is real, but narrower than the phrase "penalty shot" makes it sound. The two most recent seasons both sit below that eleven-season average, and each was close to or beneath its own season's power-play rate: **21.9% in 2024-25 against a 21.6% league power-play rate — roughly level; 17.1% in 2025-26 against 21.1% — clearly below.** Do not read that as a trend. Penalty shots are rare enough — between 27 and 59 a season league-wide over that span — that any single season bounces around wildly, so the eleven-season number is the one to use.

**So the practical rule:** if you are chasing from behind and the only way to stop them is a foul, you are probably not saving anything, and if your net is empty you are saving nothing at all. **The time to prevent the breakaway is four seconds earlier, with your positioning.** See [Defending the Rush](../systems/defending_the_rush.md).

### The far more common case

```facts
Key: Most penalties in amateur hockey are not tactical trades — nobody decided to take them, which is exactly why they are addressable
Risk: Stick fouls that are really skating fouls — a hook because you stopped skating twenty feet ago, a trip because your feet quit
Risk: Retaliation — a slash after losing a battle, a cross-check after the whistle, an answer to something the referee missed
Action: Fix the stick penalty in conditioning and the retaliation penalty in the mental game
Key: Use frustration as a lens for fixing your own game, not as a fact about the population — no published study codes penalty motive
```

Most penalties in amateur hockey are not tactical trades at all. Nobody decided to take them, which is exactly why they are addressable. Two habits produce the bulk of them:

- **Stick fouls that are really skating fouls** — a hook because you stopped skating twenty feet ago, a trip because your feet quit and your stick took over.
- **Retaliation** — a slash after losing a battle, a cross-check after the whistle, an answer to something the referee already missed.

**The stick penalty is almost always a skating problem, and the retaliation penalty is almost always a composure problem.** One is fixed in conditioning, the other in the [Mental Game](../off-the-ice/mental_game.md).

**⚠️ Be careful how strongly you state the second one.** The familiar claim that *most* amateur penalties are frustration penalties is **half measured and half folklore**, and the full working is in [Game Management, "Frustration penalties"](../systems/game_management.md#frustration-penalties). The short version, which you should not restate without the qualification attached: that amateur penalties are mostly **aggression-type infractions** is measured — Gilbert and Trudel coded 850 penalties across 55 Bantam games and found 62.4% were minor aggression penalties. That most are **frustration-driven** is coaching experience with no measurement behind it, because no published study codes penalty *motive*, and two findings (McFaul et al. 2026 on head-contact events; Kirker et al. 2000 on observed aggression) point the other way. Use frustration as a lens for fixing your own game, not as a fact about the population — and read the review before you repeat the claim.

---

## Playing to the score — and to your level

```facts
Key: The right risk profile in a Tuesday-night beer league is not the right risk profile in a competitive one
Risk: Support is less reliable — in a team that does not practise, the give-and-go you can see is one your teammate cannot
Risk: Recovery is worse — a rec-league turnover frequently meets nobody at all, so the cost side of every calculation is higher, not lower
Risk: Goaltending is more variable both ways — get pucks to the net, and treat your own turnovers as costing more
Action: Tighten nothing in your game except your own end and you will win more games — try things in the offensive zone instead
Key: Risk level is a dial, not a switch — a big lead, a tired bench or a backup in net all shift you toward the simple play
```

An honest section, because most hockey advice pretends everyone plays in the same league.

**The right risk profile in a Tuesday-night beer league is not the right risk profile in a competitive one.** The reasons are not about talent, they are about the structure of the game:

- **Support is less reliable.** The high-value plays in the table at the top of this document — the controlled entry, the high-danger pass; manually tracked in two European professional leagues, so a direction rather than an NHL measurement — depend on someone being where you expect them. In a team that practises twice a week, they are. In a team that does not practise, the give-and-go you can see is one your teammate cannot.
- **Recovery is worse.** In a good league a turnover meets a backcheck. In a rec league a turnover frequently meets nobody at all, which means the cost side of every one of your calculations is *higher*, not lower.
- **Goaltending is more variable.** Which cuts both ways: shots from distance go in more often, so getting pucks to the net is worth relatively more; but so do the chances you concede, so turnovers cost relatively more too. Both effects push toward the same conclusion.

**The blunt version:** most amateur teams lose far more goals to unforced turnovers than they gain from creative plays. If you tightened nothing in your game except *your own end*, you would win more hockey games. The creativity is not the problem, and nobody is asking you to stop trying things. **They are asking you to try them in the offensive zone.**

The same logic applies within a game and within a season. A team with a big lead, a tired bench, or a backup goalie in net should shift its whole distribution toward the simple play. A team that is being outplayed and needs to change the game should shift the other way. **Risk level is a dial, not a switch, and knowing where to set it is a skill in itself.**

---

## Recovering from a bad decision

You will make bad decisions. Everyone does, at every level. **What separates good players is almost entirely what happens in the next four seconds.**

### The immediate response

```facts
Action: Turn and skate to the middle of the ice between the puck and your net — become the extra defender
Action: Get to the inside and take away the middle; deny the pass to the slot and a scoring chance becomes a shot from the outside
Action: Talk — one word, "turnover", "back", "I'm high", reorganises four teammates who are still reading the play
Never: Foul the puck carrier from behind — backchecking hard is the right play, but a trip, hook, hold or slash there is a penalty shot, and a check there is a major with a game misconduct
Options: Some teams coach the opposite by design — the first forward back pressures the carrier while the defence holds inside — so find out which yours plays rather than improvising it
Never: Change while the play is live because you are embarrassed — finish the shift
```

1. **Turn and skate.** Under the lane-and-man systems this guide teaches, not toward the puck — toward the middle of the ice between the puck and your net. The most useful thing you can do after a turnover is become the extra defender, and chasing the carrier from behind achieves nothing (and, as above, invites a penalty shot). **Some teams do coach the opposite by design** — the first forward back pressures the carrier while the defence holds inside; [Defending the Rush](../systems/defending_the_rush.md) sets out both, and the mistake is improvising it rather than the pressure itself.
2. **Get to the inside.** Your job now is to take away the middle, not to win the puck back. Deny the pass to the slot and you have turned a scoring chance into a shot from the outside.
3. **Talk.** One word — "turnover", "back", "I'm high" — reorganises four teammates who are still reading the play. Silence is the second mistake.
4. **Finish the shift.** Do not change while the play is live because you are embarrassed. That is how a giveaway becomes a giveaway plus a 4-on-5.

### Do not compound it

```facts
Key: The most damaging thing about a bad decision is the decision that tries to fix it
Never: Force a low-percentage play to make up for a giveaway — a pinch you have not read, a cross-ice pass, a hit you leave your feet for
Risk: The second mistake is nearly always worse, because the first was an error of execution and the second an error of judgement made on purpose
Mindset: The next play is a new play — its expected value has nothing to do with what just happened
Key: If the boring option was right before your turnover, it is still right after it
```

**The most damaging thing about a bad decision is the decision that tries to fix it.** The pattern is universal and it looks like this: you give the puck away, you feel it, and thirty seconds later you force a low-percentage play to make up for it — a pinch you have not read, a cross-ice pass, a hit you leave your feet for.

The second mistake is nearly always worse than the first, because the first was an error of execution and the second is an error of judgement made on purpose.

**The discipline is: the next play is a new play.** Its expected value has nothing to do with what just happened. If the boring option was right before your turnover, it is still right after it. Working on that separation is squarely the subject of the [Mental Game](../off-the-ice/mental_game.md).

### After the game

```facts
Action: Watch the video if you have it
Read: Ask "what did I see, and what was actually there?" — the gap between those two answers is your development plan
Key: Bad decisions are the most coachable thing in hockey, because unlike a shot or a stride they can be fixed in a conversation
```

Bad decisions are the most coachable thing in hockey, because unlike a shot or a stride they can be fixed in a conversation. Watch the video if you have it. Ask "what did I see, and what was actually there?" The gap between those two answers is your development plan. See [Practice and Development](../off-the-ice/practice_and_development.md).

---

## Common Mistakes

- **Treating risk as a personality rather than a location.** Players describe themselves as "a safe player" or "a creative player". Both are wrong. The same player should be extremely safe in their own slot and extremely dangerous in the opponent's, in the same shift.
- **Only counting the risks that failed visibly.** The cross-ice pass in your own end that got through is not evidence the play was good; it is evidence you got away with it. Judge decisions by the odds you faced, not the outcome you got.
- **Making the decision after receiving the puck.** By then your options have halved. The scan comes first; the hierarchy is just what you do with what the scan told you.
- **Stickhandling out of trouble instead of relocating out of it.** One stride to the wall changes the risk of every option on your list. Do that before you decide, not instead of deciding.
- **Chasing the puck carrier from behind after a turnover, where your team's system did not ask for it.** You will not catch them, and if you foul them from behind you have converted your turnover into a penalty shot under Rule 57.3. Where pressuring the carrier *is* the system, that penalty-shot exposure is exactly why it is your feet and your stick and never a hit from behind. ⚠️ **And do not price the foul at a minor unless you are under the NHL's Rule 57** — IIHF 57.3/57.4 and USA Hockey 639(b) reach a major plus a game misconduct for a reckless trip, USA Hockey's mandatorily — and Hockey Canada 8.6(b) reaches that same tier whenever the trip *injures*, reckless or not.
- **Both defencemen going to the same puck.** Almost always caused by nobody saying anything. It is a communication failure that presents as a positional one.
- **Panicking the puck over the glass.** The most avoidable minor penalty in hockey. Aim lower, use the boards, or eat the hit — skates parallel to the wall, forearm and hip, and never your back to the boards.
- **Changing lines because you are tired rather than because the situation allows it.** Tiredness is not a green light. The play dictates the change, not your lungs.
- **Not raising your risk level when trailing late.** Playing "responsibly" while losing 3-1 with four minutes left is not responsible. It is a slow-motion concession.
- **Compounding.** One bad decision followed by a worse one to fix it. This costs more goals than the original mistakes ever did.

## Check yourself

*Answer each question before you go on — a real attempt, not a guess — then go
and check, because the checking is the part that does the work. Producing an
answer and getting it wrong is worth more than recognising a right one, but only
when the right answer follows: the section named with each question, and the Key
Takeaways after them, are where you get it. Where the answer lives in another
document, that is named too.*

1. The "never" list has nine items. How many of them are named in a rulebook?
   Name them, say what the other seven are instead, and name the one word in the
   puck-over-the-glass rule that decides whether the puck leaving the rink
   actually costs you two minutes. *(§The "never" list — and why each one exists,
   §7. Never leave your feet to make a check, and §9. Never shoot the puck over
   the glass from your own zone)*

2. You have retrieved the puck in your own corner and worked down the hierarchy
   with nothing available. What is the last option, what does the document insist
   about *how* you do it, and what must you never do to solve it? *(§Decision
   hierarchies by zone — Defensive zone)*

3. You get it off the glass and out under pressure. Where does it land on the
   risk map, what did you actually move from and to, and what does that mean you
   should do next? *(§The "almost always right" list, §The risk map)*

4. Two turnovers in the same place: one while the puck was travelling toward your
   own net, one while it was travelling away from it. Why is the first so much
   worse? *(§Why north turnovers are so much worse than south turnovers)*

5. You are a defenceman about to pinch at the offensive blue line. What are the
   three questions you run in half a second, and how many of them have to come
   back yes? *(§Anticipation versus gambling)*

6. You chase a breakaway from behind and hook the attacker down. What have you
   handed them — and how does the answer change if your own goalie has been
   pulled? *(§The critical exception nobody accounts for)*

7. You are losing 3-1 with four minutes left and you are "playing responsibly".
   What should happen to your risk level, and what does the document call a
   player who does not do it? *(§Risk and game state)*

8. You have just given the puck away in the neutral zone. Name the four things
   you do in the next four seconds — and name the thing that costs more goals
   than the original mistake ever did. *(§Recovering from a bad decision)*

---

## Key Takeaways

1. **Every play is a bet** — the chance it works times what you gain, against the chance it fails times what you lose. Make the calculation conscious.
2. **Risk is a property of location, not of the play.** The same pass is brilliant in their corner and catastrophic in your own slot, so change your location before you decide — one stride out improves every option.
3. **Rank the ice by cost — coaching consensus, not measurement:** your own slot catastrophic, your own zone high, the middle of the neutral zone high (it manufactures odd-man rushes), the offensive blue line moderate, their corners nearly free.
4. **North turnovers are far worse than south turnovers.** Losing the puck while it travels toward your own net makes the turnover and the counterattack one event.
5. **Understand the "never" list, do not memorise it:** no D-to-D through your own slot, no blind backhand up the middle, no cross-ice pass in your own end, never both defencemen to one puck, never force it at their blue line with nobody back, never stickhandle in your own slot, never leave your feet to hit, never change with the puck in your own zone, never put it over the glass from your own end. **Two of the nine are named in a rulebook** — puck over the glass, a minor under NHL Rule 63.2 and only when the puck goes out *directly*, since a deflected one is not penalised; and leaving your feet to hit, which all four rulebooks write into the charging offence by name (NHL 42.1, IIHF 42.1, USA Hockey 607, Hockey Canada 7.4) — and Hockey Canada's interpretation of its own rule puts the offence at the takeoff, not the follow-through, since skates coming off *after* contact in an otherwise legal check is not charging under that book. The other seven are coaching conventions.
6. **With time, make the possession play; without it, get the puck out.** Tracked NHL data has carry-outs and pass-outs leading to a subsequent entry nearly nine times in ten, dump-outs about one in five — but the differentiator is *possession*, not method.
7. **Anticipation is acting on information; gambling is hope.** Before you jump a lane, pinch or activate, answer: do I have a read, who is behind me, what does the scoreboard allow?
8. **Hockey's mistakes are asymmetric:** a missed chance costs you a chance; a defensive-zone turnover costs you a goal. So play simple in your end and creative in theirs.
9. **A minor penalty is roughly a one-in-five chance of a goal against** — 21.1% league-wide across the 2025-26 NHL regular season. Worth it to deny a certain goal, almost never out of frustration. Fouling a breakaway from behind buys a **penalty shot** against rather than a minor under the NHL and IIHF books (NHL 57.3, IIHF 24.8) — or an **awarded goal** if your own net is empty (NHL 25.1 and 57.4). ⚠️ **USA Hockey 616(a) is written differently:** *"A penalty shot/**optional minor penalty** shall be awarded"*, and it also reaches a foul delivered *diagonally* from behind. ⚠️ **That price assumes the foul stays a minor.** Outside the NHL's Rule 57 a reckless trip is not capped there — IIHF 57.3/57.4, USA Hockey 639(b) (mandatory) and Hockey Canada 8.6(b) (mandatory on injury) all reach a major plus a game misconduct, and the arithmetic on this page does not price an ejection.
10. **Do not compound.** The next play's expected value has nothing to do with the last one. Turn, skate to the inside, talk, and finish the shift.

---

*Sources — retrieved 27 July 2026:*

*Rules: [NHL Official Rules 2025-2026 (PDF)](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) — Rule 1.5 (Lines — goal lines 11 ft from each end, blue lines 64 ft out from the goal lines), Rule 25 (Awarded Goals — 25.1 general awarded goal, 25.3 routing to Reference Table 10), Rule 42 (Charging), Rule 44 (Clipping), Rule 57 (Tripping — 57.3 penalty shot and its four criteria, 57.4 awarded goal), Rule 63 (Delaying the Game, incl. 63.2 and 63.8), Rule 67 (Handling Puck — 67.4 penalty shot for covering the puck in the crease, 67.5 awarded goal when the goalkeeper has been replaced by an extra attacker), Rule 74 (Too Many Men on the Ice), Rule 84 (Overtime), Rule 85 (Puck Out of Bounds), Reference Table 10 (Summary of Awarded Goals When Goalkeeper Has Been Removed for an Extra Attacker). Rule text quoted directly from the 2025-2026 edition · [IIHF Official Rule Book 2025/26 (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/4_sport/officiating/rule_book/25_26/2025-26_iihf_rulebook_19052025-v1.pdf) — **the base rule set for every level of hockey in Britain.** Rule 42.1 (Charging — "skates, jumps into an opponent, or charges an opponent in any manner", and "jumps to check an opponent" as the first branch of the definition), Rule 48.1(IV) (a player who "jumps (leaves their skates) to deliver a blow to the head or neck of an opponent"), Rule 48.2 (minor for an illegal check to the head or neck) and Rule 48.3 (major and automatic game misconduct for reckless endangerment) · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — Rule 607 (Charging — "leaving one's feet (jumping) into the opponent to deliver a check"), Rule 610(c) (delay of game, which reaches only a **deliberate** shoot-out of the playing area) and Rule 631(d) (an accidental one is a last-play face-off in the zone the puck was shot from, not a penalty) · [Hockey Canada Playing Rules 2026-2028 (PDF)](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) — Rule 7.4 (Charging — "Charging is when a player: i. Jumps to check an opponent") and its **Interpretation 1**, which defines the jump as the feet leaving the ice *prior to* contact and excludes skates that come off *after* contact during an otherwise legal check. Rule text quoted directly from each book.*

*Statistics: [NHL official statistics API — team power-play and summary reports, 2025-26 regular season](https://api.nhle.com/stats/rest/en/team/powerplay?cayenneExp=seasonId=20252026%20and%20gameTypeId=2) (league totals aggregated across all 32 clubs: 1,595 power-play goals on 7,555 opportunities; 205 shorthanded goals against; 8,086 goals in 1,312 games). The 2024-25 comparison figure of **21.6%** is the same report for `seasonId=20242025` (1,537 power-play goals on 7,101 opportunities), likewise aggregated across all clubs · [NHL official statistics API — skater penalty-shot report](https://api.nhle.com/stats/rest/en/skater/penaltyShots?cayenneExp=seasonId=20252026%20and%20gameTypeId=2) — the penalty-shot conversion rate was **computed** by summing every skater's attempts and goals for each regular season from 2015-16 to 2025-26 (476 attempts, 137 goals, 28.8%); it is not a published figure. Season-by-season totals cross-check against [Hockey-Reference's per-season penalty-shot pages](https://www.hockey-reference.com/leagues/NHL_2025_penalty-shots.html) — one page per season, at `hockey-reference.com/leagues/NHL_<year>_penalty-shots.html` for `<year>` 2016 through 2026; all eleven were parsed for this cross-check, not just the one linked. They give the same **137 goals** over the same span from an independently compiled game-level list. *(Their attempt count is 475 against the API's 476 — a one-row difference between the two compilations, which does not move the conversion rate materially and is noted here rather than smoothed over.)*

*Analytics: [Introducing Offensive Sequences and The Hockey Decision Tree — Thibaud Chatel, Hockey Graphs, 26 March 2020](https://hockey-graphs.com/2020/03/26/introducing-offensive-sequences-and-the-hockey-decision-tree/) · [Why Possession is the Key to Zone Exits — Alex Novet, Hockey Graphs, 30 July 2019](https://hockey-graphs.com/2019/07/30/why-possession-is-the-key-to-zone-exits/) · [MoneyPuck expected goals model documentation](https://moneypuck.com/about.htm)*

*Coaching: [Teaching Puck Management — The Hockey Notebook](https://thinklessplayfasterhockey.substack.com/p/teaching-puck-management)*

*Not measured: the relative risk ordering of areas of the ice, and the characterisation of most amateur penalties as frustration or laziness, reflect coaching consensus rather than published measurement, and are flagged as such in the text.*

# Zone Entries

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline.
>
> **Related:** [Rules Primer](rules_primer.md) · [Neutral Zone Systems](neutral_zone_systems.md) · [Defending the Rush](defending_the_rush.md) · [Offensive Zone Play](offensive_zone_play.md) · [Breakouts](breakouts.md) · [Forechecking Systems](forechecking_systems.md) · [Puck Support and Spacing](puck_support_and_spacing.md)

## Overview

A **zone entry** is the moment your team brings the puck across the opponent's blue line into the **attacking zone** (the third of the ice containing the goal you are shooting at). The line itself is only twelve inches wide — but the last twenty feet of ice in front of it is where most attacks die.

This document is about getting in and staying in. It covers what the research says the entry is worth, the offside rule in enough detail that you can attack the line harder than someone who only half-knows it, the ways to carry the puck in, the ways to put it in without possession, how to decide between them, and how the other team stops you.

---

## 1. Why entries decide games

### The finding

The reference work is Eric Tulsky, Geoffrey Detweiler, Robert Spencer and Corey Sznajder, *Using Zone Entry Data To Separate Offensive, Neutral, And Defensive Zone Performance*, presented at the 2013 MIT Sloan Sports Analytics Conference. They hand-tracked 330 NHL games from the 2011-12 season, recording every time the puck went into the attacking zone and how.

Their headline result, in their own words: *"carrying the puck across the blue line generates more than twice as many shots, scoring chances, and goals as dumping the puck in."*

The 5-on-5 numbers, per entry (each cell in their Table 1 is based on at least 3,000 entries):

| | Shots per entry | Goals per entry |
|---|---|---|
| Puck **carried** in | 0.53 – 0.62 | 0.027 – 0.039 |
| Puck **dumped** in | 0.22 – 0.28 | 0.010 – 0.018 |

**What "shots" means here.** Not shots on goal. Tulsky's group extracted from the play-by-play *"the number of shots (including those that miss the net) and goals produced in each offensive zone possession"* — so these are **unblocked shot attempts** (shots on goal plus misses, i.e. Fenwick events). Do not compare 0.53–0.62 shots per carry-in against a shots-on-goal rate.

The ranges are across the nine rows of their Table 1 — eight team data sets (Philadelphia, Minnesota, Washington and Buffalo, entries for and against) plus a "rest of league" row. The 0.62 upper bound for shots per carry-in comes from that rest-of-league row, not from any individual team's data set. Every single row showed carrying in as more than twice as productive as dumping in.

### The part everyone gets wrong

The standard objection is: *yes, but a failed carry-in is a turnover at the blue line, and a turnover at the blue line is a rush the other way.* Tulsky's group tested exactly that, tracking failed entry attempts in their Washington sample and following what happened on the **next** entry either team got. Their Table 3, in net expected shots:

| Entry type | Shots for on this entry | Net value overall |
|---|---|---|
| Successful carry | 0.55 | **+0.50** |
| **Failed** carry | 0.00 | **−0.08** |
| Carry attempt (all attempts averaged) | 0.48 | **+0.42** |
| Dump-and-chase | 0.24 | **+0.12** |
| Dump-and-change | 0.02 | **−0.10** |

Read that failed-carry row carefully. A blown carry-in cost about **eight hundredths of a shot** on net. It is not free — but it is nowhere near the disaster the folklore says, and it was *cheaper* than dumping the puck in and changing lines. In their sample only **14% of carry attempts** ended in a turnover at all.

Because the downside is small, the break-even point is low. Tulsky's group calculated that with equal teams you only need to be **34% confident** of completing the carry for attempting it to beat dumping it in. If your line is better than the one you are facing — they modelled a team expecting to shoot 9% while allowing 7% — that threshold falls to **26%**. If you are the weaker team it rises to **44%**, which is the honest, data-backed version of "just put it in deep and go to work."

Their conclusion: *"It is likely that players give up the puck far too easily at the blue line."*

### Corroboration

The finding has held up across other data sets. Note that these are figures reported second-hand by analysts summarising their own tracking, not peer-reviewed papers, and I could not reach every primary source:

- **Corey Sznajder**, tracking 2014-16, reported roughly **0.66 shots per carry-in** against **0.29 per dump-in**.
- **Thibaud Chatel**, 2022, reported **47%** of controlled entry attempts led to a shot against **18%** of dump-ins, excluding dump-and-change.
- **PWHPA data (via Sportlogiq)** — from a July 2022 article describing "this last year's PWHPA Secret Dream Gap Tour", so **probably the 2021-22 season, though the source does not say so** — showed the same shape in women's professional hockey: carry-ins **0.73** shots per entry, pass-ins **0.54**, chip-ins **0.21**, dump-ins **0.14** at even strength.

Different trackers, different leagues, different eras, same answer.

### What this actually means for you

- **Possession in is worth roughly double.** Not marginally better. Double.
- **The cost of trying and failing is smaller than it feels**, because it feels dramatic when it goes wrong and invisible when it works.
- **Dumping and changing is the worst play on the board** — it was the only entry type in the study with a worse net value than a failed carry. If you are tired, that is a reason to have changed twenty seconds ago, not a reason to fire the puck away.
- **This is a probability argument, not a licence.** One-third confidence means you should also be putting it in deep a lot of the time. The point is that the bar is much lower than most players behave as if it is.

See [Risk Management](risk_management.md) for how this thinking generalises.

---

## 2. The offside rule as a tactical tool

Most players know offside as a thing that gets whistled against them. Learn the exact wording and it becomes a thing you use.

**[Rules Primer](rules_primer.md) owns Rule 83** — the full statement, the delayed-offside procedure, the disallowed goal, the faceoff locations and the differences between the three rulebooks. This document owns one thing: the **trail-skate drag** as a technique. Four clauses are what make that technique work, so they are set out here; for anything beyond them, go to the primer.

### The four clauses the technique rests on

Quoted from **NHL Rule 83** in the *NHL Official Rules 2025-2026*:

- **"A player is off-side when both skates are completely over the leading edge of the blue line involved in the play."** Both. Not one. Conversely, *"a player is on-side when either of his skates are in contact with the blue line, or on his own side of the line, at the instant the puck completely crosses the leading edge of the blue line."*
- The **leading edge** is the near edge of the blue line as you approach it. The line is painted **twelve inches wide** (Rule 1.5), and that whole foot of paint counts as "the line" — a skate touching any of it is onside.
- **Your own side of the line is a vertical plane** rising from the leading edge. *"If a player's skate has yet to break the plane prior to the puck completely crossing the leading edge, he is deemed to be on-side for the purpose of the off-side rule."* A skate lifted in the air, held back over the neutral zone, is onside.
- For 2025-26 the NHL clarified that **"a 'skate' is to be considered the blade of the skate only."** Your boot overhanging the line is irrelevant; the blade is what is judged.

> **⚠️ The third clause is NHL and IIHF only, and USA Hockey reverses it.** Under **USA Hockey Rule 630(a)** a player is offside when they do *"not have skate contact with any part of the Neutral Zone or the blue line when the puck crosses the determining edge of the blue line"*, and the Note confirms that *"a player only needs to have skate contact with one skate with the blue line to be considered 'onside.'"* So an airborne trail skate is **onside under the NHL and IIHF and offside under USA Hockey** — and most North American rec and youth hockey runs on USA Hockey rules. This changes step 2 below. It is the single most important rule-set difference in this document.

### The trail-skate drag

This is the single most useful piece of applied rules knowledge for a forward, and it comes straight out of the wording above.

You are the far-side winger. You are flying. The puck carrier is a stride behind you and about to put the puck over the line. If you simply skate, both blades cross, the puck crosses second, and the linesman's arm goes up.

Instead:

1. Attack the line at full speed with your **inside foot leading**.
2. As you reach it, **stop pushing with the trail leg** and let that blade glide so it stays touching the paint — or, **under NHL and IIHF rules only**, lift it and hold it back over the neutral zone without breaking the plane. **Under USA Hockey the blade must stay in contact** (Rule 630(a)), so keep it on the paint.
3. Keep your **body, hands and stick already in the zone**. Only the trail blade is holding you onside.
4. The instant the puck completely crosses, **put that blade down and push**.

You have arrived at the line at top speed, you have your stick in the zone ready to receive, and you are legal. A player who does not know the rule has to slow down and check their feet. You do not.

Three details that separate people who *sort of* know this from people who use it:

- The judgement is made at **one instant** — the moment the puck fully crosses. Before that instant nothing you do matters; after it, nothing you did matters. So the skill is timing your glide to that instant, not gliding for two seconds.
- Because only the **blade** counts, you can be leaning most of your body over the line. Aggressive body position is free.
- **Which rule book you are under changes step 2.** Gliding the blade along the paint is legal everywhere. *Lifting* the trail skate is **NHL and IIHF only** — **USA Hockey Rule 630(a)** requires *"skate contact with any part of the Neutral Zone or the blue line"*, so a raised trail skate is offside. Most North American rec and youth hockey runs on USA Hockey rules; if that is you, keep the blade down.

### Delayed offside and tagging up — three consequences for the entry

A **delayed offside** is what happens when attackers precede the puck but the defending team can bring it out without interference: the linesman raises a non-whistle arm and play continues (Rule 83.3). [Rules Primer](rules_primer.md) has the full procedure — what nullifies the arm, what turns it into a whistle, and the IIHF wording on clearing. Three things change what you do at the line:

- **⚠️ First, check that you have a delayed offside at all.** Under **USA Hockey Rule 630(d)** the delayed offside and the tag-up exist only *"(For all Youth 15-Only levels and above, all Girls 16U levels and above, High School and Adult classifications **only**)"*. Below those levels there is no raised arm and no recovery — the whistle goes the moment you precede the puck in. Most North American minor hockey sits below that line, so for a lot of readers this whole subsection describes a rule they do not have, and the entry simply has to be right first time.
- **Tagging up needs actual skate contact with the line.** The vertical plane above does *not* apply here — the IIHF text says so in terms, *"'3D' judgement is not used in this situation"* (Rule 83.3(I)). So the airborne trail skate that keeps you onside on the entry does **not** clear you on a delayed offside. Touch the paint.
- **Everybody has to be out at once.** One straggler keeps the arm up. This is a communication job — see [On-Ice Communication](on_ice_communication.md). Shout it.
- **Forechecking during a delayed offside is not a grey area — it is a whistle.** Touching the puck, trying to gain possession of a loose puck, forcing the defending carrier deeper into his own zone, or being about to make contact with him all stop play. Retreat to the line, tag up, come again.

### The territorial asymmetry — why the safe play isn't

A botched **carry-in** is punished lightly: the draw goes to the neutral-zone spot outside the blue line and you barely lose anything. A botched **dump-in or stretch pass** is punished back **at the spot the shot or pass came from**, which can be your own end (Rule 83.6). And a shot that creates a delayed offside and then goes in is a **disallowed goal** whether or not you cleared the zone first (Rule 83.4). Both rules are set out in full in [Rules Primer](rules_primer.md).

The entry consequence is the one worth carrying: under pressure at the line, **failing to carry costs you less than failing to dump**. That asymmetry runs the same direction as the shot-rate evidence in section 1, and it is worth remembering the next time the safe play looks safe.

---

## 3. Carry-in entries

A **carry-in** (also called a controlled entry) is any entry where your team has the puck on a stick as it crosses. A **pass-in** — a completed pass across the line to a teammate — counts as controlled too, but it is not equivalent. In the PWHPA data cited above, pass-ins produced **0.54** shots per entry at even strength against **0.73** for carry-ins: still far better than any uncontrolled entry, but about a quarter less productive than carrying it in yourself. Pass-ins only draw level with carries **on the power play** (0.96 against 0.91).

### Attack the outside shoulder

The defender's job is to stay between you and the middle of the ice. Their weakest moment is the **pivot** — the instant they turn from skating backwards to skating forwards, or open their hips to one side.

Aim at the **outside shoulder** of the defender: the shoulder nearest the boards on your side. Do it with pace and with your eyes up. You are threatening the outside lane, which is the lane they are least worried about but most physically awkward to defend, because covering it means opening their hips toward the boards.

The moment their hips open outward, the **inside lane is available** — that is when you cut back into the middle, or slip the puck between their feet, or hit the middle driver. If they refuse to open and stay square, you have the outside lane for real: take it and get to the goal line.

The principle underneath: **you are not trying to beat them, you are trying to make them commit.** A defender who has committed to one lane cannot defend the other.

### Attack the space between two defenders, not one of them

This is the most important idea in this section.

Skate directly at a defender and you have handed them an easy job: they only have to deal with you. Skate at the **seam between two defenders** — between the two defencemen, or between a defenceman and a backchecking forward — and you have created a problem neither of them owns. Both have to decide whether to step or hold. Whichever one steps opens the space they were covering.

Practically: on a 3-on-2, the middle attacker should drive at the **space between the two defencemen**, not at either one. On a 2-on-1 wide, angle your route so the single defender is forced to choose between you and your partner rather than being able to face both.

You are looking for the moment two defenders both think the other one has it. That moment is a fraction of a second long and it is where entries are won.

### The wide entry

Take the puck down the boards outside the defenceman and get to the goal line or below it.

- **Why it works:** the defender must turn and skate, and every stride they take toward the boards is a stride away from the front of the net.
- **What you need:** a support player driving the net so that when you reach the goal line you have somewhere to put it, and a third player high for the back-door or point option.
- **When it fails:** when you go wide with nobody behind you. Then you are alone below the goal line with three defenders between you and the net, which is not an attack, it is a slow dump-in with extra steps.

### The middle drive

A **middle drive** is a teammate without the puck skating hard through the middle of the ice, through the seam between the defencemen, at the net.

The middle driver usually does not get the puck. That is not the point. The point is that a defenceman who ignores a player skating at their net will get scored on, so they cannot ignore them — which means they cannot step up on the puck carrier either. One player, running one route, at speed, buys the carrier several extra feet of space.

Middle drives only work if they are **committed**. A half-hearted middle drive is a player standing in the slot, which frees the defence rather than freezing it.

### Using a teammate as a screen

Two attackers crossing near the line can be used so that the second one runs interference — the defender tracking the carrier ends up having to go around your teammate.

**Be careful with this one.** Deliberately body-blocking a defender who is not the puck carrier is **interference**. What is legal is skating your own route to the net and letting the defender's chosen path be the one that gets tangled. What is not legal is stopping, standing, or stepping into them to make the pick. The distinction is whether you are playing hockey or setting a screen; officials at every level judge it on whether you were going somewhere. See [Body Contact and Battles](body_contact_and_battles.md).

### One thing that is not a rule

Crossing patterns, who takes the wide lane, whether the centre or a winger carries — all of this is **coaching choice**, and it varies enormously. Some teams demand strict lane discipline (left wing stays left). Some are built entirely on crossing and swinging. Some want the best puck carrier on the ice touching every entry. Ask your coach what your team wants before you decide you know.

---

## 4. Speed and timing

### The puck carrier should be the last to the line

This is the timing principle that makes entries work. If the carrier arrives first, the supports are behind the play and the defence can collapse on one player. If the supports arrive first and the carrier arrives a beat later, the defence has to respect three threats at once and the carrier arrives into a picture that has already been pulled apart.

Concretely: as the carrier, you want to reach the line **half a stride to a full stride behind** your wingers. As a winger, you want to be **at the line, at speed, onside, before the puck gets there** — which is exactly what the trail-skate drag above is for.

### Arriving with speed is not the same as arriving early

Arriving early means you get to the line and then have to wait. Waiting at the line means either standing still — useless, because a stationary player is easy to cover — or curling away and losing your route.

Arriving with speed means your acceleration peaks **as** the puck crosses. To do that you often need to be *slower* thirty feet out so you can be faster at the line. This is counter-intuitive and it is the difference between a forward who looks fast and a forward who is dangerous. See [Skating](skating.md) for how to build the change of pace, and [Time and Space](time_and_space.md) for the general principle.

A useful self-check: if you crossed the line and then had to slow down to stay with the play, you were early. If you crossed the line accelerating into open ice, you were on time.

### Timing all three forwards to hit the line together

The picture you want is **three attackers crossing the line within about a second of each other, in three different lanes** — one wide on each side, one in the middle.

How to get there:

- **The middle lane player sets the clock.** They are on the shortest route, so they must be the one who adjusts, usually by slowing or curling.
- **The wide players run their route full out** and use the trail-skate drag to hold at the line if they beat the puck there.
- **The carrier reads the picture and decides the moment.** If two supports are on time and one is not, go anyway; if none of them are, delay (see below).

On the power play, coaches often push this further and want **four across the line** — two wide lanes and two inside-dot lanes filled — so that the carrier always has an option. That is a common structure, not a universal one.

---

## 5. The delay / curl-back

Turning away from the blue line, keeping the puck, and coming back at the line once your support has caught up.

**This is the single most valuable and least used skill at amateur level.** Almost every wasted entry at rec and youth level is a player who arrived at the line alone and did *something* — forced a carry into two defenders, threw a hopeful pass, fired a dump-in with nobody chasing — rather than turning away and waiting one second.

### How to do it

1. Approaching the line alone or outnumbered, **do not stop**. Stopping kills you.
2. **Turn away from the pressure** and curl away from the line, back toward the neutral zone, protecting the puck with your body between defender and puck.

   > **⚠️ One safety override, and it outranks the play.** Curl in open ice, not against the wall. **Never take contact with your back to the boards.** Near the wall the orientation to aim for is **skates parallel to the boards**, taking it on your **forearm and hip**, head up and chin off your chest; squaring your chest to the wall is the fallback for when you cannot turn, and your back is never an option. Turning your back to an oncoming checker near the boards is the behaviour most associated with catastrophic spinal injury in hockey, and it can happen at walking speed. Protecting the puck never justifies it. Full treatment in [Body Contact and Battles](body_contact_and_battles.md), which owns this.
3. **Look back up ice** while you curl. Your eyes go to where support is coming from, not to the defender.
4. **Slow the play** deliberately for one or two seconds, which is how long it takes your late support to arrive at speed.
5. **Attack the line again** with the puck now in the hands of whoever has the best angle and the most speed — often not you.

### Why it works

You have converted a bad entry into a **fresh entry with support**. In the numbers from Section 1, you have moved yourself off the failed-carry row and back onto the successful-carry row. You also drag defenders toward you as you curl, which stretches the space behind them for the teammate arriving late.

### Why people don't do it

Because turning away from the offensive zone feels like retreating, and because a delay puts the puck on your stick for an extra second with a defender on your back, which feels dangerous. It is not. Losing the puck at the top of the circles on a forced entry is far worse than losing it in the neutral zone with everyone in front of you.

### When *not* to delay

- When you have numbers now and they will be gone in a second — take the odd-man rush.
- When you have nobody behind you at all. A delay only works if support is genuinely coming. If your line is caught out and the bench is calling, get it in deep and change.
- When a delay would drag you back over the blue line while a teammate is deep in the zone — you will create a delayed offside and freeze them.

---

## 6. Drop passes

A **drop pass** is a pass backwards, usually left behind you as you cross paths with a trailing teammate, so that the trailer picks it up moving forward at speed while the defence's attention is still on you.

### How it works

The carrier attacks the line, drawing the defenders' eyes and weight toward the puck. A teammate arrives from behind and slightly to one side. The carrier leaves the puck stationary or gently rolling into the space the trailer is skating into, then keeps going — hard — into the zone as though they still have it.

Three things make it work:

1. **The drop is to a space, not to a stick.** You leave the puck; the receiver skates onto it.
2. **The carrier's route after the drop is the whole point.** If you drop the puck and coast, the defence simply switches to the new carrier and nothing has changed. If you drive the net, you take a defender with you.
3. **There is a speed differential.** The trailer must be moving faster than the defenders can adjust. On the power play this is the classic use — the puck carrier attacks straight at the first penalty killer to freeze them, then drops underneath into space.

### When it's right

- Against a passive neutral zone that backs off and gives you the red line for free — the trailer gets a running start at a stationary wall.
- On breakouts and power-play entries where you can choreograph the timing in advance.
- When the defence has over-committed to the carrier's side.

### Why it fails so often

- **The drop goes backwards into nobody.** The trailer is not there yet, or is on the wrong side, and the puck sits in the neutral zone for a defender to collect facing your net. This is the worst turnover in hockey.
- **Both players slow down.** A drop pass at low speed is a gift.
- **The receiver has no plan.** They pick it up with no lane, no support and no speed and are now the lone attacker the drop was supposed to avoid creating.
- **It is used as a reflex, not a read.** A drop pass is a specific solution to a specific picture — a trailing teammate with speed and space behind you. Used because you didn't know what else to do, it is just a turnover facing the wrong way.

Rule of thumb: **you should see the trailer before you drop it.** If you are dropping it blind and hoping, throw it away instead.

---

## 7. Dump-ins: five types and the read that calls for each

Putting the puck in without possession is not one play. It is at least five, and choosing the wrong one is most of why dump-ins get a bad name. The unifying rule is the same in all cases: **the puck goes to a place your teammate is already going.** A dump-in without a chaser is a change of possession you chose.

### 1. The hard rim

Fire the puck low and hard around the boards, following the curve of the corner, so it travels **onward around the boards** in the direction of play.

- **The read:** pressure is on you from the inside, and you have a teammate coming down the far wall or the far corner.
- **Why:** the rim beats the defenceman who is stepping up on you, and it arrives at the far side before their partner can rotate.
- **Careful:** a rim is not a **reverse**. A reverse goes *back against the flow* of the play, behind you, and it is a different play with a different purpose. Be precise about which one you are calling for.
- **Risk:** a rim that is too soft dies behind the net; a rim that is too hard comes off the far boards straight to the weak-side defenceman.

### 2. The soft area dump

Place the puck gently into a specific area — usually a corner — so that it dies there rather than rebounding.

- **The read:** you have a forechecker arriving in roughly two seconds, and the defence has to turn and retrieve.
- **Why:** the value is entirely in the race. A soft dump gives your chaser a stationary puck and a body to hit, and gives the retrieving defenceman no help from the puck's momentum.
- **When it's wrong:** when your chaser is four seconds away. Then you have just given the puck to their defenceman with time.

### 3. The chip past a pinching defenceman

The defenceman steps up to meet you at or before the line. You lift or push the puck **past them, down the wall**, and skate around the other side to collect it yourself.

**This is a possession play, not a surrender.** You are not giving the puck up; you are using the defender's own momentum against them. They are moving toward you; the puck is going behind them; you are going around them. If your feet are moving, you get it back and you are behind their defence with speed.

- **The read:** a defender committing hard and early, and space behind them on the wall.
- **The technique:** chip it early, off the boards if you need to lift it over a stick, and change your line **before** you release so you are already accelerating around them.
- **Why it's under-used:** it requires you to give up the puck for a second while going full speed at someone, which feels wrong. It is one of the highest-value plays in the game against an aggressive gap.

Note the terminology: a **pinch** is a defenceman stepping down from the *offensive* blue line. A defenceman challenging you in the neutral zone or at their own line is **stepping up**. Both are commonly called pinches in conversation; be precise when you are describing what happened.

### 4. The cross-corner (north-south) dump

From one side of the ice, shoot the puck hard **diagonally** across into the far corner, or straight north down your own side depending on where your speed is.

- **The read:** the retrieving defenceman is on your side, or the strong-side corner is crowded.
- **Why:** it moves the puck away from the defender best placed to get it and forces their weak-side defenceman into a long retrieval on their backhand, facing his own boards. That is the single most uncomfortable retrieval in hockey.
- **What you need:** your far-side winger to have read it and be going there. Cross-corner dumps into nobody are pure giveaways.

### 5. The flip / area dump over a trap

Lift the puck high off the ice so it travels over sticks and bodies and lands in open space behind the defence.

- **The read:** the opposition are congesting the neutral zone — a **trap**, most commonly a **1-3-1** neutral zone structure with one forechecker, three players across the middle and one back — and there is no route along the ice.
- **Why:** a flip does not have to get through the three-man wall; it goes over it. It also hangs long enough for your forwards to run underneath it.
- **How:** open the blade, get under the puck, and aim to land it **past** the defence but **before** the goal line so it does not carry through for icing. Beware: if your team is not shorthanded and the puck crosses the goal line untouched from behind the centre red line, that is **icing**. See the [Rules Primer](rules_primer.md) for the full icing rule, including hybrid icing.

### How the trapezoid shapes where you aim

Under **NHL Rule 27.8**, *"a goalkeeper shall not play the puck outside of the designated area behind the net."* Playing the puck outside it, behind the goal line, is a **two-minute minor for delay of game** (Rules 27.8 and 63.2(viii)).

**Take the dimensions from Rule 1.8, never from 27.8.** Rule 1.8 specifies the lines actually painted: they begin **seven feet outside each goal crease — eight feet from each goal post** — at the goal line and run back to points **eleven feet from each post** at the end boards, giving **22 feet across at the goal line widening to 28 feet at the boards**. Rule 27.8's own "six feet from either goal post" is stale wording from before the 2014-15 widening — it describes the **old** trapezoid (18 feet at the goal line widening to the same 28 at the boards), which is a coherent shape, just not the one painted today.

Two details that matter tactically:

- **"The determining factor shall be the position of the puck."** Not the goalie's position. He may stand wherever he likes; what is judged is where the puck is when he plays it.
- **The only exception is skate contact with the crease** — the minor is not assessed *"when a goalkeeper plays the puck while maintaining skate contact with his goal crease."* There is no teammate-based exception.

So: **the corners are legally out of bounds for the goaltender, and the area directly behind the net is not.**

That gives you a simple aiming rule where the trapezoid applies. **Dump to the corners, not to the goalie.** A puck that dies straight behind the net is a puck the goalie can legally stop and set for his defenceman, which is exactly the help you were trying to deny him. A puck in the corner has to be retrieved by a skater with a forechecker arriving.

If you must put it behind the net, put it there **hard** — the goalie can play it, but stopping a rocketing puck and distributing it cleanly is a much harder job than corralling a soft one.

**Where the trapezoid applies:** the NHL (since 2005-06), the KHL, and IIHF play (IIHF Rule 27.7, with the area defined as 6.80 m along the goal line widening to 8.60 m at the boards). **Most rec, beer-league and youth associations do not use it.** In those leagues a puck-handling goalie can go anywhere behind his goal line, which flips the advice: rim it hard and low so he cannot set up on it, or dump to the corner furthest from his stick hand.

*Flagged:* two NHL rules give different trapezoid dimensions at the goal-line end — Rule 27.8 says the lines *"begin six feet from either goal post"*, while Rule 1.8 describes the markings as seven feet outside each goal crease (eight feet from each goal post). Rule 1.8 matches the IIHF's 6.80 m figure, so 27.8's text appears to be stale. Nothing about how you play changes either way; the corners are outside it under any reading.

---

## 8. Chasing a dump properly

A dump-in is only as good as the chase. Most amateur chases fail before they start because the chaser skates at the puck.

### Angle, don't chase

The retrieving defenceman has two escapes: the **easy** one (usually turning up the boards toward the neutral zone, or reversing behind the net to their partner) and the **hard** one (getting hemmed on the wall, or being forced to their backhand into traffic).

Your route should **take away the easy escape**, not shorten the distance to the puck.

- Skate to a point that puts you **between the retriever and where they want to go**, arriving at the puck at an angle rather than head-on.
- **Approach on the retriever's backhand side** where you can. A defenceman forced to make a backhand play under pressure, facing his own boards, is where turnovers come from.
- **Take a route that keeps you on the inside** — between the puck and the middle of the ice — so if they escape, they escape to the boards, not into the slot.
- **Stick first.** Your stick should be leading, on the ice, in the passing lane you are trying to eliminate, before your body arrives.

The measure of a good chase is not whether you got the puck. It is whether the retriever's only remaining option was one you had covered.

### F1, F2 and what they owe each other

**F1, F2 and F3 are roles, not people.** They are defined by order of arrival, not by position — whichever forward gets there first is F1, whoever is next is F2, regardless of whether they are the centre or a winger.

Under the **house default assumed across this corpus — a 2-1-2 forecheck** — the relationship on a dump-in retrieval is:

- **F1** goes to the puck and takes away the easy escape as described above. F1's job is to force a decision, not necessarily to win the puck.
- **F2** reads F1's angle and covers **the side F1 forced them toward** — usually the strong-side wall or the area behind the net. F2 is the one who actually recovers most pucks; F1 creates, F2 collects.
- **F3** stays high, generally around the top of the circles, protecting against the breakout pass up the middle and the counter-attack.

**Other systems assign this differently.** In a **1-2-2**, F1 pressures but F2 and F3 both hold higher, funnelling the puck to one side rather than chasing it; you will recover fewer pucks below the goal line but concede far fewer odd-man rushes. In a **2-1-2 aggressive/overload**, both F1 and F2 attack the same side of the ice hard. In a **1-3-1 forecheck** F1 pressures and three players lock the neutral zone, which is barely a forecheck at all — it is a trap. **Find out which one your team plays**, because the same dump-in requires a different second man in each.

See [Forechecking Systems](forechecking_systems.md) for the full treatment.

---

## 9. Deciding: carry, dump, or delay

You have roughly half a second. Read these four things in this order.

### 1. Gap

**Gap** is the distance between you and the nearest defender.

Read these against the defender's own scale, which [Defending the Rush](defending_the_rush.md) owns: **two to three stick lengths is a normal neutral-zone gap**, about a stick and a half at the red line, and about a stick length is what a defender aims for at their own blue line. The tighter **one to one and a half stick lengths** you will also hear is not part of that owned scale — it is the coaching description of a *tight* gap carried by [Neutral Zone Systems](neutral_zone_systems.md), and it is a deliberate choice rather than the default.

- **Large gap (defender more than about three stick-lengths off, backing in):** carry. They have given you the line. Take it and get to the dots.
- **Normal gap (two to three stick-lengths, closing):** you need a move or an angle. Attack the outside shoulder, or chip past them if they are committing.
- **Tight gap (one to one and a half stick-lengths, stick on you, standing up at the line):** carrying is a low-percentage play. Chip past, dump, or delay.

### 2. Support

- **Two or more teammates at the line with you, at speed:** carry, or pass in. This is what all the timing work in Section 4 was for.
- **One teammate, arriving late:** delay. One second of curl usually converts this into the case above.
- **Nobody:** dump to a place someone can get to, or delay if anyone at all is coming. If genuinely nobody is coming, put it in deep and change — but recognise you have already lost this shift, because dump-and-change was the worst-valued play in the data.

### 3. Score and time

This is the one place where the analytics argument bends. See [Game Management](game_management.md).

- **Tied, or early:** play the percentages. The break-even is around one-third confidence; be aggressive.
- **Protecting a one-goal lead late:** the cost of a turnover is asymmetric — a goal against costs you more than a goal for gains you. Dump it in, forecheck, burn clock.
- **Chasing a goal late:** carry almost regardless. A dump-in with ninety seconds left surrenders possession you cannot afford to lose.
- **On a line change:** the entry decision is secondary. Get the puck deep or out of danger and change cleanly.

### 4. Who you are

Tulsky's group modelled this directly: the carry/dump threshold moves with team strength. A skilled line against a weaker pair should be attempting carries at nearly any excuse (their 26% figure). A fourth line against a top pair genuinely does have a higher bar (their 44% figure). **Both of those are still well below "only carry when it's certain."**

### The one-sentence version

*Carry if you have the line or the support; chip if they are committing; delay if support is one second away; dump only to a place a teammate is already skating to; and never dump and change if you can help it.*

---

## 10. Entering against specific structures

### Against a standing-up defence

They hold the blue line, take away the middle, and dare you to go around.

- **Chip and chase past them.** A defenceman standing still at the line has no momentum to recover. This is the ideal chip situation.
- **Attack the seam between the two of them.** Two defenders holding a line have a gap between them by definition.
- **Use a late player.** Standing up requires them to watch the puck; a fourth attacker arriving behind the play is often unmarked.
- **Change the entry point.** Cross the line where they aren't — swing the puck to the far side and enter on the weak side.

### Against a 1-3-1 neutral zone

One forechecker, three across the middle, one back. The three-across layer is designed to kill the puck at the red line.

- **Do not skate into the three.** That is the trap working.
- **Use the flip / area dump over the wall** described in Section 7. This is what it exists for.
- **Move the puck side to side quickly** — the three-man layer is strong facing forward and slow rotating laterally.
- **Attack the outside of the wall.** The 1-3-1 concedes the boards to protect the middle; take what it gives.
- **Use a stretch player.** A forward held high behind their three forces the back player to stay honest, which thins the wall.

See [Neutral Zone Systems](neutral_zone_systems.md).

### Against an aggressive gap

They close hard and early, well before their own line.

- **This is the best possible situation for the chip past.** An aggressive gap is a defender with committed momentum.
- **Get the puck off your stick early.** Do not skate into a closing defender; make the play a stride before they arrive.
- **Use the space behind them.** Aggressive gap means there is ice behind them by definition. Send someone into it and hit them.
- **Change of pace beats a move.** A hard deceleration then re-acceleration ruins a defender who is closing hard, because their speed is now a liability.

### On the power play

Entries on the power play are a distinct skill, and the most common failure of a bad power play is not the setup — it is that it cannot get in.

Common coaching structures (these are choices, not laws):

- **Four across the line**, two wide lanes and two inside-dot lanes, so the carrier always has an option and the kill has to defend four threats.
- **Attack middle ice first.** Pushing the puck wide too early invites pressure and forces a chip. Get the first pass to the dot line or the middle.
- **The drop entry**, especially against a penalty kill that sits back: the carrier attacks straight at the first killer to freeze them, then drops underneath into the space that creates.
- **Placement entries** — a *planned* puck put below the goal line, by chip or cross-corner, into an area where you have a recovery advantage. Not a panic dump; the difference is that the support routes were already running when the puck was released.
- **Rim entries** when pressure is all on the strong side: a long rim to a weak-side support player. Without that support player, a rim is just a slow turnover.

The PWHPA data cited in Section 1 gives power-play figures too — carry-ins **0.91** shots per entry and pass-ins **0.96**, against **0.38** for dump-ins. **Read those carefully, because they do not say what they are usually said to say.** Against the even-strength figures in Section 1 (carry-ins 0.73, dump-ins 0.14), the carry-in advantage **narrows** on the power play, not widens: the gap falls from 0.59 to 0.53 shots per entry, and the ratio collapses from more than five-to-one to under two-and-a-half-to-one. Dump-ins get *better* with the extra man — 0.14 to 0.38, which makes sense, because a four-man kill is worse at retrieving a puck than a five-man defence.

What survives is the direction, not a widening margin: **controlled entry still produces roughly two and a half times the shots of a dump-in on the power play**, so getting in with control still matters — but the extra man narrows the penalty for getting it wrong rather than raising it. If your unit cannot enter cleanly against a set kill, a dump-in on the power play is a less costly fallback than it is at even strength.

See [Special Teams](special_teams.md).

---

## 11. Defending the entry

Everything above, from the other side. This is the summary; [Defending the Rush](defending_the_rush.md) is the full document.

### Gap control

**Gap** is the space between you and the puck carrier, and it is the whole game.

- **Too much gap** and they enter with speed, get their head up, and make a play. You have conceded the controlled entry the data says is worth double.
- **Too little gap** and one move or one chip beats you, and now they are behind you.
- **The general target** taught by most coaches, and the scale [Defending the Rush](defending_the_rush.md) owns, is **two to three stick lengths through the neutral zone, about a stick and a half at the red line, and about one stick length by your own blue line** — shrinking the whole way, never growing. But the number is less important than the principle: **your gap should be whatever lets you match their next change of speed.**
- **Skate backwards fast enough that you never have to turn.** The moment a defender turns and runs, the attacker chooses everything.

### Standing up at the line

Meeting the entry at your own blue line rather than backing in.

- **Upside:** it kills controlled entries outright. If they cannot cross with the puck, they cannot get the 0.5-shot entry.
- **Downside:** if you are beaten, you are beaten badly — you are flat-footed at your own line with a forward behind you and only your goalie left. It also needs your forwards to be back, because standing up assumes support behind you.
- **Needs:** good reads, and a partner who slides with you rather than staying deep.

### Forcing wide, and "receiving the entry"

The traditional approach, often taught as **receiving the entry**: the defencemen stay roughly between the faceoff dots, mark the carrier and the slot, and steer the play to the outside so the entry happens where it is least dangerous.

- **Upside:** very hard to beat cleanly, and it keeps the middle protected.
- **Downside:** it concedes the entry. The attacker gets in with the puck, gets time on the wall, and can shoot with purpose looking for rebounds.

### More aggressive alternatives — name them

- **F1 pressure with the D holding the dots:** the first forward back pressures the carrier while the defencemen hold their depth. Requires the defencemen to talk and to step on the cross-ice pass.
- **Squash-and-slide** (as described publicly of Bruce Cassidy's Boston Bruins around 2018-19): the defenceman — not the backchecker — forces the carrier outside, while the first forward back protects the slot. The two defencemen hold the same depth and slide across together like a foosball bar, "squashing" the play against the wall if it goes wide and pinching in if it goes inside. It buys time and space back at the cost of demanding a great deal from the forwards; one lazy backcheck and the weak side is wide open.

**These are systems, not laws.** Which one your team plays changes your job completely — whether you step up, whether you hold the dots, whether the first forward back takes the puck or the slot. Ask, and then talk to your partner about it before the puck drops.

### The defender's version of the offside rule

Everything in Section 2 works for you too:

- **You do not have to prevent the entry, only make it uncontrolled.** A stick in the passing lane that forces a dump has done the same job as a hit.
- **Force them to cross before the puck.** A defender who steps up at exactly the right instant can make an onside attacker offside, because the judgement happens at the moment the puck crosses.
- **On a delayed offside, get the puck out of the zone.** Rule 83.3(ii) — passing or carrying the puck into the neutral zone nullifies it and resets everything.
- **Know the disallowed-goal rule.** If they shot it in on a delayed offside, that puck cannot legally end up in your net. Do not panic; play it out.

---

## Common Mistakes

- **Dumping the puck in because it feels responsible.** On Tulsky's *net value* column the average carry attempt was worth more than three times the average dump-and-chase (+0.42 against +0.12); on raw shots for it was double (0.48 against 0.24). Either way, failed carries cost far less than everyone assumes. Dumping is a tool, not a default.
- **Dumping and changing.** In Tulsky's tracking this was the *only* entry type with a worse net value than a failed carry-in. If you need a change, change before you get the puck.
- **Dumping to nobody.** A dump-in with no chaser is not a dump-in, it is a pass to their defenceman. Look before you release.
- **Arriving at the line early and having to stop.** Being fast to the line is worthless if you have to wait there. Be slower thirty feet out and faster at the line.
- **The puck carrier arriving first.** Then there is no support, and one player against two defenders is a turnover with extra confidence.
- **Never delaying.** The curl-back is free and almost nobody uses it. If you are alone at the line, turning away is not retreating; it is the difference between a wasted entry and a real one.
- **Blind drop passes.** If you cannot see the trailer, do not drop it. A drop pass to an empty patch of neutral ice is the worst turnover in the game because everybody on your team is facing the wrong way.
- **Skating straight at the puck on the forecheck.** Angle to take away the escape, not to shorten the distance.
- **Dumping straight behind the net where the trapezoid applies.** You have just handed the goalie a legal touch and let him set the puck up for his defenceman. Use the corners.
- **Coasting over the line on a delayed offside.** Tagging up needs **skate contact with the blue line**. Being in the air over it does not clear you, and one player not tagging keeps the whole team frozen. (And check your book: under USA Hockey Rule 630(d) there is no tag-up below Youth 15-Only, Girls 16U, High School and Adult — the whistle goes immediately.)
- **Forechecking during a delayed offside.** Touching the puck, going for a loose puck, forcing the carrier deeper, or being about to hit him all stop play immediately. Hold at the line.
- **Attacking straight at a defender.** Attack the space between two of them and make somebody choose.
- **Treating your team's entry rules as universal.** Lane discipline, who carries, whether you stand up at the line — these vary. Find out yours.

---

## Key Takeaways

1. **Carrying the puck in is worth about twice as much as dumping it in.** Comparing like with like — every carry *attempt*, successes and failures averaged together — Tulsky's tracking put it at 0.48 shots per entry against 0.24 for dump-and-chase, and that result has replicated across multiple trackers, leagues and eras.
2. **A failed carry costs far less than you think.** In the tracked data it was worth about −0.08 net shots, cheaper than dumping and changing. You only need about one-third confidence for the carry to be the better bet — 26% if your line outmatches theirs, 44% if it does not.
3. **You are onside as long as one skate has not completely crossed**, judged at the exact instant the puck completely crosses the line. Drag that trail skate and you can attack the line at full speed while everyone else is checking their feet. **Under NHL and IIHF rules the trail skate may even be in the air; under USA Hockey Rule 630(a) it must be touching**, so keep the blade down if that is your book. Tagging up on a delayed offside is stricter: it needs actual **skate contact with the blue line**, from every attacker in the zone, at the same instant — and under **USA Hockey Rule 630(d)** tagging up does not exist at all below Youth 15-Only, Girls 16U, High School and Adult, where the offside is whistled straight away. And a goal scored off the puck that caused the delayed offside is disallowed no matter how cleanly you tagged.
4. **Attack the space between two defenders, not at one of them.** One defender has an easy job. Two defenders sharing a seam have a problem.
5. **The puck carrier should be the last to the line and the support should be first** — and arriving with speed is not the same as arriving early.
6. **The delay is the most under-used skill in amateur hockey.** Alone at the line, turn away, protect the puck, look up ice, and re-attack one second later with support.
7. **A dump-in is a decision about where, not just whether.** Hard rim, soft area dump, chip past a pinching defender, cross-corner, flip over a trap — each answers a different read, and all of them require a chaser who is already going there.
8. **The chip past a committing defenceman is a possession play, not a surrender.** Their momentum is what makes it work.
9. **Where the trapezoid applies, dump to the corners.** Only the puck's position matters, and the goalie's only exception is keeping a skate in contact with the crease. Most rec and youth leagues have no trapezoid at all, which removes the whole point of the corner dump.
10. **Chase the escape route, not the puck, and remember the entry is a two-sided coin.** Angle so the retriever's easiest option is the one you have already taken away; F1/F2/F3 are roles defined by arrival order, not positions. Defending the line, your gap should be whatever lets you match their next change of speed — and whether you stand up, receive the entry, or squash-and-slide is a system your coach chooses, not a law of the game.

---

*Sources — retrieved 27 July 2026:*

*Rules: [NHL Official Rules 2025-2026 (PDF)](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) — Rule 83 (Off-side), Rule 1.8 (goalkeeper's restricted area — the painted dimensions: eight feet from each post at the goal line, eleven feet at the boards, a 28-foot span), Rules 27.8 and 63.2(viii) (the restricted-area penalty — cited for the offence only; its six-foot figure is stale), Rules 1.5–1.7 (lines, division of ice, crease) · [IIHF Official Rule Book 2025/26 (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/4_sport/officiating/rule_book/25_26/2025-26_iihf_rulebook_19052025-v1.pdf) — Rule 83, Rule 27.7, Rule 1.8 · [Scouting The Refs — NHL Rule Book Updates for 2025-26](https://scoutingtherefs.com/2025/09/49364/nhl-rule-book-updates-for-2025-26/)*

*Analytics: [Tulsky, Detweiler, Spencer & Sznajder, "Using Zone Entry Data To Separate Offensive, Neutral, And Defensive Zone Performance", MIT Sloan Sports Analytics Conference 2013 (PDF)](http://hockeyanalytics.com/Research_files/Using%20Zone%20Entry%20Data%20To%20Separate%20Offensive,%20Neutral,%20And%20Defensive%20Zone%20Performance.pdf) · [Notes From The Rafters — "Proving Tulsky Right: Zone Entries" (PWHPA / Sportlogiq data)](https://notesfromtherafters.substack.com/p/proving-tulsky-right-zone-entries) · [Hockey's Arsenal — "Enter the Offensive Zone With More Offence and Less Risk" (summarising Sznajder and Chatel tracking)](https://hockeysarsenal.substack.com/p/enter-the-offensive-zone-with-more) · [Sports Illustrated — "Fancystats quietly leading NHL teams to dump the dump-and-chase strategy" (2014)](https://www.si.com/nhl/2014/01/15/fancystats-quietly-leading-nhl-teams-to-dump-the-dump-and-chase-strategy)*

*Coaching and tactics: [Ice Hockey Systems — Kyle MacLennan, "Winning the Entry: How NHL Power Plays Gain the Zone"](https://icehockeysystems.com/blog/coaching-tips/winning-entry-how-nhl-power-plays-gain-zone) · [Stanley Cup of Chowder — Shawn Ferris, "Defending the Blue Line" (squash-and-slide, receiving the entry)](https://www.stanleycupofchowder.com/2019/1/28/18197816/defending-the-blue-line-analytics-tactics-boston-bruins)*

*Not verified: the season the PWHPA / Sportlogiq figures cover is not stated in the source, which was published in July 2022 and refers only to "this last year's PWHPA Secret Dream Gap Tour" — 2021-22 is an inference, and is flagged as such in Section 1. The Sznajder (0.66 / 0.29) and Chatel (47% / 18%) figures are reported second-hand by Hockey's Arsenal; the underlying tracking data sets were not reachable directly and should be treated as indicative rather than exact. The NHL rulebook's own two descriptions of the trapezoid's goal-line dimension disagree (Rule 27.8 vs Rule 1.8), as noted in Section 7.*

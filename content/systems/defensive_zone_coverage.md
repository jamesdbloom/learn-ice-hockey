# Defensive Zone Coverage

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline. **Playing in Britain? The IIHF flags are yours** — every level of UK hockey runs the IIHF book, amended locally; see [UK and England Rules](../foundation/uk_rules.md).
>
> **Related:** [Center](../positions/center.md) · [Defender](../positions/defender.md) · [Winger](../positions/winger.md) · [Breakouts](breakouts.md) · [Defending the Rush](defending_the_rush.md) · [Forechecking Systems](forechecking_systems.md) · [Neutral Zone Systems](neutral_zone_systems.md) · [On-Ice Communication](../foundation/on_ice_communication.md) · [UK and England Rules](../foundation/uk_rules.md)

## Overview

```facts
Key: Coverage is the agreement your five skaters have about who protects what when the other team has the puck in your end
Convention: The most system-dependent part of hockey — two good teams can play completely different systems and both be right
Risk: The same instruction — "get to the corner", "stay high" — can be correct on one bench and a firing offence on the next
Action: Work out which system your team plays, so you stop guessing
```

Coverage is the agreement your five skaters have about who protects what while the other team has the puck in your end, and **it is the single most system-dependent part of hockey** — two good teams can play completely different systems and both be right, so the same instruction can be correct on one bench and a firing offence on the next. Find out which one your team plays.

**One question gets you most of the way, and it is the fastest thing you can ask a new coach:** when the puck is in our corner, does the winger stay up at the blue line or come down and help? That answer separates the two main families immediately.

**The most dangerous chances come from a small area in front of your net** — roughly from the two posts out to the faceoff dots and up to the tops of the circles. A shot from inside it is worth several times the same shot from outside; [Shooting](../technique/shooting.md) covers those values and the qualifications that come with them, and [Rink Map and Glossary](../foundation/rink_map_and_glossary.md) covers the shape, which is an analytics convention rather than an official marking. Every system is a different way of keeping five bodies between that area and the puck while still being able to leave with it. So defend the middle before the outside: offered a choice between taking away a shot from distance and taking away a pass into that area, take the pass. That tells you which chance to concede, not where to stand.

**Somebody must always have the doorstep of your net** — not the general area in front of it, but the edge of the painted crease, where the player who scores is standing. Which of the five it is changes with the system; that it is somebody never changes. The matching error is both defencemen going to the same puck without either knowing who has the doorstep.

**Most defensive-zone breakdowns are not effort failures.** Almost always both players worked hard, on different assumptions about who had whom, and skated hard in opposite directions. *(No published tracking data breaks goals down by cause, so treat that as coaching consensus rather than a measured fact.)* So announce your intentions rather than your observations: "I'm going to the corner, you have the middle" resolves the ambiguity; "he's coming down your side" only describes it. And the moment you realise you do not know who is yours, go to the middle — every mistake made in front of your own net is smaller than the same one made outside it.

---

## The Problem Every System Solves

```facts
Key: The most dangerous chances come from the house, or home plate — the two goalposts widening to the faceoff dots and up to the top of the circles
Convention: The house is an analytics convention rather than an official marking — Shooting covers what a shot from inside it is worth, Rink Map and Glossary covers the shape
Goal: Allocate five bodies so the house is never open, while still being able to take the puck off them and leave
Priority: Choose which chances you are willing to give up — coverage is not about eliminating them
Risk: Pack all five onto the goal line and nobody is available for the outlet — you win the puck and give it straight back
Key: Twenty point shots through no traffic and zero back-door tap-ins is a good night
```

Five of you. Five of them. One net.

But the ice is not equally dangerous. The most dangerous chances come from a small area in front of your net, known as **the house** or **home plate** — the region bounded by the two goalposts, widening out to the two faceoff dots, and up to the top of the two faceoff circles. Draw those lines and you get a shape like a baseball home plate. That's the area that matters.

Two things to be honest about, because the shape gets quoted more confidently than the evidence supports. **The boundaries are an analytics convention, not an official marking** — Natural Stat Trick, Evolving Hockey and MoneyPuck all draw them slightly differently, and [Rink Map and Glossary](../foundation/rink_map_and_glossary.md) covers the shape. And **how much of the scoring it accounts for depends on whose figure you take** — [Shooting](../technique/shooting.md) covers the values, and hedges every one of them. The figures that have actually been counted are more modest than the versions repeated in dressing rooms: **26.8%** of NHL goals were scored within two stick-lengths of the net and **51.6%** within twenty feet, computed from the NHL play-by-play feed over 400 games of 2024-25 ([Body Contact and Battles](../technique/body_contact_and_battles.md) covers both, and those are patches smaller than the house). What every source agrees on is the ratio rather than the share: a shot from inside this area is worth several times the same shot from outside it. That is enough to build a system on.

![](diagram:dz-the-house)

Some vocabulary, used consistently throughout this document and the rest of this guide (full definitions in [Rink Map and Glossary](../foundation/rink_map_and_glossary.md)):

- **The slot** — the lane in front of the net between the two faceoff circles.
- **The high slot** — the upper part of it, from the faceoff dots up to the top of the circles.
- **The goalmouth** — the immediate front of the net, the doorstep. Distinct from the slot; this is where tap-ins and deflections happen.
- **The crease** — the blue paint the goalie works in. Under NHL rules it is eight feet wide (one foot outside each post) and six feet deep at its deepest point.
- **The point** — the area at the blue line where the opposing defencemen stand.
- **The half-wall** — the boards roughly level with the faceoff dot, between the corner and the point.
- **Strong side** — the side of the ice the puck is on. **Weak side** — the other side.
- **Low** — nearer your own goal line. **High** — nearer the blue line.

So the actual problem is: **how do you allocate five bodies so that the house is never open, while still being able to take the puck off them and leave?**

Every system is a different answer, and every answer costs something. There are only five of you, and if you put four in the house then somebody at the point is unmarked. Defensive zone coverage is not about eliminating chances — it is about **choosing which chances you're willing to give up**. A team that concedes twenty point shots through no traffic and zero back-door tap-ins has had a good night.

There is one more constraint people forget. You are not only defending; you are trying to leave. A shape that packs all five players onto the goal line protects the house beautifully and has nobody available to receive an outlet pass, so you win the puck and immediately give it back. Every system trades net-front safety against **breakout readiness**. Keep that tension in mind — it explains most of the design decisions below.

---

## The Universal Principles

```facts
Priority: Defend the middle before the outside — it tells you which chance to concede, not which square metre to stand in
Position: Stay on the defensive side of the puck — between your man, or your area, and your own net
Never: Both defencemen on the puck without knowing who has taken the goalmouth
Key: Somebody must always have the goalmouth — the doorstep, not the slot; the person changes, the requirement never does
Technique: Sticks flat in the passing lanes — when you cannot reach the puck you can almost always reach the lane
Action: Box out at the net front — inside shoulder ahead of theirs, and lift the stick rather than cross-check the back, taken up rather than sideways and below their bottom hand
Rule: A goal can be disallowed where an attacker "by his positioning or by contact" impairs the goalie — NHL Rule 69.1, and IIHF 69.1 in the same terms, which is the lever a British reader has. But it is a judgement after the fact — move the screen yourself
Rule: Under USA Hockey and Hockey Canada you have no such lever outside the paint — neither reaches a screen set outside the crease, and USA Hockey 625(a)(1)'s "protective screen" is a screen on a checker, not on a goaltender
Rule: Inside the paint they split — USA Hockey 625(b) is flat, no goal with an attacker in the crease whoever scored; Hockey Canada 8.5 allows a teammate's goal only where the crease player does not "attempt to play the puck, interfere with the play or obstruct the Goaltender's view or movements"
Never: Shove an attacker into your own goalie — it buys nothing in any book, and Hockey Canada's Interpretation 2 to 8.5(a) says the referee should penalise the defender who committed the initial foul
Action: Talk, and talk early — "I've got the corner", "you have the net", "switch", "back door"
```

These hold no matter what system your coach runs. If you remember nothing else, remember these — they will keep you roughly right even when you don't know the structure.

**1. Defend the middle before the outside.**
A shot from the point through clean ice is a save your goalie expects to make. A pass into the slot is not. Given a choice between taking away a shot and taking away a pass into the house, take the pass. You are steering the puck to where it is least dangerous, not trying to touch it everywhere.

**What this principle does *not* dictate is where your feet go** — that is the system's job, and different systems honour the same principle in opposite ways. Under **low zone collapse** you sag toward the middle rather than chasing to the boards, and the middle stays full because everybody is standing in it. Under **man-on-man** you follow your check to the boards, and the middle stays protected because the man who would receive the seam pass has someone within a stick length of him. Under a **strong-side overload** you deliberately abandon the weak side and squeeze the puck side, betting that no cross-ice pass gets through. All three are defending the middle before the outside; only the first does it by standing there. The principle is about which *chance* you concede, not about which square metre you occupy — so apply it by asking "which is the more dangerous option to leave open?", not by drifting to the slot in a system that told you to go with your man.

**2. Stay on the defensive side of the puck.**
Be between your man (or your area) and your own net. Any time an opponent is between you and your goalie, you are defending nothing — you're just skating behind a play. This is why you angle attackers toward the boards rather than reaching across your body at the puck: reaching turns you, and a turned defender is on the wrong side a half-second later.

**3. Never both defencemen on the puck.**
One defenceman engages, the other stays home. If both of you get sucked into the same corner battle, the goalmouth is empty and one pass beats your entire team. Coaches at every level name this as one of the commonest causes of goals against, and it is entirely preventable by talking. *(No published tracking data breaks goals down by cause this way — treat that as coaching consensus, not a statistic.)*

**What is invariant is that somebody is home — not that it is your partner.** Under the house-default low zone collapse it is the weak-side defenceman, and that pairing is what the rest of this document assumes. It is not universal: under **man-on-man** the net front belongs to whoever's check went there, under a **collapsing box** both defencemen are inside the house together, and some aggressive systems will deliberately send **both** defencemen below the goal line on a specific read — normally once a forward has already dropped in to cover the doorstep. The comparison table below sets out who has the net front in each. So the rule is not "never both of you", it is **never both of you without knowing who has taken the goalmouth.** [Risk Management](../hockey-iq/risk_management.md) states the same principle the same way.

**4. Somebody must always have the goalmouth.**
Not "the slot" — the doorstep. The player who is going to score is the one standing at the edge of the blue paint with their stick on the ice. Under low zone collapse that is the weak-side defenceman; under man-on-man it's whoever's check went there. The person changes. The requirement never does.

**5. Sticks in passing lanes, on the ice.**
An active stick lying flat in a lane takes away a pass without committing your body — which means you can still get to the next thing. A stick held off the ice or waving at hip height does nothing. When you cannot reach the puck, you can almost always reach the *lane*.

**6. Box out at the net front.**
Get your inside shoulder ahead of theirs, establish position between them and the puck, and lift their stick rather than cross-checking their back — **up rather than sideways, and below their bottom hand**, because at or near the hands every book reaches the lift: hooking outright under the IIHF's Rule 55.1, hooking under USA Hockey's 623 and Hockey Canada's Interpretation 1 to 8.2(a) where it stops the opponent playing the puck, and slashing under NHL 61.1 where it is a chop rather than an attempt to play the puck. Full technique in [Defender](../positions/defender.md) and [Body Contact and Battles](../technique/body_contact_and_battles.md). Two rules-relevant notes:
- **Screening your own goalie is your problem, not the referee's.** An attacker standing outside the crease in your goalie's sightline without touching them is, in the ordinary case, doing something legal. The one lever you have is Rule 69.1, which disallows a goal where an attacker *"either by his positioning or by contact, impairs the goalkeeper's ability to move freely within his crease or defend his goal"* — positioning alone can be enough. 🇬🇧 **The IIHF writes the same lever at the same number**, and it is the one a British reader has: its 69.1 disallows a goal where an attacking Player *"either by their positioning or by a 'relevant contact', impairs the goalkeeper's ability to move freely within their goal crease or defend their goal."* But that is a referee's judgement after the fact, not a whistle. Nobody is going to remove him for you — you have to move him. **⚠️ And under USA Hockey and Hockey Canada you do not have even that lever outside the paint**: neither book writes a provision about screening a *goaltender* — USA Hockey's one *"protective screen"*, at **Rule 625(a)(1)**, is a screen set on a checker, not on a goaltender — and both make the *penalty* turn on physical contact. What they give you instead is a bar on the attacker's position in the crease, and **it is not the same bar in the two books.** **USA Hockey Rule 625(b) is flat:** *"No goal may be scored with an attacking player in the goal crease unless the puck has preceded the player(s) into the goal crease or the goalkeeper is out of the goal crease area"* — it does not matter who scored, and there is no impairment to judge. **Hockey Canada Rule 8.5 is not flat.** Its Goal Crease Area paragraph disallows the goal too, and then adds that where another attacking player outside the crease scores, *"the goal WILL BE ALLOWED provided that the player who was in the goal crease does not attempt to play the puck, interfere with the play or obstruct the Goaltender's view or movements"* — so in a situation you will meet at the net front, a teammate's shot with a body in your paint, Hockey Canada gives you the goal against only where that body satisfies all three of those conditions. **Read the last of them before you rely on the carve-out**: a screener standing in your paint is, in the ordinary case, obstructing the view, which is what a screen *is* — so a body that merely stands still does not earn the carve-out. Hockey Canada does write the goaltender-vision test USA Hockey has none of, but it only reaches a player who is in the crease: **Interpretation 3 to Rule 8.5(a)** has standing there not a foul in itself, *"however, if while standing in the crease, the attacking player attempts to play the puck, interfere with the play, or impede the goaltender's vision or movements, then no goal may be scored."* A body just outside your paint is beyond both books entirely — which is why, in either of them, you still have to move him yourself. *(Those two negatives are a search of the two **playing rule** books, which are the ones held here; the separate USA Hockey Rules and Casebook is not on disk and was not searched, and a casebook situation could qualify the USA Hockey half. [Rules Primer](../foundation/rules_primer.md) owns the full four-book comparison and states that limit.)* ⚠️ **What Hockey Canada does take a player off the ice for is contact, and the tier is higher than most people assume.** Rule 8.5(b) makes a major plus game misconduct **mandatory** for a player who *"charges the goaltender"*, and **mandatory** for any interference-with-goaltender foul that *"injures an opponent"* where it would otherwise have been a minor; 8.5(c) reaches a match penalty. So the screen is yours to solve and the referee will not do it for you — but a forward who runs your goalie is the referee's problem, not yours to answer.
- **Don't shove him into your goalie hoping for a disallowed goal.** Under NHL Rule 69.1, if a *defending* player pushes an attacker into the goalkeeper, that contact isn't treated as attacker-initiated — *"provided the attacking player has made a reasonable effort to avoid such contact"* — and the goal generally stands. ⚠️ **And under one of the four books it is worse than a wasted gamble — it is a penalty on you.** **Hockey Canada's Interpretation 2 to Rule 8.5(a)** deals with exactly this play, an attacker *"tripped, hooked, cross-checked, or otherwise interfered with"* who falls into the goaltender, and having required an effort from the attacker it adds: *"The referee should also penalize the defending player who committed the initial foul under the appropriate rule."* **USA Hockey gives the attacker more relief than the NHL does, not less:** where a defender physically interferes with them and that puts them in the crease, *"play shall not be stopped and any legal goal scored shall be allowed"* — no reasonable-effort proviso at all. So the shove buys you nothing in any book and a trip to the box in one. Move him with position, not with a push.

**7. Talk, and talk early.**
"I've got the corner." "You have the net." "Switch." "Back door." Coverage is a shared model of who has whom; the only way to keep the model shared is out loud. See [On-Ice Communication](../foundation/on_ice_communication.md).

---

## Low Zone Collapse (Zone Coverage) — the house default

**This is the system assumed throughout**, and the one coaching material most often describes as taught first in North American minor, junior and rec hockey — *again, consensus from coaching material, not a survey; no count of what teams run exists.* It is also frequently called **sagging zone**, **zone coverage**, or simply "the collapse". If your coach has never named the system, this is probably what they mean.

The idea: you defend **space**, not people. Each of the five of you owns an area. Whoever skates into your area becomes yours until they leave it. **Three of you — both defencemen and the centre — live below the top of the circles**, which matches their three forwards down there, while the two wingers hold the points so the opposing defencemen never get a clean seam pass into the middle. When the centre goes low to help, the weak-side winger sags into the high slot and you are briefly four down there. Only under maximum pressure — the collapsing box described later — do all five drop below the circles.

### The base shape — puck in the strong-side corner

```facts
Convention: Under low zone collapse, the strong-side defenceman is on the puck in the corner or behind the net — pressure and pin the puck, not the player, or angle them away from the net
Convention: The weak-side defenceman owns the goalmouth and boxes out — do not get drawn to the puck
Convention: The centre is the second body into the strong-side corner battle — two on one wins it
Convention: The strong-side winger stays high on the strong-side point, between that defenceman and the net
Convention: The weak-side winger covers the weak-side point and collapses into the high slot when the centre goes low
Rule: Pin the puck, not the player — IIHF women's Rule 101.1 prohibits pinning an opponent along the boards
Rule: Freezing the puck unpressured to buy a stoppage is a minor — NHL Rule 63.2(i), USA Hockey Rule 610(a)
```

| Player | Where | Job |
|---|---|---|
| **Strong-side defenceman** | On the puck — corner or behind the net | Pressure and pin the *puck*, or angle them away from the net (see the note below the table) |
| **Weak-side defenceman** | Goalmouth | Own the doorstep. Box out. Do *not* get drawn to the puck |
| **Centre** | Low support, strong side | Second body into the corner battle — two on one wins it |
| **Strong-side winger** | High, on the strong-side point | Between that defenceman and the net; block the lane and the shot |
| **Weak-side winger** | High, on the weak-side point — collapsing into the high slot when the centre goes low | Cover the point *and* the middle, in that order of movement |

**"Pin the puck, not the player."** [Body Contact and Battles](../technique/body_contact_and_battles.md) covers this distinction and it is a rule, not a nicety: **IIHF women's Rule 101.1 prohibits using the boards to eliminate an opponent from the play, push her into the boards, or pin her along the boards.** Pinning the *puck* against the wall with your skate or body while an opponent is contesting it is legal everywhere and is how most board-battle whistles happen; pinning the *opponent* is not. **One qualifier, because "legal everywhere" is too strong on its own:** freezing the puck when nobody is actually pressuring you, purely to buy a stoppage, is itself a minor — **NHL Rule 63.2(i)**, *"On any player, including the goalkeeper, who holds, freezes or plays the puck with his stick, skates or body in such a manner as to deliberately cause a stoppage of play"*, and **USA Hockey Rule 610(a)** in even plainer terms: *"A minor penalty shall be assessed to any player or goalkeeper who deliberately freezes the puck along the boards or goal frame for the purpose of delaying the game."* Under pressure, pin it; unpressured, play it.

Note that the two forwards' jobs are asymmetric. The strong-side winger holds their point; the weak-side winger is the flex player who covers two areas depending on what the centre is doing. That's not sloppiness — it's the defining feature of the system, and the reason it is sometimes called a *sagging* zone.

### The rotations

```facts
Convention: In the collapse, coverage is a set of positions that swap as the puck travels, not jobs bolted to people
Convention: Corner to behind the net — the defencemen exchange roles at the midline; call it, "I've got him, you've got the net"
Convention: Corner to up the strong-side wall — the strong-side winger comes down the wall to between the hash marks and the goal line and takes it; that is your breakout starting, not a corner battle
Convention: Low to high — everyone climbs a level: wingers close on their points, the centre steps up into the high slot, the defencemen recover to the net front and low slot
Convention: Point to point — both wingers slide across and the shape shifts as a unit; nobody chases across the middle at speed
Convention: Puck to the far corner — the defencemen exchange again, the centre follows it low, and the wingers swap flex roles
```

Coverage is a set of positions that swap as the puck travels, not a set of jobs bolted to people.

- **Puck moves corner → behind the net.** The strong-side defenceman follows it to the post and hands it off at the midline. The other defenceman is now the strong-side defenceman and takes the carrier as they emerge; the first one slides back to the goalmouth. You have exchanged roles without either of you ever leaving the net unattended. Call it: "I've got him, you've got the net."
- **Puck moves corner → up the strong-side wall.** The strong-side winger engages it. That is not a corner battle — that is the start of your breakout, and it is the one time in this system a winger comes off the point voluntarily. **They come down the wall to between the hash marks and the goal line** and take the puck there; the point coverage they are leaving is finished, because the other team no longer has the puck. Take it. See [Breakouts](breakouts.md).
- **Puck goes low → high, to the point.** Everyone climbs a level. The wingers close on their points, the centre steps up out of the low battle into the high slot, the defencemen recover to the net front and the low slot, and shooting lanes get filled.
- **Puck moves point → point across the top.** Both wingers slide across with it and the whole shape shifts a few feet toward the new strong side. Nobody chases across the middle at speed; you shift as a unit.
- **Puck moves to the far corner.** The defencemen exchange again, the centre follows the puck low, and the wingers swap flex roles — the new weak-side winger becomes the one who collapses.

### The weak-side winger's collapse — the moment that decides the system

```facts
Convention: When the centre goes down to help in the corner, the weak-side winger drops off their point into the high slot to fill it
Action: Climb straight back up to the point as soon as the puck comes out of the corner
Action: Anyone with a clear view calls it — the centre, the weak-side defenceman, or the winger; don't wait to be told
Never: Both wingers sag at once — the point-to-point pass across the top then gives their defenceman a free walk-in
Read: If your weak-side winger has already followed the opposing defenceman down off the point, the collapse is not available — the defencemen or the centre must cover the high slot instead
```

This is where low zone collapse succeeds or fails, so it is worth being exact.

When the puck goes into the strong-side corner and **the centre goes down to help**, the high slot is momentarily empty. That is the most dangerous square metre on the ice and it cannot stay empty. So the **weak-side winger drops off their point into the high slot** to fill it. As soon as the puck comes out of the corner, that winger climbs straight back up to their point.

![](diagram:dz-collapse-corner)

![](diagram:dz-collapse-high-slot)

Two things to get right:

- **Anyone with a clear view calls it** — the centre going down, the weak-side defenceman who can see the whole picture, or the winger themselves. Don't wait to be told; the rotation is late by the time somebody realises it's missing.
- **Only the weak-side winger does this.** The strong-side winger holds their point. If both wingers sag, the point-to-point pass across the top gives their defenceman a free walk-in.

There is one situation where the collapse isn't available: if the **weak-side opposing defenceman has already come down** off the point and your weak-side winger has followed them, that winger is committed. Then the high slot has to be covered by the two defencemen being more vigilant about arrivals, or by the centre choosing not to commit fully to the corner. Read it and call it.

### What low zone collapse is good at

```facts
Goal: Protect the middle by construction — you don't have to make good reads for the house to be full
Key: The easiest system to learn, because the areas are fixed even when the play is chaotic
Action: Let them cycle — grinding the wall spends their energy in the least valuable ice while you sit in the most valuable
Mindset: Area coverage doesn't ask a tired player or a mismatched winger to win a footrace
Position: Both wingers are already high — two outlets the moment you win the puck
```

- **It protects the middle by construction.** You don't have to make good reads for the house to be full; standing in the right place does most of the work.
- **It is the easiest system to learn.** Areas are fixed, so you always know roughly where to be even when the play is chaotic.
- **It is very hard to beat by cycling.** Teams that grind the puck along the wall and behind the net are working in the least valuable part of the ice while you sit in the most valuable part. Let them cycle. They're spending energy on the perimeter.
- **It handles fatigue and mismatches.** When you're tired, or a fourth-line winger is on with their top centre, area coverage doesn't ask you to win a footrace.
- **The wingers are already positioned to break out.** Two forwards high means two outlets the moment you win the puck.

### Low Zone Collapse: What it concedes

```facts
Key: The walk-down, not the point shot, is the system's actual weakness — every collapse team needs an explicit answer to it
Countered by: The opposing defenceman skating down into the top of the circle, roughly halving their distance to the net while a winger guards an area rather than a man
Countered by: The seam between areas — skilled attackers stand where each defender assumes the other has them
Risk: Point shots, conceded on purpose — the bargain gets worse against a defenceman with a genuine shot
Risk: Extended possession — you are waiting for a mistake, and against a patient team that means tired legs
```

- **Point shots.** Unapologetically. The bargain is that a shot from 55 feet with a stick in the lane is one your goalie should have — and that you'd rather concede it than concede a seam pass. The bargain gets worse as the shooting gets better; at higher levels, and against a defenceman with a genuine shot, "let him shoot" is a real cost.
- **The walk-down from the point.** This is the system's actual weakness, not the point shot. If the opposing defenceman doesn't shoot from the blue line but skates *down* into the top of the circle, a zone winger who is guarding an area rather than a man will often let them go. **The top of the circle is about 35 feet from the goal line** — the end-zone faceoff spots sit 20 feet out and the circles have a 15-foot radius — so they have roughly halved their distance to the net without anybody touching them, and from there they can shoot or feed the slot. That figure, 35 feet, is used consistently for the walk-down throughout this document. Every collapse team needs an explicit answer to this (see [Defending Specific Threats](#defending-specific-threats)).
- **Extended possession.** You will spend long shifts in your own end. You are not generating turnovers; you're waiting for a mistake or a loose puck. Against a patient team this means tired legs and eventually a breakdown.
- **The seam between zones.** Skilled attackers deliberately stand *between* two defenders' areas, where each assumes the other has them. Zone coverage's blind spot is the player nobody feels responsible for.

---

## Man-on-Man

Every player is assigned an opponent and covers that opponent everywhere in the zone. Your winger's opposing defenceman goes to the corner — you go to the corner. Their centre goes behind the net — your centre goes behind the net. Nobody is ever unmarked, because "unmarked" is not a state that exists in the system.

### Assignments

```facts
Convention: Under man-on-man, both defencemen normally take the two most dangerous forwards — typically whoever is low and around the net
Convention: The centre takes the third forward, often the one supporting on the wall or in the slot
Convention: The two wingers take the two opposing defencemen and follow them, including down into the corner — the sharpest practical difference from low zone collapse
Action: Switch when two attackers cross, it is clean, and both of you call it out loud; stay when it isn't
```

- **Both defencemen** normally take the two most dangerous forwards, typically whoever is low and around the net.
- **The centre** takes the third forward, often the one supporting on the wall or in the slot.
- **The two wingers** take the two opposing defencemen — and follow them, including down into the corner if they walk down. This is the sharpest practical difference from low zone collapse and the one that causes most confusion between teammates.
- **Switching** is legal and necessary. When two attackers cross, the two defenders trade checks and say so out loud. The rule is usually: switch when it's clean and both of you call it; stay when it isn't.

### What man-on-man is good at

```facts
Key: Nobody is ever unmarked — the seam problem zone coverage has simply doesn't exist
Goal: Generate turnovers — pressure everywhere means bad passes everywhere; zone coverage waits, man-on-man takes
Countered by: Nothing a cycle can do — if you are glued to a man, moving the puck to someone who beat an area creates nothing
Options: Match up — your best defensive forward can be put on their best player, all shift
Mindset: "He's yours" is the easiest instruction in hockey to understand, though not to execute
```

- **Nobody is ever unmarked.** The seam problem that zone coverage has simply doesn't exist. Every attacker has someone within a stick length.
- **It is excellent against skilled cyclers and set plays.** A cycle works by moving the puck to a teammate who has beaten the *area* — if you're glued to a man, the movement doesn't create anything.
- **It generates turnovers.** Pressure everywhere means bad passes everywhere. Zone coverage waits; man-on-man takes.
- **It lets you match up.** Your best defensive forward can be put on their best player, all shift.
- **Conceptually simple.** "He's yours" is the easiest instruction in hockey to understand — though not to execute.

### Man-on-Man: What it concedes

```facts
Countered by: Picks and screens — one legal collision and your man is gone with a two-stride head start
Risk: Mismatches — a winger in a footrace with a mobile defenceman has no help behind them
Risk: One beaten player leaves an attacker with the puck and nobody within twenty feet; every breakdown is immediately a high-danger chance
Risk: It is exhausting — a full shift at your opponent's chosen pace, in your own zone
Never: Follow your check into harmless ice while their teammate walks into the slot you vacated
Risk: Poor breakout readiness — when you win the puck, your five are wherever their five decided to stand
```

- **Picks and screens.** Attacking teams beat man coverage by running players into your defenders on purpose. One legal collision and your man is gone with a two-stride head start.
- **Mismatches.** Your winger is now defending a mobile defenceman in a footrace. If they lose that individual battle, there is no help behind them, because everyone else is occupied.
- **Total collapse from one error.** In zone coverage a beaten player leaves a hole; in man-on-man a beaten player leaves an attacker with the puck and nobody within twenty feet. Every breakdown is immediately a high-danger chance.
- **It is exhausting.** You are skating a full shift — 30 to 80 seconds on the measured range, nearer 30–45 when it is well managed; [Conditioning and Recovery](../off-the-ice/conditioning_and_recovery.md) covers both figures — at your opponent's chosen pace, in your own zone.
- **It pulls you out of the house.** The classic failure is chasing a man into the corner who never had any intention of getting the puck, while their teammate walks into the slot you vacated. Good man-on-man teams have a rule about *not* following a check into harmless ice.
- **Poor breakout readiness.** When you win the puck, your five players are wherever their five players decided to stand, which is rarely a breakout shape.

Man-on-man is much less common as a pure system than it used to be. Coaching resources are consistent that the removal of clutch-and-grab defending after 2004-05 made pure man coverage very hard to execute against modern speed and skill. What survives is the hybrid below.

---

## Hybrid — man-on-man below the dots, zone above

```facts
Convention: Man-on-man below the dots, zone above them — some teams say the hash marks or the top of the circles, so learn your team's line
Convention: The two defencemen and the low forward, usually the centre, go man-on-man on the three attacking forwards: one on the carrier, one on the net front, one on the low support
Convention: The wingers play the points by area — but when your point man crosses the line and comes down, he becomes yours and you go with him
Convention: Below the goal line the low three stay locked on their men; when the puck comes back to the point, everyone releases and reverts to areas
Goal: Remove the walk-down and the unmarked net front while keeping the wingers high enough to break out
Risk: Two players on different sides of "is he below the dots yet?" is exactly the disagreement that produces a goal against
Options: "Man on the puck, zone off the puck" is the same family — man on the carrier anywhere, area coverage away from it
```

Coaching material routinely describes this as the most common arrangement in professional hockey, and as increasingly common below it. **Nobody publishes a count of what teams actually run**, in this zone or any other — treat that as coaching-material consensus rather than a measured fact, the same way [Forechecking Systems](forechecking_systems.md) treats "the most common forecheck". It is a deliberate compromise: use man coverage where being unmarked is fatal, and zone coverage where it isn't.

**The rule of thumb:** **man-on-man below the dots, zone above them.** Some teams say "below the hash marks" or "below the top of the circles" — the line varies by a few feet, so learn your team's version. Above that line, you cover an area and pass players off. Below it, you take a body and you stay with it.

How it plays out:

- **The two defencemen and the low forward** (usually the centre) are effectively man-on-man on the three attacking forwards down low. One takes the puck carrier, one takes the net front, one takes the low support.
- **The two wingers play zone up high** on the points — but with a man-on-man trigger: *if your point man crosses the line and comes down, he becomes yours and you go with him.* This is the direct fix for low zone collapse's biggest weakness.
- **When the puck goes below the goal line**, the low three stay locked on their men rather than rotating by area, which kills cycles far more effectively than a pure zone.
- **When the puck comes back up to the point**, everyone releases and reverts to areas, and the shape re-forms.

**What it's good at:** it removes the walk-down problem and the unmarked-net-front problem while keeping the wingers high enough to break out. It also degrades gracefully — if the low man coverage falls apart in a scramble, you can revert to "protect the house" without changing anything up high.

**What it concedes:** it's the hardest of the three to learn, because it requires everyone to agree on where the line is and to switch mode at the same instant. Two players on different sides of "is he below the dots yet?" is exactly the kind of disagreement that produces a goal against.

There are inverted versions — some teams play man on the puck carrier anywhere and zone away from the puck, which is arguably the true modern default. If your coach says "man on the puck, zone off the puck", that's this family.

---

## Box+1 and the Collapsing Box

### Box+1

```facts
Convention: Four players form a box around the slot — two low near the posts, two higher near the tops of the circles
Convention: The "+1" is the only player who chases the puck; when the puck moves, the role passes to whoever is nearest and the box rotates one position to fill the space
Key: The standard introductory structure for young players and beginner adults — passive, forgiving of mistakes, and a simple picture of where to stand
Key: Not a penalty-kill box — that is four players, two high and two low; Box+1 is a five-man even-strength shape
Countered by: A good puck-moving team — one chaser cannot pressure them, so they hold the puck and pick their moment
```

Four players form a box around the slot — two low near the posts, two higher near the tops of the circles — and the fifth player, the "+1", is the only one who chases the puck. When the puck moves, the +1 role passes to whoever is now nearest, and the box rotates one position to fill the space they left.

![](diagram:dz-box-plus-one)

**Where it actually gets used:**

- **As a teaching system.** It is the standard introductory defensive-zone structure for young players and beginner adults, because it is passive, forgiving of individual mistakes, and gives everyone a simple picture of where to stand. Coaching resources present it explicitly as the stepping stone to sagging zone or hybrid coverage later.
- **In rec and beer league**, where nobody has practised rotations and the priority is that five people are not all chasing the same puck.
- **It is not a penalty-kill box.** A penalty-kill box is four players with two high and two low (see [Special Teams](special_teams.md)). Box+1 is a five-man even-strength shape. Same word, different thing — a distinction worth keeping straight.

**What it concedes:** almost everything on the perimeter. One chaser cannot pressure a good puck-moving team, so they will hold the puck as long as they like and pick their moment. It buys structure at the cost of ever getting the puck back.

### The collapsing box (and the strong-side overload)

```facts
Convention: The collapsing box is a state, not a full system — the box shrinks toward the crease as the puck goes below the goal line, all five inside the house with sticks in lanes
Read: Use it protecting a lead late, defending 6-on-5 with their goalie pulled, when structure has already gone, or against a team dangerous below the circles but not from its defencemen
Risk: You concede the entire outside by design
Options: The strong-side overload is the opposite adjustment — all five shift to the puck side, cutting the ice in half and squeezing the carrier
Countered by: One hard, accurate cross-ice pass — the overload leaves the whole weak side unoccupied by design
```

The **collapsing box** is a state rather than a full system: the box shrinks toward the crease as the puck goes below the goal line or into the corner, so all five of you are inside the house, sticks in lanes, conceding the entire outside. It's what low zone collapse turns into under maximum pressure.

![](diagram:dz-collapsing-box)

Where it gets used:

- **Protecting a lead late**, when a shot from the point costs you nothing and a seam pass costs you the game. See [Game Management](game_management.md).
- **Defending 6-on-5** with the opposing goalie pulled.
- **When you are outnumbered or scrambled** and structure has already gone (see [When the System Breaks](#when-the-system-breaks)).
- **Against a team that generates nothing from its defencemen** but is dangerous below the circles.

The **strong-side overload** is the opposite adjustment: instead of collapsing toward the net, all five players shift to the puck side, cutting the ice in half and squeezing the carrier for time and space. It is aggressive, generates turnovers, and dies to one hard accurate cross-ice pass — the whole weak side is unoccupied by design. Some teams use it as their base system; more use it as a situational squeeze when they need the puck back.

![](diagram:dz-strong-side-overload)

---

## Comparison Table

| | **Low zone collapse (zone)** | **Man-on-man** | **Hybrid (man low / zone high)** | **Box+1** | **Collapsing box** |
|---|---|---|---|---|---|
| **Who takes the corner** | Strong-side D, plus the centre as second body | Whoever's assigned check went there — often a winger | Strong-side D and the low forward, locked on their men | The "+1" chaser only | Nobody. You concede the corner entirely |
| **Who has the net front** | Weak-side D | Whoever's check is standing there | Whichever of the low three is matched to the net-front forward | The two low players in the box | Both D, plus whoever else is inside |
| **Who covers the points** | Both wingers, high, one per side | The two wingers, man-marking the opposing D | Both wingers by area — until their man walks down | **Nobody, properly.** The two high box players sit at the tops of the circles, roughly 29 feet below the point, and close only when the puck arrives there | Nobody. Point shots are the accepted cost |
| **Opposing D walks down from the point** | **The known weakness.** Winger follows a few feet but doesn't chase; can become a free walk-in | Winger goes with them all the way, including into the corner | Winger tracks them man-on-man as soon as they cross the dots — this is the fix | Box holds; the +1 or nearest high player picks them up late | Absorbed into the box; they get a clean shot from the top of the circle (about 35 feet) |
| **Difficulty to learn** | Low | Low to understand, high to execute | Highest — everyone must agree where the line is | Lowest | Low |
| **What it concedes** | Point shots, the walk-down, extended possession, and the seam between areas | Picks, mismatches, exhaustion, and total collapse if one player loses their man | Confusion at the man/zone boundary; demands constant communication | The entire perimeter; you rarely get the puck back | Everything outside the house, and any breakout speed |
| **Breakout readiness when you win it** | Good — two wingers already high | Poor — you're standing wherever they put you | Good | Moderate | Poor — all five are below the circles |

---

## How to Tell Which System Your Team Plays

Ask the coach. That is genuinely the first answer, and one specific question gets you most of the way: **"When the puck is in our corner, does the winger stay on the point or go help?"** The answer separates zone from man immediately.

If you can't ask, watch one shift with a defensive-zone faceoff and look for these tells:

- **Watch the weak-side winger when the puck goes into the corner.** Do they stay at the blue line and then sag into the high slot? That's low zone collapse. Do they leave with the opposing defenceman? That's man or hybrid.
- **Watch what happens when an opposing defenceman walks down from the point.** Nobody follows past a few feet — zone. Somebody tracks them all the way — man or hybrid.
- **Count your players below the tops of the circles when the puck is behind your net — but count the *wingers*, not the heads.** Both a collapse and a hybrid put three low (two D and the centre), so a raw headcount tells you nothing. What separates them is **where the two wingers are and why**. In a collapse both wingers start on the points and only the weak-side one drops, into the high slot, and only while the centre is low — and it climbs straight back. In man or hybrid a winger leaves the point because a *body* left the point, and goes as far as that body goes, including into the corner. **Five low is neither: that is a collapsing box, which is a situational state rather than a system.**
- **Listen to the talk.** "I've got the net", "you take the corner", "shift over" is zone language. Names and "he's yours", "switch", "stay with him" is man language.
- **Watch the second defenceman.** If they never leave the goalmouth regardless of who is standing there, you're in a zone. If they follow a specific body out to the half-wall, you're in man.

### Most defensive-zone breakdowns are not effort problems

```facts
Key: Almost always both players worked hard — they were operating on different assumptions about who had whom, and skated hard in the wrong directions
Mindset: Knowing your system is a skill, not admin — a player who knows the structure and skates at 80% out-defends one who doesn't and skates at 100%
Action: Announce your intentions, not your observations — "I'm going to the corner, you've got my slot" resolves the ambiguity instead of describing it
Priority: When in doubt, default to the house — get inside, stick in a lane, cover the most dangerous unmarked player
```

This is the most important paragraph in this document.

When a goal goes in from the slot, the instinct on the bench is to say someone didn't work hard enough. Almost always, both players worked hard. What happened is that **two players were operating on different assumptions about who had whom** — the centre thought the weak-side winger was collapsing, the winger thought the centre was staying high; the defenceman thought his partner had the net, the partner thought the puck battle needed two. Both skated hard, in the wrong direction, at the same time.

Three consequences follow:

1. **Knowing your system is a skill, not admin.** A player who knows the structure and skates at 80% will out-defend a player who doesn't and skates at 100%.
2. **Announce your intentions, not your observations.** "He's coming down your side" is useful. "I'm going to the corner, you've got my slot" is far better, because it resolves the ambiguity rather than describing it.
3. **When in doubt, default to the house.** If you genuinely don't know whether someone is yours, get inside, get your stick in a lane, and cover the most dangerous unmarked player. You will almost never be badly wrong.

---

## Defending Specific Threats

Systems tell you where to stand. These are the recurring plays you'll actually face, and what to do about each.

### The cycle

```facts
Key: Attackers rotate the puck between the corner, the half-wall and behind the net, passing into the space they just left, until somebody chases out of position
Never: Chase the puck around the boards — let it come to you and defend the exit points, not the puck's current location
Read: Take away the next pass, not the current one — the man arriving is the threat
Position: Cut it at the goal line — meet a carrier coming out from below the goal line at the post, not in the corner
Convention: Under a collapse, be patient — the house is full and they aren't threatening you; under man or hybrid, stay on bodies
Action: Get one hard win — cycles end when somebody wins a puck battle, so send two, which in the collapse is the strong-side defenceman and the centre
```

**What it is:** attackers rotate the puck between the corner, the half-wall and behind the net, passing to a teammate who is arriving into the space they just left. It's a possession tactic designed to make you chase until someone is out of position.

**Defending it:**
- **Don't chase the puck around the boards.** The cycle wins when your five players are strung out following it. Let it come to you and defend the exit points, not the puck's current location.
- **Take away the *next* pass, not the current one.** The cycle is a sequence; the man arriving is the threat.
- **Cut it at the goal line.** The most valuable place to break a cycle is stopping a carrier who is trying to come out from below the goal line to the front of the net. Meet them at the post, not in the corner.
- **Under a collapse, be patient.** The house is full and they aren't threatening you. Time is on your side; they'll eventually force something.
- **Under man or hybrid, stay on bodies.** The cycle is specifically designed to beat area coverage, and man coverage low is the strongest answer to it.
- **Get one hard win.** Cycles end when somebody wins a puck battle. Two of you on one carrier — strong-side defenceman and centre in the collapse system — is how you get that.

### The low-to-high play

```facts
Key: The puck goes low to drag your coverage down, then back up to the point for a shot with your backs turned and traffic in front — it exists to punish low zone collapse
Never: Get sucked low as the strong-side winger — stay high, in the lane, between that defenceman and the net
Read: When the puck goes behind the net, expect the low-to-high next — close on your point as it disappears, not when it comes out
Action: Get out to the shot, don't sit under it — a winger at the hash marks blocks nothing; one closing hard at the top of the circle does
Action: As the puck goes high, the low players stop looking at it and start boxing out — the danger is the tip and the rebound
```

**What it is:** the puck goes down to the corner or behind the net, drags your coverage low, and then gets passed back *up* to the point for a shot with your defenders' backs turned and traffic in front. Coaching material routinely calls it one of the most common ways modern teams score, and it exists precisely to punish low zone collapse. *(Shot-**location** data is public and plentiful — [Shooting](../technique/shooting.md) covers what it says. What does not exist publicly is a classification of goals by the **play that produced them**, which is what a ranking like this would need, so treat "one of the most common" as coaching consensus rather than a measured figure.)*

**Defending it:**
- **The strong-side winger's discipline is the whole answer.** They stay high, in the lane, between that defenceman and the net. If they got sucked low, the low-to-high is free.
- **Recognise the trigger.** When the puck goes behind the net, expect the low-to-high next. Wingers should already be closing on their points as the puck disappears behind the goal line, not reacting when it comes out.
- **Get out to the shot, don't sit under it.** Close the distance to the shooter. A winger standing at the hash marks isn't blocking anything; a winger closing hard at the top of the circle is.
- **Everyone else finds a body.** The shot is only dangerous because of the tip and the rebound. As the puck goes high, the low players stop looking at the puck and start boxing out.

### The point shot with a screen

```facts
Key: Screening from outside the crease, without contact, is normally legal — the referee will not help you in real time
Action: Move the screen, don't watch it — get your body between them and your goalie's sightline
Technique: Full-checking leagues only — walking them out with leverage under the arms; anywhere else, take the position and hold it
Rule: Walking an opponent off an established position is a push — a minor where checking is barred (USA Hockey 604(c), Hockey Canada 7.3(a)) and an illegal hit in women's hockey under IIHF 101.1, where "any move by a Player to step or glide into an opposing Player" is at least a minor
Technique: Lift the stick, up rather than sideways and below their bottom hand — a screen with a free stick is a deflection waiting to happen, and this is the highest-value thing a net-front defender does
Rule: Only the IIHF's hands rule is flat — 55.1 makes a stick against or near the hands hooking outright, while USA Hockey 623 and Hockey Canada's Interpretation 1 to 8.2(a) reach the lift only where it stops the opponent passing, shooting or receiving
Rule: The NHL reaches the hands as slashing rather than hooking, and only for a forceful chop "that, in the judgment of the Referee, is not an attempt to play the puck" (61.1) — a clean lift for the puck is not one, so lift low anyway
Never: Block a shot from a screening position — you change the direction of a puck your goalie never saw
Technique: Block from close if you block at all — ten feet from the shooter, square, shin pads to the puck, stick down beside you
Action: Talk to your goalie — "screen left", "I've got the tip"; they are trying to find the puck through legs
```

**What it is:** they shoot from the blue line with a forward parked in front of your goalie. The shot doesn't need to be good; the goalie can't see it, and the rebound comes off a moving body.

**Defending it:**
- **Move the screen, don't watch it.** Screening from outside the crease, without contact, is normally legal — the referee will not help you in real time. Get your body between the screen and your goalie's sightline. **⚠️ Physically walking them out with leverage under the arms needs a full-checking league.** Taking and holding the position is not scoped to checking leagues; driving an opponent off theirs with no effort to play the puck is a minor under **USA Hockey Rule 604(c)** in every Competitive Contact classification — 12U and below, all girls'/women's, all non-check adult — and under **Hockey Canada Rule 7.3(a)**, which penalises a player who *"intentionally body-checks, bumps, shoves, or pushes any opposing player"* at U13 and below, in female hockey, and in any division a Member has approved. In women's hockey, where checking is restricted rather than barred, **IIHF Rule 101.1** allows pushing and leaning only *"provided that 'possession of the puck' remains the sole object of the two Players"* — and bars the walk-out itself: a stationary player *"is entitled to that area of the ice"*, *"it is up to the opponent to avoid body contact with such a Player"*, and *"any move by a Player to step or glide into an opposing Player will be assessed at least a minor penalty (2') for an 'illegal hit'"*, with a major (5') plus an automatic game misconduct above it. **Unless your league permits full body checking, stop at the box-out and the stick lift** — neither is scoped to checking leagues, and holding an established position is written as legal in **three of the four books**: the NHL and the IIHF at **Rule 56.1** (*"a player is allowed the ice he is standing on (body position) and is not required to move in order to let an opponent proceed"* — the IIHF's is that sentence in the plural, in its general book), and USA Hockey in the Note to **Rule 604(c)**, on players *"simply maintaining established body position"*. **Hockey Canada writes no equivalent sentence** — the only place its rulebook mentions body position is **Rule 8.1**, which permits an arm in a strength move *"provided they have body position"*, assuming body position rather than granting it — so there the entitlement is unwritten rather than written-legal. See [Body Contact and Battles → 1. Which League Are You Actually In?](../technique/body_contact_and_battles.md#1-which-league-are-you-actually-in) for which of those is yours.
- **Lift the stick — up rather than sideways, and below their bottom hand**, because at or near the hands **every book reaches the lift — but only one of them flatly**. Three call it hooking, and two of those three only where it has an effect: **IIHF Rule 55.1** — *"if the stick goes against the opponent's hands / or near the opponent's hands, it shall be penalized as 'hooking'"* — **USA Hockey Rule 623**, whose Note counts *"a stick placed on the hand/arm that takes away the ability for the opponent to pass or shoot the puck with a normal amount of force"*, and **Hockey Canada**'s Interpretation 1 to Rule 8.2(a), which allows the lift *"for the purpose of making a play on the puck"* but says a hooking penalty *"must be assessed"* where it *"contacts the opponent's hands and impedes their ability to pass, shoot, receive"*. **The NHL is the fourth, and it is not a licence:** its Rule 55.1 writes no hands sentence, but **Rule 61.1** makes a *"forceful or powerful chop with the stick on an opponent's body, the opponent's stick, or on or near the opponent's hands that, in the judgment of the Referee, is not an attempt to play the puck"* slashing instead — so a lift genuinely made on the puck, below the bottom hand and not chopped, sits outside that clause. [Body Contact and Battles → The stick lift](../technique/body_contact_and_battles.md#3-stick-checks--legal-effective-and-under-used) carries the full comparison. A screen with a free stick is a deflection waiting to happen; a screen with a lifted stick is just a person. This is the highest-value thing a net-front defender does.
- **Don't block the shot from a screening position.** Half-blocking a shot your goalie cannot see is worse than not blocking it, because you've changed the direction of an already invisible puck. If you're in the sightline, get out of it or take the man; let the puck through.
- **Block from close if you block at all.** Ten feet from the shooter, square, shin pads to the puck, stick down beside you. See [Body Contact and Battles](../technique/body_contact_and_battles.md).
- **Talk to your goalie.** "Screen left", "I've got the tip" — they are trying to find the puck through legs.

### The back door / weak-side seam

```facts
Key: While everyone watches the strong-side battle, an attacker drifts to the far post — one cross-ice pass and it is an open net
Priority: The chance every coverage system is most afraid of, and worth conceding almost anything else to prevent
Never: Watch the puck as the weak-side defenceman — eyes track the puck, body stays on the man at the back post
Technique: Lie your stick flat in the seam across the slot — it makes the play impossible even when the passer is open
Convention: Weak-side winger sags into the middle rather than standing pretty at the point — a body in the high slot is worth more than perfect point coverage
Action: Call the arrival, not the goal — "back door!" the moment he appears, not when the pass is on the way
```

**What it is:** while everyone watches the strong-side battle, an attacker drifts to the far post. One cross-ice pass and it's an open net. This is the chance every coverage system is most afraid of, and the one worth conceding almost anything else to prevent.

**Defending it:**
- **The weak-side defenceman never watches the puck.** Your eyes track the puck, your body stays on the man at the back post. If you find yourself facing the corner, you've already lost him.
- **Stick in the seam.** The pass has to cross the slot. A stick lying flat in that lane makes the play impossible even when the passer is open.
- **Weak-side winger sags into the middle** rather than standing pretty at the point. The seam runs through the high slot; a body there is worth more than perfect point coverage.
- **Call the arrival, not the goal.** "Back door!" the moment he appears, not when the pass is on the way.

### The walk-down from the point

```facts
Key: Instead of shooting, the opposing defenceman skates down toward the top of the circle — in a pure zone he crosses out of the winger's area and into nobody's
Action: Find out your team's version before you need it — this one is a coaching choice, not a rule of hockey
Convention: Under low zone collapse, follow a few feet and stay connected but do not chase into the corner, and call the switch loudly
Convention: Under man-on-man, you go with them all the way, wherever they go
Convention: Under hybrid, release from zone and pick them up man-on-man as soon as they cross the dots
Priority: When a fourth attacker arrives low, somebody gives up their area and it must not be the goalmouth — usually the centre absorbs him and the weak-side winger takes the high slot
```

**What it is:** instead of shooting, the opposing defenceman skates down from the blue line toward the top of the circle — about **35 feet** from the goal line — or all the way to the hash marks. In a pure zone system, they cross out of the winger's area and into nobody's, and get a clean look from there or an easy feed into the slot.

**Defending it — and this is a coaching choice, so know your team's version:**
- **Under low zone collapse:** the standard instruction is that the winger **follows them down a few feet and stays connected, but does not chase into the corner**, and calls the switch loudly so the centre and defencemen know a fourth attacker is arriving low. This is a genuine compromise, and it is the system's weak point.
- **Under man-on-man:** you go with them, all the way, wherever they go. Simple, and the reason the walk-down doesn't trouble man teams.
- **Under hybrid:** you release from zone and pick them up man-on-man as soon as they cross the dots. This is the cleanest answer of the three, and the main reason hybrids exist.
- **Everyone else:** when a fourth attacker arrives low, you are outnumbered down there. Somebody has to give up their area and it must not be the goalmouth. Usually the centre absorbs the extra man and the weak-side winger takes over the high slot entirely.

![](diagram:dz-walk-down-zone)

![](diagram:dz-walk-down-man)

### The net-front scramble

```facts
Priority: Body first, puck second — tie up the most dangerous stick before you look for the puck
Never: Lunge at the puck through your goalie — you will knock the puck loose or knock them off their post
Rule: The stick is legal for moving a loose puck, your glove and chest are not, and freezing it under the blade to force a whistle is its own minor (NHL 67.4; 63.2(i)) — so jab it out low rather than swinging, which NHL 60.1 strips of the accidental-contact defence
Rule: Outside your own crease, dropping to block a shot and having the puck die under you or lodge in your equipment is not a penalty — using your hands to make it unplayable is (NHL 63.2(v) and its NOTE; same in IIHF 63.2(V) and USA Hockey 614(a))
Rule: You may hand-pass in your own zone (NHL Rule 79.2), and the test is where the puck is, not where the skates are
Never: Hand-pass it out to a breaking winger — it is illegal the moment the puck itself has left the zone
Technique: Stay on your feet as long as possible — a defender on the ice is out of the play for two seconds, which is the whole scramble
Technique: Going down hands-and-head-first on a puck at the goalmouth puts them under four sets of sticks and skates — a coaching caution, not a rule, and the reason to prefer the stick
Rule: No rulebook protects you down there — NHL 61.1 penalises a chop "on or near the opponent's hands" only where the referee judges it "is not an attempt to play the puck", and over a loose puck it usually is
```

**What it is:** a rebound, a loose puck at the top of the crease, four bodies, two seconds. Coaches will tell you more goals come from here than from any highlight play. **The rebound half of that is countable, and it is substantial** — **11.4%** of NHL goals are scored within three seconds of a previous shot on goal by the same team, and **19.7%** within ten seconds; [Offensive Zone Play](offensive_zone_play.md) section 10 covers that figure and carries its source. Put it alongside shot-*location* data, which says the ice in front of the crease is the most dangerous on the rink ([Shooting](../technique/shooting.md) covers that), and the direction is well supported. What is still not published is a classification of goals by the **play that produced them**, so "more than any highlight play" stays a coaching comparison rather than a measured ranking.

**Defending it:**
- **Body first, puck second.** Tie up the most dangerous stick before you look for the puck. A player with a free stick at the goalmouth will score before you get there.
- **Don't lunge at the puck through your goalie.** You'll knock the puck loose or knock them off their post. Trust them to smother it and protect them while they do.
- **Whack it out with your stick.** Your stick is legal for *moving* the puck — a low jab, not a swing, since NHL 60.1 removes the accidental-contact defence from *"a wild swing at a bouncing puck"* and 60.3 makes it a double minor where injury results; freezing the puck under the blade to force a whistle is its own minor under 63.2(i). Your glove and your chest are not legal for moving it, and what happens if you use them is the whole of the next section.
- **Blocking a shot and having the puck die under you is not the offence.** Outside the crease, **deliberately** falling on the puck is a minor penalty (Rule 63.2(v)) — and that word carries a carve-out the rule prints in full: *"Any player who drops to his knees to block a shot should not be penalized if the puck is shot under him or becomes lodged in his clothing or equipment but any use of the hands to make the puck unplayable should be penalized promptly."* Reaching for it to hold it there is. The same carve-out is in IIHF 63.2(V) and USA Hockey 614(a).
- **You may hand-pass in your own zone.** Under NHL Rule 79.2, play is not stopped for a hand pass by players in their own defending zone. Batting a bouncing puck down or shoving it to a teammate in a scramble is legal in your own end.

  **The test is where the *puck* is, not where the skates are.** Rule 79.2: *"The location of the puck when contacted by either the player making the hand pass or the player receiving the hand pass shall determine the zone it is in."* So a defenceman standing with a skate over the blue line can legally glove a puck down as long as the puck itself is still in the zone — and conversely, batting a puck to a teammate is illegal the moment the puck has left the zone, wherever the players are standing. Don't hand-pass it out to a breaking winger.
- **Stay on your feet as long as possible.** A defender on the ice is a defender out of the play for two seconds, which is the whole scramble. **There is also a physical reason, and it is worth saying plainly because the rulebook will not say it for you.** Going down hands-and-head-first on a puck at the goalmouth puts your hands and your head under four sets of sticks and skates, all of them swinging at the same puck. **No rule protects you there.** NHL 61.1 penalises a chop *"on or near the opponent's hands"* only where it *"in the judgment of the Referee, is not an attempt to play the puck"* — and a stick coming down on a loose puck at the net front usually is exactly that. So the sticks that land on your glove in a goalmouth scramble are, in the referee's judgement, legal ones. **This is a coaching caution rather than a rule, and it is the reason to prefer the stick.**

### Handling a loose puck in your own crease

```facts
Rule: All four books let you catch it, provided you immediately knock it down or place it on the ice — NHL and IIHF 67.2, USA Hockey 618(a), Hockey Canada 10.2(a)(iii), which adds "without gaining or attempting to gain an advantage"
Never: Hold a puck you have caught, carry it, turn with it or throw it — that is the act every book penalises, and in your own crease it is the penalty shot
Rule: What buys the penalty is what you do after the catch, not how high it was — holding it, taking a stride, turning to avoid a check, or throwing it (NHL and IIHF 67.2(I); Hockey Canada Interpretation 4 to 10.2(a)(iii))
Rule: Under USA Hockey a hand closed OUTSIDE the crease and not opened immediately is a stoppage and a last-play face-off, not a penalty (618(a)) — but a hand closed on a puck that is in the crease is the penalty shot or optional minor (614(b), 618(a))
Rule: USA Hockey's minor under 618(a) is a different act — picking the puck up off the ice with the hand while play is in progress
Rule: A skater other than the goalie who covers a puck that is itself inside their own crease gives up a penalty shot — an awarded goal if your own net is empty (NHL 67.4, 67.5)
Rule: That awarded goal turns on the bare fact of the substitution under NHL and IIHF 67.5 and Hockey Canada 10.2(a)(vi) — USA Hockey alone conditions it, awarding the goal only where the act "has prevented an obvious and imminent goal" (614(b), 618(a))
Rule: All four books make the puck's location the test for that penalty shot, not the player's — NHL and IIHF 63.6, USA Hockey 614(b) and 618(a), Hockey Canada 10.2(a)(iv)-(v); USA Hockey alone lets the other side — not you — elect a minor instead (406(a)), so it never prices the offence lower
Rule: The converse — a minor where the puck is outside the paint and you are inside it — is written only by the NHL and the IIHF (63.6); neither Hockey Canada nor USA Hockey prints that sentence, so do not assume it
Rule: The catch is free; the hold is not. Height only sets the price of holding it — the crease runs four feet up to the top of the goal frame (NHL 1.7, 2.1), so above the crossbar is a minor and knee high in the paint the penalty shot (IIHF Situations 63.27 v 63.15/67.4)
```

**Start with the permission, because it is the half of this rule that makes the act free.** Every one of the four books expressly lets you catch a puck out of the air, provided you put it straight back down. NHL **Rule 67.2**: *"A player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice."* The IIHF's **67.2** is that sentence word for word. Hockey Canada's **10.2(a)(iii)** penalises closing your hand on the puck *"and, by doing so, gain[ing] an advantage"*, then excludes the honest catch in terms — it *"will not include a player who closes their hand on the puck to catch or stop the puck and immediately drops it to the ice without gaining or attempting to gain an advantage."* **Outside the crease, USA Hockey does not reach a penalty at all**: under **618(a)** a hand that does not open immediately means *"Play shall be stopped and a last play face-off shall occur"*, and its minor is reserved for a player who *"picks the puck up from the ice with their hand(s) while play is in progress."* ⚠️ **In the crease that same rule is the penalty shot or optional minor, because a hand that closes and does not open is holding the puck** — 618(a)'s own third paragraph reaches a defending player other than the goalkeeper who *"picks the puck up off the ice with their hand **or holds the puck** while play is in progress **and the puck is in the goal crease**"*, and **614(b)** says it again: *"or uses the hands to hold the puck while in the goal crease."* **So catch it if you must, knock it straight down, and no book penalises you for the catch.**

**What costs you is what you do next, not how high the puck was.** Every escalation in these rules is triggered by conduct after the catch. NHL and IIHF 67.2(I) reach the player who *"catches it and skates with it, either to avoid a check or to gain a territorial advantage"*. Hockey Canada's **Interpretation 4 to 10.2(a)(iii)** lists three, and none of them is a height: throwing the puck after closing your hand on it, trying *"to maneuver around another player while holding the puck"*, and *"tak[ing] a stride while holding the puck in their hand."* **That is the variable to manage. Knock it down and play it.**

**Now the price, for when you do hold it.** If a skater other than the goalkeeper *"falls on the puck, holds the puck, picks up the puck, or gathers the puck into his body or hands from the ice in the goal crease area"*, play stops and the other team gets a **penalty shot** — **NHL Rule 67.4**, whose words those are, and which opens *"If a defending player, except a goalkeeper…"* — your goalie may smother it, you may not. With your own goaltender pulled for an extra attacker the same act is an **awarded goal** (Rule 67.5). ⚠️ **Three of the four books attach no condition to that beyond the substitution itself.** The IIHF's **67.5** is the NHL's clause in the IIHF's wording — *"If a skater, when the goalkeeper has been replaced for an extra attacker, falls on the puck, holds the puck, picks up the puck, or gathers the puck into their body or hands from the ice in the goal crease area, the play shall be stopped immediately, and a goal awarded to the non-offending team"* — and Hockey Canada's **10.2(a)(vi)** awards it *"when the infraction occurs inside the offending team's goal crease and the goaltender has been legally substituted for an extra skater."* ⚠️ **USA Hockey alone conditions it**, awarding the goal only where the act *"has prevented an obvious and imminent goal"* (614(b); 618(a) says the same of the hand).

**The deciding factor is where the *puck* is, not where you are.** Rule 63.6 is explicit: *"If the puck is in the crease, penalty shot. If the puck is outside the crease and gathered into the body of a player (other than the goalkeeper) who is inside the crease, minor penalty."* **All four books make the puck's location the test for the shot. The converse — a minor where the puck is outside and you are inside — is written only by the NHL and the IIHF.** The IIHF numbers the rule 63.6 too and applies it in near-identical wording — its *"significant factor"* sentence is the NHL's word for word, and it writes *"goal crease"* for *"crease"* and spells out in full clauses what the NHL leaves elliptical. USA Hockey 614(b) fixes the moment of judgement — *"the decision as to whether the puck is in the crease is made at the moment the infraction occurs"* — and is the one book that lets the other side elect an optional minor in lieu of the shot (Rule 406(a)); **that election belongs to the non-offending team, not to you**, so it is never a discount on the offence.

⚠️ **Hockey Canada and USA Hockey each split the offence across two rules, and neither prints the contrast case — so do not carry the outside-puck minor into either book.** Hockey Canada's hand limb is **10.2(a)(iii)** and its body limb **10.2(a)(iv)**, *"Deliberately falls on or gathers the puck into their body while standing or laying on the ice"*; **10.2(a)(v)** escalates **both** to the shot *"when the infraction occurs inside the offending team's goal crease (see Rule 4.11 (a)(v) – Penalty Shots and Rule 1.5 (c) – Goal Crease)"*. Read alone those locating words could mean you or the puck — but 4.11(a)(v) reaches the **hand** only, while **Rule 1.5(c)** defines the crease as a *space* that *"will extend vertically to the level of the top of the goal frame"*, which is what a puck-located test needs. And **Interpretation 5 rules on the body limb**, not the hand: its ruling is *"Assess a Minor penalty under **Rule 10.2 (a)(iv)**"*, and its reason is in puck terms — *"The puck was not actually covered in the crease; therefore, no penalty shot may be awarded."* **The limit worth knowing is that in its facts the player and the puck are both outside the crease at the moment of the cover**, so it does not isolate the variable; its stated reason does. **USA Hockey is no more explicit than Hockey Canada.** Its 614(b) — *"or uses the hands to hold the puck while in the goal crease"* — is ambiguous read alone in exactly the same way, and is rescued only by the sentence after it; its plainest puck wording sits in a different rule, **618(a)**: *"picks the puck up off the ice with their hand **or holds the puck** while play is in progress **and the puck is in the goal crease**."*

**The crease is a volume, not a footprint, and that is what sets the price — never whether you pay one.** All four books define it upward: NHL Rule 1.7 *"extending vertically four feet (4') to the level of the top of the goal frame"* — four feet because that is how high the goal frame is, NHL 2.1 setting the posts *"extending vertically four feet (4') above the surface of the ice"* — IIHF 1.7 *"extends vertically until the top of the crossbar"*, Hockey Canada 1.5(c), and the Note to USA Hockey 618(a), *"the goal crease shall extend from the ice to the top of the crossbar of the goal frame."* The IIHF Situation Handbook rules both ways on the height. In Situation 63.27 a defender in his own crease *"catches the puck (above the crossbar), turns to avoid opposing players, and then tosses it towards the boards"* — and *"Since the puck was above the crossbar when caught and thrown, it was not considered to be in the crease. Therefore, only a minor penalty is warranted."* In Situations 63.15 and 67.4 the puck is **knee high** and the defender *"catches the puck, turns to avoid the attackers, drops the puck to the stick and shoots it out"* — penalty shot. ⚠️ **Read those two together and note what is doing the work.** The player turned and threw in both; the height changed only whether the minor became the shot. **Neither Situation is authority for catching the puck being an offence, and neither is a reason to reach higher for it** — the crossbar is four feet up, so "above the crossbar" means reaching up, in a scramble, with sticks coming down. The free play in both Situations was the one neither player made: knock it down. (The Handbook's own Foreword places it below the Rulebook — *"in case of any contradictions, the valid IIHF Rulebook is always the basis"* — so read these as worked applications, not as rule text.)

**And moving with it does not cure it.** Situation 67.6 has a defender, with his own net empty, grab a puck *"out of mid-air (around the height of the waist)"* and drop it **outside** the crease; the ruling is *"an Awarded Goal to Team B."* The permission in 67.2 is to put the puck down **immediately**, not to carry it somewhere better first.

Your goaltender's exemption is from the penalty shot only: he can still take a delay-of-game minor for freezing a puck when nobody is checking him (Rules 63.2(vii), 67.3(ii)) — see [Goaltender](../positions/goaltender.md), which states plainly that how those two interact is a reading, because the NHL publishes no interpretation of it.

---

## When the System Breaks

```facts
Priority: Bodies to the net front immediately — not to the puck
Technique: If you can't reach anyone, lie your stick flat in the passing lane through the slot
Read: Find the most dangerous unmarked player — scan the house, not the puck; in a scramble it is almost never the person holding it
Action: Count — outnumbered low, somebody high comes down and says so; even, match up loudly: "I've got 19", "you take the net"
Action: Get the puck out any way you can — a clear that concedes possession has still bought your team a change
Action: Reset before you attack — the commonest second goal is the one conceded straight after surviving the first
Key: The moment you realise you don't know your assignment, go to the middle — every mistake inside the house is smaller than the same one outside it
```

Every system document describes an orderly world. A large share of your defensive-zone time will not look like that — often enough that it deserves its own plan: a broken play, a bad change, a puck ricocheting off shin pads, three of you below the goal line and nobody where the diagram says. *(How large a share is not something anybody has published; the "roughly a third" figure you sometimes hear is not sourced and is not used here.)* Systems don't cover this state, so players freeze, and freezing is what turns a scramble into a goal.

Here is the priority order when structure is gone. Work down it and don't skip.

**1. Bodies to the net front, immediately.**
Not to the puck — to the front of the net. The most dangerous thing on the ice during a scramble is an unmarked player at the goalmouth, and the second most dangerous is nobody standing there when the puck squirts out. If you are the closest player and unsure what to do, go and stand between your goalie and the nearest opponent.

**2. Sticks in lanes.**
If you can't reach anyone, lie your stick flat in the passing lane through the slot. Broken plays are decided by passes that shouldn't have got through. A stick on the ice is defence you can perform while out of position.

**3. Find the most dangerous unmarked player.**
Scan the house, not the puck. Ask "who could score in the next two seconds?" and go and stand on them. In a scramble the answer is almost never the person with the puck — it's the person who's about to receive it.

**4. Count.**
Are you outnumbered low? Then somebody high has to come down, and the person who does should say so. Are you even? Then match up, loudly: "I've got 19", "you take the net". A scramble ends the instant five people have re-agreed who has whom.

**5. Get the puck out any way you can.**
Once you touch it, get it out. Off the glass, around the boards, into the neutral zone, off a shin pad. Nobody is grading you. A clear that concedes possession has still bought your team a change and reset the coverage — which is the whole point.

**6. Reset before you attack.**
When it's over, take the extra second to re-form. The most common second goal is the one conceded immediately after surviving the first, because everyone relaxed while three attackers were still in the zone.

**The habit to build:** the moment you realise you don't know your assignment, **go to the middle**. Every mistake made inside the house is a smaller mistake than the same one made outside it.

---

## Clearing the Zone

```facts
Action: Decide before you touch it — scan while the battle is still going, so you already know whether it's the winger, the centre or the glass
Priority: Controlled exit whenever it is genuinely available, then a rim or a chip off the glass, then anything that ends the shift
Convention: Under low zone collapse the pass goes to the winger coming down the wall to between the hash marks and the goal line — not to the blue line
Rule: Off the glass and out is legal; putting the puck directly out of play from your own defending zone is a two-minute delay of game (NHL Rule 63.2(iii)), with three narrow carve-outs
Rule: USA Hockey has no equivalent — Rule 610(c) penalises only a deliberate shoot-out, and 631(d) makes an accidental one a last-play faceoff
Risk: Ice it at even strength and the puck comes straight back — your tired line cannot change and cannot take a timeout
Rule: Shorthanded you may ice the puck freely (NHL Rule 81.6), but two carve-outs apply under USA Hockey and the NHL — check your league; Special Teams covers both
Rule: Your goalie may only play the puck behind the goal line inside the trapezoid (NHL Rule 27.8) — most rec, beer-league and youth associations don't use it, so find out — the sole exception is a goalie keeping skate contact with the crease
Rule: The goalkeeper's restricted area is IIHF Rule 27.7, not the NHL's 27.8 — and in England and Wales its status is unsettled, because England Ice Hockey's Rules & Regulations 22.3 say the restricted area is "not currently enforced"; keep your goalie inside it and ask your league
Never: Cheat up the ice — the puck should leave the zone before your third forward does
```

Winning the puck is only half the job. The handoff from coverage into a breakout is where good defensive shifts become good shifts. Full detail in [Breakouts](breakouts.md); this is the transition itself.

**Decide before you touch it.** The single biggest cause of turnovers on a zone exit is a defenceman receiving the puck and *then* starting to look. Scan while the battle is still going — see [Scanning and Anticipation](../hockey-iq/scanning_and_anticipation.md) — so that when the puck is yours you already know whether it's the winger, the centre, or the glass.

**The three outcomes, in descending order of value:**

1. **Controlled exit** — a pass to a winger on the wall or the centre swinging low, and out with possession. Under low zone collapse your wingers are high on the points *while the other team has the puck*, and **they come down the wall to between the hash marks and the goal line as you win it** — that is where the pass goes, not the blue line. Being high is what makes the trip short; it is not the receiving position. Take this whenever it's genuinely available. See [Breakouts](breakouts.md).
2. **Uncontrolled but safe exit** — **rim** it around the boards, chip it off the glass, or bank it out. A *rim* is a hard puck sent **onward** around the boards, following the curve of the rink to the next teammate along; it is not a **reverse**, which sends the puck **back** against the flow into the space a forechecker has just vacated. Either way there is no possession, no chance against, and your team gets to change. This is a good play, not a failure.
3. **Anything that ends the shift.** When it's bad, it's bad. Get it out.

**Rules that constrain the clear:**

- **Off the glass and out is legal; over the glass is a penalty.** Under NHL Rule 63.2, shooting or batting the puck **directly out of the playing surface from your own defending zone**, with no deflection, is a two-minute minor for delay of game. Hitting the glass and staying in play is fine — the penalty is for putting it into the crowd. Note that this version, Rule 63.2(iii), applies only in your defending zone: there it does not matter whether you meant it. It is not quite strict liability, because the rule carries three carve-outs — it applies *"except where there is no glass"*, and the NOTE to it adds that *"when the puck is shot into the players' bench, the penalty will not apply"* and that *"when the puck goes out of the playing area directly off a face-off, no penalty shall be assessed."* Over the glass **behind** the bench is still a penalty. Clause **63.2(ii)** is wider — a player who **deliberately** shoots or bats the puck out of the playing area *"from anywhere on the ice surface"* takes the same minor. So from the neutral zone you are safe only if it was an accident. **USA Hockey has no equivalent to the defending-zone clause, so this is one to check before you decide how safe a high clear is.** Rule 610(c) penalises only a player who *"delays the game by deliberately shooting or batting the puck outside the playing area, including after a stoppage of play"*, and Rule 631(d) makes the accidental version a stoppage rather than a penalty: *"If the puck is accidentally shot or deflected out of play, or onto the goal netting, a last play face-off will occur in the zone where the puck was shot or the deflection occurred."* Under that book an unintended flip over the glass from your own end costs you a defensive-zone faceoff, not two minutes.
- **Icing applies at even strength.** A hard flat clear from your own end that reaches their goal line untouched brings the puck straight back for a defensive-zone faceoff, and **your line cannot change** and cannot take a timeout. That's the real cost — you've cleared the puck and kept your tired players on the ice. Aim clears wide and high off the glass, or short enough to die in the neutral zone.
- **Shorthanded, ice it freely — once you have checked that your league lets you.** A penalty-killing team may ice the puck with no whistle (Rule 81.6). Two carve-outs, both owned by [Special Teams](special_teams.md): USA Hockey gives the exemption only at Youth 15-Only and above, Girls 16U and above, High School and Adult (Rule 624(b)(1)), and the NHL withdraws it from a team shorthanded by a major that has left the penalty bench empty.
- **Your goalie cannot go and get a puck in the corner.** Under NHL Rule 27.8 the goalkeeper may only play the puck behind the goal line inside the **trapezoid**, and the sole exception is maintaining skate contact with the crease. Retrieval outside it is on the defencemen. This applies in the NHL (since 2005-06), the KHL, and IIHF play (since the unified 2021-22 rulebook). **Most rec, beer-league and youth associations do not use the trapezoid** — if you play under those rules, your goalie is a genuine third puck-handler behind the net and your entire retrieval and clearing game changes. Find out. See [Goaltender](../positions/goaltender.md). **🇬🇧 In England and Wales, treat this as unsettled.** The IIHF book carries the rule (Rule 27.7, not the NHL's 27.8), but England Ice Hockey's *Rules & Regulations* 22.3 say the restricted area is *"not currently enforced"* and the 2025-26 In-House Rules do not mention it — though their Introduction says *"unless otherwise stated, all rules will be enforced in line with the IIHF Rule Book"*, which points the other way. Assume it binds, ask your league, and look behind the net to see whether the lines are painted at all. Treat an unmarked sheet as a hint rather than a ruling: IIHF 27.7 turns on *"the position of the puck"*, not on the markings.

**Structure first, speed second.** It is tempting to leave the zone the instant the puck turns over, and forwards cheating up the ice is how a cleared zone becomes an odd-man rush the other way. Exit as a group. The puck should leave the zone before your third forward does.

---

## Common Mistakes

- **Not knowing which system you're playing.** The root cause of most of what follows. Ask on day one.
- **Both defencemen drawn to the same puck with neither knowing who has the goalmouth.** The doorstep is empty and one pass beats five players. Some aggressive systems do send both of you below the goal line deliberately — normally once a forward has already dropped in to cover the doorstep. What is never optional is that somebody has taken the goalmouth before you go, so find out what your team plays.
- **Wingers drifting into the corner in a collapse system.** You've abandoned the point *and* your team's best breakout outlet, to be the third player in a battle that already had two.
- **The weak-side winger failing to collapse** when the centre goes low, leaving the high slot open — or collapsing when the *strong*-side winger should have stayed and both sagging at once.
- **Chasing the puck instead of covering the pass.** Zone coverage waits; the player who chases is the one who breaks the shape.
- **Watching the puck at the net front.** Eyes on the puck, body on the man — get that backwards and your check scores from six feet.
- **Cross-checking the net-front player repeatedly.** The cross-check has no ceiling of two minutes: NHL 59.3 reaches a **major** on severity alone and 59.5 makes the game misconduct automatic with it. Officials are specifically told to watch the net front for it — an enforcement emphasis rather than a claim about frequency, since it is not the most-called penalty there and the stick fouls that really do concentrate there are hooking and slashing ([Body Contact and Battles](../technique/body_contact_and_battles.md) owns those figures). **Lift their stick instead — up rather than sideways, and below their bottom hand.** That is not risk-free: IIHF Rule 55.1 is flat — *"if the stick goes against the opponent's hands / or near the opponent's hands, it shall be penalized as 'hooking'"* — USA Hockey 623 reaches *"a stick placed on the hand/arm"*, NHL 54.2 reaches holding the stick and 61.1 a chop near the hands, and under Hockey Canada a lift that contacts the head or neck and causes injury is a double minor, rising to a major and game misconduct for a *"pitchfork action in lifting the stick"*. **Taken low it is still much the cheaper of the two.**
- **Blocking a shot from a screening position**, deflecting a puck your goalie never saw.
- **Following your check into harmless ice** in a man system while their teammate walks into the slot you left.
- **Freezing when the structure breaks** instead of defaulting to the house.
- **Holding a loose puck you have caught, instead of knocking it straight down.** ⚠️ **Catching it is not the mistake — every book permits that.** NHL and IIHF **Rule 67.2**: *"A player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice."* Hockey Canada's 10.2(a)(iii) excludes from the minor *"a player who closes their hand on the puck to catch or stop the puck and immediately drops it to the ice without gaining or attempting to gain an advantage"*, and under USA Hockey 618(a) a hand closed **outside** the crease and not opened immediately is a stoppage and a last-play face-off, not a penalty at all — **but a hand closed on a puck that is *in* the crease is the penalty shot or optional minor** (614(b), 618(a)). **The mistake is what comes after the catch** — holding it, taking a stride with it, turning away from a checker, or throwing it. **And if the puck is inside your own crease when you hold it, that is a penalty shot** (NHL 67.4), or an **awarded goal** if your own net is empty — NHL and IIHF 67.5 and Hockey Canada 10.2(a)(vi) on the bare fact of the substitution, USA Hockey alone conditioning it on the act having *"prevented an obvious and imminent goal"* (614(b)). It is the **puck's** position that decides, not yours, in all four books. ⚠️ **The crease is a volume, four feet up to the top of the goal frame — so height decides which penalty you pay, never whether you pay one.** Do not read the Situation Handbook's above-the-crossbar minor (63.27) as a reason to reach higher for the puck: in that Situation, and in the knee-high ones that give the penalty shot (63.15, 67.4), the player turned away and released, and that conduct is what produced a penalty at all. **Whack it out with your stick instead — a low jab, not a swing, and not through your goaltender, who you will knock off his post.** Your stick is legal for *moving* the puck; your glove and your chest are not. NHL 60.1 says in terms that *"a wild swing at a bouncing puck would not be considered a normal windup or follow through"*, so the accidental-contact defence does not cover it, and 60.3 is a **double minor** where injury results. Freezing it in the blue paint is the goaltender's job and nobody else's, and even he can take a delay-of-game minor for an unnecessary freeze when nobody is checking him (Rules 63.2(vii), 67.3(ii)) — [Goaltender](../positions/goaltender.md) covers how those two rules interact and is candid that the NHL publishes no interpretation of it. The full four-book reconciliation, including which books do *not* print the converse, is in [Handling a loose puck in your own crease](#handling-a-loose-puck-in-your-own-crease) above.
- **Cheating up ice before the puck is out.** The clear becomes a turnover and you're a spectator on the rush back.
- **Silent defending.** Coverage is a shared model. Unspoken, it isn't shared.

## Check yourself

*Answer each question before you go on — a real attempt, not a guess — then go
and check, because the checking is the part that does the work. Producing an
answer and getting it wrong is worth more than recognising a right one, but only
when the right answer follows: the section named with each question, and the Key
Takeaways after them, are where you get it. Where the answer lives in another
document, that is named too.*

1. The puck goes into your corner and you are the weak-side winger. Do you leave
   the point? This has no single answer — say what it depends on, and give the
   one question you can ask your coach that gets you most of the way. Then say
   what that question does *not* settle. *(§How to Tell Which System Your Team
   Plays, §The weak-side winger's collapse, §Hybrid)*

2. Their defenceman does not shoot from the point — he skates down toward the
   top of the circle. What do you do? There are three legitimate answers here;
   name them and say which system each belongs to. *(§The walk-down from the
   point)*

3. "Never both defencemen on the puck." That is not quite what this document
   says. State the version it actually gives, and say what stays true under
   every system. *(§The Universal Principles)*

4. An opposing forward is parked in your goalie's sightline, outside the crease,
   not touching anyone. Is that legal? What may you do about it, and what is the
   one thing you must not do from a screening position? *(§The point shot with a
   screen, §The Universal Principles)*

5. There is a loose puck in your own crease and bodies everywhere. What may you
   use on it, what must you not do, and what does the wrong choice hand the
   other team? *(§The net-front scramble)*

6. A goal goes in from the slot and the bench says somebody did not work hard
   enough. What does this document say almost always happened instead, and what
   kind of call would have prevented it? *(§Most defensive-zone breakdowns are
   not effort problems)*

7. Structure is gone — three of you below the goal line, the puck loose, nobody
   where the diagram says. What is the first thing you do, and what is the
   default the instant you realise you do not know your assignment? *(§When the
   System Breaks)*

---

## Key Takeaways

1. **Find out which system your team plays before you need it.** One question gets you most of the way: when the puck is in our corner, does the winger stay high on the point or come down and help? That tells you the **family**, not the system — a hybrid marks man-on-man below the dots and looks identical to man coverage from the stands, and coaching material calls the hybrid the most common arrangement in professional hockey.
2. **Low zone collapse is the house default assumed here:** strong-side D on the puck, weak-side D at the goalmouth, centre as low support, both wingers high on the points, and the weak-side winger sagging into the high slot when the centre goes low — climbing straight back up as the puck leaves the corner. Coaching material describes it as the system taught first in North American minor, junior and rec hockey, but nobody publishes a count of what teams actually run.
3. **Under low zone collapse the wingers do not go to the corner; under man-on-man they follow their check down there.** That tells you the family rather than the exact system — a hybrid marks man-on-man below the dots too, so it will look like man coverage from the stands.
4. **The principles that survive every system:** defend the middle before the outside, stay on the defensive side, somebody always has the goalmouth, sticks flat in passing lanes, box out at the net by lifting the stick — up rather than sideways and below their bottom hand, because at or near the hands every book reaches the lift, though only the IIHF's rule is flat (55.1): USA Hockey 623 and Hockey Canada's Interpretation 1 to 8.2(a) call it hooking only where it stops the opponent playing the puck, and the NHL reaches it as slashing and only for a chop that is not an attempt to play the puck (61.1), which a clean lift is — rather than cross-checking the back, and talk early. Two riders: "middle before outside" tells you which chance to concede, not where to stand — a man system honours it by staying glued to the player who would receive the seam pass. And the rule about your partner is conditional rather than absolute: both defencemen go low only when the two of you know who has taken the goalmouth.
5. **Low zone collapse's real weakness is not the point shot — it is the walk-down from the point.** Hybrid coverage, man-on-man below the dots and zone above, exists mainly to fix it; teams put that dividing line in different places, so learn your team's version. How you defend the walk-down is itself a coaching choice.
6. **Man-on-man leaves nobody unmarked, and dies to picks, mismatches and any single lost battle.** As a pure system it is much less common than it was; what mostly survives is the hybrid.
7. **Most defensive-zone breakdowns are not effort failures.** They are two hard-working players operating on different assumptions about who has whom. Announce your intentions, not your observations. (No published tracking data breaks goals down by cause, so treat that as coaching consensus rather than a measured fact.)
8. **When structure is gone:** bodies to the net front, sticks in lanes, find the most dangerous unmarked player, say out loud who you have, get the puck out any way you can — then reset before you attack. When in doubt, go to the middle.
9. **Winning the puck is half the job.** Decide where it is going before it is yours, and get it out of the zone before your third forward leaves. Under low zone collapse the pass goes to the winger coming down the wall to between the hash marks and the goal line, not to a winger still standing at the blue line.
10. **Off the glass and out is a good play; over the glass from your own zone is two minutes.** Under NHL Rule 63.2(iii) the test is direct and non-deflected, with narrow carve-outs for a puck that goes into the players' bench, one that comes directly off a faceoff, and rinks with no glass — but over the glass *behind* the bench is still a penalty. **USA Hockey has no equivalent:** Rule 610(c) penalises only a deliberate shoot-out, and 631(d) makes an accidental one a faceoff at the last play location.
11. **A loose puck in your own crease: catch it if you must, but knock it straight down.** All four books expressly permit the catch — NHL and IIHF **Rule 67.2**, *"A player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice"*, Hockey Canada 10.2(a)(iii), USA Hockey 618(a) — and all four penalise what comes next: holding it, striding with it, turning away, throwing it. Hold a puck that is itself inside your crease and it is a **penalty shot** (NHL 67.4), or an **awarded goal** if your own net is empty (67.5) — the NHL, the IIHF and Hockey Canada (10.2(a)(vi)) conditioning that on nothing beyond the substitution, USA Hockey alone on the act having *"prevented an obvious and imminent goal"* (614(b)). ⚠️ **And under USA Hockey the crease is what turns the closed hand from a stoppage into a penalty at all** (618(a)). It is the puck's position that decides, not yours, in all four books; the converse minor — puck outside, you inside — is written only by the NHL and the IIHF. The crease runs four feet up to the top of the goal frame, so height changes which penalty you pay, never whether you pay one. **Use the stick.**

---

*Sources — retrieved 27 July 2026:*

*Systems and coverage: [Ice Hockey Systems – Layered Defensive Zone Coverage](https://www.icehockeysystems.com/hockey-systems/layered-defensive-zone-coverage) · [The Coaches Site – Sagging Zone Defensive Coverage: A Breakdown](https://members.thecoachessite.com/article/sagging-zone-defensive-coverage-a-breakdown) · [Blueshirt Banter / Blue Seat Blogs – Hockey Systems 101: Defensive Zone Strategies](https://blueseatblogs.com/2013/02/19/hockey-systems-101-defensive-zone-strategies/) · [HockeyShare – Defensive Zone Coverage: Low Collapse](https://www.hockeyshare.com/drill/7043/) · [HockeyShare – Defensive Zone Coverage: Box +1](https://www.hockeyshare.com/drill/5563/) · [Elite Hockey Canada – Defensive Zone](https://www.elitehockeycanada.com/team-play/zone-play/defensive-zone) · [Coach Nielsen – Defensive Zone Coverage](https://coachnielsen.wordpress.com/2010/01/30/defensive-zone-coverage/)*

*Modern application and analysis: [Sound Of Hockey – Dave Hakstol's Scheme and Philosophies: Defensive Zone Coverage](https://soundofhockey.com/2022/02/21/kraken-coach-dave-hakstols-scheme-and-philosophies-defensive-zone-coverage-part-3/) · [Hockey Tactics Newsletter – Man-on-Man vs. Zone Defense](https://jhanhky.substack.com/p/man-on-man-vs-zone-defense) · [RSF Performance – The Three Main D-Zone Coverages in Modern Hockey](https://rsfperformance.ca/2023/07/diving-into-the-three-main-d-zone-coverages-in-modern-hockey/) · [WBS Penguins – A Guide to Defensive Strategy in Ice Hockey](https://www.wbspenguins.com/blog/defensive-hockey-a-guide-to-team-strategy/) · [Athletes Untapped – Mastering Defensive Zone Coverage](https://athletesuntapped.com/blog/the-fortress-mastering-defensive-zone-coverage-in-ice-hockey/)*

*Rules: [NHL Official Rules 2025-2026 (PDF)](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) (Rule 1.7 Goal Crease — the crease area *"extending vertically four feet (4') to the level of the top of the goal frame"*, Rule 27.8 Goalkeeper's Restricted Area, Rule 63.2 Delay of Game, **Rule 63.6 Penalty Shot** — the puck-location test: *"The significant factor when determining whether or not a penalty shot is warranted is the location of the puck at the time it was held, grabbed or gathered into the body"* — **Rule 67.2**, which permits the catch — *"A player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice"* — and penalises at (i) the player who *"catches it and skates with it, either to avoid a check or to gain a territorial advantage"*, **Rule 2.1**, which sets the goal posts *"extending vertically four feet (4') above the surface of the ice"* and so fixes the height of the crease ceiling, Rule 67.4 Handling Puck in the Crease and Rule 67.5, the awarded goal where the goalkeeper has been replaced by an extra attacker, **Rule 60 High-sticking** — 60.1, which withholds the accidental-contact defence from *"a wild swing at a bouncing puck"*, and 60.3, the double minor where stick contact above the waist causes injury *"in the manner of drawing blood or otherwise"* — Rule 69 Interference on the Goalkeeper, Rule 79 Hand Pass, Rule 81 Icing including the major-penalty carve-out in 81.6, **Rule 55.1 Hooking**, which writes no hands sentence, and **Rule 61.1 Slashing**, which reaches a *"forceful or powerful chop… on or near the opponent's hands that, in the judgment of the Referee, is not an attempt to play the puck"*) · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — Rule 610(a) (a minor for deliberately freezing the puck along the boards or goal frame), Rule 610(c) (a minor only for **deliberately** shooting or batting the puck outside the playing area), Rule 631(d) (an accidental one is a last-play faceoff in the zone it was shot from), and Rule 624(b)(1), the classification restriction on the shorthanded icing exemption, and **Rule 625(b)** (the flat bar on a goal with an attacking player in the crease, and its push-in relief) with **625(a)(8)** (the minor, which requires physical contact); read in full for a goaltender-screening or goaltender-vision provision, of which it has none — its one *"protective screen"*, at **625(a)(1)**, is a screen set on a checker, not on a goaltender — and **Rule 604 Body Checking** — 604(a), the Competitive Contact classifications, and 604(c), the minor for deliberate physical contact with an opponent with no effort to legally play the puck, and **Rule 623 Hooking**, whose Note counts *"a stick placed on the hand/arm that takes away the ability for the opponent to pass or shoot the puck with a normal amount of force"*, and **Rule 614(b)** (the penalty shot / optional minor for covering the puck, and the moment of judgement — *"the decision as to whether the puck is in the crease is made at the moment the infraction occurs"*) and **Rule 618(a)**, under which a hand closed **outside the crease** that does not open immediately is not a penalty at all — *"Play shall be stopped and a last play face-off shall occur any time a player (except the goalkeeper) closes their hand on the puck and does not immediately drop the puck to the ice"* ⚠️ **That exemption is for a hand closed outside the crease.** A hand closed on a puck that is *in* the crease is the penalty shot or optional minor under 614(b) and 618(a)'s own third paragraph — the minor being reserved for a player who *"picks the puck up from the ice with their hand(s) while play is in progress"*, and the same offence written for the hand and carrying the book's plainest puck wording — *"picks the puck up off the ice with their hand or holds the puck while play is in progress and the puck is in the goal crease"* — with its Note that *"the goal crease shall extend from the ice to the top of the crossbar of the goal frame"*; read with **Rule 406(a)**, under which *"the non-offending team may, prior to the penalty shot, elect that the minor or bench minor penalty be assessed to the offending player or team in lieu of the penalty shot"* · [Hockey Canada Playing Rules 2026-2028 (PDF)](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) — **Rule 8.5 Interference with the Goaltender** and its Interpretations 1, 2 and 3: the crease bar, which is **not** flat — the Goal Crease Area paragraph allows a teammate's goal where *"the player who was in the goal crease does not attempt to play the puck, interfere with the play or obstruct the Goaltender's view or movements"* — the definition of the foul as impeding the goaltender *"by actual physical contact"*, Interpretation 3's goaltender-vision test, which reaches a player standing in the crease and no further, and Interpretation 2's direction that the referee *"should also penalize the defending player who committed the initial foul"*; and **8.5(b)** and **8.5(c)**, the tiers above the minor — a major and game misconduct at the referee's discretion *"based on the degree of violence of impact"* and mandatorily for a player who *"charges the goaltender"* or who *"injures an opponent by an Interference with the Goaltender infraction that would otherwise call for a Minor penalty"*, and a match penalty for attempting to injure or deliberately injuring a goaltender by interference — and **Rule 7.3(a) Body-Checking**, the minor for a player who *"intentionally body-checks, bumps, shoves, or pushes any opposing player"* in the divisions it names, and **Interpretation 1 to Rule 8.2(a)**, which allows a stick lift *"for the purpose of making a play on the puck"* but says a hooking penalty *"must be assessed"* where it contacts the opponent's hands; and **Rule 10.2**, whose preamble permits a player *"to stop, knock down, or push the puck with their hand"* and whose **Interpretation 4 to 10.2(a)(iii)** lists the three acts that do produce the minor — throwing the puck after closing the hand on it, trying *"to maneuver around another player while holding the puck"*, and *"tak[ing] a stride while holding the puck in their hand"*; and **Rule 10.2(a)(iii)–(vi)**, whose hand limb excludes *"a player who closes their hand on the puck to catch or stop the puck and immediately drops it to the ice without gaining or attempting to gain an advantage"*, and which splits the offence into a hand limb (iii) and a body limb (iv) — *"Deliberately falls on or gathers the puck into their body while standing or laying on the ice"* — and escalates **both** to a penalty shot at (v) *"when the infraction occurs inside the offending team's goal crease (see Rule 4.11 (a)(v) – Penalty Shots and Rule 1.5 (c) – Goal Crease)"*, and to an awarded goal at (vi) where the goaltender has been substituted for an extra skater; **Rule 4.11(a)(v)**, which reaches the **hand** only — a defending player who *"picks up the puck from the ice with their hand **while the puck is in the goal crease**"*; **Rule 1.5(c)**, defining the crease as a space that *"will extend vertically to the level of the top of the goal frame"*; and **Interpretation 5 to Rule 10.2(a)(v)**, whose ruling is on the **body** limb — *"Assess a Minor penalty under Rule 10.2 (a)(iv)"* — and whose reason is *"The puck was not actually covered in the crease; therefore, no penalty shot may be awarded"*, though in its facts the player and the puck are both outside the crease at the moment of the cover · [IIHF Official Rulebook 2025/26 (Version 1.1, July 2025)](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf) — **Rule 101.1 Illegal Hit in Women's Hockey**, read in full: the permission to bodycheck only *"when there is a clear intention of playing the puck"*, the stationary player's entitlement to her ice, the bar on *"any move by a Player to step or glide into an opposing Player"*, and the minor / major-plus-automatic-game-misconduct range, **Rule 55.1 Hooking**, whose hands sentence has no counterpart in the NHL's, and **Rule 63.6**, whose *"significant factor"* sentence is the NHL's word for word, with *"goal crease"* for *"crease"* and full clauses where the NHL's are elliptical — while IIHF **67.4** has no operative text of its own, reading in full *"This rule is described under"* and pointing to Rule 63.6, **Rule 67.2**, whose permission sentence is the NHL's word for word — *"A Player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice"* — and **Rule 1.7**, under which the Goal Crease Area *"extends vertically until the top of the crossbar"* · [IIHF Situation Handbook 2025/26](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) — Situation 63.27, where a puck caught above the crossbar *"was not considered to be in the crease. Therefore, only a minor penalty is warranted"*, against Situations 63.15 and 67.4, where a puck taken knee high in the crease is a penalty shot — in all three of which the player also *"turns to avoid"* opponents before releasing the puck — and Situation 67.6, where a defender with his own net empty grabs the puck *"out of mid-air (around the height of the waist)"* and drops it **outside** the crease, ruled *"an Awarded Goal"*; its Foreword ranks it below the Rulebook — *"in case of any contradictions, the valid IIHF Rulebook is always the basis"* · [Scouting The Refs – Hand Pass Hysteria](https://scoutingtherefs.com/2025/12/50600/hand-pass-hysteria-whats-going-on-in-the-nhl/) · [Scouting The Refs – Puck Over Glass Penalty](https://scoutingtherefs.com/2020/09/29905/puck-over-glass-penalty-wreaks-havoc-in-playoff-ots/) · [Hockey Canada Rule Book – Rule 1.5 Goal Crease](http://rulebook.hockeycanada.ca/english/part-i-technical-rules/section-1/rule-1-5/) · [IIHF – New Rule Book for global game](https://www.iihf.com/en/events/2021/wm/news/26308/new_rule_book_for_global_game)*

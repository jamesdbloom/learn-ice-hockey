# Zone Entries

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline. **Playing in Britain? The
> IIHF flags are yours** — every level of UK hockey runs the IIHF book, amended locally; see
> [UK and England Rules](../foundation/uk_rules.md).
>
> **Related:** [Rules Primer](../foundation/rules_primer.md) · [UK and England Rules](../foundation/uk_rules.md) · [Neutral Zone Systems](neutral_zone_systems.md) · [Defending the Rush](defending_the_rush.md) · [Offensive Zone Play](offensive_zone_play.md) · [Breakouts](breakouts.md) · [Forechecking Systems](forechecking_systems.md) · [Puck Support and Spacing](../hockey-iq/puck_support_and_spacing.md)

## Overview

A **zone entry** is the moment your team brings the puck across the opponent's blue line into the third of the ice containing the goal you are shooting at. The line is twelve inches wide, and the approach to it is where most attacks are won or lost — that framing is a coaching commonplace rather than a measured finding, but the entry itself has been measured, and the measurement is why this document exists.

**Carrying the puck in is worth about twice as much as shooting it in and chasing it** — 0.53 to 0.62 unblocked shot attempts per successful carry against 0.22 to 0.28 per dump-in, from 330 hand-tracked NHL games in 2011-12. Average in the failures and count every carry *attempt*, and it is roughly 0.48 against 0.24 — but that second comparison comes only from the Washington games inside that sample, not from all 330. The same two-to-one shape has since appeared in other trackers, eras and leagues. The numbers are more than a decade old and describe the NHL rather than your league, so take the direction, not the decimals.

**A failed carry costs far less than it feels like it does** — about eight hundredths of a shot on net in those Washington games, cheaper than shooting the puck deep and changing lines, which was the worst-valued play of all. The break-even that implies is roughly one-third confidence: complete the carry more often than one time in three and carrying is the better bet. That is a probability argument and not a licence — one in three still means shooting it deep often, and the authors were explicit that their figures are averages rather than a verdict on the hard, well-defended plays where the decision actually bites. But the bar is far lower than the NHL players they tracked behaved as though it was, and their conclusion was that those players gave the puck up at the line too easily.

**Attack the space between two defenders rather than at one of them** — one defender has an easy job, two sharing a gap have a problem. Get to the line last yourself and let your support arrive first.

**If you get there alone, turn away from the line instead of forcing it.** Protect the puck, look back up the ice, and come again a second later with a teammate — a skill that runs against instinct, because turning away from the offensive zone feels like retreating. **Curl in open ice, not against the wall.** Never take contact with your back to the boards; near the wall the orientation is skates parallel to it, forearm and hip into the contact, head up and chin off your chest.

**And you stay onside for longer than most players believe.** You are onside as long as one skate has not completely crossed the line, judged at the instant the puck completely crosses it — and under NHL and IIHF rules that trailing skate may even be in the air, though under USA Hockey Rule 630(a) and Hockey Canada Rule 6.11 it must be touching the line or the ice behind it. That is two books of the four.

---

## 1. Why entries decide games

### The finding

```facts
Key: At 5-on-5 a carry-in was worth 0.53 to 0.62 unblocked shot attempts per entry against 0.22 to 0.28 for a dump-in, across Tulsky's full 330-game NHL sample from 2011-12
Key: Goals per entry ran the same way — 0.027 to 0.039 carried in against 0.010 to 0.018 dumped in, at 5-on-5 across that same 330-game sample
Key: In Tulsky's tables "shots" means unblocked shot attempts, shots on goal plus misses, so do not set 0.53 to 0.62 against a shots-on-goal rate
Key: The ranges span the nine rows of Tulsky's Table 1, and the 0.62 top end is its rest-of-league row rather than any single team's
Key: Every row of that table had carrying in more than twice as productive as dumping in, on cells of at least 3,000 entries each
```

The reference work is Eric Tulsky, Geoffrey Detweiler, Robert Spencer and Corey Sznajder, *Using Zone Entry Data To Separate Offensive, Neutral, And Defensive Zone Performance*, presented at the 2013 MIT Sloan Sports Analytics Conference. They hand-tracked 330 NHL games from the 2011-12 season, recording every time the puck went into the attacking zone and how.

Their headline result, in their own words: *"carrying the puck across the blue line generates more than twice as many shots, scoring chances, and goals as dumping the puck in."*

The 5-on-5 numbers, per entry, **from the full 330-game sample** (each cell in their Table 1 is based on at least 3,000 entries):

| | Shots per entry | Goals per entry |
|---|---|---|
| Puck **carried** in | 0.53 – 0.62 | 0.027 – 0.039 |
| Puck **dumped** in | 0.22 – 0.28 | 0.010 – 0.018 |

**What "shots" means here.** Not shots on goal. Tulsky's group extracted from the play-by-play *"the number of shots (including those that miss the net) and goals produced in each offensive zone possession"* — so these are **unblocked shot attempts** (shots on goal plus misses, i.e. Fenwick events). Do not compare 0.53–0.62 shots per carry-in against a shots-on-goal rate.

The ranges are across the nine rows of their Table 1 — eight team data sets (Philadelphia, Minnesota, Washington and Buffalo, entries for and against) plus a "rest of league" row. The 0.62 upper bound for shots per carry-in comes from that rest-of-league row, not from any individual team's data set. Every single row showed carrying in as more than twice as productive as dumping in.

### The part everyone gets wrong

```facts
Key: Every figure in Tulsky's net-value table comes from the Washington games alone, not from all 330 — those were the only games in which failed attempts and dump-and-change plays were tracked
Key: A failed carry-in cost about eight hundredths of a shot in net value in Tulsky's Washington games, and dumping the puck in and changing lines cost more than that
Key: Averaged over every attempt in those Washington games a carry was worth +0.42 net shots against +0.12 for dump-and-chase, and dump-and-change was the only play worse than a failed carry
Key: Tulsky's group put the break-even at 34% confidence between equal teams, 26% for a stronger line against a weaker pair, and 44% the other way round
Key: The break-even thresholds come off one decision curve with two values Tulsky's group could not measure — how good a well-defended carry is if completed, and how likely it is to be completed
Key: Only 14% of the carry attempts Tulsky's group tracked ended in a turnover, and they said in terms that the rate "would be higher in the marginal plays in question"
Key: Tulsky's group concluded about the NHL players they watched that players "give up the puck far too easily at the blue line" — the study observed no other level of hockey
```

The standard objection is: *yes, but a failed carry-in is a turnover at the blue line, and a turnover at the blue line is a rush the other way.* Tulsky's group tested exactly that, tracking failed entry attempts in their Washington sample and following what happened on the **next** entry either team got. Their Table 3, in net expected shots — **and note the scope: every figure in it comes from the Washington games alone, not from all 330**, because those were the games in which failed attempts and dump-and-change plays were tracked at all:

| Entry type | Shots for on this entry | Net value overall |
|---|---|---|
| Successful carry | 0.55 | **+0.50** |
| **Failed** carry | 0.00 | **−0.08** |
| Carry attempt (all attempts averaged) | 0.48 | **+0.42** |
| Dump-and-chase | 0.24 | **+0.12** |
| Dump-and-change | 0.02 | **−0.10** |

Read that failed-carry row carefully. A blown carry-in cost about **eight hundredths of a shot** on net. It is not free — but it is nowhere near the disaster the folklore says, and it was *cheaper* than dumping the puck in and changing lines. In those games only **14% of carry attempts** ended in a turnover at all.

**Read that 14% with the sentence the authors attached to it**, because it is the honest limit on this whole argument: *"this is still not sufficient data to say conclusively that teams should be trying harder to carry the puck in at every opportunity… only 14% of all carry-in attempts resulted in a turnover, but surely the turnover frequency would be higher in the marginal plays in question."* The 14% is the rate across every attempt they tracked, most of which were not close decisions. The attempts you are actually deliberating over — the ones into a defence that is set — turn over more often than that, and their tracking does not say how much more.

Because the downside is small, the break-even point is low. Tulsky's group calculated that with equal teams you only need to be **34% confident** of completing the carry for attempting it to beat dumping it in. If your line is better than the one you are facing — they modelled a team expecting to shoot 9% while allowing 7% — that threshold falls to **26%**. If you are the weaker team it rises to **44%**, which is the honest, data-backed version of "just put it in deep and go to work."

All three of those thresholds come off one decision curve, and it is worth knowing what was assumed to draw it. The 34% holds only if a carry completed on a well-defended play would still be worth the **0.57 shots** an average successful carry-in produced — and the authors list exactly that, along with how likely such a carry is to succeed, as the **unknown parameters** in their calculation. It is a decision curve with two values they could not measure, not a measured threshold.

Their conclusion, about the NHL players they watched: *"It is likely that players give up the puck far too easily at the blue line,"* and *"in general NHL teams probably could benefit from being more aggressive at the blue line."* The study observed no other level of hockey and makes no claim about one.

### Corroboration

The finding has held up across other data sets. Note that these are figures reported second-hand by analysts summarising their own tracking, not peer-reviewed papers, and not all of the underlying tracking is published:

- **Corey Sznajder**, tracking 2014-16, reported roughly **0.66 shots per carry-in** against **0.29 per dump-in**.
- **Thibaud Chatel**, 2022, reported **47%** of controlled entry attempts led to a shot against **18%** of dump-ins, excluding dump-and-change.
- **PWHPA data (via Sportlogiq)** — from a July 2022 article describing "this last year's PWHPA Secret Dream Gap Tour", so **probably the 2021-22 season, though the source does not say so** — showed the same shape in women's professional hockey: carry-ins **0.73** shots per entry, pass-ins **0.54**, chip-ins **0.21**, dump-ins **0.14** at even strength.

Different trackers, different leagues, different eras, same answer — **for the comparison Table 1 makes: getting in with control against putting it in without.** What none of them reports is the separate value of a *failed* attempt, which is the row the attempt-inclusive 0.48 depends on. So the two-to-one shape is the part that has replicated; the 0.48 rests on Tulsky's Washington games and on nothing else quoted here.

### What this actually means for you

- **Possession in is worth roughly double a dump-in in shot terms.** Not marginally better. Double.
- **The cost of trying and failing is smaller than it feels**, because it feels dramatic when it goes wrong and invisible when it works.
- **Dumping and changing is the worst play on the board** — in the Washington games it was the only entry type with a worse net value than a failed carry. If you are tired, that is a reason to have changed twenty seconds ago, not a reason to fire the puck away.
- **This is a probability argument, not a licence.** One-third confidence means you should also be putting it in deep a lot of the time. The point is that the bar is much lower than the NHL players in this tracking behaved as if it was. **They are the only players the study watched** — whether your own league gives the puck up too readily, or not readily enough, is not something these numbers measured.

See [Risk Management](../hockey-iq/risk_management.md) for how this thinking generalises.

---

## 2. The offside rule as a tactical tool

Most players know offside as a thing that gets whistled against them. Learn the exact wording and it becomes a thing you use.

**[Rules Primer](../foundation/rules_primer.md) covers Rule 83** — the full statement, the delayed-offside procedure, the disallowed goal, the faceoff locations and the differences between the three rulebooks. What this document adds is one thing: the **trail-skate drag** as a technique. Four clauses are what make that technique work, so they are set out here; for anything beyond them, go to the primer.

**If you play in Britain, read the IIHF flags below as your own.** Every level of the game here — the Elite League, the NIHL, the recreational and junior game, university hockey — runs the IIHF Rule Book, and its Rule 83 is the one that will be applied to you. One local amendment touches this rule and is worth knowing: because **on-ice video review is not available in EIH or SIHA competition**, a **Coach's Challenge is not permitted** either (In-House Rules, Rules 37 and 38, amending IIHF Rule 38 and therefore Rule 83.5). A missed offside on the ice is the end of the matter; nobody is going upstairs to wipe a goal off the board twenty seconds later. See [UK and England Rules](../foundation/uk_rules.md).

### The four clauses the technique rests on

```facts
Rule: You are off-side only when both skates are completely over the leading edge of the blue line (NHL Rule 83; IIHF Rule 83.1 word-for-word)
Rule: One skate in contact with the line, or on your own side of it, keeps you onside at the instant the puck completely crosses (NHL Rule 83; IIHF Rule 83.1)
Rule: The whole width of the painted blue line counts as "the line" — a skate touching any of it is onside (NHL Rule 1.5)
Rule: Your own side of the line is a vertical plane — a skate lifted and held back over the neutral zone is onside (NHL Rule 83; IIHF Rule 83.1, in the same words), but not under USA Hockey or Hockey Canada
Rule: A "skate" is the blade only, so an overhanging boot is irrelevant — NHL Rule 83.1 since 2025-26, and the IIHF's 2026/27 book adds the same sentence to its own Rule 83.1; the 2025/26 IIHF book carries no such definition
Rule: Under USA Hockey Rule 630(a) and Hockey Canada Rule 6.11 an airborne trail skate is offside — the blade must have contact; that is two books of the four
Rule: British hockey runs the IIHF book at every level, so the IIHF wording here is the rule you play under — but the In-House Rules do not settle which edition, 2025/26 or 2026/27; see UK and England Rules
Rule: Under the IIHF's 2026/27 Rule 83.1 a carrier crossing ahead of the puck is not off-side only where they have "possession and control" of it "with their stick" before "both skates completely" cross the leading edge
Rule: The IIHF's 2025/26 Rule 83.1 asks only for possession and control "prior to their skates crossing" — no stick, and not "both skates", so the 2026/27 book is stricter on one limb and looser on the other, not uniformly stricter
```

Quoted from **NHL Rule 83** in the *NHL Official Rules 2025-2026*:

- **"A player is off-side when both skates are completely over the leading edge of the blue line involved in the play."** Both. Not one. Conversely, *"a player is on-side when either of his skates are in contact with the blue line, or on his own side of the line, at the instant the puck completely crosses the leading edge of the blue line."*
- The **leading edge** is the near edge of the blue line as you approach it. The line is painted **twelve inches wide** (Rule 1.5), and that whole foot of paint counts as "the line" — a skate touching any of it is onside.
- **Your own side of the line is a vertical plane** rising from the leading edge. *"If a player's skate has yet to break the plane prior to the puck completely crossing the leading edge, he is deemed to be on-side for the purpose of the off-side rule."* A skate lifted in the air, held back over the neutral zone, is onside.
- For 2025-26 the NHL clarified that **"a 'skate' is to be considered the blade of the skate only."** **The IIHF has since written the same sentence into its own Rule 83.1**: the **2026/27** book reads *"For the purposes of this rule, a 'skate' is to be considered the blade of the skate only"*, where the **2025/26** edition carried no such definition and said only "skates". The consequence cuts both ways — your boot overhanging the line is irrelevant, and a **blade** across the plane is offside however far back the boot still is.

**The first three clauses are the IIHF's own words, not a borrowing.** IIHF Rule 83.1 reads: *"A Player is 'off-side' when both skates are completely over the leading edge of the blue line involved in the play. A Player is on-side when either of their skates are in contact with the blue line, or on their 'own side' of the line, at the instant the puck completely crosses the leading edge of the blue line. On their 'own side' of the line shall be defined by a 'plane' of the blue line which shall extend from the leading edge of the blue line upwards. If a Player's skate has yet to 'break the plane' prior to the puck completely crossing the leading edge, they are deemed to be 'on-side'."* **That is the 2025/26 book, and the 2026/27 book keeps every word of it while adding two things.** One is the blade-only sentence above, dropped into the middle of the on-side test. The other is a rewritten carve-out for the puck carrier: a player who crosses ahead of the puck is not offside *"provided they have 'possession and control' of the puck **with their stick** prior to **both skates completely** crossing the leading edge"*, where 2025/26 asked only for possession and control *"prior to their skates crossing the leading edge."* **⚠️ Those two halves do not run the same way, so do not read the new edition as uniformly stricter.** Requiring the stick is stricter — push the puck over the line with a skate and the carve-out is gone. *"Both skates completely"* is more permissive than the older *"their skates"*, and it lines the carve-out up with the both-skates test in the sentence above it. Both changes move the IIHF's wording onto the NHL's, which already reads that way.

**Which of the two editions applies to you in Britain is unresolved, and this document does not resolve it.** The IHUK In-House Rules adopt *"the latest IIHF Official Rule Book (Version 1.1, published July 2025)"* — the **2025/26** book, named by version — while their own cover directs that they be read *"in conjunction with the Current IIHF Rule Book"*. They make **no amendment to Rule 83** in either edition, so whichever IIHF book is in force reaches you unaltered; [UK and England Rules](../foundation/uk_rules.md) sets out the contradiction, and it is not for you to settle by picking the half you prefer. **In an IIHF-sanctioned competition running the 2026/27 book, the blade-only definition is live now.** **Nothing in the trail-skate drag below turns on any of this** — the both-skates test, the one-skate on-side test and the "plane" sentence it rests on are identical in both editions.

> **⚠️ The third clause is NHL and IIHF, and both North American books reverse it.** Under **USA Hockey Rule 630(a)** a player is offside when they do *"not have skate contact with any part of the Neutral Zone or the blue line when the puck crosses the determining edge of the blue line"*, and the Note confirms that *"a player only needs to have skate contact with one skate with the blue line to be considered 'onside.'"* **Hockey Canada Rule 6.11 runs the same way**: *"Only the player's skate(s) that are in physical contact with the ice surface will be used in determining an off-side"*, and its **Interpretation 3 to Rule 6.11(a)** settles the case in one line — *"A player has one skate above the blue-line (not touching the ice) and one skate over the blue-line at the instant the puck completely crosses the blue-line. OFF-SIDE."* So an airborne trail skate is **onside under the NHL and the IIHF — and therefore in Britain — and offside under USA Hockey and Hockey Canada**. That is **two books of the four**. How much North American rec and youth hockey runs on those two is a question about leagues rather than about books, and this document has no count for it, so find out which book your league plays under. This changes step 2 below.

### The trail-skate drag

```facts
Position: Far-side winger flying at the line, a stride ahead of a carrier about to put the puck over
Technique: Attack the line at full speed with your inside foot leading
Technique: Stop pushing with the trail leg and let that blade glide so it stays touching the paint
Action: Keep your body, hands and stick already in the zone — only the trail blade is holding you onside
Action: The instant the puck completely crosses, put that blade down and push
Key: The judgement is made at one instant — time your glide to it, don't glide for two seconds
Never: Drag the trail skate with your head down — your body, hands and stick are in the zone before your skate is, and that is where a defender standing up at the line will be
Rule: Lifting the trail skate is legal under the NHL and under the IIHF book, so it is legal in Britain (IIHF Rule 83.1) — USA Hockey Rule 630(a) and Hockey Canada Rule 6.11 require skate contact, so keep the blade down there
```

This is the single most useful piece of applied rules knowledge for a forward, and it comes straight out of the wording above.

You are the far-side winger. You are flying. The puck carrier is a stride behind you and about to put the puck over the line. If you simply skate, both blades cross, the puck crosses second, and the linesman's arm goes up.

Instead:

1. Attack the line at full speed with your **inside foot leading**.
2. As you reach it, **stop pushing with the trail leg** and let that blade glide so it stays touching the paint — or, **under NHL and IIHF rules**, lift it and hold it back over the neutral zone without breaking the plane. **In Britain that lift is legal**, because the IIHF book is the one in force at every level here (IIHF Rule 83.1). **Under USA Hockey and Hockey Canada the blade must stay in contact** (Rule 630(a); Rule 6.11), so keep it on the paint.
3. Keep your **body, hands and stick already in the zone**. Only the trail blade is holding you onside.
4. The instant the puck completely crosses, **put that blade down and push**.

You have arrived at the line at top speed, you have your stick in the zone ready to receive, and you are legal. A player who does not know the rule has to slow down and check their feet. You do not.

Three details that separate people who *sort of* know this from people who use it:

- The judgement is made at **one instant** — the moment the puck fully crosses. Before that instant nothing you do matters; after it, nothing you did matters. So the skill is timing your glide to that instant, not gliding for two seconds.
- Because it is the **skates** that decide and not the body — and under the NHL and the IIHF's 2026/27 book, only the **blade** — you can be leaning most of your body over the line. Aggressive body position is free. **One thing here is not free, and it is your head.** That sentence is about the offside rule, which does not care where your body is; it says nothing about what is in front of it. You are arriving at top speed with your body, hands and stick already across the line, and that is where a defenceman standing up at their own blue line will be — [§11](#standing-up-at-the-line) is the same play written from their side. **A head up is the condition of the technique, not an extra.** [Body Contact and Battles](../technique/body_contact_and_battles.md) owns that rule and writes it without exceptions: you cannot brace for a hit you cannot see, and a body that is surprised does not absorb contact.
- **Which rule book you are under changes step 2.** Gliding the blade along the paint is legal everywhere. *Lifting* the trail skate is legal under the **NHL and the IIHF** — and since British hockey runs the IIHF book at every level, it is legal here. **USA Hockey Rule 630(a)** requires *"skate contact with any part of the Neutral Zone or the blue line"*, and **Hockey Canada Rule 6.11** counts *"only the player's skate(s) that are in physical contact with the ice surface"*, so a raised trail skate is offside under both. That is two books of the four. How much North American rec and youth hockey runs on those two is a question about leagues rather than about books, and this document has no count for it, so find out which book your league plays under — and under USA Hockey's or Hockey Canada's, keep that trail skate on the ice.

### Delayed offside and tagging up — three consequences for the entry

```facts
Rule: On a delayed offside the linesman raises a non-whistle arm and play continues (NHL Rule 83.3; IIHF Rule 83.3 in the same terms)
Rule: Under USA Hockey Rule 630(d) delayed offside and tag-up exist only at Youth 15-Only and above, Girls 16U and above, High School and Adult — below that the whistle is immediate. That restriction is USA Hockey's alone; Hockey Canada 6.11(b), the NHL and the IIHF set no classification limit
Rule: Tagging up needs actual skate contact with the line; the vertical plane does not apply — "'3D' judgement is not used in this situation" (IIHF Rule 83.3(I), the wording British hockey plays under; NHL 83.3(i) says "skate contact with the blue line" without the gloss)
Rule: The zone must be empty before anyone re-enters, in all four books — NHL 83.3(i), IIHF 83.3(I) and USA Hockey 630(d)(2) word it "at the same instant"; Hockey Canada 6.11(b)(ii) as a result, "completely clear of attacking players". Both cite the tag-up clause. Same requirement, not a permission
Action: Get everybody out at once — one straggler keeps the arm up under all four books, so shout it
```

A **delayed offside** is what happens when attackers precede the puck but the defending team can bring it out without interference: the linesman raises a non-whistle arm and play continues (Rule 83.3). **The IIHF's 83.3 is the same rule in the same order** — the arm comes down when *"All Players of the offending team clear the zone at the same instant (skate contact with the blue line, '3D' judgement is not used in this situation)"* or when *"the defending team passes or carries the puck into the neutral zone"* — so this whole subsection describes the British game as written. [Rules Primer](../foundation/rules_primer.md) has the full procedure — what nullifies the arm, what turns it into a whistle, and the IIHF wording on clearing. Three things change what you do at the line:

- **⚠️ First, check that you have a delayed offside at all.** Under **USA Hockey Rule 630(d)** the delayed offside and the tag-up exist only *"(For all Youth 15-Only levels and above, all Girls 16U levels and above, High School and Adult classifications **only**)"*. Below those levels there is no raised arm and no recovery — the whistle goes the moment you precede the puck in. How much North American minor hockey sits below that line is a question about leagues and age classifications rather than about books, and this document has no count for it, so check your own classification: below that line this whole subsection describes a rule you do not have, and the entry simply has to be right first time. **This restriction is USA Hockey's alone** — Hockey Canada's Rule 6.11(b) carries no classification limit, and neither the NHL's 83.3 nor the IIHF's does.
- **Tagging up needs actual skate contact with the line.** The vertical plane above does *not* apply here — the IIHF text says so in terms, *"'3D' judgement is not used in this situation"* (Rule 83.3(I)). **That is the British rule book being explicit about it**, and it is the sharper wording of the two: NHL 83.3(i) says only *"(skate contact with the blue line)"* and leaves the rest to interpretation. Either way, the airborne trail skate that keeps you onside on the entry does **not** clear you on a delayed offside. Touch the paint.
- **Everybody has to be out before anyone re-enters — in all four books, though only three write it as an instant.** One straggler keeps the arm up everywhere. Where the books part is only in the wording, not the requirement: the **NHL** requires that *"all players of the offending team clear the zone at the same instant (skate contact with the blue line)"* (Rule 83.3(i)), the **IIHF** says the same in the same words, adding only the gloss that *"'3D' judgement is not used in this situation"* (Rule 83.3(I)), and **USA Hockey** puts the same instant in different words, and is the most explicit of the three — *"all attacking players are simultaneously clear of the attacking zone by making skate contact with the blue line, at the same instant"* (Rule 630(d)(2), the tag-up clause). **Hockey Canada words it as a result rather than as an instant, and it comes to the same thing.** Rule 6.11(b) asks that *"all attacking players clear the attacking zone by making skate contact with the blue-line, so that the attacking zone is completely clear of attacking players"* — skate contact from every attacker, and the zone empty before anyone re-enters. Its Interpretation 11 resolves that to *"the instant the zone is completely free of attacking players"*, and IIHF Situation 83.34 states the same test in the book that uses the phrase: a player has cleared *"the instant the skate makes contact with the blue line"*, and *"should another Team A player enter the attacking zone while A31 is airborne, the delayed off-side shall remain in effect."* **Different wording, same requirement.** Play it as though the instant matters and you are legal in all four. ⚠️ **Read that citation carefully if you go to look it up, because USA Hockey's Rule 630(d) carries two separate numbered lists and "630(d)(2)" therefore names two different rules.** The **tag-up clause** is the one quoted here, under the heading *"the delayed offside will be nullified if"*. The **stop-play clause** sits under *"If any of the following conditions are met, play shall be stopped"*, and its second item is the pressure trigger dealt with in the next subsection. **That is the same shape as Hockey Canada's Rule 6.11(b), and this page uses the same two labels for both books**; they are not either rulebook's own names for them. **USA Hockey's own *Casebook* does not disambiguate them either** — its Rule 630 Situations 35, 36 and 37 give the reference "630(d.2)" for the tag-up clause, while Situations 38 and 39 give the same reference for the stop-play clause. Nothing on the ice turns on this; it only means a reader looking the number up should read both lists. This is a communication job — see [On-Ice Communication](../foundation/on_ice_communication.md). Shout it.

#### Forechecking during a delayed offside

```facts
Never: Forecheck during a delayed offside. Hold at the line instead and wait for the arm to drop, whichever of the four books you are under
Rule: All four books whistle a delayed offside for touching the puck or going for a loose puck, and USA Hockey for any attempt on the puck, loose or not — NHL and IIHF 83.3, USA Hockey 630(d), Hockey Canada 6.11(b)(ii) (the stop-play clause), which adds "while the puck is still in the attacking zone"
Rule: NHL and IIHF 83.3 add two further delayed-offside whistle triggers — forcing the defending puck carrier deeper, and being about to make contact with him. Only the second is exclusive to those two books: USA Hockey reaches the first through 630(d)'s stop-play pressure limb and Casebook Situation 38
Rule: Neither USA Hockey 630(d) nor Hockey Canada 6.11(b)(ii) (the stop-play clause) writes an about-to-make-contact trigger — nothing you can rely on stops play before you arrive, and the defenceman is not braced for you
Rule: USA Hockey 630(d) does whistle an attacker who "continues to apply pressure to the defending puck carrier" — wider than the NHL's forcing-him-deeper limb, but a linesperson's judgement of pressure, not of an imminent hit, so never close on him expecting a whistle
Rule: A defenceman turned to retrieve has his back to you, so hitting him is checking from behind — under USA Hockey's Casebook (Rule 608 Situation 1) it is no minor: the major plus game misconduct, or a match penalty, "must be called" for a forceful check on a player standing along the boards
Rule: USA Hockey's Casebook keeps its minor plus misconduct for a push on an opponent "not near the boards" or a minimal-contact "pinch", and requires the major or match "in every instance" a check from behind "recklessly endangers the opponent" — board contact or none (Rule 608 Situation 1)
Rule: Hockey Canada 7.5(a) is a Minor plus a Game Misconduct for an intentional hit from behind "anywhere on the ice"; 7.5(e) makes the game misconduct mandatory on any minor or major for checking from behind, and 7.5(d) rules a plain misconduct out — so its minor still ends your night
Rule: The checking-from-behind ejection does not wait for an injury — Hockey Canada 7.5(b) reaches a major plus a game misconduct on the degree of violence of the impact alone and makes both mandatory if the check injures, and USA Hockey 608(b) requires that pair for reckless endangerment
Action: Retreat to the line, tag up, come again
```

**Forechecking during a delayed offside is not a grey area — it is a whistle. Which acts bring that whistle is not the same in all four books, though, and the one that matters most for your safety is written in only two of them.** Under the **NHL**, play stops if any attacker *"touches the puck, attempts to gain possession of a loose puck, forces the defending puck carrier further back into his own zone, or who is about to make physical contact with the defending puck carrier"* (Rule 83.3). **The IIHF's Rule 83.3 lists the same four in the same order**, differing only in pronoun — so that is the British rule too. **⚠️ The fourth trigger — the whistle for a hit that has not landed yet — is not written in the other two books.** **USA Hockey Rule 630(d)** stops play only where *"(1) An attacking player touches the puck. (2) An attacking player attempts to gain possession of the puck or continues to apply pressure to the defending puck carrier."* Its *Playing Rules* write no about-to-make-contact condition at all. **But do not read the forcing-him-deeper trigger as NHL and IIHF property either.** USA Hockey's pressure limb is *wider* than the NHL's — pressure that never drives the carrier deeper is still a whistle there — and its separate *Official Rules and Casebook* states the forcing limb in terms. **Casebook Rule 630, Situation 38** answers that a defender may carry the puck anywhere in his own zone *"as long as they are not being forced deeper into their zone by an attacking player"*, and directs that the linesperson *"should be alert to stop play as soon as the defending puck carrier is forced back further into their Defending Zone or as soon as contact, however slight, is made with the puck or puck carrier."* **So what is written in only two books is the imminent-hit whistle, not the forcing one.** The Casebook does lean toward stopping play early where an offside attacker chases a loose puck — Situation 39 says *"The potential for unnecessary body contact should not be allowed in a situation where an infraction (offside) has already occurred"* — but that answers a player pursuing the puck, which is already a printed trigger under 630(d), and it gives you nothing to time a hit against. **Hockey Canada Rule 6.11(b)(ii)** (the stop-play clause) is shorter again — *"If any attacking player touches the puck or attempts to gain possession of a loose puck while the puck is still in the attacking zone, the Linesperson will stop play"* — no pressure limb, no contact limb, and a locative qualifier none of the other three carries. **⚠️ So under USA Hockey and Hockey Canada, do not close on the defending carrier expecting the delayed-offside whistle to arrive first. Nothing you can rely on stops play before you arrive** — Hockey Canada writes no trigger at all short of the puck, and USA Hockey's is a linesperson's judgement of pressure, not of an imminent hit, so you cannot time your closing speed to it. The arm being up is not a stoppage, he is still playing the puck, and he is not braced for a hit. **⚠️ And name the hit you are lining up, because both of those books do.** A defenceman turned to retrieve a puck in his own end has his back to you and his head over it, so hitting him there is **checking from behind**. **USA Hockey Rule 608**'s Note reaches the act directly — *"Checking from Behind occurs when a check is delivered to a player directly from behind, or diagonally from behind"*, and *"This includes body checking or pushing an opponent from behind in open ice or directly into the boards or goal frame"* — with **608(a)** writing *"[a] minor plus a misconduct penalty, or a major plus a game misconduct penalty"* and **608(b)** a major plus a game misconduct for a check that *"recklessly endangers an opponent, or causes them to go head first into the boards or goal frame."* **⚠️ Do not price the hit you are lining up at that minor, because USA Hockey's own *Casebook* takes it off exactly this picture.** **Casebook Rule 608, Situation 1** keeps the minor plus misconduct for two things only — a push on an opponent *"skating ahead of them and not near the boards"*, and *"minimal body contact"* producing *"this 'pinch' against the boards"* — and then directs that *"[t]he major plus a game misconduct penalty, or match penalty, must be called"* in three instances, the first of which is your picture in terms: *"In every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)"*, and the second *"[i]n every instance where a player is thrust head first into the boards or goal frame."* **The third does not need the boards at all** — *"[i]n every instance where the player recklessly endangers the opponent from a check from behind, regardless of whether or not board contact is made"* — so open-ice pressure on a turned defenceman is not a cheaper version of it. The Casebook also draws the area it is worried about: the *"danger zone"* is *"approximately ten feet out from the boards"*, and players checked from behind there who crash into the boards *"may be at high risk of receiving a serious and possibly life altering injury."* **Hockey Canada Rule 7.5 prints your exact picture** in the list it tells referees to enforce strictly, *"aware of the tragic consequences of spinal injuries"*: *"Where a player along the boards, with their head down looking for the puck or 'digging the puck out,' is hit from behind and driven head-first into the boards."* Its **7.5(a)** is a minor **plus a game misconduct** for an intentional hit from behind *"anywhere on the ice"*, and **7.5(b)** has two limbs. The first is a major plus game misconduct the referee **may** assess *"based on the degree of violence of the impact"* — **with nobody hurt**. The second **must** be assessed where a checking-from-behind foul that would otherwise be a minor injures the opponent. **The ejection does not wait for an injury.** **So the two books that will not stop play before you arrive are the two that will take you off the ice after you do.** [Body Contact and Battles](../technique/body_contact_and_battles.md) covers how to arrive on a puck-retriever without becoming that. Hockey Canada's **off-side** rule answers the player who hits anyway too, but only after the fact and only in its own currency: Rule 6.11(d)(i) allows an **intentional off-side** against an attacker who *"deliberately plays or attempts to make a play on the puck **or against an opposing player** in a delayed off-side situation, knowing that they are off-side"*, and 6.11(d) puts the cost at a face-off *"at an end zone face-off spot, in the defending zone of the offending team"* — a territorial penalty rather than a minor, and nothing in *that* rule protects the man you hit. **The protection is Rule 7.5 above; the off-side rule was never the place to look for it.** **In all four books the instruction is identical: hold at the line, retreat, tag up, come again.**

### The territorial asymmetry — why the safe play isn't

```facts
Rule: A botched carry-in draws only to the neutral-zone spot outside the blue line (NHL Rule 83.6; IIHF Rule 83.6(I) the same)
Rule: A botched dump-in or stretch pass draws back at the spot the shot or pass came from, which can be your own end (NHL Rule 83.6; IIHF Rule 83.6(II) the same)
Rule: A shot that creates a delayed offside and goes in is disallowed, whether or not you cleared the zone first — NHL and IIHF Rule 83.4, and Hockey Canada Rule 6.11(b) with its Note 1, to the same effect
Rule: The one way a goal still stands is the defending team putting it in themselves *"without action or contact by the offending team"* — NHL and IIHF Rule 83.4 only. Hockey Canada is silent; USA Hockey's Casebook (Rule 630, Situation 41) rules the own goal out. Clear and tag up rather than chase
Rule: Read USA Hockey's Casebook Situation 41 to its end — it bars the goal while the delayed offside is live and on the offending shot, but allows any goal legally scored once you have cleared the zone with no shot away (Rule 630, Situation 41)
Rule: USA Hockey has no delayed offside below Youth 15-Only, Girls 16U, High School and Adult (Rule 630(d)) — below those classifications the whistle is immediate, so there is no zone to clear and nothing to tag up for. Hockey Canada 6.11(b) sets no such limit
Key: Under pressure at the line, failing to carry costs you less than failing to dump
```

A botched **carry-in** is punished lightly: the draw goes to the neutral-zone spot outside the blue line and you barely lose anything. A botched **dump-in or stretch pass** is punished back **at the spot the shot or pass came from**, which can be your own end (Rule 83.6). And a shot that creates a delayed offside and then goes in is a **disallowed goal** whether or not you cleared the zone first (Rule 83.4). **There is exactly one way a goal stands in that situation, and it is not yours to make happen:** 83.4 closes *"The only way an attacking team can score a goal on a delayed off-side situation is if the defending team shoots or puts the puck into their own net **without action or contact by the offending team**."* Read the condition before you read the opening — any touch, any attempt at a loose puck, any forcing of the carrier stops play under 83.3, so the way to leave that door open is to clear the zone and tag up, not to chase. Both rules are set out in full in [Rules Primer](../foundation/rules_primer.md). **Both read the same way in the IIHF book** — 83.6 gives the same four faceoff locations in the same order, and 83.4 is word-for-word with the NHL, including *"The fact that the attacking team may have 'cleared the zone' prior to the puck entering the goal has no bearing on this ruling."*

**Neither Hockey Canada nor USA Hockey writes the NHL and IIHF's own-goal exception on a delayed offside, so know which book you are under.** If you play in Britain your rule book is the IIHF's, and that own-goal exception is yours in the NHL's own words. **Hockey Canada writes the disallowed goal and not the exception.** Rule 6.11(b) provides that during a delayed offside, if *"the puck enters the net, either directly or as a deflection, the goal will not be allowed as the original shot was off-side"*, and its Note 1 adds that this holds *"even if, after the puck is shot, the attacking team clears the attacking zone and the linesperson drops their arm to nullify the delayed off-side, prior to the puck entering the net"* — but no equivalent of the NHL's own-goal sentence appears in Rule 6.11 or in any of its thirteen interpretations. **USA Hockey writes the bar, and writes the exception out.** Its *Playing Rules* alone do not settle it: Rule 630 carries no disallowed-goal provision at all, and the general scoring rule points both ways at once. Rule 617(c) lists what is not allowed, including *"The puck enters the attacking zone illegally"* (617(c)(8)); Rule 617(b) lists what is, including *"The puck enters the goal as a result of any action by the defending team"* (617(b)(2)). The Playing Rules do not resolve the delayed offside between those two — but the separate *Official Rules and Casebook* does, and resolves it against you. Casebook Rule 630, Situation 41 asks *"May a goal ever be allowed during the course of a delayed offside?"* and answers *"No"*: *"Even if the defending team shoots, passes or deflects the puck into its own goal, a goal may not be allowed. This is also true in cases where the attacking team has nullified the delayed offside by clearing the zone prior to the puck entering the goal."* So of the four books, USA Hockey is the one that expressly closes the door the NHL and IIHF leave open. **But read what Situation 41 closes with, because it bounds that answer rather than repeating it.** The situation ends by directing the official at the blue line to stop play as soon as the puck is shot on goal, and then adds that where the puck was *not* shot directly on goal and the attacking team has cleared the zone, play is allowed to continue and any goal legally scored is allowed. *(That last sentence is printed with a word dropped from it, so it is paraphrased here rather than quoted.)* **So the closed door is the illegal puck, not the rest of the shift.** USA Hockey rules out the goal while the delayed offside is live and while it is the offending shot going in; once you have cleared the zone with no shot away, that book puts you back in a normal hockey game — which is exactly what tagging up is for. (Situation 41 gives its own rule reference as 630(d.3); the printed Rule 630(d) stops at (2).) Note also that under USA Hockey the situation only exists at Youth 15-Only and above, Girls 16U and above, High School and Adult (Rule 630(d)) — below that the whistle is immediate. **So under either North American book, do not expect that door to open** — USA Hockey shuts it in terms, Hockey Canada simply never opens it. It changes nothing about what you do — wherever the delayed offside exists at all, clear the zone and tag up — but it should change what you expect at the other end of it.

The entry consequence is the one worth carrying: under pressure at the line, **failing to carry costs you less than failing to dump**. That asymmetry runs the same direction as the shot-rate evidence in section 1, and it is worth remembering the next time the safe play looks safe.

---

## 3. Carry-in entries

A **carry-in** (also called a controlled entry) is any entry where your team has the puck on a stick as it crosses. A **pass-in** — a completed pass across the line to a teammate — counts as controlled too, but it is not equivalent. In the PWHPA data cited above, pass-ins produced **0.54** shots per entry at even strength against **0.73** for carry-ins: still far better than any uncontrolled entry, but about a quarter less productive than carrying it in yourself. Pass-ins only draw level with carries **on the power play** (0.96 against 0.91).

### Attack the outside shoulder

```facts
Read: The defender's weakest moment is the pivot — turning from backwards to forwards, or opening their hips to one side
Action: Aim at the outside shoulder, the one nearest the boards on your side, with pace and your eyes up
Read: The moment the defender's hips open outward the inside lane is available — cut back into the middle, slip the puck between their feet, or pass to the middle driver
Countered by: A defender who refuses to open and stays square — then you have the outside lane for real, so take it and get to the goal line
Key: You are not trying to beat them, you are trying to make them commit
```

The defender's job is to stay between you and the middle of the ice. Their weakest moment is the **pivot** — the instant they turn from skating backwards to skating forwards, or open their hips to one side.

Aim at the **outside shoulder** of the defender: the shoulder nearest the boards on your side. Do it with pace and with your eyes up. You are threatening the outside lane, which is the lane they are least worried about but most physically awkward to defend, because covering it means opening their hips toward the boards.

The moment their hips open outward, the **inside lane is available** — that is when you cut back into the middle, or slip the puck between their feet, or hit the middle driver. If they refuse to open and stay square, you have the outside lane for real: take it and get to the goal line.

The principle underneath: **you are not trying to beat them, you are trying to make them commit.** A defender who has committed to one lane cannot defend the other.

### Attack the space between two defenders, not one of them

```facts
Action: Skate at the seam between two defenders — the two defencemen, or a defenceman and a backchecking forward
Never: Skate directly at a defender — you have handed them an easy job, because they only have to deal with you
Action: On a 3-on-2, the middle attacker drives the space between the two defencemen, not either one
Action: On a 2-on-1 wide, angle your route so the single defender is forced to choose between you and your partner
Read: The moment two defenders both think the other one has it — a fraction of a second long, and where entries are won
```

Skate directly at a defender and you have handed them an easy job: they only have to deal with you. Skate at the **seam between two defenders** — between the two defencemen, or between a defenceman and a backchecking forward — and you have created a problem neither of them owns. Both have to decide whether to step or hold. Whichever one steps opens the space they were covering.

Practically: on a 3-on-2, the middle attacker should drive at the **space between the two defencemen**, not at either one. On a 2-on-1 wide, angle your route so the single defender is forced to choose between you and your partner rather than being able to face both.

You are looking for the moment two defenders both think the other one has it. That moment is a fraction of a second long and it is where entries are won.

**On a rush you will also hear this stated the other way round — "isolate a defender" — and in that context it is the same instruction, not a rival one.** (The phrase does other work elsewhere: in [Special Teams](special_teams.md) at 3-on-3 it means getting a defender alone in space and going straight at them, which is the opposite of what this section teaches.) On a rush, going at the seam is *how* you isolate one: whichever defender steps to take you has just left their partner alone with somebody else. The seam is the route; the isolation is the result. **Entering with numbers** below sets out the patterns three attackers use to make that happen on purpose.

### The wide entry

```facts
Action: Take the puck down the boards outside the defenceman and get to the goal line or below it
Goal: Make the defender turn and skate — every stride toward the boards is a stride away from the front of the net
Targets: A support player driving the net, plus a third player high for the back-door or point option
Risk: Going wide with nobody behind you is not an attack — it is a slow dump-in with extra steps
```

Take the puck down the boards outside the defenceman and get to the goal line or below it.

- **Why it works:** the defender must turn and skate, and every stride they take toward the boards is a stride away from the front of the net.
- **What you need:** a support player driving the net so that when you reach the goal line you have somewhere to put it, and a third player high for the back-door or point option.
- **When it fails:** when you go wide with nobody behind you. Then you are alone below the goal line with three defenders between you and the net, which is not an attack, it is a slow dump-in with extra steps.

![](diagram:entry-wide)

### The middle drive

```facts
Position: A teammate without the puck, skating hard through the seam between the defencemen, at the net
Goal: Freeze the defencemen so they cannot step up on the carrier — one route, at speed, buys the carrier several extra feet
Key: The middle driver usually does not get the puck, and that is not the point
Never: Drive half-heartedly — that is a player standing in the slot, which frees the defence rather than freezing it
```

A **middle drive** is a teammate without the puck skating hard through the middle of the ice, through the seam between the defencemen, at the net.

The middle driver usually does not get the puck. That is not the point. The point is that a defenceman who ignores a player skating at their net will get scored on, so they cannot ignore them — which means they cannot step up on the puck carrier either. One player, running one route, at speed, buys the carrier several extra feet of space.

Middle drives only work if they are **committed**. A half-hearted middle drive is a player standing in the slot, which frees the defence rather than freezing it.

### Using a teammate as a screen

```facts
Action: Cross with a teammate near the line so the defender tracking the carrier has to go around them
Key: Skate your own route to the net and let the defender's chosen path be the one that gets tangled
Never: Stop, stand, or step into a defender to make the pick — deliberately body-blocking a non-carrier is interference
Read: Officials at every level judge it on whether you were going somewhere
```

Two attackers crossing near the line can be used so that the second one runs interference — the defender tracking the carrier ends up having to go around your teammate.

**Be careful with this one.** Deliberately body-blocking a defender who is not the puck carrier is **interference**. What is legal is skating your own route to the net and letting the defender's chosen path be the one that gets tangled. What is not legal is stopping, standing, or stepping into them to make the pick. The distinction is whether you are playing hockey or setting a screen; officials at every level judge it on whether you were going somewhere. See [Body Contact and Battles](../technique/body_contact_and_battles.md).

### Entering with numbers — 2-on-2 and 3-on-2

```facts
Goal: Arriving with an extra attacker is worth nothing unless you use it to make one defender responsible for two of you
Key: Making one defender responsible for two attackers is what "isolate a defender" means in a rush
Never: Delay into the wall on a drive and delay. Curl in open ice instead, and never take contact with your back to the boards
Options: 2-on-2 — crisscross, midlane drive, or double drive, where both attackers drive and the carrier can shoot with the second going to the net
Options: 3-on-2 — high triangle with two driving wide and the third trailing, midlane drive with the middle attacker going hard at the net, triple drive with all three deep, or drive and delay
Technique: On a drive and delay, sell the drive first and turn away from the defender, level with them or as they pivot — the delay only buys time if the drive was believed
Read: What tells the carrier what is open is whether a defender goes with the wide driver — that single movement is the cue
Convention: Which of these your team runs is a coaching choice and most drill one or two rather than all of them, so ask instead of assuming the pattern you know is the one being played
```

The rest of this section is about you and the puck. This is about the three of you together, and it is the part most often left out: **arriving with an extra attacker is worth nothing unless you use it to make one defender responsible for two people.**

That is the whole idea, and it is worth saying plainly because it sounds like the opposite of the rule above. **"Attack the space between two defenders" and "isolate a defender" are the same instruction seen from two ends.** You go at the seam between them so that one of them has to take you; the moment they do, a teammate has become somebody's second man, and that is your 2-on-1 inside the larger rush.

**Two-on-two.** Three patterns are named in coaching material. **Crisscross** — the two of you exchange lanes near the line so each defender has to decide whether to switch or follow. **Midlane drive** — the second attacker drives between the two defenders, which makes the one covering the carrier hesitate for a beat, and that hesitation is the room the carrier uses to **cross in behind them** and shoot or make a play. **Double drive** — both of you drive, and the carrier can drop the puck into the space behind a defender for the second attacker arriving on their inside shoulder, or shoot with the second going hard for the rebound.

**Three-on-two.** Four options, and they differ in where the third player goes:

- **High triangle** — the carrier drives wide with the puck, a second attacker drives wide *without* it, and the third trails into the high slot. The carrier now has a shot, a pass across, and a drop behind. **The read is whether a defender goes with the wide driver**; that single movement tells the carrier what has opened.
- **Midlane drive** — get the puck to the outside first, then the middle attacker drives hard at the net on the inside shoulder of the far defender. That defender now has to leave the prime scoring area, which turns the rest of it into a 2-on-1, and the shot can come from the middle with a screen already in place.
- **Triple drive** — a variation where all three go deep. The carrier takes it wide with speed and then cuts hard inside, using the two driving teammates to create the room to do it.
- **Drive and delay** — the carrier sells a hard drive to the net and then pivots away from the defender, back toward the blue line. The defender has already given ground for fear of the drive and needs a beat to react, and that beat is the time and space the entry was for. **The timing is the whole play:** turn up when you are level with the defender or just as they pivot toward you, and turn to the outside, away from them. Sell the drive first — a delay off a drive nobody believed is just slowing down. **This is the same turn [§5](#5-the-delay--curl-back) teaches, and the safety override below is the same one — it applies here too, and it applies at higher speed.**

**Which of these your team uses is a coaching choice**, and most teams practise one or two rather than all of them. What is not optional under any of them is speed: every one of these works by making a defender commit, and nobody commits to an attacker who is coasting.

#### Three things that do not bend, whichever pattern you run

```facts
Never: Drive the middle with your head down — speed is the point and a head up is the condition of it, not an extra
Rule: IIHF 48.1 opens "There is no clean check to the head or neck" and the checker must still avoid your head — the one thing it declines to penalise is a square check with no upward motion on a puck carrier skating head down toward the checker, and how far that reaches is unresolved in its own text
Rule: Head up, and IIHF 48.1 is on your side — of a player skating head up, "whether they are in possession of the puck and may reasonably be expecting impending contact, an opponent does not have the right to hit them to the head or neck"; the NHL bars an avoidable head hit but writes neither half
Rule: The head-down carve-out is the IIHF's alone — USA Hockey's Casebook answers that crossing the ice at full speed to punish a head-down opponent rather than to play the puck is charging (Rule 607, Situation 2), and Hockey Canada's nearest rule turns on the ducking player rather than the checker
Never: Delay into the wall — a drive-and-delay is an open-ice turn, and the safety override on taking contact with your back to the boards outranks the play
Never: Step into a defender on a crisscross. Skate your own route instead, because deliberately body-blocking a player who does not have the puck is interference
Technique: If you are already tight to the wall and cannot get off it, take the contact rather than turning away into the boards
Technique: Skates parallel to the wall, forearm and hip into it, head up and chin off your chest
```

The patterns above all ask you to arrive fast into a crowded piece of ice. Three things hold whichever one you are running, and none of them is a trade you get to make.

**Head up through the seam.** A middle drive is the one route where two defencemen can both stand you up in open ice, and looking down at the puck as you arrive is what turns that into an injury. It also changes what the rulebook does for you. Under **IIHF Rule 48.1** — the book a British reader plays under — a player who *"delivers a bodycheck to an opponent who is skating with the puck with their head down in the direction of the Player and does not use an upward motion or drive their body up into the opponent, shall not be penalized for an 'illegal check to the head'."* **Read that no wider than it is written.** It does not put your head out of bounds for the checker: IIHF 48.1 opens *"There is no clean check to the head or neck. The Player delivering the hit must avoid hitting the opponent's head or neck."* ⚠️ **And the sentence immediately before the carve-out in the same rule is the one written for you**, not for the checker: *"When a Player is skating with their head up, whether they are in possession of the puck and may reasonably be expecting impending contact, an opponent does not have the right to hit them to the head or neck."* **Note what that does and does not turn on** — it holds *whether or not you have the puck*, and it holds even where you can see the hit coming. The two sentences are a matched pair: put your head down and you lose the entitlement, keep it up and the checker has no right to your head at all. What the book declines to penalise is only the square hit with no upward motion — and [Rules Primer](../foundation/rules_primer.md), which covers this rule, records that the IIHF's own text does not say how that carve-out sits against the rule's triggers, so treat the point as unresolved rather than settled. **Do not assume your own book carries the same carve-out.** None of this kind was found in USA Hockey's *Playing Rules*, and its separate *Rules and Casebook* was searched for one too and leans the other way: Casebook Rule 607, Situation 2 puts a player who *"sees an unsuspecting opponent skating up the ice with their head down"* and crosses the ice at full speed to hit them, and answers that this **is** charging, because the player *"traveled a great distance at full speed"* for the purpose of *"punishing a vulnerable or defenseless opponent"* rather than playing the puck. And Hockey Canada's nearest equivalent sits on a different trigger, *ducking to avoid a check*, which can put the **ducking player** in the box rather than the checker. The *checker's* amnesty for that is junior and senior only; Rule 8.7's prohibition on crouching carries no division scope, so the ducker is exposed in every division. [Rules Primer](../foundation/rules_primer.md) covers that comparison and states it properly; read it there rather than assuming your book matches the IIHF's. Either way, putting your head down is how you give away the protection you do have. [Body Contact and Battles](../technique/body_contact_and_battles.md) covers how to arrive.

**Delay in open ice, never against the wall.** The drive-and-delay is the same turn [§5](#5-the-delay--curl-back) teaches, executed deeper and faster, and **§5's safety override applies unchanged**: curl in open ice, and never take contact with your back to the boards. Turning your back near the wall converts the contact into a hit from behind, which the IIHF book treats as *"serious and dangerous, therefore there is no option to award a minor penalty"* (Rule 43.2) and the NHL likewise — *"There is no provision for a minor penalty for checking from behind"* (Rule 43.2). If you cannot make the turn in open ice, do not make it. And if you are already tight to the wall and cannot get off it, take the contact rather than turning away into the boards: skates parallel to the wall, forearm and hip into it, head up and chin off your chest.

**Skate your route; do not set a pick.** The crisscross works because two attackers exchanging lanes force two defenders to decide whether to switch. It stops working, and becomes a penalty, the moment you stop, stand, or step into a defender who does not have the puck — that is interference, and [Using a teammate as a screen](#using-a-teammate-as-a-screen) above covers the distinction.

### One thing that is not a rule

```facts
Convention: Crossing patterns, who takes the wide lane, whether the centre or a winger carries — all coaching choice, and it varies enormously
Options: Some teams demand strict lane discipline (left wing stays left); some are built entirely on crossing and swinging
Options: Some want the best puck carrier on the ice touching every entry
Action: Ask your coach what your team wants before you decide you know
```

Crossing patterns, who takes the wide lane, whether the centre or a winger carries — all of this is **coaching choice**, and it varies enormously. Some teams demand strict lane discipline (left wing stays left). Some are built entirely on crossing and swinging. Some want the best puck carrier on the ice touching every entry. Ask your coach what your team wants before you decide you know.

---

## 4. Speed and timing

### The puck carrier should be the last to the line

```facts
Position: As the carrier, reach the line half a stride to a full stride behind your wingers
Position: As a winger, be at the line, at speed, onside, before the puck gets there
Goal: Make the defence respect three threats at once, so the carrier arrives into a picture already pulled apart
Risk: If the carrier arrives first the supports are behind the play, and the defence collapses on one player
```

This is the timing principle that makes entries work. If the carrier arrives first, the supports are behind the play and the defence can collapse on one player. If the supports arrive first and the carrier arrives a beat later, the defence has to respect three threats at once and the carrier arrives into a picture that has already been pulled apart.

Concretely: as the carrier, you want to reach the line **half a stride to a full stride behind** your wingers. As a winger, you want to be **at the line, at speed, onside, before the puck gets there** — which is exactly what the trail-skate drag above is for.

### Arriving with speed is not the same as arriving early

```facts
Goal: Have your acceleration peak as the puck crosses the line
Action: Be slower thirty feet out so you can be faster at the line
Never: Arrive early and wait — standing still is easy to cover, and curling away loses your route
Key: Self-check — slowed down after crossing means you were early; crossing while accelerating into open ice means you were on time
```

Arriving early means you get to the line and then have to wait. Waiting at the line means either standing still — useless, because a stationary player is easy to cover — or curling away and losing your route.

Arriving with speed means your acceleration peaks **as** the puck crosses. To do that you often need to be *slower* thirty feet out so you can be faster at the line. This is counter-intuitive and it is the difference between a forward who looks fast and a forward who is dangerous. See [Skating](../technique/skating.md) for how to build the change of pace, and [Time and Space](../hockey-iq/time_and_space.md) for the general principle.

A useful self-check: if you crossed the line and then had to slow down to stay with the play, you were early. If you crossed the line accelerating into open ice, you were on time.

### Timing all three forwards to hit the line together

```facts
Goal: Three attackers crossing within about a second of each other, in three different lanes — one wide each side, one middle
Action: The middle lane player sets the clock — shortest route, so they adjust, usually by slowing or curling
Action: Wide players run their route full out and use the trail-skate drag to hold at the line if they beat the puck there
Read: Go anyway with two supports on time and one not. Delay when none of them are on time
Convention: On the power play coaches often want four across the line, two wide and two inside-dot — a common structure, not a universal one
```

The picture you want is **three attackers crossing the line within about a second of each other, in three different lanes** — one wide on each side, one in the middle.

![](diagram:entry-three-lanes)

How to get there:

- **The middle lane player sets the clock.** They are on the shortest route, so they must be the one who adjusts, usually by slowing or curling.
- **The wide players run their route full out** and use the trail-skate drag to hold at the line if they beat the puck there.
- **The carrier reads the picture and decides the moment.** If two supports are on time and one is not, go anyway; if none of them are, delay (see below).

On the power play, coaches often push this further and want **four across the line** — two wide lanes and two inside-dot lanes filled — so that the carrier always has an option. That is a common structure, not a universal one.

---

## 5. The delay / curl-back

Turning away from the blue line, keeping the puck, and coming back at the line once your support has caught up.

**It runs against instinct, because turning away from the offensive zone feels like retreating.** A wasted entry at rec and youth level is characteristically a player who arrived at the line alone and did *something* — forced a carry into two defenders, threw a hopeful pass, fired a dump-in with nobody chasing — rather than turning away and waiting one second. ⚠️ **This document has no figure for what share of wasted entries that accounts for — read it as a coaching observation rather than a measurement.** [Time and Space](../hockey-iq/time_and_space.md) teaches the same turn as a general skill, including where it belongs and where it does not.

**The manoeuvre has a governing body's name and definition, and it is coaching material rather than a rule.** The IIHF's *Coach Development Program, Level I (Tactical)* lists **delaying** among the ways to shake a defender one-on-one: *"When an attacker is cut off from moving to the net with the puck, a delay movement can create time and space for the attacker"* — by *"a tight turn toward the boards to create space between the puck carrier and defender"*, by a player who *"'fades' to outside and momentarily creates space for himself"*, or by *"a quick stop, facing the centre of the ice surface"* (§19.1.2). That names the tactic and its purpose. **It does not tell you when your team wants it**, and the manual is a **2002** file, so treat it as a governing body's vocabulary for what you are doing rather than as current instruction. The re-attack with support in step 5 is this guide's, not the IIHF's; the nearest thing the manual says is that a player under tight checking *"may attempt to hold off the defender until a teammate moves in to provide support."*

**⚠️ The IIHF's third option is a stop, and step 1 below says do not stop. Those are two different moments, not a disagreement.** Step 1 is scoped to approaching the line **alone or outnumbered**, where you are not going to out-stop the coverage. The IIHF's is scoped to an attacker already cut off from the net by one defender — and the manual attaches its own limit to it, in a separate *Quick Stop* entry: it works *"if the defender is not able to stop as quickly"*, and *"against a skilled defender, it will be necessary for the puck carrier to move laterally with the puck immediately after the quick stop in order to gain the necessary space."* Read step 1 with its scope attached, not as a flat rule about stopping.

### How to do it

```facts
Never: Stop when approaching the line alone or outnumbered — stopping there ends the entry
Convention: A quick stop is on the IIHF's list of delay movements — but for an attacker already cut off one-on-one, and only where the defender cannot stop as quickly
Action: Turn away from the pressure and curl back toward the neutral zone, body between defender and puck
Never: Take contact with your back to the boards. Curl in open ice instead, not against the wall
Technique: Near the wall, skates parallel to the boards, take it on your forearm and hip, head up and chin off your chest
Action: Look back up ice as you curl — eyes to where support is coming from, not to the defender
Action: Slow the play deliberately for one or two seconds, which is how long late support takes to arrive at speed
Action: Attack the line again with the puck on whoever has the best angle and the most speed — often not you
```

1. Approaching the line alone or outnumbered, **do not stop**. Stopping there ends the entry.
2. **Turn away from the pressure** and curl away from the line, back toward the neutral zone, protecting the puck with your body between defender and puck.

   > **⚠️ One safety override, and it outranks the play.** Curl in open ice, not against the wall. **Never take contact with your back to the boards.** Near the wall the orientation to aim for is **skates parallel to the boards**, taking it on your **forearm and hip**, head up and chin off your chest; squaring your chest to the wall is the fallback for when you cannot turn, and your back is never an option. Turning your back to an oncoming checker makes the contact a hit from behind, and USA Hockey's warning on those is flat: *"even a light hit from behind could inflict a severe head or neck injury."* Keeping your chin off your chest is the other half of it, and a separate injury — a tucked chin straightens the cervical spine, and of a head-first collision with the boards in that position USA Hockey says a player *"doesn't have to be going at full speed for this to happen — it can occur at walking speed."* What occurs at walking speed is the **injury**, not merely the contact — and the finding is not USA Hockey's own: it credits *"research done among a wide range of hockey players"* and prints the citation beneath it, **Charles H. Tator and colleagues, *Spinal Injuries Due To Hockey*, Canadian Journal of Neurological Sciences 11:34–41.** Protecting the puck never justifies either. Full treatment in [Body Contact and Battles](../technique/body_contact_and_battles.md), which covers this.
3. **Look back up ice** while you curl. Your eyes go to where support is coming from, not to the defender.
4. **Slow the play** deliberately for one or two seconds, which is how long it takes your late support to arrive at speed.
5. **Attack the line again** with the puck now in the hands of whoever has the best angle and the most speed — often not you.

![](diagram:entry-delay-curl)

### Why it works

You have converted a bad entry into a **fresh entry with support**. In the numbers from Section 1, you have moved yourself off the failed-carry row and back onto the successful-carry row. You also drag defenders toward you as you curl, which stretches the space behind them for the teammate arriving late.

### Why people don't do it

Because turning away from the offensive zone feels like retreating, and because a delay puts the puck on your stick for an extra second with a defender on your back, which feels dangerous. It is not — **in open ice**, which is exactly why the override above tells you to curl there and not against the wall. Losing the puck at the top of the circles on a forced entry is far worse than losing it in the neutral zone with everyone in front of you.

### When *not* to delay

```facts
Read: Numbers now that will be gone in a second — take the odd-man rush instead
Never: Delay with nobody behind you — a delay only works if support is genuinely coming
Action: If your line is caught out and the bench is calling, get it in deep and change
Never: Delay back over the blue line while a teammate is deep in the zone — you will create a delayed offside and freeze that teammate where they stand
Never: Curl against the wall. Curl in open ice instead, and if you cannot get off the boards take the contact rather than turning away into them
Technique: Taking it against the boards, skates parallel to the wall, forearm and hip into it, head up and chin off your chest
```

- When you have numbers now and they will be gone in a second — take the odd-man rush.
- When you have nobody behind you at all. A delay only works if support is genuinely coming. If your line is caught out and the bench is calling, get it in deep and change.
- When a delay would drag you back over the blue line while a teammate is deep in the zone — you will create a delayed offside and freeze them.
- **When you are tight to the wall with a checker closing.** This one limits *how* you curl rather than whether: curl into open ice, and if you cannot get off the boards, take the contact with your **skates parallel** to them, on your **forearm and hip**, **head up and chin off your chest** — never turn away into the wall. §5 above covers this, and it outranks the play.

---

## 6. Drop passes

A **drop pass** is a pass backwards, usually left behind you as you cross paths with a trailing teammate, so that the trailer picks it up moving forward at speed while the defence's attention is still on you.

### How it works

```facts
Action: Attack the line to draw the defenders' eyes and weight, then leave the puck in the space the trailer is skating into
Technique: Drop to a space, not to a stick — you leave the puck, the receiver skates onto it
Action: Keep going hard into the zone as though you still have it, so you take a defender with you
Key: There must be a speed differential — the trailer moving faster than the defenders can adjust
Options: On the power play, attack straight at the first penalty killer to freeze them, then drop underneath into space
```

The carrier attacks the line, drawing the defenders' eyes and weight toward the puck. A teammate arrives from behind and slightly to one side. The carrier leaves the puck stationary or gently rolling into the space the trailer is skating into, then keeps going — hard — into the zone as though they still have it.

Three things make it work:

1. **The drop is to a space, not to a stick.** You leave the puck; the receiver skates onto it.
2. **The carrier's route after the drop is the whole point.** If you drop the puck and coast, the defence simply switches to the new carrier and nothing has changed. If you drive the net, you take a defender with you.
3. **There is a speed differential.** The trailer must be moving faster than the defenders can adjust. On the power play this is the classic use — the puck carrier attacks straight at the first penalty killer to freeze them, then drops underneath into space.

### When it's right

```facts
Read: A passive neutral zone that backs off and gives you the red line for free — the trailer gets a running start at a stationary wall
Read: Breakouts and power-play entries, where you can choreograph the timing in advance
Read: A defence that has over-committed to the carrier's side
```

- Against a passive neutral zone that backs off and gives you the red line for free — the trailer gets a running start at a stationary wall.
- On breakouts and power-play entries where you can choreograph the timing in advance.
- When the defence has over-committed to the carrier's side.

### Why it fails so often

```facts
Risk: The drop goes backwards into nobody — the worst turnover in hockey, collected by a defender facing your net
Never: Let both players slow down — a drop pass at low speed is a gift
Risk: A receiver with no lane, no support and no speed is the lone attacker the drop was supposed to avoid creating
Never: Use it as a reflex — it answers one picture, a trailing teammate with speed and space behind you
Key: See the trailer before you drop it; if you are dropping it blind and hoping, throw it away instead
```

- **The drop goes backwards into nobody.** The trailer is not there yet, or is on the wrong side, and the puck sits in the neutral zone for a defender to collect facing your net. This is the worst turnover in hockey.
- **Both players slow down.** A drop pass at low speed is a gift.
- **The receiver has no plan.** They pick it up with no lane, no support and no speed and are now the lone attacker the drop was supposed to avoid creating.
- **It is used as a reflex, not a read.** A drop pass is a specific solution to a specific picture — a trailing teammate with speed and space behind you. Used because you didn't know what else to do, it is just a turnover facing the wrong way.

Rule of thumb: **you should see the trailer before you drop it.** If you are dropping it blind and hoping, throw it away instead.

---

## 7. Dump-ins: five types and the read that calls for each

> **Strong side and weak side.** The **strong side** is the half of the ice the puck is on; the **weak side** is the other half. Both flip the instant the puck crosses the middle, so they describe where the puck is, not fixed positions.

Putting the puck in without possession is not one play. It is at least five, and choosing the wrong one is most of why dump-ins get a bad name. The unifying rule is the same in all cases: **the puck goes to a place your teammate is already going.** A dump-in without a chaser is a change of possession you chose.

### 1. The hard rim

```facts
Action: Fire the puck low and hard around the boards, following the curve of the corner, onward in the direction of play
Read: Pressure on you from the inside, and a teammate coming down the far wall or the far corner
Goal: Beat the defenceman stepping up on you and arrive at the far side before their partner can rotate
Key: A rim is not a reverse — a reverse goes back against the flow, behind you, for a different purpose
Risk: Too soft and it dies behind the net; too hard and it comes off the far boards to the weak-side defenceman
```

Fire the puck low and hard around the boards, following the curve of the corner, so it travels **onward around the boards** in the direction of play.

- **The read:** pressure is on you from the inside, and you have a teammate coming down the far wall or the far corner.
- **Why:** the rim beats the defenceman who is stepping up on you, and it arrives at the far side before their partner can rotate.
- **Careful:** a rim is not a **reverse**. A reverse goes *back against the flow* of the play, behind you, and it is a different play with a different purpose. Be precise about which one you are calling for.
- **Risk:** a rim that is too soft dies behind the net; a rim that is too hard comes off the far boards straight to the weak-side defenceman.

![](diagram:dump-hard-rim)

### 2. The soft area dump

```facts
Action: Place the puck gently into a specific area, usually a corner, so it dies there rather than rebounding
Read: A forechecker arriving in roughly two seconds, and a defence that has to turn and retrieve
Goal: Give your chaser a stationary puck and a body arriving on it, and give the retriever no help from the puck's momentum
Never: Use it when your chaser is four seconds away — you have just given the puck to their defenceman with time
```

Place the puck gently into a specific area — usually a corner — so that it dies there rather than rebounding.

- **The read:** you have a forechecker arriving in roughly two seconds, and the defence has to turn and retrieve.
- **Why:** the value is entirely in the race. A soft dump gives your chaser a stationary puck and a body arriving on it, and gives the retrieving defenceman no help from the puck's momentum.
- **When it's wrong:** when your chaser is four seconds away. Then you have just given the puck to their defenceman with time.

![](diagram:dump-soft-area)

### 3. The chip past a defenceman stepping up

```facts
Read: A defender committing hard and early, with space behind them on the wall
Action: Lift or push the puck past them down the wall and skate around the other side to collect it yourself
Technique: Chip early, off the boards if you need to lift it over a stick, and change your line before you release so you are already accelerating around them
Key: A chip past a defenceman stepping up is a possession play, not a surrender — you are using their own momentum against them
Mindset: Giving up the puck for a second at full speed feels wrong; it is one of the highest-value plays against an aggressive gap
```

The defenceman steps up to meet you at or before the line. You lift or push the puck **past them, down the wall**, and skate around the other side to collect it yourself.

**A chip past a defenceman stepping up is a possession play, not a surrender.** You are not giving the puck up; you are using the defender's own momentum against them. They are moving toward you; the puck is going behind them; you are going around them. If your feet are moving, you get it back and you are behind their defence with speed.

- **The read:** a defender committing hard and early, and space behind them on the wall.
- **The technique:** chip it early, off the boards if you need to lift it over a stick, and change your line **before** you release so you are already accelerating around them.
- **Why it's under-used:** it requires you to give up the puck for a second while going full speed at someone, which feels wrong. It is one of the highest-value plays available against an aggressive gap.

Note the terminology: a **pinch** is a defenceman stepping down from the *offensive* blue line. A defenceman challenging you in the neutral zone or at their own line is **stepping up**. Both are commonly called pinches in conversation; be precise when you are describing what happened.

![](diagram:dump-chip-past)

### 4. The cross-corner (north-south) dump

```facts
Action: Shoot the puck hard diagonally into the far corner, or straight north down your own side, depending on where your speed is
Read: The retrieving defenceman is on your side, or the strong-side corner is crowded
Goal: Force their weak-side defenceman into a long retrieval on his backhand, facing his own boards, with a forechecker arriving — awkward by design, though no count ranks retrievals
Never: Dump cross-corner into nobody — your far-side winger has to have read it and be going there
```

From one side of the ice, shoot the puck hard **diagonally** across into the far corner, or straight north down your own side depending on where your speed is.

- **The read:** the retrieving defenceman is on your side, or the strong-side corner is crowded.
- **Why:** it moves the puck away from the defender best placed to get it and forces their weak-side defenceman into a long retrieval on their backhand, facing his own boards, with a forechecker arriving behind them. That is an awkward retrieval by design; which retrievals are hardest is coaching judgement rather than a counted ranking.
- **What you need:** your far-side winger to have read it and be going there. Cross-corner dumps into nobody are pure giveaways.

![](diagram:dump-cross-corner)

### 5. The flip / area dump over a trap

```facts
Read: The opposition congesting the neutral zone — a trap, most commonly a 1-3-1 — and no route along the ice
Action: Lift the puck high off the ice so it travels over sticks and bodies and lands in open space behind the defence
Technique: Open the blade, get under the puck, and land it past the defence but before the goal line
Goal: Go over the three-man wall rather than through it, and hang the puck long enough for your forwards to run underneath it
Risk: An overshot flip that crosses the goal line untouched from behind the centre red line is icing; being shorthanded does not always save you, and Rules Primer covers the rule
Rule: A shorthanded team is exempt from icing under NHL 81.6 and USA Hockey 624(b)(1), but USA Hockey grants that only "For all Youth 15-Only and above, Girls 16U and above, High School and Adult classifications only", and 81.6 withdraws it from a team short by a major with nobody on the penalty bench
```

Lift the puck high off the ice so it travels over sticks and bodies and lands in open space behind the defence.

- **The read:** the opposition are congesting the neutral zone — a **trap**, most commonly a **1-3-1** neutral zone structure with one forechecker, three players across the middle and one back — and there is no route along the ice.
- **Why:** a flip does not have to get through the three-man wall; it goes over it. It also hangs long enough for your forwards to run underneath it.
- **How:** open the blade, get under the puck, and aim to land it **past** the defence but **before** the goal line so it does not carry through for icing. Beware: a puck crossing the goal line untouched from behind the centre red line is **icing**. ⚠️ **Being shorthanded does not always save you.** USA Hockey grants that exemption *"(For all Youth 15-Only and above, Girls 16U and above, High School and Adult classifications only)"* (Rule 624(b)(1)), so at 14U and Girls 14U and below a shorthanded team is called for icing like anyone else; and NHL Rule 81.6 withdraws it from a team short by a *major* that has *"neglected to ensure there is a player on the penalty bench to exit upon the expiry of the penalty"* — *"Icing will be called."* See the [Rules Primer](../foundation/rules_primer.md) for the full icing rule, including hybrid icing.

![](diagram:dump-flip-over-trap)

### How the trapezoid shapes where you aim

```facts
Rule: A goalkeeper may not play the puck outside the designated area behind the net — a two-minute delay-of-game minor (NHL Rules 27.8 and 63.2(viii))
Rule: On a trapezoid violation what is judged is the position of the puck, not the goalie's; the only exception is playing it while maintaining skate contact with his crease (NHL Rule 27.8)
Rule: The trapezoid applies in the NHL and IIHF (IIHF Rule 27.7); KHL reportedly too, unverified here. In England and Wales it is unsettled — England Ice Hockey's Rules & Regulations 22.3 say it is "not currently enforced" — so plan for their goalie to come for a dumped puck, and ask your league
Key: Neither the USA Hockey nor the Hockey Canada book has a trapezoid, so a league running on either has none; Britain runs the IIHF book, which does have it
Action: Dump to the corners, not to the goalie — the corners are legally out of bounds for him, straight behind the net is not
Action: If you must put it behind the net, put it there hard — a rocketing puck is far harder to stop and distribute cleanly
Action: Where there is no trapezoid, rim it hard and low so he cannot set up on it, or dump to the corner furthest from his stick hand
Rule: Where there is no trapezoid the forecheck still pays — USA Hockey 614(c) bars a goalkeeper freezing the puck outside the "goalkeeper's privileged" area, which excludes the corners, and its Casebook Situation 6 penalises beating a lone attacker to a loose puck and falling on it
Rule: Hockey Canada's Interpretation 3 to Rule 10.1(a), clause v, makes freezing it a minor with no warning once the goaltender has left the crease — and clause iv names your dump-in exactly: coming out to beat an attacking player to the puck and simply jumping on it
Read: Those clauses are about a retrieval, not a save — a cover made after a save outside the crease is a different case in both books, and Goaltender owns it
Rule: Chasing their goalie is not licence to hit them — the IIHF's 42.1, the NHL's 42.1, USA Hockey 607(d) and Hockey Canada 8.5 all say a goalkeeper is not "fair game" outside the crease, and Hockey Canada 8.5(b) makes a major plus a game misconduct automatic for charging the goaltender
```

Under **NHL Rule 27.8**, *"a goalkeeper shall not play the puck outside of the designated area behind the net."* Playing the puck outside it, behind the goal line, is a **two-minute minor for delay of game** (Rules 27.8 and 63.2(viii)).

**Take the dimensions from Rule 1.8, never from 27.8.** Rule 1.8 specifies the lines actually painted: they begin **seven feet outside each goal crease — eight feet from each goal post** — at the goal line and run back to points **eleven feet from each post** at the end boards, giving **22 feet across at the goal line widening to 28 feet at the boards**. Rule 27.8's own "six feet from either goal post" is stale wording from before the 2014-15 widening — it describes the **old** trapezoid (18 feet at the goal line widening to the same 28 at the boards), which is a coherent shape, just not the one painted today.

Two details that matter tactically:

- **"The determining factor shall be the position of the puck."** Not the goalie's position. He may stand wherever he likes; what is judged is where the puck is when he plays it.
- **The only exception is skate contact with the crease** — the minor is not assessed *"when a goalkeeper plays the puck while maintaining skate contact with his goal crease."* There is no teammate-based exception.

So: **the corners are legally out of bounds for the goaltender, and the area directly behind the net is not.**

That gives you a simple aiming rule where the trapezoid applies. **Dump to the corners, not to the goalie.** A puck that dies straight behind the net is a puck the goalie can legally stop and set for his defenceman, which is exactly the help you were trying to deny him. A puck in the corner has to be retrieved by a skater with a forechecker arriving.

If you must put it behind the net, put it there **hard** — the goalie can play it, but stopping a rocketing puck and distributing it cleanly is a much harder job than corralling a soft one.

**Where the trapezoid applies:** the NHL and IIHF play (IIHF Rule 27.7, with the area defined as 6.80 m along the goal line widening to 8.60 m at the boards). **The NHL's commonly given 2005-06 start date is in no rulebook held here** — its Rules 1.8, 27.8 and 63.2(viii) carry no date at all — so treat it as the received date rather than a checked one. **The KHL is commonly said to have one too, though that one is unverified here: no KHL rulebook was available to check it against.** **In England and Wales, treat it as unsettled.** The IIHF book is the one in force and the In-House Rules do not amend Rule 27, in the current 2026-27 edition or the 2025-26 one before it — but England Ice Hockey's own *Rules & Regulations* 22.3 say the restricted area is *"not currently enforced to allow ice rinks the necessary time to make the changes to implement this rule"*, and that edition is 2024-25 while both In-House editions are silent on it. For you as the attacking team the safe assumption runs the other way: plan as though their goalie **may** retrieve the puck. Ask your league, and look behind the net to see whether the lines are painted at all. **Neither North American governing body's book has one:** the *USA Hockey Playing Rules 2025-29* and the *Hockey Canada Playing Rules 2026-2028* mark no goalkeeper's restricted area and put no limit on *where* a goalkeeper may play the puck, so a league running on either book has none. **How much rec, beer-league and youth hockey that adds up to is a question about leagues rather than about books, and this document has no count for it.** Where there is no trapezoid a puck-handling goalie can go anywhere behind his goal line, which flips the advice: rim it hard and low so he cannot set up on it, or dump to the corner furthest from his stick hand. **Under either of those books the forecheck still pays, though**, because neither lets their goalkeeper smother a dumped puck out there: USA Hockey Rule 614(c) bars *freezing* it outside the *"goalkeeper's privileged"* area, which excludes the corners, and Hockey Canada's Interpretation 3 to Rule 10.1(a), clause v, assesses a minor with no warning once the goaltender has left the crease. **Both books have a clause written for exactly the play you are making, and both run your way.** Hockey Canada's **clause iv** of the same Interpretation names it: a goaltender who comes out *"to beat an attacking player to the puck and simply jumps on the puck, causing a stoppage of play"* takes a minor, and *"[n]o warning will be issued in this instance."* USA Hockey's *Casebook* works the identical facts at **Rule 614(c), Situation 6** — the goalkeeper rushes a loose puck inside their own privileged area to beat a lone attacker to it and falls on it — and answers **Yes**, a minor, because *"[t]he goalkeeper has an obligation to play the puck with their stick, just like any other player."* **Situation 12** adds the boundary: a cover made *"behind the goal line or outside of the privileged area"* is one where the minor *"must be assessed."* ⚠️ **Do not carry that to a goaltender who came out to make a *save*** — a cover taken after stopping a shot is a different case in both books, and one where the carve-outs run the other way. [Goaltender](../positions/goaltender.md) owns all of it. So a dumped puck in the corner still has to be played rather than smothered, and the chase is what forces it. ⚠️ **Forcing it is not licence to hit them, and this part is not scoped to the books without a trapezoid — all four say it in terms.** **USA Hockey Rule 607(d)**: *"A goalkeeper is NOT 'fair game' because they are outside the privileged area. A penalty for interference or charging should be called in every case where an opposing player makes unnecessary contact with a goalkeeper."* **Hockey Canada Rule 8.5** puts it in the same words and stretches it further — *"A Goaltender is not 'fair game' just because they are outside their goal crease. A penalty under this rule will be called where an opposing player makes unnecessary contact with the goaltender anywhere on the ice."* **The IIHF writes it twice**, at **42.1** in the charging rule and again at **69.4**: *"A goalkeeper is not 'fair game' just because they are outside the goal crease area. The appropriate penalty should be assessed in every case where an opposing Player makes unnecessary contact with a goalkeeper."* ⚠️ **That is the sentence a British reader is playing under** — IHUK and BUIHA adopt the IIHF Rule Book *"as the foundation for the rules of the game to be applied in England, Wales, Scotland and Northern Ireland"*, and their In-House Rules amend Rule 69 only as to video review, leaving 42.1 and 69.4 untouched. **NHL 42.1** carries the same sentence word for word.

⚠️ **The books then diverge on the accident, and this document errs strict on purpose.** The IIHF and the NHL both add a permission with its limit attached inside the same sentence — *"However, incidental contact, at the discretion of the Referee, will be permitted when the goalkeeper is in the act of playing the puck outside their goal crease, provided the attacking Player has made a reasonable effort to avoid such contact"* (IIHF 42.1; NHL 42.1 in the same words). **USA Hockey writes no such permission.** Its **Note 1 to 607(d)** sends *"any accidental or unavoidable contact that occurs with the goalkeeper"* to the interference rule, and *"[a]ny deliberate body contact or check that is delivered to the goalkeeper"* to charging. **So contact that is a referee's discretion under the IIHF and the NHL is a penalty under USA Hockey**, and the way to be right under all four is the same: make the effort to avoid, and do not treat a goalie outside his crease as a hittable player.

**The tier is the reason to care.** Under **USA Hockey 607(c)** a body check or charge on a goalkeeper inside the crease or privileged area is *"a minor plus a misconduct or a major plus a game misconduct"*, the upper half of which is an ejection. ⚠️ **Hockey Canada does not leave the worst version of it to the referee at all.** Its **8.5(b)** keeps the major discretionary for ordinary interference — *"A Major penalty and Game Misconduct penalty, at the discretion of the referee, based on the degree of violence of impact, may be assessed to any player who commits interference with the goaltender"* — and then takes the discretion away for the hit this section is about: *"A Major penalty and Game Misconduct penalty **will** be assessed to any player who charges the goaltender."* **That is an automatic ejection**, and two other places in the book say the same: **8.5(e)**, *"A Game Misconduct penalty must be assessed any time a Major penalty is assessed for interference with the goaltender"*, and **Interpretation 3 to Rule 7.4(b)**, which routes contact on a goaltender in the crease *"that could be described as charging"* to exactly that outcome — *"a Major penalty and Game Misconduct penalty for Interference must be assessed."* ⚠️ **And Hockey Canada's bar for "charging" is low enough to reach an ordinary hard chase:** **Rule 7.4** counts a player who *"[b]uilds up speed by taking two or more strides immediately prior to making contact"*, as well as one who jumps, travels an excessive distance, or checks violently and unnecessarily. **Arrive on the puck, not on the goalie.**

![](diagram:dump-and-the-trapezoid)

*Flagged:* two NHL rules give different trapezoid dimensions at the goal-line end — Rule 27.8 says the lines *"begin six feet (6') from either goal post"*, while Rule 1.8 describes the markings as seven feet outside each goal crease (eight feet from each goal post). Rule 1.8 matches the IIHF's 6.80 m figure, so 27.8's text appears to be stale. Nothing about how you play changes either way; the corners are outside it under any reading.

---

## 8. Chasing a dump properly

A dump-in is only as good as the chase. Most amateur chases fail before they start because the chaser skates at the puck.

### Angle, don't chase

```facts
Never: Skate at the puck — your route should take away the easy escape, not shorten the distance
Read: The easy escape is up the boards or a reverse behind the net to their partner; the hard one is being hemmed on the wall or forced to his backhand
Action: Skate to a point between the retriever and where they want to go, arriving at the puck at an angle rather than head-on
Action: Approach on the retriever's backhand side where you can — that is where turnovers come from
Position: Keep your route on the inside, between the puck and the middle, so if they escape they escape to the boards, not into the slot
Technique: Stick first — leading, on the ice, in the passing lane you are eliminating, before your body arrives
Rule: A defenceman turned to retrieve has his back to you, so arriving through him is checking from behind — USA Hockey's Casebook (Rule 608, Situation 1) puts the major plus a game misconduct, or a match penalty, on a forceful check on a player standing along the boards
Rule: Hockey Canada 7.5 lists the head-down retrieval along the boards among the checks to enforce strictly; 7.5(a) is a minor plus a game misconduct for an intentional hit from behind "anywhere on the ice", so its minor still ends your night
Key: The measure of a good chase is whether the retriever's only remaining option was one you had covered
```

The retrieving defenceman has two escapes: the **easy** one (usually turning up the boards toward the neutral zone, or reversing behind the net to their partner) and the **hard** one (getting hemmed on the wall, or being forced to their backhand into traffic).

Your route should **take away the easy escape**, not shorten the distance to the puck.

- Skate to a point that puts you **between the retriever and where they want to go**, arriving at the puck at an angle rather than head-on.
- **Approach on the retriever's backhand side** where you can. A defenceman forced to make a backhand play under pressure, facing his own boards, is where turnovers come from.
- **Take a route that keeps you on the inside** — between the puck and the middle of the ice — so if they escape, they escape to the boards, not into the slot.
- **Stick first.** Your stick should be leading, on the ice, in the passing lane you are trying to eliminate, before your body arrives.
- **⚠️ Name the hit before you arrive.** A defenceman who has turned to retrieve has his back to you and his head over the puck, and arriving through him is **checking from behind**. **USA Hockey's *Casebook*** (Rule 608, Situation 1) requires the major plus a game misconduct, or a match penalty, *"[i]n every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)"*, and **Hockey Canada Rule 7.5** lists *"[w]here a player along the boards, with their head down looking for the puck or 'digging the puck out,' is hit from behind and driven head-first into the boards"* among the checks referees are told to enforce strictly, with **7.5(a)** a minor **plus a game misconduct** for an intentional hit from behind *"anywhere on the ice"*. The whole point of angling is that you take the escape away rather than arrive through him. [Body Contact and Battles](../technique/body_contact_and_battles.md) covers how to arrive.

The measure of a good chase is not whether you got the puck. It is whether the retriever's only remaining option was one you had covered.

### F1, F2 and what they owe each other

```facts
Key: F1, F2 and F3 are roles, not people — defined by order of arrival, not by position
Convention: Under the house default 2-1-2 forecheck, F1 goes to the puck and takes away the easy escape; F1's job is to force a decision, not to win the puck
Convention: F2 reads F1's angle and covers the side F1 forced them toward — F1 creates, F2 collects
Convention: F3 stays high, around the top of the circles, protecting against the breakout pass up the middle and the counter-attack — and that job ends if the puck escapes, because F3 is the first man back
Options: In a 1-2-2 F1 pressures but F2 and F3 hold higher, funnelling the puck to one side — fewer pucks recovered low, far fewer odd-man rushes
Options: In a 2-1-2 aggressive/overload both F1 and F2 attack the same side hard; in a 1-3-1 F1 pressures and three lock the neutral zone, which is a trap
Action: Find out which one your team plays — the same dump-in requires a different second man in each
```

**F1, F2 and F3 are roles, not people.** They are defined by order of arrival, not by position — whichever forward gets there first is F1, whoever is next is F2, regardless of whether they are the centre or a winger.

Under the **house default used throughout this guide — a 2-1-2 forecheck** — the relationship on a dump-in retrieval is:

- **F1** goes to the puck and takes away the easy escape as described above. F1's job is to force a decision, not necessarily to win the puck.
- **F2** reads F1's angle and covers **the side F1 forced them toward** — usually the strong-side wall or the area behind the net. F2 is the one who actually recovers most pucks; F1 creates, F2 collects.
- **F3** stays high, generally around the top of the circles, protecting against the breakout pass up the middle and the counter-attack. **That job ends if the puck escapes the zone: F3 is the first man back.**

**Other systems assign this differently.** In a **1-2-2**, F1 pressures but F2 and F3 both hold higher, funnelling the puck to one side rather than chasing it; you will recover fewer pucks below the goal line but concede far fewer odd-man rushes. In a **2-1-2 aggressive/overload**, both F1 and F2 attack the same side of the ice hard. In a **1-3-1 forecheck** F1 pressures and three players lock the neutral zone, which is barely a forecheck at all — it is a trap. **Find out which one your team plays**, because the same dump-in requires a different second man in each.

See [Forechecking Systems](forechecking_systems.md) for the full treatment.

---

## 9. Deciding: carry, dump, or delay

You have roughly half a second. Read these four things in this order.

### 1. Gap

```facts
Read: Gap is the distance between you and the nearest defender — Defending the Rush covers the scale to read it against
Read: Large gap, defender well off and backing in — carry. They have given you the line, so take it and get to the dots
Read: Normal gap, closing — you need a move or an angle: attack the outside shoulder, or chip past them if they are committing
Read: Tight gap, stick on you, standing up at the line — carrying is a low-percentage play. Chip past, dump, or delay
Convention: The tighter gap figure you will also hear is a deliberate coaching choice carried by Neutral Zone Systems, not the default scale
```

**Gap** is the distance between you and the nearest defender.

Read these against the defender's own scale, which [Defending the Rush](defending_the_rush.md) covers: **two to three stick lengths is a normal neutral-zone gap**, about a stick and a half at the red line, and about a stick length is what a defender aims for at their own blue line. Only the neutral-zone figure comes from a published coaching source; the other two are coaching convention, and no source was found for either. The tighter **one to one and a half stick lengths** you will also hear is not part of that owned scale — it is the coaching description of a *tight* gap carried by [Neutral Zone Systems](neutral_zone_systems.md), and it is a deliberate choice rather than the default.

- **Large gap (defender more than about three stick-lengths off, backing in):** carry. They have given you the line. Take it and get to the dots.
- **Normal gap (two to three stick-lengths, closing):** you need a move or an angle. Attack the outside shoulder, or chip past them if they are committing.
- **Tight gap (one to one and a half stick-lengths, stick on you, standing up at the line):** carrying is a low-percentage play. Chip past, dump, or delay.

### 2. Support

```facts
Read: Two or more teammates at the line with you, at speed — carry, or pass in
Read: One teammate arriving late — delay. One second of curl usually converts this into the case above
Read: With no support at the line, dump to a place someone can get to, or delay if anyone at all is coming, curling into open ice and never with your back to the boards
Never: Dump and change unless genuinely nobody is coming. Even then, recognise you have already lost this shift
```

- **Two or more teammates at the line with you, at speed:** carry, or pass in. This is what all the timing work in Section 4 was for.
- **One teammate, arriving late:** delay. One second of curl usually converts this into the case above.
- **Nobody:** dump to a place someone can get to, or delay if anyone at all is coming. If genuinely nobody is coming, put it in deep and change — but recognise you have already lost this shift, because dump-and-change was the worst-valued play in the games where Tulsky's group tracked it.

### 3. Score and time

```facts
Read: Tied, or early — play the percentages and be aggressive
Read: Protecting a one-goal lead late — dump it in, forecheck, burn clock, because a goal against costs more than a goal for gains
Read: Chasing a goal late — carry almost regardless; a dump-in with ninety seconds left surrenders possession you cannot afford to lose
Read: On a line change — the entry decision is secondary; get the puck deep or out of danger and change cleanly
Key: This is the one place where the analytics argument bends
```

This is the one place where the analytics argument bends. See [Game Management](game_management.md).

- **Tied, or early:** play the percentages. The break-even is around one-third confidence; be aggressive.
- **Protecting a one-goal lead late:** the cost of a turnover is asymmetric — a goal against costs you more than a goal for gains you. Dump it in, forecheck, burn clock.
- **Chasing a goal late:** carry almost regardless. A dump-in with ninety seconds left surrenders possession you cannot afford to lose.
- **On a line change:** the entry decision is secondary. Get the puck deep or out of danger and change cleanly.

### 4. Who you are

```facts
Read: The carry/dump threshold moves with team strength — Tulsky's group modelled this directly
Action: A skilled line against a weaker pair should be attempting carries at nearly any excuse (Tulsky's 26% figure)
Action: A fourth line against a top pair genuinely does have a higher bar (Tulsky's 44% figure)
Key: Even the 44% bar is still well below "only carry when it's certain"
Key: All three thresholds are modelled from one team's tracked games and an assumed shooting percentage — use the shape, not the number
```

Tulsky's group modelled this directly: the carry/dump threshold moves with team strength. A skilled line against a weaker pair should be attempting carries at nearly any excuse (their 26% figure). A fourth line against a top pair genuinely does have a higher bar (their 44% figure). **Both of those are still well below "only carry when it's certain."** All three thresholds come off the same decision curve, built from the Washington-game outcomes and from an assumed shooting percentage — 9% for and 7% against for the stronger team — so they are a shape to think with, not a dial to set.

### Carry, dump or delay: the one-sentence version

*Carry if you have the line or the support; chip if they are committing; delay if support is one second away — in open ice, never with your back to the boards; dump only to a place a teammate is already skating to; and never dump and change if you can help it.*

---

## 10. Entering against specific structures

### Against a standing-up defence

```facts
Read: They hold the blue line, take away the middle, and dare you to go around
Action: Chip and chase past them — a defenceman standing still has no momentum to recover, so this is the ideal chip situation
Action: Attack the seam between the two of them — two defenders holding a line have a gap between them by definition
Action: Use a late player — standing up requires them to watch the puck, so a fourth attacker arriving behind the play is often unmarked
Action: Change the entry point — swing the puck to the far side and enter on the weak side
```

They hold the blue line, take away the middle, and dare you to go around.

- **Chip and chase past them.** A defenceman standing still at the line has no momentum to recover. This is the ideal chip situation.
- **Attack the seam between the two of them.** Two defenders holding a line have a gap between them by definition.
- **Use a late player.** Standing up requires them to watch the puck; a fourth attacker arriving behind the play is often unmarked.
- **Change the entry point.** Cross the line where they aren't — swing the puck to the far side and enter on the weak side.

### Against a 1-3-1 neutral zone

```facts
Read: One forechecker, three across the middle, one back — the three-across layer is designed to kill the puck at the red line
Never: Skate into the three — that is the trap working
Action: Use the flip / area dump over the wall — this is what it exists for
Action: Move the puck side to side quickly — the three-man layer is strong facing forward and slow rotating laterally
Action: Attack the outside of the wall — the 1-3-1 concedes the boards to protect the middle, so take what it gives
Action: Use a stretch player held high behind their three, which forces the back player to stay honest and thins the wall
```

One forechecker, three across the middle, one back. The three-across layer is designed to kill the puck at the red line.

- **Do not skate into the three.** That is the trap working.
- **Use the flip / area dump over the wall** described in Section 7. This is what it exists for.
- **Move the puck side to side quickly** — the three-man layer is strong facing forward and slow rotating laterally.
- **Attack the outside of the wall.** The 1-3-1 concedes the boards to protect the middle; take what it gives.
- **Use a stretch player.** A forward held high behind their three forces the back player to stay honest, which thins the wall.

See [Neutral Zone Systems](neutral_zone_systems.md).

### Against an aggressive gap

```facts
Read: They close hard and early, well before their own line
Action: Chip past them — an aggressive gap is a defender with committed momentum, and this is the best possible situation for it
Action: Get the puck off your stick early; make the play a stride before they arrive
Action: Use the space behind the defenders — send a teammate into that ice and pass it to them there
Technique: Change of pace beats a move — hard deceleration then re-acceleration ruins a defender who is closing hard
Convention: That a change of pace beats a move is coaching craft, not a measured finding — the IIHF's coach-development manual and Edge Ice Academy both teach it, and neither measures it against a move or against top speed
```

They close hard and early, well before their own line.

- **This is the best possible situation for the chip past.** An aggressive gap is a defender with committed momentum.
- **Get the puck off your stick early.** Do not skate into a closing defender; make the play a stride before they arrive.
- **Use the space behind them.** Aggressive gap means there is ice behind them by definition. Send a teammate into it and pass it to them there.
- **Change of pace beats a move.** A hard deceleration then re-acceleration ruins a defender who is closing hard, because their speed is now a liability. **That ranking is coaching craft, not a measured finding** — the IIHF's coach-development manual and Edge Ice Academy both teach the change of pace, and neither measures it against a move or against top speed. See [Time and Space](../hockey-iq/time_and_space.md).

### On the power play

```facts
Convention: Four across the line, two wide lanes and two inside-dot lanes, so the carrier always has an option
Convention: Attack middle ice first — get the first pass to the dot line or the middle rather than pushing wide early
Options: The drop entry against a kill that sits back — attack the first killer to freeze them, then drop underneath
Options: Placement entries — a planned puck below the goal line, by chip or cross-corner, with the support routes already running
Options: Rim entries when pressure is all on the strong side; without a weak-side support player a rim is just a slow turnover
Key: Controlled entry still produces roughly two and a half times the shots of a dump-in on the power play — that figure is tracking of women's professional hockey, the PWHPA, not Tulsky's NHL sample
Key: The extra man narrows the penalty for getting an entry wrong rather than raising it — dump-ins get better on the power play, so the carry advantage shrinks
```

Entries on the power play are a distinct skill, and the most common failure of a bad power play is not the setup — it is that it cannot get in. That ranking is coaching emphasis, not a counted one; the shot-rate figure above it is the measured part.

Common coaching structures (these are choices, not laws):

- **Four across the line**, two wide lanes and two inside-dot lanes, so the carrier always has an option and the kill has to defend four threats.
- **Attack middle ice first.** Pushing the puck wide too early invites pressure and forces a chip. Get the first pass to the dot line or the middle.
- **The drop entry**, especially against a penalty kill that sits back: the carrier attacks straight at the first killer to freeze them, then drops underneath into the space that creates.
- **Placement entries** — a *planned* puck put below the goal line, by chip or cross-corner, into an area where you have a recovery advantage. Not a panic dump; the difference is that the support routes were already running when the puck was released.
- **Rim entries** when pressure is all on the strong side: a long rim to a weak-side support player. Without that support player, a rim is just a slow turnover.

The PWHPA data cited in Section 1 — women's professional hockey — gives power-play figures too — carry-ins **0.91** shots per entry and pass-ins **0.96**, against **0.38** for dump-ins. **Read those carefully, because they do not say what they are usually said to say.** Against the even-strength figures in Section 1 (carry-ins 0.73, dump-ins 0.14), the carry-in advantage **narrows** on the power play, not widens: the gap falls from 0.59 to 0.53 shots per entry, and the ratio collapses from more than five-to-one to under two-and-a-half-to-one. Dump-ins get *better* with the extra man — 0.14 to 0.38, which makes sense, because a four-man kill is worse at retrieving a puck than a five-man defence.

What survives is the direction, not a widening margin: **controlled entry still produces roughly two and a half times the shots of a dump-in on the power play**, so getting in with control still matters — but the extra man narrows the penalty for getting it wrong rather than raising it. If your unit cannot enter cleanly against a set kill, a dump-in on the power play is a less costly fallback than it is at even strength.

See [Special Teams](special_teams.md).

---

## 11. Defending the entry

Everything above, from the other side. This is the summary; [Defending the Rush](defending_the_rush.md) is the full document.

### Gap control

```facts
Key: Gap is the space between you and the puck carrier, and it is the whole game
Risk: Too much gap and they enter with speed, get their head up and make a play — you have conceded the controlled entry
Risk: Too little gap and one move or one chip beats you, and now they are behind you
Convention: The general target taught by most coaches is a gap that shrinks the whole way and never grows — Defending the Rush covers the distances
Key: Your gap should be whatever lets you match their next change of speed
Convention: That a change of speed is the harder thing for a defender to match is coaching craft rather than a measured finding — Time and Space carries the two coaching sources, neither of which measures it
Action: Skate backwards fast enough that you never have to turn — the moment you turn and run, the attacker chooses everything
```

**Gap** is the space between you and the puck carrier, and it is the whole game.

- **Too much gap** and they enter with speed, get their head up, and make a play. You have conceded the controlled entry Tulsky's tracking says is worth roughly double a dump-in in shot terms.
- **Too little gap** and one move or one chip beats you, and now they are behind you.
- **The general target**, and the scale [Defending the Rush](defending_the_rush.md) covers, is **two to three stick lengths through the neutral zone, about a stick and a half at the red line, and about one stick length by your own blue line** — shrinking the whole way, never growing. Only the neutral-zone figure comes from a published coaching source; the other two are coaching convention, and no source was found for either. But the number is less important than the principle: **your gap should be whatever lets you match their next change of speed.** That a change of speed is the harder thing to match is coaching craft rather than a measured finding — [Time and Space](../hockey-iq/time_and_space.md) carries the two coaching sources behind it, neither of which measures it.
- **Skate backwards fast enough that you never have to turn.** The moment a defender turns and runs, the attacker chooses everything.

### Standing up at the line

```facts
Action: Meet the entry at your own blue line rather than backing in
Goal: Kill controlled entries outright — if they cannot cross with the puck, they cannot get the controlled-entry shot rate
Risk: If you are beaten you are beaten badly — flat-footed at your own line with a forward behind you and only your goalie left
Key: It needs good reads, your forwards back, and a partner who slides with you rather than staying deep
```

Meeting the entry at your own blue line rather than backing in.

- **Upside:** it kills controlled entries outright. If they cannot cross with the puck, they cannot have the 0.53–0.62 unblocked shot attempts a successful carry-in was worth at 5-on-5.
- **Downside:** if you are beaten, you are beaten badly — you are flat-footed at your own line with a forward behind you and only your goalie left. It also needs your forwards to be back, because standing up assumes support behind you.
- **Needs:** good reads, and a partner who slides with you rather than staying deep.

### Forcing wide, and "receiving the entry"

```facts
Convention: The traditional approach — the defencemen stay roughly between the faceoff dots, mark the carrier and the slot, and steer the play outside
Goal: Make the entry happen where it is least dangerous
Key: Very hard to beat cleanly, and it keeps the middle protected
Risk: It concedes the entry — the attacker gets in with the puck, gets time on the wall, and can shoot with purpose looking for rebounds
```

The traditional approach, often taught as **receiving the entry**: the defencemen stay roughly between the faceoff dots, mark the carrier and the slot, and steer the play to the outside so the entry happens where it is least dangerous.

- **Upside:** very hard to beat cleanly, and it keeps the middle protected.
- **Downside:** it concedes the entry. The attacker gets in with the puck, gets time on the wall, and can shoot with purpose looking for rebounds.

### More aggressive alternatives — name them

```facts
Options: F1 pressure with the D holding the dots — the first forward back pressures the carrier while the defencemen hold their depth
Options: Squash-and-slide — the defenceman, not the backchecker, forces the carrier outside while the first forward back protects the slot
Technique: In squash-and-slide the two defencemen hold the same depth and slide across together like a foosball bar
Risk: Squash-and-slide demands a great deal from the forwards — one lazy backcheck and the weak side is wide open
Convention: These are systems, not laws — which one your team plays changes whether you step up, hold the dots, or take the puck
Action: Ask, and then talk to your partner about it before the puck drops
```

- **F1 pressure with the D holding the dots:** the first forward back pressures the carrier while the defencemen hold their depth. Requires the defencemen to talk and to step on the cross-ice pass.
- **Squash-and-slide** (as described publicly of Bruce Cassidy's Boston Bruins around 2018-19): the defenceman — not the backchecker — forces the carrier outside, while the first forward back protects the slot. The two defencemen hold the same depth and slide across together like a foosball bar, "squashing" the play against the wall if it goes wide and closing in on it if it goes inside. It buys time and space back at the cost of demanding a great deal from the forwards; one lazy backcheck and the weak side is wide open.

**These are systems, not laws.** Which one your team plays changes your job completely — whether you step up, whether you hold the dots, whether the first forward back takes the puck or the slot. Ask, and then talk to your partner about it before the puck drops.

### The defender's version of the offside rule

```facts
Key: You do not have to prevent the entry, only make it uncontrolled — a stick in the passing lane that forces a dump has done the same job as a hit
Action: Force them to cross before the puck — stepping up at exactly the right instant can make an onside attacker offside
Rule: The defending team passing or carrying the puck into the neutral zone nullifies a delayed offside and resets everything (NHL Rule 83.3(ii); IIHF Rule 83.3(II) the same)
Rule: Head up as you retrieve — the pressure and contact triggers protect the "defending puck carrier" only (NHL and IIHF 83.3, USA Hockey 630(d)), so that protection lapses the instant you make the outlet pass; Hockey Canada 6.11(b)(ii) (the stop-play clause) writes neither
Rule: The shot that caused the delayed offside cannot score — not directly, not off you, the goalie, the boards or an official (NHL Rule 83.4; IIHF Rule 83.4 word-for-word)
Never: Treat your own net as safe here. Under NHL and IIHF Rule 83.4, the one goal that can still count is the puck you put in yourself — so play it out cleanly
Rule: USA Hockey and Hockey Canada differ — USA Hockey's Casebook (Rule 630, Situation 41) disallows even a defending team's own goal, and Hockey Canada writes no own-goal sentence at all, so nothing settles it there
Rule: Read USA Hockey's Casebook Rule 630, Situation 41 to the end — it bars the goal while the delayed offside is live and on the offending shot, but allows any goal legally scored once the attackers have tagged up, so your own net is live again
```

Everything in Section 2 works for you too:

- **You do not have to prevent the entry, only make it uncontrolled.** A stick in the passing lane that forces a dump has done the same job as a hit.
- **Force them to cross before the puck.** A defender who steps up at exactly the right instant can make an onside attacker offside, because the judgement happens at the moment the puck crosses.
- **On a delayed offside, get the puck out of the zone — head up, and not as though the raised arm were a shield.** Rule 83.3(ii): passing or carrying the puck into the neutral zone nullifies it and resets everything. **⚠️ Where the books protect you at all, they protect the *puck carrier* — so the protection lapses the instant you make the outlet pass.** The NHL and IIHF stop play for an attacker who *"forces the defending puck carrier further back into his own zone"* or *"is about to make physical contact with the defending puck carrier"* (Rule 83.3), and **USA Hockey Rule 630(d)** for one who *"continues to apply pressure to the defending puck carrier"* — every one of those names the carrier. **Hockey Canada's Rule 6.11(b)(ii) (the stop-play clause) writes neither limb**, so it stops play only for an attacker who touches the puck or goes for a loose one *"while the puck is still in the attacking zone"*. And in none of the four does a whistle for an imminent hit stop a body already committed at speed. Know where the forechecker is before you put your head down over the puck. ([Rules Primer](../foundation/rules_primer.md) owns this.)
- **Know the disallowed-goal rule, and its one exception.** If they shot it in on a delayed offside, that shot cannot score — Rule 83.4 disallows it *"either directly or off the goalkeeper, a player, the boards, the glass, a piece of equipment or an official"*, and clearing the zone first makes no difference. So do not panic. **But read the rest of 83.4:** *"The only way an attacking team can score a goal on a delayed off-side situation is if the defending team shoots or puts the puck into their own net without action or contact by the offending team."* You are the one person on the ice who can still put that puck in. Play it out, and play it out cleanly. **The IIHF's Rule 83.4 carries both halves in exactly those words**, so this is the British rule as well as the NHL one. **The two North American books do not follow it, and they do not agree with each other either.** Hockey Canada writes no own-goal sentence at all, so nothing settles the case there and you should not test it. **USA Hockey settles it the other way:** its Casebook, at Rule 630 Situation 41, disallows the goal *"[e]ven if the defending team shoots, passes or deflects the puck into its own goal"*, and disallows it too where the attacking team cleared the zone first — so under that book the puck in your own net cannot beat you here. **Read the scope on that, though: Situation 41 ends by allowing any goal legally scored where the puck was not shot directly on goal and the attacking team has cleared the zone**, so the protection covers the offending shot and the live delayed offside, not the seconds after a clean tag-up. Once they have tagged up you are playing ordinary hockey again, and an own goal counts. Know which of the three positions your book takes before you decide how much that puck is worth. ([Rules Primer](../foundation/rules_primer.md) covers this rule.)

---

## Common Mistakes

- **Dumping the puck in because it feels responsible.** In the Washington games inside Tulsky's sample — the only ones where failed attempts were tracked — the average carry attempt was worth more than three times the average dump-and-chase on net value (+0.42 against +0.12), and double on raw shots for (0.48 against 0.24). Either way, failed carries cost far less than everyone assumes. Dumping is a tool, not a default.
- **Dumping and changing.** In those same Washington games this was the *only* entry type with a worse net value than a failed carry-in. If you need a change, change before you get the puck.
- **Dumping to nobody.** A dump-in with no chaser is not a dump-in, it is a pass to their defenceman. Look before you release.
- **Arriving at the line early and having to stop.** Being fast to the line is worthless if you have to wait there. Be slower thirty feet out and faster at the line.
- **The puck carrier arriving first.** Then there is no support, and one player against two defenders is a turnover with extra confidence.
- **Never delaying.** The curl-back is free, and it runs against instinct — turning away from the offensive zone feels like retreating. If you are alone at the line, turning away is not retreating; it is the difference between a wasted entry and a real one. **Curl in open ice, though, not against the wall** — never take contact with your back to the boards. Near the wall, turn only as far as skates parallel to it, taking the hit on your forearm and hip, head up and chin off your chest.
- **Blind drop passes.** If you cannot see the trailer, do not drop it. A drop pass to an empty patch of neutral ice is the worst turnover in the game because everybody on your team is facing the wrong way.
- **Skating straight at the puck on the forecheck.** Angle to take away the escape, not to shorten the distance.
- **Dumping straight behind the net where the trapezoid applies.** You have just handed the goalie a legal touch and let him set the puck up for his defenceman. Use the corners.
- **Arriving on the goalie instead of the puck.** A goaltender out of his crease playing a dumped puck is not a hittable player: all four books say he is not *"fair game"* out there (IIHF and NHL 42.1, USA Hockey 607(d), Hockey Canada 8.5). Hockey Canada 8.5(b) makes a major plus a game misconduct **automatic** for charging the goaltender — an ejection with no referee's discretion in it — and its charging bar reaches *"two or more strides immediately prior to making contact"* (7.4). USA Hockey 607(c) puts a check or charge on a goalkeeper in the crease or privileged area at *"a minor plus a misconduct or a major plus a game misconduct"*, and its Note 1 to 607(d) penalises even *"accidental or unavoidable contact"* as interference, where the IIHF and NHL permit incidental contact only while he is playing the puck and only if you made a reasonable effort to avoid it. Take the puck.
- **Coasting over the line on a delayed offside.** Tagging up needs **skate contact with the blue line** in all four books. Being in the air over it does not clear you, and one player not tagging keeps the whole team frozen. The zone has to be empty before anyone re-enters, in all four books — three word it *"at the same instant"* and Hockey Canada as *"completely clear of attacking players"*, which comes to the same thing. Tag as one and you are legal everywhere. (And check your book: under USA Hockey Rule 630(d) there is no tag-up at all below Youth 15-Only, Girls 16U, High School and Adult — the whistle goes immediately. Hockey Canada sets no such classification limit.)
- **Forechecking during a delayed offside, and expecting the whistle to protect you.** Under the NHL and the IIHF, being *about to make physical contact* with the defending puck carrier is itself a whistle (Rule 83.3). **⚠️ Under USA Hockey Rule 630(d) and Hockey Canada Rule 6.11(b)(ii) (the stop-play clause) it is not** — neither book writes a contact trigger, so nothing you can rely on stops play before you arrive and the defenceman is not braced for you. Hockey Canada writes no pressure trigger at all; USA Hockey 630(d) does whistle an attacker who *"continues to apply pressure to the defending puck carrier"*, but that is a linesperson's judgement of pressure, not of an imminent hit. Touching the puck or going for a loose puck stops play in all four. **⚠️ And a defenceman turned to retrieve the puck has his back to you, so hitting him is checking from behind** — USA Hockey Rule 608's Note covers *"body checking or pushing an opponent from behind in open ice or directly into the boards or goal frame"*, with 608(b) a major plus a game misconduct where it *"recklessly endangers an opponent, or causes them to go head first into the boards or goal frame"* — and its *Casebook* (Rule 608, Situation 1) puts that major, or a match penalty, on this hit rather than a minor, *"[i]n every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)"* — and Hockey Canada Rule 7.5 lists the head-down puck retrieval along the boards among the situations to be enforced strictly, with 7.5(a) a minor plus a game misconduct anywhere on the ice and 7.5(b) a major plus a game misconduct at the referee's discretion on the degree of violence, with nobody hurt. Hold at the line under any of them.
- **Retrieving the puck on a delayed offside with your head down.** Head up — the arm is not a shield. Where the books protect the defender at all they name the *"defending puck carrier"* (NHL and IIHF Rule 83.3, USA Hockey Rule 630(d)), so the protection lapses the instant you make the outlet pass, and Hockey Canada Rule 6.11(b)(ii) (the stop-play clause) writes no pressure or contact trigger at all. A whistle for an imminent hit does not stop a body already committed at speed.
- **Driving the middle with your head down.** The middle seam is the one route where two defencemen can both stand you up in open ice, and under the IIHF book a square check with no upward motion on a puck carrier skating head down **toward the checker** is not penalised as a check to the head (Rule 48.1). **The direction limb is part of the rule**, so a head-down player hit from the side or the blind side sits outside the carve-out, and so does one hit without the puck — and how far the carve-out reaches even inside its own terms is unresolved in the IIHF's own text. **⚠️ The sentence immediately before it in the same rule runs the other way and is the one written for you:** *"When a Player is skating with their head up, whether they are in possession of the puck and may reasonably be expecting impending contact, an opponent does not have the right to hit them to the head or neck."* It holds whether or not you have the puck. Head up is the condition of the drive, not an extra — it is what keeps that sentence yours.
- **Dragging the trail skate with your head down.** The drag puts your body, hands and stick over the line before your skate, into the ice a defenceman standing up at their own line is defending. Aggressive body position is free under the offside rule and nowhere else, so the head stays up — see [The trail-skate drag](#the-trail-skate-drag).
- **Attacking straight at a defender.** Attack the space between two of them and make somebody choose.
- **Treating your team's entry rules as universal.** Lane discipline, who carries, whether you stand up at the line — these vary. Find out yours.

## Check yourself

*Answer each question before you go on — a real attempt, not a guess. Then go
and check, because the checking is the part that does the work. Producing an
answer and getting it wrong is worth more than recognising a right one, but only
when the right answer follows: the section named with each question, and the Key
Takeaways after them, are where you get it. Where the answer lives in another
document, that is named too.*

1. You are approaching the line and the responsible-looking play is to put it in
   deep. How confident do you actually have to be that the carry works before it
   is the better bet? Say roughly what a failed carry costs — and name the one
   entry the tracking found to be worse than a failed carry. *(§1. Why entries
   decide games, §The part everyone gets wrong)*

2. State the onside rule the right way round — not the offside one. Then
   describe the trail-skate drag, and name the two rulebooks that take the
   airborne version of it away from you.
   *(§The four clauses the technique rests on, §The trail-skate drag)*

3. You are in the zone with the linesman's arm up. What clears the delayed
   offside, what does *not* clear it even though it keeps you onside on an entry,
   and which of the acts that bring the whistle is written in only two of the
   four rule books? *(§Delayed offside and tagging up — three consequences for
   the entry)*

4. Under pressure at the line, which is cheaper — failing to carry, or failing to
   dump? Answer in terms of where the faceoff ends up, and say why that points
   the same way the shot data does. *(§The territorial asymmetry — why the safe
   play isn't)*

5. There is a defenceman in front of you. Should you skate at him? Say what you
   should attack instead, and describe the exact moment you are trying to
   manufacture. *(§Attack the space between two defenders, not one of them)*

6. Name three of the five dump-ins and the read that calls for each. Then give
   the one thing all five have in common, without which none of them is a play
   at all. *(§7. Dump-ins: five types and the read that calls for each)*

7. You cross with a teammate near the blue line and the defender tracking you
   ends up tangled in them. Legal, or a penalty? Say what the test is and what
   turns one into the other. *(§Using a teammate as a screen)*

---

## Key Takeaways

1. **Carrying the puck in is worth about twice as much as dumping it in** — 0.53–0.62 unblocked shot attempts per entry against 0.22–0.28, at 5-on-5, across Tulsky's full 330-game NHL sample from 2011-12. Those are attempts including misses, not shots on goal. That two-to-one shape has replicated across other trackers.
2. **A failed carry costs far less than it feels** — about −0.08 net shots, cheaper than dumping and changing, with break-even near one-third confidence. Those come from Tulsky's Washington games alone and average every attempt, not the marginal ones.
3. **You are onside while one skate has not completely crossed**, judged at the instant the puck completely crosses. Drag that trail skate and attack the line at full speed, **head up** — your body, hands and stick cross before your skate does, into the ice a defenceman standing up at their own line is defending. **NHL and IIHF allow it airborne; USA Hockey Rule 630(a) and Hockey Canada Rule 6.11 require contact — two books of the four.**
4. **Tagging up on a delayed offside needs actual skate contact with the blue line from every attacker, and the zone empty before anyone re-enters — in all four books.** The NHL (83.3(i)), the IIHF (83.3(I)) and USA Hockey (630(d)(2), the tag-up clause) word it *"at the same instant"*; Hockey Canada (6.11(b)(ii), the tag-up clause) words it as a result — *"completely clear of attacking players"* — and its Interpretation 11 resolves that to *"the instant the zone is completely free"*. **The wording differs; the requirement does not.** Tag as one and you are legal in all four. Under USA Hockey Rule 630(d) there is no tag-up at all below Youth 15-Only, Girls 16U, High School and Adult — a restriction Hockey Canada does not impose. **⚠️ And only two of the four books stop play because you are *about* to hit the defending carrier:** NHL and IIHF Rule 83.3 write that trigger; USA Hockey 630(d) and Hockey Canada 6.11(b)(ii) (the stop-play clause) write no contact trigger at all. USA Hockey does whistle continued pressure on the carrier, but that is a linesperson's judgement of pressure rather than a warning of an imminent hit, so never close on him expecting a whistle to arrive first. **And a defenceman turned to retrieve the puck has his back to you, so hitting him is checking from behind** — USA Hockey Rule 608's Note reaches pushing as well as body checking, and Hockey Canada Rule 7.5 lists the head-down retrieval along the boards among the situations to be enforced strictly — and **USA Hockey's *Casebook* takes its minor off exactly that hit.** Rule 608, Situation 1 keeps the minor plus misconduct for a push on an opponent *"not near the boards"* or a minimal-contact *"pinch"*, and requires the major plus a game misconduct, or a match penalty, *"[i]n every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)"* and in every instance where a player *"recklessly endangers the opponent from a check from behind, regardless of whether or not board contact is made."* Hockey Canada writes a minor plus a **game** misconduct under 7.5(a) for an intentional hit from behind *"anywhere on the ice"*, and reaches a major plus a game misconduct under 7.5(b) on the degree of violence alone.
5. **Attack the space between two defenders, not at one of them.** One defender has an easy job; two sharing a seam have a problem. **The middle seam is also the one route where both can stand you up, so head up is the condition of the drive, not an extra** — IIHF Rule 48.1 opens "There is no clean check to the head or neck", but it declines to penalise a square check with no upward motion on a puck carrier skating head down **toward the checker**. A head-down player hit from the side or the blind side sits outside that carve-out, and how far it reaches even inside its own terms is unresolved in the IIHF's own text. **⚠️ The sentence immediately before that carve-out in the same rule is the half written for you** — *"When a Player is skating with their head up, whether they are in possession of the puck and may reasonably be expecting impending contact, an opponent does not have the right to hit them to the head or neck"* — and it holds whether or not you have the puck, so a head up is what keeps it yours. **Both halves are the IIHF's own, and the NHL writes neither** — its Rule 48.1 bars an avoidable head hit and stops there. USA Hockey's *Casebook* answers a player who crosses the ice at full speed to hit a head-down opponent as charging (Rule 607, Situation 2), and Hockey Canada's nearest rule turns on the ducking player rather than the checker.
6. **The puck carrier should be the last to the line and the support first** — and arriving with speed is not the same as arriving early.
7. **The delay runs against instinct, because turning away from the offensive zone feels like retreating.** Alone at the line, turn away, protect the puck, and re-attack a second later with support. **One safety override outranks the play: curl in open ice, not against the wall.** Never take contact with your back to the boards. Near the wall, get your skates parallel to it, forearm and hip, head up and chin off your chest ([Body Contact and Battles](../technique/body_contact_and_battles.md), which covers this).
8. **Every dump-in is a decision about where.** Hard rim, soft area dump, chip past a committing defenceman, cross-corner, flip over a trap — each answers a different read, and each needs a chaser already going there.
9. **Where the trapezoid applies — the NHL and IIHF, and reportedly the KHL, though no KHL rulebook was available to check that one — dump to the corners, not straight behind the net.** Neither the USA Hockey nor the Hockey Canada book has one, so a league running on either has none. In England and Wales, England Ice Hockey's *Rules & Regulations* 22.3 say it is not currently enforced, so plan for their goalie to come out, and ask your league.
10. **Angle to take away the retriever's easiest escape rather than to shorten the distance.** Angling is taking the escape away, not arriving through him: a defenceman turned to retrieve has his back to you, and hitting him there is checking from behind. **And their goalie is not "fair game" outside his crease in any of the four books** (IIHF and NHL 42.1, USA Hockey 607(d), Hockey Canada 8.5) — Hockey Canada 8.5(b) makes charging the goaltender an automatic major plus game misconduct, and USA Hockey penalises even accidental contact (Note 1 to 607(d)) where the IIHF and NHL allow incidental contact only while he is playing the puck and only on a reasonable effort to avoid it. Whether you stand up at your own line, receive the entry, or squash-and-slide is a system your coach chooses, not a law.

---

*Sources — retrieved 27 July 2026:*

*Rules: [NHL Official Rules 2025-2026 (PDF)](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) — Rule 83 (Off-side), Rule 1.8 (goalkeeper's restricted area — the painted dimensions: eight feet from each post at the goal line, eleven feet at the boards, a 28-foot span), Rules 27.8 and 63.2(viii) (the restricted-area penalty — cited for the offence only; its six-foot figure is stale), Rules 1.5–1.7 (lines, division of ice, crease), Rule 81.6 (the shorthanded icing exemption, and its withdrawal from a team short by a major that has left nobody on the penalty bench), and **Rule 42.1 Charging**, read 3 September 2026 for the goalkeeper chased outside the crease: *"A goalkeeper is not 'fair game' just because he is outside the goal crease area. The appropriate penalty should be assessed in every case where an opposing player makes unnecessary contact with a goalkeeper. However, incidental contact, at the discretion of the Referee, will be permitted when the goalkeeper is in the act of playing the puck outside his goal crease provided the attacking player has made a reasonable effort to avoid such contact."* · [IIHF Official Rule Book 2025/26 (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf) — **the rule set British hockey plays under**, read directly for this document: Rule 83.1 (off-side — the both-skates test, the one-skate on-side test and the "plane" of the blue line, all word-for-word with NHL 83.1; **no** blade-only definition of "skate" in this edition, and a puck-carrier carve-out asking only for possession and control *"prior to their skates crossing the leading edge"* — both of which changed in the 2026/27 book, next), Rule 83.3 (delayed off-side and tag-up, including *"skate contact with the blue line, '3D' judgement is not used in this situation"*), Rule 83.4 (disallowed goal, word-for-word with the NHL including the own-goal exception), Rule 83.6 (face-off locations), Rule 27.7 (goalkeeper restricted area), Rule 48.1 (the head-down carve-out, read with its opening sentence and with the scope caveat Rules Primer covers) Rule 43.2 (checking from behind, no minor option), and **Rules 42.1 and 69.4**, read 3 September 2026 — both carrying the *"A goalkeeper is not 'fair game' just because they are outside the goal crease"* sentence, and 42.1 carrying the permission with its limit inside the same sentence: *"However, incidental contact, at the discretion of the Referee, will be permitted when the goalkeeper is in the act of playing the puck outside their goal crease, provided the attacking Player has made a reasonable effort to avoid such contact"* · [IIHF Official Rulebook 2026/27, Version 1.0, June 2026 (PDF)](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/rule%20book/2026-27_iihf_rule_book.pdf) — **the IIHF's current edition. Every IIHF rule this document cites — 83.1, 83.3, 83.4, 83.5, 83.6, 27.7, 43.2 and 48.1 — was compared against it word by word on 1 September 2026, and only 83.1 changed.** The differences the comparison threw up in the other seven are hyphenation and page furniture in the extraction, not rule text. **The IIHF *Situation Handbook* 2026/27 is a separate book and was not compared**, so the Situation 83.34 and 83.35 rulings cited above are the 2025/26 Handbook's. Rule 83.1 changes in two places, both moving the IIHF's text onto the NHL's: it inserts *"For the purposes of this rule, a 'skate' is to be considered the blade of the skate only"* into the on-side test, and it rewrites the puck-carrier carve-out to require *"'possession and control' of the puck with their stick prior to both skates completely crossing the leading edge"*. The both-skates test, the one-skate on-side test and the "plane" sentence are unchanged. ⚠️ **Which edition a British reader plays under is unresolved** — the In-House Rules adopt the 2025/26 book by version number while their cover names the current one, and they amend Rule 83 in neither; [UK and England Rules](../foundation/uk_rules.md) sets that out · [IIHF Situation Handbook 2025/26 (Version 1.1, August 2025)](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) — **Situation 83.34**, the airborne clearing case: A31 jumps about a metre before the blue line and lands on it, and *"A31 is considered to have cleared the attacking zone the instant the skate makes contact with the blue line. Rule 83.3 (I). Should another Team A player enter the attacking zone while A31 is airborne, the delayed off-side shall remain in effect."* Situation 83.35 rules the same for a player sliding feet first, and adds that the skate *"must touch the ice, plane does not apply here"*. Its Foreword places the Handbook below the Rulebook: *"in case of any contradictions, the valid IIHF Rulebook is always the basis."* Both Situations are word-for-word identical in the earlier Version 1.0, June 2025 · [IHUK In-House Rules 2026-27, Revision 1 (published 25 July 2026)](https://englandicehockey.com/wp-content/uploads/2026/08/IHUK-In-House-Rules-2026-2027.pdf) — **the current British document**, read 31 August 2026: the Introduction, which adopts the IIHF book *"in England, Wales, Scotland and Northern Ireland (the Home Countries)"*, and **Rules 37 and 38** — *"on-ice video review is not available in EIH or SIHA competition"* and therefore *"a Coach's Challenge is not permitted in EIH or SIHA competition"*, which removes IIHF Rule 83.5 in domestic play. ⚠️ **Both are still written to the narrower EIH-or-SIHA wording in this edition**, where the document as a whole now reaches all four Home Countries; [UK and England Rules](../foundation/uk_rules.md) sets out what that leaves open. Searched flattened: the In-House Rules make **no** amendment to IIHF Rule 83 (Off-side), Rule 81 (Icing) or Rule 27, in this edition or the last · [IHUK In-House Rules 2025-26, Revision 1](https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf) — **superseded, cited only for the comparison**: it carried Rules 37 and 38 in the same words, but applied *"in England and Scotland"* alone · [Scouting The Refs — NHL Rule Book Updates for 2025-26](https://scoutingtherefs.com/2025/09/49364/nhl-rule-book-updates-for-2025-26/) · [England Ice Hockey Rules & Regulations 2024-2025](https://englandicehockey.com/wp-content/uploads/2024/09/1.0-5.0-EIH-Rules-and-Regulations.pdf) — Rule 22.3, the Goalkeepers' Restricted Area "not currently enforced" · [USA Hockey Official Playing Rules 2025-29 (PDF)](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) — **Rules 101–109** (Section 1, *The Rink*) and **Rule 610 Delaying the Game**, read for a goalkeeper's restricted area: the book marks none and places no limit on where a goalkeeper may play the puck; **Rule 614(c)**, which does restrict where a goalkeeper may *freeze* it, including outside the *"goalkeeper's privileged"* area defined in its own Note, which excludes the corners; Rule 624(b)(1) (the shorthanded icing exemption and the classification list it is confined to), Rule 630(a) (the skate-contact test for off-side, and its Note that one skate touching the line is enough) and Rule 630(d) (delayed off-side and tag-up, its classification restriction, 630(d)(2) on clearing "simultaneously… at the same instant", and the two conditions that turn a delayed off-side into a whistle — an attacking player touching the puck, or attempting to gain possession "or continues to apply pressure to the defending puck carrier", there being no about-to-make-contact condition), and Rule 617 (Goals and Assists — 617(b)(2), a goal is legally scored if it "enters the goal as a result of any action by the defending team", and 617(c)(8), a goal is not allowed where "The puck enters the attacking zone illegally"). Rule 630 carries no disallowed-goal provision for a shot that creates a delayed off-side, and the Playing Rules nowhere resolve that case between 617(b)(2) and 617(c)(8). Also **Rule 608 Checking from Behind**, read for the forechecker closing on a defenceman who has turned to retrieve — its Note defines the foul as a check delivered *"directly from behind, or diagonally from behind"* and says *"This includes body checking or pushing an opponent from behind in open ice or directly into the boards or goal frame"*; 608(a) is a minor plus a misconduct or a major plus a game misconduct, and 608(b) a major plus a game misconduct where the check *"recklessly endangers an opponent, or causes them to go head first into the boards or goal frame"*. Also **Rule 607 Charging**, read 3 September 2026 — 607(c), *"A minor plus a misconduct or a major plus a game misconduct penalty shall be assessed to a player who body checks or charges a goalkeeper while the goalkeeper is within the goal crease or privileged area"*; 607(d), the *"NOT 'fair game'"* sentence; and its **Note 1**, which writes no incidental-contact permission at all — *"For the purpose of this rule, any accidental or unavoidable contact that occurs with the goalkeeper shall be penalized under the Interference rule. Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging"* — together with Note 2's definition of the privileged area · [USA Hockey Official Rules and Casebook 2025-29 (PDF)](https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf) — **Casebook Rule 630, Situation 41**, which does resolve it: no goal during a delayed off-side, *"[e]ven if the defending team shoots, passes or deflects the puck into its own goal"*, and not even where the attacking team cleared the zone first. **Read to the end of it: the same situation closes by allowing play to continue, and any goal legally scored to stand, where the puck was not shot directly on goal and the attacking team has cleared the zone** — the bar is the offending puck and the live delayed off-side, not everything that follows a tag-up. That closing sentence is printed with a word dropped from it and is paraphrased rather than quoted throughout this document. Situation 41 gives its rule reference as 630(d.3), a sub-clause the printed Rule 630(d) does not contain; **Casebook Rule 630, Situation 38** (rule reference 630(d.2)), which carries the forcing-deeper trigger the Playing Rules do not word — a defender may carry the puck anywhere in his own zone "as long as they are not being forced deeper into their zone by an attacking player", and the Linesperson "should be alert to stop play as soon as the defending puck carrier is forced back further into their Defending Zone or as soon as contact, however slight, is made with the puck or puck carrier"; **Casebook Rule 630, Situation 39**, whose general rule is that an offside player who declines to tag up and instead pursues the puck should have play stopped immediately, because "[t]he potential for unnecessary body contact should not be allowed in a situation where an infraction (offside) has already occurred" — a rationale attached to pursuit of the puck, not a written imminent-contact trigger; **Casebook Rule 607, Situation 2**, the head-down charging answer above; and **Casebook Rule 608, Situation 1**, read 31 August 2026, which sets the criteria for the checking-from-behind tiers — the minor plus misconduct *"must be assessed"* only for a push on an opponent *"skating ahead of them and not near the boards"* or *"minimal body contact"* making *"this 'pinch' against the boards"*, while the major plus game misconduct *"or match penalty, must be called"* where a player *"forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)"*, where a player is *"thrust head first into the boards or goal frame"*, and where a check from behind *"recklessly endangers the opponent ... regardless of whether or not board contact is made"*, with the *"danger zone"* given as *"approximately ten feet out from the boards"* · [Hockey Canada Playing Rules 2026-2028 (PDF)](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) — **Section 1, Rules 1.1–1.14** and **Rule 10.1 Delay of Game**, read for a goalkeeper's restricted area: the book marks none and 10.1 places no limit on where a goaltender may play the puck; Rule 6.11 (off-side, and the sentence restricting the test to skates "in physical contact with the ice surface"), Interpretation 3 to Rule 6.11(a) (the airborne trail skate, ruled OFF-SIDE), Rule 6.11(b) (delayed off-side and tag-up). ⚠️ **Rule 6.11(b) carries two separate i./ii. lists**, so "6.11(b)(ii)" names two different rules: the **tag-up clause** sits under "the Linesperson will drop their arm to nullify the off-side violation and allow play to continue if", and the **stop-play clause** sits under "During a delayed offside, if". The **tag-up clause** requires skate contact from every attacker, "so that the attacking zone is completely clear of attacking players", with no simultaneity requirement and no classification restriction; the **stop-play clause** reaches only touching the puck and attempting to gain possession of a loose puck "while the puck is still in the attacking zone", with no pressure limb and no contact limb. Also 6.11(b)'s disallowed-goal provision, "the goal will not be allowed as the original shot was off-side", and Note 1 extending that to a shot that goes in after the zone has been cleared. No own-goal exception appears in Rule 6.11 or in any of its thirteen interpretations. Also Rule 6.11(d) (intentional off-side — including a player who deliberately makes a play on the puck "or against an opposing player" while knowing they are off-side, which 6.11(d) costs at a face-off "at an end zone face-off spot, in the defending zone of the offending team" rather than at a penalty), and Rule 8.7 Clipping, whose preamble provides that "Players may not crouch down to avoid being bodychecked" and which states no division or classification scope for that prohibition. Rule 8.7 is Hockey Canada's clipping rule; the penalty for a checker who hits a ducking opponent is a separate provision, set out with its scope in [Rules Primer](../foundation/rules_primer.md). Also **Rule 7.5 Checking from Behind**, read for the forechecker closing on a defenceman who has turned to retrieve — its preamble directs referees to be *"aware of the tragic consequences of spinal injuries"* and lists, among the situations to enforce strictly, *"Where a player along the boards, with their head down looking for the puck or 'digging the puck out,' is hit from behind and driven head-first into the boards"*; 7.5(a) is a Minor plus a Game Misconduct for an intentional hit from behind *"anywhere on the ice"*, and 7.5(b) carries two limbs — a Major plus Game Misconduct *"at the discretion of the Referee, based on the degree of violence of the impact"* with nobody injured, and the same pair that *"must be assessed"* where such a foul injures the opponent. Also **Rule 8.5 Interference with the Goaltender**, read 3 September 2026 for the dump-in chase — its *"A Goaltender is not 'fair game' just because they are outside their goal crease"* paragraph; **8.5(b)**, whose first limb is discretionary (*"A Major penalty and Game Misconduct penalty, at the discretion of the referee, based on the degree of violence of impact, may be assessed to any player who commits interference with the goaltender"*) and whose second is not (*"A Major penalty and Game Misconduct penalty will be assessed to any player who charges the goaltender"*); **8.5(e)**, *"A Game Misconduct penalty must be assessed any time a Major penalty is assessed for interference with the goaltender"*; and **Interpretation 3 to Rule 7.4(b)**, *"Where a goaltender is contacted by an attacking player in their crease and that action could be described as charging, a Major penalty and Game Misconduct penalty for Interference must be assessed."* ⚠️ **8.5(b)'s own Note 1 cites "Rule 7.4(b)(Interpretation 2)" for the definition of charging; the interpretation attached to 7.4(b) is numbered 3, and the one numbered 2 is attached to 7.4(a) and defines a blindside hit.** The definition of charging used here is **Rule 7.4**'s own list, which reaches a player who "[b]uilds up speed by taking two or more strides immediately prior to making contact"*

*Analytics: [Tulsky, Detweiler, Spencer & Sznajder, "Using Zone Entry Data To Separate Offensive, Neutral, And Defensive Zone Performance", MIT Sloan Sports Analytics Conference 2013 (PDF)](http://hockeyanalytics.com/Research_files/Using%20Zone%20Entry%20Data%20To%20Separate%20Offensive,%20Neutral,%20And%20Defensive%20Zone%20Performance.pdf) · [Notes From The Rafters — "Proving Tulsky Right: Zone Entries" (PWHPA / Sportlogiq data)](https://notesfromtherafters.substack.com/p/proving-tulsky-right-zone-entries) · [Hockey's Arsenal — "Enter the Offensive Zone With More Offence and Less Risk" (summarising Sznajder and Chatel tracking)](https://hockeysarsenal.substack.com/p/enter-the-offensive-zone-with-more) · [Sports Illustrated — "Fancystats quietly leading NHL teams to dump the dump-and-chase strategy" (2014)](https://www.si.com/nhl/2014/01/15/fancystats-quietly-leading-nhl-teams-to-dump-the-dump-and-chase-strategy)*

*Coaching and tactics: [Ice Hockey Systems — Kyle MacLennan, "Winning the Entry: How NHL Power Plays Gain the Zone"](https://icehockeysystems.com/blog/coaching-tips/winning-entry-how-nhl-power-plays-gain-zone) · [Stanley Cup of Chowder — Shawn Ferris, "Defending the Blue Line" (squash-and-slide, receiving the entry)](https://www.stanleycupofchowder.com/2019/1/28/18197816/defending-the-blue-line-analytics-tactics-boston-bruins)*

*Entering with numbers: Mike Johnston and Ryan Walter,* Hockey Plays and Strategies, *2nd ed. (Champaign, IL: Human Kinetics, 2019) — a coaching manual, and therefore **convention only**; no rule in this document comes from it. It is the source for the named 2-on-2 and 3-on-2 attack options — crisscross, midlane drive, double drive, high triangle, triple drive and drive and delay — for the teaching keys on the delay's timing, and for the framing that the purpose of an extra attacker is to make one defender cover two players. **Two things in its account are deliberately left out.** It attributes a high proportion of one named player's goals to the drive-and-delay tactic without any source, and it states a recommended ratio of carried to dumped entries as a coaching preference. The entry figures above come from the tracking studies cited instead.*

*The delay / curl-back: IIHF **Coach Development Program, Level I (Tactical)**, §19.1.2 "Shaking a Defender One-on-One" — the *Delaying* passage (page 19.8) and the separate *Quick Stop* passage (page 19.10): [PDF](https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf), sha256 `9b195d03…`, 750,071 bytes, 77 pages. **A governing body's coaching manual, and therefore convention only** — it is the source for the name *delaying*, for the purpose (*"create time and space for the attacker"*), for the tight turn as the mechanic, and for the caveat on the quick stop. **No rule in this document comes from it, and it does not say when to use the tactic.** ⚠️ **Two limits worth stating.** Its date is **2002**, taken from the file's own metadata — the document prints no date on its face — so it is two decades older than every other source here. And the manual's first delay option is *"a tight turn toward the boards"*, which this document deliberately does **not** follow: the boards override in §5 outranks it, and is sourced separately below.*

*Boards safety (the override on the delay — [Body Contact and Battles](../technique/body_contact_and_battles.md) carries the full treatment): [USA Hockey — Heads Up Hockey Program Guide (PDF)](https://cdn4.sportngin.com/attachments/document/0138/6193/HUH_Program_Guide_FINAL.pdf) — Session 5, "Giving A Check" — under its "Checking from behind" subheading, which is not the session's title — for *"Even a light hit from behind could inflict a severe head or neck injury"*; and "How spinal injuries happen in hockey" for *"it can occur at walking speed"*, which the guide attaches to *"the head being slightly flexed (head down) while making head-on contact with the boards or goal post"* and not to a player turning their back. **"This" in that sentence is the spinal injury, not the collision**, which is why the override renders it as the injury occurring at walking speed. **The finding is a restatement:** USA Hockey credits *"research done among a wide range of hockey players"* and prints the citation beneath it — **Charles H. Tator et al., *Spinal Injuries Due To Hockey*, Canadian Journal of Neurological Sciences 11:34–41** — not read in the original here, only the USA Hockey page reproducing it · [USA Hockey — Introduction To Body Contact (PDF)](https://cdn4.sportngin.com/attachments/document/55c1-2114751/IntroductiontoBodyContact.pdf) — §5 "Checking From Behind", carrying the same light-hit sentence. Both refetched and the quoted strings located in the extracted text on 31 July 2026.*

*Limitations worth knowing: Tulsky's paper carries two different scopes and this document keeps them apart. The shots and goals per carried-in and dumped-in entry (Table 1: 0.53–0.62 against 0.22–0.28) are the full 330-game sample. Everything that involves a **failed** attempt, a dump-and-change or a net value across two entries (Table 3: 0.55, 0.48, 0.24, −0.08, +0.42, +0.12, the 14% turnover rate, and the 34/26/44% thresholds derived from them) comes from the **Washington games alone**, because those were the games in which unsuccessful attempts and dump-and-change plays were recorded — the paper labels that table "as measured in Capitals games". The paper's own strategic conclusion runs toward carrying more, not less, and concerns NHL players only: "in general NHL teams probably could benefit from being more aggressive at the blue line." The authors also state that their averages are "still not sufficient data to say conclusively that teams should be trying harder to carry the puck in at every opportunity". The season the PWHPA / Sportlogiq figures cover is not stated in the source, which was published in July 2022 and refers only to "this last year's PWHPA Secret Dream Gap Tour" — 2021-22 is an inference, and is flagged as such in Section 1. The Sznajder (0.66 / 0.29) and Chatel (47% / 18%) figures are reported second-hand by Hockey's Arsenal; the underlying tracking data sets are not published, so treat them as indicative rather than exact. The NHL rulebook's own two descriptions of the trapezoid's goal-line dimension disagree (Rule 27.8 vs Rule 1.8), as noted in Section 7. The KHL is named above as a trapezoid league on general report only: no KHL rulebook was available to check it against, and the claim is flagged as unverified everywhere it appears.*

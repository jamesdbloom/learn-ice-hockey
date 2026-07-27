# Content Review and Roadmap

*Adversarial review of `positions/center.md`, `positions/defender.md`, `positions/winger.md`, plus a proposed content roadmap.*

*Review date: 27 July 2026. Rules claims verified against sources listed at the end.*

---

## Part 1 — Adversarial Review

### Verdict up front

The positional content is genuinely good. The four-scenario framework (free space / under pressure / pressuring / without the puck) applied across three zones is a strong teaching skeleton, the plain-English definitions are well judged, and the cross-position exception handling (the weak-side winger collapsing into the high slot) shows real care.

The problems fall into three buckets: **rules inaccuracies**, **internal contradictions**, and **one structural flaw that the systems content will need to fix retroactively.**

---

### A. Rules errors and omissions

#### A1. Offside is defined incorrectly — in two documents

- `center.md:134` — "Don't cross the offensive zone blue line ahead of the puck — that's offside."
- `winger.md:132` — "If you cross the offensive blue line ahead of the puck, you are offside."

Offside requires **both skates** to completely cross the blue line before the puck completely crosses it. One skate on or behind the line keeps you onside.

This is not pedantry. Dragging the trail skate is *the* fundamental zone-entry technique for a winger, and both documents currently teach the opposite instinct — slow down and stay behind the puck. The correct instruction is: keep your inside skate on the line and let your body get ahead of it.

Also missing: the puck must *completely* cross the line, and (NHL, since 2017) a skate raised in the air above the neutral zone still counts as onside.

#### A2. Delayed offside and tag-up are missing entirely

Neither concept appears anywhere. Both are live on a large fraction of dump-ins:

- **Delayed offside** — attackers entered early but haven't touched the puck; play continues while they clear.
- **Tag-up** — once every attacker exits the zone, the offside is waved off and they can re-enter.

For a winger this is a constant, concrete decision ("do I clear the line or keep forechecking?"). It should be in the winger and center docs.

#### A3. The icing paragraph is incomplete — and it's duplicated three times

The same near-identical paragraph appears in all three files. All three omit the exceptions:

- Waved off if the **goaltender leaves the crease and moves toward the puck**, or plays it (NHL — note USA Hockey differs).
- Waved off if the puck **goes into the net** — it's a goal (this is why empty-net shots from your own end count).
- Waved off if iced **directly off a faceoff**.
- To nullify a potential icing, the puck must **contact the centre red line on a player's stick** ("gain the line") — a skate doesn't do it.
- The NHL also denies the offending team a **timeout**, not just a line change.

#### A4. The trapezoid rule is absent — and its absence actively undercuts the defender advice

`defender.md` tells you to rim the puck around the boards. `center.md:44` says a rim usually travels "around the back of the net to a teammate on the other side."

Under NHL rules the goaltender may only play the puck behind the goal line **inside the trapezoid**. Playing it in the corners is a two-minute delay-of-game minor. Consequences the documents never mention:

- Your goalie **cannot** retrieve a rim that dies in the corner — a defender has to go get it, under forecheck pressure.
- This is precisely why dump-and-chase works, which is the flip side of the same coin for forwards.
- It is the single biggest constraint on defensive-zone retrieval in the modern game.

Note the trapezoid is NHL-specific — the IIHF removed it in 2014, and most rec leagues don't use it. Which brings us to:

#### A5. No rule set is ever declared

Trapezoid, hybrid vs. touch icing, icing while shorthanded, and the red line all differ between NHL, IIHF, USA Hockey and rec leagues. The docs half-acknowledge this ("most modern leagues use hybrid icing") but never state a baseline. Every document should open with something like *"Written to NHL rules; IIHF and rec-league differences flagged inline."*

#### A6. The faceoff-ejection advice is wrong in the part that matters

`center.md:207` warns against "hand contact (using your hand on the puck, or hitting the opposing center's stick with your hand)."

Closing your hand on the puck is a **minor penalty**, not a faceoff ejection. The actual ejection triggers are encroachment and improper stick placement — and critically, **a winger encroaching into the circle gets the *centre* thrown out of the dot.** That's the one detail wingers need and it's absent from `winger.md` entirely.

Related: all three docs state flatly that "the center takes the faceoff." True as a default, but the centre gets tossed from the dot several times a game — and `winger.md` gives no guidance on taking a draw.

---

### B. Internal contradictions

#### B1. The power play description is self-contradictory

The docs describe a **bumper** — which is a 1-3-1 concept, and the 1-3-1 has exactly **one** player at the point — while simultaneously referring to:

- `center.md:211` — "between the **defensemen at the points**" (plural)
- `winger.md:204` — "between the **defensemen at the points**" (plural)
- `defender.md:201` — "One defender... quarterback at the blue line, **the other supports from the opposite point**"

A bumper plus two points is six players. Modern NHL first units are typically 4 forwards + 1 defenceman in a 1-3-1: one point, two half-walls, a bumper, a net-front.

No formation is ever named anywhere — not 1-3-1, umbrella, overload or spread. That's the fix.

#### B2. The penalty kill descriptions contradict each other

- `center.md:217` — "You are **the top** of the defensive box or diamond."
- `winger.md:207` — "You form **one of the top corners** of the defensive box."

A box has **two** players at the top (both forwards). Only a diamond has a single apex. The winger doc is right; the centre doc is right only for the diamond.

#### B3. The same section heading means different things in different documents

"Without the Puck — Finding Space" is used for:

| Document | What it actually describes | Who has the puck |
|---|---|---|
| `center.md` DZ | Swinging low waiting to receive the breakout | *We're about to* |
| `defender.md` DZ | Weak-side goalmouth defensive coverage | **They do** |
| `winger.md` DZ | Covering the opposing point | **They do** |

So the heading flips between offensive and defensive meaning, and "Finding Space" is offensive language stapled onto defensive assignments. A learner building a mental model will trip on this.

The cleaner axis is **possession state** (we have it / they have it / it's loose) × **your proximity** (on the puck / supporting / away from it).

Which exposes the bigger gap: **there is no "loose puck / 50-50" state anywhere in the framework.** A large share of real hockey is neither team in possession. Nothing in the docs covers scrambles, races, or broken plays.

#### B4. Rim vs. reverse are conflated

`center.md:44` defines rimming as travelling "around the back of the net to a teammate on the other side." A **rim** goes around the boards; a **reverse** sends it back the way it came. In a project whose job is teaching vocabulary, this matters.

---

### C. The structural flaw — and why it's the argument for the systems content

#### C1. The position docs are describing one unnamed system, then arguing with themselves

Look at the pattern:

- `winger.md:56` — "**Do not go into the corner** — corner battles are the job of the defender and the center." Then three consecutive `**Exception —**` blocks walk it back.
- `defender.md:59` — "Wingers stay high to cover the points — **do not expect them to come into corner battles**." Immediately followed by "(However: ...)".

These aren't rules of hockey. They're the rules of a **low-zone-collapse / zone defensive-zone coverage system**. In a man-on-man system the winger absolutely does follow their check into the corner. In a hybrid, it depends on who's below the dots.

The documents are prescribing one philosophy as law and then patching it with exceptions — which is why the exception lists keep growing. This is the strongest possible argument for the systems content: **once the systems documents exist and name the assumed system, the position docs can say "this assumes low-zone collapse; see `dz_coverage_systems.md` for how this changes under man-on-man" and the exception pile-up collapses.**

#### C2. Coverage is lopsided across the three documents

| Topic | Center | Defender | Winger |
|---|---|---|---|
| Backchecking | ❌ absent | ❌ absent | ✅ good section |
| Gap control | n/a | ⚠️ one line, no method | n/a |
| Defending 2-on-1 | ❌ | ⚠️ parenthetical only | ❌ |
| Defending 3-on-2 / 1-on-1 | ❌ | ❌ | ❌ |

The centre lacks a backchecking section despite typically owning the **middle-lane driver** — arguably the single most important backcheck assignment in hockey.

The defender document is thinnest exactly where the position is hardest: gap control gets "not too close, not too far" with no method; there's no D-to-D behind the net, no net-front battle technique, no stick positioning, no shot-blocking, no "activating" into the rush, no defensive-side-of-the-puck principle.

#### C3. No goaltender document

Three of six on-ice positions are documented. Even a reader who never plays goal needs: goalie communication calls, when the goalie freezes vs. plays it, screening and goaltender interference, the trapezoid, staying out of your own goalie's eyes, and what your goalie wants from you on a 2-on-1.

---

### D. Project-standard compliance (against your own `CLAUDE.md`)

| `CLAUDE.md` requirement | Status |
|---|---|
| "Prefer authoritative sources: NHL.com, IIHF.com, Hockey Reference" | ❌ All 9 citations are secondary commercial sites (hockeymonkey, howtohockey, line1hockey, icehockeymoms). Zero rulebook citations — despite the docs making a dozen rules claims. |
| "Always note the date of retrieval for time-sensitive information" | ❌ No retrieval dates on any document. |
| "Link to related documents rather than duplicating content" | ❌ Zero cross-links between three documents that constantly reference each other's roles. |
| Avoid duplication | ❌ The icing paragraph, the odd-man-rush definition, the line-changes section and most of the glossary are duplicated near-verbatim across all three files. |

The duplication is the practical one: four copies of the icing rule means four places to fix when you correct A3.

---

### E. Fit with the podcast pipeline

Your `podcast_generation_prompt_longer.md` asks for common misconceptions, practical application, worked examples, retrieval questions and "if you only remember 10 things." The source documents currently supply almost none of that raw material — there are no *Common Mistakes* sections, no worked scenarios, no self-check questions, no summary boxes.

The generator is being asked to invent the highest-value pedagogical content rather than extract it. Adding a **Common Mistakes** and a **Key Takeaways** block to each document would materially improve the audio output.

Separately: the content is intensely spatial and there are **no diagrams**. For the written docs, even simple embedded rink diagrams would help a lot. (For audio they don't help — which raises the bar on spatial precision in the prose, and argues for one canonical rink-map reference document that everything else links to.)

---

## Part 2 — What Else to Create

### The short answer

**No, systems are not the only gap.** The existing content covers one cell of a larger matrix. There are three other axes of comparable size, plus a missing position and a missing foundation layer.

| Axis | Question it answers | Status |
|---|---|---|
| **Positional** | *Where* do I stand and what's my job? | ✅ Covered, well |
| **Systems** | How do the five of us act as *one unit*? | ❌ Absent — you identified this |
| **Technique** | *How* do I physically execute it? | ❌ Absent — the biggest silent gap |
| **Hockey IQ** | *How do I read the play and decide?* | ⚠️ Implicit only, never taught |
| **Rules** | What's legal, and how do I use the rules? | ⚠️ Partial and partly wrong |
| **Foundation** | Shared vocabulary, rink map, comms | ❌ Absent (currently duplicated three ways) |

The technique gap is worth dwelling on. The current docs tell you *where to be and what to decide* — and nothing about execution. Backward skating and pivoting is **the** defining defenceman skill and it is not mentioned once in `defender.md`. For "how to play the game effectively," that's at least half the answer missing.

---

### Tier 0 — Foundation (do first; cheap, and it unblocks everything)

| Document | Why |
|---|---|
| `rink_map_and_glossary.md` | One canonical home for slot / high slot / home plate / half-wall / point / hash marks / corners / crease / trapezoid / the nine faceoff dots. Extract from the three duplicated glossaries, link everything to it. Fixes the duplication finding directly. |
| `rules_primer.md` | Offside (incl. delayed and tag-up), icing (all exceptions), penalties catalogue, goaltender interference, the trapezoid, officials' signals. Cited to the actual rulebook. Replaces four copies of a partly-wrong icing paragraph with one correct one. |
| `on_ice_communication.md` | **High value, low cost.** Your docs say "communicate!" around fifteen times and never once say *what words to say*. The standard call list: "man on," "time," "over," "reverse," "wheel," "D-to-D," "middle," "back door," "switch," "point," "ice it," "change," "last change." Plus who owns which call and when. |

---

### Tier 1 — Systems and strategies (your ask, properly decomposed)

This is seven or eight documents, not one:

1. `breakouts.md` — wheel, reverse, up, over, D-to-D, rim, quick-up, counter. Winger timing, strong vs. weak side, breakouts against each forecheck.
2. `forechecking_systems.md` — 1-2-2, 2-1-2, 1-3-1, 1-4; aggressive vs. passive; when each is chosen and what each concedes.
3. `neutral_zone_systems.md` — the 1-2-2 trap, 1-3-1 NZ, regroups, NZ faceoff plays, how to beat a trap.
4. `defensive_zone_coverage.md` — **the important one for fixing C1.** Low-zone collapse vs. man-on-man vs. hybrid; box+1; who has the net front; how each changes the winger's corner decision.
5. `offensive_zone_play.md` — cycling, low-to-high, overload, F1/F2/F3 rotation, net-front, seam and slot-line passes, working the umbrella.
6. `zone_entries.md` — carry vs. dump vs. chip, the delay, drop passes, the late man, entering against a 1-3-1.
7. `special_teams.md` — PP formations (1-3-1, umbrella, overload, spread) and PP entries; PK structures (box, diamond, wedge+1, aggressive vs. passive, PK forecheck). **This supersedes the contradictory PP/PK sections in the position docs.**
8. `game_management.md` — line matching, D-pair logic, protecting a lead, 6-on-5 both ways, 3-on-3 overtime, shootout, playing from behind.

---

### Tier 2 — Individual skills and technique (the largest genuinely-missing area)

1. `skating.md` — edges, crossovers, tight turns, pivots, backward skating, transitions, stops, first-three-steps acceleration. **The defenceman's pivot and backward skating belongs here and is currently nowhere.**
2. `puck_handling.md` — stickhandling in tight, puck protection, head up, deception, forehand/backhand, carrying at speed.
3. `passing_and_receiving.md` — flat, saucer, bank, rim, one-touch; receiving a bad pass; passing into space vs. onto the tape; pass timing off the rush.
4. `shooting.md` — wrist, snap, slap, backhand, one-timer, tips and deflections, shooting in stride, changing the angle, shooting *for* a rebound, and shoot-vs-pass decision rules.
5. `body_contact_and_battles.md` — angling, taking the body, receiving a hit safely, board and corner battles, net-front battles, pinning, stick lifts, poke checks, stick-on-puck vs. stick-on-hands, shot-blocking technique (and when not to).

---

### Tier 3 — Reading the game (hockey IQ)

The connective tissue between position and system. Currently assumed, never taught.

1. `puck_support_and_spacing.md` — always give the carrier two options; support distances and angles; the support triangle; why spacing beats skill.
2. `time_and_space.md` — how to create it (deception, delay, changing pace, using the net) and how to take it away (angling, gap, active stick).
3. `scanning_and_anticipation.md` — shoulder checks: what to look at, when, how often. Reading a defenceman's shoulders and hips. Reading pressure before it arrives.
4. `risk_management.md` — the "never" list (no D-to-D through the slot, no cross-ice pass in your own end, no blind backhand up the middle) and *why* each one is on it. Plus per-zone decision hierarchies: what to do with the puck in 0.8 seconds.
5. `playing_without_the_puck.md` — you have the puck for well under a minute per game; this is the other 95%.

---

### Tier 4 — Complete the positional layer

1. `positions/goaltender.md` — the missing sixth position (see C3).
2. `defending_the_rush.md` — gap control method, 1-on-1, 2-on-1, 3-on-2, backchecking lanes, the middle-lane driver. Currently scattered across three docs and mostly absent (see C2).
3. `faceoffs.md` — a deep dive: all nine dot locations, full five-player alignments, plays off both wins and losses, the violation and ejection rules, and what a winger does when the centre gets tossed.

---

### Tier 5 — Off-ice and the practical player

1. `equipment.md` — fit, skate sharpening, stick flex/lie/curve, taping, blade care.
2. `conditioning_and_recovery.md` — training for repeated 45-second shifts, mobility, in-game fuelling.
3. `mental_game.md` — resetting after a mistake, pre-game routine, confidence, being coachable.
4. `practice_and_development.md` — what to work on alone, off-ice stickhandling and shooting, small-area games, deliberate practice for hockey.
5. `team_play_and_culture.md` — bench behaviour, being a good linemate, line and D-pair chemistry, talking to officials.
6. `how_to_watch_hockey.md` — seeing the system on TV; stats literacy (Corsi, xG, zone starts, PDO, TOI) and which numbers actually tell you something.

---

## Recommended Sequence

1. **Fix the errors** in the three existing docs — A1 through A6, B1 through B4. Small, surgical, and they're currently teaching a few wrong things.
2. **Tier 0 foundation** — glossary, rules primer, communication vocabulary. Then strip the duplicated glossary/icing/line-change blocks from the position docs and link instead. Every later document depends on this.
3. **Tier 1 systems** — your ask. Start with `defensive_zone_coverage.md` and `breakouts.md`, because those are what the position docs are silently assuming (C1). Then retro-fit the position docs with "this assumes X; see Y."
4. **Tier 2 technique** — the biggest missing axis.
5. **Tier 3 hockey IQ** — highest leverage once 1 and 2 exist.
6. **Tier 4 positional completion**, then **Tier 5 off-ice**.

Two structural additions worth making to *every* document going forward, given the podcast pipeline:

- A **Common Mistakes** section (the podcast prompt explicitly asks for misconceptions).
- A **Key Takeaways** block (feeds the "if you only remember 10 things" segment directly).

---

## Sources

Rules claims in this review were verified on 27 July 2026 against:

- [Icing (ice hockey) — Wikipedia](https://en.wikipedia.org/wiki/Icing_(ice_hockey)) — icing exceptions, goaltender waiver, hybrid icing mechanics
- [Offside (ice hockey) — Wikipedia](https://en.wikipedia.org/wiki/Offside_(ice_hockey)) — two-skate rule, delayed offside, tag-up
- [Rule 27 Puts Goaltenders in Their Place — Scouting The Refs](https://scoutingtherefs.com/2017/01/16841/rule-27-puts-goaltenders-place/) — trapezoid / restricted area
- [What is the Trapezoid in Hockey? — Goalie Monkey](https://www.goaliemonkey.com/learn/hockey-trapezoid-explained) — trapezoid dimensions and exceptions
- [Explained: 1-3-1 Power Play Formation — The Coaches Site](https://members.thecoachessite.com/article/explained-1-3-1-power-play-formation) — 1-3-1 structure and the bumper role
- [How NHL Teams Make The Best Use Of The 1-3-1 Power Play — The Hockey News](https://thehockeynews.com/news/latest-news/how-nhl-teams-make-the-best-use-of-the-1-3-1-power-play) — modern PP formations
- [NHL To Implement Hybrid Icing for 2013-14 Season — NHLPA](https://www.nhlpa.com/news/nhl-to-implement-hybrid-icing-for-2013-14-season/) — hybrid icing adoption and "gain the line"

Note: the official NHL rulebook PDF is reachable at https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf (NHL Official Rules 2025-2026), and a text extraction is held locally in the session scratchpad. Check rules claims against that text, not against `nhl.com/info/rules`, which does not resolve to the rulebook.

# Content Style Guide

Every document in this project follows this guide. Read it before writing or reviewing.

---

## Audience and purpose

People **learning to play ice hockey effectively** — both newcomers and experienced players wanting to deepen their game. Documents are also fed into an AI podcast generator, so language must be precise, self-contained and readable aloud.

Write for someone who wants to *do* the thing, not just understand it. Every section should leave the reader knowing what to actually do on the ice.

---


## The reader is not a collaborator

**Content documents contain facts about ice hockey. They do not contain the story of
how the corpus was built.** A reader came to learn a sport. Everything that is true
about this project rather than about hockey is noise to them, and several kinds of it
are worse than noise.

Never put any of this in `content/`:

- **Change history.** "This replaced an earlier diagram", "this was corrected",
  "an earlier version said", "previously this document claimed". The reader did not
  see the earlier version and cannot use the information.
- **Review process.** Rounds, reviewers, adversarial passes, what a review found,
  what a defect was. That belongs in `project/reviews/` and `project/review_history.md`.
- **Build tooling.** Script names, checkers, generators, manifests. A reader does not
  care that `check_geometry.py` asserts a coordinate; they care that the number is right.
- **Internal editorial machinery.** Ownership notes addressed to other documents
  ("this document owns rink dimensions", "note for other documents in this corpus"),
  propagation instructions, style-guide references. Ownership is real and it matters —
  it just belongs in this file and in the documents' own discipline, not on the page.
- **The corpus narrating itself.** "This corpus uses…", "these documents have chosen…"
  Say the thing. If a convention needs explaining to the reader, explain the convention,
  not the fact that the corpus adopted it.

### What this rule does NOT touch

It is not a licence to tidy, and confusing the two would destroy the corpus's integrity
story. **All of the following stay, and stripping them is a defect:**

- **Honest disclosure about evidence.** "This could not be verified", "single-source",
  "no study was found", "the two sources disagree", "retrieved 29 July 2026". These are
  facts about how good the evidence is, and the reader needs them to weigh the claim.
- **Provenance.** Which rulebook, which edition, which key a symbol comes from, who said
  it. That is attribution, not process.
- **Scope and applicability.** "If you play in Britain, your rule book is the IIHF's."
  "This document is written to NHL rules." The reader needs to know what applies to them.
- **Stated qualifications on a number.** The owner's hedge travels with the figure.

The test: **would a reader who had never heard of this project want to know it?**
"The IIHF and NHL books disagree here" — yes. "Round 27 found this and fixed it" — no.

## Rule set

**Write to NHL rules.** Where IIHF, USA Hockey, or typical rec/beer-league rules differ *in a way that changes how you play*, flag it inline. Don't flag trivia.

### Verified rules facts — use these, do not contradict them

These were verified against sources on 27 July 2026. Several are commonly got wrong:

- **Offside** requires **both skates** to completely cross the blue line before the puck completely crosses it. One skate on or behind the line keeps you onside. The puck must *completely* cross the line.

  **⚠️ The airborne trail skate is an NHL/IIHF rule and is the opposite under USA Hockey — always flag this.** Under the NHL a raised skate over the neutral zone keeps you onside. Under **USA Hockey Rule 630(a)** it does not: *"A player is considered 'offside' when the player does **not have skate contact** with any part of the Neutral Zone or the blue line when the puck crosses the determining edge,"* and *"A player only needs to have **skate contact** with one skate with the blue line to be considered 'onside.'"* So the trail-skate-drag technique this corpus teaches as a headline zone-entry skill is **offside under USA Hockey unless the skate is touching**. Most North American rec and youth players are under USA Hockey rules. Wherever the technique appears, say which book it works in.
- **Delayed offside** ends when the attacking team clears the zone (**tagging up**, after which they may re-enter), or when the defending team gains control and moves the puck out. It becomes a whistle if an attacker touches the puck or checks an opponent while the linesman's arm is up.
- **Hybrid icing** — adopted by the NHL in 2013-14 and the IIHF in 2014. **⚠️ Do not write "the race is to the dot."** That is the common version and Rule 81.1 says in terms that it is wrong: *"For clarification, the determining factor is **which player would first touch the puck, not which player would first reach the end zone face-off dots**."* The dot is the **deadline for the decision**, not the finish line — the linesperson judges who would reach *the puck* first and must decide by the time someone reaches the dot. If it is too close to call at that moment, icing is called. This error was in five documents plus this guide before it was caught; it changes what a chaser does at speed, because a player who has lost the dot race may still be entitled to keep the puck alive. Some youth and rec leagues still use no-touch (automatic) icing; a few use touch icing.
- **Icing is waved off** if: the opposing goalie plays it or leaves the crease and moves toward it (NHL — USA Hockey does *not* wave off for goalie movement); the puck goes in the net (it's a goal); it comes directly off a faceoff; the team is shorthanded; or a linesman judges an opposing skater could have played it. To nullify a potential icing a teammate must "gain the line" — the puck must contact the centre red line **on a stick**, not a skate.
- **After your own icing:** play stops and there is a defensive-zone faceoff. The offending team **cannot change lines** and **cannot use a time-out** — under the **NHL** (81.4, 87.1) **and under the IIHF** (81.4, 87.1), whose wording on both is identical. **USA Hockey is the outlier**: Rule 624 carries no substitution restriction and Rule 636(f) no icing condition, so neither is blocked.

  **⚠️ This bullet has now been wrong twice, in opposite directions, and both errors reached six documents.** It first stated the NHL position as universal. The correction then claimed IIHF 87.1 attaches no icing condition to time-outs — which is false; IIHF 87.1 reads *"No 'time-out' shall be granted to the defensive team following an icing…"*, the same sentence as the NHL. A British reader was told his own book punished icing more lightly than it does.

  **The lesson is about this list, not about icing.** Entries here are headed "do not contradict", so writers propagate them without checking, and a wrong entry travels further and faster than a wrong sentence in any single document. **Treat this list as a source that needs auditing, not as ground truth** — quote the rulebook when you rely on an entry, and if the quotation is not in front of you, go and get it.
- **The trapezoid** (goalkeeper's restricted area) applies in the **NHL (since 2005-06), the KHL, and IIHF play (since the unified 2021-22 rulebook)**. Most rec, beer-league and youth associations do **not** use it. The goalie may only play the puck behind the goal line inside it; violation is a two-minute delay-of-game minor. **The sole exception is the goalie maintaining skate contact with the crease** — there is no teammate-based exception.

  **⚠️ Cite this correctly — the two rules give different dimensions and the corpus kept reproducing the stale one.** Use **Rule 1.8 for the dimensions** and **Rules 27.8 / 63.2(viii) for the penalty**. Rule 1.8 specifies the lines actually painted: seven feet outside each crease — **eight feet from each goal post** — widening to eleven feet from each post (**28 feet apart**) at the end boards. Rule 27.8 still reads "six feet from either goal post", which is wording left over from before the 2014-15 widening.

  **Be accurate about *why* 27.8 is wrong.** It is **stale, not self-contradictory** — an earlier version of this guide claimed the latter and the error propagated into three content documents. Six feet outside each post gives 18 feet at the goal line diverging to 28 feet at the boards: a perfectly coherent trapezoid, and exactly the pre-2014 shape. Rule 1.8's figures give 22 feet at the goal line diverging to the same 28 feet. Both are internally consistent; only one describes the lines currently painted. **Never cite 27.8 as a source of dimensions**, and where the geometry matters say that 27.8 describes the old trapezoid rather than that it contradicts itself.
- **Power play formations:** the **1-3-1** has exactly **one** player at the point (one point, two half-walls, one bumper between them, one net front). The **umbrella** has three high. The **overload** loads four onto one side. There is no bumper in a true umbrella.

  **⚠️ Personnel is not geometry, and this list is for geometry only.** *"Most first units use four forwards and one defenceman"* was carried in this bullet and is **not a verified fact** — it is an unsourced prevalence claim about what teams choose, and its presence in this list is why five documents restated it bare. Formation *shape* is definitional and belongs here. How many forwards a coach puts in that shape is a coaching choice: label it as such wherever it appears, or source it.
- **Penalty kill formations:** a **box** has **two** players high (both forwards) and two low (both defencemen) — it has no single "top". A **diamond** has a single apex, used against a 1-3-1 because a box leaves the bumper unmarked. **Wedge+1** is three killers in a tight triangle around the net plus a fourth outside it, the **"+1"**.

  **⚠️ This entry used to end "plus one puck-chaser", and that phrase is what propagated.** It named the +1's *behaviour* rather than the shape — and named it wrongly. [`special_teams.md`](../content/systems/special_teams.md) owns this formation and has it that the +1 **pressures whoever has the puck** and does **not** follow it around the perimeter — when the puck moves, the nearest wedge player steps out as the new +1 and the previous one drops in; a +1 who chases is listed there as the **counter** to the system, in the same block. One of the several sources that document cites for the wedge — [The Coaches Site](https://members.thecoachessite.com/article/explained-wedge-penalty-kill-formation), rendered body re-read 31 July 2026 — never uses "chase" at all: it calls the fourth player the **sweeper** or the **push-down player**. "Puck-chaser" was a corpus coinage with no source behind it, and because it sat *here*, under a heading reading "do not contradict", it was restated in `rink_map_and_glossary.md`, `positions/goaltender.md`, `positions/defender.md` and `how_to_watch_hockey.md` before anyone checked it. **Same lesson as the bullet above: behaviour is not geometry, and this list is for geometry only.**

  **⚠️ This entry also used to say the +1 works "straight outward from the net", and that is no longer what `special_teams.md` has** — it was corrected on 31 July 2026 and this line with it. That wording traces to [Sound Of Hockey](https://soundofhockey.com/2022/04/22/kraken-coach-dave-hakstols-scheme-and-philosophies-the-penalty-kill-part-8/), which has the +1 *"activates in a straight line from the goal toward the opposing player in possession of the puck"* — describing the **2021-22 Seattle Kraken specifically**, not the system. [Broad Street Hockey](https://www.broadstreethockey.com/post/philadelphia-flyers-nhl-penalty-kill-systems-analysis/) has the +1 roaming more freely, and [The Coaches Site](https://members.thecoachessite.com/article/explained-wedge-penalty-kill-formation) has him sweeping across the top of the zone. `special_teams.md` now carries all three as **a coaching choice, with an instruction to ask your coach**. One club's variant had been taught as the system in seven documents, in this entry, and in the site's `pk-wedge-plus-1` diagram caption. **Do not restate a route for the +1 here or anywhere else as though it were the formation.**

  **Do not sweep the word "chaser" out of the corpus, though.** `defensive_zone_coverage.md`'s **box+1** is a different system with a different "+1" — a fifth skater at even strength who genuinely *is* "the only one who chases the puck", with the role passing to whoever is nearest. That document owns that usage and it is correct. So is "dump-and-chase", and so is `special_teams.md`'s own section on the discipline **not** to chase. The defect was one coinage naming one role, not the word.
- **Faceoff ejections** are caused by moving before the drop, improper stick placement, or **encroachment by a teammate** — a winger creeping into the circle gets the *centre* thrown out. A second violation by the same team on the same draw is a bench minor. **Closing your hand on the puck is a minor penalty, not a faceoff violation.**

  **⚠️ Three USA Hockey divergences here, all of which change what a reader does.** (1) **613(a) reverses the stick-down order** — the *attacking* player places first at eight of nine spots, where NHL 76.4 has the *defending* player first; both books agree only at centre ice, where the visitor is first. This inverts the "advantage of going second" argument. (2) **613(d) makes a second violation an individual minor**, not a bench minor. (3) **USA Hockey grants no faceoff dot choice** (612(b), 624(a)) where NHL 76.2 / 81.2 and IIHF both do. Under IIHF, a violation is a **warning** rather than an ejection and a skate win **is** a violation.
- **Delayed offside and tag-up are classification-restricted under USA Hockey.** **Rule 630(d)** grants them only at Youth 15-Only and above, Girls 16U and above, High School and Adult. Below those levels the whistle is immediate — there is no tagging up. Note also that **tag-up requires only skate *contact* with the blue line** (NHL 83.3(i)), not both skates over it.
- **USA Hockey does have a goalkeeper's restricted area — do not write that it has none.** Three documents asserted that. **Rule 614(c)** restricts *freezing the puck* to the **"goalkeeper's privileged area"**, corners excluded, on the same two-minute penalty. It is not the NHL trapezoid and it governs freezing rather than playing, but "no restricted area at all" is false.
- **Charging stride thresholds differ by one stride between books.** USA Hockey says ***more than* two strides**; Hockey Canada **Rule 7.4** says ***two or more***; the NHL sets no stride count at all, judging charging on *"distance traveled"* (42.1). Do not conflate them, and do not attribute a stride number to the NHL. Note NHL 42.1 opens *"skates, **jumps into** or charges"*, so leaving your feet **is** itself part of the offence — USA Hockey 607 names *"leaving one's feet (jumping)"* directly.
- **Goaltender interference (Rule 69.1):** the rule's premise is that an attacker's position, *"whether inside or outside the crease, should not, by itself, determine whether a goal should be allowed or disallowed."* A goal is disallowed only if **(1)** an attacking player *"**either by his positioning or by contact**, impairs the goalkeeper's ability to move freely within his crease or defend his goal"*, or **(2)** the attacker initiates intentional or deliberate contact with the goalie, inside or outside the crease. Incidental contact **initiated outside the crease** is permitted *"provided the attacking player has made a reasonable effort to avoid such contact."*

  **⚠️ Do not write that screening is "entirely legal".** That overstatement propagated into 16 places across 12 documents before it was caught. Screening from **outside** the crease, without contact, is legal and valuable — but clause (1) means **positioning alone can void a goal** if it impairs the goalie's ability to move or defend, and Rule 69.3 separately disallows a goal where an attacker *"establishes a significant position within the goal crease, so as to obstruct the goalkeeper's vision and impair his ability to defend his goal."* Always attach the outside-the-crease qualifier to the legality claim itself.

### The UK rule set — IIHF is the base, everywhere

**Every level of hockey in Britain runs on the IIHF Rule Book.** The Elite
League, the NIHL, the English and Scottish recreational and junior game,
university hockey and the GB national teams. On top of it sit local amendments:
the **In-House Rules**, which England Ice Hockey, the SIHA and the BUIHA all
apply, or the **EIHL Casebook** in the Elite League. (The In-House Rules name no
issuing body anywhere in them — see [`uk_rules.md`](../content/foundation/uk_rules.md),
which owns this and records the evidence. Do not write "issued by".)

The In-House Rules state it directly — England Ice Hockey, the SIHA and the
BUIHA *"adopt the IIHF Official Rule Book 2025–2026 (Version 1.1, published July
2025) as the foundation for the rules of the game to be applied in England and
Scotland"* — and they are explicitly *"not intended to serve as a standalone
rule book."*

**What this means when you write a rules claim.** A British reader's flag is the
**IIHF** one. The corpus is written to NHL rules with IIHF, USA Hockey and
Hockey Canada differences flagged, and a British reader currently has no way to
know that the IIHF flag is theirs. So:

- Where a rule differs between books, **the IIHF position is load-bearing for UK
  readers** — do not treat it as the minor case.
- Where **England Ice Hockey amends** the IIHF rule, say so and cite the
  In-House Rules. [`uk_rules.md`](../content/foundation/uk_rules.md) owns the
  full amendment list; point at it rather than restating it.
- **Do not write "EIHA is defunct"** — England Ice Hockey is the same body,
  renamed. Both names are in live use.
- **Do not attribute the EIHL Casebook's contents.** This corpus has not
  obtained it. That the EIHL uses the IIHF book is sourced; what its casebook
  says is not.

**⚠️ The amendments most likely to catch a writer out**, because they contradict
the North American position the corpus states elsewhere:

| | England Ice Hockey | North America |
|---|---|---|
| Neck laceration protector | **Mandatory for all players**, no warning, 10-minute misconduct | USA Hockey exempts adults; Hockey Canada covers minor and female |
| On-ice video review | **Not available** in EIH or SIHA competition | Used in the NHL |
| Rink | Below **56 m × 26 m** authorised — under the IIHF minimum on both counts | NHL 200 × 85 ft; IIHF 60 m long by **26–30 m** wide (Rule 1.2) |
| Half visor | **Women's hockey:** permitted only from the season after the 18th birthday — a relaxation of IIHF 102.1's full-face requirement, not a general rule | Differs by classification |
| Overtime | Only NIHL, and SNL where its regulations provide | Standard |
| Junior ages | U19/U16/U14/U12/U10 by birth year, **unisex** | USA Hockey / Hockey Canada bandings |

---

### Primary rulebooks — get them yourself, the paths below are historical

> **⚠️ The scratchpad paths below are historical.** The directory belongs to a
> session that has ended. **The books have since been re-downloaded to
> `/private/tmp/`** — see the working list immediately below. Do not conclude a
> rule is uncheckable because a path here does not resolve; that is how round 20
> lost its whole IIHF and Hockey Canada layer.
>
> **Working paths, re-obtained 29 July 2026:**
>
> ```
> /private/tmp/nhl_rules.txt       NHL Official Rules 2025-2026
> /private/tmp/iihf_rules.txt      IIHF Official Rule Book 2025/26  ← the UK's base rule set
> /private/tmp/iihf_situations.txt IIHF Situation Handbook 2025/26
> /private/tmp/eiha_inhouse.txt    IHUK In-House Rules 2025-26 Rev 1 (England/Scotland/BUIHA)
> /private/tmp/eih_rr.txt          England Ice Hockey Rules & Regulations (governance)
> /private/tmp/usah.txt            USA Hockey Playing Rules 2025-29
> /private/tmp/hc.txt              Hockey Canada Playing Rules
> ```
>
> **Fetch them from the URLs in the documents' own Sources sections.** Round 20's
> reviewers recovered the NHL, USA Hockey, Hockey Canada, IIHF and PWHL
> rulebooks, both USA Hockey coaching manuals and the Tulsky paper that way.
> Two things worth knowing before you give up on a 403: USA Hockey's coaching
> PDFs serve fine with a browser user-agent plus `Referer: usahockey.com`, and
> `iihf.com` returns a Cloudflare challenge to automated fetching while serving
> normally to a browser. A 403 is not an absence — §3 of the review history
> says so at length, and it applies to your own tooling too.
>
> The file list below is kept as a description of *what to obtain and what each
> is called*, not as a set of working paths.

`nhl.com/info/rules` returns 404 and the hosted PDF often exceeds fetch limits, so **do not fetch the rulebook from that URL.** The primary sources, as previously extracted:

```
sources/                 ← in the repository. Everything in it is gitignored for
                           copyright except `README.md`, which is tracked. Rebuilt by
                           `bash scripts/fetch_sources.sh`. `sources/README.md` is
                           the authoritative inventory; this list is a summary of it.
    nhl_rules.txt        NHL Official Rules 2025-2026            (21,959 lines)
    iihf_rules.txt       IIHF Official Rule Book 2025/26 v1.1     (10,983 lines — the
                           edition Britain adopts; v1.0 kept alongside for comparison)
    iihf_situations.txt  IIHF Situation Handbook 2025/26 v1.1     (8,941 lines)
    usah.txt             USA Hockey Official Playing Rules 2025-29 (8,200 lines)
    hc.txt               Hockey Canada Playing Rules 2026-2028     (9,127 lines)
    eiha_inhouse.txt     IHUK In-House Rules 2025-26, Revision 1     (631 lines)
    eih_rr.txt           England Ice Hockey Rules & Regulations      (2,307 lines)
```

**⚠️ The USA Hockey Casebook is *not* on disk, and never has been in this
directory.** An earlier version of this list named a `usah_case.txt` of 18,376
lines, in a session scratchpad that no longer exists; `fetch_sources.sh` does not
retrieve it, and the situations the corpus cites from it — for Rules 605, 624
and 630 — appear in no file in `sources/`. (`usah.txt` *does* carry five
Situations, at lines 6602-6652, but they belong to the Blind Hockey One Pass
rule in the Disabled Hockey section of the **Playing Rules**, not to the
separate Casebook volume. The first draft of this paragraph said `sources/`
held no USA Hockey Situation at all, which one `grep` falsifies — written
into the very block correcting a governing document for being wrong.)

Anything the corpus says about a USA Hockey casebook situation is
therefore **unverifiable from this repository** and must carry that limit —
`rules_primer.md` and `shooting.md` both do. If you fetch it, add it to
`fetch_sources.sh` and the README table so the next agent inherits it rather
than rediscovering this.

Other extracted sources in the same directory, worth knowing about before you declare something unfindable: `tulsky.txt` (zone-entry study), `berg.txt` / `hockeyscan.txt` (Berg et al. 2025 on scanning), `ibc.txt` (Introduction To Body Contact), `huh.txt` (Heads Up Hockey), `bvhs.txt` (goaltending manual), `bnq.html`, `csa.pdf`.

**⚠️ Two files in there are not what their names suggest. Check contents before citing from a filename.**

- **`goalie.pdf` is not a goaltending manual.** It is Beaudoin & Swartz, *Strategies for Pulling the Goalie in Hockey* — an MCMC simulation paper about when to pull the goalie, with nothing on technique. For goaltending technique use `bvhs.txt`.
- **`pass.txt` is narrower than "the USA Hockey playbook" suggests.** It is a single 92-line article — *Coaches' Playbook: Passing the Puck*, by John Hamre of the US National Team Development Program, in *American Hockey*, USA Hockey's own magazine. `passing_and_receiving.md` cites it correctly and it is a legitimate source for passing mechanics. But it is one article by one named coach, not a comprehensive governing-body playbook, and it contains **nothing** on goaltending, verbal calls, or systems. Do not reach for it outside passing technique.

**⚠️ `goalie.pdf` is not a goaltending manual — but do not dismiss it either.** It is Beaudoin & Swartz, *Strategies for Pulling the Goalie in Hockey* — an MCMC simulation paper about when to pull the goalie, with nothing on technique. For goaltending technique use `bvhs.txt`. Check what a file actually contains before citing it from its name.

**Verify every rules claim by grepping these files**, e.g.:

```bash
grep -n "^27.8" nhl_rules.txt          # find a rule by number
grep -n -A20 "^81.1 Icing" nhl_rules.txt   # read the full text
grep -ni "restricted area" iihf_rules.txt   # search by phrase
```

Note the extraction contains each rule twice (the PDF has a table-of-contents pass and a body pass) — read the longer occurrence.

Cite these as *NHL Official Rules 2025-2026, Rule N.N* and quote the actual wording where it matters. If a claim cannot be confirmed in these files, say so explicitly in the text rather than guessing.

**⚠️ Use the working URL.** `https://www.nhl.com/info/rules` **does not resolve to the rulebook** — it redirects, and eleven documents in this corpus ended up citing it as a dead link. The PDF that actually serves (HTTP 200, verified 27 July 2026) is:

```
https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf
```

Also dead: `media.nhl.com/site/asset/public/ext/2025-26/2025-26Rules.pdf` and the 2023-24 equivalent. Cite the `media.d3.nhle.com` link, labelled *NHL Official Rules 2025-2026 (PDF)*.

**Never let a blog carry a rules claim when the primary text is sitting in the scratchpad.** Scouting The Refs, Wikipedia and ESPN are fine as supporting reading, but every content error found in the corpus's first review round clustered in exactly the files that sourced a rule from them instead of the rulebook.

---

## The cardinal rule: never present a coaching choice as a rule of hockey

This is the most important instruction in this guide, and the most common failure.

Most "always do X" hockey advice is actually "in system Y, do X." Wingers staying out of the corner, F1/F2/F3 forecheck assignments, defencemen holding the blue line, who covers the bumper — all of these are **coaching choices** that vary by team.

When describing something system-dependent:
1. Name the system it belongs to.
2. Name at least one realistic alternative and how the job changes under it.
3. Tell the reader to find out which one their team plays.

**The house default**, assumed across the corpus unless a document says otherwise, is a **low zone collapse (zone) defensive-zone coverage** with a **2-1-2 forecheck**. Say so when you rely on it.

A symptom to watch for: if you write a rule and then need three "Exception —" blocks to walk it back, you have described a system without naming it. Name it instead.

---

## Document structure

```markdown
# Title

> **Rule set:** Written to NHL rules. Where IIHF, USA Hockey or typical rec-league rules
> differ in a way that changes how you play, it is flagged inline.
>
> **Related:** `[Doc A](doc_a.md)` · `[Doc B](doc_b.md)`   ← replace with real corpus files

## Overview
Two or three sentences: what this is and why it matters.

## (Body sections)
...

## Common Mistakes
Bulleted. What players actually get wrong, and why it costs them.

## Key Takeaways
Numbered, 5–10 items. Each one standalone and memorable — this feeds the
podcast's "if you only remember N things" segment.

---

*Sources — retrieved 27 July 2026:*

*[Category]: [Name](url) · [Name](url)*
```

---

## Key facts blocks

**Applies only to the 26 documents that teach how to play** — Positions,
Systems, Technique, Hockey IQ, and `on_ice_communication.md`. Not Getting
Started, not the glossary, not the rules primer, not the six off-ice documents:
they are reference or off-ice material, and imperatives would misrepresent them.

Each teaching section opens with a short block of extracted facts, so a player
can take what they need to do off the page without reading the prose around it.

````markdown
### Carrying the Puck — Free Space

```facts
Position: Behind your own net or along the boards
Action: Move the puck quickly and purposefully — don't hold it longer than you need to
Targets: Winger on the boards, the centre coming low, or your defensive partner
Goal: Transition the puck out of danger and start your team's breakout
Never: Carry through the slot — skate behind the net to the other side instead
```

**Where to be:** …
````

### The rules

- **At `###`, not `##`,** wherever a section has subsections. The `##` headings
  in the positional documents are one-sentence containers; a block there
  restates its own heading. Where a section has no subsections and is itself the
  unit of teaching, `##` is right.
- **3–6 coaching facts, 8 at most.** More than 8 and the section is probably two
  sections. **`Rule:` facts do not count against that cap** — a cap must never
  evict a rulebook fact, so the cap governs how much *coaching* content a block
  holds. No block may exceed 11 facts in total.
- **No block on a section that is itself already an extraction layer.**
  `## Common Mistakes` and `## Key Takeaways` always; also any section that is a
  bulleted recap of the subsections above it, whatever it is called. A third
  restatement is one more place for a correction to fail to reach.
- **No block on a `##` that is a one-line container** above its subsections — it
  would restate its own heading. A `##` *may* carry one where its own body holds
  teaching that no subsection covers.
- **One line per fact, and terse.** 200 characters at the outside. `Rule:` and
  `Convention:` may run to 300, because a citation and a hedge are both
  mandatory and both cost words. Past that it is prose: put it in the body.
  **Where a fact runs long, split it into two complete facts rather than
  trimming it** — under pressure the thing that gets trimmed is always the
  caveat, and the caveat is the reason the corpus is trustworthy.

`scripts/check_facts.py` enforces all of the above, plus the closed label set
and the `Rule:`-must-cite requirement. It cannot check the one that matters
most — that a fact is traceable to its own section — which needs a reader.

### The labels

A closed set. Do not invent new ones.

| Label | Holds |
|---|---|
| `Position:` | Where you are |
| `Action:` | What you do |
| `Goal:` | What it is for |
| `Priority:` | What wins when two things compete |
| `Technique:` | How to execute it |
| `Options:` | Alternatives, where more than one is legitimate |
| `Targets:` | Who or where to pass |
| `Read:` | The cue that selects this option over its siblings |
| `Countered by:` | How the opposition defeats it |
| `Never:` | A hard coaching constraint |
| `Convention:` | A coaching choice, marked as one |
| `Risk:` | What goes wrong, and how badly |
| `Key:` | The one thing to remember |
| `Mindset:` | The attitude the situation calls for |
| `Rule:` | An actual rulebook rule, cited |

**⚠️ `Rule:` means a rulebook rule and nothing else.** "Never carry through the
slot" is a coaching instruction, however absolute the body makes it sound — it
takes `Never:`. Using `Rule:` for coaching advice breaks
[the cardinal rule](#the-cardinal-rule-never-present-a-coaching-choice-as-a-rule-of-hockey)
in the most visible place on the page. Where the body hedges — *"a coaching
default, not a law"*, *"a convention, not a law"* — the fact takes
`Convention:`, and that hedge is not optional.

### The rule this convention was missing

**Extract-never-author guards against invention. Nothing guards against
extracting the true half of a two-part rule.**

Round 20 read all 763 blocks and found traceability essentially perfect — and
seven criticals, every one of them an omission. A fact that is accurate,
traceable, correctly labelled and correctly cited can still be the sentence
that gets a reader penalised, because the sentence next to it was the one
carrying the exception.

So, when writing or reviewing a block:

**List every hedge, exception and rule-set flag in the section's body, then
check the block for each one.** That is the check that found all seven. It is
not the same as asking whether the facts are true.

Three specific traps, all of which recurred across several documents at once:

- **A rule with an exception must carry the exception.** NHL 49.2 has two
  prohibitions; 63.2(iii) has three carve-outs; 67.4 exempts the goalkeeper;
  83.4 has one way a goal still counts. Each was stated with a part missing.
- **A rule that differs by rule set must say so.** The post-icing restrictions
  and the puck-out-of-play minor were each stated as universal in nine
  documents. Most readers are under USA Hockey, where neither applies as
  written.
- **A restriction that lives in prose does not exist.** `body_contact_and_
  battles.md` §5 confined itself to checking leagues in a blockquote, and
  taught four blocks of how to hit without it. The layer exists so a reader can
  skip the prose.

### Extract, never author

**Every fact must be traceable to a sentence already in that section.** Not the
document — that section. This is the rule the whole convention rests on, and it
exists because the hand-made mind map this convention was designed from already
failed it: three of its four defender facts come from the free-space subsection
and the fourth from the subsection below.

Three consequences:

1. **A fact may not contain a claim the section does not make.** If it cannot be
   extracted without inventing, that is a finding about the section — raise it,
   do not write around it.
2. **The body is the source of truth.** Where a fact and the body disagree, the
   fact is wrong by definition. Fix a body, then go and fix its facts —
   [the summary layer is where corrections go to die](#writing-rules), and this
   adds ten summary blocks per document to the two that already exist.
3. **Ownership applies to facts too.** A fact may not restate a number another
   document owns. The Tulsky zone-entry rates belong to `zone_entries.md`; rink
   dimensions belong to `rink_map_and_glossary.md`. Point, do not copy.

---

## Writing rules

- **Plain English.** No jargon without definition on first use in that document.
- **Define a term where it is used in a particular sense; point at the glossary for the rest.**
  [`rink_map_and_glossary.md`](../content/foundation/rink_map_and_glossary.md) is the dictionary for
  this corpus — 68 entries in its §8 glossary, linked from 20 documents — and general rink vocabulary is defined there
  **once**. A document carries only the terms it uses in a sense of its own, and opens its language
  section with a pointer so a reader meets the vocabulary page *before* they need it.

  ⚠️ **This rule replaced a stricter one, and the reason for the strict version has not gone away.**
  It read: *"Define every hockey term the first time it appears, even if another document defines it.
  Documents must stand alone when read aloud."* That existed for the **podcast** — a listener cannot
  follow a link, so a document that points instead of defining leaves them stuck.

  **What changed is the measurement.** Eight documents carried an identically-titled "A Note on
  Language" section totalling **3,863 words — about 26 minutes of spoken definitions** — and the
  duplication was real but partial: 48 distinct terms of which 11 appeared in more than one section,
  and even those mostly said different things per document. So the strict rule was buying
  standalone-ness at the price of eight pages that *looked* like boilerplate, while the genuinely
  shared vocabulary was already in the glossary anyway.

  **The listener's cost is real and is not fully mitigated.** What reduces it: the pointer must
  **name what the glossary covers** ("every line, zone and named area of the ice"), so a listener at
  least knows what kind of thing is missing and where it lives; and any term a document leans on
  heavily keeps its one-line gloss inline. What is *not* claimed is that a listener is as well served
  as before. They are not, and that is the trade the owner made deliberately.
- **Second person.** "You are the last line of defence," not "the defenceman is..."
- **Concrete over abstract.** "Roughly a stick-and-a-half of space" beats "an appropriate gap."
- **Say why, not just what.** Every instruction should carry its reason. The reason is what makes it transfer to situations you didn't describe.
- **Headers, subheaders and bullets** for scannability. Avoid walls of prose.
- **British English** spelling is used in newer content ("defence", "centre", "colour"). The three original position documents use a mix; don't fight it inside those files, but use British English in new files. Note that **"defenseman"/"defencemen"** and **"center"/"centre"** both appear across the corpus — that's tolerated.
- **No fabricated statistics, records, or quotes.** If you can't source a number, don't use one.
- **Flag anything you could not verify** explicitly in the text.

## Terminology precision

This project teaches vocabulary, so be exact. Distinctions that are commonly conflated:

| Term | Not the same as |
|---|---|
| **Rim** (onward around the boards) | **Reverse** (back against the flow) |
| **Pinch** (stepping down from the *offensive* blue line) | **Step up** (challenging forward in the neutral zone / at your own line) |
| **Slot** | **High slot** (dots to top of circles) vs **goalmouth** (immediate net front) |
| **Bumper** (middle of a 1-3-1) | **Net front** |
| **Box** (two high, two low) | **Diamond** (single apex) |
| **Point** (blue line) | **Half-wall** (level with the faceoff dot) |
| **Forecheck** (pressure in their end) | **Backcheck** (racing back to your own end) |
| **"Winger stays high"** = on the opposing point, in defensive-zone coverage | **"Winger stays high"** = held near the blue line in a flat/spread breakout — a *different* instruction |

**⚠️ "Stay high" is overloaded and has already caused one cross-document contradiction.** For a winger it means two different things about twenty feet apart: *covering the opposing point while the other team has the puck*, and *holding near the blue line in a spread breakout*. And it **expires** — the moment your team wins the puck, a winger covering the point comes down the wall to the outlet spot between the hash marks and the goal line. Whenever you write "stay high", say which sense you mean and say what ends it.

**F1 / F2 / F3 are roles, not people** — defined by order of arrival, not by position. Say so wherever you use them.

---

## Cross-linking

Link rather than duplicate. Content documents live at the repository root and link to each other as `[Name](other_doc.md)`, and to position documents as `[Center]` followed by `(positions/center.md)`. Documents inside `positions/` link out with a `../` prefix — a link to Breakouts is written `[Breakouts]` followed by `(../breakouts.md)`.

**Note on layout:** apart from `README.md` and `CLAUDE.md`, the repository root holds **only content documents**. Project files — this style guide, the review roadmap and the podcast prompts — live in `project/` and must never be fed to the generator. Anything you add to the root will be turned into an episode.

**⚠️ A bare `*.md` glob of the root is therefore not safe** — it picks up `README.md` (an index) and `CLAUDE.md` (agent instructions), neither of which is an episode. The pipeline must exclude those two by name, or glob the explicit corpus list below. An earlier version of this guide asserted the root was pure content; it never has been.

The full corpus:

**Entry point:** `getting_started.md`

**Foundation:** `rink_map_and_glossary.md` · `rules_primer.md` · `on_ice_communication.md`

**Positions:** `positions/center.md` · `positions/defender.md` · `positions/winger.md` · `positions/goaltender.md` · `switching_positions.md` *(root, not `positions/`)*

**Systems:** `breakouts.md` · `forechecking_systems.md` · `neutral_zone_systems.md` · `defensive_zone_coverage.md` · `offensive_zone_play.md` · `zone_entries.md` · `special_teams.md` · `game_management.md`

**Technique:** `skating.md` · `puck_handling.md` · `passing_and_receiving.md` · `shooting.md` · `body_contact_and_battles.md`

**Hockey IQ:** `puck_support_and_spacing.md` · `time_and_space.md` · `scanning_and_anticipation.md` · `risk_management.md` · `playing_without_the_puck.md`

**Situational:** `defending_the_rush.md` · `faceoffs.md`

**Off-ice:** `equipment.md` · `conditioning_and_recovery.md` · `mental_game.md` · `practice_and_development.md` · `team_play_and_culture.md` · `how_to_watch_hockey.md`

Link only to documents on this list. Assume every one of them exists.

---

## Numeric facts and their owners

**Why this exists.** Every *system* in this corpus has an owner document and reciprocal pointers. For a long time no *number* did — and that is precisely where the corpus kept contradicting itself. The crease was 6 ft deep in three files and 4.5 ft in a fourth. The neutral-zone gap was 2–3 stick lengths in two files and 1–2 in a third. The off-puck share was 90%, 95% and 96%. Three reviews in a row found the same class of defect regenerating, because a writer restating a number from memory has nothing to check it against.

**The rule: take the number from its owner. Do not restate it from memory, and do not derive it independently.** If you think the owner is wrong, fix the owner — don't diverge from it.

| Fact | Owner | Canonical value |
|---|---|---|
| Rink dimensions, lines, creases, faceoff spots, hash marks, circle radii | `rink_map_and_glossary.md` | NHL 200 × 85 ft; crease 8 ft wide × 6 ft deep; end-zone dots 20 ft from the goal line; hash marks 2 ft long, 5'7" apart, four per circle |
| Trapezoid geometry | `rink_map_and_glossary.md` | Rule **1.8**: 8 ft from each post at the goal line → 11 ft from each post (28 ft apart) at the boards. Never take dimensions from 27.8 |
| Gap-control distances | `defending_the_rush.md` | 2–3 stick lengths in the neutral zone → a stick and a half at the red line → one stick length at your own blue line |
| "Tight gap" value (one to one and a half stick lengths) | `neutral_zone_systems.md` | Note this is **not** in `defending_the_rush.md`, which was being wrongly credited with it |
| Positional workload | `positions/center.md` | A centre works more *of* the ice (three zones, full width) — **not** more distance. Lignell et al. 2018: defencemen cover **29% more** total skating and are on the ice **47% longer**; forwards do **54% more** high-intensity skating per minute. No study separates centres from wingers on distance |
| Shift length | `conditioning_and_recovery.md` | 30–80 s measured (Vigh-Larsen & Mohr 2024); 30–45 s well-managed. A **47.7 s** central tendency is a corpus computation, not a published figure |
| Share of the game spent off the puck | `playing_without_the_puck.md` | Use that document's figure and its stated basis; do not round it differently elsewhere |
| Zone-entry values | `zone_entries.md` | Tulsky et al., MIT Sloan 2013, data 2011-12: 0.53–0.62 shots per carry-in vs 0.22–0.28 per dump-in **across the full 330-game sample**; net values +0.42 carry attempt vs +0.12 dump-and-chase **from the Washington sample only** — the two tables have different populations and the scope travels with the number |
| Carry-vs-dump **behavioural direction** | `zone_entries.md` | Tulsky's authors concluded NHL players give the puck up at the blue line **too readily** — *"teams probably could benefit from being more aggressive."* The study observed **NHL players only** and makes no claim about amateurs. The paper also self-limits: the 14% turnover rate *"would be higher in the marginal plays in question."* Two documents once drew **opposite** behavioural conclusions from this one source, because the table above owned the numbers and nothing owned the direction |
| Breakout options and their order | `breakouts.md` | Nine named options (up, wheel, reverse, D-to-D, rim, over, quick-up, stretch, off the glass). Each is keyed to a **read**, not to a rank — the document asserts no fixed preference order, so do not invent one elsewhere. It also owns the three named **control breakouts** — blue-to-blue stretch, strong-side slant, three high — which are five-player patterns against a set trap, not members of the nine. "Three high" there is a breakout shape and **not** the power-play umbrella of the same name, which `special_teams.md` owns |
| Shot-location value | `shooting.md` | Slot vs perimeter conversion, point shots, the inner/outer slot split. Note which figures are labelled unverified there — carry the label with the number |
| Pre-shot pass value (royal road, below-goal-line passes) | `offensive_zone_play.md` | 15.50% on royal-road/cross-slot passes and 6.73% on passes from below the goal line, from Alan Wells' analysis of Ryan Stimson's Passing Project — **volunteer-tracked, 51,308 shots at 5v5, counting all attempts rather than shots on goal.** That qualification is part of the fact. Valiquette's 76%/24% green-red split and the "33% vs 3%" figures are **attributed but uncheckable** and must never be restated without that label |
| Faceoff statistics | `faceoffs.md` | All computed for this corpus from the NHL API; carry the "computed for this document" label |
| Every rule number and its wording | `rules_primer.md` | Quote from the local rulebook, never from memory or a blog |
| Retrieval practice / the testing effect — the "answer before you read on" rationale | `practice_and_development.md` | Rowland (2014): **g = 0.50 (95% CI [0.42, 0.58]) across 159 effect sizes** for testing over restudying; producing an answer is worth roughly twice recognising one (cued recall 0.61 vs recognition 0.29). **The precondition is part of the fact, not a footnote:** with no feedback and ≤50% retrieval success the effect is **g = 0.03 (95% CI [−0.21, 0.27])** — indistinguishable from zero. So "getting it wrong beats recognising a right one" is only true *when the right answer follows*. **And the whole literature is verbal material with university undergraduates — no motor-skill or sport evidence exists** — so it must never be restated as a claim about on-ice practice |

**When you restate an owned number, say where it comes from** — a bare figure with no owner is how the divergence starts.

## Rules that travel need owners too

The table below governs **numbers**. Nothing governed **rules**, and that gap produced the corpus's most widely-repeated defect: *"you may ice the puck freely while shorthanded"* appeared flat in **eleven** documents and carried its exception in **three**. The exception is real and it matters — NHL **Rule 81.6** removes the exemption from a team short-handed by a major penalty that has failed to keep a player on the penalty bench, and **USA Hockey restricts the exemption by classification**, to Youth 15-Only and above, Girls 16U and above, High School and Adult. Below those levels a shorthanded team **cannot ice the puck at all**. Three documents call the exemption "the single biggest structural advantage a penalty kill has"; no position document mentioned either carve-out.

So: **a rule with an exception is a fact with an owner, exactly like a number.** When a rule appears outside its owning document, either state the exception or link — never state the general case bare. Applies with particular force to anything a position document asserts, because those documents promise in their own headers to flag rule-set differences inline.

The same shape recurs as **general-document-drops-the-specialist's-caveat**: a document names another as "the authority", then reproduces the authority's claim *without* the warning attached to it. If you are citing a document as authoritative, read what it actually says and carry its qualifications, or link instead of restating.

**⚠️ And check that a named owner actually holds what the pointers credit it with.** The sharpest version of this failure ran the *other* way. Thirteen documents cited USA Hockey Rule 624(b)(1); eight of them said *"[Special Teams] owns this rule."* **`special_teams.md` had never mentioned it** — not in the body, not in its Sources. The ownership convention was propagating a caveat outward from a document that did not contain it, so the owner's own summary was the single place in the corpus stating the rule bare. *(Closed — `special_teams.md` now holds the rule, both carve-outs and the source. Kept here as the worked example, not as an open issue.)*

This is worse than an ordinary gap, because the pointers make the corpus *look* rigorous while hiding it: a reader who follows the reference arrives at the least complete treatment of the fact. Whenever you write "X owns this", open X and confirm it does. Whenever you are named as an owner, confirm you hold every qualification your dependants are attributing to you.

## Holding a fact and stating it correctly are separate checks

Verifying that an owner *contains* a fact is not the same as verifying it states it *well*. `special_teams.md` was patched to hold the shorthanded-icing rule — and then stated it in a form that reads backwards aloud: **"The kill cannot ice the puck."** True only if you supply "be called for"; false as a sentence. This corpus is fed to a podcast generator, so **every rule statement must survive being read aloud with no surrounding text.** Check both: does the owner hold it, and does the owner say it right?

## A clean review round is a statement about the round, not the corpus

Round 9 of this corpus's review returned **zero critical defects**. Round 10 then found **three criticals and about twenty majors** — including a rules claim readers would act on (that a stick in your skates is a penalty only if you actually fall, false in all four rulebooks) and two documents denying, in their own sources' names, what those sources say.

Nothing changed between the rounds except **where the reviewer looked**. Round 9 verified the items its brief listed and scanned summaries programmatically for *numeric* claims; round 10 read those same summaries for everything that is not a number, and found the criticals sitting in places eight previous rounds had passed over.

So: **do not read a clean round as convergence.** A declining defect count across rounds measures how much method coverage has accumulated, not how healthy the corpus is. The useful question is never "did this round find anything" but **"what could this round's method not have found?"** — and the answer to that is the next round's scope.

Two practical consequences:

- **Every review report must state its own coverage limits** — which documents were read in full, which sampled, which not reached, and which checks were deliberately not re-run. Round 10 could only be scoped because round 9 said plainly what it had not read. A report that omits this is worth less than one that finds nothing and says why.
- **The summary layer is where corrections go to die.** Every critical in round 10 lived in a Key Takeaway or Common Mistakes bullet left behind when its body was fixed. Fix a body, then go and find every summary that repeats it.

## Claims that "everyone knows" are the least audited

Eight review rounds passed over *"the centre covers more ice than any other position"* — asserted flatly in five documents including the README — because it reads like common knowledge. It is not merely unmeasured. **A primary source contradicts it:** Lignell et al. (2018), 36 NHL players, found *"defensemen covered **29% more** skating in total than forwards and were on the ice **47% longer**"*, with forwards doing *"**54% more** high-intensity skating per minute"*. No study separates centres from wingers on distance at all.

It survived because it had **no owner** — no document was responsible for it, so no reviewer checked it. The corpus now states the defensible version (a centre works more *of* the ice: three zones, full width) alongside what the measurement actually shows.

**So: a claim that feels too obvious to source is a claim nobody has sourced.** Give it an owner and check it, particularly when it appears in several documents at once — that is a symptom of folklore propagating, not of consensus.

**The second worked example arrived at 36-document scale, and it is the sharper one.** Every `## Check yourself` preamble in the corpus asserted that *"producing an answer and getting it wrong is worth more than recognising a right one."* A grep of `content/` and `project/` for the entire relevant literature — retrieval practice, the testing effect, Roediger, Karpicke, Bjork — returned **no source anywhere in the repository**. It was written into 36 files at once, which is exactly the shape that makes a claim look like consensus and stops anyone checking it. The underlying finding turned out to be **real and well evidenced**, so this was never a deletion case — but sourcing it showed the sentence had shed the precondition that carries it: without corrective feedback, the measured effect is **g = 0.03, an interval straddling zero**. The corpus was asserting, as its own pedagogical rationale, the one cell of the meta-analysis where the effect disappears. `practice_and_development.md` now owns the claim (see the table above). All 36 preambles have since been rewritten to carry the precondition, to name the Key Takeaways as the corrective feedback rather than as the weaker option, and to drop two print-only instructions ("answer before you *read* on", "the section is named *beside* it") that mean nothing to a listener. The rewrite also dropped the assertion that *"every answer is in this document"*, which was false in six files whose safety questions are answered by `body_contact_and_battles.md`.

Two transferable lessons. **A claim generated once and stamped into every document is a single unsourced claim with 36 copies, not 36 corroborations** — the repetition is what disguises it. And **a finding can be genuine while the sentence stating it is wrong**, because compression drops preconditions first; when you compress an effect, check whether what you removed was the thing that made it true.

**Qualifications travel with values.** The table above governs *numbers*; it does not by itself govern the caveats attached to them, and that gap has already produced drift. If the owner says a figure is 5-on-5 only, or an author's own computation, or measured in a different sport, that qualification is part of the fact — carry it, or link to the owner rather than restating the number bare.

---

## Claims that evidence does *not* exist — go and look first

This corpus repeatedly asserted that no study existed when one did. The worst case: `scanning_and_anticipation.md` stated **four times** that nobody had counted hockey players' scanning, and built its whole framing around apologising for borrowing football data. Berg et al. (2025), *Journal of Sports Sciences* — 88 professionals, 2,545 tracked receptions — had been **downloaded into the working directory twice and never opened.** Its numbers also *contradict* the coaching benchmark the corpus was repeating.

Four review rounds missed it, for a structural reason worth internalising:

> **A negative existence claim is unfalsifiable by ordinary review.** Checking that quoted claims match their sources can never catch a claim that no source exists. It has to be attacked directly.

So, three rules:

1. **Before writing "no study exists", "could not be verified", or "untraceable" — search properly, and check the working directory and your own Sources list first.** The pattern recurred: `equipment.md` disclaimed the helmet-replacement guidance as unsourced while the Hockey Canada certification bulletin that states it *was already hyperlinked in that same file's source list* (see the note at the foot of that document). If you are about to say something can't be sourced, read your own references before you write it.
2. **A 403 is not an absence — but a 200 is not a presence.** USA Hockey, CSA, ISO and Nature all reject WebFetch and serve fine to `curl` with a browser user-agent, so several "could not be verified" notes were artefacts of tooling rather than missing evidence. Retry before you disclaim.

   **Then read what came back.** Hockey Canada's checking-resource URLs return **HTTP 200 with "404" in the page body** — soft-404s. A retry that stops at the status code would call them live and invent a citation for a page that does not exist, which is a worse failure than the disclosure it replaced. Grep the retrieved body for the fact you are claiming; a status code is not evidence. In that particular case the corpus's disclosure turned out to be **correct**, which is the point — the check has to be able to come back either way.

   **And check the text is actually *published*, not merely present in the HTML.** A quote attributed to a league's site — *"from co-ed to 50+, beginner to pro"* — existed only inside an **HTML comment**, in a commented-out block still advertising the **2019/20** season. It was in the source, so a naive grep found it; it was not on the page, so no reader would ever have seen it. Grepping raw HTML is not the same as reading the rendered page. Strip comments, or verify against what actually renders.

   **Watch for cherry-picked rows, too.** The same document quoted a programme as *"a four-session block, CAD $148.00"* — the shortest and cheapest of **ten** listings running 4–14 sessions and $148–$444, presented as the shape of the thing. A true quotation of one row is still a false picture of the page. Quote the range, or say which row you took.
3. **Never delete a claim merely because it is unsourced — source it or label it.** A tidying pass has already removed a *correct* fact from this corpus (the BNQ 9415-370 withdrawal, which was true), because it looked unsupported. Deletion is not the safe default; it is a silent way to lose information. The same applies when consolidating duplicates: check that a passage really is duplicated before cutting it. One dedupe brief would have orphaned the Rule 67.4/67.5 crease-cover material, which lived in one document only and had simply been filed under the wrong heading.

   **The one case where deleting is right: a primary source contradicts the claim, and repeating it would be unsafe.** `time_and_space.md` carried a coaching cue that contact "goes through the hands". USA Hockey's rulebook names *"the use of the hands, forearm, stick or elbow in delivering a check"* as prohibited, three separate times. That is not a coaching disagreement to be presented as a split — it describes a penalty, and a reader acting on it gets hurt or ejected. Cut it, and say in the document's notes that it was cut and why. The test is whether a **source** contradicts it, never whether a source is merely absent.

**And keep the honest disclosures.** An audit of ~40 of them found 30-plus were entirely sound — no study on black tape hiding the puck, no league-wide census of forecheck usage, no measured time cost of an icing clear, "2-2-1" genuinely not a hockey forecheck name. Those are a strength. Do not strip them to make the corpus look more confident than it is.

---

## Diagrams and their notation

**A diagram is a claim.** It is read faster than prose, trusted more, and remembered longer, so a wrong
picture teaches a wrong position to a reader who never questioned it. The notation below is **fixed**, and
every diagram added or changed is checked against it before it ships.

*This section exists because the notation has already failed twice. The first version was written from
memory, labelled honestly as unverified, and then used anyway — three of its five symbols meant something
else in the published key, and a forecheck diagram showed a shot where it meant pressure and marked every
opponent as a traffic cone. The second failure was subtler and lasted longer: the corpus took its player
axis from one published key and its line symbols from a different one that disagrees, and stated the hybrid
as though it were a single source.*

### Two published keys, and which one owns which half

The corpus draws from **two** sheets, both on disk, and it is explicit about which owns what:

| | Source | Owns |
|---|---|---|
| **(A)** | `sources/heo_intl_drill_symbols.pdf` — "International Drill Symbols", HEO NCCP Development 1 | **the player symbols** |
| **(B)** | `sources/iihf_coachdev_off_tactics.pdf` §21.1 — IIHF Coach Development, Level I | **the line symbols** |

⚠️ **Both are image-only.** `pdftotext` on (A) returns its title and nothing else, and (B)'s extraction
loses every glyph while keeping their names. **Render the page and look at it.** That is precisely how three
line symbols stayed wrong through every check ever run: each check confirmed the right symbol *names*.

`reading_ice_hockey_diagrams.md` must go on telling the reader that the two keys differ, and where. That
disclosure is correct and it stays.

### Shape carries the POSITION. Fill carries the TEAM.

| Glyph | Means | | Fill | Means |
|---|---|---|---|---|
| **Circle** | a **forward** | | **Open** | the reader's own team |
| **Triangle** | a **defenceman** | | **Solid** | the opposition |
| **`G`** | a goaltender — a bare letter, **no enclosing shape** | | | |
| **`X`** | a pylon, never a player | | | |

Read straight off key (A), whose rows are `● ○ Forward / Player` and `▲ △ Defender / Player`. The corpus
assigns the pair — **open is yours** — which the key itself does not state, and that assignment is a
documented departure.

**The notation is monochrome on purpose.** Colour carries nothing, so the encoding survives greyscale print,
photocopying and a reader who does not see red and green apart.

**A player's shape does not change when play turns.** A winger is a circle backchecking as well as
attacking. `pos` in a diagram spec **decides the shape**; a comment justifying a `pos: 'D'` as *"a triangle,
because he's a D"* is **correct**.

⚠️⚠️ **This section has been wrong once, in the opposite direction, and it is the specification — so it was
the most expensive copy to get wrong.** It stated that shape carried the **team** on an offensive/defensive
axis, and instructed authors not to blend in key (A) "which uses shape for *position*" — which is exactly
what the corpus does and what its own cited source says. That axis is IIHF §21.1's, it is real, and §21.1
carries the position in a **numeral inside the glyph** instead. The corpus does not use those numerals, so
it cannot use that axis either. **Three separate documents carried the wrong version simultaneously — this
one, `rink.mjs`'s header, and `.claude/agents/diagram-reviewer.md` — and the last would have made a reviewer
enforce it.** Do not trust any prose description of this axis, including this one: key (A) is a single page,
it is on disk, and it takes ten seconds to look at.

### What goes inside the glyph — the deviation

§21.1 numbers players 1–6 by position (1 goaltender, 2 right defence, … 6 left wing). **This corpus does not
use that**, because it is not how coaches speak. Instead:

| Inside | Means |
|---|---|
| **`G`** | goaltender / netminder |
| **`F1` `F2` `F3`** | the three forwards |
| **`D1` `D2`** | the two defence |
| **`C`** | a **centre** — see the collision note below |
| **`A1` `A2`** | attackers, where the section counts them |
| **`W` `W1` `W2`** | wingers |
| *(empty)* | a new player or position |

**The label is the vocabulary the surrounding section uses**, which is the whole reason the numerals are
not: the corpus's most emphatic passage says *"F1, F2 and F3 are roles set by order of arrival and not
people"*, and a numeral would author the position assignment the prose refuses to make. Generic **`F`** and
**`D`** are permitted where a diagram genuinely does not distinguish individuals.

⚠️ **Bare numerals `1`–`6` must never label a player.** That is §21.1's position numbering — circled `1` is
its goaltender — so a bare digit reads as a claim the corpus does not make. This rule was broken once, by a
power-play diagram whose own caption said *"what is fixed is the spacing, not who plays which spot"*.

⚠️ **Two known collisions with key (A), both the owner's open call.** A circled **`C`** is (A)'s **coach**
and a circled **`A`** its **assistant**. The corpus uses `C` for a centre at 37 glyphs across `site/src/diagrams/*.mjs` (countable with `grep -rEo "id: *'C'"`) and reserves `A1`/`A2`
for attackers; bare `A` is not used. These are live only if a drill diagram is ever added — no diagram in the
corpus draws a coach or an assistant — and relabelling those centres would break the rule directly above. Decide
before drawing a drill, not after.

### Movement symbols come from the key, and two are commonly got wrong

| Symbol | Glyph |
|---|---|
| Forward skating | plain line, arrowhead |
| **Backward skating** | **a row of overlapping flattened arches standing on the line** — horizontal C-cuts, *not a wave, not a coil, and not C's opening sideways* |
| **Backward crossover** | **a zigzag** |
| Skate and stickhandle | a long, smooth **wave**, arrowhead |
| Shoot | double line, arrowhead |
| Pass | dashed line, arrowhead |
| Stop | two short slashes |
| Pivot | hooked arrow |
| Sudden stop | line ending in a perpendicular bar |
| Blocking (screening) | line ending in an open curve |
| Body check | line ending in a hook |
| Pylon | **`X`** — a cone, never a player |

**A smooth wave is *skate-and-stickhandle*, not backward skating.** Distinguishing the two by *wavelength*
is the HEO sheet's convention and is wrong under §21.1: backward skating is loops, and the zigzag is a
separate symbol for the backward crossover.

### The checks

- **A symbol's meaning is only ever as good as its source.** If a diagram uses a symbol, the key must define
  it. If the key does not, that is a finding — find a key that does, do not pick something reasonable.
- **One meaning per line style, corpus-wide.** A dashed line that means *pass* in one diagram and *backward
  skating* in another is worse than no convention.
- **Read the key's own wording.** It says *"skate and stickhandle"*, not *"carry"*. Renaming a symbol is how
  a shared notation quietly becomes a private one.
- **Check the picture against the prose beside it.** A diagram that contradicts its own section is the most
  common diagram defect, and neither `check_links.py` nor `check_facts.py` can see it.
- **Every diagram is checked against this section before it ships**, and `diagram-reviewer` checks it on every
  diagram round. Adding a diagram without that check is the failure this section exists to prevent.

## Sources

- **Prefer authoritative:** the NHL rulebook (see the working PDF link below), IIHF.com, USA Hockey, Hockey Canada, hockey-reference.com, and established coaching resources (The Coaches Site, Ice Hockey Systems, How To Hockey).
- **Cite the edition the corpus baselines on:** *NHL Official Rules 2025-2026*, *IIHF Official Rulebook 2025/26*, *USA Hockey 2025-29*. Do not cite a different edition — several documents drifted to 2023-24, 2024/25 and even a 2026/27 IIHF book, which made rule text unverifiable and in one case carried a superseded high-sticking definition.
- **Always research before writing.** Do not write from memory alone, especially on rules.
- **⚠️ The session-wide WebSearch quota (200 searches) is exhausted.** WebSearch calls will fail. Research using: (a) the **local rulebook files** listed above via grep — these are primary sources and cover every rules question; (b) **WebFetch on specific URLs** you already know or that are cited in sibling documents in this corpus; (c) reading sibling corpus documents, which carry sourced material and Sources sections you can build on. If you genuinely cannot verify a claim through any of these, **say so explicitly in the text** rather than asserting it or silently dropping the topic.
- Note that several coaching sites (USA Hockey, Ice Hockey Systems, OMHA, Minnesota Hockey, NHL.com) return 403 or empty to WebFetch. Don't burn time retrying them.
- **Note the retrieval date** — use 27 July 2026 unless you retrieve something later.
- Group sources by category when there are more than a few.
- Cite the rulebook for rules claims, not a blog summarising the rulebook, wherever you can.

---

## Length

Match depth to the topic. Roughly 200–400 lines for a substantial systems or technique document; 100–250 for a narrower one. Don't pad, and don't skip detail for brevity — the podcast prompt explicitly asks for comprehensive coverage.

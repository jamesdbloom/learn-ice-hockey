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
- **After your own icing:** play stops and there is a defensive-zone faceoff. The offending team **cannot change lines** and **cannot use a time-out** — under the **NHL** (81.4, 87.1) **and under the IIHF** (81.4, 87.1). ⚠️ **Their wording is NOT identical on 81.4, and the difference reaches the reader:** IIHF 81.4 lists a **fourth** substitution exception the NHL lacks — *"a Player with a broken skate"*. **87.1 does match.**

  ⚠️ **And this bullet is now wrong a THIRD time, in a third direction — it states the fourth exception as settled, and the same IIHF book contradicts it.** The IIHF writes the post-icing substitution ban **twice**: **81.4** (icing-specific) lists four exceptions including the broken skate; **82.1** — triggered by *"➔ Rule 63.8 – Delaying the Game **or** ➔ Rule 81 – Icing"* — states the same ban and lists **only the NHL's three**. Both verified in the 2025/26 v1.1 and 2026/27 editions. **Neither rule says which governs.** So *"a British player may be substituted after his own icing for a broken skate"* is a conclusion the book does not license, and this guide was asserting it more confidently than the corpus it governs.

  ⚠️ **The best evidence found so far points AWAY from a genuine contradiction, and it is not in the rulebook.** IIHF **Situation Handbook 81.8** answers a substitution question with a **joint citation — *"Rule 81.4 and Rule 82.1"*** — identical in v1.1 and 2026/27. The IIHF's own interpretive document treats the two as **one combined authority**, not as competing copies, which is what a *lex specialis* reading would predict. **It still does not say whether a broken skate is an exception**, so the honest position is that the two lists differ and the sport has not published which controls. **Write it that way; do not resolve it in either direction.** The EIHA/IHUK In-House books were searched for Rule 81/82 substitution material and contain **none**, so nothing amends the IIHF position for a British reader. *(This line asserted the two were identical until round 52, which added eight broken-skate mentions across the corpus while the guide still said the opposite — a governing document contradicting the corpus it governs.)* **USA Hockey is the outlier**: Rule 624 carries no substitution restriction and Rule 636(f) no icing condition, so neither is blocked.

  **⚠️ This bullet has now been wrong twice, in opposite directions, and both errors reached six documents.** It first stated the NHL position as universal. The correction then claimed IIHF 87.1 attaches no icing condition to time-outs — which is false; IIHF 87.1 reads *"No 'time-out' shall be granted to the defensive team following an icing…"*, the same sentence as the NHL. A British reader was told his own book punished icing more lightly than it does.

  **The lesson is about this list, not about icing.** Entries here are headed "do not contradict", so writers propagate them without checking, and a wrong entry travels further and faster than a wrong sentence in any single document. **Treat this list as a source that needs auditing, not as ground truth** — quote the rulebook when you rely on an entry, and if the quotation is not in front of you, go and get it.
- **The trapezoid** (goalkeeper's restricted area) applies in the **NHL** and in **IIHF play** — both read directly in the rulebooks, at NHL Rules 1.8 and 27.8 and IIHF Rules 1.8 and 27.7. ⚠️ **The KHL is commonly said to have one too, and that is UNVERIFIED here: no KHL rulebook exists in any form in `sources/`** — the only support held is the IIHF's own 2021 announcement of its unified rulebook, calling the restricted area a *"trapezoid familiar to NHL and KHL"*, **which is a governing body's aside rather than a KHL rule.** ⚠️ **And neither adoption date is in any book on disk.** `2005` returns **zero** in both NHL extractions, flattened and de-hyphenated — every four-digit year in that book was enumerated — and `2021` returns zero in both IIHF editions. The NHL book *does* date rules when it wants to (9.6, 9.7, 28.6), and it **does not date this one**; the IIHF's 2021-22 date comes from the announcement, not the rulebook. **Carry the hedge and the limit whenever you carry the claim.** Most rec, beer-league and youth associations do **not** use it.

  ⚠️ **This bullet is why the defect exists.** The table further down this file records *"The KHL plays a trapezoid"* spreading from **1 document and 5 sites to 16 documents and 28 sites**. Every site in `content/` that carries the claim now carries the hedge with it — ⚠️ **the invariant is what matters, and a bare count here would go stale the moment a document is edited, which is the failure this very file records elsewhere. Re-measure rather than quote: search `content/` flattened for `KHL` within a few hundred characters of `trapezoid`, and check each hit carries an unverified/no-KHL-rulebook hedge.** (Measured that way on 2026-08-31: every hit hedged, none bare. An earlier revision of this line asserted a flat total that could not be reproduced.) **And this bullet, four lines below the warning to treat this list as a source needing audit rather than ground truth, still stated it flat, with both dates asserted as fact.** The specification recorded the defect and committed it. **A writer working to spec reproduced it, and two spoken diagram captions are what that produced.** The goalie may only play the puck behind the goal line inside it; violation is a two-minute delay-of-game minor. **The sole exception is the goalie maintaining skate contact with the crease** — there is no teammate-based exception.

  **⚠️ Cite this correctly — the two rules give different dimensions and the corpus kept reproducing the stale one.** Use **Rule 1.8 for the dimensions** and **Rules 27.8 / 63.2(viii) for the penalty**. Rule 1.8 specifies the lines actually painted: seven feet outside each crease — **eight feet from each goal post** — widening to eleven feet from each post (**28 feet apart**) at the end boards. Rule 27.8 still reads "six feet from either goal post", which is wording left over from before the 2014-15 widening.

  **Be accurate about *why* 27.8 is wrong.** It is **stale, not self-contradictory** — an earlier version of this guide claimed the latter and the error propagated into three content documents. Six feet outside each post gives 18 feet at the goal line diverging to 28 feet at the boards: a perfectly coherent trapezoid, and exactly the pre-2014 shape. Rule 1.8's figures give 22 feet at the goal line diverging to the same 28 feet. Both are internally consistent; only one describes the lines currently painted. **Never cite 27.8 as a source of dimensions**, and where the geometry matters say that 27.8 describes the old trapezoid rather than that it contradicts itself.
- **Power play formations:** the **1-3-1** has exactly **one** player at the point (one point, two half-walls, one bumper between them, one net front). The **umbrella** has three high. The **overload** loads four onto one side. There is no bumper in a true umbrella.

  **⚠️ Personnel is not geometry, and this list is for geometry only.** *"Most first units use four forwards and one defenceman"* was carried in this bullet and is **not a verified fact** — it is an unsourced prevalence claim about what teams choose, and its presence in this list is why five documents restated it bare. Formation *shape* is definitional and belongs here. How many forwards a coach puts in that shape is a coaching choice: label it as such wherever it appears, or source it.
- **Penalty kill formations:** a **box** has **two** players high (both forwards) and two low (both defencemen) — it has no single "top". A **diamond** has a single apex, used against a 1-3-1 because a box leaves the bumper unmarked. **Wedge+1** is three killers in a tight triangle around the net plus a fourth outside it, the **"+1"**.

  **⚠️ This entry used to end "plus one puck-chaser", and that phrase is what propagated.** It named the +1's *behaviour* rather than the shape — and named it wrongly. [`special_teams.md`](../content/systems/special_teams.md) owns this formation and has it that the +1 **pressures whoever has the puck** and does **not** follow it around the perimeter — when the puck moves, the nearest wedge player steps out as the new +1 and the previous one drops in; a +1 who chases is listed there as the **counter** to the system, in the same block. One of the several sources that document cites for the wedge — [The Coaches Site](https://members.thecoachessite.com/article/explained-wedge-penalty-kill-formation), rendered body re-read 31 July 2026 — never uses "chase" at all: it calls the fourth player the **sweeper** or the **push-down player**. "Puck-chaser" was a corpus coinage with no source behind it, and because it sat *here*, under a heading reading "do not contradict", it was restated in `rink_map_and_glossary.md`, `positions/goaltender.md`, `positions/defender.md` and `how_to_watch_hockey.md` before anyone checked it. **Same lesson as the bullet above: behaviour is not geometry, and this list is for geometry only.**

  **⚠️ This entry also used to say the +1 works "straight outward from the net", and that is no longer what `special_teams.md` has** — it was corrected on 31 July 2026 and this line with it. That wording traces to [Sound Of Hockey](https://soundofhockey.com/2022/04/22/kraken-coach-dave-hakstols-scheme-and-philosophies-the-penalty-kill-part-8/), which has the +1 *"activates in a straight line from the goal toward the opposing player in possession of the puck"* — describing the **2021-22 Seattle Kraken specifically**, not the system. [Broad Street Hockey](https://www.broadstreethockey.com/post/philadelphia-flyers-nhl-penalty-kill-systems-analysis/) has the +1 roaming more freely, and [The Coaches Site](https://members.thecoachessite.com/article/explained-wedge-penalty-kill-formation) has him sweeping across the top of the zone. `special_teams.md` now carries all three as **a coaching choice, with an instruction to ask your coach**. One club's variant had been taught as the system in seven documents, in this entry, and in the site's `pk-wedge-plus-1` diagram caption. **Do not restate a route for the +1 here or anywhere else as though it were the formation.**

  **Do not sweep the word "chaser" out of the corpus, though.** `defensive_zone_coverage.md`'s **box+1** is a different system with a different "+1" — a fifth skater at even strength who genuinely *is* "the only one who chases the puck", with the role passing to whoever is nearest. That document owns that usage and it is correct. So is "dump-and-chase", and so is `special_teams.md`'s own section on the discipline **not** to chase. The defect was one coinage naming one role, not the word.
- **Faceoff ejections** are caused by moving before the drop, improper stick placement, or **encroachment by a teammate** — a winger creeping into the circle gets the *centre* thrown out. A second violation by the same team on the same draw is a bench minor. **Closing your hand on the puck is a minor penalty, not a faceoff violation.**

  **⚠️ Three USA Hockey divergences here, all of which change what a reader does.** (1) **613(a) reverses the stick-down order** — the *attacking* player places first at eight of nine spots, where NHL 76.4 has the *defending* player first; both books agree only at centre ice, where the visitor is first. This inverts the "advantage of going second" argument. (2) **613(d) makes a second violation an individual minor**, not a bench minor. (3) **USA Hockey grants no faceoff dot choice** (612(b), 624(a)) where NHL 76.2 / 81.2 and IIHF both do. ⚠️ **Under IIHF this changed on a season boundary, and the guide said the old thing.** In the **2025/26** book a violation was a **warning** rather than an ejection; in the **2026/27** book (Rules 76.3, 76.4, 76.6, 76.7) the centre is **replaced or ejected**, with a post-icing carve-out the older book did not have — and IHUK wrote the same into its own In-House Rules for 2026-27. A skate win **is** a violation in both. **Always name the edition when writing an IIHF consequence**: this bullet was correct when written, went stale when the book moved, and was found by an agent reading the guide against the corpus it governs — not by any checker.
- **Delayed offside and tag-up are classification-restricted under USA Hockey.** **Rule 630(d)** grants them only at Youth 15-Only and above, Girls 16U and above, High School and Adult. Below those levels the whistle is immediate — there is no tagging up. Note also that **tag-up requires only skate *contact* with the blue line** (NHL 83.3(i)), not both skates over it.
- **USA Hockey does have a goalkeeper's restricted area — do not write that it has none.** Three documents asserted that. **Rule 614(c)** restricts *freezing the puck* to the **"goalkeeper's privileged area"**, corners excluded, on the same two-minute penalty. It is not the NHL trapezoid and it governs freezing rather than playing, but "no restricted area at all" is false.
- **Charging stride thresholds differ by one stride between books.** USA Hockey says ***more than* two strides**; Hockey Canada **Rule 7.4** says ***two or more***; the NHL sets no stride count at all, judging charging on *"distance traveled"* (42.1). Do not conflate them, and do not attribute a stride number to the NHL. Note NHL 42.1 opens *"skates, **jumps into** or charges"*, so leaving your feet **is** itself part of the offence — USA Hockey 607 names *"leaving one's feet (jumping)"* directly.
- **Goaltender interference (Rule 69.1):** the rule's premise is that an attacker's position, *"whether inside or outside the crease, should not, by itself, determine whether a goal should be allowed or disallowed."* A goal is disallowed only if **(1)** an attacking player *"**either by his positioning or by contact**, impairs the goalkeeper's ability to move freely within his crease or defend his goal"*, or **(2)** the attacker initiates intentional or deliberate contact with the goalie, inside or outside the crease. Incidental contact **initiated outside the crease** is permitted *"provided the attacking player has made a reasonable effort to avoid such contact."*

  ⚠️ **THAT QUOTATION IS 69.1's AND IS CORRECT. Do not "fix" it to say *"unnecessary"*.** Rule 69 carries **two** near-identical sentences one word apart, and an agent has already conflated them and reported this line as a defect:

  | | wording | |
  |---|---|---|
  | **69.1** — contact initiated outside the crease | *"…a reasonable effort to avoid such **contact**."* | twice, plus 69.8 |
  | **69.4** — the goalkeeper *"in the act of playing the puck outside his goal crease"* | *"…a reasonable effort to avoid such **unnecessary** contact."* | once |

  **Rule 42.1 also carries the plain form.** Verified by locating each occurrence and reading the nearest preceding rule heading, in `nhl_rules_layout.txt`. ⚠️ **Check WHICH sentence a site is quoting before touching the word** — the corpus currently gets all ten of its occurrences right, and a sweep for either wording would break half of them.

  **⚠️ Do not write that screening is "entirely legal".** That overstatement propagated into 16 places across 12 documents before it was caught. Screening from **outside** the crease, without contact, is legal and valuable — but clause (1) means **positioning alone can void a goal** if it impairs the goalie's ability to move or defend, and Rule 69.3 separately disallows a goal where an attacker *"establishes a significant position within the goal crease, so as to obstruct the goalkeeper's vision and impair his ability to defend his goal."* Always attach the outside-the-crease qualifier to the legality claim itself.

  **⚠️ And attach the appendix, because both books answer 69.1's own fact pattern the other way.** **NHL Reference Table 14** and **IIHF Appendix IV Table 16** publish the situations, and on the outside-the-crease screen they are unambiguous. **Situation 5E** — an attacker who, in the NHL's wording, *"plants himself on the crease line or outside the goal crease, as to obstruct the goalkeeper's vision and impair his ability to defend his goal, and a goal is scored"* → **"Goal is allowed."** ⚠️ **The IIHF's row is the same situation in different pronouns** — *"plants themself… impair their ability to defend their goal"*. **This paragraph used to quote the IIHF's wording while attributing the row to both books**, which is the exact hazard the paragraph below it forbids, in the file that forbids it.

  ⚠️ **And "5C is the same answer for a screen in motion" was MISLEADING and has been corrected — motion is not the distinguishing factor, LOCATION is.** Read the two rows together: **5B** is *"well inside the crease… The attacking player remains in motion"* → **goal DISALLOWED**; **5C** is *"outside the crease… remains in motion"* → **goal ALLOWED**. **Both are in motion.** A reader who carries *"in motion is fine"* from 5C to 5B gets the opposite of the rule. Only 5B and 5D disallow, and **both put the attacker inside the crease** — that is the whole distinction. So the operative text of 69.1(I) carries no crease line and the appendix supplies one. Cite the table alongside the rule — but say it is an **appendix interpretation, not operative rule text**, because a table cannot repeal a rule, and ⚠️ **neither book says anywhere that its tables are interpretation rather than rule**, so that framing is a reading of where they are printed and must be labelled as one.

  ⚠️ **THE IIHF TABLE NUMBER IS NOT STABLE ACROSS EDITIONS, AND THE COLLISION RESOLVES.** Verified in both books on disk:

  | | Rule 69 situations | what the OTHER number holds |
  |---|---|---|
  | **IIHF 2025/26 v1.1** — the British layer | **Table 16** | Table 14 is **Rule 16, Minor Penalties** |
  | **IIHF 2026/27** | **Table 14** | Tables 15 and 16 are **Rule 84, Overtime** |
  | **NHL 2025-2026** | **Table 14** | — |

  **So a bare "IIHF Table 16" read against the 2026/27 book lands on Overtime, and a bare "Table 14" read against 2025/26 lands on minor penalties.** Both resolve to a real table about something else, which is the wrong-pointer species this guide records for Hockey Canada and USA Hockey — **now found in the IIHF's own tables, between two editions of the same book.** ⚠️ **Never cite an IIHF table number without its edition.** ⚠️ **The NHL never prints the string `5E` at all** — it prints the group heading and the row letter separately — and the IIHF prints `Situation 5 E`, **with a space**. A grep for `5E` finds neither.

  **⚠️ The same tables contradict 69.3 on the give-ground case, in both books.** NHL 69.3 says the attacker *"will receive a minor penalty"*; IIHF 69.3 writes *"the appropriate penalty"* and caps nothing. But **NHL Table 14 Situation 6D** and **IIHF Table 16 Situation 6D** — ⚠️ **cite the 6, because Table 14 has two D rows**: 5D is the screening case (*"plants himself within the goal crease"*) and 6D is the give-ground case, and the paragraph above points a reader at 5D — the identical fact pattern, *with a goal scored* — both read *"Goal is disallowed. **A minor penalty is not assessed (loss of goal only)**."* The severity divergence between the books bites at **every penalty-bearing row in Section 6 — 6B, 6E, 6F, 6G and 6H** — not at 6B alone. ⚠️ **And it is not a substantive split: it is a systematic editorial generalisation.** The IIHF replaced the NHL's *"minor penalty"* with *"the appropriate penalty"* across the whole table, and **kept "minor" at 7B**, which is the deliberate exception proving the rule. ⚠️ **NHL 6B is also not a mandatory minor** — its description column reads *"A possible penalty depends on the Referee's judgment as to the degree of contact and degree of resistance… and whether the goalkeeper was truly trying to establish a position."* **No source on disk settles which governs, and one that looked as though it might has now been read and cannot.** The **IIHF Situation Handbook** carries **six** worked situations under Rule 69 — not the *"No situation."* form it uses for Rule 43 — and Situations **69.1, 69.2 and 69.6** all pair a disallowed goal with **no penalty to the attacker**, which corroborates the appendix. **But its Foreword disqualifies it as a tiebreaker in terms:** *"in case of any contradictions, the valid IIHF Rulebook is always the basis."* And **Table 16 is Appendix IV of the Rulebook itself**, so the conflict is **rulebook-internal** and the one document that might have broken the tie has expressly ranked itself below the losing side. ⚠️ **Note also which book is the more internally consistent, because the obvious reading is backwards:** the **NHL's** conflict is flat — *"will receive a minor penalty"* against *"a minor penalty is not assessed"* — while the IIHF's *"the appropriate penalty"* can accommodate "none". **Report both; do not pick one.** And note what a major there is *not*: **Rule 69 appears in none of the IIHF's Reference Tables** — not Table 5, not Table 6, not Table 7 — and **Rule 20.4 attaches the automatic ejection to a second major, a second misconduct in the same game, or a major for one of the infractions those tables list.** So no automatic game misconduct attaches to a Rule 69 major on its own. ⚠️ **Do not flatten that to "it is not an ejection"** — a game misconduct can still arrive by another route, and a bare denial is a cap on a penalty tier stated more confidently than the evidence supports. Note also that **Table 5 is headed *"Summary of major penalties (without a game misconduct possible)"***, so absence from **that** table proves nothing either way; it is absence from all three that does the work.

⚠️ **A verification limit on every Table 16 row cited here, established 28 August 2026.** **Appendix IV Table 16 interleaves its two columns in BOTH the plain and the `-layout` extraction** — the left column is spliced into the middle of the right column's sentence — so `"loss of goal only"` returns **zero** against `sources/iihf_rules.txt` raw *and* whitespace-normalised. ⚠️ **What actually fails is any phrase that CROSSES A LINE WRAP** — `"A minor penalty is not assessed (loss of"` returns one hit, `"loss of goal only"` returns zero. **Read Table 16 with a line range, not a phrase grep:** `sed -n '9960,10055p' sources/iihf_rules.txt`. **Every row cited here — 6B, 6D, 6E, 6F, 6G, 6H and 7B — was read that way, and each is legible in the `-layout` columns.** ⚠️ **6D matches the NHL's Table 14 row only in its OPERATIVE SENTENCE** (*"Goal is disallowed. A minor penalty is not assessed (loss of goal only)."*), **not in the announcement wording** — the NHL says *"interference with the goalkeeper"*, the IIHF *"Interference on the Goalkeeper"*. **Do not quote one book's announcement as the other's.** *(An earlier draft said these rows could not be verified by grep at all and sent the reader to a browser. `source-verifier` refuted it: they are on disk and legible. That error made the corpus look LESS evidenced than it is, which is its own kind of defect.)* See [`sources/README.md`](../sources/README.md).

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
| Junior ages | U19/U16/U14/U12/U10 by birth year, **unisex**. ⚠️ **The birth-year bands shift every season — U19 was 2007–2009 for 2025-26 and is 2008–2010 for 2026-27.** Never state a band without its season; `uk_rules.md` owns the table | USA Hockey / Hockey Canada bandings |

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

**✅ The USA Hockey Casebook IS now on disk — round 52, 28 August 2026.** 476pp,
`sources/usah_casebook.txt`, fetched by `scripts/fetch_sources.sh` and listed in
the README table, so the next agent inherits it. ⚠️ **The history below is kept
because it is the provenance story and because the instruction it ends with is
the one that finally got followed** — but read it as history, not as status.

⚠️ **Two things to know before citing it.** Its own *"Rule Reference 630(d.3)"*
in Situations 40 and 41 names a sub-clause that **does not exist** in the printed
rule — the book's error, recorded rather than repaired. And it is **not** merely
confirmatory: Rule 630 Situation 41 writes the NHL's delayed-offside own-goal
exception **out**, settling a question three documents had called unresolved.

**⚠️ [HISTORY — superseded] The USA Hockey Casebook is *not* on disk, and never
has been in this directory.** An earlier version of this list named a `usah_case.txt` of 18,376
lines, in a session scratchpad that no longer exists; `fetch_sources.sh` does not
retrieve it, and the situations the corpus cites from it — for Rules 605, 624
and 630 — appear in no file in `sources/`. (`usah.txt` *does* carry five
Situations, at lines 6602-6652, but they belong to the Blind Hockey One Pass
rule in the Disabled Hockey section of the **Playing Rules**, not to the
separate Casebook volume. The first draft of this paragraph said `sources/`
held no USA Hockey Situation at all, which one `grep` falsifies — written
into the very block correcting a governing document for being wrong.)

~~Anything the corpus says about a USA Hockey casebook situation is therefore
**unverifiable from this repository** and must carry that limit.~~ **[SUPERSEDED
28 August 2026 — it is verifiable now.]** ⚠️ **Consequence to chase:** any
document still carrying the old *"not held here and was not searched"* limit is
now stating something untrue about this repository. Round 52 narrowed ten such
disclosures; **`rules_primer.md` and `shooting.md` are named here as carrying it
and must be re-checked.**

*(The instruction that used to end this paragraph — "If you fetch it, add it to
`fetch_sources.sh` and the README table so the next agent inherits it rather than
rediscovering this" — is what was finally acted on, after `commit-gate` pointed
out the corpus had begun citing a book that lived only in a session scratchpad.)*

> ⚠️ **STOP — eight of the ten source files named in this section (the next paragraph names eight of them; two more follow below) are NOT on disk.** Re-verified 2026-08-31: of
> `tulsky.txt`, `berg.txt`, `hockeyscan.txt`, `ibc.txt`, `huh.txt`, `bvhs.txt`, `bnq.html`, `csa.pdf`,
> `goalie.pdf` and `pass.txt`, **`ibc.txt` and `huh.txt` are present** — the latter also as
> `huh_layout.txt`. The other eight are absent. [`sources/README.md`](../sources/README.md) is the
> authoritative inventory and is correct; this list is not.
>
> ⚠️ **This block was itself stale and said so about others.** It read *"only `ibc.txt` is present"*,
> verified 2026-08-28, and `huh.txt` had been fetched since. **A reviewer following it would have
> concluded the Heads Up Hockey material was uncheckable here** — and on 2026-08-31 an agent needed
> exactly that file to establish that the corpus had a spinal-injury mechanism stated backwards. It
> read the file anyway, because it checked disk rather than this list. **That is the only reason the
> defect was found.**
>
> **So the rule this block teaches applies to the block.** A hand-maintained inventory of what is
> absent goes stale in the one direction that causes harm: **it never notices an arrival.** Check
> `ls sources/` and [`sources/README.md`](../sources/README.md), not this paragraph.
>
> **Why this is worse than a stale path list.** The section below tells you to search the working directory
> *before* declaring something unfindable. A writer following that instruction for a goaltending claim finds
> nothing — **and may read the absence as confirmation that no source exists.** There is no goaltending
> material in `sources/` at all, so that absence means only that the file is missing. It is evidence of
> nothing about hockey.
>
> The descriptions are kept below because they are accurate about the documents themselves and would have to
> be rediscovered if any is re-fetched. **They are a record of what these files are, not a claim that they are
> here.** Found by the round-52 prevalence pass, which hit exactly this trap.

Other extracted sources in the same directory, worth knowing about before you declare something unfindable: `tulsky.txt` (zone-entry study), `berg.txt` / `hockeyscan.txt` (Berg et al. 2025 on scanning), `ibc.txt` (Introduction To Body Contact), `huh.txt` (Heads Up Hockey), `bvhs.txt` (goaltending manual), `bnq.html`, `csa.pdf`.

**⚠️ Two files in there are not what their names suggest. Check contents before citing from a filename.**

- **`goalie.pdf` is not a goaltending manual.** It is Beaudoin & Swartz, *Strategies for Pulling the Goalie in Hockey* — an MCMC simulation paper about when to pull the goalie, with nothing on technique. For goaltending technique use `bvhs.txt`.
- **`pass.txt` is narrower than "the USA Hockey playbook" suggests.** It is a single 92-line article — *Coaches' Playbook: Passing the Puck*, by John Hamre of the US National Team Development Program, in *American Hockey*, USA Hockey's own magazine. `passing_and_receiving.md` cites it correctly and it is a legitimate source for passing mechanics. But it is one article by one named coach, not a comprehensive governing-body playbook, and it contains **nothing** on goaltending, verbal calls, or systems. Do not reach for it outside passing technique.

**⚠️ `goalie.pdf` is not a goaltending manual — but do not dismiss it either.** It is Beaudoin & Swartz, *Strategies for Pulling the Goalie in Hockey* — an MCMC simulation paper about when to pull the goalie, with nothing on technique. For goaltending technique use `bvhs.txt`. Check what a file actually contains before citing it from its name.

⚠️ **`nhl_rules.txt` and `hc.txt` are plain `pdftotext`; `nhl_rules_layout.txt` and `hc_layout.txt` sit beside them.** Plain silently **joins hyphenated line breaks** (`face-off` → `faceoff`; 88 corrupted word-instances across the two books), so **a negative grep for a hyphenated term against the plain file is a FALSE ABSENCE**. `-layout` is the authority for **wording**; plain is the authority for **sentence contiguity** inside two-column tables and glossaries. **Check both before you believe any negative.** See [`sources/README.md`](../sources/README.md).

**Verify every rules claim by grepping these files**, e.g.:

```bash
grep -n "^27.8" nhl_rules.txt          # find a rule by number
grep -n -A20 "^81.1 Icing" nhl_rules.txt   # read the full text
grep -ni "restricted area" iihf_rules.txt   # search by phrase
```

Note the extraction contains each rule twice (the PDF has a table-of-contents pass and a body pass) — read the longer occurrence.

**⚠️ An extraction is a rendering, not the document — and the paragraph above has just told you to
grep one.** There are three ways the text on disk lies to a search, all measured across rounds 52
and 53, and every one of them breaks **negative** claims rather than positive ones. That matters
here more than anywhere: the corpus rests **417 book-scoped "this book writes no such provision" assertions**
(inventoried round 52, 34 of 37 documents) on exactly this kind of search.

1. **Plain `pdftotext` silently joins hyphenated line breaks.** `face-off` comes out `faceoff` —
   **88 corrupted word-instances across `nhl_rules.txt` and `hc.txt`, zero survivals.** A negative
   grep for a hyphenated term against a plain extraction is a **false absence**; and the same
   artefact makes twelve corpus quotations that are verbatim correct against the book return zero
   hits, which reads as fabrication.
2. **`-layout` interleaves two-column tables**, so a left-column sentence stops being contiguous —
   **eleven quotations are greppable in plain and not in `-layout`.** `-layout` is the authority
   for **wording**; plain is the authority for **sentence contiguity**. Neither is "better".
3. **Some tables interleave under both**, because the interleaving is in the PDF's own text
   ordering rather than in the flag. The IIHF's **Appendix IV Table 16** splices the left column
   into the middle of the right column's sentence, so `"loss of goal only"` returns **zero**
   against `iihf_rules.txt` raw *and* whitespace-normalised, while
   `"A minor penalty is not assessed (loss of"` returns **one**. **What fails is any phrase
   crossing a line wrap.**
4. **Page furniture is injected INTO the middle of a sentence.** Found 29 August 2026 in IIHF
   Rule 10.4, and it is the nastiest of the four because it defeats every technique above.
   The sentence reads, flattened: *"A goalkeeper may participate in the play using a skater's
   stick until such time as they are legally* **`03`** *provided with a replacement goalkeeper's
   stick.* **`SECTION · EQUIPMENT`** *For an infraction…"* — a page number and a running header
   spliced mid-clause at a page break. ⚠️ **Plain grep fails, `-layout` grep fails, and a
   `sed` line window fails too** — the paragraph sits across the break, so a window sized to the
   rule misses it and the text *appears absent altogether*. A **whitespace-flattened read with a
   wide window** recovers that one.

   ⚠️ **But flattening is not a general rescue, and assuming it was is an error this guide made
   for several hours.** In the USA Hockey Casebook's Standard of Play Situation 2 the running
   header sits **inside the sentence**: *"…at any time provided* `Standard of Play` *they do not
   impede their progress… and is* `CASEBOOK` *considered a good defensive play."* A flattened
   search for `"A player may lift the opponent"` **hits**; a flattened search for
   `"and is considered a good defensive play"` returns **nothing**. **Flattening removes line
   breaks; it cannot remove words that were never a line break.** Where the splice is a header
   rather than a wrap, **only reading the window recovers the sentence** — so a negative that has
   survived flattening near a page boundary is still not a negative.

   ⚠️ **The same form feeds desync Python from every shell tool.** `pdftotext` emits `\f` at page
   boundaries (**228 in `iihf_rules_v1.1.txt`**), and Python's `splitlines()` treats `\f` as a line
   terminator while `grep -n`, `sed`, `awk` and `split('\n')` do not. **Rule 81.4 is at line 6673 by
   `sed` and 6810 by `splitlines()` — a 137-line offset, drifting to 227 by end of file.** A script
   slicing a rule by line range therefore **reads a different rule and reports on it confidently**;
   this cost an agent three silently-wrong diffs. **Use `split('\n')`, never `splitlines()`.** See
   [`sources/README.md`](../sources/README.md).

   ⚠️ **This one cost three readers in a row, in two different directions.** A `safety-reviewer`
   re-extracted the book, saw the sentence stop at *"must receive their stick from"*, and reported
   Rule 10.4 truncated — **but correctly refused to weaken the corpus claim on the strength of it**
   and referred it out instead, which is the behaviour non-negotiable 3 exists to produce. The
   dispatching agent then read the canonical file with too short a window, concluded the paragraph
   was **missing entirely**, and was one step from recording that the corpus asserted a false
   four-book equivalence. **The corpus's claim was correct the whole time and no edit was
   warranted.** ⚠️ **Two readers reaching opposite wrong conclusions about intact text is the
   signature of this mode.** Treat "the passage is not there" near a page boundary as unproven
   until a flattened read has looked.

### A truncated view manufactures findings, and it did so three times in one round

⚠️ **This is a separate failure from the four extraction modes above, and it is more
dangerous, because nothing is wrong with the file.** The book is intact, the extraction is
faithful, and the *reader's window* is too small. What comes back is not garbled — it is
**absent**, which reads as evidence.

Three instances in round 53, in three different tools, by three different agents:

| The view | What it returned | What was true |
|---|---|---|
| `grep \| cut -c1-240` on a Common Mistakes line | *"grabbing a face mask"* and nothing else → "the body does not support this" | The body carried USAH 622(b)/(c), 404(b), IIHF 75.2(II), HC 7.1 and *"assume you have no floor."* **No defect.** |
| A search for `0.48` in a fetched abstract | zero hits → "the figure is not on the page" | The page writes **`.48`**. The figure is plainly there. |
| `sed -n` windowed to a rule number | the paragraph absent → "the extraction is truncated / the corpus asserts a false equivalence" | The paragraph is intact across a page break. **The corpus was right.** |
| `awk` from a rule heading to the next rule number, on IIHF 82.1 | no exception list → "82.1 does not state the ban; the contradiction the corpus reports is fabricated" | The ban and its three exceptions sit **several paragraphs down, past a `TABLE OF CONTENTS` and a running header spliced mid-rule**. **The contradiction is real.** |

⚠️ **The fourth happened after this section was written, and was committed by the agent that wrote
it.** Knowing the mode, having documented it, and having just told other agents to watch for it did
**not** prevent reading a windowed rule and drafting a refutation off the absence. It was caught only
by printing the whole rule block before sending — one step short of filing a verbatim-quoted
refutation of a true finding, **which is the most credible kind of wrong.** ⚠️ **So the rule is not
"be careful with windows." It is mechanical: near a page boundary, print the whole block. Do not
size a window to the thing you are looking for** — the boundary you would need to know about is the
one the window is hiding.

Two of the first three were **caught by their own authors on a re-read**; the third was caught
only because a second agent re-derived it. **None was caught by a checker, and none would
have been** — every one of them produced a clean, confident, well-evidenced *negative*.

**So:**

- **Read the whole line before you believe a finding.** Never `cut` a line you are about to
  draw a conclusion from. Widen and re-read instead — the cost is one command.
- **Grep the distinctive words, never the normalised number.** `0.48` and `.48` are the same
  figure and different strings; so are `10-15%` and `10–15%`, and `63.2(ii)` and `63.2 (ii)`.
  A number that fails to match is **a prompt to read the sentence**, not a refutation.
- **A window sized to the thing you are looking for cannot tell you the thing is missing** —
  it can only tell you it is not *there*. Widen until you can see the boundaries.
- ⚠️ **On a diff, `grep -E "^[+-]"` silently drops every changed list item.** Markdown bullets
  begin `- `, so in a diff they render as `-- ` and `+- ` — and the common idiom
  `grep -E "^[+-][^+-]"`, written to skip the `---`/`+++` headers, skips the bullets with them.
  An agent using it concluded that two of six changed sites were uncommitted, caught it on a
  re-run, and named it: *"the truncated-view mode, in a tool the style guide does not list."*
  **Exclude the headers by name — `grep -vE "^(diff|index|---|\+\+\+|@@)"` — rather than by
  shape.** The character that marks a diff line is also the character that marks a list item.
- ⚠️ **Treat every negative you produce as provisional until you have looked a second way.**
  The asymmetry is the point: a false positive gets refuted by the next reader, a false
  negative gets **written into the corpus as a disclosure** and then protected by
  non-negotiable 4.

So, four operative rules:

- **Flatten the book to one whitespace-normalised line before you believe any negative, and check
  the sibling extraction** — `nhl_rules_layout.txt` and `hc_layout.txt` sit beside the plain files
  for this reason. A negative that has survived neither is a claim about the rendering, not about
  the book. ⚠️ **And surviving both is still not enough where the phrase could sit in a two-column
  table** — that is the third case above, and neither flag helps there. ⚠️ **And a flattened read
  needs a WIDE window near a page break**, because case four splices a page number and a running
  header into the sentence itself: a match anchored on the words either side of the splice returns
  nothing while the text is present and intact.
- **Where an extraction interleaves, read a line range and reconstruct the row by eye** —
  `sed -n '9960,10055p' sources/iihf_rules.txt` prints Table 16 in full. A human can read
  interleaved columns; `grep` cannot.
- **Never "correct" a corpus quotation on the strength of a zero-hit search.** An agent was
  dispatched to do exactly that — the NHL's `face-off` against the extraction's `faceoff`, at five
  content documents — and **refused, proving the extraction wrong rather than the corpus.** Making
  those five edits would have written a fabrication into five documents. It found the artefact only
  because one line was 77 characters where the rest of the paragraph wrapped at 60–71, and said so:
  *"had it fallen mid-paragraph instead of at a wrap boundary, I would have confirmed it and
  corrupted five files."*

[`sources/README.md`](../sources/README.md) owns the measurements above, the per-file extraction
flags and the `DUAL_EXTRACT` list, and is the authoritative inventory. Read it before you rest
anything — positive or negative — on a search of `sources/`.

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
  sections. **`Rule:` facts do not count against that 8-fact coaching cap — but they DO count against the 11-fact total below** — a cap must never
  evict a rulebook fact, so the cap governs how much *coaching* content a block
  holds. No block may exceed 11 facts in total.

  ⚠️ **The 3-fact floor is not an absolute, and a corpus-wide count is what showed it.**
  **51 blocks sit below three coaching facts and three have none at all** (measured across all
  791 blocks, 29 August 2026): `body_contact_and_battles.md`'s *"What actually gets called"*
  (11 of 11 `Rule:`), `zone_entries.md`'s *"The four clauses the technique rests on"* (7 of 7)
  and `faceoffs.md`'s *"What gets your centre thrown out of the dot"* (7 of 7). Eleven of those
  blocks were then read in full, and the reading found the floor **wrong as a blanket rule**:
  some sections genuinely are rulebook exposition, and their coaching sibling is the section
  next door. *"The four clauses the technique rests on"* states what makes the trail-skate drag
  legal; *"The trail-skate drag"*, immediately below it, carries the `Technique:`, `Action:` and
  `Key:` facts. *"What actually gets called"* runs the same way against *"The habits that keep
  you out of the box"*. **A block on a section like that may be all `Rule:`, and padding it to
  reach the floor would break [extract, never author](#extract-never-author) — which outranks
  the floor.**

  ⚠️ **That is not a blanket exemption, and this is the half that matters: three of the first
  four blocks read under it had coaching sitting in the section's own prose that had never
  reached the block.** The exemption is for a section with **no** imperatives, not for one whose
  imperatives were squeezed out. So **list the imperatives in the section's body first**, then
  decide:

  - **None in the body** — the all-`Rule:` block is honest. Leave it, and do not invent a fact
    to fill it.
  - **Some in the body** — they belong in the block. That is extraction, not authoring.
  - **Some in the body and the block already at 11** — **split the section, on the seam the body
    already uses, not on rule-set lines.** A split by book leaves both halves all-`Rule:`:
    round 52 split one that way and *"relieved the wrong thing"*, leaving 11 facts and a single
    coaching fact behind it.

  **The 11-fact hard cap is not the thing to relax.** Every block that reached it in that review
  was a section doing two jobs, and the cap is what said so.
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
  this corpus — its §8 glossary is linked from 20 documents — and general rink vocabulary is defined there
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

## ⚠️ When the honest document is the outlier, a consistency sweep corrects the wrong one

**Four times in one round, the document that carried the qualification was in the minority, and the
others stated the claim bare.**

| Claim | Honest | Bare |
|---|---|---|
| The KHL plays a trapezoid | **1 document, 5 sites** — *"unverified here: no KHL rulebook was available to check it against"* | **16 documents, 28 sites**, several of them `Rule:` facts |
| *"One defenceman is always above the puck"* | 4 documents had *"somebody"* / *"at least one player"* | **the named owner** had *"one defenceman"* |

⚠️ **A reviewer comparing documents for internal consistency would have "corrected" the honest one
both times** — it is the odd one out, and it is longer. **Majority is not evidence.** The number of
documents asserting something is a fact about propagation, never about truth: in this corpus a claim
repeated sixteen times and checked zero times is the *expected* shape, because propagation is cheap
and verification is not.

**So when documents disagree about how confident to be, the question is never "which reading is more
common." It is "which one has the source."** Resolve toward the evidence, and if the evidence is
absent, resolve toward the disclosure — non-negotiable 4 protects it and non-negotiable 3 forbids
deleting the claim it qualifies.

**The other two, both found late and both in the same file:** its headline causal claim was stated
**flat in eight places** while the same document hedged **twelve** comparable rankings — and a
*borrower* carried the hedge; and its framing of the underlying error was corrected by a borrower
that already said *"both going is not always the error."*

### The census this suggests — and why the obvious implementation does not work

The check is: **for every owned claim, does any borrower state it more carefully than the owner?**
It is mechanical and cheap, and it would have caught all four before anyone was dispatched.

⚠️ **The naive implementation was run and is not usable as a gate.** Every 6-word shingle appearing
in ≥2 documents, classified by whether a hedge marker sits within ±320 characters: **21,733 shared
phrases, 432 "hedged here, bare there"** — and most are **shared boilerplate**, not shared claims
(*"USA Hockey Official Rules and Casebook"*, *"find out which one your team plays"*), where the
"hedge" is an unrelated disclosure that happens to be nearby. **A phrase shared between documents is
not a claim shared between documents, and shingles cannot tell them apart.**

**It is still worth keeping as a worklist**, because real claims do surface in it — but it needs a
**claim-extraction step**, not a phrase match. ⚠️ **And it must never be swept**: ranking these and
then offering to fix them is exactly how round 44 manufactured a divergence that did not exist.

⚠️ **And note which direction each defect ran, because they are opposites.** The KHL case is a
**disclosure that failed to propagate**. The above-the-puck case is an **owner whose own form was
wrong while its borrowers were right** — the ownership rule satisfied backwards, qualifications
flowing *toward* the owner instead of from it. **Check the owner against its borrowers, not only the
borrowers against the owner.**

## What may go in a Sources trailer, and what may not

The site renders the Sources block as `<details class="sources">` **with no `open` attribute**. A
reader who never clicks the triangle never sees a word of it. **22 lines across 14 documents carry a
⚠️ inside one.**

> **A Sources trailer may warn you about how to read a source. It may not warn you about what
> happens on the ice.**
>
> **Operational test.** Strip the citation apparatus and read what remains. If the residue is a
> proposition of the form *"doing X is a penalty"*, *"X is permitted"*, or *"this applies only at
> level Y"*, it is **body content** — put it in the body, in that section's facts block, and in
> Common Mistakes if it changes a decision made under pressure. If the residue is *"this rule number
> is ambiguous"*, *"this quotation belongs to document A not document B"*, *"only these rules were
> read"*, or *"this edition superseded that one"*, it is **bibliographic** and belongs where it is.

⚠️ **The decisive question is what a reader who never opens the triangle believes.**
**Provenance notes fail safe** — not reading one leaves you with a correctly-stated rule of unknown
vintage. **Scope notes and penalty notes fail unsafe** — not reading one leaves you confident about
a rule that does not apply to you, or unaware of a penalty you are about to take. ⚠️ **Anything in
the second class is a collapsed safety caveat and is a critical, not a formatting preference.**

**Worst offenders found, ranked by hazard** — each read, not pattern-matched:

1. **USA Hockey 640(b)'s *"(except Adult Male Classifications)"* scope, beside 602(a)'s match penalty
   for *"recklessly endangers or attempts to injure"*** — in three documents. **A classification
   restriction on a checking rule, and a match penalty, inside a bibliography.**
2. **The four cumulative conditions for a legally finished check**, ending *"It is not acceptable to
   skate one or two more strides after…"*, self-labelled *"a reading of its grammar, not something
   the passage states."* The operative legality test for a hit — **plus its honest disclosure** — in
   the trailer.
3. ***"A hand closed on a puck that is in the crease is the penalty shot or optional minor"*** — in
   **three** documents. Zero bibliographic residue.
4. **USA Hockey 639(a)'s poke-check Note and the Casebook's limit on it** — determines whether a
   stick between the legs is a trip. ⚠️ **A mixed case:** *"which lives in the Casebook rather than
   the playing rules"* is legitimately bibliographic; **the substance it introduces is not.** Split
   them rather than moving the whole line.
5. **Rule 8.5's goaltender-interference carve-out**, under which a teammate's goal *"WILL BE
   ALLOWED"* — the difference between a disallowed goal and an allowed one.

⚠️ **Named explicitly so a fix pass does not overcorrect — these are correctly bibliographic and
must stay:** the *"Rule 6.11(b) carries two separate i./ii. lists, so '6.11(b)(ii)' names two
different rules"* citation-resolution note; *"Cite the 6: Table 14 has two D rows"*; the attribution
corrections (*"that sentence is the Declaration's and the Glossary's, not the Standard of Play's"*);
and every `Edition note` / `In-House note` / `Verification note`. **They fail safe.**

**One collision this rule does not resolve, flagged rather than decided:** two of those correctly-
bibliographic notes narrate the project's own history inside `content/` — *"This document said 'no
window at all' under USA Hockey until August 2026"*. **That is non-negotiable 6 colliding with
non-negotiable 4**, and the disclosure is real. Not a removal candidate without a decision.

⚠️ **The census behind this is known-incomplete, and its blind spot is the same defect twice.** It
caught only markers on lines whose paragraph *begins* with an enumerated trailer prefix. **A
safety-relevant qualification written into a Sources paragraph WITHOUT a ⚠️ glyph is invisible to
it** — and the callout-colour defect below proves authors were not consistent about typing one.

## Callout colour is decided by a glyph, not by content

`site/src/plugins/remark-corpus.mjs` types callouts on `WARNING_RE = /^\s*(⚠|❗|🚫)/u`. **The panel
colour therefore records whether the author typed an emoji, not how dangerous the content is.**

⚠️ **On `body_contact_and_battles.md`, the corpus's highest-hazard document, that produced an
inverted hierarchy.** Enumerating every blockquote: **four penalty statements rendered green** —
including *"everything below is a penalty, and it is not capped at a minor"* and *"blade on the ice
does not mean it cannot be a cross-check. That is NOT the rule"* — **while the amber panels were the
British age question and a caveat about a statistic.** A reader scanning for what will get them
thrown out reads the amber panels.

**The fix is per-blockquote and must not be swept: if every callout is amber, none is.** Informational
and data blockquotes are correctly green and stay green.

## ⚠️ In a `Never:` value, an em dash may introduce a REASON but never an INSTRUCTION

**The single most dangerous sentence shape this corpus has found.** `md_to_speech.py` renders
`Never:` as **"Never —"** — deliberately, so the negation reaches the verb. ⚠️ **That correct fix
creates a trap: a second em dash in the same value is prosodically identical to the first**, so a
listener who has just learned that *"Never —"* governs the clause after a dash carries it across the
second one.

**The instruction inverts.** Measured from the rendered SSML, not reasoned about:

| Rendered | What a listener can hear |
|---|---|
| *"Never — Play on if you are hurt — **stay down and let play be stopped**."* | ⚠️ **never stay down and let play be stopped** — said of a hurt player |
| *"Never — Take that contact with your back to the boards — **skates parallel to the wall, forearm and hip**."* | **never get your skates parallel** — i.e. take it head-first |
| *"Never — Put a leg behind an opponent — **keep your leg in front of you**."* | **never keep your leg in front** — the slew-foot mechanism |

**The rule:**

> **In a `Never:`, `Priority:` or `Risk:` value, an em dash may introduce a REASON. It may not
> introduce an INSTRUCTION. An instruction takes a full stop and the word *"instead"*.**

**Both conventions already exist in the corpus** — 25 facts values carry an internal sentence break
and 8 `Never:` values use *"instead"* — **so this invents nothing and costs about eight characters.**
The repaired form:

> `Never: Take a check with your back to the boards. Get your skates parallel to the wall instead and
> take it on your forearm and hip, head up, chin off your chest`

⚠️ **Two censuses, two definitions, and neither is "the" number.** A coordinator scan of the
*Markdown* counted **45 values across 21 documents**. An agent's scan of the *rendered SSML*,
requiring a lower-case verb after the dash, counted **59 across 22** before its repairs. **Its own
verdict: *"Treat the two figures as two measurements with different definitions, not as a
correction, and do not quote either without its method."*** ⚠️ **Quote the method or quote neither.** Most are
penalty-critical rather than injury-critical — inverting *"— take the puck, take the ice, or angle
them off it"* removes the legal alternative to a hit from behind — but the shape is the same
everywhere. **Fix the injury-bearing ones on sight; the rest are a worklist, not a sweep.**

⚠️ **AND NOT ONLY THE FACTS LAYER. The defect is in PROSE too.** A Common Mistakes bullet —
**outside any facts fence** — rendered as ***"Never — go behind the net."*** Voiced standalone, that
instructs the reader to do the thing the corpus most repeatedly says not to do. **Every sweep brief
written before that discovery was scoped to ` ```facts ` and could not have found it.** The agent that
did: *"I found it only by grepping the emitted SSML for `Never —`, which does not distinguish the
layers."*

⚠️ **So sweep the RENDERED DOCUMENT, not the Markdown, and not one layer of it.** Body prose, Common
Mistakes, Key Takeaways and facts blocks alike.

⚠️ **Repairs have now been needed under TEN labels** — `Never:`, `Action:`, `Priority:`, `Mindset:`,
`Key:`, `Convention:`, `Risk:`, `Read:`, `Technique:`, `Position:` and `Rule:` — **and in unlabelled
prose.** ⚠️ **Two inverted the corpus's own HEDGES** (*"not a measurement — treat any claim as an
impression"*), so **the honest-disclosure layer is inside this defect's blast radius too.**

⚠️ **And the find rate is the argument for reading rather than grepping.** Predicted 9, found **33**.
Predicted 11, found **26**. ⚠️ **The agent that found 26: *"my first heuristic scan missed one on the
verb 'aim', and my second missed nothing only because I read all 172 printed tails by eye."***

⚠️ **Grep the SHAPE, not the label.** Two instances sat under `Technique:` with the negation **inside
the value** (*"…and never your back to the boards — get your skates parallel…"*), which a `Never:`
grep never reaches. **Two more were in Common Mistakes and Key Takeaways**, which no facts grep
reaches at all.

⚠️ **And one inverted a CROSS-REFERENCE.** *"Never — Move a player who has gone down… — that is the
spinal-injury section above"* reads as ***"never see the spinal-injury section above"*** — a pointer
away from the only spinal-injury treatment in the corpus, attached to the fact that tells you not to
move a downed player. ⚠️ ***"Instead"* is nonsensical for a cross-reference**; the repair is to make
the clause **declarative**, so there is no imperative left to invert.

⚠️ **Two of the boards-posture instances additionally drop *"chin off your chest"***, which is the
cervical-spine half and the component the walking-speed finding attaches to. **Check for a missing
component whenever you repair one of these**, because the same compression produced both.

**And note how it was found: by running the renderer and READING THE OUTPUT.** No checker sees it,
no reading of the Markdown suggests it, and the author who wrote `_label_lead` could not have
predicted it. **`md_to_speech.py --only <doc>` is a review instrument, not just a build step.**

## ⚠️ The em dash is one of THREE shapes, and the other two have no dash at all

The `Never:`-plus-em-dash inversion is the shape everyone finds first. Two more were
measured after it, and each defeats the scanner built for the one before.

**1 · Em-dash inversion.** `_label_lead` renders `Never:` as `"Never — "`, so a *second* em
dash is prosodically identical; the negation carries across it and the instruction after it
inverts.

**2 · Post-dash imperative, NO NEGATION ANYWHERE.** A label, a context clause, a dash, and a
bare imperative **naming the hazardous act**:

```
Risk: The middle is the most expensive place to lose the puck — turn and survey there …
Rule: Blocking a shot is protected — drop to your knees and have the puck shot under you …
```

The second sat in a block whose **next fact** said *"close and on your feet"* — two
consecutive standalone paragraphs contradicting each other, riskier one first. No
negation-filtered scan can see either.

**3 · Post-label imperative, NO DASH ANYWHERE.**

```
Rule: Play the puck first and trip him in the process and it is a minor, not a penalty shot
Risk: Go early or slide past the lane and you are on the ice and out of the play
```

Voiced, the first is *"Rule. Play the puck first and trip him in the process…"* — **an
instruction to trip an opponent.**

⚠️ **`_label_lead` special-cases `Never`.** It renders `"Never — "`, not `"Never. "`, so
**shape 3 does not fire on `Never:` facts at all** — the label's own dash governs what
follows, which is the whole reason `Never:` works. It fires on every other label: `Risk:`,
`Rule:`, `Action:`, `Read:`, `Technique:`, `Goal:`, `Priority:`, `Convention:`.

**Two things must BOTH hold before repairing shapes 2 or 3**: the clause is an imperative,
**and the act it names is the hazardous or wrong one.** A post-label imperative naming the
*desirable* act is correct and common — `Risk: Win three straight draws to the same
defenceman and the fourth will be jumped` was read and left on exactly that ground.

**The repair is the DECLARATIVE**, traceable to a body sentence in the fact's own section. A
declarative cannot be heard as an instruction at all, which is a stronger guarantee than a
full stop. Where a rulebook is the source, its own frame is already declarative and is the
right one to take.

### And the finder that beats all three shapes is not a shape

Extract every non-`Rule:` facts value carrying **hazard vocabulary, regardless of
punctuation**, and read them. That found:

```
Technique: Face the wall with the puck below your body and your back to the ice
```

— an instruction to put your back to the play at the boards, with the counterweight present
in the body and absent from the block. **No dash of any kind.** A vocabulary list is still a
list, and its own users recorded the limit: *"a hazardous imperative phrased entirely in
stick-and-puck words, or one about equipment, fatigue or concussion, would not have been
caught."*

---

## ⚠️ How a grep lies about a source — every one of these produced a false absence

A false absence is how a negative existence claim gets written. **Every entry below was
observed here; none is hypothetical.**

⚠️ **No count is given, and none should be added.** This heading read *"Four ways"* and this
line read *"All four were observed"* while the list stood at **seven** — the list grew and the
number did not, in the document that teaches numbers go stale away from their owner. **A count
in a heading is a second copy of the list, and the copy is what rots.**

1. **Hyphenation joins across line breaks.** Plain `pdftotext` output splits words at the
   margin.
2. **Form feeds.** Python `splitlines()` splits on them and `sed` does not, so the two
   disagree about the same file by over a hundred lines. Use `split('\n')`.
3. **A citation form that never appears contiguously.** `624(b)(1)` returns **zero** hits in
   USA Hockey's text: the book prints `Rule 624` as a heading, `(b)` on its own indented line
   seventeen lines later, and `(1)` under that. **The citation is a reconstruction of the
   book's structure.** Verify the quoted *text*, not the citation string.
4. **`grep -o` with a wide context window on a flattened single-line file returns ZERO for
   text that is present.** Python `re.finditer` over the same file finds it immediately.
5. **Hard-wrapped prose in `content/` itself.** A sentence as it reads spans two lines, so a
   census run against the sentence finds nothing while a census run against half of it finds
   every instance.
6. **An appendix that interleaves two columns**, so a search string spans description-column
   text. `loss of goal only` returns zero because the row reads `A minor penalty is not
   assessed (loss of` … description text … `goal only)`. **This one produced a recorded finding
   that was wrong** — the table was declared unverifiable by grep in any extraction, and it is
   not.
7. **Mid-line hyphenation with a following space**, from PDF justification: the IIHF book prints
   *"the defending team may **coun- ter** and hold its position"*. ⚠️ **A de-hyphenation regex
   matching only `-\n` does not repair this** — collapse `- ` as well. The NHL twin of the same
   sentence has *"may counter"* intact, so a cross-book comparison hides it too.

8. ⚠️ **A `.txt` that looks substantial and contains none of the document.** This is the one that
   cost the most. **CRT6** — the concussion recognition tool the corpus quotes — is a two-page PDF
   whose **content pages are images**. `pdftotext` yields **1,535 bytes**, which looks like a real
   extraction; it is the **BMJ stamp and page furniture only**. `grep -ci "helmet"` on it returns
   **0**, and so does every other content word.

   **Two agents and a coordinator concluded from that zero that no source stated the instruction**,
   and one nearly wrote *"no primary source located for this corpus states it"* into a safety
   passage. **The instruction is in the document**, in the *"Remember"* box: *"Do not remove helmet
   (if present) or other equipment."* It was found by rendering the pages with `pdftoppm` and
   **reading them by eye**.

   ⚠️ **Distinguish this from a 30-byte stub, which announces itself.** A 1,535-byte file does not.
   ⚠️ **And it is NOT a scan** — CRT6 is an InDesign-produced PDF with a **real text layer**, which is
   why `pdffonts` shows embedded fonts and looks reassuring. **The text layer simply holds none of
   the document's words.** A repair that called it *"a scanned image with no extractable text
   layer"* was wrong on both halves and had to be corrected — **the misdescription is the same shape
   as the false negative it explains.**

   **The test that works: the ratio of extracted bytes to page count.** A two-page document
   yielding under ~2 KB is furniture. ⚠️ **And check BOTH extraction modes** — `pdftotext -layout`
   gives 1,535 bytes here and plain `pdftotext` gives 505; **two different misleading answers from
   one file, by the two commands this project routinely uses.** Then render it and read it.

9. ⚠️ **A running head injected MID-SENTENCE — and it SURVIVES FLATTENING.** `pdftotext` drops
   page furniture inline, so a holding in the USA Hockey Casebook reads *"an attacking player was
   illegally **CASEBOOK** in the crease"* — the words `Playing Rules` and `CASEBOOK` spliced
   between subject and verb. **A whole-sentence grep returns zero for text that is present**, and a
   second holding in the same rule is split by a full furniture block.

   ⚠️ **THE STANDARD REMEDY DOES NOT WORK ON THIS ONE, and that was discovered the hard way.**
   Everywhere else this guide says to build a de-hyphenated, form-feed-stripped,
   **whitespace-flattened** copy before asserting an absence. **Flattening cannot help here**, because
   the injected running head is a **word, not whitespace**. Verified in `sources/usah.txt:1629`,
   USA Hockey Rule 204(a):

   ```
   lineup on the ice or changing players, the Referee shall warn            Teams
   the offending team.
   ```

   Flattened, that reads *"the Referee shall warn **Teams** the offending team."* Measured on the
   flattened file: the true sentence returns **0** hits and the corrupted one returns **1**. **So a
   verifier who did everything this guide tells them to do would still have reported a verbatim
   corpus quotation as fabricated.**

   **What actually survives it is reading a LINE RANGE.** Find the rule's heading, then
   `sed -n 'START,ENDp'` and read. **Do not search a passage you have not located; locate it, then
   read it.** The Casebook finding came from an agent that read all seventeen situations line by
   line instead of searching them.

10. ⚠️ **The file you grepped may not contain the book.** `sources/heo_intl_drill_symbols.txt`
   is **30 bytes** — the title and nothing else, because the PDF is a scan. A grep for a player
   symbol in it returns zero, and the symbol is on the page. Worse, a book can be **registered
   and absent**: `carha.txt` had a row in `sources/README.md` *and* in `scripts/fetch_sources.sh`
   while no such file existed on disk. **Registration is not existence, and existence is not
   content.** `wc -c` the extraction before you trust an absence in it.

   ⚠️ **That `carha.txt` example is HISTORICAL — the file is now on disk, 206 KB, and it matters.**
   Marked because the trap runs both ways and the second way bit on 2026-08-31: a census read this
   paragraph and reported the style guide as still recording CARHA absent. It does not — this is the
   only mention of the file in the guide, and it is past tense. **But the same census then found two
   criticals that only `carha.txt` could settle**: `shooting.md` told readers *"the only
   governing-body ban [on slap shots] is USA Hockey's, in Blind Hockey"* when **CARHA Rule 79(a)
   bans it outright, minor escalating to major on injury** — a rule `rules_primer.md` already
   quotes verbatim. **So a book can also be present, extracted, cited by one document, and
   unconsulted by the document that most needed it.** Neither the README nor this guide can tell you
   that; only opening the file can.

**Flatten and de-hyphenate before asserting any absence**, and attack a negative **by
concept, not by phrase** — a confident phrase-census once missed the book with the strongest
version of a rule because it worded the remedy differently.

---

## Rulebook evidence and injury evidence are different claims — never merge them

A rulebook declining to grade an offence by force tells you **what gets penalised**. Injury
literature tells you **what hurts**. They support different sentences and the corpus must not
present one as the other.

The case that established it: *"No speed is slow enough to make either safe"* was attached to
**both** limbs of the boards prohibition. Measured —

- **The ducking limb is confirmed at full strength.** *"A player doesn't have to be going at
  full speed for this to happen — it can occur at walking speed"*, and the source ties it to
  the ducking rule in the very next sentence.
- **The turned-back limb is not.** The strongest text available is *"even a light hit from
  behind **could inflict** a severe head or neck injury"* — a **possibility** claim, which
  cannot carry a **universal** one. And both passages instruct the **checker**, not the
  player who turns.

⚠️ **The corrective direction is toward PRECISION, never toward weakening.** A reader who
concludes *"so a slow hit from behind is fine"* is the failure that matters. Both
prohibitions stay absolute; what changes is which evidence is attached to which. And note the
listener risk in writing it: **two clauses of differing strength can be heard as the weaker
one granting permission.**

---

## ⚠️ TWO LAYERS ARE NEVER VOICED AT ALL — measured, and it changes what "disclosed" means

`scripts/md_to_speech.py:426` sets `DROP_SECTION_HEADINGS = ("notes on verification",)`, and the
**Sources trailer is dropped as well.** Measured by rendering the whole corpus and searching the
emitted SSML: `Rulebooks:`, `Rules (primary)`, `read on 29 August` and `link baseline` appear in
**zero** spoken characters out of roughly five million. **All 37 documents carry a Sources trailer.
None of it is voiced.** On the site it renders as a **closed `<details>`** as well.

⚠️ **So a qualification parked in either layer is PAGE-ONLY BY CONSTRUCTION.** For a listener it does
not exist; for a reader it is behind a disclosure triangle.

**That is not a defect in itself** — a bibliography belongs there. **The defect is a substantive
LIMIT ON A CLAIM that lives only there**: the body states something flatly, and the only thing
qualifying it sits where nobody hears it.

⚠️ **This changes how "we disclosed it" should be read.** One finding was described as *"adequate on
the page and inadequate read aloud"*; measured, it is stronger — **the qualifier does not exist in
audio at all.** Three sites in one document dated a rule change with the limit only in *Notes on
verification*, and one was a **`Rule:`-labelled fact** carrying a citation that does not support the
date.

**When you write a limit, put it in a voiced layer.** Sources may repeat it. Sources may not be the
only place it lives.

---

## ⚠️ Diagram captions are VOICED, and no grep over `content/` can see them

**A caption is read aloud.** It lives in `site/src/diagrams/<document>.mjs`, not in the markdown —
so **every corpus-wide census you run over `content/` sees a clean corpus whether the captions are
clean or not.** Six such censuses ran in one round while this layer went unexamined.

⚠️ **The characteristic caption defect is a qualification the PROSE keeps and the caption sheds.**
Measured across all 112:

- A rule-set claim stated **flat** in two captions while **all ten** prose sites carried the same
  hedge verbatim — *"no KHL rulebook was available to check it against."* The captions were the only
  sites that shed it.
- **Two qualifications dropped in one sentence** — a strength-state scope and an *"among the"* hedge
  — in the one document that carries that scope as its own facts line.
- An unsourced superlative in a caption's **opening clause**, the first thing voiced.
- A statistic stated bare that its owner scopes to a three-year five-on-five sample.

⚠️ **And a caption can be wrong about the picture it captions.** One said two defencemen were
*"about 100 feet apart"*; the rink's owner says blue line to blue line is **50 ft**, the diagram's
coordinates are 50 units apart, and the picture draws **36**.

**Three rules follow.**

1. ⚠️ **When you repair a claim in prose, grep `site/src/diagrams/` for it too.** Three caption
   defects in one round were found only because someone rendered audio for an unrelated reason, and
   one played a retracted superlative **immediately before the corrected prose**.
2. ⚠️ **If a caption agrees with its prose and both are wrong, the PROSE owns it.** Fixing the
   caption alone manufactures caption/prose drift — the defect this rule exists to prevent.
3. ⚠️ **`site/src/data/diagrams.json` is GENERATED and TRACKED.** `build-diagrams.mjs` writes it.
   **Editing it does nothing: the next build silently reverts you, and `git diff` shows your change
   right up until it vanishes.** That happened. **Edit the `.mjs`, rebuild, then confirm the change
   survived into the JSON.**

## What is actually voiced alone — measured, not assumed

**The corpus's central premise is that text is heard "standalone, with no surrounding context."**
That is true of some layers and **not** of others, and until 29 August 2026 nobody had run the
renderer to find out which. **Measured** by running `md_to_speech.py` over a real document and
reading the SSML:

| Layer | How it is voiced | Standalone? |
|---|---|---|
| A ` ```facts ` line | its **own `<p>`**, introduced by *"The key facts for this section."*, with a **300 ms break** either side | ⚠️ **YES** |
| A section heading | its own `<p>` with a 450–1000 ms break | **YES** |
| A **bold numbered principle** (`**3. Never both defencemen on the puck.**`) | **merged into its paragraph** — *"three. Never both defencemen on the puck… One defenceman engages, the other stays home."* | **NO** |
| **A body LIST ITEM** — a `-` bullet or a numbered step | its **own `<p>`**, with a break between items, exactly like a facts line | ⚠️ **YES** |
| A **blockquote** paragraph | its own `<p>` | **YES** |
| Body prose | one `<p>` per paragraph | per paragraph |

⚠️ **So the "read aloud alone" argument is exactly right for facts lines and headings, and wrong for
a bold numbered lead-in.** A listener hears a numbered principle **and its qualification in the same
breath group**, so a principle stated flat and walked back in the next sentence is not the
read-aloud hazard it looks like on the page.

⚠️ **This was established as a coordinator handover, and it downgraded a finding.** A reviewer
raised a flat principle heading as a **Major** on the stated premise that *"headings are what
`md_to_speech.py` reads aloud as standalone units"* — and said plainly it had **not opened the
script or run it**. Running it made the finding a **Minor**. **The repair was still right**, on two
grounds the reviewer had not used: it makes the heading agree with its own facts block, and on the
rendered site a bold lead-in is a **visual scanning target**, read by a skimmer with nothing around
it even though a listener hears it in context.

⚠️ **The list-item row is a late addition, and its absence cost real work.** `md_to_speech.py`
emits one `<p>` per list item, so **a bullet is voiced as alone as a facts line is** — but the table
did not say so, and two rounds of anaphor work were scoped to chunk openings on the strength of it.
`goaltender.md`'s bullets *"It gives away the top of the net" / "It is worse the smaller you are" /
"It removes save selection"* were repaired as chunk-openers **and were not chunk-opening** — they sat
at lines 13/15/17 of one chunk with their antecedent in the same chunk. **They still needed the
repair, because a list item is its own `<p>`.** The brief was wrong about why and right about what.

⚠️ **POSITION IN A CHUNK IS IRRELEVANT for a facts value or a list item.** A chunk boundary is a
function of character budget and moves on the next edit; the 300 ms break around a bullet does not.
**Do not scope an audio review to chunk openings** — two independent agents, working different
halves of the corpus, ended their reports declaring that same hole.

⚠️ **And a pronoun list is the CEILING of an anaphor method, not the floor.** *"Two riders in the
same rule are worth knowing"*, *"The same is true against you"*, *"The second exception…"*,
*"Its Note 1 defines…"* are each as unmoored as a bare *"It"* and match no pronoun at all. **Read the
unit and ask whether it identifies what it is about.** Conversely `Neither X nor Y` and `Both X and
Y` are self-contained coordinations, and a sentence that **defines its own referent in the same
breath** is fine — **four sweeps over the pronoun pattern this round would have damaged correct
text.**

**Use this table before arguing severity from the audio.** *(A single linear track: one document
renders to ~60 chunks with an `index.json` recording billed characters. There is no separate
key-facts track — the facts blocks are inline, which is why their 300 ms isolation matters.)*

⚠️ **A CHUNK IS NOT A FILE, and the two greps that settle it are these.**
`site/src/components/AudioPlayer.astro` sets `const src = ${AUDIO_BASE}/${id}.mp3` and plays it
from a single `<audio>` element: **one file per document, no playlist, no per-chunk player.**
`md_to_speech.py`'s docstring says chunking exists to fit **Polly's per-request limits**, with a
manifest so the pipeline can **concatenate**. So a chunk boundary is a **seam inside one
continuous file** — the listener hears the next value after the ordinary 300 ms break, like any
other. **No argument may rest on a listener "never reaching the next file"; there is no next
file.** (Nor can a section split move a boundary on purpose: only a `##` heading opens a chunk,
never a `###` — everything else is size-driven packing.)

⚠️ **This paragraph exists because the row above was not enough.** A tool,
`scripts/check_chunk_tails.py`, was designed, built and dispatched against on the belief that a
chunk-terminal value's qualification "opened the next file" — **after** the row above had been
written from two independent agents' findings, and by the person who was working from it. The
defects it surfaced were real; the reason given for them was not. **Wrong about why, right about
what** — for the third time in this guide, which is why the fact is now stated as two file paths
rather than as a principle.

## When the rulebook itself contains a typo

Printed rulebooks contain errors. **The rows below record the ones found so far, in four different
books.** ⚠️ **No count is given, deliberately.** A count here went stale the same day it was written:
it said *"five"*, a row was widened to cover a systematic offset spanning more than a dozen bad
citations, a sixth row was added, and the figure was wrong twice within one session — **once by the
same author who had just corrected it.** The table is its own count. **Read it, do not quote a
number out of it.**

| Book | Rule | What it prints | Should read |
|---|---|---|---|
| NHL | **76.7** | *"When a least two face-off violations…"* | "at least" |
| USA Hockey | **618(a)¶3** | *"prevents and obvious and imminent goal"* | "an obvious" |
| IIHF | **76.7** | *"When two (2) "face-off" violations" have been committed…"* | a stray unmatched closing quote after *violations* |
| Hockey Canada | **6.7(d)(iii)** | *"as per **Rule 6.18 – Time of Game**"* | **Rule 6.17** is Time of Game. **Rule 6.18 is Goaltender Safety**, tagged `NEW` in this edition — a cross-reference left behind by the renumbering |
| Hockey Canada | **the Interpretation under Rule 9.1** | *"…would not count towards a player's three stick infractions for the purpose of a Game Ejection penalty under **Rule 4.8 (a)** – Game Ejection & Game Misconduct Penalties"* | **4.8(a) is the GAME MISCONDUCT clause.** The three-stick-infraction Game Ejection is **4.8(b)(i)** |
| USA Hockey | **the whole reference apparatus, both volumes** | *"**610(h)** Continued improper line change during stoppages"*, and the same shift throughout | **Rule 610 runs (a)–(g). There is no 610(h).** The provision is **610(g)** |

The first three are the books', not extraction artefacts — each confirmed against two independent
extractions, and the NHL's additionally against a 600-dpi render of the printed page.

⚠️ **The Hockey Canada one is a different and more dangerous species: a WRONG POINTER, not a
misspelling.** A misspelling is self-evident; a stale cross-reference **resolves successfully to the
wrong rule.** A reader chasing 6.7(d)(iii) lands on *Goaltender Safety* and can only conclude that
the corpus, which correctly cites **6.17(e)** for the 30-second time-out, has the number wrong.

⚠️ **The USA Hockey one is the same species, and its scope was under-recorded here until it was
re-measured.** This row previously read *"USA Hockey Casebook | signal index"*, which is wrong twice
over: the shift is **not confined to the signal index**, and it is **not confined to the Casebook**.
The Casebook cites `610(h)` at **ten separate Rule References**, uses `610(g)` to mean body-lettered
`610(f)`, and **the Summary of Penalties in the Playing Rules volume itself** uses `610(e)` for body
`610(d)`. From **(d) onward the reference layer is one letter ahead of the rule text, in both
volumes** — verified by reading Rule 610 letter-by-letter in each. So this is not a typo in an index;
it is a systematic offset, and a citation anywhere in that apparatus resolves to the wrong clause or
to none.

**Cite the body lettering.** Where a document quotes a Casebook situation, name the Casebook's own
number as the Casebook's — *"printed there as 610(h)"* — rather than silently correcting it, so a
reader holding the book can find the page.

⚠️ **The second Hockey Canada row is the most dangerous shape in this table, and it is worth
understanding why.** The citation *resolves* — 4.8(a) exists — and it carries **the whole rule's
title**, *"Game Ejection & Game Misconduct Penalties"*, so it reads correct at a glance. But 4.8(a)
is the **Game Misconduct** clause, and a reader who follows it concludes the Game Ejection **is** a
Game Misconduct. **Rule 4.8's own Note 1 says it is not:** *"A Game Ejection is not equal to a Game
Misconduct penalty and a player receiving a Game Ejection penalty does not trigger any automatic
suspension."* So the wrong pointer does not merely waste a lookup — **it inverts whether the reader
believes they are suspended for the next game.**

⚠️ **Verified twice before this row was written**, and the first attempt was wrong: the same
extraction carries *"Interpretation 1 Rule 4.8 (a)"* as a heading, which **is not an error** — that
interpretation covers an officiating failure to remove a player and reaches Game Misconducts and
Game Ejections alike, so it is correctly filed. **A table of other books' errors must not acquire one
of its own**, and a report naming the wrong instance was one paste away from putting it here.
⚠️ **So the corpus is right and the book that appears to contradict it is the thing in error** —
which is the exact reverse of the assumption a verification pass runs on. **Cite 6.17(e). Do not
"correct" it to 6.18, and say why if the discrepancy is likely to be re-found.**

⚠️ **This was found as a coordinator handover, not by a check.** An agent noticed the two numbers
disagreed across documents it did not own, **declined to adjudicate because it had read 6.7(d) but
not 6.17 or 6.18**, and flagged it as a lead rather than a finding. **That refusal is what made it
resolvable** — a guess either way would have had a 50% chance of writing the book's own error into
the corpus.

⚠️ **Note that the NHL's and the IIHF's are the same rule number and a different error.** The two
books' 76.7 say materially the same thing and are typo'd differently — so *"match the sibling
book's wording"* is not available here, and a sweep that harmonised them would fabricate a
quotation **in whichever direction it swept.** This was nearly done: an agent sent to apply the
NHL 76.7 rule to a document discovered the citation was **IIHF** 76.7, and that carrying the NHL's
wording across would have manufactured the error rather than repaired it.

**Quoting such a sentence "correctly" is a fabricated quotation.** It is the one case where
fixing the grammar is the defect.

Three handlings, in order of preference:

1. **Paraphrase, and cite the rule number.** Where the corpus needs the rule's *content* and not
   its wording, do not quote the sentence at all. State the rule plainly, cite it, use no
   quotation marks. Zero fabrication risk and nothing for a listener to trip over. This is the
   default. `special_teams.md` does it for NHL 76.7.
2. **Quote a different rule that says the same thing cleanly** — but then attribute the quotation
   to *that rule alone*. Never cite the quoted words against the typo'd rule number as well.
3. **Quote verbatim with `[sic]`**, where the exact wording is the point — the owning document, a
   disputed passage, or a cross-book divergence. Place `[sic]` immediately after the erroneous
   word, and follow the quotation with a plain sentence saying what the book meant. ⚠️ **Prime
   the listener before the quotation opens** (*"quoted here exactly as printed, dropped word and
   all"*): `md_to_speech.py` voices `[sic]` as *", as printed in the original,"*, so an
   unannounced one lands mid-sentence on a listener who has no context.

**What a sweep must never do:**

- **Never "correct" a quotation on the strength of its grammar.** A rulebook quotation that reads
  as a typo is presumed the book's until the printed page has been checked. Silently repairing it
  manufactures a fabrication in a document whose whole claim is verbatim accuracy.
- **Never remove or relocate a `[sic]`.** It is the marker that stops the next sweep, and
  `md_to_speech.py` carries a regression test pinning the one instance in the corpus.
- **Never attach a quotation to a second rule number because that rule "says the same thing."**
  Substantively equivalent is not verbally identical, and a reader who greps the cited rule finds
  different words.

*The failure this prevents, and it is live:* the corpus quotes *"has prevented an obvious and
imminent goal"* from **USA Hockey 614(b)**, which prints it correctly. Several documents cite
**618(a)** against those same words. **618(a) is a different sentence and prints *"prevents and
obvious and imminent goal"*.** A reader who checks 618(a) finds the quotation is not there —
which reads as invention rather than as the book's error. ⚠️ **Note how this was found: an agent
sent to reconcile three inconsistent typo treatments discovered the third was not a typo
treatment at all.** The brief's load-bearing premise was wrong, and refuting it turned a
style question into a misattribution defect.

**A sixth, found at the fourth gate pass.** Hockey Canada Rule 6.9(c) prints
***"In Minor of Female divisions"*** — *of* for *or*. A brief relayed it silently repaired as
*"Minor **or** Female"*, and the agent that checked it against the book **paraphrased rather
than quoting**, so the corpus neither reproduces the book's error nor silently corrects it, and
recorded the slip as a citation-resolution note in its Sources block.

⚠️ **That is the handling to copy.** Quoting it propagates a typo; fixing it inside quotation
marks is a fabricated quotation. **Paraphrase, and say why in Sources.**

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

**Foundation:** `rink_map_and_glossary.md` · `rules_primer.md` · `on_ice_communication.md` · `uk_rules.md`

**Positions:** `positions/center.md` · `positions/defender.md` · `positions/winger.md` · `positions/goaltender.md` · `switching_positions.md` *(root, not `positions/`)*

**Systems:** `breakouts.md` · `forechecking_systems.md` · `neutral_zone_systems.md` · `defensive_zone_coverage.md` · `offensive_zone_play.md` · `zone_entries.md` · `special_teams.md` · `game_management.md`

**Technique:** `skating.md` · `puck_handling.md` · `passing_and_receiving.md` · `shooting.md` · `body_contact_and_battles.md`

**Hockey IQ:** `puck_support_and_spacing.md` · `time_and_space.md` · `scanning_and_anticipation.md` · `risk_management.md` · `playing_without_the_puck.md`

**Situational:** `defending_the_rush.md` · `faceoffs.md`

**Off-ice:** `equipment.md` · `conditioning_and_recovery.md` · `mental_game.md` · `practice_and_development.md` · `team_play_and_culture.md` · `how_to_watch_hockey.md`

**Reading diagrams:** `reading_ice_hockey_diagrams.md`

Link only to documents on this list. Assume every one of them exists.

---

### ⚠️ Fold a limit into the same SENTENCE as its permission, not the next paragraph

A repair that adds a rule's **limit** as a **new paragraph** after its permission can put an
**audio file boundary** between them. The renderer chunks on sentence ends, so a paragraph break
is a legal place to split; a listener then receives the permission as the last thing they hear
and the limit opens a file they may never play.

⚠️ **This happened while FIXING exactly this class.** `shooting.md` carried Rule 69.7's rebound
permission without its push-in limit. The repair added the limit as a following paragraph — and
the render put the permission at the end of one chunk and the limit at the top of the next.
**The fix created the defect it was closing.**

**The remedy is mechanical: put the limit in the same sentence.** The chunker cannot split inside
a sentence, so permission and limit travel together whatever else moves around them.

⚠️ **And no gate sees this.** `scripts/check_chunk_tails.py` scans the ` ```facts ` layer by
default because that layer is voiced alone; **body prose needs `--prose`**, which is off by
default because every chunk ends in prose somewhere and the output is a reading list rather than
a finding list. **Run `--prose` after any repair that adds a paragraph to a rule passage**, and
compare against the run before it — the number moving is the signal, not the number itself.

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
| Shift length **by position** | `positions/defender.md` | **2025-26: 49.3 s for defencemen against 47.6 s for forwards** — about a second and a half. A corpus computation from the NHL's time-on-ice report: total ice time ÷ total shifts, all situations, **every skater who took a shift** (325 D, 615 F). **Not a published figure.** ⚠️ **Three computations of NHL shift length exist in this corpus and none is a correction of another** — restate one only with the population *and* the estimator it was made with. `defender.md` on 2024-25 gives **48.7 s D / 47.4 s F**; `conditioning_and_recovery.md` runs the same season and the same report with a **41-plus-games filter** and a different estimator (per-skater `timeOnIcePerShift`, averaged) and gets **48.8 s D / 47.1 s F** — the gaps run in **opposite directions by position**, which no single mechanism explains, so the documents assert no cause; and `playing_without_the_puck.md` gives **mean 47 s, median 45 s** from 8,325 shifts across an **11-game convenience sample** via the shift-chart API, a **different endpoint** from the other two. `how_to_watch_hockey.md` reconciles that third one |
| Share of the game spent off the puck | `playing_without_the_puck.md` | Use that document's figure and its stated basis; do not round it differently elsewhere |
| Zone-entry values | `zone_entries.md` | Tulsky et al., MIT Sloan 2013, data 2011-12: 0.53–0.62 **unblocked shot attempts** per carry-in vs 0.22–0.28 per dump-in, **at 5-on-5**, **across the full 330-game sample** — they are Fenwick events, shots on goal plus misses, and the owner's body says in terms *"do not compare 0.53–0.62 shots per carry-in against a shots-on-goal rate"*, so both qualifications travel with the number; net values +0.42 carry attempt vs +0.12 dump-and-chase **from the Washington sample only** — the two tables have different populations and the scope travels with the number |
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

## ⚠️ Extract-never-author and verify-in-primary-text pull against each other

**"A fact must trace to a sentence in its own section"** stops a fact being invented. **"Verify
every rule claim in the primary text"** stops a rule being wrong. When the **body itself is
wrong**, the first rule tells you to propagate the error and the second tells you not to.

**This is not hypothetical.** A `goaltender.md` bullet asserted that on a goalkeeper freezing
the puck outside the crease, *"the IIHF book says so in terms… **the NHL leaves that to be
inferred**."* The NHL says it in terms — it is the second sentence of Rule 63.2(i): *"With
regard to a goalkeeper, this rule applies outside of his goal crease area."*

The agent's own account is the rule:

> *"It surfaced only because I grepped the NHL book to verify a rule I was about to extract. **If
> I had trusted the body, as extract-never-author tells me to, I would have propagated the error
> INTO the block.** Extract-never-author and rules-verification pull against each other, and this
> round the body lost."*

**The resolution, in order:**

1. **Verify the rule in primary text first.**
2. **If the body is wrong, fix the body.**
3. **Then extract.**

**Extract-never-author governs what a fact may say that its section does not. It does not
license extracting something false.** A body sentence is evidence of what the document
believes, never evidence of what the rulebook says.

⚠️ **And the corollary for reviewers: a clean traceability pass proves nothing about
correctness.** It cannot detect a section that never contained the exception, or one that
contained it wrongly. Both layers can agree and both be wrong.

---

## A repair is new text, and new text has not been reviewed

**Across rounds 52 and 53 one defect shape was found again and again, by search method after
search method — and nearly every instance had been created by the repair for the previous one.**
The shape was a two-part rule stated in its true half. The sweeps kept seeding the next instance:
three of the units at the last confirmed site had been written by the pass that closed the one
before it, and one of them refuted itself inside a single sentence.

⚠️ **No count is given here, and none should be written.** The owners are round 52's record and
round 53's, and the plan holds a further candidate **deliberately open** rather than counted —
so any total stated here is stale the moment that row moves. This sentence has carried a wrong
figure twice, in the file that defines the rule against carrying one.

A search can only run against text that already exists. The repair you are writing does not exist
yet, which is why the two rules below are worth more than another search.

### Re-read your own edits before you finish

**Before you finish, re-read your own edits and ask whether any of them states one half of a
two-part rule.** If one does, fix it before you ship it — and **say in your report that you caught
it**, because a self-catch is evidence about the method and the next round needs it.

**Agents caught themselves this way repeatedly across rounds 52 and 53**, every one of them while
repairing an earlier instance. ⚠️ **No total is given here on purpose.** The owners are round 52's
record and round 53's §*"Agents that caught themselves"*; a count copied out of them goes stale the
moment either is extended, and this sentence carried a wrong one — *"ten"* — into the file that
defines D8, in the round whose own plan row said to reconcile it first. One found **five** in its own draft before finishing, including a
sentence that stated the goalie's limb of a rule and left the goaltender's own exposure out. Another
found a defect at six sites in its own first draft. A third caught a paragraph lead that contradicted
a clause it had just added below it.

⚠️ **Do not over-claim this — the plan row that commissioned this section did, and `commit-gate`
judged it unsupported.** It said the self-check *"out-performed every search"*, and the measurement
does not support that — and neither does any figure, including the ones written here to correct
it. ⚠️ **This paragraph has now carried three different totals for one measurement**, and
`commit-gate` blocked the commit twice over them.

**The reason no total is right is worth more than any of them.** The plan holds a further
instance as a **deliberately open candidate**, not a counted one — so a confirmed total and a
total-including-candidates differ by one, permanently, and every figure written here is wrong
against one of them. **Read the owning records; do not restate a number from this file.**
**The defensible claim is the better one.** A search is retrospective — it runs over text already
written, already committed, already reviewed at least once. The self-check is **prospective**: it
runs in the window between writing a sentence and shipping it, over text no search has seen yet.
The mechanical checkers are prospective too — `check_absolutes.py` blocked two agents' own drafts
mid-round in round 52 — but **none of them can see a missing half.** This is the only prospective
check that reads for meaning, which is why it belongs in the specification and not in a brief.

### "Match the existing correct treatment" is not a safe instruction

A brief that tells you to match how another document states something is naming a **hypothesis**,
not an authority. **Three passages nominated as the model to copy in rounds 52 and 53 carried the
very defect they were nominated to cure** — `rules_primer.md`'s closed-hand-on-the-puck bullet,
twice, at two separate gate passes, and `center.md`'s facts line. The sharpest of them stated USA
Hockey's crease escalation while leaving the NHL and IIHF limb flat, so naming one book's
escalation and no other's positively implied the other three do not escalate: **worse than a bare
omission, in the file nominated as the cure for exactly that failure.**

In all three cases the agent sent to copy the model read it, found the defect and fixed it instead
of propagating it. **Each of them thought of that independently, and the instruction must not
depend on that.** So, when you are told to match an existing treatment:

- **Verify the model against `sources/` before you copy it.** A named model is checked the same way
  a number is checked against its owner.
- **If it holds, match it — and say what you checked.**
- **If it is wrong, fix it and say so**, both that you did not copy it and what you changed.

Copying an unverified model is how one defect becomes two identical ones with an argument from
consistency standing behind them.

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

So, five rules:

1. **Before writing "no study exists", "could not be verified", or "untraceable" — search properly, and check the working directory and your own Sources list first.** The pattern recurred: `equipment.md` disclaimed the helmet-replacement guidance as unsourced while the Hockey Canada certification bulletin that states it *was already hyperlinked in that same file's source list* (see the note at the foot of that document). If you are about to say something can't be sourced, read your own references before you write it.
2. **A 403 is not an absence — but a 200 is not a presence.** USA Hockey, CSA, ISO and Nature all reject WebFetch and serve fine to `curl` with a browser user-agent, so several "could not be verified" notes were artefacts of tooling rather than missing evidence. Retry before you disclaim.

   **Then read what came back.** Hockey Canada's checking-resource URLs return **HTTP 200 with "404" in the page body** — soft-404s. A retry that stops at the status code would call them live and invent a citation for a page that does not exist, which is a worse failure than the disclosure it replaced. Grep the retrieved body for the fact you are claiming; a status code is not evidence. In that particular case the corpus's disclosure turned out to be **correct**, which is the point — the check has to be able to come back either way.

   **And check the text is actually *published*, not merely present in the HTML.** A quote attributed to a league's site — *"from co-ed to 50+, beginner to pro"* — existed only inside an **HTML comment**, in a commented-out block still advertising the **2019/20** season. It was in the source, so a naive grep found it; it was not on the page, so no reader would ever have seen it. Grepping raw HTML is not the same as reading the rendered page. Strip comments, or verify against what actually renders.

   **Watch for cherry-picked rows, too.** The same document quoted a programme as *"a four-session block, CAD $148.00"* — the shortest and cheapest of **ten** listings running 4–14 sessions and $148–$444, presented as the shape of the thing. A true quotation of one row is still a false picture of the page. Quote the range, or say which row you took.
3. ⚠️ **A negative search cannot find adverse authority phrased in different words — and a
   verification note built out of negative searches inherits that blindness.** Found 29 August 2026.
   A document argued that an IIHF exception stands because **neither rule contains the word
   *"only"***, and supported it with a verification note reporting four negative searches, each
   honest. **The Situation Handbook does contain it, against that reading** — Situation 81.7: *"No.
   **Only time** a line change is permitted is when a penalty is assessed which affects the on-ice
   strength of either team."* ⚠️ **A grep for the exception's own name returns nothing there, because
   81.7 contradicts the exception without naming it.**

   **So: when you have searched for a claim's *subject* and found nothing, you have not yet looked
   for anything that contradicts the claim's *reasoning*.** Search for the load-bearing word itself,
   search the rule's siblings, and read the whole run rather than grepping it. **Two independent
   readers reached 81.7 and only the second saw it as authority owed to the reader** — the first
   judged it too loose to be worth reporting, which was right about the looseness and wrong about
   the omission. **Looseness does not make adverse authority omissible; it makes it adverse
   authority you characterise.**

   The same shape applies to the corpus's own citation boundaries. ⚠️ **A rule's sub-section is not a
   search boundary.** A safety pass found a bench-minor rule the corpus has never cited **only
   because it printed all of Rule 82 rather than the sub-section it was asked about** — and said
   plainly that windowing to the question as framed *"would have returned 'yes, it's only a warning'
   — the exact false clearance this dimension exists to prevent."* **Read the siblings of every rule
   you cite.**

4. ⚠️ **A phrase census is not a concept census, and the difference produced a confident, honestly
   obtained, wrong `0/0` in this project.** An agent searched all thirteen rulebook extractions —
   de-hyphenated and whitespace-flattened first — for *"does not leave immediately"* and
   *"possibility to stop"*, to test whether a crease-vacating stoppage existed outside the IIHF. It
   reported **NHL 0/0, Hockey Canada 0/0, USA Hockey 0/0, USA Hockey Casebook 0/0**, and concluded
   the provision was IIHF-only.

   ⚠️ **USA Hockey has the STRONGER version and it is mandatory.** **Rule 625(b):** *"A face-off
   **shall** be conducted at the nearest neutral zone faceoff spot any time an attacking player
   stands, holds their stick, or skates through the goal crease…"* — a duty where the IIHF's is a
   *"possibility"* — confirmed in Casebook Situations 7, 10 and 11 and in Appendix II's face-off
   table. **The census could not see it because USA Hockey expresses the same remedy in entirely
   different words.**

   The second agent found it *"only because I searched by **concept** after the phrase census said
   zero."* ⚠️ **The method was sound, the flattening was right, the counts were real — and the
   conclusion was false.** That combination is what makes this class dangerous: **a negative built
   from good phrase hygiene looks like a verified negative.**

   **So: for any claim of the form "no other book has this", the phrase search is the first step and
   never the last.** Search the concept — what the rule *does*, not how one book says it: the remedy
   (*face-off*, *stoppage*, *goal disallowed*), the trigger (*crease*, *stands*, *leave*), and the
   rule's siblings. Check the book's **summary tables and index**, which routinely carry a provision
   the prose words differently. **And validate the search itself** — run it against the book you know
   has the rule and confirm it hits, which is what proved the NHL and Hockey Canada negatives here.

   **The closing line of the agent that found it is the rule:** ***"the negatives I did not think to
   attack by concept are the ones still standing."***

5. **Never delete a claim merely because it is unsourced — source it or label it.** A tidying pass has already removed a *correct* fact from this corpus (the BNQ 9415-370 withdrawal, which was true), because it looked unsupported. Deletion is not the safe default; it is a silent way to lose information. The same applies when consolidating duplicates: check that a passage really is duplicated before cutting it. One dedupe brief would have orphaned the Rule 67.4/67.5 crease-cover material, which lived in one document only and had simply been filed under the wrong heading.

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
| Sudden stop | line ending in **two** perpendicular bars |
| Blocking (screening) | line ending in an open curve |
| Body check | line ending in a hook |
| Pylon | **`X`** — a cone, never a player |

**A smooth wave is *skate-and-stickhandle*, not backward skating.** Distinguishing the two by *wavelength*
is the HEO sheet's convention and is wrong under §21.1: backward skating is loops, and the zigzag is a
separate symbol for the backward crossover.

### ⚠️ The legend glyphs are settled — do not re-derive them

**Signed off by the owner on 21 August 2026**, from the rendered legend on
`/reading-diagrams/reading_ice_hockey_diagrams/`, viewed in a browser. Every symbol on that
page is correct as drawn: forward skating, passing, backward skating (arches), lateral
crossovers, pivot, blocking/screening (a single arc), dropping the puck, skate-and-stickhandle,
shooting, backward crossover (zigzag), stop and sudden stop.

⚠️ **This sentence used to end *"and body check — a line ending in an S, which took several
attempts to get right"*, and it was wrong twice over.** It contradicted this file's own symbol
table thirteen lines above, which says **a hook** and agrees with the renderer
(`site/scripts/lib/rink.mjs`: `bodycheck: { line: 'plain', end: 'hook' }`). And it listed the
glyph among the symbols on that page when **the page does not draw one** — `notation.mjs`
contains no body-check reference, and `rink.mjs` omits it from the legend **deliberately**, with
its reason stated: *"a legend that advertises a body-check glyph without saying who may legally
deliver one is a contact instruction with no scope attached."*

⚠️ **The renderer is the better-sourced side of both disagreements and should be treated as
authoritative on glyph shape.** Its comments record that the sudden-stop mark was *"read off the
rendered page at 1200 dpi, not off the extracted text, which loses every glyph"*, and that **a
ONE-bar terminal is the Hockey Eastern Ontario checking-pressure mark, in no IIHF symbol at
all** — so the singular *"a perpendicular bar"* this table used to carry named **the other key's
symbol**.

⚠️ **The instruction below still stands and is not weakened by this correction: do not edit the
GLYPH.** What was corrected here is this file's **description** of it — which is exactly the
"raise it and get a decision" route the next paragraph prescribes.

**Do not change, "correct" or re-review these glyphs.** The body check in particular has been
drawn wrong more than once — as the mirror of the screen — and the current version is the one
that was checked against the source page and against a human eye. If a future trace or key
appears to disagree, **raise it and get a decision; do not edit the glyph.** The cost of being
wrong here is not a wrong diagram, it is a wrong diagram that looks authoritative because the
file's own history says the symbol was verified.

This is a scope note, not a licence: it settles **the legend on that page**. Every *other*
diagram is still checked against this section before it ships.

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

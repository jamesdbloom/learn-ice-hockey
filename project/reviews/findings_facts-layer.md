# Findings — facts layer

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 7 section(s).

---

### ⚠️⚠️ OPEN — THE 11-VALUE CAP HAS NOW BLOCKED A SAFETY PROPAGATION TWICE IN TWO ROUNDS

**This is a structural finding about the checkers, not about any document.**

`check_facts.py:71` sets `HARD_MAX = 11` values per ` ```facts ` block. ⚠️ **The cap exists so a spoken
value is understandable heard alone. The SIDE EFFECT is that safety content cannot be added to a full
block, and a full block is exactly where a dense, hazardous section ends up.**

**Instance 1 — the IIHF 101.1 half-rule.** ⚠️ ***"Three of the four blocks are at `HARD_MAX = 11`, so
'split rather than trim' was STRUCTURALLY UNAVAILABLE… the caps leave no room, so an editor trims, and the
limb is what gets trimmed."*** **The repair had to pay for both limbs by removing fabricated quotation
marks.**

**Instance 2 — `forechecking_systems.md`.** ⚠️ **`forecheck-pinch`'s caption sends the reader down the wall
at speed and carries NO receiving posture. The document's *"When to pinch"* block at `:496-508` is at
11/11, so the limb cannot be added — and A CAPTION MAY NOT SAY MORE THAN ITS OWNING SECTION, so the caption
is blocked too.** ⚠️ **A second block, `:572-584` *Off a dump-in*, is ALSO at 11/11.**

**Two agents independently refused to work around it, and both were right:**
- adding a body limb with no room in the block **manufactures the exact defect they were sent to fix**
- adding it to the caption alone **puts a claim in the extraction layer its owning section does not make** —
  *"an agent inventing corpus policy in a build source"*

---

### T0-P1 CORRECTED — my diagnosis named the wrong line (refuted 2026-09-07 by `facts-reviewer`)

⚠️ **I filed `body_contact_and_battles.md:966` as the defect. It is not one.** `:966` is labelled
`Action:` — read aloud it makes no legality claim at all, it is coaching, correctly labelled, and it
should be left alone. **Ninth correction of my work this session.**

**The actual defects are the two lines that attach RULEBOOK CITATIONS to the restriction, plus the body:**

- **`:967` (graded critical) — a `Rule:` label on a women's-hockey-only proposition.** IIHF Rule 101
  is headed *"WOMEN'S HOCKEY – SPECIFIC PLAYING RULES"* (`sources/iihf_rules.txt:7485`); the
  *"sole object"* proviso sits inside that scope. In men's IIHF play a legal body check exists
  precisely to separate an opponent from the puck.
  **FIX (201/300):** `Rule: In women's hockey the puck has to stay the object of the contact in a corner — IIHF 101.1 allows two players to push and lean only while "possession of the puck" remains "the sole object" of both`
- **`:968` — a Competitive-Contact-only definition stated as universal.** `sources/usah.txt:3540`
  heads it *"Rule 604 Body Checking (Competitive Contact Categories)"*, and Note 1 is scoped by its own
  words to *"the purpose of this rule"*. ⚠️ **The SAME DOCUMENT has it right at `:416`**, scoped
  *"by 604(a) to the Competitive Contact classifications"*. **Two facts, one document, opposite scopes,
  ~550 lines apart, and `check_facts` passes on both because it cannot read scope.**
  **FIX (199/200 — ⚠️ ONE char of headroom):** `Never: Where checking is barred, make the puck the object and not the player — USA Hockey 604 Note 1 counts forcing an opponent off the puck with no effort to legally play it as an illegal body check`
- **`:978` body — *"legal in every league"*.** Contradicted by Hockey Canada Interpretation 3 to 7.5(a).
- **ADD a status line (block goes to 6 coaching / 8 total, inside caps 8 and 11), 220/300:**
  `Convention: Pin the puck rather than the player is the safest version everywhere, and the law only in women's hockey — Hockey Canada permits a low-speed, minimal-impact pin of the player (Interpretation 3 to Rule 7.5(a))`

**Three further findings in unstaged files, all verified, all TOO STRICT:**
- `playing_without_the_puck.md:447` states a VOCABULARY point as a legality claim, contradicting three
  `Rule:` facts 6–9 lines above it **in the same block** (`:438`, `:439`, `:444`). Fix 198/200.
- `risk_management.md:673` drops *"using his leg or foot"* from slew-footing (`nhl_rules.txt:6041`) —
  what remains describes an ordinary trip (NHL 57.2, a minor) and **prices it as a mandatory match
  penalty.** Its sibling keeps the element at `body_contact_and_battles.md:1345`. Fix 188/200.
- `defensive_zone_coverage.md:594` / `risk_management.md:643` (identical) contradict the line directly
  above them; `defensive_zone_coverage.md:559` says batting a puck down is *"legal in your own end"*
  when NHL 79.1 has no zone limit — it is the **pass** (79.2) that is zone-limited. Fix 190/200.

---

### T0-P22 Slew-footing rewritten — and the discarded candidates are the finding

`risk_management.md:673` stripped *"using his leg or foot"* from NHL 52.1, leaving a description of an
ordinary trip (NHL 57.2, **a minor**) priced as a **mandatory match penalty**. ⚠️ **Both directions
harmful**: a reader who believes an ordinary trip ejects plays scared; a reader who tries the actual
leg-sweep believing it is the trip he was warned off gets a match penalty. Now:

> `Never: Use your leg or foot to knock an opponent's feet from under them, or push their upper body back while your leg does it — that is slew-footing, a mandatory match penalty in the NHL (52.1, 52.2)`

**192/200, measured on the value AFTER the label.** ⚠️ **The agent could not fit both limbs of the
definition AND both tariff clauses under 200** — every candidate landed at 199–220, *"and 199 is too
little headroom to ship."* The dropped tariff generalisation is carried by the two `Rule:` lines
immediately above it, each independently voiced. **Handed to `safety-reviewer`**, with
`body_contact_and_battles.md:1345` to be read alongside it.

---

### T0-P23 My `:642`/`:643` claim REFUTED — and editing would have weakened a correct safety line

I briefed that `risk_management.md:643` contradicts `:642`. **It does not.** `:643`'s antecedent is
*"reach higher … to **keep** it"* — holding, which is exactly what `:642` says is not free — and `:643`
closes by restoring the free play. Verified against `iihf_situations_v1.1.txt:4988` (63.27, *"only a
minor penalty is warranted"*) and `:4825` (63.15, penalty shot). **The identical pair at
`defensive_zone_coverage.md:592-594` is equally sound.** ⚠️ **My brief would have caused a defect.**

---

### T0-P1 remainder — WAVE 1 RESULT: my brief was wrong twice, and nearly caused a fabrication

**Four facts and three body passages rewritten in `playing_without_the_puck.md` and
`defensive_zone_coverage.md`. All three blocks touched were at `HARD_MAX = 11`, so every fix was a
rewrite in place — splitting was mechanically unavailable.**

⚠️ **MY BRIEF'S IMPLIED FIX WOULD HAVE SHIPPED A FABRICATED NEGATIVE EXISTENCE CLAIM.** I framed
`:447` as being about *vocabulary* — *"the rulebook has no legal skater-on-skater screen"*. The agent's
first draft generalised that to *"no rulebook has a word for a skater-on-skater screen"* and then
**refuted it before writing**: **USA Hockey 625(a)(1)** (`sources/usah.txt:4456`) makes *"providing a
**protective screen** and limiting the opportunity for an opposing player to apply pressure to a
teammate"* an interference minor. **A rulebook uses the word "screen" for a skater-on-skater act — for
the ILLEGAL one, which supports the section's point.** Caught only by grepping all four books first.

**Applied:** `Key: "Screen" here means the goaltender's sightline and nothing else — NHL Rule 56's words
for skater-on-skater work are body position, blocking, picks and interference, so call yours traffic, or
a route` (198) — names the book, makes a positive vocabulary claim, **leaves no legality claim to
mis-hear** against the three `Rule:` facts six to nine lines above it in the same block.

⚠️ **MY ITEM 3 WAS IMPRECISE IN A WAY THAT MATTERS.** *"Batting it down is legal in your own end"* was
**not a mis-extraction — the BODY said it too** (`:574`). A body defect that had propagated *into* the
facts layer, not out of it. Both fixed, or the fix would have created divergence.

**The four-book position, all quoted from disk:** NHL 79.1 and IIHF 79.1 permit the bat with **no zone
limit** — 79.2 governs the *hand pass* stoppage, not the bat. USA Hockey 618(b) prohibits batting
*"directly to a teammate"* with *"a stoppage of play… and a face-off"*. ⚠️ **Hockey Canada 10.2(a) says
it in terms: *"Play will be stopped but a Minor penalty will NOT be assessed for a player who commits a
'hand pass' violation."***

**Found by the agent, NOT in my brief, same class:** `:563` said a hand pass *"is illegal"* — voiced
alone that reads as a penalty. **It is a stoppage in all four books.** Fixed, with its body twin at `:578`.

---

### T0-P27 An absolute a block refutes 300 ms later

`:880` — `Key: You cannot be knocked off the puck when your centre of gravity is below your opponent's`
— flat, while `:883` **in the same block** says leverage does not always beat strength. Voiced as
separate units the listener hears a law. Now: *"A centre of gravity below your opponent's is very hard
to knock off the puck — your base is the variable you control, though a large enough strength gap still
wins"* (163/200).

---

### T0-P40 The misconduct reduction — FOUR sites, and only USA Hockey has the clause

`defensive_zone_coverage.md` carried the bare *"ten minutes"* at **four** sites, not one: `:432` (facts,
voiced alone), `:146`, `:443`, `:706`. All fixed; `:431` no longer states the number and a new `Rule:`
at `:432` (296/300) carries 404(a) plus the Note.

⚠️ **All four books checked, as instructed: USA Hockey is the ONLY one with a reduction clause.** NHL
**22.1**, IIHF **22.1** and Hockey Canada **4.7(a)** each write a flat ten. ⚠️ **The agent caught that an
implied "NHL 23.1" would have been wrong — the NHL's misconduct rule is 22; 23 is Game Misconduct.**

**Propagation checked and NOT needed:** every other bare *"10-minute misconduct"* in the corpus
(`uk_rules.md`, `equipment.md`, `goaltender.md`, `switching_positions.md`, `content_style_guide.md:248`)
is the IIHF/In-House **neck-protector** rule, where ten is flat.

⚠️ **`check_absolutes.py` exits 2 — caption layer UNCERTIFIED**, because `center.mjs` and
`defending_the_rush.mjs` are newer than `diagrams.json`. **That is the live caption agent. A diagram
rebuild is mandatory before the gate.**

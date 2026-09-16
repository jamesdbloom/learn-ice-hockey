# Round 80 — the four majors in the split, and what closing them cost

**16 September 2026, after `d0b884e`.** Written because a commit gate blocked on
C8: the work below existed only as open briefs in `OPEN_ITEMS.md`, and ⚠️ **a
brief is not a record of work done.**

## Where the findings came from

A `facts-reviewer` and a `safety-reviewer` ran **independently** on the same
change. **Both verdicts: the split is sound.** The safety verdict was **safe** —
*"Nothing in scope would get a reader penalised, ejected or hurt."*

⚠️ **They found the same major independently, by different methods** — one
walking the body bullet by bullet, one **extracting every facts line in the
document and testing each.** That is the strongest corroboration this method
produces.

## MAJOR 1 — a four-book divergence reaching no fact

The body prices a puck settling on the back of your own net *"from nothing to two
minutes"*. **Verified in primary text this round, all four parents read end to
end:**

| Book | Text | Answer |
|---|---|---|
| **NHL 85.2** | *"Should the goalkeeper use his stick or glove to freeze the puck on the back of the net… the face-off shall take place at one of the face-off spots in the defending zone"* | **no penalty named** |
| **IIHF 85.2** | same substance, writes *"their"* | no penalty named |
| **USA Hockey Casebook 610 Sit. 8** | *"Stop play and assess a minor penalty to the goalkeeper for delay of game"*; *"This action by the goalkeeper is not within the 'act of playing goal.'"* | **a minor** |
| **Hockey Canada 6.12(b)** | *"makes it unplayable in order to gain a stoppage of play"* → Rule 10.1 | a minor |

⚠️ **The gap was in the ` ```facts ` layer ONLY.** Common Mistakes already carried
the case with all three citations and the safe-under-all-four instruction — **the
coordinator's brief said otherwise and was wrong by one layer.**

**Closed with one `Priority:` fact** carrying both opposite answers, each
book-scoped, with the instruction leading.

⚠️ **The brief's proposed remedy would have caused a GATE BREACH.** It said *"if
they will not fit one fact, split into two and the block hits its 11-fact
ceiling."* **The block was at 10/11 — splitting gives 12.** Only one slot existed.

## MAJOR 2 — the split severed a restriction from its penalty

The tactical block's two coaching facts each stated an outside-the-crease limit
and **neither said what breaking it costs**; the `Rule:` fact that had sat beside
them stayed in the other block. Closed with a `Rule:` fact naming **NHL/IIHF
63.2(i)** and USA Hockey's Casebook running the other way at **614(c) Situations
11 and 12** — both read in full.

## MAJOR 3 — a fact ending on a permission

`:377` ended *"…Hockey Canada Rule 10.1(vi) names only the goal netting"* — the
last thing a listener hears. **HC 10.1's opener read in full:** *"This includes,
but is not limited to, the following actions."* Now carried in the fact.
⚠️ **The body's honest disclosure — *"I could find no Hockey Canada
interpretation applying 10.1 to a puck put into the pads"* — is untouched**, and
the repair does **not** assert the pads are caught.

## MAJOR 4 — the round's own warning left out of both summary layers

The diff had added *"That is the throw a British goaltender is most likely to
think safe"* and carried it to neither Common Mistakes nor Key Takeaways, **where
four penalties of the same or lesser tier already sat.** Closed with one Common
Mistakes item.

⚠️ **The brief said to scope it "to the IIHF and NHL". That would have
overstated:** the lateral throw is answered by the **IIHF's Situation Handbook**;
**the NHL prints the same clause and publishes no interpretation of it**, and
`sources/README.md` records its Handbook as not publicly obtainable. Scoped to
the IIHF's ruling, saying in terms what the NHL does and does not publish.

## ⚠️ What closing them cost, reported rather than worked around

**§Freezing is now at 11 of 11 facts with 2 coaching against a floor of 3.**
`content_style_guide.md:844` reads a block at 11 as **a section doing two jobs**,
and this one carries **eight or nine distinct offences**, depending how you group them — the three-second hold, the deliberate stoppage, the drop into pads or net, the back-of-net smother, the forward throw, the race-and-jump, the outside-crease freeze, the in-crease freeze and piled snow. ⚠️ **FIVE of its lines sit
within ten characters of their cap, and a sixth sits at eight in the new tactical block — an ordinary edit breaks the block.**

**The seam the body already uses is *the goalkeeper's own acts* against *what the
puck does on its own*.** That is a coordinator decision and is an open row.

⚠️ **A commit gate ruled this does not block:** `check_facts` passes at 11, and
**nine other blocks in this same file already sit at 11** — ten in total, of which §Freezing is one.

## Decisions taken deliberately, with reasons

- **CARHA not added as a fifth book here.** Verified safe: zero hits for
  *restricted area* / *trapezoid*; **61(b)** reaches only a deliberate hold and
  **58(b)** is narrower than the NHL's, needing the puck behind the goal line
  **and** the goalkeeper entirely outside the crease. *"All four books"* is true
  as written and no reader is exposed. ⚠️ **Adding a fifth book to a section this
  long is the provenance theatre the ratio rule condemns.**
- **The `Read:` fact's bare comparative removed rather than split** — its content
  moved into the new `Rule:` fact **with a citation**, which avoids voicing a bald
  USA Hockey permission alone in the extraction layer. ⚠️ **A commit gate
  confirmed this was an upgrade, not a strip: non-negotiable 4 intact.**
- **The 6-on-5 cross-book fence left alone** — that bullet's own fence discharges
  it.

## Repaired outside the brief, in the rare direction

The Sources trailer listed **seven** IIHF situations re-checked against the
2026/27 edition **while the same trailer named an eighth two clauses earlier.**
⚠️ **A commit gate corrected this record's first draft, which claimed it was short
by TWO and framed the whole difference as a pre-existing undercount.** It was
short by **one** — Situation **67.2 does not appear in this document at HEAD at
all; this commit introduces it.** So half the "correction" is the round citing its
own new situation. The list is now complete, and the *"still answer with Rule
27.8"* tail is scoped to the five that actually do. ⚠️ **Round 59's direction is
the right frame for the one, not for the whole.**

Also repaired: the body had attributed the NHL's wording (*"his stick or glove"*)
to **both** books.

## What this method could not have found

⚠️ **The highest-value question outstanding, and nothing on disk settles it.** The
back of the net is **outside the crease**, and **NHL 63.2(i)** reaches *"any
player, including the goalkeeper, who holds, freezes or plays the puck… to
deliberately cause a stoppage"* there. **85.2 is the specific rule and names only
a faceoff.** The new fact inherits that unresolved reading. A commit gate
independently reached the same conclusion: *"I established the tension is real on
the face of both books; nothing on disk settles it."*

⚠️ **The British warning rests on an interpretive document that disclaims
priority over the rule it interprets.** The IIHF Handbook says *"in case of any
contradictions, the valid IIHF Rulebook is always the basis"*, and 67.3(III) on
its face says only *"forward towards the opponent's net"*. **If a British official
reads it literally, the Common Mistakes entry warns against a throw that is
legal.** Conservative direction — **stated more firmly than the rule text alone
supports**, and flagged by the agent against its own work.

⚠️ **`content/systems/faceoffs.md` carries the NHL 85.2 back-of-net act with no
USA Hockey / Hockey Canada divergence attached** — the same omission, one document
over, unfixed.

⚠️ **`site/src/diagrams/goaltender.mjs` has never been opened this round.** The
body's framing changed and the caption layer was not read. **No census over
`content/` can see it.**

**Nobody has measured whether eleven spoken facts with 300 ms gaps and 2,600
characters of rule citation is where a listener stops listening.**

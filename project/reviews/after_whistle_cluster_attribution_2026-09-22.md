# The after-the-whistle cluster, audited book by book — 22 September 2026

**~100 quotations across `risk_management.md` and `on_ice_communication.md`, each checked against
the book the document NAMES rather than against `sources/` generally. Zero wrong-book
attributions.** Seven rulebooks plus six British documents searched.

⚠️ **This is the third clean attribution audit today**, after `rules_primer.md` (47 claims) and
`body_contact_and_battles.md` (1,193 fragments). **The defect class five agents independently named
as the one nothing could reach has now been looked for directly, three times, and not found.**

## The two questions a previous agent explicitly declined

**Q1 — is USA Hockey 601(a)(4) the right rule to cite at all? YES.** `usah.txt:3323-3329`:
*"A minor penalty for unsportsmanlike conduct shall be assessed to any player who commits the
following actions: … (4) **Shoots** the puck after the whistle, if in the opinion of the Official
such shot was avoidable."* **601(a)(4) has no out-of-playing-area element at all, so the corpus's
gloss — "no need for the puck to leave the rink" — is the rule's own scope.**

**Q2 — is the 610(c) / 601(c)(10) overlap stated correctly? YES, and the negative was ATTACKED
rather than confirmed.** The corpus claims *"all twenty-four situations under Rule 601 were read,
and not one of them is about a puck put out of the playing area."*

- Rule 601's casebook block (`usah_casebook.txt:10732-11145`) contains **exactly 24 situations** —
  the count is right — and `grep -i puck` over the whole block returns **three hits, all in
  Situation 3's roughing discussion.**
- ⚠️ **The agent then searched the volume the claim did NOT name** — Rule 610's own casebook block,
  `:11848-12047`, **11 situations**. **None addresses which rule governs.**

**So the overlap claim is verified across both rule blocks, not just the one the document names.**

## The twin-sentence trap was live, and the corpus is on the right clause BOTH times

1. **Hockey Canada Interpretation 3 to 10.1(a)** has **iv** (*"…simply jumps on the puck… No warning
   will be issued **in this instance**"*) beside **v** (*"When a goaltender leaves their crease… No
   warning will be issued"*). `on_ice_communication.md:436` quotes **v**, correctly, and separately
   names **ii** as the permitted cover-after-a-save.
2. **Rule 11.1 has a Note 1 under (d) and a near-identical Note 1 under (e).**
   `risk_management.md:357` quotes the **(d)** one, correctly.

## Three negative existence claims, attacked and upheld

- *"the IIHF writes no match penalty anywhere"* — `grep -ci "match penalt"` returns **0** in both
  `iihf_rules_v1.1.txt` and `iihf_rules_2026-27.txt`, **and** a flattened whitespace-stripped pass
  returns nothing. **Upheld against two editions.**
- *"CARHA Rule 75(b) is the only clause reaching a puck THROWN out of the playing surface"* — a
  flattened `throw*` census returns **20 contexts**; the only such clause is 75(b). **Upheld.**
- The Casebook overlap negative above. **Upheld across Rule 601 AND Rule 610.**

## 🔴 The one finding that changes what a reader does — CARHA 55(a) Note 1

`risk_management.md:365` says CARHA *"Rule 55(a) writes no deliberateness word into the
goaltender's limb at all."* ⚠️ **That is TRUE.** But the paragraph quotes 55(a)'s **Note 2** and
**skips Note 1** (`carha.txt:2626-2631`), immediately beneath the sentence it quotes:

> *"(Note 1): When the goalkeeper shoots the puck directly out of the playing surface where there is
> no glass… or if the puck touches the glass or deflects off a player or official, no penalty shall
> be assessed."*

⚠️ **That gives the CARHA goalkeeper the same no-glass and deflection escapes the corpus carefully
carries for every other book** — it is almost word for word Hockey Canada's Interpretation 5.
**Read aloud, the passage tells a CARHA goalie an accidental deflection out is a minor. It is not.**
Dispatched; the constraint is that the escape belongs **beside** the existing sentence, not in place
of it.

## 🔴 SAFETY — USA Hockey 627(c) has two provisos and the corpus names one

`on_ice_communication.md:117` names a goal-scoring proviso. `usah.txt:4552-4562` also prohibits the
kick shot — *"which combines the use of the leg and foot driving the shaft and blade of the stick
and producing **a very dangerous shot**."* ⚠️ **The book itself labels the act dangerous.**

**Checked in the other three and absent from all:** NHL 49.2, IIHF 49.2, Hockey Canada 6.10(a)–(c)
all carry the goal proviso and **none carries a kick-shot clause. A USA-Hockey-only limb.**

## Three enrichments — reported, not defects

1. `risk_management.md:357`'s parenthetical says HC 10.1(b), (c) and (e) rule things out *"in the
   same breath"*. **(b) is not flat**: *"except as detailed in Rule 10.8 – Refusing to Start Play."*
   ⚠️ **The operative limb of the argument — 10.1(d) — IS flat, so the conclusion stands.**
2. **The Hockey Canada ladder has a third rung** both files omit — 11.1(e), a game misconduct for
   persisting (`hc.txt:8520-8523`).
3. **USA Hockey 601(a) carries its own escalation** (`usah.txt:3330-3335`), including ⚠️ *"If
   occurring after the game, the above actions shall be initially penalized as a misconduct
   penalty."*

## The coordinator's cluster list was wrong at its boundary

The brief listed **USA Hockey 616 Note 1** and **Hockey Canada 10.2(a)(iii) + Interpretation 4** as
part of this cluster. **They are not** — 616 is *Fouled from Behind* (penalty shots) and 10.2(a)(iii)
is the *hand on the puck* rule. **Different four-book contrasts, same defect shape, separate audit.**
The agent spot-checked them anyway and found **no wrong-book attribution there either**; the
remaining ~30 quotations in the penalty-shot and hand-on-puck clusters are **the obvious next brief.**

## The British layer — searched, and now KNOWN to have been searched against the wrong files

The agent searched all four IHUK Rules of Competition plus `eiha_inhouse_2026-27.txt` and `eih_rr.txt`
and reported **no British amendment** to this cluster: *"`ihuk_nihl_roc`, `ihuk_wnihl_roc` and
`ihuk_u10_roc` return nothing at all."*

⚠️⚠️ **THAT NEGATIVE IS NOW SUSPECT, THROUGH NO FAULT OF THE AGENT.** It searched the files its
agent-file inventory names — **and that inventory is four files short, missing exactly the four
British `_layout` twins, which carry up to 32% more text than their flat siblings.** See the plan
row; a re-test is dispatched.

## What this method could not have found

1. ⚠️ **An attribution error where two books' wording is IDENTICAL — and that is not hypothetical
   here.** NHL 63.2's NOTE carve-outs, 75.4(v), 81.6's release clause and 49.2's opening sentence are
   **word for word in the IIHF book too.** A sentence naming the wrong one of those would have scored
   clean in **every** check run. **They were read in both books by hand and are correctly
   attributed — but only because the agent looked, not because the method told it to.**
2. **Whether the cited rule is the one an official would actually apply.** Which of 601(a)(4),
   601(c)(10) or 610(c) a referee reaches for is precisely what USA Hockey does not answer and the
   corpus honestly discloses. **The method can confirm the disclosure is warranted; it cannot resolve
   it.**
3. **The remaining ~60% of quotations in these two files**, and everything in the prose *between*
   quotations.
4. **A claim correctly quoted and correctly attributed but citing a superseded rule.** Only the IIHF
   clauses the documents themselves flag as unchanged were diffed 2025/26 against 2026/27; **the USA
   Hockey and Hockey Canada books were not diffed against any prior edition.**

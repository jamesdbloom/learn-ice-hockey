# The act, not the rule — 25 September 2026

**Fourteen content documents. Two blocking permissive defects, both found by naming the ACT and asking
which rules price it, rather than checking the rule a brief pointed at. Neither was visible to any
checker in this repository.**

---

## The method that found both, stated once

Every previous convention here guards a **false** negative — a book that line-breaks a word, an
image-only PDF, a label a rulebook never uses. **Both blockers this round came from a negative that was
CORRECT.** The corpus quoted a real rule, verbatim, and stopped — because nothing said *"this book has
another rule about the same act."*

> ***"A false negative leaves you uneasy and you search again. A true negative satisfies you and you
> stop."***

**Three agents declared their own weakest negative and ALL THREE WERE TESTED AND WERE REAL.** That is
now the round's most reusable result: *"what this method could not have found"* is not a courtesy at the
end of a report, it is the next brief.

---

## Blocker 1 — checking from behind has no possession condition in ANY book

**The corpus scoped the checking-from-behind tiers to the PUCK CARRIER.** `winger.md` said so in terms.
⚠️ **A backchecker arrives from behind by definition.**

| Book | Floor for a check from behind | Ceiling |
|---|---|---|
| Hockey Canada 7.5(a) | **minor + GAME MISCONDUCT, mandatory**, *"anywhere on the ice"* | 7.5(c) **match, mandatory** |
| CARHA 53(a) | **minor + game misconduct** | 53(b) **match**, Note: referees *"not to substitute other penalties"* |
| NHL / IIHF / PWHL 43.2 | **major + GM — no minor available** | match (IIHF: none) |
| USA Hockey 608(a) | minor + misconduct | **608(c) MANDATORY MATCH** |

**The site topped out at a discretionary interference major.** Repaired across
`systems/defending_the_rush.md` and `positions/winger.md`, all four layers.
**Also landed:** USA Hockey 640(b) (a mandatory minor the corpus carries at nine other files and not
here), CARHA's lack of a *delivery* entitlement, PWHL 52.1.
**Declined with reasons:** HC 7.4(v) blind-side charging, the late-hit-distinctive point, head-contact
supersession. ✅ **Declining four of eight was correct — landing all eight would have been the tariff
dump the owner's rule forbids.**

## Blocker 2 — Hockey Canada's slew-foot priced from the wrong rule

**`risk_management.md` said Hockey Canada *"starts lowest of the six"* and that only 8.8(c) ejects.**
**True of Rule 8.8. False of Hockey Canada.** **Rule 7.5's own preamble, clause (iv), names the act:**
> ***"Where a player 'kicks' or 'pulls' an opponent's feet out from behind and then pushes the player
> into the boards."***

**7.5(a) is a mandatory minor + game misconduct; 7.5(c) a mandatory match. Nothing in 8.8 makes it
exclusive.**
⚠️⚠️ **THE FINDING WORTH KEEPING: the document ALREADY STATED 7.5(a)'s ejecting floor correctly at a
site no brief named, A HUNDRED LINES ABOVE the defective paragraph.** **It contradicted itself and
nothing could see it.**
✅ **KT9's *"four of the six eject you at their floor"* SURVIVED, re-derived per book** — 7.5 and 53(b)
price a different act configuration, not the bare slew-foot.

## The third: the IIHF's ceiling is not what the corpus said

✅ **TRUE and kept: the IIHF writes no penalty called a match penalty** (`matchpenalt*` flattened = 0,
both editions; no Match Penalties rule in the type list).
🔴 **FALSE and permissive: the inference that its ceiling is therefore the major plus automatic game
misconduct.** **55.6, 61.6 and 22 more route to Rule 28; 28.1 reaches an offence *"whether or not such
offense has been penalized by the Referee(s)"*; 20.7 makes the referee's report MANDATORY; 23.2 gives
*"full power"*; 23.5 is a dedicated STICK INFRACTIONS category.**
**Repaired at 22 sites across five files.** ⚠️ **A coordinator's site list was ~40% short; the agent that
SWEPT THE SHAPE found 15 where the brief named 4, and a later lane found 2 more the brief missed again.**
✅ **A census of ALL Disciplinary Measures clauses found 24 in v1.1 and 26 in 2026/27 — and that
**Rule 46, fighting, carries NONE in v1.1**, which killed a draft sentence in a paragraph about fighting.**
✅ **THE HONEST SPLIT, and it is the sentence to reuse: THE REFERRAL IS MANDATORY; THE DISCIPLINE IS
DISCRETIONARY.** ✅ **The IIHF Disciplinary Code is NOT on disk, and every repaired page now says so
rather than inventing a tariff.**

---

## The instruction that did the most work

**Twelve agents were told to re-read their own replacement text against the body it summarised.**
**EVERY ONE FOUND DEFECTS IN ITS OWN NEW TEXT. None reached a checker.** The worst:

- 🔴 **A REVERSED ACTOR.** A compressed Key Takeaway said the Rule 69.3 goal comes off where *an
  attacker's* contact impairs the goalie. **It is the GOALTENDER's own contact.** ***"Voiced alone it
  would have told a goalie a protection exists that does not."***
- 🔴 **A DISCLOSURE KEPT AND ITS COUNTERWEIGHT DROPPED** — a restored spinal limb ended *"rather than a
  rule anyone writes"* and stopped, which in a solo chunk reads as *unpriced*.
- 🔴 **AN AUTOMATIC-SOUNDING VERB AT 13 SITES** — *"routes to Supplementary Discipline"* where the rule
  says *"if deemed appropriate… at their discretion."*
- **A truncated quotation closed with a period the source does not have; an elided semicolon; a
  four-book claim enumerating four books under a six-book quantifier.**

⚠️ **Almost every one was an OVERSTATEMENT TOWARD A HARSHER, SIMPLER RULE — except the two permissive
ones above, which are the dangerous direction.**

## Coordinator errors — eight, all caught by agents before reaching the corpus

1. **"No other layer needs touching."** False — the body had been written assuming the old four-book
   answer, leaving PWHL's silence uncovered permissively. ⚠️ **The same brief instructed the agent to
   check exactly that, two paragraphs below.**
2. **A repair sketch that NARROWED a prohibition to the back**, licensing the hit on the front.
3. **"CARHA has no body-position entitlement at all"** — Rule 66(a) Note 2 grants *stand your ground*
   and *shadow*.
4. **Three wrong character counts** (189/200 as "well inside"; 214/300 for a 270/300 line), all relayed
   rather than measured.
5. **A CHARACTER OFFSET relayed as a line number** (`iihf_situations.txt:135812`; the file is 8,941
   lines).
6. **One quotation offered as covering three books that write it in different pronouns** — attribution
   drift, which `check_quote_drift.py` structurally cannot see.
7. **A site list ~40% short.**
8. **The IIHF-ceiling inference itself**, specified in a brief and shipped into the tree for an hour.

✅ **The standing remedy already in every brief WORKED and stays: *"verify every quotation against the
primary source"* and *"run `check_facts.py --near` and measure every line yourself."***

## Two predictions tested and both REFUTED — worth as much as a finding

**An agent expected a PWHL exclusivity to be live in two files. Both already named the PWHL.** **One
grep settled it; acting on the guess would have cost a wave.** ⚠️ **The same grep then found a real one
nobody predicted — a facts line short by a book against its own body.**

---

## Dimensions

| | Dimension | Covered |
|---|---|---|
| D1 | Rules claims vs primary text | ✅ six `rules-verifier` passes; every tariff re-derived |
| D2 | Cross-book divergence | ✅ the round's subject |
| D3 | Citations refetched | ⚠️ **PARTIAL** — local primary text only; no network fetch |
| D4 | Cardinal rule / coaching choice as law | ✅ one NN7 inversion caught in draft and reordered |
| D5 | Summary-layer propagation | ✅ layer tests run per document, not by grep |
| D6 | Numeric ownership | ✅ the point-shot figure deliberately left qualitative |
| D7 | Negative existence claims | ✅ **the round's method**; three declared negatives tested |
| D8 | Qualification travelling with a figure | ✅ no bare count quoted; books named, not counted |
| D9 | ` ```facts ` layer | ✅ every capped line measured; caps respected |
| D10 | Safety | ✅ three `safety-reviewer` passes, all SAFE TO COMMIT |
| D11 | Permissive direction | ✅ two blockers + the IIHF inference, all repaired |
| D12 | Spoken layer | ✅ rendered; chunk pairing verified; **Key Takeaways found PACKED, not solo** |
| D13 | Rendered site | ✅ built; **5 bare glyphs, none in a touched file; 75 in-strong glyphs, 0 untreated** |
| D14 | House style / corpus self-narration | ✅ no project minutes in `content/` |
| D15 | Diagrams | ⚠️ **OUT OF SCOPE** — no `site/src/diagrams/*.mjs` changed |

## What this round could not have found

- **The IIHF Disciplinary Code is not on disk.** The route above a major is proved; **the destination is
  unread.** The single highest-value next fetch.
- **The symmetrical question nobody asked:** the corpus compares the IIHF against five books' match
  penalties and **never asks what sits above THOSE books' match penalties.** ⚠️ **If the IIHF's real
  ceiling is a suspension, the five-of-six comparison may be mis-framed CORPUS-WIDE.**
- **The five new IIHF formulations have not been diffed side by side.** Two individually-correct
  sentences can contradict each other read aloud; this repository has shipped that before.
- **Clipping from behind leaves the clipping rule in all five books that write one** — floors move to
  ejections — and **no corpus site says so.** **CARHA has no clipping rule at all** and prices the act
  four ways over.
- **A qualifier that changes jobs when it moves between layers leaves no lexical trace.** Clauses moved
  between body and summary layers in nine files. **Only a fresh reader can test that.**

---

## The files in this commit, and what changed in each

| File | What changed |
|---|---|
| `content/foundation/on_ice_communication.md` | IIHF ceiling repaired in body, facts and Common Mistakes; **Key Takeaway 11 repaired after a fresh read found the permissive framing had stopped one layer short**; the kicking and cross-checking enumerations widened to name the PWHL |
| `content/foundation/rules_primer.md` | Four bullets scoped to *"inside the game"* naming 41.5, 50.4, 61.6; **the boarding bullet was the commit-gate's BLOCK**; NHL-vs-IIHF 41.5 disambiguated for a listener |
| `content/foundation/uk_rules.md` | `:367` and Key Takeaway 7 re-scoped; **the word *"uncapped"* deleted** as an assertion about an unread document; the EIHL Department of Player Safety named, competition-scoped; 23.6 added beside 23.5 |
| `content/hockey-iq/playing_without_the_puck.md` | Three-proviso repair (NHL/IIHF 56.1, PWHL 57.1); cleared clean by a safety read |
| `content/hockey-iq/risk_management.md` | **Hockey Canada's slew-foot re-priced from Rule 7.5**, whose preamble names the act; CARHA 53(b) added; the section's own title tested and upheld |
| `content/positions/center.md` | Three-proviso repair; body-position pronoun corrected at four sites |
| `content/positions/defender.md` | Key focus gained the point shot; **KT3's two tariff ladders demoted** (2,327 chars, 3.0× its sibling); CARHA 53(b)'s locational scope restored; the IIHF's discretion distinguished from the NHL's mandatory major in three layers; the turned-back divergence added |
| `content/positions/goaltender.md` | **Key Takeaways 20 → 12**; the box-out permission gained NHL 56.1's third condition; an undeclared ninth demotion — the cervical-spine limb — **restored by ruling**; the USA Hockey match-penalty understatement repaired |
| `content/positions/winger.md` | Key focus, Overview, Common Mistakes and KT10 gained the backcheck contact limit; **the checking-from-behind tiers un-scoped from the puck carrier**; KT10's mandatory match penalty attributed to the books that write it |
| `content/systems/defending_the_rush.md` | The backcheck half-rule repaired in all four layers; USA Hockey 640(b), CARHA 49(a) and PWHL 52.1 added; the Hockey Canada late-hit test written the legal way round |
| `content/systems/faceoffs.md` | A closed *"all five"* quantifier and a Hockey-Canada-ejects claim repaired; cleared clean |
| `content/systems/special_teams.md` | The USA Hockey match-penalty understatement repaired in body and Common Mistakes |
| `content/technique/body_contact_and_battles.md` | Eight sites across three claims, all permissive; the match tier added for the NHL, PWHL and CARHA; *"every major"* → *"that major"*; the puck-first frame widened to six books |
| `content/technique/shooting.md` | High-sticking scoped to *"inside the game"* with 60.7; **three different 43.4s in one breath disambiguated**; the British claim re-scoped from geography to the book |
| `project/plans/OPEN_ITEMS.md` | The round's findings, ten coordinator errors, and the next-wave rows |

## After the gate blocked

**The `commit-gate` BLOCKED on `rules_primer.md:450`** — the round's own repair surviving one bullet
short, as a **direct instruction**, voiced alone with its qualification 22 chunks away. **It named its
own blind spot: it surfaced only because the diff repaired its siblings and made it contradict them.**

**Three further permissive defects were found after the block, none by a checker:**
- **A six-fold understatement.** Three sites said a USA Hockey match penalty *"ends their night"*. **405(c)
  suspends from all games and practices until the case is heard, 410(c) makes the review compulsory, and
  the Standardized Discipline Policy recommends four to eight games for a charging match.**
- **`on_ice_communication.md` KT11** — the IIHF framing had reached body, facts and Common Mistakes and
  stopped at the layer voiced alone. **Found only by a fresh reader; self-certification hid it.**
- **`shooting.md:527`** — three different *"43.4"*s in one breath, the IIHF's unprefixed. **Only the
  renderer exposes it.**

## Two more coordinator errors, taking the round's total to ten

**A brief enumerated the mandatory match penalty across five of six books and silently omitted USA
Hockey, whose 608(c) is also mandatory** — *"a USA Hockey reader would have inferred his match tier was
the referee's to withhold."* **And a brief cited two precedent lines that do not contain the form it
claimed.** ⚠️ **Both were refuted by the agent that had read the file. Every one of the ten was.**

## What the round's method is, stated for reuse

**Fifteen agents ran the self-re-read of their own replacement text. Every one found defects in its own
new text.** **Four declared weakest negatives were tested; all four were real.** **Three predictions were
tested and refuted, each saving a wave.** ⚠️ **The instruction that did the most work was not a checker:
it was *"name the ACT and find every rule that prices it"*, and *"what this method could not have found"*
read as the next brief rather than as a courtesy.**

---

## The second block, and what closed it

**The `commit-gate` blocked a second time, on C11 and on one file.** `goaltender.md`'s Key Takeaways went
**20 → 12**, and C11's terminating rule says a repair confined to a finding does not void a clearance but
one that **"moves, merges, splits or renumbers text" does**. That restructure did all four at once.

⚠️⚠️ **A checker had cleared it by being blind to it.** `check_marker_pairs.py` reported `HEAD=81 tree=81`
for that file **by seeing no change at all** — the whole Key Takeaways layer is one paragraph block, so
the tool's unit of analysis was larger than the edit. **That reads identically to a clean pass.**

**A fresh `safety-reviewer` read the restructured block and returned SAFE TO COMMIT.** It enumerated all
twenty HEAD takeaways, extracted every hedge and scope flag, and traced **26 limbs individually**.
**Twenty-five landed. One did not.**

### What the restructure fixed, which nobody had flagged
**HEAD's KT11 said freezing outside the crease *"is safe under the NHL, the IIHF and Hockey Canada"* —
flat, with no trapezoid limit.** **Under the NHL and IIHF, *playing* the puck behind the goal line
outside the trapezoid is itself a delay-of-game minor.** ✅ **A permissive, penalty-bearing claim in a
summary layer was closed as a side-effect of re-aiming the layer.**

### The one limb that did not land, and why the repair went somewhere else
**HEAD bounded the USA Hockey retrieval instruction with *"the privileged area… but not into the
corners"*.** **USA Hockey 607(d) Note 2 defines that area as a rectangle from the end-zone faceoff spots
perpendicular to the end boards — the corners are outside it, and a goaltender there can be legally
checked.**
⚠️ **The reviewer's proposed host was unavailable: KT6's chunk was 2,704 of 2,800 billed characters.**
**The repairing agent rendered BOTH candidate placements and found each split the chunk in two — one
stranding a naked negative as a chunk's last sentence, the other opening a chunk with an unanchored
permission and NO spoken `"Important."`.** ✅ **The repair was split by size: a 50-character bound in KT6,
the full explanation restored to KT9.** ⚠️ **KT9 now has 28 characters of headroom.**

### Three more defects caught in that agent's own replacement text
**A *"requires"* where the rule says *"should be called"*; a mis-attribution between Note 2 and Casebook
Situation 6; and — the one that matters — a quotation truncated so it closed on *"permitted to
physically engage with the goalkeeper"*, where the source sentence continues and the continuation is the
limit.** ⚠️ **`check_quote_drift.py` cannot see that shape: a truncation scores as a clean shorter
quotation.**

## The count that closes the round

**Seventeen agents were told to re-read their own replacement text. Every one found defects in its own
new text.** **Six declared weakest negatives were tested; all six were real.** **Three predictions were
tested and refuted, each saving a wave.** **Eleven coordinator errors, every one caught by an agent
before it reached the corpus.**

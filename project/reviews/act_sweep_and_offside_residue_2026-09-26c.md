# The act sweep, the offside residue, and a cap that manufactured a defect — 26 September 2026

**Four content documents. Written after the final `content/` edit and after the plan, per the ordering
rule.** This is the wave that followed commit `c4f9f75`, taking its declared open rows as the brief.

---

## What this wave was for

`c4f9f75` closed a round whose subject was **a four-book frame on a six-book shelf**. It shipped three
declared open rows, and this wave took all three plus the search five agents had independently asked
for:

1. A **permissive** facts line in `risk_management.md`, voiced alone — found by the act sweep, and not
   in the previous commit, so it could not have shipped there.
2. **Four offside residue sites** outside that commit, found by a commit gate's corpus-wide sweep.
3. The **act sweep** itself: *what OTHER rule in each book prices the same act?* — named by five agents
   as their own weakest point.
4. A **supersession sweep**, named by the act sweep as the highest-value next search.

---

## ⚠️⚠️ THE FINDING OF THE WAVE: A CHARACTER CAP MANUFACTURED A PERMISSIVE DEFECT

Repairing an offside facts line, an agent's **first** replacement read *"a **raised skate** is onside
under NHL and IIHF 83.1 and PWHL 85.1"*. It had dropped *"held back over the neutral zone"* **to fit
300 characters**.

⚠️ **Unqualified, that tells a reader a skate raised AHEAD of the plane is onside — which is OFFSIDE in
all six books.** ⚠️⚠️ **It passed `check_facts`, `check_absolutes` and `check_quote_drift` cleanly. No
gate in this repository can see it.**

✅ **The agent found it by RE-READING its own draft, reported it against itself, and repaired it by
SPLITTING the line rather than shortening further.**

**This is the third recorded instance of a cap causing a permissive drop** — a cap once evicted a
mandatory give-ground duty, and a trimmed caveat once inverted a claim — **and the first caught in
draft.** ✅ **The rule: when a limb will not fit, SPLIT THE LINE. Never shorten the qualifier.**

### ⚠️ AND A COMPANION FINDING DISPROVES THE OBVIOUS DIAGNOSIS

`rink_map.md` was missing the same plane qualifier **in uncapped prose, with no cap pressure at all** —
and the wave reopened that sentence without closing it. ⚠️ **So caps do not CAUSE this shape; they only
make it likelier.** **A missing qualifier is a reading failure first.**

---

## What was repaired

| File | Defect | Direction |
|---|---|---|
| `hockey-iq/risk_management.md` | a facts line stating Hockey Canada **7.5's floor** for a fact pattern **7.5(c)** prices as a mandatory match; the adjacent line narrowing *"boards"* for *"boards or goal frame/net"* and *"protect"* for *"protect or defend"*; then **Key Takeaway 9, voiced alone, carrying the same narrowing 200 lines below its own repair** | **permissive** ×3 |
| `foundation/rink_map.md` | three stale limbs in one sentence — the contact denominator, the plane group, *"two books of the four"* — plus the missing plane qualifier | stale + permissive |
| `foundation/rules_primer.md` | a comparison-table row silent about the one published rec book it was about; a Key Takeaway stating an open question with no instruction | incomplete + ambiguous |
| `hockey-iq/time_and_space.md` | two facts lines, one carrying *"legal under all four rule sets"*; **no CARHA trailer entry while the body already cited CARHA 72(c)** | stale |

⚠️ **`systems/zone_entries.md` was flagged by the census and is CORRECT AT EVERY MARKDOWN LAYER. It is
the exemplar. Nothing was edited.**

---

## ⚠️⚠️ THE ROUND-10 SHAPE, FOUR TIMES, AND THREE OF THEM INSIDE THE WAVE REPAIRING IT

**The safety read blocked the commit on Key Takeaway 9 — the same narrowing the wave had repaired two
hundred lines above, in the same file, in the same session.**

⚠️ **And the reviewer verified the body, both facts lines and the Sources trailer already carried the
full form — so it was NOT a propagation failure. The repair wave rewrote the facts layer and never
looked at the takeaway.** **That is worse than a propagation failure, not better.**

---

## ⚠️⚠️ A LAYER TEST IS NOT COMPLETE UNTIL THE CAPTIONS THE DOCUMENT SPEAKS ARE CHECKED

**`zone_entries.md` is correct in every markdown layer and SPEAKS a stale caption.** The diagram
`entry-trail-skate-drag`, which it owns and solely hosts, still gives the airborne skate to the NHL and
IIHF only.

⚠️⚠️ **The caption does not live in the document, so no layer test of the document reaches it** — the
identical structural blind spot that produced the `breakout-wheel` finding in the previous wave.
✅ **`check_caption_hosts.py` exists for exactly this, and nobody ran it in either wave until a
coordinator did.** ⚠️ **Direction is conservative (a PWHL reader is told to keep the blade down when she
need not), so it is an open row rather than a blocker — unlike `breakout-wheel`, which LICENSED an act
and did block.**

✅ **The other thirteen captions mentioning the claim were read and are clean — including one that
scopes itself honestly, *"an NHL rule, and where the IIHF and USA Hockey books put the draw is not
established here."* That is a caption declaring its own limit. Do not "complete" it.**

---

## The act sweep: five agents' declared gap, tested

✅ **It was real.** Its top finding is the permissive facts line above. ⚠️ **But it also refuted the
brief's central premise before doing the work:** the coordinator wrote *"nobody has looked"*, and
**Hockey Canada's supersession clause is already in the corpus, quoted verbatim, along with eight other
redirects** — the sweep counted eleven sites across six documents. ⚠️ **A commit gate could not
reproduce that numeral and said so; treat the COUNT as the sweep's own and unverified. What is
load-bearing is the presence, not the number.** ✅ ***"A brief written on 'nobody has looked' would have produced a
wave of duplicate additions."*** ⚠️ **The coordinator asserted an ABSENCE without measuring it — the
census failure one level up. Before briefing a sweep as new, grep `content/` for the clause.**

### 🔴 The supersession finding, recorded and NOT repaired

**A check from behind that CONTACTS THE HEAD is redirected out of the checking-from-behind rule, and at
the floor neither destination ejects you** — one is a bare minor with a misconduct **positively
forbidden**, the other a plain misconduct that returns you to the ice, and a third route sends minimal
contact out to roughing. ⚠️⚠️ **So the most dangerous version of the hit is the one the supersession
makes cheapest, and the corpus says the opposite at ten sites, one a Key focus bullet voiced alone.**

✅ **Direction: the corpus is OVER-SEVERE, so no reader is endangered and it does not block.** **What is
wrong is the ENUMERATION.** ⚠️⚠️ **CONSTRAINT: Hockey Canada publishes NOTHING reconciling the two
rules — neither rule's Interpretations mention the other. The collision is in the book and must not be
resolved in the reader's head by us.**

**Two clauses are absent from `content/` entirely, both safety-relevant, both additions rather than
corrections** — including one in **USA Hockey's front matter with no rule number**, pricing
post-whistle contact above the shoulders. ⚠️ **An agent handed a rule number would never have found
it.**

---

## Method findings

- ⚠️⚠️ **FLATTENING MANUFACTURES FALSE POSITIVES, not only cures false negatives.** Sweeping the British
  shelf for the offside act, `plane` matched *"emergency action **plan** (**EAP**)"* → `planeap`.
  ✅ **The only cure is reading every hit. No British document writes an on-side determination —
  confirmed twice, by a label sweep and an act sweep.**
- ⚠️ **`ADDED '.'` from `check_quote_drift` has TWO populations that look identical in its output:** a
  **truncation** that closes a quotation before a harsher tier (this round's signature Critical), and a
  **punctuation substitution inside an enumerated list** — a period for a semicolon, where the
  "continuation" is the next list item. ✅ **One chased here was the second kind: cosmetic, neutral, and
  the claim it supports is true.** **The discriminator is whether the text after the closing mark
  changes what the reader owes.**
- ⚠️ **A census over this claim has now flagged the EXEMPLAR file twice.** ✅ **The agent named why:
  the pattern keys on two book names with no numeral nearby, and *"a complete sentence looks identical
  to an incomplete one in that respect. A grep cannot separate them; only reading can."***

---

## ⚠️ Four supplied wordings would have shipped defects this round, and agents refused all four

**The fourth was written by the safety reviewer that found the defect it reproduced:** its sketch
attributed Hockey Canada's *"goal frame"* to CARHA, whose word is *"goal net"*. ✅ **The agent wrote a
generic destination with a per-book gloss instead.**

✅ **The rule has now earned itself four times: specify the DEFECT and the CONSTRAINT; let the agent
that has read the document write the sentence.**

**And two coordinator premises were refuted in this wave alone** — *"nobody has looked"* (eleven
existing sites) and *"this takeaway is the listener's only carrier"* (three other spoken layers carry
the claim **and** an instruction). ⚠️ **The second would have justified a bigger edit than the defect
warranted.** **Running total: ELEVEN wrong coordinator premises across the session, every one caught by an agent or
a gate — and the eleventh is the one narrated in this record's own dimension statement: I asserted this
record carried a coverage statement when it did not, because I had written one into the PREVIOUS
record.** ⚠️ **A gate caught that this count itself said *"ten"* while the record narrated the eleventh
two sections below — the exact shape this record is about, committed by this record.**

---

## Shipped knowingly

- ⚠️ **`zone_entries.md` speaks a stale caption** (above). **Conservative direction; recorded with the
  repair constraints, including that the caption may be a shared constant and that editing a `.mjs`
  requires a diagram rebuild before `check_absolutes`.**
- **A fourth restatement of an instruction was DECLINED** where three spoken layers already carry it.
  ✅ **The agent flagged it for a ruling rather than deciding silently; the ruling is that it stays
  declined, because a third restatement is one more place a correction can fail to reach.**

---

## What this wave could not find

- **What OTHER rule prices the act — still open, one level in.** Every agent verified the rules it was
  given. ⚠️ *"If one of those makes a WIDER limb mandatory, the takeaway is still an understatement and
  my repair only widened the destination."*
- ⚠️⚠️ **A narrowing with NO LEXICAL TRACE.** The blocking takeaway was found by grepping
  *"cannot protect|unable to protect"*. ⚠️ ***"A sentence stating the same mandatory match penalty
  without either phrase — 'drive him into the wall and you are gone' — would have passed me entirely,
  in this file or any other."*** **There is no tool for this.**
- **The plane qualifier is a CLAIM, not a line, and `rink_map.md` was one of its sites.** Candidates
  named and unreached: `body_contact_and_battles.md`, `zone_entries.md`, `language_and_glossary.md`,
  `time_and_space.md`.
- **No agent rendered speech in this wave.** Every *"voiced alone"* judgement rests on known renderer
  behaviour plus coordinator measurements taken on other files, not on a render of these four.
- **The IHUK *Officiating Guidance*, the IIHF Disciplinary Code, and the EIHL Roster Regulations and
  DOPS section are all cited by documents on disk and are NOT on disk.** ⚠️ **British supersession runs
  through the first of those. Each needs a fetch, not a sweep.**

---

## Dimension coverage — D1–D15, declared

⚠️ **A commit gate blocked this wave on C3 because this record carried NO coverage statement. The
coordinator asserted one was present; it had been written into the PREVIOUS record and never carried
over.** ⚠️ **Silence on a dimension is the failure mode. Keyed against the table at
[`review_process.md`](../review_process.md).**

**CHECKED:**
- **D1 Rules accuracy · D2 Rules travelling without exceptions · D3 Rule-set divergence** — every
  changed claim re-derived from `sources/` by a commit gate and again by the `facts-reviewer`:
  NHL 83.1, IIHF 83.1 (**2025/26 v1.1**, the corpus's edition), PWHL 85.1 (by heading), USA Hockey
  630(a), Hockey Canada 6.11 preamble, Hockey Canada 7.5 preamble and (a)–(e), CARHA 53(a)/(b) + Note,
  CARHA 72(c) + both Notes.
- **D5 Provenance** — every quotation located in the book it is credited to; the new CARHA trailer entry
  quotes 72(c) Note 1 verbatim with its scope and an explicit *"Only Rule 72 was read here."*
- **D6 Negative existence claims** — `plane` scores **0** in `carha.txt` raw AND flattened; `own side`
  occurs twice and the second is an icing Situation. ⚠️ **Tested rather than accepted, and the
  conservative reading shipped.** **Also: the British shelf swept for the offside ACT, three non-zero
  hits all read and irrelevant — one a flattening artefact (`plan (EAP)` → `planeap`).**
- **D9 The summary layer** — a `safety-reviewer` found the blocking narrowing in **Key Takeaway 9**, the
  layer voiced alone, ~200 lines below its own repair. Repaired.
- **D10 The key-facts layer** — a `facts-reviewer` read **all four changed lines**, their 23 surrounding
  lines, and **9 sibling `7.5(c)` facts lines across 8 other documents**. **Ruling: nothing blocks.**
  One Major recorded below.
- **D11 Reader safety** — a `safety-reviewer` on all four files, dispatched because the wave changes
  penalty tiers on a contact act. **It blocked; the block is repaired and re-verified independently by
  a gate and by the coordinator against both books.**
- **D12 Read-aloud integrity** — every changed line judged as voiced alone; the split lines confirmed to
  stand alone individually; one Minor recorded (*"there"* reading as a place rather than a rule set).
  ⚠️ **No agent RENDERED speech for these four files — see the limits below.**
- **D14 Structure, style, cross-links** — `check_links.py` passes and the build reached `check:links`
  with all internal links and anchors resolving. ⚠️ **Prose style not reviewed.**
- **D15 The rendered site** — `site/` is unchanged by this wave, so no `site-reviewer` is owed. **The
  build was verified by ARTEFACT: the repairs' own text is present in `site/dist` for three documents,
  which is stronger than the `dist` mtime (set by `clean:cache` at step 1).** `check_marker_pairs.py`
  clean; `check_callout_flow.py --panels` shows no panel demoted.

**DECLARED OUT OF SCOPE, with reasons:**
- **D4 Citation integrity.** No `source-verifier` ran. **No new external URL enters the corpus** — the
  one URL added to a trailer is byte-identical to its existing uses. Every new quotation is local
  primary text, covered by D1–D3. **A link-rot pass is an open row.**
- **D7 The cardinal rule.** Not swept. The added text is tariffs, book scopes and one instruction
  carried from a sibling; no coaching choice is presented as a law of hockey in the changed lines.
  ⚠️ **A declaration, not a clearance.**
- **D8 Numeric ownership.** The only owned number in a changed line is unchanged and retains its
  owner's scope, verified by a gate. **No new figure was added to `content/`.**
- **D13 Folklore.** Every new sentence carries a book and a rule number. **Not separately swept.**

⚠️⚠️ **D4, D7, D13 and the D8 sweep are the honest position, NOT a pass. Treat them as UNEXAMINED for
this diff.**

---

## D10's ruling, and the gate's framing corrected

**The gate asked whether two facts lines, each individually true, together frame a mandatory ejection as
conditional — because Hockey Canada 7.5(c) has TWO paragraphs and the second carries no destination
condition.**

✅ **RULING: they omit the second route without EXCLUDING it, and it does not block.** Neither line
carries an exclusivity operator — no *only*, *unless*, *requires*, *provided that*. One reads *"…is
mandatory **where** the opponent cannot protect or defend themselves"*, a sufficient condition, and its
own first clause asserts non-exclusivity in the same breath (*"8.8 is **not** Hockey Canada's only
slew-foot rule"*). The other opens *"**Once** a player is driven…"* — **a trigger, not a limit.**

⚠️ **AND THE REVIEWER CORRECTED THE GATE:** the gate read one line as dropping the boards limb. **It
does not — the destination is stated earlier IN THE SAME SPOKEN LINE** (*"…pushes them into the
boards"*), so a listener hears the destination and the tariff in one `<p>`. ✅ **A gate reading a diff
saw a clause it thought absent; the layer specialist reading the whole line found it present.**

### 🔴 The Major it recorded, permissive IN EFFECT but not BY ASSERTION — shipped, and here is the reasoning

**Hockey Canada 7.5(c)'s second paragraph — a mandatory match for a deliberate-injury check from behind,
with no destination condition — is absent from `risk_management.md` at three sites**, including a
Common Mistakes bullet voiced alone, and from four sites in two other documents.

⚠️⚠️ **What makes it conspicuous: the same block does exactly this job for the OTHER book three lines
up** — *"CARHA's discretionary slew-footing match in 86(b) is not the book's ceiling — Rule 48(a) makes
a Match penalty mandatory…"* — **and four sibling documents already carry Hockey Canada's parallel limb
in their own facts layer.** ✅ **So the corpus has settled how to state this, and this is the document
that does not.**

**Why it ships:** ✅ **the specialist for this layer ruled explicitly that it does not block** — no
exclusivity is asserted, and every other line in the block tells the reader the act ejects.
⚠️ **Neither line has headroom (10 and 8 characters), so the repair is a NEW LINE or a SPLIT, never a
trim — and it is a CLAIM at seven sites across three documents, which is a wave, not a patch.**
⚠️ **`defending_the_rush.md:299` is the in-corpus precedent wording to check any draft against.**
⚠️ **If the owner would rather this did not ship, this is the item to overrule.**

---

## Added to the limits

- ⚠️ **NO AGENT RENDERED SPEECH FOR THESE FOUR DOCUMENTS.** Every *"voiced alone"* judgement in this
  record rests on known renderer behaviour and on `check_tables.py`, not on a rendered chunk. **In
  particular, whether the Common Mistakes bullet and the facts lines share a chunk is unmeasured.**
- ⚠️⚠️ **The `facts-reviewer` named the method's standing gap against itself, and it is round 20's
  declared weakness unrepaired:** *"The omission I found was ADVERTISED — by the block's own parallel
  CARHA line three rows up and by four sibling documents saying the opposite explicitly. A block whose
  section omits a limb that no sibling states and no neighbouring line rhymes with would have passed
  me."*
- ⚠️ **And its negative is a true negative on the rules it looked up:** Hockey Canada **Rule 7.1
  (Attempt to Injure or Deliberate Injury)** was on the contents page and not opened; CARHA 53(a)'s
  *"A Match penalty could also be assessed under this rule"* was read but not traced. ***"The likeliest
  next defect is a THIRD route to the same ejection in one of those two books."***

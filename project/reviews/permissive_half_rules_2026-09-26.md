# Seven permissive half-rules, and three repairs that made more — 26 September 2026

**Sixteen content documents. EIGHT CRITICALS, every one permissive, every one the same shape: a rule
quoted verbatim, drift-free, and stopped one clause short of a mandatory tier.** ⚠️⚠️ **Three of the
eight were CREATED BY REPAIRS TO EARLIER CRITICALS, and the EIGHTH WAS CAUGHT BY THE COMMIT GATE, in a
section this round had already rewritten twice.** **Twenty-six coordinator errors;
twenty-five caught in briefs by agents told to refute them.**

---

## The claim family: a verified quotation of an incomplete rule reads as a complete one

Every Critical below was found the same way — by **naming the act and asking what else the book says
about it**, rather than by checking the rule number the corpus cites. ⚠️ **`check_quote_drift.py` is
structurally blind to all of them: the characters inside the quotation marks are real.**

| # | Where | The clause that was missing |
|---|---|---|
| 1 | `defending_the_rush.md` | **CARHA 53(b)** — a **mandatory match penalty** for a hit from behind *"into the boards or goal net"*, with a Note barring substitution. The section's own geometry. |
| 2 | `defending_the_rush.md` | **CARHA 49(a)** is the violence test; the corpus quoted 49(b) and stopped one sentence short of *"[t]he Major and/or Match penalty applicable to the rule, will be assessed in the normal manner."* |
| 3 | `defending_the_rush.md` | **Hockey Canada 7.5(c)** — word-for-word CARHA 53(b)'s geometry, a mandatory match penalty, missed because the brief named CARHA. |
| 4 | `defender.md` | **CARHA 75(b)** is a minor on **any player**; the corpus said the act reached a skater only through a **bench** minor. |
| 5 | `puck_handling.md` | A named two-book ceiling list excluding **USA Hockey 622(b)**, a mandatory major the moment a hand reaches a cage. |
| 6 | `forechecking_systems.md` | **CARHA 63(b)** makes the major mandatory on injury, and **30(a)** makes any CARHA major the game. |
| 7 | `special_teams.md` / `goaltender.md` | **USA Hockey 607(b)** — *"shall be assessed … recklessly endangers an opponent as a result of charging"*. No crease condition, no injury condition. The count was two; it is three. |
| 8 | `defending_the_rush.md` → `body_contact_and_battles.md` → `defender.md` | **PWHL 52.1's penalties block.** The corpus closed the *"illegal hit"* list at three limbs; the rule's own block adds two more, and **limb (ii) — *"[a]ny move by a player to step or glide into an opposing player"* — is the LOWEST-THRESHOLD limb in the rule**, with no directional test and no lane test. **It is precisely the act of finishing an angle with your body, which is the thing the sentence granted.** |

---

## The three guards that actually found things

**1. READ THE DOCUMENT'S OWN OTHER LAYERS.** Critical 4 was caught *only* because the file's own facts
block cited CARHA 75(b) and contradicted the new body sentence. The reviewer said plainly it had no other
method. ⚠️ **The absence of this guard CAUSED three more:** the CARHA holding ladder was already complete
in `body_contact_and_battles.md:1532`; the facemask limb already correct at `:1602`; the goaltender-charging
answer already in `goaltender.md` at seven sites. **Every re-derivation came out shorter than the
sibling's and lost a limb.**

**2. NAME THE ACT, NOT THE RULE.** A true negative inside one rule number produced Criticals 1, 3, 6 and 7.
✅ **And it cuts both ways: `facemask` scores near-zero in three books because they call it the *facial
protector* and price it under ROUGHING — the PWHL's floor being a mandatory ejection at *"a minimal degree
of violence"*.**

**3. RE-READ YOUR OWN REPLACEMENT TEXT.** Every agent that did found defects in it. The sharpest: an
ellipsis that swallowed *"will not be allowed"* and inverted a prohibition into a permission, with every
character inside the marks real.

---

## What the round establishes about method

### A pattern count is not a defect count
Three corpus-wide alarms were raised by careful agents and **all three were false.** *"CARHA 49(b) appears
nowhere"* — it is in five documents. *"The `(c)(ii)` renderer defect is corpus-wide"* — 450 pattern hits,
286 renderable lines, **zero** mangles. *"`uk_rules.md` is the last stale British claim"* — it is the
reference implementation. ⚠️ **An agent's claim about a file it does not own is a hypothesis.**

### Narrowing before briefing prevented a destructive wave
The step-or-glide clause has ~54 sites in 16 documents. **42 are scoped *"in women's hockey"*, which
reaches a PWHL reader correctly.** The eight that matched a count pattern were read: **eight false
positives** — six were Sources trailers, one counted IHUK Rules of Competition, one was a conditional.

### Raw grep is not enough, and a flattened copy is not optional
**`grep "not required to move in order to let an opponent proceed"` returns ZERO in every book. All six
line-break it.** ⚠️ **A verifier working from raw grep would have reported the corpus's NHL, IIHF and PWHL
citations UNVERIFIABLE — a false negative that manufactures a defect.**

### Three reasons a closed book count is CORRECT
It names its members in the same sentence; it is **provenance** recording what was read; or the document
is **scoped by design** and says so (`faceoffs.md:221`). ⚠️ **Roughly 260 frames were read across seven
files and the large majority were correct. Never sweep this pattern.**

### The repairs that were REFUSED
- Raising *"all four rule books"* to six on bench-leaving **would have been a Critical** — CARHA 70(c) and
  Hockey Canada 10.4(e)(ii) both condition the later-player limb.
- *"CARHA is harsher at the first player off"* — false; **USA Hockey 629(a) is harsher**, a major to
  *every* player who leaves.
- A stale numeral in a **pointer** was dropped rather than updated: *"a numeral in a pointer goes stale the
  moment that document gains a book."*
- A voiced *"four"* was **not** raised to six, because the bullet's body genuinely walked four books.

---

## The files in this commit

| File | What changed |
|---|---|
| `content/systems/defending_the_rush.md` | Criticals 1–3. CARHA 53(b) and Hockey Canada 7.5(c)'s mandatory match penalty at four sites; CARHA 49(a) as the violence test in the Overview and body; USA Hockey 608(b) corrected from *"reach"* to mandatory; **the British checking answer** — IHUK's Rules of Competition, U10/U12 non-checking, U14 upward and the adult NIHL checking, WNIHL non-checking |
| `content/positions/defender.md` | Critical 4. CARHA 75(b) as a player minor; the clipping superlative narrowed after testing; Key Takeaway 2's permission restored to the inference the body calls it |
| `content/technique/puck_handling.md` | Critical 5. All six books price the cage, four above a minor; the skate-trap counterweight into the facts layer; CARHA 74(b)'s personal minor with its *"unless they are being checked"* carve-out |
| `content/systems/forechecking_systems.md` | Critical 6. CARHA's 63(a)/63(b)/30(a)/32(d) ladder carried from its sibling; the PWHL strength-move permission reunited with its conditions in one chunk; a Sources trailer that contradicted the body |
| `content/systems/special_teams.md` · `content/positions/goaltender.md` | Critical 7. Three mandatory books on three different triggers, at eleven sites across both files |
| `content/technique/body_contact_and_battles.md` | The step-or-glide prohibition is **two books, both women's rules**; the PWHL's head-butt attempt tier, the harshest of the six; CARHA 48(b)'s flat match penalty |
| `content/off-the-ice/team_play_and_culture.md` | CARHA restored to the bench-leaving claim at five layers with the fight-versus-altercation split intact; *"bare game misconduct"* corrected for the penalty box |
| `content/systems/offensive_zone_play.md` | USA Hockey folded into a five-book partition that read as exhaustive; the reference-table finding |
| `content/technique/shooting.md` | The PWHL's high-stick minor; a demonstrative the block's own count had outgrown |
| `content/positions/center.md` · `content/positions/winger.md` | The unscoped superlative deleted rather than scoped; CARHA's two possession limbs |
| `content/foundation/rules_primer.md` · `content/foundation/uk_rules.md` · `content/systems/faceoffs.md` · `content/hockey-iq/playing_without_the_puck.md` | Book-pair slashes voiced as *"or"*; the house phrase; a *"which"* whose antecedent made a British **minor** eject you |
| `project/plans/OPEN_ITEMS.md` | The round's findings, the twenty-six coordinator errors, the refuted alarms and the next-wave rows |

---

## Dimensions

**D1–D15 addressed.** D3 **PARTIAL** — local extractions only, no network refetch. D15 **OUT OF SCOPE**.
⚠️ **D13 partial: the site was built and `--bare` run (5 glyphs, 3 pages, none in a touched file), but no
browser review was performed.**

## The eighth Critical, and what it says about the other seven

**The commit gate found it, in a section two earlier waves had rewritten.** ⚠️ **A LAYER GAP, not a
research gap — `defending_the_rush.md:307` and `:220` already carried the limb correctly.**

⚠️⚠️ **AND IT PROPAGATED THROUGH FOUR MORE SITES THAT NO BRIEF NAMED:**
- **A Sources trailer asserting its own completeness** — *"read whole rather than for its limiting
  half"* — then stopping at the same three limbs. ⚠️ **It carried NO exclusivity marker, so no pattern
  search would find it.** **The gate had declared exactly this blind spot against itself: *"a version of
  the same omission phrased without an exclusivity marker would have passed me."***
- **`body_contact_and_battles.md:171`**, which closed the list explicitly (*"are all illegal hits"*) —
  ⚠️ **and which `:226` CITES AS ITS AUTHORITY while itself carrying the limb correctly. The sound layer
  rested on the short one.**
- **`defender.md:414`, twice**: the flagged list, **and the paragraph's own CONCLUSION about *"the one
  permission that reaches a carrier in possession at all"*** — ⚠️ **which the repairing agent judged the
  worse of the two, because it told a defender the permission ran further than it does.**

✅ **A corpus-wide `52.1` sweep then confirmed no closed-list framing survives anywhere else.**

### ⚠️ THE PATTERN ACROSS ALL EIGHT
**Every one was a verified quotation of an incomplete rule — and in FIVE of the eight the corpus ALREADY
HELD THE COMPLETE ANSWER somewhere else**: in a sibling document, in the same file's facts block, or in
the very paragraph that cited the short version. ⚠️ **The failure is not research. It is that a rule
claim was written without reading what the corpus already said about that rule.**

## What this round could not have found

- **A layer BUILT ON an old premise that never names a book.** Named by four reviewers independently as
  the shape none of them could search for.
- **Whether each book's answer is its WHOLE answer.** Every Critical came from that gap and the last one
  is a count of the *charging* rules, not of every rule that mandates an ejection.
- **A defect in the ~25 *"four books"* sites in `body_contact_and_battles.md`**, which spot-checks suggest
  are mostly a deliberate house frame. **Needs a per-section audit, not a sweep.**
- **The EIHL's body-checking status**, which nothing on disk settles, and **Appendix D**, an alternative
  U12 playing code nobody has opened.
- **Whether a legal technique is safe.** Every finding here is about what a book prices.

# The tactics priority — wave 1, 23 September 2026

The owner asked whether the work was still focused on tactics and strategy. **The honest answer was
PARTLY — it had drifted**, and this wave is the correction plus the machinery to stop it happening
silently again.

## Why it drifted, measured rather than asserted

⚠️⚠️ **Correctness work is LEGIBLE and tactics work is NOT.** A checker finds a wrong rule number;
nothing blocks on a document that teaches nobody to play. **So the tooling itself pulls every wave
toward rules work.** Measured proof: a correctness wave grew `goaltender.md` Common Mistakes from
**4,400 to 4,685 rules-bearing words in one day.** An agent named it against itself:

> *"Every repair I made ADDED words to layers the owner has called rules-heavy. **A correctness pass
> is structurally unable to notice that it is working against the tactics ratio**, and mine did."*

## 🔴 THE METRIC WAS WRONG, AND FIXING IT WAS THE WAVE'S MOST IMPORTANT WORK

⚠️⚠️ **`check_tactics_ratio.py` CANNOT SEE THIS REPAIR AND JUDGING A WAVE ON IT PUSHES THE NEXT ONE
TOWARD STRIPPING** — which is how this corpus loses a sole-carrier tariff. Reported by the agent
whose own numbers went the wrong way:

> *"Rules-bearing WORDS went UP in both (+78 and +73), and that is the honest result of doing what
> the brief asked… **every word I wrote to make a bullet lead with a tactic is counted as a rules
> word.** If a future wave is judged on the number it will be pushed back toward stripping."*

**So `scripts/check_instruction_first.py` was written**: skip the bold name, read the first sentence
of the body, and ask whether it is an instruction or a tariff. ⚠️ **Its first three versions were all
wrong, and every bug was found by an agent using it against its own result:**

1. **A `.**` lookbehind failure** — a bold instruction ends `.**`, so the splitter swallowed the
   instruction AND the tariff behind it. **Four of seven first-run hits were false positives.**
2. **The bold name is skipped — right for Common Mistakes (the name is the MISCONCEPTION), wrong for
   Key Takeaways (the name IS THE TAKEAWAY).** KT6 named *"Never duck or crouch to avoid a check"*
   scored tariff-first.
3. **It could not split on a COLON** — and ⚠️ **the first attempt at that fix ALSO failed, because a
   colon takes a LOWERCASE continuation while the full-stop branch must demand a capital to avoid
   splitting *"69.3"*.** **Caught by testing five hand-written cases rather than trusting the drop.**

⚠️⚠️ **AND THE FIRST VERSION OF THIS RECORD SHIPPED FIGURES MEASURED WITH THE BUGGY TOOL. A commit
gate re-ran every one against a clean `git archive HEAD` and NONE reproduced.** The *"true baseline
of 112 / 9%"* first written here was not a baseline at all — **it was the POST-WAVE figure**, and the
gate showed the arithmetic: `101 − 2 + 13 = 112` exactly. ⚠️ ***"A number copied out of its owner goes
stale"*, recorded three times in this project's own instructions, reproduced in the permanent
evidence for this wave.** **Corrected below from a re-measurement on a quiet tree.**

⚠️⚠️ **AND A FOURTH BUG IS STRUCTURAL AND WILL NOT BE FIXED. Splitting a unit RAISES the count with
no text changing** — an agent split a 547-word Key Takeaway into three kernels and watched **8 → 10**,
returning to 8 only after writing openers for the new units. ***"The metric structurally rewards
large units, which is the opposite of the kernel rule."*** **Written into the docstring: never judge
a splitting wave on this tool.**

## What the wave actually did

**Measured with the FIXED tool, HEAD (`903d771`) against the quiet tree:**

| document | tariff-first before → after |
|---|---|
| `rules_primer` | **26 → 19** |
| `uk_rules` | **13 → 2** |
| `body_contact_and_battles` | **13 → 1** |
| `team_play_and_culture` | **10 → 0** |
| `faceoffs` | 7 → 2 |
| `equipment` | 6 → 3 |
| `goaltender` | 4 → 2 |
| `center` · `shooting` | 3 → 1 each |
| `offensive_zone_play` | 2 → 1 |
| **CORPUS** | **146 of 1,226 (11%) → 91 of 1,228 (7%)** |

⚠️ **`team_play_and_culture` reaching 0 is a FLAG, NOT A SUCCESS** — the tool's docstring says the
target is never zero. Its agent said so itself and asked for a human read.

⚠️ **NOTHING WAS STRIPPED IN ANY OF THEM.** ⚠️⚠️ **BUT *"total words rose in every touched layer"*
WAS FALSE AS FIRST WRITTEN, and the gate caught it: `goaltender.md` Common Mistakes fell 114 words**
when a mask-stoppage ladder stated **four times** was cut to a cross-reference. **The gate then read
every demoted limb by hand and found them all carried** — HC 11.1's ladder and both Note 1s at `:671`,
NHL/IIHF 39.4(ii) at `:676`, the mask ladder at `:1220`, `:1259`–`:1274` and KT15 — **and confirmed the
new in-document pointer resolves.** **Likewise `equipment.md`'s Key focus pointer: its target section
carries both the EIHL Casebook 9.12 minor and the IIHF 9.5 ladder.** In
`body_contact_and_battles.md` **all fourteen Common Mistakes hits already contained their
instruction as the LAST clause — it was moved, not written.**

✅ **The single best result:** `rules_primer.md`'s hit-to-the-head bullet runs **1,008 words**, opened
*"In the NHL, and only where it fell short of an attempt to injure —"*, ⚠️ **with its safety limbs —
head up, chin off your chest, never duck, never your back to the boards — at WORDS 700 TO 950.**
It now opens with them.

## Files in this wave's commit, each named

⚠️ **Added after a commit gate found TWO staged content files named nowhere in this record.** Their
findings had been written into `project/plans/OPEN_ITEMS.md` — **the file this repository reserves
for REMAINING work** — so the coverage statement did not demonstrably reach them.

**Re-aimed (Common Mistakes / Key Takeaways ordering):** `foundation/rules_primer.md` ·
`foundation/uk_rules.md` · `technique/body_contact_and_battles.md` ·
`off-the-ice/team_play_and_culture.md` · `systems/faceoffs.md` · `off-the-ice/equipment.md`
(front layers too) · `positions/goaltender.md` · `positions/center.md` · `technique/shooting.md` ·
`systems/offensive_zone_play.md`.

**Body-layer puckless-coverage repairs — the two the gate found unnamed:**
- **`hockey-iq/playing_without_the_puck.md`** (+130 words) — §*"Stick in the lane, body between man
  and net"*: the reader's man is puckless and nothing conditioned the instruction.
- **`systems/defending_the_rush.md`** (+300 words) — §*"Come back on the defensive side of your
  man"*: the middle-lane driver, puckless by the document's own words. ⚠️ **Neither contains the
  phrase the routing census searched for, which is the whole lesson of that wave.**
- **`positions/winger.md`** — §Backchecking, the same defect, repaired at four layers.

**Non-`content/`:** `scripts/check_instruction_first.py` (new, plus two bug fixes) ·
`CLAUDE.md` (⚠️ **one line — adding the tool to the scripts list; a claim that it carried three word-count
repairs was MY error, refuted by the gate**) · `project/plans/OPEN_ITEMS.md` · this record.

---

## 🔴 Three sole carriers found and preserved — why stripping stays banned

- ⚠️⚠️ **USA Hockey Rule 405(c) exists at ONE line in `goaltender.md`** — *"suspends you from all USA
  Hockey games and practices until their case has been dealt with by the proper authorities"* — and
  **the body's own "who pays" paragraph never reaches it.** ***"Had I compressed that bullet on a
  word count I would have destroyed it."***
  ⚠️ **And the false negative that nearly hid it: `grep '405(c)'` over the SSML returns 0 because the
  renderer EXPANDS the numeral. Grepping a rule number against speech output is worthless.**
- **NHL/IIHF 61.3/61.4/61.5** and **CARHA Rule 55**, both confirmed double-carried.

## 🔴 Safety defects found while re-aiming, all repaired

- **`body_contact_and_battles.md:495`** claimed a hit satisfying the IIHF envelope *"does not offend
  the other three"*. ⚠️ **It is still illegal under PWHL 52.1 and CARHA 49(a).** Scope limitation
  added; no tariff, no claim.
- ⚠️ **`:204` is a ```facts``` line VOICED ALONE:** *"Holding a position… is written as legal in three
  of the four books."* **CARHA 49(a) writes the CONTRARY DUTY — to AVERT contact** — and ⚠️ **the
  count was wrong in BOTH directions: PWHL 57.1 GRANTS it in the same words.** Four grant it, Hockey
  Canada is silent, CARHA writes the opposite. **No count now written.**
- ⚠️ **CARHA 50(a) makes ACCIDENTAL head contact a minor** and was in no layer. ⚠️⚠️ **The repairing
  agent REFUTED my placement: I said to add it to the head-contact ladder in §5 — but §5 is scoped
  *"applies only in games that permit body checking"* and CARHA HAS NO CHECKING DIVISION.** It went
  beside CARHA's accident defence instead, *"under the line 50(a) actually limits."*
- **`winger.md` §Backchecking** told a reader to cover a puckless trailer with no conditioning at all.
  Repaired at four layers with **PWHL 57.1** correctly cited.

## ⚠️ THE ROUTING LESSON — a phrase census sent an agent to seven CORRECT sentences

I routed a wave by grepping *"feet and your stick"*. ⚠️⚠️ **Every site the grep found was correct —
they are all about a puck CARRIER, and interference does not bite on a player in possession. Both
genuine defects were in sections that never contain the phrase.**

> *"The discriminator was never the PHRASE, it was **'who is the reader covering?'** — and no grep
> can answer that. **Only reading can.**"*

✅ **And two whole documents were correctly left untouched because they ALREADY carried the repair** —
adding it would have been *"a fourth restatement of the same ladder."*

## 🔴 The restatement census — four to seven layers per ladder

| ladder | layers |
|---|---|
| head contact | **6–7** |
| checking from behind · charging · clipping/kneeing · turn-into-a-hit | **5 each** |

⚠️⚠️ **`check_layer_echo` reports 0.7–13.2% for that document — LOW AND MISLEADING, because the
restatement is STRUCTURAL, NOT LEXICAL.** **Nothing was demoted; this needs one agent per ladder with
a carrier list.**

## ✅ The standard for stale counts, set by an agent and now binding

*"All five rule sets"* turned out to be an undercount too — **CARHA Rule 72(c) Note 1 carries the
NHL's own test.** Rather than ship a number that goes stale the moment another book lands, it
**removed the count**:

> *"A lifted trail skate is onside under the NHL, the IIHF and the PWHL but offside under USA Hockey
> 630(a) and Hockey Canada 6.11 — **two books, and you need to know which is yours.**"*
> ***"The actionable half is WHICH BOOKS DIFFER; the count of the rest changes nothing a player
> does."***

## ⚠️ The sixty-word rule, adopted in place of a word cap

A 633-word Common Mistakes bullet renders as a **463-word single `<p>`** — three minutes of unbroken
speech — and **eight other units in the same file sit between 465 and 500.** The reviewer's judgement:

> *"**Length does not make a late caveat dangerous, it makes it UNRELIABLE**… any caveat that changes
> what a player does belongs in the **first sixty words** of its spoken unit. A 400-word ceiling
> would be met in practice by **trimming a tariff**, which is a worse outcome than the length."*

**Adopted. No checker gains a word cap.**

---

# Coverage statement — TACTICS WAVE 1

| Dimension | Status |
|---|---|
| **D1–D3** rules accuracy, exceptions, cross-book divergence | ✅ **CHECKED — C4 CLOSED BY AN INDEPENDENT `rules-verifier` AFTER THE GATE REFUSED SELF-VERIFICATION.** **~45 rule claims re-derived across 8 books**, and ⚠️ **every MOVED tariff it sampled CONFIRMED — checking from behind, boarding, charging, high-sticking, goalkeeper interference, delay of game, six fouls across six files.** **The exposure this record named against itself did not materialise in the sample.** It went past its brief: **counted IIHF Appendix IV Table 6 at exactly 20 rows**, read **USA Hockey Casebook Situations 8/10/11/12** *"because CLAUDE.md records this rule as having been got wrong three times"* and found the new bullet states all four conditions, and **attacked the offside claim *"hard because it looked wrong"* then confirmed it.** ⚠️ **THREE DEFECTS FOUND AND REPAIRED, and TWO were propagation failures where this corpus already had the right words elsewhere:** `equipment.md` carried a **retrieval bar onto the helmet clause** that In-House 9.8 does not have (the same document is correct 450 lines later); `center.md` said the IIHF and PWHL *"word that sentence the same"* when **all three books use different pronouns and the IIHF adds quotation marks round five defined terms** — repaired with `winger.md`'s existing *"in their own pronouns"*; and **CARHA's *"duty in the opposite direction"* overstated the divergence, because Note 2 to Rule 66(a) grants *"stand their ground"***. ⚠️ **The repairing agent found a FOURTH pronoun site and a THIRD CARHA layer neither the verifier nor I named, and put the ENTITLEMENT BEFORE THE DUTY so a listener hears what they may do first.** ⚠️ **I then tested the one limit it declared — whether 9.8's silence on retrieval was an extraction artefact — and it is not: the whole file contains ONE instance of `retriev`, at 9.12, and the 9.8 window extracts cleanly with its bullets intact.** |
| **D1–D3 (superseded)** | ⚠️ **PARTIAL — NO `rules-verifier` RAN ON THIS DIFF, and the gate was right to say so.** The first version of this row claimed citations were *"re-derived by their authors"* — **self-verification, which satisfies none of C4.** ✅ **What DID happen: the commit gate independently re-derived every new or changed rule number it could identify, and ALL HELD** — CARHA 49(a), 50(a), 52(a)+Note, 52(b), 66(a)(1); PWHL 43.2, 52.1, 57.1, 10.4; NHL/IIHF/PWHL *"stick is not utilized"*; IHUK In-House 9.8, 9.12, 10.3; HC 8.3 preamble. ⚠️ **That is evidence, not a substitute for the dimension.** ✅ **CHECKED** — every new citation re-derived from `sources/` by its author. ⚠️ **My briefs were refuted SIX times: PWHL 83.1-for-83.2, 84.1-for-65.8, 70.3-for-58.4, 27.6-for-27.7, a non-existent PWHL 72.3 divergence, and three stale unit counts.** **Every one was caught by an agent reading the source instead of pasting the brief.** |
| **D4–D5** citation integrity, provenance | ✅ **CHECKED** — trailers updated wherever a book was newly cited. ⚠️ **Two Key Takeaways were left tariff-first DELIBERATELY because their openers are provenance disclosures** (*"Computed for this document from the NHL's official statistics"*) — **demoting them would make the corpus look more confident than it is (non-negotiable 4).** |
| **D6–D9** cardinal rule, summary layers, numeric ownership, negative existence | ✅ **CHECKED.** ⚠️ **Overstatements caught by their own authors in EVERY wave**, all in the same direction: *"every book makes body position conditional on the stick"* (three do), *"a restraining minor"* (NHL 56.3 writes a major), *"changing your lane LATE"* (**"late" is not in the rule, which reaches lane OR FOOT SPEED**). ⚠️ **One failure was INVENTION, not overstatement** — a technique the document carries nowhere, written to fill a lead. |
| **D10 / D12** the ` ```facts ` layer | ✅ **CHECKED.** ⚠️ **Three blocks at 8/8 coaching facts were solved by the `Rule:` EXEMPTION rather than by eviction**; a line measured **389/300 was SPLIT**, and lines at 294 and 192 were **reworded down rather than trimmed of a caveat.** |
| **D11** safety | ✅ **CHECKED** by two `safety-reviewer` runs. ⚠️ **One cleared a sentence its author had flagged AND CORRECTED THE AUTHOR'S DIAGNOSIS** — the generalisation RESTRICTS the reader's own contact, *"a competitive cost, never a penalty or an injury"* — **then found a Major underneath it.** |
| **D13** the spoken layer | ✅ **CHECKED, and it found what nothing else could.** ⚠️ **Marker discipline now has TWO shapes: de-marking a paragraph, and SPLITTING one** — a split nearly deleted two spoken `"Important."`s because each new unit is its own paragraph. **Counted and restored.** |
| **D14** diagrams / captions | ⚠️ **OUT OF SCOPE, declared.** No `site/src/diagrams/` edit. |
| **D15** the rendered page | 🔴 **NOT CHECKED — C10 REMAINS OPEN** from the previous commit and is unchanged by this one. **The browser extension's safety classifier refuses EVERY URL, including `https://example.com`.** **This wave changed no rendering behaviour**, but the nine Key focus pages from `903d771` are still unseen. |

**Mechanical gates, run on a quiet tree with every agent finished:** `check_links` 0 · `check_facts`
850 blocks / 5846 facts · `check_absolutes` 0 · `check_secrets` 0 · **build exit 0, eleven steps,
`check-links` 53 pages / 11,546 internal links all resolving.**

## What this wave could not have found

- ⚠️⚠️ **WHETHER ANY OF THE INSTRUCTIONS IS GOOD HOCKEY.** Every agent said so independently:
  *"I tested whether the instruction is now FIRST, not whether it is RIGHT."* **Roughly twenty
  instruction leads were written this wave. NO HOCKEY-LITERATE HUMAN HAS READ THEM ALOUD, and that
  is the test that matters for this priority.**
- **Whether the tariffs re-ordered around are correct.** They were moved, not re-derived. ⚠️ **And a
  re-ordering repair RAISES the authority of text nobody re-verified** — *"a tier that was already
  wrong at HEAD is still wrong and now sits behind a confident instruction."*
- **~145 *"both books"* / *"four books"* sites corpus-wide**, and the ~25 in one document that
  **declares a six-book universe at its own line 23.**
- ⚠️ **A puckless-coverage instruction sitting inside a section whose HEADING is about the carrier.**
  An agent read by heading and said so: *"a heading can lie… that is precisely how the previous
  wave's two defects survived its grep."*

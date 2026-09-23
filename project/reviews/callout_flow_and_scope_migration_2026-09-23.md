# The callout wave, the uk_rules re-aiming, and a tool that under-counted the whole corpus

**23 September 2026.** `rules_primer.md`, `goaltender.md`, `uk_rules.md`,
`playing_without_the_puck.md`, plus a fix to `scripts/check_callout_flow.py`.

---

## 🔴🔴 THE TOOL WAS WRONG, AND IT WAS WRONG IN THE DIRECTION THAT LOOKS CLEAN

`check_callout_flow.py --panels` is the census that predicts what the site renders as an amber
panel. ⚠️⚠️ **It ran its anchored regex over the RAW line, so every callout nested in a blockquote —
`> ⚠️ …` — scored "not a panel".**

**It is a panel.** `remark-corpus.mjs:615` is `visit(tree, 'paragraph', …)` — **recursive, and
commented as recursive** — and its only skip is a parent that is *already* a callout. **A blockquote
is not**, so the paragraph gets an amber `<aside>` nested inside a grey `<blockquote>`.
⚠️ **Double furniture, which is worse than either.**

⚠️⚠️ **THE DIRECTION IS THE FINDING: it reported ZERO panels for `goaltender.md`. The real figure
was TWENTY-SIX, twelve of them in one section.** ***"An agent briefed off the unfixed figure would
have read '0 panels' as 'this file is clean' — a false pass, silently, in the corpus's densest
tariff area."***

✅ **Fixed; verified against six input shapes; all five modes re-run with no regression.**
**Corpus-wide panel count 270 → 331 — 61 previously invisible.**

⚠️⚠️ **AND IT WAS FOUND BY READING `remark-corpus.mjs`, NOT BY READING THE TOOL.** The docstring
claimed to mirror the plugin *"exactly"* and had done since it was written. ***A comment asserting
fidelity to another file is not fidelity to it.***

---

## ⚠️ THE BRIEFS WERE WRONG AGAIN, AND ONE OF THEM WAS WRONG IN A NEW WAY

⚠️⚠️ **A COORDINATOR BRIEFED "ELEVEN AMBER PANELS IN A ROW" IN `rules_primer.md`. THERE WERE THREE.**
`--stacks` and the default census over-count by construction: **`classify()` files ANY paragraph
opening `**bold**` as "own paragraph"** wherever its marker sits. ⚠️ **The other eight were ALREADY
REPAIRED — the marker had been moved mid-paragraph in an earlier round, which is exactly the fix
this project recommends.**

⚠️⚠️ **AND A MOVE-2 REPAIR REAPPEARS IN `--stacks` FOREVER.** The tool's own header: *"the AUDIO
benefit is real and permanent; the COUNT benefit was an artefact. **Do not bank it.**"*
**So `--stacks` was byte-identical before and after both callout waves, and that is the CORRECT
result, not a failed repair.** ⚠️ **Never brief a callout wave from `--stacks` alone, and never judge
one by whether it fell.**

### Two more stale figures found by agents not looking for them

- ⚠️ **The project instructions said `rules_primer.md` *"flags 106"* in `check_quote_drift.py`.
  It reports 72.** **Replaced with a pointer; the tool takes a file path.**
- ⚠️ **`check_tables.py --near` names `rules_primer.md:820` at 0 rows of headroom** — **the THIRD
  stale line number in the passage whose own heading reads *"NO COUNT IS WRITTEN HERE. RUN THE
  TOOL."***

### And one premise retracted outright
⚠️ **USA Hockey 405(c) is NOT sole-carried by `goaltender.md`** — it is also at `equipment.md:809`.
**Verified independently.** ***"A future brief relying on the sole-carrier premise to justify an edit
there would be relying on a false one."***

---

## What the two callout waves actually did

**Twenty repairs across two files, and NOT ONE ADDED OR REMOVED A WORD OF PROSE.**

- `rules_primer.md`: **eight** panels repaired, `--panels` **26 → 18**.
- `goaltender.md`: **twelve**, `--panels` **26 → 14**, ⚠️ `git diff --word-diff` showing **only ⚠️
  glyphs moving — 12 insertions, 12 deletions.**

✅ **Every marker was MOVED onto the clause stating the hazard, never stripped.** ⚠️ **Six of the
twelve sat on lines carrying EXACTLY ONE marker, where a de-mark would have silently deleted a
spoken escalation.** ***"No removal was ever free where I worked, and I made none."***

✅ **Both agents proved the audio was untouched by RENDERING, not by arguing:** spoken *"Important."*
**169 → 169** and **132 → 132**; chunks and billed characters byte-identical. ⚠️ **One went further
and compared the marked-paragraph VECTOR, not just the count.**

⚠️ **And one deliberately did not write prose at all:** ***"This section is the corpus's densest
tariff area, and the round-73 lesson is that a repair is new text. The cheapest repair here that is
not new text is the only one I made."***

### The cautionary tale, confirmed by reading the raw lines
The project instructions record that this exact `goaltender.md` run was once called *"a single
nested blockquote"* in a brief, wrongly. ✅ **Re-read: it is FOUR separate blocks with three true
blank lines.** ⚠️ **The agent also checked two runs the brief passed through — both genuinely ARE
one blockquote.** ***"The label is not uniformly unreliable; it was unreliable in the one case the
tool has since been fixed for."***

---

## `uk_rules.md` — the largest unaimed layer, and it was DEMOTION not stripping

**Overview 2,751 → 1,571 words (−43%).** ⚠️ **Nothing stripped, no claim deleted, no hedge removed.**
Seven paragraphs — **~1,180 words of IIHF edition apparatus**, a rule-number renumbering map and
table renumbering — moved **verbatim** into a new body section. **Sole-carrier verified for each
before the move.** Three pointers broke and were retargeted.

⚠️ **`check_tactics_ratio` still reports the Overview at 98% rules-bearing AND THAT IS CORRECT** —
for this document *"which book am I under"* **is** the tactic. ***"I did not drive it down; I cut the
layer's length by 43% by removing apparatus, which the tool cannot see."***

⚠️ **It also declined a layer with evidence:** `check_instruction_first` reports only 2 tariff-first
openers of 39, **both read, both the rule-IS-the-tactic case.** ***"That layer needs no re-ordering
wave."***

---

## `playing_without_the_puck.md` — two claim ladders migrated END TO END

⚠️ **The agent completed TWO of seven claims across ALL their layers and named the other five
precisely, rather than touching all seven in one layer.** ***"A half-migration is worse than none."***

- **Checking from behind, repaired in SIX layers.** ⚠️ **The old text said *"three of the four books
  reach a match penalty"* — FALSE TWO WAYS AT ONCE: five of six reach it, and the "four" excluded
  CARHA and the PWHL, which the same document's Key focus already named.** ⚠️⚠️ **And the agent
  measured something stronger than the brief claimed: `matchpenalt` scores ZERO across the whole
  IIHF book in BOTH editions — so "only the IIHF has none" is STRUCTURAL, not a Rule 43 gap.**
- **A screen run to take a forechecker off your own carrier.** ⚠️ **CARHA 66(a) Note 2 names the act
  AND does not cap it at a minor** — the document said neither book took it above a minor.
  ⚠️⚠️ **THE EVIDENCE WAS ALREADY INSIDE THE DOCUMENT: its own `## Notes on verification` quoted
  that CARHA sentence — as provenance for an idiom, in a book *"with no authority over Hockey
  Canada."* NOBODY HAD ASKED WHAT CARHA DOES TO ITS OWN READERS.** **That is the failure mode the
  project instructions name: the answer was already written down in this repository.**

⚠️ **Two non-negotiable 6 breaches removed in passing** — *"the rule books read for this corpus"*
and *"No rulebook read here"* — **without touching any scope disclosure.**

⚠️ **And it refuted the brief's own shape advice:** *"naming the ONE book that differs is shorter AND
more accurate"* **held on the first claim but NOT the second** — *"the count was wrong AND so was the
ceiling, and the ceiling is the half a player acts on. Naming the divergent book alone would have
shipped a half-repair."*

---

## Coverage statement

| Dimension | Status |
|---|---|
| **D1–D3** rules accuracy | ✅ **CHECKED where claims changed** — six books re-derived for checking-from-behind and the screen ladder, with PWHL and CARHA citations added. ⚠️ **NOT CHECKED for the callout waves, and both agents said so: they moved markers and took the rule text as they found it.** ***"If any tariff in these paragraphs was already wrong, my edits preserved the error exactly."*** |
| **D4–D5** citations, provenance | ✅ **CHECKED.** A Sources trailer falsely saying CARHA was cited *"only as provenance and for nothing else"* was repaired — **it was already false.** `check_quote_drift` identical before and after on `rules_primer.md`, 0 hits on `playing_without_the_puck.md`. |
| **D6–D9** cardinal rule, summary layers, ownership, negatives | ✅ **CHECKED.** Two nn6 breaches removed; one negative strengthened by measurement rather than assertion. |
| **D10 / D12** the ` ```facts ` layer | ✅ **CHECKED.** ⚠️ **An agent caught an antecedent failure IN ITS OWN DRAFT** — *"Near the boards a minor is not the price"*, which voiced alone names no subject. **`rules_primer.md` and `uk_rules.md` have NO facts blocks at all**, so the caps question was moot there. |
| **D11** safety | ⚠️ **PARTLY.** The callout waves are marker-position only. **The checking-from-behind repair is new text in a safety limb and its author asked for a reviewer by name — dispatched, not yet returned.** |
| **D13** the spoken layer | ✅ **CHECKED BY RENDERING, before and after, in every wave.** Spoken *"Important."* unchanged in all four documents. ⚠️ **Each agent used its OWN NAMED `--out` subdirectory.** |
| **D14** diagrams / captions | ⚠️ **OUT OF SCOPE, declared.** No `site/` edit. |
| **D15** the rendered page | 🔴 **NOT CHECKED — C10 REMAINS OPEN.** ⚠️⚠️ **AND THIS WAVE RAISES THE STAKES: twenty panel repairs were verified against the PLUGIN'S SOURCE, not against a browser.** ***"I did not build the site or view a rendered page. The tool cannot confirm it because the tool had the `>` bug."*** **May be recorded as NOT CHECKED; may NEVER be recorded as passed.** |

## What this method could not have found

- ⚠️ **Whether the twenty relocated markers sit on the RIGHT clause.** One agent named the single
  one it was least sure of. **A fresh listener would place some differently.**
- ⚠️ **Whether the rules inside the repaired paragraphs are TRUE.** Neither callout agent verified a
  single citation. ⚠️ **One flagged a negative existence claim sitting inside a paragraph it
  repaired — *"Hockey Canada writes no returning-goalkeeper clause… the whole book were searched"* —
  which it neither tested nor could have tested by that method.**
- ⚠️ **The remaining density, which is the defect the stack count was pointing at all along.**
  `rules_primer.md` has a paragraph carrying **seven markers**; `goaltender.md` has one of **6,330
  characters with six** and one of **10,911 with eighteen**. ⚠️ **Eleven consecutive paragraphs each
  speaking *"Important."* is a real listener defect that `--panels` scores as CLEAN.** **The repair
  is re-ordering, which is new text, and needs its own brief and its own reviewer.**
- ⚠️ **Five of seven claim ladders in `playing_without_the_puck.md`**, including **a live internal
  inconsistency the agent flagged and deliberately did not resolve**: the PWHL is already cited in a
  Key Takeaway while the body still says *"nothing in any of the four…"*.
- ⚠️ **The British layer, again and from two directions.** Neither the IHUK regulations nor
  `eihl_casebook.txt` was searched for a departure — **and that casebook's preamble makes it
  SUPERSEDING.** ⚠️ **`uk_rules.md` already carries the superseding position correctly**, but three
  of its sections state a domestic position with **no EIHL carve-out**, and they are named in the plan.

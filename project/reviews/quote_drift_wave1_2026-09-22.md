# The `ADDED '.'` wave — and the census that framed it was wrong about what the class IS — 22 September 2026

Four agents, four documents, the class the coordinator had ranked as the substantive half of a
359-hit corpus-wide census.

## ⚠️⚠️ THE CLASS IS NOT WHAT THE CENSUS SAID IT WAS

| Document | `ADDED '.'` reported | Genuinely real | False positives |
|---|---|---|---|
| `rules_primer.md` | 5 | **0** | **5** |
| `risk_management.md` | **7** (brief said 5) | 5 | 2 |
| `equipment.md` | 5 | 3 | 2 |

**Nine of seventeen were false positives, and in the rules document every single one was.**

⚠️ **`equipment.md`'s figures are POST-REVERT.** Its agent first made five edits, then — on the
coordinator's mid-wave correction — re-opened the file, ran the attribution test, and **reverted the
two it had manufactured on hits it had ALREADY classified as false positives.** Its own words:
*"I manufactured those two and should not have. They will keep showing in the worklist; that is the
correct outcome."* ⚠️ **A worklist entry that stays open is the right result when the text is
correct** — clearing a worklist is not the goal.

### The cause is structural and the tool's own docstring names it

`check_quote_drift.py` **keeps the closest textual match across ALL of `sources/` and is blind to
attribution.** So it routinely matches a quotation against a **different book than the document
cites** — one sharing the same words, which *does* continue.

- `rules_primer.md:436` quotes **NHL 59.1**; the tool matched `usah.txt:3735`, because USA Hockey's
  Rule 609 Note carries the same clause with a **lower-case "the"** (an exact case match beats the
  NHL's "The") and USA Hockey's version continues. **The document already states that divergence
  correctly in the very next sentence.**
- `rules_primer.md:449` quotes **IIHF 43.3**; the tool matched IIHF **20.1** (the general
  major-penalty definition) and **hooking**. Neither is Rule 43.
- `risk_management.md:642` quotes **NHL 57.3(ii)**; the tool matched `iihf_rules.txt`.
- `risk_management.md:357` quotes **Hockey Canada 11.1(d)(i)**; the tool matched a **different HC
  clause** 39 lines away.

**Two more were PDF furniture, not prose:** a Hockey Canada **table-column interleave** (`C or 4`
and `Yellow` are the code and colour columns of the *same* visor row, confirmed against
`hc_layout.txt`), and the IIHF's standalone **cross-reference pointer glyph** (`➔ Rule 12 –`), which
appears on its own line elsewhere in the same section.

⚠️ **Had the wave swept, it would have inserted ellipses and moved periods on nine correct
quotations.** The coordinator's mid-wave correction — *"the first question is not 'does the source
continue?', it is 'is the source the tool matched the same book the document cites?'"* — reached
three agents while they worked.

## The five genuinely real repairs, and two of them were not cosmetic

**`risk_management.md:359` carried a WRONG CROSS-REFERENCE created by the truncation.** The prose
says *"the Note under 601(d) puts a match penalty above even that"* — but the Note's own words route
the match penalty to **601(e.2)**, and the added period had cut that off. ⚠️ **A reader following
the citation would have looked up the wrong rule.** The quotation was **extended**, not re-punctuated.

**`risk_management.md:646` had amputated the operative consequence.** The Casebook sentence is an
if/then and the quotation stopped at the *if*. It now carries the ruling: *"if the player loses
possession of the puck as a result of being tripped – then a penalty must be called"* (en dash
U+2013 reproduced from the source).

The other three were period moves where the source prints no terminal punctuation at all.

### ⚠️ The attribution test, run properly, found ZERO mismatches in `equipment.md`

The coordinator's correction told three agents to check attribution first. One ran it the rigorous
way: it built a de-hyphenated, whitespace-flattened copy of **all 38 sources** and searched **every
one** for each quoted phrase — *"that is what actually answers 'did the tool match the wrong book?',
because the tool only ever reports its own winner."* **Every phrase occurred in exactly the source
family the document cites and in no other.**

It also checked all **four** IIHF editions on disk for both IIHF hits: the continuations hold in all
four, **so neither finding depends on which edition the document means.**

⚠️ **AND IT INVERTED ONE OF THE COORDINATOR'S PREDICTIONS.** The brief warned that HECC/CSA/ASTM
boilerplate was the cross-source risk in that document. **It cannot be:** that material is in the 82
`notfound` fragments, **whose sources are not on disk at all**, and *"a cross-source mismatch needs
two sources PRESENT that share wording."* The real exposure in that file is the four near-identical
IIHF editions — which is why it checked them.

**Coordinator census on the handover** — *"if another document carries that citation, it is still
wrong there"*: run across `content/`. **The 601(d) → 601(e.2) truncation appears nowhere else.**
Other documents cite 601(c)(10) and 610(c), which are different clauses. Clean.

## ⚠️ TWO SUBSTANTIVE FINDINGS THE TOOL DID NOT LOOK FOR, surfaced only because a flagged line sat inside them

Both from `rules_primer.md`, both **reported not fixed**, both now dispatched to `safety-reviewer`.

1. **IIHF Rule 43.3 is quoted without its discretion limb.** The rule opens *"The Referee, **at
   their discretion**, shall assess…"*. The NHL side of the same comparison is genuinely
   unconditional (43.2: *"There is no provision for a minor penalty for checking from behind."*), so
   *"lands in the same place"* flattens a real difference — **the major is the only tier available
   under both, but reaching it is discretionary under one.** A penalty-tier claim about a contact
   offence.
2. **USA Hockey Casebook 204 Situation 8 is missing one of its decisive facts.** The Casebook's
   reasoning is *"they are still both on the ice **and** Team A gained a territorial advantage"* —
   the advantage limb is **not free-standing**. Low severity, but the missing-limb shape.

## The `CASE` question — ALREADY DECIDED, and the coordinator dispatched against the decision

⚠️⚠️ **`check_quote_drift.py`'s own docstring records a decision of 20 September 2026: silent
capital-lowering (Shape 1) is ACCEPTED HOUSE STYLE, not a defect to sweep.** The evidence then was a
USA Hockey penalty-tier fragment lowered uniformly at nine sites across nine documents — *"a
lowering applied uniformly at nine sites is house practice, not drift."*

⚠️ **The coordinator built a corpus-wide census on this tool without reading its docstring, ranked
the 314 `CASE` hits as an open question, and dispatched a repair of four of them in `skating.md`.**
That repair is not harmful — the bracket form is honest, the listener cost is measured at zero, and
it made that file internally consistent — **but it was work done against a recorded decision, and
the decision was written inside the tool the census came from.** Brief error 29.

**Three agents independently produced evidence the 20 September reasoning did not have:**

| Document | Bracket form used | `CASE` (bare lowering) |
|---|---|---|
| `rules_primer.md` | **94** | 68 |
| `equipment.md` | **30** | 2 — *both on ONE line, inside one sentence* |
| `risk_management.md` | **16** | 18 |

**So the convention is applied and skipped inside the same documents** — which is different evidence
from "uniform across nine sites". ⚠️ **But all three agents, independently, recommended NOT
sweeping**, and the strongest reason is the risk one's: *"a corpus-wide sweep would be changing
documents that have already made a choice."*

**DECISION: the 20 September decision STANDS. Do not sweep the 314.** Record the within-document
split as evidence, not as a worklist.

## The period-style question, answered by census

`equipment.md`'s agent flagged a real risk against its own work: *"if the corpus convention is
period-inside, I have just made this file the outlier."*

Census run: **2,340 period-inside against 870 period-outside**, and every document is majority-inside.

⚠️ **But the ratio does not establish a style convention — it reflects that most quotations are
complete sentences.** Inside is correct when the source sentence ends there; outside is correct when
it does not. **Both forms are in live use at scale, and the choice is semantic, not stylistic.**
The five edits are in cases where outside is the honest form. **The fear was unfounded.**

## Incidental findings for `sources/README.md` — reported, not applied

- **`iihf_rules.txt:1319` has a page-furniture splice INSIDE a sentence**: the section number `03`
  sits between *"…approved by the IIHF"* and *"may be worn by a Player…"*, so a grep for the
  complete sentence returns **nothing** and reads as an absence. The species is recorded for this
  file; **this line is not.**
- **`carha.txt:2512` wraps mid-parenthesis** — `(not over the` / `boards)` — so a grep for the
  phrase returns **zero**, in a file the README describes as extracting cleanly.
- **`equipment.md` has NO ` ```facts ` layer at all** (nor does `mental_game.md`), so the
  `--near` constraint in its brief was moot. Worth knowing before briefing that file again.
- **`risk_management.md:365`** is the only line in its 889-line document using **curly apostrophes**
  (U+2019) where the corpus uses straight. House-style pass needed by whoever owns that hunk.

## What this wave could not have found

1. ⚠️⚠️ **Attribution drift — running in the OTHER direction.** The tool keeps the closest match
   across all sources, so **a quotation carrying the IIHF's exact words under an NHL rule number
   scores CLEAN**, and a method that follows the tool's hits would never visit it.
   `rules_primer.md:436` is the live demonstration in reverse: the tool pointed at USA Hockey for a
   quotation the document attributes to the NHL, and **only reading NHL 59.1 separated a correct
   citation from what would have looked like a drift.** `risk_management.md` is named as the single
   likeliest place in the corpus for this, quoting four rulebooks and two casebooks in close quarters.
2. **A rule stated accurately but INCOMPLETELY anywhere the tool did not flag.** Both substantive
   findings above surfaced only because a flagged line happened to sit inside them.
3. ⚠️ **A missing limb in an UNQUOTED sentence** — a rule paraphrased rather than quoted — **is
   invisible to every tool in this repository.**
4. **The `notfound` buckets**, which both agents named as a better next brief than the drift list:
   `equipment.md` has **82**, including the BNQ closure notice, HECC/CSA helmet-lifespan material,
   the counterfeit-helmet passage and the dermatology quotations — **several safety-critical, none
   with an on-disk source to check against.** `risk_management.md` has **24**, including a named
   Swiss zone-entry dataset with a 56,700-entry figure and specific xG values attributed to a named
   analyst.
5. **Whether the two extended quotations read well aloud.** The renderer was run; the affected
   chunks were not read back.

---

# Addendum — the two remaining wave-1 reports, and three findings bigger than the wave

## Final `ADDED '.'` tally: the class barely exists

| Document | Reported | Substantive | Cosmetic | False positive |
|---|---|---|---|---|
| `goaltender.md` | **7** (brief said 6) | **0** | 2 | **5** |
| `rules_primer.md` | 5 | **0** | 0 | **5** |
| `risk_management.md` | **7** (brief said 5) | **3** | 2 | 2 |
| `equipment.md` | 5 | **3** | 0 | 2 |

**Six substantive truncations out of twenty-four reported hits.** ⚠️ **The coordinator's census
called this "the substantive class" and ranked it above the 314 `CASE` hits. That ranking was built
on the tool's output rather than on any reading of it.**

**Two agents reverted edits they had already made**, on the coordinator's mid-wave correction. One
wrote: *"I manufactured those two and should not have. They will keep showing in the worklist; that
is the correct outcome."* ⚠️ **A worklist entry that stays open is the right result when the text is
correct.**

**And one agent revised its own grading DOWNWARD after handing back** — reclassifying two hits it had
reported as real truncations: in both, the semicolon is an **enumerated-limb terminator**, so the
quoted sentence is complete and the source simply closes limb (iii) with `;` rather than `.`.

## ⚠️ A THIRD false-positive mechanism nobody predicted: the WRONG SENTENCE inside the RIGHT book

`goaltender.md:962` and `:1360`. Hockey Canada's Interpretation 3 to Rule 10.1(a) contains **two
near-identical sentences** — clause **iv** ends *"No warning will be issued in this instance."*;
clause **v** ends *"No warning will be issued."* The document cites **clause v** and quotes it
verbatim with the source's own full stop. The tool matched **clause iv**, because clause v is
line-broken in the extraction and unfindable by an unflattened grep.

⚠️ **So the tool is blind not merely to WHICH BOOK but to WHICH SENTENCE.** The attribution test the
coordinator circulated would have cleared both — correctly, but for the wrong reason.

## ⚠️⚠️ NEW TOOL CAVEAT — it will silently prefer a SUPERSEDED EDITION

`passing_and_receiving.md:429`'s fragment was attributed by the tool to **`nhl_rules_2024-25.txt`,
the superseded book.** The sentence **is** in the current 2025-26 extraction, but page furniture
(*"NATIONAL HOCKEY LEAGUE / Previous Page / 121"*) splices through the middle of it, so it is
contiguous only in the older file.

⚠️ **`check_quote_drift.py` will silently prefer a superseded edition wherever a current-edition
sentence straddles a page break.** The citation at `:429` is correct; **the tool's attribution is
not, and nothing says so on the output.**

## ⚠️⚠️ THE `CASE` POPULATION IS MIXED — split it before anyone dispatches it

`goaltender.md:436` is **not** a lowered initial capital. The document lowercases the IIHF's house
capitalisation of **"Player" → "player" at two MID-SENTENCE positions.**

⚠️ **The coordinator's census described the whole class as "the source's initial capital silently
lowered." That description does not cover this hit, and the bracket form is the wrong remedy for
it.** The 314 is a mixed population, and **mid-sentence house-capitalisation must be separated from
sentence-initial lowering before any of it is dispatched.**

Independent `CASE` censuses agreed exactly on **314** corpus-wide. Bracket-convention usage, four
documents, all already using it: `rules_primer` 94, `equipment` 30, `goaltender` 20+,
`risk_management` 16. ⚠️ **`goaltender.md` lowercases IIHF's "Holds"→"holds" bare at `:400` and
writes `*"[t]his"*` with the bracket at `:402` — two lines apart, same book.** All four agents
independently recommended **not** sweeping. **The 20 September house-style decision stands.**

## The `:203` checking-from-behind verification — the quotation HELD, the absolute did not

The Hockey Canada 7.5(ii) quotation is **verbatim and correctly attributed** (`hc_layout.txt:4817-
4838`, agreeing with `hc.txt:6139`): the `[w]` is a correct disclosed lowercasing, the comma sits
inside in the source too, `head-first` is a real hyphen rather than a line-break artefact, **and the
quotation stops exactly where the source sentence stops.** The guard sentence holds and is
**strengthened by a sentence the document does not quote**: *"In all circumstances the
responsibility is on the player delivering the check to avoid contact to an opposing player's
back."* **No sentence in the document re-creates the licence.**

**But the absolute around it was overstated.** *"the exact shape **every book's** checking-from-
behind rule is written around"* — **only two of the four write the picture.** Hockey Canada 7.5(ii)
writes it longhand and USA Hockey 608(b) reaches a check that *"causes them to go head first into
the boards"*; **NHL 43.1 and IIHF 43.1 write no picture at all**, defining the offence by the
victim's state (*"not aware of the impending hit, therefore unable to protect or defend himself"*).
Replaced with what each book actually writes — ⚠️ **which is strictly more useful, because it tells
the reader WHY the posture matters: head down is what makes you the unaware, unable-to-defend player
the rule is written about.**

### 🔴 And a CRITICAL provenance gap was closed on the way

⚠️ **None of NHL 43, IIHF 43, USA Hockey 608 or Hockey Canada 7.5 appeared anywhere in this
document's Sources trailer**, and its scope parenthetical said the four books were read for other
rules *"only"*. **So on the document's own record, the `:203` citation was unsourced.** Trailer
entries added for all four books plus the IIHF 2026/27 edition, each with a read date and honestly
scoped.

⚠️ **The repaired sentence is NEW TEXT governing a penalty and an injury mechanism, and has not been
safety-reviewed.**

## ⚠️ A NEW ENVIRONMENT TRAP — `timeout` does not exist on macOS

`timeout 120 python3 …` exits **127**, and wrapped in `$(…)` yields an **empty string that greps as
0**. An agent's first corpus census came back all-zeros and **looked like a clean result.**
**Confirmed by the coordinator: `which timeout` returns nothing on this machine.** Another silent
false pass, of exactly the species `CLAUDE.md` catalogues for the nvm shims.

## ⚠️ A reported ownership violation, INVESTIGATED AND REFUTED

`goaltender.md`'s agent reported, urgently, that a second agent was editing the file beneath it —
six hunks it had not written, a cardinal-rule propagation wave overlapping its own range.

**Checked by the coordinator against `git diff` and the plan. There was no concurrent agent.** The
six hunks are the **earlier net-front wave from this same session**, whose plan row was closed hours
before that agent started, and `content/positions/goaltender.md` was already listed `M` in the
conversation's opening `git status`. **The agent's "clean at session start" was a misread of a
stale snapshot — the second such misread today, after `winger.md`.**

**Wave verified intact**: 12 coaching-choice hedges present, **zero** bare *"defenceman's job"*
claims remaining, and the file is byte-identical to as-found after that agent's revert.

⚠️ **The agent was right to raise it and right to say its "no clobber" was unproven** — its
recommendation to treat the claim as unproven rather than established is the correct instinct even
though the alarm was false.

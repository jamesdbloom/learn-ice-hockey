# The crease line, the net front, and the rules nobody searched for — 24 September 2026

One claim was briefed. It was wrong in a different shape in every file that carried it, and chasing it
properly opened a second family of defects about **what you may put on an opponent's body or stick**.

**The through-line, and it is the only sentence in this record worth memorising:** every serious defect
found today was priced under a heading nobody had searched for. The grep that would have found it did
not exist, because **the defective sentence was the one that never named the rule.**

---

## Files in this commit

**23 content documents** — `foundation/`: `on_ice_communication.md`, `rink_map.md`, `rules_primer.md`,
`uk_rules.md` · `hockey-iq/`: `playing_without_the_puck.md`, `risk_management.md` · `off-the-ice/`:
`conditioning_and_recovery.md`, `equipment.md`, `team_play_and_culture.md` · `positions/`: `center.md`,
`defender.md`, `goaltender.md`, `switching_positions.md`, `winger.md` · `systems/`:
`defensive_zone_coverage.md`, `faceoffs.md`, `forechecking_systems.md`, `game_management.md`,
`offensive_zone_play.md`, `special_teams.md`, `zone_entries.md` · `technique/`:
`body_contact_and_battles.md`, `shooting.md`.

**Non-content:** `site/src/diagrams/rink_map_and_glossary.mjs`, `site/src/data/diagrams.json`,
`sources/README.md`, `CLAUDE.md`, `project/plans/OPEN_ITEMS.md`,
`project/podcast_style_b_script_standard.md`.

⚠️⚠️ **`git show HEAD:` IS NOT THE PRE-EDIT BASELINE FOR THIS DIFF.** Several files were edited three to
five times across the round. Measured on `offensive_zone_play.md`: one paragraph is **2,136 chars at
HEAD** and was **2,867** when the final agent inherited it — **~731 characters of earlier uncommitted
waves in between.** **Anyone diffing a file against HEAD will attribute earlier waves' work to whichever
agent touched it last.**

---

## Dimension coverage — every dimension in `review_process.md`, checked or declared

⚠️ **An earlier draft of this record used a PRIVATE D-numbering that collided with the table in
[`review_process.md`](../review_process.md).** A `commit-gate` caught it: *"a reader seeing 'D1, D2, D3,
D8' reasonably infers the first three dimensions of the table were covered"*, when the record's *"D2"*
was the table's D4/D5 and its *"D3"* was D11. ⚠️⚠️ **The gap was load-bearing rather than clerical —
the round's one blocking defect is a D6, and D6 was among the dimensions with no coverage statement.**

| # | Dimension | State |
|---|---|---|
| D1 | Rules accuracy | ✅ covered — see below |
| D2 | Rules travelling without exceptions | ✅ **covered, and it was the round's dominant shape** — see below |
| D3 | Rule-set divergence | ✅ covered — four-book vs six-book frames, British layer |
| D4 | Citation integrity | ⚠️ partial — quotations located and read past their closing marks; **no external link refetched** |
| D5 | Provenance | ⚠️ partial — checked on the one new cross-book attribution (the crease caption), apportioned book by book; **`source-verifier` did not run** |
| D6 | Negative existence claims | ✅ covered — **the gate BLOCKED here; found and closed in TWO files.** See below. |
| D7 | The cardinal rule | ✅ covered — `content-reviewer` on both summary-layer files; no coaching choice found stated as law |
| D8 | Numeric ownership | ✅ covered — see below |
| D9 | The summary layer | ✅ **covered heavily** — layer tests on every repaired claim; this is where most defects were |
| D10 | The key-facts layer | ✅ covered — see below |
| D11 | Reader safety | ✅ covered — six `safety-reviewer` passes |
| D12 | Read-aloud integrity | ✅ covered — every repair confirmed in its own chunk |
| D13 | Folklore | ⚠️ **OUT OF SCOPE, because** this round was driven by rulebook claims; no folklore-shaped claim was touched, and none was attacked |
| D14 | Structure, style, terminology, cross-links | ⚠️ partial — `check_links.py` passes and 11,562 internal links resolve in the build; **house style and terminology not audited** |
| D15 | The rendered site | ✅ **covered in a real browser** after Chrome recovered — see below |

### D6 · Negative existence claims — the gate's blocking finding, and it is the round's best catch

**`shooting.md`'s spin-o-rama facts line said USA Hockey and CARHA *"write no rule"*.** ⚠️ **Both books
write the clause that decides the act** — *"the puck must be kept in motion towards the opponents' goal
line"* — **which is the SAME TEST the line cites as Hockey Canada's ground for PERMITTING the move.**
They write no **spin-o-rama provision**; they are not silent on the act.

⚠️⚠️ **Every other layer was already right** — the body carries *"silence is not a permission"* with the
USA Hockey Casebook situations, the Key Takeaway carries it, and a sibling file states it with rule
numbers. **The facts line — the layer voiced ALONE — is the one that dropped it.** ⚠️ **The adjacent
line was repaired this round and the repair stopped ONE LINE SHORT.**

⚠️ **And the commit was shipping the lesson and its counterexample together:** this diff's own
`CLAUDE.md` addition records that *"'write no rule, so do not assume it' tells a USA Hockey reader
nothing governs the act"* — **permissive in effect while reading as cautious.**

### D6 outcome — the gate named ONE file; the claim lived in TWO

✅ **Repaired at `shooting.md` AND `goaltender.md:865`.** ⚠️⚠️ **Had the fix stopped at the file the
gate named, the identical false sentence would have shipped from a file that was already staged** — a
`Rule:` fact voiced alone, carrying neither the counterweight nor the positive requirement, **while
`goaltender.md:879` in the SAME FILE already stated it correctly.**

✅ **It was caught because the repairing agent ended its report with *"brief the claim, not the line —
the claim is 'USA Hockey and CARHA are silent on the spin-o-rama', wherever it appears"*, and that grep
was run rather than filed.**

⚠️ **Both repairs were SPLITS, not squeezes.** In each case the floor for one line carrying the
compression fix, the counterweight, the positive requirement and the existing citations measured
**~340+ against a 300 cap**. **Nothing was traded.** ✅ **In `shooting.md` the instruction came out
stronger — *"Do not read … as a permission"* is now the lead clause.**

⚠️ **STILL OPEN:** `shooting.md`'s Key Takeaway carries the same compression with the counterweight
attached in the same breath — **safe, but it does not say what the books positively require.**

### D2 · Rules travelling without exceptions — the round's dominant shape, named here because it was silent before

**Every serious defect was a rule that travelled without the rule next to it:** CARHA 66(b) without
**52(b)** and **54(c)** and **66(e)** · USA Hockey's hooking Note without **622** and **634** · the NHL's
55 without **61.1** · Hockey Canada's 8.1 without **8.3** · CARHA's 64 without **80**.
✅ **In every case the fix was to sweep the ACT, not the rule number.**

## D1, D2, D3 · Rules accuracy, rules travelling without exceptions, rule-set divergence — **covered, and it is where everything was found**

**Verified against primary text on disk, quoted with file and line, by `rules-verifier` agents:**
IIHF 1.7, 56.1, 54.2, 55.1, 61.1, 69.1–69.4, 101.1, Appendix IV Table 14/16 · NHL 54.2, 55.x, 56.1,
59.1, 61.1/61.3/61.5, 69.7, Tables 10/11/14 · PWHL 55.2, 57.1, 60.1, 63.1/63.3/63.5, 71.1–71.8,
Table 14 · USA Hockey 604, 607, 609, 622, 623, 625, 634, and Casebook Situations · Hockey Canada 7.3,
7.5, 8.1, 8.2, 8.3, 8.5, 9.3, and Interpretations · CARHA 5, 8, 30, 32, 36, 46, 49, 52, 53, 54, 57, 58,
59, 60, 62, 63, 64, 66, 68, 72, 80, 81, 87 · EIHL Casebook Preamble and Rule 69 · IHUK In-House Rules
2025-26 and 2026-27 · all four IHUK Rules of Competition and their `_layout` twins.

### The defects, by the shape that hid them

**Rules the corpus never searched for, each found by sweeping the ACT and reading the rule to its end:**
- **CARHA 54(c)** — cross-checking a goalkeeper in the crease, *"shall be assessed"* a major plus game
  misconduct. **Present in ONE corpus file. Seven others state CARHA's charging ejection and none
  stated this.**
- **CARHA 66(e)** — *"A Major penalty shall be imposed on any player who injures an opponent by
  interference."* **`grep -rn "66(e)" content/` returned ZERO corpus-wide.** It sits two clauses below
  the rule the net-front section is built on. ⚠️ **It is a major with NO game misconduct — not an
  ejection**, which a count-widening brief would have got wrong.
- **CARHA 80(a)/(b)/(d)** — slashing. Absent from `defender.md`'s six-book ladder while CARHA's hooking
  rule was present.
- **USA Hockey 622** — holding the stick, reached through its **Note**, not its heading.
  ⚠️ **`holdinganopponentsstick` scores 0 flattened. The label search is a false negative.**
- **NHL/IIHF/PWHL 61.1** — a forceful chop *"on or near the opponent's hands"* is **slashing**.
  ⚠️ **`grep -c "lash"` on `defender.md` returned 0 while it taught the technique in six layers.**

**Wrong-count and false-exclusivity claims:** the tables-vs-rule-text split framed as NHL/PWHL-only when
**the IIHF's own Appendix IV table contradicts its own Rule 1.7** (`rink_map.md`, 4 sites) · a **third**
permissive reference table (PWHL Table 14) where the corpus counted two · *"three of the four books"*
where the frame is six (hooking at the hands; cross-checking) · *"twice"* where CARHA writes three
mandatory limbs.

**Verified and left alone:** 28 PWHL citations checked **by the act**, all resolving to the rule that
prices it — ⚠️ **the PWHL renumbers NHL+1 through parts of this range, so a wrong number lands on a
real, different rule rather than failing to resolve.** `rules_primer.md` needed no crease repair.
`defensive_zone_coverage.md` and `on_ice_communication.md` were checked and are **correct** under their
own four-book frames — ⚠️ **a propagation sweep there would have damaged right text.**

## D4, D5 · Citation integrity and provenance — **partly covered**

Quotations were located in primary text and **read past their closing marks**. `check_quote_drift.py`
run per file; every flag pre-existing.

⚠️⚠️ **TWO LIVE CONFIRMATIONS TODAY THAT `check_quote_drift.py` IS BLIND TO THE TRUNCATED QUOTATION.**
(1) An agent manufactured the shape its own brief named — a terminal period **inside** the quote marks
where the source sentence continues — and **the tool reported clean on the defective version.** Caught
by hand. (2) A `uk_rules.md` quotation was flagged `ADDED '.'` as a **false positive**: the sentence
appears **twice** in the IIHF book (Rule 42 at `:4001`, *"…crease **area**."*; 69.4 at `:5678`,
*"…crease."*), and the tool keeps the **closest** match.
✅ **A drift hit on a sentence a book prints twice is the tool's artefact. Read the cited line.**

**Truncations found by reading past the closing mark, three of them:** the *"fair game"* quotation cut
with **the penalty in the continuation**; CARHA 66(b) cut before *"the appropriate penalties will be
assessed"*; and CARHA's slashing glossary quoted from *"limited"* rather than *"Tapping"*, **shedding
the puck-carrier limit the surrounding inference rests on.**

**Out of scope:** no external citation was refetched. `check_quote_drift.py` **does not index
`usah_casebook.txt`** — three pre-existing casebook quotations in `defender.md` have never been checked
by any tool.

## D11 · Reader safety — **covered by six `safety-reviewer` passes, and they earned it**

⚠️ **One CRITICAL, permissive:** `faceoffs.md`'s body-checking facts line dropped **five of six**
exclusions from its owner and **closed on a permission where `uk_rules.md` closes on a prohibition**
(*"ask your league before you hit anyone, and until you have an answer, do not"*). ⚠️ **A listener in
the National Ice Hockey League hearing *"NIHL 1 and 2 checking"* pattern-matches across exactly the
boundary those regulations do not cover.** Repaired in four layers.

⚠️ **Two CRITICALS, permissive:** `defender.md` told readers a stick lift at the hands was *"not under
the NHL"* and that *"USA Hockey writes no hands sentence"*. Both false. ⚠️⚠️ **MEASURED: the permissive
sentence was in chunk 035 and its only qualification in chunk 038 — three chunks away, unreachable at
the moment of instruction.** Now distance **zero**.

**Majors:** a Key Takeaway opening on a **bare universal permission voiced alone** · Hockey Canada 8.3
prices a box-out with **no carve-out**, unscoped across all divisions, where the corpus said *"unwritten"*
· CARHA's ceiling reached by **casebook**, not rule text · a repair that **negated the one limb CARHA
grants** (66(a) Note 2) and contradicted its own §1.

**Reviewers overruled the coordinator twice, correctly:** the EIHL faceoff carve-out **stands** (harm
bounded and non-penalty; the penalty-bearing limbs are scope-independent), and
`offensive_zone_play.md:633`'s *"strictest of the four"* **does not mislead** (true as scoped; the
qualifier is the first five words a listener hears).

## D8 · Numeric ownership — **covered**

⚠️ **A *Notes on verification* sentence was FALSE IN `HEAD`, missing three rules, and had been for more
than one round — in the corpus's integrity layer, where no checker can see it.** Re-derived **by
enumeration**; a third layer was already right and became the anchor. ✅ ***"A sentence of the form
'only X, Y and Z are reported' is unfalsifiable by every checker here and rots every time a body section
is added."***

## D10 · The key-facts layer — **covered**

`check_facts.py --near` run **before** every block edit. Every repair funded **by substitution**;
⚠️ **no caveat, tariff or scope clause was traded for room anywhere in this round.** Where a limb would
not fit, the agent **said so** rather than trimming — `faceoffs.md:294` is recorded open for a section
split rather than a squeeze.

## D15 · The rendered site — **covered in a real browser**

⚠️ **Chrome refused every navigation to localhost for several hours, including `http` on a fresh tab.
An earlier draft of this record declared this dimension NOT REACHED. Chrome recovered and it was
checked properly.** **`site-reviewer` verdict: nothing that must not ship.**

- **The 542-character caption at 400px:** **11 lines** in a 371px column, 238px tall; **14 lines** at
  320px. No clipping, no overlap, no overflow. ⚠️ **An earlier estimate of *"~9–10 lines"* is REFUTED.**
  Contrast **6.20:1** light, **7.82:1** dark — both comfortably AA.
- **The diagram:** svg 371px inside a 371px figure at 400px; `.diagram-scroll` resolves to
  `min-width: 0` because the figure is `diagram` and not `diagram--full`. **No body-level horizontal
  scroll at 400px or 320px.**
- **Console: ZERO messages of any kind** on four pages — not zero errors, zero output.
  **Network: no off-origin requests at all.** No `/audio/` request fired, as `preload="none"` predicts.
- **Facts blocks:** 30 panels on `defender`, 40 on `offensive_zone_play`, **zero `pre > code.language-facts`**
  — nothing leaked as a raw code block. `warn-inline` inside `dd.facts__value` = **16**, contrast 8.29:1.
  ✅ **In `faceoffs` the amber run ends on the instruction and the citation after it is plain — the
  wrapper boundary the right way round.**
- **The five bare glyphs are all inside COLLAPSED `<details>`** — four in the Sources trailer
  (provenance apparatus, not instructions), one a ToC echo of a heading that **does** render as a full
  amber panel. **All pre-existing.**

⚠️⚠️ **TWO CORRECTIONS TO THIS PROJECT'S OWN MODEL, both from this pass and both now in `CLAUDE.md`:**
1. **A bare glyph is NOT "a small black glyph".** `⚠️` is a **colour emoji** and renders amber-yellow
   natively; what state 3 loses is the **bold, the left bar and the tint**. ✅ **The documented failure
   still reproduced exactly — the reviewer skimmed, stopped on both treated runs, and did not notice the
   bare glyph in the same screenshot, finding it only by DOM walk.**
2. ⚠️ **`resize_window` SILENTLY NO-OPS AND REPORTS SUCCESS** on a maximised window. The real 400px
   viewport came from a **same-origin iframe harness**.

⚠️ **Declared gap:** the reviewer saw the **16:15 build**. `shooting.md`, `goaltender.md` and
`offensive_zone_play.md` changed after it. **Those edits are prose and facts lines adding no `⚠️`
marker, and `check_callout_flow.py --bare` was re-run against the rebuilt `dist` to confirm no new bare
glyph — but they were not seen in a browser.**

## D12 · Read-aloud integrity — **covered by the renderer, repeatedly, and it decided things reading could not**

Every repair confirmed in its own chunk with a **named `--out` subdirectory**. The crease contradiction
reaches the listener **one chunk before** Rule 1.7, not after. `uk_rules.md`'s new subsection is a
**single chunk** with its counterweight adjacent. Spoken-`"Important."` counted **paragraph by
paragraph**, never in aggregate: no paragraph lost its escalation.

---

## What this method could not have found

- **The same hole one book over.** CARHA 66(e) proves the class is live. **Nobody asked what USA Hockey,
  Hockey Canada, the NHL, the IIHF or the PWHL write for *"injures an opponent by interference"* as a
  rule separate from their goalkeeper-interference rule** — nor what any book does when a **stick lift
  becomes a slash, a spear, a butt-end or a high stick**. ⚠️ **Those negatives are TRUE negatives on the
  label, which is the kind that stops a search.**
- **No book was ever searched for a *stick-lift-specific* rule.** If one exists outside hooking, slashing
  and cross-checking, that section's architecture is a half-answer and nothing done today would show it.
- **Casebooks were searched for named rules, not for acts.** The EIHL Casebook has a *Fines and
  Suspensions* list legislating for an act whose rule it does not carry — the shape that would hide a
  second goaltender-contact tariff under another number.
- **The British layer is unchecked on Rules 55, 59 and 61**, and the **EIHL Casebook supersedes the IIHF
  where it speaks.**
- **The corpus now mixes four-book and six-book frames in one file**, and whether a reader can tell which
  is in force was not established.
- **Twelve coordinator briefs were corrected by their recipients**, six permissive. Two would have
  shipped half-rules; one would have contradicted the rule it cited; one would have attributed a match
  penalty to the wrong book; one would have dropped a scope caveat from a layer voiced alone.
  ⚠️ **No checker caught any of them. The instruction "refute the brief" did.**

# Round 22 — the British trapezoid

**Date:** 29 July 2026
**Scope:** the trapezoid's British status across the whole corpus, plus two
adjacent findings from the same sweep (trapezoid geometry, rink dimensions).
20 documents changed.

**Trigger.** Round 21's closing sweep read the twenty header-only documents *as
a British reader* and found the trapezoid asserted as applicable to one in
**eleven** of them.

**Documents changed (20):** `foundation/on_ice_communication`,
`foundation/rink_map_and_glossary`, `foundation/rules_primer`,
`foundation/uk_rules`, `hockey-iq/playing_without_the_puck`,
`hockey-iq/puck_support_and_spacing`, `hockey-iq/time_and_space`,
`off-the-ice/how_to_watch_hockey`, `positions/center`, `positions/defender`,
`positions/goaltender`, `systems/breakouts`, `systems/defensive_zone_coverage`,
`systems/faceoffs`, `systems/forechecking_systems`,
`systems/neutral_zone_systems`, `systems/offensive_zone_play`,
`systems/special_teams`, `systems/zone_entries`, `getting-started/getting_started`.

The last three foundation documents and `breakouts` were added late: the first
pass propagated to the documents that *make* the claim and stopped at the three
that **own** it — `uk_rules`, `rules_primer` and `rink_map_and_glossary` — which
every new clause links to. `commit-gate` caught that on its second run, calling
it the round-10 shape exactly.

---

## Dimension coverage

| | Dimension | Status |
|---|---|---|
| D1–D3 | Rules accuracy, exceptions, cross-book divergence | `rules-verifier` |
| D4 | Citation integrity | **Out of scope** — the diff adds no external URL; every new quotation is rulebook text on disk, located by two reviewers and by `commit-gate` |
| D5 | Provenance | **Out of scope**, same reason. No new source document was introduced |
| D6 | Negative existence claims | `rules-verifier` — the load-bearing one ("the In-House Rules are silent on the restricted area") was independently re-grepped by both reviewers and the gate |
| D7 | Cardinal rule | `facts-reviewer` — and it found the `Rule:` label carrying a status and an instruction as well as a citation. Partly fixed; carried forward |
| D8 | Numeric ownership | `facts-reviewer` — flagged `time_and_space` restating trapezoid geometry that `rink_map_and_glossary` owns. Carried forward |
| D9 | The summary layer | `facts-reviewer` — found `forechecking_systems` hedged in Key Takeaways only |
| D10 | The key-facts layer | `facts-reviewer` |
| D11 | Reader safety | `safety-reviewer` — run after `commit-gate` blocked for its absence |
| D12 | Read-aloud integrity | `facts-reviewer`, which generated the narration. **This is where the facts-narration finding came from** |
| D13 | Folklore | Not engaged — the change adds no unsourced prevalence claim |
| D14 | Structure, style, cross-links | `check_links.py`; the GFM table defect was found by `facts-reviewer` reading the raw diff |
| D15 | The rendered site | `site-reviewer` — real Chrome over CDP, 68 page-cells (16 pages × 390/1440 × light/dark), plus 320px |

---

## Why this was worth a round

Every one of those eleven hedged the same way:

> the NHL, the KHL and IIHF play have it; **most rec, beer-league and youth
> associations do not**

That hedge does not protect a British reader — **it routes them into the
claim.** A player in NIHL, the SNL or BUIHA does not read themselves as "rec,
beer-league or youth". They read themselves as a league player under the IIHF
book, which the header sentence added in round 21 has just told them is theirs.

`defender.md` was the sharpest case. Its header says both *"this matters more
for defencemen than anyone else — see the note on the trapezoid below"* and
*"Playing in Britain? The IIHF flags are yours."* Its Common Mistakes then said
a goalie *"legally cannot"* retrieve a rim. Under EIH R&R 22.3 that may be
exactly wrong, and the document gave the reader no way to find out.

---

## The settled position, verified

| Claim | Source | Result |
|---|---|---|
| The rule exists and is IIHF **27.7** | `sources/iihf_rules.txt:2639` | ✓ verbatim; 27.8 is *"Infractions – Unique to Goalkeepers"*, a pointer to Table 13 |
| England Ice Hockey suspends it | `sources/eih_rr.txt:999` | ✓ *"Goalkeepers' Restricted Area is not currently enforced to allow ice rinks the necessary time to make the changes to implement this rule."* |
| The In-House Rules are silent | `sources/eiha_inhouse.txt` | ✓ zero hits for restricted area / trapezoid / 27.7 / 1.8; Section 1 amends rink size and benches only |
| Geometry | `sources/iihf_rules.txt:648` | ✓ 6.80 m at the goal line, 8.60 m at the boards |

**Verdict: unsettled — in England and Wales, and only there.** The R&R edition on
disk is 2024-25 and the 2025-26 In-House Rules do not restate the suspension, so
the published documents do not say whether it still stands. Propagated to every
document that makes the claim, with the conservative default and an instruction
to look behind the net **to see whether the lines are painted** — a hint, not a
ruling. See the safety findings below for why both of those sentences had to be
rewritten after the first pass.

---

## The finding that made this round harder than it looked

**The safe assumption is not the same for every reader.**

- A **defending** reader (own goalie, own zone) is safe assuming it **binds** —
  the goalie stays inside the trapezoid and takes no delay-of-game minor.
- An **attacking** reader (forechecking, dumping in) is safe assuming the
  opposite — plan as though the opponent's goalie **may** retrieve the puck,
  because that is the case in which dump-and-chase loses its value.

The first pass applied "assume it binds" everywhere. That is the wrong
instruction in six places, most damagingly in `forechecking_systems.md` — the
corpus's most attacking-side document, which states outright that a
puck-handling goaltender makes dump-and-chase *"nearly pointless"*. Every
instance now carries the direction that is safe for its own reader, and the
reversal is scoped explicitly (*"for you as the attacking team"*) so a
goaltender cannot read it as licence.

---

## Two adjacent findings, both fixed

**The trapezoid geometry was wrong for a British reader, and the flagged
difference was the wrong one.** `time_and_space.md` gave the NHL's 22 ft / 28 ft
and asserted the rule applies in IIHF play. The IIHF prints its own figures.
The widths are close — 22 ft is 6.71 m against 6.80 m — but **the depth is
not**: the IIHF goal line sits 4.0 m from the end boards (Rule 1.5) against the
NHL's 11 feet, or 3.35 m, so the IIHF trapezoid is about **two feet deeper**.
The first fix flagged the two centimetre-scale width differences and missed the
65 cm one. That is the difference that changes where a puck is retrievable, and
a conversion hides it.

**The rink-size flag pointed British readers the wrong way.** Two documents
flagged "wider international ice" as the correction to make. For Britain it
runs the other way: rinks *"with a non-standard playing surface (below 56 m ×
26 m)"* are authorised for all levels, short of IIHF Rule 1.2 on **both**
dimensions. The citation was upgraded mid-round from EIH R&R 22.2 (2024-25) to
the **2025-26 In-House Rules**, which carry the rule in current form and add
the venue carve-outs — Sutton, Coatbridge and Limekilns Road, U16 only — that
the first fix had omitted.

---

## The finding that is bigger than this round

**The ` ```facts ` layer is not narrated. Not any of it.**

`commit-gate` raised it; I verified it directly. `scripts/md_to_speech.py` has
no handling for `facts` at all — the string does not appear in the file. Every
fenced block is parsed as code and replaced with:

> *"A diagram appears here in the written version. It is drawn in text and
> cannot be read aloud."*

Generating the whole corpus:

```
facts blocks in content/                     764
"A diagram appears here" in the SSML         766
fact-only strings reaching the narration       0
```

Two consequences, and the second is the serious one.

**The listener is told a lie.** The facts blocks are not diagrams. A listener is
told something exists that cannot be read to them, when in fact it is prose
that could be read to them trivially — and it is the layer built to carry the
most load-bearing sentences in the corpus.

**Every "a listener hearing only this block" argument in this project's review
history is wrong.** That reasoning appears in round 20, round 21 and twice in
this round, in reports from three different agents and from me. It was the
stated justification for putting safety caveats *into* facts blocks — the
checking-legality `Rule:` facts in `body_contact_and_battles.md` §5 among them.
Those caveats reach the page and never the audio. **The layer that was treated
throughout as the audio-critical one is the only layer the audio does not
carry.**

This round's immediate exposure was three documents — `faceoffs.md`,
`special_teams.md` and `forechecking_systems.md` — where the British status
existed only as facts. Each now has a body sentence, so the correction is
narrated. **The corpus-wide exposure has not been assessed and should be the
next round:** every safety caveat that lives only in a facts block is currently
page-only.

**Do not "fix" this by moving content out of the facts blocks.** The layer earns
its place on the page and in the site's search. The question is whether
`md_to_speech.py` should render `facts` fences as prose — which is a decision
about the narration product, and belongs with whoever owns that pipeline.

## What `safety-reviewer` found — three criticals, all mine

`commit-gate` blocked because D11 had not been run. It was right to.

**C1 · An unsourced escape hatch cancelled the conservative default, in nine
places.** Each said *"assume it binds"* and then, in the same sentence, *"if no
lines are painted, it is not being enforced on that sheet."* By the corpus's
own account most British rinks have no paint, so the escape hatch fires on the
majority of sheets — for the one player whose mistake is a penalty. And it is
not sourced: **IIHF 27.7 turns on *"the position of the puck"*, not on the
markings.** The paint is 22.3's stated *reason* for the suspension, which
justifies "look behind the net" and not "it is not being enforced". All nine
now instruct the reader to look, and label the inference as a hint.

**C2 · "In Britain" rested on an England-and-Wales instrument.** EIH *Rules &
Regulations* 1.1: England Ice Hockey is the NGB *"in England and Wales."* Rule
22.3 sits inside that document, so it never reached **Scotland (SIHA), BUIHA
university hockey, or the Elite League**. For those readers no published
instrument suspends anything, and IIHF 27.7 simply binds — while the corpus
was telling them it was unsettled. Framing a live rule as unsettled is the
softening this dimension exists to catch, and it was in all sixteen documents.
Now scoped: unsettled in England and Wales, live elsewhere in Britain.

**C3 · The staged index and the working tree disagreed.** The body sentences
for `faceoffs.md` and `special_teams.md` were unstaged, so the staged snapshot
carried the British status as facts only — which, per the finding above, would
have reached the page and no listener. Staged by name.

**M2 · The In-House silence is not neutral, and the primary text was sitting
unused.** Sixteen documents said *"the In-House Rules are silent"* as though
that were even-handed. Their Introduction says: *"Unless otherwise stated, all
rules will be enforced in line with the IIHF Rule Book."* So the **current**
playing-rule instrument affirmatively enforces 27.7 while the older,
England-only one suspends it. Reporting only the silence understated the
conservative case. Now quoted in eleven documents, and it narrates.

---

## What `site-reviewer` found

Real Chrome over CDP: 68 page-cells across the sixteen changed pages at 390 and
1440, light and dark, plus a 320px pass. **Zero console errors, zero horizontal
body scroll, zero silently-clipping tables, zero facts blocks overflowing.**

- **Every added clause renders**, occurrence counts matching markdown to HTML on
  all sixteen pages. The GFM table defect is confirmed fixed on the page — every
  row now has exactly three cells and the note renders as prose beneath.
- **One real defect: a doubled word.** *"an authorisation that **is is** short
  of IIHF Rule 1.2"* — in visible prose, in both `time_and_space.md` and
  `puck_support_and_spacing.md`, from this round's own added text. Fixed, and
  every line this round added was then swept for doubled words.
- **The 🇬🇧 marker renders as a flag**, measured at 21px against a failed
  regional-indicator pair's ~42px, and does not disturb leading or wrapping.
- The `>` blockquotes render as `aside.callout` at 12.7–15.6:1 contrast, so
  `defender.md` and `goaltender.md`'s British caveats are strongly distinguished.

**One risk it could not test, worth recording:** 🇬🇧 is being used as a
*semantic* marker, and Windows Chrome has no flag glyphs — Segoe UI Emoji
renders regional-indicator pairs as boxed letters "GB". The reviewer verified
Apple Color Emoji resolves on macOS and said plainly it could say nothing about
Windows. **If the flag is load-bearing, it should not be the only carrier of
the British signal.** Every instance in this round is followed immediately by
the words "In England and Wales" or "If you play in Britain", so nothing is
lost if the glyph fails — but that is luck rather than design, and the next
person adding one should know.

---

## What the reviewers caught that I had shipped

Two agents, `rules-verifier` and `facts-reviewer`, both reading primary text
from `sources/`.

- **A correction that reached no output at all.** The British rink note in
  `puck_support_and_spacing.md` was appended after the closing pipe of a
  three-column table row, making a fourth cell. GFM discards excess cells, so
  it rendered nowhere — and `facts-reviewer` generated the narration and
  confirmed the whole table is dropped from speech as well. **The fix was in
  the file and reached neither the page nor the audio.** Both mechanical
  checkers passed over it. Found by reading the raw diff line, which the
  reviewer described as luck.
- **A third sentence broken by a scripted edit.** The insertion into
  `time_and_space.md` orphaned a trailing clause, leaving the text asserting
  that the IIHF's 6.80 m / 8.60 m *"is what NHL Rule 1.8's figures work out
  to"* — the exact inversion of the point. This is the third time in two rounds
  that scripted insertion into prose has produced a false sentence. **Treat
  scripted edits to prose as prohibited**; they are safe only for whole-line
  insertion into fenced blocks.
- **The attacking reversal applied to a defending section.** In
  `on_ice_communication.md` §"The goaltender's calls" — a section about the
  reader's *own* goalie — the fact told them to plan around the *opponent's*
  goalie, and in doing so removed the only warning that their own goalie can
  take a minor out there.
- **"in England" against "In Britain".** Eight facts said England while every
  body clause said Britain. Substantively wrong as well as inconsistent: the
  In-House Rules are the joint EIH/SIHA/BUIHA document covering England *and*
  Scotland, and EIH is the NGB for England *and Wales*. A Scottish listener
  hearing "in England its status is unsettled" concludes it is not theirs.
- **Three teaching documents the propagation never reached** — `faceoffs.md`,
  `special_teams.md` and `playing_without_the_puck.md` — plus
  `offensive_zone_play.md`, where the body was reversed and its facts block was
  not, and `forechecking_systems.md`, where the correction reached the Key
  Takeaways and nothing else.
- **Pronouns with no antecedent.** The repeated fact read *"In Britain the IIHF
  numbers **this** 27.7… **it** is not currently enforced; assume **it**
  binds"* — three pronouns, no named subject, in the layer that is read aloud
  standalone. Also: *"In Britain the IIHF numbers this 27.7"* is simply false.
  The IIHF numbers it 27.7 everywhere; that is not a British fact.

---

## The gate blocked twice, and the second block was the important one

The first block was procedural — `safety-reviewer` and `site-reviewer` had not
run, and the record had no coverage statement.

**The second found that the fixes for the first had failed in three ways**, and
all three are worth recording because they are the same failure wearing
different clothes.

1. **A scripted `Britain` → `England and Wales` replacement ran over a second
   clause and inverted it.** Five facts lines read *"in England and Wales its
   status is unsettled … elsewhere in **England and Wales** there is no such
   suspension"* — nonsense, in the layer this record spends a section arguing
   is read standalone. **This happened inside the same diff that records the
   rule "treat scripted edits to prose as prohibited."** The rule was written
   and then broken four paragraphs later.
2. **The jurisdiction fix reached seven documents of sixteen**, while the
   record asserted it was done in all sixteen. `defender.md` and
   `goaltender.md` were left stating different jurisdictions for the same rule.
3. **Three of the nine escape hatches survived**, one of them on a line this
   diff had edited for another reason — the edit went past it.

And a fourth, which is why C8 exists: **the record described a different diff
than the one staged.** It named `rink_map_and_glossary` as changed when it was
not, omitted `breakouts` when it was, and its "what this could not have found"
section said `site-reviewer` was not run while another section described its
68-cell results in detail. A record whose halves disagree cannot discharge the
coverage condition, and `review_history.md` is reconstructed from these files.

The lesson for the next round is narrow and practical: **after any sweep,
re-grep for the thing you were sweeping for, and re-read the record against
`git diff --cached --name-only`.** Both checks take seconds and both would have
caught these.

---

## The third and fourth gate runs — the EIHL over-reach

The gate blocked twice more, and both blocks turned on the same thing: **fixing
the jurisdiction created a new over-claim.**

Correcting "in Britain" to "in England and Wales" left the sentence needing a
second half, and the second half I wrote was *"elsewhere in Britain 27.7 is
simply live."* That is sound for **Scotland and BUIHA** — their instrument is
the In-House Rules, which are genuinely silent on Rule 27 (verified: zero hits
for restricted area, trapezoid, 27.7 or 1.8, and no Rule 27 in the heading
list). It is **not** sound for the **Elite League**, which plays in England,
runs its own Casebook, and — as `uk_rules.md` itself discloses — *"this corpus
has not read it."* So the fix made an affirmative negative-existence claim
about an instrument the same document says it has never opened.

It survived **eleven** places across four gate runs. Six were fixed after the
third; the gate's fourth run found five more **in the facts blocks** — the layer
the body fixes had not touched, and the layer this record spends a section arguing
is read standalone. Three of those five were immediately followed by a `Read:`
fact that reversed them, so a listener got two opposite instructions in successive
sentences joined by "So".

`uk_rules.md` also stated the unqualified claim twice more, in its opening
paragraph and Key Takeaway 1 — the owner document asserting in its summary layer
exactly what its own body had just disclaimed. All now carry the Casebook caveat.

**Also found in the same runs:**

- **A misattributed quote in the owner document.** `uk_rules.md` credited
  *"unless otherwise stated, all rules will be enforced in line with the IIHF
  Rule Book"* to the *Rules & Regulations*. It is the **In-House Rules'**
  Introduction. The misattribution was load-bearing — the whole force of the
  quote is that the **current** instrument points the other way, and it
  credited the older superseded one. The other eleven carriers had it right.
- **`getting_started.md` — the twentieth document**, never touched by any pass,
  carrying the unscoped claim in the corpus's day-one page.
- **Two summary layers missing the safe default entirely** — `getting_started`
  §1 and `rink_map_and_glossary` Key Takeaway 7 ended at "check locally", which
  leaves a listener with no fallback on a two-minute penalty.

The pattern across four gate runs is worth stating plainly: **every block after
the first was caused by a fix for the one before it**, and three of the four
were scripted sweeps that hit a clause they were not aimed at. The record now
says to re-grep after every sweep — case-insensitively, which is how the gate
found two instances my own grep had missed.

---

## Carried forward

- **The `Rule:` label is doing three jobs** in the added facts — a rule number,
  a *status* ("unsettled", which is a corpus judgement, not a rulebook rule),
  and a coaching instruction. Partly split this round; the convention should be
  settled corpus-wide rather than per-fact.
- **Ownership.** `time_and_space.md` now restates trapezoid geometry that
  `rink_map_and_glossary.md` owns. It should point rather than restate.
- **Two blocks are at the hard cap** — `puck_support_and_spacing.md` §breakout
  support at 11, and `time_and_space.md` §6 at 8 `Rule:` to 2 coaching. Both
  are arguably two sections.
- **`goaltender`, `breakouts`, `zone_entries`, `rules_primer`,
  `rink_map_and_glossary` and `getting_started` were brought into this diff
  late**, when the gate found the owner documents inconsistent with their
  dependants. `site-reviewer` had already run by then and saw **16** of the 20
  pages; the four it did not see are `rules_primer`, `rink_map_and_glossary`,
  `breakouts` and `getting_started`. The gate checked the one structural risk
  among them — the edited GFM table row in `rules_primer` — and counted its
  cells against the header. The rest are prose insertions.
- **`rink_map_and_glossary` credits the sub-56 m × 26 m authorisation to
  England Ice Hockey**, while this round's new text in `time_and_space` and
  `puck_support_and_spacing` credits the 2025-26 In-House Rules and names two
  Scottish rinks under it. The diff has made the owner document the odd one
  out. Pre-existing, and now conspicuous.
- **`breakouts` KT10** still uses the bare "most rec leagues have no trapezoid"
  hedge without the "outside Britain" qualifier. Its surrounding instruction is
  conservative, so nothing unsafe lands. `rules_primer` KT7 carried the same
  hedge and was qualified, because unlike `breakouts` it is a routing sentence
  rather than an instruction — and routing a British reader into the claim is
  what this round exists to stop.
- `switching_positions.md:46` names the trapezoid in a bare list of rules to
  know. No claim is made about applicability, so it was left alone
  deliberately.

---

## Mechanical checks

```
check_links.py    PASS
check_facts.py    26 documents · 764 blocks · 4423 facts · PASS
check_secrets.py  no findings
```

Every document making a trapezoid claim now carries the British status;
verified by sweeping for the claim and for `22.3` in the same file.

---

## What this round could not have found

- **IIHF Rule Book v1.1**, which is what Britain actually adopts. Every
  verification here reads **v1.0**, including the confirmation that the rule is
  numbered 27.7. If v1.1 renumbered it, this round propagated a wrong number to
  sixteen documents very carefully.
- **Whether "assume it binds" is right at all.** If EIH's suspension is in fact
  still live, the corpus now tells British goalies to stay inside a trapezoid
  that is not painted and not enforced, and tells British forecheckers to dump
  wide for no benefit. The "unsettled" framing is honest, but it is a framing;
  only a league enquiry or a Rule Bulletin settles it.
- **Documents that teach around the rule without naming it.** Both reviewers
  found the affected files by grepping for `trapezoid`. A breakout drill saying
  "your goalie can come and get that" is invisible to that method.
- **A before/after diff of the generated SSML.** `site-reviewer` covered the
  rendered pages and `facts-reviewer` generated narration for two documents, but
  nobody diffed the whole corpus's SSML across this change. That is what would
  catch an added clause landing somewhere the speech transform discards — the
  class of defect the table-cell finding turned out to be.
- **The tree moved while `facts-reviewer` read it.** It reported against a
  timestamped snapshot and said so. Anything it saw may have been re-edited
  before its report landed.

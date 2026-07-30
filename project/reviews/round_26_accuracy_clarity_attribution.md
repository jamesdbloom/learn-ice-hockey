# Round 26 — accuracy, clarity, and attribution-by-inference

*Five reviewers, five briefs none of them had run before. 30 July 2026.*

| | |
|---|---|
| Reviewers | `safety-reviewer` · `facts-reviewer` · `content-reviewer` · `rules-verifier` · `source-verifier` |
| Criticals found | 3 |
| Criticals fixed | 3 |
| Majors found | ~25 |
| Majors fixed | 3 (the attribution sweep, IIHF 19.3, and the eligibility gate) |
| Majors deferred | the rest, itemised below |
| Corpus commit at start | `b1251c1` |

---

## The brief, and why each half was new

A repeated brief re-finds nothing, so each reviewer got a question no earlier
round had asked:

| Reviewer | Brief |
|---|---|
| `content-reviewer` | **Clarity to a newcomer.** Twenty-five rounds attacked accuracy; none asked whether a beginner can follow the result |
| `source-verifier` | **The attribution-by-inference sweep**, the class [round 25](round_25_in_house_rules_issuer.md) discovered |
| `rules-verifier` | **The British/IIHF layer** — a week old, five rounds of churn, least independent scrutiny |
| `safety-reviewer` | **The omission pass at corpus scale** — round 20's method applied to documents rather than facts blocks |
| `facts-reviewer` | **The facts layer as it stands now** — bodies rewritten under blocks that were not |

---

## The three criticals

**CR1 · A dropped negation, in the corpus's most-repeated defect.**
`puck_support_and_spacing.md` told a reader that shorthanded *"you may ice it at
all"*. Its own body says a shorthanded team below Youth 15-Only **cannot** ice
the puck at all. "At all" is only grammatical under a negation, so what survived
extraction was the exact inversion of the rule — attached to the very citation,
USA Hockey 624(b)(1), that establishes it.

This is worse than the historical version of the same defect. Bare would have
been an omission; this was a licence. A youth penalty kill built on
length-of-ice clears is whistled every time, giving the power play a
defensive-zone draw with no line change. **Fixed.**

**CR2 · A summary layer that said the opposite of its body.**
`forechecking_systems.md` warns in its body that a dump-in leaves the retriever
facing the end boards with a forechecker on their back — *"the exact scenario the
checking-from-behind and boarding rules exist for"*. Its Common Mistakes said
*"off a dump-in you have a head start and can be aggressive"*, and its Key
Takeaways repeated the tactic with no caveat.

The document's own tactic manufactures the hazard, and the layer the podcast
extracts told the reader to exploit it. **Fixed in both layers.**

**CR3 · A defenceless posture named as the trigger to hit.**
`offensive_zone_play.md` listed *"the winger is flat-footed **or facing the
glass**"* as the read for a pinch, gave *"take the player or take the puck"* as
the governing principle, and attached one legal limit — a timing limit, NHL
56.2(iii).

A player facing the glass is defenceless. NHL 41.1 puts the onus on the checker;
checking from behind has **no minor option** in either the NHL or IIHF book. The
section also taught a check with **no checking-eligibility gate anywhere in the
document**, so "take the player" read as licence in every non-check adult league,
every 12U-and-below classification and all girls' and women's play. **Fixed in
all four layers.**

---

## The finding that is this round's real lesson

**Round 25's attribution fix reached four documents and stopped.**

Ten further sites still called the In-House Rules England Ice Hockey's, and two
of them attributed the **Scottish** National League's overtime format to the
**English** association. All ten are now corrected.

That is the corpus's signature failure — a correction that reaches the body and
not the layer beside it — committed in the same week as, and by the same hand
as, the record that describes it. The record for round 25 is 160 lines about
tracing a claim to primary text. It did not include the step "then grep the other
32 documents", and so that step did not happen.

**The propagation rule is not a reminder, it is the work.** Getting the claim
right is the smaller half.

---

## Confirmed sound, and worth recording

`rules-verifier` closed the corpus's self-declared largest British gap:
**IIHF v1.1 is on disk** at `sources/iihf_rules_v1.1.txt`, so every IIHF
citation is now verified against the edition Britain actually adopts. It
re-derived round 23's comparison independently — identical rule-number sets,
no substantive body difference.

It also verified, from primary text: the whole trapezoid layer including the
stale-27.8 framing across nine documents; the stick-lift structural argument in
three books; the high-sticking waist floor including that *"waist"* occurs
exactly once in the IIHF book and zero times in Hockey Canada; charging's
no-stride-count; faceoff order; and **every IIHF rule number cited corpus-wide**
— 101 distinct, none attributing a nonexistent rule.

Three honest disclosures were attacked and upheld, including round 25's own
finding that the In-House Rules name no issuer.

`safety-reviewer` re-verified eleven previously-propagated caveats and found all
holding, and singled out `skating.md`'s explicit reconciliation of the two chin
instructions — chin in falling backwards, chin **up** going forwards into the
boards — as better handled than anything else it read.

`content-reviewer` found **no criticals** and said so plainly: comprehensibility
defects stop a reader rather than injure one, so a clean critical count there is
a statement about the brief, not the corpus.

---

## Deferred, with reasons

Roughly twenty-two majors and minors are **not** fixed here. They are recorded
rather than actioned because this round produced more than one pass can safely
absorb, and a rushed fix is how round 24's gate came to block six times with
every block after the first being a defect in a fix.

**Accuracy, from `rules-verifier`** — the neck-protector cross-book comparison
overstates the gap, because IIHF junior hockey is *already* a 10-minute
misconduct under 102.7 and 202.7; BUIHA Varsity OT is a third route to overtime
the summary excludes; NIHL Playoff Final Weekend semi-finals are 20 minutes of
5-on-5, not 5 of 3-on-3; EIH's text says *"consider it mandatory"* where the
corpus says *"makes it mandatory"*; and `uk_rules.md` states 472 rule numbers
where the extraction gives 474.

**The facts layer, from `facts-reviewer`** — NHL 67.4's goalkeeper exemption
dropped in two blocks of four, which read aloud tells a goaltender that
smothering in his own crease is a penalty shot; the trapezoid's sole exception
carried in 5 blocks of 14; eleven blocks carrying a rule-set flag their own
*body* does not state, which is round 10's defect running backwards; and
`forechecking_systems.md` line 555, a `##` holding four rule facts no subsection
covers and carrying no block at all.

**Clarity, from `content-reviewer`** — the 1-3-1 personnel prevalence claim,
which the style guide names by name as unverified, stated bare in
`special_teams.md` twice and inside the glossary definition, while
`how_to_watch_hockey.md` already carries the correct label; "the wall" used in
two incompatible senses with only one in the glossary; "bumper", "strong side"
and "weak side" undefined in documents that turn on them; `getting_started.md`
using four undefined terms in section 1 of the entry-point document; "stay
tight" as the penalty-kill instruction in three position documents while the
owner has three concrete landmarks; Key Takeaways grown to a measured 201 words
in one case, in the layer the podcast extracts.

**Safety, from `safety-reviewer`** — a Key Takeaway asserting *"you cannot be
checked from behind"* behind the net, which is false and borrows a penalty's
name to do it; the wall-shield posture taught as pure advantage in three layers;
"take the body" with no eligibility gate in `playing_without_the_puck.md`; NHL
49's match-penalty half omitted where the corpus coaches skate use in a pile of
skates; no concussion instruction in the document that owns taking a hit; shot
blocking instructed twice in `winger.md` with no technique and no pointer; and
"back to the wall" used in two opposite senses across five documents, where the
safe instruction inverts when read alone.

---

## Dimension coverage

| # | Dimension | Checked | By |
|---|---|---|---|
| D1 | Rules accuracy | **Yes** | `rules-verifier`, ~70 claims against eight books |
| D2 | Rules travelling without exceptions | **Yes** | `rules-verifier` F1, `facts-reviewer` |
| D3 | Rule-set divergence | **Yes** | `rules-verifier` |
| D4 | Citation integrity | **Partly** | `source-verifier` — still running at the time of writing |
| D5 | Provenance | **Yes** | the attribution sweep |
| D6 | Negative existence | **Yes** | `rules-verifier` verified three; `content-reviewer` upheld twelve |
| D7 | The cardinal rule | **Yes** | `content-reviewer`, `facts-reviewer` |
| D8 | Numeric ownership | **Yes** | `content-reviewer` M10, `facts-reviewer` |
| D9 | The summary layer | **Yes** | CR2 lives here |
| D10 | The key-facts layer | **Yes** | `facts-reviewer`, all 764 blocks |
| D11 | Reader safety | **Yes** | `safety-reviewer` |
| D12 | Read-aloud integrity | **Yes** | CR1 and the "back to the wall" finding are both this |
| D13 | Folklore | **Yes** | `content-reviewer` M1 |
| D14 | Structure, style, clarity | **Yes** | the whole `content-reviewer` brief |
| D15 | The rendered site | **No** | Out of scope; no `site/` change |
| D16 | Speech-transform fidelity | **No** | Out of scope this round |

**Mechanical:** `check_links.py` ✔ · `check_facts.py` ✔ (764 blocks, 4,432
facts) · `check_secrets.py` ✔

---

## What this round could not have found

Each reviewer's own limits are in its report; three are worth lifting here
because they name the next rounds.

**Nobody has listened to the corpus.** `content-reviewer` read it on a screen and
says so: *"Running `md_to_speech.py` over three documents and actually listening
to the output is a round nobody has run."* CR1 was a read-aloud defect found by
eye. There will be others.

**The twenty trapezoid restatements have never been diffed against each other.**
Twenty documents carry the England-and-Wales suspension, several at 120–180
words, written across at least three rounds. `content-reviewer` checked only that
the phrase was present. It calls a divergence among them *"the single most likely
place in the corpus for one to exist right now"*.

**A hazard whose vocabulary nobody guessed is still there.** Both
`safety-reviewer` and `facts-reviewer` found their criticals only because a
document happened to name the posture out loud. `safety-reviewer` grepped nine
documents it did not read and names `breakouts.md` — which owns the other side of
the dump-in — as the one to scope next.

---

## Proposed scope for the next round

1. **The deferred list above**, worked through in two or three passes rather than
   one, with the gate run between them.
2. **Diff the twenty trapezoid restatements** against `uk_rules.md`. Cheap,
   high-yield, never done.
3. **Listen to three documents** through `md_to_speech.py` — one rules-heavy, one
   systems, one position. D16 exists and has never been exercised by ear.
4. **A different jargon word list.** `content-reviewer` tested nineteen terms and
   names the untested set: *the house, quiet ice, walk the line, low-to-high,
   hinge, swing, curl, escape, overspeed, VH/RVH, mohawk*. It also read neither
   `goaltender.md` nor `skating.md`, which carry the densest position vocabulary
   in the corpus.

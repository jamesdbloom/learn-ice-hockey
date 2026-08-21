# Plan — what is still open after the round-36 verification session

Written 21 August 2026, after a machine crash killed a commit gate mid-audit and the
work was resumed. Four reviewing agents and one gate ran. This file records **what was
closed, what was found and left open, and what nobody has looked at**, so that none of
it depends on one session's memory.

**Status at the time this file ships.** It is committed alongside the change it describes. The
commit gate cleared that change on 21 August 2026; the earlier BLOCK it records was lifted by the
work in §§1, 4.3, 8b and 8c.

> ### Closed after this plan was first written
>
> A second work pass closed most of §3 and three of §4.3's majors. **The review record
> now exists**: [`../reviews/round_36_sections_27_28.md`](../reviews/round_36_sections_27_28.md),
> with all fifteen dimensions filled in and D5 and D15 declared **Not checked** rather
> than left silent. That satisfies the gate's C3 coverage requirement and records the
> `rules-verifier`, `facts-reviewer` and `safety-reviewer` runs it was blocking on.
>
> Also closed since: **CR4** the IIHF 24.8 goalkeeper carve-out and **CR3** the NHL 21.1
> caveat, both of which needed the `defending_the_rush.md` block consolidated — two
> `Rule:` lines were merged at 255 and 299 characters against the 300-character allowance
> for `Rule:`, nothing was dropped, and the block is back at exactly 11. The 21.1 caveat
> now reaches the body, the facts block and Common Mistakes rather than a Key Takeaway
> alone. **MA2** both shed hedges restored. **MA3** the two clauses round 33 named as lost
> and never restored. **MA4** the `Convention:` that contradicted its own section. **MI1**
> and **MI2** the two unresolvable read-aloud referents. **§4.3 M1** `Forecheck` and
> `Backcheck`. **§4.3 M2** a `1-3-1` entry — §8 now holds 68. **§4.3 M13** the unsourced
> *"most goals are scored low"* labelled in its owner, not deleted.
>
> **Still open below:** §3.5, §3.6 and part of §3.7; fourteen glossary majors; and all of §§5–7.
> ⚠️ **§2's table is a record of what the gate blocked on, not a live list** — C3, C4, C5, C6, C8
> and C10 and the governing-document race were all closed before this shipped. Every other ⬜ is
> live.

---

## 1. Closed in this session — do not redo

| Item | Evidence |
|---|---|
| **`sources/ibc.txt` now present and rebuildable** | The root cause was that `scripts/fetch_sources.sh` never fetched it, and `sources/*` is gitignored — so no session could reconstruct it. Added to `DOCS`, added a row to `sources/README.md`, then deleted the file and re-ran the script to confirm it rebuilds byte-identical (77,237 bytes). |
| **Every ITBC quotation in the corpus verified against the PDF** | `"high risk check, possibility of only partial or no body contact…"` (ibc.txt:307), the one-stride condition (:309-310), the entry title `"Shoulder Check – open ice contact"` (:304), and Contact Confidence A/B/C (:667-705). Nothing was fabricated; the gap was availability, not accuracy. |
| **All eight never-verified rule numbers confirmed** | IIHF 24.8, USA Hockey 639(a) Note / 639(b) / 639(c), Hockey Canada 8.6(b), Hockey Canada 8.7, NHL 21.1, NHL 57.2 — each grepped from primary text with operative wording quoted. |
| **The facts-count "discrepancy" is not a parser bug** | HEAD 4,582 · working tree 4,593 · index 4,596 — three states of the same 26 documents, with agents editing between. `round_33_wave_a_findings.md:2571`'s parenthetical *"correcting the record: 4,591 facts, not the 4,593 quoted earlier"* asserts a disagreement the evidence does not require. **Do not "correct" this again without saying which tree state was measured.** |

### Content fixes applied (all unstaged, all in the working tree)

Three safety criticals, one factual error in three places, and five glossary defects:

- **`defending_the_rush.md:570`** — the bold lead-in *"Touch the puck first and you are safe from the penalty shot"* was unscoped. **USA Hockey has no puck-first carve-out** (`grep -ci 'puck first' sources/usah.txt` → 0; 616(a) awards the penalty shot and carries none). Scoped to the NHL and IIHF books.
- **`defending_the_rush.md:538` and `risk_management.md:537`** — both facts blocks credited USA Hockey 639(a)'s Note with the puck-first carve-out. It is scoped `"under this rule"` and turns on the *action* (a clear hook- or poke-check), not on reaching the puck. Both rewritten.
- **`risk_management.md:555`** — the quotation elided *"shall be assessed **under this rule**"*, the words that scope it. Restored, and the framing corrected from "goes further" to *a different test, not a wider one*.
- **`uk_rules.md:289`** — told British readers the IIHF *"writes no match penalty at all for boarding, high-sticking or an illegal check to the head"*. True, but the implicature is false: `grep -ic 'match penalt' sources/iihf_rules.txt` → **0**. The book has no match penalty for anything. Rewritten with the counterweight that high-sticking 60.4 and illegal check to the head 48.3 are Reference Table 6 entries, so a first major ejects automatically.
- **NHL Table 5 row count, three sites** (`uk_rules.md:289`, `rules_primer.md:332`, `rules_primer.md:847`) — the corpus said *"eighteen rows … thirteen and five"*. The table has **19**: 13 non-fighting plus **6** fighting-related. `Fighting` is its own row with its own Rule 46 cell and its own "Major only" checkmark, not a group header. Confirmed independently from `sources/nhl_rules.txt:9738-9761`. Corrected to nineteen / six.
- **`risk_management.md:669`** — said IIHF 57.3/57.4, USA Hockey 639(b) *and Hockey Canada 8.6(b)* all escalate *"for a reckless trip"*. Hockey Canada's trigger is **injury**, not recklessness — 8.6 writes no reckless-endangerment tier at all. Corrected.
- **`puck_handling.md:375`** — paired "NHL 21.1 … match penalty" with "IIHF Rule 21" in one facts line. They are different rules at the same number: IIHF 21 is **Dangerous Actions**, a major plus automatic game misconduct, confined to conduct *"not covered by the playing rules"*. Corrected.
- **`rink_map_and_glossary.md`** — nine glossary entries added and one rewritten; two ownership notes removed (non-negotiable 6); a misused `⚠️` removed; `Traffic` and `Shoulder check` given their second senses after both were found to be homonyms with penalty consequences; `Net drive` given its crease caveat; `Post` and `Traffic` alphabetically reordered.

---

## 2. Blocking the commit — the gate's own list

The gate returned **BLOCK**. Four of its conditions were addressed by this session's agent
runs; **write the results into the review record**, because the gate checks the record, not
the agents' existence.

| Gate condition | State |
|---|---|
| **C3 — coverage statement for §§27–28** | ✅ **Written** — [`../reviews/round_36_sections_27_28.md`](../reviews/round_36_sections_27_28.md), all 15 dimensions filled in. Previously: `round_33_wave_a_findings.md` carries coverage statements through §26.5 and stops. §§27–28 made the largest and most recent changes, including two criticals. Write one. |
| **C3 — D10 on the two merged facts blocks** | ✅ `facts-reviewer` has now run on `defending_the_rush.md:135` and `offensive_zone_play.md:169`. Record it and its findings (§3 below). |
| **C4 — rules claims in §§27–28** | ✅ `rules-verifier` has now run. All eight new rule numbers confirmed; one count error found and fixed. Record it. |
| **C6 — the three unreviewed rewrites** | ✅ `safety-reviewer` has now seen `defending_the_rush.md` `:568`, `:578`, `:832`. Three criticals found, all fixed. Record it. |
| **C8 — the shipping diagram has no review** | ⬜ **Open, and worse than "untracked".** `body_contact_and_battles.md:158` ships `![](diagram:rush-gap-and-angle)`. `round_35_readability.md:109` credits its review to §14 of `round_34_diagram_notation.md` — **but `rush-gap-and-angle` appears nowhere in that file.** §14 names only `winger-dz-rim`, `winger-dz-reverse` and `off-wing-open-to-the-ice`, and every defect it records is about those three. Coverage is *asserted, never demonstrated* — the style guide's own sharpest failure shape. A second inconsistency confirms it: `round_35:104` lists the four quoted placements as `rush-gap-and-angle`, `unmarked-but-unavailable`, `support-angles`, `support-triangle`, while `:211`'s deixis sweep cleared `support-triangle`, `support-angles` and **`breakout-d-to-d`** — not in that list — and omitted this one. **The two lists do not reconcile, so trust neither.** Staging the record would therefore NOT close C8 honestly. Options: review the diagram properly, or drop the diagram hunk. (`diagram-reviewer` dispatched 21 August 2026.) |
| **C10 — nobody has seen a rendered page** | ⬜ **Open.** `round_33_wave_a_findings.md:2586` records that Chrome's safety categoriser refused every navigation. `site/src/plugins/remark-corpus.mjs` changes how **every facts value in the corpus renders** and adds five new `<em>` nodes with no CSS rule targeting emphasis inside a facts value — *"probably fine; unseen."* The gate independently confirmed the DOM is right (0 literal `*` in any `facts__value`; the diagram inlines; 6,980 internal links resolve). The **visual** half is unchecked. |
| **C5 — no citation refetched** | ⬜ **Open.** `source-verifier` has swept 39 of 629 citations and did not run this round. Exposure is narrow — the diff is overwhelmingly rulebook rule numbers — but C5 is declared *open*, not out of scope, so it is unevaluated rather than passed. |
| **Governing document race** | ⬜ **Open, needs a decision.** `project/content_style_guide.md` is modified and **unstaged** (+146/−1). It rewrites a writing rule and adds a whole new `## Diagrams and their notation` section — the spec governing the one diagram this commit ships. `round_33_wave_a_findings.md:2497` names this as the `239f70d` race by definition. **One must land before the other.** Recommendation: land the style guide and the round-34 record first, then the content commit against a settled spec. |

**Also from the gate:** twelve content files are staged, not ten — `uk_rules.md` and `puck_handling.md`
were omitted from an earlier brief and both make substantive rule claims. Re-derive the list
with `git diff --cached --name-only -- content/` rather than trusting any prose summary.

---

## 3. Verified findings not yet fixed

These are all confirmed against primary text. **None is a deletion candidate** (non-negotiable 3).

### 3.1 Two safety criticals blocked on the same facts block being at `HARD_MAX`

`defending_the_rush.md:532` holds **11 facts — the hard maximum**. Both fixes below need
room, so the block must be **consolidated, not appended to**. `facts-reviewer` names the
four `Rule:` lines at `:540`–`:543` as the candidates: they say *"not capped at a minor"*
three times.

1. **The IIHF goalkeeper carve-out is missing.** `"from behind"` is the operative condition
   in three facts in that block, with one exception stated. But IIHF 24.8 criterion (II)
   reads *"The infraction must have been committed from behind (**except a foul committed
   from the front by the goalkeeper on a 'breakaway' situation**)"* — confirmed at
   `sources/iihf_rules.txt:2462-2463`, and genuinely absent from NHL 57.3(ii)
   (`nhl_rules.txt:6446`, which ends *"committed from behind."* full stop). **Every British
   reader is under that book.** A goaltender who hears only "from behind" has been told a
   front-on foul is not a penalty shot. Under their own book it is.
   Suggested line (156 chars):
   `Rule: Under the IIHF book "from behind" has one exception — 24.8's criterion (II) carves out a foul committed from the front by the goalkeeper on a breakaway`

2. **The NHL 21.1 caveat reaches no layer but the Key Takeaway.** It exists only at
   `defending_the_rush.md:834`. The body at `:570` tells the reader the puck-first carve-out
   *"converts the worst outcome in Rule 57 into a two-minute minor"* — and NHL Rule 57 has
   exactly four subsections with no major and no match tier, so **21.1 is the only NHL route
   above the minor** and the caveat is load-bearing. Verified: `nhl_rules.txt:2635-2637`,
   *"A match penalty shall be imposed on any player who deliberately attempts to injure or
   who deliberately injures an opponent in any manner."* Needs to reach the body at `:570`,
   the facts block, and Common Mistakes at `:778`. `puck_handling.md:936` already carries it
   correctly — copy that treatment.

### 3.2 The merge that dropped clauses — `offensive_zone_play.md:165`

`round_33_wave_a_findings.md` §7.1 named **three** clauses the merge lost and **one** was
restored. The other two are the identical defect with the identical remedy available, and
nothing forced the trim (each original line was ~125 characters against a 200 limit).

- **`"attack the net from behind"`** — `grep -rn "net from behind" content/` returns
  **exactly one hit**. One body bullet, in 37 documents.
- **`"in the inside lane rather than flat on the boards"`** — as *offensive-zone* support it
  exists at `:182` and nowhere else. This is the sharper loss: it is a `Position:` fact, and
  that clause is the only sentence saying where the level player actually stands. Standing
  flat on the boards is the exact error the body was written to prevent.
- Two further clauses nobody named: *"the outlet that lets it go backwards to safety"*
  collapsed to *"the outlet"* — the term is now used and not defined, against the
  define-on-first-use-for-read-aloud rule — and *"a short pass away"* went with it.

The block holds 7 facts against a cap of 8, so **one line may be added**.

### 3.3 A `Convention:` that contradicts its own section — `offensive_zone_play.md:171`

The staged fact says which player takes which role *"is a coaching choice"*. The section
body says the opposite: `:175` *"roles defined by order of arrival … reassigned every time
the sequence of arrival changes"*, `:177` *"arrival order is what decides the label"* — and
the block's own second fact at `:167` says the same. What **is** a coaching choice is the
**rotation rule**: who may go below the puck. `puck_support_and_spacing.md:435` states it
correctly and is the model. Read aloud it has two further faults: *"the three"* has no
antecedent and *"ask which one"* trails off.

### 3.4 Hedges shed in the layer the podcast extracts — `defending_the_rush.md:135`

**Two** qualifiers, not one. The pre-merge block read *"**around** a stick and a half"* and
*"**roughly** a stick length"*; the merged line has neither, and promotes *"a stick length"*
to *"**one** stick length"*, which reads as a measurement rather than a rule of thumb.
**This document owns these numbers**, and every borrower preserves the hedge the owner has
now dropped — `time_and_space.md:264`, `zone_entries.md:694` and `:853`,
`switching_positions.md:170`, `rink_map_and_glossary.md:563`, `defender.md:298`, and
`defending_the_rush.md:14`'s own Overview. The mitigating `Convention:` at `:137` is a
*separate fact* and does not travel with `:135` when read aloud.

Also dropped from that block: *"close enough to poke check, far enough that one deke doesn't
beat you"* (body `:145`) — the only sentence telling a reader **how to adapt**. The block is
at 4 facts and has room for four more.

### 3.5 Hockey Canada gaps

- **`offensive_zone_play.md:688`** gives a four-book tier list with **three** books. The
  missing one is **Hockey Canada 8.3(b)**, which the body at `:740` says reaches the tier on
  *"the degree of violence of the impact"* with nobody hurt and is mandatory where a late hit
  injures — i.e. the **harshest of the four** for the reader most likely to be pinching in a
  checking league. That block is at `HARD_MAX` (11); the two `Rule:` lines at `:695`–`:696`
  duplicate the blockquote at `:733` nearly verbatim and are the consolidation candidates.
- **Hockey Canada has its own puck-first carve-out and none of the staged puck-first
  passages mentions it** — `hc.txt:7064-7066` (*"unless they make contact with the puck prior
  to contacting their opponent"*), plus Interpretation 1 at `:7077-7080` and Interpretation 2
  at `:7081-7084`. Interpretation 2 has **no referee-judgement qualifier at all**, making it
  *more generous than the NHL's*. `rules_primer.md:772` carries both. Adding it completes the
  four-book picture.
- **`hc.txt:7072` — 8.6(c) *"No Match penalty may be assessed for tripping."*** Hockey
  Canada's tripping ladder stops at major plus game misconduct. The corpus never claims
  otherwise, so nothing is wrong, but it is the carve-out a reader would want.

### 3.6 `uk_rules.md` has no body section for the thing it warns about

The entire IIHF 20.4 / Table 6 / Table 7 adult first-major-ejection material lives **only**
in a Common Mistakes bullet (`:226`) and a Key Takeaway (`:289`). The document has **zero
facts blocks**. A British adult who reads the body is never told that a first major for any
of twenty infractions ends their game unconditionally — the body's only major-penalty
discussion (`:194`–`:196`) is scoped to women's and junior hockey. Add a body subsection
under *"The amendments that change what you do"*.

Related, same document:

- **`:226`** — *"41.3 lets a boarding major stand with no game misconduct at all"* is verified
  true (`iihf_rules.txt:3904-3908`), but read aloud alone it is a reassurance sentence about
  boarding with no counterweight in the same sentence, at the end of a ~250-word bullet. Move
  the 41.4 exposure into the same sentence.
- **Table 7 is read as discretionary in four places** and that is almost certainly right —
  but **IIHF 20.4's own words say *"the Reference Tables"*, plural, with no qualifier**, and
  the corpus resolves the tension silently on the lenient side. House convention elsewhere
  (the Rule 84 / Varsity OT treatment at `uk_rules.md:178`) is to disclose. One clause.

### 3.7 Read-aloud minors in staged facts blocks

- `body_contact_and_battles.md:420` — `Rule: All four bind every division…`. **"All four"**
  resolves only from a heading a listener never hears. Name them.
- `body_contact_and_battles.md:421` — *"the restricted form"* of Rule 101.1 is undefined in
  the fact and unrecoverable read aloud.
- `defending_the_rush.md:540` — opens with a dangling **"But"**.
- `offensive_zone_play.md:698` and its new twin — a negative existence claim plus a coaching
  instruction wearing a `Rule:` label. It clears the checker because "IIHF Rule Book" matches
  the citation regex. Pre-existing house practice and defensible, but worth a decision.

---

## 4. The glossary — `rink_map_and_glossary.md`

Unstaged. Nine entries added this session; §8 now holds **67**.

### 4.1 Open now

- ⬜ **`Forecheck` is a confirmed homonym** (see §4.3 M1, which is sharper still). `neutral_zone_systems.md:84` defines
  **"Neutral zone forecheck"** as *"the structure your five players hold in the middle third
  while the opponent tries to break out"*, while the glossary defines `Forecheck` as pressure
  *"in **their** defensive zone"* — which excludes it. The entry then names shapes by number
  (2-1-2, 1-2-2, 1-3-1, 1-4) and **those same numbers name neutral-zone forechecks**
  (`neutral_zone_systems.md:823` cites a "1-2-2 Neutral Zone Forecheck"), so nothing
  disambiguates. Found by the sweep in §4.2; not yet fixed.
- ⬜ **A `content-reviewer` entry-by-entry pass is running** over all 67 entries. Action its
  findings.
- ⬜ **`"most goals are scored low"` is unsourced in its owner.** It exists in
  `goaltender.md:312` and nowhere else in the corpus, has no owner in the style guide's
  numeric-facts table, and carries no source. The glossary's `Butterfly` entry no longer
  restates it — the claim was **not deleted**, it stands untouched in its owner — but
  **`source-verifier` still needs to source it or label it there**, and then propagate.
- ⬜ **`Post` drops its owner's coaching-choice hedge** — `goaltender.md:300` (*"You can get
  stuck"*), `:304` (*"it is one school, not the only one… ask what yours is"*), `:1011`
  (*"What nobody defends is dropping to a post out of habit, without a read"*).
- ⬜ **Four pre-existing ownership notes** violating non-negotiable 6, at `:93`, `:364`,
  `:621`, `:737` — all of the *"[X] **owns** …"* shape. Not swept, because sweeping is its own
  change needing its own review and this file is a known contention target. (Note `:314`'s
  *"the weak-side defenceman owns it"* is correct hockey usage — **do not sweep the word.**)
- ⬜ **§8's preamble promises *"Terms in **bold** inside a definition are defined elsewhere in
  this list"*** and several **pre-existing** entries break it: **weak-side**, **1-3-1**,
  **above the puck**, **crease**, **high slot**/**low slot**. Decide: fix the entries, or
  amend the preamble to say "elsewhere in this document".
- ⬜ **Three entries sit out of alphabetical order** — `D-to-D`, `The paint`, `The trap`. This
  is the file's existing convention of filing under the substantive word, and the convention
  is **itself inconsistent** (`The paint` files under *pa*, `The trap` sits before `Trailer`,
  which filing under *trap* would forbid). Decide the convention, then apply it.
- ⬜ **Voice and cross-link inconsistency** across the ten new entries: six close with a
  cross-link and four do not; `Butterfly` uses inline *"— see [X]"* where others use a
  sentence-final *"See [X]."*; some are third person and some switch to second.
- ⬜ **`one-touch` vs `one-timer`** was not added to Common Mistakes. `traffic`/`screen` and
  the three senses of `back door` were.

### 4.2 The sweep that found the homonyms — reusable

For each §8 headword, search every other file in `content/` for a definition-shaped statement
(`**Term** — `, `**Term** = `, `Term means`, `Term is`). **38 of 67 headwords** carry at least
one definition outside the glossary. Highest counts: Pinch (9), Goalmouth (8), Half-wall (7),
Reverse (6), Screen (6), Forecheck (5), Rim (4), Wheel (4), then Backcheck, Breakout,
Odd-man rush, Point, Step up (3 each).

Run it in memory over the files read once — a `grep -r` per headword takes over two minutes
and times out. The headword list is extractable from §8 with:
`sed -n '<§8>,<Common Mistakes>p' … | grep -o '^\*\*[^*]*\*\*'`

**This sweep found `traffic` and `shoulder check`, both of which had penalty consequences.**
It has never been run against anything but the ten entries added this session and the 67
headwords above. It has **not** been run in the other direction — for terms the corpus uses
that have **no** glossary entry at all.

### 4.3 The entry-by-entry pass — findings

A `content-reviewer` pass over all 67 entries returned **2 criticals, 16 majors and ~15
minors**. ⚠️ **That reviewer never opened a rulebook** — every rules claim it makes was
checked against *other corpus documents*, which is exactly how these defects propagate. It
names **C1, C2, M5, M8, M10** and one `special_teams.md` line as needing `rules-verifier`
before action.

**Closed already (both criticals, both verified against primary text first):**

- ✅ **`Empty net`** said *"icing does not apply"* to a shot at an empty net. **NHL Rule 81.3
  says the opposite in terms** — a goaltender who leaves *"to go to the players' bench to be
  substituted for an extra attacker"* does **not** nullify the call (`nhl_rules.txt:8617-8620`).
  The entry stated the true half of a two-part rule and dropped the half that traps a trailing
  team in its own end. This is the `"the kill cannot ice the puck"` shape the style guide
  records at line 556. Fixed.
- ✅ **`Icing`** stated the post-icing restrictions as universal. **NHL 81.4 carries three
  exceptions** (pulled goaltender, injured player, strength-changing penalty —
  `nhl_rules.txt:8624-8628`), and **USA Hockey Rule 624 contains no substitution provision at
  all** (scanned 624→625, zero hits), corroborating `rules_primer.md:295`. The style guide
  names this exact defect at line 402. Fixed.

**Open — ranked as the reviewer ranked them:**

- ⬜ **M1 `Forecheck` — worse than first thought.** Beyond the neutral-zone sense,
  `forechecking_systems.md:217` says *three of the glossary's own four named shapes* (the
  passive 1-3-1, the 1-4, the retreated 1-2-2) are usually played as **neutral-zone**
  structures — *"a '1-4' describes four skaters standing about 114 feet from the net they are
  supposedly forechecking."* And **the glossary contradicts itself**: §5:388 writes
  *"1-2-2 neutral-zone forecheck"*, a construction its own §8 definition excludes. `Backcheck`
  restates the narrow definition and inherits the defect — fix both together.
- ⬜ **M2 `1-3-1` is bolded six times in §8 and has no entry**, and the corpus has **three
  unrelated 1-3-1s** (power-play formation, neutral-zone trap posture, offensive-zone
  forecheck). `neutral_zone_systems.md:88` carries a `Never:` fact about precisely this
  confusion. All six bolded uses are the power-play sense. **The single highest-value addition
  to §8.**
- ⬜ **M3 `D-to-D` states a coaching convention as a law, in three places** — §8:551, §7:492
  (*"the rule about it is"* — the word the style guide reserves for rulebook text) and §5:376
  (*"— always"*). `risk_management.md:135` labels it `Convention:` and says *"some teams allow
  a D-to-D exchange high in the zone, above the tops of the circles"*; `passing_and_receiving.md:633`
  agrees. Cardinal rule, in the most visible possible place.
- ⬜ **M4 `Board battle` over-claims and drops a hedge its owner lists as unverified.**
  Glossary: *"far more often than with strength"*. `puck_handling.md:345` says *"often"* plus
  *"**Not always, and a large enough strength gap wins anyway**"*, and `:957` lists it in the
  document's own unverified-claims footnote. Also `body_contact_and_battles.md:657`, `:1179`.
  → `safety-reviewer`, since a smaller player acts on this.
- ⬜ **M5 `Tip-in` carries neither rule ceiling** its owner calls *"two hard ceilings… which
  almost no coaching article mentions"* — a tip contacting the stick **above the crossbar** is
  no goal (NHL 80.3, `shooting.md:218`), plus 80.1 and a Hockey Canada junior/senior divergence
  at `shooting.md:236`. → `rules-verifier`.
- ⬜ **M6 `Dump-and-chase` states the trapezoid's effect bare** in the very document whose §3
  establishes it applies in the NHL, KHL and IIHF only, that most North American rec and youth
  leagues have none, and that its England/Wales status is *unsettled*. The §5 entry at :400
  flags it correctly; the §8 entry does not.
- ⬜ **M7 `House league` is contradicted by the governing-body text its own owner quotes.**
  Glossary: *"you play within your own club rather than against other towns"*.
  `getting_started.md:286` quotes Hockey Canada: *"away games are rarely hosted more than an
  hour's drive away."* House league **has** away games. **Not a deletion case** — source and
  scope it. → `source-verifier` for the quotation.
- ⬜ **M8 `Faceoff` gives two of four answers on stick order**, in a document whose header
  promises British readers their IIHF flags. `faceoffs.md` has four: NHL 76.4, **IIHF 76.4
  agreeing word for word**, USA Hockey 613(a) reversing it, and **Hockey Canada 6.2(a)** —
  visiting player first at *every* spot. Its Key Takeaway reads *"Three answers in four books."*
  → `rules-verifier`.
- ⬜ **M9 `Outlet` defines one of three live senses** — the pass — and not the one that is
  *shouted at you*. `breakouts.md:44`, `on_ice_communication.md:174` and `puck_handling.md:457`
  all use it for the **player**; `how_to_watch_hockey.md:156` for the **place** (*"outlet spot"*).
- ⬜ **M10 "Off-side" carries four unrelated senses, two of them rule violations**, and
  `Offside` disambiguates none: the zone-entry rule; the weak side (§6:420); unnatural
  handedness side (§7:511, `shooting.md:155`); and *"lining up in an off-side position"* at a
  faceoff (`faceoffs.md:257`, Rule 76.3(v)). The style guide gives "stay high" a boxed warning
  for having *two* senses. → `rules-verifier` for 76.3(v).
- ⬜ **M11 `Breakout` gives six of nine options and calls them "common"** — inventing a
  prevalence rank the style guide's owner table (line 533) explicitly forbids
  (*"do not invent one elsewhere"*). `forechecking_systems.md:229` names the full nine and says
  *"not a shorter one"*.
- ⬜ **M12 `Cycle` puts a player at the net front where the owner puts them behind the net**,
  and treats low-to-high as a way to *run* a cycle where `offensive_zone_play.md:341` has it as
  one of four things that *end* one.
- ⬜ **M13 `Butterfly` is now hedged better than its owner** — see §4.1's *"most goals are
  scored low"* item. The fix belongs in `goaltender.md:312`, not here.
- ⬜ **M14 `Drop-in` / `Stick-and-puck` / `Shinny` state as definitions what the owner
  explicitly disclaims.** `getting_started.md:252`: *"These three words describe **conventions,
  not defined categories**… Treat the rink's own posted session description as the authority."*
  `getting_started.md:263` calls turning up to the wrong session *"the most common beginner
  mistake"*.
- ⬜ **M15 This file's Sources annotation contradicts its own body.** Body §3:165 says the
  two-line pass was abolished by a playing-rule change *"adopted alongside the new Collective
  Bargaining Agreement rather than by it"*; the Sources line at :741 says *"abolished under the
  2005 CBA"*. The correction reached two bodies and not this document's own Sources.
  → `source-verifier`.
- ⬜ **M16 `Activation` uses the word "legal"** for something no rulebook touches. `defender.md:435`
  has it correctly as a `Never:`, not a `Rule:`. And it is not absolute — `risk_management.md:421`
  and `game_management.md:181` both prescribe activating without cover when trailing late.
  *Secondary, unresolved:* `risk_management.md:440` puts activation *below the top of the
  circles*; `defender.md:379` and `offensive_zone_play.md:223` make the top of the circle itself
  the activated position. **Two documents, two boundaries** — the glossary sits above the
  disagreement without resolving it.

**Minors worth doing in one pass:** `The trap` defines by shape where the owner defines by
shape *plus intent*, and omits the answer the owner calls *"the most under-used of all"*;
`Chip` misses the clearing sense (`game_management.md:100`); `Regroup` opens with *"abandoning
a failed attack"* where the owner explicitly rejects that framing; `Screen` carries the act but
not the call and has no link — and needs a reciprocal pointer to `Traffic`; `Shorthanded` gives
no IIHF position, where `special_teams.md:619` says British hockey has the *simpler* rule;
`Goalmouth` — the outlier is `goaltender.md:500`, not the glossary; `Home plate` never mentions
the synonym **"the house"**; `Trailer` omits *"late man"*; `The paint` reads as a flat
prohibition where §5:328 teaches living at its edge.

**Two structural decisions:**

1. **The §8 bold promise is broken by 14 distinct terms**, most of which *are* defined in this
   document, in §§3–7. **Amending the preamble is far less disruptive than fixing the entries,
   and more truthful** — recommended wording: *"defined elsewhere in this document — in this
   list, or in the sections above."* Then add the one genuinely missing everywhere: `1-3-1`.
2. **Cross-links are systematically thin.** Only 21 of 67 entries carry any link, and nine of
   those are the ten entries reviewed this session. Twenty entries state a rule or an owned
   number with no link at all. One pass fixes it.

**The four ownership notes have suggested rewrites** that lose nothing a reader wants — e.g.
`:93` → *"The full list of England Ice Hockey amendments is in [UK and England Rules]; the
geometry is here."* The reviewer also ran the owner check **both ways** on `:621` and confirmed
`special_teams.md:615-641` does hold the rule, both carve-outs and the source. Separately it
flags `special_teams.md:853` for stating *"icing does not apply to a shorthanded team"* bare,
inside the owner document → `rules-verifier`.

---

## 5. The terminology plan — `team_tactics_terminology.md`

That plan is **stale in one place**: its §3 lists seven terms as having no glossary entry,
but **Outlet, Stretch pass and Walk the line have since been added**. The other four
(One-touch, Shoulder check, Net drive, Attack triangle) were added this session.

Still outstanding from it:

- ⬜ The IIHF-glossary tranche: **Lane · Lateral Feed · Numerical Advantage · Concentration of
  Attack · Cross · Commit · Close Coverage · Pinning Technique · Transition · Pressure
  (offensive and defensive) · Head on a Swivel · Puck Protection**.
- ⬜ **Backside coverage** and **defending against a second wave** — contents-list topics in
  §20 with no glossary entry; the plan says fetch the defensive-tactics companion first.
- ⬜ **The "quiet ice" conflict, to resolve rather than paper over.**
  `site/src/data/rink.json` records that relational terms including "quiet ice" are
  *"deliberately absent"* because *"those are not points on a rink"*; the IIHF manual defines
  **Quiet Zones** as a named area. Both are defensible — one is about a coordinate table, the
  other about vocabulary — but **whoever writes the entry must say so rather than silently
  reversing a recorded decision.**

---

## 6. Carried over from the interrupted session

- ⬜ **The Note-on-Language pointer-and-trim.** There are **nine** such sections, not eight —
  `neutral_zone_systems.md` uses lowercase *"A note on language"* and a case-sensitive grep
  misses it. The nine: `shooting.md`, `passing_and_receiving.md`, `winger.md`,
  `goaltender.md`, `defender.md`, `forechecking_systems.md`, `center.md`,
  `neutral_zone_systems.md`, `breakouts.md`. Two of them (`forechecking_systems.md`,
  `breakouts.md`) are in the staged set — do not edit those while a gate is auditing.
- ⬜ **Diagrams for the three undiagrammed glossary sections** — §1 (rink dimensions), §4 (the
  three zones), §7 (positions and shorthand). This touches `site/src/data/diagrams.json` and
  `site/src/diagrams/*.mjs`, which already carry uncommitted changes from a second agent's
  round-34 workstream. **Re-read before editing.**
- ⬜ **Link the orphaned diagrams page.**

---

## 7. Evidence-base gaps nobody can close by grepping

- ⬜ **`usah_case.txt` — the USA Hockey Casebook is not on disk and never has been.** The
  corpus already discloses this honestly at `body_contact_and_battles.md:1110`
  (*"a casebook situation could qualify the USA Hockey half"*). **That disclosure is correct
  and must not be stripped.** A casebook interpretation could change the answer on the
  head-down/ducking split without changing any file here.
- ⬜ **No Hockey Canada PDF is on disk.** A stray `Rule 7.8` sidebar header sits at
  `hc.txt:6400`, between Interpretation 3 and its own carve-out sentence — a PDF column
  artifact. The attribution was resolved **by reasoning, not by seeing the page**. Fetching
  the HC PDF would close it.
- ⬜ **The NHL text extraction shreds table columns.** `nhl_rules.txt:9727-9835` renders
  Table 5 as unattributable runs of descriptions, rule cells and checkmarks. The correct row
  count was only recoverable by refetching the PDF and running
  `pdftotext -layout -f 150 -l 150`. **Any future claim about an NHL reference table must come
  from the PDF, not the `.txt`.** This nearly cost a wrong count in three documents.
- ⬜ **`source-verifier` has swept 39 of 629 citations.** Across ~340 body-verified citations
  in this corpus, **every defect found was provenance**.

---

## 8b. The rendered site — findings from the D15 pass

The site was finally **seen**. Two refusals are on record and both matter: the Chrome MCP
extension was **not connected** (a different failure from round 33's safety-categoriser
refusal), and a fallback launch of headless Chrome with a remote-debugging port was **blocked
by the bash classifier**. The reviewer then used a third route — headless screenshots plus a
scratchpad instrumentation proxy over the built `dist/` — and **declared that it had worked
around a repeat refusal rather than stopping**. That disclosure is the right behaviour; the
judgement call is worth reviewing. Nothing in the repository was modified.

**Closed already:**

- ✅ **M1 — the sticky row label had no visible seam.** A real CSS bug, and the comment above
  the rule calls it a safety problem (DF37: a reader scrolled two columns right can read the
  "Typical rec / beer league" column as if it were the IIHF row). `.table-scroll table` sets
  `border-collapse: collapse`, so a cell border belongs to the **table's border grid, not the
  cell box**, and is not painted with the sticky cell as it slides. The background is a cell
  property and stuck; the border was not and did not. Replaced with
  `box-shadow: inset -1px 0 0 var(--border)`, which is a cell paint and survives sticky.
  Note this is the other half of commit `0c61559` — the intent was implemented, one of its two
  halves silently did nothing.
- ✅ **m3 — §8's lede contradicted itself on screen.** *"One or two sentences each."* sat
  directly above the new `1-3-1` entry, five sentences long, both visible at once. Rewritten —
  and the same edit closes the **bold-promise decision**, since most bolded terms really are
  defined in §§3–7 rather than §8.

**Open:**

- ⬜ **M2 — glossary entry heads are typographically identical to the bold inside the
  entries.** The `Icing` entry now runs 11 lines and contains **twelve** further bold
  fragments; the entry head is the same weight, size and colour as every one of them. Worst
  case seen: `Shoulder check` ends with a bold phrase starting a line, visually
  indistinguishable from a new entry beginning. **This is a direct consequence of this
  session's work** — the entries were short when the markup was chosen. Entries render as
  `<p><strong>Term</strong> — …</p>` with no `<dl>`/`<dt>`/`<dd>`, no hanging indent and no
  distinct term treatment. **Do not fix by deleting the embedded rule quotations — those are
  the substance.** Needs a markup or CSS change in `site/`, which is its own change needing its
  own review. A blanket `p > strong:first-child` rule is **not** the fix: that pattern is used
  throughout Common Mistakes and elsewhere.
- ⬜ **M3 — the §5 body-contact scoping caveat renders as a *note*, not a *warning*.** It is
  green with no ⚠️, while a comparable caveat in §1 of the same document is amber with the
  glyph. `remark-corpus` promotes a callout to `callout-warning` only from a leading `⚠/❗/🚫`,
  and this block has none. **Decision for `safety-reviewer`**, not a rendering bug — and note
  that without the glyph the warning/note distinction on that page is carried by **colour
  alone**.
- ⬜ **m4 — a Google Analytics 4 bootstrap ships in the build**, and `dist/sw.js` **precaches it
  on every service-worker install**. It is inert today: no page references it, no
  `ga-measurement-id` meta tag exists, and no off-origin request was observed on any of 39
  pages. So it is not a live privacy breach — it is a **dormant one that activates the moment a
  meta tag appears**, against CLAUDE.md's position that the site sends nothing to third
  parties. Worth a deliberate decision.
- ⬜ **m1/m2 — the diagram at 375 px** is cropped to roughly half with no persistent scroll
  affordance ("puck carrier" cuts to "puck"), and a label's halo overlaps the crease arc and
  clips the "G" glyph. Both legible; the crop looks deliberate (there is a `@media print`
  override). Diagram content is `diagram-reviewer`'s dimension.
- ⬜ **m5–m8** — no ToC scrollspy (absent, not broken); one unnamed `<nav>` landmark; Pagefind
  uses the browser-default `<mark>` (bright yellow in both themes, readable but not
  palette-aware); 236 empty `<p></p>` in the built HTML, **measured** as having no visible
  spacing effect, so DOM cleanliness only.

**Verified and clear — do not re-check:** emphasis inside `.facts__value` inherits cleanly in
all four theme×width cells (the round-33 *"probably fine; unseen"* is now seen and fine, and
needs no CSS); the 299- and 293-character `Rule:` values wrap without overflow at 1440, 500,
375 and 320; **0 console errors and 0 console messages of any kind across 39 pages**; no
body-level horizontal scroll anywhere; every origin observed was `localhost`; the theme toggle
flips real computed background with no flash on navigation; all contrast pairs pass AA and
nearly all pass AAA; search works (37 results for `icing`, agreeing with the Pagefind API);
`/404/` and the sitemap's 40 URLs all resolve.

---

## 8c. The diagram review — `rush-gap-and-angle`, and what it found beyond it

`diagram-reviewer` rendered the diagram at three widths and **rendered the glyph key itself**
(`heo_intl_drill_symbols.pdf`, sha256 matching `sources/README.md`) rather than trusting any
prose description — including its own brief, per §14.1's warning. Its render is **byte-identical**
to the shipped SVG.

**Verdict: safe to ship, not clean.** Nothing Critical. The picture is tactically correct
(defender inside the carrier at every x, min separation 4.0 ft; gap 8.94 → 7.28 ft, matching the
caption), notationally correct, draws no contact, and is free of two of the three round-34 §14
traps — the bow is *not* reversed and the carrier is *not* drawn as skating without the puck.

- ✅ **Major 1 — fixed in this commit.** The caption authored three quantitative gap distances
  into `body_contact_and_battles.md`, **which states no gap distance anywhere** (its only
  quantified closing distance, at `:411`, is a different and tighter metric — ITBC's one-stride
  condition). The numbers are sound *at home* and the caption reproduces the owner's hedge
  faithfully; it is purely a **placement** defect. The bridging paragraph did disclaim the
  transfer — but sat *after* the figure, so the caption was read first and never said the numbers
  do not travel. The disclaimer now precedes the figure and says so explicitly.

**Open — none of these blocks this commit:**

- ✅ **Major 2 — CLOSED.** *The cross-document attribution existed on the site and not in the audio,
  in the exact case it was written for.* `remark-corpus.mjs:187-190` appends *"Diagram from …"* whenever
  `away` is true, and its own comment gives the reason: *"the figcaption is emitted verbatim, so a
  listener heard a claim about a method the host document never states."* But
  `scripts/md_to_speech.py:540` is `return "Diagram. " + entry["caption"]` — **no owner lookup, no
  attribution branch.** So the fix justified by a listener defect was applied only to the site. A
  listener hears the borrowed gap distances as part of the angling section with nothing marking
  them as borrowed. **This affects all six quoted diagrams, not just this one.** Mirror the `away`
  **Fixed.** `md_to_speech.py` now announces provenance for a quoted diagram — *"Diagram, from
  defending the rush. …"* — **before** the caption rather than after it as on the page, because a
  listener cannot glance back and the warning has to arrive before the claim it qualifies.
  Threading the document identity through `to_speech` would have touched eleven call sites for one
  consumer, so it is module-scoped and set by `transform_document`.

  Verified across the whole corpus: **118 diagram references, 6 quoted away from their owner** —
  `risk_management`, `time_and_space`, `body_contact_and_battles`, `passing_and_receiving` (×2) and
  `shooting`. That independently reproduces `diagram-reviewer`'s enumeration of six, and confirms
  `support-triangle` is **not** a quoted placement despite both review records naming it as one.
  `--self-test` passes 116 assertions; a full dry run covers 37 documents and 1,582 chunks.
- ⬜ **Major 3 — the puck is drawn inside the player glyph, and round-34's fix reached three
  diagrams out of sixty-two.** Threshold is 4.375 ft (circle ink 3.275 + puck 1.1). This diagram
  has **4.123** to A1 and **5.000** against a 5.100 triangle minimum at D. Worse than the three
  §14 fixed, because A1 is `team: 'opp'` and therefore a **solid black** disc — at 640 px the puck
  is not distinguishable at all. Combined with the already-known 375 px crop truncating "puck
  carrier" to "puck", a phone reader gets the word *puck* on a leader pointing at a black blob.
  **Corpus-wide sweep: 59 of 109 specs violate the same threshold**, worst `forecheck-pinch` at a
  2.979 ft deficit. `round_34` §14 and `round_35:109` record this as *"fixed"*; it was fixed in
  three diagrams and stopped — the propagation failure CLAUDE.md names. Fix here is `dx: -12`
  (→ 6.08 ft); the sweep is separate work and should be scoped as one piece.
- ⬜ **Major 4 — `rink.mjs` still carries four live statements of the reverted axis, one of them
  inside the block that corrects it.** `:448`, `:841-844`, `:849-861` and `:1417-1418` all assert
  the inverted axis; `:880-883` asserts the correct one — **31 lines apart in the same comment
  block.** The code and rendered output are correct (`:1139` `fill = opp ? ink : '#fff'`; the
  legend matches the HEO sheet). Round 34 recorded four such comments and said *"all corrected"*.
  **That claim is false**, and §14.1's warning is therefore still live. `rink.mjs` is
  working-tree-modified by another workstream — coordinate before editing.
- ⬜ **Minor 9 — both quoted-placement lists in the review records are wrong.** Enumerating
  `![](diagram:…)` against each manifest `owner` gives **six** quoted placements: `oz-home-plate`
  (`shooting.md:351`), `unmarked-but-unavailable`, `support-angles`, `rush-gap-and-angle`,
  `strong-side-and-weak-side` (`time_and_space.md:393`), `breakout-d-to-d`
  (`risk_management.md:145`). **`support-triangle`, named in both lists, is not a quoted placement
  at all** — only its owner references it. So `round_35:211`'s deixis sweep covered two real cases
  plus one non-case and missed three. **`oz-home-plate` and `strong-side-and-weak-side` have never
  been reviewed in placement by anyone.**
- ⬜ **Minors 5–7** — both label leaders are drawn *through* the glyph lettering they point at
  (labels render after glyphs, and the leader starts at the glyph centroid), splitting D's "D"
  into `|)`; the *"the middle"* halo leaves under 1 ft of clear ice and eats the right edge of the
  **G**, which is the only thing establishing which net is defended (`diagram-reviewer` judges this
  a genuine defect in its dimension, confirming `site-reviewer`'s m2); and the caption's
  *"boardside shoulder to the middle of their chest"* asserts an alignment a glyph structurally
  cannot show — the corpus already has the convention for this in
  `unmarked-but-unavailable`'s caption.

**`round_35:109` should be treated as withdrawn for this diagram.** It said `diagram-reviewer`
reviewed all seven; this one was never reviewed. It has been now.

---

## 8. What none of this session's methods could have found

Recorded because it is the next round's scope, per the house rule that this is the most
valuable part of any report.

- **Every reviewer read a diff or a named scope.** Nothing examined what was already wrong in
  the untouched body of these files. `rules_primer.md` §4 alone is ~91,500 characters and
  roughly a fifth of it has been read across 26 review sections.
- **A defect created by a *deletion* is invisible in an added-lines view**, which is how
  `body_contact_and_battles.md` and `rules_primer.md` were read.
- **The homonym sweep finds an entry that says too much.** It is much weaker on an
  innocent-looking definition of something dangerous — a term nobody recognised as hazardous
  would pass without a grep.
- **Nothing was heard.** `md_to_speech.py` was not run this session. Every read-aloud
  judgement above is an inference from text. `rules_primer.md:332`'s Major bullet has grown
  again into two paragraphs of roughly 2,280 and 891 characters, and §26.5 records a previous
  growth of that same bullet splitting a speech chunk mid-sentence. **Unmeasured.**
- **Nothing was seen.** No browser rendered any page.
- **Grepping extracted text cannot see a rule the extraction dropped** — see §7.
- **A correctly-quoted rule can still be taught unsafely**, and a legal, correctly-caveated
  technique can still be dangerous when executed badly at speed. No rulebook grep tests either.

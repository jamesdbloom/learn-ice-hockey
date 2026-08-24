# Carried findings — rounds 36 to 38

> **Archive. Not a plan, and not a live list.** This is the measurement and evidence behind
> findings carried through rounds 36–38: which clauses a merge dropped and why nothing forced
> the trim, the reusable homonym sweep, the entry-by-entry glossary pass, the rendered-site and
> diagram findings with their numbers. **Every open item it once tracked has been folded into the
> live plan.** Nothing here is outstanding work; consult it for *why* a finding is known, not for
> what to do next.


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
> ⚠️ **§2's table is a record of what the gate blocked on, not a live list** — C3, C4, C6, C8
> and C10 and the governing-document race were all closed before this shipped. **C5 was not**, *at the time this table was written* — no citation had been refetched, and round 36's record declared D5 partial. It was closed afterwards: round 37's `source-verifier` pass refetched 337 external URLs and marks D5 ✅. Every other ⬜ is
> live.

---

## 1. Closed in this session — do not redo

| Item | Evidence |
|---|---|
| **`sources/ibc.txt` now present and rebuildable** | The root cause was that `scripts/fetch_sources.sh` never fetched it, and `sources/*` is gitignored — so no session could reconstruct it. Added to `DOCS`, added a row to `sources/README.md`, then deleted the file and re-ran the script to confirm it rebuilds byte-identical (77,237 bytes). |
| **Every ITBC quotation in the corpus verified against the PDF** | `"high risk check, possibility of only partial or no body contact…"` (ibc.txt:307), the one-stride condition (:309-310), the entry title `"Shoulder Check – open ice contact"` (:304), and Contact Confidence A/B/C (:667-705). Nothing was fabricated; the gap was availability, not accuracy. |
| **All eight never-verified rule numbers confirmed** | IIHF 24.8, USA Hockey 639(a) Note / 639(b) / 639(c), Hockey Canada 8.6(b), Hockey Canada 8.7, NHL 21.1, NHL 57.2 — each grepped from primary text with operative wording quoted. |
| **The facts-count "discrepancy" is not a parser bug** | HEAD 4,582 · working tree 4,593 · index 4,596 — three states of the same 26 documents, with agents editing between. `round_33_wave_a_findings.md:2571`'s parenthetical *"correcting the record: 4,591 facts, not the 4,593 quoted earlier"* asserts a disagreement the evidence does not require. **Do not "correct" this again without saying which tree state was measured.** |

### Content fixes applied (committed in round 36; see §3 for what shipped in round 37)

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

## 2. What the gate blocked on — a record, not a live list

> ✅ **All of these were resolved before round 37 shipped.** Kept for the reasoning and the evidence.
> C10 and C8 below are marked ✅ **because they were closed after this table was written**; their cell text is framed as it stood at the time; §8b records that the site *was* seen and
> §8c records the diagram review. **Do not read this section as gating anything.**

The gate returned **BLOCK**. Four of its conditions were addressed by this session's agent
runs; **write the results into the review record**, because the gate checks the record, not
the agents' existence.

| Gate condition | State |
|---|---|
| **C3 — coverage statement for §§27–28** | ✅ **Written** — [`../reviews/round_36_sections_27_28.md`](../reviews/round_36_sections_27_28.md), all 15 dimensions filled in. Previously: `round_33_wave_a_findings.md` carries coverage statements through §26.5 and stops. §§27–28 made the largest and most recent changes, including two criticals. Write one. |
| **C3 — D10 on the two merged facts blocks** | ✅ `facts-reviewer` has now run on `defending_the_rush.md:135` and `offensive_zone_play.md:169`. Record it and its findings (§3 below). |
| **C4 — rules claims in §§27–28** | ✅ `rules-verifier` has now run. All eight new rule numbers confirmed; one count error found and fixed. Record it. |
| **C6 — the three unreviewed rewrites** | ✅ `safety-reviewer` has now seen `defending_the_rush.md` `:568`, `:578`, `:832`. Three criticals found, all fixed. Record it. |
| **C8 — the shipping diagram has no review** | ✅ **Closed in round 37.** `diagram-reviewer` rendered it at three widths and rendered the glyph key itself — verdict *"safe to ship, not clean"*, nothing critical. ⚠️ **The stale credit survives and should be corrected:** `body_contact_and_battles.md:158` ships `![](diagram:rush-gap-and-angle)`. `round_35_readability.md:109` credits its review to §14 of `round_34_diagram_notation.md` — **but `rush-gap-and-angle` appears nowhere in that file.** §14 names only `winger-dz-rim`, `winger-dz-reverse` and `off-wing-open-to-the-ice`, and every defect it records is about those three. Coverage is *asserted, never demonstrated* — the style guide's own sharpest failure shape. A second inconsistency confirms it: `round_35:104` lists the four quoted placements as `rush-gap-and-angle`, `unmarked-but-unavailable`, `support-angles`, `support-triangle`, while `:211`'s deixis sweep cleared `support-triangle`, `support-angles` and **`breakout-d-to-d`** — not in that list — and omitted this one. **The two lists do not reconcile, so trust neither** — that is still open, and is carried in the plan. *At the time of writing, the position was: "Staging the record would therefore NOT close C8 honestly. Options: review the diagram properly, or drop the diagram hunk."* `diagram-reviewer` was dispatched 21 August 2026 and did the review, which is what closed it. |
| **C10 — nobody has seen a rendered page** | ✅ **Closed in round 37, and again in round 38.** The site has now been seen: `site-reviewer` drove real Chrome over the DevTools Protocol against a build of the *staged* tree. The extension itself still refuses every local address — 21 refusals across five sessions — so the CDP route is the one that works. `round_33_wave_a_findings.md:2586` records the original refusal. `site/src/plugins/remark-corpus.mjs` changes how **every facts value in the corpus renders** and adds five new `<em>` nodes with no CSS rule targeting emphasis inside a facts value — *"probably fine; unseen."* The gate independently confirmed the DOM is right (0 literal `*` in any `facts__value`; the diagram inlines; 6,980 internal links resolve). *At the time of writing the visual half was unchecked* — round 37 and round 38 both closed it with a browser. |
| **C5 — no citation refetched** | ⚠️ **Superseded — this figure is round-36 era.** Round 37's `source-verifier` pass refetched **337 external URLs** across the 22 staged files, leaving roughly **290** of the 629 unswept. The live figure is in the plan; do not quote the 39. At the time of writing, `source-verifier` had swept 39 of 629 citations and did not run that round. Exposure is narrow — the diff is overwhelmingly rulebook rule numbers — but C5 is declared *open*, not out of scope, so it is unevaluated rather than passed. |
| **Governing document race** | ✅ **Resolved.** The style guide landed first, in `1dff231`, and the content commit followed against a settled spec — which is what the recommendation below asked for. Kept for the reasoning. Previously: `project/content_style_guide.md` is modified and **unstaged** (+146/−1). It rewrites a writing rule and adds a whole new `## Diagrams and their notation` section — the spec governing the one diagram this commit ships. `round_33_wave_a_findings.md:2497` names this as the `239f70d` race by definition. **One must land before the other.** Recommendation: land the style guide and the round-34 record first, then the content commit against a settled spec. |

**Also from the gate:** twelve content files are staged, not ten — `uk_rules.md` and `puck_handling.md`
were omitted from an earlier brief and both make substantive rule claims. Re-derive the list
with `git diff --cached --name-only -- content/` rather than trusting any prose summary.

---

## 3. Verified findings — most now fixed in round 37

These were all confirmed against primary text when written. **None is a deletion candidate**
(non-negotiable 3).

> ⚠️ **Everything in §3 has shipped. Nothing here is open work.** §§3.1, 3.5 and 3.6 landed in round
> 37 and carry a ✅ in their headings; **§§3.2, 3.3, 3.4 and 3.7 landed in round 36 and carry no mark
> at all** — do not read the absence of a tick as an open item. The bullets are kept because they
> carry the evidence and the reasoning, not because the work remains. An earlier draft left this
> section reading as live after its contents had landed, and then a correction told the reader to
> trust marks that four subsections do not have; a commit gate caught both.

### 3.1 ✅ Two safety criticals — CLOSED in round 36 (IIHF 24.8 carve-out, NHL 21.1)

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

### 3.5 ✅ Hockey Canada gaps — CLOSED in round 37

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

### 3.6 ✅ `uk_rules.md` body section — WRITTEN in round 37

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
- ✅ **Table 7 read as discretionary — CLOSED, and the original finding was itself wrong.** It
  claimed 20.4 offers *"no qualifier"*. It does: 20.4's last line reads *"➔ For more information
  refer to Appendix IV – Tables Overview – **Table 6**"*, singular (`iihf_rules.txt:2139`). Together
  with Table 7's *"Referee's judgement"* heading and Table 5's *"without a game misconduct
  possible"*, the discretionary reading has three textual grounds. `uk_rules.md` now discloses it
  with the right premise — see MA14 in the round-37 record. **Manufacturing uncertainty is its own
  defect.**

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

Nine entries were added in round 36 and more in round 37; §8 now holds **68** entries (`sed -n '<§8>,<Common Mistakes>p' … | grep -c '^\*\*[^*]*\*\*'`).

### 4.1 Open now

- ⬜ **`Forecheck` is a confirmed homonym** (see §4.3 M1, which is sharper still). `neutral_zone_systems.md:84` defines
  **"Neutral zone forecheck"** as *"the structure your five players hold in the middle third
  while the opponent tries to break out"*, while the glossary defines `Forecheck` as pressure
  *"in **their** defensive zone"* — which excludes it. The entry then names shapes by number
  (2-1-2, 1-2-2, 1-3-1, 1-4) and **those same numbers name neutral-zone forechecks**
  (`neutral_zone_systems.md:823` cites a "1-2-2 Neutral Zone Forecheck"), so nothing
  disambiguates. Found by the sweep in §4.2; not yet fixed.
- ✅ **The `content-reviewer` entry-by-entry pass completed** over all 67 entries as they then stood — the 68th, `1-3-1`, was created by that pass's own M2 finding. Its findings are listed in
  §4.3; all but M4 are closed.
- ⬜ **`"most goals are scored low"` is unsourced in its owner.** It exists in
  `goaltender.md:312` and nowhere else in the corpus, has no owner in the style guide's
  numeric-facts table, and carries no source. The glossary's `Butterfly` entry no longer
  restates it — the claim was **not deleted**, it stands untouched in its owner — but
  **`source-verifier` still needs to source it or label it there**, and then propagate.
- ⬜ **`Post` drops its owner's coaching-choice hedge** — `goaltender.md:300` (*"You can get
  stuck"*), `:304` (*"it is one school, not the only one… ask what yours is"*), `:1011`
  (*"What nobody defends is dropping to a post out of habit, without a read"*).
- ✅ **Ownership notes — SWEPT corpus-wide (see §8d).** The four in this file plus 200-plus across
  the corpus are now plain navigation; 48 genuine hockey uses were preserved (`grep -roh '\bowns\b' content/ | wc -l` — `grep -rc` counts lines, not matches, and produced three wrong figures before anyone noticed).
  `rink_map_and_glossary.md:314`'s *"the weak-side defenceman owns it"* is correct hockey usage
  and was deliberately kept — **do not sweep the word.**
- ✅ **§8's preamble — AMENDED.** It now reads *"defined elsewhere in this document — in this list,
  or in the sections above"*, which is true of the bolded terms that are defined in §§3–7 rather
  than §8 (**weak-side**, **above the puck**, **crease**, **high slot**/**low slot**), and a
  **1-3-1** entry was added because that one was genuinely missing everywhere.
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
(`**Term** — `, `**Term** = `, `Term means`, `Term is`). **39 of 68 headwords** carry at least
one definition outside the glossary. Highest counts: Pinch (9), Goalmouth (8), Half-wall (7),
Reverse (6), Screen (6), Forecheck (5), Rim (4), Wheel (4), then Backcheck, Breakout,
Odd-man rush, Point, Step up (3 each).

Run it in memory over the files read once — a `grep -r` per headword takes over two minutes
and times out. The headword list is extractable from §8 with:
`sed -n '<§8>,<Common Mistakes>p' … | grep -o '^\*\*[^*]*\*\*'`

**This sweep found `traffic` and `shoulder check`, both of which had penalty consequences.**
It has never been run against anything but the ten entries added this session and the 68
headwords above. It has **not** been run in the other direction — for terms the corpus uses
that have **no** glossary entry at all.

### 4.3 The entry-by-entry pass — findings

A `content-reviewer` pass over all 67 entries as they then stood — the 68th, `1-3-1`, was created by that pass's own M2 finding returned **2 criticals, 16 majors and ~15
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

**Findings from that pass — all closed in round 37.** Full detail is in
[`../reviews/round_37_glossary_and_ownership.md`](../reviews/round_37_glossary_and_ownership.md);
this list is the index.

- ✅ **M1 `Forecheck`** — the definition excluded the neutral-zone sense while naming four shapes,
  three of which are usually played as neutral-zone structures. `Backcheck` inherited it. Both fixed.
- ✅ **M2 `1-3-1`** — bolded six times as a cross-reference with no headword, over three unrelated
  formations. Entry added naming all three.
- ✅ **M3 `D-to-D`** — a coaching convention stated as law in §8, §7 and §5. Fixed in all three,
  and the *carry* and the *pass* are now kept apart: the carry is never, only the alternative route
  for the pass is team-dependent.
- ⬜ **M4 `Board battle`** — still over-claims *"far more often than strength"* where its owner says
  *"often"* and lists the claim in its own unverified-claims footnote. **Open.**
- ✅ **M5 `Tip-in`** — carried neither rule ceiling; now carries NHL 80.3 and the fact that USA
  Hockey's goal ceiling is the **shoulder**, not the crossbar.
- ✅ **M6 `Dump-and-chase`** — the trapezoid's effect stated bare; now scoped.
- ✅ **M7 `House league`** — contradicted the Hockey Canada text its own owner quotes. Rewritten.
- ✅ **M8 `Faceoff`** — two of four books; now all four, with "three answers in four books".
- ✅ **M9 `Outlet`** — one of three senses, and the owner's dagger disclosure restored.
- ✅ **M10 "Off-side"** — four senses, two of them rule violations. Disambiguated in the entry and
  in Common Mistakes.
- ✅ **M11 `Breakout`** — six of nine options ranked as "common"; now all nine, unranked.
- ✅ **M12 `Cycle`** — put a forward at the net front where the owner puts them behind the net.
- ✅ **M13 `Butterfly`** — fixed in its owner, `goaltender.md:312`, by labelling the unsourced claim.
- ✅ **M14 `Drop-in`** — stated as definitions what `getting_started.md:252` disclaims as
  conventions; the hedge now reaches `Stick-and-puck` too.
- ✅ **M15 Sources annotation** — contradicted its own document's body on the two-line pass. The
  body was right; the annotation now says what the cited page says and notes it is uncited there.
- ✅ **M16 `Activation`** — used "legal" for something no rulebook touches. Narrowed, and the
  unsourced "teams relax it when trailing late" removed.

**Minors from that pass** — `The trap`, `Chip`, `Regroup`, `Screen`, `Shorthanded`, `Home plate`,
`Trailer`, `The paint` and the `goalmouth` outlier in `goaltender.md` — all closed.

⬜ **Still open from it:** M4 above, and the **49 §8 entries the pass never examined**. That second
one is the sharpest remaining scope in the glossary: the pass found 2 criticals and 16 majors *in
the entries it looked at*.


## 5. The terminology plan — `terminology_source_audit.md`

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

## 6b. ⬜ A literal-asterisk check nothing in this repo performs

Commit `f5f385f` fixed *"a quotation that was rendering two literal asterisks on the page"*, and
round 37's gate found another one — a stray `*` in a `shooting.md` hunk that rendered verbatim on
the web page, the markdown download, the EPUB and the PDF. `md_to_speech.py` strips it, so the
speech pipeline hides the defect rather than catching it, and no checker looks for it.

**The reproducible test is an odd asterisk count per paragraph**, after stripping fenced blocks and
inline code:

```python
t = re.sub(r'```.*?```', '', text, flags=re.S)
t = re.sub(r'`[^`\n]*`', '', t)
odd = [p for p in t.split('\n\n') if (p.count('*') - p.count('\\*')) % 2 == 1]
```

Run over `content/` it found exactly two: `risk_management.md`'s Sources block, where a nested
`*(…)*` closed the outer italic early and left the leading `*` rendering literally — **fixed in
round 37** — and one in **`technique/passing_and_receiving.md`, still open**, which is in the
held-back set and should be fixed when that workstream lands.

⚠️ **But the odd-count test is necessary, not sufficient, and a checker built only on it would ship
blind twice over.**

1. **An even count can still render a literal asterisk.** `risk_management.md`'s Sources block had an
   *even* count and rendered `*Statistics:` verbatim at HEAD, because a nested `*(…)*` closed the
   outer span early and re-opened nothing. The reliable test is the rendered page: strip tags from
   `dist` and look for `*` in the text.
2. **It scopes to `content/`, and the defect is not confined there.** Diagram captions are **not**
   markdown-rendered, so a `**…**` in a caption reaches the page as four literal asterisks.
   ⚠️ **Tree state matters here and an earlier draft of this section omitted it:** the live example,
   `site/src/diagrams/faceoffs.mjs:217`, exists **only in the working tree**. HEAD's `faceoffs.mjs`
   has no `**` in any caption, and a tag-stripped grep of rendered `dist` finds zero asterisks on
   `/systems/faceoffs/` in both HEAD and the round-37 commit. It belongs to the round-34 workstream.
   The point stands for any checker written from this section — it must cover captions — but the
   example is not yet a shipped defect.

⬜ **Worth making this a checker anyway**, provided it greps the rendered `dist` rather than the
markdown. It has now caught two defects across two rounds and is invisible to `check_links.py`,
`check_facts.py` and the speech self-test alike.

---

## 6c. ⬜ `defending_the_rush.md` §Breakaways has more rulebook than a facts block can hold

`facts-reviewer` reviewed this block for the first time in round 37 and found **one critical and
five majors in eleven facts**. Four were fixed one-for-one. **Two need structure, not editing:**

- ⬜ **The `HARD_MAX` merge should be undone.** Two `Rule:` facts were merged to free slots, and the
  merge attached NHL 67.4's *"except a goalkeeper"* to the wrong noun — post-merge it modified *"a
  skater"* (vacuous, since a skater is never a goalkeeper) and governed the whole predicate
  including **67.5, which carries no such exemption** because the goalie has been replaced. The
  attachment is fixed, but the two facts still want to be two facts. Unmerging takes the block to
  **12** and `check_facts.py` rejects it.
- ⬜ **A penalty-shot trigger in the body reaches no fact at all.** `:577` — *"**Throwing your stick
  or any object** at the puck or the carrier in your defensive zone also produces a penalty shot"* —
  which the body itself calls an end-of-rush desperation act, exactly this block's reader. It is
  also the one rule claim in the section stated **with no rule number** (NHL Rule 53 governs it),
  which is likely why it never became a fact: the facts layer requires a citation. **Give the body
  its citation regardless.**

**The remedy the reviewer proposes, and it is the right one:** split §Breakaways into `####`
subsections — the body already divides cleanly into the penalty-shot test, the carve-outs by rule
set, the empty-net and crease clauses, and the rule-set note — and give each its own block. Four
rule sets' tripping tiers plus NHL 25.1/57.4 plus 67.4/67.5 is more rulebook than eleven facts can
carry, and **the merge was the symptom rather than the problem.**

⚠️ Two questions the reviewer flagged rather than answered, both for `rules-verifier`: whether USA
Hockey **639(a)'s Note defeats a 616 penalty shot**, and whether **IIHF 24.8's "shall" caps 57.3**.
The block now says the book does not settle the second; the first is hedged as *"may not reach 616
at all"*. Neither should be stated flat until someone answers them.

---

## 6d. ⬜ The glossary does not read as a list — seen, not inferred

`site-reviewer` finally saw the pages (round 37, Chrome connected) and answered the question nine
audits could only measure. **The answer is no.**

- The entry head and the bold *inside* an entry are **computationally identical** — both
  `font-weight 650`, `17px`, same colour, same family, `display inline`. The reviewer diffed the
  computed style objects: `identical: true`.
- The only separator is `margin-bottom: 17.6px` — **the same gap used between ordinary body
  paragraphs everywhere else on the site.**
- At 375px, **`Icing` is 954px tall and `Traffic` 838px — both taller than the viewport.** A phone
  reader can be scrolled entirely inside one entry, looking at four bold runs indistinguishable
  from a head.
- **The bold cross-references collide with real entry names.** Inside `Icing`: *"if the team is
  **shorthanded** (conditionally — see **Shorthanded**, below)"*. `Shorthanded` is its own entry.
  Someone scanning for it hits this first, and it looks exactly like what they are looking for.

§8's own intro says *"Terms in bold inside a definition are defined elsewhere in this document"* —
so bold carries **two meanings with one appearance**. The convention is written down and then made
unusable by the CSS.

**It costs more than scanning.** Pagefind cannot offer a sub-result for an individual entry, because
entries are paragraphs with no ids and no heading level — so a search for `icing` can only deep-link
to `#8-glossary`, the top of a 4,900-word list. Two documents already link there.

⚠️ **The obvious fix is the wrong one.** A site-wide `.prose p > strong:first-child` would hit
**2,270 paragraphs across 37 pages** — the house bold-lead-in sentence style — and repaint the
corpus. Scoped options, cheapest first:

1. **CSS only.** All 68 entries have the `<strong>` as a genuine first child and are siblings of the
   `h2`. ⚠️ The id is `8-glossary`, which **starts with a digit**: CSS needs `#\38 -glossary` and
   `document.querySelector('#8-glossary')` throws.
2. **A wrapper class in `site/src/plugins/remark-corpus.mjs`** — tag paragraphs under the Glossary
   heading, style `.glossary-entry > strong:first-child`. One plugin change, no selector gymnastics.
3. **Real headings or ids.** Most work, and the only option that also fixes search deep-linking and
   lets a term index address an entry. §8 grew 28.0% in round 37 with 20 entries getting longer, so
   this is the one that stops it recurring.

⬜ **M2, and it belongs to the diagram workstream, not here.** Of **113 `<svg>` across 40 pages,
exactly two have `role="img"` with no `<title>`, `<desc>`, `aria-label` or `aria-labelledby`** — the
full-rink map (§2) and the end-zone map (§5), the glossary's two primary reference maps. Every other
diagram carries a title running to a paragraph. Both sit in a `<figure>` with a descriptive
`<figcaption>`, so the information is not lost; the image is unnamed. Fix in `site/src/diagrams/`.

### ⚠️ A trap for the next D15 pass — it cost this one most of an hour

The reviewer spent three-quarters of its session **reviewing the wrong tree from the wrong server**,
and every signal said things were fine: pages rendered, content matched, links worked.

- **Port 4321 was a pre-existing `astro dev` server serving the working tree.** `npm run preview`
  found it taken and silently bound **4322**.
- **`site/dist/` on disk is not the staged build either** — its stamp read `dirty=true`.

It caught this only by asking why `/_astro/Base.CvtjetxK.css` 404'd. Had that file happened to load,
neither it nor any gate reading DOM and byte sizes would have noticed. **Pin the preview to an
explicit port and assert the build stamp before trusting anything a D15 pass reports.**

---

## 7. Evidence-base gaps nobody can close by grepping

- ⬜ **`usah_case.txt` — the USA Hockey Casebook is not on disk and never has been.** The
  corpus already discloses this honestly at `body_contact_and_battles.md:1110`
  (*"a casebook situation could qualify the USA Hockey half"*). **That disclosure is correct
  and must not be stripped.** A casebook interpretation could change the answer on the
  head-down/ducking split without changing any file here.
- ✅ **The Hockey Canada PDF is fetchable, and `hc.txt` is now rebuildable.** The fetch script said
  its rules were *"behind a portal rather than a stable public PDF URL"*; that is no longer true —
  the CDN link returns 200 with a 30 MB PDF of the 2026-2028 book. Added to `DOCS`.
- ⬜ **But Hockey Canada's on-disk text is the one extracted the wrong way, and that is the
  documented cause of an artifact this corpus has already reasoned around.** `sources/hc.txt` is
  byte-identical to plain `pdftotext` output (370,730 bytes); `-layout`, which every other source
  uses and which the script's own comment says exists to stop columns interleaving and rule numbers
  detaching, yields 449,195. **That is why a stray "Rule 7.8" header sits between Interpretation 3
  and its own carve-out sentence at `hc.txt:6400`** — an artifact a reviewer resolved by reasoning
  rather than by reading the page.

  **The decision is a trade and it should be made deliberately.** Re-extracting with `-layout` is
  better evidence for a book this corpus makes many claims against — but it **shifts every
  `hc.txt:NNNN` citation** in `project/reviews/`, including a dozen written in round 37 alone. The
  script currently skips `hc` because the file exists, so nothing changes by accident; a `--force`
  run would change it silently. Recorded in `scripts/fetch_sources.sh` and `sources/README.md`.
- ⬜ **The NHL text extraction shreds table columns.** `nhl_rules.txt:9727-9835` renders
  Table 5 as unattributable runs of descriptions, rule cells and checkmarks. The correct row
  count was only recoverable by refetching the PDF and running
  `pdftotext -layout -f 150 -l 150`. **Any future claim about an NHL reference table must come
  from the PDF, not the `.txt`.** This nearly cost a wrong count in three documents.
- ✅ **`source-verifier` ran in round 37** — 337 external URLs across the 22 committed files
  refetched, three findings fixed (a Sources list omitting a rule the body quotes; a citation
  labelled *"dead"* that resolves and redirects to an affiliate tracker; an IIHF URL returning
  **200** while rendering an error page). ⬜ **The other ~290 citations in the corpus remain
  unswept**, and across ~340 body-verified citations here **every defect ever found was
  provenance**.

---

## 8d. ✅ The "owns" convention — swept, 21 August 2026

**Decision made by the owner: sweep all of them.** Done in the active voice — **216 editorial replacements across 33
documents**, of which **105 are in this commit** and 111 follow with the held-back twelve, all to plain navigation (*"[Faceoffs] **covers** that figure and the computation behind
it"*). The pattern existed 122 times in its linked form and more in two further shapes
(`…, which owns …` and a bare `DocumentName owns …` inside facts blocks).

⚠️ **Read the tree state before you act on any count here.** HEAD `ff2962e` carries **264** `owns`
in `content/`; the round-37 commit carries **159**; the working tree with the whole sweep applied
carries **48**. The 48 are the endpoint, not the current state — **111 editorial instances are still
live in the twelve held-back documents**, and a pass that sees one there should sweep it, not keep
it.

**48 genuine hockey uses are the endpoint** — *"somebody owns the middle"*, *"the goalie
owns the shooter"*, *"the weak-side defenceman owns the goalmouth"*, *"EIH owns its leagues
outright"*, and `on_ice_communication.md`'s §"Who owns which call" heading. Once the held-back twelve land, an `owns` in `content/` will almost
certainly be one of these and should stay. **Until then it probably should not** — see the tree-state
warning above.

⬜ **Two parts are still open.** (1) The sweep hit the **active voice only** — roughly twenty-six
passive instances survive (*"the fixes are owned by Puck Handling"*, *"is owned by [Faceoffs]"*),
several inside ` ```facts ` blocks, plus `switching_positions.md:90`'s *"carry that label if you
repeat it"*, which is an instruction to another writer. (2) Twelve documents the sweep touched are
**held back from the round-37 commit** because their working copies also carry the round-34
workstream's heading renames and diagram references; their instances land when that workstream does.

Recorded in [`../reviews/round_37_glossary_and_ownership.md`](../reviews/round_37_glossary_and_ownership.md).

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

**Recorded below — the ✅ items are closed; only the ⬜ ones are open:**

- ✅ **Major 2 — CLOSED.** *The cross-document attribution existed on the site and not in the audio,
  in the exact case it was written for.* `remark-corpus.mjs:187-190` appends *"Diagram from …"* whenever
  `away` is true, and its own comment gives the reason: *"the figcaption is emitted verbatim, so a
  listener heard a claim about a method the host document never states."* But
  `scripts/md_to_speech.py:540` is `return "Diagram. " + entry["caption"]` — **no owner lookup, no
  attribution branch.** So the fix justified by a listener defect was applied only to the site. A
  listener hears the borrowed gap distances as part of the angling section with nothing marking
  them as borrowed. **This affects all six quoted diagrams, not just this one.** Mirror the `away` branch
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
> ### ✅ The notation legend is signed off — 21 August 2026
>
> The owner viewed the rendered legend on `/reading-diagrams/reading_ice_hockey_diagrams/` and
> confirmed **every glyph on it is correct**, including the **body check (a line ending in an S)**,
> which took several attempts. **That page's symbols are out of scope for further review or
> change.** Recorded in the style guide's diagram section. If a later trace seems to disagree,
> raise it — do not edit the glyph.

> ### ⚠️ Majors 3 and 4 are blocked on coordination, not on effort — checked 21 August 2026
>
> **Do not fix these from a fresh session without talking to the diagram workstream first.**
> Both live in files that workstream is actively rewriting, and one of them is rewriting the
> exact lines Major 4 names:
>
> | File | Uncommitted |
> |---|---|
> | `site/scripts/lib/rink.mjs` | **+605 / −106** |
> | `site/src/diagrams/positions.mjs` | +207 / −1 |
> | `site/src/data/diagrams.json` | +45 / −12 |
> | `faceoffs · notation · special_teams · playing_without_the_puck · puck_support_and_spacing · rules_primer` | +70 / −34 combined |
> | `site/src/data/rink.json` | +1 / −1 |
>
> Its in-flight diff **already removes one inverted axis block** (the `TEAMS — this corpus
> follows key (B) … SHAPE CARRIES TEAM` header) and is correcting glyph descriptions from a
> 1200 dpi trace of the source page — including a `BODY CHECK` symbol the file had drawn as the
> mirror of the screen for two revisions. So Major 4 is **partly fixed already**, by someone
> else, mid-flight.
>
> Three inverted statements still stand in *their* working copy — `rink.mjs:841`, `:849`,
> `:1417` — so the finding is real and not yet closed. But editing those lines now is the
> `239f70d` race by definition, and the loser is whoever writes first. **Hand the finding over;
> do not apply it.**

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

## 9. ⬜ Opened by round 37's foundation-file wave (22 August 2026)

Four reviewers ran on `uk_rules.md` and `rules_primer.md` at current content and produced 3
criticals and ~14 majors, all fixed. These four were found and **deliberately not fixed**, with
reasons — they are recorded as MA23–MA26 in
[`round_37_glossary_and_ownership.md`](../reviews/round_37_glossary_and_ownership.md).

**9a · `rules_primer.md`'s Key Takeaways are body sections that migrated into the summary.**
Measured **before round 38's repairs**: KT5 **746 words**, KT4 486, KT3 318, KT7 278, KT6 275, KT9 232, against a spec of
*"5–10 items, each one standalone and memorable"*. ⚠️ **KT10 was first measured at 675 words and is
66** — the slice had swallowed the italic Sources block, which sits after a `---` rather than under a
heading. **Bound a takeaway slice on the `---`, not on the next `##`.** `uk_rules.md`'s equivalent was fixed this round — KT7 had reached 455
words and is now four takeaways with the longest at 216. The primer's was left because most of that
length predates the commit, and rewriting ten takeaways in a second heavily-edited file **in the
same session** is exactly how CR10, CR13 and CR15 happened. **Done in round 38 — partly.** KT5's 746 words became two takeaways and KT4 was compressed. ⬜ **But
it is not closed, and the repairs put the words back:** measured after the final edit, the range is
**66–347**, and the two longest — **KT4 at 347** and **KT6 at 336** — are the two this round
created. KT3 is 318 and KT9 314, KT9 having grown by the merge that kept the ten-item cap.
⚠️ **This figure was wrong twice before being right.** It was first recorded as "66–318", then as
"66–336 with KT6 longest" — each measured before the next wave of repairs added words, and each
corrected by the gate. **The instruction is in this entry and I broke it three times: measure after
the last edit, not before.** The compression is also self-defeating at this point: every repair
this round has *added* words to the takeaways it was shortening, which is the argument for
splitting rather than compressing. Round 38's own finding is that **every critical and major
it sustained came from compressing rather than from splitting** — so the open question is whether
the ten-item cap should yield to the one-proposition rule. That is a style-guide decision, and it
has not been made.

**9b · The two foundation documents state the same Table 6/7 material four times.**
`uk_rules.md` §"A first major can end your game" plus `rules_primer.md` §4, §10 and Key Takeaway 4
— four framings, four hedge placements, well over two thousand words. That is four places for the
next correction to fail to reach, and this round it failed to reach three of them twice. **The
editorial question — should `uk_rules.md` own it outright and the primer link? — is unresolved.**

**9c · `rules_primer.md` §§7–9 and the last comparison-table rows have never been read.**
`content-reviewer` declared out of scope: the goaltender, faceoff and officials sections, ~170 lines
covering the crease, goaltender interference, screening, the trapezoid penalty, freezing the puck
and the faceoff spots. `rules-verifier` left comparison-table rows 722, 723, 725, 726, 733 and every
USA Hockey cell unverified. Findings in the sections that *were* read ran at roughly **one per fifty
lines**.

**9d · A mis-splice that reads smoothly would not have been caught.** CR15 — a fighting block
inserted into the body-checking-legality paragraph — was found because the join lost a space. A
block landing in the wrong paragraph that happens to read grammatically would have passed every pass
run this round. **The check nobody ran is a paragraph-by-paragraph read of `git diff ff2962e` for
both files.** A mechanical proxy was run afterwards (fused sentences, orphaned ⚠️ markers) and is
clean, but it cannot see a smooth splice.

### Method notes worth keeping

- **These extractions wrap lines mid-phrase and hyphenate across breaks.**
  `grep -c 'not covered by the playing rules'` returns **0** on all three IIHF files; the phrase is
  at `:2182`, split as `is not\ncovered`. IIHF 46.9 carries `auto- matic`. **Flatten newlines and
  de-hyphenate before any phrase search** — a negative multi-word grep here is not evidence of
  absence, and it nearly produced a false "fabricated quotation" finding.
- **`git checkout-index` does not materialise `node_modules`**, which is gitignored. A site build in
  such a tree dies with `MODULE_NOT_FOUND` **while the shell still reports exit 0**. Symlink the
  repo's `node_modules` into the export before building, and read the log rather than the status.
- **A reviewer's quotation is evidence, not verification.** A reviewer supplied `2'+2'+5'+GMP` as
  IIHF 46.4's sanction; the book assigns 46.4 the same `2'+5'+GMP` as 46.3. Re-derive before writing.
- `sources/iihf_rules.txt` is byte-identical to `sources/iihf_rules_v1.1.txt`; `v1.0` differs.

## 8. What none of ROUND 36's methods could have found

> ⚠️ **This section is round 36's, and round 37 closed several of its gaps.** It is kept because the
> reasoning is still the best guide to where defects hide — but **do not read it as current**.
> Since it was written: `site-reviewer` **has** seen the pages (§6d), `source-verifier` **has**
> refetched 337 URLs, and `facts-reviewer` **has** audited the `HARD_MAX` block (§6c).
> `md_to_speech.py --self-test` passes 116 assertions, though nothing has been *heard*.

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
- **Nothing was heard** *(still true — `--self-test` passes 116 assertions, but no audio has been generated)*. `md_to_speech.py` was not run to produce speech. Every read-aloud
  judgement above is an inference from text. `rules_primer.md:332`'s Major bullet has grown
  again into two paragraphs of roughly 2,280 and 891 characters, and §26.5 records a previous
  growth of that same bullet splitting a speech chunk mid-sentence. **Unmeasured.**
- **Nothing was seen** *(true of round 36; round 37 closed this — see §6d)*. No browser rendered any page.
- **Grepping extracted text cannot see a rule the extraction dropped** — see §7.
- **A correctly-quoted rule can still be taught unsafely**, and a legal, correctly-caveated
  technique can still be dangerous when executed badly at speed. No rulebook grep tests either.

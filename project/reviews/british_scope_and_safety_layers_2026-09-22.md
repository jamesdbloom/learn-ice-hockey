# British scope, the safety layers, and the tools that were lying — 22 September 2026

A continuous-loop round worked at up to nine concurrent agents on disjoint file sets. This record
covers what was found, what was refuted, and what the round could not reach.

⚠️ **No cumulative defect total is stated.** The criticals and majors below are the ones this round
recorded; agents reported others in passing that nobody tallied, and inventing a figure is the
[D8](../review_process.md#the-dimensions--a-review-must-cover-all-of-these) failure this project keeps
committing in the file that warns against it.

---

## Criticals

**1 · A rule number asserted to contain text it does not contain, with the tariff 5× too light.**
`equipment.md` §Facial protection said a pushed-up visor was *"one of Rule 9.5's named examples"* —
warning, then a minor. **IIHF 9.5 has no example list.** The phrase occurs once in the whole book
(`iihf_rules_v1.1.txt:7747`), inside **Rule 202.7**, Men's Junior U18, where the tariff is a **ten-minute
misconduct** to the next offender *after both teams are warned through their coaches*. ⚠️ **The same
file had it RIGHT thirty lines away**, in its §Neck protection bullet.
**Found by the `safety-reviewer` pass over another agent's repair** — the pass that exists because *"a
repair is new text, and new text has not been reviewed."*

**2 · A shot-block equipment precondition that reached the body and stopped.**
`defender.md` §Blocking Shots: *"shin guards that actually cover the shin **and the ankle**, and gloves
not worn through in the palm."* Layers before: body ✓ · facts ✗ · Common Mistakes ✗ · Key Takeaways ✗.
⚠️ **A defender taking the technique from the extraction layer puts shins and hands in a puck's path
without the kit check that makes it survivable**, and the only published clinical paper on the mechanism
is lower-leg and **ankle** fractures — the limb no summary layer carried. The owning document had
already propagated it into its own facts layer; this one had not.

⚠️ **CORRECTION, made before commit.** This record first said *"fixed by substitution."* **It was
fixed by ADDITION.** A word-diff of both changed lines shows **zero substantive deletions** — the facts
line gained `, so it wants shin guards covering shin and ankle and gloves not worn through in the palm`
on its end, and the Key Takeaway gained an appended sentence. **Nothing was traded out and no caveat was
displaced.** The error came from the repairing agent's own report and was carried in unchecked; the
commit gate word-diffed it and caught it. ⚠️ **"Substitution" is precisely the word that would make a
future auditor stop here and look for an eviction that never happened.**

---

## The tools were lying, and that is this round's largest finding

**`check_facts.py --near` UNDERCOUNTS coaching facts.** The gate (`:222-224`) computes
`coaching = len(body) - lines starting with "Rule:"`; `--near` (`:424-429`) skips every label in
`QUALIFIED = {"Rule", "Convention"}` (`:84`). **So a `Convention:` line counts against the cap in the
gate and not in `--near`.**

**Measured: 254 blocks disagree, undercount up to 6.** `defensive_zone_coverage:162` — `--near` says 0,
gate says 6. `center.md:21` is **at cap while `--near` reports four free slots**. ✅ **0 blocks currently
fail**, so the tree is sound; the exposure is the **margin**.

⚠️⚠️ **This is a coordinator defect as much as a tool one.** Roughly a dozen briefs this round said
*"run `check_facts.py --near` before editing any block"* and treated it as authoritative for whether a
fact would fit. **It is authoritative for LENGTH and not for BLOCK SIZE.** Found because an agent's edit
was rejected by the gate after `--near` reported room, and it **reported the discrepancy instead of
forcing the edit**. Not fixed during the round — a shared tool is shared state; live agents were
messaged the manual formula instead.

**Three more tool facts established:**
- `check_quote_drift.py` **requires a file argument**; bare it prints usage and exits 1. Several briefs
  named it without one, which checks nothing.
- It is **structurally blind to bare-quoted fragments in body prose** — it requires `*"…"*` italics
  except inside a ```facts fence (`:223`).
- ⚠️ **A `check_layer_echo.py` score of 0.0% means NOTHING.** `on_ice_communication.md` Key focus →
  Common Mistakes scores 0.0% **while both layers state the same kicking match penalty** — no shared
  6-shingle, and `_words()` drops tokens of four characters or fewer. **And the metric REWARDS
  truncating a safety list**, which is why three high-band documents were audited for exactly that.

---

## Truncated safety lists — the defect class the metric rewards

**23 enumerations checked; 19 complete; 4 truncated, all fixed by addition or substitution only.**

- **CRT6's four-item *"should NOT"* list abridged to three** in Key focus, Overview and Key Takeaways —
  dropping **recreational drugs**. Body and Common Mistakes had it; **the spoken layers did not.**
- **The YOUTH limb of both body-checking prohibitions never reached Key Takeaway 4** — USA Hockey
  604(a)'s *"12 & under… and below"* and Hockey Canada 7.3's *"U13 and below"*. A reader of that
  takeaway alone is never told body checking is barred for under-12s.
- `core_principles.md`'s boards posture list carried **eight of nine** limbs in two summary layers.

✅ **REFUTED:** `check_layer_echo`'s docstring cites `conditioning_and_recovery.md`'s Overview carrying
six of CRT6's ten flags as a defect. **It is a LABELLED ABRIDGEMENT WITH A POINTER** — it names its own
denominator and points at the layer holding all ten. **The measurement is accurate; the finding is not.**

---

## British scope — the round's largest sweep

The In-House Rules **never name the Elite League** (`grep -in "elite\|EIHL"` returns **0**), so every
corpus sentence saying *"in Britain"* on an In-House rule was suspect.

- **`center.md` said *"In Britain there is no stick-down order"* — flatly REVERSED for the EIHL**, where
  a centre who waits commits a violation. **Not in the coordinator's site list**; found by an agent
  sweeping its own files instead of trusting line numbers.
- **A facts line said Hockey Canada excludes goalkeepers from *"possession"*.** It has no POSSESSION
  glossary entry at all and reaches goalie protection by a **contact** route. ⚠️ **The document's own
  body already said so** — the facts layer and the body contradicted each other, and the facts layer is
  the one voiced alone.
- **The EIHL Casebook amends 22 rules; five have been checked.** Rule 42 makes a game misconduct
  **mandatory** where IIHF 42.4 leaves it discretionary — the corpus **understated a penalty**. Rule 69
  adds three criteria the corpus carries in no spoken layer.
- **Neck guard: the mandate is identical across all three British books; the PENALTY is not.** In-House
  9.12 deletes the warning (immediate 10-minute misconduct → game misconduct); **EIHL Casebook 9.12
  keeps the IIHF warning-then-minor** and **explicitly reaches warm-ups and practice sessions**.
- **A protective-equipment duty absent from the corpus entirely: the BENCH.** Two of the four IHUK Rules
  of Competition require the neck guard for dressed and non-playing players on the bench, *"otherwise,
  they must leave the bench"*; U19 National Division requires it *"regardless of being 18+"*.

---

## Omissions found by READING rather than grepping

**Kneeing and clipping were absent from the entire corpus** — in the document that teaches body
checking. `grep -rli kneeing content/` returned two files; in `body_contact_and_battles.md` the word
appeared **once, in a verification note, inside a sentence about a different search.**

⚠️ **Why it mattered:** §5 tells the reader their legal contact area is *"above the knees and at or below
the shoulders"*, in the body **and in the facts layer**. **Voiced alone that is the complete legal test,
and under Hockey Canada 7.8 it is not** — *"contact with an opponent's knee **on an otherwise legal
hit**."*

Also then found: **Hockey Canada's clipping line is at the HIPS, not the knees** — wider than the other
three books by the whole thigh — and **CARHA has no clipping rule at all**.

---

## Three unsourced magnitude claims, all in one file, all found separately

- *"This one rule prevents most of it"* — converted USA Hockey's **ranking** into a **proportion**, which
  the section's own prose disclaims two paragraphs below. Six inbound anchors rewritten with it.
- *"The four that cause the injuries"* — an unsourced causal ranking, which the document disclaims 200
  lines later: *"nothing in the safety material held here ranks game situations against one another by
  danger."*
- *"Assuming the four worst fouls…"* — still open.

⚠️ **They were found one at a time, each by an agent looking at something else. The heading and summary
layers have never been swept for this as a class.**

---

## What was REFUTED — roughly as valuable as what was confirmed

- **All five IIHF notation-key claims UPHELD** by rendering an image-only PDF at 300 dpi and reading it
  positionally. The document's central *"the two keys disagree"* argument survived intact.
- **Four absence-of-evidence disclosures tested; all four upheld.** Second systematic disclosure test to
  come back overwhelmingly clean.
- **The flagged Shape-3 suspicion was wrong** — but attacking the shape found **three real drifts**,
  including **Macnamara & Maitra 2019, where the corpus quoted limb (i) of a two-limb conclusion and
  closed it with a manufactured period.** Limb (ii) was the sharper one.
- **A claimed `check_layer_echo --doc` bug was refuted** — six layer pairs means "6 pair(s)" for every
  document; the agent read the summary line and not the table.
- **The coordinator doubted two claims in a safety report and was wrong both times.**

---

## Coordinator defects, recorded because the briefs are the weak link

1. ⚠️⚠️ **A proposed heading would have shipped a FALSE claim.** The brief framed it as *"four fouls…
   that no book prices at a bare minor"*. **True only of Hockey Canada and USA Hockey** — NHL 50.2,
   IIHF 50.2, PWHL 50.2 and CARHA 56(a) all start at a bare minor. **The agent refuted it.** Had it
   pasted the wording, the corpus would carry a false penalty claim **in the safety heading being
   repaired**.
2. **A rule number attributed to the wrong book** — *"IIHF 8.3(i)"*. IIHF 8.3 is **BLOOD**; 8.3(i) is
   Hockey Canada's. *"Had I acted on the brief I would have… reported a false absence."*
3. **A site list short by three in the agent's own files**, one of them the reversed EIHL stick-down
   order.
4. **A dozen briefs routed agents to `--near` as authoritative for block size.**

**The standing remedy is unchanged and was validated again: specify the DEFECT and the CONSTRAINT, and
let the agent that has read the document write the sentence.**

---

## Sources and verification

- **`ihuk_coaching_regs`** installed after **two** agents named its absence as their highest-value
  blocker. ⚠️ **It settles the training question as a NEGATIVE**: §9 is scoped to *"practices, games,
  camps, and hockey schools"*, §9.3 makes a neck guard mandatory for the **coach's own** PPE, and the
  coach's duty toward **players** names only *"helmets and face protection, sticks, and gloves"*. **The
  cautious disclosure STANDS and is now a searched negative rather than a gap.**
- **`ls sources/*.txt` moved 40 → 42**, exposing two stale counts — `CLAUDE.md` said *"the directory
  holds thirty-eight"* and the `rules-verifier` definition asserted 40 as current. **Both now point at
  the command.**
- **New traps recorded:** `neck laceration` flattens to **`necklace`** (8 hits in IIHF, **all** the
  collision, zero genuine jewellery hits); the **PWHL carries the PRIOR edition's running header on 11
  pages**, including p.74, Rule 42 Charging; **a publisher can serve a block page with HTTP 200** (three
  APA URLs, ~1 KB each — *"a 200 is not a presence"*); the NIHL ROC has **three revisions and the copy on
  disk is the middle one, served by no URL**.
- **Untrusted content observed:** a Semantic Scholar `disclaimer` field asked the reader to insert an
  email address and fetch elsewhere. **The agent did not follow it and reported it.** Non-negotiable 8
  working as designed.
- **17 new `link_baseline.tsv` rows**, every one from a fetch made this round.

---

## What this round could not have found

- **Two-thirds of `equipment.md` has now gone three passes unexamined** — sticks, skates, goalie gear,
  certification. **The sticks bullet alone asserts four different shaft caps across four books and not
  one is verified.**
- **Rowland 2014 is unreachable** and **nine figures plus a Key Takeaway rest on a single disclosed
  reading.** Needs institutional access, not another agent.
- **Seventeen of the EIHL Casebook's 22 amended rules are unchecked**, and its three version stamps
  disagree while its Preamble says interpretations go out **by email in-season** — so every EIHL sentence
  in the corpus rests on a PDF whose own publisher has not settled which version it is.
- **The IIHF Situation Handbooks were not searched** for any rule this round touched. *"A Handbook
  ruling could carve out a case my rule text forecloses — this corpus has been burned by exactly that
  shape three times on one rule."*
- **A hazard whose heading does not advertise it.** Every omission above was found because a heading
  announced the territory. *"A penalty-bearing sentence sitting under §Maintenance and Care would have
  passed me untouched."*
- ⚠️ **CORRECTED BEFORE COMMIT — this line originally read *"the site was not built and no diagram was
  rebuilt."* The diagrams WERE rebuilt**, at 18:41, with the absolute node binary, **before**
  `check_absolutes.py` ran — so the caption layer IS certified against current text. **The site was
  still not built at that point**, and the commit gate blocked on it: `dist/` was 56 minutes older than
  `diagrams.json`, and `site/src/plugins/remark-corpus.mjs` emits a new link on **every figure in the
  corpus**. **`site-reviewer` had not run.** Both were conditions to clear, not disclosures to make —
  ⚠️ **an honest "this is uncertified" is NOT a declaration that the dimension is out of scope**, and
  with a renderer change staged, silence-as-uncertified is what C3 forbids.

---

## Addendum — clearing the commit gate's two blocks

The gate returned **BLOCK** on C6/C11 and C10. Both were cleared by running the missing passes, and
**both passes found real defects**, which is the argument for the gate rather than against it.

### C6/C11 — `safety-reviewer` on the kneeing/clipping material

The earlier safety pass read §§1–12 **before this material existed** — *"round 37's shape verbatim: the
pass was real, it simply never saw the text."*

**The load-bearing finding, and it is the one the block existed to catch.** The contact envelope was
stated as **SUFFICIENT** in body (`:496`) and Key Takeaway 5 — *"a check that satisfies it does not
offend the other three"* — while the new §5 paragraph says the opposite in terms: *"under that book a
check that satisfies every other part of the envelope is still kneeing if your knee is what arrives."*
⚠️ **A reader playing the envelope was told by one layer they were inside a standard offending no book,
and by another that Hockey Canada ejects them.** Fixed with a limiting clause in both.

**Second:** the new kneeing `Rule:` line **carried the tariff but never the definition**. Voiced alone
it said what kneeing costs and never what it is, and *"its own foul"* pointed at a contrast heard in a
separate `<p>` 300 ms earlier. Fixed by substitution at 290/300 chars **without spending the block's
last free line** (13/14 total, 6/8 coaching).

✅ **The coordinator's false *"no book prices at a bare minor"* framing DID NOT SHIP** — verified. The
text says *"two of the books write no bare minor"* and names the NHL and IIHF as starting at one.
✅ **A corpus-wide layer test on "get low"** found twelve facts-layer hits and **no clipping exposure**.

⚠️ **Carried forward, not buried — the pass's caveat on its own work:** *"M1's insertions are a scope
limitation on a sufficiency claim, which is exactly the species of sentence this document has got wrong
before. They need another pair of eyes."*

### C10 — build, then `site-reviewer`

`npm run build` with the **absolute** binary; verified **both** required checks — the chain reached its
last step (`check:links`: 53 pages, 11,468 internal links, all resolving) **and** `dist` (18:50:03) now
postdates `diagrams.json` (18:49:29). ⚠️ A fresh `dist` mtime alone would have proved only that
`clean:cache` ran.

**The new per-figure link renders correctly**, including the combined `away` + key-link case nobody had
seen — **127 figures render both children of `.diagram-source` together**, one line, separator intact.
Suppression on the key document works (0 links there). Contrast ≈7.1:1 light and ≈8.3:1 dark. **Zero
console messages of any level** across full page loads; **zero off-origin requests** in 66 captured.
Figure→`h3` spacing survives — and the reviewer established **why**: no figure anywhere is immediately
followed by an `h3`, so the live rule is the `+ p:empty + hN` variant, measured at 44 px.

⚠️ **A Major that is NOT a commit blocker and is now a plan row:** the link lands at `scrollY = 0` while
the section answering its own wording sits **4,671 px down a 10,256 px page**, with the ToC rendering
**closed**. The plugin's own justification is scroll distance, so it currently **replaces one long
scroll with a click and a second scroll**. The fix is a fragment; **the target is a content judgement
the reviewer declined to make.**

⚠️⚠️ **THE HONEST GAP IN THIS CLEARANCE: NO PHONE VIEWPORT WAS EVER OBSERVED.** `resize_window`
reported success three times while the CSS viewport stayed pinned at 1200 px —
`matchMedia('(max-width: 60rem)')` stayed **false**. **Not one mobile media query was exercised.** The
reviewer labelled every mobile claim a proxy and refused to record it as observation. **The plugin's
entire justification is a phone reader's scroll distance, and that is precisely the reader nobody has
seen.** This clears C10's "the pass was run" condition; **it does not clear mobile rendering**, and
this record should not be read as if it did.

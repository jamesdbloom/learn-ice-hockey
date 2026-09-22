# Plan archive — 22 September 2026 consolidation

**What this is.** `project/plans/OPEN_ITEMS.md` had accumulated closed work again. CLAUDE.md's rule
for that file is explicit — *"**No completed items:** when work closes it moves out to a review
record"* — and a long parallel round broke it by appending findings, lessons and brief-error records
straight into the plan as they landed.

**Moved here: 117 sections.** Every one was closed: a finding that was repaired, a
question that was answered, a claim that was refuted, or a lesson recorded. **Nothing was deleted.**
The split was mechanical and conservative — a section stayed in the plan if it contained any
unchecked `- [ ]` row **or** if its heading signalled open work (`OPEN`, `NEW`, `📌`, or one of the
standing Podcast / Readability / Marketing blocks). Everything below failed both tests.

⚠️ **ARCHIVES ARE EVIDENCE.** These sections are preserved verbatim, with their original headings and
wording. A reader of an archive must see the record as it was written. If a later file move breaks a
link here, retarget the link path and leave the visible text alone.

⚠️ **This is not a dispatch queue.** No agent works from this file. Open work lives in
[`OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md) and nowhere else.

---

### 🚧 COMMIT BLOCKED — gate verdict and exactly what remains (22 September 2026)

`commit-gate` returned **BLOCK**. Full verdict reasoning in
[`../reviews/layer_differentiation_round_2026-09-22.md`](../reviews/layer_differentiation_round_2026-09-22.md).
⚠️ **Nothing is staged.** Six `content/` files, `scripts/check_layer_echo.py`, `sources/README.md` and
`project/verification/link_baseline.tsv` are modified in the working tree. **All six gates pass.**

**C11's rule, sharper than the coordinator's own reading:** a clearance is voided when a repair
*"moves, merges, splits or renumbers text, or touches a claim the finding did not name."* Four files
are the paradigm case — `special_teams.md`'s Overview was **demolished and rebuilt** into a new
1,400-character paragraph merging **five books in one spoken unit**. ⚠️ **And `skating.md` is worse,
not better: there is no clearance to void because it never had one.**

| Condition | Status |
|---|---|
| **C5** — the Athletes Untapped quotation re-derivable | ✅ **VERIFIED.** Verbatim, item **1 of 4**, HTTP 200, not in a comment, **character-identical in Wayback `20260422021414`** |
| **C5** — trailer propagation at `skating.md:958` | 🔄 **dispatched** (rate limit lifted) |
| **C6** — new safety text in `passing_and_receiving.md` | ✅ **CLEAR.** All six passages, no critical, no major |
| **C4** — rules pass on the rebuilt `special_teams.md` Overview | 🔄 **dispatched** |
| **C3** — `facts-reviewer` (D10 silent) | ⏸ **held for wave two** — one of the five lines it reviews (`offensive_zone_play.md`'s `Key:`) is being rewritten right now, so it must read the final text |
| **C3** — D15 out-of-scope declaration | ❌ not yet written into the record |
| **C11** — `offensive_zone_play.md`, `switching_positions.md` | ⚠️ **reviewed, and it found TWO new Majors** |

### ⚠️⚠️ THE COORDINATOR'S SWEEPS FAILED THE SAME WAY THREE TIMES — and the failure is in the EXCLUSIONS

**22 September. Three corpus-wide censuses, three different patterns, the same defect each time: the
EXCLUSION half of the pattern was incomplete, which manufactured false positives.**

| Sweep | What it missed in its exclusions | Result |
|---|---|---|
| Two-family coverage binary | the *"low zone collapse … under man-on-man"* construction | **Missed 3 of 4 sites** in `winger.md`, and **cleared four other documents** on that same pattern |
| Unary job assignment | *"in the default system"* counts as a system label | 12 hits, **top ones false positives** |
| Flat hybrid dividing line | *"find out which your team plays"* counts as a variability hedge | 11 hits, **all three sampled were correct** |

⚠️ **The inclusion half was fine every time. The exclusion half was wrong every time** — and an
incomplete exclusion does not just add noise, **it inverts the result**: hits that are already
correct get presented as a backlog, and a reader who trusts the count "fixes" text that was right.
**That is the sweep the plan forbids, arrived at by measurement error rather than by haste.**

⚠️ **And the first row is the dangerous one, because the failure ran the other way:** an incomplete
INCLUSION pattern reported four documents **clean** that had never been properly checked.

**The method that actually worked, every time: an agent reading ONE document and grepping it for a
phrase that document itself uses.** ⚠️ **A corpus grep NOMINATES. It does not clear, and it does not
enumerate.** Anyone running one here should sample the hits before quoting a count.

### ✅ The glossary was the round-10 shape, and worse than predicted

`language_and_glossary.md` — the **owner** — had a full `**Hybrid**` entry at `:303`, its
`Low zone collapse` entry already named all three, and Common Mistakes named three. ⚠️ **And THREE
Key Takeaways named two — all landing in the SAME speech chunk, which contained
`collapse=3, man-on-man=3, hybrid=0`.** A listener met the word three chunks earlier, then got a
clean binary three times in a row.

⚠️ **One site was not an omission but a WRONG ANSWER.** `:55` said that under man-on-man *"there is
no height to hold"* — but **a hybrid plays zone ABOVE the dots, so there is a height to hold.** Same
at `:122` (*"there is no point to hold"*). A hybrid listener was given an answer that was **wrong**,
not merely absent. **12 sites repaired across two files, 5 deliberately left** — including two
backcheck-lane lines that say "man-on-man" about a **different** question entirely, where **a sweep
on the string would have wrongly "repaired" them.**

⚠️ **And the agent's own honest limit, which is the one to carry forward:** *"I made the corpus more
internally consistent without testing whether the thing it is consistent about is true."* Every
hybrid claim was checked against `language_and_glossary.md` and `defensive_zone_coverage.md` — **both
secondary.** **No coaching source behind them was opened by anyone this round.**

### ⭐ A LESSON PROPAGATED BETWEEN AGENTS WITHOUT THE COORDINATOR — the comparative-pointer class

**Earlier today an agent found, in its own draft, that a bare comparative adjective points as hard as
a demonstrative and `check_facts_antecedents.py` matches none of them.** It was written into a
brief. ⚠️ **A later agent then rejected its OWN first draft on that ground, unprompted:**

> *"My first draft read 'Ranking the royal road **highest**'… I rejected it on your own warning: a
> bare superlative points as hard as a demonstrative — **highest among what?** Naming the comparison
> class cost 14 characters, which I paid for by tightening… **No qualification was traded out.**"*

⚠️ **And in the same pass it found a SECOND dangler the tool cannot see, in a line it was already
repairing** — *"freezing **it** in his own crease"*, where *"it"* (the puck) was named only in the
**previous** facts line, heard across a 300 ms break.

**`check_facts_antecedents.py` went 13 → 10 corpus-wide, 0 in `special_teams.md`.** ⚠️ **But the
agent's own caution is the thing to keep: *"the remaining 10 are the TOOL'S list, not the real
list."*** The tool's discriminator is a demonstrative plus a short abstract noun. **Bare
comparatives, superlatives and pronouns whose referent sits in a neighbouring facts line are all
invisible to it, and only reading voiced-alone finds them.**

### ⭐ THE SHARPEST DISTINCTION OF THE ROUND — the defect was THE PROMISE, not the list length

**Brief error twenty-four:** the brief claimed `defensive_zone_coverage.md:307` gives all three
landmarks. ⚠️ **It gives TWO** — *"man-on-man below the dots… Some teams say 'below the hash marks'
or 'below the top of the circles'"* — **the same shape the brief called a defect in the glossary.**
Verified by the coordinator.

**The agent refused to "fix" `:307`, and its reasoning is the most useful thing recorded today:**

> *"Read aloud, both state the dots as the named default **in the same breath** as the variants, so
> 'some teams say the hash marks or the top of the circles' parses as **variation from the default
> just given**. The glossary entry was different, and that is what made it a defect: it interposed
> **'Where that line sits is a team decision'** — a sentence that **promises to answer where the line
> sits** — and then gave a closed two-item list **excluding the answer its own first sentence had
> used**. **The defect was the promise, not the two-item list.**"*

⚠️ **A string sweep for "two-item landmark list" would have "repaired" `:307` and made it worse.**
**The discriminator is not the list — it is whether a sentence promises completeness and then
under-delivers.** Nothing mechanical can see that.

**Its repair of the glossary followed from the same reasoning:** it did **not** add *"the dots"* to
the list, because *"man-on-man below the dots… some say the dots"* is self-answering. **It removed
the pre-commitment from the definition instead**, and restated the landmark as a rule of thumb —
matching the owner's own framing.

**It also found a second site the brief missed**, `language_and_glossary.md:97`, stating the landmark
flatly with no team-variation hedge, voiced alone — *"a coaching choice presented as a law."*

### ✅ The three unbounded-negative phrasings should NOT be made identical

**Ruling, with reasoning worth keeping:** `:305` is scoped **to this zone** deliberately — the
document says why two sentences later, because `breakouts.md` records KHL pass-clustering data, so the
corpus cannot make the claim sport-wide. `:342` is about **Box+1 at any level**. `:126` was a
parenthetical. ⚠️ **Flattening them would destroy `:305`'s scoping, which is load-bearing.**

**The property that must hold is not wording but DIRECTION: each must claim something about a SEARCH,
not about the WORLD.** `:126` was the only one that failed, and now passes.

### 🔴 THE `special_teams.md` CRITICAL WAS BIGGER THAN THE BRIEF — and the REVIEWER'S SUGGESTED FIX was itself defective

**Verified by the coordinator against both glossaries.** The brief said the *"from a skater"*
qualifier was wrong for **USA Hockey**. ⚠️ **It was wrong for ALL THREE BOOKS.**

- **Hockey Canada Glossary** (`sources/hc.txt:1108`): *"The **goaltender is considered a player**,
  except where explicitly stated because special rules or privileges apply to them."* **10.1(ii)
  contains no explicit exclusion**, so it reaches the goaltender; **10.1(v) is an ADDITIONAL limb, not
  a carve-out from it.**
- **CARHA Glossary** (`sources/carha.txt:384-387`): *"Except where special rules apply, **the
  goalkeeper is to be considered as one of the players**."* 75(b) is written against *"any player"*.

⚠️⚠️ **THE REVIEWER'S SUGGESTED REPLACEMENT WORDING — WHICH THIS COORDINATOR RELAYED IN THE BRIEF —
KEPT *"Hockey Canada 10.1(ii) and CARHA 75(b) only a deliberate SKATER"*. Pasting it would have left
TWO-THIRDS OF THE SAME ERROR IN PLACE.**

**The agent did not paste it.** ⚠️ **The convention that saved this is the one CLAUDE.md already
requires: supplied wording is a SKETCH TO BE CHECKED, never a string to paste.** The brief said so;
the agent obeyed; the error died there. **Brief error twenty-three, and the convention earned its
keep.**

### ⚠️⚠️ THE DOCUMENT ALREADY KNEW — the third time today

`special_teams.md:703-706` and `:718` **already stated the correct position verbatim, including
Hockey Canada's Glossary clause, 230 lines earlier in the same file.** ⚠️ **Line 940 contradicted its
own document.**

**This was a PROPAGATION failure, not a research failure** — and it is the third instance today of
*the answer was already written down in this repository*: `rules_primer.md:451` already carried the
Hockey Canada item a brief said did not exist; `body_contact_and_battles.md:706-707` already had the
IIHF carve-out correctly conditioned when a repair stripped it; and now this.

⚠️ **The pattern is worth a standing rule: before researching a rules claim, GREP THE DOCUMENT
ITSELF. The corpus is repeatedly more careful than the people editing it.**

### ⭐ A DEFECT CLASS NO TOOL CAN MATCH — found only by reading the RENDERED audio

The same agent caught a defect in **its own first draft** that no checker could see:

> *"My first draft read 'add a **stricter** goaltender-only limb'. Rendered through `md_to_speech`
> and read in isolation, *"stricter"* points at the previous `<p>` across a 300 ms break — **a
> `check_facts_antecedents`-class defect the tool does not match because the pointer is an ADJECTIVE,
> not a demonstrative.** I caught this only by reading the rendered SSML, not the Markdown."*

⚠️ **`check_facts_antecedents.py`'s discriminator is a demonstrative attached to a short abstract
noun. A bare comparative adjective — *stricter*, *larger*, *the same* — points just as hard and
matches nothing.** **Recorded as a known blind spot; rendering and reading is the only detector.**

### ✅⭐ THE BEST THING THAT HAPPENED TODAY — an agent reasoned WRONG and refused to write it

**The `defender.md`/`defending_the_rush.md` agent derived a tactical inference and then declined to
use it, in its own words:**

> *"I can derive from the owner that under a hybrid the wingers play the points by area, so for
> 'does the winger come to the corner' and 'does the backchecking winger release' **a hybrid behaves
> like the collapse, not like man-on-man** — which means naming it as a third peer in those two places
> would have been actively misleading. **But that is my inference, not the owner's words, so I kept
> every opener at set level** (*'those two are not the only coverages'*), **which asserts nothing and
> cannot go stale.**"

⚠️⚠️ **THE INFERENCE WAS WRONG.** Verified by the coordinator against the owner's Hybrid section:
> *"The two wingers play zone up high on the points — **but with a man-on-man trigger: if your point
> man crosses the line and comes down, he becomes yours and you go with him.**"*

**So for the winger-corner question a hybrid behaves LIKE MAN-ON-MAN, not like the collapse** — and
the repairs made earlier today in `winger.md`, `center.md` and `switching_positions.md`, which pair
the hybrid with man-on-man for exactly that question, **are correct.**

⚠️ **Had it written its inference, it would have contradicted the owner AND three documents repaired
hours earlier — and its reasoning was plausible enough that a reviewer might not have caught it.**

**The corpus was protected by EPISTEMIC DISCIPLINE, not by correctness.** It did not know it was
wrong. It knew it was *inferring*, and that inferring is not sourcing. ⚠️ **That is a stronger defence
than "refute the brief", because it works even when the agent's own reasoning is the defective
input — which is the one case no reviewer and no checker in this repository is positioned to catch.**

**Write this into every brief: an inference you cannot source is not a finding, and the honest move
is to write the sentence that asserts less.**

### ⚠️ BRIEF ERROR TWENTY — a brief quoted a REPORT instead of re-reading the file

The `goaltender.md` brief quoted `:513` as it appeared in a **reviewer's report**. ⚠️ **The working
tree held something different and worse** — `Action: Shout to get the net-front player moved — that is
your defenceman's job`, with **no hedge and no alternatives at all** — because another agent's
uncommitted work had landed in between. The headroom figure was wrong with it.

**The agent caught it by reading the file.** ⚠️ **In a round where eleven files are modified and
unstaged, a quotation from a report is stale the moment another agent finishes. Re-read the file, every
time.** Two other premises in the same brief were also already fixed by that agent's work.

### ⚠️ A CORPUS-WIDE COUNT MOVED UNDER A CHECKER WHILE AGENTS WERE LIVE

`check_facts.py` reported **5709** facts on the `center.md` agent's first run and **5710**
twenty minutes later, **with no facts line added or removed by that agent in between.** The
live agents in `special_teams.md`/`winger.md` are the obvious explanation; it was not verified.

This is the race CLAUDE.md warns about, observed rather than predicted. ⚠️ **Treat every
corpus-wide figure taken on 22 September as provisional until every agent has finished and
every file is staged.** The only run that counts is the one after that.


### ⚠️⚠️ MEASURED: THIS ROUND MADE THE CORPUS *LESS* UNIFORM, NOT MORE

**The C11 reviewer named this as the one job only the coordinator could run. It was run, and its fear
is confirmed.** Coverage-family mentions per document (`hybrid icing` and goaltending-style *hybrid*
excluded):

| Document | collapse | man-on-man | hybrid |
|---|---:|---:|---:|
| `positions/defender.md` | 8 | 9 | **0** |
| `systems/defending_the_rush.md` | 5 | 10 | **0** |
| `technique/body_contact_and_battles.md` | 5 | 3 | **0** |
| `getting-started/getting_started.md` | 1 | 2 | **0** |

**Five documents were repaired today to name a third family; these four were not.** ⚠️ **Before this
round the corpus was uniformly two-way. It is now split.** `defender.md` and `defending_the_rush.md`
are dispatched to be **read and ruled on, not swept** — ⚠️ **`defending_the_rush.md` is substantially
about backchecking, where the hybrid is not one of the options, so a high proportion are expected to
be correct as they stand.**

### 📋 THE FIVE-FAMILY QUESTION — a reviewer's view, for the owner to decide

**"Open the list; do not enumerate five."** Three reasons, in its order of weight:

1. ⚠️ **The failure is the CLOSED LIST, not the missing names.** *"zone, man-on-man, or a hybrid of the
   two"* is grammatically exhaustive — *"a reader on a Box+1 team does not conclude 'mine is a fourth
   kind'; they conclude one of the three must be theirs and pick wrong."* Opening the list costs a
   handful of characters and needs no facts line reopened against its cap.
2. **Box+1's audience IS this corpus's audience** — the owner calls it the standard introductory
   structure *"for young players and beginner adults"* and *"in rec and beer league"*. ⚠️ **But the
   owner also records it *"do[es] not cover the points properly at all"*, so listing it as a peer in a
   winger's POINT-COVERAGE hedge would be incoherent.**
3. ⚠️ **The collapsing box must not go in any list** — *"Five low is neither: that is a collapsing box,
   a situational state rather than a system."* **Adding it would be a factual regression.**

**Cheapest high-value change, and it is in neither of the reviewed files:** add **Box+1** and
**collapsing box** entries to `language_and_glossary.md`'s glossary. ⚠️ **The vocabulary owner
currently has entries for exactly the three families the position documents name — which is what makes
the three look like the whole world.** One file, two entries, no cap pressure.

**On the catch-all:** *"find out which your team plays"* is **necessary and not sufficient** — *"it
tells a reader to ask; it does not tell them the answer may be off the list they were just given."*

### 🔴🔴🔴 BRIEF ERROR NINETEEN — the coordinator asked an agent to write an UNSOURCED MEDICAL CLAIM into the concussion paragraph. It refused.

**The worst brief error of the round. Recorded in full because it is the one that would have done the most damage.**

The brief for the CRT6 repair asserted, as a reason to make an edit:

> *"**Weakness or numbness/tingling in more than one arm or leg**… **It is also the bilateral-limb
> sign, i.e. the spinal one** — and the Overview already carries the spinal *action* while omitting
> the **trigger** that would make a bystander reach for it."*

**The agent refused to write it**, and its reasoning is correct:

> *"CRT6 does not say that, and nothing on disk in this document's sources does. CRT6 attaches its
> spinal instruction to **all** cases of head injury, unconditionally… Writing the causal link would
> have been **a medical claim from memory in the highest-consequence paragraph in the corpus.**"*

**Verified by the coordinator:** `conditioning_and_recovery.md:17` and `:576` both attach the spinal
instruction to *"any head injury"* / *"all cases of head injury"* — unconditional. A corpus-wide
search for anything tying bilateral limb signs to spinal injury returns **nothing**.

⚠️ **This is non-negotiable 1 — never fabricate — reached through a brief, in a concussion red-flag
list.** It is worse than error nine (the licence for a mandatory-major hit), because that was a rules
claim and this is a **medical mechanism**, and because the brief did not merely state it in passing —
**it offered it as the justification for the edit.**

⚠️ **It also rejected a second clause it was tempted by**, and the reason is instructive: a contrast
like *"not the single dead arm players shrug off"* is true of CRT6 — **but a SINGLE numb arm IS a red
flag under the British fourteen** (`:265`), so the clause *"would have licensed ignoring one."*

**The defence that worked was not "refute the brief."** The brief's individual facts were checkable
and its framing was plausible. **What worked was an agent that would not write a sentence it could
not source — and that rendered CRT6 itself with `pdftoppm` rather than trusting the relayed list, the
reviewer's PNGs, or the coordinator.**

### ⚠️ BRIEF ERROR EIGHTEEN — a chunk adjacency asserted without rendering

The same brief said Key focus and the red-flag paragraph were **adjacent chunks**, using that to argue
the safety margin was comfortable. ⚠️ **Rendered and verified: Key focus is chunk 001, the Overview's
opening is 002, and the red-flag paragraph is 003 — TWO chunks apart.** The verdict (Minor, not
Critical) is unaffected, **but the brief overstated the margin — which is precisely why the "make the
disclosure a route" half of the fix was worth doing.**

### 🔴 BRIEF ERROR SEVENTEEN — the SECOND time a brief nearly put a false rules claim in a facts line

**The brief for the goaltender-exposure repair headed a section *"GOALTENDERS — NO intent
requirement, NO zone limit"*, as a general statement.** ⚠️ **It is false for USA Hockey.**

`sources/usah.txt:3772-3775`, Rule 610(c), verified by the coordinator:
> *"A minor penalty shall be assessed to any player **or goalkeeper** who delays the game by
> **deliberately** shooting or batting the puck outside the playing area…"*

**USA Hockey writes the deliberateness requirement against the goalkeeper and the skater alike** —
the goalie there is in **exactly the same position** as the skater. The stricter-on-goaltenders
direction is **Hockey Canada 10.1(v) and CARHA 55(a) only**.

⚠️⚠️ **Had the agent generalised from the brief's framing, it would have written a false rules claim
about USA Hockey into a ` ```facts ` line VOICED ALONE — telling a USA Hockey goaltender he faces
strict liability when his book requires intent.** That is the same shape as **error nine**, the
licence for a mandatory-major hit: **a brief whose individual citations were all correct and whose
GENERALISATION was wrong.**

**Both times the agent caught it by reading the primary text rather than the brief.** ⚠️ **Both times
"refute the brief" worked only because the agent went to the source — not because the brief looked
suspicious.** The body already had it right at `:718`; **the corpus was more careful than the
dispatcher, again.**

**Seventeen brief errors. One reached the corpus. None caught by a checker.**

### ✅ The repair, and why it needed no eviction

The corrected content did not fit one line — **357 characters against a 300 cap** — so rather than
trade a caveat out the agent **added a second `Rule:` line**. ⚠️ **`Rule:` facts do not count against
`MAX_COACHING_FACTS`**, so the block went to 9 of `HARD_MAX` 14 and **nothing was evicted or
compressed.** Both lines measured with `len()` in Python, not `wc -c`: **241/300 and 265/300**,
confirmed by the coordinator. The `Action:` line at 168/200 flagged as at-risk was **not touched**.

A layer test found Common Mistakes and Key Takeaways **already carried the goaltender exposure in
full** — the three repaired sites were the only ones stating the relief without it.

### ℹ️ `.claude/agents/rules-verifier.md` was modified mid-round — by the coordinator, and it was safe

An agent correctly flagged this as a possible round-59 failure (*a shared tool changed during a
wave*). **It was the coordinator**, adding the missing `pwhl_rules` row after a verifier reported its
own instruction table stale for the third time. ⚠️ **It was safe only because no `rules-verifier` was
live at the time** — the one that reported it had already finished, and the two agents then running
were general-purpose. **The agent was right to raise it; the answer is that the timing happened to
be clean, not that the rule does not apply.**

### ⚠️⚠️ BRIEF ERROR SIXTEEN — A PHRASING-KEYED CENSUS MISSED THREE OF FOUR SITES IN ONE FILE

**The coordinator ran a corpus census for the two-family coverage binary, keyed on the phrasing
`zone or man-on-man`. It returned exactly one hit in `winger.md`. The agent found FOUR.**

The three it missed all state the same choice in a different construction — *"That split belongs to a
low zone collapse; **under man-on-man** you follow your check into the corner instead"* — at
`winger.md:15` (Key focus), `:23` (an Overview facts `Convention:` line, **voiced alone**) and `:723`
(Key Takeaway 2). ⚠️ **`:723` is the Key-Takeaway twin of the line the census DID find, one line
above it** — hybrid present in one layer, absent in the other, which is the layer-differentiation
defect itself.

⚠️⚠️ **AND THE CENSUS CLEARED FOUR OTHER DOCUMENTS ON THAT SAME PHRASING.** `center.md`,
`defender.md`, `switching_positions.md` and `defensive_zone_coverage.md` were reported clean by a
method that had just been shown to miss 75% of the sites in the one file anyone checked by hand.
**A clearance is only as good as the pattern that produced it, and this one was not good.**

**Re-run with a contrast-construction pattern: seven candidates across four documents**, including
four in `goaltender.md` and one in **`language_and_glossary.md`, which is the OWNER for vocabulary**.
⚠️ **They are CANDIDATES.** The net front and the corner are both below the dots, where a hybrid
marks man-on-man — **so the man-on-man answer may already cover the hybrid case, and naming it would
add words without adding information.** Dispatched to agents to read and rule, **not swept.**

**This is the same shape as brief error twelve** (*"three sites" was five*, also found by a layer
test after a grep). ⚠️ **Twice in one day, a coordinator census keyed on surface phrasing has
under-reported a propagation defect — and both times the agent that read the file found the rest.
A grep NOMINATES. It does not clear.**

### ⚠️⚠️ MEASURE FACTS LINES IN CHARACTERS, NOT BYTES — `awk` and `wc -c` LIE BY 2 PER EM-DASH

**Found 22 September by the agent repairing `offensive_zone_play.md`, verified by the coordinator.**

`check_facts.py` enforces a **character** count. `awk` and `wc -c` report **bytes**. Every facts line
in this corpus is full of em-dashes, and **each one costs 2 extra bytes**. Measured on the repaired
`Key:` line: **186 characters, 190 bytes — four apart, from two em-dashes.**

⚠️ **So a line measured with `awk` looks 2–4 characters over what the checker actually enforces.**
Two ways that bites, both bad:

1. **You "discover" a cap violation that does not exist** and go looking for something to cut.
2. ⚠️ **You trim a caveat to fix nothing** — which is the eviction failure `--near` exists to prevent,
   arrived at by a measurement error rather than by carelessness.

**Use `len(value)` in Python, or the tool. Never `wc -c`, never `awk length()`.**

### ⚠️ Brief errors TWELVE through FIFTEEN — and one is worse than being wrong

12. **"Three sites" was FIVE.** The `switching_positions.md` binary-enumeration defect had two more
    instances the brief never named — `:447` (a facts `Action:` line, **voiced alone**) and `:455`
    (the body bullet it extracts from), both in *"If you have been moved without being asked"*. ⚠️
    **Found by a LAYER TEST, not by the grep the brief had run.** Fixing three and leaving two would
    have been *"the round-10 shape reproduced inside the repair for it."*
13. 🔴 **A figure attributed to a tool that could not have produced it.** The brief said
    `check_facts.py --near` put `offensive_zone_play.md:25` at 185/200. ⚠️ **`--near` only prints
    lines within SIX characters of the cap — that line was ELEVEN short and was never in its
    output.** The number came from somewhere else and was **labelled as that tool's**. ⚠️ **This is
    worse than a wrong figure: a wrong figure is checkable, and a wrong PROVENANCE tells the next
    reader the wrong thing about where to look.** It is the same defect the corpus is repeatedly
    repaired for.
14. **`:25` was 189/200, not 185.**
15. **`:27` was 260/300, not 258.**

⚠️ **Errors 14 and 15 both UNDERSTATE available room, so neither could have caused a bad edit — but
both were stated as measurements.** That is the pattern of errors 1, 8, 10, 11 and 13: **a number or
a scope asserted with the confidence of something measured, when it was not measured.**

**Fifteen brief errors in one day. One reached the corpus. Not one was caught by a checker.**

### ✅ COORDINATOR RULING — `offensive_zone_play.md:26`, raised by an agent and left for me

The `Risk:` facts line says *"Almost every amateur team can get the puck into the offensive zone; far
fewer turn possession there into a dangerous shot."* The prose immediately after says *"because almost
every amateur team can get the puck down there and far fewer turn that into a shot from anywhere
dangerous."* Key focus `:10` says it a third time.

**Ruling: no change. The three do different jobs**, which is the test the workstream runs on:
Key focus states it as the **premise**; the `Risk:` line states it as the **risk**, voiced alone; the
prose uses it **causally** — it is the *because* of *"what is left is the hard part"*, and cutting it
leaves that claim unexplained. ⚠️ **The agent was right to flag it and right not to sweep it.**
Recorded so it is not re-derived as a defect by the next reader.

### ⚠️ Brief error ELEVEN — the coordinator overstated a gap it had not read

The brief said `:750`'s rule number appeared only in a facts block 225 lines away. ⚠️ **`:721` —
twenty-nine lines ABOVE, in prose — already said *"in Rule 7.5, which tells referees to strictly
enforce checking from behind on…"*** Confirmed by the coordinator. Adding the number at `:750` was
still right — the sentence now naming all four needs its own citation — **but the justification was
inflated.** Same shape as errors 1, 8 and 10: **a claim about SCOPE asserted without measuring it.**

### ✅ C6 CLEARED — the six new safety passages in `passing_and_receiving.md`

`safety-reviewer`, 22 September: **no critical, no major.** It reached the performability verdict
independently — *"a rim travels ALONG the boards, so the puck's line of travel and the player's facing
direction are the same line; skates parallel to the wall is the shape the skill already has. Squaring
up to the boards is what a player does to STOP and dig, not to rim."* It also confirmed
`body_contact_and_battles.md:774` records that **USA Hockey's teaching points for the parallel case
carry no stick instruction at all**, so the corpus is not asking for two incompatible things from one
arm.

⚠️ **On the licence sentence: it is gone, and its replacement cannot be split from its context** —
*"There is no rendering in which a listener gets the first without the second"*, because
*"That names a hit you are exposed to, not one anybody is entitled to make"* sits in the **same
`<p>`**. The `Never:` inversion is **confirmed closed** by *"instead"*, and *"forearm and hip to it"*
is **verbatim identical** to `on_ice_communication.md:91`.

**Referent census independently confirmed:** `grep -rn "forearm and hip to the checker" content/` is
now **empty**; the wall referent is universal across all **54** hits. ⚠️ **The one body part the
corpus deliberately puts on the checker is the SHOULDER**, and it says so as an explicit contrast —
`body_contact_and_battles.md:770`: *"(Your shoulder does face the checker; it is the boards it should
not meet.)"* **That contrast is undisturbed.**

**Three Minors, two dispatched:** `:203` names only **Hockey Canada**, which governs **none** of this
document's declared readerships — a British or USA Hockey listener can conclude the head-down
protection is a Canadian peculiarity; and a paraphrase artefact makes *"situations"* rather than
*"the rules"* the object of *"strictly enforce"*. ⚠️ **The third the reviewer argued AGAINST fixing**
(no Case 3 fallback in the `Never:` block) — *"adding it here would blur the parallel/Case 3
distinction that `body_contact_and_battles.md:772` exists to keep sharp"* — **and that reasoning is
being tested rather than accepted.**

### 🔴 Two Majors found by the second-pass `content-reviewer`

1. **`offensive_zone_play.md:25` — two enumerations of "the routes" disagree INSIDE ONE SPOKEN UNIT.**
   The `Key:` facts line names **five** routes; the Overview prose at `:30` names **seven**. ⚠️ **The
   renderer puts both in `002.ssml`**, so a listener hears five, then the same list plus two more,
   about forty seconds apart, with nothing accounting for the difference. ⚠️ **The omission that
   matters is §10, the rebound race — the section this document itself calls *"the most dangerous
   moment in a possession"* and the one Key Takeaway 7 is built on.**
   **The line is 185/200, so two more nouns will not fit — substitution is required.** Either carry all
   seven or stop reading as a complete list. ⚠️ **Do not solve it by shortening the prose: seven is
   the correct number.**
2. **`switching_positions.md` — "hybrid" reached Key Takeaway 2 and nothing else.** `:9` (Key focus)
   and `:481` (Common Mistakes) still say *"Zone or man-on-man"*; `:549` says *"Zone, man-on-man or
   hybrid"*. ⚠️ **Each is voiced alone, so a listener gets two alternatives from one layer and three
   from another.** The claim is supported (`:86`, `:99`, and `winger.md:142` defines it) — **the
   propagation is half-done. This is the round-10 shape in miniature.**

**Also ruled on, no defect:** the royal-road split is **correct**, §2 belongs on the set-up side, 5+7=12.
⚠️ **But the gloss *"the scan that finds the pass"* is LOAD-BEARING** — reword it to "the royal road
pass" and the sentence becomes wrong at that entry, because a royal-road pass genuinely is a route.
**Do not tidy it.**

### ⚠️ `HIGH_SLOT` is defined THREE TIMES — measured clean today, structurally fragile

Checked 22 September against the built SVGs, after an agent flagged it as unverified:
**all five drawn high-slot polygons are one distinct region, 210.0 sq ft, 15 ft × 14 ft** — exactly
the owner's figure at `foundation/rink_map.md:320-326`. ⚠️ **The 660 sq ft regression CLAUDE.md
records is repaired and has NOT returned.**

⚠️⚠️ **CORRECTED 22 September — "byte-identical" WAS WRONG, and the coordinator re-measured.**
The three definitions are **not byte-identical and not even the same SHAPE**: `positions.mjs:68` is a
**bare array** of four points; the other two are **objects wrapping `points`** — and those two differ
from each other, one carrying `label: 'the high slot'` and the other **deliberately unlabelled with a
nine-line comment explaining why** (the centroid label would be drawn through a player standing in
the region). ⚠️ **Only the four COORDINATES are identical.**

⚠️ **The conclusion — do not unify them — stands; the reason given for it did not.** And the error
was load-bearing: *"a later agent told 'byte-identical' would diff them, find three different things
and report a divergence that is not one."* ⚠️ **`check_zones.py` compares diagrams only
to each other, so if one copy drifts the other two will not catch it** — and a region drawn
consistently wrong everywhere is invisible to it by construction.

⚠️ **Note the method, not the result:** the coordinator's arithmetic from the constants predicted
**450 sq ft** and was wrong. Only measuring the built SVGs settled it.

### ⚠️⚠️ `check_quote_drift.py` SILENTLY PREFERS A SUPERSEDED EDITION

`passing_and_receiving.md:429` was attributed to **`nhl_rules_2024-25.txt`**. The sentence IS in the
current 2025-26 extraction, but page furniture splices through the middle of it, so it is contiguous
only in the older file. ⚠️ **Wherever a current-edition sentence straddles a page break, the tool
prefers the superseded book — and nothing in the output says so.** The `:429` citation is correct.

### ⚠️ NEW ENVIRONMENT TRAP — `timeout` DOES NOT EXIST ON macOS

`timeout 120 python3 …` exits **127**, and wrapped in `$(…)` yields an **empty string that greps as
0**. An agent's first corpus census came back all-zeros and **looked like a clean result.**
**Confirmed: `which timeout` returns nothing on this machine.** Same species as the nvm-shim false
passes already catalogued in `CLAUDE.md`. ⚠️ **Put it in briefs.**

### ⚠️ A REPORTED OWNERSHIP VIOLATION IN `goaltender.md`, INVESTIGATED AND REFUTED

An agent reported urgently that a second agent was editing beneath it — six hunks it had not
written. **Checked against `git diff` and the plan: there was no concurrent agent.** The hunks are
the **earlier net-front wave from this same session**, closed hours before that agent started, and
the file was already `M` in the conversation's opening `git status`. **A misread of a stale
snapshot — the second today, after `winger.md`.**

**Wave verified intact**: 12 coaching-choice hedges, **zero** bare *"defenceman's job"* claims, file
byte-identical to as-found. ⚠️ **The agent was right to raise it and right to call its own
"no clobber" unproven.**

### ⚠️⚠️ BRIEF ERRORS TWENTY-SIX AND TWENTY-SEVEN — one of them poisoned TWO briefs

**26. A layer test asserted from a grep, and refuted.** The coordinator's brief for
`passing_and_receiving.md` said `:765` (Common Mistakes) and `:833` (Key Takeaways) *"frame the cost
as purely tactical"* and *"neither appears to say it puts their head down."* **Both already said it**,
in their own spoken chunks, and `:301` and `:203` carried it too — **propagation was four layers deep
before the agent arrived.** ⚠️ **Acting on the brief would have DUPLICATED two safety limbs.**
The agent found the one layer genuinely missing — `## Key focus`, whose defined job is the
instruction *plus its safety condition* — and appended to the **same paragraph** so the condition
lands in the same spoken `<p>` as the instruction rather than merely near it.

**27. ⚠️ THE COORDINATOR'S OWN WARNING WAS WRONG, AND IT WAS IN TWO BRIEFS.** Those briefs said the
`md_to_speech.py --only` id *"keeps its directory hyphens"*. **It does not.** Measured:

    --only technique-passing_and_receiving  ->  "no markdown found under .../content"   EXIT 0
    --only passing_and_receiving            ->  "1 documents, 59 chunks, ..."           EXIT 0

`--only` is a plain substring match on `doc_id`; the working id is the **bare document stem**, and
the rendered directory uses a **double underscore** (`technique__passing_and_receiving`), never a
hyphen. ⚠️ **So a brief carrying the hyphen spelling instructs an agent to run a verification that
silently verifies NOTHING and reports exit 0.** One agent caught it and said so; the live agent was
messaged mid-task with the correction. **A warning about a silent false pass that itself causes the
silent false pass is the sharpest version of this file's standing lesson.**


### ⚠️⚠️ NEW — THE CORPUS'S OWN DISCLOSURE CONVENTION MANUFACTURES `notfound` ENTRIES

**Found 22 September, by measurement, while answering a different question.**

`check_quote_drift.py` normalises to **alphanumerics only**. A **leading** disclosed insertion is
therefore harmless — `[a]ny` normalises to `any` and matches the source. ⚠️ **A MID-WORD insertion
is not:** `skating.md:954` writes *"…requir[ing] IIHF approval"* against a source reading
*"…require IIHF approval."* — `requiring` ≠ `require`, so a **verbatim-correct quotation is filed
under `notfound`.**

⚠️ **So `notfound` does NOT mean "no source on disk."** It is a mixture of (a) genuinely off-disk
quotations, (b) **correct quotations using the corpus's own convention inside a word**, and (c)
strings that are on disk but only as **image lettering** (`skating.md:956` quotes an IIHF
infographic on page 222 — `sources/README.md`'s image-vs-text distinction, **verifiable with
`pdftoppm`, not yet rendered**).

⚠️ **Anyone reading that column corpus-wide without this will chase verbatim-correct quotations as
missing sources.** ⚠️ **`CLAUDE.md`'s description of this tool says only that it "cannot see a
quotation whose source is not on disk" — TRUE but incomplete. Add the mid-word case there BETWEEN
WAVES**, not during one: `CLAUDE.md` is shared state that live agents read, and the round-59 lesson
about changing a tool mid-round applies to the instructions as much as to the code.

### ✅ MEASURED — nothing was hiding inside the `notfound` limitation, in this document

All 64 `skating.md` `notfound` fragments were normalised and tested against **all 38
`sources/*.txt`**: **0 full matches, 1 partial** (the `requir[ing]` case). **63 of 64 are the
recorded off-disk blind spot** — coaching web pages, Wikipedia, HECC, Hockey Alberta.

⚠️ **This answers the question ONLY for `skating.md`.** And it proves nothing about accuracy: **a
fabricated quotation from a coaching page scores identically to a perfect one. `notfound` is
silence, not a pass** — only a refetch (`source-verifier`) reaches those 63, and the document's own
trailer says several were last refetched on 2 September.

### ⚠️⚠️ BRIEF ERROR THIRTY — the coordinator pointed an agent at the BEST-SOURCED passage in a file

The brief called the Swiss zone-entry dataset *"exactly the shape non-negotiable 1 exists for"* and
said **"start there."** ⚠️ **All six fragments are verbatim in rendered body, HTTP 200, correct
author, correct scope — and the URL was in the document's Sources trailer the whole time.**

⚠️ **`notfound` measures the absence of a `sources/*.txt` FILE, not the absence of evidence.** The
coordinator read a tool's structural limitation as a fabrication risk. **This is the round-59
species — making the corpus look LESS supported than it is — which is the failure direction no
reviewer stops on.**

**The passage was better than the brief doubting it, in two ways nobody asked for:** it **does not**
credit the analyst with a finding his own page attributes to someone else (the restater trap), and
it **preserves the source's own grammatical slip** rather than silently tidying a quotation.

### ⚠️⚠️ `check_quote_drift.py`'s DOCSTRING IS WRONG, and two more structural blind spots

1. ⚠️ **The docstring claims alphanumeric normalisation *"defeats the page-furniture splice"*. IT
   DOES NOT** — these splices insert alphanumeric **words**: `iihf_situations.txt` splices
   `SECTION · OHTER INFRACTIONS` mid-sentence; `usah.txt` splices
   `72 USA Hockey Rulebook 2025-29.indd 72 2/14/25 9:28 AM Goals and Assists` mid-sentence.
   **Correct the docstring between waves.**
2. ⚠️ **Every CORPUS-INTERNAL quotation scores `notfound` by construction**, because the tool
   searches only `sources/*.txt`. **A cross-document quotation that has drifted from its owner
   document is invisible to it.** One surfaced here by accident. **Nobody has ever looked for this
   class.**
3. **The `notfound` bucket is mostly structure, not absence.** Of 24 in one document: 8 genuinely
   external (all verified), 4 on disk but unGREPPABLE, 3 multi-letter disclosed insertions, 1
   corpus-internal, 4 not quotations at all, 6 trailer duplicates. ⚠️ **But it hid a REAL defect
   inside itself — see below — so it cannot be dismissed either.**

### ⭐ THE BEST FIND OF THE DAY — right fact, right organisation, WRONG DOCUMENT

**`equipment.md`, two sites (body `:524`, trailer `:807`), found by a `source-verifier` that fetched
the PDF rather than trusting the pointer.**

Two Hockey Canada quotations — *"[t]he lifespan of a hockey helmet is not easy to determine"* and
*"[p]articipants should exercise good judgment as to the suitability of a hockey helmet for play"* —
were credited to Hockey Canada's ***Safety Requires Teamwork*** manual, *"the Equipment Tips section,
which is where they sit."*

**They are not in that document.** Fetched HTTP 200, 5,080,928 bytes, 95 pages, **135,350 bytes of
real text layer extracted** — `grep -ic 'lifespan'` → **0**, `grep -ic 'good judgment'` → **0**.
Both sentences are **consecutive sentences** in the *other* Hockey Canada PDF cited in the same
corpus sentence, the certification bulletin `2022-csa-certification-e.pdf`.

⚠️⚠️ **THE POINTER WAS HALF-RIGHT, WHICH IS WHY IT SURVIVED.** The safety manual **does** have an
EQUIPMENT TIPS / HELMETS section (pp. 77–78) and **does** carry the thumb-press liner check the
trailer also cites. **A reviewer who checked that the section existed would have cleared it.**

Repaired: body retargeted to the bulletin; trailer keeps the safety manual for the thumb-press check
and states explicitly that the two lifespan sentences are from the bulletin, **not** the manual.
**Authority unchanged — both are Hockey Canada primary text — so no claim weakened and no disclosure
stripped.**

⚠️ **The lesson generalises: a citation can name the right ORGANISATION and the right SUBJECT and
still name the wrong DOCUMENT, and nothing mechanical sees it.** ⚠️ **And the agent that found it
said this is where the next brief should point — because the one defect it found was an attribution
defect, inside a bucket nobody expected attribution defects in.**

### ⚠️⚠️ BRIEF ERROR THIRTY-ONE — `notfound` counts OCCURRENCES, and "not on disk" is not "unsourced"

Two corrections to the coordinator's framing of this bucket, both from the agent that worked it:

1. **82 `notfound` entries are 82 OCCURRENCES of 66 DISTINCT fragments** — five are the same Try
   Hockey For Free sentence, four the same HECC age clause. ⚠️ **The workload was ~40% smaller than
   every brief and plan row built on that figure claimed.**
2. ⚠️ **The coordinator called these *"a strictly worse position than a drifted quotation."* That
   overstates it.** `notfound` means *"not in `sources/*.txt`"* — the local rulebook extractions.
   **Nearly all 66 are attributed inline to a named external source WITH A RETRIEVAL DATE**, and the
   trailer is among the most disclosure-dense in the corpus. **The corpus had already done the
   disclosure work; only the refetch was missing.**

**And the predicted 403 wall did not materialise where predicted** — Bauer, Hockey Canada, CSA Group,
BNQ, HECC ×3, Discount Hockey and tryhockeyforfree.com all returned **200 on the first attempt**.

### ⚠️⚠️ CONFIRMED TWICE, INDEPENDENTLY — the `check_quote_drift.py` docstring is WRONG about splices

Two agents, in two different documents, reached the same conclusion without contact. **The docstring
claims alphanumeric normalisation *"defeats the page-furniture splice"*. It defeats splices of
WHITESPACE AND PUNCTUATION ONLY.** When the spliced furniture is itself a **word**, it survives
normalisation and the fragment scores `notfound` while being verbatim-correct:

- `usah.txt` splices the running header **`Equipment`** *inside* the sentence:
  *"…valid and current `Equipment` certification sticker."*
- the broken-stick misconduct carries **two**: *"keep the broken stick `Playing Rules` off the
  ice… assess a misconduct `CASEBOOK` penalty."*
- `iihf_situations.txt` splices `SECTION · OHTER INFRACTIONS` mid-sentence.

⚠️ **So `notfound` OVER-REPORTS against ON-DISK sources, not just against the web** — a distinct
false-`notfound` class from the multi-letter-bracket one, and **recorded nowhere.**

### ⚠️ THREE RULES FOR READING `link_baseline.tsv`, learned by getting each one wrong today

1. ⚠️ **A BYTE COUNT IS NOT A FINGERPRINT ON THESE HOSTS.** Measured: compressed **146,996** vs
   uncompressed **145,466** on one host (so compression does NOT explain a 4× delta); two fetches
   minutes apart differing by **1,530**; two `403` bodies on one URL differing by **64**; and two
   *different* PubMed URLs returning an **identical 5,567** because one shared wall page is served.
   ⚠️ **The coordinator's gzip hypothesis for the 4× deltas was TESTED AND REFUTED, and the cause is
   NOT determined and NOT invented in the notes.**
2. ⚠️ **UNREACHABLE IS NOT ABSENCE, and the rows now say so in those words.** Four URLs could not be
   read — two PubMed cookie walls (HTTP 203, *"Cookies must be enabled"* — **the wall was read, not
   the article**) and two `purehockey.com` 403s. **Every one of those rows states that the
   quotations remain UNVERIFIED, NOT DOUBTED, and that nothing about the fetch is a reason to
   weaken, qualify or add disclosure to the claim.** Non-negotiable 4.
   ⚠️ **AND THE TWO 403 ROWS ARE NOT EQUALLY ESTABLISHED** — one was retried with a `Referer`, the
   other was not, and its row says so. ⚠️ **`purehockey.com` is INCONSISTENT, NOT BLOCKING**: two of
   its paths served 200 in the same session, and one URL went **403 then 200 on retry**. **Do not
   record it as a dead host.**
3. ⚠️ **A NEGATIVE RESULT CAN BE THE FINDING, and must not be compressed into "failed fetch."** The
   `safety_teamwork_e.pdf` row is a **positive absence finding on a fully-read body** — 95 pages,
   135,350 bytes of text layer, the named section located, and the two sentences genuinely absent
   against 25 `helmet` hits confirming the extraction is sound. ⚠️ **If that row is ever shortened,
   the words *"READ IN FULL, not unreachable"* are the ones to keep.**

⚠️ **One row rests on a HUMAN READ because the agent's own matcher was wrong.** `sklep.pkn.pl`
returned a **false MISS** from its normalising matcher, attributed to Polish diacritics differing in
Unicode composition. **The quotation is verbatim; the tool was wrong.** Recorded because without the
note it would quietly become *"could not verify"* on the next pass — **the
make-the-corpus-look-less-supported failure mode, arriving through a tool rather than a person.**


### ⭐ THE UNDISCLOSED-INFLECTION DEFECT HAD A CAUSE, AND THE CAUSE IS THE NEXT DEFECT CLASS

**Repaired at four sites across two documents.** The corpus quoted USA Hockey 601(a)(4) as
*"**Shooting** the puck after the whistle"*; `usah.txt:3328-3329` reads *"**Shoots** the puck after
the whistle, if in the opinion of the Official such shot was avoidable."* Rule number, tier and all
remaining wording were right.

⚠️⚠️ **THE AGENT FOUND WHY.** Hockey Canada Rule 11.1 genuinely reads *"**Shooting** the puck out of
the playing area, after the whistle"* (`hc.txt:8468`) and *"**Shooting** the puck at or near the
goal after the whistle"* (`:8467`) — **both quoted CORRECTLY in these same two files, a few clauses
away from the USA Hockey quote in each case.** ⚠️ **The gerund bled across from the neighbouring
book.**

**So the general class is: FOUR BOOKS LEGISLATING THE SAME ACT IN NEAR-IDENTICAL LANGUAGE, CONTRASTED
SENTENCE BY SENTENCE — and wording migrating between them.** The repaired case was *"wrong words,
right book"*. ⚠️ **The same contamination in the other direction — RIGHT WORDS, WRONG BOOK NAMED —
scores CLEAN and would have passed everything anybody ran, in these same paragraphs.**

- [x] **Dispatched 22 September:** `rules-verifier` on the whole 601/610/11.1 cluster across both
      files, plus the two questions the repairing agent explicitly declined — **whether 601(a)(4) is
      the right rule to cite at all**, and whether the **610(c)/601(c)(10) overlap** is stated
      correctly.

⚠️ **The coordinator's proposed wording was REJECTED and correctly so.** The brief sketched
`Shoot[ing]`; the agent wrote `*"[s]hoots"*` instead — **shorter, the established house form, and
inside the tool's single-letter bracket exemption**, where a multi-letter bracket would have stayed
`notfound` for no gain. **The brief said the sketch was a sketch, and the agent treated it as one.**

⚠️ **AND THE COORDINATOR'S PREDICTION WAS WRONG IN THE GOOD DIRECTION.** The brief predicted the
repaired sites would remain `notfound`. **All four are now CLEAN.** The agent proved it rather than
eyeballing it — ⚠️ **`check_quote_drift.py` resolves `sources/` RELATIVE TO THE DOC PATH, so a
scratchpad copy reports everything `notfound`**; it rebuilt the baseline under a `content/x/` tree
with a `sources` symlink. Clean 221→223 and 277→279; `notfound` 15→13 and 24→22.

**What the listener gets, which is the point:** the renderer strips the brackets, so both body sites
now voice *"shoots the puck after the whistle…"* — verbatim apart from case, which is inaudible.
⚠️ **Before the repair a listener heard *"Shooting"*, a word not in the rulebook.**

**Left alone deliberately:** the only other corpus occurrence is in
`project/reviews/plan_archive_2026-09-11_pre_consolidation.md` — **an archive, which is evidence and
must keep the wording it was written with.**

### ✅ ANSWERED by the coordinator — the bracket form is not a visual novelty

An agent asked whether `[s]hoots` *"reads as a typo to an eye rather than an ear"* and flagged it for
`site-reviewer`. **Measured instead:** the disclosed-insertion form already appears **`[a]` 378×,
`[t]he` 173×, `[w]` 79×, `[s]hoots` 16×** across `content/`. **It is one of the most established
visual conventions in the corpus; this repair introduces nothing new to the page.** No dispatch
needed.

### ⚠️ A `Rule:` FACTS LINE SITS AT EXACTLY 300/300 — any ordinary edit there EVICTS something

**Coordinator-verified, not quoted from a report:** `content/foundation/on_ice_communication.md:411`
is a `Rule:` line measuring **exactly 300 characters of value after the label**. `:264` and
`risk_management.md:323`/`:324` sit at **299/300**.

⚠️ **This is the shape that evicted a mandatory give-ground duty from a `Rule:` fact once before —
the eviction looked like a clean edit and passed every checker.** ⚠️ **NO OTHER FIGURE IS WRITTEN
HERE: run `check_facts.py --near`, which prints them sorted, every time.**

### ✅ Swept and clean — no further undisclosed inflections in those two files

The repairing agent swept **every remaining `notfound` fragment in both files** for the same defect
and **found none**. Two that looked rulebook-shaped are **verbatim**, failing only on the splice
artefact: USA Hockey Rule 616 Note 1 (`usah_casebook.txt:9677`, spliced by `190 USA Hockey`) and NHL
Reference Table 14 Situation 5E (`nhl_rules_layout.txt:9286`, spliced by a two-column
`Goal is allowed.`). Both confirmed character-for-character.

⚠️ **But the method has a floor, and the agent named it:** it finds a changed verb **only when the
correct verb is greppable.** A quotation from the NHL/IIHF situation tables, a poorly-extracted
casebook region, or a web source **would hide the identical defect** — and `notfound` is
indistinguishable from *"no source on disk"*, **which is exactly how this one survived.**


### ⚠️⚠️ CORRECTION TO STANDING GUIDANCE — A FLATTENED COPY BREAKS *GENUINE* HYPHENS

**The coordinator has put "build a de-hyphenated, whitespace-flattened copy" into roughly six briefs
today. It manufactured a false negative.**

USA Hockey 639(a)'s Note contains the genuinely-hyphenated word **`hook-checking`**, line-broken as
`hook-` / `checking`. De-hyphenation produced `hookchecking`, the whitespace pass `hook checking`, and
**the document's CORRECT quotation returned ZERO** while being verbatim at `usah.txt:5061-5064`.

⚠️ **A flattened copy fixes line-break hyphens and BREAKS REAL ONES. SEARCH BOTH THE FLATTENED AND
THE RAW FILE BEFORE BELIEVING ANY ZERO.** Add to every brief that asks for flattening.

### ⚠️ BRIEF ERROR THIRTY-TWO — a stale line number, and A LINE NUMBER IS A FIGURE

A brief cited `rules_primer.md:436` as the live demonstration of the tool's attribution blindness.
**Line 436 is now a body-fouls passage** — the line had moved under this same session's edits. The
mechanism was real; **the locator was wrong**, and the agent had to say so.

⚠️ **This is CLAUDE.md's own standing lesson, hit again from a new direction: a figure copied out of
its owner goes stale silently — and in an actively edited tree it goes stale within HOURS.**

### ✅ THE COORDINATOR'S RISK HYPOTHESIS FOR ATTRIBUTION DRIFT WAS REFUTED — in `rules_primer.md`

The brief predicted drift concentrates where the document **contrasts books in close quarters.**
**47 claims verified across eight rulebooks: ZERO misattributions.** *"The multi-book contrast
passages are the most carefully sourced prose in the file."*

⚠️ **The document pre-empts the failure at `:330`** — *"where an item does not mention a book, take
it as **not found** rather than as **not there**"* — and **both candidate findings the agent built
were refuted by the document's own text** (`:303`/`:917`, and `:447`/`:468`/`:474`). **The sixth time
today the answer was already written down.**

⚠️ **The stated limit of the by-book exclusivity test, and it is the real gap:** it **cannot separate
two books that print a clause identically**, and the NHL and IIHF print many identically. Such a
clause **passes for either label.** It was caught only where **the document itself** distinguished
them — *i.e. where the document was already more careful than the tool.*

- [x] **Dispatched:** the comparison tables at `:1140-1180`, **`:1152` alone holding 129 quoted
      fragments, none verified.** ⚠️ **A table is where a label is easiest to slide**, and ~1,167 of
      ~1,214 fragments in this document remain unreached — goaltender interference, offside,
      faceoffs, equipment, officials' signals, all of §4, and the British/IHUK layer.

### ⚠️⚠️ AN ARTEFACT THAT MUST NOT BECOME A FINDING — the "690 unsourced quotations"

An agent's quote-extraction regex **mis-parses the `*"…"*` emphasis markup** and captures prose
*between* quoted spans, producing **690 "found in no source"** results in `rules_primer.md`.

⚠️ **THAT IS A TOOLING ARTEFACT, NOT 690 UNSOURCED QUOTATIONS.** The agent predicted a later reader
would quote it as a finding, which is this repository's single most repeated failure. **Written down
so it cannot.**


### ⚠️ BRIEF ERROR THIRTY-THREE — two Interpretations of two DIFFERENT rules, conflated

The brief said the owner document quotes HC **Interpretations 2 and 3 to Rule 7.5**. It quotes
**Interpretation 2 to 7.5(a)** and, separately, **Interpretation 3 to Rule 7.7(a)** — the *ducking*
carve-out, **a different rule**, both correctly attributed. ⚠️ **The conflation is what HID the
finding above:** believing Interpretation 3 to 7.5(a) was already read is why nobody looked.

### ✅ THE ATTRIBUTION-DRIFT QUESTION IS ANSWERED FOR THE TWO DOCUMENTS THAT CARRY THE MOST RULEBOOK

Both audits came back **clean**, by different methods:

- `rules_primer.md` — **47 claims, eight rulebooks, zero misattributions**; the by-book exclusivity
  test.
- `body_contact_and_battles.md` — **1,193 fragments indexed against all 38 sources, 116 candidates
  read by hand, zero misattributions.** Every candidate resolved to a USA Hockey *publication* other
  than the playing rules, or a British document correctly named alongside the IIHF.

⚠️ **AND THE TOOL MATCHED THE WRONG BOOK TWICE IN THE DOCUMENT'S FAVOUR** (`:1227`, `:1545`),
reporting IIHF headings against `hc.txt` and against `iihf_rules.txt`'s table of contents. **The
blindness fires in both directions; never trust its book attribution.**

⚠️ **The remaining gap is stated precisely and is NOT closed:** the exclusivity test **cannot
separate two books that print a clause identically**, and the NHL and IIHF print many identically.
**Such a clause passes for either label**, and it was caught only where the document itself
distinguished them.


### 🔴🔴 A LIVE MAJOR RUNNING IN THE WEAKENING DIRECTION — found in a SIBLING, by an agent sent elsewhere

`content/systems/defending_the_rush.md:365`, a ` ```facts ` line **voiced alone**, says the
checking-from-behind major is *"at the referee's discretion under IIHF 43.3"*.

⚠️⚠️ **That inverts the rule.** `iihf_rules_v1.1.txt:3995-4000`: 43.2 — *"there is **no option to
award a minor penalty**"*; 43.3 — *"The Referee, at their discretion, **shall** assess…"*. **There is
no lower rung and no discretion to take one.** A British reader hears that a lenient official may go
lower. **Dispatched to `safety-reviewer`.** Coordinator-measured: `:365` is at **239/300 — 61
characters of headroom**, so it is repairable in place; ⚠️ **but `:368` and `:611` in the same file
are `Rule:` lines at EXACTLY 300/300.**

⚠️ **THE CENSUS IS NOW SETTLED BY THREE INDEPENDENT AGENTS, and corrected once:**

| Verb | IIHF clauses |
|---|---|
| `may assess` | 41.3, 41.4, 42.3, 42.4, 44.3, 48.3, 59.3 — **21 corpus-wide** |
| **`shall`** | **43.3 checking from behind · 52.2 slew-footing · 58.3 butt-ending · 62.3 spearing** |

⚠️ **`shall` is confined to the four fouls that break people.** **52.2 inverts the word order**
(*"The Referee shall, at their discretion, assess"*), which is why one census first counted three.
**So *"at their discretion"* is boilerplate; the discriminator is `shall` against the book's own
`may`, plus 43.2's "no option".**

⚠️⚠️ **THE DEFECT WAS FOUND IN A FILE THE AGENT DID NOT OWN, BY A TARGETED GREP RUN ON THE WAY PAST.**
Its own words: *"my finding is evidence that this document is healthier than its neighbours on this
rule, not that its neighbours are healthy."* **Nothing systematic was looking at `systems/` for this.**

### ⚠️⚠️ BRIEF ERROR THIRTY-FIVE — A GREP RETURNING ZERO, RELAYED AS AN ABSENCE, AND THE BRIEF WARNED AGAINST IT TWO PARAGRAPHS LATER

A `rules-verifier` reported that Hockey Canada's **Interpretation 3 to Rule 7.5(a)** was **unread by
the corpus**, evidenced by two greps returning zero. **The coordinator relayed it as a finding.**

⚠️ **IT IS IN THE DOCUMENT, IN THREE LAYERS** — `body_contact_and_battles.md:1037` (body), `:1641`
(Common Mistakes) and `:1746` (Sources trailer) — **with the permission, both its limiting limbs, AND
the "(except under Rule 7.3)" non-checking-division limb** the brief flagged as the part that
mattered.

⚠️ **Coordinator-verified: `grep -c "marginal in nature"` returns 3, NOT 0. The other grep failed only
because the corpus writes `[p]inning a player to the boards` — its own disclosed-insertion bracket
form.**

⚠️⚠️ **THE SAME BRIEF WARNED *"an empty grep is not an absence"* TWO PARAGRAPHS BELOW THE FINDING IT
BUILT ON AN EMPTY GREP.** ⚠️ **This is the SECOND false absence today caused by a structural pattern
defeating a search** — the first was `carha.txt` indenting one page at three spaces where its
neighbours use five. **A negative from an exact-string or structural pattern is worth much less than
a read, and BOTH failures pointed the same way: making the corpus look less supported than it is.**

### 🔴🔴 THE `rules-verifier` SOURCE INVENTORY IS SHORT BY FOUR — and the sentence that says it is complete is itself stale

**Flagged by an agent, then measured by the coordinator, and the measurement is worse than the
report.** `.claude/agents/rules-verifier.md:71` reads:

> *"`ls sources/*.txt | wc -l` returns **36** and this table has **32 rows**…"* … *"32 rows + 4
> inline twins = 36. The inventory is COMPLETE."*

**Coordinator-measured, 22 September:**

| Figure | The file says | Actually |
|---|---|---|
| `ls sources/*.txt \| wc -l` | 36 | **38** |
| table rows | 32 | **33** |

⚠️⚠️ **AND FOUR FILES ON DISK ARE NAMED NOWHERE IN THAT FILE:**
`ihuk_junior_roc_layout.txt`, `ihuk_nihl_roc_layout.txt`, `ihuk_u10_roc_layout.txt`,
`ihuk_wnihl_roc_layout.txt` — **the four British `_layout` twins.**

⚠️ **THE SENTENCE EXISTS TO STOP VERIFIERS REPORTING A PHANTOM SHORTFALL, AND IT NOW CAUSES THE
OPPOSITE ERROR: it asserts completeness while the inventory is genuinely four short.** CLAUDE.md
already records this file going short twice; **this is the third time, and this time the
reassurance sentence is the thing that is wrong.**

⚠️⚠️ **A CONSEQUENCE NOBODY HAS NOTICED, AND IT IS THE REASON THIS IS A 🔴🔴.** An agent reported
today that it searched the IHUK Rules of Competition and found **no British amendment** to the
after-the-whistle / puck-out-of-play cluster — *"`ihuk_nihl_roc`, `ihuk_wnihl_roc` and `ihuk_u10_roc`
return nothing at all."*

**Everywhere else in this corpus, a `_layout` twin carries text its flat sibling LOSES** —
`hc_layout.txt` is the file that holds Rule 7.5's Interpretations, and a flat-file grep for them
returns nothing. ⚠️ **So a British negative tested only against the flat files is UNDER-TESTED, and
a negative existence claim is exactly the shape this corpus requires to be attacked.**

⚠️⚠️ **RETRACTED 22 September — THE COORDINATOR'S MEASUREMENT WAS AN ARTEFACT AND THE INFERENCE WAS
WRONG.** The coordinator measured the `_layout` twins as **+32% / +27% / +16% / +4%** larger and
recorded that as evidence that *"up to a third of the British text is missing from the flat files."*

**An agent refuted it and the coordinator re-measured and confirms the refutation:**

| file | raw flat | raw `_layout` | **whitespace-stripped flat** | **stripped `_layout`** |
|---|---:|---:|---:|---:|
| `ihuk_junior_roc` | 55,133 | 72,770 | **45,044** | **45,047** |
| `ihuk_nihl_roc` | 34,807 | 40,208 | **29,145** | **29,150** |
| `ihuk_wnihl_roc` | 35,019 | 44,392 | **28,859** | **28,864** |
| `ihuk_u10_roc` | 18,659 | 19,415 | **15,284** | **15,285** |

⚠️ **Stripped of whitespace they agree to within 1–5 bytes. The entire difference is `-layout`
COLUMN PADDING. No British text is missing from the flat files.** A character-multiset diff found
only a handful of glyph variants and a difference in reading **order**; `ihuk_nihl_roc` is a pure
reordering.

⚠️ **THE DOWNSTREAM INFERENCE IS ALSO RETRACTED.** The coordinator wrote that an earlier agent's
British negative was *"now suspect"*. **It is not.** That search was re-run **in the `_layout` twins
directly** and **the negative HOLDS. Do not re-dispatch on that basis.**

⚠️⚠️ **AND THE REAL HAZARD IS THE ONE THE COORDINATOR DID NOT NAME — it is a WRONG-ANSWER risk, not
an absence risk.** The flat extraction reads the checking table **COLUMN BY COLUMN**, so a proximity
grep would happily pair **U12 with "checking"**. ⚠️ **`_layout` is still mandatory for that table —
for the opposite reason to the one given.**

⚠️⚠️ **AND `sources/README.md` HAD ALREADY WRITTEN ALL OF THIS DOWN**, at lines 1381–1490: a full
entry for all four RoC, the checking table, **the `_layout` scramble warning**, the precedence
adjudication, the refetch/rollback measurement and a scope limit. **The routing failure was in
`.claude/agents/rules-verifier.md`'s table, NOT in the README.** ⚠️ **Third recurrence of
README-outranks-the-table — and this time the COORDINATOR was the one who did not read the README
before concluding something about a source. That is the exact failure CLAUDE.md warns agents about.**

**WHAT SURVIVES — and it is NARROWER AGAIN than the coordinator's second version of it.** ⚠️ **The
agent file CONTRADICTS ITSELF and contains BOTH numbers:**

- `:71` and `:74` — *"`ls sources/*.txt | wc -l` returns **36** … **32 rows + 4 inline twins = 36.
  The inventory is COMPLETE.**"*
- `:128`-`:131` — *"`ls sources/*.txt` returned **38** … **32 + 4 + 2 = 38.** The PWHL row is now
  added. ⚠️ `sources/README.md` was right and this table was [wrong]."*

⚠️ **The later passage is the correct one. The coordinator's brief quoted the STALE HALF** and
reported the file as simply wrong, when it is **internally inconsistent** — the earlier reassurance
sentence was never updated when the later correction was made.

⚠️ **And the `_layout` claim needs softening too:** the exact filenames `ihuk_*_roc_layout.txt` are
not greppable in that file, **but the file DOES tell an agent the four inline twins exist** at `:74`.
**So an agent is not blind to them — it just cannot find them by filename.**

⚠️⚠️ **`:131` records the README-outranks-the-table lesson IN THE FILE ITSELF, and the coordinator
still failed it today.** The fix is unchanged and now clearly right: **replace both figures with the
command**, since a file carrying two different totals is the strongest possible argument against
writing any number there.

- [x] **DONE 22 September, in the first gap when no agent was live.** Both figures in
      `.claude/agents/rules-verifier.md` replaced with the command. ⚠️ **The file asserted `ls`
      returns 36 AND, three paragraphs below, correctly recorded `32 + 4 + 2 = 38` — it contained
      both answers and contradicted itself**, and the coordinator quoted the stale half. **No figure
      is written there now.**


### ✅ THE IIHF `shall`/`may` SWEEP IS CLOSED — coordinator census, and the corpus is clean

**The handed-back "one-grep dispatch": are the OTHER three IIHF `shall` clauses — 52.2 slew-footing,
58.3 butt-ending, 62.3 spearing — reported anywhere as discretionary?** Run corpus-wide.

**52.2 — FOUR sites, all already correct, and all four carry the same guard:**

| site | framing |
|---|---|
| `body_contact_and_battles.md:1477` | *"…shall, at their discretion, assess…"; Rule 52 writes no lesser [tier]* |
| `body_contact_and_battles.md:1491` | bolds **shall** |
| `risk_management.md:694` | *framed "The Referee shall, at their discretion, assess" — and Rule 52 writes no lesser tier beneath it* |
| `defending_the_rush.md:619` | *framed "shall, at their discretion, assess", with no lesser tier beneath it* |

⚠️ **58.3 and 62.3 are correct too** — `rules_primer.md:438` and `:439` state *"62.2 and 62.3 match
the NHL"* and name the ceiling as *"the major plus automatic game misconduct"* in both cases, **with
no discretion language anywhere.**

**So the inversion was confined to `defending_the_rush.md` and is repaired in both its layers.**

⚠️⚠️ **AND THE FIX CAME FROM THE FILE ITSELF — THE SEVENTH TIME TODAY.** The repairing agent did not
invent wording: it used **this document's own `:619`**, which already handled the identical trap for
slew-footing, and matched it. **The corpus had solved the problem 250 lines away from the defect.**

⚠️ **`defending_the_rush.md:488` states IIHF CLIPPING as "at the referee's discretion" and that is
CORRECT** — 44.3 really is `may assess`. **Left untouched: it is now the contrast that proves the
rule.** ⚠️ **A sweep would have "fixed" it.**

### ⚠️ A SECOND SHAPE OF SILENT FALSE PASS — the renderer writes FILES and prints a one-line summary

Found by an agent verifying its own repair: `md_to_speech.py` **writes SSML to a directory and prints
only a one-line summary**, so **grepping its stdout for your repaired sentence returns NOTHING and
exits 0.**

⚠️ **That is indistinguishable from "the line is not in the output".** The agent had to render to a
directory (`--out <scratchpad>`) and grep the **SSML files** to confirm the line was voiced in its own
`<p>`. **This is a different trap from the wrong-`--only`-id one already recorded, and it fires even
when the id is right.** Put both in briefs.


### 🔴🔴🔴 TWO "As IIHF" CELLS WERE WRONG, AND ONE PENALISES THE READER FOR FOLLOWING THE CORPUS

**Found by reading the IHUK In-House Rules END TO END — all 736 lines, a READ and not a grep — then
reading the four Rules of Competition directly.** The two that failed were **the two shortest,
entirely unqualified cells in the column**, which is exactly where the brief predicted trouble.

**1. `rules_primer.md:934` — tag-up on a delayed offside, *"As IIHF — at every age and level."***

`ihuk_junior_roc_layout.txt:1557-1570`, U12 *Offsides & Frozen Pucks*:
> *"Play does not stop."* · *"the attacking team must clear the zone before re-entering."* ·
> ⚠️ *"**Failure to retreat quickly = delay of game penalty.**"*

⚠️⚠️ **A British U12 player taught the corpus's tag-up procedure retreats to the blue line and waits
for a whistle THAT NEVER COMES — while the book penalises exactly that failure to retreat.**
**The reader is told the wrong thing AND penalised for it.** At U10 the game is cross-ice, so it does
not arise.

⚠️ **`check_absolutes.py` PASSED on *"at every age and level"*, and was right to** — that absolute is
about a rule's **reach**, not a denial or a penalty cap. **A GATE GAP, not an agent failure.**

**2. `rules_primer.md:936` — period length, *"As IIHF"* (3 × 20).** Contradicted for **every category
except adult NIHL and senior WNIHL**: U12 **3 × 18 running clock**, U14 **3 × 15**, U16/U19 **3 × 15
or 3 × 20**, WNIHL U16 **3 × 15**, U10 cross-ice jamboree.

Both repaired, **each hyphenation reproduced as printed** (`18-minute` hyphenated in the Junior RoC,
`20 minute` unhyphenated in NIHL/WNIHL), and the WNIHL permission qualification carried.
⚠️ **The agent applied Job 1's own lesson to itself** — *"would otherwise have reached the table and
stopped"* — and added a sibling §2 prose bullet. **Dispatched to `safety-reviewer`: a repair is new
text.**

**Eleven other rows CONFIRMED** against the full read, including row 926's strongest negative — that
Section 6 (Physical Fouls) *"contains only the fighting provision, and no rule numbered 43 appears
anywhere"* — **verified by reading Section 6 in full: it is seven lines and entirely about
fighting.** Row 924's four Rules-of-Competition citations were confirmed directly, which nobody had
done.

### 🔴🔴 THE CORPUS HAS NO VISIBILITY INTO AN ENTIRE CLASS OF BRITISH AMENDMENT

⚠️ **The agent's own assessment of its most valuable finding, and I agree.**
`eiha_inhouse_2026-27.txt:60-61`: IHUK *"may also issue **Rule Bulletins** from time to time,
covering in-house rules or interpretations of IIHF provisions."*

⚠️⚠️ **NO BULLETIN IS ON DISK, AND `sources/README.md` RECORDS THIS NOWHERE.** So **every** British
claim in this corpus is true of the published books and **unknown against any bulletin issued since
25 July 2026.**

**This compounds the edition-drift row above:** the corpus already cannot tell which IIHF edition
Britain is on, and now cannot see a whole channel of amendment either. Dispatched to `uk_rules.md`
as a **scope disclosure** — ⚠️ **not a hedge on what HAS been verified; the books say what they say.**

- [x] ⚠️⚠️ **ALREADY THERE — THE NINTH TIME TODAY, AND CAUGHT BY CHECKING BEFORE WRITING.**
      `sources/README.md:193` already reads: *"**Still not obtained:** the EIHL Casebook, and any EIH
      or SIHA **Rule Bulletin** — the In-House Rules say bulletins are issued from time to time, and
      none has been read."* **The agent that raised it said the README "records none" — true of
      bulletin FILES, false of the GAP.** ⚠️ **A duplicate entry was one edit away.** The finding
      stands; the disclosure needed nothing.
      ⚠️ **The quoted sentence has since changed and the quotation is left as it was written** —
      the Casebook half of it was obtained and installed on 22 September 2026, so `sources/README.md`
      now lists only the **EIH/SIHA Rule Bulletins** as not obtained. **The bulletin gap is still
      open; the Casebook gap is closed.**

### ⚠️ OPERATIONAL — `Edit` IS DISABLED THIS SESSION, IN SUBAGENTS TOO

**A brief told an agent *"you have an Edit tool and are expected to use it."* It does not.** The
agent made its edits with exact-match Python string replacement via Bash, asserting `count(old)==1`
on every one — **the correct workaround, and the one to put in briefs.**

### 🔴🔴 AN INVENTED MECHANISM IN A CHILDREN'S-HOCKEY PASSAGE — found by attacking a brief that was wrong

⚠️ **BRIEF ERROR THIRTY-SEVEN:** the coordinator claimed the U12 penalty-duration fact was *"a
penalty-cost fact the corpus does not carry ANYWHERE."* **`uk_rules.md` carried it in FIVE layers** —
Overview `:27`, a whole section `:289-301`, Common Mistakes `:402`, a self-test `:510-512`, Key
Takeaways `:527` — **sourced, edition-dated, with a refetch SHA-256 record.**

**But attacking the wrong brief found a real defect, and it is a non-negotiable 1 violation.**

`uk_rules.md:297` said a U12 penalty means *"so you miss your ice time rather than your team's."*
⚠️⚠️ **THAT MECHANISM IS INVENTED.** Appendix D says *"Penalties are served only on the player's
line shifts"* and *"[p]lay does not stop; second official escorts penalised player to the box"* — **it
never says the team is not short-handed, and the escort line cuts against it.** A flattened search of
**both** extractions for `shorthanded`, `powerplay`, `penaltykill`, `manadvantage`, `4v5` returns
**ZERO**.

**It was in two layers and BOTH reached the speech layer, voiced alone.** Replaced with the
appendix's own words plus two explicitly flagged unknowns — ⚠️ **non-negotiable 3 honoured: the
claim was not deleted, the ASSERTION was.**

⚠️ **The source is genuinely ambiguous and the document had asserted past it:** *"they miss their own
shifts until the penalty time has expired"* admits **one** missed shift (three minutes on the game
clock, three-line rotation) or **three** (accruing only while your line is out, ~9 minutes of game
clock). **Nothing in Appendix D chooses, and only IHUK or a match official can.**

### ⚠️ A DISCLOSURE THAT REACHED NO LISTENER — measured through the SSML, not assumed

The *"no Rule Bulletin has been obtained"* caveat existed — **only in the `## Notes on verification`
trailer.** The agent rendered `uk_rules.md` and **grepped the SSML**: *"bulletin"* appeared in
**exactly one chunk**, and it was the **neutral** *"IHUK may also issue Rule Bulletins"*. ⚠️ **The
caveat reached a listener NOWHERE.** Now carried in the body.

⚠️ **This is `check_pointers.py`'s class arriving from the other direction** — not a spoken sentence
pointing at an unheard layer, but **a caveat stranded in one.** The only way to see it was to render
and grep the SSML.

### 🔴 FIXED — the Key focus told a British U12 player a minor costs two minutes

`rules_primer.md:26`, **the one sentence this document gives a reader about what a penalty costs, in
its highest-visibility layer**: *"A minor is two minutes a skater short (NHL Rule 16.1)."*

⚠️ **The document's own header blockquote — *"Playing in Britain? The IIHF flags are yours"* — routes
a British reader straight onto that unscoped NHL figure.** In IHUK U12 competition a minor is
*"3 minutes"* (three-line) or *"4 minutes"* (four-line), served *"only on the player's line shifts"*
(`ihuk_junior_roc_layout.txt:1591-1610`) — **so it costs the player their own shifts rather than a
kill the bench absorbs.**

⚠️⚠️ **ROUND-10 SHAPE, WITH A TWIST: the correction had reached a SIBLING DOCUMENT and never reached
THIS document's summary layer.** `uk_rules.md:297` carries it correctly, with an honest disclosure
about the ambiguity. **A propagation that crosses documents is exactly as breakable as one that
crosses layers, and nothing checks it.**

**Fixed in place.** ⚠️ **The scope lands INSIDE the same voiced `<p>` as the claim it qualifies, so
it cannot be heard alone** — verified by re-rendering; chunk count unchanged at 259. The agent
deliberately did **not** import `uk_rules.md`'s clock-ambiguity disclosure: **Key focus is a summary
layer and the link carries the reader to it.**

⚠️ **How it was found is the lesson:** by reading **Appendix D §4 *Penalties*** — *"a section the
brief never mentioned and no heading in `rules_primer.md` advertises."*

### ⚠️⚠️ RETRACTED AND INVERTED — `passing_and_receiving.md:445` WAS CORRECT, AND TODAY'S "FIX" INTRODUCED THE DEFECT

**The coordinator reported this line as a Major: a false *"all four books"* claim. IT WAS CORRECT AS
WRITTEN.** The NHL and IIHF **do** name the act, in the operative sentence of Rule 49.2:

**NHL 49.2** (`nhl_rules.txt:5965-5968`), **IIHF 49.2** both editions (`iihf_rules_v1.1.txt:4359`,
`iihf_rules_2026-27.txt:4456`):
> *"A goal cannot be scored by an attacking player who kicks any equipment (stick, glove, helmet,
> etc.) at the puck, **including kicking the blade of his own stick**, causing the puck to cross the
> goal line."*

⚠️⚠️ **A SWEEP IS ONLY AS GOOD AS ITS SEARCH TERM, AND A ZERO FROM A LABEL IS NOT AN ABSENCE OF THE
RULE.** The coordinator swept the flattened term `kickshot` and got 0 for NHL/IIHF/HC. **That number
is real and reproduces. It is also meaningless** — those books describe the act **without ever using
the label.** Re-measured:

| book | `kickshot` | `bladeof(his\|their)ownstick` |
|---|---|---|
| `nhl_rules` | **0** | **2** |
| `iihf_rules_v1.1` | **0** | **2** |
| `hc` | 0 | 0 |
| `carha` | **5** | 0 |

⚠️ **The agent that caught it swept THREE independent phrasings across all 38 sources** —
`bladeof{his,their}ownstick`, `kickshot`, `anyequipment`. **A `kickshot`-only sweep finds neither the
refutation NOR CARHA.**

⚠️ **The coordinator ALSO conflated two rules in one section:** 49.2's permission for a *kicked puck
deflecting off your own stick* and its bar on *kicking the stick itself* both sit in 49.2 and **are
not in tension.** `passing_and_receiving.md` distinguishes them correctly in two separate facts lines.

### 🔴🔴 A DEFECT INTRODUCED TODAY, BY THIS SESSION, ON THE REFUTED PREMISE — dispatched

The sibling line written into `on_ice_communication.md` today says **"the NHL and IIHF do not name
it."** ⚠️⚠️ **A reader acting on that would believe an NHL or IIHF kick-shot goal COUNTS. It does
not.** Dispatched for repair; the line's other limbs are sound and must survive.

⚠️⚠️⚠️ **THIS IS THE WORST SHAPE IN THE SESSION: a corpus-wide sweep, run to CHECK a claim,
generated a FALSE NEGATIVE that was then written into the corpus as fact.** The original line was
right, the "fix" was wrong, and **every mechanical gate passed the wrong version.**

### ✅ WHAT THE ROUND DID GET RIGHT — CARHA was a genuine omission

`carha.txt:3224-3226` **Rule 68** — *"A Minor penalty shall be assessed to any player, except a
goalkeeper, who uses a kick shot during the game"* — with its glossary definition at `:360-362`, and
**Rule 69** at `:3235-3237` disallowing the plain kicked-puck goal. **CARHA is the only book on disk
that makes the act a PENALTY, and `passing_and_receiving.md` had it nowhere.** Added in **four
layers** — facts (269/300, block 10→11 of `HARD_MAX` 14, **nothing evicted**), prose with the
glossary definition, Common Mistakes, and the Sources trailer. **Scope caveat carried in every layer.**

⚠️ **The agent also repaired two consequences its OWN edit created** — a chunk opening with a
dangling *"That applies…"*, and a sentence naming two books where three now applied.

### ⚠️ A PROPAGATION FAILURE INSIDE ONE FILE — body contradicting its own Sources trailer

`risk_management.md`'s parenthetical said Hockey Canada 10.1(b), (c) and (e) rule things out *"in the
same breath"*. **(b) is not flat** — *"except as detailed in Rule 10.8 – Refusing to Start Play."*

⚠️ **The document's own Sources trailer ALREADY said *"a Major (except under 10.8)"*.** **So this was
not new content — it was a propagation failure between two layers of one file, in opposite
directions to the usual: the TRAILER was right and the BODY was wrong.**

### ⭐ THE BEST REFUSAL OF THE SESSION — an agent declined to write a conservative default

**`uk_rules.md`, the U12 penalty clock.** The document's house method elsewhere is *"plan around the
stricter reading"*, so the obvious addition was: **stay in the box until an official releases you.**

⚠️ **The agent refused, and its reasoning is the standard:**

> *"Appendix D says a second official **escorts** the player to the box; it says nothing about a
> release, and nothing anywhere establishes that leaving early is itself a penalty. Writing either
> would have been **a second invented mechanism in the same sentence that was just repaired for the
> first one**."*

**It flagged the uncertainty in every layer with a named person to ask instead — *"and that is the
furthest the source supports."*** ⚠️ **A house method is not a licence to invent. When the
conservative reading is also unsourced, the caveat is the answer, not the default.**

### 🔴🔴 CRITICAL, FIXED — "an offside that does not stop play", stated naked to a ten-year-old

`uk_rules.md:527` (Key Takeaway 5) and `:27` (Overview), **each voiced as its own `<p>` with a 300 ms
break either side.**

⚠️⚠️ **Heard alone, *"an offside that does not stop play"* tells a child that at U12 offside is FREE
— the exact inversion of the duty.** The duty is to leave the zone the moment the official shouts
*"Reds OUT!"*, and a child who stays **gives their team a minor**
(`ihuk_junior_roc_layout.txt:1555-1563`).

**Layers before:** body ✓ `:294` · Overview ✗ · Common Mistakes ✓ `:401` · Key Takeaways ✗ —
**`:527` AND `:539`, both listing the format and both omitting the duty.**

**Fixed in all four layers**, verified reaching spoken chunks **003, 025, 038, 045**.

⚠️ **This is the one U12 rule a ten-year-old can break WITHOUT KNOWING THE RULE EXISTS.**

### 🔴 MAJOR, FIXED — an uncertainty that reached the summaries WITHOUT the action that makes it usable

The body ended *"Ask the officials before the game, because nothing published settles either
question"* — **actionable.** Common Mistakes stated both unknowns **and stopped**; Key Takeaway 5
stated the durations **flatly, as though settled.**

⚠️ **A listener who hears only the takeaway supplies the adult model from every other hockey document
they have heard — game clock, team short-handed — and a child counting three minutes off the
scoreboard on the "own-shifts" reading goes back out SEVERAL SHIFTS EARLY.**

⭐ **And the sharpest edit of the three: *"Ask the officials"* → *"Ask your coach or the officials"*,
because a ten-year-old will not approach a referee.** The coach files the line sheets and is the
realistic asker. **Nobody briefed that; the agent reasoned it from who the reader is.**

**The arithmetic was verified rather than assumed:** *Line Management* `_layout:1507` (*"Lines change
on the buzzer every 60 seconds"*) plus three lines × three periods of 18 minutes ⇒ **one own-line
shift per three minutes** — one missed shift on the game-clock reading, three on the other.
**Derivation from quoted rules, not an invented mechanism.**

### ✅ SIBLING CENSUS — coordinator-run, clean

*"If `rules_primer.md` or `body_contact_and_battles.md` carries a U12 offside or U12 penalty
sentence, it needs the same four-layer treatment and I have not checked."*

**Run across `content/`. The U12 offside duty exists in `uk_rules.md` (now four-layered) and in
`rules_primer.md:287` and `:937`, both repaired earlier today. `body_contact_and_battles.md` carries
NO U12 offside or penalty sentence** — its only U12-adjacent line is a USA Hockey 604(a) local-
governing-body note at `:1617`.

⚠️ **ONE TENSION WORTH RECORDING, NOT A DEFECT.** `rules_primer.md` settled for **generic** summary
coverage (*"tagging up… all vary"* at `:1013`, `:1147`), judged parity with its already-reviewed USA
Hockey treatment. **`uk_rules.md` went EXPLICIT in all four layers.** Both are defensible — **the
British document is where a British reader lands** — but the two documents now treat the same duty at
different resolutions. **A deliberate difference, recorded so nobody "harmonises" it blind.**

### ⚠️ A BRIEF FIGURE THAT DOES NOT REPRODUCE

The coordinator relayed *"a flattened search for `shorthanded`/`powerplay`/`penaltykill`/
`manadvantage`/`4v5` returns ZERO."* ⚠️ **`manadvantage` returns 1, not 0** — a flattening artefact
(`tea|m an advantage` wrapping to `teamanadvantage`). **The substantive conclusion stands: Appendix D
nowhere says the team plays short.** ⚠️ **But a reader repeating the brief would be repeating a figure
that does not reproduce** — which is this file's standing lesson about numbers, arriving through a
relayed search result rather than a copied count.

### ⚠️⚠️ THE ANSWER WAS IN `sources/README.md` — THE EIGHTH TIME TODAY, IN THE FILE THE COORDINATOR ALREADY FAILED TO READ ONCE

**The U12 period length is set BY LINE COUNT**, and the Junior RoC's format table gives only half of
it. `ihuk_junior_roc_layout.txt:1536-1538`, Appendix D §2 *Game Format*:

> *"3-line format – three periods of 18 minutes (running clock)."*
> *"4-line format – three periods of 20 minutes (running clock)."*

⚠️⚠️ **`sources/README.md:1414` HAD ALREADY WRITTEN THIS DOWN** — *"The format table prints only
`3 x 18-minute periods`; Appendix D adds 20 for the four-line format."*

⚠️ **The coordinator's brief carried the format-table figure in anyway, AND SO DID TODAY'S EARLIER
REPAIR to the `:937` table row.** Both were corrected by an agent that found it **only because the
brief told it to read that README entry.**

⚠️⚠️ **This is the SECOND time today the coordinator has been caught not reading `sources/README.md`
before asserting something about a source** — the first produced a finding that had to be retracted.
**And the corpus already knew twice over:** `rules_primer.md:26` prices a U12 minor by the same
three-line/four-line split, and **`uk_rules.md:295` already had the period length right** —
*"Three periods of 18 minutes on three lines, or 20 on four"* — **so the table row was diverging
from its own sibling.**

**THE GENERALISABLE SHAPE, and it is worth more than the fix:** ⚠️ **a FORMAT TABLE abbreviates what
an APPENDIX sets out in full.** Expect it wherever the corpus quotes a British summary table.

### ⚠️⚠️ BRIEF ERROR FORTY-ONE — A "CITATION COLLISION" THAT WAS A CROSS-REFERENCE, AND THE FIX WOULD HAVE DELETED A CORRECT CITATION

The coordinator relayed that `rules_primer.md` cites **USA Hockey 403(b)** in a table cell and
**404(b)** in prose for the same two-game suspension, and asked which was wrong.

⚠️ **NEITHER. They govern different things and the figure is written in both.**

- **403(b)** (`usah.txt:2429-2451`) is the substantive rule: second major in a game → game misconduct
  → *"suspended for their team's next two games."*
- **404(b)** (`:2490-2541`) is the game-misconduct rule, whose one-game default carries an **express
  exception pointing back at 403(b)**: *"except that when such penalty is imposed under Rule 403(b)
  … there shall be a **minimum** two-game suspension."*

⚠️⚠️ **A reader quoting either number to an official is right — and an agent that had "resolved the
collision" by picking one would have DELETED A CORRECT CITATION.** ⚠️ **The brief also mis-stated the
Fighting row as a "season suspension"; it says a 3-game suspension under 615(f), and is correct.**

**Two things WERE missing, both understating the cost, and both are now carried:** only **404(b)**
writes ***minimum***, and **403(b)**'s *"in addition to any other required suspensions incurred
during the same incident"* appeared nowhere.

⚠️ **And a contradiction risk was closed while in there:** the prose ended *"and its season-long
ladder over majors"* right after the fighting sentence, inviting a reader to count fighting majors
toward Rule 411. **Rule 411's own Note forecloses it** (`usah.txt:2947`): *"A separate progressive
suspension rule for Fighting is covered under Rule 615(f)."* **411's list is seventeen rules and
fighting is not on it** — verified, and it confirms the document's existing "seventeen-rule list".

### 🔴🔴 AN UNSOURCED SCOPE CLAIM THAT TELLS THE WRONG READER THE ANSWER IS SETTLED

Three sites carried *"the competitions IHUK runs itself and nothing beyond them"* / *"outside the
leagues IHUK runs itself."*

⚠️⚠️ **That is a claim about IHUK's PORTFOLIO, and none of the four Rules of Competition makes it.**
**IHUK also publishes the In-House Rules, which bind NIHL National, the SNL and BUIHA Varsity** — all
three named in the same document two paragraphs earlier. ⚠️ **So a reader in NIHL National or BUIHA
recognises their own league as one IHUK runs, and takes the CHECKING answer as settled. The four
documents settle nothing for them.**

**Two sites repaired in `rules_primer.md`** — replaced with a scope-of-**documents** claim, named
exclusions, and a direct instruction not to assume they may hit. ⚠️ **The third, `uk_rules.md:393`,
is dispatched** — and it matters more, because that is the document British readers are routed to.

⚠️ **The exclusions are UNREAD, not verified as different** — none of those five books is on disk.
**"Not settled by these documents" is the only supportable form.**

### 🔴 A CITATION-SCOPE ERROR THE CORPUS ALREADY HELD THE ANSWER TO — the tenth time today

`rules_primer.md` gave *"senior NIHL"* its checking answer from the NIHL Rules of Competition.
⚠️ **That document is titled "National League Division 1 and 2 Rules of Competition"**
(`ihuk_nihl_roc_layout.txt:1`), and `:574` treats **Elite League and NIHL National as separate tiers
ABOVE** Divisions 1 and 2. **The checking content was right; the citation scope was not.** Fixed in
prose and in the matching `:927` table cell.

⚠️⚠️ **`body_contact_and_battles.md:86` ALREADY enumerated it correctly as "NIHL Division 1 and 2"**
— **a cross-document disagreement resolved in favour of the stricter sibling, which had been right
all along.**

### ✅ THE CAPTION LAYER IS CLEAN — swept for non-negotiable 7 as a CATEGORY, 0 defects

**408 units (204 diagrams × `caption` + `describe`) dumped by importing the module index; ~35 read in
full, including every shape the brief named** — net-front assignment, the F3 layer, point coverage,
pinch rules, gap control, wall depth. ⚠️ **Every one was correct**, and most carry the *exact* correct
form. Samples: *"…it is a coaching choice rather than a law: the realistic alternative is strong side
takes the puck and weak side splits… so ask your coach which you play."* · *"None of the three is
more correct than the others… so find out which one you are in."* · *"The stick and a half is a guide
and not a law."*

**Near-misses CLEARED and written down so nobody re-opens them:** `dz-collapse-high-slot`,
`dz-collapse-corner`, `nz-pressure`, `entry-vs-standing-up` state an assignment flat **inside an
explicitly named system** — *that IS the system*. `stick-in-lane-body-net-side` matches its owner
verbatim and the owner states it flat **with the mechanism**, as a defensive principle rather than a
system choice.

⚠️⚠️ **A BETTER METHOD THAN THE BRIEF'S, AND IT IS THE TRANSFERABLE PART.** The brief said *"nothing
greps for a speech act."* ⚠️ **The agent inverted it: scan for ASSIGNMENT VOCABULARY, then test for
the ABSENCE OF A HEDGE MARKER in that same unit.** 408 units → 47 tight candidates → ~35 read.
**Use this for the extraction-layer round below.**

⚠️ **AND THE BRIEF'S TOOL WOULD HAVE SWEPT A MINORITY.** `check_caption_hosts.py --rule-like` reports
**only non-owner host pairs** — it is **structurally blind to a caption spoken only into its own
owner document**, where most captions live, **and blind to `describe` entirely.**

### ✅ CLOSED — the CARHA kicked-puck divergence, and the brief's evidence was the WEAKER rule

⚠️ **The agent found a better source than the one briefed.** `carha.txt:2888-2891`, **Rule 60(c)**:
*"A goal shall NOT be allowed if the puck has been directed into the net as a result of a distinct
kicking motion by an attacking player, **or after being kicked, the puck deflects off any player or
stick into the net**."*

⚠️ ***"off any player or stick" reaches your OWN stick with no carve-out*** — so the claim now rests
on an **explicit rule** rather than on reasoning from an absence of exception, which is what Rule 69
alone required.

⚠️ **AND THE BRIEF UNDERSTATED EXISTING PROPAGATION:** Rule 69 was **already** in the body bullet,
Common Mistakes and the Sources trailer from an earlier wave. ⚠️ **The only layer with a hole was the
FACTS layer — which is the layer that matters most, because each line is voiced alone.**

**The scope decision, made and reasoned:** `:444`'s *"NHL and IIHF **only**"* was **softened** — an
unqualified exclusivity claim contradicted by the PWHL on disk — **to the phrasing the document's own
body prose already used.** `:445`'s *"all four books"* was **left exactly as written**, because it
**enumerates its four books in the same sentence** and the next line opens *"Beyond the NHL, IIHF,
USA Hockey and Hockey Canada, one more book goes further."* ⚠️ **A scoped count is not an absolute** —
and *"naming the PWHL here would spend characters telling a reader of a general technique document
about a women's professional book that is never a general standard."*

⚠️ **Dispatched: `puck_handling.md:280` carries the `:444` sentence WORD FOR WORD**, including the
absolute, with no CARHA. **`body_contact_and_battles.md:966` is NOT a target** — it cites only
49.2(i)/(ii) and never states the own-stick limb.

### 🔴🔴 THE PORTFOLIO CLAIM IS WORSE THAN "IMPRECISE" — THE READER'S MISREADING IS CORRECT ON ITS OWN TERMS

**The sharpened finding, from the agent that repaired `uk_rules.md` across five layers.** The four
Rules of Competition carry a **per-document ownership clause**, not a portfolio claim:
`ihuk_nihl_roc_layout.txt:56` — *"**NIHL leagues are solely owned and operated by IHUK**"* (same for
WNIHL `:58`, junior `:55`).

⚠️⚠️ **NIHL National IS an NIHL league. So a NIHL National reader meeting *"the leagues IHUK runs
itself"* IS NOT MAKING A MISTAKE — IHUK really does own and operate their league.** ⚠️ **But
`ihuk_nihl_roc_layout.txt:1` titles itself *"National League Division 1 and 2 Rules of Competition"*
and `:574` treats *"Elite League or NIHL National teams"* as SEPARATE TIERS ABOVE NIHL 1. The
document their league runs under is NOT ON DISK and sets no checking format.**

⚠️ **So the wording handed a CHECKING answer to readers it does not cover — and a careful reader
following the words correctly arrives at the wrong place.** That is a sharper defect than the
coordinator's framing, which treated it as a loose phrase.

**Corroborated in IHUK's own In-House Rules, which scope BY NAME rather than by portfolio:**
`eiha_inhouse_2026-27.txt:386` *"Applicable Leagues: NIHL (all leagues), SNL, and BUIHA Varsity"* —
⚠️ **Section 6 (Physical Fouls) ONLY, and the agent CAUGHT ITSELF over-reading that as the whole
document and rewrote it before verification** — plus `:487` (NIHL National) and `:653` (BUIHA).

**Repaired in `uk_rules.md` in ALL FIVE layers**, each ending at an instruction a reader can act on:
*"until you have an answer, do not hit anyone."* ⚠️ **PNIHL was added only because the source names
it** (`ihuk_nihl_roc_layout.txt:285-288`) — **and the source spells it two ways, so the agent quoted
neither spelling.**

⚠️ **THE COORDINATOR'S SECOND HYPOTHESIS WAS REFUTED:** `uk_rules.md` does **not** repeat the
*"senior NIHL"* over-reach **anywhere** — every site already said *"NIHL Division 1 and 2"*. And
`:301`'s *"IHUK's own junior leagues"* is **not** the same defect, because the licensing clause is
quoted immediately after it. **Left untouched.**

### 🔴 TWO MORE SITES — and one proves the coordinator's own report was incomplete

- **`body_contact_and_battles.md:131`** — *"These are the regulations for the leagues IHUK runs
  itself."* ⚠️ **Same defect, same document set, and it is the file `uk_rules.md` SENDS THE READER TO
  for the detail.** It already enumerates *"NIHL Division 1 and 2"* correctly at `:86`, **so only the
  frame is wrong.** Dispatched.
- **`rules_primer.md:88`** — *"IHUK publishes a different one for each league it runs."*
  ⚠️⚠️ **THE COORDINATOR REPORTED THIS FILE AS "REPAIRED AT TWO SITES" TODAY. THIS SITE WAS NOT AMONG
  THEM** — found because the agent **grepped every `Rules of Competition` hit in the file** rather
  than trusting the report. **Lower hazard (period length, not checking), same kind.** Dispatched
  with an instruction to enumerate the sites itself.

⚠️ **The lesson is the method, not the miss: a claim repaired "at two sites" is repaired at the two
sites somebody looked at.**

### 🔴🔴 TWO FACTS LINES THAT CONTRADICT THEIR OWN SIBLINGS — worse than the defect that found them

**Found by reading all 32 `Never:`/`Convention:` lines in `breakouts.md` ALONE.** Both are dispatched.

**M1 — `:585`** `Never: Leave early anticipating the rush…` ⚠️⚠️ **This document's OWN `:194` reads
`Options: The centre fly — the centre leaves the zone early up the middle to stretch the ice`.**
**Under a centre fly, LEAVING EARLY IS THE JOB.** ⚠️ **It does not merely omit scope — it contradicts
a sibling FACTS LINE, and both are voiced alone.** A listener hears one or the other.

**M2 — `:479` and `:481`, TWO LINES APART IN ONE BLOCK.** The `Never:` forbids sitting above the hash
marks; the `Convention:` two lines below says *"a flat/spread structure asks wingers to hold higher
toward the blue line."* ⚠️ **Same block, two separate `<p>`s, flatly opposed.**

⚠️ **AND THE COORDINATOR'S KEY LOCATOR WAS WRONG.** The brief cited `breakouts.md:575` as the scoped
prose counterpart. **It is the UNSCOPED PROSE TWIN** — no system, no alternative, no find-out. The
real scope lives at `:193-197` and `:601-608`. ⚠️ **The conclusion held and the situation was WORSE
than briefed.**

### ⚠️ A `Never:` REPAIRED TODAY NOW SITS AT 194/200 — six characters

The `:563` repair landed at **194/200 and is now in `check_facts.py --near`.** The repairing agent
flagged it against its own work and named the remedy: **dropping *"standard"* gives 185/200 at no
loss of meaning**; it kept the word only to match `:174` verbatim.

⚠️ **Coordinator's view, handed on: trim it.** A six-character line is one ordinary edit from
breaking, and **`--near` exists because a block at its cap once evicted a rulebook fact silently.**

### ✅ CLOSED — `puck_handling.md`'s duplicated sentence, and TWO MORE STALE COUNTS SELF-CAUGHT

The `:280` sentence duplicated word for word from `passing_and_receiving.md:444` is repaired, and the
CARHA divergence added in **two layers plus a Sources entry** — ⚠️ **with the affiliated-leagues-only
scope in the SAME SPOKEN UNIT, verified in the rendered SSML: no listener hears the CARHA rules
without the scope.**

⚠️⚠️ **THE AGENT CREATED TWO STALE COUNTS AND CAUGHT THEM BY RE-SWEEPING AFTER EDITING, NOT BEFORE.**
*"None of the **four rulebooks this guide checks**"* became wrong the moment CARHA was cited — fixed
by scoping the count to the question (*"the four rulebooks read for this"*), not by changing the
number. ⚠️ **It also pre-empted a THIRD: *"those two books"* appeared TWICE IN ONE BULLET WITH
DIFFERENT REFERENTS** (NHL+IIHF, then HC+USAH) — rewritten to name the books.

⚠️ **It also found the body under-scoped in the direction that misleads most:** the warning read *"do
not take it into a minor-hockey game"* when **the adult rec reader is the one most likely to practise
this skill.** Now *"and not only to minor hockey — find out which book your league plays under."*

⚠️ **It declined to self-certify its own judgement call:** *"a reviewer who thinks goal legality
belongs wholly in `passing_and_receiving.md` would cut hunk 3 and keep hunks 1-2. That is a
judgement, not a verification, and I cannot self-certify it."*

### ⚠️⚠️ `count(old)==1` PROVES THE STRING IS UNIQUE, NOT THE QUOTATION

**The sharpest method finding of the round, and the agent caught it against its own work.**

It repaired a silently-lowered capital at `:328`, with `count(old)==1` asserted and passing. ⚠️ **Then
the RENDER showed the SAME Korn quotation a second time at `:302`, which it had not touched — it had
created an inconsistency INSIDE THE DOCUMENT while every assertion passed.**

⚠️ **The exact-match discipline this session has been mandating is necessary and NOT sufficient: it
guarantees you edited the string you meant, not that you edited every instance of the CLAIM.**
**Fixed at both. Add to briefs: after an exact-match edit to a quotation, grep the QUOTATION, not the
string you replaced.**

### ✅ REFUTED — nothing in `goaltender.md`'s `notfound` bucket is unsourced

An earlier agent speculated *"some may be quotations whose source is not on disk at all, which is the
more serious possibility."* ⚠️ **Not one.** All 46 occurrences (41 unique) resolve into six accounted
buckets: **20 on-disk-but-unGREPPABLE**, 4 disclosed bracket alterations, 1 corpus-internal, **18
genuinely external — all five pages refetched, HTTP 200, every string located in the RENDERED
body** — and 3 that are not quotations at all.

⚠️ **The `cover[]` / `make[]` form is a DISCLOSED DELETION, not a typo** — suspected and **refuted**
against the Casebook, and it is a corpus-wide convention with 11+ instances. **The tool strips
exactly one letter, so both forms report `notfound` while being verbatim.**

### ⭐ A DISCLOSURE UPHELD BY FETCHING THE DEAD CITATION'S ARCHIVE

`goaltender.md:330` says Wikipedia calls the profly *"the style most commonly used and taught"* **but
that the source it cites does not say so.** The agent followed the citation to a dead nhl.com page,
**fetched the Wayback snapshot** (HTTP 200, 6,298 bytes of text), and found **zero** occurrences of
*"most commonly used"*, *"commonly used and taught"* or *"profly"*.

⚠️ **"The disclosure is true. Do not strip it."** ⚠️ **This is the opposite outcome to the
boards-pinning finding an hour ago — and both came from ATTACKING a disclosure rather than trusting
or stripping it.**

### ✅ COORDINATOR RULING — the em-dash table join at `goaltender.md:1468` is acceptable

Reported not fixed: two NHL Reference Table 11 rows are quoted as
*"Using blocking glove to punch an opponent in the head or face — Rule 51"*, where **the em dash
joins two table COLUMNS and is not in the source.**

**Ruling: leave it.** The document says *"its thirteenth row"* and *"its eighth row"* in the same
sentence, so **it discloses that it is quoting a tabular row**, and joining one row's columns is the
ordinary way to render tabular data in prose. ⚠️ **Recorded so it is not re-filed** — but if a future
pass disagrees, the honest alternative is a colon or a stated column split, **not deletion.**

### 🔴🔴 THE BOARDS-PINNING SENTENCE CONTRADICTED A DOZEN SIBLINGS — and the reader it failed is the one being pinned

**The coordinator's finding HELD and was far larger than reported.** `puck_handling.md` told a reader
that **only USA Hockey** writes the limit on an opponent pinning you along the boards.

⚠️⚠️ **A corpus-wide grep found IIHF 101.1's boards limb already stated in AT LEAST TEN OTHER
DOCUMENTS** — `body_contact_and_battles.md:150/1002/1032`, `defender.md:176`, `winger.md:384`,
`defending_the_rush.md:217/397`, `forechecking_systems.md:548/579`,
`defensive_zone_coverage.md:138`, `offensive_zone_play.md:888`, `center.md:629` — **every one from
the CHECKER's side** (*"pin the puck, not the player"*).

⚠️⚠️ **`puck_handling.md` is the ONE document that states it from the PINNED PLAYER's side, and it
was the only one telling her no book but USA Hockey writes it.** **So the sentence did not merely
under-claim — it CONTRADICTED A DOZEN SIBLING DOCUMENTS, and the reader most affected is the one
being pinned.**

**Repaired in three layers.** The disclosure was **made precise, not removed** (non-negotiable 4):
Rule 54 now recorded as *read in full and carrying no boards sentence*, with the 101.1 citation, both
penalty strings, and an explicit *"nothing is claimed here about men's or junior play under the
IIHF."*

⚠️ **The containment was verified, not assumed:** `grep "pin her\|along the boards"` returns
**exactly one hit in the rules section of each edition** (v1.1 `:7504`, 2026/27 `:7604`), word for
word identical. **And the British chain was verified at the foundation layer** —
`eiha_inhouse_2026-27.txt:39-41` adopts the IIHF book; In-House Rule 101 **adds** to the women's
section and **does not touch 101.1's content.**

### ⚠️ THE METHOD'S FLOOR, stated by the agent that used it

> *"This was a search for a rule the corpus said did not exist. It found one **because 101.1 uses the
> corpus's own words.** A limit stated in a rulebook in DIFFERENT WORDS — a boards-pinning
> prohibition living inside a charging, interference or board-checking rule — would have returned
> nothing to `grep "along the boards"` and I would have reported the disclosure as clean."*

⚠️ **Same shape as the `kickshot` false negative: a search keyed on the CORPUS's vocabulary cannot
find a rule the BOOK phrases differently.** **Every negative in this corpus rests on somebody having
guessed the book's wording.**

### ✅ THE NIHL NATIONAL ATTRIBUTION — repaired, and the repair's FORM is the transferable part

`uk_rules.md:545` claimed the NIHL 1-and-2 document *"names NIHL National as a separate competition
whose regulations were not read."* ⚠️ **It says no such thing** — `own rules|own regulations|separate
competition` returns **zero, raw and flattened**. ⚠️ **And the obvious flip would ALSO have been
wrong:** the document *does* mention NIHL National, at `:574-575` (a *"senior team"* definition for
ice-time priority) and `:638` (a filming standard).

⚠️⚠️ **THE REPAIR'S FORM IS WHAT GENERALISES: every scope statement is now sourced to something the
document DOES — its title, its Appendix A divisional matrix, a labelled format row — rather than to
something it is claimed to SAY.** And the negative is a **searched** negative (*"states no format for
NIHL National by name"*), not an assertion about an unseen body.

**The agent enumerated all eight sites itself rather than trusting the brief. Seven were already
correct**, including `:393`, which is the PNIHL model sentence and verified against `:287`.

✅ **Cross-document check run by the coordinator on its handover: CLEAN.** No sibling repeats the
*"separate competition whose regulations"* form. `body_contact_and_battles.md:133` and
`core_principles.md:220` already carry the agreed *"Four Rules of Competition were read for this
document"* wording.

### ⚠️⚠️ BRIEFING DEFECT REPEATED ~15 TIMES — THE COORDINATOR NAMED THE WRONG CAP ALL DAY

`scripts/check_facts.py:78` — **`MIN_FACTS, MAX_COACHING_FACTS, HARD_MAX = 3, 8, 14`.**

⚠️ **`HARD_MAX` 14 is the TOTAL. The cap that actually bites is `MAX_COACHING_FACTS` = 8** — a block
trips at **more than 8 NON-`Rule:` facts** and is told *"the section is probably two sections."*

⚠️⚠️ **Every brief today named only `HARD_MAX` and the 200/300 length caps.** The agent that caught
it: ***"Had I planned to 14 I would have written a block that failed the gate."***

⚠️ **`CLAUDE.md` did not name it either — `grep -c MAX_COACHING_FACTS CLAUDE.md` returned 0.**
**Fixed: all three caps are now in `CLAUDE.md`, with the instruction to name all three or none.**

### 🔴🔴 THE EIHL CASEBOOK'S EXISTENCE IS ASSERTED IN FIVE PLACES AND SOURCED IN NONE

⚠️ **`sources/README.md:193` lists it under *"Still not obtained"* — which records it as UNFETCHED
but DOES NOT SOURCE ITS EXISTENCE.** ⚠️ **And `grep elite sources/eiha_inhouse_2026-27.txt` returns
ZERO — the In-House Rules never name the Elite League.**

Sites: `uk_rules.md:19`, `:41`, `:389`, `:519` and `rules_primer.md:56`. ⚠️ **`:519` is the only one
disclosing the basis — *"on public reporting rather than its own unread Casebook"* — and that public
reporting is NOT ON DISK EITHER.**

⚠️ **So the corpus tells an EIHL reader to look for a document in five places across three documents,
and nothing on disk establishes that it exists.** Dispatched.

### 🔴 A SHED QUALIFICATION (D8) IN A FACTS LINE — NHL dimensions presented as universal

`breakouts.md:159` stated **44 to 64 ft** between the point and the wall spot, **voiced alone, no book
named**. ⚠️ **The owner qualifies it by book:** `rink_map.md:45` tables 64 ft as the **NHL** value,
while `:154` records **IIHF Rule 1.5 putting the blue lines 18.5 m out — about 60.7 ft, making the
range ~41–61 ft.**

⚠️ **In a corpus whose readers are officiated under the IIHF.** Repaired in three words —
`on NHL dimensions` — and **the substitution that fixed the line's dangling antecedent cost 3
characters LESS than pointing at it.**

### ⚠️ A LIST RENUMBER THAT NO CHECKER WOULD HAVE CAUGHT

An agent inserting a Key Takeaway renumbered 6–13 → 7–14. ⚠️ **Its insertion script sliced the wrong
literal and ate the `7.` off the next item, leaving a list item starting with a bare period.**
**Caught by re-reading the rendered list; repaired; the 1–14 sequence re-verified by regex.**

⚠️ **It checked the renumber was SAFE before doing it** — `grep -ri "takeaway"` across `content/`,
`project/` and `site/src` shows **no sibling cites this document's takeaway numbers**, though other
documents do cite their own. ⚠️ **It could verify that none does TODAY, not that none will.**

### ⚠️ A BLOCK IS NOW AT THE COACHING CAP WITH ZERO HEADROOM

`switching_positions.md`'s Centre→wing block holds **8 non-rule + 4 `Rule:` = 12 facts.**
⚠️ **8 is exactly `MAX_COACHING_FACTS`** — the block passes, and **the next non-rule fact added to it
will fail the gate.** ⚠️ **`check_facts.py --near` will NOT warn about this** — it reports lines near
their LENGTH cap, not blocks near their COUNT cap. **Recorded because nothing else will say it.**

### ✅ `uk_rules.md` — TWO of four brief items were ALREADY CORRECT, and the agent found one nobody had

⭐ **IT MEASURED THE IDENTITY RATHER THAN ASSERTING IT.** IIHF 9.5 whole rule, flattened: **2025/26
v1.1 vs 2026/27 = 1,201 chars each, CHARACTER-IDENTICAL.** Casebook 9.5 vs IIHF 9.5: **first
divergence at offset 572 of 573** — ⚠️ **so the entire escalation is VERBATIM the IIHF's. It is not
an EIHL interpretation at all.** In-House: `9.5` and `Rule 9.5` both return **0 flattened in both
editions**. ⚠️ **It deleted the footer lines before comparing** — the remedy this repository
established today after three parties in a row gave one that does not work.

**The coordinator's fifth finding confirmed exactly:** before the edit the escalation appeared
**once**, at `:146`, inside an EIHL paragraph. **The Home Countries treatment never met the rule.**
Repaired with a new body subsection plus Common Mistakes and Key Takeaway 4.

#### ⭐⭐ NEW, AND NOBODY HAD REPORTED IT — the In-House Rules ARE stricter, in one limb

`eiha_inhouse_2026-27.txt:233-235`, *"Jersey Requirements (Rule 9.3 Emphasis)"*: *"Jerseys must cover
all relevant protective equipment (e.g. elbow pads). First offence: Warning. Subsequent offences:
**10-minute Misconduct Penalty**."* **Against IIHF 9.5's *"A second violation by the same Player
would result in a minor penalty"*.** ⚠️ **Domestic is HARSHER — a 10-minute misconduct where the
IIHF gives a minor.**
⚠️⚠️ **AND THE AGENT NEARLY FILED A FALSE NEGATIVE ON ITSELF, AND SAID SO:** *"My own first search
returned ZERO because I grepped CASE-SENSITIVELY for 'Protective Equipment'. Case-insensitive,
flattened, it returns 1 in each edition. **A case-sensitive flattened grep is a false-negative
generator and I nearly filed one.**"* ⚠️ **This is a NEW trap, distinct from the label-zero and
footer-splice traps already on record.**
**It also NARROWED its own negative:** *"the In-House Rules do not amend Rule 9.5"* is true **of the
rule number and the escalation**, and is now written in those terms rather than as silence on the
subject.

#### ✅ COORDINATOR CLOSED THE AGENT'S OWN "HIGHEST-VALUE THING I LEFT UNDONE"

It declared: *"No situation handbook interpretation of Rule 9.5 was searched… the corpus's own
history says a rule verified in the playing rules alone is not verified."* **Searched this round —
and the Handbook carries SIXTEEN Rule 9 situations and four Rule 12 situations. Situation 9.8**
(`iihf_situations_v1.1.txt:701-709`, **identical in the 2026/27 edition at `:714`**):

> *"The Referee shall instruct the player to change or remove the altered jersey and **if the player
> refuses or fails to do so**, the player shall be assessed a minor penalty for delay of game. If the
> player returns to the ice without making the necessary change, they shall be assessed a misconduct
> penalty and for a third time, a game misconduct penalty. Rule 9.5."*

✅ **The conditional reading the corpus now publishes is CONFIRMED by the Handbook, in a worked
example.** ⚠️ **AND IT IS SLIGHTLY BROADER THAN THE PLAYING RULE: *"refuses OR FAILS TO DO SO"* —
the playing rule says only *"refuses"*.** **A player who simply does not get round to it is on the
ladder too.** **Hand to whoever next holds `uk_rules.md` or `equipment.md`; not dispatched.**

#### The rest, verified

**Item 2 ALREADY CORRECT** — `uk_rules.md:228` carries the unwilling-combatant limb in full. ⭐ **But
running the general form found TWO more incomplete In-House quotations and repaired both:** Rule
9.12's *"unaltered"* limb was **quoted half and was nowhere in the document for a Home Countries
reader**, and the chin-strap gap read *"between chin and chin strap"* where the rule says
*"chin/neck"*. **Item 3 not applicable** — the file states no jersey tariff. **Item 4 confirmed and
the file was NOT wrong** — *"the defect was an UNREPORTED divergence in a document that reports EIHL
divergences for neck protection and video review."*
**Both coordinator extras taken, and Rule 28 handled exactly right:** added **only where it already
bites** (`:146` quotes the Casebook's own 86.6 limb using that phrase), **with the scope limit stated
in terms** — *"I did NOT promote it to a general section; doing so would be the cardinal-rule failure
in its administrative form."*
⚠️ **A RENDERER TRAP NOBODY HAD RECORDED: `md_to_speech` renders the raw footer stamp `010826` as
*"ten thousand eight hundred and twenty-six"*.** Written as *"Version 1.0, dated 1 August 2026"*
instead. **Anyone propagating the provenance caveat must not paste the literal footer.**
**All three read-scope disclosures NARROWED, never deleted; 17 `check_quote_drift` hits in the file
are ALL pre-existing and none is in a line it wrote.**

### ✅ THE FLOOR-WITHOUT-CEILING CENSUS — the corpus is in BETTER shape than the naming instance implied

**All 39 documents, three passes: 1,700 tier hits, then 5,786 facts lines extracted and
layer-separated to 493 candidates, then 108 on dangerous acts read rule-by-rule against the books.**
⚠️ **The residue is TWO documents plus three secondary sites** — `center.md` (four sites, and **the
same document states the ceiling correctly at `:638`**) and `goaltender.md:1388` (slashing at two
minutes, **NHL 61.3's major MANDATORY on injury, and the ceiling appears NOWHERE in the document**).
⭐ **Fourteen sites JUDGED NOT DEFECTS WITH REASONS**, including *"Rule 625 caps itself there"* —
**verified by reading Rule 625 whole: no major, no match clause exists in it.**
⚠️ **`check_absolutes.py`'s penalty-tier cap check DID NOT SEE THIS CLASS, by construction:** *"the
sentences never used a capping word — they simply stated the minor and ended."*
✅ **Coordinator re-ran the IHUK negative: it substantially HOLDS, but is over-strong for U10** —
`ihuk_u10_roc_layout.txt:150-163` lists *"Bodychecking is NOT allowed in U10 matches"* **inside a
penalties procedure** that includes removal *"for the remainder of the shift"*. **No tariff; a
consequence procedure. Routed.**

### 🔴🔴 A HEADING IS A VOICED LAYER AND NOTHING TESTS IT — a new defect class

**`uk_rules.md:132` read `### Neck protection is mandatory, for everyone, with no warning`.**
⚠️ ***"A heading is voiced as its own unit with breaks either side: a listener heard the In-House
tariff asserted as UNIVERSAL, in the document that is supposed to settle British scope, with no
sentence attached to scope it."***
⚠️⚠️ ***"The census, the brief and my own grep pass ALL MISSED it, because greps land on prose and a
heading reads as a label. NOTHING ON DISK TESTS WHETHER A HEADING SURVIVES BEING VOICED ALONE."***
**Found by RENDERING, not grepping. Repaired, with all FOUR in-file references updated and the whole
repo grepped for external anchors first.** ✅ **Corpus-wide census DISPATCHED.**

### ✅ THE NECK-PROTECTOR TARIFF — five sites, and one the brief did not name

**All four quotations re-verified verbatim. The MANDATE was left unhedged everywhere; only the
TARIFF was scoped.** ⭐ **`switching_positions.md:306` was fixed BY SPLITTING ONE `Rule:` LINE INTO
TWO** — mandate at 218 chars, tariff at 244 — **block 11 → 12 facts, 5 non-`Rule:`, both caps
clear, nothing evicted.**
⚠️ **`uk_rules.md:11` Key focus was NOT IN MY BRIEF and carried the same defect** — *"mandatory for
every player at every British level, adults included, **with no warning**"*, **the tariff bolted to
the Britain-wide mandate limb.** **Found because the agent read the file rather than the brief.**
✅ **The under-inclusive direction appeared once more and was caught:** `getting_started.md:20`'s
*"in England and Wales it covers training"* **omitted the EIHL's own warm-ups-and-practice clause.**
**Checked the other two and found none — both already cover it.**

### ✅ THE GOALTENDER GAP — the refusal was right, and a sourced limb existed unused

⚠️ **CONFIRMED: no source in this repository states a board-contact posture for a goaltender.**
`bvhs.txt` read **end to end** — 45 pages, complete text layer, **and its Contents page carries no
section on contact, collisions or being hit**. ⚠️ **Its only boards material is PUCK-PLAY SPACING
and *"must not be repurposed."***
⭐ **BUT A SOURCE-BACKED LIMB EXISTED AND WAS SIMPLY NOT BEING USED HERE:** USA Hockey's *Heads Up
Hockey* Rule One is written for **every player on the ice** (`huh.txt:119`), **names the GOAL POST
alongside the boards**, and is already owned and cited elsewhere in this corpus. **So carrying it
into `goaltender.md` is PROPAGATION OF AN EXISTING CORPUS CLAIM, not a new one.** **Written into all
five layers, with the gap stated AS a gap** — *"no source held here… states a board-contact posture
for a goaltender. That is a gap in the sources, not a gap that has been filled by inference."*
⭐ **It caught its own overstatement mid-draft:** *"neither document mentions goaltenders anywhere"*
was **false** (`ibc.txt:378`) and it corrected it before finishing.
✅ **`sources/README.md` CORRECTED by the coordinator: its claim that the BVHS manual *"would close
the last unread mechanical-risk surface"* is overtaken — it is read, and it does not close it.**
⚠️ **One way this could still be wrong, and it is cheap: `bvhs.pdf` is 6.3 MB of PHOTOGRAPHS against
75 KB of text. If a board-contact posture exists as a captionless photo sequence under no heading, a
text read would not see it. `pdftoppm` on 45 pages settles it in ten minutes and nobody has run it.**

### 🔴🔴 THE CAPTION LAYER WAS BLIND TO ALL FOUR CENSUSES — and it carries the same defect

⚠️⚠️ **FOUND BY AN AGENT RENDERING A DOCUMENT, NOT BY ANY CENSUS:** *"a diagram caption/describe,
spoken into chunk 006, carrying the full wall-contact posture limb including the Tator mechanism, in
prose no `content/` grep can see."* **Its conclusion: *"Any 'file ✓ / block ✗' census run over
`content/` alone is blind to it."*** ⚠️ **ALL FOUR CENSUSES TODAY WERE RUN OVER `content/` ALONE.**

**COORDINATOR MEASUREMENTS THIS ROUND:** the limb's vocabulary appears in **15 diagram modules**.
`check_caption_hosts.py --rule-like`: **204 diagrams, 87 embedded in more than one document, 74
rule-like caption/non-owner-host pairs.**

⚠️ **A CONFIRMED INSTANCE, verified against the build product: the `breakout-reverse` caption is
owned by `breakouts.md`, is SPOKEN INTO `hockey-iq/time_and_space.md`, TEACHES THE REVERSE IN FULL**
— *"the puck is a hard backhand banked off the wall… he is putting the puck somewhere he cannot
see"* — **and carries NO posture limb**, while sibling captions in the SAME module (`breakouts.mjs`
`:739-756`, `:992-993`) **do**. ⚠️ **A caption is the SOLE CARRIER for a listener: it is spoken into
its host, and a listener cannot follow a cross-reference.** **Dispatched to `diagram-reviewer`.**

### ✅ THE "SET OUT INLINE" CENSUS — complete, and only ONE claim was false

⚠️ **The false disclosure that prompted it:** `body_contact_and_battles.md`'s Notes trailer claimed
the Casebook's *"Rule 47 head-butting examples"* were *"set out inline"* — **and `grep -i
'head.\?butt'` over the whole file returned ONLY that trailer line.** ⚠️ **The disclosure was
FALSE.** **The agent added the content rather than retracting the claim, which was the right call.**
**Its generalisation — *"the corpus's own verification notes are a claim layer nobody audits"* —
was worth acting on, so the coordinator ran it corpus-wide.**
✅ **Measured: the whole corpus makes this class of claim FIVE times, in FOUR documents.** One was
the false one, now true. **The other four are a DIFFERENT CLASS and were spot-checked sound** —
`conditioning_and_recovery.md:664`, `scanning_and_anticipation.md:601` and `game_management.md:1159`
are **provenance claims** (*"individual read dates are given inline"*, *"labelled inline"*), not
claims that rule content appears inline, and the sampled content carries what they promise.
⚠️ **NO TOOL WRITTEN — the population is five. A checker for a five-item class is a worse
investment than reading them, and the class boundary is a judgement a regex would get wrong.**

### ✅ THE `defensive_zone_coverage.md` AND TECHNIQUE-DOC WAVES

**DZC: the census verified exactly, and the defect narrowed to ONE block.** ⭐ **The agent reached
the checker-side exclusions independently** — under a low zone collapse *"the opponent has the puck
in your end, so in the corner your reader is the one ARRIVING"*. ⭐ **And it sharpened the finding:
`:568`/`:596` DO carry a self-protection limb at the net front** (*"Stay on your feet as long as
possible"*), **so the document is not blind to its own reader's safety — it is blind to it AT THE
BOARDS SPECIFICALLY, which is the higher-consequence location.** ⚠️ **It rejected a 199/200 variant
carrying the shoulder limb *"precisely because one character of headroom puts a safety line
permanently on the `--near` list"*.**

⚠️ **`defensive_zone_coverage.md`'s TWO *"proper authorities"* occurrences are the BENIGN class and
the EIHL answer would make them WRONG** — both are **direct attributed quotations of USA Hockey Rule
404(b)'s own Note**, in quote marks, with the rule number. ***"The EIHL DOPS is not the proper
authority for a USA Hockey game misconduct."*** **EXCLUDE this document from that wave.**

**Technique docs: 3 repaired, 3 DECLINED with reasoning, and the brief was wrong in the direction of
MORE repair.** ⚠️ **`time_and_space.md:103` is NOT the limb** — *"your back to the boards"* there is
a **situation description, not a prohibition**, the exact false-positive class CLAUDE.md names.
**The full limb appears NOWHERE in that file; only a partial (*"head up, chin off your chest"*).**
⭐ **The agent narrowed its OWN draft sentence** — *"every call in this section sends a teammate into
the boards"* is **false of "up", "chip", "over", "ice it", "deep"** — to *"several of these calls"*.
⭐ **And it caught a hazard no census flagged: *"eat it"* — *"Hold the puck, absorb the hit"*.**
**Its three declines rest on Key focus / Overview / Common Mistakes / Key Takeaways carrying the
limb** — ⚠️ **and it named the risk itself: *"if a later wave trims any of those as 'repetition' —
which `check_layer_echo.py` will score them for — the decline becomes wrong AND NOTHING WILL CONNECT
THE TWO EDITS."***

### 🔴 THE FOURTH ATTRIBUTION AUDIT WAS *NOT* CLEAN — five repairs in `special_teams.md`

Three audits came back clean. ⚠️ **This one did not**, and the defect shape is instructive.

**F1, three sites, ALL IN THE FACTS LAYER:** the corpus cited **NHL 63.2(vii) AND IIHF 63.2(VII)
jointly** for the quotation *"unless he is actually being checked by an opponent"*. ⚠️ **The IIHF
does not print those characters — it writes *"unless they are"*.**

⚠️⚠️ **THE BODY PROSE WAS ALREADY CORRECT**, attributing to the NHL and noting the IIHF's variant.
**Body-correct / facts-wrong — and only the LAYER TEST found it. A document grep clears the file.**

⚠️ **F4 IS A CLASS WORTH NAMING: a capital silently RAISED.** `"Except where there is no glass"` for
the book's mid-sentence *"except"*. ⚠️ **Shape 1 — LOWERING — is documented accepted house style.
Shape 2 — RAISING — is NOT, and nothing says so anywhere.** Repaired to `"[E]xcept…"`.

**All 28 `notfound` in that file classified: ZERO unsourced, ZERO fabrications.** 15 external
fragments refetched and confirmed, including **six correlation figures** in a hockey-analytics
citation.

### ✅⭐ `skating.md` IS THE BEST-SOURCED FILE AUDITED — 30 URLs refetched, ~59 of 60 quotations verbatim

**14 external hosts plus three on-disk primaries. ONE defect in roughly sixty quoted strings.**
*"Its disclosures are not merely honest but measurably accurate down to the citation-number level."*

⚠️ **Four apparent MISSES were all greppability artefacts** — two manuscript line-number splices, a
hyphenated line break (`favor-/able` in the thesis), and a curly-vs-straight nested quote mark.
**All four resolved to verbatim. Not one was a defect.**

**Negatives the corpus asserts, EARNED by checking:** Hockey Monkey carries no *"shoulder width"* and
no *"energy"* (its only `wear` is site navigation); Cutting Edge's two lists **state no ranking**;
the Athletes Untapped page genuinely **lacks** the two middle rungs the corpus says it lacks.

⚠️⚠️ **BOTH RESTATER CASES WERE CAUGHT BY THE CORPUS BEFORE THE AUDITOR.** The PLoS third-stride
sentence is in the **Introduction**, after *"It was found that"*, citing reference **[2] = Lafontaine
(2007)** — author, journal, volume, pages and PMID all as the corpus prints them. And Hockey
Institute attaches *"(Page, 1975)"* to the sentence the corpus goes to the thesis for.

### ⚠️ TRANSIENT FAILURE RECOVERED — the "inconsistent host" warning fired on the first host it could

`robbyglantz.com/the-forward-crossunder/` returned **HTTP 503 "Maintenance"** on the first attempt
while **another page on the same host served 200 seconds earlier**. Two retries returned **200**.
⚠️ **Recorded so nobody marks the host dead on one attempt** — the same shape as `purehockey.com`
earlier today.

⚠️ **And a benign redirect worth knowing: the cited `http://hecc.org/headsup.html` 301s to a
canonicalised path. Same domain, correct article — but THE CITED URL IS NOT THE LIVE ONE.**

### ⭐⭐ AN AGENT APPLIED THE COORDINATOR'S OWN LESSON BACK AT THE COORDINATOR — and found a real divergence

The brief instructed: *"ONLY the Preamble and contents list have been read… do NOT write what the
Casebook says about equipment."* ⚠️ **The agent refused, correctly:**

> ***"That was a statement about the PAST, not about what is REACHABLE.** Applying the brief's own
> lesson — ask whether it can be FETCHED before you label it — I fetched the PDF and read Rule 9.5
> and Rule 9.12 in the primary text."***

**And found a real EIHL/IIHF divergence the corpus did not have**, checked against **all three IIHF
extractions**: the EIHL's own 9.12 carries the IIHF's penalty wording **verbatim** but adds
***"This requirement also applies during warm-ups and practice sessions."*** It also scopes to
*"EIHL Competition"* and moves the no-modification limb into 9.5(4).

⚠️⚠️ **BUT THE COORDINATOR THEN RELAYED THAT AS "WARM-UPS AND PRACTICE ABSENT FROM THE IIHF", AND
THAT IS WRONG AT THE BOOK LEVEL. A LATER AGENT REFUSED IT AND WAS RIGHT** — *"writing it as given
would have made the corpus OVERSTATE the divergence."* **Warm-up is ALREADY mandatory for every IIHF
player, in two other rules** (coordinator-verified):

- `iihf_rules_v1.1.txt:1222` **Rule 9.5** — *"The complete protective equipment must be worn during
  the game and during "pre-game warm-up"."*
- `iihf_rules_v1.1.txt:966` **Rule 5.6** — *"During warm-up on the ice, all protective equipment must
  be properly worn."*

⚠️ **It is absent from IIHF 9.12 SPECIFICALLY — which is the narrow thing `equipment.md` correctly
says.** ⚠️⚠️ **THE GENUINELY NEW WORD IS *PRACTICE*: `practicesession` returns ZERO in all three IIHF
extractions** (v1.0, v1.1, 2026/27), coordinator-verified.

**So the corpus's hedge was TRUE on the penalty tier and INCOMPLETE on ONE word.** ⚠️ **A divergence
overstated is a defect in the same family as one understated — and this one was the coordinator's,
caught by an agent reading the book rather than the brief.**

### ⚠️⚠️ THE COORDINATOR COPIED A FIGURE AND THEN DERIVED A SECOND ONE FROM IT

`sources/README.md` recorded the Casebook as **8 pages** and computed ***"~5.8 KB/page — it greps
honestly"*** from that. ⚠️ **`pdfinfo` reports 27. The real density is ~1.7 KB/page.**

⚠️⚠️ **The conclusion held and the arithmetic did not — and the coordinator wrote it INTO THE FILE
THAT EXISTS TO WARN ABOUT EXACTLY THIS.** The figure came from a report and was never checked;
a second figure was then computed from the unchecked one. **Corrected by an agent that ran
`pdfinfo` itself.**

⚠️ **AND A THIRD VERSION STAMP was found in the PDF `Title` metadata** — `Version 1.0 080926`,
mixing the 1.0 label with the September date — beyond the two already recorded. **Three stamps
disagree. The wrong one could mean a superseded rule was read.**

### 🔴🔴 A FABRICATED MANDATE THAT SURVIVED EVERY PRIOR ROUND — found by a LAYER TEST, not a section read

`equipment.md:551` told every British reader that a mouthguard and a neck guard are *"required in a
lot of leagues — **and in every British one, for every player of every age**."*

⚠️⚠️ **NO BRITISH DOCUMENT REQUIRES A MOUTHGUARD OF EVERY PLAYER OF EVERY AGE.** IIHF 9.13
**recommends**; and in England Ice Hockey's R&R and **both** editions of the In-House Rules **the
word *"mouth"* does not occur at all — 0/0/0, verified on spacing-, line-break- and
hyphen-stripped text.**

⚠️ **It contradicted its OWN document in two other layers** — `:128` (*"recommended for all"*) and
`:718`, whose phrasing implies the mouthguard is the conditional case. **Body ✗ / Common Mistakes ✓ /
Key focus ✓ / Key Takeaways ✓.**

⚠️⚠️ **HOW IT WAS FOUND IS THE METHOD FINDING:** *"only because I ran the layer test across every
occurrence of 'mouthguard' rather than reading the section — **a section-scoped review would have
missed it, and it had survived every prior round.**"*

### ⚠️⚠️ THE COORDINATOR OVERSTATED A DIVERGENCE TWICE ON ONE SUBJECT, AFTER WARNING AGAINST IT

**First:** *"warm-ups and practice absent from the IIHF"* — **false at the book level**; IIHF **9.5**
and **5.6** already mandate warm-up. Only **practice** is new.

**Second, in the very brief that warned about the first:** *"the EIHL MANDATES what the IIHF only
RECOMMENDS"* — ⚠️ **also false at the book level. IIHF Rule 202.3 already MANDATES** a mouthguard for
*"Under 20"* players not wearing full-face protection. ⚠️⚠️ **AND `equipment.md:128` ALREADY SAID SO
— writing the brief's framing would have made the document CONTRADICT ITS OWN ADJACENT BULLET.**

**The real divergence is sharper and the agent wrote that instead: the EIHL REMOVES THE FULL-FACE
CARVE-OUT.** IIHF 202.3 excuses a caged U20 player; Casebook 9.5(1) excuses nobody but goalkeepers.

⚠️ **THE RULE THIS YIELDS, and it is now twice-proven: BEFORE WRITING ANY DIVERGENCE, SEARCH THE
WHOLE BOOK, NOT THE MATCHING RULE NUMBER.** A requirement absent from rule X may be carried by rule
Y — and **a divergence overstated is a defect in the same family as one understated.**

### ✅ A SUPERLATIVE REFUTED BY SEARCHING, NOT BY READING THE BRIEF

The agent drafted *"the one British competition that makes it compulsory"* and **searched before
committing**: `ihuk_wnihl_roc.txt` §10 — *"Facial protection (Full-face covering or half visor and
mouth guard) is mandatory in IHUK WNIHL Competition"*, with non-compliance *"penalised as illegal
equipment"*. **A SECOND British competition compels one.**

✅ **COORDINATOR-VERIFIED AND THE CHECK IT MOST WANTED CLOSED IS CLOSED:** the sentence is present in
**both** the on-disk copy **and** the live rolled-back copy, so the quotation does not turn on which
file you open. ⚠️ **And the penalty limb LINE-WRAPS — a naive grep returns zero in both, which is
how the coordinator briefly misread it as a misquotation.**

### ⚠️⚠️ THE COORDINATOR'S BRIEF WAS AN UNDERSTATEMENT OF AN UNDERSTATEMENT

The brief reported `uk_rules.md` as understating its Casebook read scope, and proposed the corrected
list: **9.2, 9.5, 9.12 and 10.5–10.7.**

⚠️⚠️ **THAT LIST WAS ALSO SHORT.** An agent read contiguously from the Preamble to the end of Rule 10
— **every subsection the contents list gives for Rules 5, 6, 7, 9 AND 10.** Its verdict:

> ***"Widening to the brief's list would have reproduced the defect IN THE SAME DIRECTION."***

⚠️ **And there was a THIRD site the brief did not name** (`:547`, the Sources trailer). *"Had I fixed
only `:391` and `:553` the file would have been left self-contradictory."* **All three now bounded at
Rule 11.**

⚠️ **It also found the coordinator's "8 pages" error had propagated into THIS file too** — `:553`
said *"eight pages"*; **`pdfinfo` reports 27**, the extraction carries **27 footers**, and the last
reads *"Section 11 – Women's Ice Hockey … 27"*. **Same direction: making the source look slimmer than
it is.**

⚠️⚠️ **AND ITS SCRUPLE ON WHAT THE REPAIR ACTUALLY IS, which is the most honest sentence in the
round:** *"The disclosure is now true because **I** read them today — but that is **a repair by
making the claim true, not by confirming it always was.**"*

### ✅ COORDINATOR RULING — do NOT make the version-stamp disclosures match

`uk_rules.md` carries all three stamps; `equipment.md` carries two. ⚠️ **Neither picks a winner, so
neither misleads.** The agent's reasoning, which I adopt: **the `Title` metadata is a provenance
detail relevant only where the document is being CHARACTERISED AS A SOURCE** — which `uk_rules.md`'s
trailer is doing and `equipment.md` is not. **Making them match adds noise to a non-safety
disclosure for symmetry's sake.** ⚠️ **Recorded so nobody "harmonises" it later.**

### ✅ THE WARM-UP TENSION DOES NOT EXIST — the coordinator's TRUNCATION was hiding the sentence that resolves it

**The brief quoted Rule 86.6 limbs (i) and (ii) and stopped. Two paragraphs follow (ii), and the
second is the answer** (coordinator-verified verbatim):

> *"Referees are authorised to call all penalties provided for in the rule book **from the start of
> warm-up time** until 30 minutes after the end of the game, **if they see the offence take place.**"*

⚠️ **So 86.6(ii) is NOT a carve-out of which rules apply in the warm-up — it is a statement about
WITNESSING.** The closing paragraph grants authority over *all* rulebook penalties from the start of
warm-up, conditioned only on seeing the offence — **and (i) puts "the standby referee who oversees
the warmup" there to see it.** **An unworn neck guard is visible for the whole warm-up.**

⚠️⚠️ **THE COORDINATOR TRUNCATED A SOURCE IN A BRIEF — the exact defect this session spent the day
repairing in the corpus** (`rules_primer:338`'s deleted word, `goaltender:842`'s manufactured join,
`:469`'s clipped table cell). **A brief is a quotation too.**

⚠️ **And the agent did NOT stop at "no change needed."** It added the enforcement route, *"because it
is the thing a reader acts on — it tells an EIHL player the tier is live from the moment they step on
for warm-up."* **Its own framing: *"That is a strengthening, in the direction your last four briefs
erred away from."*** ⚠️ **It also kept the genuinely open part as a disclosure: *"no Casebook rule
says who enforces Rule 9.12 at a session with no officials, and this document does not guess. Wear it
either way."***

⚠️ **The brief also got a VOICING fact wrong:** it said `:547` and `:553` are not voiced (correct)
but **did not mention `:391` — which IS voiced.** The agent confirmed it in the SSML and wrote that
hunk to be grammatical aloud on that basis.

### ⚠️⚠️ THE COORDINATOR'S BRIEF-ERROR PATTERN, stated plainly because it is the session's real lesson

**Every brief defect this session reduces to ONE root: relaying a source without reading enough of
it.** The surface forms looked different and were not:

| form | instance |
|---|---|
| **Truncating** | quoted 86.6(i) and (ii), stopped one paragraph short of the resolution |
| **Overstating a divergence** | *"warm-ups absent from the IIHF"* (9.5 and 5.6 carry it); *"EIHL mandates what IIHF recommends"* (202.3 already mandates) |
| **Understating a scope** | the Casebook read scope, twice — and the second correction was **also** short |
| **A stale or wrong figure** | *"8 pages"* for 27, then **deriving KB/page from the wrong number** |
| **A short site list** | six times, worst by *one-and-a-half documents* |
| **A wrong search term** | `kickshot` returning 0 for books reading *"the blade of his own stick"* |

⚠️ **The corpus's own rule already covers all of it and the coordinator is not exempt: READ THE
SOURCE, NOT THE REPORT.** **A brief is a quotation, and a quotation of a quotation is where this
corpus's defects come from.**

### ✅ COORDINATOR RULING — `uk_rules.md:23`'s *"The Elite League does warn first"* stays

An agent flagged it and **deliberately did not touch it**: voiced in Key focus, it *"can land as 'you
get one free pass'"*.

**Ruling: leave it.** ⚠️ **This file has NO ` ```facts ` blocks**, so `:23` is **prose**, and prose
paragraphs are **grouped into chunks — not voiced alone.** The agent verified the sentence
**continues into the requirement** and the paragraph **closes on the imperative**, so a listener gets
the whole thing. ⚠️ **The isolation argument that makes a facts line dangerous does not apply here** —
and the agent was right to flag it and right not to overcorrect verified text. **Recorded so it is
not re-filed.**

### ⚠️⚠️ BRIEF ERROR TWENTY-EIGHT — A ROW QUOTED HEAD, AND `check_plan_rows.py` COULD NOT SEE IT

**Both findings in the `special_teams.md` rules row were already repaired when the agent arrived.**
The row was written against `git show HEAD:…`; an earlier wave this session had rewritten the whole
Overview paragraph, carve-outs, antecedent, head-count resolution and all. The relayed provenance
correction did not apply to the document either.

⚠️⚠️ **`check_plan_rows.py` WAS RUN THAT SAME DAY AND REPORTED ONE STALE QUOTE, IN A DIFFERENT
FILE.** These two rows passed it, because it checks a row's *quoted assertion* and their evidence was
prose the wave had rewritten **around** rather than a string the tool tracks.

**So the tool's own warning is understated.** Its docstring says a hit means the evidence has moved;
⚠️ **the inverse — a row that does NOT hit can be just as stale — is the case that actually bit, and
it is invisible.** **Re-read the file before relaying a row. The row is a hypothesis and SO IS ITS
EVIDENCE.**

### ⭐⚠️ AN EMPTY GREP NEARLY BECAME A FALSE RULES CLAIM — caught and reverted by the agent itself

Recorded because the near-miss is worth more than the repairs around it, and because **the direction
is the one no reviewer stops on.**

An agent concluded from a headword listing that **CARHA has no general *Player* definition**, and
therefore that two `special_teams.md` lines were unsupported. It edited both, with a ⚠️ callout
citing other CARHA rules as evidence. ⚠️ **`sources/carha.txt:385-387` carries the definition**:
*"Except where special rules apply, the goalkeeper is to be considered as one of the players."*

⚠️ **The scan missed it because `carha.txt` indents that page at THREE spaces where the surrounding
glossary pages use FIVE, so a `^ {5}[A-Z][a-z]` pattern skipped a whole page.** Both edits were
fully reverted; both lines are verified correct.

**This is `sources/README.md`'s *"an empty grep is not an absence"* reproduced exactly, in a source
whose README entry was read.** ⚠️ **The failure would have made the corpus look LESS supported than
it is** — the round-59 disclosure species. **A negative from a STRUCTURAL pattern (indentation,
column position, headword shape) is worth less than a negative from a content grep, because the
structure varies page to page inside one extraction.**


### ✅ Answered and upheld on review — three questions that could have become work and should not

- **Is the rim posture PERFORMABLE?** The author doubted its own repair (*"a rim is a two-handed
  sweep and the override's posture may partly conflict"*). ⚠️ **`safety-reviewer`: yes, and one limb
  is the default shape of the skill rather than a competitor to it** — a player sending a puck along
  the wall in the direction they are travelling has their skates parallel **by construction**, and
  the prohibited shape (squaring the chest) is also when the rim gets weaker. **The safe posture and
  the effective rim are the same posture.** *"The author's self-doubt was well-placed as a question
  and wrong as a conclusion."*
- **Should the bank block get the same limb? NO — upheld, with better reasoning than the author
  gave.** The bank's trigger is a **lane obstruction**, not a pin; and *"you cannot aim at a
  reflection point on the wall ahead of you with your chin on your chest"* — **the skill itself
  enforces eyes-up**, so the bad habit is unavailable there. Adding it *"would be the sweep the plan
  forbids — a safety limb pasted where the hazard is not, which is how a corpus teaches readers to
  discount the limbs that matter."*
- **Is the caption duplication now bad? NO — it is correct propagation.** The four occurrences are
  not back to back, and each layer adds something the others do not. ⚠️ **But the underlying finding
  stands: before today this section's posture caveat lived ONLY in a caption borrowed from
  `winger.md`** — a build product of `site/src/diagrams/*.mjs`. *"If that diagram were replaced,
  re-captioned, or dropped from this document, the caveat would have vanished… and nothing would
  have flagged it, because `check_facts.py` cannot see a caption and a document-level grep would
  have found the string and cleared the file."*
- ⚠️ **DO NOT trim *"find the boards by feel rather than by looking down at them"* to *"find it by
  feel"*.** It is executable **because it is scoped to the boards, not the puck** —
  `puck_handling.md:224` warns that *"the goal is knowing where the puck is without looking, not
  heroically refusing to look."* **Broadening it would make it unperformable, and an unperformable
  safety instruction is one readers learn to discount.**

⚠️⚠️ **THE DISPATCHER CAUSED THIS.** The brief that produced it quoted IIHF 48.1 as a hazard
justification without its four conditions, and the agent wrote a sentence in the brief's own shape.
**Brief error nine, and the only one that reached the corpus.** The eight earlier ones were caught
because agents were told to refute the brief; **this one was not caught by the agent, because the
brief's framing was the defect rather than its facts.** ⚠️ **"Refute the brief" does not protect
against a brief whose PREMISE is sound and whose SCOPE is wrong. Only a reviewer with the primary
text open did.**

### ✅ REFUTED before it became work — the `switching_positions.md` KT 3 cardinal-rule candidate

**22 September.** The agent repairing `switching_positions.md` proposed a new row: KT 3 (`:550`)
states *"Under a low zone collapse your responsibility moves with the puck"* and **names no
alternative**, so *"voiced alone, KT 3 is a coaching choice stated as the job."* It was right to
raise it. **The coordinator rendered it, and it does not hold** — in both places the claim appears:

1. **In Key Takeaways** (chunk `059.ssml`), **KT 2 is in the SAME spoken unit**, immediately above,
   and carries zone/man-on-man/hybrid plus *"ask which system before you worry about technique."*
2. **In the facts block** (chunk `008.ssml`), the `Position:` line stating the collapse is
   **immediately followed by a `Convention:` line in the same block**: *"Zone, man-on-man and hybrid
   are coaching choices, not laws. Ask your coach which one your team plays before your first
   shift."* ⚠️ **This is the case where "voiced alone" genuinely applies** — each facts line is its
   own `<p>` between 300 ms breaks — **and the cardinal-rule limb is the very next utterance.**

⚠️ **The proposal rested on the same over-generalisation the coordinator made eight times today** —
treating "voiced alone" as a property of a layer's name rather than something the renderer decides.
**A Key Takeaways item is not voiced alone; a facts line is.** The way to settle this class is to
render and read the chunk, which takes about a minute.

**Recorded as refuted, not silently dropped**, so the next reader does not re-derive it from the
same grep. ⚠️ **And the general lesson runs the other way from this round's other one: an agent's
proposed row is a hypothesis too, and the dispatcher owes it the same refutation it demands of its
own briefs.**

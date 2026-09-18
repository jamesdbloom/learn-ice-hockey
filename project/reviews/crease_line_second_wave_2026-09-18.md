# The crease-line second wave — 18 September 2026

**Five documents, two reviews, four majors, and one finding that outlives the
subject entirely.** This wave exists because the first wave's commit gate left five
non-blocking findings, and working them turned up more than they named.

## Files changed

`positions/center.md` · `technique/shooting.md` · `systems/zone_entries.md` ·
`systems/special_teams.md` · `technique/body_contact_and_battles.md` ·
`site/src/diagrams/rule69_clauses.mjs` (committed separately as `5993550`)

## ⚠️ THE FINDING THAT OUTLIVES THE SUBJECT — attribution drift, caught in the wild

An agent repairing something else **opened both books instead of one**:

| Book | Rule 69.3's opening limb |
|---|---|
| **NHL** (`sources/nhl_rules_layout.txt:6085-6088`) | *"initiates **contact** with a goalkeeper, incidental or otherwise… **(refer to Rule 69.7 for an exception)**"* |
| **IIHF** (`sources/iihf_rules_v1.1.txt:5555-5557`) | *"initiates **\"a relevant contact\"** with a goalkeeper, incidental or otherwise"* — **no exception clause** |

⚠️ **The IIHF gates the limb on a DEFINED TERM, printed in its own quotation marks,
where the NHL writes the plain word.** ⚠️ **And `grep -rn 'NHL and IIHF 69.3'
content/` returns 22 sites** attributing it jointly, written across many rounds by
many agents.

⚠️⚠️ **THIS IS THE CLASS EVERY TOOL HERE IS BLIND TO.** `check_quote_drift.py` keeps
the **closest match across all sources**, so a string quoted correctly from one book
and *also* credited to the other **scores clean** — and these two texts are
near-identical, the worst possible corpus for it. **Three reviewers named this as
their blind spot today. Nothing mechanical found it; an agent reading two books
did.**

**Open, and deliberately not acted on.** Recorded in `project/plans/OPEN_ITEMS.md`
as a `rules-verifier` question with an explicit instruction: ⚠️ **do not sweep the 22
sites.** If the defined term resolves to the same substance, **joint attribution is
correct and a sweep would make 22 documents worse.**

## The four majors, and what each cost

**1. A compression removed a rule's TRIGGER.** `zone_entries.md:327`/`:374` attached
USA Hockey 607(c)'s ejection tier to a sentence reading *"whether or not it was
incidental"*. **607(c) reaches *"body checks or charges"* only**; its Note 1 to
607(d) routes accidental contact to Interference. ⚠️ **It contradicted the file's own
facts block two paragraphs above**, which still said *"a check or charge"* — and
rendered, the listener heard the scoped version first and the unscoped one last.
**Found independently by both reviewers.** Direction conservative.

**2. A facts line named two books where the document named three** —
`shooting.md:495`, and **the omitted one was the IIHF, the British reader's own
book**, in a document whose `Rule set:` header says so. ⚠️ **A census of 62
attributing lines across 15 files found this was the corpus's ONLY wrong set** — an
isolated regression, not a pattern.

**3. A fix reached the body and one block and stopped.** `center.md`'s crease block —
**the section whose heading is about the crease boundary** — held 11 facts at the
hard cap with **none naming the red line**, its boundary instruction still saying
*"the blue paint"*. Round 10's shape exactly.

**4. ⚠️ THE ROUND INVERTED ITS OWN PRINCIPLE.** `center.md:369`, added by the *first*
wave, **ended on the permissive half** — *"its Reference Table 14 answers the other
way"* — voiced alone with 300 ms either side. **That is the exact half the same
round judged a listener could mishear as permission, which is why it was REMOVED
from `shooting.md`'s opener in the same diff.** In the reviewer's words: *"The round
applied the principle in the safer layer and inverted it in the riskier one."*
⚠️ **And it made the IIHF look clean** — the IIHF's own Table 16 answers identically,
which the line did not say.

## What was refused, and why that matters more than what was fixed

- ⚠️ **A self-check QUESTION was left alone, twice confirmed.** *"Your skates are
  outside the blue paint and you never touch the goalie. Can the goal still be
  disallowed?"* It **asks** whether the paint is safe. **Both reviewers independently
  said a sweep would have destroyed it** — and this round's correction makes its
  answer *richer*, not stale.
- **A "blue paint undefined on first use" minor was declined** on ownership grounds:
  the term is glossed corpus-wide by its owner, all four siblings use it unglossed,
  and **glossing it locally would diverge from the owner.**
- ⚠️ **A citation-form fix was declined mid-round to avoid a THREE-WAY split.** Six
  files carry *"Rule 103, Situation 4"*; two carry the owner's *"at The Rink,
  Situation 4"*. The owner is right — **casebook numbering runs per CHAPTER, not per
  rule**, proved by a neighbouring situation citing two different rules at once.
  **A partial propagation would be worse than the consistent-wrong state.** One pass,
  later.

## The dispatcher was refuted four more times

A wrong line number (`:388` for `:389`), a wrong character count (179 for 194), a
duplication described as a **triple** that was a **pair**, and an option list
offering a split that `HARD_MAX` had already foreclosed. ⚠️ **Every one was a
locator, a count or a constraint. None was the substance. Every one was caught by
the agent that had actually read the file.**

## Gates

`check_links` · `check_facts` · `check_absolutes` · `check_geometry` ·
`check_secrets` · `check_counts` — **all 0, run after every agent stopped**, which is
the only run that counts.

## ⚠️ WHAT THIS WAVE COULD NOT HAVE FOUND

- ⚠️⚠️ **THE DIAGRAM LAYER CARRIES THIS CLAIM AND NOBODY CHECKED ITS ORDERING.**
  Rendered speech shows `oz-net-front-screen`'s caption **and** `describe` text
  already stating it, including *"the same play answered in opposite directions
  inside one book"*. **A caption is voiced alone exactly as a facts line is** — so
  major 4's ordering defect could be sitting there untouched. ⚠️ **And
  `check_absolutes.py` cannot settle it: it reads `diagrams.json`, the build
  product, so a clean run certifies whatever was last built.**
- **Nobody heard any of it.** Every layer judgement came from reading rendered SSML.
- **The corpus omits the NHL's 69.7 exception cross-reference** wherever it states
  that limb. Pre-existing, conservative, unexamined.
- ⚠️ **The census behind major 2 matched on one string.** A document stating the
  boundary as *"the red line"* or *"the edge of the paint"* without that phrase is
  invisible to it — **so "the corpus's only wrong set" is a claim about a string, not
  about the corpus.**

---

# ADDENDUM — the gate BLOCKED, and working the block found more than it named

⚠️ **This record's body above was written before a commit gate blocked it. Parts of
it were WRONG and are corrected here rather than rewritten above** — `review_history.md`
is reconstructed from these records, and editing one to match its outcome destroys
the evidence of what the gate caught.

## ⚠️ WHAT THE GATE FOUND THAT THIS RECORD GOT WRONG

1. ⚠️ **Major 4's provenance was INVENTED.** The record says a facts line was *"added
   by the first wave"* and *"ended on the permissive half"*. **That string is in
   neither `6151823` nor HEAD** — it was a pure addition in the second wave. **A
   review record asserted a provenance nobody verified**, which is the corpus's own
   failure mode committed in the layer that is supposed to catch it.
2. ⚠️⚠️ **THE WAVE DEFERRED A CITATION FIX AND THEN SPREAD IT.** This record says the
   fix was *"declined mid-round to avoid a three-way split"*. **The diff added EIGHT
   new instances of the wrong form and removed two, taking it from 4 files to 6.**
   **Deferring a repair is not licence to write eight more instances of the defect.**
   Now corrected: every line the wave added or changed carries the owner's form.
3. **Four staged edits were described nowhere**, and the record contradicted itself —
   *"two reviews"* in one section, *"three reviewers"* in another.
4. ⚠️ **TWO DIMENSIONS WERE NEVER RUN.** No `safety-reviewer` (D11) on a diff that
   rewrites **penalty-tier prose** and net-front contact instructions in four
   documents; no `facts-reviewer` (D10) on a diff that adds one facts line and
   rewrites seven. ⚠️ **That was the coordinator's omission. Silence on a dimension
   is the failure mode, and the gate is the only thing that caught it.**

## ⚠️⚠️ A FABRICATION TRAVELLED THROUGH A REVIEW REPORT INTO A BRIEF

The `safety-reviewer` wrote — **with a line range attached** — *"Read with IIHF 42.4,
a major carries an automatic game misconduct."* **The coordinator relayed it into a
repair brief.**

**IIHF 42.4** (`sources/iihf_rules_v1.1.txt:3960-3964`): *"The Referee, **at their
discretion, may** assess a major penalty and a game misconduct penalty if… the Player
recklessly endangers their opponent by **"charging"** and the Player **would not be
sufficiently sanctioned by imposing a major penalty**."*

⚠️ **Wrong three ways — discretionary, keyed to charging, and conditional. It would
have put an invented automatic ejection into two paragraphs of a document teaching a
collision sport.** ⚠️ **Caught by the agent asked to IMPLEMENT it** — not by the
reviewer who wrote it, nor by the coordinator who relayed it.

⚠️ **The lesson is not "check harder."** The claim came **with a citation**, which is
what made it look sourced: the line range was real, the rule was real, **only the
characterisation was invented.** That is this corpus's TRANSMISSION class, committed
in a review report, where **nothing downstream is built to catch it** — every checker
reads `content/`.

## The structural finding, measured

A `facts-reviewer` traced **five of its six majors to one cause**, so the cause was
measured: ⚠️ **107 of 839 facts blocks (13%) sit at `HARD_MAX` 11**, and **253 facts
lines are within six characters of their character cap, eight AT it.**

Every net-front block the correction needed to reach was full, so it went elsewhere
**three ways, each its own major**: **sideways** into a section whose body does not
support it (`extract-never-author` violated by a cap, not an author); **ahead of its
body**, leaving a section closing *"get your feet out of the blue"* while its facts
line named the line; and **not at all**, at a line sitting 300/300 inside an
11-fact block that could be neither widened nor split.

⚠️ **`scripts/check_facts.py --near` was added this round so headroom can be known
BEFORE an edit.** ⚠️ **Coordinator decision taken: the section splits are the critical
path.** The anchor cost was **measured, not assumed** — a repo-wide grep for the
heading returns **zero** references. ⚠️ **Do not raise the cap: a full block is
evidence the SECTION is doing two jobs.**

## ⚠️ FOUR TIMES, FOLLOWING THE BRIEF WOULD HAVE INTRODUCED A DEFECT

1. The fabrication above.
2. ⚠️ **A brief asked an agent to weigh restoring a sentence — and THAT SENTENCE WAS
   ITSELF THE OVER-CLAIM.** It implied the NHL and IIHF do not take a goal on
   position alone inside the crease; **69.3 does**, via the significant-position limb
   in both books. **The replacement was truer than the original. Restoring it would
   have reinstated a wrong claim.**
3. A brief cited a line as a **model that "gets it right"**; it carried the identical
   defect and had to be fixed too.
4. A brief's own sketch **silently dropped the limb the brief itself raised.**

**Plus locator and count errors: `:388` for `:389`, `:754` for `:755`, 179 for 194,
289 for 292, a "triple" that was a pair, a phrase attributed to a bullet that was in
a Key Takeaway, and "one added and five rewritten" for one and seven.**

⚠️ **Every one was caught by the agent that had actually read the file. None was the
substance. The briefs remain more defective than the corpus.**

## Two false negatives from tools, both documented classes

- ⚠️ **IIHF 69.2's quoted phrase returns ZERO on a flattened grep** — the running
  header `SECTION · OTHER INFRACTIONS` and a page number are spliced **between
  *"whether or not the goalkeeper"* and *"is inside or outside"***. New book, new
  rule, documented class.
- ⚠️ **`check_quote_drift.py` reports NHL 42.1 NOT FOUND in five documents** — page
  furniture between *"shall be"* and *"imposed"*. **Nobody should act on that tool's
  NOT-FOUND list for these files without reading the source.**

## ⚠️ A METHOD WARNING THAT COST A REVIEWER MINUTES

**`sed 's/<[^>]*>//g'` on rendered SSML silently MANGLES AND REORDERS output** under
this shell's locale, and convinced a reviewer a fresh render was stale. The files
were byte-identical. **Read SSML with Python. No finding may rest on a `sed`-filtered
SSML read.**

## Dimensions declared OUT OF SCOPE — in the record, not in a message

⚠️ **A commit gate made this correction and it is right: *"the declaration is in your
message, not in the record. `review_history.md` is reconstructed from records; put
the out-of-scope line in the record or it did not happen."*** So:

- **D15, the rendered site — OUT OF SCOPE.** **No `site/` file is staged in this
  wave** and no diagram source changed. The site half of this round went out
  separately (`5993550`) with its own record,
  `scroll_regions_site_round_2026-09-18.md`.
  ⚠️ **One D15-adjacent item was CLOSED by the gate rather than deferred again:** it
  read `oz-net-front-screen` out of `diagrams.json` and found the caption **already**
  ends *"USA Hockey and Hockey Canada both count that line as part of the crease, and
  so does the IIHF's Rule 1.7 — but the IIHF's own appendix table allows the goal…
  Off the line is the answer that works under every book."* **Three books, then the
  contradiction, then the instruction last — the ordering this wave repaired
  elsewhere, already correct here.**
- **D4 and D5, external citations — OUT OF SCOPE.** ⚠️ **The diff adds and removes
  ZERO `http(s)://` URLs** (`git diff --cached -U0 -- content/ | grep -c 'http'`).
  Every citation touched points at a rulebook **on disk**, and those were re-derived
  from `sources/` by the gate itself rather than accepted from any report.

## ⚠️ KNOWN-UNREVIEWED, CARRIED TO THE GATE

- ⚠️ **A new safety paragraph at `body_contact_and_battles.md:1075`** — the shot-lane
  reconciliation, explaining that a screener stands in the lane by design where a shot
  blocker is taught to keep their head out of it. **Its author flagged it: *"a repair
  is new text."* Nobody has reviewed it.** It **points at** the owner rather than
  restating, so the no-injury-rate disclosure stays with its owner and no rate is
  invented.
- **`shooting.md:452` remains at 300/300** attributing the reading to the IIHF alone
  while its own body names three books. ⚠️ **Blocked on the section split, not
  forced, no caveat evicted.**
- **A candidate, logged not acted on:** a Common Mistakes bullet omits 625(b)'s third
  relief — a defender shoving you into the crease. **Over-conservative, and carried
  elsewhere in the same document.**

---

# ADDENDUM 3 — the second BLOCK, and a safety finding that was not about the crease line

⚠️ **A commit gate blocked a second time. One finding was procedural and one was
substantive, and the substantive one turned out to be about a hazard this round had
not been looking for.**

## ⚠️ I DEFERRED A FIX ON GROUNDS THAT WERE FALSE, AND THE GATE CAUGHT IT

`technique/shooting.md:452`, a `Rule:` facts line at **exactly 300/300**, still gave
an **IIHF-only reason** for an instruction its own body — changed in the same hunk
range — had just made three-book. ⚠️ **A USA Hockey or Hockey Canada listener hearing
that line ALONE concludes "not my book" — the exact misread this round existed to
close.**

**I recorded it as *"blocked on the section split."* That was false.** A within-cap
fix existed: `and IIHF Rule 1.7 puts the line in the crease` →
`and three books count that line as crease`, **300 → 296, losing nothing.**

⚠️⚠️ **THAT IS THE SUBSTITUTION LESSON I HAD RECORDED TWICE THE SAME DAY — once in a
plan row and once in a tool docstring — AND THEN FAILED TO APPLY.**

**Two things the repairing agent refused, both correct:**
- ⚠️ **The gate ALSO suggested dropping `2025/26` to free eight more characters.
  Taking that would have reintroduced a documented defect:** `sources/README.md:137`
  records that a bare *"IIHF Table 16"* **resolves SUCCESSFULLY against the current
  book — to Overtime.** The edition stays.
- ⚠️ **Naming all three books outright does not fit**, and the only way to buy the
  characters was trimming *"obstructing the goalie's vision"* — **the table row's
  operative condition.** It declined.

⚠️ **And it deliberately named NO layer.** *"Count that line as crease"* claims
neither rule text nor definition, **so a Note and a Glossary are not silently
promoted to rule text by sitting beside the words *"not rule text"*.**

## ⚠️ A SAFETY REVIEW THAT REFUTED THE GATE — AND FOUND SOMETHING WORSE

The gate said a new paragraph left a listener with *"the permission and never the
owner"*. **The reviewer rendered it and refuted that**: the bullet is in chunk 108,
and **chunk 109 opens with the post/spine counterweight in full.** A `<p>` boundary
is not a session boundary.

⚠️⚠️ **THEN IT RELOCATED THE FINDING, AND THE RELOCATION IS THE ROUND'S BEST CATCH.**
§9 *Attacking the net front* instructs a player to stand in the shot lane **four
times** — at close range, blade out, eyes on the puck, defender on the back — and
**`grep` over `:1050`-`:1120` returns ZERO hits for `Equipment`, `helmet`, `cage`,
`release` or `deflect`.**

⚠️ **THE SAME DOCUMENT DOES IT CORRECTLY FOR THE OTHER HALF OF THE PAIR.** §11 carries
the identical exposure for shot **blockers** in **both** layers, with an Equipment
pointer. **Same file. Same hazard shape. One half has it; the other did not.**

**Repaired in body, Common Mistakes and Key Takeaways**, restoring the two words the
earlier text had dropped in transit — ⚠️ ***"at close range"* and *"upright"*, the
words that make it a hazard rather than a geometry note.**

⚠️ **NO INJURY RATE WAS INVENTED.** The owner's disclosure — *"No injury rate for
screening is published in any source held here"* — **is pointed at, not restated or
softened.**

### ⚠️ WHAT THE REPAIR COULD NOT REACH, RECORDED RATHER THAN ACCEPTED

**The facts layer.** That block is at `HARD_MAX` 11; its lead line has **three
characters left**, headroom consumed by this round's own earlier edit; and **six of
the eleven are `Rule:` lines a cap must never evict.** ⚠️ **No merge of the six frees
a slot without losing a rulebook limb** — the closest pair is 292 and 293 against a
300 cap. **No line was traded, merged or shortened.**

⚠️ **So a listener who hears only §9's extraction layer still gets *"Set up in the
shot lane"* with no cost attached. THAT IS THE OPEN DEFECT THIS ROUND DID NOT CLOSE.**

⚠️ **The repairing agent flagged that it ACCEPTED the no-merge finding rather than
testing it: *"Someone should attack that premise rather than inherit it from two
briefs running."*** **Nobody has.**

## ⚠️ A SECOND DOCUMENT HAS THE SAME ASYMMETRY

`positions/winger.md` carries the **blocking** cost extensively — *"head out of the
lane"*, *"hands behind your body with the backs of the gloves out"*, the going-down
form, when **not** to block — and **no screening cost at all**, while its `Action:`
facts line at `:535` says *"get in the goalie's eyes"*. **Untouched. Recorded as a
decision, not swept.**

⚠️ **The census that found it is MOSTLY NOISE — 25 lines, nearly all correct:**
glossary definitions, diagram markers, the **defensive** side of the same call,
vocabulary scoping, a self-check question, and the owner document **where the cost
sits in the same section.** ⚠️ **Only reading separates them. Do not sweep.**

## ⚠️ A STRUCTURAL FRAGILITY NOBODY WAS WATCHING

`:1078`'s referent — *"And that instruction is what makes this the hardest place on
the ice to take contact"* — **already crosses a chunk boundary, and did before this
round.** It works because a listener hears chunks in order. ⚠️ **It is one chunker
change away from being split, and NOTHING CHECKS IT.**

## Gates

`check_links` · `check_facts` · `check_absolutes` · `check_geometry` ·
`check_secrets` · `check_counts` — **all 0 after every agent stopped.** Build exit 0,
chain reached `check:links`: **53 pages, 10,923 internal links, 8 bundles / 8 PDFs.**

---

# ADDENDUM 4 — the third BLOCK demolished a premise two briefs had carried

⚠️ **The gate was asked to attack the "no room in the facts layer" premise and did.
It was false THREE ways, and the shape of the falsity matters more than the fix.**

## The premise, and why it held by accident

Addendum 3 recorded that the counterweight could not reach §9's facts layer because
the block is at `HARD_MAX` 11 and *"no merge of the six `Rule:` lines frees a slot
without losing a rulebook limb — the closest pair is 292 and 293 against a 300 cap."*

1. ⚠️⚠️ **THE CLOSEST-PAIR FIGURE WAS WRONG. The smallest pair is 216 + 273 = 489**,
   not 292 + 293 = 585. **Both exceed the cap, so the conclusion held BY ACCIDENT** —
   the record *"argues against a lever nobody could ever have pulled, and then treats
   that as proof no lever exists."*
2. ⚠️ **THE BINDING CONSTRAINT WAS NEVER THE `Rule:` LINES.** Five non-`Rule:` lines
   sat against `MAX_COACHING_FACTS` 8. ⚠️ **The `Mindset:` line was DUPLICATED
   VERBATIM in the body two lines below, WITH the attribution the facts line
   lacked** — verified by the repairing agent itself: the string occurred **exactly
   twice in the file and nowhere else in `content/`.**
3. **A fold needed no slot at all** — a `Read:` line had 120 characters of headroom.

⚠️ **The premise travelled through TWO briefs unchecked.** The repairing agent had
warned about exactly this: *"Someone should attack that premise rather than inherit
it from two briefs running."* **Nobody did until the gate.**

## ⚠️ AND THE AGENT REJECTED THE LEVER I OFFERED

It took (2) and **refused (3)**, correctly: folding the cost into a `Read:` line
**attaches it to a different instruction**, and the line that creates the exposure
has three characters of headroom, so making *that* line carry it would mean cutting
~100 characters of existing content. ⚠️ **§11's model — the one I cited — is itself a
separate line, not a fold.**

**The counterweight now reaches all four layers.** No `Rule:` line touched, no
caveat evicted, no injury rate invented.

## ⚠️ IT PROVED THE REFERENT CHAIN INSTEAD OF EYEBALLING IT

Addendum 3 flagged that `:1078`'s referent **already crosses a chunk boundary** and
that **nothing checks it**. The agent **rendered HEAD's version of the file into a
scratch content tree and diffed the chunking**: the boundary is **pre-existing, not
created by this edit.** ⚠️ **That is a stronger method than the brief asked for, and
it settles a fragility this record had recorded as unwatched.**

## ⚠️⚠️ A SECOND FALSE PREMISE — AND THIS ONE I PROPAGATED INTO EIGHT SITES

The plan recorded that USA Hockey Casebook situations are numbered **per chapter**,
concluding the owner's *"at The Rink, Situation 4"* was the accurate form. ⚠️ **The
gate refuted it and the primary text confirms the refutation.**

`sources/usah_casebook.txt:1513-1536`:
```
CASEBOOK FOR THE RINK          <- the chapter
  Rule 101 Rink
    Situation 1
  Rule 103 Division of Ice Surface
    Situation 1                <- RESTARTS under each Rule
```
**Rules 104, 105, 107, 109 each restart at Situation 1; Rule 625 runs 1-17 and Rule
626 restarts.**

⚠️ **The "proof" was a misreading:** the *"Rule References 103(a) and 624(Note)"* sits
**inside a situation's ANSWER**, not in the heading it is filed under.

⚠️⚠️ **SO THE FORM THIS WAVE REPLACED WAS THE PRECISE ONE.** *"At The Rink, Situation
4"* resolves **only because Rule 103 happens to be the one rule in that chapter with
four or more situations.** ⚠️ **And the corpus already knew — the same diff writes
*"Rule 625, Situation 10"* three lines away, unremarked.**

**Eight sites were converted on the false premise.** ⚠️ **Nothing is misstated and no
reader is misled — both forms resolve** — but the premise **was recorded as settled**
and would have been quoted by whoever ran the sweep. **The plan row now reverses the
propagation direction and tells the next reader to verify against the primary text,
because that file has asserted it both ways and one was wrong.**

## Left open, deliberately
`## Check yourself` question 11 says nothing about the exposure. ⚠️ **The agent judged
it NOT the same defect — *"it is a recall prompt, not an instruction, so it does not
state the screening instruction naked"* — and flagged it rather than fixing it out of
scope.** Correct: an instruction without its cost is a defect; **a question that does
not supply its own answer is doing its job.**

## Gates
All six **0** after every agent stopped. Build exit 0, chain reached `check:links`:
**53 pages, 10,923 internal links, 8 bundles / 8 PDFs.**

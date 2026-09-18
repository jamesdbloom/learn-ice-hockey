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

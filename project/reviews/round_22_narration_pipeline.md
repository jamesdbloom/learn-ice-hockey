# Round 22 — the narration pipeline

*Scoped to the speech transform and the podcast prompt: the two places where
the corpus stops being text and becomes something a listener hears. 29 July
2026.*

| | |
|---|---|
| Method | Run the transform over the whole corpus, attack its residue report, and audit the generation prompt as a governing document |
| Documents affected | 36 (all — the transform reads every one) |
| Files changed | `scripts/md_to_speech.py` · `.claude/skills/notebooklm-episode/{SKILL.md,prompt_constraints.md,build_episode.py}` |
| Reviewers run | `commit-gate` (twice) · `safety-reviewer` |
| Criticals found / fixed | 6 / 6 |
| Majors found / fixed | 8 / 8 |
| Minors found / fixed | 5 / 5 |
| Corpus commit | `a82bcfe` |

---

## The brief

Every previous round reviewed the corpus **as text**. This one reviewed it as
**audio**, which is a different artefact with a different failure mode: text can
carry a marker that renders visually and vanishes on the way to a listener, and
no amount of reading the Markdown will find it.

The method was to run `scripts/md_to_speech.py --report` over all 36 documents
and treat its **unrecognised-constructs list as a defect list** rather than as
noise. That list had 26 entries and had, as far as the record shows, never been
worked through.

Second half of the brief: audit `podcast_generation_prompt_longer.md` as a
**governing document**. It is prepended to nothing and constrains nothing, but
it shapes every generated episode — the same class of artefact as the style
guide, and the style guide's own history records that a governing document is a
force multiplier in both directions.

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | **No** | — | Out of scope. No rule claim was added or altered. The rule *text* in the corpus is unchanged; only its pronunciation |
| D2 | Rules travelling without exceptions | **No** | — | Out of scope, same reason |
| D3 | Rule-set divergence | **Yes** | `commit-gate` | **Found the critical.** See CR1 |
| D4 | Citation integrity | **No** | — | No citation added or changed |
| D5 | Provenance | **Yes** | `commit-gate` | Found MI3 — a source file misattributed in a code comment |
| D6 | Negative existence claims | **No** | — | None made |
| D7 | The cardinal rule | **No** | — | Out of scope. This diff *installs a guard* against D7 (constraint 1 of the prompt block) and does not test the staged text for it. `content-reviewer`, which owns D7, was not run. Adding a rule is not checking compliance with it |
| D8 | Numeric ownership | **Yes** | `commit-gate` | Found MI2 — a hardcoded count already stale |
| D9 | The summary layer | **No** | — | Not touched |
| D10 | The key-facts layer | **Partly** | `check_facts.py` | Passes. The transform reads `facts` blocks, and their rendering was spot-checked, not systematically reviewed |
| D11 | Reader safety | **Yes** | `safety-reviewer` | **5 criticals, 4 majors against the guard document itself.** See the safety section |
| D12 | Read-aloud integrity | **No** | — | Out of scope **as defined**. D12 is semantic — does a sentence invert when heard alone (*"the kill cannot ice the puck"*) — and is owned by `content-reviewer` §2 and `facts-reviewer`, neither of which ran. What this round did is a different question; see D16 below |
| D13 | Folklore | **No** | — | None asserted |
| D14 | Structure, style, cross-links | **Yes** | `check_links.py` | Passes |
| D15 | The rendered site | **No** | — | Out of scope; no `site/` file touched, and nothing under `site/` references the speech output |
| **D16** | **Speech-transform fidelity** *(proposed)* | **Yes** | author + `commit-gate` | **The whole round.** Does the Markdown→SSML transform preserve every construct, marker and qualification on the way to a listener? No existing dimension covers it — D12 is about a sentence's meaning, this is about whether the sentence survives the pipeline at all |

**Mechanical:** `check_links.py` ✔ · `check_facts.py` ✔ · `check_secrets.py` ✔ ·
`md_to_speech.py --self-test` ✔ (83 assertions, was 70) · determinism verified
by two full runs, byte-identical.

**Coverage limits.** Three documents were listened to, three chunks each —
roughly 1% of the corpus by character, and through macOS `say` rather than
Polly, because no AWS credentials exist in this environment. **No Polly output
has ever been produced.** The other 33 documents were verified by reading
generated SSML, not by ear.

---

## Findings

### Critical

**CR1 · `prompt_constraints.md` + `SKILL.md` — the British rule set attributed
to the wrong governing bodies**

- **As it stood:** *"every British listener is under IIHF plus the England Ice
  Hockey In-House Rules."*
- **Why it is wrong:** the In-House Rules are **issued by England Ice Hockey
  and the Scottish Ice Hockey Association, and adopted by the British
  Universities Ice Hockey Association** — one document covering England *and*
  Scotland. [`uk_rules.md`](../../content/foundation/uk_rules.md) owns this.
  (The first fix said "issued jointly by" all three, following the style guide;
  that was corrected to follow the owner. See the note at the end of the safety
  section.)
- **What a listener would do:** a Scottish or university player is told their
  governing body is an English one, and would look for their rules in the wrong
  place. In the Elite League the EIHL Casebook applies instead, which the
  wording did not mention at all.
- **Why it is critical rather than major:** this text is prepended to the
  generation prompt. It does not appear in one document — it shapes **every
  episode generated from any part of the corpus**, and it does so in the file
  written specifically to stop episodes stating one rule set as universal. D3,
  committed inside the guard against D3.
- **Fix:** all three bodies named with the right relationship to the document,
  spelled out rather than abbreviated because the text is read aloud; an
  explicit *"do not name England Ice Hockey alone"*; the EIHL Casebook noted
  with its non-attribution rule; GB teams and Northern Ireland handled; a
  pointer to the owning document.
- **Found by:** `commit-gate`, checking a claim I had not flagged as a claim.

### Major

**MA1 · 🇬🇧 was silently dropped from all audio.** 12 occurrences across 4
content documents. It is a semantic marker — it flags the British position —
and `apply_symbols` had no row for it, so a UK listener lost the signal that a
sentence was about their rule book. At least one occurrence introduces the
mandatory neck-laceration protector. **Fixed:** expands to *"For British
readers, "*.

**MA2 · `unicodedata.name()` assumed single codepoints.** 🇬🇧 is two regional
indicators, and the counter crashed on it. The `SYMBOLS` table had carried an
unstated single-codepoint assumption. **Fixed:** clusters are named by their
parts.

**MA3 · `<` and `>` absent** from the symbol table that already held `≤` and
`≥`. `(p < .05)` reached the listener with the operator missing — the sentence
inverts without it. **Fixed.**

**MA4 · `£` had no rule at all.** Sterling amounts in `getting_started.md` were
unspoken. **Fixed:** a `currency-sterling` rule; the dollar handler refactored
into a factory rather than copied.

### Minor

**MI1 · `£5.00GBP` rendered as "poundsGBP"** — my own fix, caught by re-running
the report rather than trusting a green self-test. The pattern now absorbs the
ISO code.

**MI2 · A hardcoded count, already stale.** A comment said "one of the eleven";
there were twelve by the time it would have landed. **Fixed by removing the
number** and pointing at `--report`, which prints the live one — the same remedy
applied to `facts-reviewer` earlier the same day, for the same reason.

**MI3 · Provenance error in a code comment** — `equipment.md` credited with a
quotation that is in `getting_started.md`. `equipment.md` contains no `£` at
all. Small, and precisely the defect class this corpus has found most often.

**MI4 · `build_episode.py`** — return annotation contradicted the return type,
an unused module constant, a docstring claiming it wrote the prompt when it
writes only the bundle, and a raw traceback on no arguments.

**MI5 · `.00` read aloud.** `$148.00` was *"one hundred and forty-eight point
zero zero dollars"*. Pre-existing dollar behaviour, fixed while adding sterling.
Verified corpus-wide: exactly four renderings changed, all improvements.

### Accepted, not fixed

**The expansion reads redundantly at 3 of 12 sites** — *"For British readers, If
you play in Britain…"*. Recorded rather than fixed: redundancy costs a listener
two seconds, a dropped flag costs them the signal entirely, and the alternative
is editing content sentences to suit the transform. Revisit if a listener finds
it grating.

**`>` is dead code.** No corpus text exercises it — the only bare `>` characters
are in an ASCII rink diagram and a code span, both stripped earlier. Added
anyway so the table is not half-present, and asserted so it stays correct.

---

## Safety

`safety-reviewer` was run over `prompt_constraints.md` and `SKILL.md` on the
grounds that a document governing how safety material is narrated is itself
safety material. **It returned five criticals and four majors against a file
written to be the safety guard**, which is the strongest argument available for
running it.

### CR2 · The stop-the-line trigger excluded the safety check

`SKILL.md` listed seven review items, called the first six "the corpus's review
dimensions applied to audio", and then set the halt condition at **"if any of
the first five fails."** The safety item was number six. An episode that
stripped the checking-eligibility gate, or rendered the spinal-injury response
as "get them to the bench", did not block further generation — **while a bare
statistic did.**

The reviewer's phrasing: *"under pressure the caveat is what gets trimmed, and
here the process has trimmed it structurally."* That is
[`review_history.md`](../review_history.md)'s overcorrection lesson reappearing
in a process document rather than in prose. **Fixed:** Step 4 is now three
groups, safety first, with both safety and accuracy stop-the-line.

### CR3 · Constraint 7 omitted injury response entirely

Neither file contained the strings *medical, injury, concussion, ambulance,
emergency, spinal, doctor* or *first aid* — verified by grep, zero hits. The
corpus they govern contains `body_contact_and_battles.md` §"If it happens
anyway — a suspected neck injury on the ice", whose own Common Mistakes calls it
*"the most important section in this document"*, and
`conditioning_and_recovery.md`'s ten CRT6 red flags, each an ambulance call.

Constraint 7's four named classes were all **regulatory** — contact, checking
eligibility, protective equipment, penalty-bearing technique. First aid is none
of them. **Fixed:** class (d), with "state it verbatim and in full, or do not
raise the topic at all."

### CR4 · Constraint 7 omitted self-protection technique

Its fourth class protected the listener from being **penalised**. The corpus's
largest safety section protects them from being **injured**, and nobody is
penalised for any of it: head up, never turn your back to the boards, how to
meet the wall, shot blocking, goaltending in traffic. **Fixed:** class (c).

### CR5 · Nothing prohibited medical advice or manufactured exceptions

Two direct collisions with the prompt these constraints override.
`podcast_generation_prompt_longer.md` asks, for every concept, for *"situations
where it does not apply"* and to *"challenge assumptions"* — applied to *"Never
skate with your head down"*, that is an instruction to manufacture the exception
the corpus spent a section denying. And constraint 5's frame (statistics,
records, quotations, rule numbers, studies) does not catch *"you're generally
looking at a week or two before you're back"*, which contradicts the corpus's
own refusal to give timings. **Fixed:** three prohibitions attached to
constraint 7.

### CR6 · A safety caveat in another episode does not exist

`body_contact_and_battles.md` (Technique episode) sends the concussion red-flag
list to `conditioning_and_recovery.md` (Off the Ice episode).
`forechecking_systems.md` (Systems I) teaches a dump-in that puts a defenceman's
back to the forechecker and sends the checking-from-behind rule to
`body_contact_and_battles.md` (Technique). Constraint 7 demanded the full
statement; the bundle did not contain it. This is
[the style guide](../content_style_guide.md)'s *"a restriction that lives in
prose does not exist"*, one layer further out: **a restriction that lives in
another episode does not exist.** **Fixed:** constraint 8, plus a bundle grep in
Step 1.

### Majors, all fixed

- **Northern Ireland over-reach.** "Every British listener" contradicted
  `uk_rules.md`, which states plainly that it does not establish what governs
  the game there *"and does not guess"*. Also missed that GB national teams run
  the IIHF book unamended.
- **EIHL Casebook named without its non-attribution rule.** The style guide
  prohibits attributing its contents — the corpus has never obtained it. Naming
  a rulebook aloud in an engagement-optimised format is an invitation to
  elaborate.
- **The IIHF v1.0/v1.1 gap was not surfaced** where a host would need it. The
  corpus verifies against v1.0; Britain adopts v1.1; `uk_rules.md` calls this
  its largest British gap.
- **Constraint 4 missed "different population"** — the 81% cam-morphology figure
  is from a symptomatic clinic sample, and read bare to a general audience it is
  a health scare.

### A finding against the corpus, not against this diff

The reviewer flagged that `prompt_constraints.md` and `uk_rules.md` disagreed on
who issues the In-House Rules, and judged the constraint correct because it
matched [the style guide](../content_style_guide.md) verbatim.

**On checking, it runs the other way.** `uk_rules.md:18` says the In-House Rules
are *issued by* England Ice Hockey and the SIHA; `:19` says the BUIHA *adopts*
the same document. Issuance and adoption are different things, and the style
guide's *"issued jointly by England Ice Hockey, the SIHA and the BUIHA"* is the
looser statement. `uk_rules.md` **owns** the UK amendment list, so the owner
wins: both skill files now say "issued by England Ice Hockey and the SIHA and
adopted by the BUIHA".

**Closed against the primary text.** The In-House Rules are extracted at
`/private/tmp/eiha_inhouse.txt` — the path
[`content_style_guide.md`](../content_style_guide.md) itself cites. Line 36 has
all three bodies **adopting** the IIHF book. The only issuance sentence in the
document is line 54:

> *"The EIH and SIHA may also issue Rule Bulletins from time to time, covering
> in-house rules or interpretations of IIHF provisions."*

BUIHA is excluded from issuance; adoption is the verb attached to all three.
**`uk_rules.md:18-19` is right and `content_style_guide.md:58` and `:61` are
wrong.**

Two things worth saying plainly about that. First, this is the negative-existence
lesson again in miniature: the record initially said *"neither the reviewer nor I
checked the primary text"*, and the primary text was in the working directory,
cited by the very guide being checked, one `grep` away. Second, the corpus now
holds a **live contradiction between two governing documents**, and a governing
document is a force multiplier in both directions — the next author will
re-introduce "issued jointly by all three" on the style guide's authority.

**Open, and deliberately not closed here:** correcting
`content_style_guide.md:58` and `:61` is a claim change to a governing document
and needs its own gate run. It is the first item of the next round.

The reasoning that prompted the constraint block in the first place is worth
stating, because it is not obvious:

> The generic prompt asks for confidence, memorability and teaching that
> sticks. Applied to hockey coaching material, that instruction pushes two
> hosts straight into the defect twenty-one rounds were spent removing.
> *"F1 forechecks the strong-side half-wall"* is memorable; *"in a 2-1-2 — and
> check which your team plays — F1 usually takes the strong-side half-wall"* is
> accurate. A prompt optimising for retention picks the first every time.

The corpus survives being read aloud. It does not automatically survive being
**re-narrated by an enthusiastic host**, and nothing in the pipeline guarded
that.

---

## What this method could not have found

- **Anything about how Polly actually sounds.** No Polly output exists. The
  transform's correctness was verified by reading SSML and by listening to a
  different engine. Prosody, emphasis and pacing — the things $231 buys — are
  entirely unassessed.
- **A construct the transform recognises and expands *wrongly*.** The residue
  report lists what the transform failed to recognise. Something it confidently
  gets wrong produces no residue and no signal. That is the next round's scope,
  and it needs a human listening to whole documents.
- **Fatigue over length.** The longest sample was 5:26. Nothing here says
  whether a 40-minute document is bearable.
- **Whether the constraint block works.** No episode has been generated. It is a
  hypothesis, and it stays one until an Audio Overview is produced and checked
  against `SKILL.md` Step 4.
- **Whether the 🇬🇧 marker is used consistently in the source.** The transform
  found 12; whether that is every place the British position is flagged is a
  `content-reviewer` question and was not asked.
- **The other 33 documents by ear.**

---

## Proposed scope for the next round

**First, close the governing-document contradiction.** Correct
`content_style_guide.md:58` and `:61` to match `uk_rules.md` and the primary
text on who issues the In-House Rules. It is a small edit to a document that
multiplies whatever it says.

**Then the method.** Listen to one full document end to end — `goaltender.md`,
the longest and the most rule-dense — and hunt for **confident mis-expansions**
rather than omissions. The residue report lists what the transform failed to
recognise; something it recognises and expands *wrongly* produces no residue and
no signal, so this class is invisible to everything round 22 did.

**And propose D16 formally.** If speech-transform fidelity is a real dimension —
this round argues it is — it belongs in
[`review_process.md`](../review_process.md) with an owning agent, rather than
living in one review record.

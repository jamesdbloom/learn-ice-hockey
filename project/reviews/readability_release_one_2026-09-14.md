# Readability release one — the record

**Date:** 14 September 2026. **Baseline commit:** `c8ab508`. **Plan:**
[`READABILITY_AND_DUAL_AUDIENCE.md`](../plans/READABILITY_AND_DUAL_AUDIENCE.md).

**Scope as planned:** a metadata schema, homepage/pathway routing, a principles index, and **no more than
two pilot documents.**

⚠️ **Scope as delivered: 19 content documents changed and one created.** The seventeen beyond the plan were
**not** a widening of ambition. Every one was found by the verification the plan itself demands, and each is
recorded below with the finding that produced it. **A release bounded to two documents discovered that a
rule claim in the glossary was contradicted by the book, and could not honestly stop there.**

---

# Part 1 — what shipped

| Deliverable | State |
|---|---|
| Metadata manifest | `site/src/data/audience.json` — **new, tracked, hand-maintained.** 3 documents classified, **36 explicitly `unclassified`**, every age/league/contact/supervision/safety field `status: "draft"` pending a named reviewer |
| Pathways | `site/src/data/pathways.json` — **new.** 7 entry points, **5 render**; two are `draft` and filtered out at build |
| Homepage | `site/src/pages/index.astro` — a *"Where do you want to start?"* section above the catalogue, count computed from what renders rather than written as a literal. ⚠️ **Entry cards restyled after `site-reviewer` measured them as byte-identical to catalogue cards.** ⚠️ **The Getting Started section was removed from the catalogue on the owner's instruction** — see Part 4b |
| Principles index | `content/foundation/core_principles.md` — **new. 7 principles**, and a rejected-candidate log longer than the accepted list |
| Pilot: `getting_started.md` | new `## Key focus`; Overview rewritten to stop duplicating it; `## Check yourself` made optional; Route 3 glossary label fixed |
| Pilot: `rules_primer.md` | new `## Key focus`; screening framing; shorthanded icing at four layers; a penalty-bearing British divergence rescued from a dropped table; 48.5 propagated to three layers |
| 17 further documents | repairs, each traced to a finding in Part 3 |

## The metadata decision, and why it is not frontmatter

⚠️ **Frontmatter is READ ALOUD.** Probed against `scripts/md_to_speech.py`: a YAML block renders as the
document's **first spoken paragraph, ahead of the title**. `site/src/content.config.ts:7-9` records that the
corpus predates the site and the schema is deliberately empty. And `docs-meta.json` is **gitignored and
fully regenerated every build**, so it cannot hold anything a person wrote. **A new tracked manifest was the
only option that survives both facts.**

## The budget, measured and honestly reported

| Target | `getting_started.md` | `rules_primer.md` |
|---|---|---|
| ≤ 600 primary-path words | 16,991 → **17,157** | 92,329 → **93,343** |
| ≤ 250-word `## Key focus` | **248** ✅ | **474** ❌ — over, with a written reason, and it grew **THREE** times |
| ≤ 200 words to first safety-bearing instruction | 515 → **131** ✅ | already 95 ✅ |
| ≤ 3 clicks from homepage | 1 ✅ | 1 ✅ |

⚠️ **Both documents are LONGER than when the round started, and that is the honest result.** The Key focus
layer costs more than the Overview deduplication recovers; making a section audibly optional costs words by
construction; and promoting a silent disclosure into the audio costs words by construction.

**What was actually achieved is the bounded path, not the shorter document:** a listener reaches every
load-bearing instruction in `getting_started.md` in the first ~90 seconds instead of ~58 minutes, and the
first safety-bearing one at 131 words instead of 515.

⚠️ **`rules_primer.md`'s Key focus went 253 → 369 → ~434 → 474 words, and all three increases were
required by a safety finding.** ⚠️ **An earlier draft of this record said 434 and stopped at two increases;
a commit gate measured the staged text at 474 and blocked on it.** The first increase was a
`safety-reviewer` block: the layer taught how checks are policed and never said whether the reader may
check at all. The second added a *careless* limb, because the NHL book writes neither "reckless" nor
"careless" and a listener taking the corpus's word in its ordinary sense would conclude the opposite of
USA Hockey 620(b).

**The third is the written reason the gate asked for.** A `safety-reviewer` pass returned a **CRITICAL**:
the layer gave **one reason not to duck — a penalty — and named only two of the four books**, so a listener
under the NHL or USA Hockey heard by implication that the prohibition was **not theirs**, while the reason
that *is* theirs was absent. ⚠️ **The document's own Key Takeaway 6 already said it: *"Never duck. The
reason is anatomy rather than a rule, so it holds whether or not your book penalises the duck."* The Key
focus had fallen below its own document's ceiling.** The repair puts the universality and the mechanism —
a tucked chin straightens the cervical spine; a vertebra can break at walking speed — **in the same
sentence as the instruction**, and adds that a wide base with knees bent is **not** crouching to avoid a
check. It bought room by trimming an *"at his discretion"* gloss the Overview, KT4 and KT5 all still carry;
**net, the layer still grew, and the agent reported that rather than trimming to the number.**

**The plan's rule is that a required condition beats a length target and the exception needs a written
reason. This is that reason.** ⚠️ **The agent cut the citation apparatus the brief named and the layer
still grew — it reported the number rather than trimming to it, and said plainly that the remaining slack
is in the four habit bullets, which nobody has been asked to look at.**

⚠️ **Three orphan chunks were created and removed during that work** — a 145-character *"Everything below
is the reference layer"*, a 136-character *"4-on-4 is not a power play"*, and a 382-character fragment that
would also have been a `check_pointers`-shaped orphan. **Only rendering and comparing per section saw any
of them.**

---

# Part 2 — C3–C11 coverage

**All gates re-run after the last agent finished.** A pass taken while agents are live proves nothing,
and this round filed two false findings that way before the rule was applied.

| | |
|---|---|
| **C1** `check_links.py --quiet` | **exit 0** |
| **C2** `check_facts.py` | **exit 0** — 26 documents, 830 blocks, **5,552 facts** |
| **C9** `check_secrets.py` | **exit 0** — **320** tracked files. ⚠️ An earlier draft of this record said 316: the figure had been taken **before** the four new files were staged, and a commit gate caught it |
| also clean | `check_absolutes.py` (**39 documents + 408 caption units**), `check_geometry.py`, `check-arrivals.mjs` (**0 hard**) |
| index vs tree | ⚠️ **`git diff --name-only content/` and `git diff --name-only site/` both EMPTY** — the index matches the working tree everywhere this release changed a document or a page, so nothing was staged that nobody verified. ⚠️ **Bare `git diff` is NOT empty and must not be claimed to be:** `project/content_style_guide.md` and `project/plans/OPEN_ITEMS.md` are deliberately diverged, holding **two** separate pieces of work that commit afterwards: the **diagram-placement reversal** in the style guide's diagram section and the plan's rows for it, and — in the style guide's speech-layer section — a **stale-figure repair** raised as a non-blocking item of THIS release (*"All 37 documents carry a Sources trailer"* against a 39-document corpus). ⚠️ **The second is this release's own cleanup and is committing under the other one's message**, which is a deliberate choice recorded here rather than a tidy one: staging it alone would mean splitting a file that also holds the reversal. **A commit gate confirmed all of it is separable from the staged work and does not overlap it.** ⚠️ **EVERY VERSION OF THIS LINE SO FAR HAS BEEN WRONG, and no count of them is written here — the successive corrections are in the git history of this file, which is their owner.** The failures were: a path that meant the opposite of what was intended; an unscoped path asserting something the release's design does not satisfy; hunk line numbers that went stale inside a single editing pass; a characterisation of two pieces of work as one; and a trailing clause left standing after the sentence before it had been corrected. **Each was caught by a commit gate, none by its author.** ⚠️ **The lesson is the file's own, applied to itself: scope the path, name the sections, and never write a tally of your own errors into the sentence that keeps acquiring them** |

**Changed: 19 content documents modified, 1 created, 9 site/project files modified, 3 created.**

| File | rules | source | content | facts | safety | site |
|---|---|---|---|---|---|---|
| `rules_primer.md` | ✅ | — | ✅ | n/a | ✅ **3 passes** — blocked, repaired, **blocked again**, repaired, **CRITICAL on the third**, repaired | ✅ |
| `core_principles.md` | ✅ | — | ✅ **6 Majors fixed** | n/a | ✅ **2 Majors fixed** — see Part 4c | ✅ |
| `getting_started.md` | — | — | ✅ | n/a | ✅ | ✅ |
| `rink_map.md` | ✅ | — | ✅ | n/a | ✅ | ⬜ |
| `special_teams.md` | ✅ | — | ✅ | ✅ | — | ⬜ |
| `breakouts.md`, `defensive_zone_coverage.md` | ✅ | — | ✅ | ✅ | — | ⬜ |
| `defender.md`, `winger.md`, `center.md` | ✅ | — | ✅ | ✅ | — | ⬜ |
| `faceoffs.md`, `goaltender.md`, `neutral_zone_systems.md` | ✅ | — | ✅ | ✅ | ✅ (gt) | ⬜ |
| `language_and_glossary.md`, `on_ice_communication.md` | ✅ | — | ✅ | ✅ | — | ⬜ |
| `zone_entries.md`, `risk_management.md`, `puck_support_and_spacing.md` | — | ✅ | ✅ | ✅ | — | ✅ (rm) |
| `playing_without_the_puck.md`, `body_contact_and_battles.md` | — | ✅ | ✅ | ✅ | ✅ (bc) | ⬜ |
| `site/src/**`, `site/src/diagrams/*.mjs` | — | — | — | — | — | ✅ |
| `project/content_style_guide.md` | — | — | ⬜ | — | — | — |
| `CLAUDE.md`, `docs/README.md`, `project/site_build_specification.md` | — | — | n/a — figures only | — | — | — |

⚠️ **The four project documents above were missing from this table until a commit gate blocked on it.**
`project/content_style_guide.md` is a **governing document** and a gate treats an edit to it as a claim
change. What changed: `core_principles.md` and `language_and_glossary.md` added to the corpus list — which
is now **exactly** the 39 documents on disk, nothing missing and nothing dead — plus an advisory note that
the list's **paths** are stale while its **names** are the part to trust. **No rule was altered.**
The other three are `check_counts.py --update` rewriting a document count 38 → 39, **except one hand
edit**: `CLAUDE.md:479` read *"37 documents"*, a figure the checker structurally cannot see because
neither `DOC_PATTERNS` anchor matches *"The corpus. 37 documents in eight DIRECTORIES"*. ⚠️ **Three further
stale neighbours were found by the same gate and fixed**: `site_build_specification.md`'s phase 4 still
said 38, and `docs/README.md` said *"51 pages, ~6,100 internal links"* against a 53-page build reporting
10,678.

## C10 — took THREE passes, and the second and third both failed on the SAME defect

⚠️ **The first `site-reviewer` attempt could not run at all.** The Chrome extension returned *"Could not
verify this site's safety category"* for localhost, 127.0.0.1 **and example.com** — an extension timeout
that masquerades as a site block. **It refused to clear on static analysis and was right to:** *"I would
not clear C10. Not because I found a critical — because the dimension was not exercised."*

**The second attempt, after the owner re-authenticated, cleared it.** Console clean (zero messages, not
just zero errors), network clean (**zero off-origin hosts, zero non-200s**), no horizontal body scroll at
any width down to **320px**, keyboard focus ring seen and measured, search returns the new page first,
theme toggle persists across navigation, and the new page renders with **no audio player**, as required.

**It found one Major, and it was mine:** the five entry-point cards were **byte-identical to the 39
catalogue cards in every computed style** at 375, 768 and 1280 in both themes — *"the signal is 100%
content and 0% chrome, which is exactly the failure mode for a reader who skims a card grid."*
⚠️ **Fixed after clearance, so the fix itself is unreviewed:** `#start-here .card` now carries an accent
rail and an `--accent-soft` ground.

**It also refuted the brief twice, in the corpus's favour:** the *"172-word bold wall"* is the body of an
**amber `callout-warning`** — the most prominent element on the page, with the classification caveat
inside it, and **0.83 screen-heights, not "several"**. And a Critical it nearly filed — deep links
appearing completely broken — was **its own automation**: Chrome does not animate smooth-scroll in an
unfocused tab. With `scroll-behavior: auto` forced, anchors land at `top: 128px`, clear of both sticky
bars.

**Two further site findings, both content-owned and recorded rather than fixed:** `rules_primer.md`'s
Key Takeaway 9 is **1,256 words → 6.8 screen-heights at 375px**, with the "9." marker appearing once; and
`risk_management.md`'s `the-risk-map` figcaption is **634 words → 1,404px against a 279px figure — five
times the height of the picture it captions.**

### ⚠️ The third pass, and why the "fix after clearance" above was not safe

**The unreviewed fix broke the thing this release was assembled to close.** `#start-here .card` repaints
those five cards with an `--accent-soft` ground, and `.card__meta` exists in **exactly five places in the
whole repository — those five cards.** The two edits therefore touch the same and only elements. Changing
the ground repriced the text on it: `--text-faint` fell to **4.4926:1 light and 3.9834:1 dark**, and the
light figure is **marginally worse than the 4.4896 the rule had been rewritten to fix one edit earlier**.

⚠️ **Worse than the ratio: the CSS comment asserted in writing that it still held.** *"text colours are
untouched, so the .card__meta ratio measured at 5.21:1 light / 5.26:1 dark still holds over the tint."*
The light figure had been right on the old ground. **The dark one was never right for this element at
all** — 5.26 is `--text-faint` on `--bg`, the page background, where `.card__meta` never renders. A
contrast figure that does not name its ground is not a measurement, and this one had been copied into a
comment whose entire purpose was to record a contrast failure.

**Fixed:** `.card__meta` is now `--text-muted`, measured on the tint at **5.5347:1 light and 5.9249:1
dark**. Both comments were rewritten to say what happened rather than to assert the old numbers. The
colour now equals `.card__desc`'s deliberately — the 13px/14px step and a 7.2px `margin-top` carry the
hierarchy, and AA outranks a colour step. **The reviewer accepted that trade explicitly** and added the
one reservation worth keeping: *"7.2px and 1px are both near the floor of what carries a distinction, so
any future reduction to either would collapse it."*

### ⚠️ AND THE THIRD PASS FAILED TOO — on staging, not on CSS

**The fix was in the working tree and not in the index.** `git status` showed `MM`; the staged blob still
read `color: var(--text-faint)` and still carried both false assertions. **C10 is evaluated on the staged
diff, so a commit at that moment would have shipped the failure and the false comments together.**

⚠️ **Nothing in the toolchain could have caught it.** `check_links.py` and `check_facts.py` do not read
`site/`, and the hook gates on those. This is the divergence hazard `CLAUDE.md` names — *"a commit can
pass every mechanical gate while shipping a staged state nobody verified"* — **occurring in `site/`,
where the recorded instance and the recorded remedy (`git diff --name-only content/`) both name
`content/`.** The remedy generalises; the sentence did not say so. **It was found by a reviewer running
`git show :site/src/styles/global.css`, which no brief asked for.**

**Cleared after `git add site/src/styles/global.css` and confirming `git diff --name-only site/` empty.**

### What the third pass could not reach

**375px was derived, not painted.** `resize_window` reported success three times while the renderer
stayed at 1260 (`outerWidth` fell to 644, `innerWidth` did not), and the reviewer **stopped after three
attempts and labelled the result as derived** rather than reporting a viewport it had not seen: it parsed
every `@media` block in the served CSS and found the only one touching these tokens or classes is
`prefers-color-scheme: dark`. **So a width-triggered defect that is not a colour or size query — a
clipped meta line, an overflow — is outside this pass.**

⚠️ **It also nearly measured the wrong tree.** Three servers were listening (4321, 4399, 4400); the
`preview` wrapper printed **4400 despite being asked for 4399**, and 4399 was an unrelated Python server
of unknown document root. All three answered 200. **Every figure above is confirmed against the CSS
actually served on 4400**, fetched and read. **A port number you asked for is not the port you got.**

# Part 3 — the findings, and what each cost

## ⚠️ The finding of the round, which is about method

> **Converting an absence claim into a mechanism removes it from the corpus's own disclosure worklist while
> making it a stronger claim.**

`check_disclosures.py` searches for absence vocabulary. The moment a sentence stops saying *"not found"*, the
tool stops seeing it — **exactly when the claim became harder to defend.** Two of the four mechanisms written
today were false on arrival, **both falsified from inside reach**: one by a table 130 lines above it in the
same document, one by a study in the bibliography of the document it named as its authority. Full record and
open rows in [`OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md).

## Findings 1–12, by severity

1. **CONTRADICTED in live content.** `language_and_glossary.md` said the IIHF and Hockey Canada shorthanded-icing exemptions were *"unconditional"*. Both books carry the expiry test. **Cost: a defensive-zone draw with no change.** Repaired, and the correction then propagated to **ELEVEN further documents** — twelve counting the glossary itself. ⚠️ **This line said *"13 further"* until the sixth gate pass, and Part 4a three sections below it had the arithmetic right the whole time**: nine in the wave, plus `goaltender.md` and `faceoffs.md` from the two censuses. **The commit message drafted from this line inherited the error, and a gate carried it into its own first-pass report without measuring — three restatements of one uncounted figure.** The documents are `on_ice_communication`, `rules_primer`, `center`, `defender`, `goaltender`, `winger`, `breakouts`, `defensive_zone_coverage`, `faceoffs`, `neutral_zone_systems` and `special_teams`. ⚠️ **`rink_map.md` is NOT among them** — its staged diff matches on *icing* only inside its Sources trailer, which changed for the body-contact work.
2. **`safety-reviewer` BLOCKED `rules_primer.md`**: the new `## Key focus` taught how checks are policed and never said whether the reader may check at all. **The cardinal failure, in text this release created, in the layer built to be a beginner's first contact.** Repaired; re-review blocked again on a second ground; repaired again; cleared.
3. **`content-reviewer` cleared 3 of 11 files**, 12 Majors.
4. **`facts-reviewer` refused 3 of 7**, and found the icing correction had reached three documents' blocks and stopped — **ten more, three as a closed "two carve-outs" enumeration.**
5. **A diagram caption voiced the superseded claim inside the document that had already corrected it** — the renderer puts caption and prose in the **same chunk**. It then went stale **a second time the same day.**
6. **A disclosure denied, six lines above, what its own document relied on below** — and its falsifier was in its own Sources list. A previous round tested it and wrote *"not falsified"* without checking that list.
7. **`getting_started.md` asserted skipping the self-test "costs you nothing"** — the null that the meta-analysis retained two sentences later rejects at **g = 0.50, CI [0.42, 0.58]**.
8. **A Key focus grew 253 → 369 words** because naming the barred classifications is the only form that lets a reader recognise themselves. Generic *"ask your classification"* does not.
9. **A penalty-bearing British divergence existed only inside a dropped table** — two equipment misconducts eject you with no foul against anybody. 22 of 23 rows survive in voiced form; that one did not. **Now voiced. The table was not deleted or split.**
10. **`goaltender.md` was in no brief, no plan row and no verifier report.** Found because the glossary agent refused to treat its own file as the whole defect. **The single highest-yield action of the round.**
11. **Chunk headroom is per-section.** A brief's measurement for one section (321 chars free) was applied to another (~10 chars free) and silently pushed a closing imperative into a 37-character chunk. **No checker sees this.**
12. **`0:00` is spoken as "zero minutes".** Four agents hit it independently; all four rewrote around it. Two sites remain, recorded.

## ⚠️ Roughly twenty coordinator premises were refuted, every one by the agent that had read the file

A partial list, because the pattern matters more than the items: the shorthanded-icing taxonomy (relayed
into **four** briefs before a one-command census refuted it); IIHF 101.1 described as **barring** women's
body checking when it permits it; **CARHA framed wrongly three times in a row**, each differently; a
Hockey Canada column asserted in a table that has none; a `check_tables` constraint given for a table
already over every limit; Tulsky's Table 3 described as two columns when it has **six** and already prices
the risk; a 300-character facts cap that is **200** for that label; line numbers **carried in rather than
located**, off by four.

**None of it reached `content/`.** The instruction to refute the brief before acting on it is doing the work
the record says it does — and it is why the briefs in this round grew longer and more specific rather than
shorter.

---

# Part 4a — the icing cascade, and the method finding underneath it

**Larger than everything before it, and entirely caused by this release's own repair.**

A defect was found in `language_and_glossary.md` (Finding 1) and propagated to nine documents. ⚠️ **The
propagated wording was then found wrong in the multi-penalty case, independently, by `facts-reviewer`
and `content-reviewer`.** A `rules-verifier` pass settled it against all five books:

**The test is a comparison of ON-ICE NUMBERS, not "is a penalty running."** On a **5-on-3**, when the
first penalty expires you are **4-on-5 — still below strength, still exempt, in all five books.**

⚠️ **The sentence the corpus misread:** *"The action of **the penalized player** remaining in the penalty
box will not alter the ruling."* **Definite, singular — the one whose penalty just expired.** The corpus
rendered it as *"whoever is still sitting in the box"* and *"your teammate still sitting in the box"*,
which sweeps in a **different** teammate serving a **live** penalty. **That reverses the rule**, and
`breakouts.md`'s facts value — voiced alone — went further: *"and after it you are at full strength."*

## ⚠️⚠️ THE METHOD FINDING: a Note read alone said the wrong thing, and FIVE agents verified it

**Hockey Canada 6.7(b) Note 1, read entirely alone, states the corpus's misreading** — flat, unqualified,
quotable. It is completed only by **6.7(b) itself**, the rule it annotates, and by **Interpretation 3**,
whose *"on the ice, **for the purpose of equal numbers (or not)**"* is the parenthetical that does the
work. ⚠️ **A later pass found Hockey Canada has THREE flat-reading sentences, not one** — Interpretation 2
also opens flat and is settled by its own second half.

**The corpus cited that Note by name. Five agents re-derived it from primary text. All five confirmed it.
All five were right about the Note and wrong about the rule, because none read the Note against the rule
it annotates.**

> **A Note, an Interpretation, a casebook situation or a glossary entry is not a rule — it annotates one.
> Verifying it in isolation verifies nothing.**

⚠️ **That defeats `review_process.md`'s "re-derive from the book" as written, because the agents DID
re-derive from the book.** The failure is silent by construction: the sub-element is verbatim and says
what the corpus says it says.

## What the cascade also turned up

- **Two mis-citations in the corpus's own rules owner.** `rules_primer.md` cited **CARHA Note 2 to 65(a)** twice for an expiry test; Note 2 is the box-sitting limb. **65(d)** states the head-count test more cleanly than any other book.
- ⚠️ **The NHL rulebook writes neither "reckless" nor "careless" — anywhere.** Zero for both, in two editions, plain and `-layout`, against positive controls of 1,306 `penalty` and 103 `deliberat`. ***"Merely reckless" was the corpus's own word put into the NHL's mouth***, in a summary layer, where a listener reading it as "careless" concludes the opposite of USA Hockey 620(b). **The IIHF glossary does define it**, and was used.
- **The five books do not share a timestamp.** NHL and IIHF time it to the **penalty expiring**; Hockey Canada and CARHA to **the instant the puck is shot**; USA Hockey carries both. ⚠️ ***"Every book read here writes it"* was false** — what they share is the **count**, not the clock.
- **An authority uncited anywhere in the corpus**: the **IIHF glossary** definition of *numerical strength* — *"due to one or more penalties that they are serving"* — settles the 5-on-3 and the pulled-goalie case in one sentence, for the British layer.
- ⚠️ **`special_teams.md` did not hold Hockey Canada or CARHA wording until this round.** Pointers written at it earlier in the day aimed at wording that was not there. It holds all five books now.

## ⚠️ The census found what the dispatch missed — three times

| Census | Found |
|---|---|
| After the first repair | **`goaltender.md`** — in no brief, no plan row, no verifier report |
| After the nine-document wave | **`faceoffs.md`** (a facts value voiced alone: *"one released after it always is, box empty or not"*) and the **glossary headword**, which a reader consults precisely when they do not already know |
| Inside the repair itself | A third `faceoffs.md` site **two values above the one the agent was sent to** |

**The dispatch list is never the defect list.** ⚠️ **And the coordinator's census belongs BEFORE the
dispatch: one `grep` refuted a premise that had already been relayed into four briefs, and found three
more sites while doing it.**

**Final censuses, after the last agent: all three clean.** No generalising rendering survives; no
unqualified expiry framing survives; the only remaining `0:00` is in a Sources trailer, which is never
voiced.

# Part 4b — three owner instructions, given mid-round

Recorded in full in the plan. ⚠️ **The third reverses `content_style_guide.md:1417`** — a diagram now
**follows** the content that discusses it, except for an overview or summary diagram whose job is to give
the reader the frame. **The style guide must be updated or it becomes false**, and **252 markers currently
sit before a facts block against 2 after**, so this is a corpus-wide move rather than a tidy-up.

The second — reduce the text, targeting citation apparatus and low-level rule detail — is recorded with
the constraint that makes it hard: ⚠️ **both pilots came out of the first wave LONGER, and the reasons
were correct each time.** A safety finding required 116 more words; an agent measured every Common
Mistakes bullet in `rules_primer.md` and found the duplication was **scope qualifiers, not prose**.
**Cut apparatus, never a qualifier.**

**Also on the owner's instruction: the Getting Started section was removed from the homepage catalogue.**
It was a one-document section, and **four of the five entry points link into that document's own route
anchors** while the hero button reads *"Start with Getting Started"* — the same door three times. ⚠️ **The
document is untouched and remains in `structure.json`, the sidebar, PrevNext, search, the sitemap and both
feeds**, and `DOC_COUNT` still counts it, so *"Search all 39 documents"* is correct against six rendered
sections. A warning comment in `index.astro` went stale the moment the change landed — it exists because
an earlier draft got that count wrong — and was updated with the date and the reason.

# Part 4c — the safety pass on `core_principles.md`, and the Critical it found next door

**The first `safety-reviewer` pass ever to read `content/foundation/core_principles.md`.** It was run only
because a **commit gate blocked** the release for its absence — ⚠️ **the coordinator had flagged the gap
against itself in the dispatch brief and asked the gate to block rather than clear, and the gate did.**

**Its verdict on the rest of the document was strong and is worth recording**: *"principle 2 is sound, the
CARHA framing is the best in the corpus, and every quotation checks out."*

## Two Majors, both repaired

**1. Principle 7 named a case in its own premise and never answered it.** It opens on **head-on** contact
with the boards, then teaches only the angle and the skates-parallel postures. ⚠️ **The case it names —
already facing the wall, no time to turn — is the one USA Hockey has a specific answer for, and the
document gave none.** Worse, Common Mistakes **raised that case and closed the door on it**: *"Every part
of it is impossible to adopt in the last half-stride."*

**The repair** added USA Hockey's answer from `sources/ibc.txt:668-678` — *"distribute the force of the
impact over as wide a surface as possible, including putting your stick and gloves on the glass"*, with its
named common error — to the body **and** to Common Mistakes, keeping the owner's *"damage limitation, not
the target"* framing. ⚠️ **It also found the closed-door sentence was FACTUALLY WRONG**: head-up and
chin-off-chest is available at any instant and is the thing that matters most.

**2. A prohibition dropped from both spoken layers.** The body carried *"— not on the point of your
shoulder"*; `## Key focus` and Key Takeaway 8 did not. ⚠️ **The reason it outranks its size: the corpus
names *"take the wall on your shoulder"* as the FIRST of three pieces of rink-side advice the primary
material contradicts — and a positive instruction does not displace a pre-existing wrong one. Only the
explicit negative does.** Six words added to each layer.

## ⚠️ The repairing agent refuted the brief, and the refutation was load-bearing

The coordinator wrote that USA Hockey calls the angle *"the best of all the options."* **It does not** —
that is the corpus's own framing; USA Hockey says *"better puck control and less risk of injury"*,
comparative, never superlative. ⚠️ **Pasting the brief's phrasing would have put a fabricated attribution
into a spoken safety layer.**

## The same pass returned the release's only CRITICAL, in `rules_primer.md`

Recorded in Part 1 with its written reason. **The pattern worth keeping: the Critical was not that the
corpus said something false — it was that a summary layer gave a PENALTY as the only reason for a
safety instruction, and named two of four books, so the readers under the other two heard that the
prohibition was somebody else's.**

## What it upheld — fourteen existing warnings, re-derived and listed as untouchable

It re-verified every one against primary text and named them as things no later tidying pass may touch,
including that principle 7 keeps its two USA Hockey quotations attached to **different** hazards and says
so in terms — *"must not be merged into one"* — and that `core_principles.md`'s CARHA hedge, ending
*"before you take 'hold your ground' from anywhere, **this page included**"*, is **the strongest form of
that hedge in the corpus.**

# Part 4 — what this release could not have found

- ⚠️ **SUPERSEDED, and left here with its correction because `review_history.md` is reconstructed from these records.** An earlier draft of this section said *"No browser has seen any of it… `site-reviewer` is the largest single gap in this record."* **That was true when written and false by the time it was committed** — a second `site-reviewer` attempt, after the owner re-authenticated the extension, cleared C10 in a real browser. **See Part 2.** A commit gate caught the two halves of this record disagreeing. **What remains true:** the `#start-here` CSS and the homepage catalogue change landed *after* that clearance and are author-verified, not reviewed.
- ⚠️ **SUPERSEDED — and this one was blocking.** An earlier draft said *"`core_principles.md` has had no fresh review, and it is the document whose entire risk is over-generalisation."* **A `safety-reviewer` pass has since read it in full and returned two Majors, both repaired — see Part 4c.** ⚠️ **A commit gate caught this record still certifying the opposite of the repair it exists to record, and blocked on it.** It is left here with its correction because `review_history.md` is reconstructed from these records and would otherwise have said, permanently, that the file was never safety-reviewed. **What remains true:** no `source-verifier` has refetched its citations, and the `source` column for it is `—`.
- **Whether the repairs are right.** Every one is new text, and **new text has not been reviewed.** Several were written by agents that had just had a premise refuted.
- **Whether any of it is true beyond the books on disk.** No rulebook edition was refetched. The IIHF Situation Handbook, the USA Hockey Casebook and the NHL Situation Handbook were **not searched** on the icing question, by any of the five agents who verified it.
- **Whether the other ~5,500 facts values are sound.** `facts-reviewer` read **66 of 1,856** in its scope, plus every value in the corpus touching one claim.
- **Comprehension.** Nobody has tested a reader. The plan requires a U10 player/parent pair, an older-youth reviewer, an adult beginner, an adult rec player, a reference reader and a coach. **None of that has happened**, and the acceptance criteria are written in those terms.
- **Whether these are the right seven principles, or the right 248 words.** Both authors said the same thing unprompted: a reader deriving them by asking *"what does a nine-year-old's parent need before the first session"* would choose differently, **and that is the reader the acceptance criteria are written for.**

---

# Part 5 — the go/no-go decision the plan requires

The plan is explicit: *"Do not begin the full-corpus rewrite, quiz system, practice-plan catalogue, or
audio redesign until that release passes review and has a recorded go/no-go decision."* This is that
decision. It is written against the acceptance criteria as they are printed, one by one, and it says
which are met, which are met in a narrower sense than the words suggest, and which are not met at all.

## ✅ GO — but narrowly, and NOT for everything the plan gates behind this decision

**GO for:** the metadata schema, the homepage/pathway routing, the principles index, and the two pilot
documents — all of which is what release one was bounded to. **This release may be committed.**

**NO-GO for:** the full-corpus rewrite, the quiz system, the practice-plan catalogue and the audio
redesign, **all four of which the plan gates behind this decision, and none of which this release earns.**
The blocking reason is one criterion, below, and it is not a detail.

## The criteria, one by one

| Criterion | Verdict | On what evidence |
|---|---|---|
| An adult reader can reach detailed material without a beginner route becoming the only route | ✅ met | The `adult-detail` pathway exists, renders, and deliberately adds no new copy — its entry is the `systems` layer hub. Seen painted at 1280 in both themes. |
| Pilots and principles index have explicit audience/applicability/level/content-type decisions; all others explicitly unclassified | ✅ met | `audience.json` reconciles **39 of 39** against `content/`: 3 classified, 36 under an `unclassified` block carrying its reason. No document is silently absent. |
| Metadata has an owner and reviewer status; asserts no unreviewed hockey, rule, safety, age, league or prevalence claim | ⚠️ **SECOND HALF MET, FIRST HALF ACCEPTED RATHER THAN MET** — and two earlier drafts of this row overstated it | `fieldPolicy.requiresProvenance` names seven fields that can hurt somebody. **Five of the seven** — `ageApplicability`, `leagueApplicability`, `contactScope`, `supervisionRequired`, `parentRequired` — are `value: "unreviewed"`, `status: "draft"` on all three classified documents. ⚠️⚠️ **"With the reason written out" was TRUE OF TWO AND FALSE OF THREE, and the false clause survived two gate passes that had already read the row.** `ageApplicability` and `leagueApplicability` carry written evidence on all three documents; **`contactScope`, `supervisionRequired` and `parentRequired` carry `evidence: null` on all three — nine field instances with no reason at all.** ⚠️ **And the "owner and reviewer" half fails wider than the gate found: `owner` is `null` on FIVE of the seven fields, and `reviewer` is `null` on ALL SEVEN**, against the manifest's own `fieldPolicy.$comment` requiring *"owner/reviewer/status/evidence/revalidateAfter"* on exactly these. **So the criterion's first clause is knowingly accepted, not met, on the same terms as C5 below.** ⚠️ **The other two are different, and an earlier draft of this row swept them in and was blocked for it.** `safetyCritical` is `status: "draft"` but `value: true` — **an assertion, not a placeholder**, though it errs toward flagging risk rather than away from it. `audioMode` is **`status: "reviewed"`** — `"episode"` for the two pilots, `"reading-only"` for `core_principles` — **and its `reviewer` is `null`**, because it was verified programmatically against `podcast.json`'s 37-episode array rather than by a person. ⚠️ **A machine check recorded as `reviewed` with no reviewer is the one shape this field policy exists to prevent, and it is in the field policy's own output.** The substance holds: a gate confirmed `podcast.json` carries episodes for both pilots and **none** for `core_principles`, and `site-reviewer` saw that page render with no audio player. ⚠️ **The real defect is narrower than calling that a policy breach, and a sharper draft of this row lost the diagnosis: the schema uses ONE WORD, `reviewed`, for two different things** — a mechanically decidable fact about a tracked file, and a human judgement about a collision sport — **and `reviewer: null` is the only thing distinguishing them.** For `audioMode` a machine is the *correct* instrument and demanding a named human would be ceremony; the hazard the policy guards against is an unreviewed **judgement** presented as reviewed. **The vocabulary is not yet honest, and that is an open row rather than a fault in the field.** ⚠️ **The safety-bearing half of the criterion is met — nothing unreviewed is ASSERTED — and that is the half that can hurt somebody. The provenance half is not, and three successive drafts of this row made it look better documented than it is, which is the direction every documentation defect in this release ran.** |
| `readingMinutes` and `audioMinutes` use documented separate measurements | ⚠️ met by DROPPING the field, not by measuring it | `readingMinutes` is `null`. `audioMinutes` is deliberately not populated and `audioContract` records why: measured over all 37 episodes, duration is nearly independent of document length (**r = 0.301**; a document 22× longer yields an episode 1.27× longer), because these are Audio Overviews *about* the source, not readings *of* it. **The owner replaced the duration target with the spoken-unit contract.** The criterion as printed is not satisfiable and the record says so rather than inventing a number. |
| Existing links and document IDs remain stable unless a redirect is added | ✅ met | `check-links.mjs` over `dist`: 53 pages, 10,678 internal links, 5,697 with anchors, all resolve. No ID changed. |
| Release bounded to schema, routing, principles index, ≤2 pilot documents | ✅ met | 3 classified documents, of which two are the named pilots and the third is the principles index the plan itself calls a separate deliverable in this release. |
| Principles index contains only reviewed principles | ⚠️ met by NOT PUBLISHING IT as an entry point | `core_principles.md` exists and renders in the catalogue; its **pathway is `draft` and does not render**, because the document was written this round and a repair is new text. A `safety-reviewer` has since read it in full (Part 4c) — **that is one dimension, not clearance.** |
| Primary pilot path fully understandable without answering, clicking to reveal, or performing an activity; optional exercises visibly and audibly optional | ⚠️ NOT TESTED as written | The `Check yourself` sections were examined for the *null-effect* question and recorded as an open row. **Nobody has read the primary path end to end asking this question.** |
| A fresh content review confirms direct, authoritative teaching language; verification-process history absent unless it changes the reader's decision | ✅ met for what was read | `content-reviewer`, `facts-reviewer`, `rules-verifier` and `safety-reviewer` all ran. ⚠️ **Coverage is the limit, not the verdict** — `facts-reviewer` read **66 of 1,856** values in its scope. |
| The principle-to-corpus matrix is complete for the release scope, and every changed section either links its principle with rationale and qualifier or records why none applies | ❌ **NOT MET** | **No matrix exists.** The string `principle-to-corpus` appears in the plan and in this record and **nowhere else in the repository.** Seven principles were derived and the rejected-candidate log is longer than the accepted list, which is the right shape — but nothing maps them onto the practice, position, system and technique sections they are supposed to frame. ⚠️ **Measured, and worse than "no matrix": NOT ONE document in `content/` links to `core_principles.md`.** `grep -rl core_principles content/` returns **zero**. The principles index is reachable from the catalogue and from nothing the reader is already reading. |
| Comprehension testing — U10 player/parent, older youth, adult beginner, adult rec, reference reader, coach | ❌ **NOT MET, AND NOT STARTED** | Nobody has tested a reader. **The acceptance criteria are written in those terms and this release has no evidence of the kind they ask for.** |

## ⚠️ AND THE PROVENANCE HALF OF THE METADATA CRITERION IS ACCEPTED TOO

The row above says it; it is restated here because a reader of this record will take the criteria table
as the verdict. **`site/src/data/audience.json` does not meet its own `fieldPolicy`.** Nine of the
fifteen instances of the five draft fields carry `evidence: null`; `owner` is `null` on five of the
seven fields; `reviewer` is `null` on **all seven**, including the one field marked `status:
"reviewed"`.

⚠️ **What makes this worth a paragraph rather than a footnote is how it was found.** The row asserting
the opposite — *"with the reason written out"* — was read in full by a commit gate on **two** prior
passes and passed both. It fell on the third only because the gate was asked to re-verify a repair in
the same sentence. **A clause can survive an audit by riding on a claim next to it that is true**, and
the gate said so about itself: *"I missed this on both prior passes. It was there each time; it is not
a consequence of your repair cycle."*

## ⚠️ One gate condition is KNOWINGLY ACCEPTED rather than met, and it should be named as that

**C5 — citations refetched by `source-verifier` — has not run on `content/foundation/core_principles.md`.**
Its `source` column is `—`, and Part 4 lists this as a gap. **A gap and an accepted risk are different
things, and C3 asks for every dimension to be checked or explicitly declared out of scope.** So,
explicitly: **C5 is accepted for this release, not satisfied.**

The grounds, and they are narrow: every figure in that document comes from an owner document that
carries the same citation, and the owners have been source-verified; the one piece of provenance that
could have gone wrong — Tator — is handled in the text as *"the restater rather than the study"*. ⚠️ **What
this does not cover is a citation that is correct in the owner and wrong in the copy**, which is exactly
the failure a `source-verifier` pass exists to catch and exactly what nobody has looked for here.

## Why this is a GO anyway, and what the two ❌ rows actually gate

**The two unmet criteria do not block the release; they block what comes after it.**

The principle-to-corpus matrix is the thing the full-corpus rewrite would be *executed against*. Starting
that rewrite without it means every document decides for itself which principle frames it — which is the
corpus's oldest failure mode, restated as a project plan. ⚠️ **So: the matrix is a precondition of the
rewrite, not of this commit.**

Comprehension testing gates the same work for a different reason. This release routes readers; it does
not yet know whether the routes work. **Every judgement in this record about what a reader will
understand is an author's or a reviewer's judgement, and the plan asked for a reader's.**

## ⚠️ The honest summary, in one paragraph

**This release is well evidenced about its own construction and unevidenced about its effect.** Every
number in it is measured, every premise that was refuted is recorded with its refutation, and **every
false statement found inside this very record was caught by a commit gate rather than by its author —
each one recorded at the place it occurred, and no total written here.** ⚠️ **This sentence carried a
total until the fifth gate pass, and it was stale by the third**: it said *"three separate
self-contradictions"* while the record credited a gate with a catch in eight places, and the number was
wrong under either reading of its own term — two, if *self-contradiction* means the record's two halves
disagreeing; at least seven, if it means any false statement a gate caught. **It is the defect this
project names three times in `CLAUDE.md`, occurring in the record's own self-assessment, one paragraph
after the same pass fixed it in the style guide.** The count also understated the thing it was there to
demonstrate. **None of that is evidence that the site is easier to read.** The metadata asserts almost
nothing, the U10 entry point is a recorded gap rather than a route, and the principles index is published
in the catalogue but withheld as a door. **A reviewer who wanted to call this a no-go on the grounds that
the release's own stated purpose — readability for two audiences — has not been measured once would have
a fair case.** It is a go because the bounded scope was delivered and the boundaries were kept, and
because the two things it lacks are better done next than done badly now.

## What must exist before the next gate opens

1. **The principle-to-corpus matrix.** Seven principles against the practice, position, system and
   technique sections, each link carrying a rationale and a qualifier, or a recorded reason none applies.
2. **`core_principles.md` cleared by `content-reviewer` and `source-verifier`**, not only `safety-reviewer`,
   before its pathway flips from `draft`.
3. **A route for the U10/parent reader**, with the named safety reviewer the plan requires for any age or
   supervision label.
4. **One comprehension test with a real reader**, of any of the six kinds. One is not the plan's ask, but
   it is the difference between no evidence and some.

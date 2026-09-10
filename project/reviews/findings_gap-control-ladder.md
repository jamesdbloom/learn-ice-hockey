# Findings — gap control ladder

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 11 section(s).

---

### T0-P34 Owner hedged, borrower bare — the inverse of the usual direction

`risk_management.md` owns the turnover-cost grading and hedges it **twice** (*"coaching consensus, not
measurement"*). `neutral_zone_systems.md` stated it **flat** at `:12` (facts, voiced alone), `:18`,
`:58`, `:70` — and `grep -n "risk_management"` on that file returned **zero**. ⚠️ **The owner was not
linked from the document at all, including its Related header.** Fixed at `:12` and `:70`.

---

### T0-P35 A disclosure that UNDERSTATES the corpus, and its twin in a summary layer

`neutral_zone_systems.md:340` said *"only the neutral-zone figure comes from a published coaching
source"*. ⚠️ **`defending_the_rush.md:143` says in terms that HockeyShare prints *"1.5 stick lengths…
in the neutral zone and about 1 length in the defensive zone"*.** What is unsourced is the figures **as
line-anchored**. Fixed by restoring the owner's scope.

⚠️ **NOT FIXED — `defending_the_rush.md:913` (Key Takeaway 2) carries the identical compression, in the
summary layer of the OWNING document.** Same defect, in the layer that gets extracted. **Free file.**

---

### T0-P51 ⚠️ A SOURCE THE CORPUS NOW LEANS ON IS SCHEDULED FOR DELETION

The agent **fetched `hockeyshare.com/drill/189345` itself** — HTTP 200, 10,665 bytes — and confirmed
verbatim *"D1 tries to remain 1.5 stick lengths away from the forward in the neutral zone and about 1
length in the defensive zone."* **The premise held: the corpus looked less supported than it is.**

⚠️ **But the page carries a site banner: *"This drill is currently in the trash and scheduled to be
deleted soon."*** It is **user-submitted** (*"Posted By: hockeysean"*), created and last modified
**2014-11-09**. `defending_the_rush.md:930` calls it one of *"two further coaching pages found in the
same search"* — true today, and *"coaching page"* reads as editorial content rather than a nine-year-old
user drill in a deletion queue.

⚠️ **Six sites were scoped THIS ROUND on the strength of this page.** **Do NOT delete the citation** —
record the banner, the post date and the user attribution, and consider archiving. **`source-verifier`.**

---

### T0-P52 ⚠️ THE DISTINCTION THE ROUND PROPAGATED MAY COLLAPSE ON A FRESH READING

The agent's own closing warning, and it is the highest-value open item it left:

> *"I inherited the judgement that HockeyShare's '1.5 stick lengths **in the neutral zone**' does not
> supply the corpus's 'a stick and a half **at the centre red line**' — **and the centre red line is
> inside the neutral zone**, so the distinction is thinner than the corpus's wording implies. I
> propagated the owner's existing form rather than re-adjudicating it… **the corpus may now be scoping
> in six more places a distinction that a fresh reading of the source would collapse.**"*

⚠️ **Needs the CrossIceHockey and Edge Ice Academy pages read alongside HockeyShare. `source-verifier`.**

---

### T0-P52 — CLOSED. THE DISTINCTION HOLDS. Do not unwind the thirteen edits.

`source-verifier` fetched all three cited pages and tested every `red line`/`blue line` mention with a
160-character window scanned for an adjacent distance figure. **Four windows scored positive; all four
are proximity artefacts.** ⚠️ **No page of the three anchors a gap distance to a LINE.**

**Three reasons, and the first is the one that settles it:**

1. ⚠️ **THE CONTAINMENT ARGUMENT DESTROYS MORE THAN IT SAVES.** HockeyShare gives **1.5 for the whole
   neutral zone**; the corpus gives **2–3** there. **If containment licenses that page to source the
   red-line rung, it equally licenses it to source the neutral-zone rung — where it CONTRADICTS the
   corpus.** *"The same move cannot make a source evidence for one rung and against the rung above it."*
2. **Flat per-zone gaps cannot supply rungs of a progressive ladder.** The corpus's claim is about a
   **transition point**; a flat zone number is **silent** on where within the zone it applies, and
   silence is not support.
3. ⚠️ **Edge Ice Academy's page is ORGANISED BY LINE** — it carries a bullet headed `Defensive Blue
   Line:` **twice** — and both times gives **a direction, not a number**, while keeping the blue line and
   the zone behind it as separate rows. ⚠️ **The one source that organises itself by line declines to put
   a number at either. The corpus is following a distinction its own source draws.**

**Round 59's direction does not apply here. The rescoping was correct.**

---

### T0-P51 — `verified-unrepresentative`, and one string the brief did not have

Refetched: **HTTP 200, 10,665 bytes, byte-identical** to the prior fetch, no redirect, **not a soft-404**
(the host's soft-404 is 6,669 bytes titled *"Drill Not Found"*). All four strings confirmed **in rendered
text, none in an HTML comment**, each with a positive comment test. ⚠️ **Plus one nobody had:
*"(Used in 0 Plans)"* — on a practice-planning platform, the site's own statement that no coach has ever
used this drill.** Total rendered body: **1,456 characters.**

⚠️ **The quotation is sound; the DESCRIPTION is not.** `defending_the_rush.md:930` calls it a *"coaching
page"* **in apposition with Edge Ice Academy** — a bylined, dated, editorially-maintained article.
⚠️ **`:143` in the same document gets it right and calls it a drill. The trailer is the outlier.**

⚠️ **Archive status NOT ESTABLISHED, not absent** — CDX returned 200/0 bytes three times, **but a control
query returned `503 Internet Archive services are temporarily offline` in the same window**, while
another control did return rows. **Re-check when IA is healthy.** *"A page under a deletion banner with
no archive is a citation with a scheduled expiry date."*

**Two more, both provenance:** `crossicehockey.com` is a **restater** — its own body says *"courtesy of
Hockey Coach Vision"* — unrecorded in the corpus, though **no figure is drawn from that page**. And
⚠️ **the plural is unearned across all thirteen sites**: *"coaching **pages** do print…"* — **both numbers
come from exactly one page.** A singular is more accurate. *(`neutral_zone_systems.md:340` earns its
plural correctly, from two pages.)* ⚠️ **The one sourced rung of the ladder rests on a post bylined
`mark6mauno` — a username — on a site with an affiliate disclaimer. The corpus's *"single-sourced"* label
is upheld and arguably generous.**

---

### T0-P71 — the plural: my census was TWO SHORT, and my exemption was WRONG

**Nine sites corrected, not seven.** I missed `defending_the_rush.md:137` (a `Convention:` fact — *"those
numbers"*, being both) and `time_and_space.md:277`.

⚠️⚠️ **AND I TOLD THE AGENT `neutral_zone_systems.md:340` "EARNS its plural — its paragraph cites two
pages for a stick and a half". IT MAY NOT.** The agent read it and reported back: the paragraph
attributes *"roughly one to two stick lengths"* to one page and *"one and a half"* to another — **but the
Edge quote as this corpus prints it is *"one to two"*, which does not print "a stick and a half".** On
the evidence in `defending_the_rush.md:930`, **only HockeyShare prints it.** ⚠️ **It reported rather than
acted, because I had told it not to touch that file. Correct — but my exemption was the error.**

**Two more outside its ownership, same shape:** `rink_map_and_glossary.md:165` and `:603`.
⚠️ **And one that IS earned and must NOT be changed:** `how_to_watch_hockey.md:222` — *"other coaching
pages… do give gap distances in stick lengths"*. **Three pages do that.**

**Two deliberate extras it made, both good:** at the **owner** it named the page, because
`007.ssml` is immediately followed by `008.ssml` opening *"The two-to-three comes from **one coaching
page**"* — **a DIFFERENT page. Two bare "one coaching page"s back to back would have merged into one
heard aloud.** And the `.mjs` rationale comment said *"**Two pages do:**"* and then quoted **one** — ⚠️
**the comment that is the reason the caption exists was wrong at the root.**

---

### T0-P77 A singular and a plural two speech units apart

The caption's new singular now sits two units from a surviving plural in its host:
`how_to_watch_hockey.md` `023.ssml` — *"other coaching **pages**… do give gap distances in stick
lengths"* — then `025.ssml` — *"**One** coaching page does print a stick and a half and about a stick
length"*. ⚠️ **Not contradictory** — the plural is about pages giving gap distances generally, the
singular about the one page giving **both of these two numbers** — ⚠️ **but read aloud in sequence it
sounds like the corpus correcting itself mid-page.** `how_to_watch_hockey.md:222`. **Provenance, not
safety.**

---

### T0-P78 The gate's own limit, and it is the one that would unwind everything

> *"I checked the plural against the corpus's **own** enumeration of the search in
> `defending_the_rush.md:930`. **If that enumeration is itself incomplete** — if a fourth coaching page
> exists that nobody found — **then the singular I am blocking for is wrong and the plural was right all
> along.** Nobody re-ran that search this round, and I could not."*

⚠️ **So the whole singular/plural question rests on a search nobody has repeated.** `source-verifier`
re-fetched the three known pages this round and confirmed what they print; **it did not search for a
fourth.** **That is the next round's first question on this thread.**

---

### T0-P78 — the limit that could unwind the whole thread, now stated twice

Both the gate and the census agent independently reached it: **every classification rests on
`defending_the_rush.md:930`'s own enumeration of the search.** ⚠️ ***"If any of those refetches was itself
wrong or has gone stale, all seventeen sites are wrong together and this review would have CONFIRMED the
error rather than caught it"*** — the *verify-a-rule-by-reading-another-corpus-document* failure, applied
to a source. ⚠️ **And if a fourth page prints both numbers, the plurals just removed were EARNED.**
**Nobody has re-run that search. `source-verifier`, first thing.**

---

### T0-P106 ⚠️ THE SPECIFICATION ITSELF CARRIED THE REFUTED CLAIM — corrected

`project/content_style_guide.md:1825`, the Gap-control-distances owner row, stated it **twice**:
*"⚠️ **Only the FIRST rung is sourced.**"* and *"⚠️ **The accurate scope is that the red-line and
blue-line rungs are unsourced AS LINE-ANCHORED figures.**"*

⚠️ **Per CLAUDE.md's propagation chain — body → facts → Common Mistakes → Key Takeaways → every other
document → *the style guide if it records it* — this row was the corpus's most authoritative statement of
a false claim.** Ten content documents were repaired while the specification they answer to still said
the opposite. **The propagation chain has a last link and it was the one missed.**

**Corrected by the coordinator** (no agent owns `project/`): the retraction is explicit, the blue-line
rung is recorded as **published and line-anchored exactly** with the second page disagreeing at two, the
red-line rung as **contradicted rather than unsourced**, and the point that *"an absence claim and a
contradiction are materially different disclosures and must not be written interchangeably"* is now in
the specification rather than only in a review record. ⚠️ **`defending_the_rush.md:922` and `:143` were
STALE POINTERS — both had moved.** Replaced with an anchor (`#target-distances`), which does not go
stale, per this project's own lesson that a figure or line number copied out of its owner rots silently.

**Preserved deliberately:** the CrossIceHockey quotation; that *"stick and a half"* returns zero from
every **rulebook** in `sources/` (still true — that is about the books, not the coaching pages); the IIHF
Coach Development metric finding (*"maintaining a gap of 2.5-3 m"*, which `stick length` cannot see) and
its lesson ⚠️ ***"a unit is enough to hide a source"***; and the standing warning not to write that
coaching guidance *commonly* puts the last two rungs anywhere.

**Count updated: eight documents → TWELVE** now mention the ladder or its figures.

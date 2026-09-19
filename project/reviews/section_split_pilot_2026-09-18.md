# The first section split — 18 September 2026

**One section split, and the reason it was dispatched matters more than the split.**

`content/technique/body_contact_and_battles.md` · `§Attacking the net front` →
`§Attacking the net front` + `§Screening the goalie — what is actually legal`

## Why

A `facts-reviewer` traced **five of its six majors to one cause**: every net-front
block a crease-line correction needed to reach was at `HARD_MAX` 11, so the
correction went **sideways** into a section whose body did not support it, **ahead of
its body**, or **not at all**. ⚠️ **The style guide's own remedy — *"split the
section, on the seam the body already uses"* — had never been applied.**

## ⚠️ THE FINDING THAT OUTLIVES THE SPLIT

An agent noticed while working that `scripts/check_facts.py:218` computes
**`coaching = len(body) - rules`** — ⚠️ **so `MAX_COACHING_FACTS` EXCLUDES `Rule:`
lines by construction**, and a rules-heavy section accumulates exactly those.

**Censused across the corpus: 106 of 106 blocks at `HARD_MAX` sit UNDER the coaching
cap. It has never fired on one.**

⚠️⚠️ **The cap designed to catch over-stuffing BEFORE it becomes structural is
structurally incapable of seeing the state it exists to prevent.** `HARD_MAX` does
all the work, **and only once a block is already full** — at which point the only
remedy is a split.

⚠️ **And `HARD_MAX` is SILENT.** A full block fails no gate. **It simply refuses the
next correction.**

⚠️ **This must NOT be "fixed" by raising a cap or counting `Rule:` lines toward the
coaching one.** The exemption is correct — a section citing five books needs five
`Rule:` lines. **The finding is that the corpus has 106 sections doing two jobs.**

## ⚠️ THE DISPATCHER'S RATIONALE WAS WRONG AND CHANGED THE SPLIT

The brief claimed *"all six `Rule:` lines trace to the 'Screening is normally legal'
bullet"*, implying a **5/6** split. ⚠️ **The give-ground fact traces to the PRECEDING
bullet**, which quotes 69.3 and Situation 6 D in terms. **Acting on the rationale
would have moved a fact away from its own body — the exact defect the split cures.**
**The correct split is 6/5.**

⚠️ **And the brief contradicted itself:** its constraints section said *"in whichever
half their instruction lands"*, which anticipated this. **The agent noticed; the
dispatcher had not.**

## Also corrected by the agent
- ⚠️ **The dispatcher named one anchor as having zero references and did not mention
  `#defending-the-net-front`, which has FOUR** (`body_contact_and_battles.md:181`,
  `:1011`, `goaltender.md:1143`, `:1146`). **Unchanged — the new heading went in
  above it.** `#9-net-front-battles` has two inbound refs; also unchanged.
- ⚠️ **A propagation nobody anticipated:** *Check yourself* item 11 pointed at the
  section and **its question spans BOTH halves** — crease line and which book answers
  two ways in the new half, the give-ground cost in the old. **Pointer updated to
  name both.**
- **House precedent found, not invented:** `hockey-iq/playing_without_the_puck.md:447`
  is `### Screens and picks — what is actually legal` — **the sibling document splits
  this exact way.** The heading matches it.

## ⚠️ A MEASUREMENT TRAP WORTH KNOWING

Re-measuring the anchor cost returned **1 reference, not zero**. ⚠️ **The hit was the
plan row DESCRIBING the grep. Recording a measurement made the measurement return
itself.** The other apparent hit was the page's **own** ToC entry, generated from the
heading. **Real inbound references: zero.**

## What did NOT change
**No fact was edited, added or deleted.** Order preserved; the block split 6/5.
**The give-ground `Rule:` fact and the screening-cost `Key:` line both survive**, each
in the half its instruction lands in. **The post/spine limb is untouched.**

## The referent chain — proved, not assumed
`:1078`'s *"And that instruction…"* takes `:1077` as antecedent **across a chunk
boundary**. The agent rendered HEAD's file and the new one into **separate scratch
content trees** and diffed flattened chunk text: **214 chunks before and after, only
four differ** — the three at the split and the pointer. **Same antecedent, still the
final sentence of the immediately preceding chunk.**

## Gates and build
`check_links` · `check_facts` (**840 blocks**, was 839) · `check_facts --near`
(**no new near-cap lines**) · `check_absolutes` · `check_geometry` · `check_secrets` ·
`check_counts` — **all 0.** Build exit 0, chain reached `check:links`: **53 pages,
10,926 internal links, 8 bundles / 8 PDFs.** **New anchor regenerated in all three
places; `#defending-the-net-front` intact.**

## ⚠️ OPEN — reported by the agent, not acted on
- ⚠️ **The new section has imperatives in its body that never reached its block.**
  *"Keep your skates off the line, not merely out of the blue"* and *"Standing a
  skate's width further out costs you nothing in any of the four books"* — only one
  `Rule:` tail extracts any of it. **The style guide's own test says that disqualifies
  a block from the all-`Rule:` exemption.** ⚠️ **It now has six facts of headroom.**
  **The agent deliberately did not spend it: *"the headroom is not mine to spend."***
- **Whether the new heading NAME is right**, read in the rendered ToC beside its two
  siblings. ⚠️ **A three-heading sequence whose middle is pure rules exposition may
  read as the corpus foregrounding rules over play.** `content-reviewer`.
- **Whether the diagram is now in the right subsection.** Reasoned from caption
  content and `d09b318`'s principle; **never seen on a rendered page.** `site-reviewer`.
- ⚠️ **No fact was re-verified against primary rulebook text this session** — none was
  changed, but a `rules-verifier` pass on the new block has not happened.

## What this could not have found
Whether the split relieves the defect it was dispatched for. ⚠️ **The agent proved
the block now has room; it did not test whether any PENDING correction fits, because
none was named to it.** And whether the ToC slug Astro derives matches the one
`check_links.py` derives — **the two slugifiers agreeing is an assumption**, though
nothing points at the anchor, so the blast radius is nil.

---

# Addendum 5 — `site-reviewer`, on the rendered page

Ran after the split, against `dist/` built at 13:12. ⚠️ **The Chrome extension was
unavailable** (`tabs_context_mcp` failed three times, *"Could not verify this site's
safety category"*); the agent stopped retrying per its brief and drove **headless
Chrome 153 over CDP** instead, emulating viewport and `prefers-color-scheme`. All four
cells (1440×900 and 375×812, light and dark) on the primary page, plus 320×720 for
reflow.

⚠️ **It did not trust the "build is current" claim it was given.** It re-ran
`check-links.mjs` against `dist/` (*53 pages · 10,926 internal links · 5,876 with
anchors · all resolve*), confirmed 8/8 PDFs and 8/8 EPUBs at 13:12 and 8 print bundles
at 13:11–13:12, and found the new heading in the built HTML, the print bundle, the
markdown download **and** the PDF. The build did include the change.

## The three questions this record deferred, now answered from the page

**1 · The diagram is correctly placed.** Rendered DOM order inside `## 9. Net-Front
Battles`:

```
H3 #attacking-the-net-front  →  dl.facts (6)  →  ul (prose)
H3 #screening-the-goalie--what-is-actually-legal  →  dl.facts (5)  →  ul (prose)  →  FIGURE screen-the-goalie-sightline
H3 #defending-the-net-front  →  …
```

**The new heading did not cut between the prose and the figure** — `d09b318`'s
principle holds on the page, at all four cells. **One qualification it measured rather
than asserted:** the caption is two things, and the *geometry* half is explained by the
*Attacking* prose now **2,079 px (desktop) / 5,150 px (mobile)** further up, across a
heading and a 441 px facts block. ⚠️ **That distance is not new — the split did not
move the figure and the same prose intervened before.** Over half the caption is
legality, and the figure's id is `screen-the-goalie-sightline`. **No change
recommended.**

**2 · The ToC reads as an existing convention, not a new one — and this is precedent,
not taste.** ⚠️ **This record named ONE precedent and named it at the WRONG LINE.
There are TWO, and the line was `:445`, not `:447`:**

| File | Sequence |
|---|---|
| `content/technique/puck_handling.md:400, 423, 460` | `Back into the checker` → `The free hand and the arm bar — what is actually legal` → `Spinning off pressure` |
| `content/hockey-iq/playing_without_the_puck.md:431, 445, 468` | `Change of direction` → `Screens and picks — what is actually legal` → `Running a legal route through traffic` |
| `content/technique/body_contact_and_battles.md:1058, 1075, 1089` | `Attacking the net front` → `Screening the goalie — what is actually legal` → `Defending the net front` |

⚠️ **The stronger of the two is `puck_handling.md` — the sibling in the SAME
directory — and this record did not have it.** The agent cropped the rendered ToC rail
for all three at one viewport: they scan identically, same indent, same two-line wrap,
same em-dash suffix. The new entry is the **third instance**, not the first.

**Counter-evidence it reported rather than suppressed:** an H4-nested form also exists
(`body_contact_and_battles.md:299`, `on_ice_communication.md:251`), and the rendered
ToC **does** indent H4 a level deeper, so that form would have scanned as subordinate.
**Both conventions are live**; the H3 form is the one the two nearest analogues use.
**The gate was right to ask, and the answer is keep it.**

⚠️ **Scope limit worth recording: `nav.toc` computes to `display: none` at 375 px, and
the header "Contents" control is an `<a href="/">` to the home page, not a drawer.
There is no on-page table of contents on a phone at all.** The whole ToC question is
desktop-only. **Pre-existing, not a regression.**

**3 · All six anchors click through.** Navigated in the browser, not inferred:
`#9-net-front-battles`, `#attacking-the-net-front`,
`#screening-the-goalie--what-is-actually-legal`, `#defending-the-net-front`,
`#6-receiving-a-hit-safely`, `#5-delivering-a-legal-body-check` — every one lands at
top 128 px, and sticky chrome bottoms out at **113 px**, so each clears it by 15 px in
both viewports. **The new slug is in the Pagefind index.** ⚠️ **This closes the record's
own open assumption that Astro's slugifier and `check_links.py`'s agree — they do,
measured.**

## Major — the split's one real cost on the page

**The five-`Rule:` block reads as a wall of citations, and the numbers are worse on a
phone.**

| Block | Labels | @1440 | @375 |
|---|---|---|---|
| Attacking | `Technique, Key, Read, Technique, Never, Rule` | 420 px (0.47 vh) | 1.21 vh |
| **Screening** | **`Rule, Rule, Rule, Rule, Rule`** | **441 px (0.49 vh)** | **1,147 px — 1.41 vh** |
| Defending | `Priority, Action, Technique, Rule×4, Convention, Read, Never` | 883 px | — |

⚠️ **The facts panel's left column is a TYPE column — with five identical entries it
carries zero bits**, and on a phone the reader scrolls a screen and a half past a
column reading `Rule Rule Rule Rule Rule`. **Cause is content, not CSS:** the split
sorted the eleven facts by kind, which is defensible, and this is the consequence.

⚠️ **The agent refused to propose wording and said why:** *"five of these are genuinely
`Rule:` facts and relabelling one to fit the page would be a lie about its kind."* Its
two options: **(a) accept it — the wall is honest, the section IS rule exposition; or
(b) check whether any of the five is better carried by the surrounding prose.**
**`facts-reviewer` and `content-reviewer`, not `site-reviewer`.** → `OPEN_ITEMS.md`.

## Minors
1. **No ToC scrollspy anywhere on the site.** Zero elements with an active class or
   `aria-current`; `TableOfContents.astro` has no script — by design. **Site-wide,
   pre-existing.** Recorded because D15 lists ToC tracking and **silence on a
   dimension is the failure mode.**
2. **Empty `<p>` elements bracket every diagram**, including untouched ones. Cosmetic,
   pre-existing.

## Passing, measured not assumed
Facts blocks render as styled panels on the site **and in the print bundle**; callouts
carry glyph + text + bar, so **nothing depends on colour alone**; **no horizontal body
scroll** at 1440, 375 or 320, all three tables scrolling inside their own wrappers;
theme toggle **exercised, not simulated** — six samples at 70 ms from navigation start
all read `data-theme=dark`, **no flash**; facts-panel contrast **AAA in both themes**
(7.3:1 light, 7.5:1 dark); one `<h1>`, focusable skip link, all 8 figures with alt
text; **all 49 sitemap URLs 200**, and the three built pages absent from it are
correctly absent — including `/foundation/rink_map_and_glossary/`, which is a 401-byte
**redirect stub with a canonical, not stale pre-split content**. `pdftotext` on the
397-page technique PDF finds all three headings **in the correct order** and the
updated self-check pointer naming both sections. **Zero console errors, zero failed
requests, zero off-origin requests** across four pages.

## ⚠️ A near-miss it reported against itself
Its first attempt to confirm the heading in the PDF — a raw zlib scan of 2,388 content
streams — returned **"not found"**. ⚠️ **That was a FALSE NEGATIVE from font subsetting,
and reporting it would have been a fabricated finding.** `pdftotext` settled it. **The
agent recorded the near-miss as the finding.**

## What this method could not have found
One headless engine with emulated metrics — no real device, no touch target, no iOS
sticky-header behaviour. **No screen reader was run, so how the five-`Rule:` block
actually SOUNDS is unknown — and that matters more than usual here, because each of
those lines is voiced alone with a 300 ms break either side.** The production
CloudFront clean-URL rewrite. Audio playback. The EPUBs, confirmed to exist and never
opened. ⚠️ **And whether the ToC precedent it found is itself CORRECT — it established
consistency, not correctness. If `puck_handling.md` and `playing_without_the_puck.md`
are wrong, the split is now wrong in three places.** Above all: ⚠️ **a page rendering
correctly says nothing about whether what it says is true.** Whether NHL 69.4 reaches
contact only, and whether the split put each of the eleven facts on the right side of
the line, are `rules-verifier` and `facts-reviewer` questions and nothing here touches
them.

---

# Addendum 6 — the safety CRITICAL, and a repair agent that DIED MID-RUN

## The CRITICAL

A `safety-reviewer` dispatched after the split graded the document **CRITICAL**:

> *"A reader under USA Hockey or Hockey Canada is taught, in the document whose entire
> subject is contact, that the price of contacting a goaltender at the net front is a
> minor. In their own book there is no bare minor available for it, and one tier is an
> automatic ejection. They take a shove braced into a goalie, expect the box, and leave
> the game."*

Its evidence, **relayed here and NOT verified by the coordinator** — a `rules-verifier`
is checking every limb of it as this is written:

| Book | Relayed location | Relayed wording |
|---|---|---|
| USA Hockey 607(c) | `sources/usah.txt:3680` | *"A minor plus a misconduct or a major plus a game misconduct"* |
| Hockey Canada 8.5(b) | `sources/hc.txt:7009` | *"will be assessed"* — mandatory |
| HC 8.5 preamble | `:6985` | onus *"always on the attacking player"* |
| HC 8.5(a) Interp. 1 | `:7029` | contact disallows the goal *"regardless of whether the contact occurs inside or outside of the goal crease"* |

**Eleven sibling documents carry this correctly. This one did not.**

### ⚠️ Why the SPLIT is implicated rather than exonerated

The omission was **pre-existing** — the split did not create it. The reviewer's
reasoning for grading it here anyway, and it is the finding worth keeping:

> *"The split created a section that is titled and indexed as the place where
> goaltender legality is answered… A section that advertises being the answer, names
> two books, and gives only their permissive limb is worse than the same facts buried
> mid-block. The omission was pre-existing; the split promoted it."*

⚠️ **And the split is also what made the repair possible.** The correction could not
land this morning because the block was at `HARD_MAX` and refusing everything. **It has
now taken four more facts.**

### One judgement the reviewer refused to inflate

On the D10 style non-conformance the commit gate raised, it graded **style, not
safety**, and gave a precise reason: the imperative *is* present in the block as a
`Rule:` tail; only its justification is not. *"Nothing a player does is altered by the
omission, which is my line for D11."* ⚠️ **A reviewer that grades DOWN when the evidence
says so is worth more than one that grades everything up** — and this is the same
reviewer role that, earlier in the same session, **fabricated a rulebook claim**. Both
facts belong in the record.

## ⚠️⚠️ THE REPAIR AGENT DIED MID-RUN, AND THE TREE IT LEFT PASSES EVERY GATE

The agent dispatched for the critical plus two majors **terminated on an API error**
(`ENOTFOUND`) partway through. Its final transmitted line was
*"Now the body bullet and the Common Mistakes bullet."*

⚠️ **That line is not a reliable account of where it stopped.** The diff shows the body
bullet **and** the Common Mistakes bullet both present — it had done more than its last
message said. **An agent's last words describe what it was about to do, not what it
did. Read the diff, never the transcript tail.**

**What it had landed, measured from `git diff`:**
- **4 new facts** — one `Key:` (legal is not safe) and three `Rule:` carrying USA Hockey
  607(d) Note 1 / 607(c) / 607(e), Hockey Canada 8.5(a)–(d) and Rule 7.4, and the
  Hockey Canada onus clause.
- **2 new body bullets** — the two-books-that-leave-your-screen-alone-do-not-leave-your-
  contact-alone paragraph, and the "none of that makes the spot a safe one" paragraph.
- **A Common Mistakes bullet** rewritten, and the Sources trailer extended.
- Block: **5 facts → 9**, coaching count **1**, headroom **2**.

### ⚠️ The process finding, and it is the reason this addendum exists

**All six gates pass on the tree the dead agent left.** `check_links`, `check_facts`
(840 blocks, 5,640 facts), `check_absolutes`, `check_geometry`, `check_secrets`,
`check_counts` — every one clean, on text that **stopped being written halfway through
and was reviewed by nobody.**

⚠️ **This is the "staged half-done propagation" hazard in a new form, and it is worse:**
that one at least required someone to `SendMessage` a finished agent. **This one needs
no mistake by anybody.** A network error is enough. ⚠️ **And the failure is SILENT IN
THE FLATTERING DIRECTION — a partial repair looks exactly like a complete one to every
checker, because the checkers test conformance, not completeness.**

**So: an agent that terminates abnormally leaves findings, not a result.** The work goes
back through review from the start. It cannot be adopted on the strength of a clean
gate run, and **the gates passing is evidence of nothing here.**

## Not cleared — three reviews are live as this is written
- `rules-verifier` on all nine facts and the new body bullet. ⚠️ **Its first task is
  the IIHF 42.4 claim**, which is a rewritten descendant of the fabrication this
  session already caught once.
- `safety-reviewer`, fresh, told explicitly that **over-correction is not the safe
  direction** — stating an ejection as automatic where the book gives discretion is a
  different error, not a lesser one.
- `facts-reviewer` on the block's shape: **8 `Rule:` lines and 1 `Key:` line, and no
  gate can ask whether that is a facts block or a rulebook digest.**

**Nothing here is committed. The commit gate has blocked this change five times and has
been right every time.**

---

# Addendum 7 — the fresh `safety-reviewer` on the repair: TWO NEW CRITICALS, both propagation

The repair was re-reviewed by a `safety-reviewer` that did not write it. It verified
against primary text in its own session — USA Hockey 607 in full (`usah.txt:3663-3705`),
Hockey Canada 8.5 preamble, (a)–(e) and Interpretations 1–4 (`hc.txt:6981-7060`) and
Rule 7.4 (`:6056-6085`), NHL 69.3 (`nhl_rules.txt:7194-7218`) and Reference Table 14
Situations C–F (`:12330-12380`).

## Verdict on the original CRITICAL: **PARTLY RELIEVED, and no over-correction**

The two-book price is now correct in **three** layers — body `:1090`, facts `:1084`
and `:1085`, Common Mistakes `:1554` — and each was checked against the book.

⚠️ **The reviewer specifically hunted the over-correction the brief warned it about and
did not find one.** Facts `:1085` says *"at the referee's discretion"* for the violence
limb and *"mandatorily"* only for the charging limb, **which is exactly what `hc.txt`
says**; `:1084`'s *"writes no bare minor"* is true **and is not the same claim as
"automatic ejection"**. ⚠️ **This matters because the session's earlier fabrication was
in precisely this direction. The repair priced the books accurately and inflated
nothing.**

## CRITICAL C1 — the correction reached three layers and stopped at Key Takeaways

`:1655`, Takeaway 9: *"**And if a goalkeeper leans into you to establish position in the
crease, give ground at once** — NHL and IIHF 69.3 disallow a goal scored while you hold
yours."*

**The instruction survives; the price does not.** ⚠️ **This is the original CRITICAL's
hazard verbatim, surviving into the layer most likely to be read alone.**

⚠️ **And the context aggravates it rather than mitigating it:** the *same takeaway*
prices all four books for kicking, slew-footing, checking-from-behind and the crease
line. **A reader who has learned that this takeaway prices every foul across four books
reads the silence on goalie contact as "nothing more to know."**

**Layers:** body ✓ `:1090` · facts ✓ `:1084`, `:1085` · Common Mistakes ✓ `:1554`
(*"the best-written instance in the document"*) · **Key Takeaways ✗**

## CRITICAL C2 — the facts line REMOVES the deterrent, in the layer voiced alone

`:1066`, in the **`Attacking`** block — the half the split left alone:

> *"Rule: NHL and IIHF 69.3 — … you must "give ground" at once or "will receive" a
> penalty "whether or not a goal is scored", a minor in the NHL's words; both books'
> Situation 6 D, a table row, assesses none where the goal went in"*

⚠️⚠️ **Voiced alone with a 300 ms break either side, the LAST CLAUSE is what the
listener is left holding: *no penalty where the goal went in*. The line never says the
goal is disallowed.** So the sentence a listener acts on is **"hold your ground, and if
it works, it's free"** — a positive incentive to do the one thing the section exists to
prevent.

**Both halves of the source say otherwise, and the line quotes the penalty half of each
and drops the disallowance from both:**
- `nhl_rules.txt:7203` — *"…does not immediately vacate his current position in the goal
  crease (i.e. give ground to the goalkeeper), and a goal is scored, **the goal will be
  disallowed.**"*
- Table 14 Situation D, `:12350` — *"**Goal is disallowed.** A minor penalty is not
  assessed (loss of goal only)."*

The body carries the counterweight at `:1073` (*"so on either reading standing your
ground pays you nothing"*) **and it does not reach the block.**

⚠️ **Key Takeaways carries the disallowance and ONLY the disallowance — the exact mirror
image of this defect.** Between C1 and C2 the two halves of one rule are in two layers,
**and neither layer has both.**

**Room exists:** the line is **281/300, 19 characters free**, and `--near` does not list
it. ⚠️ **Do not trade out the *"a table row"* hedge** — the table and the rule text
genuinely conflict on the minor, so that hedge is load-bearing.

## MAJOR M1 — nine facts, and not one says what to DO

The Screening block is `Key:` + 8 × `Rule:`. **The `Key:` line is about shot-lane
exposure and face protection.** ⚠️ **No line in the block says what to do when a goalie
leans into you, or that a screen never needs to touch anybody** — that instruction
exists only at the very end of body bullet `:1090`.

**A listener hears eight sentences about what things cost and one about helmets.**
**Room: 2 fact slots and 7 coaching slots free.** *"The fix is an added `Action:`/`Never:`
line, not a rewrite of an existing one."*

## MAJOR M2 — the split left one question's answer in two blocks, and the reader arrives at the wrong one first

`### Attacking the net front` holds the braced-contact instruction and the give-ground
duty, and its body closes *"It is an NHL and IIHF provision; Offensive Zone Play sets
out the rule and the two tables in full."* ⚠️ **There is no forward pointer to
`### Screening the goalie` fifteen lines below, which is where USA Hockey and Hockey
Canada are priced.**

⚠️⚠️ **And the second consequence is worse than the first: *"It is an NHL and IIHF
provision"*, read with no forward pointer, READS AS AN EXEMPTION.** It is not one —
`hc.txt:6984` puts the onus *"always on the attacking player"* and requires an effort to
avoid contact *"in all circumstances"*, and `usah.txt:3686` says a goalkeeper *"is NOT
'fair game'"* even outside the privileged area. **A reader who concludes "my book has no
give-ground duty" has been made MORE confident than the NHL reader, in the section that
teaches bracing.**

⚠️ **This is the clearest evidence yet that the split has a cost the pilot did not
anticipate: a `###` heading is a separately anchored, ToC-linkable entry point, so
"further down the same section" stopped being a safe place to put the other half of an
answer.**

## Minors
- **`:1081` voiced alone is a permission whose carve-out is three utterances away.**
  *"Neither USA Hockey nor Hockey Canada reaches a screen set from outside the
  crease…"* — *"reaches"* does not say what for. ⚠️ **Headroom 7 characters (293/300) —
  a substitution problem, not an insertion one, and not worth trading anything out for.**
- **Check-yourself Q11 asks what holding your ground costs without asking under which
  book.** It does point at both sections — **more than the body does.**

## Upheld on re-verification
`:1064`'s *"but never against the goaltender"* — *"the strongest single line in either
block"*, safe voiced alone and scoped to no book, correctly, because all four reach
goalie contact. `:1065`'s goal-post limb survives isolation with its *why* intact. And
**the give-ground duty is in a `Rule:` fact with its number and penalty rather than
evicted into a `Technique:` line** — the eviction that `--near` exists because of has
been repaired here.

## What this method could not have found — and one gap it names is serious
⚠️ **Every IIHF claim in both sections is unchecked by this pass** — it deliberately left
the IIHF to `rules-verifier` to avoid duplication. **So the British reader's book is the
one book in this section nobody in that pass checked.** Also unchecked: the three
documents this section names as owners (`offensive_zone_play.md`,
`playing_without_the_puck.md`, `rules_primer.md`) — ⚠️ **if the two-book tiers stop at
this document, its pointers are sending readers somewhere that does not have them.**
And: *"No grep tells me whether a screener who gives ground correctly, at speed, with a
defender under their arms and their eyes on the point, can actually avoid the
goaltender in the space available."*

---

# Addendum 8 — `facts-reviewer` on the repaired block: a THIRD critical, and the shape question answered

⚠️ **It verified the brief's shape claims itself rather than taking them.** `check_facts`
passes (54 blocks, 424 facts in this document); the block is **9 = 1 `Key:` + 8 `Rule:`**;
`--near` lists **no line of it within 6 characters**, measured headroom **4–84 chars**,
tightest at `:1080` (296/300). It confirmed the byte-identical move from `git diff`.

## ⚠️ It refuted the coordinator on BOTH points relayed to it

**1 · The rule wall is not a finding, by an independent method.** Its own baseline:
**66 of 840 blocks carry ≥8 `Rule:` facts**, 11 carry 10–11, and four are 100% `Rule:`
at ≥7 — including **`body_contact_and_battles.md:1348` at 11 of 11**. ⚠️ **The style
guide sanctions the form directly** and warns that padding such a block to reach the
3-fact floor *"would break extract-never-author — which outranks the floor."*
**A recommendation to thin the rule lines would break a convention 66 sites deep.**

**2 · The chunk-boundary worry is not supported by the tools, and the coordinator should
not have raised it as one.** ⚠️ **`check_chunk_tails.py` DOES fire on chunk 108 with the
`Key:` line as its tail — and by its own test (*"does this still tell the truth if the
listener stops here?"*) the line is self-contained and NOT a defect.**
`check_chunk_splits.py` reports **0 split pairs** in this document. *"Neither tool
supports a finding on the boundary itself."* ⚠️ **The real concern — a counterweight
separated from the material it weighs — is a MISSING-IMPERATIVE finding, and no chunk
tool can see that direction.**

## CRITICAL — a permission with its trigger removed, in the layer voiced alone

`:1086` — *"…where NHL and IIHF **69.4 permit incidental contact outside the crease on a
reasonable effort to avoid it**"*.

**NHL 69.4, and IIHF 69.4 word for word:** *"incidental contact will be permitted **WHEN
THE GOALKEEPER IS IN THE ACT OF PLAYING THE PUCK OUTSIDE HIS GOAL CREASE** provided the
attacking player has made a reasonable effort to avoid such unnecessary contact."*
⚠️ **The fact keeps the proviso and drops the trigger.** The same rule's preceding
sentence is the counterweight it also omits: *"The appropriate penalty should be
assessed in EVERY CASE where an attacking player makes unnecessary contact with the
goalkeeper."*

⚠️⚠️ **And the second reading is worse: "outside the crease" is UNATTACHED. Rule 69.4 is
keyed to the GOALKEEPER being outside their crease. A listener in a section about where
a SCREENER stands relative to the crease will attach it to themselves** — turning it
into a permission covering exactly the play the section exists to warn about.

**Sibling contradiction, in the document this section's own body names as the owner:**
`playing_without_the_puck.md:611` states the rule **with both limbs**. ⚠️ **The two facts
layers now disagree about a permission.**

**Fix is a SPLIT, not an edit — headroom is 23 chars and will not hold the trigger.**
*"The simplest correct option is to drop the NHL/IIHF clause entirely and let the block's
Hockey Canada fact stand alone, because 69.4's subject matter is a goalie out of the
crease and this section is about a goalie in it."*

## Majors — four more omissions, all the same class
- ⚠️ **The operative instruction reaches no fact.** *"A screen never has to touch
  anybody"* (`:1090`) is in no line of the block. **The contact half is three tariff
  facts and nothing else** — *"a listener learns three prices and is never told the
  action."* ⚠️ **This is what makes the critical critical: the block states a permission
  to contact and never states the prohibition.**
- ⚠️ **`:1081` contradicts the body AND fact `:1083` two lines below it.** It says USA
  Hockey and Hockey Canada *"both take the goal on position"*; the body says *"inside
  the crease **the two part company**"* and calls HC's Interpretation 3 *"a counterpart
  to NHL 69.3, **not** to 69.1"*. Primary text agrees — HC Interp 3: *"An attacking
  player is **not** committing a foul by simply standing in the goal crease."*
  **Voiced consecutively, `:1081` and `:1083` tell a listener opposite things about the
  same book.**
- **`:1084` drops 607(c)'s scope limb** (*"while the goalkeeper is within the goal crease
  or privileged area"*), which the body quotes in full — so voiced alone it states a
  universal tier. **Stricter than reality rather than more permissive, but the same
  flattening class.** *"Privileged Area" is a defined term and naming it is shorter than
  describing it* — 36 chars of headroom, substitution should fit.
- **Both books now understate their own ceiling.** `:1085`'s framing (*"is not capped at
  a minor"*, *"leaves no misconduct rung between them"*) announces a whole ladder and
  **omits the top rung — HC 8.5(c), a match penalty.** Same class, weaker, at `:1084`:
  **USA Hockey 607(e)** is in the body and in no fact.
- **`:1086` drops Hockey Canada's exception** — *"the only exception … is where the
  attacking player is fouled by a defending player and, as a result, is unable to avoid
  contact."* ⚠️ **`:1082` gives USA Hockey push-in relief; `:1086` gives Hockey Canada
  none. The layer teaches a FALSE DIVERGENCE between two books.**
- **The cardinal-rule instruction is absent.** The block *"names four rulebooks across
  six facts and never once tells the reader to establish which is theirs."*

## ⚠️ The repair duplicated a point that already stood in four layers
`:1078` duplicates `:1062` near-verbatim **across a block boundary**. Within §9 the
shot-lane/face-protection point now stands in **FIVE layers** — body `:1070`, fact
`:1062`, fact `:1078`, body `:1091`, Common Mistakes `:1555`. ⚠️ **The repair added two
of the five without, apparently, seeing the first two.** The style guide's stated reason
for barring blocks on extraction layers — *"a third restatement is one more place for a
correction to fail to reach"* — **applies with force at five.**

## The shape question, answered — and the answer is SPLIT AGAIN

> *"The eight `Rule:` facts all belong in the corpus and all belong in this section.
> Keep every one of them, relabel none, delete none. But this block is not a legitimate
> all-rule exposition block under the style guide's own test, and the fix is a second
> split, not a subtraction."*

⚠️ **The style guide's exemption has a CONDITION and this block fails it**
(`content_style_guide.md:830-842`): the exemption is for a section with **no**
imperatives in its body, *"not for one whose imperatives were squeezed out"*, and the
prescribed method is **to list the body's imperatives first**. It listed them — **four,
of which three reach no fact.**

> *"Yes, it is currently a rulebook digest wearing a facts block's clothes — not because
> of the eight rule lines, but because the coaching half of its own body never arrived."*

⚠️ **And the obvious repair walks straight back into the failure that started this:**
adding the two missing imperatives takes the block to **11 = `HARD_MAX`** — the exact
state that evicted a mandatory give-ground duty this morning.

**So: split on the seam the body already names, which the repair agent itself wrote —**
*"Where you may stand and whom you may touch are different questions with different
answers."* ⚠️ **Not a rule-set line:** the style guide warns *"a split by book leaves
both halves all-`Rule:`."*

| half | carries | facts | headroom |
|---|---|---:|---:|
| **Where you may stand** | body `:1089`, facts `:1079`–`:1083`, the skate's-width imperative, the safety `Key:` | ~7 | 4 |
| **Whom you may touch** | body `:1090`, facts `:1084`–`:1086`, a `Never:` for *a screen never has to touch anybody*, the find-out-which-book line | ~6 | 5 |

**Both halves get a coaching imperative; no rulebook fact is evicted; the `Rule Rule
Rule` type column breaks in both** — *"and it also breaks the 8-paragraph all-rule chunk
without anyone having targeted the chunk."*

⚠️ **One thing the split must not do:** *"leave the stand half without a contact
instruction and the touch half without a position one. The reader of only one section
must get a safe half — which, right now, the reader of Screening does not."*

## What this method could not have found
⚠️ **Whether the eight rule statements are correctly SELECTED.** Every quoted string was
verified verbatim, but *"I did not search those four books for a provision about
screening or crease position that none of the nine facts and none of the three body
bullets mentions."* **The block's central claim — that USA Hockey writes NO
goaltender-vision provision in either volume — is a negative existence claim it took
from the body's own enumeration rather than re-running the search.** → `rules-verifier`.
Also: **no edition flag anywhere in the block**, and `iihf_rules_2026-27.txt` was not
diffed for 69.4. And ⚠️ **an imperative living in the `##` preamble, above both
subsections, is invisible to a review scoped to two `###` blocks — which is exactly the
shape §9 has.**

---

# Addendum 9 — `rules-verifier`: the fabrication is GONE, and the repair UNDERSTATES rather than overstates

**Editions read:** NHL 2025-26 (plain + `-layout`), IIHF Rulebook **2025/26 v1.1 AND 2026/27
v1.0**, IIHF Situation Handbook **both editions**, USA Hockey Playing Rules 2025-29 **and
the separate Casebook**, Hockey Canada 2026-2028 (plain + `-layout`). All phrase searches
run against **whitespace-flattened, de-hyphenated** copies. **35 of 35 quotations located**;
the single miss was an extraction artefact, resolved below.

## The claim it was sent to attack

**`:1090` — *"IIHF 42.4 reaches a major plus a game misconduct for recklessly endangering an
opponent by charging with nobody hurt."*** → **CONFIRMED BUT INCOMPLETE.**
`iihf_rules_v1.1.txt:3962`, and **identical at `iihf_rules_2026-27.txt:4021` — the rule does
NOT renumber between editions.**

⚠️ **THE FABRICATION IS GONE.** The earlier *"automatic game misconduct"* is not what the
sentence says any more, *"reaches"* is the right verb for a discretionary ceiling, and
*"with nobody hurt"* is correct — 42.4 has no injury limb.

**Two things it still drops:**
1. ***"The Referee, at their discretion, may assess"*** — nothing about 42.4 is mandatory.
   ⚠️ **The same paragraph names Hockey Canada's discretion explicitly, so the asymmetry
   inside one sentence invites the listener to hear the IIHF limb as firmer than it is.**
2. ⚠️ **A second condition omitted entirely:** the tier bites only where *"the Player would
   not be sufficiently sanctioned by imposing a major penalty."* **42.4 is not "reckless
   endangerment ⇒ major + GM"; it is "so bad that 42.3's major is not enough."**

⚠️ **And a number collision the section does not flag while naming both books in one breath:
`nhl_rules_layout.txt:4547` makes NHL 42.4 a MATCH penalty.** The corpus attributes
correctly (`IIHF 42.4`) and `playing_without_the_puck.md`'s trailer flags the collision —
**this section does not.**

## Thirteen claims CONFIRMED VERBATIM
607(d) Note 1 · 607(c) **including its scope clause** · 607(e) · HC 8.5(a) and **both limbs of
8.5(b) the right way round** · 8.5(c) · HC 7.4's *"in any manner"* limb · the 8.5 preamble
onus · Interpretation 1 · NHL 42.1 · 69.2 in both books (**joint attribution earned — it read
both**) · the crease-line split · HC's passive-teammate limb · USA Hockey 625(b)'s push-in
carve-out **with all three faceoff conditions and both position-bar exceptions complete**.

⚠️ **`8.5(d)` is NOT silence — it is an express bar:** *"No Misconduct penalty may be assessed
for interference with the goaltender."* And the corpus's gloss *"ten-minute"* is exactly right
(HC 4.7 sets a Misconduct at *"10 minutes"*, distinct from 4.8's Game Misconduct).
**The corpus navigates a terminology trap correctly that would catch most readers.**

## ⚠️ The negative existence claim, attacked hard and UPHELD

*"USA Hockey writes no goaltender-vision provision at all — not in its playing rules … and
not in its separate Casebook, whose seventeen Rule 625 situations…"*

**Searched in both volumes, flattened:** `vision` (19/27 hits), `sight`, `view`, `obstruct`,
`screen`, `eyes` (0/0), `impair`, `sightline`, `sight line`, `line of sight`,
`goalkeeper's view`, `goalkeeper's vision`, `goaltender's view`, `goaltender's vision`,
`see the puck`, `in front of the goalkeeper`. **Every `vision` hit is peripheral vision
(Rule 616), low-vision blind hockey, or SUPERVISION.** Both `screen` hits are 625(a)(1) — a
screen set on a **checker**, as the corpus says.

**It then read all seventeen Rule 625 Casebook situations in full** (`usah_casebook.txt:14558-14827`).
**The count is right** and the characterisation accurate. ⚠️ **Casebook Situation 8 actively
corroborates the corpus's position-bar reading.** The Hockey Canada half is equally precise:
**exactly two** goaltender-view references exist and **both** are crease-keyed. ***"Two" is
the correct count, not a hedge.***

## ⚠️ AN EXTRACTION TRAP THAT WOULD HAVE MANUFACTURED A FABRICATION REPORT

**A flattened search for Situation 5 E's verbatim-correct quotation returns ZERO against
`nhl_rules.txt` AND `nhl_rules_layout.txt`** — the right column's *"Goal is allowed."* is
spliced into the middle of the left column's sentence in **both**.

⚠️ **`sources/README.md` said *"`nhl_rules.txt`, whose Reference Table 14 does not
interleave."* That trailing clause was FALSE** — true of Situation 6 D, false of 5 D and 5 E.
**Verified independently by the coordinator and corrected in `sources/README.md` today.**
⚠️ **Had the verifier trusted that line, it would have filed a fabrication report against a
quotation that is word for word right.**

## Findings — ⚠️ AND BOTH SAFETY ONES RUN IN THE UNDERSTATING DIRECTION

**1 · `:1079`'s absolute is OVERSTATED, and its disclosure UNDERSELLS the corpus.**
*"every clause voiding a goal for where you stood is keyed to the goal crease"* — NHL/IIHF
69.1 clause (1)'s positioning limb expressly is not: the premise reads *"whether inside or
outside the crease"*, and *"or defend his goal"* carries no location condition. ⚠️ **The
structural reading is otherwise sound and honestly labelled — it is the word "every" that
fails, and only against clause (1).** ⚠️⚠️ **And the hedge *"not either book's words"* was
written before Situation 5 E entered the section: 5 E IS both books' words answering this
exact play.** *"Lean the fact on 5 E, drop the absolute."* **This is the
"makes the corpus look LESS supported than it is" direction `CLAUDE.md` singles out.**

**2 · ⚠️ SAFETY — *"privileged area"* is quoted and never defined.** USA Hockey 607(d) Note 2
defines it as the end-zone faceoff spots connected, with lines run perpendicular to the end
boards — ⚠️ **THE ENTIRE LOW ZONE BETWEEN THE DOTS.** A net-front screener is inside it
**always**; so is a forechecker in the corner. **A listener will picture a small box around
the paint and be wrong by an order of magnitude**, toward a minor plus a ten-minute
misconduct with no bare-minor option anywhere in Rule 607.

**3 · ⚠️ SAFETY — USA Hockey 607(b) is omitted and it is MANDATORY:** *"A major penalty plus
game misconduct penalty **shall be assessed** to any player who recklessly endangers an
opponent as a result of charging."* **"Shall", not "may."**

**4 · The IIHF has the no-goal-needed faceoff consequence too, and the section gives it to
USA Hockey alone.** IIHF 69.1: *"…the subsequent 'face-off' shall take place at the nearest
neutral zone face-off spot outside the attacking zone of the offending team."* **The NHL
genuinely lacks it** (69.6 triggers only after a disallowed goal). **Real shape: USA Hockey
mandatory, IIHF discretionary, NHL only after a disallowed goal.** ⚠️ **The IIHF is Britain's
book — the omission most likely to reach a reader of this corpus.**

**5 · The 69.4 permission has TWO conditions and the corpus states one** — independently
reaching the `facts-reviewer`'s critical. ⚠️ **And it refines the contrast: HC's own preamble
permits incidental contact in materially the same terms, and all four books share the
*"not 'fair game'"* paragraph.** The genuine divergence is narrower than stated: **HC
disallows the goal for attacker-INITIATED contact at any location; NHL/IIHF disallow inside
the crease incidental or otherwise, and outside it only when non-incidental.**

**6 · ⚠️ A no-contact screening act that IS a penalty.** IIHF Situation Handbook **69.3 and
75.4**, identical in both editions: holding a hand/glove or stick directly in front of the
goalkeeper's eyes with obvious intent to impair sight is **unsportsmanlike conduct, a minor**
— **no contact, no crease requirement.** The section teaches *"a screen never has to touch
anybody"* — **literally true, and a listener can act on it and take two minutes.**
⚠️ **A PROPAGATION gap, not an accuracy defect:** the corpus carries it at
`playing_without_the_puck.md:581` and `goaltender.md:1120`, both verified verbatim, and
`:1079`'s *"is not what NHL or IIHF Rule 69 reaches"* **is precisely worded and survives.**

**7 · Precision:** `:1090`'s *"unable to avoid contact."* drifts — the source continues
*"…with the goaltender."* And *"The Note to Rule 607(d)"* — **there are two Notes; this is
Note 1.** The facts line gets it right; only the body is loose.

## Two book-level errors, for `sources/README.md` not the corpus
- ⚠️ **Hockey Canada's OWN cross-reference is wrong.** Note 1 under 8.5(b) says *"See Rule
  7.4 (b)(Interpretation 2)"* — **Interpretation 2 is to 7.4(a) and is about blindside
  hits.** ⚠️ **The corpus cites "Rule 7.4" generally and lands in the right place — it
  routes around the book's bad pointer correctly.**
- **HC Interpretation 3 to 7.4(b) independently corroborates the mandatory limb** from a
  second place in the book, and the section does not cite it: *"…a Major penalty and Game
  Misconduct penalty for Interference **must** be assessed."*

## Two tensions it explicitly declined to call
⚠️ **Neither is a finding, and both are the BOOKS' problem rather than the corpus's:** whether
HC's 8.5 preamble and its Interpretation 3 can be reconciled (*"the corpus's individual
statements about each are accurate; the tension between them is Hockey Canada's"*), and
whether the IIHF's 1.7-vs-5E contradiction is settled anywhere — ⚠️ **it checked, and the
corpus's disclosure *"nothing held here settles it"* is UPHELD.**

## What this method could not have found
*"Grep verifies that a book says a thing; it cannot tell you whether the thing the book says
is what officials call."* Every discretionary limb here is decided by refereeing convention
no rulebook records. ⚠️ **And: *"a claim carried implicitly by ADJACENCY — the reader
inferring that a rule quoted for one book applies to the next book named in the same
sentence — is invisible to this method, and finding 4 is one I caught only because I happened
to read past the end of IIHF 69.1's operative sentence."*** ⚠️ **Third, and it names it as the
gap it would fund next: it read the section as TEXT, not through `md_to_speech`** — eight of
the nine facts lines are voiced alone, and it judged findings 1 and 2 on how they read on the
page. ***"A layer test would decide both better than I did."***

---

# Addendum 10 — the repair, and ⚠️ THE BRIEF'S PROPOSED FIX WAS THE DEFECT

A repair agent was given all three criticals and the majors from Addenda 7–9. It wrote
**46 new lines** and executed a **second split**, on the seam the body already named in
its own words — *"Where you may stand and whom you may touch are different questions with
different answers."*

| subsection | facts | shape |
|---|---:|---|
| `Attacking the net front` | 7 | 2 `Rule:` + 5 coaching |
| **`Screening the goalie — where you may stand`** | **8** | 7 `Rule:` + 1 coaching |
| **`Screening the goalie — whom you may touch`** | **10** | 8 `Rule:` + 2 coaching |
| `Defending the net front` | 11 | 4 `Rule:` + 7 coaching |

**Nothing is at `HARD_MAX` in the new pair.** Not a split by book.

## ⚠️⚠️ THE COORDINATOR'S PROPOSED FIX WOULD HAVE DELETED A TRUE CLAIM

The brief told the agent that critical 1 could be fixed by **dropping the NHL/IIHF 69.4
clause entirely**, reasoning that *"69.4's subject matter is a goalie out of the crease and
this section is about a goalie in it."* ⚠️ **The agent refuted it.**

The permission the fact was asserting **is real — it is just 69.1's, not 69.4's**:

> *"Incidental contact… will be permitted, and resulting goals allowed, when such contact
> is **initiated outside of the goal crease**, provided the attacking Player has made a
> reasonable effort to avoid such contact."*

**So the repair was to re-cite it to 69.1, attach *"outside the crease"* to the CONTACT
rather than the player, and state 69.4's trigger separately** — which **also** removes the
divergence against `playing_without_the_puck.md:611`.

⚠️ **This is the round-73 failure shape exactly, and it is in `CLAUDE.md` in bold: the
brief's PREMISES were sound and its PROPOSED WORDING was the defect.** Both the
`facts-reviewer` (which suggested the deletion) and the coordinator (which relayed it as a
plausible option) were wrong, and **only the agent that had read the rule caught it.**
⚠️ **Deleting a true, load-bearing claim is a worse outcome than the flattening it was
meant to repair — and every gate would have passed on it.**

## Three more refutations of the brief, all in the coordinator's direction of error
- ⚠️ **The block was never all-`Rule:`** — it was 1 `Key:` + 8 `Rule:`, **so the style
  guide's all-`Rule:` exemption test was not what it failed.** The substantive finding
  (imperatives squeezed out) held; **the framing did not.**
- ⚠️ **"Three of four imperatives reach no fact" was TWO of four.** *"Keep your skates off
  the line"* reached `:1080` and *"know when the release is coming"* reached `:1078`. The
  genuinely unreached two were *"a screen never has to touch anybody"* and *"find out which
  book."*
- **The quote-drift nit at `:1090` was already fixed in the working tree** — it reads
  *"unable to avoid contact with the goaltender."*, and **the source sentence ends there.**
  **No drift.** The brief relayed a stale finding as live.

## Repaired
All three criticals, each confirmed against primary text first. `:1066` **split into two
facts** — one carrying *"the goal will be disallowed"* and the give-ground duty, one the
penalty *"whether or not a goal is scored"* **with the `a table row` hedge intact**.
Key Takeaway `:1655` now prices both books **without reading as automatic ejection**.
`:1081`'s contradiction **removed rather than duplicated**, with HC Interpretation 3's
*"NOT committing a foul by simply standing in the goal crease"* added so **the block
follows the body instead of re-opening the tension**. 607(c)'s scope limb, **607(b)
(mandatory) and 607(e)** as their own fact. **The privileged area** got a `Rule:` fact and
a body passage quoting Note 2 in full. **HC 8.5(c)**, **HC's Interpretation 1 exception**
(killing the false divergence against `:1082`), the **cardinal-rule instruction** and
***"a screen never has to touch anybody"*** all now reach facts. **`:1079` rewritten to
lean on Situation 5 C**, with 5 E left where it is load-bearing so neither is duplicated.
The **IIHF faceoff consequence** and the **Rule 75 glove-in-the-eyes minor** both added.

## Two things it found that no review had asked for
- ⚠️ **`check_facts_antecedents` flagged its OWN new fact** (*"That privileged area…"*) —
  fixed by substitution, naming USA Hockey. **It then fixed a PRE-EXISTING one** in *The
  cross-check problem* (`Key: That count is computed…`), **disclosure preserved.** Tool
  count **3 → 1**.
- ⚠️⚠️ **THE SOURCES TRAILER HAD NEVER CITED THE MATERIAL THIS SECTION RESTS ON.** NHL
  Table 14, IIHF Appendix IV Table 16, IIHF Rule 69 and the Situation Handbook were
  **absent entirely** — **while Situations 5 E and 6 D have been quoted in the body for
  some time.** ⚠️ **A quotation in the body whose source is in no trailer is invisible to
  `source-verifier` by construction.** Now added. ⚠️ **One entry's URL was taken "from the
  form already used elsewhere in the corpus" — a URL built by pattern-matching is a
  fabrication risk and the live `rules-verifier` has been told to check that one hardest.**

## Checks
Six gates pass (**841 blocks, 5,650 facts** — was 840/5,640). `--near`: **no §9 line within
1 character**; the file's one AT-CAP line (`:1369`) is **pre-existing**.
`check_quote_drift` clean fragments **820 → 836**, flagged unchanged at 6, **none in §9**.
`check_facts_antecedents` **3 → 1**. `check_tables`, `check_pointers`, `check_disclosures`,
`check_chunk_splits`: no new hits. `md_to_speech` renders with **0 unrecognised
constructs**.

⚠️ **The whole-file diff caught two things its own hunks did not:** a missing blank line
before `### Defending the net front`, and **a *"the push-in relief"* reference left dangling
across the new subsection boundary** — the exact class the split creates.

## ⚠️ NOT CLEARED
*"The whole-file diff is mine alone. No second reader has seen the ~46 lines of new text,
and per the repo's own rule a repair is new text that has not been reviewed."*
`rules-verifier`, `safety-reviewer` and a propagation agent are live.

**Propagation targets it named and could not reach:** `winger.md:727` and allegedly
`rules_primer.md:1139` carrying the same *"every clause"* overstatement. ⚠️ **The
coordinator censused this: `rules_primer.md:1139` does NOT carry the phrasing, and
`on_ice_communication.md:277` DOES and was missed. The relayed list was wrong in both
directions** — the documented 33%-to-75%-short failure, again.

---

# Addendum 11 — `safety-reviewer` on the 46 new lines: NO criticals, five majors, one of them NEW TEXT

Read §9 in full (`:1050`–`:1201`), all four blocks (**36 facts lines**), both hosted
captions, Common Mistakes, Q11, KT9/KT10, **and the whole uncommitted diff**. Rulebooks
grepped and quoted: NHL, IIHF (rules **and** both Situation Handbook editions), USA Hockey
(playing rules **and** Casebook), Hockey Canada.

## The three criticals, graded
| # | Status |
|---|---|
| 1 · goaltender contact priced as a bare minor | ✅ **RELIEVED**, verified against all four books |
| 2 · *"assesses none where the goal went in"* | ⚠️ **PARTLY** — the exculpatory tail survives |
| 3 · 69.4's permission stripped of its trigger | ⚠️ **PARTLY** — fixed at `:1106`, **still absent at `:1080`** |

⚠️ **NO OVER-CORRECTION.** It checked specifically, because of the fabricated-`IIHF 42.4`
incident: **every discretionary tier in the new text is worded as discretionary** — IIHF
42.4 *"may assess"* → corpus *"reaches"*; USAH 607(e) *"may also be assessed"* → corpus
*"adds a match penalty option"*; HC 8.5(b)'s limbs correctly split. ***"No fabricated
tariff found anywhere in the 46 new lines."***

## ⚠️ MAJOR 1 — NEW TEXT, and it reverts to the boundary the next subsection rejects
`:1066` ends *"…so give it at once and **re-set outside the paint**"*. ⚠️ **The very next
subsection says *"keep your skates off the line, not merely out of the blue"*, and the
caption hosted there says *"Staying out of the blue paint is necessary and not
sufficient."*** **A screener who obeys `:1066` literally re-sets with a skate on the red
line** — where USA Hockey 625(b) takes the teammate's goal on position alone.
**31 chars of headroom.** ⚠️ **Do not fix this by editing the caption —
`screen-the-goalie-sightline` is OWNED by `playing_without_the_puck.md` and merely hosted
here; editing it rewrites the owner.**

## MAJOR 2 — the exculpatory tail still terminates the line
`:1067` still **ends** on *"…Situation 6 D, a table row, assesses none where the goal went
in"*. The repair added the penalty limb at the **front**. ⚠️ **Voiced alone, the last thing
retained is still "no penalty where the goal went in" — and the goal did NOT go in, it is
disallowed.** The body already quotes Table 14's parenthetical *"(loss of goal only)"*;
the facts line drops it. **59 chars of headroom; the body's own parenthetical is 19.**

## ⚠️ MAJOR 3 — the two facts lines now CONTRADICT each other in the extraction layer
`:1106` gets 69.4 right (*"keyed to a goalkeeper 'in the act of playing the puck
outside'"*). ⚠️ **`:1080` still says *"69.4, the rule for outside it, reaches contact
only"* — a location with NO SUBJECT, four words after *"an attacker outside the crease"*.**
Both books key 69.4 to the **goalkeeper's** position. **A listener hears both lines.**
⚠️⚠️ **THIS IS THE THIRD TIME THIS RULE'S SUBJECT HAS GONE MISSING IN THIS SECTION.**
**The repair is a DELETION** — the 69.4 clause is redundant with the Situation-row clause
already in the line.

## MAJOR 4 — the glove-in-the-eyes minor is in the wrong subsection
*"A screen never has to touch anybody"* now appears as a standalone permission at `:1098`
**and in KT9**. ⚠️ **The natural way to screen without touching is to put a glove or blade
in front of the goalie's face — which the document itself calls *"an easy drift"* — and
that is a minor under IIHF Situation 69.3/75.4, no contact, no crease requirement.**
**Verified verbatim in BOTH Handbook editions.** The counterweight sits in the *previous*
subsection only: ⚠️ **absent from "whom you may touch" in both layers — the heading that
advertises precisely this question — and absent from Common Mistakes, Key Takeaways and
Q11.** **Block is 10 of 11: one slot free, no eviction needed.**

## ⚠️ MAJOR 5 — the pointer failure is STILL LIVE, unchanged by the re-split
`:1074` still closes *"It is an NHL and IIHF provision; Offensive Zone Play sets out the
rule and the two tables in full."* — **the last sentence of the subsection that teaches
"Take the shove braced."** A USA Hockey or Hockey Canada reader arriving at that anchor
gets **no pointer** to the subsection two headings down that prices their own book.
⚠️ **Their price is WORSE, not absent.**

⚠️ **What DOES survive alone, and it is the part that matters:** `:1064`'s *"but never
against the goaltender"* and `:1074`'s *"there is one body at the net front you must not
take braced"* are **both unscoped**. ***"The safe half of the split is delivered. What is
not delivered is the price and the pointer."***

⚠️ **And the structural observation behind it: NONE of the three net-front subsections
cross-references either of the other two.** All three point outward to other documents.

## Minors worth keeping
- **`:1066` states the give-ground duty WIDER than either book writes it** — both key it to
  an attacker *"in the goal crease"*. ⚠️ **Over-broad in the CAUTIOUS direction; recorded
  so nobody "fixes" it the wrong way.**
- **`:1100` implies a bare minor exists outside the privileged area. It does not** — 607(a)
  is also minor-plus-misconduct, and 607(d) opens *"A goalkeeper is NOT 'fair game' because
  they are outside the privileged area."* ⚠️ **Runs in the UNSAFE direction**, though
  `:1101` closes it practically.
- ⚠️ **`:1061` now carries the crease-line boundary as a `Technique:` line with no rule
  number and no consequence — the `Rule:` line that carried it MOVED into the other
  subsection in this diff.** ***"This is the eviction pattern `check_facts.py`'s own
  docstring records for this file, arrived at by a different route."*** Block is 7 of 11.
- ⚠️ **MINOR 9 — Situation 5 C may be the WRONG ROW.** `nhl_rules.txt:12278`: 5 C is
  *"The attacking player **remains in motion**"*; **a screener plants**, which is 5 E.
  **Both allow the goal, so no behavioural harm** — but it directly questions the repair
  agent's choice, **and the live `rules-verifier` was independently asked to check exactly
  this.** Two passes converging on one row.
- **`Defending the net front` is at 11/11 with zero headroom**, and `:1119` at 299/300.
  ⚠️ **Any future addition must evict something — in the file and on the date where an
  eviction already cost a mandatory give-ground duty.**

## Upheld on re-verification
The **privileged area** definition (Note 2 to 607(d)) quoted verbatim and the corpus's
gloss correct. **607(b)'s *"shall, not may"***. **HC 8.5(a)–(e) including 8.5(d)'s express
bar.** ⚠️ **The NEWLY ADDED Interpretation 3 clause — *"simply standing there is no
foul"* — supported verbatim. Not a fabrication.** NHL 69.1/69.2/69.3, IIHF 69.3's
*"appropriate penalty"* (**the IIHF does not write "minor" there**), NHL 42.1, and both
Situation Handbook editions. ⚠️ **And the negative existence claim at `:1082` re-grepped
and UPHELD — every `vision`/`view`/`obstruct` hit in both USA Hockey volumes is unrelated
(supervision, provisions, Blind Hockey).**

## What this method could not have found
⚠️ **`offensive_zone_play.md` — nominated by BOTH `:1074` and `:1089` as owning "the rule
and the two tables in full" — was not opened. *"If that document states the give-ground
duty without the USA Hockey / Hockey Canada half, MAJOR 5 is worse than I have graded
it."*** Also: **it reasoned about facts lines voiced alone from the convention rather than
running `md_to_speech`** — ⚠️ ***"whether the `###` headings themselves are voiced changes
how much of my anchor-arrival argument survives, and I did not check."*** **The coordinator
can answer that one.** And: *"a hazard in §9 whose heading does not name it would have
passed me."*

---

# Addendum 12 — the coordinator answers the `safety-reviewer`'s handover, and MAJOR 5 gets WORSE

The `safety-reviewer` ended by naming one thing it could not check: *"whether the `###`
headings themselves are voiced changes how much of my anchor-arrival argument survives,
and I did not check."* **Run through the real renderer:**

## 1 · The headings ARE voiced, each as its own `<p>`

```
106.ssml  <p> 5/6:  Attacking the net front.
108.ssml  <p> 4/5:  Screening the goalie — where you may stand.
113.ssml  <p> 2/5:  Screening the goalie — whom you may touch.
116.ssml  <p> 3/9:  Defending the net front.
```

**So a listener hears each heading spoken**, and the four subsections run **contiguously**
— 106 → 108 → 113 → 116. ⚠️ **A listener does not "arrive at an anchor": they hear all
four in sequence, so they cannot miss "whom you may touch" the way a reader can.**

## ⚠️ 2 · AND THAT DOES NOT RELIEVE THEM — the gap is 22.8 MINUTES

**Measured: 7 chunks, 3,332 words between the `Attacking the net front` heading and the
`whom you may touch` heading.**

⚠️⚠️ **The coordinator's first script printed *"a listener reaches it unavoidably, a few
minutes later"* — and its own number refutes that gloss. Twenty-three minutes is not "a
few".** The instruction *"Take the shove braced"* and the price of getting it wrong are
**most of an episode apart**, with no pointer between them.

**So MAJOR 5 is not narrowed by the layer test — it is WIDENED, and it splits in two:**
- **The reader** can miss the price entirely (anchor, ToC or search arrival, no forward
  pointer).
- **The listener** cannot miss it, but meets it **22.8 minutes later**, with no signal at
  the braced-contact instruction that a price is coming. ⚠️ **The reader can at least see a
  ToC. The listener has nothing.**

## 3 · ⚠️ A MEASURED SPEECH RATE now exists, and it replaces an assumption

Every duration in this record and in `OPEN_ITEMS.md` until now used **156 wpm, an
assumption**. The Polly generative sample rendered today gives a real figure:

| | |
|---|---|
| `rule-wall-109.mp3` | **450 words → 185.136 s** |
| **Measured** | **2.43 words/sec = 146 wpm** (Polly generative, `Amy`, en-GB) |
| The assumption | 156 wpm — **7% fast** |

⚠️ **Every earlier duration in this record is therefore ~7% SHORT.** The chunk-109 figure
quoted as *"~2.9 minutes"* is **3.09 minutes**, which the MP3's own 3m05s duration
confirms independently.

- ⚠️ **This rate is for ONE voice on ONE engine** — `Amy`, generative, en-GB — **and for
  text that is 100% facts lines with a 300 ms break between each**, which is slower than
  continuous prose. **Do not apply it to prose chunks without re-measuring.**
- ⚠️ **It is a property of the ENGINE, not of the corpus.** A different engine or voice
  moves it, and the whole point of the engine comparison is that these differ.

---

# Addendum 13 — `rules-verifier` on the new text: one CONTRADICTED claim, ⚠️ AND THE COORDINATOR PUT IT THERE

**Editions read:** NHL 2025-26 (plain + `-layout`); IIHF Rulebook **2025/26 v1.1 AND
2026/27 v1.0**; IIHF Situation Handbook **v1.1, 2026/27 AND v1.0**; USA Hockey 2025-29
Playing Rules **and** Casebook; Hockey Canada 2026-2028. ⚠️ **It checked its own brief's
source table against `ls sources/*.txt` — 36 files against 26 rows — and diffed rather than
trusted it.** **Nothing resolved to "could not confirm."**

## ⚠️⚠️ CONTRADICTED — the privileged area does NOT reach the corner

**The corpus now says** (`:1101` facts, `:1110` body): *"a net-front screener and a corner
forechecker are both inside it."*

**USA Hockey Rule 104(d) fixes the geometry:** end-zone face-off spots are *"twenty-two feet
(22') from the imaginary line"* — ⚠️ **a 44-foot-wide band on an 85-foot rink, leaving 20.5
feet of ice outside it on EACH side. The corner is outside it by construction.**

**Three further texts say so independently:**
- **Casebook Sit. 6** — it *"extends to the closer end boards"*: ⚠️ **backwards, not sideways.**
- **Glossary, Goalkeeper's Warm-Up Area** — that area is the privileged area ***"extended to
  include"*** the corners. ⚠️ **The extension exists precisely because the privileged area
  does not already contain them.**
- **Casebook Sit. 5** — *"a goalkeeper **can be legally checked when outside the privileged
  area**"*.

⚠️⚠️ **AND THE CORPUS'S OWN OWNER DOCUMENT ALREADY HAD IT RIGHT.**
`language_and_glossary.md:341` states, sourced to the same Casebook situation:
***"So it takes in the whole net front, the goal line and the ice behind the net — but not
the corners."*** **Two documents now say opposite things about one rule's extent.**

### ⚠️ THE CHAIN OF ERROR, AND IT RUNS THROUGH THE COORDINATOR
1. The **first `rules-verifier`** reported the privileged area as *"the entire low zone
   between the dots, out to the end boards. A net-front screener is inside it always; **so
   is a forechecker in the corner.**"* ⚠️ **The corner limb was its own gloss, not a
   quotation.**
2. ⚠️ **The coordinator relayed that gloss verbatim into TWO briefs** — the repair agent's
   and the `safety-reviewer`'s — **as established fact, without checking it.**
3. The repair agent **wrote it into the corpus.**
4. The `safety-reviewer` **read it in a brief that asserted it and upheld the passage.**
5. The second `rules-verifier` **caught it against Rule 104(d)'s numbers.**

⚠️⚠️ **FOUR STEPS, AND THE ONLY REASON IT DID NOT SHIP IS THAT A SECOND VERIFIER WAS SENT AT
THE SAME TEXT.** This is `CLAUDE.md`'s *"one had been promoted, by the dispatcher, into
another agent's brief as its top priority"* — reproduced exactly, on a penalty-scope claim.
⚠️ **The sentence is correct up to *"the whole low zone between the dots"*. Only the corner
limb is wrong — this is a NARROWING, not a deletion.**

## ✅ The priority claim — the repair agent vindicated, verbatim in both books
**NHL 69.1 and IIHF 69.1:** *"Incidental contact with a goalkeeper will be permitted, and
resulting goals allowed, **when such contact is initiated outside of the goal crease**,
provided the attacking player has made a reasonable effort to avoid such contact."*
**Unchanged into 2026/27.** ⚠️ **The coordinator's brief would have deleted a real and
load-bearing permission. The repair agent's refusal was correct.** And 69.4's separate,
narrower permission is **confirmed keyed to the GOALKEEPER**, not the attacker.

## ✅ Situation 5 C is not a mis-lettered row — THIRD independent confirmation
**5 C** = *"remains in motion"*; **5 E** = *"plants himself"*; **both → "Goal is allowed."**
**6 D** confirmed identical in both books. ⚠️ **`check_quote_drift` reports the 5 E
quotation as NOT FOUND IN ANY LOCAL SOURCE — the interleaving false negative, exactly as
`sources/README.md` now records.** **Read positionally.**
⚠️ **One drift the tool CANNOT see: *"defend **their** goal"* is the IIHF's wording; the NHL
prints *"his goal"*. The sentence credits both books.** Attribution drift, invisible by
construction.

## Four CONFIRMED-BUT-INCOMPLETE — all reader-favourable, all D2
- ⚠️ **USA Hockey DOES publish a push-in relief from the PENALTY**, and the document says it
  has none. **Casebook 607 Sit. 4:** *"where a defending player has forced the attacking
  player into their own goalkeeper, **no penalty should be assessed** provided the attacking
  player has clearly made every attempt to avoid the contact."* ⚠️ ***"The one carve-out"
  failure in its FOURTH incarnation on a goalkeeper rule.*** **Direction favours the reader,
  so not a safety defect.** ⚠️ **Sit. 4 also supplies the graded guidance `:1100` currently
  asserts with no source.**
- **The 625(b) faceoff is not as mandatory as stated.** **Casebook Sit. 10:** *"Play should
  not be stopped because a player momentarily places their stick and/or skates in the goal
  crease, unless they interfere with the goalkeeper."* ⚠️ **Its second half STRENGTHENS the
  document's other claim and reaches the STICK, which the corpus does not.**
- **HC Interpretation 3's Note 1 is cited in the trailer and carried in no line:** *"No
  penalty would be assessed unless the attacking player's body or stick makes actual
  physical contact."* ⚠️ **Under Hockey Canada a crease screen with no contact costs the
  goal and NO PENALTY** — material and reader-favourable.
- **HC Interpretation 2 to 8.5(a)** conditions Interpretation 1's *"only exception"*, which
  the document quotes. The phrasing tracks the idea; the operative qualifier is unmentioned.

## ✅ Everything else confirmed verbatim
Twenty-plus claims, each with book and line — including **607(a) writes no bare minor for
charging ANYWHERE, so the claim is if anything understated**; the **IIHF discretionary
stoppage at 69.1** (*"the brief's line number is exact"*); **Handbook 69.3 and 75.4
identical across THREE editions**; the crease-line split in all three books; and **both
negative existence claims re-attacked and CONFIRMED** — USA Hockey's no-vision-provision
(nearest thing is 625(a)(8), which requires *physical contact* and reaches *movement*) and
Hockey Canada's *"exactly two"* view references. ⚠️ **The seventeen Casebook situations
counted directly: EXACT.** ⚠️ **And the NHL 42.4 / IIHF 42.4 collision the brief warned
about is NOT present — the document cites NHL 42.1, which is right.**

## ✅ The Sources trailer URL is NOT a fabrication
`https://blob.iihf.com/…/2025_iihf_situationhandbook_17082025-v1_1.pdf` — **live fetch 200,
4,965,288 bytes, byte-for-byte the size in `project/verification/link_baseline.tsv:697`**,
which verifies the cover at **99.7% token overlap** against the local extraction. Registered
in `sources/README.md` and already cited by **20+ documents.** ⚠️ **A URL built by
pattern-matching was the right call here — but it was checked, not assumed.**

⚠️ **A LIVE STALENESS HAZARD, not a current defect:** in the **2026/27** IIHF book the
goalkeeper-interference table is **Table 14, not Table 16** (the −2 Appendix IV shift). The
trailer attaches *Table 16* only to the 2025/26 entry, **so it is right today** — ⚠️ **if
the corpus's IIHF layer ever moves to 2026/27, every "Table 16" in this document becomes
wrong.**

## Two facts-layer precision points
- ⚠️ **`:1082` ends `"(625, 8.5)"`. Voiced alone, the parenthesis sits immediately after the
  Hockey Canada clause and reads as though 625 is a HOCKEY CANADA rule.** It is USA
  Hockey's; **Hockey Canada has no Rule 625.** Both numbers are right; **the pairing is not
  legible aloud.**
- **`:1066` states the give-ground duty without its scope limb** — both books condition it
  on the attacker's *"current position in the goal crease"*.

## What this method could not have found
⚠️ ***"Grep cannot see a rule that exists only in a diagram"*** — USA Hockey's Glossary says
*"(see rink diagram)"* for the privileged area **twice**, and the extent was settled from
104(d)'s numbers and the Casebook. **If the printed diagram disagrees with 104(d), it would
not know.** ⚠️ **It could not see whether the corner error propagated OUT of this file** —
it found the contradicting sibling by grepping `privileged area`, **and a document
describing the region without that phrase would not have matched.** And: ⚠️ ***"I did not
re-check every other Table 14 or Table 16 quotation in the corpus the same positional way,
and any of them could be carrying the same unseen drift."***

---

# Addendum 14 — the second repair: the contradiction closed, and ⚠️ THE BRIEF'S ARITHMETIC REFUTED

## The corner contradiction — fixed, and the coordinator corrected on the way

`:1105` now ends *"a net-front screener is inside it always and a corner forechecker never"*,
and the body carries the derivation, the Glossary cross-check **and the counterweight the
narrowing itself created** — 607(d)'s *"NOT 'fair game'"* and Casebook Sit. 5 — ⚠️ **so
nobody reads "corners are outside it" as "the goalie is hittable there."** It now matches
`language_and_glossary.md:341`.

⚠️⚠️ **AND IT REFUTED THE COORDINATOR'S ARITHMETIC WHILE DOING IT.** Every brief asserted
*"a 44-foot band on an **85-foot rink**"*. **USA Hockey Rule 102(a) gives a RANGE —
*"eighty-five (85') to one hundred feet (100') wide"* — so the book does not fix the width
at all.** *"I sourced the range instead of asserting 85."* ⚠️ **A number the coordinator
treated as a constant is a variable in the source. The conclusion survives — the corner is
outside the band under every width in the range — but the stated reason did not.**

**Corpus-wide census, report only:** `playing_without_the_puck.md:623`, `goaltender.md:1081`,
`special_teams.md:1069` and `rink_map.md:636` **all already said "not the corners."**
⚠️ **`body_contact_and_battles.md` was the SOLE outlier — confirming the census's finding
that this was never a class.**

## The five safety majors — all actioned
`:1066` now ends *"re-set with both skates off the crease line"*. `:1067` now ends
*"refusing costs you the goal or the penalty, never nothing"* — ⚠️ **verified against Table
14 Sit. 6 B AND 6 D: no goal → penalty; goal → disallowed, no minor.** The subjectless 69.4
clause **deleted** from the facts line. The **glove-in-the-eyes minor propagated into *whom
you may touch*, Common Mistakes, KT9 and Q11.** ⚠️ **All three net-front subsections now
cross-reference each other** — they previously pointed only outward.

⚠️ **One phrase deliberately KEPT and flagged:** `:1093` body still reads *"69.4, the rule
for outside it, has no positioning limb"* — kept because the crease is named in the same
sentence. **Handed to the live `safety-reviewer` and `rules-verifier` to judge.**

## Three new citations confirmed, ONE SUB-CLAIM OF THE BRIEF REFUTED
**Casebook 607 Sit. 4** (push-in relief from the **penalty**), **Casebook 625 Sit. 10** (and
⚠️ **its second half reaches the STICK for the disallowed goal where 625(b)'s own sentence
does not — the stricter half, now carried**), and **HC Interp 3 Note 1** (crease screen, no
contact → goal off, **no penalty**) — all confirmed and propagated.
⚠️ **REFUTED: the brief claimed `:1100` asserts graded guidance unsourced. It does not — it
is a straight 607(d)/607(c) line. Nothing needed correcting there.**

## The eviction fixed the right way
`:1061`'s crease-line boundary had been left as a bare `Technique:` line when its `Rule:`
line moved sections. ⚠️ **Fixed by ADDING a `Rule:` line carrying the boundary WITH its
consequence — not by editing the `Technique:` line.** Block 7 → 9 of 11. ⚠️ **And the agent
added the Situation 5 E divergence to it on its own judgement, because voiced alone *"is a
rule and not a preference"* was over-firm without it.**

## ⚠️ THE LAYER TEST CAUGHT TWO DEFECTS NO CHECKER COULD SEE
- **The renderer voiced `(22')` as *"twenty-two feet (twenty-two feet)"*** — a stutter
  **inside a quotation**.
- **A chunk boundary opened a `<p>` with *"Being outside **it**"* and no antecedent.**

**Both rewritten.** ⚠️ **Neither is visible to `check_facts`, `check_links`, `check_absolutes`
or any gate. The only way to find them was to run `md_to_speech` and read the output.**

## Mechanical — and a third instance of the splice trap
Six gates + `--near` + `check_quote_drift` + `check_facts_antecedents` + `check-arrivals`
all pass. **A drift the agent introduced itself — a terminal period inside a quote that
continues — found and fixed by its own run.** It trimmed its own line from **300/300 to
295**.

⚠️ **THREE of its Casebook quotations report NOT FOUND and are verbatim.** The flattened text
reads `…everyattemptto` **`playingrules`** `avoidthecontact…` — **the page-furniture splice
recorded in `sources/README.md`, confirmed positionally.** **This is now the third distinct
extraction trap hit today** (Table 14's interleave, the IIHF Table 16 interleave, and this).

## Coordinator verification, all agents stopped
**Six gates pass: 841 blocks · 5,655 facts.** **Build exit 0, `dist` rebuilt 14:29, chain
reached `check:links` — 53 pages, 10,936 internal links, all resolve.** **Eight content
files changed; nothing staged.**

## NOT CLEARED
`rules-verifier` (the three new citations + the narrowing), `safety-reviewer` (§9 read
alone) and `site-reviewer` (the built site) are live. ⚠️ **The commit gate has not seen any
of this.**

---

# Addendum 15 — `safety-reviewer`: a CRITICAL in the extraction layer, and four majors

Read §9 in full **plus the complete `md_to_speech` render** (224 chunks; §9 = chunks
106–129, read line by line). Ran `check_facts`, `--near`, `check_facts_antecedents`,
`check_pointers`, `check_quote_drift`, `check_caption_hosts --by-host`, `md_to_speech
--report`. ⚠️ **It flagged its own exposure: eight `content/` files showed `M` while it ran,
so its one cross-document finding is against a file somebody else held.**

## ⚠️⚠️ CRITICAL — the narrowing reached the body and NOT the facts layer

`:1105`, voiced **alone** in its own `<p>` with a 300 ms break either side (chunk `117.ssml`),
ends: ***"…a net-front screener is inside it always and a corner forechecker never."***

> *"A forechecker who hears that, and nothing else, has been told the goaltender in the
> corner is outside the rule that protects them. The next thing they do is finish a check on
> a goalie who has just played a puck up the wall — a body with no shoulder protection,
> often turned away, sometimes still on their knees."*

⚠️ **It read all eleven lines in the block: NO line carries the counterweight.** `:1104`
reinforces the same framing; `:1102`'s prohibition is scoped by its own words to *"the net
front."*

**USA Hockey 607(d)** (`usah.txt:3683`): *"A goalkeeper is **NOT 'fair game'** because they
are outside the privileged area. A penalty for interference or charging should be called in
**every case** where an opposing player makes unnecessary contact."* **Casebook Sit. 5**
says the same while permitting a legal check.

**Layers:** body ✓ `:1115` — ⚠️ **and the chunk boundary falls AFTER the "not fair game"
clause, which is the right place** · **facts ✗** · **Q11 ✗** — `:1612` asks *"whether it
reaches the corners"* **and stops.** ⚠️ ***"A reader who answers that question correctly has
learned the narrowing and not the counterweight."***

⚠️⚠️ **THE CONSTRAINT IS BRUTAL AND THE REVIEWER MEASURED IT: the block is ELEVEN LINES =
`HARD_MAX`, so no new line; and `:1105` is 298/300, so nothing can be appended.** **The room
is inside `:1105` itself** — its two verbatim geometry quotations cost **~72 characters** to
establish a boundary *"the line then states in plain words anyway."* `:1104` has 31 spare,
`:1108` has 54.

## MAJOR — `:1066` leads with the prohibited act as an imperative
*"…hold your ground and 'the goal will be disallowed'"*. **The sentence is TRUE** and the
quotation exact — but **it opens with an imperative verb naming the act that breaches the
duty**, in a block where every other line opens with a real instruction. ⚠️ **And *"stand
your ground" / "hold their ground" is used as a LIVE ENTITLEMENT three other times in this
corpus — including KT4 of this same document.*** It self-corrects nine words later, which is
why it is not graded critical. **Lead with the duty, as Common Mistakes and KT9 already do.
12 chars headroom — a reordering fits, an addition does not.**

## ⚠️ MAJOR — "full-checking **leagues** only" is the WRONG UNIT
**USA Hockey 604(b)** (`usah.txt:3576`): *"Any time a team from a Competitive Contact
category plays a team from a Body Checking category, **body checking shall be prohibited**."*
⚠️ **The question is the GAME, not the league. A reader in a nominally checking class hears
"full-checking leagues only" and concludes they qualify** — then step 3 is a minor under
604(c), or a major plus game misconduct under 604(d) if reckless, **both priced by §9 itself
at `:1125`.**

⚠️⚠️ **THE DECISIVE EVIDENCE IS THE DOCUMENT'S OWN CAPTION.** `net-front-walk-out-direction`
— voiced into this document, and **owned by this file** — already says it right: *"it is the
**game in front of you** that settles that rather than your age group… and Rule 604(b) bars
it any time a Competitive Contact team plays a Body Checking team."* **Thirteen other
documents' facts blocks carry 604(b). §9 — the one place that teaches physically moving a
screener — is the gap.** ⚠️ **Block is eleven lines = `HARD_MAX`; `:1123` is 195/200 and
`:1124` is 299/300. Substitution is the only route — and it costs nothing, because the
correct word ("game") is SHORTER than the wrong one ("leagues").**

## MAJOR — the skates-on-the-ice limb is in neither summary layer
*"A player whose edges are gone cannot brace and cannot choose what meets the post first"* —
⚠️ **the counterweight to the only instruction in §9 that puts a player's weight under
another's centre of mass.** Absent from Common Mistakes **and** Key Takeaways — **and KT9
grants the permission it counterweights**, carrying the direction and head-position limbs
but not this one. ⚠️ **Correctly labelled coaching caution on a stated injury mechanism, and
the reviewer verified the negative is honest: the IIHF's nearest limb is 48.1(III), a
head-contact clause.**

## MAJOR (cross-document) — one survivor of the re-set sweep
`offensive_zone_play.md:1063` still reads *"re-establish the screen **outside the paint**."*
⚠️ **Every other site in the corpus now says off the crease line — including that file's OWN
facts line at `:538`.** A reader who re-sets on the red line loses the goal under USA Hockey
625(b) and HC 8.5, and under IIHF 1.7 stands where the give-ground duty bites again.

## Status of the five majors
| | |
|---|---|
| 1 · re-set wording | **Partly relieved** — one cross-document survivor |
| 2 · exculpatory tail | ✅ **RELIEVED** |
| 3 · 69.4 subjectless | ✅ **RELIEVED** — ⚠️ **the repair agent's judgement to KEEP `:1093` was CORRECT and survives the render; the crease is named in the same sentence and no chunk boundary falls between them** |
| 4 · glove-in-the-eyes | ✅ **RELIEVED** — in facts ×2, body ×2, Common Mistakes, KT9 and Q11; ⚠️ **the permission appears in NO layer without it** |
| 5 · pointer failure | **Partly relieved** |
| **the narrowing** | ⚠️ **STILL LIVE in two layers — the critical above** |

## ⚠️ AND IT CORRECTED THE COORDINATOR'S 22.8-MINUTE MEASUREMENT
**The real gap is ~8 minutes, not 22.8.** ⚠️ **The coordinator measured HEADING to HEADING;
the price actually appears in body prose at the end of chunk `110.ssml`, long before the
heading that advertises it.** **Measuring the wrong landmark inflated it by ~3×.**
⚠️ **And the more important half: `:1064` carries an unconditional *"but never against the
goaltender"* in the SAME voiced unit, so a facts-layer listener acts safely even without the
price.**

## Upheld — including one attribution that would have produced a FALSE drift report
⚠️ ***"Hit the boards or goal posts with an arm, a leg, or anything but your head first"* —
`huh.txt:518` reads *"Hit the boards with anything but your head first"*, with NO goal post.
The corpus attributes it to *Introduction To Body Contact*, and `ibc.txt:1390` carries the
goal-post wording verbatim.** ***"A reviewer checking only the Heads Up guide would have
reported a false drift."*** Also upheld: the spinal mechanism *"can occur at walking speed"*;
Casebook 607 Sit. 4's three rungs (⚠️ **`check_quote_drift` reports these NOT FOUND — a page
break plus two running headers, not drift**); 607(c) and both Notes; IIHF 69.3/69.4;
Handbook 69.3/75.4 in both editions; IIHF 101.1. ⚠️ **And the renderer now voices `(5')` as
*"five minutes"* and `(22')` as *"twenty-two feet"* — the stutter is gone.**

## What this method could not have found
⚠️ ***"My omission pass was driven by the subsection headings and by the caveats the body
already states… a hazard that §9 does not mention ANYWHERE — body, facts, caption or summary
— is invisible to a pass that works by enumerating what the body says."*** The fix it names:
**read Rule 69, 607 and 625 FORWARD and ask what §9 does not answer** — a different and
longer pass. Also: `--near` lists **eight other lines in this document at 1–3 characters**,
several in §5 and §12, untested for eviction — ⚠️ **and eviction leaves no trace a checker
can see.** And the `2,967 / 265 / 2.10× / 1.76×` dataset was not re-run.

---

# Addendum 16 — `rules-verifier` on §9: NOTHING WRONG, seven refinements, and the counterweight CONFIRMED placed

**Editions:** NHL 2025-26 (both extractions); IIHF Rulebook **2025/26 v1.1 AND 2026/27**;
IIHF Situation Handbook **both**; USA Hockey Playing Rules **and Casebook**; Hockey Canada
(plain **and** `-layout`); plus `ibc.txt` and `huh.txt`. ⚠️ **It diffed its own brief's source
table against `ls sources/*.txt` first — 36 files — and found no defect this round.**

> ***"No claim in §9 is WRONG. No claim contradicts a rulebook. Nothing here warrants
> deletion."***

## ✅ The three new-to-corpus citations — ALL CONFIRMED
**Casebook 607 Sit. 4** — all **three rungs** verbatim. ⚠️ **It reproduced the flattened-grep
false negative BEFORE reading positionally: the splice `Playing Rules` / `CASEBOOK` sits
INSIDE the answer at `:11692`.** **Casebook 625 Sit. 10** — ⚠️ **and it checked BOTH SIDES of
the difference claim: 625(b)'s goal sentence says *"an attacking player"* with NO stick,
while its own FACE-OFF sentence DOES name the stick. The asymmetry is internal to 625(b) and
the corpus identified it correctly.** **HC Interp 3 Note 1** — confirmed (⚠️ **brief's line
number off by one**), and ⚠️ **it found a SECOND independent primary sentence the corpus does
not use: the 8.5 preamble at `hc.txt:6998` says outright that a referee may disallow a goal
*"without assessing an attacking player a penalty."***

## ✅ THE COUNTERWEIGHT IS PRESENT AND CORRECTLY PLACED — in the BODY
607(d)'s *"NOT 'fair game'"* is **the sentence immediately following** the corner narrowing
at `:1115`, reinforced by Casebook Sit. 5 in the very next sentence, closing *"What the
privileged area decides is the tier, not whether a goaltender may be touched at all."*
⚠️⚠️ **So the body is sound and the `safety-reviewer`'s CRITICAL stands undisturbed — it is
about the FACTS LAYER and Q11, where none of this reaches.** **Two reviewers, two layers, no
contradiction.**

⚠️ **And the arithmetic is confirmed independent of rink width:** *"at least twenty feet of
ice outside the band at each side"* is computed off the **narrow end** (85 − 44 = 41, ÷2 =
20.5), **so it holds across the whole 85–100 ft range.** ***"No arithmetic in §9 depends on a
fixed 85. The repair agent's refutation of the coordinator's framing was correct."***

## Seven refinements, ranked
1. ⚠️ **SAFETY — Casebook 607 Sit. 4's SCOPE LIMB is missing.** The relief is written *"for
   charging a goalkeeper **while in their crease or privileged area**"*, and `:1069` is
   **voiced alone**. ⚠️ **A reader shoved into a goalkeeper OUT AT THE CORNER is governed by
   Situation 5, not 4 — and Sit. 5 says a penalty *"should be assessed in every instance
   where unnecessary or avoidable contact is made."*** **A reader believes they have a
   no-penalty relief the text does not give them.**
2. **`:1093`'s *"69.4, the rule for outside it"* is a loose LABEL.** The pronoun resolves —
   the crease is named twice immediately before — **but 69.4 is keyed to the GOALKEEPER being
   outside, in a paragraph whose whole subject is where the ATTACKER stands.** ⚠️ **The fix
   costs nothing: 69.4's own heading is *"Contact Outside the Goal Crease"*, and naming the
   heading is no longer than pointing at it. This rule's subject has gone missing three
   times; the heading is the durable fix.**
3. **`:1093` calls 69.1's RATIONALE sentence the operative one — OVERSTATED, partly rescued.**
   ⚠️⚠️ **AND THE VERIFIER FOUND SOMETHING THE COORDINATOR'S CORRECTION MISSED: in the IIHF
   book the corpus's framing is the BETTER reading** — there *"The overriding rationale…"*
   closes the previous paragraph and *"If an attacking Player enters the goal crease…"* is
   **its own separate paragraph across a page break.** **So the claim is defensible for one
   of the two books it is attributed to — and the IIHF is Britain's.** **Qualify, do not cut,
   and do not strip the hedge.**
4. **`:1093`'s *"no positioning limb at all"* — confirmed-but-incomplete.** 69.4 **does**
   reach one non-contact act: *"prevented from returning to his crease area due to the
   **deliberate actions** of an attacking player"*. **Positioning-capable, no contact
   needed.**
5. **`:1116`'s *"the wider of the two"* — OVERSTATED.** 625(b)'s **goal** relief carries **no
   avoidance condition**; Sit. 4's **penalty** relief **requires** *"clearly made every
   attempt to avoid"*. ⚠️ **Different objects, so "wider" is not a comparison the texts
   support on one axis — and the conditional one is the one a reader is likelier to fail.**
6. **`:1082` cites Situation 5 C (*"remains in motion"*) where 5 E (*"plants himself"*) is the
   row on point.** ⚠️ **No safety consequence — the claim is MORE supported than the citation
   shows.**
7. **`:1094`'s *"answers it twice in the same words"* is off by one word** — 69.3 reads *"hold
   **its** hand/glove"*, 75.4 *"hold **the**"*.

## ⚠️ Attribution drift, and the disclosure is in the wrong place
Under joint *"NHL and IIHF"* attribution §9 takes **the NHL's wording sometimes and the
IIHF's other times** — 5 C as *"their goal"* (IIHF), 5 E as *"plants himself"* (NHL), 69.3 as
*"his current position"* (NHL). ⚠️ **§9 DOES disclose the convention — but the disclosure
lives at `:1140`, in the DEFENDING subsection, well after the passages it governs.**

## Negatives attacked BY CONCEPT across whole volumes — all held
*"USA Hockey writes no goaltender-vision provision"* — searched **both volumes** for
`vision`, `view`, `sight`, `sightline`, `screen`, `eyes`, `obstruct`, `block`, raw **and**
flattened, and **read all seventeen Rule 625 Casebook situations.** ⚠️ **`eyes`: ZERO
occurrences in either volume.** **CONFIRMED.** Hockey Canada's *"exactly two"* view
references — ⚠️ **`screen` returns 0 in the entire Hockey Canada book.** **CONFIRMED.**
*"The only place its rulebook mentions body position at all is Rule 8.1"* — flattened count
of `bodyposition`: **exactly 1.** **CONFIRMED.** *"The IIHF book writes no match penalty
anywhere"* — **0 occurrences.** **CONFIRMED.** And the upward-or-outward-extension negative
reproduced across three books: ⚠️ **every `outward` hit is a KNEE or LEG.**

⚠️ **Two more page-break false negatives found and defeated:** **NHL 42.1** splits across
`:5425`→`:5440`, and **HC 7.6(b)** *"returned ZERO on a raw grep and is verbatim and
wrapped."*

## What this method could not have found
⚠️ ***"Whether a claim is well-TAUGHT, only whether it is well-CITED. Every verdict above is
a text match; none tells you whether a listener hearing a facts line in isolation acts safely
on it."*** Also: **no NHL Situation Handbook exists publicly**, so no NHL casebook
interpretation could contradict the `:1093` readings; **it did not read
`site/src/data/diagrams.json`** (`check_caption_hosts --rule-like` is the tool); and ⚠️ **it
verified §9 against the BOOKS, not against its siblings — *"two documents can each be
verbatim-correct and still say opposite things to a listener."***

---

# Addendum 17 — `site-reviewer` on eight documents: NO criticals, and ⚠️ TWO COORDINATOR PREMISES REFUTED

⚠️ **It verified the build rather than trusting the claim, and did not stop at the mtime** —
per the `CLAUDE.md` warning that a fresh `dist` proves only `clean:cache` ran, it confirmed
the chain reached its **late** steps: 8 PDFs at 14:28–14:29, Pagefind index + 66 shards at
14:27, `sw.js` at 14:29, 53 HTML pages. **`dist` 14:29:08 vs newest changed content
14:25:53.**

⚠️ **The Chrome extension connected but `resize_window` reported success while the viewport
stayed pinned at 1483×766 across three attempts.** Since exact widths are load-bearing, it
switched to **headless Chrome over CDP**. ⚠️ **It also hit the nvm shim trap once (exit 127)
and used the absolute binary thereafter — the trap is still live and still catching people.**

## ⚠️ PREMISE 1 REFUTED — and the coordinator was quoting ITSELF

The brief warned that *"a Check yourself item and a Sources trailer both pointed at
`#screening-the-goalie--what-is-actually-legal`"* and told the reviewer to hunt dangling
links.

⚠️⚠️ **THAT STRING APPEARS NOWHERE IN `content/`.** `git show HEAD` confirms §9 had only
**three** `###` at HEAD; **both screening subsections are new in the working tree**, and the
diff **adds four anchor references and removes none.**

⚠️⚠️ **The old slug survives in exactly one place: `project/reviews/section_split_pilot_2026-09-18.md`
lines 134 and 175 — THIS RECORD.** **The coordinator read its own earlier addendum, mistook
it for corpus state, and briefed an agent to chase it.**

⚠️ **This is the SECOND measurement self-reference in this pilot.** The first was a grep
returning the plan row that described the grep. **Recording work in a tracked file makes that
file part of the search space, and a coordinator that greps without excluding `project/`
will keep finding its own notes and reporting them as findings.**

**And the *Check yourself* item does reference the new subsections — by NAME, in a plain
italic span, not by anchor.** *"There was no dangling link to find."*

## ⚠️ PREMISE 2 REFUTED — the mobile ToC EXISTS, and the half I got wrong is the half that mattered
The brief asserted *"the ToC is `display: none` at 375 px"*, carried from an earlier review.
⚠️ **Half right. `.toc` (the desktop aside) is hidden — but `TableOfContents.astro` ALSO
renders a `variant="inline"` `<details class="toc-inline">`, which is `display: block` at
375, collapsed by default, and carries BOTH screening entries.** **So the legibility question
does arise on a phone, and every earlier "desktop-only" scoping of a ToC finding in this
record is wrong.**

## MINOR M1 — the answer to the question the gate asked, and it is YES
**The two new sibling entries read as one entry duplicated, in BOTH viewports:**

```
desktop rail (239px)              mobile <details> (293px)
Screening the goalie — where you    Screening the goalie — where you may
may stand                           stand
Screening the goalie — whom you     Screening the goalie — whom you may
may touch                           touch
```

⚠️ **Both wrap to exactly two lines; line 1 differs ONLY by `where`/`whom` — which share
`wh`, are the same length, and sit MID-LINE. Line 2 begins `may` in both on desktop.**
**Cause is content surfaced by wrap width, not a rendering bug.** *"I am not proposing
wording."*

## MINOR M2 — pre-existing, corpus-wide
**Diagram credits render document titles in lower case** — *"Diagram from playing without the
puck"*. **119 instances across 20 documents.** **Nothing in this diff caused it.**

## ✅ Priority answers
**The `d09b318` principle HOLDS through the second split:** `h3 → dl.facts (827px) → ul prose
(2696px) → figure (1109px)`. ⚠️ **The figure closes with its own `<figcaption>`, an inline ⚠️
callout and the credit line, and ends 44px above the next `###` — it does not read as
belonging to the next subsection.**

**No facts panel dominates its subsection** — both new panels sit at or below §9's
**pre-existing** maximum (33%, *Attacking*). ⚠️ **But in absolute terms, at 375 the *whom you
may touch* panel is 2,387 px — about 2.9 phone screens of facts before the first line of
prose.** *"A reading-rhythm observation, not a defect, and not new behaviour."*

## ✅ Verified corpus-wide rather than on one page
⚠️ **For ALL 39 documents, the count of ` ```facts ` fences in source equals the count of
`<dl class="facts">` in the built HTML. Zero mismatches** — and `rules_primer` and
`language_and_glossary` show 0 **because they genuinely contain none**, not because a plugin
failed. **3,918 in-page anchors across 52 pages plus 183 cross-document fragment links — all
resolve.** **Zero leaked markup across eight pages** on eight artifact classes. **Contrast
passes 4.5:1 in both themes** (worst 5.03/5.26). **33 of 35 callouts carry a literal ⚠️
glyph.** **Facts panels render as styled panels IN THE PDF.** **Both new anchors in the
Pagefind index; the old slug correctly absent.** **Zero console errors; zero off-origin
requests from the site.**

## ⚠️ Two near-misses it reported against itself
- ***"I nearly filed this as a Critical when a naive `alt=` grep returned nothing"*** — the
  SVG figures carry their accessible name as `role="img"` + `<title>` + `<desc>`. **0 figures
  missing either, across all eight pages.**
- ⚠️ **Its first four theme captures rendered light in BOTH themes.** *"My second `goto`
  differed from the first only by `#fragment`, so Chrome did a same-document navigation, the
  page never reloaded, and `theme-init.js` never re-ran. **The site was fine; my method was
  wrong.**"* **Anyone reusing a CDP harness here must force a cross-URL load between theme
  changes.**

## ⚠️ It reported the coordinator's own mid-wave tool edit
*"`scripts/check_facts_antecedents.py` became modified during my session. It was clean in the
opening `git status` and I did not touch it… Reporting, not acting."* ⚠️ **Exactly the right
behaviour, and independent confirmation that a mid-wave tool change is VISIBLE to agents that
are watching.**

## What this method could not have found
⚠️ ***"A correctly rendered page is exactly as dangerous as an incorrect one."*** Nine
`Rule:` lines in one new panel were verified as *"legible, well-contrasted,
distinctly-labelled"* and **not one rule number, quotation or penalty grade was checked.**
Also: **the audio layer, which is how much of this corpus is consumed** — the `.m4a` files
are not in this build; **the production CloudFront rewrite** (*"if that function regressed,
my results would look identical"*); Chrome only; and ⚠️ ***"whether a caveat that SHOULD be a
callout is instead sitting in plain prose is invisible to every check I ran."***

---

# Addendum 18 — the critical repaired, and ⚠️ SEVEN REFUTATIONS OF THE BRIEF, five of them substantive

## The CRITICAL — closed by SUBSTITUTION, exactly as the constraint required
`:1105` **dropped its two verbatim geometry quotations** — *"the line states the boundary in
plain words anyway; the full quoted definition and Casebook Sit. 6 survive in the body at
`:1115`"* — and spent the room on the counterweight. **Now 288/300**, ending:
*"…a corner forechecker never. 607(d) adds that a goalkeeper outside it is NOT 'fair game' —
unnecessary contact is a penalty in every case."* **Q11 extended past the narrowing:
*"…and what being outside it does NOT mean for the goaltender standing there."***

**Majors:** `:1066` reordered to lead with the **duty**; the unit corrected to **game** in
facts, body heading and both *"does not make it free"* sentences, **now carrying 604(b)
outright** — ⚠️ **§9 finally agrees with this document's own caption**; the
skates-on-the-ice limb propagated to Common Mistakes and KT9 **with its coaching-caution
hedge**, and ⚠️ **the underlying negative re-verified: *"upward or outward"* returns 0 in
`usah.txt`, `usah_casebook.txt` and `hc.txt`.**

## ⚠️ SEVEN REFUTATIONS — the brief was wrong in both directions
1. ⚠️ **THE COORDINATOR'S 604(b) QUOTE WAS PARTIAL.** The text carries *"**(see sub-section
   (a) above)**"* and the tail *"**under this rule**"*. **Quoted with a disclosed ellipsis
   and the full tail instead of the brief's trimmed form.**
2. ⚠️⚠️ **THE SAFETY FINDING WAS OVERSTATED, AND THE AGENT SAID SO.** The brief claimed a
   reader *"believes they have a relief the text does not give them."* ***"Does not
   follow — Sit. 5 requires a penalty where contact is 'unnecessary or avoidable'. A player
   genuinely forced in who made every attempt to avoid has made contact that is neither.
   What is verifiable is the SCOPE, so that is what I wrote; I did not claim the relief
   evaporates in the corner."*** **The repair is narrower and better than the brief.**
3. **The *"no positioning limb at all"* claim is LITERALLY TRUE and was kept** — the
   incompleteness is the **implication**, so it was qualified rather than replaced. ⚠️ **And
   the returning-to-crease limb is NOT 69.4's last limb (the last one penalises the
   GOALKEEPER), so it wrote *"one of its limbs"*.**
4. ⚠️ **THE BRIEF'S BINDING CONSTRAINT WAS WRONG: the *Attacking* block is NINE lines, not at
   `HARD_MAX`.** A line **could** have been added. **Substitution fit, so it used it — but
   the constraint the coordinator stated was not the real one.**
5. ⚠️⚠️ **FINDING 8 IS BIGGER THAN PLACEMENT, AND THE DISCLOSURE WAS FALSE.** It claimed the
   quoted wording ***"throughout this section"*** is the NHL's, *"the IIHF's the same but for
   quotation marks round its defined terms."* ⚠️ **That is FALSE for §9's Rule 69
   quotations** — the IIHF's 69.3 runs in the **plural** and writes *"the appropriate
   penalty"* where the NHL writes a minor. **Verified 56.1 in both books: for THAT sentence
   the claim is exact.** **So it narrowed the old disclosure to *"in this passage"* and wrote
   a separate, accurate §9-wide one at the first joint Rule 69 quotation.**
6. **Finding 6 accepted but NOT as specified.** ⚠️ **Quoting 5 E whole would put *"on the
   crease line"* into a facts line voiced ALONE, against this document's own off-the-line
   instruction.** **Added paraphrased, alongside 5 C.**
7. **The brief's seven headroom figures were all correct** — ⚠️ **the one thing it relayed
   that survived intact.**

## ⚠️ It fixed §1 and flagged that it was out of scope
`:172` and `:181` — a **one-word unit fix**, because §1 said the §9 step *"needs a
full-checking **league**"* while §9 now says **game**. ⚠️ **Reported rather than done
silently: *"flagging it because it is outside the brief's §9 scope."***

## ⚠️ The layer test caught one more thing no gate could
Rendered through `md_to_speech` and **read every new line voiced alone**: `:1105`'s
counterweight opened *"But 607(d):"* — ***"which reads as a stranded colon aloud."*** Now
*"607(d) adds that…"*. **Third distinct defect the renderer has caught today that no checker
sees.**

## Coordinator verification, every agent stopped
**Six gates pass: 841 blocks · 5,655 facts · 39 documents · 1,298,021 words.**
`check_counts --update` run as the last step. **`--near`: none of the five edited lines
within 6 of its cap.** **`check_quote_drift` unchanged at 6 flagged, none new.**
**Build exit 0, `dist` 14:51, chain reached `check:links` — 53 pages, 10,936 internal links,
8 PDFs.**

## Environment note for the standing list
⚠️ **`check_tables.py` takes NO path argument — whole-corpus only; passing one is an argparse
error.** **Third tool-invocation trap found today**, beside `check_facts.py --quiet` and
`check_facts_antecedents.py`'s relative-path crash.

## Still open, outside §9 — each needs its own dispatch
`:1374` **AT cap** (300/300) and `:1124` at 299/300 — **one ordinary edit from an eviction**.
`check_facts_antecedents` hit at `:938`. `check_tables --near`: `:74` and `:1385`.
A `check_pointers` hit in §1. ⚠️ **And: whether the THIRTEEN other documents carrying 604(b)
use the GAME framing §9 now uses — unchecked.**

---

# Addendum 19 — `safety-reviewer` on the seven propagated documents: TWO CRITICALS, one of them NEW TEXT

**Scope the gate demanded and nobody had done.** Read `git diff` word-diff of all seven, the
**complete facts layer of all seven extracted and read line-by-line in isolation**, and the
body around every changed site.

## ⚠️⚠️ CRITICAL 1 — NEW TEXT, and it is two facts lines in ONE BLOCK contradicting each other

`content/positions/winger.md:454`, added by this diff, puts the **crease-line permission**
into that document's facts layer for the first time:

> *"Rule: … NHL and IIHF **Situation 5 E** allows the goal where an attacker **'plants
> himself on the crease line** or outside the goal crease'…"*

⚠️ **Three lines above, in the same block:**

> *"`:453` Position: … work just outside the blue paint, **off the red line**…"*

⚠️⚠️ **`Rule:` is the stronger register and carries the concrete quotation.** Voiced alone
with a 300 ms break either side, **a listener is told a screener may plant ON the crease
line and the goal stands** — while under **IIHF Rule 1.7**, *"The marked line belongs to the
Goal Crease"* (**and the British reader's book at every level**), that player is **in the
crease**, which **Situation 5 D disallows**.

> ***"This is the exact shape `CLAUDE.md` records — 'two agents wrote sentences into one
> block… each individually correct and flatly contradictory read aloud.'"***

⚠️ **The corpus has already solved this twice and both solutions fit:** `shooting.md:452`
quotes 5 E in full **and** closes *"…an appendix table, not rule text; and three books count
that line as crease, so stay off the line"*; `center.md:369` gives it a dedicated `Rule:`
line. **`:454` has 17 characters of headroom.** ⚠️ **And `winger.md`'s block has NO `Never:`
line about the crease line at all, where `center.md`'s equivalent block has one.**

## ⚠️ CRITICAL 2 — the league/game unit, confirmed, and worse than the gate stated
`on_ice_communication.md:254` (facts) **and `:552` (Common Mistakes)** both say a walk-out
*"needs a full-checking **league**"*. ⚠️ **`:271` in the same file WAS already repaired —
*"it needs a full-checking league — and a full-checking GAME"*, naming 604(b) in terms.**
**So the body is fixed and two other layers are not, inside one file.**

**604(b) verified verbatim**, and the ladder with it: **604(c) minor · 604(d) major plus game
misconduct for reckless endangerment · 604(e) match.** ⚠️ ***"The player taking it comes from
a category where checking is prohibited and is not trained to absorb it, which is the injury
half."***

## ⚠️ MAJOR — an absolute the repair STRENGTHENED, and USA Hockey's Casebook contradicts it
`center.md:387` and **Key Takeaway 8 at `:740`**: *"**No book** voids a goal for a clean
screen set from outside the crease."*

⚠️ **USA Hockey Casebook 625 Sit. 10:** *"if a goal is scored while an attacking player has
**their stick and/or skates** in the opponent's goal crease while the goalkeeper is in the
crease, the Referee shall have **no alternative but to disallow the goal**."* And 625(b)
itself reaches an attacker who *"stands, **holds their stick**, or skates through the goal
crease."*

⚠️⚠️ **The same facts block, at `:368`, tells the reader to *"keep your stick free for
tips."*** **A screener wholly outside the crease with the blade reaching into the paint loses
the goal under USA Hockey.**

⚠️ **And the document KNOWS it and files it where nobody meets it: in `center.md` and
`winger.md` the stick limb appears ONLY in the Sources trailer — a layer `md_to_speech` does
not voice and a reader skips.** `center.md:753`'s trailer **contradicts its own Key Takeaway
8 four hundred lines above.** `language_and_glossary.md:327` carries it in the body in terms.
***"The corpus has the sentence. Two documents do not."***

## Minors, and ⚠️ it checked all five census candidates INDIVIDUALLY rather than as a pattern
`shooting.md:300` is **the one changed site that did not receive the counterweight the diff
exists to add** — every other changed site gained the 69.1-first-limb qualifier. Of the five
`offensive_zone_play.md` candidates the coordinator relayed: ⚠️ **`:539` is NOT a finding
(its block contains `:538`, which carries the caveat) and `:632` is CORRECT as written** —
only `:611` (whose block has **no** crease-line line), `:14` and `:35` stand. ⚠️ **The
coordinator's earlier ranking of `:539` as a live candidate was wrong.**

⚠️ **And it corrected the brief's `--near` figures: `offensive_zone_play:610` is at 3
characters and `:609` at 1 — not `:611` at four.**

## Upheld
`offensive_zone_play.md:1063`'s repair is *"a correct repair in the right direction and the
model the rest should follow."* `:447` is *"the best-phrased instance of this instruction in
the seven documents."* The IIHF 1.7-vs-5E contradiction is handled safely and consistently at
six sites. **No fabricated hazard: every rule quoted was grepped this session with line
numbers.**

## What this method could not have found
⚠️ ***"A hazard introduced by a sentence this diff left UNTOUCHED… would have passed me — and
the `center.md` stick-limb finding is proof of that class: I found it only because the block's
'keep your stick free for tips' happened to sit four lines above the absolute it
contradicts. Nothing prompted me to check the other five documents' facts blocks for the same
collision, and I did not."*** ⚠️ **It also did not render through `md_to_speech`** — its layer
test was a programmatic extraction, *"which is the right question but not the real renderer,
and it cannot see what the chunker does at block boundaries."*

---

# Addendum 20 — `rules-verifier` on the seven: NOTHING WRONG, and a facts-layer gap in FIVE sites

**Editions:** NHL 2025-26 (both extractions); IIHF **2025/26 v1.1 and 2026/27 v1.0**; IIHF
Situation Handbook v1.1; USA Hockey Playing Rules **and Casebook**; Hockey Canada
(`hc_layout.txt`).

> ***"Nothing in the changed text is WRONG, and I recommend no deletion anywhere."***
**Six sites CONFIRMED, four confirmed-but-incomplete, three carry attribution drift.**

## ⚠️ TOP FINDING — *"69.4 reaches contact only"* is true of the GOAL and not of the RULE

**NHL 69.4's final substantive paragraph:** *"When a goalkeeper has played the puck outside
of his crease and is then **prevented from returning to his crease area due to the deliberate
actions of an attacking player**, such player may be penalized for goalkeeper interference."*
⚠️ **No contact element — a player who simply stands in the goalie's path.** **USA Hockey
answers it harder:** Casebook 625 Sit. 9 — *"the goal must be disallowed **and an
interference penalty shall be assessed**."*

⚠️⚠️ **THE LAYER TEST IS THE FINDING.** The counterweight is **in the body of all seven
documents** — and **in the facts layer of only TWO** (`center.md:392`, `winger.md:459`). **So
`offensive_zone_play.md:454`/`:530`, `shooting.md:284`/`:451` and `winger.md:29`/`:454` each
voice *"69.4 … reaches contact only"* ALONE, in their own `<p>`, with no carve-out in that
layer.** ⚠️ ***"The error runs in the dangerous direction: a listener hears that outside the
crease only contact can cost them, and blocking a returning goaltender is a minor."***

⚠️ **`offensive_zone_play.md:454` and `:530` are OUTSIDE the changed-site list — a
PRE-EXISTING gap the repair wave did not reach.** **Not a licence to cut: the fix is scoping
(*"for the goal"*) or carrying the carve-out.**

## Attribution drift at three sites — and FOUR models, one of them elegant
⚠️ **`check_quote_drift.py` scores all three CLEAN — it was run and it located the
quotations.** **Joint "NHL and IIHF" attribution carrying NHL-only pronouns** at
`winger.md:454`, `offensive_zone_play.md:551`, `shooting.md:890`. **The IIHF prints
*"plants **themself**"* and *"**their** ability to defend **their** goal"*.**

**Four sites got it right:**
- `rules_primer.md:732` quotes 5 E **in the IIHF's words** then says *"Those are the IIHF's
  pronouns; the NHL's table prints the same two rows with 'himself' and 'his'"* — **both
  halves verified verbatim.**
- `on_ice_communication.md:277` and `winger.md:466`/`:727` **disclose the convention.**
- ⚠️ **`language_and_glossary.md:327`, `:355` and `center.md:740` CUT THE QUOTATION BEFORE
  THE PRONOUN** — *"on the crease line or outside the goal crease"*. ⚠️ **Those fragments are
  printed IDENTICALLY in both books. The cleanest solution in the corpus, and it costs
  nothing.**

## ✅ Confirmed
**`language_and_glossary.md:313`'s falsified claim is properly repaired** — and *"above it"*
is **positionally correct** in both books (NHL `:7136` before `:7152`; IIHF `:5503` before
`:5523`). **Row selection correct at ALL THIRTEEN sites** — 5 C for the in-motion cases, 5 E
for the planted ones, both where both are cited. ⚠️ **One nit: `center.md:740` calls 5 C
*"the same screen in motion"* as 5 E, but 5 C carries NO vision-obstruction element.**
**No hedge stripped; none oversells.** ⚠️ **`rules_primer.md:732`'s *"appendix
interpretations rather than operative rule text"* survives and is correct — Tables 14 and 16
sit in the Reference Tables, not in the rule.** **Both negative existence claims re-attacked
across whole volumes and HOLD, the Hockey Canada count EXACT at two.**

## ⚠️ A SIXTH extraction trap, and a stale brief
**The IIHF 5 C row breaks `attacking` as `atta-` / `cking` across a line in BOTH the v1.1 and
2026/27 extractions** — *"a flattened grep for 'attacking Player remains in motion and
impairs' returns zero from a verbatim-correct row."*

⚠️ **And: *"My own instructions are stale again. The source table in this agent's brief names
~30 rows; `ls sources/*.txt` returns 36. This is the FIFTH consecutive count."*** **It used
`sources/README.md` as authority throughout.**

## What this method could not have found
⚠️ ***"The crease-line collision is unresolved and I could not resolve it… Nothing in either
book ranks rule text against appendix interpretation. The corpus's answer — stay off the
line — is the only safe reading, but it is a CHOICE BETWEEN TWO OF THE BOOK'S OWN SENTENCES,
not a ruling."*** Also: **no British domestic override was searched** (IHUK Rules of
Competition, In-House Rules, `eih_rr.txt`) — *"a British reader's actual answer could differ
and I did not look."* And ⚠️ ***"I diffed each file's changed regions, not each file whole.
Two individually-correct sentences that contradict when read aloud would survive this
method"*** — **which is exactly the `winger.md:452` block collision another reviewer found.**

---

# Addendum 21 — `content-reviewer`: ⚠️ THE BRIEF'S DIMENSION NUMBERING WAS WRONG, plus one critical and eight majors

## ⚠️⚠️ FIRST, AND IT WOULD HAVE POISONED THE GATE RECORD

The coordinator's brief asked for *"D4 — the cardinal rule"*, *"D5 — numeric ownership"*,
*"D7 — voice and register"*. ⚠️ **Verified against `project/review_process.md:220-234`: those
numbers belong to *"D4 Citation integrity"* and *"D5 Provenance"* — both
`source-verifier`'s, neither run.** **The cardinal rule is D7. Numeric ownership is D8.
Voice and style is D14.**

> ***"If the gate's C3 record copies the brief's numbering it will record D4 and D5 as
> covered by me when they are `source-verifier`'s and I did not run them."***

⚠️ **The gate blocked for want of a dimension-coverage statement, and the coordinator's
attempt to supply one would have recorded TWO DIMENSIONS AS COVERED THAT NOBODY HAS RUN.**
**The reviewer reported against canonical numbering instead. Use its table, not my brief.**

## CRITICAL — the league/game defect reaches the SUMMARY layer, and the brief missed that site
`on_ice_communication.md:254` (facts, voiced alone) **and `:552` (Common Mistakes)**.
⚠️ **The brief named `:254` and `:271`. It did not name `:552` — the summary-layer one.**
⚠️ **And `:271` in the same file ALREADY CARRIES THE FIX**, so *"the document contradicts
itself across its own layers, and the layer that is right is the body while the layers that
are wrong are the extraction layer and the summary layer. That is round 10's failure shape."*
⚠️ **`--near` reports `:264` at 299/300 in the same block — no room to add a clause without
evicting. Do not solve it by shortening another line.**

## MAJOR M1 — the *"read here"* hedge is the WRONG CONSTRUCTION at `shooting.md:300`
⚠️ **This answers the coordinator's own open question.** The reviewer's three reasons:
**(1)** the enumeration after the colon **omits 69.1 clause (1)**, which the same document
quotes two paragraphs earlier — *"'Read here' is carrying the entire load."* **(2)** at
`rules_primer.md:728` it is the conclusion of an analysis; **here it is the answer to *"So
what may you actually do?"*** — *"a reader looking for the instruction reads the bold and
stops."* **(3)** ⚠️ **It has already propagated: `playing_without_the_puck.md:575` carries it
verbatim and is NOT in this diff.** ⚠️ **And *"here" names a layer TTS does not deliver — a
listener has no "here".*** `check_pointers.py` does not fire: **it looks for pointers at
rendering layers, not at deictics.**

## MAJOR M3 — a new facts line UPGRADES the owner's safe-intersection into "a rule"
`body_contact_and_battles.md:1068`: *"Screening off the red crease line **is a rule and not a
preference**"*. ⚠️ **The owner says the opposite about its STATUS:** `rink_map.md:18` —
*"off the line is the only ice that is **safe** under all four"* — and `:570` — ***"So it is
two reference tables against three books, and that is not a margin to stand on."***
⚠️ **Under the NHL the only place the book addresses the line is Table 14 Situation 5 E,
which ALLOWS the goal there.** **D8 in canonical form: a non-owner shedding the owner's
qualification, toward more confidence, in the layer voiced alone.**

## The rest, in brief
- **M2 · Attribution drift at five sites**, two of them facts lines voiced alone —
  `body_contact:1082`, `:1093`, `winger:454`, `offensive_zone_play:551`, `shooting:890`.
  ⚠️ **`check_quote_drift` reports the 5 E strings as NOT FOUND (the two-column splice), not
  as drift** — **confirming it cannot see this class.**
- **M4 · `:1102`'s *"a deliberate one"* has no antecedent.** Voiced alone the nearest
  candidates are *"a screen"* and *"the goaltender"* — ⚠️ **a listener resolving it to
  *screen* hears that a deliberate SCREEN is charging, which is false and would stop them
  doing the legal thing the section teaches.** ⚠️ **`check_facts_antecedents` missed it: its
  discriminator is a DEMONSTRATIVE plus a short abstract noun, and *"a deliberate one"* is an
  INDEFINITE. A real gap in the tool.**
- **M5 · Six-fold restatement.** The shot-lane point now stands in **six** places in one
  document; the Rule 75 ruling likewise. ⚠️ **And a near-verbatim sentence straddles the new
  boundary — `:1093` *"Where you may stand and whom you may touch are separate questions"*
  against `:1115` *"…are different questions with different answers"*. Read aloud, a
  stutter.**
- **M6 · §9 grew 51%** (7,261 → 10,971 words) **and `check_readability_census` puts the
  document at 55.6% citation apparatus — fifth highest in the corpus, in a TECHNIQUE
  document.** ⚠️ ***"This is not a licence to cut… The cuttable material is the REPETITION in
  M5, not the four-book penalty ladders."***
- **M7 · §1's heading still asks *"Which League Are You Actually In?"*** while its own body
  and facts line now say **game** — ⚠️ **with NINE inbound links, two spelling the heading out
  in their link text, which no checker can catch.** **One atomic edit or none.**
- **M8 · `goaltender.md` is a THIRD document carrying the league defect** — `:1135` is a
  facts line at **199/200, one character of headroom.** ⚠️ **And inside this diff
  `body_contact:172` says *game* while `:173` in the SAME BLOCK still says *league*.**
- **m2 · The heading text.** ⚠️ ***"'whom you may touch' promises permission the subsection
  then denies"*** — its own first facts line is *"A screen never has to touch anybody"* and
  its content is four books' penalty ladders. *"The same species as the 'screening is
  entirely legal' overstatement the style guide records."*
- **m3 · Four new citation blocks absent from the Sources trailer** — ⚠️ **and the trailer
  asserts Casebook 625 Situations 1–17 *"have none"* of a screening provision while the body
  now quotes Situation 10 from that block.** → `source-verifier`.
- **m4 · An unlabelled rink-geometry derivation** in a document that does not own rink
  geometry. ⚠️ **Everything in it verified correct — but the owner does not hold the input:
  USA Hockey's 85–100 ft recommended width appears NOWHERE in `rink_map.md`.**

## ✅ Upheld, and one it insists must NOT be "fixed"
**Three negative existence claims re-attacked and upheld**, with the corpus's own account of
what it found *"exact"*. ⚠️ **The two coaching-caution labels are correct in all four layers
and *"MUST NOT be 'fixed' into a rule"* — *"this is the model treatment in the diff."***
**The privileged-area extent checked against its owner in EIGHT sibling documents: clean both
ways, no divergence.** **The diagram caption was already ahead of the documents.**

## Dimensions — the statement the gate blocked for want of
**COVERED:** **D6** (3 upheld) · **D7** cardinal rule — *"no coaching choice stated as law"* ·
**D8** (M3, m4, m5) · **D9** (C1, M1, M5, M7, m6, m8) · **D12** (M4) · **D13** (M5, M6) ·
**D14** (M7, m1, m2, m7) — ⚠️ **British English clean; every `-ized` spelling in the added
lines is inside a quotation.**
**OUT OF SCOPE, hand-off named:** D1/D2/D3 → `rules-verifier` · D4/D5 → `source-verifier` ·
**D10 → `facts-reviewer` — ⚠️ *"two new blocks, 21 new facts lines — the largest facts-layer
change in the diff and it has not been reviewed on its own dimension"*** · **D11 →
`safety-reviewer`, *"the most important hand-off in the report"*** · D15 → `site-reviewer`.

## What this method could not have found
⚠️ ***"grep only finds what you already suspect"*** — both propagation gaps it found came
from greps keyed to strings predictable from the diff. **It did not read the summary layers
of the four documents it sampled.** And ⚠️ **it used `check_facts_antecedents` output while
that tool was modified in the working tree — *"no finding in this report rests on that tool's
output alone"*, and M4 is a hit the tool did NOT return, found by reading.**

---

# Addendum 22 — `winger.md` + `center.md`: the CRITICAL closed, and ⚠️ FIVE REFUTATIONS including the agent's own draft

## ✅ The block collision closed WITHOUT evicting anything
`winger.md:454` now carries **the permission and its counterweight in the SAME voiced unit**,
ending *"…that is an appendix table, not rule text, and three books count that line as
crease, **so stay off it**"* — `shooting.md:452`'s shape. **Block still 11/11: no line added,
none evicted.** ⚠️ **And the attribution drift fixed by CUTTING THE QUOTATION BEFORE THE
PRONOUN** — *"on the crease line or outside the goal crease"* is **printed identically in both
books, so the joint attribution is now exact.** **The cheapest fix in the corpus, used.**

**`center.md`:** a **dedicated `Rule:` line at `:370`** for the stick limb, ⚠️ **placed in the
SLOT block beside `:368` *"keep your stick free for tips"* — the block that actually creates
the exposure** — and the false absolute at `:388` scoped to *"outside the crease **on your
body alone**"*. **The stick limb now reaches the body and Key Takeaway 8 in `winger.md` too;
it no longer lives only in the Sources trailer.**

## ⚠️⚠️ FIVE REFUTATIONS OF THE BRIEF

1. ⚠️ **THE BRIEF'S FIX SHAPES ASSUMED A LINE COULD BE ADDED. BOTH NET-FRONT BLOCKS WERE AT
   `HARD_MAX` = 11.** Neither the `Never:` line the brief asked for nor a dedicated `Rule:`
   line was possible without **evicting a rulebook fact**. ⚠️ ***"The brief did not mention
   this constraint, and following it literally would have caused the documented eviction
   defect"*** — **the exact failure this repository added `--near` for.**
2. ⚠️ **625(b)'s stick limb is its STOPPAGE limb, not its GOAL limb.** The brief's quotation
   was verbatim-correct and **mis-scoped**: 625(b)'s goal bar is a separate paragraph keyed to
   *"an attacking player in the goal crease"*, and **it is Casebook Situation 10 that extends
   the goal bar to stick-and/or-skates.**
3. ⚠️ **Situation 10 carries a condition the brief's framing DROPPED** — *"while the
   goalkeeper is in the crease"*. ***"Every line I wrote carries it; without it this would
   have shipped a half-rule."***
4. **Routing:** its first grep returned zero because the Casebook is `usah_casebook.txt`, not
   `huh.txt`. ⚠️ ***"`sources/README.md` corrected it, exactly as `CLAUDE.md` predicts."***
5. ⚠️⚠️ **ITS OWN FIRST DRAFT REPRODUCED THE DEFECT IT WAS SENT TO FIX.** `center.md:370` read
   *"your stick counts as you"* while its draft `:388` read *"your stick is not your body"* —
   ***"individually correct, flatly contradictory voiced alone. No checker saw it; only the
   whole-file read did."*** **Second time today the whole-file diff caught what hunks could
   not.**

## Verified positionally, not carried in
**Table 14 / Table 16 read from the raw columns** — 5 C, 5 D and 5 E all confirmed verbatim.
**Attribution drift confirmed: NHL *"plants himself… his"*, IIHF *"plants themself… their"* —
and the retained fragment is byte-identical in both.** **IIHF 1.7 confirmed in both
editions.** ⚠️ **The coordinator's 5 C nit was CORRECT: 5 C carries no vision-obstruction
element.** **Antecedents corpus-wide 17 → 15, none now in these files.**

## ⚠️ FOUND, AND IT IS THE COORDINATOR'S: A SPOKEN CAPTION CONTRADICTING ITS HOST DOCUMENT
**`site/src/diagrams/positions.mjs:614`** — the caption for `winger-offensive-zone-patches`,
which `md_to_speech` **speaks into `winger.md`** — **still asserts *"every clause of Rule 69
that voids a goal for where you stood names the crease"***, ⚠️ **the absolute that
`winger.md`'s own body now explicitly walks back as overstated.** **`check_absolutes` passes
on it.**

⚠️ **`offensive_zone_play.mjs:618` carries the same string.** **The defective text is LOCAL to
these two captions, not the shared `CREASE_LINE_IS_THE_CREASE` constant — which is consistent
with the repair — so they can be fixed independently. A rebuild must precede
`check_absolutes`.**

## What it could not reach
No Astro build (`site/` is the coordinator's). ⚠️ **It confirmed the trailer-only burial for
its own two files but did NOT re-run the corpus-wide census behind the "only two documents"
claim** — that census was the coordinator's and stands unverified by a second party.

---

# Addendum 23 — `body_contact_and_battles.md`: headings renamed, two duplicate facts DELETED, and ⚠️ four refutations

## ✅ The restatement cut — and it took a block OFF `HARD_MAX`
**Deleted two duplicate facts lines**: the `Key: Legal is not safe…` twin (near-verbatim to
`:1062`, **nineteen lines away, both voiced alone**) and the Rule-75 hand/glove twin.
⚠️ **That took the *whom you may touch* block from 11 to 10 — off `HARD_MAX`, which is
headroom the corpus did not have this morning.** **Rule 75 now stands in four places rather
than six; the shot-lane point in five rather than six.** ⚠️ ***"No rule, divergence or
disclosure was cut."***

## ✅ Headings renamed — the discriminator front-loaded
`Screening the goalie — where you may stand` → **`Where you may stand when you screen`**
`Screening the goalie — whom you may touch` → **`What it costs to touch the goaltender`**
⚠️ **The second no longer promises a permission it then denies.** **No other document links
to either anchor — verified. All four internal links updated; `check_links` passes.** Voiced:
*"Where you may stand when you screen."* / *"What it costs to touch the goaltender."*

## ✅ The owner's qualification restored
The *"is a rule and not a preference"* line rewritten to the owner's own construction.
⚠️ **The reasoning, verified against primary text: three books count the line as crease —
but NHL Table 14 and IIHF Table 16 Situation 5 E both read *"Goal is allowed"* for a player
planted ON it. *"So 'is a rule and not a preference' was false under the one book whose only
text on point allows it."*** **The two-way parse is gone too.**

**Attribution drift** fixed by the cut-before-the-pronoun solution. ⚠️ **And it LEFT the 5 E
*"plants himself"* quotation alone — *"it is attributed specifically to 'its Reference Table
14', so it is correct as it stands."*** **Precision in both directions.**

## ⚠️ FOUR REFUTATIONS
1. ⚠️ **The `:172`/`:173` "same-block contradiction" was compounded, and the minimal fix would
   have made it worse.** Changing *"league"* → *"game"* would have produced **a near-verbatim
   stutter with `:172`'s own closing words, two voiced-alone lines apart.** **It removed the
   unit clause from `:173` entirely** and let it carry only what `:172` does not.
2. ⚠️ **`"no book here"` is NOT an unresolvable deictic** — at both sites the **immediately
   preceding clause names the four books**. ⚠️ **And it is an ELEVEN-INSTANCE CORPUS IDIOM
   across four files, two held by other agents: *"changing 2 of 9 in my file would have been
   a half-sweep."*** **Left, and reported.**
3. ⚠️ **TWO `check_quote_drift` hits are FALSE POSITIVES, traced to the wrong source.**
   `:1513` matched `nhl_rules.txt` 70.1 **but the document quotes USA Hockey Casebook 629
   Sit. 1**, which prints the sentence ending exactly there. `:396` matched **the wrong one of
   six *"normal manner"* occurrences** in `carha.txt`. ⚠️ **The tool keeps the closest match
   across all sources — so a quotation from one book scored against another looks like
   drift.** **No drift introduced or outstanding.**
4. **The one `check_pointers` hit points at a table `check_tables --near` shows is READ ALOUD**
   (43 chars / 2 rows of headroom). **Not a dangling pointer.**

## Off-brief, found by the tools
`:938`'s *"**That good-goal limb**…"* — the file's only `check_facts_antecedents` hit, a
demonstrative with no antecedent voiced alone. **Named the thing instead.** ⚠️ **The file now
reports ZERO.**

## ⚠️ NOT DONE — and the brief undercounted it
**§1's heading `:41` still asks *"Which League Are You Actually In?"* while its own body says
the unit is the fixture.** 604(b) verified verbatim. ⚠️ **Renaming changes the slug, and
there are NINE inbound links across FIVE files** — `core_principles.md:87`,
`on_ice_communication.md:271`, **`getting_started.md:14, 59, 210, 618, 671`**,
`defender.md:249`, `defensive_zone_coverage.md:494`.

⚠️ **CORRECTION TO THE BRIEF: THREE spell the heading out in LINK TEXT, not two** —
`getting_started.md:59` as well. **Prose that no checker can catch.** *"I hold none of those
files, so I left `:41` untouched rather than break nine links."* **Correct call; it is one
atomic cross-file edit.**

## Could not reach
⚠️ **The rendered site.** The new headings were verified **through `md_to_speech`** but **not
in a browser at either viewport — which is where the near-identical-first-line defect was
originally measured.** **A `site-reviewer` pass closes it.**

---

# Addendum 24 — `shooting.md` + `offensive_zone_play.md` + `playing_without_the_puck.md`: ⚠️ FIVE REFUTATIONS, and a build race caught live

## ⚠️⚠️ THE BRIEF'S CENSUS COMMAND MISSED THE LINE THE BRIEF ASKED IT TO REPAIR
`grep -rn "no clause of Rule 69" content/` **does not match `shooting.md:300`, which reads
*"**No** clause"*.** ⚠️ **The coordinator's own census command was CASE-SENSITIVE and could
not see its own target.** **Real census: THREE** — `rules_primer.md:728`, `shooting.md:300`,
`playing_without_the_puck.md:575`.

## ⚠️⚠️ AND THE RELAYED PREMISE WAS FALSE
The brief carried a `rules-verifier`'s claim that *"the counterweight is in the BODY of all
seven documents."* ⚠️ **`grep -rn "prevented from returning\|deliberate actions of an
attacking" content/` returns ONE body hit corpus-wide — `rules_primer.md:701`** — plus
`special_teams.md:1032` in facts. ⚠️ **In these three documents the NHL/IIHF 69.4
returning-goalkeeper limb was in NEITHER layer.**

⚠️ **What their bodies DO carry is USA Hockey Casebook 625 Situation 9 — a DIFFERENT BOOK
answering the same play.** ***"So the repair was body-and-facts, not facts-only."***
**The coordinator relayed a reviewer's gloss as established fact for the fourth time today.**

**And the exposure list was 4 sites; the real count in three files was FIFTEEN — two of them
summary layers.**

## ⚠️ THE SHARPEST REFUTATION: the right answer for the wrong reason
The brief said `playing_without_the_puck.md:575` is sound **because its neighbour at `:571`
opens on clause (1)**. ⚠️ ***"That does not distinguish it: `shooting.md:296` also opens on
69.1, quotes clause (1) verbatim and works the 'only if' ceiling through, and sits exactly
the same two paragraphs above `:300`."***

**What actually distinguishes them is LOAD.** At `:575` the paragraph rests its answer on the
tables and closes on *"Work off the red line"* — **the bold sentence is a supporting step.**
At `shooting.md:300` it **was the direct answer to *"So what may you actually do?"***
⚠️ **Same construction, same adjacency, opposite verdicts — and only reading the paragraph's
ARGUMENT tells them apart.** **The conclusion held; the reasoning behind it was wrong.**

## ✅ Repaired
`shooting.md:300`'s bold now names the provisions with **no deictic** and stands alone.
**Every *"69.4 reaches contact only"* claim scoped to the GOAL**, with the returning-goalkeeper
limb carried into **body and facts of all three files** — ⚠️ **quotations cut to fragments
printed IDENTICALLY in both books** (*"due to the deliberate actions of an attacking"*,
*"may be penalized"*), **verified positionally.** ⚠️ **`shooting.md`'s two candidate blocks
were BOTH at `HARD_MAX` — appended to an existing line rather than evicting.**
**Attribution drift cut before the pronouns at both sites; both now score CLEAN where they
previously sat in the not-found list.** ⚠️ **And a displaced zone claim was REHOMED, NOT
DELETED.**

## ⚠️ A BUILD RACE, REPORTED LIVE AND SINCE RESOLVED
> *"`check_absolutes.py` now EXITS 2: the caption layer is UNCERTIFIED, and it was certified
> when I started… My first two clean runs reported '408 diagram caption/describe units
> scanned' and **covered superseded caption text**. That is round 58's failure verbatim."*

**Three diagram sources were written at 15:36–15:37 by the concurrent `site/` agent while
`diagrams.json` was still 14:50.** ⚠️ **The agent's own earlier clean runs were false passes
and it said so against itself.**

**Coordinator verification after the fact:** `diagrams.json` **15:38:03**, newer than all
three sources — **the rebuild ran.** `check_absolutes` **exits 0**, 408 units.
⚠️ **And the shared-constants file is PURELY ADDITIVE: 0 deletions, no `export const` line
changed, so `CREASE_LINE_IS_THE_CREASE` and its three siblings are BYTE-IDENTICAL to HEAD** —
**the one thing its own header warns would silently rewrite four captions at once.**

## Still open
Two pre-existing `check_facts_antecedents` candidates it **deliberately did not expand
into** — `shooting.md:48` and `playing_without_the_puck.md:340`. And
`check_caption_hosts --rule-like --by-host` against these three documents, ⚠️ **which it
declined to run while the build product was stale, because *"any answer it gave today would
be about text that no longer exists."***

---

# Addendum 25 — the spoken caption layer, and ⚠️ THE ROOT CAUSE: a comment that said "Settled ground. Do not reopen."

## ⚠️⚠️ WHY THE DEFECT SURVIVED AN EIGHT-DOCUMENT CORRECTION

`site/src/diagrams/rule69_clauses.mjs` carries, at HEAD, under a banner reading
***"⚠️ Settled ground. Do not reopen or re-word"***:

> *"Clause (1) sits under 'Goals should be disallowed only if' — a CEILING… — and **every
> provision that voids a goal for position names the crease**."*

⚠️⚠️ **THAT IS THE ABSOLUTE THE CORPUS SPENT TODAY REMOVING FROM EIGHT DOCUMENTS, SITTING
UNDER AN INSTRUCTION NOT TO RE-EXAMINE IT.** The agent's diagnosis, and it is right:

> ***"This is the comment that kept the defect alive: it tells the next agent the claim is
> settled, and it is not shipped to a listener, so it survived today's eight-document content
> correction exactly the way the file's own 'ITS BOOK DOES NOT ANSWER' warning predicts."***

⚠️ **A comment is invisible to every checker, absent from the spoken layer, and — with that
banner — actively discourages the one thing that would have caught it.** **It was appended
to, not rewritten: the narrow reading it rests on is stated, then bounded.**

⚠️ **Coordinator verification: the file is PURELY ADDITIVE — 0 deletions, no `export const`
touched, all four constants byte-identical to HEAD**, so the other two captions rendered
unchanged. **This is the one edit in that file that could have silently rewritten four
captions at once, and it did not.**

## ✅ Both captions repaired, through the shared constant
`winger-offensive-zone-patches` (→ `winger.md`) and `oz-net-front-screen` (→
`offensive_zone_play.md` **and** `center.md`, both confirmed by marker grep) now **lead on
the books' own worked example via `TABLES_ALLOW_OUTSIDE`**, with *"That is an appendix table
rather than rule text"* as the disclosure — **the same scope `winger.md`'s facts line and
`shooting.md:452` use for the same row.** ⚠️ **It imported the constant rather than retyping
the citation, *"because that string carries the IIHF 2025/26→2026/27 Table 16→14 renumbering
and must have one owner."***

**Read-back from the rebuilt `diagrams.json` — the only proof of the spoken layer:**
both test **false** for `every clause|names the crease|names the goal crease`.

## ⚠️ FIVE REFUTATIONS
1. ⚠️ **`rules_primer.mjs:492` is NOT an owner field — it is prose inside a comment.**
   `the-trapezoid`'s actual `owner:` already points at `rink_map.md` and **was correct.**
   **Nothing to fix as specified.** ⚠️ **Coordinator verified the real shape: 17 files / 34
   occurrences of the retired name — matching `CLAUDE.md`'s census, not its retired "21".**
2. **The brief's *"the defective text is LOCAL to these two captions"* was ONE SHORT.**
3. **Trap 1 verified rather than assumed** — the 5 E phrase returns **zero** in both
   extractions; read positionally instead.
4. **Trap 2 verified and found INAPPLICABLE:** ⚠️ **`TABLES_ALLOW_OUTSIDE` carries NO
   quotation marks at all — it REPORTS rather than quotes, so there was no drift to fix and
   no new quoted span was added.**
5. **The core premise re-derived from primary text**, not carried in.

## ⚠️ A THIRD CAPTION, IN NEGATED FORM — deliberately NOT changed, handed back with reasons
**`zone_entries.mjs:215` — `entry-wide`**, spoken into `zone_entries.md`: *"That **no clause
voids a goal for where you stood outside the crease** reads the rule's structure…"*
⚠️ **Exactly the shape the brief predicted a grep would miss — found by scanning all 204
built caption units, not by pattern.**

**Its argument for leaving it:** scoped to *"voids"*, which **survives the strict reading**
that 69.1's actual disallowing sentence is the voiding provision and clause (1) is only the
ceiling; and it already carries the structural hedge. **Against:** *"a listener hears an
absolute either way"*, and `entry-wide` **does not import `TABLES_ALLOW_OUTSIDE`** — adding
it costs ~230 chars in a caption about zone entries. ⚠️ **And a prior reviewer's comment at
`:205-212` documents that hedge as deliberately scoped — *"that scoping is what today's
finding undercuts."*** **Coordinator's call.**

## ⚠️ It reported a length regression AGAINST ITSELF
*"I did not compress both."* `oz-net-front-screen` **shrank 119 chars**;
`winger-offensive-zone-patches` **GREW 63** (1,471 → 1,534) because it previously carried no
table citation at all. ⚠️ ***"Trap 3 said compress, not expand… the 55.6% citation-apparatus
ratio on `winger.md` is yours to weigh, and this nudges it the wrong way."***

## Also learned
⚠️ **`screen-the-goalie-sightline` is spoken into THREE documents** — `rules_primer.md`,
`body_contact_and_battles.md` **and** `playing_without_the_puck.md` — **not one.** It is
**clean.**

## What it could not reach
**No site render; no `md_to_speech` of the three host documents** — ⚠️ ***"`oz-net-front-screen`'s
own comment says both hosts state the clause-by-clause working 'immediately beside the
marker', which my replacement changes the relationship to"*** — `check_caption_echo`
territory. **And its gate runs happened while agents were live in `content/`: *"a checker
pass during concurrent writes proves nothing about the `content/` half."***

---

# Addendum 26 — the §1 heading renamed atomically, and ⚠️ SEVEN REFUTATIONS including the coordinator's causal story

## The decision, and the reasoning is better than the brief's
**`## 1. Which League Are You Actually In?` → `## 1. Which Contact Rules Are You Actually Playing Under?`**

> ***"The deciding argument is not that the heading 'names the league' — it is that the
> heading asks a question the section itself says is insufficient, and cannot answer.
> Knowing which league you are in does not tell you whether you may check tonight."***

**§1 already knew this**: it carries *"Check the game, not the age group"* verbatim, the
604(b) facts line, and the Casebook bullet *"Coaches do not have the authority to decide what
rules they choose to play under on any given day."* ⚠️ **The rename is strictly non-lossy —
the old heading's scope was a PROPER SUBSET of the section's content** — and it **kept
*"find out which category your league falls into"* as the FIRST clause of the opener,
*"precisely so the rename doesn't overcorrect into 'classification is irrelevant'."***
**Verified aloud: own paragraph, 1000 ms before / 450 ms after.**

## ⚠️⚠️ SEVEN REFUTATIONS
1. ⚠️ **THE COORDINATOR'S CAUSAL STORY WAS WRONG.** The brief said *"that section's own body
   and facts line were corrected today."* ⚠️ **`git diff -U0` shows NO change anywhere in
   lines 41–167 — verified independently by the coordinator: the only two hunks in that range
   are the rename agent's OWN.** The 604(b) facts line and the coaches' bullet **are both in
   HEAD and long predate today**, traced back through `8087c1a`. ⚠️ ***"So the heading was not
   made stale today — it has been out of step with §1's own content for as long as 604(b) has
   been in it. That makes the case for renaming STRONGER, but the brief's causal story is
   wrong."***
2. ⚠️ **Wrong path in the ownership list** — it is `content/getting-started/getting_started.md`,
   not `content/foundation/`.
3. ⚠️ **Census: nine links across five files → TEN across SIX.** **The brief's own prescribed
   grep is STRUCTURALLY BLIND to the tenth**, because it is an **intra-document link using a
   bare `#fragment` with no filename** — `body_contact_and_battles.md:1671`, in **Key Takeaway
   1, inside the target file.** ***"The brief only looked outward."***
4. ⚠️ **Spelled-out heading text: three → FIVE.** It missed both in the target file — `:1671`,
   and **`:1610`, a Self-Check question that is NOT A LINK AT ALL**, so ⚠️ **`check_links.py`
   could never have seen it in either direction.**
5. **Two prose echoes no checker sees**, also unflagged: `core_principles.md:87` and
   `getting_started.md:14`. **Both repaired.**
6. ⚠️ **Its OWN census tool undercounted the same way first** — a greedy `sed` matched the
   *last* `#` on `:1671` and reported it as a link to a different anchor. ***"Caught only by
   reading the line."***
7. ⚠️ **Its count-asserting script ABORTED BEFORE WRITING ANYTHING** on the first run, because
   it had double-counted an anchor. **Verified clean, corrected, re-run.** ⚠️ **An atomic
   cross-file rename that refuses to write a partial state is the right shape** — an agent
   died mid-run today and left a tree that passed every gate while half-repaired.

**Thirteen sites, six files, one pass.** New slug computed **against `check_links.slugify`
before editing, not guessed.** ⚠️ **And `:43` was rewritten too — *"without this the rename
would have been cosmetic: the listener would hear the new heading and then immediately hear
the old frame restated."***

## ⚠️ THIS RECORD IS NOW PARTLY STALE, AND THAT IS THE CONVENTION WORKING
**Addendum 21 and the M7 entry quote the OLD heading.** ⚠️ **They are not corrected in place —
`review_history.md` is reconstructed from these records, and a record rewritten to match
later state destroys the evidence that the finding was made.** **This addendum is the
correction. The old quotations stand as what was true when they were written.**

## Open, deliberately not swept
⚠️ **`site/.print/*.html` holds stale references in SIX files** — **gitignored, untracked
build artefacts that regenerate.** **A `clean:cache` build is owed before the gate.**
And two *"league"* framings one layer out — `body_contact_and_battles.md:30` and
`getting_started.md:14`'s preceding clause — ⚠️ **left because *"neither claims league is
SUFFICIENT"*, and recommended as a follow-up row rather than a fix it could verify sentence
by sentence.**

---

# Addendum 27 — the league framing finished: ⚠️ FIFTEEN sites where the brief named FOUR

## ⚠️ THE STRONGEST SITE THE BRIEF DID NOT HAVE
**`body_contact_and_battles.md:396` — §5's LEAD BLOCKQUOTE**, *"the first and most prominent
sentence in the section that teaches the check itself"*, still league-scoped ⚠️ **with the
604(b) correction landing 200+ words later in the same blockquote.** ***"Identical pattern to
`:1147`, at the top of the section."*** **Now: *"This section applies only in games that
permit body checking."*** (verified by the coordinator).

⚠️ **And §5's FACTS LAYER was the unpropagated one** (`:437`, `:439`, `:486`) **while §5's
body at `:396` had already been repaired — body ✓, block ✗.** **The round-10 shape, one
section deeper than anyone had looked.**

## ⚠️ FOUR REFUTATIONS
1. ⚠️⚠️ **THE CAP PREMISE WAS BACKWARDS.** The brief warned the block *"may be at or near
   `HARD_MAX` — measure"*. **Measured: the two edited lines were 192 and 196 of 200 and both
   got SHORTER — 192→190, 196→183.** ***"Substitution freed 15 characters; nothing had to be
   traded out."*** ⚠️ **The block's tightest line is `:1135` at 197/200 — a line it did not
   touch.**
2. **`:1147` was WORSE than described** — the brief called it *"repaired to the middle of its
   own sentence"*; **the same line carried a SECOND stale framing further along.**
3. **`:1577` was half the brief's call** — its negation half is fine; **only the trailing
   clause was the defect. One word.**
4. **The brief's list was ~4 of 15.**

## Considered and deliberately LEFT — the discrimination that matters
`:66` (a warning **against** assuming, correctly citing 604(a), with 604(b) in its sibling
line); `:181` (⚠️ **the very next sentence is *"And under USA Hockey Rule 604(b) it also
depends on the fixture"* — league stated as NECESSARY, not sufficient**); `:771` (a context
clause that **adds** a limit); `goaltender:1146`, `:1347`, KT12 (**already correct**); and
⚠️ ***"in any league: head up"* — a universal, true of every game.**

⚠️ **And it declined to add a sixth `Rule:` line to the `bcb` net-front block because its
`Technique:` line already reads *"Full-checking games only"*.** **Restraint where the corpus
already carried the point.**

## ✅ The safety property held
***"No operative prohibition was made conditional. All four `Never:` lines still bind
unconditionally — they now bind in any GAME rather than any LEAGUE."*** ⚠️ **This was the
gate's reason for grading the class MAJOR rather than critical, and the repair preserved
it.**

## Coordinator verification
**Caption layer certified: `diagrams.json` 15:41:25 postdates all three `.mjs` sources
(15:36–15:37); `check_absolutes` passes, 408 units.** ⚠️ **The agent flagged that its own
runs might have read a stale build product — they did not, but it was right to say so rather
than assume.**

## Open
⚠️ **`goaltender.md:1135` sits at 197/200 and was not touched — *"the next edit to that block
will break it."*** **And no corpus-wide semantic census for *league-as-sufficient* outside
these two files.**

---

# Addendum 28 — both false Hockey Canada claims closed, and ⚠️ THE CAP SEARCH AND THE VOICED TEST DISAGREED

## ✅ `center.md:388` — the regression reversed
Replaced with **the corpus's existing canonical wording, byte-identical to `winger.md:455`
and `body_contact_and_battles.md:1083`**: *"USA Hockey writes no goaltender-vision provision
in either volume."* **Line unchanged at 295/300.** ⚠️ **And Hockey Canada's crease scope was
propagated UP from the document's own body at `:410`, which had it right all along** — so
`:388` and `:389` now agree: **USA Hockey has none; Hockey Canada has two, and both need you
in the crease.**

## ✅ `offensive_zone_play.md:455` — the second instance closed
⚠️ **Found by an agent working a different file, in a document it did not own.** Now:
*"Outside the crease all four books leave a no-contact screen alone — … USA Hockey writes no
goaltender-vision provision, and **Hockey Canada's two references at 8.5 reach only a player
in the crease**."* **The conclusion, the USA Hockey negative and the inside-the-paint
counterweight all intact — only the stated reason changed.** ⚠️ **Body-right / facts-wrong:
the prose at `:459` was already correct, so this was never a propagation gap.**

## ⚠️⚠️ THE FINDING OF THE ROUND: the cap search and the voiced test disagreed

**The coordinator's suggested wording did not fit.** Every variant carrying *"Hockey Canada's
two goalie-view references, both at Rule 8.5"* measured **301–338 characters against the 300
cap.** ***"The sketch was a brief, and it was not paste-able."***

⚠️⚠️ **And the 298-character variant it nearly shipped was a LISTENING DEFECT.**
*"Hockey Canada's two **8.5** references"* is voiced by `md_to_speech` as
***"two eight point five references"*** — **mishearable as a single number.**

> ***"I caught it only by rendering and reading it… The cap search and the voiced test
> disagreed, and the voiced test won."***

**Rewritten to *"two references at 8.5"* → *"two references at eight point five."***
⚠️ **A character-count optimisation found a string that fit and was wrong in the ear. Nothing
but the renderer could have caught it.** **`:455` now sits at 3 characters left — *"the price
of the precision"*, declared rather than hidden.**

## ⚠️ FOUR MORE REFUTATIONS
- **Both `center.md` blocks were at `HARD_MAX` 11** — the brief did not say so and it was
  **decisive**: *"restore it to winger's facts layer"* could not mean adding a line, so the
  fix was **folded into an existing line**. ⚠️ **The eviction hazard, avoided by measuring.**
- ⚠️ **"Hockey Canada writes TWO PROVISIONS" was the coordinator's loose paraphrase.** They
  are **one provision and its own interpretation, both at Rule 8.5.** **The corpus says
  *"references"*, and `body_contact_and_battles.md:1083` records *"both at 8.5."***
- **`center.md:392` is actually `:391`.** ⚠️ ***"A line number is a figure."***
- **`offensive_zone_play.md:455`'s block was at 10 of 11** — an 11th line was legal, ⚠️ **and
  it declined, because that would leave the block AT the cap, which is the documented
  eviction hazard.** **Restraint measured, not assumed.**

## ⚠️ SEARCH TRAP SEVEN, REPRODUCED INDEPENDENTLY BY BOTH AGENTS
`grep -c "goaltender's vision" sources/hc.txt` → **0**; **curly apostrophe → 1.**
⚠️⚠️ **Unlike the other six traps, this one fails in the direction that CONFIRMS A FALSEHOOD:
a verifier checking *"Hockey Canada writes no goaltender-vision provision"* gets a confident
zero and marks it CORRECT.** ⚠️ **That is precisely the claim it hid, twice.**

**Both agents then broadened past the given line numbers and swept the whole book:** the only
`view`/`vision` hits are `:6998`, `:7051`, and `:6112` — *"peripheral point of view"* **in
the head-contact rule, not a goalie provision.** ⚠️ **"Two", "both at 8.5" and "crease-only"
all hold.** **The USA Hockey negative re-attacked across BOTH volumes and holds.**

## Reported, not touched — in other agents' unstaged work
⚠️ **A possible tension at `offensive_zone_play.md:456` vs `:556`:** the facts line says 69.4's
second paragraph reaches **position** and *"no contact appears anywhere in that clause"*,
while the prose opens *"Rule 69.4 asks two questions **about contact**"*. **Reconcilable —
different clauses — but *"voiced alone the pair reads oddly."*** Also flagged as unverified
candidates: `:571` and `:717`, structurally similar cross-book negatives.

---

# ⚠️ ADDENDUM 28b — THE `facts-reviewer` REPORT ADDENDUM 29 CLOSES, RECORDED LATE

⚠️⚠️ **A `commit-gate` found this gap and it is the coordinator's: *"the `facts-reviewer`
whose 'six majors' Addendum 29 closes has NO REPORT OF ITS OWN anywhere on disk — the
findings survive only as the repair agent's paraphrase of them. C8 asks for the FINDINGS, not
only the fixes."*** **Recorded here from the report, out of order, rather than left absent.**

⚠️ **And the numbering: this record opens at Addendum 5 because addenda 1–4 were written into
the sibling records `crease_line_layer_round_2026-09-18.md`,
`crease_line_second_wave_2026-09-18.md` and `scroll_regions_site_round_2026-09-18.md`, which
are committed. The gate was right that they are not in THIS file; they are not missing from
the record as a whole.**

## Coverage it declared
**10 of 26 in-scope documents had facts changes; all 10 read.** **26 changed blocks · 248
facts read in full**, plus 5 out-of-diff lines pulled in by its propagation pass. ⚠️ **It
verified mechanically that the other four changed content files' facts sets are BYTE-IDENTICAL
to HEAD** — *"the whole change in those files is body prose."* **A full `md_to_speech` render
of every changed document, reading the rendered `<p>` blocks rather than reasoning from the
convention.**

## CRITICAL — `winger.md:29`
*"…and 69.4, for outside it, reaches contact only"* — **in a file this diff had already
edited at `:454`, `:458` and `:459`.** ⚠️ **NHL 69.4's returning-goalkeeper paragraph reaches
positioning with NO contact.** ***"Voiced alone it tells a net-front winger that outside the
crease only contact is reachable. Standing in a goalie's path back to the crease without
touching them is the play it licenses, and 69.4 penalises it."***

## The eight majors
1. **A Hockey Canada half-quote whose *"However"* takes the first half back** — ⚠️ **and *"a
   screener impedes vision by definition, so the half quoted is the half that does not apply
   to the reader of this section."***
2. **A fact tracing to NO sentence in its section** — four strings tested against the exact
   line range. **extract-never-author.**
3. ⚠️ **Two senses of *"braced"* fused with a dash asserting a causal link** — *"take braced"*
   is RECEIVING, *"a braced shove"* is DELIVERING. ***"Charging is not why you do not brace
   against a goaltender."***
4. **An all-`Rule:` block whose section has imperatives** — ⚠️ ***"Hands and blade down"*
   reached NO fact anywhere in the corpus**, and the chin-cup specificity existed in no block
   in any document.*
5. ⚠️ **The one instruction that keeps this reader out of the box reached no coaching fact** —
   ***"A listener hears eight penalty ladders and is never told the one thing that saves
   them."***
6. **A disclosure dropped where two siblings in the same diff kept it** — ⚠️ **and one site
   was an AUTHORITY DOWNGRADE: at HEAD it rested on rule text and was changed to rest on an
   appendix table with no status note added.**
7. **A new fact in a section whose body says nothing about it** — ⚠️ **structural cause
   visible: *"the correct home block is at 11 = `HARD_MAX`, so the fact went to the neighbour
   instead."*** **Per non-negotiable 3, evidence about the SECTION.**
8. **Three unchanged documents still carrying the false claim**, ⚠️ **one of them
   contradicting a correct line in its own file.** ***"The corpus already knew; this wave
   repaired six lines across four files and stopped."***

## ⚠️ What it said against its own method
> ***"I ran all six passes, so no pass is declared unrun — but three of them were shallower
> than they look."*** **Traceability was run per changed FACT, not per BLOCK.** **The omission
> pass rebuilt an imperative list from scratch for THREE of twenty-six blocks** — *"a section
> whose body has always held an imperative that never reached its block would have passed
> me."* **And the propagation pass keyed on ONE STRING:** *"a claim this diff corrected whose
> wording I did not guess is invisible to that method."*

⚠️ **Its closing line, which is the argument for why D10 could not be declared out of
scope:** ***"The two most consequential things I found were both found by READING THE BLOCK AS
A UNIT and asking what contradicts what, not by any check. Neither is visible to
`check_facts.py`, and both sat in files a clean checker run had just certified."***

---

# Addendum 29 — the facts-layer repairs, and ⚠️ A BRIEF OF MINE THAT WOULD HAVE SHIPPED A DEFECT

## ⚠️⚠️ THE CLOSEST CALL OF THE DAY — my minor 2 was wrong, and the agent nearly shipped it

The brief said `:1081` and `:1082` describe **Situation 5 E** two ways and *"heard 300 ms
apart they read as two different rows"*, so drop one.

> ***"I first did what it asked — dropped one of the two Situation 5 E descriptions. Checking
> Table 14 afterwards: **5 C is the attacker who 'remains in motion'; 5 E is the one who
> 'plants himself'.** A screener is planted. The clause I had removed was the only one
> covering the reader's actual case, leaving the screen's legality resting on the
> moving-player row."***

⚠️ **They were never two descriptions of one row — they were TWO DIFFERENT ROWS, and the
coordinator's "fix" would have left a planted screener's legality resting on the row about a
moving player.** **Rewritten to name both rows by what distinguishes them.**
⚠️ **This is the fifth coordinator wording today that was itself the defect, and the only one
an agent executed before catching.**

## ✅ Six majors closed, and two of them with ONE line
**`Attacking the net front`** 9 → 10: the near-post instruction extracted ⚠️ **(confirmed the
owner document was the only one of four missing it)**, and Situation 6 D's *"a table row"*
hedge **restored** after the tree had dropped it.

**`Where you may stand`** 9 → 11: a `Never:` for *hands and blade down* — ⚠️ **the instruction
whose RULE was already in the block but whose IMPERATIVE reached no fact anywhere in the
corpus** — and a `Key:` for the chin-cup specificity, ⚠️ **grepped across the whole facts
layer and found in no block in any document.** The Hockey Canada half-quote cut; the three
USA Hockey conditions made a **conjunction**, matching the rule's own *"and"*.

**`What it costs to touch the goaltender`:** ⚠️ **one rewritten `Never:` line closed BOTH
major 3 and major 5 without taking a slot** — the receiving/delivering senses of *"braced"*
unwelded, and the avoidance thread extracted: *"…only an obvious attempt to avoid them keeps
you out of the box."* **42.1's crease scope restored.**

⚠️ **And it caught a dangling antecedent IT had just created** — *"the same braced shove"*
after removing the referent — ***"only reading the line voiced alone in the render."***

## ⚠️ FOUR MORE REFUTATIONS
- **Major 1's *"misattributed"* was WRONG.** *"An attacking player is NOT committing a foul by
  simply standing in the goal crease"* **is Interpretation 3's own first sentence, verbatim.**
  **The attribution was right; the defect was the dropped *"However"* and the terminal
  position.** **Repaired as a reversal, not a citation error.**
- **Major 2's fix is NOT deletion.** The claim is accurate and verified in both books **and in
  the 2026/27 edition** — ⚠️ **so non-negotiable 3 forbids removing it, and the style guide
  says an unextractable fact is *"a finding about the SECTION."*** **It SOURCED THE SECTION
  instead: the body now carries both permissions and the fact traces.**
- **`:1102` had 9 characters, not room. `:1110` had 39, not 37.** ⚠️ **Both figures in the
  brief were wrong.**

## The 69.4 propagation — ⚠️ SEVEN more sites, and the ordinal error spreads further
A second agent repaired the three named sites **plus two more its own census found, both
body-layer and both stating the falsehood MORE STRONGLY** than the facts lines did. ⚠️ **It
also re-pointed a bare *"That"* whose antecedent its own insertion had duplicated, and fixed
a PERSON error — *"the reader is the defender, not the screener"* — caught in the render.**

⚠️ **`playing_without_the_puck.md:459` is NOT a facts line** — the brief called it one; **it
is body prose.**
⚠️ **`body_contact_and_battles.md:1095` scores on the string and is NOT a defect** — its very
next sentence is *"That is not the same as saying it reaches only contact"*. ***"Do not let a
sweep fix it."***

**Six sites and six ordinal errors remain, now dispatched.**

## Open — handed back with measurements
⚠️ **`Where you may stand` is now AT `HARD_MAX` 11, and the style guide says a full block with
imperatives still in the body is a SECTION-SPLIT candidate** — *"a structure decision outside
my file-scoped brief."* **`:1085` still lacks the appendix-table hedge: 4 characters of
headroom and no free slot.** ⚠️ **`time_and_space.md` states the goal limb and the penalty
limb NOWHERE — the facts line has 22 characters and the clause needs 69.**

---

# Addendum 30 — the last sites closed, and ⚠️ THE LARGEST GAP OF THE DAY, FOUND UNASKED

## ⚠️⚠️ `goaltender.md` HAD THE RETURN PROTECTION ONLY AS USA HOCKEY'S
> ***"It carried Casebook 625 Situation 9 twice and stated NHL/IIHF 69.4's clause nowhere —
> in the position document, for the reader whose book is the IIHF's. That was the largest gap
> this pass found."***

⚠️ **A goaltender reading their own position document learned that USA Hockey protects their
route back to the crease and nothing about the book Britain actually plays under.** **Now
fixed in the body, the facts layer and Key Takeaway 8.** **Nobody asked for this; its census
found it.**

## ⚠️ A 5 C / 5 E CONFLATION IT FOUND IN ITS OWN FILES, PRE-EXISTING
`goaltender.md:1052` and `:1119` **both described Situations 5 C and 5 E as ONE row** —
*"obstructs your vision **and** impairs your ability to defend."* **Verified against both
books: 5 C has NO vision limb** (*"remains in motion and impairs the goalkeeper's ability to
defend"*); **only 5 E has it.** **Both split.**

⚠️⚠️ **And `language_and_glossary.md:355` — the *Screen* glossary entry — rested on 5 C
ALONE: the MOVING-PLAYER row, for the screener, who is planted.** **Now names 5 E and says
why.** ⚠️ **This is the same trap that nearly shipped an hour earlier from a coordinator
brief. Two independent instances, one day.**

⚠️ **And the discriminator cut the other way too: `language_and_glossary.md:313` cites 5 C
alone and is CORRECT — *"a net drive is a player in motion, so 5 C genuinely is its row."***
**Left alone.** ***"The discriminator cuts both ways."***

## ⚠️ IT REFUTED THE COORDINATOR'S PARAGRAPH COUNT — and found a better reason for the fix
The brief said 69.4 has *"four indented paragraphs"*. ⚠️ **It has a FLUSH LEAD paragraph and
THREE indented ones — and the third indented is the *"Refer also to Reference Tables"*
cross-reference, not rule text.** So the returning-goalkeeper clause is *"the third
paragraph, the **second indented** one, and the third of three rule-text paragraphs."*

> ***"The ordinal is ambiguous on the page, which is the strongest argument for the
> substitution — stronger than staleness."***

**Five ordinals replaced with *"its returning-goalkeeper clause"*. No ordinal for this clause
remains anywhere in the corpus.** ⚠️ **And `rules_primer.md:1147` was NOT an ordinal error —
it already called this paragraph the third. Left untouched.**

## The measurements, given rather than asserted
⚠️ **`time_and_space.md` has NO SLOT.** Both blocks at `HARD_MAX` 11; `:253` has 22 characters
free and the clause needs ~69. **Aggressive compression keeping all three limbs measures 328
and 383; the only version that fits measures 278 — *"and it fits only by evicting 69.3's
no-contact crease ground"*, which is the eviction `--near` exists to prevent.**
**So it went in the BODY, where there is no cap.**

⚠️ **Same in `shooting.md`** — block at 11, compressed clause 335 against 18 free. ⚠️ **It used
the `Position:` line's 92 free characters and wrote the counterweight as an INSTRUCTION
rather than a rule claim:** *"— and never in a goaltender's path back to their crease."*
**Right register for the layer it landed in.**

## Disclosure asymmetry closed
**Five sites resting a permission on 5 C / 5 E with no status note** now carry one. ⚠️ **It
propagated `shooting.md:473`'s OWNED wording rather than re-deriving the negative** — and
said so: *"a grep of `nhl_rules.txt` for status language around the Reference Tables found
nothing, which supports it but is not a full test."*

## The handback
⚠️ **`goaltender.md` block 1097–1109 is the natural home for the new returning-goalkeeper
fact** — it is the outside-the-crease 69.4/69.7 block — **and it is at 11 with 1–6 characters
free on most lines.** It went into block 1064–1075, which had a slot, *"where the framing is
penalty severity for contact."* ***"It reads correctly voiced alone, but a `facts-reviewer`
should decide whether it is in the right block, and whether two of block 1097–1109's lines
could be merged to bring it home."***

---

# Addendum 31 — the shed precondition, and ⚠️ FOUR LOOK-ALIKES A SWEEP WOULD HAVE FALSIFIED

## ⚠️⚠️ THE REFUTATION THAT MATTERS: two books, two different preconditions

**NHL/IIHF 69.4** bites only where the goalkeeper *"**has played the puck** outside of his
crease"*. ⚠️ **USA Hockey Casebook 625 Situation 9 does NOT carry that requirement** —
verified by the coordinator at `usah_casebook.txt:14675-14684`:

> *"If the goalkeeper is **completely out of their crease**, an attacking player may precede
> the puck into the crease… **However, if the goalkeeper is attempting to return** to the goal
> crease and there is any interference by the attacking player…"*

⚠️ **Its preconditions are *"completely out of their crease"* and *"attempting to return"* —
there is NO puck-playing requirement in that book.**

> ***"A string sweep for 'returning goalkeeper' would have written a false precondition into
> four correct sentences."***

**Four sites — `scanning:336`, `:349`, `shooting:503`, `:830`/`:890` — state the USA Hockey
route and were correctly LEFT ALONE.** ⚠️ **This is the sweep hazard in its most dangerous
form: the pattern matches, the fix is wrong, and the result would read as a tightening.**

## ⚠️ The brief's site list was 67% short — and its own first census missed two
**Named 2; the semantic test found 6.** ⚠️ **And its own `grep -n` census missed two because
previews truncated 3,000-character lines mid-sentence — *"the misses were caught only by
rendering through `md_to_speech` and by a full-text (untruncated) scan."***

⚠️⚠️ **Two of the six were on the brief's "do NOT re-open" list — and it repaired them
anyway, correctly: *"that list was about today's DEICTIC/ORDINAL repairs, and a distinct
defect was sitting in the same lines."*** **A do-not-touch instruction scoped to one defect
does not immunise a line against a different one.**

**`shooting.md:300` already carried the precondition in full and needed nothing.** **Three of
the six were also missing *"deliberate"* — the rule's own operative word — added.**

## The arithmetic, given rather than asserted
**Both facts blocks at `HARD_MAX` 11**, so nothing could be added and nothing was evicted. The
precondition costs **+29 net** against **14 free** at `scanning:333`, and fitted only via
three substitutions — ⚠️ **including *"disallowing sentence"* → *"disallowing limb"*, and
*limb* is the corpus's own glossary term.** **Final 297/300.** ⚠️ **It also TESTED moving the
limb to a neighbouring line with 44 free and reported it does not fit (336 chars) — a
measurement, not a guess.**
⚠️ **And it corrected its own byte-count against a character count: *"the brief said 286, my
first byte-count said 288; character count is authoritative."***

## ⚠️⚠️ AN OPERATIONAL HAZARD IT CAUGHT AND THE COORDINATOR CONFIRMED
> ***"Both my files are `MM`. They were already staged when I started; my repairs are
> unstaged. `git diff --name-only content/` returns both — index does NOT match tree.
> Re-stage before the gate, or you ship a half-done propagation that no checker and no hook
> can see."***

**Coordinator verified: FOUR files show `MM`.** ⚠️ **This is `CLAUDE.md`'s named failure —
*"a commit can pass every mechanical gate while shipping a staged state nobody verified"* —
and it exists because the coordinator staged BEFORE the last wave finished.** **Nothing will
be re-staged until every agent has stopped.**

## Handbacks
⚠️ **`check_absolutes` exits 2 — caption layer uncertified**, because a live agent's
`rule69_clauses.mjs` (16:31) is newer than `diagrams.json` (16:24). ***"A checker result taken
while agents are live proves nothing."*** **A rebuild is owed.**
⚠️ **And the load-bearing assumption it names against itself: the corpus asserts *"both books,
same number"* for 69.4, and *"I verified ONLY the NHL text. That assertion is load-bearing for
every one of the six repairs and is unverified in this session."***

---

# Addendum 32 — the goaltender findings, and ⚠️ THE SPLIT WAS REFUTED WITH BETTER ARITHMETIC

## ⚠️⚠️ CONCATENATION IS NOT CONSOLIDATION
A `facts-reviewer` recommended splitting the section, and **proved a merge impossible**:
`1099 + 1074 = 382 > 300`.

> ***"That arithmetic tests CONCATENATION, not CONSOLIDATION. Rewritten as one fact the pair
> fits in 294 with every load-bearing element intact."***

⚠️ **The split would have required dividing a ~9,000-character single paragraph across two
new sections, writing two headings and two blocks, and re-reviewing all the new prose — for a
defect a two-line edit removes.** ***"Per the brief's own instruction, a half-done split is
worse than none."***

**Both settled elements survive** — the precondition (*"after you played the puck out"*) and
the permissive *"may be penalized"*. ⚠️ **The one loss declared plainly: the tail *"for
goalkeeper interference"* — *"the quote is truncated, not altered."*** **The old block is now
10 facts, off `HARD_MAX`.**

## ✅ The other three majors
**69.7's rebound/loose-puck carve-out** restored **in the line that makes the claim**, *"since
each facts line is voiced alone"* — ⚠️ **and it checked both books: the NHL writes the pointer
in-sentence, the IIHF's 69.3 does NOT, but its own 69.7 carries the carve-out, *"so 'NHL and
IIHF' holds."*** **The 5 C / 5 E conflation at `:474` rewritten to give each row its own
clause. 5 E's *"or outside the goal crease"* restored as a quotation at both sites.**

⚠️ **And it audited EVERY 5 C / 5 E mention in the file and found TWO MORE the brief did not
name** — `:1113` citing the pair undifferentiated for a screen, and **the Sources trailer at
`:1438` labelling them collectively *"the outside-the-crease screen."*** **Both corrected.**

## ⚠️ FOUR REFUTATIONS
1. ⚠️ **The coordinator's relayed headroom figure was wrong AGAIN** — *"only 3 of 11 lines
   were ≤6 free. `:1099` had **146**."* **Second agent in two hours to measure and refute the
   same relayed number.**
2. **The split, refuted above.**
3. ⚠️ **The brief's premise that the return limb lived only in section 3 was INCOMPLETE** —
   it is *"also stated in full, with 'deliberate actions', the precondition and 'No contact
   appears anywhere in it', at `:1052` — in the FIRST section's body."*
4. ⚠️ **`:1141` does NOT carry a line-wrapped `sub- section`** — the reviewer said it
   reproduced the source's break; **the file had `sub-section`, the correct de-hyphenation.**
   ***"The quotation was exact either way."***

## Declared, not squeezed
**The table-status caveat reached two of four lines by substitution with no rulebook content
evicted.** ⚠️ **`:1107` (6 free) and `:1108` (1 free) *"neither takes ~30–40 characters
without evicting quoted rulebook wording — measured, not assumed."*** **And on `:1108` it
argued the caveat is near-redundant because the line already tells the listener the table
does not govern.** ***"Worth an OPEN_ITEMS row rather than a squeeze."***

⚠️ **A `check_quote_drift` NOT FOUND it ran down by hand:** the IIHF 6F quotation *"fails to
match only because the PDF extraction splits it across two table columns"* — **verified
verbatim at `iihf_rules_v1.1.txt:10011-10013`.** **The eighth extraction-trap instance today.**

## ⚠️ A REAL SPLIT TRIGGER, kept separate from the fix
*"§'What it changes about what you do' does have the style guide's split trigger
INDEPENDENTLY of MAJOR 1 — imperatives in its body never reached its 11-fact block."*
⚠️ ***"That is a real row, on the seam `:1116`/`:1117` + the second half of `:1118` — but it
is a restructuring that wants its own brief and its own reviewer, not a rider on a fact
relocation."*** **Correct separation of concerns.**

## Coordinator verification, every agent stopped
**Rebuild: exit 0, `dist` 16:48, chain reached `check:links` — 53 pages, 10,939 links.**
⚠️ **`check_absolutes` now exits 0, 408 caption units — the layer was uncertified while the
diagram agent was live and is certified now.** **Six gates pass: 841 blocks · 5,659 facts ·
1,301,495 words.** ⚠️ **Index re-staged from scratch after every agent stopped — the four
`MM` files are resolved and `git diff --name-only` is clean but for the podcast plan file the
gate ruled out of scope.**

---

# Addendum 33 — the carried-over sentence, and ⚠️ THE IIHF HANDBACK CLOSED BY THE COORDINATOR

## ✅ The gate's single blocking line, repaired
`special_teams.md:1041` now separates the two rows and **keeps each row's own elements**:
5 C *"remains in motion"* with **the explicit statement that it carries no vision element**,
and 5 E *"on the crease line **or outside the goal crease**"* with vision. ⚠️ **Written for
this document's reader — the net-front power-play forward — *"not copied from the three
exemplars."*** **The 69.4 clause earlier in the same line untouched, verified in the
whole-line diff.**

## ⚠️ ITS OWN CENSUS: seven candidates, one defect — and it did not assume
> ***"So the gate's one line was the only one here — but only after the sweep; I did not
> assume it."***

**`:117` cites 5 E alone with its vision limb and is CORRECT** — *"it deploys one disjunct, it
does not claim 5 E's scope."* **`:1035` is correct** — true of both rows, attributing no
vision limb, **3 characters of headroom, left alone.** ⚠️ **And the Sources trailer already
recorded that the table was read by line range *"because the table interleaves its columns in
both extractions."***

## ⚠️ THE HANDBACK IT NAMED AGAINST ITSELF, CLOSED BY THE COORDINATOR
> ***"My sentence asserts both books answer the same way at both rows — that half rests on the
> existing text and the Sources trailer's dated reading, not on a check I performed today.
> Worth one agent."***

**Read positionally from `sources/iihf_rules_v1.1.txt`, Appendix IV Table 16:**
- **Situation 5 C** — *"An attacking Player skates in front of the goalkeeper, outside the
  crease… **remains in motion and impairs the goalkeeper's ability to defend their goal.**"*
  ⚠️ **NO VISION LIMB — the IIHF matches the NHL exactly.**
- **Situation 5 D** — *"plants themself **within** the goal crease"* → **Goal is DISALLOWED.**
- **Situation 5 E** — *"plants themself **on the crease line or outside the goal crease**, as
  to obstruct the goalkeeper's vision and impair their ability to defend their goal"* →
  **Goal is allowed.**

**And the 2026/27 edition carries the same rows.** ⚠️ **So *"both books, both rows, the same
answer"* is verified, and the 5 C-has-no-vision-limb discrimination holds in the IIHF too.**

⚠️ **The documented extraction trap is visible in that very passage: the text breaks
`attacking` as `atta-` / `cking` across a line.** **A flattened grep for the 5 C sentence
returns nothing; only the positional read works.** **Eighth trap, seen in the wild while
closing a handback about it.**

## ⚠️ THE INDEX DIVERGENCE, FLAGGED AGAIN BY THE AGENT THAT CAUSED IT TO MATTER
> ***"The file was already staged before I started; my edit is unstaged on top of it. THE
> INDEX CURRENTLY HOLDS THE DEFECTIVE SENTENCE. Restage before the gate, or the commit ships
> the unrepaired text past every mechanical check."***

⚠️ **Second agent today to catch this, and both times the cause was the coordinator staging
before a wave finished.** **`check_facts --near` was run BEFORE and AFTER the edit and was
unchanged — body prose only, so no block moved.**

## Still open, declared
**The three *"screen"*-attribution sites and the three exemplars were not opened by this
agent.** **No site render.** ⚠️ **And three pre-existing `check_facts_antecedents` hits in
this file — `:263` *"That ranking"*, `:709` *"That exclusion"*, `:1056` *"That area"* — are
*"candidates for another row, not mine."***

---

# Addendum 35 — the safety pass, and ⚠️ A COORDINATOR ERROR THAT CONCEALED A REAL GAP

## ⚠️⚠️ MAJOR — a dropped possessive in the one layer voiced alone
`:1124` ended *"…walking them out sideways toward the corner, **skates staying on the ice**"*.
⚠️ **No possessive. Every grammatical subject before it is the READER** — *your* shoulder,
*your* legs, *you* walking them out — **so it resolves by default to the reader's own
skates.** ⚠️ ***"And that misreading is independently plausible coaching (don't leave your
feet; NHL 42.1 opens 'skates, jumps into or charges'), so the listener has every reason to
take it and no cue to reject it."***

⚠️⚠️ **Under the wrong reading the reader gets NO instruction about the player they are
moving, and lifts a net-front opponent off their edges toward a steel goal frame** — the
mechanism this section cites *Heads Up Hockey* for, ***"at a speed it says 'can occur at
walking speed.'"*** **Repaired to *"their skates staying on the ice"*, 193 → 199/200.**

⚠️ **The reviewer graded it against its own rubric and said so:** *"my rubric puts 'a caveat
present but ambiguous aloud' at Minor. I am grading this Major deliberately… **Grade it down
if you disagree — but do not close it.**"*

## ⚠️ MAJOR — a self-check pointer naming two sections that DO NOT EXIST
Q11 named the **working-draft** headings from before the rename. ⚠️ **Both lines are `+`
lines: `git show HEAD:` has neither the old headings nor Q11, so THIS COMMIT introduced the
dangling pointer entirely.** ⚠️ **`check_links.py` passes because they are PROSE, not
anchors — no mechanical check sees it.** **A reader who gets Q11 wrong — the intended case —
was routed to nothing, on the section that prices ejection.** ⚠️ **The agent audited ALL
ELEVEN pointers: Q1–Q10 resolve, including composite forms. Q11 was the only break.**

## ⚠️⚠️ TWO REFUTATIONS, AND THE SECOND FOUND WHAT THE FIRST ERROR HID

**1 · The reviewer's preferred fix was NOT AVAILABLE.** It suggested giving the limb its own
line *"as `goaltender.md:1137` does"*. ⚠️ **The block is ELEVEN facts lines and `HARD_MAX` is
11** — *"giving the limb its own line would have failed `check_facts.py` outright or forced an
eviction."* ***"The in-place possessive was the only route, not the fallback."***

**2 · ⚠️⚠️ THE COORDINATOR SAID FIVE LAYERS CARRIED THE POSSESSIVE. THREE DO.** Body
`:1141`/`:1143`, the spoken caption, and `goaltender.md:1137`. ⚠️ **`:1580` and Key Takeaways
9–10 carry the DIRECTION limb — walk them toward the corner, not across your own goalmouth —
and say NOTHING WHATEVER about the skates.** ***"They did not drop the possessive; they never
carried the claim."***

> ⚠️⚠️ ***"That error concealed a real gap."***

**The lift hazard reaches body, facts and caption in this document and its own `Never:` line
in `goaltender.md` — and NEVER REACHES THIS DOCUMENT'S COMMON MISTAKES OR KEY TAKEAWAYS AT
ALL.** ⚠️ **A reader of the summary layers gets only the direction half.** **It cannot go in
the `:1121` block — at `HARD_MAX` — and a new Common Mistakes bullet is unreviewed text
outside the brief, so it was left and reported.** **Own row.**

## ⚠️ The report-only item, with evidence stronger than the brief's
`:1580` attributes the NHL's 43.2 wording to **both** books. **Flattened search across all 37
`sources/*.txt`: the string is in the NHL extracts and in NONE of the four IIHF ones.**
⚠️⚠️ ***"This document's own Sources trailer at `:1707` already carries BOTH wordings
correctly, side by side, 'both read the same day'. The file knows the distinction; only the
Common Mistakes bullet collapses it — and the trailer is NOT VOICED, so a listener who hears
the mistake gets no correction anywhere in the audio."*** **D5, `source-verifier`'s.**

## Upheld, one with a better reason than the gate gave
⚠️ **`:1092`'s compressed Casebook 625 Sit. 10 is safe NOT because the direction is stricter,
but because *"the relief is not lost, it is carried by `:1087` THREE LINES ABOVE IN THE SAME
BLOCK — a listener hears both within one chunk."*** **`:1082`, `:1083` (owned by
`equipment.md:94`, cited), `:1102`, `:1064` all read safely alone.** **Both coaching cautions
intact and correctly labelled** — ⚠️ ***"I recommend against touching either. My Major asks
for the REFERENT, not for a rule."*** **And *"where checking is permitted is in the facts
layer, games not leagues — this is the historical §5 failure, and it has been fixed properly
here."***

## Declared
⚠️ **`:1124` now sits at 1 character left and `--near` lists it** — *"an ordinary edit will
break it."* **The agent chose verbatim fidelity to the body over headroom, and said so.**

---

# Addendum 36 — the site review PASSED, one carried-over defect, and ⚠️ THE CLASS CENSUSED AND BOUNDED

## ✅ Everything the gate sent it to check
⚠️ **It REBUILT because it verified `dist` was stale** — `special_teams.md` was modified at
16:55, after the 16:48 build — **and confirmed the late steps individually rather than by
mtime: 8/8 PDFs, Pagefind at 17:05, `sw.js`, `check:links` 53 pages / 10,939 links.**
***"The page I reviewed is the page that ships."***

**The renamed anchor: all NINE inbound links land correctly** — ⚠️ **and it corrected the
coordinator's count, which was one high.** **The old slug appears NOWHERE in `content/`,
`site/src/` or the Pagefind index.**

**The heading rename WORKED.** Measured by per-character `Range` rects: ⚠️ **line 1 is now
fully distinct from the first word, in every cell. The previous "two near-identical entries"
defect is resolved.**

⚠️ **And it confirmed the coordinator's scoping correction: `.toc` is `display:none` BELOW
78rem and `.toc-inline` is `display:none` ABOVE it — they are MUTUALLY EXCLUSIVE, so on a
phone the inline `<details>` is the only ToC, and it carries all 73 entries.**

**The diagram: prose stays ABOVE the figure.** ⚠️ **And a measurement nobody asked for — the
figure's margin binds it CLOSER to the prose above (32 px) than to the heading below
(44 px).** `d09b318` holds.

## ⚠️ ITS OWN NEAR-MISSES, REPORTED AGAINST ITSELF
**Three times it caught a false finding before filing it:** a first pass reporting a link
rendering 0 (*"my harness resolving a stale `loadEventFired`"*); a `.focus()` probe showing no
focus ring (*"programmatic focus doesn't match `:focus-visible`"* — re-tested with real key
events); and an off-origin request traced to **an enterprise-managed browser extension**, not
the site. ⚠️ **It also confirmed the documented `alt=` trap: *"an `alt=` grep returns nothing
here — correct, as your brief warned."***

## The MAJOR — and ⚠️ ITS CAUSE ATTRIBUTION WAS WRONG
`getting_started.md:59` rendered as *"If you play in Britain, **If you play in Britain**
inside it is the part addressed to you."* ⚠️ **The reviewer called it *"collateral of the
link-text repair pass."* The coordinator checked `git show HEAD:` — THE IDENTICAL DUPLICATION
IS AT HEAD. Pre-existing, not collateral.**

⚠️ **But the line WAS rewritten by this commit, so it is a defect carried over inside a
rewritten line — the same shape the gate blocked on at `special_teams.md:1041`.** **Repaired
to *"Inside it, the section headed [If you play in Britain] is the one addressed to a British
reader."*** ⚠️ **The repairing agent matched the register to sibling list items rather than
inventing one, and said so.**

## ⚠️ THE CLASS, CENSUSED AND BOUNDED — the agent named where to look and the coordinator looked
> ***"The `special_teams.md:1041` case and this one are now two instances of the same pattern
> from one pass… I did not read the other five files for the same shape, and that is exactly
> where I would look next."***

**Coordinator census of every rename hunk in all six files:** ⚠️ **NO THIRD INSTANCE.**
**The one candidate — Key Takeaway 1 opening *"Find out whether your **league** permits body
checking"* in the very document whose heading was renamed away from that word — IS CORRECT**:
it states the league as a **first step**, then carries *"**And your own league's answer is not
the last word either, because the fixture can take it away for the night**"* with 604(b)
quoted, and closes ***"Check the game, not the age group."*** ⚠️ **Exactly what the rename
agent said it preserved on purpose — *"so the rename doesn't overcorrect into 'classification
is irrelevant'."*** **The class is two instances, both repaired.**

**Its own file census was three passes deep and found one hit** — ⚠️ **the three 60%-overlap
hits and two link-echo hits were all correctly judged FALSE POSITIVES** (adjacent distinct
links, and deliberate cross-references inside a Sources trailer). ***"Your list was not short
this time."***

## Minors, all pre-existing, none introduced
**No ToC position tracking site-wide** on a 73-entry ToC · **127 borrowed-diagram attributions
rendering as lowercase slugs** · **SVG `<title>` convention mixed — 140 short titles, some raw
slug-case, and `<title>` IS the accessible name** · **a ⚠️ warning run split across a print
page break**, verified at 200 dpi as *not clipped*.

## ⚠️ What it could not have found, in its own words
***"A page rendering correctly says nothing whatever about whether what it says is true. I
confirmed that ten `Rule:` lines about goaltender contact render in a styled panel and survive
to print — I did not check a single one of them against a rulebook."*** **And: the production
CloudFront rewrite and its CSP `script-src 'self'` header are absent locally — *"a script that
would be silently blocked in production works fine in everything I ran."***

---

# ⚠️ ADDENDUM 34 — DOES NOT EXIST. A COORDINATOR NUMBERING SKIP, NOT A LOST REPORT.

A `commit-gate` found the record running **33 → 35** and said: *"Either a report was lost or
the numbering skipped. **Say which in the record, because `review_history.md` is reconstructed
from these.**"*

⚠️ **It skipped. The coordinator numbered the `safety-reviewer` addendum 35 when the previous
was 33. No report is missing and no review went unrecorded** — Addendum 35 is the safety pass
the gate's C6 block demanded, and Addendum 36 is the site pass its C10 block demanded.

⚠️ **Recorded rather than renumbered.** **Renumbering would silently rewrite the anchors other
addenda cite, and a record that reconstructs history must not be edited to look tidier than
it was.** **This entry is the gap's explanation and sits where the gap is.**

---

# Addendum 37 — ⚠️ A THIRD INSTANCE OF A CLASS THE COORDINATOR HAD JUST BOUNDED AT TWO

## The defect
`body_contact_and_battles.md:1580` attributes a quoted string to **both** books:

> *"…no minor option for checking from behind at all in either the NHL's book or the IIHF's
> (**43.2 in both**: *"[t]here is no provision for a minor penalty for checking from
> behind"*)."*

**Coordinator verification, all four extractions:**

| source | hits for *"no provision for a minor"* |
|---|---:|
| `nhl_rules.txt` | **1** |
| `iihf_rules_v1.1.txt` | **0** |
| `iihf_rules.txt` | **0** |
| `iihf_rules_2026-27.txt` | **0** |

**The IIHF's 43.2 reads:** *"This infraction is considered serious and dangerous, therefore
there is no option to award a minor penalty for 'Checking from Behind'."* ⚠️ **The SUBSTANCE
holds in both books; the QUOTED STRING is the NHL's alone.** **`defending_the_rush.md:364` and
`forechecking_systems.md:648` both attribute it to the NHL specifically — the corpus otherwise
gets this right.**

## ⚠️⚠️ WHY THE COORDINATOR'S CENSUS MISSED IT
**Addendum 36 censused the carried-over-defect class and bounded it at TWO.** ⚠️ ***"But it
censused RENAME HUNKS IN SIX FILES, and this hunk is not one of them. The class is three."***

⚠️ **The line is `@@ -1544 +1580 @@` — rewritten by this commit.** **Third instance of the
shape the gate has now blocked on three times:** `special_teams.md:1041`,
`getting_started.md:59`, and this.

⚠️⚠️ **AND IT WAS ALREADY WRITTEN DOWN.** Addendum 35 recorded it as report-only, assigned to
`source-verifier`, **and left it.** ***"The third was already written down… and left."***
**A finding filed against an agent that never ran is not a finding handled.**

## ⚠️ THE ROOT CONDITION AS IT STOOD AT ADDENDUM 37: `source-verifier` had never run

⚠️⚠️ **SUPERSEDED BY ADDENDUM 38 BELOW — IT HAS NOW RUN. This heading records the state the
gate blocked on, not the state that ships. A commit gate caught this section still asserting
the present tense: *"this one will enter the permanent record asserting that the citations in
this diff were never verified — while the diff carries the repairs that verification
produced."* Left in place and marked, not deleted — the record must show what was true when
it was written.**
`grep -n "source-verifier"` over the record returns **five hits, all hand-offs, none a
report.** Addendum 21's dimension statement declared **D4/D5 → `source-verifier`**, and:

> ⚠️ **Every other hand-off in that line closed — D1/D2/D3 in Addenda 13/16/20, D10 in 28b,
> D11 in 19/35, D15 in 17/36. D4 and D5 never did.**

**Meanwhile the diff adds a 5,381-character extension to this document's Sources trailer** —
new Casebook situations, new Reference Table rows, new Hockey Canada subsections and
Interpretations, and a second IIHF Situation Handbook edition. ⚠️ **Those are citations, and
C5 has been evaluated for none of them.**

⚠️ **The gate's ruling on C3, and it is the one to keep:** ***"A deferral to a named agent
that never ran is neither checked nor declared out of scope. And the record does not merely
leave the dimension silent — it OPENS A FINDING INSIDE IT and leaves it open."***

## ✅ What the gate cleared on its own re-derivation
**It re-derived every load-bearing claim this commit ADDS** rather than accepting any
reviewer's wording — USAH 607(b)/(c)/(e) and 607(d) Notes 1 and 2, Casebook 607 Sit. 4/5/6 and
625 Sit. 10, NHL/IIHF 69.4's third paragraph, Table 14 Situations 5 C / 5 E / 6 D, HC
8.5(a)–(e) with Interpretation 1 and Note 1 to Interpretation 3, HC 7.4, and the Situation
Handbook in both editions. **All confirmed verbatim.**

⚠️ **It also re-derived the privileged-area geometry independently: 104(d)'s 22 feet, 102(a)'s
85–100 ft width, ≥20.5 ft outside the band each side — *"the document's 'at least twenty feet'
is correct and conservative."***

**And it applied the terminating rule to the three post-review repairs rather than blocking
again** — the possessive, Q11's pointer, and the `getting_started.md` clause are all
*"confined to the finding, re-derived, recorded."* ⚠️ **It checked `git show HEAD:` itself and
confirmed the coordinator's correction of the site reviewer's cause attribution: *"the repair
is not an over-reach."*** **And it verified the coordinator's KT1 judgement — *"League as
necessary, not sufficient. Not a carried-over defect."***

**The 1-character line is ruled acceptable:** ⚠️ ***"`--near` reports 261 lines within six
characters and 7 at it; `:1124` sits alongside 36 other 1-char lines. It is listed, sorted, by
the tool every time, and the agent declared the trade. A trap for the next edit, not a defect
in this one."***

---

# Addendum 38 — `source-verifier`: D4 and D5 COVERED, verified against LIVE PUBLISHER DOCUMENTS

⚠️ **Written after a commit gate blocked on C8: the record carried Addendum 37's *"`source-verifier`
HAS NEVER RUN"* section while the diff shipped the repairs that verification produced.**
***"That is a false entry in the defect record, committed deliberately."*** **The findings had
been recorded in `OPEN_ITEMS.md` — the gate credited that as *"a real mitigation"* — but
called it *"the wrong artifact."*** **This is the right one.**

## Method — it refetched rather than trusting the disk
**Seven rulebooks fetched live, all HTTP 200, no redirects, browser UA:** NHL 2025-26; IIHF
Rulebook 2025/26 v1.1; IIHF Situation Handbook **2025/26 v1.1 AND 2026/27 v1.0**; USA Hockey
Playing Rules; USA Hockey Playing Rules **and Casebook**; Hockey Canada 2026-2028.

⚠️ **SIX OF THE SEVEN, re-extracted with `pdftotext -layout`, are BYTE-IDENTICAL to the
on-disk `sources/*.txt`** — ***"so every on-disk verification below is simultaneously a
verification against the publisher's document as served today."*** **The seventh differs only
by extraction mode; all eleven of its quotations were re-checked against the fresh fetch.**
**Unreachable: none. Injection scan: clean.**

## ✅ VERDICT: D4 and D5 COVERED **for `body_contact_and_battles.md` and `goaltender.md` ONLY**
*"No fabricated citation, no wrong rule number, no wrong edition, no dead or hijacked link."*

⚠️⚠️ **THIS HEADING FIRST READ A BARE "D4 COVERED · D5 COVERED", AND A COMMIT GATE BLOCKED ON
IT.** The verifier's own closing paragraph says: ***"the other fifteen changed `content/` files
in this diff were not in my scope and I did not verify their citations. The same
one-book-wording-under-two-book-attribution pattern could exist in the rest and I have not
looked."***

⚠️ **The gate's reasoning, which is the general rule:** *"A future `grep` for a closed
dimension reads the heading, not the caveat 49 lines below it — which is the failure mode your
last block was about, in the other direction."*

⚠️ **So: D4 and D5 are CLOSED for the two files named and OPEN for the other fifteen.** **That
is now an `OPEN_ITEMS.md` row, not a caveat buried under a tick.**

## The five findings, all repaired
1. ⚠️ **`:1580` wrong attribution — CONFIRMED against the LIVE PDF.** The string is in **all
   three NHL extractions and ZERO of four IIHF ones, and zero in the freshly fetched IIHF
   PDF** — ***"not a splice artefact."*** ⚠️ **The rule number 43.2 is right in BOTH books;
   *"the rule-number pairing is NOT the defect and should not be 'fixed'."***
2. ⚠️ **The trailer did not cite four Casebook situations the body quotes** — 607 Sit. 4 (at
   **four** body sites, not three), 5, 6 and 625 Sit. 10. **All four CONFIRMED in the source —
   a coverage gap, not a fabrication.** **The coordinator's brief had this BACKWARDS.**
3. **A one-word over-claim** — 69.3 writes *"its hand/glove"*, 75.4 *"the"*, **in both
   editions.** ⚠️ **The ANSWERS are word-identical, so the body sentence was CORRECT and only
   the trailer's *ask* over-reached.**
4. **An unreconciled disclosure** — *"Situations 1 to 17… of which they have none"* against the
   body quoting Situation 10 — **bridged by propagating a clause `offensive_zone_play.md:1157`
   already carries.** ***"Propagation of a clause the corpus has already written, not a new
   judgement."***
5. ⚠️ **An UNBRIEFED fifth: `:589`, the same rule quotation 1,000 lines above, carried a
   lowered capital and a comma inside the quote marks where the source continues.**
   ***"Repairing `:1580` while leaving the same rule mis-quoted 1,000 lines above would have
   been half a repair."***

## ⚠️ WHY IT SURVIVED EVERY GATE ALL DAY — two blind spots intersecting on one line
**`check_quote_drift.py:115`'s regex is `r'\*"([^"]{N,})"\*'` — it extracts ONLY
Markdown-emphasised quotations. A plain `"…"` quotation is never extracted, so it can never be
compared.** ⚠️ **A plain-quote variant found FOURTEEN candidates in that one document.**
⚠️ **And by construction the tool ALSO cannot see attribution drift — it keeps the closest
match across ALL sources, so a verbatim string from the wrong book scores clean.**
**Recorded as an open row; the tool was NOT changed and nothing was swept.**

## ✅ Three disclosures re-tested and UPHELD
*"USA Hockey writes no goaltender-vision provision at all"* — ⚠️ **every `vision` hit across
both volumes is a substring of *division/provision/supervision*, or peripheral vision, or
blind-hockey classification, or the OFFICIALS' field of vision; `line of sight`, `view of the
puck`, `see the puck`: ZERO in both.** *"Hockey Canada's two references… both reach only a
player standing in the crease"* — **UPHELD, and exactly two.** **The apostrophe trap
reproduced independently.**

## ⚠️ It reported its own method's limits in BOTH directions
***"My own flattened sweep produced false positives in both directions."*** Three strings
scored *"NHL only"* **purely because of the Table 16 column splice and because the IIHF puts
internal quotation marks inside a phrase** — ***"all three are in both books. Every candidate
had to be read positionally before it could be called anything."***

## What it could not reach
⚠️ ***"Locating a string in a rendered page says nothing about whether the rule is correctly
APPLIED to the situation the corpus uses it for."*** **It verified the editions the trailers
name, not whether a British or American reader is governed by those editions this season.**
⚠️ **And: *"the other fifteen changed `content/` files in this diff were not in my scope and I
did not verify their citations. The same one-book-wording-under-two-book-attribution pattern
could exist in the rest and I have not looked."***

---

# Addendum 39 — the shed 69.4 precondition: SIX sites repaired, and ⚠️ TWO AGENTS CAUGHT THEIR OWN DRAFTS

## The defect
**NHL 69.4's third paragraph bites ONLY *"when a goalkeeper **has played the puck outside of
his crease**"*.** Six sites stated the returning-goalkeeper limb without it, **stating a wider
rule than either book does** — four of them in the layer voiced alone.

⚠️⚠️ **AND THIS COMMIT'S OWN `rule69_clauses.mjs` STATES THE RULE IN TERMS** — *"the
precondition is part of the clause and the shorthand sheds it"* — ⚠️ **while
`playing_without_the_puck.md` stated it correctly NINE LINES BELOW its own defective facts
line.** **Body right, block wrong, in one document.**

## ✅ Repaired — `offensive_zone_play.md:456`, `:459`, `:566`; `playing_without_the_puck.md:567`; `special_teams.md:1032`, `:1047`; `defensive_zone_coverage.md:116`

## ⚠️ THE COORDINATOR'S FIX SHAPE WAS REFUTED TWICE, DIFFERENTLY
**Agent 1:** the brief's substitution (shorten the book names) **frees 17 characters and the
precondition costs ~33** — *"it does not close on that alone."* ⚠️ **What paid was
restructuring the precondition as a RELATIVE CLAUSE ON THE GOALKEEPER, mirroring the book's
own clause order — keeping every element and GAINING headroom, 283 from 288.**

**Agent 2:** ⚠️ **that shape did NOT transfer**, because its line carries a **four-book
comparison, not one rule** — *"every candidate built that way measured 294–317."* **What paid
was replacing the headline framing itself.**

## ⚠️⚠️ BOTH AGENTS CAUGHT THEIR OWN FIRST DRAFTS WITH THE VOICED-ALONE TEST
- **Agent 1** used a sibling's idiom *"played the puck out there"* — ⚠️ **voiced alone,
  *"out there"* arrives BEFORE its antecedent.** ***"The siblings get away with it only
  because they name 'outside it' earlier in the line. Mine did not. Caught by the voiced-alone
  test, not by any checker."***
- **Agent 2** dropped *"its"* before *"8.5"* to buy four characters — ⚠️ **rendering as
  *"…but **eight point five** penalises unnecessary contact"*: a bare number with no owner,
  voiced alone.** **Restored, and the characters recovered elsewhere.** ***"No checker sees
  this."***

## ⚠️ A trade declared on the record rather than hidden
`special_teams.md:1032` **lost the *"deliberate actions"* quotation** — it would not fit
beside the precondition. ⚠️ ***"It is the narrowing that runs in the ATTACKER's favour, so its
loss makes the line slightly over-warn rather than under-warn, and the body of the same
document states it twice. The precondition was the safety-critical element and could not be
traded."***

## ⚠️ THE BRIEF UNDER-DESCRIBED THE WORST SITE
For `defensive_zone_coverage.md:116` the brief asked for the precondition to be added to a
list of narrowings. ⚠️ **That was not sufficient: *"the sentence that FOLLOWS tells a defender
the referee 'will reach for you' whenever his goalie is out. That is the actionable over-claim
and it needed conditioning, not just the list lengthened."*** **Now conditioned —
*"Where the clause does bite…"***

## ⚠️ And the coordinator's protection note was right about the hazard, wrong about the line
The brief warned off `special_teams.md:1032` as the USA Hockey look-alike. ⚠️ **The USA Hockey
route is at `:1030` and `:1047` — and `:1047` carries BOTH a correct look-alike AND a real
shed, a few hundred characters apart in one line.** ***"One paragraph, one correct look-alike
and one real defect: the sweep hazard is worse than you described."***

## Method worth keeping
⚠️ **Agent 2 baselined `check_quote_drift` against the STAGED versions via a SYMLINKED scratch
tree, because *"a naive scratch copy reports `notfound=448` and is a false clean"* — the
copy breaks `sources/` resolution.** **Result: 20/20 before and after, same line numbers,
`clean` up by exactly its two new quotations. Zero new drift.**

## ⚠️ FOUR SHEDS REMAIN, ALL ON LINES THIS COMMIT DOES NOT TOUCH
**Verified by the coordinator against the staged hunks:** `special_teams.md:1181` and
`defensive_zone_coverage.md:795` (**both Sources-trailer entries — the second found by an
agent and NOT in its brief**), `team_play_and_culture.md:280` (⚠️ **a quotation SPLICED
MID-SENTENCE, dropping the opener**), and `rink_map.md:194`. **Per the gate's own ruling —
*"pre-existing, outside this diff — file the row, do not bundle the edit"* — these are
`OPEN_ITEMS.md` rows.**

---

# Addendum 40 — the 69.4 precondition class CLOSED: twelve sites, and the census that proved it

**Six sites were repaired and committed in `da33d6d`. Six more since**, in `special_teams.md`
(×2), `defensive_zone_coverage.md`, `team_play_and_culture.md`, `rink_map.md` (×2) and
`language_and_glossary.md`.

## ⚠️ The coordinator's census, run because an agent asked for it
> ***"A corpus-wide run of the Python census over all 39 documents is the outstanding work,
> and it is the coordinator's to run."***

**Ten candidates. Reading them settled all ten:** a goalie's pre-faceoff routine (*"Return to
the crease, tap both posts"*), a **Hockey Canada negative existence claim**, the IIHF's 69.1
**stoppage** (a different rule), four **parity claims** that inherit correctly from their
statement sites, and ⚠️ **`rules_primer.md:701`, which reads like the defect and is not — the
full clause with its precondition follows verbatim in the same line. Verified FOUR times
today, most recently by a commit gate.**

**One real shed remained**, in the NHL entry of a Sources trailer nobody had looked at.
**Re-run after the repairs: one candidate, and it is `rules_primer.md:701` — the known false
positive of a sentence-split census.** ⚠️ **The class is closed.**

## ⚠️ AN AGENT REFUTED ITS OWN CENSUS METHOD, AND IT MATTERS FOR EVERY FUTURE ONE
> ***"`grep -o` with fixed-width context silently drops matches within N chars of a line
> start… A census built on `grep -o` with a context window is unsound on this corpus's long
> lines."***

**It redid the census in Python, facts-layer-aware, and found THREE sites its first pass had
hidden** — including one sitting **1,870 characters into a single line**, and an entire facts
block. **Recorded because the corpus's lines routinely exceed 3,000 characters and every
census run against them inherits this failure.**

## ⚠️ THE COORDINATOR'S MODELS WOULD HAVE CAUSED THE TRAP THEY WARNED ABOUT
The brief pointed the last agent at `special_teams.md:1181` and
`defensive_zone_coverage.md:795` as models. ⚠️ **Both are IIHF-worded; its target was the NHL
entry.**

> ***"Pasting either model's string would have put 'their goal crease area' and capital
> 'Player' inside an NHL citation — producing exactly the attribution trap the brief warned
> about, in the same shape as `special_teams.md:1181`. The shape transferred; the string did
> not."***

⚠️ **And it quoted the book rather than paraphrasing, declining the brief's sketch: *"in a
Sources trailer the book's own words are cheaper than a paraphrase and carry no interpretive
risk."***

## ⚠️ A second defect found at a site nobody had flagged for it
`special_teams.md:1181` **sat inside the IIHF entry while quoting the NHL's wording** and
claiming the clause was *"carried by the IIHF in its own wording"*. ⚠️ **Attribution drift,
which `check_quote_drift` states it cannot see.** **Repaired to the IIHF's own text.**

## Verified rather than assumed
**The IIHF clause is byte-identical across all three editions** — `iihf_rules_v1.0.txt:5591`,
`_v1.1.txt:5587`, `_2026-27.txt:5683`, **same MD5.** **Casebook 625 Sit. 9 read in full:
conditions are *"completely out of their crease"* and *"attempting to return"* — NO
puck-playing precondition, so the look-alike is genuinely a different test.**

⚠️ **And trailer edits were verified unvoiced against the SSML rather than assumed — with the
trap named: *"returning-goalkeeper clause" IS voiced elsewhere, from correct BODY text, so a
grep against the speech layer would have produced a false alarm."***

## A pre-existing `notfound` run down and cleared
`language_and_glossary.md:461`'s Rule 42.1 fragment reports NOT FOUND. ⚠️ **It is in the book:
`nhl_rules_layout.txt:4529` ends mid-sentence and resumes at `:4537` after a page footer and a
`SECTION 6 – PHYSICAL INFRACTIONS` running head.** **The page-furniture splice again — tenth
distinct extraction-trap instance today. The trailer's own claim is accurate.**

## Coordinator verification, every agent stopped
**Six gates pass: 841 blocks · 5,659 facts.** **Build exit 0, `dist` 19:27, chain reached
`check:links` — 53 pages, 10,939 links. Nothing postdates the build.**

## What this round could not have found
**It audits a change, not a corpus.** Every quotation in the diff was re-derived from `sources/`,
but a defect already resting in these six files before today is invisible to it — and four of them
carry 30,000-plus-character Sources trailers whose *other* hundred citations nobody refetched.

⚠️ **Three specific blind spots, named rather than left to silence:**

1. **`rules_primer.md:701` was cleared four times as a false positive and never read AS VOICED.**
   Its IIHF quotation opens at *"prevented from returning"* and carries no precondition, directly
   under an NHL quotation that does. Voiced alone, the two adjacent lines may not read the way the
   page does.
2. **The joint-attribution construction was stood down, not cleared.** *"The NHL and the IIHF write
   that clause in terms"* followed by the **NHL's wording only** is now in at least four places —
   `da33d6d` shipped two of them gate-clear. ⚠️ **That makes it a convention this corpus has
   adopted without ever deciding to.** It is one remove from the attribution drift repaired at
   `special_teams.md:1181` in this very round, and **no tool can see it**:
   `check_quote_drift.py` keeps the closest match across ALL sources, so a sentence credited to two
   books while carrying one book's characters scores clean.
3. **The extractions were read, not the PDFs.** A quotation that is verbatim in a *bad* extraction
   scores clean here. Ten distinct page-furniture splices were identified today; the eleventh is
   the one nobody grepped for.

⚠️ **And one finding this round surfaced, relayed, and then REFUTED — recorded because the
refutation is the lesson.** The `commit-gate` reported that `winger.md:29` and
`offensive_zone_play.md:531` say Rule 69.4 *"takes the goal"* while `rules_primer.md:703` says the
clause *"says nothing at all about the goal"*, and concluded: **"One of those is wrong."**

**Neither is wrong. `sources/nhl_rules.txt:7219-7236` shows 69.4 running to THREE paragraphs:**

| Paragraph | What it does | Does it take the goal? |
|---|---|---|
| 1 — contact outside the crease | non-incidental contact, goal scored | **Yes**, *"the goal will be disallowed"* |
| 2 — the *"fair game"* ceiling | penalty in every case of unnecessary contact | No — penalty only |
| 3 — returning goalkeeper | prevented from returning after playing the puck out | **No** — *"may be penalized"*, and nothing about the goal |

**`winger.md` and `offensive_zone_play.md` describe paragraph 1. `rules_primer.md:703` scopes
itself in terms to *"its returning-goalkeeper paragraph"*. Both are accurate.**

⚠️ **This is the round's fourth instance of a reviewer's finding being wrong in the direction of
"go and change something", and the coordinator had ALREADY WRITTEN IT INTO THIS RECORD as a
contradiction to resolve before checking the book.** Had it been dispatched as a brief, the agent
would have been told to make one of three correct documents wrong.

⚠️ **The discriminator, and it generalises past this rule:** a finding that two documents disagree
about *"Rule 69.4"* is not a finding until someone checks whether the rule is **one provision or
several**. **Rule 69 is numbered by topic, not by proposition** — 69.1 alone carries an *"only if"*
list and a separate *"overriding rationale"* paragraph that the NHL and the IIHF typeset
differently. ⚠️ **A citation to a rule NUMBER is not a citation to a sentence, and every
cross-document comparison keyed on a number inherits that ambiguity.**

---

# Addendum 41 — the commit gate said BLOCK, and the dimension it named found two criticals

⚠️ **The section above ("What this round could not have found") was written BEFORE this
addendum's findings existed.** It is left standing unedited, per this record's append-only
convention: **the record must show what was true when it was written.** ⚠️ **And it is now
the best evidence in this file for why that convention is kept — it closes by naming three
blind spots, and the thing that actually bit was none of them.**

## What the gate did
`commit-gate` returned **BLOCK** on the six-file class-closure diff, on two conditions:
**C6** (no `safety-reviewer` on reader-facing penalty text) and **C8** (Addendum 40 declared
no residual blind spot). ⚠️ **C6 was not "unevaluated" — the coordinator's own brief had
stated *"every repair here is new text read only by its author"*, so the gate recorded it as
DECLARED UNMET.** It also cleared, by independent re-derivation from `sources/`, every
quotation in the diff and the twelve-site closure claim — **using a proximity census with no
failure mode in common with the coordinator's sentence-split method.**

## What the safety review then found — TWO CRITICALS, one defect
⚠️ **The precondition added at twelve sites is CORRECT. What it left a reader believing is not.**

**THE ASYMMETRY, and it is the whole finding.** Both repaired paragraphs already carried
69.4's own ceiling — *"A goalkeeper is not 'fair game'… where an attacking player makes
**unnecessary contact**"*. ⚠️ **That ceiling is keyed on CONTACT. The narrowed clause is about
POSITION WITH NO CONTACT. So the counterweight is the WRONG SHAPE for the gap and does not
reach it at all** — not merely too far away, which is how the coordinator's brief had framed
the question. **The brief asked "does the counterweight land near enough?"; the right question
was "is it the same kind of thing?"**

| Site | What a player does | What it costs |
|---|---|---|
| `rink_map.md:194` | *"only"* is the paragraph's **last operative word**, with the speech render breaking straight after — hears that a goalie who has not played the puck may be blocked from returning | stands in the lane, no contact, **minor** |
| `team_play_and_culture.md:280` | told the Hockey Canada / CARHA floor *"needs contact"* | parks in a returning goalie's path, **minor** |

**The floor that actually bites needs no contact, and exists in all four books:** NHL/IIHF
**56.2(i)** *"impedes the progress of an opponent who is not in possession"* — 56.2(iii) names
*"including the goalkeeper"* — USA Hockey **625 Note**, Hockey Canada **8.3(i)**, CARHA
**66(a)(1)**. ⚠️ **CARHA closes it in the same rule:** Note 1 to 66(a) — *"The last player to
touch the puck, **other than a goalkeeper**, shall be considered the player in possession"* —
**so a goalkeeper who has just played the puck is expressly NOT in possession**, which puts him
inside the limb that needs no contact.

⚠️⚠️ **AND THIS IS PROPAGATION, NOT NEW DOCTRINE. The corpus already states that floor, applied
to this exact fact pattern, in THREE other documents** — `defender.md:233`,
`on_ice_communication.md:258`, `playing_without_the_puck.md:474`. **These two passages are
simply where it stopped.** That is round 10's shape — *a correction that reached the body and
stopped* — reappearing as **a correct rule that reached three documents and stopped.**

## ⚠️ The negative existence claim HELD, and only the sentence after it failed
*"Hockey Canada and CARHA write no returning-goalkeeper clause at all"* was attacked on a full
read of HC 8.5 and CARHA 66 and **is true**. ⚠️ **Non-negotiable 4 was live here: the tempting
repair is to soften the disclosure, and it would have made the corpus LESS accurate.** The
defect was never the claim — it was the characterisation of what fills the gap.

## ⚠️ A gate finding REFUTED, after the coordinator had already written it into this record
The gate reported that `winger.md:29` and `offensive_zone_play.md:531` (*69.4 "takes the goal"*)
contradict `rules_primer.md:703` (*the clause "says nothing at all about the goal"*), concluding
**"One of those is wrong."** ⚠️ **Neither is. `sources/nhl_rules.txt:7219-7236` shows 69.4 running
to THREE paragraphs** — para 1 takes the goal for contact, para 3 (returning goalkeeper) says
only *"may be penalized"*. The two documents describe **different paragraphs**, and
`rules_primer.md:703` scopes itself in terms to *"its returning-goalkeeper paragraph"*.

⚠️⚠️ **The coordinator had ALREADY WRITTEN IT INTO THIS RECORD as a contradiction to resolve,
before opening the rulebook.** Dispatched as a brief, it would have told an agent to make one of
three correct documents wrong. **The discriminator generalises: a finding that two documents
disagree about "Rule 69.4" is not a finding until someone checks whether the rule is one
provision or several. Rule 69 is numbered BY TOPIC, NOT BY PROPOSITION — a citation to a rule
NUMBER is not a citation to a sentence, and every cross-document comparison keyed on a number
inherits that ambiguity.**

## Measured, not asserted
- `check_quote_drift.py` on `body_contact_and_battles.md`: **877 clean · 6 flagged · 57 notfound.**
  ⚠️ **The plan had carried "13". One flag is a CONFIRMED FALSE POSITIVE** — `carha.txt` holds
  **three** instances of *"assessed in the normal manner"*, two ending in a period; the tool keeps
  the closest match across all sources and picked the wrong one. **The document is right.**
  **One is material** (`:1516`, an added full stop hiding *"or for the purpose of starting an
  altercation"* — a second, independent prohibition). Four are the documented case-only class.
- `check_tables.py`: **3 dropped · 46 read aloud · 9 near a limit.** `CLAUDE.md` still describes
  a corpus with *"20 dropped against 26 read aloud"* — **the limits have never moved from their
  introducing commit, so that drift is real repair work** that the file's own warning predicted
  would go stale, and has.
- `special_teams.md:1032` sits at **296/300 after the label** — **four characters** — and carries
  the same contact-only floor, **in a line voiced ALONE**.

## ⚠️ A queued item RETRACTED before it was dispatched — and it was never a plan row at all
The coordinator was carrying *"the lift hazard is missing from both summary layers in its owner
document"* as queued work. ⚠️ **It is false. `body_contact_and_battles.md` carries it in BOTH:**

- **Common Mistakes** — *"Taking the lift on an opponent bent low over the puck as if it were any
  other lift. Their face is down at stick height, and a lift that misses and catches it is
  high-sticking **however low your own hands were** — the reference is the struck player's waist,
  not yours (NHL Rule 60.3; IIHF Rule 60.3…)"*
- **Key Takeaways** — *"Take the lift **up rather than sideways, and below their bottom hand**"*

⚠️⚠️ **AND `grep` FINDS NO SUCH ROW IN `OPEN_ITEMS.md`. It was never filed — it existed only in
the coordinator's working context**, where nothing can attack it, no `check_plan_rows.py` can see
it, and it survives every compaction by being re-copied forward.

**Had it been dispatched, an agent would have added a hazard warning to a Common Mistakes section
that already had one** — and duplicate safety limbs in one summary layer is how two agents once
wrote individually-correct, mutually-contradictory sentences into a single block in this very file.

⚠️ **The lesson is not "check before dispatching", which everything here already says. It is that
an UNFILED item is strictly worse than a wrong plan row: a wrong row gets refuted by the agent
that reads the file, because the row travels with the brief. An item carried only in the
coordinator's head is dispatched as a PREMISE rather than as a hypothesis.** **Anything worth
doing next goes in `OPEN_ITEMS.md` at the moment it is thought of, not at the moment it is
scheduled.**

## ⚠️ A reported tool trap, MEASURED AND REFUTED — and the real defect is worse
A repairing agent reported two tools as silently false-passing:
> *"`check_quote_drift.py` with no path argument prints usage and **exits 0**. My first run grepped
> that usage line and looked clean — a silent false pass of exactly the shape CLAUDE.md warns
> about."* — and the same claim for `md_to_speech.py`.

⚠️ **Both are wrong. Measured this session:**

| Invocation | Exit |
|---|---|
| `check_quote_drift.py` (no args) | **1** |
| `md_to_speech.py --only <no match>` | **1** |
| either, piped into `grep` | **1** |
| either, piped, under `set -o pipefail` | **1** |

⚠️ **The tools signal correctly, in every form, and no `set -o pipefail` is needed. Nothing exits
0. No tool needs fixing — and a "repair" here would have modified two correct scripts.**

### What actually happened, and the coordinator did it too
The agent ran the tool, grepped the output for flagged lines, **saw nothing, and concluded
clean** — while the tool was printing its usage message. ⚠️ **The exit code was never consulted
at all.** ⚠️ **The coordinator made the identical mistake earlier in this same round**, and caught
it only because a second, unrelated `| tail` in the same command happened to print the usage text.

⚠️⚠️ **So the failure is NOT an exit-code trap. It is READING ABSENCE OF OUTPUT AS A PASS.** That
is strictly worse than the documented shim traps, because those at least leave a wrong exit code
behind for someone to find: **here the run is correct, the signal is correct, and the reader
supplies the error.** ⚠️ **A worklist tool that finds nothing and a worklist tool that was never
given its argument produce the SAME THING ON SCREEN — no findings — and only the exit code
distinguishes them.**

⚠️ **The rule this yields: for any tool whose PASS output is empty or near-empty, check `$?`
explicitly, or make the command print something on success.** A grep over a tool's stdout cannot
tell a clean run from a refused one.

⚠️ **SCOPE WIDENED AND THE REFUTATION HOLDS CORPUS-WIDE.** Every `scripts/check_*.py` was then run
with no arguments. **Exactly one prints a usage message — `check_readability_census.py` — and it
exits 2.** ⚠️ **No tool in this repository silently exits 0 on a usage error.** The class the report
named does not exist here, in any tool, in any invocation form tested.

⚠️ **And note which direction the report erred in.** The agent proposed a defect in shared tooling
that does not exist. **Under this repository's own convention, a tool change goes BETWEEN waves,
never during one** — six agents were live when this was reported. **Had it been actioned on the
agent's word, two correct scripts would have been edited mid-round, under exactly the condition
that produced round 59's *"no finding in any report should rest on that tool's output today."***

## ⚠️ Two coordinator briefs refuted by the agent that read the file — both figures, both mine

### 1. A "material quote drift" that was the TOOL'S ATTRIBUTION BLINDNESS, not a defect
The coordinator filed `body_contact_and_battles.md:1516` as a rule narrowed by an added full
stop: the document quotes *"No player may leave the players' or penalty bench at any time during
an altercation."* while **NHL 70.1** continues *"**or for the purpose of starting an
altercation**."*

⚠️ **The document is not quoting the NHL. It says so in terms — *"Casebook Rule 629, Situation
1"*.** `sources/usah_casebook.txt:14974`, read as a line range, ends the sentence **with a period,
exactly as quoted**. Nothing was truncated.

⚠️ **`check_quote_drift.py` keeps the closest match across ALL sources**, so it scored a verbatim
USA Hockey sentence against the NHL's longer one — **the attribution blindness its own docstring
declares.** And the "missing" limb is not missing: `:1518` quotes NHL 70.1 in full, and so does
the facts block at `:1506`.

⚠️⚠️ **THE COORDINATOR APPLIED THIS EXACT INSIGHT TO ANOTHER FLAG IN THE SAME OUTPUT** — `:396`
was correctly cleared as a false positive caused by the tool picking the wrong one of three
`carha.txt` instances — **and then failed to apply it one flag later.** Recognising a tool's
blind spot once does not inoculate the next finding: **the check has to be run per flag.**

⚠️ **Three of the four "case only" flags were ALSO misattributed** — `:959`/`:1197` quote the
**IIHF** heading (`iihf_rules.txt` prints it all-caps) while the tool matched `hc.txt`; `:1488`
matched an appendix-table row rather than the real all-caps heading. **All four remain correct as
written. None of the six flags needed a change.**

### 2. ⚠️ A `--near` figure read off a TRUNCATED, ASCENDING-SORTED list
The brief said this file had *"six lines within 6 characters of their cap"* and named `:598`,
`:1090`, `:1507` at 294/300. **Measured: 33 lines — and `:1375` is a `Rule:` line at 300/300,
AT CAP, with `:586`, `:708`, `:765`, `:1124`, `:1125` at one character left.** The three lines the
brief named are **the least constrained of the set.**

⚠️⚠️ **THE CAUSE, AND IT IS A TRAP WORTH MORE THAN THE ERROR.** The coordinator ran
`check_facts.py --near | tail -25` and read the visible tail as the whole list. ⚠️ **`--near`
sorts ASCENDING by remaining headroom — so `tail` shows the SAFEST lines and scrolls the ones at
cap off the top.** **`| tail` on this tool inverts its meaning.** Use `| head`, or no pipe at all.

⚠️ **The consequence was not a wrong number, it was a MISAIMED AGENT:** anyone briefed to edit a
block in this file on that figure is pointed away from the only line with zero headroom — **which
is precisely the eviction hazard `--near` exists to prevent.** The tool did its job; the pipe
undid it.

⚠️ **Same shape as the refuted exit-code trap recorded above: the tool was correct, the signal was
correct, and the coordinator's SHELL PIPELINE supplied the error. Two instances in one round.**

### What the agent did with its own scope
**Item 2 executed and MEASURED, not carried:** the plan's *"7 uncited Casebook situations"* is
**5** — and one is not USA Hockey at all but an **IIHF Situation Handbook** entry (Situation 70.1)
with no trailer entry of any kind. Five entries added; **`md_to_speech.py` confirms 225 SSML units
for the document and ZERO carrying any added trailer string**, so the repair is unvoiced
provenance, as required. ⚠️ **It also names where a sixth most likely hides — the NHL/IIHF
Reference Table 14 rows cited at nine body sites and never traced to a trailer entry.**

---

# Addendum 42 — the repair for the critical OVER-CLAIMED, and the coordinator propagated it to four documents

⚠️⚠️ **THIS IS THE ROUND'S MOST IMPORTANT FINDING, AND IT IS AGAINST THE COORDINATOR.** Addendum 41
recorded a genuine critical: a narrowing left readers believing a no-contact block of a returning
goaltender was free. The floor offered as the fix — *"ordinary interference, needs no contact, in
all four books"* — was written into **four documents** on the coordinator's brief. ⚠️ **A
`rules-verifier`, dispatched on the repairing agent's own self-flag, found the fix over-claims.**

## USA Hockey is not in the set

| Book | Goalkeeper excluded from "possession"? | Where |
|---|---|---|
| NHL 56.1 | ✓ **inside Rule 56, under its own *"Possession of the Puck:"* heading** | `nhl_rules.txt:6266-6269` |
| IIHF 56.1 | ✓ | `iihf_rules_v1.1.txt:4693` |
| CARHA | ✓ Note 1 to 66(a) | `carha.txt:3119-3120` |
| **Hockey Canada** | ✓ **Glossary** — *"except the goaltender"* | `hc.txt:1115-1120` |
| **USA Hockey** | ⚠️ **NONE** | `usah.txt:6197-6205` |

⚠️ **USA Hockey's Glossary: *"The last player to have intentionally played the puck is considered
to have 'possession of the puck.'"* So a goaltender who has just cleared the puck IS in possession
— the puck carrier — until someone else touches it.** ⚠️⚠️ **THE ONE BOOK WHOSE INTERFERENCE LIMB
IS EXPRESSLY KEYED TO A "NON-PUCK CARRIER" IS THE ONE BOOK THAT DOES NOT PUT THE GOALTENDER OUTSIDE
POSSESSION.** And USA Hockey's own interpretation of this exact play — Casebook 625 Situation 9 —
carries **Rule References 625(b and a.8)**, and 625(a.8) requires *"physical contact"*.

## The counter-authority sat 34 lines above the cited clause, in the same rule
`nhl_rules.txt:6250-6252` — *"A player is allowed the ice he is standing on (body position) and is
**not required to move** in order to let an opponent proceed."* And the limb that actually produces
a penalty is framed on **movement**: `:6288`, a pick is one who **"moves into"** an opponent's path.
⚠️ **Nobody had read 56.1 before citing 56.2(i) — the coordinator included.**

⚠️ **The corpus's luck ran the right way on the two books it leaned on hardest: Hockey Canada and
CARHA carry NO stand-your-ground limb at all** (fifteen concept phrasings, zero hits against a
flattened `hc.txt`), **so the claim is strongest in exactly those two.**

⚠️ **And the coordinator's own framing of CARHA Note 2 was backwards.** It protects **defending**
players against **attacking** players. Here the offender is the attacker and the goaltender is a
defender — **it points AT the claim, not away from it.** The brief had offered it as the thing that
might carve the claim out.

## ⚠️ The safety direction, which is the reason this outranks an accuracy nit
*"Do not stand in the goaltender's road home"* is safe under every book. ⚠️ **But the INVERSE belief
these four documents can induce — that a stationary opponent has already committed an offence —
invites a player to make contact to "draw" a call that, in three of the five books, REQUIRES the
contact he is about to initiate.** **The over-claim does not merely mislead; it manufactures a
reason to initiate contact.**

## What this says about the method
⚠️ **The repairing agent flagged its own over-claim** — *"that is the one place my repair could
over-claim"* — **and was right.** ⚠️ **Three reviewers had already passed the same doctrine:** a
`safety-reviewer` that found the original critical, a `commit-gate` that cleared the diff's
quotations, and the coordinator that propagated it. **None of them read Rule 56.1.**

⚠️⚠️ **The chain that caught it was the agent's own handback, not any review.** *"Answer the
questions agents declare they could not reach"* is written in `CLAUDE.md` as the coordinator's
highest-value work. **This is the strongest evidence in the record for that sentence** — and it
cost one dispatch.

⚠️ **Note also the direction of the error at `special_teams.md:1047`: it over-claims on USA Hockey
AND under-claims on Hockey Canada in the same sentence**, omitting the Glossary exclusion that is
its strongest support. **A repair aimed only at the over-claim would have fixed half of it and left
the corpus looking less supported than it is — non-negotiable 4, from the unusual direction.**

## ⚠️ THE COORDINATOR'S OWN FAILURE MODE, COUNTED — six refutations in one round
`CLAUDE.md` says *"the briefs are more defective than the corpus."* **This round measured it against
the coordinator, and the agents won every time.**

| # | What the brief asserted | What was true | How it was caught |
|---|---|---|---|
| 1 | `special_teams.md:1032` at **296** chars | **294**, and the block was at `HARD_MAX` — unstated | the agent measured |
| 2 | `body_contact_and_battles.md` had **6** near-cap lines | **33**, incl. one at **300/300** | the agent ran `--near` |
| 3 | `:1516` was a **material NHL quote drift** | a verbatim **USA Hockey Casebook** sentence; the tool cross-matched | the agent read the range |
| 4 | `shooting.md:449`/`:454-456` near cap | `:451`/`:454` were; **`:449` is not a facts line**, and the block actually edited was never named | the agent measured |
| 5 | *"NHL 56.1 and IIHF **both** define possession as"* + **one** quoted string | the string is the **NHL's**; the IIHF capitalises *"Player"* and quotes *"possession"* | the agent compared |
| 6 | the document renders to **225** SSML units | **224 chunks / 1,059 `<p>` units** | the agent rendered it |

⚠️ **And a seventh, in a message rather than a brief:** the coordinator wrote *"Hockey Canada and
CARHA carry NO stand-your-ground limb"* — **true of Hockey Canada, FALSE of CARHA**, whose Note 2
reads *"defending players are entitled to 'stand their ground' or 'shadow' the attacking
players"* (`carha.txt:3122-3125`). ⚠️⚠️ **The very next paragraph of the same message said Note 2
was about defending players. The message contradicted itself, and the agent noticed before the
coordinator did.**

### ⚠️ The single cause, and it is not carelessness
**Five of the seven are figures or quotations RELAYED OUT OF A PREVIOUS AGENT'S REPORT into a new
brief without re-measuring.** ⚠️ **An agent's report is a primary source about what that agent did,
and a SECONDARY source about the repository.** The coordinator treated the second as the first.

⚠️ **Error 5 is the sharpest: an attribution drift, inside a brief whose own instruction was
"verify every quotation against the primary."** ⚠️ **And error 3 is the one that should have been
impossible — the coordinator had correctly diagnosed the SAME tool's cross-source blindness on a
different flag in the SAME output, one flag earlier.** **Recognising a tool's blind spot once does
not inoculate the next finding; the check has to be re-run per item.**

⚠️ **THE RULE: a number or a quotation entering a brief must be re-derived from the repository at
the moment the brief is written, never copied from the report that surfaced it.** This is
`CLAUDE.md`'s *"a number copied out of its owner goes stale silently"* — **applied not to a
document, but to the dispatch itself.**

⚠️ **What makes this survivable rather than catastrophic is the standing instruction to tell every
agent to refute its brief.** **Every one of the seven was caught by the agent holding the file, and
NONE by a reviewer or a checker.** ⚠️ **In at least two cases — the "material drift" and the
"contradiction" at `winger.md`/`offensive_zone_play.md` — executing the brief as written would have
made a CORRECT document WRONG.**

## ⚠️ A THIRD SILENT FALSE PASS, AND THIS ONE IS REAL: `timeout` DOES NOT EXIST ON THIS MACHINE
Two reported false passes were refuted today (the tools exit 1; `--near` was inverted by `tail`).
**This one reproduces.** Reported by an agent, then measured by the coordinator:

```
$ which timeout gtimeout
timeout not found
gtimeout not found

$ timeout 5 python3 scripts/check_quote_drift.py content/technique/shooting.md | grep -c "DRIFT"
0                        <-- reads as a clean file

$ python3 scripts/check_quote_drift.py content/technique/shooting.md | tail -3
fragments: clean=337 flagged=20 notfound=31        <-- TWENTY flagged
```

⚠️ **`timeout` is a GNU coreutils binary. macOS ships neither it nor `gtimeout` unless Homebrew's
`coreutils` is installed.** The shell reports *"command not found"* **on stderr**, the pipeline's
stdout is **empty**, and a `grep` over that empty stream finds nothing. ⚠️⚠️ **So a checker that was
NEVER RUN is indistinguishable from a checker that found nothing — and the exit code belongs to
`grep`, which legitimately returns 1 for "no matches".**

⚠️ **The agent that reported it hit exactly this, caught it only by re-running bare, and said so.
THE COORDINATOR HAD ALSO USED `timeout` EARLIER IN THE SAME SESSION.**

### Why this one is worse than the two that were refuted
**The refuted pair were reading errors against correct signals.** This is a **missing binary**: there
is no correct signal to read. ⚠️ **And it silently defeats every guard in `CLAUDE.md`'s trap list at
once** — prefixing `timeout` to the absolute-path `node`, to `npm run build`, to any checker, turns a
real invocation into a no-op that looks like success.

⚠️ **THE RULE: DO NOT PREFIX `timeout` TO ANYTHING IN THIS REPOSITORY.** Background the command
instead, or let it run. **This is the same class as the two nvm shim traps `CLAUDE.md` already
documents — a wrapper that reports success while the real work never happened — and it is NOT
recorded there.** It belongs in that list.

### ⚠️ Found in passing: `shooting.md` carries 20 pre-existing quote-drift flags
Surfaced only because the bare re-run was needed to prove the trap. **Not today's work, not from
today's repairs** — the agent that repaired that file reports its new lines flag **zero**. **A
worklist row, unmeasured until now.**

---

# Addendum 43 — C6 NOT MET: the correction reached four files and not the fifth

⚠️ **The `safety-reviewer` that finally ran on the whole changed set returned THREE CRITICALS and
FOUR MAJORS.** All of it is text written today, by five different agents, none of it reviewed until
now. **The gate's original C6 block was right, and one review was not enough.**

## ⚠️ CRITICAL 1 — the coordinator's propagation failure, and it is the plainest error of the round
`rink_map.md:194` **still carries the exact over-claim the `rules-verifier` refuted**:
*"standing in his path is ordinary interference **with no contact needed anywhere**… **USA Hockey
625**"*.

⚠️⚠️ **Why it survived: it was repaired BEFORE the refutation existed, and the coordinator never
went back.** When the `rules-verifier` landed, two live agents were messaged and one new agent was
dispatched — **covering four sites. `rink_map.md` was in none of them, because its agent had
already finished.**

⚠️ **THE CORPUS NOW CONTRADICTS ITSELF INSIDE A SINGLE DIFF:** a reader meeting `rink_map` believes
a stationary opponent in his goalie's lane has already earned a penalty; a reader meeting
`scanning_and_anticipation` believes the reverse. **Either way one of them plays for a whistle that
is not coming — and the bump he adds to sell it is itself the minor.**

⚠️ **THE LESSON IS ABOUT SEQUENCE, NOT DILIGENCE.** *"Message the agent that holds the file"* works
only for files still held. **A finding that lands after a wave has finished has NO OWNER, and
nothing in this repository's method assigns one.** ⚠️ **When a refutation arrives mid-round, the
unit of propagation is THE CLASS, not the live agents — census every site before dispatching, and
the census must include files whose agents have already reported.**

## CRITICAL 2 and 3 — the licence risk re-created INSIDE the facts layer
Both are lines that end on a clause **removing** protection, in documents whose bodies exist to
close that exact gap:
- `scanning_and_anticipation.md:333` ends *"USA Hockey needs contact, 625(a)(8)"* — ⚠️ **but that
  book answers this play in terms with no contact condition. Casebook 625 Situation 9:** *"if the
  goalkeeper is attempting to return… and there is **any interference**… the goal must be
  disallowed and an interference penalty shall be assessed."* Its Rule References are
  **`625(b and a.8)` — TWO authorities**, only one of which needs contact. ⚠️ **The document's own
  body says the right thing two paragraphs above.**
- `special_teams.md:1032` ends *"USA Hockey excludes none. NHL and IIHF 69.4 wants the puck played
  out first and only 'may' penalise"* — ⚠️ **and states an inference as a rule (*"is interference"*,
  flat) while its own body at `:1047` says *"the instruction survives all of that; THE INFERENCE
  DOES NOT."***

⚠️ **Each facts line is voiced ALONE. A floor that lives on the line above does not exist for a
listener.** **Both blocks are at or near `HARD_MAX`, so both must be fixed by substitution.**

## CRITICAL 4 — the duty reaches NO summary layer in ANY of the 39 documents
The reviewer swept every Common Mistakes and Key Takeaways section. **The screen permission is in
five of them — `rules_primer:1139`, `goaltender:1428`, `winger:727`, `shooting:831`, `shooting:892`
— and EVERY ONE tells the reader where to put their feet and stops.** ⚠️ **`shooting.md` now carries
the duty in its FACTS layer at `:283` and not in its own summary layer.** **Round 10's shape again:
a correction that reached the body, reached the facts block, and stopped.**

## ⚠️ THE COUNTERWEIGHT NOBODY HAD USED — and it was on disk the whole time
Everywhere the corpus says USA Hockey puts a returning goaltender **in** possession, it stops —
handing a reader two premises that point at leaning on him. ⚠️ **The SAME Glossary entry forbids it
in the next sentence** (`sources/usah.txt:6205-6206`):
> ***"A player considered to be in 'possession of the puck' is NOT eligible to be body checked
> and/or engage in competitive contact."***

⚠️⚠️ **So the book that DENIES the corpus its no-contact floor supplies a STRONGER protection
instead: the returning goalie is in possession, therefore not eligible to be body checked.** ⚠️ **A
`rules-verifier`, a `safety-reviewer` and five repairing agents all read that Glossary entry for its
first half — the missing goalkeeper exclusion — and NONE read two lines further.** **The corpus spent
the round proving USA Hockey was the exception and never asked what USA Hockey gives instead.**

## Upheld, and worth recording as the models
- ⚠️ **`special_teams.md:1047`'s anti-inversion guard** — *"do not invert that into a belief that a
  stationary opponent has already handed you a call… playing for a whistle by initiating that
  contact buys the penalty instead of drawing one."* **The reviewer calls it the best sentence in
  the diff. It exists in ONE document and ONE layer.**
- ⚠️ **`shooting.md:283`** — *"…not touching them and never in their path back to the crease — that
  is the legal and valuable screen."* **Safe voiced alone, correct in all five books, permission and
  limit in one breath. The model for every other layer.**
- **`team_play_and_culture.md:280`'s** *"not settled in its terms"* — **the best formulation of the
  USA Hockey question in the corpus.**

## ⚠️ THE TWELFTH REFUTATION, AND THE ONLY ONE THAT WOULD HAVE SHIPPED A FALSEHOOD
The coordinator's brief for `rink_map.md:194` supplied the Glossary counterweight discovered in
Addendum 43 and told the agent to use it: *"the returning goalie IS in possession — which makes him
NOT eligible to be body checked."* ⚠️ **The agent refused it, and was right.**

**`rink_map.md:194` is expressly scoped to a goaltender who has *NOT* played the puck.** USA Hockey
defines possession (`sources/usah.txt:6199-6201`) as *"**The last player to have intentionally
played the puck** is considered to have 'possession of the puck.'"*

| The goaltender | Last to have played it? | In possession (USA Hockey)? | Consequence |
|---|---|---|---|
| **has** played it out, returning | **yes** | **yes** | ⚠️ NOT eligible to be body checked |
| has **not** played it | **no** | **no** | ⚠️ the non-puck-carrier limb **does** reach him |

⚠️⚠️ **Both statements are true, of DIFFERENT GOALTENDERS — and the coordinator imported the
`team_play_and_culture` analysis (a RETURNING goalie, who has played it) into a sentence about its
COMPLEMENT.** **Pasting the supplied wording would have told a reader that a goalie who never
touched the puck is in possession. For the case that sentence actually covers, ALL FIVE BOOKS AGREE
and the missing goalkeeper exclusion is irrelevant.**

⚠️ **This is the failure `CLAUDE.md` names in bold — *"THE BRIEF'S PROPOSED WORDING IS A BRIEF, NOT
A PATCH"* — and it is the second recorded instance.** **The premises were sound; the wording was the
defect, and only the agent that had read the sentence's SCOPE could see it.**

### ⚠️ And the brief missed the real critical in that same sentence
The dangerous half was *"**STANDING** in his path is ordinary interference"* — refuted by the two
books the sentence itself names and quotes: **NHL 56.1** (`nhl_rules.txt:6250`) and **IIHF 56.1**
(`iihf_rules.txt:4683`, `iihf_rules_2026-27.txt:4772`) — *"A player is allowed the ice he is
standing on (body position) and is not required to move in order to let an opponent proceed."*
⚠️ **The coordinator had assigned that finding only to `team_play_and_culture.md`.** **The corpus was
telling a net-front reader that a stationary opponent had already earned him a call — in a Foundation
document, under a quotation that says otherwise.** Repaired to *"moving into his path"*.

### A third correction to the brief
*"The one book named without a subsection"* was imprecise: **USA Hockey Rule 625 IS the general
Interference rule** (`usah.txt:4448`), its Note keyed to a *"non-puck carrier"*, so the bare cite is
not a category error. **What was wrong was bundling it behind a quoted NHL/IIHF limb** when USA
Hockey's Casebook routes this play through `625(b and a.8)`.

## ⚠️ New finding, filed not fixed: Hockey Canada 8.3(b)
`sources/hc.txt:6839` — *"**A Major penalty and Game Misconduct penalty, at the discretion of the
Referee**, based on the degree of violence of the impact, may be assessed to any player who
interferes with an opposing player."* **The same discretionary tier CARHA 66(a) carries.**

The repairing agent **deliberately left** the Hockey Canada half reading *"a minor"*, because HC's
major is gated on *"degree of violence of the impact"* and the act under discussion involves **no
contact** — a gate CARHA's 66(a) does **not** have. ⚠️ **That reasoning is sound for THIS sentence.
But anywhere the corpus states a bare minor at Hockey Canada 8.3 for a CONTACT interference, 8.3(b)
may make it an understatement. Uncensused.**

## ⚠️ A FIGURE WRONG AT FOUR CONSECUTIVE LEVELS — the round's failure mode in one artefact

| Level | Who | Said | Actual |
|---|---|---|---|
| 1 | the script's own `notes.md` | *"the word appears once in the whole script"* | **false when written** |
| 2 | coordinator's brief | *"the word appears once"* — relayed from `notes.md` | — |
| 3 | a `safety-reviewer` correcting the brief | *"it appears **four** times"* | **also wrong** |
| 4 | coordinator's next brief | relayed the reviewer's **four** as a correction | — |
| 5 | the repairing agent | **measured: three** (2 *concussion*, 1 *concussed*) | ✓ |

⚠️⚠️ **A FALSE FIGURE IN A SCRATCHPAD NOTE BECAME A FALSE FIGURE IN A BRIEF, THEN A FALSE CORRECTION
OF THAT BRIEF, THEN A FALSE CORRECTION OF THE CORRECTION.** **Four levels, two of them reviewers
whose job was to attack figures. Only the agent that ran `grep` got it right.**
**Replaced in the notes with a grep instruction rather than a new number.**

## ⚠️ AND A LINE RANGE IS A FIGURE — the fourteenth refutation, and the most consequential
The coordinator's brief cited `content/technique/skating.md:594-597` as *"the source's FOUR fall
limbs"*. ⚠️ **The list starts at `:593` and has FIVE:**

1. ⚠️ **`:593` — *"Get low first.** As you feel yourself going, bend the knees and sink. The closer
   you are to the ice when you land, the less there is to absorb."* — **EXCLUDED BY THE RANGE**
2. `:594` — *"Go to the side, onto the fleshy part."*
3. `:595` — *"Do not stick a hand out to catch yourself."*
4. `:596` — *"Slide with it."*
5. `:597` — *"Tuck your chin toward your chest if you are going over backwards."*

⚠️ **The brief was short by one limb of a FIVE-LIMB INJURY PROTOCOL, and the missing limb is the
first one — the one that reduces every other impact.** ⚠️ **Had the agent trusted the range, the
repair for "the protocol is incomplete" would itself have shipped an incomplete protocol — the
third time in this round that executing a brief as written would have produced a new defect.**

⚠️ **THE RULE, and it is new: A LINE RANGE IS A FIGURE AND GOES STALE THE SAME WAY.** A brief that
says *"the four limbs at `:594-597`"* has **encoded its own count into the citation**, so an agent
reading exactly that range **cannot discover the fifth**. ⚠️ **Cite the SECTION and the DISCRIMINATOR
— *"the falling bullet list under §Falling and Getting Up"* — and let the agent find its bounds.**
**A range is an answer disguised as a reference.**

## ⚠️ THE COUNTERWEIGHT WAS OVERSOLD — in three briefs, by the coordinator, on the day it was found
Addendum 43 recorded the USA Hockey Glossary clause as *"the strongest available answer to the
inverse-belief risk"*. ⚠️ **It is not, and an agent measured the limit:**

> `sources/usah.txt:6205-6206` — *"A player considered to be in 'possession of the puck' is NOT
> eligible to be **body checked and/or engage in competitive contact**."*

⚠️ **It bars BODY CHECKING and COMPETITIVE CONTACT. It says nothing about a NO-CONTACT BLOCK OF THE
PATH — which is the exact act the round's critical is about.** **A real protection, correctly
verified, aimed at the wrong half of the problem.**

⚠️⚠️ **THE COORDINATOR PUT IT IN THREE BRIEFS IN BOLD AS THE ANSWER, WITHIN AN HOUR OF RECORDING
THAT THE ROUND'S DOMINANT DEFECT IS OVER-CLAIMING.** **The find was real; the framing was a new
over-claim of the class being corrected.**

**How the three agents handled it — and the corpus survived on their judgement, not the brief's:**

| Agent | What it did | Verdict |
|---|---|---|
| `scanning`/`shooting` | claimed only the body-check bar — *"a player you may not body check at all"* | ✅ correctly scoped |
| `rink_map` | **refused it outright** — its sentence was scoped to a goalie who had NOT played the puck, who is therefore not in possession under USA Hockey either | ✅ refused for a second, independent reason |
| `special_teams` | **refused to end the facts line on it**, measured the limit, put it in the body scoped and attributed | ✅ refused and explained |

⚠️ **THREE FOR THREE. Not one pasted it. The instruction to refute the brief is the only thing that
stopped a bolded coordinator over-claim reaching the corpus in three documents at once.**

⚠️ **What actually answers the no-contact act under USA Hockey is its Casebook — Rule 625,
Situation 9 — on *"any interference"*, taking the goal and adding a minor.** **Glossary clause for
contact; Situation 9 for no contact. They are different answers to different acts and the brief
merged them.**

## Three more measurement refutations from the same agent — fifteen through eighteen
- *"`:1036` contains 'under all four books' twice"* — **false**: once at `:1035`, once at `:1036`.
- The brief's list of count phrases **missed the one that bites** — *"Feet out of the blue under all
  four books"*, the paragraph's closing **instruction**, and the exact place a CARHA reader is told
  the paint bar is not his.
- `:1035` has **3 characters** of headroom, unstated. ⚠️ **The agent therefore REFUSED that half of
  the major and showed the arithmetic: naming four books costs +28.** Every way to pay evicted a
  fact, degraded a citation, or broke an antecedent. ⚠️ **It also refused to relabel `Key:` → `Rule:`
  for the 300-char cap, because that would present a cross-book inference partly drawn from silence
  as a rulebook rule — the critical's own failure mode.** **And it showed no safety harm: CARHA has
  no goaltender-vision provision, so a CARHA reader who assumes he is included is correct.**

⚠️ **That is a model refusal: measured, arithmetic shown, safety consequence reasoned, alternative
rejected with its own reason.**

---

# Addendum 44 — the coordinator's own census was wrong by ONE WORD, and a framing rule the round had backwards

## ⚠️ Refutations 19 and 20 — and these were measurements the coordinator MADE, not relayed
After thirteen refutations for relaying other agents' figures, the coordinator ran its own layer
test and reported: *"`goaltender.md` and `winger.md` carry the permission in their Key Takeaways and
the duty appears NOWHERE in either document's summary layers."*

⚠️ **False for both. The duty was already there, landed by `da33d6d` earlier the same day:**
- `winger.md:727` — *"So stand in a goaltender's eyes, **never in their way home** — that second one is not a screen."*
- `goaltender.md:1428` — *"**What 69.4 does give you out there is the way home**…"*

⚠️⚠️ **THE CAUSE: the census pattern matched `road home`. THE CORPUS SAYS `way home`.** **One word.**
⚠️ **An agent was dispatched to repair two correct documents on that premise. It measured, refuted
the brief, and edited nothing at either named site — *"re-editing them would have been new
unreviewed text over correct text."***

⚠️ **AND THE SECOND HALF OF THE SAME BRIEF WAS ALSO FALSE** — *"the 69.4 narrowing appears in NO
summary layer in ANY of the 39 documents"*, relayed from a reviewer. **It is in at least four:**
`goaltender.md:1428`, `winger.md:727`, `rules_primer.md:995`, `shooting.md:892`.

⚠️ **THE LESSON IS NOT "RELAY LESS" — the coordinator had stopped relaying and measured this one
itself. It is that A HAND-WRITTEN REGEX IS A HYPOTHESIS ABOUT WORDING, AND THIS CORPUS DOES NOT
REPEAT ITS WORDING.** The same file documents `check_facts_antecedents.py`'s lesson — *"the obvious
pattern is useless"* — and the coordinator reproduced it while believing it was doing the careful
thing. ⚠️ **A negative census result must be attacked by finding ONE known-positive site and
confirming the pattern catches it. That costs one command and would have caught this.**

## ⚠️ AND THE ROUND HAD ITS FRAMING RULE BACKWARDS FOR ONE READER
The round has been stripping 69.4's precondition from summary layers on the reasoning that, voiced
alone, *"only if the goalie had played the puck out"* reads as a licence. ⚠️ **Correct for the
ATTACKER. Inverted for the GOALTENDER, and the agent that owns that document said so:**

| Reader | Failure mode | So the summary layer takes |
|---|---|---|
| **attacker** (`winger`, `shooting`) | hears the precondition as **a licence** — the goalie who never touched the puck is fair to block | ⚠️ the **bare, unconditional** limit |
| **goaltender** (`goaltender.md`) | hears an unconditional *"you are protected coming home"* and **relies on protection they do not have**, leaving the crease expecting a cleared lane | ⚠️ **the precondition, KEPT** |

⚠️⚠️ **THE SAME CLAUSE, STATED THE SAME WAY, IS SAFE IN ONE DOCUMENT AND HAZARDOUS IN THE OTHER. THE
ASYMMETRY IS ABOUT WHO IS LISTENING, NOT ABOUT THE SENTENCE.**

⚠️ **CONSEQUENCE, AND IT MUST TRAVEL: `goaltender.md:1428` MUST BE EXEMPTED BY NAME from any future
sweep that strips preconditions from summary layers, or the sweep will make the corpus more
confident than the rule — for the one reader who is out of position when it fails.**

## What the agent actually changed, and what it refused
**Executed:** `winger.md:29` — the document's **opening** facts block, the first thing a listener
hears, stated the permission bare while the net-front block 400 lines later carried the duty.
257 → **292/300**, nothing evicted, block still at `HARD_MAX` 11, **no precondition added** (correct
for this reader). Body at `:35` edited to match, so the facts line stays traceable rather than
authored.

**Refused, with arithmetic:** `winger.md:452`'s block — at `HARD_MAX`, every candidate host at cap,
and paying would have evicted either *"keep your body out of the crease"* or the *"appendix table,
not rule text"* scope flag. ⚠️ **Handed back as a structural decision rather than forced.**

---

# Addendum 45 — ⚠️ THE VERB. Four generations of one sentence, and the same word wrong each time.

**C6 NOT MET again — two criticals, three majors, on text five agents wrote to close the LAST C6
block.** ⚠️ **The reviewer's closing warning, and it is the most useful sentence produced today:**
> ⚠️ ***"The failure this diff was correcting has now recurred three times in three successive
> rounds. The two criticals above are both the FOURTH generation of the same sentence. Expect a
> fifth, and check the verb."***

## The discriminator is one word
**NHL 56.1** (`nhl_rules.txt:6250-6252`) and **IIHF 56.1** (`iihf_rules_2026-27.txt:4772`):
> *"A player is allowed the ice he is standing on (body position) and **is not required to move** in
> order to let an opponent proceed."*

**The limb that penalises is framed on movement** (`:6287-6289`) — *"A player delivering a 'pick' is
one who **moves into** an opponent's path without initially having body position."*

⚠️ **STANDING in a lane is expressly protected. MOVING INTO it is the offence.** **One verb decides
which sentence the corpus is writing.**

| File | Verb | Verdict |
|---|---|---|
| `special_teams.md:1032` | *"**moving into** a returning goalie's path"* | ✅ |
| `rink_map.md:194` | *"**moving into** his path"* | ✅ |
| `team_play_and_culture.md:280` | *"**moving into** a returning goalie's lane"* | ✅ |
| **`shooting.md:831`** (Common Mistakes) | *"**standing in** the road home… is reached by every book"* | ❌ **CRITICAL** |
| **`scanning_and_anticipation.md:333`** (facts) | *"**blocking** a goalie's road home is interference"* | ❌ **CRITICAL** |

⚠️ **Both survivors sit in a SUMMARY OR EXTRACTION layer while the floor sits in the BODY of the
same document** — `shooting.md:304` (*"the line is between holding ice you already occupy and moving
into the road home"*) and `scanning:351` (*"read the other half of NHL and IIHF 56.1… it is the half
that keeps one legal"*). **Round 10's shape, fourth generation: the correction reached the body and
stopped.**

⚠️ **And `scanning:333`'s block opens with *"Action: As a goaltender, move your head to look around a
screen"* — SO THE LISTENER IS A GOALTENDER**, hearing flat and unhedged that a body in his road home
is interference. **He plays for the whistle, or skates into the screener to earn it.**

## ⚠️ The CARHA claim the coordinator got wrong TWICE, then briefed a third time
`team_play_and_culture.md:280` now asserts *"Hockey Canada and CARHA write no stand-your-ground limb
at all"*. ⚠️ **False for CARHA** — `carha.txt:3122-3125`, Note 2 to Rule 66(a): *"the defending
players are entitled to 'stand their ground' or 'shadow' the attacking players."*

⚠️⚠️ **THE COORDINATOR RECORDED THIS CORRECTION EARLIER TODAY — that its own message had
contradicted itself two paragraphs apart on exactly this point — AND THEN PUT THE UNCORRECTED
CLAIM INTO A LATER BRIEF, QUOTING IT APPROVINGLY.** **Recording a correction is not the same as
retiring the wrong version, and nothing in this method retires it.**

⚠️ **The corpus now contradicts itself three ways, two of them inside one diff:**
`team_play:280` asserts it · **`special_teams.md:1047` asserts it and then IMMEDIATELY CORRECTS IT**
(*"CARHA's Note 2 does not rescue you, because the entitlement it records belongs to the **defending
players**"*) · `rink_map.md:635` says CARHA's Note 2 **does** say what NHL 56.1 says.
**One agent took the first half of a sentence and left its correction behind.**

## What this says about the method
⚠️ **Five agents wrote these repairs. Every one refuted parts of its brief, and the corpus is much
better for it. And the same verb regressed anyway — because NO BRIEF NAMED THE VERB AS THE
DISCRIMINATOR.** The briefs named the *books*, the *clause*, the *counterweight* and the *layer*.
**They did not say: the word that decides this is "moving" and not "standing."**

⚠️ **THE RULE: when a defect recurs across generations, stop re-describing the DEFECT and name the
SMALLEST TEXTUAL DISCRIMINATOR that separates the right sentence from the wrong one. A brief that
says "do not over-claim" produces a fifth generation. A brief that says "the verb is *moving into*,
never *standing in*, and here is the rulebook sentence that decides it" does not.**

## ⚠️ SIXTH GENERATION — and it is the MIRROR of the fifth. The fix over-applied itself.

**Addendum 45 named the verb as the discriminator: *standing in* a lane is protected, *moving into*
it is the offence.** ⚠️ **The very next repair applied that rule to books it does not govern.**

`special_teams.md:1109`, in the Common Mistakes bullet **added by this round's repair**:
> *"**Hockey Canada and CARHA write no returning-goalkeeper clause at all**, and reach the act
> through the ordinary interference rule instead. ⚠️ **It is the moving that buys the penalty**…"*

⚠️⚠️ ***"It is the moving that buys the penalty"* IS THE NHL/IIHF ANSWER — stated flat, in the
sentence immediately after the one naming Hockey Canada and CARHA.** **Voiced alone, a listener
takes the verb rule to govern the books just named.**

**Measured this session, word-bounded, flattened, with positive controls:**

| Book | `allowed the ice` | `not required to move` | `stand their ground` | control |
|---|---|---|---|---|
| `hc.txt` | **0** | **0** | **0** | `goaltender` 369 |
| `carha.txt` | **0** | **0** | **1** — Note 2 to 66(a), and it belongs to the **DEFENDING** players | `goalkeeper` 181 |

⚠️ **Hockey Canada has no stand-your-ground limb at all. CARHA's runs the other way — and on a power
play the reader is the ATTACKER.** ⚠️ **So under both books a body standing still in the road home
IS inside the interference limb: a minor, and the advantage gone, on the play the bullet's own
opening calls *"the worst trade available to you."*** **USA Hockey's Casebook 625 Sit. 9 likewise
reaches *"any interference"* with no moving element.**

## ⚠️ The document already said it correctly — in its own body, forty lines away
`:1047`: *"so against a body simply parked and not moving the claim holds in **Hockey Canada and
CARHA and not in those two**."* **And `team_play_and_culture.md:280` does it correctly too** — *"**In
two of those four** it is the moving that does the work."*

⚠️ **A corpus grep for the unscoped form (`moving that buys|the moving is what|it is the moving`)
returns exactly two hits: the correct one in `team_play` and this one. THE ERROR IS CONTAINED —
measured, not assumed.**

## ⚠️ WHAT THIS ROUND ACTUALLY TEACHES, and it is not "check the verb"
**Five generations stated the rule too broadly in one direction. The sixth stated the CORRECTION too
broadly in the other.** ⚠️ **Naming a discriminator does not make a brief safe — it hands the next
agent a rule that is itself scoped, and the scope travels less well than the rule does.**

⚠️⚠️ **THE DISCRIMINATOR HAS A DISCRIMINATOR: the verb rule governs claims resting on 56.1/56.2 IN
THE NHL AND IIHF ONLY. It does not govern Hockey Canada, CARHA or USA Hockey — none of which writes
a stand-your-ground limb — and it does not govern 69.4 claims in ANY book, whose operative term is
*"deliberate actions"* rather than movement.**

⚠️ **So the rule is: name the discriminator AND the books it holds in, in the same sentence. A
discriminator stated without its scope is the next generation's defect.** **This is the third
distinct shape of the same failure in one round — over-claim, over-correct, over-apply — and each
was caught only by the reviewer AFTER the repair, never by the brief that commissioned it.**

---

# Addendum 46 — the claim is REFUTED, by a book's own Interpretation, at the seventh generation

⚠️ **A `rules-verifier`, dispatched because the repairing agent said *"I derived it, so I cannot
clear it"*, found the sentence CONTRADICTED for Hockey Canada and UNPROVEN for CARHA.**

## ⚠️ Hockey Canada answers this exact fact pattern, and the answer is the opposite
**`sources/hc_layout.txt:5602-5609`, Interpretation 3 to Rule 8.5(a)** — verified verbatim:
> *"An attacking player is **NOT committing a foul by simply standing in the goal crease.** However,
> if while standing in the crease, the attacking player attempts to play the puck, interfere with
> the play, or **impede the goaltender's vision or movements, then no goal may be scored.** …
> **Note 1: No penalty would be assessed unless the attacking player's body or stick makes actual
> physical contact with the goaltender.**"*

⚠️⚠️ **A motionless attacker impeding the goaltender's MOVEMENTS: GOAL DISALLOWED, NO PENALTY,
absent physical contact — and Hockey Canada reaches that answer INSIDE THE CREASE, the most
protected ice on the sheet.** ⚠️ **A rule that will not penalise standing still in the crease cannot
be read to penalise standing still in the lane outside it.**

⚠️⚠️ **THE PARAGRAPH BELOW IS WRONG AND IS RETRACTED. IT IS LEFT IN PLACE, STRUCK, BECAUSE THIS
RECORD IS APPEND-ONLY AND MUST SHOW WHAT WAS BELIEVED WHEN IT WAS WRITTEN. THE REFUTATION IS FURTHER
DOWN THIS FILE — DO NOT ACT ON THE STRUCK TEXT.**

> ~~⚠️ **And Hockey Canada's Interpretation 2 to Rule 8.3(a)(i) routes goaltender questions OUT of
> 8.3 and INTO 8.5** — *"As the goaltender is not considered to be 'fair game' (see Rule 8.5)…"*
> **So the corpus's routing — ordinary 8.3, a minor, no contact needed — is the route Hockey Canada's
> own cross-reference sends you away from.**~~

⚠️ **WHY IT IS WRONG:** `sources/hc_layout.txt:5441-5445` governs **the goaltender's own contact** —
*"the goaltender may not make deliberate physical contact with opposing players"* — and the
`(see Rule 8.5)` is a **parenthetical gloss on the phrase *"fair game"***, not a routing
instruction. **It says nothing about where an ATTACKER's interference question is decided.**
⚠️ **This passage was a coordinator relay of a `rules-verifier`'s GLOSS, written without opening the
file. It reached `content/` once and was removed. It is the only one of the round's refutations that
got that far.**

⚠️ **AND A CONSEQUENCE THAT FOLLOWED FROM IT, ALSO RETRACTED:** a later brief told an agent that
`special_teams.md:1047` had been *"repaired to stop asserting"* the ordinary-interference route, and
that `:1032` therefore contradicted it. ⚠️ **Neither was true.** `:1047` asserts the route
**deliberately and correctly**, because it distinguishes **moving into** the path from a body
**already parked**; `:1032` is scoped to *"moving into"*; and Hockey Canada's Interpretation 3 is
about an attacker *"simply standing"* — **a different act.** ⚠️ **The two "defects" were ONE defect:
the struck clause above. Removing it resolved both, and the facts layer needed no edit at all.**
⚠️ **Had the brief been executed, the false reading would have been propagated INTO the extraction
layer — the one voiced alone, with no surrounding context.**

**CARHA: unproven.** Same limb, but **no interpretation and no casebook**, so no ruling either way.
66(b) gates on *"actual physical contact"*; Note 2 opens *"**Often** the action and movement…"* —
*"often"* is not *"only"*, but it is the only steer and it points away from a parked body.

⚠️ **THE SUB-PREMISE WAS VERIFIED AND THE CONCLUSION STILL FAILED.** Neither book writes the phrase
— re-derived word-bounded across **both** HC extractions, de-hyphenated **and** whitespace-obliterated,
with positive controls. ⚠️ **AN ABSENCE OF A DEFENCE IS NOT THE PRESENCE OF AN OFFENCE.** **Six
agents reasoned from that silence; none tested what the silence licensed.**

## ⚠️ And the "fix" sentence was wrong too — in the dangerous direction
*"Under the NHL and the IIHF it is the moving that buys the penalty."*
- **56.1's lateral limb requires CONTACT** — *"Moving laterally and without establishing body
  position, **then making contact**…"*
- **56.2(i) carries NO contact gate** and is what a referee actually reaches for.
- **Table 14 §5 discriminates on CREASE POSITION, not motion** — 5A and 5C allow the goal for a
  player **in motion** outside the crease; 5B disallows it for one **in motion** inside.

⚠️⚠️ **So the verb does not decide under those books either — and voiced alone that sentence reads
as *"standing in a goalie's route home is safe under the NHL and IIHF."* AN UNDER-WARNING ON CONTACT
NEAR A GOALTENDER.** **The contradicted limb errs over-cautiously; this one errs the other way.**

## Three corrections to the corpus's control set
1. ⚠️ **USA Hockey leaves the "silent" column.** `usah.txt:380` — *"A skater is entitled to stand
   their ground and is not required to move…"* ⚠️ **The book states its own status** (`:261-265`):
   the Declaration is *"not designed to replace our current rules/definitions, but… to clarify and
   update"* them. **But it sits under *competitive contact*, and USA Hockey states the idea elsewhere
   WITH a condition — *"as long as they are able to maintain their own foot speed and body
   position."*** **The four-way framing collapses to three books writing it and two not.**
2. **Quote attribution:** *"the ice **he is** standing on"* is the **NHL's**; the IIHF prints
   *"**they are**"*. **One book's wording credited to two.** ⚠️ **`check_quote_drift.py` cannot see
   this — it keeps the closest match across all sources.**
3. **Hockey Canada's possession rule is not a bare *"except the goaltender"*** — the Glossary's next
   sentence is *"A goaltender must have control of the puck before they are considered to have
   possession."* **The premise survives; the statement of it was incomplete.**

## ⚠️ An unverified tooling claim, NOT recorded as fact
The verifier reported that **BSD `grep -o -c` silently under-counts on a whitespace-flattened
single-line file** (16 against a true 171). ⚠️ **IT DID NOT REPRODUCE** — the coordinator tested the
same token on the same file and got **171 from both `grep -o -c` and Python `re.findall`.**
⚠️ **Recorded as unreproduced rather than propagated. Twice today this round nearly enshrined a
tool defect that did not exist** — the *"tools exit 0 on usage error"* claim was also false, and
every `check_*.py` was measured afterwards to signal correctly.

## ⚠️ WHAT SEVEN GENERATIONS ACTUALLY SHOW
**Each generation fixed the previous defect and introduced a new one IN A DIFFERENT DIRECTION:**
over-broad → over-corrected → over-applied to the wrong books → under-warning. ⚠️ **No amount of
naming the defect, the books, the layer or even the VERB stopped the next one.**

⚠️⚠️ **THE DIAGNOSIS IS NOT CARELESSNESS. IT IS THAT THE SENTENCE WAS ATTEMPTING A CROSS-BOOK LEGAL
CONCLUSION THE BOOKS DO NOT SUPPORT UNIFORMLY — and every repair tried to state that conclusion more
precisely instead of asking whether it could be stated at all.**

⚠️ **THE FIX IS A CHANGE OF KIND: stop asserting the consequence; state what each book DOES, and
disclose what is unresolved.** **The corpus's own convention protects that disclosure, and the
verifier says the author's earlier disclosure of the tension *"is correct and should stand."***
**Whether occupying space is a *"deliberate action"* under 69.4 is genuinely open: no NHL casebook
exists, the IIHF Situation Handbook has no situation on the clause in either edition, and Table
14/16 have no returning-goalkeeper row.**

## ⚠️ A FALSE CLAIM REACHED THE CORPUS — relayed by the coordinator, from a reviewer, unread

`special_teams.md:1109` now asserts: *"**Interpretation 2 to Rule 8.3(a)(i)** also routes goaltender
questions out of the ordinary interference rule and into 8.5."*

⚠️ **It says no such thing.** `sources/hc_layout.txt:5441-5446`, read directly by the coordinator:
> *"As the goaltender is not considered to be 'fair game' (see Rule 8.5 – Interference with the
> Goaltender) for physical contact, **the goaltender may not make deliberate physical contact with
> opposing players.** If a goaltender makes an otherwise legal bodycheck on an opposing player, this
> must be penalized as Interference."*

⚠️⚠️ **It is about THE GOALTENDER'S OWN CONTACT — a goalie may not bodycheck. The Rule 8.5 reference
is a PARENTHETICAL explaining the *"fair game"* phrase.** **The corpus's *"8.3 is the route the book
sends you away from"* reasoning rests on nothing.**

### The chain, and it is four links long
1. A `rules-verifier` glossed the line as *"routes goaltender questions out of 8.3 and into 8.5"*.
2. ⚠️ **The coordinator relayed the GLOSS into a brief, in bold, without opening the file.**
3. The repairing agent, given it as verified, wrote it into `content/`.
4. ⚠️ **The NEXT agent read the actual line and refuted it.**

⚠️ **This is the round's dominant failure mode reaching the CORPUS rather than being caught in a
brief — and it is the only one of the thirty-six that did.** **Every other refutation was caught by
the agent holding the file BEFORE it was written.**

⚠️ **Note what made this one different: the claim came from a REVIEWER rather than from the
coordinator's own measurement, and a reviewer's finding was treated as verified.** ⚠️ **A
`rules-verifier`'s GLOSS is not its QUOTATION. The quotation is evidence; the sentence around it is
that agent's reading — and readings are exactly what this method exists to attack.**

### ⚠️ And the same report over-described the record, in the safe direction
The brief said `sources/README.md` *"says only"* that the NHL Situation Handbook *"is also not
here."* ⚠️ **It is a full section at `:153-176`** — *"The NHL Situation Handbook is NOT publicly
obtainable — searched properly, recorded as a fact"* — with four converging lines of evidence and
its own warning *"⚠️ This does not prove non-existence… Stop re-opening it as a task."*
**Same practical conclusion, a far larger evidence base than the brief implied.**

### Two more control-set corrections, both from agents refuting briefs
- **Hockey Canada DOES write *"body position"*** — Rule 8.1 (Holding), `hc_layout.txt:5329`: a
  permission to block **with the arm**, not an entitlement to the ice you stand on. **The negative
  survives; the phrase is not absent.**
- **CARHA DOES write *"stand their ground"*** (`carha.txt:3122-3124`), for *"the **defending**
  players"*. ⚠️ **The coordinator asserted twice that neither book writes it, having already
  recorded the correction once.**
- **There IS an IIHF *"Situation 69.4"*** in both editions — **sequential numbering, answering Rule
  69.1.** ⚠️ **A future verifier grepping `69.4` will hit it and wrongly conclude the
  returning-goalkeeper clause is covered. Recorded so that does not happen.**

---

# Addendum 47 — the 19 September repairs, and a defect in the coordinator's own sweep

⚠️ **A `commit-gate` CLEARED the diff and asked for this before the commit**: the *class*, the
*method* and the *filed residue* were all on record, but **the specific acts of 19 September were
not** — and C11's terminating rule has a "recorded" limb the gate had to satisfy from the diff
rather than from this file.

## What was repaired on 19 September, after clearance
| Site | Repair | C11 |
|---|---|---|
| `special_teams.md:1109` | added the 69.4 disclosure: NHL *"outside of his crease"* / IIHF *"outside of **their goal** crease"* | **survives** — one new assertion, true, moves/merges/renumbers nothing |
| `special_teams.md:1032` | `only "may be penalized";` → `says "may".` | **survives** — `may` is identical in both books, so no new claim |
| `special_teams.md:1041` | *"only"* deleted | residue was `are`, concord — not a pronoun, capitalisation or quotation mark |
| `team_play_and_culture.md:280` | *"only"* replaced; names *"a capital G"* | ⚠️ **deliberate over *"capitalised"* — read aloud the two quoted strings are IDENTICAL, so naming the letter is the only version that survives the speech layer** |
| `rink_map.md:194` | *"belong to the 'pick' sentence **alone**"* narrowed | the IIHF quotes that term at **seven** further places in Rule 56.1 and once in 54.2 |
| `shooting.md:831`, `:304`, `scanning:351` | four undisclosed quotations disclosed | each names only divergences inside its own span |

## ⚠️ THE COORDINATOR'S SWEEP HAS A DEFECT — found by the gate, recorded so it is not reused
The sweep that reported **zero remaining sites** pairs quotation marks with
`["""«]([^"""»]{20,300})["""»]`. ⚠️ **On a line carrying many `*"…"*` spans that regex MIS-PAIRS
across spans and SILENTLY SKIPS quotations.** **Sequential pairing surfaces a site the sweep calls
clean:** `rink_map.md:194`'s *"due to the deliberate actions of an attacking player"*, where the
IIHF writes *"an attacking **P**layer"*.

⚠️ **It is NOT blocking — the span and its joint attribution are byte-identical in HEAD; the diff
restructured the sentence AROUND the quotation without touching it.** **Workstream 16's territory.**

⚠️⚠️ **BUT THE SWEEP'S "ZERO" WAS NEVER A PROOF.** **It is now the THIRD parameter of that sweep
shown to decide its own answer** — after the look-back window (15 / 38 / 63 hits at 90 / 400 / 1,200
chars) and the disclosure-window filter. ⚠️ **A mechanical sweep for this class does not measure the
corpus; it measures its own regex.** **Use it to SURFACE candidates and never to certify absence.**

## ⚠️ And the 900-char disclosure filter has its own hole
The gate found that at `rink_map.md:194` **the `Player` disclosures that DO follow within 900
characters are scoped to 56.1 and 56.2(i)** — so the filter suppressed a 69.4 quotation because a
*different rule's* disclosure sat nearby. ⚠️ **A disclosure near a quotation is not a disclosure OF
it. The filter cannot tell.**

## What the round cost, and what it bought
**Five commit gates. Four blocks, each correct and each narrower: C5 plus bundling → four more sites
→ one false divergence claim → one undisclosed quotation.** ⚠️ **The coordinator was refuted SIXTY-TWO
times, and in FIVE CONSECUTIVE BRIEFS the supplied WORDING carried a defect while the premises held.**
⚠️ **`CLAUDE.md` says specify the defect and the constraint and let the agent that has read the
document write the sentence. The briefs that stopped supplying wording stopped shipping defects.**

# Round 74 — the route was never bounded, and the briefs were wrong eight times

**11 September 2026.** Fourteen agents on disjoint file sets, with the coordinator running the censuses, a
tool fix, the diagram rebuild and the plan. Dispatched immediately after `0e30d89` and `313f3c8` shipped.

---

# The thread

**Four of the first five rows dispatched closed as REFUTED — the plan was wrong, not the corpus.** That is
the headline, and it is not a complaint about the plan: it is the measurement `CLAUDE.md` predicts, arriving
at a rate nobody had quantified.

| row | what was measured |
|---|---|
| `zone_entries.md` "the paint" ×4 | **already repaired** in `0e30d89`, two commits before dispatch |
| `forechecking_systems.md` has no receiving posture | **present in six placements across four layers** since 3 September — the row's own date |
| arm-first board contact understated | present in **every layer but one**; the quotation said to be *"nowhere in the corpus"* had been there since the content directories were created |
| `rules_primer.md` five dangling pointers | wrong in **five particulars**, including its premise |

⚠️ **And the coordinator's own briefs were wrong eight times, in three distinct shapes.** Every one was caught
by the receiving agent; none by the dispatcher.

| shape | count | example |
|---|---|---|
| **relayed a figure without re-deriving it** | 3 | *"41.5%"* copied from the owner document into the style guide; it is **45.5** |
| **relayed a citation address** | 3 | Casebook Situation 15 given at `:11326`; it is at **`:18653`** |
| **asserted a property of something not examined** | 2 | a census run with the SUBJECT FILE EXCLUDED, then a conclusion drawn about that file |

**The last shape is the new one and the worst.** A census of *"the paint"* across `content/` excluded
`zone_entries.md`, found the remaining ~90 uses all meant the crease, and told the agent *"your document is
the sole outlier in the entire corpus."* ⚠️ **That was a claim about the one file the census had deliberately
not looked at.** False twice over. **A census scoped to exclude its subject cannot support a conclusion about
its subject.**

---

# Coverage — every file in the commit, and who checked it

⚠️ **This section exists because `commit-gate` blocked round 74 for not having one**, and blocked round 73 for
a record that did not cover its own diff. **A record that does not name a file did not review it.**

| file | what changed | who checked it, other than its author |
|---|---|---|
| `content/technique/body_contact_and_battles.md` | §2 route limb across 4 layers; §9 arithmetic + NHL 23.5; §11 tripping rewrite; KT7 shock absorber | `safety-reviewer` ×2 (one of which rejected the §11 hunk and repaired it), `content-reviewer` |
| `content/systems/forechecking_systems.md` | approach-angle safety material; HC 7.3 completed across 5 layers; 2 inversion repairs | `safety-reviewer` ×2 |
| `content/hockey-iq/time_and_space.md` | §4 route limb in body + facts + Sources trailer | `safety-reviewer` |
| `content/foundation/rules_primer.md` | 5 aggregation sites; 3 pointer sentences; 2 grammar repairs | `content-reviewer` ×2 |
| `content/off-the-ice/mental_game.md` | angling clause bounded; British routing; Edition note | `rules-verifier`, `content-reviewer` |
| `content/systems/zone_entries.md` | one facts line, *"the painted blue line"* | `content-reviewer` |
| `scripts/check_tables.py` | blockquote support | coordinator; before/after diffed, 2→3 dropped, no other row moved |
| `sources/README.md` | three `ibc` traps | coordinator; each trap re-derived by `commit-gate` |
| `project/content_style_guide.md` | owner row for the penalty-call figures | coordinator; arithmetic re-derived by `commit-gate` |
| `project/plans/OPEN_ITEMS.md` | rows closed and opened | coordinator |
| `project/reviews/round_74_the_route_was_never_bounded.md` | this record | coordinator |
| `site/src/diagrams/forechecking_systems.mjs` | both boards captions | `diagram-reviewer`; **`site-reviewer` on the rendered page** |
| `site/src/data/diagrams.json` | build product of the above | rebuilt 06:57-07:05; `check_absolutes` certifies 396 caption units |

## Dimensions

⚠️ **Numbered against `review_process.md`'s own table, not from memory. An earlier draft of this section
mislabelled two, and one half erred in the direction this project guards hardest against: it wrote
*"D1-D8 checked"*, which asserts D5 PROVENANCE was checked, while the same paragraph's prose denied it.
`commit-gate` caught it. A future round reading the numbers rather than the sentences would have concluded
provenance was verified.**

**Checked:** **D1** rules accuracy, **D2** exceptions, **D3** rule-set divergence — heavily exercised this
round; the whole finding is that three books scope the same offence differently — **D4** citation integrity,
**D6** negative existence claims, **D7** the cardinal rule, **D8** numeric ownership, **D9** the summary
layer, **D11** reader safety, **D13** folklore, **D14** structure and cross-links, each by a named reviewer
against primary text on disk. **D10** — nine new facts-layer values, all rendered and read standalone; one
relabelled `Rule:` after `check_facts` rejected it as a 9th coaching fact, **relabelled rather than trimmed,
because it genuinely is a rule**. **D12** read-aloud integrity — every changed document rendered through
`md_to_speech` and the new units read as spoken text; three defects were found that way and by no other
means. **D15** — the rendered page, on the built artefact, in a browser.

⚠️ **Explicitly OUT OF SCOPE, and therefore NOT claimed: D5 PROVENANCE.** No external citation was refetched
this round; every URL rests on `project/verification/link_baseline.tsv` as it stood. **No browser other than
headless Chromium was used, so D15 is verified on one engine only. And the standing one: no figure in the §9
penalty table was verified against the feed, because the computation exists nowhere in this repository.**

---

# The critical

```
FINDING   body_contact_and_battles.md §2, "Angling — Legal in Every League", stated the
          CONTACT-side limit only. The phrase "skating lane" appeared NOWHERE in it.
HAZARD    A reader who has correctly established they are in a NON-CHECK league is taught to
          close under control and end the angle with a seal, and is never told that veering
          across at the last instant converts IDENTICAL CONTACT into a body check.
BOOK      hc.txt:6015-6019 — body-checking results "when a player leaves their skating lane to
          make contact"; usah_casebook.txt:18641-18653 Situation 15 — the angler is cleared
          "provided … they simply maintain their skating lane"; iihf_rules_v1.1.txt:7515 —
          "Any MOVE by a Player to step or glide into an opposing Player" (101.1, women's,
          and therefore every British woman at every age).
WHERE IT  §1, 130 lines upstream, framed definitionally as "what a body check IS" — never as a
LIVED     duty on the angler.
```

**Found by a `rules-verifier` repairing a BORROWER** (`mental_game.md:121`, which claimed a category limits
*"the contact you finish it with, not the steering"*), **handed to the owner, closed by a `safety-reviewer`
across four layers, then chased into two more documents.**

⚠️ **THE SHAPE IS THE FINDING: A RULEBOOK SENTENCE SPLIT, WITH THE SAME HALF DROPPED EVERY TIME.**
`forechecking_systems.md` quoted Hockey Canada 7.3's preamble in **three** places — body, Common Mistakes,
Key Takeaway — and in all three carried **only its third limb**, the arm/shoulder/hip one. The route half
existed in that file exactly once, in the **Sources trailer**, which no listener reaches. **Nothing detects a
partial quotation.** `check_facts`, `check_links`, `check_absolutes` and `check_pointers` all passed it.

---

# What the instruments did

| instrument | what happened |
|---|---|
| `check_tables.py` | ⚠️ **could not see a table inside a blockquote** — `parse_tables` required `line.startswith("\|")`. **Fixed this round.** 2 dropped → 3, and the newly visible one is the corpus's own penalty-call table, which `md_to_speech` DOES see and drops. **A listener had never heard any of the seven percentages, and the checker built to report exactly that reported nothing.** |
| `check_absolutes.py` | **refused to certify the caption layer** when `diagrams.json` went stale, exactly as designed — *"EXIT 2 … This is not a pass."* Second round running in which this tool behaved better than its users |
| `check_facts.py` | **rejected a repair as a 9th coaching fact.** The agent relabelled it `Rule:` — which it genuinely was — **rather than trimming the caveat to fit.** The cap worked as a routing signal, not an obstacle |
| `check_caption_negations.py` | cleared a caption repair, and the placement rule it protects held |
| the renderer | ⚠️ **caught three defects no reading found** — a nested blockquote voiced as the literal words *"greater than So treat"*; an unattributed *"seven point three"*; and a new line that, heard after the two above it, **stated a contradiction a reader of the page would not notice** |

---

# The `49f1dc6` shape is not rare

Commit `49f1dc6` exists because a facts line told a listener *never to keep their head up* — a negation
reaching across a non-full-stop separator to swallow the instruction after it. **Three more instances were
found and repaired this round**, in two files:

- `Key: … going in on an angle rather than head-on at the wall **is not** — that one is a safety skill` —
  the elided complement reaches BACKWARDS across a semicolon, which is weaker recovery in speech than print
- *"Which side you take away is your coach's call; **that is not.**"* — ⚠️ **the closing words of a Common
  Mistakes bullet, followed by a 500 ms break and the next item.** Nothing after it to recover from
- a `Never:` drafted with em dashes, caught in the render and rewritten with a full stop

⚠️ **It is a SHAPE, not an incident, and only one of the three was in a caption** — so
`check_caption_negations.py` could not have found the other two. **Prose has no equivalent check.**

---

# Two agents disagreed about CARHA, and both were right

A `rules-verifier` ruled CARHA 49(a)'s *"stands in front of an opponent for the purpose of making contact"*
limb does **not** reach angling — it reaches a player planting themselves to be run into. A
`safety-reviewer` then found that for a deliberate **seal** it does. **Both hold: steering is not the seal.**

They also split on whether to NAME CARHA at all. One declined — `sources/README.md` records it as governing
*"CARHA-affiliated leagues only, and never a general rec-hockey standard."* The other named it **with the
scope in the same sentence, twice**, arguing that declining *"does not prevent the failure the warning guards
against; it just leaves the adult reader with no answer at all"*, and that the document already names CARHA
at eight other sites. ⚠️ **Recorded because the disagreement is the method working, not failing** — and
because the second agent stated it was overruling the first knowingly.

---

# A class no checker in this repository can catch

`mental_game.md:718` stated the manual's cover and credits carry no date — **and gave a reason: *"which were
read as page images because a text search cannot see them."*** ⚠️ **False.** `pdftotext -f 1 -l 2` returns the
cover cleanly.

**The conclusion was right and the stated METHOD was wrong**, which is the more dangerous combination: no
checker examines a method claim, and a reader auditing the disclosure would have been told the pages are
unreadable as text when they are not. The agent HAD rendered them; it then explained **why**, and the
explanation was a guess about the tool that inherited the evidence's credibility.

⚠️ **RULE: state what you did. Do not state why it was necessary unless you tested that too.**

Its sibling, found hours earlier: `sources/README.md` recorded what Fig. 6 **shows** without recording that
the render **had been performed** — so a later reviewer read that entry and still listed the render as
unreached. ⚠️ **Record the ACT, not only the finding.**

---

# The rendered page — what the browser found that neither the reader nor the renderer could

**D15 on the shipping artefact, headless Chrome 152** (the extension refused loopback for the sixth time
today). **No critical.**

⚠️ **THE REVIEWER CAUGHT ITS OWN FALSE PASS, and it is the most useful thing in the report.** Exercising the
theme toggle wrote `localStorage.theme = "dark"`, **which overrides emulated `prefers-color-scheme`** — so
its first contrast sweep ran dark twice and reported *"0 failures, both themes"*. **A false pass of exactly
the kind D15 exists to catch, produced by the reviewer's own instrument.** It rebuilt the harness to clear
`localStorage` before each cell and re-ran. **Screenshots from the contaminated run were named and
disowned.**

**Two coordinator premises refuted:**

1. **The `min-width: 640px` floor does not apply to these diagrams.** `global.css:2187` scopes it to
   `figure.diagram--full`; `forecheck-pinch` and `forecheck-press` are plain `figure.diagram`. Measured live
   at 390: **ten of eleven `.diagram-scroll` elements are `361/361, overflow-x: visible`**. They scale to the
   column and never scroll.
2. **The captions are not long BECAUSE of this round.** Across all 198 captions: median 1,270 chars, mean
   1,423. `forecheck-press` **3,435 — 2nd longest**; `forecheck-pinch` **3,102 — 4th**. ⚠️ **At HEAD they were
   3,367 and 3,034 — already 2nd and 4th.** Round 74 added **+68 each, +2.2%**. In the reviewer's words:
   ***"Blocking the commit for caption bloat would be blocking the wrong change."***

**What IS wrong, and round 74 did not cause it:** the amber band's **first sentence is 155 words** — a
semicolon chain running USA Hockey 604(a), 604(b), Hockey Canada 7.3 and the IIHF category rule in one
breath, more than double any other sentence in the caption. The band is one unbroken
`.warn-inline` of **1,853 characters, 5 sentences, one glyph**. ⚠️ **At 390 the SVG is 309px of a 1,682px
figure — 18% — and the safety band alone runs 836px.** The picture is off-screen before the band begins.

### ⚠️ OPEN — the numeral "three" does counting work the sentence under-delivers on

Seen on the page: the antecedent **is** pinned and a reader does **not** hang — the appositive is a closed
two-item list. ⚠️ **But the enumeration is back / chin / shoulder and the explanation stops after chin, so
the shoulder tip holds the most forgettable slot and is the only one whose WHY the caption never gives.** A
skim yields *"back and chin."*

**Mitigating:** the shoulder tip is still actionable without a mechanism — *"forearm and hip to it"* is the
positive instruction and *"not on the point of your shoulder"* the prohibition, adjacent in the sentence
before. **CONSTRAINT: USA Hockey names no injury for it and none may be invented.** The cheap fixes are to
stop counting, or to lift the shoulder tip out of the triple and leave it on the positive instruction.

### ⚠️ OPEN — the rewritten caption is PUBLISHED ON A PAGE OUTSIDE THE STAGED SET

`forecheck-pinch` renders on **`/systems/game_management/`** as well as `/systems/forechecking_systems/` —
confirmed by grep of `dist`, exactly two pages. ⚠️ **`content/systems/game_management.md` is NOT in this
commit, so nobody reading the diff would know the caption ships there too**, and at 390 its caption-to-SVG
ratio is **4.41×**. The reviewer rendered that page anyway. **A diagram-source change has a blast radius the
diff does not show; grep `dist` for the diagram id before reviewing a caption.**

### Minors recorded, none blocking

**One ⚠️ glyph per 836px band** — a phone reader who scrolls into the middle of the safety instruction sees
amber text and a left rail but no glyph; the rail is the only non-colour cue past the first screen.
**`dist/analytics.js`** ships a GA4 bootstrap into a site whose posture is no third parties — referenced by
zero HTML files and inert, but one meta tag from live; **measured zero off-origin requests across 11 pages.**
**The `.table-scroll` horizontal cue is clear in light and hard to see in dark** — and `figure.diagram--full`
was *deliberately* given an always-drawn scrollbar for exactly this reason, a treatment `.table-scroll` never
got. **The AudioPlayer degrades to a dead `0:00 / 0:00` control with no message** when its source 404s — not
a production defect (the `.m4a` set is gitignored and synced separately) but it is what ships if an S3 sync
ever lags a deploy.

**Verified, independent of the build's own checker:** 6 pages source-to-DOM with every line of ≥6 words
present, **0 missing**; 53 ` ```facts ` fences rendering as panels with **0** `language-facts` or
`<pre><code>`; every table wrapped, keyboard-reachable, scrolling inside its own container; **no page scrolls
horizontally at 320, 390 or 1440 in either theme**; **5,535 internal fragment links across the whole site,
every one resolving** — which settles the `file.md#anchor` / Astro-slug equivalence question corpus-wide;
zero console errors and zero off-origin requests on 11 pages; zero WCAG AA failures after the harness was
fixed.

---

# What this round could not have found

**Every figure in the penalty table is unverifiable from this repository.** No script, no cached JSON, no
stored extraction — `grep` for `2967` / `gamecenter` across `scripts/`, `project/` and `sources/` returns
only prose restatements. Two agents ruled on what those figures can and cannot support; **neither could check
that they are right**, and the residue question the ruling turns on is answerable from the data and
unanswerable from here.

**The route limb was chased into four documents and stops there.** `defending_the_rush.md`,
`neutral_zone_systems.md` and the position files all teach gap and pursuit routes; **whether any teaches a
converging close without the limb is unchecked, and is the obvious next dispatch.**

**USA Hockey's own speed caveat is in neither boards document.** `ibc.txt:1498-1499` — *"The speed at which
the players hit the boards must be managed"* — sits in the same lettered list the corpus quotes twice from.
⚠️ **The corpus now teaches, on USA Hockey's authority, that angling in is a safety skill because a limb meets
the boards instead of your helmet. A reader can take that as licence to arrive faster.** The source supplies
the limit in the next clause and the corpus took the first and not the second. Deliberately not written — the
manual addresses a coach managing a drill, not a player choosing a speed, and transposing it is an editorial
act.

**And the standing one, in a reviewer's own words:** *"that the 604(a) sentence renders perfectly says
nothing whatever about whether Rule 604(a) says what the document says it says."*

# Round 61 — diagrams for the documents that had none, and what "undrawable" actually means

**Started 3 September 2026, immediately after `e015577` was committed and pushed.**

**The owner's standing priority:** *"readability and understandability… lots of diagrams as that helps
readability more than anything else."*

**The target, measured rather than assumed:** after round 60 the corpus held **127 diagrams**, and **12
documents owned none**. ⚠️ **But the count was never the goal — triage put the real surface at FOUR
documents**, because six of the twelve should stay at zero and two were already settled as undrawable.

---

## Dimension coverage — every one of the fifteen, checked or declared

⚠️ **`commit-gate` blocked because this table was absent, and because the record named TWO reviewers when
THREE ran. The third was `diagram-reviewer`, which rendered and LOOKED AT all eight PNGs — and it is the one
that caught the greyscale inversion. Omitting it understated the round's own coverage.**

| Dim | Status |
|---|---|
| **D1** Rules accuracy | ⚠️ **CLOSED BY GATE RE-DERIVATION, NOT BY `rules-verifier` — which did NOT run this round. Read this row as gate-cleared, never as agent-cleared.** Four claims added, all four re-derived from `sources/` by `commit-gate`. `rules_primer.md:290`'s IIHF 81.1 no-race paragraph (present in both IIHF editions) ⚠️ **CORRECTED — this record first said *"`race` appears 3× in each NHL extraction, none in Rule 81"*, and `commit-gate` refuted it: `nhl_rules.txt:8600` is *"If the race for the puck is too close to determine…"*, sitting immediately before 81.2 and therefore INSIDE Rule 81.1. **The content claim survives — the *no-race* paragraph is genuinely IIHF-only — but the grep summary was wrong and would have misled the next round re-deriving from it.**; **USAH 604(a)**; **HC 7.3**; **IIHF 101.1**, all verbatim. |
| **D2** The facts layer | **CHECKED** — 829 blocks / 5,471 facts conform; new Key Takeaway 8 carries both queue bullets |
| **D3** Propagation | **CHECKED** — "never duck" propagated to caption, `Never:` value, Key Takeaway 2, Overview and the `:95` override; layer-tested per chunk |
| **D4** Citations | ⚠️ **CLOSED BY GATE RE-DERIVATION, NOT BY `source-verifier` — which did NOT run this round.** — the new Sources limb (*"Even a light hit from behind could inflict a severe head or neck injury"*) **located in `huh.txt`, `huh_layout.txt` and `ibc.txt`** ⚠️ **(locator corrected: the HUH instance sits under *"2. Playing Heads Up Hockey / Checking from behind"*; §5 is `ibc.txt`'s locator, not HUH's. The corpus's own Sources trailer was right; only this record's shorthand was off.)**, with the provenance split from the Tator finding stated correctly |
| **D5** Provenance | **CHECKED** — every clause in the repaired caption quoted word for word from a named owner |
| **D6** Numeric ownership | **CHECKED** — the "half a practice" figure carries *"coaching estimate rather than a measured share"* into both takeaway and caption; the bare *"fifty feet"* was removed rather than hedged |
| **D7** The cardinal rule | ✅ **CLOSED** — *"'Over' and 'D-to-D' both go behind your own net"* retracted to prohibition + convention |
| **D8** Qualifications travelling | ✅ **CLOSED — and the defect was in the SPECIFICATION**, see the style-guide retraction below |
| **D9** The summary layer | **CHECKED** — new Key Takeaway 8; items renumbered; no document references this file's takeaway numbers |
| **D10** Diagram correctness | ✅ **CLOSED by `diagram-reviewer`**, which rendered and looked at all eight |
| **D11** Reader safety | ✅ **CLOSED — 2 criticals found and repaired**, both re-derived by `commit-gate` per spoken chunk |
| **D12** Read-aloud integrity | **CHECKED** — chunk boundaries read on every repaired caption; one caption outgrew 2,800 chars and its new cut was read |
| **D13** Folklore | **CHECKED** — the style guide's unsourced prevalence claim retracted |
| **D14** Structure and cross-links | **CHECKED** — links exit 0; 50 pages / 10,050 internal links resolve |
| **D15** The rendered site | ✅ **CLOSED — a real browser DID run, after `commit-gate` blocked on C10 and was right that a written declaration satisfies C3 but NOT C10.** ⚠️ **The Chrome extension was blocked again — 6 calls, 4 tools, 3 origins — and the agent established something round 60 got WRONG: the block hit `example.com` too, so it is the categorisation service failing closed against EVERYTHING, not a judgement about this site.** **It then drove real headless Chrome over CDP**, the same browser `build-og.mjs` uses. ⚠️ **`Emulation.setDeviceMetricsOverride` WORKED where `resize_window` does not — `window.innerWidth` correct on all 44 page-loads, real breakpoints firing, NO IFRAME, so round 60's same-origin-iframe artefact did not recur.** **11 viewports × 2 themes × 4 pages, plus a 20 px sweep of the 1000–1500 band that had never been checked.** **6 majors and 6 minors found — all filed.** ⚠️ **PREVIOUS STATUS, SUPERSEDED: OPEN. No live browser this round.** `diagram-reviewer` read **Chrome-rendered PNGs** — which is how the greyscale inversion was caught — **but nobody has seen the rendered page.** Eight new diagrams, three new modules and a restructured table ship unseen. **Declared, not silent.** |

⚠️ **`commit-gate` BLOCKED THIS ROUND ONCE AND WAS RIGHT.** The blocker was **C11 in its purest form: the
repair of one finding introduced another.** `reading_ice_hockey_diagrams.md` — **the key document, whose
whole job is to explain the pictures** — said the risk map uses *"four strengths of the same red."*
⚠️ **Counted off the shipped SVG: four red fills at THREE alphas (0.09, 0.15×2, 0.21) plus one blue.**
**The two identical 0.15s ARE the picture's teaching** — the module says so twice and the `risk_management`
body staged in the same commit says *"the middle of the neutral zone is shaded exactly as heavily as your
own end."* ⚠️ **Telling the key's reader to expect four distinguishable reds invites exactly the ranking the
owner document had just been edited to forbid.** **That text was written AFTER both reviewers finished and
no reviewer read it.**

---

## The four, and what each returned

### `getting_started.md` — ✅ CORRECT ANSWER WAS TO BUILD NOTHING

**Verdict: BORROW. No module created, nothing to register.**

⚠️ **The agent inverted my hypothesis.** I briefed it that a borrowed caption might be pitched at too
experienced a reader, and that an owned diagram would then be justified. **It found the opposite:**
`rink-map-full`'s caption already reads *"this is the picture to come back to when you hear 'the half-wall'
or 'the point' and you are not sure where that is"*, and `rink-map-end-zone` carries its own convention
hedge. **An owned re-caption would have been WORSE.**

**Its stronger reason, which I had not considered:** the document has **almost no spatial prose to hang a
picture on**. All 670 lines are registration, insurance, governance, tiers, etiquette and equipment.
⚠️ **A diagram with no section to agree with is the style guide's most common diagram defect in its purest
form.**

**Embedded ONE existing map (`rink-map-end-zone`) and added the notation key to the Related line** ⚠️ **(this record first said "two maps"; the diff embeds one figure — the full-sheet map was dropped, which is the point of the paragraph below)** — closing part of the
"key linked from 1 of ~18 diagram-carrying documents" gap.

⚠️ **AND IT FOUND A NEW CLASS OF BLOCKER.** §1.4 tells a beginner *"the rink you play on is probably not
200 by 85 feet."* The teaching need is a **width comparison** — NHL 85 ft against IIHF 26–30 m — and **no
such diagram exists in the corpus.** ⚠️ **It cannot be drawn: `rink.json` FIXES the sheet at 200×85 as the
NHL book.** **This is the first case where the RENDERER blocks a diagram rather than the subject matter** —
a different class from `skating.md`/`puck_handling.md`, and unlike those, **fixable.**

### `on_ice_communication.md` — one drawn, two borrowed, four declined

⚠️ **MY BRIEF'S PREMISE WAS FALSE AND THE CORPUS ALREADY KNEW IT.** I wrote that *"a diagram can show what
the caller can see and the receiver cannot."* **The notation has NO FACING, NO HEAD, NO SIGHTLINE** — both
published keys draw a player as a shape with no front and no back. ⚠️ **A blind-side polygon or an eye
glyph would have been exactly the defect that `scanning_and_anticipation.mjs`'s header was written to
prevent.** What is drawable is the **arrangement**, and the caption says in terms that *"cannot see him"*
rests on direction of travel and is **not established by the drawing.**

**And my other warning was too small:** I flagged that `breakouts.md` owns several named calls. **The
document is an index of ~50 calls and essentially every play it names is already drawn by its owner.
Exactly one thing was unowned.**

**Drew `the-call-and-who-can-see-it`** — a defensive-zone retrieval with the forechecker on the retriever's
line of travel. ⚠️ **Found by RENDERING, not arithmetic: the forechecker was first placed on the wall,
where the dot product said "behind" (−11.4) but the EYE said "angling him into the corner."** Moved to dot
−19.9, on the line extended backwards. **Recorded in the module rather than silently fixed.**

**Declined `breakout-five-roles` for a precise reason worth keeping:** its caption already says *"No
forecheck is drawn: this is the shape, not a play against anybody"* — ⚠️ **and the forechecker in the blind
side is precisely what this document needed.** Declined `the-trapezoid` because **its caption re-states the
four-book comparison the surrounding paragraph just made, and captions are VOICED — a listener would hear
the trapezoid rules twice running.**

### `practice_and_development.md` — four drawn, and the corpus's FIRST drill diagrams

⚠️ **The agent narrowed my premise before acting, and it was right to.** *"Drills are rink shapes"* is
**partly** true: the document's long middle is **evidence about learning** — 10,000 hours, the 2019
replication, variance meta-analyses, contextual interference, the testing effect — and ⚠️ **a rink cannot
say anything about an effect size.** Its off-ice sections are a kitchen floor, a shooting pad, a slide
board. **The falling technique is body mechanics, which is exactly why `skating.md` correctly owns zero.**

**Exactly two claims were genuinely spatial, and both are ones the prose can only ASSERT:**
*"a passive defender who is allowed to take away **one** option is enough to turn an execution drill into a
decision drill"* — ⚠️ **a difference of exactly one glyph** — and *"shrink the space and cut the numbers."*
**Drawn as two PAIRS**, the second of each differing from the first by one deliberate change. ⚠️ **In the
decision frame the routes are REMOVED ENTIRELY, and the caption says that IS the teaching: the answer has
left the picture.**

**Neither small-area caption states a touch ratio** — the document labels the several-fold figure a
coaching estimate with none found counted, **so the pictures offer the mechanism, not the measurement.**

#### The notation decisions, taken BEFORE drawing as the style guide requires

- ⚠️ **NO COACH IS DRAWN, because the collision is real: a circled `C` is the HEO sheet's COACH and this
  corpus's CENTRE — 37 glyphs of it.** The section's *"the spot the coach is standing"* is carried by a
  teammate target and the caption instead. **No glyph in the module is labelled `C`.**
- **No pylon**, though `X` is a pylon in both keys and the renderer supports it. ⚠️ **A cone asserts a
  particular drill design that nothing in the document specifies.**
- ⚠️ **NO SHOT AT A GOALTENDER ANYWHERE IN THE FILE.** The document's one hard safety override is a
  four-book rule-scope argument — a *may*, a *shall* limited to U13 and below, three books with no
  mask-specific stoppage. **None of that fits in a caption, and a practice shot drawn with a SHORTENED
  version of that warning beside it would be worse than no picture at all.** **The rep ends in open ice.**

**No new collision between the published sheet and the corpus's notation** beyond the `Ⓒ` one already
recorded.

#### ⚠️ Two defects found by RENDERING that the arithmetic could not see

**A net-front teammate at `(72, -6)` renders at the TOP OF THE FAR FACEOFF CIRCLE** — the caption said
*"driving the net"* and the picture showed the slot. **And a 14.4 ft `pressure` route renders on a full
sheet as a stub with two bars that does not read as a route at all.** ⚠️ **Both passed every coordinate
check. This is the third time this session a diagram defect was visible only to the eye.**

---

## ⚠️ The finding that outranks the diagrams: a speech defect hidden by a different speech defect

**`getting_started.md:533`, the 12-row *"If you are in… | Start here"* ROUTING TABLE — the beginner's answer
to "where do I actually begin" — was DROPPED from the audio entirely.** Five cells over the 200-char limit,
worst at 334. **A listener got *"A detailed table appears here in the written version"* and nothing else.**

⚠️ **The repair could NOT be "shorten the cells", because every long cell was long BECAUSE it carried a
hedge, a disclaimer or an address** — Hockey Canada's *"not necessarily conclusive of where a player is
eligible to play"*, the 30 June 2026 IHUK transition, England Ice Hockey's postal address. **Trimming would
have traded a listenability defect for an accuracy one, which this project treats as strictly worse.**
**Repaired by making the table pure routing and moving every qualification into prose beneath it that the
renderer voices. Nothing was lost.** ⚠️ **Corpus totals: 13 dropped → 11, 33 read aloud → 35.**

### ⚠️ AND THAT REPAIR EXPOSED A RENDERER GAP NOBODY COULD HAVE FOUND ANY OTHER WAY

**Making the table audible put the corpus's ONLY email address in front of the renderer for the first
time. `md_to_speech` HAS NO RULE FOR `@`** — verified independently by the coordinator, not taken from the
report. It reached the SSML raw; `find_residue` reported `COMMERCIAL AT`. **A listener would have heard
"info-englandicehockey.com".**

⚠️ **THE GENERAL LESSON: a defect in the speech layer was invisible because a DIFFERENT defect was keeping
the text out of the speech layer. Repairing one exposed the other.** **There are 11 dropped tables left,
and each is a region of the corpus the renderer has never been asked to read.**

**The agent did the right thing twice:** it did not patch `scripts/` (coordinator-owned), and it rephrased
losslessly rather than leaving a known-bad string in place.

---

## The risk-map repairs — and a fix PROVED impossible rather than attempted

**MAJOR 1, the count: the PICTURE changed, not the words.** `OPP_A` and its route deleted, leaving 2-on-2
and 2-on-1 as the section, its caption and its facts block all say. ⚠️ **The alternative was weighed and
rejected on the hockey: *"a carrier who beats a pinch IS the rush, so he cannot be excused from the count
to make three glyphs add up to two."*** **The deleted forward and its arrival arithmetic are recorded in
the module rather than quietly dropped**, and the file's narrowest arrival margin went from **1.82 ft to
12.93 ft of headroom.**

**MAJOR 2, the greyscale inversion: ⚠️ THE ALPHAS CANNOT BE FIXED, AND THE AGENT PROVED IT RATHER THAN
TRYING.** Over white, red at alpha *a* lands at `255 − 197.7a` and the blue at `255 − 177.1a`, **so fitting
Moderate between High and the blue Low needs an alpha inside 0.125–0.15 — five grades inside a 30-level
band with three of them within five levels.** ⚠️ **No greyscale reader can rank that however it is tuned.**
The arithmetic and the samples now sit above the alpha constants.

⚠️ **AND THE CAPTION HAD MISTRANSCRIBED ITS OWNER.** It said *"take the order of the **shades**"*; the owner
at `risk_management.md:107` says *"take the order of the **rows**"*. **The instruction to read the picture
was invented by the caption.** Now: *"take the order of these five regions… from the words, though, and not
by ranking the tints against each other."*

**MAJOR 3:** the ordinal-tint convention added to `reading_ice_hockey_diagrams.md` as a fourth point, with
a Common Mistake — *"Ranking regions by how dark they look"* — and a Key Takeaway extension.

### Two things the brief did not anticipate

⚠️ **Moving the centre to the `behind-net` anchor fixed something WORSE than the 3-ft error I briefed: at
x 92 his 3.875 ft of ink ran 88.1–95.9, so THE GOAL LINE CUT THROUGH THE GLYPH** — on the one picture whose
entire difference from its pair is **whether he is below that line.**

⚠️ **REFINING `boardArc` MOVES A ZONE LABEL.** `lib/rink.mjs` places a zone label at the polygon's **vertex
mean**, not its area centroid — **so label position is a function of how densely the polygon is sampled.**
Stepping the arc at 1 ft instead of 4 moved `their end` from x 84.11 to 85.43. **Both fit, checked** — but
the coupling is now written down in both places. ⚠️ **And the corner gap was real but a THIRD of the
briefed size: 1.02 ft, not ~3 ft, and only the last of seven segments was bad.**

### Reportable, outside the agent's files

- ⚠️ **`lib/rink.mjs`: NOTHING CHECKS A ZONE LABEL'S RENDERED WIDTH AGAINST ITS OWN POLYGON.** That is how
  *"your own slot"* came to print across the crease. **`check_zones` cannot see it, and the label placer
  never sees zone labels at all.**
- **`rink_map_and_glossary.mjs:71` still holds the 4 ft `boardArc`.** Its zones carry `stroke:'none'`, so
  **the fill still stops up to 1.02 ft short in each corner with no visible symptom.** Same defect,
  invisible.

## ⚠️ MY OWN CENSUS WAS WRONG IN BOTH DIRECTIONS — and the reason generalises

**Chasing the ducking limb across the corpus, I grepped captions for *"back to the boards"* and produced
four suspects. The agent sent to fix them refuted three and found four I had missed.**

| id | my census | verdict |
|---|---|---|
| `forecheck-212` | flagged | ⚠️ **false positive — CHECKER-addressed** |
| `forecheck-212-stacked` | flagged | ⚠️ **false positive — CHECKER-addressed** |
| `show-one-shoulder-open-the-other` | flagged | ⚠️ **false positive — tactical idiom, no contact drawn** |
| `entry-delay-curl` | flagged | ✅ **TRUE POSITIVE — repaired** |
| `forecheck-pinch` | **missed** | ⚠️ **major, reported — see below** |
| `forecheck-122`, `forecheck-131`, `dump-cross-corner` | **missed** | correct as they stand |

⚠️ **THE DEFECT IN MY METHOD, in the agent's words: *"you were matching the string 'back to the boards',
which selects for captions describing THE OPPONENT'S back."*** In those three the reader is **the checker**.
**Appending "and never duck" would attach a RECEIVING-posture absolute to the player DELIVERING the hit** —
noise, in the two captions already carrying the most safety text in the file.

⚠️ **The right selector is not a string at all: does THIS PICTURE put the READER in a receiving position?
That cannot be grepped. It has to be read.** **This is the fourth bad probe of the session, and the first
where the probe found real hits AND real noise in the same run.**

### The true positive, and why it was dangerous

**`entry-delay-curl` said *"curl away from the wall, and never take contact with your back to the boards"*
— voiced ALONE, chunk 035, 700 ms of silence either side.** ⚠️ **A reader tight to the wall hears TWO
PROHIBITIONS AND NO PERMITTED ALTERNATIVE — and the single move satisfying both is turning away INTO the
boards, head first, chin dropping as the wall arrives. That is the cervical-flexion mechanism, and the
section names it in terms.**

**Repaired with every clause quoted word for word from an owner** — the hit-from-behind sentence, the
cervical-spine sentence, *"if you cannot get off the boards take the contact rather than turning away into
them"*, and *"never duck"*. ⚠️ **The two limbs stated SEPARATELY with separate mechanisms, and the
walking-speed finding deliberately NOT carried**, because it belongs to the head-down collision only.
**Length checked before and after: 1,114 → 1,534 against the 2,800 cap; still one unsplit chunk.**

⚠️ **And it declined the level caveat ON PURPOSE, correctly:** `body_contact_and_battles.md:649` says its
receiving section is to be read *"whatever league you play in — unexpected contact happens in non-check
hockey too"*, **so scoping it to checking leagues would tell a non-check reader the posture is not theirs.**

### ⚠️ THE MAJOR IT FOUND AND REFUSED TO FIX — the finding is about a DOCUMENT, not a caption

**`forecheck-pinch` instructs the reader to arrive at the boards** — *"if you can't arrive on contact,
don't go"* — **and its 673-character safety block is entirely about DELIVERING contact. No receiving
posture at all.**

⚠️ **It did not fix it, and it was right: `content/systems/forechecking_systems.md` carries NO
boards-posture limb ANYWHERE** — grepped for all five owner phrasings, **zero hits.** *"Adding one to the
caption would put a claim in the extraction layer that its owning section does not make, and would be an
agent inventing corpus policy in a build source."*

⚠️ **So the gap is a whole document whose subject is arriving at pucks in corners and which never tells the
reader how to take the contact.** **`zone_entries.md` gave its caption that limb; `forechecking_systems.md`
has nothing to give.** **→ NEW PLAN ROW, and it needs the section reviewed, not the captions.**

⚠️ **Its own closing warning is the sharpest thing in the report: *"Where the owner is silent, I concluded
'no change' — so if that document's omission IS the defect, my method REPRODUCES it rather than finding
it."***

## ⚠️ AN AGENT REFUSED AN INSTRUCTION IN MY BRIEF, AND THE DEFECT WAS IN THE SPECIFICATION

**I told the `getting_started.md` agent to hedge the trapezoid using `project/content_style_guide.md:84`'s
sentence: *"Most rec, beer-league and youth associations do not use it."*** ⚠️ **It declined, and cited the
owner against me.**

`goaltender.md:1368` — the owner — says in terms: *"how much rec, beer-league and youth hockey that adds up
to is a question about **leagues** rather than about **books**, **which this document has no count for**."*
`on_ice_communication.md:417` agrees. ⚠️ **So the STYLE GUIDE — the file `CLAUDE.md` calls "the
specification, read in full" — was carrying a flat, unsourced prevalence claim, which is the exact failure
that file exists to forbid.** **Had the agent obeyed, an unsourced quantifier would have gone into the
corpus's ENTRY-POINT document, contradicting its own owner.**

**Retracted in the style guide, with the safe formulation named:** the corpus CAN support a claim about
**markings** — `rink_map_and_glossary.md:115` *"Many rec rinks have no trapezoid at all"*, `uk_rules.md:196`
*"so many British rinks have no trapezoid painted on them"*. ⚠️ **Say what is PAINTED, not what proportion
of associations do what.**

⚠️ **This is the round's best evidence for the standing instruction "refute the brief before acting on it."
The brief was not merely wrong about a line number — it was quoting the governing document, and the
governing document was wrong.**

### The other `getting_started` outcomes

**Dropped `rink-map-full`, kept `rink-map-end-zone`** — a judgement I left open, decided on an argument I
had not thought of: ⚠️ **the full-sheet picture's `describe` is *"The full 200 by 85 foot rink"*, and it sat
under a heading reading *"The rink you play on is probably NOT 200 by 85 feet."* The picture argued against
its own section.** The end-zone map is earned — the sentence above it names the corners, the half-wall and
the slot, and the picture labels all three.

**Self-narration gone from the SPOKEN text** (verified at zero occurrences), framing paragraph **200 → 121
words**, ⚠️ **every subject-level hedge intact** — *"the distances are the NHL's"*, *"convention rather than
rulebook"*, *"many of the areas they label are not painted on the ice at all"*. **The literal email address
is restored**, now that the renderer can say `@`.

⚠️ **It also declined to restate the England/Wales trapezoid-enforcement position**, because it is already
stated four paragraphs up **with** its EIH R&R quote, edition qualifier and scope — *"a truncated
restatement would have shed those"*, which is D8, correctly applied unprompted.

## The `practice_and_development` repairs — fixed in WORDS, not ink

⚠️ **The count defect was repaired in the captions rather than by adding a goaltender to frame one, because
that would have falsified that frame's own sentence *"There is no opponent anywhere"* — which the agent
verified is currently true of what it draws.** Both captions now say **six skaters**; frame two names the
goaltender as *"a seventh person"* who *"was not in the queue in the last picture."*

**The `team:'opp'` flag was added to both goaltenders with a comment recording that it CHANGES NO INK** —
`rink.mjs:1636` draws a `G` as a bare letter with no team branch — ⚠️ **so the words are the only place
whose goaltender it is can be settled at all.**

**And the level caveat now has a stated test, which is the durable part:** ⚠️ **THE ROUTE, NOT THE GLYPH.**
A route arriving *on a person* needs the caveat; a carry to open ice and a pass to a teammate do not. **Only
one frame in the file qualifies.**

**The dropped safety bullet is restored and propagated** — *"keep your head up, because a practice has loose
pucks flying and a line against the boards is exactly where they arrive"* now leads that caption, **and a
new Key Takeaway carries both bullets**, so *"head up / loose pucks"* exists in **two spoken layers where it
existed in one.**

## ⚠️ SIX MAJORS — and THREE are modules asserting something FALSE ABOUT THEMSELVES

**`content-reviewer` found no critical and six majors. It found three of them by COUNTING THE SHIPPED SVG
AGAINST THE PROSE** — glyph labels read out of `site/public/diagrams/*.svg`, not out of the source.

**M1 — the pinch pair draws THREE opposition forwards; the caption, the prose and the facts block all say
TWO.** `pinch-centre-high.svg` draws `G | A1 | A2 | A3 | D | D | C`. ⚠️ **The module's own `describe`
admits it — *"two more forwards on the lower, weak side"* — while the caption says *"the worst the failure
can produce is two of their forwards against two of his teammates."*** **A reader who counts the picture
gets 3-on-2, and 3-on-1 in the deep frame.** ⚠️ **This is the ONE pair in the change set whose entire
teaching IS a count, and the caption invites the reader to run it.** Caption and prose agree with each
other, **so the PICTURE is what changes.**

**M2 — *"the same six players"* is six in one frame and SEVEN in the other.**
`practice-the-line-and-one-rep.svg` → `F|F|F|F|F|F`, **no goaltender**.
`practice-small-area-in-one-zone.svg` → `G|F|F|F|F|F|F`. ⚠️ **The module header asserts *"SIX PLAYERS IN
BOTH, so the comparison is of arrangements and not of group sizes"* — false of what it wrote** — and **the
caption tells the reader to count the picture.**

**M3 — a new absolute the document denies three times.** `on_ice_communication.md:62` says *"**the two
players who can see** that forechecker are the goaltender and the defence partner."* ⚠️ **Four lines above,
`:58`: *"Everyone else can see it."*** Key Takeaway 1 says the same; `:372` names a **different** pair with
no goaltender; the Overview teaches *"whoever can see it makes the call"* — an open set. ⚠️ **And a second
defect in the same sentence: it is a standalone voiced `<p>`, and *"that forechecker"* has NO ANTECEDENT in
the preceding paragraph. A listener gets a demonstrative pointing at nothing.**

**M4 — the cardinal rule, contradicted by the caption it introduces.** `:133` states *"'Over' and 'D-to-D'
**both go behind your own net**"*. ⚠️ **The same document hedges it twice** (*"typically"*, *"usually"*),
**and the borrowed caption it introduces says outright: *"What varies between teams is the ROUTE rather
than the prohibition… ask your coach which yours uses."*** **A coaching choice stated as law, thirty
rendered lines above the caption that labels it a choice.**

**M5 — the lead-in describes a picture that is not the picture.** `:218` promises *"the far post and the
front of the net"*. ⚠️ **The diagram draws *"the back door"* and *"sneaking in high"* inside a polygon
labelled *the high slot*** — and its own caption treats far post and net front as **ONE** place. **The
style guide's "commonest diagram defect", committed by the sentence introducing the diagram.**

**M6 — the pair disagrees about whose goaltender it is.** One caption: *"the only opponent drawn is the
goaltender."* The other's describe: *"**your** goaltender is in the crease."* ⚠️ **Both specs omit
`team: 'opp'`, so by the module's own convention it is the reader's own — and `rink.mjs` renders a `G` with
no team branch at all, so THE PICTURE CANNOT SETTLE IT EITHER WAY.** Two frames of a pair billed as *"the
same instant, exactly one thing changed"* saying opposite things, both in voiced layers.

### ⚠️ THE NEXT ROUND'S SCOPE, NAMED BY THE AGENT THAT FOUND THE PATTERN

> ***"Three of my six Majors are things the modules' own headers assert about themselves and got wrong."***

⚠️ **NOTHING IN THE REPOSITORY CHECKS A MODULE'S SELF-DESCRIPTION AGAINST ITS OWN OUTPUT.** Proposed
census: extract every self-describing assertion in `site/src/diagrams/*.mjs` — *"N players"*, *"the same X
in both"*, *"labelled Y"*, *"no Z is drawn"* — and test each against the **built SVG**. ⚠️ **`check_absolutes`
scanned all 270 caption and describe units this round and reported clean, because it is not looking for
this.** **~127 diagrams have never been tested this way.**

## ⚠️ CRITICAL — the boards-posture caption that forbids the turned back and says nothing about ducking

**`the-call-and-who-can-see-it`, embedded at `on_ice_communication.md:64`.** The caption carries the
corpus's boards-posture block **with one half removed**: it forbids taking contact with your back to the
boards, and **says nothing about ducking.**

⚠️ **The census is what makes this a critical rather than a nit. FOURTEEN captions in the corpus carry this
block. THIRTEEN say "never duck". This is the only one that does not.**

⚠️ **And the picture it is attached to is a defenceman skating into his own corner for a LOOSE PUCK with a
forechecker measured onto his back** — the scenario Hockey Canada's guidance names as *"a player along the
boards, with their head down looking for the puck or 'digging the puck out'"*. **A listener told to keep
his back off the wall, and not told to keep his chin up as he digs, does the thing the corpus elsewhere
says can break your neck at walking speed.**

**Ducking is an offence as well as a mechanism, and the books diverge:** **Hockey Canada 8.7**
(`hc.txt:7096-7098`) is unconditional — *"Players may not crouch down to avoid being bodychecked."*
**IIHF 44.1** (`iihf_rules_2026-27.txt:4079`) is conditional — *"…and as a result, causes an opponent to
tumble over them."*

### ⚠️ ONE LIMB OF THE REPORT WAS WRONG, AND CHECKING IT CHANGED THE FIX

**`safety-reviewer` reported the document carries no *"duck"* anywhere. IT DOES** —
`on_ice_communication.md:101`, in the ***"heads"*** entry: *"it is never an instruction to duck into
contact near the boards. **'Heads Up, Don't Duck' governs everything involving the wall**… ducking a
flying puck in open ice is sensible; ducking a checker at the wall is how spinal injuries happen."*

⚠️ **So the defect is NOT "the rule is absent from the document." It is that the rule lives in a DIFFERENT
ENTRY from the caption that needs it** — and **the layer test settles it, which a document grep could not:**

| chunk | carries the man-on caption | carries the ducking rule |
|---|---|---|
| **5** | **yes** | ⚠️ **NO** |
| 8 | yes | yes |

⚠️ **A listener hearing chunk 5 gets the boards instruction with the ducking half missing.** The `Never:`
facts value at `:81` omits it, and **Key Takeaway 2 omits it** — verified individually, not grepped.

**Fix at four sites, using the corpus's settled form from `scanning_and_anticipation.mjs`:** *"Never take
that contact with your back to the boards, **and never duck**."*

⚠️ **The general point: a reviewer's report is a claim, not evidence — the same rule this project applies
to briefs. Had I acted on "the document has no duck", I would have written a rule the document already
states into a fourth place, and never found that the real defect is which CHUNK it lands in.**

## ⚠️ I RACED MY OWN REVIEWER, AND IT CAUGHT ME

**`safety-reviewer` reported, against its own run:**

> ⚠️ ***"`site/src/data/diagrams.json` was rebuilt by another process while I was reviewing — it did not
> contain the eight new ids when I began and did contain them 20 minutes later, with no edit of mine…
> My first `check_absolutes` observation and my first render were both against a tree that no longer
> exists."***

⚠️ **That other process was ME.** I dispatched `safety-reviewer` and `content-reviewer` **before**
`build-diagrams.mjs` finished, reasoning that they "did not need the build product". **They did not need
it — but they READ it**, and I changed it underneath them.

⚠️ **This is round 59's lesson in a new costume.** The rule I applied was *"change a tool between waves,
never during one."* **The rule I needed was that a BUILD PRODUCT is shared state exactly as a tool is.**
`diagrams.json` is generated, tracked, and read by three checkers — **rebuilding it mid-review is the same
act as editing a script mid-wave.**

**Nothing in that report rests on the stale state** — the agent diffed the built captions against the
`.mjs` sources at the end and said so. ⚠️ **But it could not have known that when it started, and its own
sentence is the right one to keep: *"any other agent running a checker in this window got an answer about
a tree that was already gone."*** **Two agents were in that window.**

**The rule going forward: the diagram build is a WAVE BOUNDARY, not a background task.**

## `project/content_review_and_roadmap.md` — a dated record CORRECTED IN PLACE, not rewritten

⚠️ **Staged, and named here because `commit-gate` found it staged and unnamed.**

**Line 61 was wrong TWICE OVER:** *"Note the trapezoid is NHL-specific — the IIHF removed it in 2014, and
most rec leagues don't use it."*

- ⚠️ **The IIHF did NOT remove it. It is live at IIHF Rules 1.8 and 27.7**, read directly in the rulebook,
  and both `goaltender.md` and `on_ice_communication.md` carry it.
- **The second half is the same unsourced prevalence form retracted from `content_style_guide.md` the same
  day**, after an agent declined an instruction to copy it into `content/`.

⚠️ **CORRECTED IN PLACE, WITH THE WRONG SENTENCE LEFT STANDING ABOVE THE CORRECTION.** It is a **dated
review record (27 July 2026)**, and **the claim as made is part of the defect record.** ⚠️ **Annotate a
record; never rewrite one** — the same reason `project/reviews/round_22_british_trapezoid.md:54` carries
the identical string and **must not be touched**, and the same reason `OPEN_ITEMS.md`'s *"Run at the time of
writing: 112 diagrams"* was left alone in round 60. **A record rewritten to look correct stops being
evidence.**

## ⚠️ THE GREYSCALE INVERSION IS CLOSED — and both measurements were right about different things

**`diagram-reviewer` reported the risk map's ordinal gradient INVERTS in greyscale. `site-reviewer`,
measuring composited luminance in a real browser, reports the reds DO NOT invert:**

```
your slot   0.21 -> Y 217
own zone    0.15 -> Y 228   \  identical, and that equality IS the teaching
the middle  0.15 -> Y 228   /
their end   blue 0.14 -> Y 230
their b/l   0.09 -> Y 238
```

⚠️ **BOTH ARE CORRECT AND THEY ARE NOT THE SAME CLAIM.** The **reds** run 217 → 228 → 238, **in order.**
What is true is that **the BLUE (230) prints darker than the FAINTEST RED (238)**, and sits within 2/255 of
the medium reds. ⚠️ **The first report framed a red-versus-blue collision as a red-ordering inversion.**

⚠️ **AND THE REPAIR ALREADY COVERS IT, UNPROMPTED.** The rewritten caption says: *"a light blue prints
darker than the faintest red in greyscale, on a photocopy or on e-ink… The shading is a reminder of the
ranking and not the statement of it."* **Verified against the built SVG. The finding is closed.**

⚠️ **The lesson is not that a reviewer was wrong. It is that a luma claim measured off a PNG crop and a luma
claim measured off a composited browser render are different measurements, and the second is the one the
reader gets.**

**Also confirmed clean in the browser, having been doubted:** the three red strengths **are** visibly
distinct in both themes; the two deliberately-equal reds **do** read as equal; safety callouts carry three
redundant cues including a non-colour one at 5.71:1 / 8.29:1; **zero console errors and zero off-origin
requests on all four pages**; deep links land at exactly `--header-h` + 1rem; no body-level horizontal
scroll at any width down to 320 px.

## ⚠️ THE AMBER SAFETY BAND — I MISDIAGNOSED IT, AND THE WRONG DIAGNOSIS WOULD HAVE DEFERRED THE DEFECT

**I filed it as a PLUGIN bug: *"⚠️ usually ends a paragraph, so the new captions expose it for the first
time."*** ⚠️ **`commit-gate` refuted that off the tree: at HEAD, `forecheck-122` and `forecheck-131` ALREADY
amber 1,115 chars each, and `remark-corpus.mjs:337` documents run-to-end-of-caption as DELIBERATE.**
**The mechanism is old. The CONTENT is new.**

⚠️ **And round 58 had already verified the invariant and written it down** (`OPEN_ITEMS.md:5364`):
*"in all 17 the run is safety or rules-consequence content through to the end, and **no tactical prose is
ambered anywhere**."* ⚠️ **This commit was the first to break it, four times.**

⚠️ **Had I shipped my diagnosis, the fix would have been filed against an UNSTAGED plugin — deferring four
live breaches while pointing at the wrong file.** **The real cause was caption text in files already
staged, so the repair was confined to this commit.**

| caption | amber before | after |
|---|---|---|
| `the-risk-map` | **1,243** | **0** — the run was honest limits and legibility caveats; **no hazard anywhere, so the glyph went** |
| `pinch-centre-high` / `-below-the-goal-line` | 954 each | **254** |
| `practice-small-area-in-one-zone` | 1,416 | **276** |
| `practice-the-line-and-one-rep` | 669 | **359** |

⚠️ **Nothing was cut — verified by a sentence-multiset diff of old against new, glyph normalised away.**
**Two judgements the agent flagged rather than buried:** moving the glyph alone in the small-area caption
would have **stranded a demonstrative *"he"* 1,100 chars from the route it refers to**, so a sentence PAIR
moved and `"One of them"` became `"One of the six"` because *"them"* would otherwise have picked up
*small-area games*; and in `practice-the-line-and-one-rep` the next-picture pointer **is no longer last**,
**a real cost, stated for me to overrule.**

## ⚠️ A FALSE PROHIBITION IN FOUR VOICED CAPTIONS ACROSS TWO FILES

**Shipped:** *"allowing bodychecking in women's hockey **only** where there is a clear intention of playing
the puck."*
**IIHF 101.1** (`sources/iihf_rules.txt:7491`): *"…allowed when there is a clear intention of playing the
puck **or attempting to 'gain possession' of the puck** with the exception from the situation described in
this rule."*

⚠️ **WITH "ONLY" IN FRONT, THIS IS NOT A TRUNCATION — IT IS A FALSE PROHIBITION. It tells a woman on the
IIHF book that a check made while going for a puck she does not yet have is ILLEGAL. It is legal.**

⚠️ **I briefed it as "roughly four words." It was 18** — both limbs *and* the exception qualifier — **and the
repairing agent then found the same half-rule in THREE MORE captions in `forechecking_systems.mjs`.**
⚠️ **`:563` is the sharpest: it discusses the boards limb *"even where possession is the sole object"*, so
it is AWARE of the possession concept and still truncates the permission.**

⚠️ **AND THE PROVENANCE COMMENT WAS THE SOURCE.** `on_ice_communication.mjs:117` quoted the rule stopping at
*"playing the puck"* — **the caption was written off the comment.** **A truncated quotation in a provenance
note is how a half-rule reaches a listener**, and it is now the full sentence with the history recorded.

## ⚠️ THE STRUCTURAL CAUSE OF THE HALF-RULE, AND IT IS THE CAPS

**Found by the agent repairing the facts layer, and it explains the whole family:**

> ⚠️ ***"Three of the four blocks are at `HARD_MAX = 11` facts, so 'split rather than trim' was
> STRUCTURALLY UNAVAILABLE — `check_facts.py` fails at 12. Neighbouring `Rule:` values have 4–29 chars of
> headroom, so nothing could be re-homed either… This is the structural cause of the whole defect family:
> the caps leave no room, so an editor trims, and the limb is what gets trimmed."***

⚠️ **The caps exist to keep a spoken value short enough to be heard alone. They also make the possession
limb the cheapest thing in the sentence to drop — and dropping it inverts the rule.** **The agent paid for
both limbs by REMOVING THE FABRICATED QUOTATION MARKS and using the corpus's own compact construction,
which is the right trade: a shorter honest paraphrase beats a longer false quotation.**

**TEN sites, and the spread is a single chain:**

```
a provenance COMMENT quoted the rule stopping at "playing the puck"
  -> the caption was written off the comment          on_ice_communication.mjs
  -> three sibling captions                            forechecking_systems.mjs :304 :420 :563
  -> four facts values, each VOICED ALONE              body_contact_and_battles :152 · forechecking :502
                                                       offensive_zone_play :792 · defending_the_rush :353
  -> a Sources trailer claiming to quote it "in full"  defensive_zone_coverage :782
  -> a rule-comparison table cell                      rules_primer :834
  -> Common Mistakes AND Key Takeaways                 offensive_zone_play :1000 :1063
```

⚠️ **The last two are round 10's failure mode verbatim: body ✓, facts ✓, Sources trailer ✓, SUMMARY LAYER ✗.**
**Every correction reached the body and stopped.**

⚠️ **AND THE INDEX HELD THE OLD TEXT OF A REPAIRED FILE.** `rules_primer.md` was staged BEFORE its repair, so
`git show :content/foundation/rules_primer.md` still returned the false prohibition while the working tree
was clean. ⚠️ **Committing that index would have SHIPPED THE DEFECT with every checker passing**, because
`check_facts` and `check_links` read the WORKING TREE and the commit ships the INDEX. **Caught by the
repairing agent, not by any tool. Everything re-staged after the last edit.**

⚠️ **AND FOUR ONE-LIMB CAPTIONS WERE LIVE ON THE SITE THE WHOLE TIME** — `forecheck-122`, `forecheck-131`,
`forecheck-pinch`, `the-call-and-who-can-see-it` — because `diagrams.json` is a BUILD PRODUCT and the `.mjs`
repairs do not reach a reader until `build-diagrams.mjs` runs. **`check_absolutes` exit 2 was naming exactly
this. The rebuild is not hygiene; it is the fix.**

### What each sweep would have missed, stated by the agents that ran them

**Sweep 1** keyed on `101.1` + `clear intention`. **Its own named blind spots:** the paraphrase
`clear intent to play` (which the corpus really used), **necessary-condition verbs other than `only`**
(*"a hit NEEDS…"*), **statements with no rule number at all**, **line-wrapped blockquotes**, and
**build products nobody greps because they are generated.**

**Sweep 2 covered every one of them deliberately** — flattening blockquotes before searching, sweeping for
`intent`/`intention` independent of any rule number, and reading all 16 merged windows by hand. ⚠️ **It also
caught a FALSE HIT that a single-line grep produces and reproduced it: `offensive_zone_play.md:841` reads
`allows bodychecking only *"when` on one line, and is CORRECT — `only` governs BOTH limbs, which sit on the
next two lines.**

⚠️ **And a ugrep warning worth keeping: a flattened re-check returned "22 hits for `wom`" in each Situation
Handbook — a number that looks like a real count and is not. Every one is *"...two m..."* collapsing to
`twom` (`fortwominutes`, `thetwomeasurements`).**

⚠️ **`offensive_zone_play.md` CONTRADICTED ITSELF: its body at `:842` quotes the rule IN FULL with both
limbs — verified character by character — while its facts block at `:792` stated the single-limb version as
a REQUIREMENT. The facts layer is the one voiced alone.**

⚠️ **AND THE SITUATION HANDBOOKS WERE CHECKED FOR A CARVE-OUT RATHER THAN ASSUMED: `101.1` returns ZERO in
both, and so does `women`. The rule text is the whole of the authority, so nothing narrows the possession
limb back out.**

**Three further values in `body_contact_and_battles.md` (`:407`, `:451`, `:481`) were confirmed-but-
incomplete rather than false** — both limbs present, **no exception qualifier** — and repaired within their
31 chars of headroom.

⚠️ **What the sweep would MISS, stated by the agent: it keyed on `101.1` and `clear intention`, so a
paraphrase naming neither — *"you may only hit someone who has the puck"* — is invisible to it.**

## Coordinator obligations arising, none of them optional

1. ⚠️ **`build-diagrams.mjs` MUST run after every agent finishes** — three modules are stale, so
   `check_absolutes.py` correctly **exits 2 and refuses to certify the caption layer**, and
   `check_pointers.py` **aborts corpus-wide** on an unknown diagram id.
   ⚠️ **Two agents independently declined to run it while others were live, citing round 59's failure.
   Both were right.**
2. **Register the new modules in `index.mjs`** — shared state, never a subagent's.
3. **Add `@` → `" at "` to the symbol table, BETWEEN waves, never during one.**

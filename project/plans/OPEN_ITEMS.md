# What is open

**Consolidated 11 September 2026**, from a file that had reached 17,485 lines and was ruled *"too long to be
useful"*. Everything before that date is preserved verbatim in
[`plan_archive_2026-09-11_pre_consolidation.md`](../reviews/plan_archive_2026-09-11_pre_consolidation.md);
this file carries **only what is still to do, and the guidance for doing it.**

⚠️ **Keep it this length.** A plan nobody reads is not a plan. When a row closes, move it to a review record
in the same commit as the work — ⚠️ **a row staged beside its own repair is a false claim**, and that shipped
into the gate twice on 11 September.

---

# The two owner priorities

**Set by the owner, above everything below.** They are related: the biggest undrawn sections are the most
rules-dense ones, because rule detail is not drawable.

## P1 — DIAGRAMS. The thing that improves readability most.

**Census re-run 11 September 2026** over `##` and `###` sections, summary layers excluded:

| | |
|---|---|
| teaching sections | **1,528** |
| carry a diagram | **247 (16%)** |
| carry none | **1,281** |

⚠️ **This supersedes the 4 September census, which measured 23% / 12% on a different definition and had a
boundary bug** — it treated only `###` as a boundary, so the last subsection of every `##` swallowed Common
Mistakes, Check yourself and Key Takeaways. `winger.md`'s *"Backchecking"* was reported at 7,579 words; it is
429. **Measure per SECTION, and count both heading levels, or the number is wrong.**

⚠️⚠️ **AND 1,281 IS STILL TOO HIGH, for a SECOND reason found on 11 September.** The census above
already corrects for `##` parents whose `###` children carry the picture. It does **not** correct for a
`###` taught by a **SIBLING `###` inside the same `##` block** — and marker-proximity scoring cannot
see that at all. Triage row 9 was dispatched to draw *"the weak-side D as safety"* on the ground that
`forecheck-pinch` omits it. `forechecking_systems.mjs:904` draws that defenceman at (25, −8) and
**labels him "the safety"**. The agent refuted the brief in its first ten minutes.

**Measured, on a threshold of ≥120 words** — ⚠️ **stated because it is NOT the definition above, and
the two must never be mixed or subtracted from each other:**

| | |
|---|---|
| teaching units (≥120 words) | **1,206** |
| carry their own diagram | **244** |
| carry none, but a **sibling in the same `##` does** | **304** |
| carry none, and nothing in the whole `##` block does | **658** |

⚠️ **"Served by a sibling" is a CANDIDATE FILTER, NOT AN ANSWER. Distance decides**, and only
`site-reviewer` on the built page can measure it. **Eight of the ten largest sibling-served units are
the same rules surveys P2 rules must be COMPRESSED** — top of the list, `special_teams.md:621` at
6,770 words. **A reader who scrolls 5,500 words between a picture and the section it teaches is not
served by it, and the fix is shorter prose, not a second copy of the picture.** The two priorities
keep turning out to be one problem.

**Where the gap is worst — biggest undrawn section per document:**

| words | undrawn/total | document | the section |
|---|---|---|---|
| 10,515 | 54/62 | `foundation/rules_primer.md` | Body fouls |
| 7,947 | 35/51 | `foundation/rink_map_and_glossary.md` | 8. Glossary |
| 6,764 | 16/21 | `systems/special_teams.md` | Clearing, blocking, sticks and discipline |
| 5,754 | 26/31 | `technique/shooting.md` | How to create those shots |
| 5,550 | 26/36 | `systems/forechecking_systems.md` | What your book allows when you get there |
| 4,763 | 57/65 | `technique/body_contact_and_battles.md` | What actually gets called |
| 4,340 | 31/39 | `hockey-iq/risk_management.md` | 9. Never shoot the puck over the glass |
| 4,174 | 50/65 | `positions/goaltender.md` | The protection you have — and how it differs by book |
| 3,735 | 16/22 | `hockey-iq/time_and_space.md` | 6. How the rules create space |
| 3,396 | 29/35 | `systems/defending_the_rush.md` | The carve-outs, and how far they reach in each book |

⚠️ **READ THAT COLUMN OF SECTION TITLES.** *Body fouls · What your book allows · What actually gets called ·
The protection you have and how it differs by book · How the rules create space · The carve-outs.* **The
biggest undrawn sections are rules-survey prose.** They are undrawn because **there is nothing to draw** — a
list of what four books say is not a picture. **That is P2, and it is why the two priorities are one
problem.**

**So the diagram work splits in two, and only the first is a drawing job:**
1. **Sections that teach something spatial and lack a picture** — draw them.
2. **Sections that are rules surveys** — ⚠️ **do not commission a diagram. Cut the survey (P2). If what
   survives is spatial, it gets a picture then.**

**Before drawing anything:** `site/src/diagrams/*.mjs` is a shared area. **One module per agent**, and
re-check ownership between agents — four agents were once sent there in one round, each brief saying *"you
own exclusively"*, and a rebuild published six captions and a `describe` nobody had read. ⚠️ **A diagram
source change has a blast radius the diff does not show:** `forecheck-pinch` renders on
`/systems/forechecking_systems/` **and** `/systems/game_management/`. **Grep `dist` for the diagram id before
reviewing a caption.**

⚠️⚠️ **BEFORE COMMISSIONING ANY DIAGRAM, CHECK WHETHER IT WAS ALREADY DRAWN AND CUT.** The
11 September triage ranked `dz-back-door-seam` as the corpus's **#1 undrawn picture**. It had been
drawn, reviewed twice, repaired, re-reviewed and **cut** in round 68, cut accepted. **A diagram cut
before it is committed leaves no trace in `content/` at all** — no `](diagram:` marker was ever
added — so `git log -S '](diagram:'` **cannot see it**, and that probe was written into the triage
as the archaeology method. **The probe that works:**

```bash
grep -rn '<diagram-id>' project/reviews/          # a rejection that got as far as a NAME
awk '/NOT DRAWN/,0' site/src/diagrams/<module>.mjs  # a rejection that never got one
```

**17 modules carry a `WHAT IS DELIBERATELY NOT DRAWN` block.** `defending_the_rush.mjs`,
`breakouts.mjs`, `forechecking_systems.mjs` and `skating.mjs` carry **none** — no recorded
rejections there to trip over. Full record:
[`findings_diagram_triage_2026-09-11.md`](../reviews/findings_diagram_triage_2026-09-11.md).

| | |
|---|---|
| ⬜ | **Decide whether the orphan probe becomes a worklist script.** One line; its first and only finding to date was a legitimate withholding. ⚠️ **Worklist, never a gate** — a tool that ranked unplaced specs and offered to place them is how round 44 manufactured a divergence that did not exist. |

⚠️ **And the gap that triage reported was never a gap: THREE back-door pictures already exist**
(`dz-strong-side-overload`, `dz-collapse-high-slot`, and `pp-backdoor` from the attacking side).
**Grep the diagram sources for the play, not just for the section.**

| | a row this opened |
|---|---|
| ⬜ | ⚠️ **`defensive_zone_coverage.md` uses "the seam" for THREE different things, and two of them are adjacent bullets.** (1) `:529` *"**Stick in the seam.** The pass has to cross the slot"* — the low lane. (2) `:530`, the very next bullet, *"The seam runs through the high slot"* — not the same lane. (3) `:215`, `:223`, `:248`, `:255`, `:374` use it for the **gap between two defenders' zones** (*"two defenders' areas, where each assumes the other has them"*) — a third meaning with no geometry at all. `dz-strong-side-overload` draws the cross-ice route crossing at **x ≈ 76** = `slot`; `high-slot` is **x = 69**. Both (1) and (2) are voiced as separate `<p>` units in `048.ssml`. ⚠️ **Needs the section's owner and a source — two reviewers have declined to assume, correctly.** ⚠️ **The line numbers first recorded for this (`:521`/`:523`) were WRONG and `check_plan_rows.py` caught it; the real ones are `:529`/`:530`.** |

⚠️ **The owner does not want long captions.** At 390px the picture is 18% of the figure and one safety
band runs 836px. **A caption is not where a section's content goes.**

⚠️⚠️ **NO CAPTION LENGTHS ARE WRITTEN HERE. MEASURE THEM — one line over `site/src/data/diagrams.json`,
and the figures move every time a caption is edited.** This passage used to name *"the two longest of
198 — `forecheck-press` 3,435 and `forecheck-pinch` 3,102"* against a *"1,303-char median"*. **All of
it was stale, and the correction was already written down in
[`findings_diagram_triage_2026-09-11.md:21`](../reviews/findings_diagram_triage_2026-09-11.md) — which
the coordinator did not read before copying the superseded line into EIGHT briefs in one round.** An
agent measured it independently and refused to carry the brief's figure in, which is the only reason
it was caught. **The longest is `forcing-them-outside`, and `the-risk-map` sits above
`forecheck-pinch`; the median is near 1,270, not 1,303.** ⚠️ **Those figures are an illustration of
the drift, not a new number to copy — the owner is the tool, and this is the third figure in this
project replaced by a pointer for exactly this reason.**

### ⚠️⚠️ TWO FAILURE MODES FOUND ON 11 SEPTEMBER THAT NO CHECKER IN THIS REPOSITORY CAN SEE

**1. An index-based splice can overwrite a NEIGHBOURING diagram's caption and `describe`.** It
happened while `nz-hinge` was being written: a `str.replace` at a computed index put the hinge's
caption and `describe` onto `nz-regroup-d-to-d` and deleted the hinge's own anchors. ⚠️ **Nothing
reported it except the renderer throwing a `ReferenceError`** — and only because the splice also broke
the code. **Had the anchors survived, it would have shipped a caption and a `describe` that were both
fluent, both wrong, and both about a real diagram in the same file.** `check_absolutes` reads captions
for absolutes, not for subject; `check_diagram_quotes` checks quoted spans; `check-arrivals` reads
routes. **None of them asks whether a caption describes its own diagram.**

**So: edit a diagram spec by NAMED anchor, never by computed index, and `git diff --stat` your own file
before reporting.** The agent caught it that way and said so; that is the only reason it is written
down.

**2. Numbered route badges collide, and the collision is invisible to every gate.** `numbered` puts
each badge 9 ft along its route, nudged 3.4 ft off; on a full sheet `TXT` is 1.7, so **a badge covers
roughly 7 × 6.5 ft of ice.** Two routes sharing a start are separated only by the angle between them —
**at 20° two badges merged into one box reading "2 1".** A carry and its reversal put badge 4 back
along badge 3's line: at a 23 ft carry their centres were **4 ft apart and the boxes touched.**
⚠️ **Found by rendering four drafts and LOOKING at them, at 1100 px and 375 px. No checker can see
this, and none should be written for it — the remedy is to look.**

### ⚠️ NOTHING DETECTS AN ORPHAN DIAGRAM

`check_links.py` verifies every `](diagram:` marker resolves to a spec. **The reverse is unchecked**, so
a spec can be written, reviewed, committed and never placed with every gate green. Probe:

```bash
comm -13 <(grep -rho '](diagram:[a-z0-9-]*)' content/ | sed 's/.*diagram:\(.*\))/\1/' | sort -u) \
         <(grep -rhoE "id: '[a-z0-9-]+'" site/src/diagrams/*.mjs | sed "s/id: '\(.*\)'/\1/" | sort -u)
```

⚠️ **Its first run found one unplaced spec whose correct disposition was to LEAVE IT** —
`centre-crease-the-puck-decides` is a deliberate withholding, stated in capitals at `center.mjs:761`,
because `the-puck-decides-not-you` is the same picture and is already placed in both documents. **So
the probe's output is a question, never a defect. Worklist if ever scripted, never a gate.**
⚠️ **And `git log -S` gives the date a commit TOUCHED a string, not the date it was created. The
coordinator inferred a creation date from one and was wrong.** Full record:
[`findings_diagram_triage_2026-09-11.md`](../reviews/findings_diagram_triage_2026-09-11.md).

### ⚠️ Rows opened by the 11 September diagram round

| | |
|---|---|
| ⬜ | **Three unverified stale-quotation comments in `special_teams.mjs`** — `pp-131`'s point re-take, the net-front paint quotation, `pk-wedge-plus-1`'s perimeter inversion. **Two of the five comments examined that day were stale**, so the base rate is not low. Re-grep each against today's `content/`. ⚠️ **The cautionary case is `shooting.mjs`: a comment written to retract a stale quotation ended ON a stale quotation.** |
| ⬜ | **36 `describe` sites across 17 modules carry a comment recording a numeric correction** — the exact shape that has now gone stale three times. **One module per agent**, and the agent must re-grep the quotation, not read the comment. |
| ⬜ | **`:312` cannot be drawn because the section has no words for it.** `special_teams.md` §Power play zone entries names no formation, no lane and no attacker position — its only spatial sentence covers two players with no side, depth or distance. **Give the section its own words for where the five stand and the picture becomes drawable.** This is a content row, not a diagram row. |
| ⬜ | **`defensive_zone_coverage.md` §The rotations — the OTHER FOUR rotations were never tested** (low → high, point → point, corner → up the wall, puck to the far corner). The corner→behind-the-net one is refuted; one of the remaining four may be a single frame. |
| ⬜ | ⚠️ **`check-arrivals.mjs` measures a route only against the owner's OPPONENTS — it is blind to a route passing the reader's own TEAMMATE.** Found while drawing `legal-route-through-traffic`, whose entire subject is a route run close past a teammate's body. That clearance (6.83 ft centre-to-centre, **2.96 ft of daylight**) was hand-computed off the renderer's Bézier construction and **is covered by no gate.** Decide whether the tool should measure all glyphs, not just opposing ones. |
| ⬜ | **`playing_without_the_puck.mjs`, the `D1_MAN` comment on diagram 1, is arithmetically false.** It says *"At (74,-10) he is outside the left faceoff"* circle; he is **inside** it — 13.0 ft from the circle centre (69, −22) against a 15 ft radius. The glyph position is defensible either way; **the justification is not.** Reported by the agent that owned the file, deliberately left out of its commission's diff. |
| ⬜ | **`zone_entries.md` §"Against a 1-3-1 neutral zone" — a DECLINED borrow that was never replaced.** `nz-1-3-1` was declined there on the addressee rule (that rule's first application) and nothing filled the hole. **`breakout-against-1-3-1` is voiced to the team coming up the ice, which is that section's reader too** — a borrow at zero authoring cost. ⚠️ **Caption fit NOT verified against that section's prose. Run the three-question borrow test properly.** |
| ⬜ | ⚠️ **THREE OF THE FOUR NEW DIAGRAMS HAVE NOT BEEN LOOKED AT.** `rush-2-on-2`, `breakout-against-1-3-1` and `legal-route-through-traffic` are arithmetic, not ink — only `nz-hinge`'s author rendered and viewed his own (four drafts, 1100px and 375px). `diagram-reviewer` is on it. Unverified: whether `rush-2-on-2`'s two crossing arrowheads are legible where the curves meet, and whether its two identical 16-char `follow or switch` labels 22 ft apart read as ONE label spanning both glyphs — **the exact failure that module's header records from its first render**; whether `breakout-against-1-3-1`'s three flat glyphs at x = 3 read as a LINE at render scale, and where its **seven** labels land — `breakout-d-to-d` has a recorded case of the placer exiling a label **176.7 ft across the sheet on a leader line through an opponent's glyph**. ⚠️ **`check-arrivals` tests endpoints and the terminal tangent only — it is BLIND to a bowed curve passing through a player**, and its own header says that defect has happened here and only an eye caught it. **And the plan archive records that all 9 `breakouts` diagrams have been rendered and never looked at. These are the 10th and 11th.** LOOK AT THE PNGs. |
| ⬜ | **None of the four new diagrams has been reviewed by anyone.** `diagram-reviewer` and `safety-reviewer` are running now; **no `content-reviewer` and no `rules-verifier` has seen any of it. New text has not been reviewed.** Specifically open: whether `breakout-against-1-3-1`'s safety clause may stay a faithful SUBSET of `breakouts.md:731` (it drops *"forearm and hip into contact if it comes"* and *"chin off your chest"* for length, ~70 chars to restore), and whether `defending_the_rush.md`'s own `Read:` line — *zone survives a crossing rush better than man-on-man* — is supported by anything. **Nobody has tested that claim; the diagram propagates it.** |
| ⬜ | ⚠️ **`rush-2-on-2`'s safety clause carries no ⚠️ glyph**, so it gets neither `md_to_speech`'s `"Important. "` prefix nor the site's amber `.warn-inline` run. Its cited precedent `nz-stand-up-at-the-line` is the same — **consistent, not novel — but that caption never uses the word *safety* and this one does.** Decide whether the glyph convention should follow the word. |
| ⬜ | ⚠️ **A STALE BUILD PRODUCT CAN SHIP A SUPERSEDED SAFETY CLAUSE, and it nearly did on 11 September.** `diagrams.json` was rebuilt at 23:36:50; a caption repair landed at 23:42:14; the shipped clause was missing the chin-off-your-chest and forearm-and-hip elements while the source carried both. **`check_absolutes.py` was already saying so — EXIT 2, "the caption layer is UNCERTIFIED" — and nobody had acted on it.** ⚠️ **An exit 2 from that checker is not a formality: it means the text a reader gets is not the text anyone reviewed.** |
| ⬜ | ⚠️ **`breakouts.md` §Reverse and §Rim describe the boards posture and carry NO counterweight** — `:272-299`, *"sealed you against the boards"*. **Both sit at 8 facts, the coaching-fact ceiling**, so adding a `Never:` means re-labelling an existing line. |
| ⬜ | **The boards formula now appears twice in one Key Takeaways list and thirteen times in `breakouts.md`.** The layer test justifies each — every spoken chunk must stand alone — **but no tool measures when a repeated safety sentence stops being heard.** Needs `content-reviewer` reading Key Takeaways end to end as PROSE, not as chunks. |
| ⬜ | ⚠️ **A REVIEWER'S QUOTATION STOPPED MID-TAKEAWAY AND A CRITICAL WAS FILED ON THE TRUNCATION**, inside a passage its own report listed under *"Read in full."* **Re-check this round's other relayed quotations for the same shape** — the agent that caught it asked whether it came from a grep window, and if so the truncation may sit in more than one brief. |
| ⬜ | ⚠️ **NO HUMAN EYE, AND NO SECOND BROWSER ENGINE, HAS SEEN THE FOUR NEW DIAGRAMS.** `site-reviewer` ran them — but **the Chrome extension was BLOCKED** (five refusals across two hostnames) and it fell back to driving real Chrome over CDP, the repository's own build mechanism. **Same engine, same stylesheet, real rasterisation at DPR 1 and 3 — but no GPU compositing and no physical screen.** ⚠️ **Its own words: the `CH` verdict is *"legible at DPR 1 and 3 in Chrome's rasteriser", not "legible in your hand"*, because subpixel antialiasing on a real macOS display differs from headless output — and that is the axis it turns on.** ⚠️ **And `nz-hinge`'s 3.6 px badge gap is exactly the margin that could close in Safari or Firefox, neither of which was touched.** |
| ⬜ | ⚠️ **`nz-hinge`'s badges 2 and 1 sit 1.15 ft apart on one baseline** — 6.3 CSS px at 1100 px, **about 1.4 px of white at 375 px** — and **route 1's arrowhead and badge 3 touch EXACTLY, both edges at x = −8.41.** Still two boxes on both renders, so the header's recorded *"one box reading 2 1"* has not recurred. **A near miss, not a margin.** Numbers recorded so the next editor has them. |
| ⬜ | **OWNER DECISION: self-narration in spoken captions.** `this corpus` appears in **3** captions and `these diagrams` in **7**; non-negotiable 6 names that form and captions are voiced. ⚠️ **Both instances found today do real work** — one is a safety statement about what is deliberately absent, the other explains why an arrival has no glyph. **Deletion was NOT recommended. Do not sweep this.** |
| ⬜ | **Nobody has asked a COACH whether the drawn systems are recognisable.** `nz-1-3-1` and `breakout-against-1-3-1` put the trap's wall men at \|y\| = 33 and 36 — wider than the reviewer expected. ⚠️ **They agree with each other, so if it is wrong it is wrong in two places and internal consistency will never catch it.** |
| ⬜ | ⚠️ **THE ARRIVAL INVARIANT PUSHED A DIAGRAM INTO TEACHING A GAP THE CORPUS FORBIDS.** `rush-2-on-2`'s four rejected layouts (8.60, 8.25, 7.21, 5.10 ft) were all refused against `ARRIVAL.noArrow`; the tips went back to 12.37 ft to clear the 9 ft bar **and the defence went back with them**, leaving a 35.2 ft gap where the section says *"tight gap"*. **The rule that stops a diagram teaching a hit made a different diagram teach a gap the document tells the reader never to have.** Being fixed now — but the INTERACTION is the row: `kind: 'pressure'` exists for this and was not reached for. **Check the other rush diagrams for the same pressure.** |
| ⬜ | ⚠️ **`rules_primer.md:430`'s a-fortiori caveat may no longer be needed.** It cites USA Hockey's Declaration under COMPETITIVE CONTACT CATEGORY — written for non-check play — and honestly labels the carry-over as *"an inference, not the book's words"*. **USA Hockey Casebook Standard of Play Situation 12 (`usah_casebook.txt:18569`) states it positively**, putting the onus on the opponent to move around the player who established the space. ⚠️ **It is NOT unscoped, as first relayed — its own question scopes it to assessing interference *during face-offs*.** Carry that scope with it. ⚠️ **It exists only in the 476-page volume — the phrase returns ZERO from `usah.txt`.** Re-cite and decide whether the caveat stands. **A finding in the direction that makes the corpus more supported, which is the direction no reviewer stops on.** |
| ⬜ | ⚠️ **`hc.pdf` IS NOT ON DISK**, so Hockey Canada's **Appendices A–D cannot be rendered with `pdftoppm`** the way the README's `ibc.txt` entry demands. A permission stated in a figure or table there is invisible to every search this project can run. **Fetch the PDF.** Also unsearched: the IIHF Situation Handbook (either edition), and any Hockey Canada rule bulletin, Member interpretation or officiating clinic memo — ⚠️ **one of which is exactly where a federation would put a body-position standard, and the repository holds none of them.** |
| ⬜ | **`sources/README.md`'s file table is stale again — 36 `.txt` files on disk against 26 rows.** ⚠️ **The table warns it will go stale and it has; the warning is not a substitute for updating it.** None of the missing files bore on the question that found this. |
| ⬜ | ⚠️ **NOTHING CATCHES A CAPTION DOWNGRADING "never" TO "not".** `breakout-against-1-3-1`'s boards-posture line shipped with the qualifier downgraded from never to not, where the source and **22 sites across `content/`** all write the stronger form and **none writes the weaker one**. Now repaired. `check_caption_negations.py` reads inversion structure, not a shed qualification, and the coordinator read the line, said it was "least confident" about it, and **passed it**. **Consider a probe for safety phrases that exist in the corpus in exactly one variant.** |
| ⬜ | **No hedge anywhere on the section's claim that zone coverage survives a crossing rush better than man-on-man** — `defending_the_rush.md:496`. Searched across `content/`, `site/src/diagrams/` and `project/`: **no "nobody has tested this" note exists.** Unhedged in both layers, unsourced, and now propagated by `rush-2-on-2`'s caption. **A content row, not a caption fix.** |
| ⬜ | ⚠️ **Captions moved the WRONG WAY this round.** `breakout-against-1-3-1` is **1,531 chars against a 1,270 median**; `rush-2-on-2` grew too. The growth is restored safety text and an honest gap disclosure, **so each addition is defensible and the trend is not.** The owner has said twice that captions should be short. |
| ⬜ | ⚠️ **The `CH` glyph in `legal-route-through-traffic` has its own leader line struck through it, and NO fix is available inside the diagram.** The leader starts at the glyph **centre** (`<line x1="76.00" … x2="81.98">`), so it crosses the right half of whatever letter is there — **shortening halves the overlap, it does not clear it.** Every single-character id collides: `C` is a centre at **56** glyphs corpus-wide, `D` defence, `F` forward, `X` pylon. **A non-horizontal leader exit is renderer-owned.** Left alone deliberately: both reviewers confirmed the letters legible at zoom, and every alternative touches shared code. |
| ⬜ | ⚠️ **`playing_without_the_puck.md` §"Screens and picks" facts block is at the 11-fact HARD CAP** (7 `Rule:` + 4 coaching; `check_facts.py` blocks at 12), **so the two-book prohibition could not be given a `Rule:` line and lives in body + Common Mistakes + Key Takeaway instead.** The style guide's remedy is to split on the seam the body already uses — and **a clean seam exists** (rulebook half above the diagram, practical route below) — ⚠️ **but the split would move the diagram marker that was just argued into place.** Owner's call. |
| ⬜ | ⚠️ **A PRE-EXISTING `Rule:` line already records a book's silence, which is the shape `rules-verifier` ruled against on 11 September.** `playing_without_the_puck.md:586`, in §"Screen the goalie": *"Hockey Canada 8.5 grants no such permission…"*. **It is more defensible than the one that was refused, because it says what the book DOES ask** (*"it asks attacking players to avoid contact in all circumstances, anywhere on the ice"*) — **so it is not a bare silence.** ⚠️ **But it is voiced alone with a 300 ms break either side, and the ruling's reasoning applies: a listener hears a prohibition where the book prints none.** Test it. Not touched this round — different section, different rule, and found only by grepping for the shape. |
| ⬜ | ⚠️⚠️ **`check_disclosures.py` IS BLIND TO A WHOLE CLASS OF FALSE NEGATIVE.** It did not flag the two false rulebook-absence claims in `content/hockey-iq/playing_without_the_puck.md` (*"enumerate nothing of the kind"*, *"write no such offence"*) — both in layers voiced alone. ⚠️ **Every negative phrased as what a book *enumerates*, *lists* or *names* is currently invisible to it.** Three reviewers found these by reading; the tool found none. **Add the pattern class — and keep it a worklist, never a gate.** |
| ⬜ | ⚠️ **NOBODY OWNS THE PROTECTIVE-SCREEN SPLIT, and two documents cut it differently.** `playing_without_the_puck.md` frames a **two-book** split in four places; `breakouts.md` frames a **one-book** split in six (`:138`, `:142`, `:152`, `:255`, `:947`, `:1002`). They give different answers to one concrete case. **`rules_primer.md:430` holds both quotations and is the natural owner; it owns nothing at present.** Name an owner and make the other two point at it. |
| ⬜ | **A corpus-wide test `facts-reviewer` named and did not run:** *"for every `Rule:`-bearing prohibition in a Common Mistakes bullet, check whether its own section's block carries it."* ⚠️ **It found this round's Critical only because the brief pointed at the block — *"the same defect in a block nobody flagged is exactly what I did not look for."*** |
| ⬜ | **Four renderings of one clause across the corpus** — `625(a.1)`, `625(a)`, `625(a)(1)`. The book prints **(a)** then enumerated **(1)**. ⚠️ **Spoken, `625(a.1)` becomes *"six hundred and twenty-five, clause a point one"*, which is not a thing an official will recognise.** |
| ⬜ | **All 13 `breakouts.md` sites drop the owner's negative half of the boards formula** — `body_contact_and_battles.md:766` writes *"not the point of your shoulder"* and lists taking the wall on your shoulder as a coaching myth. **`playing_without_the_puck.md:904` carries it; `breakouts.md` never does.** |
| ⬜ | ⚠️ **A SHORT-PHRASE GREP IS NOT A PLACEMENT TEST, and it produced a false claim three times this round.** The coordinator reported three borrow placements that do not exist, having grepped the two-word string `token pressure` — which is ordinary prose on those pages (*"F1 gives token pressure"*). **The test that works is a caption sentence over 40 characters.** Earlier the same shape produced a false "no reader has ever seen it" and a false "the marker never reaches `dist`". |
| ⬜ | **`/systems/faceoffs` without a trailing slash 404s on the preview server** (`trailingSlash: always`). Production depends on the CloudFront rewrite, **which cannot be exercised locally.** Not verifiable here, not established as a defect — **but nobody has tested it against production either.** |
| ⬜ | **`nz-hinge`: route 1's arrowhead and badge 3 touch exactly**, both edges at x = −8.41, at both viewports and both themes. **They read as two shapes, so untidiness rather than a misreading** — recorded with the numbers so the next editor does not rediscover it. |
| ⬜ | ⚠️ **SEVEN SITES CITE "NHL and IIHF 56.2(i)" AS ONE RULE, and none carries the IIHF's mandatory chapeau** — `on_ice_communication.md:261,540`; `defender.md:743,816`; `defensive_zone_coverage.md:476,706,768`. Correct for the limb, incomplete for the book. **And `goaltender.md:1148` has Hockey Canada "silent rather than against it"**, which understates that its general limb 8.3(i) is unqualified and the book writes no body-position permission at all. |
| ⬜ | ⚠️ **`site/dist` no longer matches `diagrams.json`.** The repair added *"never duck"* to `breakout-against-1-3-1`'s caption **after `site-reviewer` had run**. The `.warn-inline` rendering mechanism is covered by that review; **the exact string is not.** Low risk — 11 characters inside a panel already verified — **but it is a C11 shape and is recorded rather than waved through.** |
| ⬜ | ⚠️ **The IIHF's general interference definition returns ZERO to a flattened grep** — a running header, *"SECTION · RESTRAINING INFRACTIONS"*, is spliced **mid-sentence** at a page break. **The whole NHL/IIHF divergence rests on it.** Now recorded in both documents' verification notes so the next reviewer does not file it as a fabrication. ⚠️ **Consider whether `sources/README.md` should carry this splice the way it carries the `2007- 09` one.** |
| ⬜ | **`forechecking_systems.md:594` — the CONSEQUENCE is undrawn**: a failed pinch becoming a 2-on-1. `rush-2-on-1` exists but is voiced from the defending side, so borrowing imports the wrong voice. |

⚠️⚠️ **COORDINATOR ERROR, PROPAGATED INTO EIGHT BRIEFS IN ONE ROUND — the placement rule was
BACKWARDS.** Every brief this round said *"put the marker where the prose has finished explaining the
thing, never at a section head."* **[`content_style_guide.md:1417`](../content_style_guide.md) says the
opposite, and it is the owner's own instruction:**

> *"A diagram goes at the head of the unit it teaches… The owner's instruction is **'diagrams should be
> at the start of sections'**, because a diagram that arrives after the prose it explains **arrives too
> late**."*

**Measured corpus-wide to settle it, not argued:**

| | |
|---|---|
| diagram markers | **325** |
| directly under a heading | **235 (72%)** |
| after prose | **90 (28%)** |
| inside a `facts` block | **0** |
| immediately **before** a facts block | **248** |
| immediately **after** a facts block | **1** |

**What the coordinator stated as the convention was the corpus's minority pattern, by 235 to 90.**
The rule was then used to manufacture a defect report against a file that was correct. **Consequences
traced and repaired:** the `scan-before-a-wall-reception` borrow was placed after the prose in
`puck_handling.md` and has been **moved to the head of `### Know your out before you get there`,
above the facts block**; the `scanning_and_anticipation.md:27` row is retracted above; and the three
live drawing agents were messaged mid-flight with the correction rather than left to ship it.
⚠️ **`breakout-stretch-pass` in `passing_and_receiving.md` was NOT a casualty of the wrong rule — its
position was measured, and moving it was a second error on top of the first. See the row below.**

⚠️⚠️ **THE TEST FOR HEAD-OF-SECTION PLACEMENT IS NOT ADJACENCY, IT IS REPETITION**, and nothing
stated that before this round. Measured on `puck_handling.md` (`md_to_speech.py --only`, 63 chunks):
the borrowed caption and the facts line **share chunk 035**, and the chunk contains **zero repeated
six-word phrases**. Adjacency present, cost absent — the placement stands. The stretch-pass failure
was **duplication**, not adjacency. **Run the shingle probe, not the boundary probe.**

**The real rule, with the three constraints that came out of applying it (`:1427-:1440`):**
*"The unit is the teaching point"* — the head of the **smallest** unit the caption is about, which is
not mechanically after every heading; **never between items of a real ordered list**, because it
renumbers the list in the audio; **a before/after pair moves to the head of the unit they share**,
because splitting breaks *"beside it"*; and ⚠️ **if a caption refers backward to prose the move would
strand, leave it and say so — "a wrong move is worse than no move."**

| | |
|---|---|

⚠️ **THE ROUND'S OWN LESSON, and it is a briefing rule, not a diagram rule: SEVEN triage rows were
examined and SEVEN had their premise refuted** — one was an accepted cut, one was rejected by name in
the module's own comments, one was already drawn *and labelled*, one was a timing section, two were the
same section listed twice, one would have had to invent four of the five players it drew, and one
re-proposed a ruling the plan archive had already closed with its reasons. **FOUR commissions survived their own agent's attack and were
drawn: `rush-2-on-2`, `breakout-against-1-3-1`, `nz-hinge` and `legal-route-through-traffic`** — plus
one borrow placed (`scan-before-a-wall-reception`), closing an action item that had sat unactioned in
a `.mjs` comment, and one **orphan** found: a committed, four-book-sourced diagram placed nowhere.
⚠️ **TWO rows re-opened CLOSED rulings — one recorded in a `.mjs` comment, one in the plan archive.
Neither is findable by reading `content/` and counting markers, which is the only thing the triage
did.** The triage was built
by reading `content/` and counting markers; **it never read the diagram MODULES, where four of those
answers were already written down.** ⚠️ **Read the `NOT DRAWN` blocks and the existing captions FIRST,
the prose second** — and resolve every line number against `grep -n '^#\{2,3\} '` before briefing it,
because two rows named the wrong section.

## P2 — BIG PICTURE OVER TECHNICALITY. Some rules, not a rulebook.

**The owner's ruling:** the corpus should teach the game — where to be, what to do, what happens next — and
**may mention rules**, but must not read as a rules reference.

⚠️⚠️ **THE FIRST FIGURE IN THIS SECTION WAS WRONG AND WAS COMMITTED. Read this before quoting any number.**
It said *"16,523 citations, 13.9 per 1,000"*. **The counter matched any decimal** — `4.5` ft, `2.10×`,
`16.6%`, `1.7` m, version `1.1` — **35% of the figure was not a citation.** It also counted the **Sources
trailer**, which `md_to_speech` strips and which is exactly where homework-proving belongs. **Found by the
pilot agent, which could not reproduce the number by any of five methods.**

**CORRECTED, body only, requiring an explicit `Rule N` or `NNN(a)` form:**

| | |
|---|---|
| body words | **1,175,572** |
| rule citations | **10,575** |
| **density** | **9.0 per 1,000 — a rule number every ~110 words** |

⚠️ **MEASURE THE BODY, NOT THE FILE, AND REQUIRE THE WORD "RULE".** A bare `57.1` is indistinguishable from
a measurement.

### ⚠️ The corpus ranking is the WRONG comparison. Use the peer group.

The pilot's most useful finding. `team_play_and_culture.md` ranked **4th** corpus-wide, which reads as
unremarkable. **Against its own section it was an outlier by an order of magnitude:**

| off-the-ice | /1k |
|---|---|
| `team_play_and_culture.md` | **9.2** ⚠️ |
| `equipment.md` | **7.6** ⚠️ **next target** |
| `how_to_watch_hockey.md` | 3.4 |
| `conditioning_and_recovery.md` | 2.2 |
| `practice_and_development.md` | 1.5 |
| `mental_game.md` | 0.4 |

**A culture document at 9.2 beside a psychology document at 0.4 is the case. Brief the next twelve on their
peer group, not on the corpus rank.** Densest overall are `rules_primer.md` 14.7 (legitimately a reference),
`faceoffs.md` 14.2, `goaltender.md` 13.8, `body_contact_and_battles.md` 11.6.

### The test

**Does a player need this to play the next shift, or to not get hurt or ejected?** If yes, keep it,
compressed. If it is a four-book comparison, **move it to `rules_primer.md` and link.** If it is there to
prove the homework was done, **the Sources trailer already is that place.**

⚠️ **THE DUPLICATION IS THE UNLOCK.** The pilot's biggest wins were surveys `rules_primer.md` already holds
in more depth with the same quotations. ⚠️ **Verify the owner by READING the target section, not by trusting
a pointer** — and check the rule number exists elsewhere at all: **four numbers in the pilot document existed
NOWHERE else in the corpus**, so a link would have pointed at nothing and they were compressed in place.

### ⚠️ Three constraints the pilot discovered, which the first brief got wrong

1. ⚠️ **THE FACTS-LINE DESTINATION DOES NOT EXIST FOR OFF-ICE DOCUMENTS.** The style guide **excludes the six
   off-ice documents from ` ```facts ` blocks by name** — *"they are reference or off-ice material, and
   imperatives would misrepresent them."* `check_facts.py` covers **26 documents, not 37.** For those six the
   only destinations are **paraphrase in place** and **the trailer**.
2. ⚠️ **CUT THE ENUMERATION, KEEP THE INFERENCE.** The hardest passage was an ~800-word five-book survey that
   existed to prove *no book reliably protects your goalie* — which is the whole reason the convention
   matters. **The enumeration went; the load-bearing conclusion stayed.** ~230 words.
3. ⚠️ **RUN A REMOVED-QUOTATION-VS-CORPUS DIFF BEFORE FINISHING.** The pilot **broke non-negotiable 3 once**
   — it dropped *"[bench doors] must swing inward so they cannot be left protruding onto the ice"*, which a
   grep then showed existed **nowhere else in the corpus.** It restored it. ⚠️ **It surfaced only because the
   agent diffed removed quotations against the corpus rather than trusting its own hunks. Put that check in
   every brief.**

### ⚠️ What a compression costs, and who must see it

**A compression is new text, and it removes the hedging that made the original cautious.** The pilot said it
plainly: *"if the pre-existing text was wrong, my version is wrong more concisely and now reads as more
confident because the hedging quotations are gone."* **`rules-verifier` matters MORE after a compression pass
than before it**, and anything touching contact, technique, equipment or a penalty tier needs
`safety-reviewer`.

⚠️ **And density is a PROXY, not the ruling.** A document that discusses rules heavily **without numbering
them** scores zero and looks clean. **Read the next one before trusting its number.**

### ⚠️⚠️ THE HARD PILOT: measure the BODY, and the target is REPETITION as much as survey

`faceoffs.md` was dispatched as the hard case — second-densest in the corpus — with the instruction that the
most valuable finding would be **where the ruling does not apply**. It was.

**Split by layer, the headline dissolves:**

| layer | words | citations | /1k |
|---|---|---|---|
| Sources trailer | 6,306 (14%) | 321 (**29%**) | 50.9 |
| ` ```facts ` blocks | 6,766 | 230 | 34.0 |
| **body prose** | **31,992** | **538** | **16.8** |

⚠️ **The trailer is where the ruling says homework belongs; the facts layer is where it says the citation
belongs. The body was two points above corpus mean, not eight. The headline figure was mostly the file
OBEYING the ruling already.**

⚠️ **AND THE REAL DRIVER WAS NOT COMPARATIVE RULES WORK — IT WAS REPETITION.** One IHUK sentence quoted
**verbatim 12 times**; the same edition story (*2025/26 warned, 2026/27 ejects, IHUK settles it*) told at
**eight separate sites**, each time re-quoting the sources. **Deduplicated to 5 sites. Body 16.8 → 14.4,
corpus mean. 1,834 words cut.** ⚠️ **Look for repetition before looking for surveys.**

### ⚠️⚠️ WHERE THE RULING DOES NOT APPLY — read this before briefing any rules-heavy document

**Most of `faceoffs.md`'s density is EARNED, and compressing further would damage it.** The four-book cases
there are not a survey; **they are the instruction:**

- ⚠️ **A British centre who does exactly what the IIHF book says is in violation.** IIHF 76.7(IV) asks for
  *"at least the toe"*; IHUK requires *"the whole of their stick blades (not toe or heel)"*.
- ⚠️ **Four different answers to "where do I put my foot", and the wrong one ejects your centre** — NHL/IIHF
  permit a skate on the line, Hockey Canada counts it as encroachment, USA Hockey's Casebook says *"all
  sticks and all skates"*.
- Stick-down order: three answers across four books, deciding who shows their blade angle first.
- Kicking the puck back is legal in the NHL and a violation under the IIHF — **a technique a British reader
  must delete from their repertoire.**

⚠️ **The agent's own reason, which is the best statement of the limit anyone has given:** *"a faceoff is the
only moment in hockey where a TEAMMATE's positioning penalises YOU. The four-book comparison is how a reader
learns their winger can cost them the draw, and it cannot be compressed to one book without picking a book
for a reader you cannot see."*

✅ **AND THE DOCUMENT ALREADY HOLDS THE RIGHT PATTERN — copy it.** At *"The rule everybody gets wrong"* it
sets out all four books and then lands on: ***"The instruction that survives all four books is the short one:
keep your skates and your stick behind your own hash mark."*** **Set out the divergence, then land on what
survives it.** That is the model for every rules-heavy section.

### ⚠️ What is NOT the target

⚠️ **Non-negotiable 3 stands: never delete a claim merely because it is inconvenient.** ⚠️ **Non-negotiable 4
stands: an honest disclosure is not verbosity.** ⚠️ **THE RULE-SET FLAG IS NOT THE SURVEY.** *"Under USA
Hockey this is a minor"* earns its place — a reader penalised under the wrong book is the failure this
project exists to prevent. Three paragraphs comparing four books on a clause nobody will meet does not.

---

# Standing method guidance — read before dispatching

**These are the conventions that cost real time to learn. The archive carries the incidents.**

## The briefs are more defective than the corpus

⚠️ **Measured over round 74: four of the first five rows dispatched closed as REFUTED, not repaired — the
plan was wrong, not the corpus. The dispatcher's own briefs were wrong EIGHT times in three shapes:**

| shape | guard |
|---|---|
| **relayed a figure without re-deriving it** | re-derive every number before putting it in a brief |
| **relayed a citation ADDRESS** | a `grep -n` on a clause opener is not an address; quote and locate |
| **asserted a property of something not examined** | ⚠️ **a census scoped to EXCLUDE its subject cannot support a conclusion about its subject** |

**Every one was caught by the receiving agent, none by the dispatcher.** So: **give every agent the row as a
HYPOTHESIS and tell it to refute the brief before acting.** ⚠️ **And a REVIEWER'S REPORT is a brief too** — it
arrives looking like verified evidence, with file names and line numbers, which is what makes relaying it
unexamined dangerous. ⚠️ **The discipline is symmetric: re-derive a CORRECTION before accepting it.** One
agent's "correction" on 11 September was itself wrong.

**A row is a claim, and rows go stale.** Re-measure before briefing, even when a row says READY.

## What the coordinator does and does not do

- **Does:** plan and review writes, `sources/`, `scripts/`, censuses, the renderer, staging, committing.
  ⚠️ **A SHARED TOOL IS SHARED STATE — change it BETWEEN waves, never during one.**
- **Does:** answer what agents declare they could not reach. **That handover is usually the highest-value
  work available** — on 11 September it produced a rendered PDF figure that settled a safety question.
- **Does not:** review its own writing, or let a repair self-certify. ⚠️ **Two coordinator content edits in
  one commit drew the gate's ruling: *"a third goes to an agent."***
- ⚠️ **State what you DID, not why it was necessary.** An agent wrote a false reason for its own method into
  the corpus — *"read as page images because a text search cannot see them"*, when `pdftotext` reads them
  fine. **The conclusion was right and the stated method was wrong, and no checker can see that.**
  ⚠️ **And record the ACT, not only the finding** — a reviewer read a `sources/README.md` entry describing
  what a figure shows and still listed the render as unreached.

## Parallelism

**File ownership must be disjoint and stated — and stating it does not make it true.** Check who else holds a
file before writing *"you own X exclusively"*. When a finding lands in a file another agent holds, **message
that agent**. ⚠️ **Diff the WHOLE file at the end, not your own hunks** — that is how two mutually
contradictory sentences were caught, and how an agent found two defects in its own new text on 11 September.

⚠️ **Stage only what will not be edited again.** `SendMessage` to a finished agent RESUMES it.
`git diff --name-only content/` empty means index matches tree. **A checker pass while agents are live proves
nothing.**

## Build traps — each has produced a silent false pass

1. **The nvm shim is a zsh function.** Use `/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/{node,npm}`.
   `npm` is a shim too.
2. **`ls -ld site/dist` is not proof.** Step 1 of an eleven-step chain deletes `dist`, so a fresh mtime means
   only that step 1 ran. ⚠️ **Check the LAST step ran** — one `check-links:` line in the log — **and that
   `dist/sw.js` exists.** A build killed at `build:pdf` on 11 September left a fresh-mtime, 35-entry `dist`
   that `ls` called success.
3. **Astro caches the markdown transform.** `npm run build` runs `clean:cache` first; a caption verified
   without it is unverified.
4. **`build-diagrams.mjs` must run before `check_absolutes.py`** — that checker reads the build product and
   will refuse to certify a stale caption layer rather than pass on old text.
5. ⚠️ **If the commit's tree differs from the tree you built** — unstaged files in `site/` — **build a
   worktree reconstructed from the index** (`git worktree add --detach`, then `git diff --cached | git apply
   --index`). The gate blocks on this and is right to.

## The checkers

**Gates:** `check_links` · `check_facts` · `check_absolutes` · `check_geometry` · `check_secrets` ·
`check_counts` (`--update` last, after the final `content/` edit) · `check-arrivals`.

**Worklists — none has a `--strict` and none should gain one:** `check_external_links` · `check_rule_scope` ·
`check_pointers` · `check_chunk_splits` · `check_caption_negations` · `check_zones` · `check_tables` ·
`check_disclosures` · `check_diagram_quotes` · `check_chunk_tails` · `check_leaders` · `check_plan_rows`.
**`ls scripts/*.py` is the authority; this list goes stale.**

⚠️ **They are the floor. None can check whether anything is TRUE.** And three blind spots are known:
**nothing detects a PARTIAL QUOTATION** (Hockey Canada 7.3 was quoted in three places with the same half
dropped every time); **nothing checks a METHOD claim**; and **`check_caption_negations` covers captions, so
the `49f1dc6` inversion shape in PROSE has no check** — three instances were found by hand in one round.

## Sources

⚠️ **Read a source's entry in [`sources/README.md`](../../sources/README.md) before concluding anything about
what it contains.** An empty extraction is not an absence. An image-only PDF is ungreppable, not
unverifiable — render it with `pdftoppm`.

⚠️ **A healthy text layer is not a complete document.** `ibc.txt` sits at a reassuring 3.2% text-to-PDF
ratio, so every reviewer greps it and stops — while **Fig. 6 is a drawing of the boards posture the corpus
argues about.** Four times the answer has been in page images nobody rendered.

⚠️ **A source can be accurately quoted, correctly cited, and still wrong, because the BOOK IT DESCRIBES has
moved.** `ibc.txt` is built on the 2007-09 rulebook and relayed a 12-and-Under checking age that current Rule
604(a) prohibits. **The tell is the source's date, and `sources/README.md` does not carry dates for every
entry.**

---

# Open rows

**Grouped by theme. Detail for anything carried over is in the archive** —
[`plan_archive_2026-09-11_pre_consolidation.md`](../reviews/plan_archive_2026-09-11_pre_consolidation.md).

## Safety and rules — the highest-consequence group

- ⚠️ **USA Hockey's own speed caveat is in NEITHER boards document.** `ibc.txt:1498-1499` — *"The speed at
  which the players hit the boards must be managed"* — in the same lettered list the corpus quotes twice
  from. **The corpus now teaches that angling in is a safety skill because a limb meets the boards instead
  of your helmet; a reader can take that as licence to arrive faster.** Deliberately not written: the manual
  addresses a coach managing a drill, not a player choosing a speed. **Decide, then propagate to BOTH
  documents or neither.**
- **The route limb reached four documents and stops there.** `defending_the_rush.md`,
  `neutral_zone_systems.md` and the position files all teach gap and pursuit routes. **Whether any teaches a
  converging close without the limb is unchecked.** Next dispatch.
- **The shoulder limb is absent from ELEVEN posture-teaching captions** across nine modules, present in
  eight others. ⚠️ **Do not sweep — each turns on whether the caption teaches the posture as a full
  instruction or only gestures at it.** One module per agent.
- **The caption names THREE prohibitions and explains TWO.** USA Hockey names no injury for the shoulder tip
  and none may be invented. Either stop counting, or move the shoulder tip out of the triple.
- **CRT6, the 21-day bar and the British checking age** — carried from round 73; see the archive.

## Corpus-wide censuses nobody has run

- **18 rulebook-absence claims, never tested** — all phrase censuses.
- **12 facts-layer absence claims in six documents, none tested.**
- **73 absence-of-evidence disclosures in `rules_primer.md` alone**, 62 of them book-scoped negatives, none
  attacked. **The largest concentration in the corpus.**
- ⚠️ **"Nobody has counted recreational-league calls"** — upheld against `sources/` and `content/`, but **no
  web search was run**. Record it as *not falsified by the repository*, never as held.
- **Summary layers read aloud standalone:** 31 Common Mistakes and 31 Key Takeaways sections have never been.
  Seven documents were done on 10 September and produced six majors.

## Numbers and ownership

- ⚠️⚠️ **FOLKLORE, NOT A WORDING PROBLEM: the corpus teaches "walking the line" in at least THREE documents
  and has NO SOURCE for it anywhere.** Found 11 September 2026. One manoeuvre — a point player sliding
  sideways along the offensive blue line — was stated **seven times in three magnitudes and three units**:
  *"one or two steps"* (`shooting.md`), *"two or three strides"* (`offensive_zone_play.md`), *"three metres"*
  and *"two or three metres"* (`special_teams.md`, contradicting itself in two facts lines **both voiced
  alone**). ⚠️ **`grep` over all 60 files in `sources/` returns ZERO. The IIHF coach-development material's
  two candidate passages give no distance. Two of the documents' own cited articles were FETCHED and give
  none either** — one of them naming drills called *"Blue Line Shuffles"* and *"Lateral Blue Line Series"*
  without a figure anywhere on the page.

  **All seven repaired** by replacing the count with a **stop condition** labelled as craft — *"go until the
  blocker has to move their feet"*, *"keep going until a killer turns their head"*. ⚠️ **But the repair
  replaced a fabricated precision with UNSOURCED CRAFT that is honestly labelled and still unsourced.** The
  agent said it plainly: *"no search I ran could have told me it was wrong rather than merely unsupported."*
  **The upstream question stands and is the real row: a technique taught in three documents with no source
  is the folklore-propagation shape, and the style guide has no numeric-owner row for it — a row that owned
  the ABSENCE of a number is what would have stopped this.**

  ⚠️ **Two jobs, one action, and the SITE LAYER HAD ALREADY DRAWN THE DISTINCTION** — `pp-131`'s caption
  describes walking the line with no distance (the distribution job, changing passing lanes) while
  `shooting-lane-and-the-step` carries the owner's *"one or two steps"* (the shooting job, beating one
  blocker). **The prose was the only layer carrying metres.**

- **`special_teams.md:377` — *"a missed pinch puts you two strides deeper than a missed hold does"*.** Same
  species, reported not fixed. Nothing in `sources/` fixes it. **May be defensible as a rough comparative
  rather than a measurement** — needs `safety-reviewer`, since it is the argument for not pinching with one
  defenceman back.



- ⚠️ **No figure in the §9 penalty table can be verified from this repository.** No script, no cached JSON —
  `grep` for `2967` / `gamecenter` returns only prose. **Two agents ruled on what those figures support;
  neither could check they are right.** If the raw pull exists, breaking out the residual 28.6% would settle
  a question that is currently unanswerable.
- **The aggregation repair tripled the copies of `71.4%`** across borrower sites. Each carries its
  qualifications, so not a defect — but a number copied out of its owner goes stale silently. **Decide
  whether the figure-carrying form earns three sites.**
- **The IIHF and Hockey Canada exclude HOOKING from their stick categories too**, so a second of the seven
  also fails to sort. ⚠️ **Would strengthen the ruling — but the corpus calls hooking a stick foul elsewhere.
  Propagate or leave; do not do half.**

## Diagrams — the describe layer

- ⚠️⚠️ **"THE FIX REACHED THE COMMENT AND STOPPED BEFORE THE STRING A LISTENER HEARS." Found TWICE in one
  module on 11 September 2026, both times by an agent sweeping numerically rather than reading.**
  - `oz-low-to-high` told a screen-reader user the defenceman carries the puck **ten feet** along the blue
    line. The geometry draws **fourteen** — `point.y 20` to `dy 6`. The module's own comment already said so.
  - `oz-rotation-one-pass-later` said F2 is **five feet off the boards**. He is at y 33.5 against a dasher at
    42.5 — **nine**. Its comment already said so too, and named the cause: *"true only while half-wall.y was
    33"*.
  ⚠️ **`describe` is the ONLY access a blind reader has to the picture**, and `longDesc` serves them
  `describe + caption` — so a stale figure there is an accessibility defect, not a tidiness one.

- ⚠️ **THE REPAIR WAS BETTER THAN THE SPECIFICATION, and the reasoning generalises.** The brief said make the
  string say fourteen. The agent refused: **no layer of the owner fixes a distance** — §5 says only *"walks
  the puck toward the middle"*, §11 **deliberately refuses** a number (*"go until the blocker has to move"*).
  So fourteen is illustrative, and a flat *"fourteen feet"* would have been **an unhedged measurement in the
  one layer that reaches a blind reader**. It now states no distance: *"carries the puck in along the blue
  line, stopping short of the middle of the ice."* ⚠️ **If the owner fixes no distance, the `describe` states
  none.**

- ⚠️⚠️ **NEXT WAVE, SCOPED AND READY: 166 distance claims sit in `describe` strings across 27 modules, and
  only two modules have ever been checked.** ⚠️ **But there is a cheap high-yield probe**, because both stale
  strings had their correction already written in a neighbouring comment: **36 sites across 17 modules carry
  a comment recording a numeric correction.** Grep shape:
  `//.*\b(said|read|was true only|never reached|stale|should say|actually)\b.*\b\d+\b` near `ft|feet|\.y`.
  **For each, ask only: does the `describe` still state the OLD number?** Densest: `body_contact_and_battles`
  (6), `offensive_zone_play` (4, two now fixed), `positions` (4), `breakouts` (3), `defending_the_rush` (3).
  ⚠️ **ONE MODULE PER AGENT** — four agents were once sent to this tree in one round each believing it owned
  the files exclusively, and a rebuild published six captions nobody had read.

- **Reported, geometry, not fixed:** `puck: { at: 'half-wall:right', dx: 1, dy: 3.5 }` at
  `offensive_zone_play.mjs:305, 415, 528` resolves to **(70, 42.0)** with a glyph radius of 1.1 against a
  dasher at 42.5 — **the puck is drawn 0.6 ft outside the playing surface** in three units, merging with the
  boards line. Visible in a render. **Geometry, so the agent stopped rather than moved it.**

- **`special_teams.mjs:191`** justifies its drawn ten feet as *"the section's own three metres"*. ⚠️ **The
  section no longer says three metres** — it was repaired to a stop condition. The drawing is fine as a scale
  choice; **the justification must be re-anchored** to the pattern `shooting-lane-and-the-step` already uses
  (*"take the move from those words and not the distance from the picture"*).

## Tools

- ⚠️ **Should `check_absolutes` see the *"legal in every league"* shape?** The phrase was TRUE once its
  definition was attached, so a tool flagging it would flag a correct sentence — and a tool that ranked these
  and offered fixes is how round 44 manufactured a divergence that did not exist.
- **`md_to_speech.py` does not expand a multi-clause citation** — `640(b, c, d, e or f)`.
- **Bare roman-numeral clause markers are voiced as raw letters.** Eleven sit in one paragraph of
  `risk_management.md`. ⚠️ **Census first; a bare `(I)` may not be a clause marker.**

## Site

- **The `/reading-diagrams/` redirect paints a full-screen WHITE interstitial**, dark theme included. Nothing
  links to it and there is no back-button trap, so it fires only for a bookmark or a trimmed URL. Accepted;
  if fixed, match the `theme-init` background and ⚠️ **do not add a delay or a "click here"**.
- **`dist/analytics.js` ships a GA4 bootstrap** into a site whose posture is no third parties. Referenced by
  zero pages and inert — one meta tag from live. **A decision, not a defect.**
- **The `.table-scroll` horizontal cue is clear in light and hard to see in dark.** `figure.diagram--full` was
  deliberately given an always-drawn scrollbar for this reason; `.table-scroll` never got the same treatment.
- **The AudioPlayer degrades to a dead `0:00 / 0:00` control with no message** when its source 404s.

## Podcast — COMPLETE

✅ **Published to Spotify and Apple Podcasts.** The feed, the per-section `.m3u` playlists, the downloads
page, the CDN invalidation and the episode metadata are all done and live. **The 3,796-line tier is in the
archive.** ⚠️ **One thing remains:** the Apple Podcasts show URL is not on `/downloads/` — the Subscribe
block links the feed and Spotify only. **Add it, with a `link_baseline.tsv` row so `link-check.yml` notices
if it dies.**

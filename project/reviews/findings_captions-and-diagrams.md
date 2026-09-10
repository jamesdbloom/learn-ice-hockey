# Findings — captions and diagrams

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 22 section(s).

---

### ✅ D5 CLOSED 6 September 2026 — the class is REAL but the population is ONE, not thirty-four

**Triaged in full: all 34 borrowed hits read, every hosting document checked for each. All 34 benign;
zero further fixes.** `dz-collapse-high-slot` remains the only known instance and is repaired.
⚠️ **Three of the dispatcher's "known-real" flags were refuted** — `forecheck-roles-rotate`'s *"beside
it"* points at a label inside its own picture, and every genuine pair (`rush-3-on-2-*`,
`dz-walk-down-*`, `forecheck-212-stacked`, `forecheck-122`, `nz-1-2-2-trap`, `winger-dz-reverse`,
`faceoff-dzone-clean-loss`) **resolves in every host because the D1 agents moved each pair together and
in order.** The care taken during D1 is why this came back clean. **The style-guide rule stands** — it is
cheap and the one instance shipped undetected through every gate — **but this is not a widespread defect,
and the round record should not be quoted as if it were.** Still unreached: captions that refer to another
diagram without a positional word, and the 61 single-host hits, which could be internally wrong.

Original census follows.

---

### D5 census — 6 September 2026

**One confirmed defect, one class.** `dz-collapse-high-slot` opened *"The same low zone collapse a
beat later"* — true in its owner `defensive_zone_coverage.md`, where `dz-collapse-corner` precedes
it, and **meaningless in `positions/defender.md`, which borrows it and has no predecessor.** Found
by a D1 agent, which correctly noted it **pre-dated the marker moves**. Repaired at source.

**Census over all 187 captions and every hosting document:**

| | |
|---|---|
| captions containing a relative-position phrase | **95** |
| of those, **borrowed into more than one document** | **34** |
| diagrams hosted by more than one document | 72 of 187 *(at census; **82 of 198** after the round-68 borrows)* |

⚠️ **MOST OF THE 34 WILL BE FALSE AND THIS MUST NOT BE SWEPT.** *"the same"* usually means *"the
same puck carrier"* or *"the same shift"* — self-contained and correct. **A hit is a defect only if
the phrase points at another DIAGRAM or at PROSE that is absent in at least one host.** The
asymmetry between owner and host **is** the defect. Known-real candidates: `forecheck-212-stacked`
(*"the diagram above"*), `forecheck-122`, `dz-walk-down-zone` (*"the next diagram"*),
`forecheck-roles-rotate` (*"beside it"*), and the `rush-3-on-2-default`/`-alternative` pair, both
borrowed into `goaltender.md`.

⚠️ **Nothing mechanical can find this class.** `check_links` resolves the marker; `check_facts` does
not read captions; and **reading either document alone sees a caption that looks fine** — the owner
because the referent is there, the host because nobody re-reads a borrowed caption against its new
neighbours. It took an agent reading captions across documents.

**The rule this establishes:** *a borrowed caption must stand alone in every document that hosts
it*, so relative-position words are safe only in a caption that is never borrowed. **With 82 of 198
borrowed, that is a house rule, not an edge case** — it belongs in the style guide once the triage
confirms the size.

---

## ▶▶ ROUND 60 — THE OWNER HAS RESET THE PRIORITY: READABILITY AND UNDERSTANDABILITY COME FIRST

⚠️ **This supersedes the tier order below for the purposes of what to work on next.** The tiers still
describe severity; they no longer describe sequence. The owner's instruction, 2 September 2026:

> *"I want the items around readability and understandability to be the most important thing we work
> on next"* … *"I want to make sure as well we are including lots of diagrams as **that helps
> readability more than anything else**."*

---

### ⚠️ THE COORDINATE THAT COULD NOT HAVE BOUGHT WHAT ITS COMMENT CLAIMED

**Two shot routes were said to be 9.3° apart after a fix; they are 8.517°.** ⚠️ **And the load-bearing half
is that THE SEPARATION IS VERY NEARLY INVARIANT IN y — 8.514° at y 18, 8.528° at y 22, 8.517° at y 32.**

⚠️ ***"The two long routes end 24 ft apart at a net 160 ft away, so the angle subtended from anywhere in
that corner is ~8.5°. MOVING THE CLEARER UP THE ICE CANNOT HAVE BOUGHT THE FAN THE NOTE CREDITED IT
WITH."*** **The coordinate was kept for a REAL measured gain it does deliver — the short route's separation
from the goal-bound one goes 32.06° → 37.78° — and the agent said plainly it did not re-render the original
to find out what the eye actually saw.**

**A second non-reproducing figure nobody had flagged: a board-curve working printed the x=92 case under a
line claiming x=94.** **The answer was right and the working was one place along.**

---

### D3 — An Overview diagram per document, summarising the page

**1 of 37 Overview sections carries a diagram.**

⚠️ **This is a NEW KIND of diagram and the hardest thing in this tier.** A summary of a whole document
is not a play — it is a map of where the document's material sits on the ice. **There is no precedent in
the corpus for it and no established notation.**

- [ ] **Design one first, for one document, and review it before drawing 36 more.** ⚠️ **The failure
      mode is a diagram that shows everything and teaches nothing.**
- [ ] ⚠️ **`equipment`, `mental_game`, `conditioning_and_recovery` and `team_play_and_culture` should
      probably get none** — the owner's steer is *"diagrams of the ice rink not other diagrams"*, and a
      document with no spatial content has no map.

---

### ✅ TIER 0-D DRAWING WAVE EXECUTED — 4 drawn, ~11 borrowed, 3 DECLINED with reasons

Five agents on disjoint file sets. **Every one declined something, and every declension was argued.**

**Drawn** — all under budget against a 1,303-char median: `dz-back-door-seam` (**852** after the review repair rewrote it; 658 as first drawn),
`oz-post-shot-shape` (629), `forecheck-angling` (549), `never-both-defencemen-to-the-puck` (753).

**Declined, and each is the more useful half of its agent's work:**

- **`defending_the_rush.md` 3-on-1** — the prose *"never commits to a specific attacker formation"*,
  so any picture would assert a position the corpus does not. Agreed with the vetting that ranked it
  weakest of four.
- **`skating.md` Overview** — the Overview and *"Arriving at the boards"* teach the **same
  instruction from the same USA Hockey quote**. With `angle-into-the-corner` now wired into the
  later subsection, a second diagram would duplicate the geometry and create a second caption to
  keep in sync. **One diagram covering both mentions beats two.**
- ⚠️ **`nz-1-3-1` into `zone_entries.md`** — see the style guide. Caught by the addressee rule **on
  its first application**, against a section whose title matches the diagram exactly.

---

### ⚠️ SUPERSEDED — D3 pricing, kept for its arithmetic only

⚠️ **This block prices ~30 Overview diagrams and says to build and review the pilot before drawing
them. BOTH are now overtaken by the section above: the pilot IS built and reviewed, and the audit
returned 2 DRAW, not 30.** The per-caption arithmetic below is still sound and is why the two are
affordable; the count is not. **Do not act on this block.**

#### D3 affordability, as priced 6 September 2026

After today's diagram work the corpus stands at **84,616 caption words against 978,020 body words,
7.96% of spoken text, 9.4 hours.** ⚠️ **An earlier draft of this line said 84,187 / 945,141 / 8.2%.
The body figure was measured BEFORE the two A2 reverts restored 190k characters to `rules_primer.md`
and `faceoffs.md`, so it understated the denominator by 33,000 words and inflated the share.** Adding
the remaining ~30 Overview diagrams:

| at the pilot's 624 chars | at the 800-char brief cap | at the legacy 1,303 median |
|---|---|---|
| **8.2%** (9.8 h) | 8.3% (9.9 h) | 8.6% (10.2 h) |

**All three fit under the 10% ceiling** — so D3 is go, and the caption budget is the reason. ⚠️ **At
the legacy median it would consume roughly twice the headroom of the pilot's length for the same
30 pictures**, which is the whole argument for the 800-char cap in one line.

**Blocking condition, unchanged:** the pilot has never been rendered and no `diagram-reviewer` has
seen it. **Build and review the pilot before drawing the other 30** — it is the first of its kind
and there is no sibling to check it against.

---

### ⚠️ AND A CORPUS-WIDE SWEEP NOBODY HAS RUN

`rink.json` claims every `goalmouth`/`net-front` use was hand-resolved and no skater sits in the
paint. **This diagram falsified it, so that audit either predates this glyph or has a hole.** The
check: for every `pos: 'D'` with |y| < 8 and 79 < x < 93, dilate the triangle by 0.4 and test against
the crease region. **Not run.**

---

### ⚠️ AND THE CREASE SWEEP'S OWN NUMBERS WERE REFUTED BY THE AGENT SENT TO ACT ON THEM

The sweep reported `goalie-front-door-back-door`'s `F2` as **0.16 ft inside** the crease on the body
and **0.54 ft** on the halo. The repairing agent derived the crease from `rink.json` and `endZone()`
independently and got: **body CLEAR by 0.14 ft** — the sweep had the sign backwards — and **halo
0.834 ft inside**, not 0.54.

⚠️ **The finding held; both numbers were wrong, one of them in direction.** So the chain runs:
my clearance figures were wrong (body-only, ignoring the halo) → the sweep corrected those and got
its own instance numbers wrong → the repairing agent corrected those. **Three measurement layers,
each catching the one above, and the corpus was never the thing at fault.**

**The fix moved the glyph rather than the caption** — `dy: -7` → `dy: -9`, giving **1.150 ft of
clearance for the full 3.875 ft of ink**, and recomputed the pass endpoint to stop 3.1 ft clear of
the receiver. ⚠️ **The caption needed no change: it claimed the player was "five feet out from the
goal line and clear of the crease", and that is now literally true.**

⚠️ **AND IT FOUND THE MODULE'S HEADER NOTE WAS STALE** — it described a crease-drawing bug
(*"1 ft inward … apex 2.53 ft out"*) **already fixed in the committed renderer**. Corrected. **That is
the second false module header found in two rounds**, and this one would have produced another wrong
clearance calculation for whoever read it next.

---

### `title` coverage — 167 of 175 diagrams still have none

**An agent added a short `title` to the 15 pre-existing diagrams in its two files.** **The fallback (caption's
first sentence, else the id) is now safe — it never truncates — but an explicit 2–6 word `title` is better
than either.** **→ Add one to every spec; it is the browser hover tooltip and the accessible name.**

---

### T0-12 Leader stop-short — FIXED, and the proposed fix was measured and rejected

The browser pass found that round 64's leader repair left **40 of 534 leaders stopping over a unit
short** on horizontal runs, worst case `nz-regroup-d-to-d` / `wide — outside lane` showing **0.20 units
of visible line across a 1.79-unit gap**. **A regression the repair caused.**

**Cause, and the fix applied:** `CH = size * 0.56` was used both to RESERVE space for a label and to
CLIP the leader against it. The browser pass measured the real advance-width distribution over 118
labels: **min 0.384, median 0.446, p75 0.473, max 0.562.** ⚠️ **0.56 is the distribution's MAXIMUM.**
That is correct for collision reservation, where over-reserving costs only layout — and wrong for
clipping, where the whole error lands along the leader's axis. **The two are now decoupled:
`CLIP_ADV = 0.473` (p75) for the clip; `CH` unchanged at 0.56 for placement, so no label moves.**

**Measured on the two named diagrams before rebuild:** `wide — outside lane` **3.10 → 7.03**; the
owner's three vertical leaders **5.08 / 5.08 / 7.01 — byte-identical**, i.e. the verified-good case is
untouched.

---

### T0-P7 ⚠️⚠️ `spoken_text` MISLABELLED EVERY CAPTION IN THE CORPUS AS BORROWED — FIXED 2026-09-07

`spoken_text(path)` defaulted `doc_id = path.stem` → `"zone_entries"`, while `_diagram_is_away()`
resolves the manifest owner to `"systems__zone_entries"`. **The two strings could never match, so the
helper returned "borrowed" for EVERY diagram in EVERY document.**

Measured on `content/systems/zone_entries.md`, whose 16 diagrams are all its own:

| call | "Diagram, from" | "Diagram." |
|---|---|---|
| `spoken_text(p)` — **as every brief prescribes** | 16 | 0 |
| `spoken_text(p, doc_id="systems__zone_entries")` | 0 | 16 |

**A clean inversion, across all 37 documents.** It mattered because the style guide's caption rule
turns entirely on *"whose voice is this caption in, and is that this section's reader?"* — a test you
apply to **borrowed** captions. Through this helper a reviewer saw every caption flagged and none
clean: **the signal was destroyed in both directions.** The agent that found it nearly filed the
artefact as a content defect in `zone_entries.md` before checking the script.

⚠️ **SECOND DEFECT IN THIS ONE FUNCTION.** The comment block directly above the bug records the
first — the same helper once raised `AttributeError` on the string argument every round-59 brief told
reviewers to pass. **The helper written to stop reviewers hand-rolling their own extraction has now
manufactured findings twice.**

**FIXED:** added `_doc_id_for(path)`, mirroring `discover()`. Default now equals explicit `doc_id` on
every document tested.

---

### T0-P11 `how_to_watch_hockey.md` — 24 borrowed captions from 12 documents, 0 native, and four address a player

Now measurable for the first time (see T0-P7). Every diagram in the document is borrowed:
`special_teams.md` ×6, `neutral_zone_systems.md` ×3, then `rink_map_and_glossary`, `forechecking_systems`,
`defensive_zone_coverage`, `defending_the_rush`, `faceoffs` ×2 each, and `breakouts`, `winger`,
`zone_entries`, `goaltender`, `defender` ×1.

⚠️ **Four address the reader as a PLAYER, in a document whose reader is a spectator:**

| diagram | caption says |
|---|---|
| `breakout-five-roles` | *"This is **your own** defensive zone"* |
| `winger-wall-depth-by-system` | *"**your own** goal at the left and the way **you are attacking**"* |
| `faceoff-dzone-alignment` | *"A defensive-zone draw in **your own end**"* |
| `goalie-rebound-corners-not-slot` | *"an opposition forward is standing in the shaded slot waiting for what comes off **you**"* |

**The last is the sharpest**: a document teaching someone how to *watch* hockey addresses its reader as
the goaltender, and `md_to_speech` voices it as `"Diagram, from …"` plus the caption, alone.

⚠️ **Not a licence to rewrite 24 captions.** Reuse is why the manifest has an `owner` field, and a
borrowed caption is usually right. **The four above are the actionable set**; the other 20 need reading,
not sweeping. ⚠️ And a caption edit propagates into **every** document hosting it — see T0-29 — so
changing `goalie-rebound-corners-not-slot` changes `goaltender.md` too, where "you" is correct.
**That is the whole difficulty: the same sentence is right in one host and wrong in the other.**

---

### T0-P38 A false finding caught by its own author before filing

The census agent nearly reported that full-sheet diagrams are unreadable at 375 px. ⚠️ **`global.css:2115`
already gives `figure.diagram--full .diagram-scroll svg` a `min-width: 640px` inside a horizontally
scrolling box — precisely so full-sheet diagrams are not shrunk to fit.** At 640 px the labels are
legible. Its words: *"I nearly filed this as a finding and it would have been false."*

**Also cleared, with reasoning, so nobody re-files them:** `nz-1-2-2-trap`'s `check-arrivals` advisory
(the tip stops **10.2 ft short**; the drawn ray never reaches the player, and the route is correctly
bar-ended *arrive-and-contain*), and the carry/backward wavelength pair, which is separable **by shape**
at the 640 px floor rather than by measuring.

⚠️ **New, and visual rather than semantic:** in `centre-nz-arrive-behind-the-puck` the centre's `C`
renders closed enough at `font-size="3"` to read as a **`G`** — with a real goaltender `G` at 4.6 in the
same picture. The `C`-for-centre collision is recorded as the owner's open call; **this is the first
instance where it is visible, not just semantic.**

---

### T0-P39 ⚠️ CRITICAL IN A DIAGRAM `describe` — voiced in three documents, closable by nobody who found it

`site/src/diagrams/body_contact_and_battles.mjs:441`, the `describe` for `net-front-walk-out-direction`,
voiced inside **`defender.md` (chunk 022), `goaltender.md` and `body_contact_and_battles.md`**:

> *"In a checking league, drive from under the arm without lifting their skates off the ice"*

— **a positive instruction to a checking-league reader with no interference flag anywhere in the unit.**
⚠️ **The agent's chunk scan reports this as the ONE remaining gap across all three of its documents, and
it could not close it: it is not in `content/`.** Needs the same clause the three documents now carry,
**then a `build-diagrams.mjs` rebuild.**

⚠️ **And it undermines a premise I gave that agent:** I said `goaltender.md:1125` *"teaches box-out only
and grants no walk-out"*. **The same describe is voiced there and does grant one.** **Check before
relying on it.**

---

### T0-P36 — CAPTIONS FIXED, and my blast radius was wrong twice

**Both captions corrected and verified through the renderer after a rebuild.** The bare string
*"the middle third is where open-ice contact happens"* now appears **nowhere** in `content/`, the diagram
sources, or `diagrams.json`. ⚠️ **A comment was added above the `rush-gap-and-angle` caption recording
why the compressed form is wrong, so a sweep cannot re-introduce it.**

⚠️ **THREE REFUTATIONS OF MY BRIEF:**
1. Item 1 blast radius *"ONE document"* → **TWO** (`neutral_zone_systems.md:651`, already hedged).
2. Item 2 blast radius *"four documents"* → **NINE** — ⚠️ **and `body_contact_and_battles.md`, one of the
   four I named, contains the sentence ZERO times.**
3. I said `defending_the_rush.md`'s prose was *"already scoped"*. ⚠️ **Its facts line and Key Takeaway
   are; `:141` is NOT — and it sits four lines above `:143`, which refutes it. The owner contradicts
   itself.**

⚠️ **A BETTER FINDING THAN THE ONE I SENT.** `neutral_zone_systems.md:641`'s *"The middle is the most
expensive place to lose the puck"* is not merely unhedged — ⚠️ **the owner REFUTES it.**
`risk_management.md` grades *"in your own slot"* **CATASTROPHIC** and *"the middle of the neutral zone"*
**HIGH**, tied with the defensive zone generally and **strictly below the slot**. It also collided with
`center.md:98`, which calls *"the middle of your own end"* the most expensive place. **Fixed to the
document's own `:12` wording, with the body now naming Risk Management as owner.**

**Still unscoped, none of them that agent's:** `defending_the_rush.md:141`, `defender.md:373` (held),
`switching_positions.md:211`, `zone_entries.md:764`/`:928`, `mental_game.md:121`, `skating.md:488`.

---

### T0-P61 The gate was wrong about the `describe`, and sweeping it would have degraded correct alt text

`commit-gate` said the `net-front-walk-out-direction` **caption and `describe` both** carried the
unqualified checking-league instruction. ⚠️ **The `describe` never did.** It is pure visual description
and ends *"Nothing in the picture shows a body check being delivered."* The agent read it in source and
in the built manifest before acting: ⚠️ ***"had I swept it I would have degraded a correct alt text."***

*(The phrase "drives from underneath" does exist at `.mjs:509` — **an SVG player label, not a voiced
unit**, describing the drawn body position rather than granting anything.)*

---

### T0-P39 — CLOSED by this commit

`site/src/diagrams/body_contact_and_battles.mjs`'s `netFrontWalkOut` **caption** now carries NHL/IIHF
56.1's two limbs, USA Hockey 625(a)(4) and the 604-vs-625 title-scope point. Rebuilt; present in
`diagrams.json`; verified in all three hosting documents.
⚠️ **The `describe` never carried the instruction.** `commit-gate` said it did, read it, and withdrew:
*"it is pure geometry… had I swept it I would have degraded a correct alt text."*

---

### T0-P74 A caption change now reaches two documents nobody reviewed

The `rush-gap-and-angle` singular propagates into `off-the-ice__how_to_watch_hockey/025.ssml` and
`technique__body_contact_and_battles/016.ssml` as well as `positions__defender/035.ssml`.
⚠️ **The writing agent confirmed the string renders in all three and did NOT read the surrounding prose
in the two it does not own.** Queued to `safety-reviewer`.

---

### T0-P80 — CLOSED, and the brief understated it two ways

**A second independent defect in the same caption, which my brief did not name:** it said *"All four
books can go higher on a violent one… **and not one of them waits for the forechecker to be hurt
first**."* ⚠️ **False for TWO of the four.** **NHL 56.5** (`nhl_rules.txt:6370`): the game misconduct
comes *"for an infraction resulting in an **INJURY** of an opponent"* — **the NHL's ejection under Rule
56 does wait.** And **USA Hockey's Rule 625 writes no major and no game misconduct at all** — it
escalates only via 640(g)/(h) or 602(a).

**And the split is WIDER than "USA Hockey splits from both" — a FOURTH book is against you:**
**Hockey Canada 8.3** (`hc.txt:6810`, confirmed in the `-layout` twin so not a page artefact) and
**CARHA 66(a) Note 2** (`carha.txt:3122`): *"Players of the team in possession of the puck may not run
deliberate interference for the puck carrier."* ⚠️ **CARHA hands the *"stand their ground"* permission to
the DEFENDING side — on a breakout that is not you.** The phrase returns **zero** in both NHL
extractions, IIHF v1.1 and 2026/27, USA Hockey, its Casebook, IHUK and EIH. **`breakouts.md:151` already
carried all of this correctly; only the caption was stale.**

⚠️ **THE CHUNK BOUNDARY MOVED IN THE RIGHT DIRECTION.** The caption is now chunk **021** and the facts
block begins **in the same chunk** — *"no longer merely adjacent — they are in one breath, and they
agree."*

**Hosting: exactly one document** (`breakouts.md:245`). No propagation.

---

### T0-P83 Two counts I got wrong, both corrected against the artefact

1. ⚠️ **The diagram-source count has been stated wrongly THREE times in the review record** — *"two"*,
   corrected to *"three"*, and **four are staged**: `center.mjs`, `defending_the_rush.mjs`,
   `body_contact_and_battles.mjs`, `breakouts.mjs`. **Now corrected against `git diff --cached`, not memory.**
2. ⚠️ **I briefed that *"protective screen"* returns two Casebook hits including one in sled hockey.
   It returns ONE** — the rule reprint at `usah_casebook.txt:10024`. **The sled-hockey line is a
   different string (*"set up a screen"*), which an earlier agent conflated and I carried forward
   without checking.** ⚠️ **The disclosure it supports is unaffected and still holds** — no Casebook
   situation cites (a.1).

---

### T0-P80 — CLOSED. And the repair avoided reproducing the class it was fixing.

**NHL 21.1 landed** (`nhl_rules.txt:2632`): *"A match penalty shall be imposed on any player who
**deliberately attempts to injure** or who deliberately injures an opponent **in any manner**."*
**Attempts carries no injury element and it is tied to no named foul.** The caption now carries the
lenient-book warning and 21.1 **inside the same chunk**, and the following facts block independently
says *"the NHL is not the lenient book"*. **Neither layer implies NHL leniency.**

⚠️ **THE AGENT AVOIDED REPRODUCING THE DEFECT IT WAS SENT TO FIX, AND SAID SO.** Its first draft wrote
*"escalates to 640(g), 640(h) and 602(a)"* — **then grepped rather than trusting the body text.**
`usah.txt:5143`: both **640(g) and 640(h) reach *"only actions falling under Rule 640(b, c, d, e or
f)"*.** ⚠️ ***"A caption naming them bare would have shed that scope, which is the same defect class as
the one I was sent to fix."*** It used **602(a)** instead — unscoped in the book itself, *"recklessly
endangers or attempts to injure any opposing player"*, **tied to no named foul** — which parallels NHL
21.1 exactly and makes the four-book comparison symmetric. **640 stays in §2 with its scope intact.**

**The eighth cross-attribution fixed** to the house form `breakouts.md:151` already uses:
*"IIHF Rule 56.1 is that sentence bar the pronouns."*

⚠️ **My line numbers were off by 6 and 12** — NHL 56.4/56.5 are at `:6354`/`:6371`, not `:6348`/`:6359`.
**The text was as quoted; only my anchors were wrong.**

⚠️ **It verified the rebuild swept in nobody else's work:** diffing the staged `diagrams.json` against
the rebuilt one, **only `breakout-wheel` differs.**

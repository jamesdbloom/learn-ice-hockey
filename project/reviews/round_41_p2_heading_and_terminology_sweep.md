# Round 41 — the P2 heading and terminology sweep

**25 August 2026.** Reviewers: `content-reviewer`, `facts-reviewer`, `safety-reviewer`,
`rules-verifier`, then `commit-gate` ×4. Scope: **thirteen** content documents carrying two
mechanical sweeps and about twenty-seven substantive prose changes, written in an earlier session
and **never reviewed**.

`conditioning_and_recovery.md` · `defender.md` · `defensive_zone_coverage.md` · `faceoffs.md` ·
`how_to_watch_hockey.md` · `mental_game.md` · `passing_and_receiving.md` · `practice_and_development.md` ·
`center.md` · `skating.md` · `zone_entries.md` — the eleven the reviewers saw — plus
**`breakouts.md` and `risk_management.md`, which entered at the gate and were seen by no reviewer**.
Both changes to those two are one-line and were re-derived from primary text at the gate; that is
recorded here rather than left to be inferred from the diff.

⚠️ **The first three drafts of this record named ten of the thirteen.** The three it omitted were
`conditioning_and_recovery.md`, `mental_game.md` and `practice_and_development.md`, whose diffs are
renames and `owns`→`covers` only — and one of those renames is
`### The absolute rule` → `### Concussion: the absolute rule`, the concussion return-to-play
section. A listener hearing "The absolute rule" cold learns nothing, so the prefix is a safety
improvement, and it is the last heading in the corpus that should have been untraceable in the
record. **This is the same defect this record diagnoses one layer down** — a scope covering the
files someone happened to notice — committed in the record that names it.

---

## What the commit is

Two sweeps, mixed:

1. **37 headings prefixed with their zone or parent section** — `### The techniques` →
   `### Faceoff technique: the techniques`; `### Carrying the Puck — Under Pressure` →
   `### Defensive Zone: Carrying the Puck — Under Pressure`. This answers an owner complaint that a
   section heard aloud gives no clue which end of the ice it describes.
2. **78 instances of `owns` replaced with `covers`.**

Plus **three** Overview rewrites — `center.md`, `defender.md` and `defensive_zone_coverage.md`, whose
prose lost its opening definition and its cardinal-rule sentence to its own facts block — two new
diagram references in `passing_and_receiving.md`, and a new `Checker` terminology note.
⚠️ **The first draft of this record said two.** A structural edit to a document's opening, in a
commit gated on its record, that the record does not mention, is unreviewable by the record. Caught
at the gate.

---

## The rename orphaned ten of its own cross-references in this diff

The sweep renamed the headings and updated **nothing that pointed at them**. Found before review, by
resolving every `§`-reference against its document's own headings:

| file | orphans |
|---|---|
| `defender.md` | 4 |
| `center.md` | 3 |
| `faceoffs.md`, `how_to_watch_hockey.md`, `skating.md` | 1 each |

All now resolve. `winger.md` had nine more, fixed in the preceding commit and **not part of this
diff** — an earlier draft of this table listed them here, which credited this commit with work it
did not do. ⚠️ **The plan predicted two files and it was five here, six counting `winger.md`.** `OPEN_ITEMS` carried a warning to
count `center.md` and `defender.md` before staging them; the same rename had also hit
`faceoffs.md` (`§The techniques`), `how_to_watch_hockey.md` (`§The basic statistics`) and
`skating.md` (`§Crossovers — the mechanics`). A warning scoped to the files someone happened to
notice is not a scope.

**Two of my own checks were wrong before the third was right**, which is worth recording because it
is the round-40 generator again: a heading parser that used `startswith('## ')` and so silently
excluded every `###`, and a reference regex whose lookahead let `§The mechanics` match inside
`§The mechanics of a scan`. Both produced confident, wrong answers. The tool has to be stressed
before its output is evidence.

---

## Found by review, fixed here

**A figure wrong by fifteen feet, in a Key Takeaway.** `defender.md` claimed the tops of the faceoff
circles are *"50 feet out"*. The end-zone dot is 20 ft from the goal line and the circle radius 15,
so it is **35** — and `rink_map_and_glossary.md` owns that geometry and was not named. A bare number
on an owned quantity, in the layer the podcast extracts. Replaced with a pointer to the owner.

**A claim that reached three summary layers and stopped before the body.** The D-to-D exception —
that some teams exchange above the circles rather than behind the net — was added to `defender.md`'s
facts block, Common Mistakes and Key Takeaway 4, while the body still read *"never pass D-to-D
through the slot. Go behind your own net"* above a diagram of that route. **Propagation running
backwards**: the body is the source of truth by definition, and a reader following the takeaway back
to its section found the opposite instruction. Body corrected; `passing_and_receiving.md` aligned,
because its own takeaway named a *different* one of the two permitted routes than its body gave.

**Two safety lines, one word and nine words.**

- `defensive_zone_coverage.md` had `pressure and pin` with **no object**, and the next clause
  supplies *"them"*. Read aloud — which is what the facts layer is for — that instructs pinning the
  **opponent**, which IIHF Rule 101.1 penalises (`iihf_rules_v1.1.txt:7503-7504`). It was the single
  site in the corpus where the object was dropped; six others say *"pin the puck, not the player"*.
- `zone_entries.md`'s *"one-sentence version"* — written to travel alone — taught the delay with no
  trace of the safety override its own section says *"outranks the play"*. The delay turns a
  player's back to a checker, and **neither the NHL nor the IIHF provides a minor for checking from
  behind at all** (`nhl_rules.txt:5474-5475`, `iihf_rules_v1.1.txt:3991-3992`).

**A facts block that omitted what its own heading promised.** `skating.md`'s boards section is headed
*"head up, skates parallel"* and its block contained neither, while the body carried both. A listener
got four facts about route choice and a pointer to another document. The never-duck rule and the
parallel-skates orientation are now extracted, not delegated.

**A sentence broken by an interpolation.** `center.md`'s slot paragraph had a clause inserted and
never closed, so the goalmouth assignment coordinated into the handoff clause and said something
nobody meant. Restored, with the new claim kept.

**Shot blocking, deterred by an over-broad prohibition.** `center.md`'s block said *"smother it with
your body — that is a minor penalty"* with no carve-out. **All three books protect the shot
blocker**: NHL 63.2(v) NOTE (`nhl_rules.txt:6702-6706`), IIHF 63.2(V), USA Hockey 614(a) — a player
who drops to his knees and has the puck shot under him is not penalised. The corpus teaches shot
blocking elsewhere; a bare prohibition here could deter a defensive skill. Added, with the crease
escalation to a penalty shot and the USA Hockey divergence.

### And four defects in those repairs, caught at the gate

Recorded because the pattern is the round's finding, not an aside: **a repair is where the next
defect comes from.**

- **The shot-blocker carve-out was put in the wrong block.** It went into `center.md`'s **faceoff**
  block, as three `Rule:` facts traceable to no sentence in that section, while the body bullet the
  finding actually named was left untouched. That is propagation running backwards — the same defect
  this record leads with — committed in the repair for it. Moved to the Penalty Kill section, where
  the document teaches taking a shooting lane, and the body bullet corrected.
- **The D-to-D repair stranded a relative clause.** Inserting the second route split the sentence and
  left *"where an interception means nothing"* attached to the choice, or to the above-the-circles
  route — where an interception is emphatically not nothing; it is a loose puck at the top of the
  slot. Rewritten, and the reasoning behind the variant now stated with its cost rather than as a
  reassurance.
- **The owner still called the single route a law.** `breakouts.md` — the document the others defer
  to — read *"Execution and the absolute rule: Go behind your own net. Never through the slot"*, and
  its diagram caption repeated it. After the repair, three documents said two routes and the owner
  said one. **Non-negotiable 7**, and it existed before this commit. Both now name the variant and
  label it as the coaching convention `risk_management.md` already calls it. `breakouts.md` entered
  the commit for that reason.
- **A cardinal-rule sentence was lost from prose to a facts block.**
  `defensive_zone_coverage.md`'s Overview rewrite deleted *"It is the single most system-dependent
  part of hockey, so find out which one your team plays"* and its opening definition, leaving the
  block asserting system-dependence with nothing in the body behind it. Restored.

---

## Verified and upheld

- **The ducking proposition in `zone_entries.md` — the item `OPEN_ITEMS` records as never opened.**
  Read as a proposition, not grepped as a string. **It is correct as staged.** Hockey Canada
  Interpretation 3 to Rule 7.7(a) (`hc.txt:6391-6396`) opens *"In Junior and Senior divisions"*, so
  the checker's amnesty is division-scoped; Rule 8.7 (`hc.txt:7096-7098`) prohibits crouching with
  **no division scope**, so the ducker is exposed everywhere. The scope error commit `5b82c18`
  exists to remove is **not** present here.
- **All 37 renames are anchor-safe** — `check_links.py` validates fragments, and a manual grep of
  `content/`, `project/` and `site/src` for the seven changed slugs returns nothing.
- **The shift-length attribution chain**, the 47.7 s corpus computation, the 3–4% off-puck share and
  the centre-versus-winger disclosure all still carry their qualifications where they are restated.
- **The new `Checker` note is accurate** — the opposite sense of *"your check"* was confirmed at
  twenty-plus sites across six documents, and all 33 uses of "checker" in its own document mean the
  opponent applying pressure.

---

## Carried out unfixed, with the evidence

All in [`OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md), because each needs work this commit's scope does
not cover:

- **Four verified rule-set divergences** stated as universal — faceoff encroachment (a three-way
  split, not a binary), the shorthanded-icing carve-outs, the post-icing time-out, and a quotation
  silently repaired inside quotation marks. `rules-verifier` read all four books; **the numbers are
  verified**, so the item needs writing, not researching.
- **"Walking an opponent out" is taught as universal and is not** — it displaces a stationary
  opponent without the puck, which USA Hockey's Competitive Contact standard and IIHF 101.1 do not
  permit. Scope: most North American amateurs, all British women's and girls' hockey.
- **The `owns` → `covers` sweep is ~85% done**, leaving both vocabularies live in eight files,
  including a Key Takeaway.
- **71 of the 78 rewritten ownership pointers were never checked against what they point at.**
  `review_history.md` §3.7 is why that matters — and it is not hypothetical here. `commit-gate`
  opened exactly one, because this commit added a new cross-link to it, and found the **same
  fifteen-foot error** the commit had just removed from `defender.md`'s Key Takeaway: an unowned
  *"50 feet out"* in `risk_management.md`, on the same claim, one link away. The style guide's
  warning for this is that a pointer *"makes the corpus look rigorous while hiding it: a reader who
  follows the reference arrives at the least complete treatment of the fact."* Fixed. **Seventy
  remain unopened.**

- **⚠️ Nothing in this round attacked the D-to-D exception itself.** *"Some teams exchange above the
  tops of the circles"* entered via `risk_management.md`, carries a coaching hedge and **no source**,
  and this commit propagated it into five layers of `defender.md`, a Key Takeaway of
  `passing_and_receiving.md`, and the owner document. It is correctly labelled a convention
  everywhere it now appears, so non-negotiable 3 protects it from deletion — but hedged folklore
  spreading across seven sites in a single commit is the shape `content_style_guide.md:577` names,
  and four reviewers, a rules verification and ten gate passes all checked how it was *stated* and
  none checked whether it is *true*. That is the next round's question, and it should be asked of a
  coach or a coaching source, not of the corpus.

---

## What these methods could not have found

- **Summary layers were read against bodies only where the body changed.** Nine of the eleven
  documents have Common Mistakes and Key Takeaways nobody read cold. A correction that reached a body
  in an earlier round and never reached its takeaway is invisible to this pass. **That is the next
  round's highest-value move**, and it is the round-9-to-round-10 move this one did not make.
- **Nobody looked at the pictures.** Two are new references in `passing_and_receiving.md` and a
  third, `breakout-d-to-d`, had its caption rewritten here. The specs and captions were read; no SVG
  was rendered. The geometry is untouched in all three, so the risk is lower than round 40's — but
  every defect round 34 recorded in this class was invisible to source reading.
- **`sources/` was incomplete during the review** — the sports-science extractions the style guide
  lists are not on disk, so the working-directory leg of the negative-existence check could not run
  for any claim resting on that literature.
- **No casebook.** `usah_case.txt` has never been on disk, so no official interpretation was
  checkable for any of the four rule divergences — hardest on the USA Hockey time-out negative,
  which rests on rule text alone.
- **A rule that is on the page and dead in practice reads identically to one that is live.** Every
  "confirmed" here is a confirmation of text, not of officiating.

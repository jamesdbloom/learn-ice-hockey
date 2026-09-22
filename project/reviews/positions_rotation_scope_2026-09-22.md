# The low-zone-collapse rotation, scoped across all three positions — 22 September 2026

Three agents, disjoint files (`center.md`, `defender.md`, `winger.md`), one claim:
**who covers the high slot when the centre goes to the strong-side corner.**

## The three-way diff — run by the coordinator, because no agent could run it

Both the `center.md` and the `defender.md` agent ended their reports asking for the same
thing: someone to compare the three documents' wording side by side after all three
finished. Neither could, without touching a file it did not own. CLAUDE.md's warning is
precise about why this matters — two agents writing individually-correct, mutually
contradictory sentences into one corpus, caught only by diffing afterwards.

It was run. **The result is clean**, and the agreement is verbatim, not merely substantive:

| File | Line | Operative wording |
|---|---|---|
| `positions/center.md` | 113 | `Under low zone collapse, when you leave the slot for the corner the weak-side winger covers it — call the rotation early so the slot is never empty; under man-on-man they stay with their check` |
| `positions/winger.md` | 130 | `Under low zone collapse, the centre gone into the strong-side corner — the weak-side winger collapses to the high slot until the puck leaves; under man-on-man they stay with their check` |
| `positions/defender.md` | 280 | `Under low zone collapse, puck in the strong-side corner and the centre gone to the battle — the weak-side winger collapses to the high slot; under man-on-man they stay with their check` |

The scope clause `under man-on-man they stay with their check` is **byte-identical in all
three**. The destinations differ in words only: `center.md` says the winger covers *"it"*,
meaning the slot the centre just left, and `center.md:110` independently establishes that
the centre's layer is the one outside the goalmouth — i.e. the high slot. No contradiction.

All three also carry the **exception inside the collapse** — weak-side winger already low
with their own check, so no rotation is coming (`center.md:135`, `winger.md:156`,
`defender.md:282` and `:289`).

⚠️ **What the diff does NOT establish.** It proves the three documents agree. It does not
prove they are right. The `center.md` agent flagged this itself and it is the honest
statement of the position: *"a wrong description would now be propagated identically across
three documents rather than one. That is worse, not better, if it is wrong."* The claim is
a **system description, not a rulebook claim**, so no primary text on disk settles it — see
the standing row on hybrid claims in `OPEN_ITEMS.md`.

## Two plan rows closed by this wave

### ✅ CLOSED — the `center.md` goalmouth unary (was CRITICAL, `:108`)

Was, voiced alone as the first utterance of its chunk, with no system named:

> `Never: Take the goalmouth — that belongs to the weak-side defender, and your job is the layer one further out`

Now `:110`, 199/200:

> `Never: Take the goalmouth under a low zone collapse — it is the weak-side defender's, and yours is the layer one further out; under man-on-man or a hybrid it may be yours, so ask which your team plays`

The defect was that a centre on a hybrid team **can** be the player who takes the goalmouth
(`defensive_zone_coverage.md:106`, `:311`), and the line told him never to. Repaired in
place with the 92 characters of headroom the row identified — **nothing evicted.**

### ✅ CLOSED — `center.md:23` contradicting `center.md:735` (was MAJOR)

One repair pass disagreeing with itself: `:23` had pulled the hybrid's *low* qualifier onto
pure man-on-man, which `defensive_zone_coverage.md:255-286` describes with no low/high split
at all. Both lines now carry the same clause, **byte-identical**:

> `under man-on-man — and under a hybrid of the two, which marks man-on-man low — you track one assigned opponent instead, so ask which your team plays`

## Repairs beyond the briefs

Both agents went past what they were asked, correctly, and both justified it from the
documents rather than from the brief.

- **`center.md`** repaired two flat lines at `:59` and `:63` that the brief did not name.
  The `Key:` line was the sharper defect: under a **centre fly** the weak-side winger drops
  in, so *"if you don't swing low, they are stuck with the puck"* was not merely unscoped but
  **false**, stated flatly. Also scoped `:645`, which told a listener to leave the ice first
  on *any* change rather than a group change.
- **`defender.md`** removed a false generalisation — *"the bottom two in every shape"* —
  rather than replacing it, after establishing that (a) `grep` found the claim in **no**
  document but this one, so it was never propagated from the owner, (b) the file contradicts
  it two lines later, and (c) `special_teams.md:511` confirms the diamond is one apex, two
  middle, one low, so the pair genuinely cannot both be bottom. **No true generalisation was
  available, so inventing a replacement would have been fabrication.** Non-negotiable 3 does
  not bite: this was not unsourced, it was contradicted by the document's own adjacent text.
- **`defender.md`** also scoped the four faceoff `Position:` lines — and did it by reading
  the owner, `systems/faceoffs.md:735-737`, which opens *"This entire section describes
  coaching choices, not rules of hockey"* and names its own assumed house system. It then
  **followed the owner's own remedy** (a single scoping `Convention:` in the same block)
  rather than inventing a pattern or sweeping the four lines.

## Substitution paid for scope, twice

The `center.md` agent measured it: `collapses to cover it` → `covers it` freed 14 characters,
and the word *rotation* survives in the next clause, so nothing was lost. This is the third
time substitution has been measured as cheaper than the pointer it replaces.

It also **deleted a dangling pointer** (`; two reads change that`) rather than expanding it,
having verified the very next facts line states both reads in full and is self-contained
voiced alone. ⚠️ It declared the one thing it could not verify: that a chunk boundary can
never fall between those two `<p>` elements under a different render configuration. If it
can, the reads arrive in a separate audio file from the action they qualify.

## What this wave could not have found

1. **Whether the rotation description is true.** See above — no primary source settles it,
   and it is now identical in three places.
2. **The caption layer.** Both agents flagged it; neither could reach it. A dedicated agent
   was dispatched for `site/src/diagrams/*.mjs` — see the caption row in `OPEN_ITEMS.md`.
3. **`defender.md`'s Diamond line** — which positions fill which spots — is a
   `defender.md`-only claim the owner never makes. Opened as a new row.
4. **The blocks the census cleared.** The `center.md` agent honoured the do-not-reopen list
   and did not re-read those 17 sites. ⚠️ **That clearance is worth exactly what the census
   was worth, and three of this round's censuses failed in their exclusion half.**

# The caption layer carried the claim the prose had just been repaired of — 22 September 2026

## How it was found

Three separate agents, repairing three different documents, each ended their report with a
version of the same sentence: *"I did not read the captions, and `check_caption_hosts.py`
exists precisely because a caption spoken into a document can carry the boundary the prose
now scopes."* None could reach the caption layer without touching a file it did not own.

⚠️ **The handover was the finding.** One agent was dispatched for all of
`site/src/diagrams/*.mjs` — one agent, not four, deliberately: round 59's measured failure
was four agents in that directory in one round, each brief asserting exclusive ownership.

## The defect — `winger-offensive-zone-patches`, in `positions.mjs`

Caption, spoken into `winger.md` at `:432`:

> `Leave the high slot, between the dots and the top of the circles, for the centre: two patches with two owners.`

⚠️ **This is the prose defect repaired in `winger.md` hours earlier, still live one layer down.**
Flat ownership, in the imperative, to a listener hearing the caption alone. Non-negotiable 7.

### The coordinator's premise was wrong, and the agent's refutation is the better finding

The brief flagged that this diagram is the **offensive** zone while the repaired claim was a
**defensive**-zone one, and asked whether the offensive-zone case might stand on its own
evidence. **It does not — and it fails on offensive-zone evidence, independently of
today's defensive-zone work:**

- `systems/offensive_zone_play.md` owns the zone and gives the high slot to **no position** —
  a forward supporting to form a triangle with the point (`:406`), a defenceman activated to
  the top of the circle (`:243`), the late-arriving trailer (`:754`).
- ⚠️ **The caption's own sole host says so two lines above the marker.** `winger.md:430`:
  *"gives that upper layer to no position … Which of those your team asks for is a coaching
  choice, so find out."*

**So the caption contradicted the sentence immediately above it.** This is the fourth time
today the answer was already written down in the repository.

### Repaired — one diagram id, two layers

- **caption** → `Stay out of the high slot, between the dots and the top of the circles, unless your team's structure sends you there: no position owns that layer, so find out who fills it in yours.`
- ⚠️ **`describe` carried the same flat claim** (`— it is the centre's layer.`) and was repaired
  too. **Repairing the caption alone would have fixed one layer and left the other.**

The agent wrote both itself rather than pasting the brief's sketch, keeping the *instruction*
a winger needs and dropping only the ownership assertion.

**Shared-constant check run first, as required:** the literal appears in `positions.mjs` only,
`0` in the other 32 modules — so no other caption was silently rewritten. The diagram is
embedded by exactly one document, so the new wording has one context to be true in.

## 11 of 12 were correct — and that is the result, not a failure

The other eleven built captions matching "high slot" + centre were all read in full, caption
and `describe`. All correct: the `dz-collapse-*` family names its system and its alternative
(`dz-collapse-high-slot` **already carries the exception** about a winger already low, and is
true in both its hosts); the `oz-*` family treats the high slot as a *destination* with no
owner; `rink-map-end-zone` is vocabulary labelling; `shooting-rush-wide-and-the-trailer`
explicitly disclaims position ownership.

**One left for the owner to judge — `centre-low-zone-collapse`.** Properly scoped, names the
system and the alternative, **not** edited. But it states the rotation flatly *inside* the
named system and does not carry the fourth limb of the verified position — the exception when
the weak-side winger is already low. `center.md:113` carries it. **Whether a frozen
single-frame diagram must carry an exception is a judgement the agent declined to make
unilaterally, correctly.**

## Verified after the rebuild — which is the only run that counts

`build-diagrams.mjs` was run by the coordinator with the absolute node binary (204 diagrams,
exit 0), **because `check_absolutes.py` reads the build product and any run before the rebuild
would have certified the superseded text.** The agent ran it *not at all* rather than report a
pass that meant nothing — which is the correct call.

After the rebuild: old string absent from `diagrams.json`, new caption and new `describe`
both present. `check_absolutes.py` then scanned **408 caption/describe units** and passed.

## The handed-back geometry question, settled by measurement

CLAUDE.md records a band labelled "the high slot" drawn at **660 sq ft against its owner's
210**, cutting through both faceoff circles, and notes three modules each define their own
`HIGH_SLOT`. The agent flagged that it had not checked whether that was still true.

**It was checked. Three modules do still define `HIGH_SLOT` separately** — `positions.mjs`,
`playing_without_the_puck.mjs`, `scanning_and_anticipation.mjs` — **and all three point lists
are byte-identical.** Measured against the built SVGs, all five drawn high-slot polygons are
**one single distinct region of 210.0 sq ft, 15 ft × 14 ft** — exactly the owner's figure in
`foundation/rink_map.md:320-326`.

⚠️ **The regression is repaired and has not returned.** Note the coordinator's own arithmetic
from the constants predicted 450 sq ft and was wrong; only the measurement settled it.
⚠️ **The triplication remains** — one region, three definitions, and `check_zones.py` compares
diagrams only to each other, so if one copy drifts the other two will not catch it.

## What this method could not have found

The search was a string filter — "high slot" AND "centre"/"center" — over one concept in one
vocabulary. The agent named four blind spots, and the second is the important one:

1. **A caption asserting the same ownership without either term** — *"leave that layer to the
   middle man"*, *"the inside forward's ice"*. ⚠️ **The defect is a speech act, not a keyword,
   and nothing greps for a speech act.**
2. ⚠️⚠️ **Every OTHER coaching choice stated as a law in the caption layer.** The high slot was
   searched only because the prose repair made someone think to look. Net-front assignment,
   the F3 layer, point coverage, pinch rules and wall depth are the same shape of claim and
   **none was searched. The caption layer has almost certainly never been swept for
   non-negotiable 7 as a CATEGORY rather than as a follow-up to a prose repair.**
3. **The `describe` layer.** The duplicate was found only by reading closely. A prose repair
   propagating to captions would never reach `describe`, and **no check reads it.** The other
   eleven diagrams' `describe` fields were read for this defect and no other.
4. Geometry drawn consistently wrong — now checked for the high slot specifically (above),
   unchecked for every other region.

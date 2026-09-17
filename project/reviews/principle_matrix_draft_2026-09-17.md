# Principle-to-corpus matrix — first draft, 10 documents

**Date:** 17 September 2026. **HEAD:** `babca78`. **Status:** DRAFT INPUT to
Workstream 1A, not shipped content. Nothing in `content/` was edited to
produce this — two `content-reviewer` passes read the documents and drafted
what a link *would* say; no page currently links a numbered principle to
itself except as already noted below.

**Scope:** five position documents (`goaltender.md`, `defender.md`,
`center.md`, `winger.md`, `switching_positions.md`) and five systems documents
(`defensive_zone_coverage.md`, `forechecking_systems.md`, `breakouts.md`,
`faceoffs.md`, `special_teams.md`) against the seven principles in
`content/foundation/core_principles.md`. **29 of 39 documents remain
unmatrixed** — this is a first tranche, not the release-scope matrix
Workstream 1A's acceptance condition asks for.

**Method, both agents:** read the target documents directly (not fully, in
every case — see each agent's own coverage note), read `core_principles.md`
in full, and for each of the 7 principles × 5 documents determined
Applies/Rule-dependent/Not-applicable, drafted what an application would say
(quoting or closely paraphrasing the document's own existing language rather
than inventing new content), flagged scope qualifiers, and flagged which
review dimension (`rules-verifier`, `safety-reviewer`, `facts-reviewer`,
`content-reviewer`) any eventual edit would need. Neither agent edited a
content file.

---

## Headline finding: principle 6 has a real, corpus-wide directional split, found independently by both agents

`core_principles.md` §6 ("Give the player with the puck two places to put
it") already carries one hedge — *"Defending, the instinct reverses: stay
behind the first defender rather than joining them on the same puck."* Both
agents, working independently in disjoint document sets, found a **second,
sharper, and more load-bearing** inversion that hedge does not cover:

- **`forechecking_systems.md`** — angling a puck carrier into "one bad pass
  available" (:222) and the F1/F2 seal (:146) are the forecheck **deliberately
  denying** the opponent's carrier a second option — the mirror image of
  principle 6's whole mechanism, applied to the *opponent* rather than to a
  teammate.
- **`special_teams.md`** — the power play applies principle 6 in the ordinary
  direction (:47, "a kill can cover any single option; it cannot cover
  three"); the penalty kill, in the same document, does the denying version
  (:464, "never both drift to the same side").
- **`defensive_zone_coverage.md`** — a softer instance of the same pattern:
  denial while defending (:21), handing off to the ordinary/positive direction
  the instant the puck is won (:164) — the document narrates its own hand-off,
  which is why this instance is lower-severity than the two above.
- **`goaltender.md`** — a related but distinct third shape: the goaltender's
  own "Safe Outlets" material (:585–604) has the goalie as the **option-chooser**
  (the puck carrier), not the option-provider — the opposite end of the
  relationship principle 6 is normally stated from.

⚠️ **The existing hedge covers "stay behind the first defender," which is
about supporting a teammate while defending. It does not cover "deny the
opponent's second option," which is what a forecheck angle or a penalty-kill
slide actually does.** These are different mechanisms in the same document
family, and a bare principle-6 link dropped into `forechecking_systems.md` or
`special_teams.md`'s penalty-kill section without stating which direction it
illustrates would be **actively wrong** if a pressuring player read it
literally — the instruction and its opposite would look identical in text.

**Acceptance for this finding:** `core_principles.md` §6's "A realistic
alternative" needs a second sentence, distinct from the existing defending
hedge, naming the denial direction explicitly — content-reviewer-owned, not
authored here.

---

## Second finding: principle 4 has a real, corpus-wide content gap, not just a linking gap

Both agents tested this by direct grep (`scan|look before|glance|shoulder
check|head check`), not by inference:

- **`center.md` and `defender.md` contain ZERO scanning-related language
  anywhere** in the sections read. Neither document's Related header links
  `scanning_and_anticipation.md`.
- **`winger.md`** has an adjacent-but-distinct passage (:154, :171 — reading
  who wins a puck battle, not scanning before a pass arrives) and no
  principle-4 link either.
- **`goaltender.md`** requires the mandatory timing inversion already
  established this session (never look away from a live shot; scan only
  between plays) — confirmed again independently by this pass.
- **`switching_positions.md:53` is the ONE document already doing this
  correctly** — cites Berg et al. 2025, explicitly refuses to restate the
  figures, points outward ("Do not restate them from memory. Read them
  there."). **Recommended as the model pattern for the other four.**

**Acceptance:** this is a real content gap in three documents
(`center.md`, `defender.md`, `winger.md`), not a mechanical linking task —
each needs its own scanning-relevant passage written (or an honest "not
covered here, see X" pointer) before a principle-4 link would be truthful.

---

## Third finding: two further instances of "real idea, wrong evidence population" — the same shape as the already-known goaltender/principle-4 timing issue, on different principles

1. **`goaltender.md` / principle 3.** Principle 3's evidence (Iaboni et al.
   2025 — forwards ~40s, defencemen ~49s of puck possession per 20 minutes)
   measures **skater puck possession**. A goaltender cannot legally possess
   the puck outside a narrow trapezoid exception. `goaltender.md`'s own
   parallel claim ("goaltending is not primarily about reflexes — it is about
   being in the right place," :22, :103) is a real transfer of the
   *underlying insight*, but the **numeric finding must not be imported** —
   it describes a different population.
2. **`center.md` / principle 3.** `center.md` cites a **different** study
   (Lignell 2018, skating distance) for an adjacent but distinct claim. Any
   principle-3 link must not merge the two studies.

**Acceptance:** any principle-3 application text for these two documents
states the mechanism qualitatively and does not carry a skater-possession
number onto a goaltender, or merge two different studies' figures.

---

## Fourth finding: `goaltender.md` gets NO principle-7 link — a true non-fit, not a partial one

Unlike the principle-4 case (same event, opposite direction), the boards
material in `goaltender.md` is about a **different hazard to a different
person** — a net-front opponent colliding with the **goalpost** (:1121,
:1321, KT12), not the goaltender's own body meeting the **boards**.
Goaltenders rarely engage in wall puck battles; the trapezoid confines corner
engagement to a narrow strip, and contact with the goalie near the crease is
governed by interference/charging, not boarding. **Recommended: no
principle-7 link on this page; the goalpost hazard is already correctly
cross-referenced to `body_contact_and_battles.md` §6.**

Also confirmed by grep, not assumed: **`faceoffs.md` and `special_teams.md`
get no principle-7 link** — neither document contains any boards-contact
posture content (checked for "skates parallel," "chin off," "forearm and
hip," "boards" — the last appears only in geometric/incidental contexts in
both).

---

## Fifth finding: `faceoffs.md` has a genuine principle-3 scope gap worth flagging to whoever owns `core_principles.md` (not decided here)

A faceoff is a fifth, currently-unnamed case relative to principle 3's four
off-puck states (team has it / they have it / loose / just changed) — the
moment immediately *before* one of those four states begins, puck not yet
live. This is reported as an open observation about `core_principles.md`
itself, not acted on — neither agent was permitted to reopen that file this
round, since it had a separate, just-completed source-verification pass.

---

## Full matrix, condensed — Applies (A) / Rule-dependent (R) / Not applicable (N) / Gap (G)

| Document | P1 | P2 | P3 | P4 | P5 | P6 | P7 |
|---|---|---|---|---|---|---|---|
| `goaltender.md` | A (goalie-coach scope note) | A — heaviest fit | A (qualitative only, exclude stat) | A — **mandatory timing inversion** | A (mechanism restated) | A — **subject-position inverted** | **N — true non-fit** |
| `defender.md` | A | A | A — cleanest fit (49s figure matches exactly) | **G — zero scanning content** | A | A | A — near-verbatim, cleanest of five |
| `center.md` | A | A | A (different study — Lignell) | **G — zero scanning content** | A | A | Unconfirmed — not fully read |
| `winger.md` | A | A | A (secondary) | Partial — adjacent skill exists, not linked | A | A | A — near-verbatim |
| `switching_positions.md` | A — already states it verbatim, unprompted | A (two distinct ideas coexist) | Not found in sections read — re-check | **Model instance — already correct** | Unconfirmed — not fully read | A (secondary) | A — explicit, non-negotiable framing |
| `defensive_zone_coverage.md` | A — is the plan's own worked example | R — dense | A | A (mechanism: prep to distribute, not receive) | A (shot-danger vs. turnover-cost nuance) | A — **direction-flips mid-document**, self-narrated | A — strongest sourced transfer |
| `forechecking_systems.md` | A — strongest candidate of all ten | R — dense, active revision area | A | Weak/indirect — do not force | A | **A — INVERTS, must be flagged explicitly** | A |
| `breakouts.md` | A | R — dense | A | **A — best-fit candidate of all ten; not currently linked from `core_principles.md` §4** | A | A — clearest non-inverted positive match | A |
| `faceoffs.md` | A (two sections only, not page-wide) | R — flags its own currency gap (2026/27 edition) | A, with a scope-gap worth flagging (see Fifth finding) | A, but **only to the pre-drop scouting half** — not the moment of the drop itself | A | **N — recommend no link** | **N — confirmed no fit by grep** |
| `special_teams.md` | A | R — dense, recently-corrected area | A (thin, generic) | **N — confirmed no fit by grep** | A | **A both directions — PP positive, PK inverted** | **N — confirmed no fit by grep** |

---

## What ships next, and what does not

**Not shipped, and should not be, without further work:**

- Any principle link into any of these ten pages. This matrix is input, not
  the linked page.
- Any principle-2 link anywhere without `rules-verifier` re-checking the
  specific sentence proposed — every document above is flagged for this, and
  `faceoffs.md`/`special_teams.md` both sit in areas already corrected once
  this session.
- Any principle-7 link anywhere without `safety-reviewer` sign-off, per
  standing project convention for contact-injury text.
- The principle-3 numeric material for `goaltender.md` and `center.md`
  without `facts-reviewer` confirming no cross-study merge.

**Reasonably actionable next, in priority order:**

1. `core_principles.md` §6's realistic-alternative hedge needs a second,
   sharper sentence for the denial direction (content-reviewer).
2. Three documents (`center.md`, `defender.md`, `winger.md`) have a genuine
   principle-4 content gap, not just a missing link — each needs its own
   scanning-relevant passage or an honest pointer, modelled on
   `switching_positions.md:53`'s already-correct pattern.
3. The remaining 29 documents still need this same matrix pass.
4. The transfer audit requirement ("at least three contexts, including a
   position, a system, and a technique/Hockey-IQ document") is only
   half-satisfied by this tranche — no technique or Hockey-IQ document has
   been matrixed yet.

## What this method could not have found

Both agents sampled rather than read every target document in full — see
each one's own coverage note, preserved in the task transcripts this record
summarises. Neither agent opened the *owner* documents a position/system page
cites for a principle (`scanning_and_anticipation.md`, `risk_management.md`,
`puck_support_and_spacing.md`, `playing_without_the_puck.md`) — the citations
were checked for internal consistency against `core_principles.md`'s own
(separately source-verified) Sources trailer, not independently re-opened. A
document teaching a principle's substance in unfamiliar vocabulary, with no
match to either agent's grep terms, is invisible to this method entirely. No
diagram, no rendered page, and no audio was checked. Neither pass constitutes
`rules-verifier`, `safety-reviewer`, or `facts-reviewer` clearance of anything
quoted — every quotation here is evidence for what the source document
already says, not an independent re-verification of it.

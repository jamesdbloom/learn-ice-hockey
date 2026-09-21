# Caption safety/rule-scope routing, and a four-round propagation gap it surfaced

## Scope

```
content/systems/game_management.md
```

## 1. Caption safety/rule-scope routing — investigated, mostly already closed, one real gap found and fixed

`READABILITY_AND_DUAL_AUDIENCE.md`'s "Open threads" flagged this as open-ended, not a fixed checklist
— `project/reviews/round_77_the_caption_could_not_be_shortened.md` had named four specific blocks
still duplicated across captions with no home in body prose, fixing only one as proof of method. An
investigation traced all four against the corpus's current state:

1. **Charging-rule block** (`defender-step-up`) — already routed. No action needed.
2. **Four-book rule enumeration** (`forecheck-122`/`-131`/`-pinch`/`-press`) — routed in its owner
   (`forechecking_systems.md`) and independently in `game_management.md`. One host,
   `how_to_watch_hockey.md`, explicitly and honestly declines to teach the rule, naming
   `forechecking_systems.md` as the correct owner instead — a disclosed design choice, not a silent
   gap. Not force-fixed; flagged below as a policy question.
3. **Shared receiving-posture tail** (`forecheck-pinch`/`forecheck-press`) — routed in the owner but
   genuinely missing from `game_management.md`, which hosts `forecheck-pinch` and had zero occurrence
   of the caveat anywhere in the document. **This was the real, confirmed gap.**
4. **Shared hedge constant** (`PINCH_CAVEATS`) — adequately covered in `defender.md`/`risk_management.md`;
   `game_management.md` was missing the specific "who covers the point" limb, fixed in the same edit
   as #3 below.

## 2. The fix, and the four-round propagation saga it triggered

**Round 1**: added the receiving-posture caveat and the "who covers the point" coaching-choice note to
`game_management.md`'s "Pinching defencemen" body-prose item (line 222).

**Round 2** (independent `safety-reviewer`): found a Critical — the section's own `​```facts​``` block
(lines 205-214) had no version of the caveat at all, even though facts blocks are designed to be
consumed standalone. Fixed: added matching `Never:`/`Technique:` lines (lines 210-211), reusing
`forechecking_systems.md:527-528`'s already-verified wording exactly, confirmed at 8 non-`Rule:` facts
(at, not over, `MAX_COACHING_FACTS`).

**Round 2, separately** (independent `rules-verifier`): found the body's cross-reference
("[Forechecking Systems] sets out... what your rulebook allows once you arrive") didn't actually cover
boarding — the rule most directly relevant to a player driven into the wall. `forechecking_systems.md`'s
linked section covers body-position, checking-from-behind and late-hit rules, but not boarding. Fixed:
added a second cross-reference to `body_contact_and_battles.md` §5 ("Boarding, and the player who
cannot see you coming"), matching an established corpus-wide pattern (22 other instances of the same
`§N` bare-reference style, confirmed genuine and not invented for this fix) rather than a deep anchor.
Both citations independently re-verified against primary source (NHL 41.1, IIHF 41.1, Hockey Canada
7.2, USA Hockey 603) — all match verbatim.

**Round 3** (independent `safety-reviewer`'s own required omission pass): found the SAME caveat, now
present in body and facts, was still absent from both of this document's summary layers — Common
Mistakes and Key Takeaways — a real, independent consumption path this project's site/podcast pipeline
creates. Fixed: added a Common Mistakes bullet (line 1092) and a Key Takeaways item (line 1154),
reusing the same wording and cross-references already verified in body/facts.

**Round 4**: the fix agent's own report claimed an "independent safety-reviewer" had already confirmed
Round 3's fix — but that review happened inside the same dispatch as the fix itself, which does not
satisfy this project's "the reviewer must not be the author" rule. A genuinely fresh,
coordinator-dispatched `safety-reviewer` was sent to re-check from scratch, reading the whole 1,181-line
document independently rather than trusting any prior report's line numbers or quotes. **Confirmed
closed**: all four layers now agree verbatim on the prohibition, the technique, and the scope
("in every league, checking or not"), each reads correctly in isolation, and the cross-references are
the same already-verified ones, not new unverified additions.

## New item surfaced, not fixed here

The Round 4 reviewer's own omission pass found a **second, unrelated Major** in the same document: the
late-hit hazard ("finishing your check" on a player who has already passed or shot) is taught
extensively in body prose, facts blocks, and Key Takeaways (items 12-15, quoting USA Hockey's
*Declaration of Player Safety*), but has no dedicated Common Mistakes bullet — the nearest bullet
("Going looking for a hit before finding out whether you may throw one") explicitly defers the
late-hit question rather than answering it. Logged in `OPEN_ITEMS.md` as a new open item; not fixed in
this pass, since it's a distinct hazard from what this wave was dispatched to fix and forcing it in now
would be exactly the kind of unbounded scope creep this project's own "open-ended, not a checklist"
framing warns against.

## Dimension coverage (C3)

**D1-D3** — CHECKED: both new/adjusted citations (boarding, checking-from-behind, late-hit) verified
against primary source directly by an independent `rules-verifier` pass (NHL, IIHF, Hockey Canada, USA
Hockey all checked). **D6** — CHECKED: the "who covers the point" coaching-choice framing correctly
names alternatives and defers to the reader's own team, no cardinal-rule violation. **D9** — CHECKED,
extensively — this whole wave is a propagation exercise, confirmed complete across all four layers by
an independent final pass. **D11** — CHECKED via three separate independent `safety-reviewer`
dispatches (Round 2's facts-block check, Round 3's omission pass, Round 4's genuinely-fresh
re-verification). **D14** — CHECKED via `check_links.py`, clean throughout, including the
`body_contact_and_battles.md` document-level link (though see the worklist note below on the `§N`
plain-text reference specifically). Everything else — OUT OF SCOPE.

## A worklist-level gap surfaced, not blocking

An independent `rules-verifier` pass found that `check_links.py` validates the *document* half of a
`[Body Contact and Battles](../technique/body_contact_and_battles.md), §5` reference but has no way to
check the `§5` plain-text half — if that document's section numbering ever shifts, any of the 13
existing corpus-wide uses of this pattern could go stale silently with nothing catching it. Not a
defect in this fix (the pattern is genuine, established house style, correctly reused), but a real gap
in the mechanical safety net, logged in `OPEN_ITEMS.md`.

## What this record could not have found

No reviewer in this chain re-verified every other rule jointly discussed by `game_management.md`,
`forechecking_systems.md`, and `body_contact_and_battles.md` beyond boarding, checking-from-behind, and
late hits specifically — only the ones directly relevant to a player driven into the wall. Nobody
checked the diagram-caption layer (`site/src/data/diagrams.json`) for the `pinch-centre-high`,
`pinch-centre-below-the-goal-line`, or `forecheck-pinch` diagrams themselves, a fifth exposure surface
this project's `check_caption_hosts.py` treats as real. No reviewer audited every hedge in
`game_management.md`'s full ~1,181 lines against all four layers exhaustively — the late-hit Common
Mistakes gap was found incidentally, not by a systematic sweep, so another instance of the same defect
shape could still exist uncaught elsewhere in this document or others.

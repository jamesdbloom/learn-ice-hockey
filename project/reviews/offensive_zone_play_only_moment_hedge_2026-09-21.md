# `offensive_zone_play.md`'s unhedged "only moment in the game" claim, closed

## Scope

```
content/systems/offensive_zone_play.md
```

## What closed

Found as a side effect of this session's `faceoffs.md` opening-paragraph review: `faceoffs.md` carried
an unhedged "only moment in the game" superlative that an independent content-reviewer flagged as
exactly the unsourced-superlative folklore shape this corpus's style guide names by example (the
"centre covers more ice than any other position" case). That claim was hedged and fixed (commit
`c216af7`). This document (`offensive_zone_play.md:1006`) carried a structurally identical, unrelated
claim about a different property of the same event (arranging all five players, rather than knowing
puck location) and was out of that task's file scope — logged to `OPEN_ITEMS.md` as its own item.

**Fix**: the opening sentence of "## 12. Offensive-Zone Faceoffs" —

> "An offensive-zone faceoff is the only moment in the game where you get to arrange all five players
> exactly where you want them, with the puck about to arrive at a known place."

— was reworded to soften the bare superlative and attach an explicit hedge, matching this document's
own established idiom (found at line 334: *"a coaching judgement, not a measured one; no source here
ranks..."*) rather than importing `faceoffs.md`'s different phrasing:

> "An offensive-zone faceoff is as close as the game gets to a moment where you can arrange all five
> players exactly where you want them, with the puck about to arrive at a known place — **a coaching
> judgement, not a measured claim; no source here catalogues every dead-puck moment in the game.**"

No substantive teaching content was removed — the tactical point (a faceoff is a rare, controlled setup
worth exploiting) survives; only the unhedged absolute framing changed.

## Independent review

Fresh content-reviewer dispatch (not the fixing agent) confirmed:
- The hedge idiom genuinely matches an existing precedent in this same document (line 334, quoted
  verbatim above) rather than being invented or borrowed wholesale from `faceoffs.md`.
- No other content in the sentence or surrounding paragraph was altered — confirmed via `git diff`,
  a single hunk, one line.
- The disclosure ("no source here catalogues every dead-puck moment in the game") was checked against
  this document's own Sources trailer and a working-tree grep for "dead-puck" — no contradicting source
  found; disclosure upheld.
- No Critical or Major findings.

**Two Minor notes, recorded but not blocking:**
1. **A convention question, not a defect**: this document rewrote "the only moment" to a softened
   comparative ("as close as the game gets to a moment"), while `faceoffs.md`'s parallel fix (same
   session, commit `c216af7`) kept the bare word "only" and hedged only the trailing precision clause.
   Both are internally defensible, but the corpus now has two different remediation patterns for the
   same defect shape in two documents written days apart. Worth a standing style-guide note next time
   this pattern recurs, not worth relitigating either already-committed fix.
2. **Mild word repetition**: the edited sentence and the one immediately after it both use
   "close"/"closest" as their comparator ("as close as the game gets to a moment... It is the closest
   hockey gets to a free kick..."). Not confusing or incorrect, a polish item only.

Also noted, pre-existing and not introduced by this diff: the hedge's wider comparison class ("every
dead-puck moment in the game") doesn't address the narrower point that *any* faceoff — not just an
offensive-zone one — shares the "known puck location, time to set up" property the sentence claims as
distinctive. This looseness predates this edit (the original "only moment in the game" had the
identical issue) and is not made worse by it; left as-is rather than opening a new, unscoped rewrite.

## Verification

- `python3 scripts/check_links.py --quiet` — clean.
- `python3 scripts/check_facts.py` — 26 documents, 845 blocks, 5700 facts, all conform.
- `python3 scripts/check_absolutes.py` — 39 documents + 408 diagram units, no unscoped absolute
  denials or penalty-tier caps.

## Dimension coverage

Per `project/review_process.md` Part 3: this diff touches no rule citation, no technique/contact/
equipment content, and no numeric fact — `rules-verifier`, `safety-reviewer`, and `source-verifier`
were not dispatched, consistent with every reviewer who read the diff confirming it's a pure
house-style/wording change. C1/C9 confirmed via the mechanical checkers above. C6 satisfied by the
fresh, independent content-reviewer dispatch documented above.

## What this method could not have found

Whether this paragraph renders correctly through the TTS pipeline (the bolded hedge clause read as
inline emphasis rather than an odd pause) — not checked in this session. Whether any other document
besides `faceoffs.md` and this one carries a similar unhedged "only moment"-shaped claim about a
different event entirely — only a targeted grep for this exact phrase was run, not a corpus-wide
superlative sweep. Whether the corpus should standardize on one of the two remediation conventions
noted above (soften the word vs. hedge only the trailing clause) — a style-guide decision for whoever
next hits this pattern, not adjudicated here.

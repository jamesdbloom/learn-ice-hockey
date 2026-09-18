# `on_ice_communication` podcast episode — NO-GO, 18 September 2026

**Verdict: NO-GO.** Third document in the same validation batch as
[`rink_map`](rink_map_podcast_retry_no_go_2026-09-18.md) and
[`core_principles`](core_principles_podcast_retry_no_go_2026-09-18.md). This
was the first attempt at this specific document (not a retry), generated
under the fixed prompt. **Result: the third confirmed NO-GO out of three, and
the first to surface a new, more dangerous variant of the underlying
pattern.**

## Confirmed: the named injury-response segment fabrication did not reappear

Both reviewers grepped the transcript for concussion/injury-response
vocabulary independently; zero hits. The episode's title, "How specific calls
save your neck," is not a sign of injury-content bleed-through — it refers to
content genuinely in the source (the "man on" boards-safety override).

## New and more serious: an invented medical/biomechanical mechanism, stripping the source's own evidentiary hedge, on the corpus's single most safety-critical claim

The source states, carefully: *"USA Hockey's Heads Up Hockey guide, restating
research by Charles Tator and colleagues, has it that almost all on-ice
cervical spine injuries have come from the head being slightly flexed while
making head-on contact with the boards or goal post"* — and its own Sources
trailer adds the hedge that this is a restatement of a single small, unread,
unquantified case report (six patients, one unit, 1974–1981), not a
finding the corpus has itself verified.

The transcript instead states: *"the impact causes axial loading. The force
compresses the spine directly down its axis and because the natural curve of
the neck has been removed by ducking your chin, the vertebrae cannot absorb
the shock."* Neither "axial loading" nor "the vertebrae cannot absorb the
shock" appears anywhere in the source, which was NotebookLM's only document
for this episode. The practical instruction survives correctly (skates
parallel, forearm and hip, head up, chin off chest) — this is not a change to
what a listener does — but the episode manufactures confident-sounding
invented physiology, and drops the source's own careful hedge about how thin
the underlying evidence actually is, exactly where the corpus is most
deliberately careful.

This is a new shape, not one of the three constraint-9 patterns: not a
wholesale invented segment on a topic absent from the source, but an invented
*mechanism* layered onto real content that genuinely is in the source. The
existing "do not add a fact not traceable to the source" framing did not
catch it, because the topic itself is legitimate — only the specific
biomechanical vocabulary is fabricated.

## Other confirmed fabrications (Major)

- Invented statistics with no basis in the source: a forechecker's closing
  speed ("20 miles an hour"), a bench-gap shooting geometry ("15 feet wide
  and four feet high... from 80 feet away"), a weight-differential framing
  ("40 pounds"), and a claim that a specific helmet style "cuts off
  peripheral vision."
- An IIHF rule (55.1, stick lifts) stated as settled when the source
  explicitly flags an unresolved internal tension in the rule's own wording.
- Unsourced real-player anecdote (Connor McDavid, Sidney Crosby) — lower
  stakes than the `rink_map` retry's Brodeur fabrication, but the same shape.

## What held up correctly

The England/Wales trapezoid suspension was stated as genuinely unsettled,
not settled — the exact regression `rink_map`'s retry showed on the identical
rule did not recur here. The IIHF edition citation (2025/26 v1.1, with the
real 2026/27 risk named separately) was stated correctly. The "man on" safety
override itself, and the walking-a-screener-out interference rule, were
carried completely and accurately.

## Disposition

- `foundation/on_ice_communication` set to `blocked`, failure count 1 (first
  attempt at this document).
- **Three for three NO-GO across this validation batch.** Every document
  tested under the fixed prompt failed, for overlapping but not identical
  reasons, and one produced a new failure mode (invented medical certainty)
  the existing constraint language does not name. See
  [`PODCAST_AUTOMATION_LOCAL.md`](../plans/PODCAST_AUTOMATION_LOCAL.md) for
  the consolidated conclusion and the decision this forces.

## What this record could not establish

Whether any further prompt-wording iteration can close the underlying
behavior, or whether it is inherent to NotebookLM's Long/Deep-dive generation
mode regardless of instruction — this is the same open question the
`rink_map` retry record left, now with a third data point that does not
resolve it either way.

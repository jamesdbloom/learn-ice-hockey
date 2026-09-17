# `language_and_glossary` podcast episode — NO-GO, 17-18 September 2026

**Verdict: NO-GO for public use.** Not accepted. `.podcast_queue/state.json` records
`foundation/language_and_glossary` as `blocked`, failure count 1.

Third episode generated in the initial batch, same three-source method as
[`core_principles_podcast_no_go_2026-09-17.md`](core_principles_podcast_no_go_2026-09-17.md)
and [`rink_map_podcast_no_go_2026-09-17.md`](rink_map_podcast_no_go_2026-09-17.md).
Same outcome, from two independent reviewers.

## This is now conclusive: a pipeline property, not a content-specific accident

Three episodes, three unrelated source documents (seven teaching principles;
rink geometry and vocabulary; hockey terminology and positional glossary),
three independent NotebookLM generations, three independent review passes —
and the **identical fabricated concussion/spinal-injury segment** appears in
all three, each time attributed to the source material ("the texts," "the
instructional corpus we are using," "our source guide"), each time on a
document that says nothing at all on the topic. `language_and_glossary.md`
has zero occurrences of "concussion," "spinal," or "self-protection" —
confirmed by direct grep. This episode's version is worse than the first
two: the fabricated segment is stated once in the narrative *and* repeated
in the closing Key Takeaways summary, reaching the listener twice.

The fabrication also collapses two of this corpus's deliberately separate,
opposite-first-action protocols into one dangerous instruction: a suspected
**spinal injury** (`body_contact_and_battles.md:25`) requires "nobody moves,
somebody phones… do not help them up," while a suspected **concussion**
(`:850`) requires "off the ice, no return that day." The fabricated
instruction — "you come off the ice immediately" for either — is the wrong
first action for the more urgent case.

## Other fabrications, this episode's own

- **A third invented IIHF version-history narrative** — new fake dates again
  ("version 1.0, published May 2025… version 1.1… published July 2025… a two
  month gap"), contradicted by the document's own sources trailer, which
  cross-checked v1.0, v1.1 and 2026/27 for the specific rules it cites and
  states no such gap or narrative.
- **A false claim about British geographic scope.** States the In-House
  Rules apply across "England, Scotland, and the British Universities Ice
  Hockey Association," dropping two of the four Home Countries the source
  actually names (Wales, Northern Ireland) and miscategorising BUIHA — a
  university sporting body — as if it were a fourth geographic region.
- **An invented dramatic pre-hybrid-icing injury narrative**, including a
  fabricated "150 feet" race distance and an "unsustainable injury toll"
  causal story, where the source explicitly labels the underlying dates as
  merely "unconfirmed," not the basis for a dramatized history.
- **An invented statistic** — "95% of amateur players" — with no population
  figure of any kind in the source, and which also drops the "at the
  option of the Member" qualifier for Hockey Canada's Senior category.
- **Invented illustrative numbers** dressed as fact — "a 200 pound player
  hitting them at 20 miles an hour" — attached to a safety-adjacent point
  about goaltender equipment, with no such figures anywhere in the source.

## Real exceptions dropped or misstated

- USA Hockey's checking-eligibility age/classification bands stated as a
  complete, confident rule with no mention that the IIHF/British answer is
  categorically different (no age threshold in the rulebook at all — the
  corpus treats this as the single most important gap in the topic) — though
  a later summary line does correctly hedge "check your local league rules."
- The NHL/IIHF delayed-offside own-goal exception stated as universally
  absent ("a unified absolute across every single rule book"), when the
  source explicitly says the books split — NHL/IIHF carry a narrow
  exception, USA Hockey does not.
- Hockey Canada's faceoff stick-down-first rule stated as having no
  exception ("at every single face off dot on the ice, period"), dropping
  the source's documented "unless it does not cause a problem" home-player
  carve-out.
- The USA Hockey crease-contact carve-outs stated incompletely (two of three
  reasons given, the goalkeeper-out-of-area exception dropped).
- USA Hockey's tip-in ceiling stated without the "directly" qualifier the
  source flags as a real NHL/USA Hockey distinction.

## What held up

Both reviewers found a substantial majority of the document's core content —
the high/low and strong/weak-side relativity vocabulary, F1/F2/F3 as
order-of-arrival roles, the half-wall/point power-play exception, hybrid
icing's actual mechanic (correctly avoiding the "race to the dot" trap this
corpus specifically warns against), the goaltender-never-fair-game framing
across all four books, and the cross-checking-is-never-legal-to-clear-a-screen
safety point — were all carried faithfully, with no added exception and no
softened caveat on anything the episode did correctly state.

## Standing conclusion, now closed rather than open

The two prior NO-GO records asked whether this was a one-off or a pattern.
It is conclusively the latter: **three independent generations, on three
unrelated documents, produced the same specific dangerous fabrication.**
This is a property of NotebookLM's Long/Deep-dive generation as driven by
this pipeline, not something the source content or the prompt wording caused
incidentally. Every future episode needs the same mandatory two-reviewer
pass — this finding removes any remaining doubt about that — and a targeted
mitigation (naming this exact fabrication shape explicitly in the overriding
constraints source, rather than relying on the general "do not invent" and
"point, don't reconstruct" language already tried) is being attempted before
any further batch, tested on a small run before scaling to the full
10-parallel batch the user has asked for.

## Disposition

- `foundation/language_and_glossary`: `blocked`, failure count 1. Master
  audio kept at `podcasts/Foundation/Language and Glossary.m4a` (not
  published, not in `podcasts_web/`, not in the site manifest).
- User decision, 18 September 2026: given this pattern, regenerate the
  entire 39-document catalog (not just the 3 originally missing), under the
  same mandatory review, with the option of up to 10 parallel generations
  running at once. All 37 non-excluded documents are now queued.
- A targeted anti-fabrication addendum to the constraints source is being
  added and tested on a smaller run before the full 10-parallel batch
  proceeds, to avoid multiplying a now-confirmed failure mode tenfold
  before checking whether it helps at all.

## What this record could not establish

Whether naming the fabrication shape explicitly in the constraints
("do not add a concluding safety/injury-response segment unless it is
literally present in the source you were given") actually reduces its
occurrence, or whether this is inherent enough to the generator that no
prompt-level mitigation will work reliably. Not yet tested.

# `rink_map` podcast episode — NO-GO, 17 September 2026

**Verdict: NO-GO for public use.** Not accepted. `.podcast_queue/state.json` records
`foundation/rink_map` as `blocked`, failure count 1.

Second episode generated in the same batch as `core_principles` (see
[`core_principles_podcast_no_go_2026-09-17.md`](core_principles_podcast_no_go_2026-09-17.md)),
same method, same three-source pattern (live site page, full-text overriding
constraints source, full-text teaching-style source). Same outcome: two
independent reviewers, `rules-verifier` and `safety-reviewer`, each returned
NO-GO without seeing the other's report.

## Why this episode matters more than the first

It reproduces the **identical fabrication shape** the first episode produced,
on a document with almost no thematic overlap (rink geometry and vocabulary
vs. seven teaching principles). That repetition is the important finding: this
is not one unlucky generation, it is a property of the method.

## The repeated fabrication

Both reviewers independently found, in near-identical terms, a wholesale
invented "self-protection" and "injury response" segment — head-up, don't turn
your back to the boards, how to block a shot, concussion red flags, suspected
spinal injury handling — **attributed explicitly to "the instructional corpus
we are using,"** when `content/foundation/rink_map.md` contains zero mentions
of any of it (`grep -n -i "concussion|spinal|self.protect|head down|drop to
block|slap shot|turn.*back.*board|injury response"` — zero matches). This is
word-for-word the same failure class as `core_principles`' fabricated injury
protocol, generated independently, in a different notebook, from different
source content. The generator appears to reliably reach for this exact kind of
content — plausible, real hockey safety advice — and asserts it as sourced
when the specific document in front of it never raises the topic.

## Other fabrications, this episode's own

- **Invented IIHF version-provenance narrative, again** — a different set of
  fake specifics this time ("version 1.0 from May 2025," "Britain adopted
  version 1.0... published in July 2025") but the same shape as the first
  episode's invented version-gap story, and again contradicted by the
  document's own sources trailer, which dates its citations from 2026 reads
  and correctly states Britain runs v1.1.
- **A false Northern Ireland exclusion.** The episode states the guide "does
  not establish the rules for Northern Ireland," when `rink_map.md:55`
  explicitly includes it: *"the Elite League, the NIHL, recreational and
  junior hockey across England, Wales, Scotland and Northern Ireland... runs
  on the IIHF Rule Book."* (Northern Ireland genuinely is excluded from
  `uk_rules.md`'s treatment elsewhere in the corpus — the generator appears to
  have imported a true fact about a sibling document and asserted it, falsely,
  of this one.)
- **An invented rink dimension** — "a tight five foot squeeze" for a shrunken
  goal-line-to-boards distance, with no basis anywhere in the source (whose
  only comparator in that dimension runs the other way: the IIHF's is *deeper*
  than the NHL's, not shallower).
- **An invented rule.** The episode states the NHL and IIHF "judge their
  centre ice restriction based on where the puck is," and uses this fictional
  rule to license an invented legal maneuver for an NHL goaltender. The
  source's actual puck-vs-skates test (NHL 27.7/IIHF 27.6) governs the
  **trapezoid**, a different rule about the area behind the net — the NHL and
  IIHF have no centre-red-line rule for goaltenders at all; that restriction
  belongs only to USA Hockey and Hockey Canada. The episode manufactured a
  false parallel between two structurally different rules.
- **A genuinely unsettled question stated as settled, and over-broadened.**
  The source is explicit that whether the trapezoid is suspended in England is
  *"genuinely unsettled"* and says "ask your league." The episode states it as
  settled fact for England, then broadens the claim to "Britain" as a whole.
- **An overstated penalty.** "Automatic major penalty" for USA Hockey
  privileged-area contact, when the source (quoting Rule 607(c) directly)
  gives a referee's graduated choice between two tiers.
- **Dropped open-list exceptions** on USA Hockey/Hockey Canada checking-age
  rules that the source explicitly flags with a warning icon as incomplete if
  read as a closed list — carried correctly for the British leagues in the
  same episode, dropped for the North American ones.

## What held up

Both reviewers found the bulk of the document's core factual content —
NHL/IIHF/British rink dimensions, the trapezoid's current (non-stale)
dimensions and its real exceptions, the crease-line-status four-book
comparison, the trail-skate offside split, the goaltender-never-fair-game
framing, the hold-your-ground book divergence, and most of the population
statistics with their qualifiers — was carried accurately. The fabrications
are not a general failure of comprehension; they are additions and confident
substitutions layered on top of an otherwise largely faithful rendering.

## Standing conclusion, now confirmed rather than hypothesized

`core_principles_podcast_no_go_2026-09-17.md` said this pipeline's episodes
need a mandatory two-reviewer pass "regardless of how carefully the
generation prompt is written." This episode confirms it: the same specific
fabrication (an invented safety-content segment with a false provenance
claim) recurred across two independent generations. **No episode from this
pipeline should be accepted on the strength of a clean-sounding transcript or
a spot-check — the full two-reviewer read against the actual source document
is required every time**, and the recurring shape (invented provenance
narratives; invented rules that sound structurally plausible; safety content
invented and falsely sourced) is now a named pattern to check for
specifically in future reviews, not just a general caution.

## Disposition

- `foundation/rink_map`: `blocked`, failure count 1. Master audio kept at
  `podcasts/Foundation/Rink Map.m4a` (not published, not in `podcasts_web/`,
  not in the site manifest).
- `foundation/language_and_glossary`, the third episode in this batch, is
  still pending review as of this record.
- Decision on how to proceed with the podcast automation generally remains
  with the user, raised directly after the first episode's finding and not
  yet answered.

## What this record could not establish

Whether the fabricated safety segment is a NotebookLM behavior specific to
being told (via the overriding constraints source) that safety material is
paramount — i.e., whether the emphasis itself primes the generator to invent
safety content it judges the episode "should" have — or whether it would
invent equally confidently on a completely unrelated topic. Not testable
without a control run using a materially different constraints framing, which
has not been attempted.

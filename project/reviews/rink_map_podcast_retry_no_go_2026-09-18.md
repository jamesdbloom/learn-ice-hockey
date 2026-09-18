# `rink_map` podcast retry (v2) — NO-GO, 18 September 2026

**Verdict: NO-GO.** This is the first validation result for the fixed
`.claude/skills/notebooklm-episode/prompt_constraints.md` (corrected IIHF-edition
claim + new constraint 9 naming three confirmed fabrication patterns from
[the first `rink_map` NO-GO](rink_map_podcast_no_go_2026-09-17.md)). Two
independent reviewers (`rules-verifier`, `safety-reviewer`) ran on the retry's
transcript. **The fix worked narrowly, on exactly what it named, and did not
work broadly.**

## What the fix demonstrably fixed

- **The fabricated concussion/spinal "self-protection and injury response"
  segment did not reappear**, in any form, in any of the three prior-attempt
  documents' retries reviewed so far. Both reviewers confirm this
  independently by direct grep of the transcript.
- **The fabricated IIHF version-history narrative (fake v1.0/v1.1 dates) did
  not reappear.** The retry simply doesn't discuss editions at all, which
  avoids the fabrication by omission rather than by correctly stating the
  fixed constraint — worth noting as a shallow rather than deep fix, but it
  is genuinely absent.

## A correction to the record: the first NO-GO's own rules-verification was wrong on one point

`rules-verifier` re-checked the first NO-GO's "invented NHL/IIHF centre-ice
restriction" finding against primary rulebook text directly (`sources/nhl_rules.txt`,
`sources/iihf_rules_v1.1.txt`, `sources/hc.txt`, `sources/usah_casebook.txt`)
and found **the rule is real**: NHL 27.7 / IIHF 27.6 genuinely restrict a
goaltender at the centre red line, judged on puck position — contrasted with
Hockey Canada 4.13(c) and USA Hockey 407(c), which judge the identical
scenario on skate position. This retry states that comparison accurately,
matching Hockey Canada's own published casebook illustration (Situation 13)
almost exactly. The first NO-GO record's characterization of this as a
fabricated "false parallel between two structurally different rules" was
itself unverified against primary text and is retracted here.

⚠️ **This is exactly the "refute the brief" failure mode `CLAUDE.md` warns
about, reproduced inside a review record rather than a coordinator's brief** —
a claim in a prior finding was carried forward and trusted (by
`safety-reviewer` on this retry, echoing the first NO-GO) without the
independent primary-source check that would have caught it. `rules-verifier`
caught it this time by grepping the rulebooks directly rather than trusting
the source document's framing or the prior record's conclusion.

## Confirmed real defects in the retry (both reviewers independently)

**1. A wholly new fabrication: an invented four-book faceoff-encroachment
comparison.** The transcript states NHL/IIHF permit skate-line contact at the
hash marks, Hockey Canada is stricter (any touch is encroachment), and USA
Hockey is strictest (skates and sticks fully clear). `content/foundation/rink_map.md`
contains exactly one sentence on encroachment (NHL Rule 76.7(ii) only, no
cross-book comparison at all — confirmed by grep, one hit). Both reviewers
independently flagged this as invented content with no basis in the source,
found completely outside the three named patterns in constraint 9.

**2. A reproduced defect, softer wording but same substance: the
England/Wales trapezoid suspension stated as settled and over-broadened.**
The source is explicit and repeated three times (body, Common Mistakes, Key
Takeaways) that whether England Ice Hockey's Rule 22.3 suspension of the
restricted area also covers SIHA/BUIHA hockey is **"genuinely unsettled"** and
instructs "ask your league." The retry states it as settled fact and
generalizes to "British goalies" as a class — the identical failure shape the
first NO-GO named for this same document, recurring after the fix.

**3. An invented historical/causal narrative naming a real person:** the
retry attributes the trapezoid's creation to Martin Brodeur specifically
becoming "so incredibly skilled at stickhandling" that he "acted like a third
defenceman," with the NHL responding directly to him. `rink_map.md` contains
zero mentions of Brodeur or a third-defenceman narrative anywhere. This is
plausible, specific, real-sounding hockey trivia invented wholesale and
presented as though sourced — precisely the shape constraint 9 exists to
suppress, on a topic constraint 9 never named.

**4. A dropped scope caveat** (safety-reviewer only, Major not Critical): the
source's specific note that Britain's IHUK checking-age figures cover only
the leagues IHUK runs, not EIHL/BUIHA/Scottish domestic hockey, was carried
in the source's Key Takeaways but dropped from the transcript while the
equivalent USA Hockey/Hockey Canada "ask your league" caveats were kept.

## Diagnosis

Constraint 9 suppressed the exact three patterns it named by name. It did not
suppress the underlying behavior: the generator supplements the provided
source document with unsourced material it already "knows" about hockey
(a real player's name, a plausible cross-book rule comparison, a specific
rule's history) whenever the source doesn't fully satisfy the teaching
prompt's instructions to explain, contextualize, or add real-world detail.
Naming specific instances of this pattern narrows the whack-a-mole target
without closing the hole. `rules-verifier`'s own recommendation, independently
arrived at: generalize the instruction from "do not add these three specific
things" to "do not add any fact, rule comparison, historical claim, or
attribution not traceable to the provided source text, and never state a
claim the source hedges as settled."

## Disposition

- `foundation/rink_map` returned to `blocked`, failure count 2.
- Constraint 9 is being broadened (not replaced) to state the general
  principle directly, ahead of the two other validation-batch documents
  (`core_principles`, `on_ice_communication`) finishing generation under the
  now-known-insufficient version of the prompt — those two will still be
  reviewed for additional evidence of the same pattern, but should not be
  treated as a clean pass/fail test of the *next* prompt iteration.

## What this record could not establish

Whether a more general "nothing outside the source, ever, no exceptions"
instruction actually suppresses this broader class, or whether NotebookLM's
Long/Deep-dive format inherently pulls in outside knowledge regardless of
instruction wording. That is what the next validation round needs to test.

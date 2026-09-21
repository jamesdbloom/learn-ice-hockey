# Opening-paragraph rewrites for the two Search-Console standout pages, closed

## Scope

```
content/systems/faceoffs.md
content/foundation/rules_primer.md
```

## Why

`project/reviews/search_console_refresh_2026-09-21.md` identified these two pages as the highest-value
striking-distance targets by impression volume (`faceoffs.md`: 2,457 impressions at position 14.1,
3 clicks; `rules_primer.md`: 2,182 impressions at position 26.9, 1 click). The site has no separate
metadata field — `site/scripts/extract-meta.mjs` derives the page `<title>` from the document's H1 and
the meta description / Open Graph description from the first paragraph block after `## Overview`,
truncated to 185 characters. Improving either page's search snippet is therefore necessarily a
`content/` change to the exact prose this corpus's whole review process exists to protect, so it went
through the full generation → independent-review → fix → re-review cycle rather than a quick pass.

## What happened, `faceoffs.md`

**Round 1 (drafting agent, fresh dispatch)**: reordered the Overview's first paragraph so a distinctive
claim ("the only moment... where you know in advance where the puck will be and when") would land inside
the truncation window, and added the word "exactly" to it.

**Round 1 review (independent content-reviewer, fresh dispatch)**: found two Majors —
1. The claim, now amplified into the literal search-result snippet, was an unsourced, unhedged
   superlative — exactly the folklore shape this corpus's style guide names by example (the
   "centre covers more ice than any other position" case that survived eight review rounds). It also
   collides in kind with a separate unhedged "only moment in the game" claim in
   `content/systems/offensive_zone_play.md:1006`, about a different property of the same event.
2. "Exactly" was a silent addition, not part of the claimed reorder-only scope.
And one Minor: the opener grew from 2 to 4 sentences against the style guide's stated 2–3 sentence
Overview-opener convention.

**Round 2 (same drafting agent, resumed with the findings)**: verified `offensive_zone_play.md:1006`
directly, hedged the claim explicitly ("a coaching observation, not a measured claim" — matching this
same document's own established hedge idiom, used six other times in the file), removed "exactly",
and trimmed back to 3 sentences. Reported honestly that the properly-hedged, safe version produces a
meta description **character-for-character identical to the pre-task original** (165 chars) — no
combination it tried both satisfied the fix and changed what the site's truncation window actually
surfaces, without reintroducing redundancy, distorting the sentence's logic, or overflowing 185 chars
at a mid-sentence ellipsis.

**Round 2 review (independent content-reviewer, fresh dispatch)**: confirmed all three findings
genuinely resolved (not just reworded), confirmed the meta-description outcome directly against
`extract-meta.mjs`'s output rather than trusting the report, found no new defect, and flagged one
optional polish item (a double hedge — "is, arguably," stacked with the appended "coaching
observation, not a measured claim" tag, where every other instance of this idiom in the document uses
only the tag) and one new, out-of-scope item (`offensive_zone_play.md:1006`'s own unhedged "only
moment" claim was not touched — logged to `OPEN_ITEMS.md`, not fixed here).

**Coordinator polish**: applied the reviewer's own suggested one-word tightening (dropped "arguably")
to match the document's established idiom exactly, since the exact replacement wording had already
been quoted and vetted by the reviewer rather than authored fresh.

**Final state**: the Overview opener is now 3 sentences, the "only moment" claim is present but
explicitly hedged as a coaching observation rather than a measured fact, and no fabricated intensifier
survives. The auto-generated meta description is unchanged from before this work started — this task
did not achieve an SEO improvement for this page. That is reported here rather than dressed up as a
success; see "What's next" below.

## What happened, `rules_primer.md`

**Round 1 (drafting agent, fresh dispatch)**: read the full document, judged the original first
Overview paragraph's second sentence — a single ~400-character run-on chaining five rule citations
across four rulebooks — to be a worse defect for a TTS listener than any meta-description concern, and
split it into a short hook sentence (162→184 chars covering periods/offside/icing/penalties, all
verified against this document's own real `## 1.`–`## 4.` section headings) plus a second paragraph
giving one sentence per rulebook. Caught and fixed its own mechanism error before finalizing: an early
draft mischaracterized Hockey Canada Rule 4.8(c) as triggering on "any penalty" in the last-ten-minutes/
overtime/post-final-whistle window; verified against `sources/hc.txt` directly and corrected it to the
rule's actual trigger, an already-assessed **game misconduct** in that window.

**Round 1 review (independent content-reviewer + rules-verifier, fresh dispatches, parallel)**:
content-reviewer found no Critical/Major issues — scope narrow and confirmed via `git diff --numstat`
(3 insertions/1 deletion), safety-critical material below the Overview untouched, no folklore
superlative introduced, TTS listenability improved. rules-verifier independently re-verified all five
citations against primary source (`sources/usah.txt`, `sources/nhl_rules.txt`, `sources/hc.txt`,
`sources/iihf_rules_v1.1.txt` and the 2026/27 edition for drift) and confirmed four clean, but found one
precision gap: "a second penalty in the same category... under NHL 23.6/23.5" should specify the
penalty type, since the primary text keys strictly on **two game misconduct penalties** in the
category — a minor or non-injury major does not count toward the total (confirmed by also reading
Rule 41, Boarding, directly). This gap predated the edit (the original run-on had the same
imprecision) but was worth fixing while already rewording this exact sentence.

**Round 2 (same drafting agent, resumed with the findings)**: reworded the NHL clause to name "game
misconduct" as the specific trigger, matching the precision already given to the parallel Hockey Canada
clause in the same paragraph. Also corrected its own prior "shorter hook" framing after the
content-reviewer traced `extract-meta.mjs`'s actual truncation logic and found the new 184-char hook is
functionally a wash against what the old paragraph's first sentence alone (164 chars) would already
have produced — both fit under the 185-char cap with no truncation, but the new one has almost no
headroom left for any future tweak.

**Round 2 review (independent rules-verifier, fresh dispatch)**: confirmed the fix unambiguous as
spoken prose, re-quoted `sources/nhl_rules.txt` Rules 23.5/23.6 directly ("any player who incurs a
total of two (2) game misconduct penalties... shall be suspended automatically"), confirmed the diff
stayed scoped to exactly this sentence, confirmed both mechanical checkers clean, and returned
**CONFIRMED — fit for commit-gate**.

**First commit-gate dispatch — BLOCKED.** A first commit-gate audit of this batch correctly found that
no `safety-reviewer` had ever looked at this diff, despite it rewriting penalty-escalation content
across all four rulebooks — the drafting/review team had judged the content "definitional/procedural"
and out of scope for a safety pass themselves, which the gate identified as exactly the
self-exemption C6 exists to prevent. The gate's other findings all passed clean on independent
re-check (citations re-verified against `sources/nhl_rules.txt`/`sources/usah.txt`/`sources/hc.txt`
directly, no secrets, no scope creep, `OPEN_ITEMS.md` file references and push-status figures verified
against a fresh `git fetch` rather than trusted).

**Safety-reviewer dispatch, fresh (the gap the gate found)**: reviewed the same diff for hazard, not
citation accuracy (already settled). Checked retention across a TTS listen (the four-sentence split
front-loads the universal "cost you games" claim before any per-book enumeration, so a listener who
tunes out partway still hears the scope claim — assessed as an improvement over the original run-on,
not a regression), checked for any false-minimization effect immediately before the document's
head-contact paragraph (none found — the paragraph's position and severity framing are unchanged, only
split), checked the IIHF's discretionary "Proper Authorities" mechanism for any implication it's
skill-avoidable (the existing "at the Proper Authorities' discretion" phrasing, carried over unchanged,
already forecloses that reading), and confirmed via `git diff` that `Key focus` (the section carrying
the two critical up-front safety warnings) and everything from the third Overview paragraph onward are
byte-for-byte untouched. **Clean pass — no Critical, Major, or Minor findings.**

**Final state**: the Overview's penalty-trigger paragraph now states all five citations with the
correct penalty-type precision throughout, split into readable one-book-per-sentence prose. The
snippet outcome is a functional wash on truncation (both old and new fit under 185 chars), so the
actual value delivered here is citation precision and TTS listenability, not a proven CTR lever.

## Verification (both files, current working tree)

- `python3 scripts/check_links.py --quiet` — clean.
- `python3 scripts/check_facts.py` — 26 documents, 845 blocks, 5700 facts, all conform.
- `python3 scripts/check_absolutes.py` — 39 documents + 408 diagram units, no unscoped absolute denials
  or penalty-tier caps.
- `check_quote_drift.py` — no new drift introduced in either file (all pre-existing hits sit outside the
  edited paragraphs).
- `node site/scripts/extract-meta.mjs` (absolute node binary) — 39 documents, 0 warnings/errors, run
  repeatedly across both rounds on both files.

## Dimension coverage

- **C1/C9** — mechanical checkers clean, no secrets, confirmed above.
- **C3/C4 (rules claims, citations)** — every rule citation touched in either file was independently
  re-verified against primary source text on disk, with line numbers quoted, by a fresh rules-verifier
  dispatch (not the drafting agent) — twice for `rules_primer.md` (once per round), once for
  `faceoffs.md` (whose edit touches no rule citation at all, confirmed).
- **C6 (independent review)** — every review pass in this record was a fresh, coordinator-initiated
  dispatch, never the drafting agent self-certifying its own edit. Each round's findings came from a
  reviewer that had not written the text under review.
- **C7 (propagation)** — both edits are confined to a document's own Overview opening; neither claim is
  restated elsewhere in a way this edit needed to chase (the reused "56/game" and rule-number figures
  in `faceoffs.md` and `rules_primer.md` were confirmed unchanged in substance, not newly introduced).
- **C11** — every Minor/Major finding from every round was addressed with a scoped, re-verified fix
  before this record was written; nothing here rests on an unresolved finding.
- **Safety-reviewer** — dispatched on `rules_primer.md` after a first commit-gate audit correctly
  rejected the team's own "definitional/procedural, out of scope" self-determination as the kind of
  self-exemption C6 exists to prevent. Returned a clean pass (see above) — no Critical, Major, or
  Minor findings. Not separately dispatched on `faceoffs.md`, whose edit touches no penalty, technique,
  contact, or equipment content at all (confirmed by every reviewer that read that diff).

## What's next, and whose call it is

- **`faceoffs.md` achieved no measurable SEO change** — the safe, accurate version of the opening
  produces the same meta description as before this task started. Whether this page's CTR problem
  needs a different lever entirely (structured data, title wording, or accepting the position/CTR as
  is) is an open question for whoever picks this up next — logged to `OPEN_ITEMS.md`, not solved here.
- **`rules_primer.md` improved citation precision and spoken listenability**, with a functionally
  neutral effect on the actual truncated snippet (both old and new text fit under the 185-char cap).
- **`offensive_zone_play.md:1006` carries its own unhedged "only moment in the game" claim**, found
  as a side effect of this round's `faceoffs.md` review, not fixed here (out of file scope for this
  task) — logged to `OPEN_ITEMS.md` as a new row. **Closed 21 September**, see
  `project/reviews/offensive_zone_play_only_moment_hedge_2026-09-21.md`; the convention question it
  raised is now written up in `project/content_style_guide.md`, "An unsourced 'only X' needs the word
  softened, not just a trailing hedge."
- The other 16 lower-priority striking-distance pages from the Search Console refresh remain
  unstarted, per the original plan's own sequencing (batch only once these two "prove out").

## Status, closed 22 September 2026

Both open questions above are **parked, not solved** — closing this record's active status rather than
leaving it as a live backlog row that nobody is working. Nothing changed since 21 September to
warrant reopening either:

- **`faceoffs.md`'s CTR problem remains unaddressed.** No new angle (structured data, a title change,
  or any other lever) has been proposed or attempted since this record was written. Re-attempting the
  same Overview paragraph without a new idea would just repeat the null result already measured here.
  If a future Search Console refresh shows this page's numbers moved on their own, or someone proposes
  a genuinely different lever, that's a new task — not a reason to reopen this one.
- **The other 16 striking-distance pages remain unstarted**, correctly, since the plan's own
  precondition for batching them (a content-layer opening rewrite shown to move a page's numbers) still
  has not been met — `faceoffs.md`'s attempt is the one data point available, and it was a null result.
  Nothing has changed about that since 21 September.

Neither closure requires or implies any corpus-content change. Both are decisions to *not* pursue
further work right now, recorded so the question doesn't sit in `OPEN_ITEMS.md`'s "Genuinely open"
looking like a pending task when no one is actually working it.

## What this method could not have found

Whether either change actually moves click-through rate — that requires a future Search Console
refresh well after this change ships and is reindexed, and is outside any session's reach to verify.
Whether the rendered production HTML's `<meta name="description">` tag matches the extracted
`docs-meta.json` byte-for-byte (only the intermediate build artifact was checked, not a full Astro
build + browser render — that is `site-reviewer`'s dimension and wasn't dispatched here since neither
edit touches layout, diagrams, or interactive elements). Whether `offensive_zone_play.md:1006`'s own
claim is itself sound or needs the same hedge treatment — noted, not adjudicated. And whether a real
listener would parse either new sentence exactly as the reviewers inferred from reading the rendered
SSML/text — no human or engine actually spoke either sentence aloud for a listener test in this
session.

# Adversarial review of the list-site content and traffic plan

The repo owner committed `project/plans/list_sites_content_and_traffic_plan_2026-09-20.md` directly,
outside this project's normal generation process. This record is the adversarial review of that plan
against this project's own standards, run the same way any other proposed work would be checked.

## What the plan gets right

Its own hedging on inaccessible sources holds up under independent re-fetching. The Medium/FeedSpot
page genuinely 403s (confirmed independently, with and without a browser user agent, no Wayback
snapshot found); the Reddit page returns 200 but is a Cloudflare JS-challenge shell with no real
content, and the plan correctly avoids calling this a 403 the way it did for Medium; the `.json`
endpoint does 403. The plan never cites a specific Reddit recommendation, so nothing rests on that
inaccessible content. Its characterisation of FeedSpot as combining editorial selection with metrics,
submissions and sponsorship is strongly corroborated — the live sibling FeedSpot page's raw HTML
contains 99 occurrences of "sponsor," 62 of "submit," 9 of "badge." Its claims about Play Ice Hockey's
and EIHA's site structure (navigation labels, section names, scope) were checked against the live
sites and matched verbatim. Its citations of the corpus's own SEO baseline document match that
document's substance, and — unusually carefully for this corpus's own numeric-ownership standard — it
stops at the qualitative conclusion rather than restating a number from that source, explicitly
flagging that the underlying figures are dated and need refreshing before use.

## Major findings

**1. The plan's "content gap" analysis was never checked against what the corpus already contains, and
at least three of its eight claimed gaps already exist in depth.** Phase 1 recommends adding or
strengthening cost/registration/insurance guidance (item 2), making the equipment loan/hire/purchase
journey explicit (item 3), and adding a home-practice route (item 5) — none hedged as "where absent."
Checked directly: `content/getting-started/getting_started.md` already has an entire section on
registration (products, cooling-off refund terms, membership-year timing, insurance figures, sourced
per governing body); `content/off-the-ice/equipment.md` already treats loan/hire/buy at length,
including a fully sourced never-buy-a-used-helmet rule; `content/off-the-ice/practice_and_development.md`
already has a dedicated, evidence-rated off-ice practice section. Read on their own, as this corpus's
own read-aloud/summary-layer standard requires anything in it to be, these three items would send a
future coordinator to write new content rather than assemble and route to what already exists — the
exact "brief carrying a wrong premise" failure this project's own process document exists to catch,
here inherited from a plan that never checked its premise against the document it would touch. The one
genuinely verified gap is narrower than stated: `site/src/data/pathways.json`'s `parent-of-a-new-player`
entry is explicitly a draft, and its own evidence field already says it doesn't render and needs a
named safety reviewer — that part is accurate.

**2. Content-touching recommendations in Phases 1 and 2 are not flagged for this project's own review
gate.** The plan explicitly gates only Phase 1 item 1 as "subject to the project's normal safety and
jurisdiction review." It says nothing similar about item 5 (a home-practice route — squarely
`safety-reviewer` territory, conditioning and injury), item 3 (the equipment journey — also
`safety-reviewer` territory, and adjacent to `equipment.md`'s existing hard rule against second-hand
helmets, which any new copy must not soften), item 2 (registration/cost — jurisdiction-dependent in
exactly the way item 1's own caveat describes), or Phase 2's proposed NHL/IIHF/USA Hockey comparison
pages (this corpus's most carefully guarded category, cross-book rule divergence, which has needed
primary-rulebook verification across four books every time it has been touched this session). Nothing
in the plan tells a future reader which of its own items are `content/` changes needing the full C1–C11
gate versus pure site/marketing operations that don't touch reviewed prose.

**3. The Conclusion states a traffic-value verdict with more confidence than the plan's own evidence
supports.** "Directory inclusion... is unlikely to be a material acquisition channel by itself" is a
reasonable inference from general knowledge of low-authority aggregator backlinks, but nothing in the
plan's own "Sources reviewed" section measures directory-referral value for this site or a comparable
one — it describes methodology and content mix, not traffic outcomes. This is exactly the shape of
unfalsifiable claim this project's writing-content conventions require be attacked, not asserted, when
written. The plan partially self-corrects in Phase 4 (proposing to measure referral sessions and
calling the submissions "low-cost experiments, not the core strategy"), but the Conclusion itself
should carry the same hedge rather than stating the verdict as a settled finding.

## Minor findings

**4.** The Medium/FeedSpot methodology quote ("Google reputation and ranking, social influence, post
quality and consistency, and FeedSpot editorial review") is attributed to text "supplied during the
research session," with no record of who supplied it or how. The live sibling FeedSpot page checked
independently uses different wording ("content relevancy, subject expertise, posting frequency,
freshness"), which doesn't make the quote wrong — Medium articles and FeedSpot's own site can differ —
but means it can't be corroborated from outside that research session. Record the provenance
(screenshot, cache, or named source) rather than leaving "supplied during the research session" as the
only trace.

**5.** The claimed Kadaza link mix ("governing bodies, news, statistics, retail, tickets and media
without per-link rationale") is only partially verifiable — the actual listing renders client-side via
JavaScript and wasn't present in a plain fetch. Needs a headless-browser check before being treated as
settled.

**6.** Phase 2 item 2 names a "positions 11–20" band for striking-distance pages, where the SEO
baseline document it's built on measured "positions 13–17" specifically. Not a hard numeric-ownership
violation — 11–20 reads as an illustrative range, not a restatement — but pairing an unattributed,
different number with a citation of the same source risks exactly the unqualified-figure pattern this
project's D8 dimension exists to catch. Either match the source's own band or say explicitly that the
wider range is illustrative pending a fresh pull.

**7.** None of this plan's recommendations exist yet as rows in `project/plans/OPEN_ITEMS.md`, so
nothing in it is currently live under this project's own dispatch loop.

## What this review could not have found

Whether the Medium article's supplied text was obtained by an accurate render of the live page or
reconstructed from memory — there is no way to audit that from outside the session that produced it.
Whether any `rules-verifier`- or `safety-reviewer`-owned claim would be affected by acting on this
plan — none of its recommendations have been written into `content/` yet, so the real test (does the
resulting page contradict an established safety or rules statement) can only run once a draft exists.
The full content of several fetched-but-not-deeply-read comparison sites (FeedSpot's full blog list,
The Hockey Writers, NHL Hockey 101, Ice Hockey Systems) — all returned 200 and their one-line
characterisations in the plan are plausible on their face, but weren't verified claim-by-claim. Google
Search Console figures were not independently checked — no credentials, and that document's baseline
is a different owner's domain, not this review's.

## Disposition

Phase 1 items 2, 3 and 5 should be reframed before anyone acts on them, to name the existing owning
documents and scope the task as pathway assembly and cross-linking rather than authorship. Phase 1's
item 5 and item 3, and Phase 2's comparison-page item, need an explicit note that they are `content/`
changes requiring the full review gate. The Conclusion's second paragraph should be rewritten to state
plainly that its traffic-value judgment is inferred, not measured, with Phase 4 named as the way to
test it. The genuinely actionable items from this plan, reframed accordingly, are carried into
`project/plans/OPEN_ITEMS.md`.

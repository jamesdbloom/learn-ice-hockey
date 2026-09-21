# `game_management.md`'s late-hit Common Mistakes gap, closed

## Scope

```
content/systems/game_management.md
```

## What closed

A prior safety-reviewer's omission pass (recorded in
`caption_routing_and_game_management_propagation_2026-09-21.md`) found this document teaches the
late-hit hazard ("finishing your check" on a player who has already passed or shot) extensively in
body prose, its facts blocks, and Key Takeaways (items 12-13, quoting USA Hockey's *Declaration of
Player Safety*), but had no dedicated Common Mistakes bullet — the nearest existing bullet ("Going
looking for a hit before finding out whether you may throw one") explicitly deferred the question
rather than answering it. That prior record left this open rather than force-fixing it, since it was
a distinct hazard from what the caption-routing pass was dispatched to fix.

**Fix**: one new Common Mistakes bullet added at line 1087, immediately after the bullet that defers
the question, resolving it by direct proximity:

> "**Finishing your check.** Hitting a player who has already passed or shot is a late hit, and no
> book caps a late hit at a minor — the NHL's **56.4** and the IIHF's **56.5** both reach a major, the
> IIHF's with a game misconduct and nobody hurt, and USA Hockey's **640(g)** reaches the same tier,
> with **640(h)** a match above it. USA Hockey's *Declaration of Player Safety* calls the concept *"an
> unacceptable action"*. See "What a late hit costs in each book" (same-page anchor
> `#what-a-late-hit-costs-in-each-book` in `game_management.md` itself, not live here)
> for the full ladder in all four books."

Every citation and quote was reused from wording already standing, verified, elsewhere in this same
document (body prose, its own facts block, Key Takeaways) — no new rule number, quote, or claim was
introduced.

## Independent review

**Safety-reviewer** (fresh dispatch, not the fixing agent): read the new bullet in context, confirmed
it correctly resolves the preceding bullet's deferral by direct proximity, and traced every citation
back to where it already stood in this document — NHL 56.4/56.5, USA Hockey 640(g)/(h), and the
"unacceptable action" quote all matched pre-existing text exactly. Ran `check_links.py`,
`check_facts.py`, `check_absolutes.py`, `check_quote_drift.py`, and `check_facts_antecedents.py` —
all clean. Found **one genuine Minor**: the bullet's original wording, "USA Hockey's 640(g)–(h) reach
the same tier," collapsed two sub-sections this document elsewhere treats as sequential tiers — Key
Takeaway 13 and the facts block both state 640(g) as major-plus-misconduct and 640(h) as a match
*above* that tier, not the same tier. The reviewer noted the error direction was toward
under-stating severity, not over-stating legality, so not a hazard a reader could act unsafely on —
but a real citation-fidelity drift from the "already standing" wording the fix claimed to reuse.

**Fix applied for the Minor**: reworded to "USA Hockey's **640(g)** reaches the same tier, with
**640(h)** a match above it" — matching Key Takeaway 13's own established phrasing exactly rather than
inventing new wording.

**Rules-verifier** (fresh, independent dispatch): verified every citation against primary source
directly:
- NHL 56.4 (discretionary major, keyed to degree of violence) and 56.5 (major + game misconduct,
  triggered by two judgement calls, not an injury requirement) — `sources/nhl_rules.txt:6354,6371`.
- IIHF 56.5 (v1.1, 2025/26 edition, the corpus's and Britain's stated baseline) — matches the NHL
  construction, no injury requirement — `sources/iihf_rules_v1.1.txt:4783-4787`.
- USA Hockey 640(g)/(h) — `sources/usah.txt:5142-5148`, confirming (g) is major+game-misconduct and
  (h) is match, i.e. genuinely sequential tiers, matching the corrected wording above.
- The *"an unacceptable action"* quote — `sources/usah.txt:337-353` (the Declaration of Player
  Safety's "Late Avoidable Body Check" sub-heading), verbatim, correctly distinguished from a
  differently-worded near-duplicate in USA Hockey's own Glossary at `usah.txt:6127-6145`.
- Hockey Canada — not named in the new bullet's three inline citations, but independently confirmed
  (Rule 8.3 preamble and 8.3(b)/(c), `sources/hc.txt:6805-6851`) to reach the same major-or-above
  tier. The omission was judged harmless: the bullet's opening clause ("no book caps a late hit at a
  minor") already generalises across all four books and is true of Hockey Canada too; the linked
  section names Hockey Canada's specific rule number for a reader who follows through.
- Confirmed the anchor `#what-a-late-hit-costs-in-each-book` resolves to a real heading.

Both passes also independently confirmed `check_links.py`, `check_facts.py`, and `check_absolutes.py`
clean on the working tree.

## Dimension coverage (C3)

**D1-D3** — CHECKED: every citation in the new bullet independently re-verified against primary
source by a fresh `rules-verifier` pass (NHL, IIHF, USA Hockey, Hockey Canada). **D6** — CHECKED: no
coaching choice presented as settled fact; the universal "no book caps a late hit at a minor" claim
holds across all four books, verified rather than assumed. **D9** — CHECKED: the fix closes exactly
the propagation gap it was dispatched for (body/facts/Key Takeaways → Common Mistakes), with no new
gap introduced elsewhere in the same section. **D11** — CHECKED via a dedicated `safety-reviewer`
pass, which also caught the one Minor finding this record documents. **D14** — CHECKED via
`check_links.py`, clean. Everything else — OUT OF SCOPE, no facts-block structure or diagram file
touched.

## What this record could not have found

Neither reviewer re-derived every other rule this document cites outside the late-hit cluster
specifically — both scoped their passes to the new bullet and its immediate cross-references, per
this project's own convention that a diff-scoped review does not re-audit the whole file. Neither
checked how the new bullet sounds through the actual TTS/podcast pipeline, only as written text. The
Hockey Canada omission from the bullet's inline citations was judged harmless by the rules-verifier's
own reasoning, not by re-reading the bullet as a first-time listener would experience it aloud.

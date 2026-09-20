# The parent-of-a-new-player checking-permission gap, closed

This closes the Critical finding tracked in `OPEN_ITEMS.md` since earlier the same day: the draft
`parent-of-a-new-player` pathway in `site/src/data/pathways.json` sent a parent of a starting child
through `getting_started.md`'s Section 3 ("Routes onto the ice — children") without ever telling them
whether body checking is permitted at their child's age/division — the corpus's own flagship injury
topic, and one that sits exactly at this audience's boundary (checking-age thresholds cluster around
U10–U14 across every book this corpus covers).

## What happened, in order

1. A first attempted fix added `technique/body_contact_and_battles` to the pathway's `docs` array.
   Two independent reviewers (a `safety-reviewer` and a `content-reviewer`), both reading
   `site/src/pages/index.astro`'s actual render code rather than assuming, found this did **not**
   close the gap: `docs` is never rendered by the site build, only `entry.doc`/`entry.anchor` is, and
   that was unchanged — still landing the reader in Section 3, which still said nothing about
   checking. `pathways.json` was corrected to state this honestly rather than overclaim (see
   `ce43613`, the prior commit, for that correction).
2. The real fix: two lines added to `content/getting-started/getting_started.md`, immediately after
   the `## 3. Routes onto the ice — children` heading and before its first subsection —
   the first thing a reader entering this section encounters:

   > **Before you choose where your child plays, find out whether checking is permitted at their age
   > and division.** "Body Contact and Battles → 1. Which Contact Rules Are You Actually Playing
   > Under?" (linking to `../technique/body_contact_and_battles.md#1-which-contact-rules-are-you-actually-playing-under`,
   > relative to `getting_started.md`'s own location) settles that, and it separates body contact from
   > body checking, which are not the same question. Inside it, the section headed "If you play in
   > Britain" (`../technique/body_contact_and_battles.md#if-you-play-in-britain`) is the one addressed
   > to a British reader.

   This is a pure cross-reference reusing wording already verified and standing at Route 1 (line 59)
   of the same document — no new rule claim was introduced.

## Independent review

**Safety-reviewer** (fresh dispatch): confirmed the gap was real (grepped the pre-edit Section 3 for
"check" — zero hits, against Section 2's and Route 1's existing pointers), confirmed placement (first
thing a reader reaching this section encounters), confirmed both anchors resolve to the correct
content, and verified the "body contact ≠ body checking" distinction is a real, rulebook-load-bearing
one (Hockey Canada's and USA Hockey's own definitions), not an invented hedge. Checked Common Mistakes
(line 621) and Key Takeaways item 1 (line 674) and confirmed both already generalize the checking
question to children explicitly and already point at the same anchor — no further propagation needed.
Verdict: **safe, accurate, and sufficient to close the finding.**

**Rules-verifier** (fresh, independent dispatch): verified every rule citation the new pointer sends a
reader to, against primary source, by book:

- USA Hockey Rule 604(a)/(b) (`sources/usah.txt:3540-3579`) — 12U and under, all girls'/women's, and
  non-check adult classifications; checking prohibited when a checking team plays a non-checking team.
- Hockey Canada Rule 7.3 (`sources/hc.txt:6001-6041`) — checking banned U13 and below, female hockey,
  and Member-approved divisions; body-checking's mechanical test (opposite-directional force, leaving
  the skating lane, extending an arm/shoulder/hip after angling).
- IHUK Junior/U10/NIHL/WNIHL Rules of Competition (`sources/ihuk_junior_roc_layout.txt`,
  `ihuk_nihl_roc_layout.txt`, `ihuk_wnihl_roc_layout.txt`, `ihuk_u10_roc.txt`) — read from the
  `_layout` extraction per `sources/README.md`'s explicit warning that the plain extraction scrambles
  this exact table; confirmed U10/U12 non-checking, U14/U16/U19 checking, NIHL Div 1&2 checking, WNIHL
  non-checking.
- IIHF Rule Book v1.1 and IHUK In-House Rules — confirmed neither book states a checking age itself
  (correctly disclosed as a gap the document routes around, to the Rules of Competition, rather than
  guessing), and confirmed the order-of-precedence chain (IIHF → In-House → RoC) is stated accurately.
- PWHL Rule 52.1 — fetched live this session (not on disk in `sources/`) and confirmed against the
  document's quote. **Flagged as a genuine, separate gap**: PWHL is not in `sources/README.md`'s
  inventory at all. Logged as a new low-priority open item below, not blocking this closure.

Verdict: **the pointer's target content is accurate and current** across every book checked.

## Mechanical checks

`check_links.py --quiet`, `check_facts.py`, `check_absolutes.py` all clean, both before and after the
edit, run independently by both reviewers and the coordinator.

## Dimension coverage

**D1–D3** (rules claims, exceptions, cross-book divergence) — CHECKED, held, by an independent
`rules-verifier` pass covering five separate rulebooks. **D6** (cardinal rule) — CHECKED: the new
sentence names no coaching choice as a law of hockey, and correctly routes a British reader to the
domestic rule rather than a North American default. **D9** (propagation) — CHECKED: Common Mistakes
and Key Takeaways already carried the general form of this caveat and already point at the same
target; no further propagation needed. **D11** (safety) — CHECKED via dedicated `safety-reviewer`
pass. **D14** (links) — CHECKED via `check_links.py`, clean. Everything else — OUT OF SCOPE, no other
dimension is touched by a two-line cross-reference addition.

## New item surfaced, not fixed here

`sources/README.md` has no entry for the PWHL Official Rule Book, even though
`content/technique/body_contact_and_battles.md` quotes it (Rule 52.1) and has apparently done so for
some time. The rules-verifier fetched the live PDF to verify the existing quote (which checked out),
but the corpus's own source-inventory convention — the thing that lets a later reviewer avoid
re-fetching or trusting a quote blind — doesn't cover this book. Logged as a new, low-priority open
item in `OPEN_ITEMS.md`.

## What this record could not have found

Neither reviewer re-verified every citation in `body_contact_and_battles.md` §1 outside the two
sections this specific pointer sends a reader to (the CARHA rows and the "Six things that catch people
out" bullets were out of scope for this pass, since they're pre-existing content unchanged by this
diff). Neither checked whether the four IHUK source documents have been superseded by an in-season
Rule Bulletin — no bulletin database exists in `sources/` to check against. No `site-reviewer` pass
was run to confirm how the new sentence sounds when voiced by the TTS pipeline in isolation, though it
is a direct instruction plus a pointer, not a hedge-dependent claim, so the risk profile is low.

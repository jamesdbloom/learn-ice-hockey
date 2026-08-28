# Round 49 — *compression manufactured the defect*

*Complete for `body_contact_and_battles.md`. Three reviewers plus a re-verification pass. 27 August 2026.*

| | |
|---|---|
| Documents reviewed | 1 of 37 (`technique/body_contact_and_battles.md`), plus a corpus-wide re-measurement of the Key Takeaways layer |
| Reviewers run | rules-verifier ×2 · content-reviewer · safety-reviewer · facts-reviewer ×3 · commit-gate ×4 |
| Defects found *in this round's own corrections* | 2 (MA7, MA8) — found by the second rules pass |
| Criticals found / fixed | 8 / 8 — CR1 · FR-CR1–2 · FR2-C1–5 |
| Gate verdicts | Blocked on content twice, then on this record's own staleness twice, then cleared. Each block has its own section below |
| Majors found / fixed | 26 / 26 — MA1–8 · FR-MA1–9 · FR2-M1–8 · FR3-MA1. The enumerated sections below are authoritative; do not quote a total that does not reconstruct from them |
| Minors found / deferred | 11 / 5 |
| Date | 27 August 2026 |

---

## The brief

Round 48 left one Tier 0 item: documents whose Key Takeaways are essays rather than
takeaways. The method here was **rewrite one document, then attack the rewrite** — not
attack the corpus. That inversion is the point. Round 38 had already found that *every
critical it sustained came from compressing rather than splitting*, so this round was
designed on the assumption that the rewrite would introduce defects and the reviewers'
job was to find them in new text rather than old. **It worked exactly as designed: the
one critical in this round is in writing this round produced.**

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | ✅ | rules-verifier ×2 | ~40 rule numbers across four books, body pass each |
| D2 | Rules travelling without exceptions | ✅ | rules-verifier | This is where CR1 was found |
| D3 | Rule-set divergence | ✅ | rules-verifier · content-reviewer | 16-cell foul×book matrix built from primary text |
| D4 | Citation integrity | ⚠️ partial | rules-verifier | Rulebook citations verified. **The USA Hockey coaching quotations were not refetched** — `source-verifier` not run |
| D5 | Provenance | ⚠️ partial | content-reviewer · safety-reviewer | MA5 found and fixed an unattributed quotation; external refetch not done |
| D6 | Negative existence claims | ✅ | rules-verifier | "IIHF writes no match penalty" and "NHL defines no legal check" both verified by exhaustive grep, not assumption |
| D7 | The cardinal rule | ✅ | content-reviewer | KT9's coaching-choice disclosure survived; DF5 notes the system names did not |
| D8 | Numeric ownership | ✅ | content-reviewer | Diff moves no number; corpus figure re-derived separately (below) |
| D9 | The summary layer | ✅ | all three | The round's subject |
| D10 | The key-facts layer | ✅ | facts-reviewer ×3 | 7 criticals, 17 majors across three passes. §5 split into **four** sections; document-wide 45 → 48 facts blocks and 277 → 297 facts; the block that had been at its cap of 11 is now 8/7/6/7 = 28 |
| D11 | Reader safety | ✅ | safety-reviewer | |
| D12 | Read-aloud integrity | ⚠️ partial | safety-reviewer | `md_to_speech.py` link handling read, not executed. See deferred DF1 |
| D13 | Folklore | ✅ | rules-verifier | The blade-on-ice cross-check folklore re-verified as one book's wording |
| D14 | Structure, style, cross-links | ✅ | content-reviewer | Found MA1, the pointer aimed at the wrong section |
| D15 | The rendered site | ⚠️ partial | — | `npm run build` exits 0 and the site's own checker resolves every internal link and anchor, including all the new ones. **`site-reviewer` not run** — nothing opened in a browser, at any width, in either theme |

**Mechanical checks:** `check_links.py` ☑ · `check_facts.py` ☑ · `check_absolutes.py` ☑ ·
`check_geometry.py` ☑ · `check_secrets.py` ☑ · `check-arrivals.mjs` ☑ (0 hard, 7 pre-existing
advisories) · `npm run build` ☑ (exit 0) · `check_external_links.py` ☐

**Document coverage:** read in full — `body_contact_and_battles.md` (1,201 lines as the three reviewers read it; 1,288 as staged, after the split) by all three
reviewers independently; `content_style_guide.md`. Sampled — `rules_primer.md`,
`defending_the_rush.md`, `reading_ice_hockey_diagrams.md`, all 37 Key Takeaways sections
programmatically. Not reached — the other 34 documents' bodies, the rendered site, the
IIHF Disciplinary Code, the USA Hockey Casebook (neither is in `sources/`).

---

## Findings

### Critical

**CR1 · `content/technique/body_contact_and_battles.md` Key Takeaway 6 — a four-foul,
four-book penalty-floor claim that primary text contradicts in nine of sixteen cells**

- **As it stood:** *"**None of these is a two-minute penalty in any of the four books:**
  every one of them writes a floor above a bare minor, and three of the four reach a match
  penalty."* ("These" = checking from behind, head contact, boarding, charging.)
- **Why it is wrong:** the matrix, every cell grepped in a body pass:

  | | USA Hockey | NHL | IIHF | Hockey Canada |
  |---|---|---|---|---|
  | Checking from behind | 608(a) minor+misconduct ✓ | 43.2 no minor ✓ | 43.2 no minor ✓ | 7.5(a) minor + GM ✓ |
  | Boarding | 603(a) ✓ | **41.2 bare minor ✗** | **41.2 bare minor ✗** | **7.2(a) bare minor ✗** |
  | Charging | 607(a) ✓ | **42.2 bare minor ✗** | **42.2 bare minor ✗** | **7.4(a) bare minor ✗** |
  | Head contact | 620(a) ✓ | **48.2 bare minor ✗** | **48.2 bare minor ✗** | **7.6(a) bare minor ✗** |

  The worst cell rules the escalation out in terms: **NHL 48.3** *"There is no provision for
  a major penalty for this rule."* **48.4** *"There is no provision for a game misconduct for
  this rule."* Hockey Canada is blunter still — **7.2(d)**, **7.4(d)** and **7.6(d)** each read
  *"No Misconduct penalty may be assessed"*. Only **checking from behind** supports the
  sentence, and that is precisely what the text it replaced said and no more.
- **What a reader would do:** watch a teammate take a two-minute boarding minor in the first
  period, and correctly conclude that this document's escalations are unreliable — discounting
  the one in the group that *is* true, which is the highest-consequence rule in the file.
- **How it got in:** compression. The pre-existing text carried four separate per-foul,
  per-book statements. Collapsing them into one sentence produced a generalisation no book
  supports. **This is round 38's finding, recurring verbatim, in a rewrite explicitly designed
  around avoiding it.**
- **It also contradicted three other layers in place:** the body at `:447`, the Common Mistakes
  bullet at `:1118` (*"the minor is the base tier in three books … but none of the four caps it
  there"*), and the owner document `rules_primer.md:368`. A listener would have heard Common
  Mistakes and Key Takeaways contradict each other minutes apart in the same audio file.
- **Fix:** per-foul scoping restored — checking from behind named as the one that is never a
  bare minor; boarding, charging and head contact stated as starting at a minor in most books
  with none of the four capping them there; the match-penalty count kept and the IIHF exception
  named, because it is the British reader's book.
- **Propagation:** body ☑ (already correct) · facts block ☑ (already correctly scoped at `:424`) ·
  Common Mistakes ☑ (already correct) · Key Takeaways ☑ (fixed) · other documents ☑ (grep for
  `bare minor` / `not capped at two minutes` found it only here — it had not propagated) ·
  style guide ☐ (n/a)
- **Re-verified:** found independently by all three reviewers; matrix built by rules-verifier;
  the author re-checked NHL 48.2/48.3/48.4, NHL 42.2, HC 7.4(a) and the IIHF zero-match-penalty
  grep against primary text before writing the fix. Corrected wording sent for a second
  rules-verifier pass.

### Major

**MA1 · Key Takeaway 5 — pointer aimed at a section that does not contain what it promises.**
The takeaway shed the wind-up stride counts and pointed at `### What a legal check is,
precisely`. That section contains no stride counts at all; they are in the next subsection.
`check_links.py` passes because the anchor *resolves* — it cannot see that the target is wrong.
**A substitutive pointer aimed at the wrong heading loses the content outright.** Fixed to
`#delivering-a-legal-body-check-technique`, and the counts partly restored inline.

**MA2 · Key Takeaway 9 — kicking stated as a match penalty, contradicted by the IIHF book.**
*"which is a match penalty whether or not anyone is hurt"*, unattributed. True of NHL 49.3,
USA Hockey 627(b) and Hockey Canada 7.1(c)(iii); **false of IIHF 49.3**, which is headed
*"MAJOR PENALTY AND GAME MISCONDUCT PENALTY"* — the IIHF book has no match penalty at all.
The previous text attributed it to NHL 49.3 correctly; compression stripped the attribution and
promoted a one-book tier to a law of hockey. Fixed by restoring the book and stating the floor
elsewhere. **IIHF Rule 49 appears nowhere in this document** — recorded as DF3.

**MA3 · Key Takeaway 1 — "you cannot look this up **at all**" over-reached into a class of
reader for whom it is false.** The old item carved out women's hockey in Britain (IIHF 101.1,
published; Adult from the 14th birthday under In-House 100.1); the rewrite replaced the carve-out
with a pointer *and strengthened the claim with "at all"*. A British woman player hearing the
takeaway read aloud was told her contact status is not discoverable from a rulebook. It is.
Fixed: "at all" dropped, scope narrowed to *an age*, carve-out restored inline.

**MA4 · Key Takeaway 1 — the penalty ladder generalised to "the books", sweeping in the IIHF,**
whose Rule 101.1 provides a minor or a major plus an automatic game misconduct and no match
penalty. Fixed by scoping to the two books that bar checking.

**MA5 · Key Takeaway 7 — a direct quotation left in quotation marks with no speaker, and
attached to the wrong predicate.** *"can occur at walking speed"* is USA Hockey's, and it is
the **injury** that can occur at walking speed, not the collision — as written it became a
triviality and lost the thing that makes players believe it. Round 28 had already recorded a
Major on this exact passage for provenance. Fixed: attribution and predicate restored, and
"or goal post" restored with them.

**MA6 · The new body paragraph's topic sentence was contradicted by its own next three
sentences.** *"All four books let a **single** game misconduct reach beyond the game … and none
of them requires a suspension hearing first"* — but NHL 23.5/23.6 require **two**, the IIHF has
no automatic trigger at all, and USA Hockey 411(a) makes a fifth major a suspension *"until a
hearing is conducted"*. Fixed to "a game misconduct … three of them automatically, and the
IIHF's at the Proper Authorities' discretion."

**MA7 · The corrected Key Takeaway 6 introduced a new contradiction of its own.** The fix
asserted that *"only the body-checking rules themselves are division-scoped."* **Hockey Canada
scopes head contact by division too** — Rule 7.6(a) is *"in minor and female hockey"* and Rule
**7.7** is *"Head Contact – Junior/Senior"*, which *"supersedes any other rules regarding contact
to the head"* and sets a higher floor (minor **and** misconduct, not a bare minor). The
load-bearing half of the sentence is unaffected — 7.6 and 7.7 between them cover everyone, so no
reader is exempt — but the word *only* was false. Fixed by naming the split and saying both
halves are covered. **This is a defect the round's own correction created, caught only because
the corrected sentence was sent back for a second pass.**

**MA8 · The new body paragraph made a falsifiable "only" claim.** It said the words "body check"
*"appear in [the NHL rulebook] only inside Rule 48's Illegal Check to the Head."* They also
appear in **Rule 83.2**, in a list of actions causing a delayed off-side. Neither occurrence is a
definition, so the substantive claim survives — but the parenthetical was refutable by any reader
with grep, which is precisely the method this corpus invites. Fixed, and strengthened with a
verified negative that is *not* refutable: **the NHL glossary has no entry for a check of any
kind** (0 hits across its full range).

### Minor — fixed

- **MI1 · KT3 "at or near the hands it becomes hooking" stated flat.** Hooking outright under
  the IIHF; conditional under USA Hockey 623 and Hockey Canada 8.2 Interpretation 1; **the NHL
  rulebook carries no such sentence at all.** Scoped.
- **MI2 · "the NHL defines no legal check at all" existed only in the takeaway** after the
  rewrite — the same orphan class as CR-adjacent DF2 below, created by this round's own edit.
  Added to the body, with Hockey Canada's directional-force definition beside it.
- **MI3 · USA Hockey 404(b)'s 403(b) carve-out omitted** (a game misconduct for a second major
  in a game is a minimum two games). Added.
- **MI5 · Hockey Canada's definition cited from the wrong place.** Rule 7.3's directional-force
  wording applies *only where checking is banned*, so a Hockey Canada reader in a checking
  division gets no definition from it. The **glossary** carries the same sentence with no division
  scope — and one phrase 7.3's version lacks, *"to maximize physical contact"*. Both now cited.
- **MI6 · The IIHF suspension citation was the general power, not the specific one.** Rule 28.1
  is supplementary discipline at large; **Rule 23.2** is the rule that actually attaches to a game
  misconduct — *"shall be reported to the Proper Authorities which shall have full power to impose
  further disciplinary measures."* 23.2 added; 28.1 kept for the discretion wording.
- **MI7 · "The stricter standard of the four" was an unverifiable comparative** stated as fact. It
  is a judgement drawn across four definitions, one of which does not exist — not a rule any book
  states. Relabelled in the text as a comparison drawn here.
- **MI8 · The IIHF Disciplinary Code scope was undisclosed.** "The IIHF writes no automatic
  trigger" is verified of the *Rule Book*; Rules 23.3–23.6 defer four disciplinary categories to
  a separate Disciplinary Code **not held in `sources/`**. Disclosure added naming what was read.

### Found by the commit gate, after the reviewers had cleared it

The gate returned **BLOCK** on a diff three reviewers had already passed. Both blocking content
findings were failures of *propagation from this round's own fixes* — not defects in the original
document.

**GA1 · MA7's correction reached the Key Takeaway and stopped.** The fix removed a false "only"
from KT6; the facts block in the same section still read *"only Hockey Canada 7.3 and USA Hockey
604 are division-scoped"*. **The falsified word survived in the layer read aloud as key facts.**
Body → facts → Common Mistakes → Key Takeaways: the fix did the last step and skipped the second.
This is the corpus's most-recorded failure mode, committed while correcting a finding about
scope. Fixed, and the replacement re-checked against `hc.txt:6246` and `:6313`.

**GA2 · The corrected KT6 re-created this round's own headline defect.** The fix asserts *"All
four of these fouls reach a match penalty in three of the four books"* — verified true in all
twelve cells — **but no match-penalty citation for charging or head contact existed anywhere in
the document.** `grep -E '607\(e\)|620\(c\)|7\.4\(c\)|48\.5|42\.4'` returned nothing.
The takeaway's own pointer promised the rule numbers were in a section that did not have them:
MA1's shape and the orphan-claim finding, both reproduced by the fix for CR1. Two body paragraphs
added carrying the full tier ladder for charging and for head contact, each verified against
primary text (NHL 42.4/48.3/48.4/48.5, USA Hockey 607(e)/620(a)/(c), Hockey Canada
7.4(c)/7.6(c)/7.7(c), IIHF 42.4/48.3).

**GA3 · An imprecision found while fixing GA2.** IIHF **42.4** assesses *"a major penalty and a
game misconduct penalty"* for charging; **48.3** says *"an automatic game misconduct"* for head
contact. The first draft of the charging paragraph wrote "automatic" for both. Corrected, with
the difference between the two rules stated.

**GA4 · A phrase attributed to the wrong locus.** *"To maximize physical contact"* is in Hockey
Canada's **glossary** entry, not in Rule 7.3's preamble; the paragraph had it inside the 7.3
attribution and then called the glossary version "the same sentence". Corrected — the glossary is
now credited with the purpose clause 7.3 omits.

**The gate also ran the reciprocal check the reviewers said they could not.** Every inbound
anchored link and every prose reference from seven sibling documents still lands on material that
exists; `on_ice_communication.md:209`, `uk_rules.md:425` and `rules_primer.md:367` were each
checked against the rewritten takeaways. **No sibling contradiction.**

### Found by `facts-reviewer`, after the gate had already blocked once

**FR-CR1 · A misplaced edit put a four-book penalty ladder inside a USA Hockey quotation, in the
Overview.** My insertion matched the *first* occurrence of a string that appears twice, so the
head-contact ladder landed in `## Overview` instead of §5 — and in doing so replaced a closing
italic marker with a space, shifting every emphasis run in the paragraph and leaving a stray
`***`. **The corpus's whole verification discipline rests on quoted wording being exactly
attributable, and a comparison drawn by this guide was rendering as USA Hockey's own words.**
Line 21 restored verbatim from HEAD; the ladder re-inserted in §5; emphasis parity now asserted
mechanically across every changed line. **No checker catches this** — `check_facts.py`,
`check_links.py` and the Astro build all passed with it in place.

**FR-CR2 · The intentional-turn carve-out was stated as though it were universal.** *"He turned
at the last second"* waives the checking-from-behind penalty under the NHL and IIHF **only**.
USA Hockey and Hockey Canada write no such clause, and **Hockey Canada's Interpretation 2 to Rule
7.5(a) puts that exact question and answers it the other way** — verified verbatim at
`hc.txt:6203`: *"The responsibility is always on the player delivering the check to avoid making
contact with the back."* Read aloud alone, the fact told most of this corpus's readers that a
deliberate turn excuses them. It does not. Flag added.

**FR-MA1–9 · The propagation the diff never did.** The body gained suspension triggers, a charging
ladder and a head-contact ladder; **not one fact was added to any block.** Nine majors, all of the
same shape. Fixed by splitting `### The four that cause the injuries` — which was 3,000 words and
seven paragraphs — into four sections, each owning its own body. The final shape and counts are in
the third-pass entry below. **The hard cap of 11 was evicting seven rulebook facts, and the style
guide is explicit that *"a cap must never evict a rulebook fact"*** — the cap was the symptom, the
unsplit section was the defect.

Also fixed from that report: the boarding match tiers (USA Hockey 603(c), Hockey Canada 7.2(c))
which the body never carried though KT6 asserted them; **Hockey Canada 8.2 Interpretation 1**,
which is written about the stick lift specifically and whose trigger list includes *receive* —
taking a pass being the commonest moment a lift lands on the hands; **IIHF 49.3 and Hockey Canada
7.1(c)(iii)** for kicking, a four-book gap where the body had named two; and the IIHF glossary's
Vulnerable Position fact, which had dropped the *"not aware"* limb — the head-down carrier, and
the commoner trigger of the two.

**FR-MA7 · KT6 erased a distinction the same commit had just drawn.** It said the IIHF ceiling is
"a major plus an **automatic** game misconduct" for all four fouls. Verified: IIHF **43.3** and
**48.3** say *"an automatic game misconduct penalty"*; **41.4** and **42.4** say *"a game
misconduct penalty"*. Automatic for two, discretionary for two. Corrected in the takeaway.

### The second facts pass — what the split itself broke

`facts-reviewer` was re-run on the post-split text, because the gate blocked on the split having
been read by nobody. It found **5 criticals and 8 majors**, most of them caused by the split.

**FR2-C1 · A fact told the reader the NHL caps head contact at a minor.** *"Head contact is not
capped at a minor **outside the NHL**…"* — but **NHL 48.5 is a match penalty** where the player
*"attempted to or deliberately injured"* the opponent. The body carried 48.5; the fact stopped at
48.4 and generalised from it, contradicting both the body and Key Takeaway 6 in the same document.
Read aloud alone it is a licence. Split into two facts.

**FR2-C2 · Boarding was the only one of the four fouls with no penalty fact at all** — its
two-sentence ⚠️ safety paragraph had no representation in the layer that exists for readers who
skip prose. Two facts added.

**FR2-C3 · The split broke the one pointer written for readers who do not check.** §5's opening
blockquote tells 12U, girls'/women's, U13-and-below, non-check adult and every British reader to
*"skip to Section 6 — but read **The four that cause the injuries** first."* After the split that
section no longer contained a word of the checking-from-behind treatment. **The most dangerous of
the four fouls ended up behind a heading those readers had been told to skip past.** Rewritten to
name all four sections.

**FR2-C3 was a regression of round 33's CR52, and neither I nor three reviewers spotted the
connection.** Round 33 recorded a *critical* — *"the non-check reader was routed past the rules
that bind them"* — and fixed it by making the blockquote name the one section that then held all
four fouls plus the suspension machinery. **My split scattered that content across four sections
and the blockquote still named one.** The property CR52 established was silently undone by a
structural edit made for an unrelated reason, seventeen rounds later. It now names all four
sections, and the destination block still opens on the four binding every division, which is the
other half of CR52's fix. **Transferable: before splitting a section, grep the review records for
its name.** A section that was the subject of a past critical carries obligations that are not
visible in the file.

**FR2-C4 · The body gave a push-off as USA Hockey's answer to kicking.** It cited 627(a) — which
Note 2 defines as a skate used *"in a non-kicking motion"* — and never reached **627(b)**, the
mandatory match penalty for a player who *"kicks, attempts to kick or recklessly endangers an
opponent by kicking."* Round 31 withdrew a bullet over this exact misreading; the body had kept
the half that caused it, and both summary layers now cited a rule the body did not carry.

**FR2-C5 · A `Rule:`-labelled negative existence claim with the disclosure stripped.** The IIHF
suspension fact asserted *"The IIHF writes no automatic suspension"* while the body's own
qualification — that this is the *Rule Book* only, and that Rules 23.3–23.6 refer four
disciplinary categories to an **IIHF Disciplinary Code not held here and not checked** — did not
propagate. **The most reassuring sentence in the block was the one the corpus was least entitled
to.** Non-negotiable 4. Split into the claim and its scope.

**FR2-M1–M8**, all fixed: the onus fact left behind in the section it was split out of; a fact
whose only support in the document was a **Common Mistakes bullet** — a facts block may not
extract from an extraction layer, and the body was less complete than the summary of it; the IIHF
dropped from both new tariff facts, in a section whose body flags it as the exception *and* as
Britain's book; the heading's second promise ("what the onus does **not** mean") with no fact
against it; a women's-hockey scope fact untraceable in this section and wrong for it; **NHL 49.2's
second limb** — a kicked puck deflecting in off any player is no goal — carried by two sibling
documents and missing here, with "just" making it an exclusivity claim; two stale `Check yourself`
pointers the split invalidated; and *"attempts to"* dropped from the kicking fact, which is the
limb that catches the blind swing the section's own advice warns about.

**The section is now four:** the four fouls (**8** facts), boarding and the player who cannot see
you coming (**7**), checking from behind and the onus (**6**), and what these fouls cost beyond
tonight (**7**) — **28 in total**, against a single block that had been jammed at its cap of 11.
**Every block is now well under the cap it was jammed against, and every fact traces to its own
section's body.**

### The third facts pass — the split verified, and one defect older than this round

**24 of the 26 facts then present traced to a sentence in their own subsection.** No fact traces to a neighbouring
section, to Common Mistakes or to Key Takeaways; no fact is duplicated across the four blocks; and
the four blocks do not contradict each other, their bodies, or Key Takeaway 6 — each of KT6's four
assertions was checked against the blocks individually. **The split is sound.** Two earlier
attempts at it were not, and the difference is that this one was checked before being submitted
rather than after being blocked.

**FR3-MA1 · A fact welded the NHL's citation onto USA Hockey's wider standard — and it predates
this round.** *"Never: Make contact in the head, face or neck area, regardless of size
differential (USA Hockey Rule 620; **NHL Rule 48.1**)"*. The body says twice that these two books
differ and that the NHL's is the narrower test: NHL 48.1 reaches a hit *"where the head was the
main point of contact and such contact to the head was avoidable"*, while USA Hockey 620 reaches
any contact to the head, face or neck with any part of the body, equipment or stick. *"Regardless
of size differential"* is USA Hockey's Standard of Play wording and is not NHL text. Read aloud,
the fact asserted an NHL prohibition the NHL does not write. Split in two, with the IIHF's blunter
48.1 — *"There is no clean check to the head or neck"* — carried alongside the NHL's.

Also fixed: `403(b)` was cited in a fact and written in no body sentence — the number came from a
sibling document, which is a provenance gap even though the rule is right; the boarding block
dropped the automatic-versus-discretionary flag that Key Takeaway 6 and the charging fact both
carry; the charging fact dropped the *"running or jumping approach"* half of its own body's
definition; and a supplementary-discipline sentence left under the boarding heading by the split
now points at the section that owns it instead of restating it.

**Considered and deliberately not changed:** the IIHF women's/Britain scope fact was dropped from
the first block, which leaves the facts layer of these four subsections without it. It never traced
to that subsection's body, and the §5 blockquote already tells a British women's reader in terms
that *"the restricted standard above is yours and this section is not"*, pointing them to §1, whose
blocks carry Rule 101.1. Recorded rather than reversed.

### The third gate block — a repair that replaced one bad weld with another

The head-contact fix from the third facts pass **voided its own clearance**, and the gate said so
in terms: four of the five post-review repairs were confined to their findings and re-derivable,
but that one *"rewrote the attribution of a clause the finding never named, and introduced a
quotation with no body counterpart."*

**GA3-1 · A Standard of Play clause credited to a Playing Rule.** The repair read *"the onus is on
the checker regardless of size differential (**USA Hockey Rule 620**)"*. Rule 620's own Note says
something different — avoid *"placing a vulnerable or defenseless opponent in danger of potential
injury"* — and **`grep -rn "size differential" sources/` returns nothing at all**, because the
phrase lives in USA Hockey's *Standard of Play and Rule Emphasis*, front matter rather than the
rulebook. The document attributes it correctly in three other places **including the body
paragraph three lines below the fact.** I replaced a wrong weld with a different wrong weld.

**GA3-2 · A quotation extracted from an extraction layer.** The same repair put IIHF 48.1's *"There
is no clean check to the head or neck"* in a facts block whose own subsection body never said it —
its only support was the Overview and Common Mistakes. **That is FR2-M2 verbatim, reintroduced by
the fix for FR3-MA1.** The sentence is now in the body, where it should have gone first.

**GA3-3 · NHL 49.2 imported without its carve-out, contradicting two sibling documents.** The fix
for FR2-M6 added *"a kicked puck that deflects into the net off any player, goalkeeper or official
is no goal"* — the rule's general sentence, without **49.2(ii)**: *"A kicked puck that deflects off
the stick of any player (excluding the goalkeeper's stick) shall be ruled a good goal."*
`puck_handling.md:265` and `passing_and_receiving.md:405` both carry the body/stick split; this
document now contradicted both, **and the limb existed only in the facts block, in no body sentence
at all.** That is this round's own headline finding — a claim living only in the summary layer —
committed while fixing an instance of it.

Also fixed: *"three count the attempt"* when all four books penalise the attempt and only the
match-penalty count is three; and the boarding and charging **Common Mistakes** bullets, which
never received the match tiers the body and facts had gained — body → facts → Common Mistakes →
Key Takeaways stopping at step two, again.

**What the gate cleared, and it matters after three blocks:** every cross-reference into §5 now
lands — the blockquote's four subsections, both `Check yourself` pointers, and all of KT1's and
KT6's. That was the failure of two of my three attempts, and it is now checked rather than assumed.

### The fourth gate block — the record itself

The fourth audit **cleared the content**: it re-derived every changed rule claim from `sources/`
independently and found all of them correct, and it judged under the terminating rule that none of
the five previous repairs voided its clearance. It blocked on **this file**, for three
self-contradictions:

- the reviewer count said `commit-gate ×2` while the verdict row said `BLOCK ×3`;
- a paragraph said *"the gate blocked twice"* forty lines below a heading reading *"The third gate
  block"*;
- and **DF4 described a three-way split that does not exist** — 10/4/6 facts across three sections,
  when the file has four sections at 8/7/6/7.

The third is the one that mattered, and the gate named why: **`OPEN_ITEMS.md`, in this same commit,
tells the next author to grep `project/reviews/` for a section's heading before splitting it.** DF4
is what they would have found for `### The four that cause the injuries`, and it described a
structure that was never shipped. *The diff would have committed the trap alongside the warning
against it.*

**A review record is not commentary on the work; for the next round it is the work.** This one was
edited eight times while the tree moved under it, and it drifted out of agreement with the file
three times without a single checker noticing — `check_links.py` and `check_facts.py` do not read
prose, and nothing validates a record against the tree it certifies.

Two content fixes came out of the same audit and are not record-keeping: the head-contact fact
called *"main point of contact and avoidable"* **the NHL's narrower test**, when IIHF 48.1 carries
that sentence **verbatim** — the IIHF adds its blunt principle *above* the same test rather than
lacking it; and Key Takeaway 6 still pointed at one section for floors the split had spread across
three.

### The fifth gate block — the same defect, one row over

The fourth block's fixes did not sweep far enough, and the fifth audit found three more places
where this record disagreed with the tree. **The one that mattered was the `D10` row of the
dimension-coverage table itself** — the row that certifies the key-facts dimension. It read
*"Section split into three; 2 new blocks, 9 new facts."* Measured: **four** sections, **three**
new blocks, and document-wide **45 → 48** blocks and **277 → 297** facts. It asserted as shipped
the same three-way split that had been tried and rejected, two entries after DF4 was corrected for
doing exactly that. The other two: the closing sentence quantified the change as *"141 words"*, an
intermediate draft's figure, and the block count was moved from two to three while a fourth block
already had its own section.

**What changed after this one was the method, not the numbers.** The first four rounds of record
fixes were typed by hand, and each introduced a fresh inconsistency. The fifth was done by
deriving every count from the tree mechanically, writing them in one pass, re-deriving to confirm,
and then sweeping the file for every superseded figure the round had ever produced — `1,437`,
`1,411`, `1,238`, `144`, `141`, `124`, `24,490`, `25,632`. That sweep is the step that should have
existed from the start, and it is now the rule in `OPEN_ITEMS.md`.

**Two figures in this record are deliberately unquantified for the same reason:** the gate-verdict
row carries no running total, because every audit that blocks on it increments the number the next
audit checks; and `D15` states that the site checker resolves every link and anchor rather than how
many, because that count moves with any content change.

### Deferred

- **DF1 · Whether pointer-substitution works in Key Takeaways at all.** `md_to_speech.py` keeps
  link text and drops the URL, so six takeaways now end with a bare section title spoken to a
  listener with no destination. KT8 already did this before the change, but it pointed *after*
  delivering the full procedure; KT5, KT6 and KT9 now point *instead of* delivering it. This is
  a systemic question about the device, not a defect in this document. **Not resolved. Blocks
  nothing, but decide it before applying the same method to `rules_primer.md`.**
- **DF2 · Orphan citations in the two remaining documents**, found preemptively and verified
  against primary text but not yet moved: `rules_primer.md` NHL 59.2; `defending_the_rush.md`
  Hockey Canada 8.8(b) and 8.8(e). Tracked in `../plans/OPEN_ITEMS.md`.
- **DF3 · CLOSED.** It read *"IIHF Rule 49 appears nowhere in this document — a four-book gap on
  kicking."* It no longer does: IIHF 49.3 and Hockey Canada 7.1(c)(iii) are now in §7's body, in
  the facts block and in Common Mistakes. **Recorded as closed rather than deleted, because the
  gap was real when it was written.**
- **DF4 · CLOSED, and it was the round's most useful finding.** The block was at its 11-fact hard
  ceiling and the ceiling was evicting seven rulebook facts. `### The four that cause the injuries`
  was one heading over 3,000 words and seven paragraphs. **It is now FOUR sections** — `The four
  that cause the injuries` (8 facts), `Boarding, and the player who cannot see you coming` (7),
  `Checking from behind, and what the onus does and does not mean` (6), and `And what these fouls
  cost beyond tonight` (7): **28 facts where one block had been jammed at 11.** An intermediate
  three-way split was tried and rejected — it left facts summarising a neighbouring section's body.
  **The cap was the symptom; the unsplit section was the defect.**
- **DF5 · The high-stick severity block and the deliberate-turn deterrent left the takeaway
  layer.** Both survive in the body, facts and Common Mistakes, and the pointers reach them, so
  nothing left the corpus — but the podcast's "if you only remember N things" segment no longer
  carries either. Judgement call, recorded rather than reversed.

---

## The corpus measurement, corrected a third time

The Tier 0 item's headline figure has now been wrong three times, each time from the same
parser fault surviving its own fix.

| | reading | Key Takeaways layer |
|---|---|---|
| For seventeen rounds | 48,673 words, 9% | inflated ~90% |
| Round 47 | 60,033 words, 9.5% | inflated ~138% |
| Round 48 | 25,632 words, 4.1% | inflated by 444 |
| **This round, re-derived** | **25,188 words, 4.0%** | — |
| **Shipped, after the first document** | **24,557 words, 3.9%** | — |

Round 48 bounded the slice on the `---` before the Sources footer instead of on the next `##`.
**`reading_ice_hockey_diagrams.md` is the one document of 37 with no `---` there**, so its slice
ran to end of file and absorbed a 444-word footer: recorded at 742 words / 148 per item, it is
**298 words / 60 per item — the corpus median.** It was on the defect list and does not belong
on it. The item is **three documents, not four.**

**Two successive fixes to one boundary were each shipped without being tested against the corpus
they were about to measure.** The transferable rule is in `OPEN_ITEMS.md`: print the last line of
any slice before believing its length.

---

## The finding that outranks the rewrite

**A claim can live in the summary layer and nowhere else, and no checker looks for it.**

The whole suspension-and-supplementary-discipline claim — USA Hockey 404(b) and 411, NHL 23.5
and 23.6, Hockey Canada 4.8(c), IIHF 28.1 — existed **only in Key Takeaway 6**. The body never
made it. No rules review had ever reached it, for a structural reason: **reviewers check the
summary against the body, and this had no body to check against.** It survived every round to
date because shortening a takeaway is the only operation that would have exposed it.

All six citations were verified against primary text and the material moved into the body rather
than trimmed away. The same check, run preemptively on the two remaining documents, found three
more orphans (DF2).

**The rule this produces:** before trimming any summary item, grep each of its citations against
the rest of its own document. What appears nowhere else is not surplus — it is the corpus's only
copy.

---

## What this round could not have found

**The three reviewers read one document.** If this rewrite removed a claim that a *sibling*
document points at this one to supply, none of them would have seen it. The reciprocal check —
grepping the corpus for pointers into `body_contact_and_battles.md` and confirming each still
lands on material that exists — was not run, and `check_links.py` cannot run it, because every
anchor resolves.

**The gate blocked four times. The first three were defects my own repairs had created; the
fourth was this record contradicting the tree it certifies.** Round one:
the fix for the critical left the falsified word in the facts block and asserted citations that
existed nowhere. Round two: the section split placed a heading one paragraph too early, so eight
of eleven facts summarised a *neighbouring* section's body — and the kicking paragraph landed
before the paragraph naming the books it called "the other two", breaking the referent of the
sentence after it. Round three: the head-contact repair credited a Standard of Play clause to a
Playing Rule, put a quotation in a block whose body did not carry it, and imported NHL 49.2
without its carve-out. **Five separate times in one round, a repair reproduced the class of defect
it was repairing.** The pattern is specific and worth naming: I was editing by string replacement
into a 1,200-line file, and every one of these was an insertion landing where I had not looked.
The countermeasure that actually worked was not care — it was *mapping the section and printing
the result before and after every structural edit*, which is what finally caught the Overview
misplacement.

**Every review layer found defects the layer before it had passed.** Three reviewers cleared a
diff the gate blocked; the gate's fixes introduced defects `facts-reviewer` then found; and
`facts-reviewer` found a misplaced edit that three checkers and a clean site build had all passed
over. **The count went 1 critical to 3, and 6 majors to 17, without the document getting worse —
each pass simply saw a layer the last one did not.** The lesson is not that more reviewers are
better. It is that *`check_facts.py` passing means the blocks are well-formed, not that they are
complete*, and the completeness gap is exactly where a body edit lands without propagating.

**The round's own corrections introduced two more defects, and only one pass caught them.** MA7
and MA8 were both created by the fix for CR1 and its supporting paragraph, and both were found by
sending the corrected wording back to `rules-verifier` rather than by any checker. **A correction
is new writing and has to be attacked like new writing.** No third pass was run on the fixes for
MA7 and MA8 themselves — those are verified by the author against primary text (NHL glossary
range, Hockey Canada glossary at `hc.txt:783`, IIHF 23.2) and by nobody else.

**Nobody checked the sentences this round did not touch.** Takeaways 2, 4, 8 and 10 were read for
internal consistency only. CR1 exists because a reviewer checked a *new* sentence against the
rulebook; the old sentences got no such pass, and round 9's lesson is that "unchanged" and
"verified" are not the same word.

**No external citation was refetched.** D4 and D5 remain partial; `source-verifier` was not run.

**The site was built, and that is not the same as reviewed.** `npm run build` exits 0 and the
site's own checker resolves every internal link and anchor it finds; all nine new anchors
exist as ids in the rendered HTML. **But `site-reviewer` was not run** — nothing was opened in a
browser, at any width, in either theme. D15 is *mechanically* clear and *visually* unchecked.

**The build surfaced a defect in a different document.** It warns that
`reading_ice_hockey_diagrams` has *"no citation paragraphs found under Sources"*. ⚠️ **This record
attributed that to the same missing `---` that defeated two generations of the measurement parser —
"three tools, one absent separator" — and that was wrong.** Round 51 added the separator and the
warning did not clear: `site/scripts/extract-meta.mjs` caps a citation's category label at **70
characters**, and this document's are 83, 88 and 95. Running that regex against the pre-fix and
post-fix text yields zero matches either way. **Two symptoms shared a victim and I inferred a shared
cause without testing it** — the same failure as the "renders plain" claim four sections above.
Corrected here rather than left for the next round to find.

**Grepping a rulebook proves what the book says, not what a referee calls.** Three of the
divergences in CR1's matrix (Hockey Canada's "No Misconduct penalty may be assessed" clauses) are
exactly the kind routinely overridden by league supplementary rules this corpus does not hold.
Neither the USA Hockey Casebook nor the IIHF Disciplinary Code is in `sources/`.

**And nobody can say whether the rewrite worked.** Every reviewer verified that the surviving
sentences are true. Not one could test whether a fourteen-year-old who hears 150 words per item instead of
214 comes away with a different idea of how hard they are allowed to hit — which is what the
compression actually changed.

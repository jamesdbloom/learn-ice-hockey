# `special_teams.md` — both briefed findings refuted, two different defects found, and a near-miss worth more than either — 22 September 2026

## ⚠️⚠️ BRIEF ERROR TWENTY-EIGHT — the brief quoted HEAD, not the working tree

Both findings in the brief were **already repaired** before the agent arrived. The plan row they
came from was written against `git show HEAD:content/systems/special_teams.md`; an earlier wave
this session had rewritten the whole Overview paragraph.

- **Finding 1** (*"a second penalty either way"* with a dangling antecedent and no carve-outs):
  `:35` already names NHL and IIHF explicitly, enumerates **all three carve-outs** (no glass /
  players' bench / directly off a faceoff), and states the USA Hockey–Hockey Canada–CARHA
  divergence. **There was no dangling antecedent to disambiguate.**
- **Finding 2** (the Overview compressing out the head-count/clock resolution): `:35` already
  carries *"…**which fixes the moment the count is taken, rather than replacing the count with a
  clock**"* — exactly the `:674` resolution, present, not compressed out.
- **The provenance correction did not apply at all.** This document cites no `sources/*.txt` paths
  (the corpus never does); its IIHF provenance is at **edition** level in the trailer at `:1186`,
  and per `sources/README.md` `iihf_rules_v1.1.txt` **is** the 2025/26 book already named there.

⚠️ **The underlying rule premise was sound, and the agent counted the books rather than taking
"three" from the brief:** USA Hockey 610(c) (`sources/usah.txt:3772-3775`), Hockey Canada 10.1(ii)
(`sources/hc.txt:7418-7419`) and CARHA 75(b) are each **deliberate-only**, with no
direct/non-deflected defending-zone limb.

⚠️⚠️ **THE SYSTEMIC LESSON: `check_plan_rows.py` DID NOT CATCH THIS.** It was run this same day and
reported exactly one stale quote, in a different file. **Two rows whose evidence had moved wholesale
passed it.** The tool checks a row's *quoted assertion* against the file; these rows' evidence was
prose the wave had rewritten around rather than a quotable string the tool tracks. **A plan row
written against HEAD goes stale the instant a wave edits the file, and nothing mechanical sees it.**
**Re-read the file before relaying a row — the row is a hypothesis, and so is its evidence.**

## ⚠️⚠️ THE MOST IMPORTANT THING HERE: an agent nearly shipped a false rules claim from an EMPTY GREP, caught it, and reverted

The agent concluded from a headword listing of CARHA's glossary that CARHA has **no** general
*Player* definition, and therefore that `:940` and `:950` were unsupported. It edited both, adding a
⚠️ callout citing CARHA Rules 21(d) and 83(a).

**It was wrong.** `sources/carha.txt:385-387` carries it:

> **Players** — The members of the team physically participating in a game in accordance with the
> rules. **Except where special rules apply, the goalkeeper is to be considered as one of the
> players.**

⚠️ **The headword scan missed it because `carha.txt` indents that page at THREE spaces where the
surrounding glossary pages use FIVE**, so a `^ {5}[A-Z][a-z]` pattern skipped an entire page.

**Both edits were fully reverted**; `:940` and `:950` are byte-for-byte as the earlier wave left
them, and both are **verified correct**. Hockey Canada's parallel provision is confirmed in its
Glossary: *"The goaltender is considered a player, except where explicitly stated because special
rules or privileges apply to them."*

⚠️ **This is `sources/README.md`'s *"an empty grep is not an absence"* reproduced exactly — and the
DIRECTION is the dangerous one: it would have made the corpus look LESS supported than it is**,
which is the round-59 disclosure-failure species, the one no reviewer stops on.

## What was actually repaired

**1. Overview `:35` — the deliberate limb read as shelter for a goaltender.** It said the three
books *"reach only a deliberate one **from a skater**"*, then that HC and CARHA are stricter on a
goaltender. ⚠️ **Voiced alone, that teaches a goalie under USA Hockey that a deliberate flip-out is
free.** It is not: 610(c) names *"any player **or goalkeeper**"* expressly. The body already said so
at `:703`, `:950` and `:1097` — **the Overview was the layer that had lost it.** Fixed by naming the
antecedent, not by deleting; the HC/CARHA strict-liability clause is intact. No facts line touched.

**2. Key Takeaway 13 `:1178` — a wrong edition-provenance for the British answer.** It read *"the
IIHF's 2026/27 rule book adopted the same ejection"*, but `uk_rules.md:46-48` records that the
In-House Rules' Introduction names **Version 1.1 / 2025/26** while their cover says *"the Current
IIHF Rule Book"*, and **nothing published settles which.** The real settler is edition-independent
and was already in Common Mistakes at `:1099`. The takeaway now attributes Britain to the **IHUK
In-House Rules 2026-27** (*"the linesperson shall immediately replace the centre for all
violations"*), keeps the 2026/27 IIHF change as the *European* answer, and leaves the conclusion
unchanged.

## The handed-back census — run by the coordinator, and it is CLEAN

*"If any other document states that Britain is on the IIHF 2026/27 book, I would not have seen it."*

Run across `content/`. **No other document makes the claim.** `systems/faceoffs.md:480` had
**independently** reached the same edition-independent framing: *"the British answer no longer
depends on that edition question at all, because IHUK carved out the same draw itself."*
`special_teams.md:1099` and the repaired `:1178` now agree with it. **Three sites, one answer.**

## 🔴 New row handed back — `:941` reads as though a Hockey Canada goalie has no no-glass relief

`:941` states CARHA 55(a)'s exemptions (no-glass spot, puck touching glass, deflection off a player
or official) and attributes them to **CARHA alone**. Hockey Canada publishes the *same* exemptions
for its 10.1(v) goaltender limb at **Interpretation 5 to Rule 10.1(a)** (`sources/hc.txt:7538-7550`)
— **plus a condition CARHA has no equivalent of**: *"both ends of the rink must be similar. If there
is glass at one end only, then the rule would not apply."*

⚠️ **That Hockey Canada condition appears NOWHERE in this document.** The error is in the *safe*
direction. The line is at **288/300 — 12 characters of headroom** — and belongs to an earlier wave,
so the agent did not touch it. **Substitution before eviction; never trade out a caveat.**

## Verification

`check_links.py`, `check_facts.py` (846 blocks, 5710 facts), `check_absolutes.py`,
`check_quote_drift.py` (no hits on this document) — all clean. `check_facts.py --near` run **before**
editing; the coordinator's two figures verified exactly (`:731` 299/300, `:732` 298/300) and **no
facts line was edited in the final state, so no cap moved.**

⚠️ **The `--only` correction landed and worked.** `md_to_speech.py --only special_teams` reported
**1 document, 126 chunks, 284,232 billed characters** — a real render, not the silent false pass the
coordinator's original brief would have produced.

**Whole-file diff read, not just the hunks.** Uncommitted changes from earlier waves at `:8`,
`:26-36`, `:49`, `:54`, `:263`, `:464`, `:469`, `:709`, `:940-941`, `:950`, `:1056`, `:1097` were
read for contradiction against the new edits — **none found, nothing reverted.**

## What this method could not have found

- **Every other rules claim in this 1,200-line document.** The icing-exemption comparison
  (`:639-695`), the smothering ladder (`:707-740`), the goaltender-interference material
  (`:1029-1061`) and the faceoff splits were **not re-verified**.
- ⚠️ **A flattening trap in a passage that was not searched.** The agent read `sources/README.md`'s
  entries for `usah.txt`, `hc.txt`, `carha.txt` and the IIHF editions, **but not its whole-file traps
  section** — so another false negative of exactly the kind it produced itself could still be hiding.
- **Layer contradiction**, which was checked by reading, because no checker can see it.

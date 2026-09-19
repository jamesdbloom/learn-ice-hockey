# The wrong case's limb, spliced into the boards approach — repaired, reviewed, CLEAR

**19 September 2026.** `content/off-the-ice/conditioning_and_recovery.md`. Opened as
[Workstream 22](../plans/OPEN_ITEMS.md); found by the agent repairing podcast episode three, **in a
file it did not own**, and correctly reported rather than fixed.

## The defect

`:192` told a reader to approach the boards with *"head up and hands in front"*.

⚠️ ***"Hands in front"* is the limb of a DIFFERENT CASE** — `body_contact_and_battles.md:772`,
chest-and-shoulder contact — **and the limb it displaced is the one that protects the cervical
spine.** The owner treats *"head up, chin off your chest"* as one inseparable non-negotiable.
**A correct half-cue plus a correct limb from the wrong case, reading complete.**

⚠️ **The podcast episode inherited it from here. The script was repaired first; the corpus had not
been.**

## Verdict: CLEAR TO COMMIT

> ***"Every quotation in the diff is verbatim primary text, the boards case is correctly assigned, the
> case-specific limbs are not blurred, the chin limb is restored with its mechanism, the penalty
> triggers are verified against USA Hockey 604 and Hockey Canada 7.3… The diff as written should not
> be altered."***

**The one thing most likely to go wrong did not.** `:194` now hands off **IBC Case A's first teaching
point** (*"try to turn skates parallel to the boards before contact is made"*) to **Case B's limbs**
(*"press your forearm and upper thigh (hip area) against the boards"*) — **exactly the owner's Case 2.**
⚠️ **No stick-or-gloves-on-the-glass instruction was routed into the parallel case**, and the Case 3
fallback is correctly left behind the cross-reference and correctly described as *"already facing the
wall with no time to turn"*.

⚠️ **All four new quotations verbatim, INCLUDING THE DASH — compared byte by byte.** *"tip of your
shoulder – it can cause injury"* carries U+2013 in both the document and `ibc.txt`. ⚠️ **That matters:
the same sentence is ALSO in `huh.txt` with an EM DASH, and the corpus attributes it to IBC and uses
IBC's dash. That is precisely the attribution drift `check_quote_drift.py` cannot see, and it is
clean.**

**The cross-reference is discharged for a listener.** The whole boards treatment now arrives in one
`<p>` with every limb inline — parallel skates, forearm and hip, not the shoulder tip, never the back,
never duck, head up, chin off your chest, plus the cervical mechanism. **The link that follows is now
additive.**

## ⚠️ One thing to close in the same change: there were THREE trigger-less ladders, not two

The repair fixed the body blockquote and the Common Mistakes bullet **and left Key Takeaway 4.**
`grep -n "ladder runs the whole way" content/` returns exactly two lines; **one now carries *"— but
each rung has its own trigger rather than arriving automatically"* and the other does not.**

⚠️ **That is this project's commonest critical shape — a correction that reached the body and one
summary layer and stopped — and staging a document whose Key Takeaway is THINNER than the Common
Mistakes bullet written to fix the same defect reproduces it, one clause short.** **Not a BLOCK
(pre-existing, untouched by the diff). Dispatched.**

## Both refutations of the brief upheld

- **This document has ZERO ` ```facts ` blocks.** `check_facts.py` reports 26 in-scope documents and
  `grep -c '```facts'` on this file returns 0. ⚠️ **The cap arithmetic, `--near` and the eviction
  warnings in the brief had no subject at all.**
- ***"Hands in front"* has no primary source.** **0 occurrences in flattened `ibc.txt` and `huh.txt`.**
  IBC's open-ice case teaches *"keep a low center of gravity"* and *"gain momentum by moving toward the
  checker"*; HUH's nearest is *"keep their arms up"*. ⚠️ **The agent was right not to re-site the
  phrase, and right to file it against `body_contact_and_battles.md:772`, where the string now occurs
  exactly ONCE in the corpus — in the case where it is correct.**

## Both new disclosures TESTED rather than assumed, and both hold

- ***"The walking-speed sentence is in the Program Guide only"*** — `walking speed` and
  `full speed for this` both return **0** on flattened `ibc.txt`. **Upheld.**
- **The *"this"* scoping is right, and it is the safer of the two readings.** The source's antecedent
  is **the injury**, and the body attaches it to *"that head-down, head-first collision with the boards
  or a goal post"*, **never to a turned back.**
- **The 2007-09 rule-base caveat matches `sources/README.md` in substance, and both IBC quotations here
  are TECHNIQUE TEACHING, not rule statements** — confirmed by reading their sections.

## The two additions settled by census, not by judgement

**Body + Common Mistakes + Key Takeaway + a trailer entry is the established corpus pattern** —
`winger.md`, `defender.md`, `switching_positions.md`, `puck_handling.md`,
`playing_without_the_puck.md`, `forechecking_systems.md` and `zone_entries.md` all carry it.
**This document now matches, and the decision NOT to touch Key focus is consistent with the siblings.**
⚠️ **The repairing agent asked for this judgement to be tested and it was tested by counting rather
than by opinion.**

## Minor, recorded

*"The shoulder instruction"* has two possible referents in one voiced `<p>`, **the nearest being the
prohibition** — resolved by the trailing clause, but only on reconstruction; **mitigated because two
other layers state the prohibition unconditionally** · *"that injury"* follows a **mechanism**, where
sibling documents keep the fuller *"head-down, head-first collision"* form · `:194` omits IBC's third
Case-B teaching point, **which the owner's own facts line omits too** — an observation, not a defect ·
the Hockey Canada scoping at `:210` did not propagate to the Common Mistakes bullet, **which carries
only a trailing citation.**

## Two defects the repairing agent caught in its own draft

- It wrote that the chin limb *"belongs to the boards case rather than to an open-ice hit"*.
  ⚠️ **Flatly wrong, and it contradicts the owner's *"In every case, and non-negotiable"*. Caught on
  re-read.**
- ⚠️ **`check_quote_drift.py` flagged a drift it had JUST INTRODUCED** — a terminal period pulled
  inside the quote marks where the source continues. **The tool earning its keep against the author
  who ran it.**

## What the review could not reach

⚠️ ***"`sources/README.md` records that Fig. 6 shows both arms bent at the elbow, gloves up and spread
on the glass, and that NO GREP REACHES IT. I did not render the figures with `pdftoppm`, so if the
drawing contradicts the posture this paragraph teaches for Case 2, I would not know."*** **Second
reviewer today to leave that figure unrendered.**

**It verified the technique is legal and sourced. No grep says whether a player executing *"skates
parallel, forearm and hip"* BADLY — late, off balance, feet together — is safer than one who does
something else.** ⚠️ **The manual names that as its own Common Error and this document does not carry
that limb.**

**It read `<p>` boundaries, not audio** — *"the 'shoulder instruction' ambiguity is exactly the kind a
listening test would settle and a reading test cannot."* · **It stayed out of `goaltender.md` and did
not check whether the boards material there agrees** · **It tested the disclosures this change ADDED
and read past four inherited ones in the same file.**

---

## The takeaway clause — and there were FOUR ladders, not three

**Dispatched to close one clause. It found a fourth site, refuted two premises of the brief, and
caught a defect in its own draft that every checker had passed.**

### ⚠️ THE FINDING OF THE ROUND: a citation can pass every gate and be wrong FOR THE EAR

**The agent's first Key Takeaway 4 draft passed `check_links`, `check_facts`, `check_absolutes`,
`check_geometry`, `check_secrets` and `check_counts`.** ⚠️⚠️ **Rendered, the match rung came out as:**

> ***"…which six hundred and four, clause e says… and which seven point three, clause c…"***

⚠️ **Leaving the listener to map two bare spoken numbers onto two books.** ***"Only reading the SSML
caught it."***

**The rewrite names the book in PROSE at every rung** — *"which **USA Hockey** makes mandatory for
recklessly endangering an opponent (604(d)) while **Hockey Canada** leaves it to the referee on the
degree of violence of the impact and requires it only where a player is injured (7.3(b))"* — **so no
listener has to resolve a spoken rule number to a book.**

⚠️ **This is a new class in this record. A rule citation is legible on the page and, read aloud, is a
sequence of digits with no owner. Nothing in `scripts/` sees it.**

### The fourth ladder

**`:208` carried *"a match penalty above that (604(e))"* — the exact phrase the earlier repair had
deleted from the blockquote two paragraphs below, left standing here.**

⚠️ **604(e) is NOT a higher rung. It is the SAME reckless-endangerment trigger, discretionary.**
Now: *"a match penalty, which 604(e) says 'may also be assessed' for that same reckless endangerment
rather than for anything worse."* ⚠️ **Beyond the brief, and new unreviewed text.**

### Two premises of the brief refuted

| I wrote | measured |
|---|---|
| *"THREE trigger-less ladders"* | **FOUR.** `:208` was uncounted — **by the reviewer, by the previous repair, and by me** |
| `:557` *"carries only a trailing `(7.3(b))`"* | **False.** It already carried the full *"based on the degree of violence of the impact"* / *"[i]f a player is injured"* wording. ⚠️ **The only thing missing was a two-word book attribution. The concern was real; the description of it was not** |

**Also fixed:** *"that injury"* → *"a head-down, head-first collision with the boards"* at both summary
sites, **matching what the file's own Sources trailer says the body does deliberately**; and `:194`'s
*"the shoulder instruction is not"* → *"the open-ice shoulder cue is not, so do not carry **it** into
the wall"* — **naming the referent, and SHORTER.**

**It did not add IBC case B's low-centre-of-gravity point, as instructed.**

### ⚠️ And it nearly manufactured a false absence with its own pipe

***"`ls sources/ | head -50` truncated and hid `usah.txt` — I nearly manufactured a false absence with
my own pipe, on the exact failure `sources/README.md` documents."***

⚠️ **Six kinds of false absence are now recorded in that file. This is a seventh shape and it is the
only one the tooling cannot be blamed for: the AGENT'S OWN COMMAND truncated the evidence.**

### What it could not certify

⚠️ ***"Five of the six edits are new text in a safety document; `:208` in particular was never in any
reviewer's scope. This needs `safety-reviewer` and `rules-verifier` on the NEW diff, not a re-read of
the old clearance."***

- ⚠️ **`:208`'s scope is incomplete and it says so:** 604(e) reaches *"a Competitive Contact category
  **or non-check Adult classification**"* — **wider than 604(d).** **The conduct trigger is the same,
  which is what was asserted; the CATEGORIES were not addressed, and a reader could infer they match.**
- ⚠️ **The four ladder sites are now four different compressions of one rule pair.** **Each was checked
  against the primary text separately; none was checked against the OTHERS** — and `CLAUDE.md` says
  that failure is caught by diffing the whole file, **which it did**, not by grep.
- **Cross-document propagation unrun:** *"`body_contact_and_battles.md` §6 is named as the full
  three-case treatment and other documents may repeat this ladder… That census is the obvious next
  row."*
- **Dropping *"or a goal post"*** from the walking-speed claim in both summary layers is **a narrowing
  it judged correct for a boards-specific bullet.** *"A reviewer may disagree."*
- ⚠️ **It did not `pdftoppm` the IBC figures** — **the third agent today to leave Fig. 6 unrendered.**

---

## Both held-file reviews returned CLEAR — and both refuted the same premise of mine, independently

**`safety-reviewer`: CLEAR TO COMMIT.** *"No critical. No new hazard is introduced by any of the six
edits. Every quotation in the diff is verbatim including the dash codepoints, the boards case is
correctly assigned, no wrong-case limb is present, and all four ladder sites agree with the primary
text and with each other."*

**`rules-verifier`: the rules content is clean.** **Every trigger verbatim in primary text, every one
of the four sites states it, and no site attributes Hockey Canada's discretion to USA Hockey.**

### ⚠️ The premise both refuted, and it was mine

**I relayed the repairing agent's self-flagged incompleteness: that 604(e) reaches *"a Competitive
Contact category OR NON-CHECK ADULT CLASSIFICATION"* and is therefore WIDER than 604(d).**

⚠️⚠️ **It is not wider. USA Hockey 604(a) carries a DEEMING SENTENCE, and the coordinator read it:**

> *"Body checking is prohibited in the 12 & under youth age classifications and below, all
> Girls'/Women's age classifications and all non-check Adult classifications. **These levels would be
> considered the Competitive Contact Category of play.**"*

**So the non-check Adult classifications ARE the Competitive Contact category, and 604(e)'s extra limb
is belt-and-braces.** ⚠️ **USA Hockey's own two summary layers drop it entirely.** **There is no scope
gap to disclose, and a reader inferring the two scopes match is inferring correctly — because the
rulebook says they match.** ***"Nothing to fix. Do not add text closing a gap that does not exist."***

### ⚠️ And Fig. 6 is now resolved TWICE, by two different methods

**Five agents chased it. One rendered it with `pdftoppm` and found it corroborates. The safety pass
then resolved it a SECOND way, without rendering anything: by reading the text layer's subsection
structure and establishing that Fig. 6 sits inside subsection A — the FACING-the-wall case — so it
cannot contradict the parallel-case paragraph at all.**

⚠️ ***"Which means a drawing that contradicts Case B's posture would sit in FIG. 7, and I did not look
at Fig. 7 at all. That is the live gap."*** **Filed as Workstream 32F.**

### The four ladder sites, compared against each other — the thing neither repair had done

**They agree on every operative element.** ⚠️ **The *"individually correct, flatly contradictory read
aloud"* failure is NOT present.** **Differences are of completeness only, and both are filed:** 411(a)
stated without its *aggressive-infractions* scope at two sites of three, and the ear-shape fix
reaching one summary layer of three.

### Byte-level confirmations worth keeping

⚠️ **The dash finding verified at BYTE level by the rules pass:** the corpus, `ibc.txt` and `huh.txt`
all carry the same sentence, and **the corpus uses `ibc.txt`'s EN DASH (U+2013) where `huh.txt` has an
EM DASH (U+2014)** — **matching the manual it names.** ⚠️ **And the rules pass established why *"the
same manual"* is right and not a confusion: the line sits on a page of the IBC PDF whose running head
is *"HEADS UP HOCKEY"*, because that is a CHAPTER of Introduction To Body Contact.**

**One typography note recorded as NOT drift:** the source prints a curly apostrophe in *"doesn't"*;
the corpus prints a straight one. ⚠️ **The file contains 0 curly and 51 straight apostrophes — house
normalisation across the whole corpus, not a per-quotation alteration — and `check_quote_drift.py`
matches alphanumerics only and would not see it either way.**

### ⚠️ The Major both passes left open, and why neither blocked on it

**The boards technique carries no *"whatever league you play in"* counterweight in any layer**, while
five siblings do — **and two sections later this document tells the reader checking is barred in most
youth and most adult rec leagues.** ⚠️ **NOT critical: the text never RESTRICTS the advice, so nothing
inverts. The failure is UNDER-APPLICATION.** **It predates the diff — but the diff is the first time
this document teaches boards technique at all.** **Workstream 32A.**

### What neither method could reach

⚠️ **The Major was found only because the reviewer had five sibling documents open FOR A DIFFERENT
REASON.** ***"A grep for a counterweight that is ABSENT returns nothing, and nothing looks the same as
clean."*** · **Neither reviewer ran `check_rule_scope.py`, and the cross-document question — whether
the other documents repeating this ladder now disagree with this one's four compressions — is
untested** · **the rules pass did NOT search `usah_casebook.txt`, and says plainly that any future
*"USA Hockey publishes no interpretation of 604(d)"* must read it first** · ⚠️ **no grep tells either
of them whether a player executing *"skates parallel, forearm and hip"* BADLY — late, upright, feet
together — is safer than one who does something else.** **The manual names that stance as its own
Common Error; this document does not carry it; the safety pass ruled that acceptable because the owner
does, and called that ruling *"a judgement about link-following behaviour, and I have no evidence for
it."***

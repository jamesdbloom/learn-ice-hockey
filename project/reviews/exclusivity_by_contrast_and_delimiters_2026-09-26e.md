# An exclusivity carried by a contrast, and a warning that stopped being amber — 26 September 2026

**Three content documents. Written after the final `content/` edit, per the ordering rule.** This wave
took the top rows declared by commit `f809d08`.

---

## 1. The permissive defect: an exclusivity carried by a CONTRAST

`content/positions/winger.md` said, at a ` ```facts ` line (**voiced alone**), **Key Takeaway 10**
(**voiced alone**) and in the body:

> *"…is a mandatory match penalty — Hockey Canada 7.5(c) and CARHA 53(b); **USA Hockey 608(c) writes its
> match penalty with or without board contact**."*

⚠️⚠️ **The trailing clause IS the exclusivity. Read aloud it means the other two books' matches DO need
the boards.** **Hockey Canada 7.5(c)'s second paragraph is mandatory with no destination condition, so a
listener concluded an open-ice check from behind could not cost a match penalty under Hockey Canada. It
can.**

✅ **Nothing in it was literally false and it never said *"only"* — which is why a corpus-wide filter on
ceiling VOCABULARY missed it.** **It was found by reading the filtered hits' neighbours.** ⚠️ **At least
six documents were filtered and not read.**

**Repaired at all three layers**, with all three books stated positively and mandatory-versus-discretionary
explicit. ⚠️ **The honest facts sentence would not fit 300 characters; one draft hit 305. It was SPLIT** —
third measured instance this session that a cap forces a split, not a compromise.

✅ **And the agent declined to import the sibling precedent's own wording — *"NEITHER Hockey Canada nor
CARHA confines…"* — because a third book is named alongside here and a *"neither"* of two would have
been the antecedent breakage found false in another file the same day.** **It matched the precedent's
substance and refused its syntax.**

⚠️ **It also found a provenance gap nobody briefed: the Sources trailer had NO checking-from-behind entry
at all**, while the body quotes seven rules directly. ✅ **Added, flagging that 7.5(c) runs to two
paragraphs.** ⚠️ **Its reading of what that implies is the row: the 78-site sweep looked at SENTENCES,
not at whether each carrier's trailer covers what its body quotes.**

## 2. A discretion asserted as fact

`content/systems/zone_entries.md` said CARHA *"its 53(a) **reaches** a match penalty"*. The rule says
*"could also be assessed"*. ✅ **Now quoted, with the discretion inside the marks.** ⚠️ **This site
predated the prohibition a record written earlier the same day states explicitly — which is how a rule
written in a record fails to reach the corpus.** **Five other sites in the file were read and correctly
left.**

---

## 3. ⚠️⚠️ A WARNING THAT STOPPED BEING AMBER, AND NO CHECKER CAN SEE IT

A `safety-reviewer` found the repaired **Key Takeaway** carried **seven `**` delimiters where HEAD had
eight**. Two effects:
1. **Literal asterisks on the page.**
2. ⚠️⚠️ **THE INLINE AMBER ESCALATION ON A SPINAL-INJURY WARNING WAS GONE** — the glyph ended up ~330
   characters and two em dashes from the next strong run, so no wrapper formed. **CLAUDE.md's state 3, on
   the highest-consequence warning class in the corpus.**

✅ **Listeners were unaffected** — the asterisks strip out and the spoken *"Important."* survives, because
that is tested per PARAGRAPH. **Reader-only.**

⚠️⚠️ **`check_facts`, `check_links`, `check_absolutes` and the speech renderer ALL PASS on a line that
shows literal asterisks to a reader.** **It was found by rendering the line through the site's own
pipeline and diffing against HEAD.**

### ⚠️⚠️ COUNTING DELIMITERS IS WRONG IN BOTH DIRECTIONS — measured, not argued

- **Over-reports.** A coordinator census per LINE returned **314**; per blank-line PARAGRAPH, **114**.
  ⚠️ **Both are the wrong unit — a bold run may legitimately span a soft line break, and a bullet list is
  one blank-line block but many parsed items.** **The true total across the built site was THREE.**
- **Under-reports.** ⚠️⚠️ **The second defect was an unclosed OPENER plus an ORPHAN CLOSER, and PARITY
  CANCELS THEM: that entry counted EVEN at HEAD — 106 `**` runs — while the page was broken.**
  **CommonMark paired neither across the 4,800 characters between: the opener was left-flanking only so
  it could not close, and the next right-flanking candidate was already a closer, so both ends fell out
  as text.**

✅ **THE TEST IS THE RENDERED ARTEFACT: an unbalanced run survives into the built HTML as literal `**`.**
**Run it over `site/dist` inside `<main>`, scripts and styles stripped, after every build and before the
gate. This wave: 3 → 0.**

### ⚠️ AND THAT TEST HAS ITS OWN BLIND SPOT, named against itself

> ***"A delimiter that pairs PLAUSIBLY BUT WRONGLY — bolding the wrong clause, or an italic whose extent
> moved — emits perfectly valid HTML and scores 0."***

✅ **The agent proved the class exists by finding an instance in the same entry, by eye in a rendered
diff:** `(*"…"*)` inside an already-open italic. **Markdown cannot nest emphasis, so it closes the outer
`<em>` and reopens — two Casebook quotations render UPRIGHT inside an italic entry with inverted tags.**
⚠️ **Cosmetic: no rule claim, tier, scope, date or quoted character affected, and a listener never
reaches a trailer.** ✅ **Left alone as a second claim. The corpus-wide sweep for THIS shape cannot be
built by counting or by literal-asterisk rendering — it needs extent comparison, or a reader.**

---

## What was repaired

| File | Defect | Direction |
|---|---|---|
| `positions/winger.md` | exclusivity by contrast at three layers, two voiced alone; a dropped adverb; an unbalanced bold run killing an amber warning; a missing Sources entry | **permissive**, then harsher, then reader-only |
| `systems/zone_entries.md` | a discretionary match penalty asserted as fact | harsher |
| `off-the-ice/team_play_and_culture.md` | an unclosed opener plus an orphan closer in a Sources trailer | cosmetic |

⚠️ **A dropped adverb, and it is a CLAIM not a line.** Hockey Canada writes *"**deliberately** attempts
to or **deliberately** injures"* — **the double adverb is the book's house form, confirmed at 7.2(c),
7.3(c) and 9.3(c).** **A paraphrase dropping the second lets *"or injuring"* cover an ACCIDENTAL injury,
pricing an ordinary check that happens to hurt someone as a mandatory match.** **Harsher, so not a
hazard.** ⚠️ **Only this file's two paraphrases were checked. Sweep the PARAPHRASES — a quotation carries
both adverbs by construction.**

---

## Dimension coverage — D1–D15, declared

Keyed against the table in [`review_process.md`](../review_process.md).

**CHECKED:** **D1/D2/D3** — Hockey Canada 7.5(a)–(e) and both paragraphs of 7.5(c), CARHA 53(a)/(b) and
its Note, USA Hockey 608(a)/(b)/(c) and its Note, NHL 43.1–43.6, PWHL 43, IIHF 43, all re-derived from
`sources/` and **read past their closing marks**; the sibling rules checked to confirm the double adverb
is the book's house form. ⚠️ **`grep "7.5(c)"` scores ZERO in `hc.txt` — the book prints `7.5 (c)`.** ·
**D5** — a missing Sources entry added in one file, an unbalanced one repaired in another; every
quotation located in the book credited. · **D6** — two pre-existing framings, *"five of the six books"*
and *"none of the six books asks who has the puck"*, **tested rather than assumed and both HELD**. ·
**D9** — the defect was found in a Key Takeaway and a facts line, both voiced alone; both repaired. ·
**D11** — a `safety-reviewer` on the whole diff: **nothing permissive, one Major, one Minor, both
fixed.** · **D12** — chunk distance **measured on the coordinator**: the body's three-book contrast lands
in one chunk, the facts lines in another, the takeaway's tail self-contained. · **D14/D15** — the build
reached `check:links`; **the render test was run on the artefact and is 0.**

**DECLARED OUT OF SCOPE, with reasons:** **D4** — no new external URL. · **D7** — not swept; the added
text is tariffs and rule scopes. · **D8** — no new figure in `content/`. · **D10** — **no
`facts-reviewer` ran on this wave**. ⚠️ **THREE facts lines are in this diff, not one** — one modified
(227/300) and two added (239/300 and 282/300). All three were read by the `safety-reviewer` and by the
coordinator, all three had their cap headroom verified, and a later gate re-derived all three from
primary text and re-checked both block caps — **but the layer was not read AS a layer.**
⚠️ **An earlier draft of this paragraph said *"the one changed facts line"* and quoted only the
highest of the three figures. A gate caught it: understating what went unreviewed is the D8 shape, in
the paragraph whose whole job is to state scope honestly.** ·
**D13** — every new sentence carries a book and a rule number.

⚠️⚠️ **Those five are the honest position, NOT a pass. Treat them as UNEXAMINED — D10 especially, since
the preceding two waves each found a blocking defect in exactly that dimension.**

---

## Shipped knowingly

- ⚠️ **The repaired takeaway leaves a clause carrying three book scopes and a mandatory tier in plain
  bold, OUTSIDE the amber run.** A skimming reader stops at the first clause and skates past it. **The
  model bullet in the same file gives that clause its own marker; the takeaway does not.** ✅ **The agent
  flagged it rather than adding one, because a new marker is new escalation, not a delimiter repair.**
  **A readability question for the owner.**
- **The inverted-emphasis artefact** above, cosmetic and pre-existing.

---

## What this wave could not find

- ⚠️⚠️ **Seven agents have now independently named the same gap: what OTHER rule in each book prices the
  same act.** Named and unswept: **Hockey Canada 7.2 boarding and 7.6/7.7 head contact, CARHA 49, USA
  Hockey 603(c) and 620(c).** ✅ ***"My negatives on those are absences of a search, not true
  negatives."*** **A check from behind into the boards is TWO fouls and only one ladder has been swept.
  This is the next real piece of work.**
- **Wrongly-scoped-but-valid emphasis**, corpus-wide. No tool can see it.
- **The double adverb in paraphrases outside one file.**
- **Whether a bold extent is the author's.** The repaired trailer entry **has never rendered clean since
  the commit that introduced it**, so no history shows what the closer was meant to enclose.
- **No agent rendered speech in this wave.** The three chunk measurements were the coordinator's.

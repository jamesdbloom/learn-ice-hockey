# Findings — audience and scope

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 3 section(s).

---

### ⚠️ AND THIS ITEM'S OWN COUNTS WERE WRONG — my extractor, same class as the marker grep

The table below said `strong side`/`weak side` were defined **4** times and `high`/`low` **3**.
Hand recount: **7 and 5.** The cause is mechanical and worth knowing: three documents bold them
**jointly** — `**Strong-side / weak-side.**`, `**High / low.**` — and the others bold them
**separately** — `**Strong side**`, `**High**`. My bolded-span extractor scored the two families as
different strings and silently dropped one. `rim`/`reverse` escaped only because those documents
*also* re-bold the bare word inline.

⚠️ **And one document was nearly missed entirely:** `neutral_zone_systems.md` writes *"A note on
language"* in lowercase, so a case-sensitive grep does not see it.

**Second measurement of mine to fail this round, both by counting a formatting artefact rather than
the thing itself** — the other being `grep 'diagram:'` matching a prose sentence. Original census
follows.

---

### The original census, 6 September 2026

**Measured 6 September 2026 against HEAD** (read via `git show`, not the working tree, because five
agents were live in `content/`). ⚠️ **Both of this item's original claims were wrong:**

- **It is NINE documents, not eight** — the row missed `positions/goaltender.md`,
  `systems/neutral_zone_systems.md`, `technique/passing_and_receiving.md` and
  `technique/shooting.md`, and named `center`/`defender`/`winger`/`breakouts`/`forechecking` only.
  **25,316 characters of language note in total.**
- ⚠️ **The terms it named as the problem are NOT the ones that repeat most.** It said *strong-side /
  weak-side* and *high / low*. Those are 4× and 3×. **The four most-repeated terms are all 6×, and
  all four are pure rink geography: `point`, `high slot`, `half-wall`, `goalmouth`.**

| term | documents defining it |
|---|---|
| `point`, `high slot`, `half-wall`, `goalmouth` | **6 each** |
| `strong side`, `weak side`, `rim`, `reverse` | 4 each |
| `slot`, `high / low`, `forecheck` | 3 each |

⚠️ **That changes the decision the item asks for.** The heaviest repetition is not tactical
vocabulary that a document might reasonably re-establish for itself — **it is location names, and
`rink_map_and_glossary.md` is their stated owner.** A document that redefines *goalmouth* is not
standing alone, it is re-deriving a definition that already has an owner, and the corpus's numeric
owner convention exists for exactly this. **Six independent definitions of `high slot` is also six
places for them to DRIFT** — and drift in that exact term is already an open finding on this plan,
where prose, `offensive_zone_play.md` and the built diagram give three different depths.

⚠️ **The extraction over-fires and must not be swept.** It keys on bolded runs, so `and`, `under a`
and `note on the headings below` scored as "terms". **Read every one before acting.** And the
item's own standing warning holds unchanged: **DO NOT SOLVE THIS BY DELETING** — *"every document
here stands alone"* is deliberate and right for a reader arriving mid-corpus.

**The shape of the answer this measurement suggests** (still a decision, not yet a task): keep each
document's *own* tactical terms, and replace the re-derived **location** definitions with a
one-line pointer to the owner — which is what the corpus already does for numeric facts.

**Eight documents carry the section. All eight are WORDED differently — but the SUBSTANCE repeats:
strong-side / weak-side and high / low are defined from scratch in `center.md`, `defender.md`, `winger.md`,
`breakouts.md` and `forechecking_systems.md`.**

⚠️ **A reader moving between documents meets the same four terms five times; a listener HEARS them five
times, in five different formulations.** **`rink_map_and_glossary.md` owns the shared vocabulary and says so.**

⚠️ **DO NOT SOLVE THIS BY DELETING.** The corpus's stated convention is *"every document here stands alone"*,
which is deliberate and right for a reader who arrives mid-corpus. **The question is whether five
restatements of *high/low* earn their place, or whether the document-specific terms (`shooting.md`'s *slot*,
`passing_and_receiving.md`'s *tape-to-tape*, `goaltender.md`'s *five-hole*) are the ones that do.**
**Measure which terms actually repeat, then decide per term — not per section.**

---


Nothing here is a defect known to be shipping wrong that could simply be corrected. Each item
is open because it needs a decision, a source that is not on disk, a tool that does not exist,
or a structural change too large to fold into a repair.

---

---

### ✅ A1 CLOSED 6 September 2026 — audience narrowed and the ratio rule written

`project/content_style_guide.md` §*Audience and purpose*. ⚠️ **The old line was the licence:** it read *"both newcomers and experienced players wanting to deepen their game"* — **a spec that names everybody names nobody**, and every marginal rules paragraph could be justified by the reader who wanted to go deeper. Now: *"a player in their FIRST TEN YEARS"*, quoting the owner. A new sub-section *The ratio: how to PLAY, not what the rule SAYS* sets the working test — **a rule earns its space by changing what the reader DOES** — and carries the counterweight explicitly, because this item collides head-on with non-negotiables 1–4 if read carelessly: ⚠️ **compressing is not deleting; where a rule's detail is what keeps a reader safe, THE DETAIL IS GAMEPLAY.** A first-year player is *more* exposed to being penalised, ejected or hurt than a veteran, not less. **Cut the discussion, never the warning.** A2's condensation pass must be read against that sub-section, not against this row.

- [ ] ⚠️ **Write the audience into `project/content_style_guide.md` BEFORE any condensing.** *"Players in
      their first ten years"* is a test that can be applied to a sentence: **does a player in year three
      need this to play better on Saturday?** Without it in the guide, every condensing decision is a
      matter of taste and the next round will re-litigate it.
- [ ] Say what the rules are FOR in this corpus: **so a reader is not surprised, penalised or hurt** —
      not so they can adjudicate. **A player needs to know a hit from behind is a major and never to
      turn their back; they do not need the three-book divergence on the wording of the exception.**

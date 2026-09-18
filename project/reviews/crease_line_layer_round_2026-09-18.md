# The crease-line layer round — 18 September 2026

**Eight documents changed, two diagram modules changed, three defect classes, and
one of my own briefs wrong three times.** This record exists because the round
started as a single stale plan row and ended as a corpus-wide class.

## How it started, and why the first row was false

`project/plans/OPEN_ITEMS.md` Workstream 4B claimed the `screen-the-goalie-sightline`
caption was the **sole carrier** of an operative crease-line instruction, to be
routed into `playing_without_the_puck.md`.

**It was not.** A layer test found that body carrying it in three layers, and
carrying it *better* than the caption — the caption names three books, the body
names three books with operative wording and rule numbers. ⚠️ **The row had been
written from the caption without reading the owner.** That is exactly the failure
the "refute the brief" instruction exists to catch, and it caught it.

## The class the false row exposed

`site/src/data/diagrams.json` gives each diagram **one** `owner`. `![](diagram:id)`
markers embed it in as many documents as want it, and `md_to_speech.py` voices the
caption **in every host**. **So an audit keyed on `owner` under-counts by
construction** — it clears one document and stops.

⚠️ **Run `python3 scripts/check_caption_hosts.py` for the figures. No count is
written here**, because a count of an actively edited corpus goes stale silently
and this repository has been burned by that repeatedly. The tool was written this
round and is its own owner.

Two things the census **cleared**, recorded so nobody re-runs them: no diagram is
built but embedded nowhere, and no owner document fails to embed its own diagram.

## Results: four hosts tested, three defects, one not the predicted shape

| Host | Keyed how | Outcome |
|---|---|---|
| `hockey-iq/playing_without_the_puck.md` | `owner` | **clean** — three layers, richer than the caption |
| `systems/zone_entries.md` | marker | ⚠️ **sole carrier** |
| `technique/body_contact_and_battles.md` | marker | ⚠️ **sole carrier**, worse |
| `foundation/rules_primer.md` | marker | ⚠️ **a different defect entirely** |

**`zone_entries.md`** sent a support player *"driving the net"* and a middle driver
*"at the net"* and **never said where the drive stops.** The crease boundary
existed only in a caption. A listener hearing the body without the figure was
driven at the goaltender with no boundary at all.

**`body_contact_and_battles.md`** was worse: its body **deferred the boundary to
another document** (*"see Rink Map"*) and then stated the permission in the next
breath — *"out there all four leave the clean screen alone."* Its facts line ended
*"And the crease line itself is unresolved"*, a tension with **nothing to act on**,
voiced alone. Three summary sections carried nothing. The only instruction sat in a
caption `md_to_speech._diagram_is_away` announces as **another document's figure**.

⚠️⚠️ **`rules_primer.md` was NOT a sole-carrier case and is the most important
result.** Its body was already correct. Its Common Mistakes and Key Takeaways said
the requirement was *"USA Hockey's and Hockey Canada's rather than the NHL's or the
IIHF's"* — **dropping the IIHF from the three books that state it** — contradicting
the owner, contradicting its own body, and **contradicting itself one clause later
in the same rendered speech chunk**.

**That is a body-✓ / summary-✗ propagation failure, the shape every critical in
round 10 was. The caption census did not predict it and could not have.** The
census *routes*; the layer test *finds*. Brief accordingly.

## The defect classes found

1. **Sole carrier** — an operative instruction living only in a caption.
2. **Body-✓ / summary-✗** — a correction that reached the body and stopped.
3. ⚠️ **TRANSMISSION in a caption.** `zone_entries.mjs` stated Rule 69's contact
   test **keyed on the attacking player's position. Both rules key on the
   goalkeeper's** — NHL 69.3 (`sources/nhl_rules_layout.txt:6085-6088`) *"while the
   goalkeeper is in his goal crease"*; 69.4 (`:6110-6113`) *"while the goalkeeper is
   outside his goal crease"*. IIHF keys identically.
   ⚠️ **The error was not symmetrical.** Where the goalkeeper is **in** the crease
   and the attacker **outside** it, the rule disallows the goal for contact
   *"incidental or otherwise"* — the caption read that case as "outside" and
   **permitted incidental contact the rule does not permit.**
   ⚠️ **No gate covers this.** `check_absolutes.py` reads captions from the build
   product, and **nothing checks a caption's rule claim against a rulebook.**

## Reviews run

| Dimension | Agent | Outcome |
|---|---|---|
| Rules, `zone_entries.md` | `rules-verifier` | no contradiction, **no deletion**; 3 confirmed-but-incomplete |
| Safety, `zone_entries.md` | `safety-reviewer` | **2 criticals**, 2 majors — all omissions |
| Rules, `rules_primer` + `body_contact` | `rules-verifier` | all 5 book positions verbatim; 1 substantive defect |
| Content, `rules_primer.md` | `content-reviewer` | 1 critical in a **different** file, 3 majors |
| Safety, `body_contact_and_battles.md` | `safety-reviewer` | 1 critical, 3 majors |

⚠️ **Every repair was reviewed and every review found something.** No repair
self-certified. **A repair is new text, and new text has not been reviewed.**

⚠️ **One repair made a chunk WORSE before review caught it:** the `rules_primer`
fix corrected a follow-up clause and left its Key Takeaway headline, **converting a
consistent error into a contradiction inside one spoken chunk** — the exact defect
it was dispatched to remove, relocated.

## ⚠️ My briefs were wrong three times, and the agents caught all three

1. **Wrong cause.** I said both plugins applied scroll attributes *"blanket"*. The
   diagram half is gated on `d.half === false` and correct. The real cause was a
   `min-width` media query **sixty lines away in `global.css`** — so all 94 diagram
   tab stops are dead above 960 px **by construction**, and none at 375.
2. **Wrong line.** I said `offensive_zone_play.md:563` carried the *"significant
   position… more than an instantaneous period"* narrowing. It is the Table 14 /
   Situation 6 D **penalty-disagreement** paragraph. The narrowing is at `:557`,
   `:535`, `:565`, `:1062`, `:1127`.
3. ⚠️ **Wrong constraint, told to FIVE agents.** I wrote *"the 300-character cap"*.
   `scripts/check_facts.py:76-77`: `MAX_LEN, MAX_LEN_QUALIFIED = 200, 300`,
   `QUALIFIED = {"Rule", "Convention"}`. **Only `Rule:` and `Convention:` reach
   300.** One agent was editing a `Key:` line with **11 characters of headroom, not
   111**; it measured rather than trusting me and fitted at 197/200. **Had it
   trusted the brief it would have traded out a caveat it thought it had room to
   keep.** `project/content_style_guide.md:853` had it right all along.

**All three are routing defects, not diligence ones.** A brief stating a wrong
constraint produces an agent working to a wrong constraint.

## A checker race, observed rather than theorised

`check_absolutes.py` exited **2** on one agent's first run (*caption layer
uncertified, 0 units*) and **0** on its last (*408 units*), **with no edit of its
own** — another agent rebuilt `diagrams.json` mid-round. The agent ran no build and
did nothing wrong. **A checker result taken while agents are live proves nothing in
either direction.**

## Gates — run after every agent finished, which is the only run that counts

`check_links` 0 · `check_facts` 0 · `check_absolutes` 0 · `check_geometry` 0 ·
`check_secrets` 0 · `check_counts` matches.

## Coordinator's whole-corpus diff

Run after all agents finished, because **no checker sees an agent-vs-agent
contradiction** and `239f70d` exists for one. Every changed document's crease-line
layer read side by side: **consistent.** No document states the two-book form; none
asserts NHL silence without its table caveat.

⚠️ **The heuristic flagged five lines and reading them cleared three** — a
penalty-tier takeaway, a glossary definition and a document that already carried the
split. **A sweep would have damaged all three**, which is the `check_rule_scope.py`
lesson again.

## ⚠️ WHAT THIS ROUND COULD NOT HAVE FOUND — and one live inversion

⚠️⚠️ **THE OWNER IS NOW LESS PRECISE THAN THE DOCUMENTS THAT CITE IT.**
`content/foundation/rink_map.md:18` and `:570` still read *"only the NHL leaves it
unsaid"* flat, while the eight repaired documents now say the NHL's **rule text**
leaves it unsaid and its **Reference Table 14** answers it the other way. **The
repairs propagated outward from the owner and never went back to it.** Not false —
**less precise than its dependants**, which inverts the ownership relation the
style guide relies on. **Open; `rink_map.md` was in no agent's file set this round.**

- **Sixteen documents carry this instruction and only one body was read whole.**
  The worst defect in `rules_primer.md` was a **body** sentence — the section's
  emphasised closing line — found by reading, not by grepping. **Fifteen bodies are
  unread.** One-for-one is a reason to look, not a rate.
- **Nobody heard any of it.** Every layer judgement came from reading rendered SSML.
- **No screen reader was run** over the scroll-region change, and two desktop bands
  where the stylesheet says a full sheet still overflows were never censused.
- **Attribution drift is invisible** to `check_quote_drift.py` — it keeps the
  closest match across all sources, so a sentence credited to the wrong book scores
  clean. ⚠️ And the **IIHF prints `"significant position"` inside its own quotation
  marks where the NHL does not**, so a copy-paste of the NHL string attributed to
  both books would pass every tool.

---

# ADDENDUM — findings enumerated, after a commit-gate BLOCK

⚠️ **The record above gave COUNTS where the gate needed NAMES.** It said *"2
criticals, 2 majors"* and *"1 critical, 3 majors"*, which is not enough to apply
**C11's terminating rule**: whether each repair was *confined to its finding,
re-derived from primary text and recorded* (clearance survives) or *moved, merged,
split or renumbered* text (clearance void). **A reviewer's clearance is only as
current as the text it read.** This addendum fixes that, and records what the gate
found that this round had missed.

## The gate's blocking findings — what the record got WRONG

⚠️⚠️ **THE WHOLE-CORPUS DIFF IN THE RECORD ABOVE WAS WRONG, AND IT WAS MINE.** It
says the eight documents were consistent. They were not:

- `rules_primer.md:995` and `:1139` still carried the flat *"only the NHL leaves it
  unsaid"*. ⚠️ **`:995` was followed IN THE SAME SPOKEN CHUNK by *"The NHL and the
  IIHF allow the screen on the line at 5E above."*** The NHL leaves it unsaid, and
  the NHL allows it — **the identical self-contradiction this round was dispatched
  to remove, repaired at the two-book error and left standing at the "unsaid"
  clause.**
- `offensive_zone_play.md:1127` — the same, **inside the line the repair rewrote.**
- `language_and_glossary.md:327` (**the vocabulary owner**) and `time_and_space.md:615`
  (**a Key Takeaway with no counterweight anywhere in its file**) — ⚠️ **both
  OUTSIDE the round's diff, so a diff of changed documents could not see them by
  construction.** The record's *"what this could not have found"* named only
  `rink_map.md`.

⚠️ **My heuristic checked whether a table caveat appeared within two lines. It did —
alongside the flat clause, which still stood.** Proximity is not correction.

## Repairs, enumerated — for C11

| # | File | Finding | Repair shape |
|---|---|---|---|
| 1 | `zone_entries.md` | boundary absent from middle-drive facts block | **confined** — block edit |
| 2 | `zone_entries.md` | consequence stated as lost goal, contact limb absent | **structural** — 4 layers |
| 3 | `zone_entries.md` | IIHF split attributed to NHL alone | **confined** |
| 4 | `zone_entries.md` | 2 of ≥5 net-drive instructions reached | **structural** — new `Rule:` fact |
| 5 | `body_contact_and_battles.md` | give-ground duty absent from all 5 layers | ⚠️ **structural — and INCOMPLETE, see below** |
| 6 | `body_contact_and_battles.md` | *"the NHL leaves it unsaid"* wrong in 3 layers | **confined** |
| 7 | `body_contact_and_battles.md` | cost never stated | **confined** |
| 8 | `body_contact_and_battles.md` | quotation read as permission to enter the crease | **confined** — framing only, quote untouched |
| 9 | `rules_primer.md` | KT9 headline contradicted its own chunk | **structural** — headline rewritten |
| 10 | `rules_primer.md` | `:734`, `:720` closing instructions pre-repair form | **confined** ×2 |
| 11 | `rules_primer.md` | `:995` opener used the narrower qualifier | **confined** |
| 12 | `offensive_zone_play.md` | KT5 named two books | **confined** |
| 13 | `rink_map.md` (**owner**) | flat form at `:18`, `:186`, `:188`, `:570` | **confined** ×4 |
| 14 | `special_teams.md` | three phrasings in one document | **confined** ×2 |
| 15 | `language_and_glossary.md` | vocabulary owner less precise than dependants | **confined** |
| 16 | `time_and_space.md` | KT9 flat, no counterweight in file | **confined** |
| 17 | `playing_without_the_puck.md` + `winger.md` + `zone_entries.md` | *"three books' rule text"* — wrong LAYER | **confined** ×5 |
| 18 | `defensive_zone_coverage.md` + `special_teams.md` | bare IIHF table number, no edition | **confined** ×2 |

⚠️ **Repairs 2, 4, 5 and 9 are structural, so their reviewers' clearance does NOT
carry to the final text.** 2 and 4 were re-reviewed by `facts-reviewer`; **5 and 9
were not re-reviewed after their last edit.**

## ⚠️ STILL OPEN — this round does not clear

**CRITICAL, from `facts-reviewer`: repair 5 is incomplete and the cap is why.**
`body_contact_and_battles.md` §9 is at `HARD_MAX` 11, so the give-ground duty could
not be added as a `Rule:` fact and was folded into a `Technique:` line **with no rule
number, no book and no penalty.** NHL 69.3 is mandatory (*"will receive a minor
penalty"*). ⚠️ **Voiced alone it is a coaching preference. Following the facts layer
alone earns a penalty.**

Plus three majors — *"privileged area"* dropped from three `zone_entries.md` facts;
Hockey Canada 8.5(b) absent from two **section bodies**; and
`playing_without_the_puck.md:588`, the only crease-line fact in the corpus ending
permissive with no instruction. **All detailed in `project/plans/OPEN_ITEMS.md`.**

## ⚠️ DIMENSIONS STILL UNCOVERED

- **D15 / C10** — `site-reviewer` dispatched, **not yet reported**.
- **D4, D5** — no new external URLs in the diff. **Declared OUT OF SCOPE**, which the
  gate required be *written* rather than assumed.
- **The 55 layer-attribution candidates** — census run, crease-line repaired,
  **remainder explicitly unverified.**

## What this addendum still could not establish

⚠️ **`facts-reviewer` stated its own blind spot and it is the one that matters:**
*"Nothing I did tests the facts layer against the RULEBOOKS; it tests it against the
BODIES, and where a body is short the block inherits the shortness and I call it
traceable."* **A section whose body omits a rule set's harsher answer, in a document
whose summary layer also omits it, passes clean.** It found the Hockey Canada gap
only because that document's Key Takeaways happened to carry it.

⚠️ **And the dispatcher was refuted FIVE times** — a wrong cause, a wrong line, a
wrong cap told to five agents, a wrong count, and a wrong *"left unchanged"*. **Every
one was a locator, a count or a constraint; none was the substance. Every one was
caught by the agent that had actually read the file.** The briefs remain more
defective than the corpus.

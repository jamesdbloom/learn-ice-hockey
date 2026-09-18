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

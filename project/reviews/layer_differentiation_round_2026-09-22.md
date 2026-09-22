# The layer-differentiation round — and the dispatcher as the defect

**22 September 2026.** Fifteen agents across five waves. Six `content/` documents repaired, every
repair independently reviewed, four sent back for a second pass because review found defects in them.
**Nothing committed at the time of writing.**

This record exists mainly for one finding, which is not about the corpus.

---

## 1. What was dispatched, and why

The owner made **layer differentiation** the highest-priority content focus: Key focus, Overview and
Key Takeaways had been reading as repetitive rather than reinforcing. `scripts/check_layer_echo.py`
was written to measure it, and its top candidates were dispatched one agent per disjoint file set.

**Repairs:** `special_teams.md`, `offensive_zone_play.md`, `switching_positions.md`,
`passing_and_receiving.md`, `conditioning_and_recovery.md`, `skating.md`.
**Review dimensions run:** `rules-verifier`, `safety-reviewer`, `content-reviewer`, `source-verifier`.

---

## 2. ⚠️ The dispatcher's briefs were wrong TEN times. One reached the corpus.

**Not one was caught by a checker.** Nine were caught by agents told to *refute the brief before
acting on it*. The tenth was caught by a reviewer with the primary text open.

| # | Error | Caught by |
|---|---|---|
| 1 | **"Every layer is voiced alone with a 300 ms break either side"** — true only of ` ```facts ` lines. Prose paragraphs are grouped: `special_teams.md`'s Overview renders as **five `<p>` in ONE chunk**. Went into at least five briefs. | Two agents, independently |
| 2 | `sources/ibc.txt:672` cited as the Case-2 posture. It is **Case 3**. The corpus used it correctly; the brief did not. | `safety-reviewer` |
| 3 | The wrong layer pair named as defective in `passing_and_receiving.md`. | Repair agent |
| 4 | 🔴 **A rule number attributed to the wrong place.** `body_contact_and_battles.md:721` named as a Hockey Canada 7.5 quotation. **It is IIHF 48.1.** The HC scenario is `:750`, where the corpus deliberately carries **no** rule number. | Repair agent, which **refused to write "7.5"** |
| 5 | The rim's *"Beats: a checker sealing you against the wall"* placed in the facts block. It is a **table cell**. | Repair agent |
| 6 | A line number off by one. | Repair agent |
| 7 | A line number quoted **across an edit that had shifted the file**. | Coordinator, on re-check |
| 8 | Over-claimed what `check_absolutes.py` covers (it is scoped to the **penalty-tier** subtype only). | `content-reviewer` |
| 9 | 🔴🔴 **See §3.** | `rules-verifier`, then `safety-reviewer` |
| 10 | *"into the contact"* called the corpus's dominant form for **forearm and hip**. A census says the **wall** referent dominates ~20 to 3 — and *"to the checker"* was the **only** instance in the corpus putting that pair on the checker, contradicting the document's own override 200 lines above. **The suggested fix was also wrong.** | Repair agent |

⚠️ **The pattern: errors 1, 8 and 10 were all plausible generalisations stated with confidence.**
None came from carelessness about facts; each came from asserting a *scope* the dispatcher had not
measured. **That is the failure mode of the role, and it is invisible to every checker in this
repository.**

---

## 3. 🔴🔴 The one that reached the corpus — a licence for a mandatory major

A repair added to `passing_and_receiving.md:203`:

> *"Head down along the wall digging at a puck is the exact shape a checking-from-behind rule is
> written around, **and it is the shape at least one book will not penalise a hit on**"*

**The second limb is false, and false in the direction that produces a hit.**

- **IIHF 48.1** (`sources/iihf_rules.txt:4278-4279`) waives **one named penalty** under **four
  cumulative conditions**, including that the opponent be skating *"with their head down **in the
  direction of the Player**"*. A player rimming along the wall faces **the boards**, checker behind.
- That posture is **IIHF 43.1**, and **43.2**: *"there is no option to award a minor penalty for
  'Checking from Behind'."*
- **Hockey Canada 7.5(ii)** names this exact picture among situations referees must *"strictly
  enforce"*.
- **NHL and USA Hockey write no head-down carve-out at all.**

⚠️ **The endangered reader is not the receiver the paragraph addresses — it is a checker who reads
it.** `rules-verifier`'s framing: *"Stripping conditions from a prohibition costs a reader a penalty;
stripping conditions from a **carve-out** hands them a licence."*

**Cause: the dispatcher's brief quoted IIHF 48.1 as hazard justification without its four
conditions, and the agent wrote a sentence in the brief's own shape.** ⚠️ **"Refute the brief" did
not protect against it, because the brief's *facts* were right and its *scope* was wrong.**

**Repaired**: the false limb is gone from both sentences; the surviving limb now carries **Hockey
Canada Rule 7.5** and the sentence *"That names a hit you are exposed to, not one anybody is entitled
to make."*

✅ **Corpus-wide sweep: the defect was isolated to the new text.** The corpus already states this
correctly in at least five documents (`body_contact_and_battles.md:706-707`, `rules_primer.md:461`,
and the *"not a licence to punish them"* form in `defending_the_rush.md`, `defender.md`,
`neutral_zone_systems.md`). **No sibling had copied it.**

---

## 4. Three blind spots in the tool written for this round

All three point the **same way** — they make a repair that *moved* a defect look like a clean win.

1. **A truncated safety list scores LOWER.** `conditioning_and_recovery.md`'s Overview carries **six
   of CRT6's ten** red flags. A layer carrying a safety list in full scores high and looks like a
   defect; six of ten looks clean. **The gradient points at truncating safety lists.**
2. **`("Overview", "Common Mistakes")` was missing** — the pair with the Overview as a member, the
   layer this wave rewrites. A repair took `switching_positions.md` from **5 shared words to 18
   verbatim** with Common Mistakes while cutting its Key focus overlap, and **scored as a clean win**.
3. **The `≤4-character` word filter** means the score measures content-word overlap, not what a
   listener hears — those 18 verbatim words produce **zero** shingles.

**All three are now in the tool's docstring.** ⚠️ **Adding the sixth pair closed a structural gap and
NOT the detection gap: the instance that prompted it still scores 0.0%.**

---

## 5. Other findings of record

- 🔴 **`special_teams.md:938`** voiced a shot-blocking instruction with *"never from a screening
  position"* missing — **body ✓ / facts ✗ inside one section**, in the 6-on-4 case where the goalie
  is screened. Pre-existing. Fixed at 168/200 chars.
- 🔴 **`skating.md`** asserted standing too tall is *"ranked by none of them"*. **Athletes Untapped
  ranks it** — and that sentence is the **first bullet of a four-item list the document had already
  quoted twice**. Fixed at three sites; the scepticism that survives is *"nobody has counted skating
  faults by frequency"*, which holds.
- **`body_contact_and_battles.md:750`** says Hockey Canada *"lists the two scenarios"*. **The rule
  lists four**, introduced as *"situations such as the following"*. Open.
- **A safety limb carried only by a borrowed caption.** Before this round, `passing_and_receiving.md`'s
  rim section had no posture caveat in its own layers — only in a caption imported from `winger.md`.
  **`check_caption_hosts.py`: 204 diagrams, 87 multi-host, 74 rule-like pairs.** Open.
- **Both cleared podcast episodes transcribed** — **25 of 25 safety limbs survived synthesis**.
  The equipment ordering concern now has measured timestamps (56:03 / 57:39, recap 1:23:03).
- **A fabricated number in shipped audio**: the skating script says *"five strides earlier"*; the
  corpus says *"several strides out"*, three times, and never a number.
- **`sources/page_1975.txt`** — cited, on disk, **undocumented**. Now written up, including that it is
  **not in `fetch_sources.sh`** and cannot be rebuilt.

---

## 6. What was checked and deliberately NOT changed

**Recorded because a correct "change nothing" is a result.** `conditioning_and_recovery.md` was a
**false positive** and nothing was cut. The bank-pass block was left without the posture limb — the
skill enforces eyes-up, so the hazard is not there. The borrowed-caption duplication is **correct
propagation**. `passing_and_receiving.md`'s 31.9% pair was upheld as **mandatory repetition**. And a
proposed new row — a Key Takeaway "voiced alone" without its alternative — **was refuted by the
coordinator by rendering**: the qualifying item is in the same spoken unit, and in the facts block the
`Convention:` line is the very next utterance.

---

## What this method could not have found

- **Whether any of it is true.** Rules claims were verified against primary text; the **coaching**
  claims were not, and cannot be from this repository.
- **Whether the repairs read well aloud end to end.** Individual units were rendered and read.
  **Nobody listened to anything.** The ear test remains undone, and both podcast episodes are still
  unheard by a human.
- **The other 33 documents.** `check_layer_echo`'s list is not exhausted;
  `conditioning_and_recovery.md` still tops it at 32.1%, and `winger.md`, `defender.md` and
  `practice_and_development.md` are untouched.
- **Whether the paraphrase class of §3 exists elsewhere in other words.** *"declines to protect"* and
  *"will not penalise a hit"* are now absent corpus-wide; *"one book allows"*, *"is not a penalty
  under"* and their kin were **not** swept.
- **The site.** No Astro build was run this round. No diagram source changed, but
  `site/src/data/diagrams.json` was not rebuilt, so whether deployed caption text still matches its
  `.mjs` source is unverified.
- ⚠️ **Whether this record is complete.** It was written by the coordinator whose briefs it
  indicts — **the least reliable available narrator of this round.**

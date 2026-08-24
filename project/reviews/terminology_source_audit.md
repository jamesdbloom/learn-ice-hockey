# Terminology source audit — team tactics

> **Archive. Not a plan.** The term-by-term audit and its source evidence. **The work it defines
> is in [`OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md)**, which is where to look for what is outstanding.
> ⚠️ **§3 is stale**: Outlet, Stretch pass, Walk the line, One-touch, Shoulder check, Net drive
> and Attack triangle have since been added to the glossary. Re-derive before working from it.


**Status: proposed, not started. No `content/` file has been touched.**

A reader who has sat a coaching course meets a vocabulary this corpus does not carry.
Sixteen terms from a course terminology paper were checked against `content/`: four are
well covered, two are half covered, and **ten do not appear anywhere at all**.

---

## 1. What the audit found

| Term | In `content/` today |
|---|---|
| Give-and-go | ✅ Glossary entry + 5 documents |
| Gap | ✅ Glossary as *Gap control*, with distances |
| Zone coverage | ✅ Its own document |
| Switching | ✅ Defined with the "switch when it's clean and both call it" rule |
| Sagging | ⚠️ Only as *"sagging zone"*, a name **for the system** — not the individual tactic |
| Defending a second wave | ⚠️ Phrase used in 6 documents, never defined |
| Stretch skating · Pass to open space · Headman · 1-2-3 principle of attack · Pass and follow · Back man · Active away from puck · Backside coverage · Overplay · Balanced defence | ❌ **Zero hits** |

**The pattern is the finding.** The 115-entry glossary is strong on rink geography, systems
and player slang, and almost empty of the formal coaching-syllabus vocabulary. The corpus
teaches most of these *concepts* — it just does not carry the *words*, so a player revising
for a course, or a parent reading a coach's notes, cannot look them up.

---

## 2. The source, and why this is unusually clean

**Primary source: IIHF Coach Development Program, Level I, Tactical — section 19 carries a
full alphabetical terminology glossary.** It defines almost every missing term verbatim.

- `https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf`
- **sha256 `9b195d0325f74ccc2601b20ef009c77e44abd19c70dd09980babed21f5edbe01`, 750,071 bytes**
- Re-downloaded 2026-08-17. **The hash matches the one already recorded in
  `site/scripts/lib/rink.mjs`** — this repository verified this exact file on 2026-07-30 and
  cites it as the authority for the diagram notation (section 21.1). The provenance work is
  therefore already done and independently re-confirmed.

That matters for the review gate: this is not a blog. It is a governing body's coaching
manual, already trusted elsewhere in the corpus, and now byte-identical on a second fetch
five weeks apart.

### What the manual defines, quoted

| Term | IIHF Level I, §19 wording |
|---|---|
| **Give and Go** | "An offensive tactic; pass and aggressively skate to become an option for the player just passed to." |
| **Headman Pass** | "Passing to a player ahead of the puck carrier and in a better offensive position." |
| **Backman Pass** | "A pass back, in the direction of your own goal, in order to…" |
| **Overplay** | "A defensive player intentionally plays tighter on a player than normal in order to take away time and space from the offensive player." *(plus an offensive variant)* |
| **Sagging** | "Defenders away from the puck, adjusting their positions to support defenders playing the puck carrier." |
| **Balanced Defence** | "Balance implies depth and width in defensive alignments to…" |
| **Force Outside** | "Any action by the defender to force the play to the outside away from the middle lane and prime scoring area." |
| **Stretching the Defence** | "Skating aggressively ahead or away from the puck at the appropriate time to spread out the defence." |
| **Switching** | "Exchange of defensive responsibilities between two defensive players." |
| **Weak Side (Backside)** | "The side of the ice opposite to where the puck is being controlled." |
| **Wideman Pass** | "To use width of the ice to change the point of attack." |
| **Triangulation** | "Any offensive formation which creates offensive triangles, thus providing the puck carrier two passing options and enabling the offensive team to create width and depth in the attack." |
| **Support** | "Players away from the puck make themselves available as a passing option in the attack. Players away from the puck are active by positioning themselves in a manner which restricts options." |
| **Closing the Gap** | "A retreating defenceman adjusts speed and skating pattern so the…" |
| **Defensive Side** | "Establishing a position between an opponent and the net." |
| **Stall / Contain** | "…force an opponent to stop or slow down the speed of an attack to provide time to set up better defensive coverage." |
| **Riding Your Check** | "…the defensive player rides or sustains the check on a player who passes the puck, so that this individual cannot get open for a return or give and go pass." |
| **Quiet Zones** | "Space in the corners and behind the net in the offensive zone which is generally uncovered." |

### Two resolutions the manual settles

- **"Stretch skating" matched to a pass that goes the width of the ice** was the one
  doubtful pairing in the terminology paper. The manual has **two separate entries**:
  *Stretching the Defence* is **skating**, and *Wideman Pass* is "to use width of the ice to
  change the point of attack." So the paper's statement conflates two IIHF terms. The
  glossary should carry both and say plainly that they are different things.
- **"Active away from puck"** is not a headword in the manual; the concept lives inside
  **Support** — "players away from the puck are active by positioning themselves in a manner
  which restricts options." So it should be a cross-reference, not an invented entry.

### What the manual does **not** define, and what to do about it

| Term | Finding | Proposal |
|---|---|---|
| **1-2-3 principle of attack** | No such headword, and no "first/second/third option" phrasing anywhere in the manual | **Do not invent it.** Search Hockey Canada / England Ice Hockey material; if unfound, either omit or carry it labelled *"a term used in coaching courses; no governing-body definition located"* |
| **Backside coverage** | Appears in §20's **contents list** as a topic but has no glossary entry | Fetch the defensive-tactics companion section before writing it |
| **Defending against a second wave** | Same — a contents-list topic, not a glossary entry | Same |
| **Pass and follow** | Appears only as a drill purpose, not defined | Define from the drill's own wording, or leave as the corpus's existing give-and-go contrast |

**Sources still to try**, in the order likely to pay:
`hockeycanada.ca/en-ca/hockey-programs` (NCCP terminology) · `usahockey.com/coaches` and
the Mobile Coach app content · `englandicehockey.com` · `ukcoaching.org` ·
`icehockeyuk.co.uk` · `prosmartsports.com`.

⚠️ **One of your listed sources is not what it says.** `www.hockeycentre.org` **301s to
`hockeycentre.fi`** — the **Finnish** Ice Hockey Association's coaching platform, not the
IIHF. It is a login-gated practice-planning product with no public glossary. Worth knowing
before anyone cites it as IIHF material.

---

## 3. Other widely used terms worth adding

Already used across the corpus but with **no glossary entry**, so unfindable:

| Term | Used in | Why it matters |
|---|---|---|
| **Outlet** | 22 documents | Central to breakouts and never defined |
| **Stretch pass** | 12 | And it must be distinguished from *stretching the defence* |
| **Walk the line** | 7 | Point play; the diagrams show it |
| **One-touch** | 7 | Passing standard |
| **Shoulder check** | 8 | Scanning; safety-relevant |
| **Net drive** | 3 | |
| **Attack triangle** | 2 | The thing *balanced defence* counters — the pair only works if both exist |

From the IIHF glossary, worth carrying because they name things the corpus teaches
unnamed: **Lane · Lateral Feed · Numerical Advantage · Concentration of Attack · Cross ·
Commit · Close Coverage · Pinning Technique · Transition · Pressure (offensive and
defensive, which the manual separates) · Head on a Swivel · Puck Protection**.

⚠️ **One conflict to resolve, not paper over.** `site/src/data/rink.json` records that
relational terms including **"quiet ice"** are *"deliberately absent"* because "those are
not points on a rink." The IIHF manual defines **Quiet Zones** as a named area. Both
positions are defensible — the exclusion is about a *coordinate table*, the manual is about
*vocabulary* — but whoever writes the entry must say so rather than silently reversing a
recorded decision.

---

## 4. The work, in order

1. **Fetch the outstanding sources** for the four unsourced terms. Record URL, sha256, byte
   count and retrieval date for every PDF, as the corpus does.
2. **Write the glossary entries** in `content/foundation/rink_map_and_glossary.md` §8,
   alphabetically, in the house one-or-two-sentence format, with **bold cross-references**
   and *"Not the same as"* where two terms are confusable — which here is often:
   *stretching the defence* vs *stretch pass* vs *wideman pass*; *sagging* the tactic vs
   *sagging zone* the system; *backside* the side of the ice vs *backside coverage* the
   tactic; *pass and follow* vs *give-and-go*.
3. **Label every entry as convention, not law.** None of this is a rule. The corpus's
   cardinal rule is that a coaching choice must never read as a law of hockey.
4. **Propagate.** Body → ` ```facts ` blocks → Common Mistakes → Key Takeaways → the
   owning documents that already teach the concept, so the term resolves from both
   directions. Every critical in review round 10 was a correction that reached the body and
   stopped.
5. **Add the Sources entry** naming the IIHF manual as the authority for the terminology,
   with the hash.
6. **Run the checkers**: `check_links.py`, `check_facts.py`, `check_secrets.py`.
7. **Review**, then commit. See the gate below.

**Suggested split:** the ~18 IIHF-sourced entries first as one reviewable change; the
seven corpus-internal entries second; the four unsourced terms last, only if sourcing
succeeds.

---

## 5. Two blockers to clear before writing

**The review gate.** Nothing that changes `content/` is committed until it has been
adversarially reviewed and the review is on record. A glossary is the worst place for a
wrong definition, because it propagates into every document that links to it. This change
needs `content-reviewer` (house style, convention-not-law, propagation),
`facts-reviewer` (the facts blocks), `source-verifier` (the quotations located in the
rendered PDF, and the sha256 re-confirmed) and `commit-gate` on the staged diff, with a
record in `project/reviews/`. **I have not dispatched them — say the word.**

**Another agent is working in `content/`.** Round 31 has staged changes to
`rules_primer.md`. The glossary is a corpus-wide file and exactly the kind that gets
clobbered. Before writing: `git status` and `git log -1`, and re-read the glossary at that
moment rather than trusting anything read earlier.

---

## 6. What this plan could not establish

- Whether the terminology paper the audit started from **is** the IIHF Level I syllabus or a
  national adaptation of it. The overlap is high enough to be near-certain, but the paper
  itself carries no attribution, so the corpus should cite the IIHF manual it can verify
  rather than a course handout it cannot.
- Definitions for **1-2-3 principle of attack**, **backside coverage**, **defending a second
  wave** and **pass and follow**. Two of the four appear in the manual's contents list, so a
  companion section almost certainly defines them — that section has not been located.
- Whether **USA Hockey and Hockey Canada use the same words for the same things.** The
  corpus's own experience is that they frequently do not, and where two governing bodies
  diverge the corpus records both rather than picking one. That check has not been done.

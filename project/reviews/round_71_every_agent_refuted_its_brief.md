# Round 71 — every agent refuted its brief, and that is the finding

**9 September 2026.** Coordinator plus nine agents, in one wide wave on disjoint file sets, plus a
between-waves tool fix. This record is written as the round runs.

---

## The headline: NINE briefs, NINE refutations

⚠️ **Every agent in this wave found something wrong with the brief it was given.** Not one of the nine
was able to take its premise on trust. The instruction that produced this — *"treat this brief as a
hypothesis and refute it before acting on it"* — is doing more work in this repository than any checker.

| what the brief claimed | what was true |
|---|---|
| `forechecking_systems.md:526` *"never names the skate"* | **It already did** — added in `3f5d6f0`, corrected in `35bddbb`. **The coordinator's own commits.** |
| the IBC *"extended arms"* line is *"quoted NOWHERE in the corpus"* | **Quoted verbatim at `body_contact_and_battles.md:720`**, ten lines above the disclosure said to understate it |
| the caption says going down early *"puts you on the ice in front of traffic"* | **The caption says no such thing.** No "traffic" claim anywhere |
| 12 host-unsafe captions, enumerated | **The 12 is right; the list was one short** (`scan-the-danger-in-your-own-end`) |
| `describe` sweep: 44 sentences | **43.** It moved again, exactly as the brief warned it would |
| *"five other lines carry the phrasing verbatim"* | **Nine occurrences, but only two are `Key:` facts lines** |
| every rewrite lands at **202-217** chars | **Floor was 220**; readable versions 240-250 |
| twin-count drift will be in `winger.md` | **Refuted.** Its `Never:` values are byte-identical triplets |
| the extension blocks `localhost` | **It blocks the public HTTPS host too** |
| file ownership, as declared | **Stale** — three agents were dispatched after the brief was written |

⚠️ **The coordinator has now put EIGHT wrong premises into briefs across two rounds.** Agents caught all
of them. **The dispatcher is the unreviewed link in this loop, and nothing points the refute-the-brief
instruction at itself.**

---

## What the wave actually found

### ⚠️ A safety-critical double negative in a caption

`off-wing-open-to-the-ice`: *"Two things this picture cannot show **and you must not do**: never turn
your back to the boards…, and never duck."* ⚠️ **Composed literally, that instructs the reader to turn
their back.** Repaired to *"…and both of them are prohibitions:"*.

### ⚠️ A phrase-defined class cannot find the claim stated in other words

The `"can break your neck"` class was censused **by its phrase**, at 8 sites. All four unread ones came
back **SOUND** — the correct outcome. **Then the agent found a real defect the census could never see:**
`puck_handling.md:398` had *"that injury"* with **no antecedent in its own clause**, reaching back across
a semicolon to the hit-from-behind half, so a listener got the walking-speed finding attached to *turning
your back* — which that document's own trailer says USA Hockey does not say.
⚠️ **Its own first pass missed it too:** a hand-written facts-label list omitted `Risk:`. **It surfaced
only from a full speech render.** No checker can see a demonstrative with the wrong antecedent.

### ⚠️ A count is a cross-file dependency, and nothing declares it

Two documents' enumerations had gone stale — but **not by miscounting**:
- `forechecking_systems.md:863` was **correct at "two"** until its twin `:531` **gained** the shoulder-tip
  limb and became three. **The list under the other copy grew.**
- `defender.md` said two where the owner says three, because the third had been **dropped in
  compression** — and its own *"Check yourself"* asked for *"the three things you never do"*.

**Censused corpus-wide: 22 counted-prohibition sites, all correct.** ⚠️ **So the class is not "counts go
wrong" — it is that adding or removing one item from an enumerated safety list makes every sibling's
count wrong, in a file the editor may never open.**

### ⚠️ `rush-gap-and-angle` was false in ALL FOUR hosts

The clause *"the stick and a half **this section** targets at the red line"* is false **even in the
owner's own hosting section** — the diagram sits in §"Angle to take the middle", the figure lives in
§"Target distances", and `body_contact_and_battles.md:174` says in terms *"This section sets no distance
of its own."*

---

## ⚠️ THREE SITE MAJORS, NONE VISIBLE TO ANY CHECKER — and one was this round's own regression

**1. The sticky bar never stuck, and the accessibility fix is why.** Measured live:
`getBoundingClientRect().top` **120 → −280 → −5382**. `bottom`-stickiness only holds a box whose flow
position is below the viewport bottom — and **this round moved the player ahead of `<article>` for
keyboard order** (it had been the **184th tab stop** on a bar visible from first paint). ⚠️ **Neither
change was wrong on its own.** Proved with a minimal case, not inferred; `overflow-x: clip` ruled out by
live override. Fixed to `top: var(--header-h)`, the house pattern — and **the two decisions are now
recorded as COUPLED.**

**2. The zero-off-origin property was already gone before the player shipped.** `AudioPlayer.astro`
justified self-hosting on it. GA4 is deployed, intentional, and CSP-allowed. ⚠️ **The reviewer
attributed it carefully rather than filing a regression** — clean profile, zero extension requests, so
not the WalkMe machine-policy artefact a previous pass correctly identified.

**3. CSP silently blocked a component on every document page.** `CiteThis.astro`'s comment said *"A
bundled Astro script, not an inline one"* — right about the policy, wrong about what Astro does with a
script that small. Live: **3 citation blocks, 0 copy buttons.** ⚠️ **`public/audio-player.js`'s own
header documents this exact trap. The note lived in the file that had already learned it.**

⚠️ **`check_links`, `check_facts`, `check_absolutes` and the build passed throughout all three.**

---

## Two agents caught themselves, and one caught the coordinator

- The caption agent's first `winger-dz-rim` repair read *"not the whole of it: feet wide and low and
  still moving"* — **main-clause negation, colon, bare imperative. Inverted, it tells a player to stop
  moving their feet on the wall.** Rewritten before committing.
- The `switching_positions` agent's first draft put an **em dash after each prohibition** — the style
  guide's named inversion shape 1. Changed to full stops.
- The `body_contact` agent's first draft said *"the shoulder point above"*; rendering showed that item is
  **in a different audio chunk**. ⚠️ **`check_pointers.py` did not flag it.**
- ⚠️ **An agent re-flagged the `risk_management.md` 37→38 chunk hit that the coordinator had adjudicated
  as a false positive.** Re-read: chunk 38 carries the decision **and** its posture together, so the
  original verdict holds. **The tool's docstring now records the challenge and the reasoning, because a
  verdict nobody can re-derive is not a verdict.**

## Restraint, which is a result

The `winger.md`/`zone_entries.md` agent edited **2 sites out of 32**, and left three that **fit** the
limb — because taking them would have put that document at double the corpus norm. It reported a
measured collision (**199/200**, shortest limb takes it to **232**) rather than trimming a hedge.
⚠️ **The census it relied on was relayed and it said so; the coordinator re-derived it as 22-in-177
against the brief's 16-in-108. Both are properties of their regex. The RATIO — ~12% — is what the
restraint actually rested on, and it survives the difference.**

## The tool fix, done between waves as the row required

`md_to_speech.py`: the arrow needed a **label-aware** fix because the 25 values are two notations —
22 `Read:` conditionals where a comma destroyed the inference, and 3 `Priority:` ranked chains where it
survives. The flag was wrong **126 times**, not once. Verified: 123 correct lead-ins, zero commas, zero
raw arrows.

## What this round could not have found

**Nobody has heard the audio.** The player was proved to load, seek and resume against real files on all
37 pages — but headless Chrome has no audio sink. ⚠️ **A 57-minute file that is silence after the first
minute, or the wrong document, or the channels dropped, would be indistinguishable from a correct one in
every measurement in this record.** The highest-value single check left is one facts block heard aloud.

And the corpus-wide audit for **dangling antecedents**, and for this hazard **stated in other words**,
has not been run — only a subject-matter layer test over two files. `switching_positions.md:125` was
found that way, by falling out of a different grep.

---

# COVERAGE — which agent saw which staged file, and which dimensions were exercised

⚠️ **A commit gate blocked because this record named no reviewer and declared no dimension.** *"Nine
agents"* and *"the caption agent"* are not coverage. Silence on a dimension is the failure mode, and the
silence on **D5** is exactly where that gate then found a false attribution.

| staged file | who read it |
|---|---|
| `technique/skating.md`, `technique/body_contact_and_battles.md` | authoring agent; `commit-gate` (which re-derived every rule claim and **found the D5 defect below**) |
| `technique/puck_handling.md`, `hockey-iq/puck_support_and_spacing.md` | authoring agent (subject-matter layer test, all four briefed sites read); `commit-gate` |
| `systems/forechecking_systems.md` | authoring agent (whole-layer read, four layers); `commit-gate` |
| `positions/defender.md` | authoring agent (layer test, four layers); `commit-gate` |
| `systems/defending_the_rush.md` | authoring agent (layer test + `check_disclosures`); `commit-gate` |
| `positions/winger.md`, `systems/zone_entries.md` | authoring agent (all 32 posture windows read, 2 edited); `commit-gate` |
| `positions/switching_positions.md` | authoring agent (corpus census of all 12 `walking speed` values); `commit-gate` |
| `foundation/rules_primer.md` | ⚠️ **coordinator only** — a one-sentence fix for the flag regression the gate found. **No reviewer.** |
| `site/src/diagrams/*.mjs` ×10 | authoring agent (198 specs, 318 host references, 43 `describe` sentences, all 198 seam pairs); `commit-gate` |
| `site/src/data/diagrams.json` | build product — coordinator rebuilt after every diagram agent finished; `commit-gate` verified it is the build of the staged sources |
| `site/src/styles/global.css`, `site/src/components/CiteThis.astro`, `site/public/cite-copy.js`, `site/src/components/AudioPlayer.astro` | `site-reviewer` found all three defects **live**; coordinator fixed; ⚠️ **the FIXES are verified statically and in the build, NOT in a browser** |
| `scripts/md_to_speech.py`, `scripts/check_chunk_splits.py`, `project/`, `sources/README.md` | coordinator; `commit-gate` |

## Dimensions

⚠️ **AN EARLIER VERSION OF THIS TABLE WAS RENUMBERED AGAINST ITS OWN AUTHORITY.** From D4 onward its
labels did not match [`review_process.md`](../review_process.md)'s dimension table: it called D5 *"cardinal
rule"* (canonically **Provenance**), D7 *"safety"* (canonically **The cardinal rule**), D10 *"the rendered
site"* (canonically **The key-facts layer**), and **D12 *"the commit gate"* — canonically READ-ALOUD
INTEGRITY, which was therefore named nowhere at all, despite being the dimension this round's two best
findings sit in.** ⚠️ **A record exists to scope the next round; a renumbered table tells it that
provenance and read-aloud were cleared when the record meant something else.** Found by `commit-gate`,
which traced every canonical dimension to the work claimed for it. Corrected below.

| # | dimension | this round |
|---|---|---|
| D1–D3 | rules accuracy, exceptions, rule-set divergence | ✓ authoring agents re-derived from `sources/`; `commit-gate` independently re-derived Rule 622, the four-book strength move, 627(a), 404(b), IIHF 54.1/54.2, NHL/IIHF 56.1 and Hockey Canada 7.3 — and verified *"Hockey Canada writes no lateral clause"* as a **checked absence** (zero hits for `lateral` in `hc.txt`) |
| **D4** | **citation integrity** | ⚠️ **PARTIAL, and it failed first.** Two agents refetched Look Up Line and HECC and **still mis-attributed "Rule One"**. A dedicated **`source-verifier` ran after the first BLOCK** and found the critical this round nearly shipped — the HECC repair had run **backwards**, reaching the site-only trailers and skipping the body prose the finding named. Both pages refetched again by the gate: 200, redirect exact, condition present. |
| **D5** | **provenance** | ⚠️ **THIS ROUND'S RICHEST DIMENSION, and it failed twice before it held.** The *"Rule One"* misattribution (the arm/leg line is a **separate unnumbered bullet**, not Rule One); a **merged quotation** attributing one dash form to two books that print it differently; and the **Oxford comma** discrimination — Look Up Line prints *"an arm, a leg or anything"*, `ibc.txt:1390` prints it **with** the comma. All three corrected and re-verified against the live pages. |
| **D6** | **negative existence claims** | ✓ **and one was strengthened rather than stripped.** *"A whole-book search of USA Hockey's playing rules and Casebook returns no such sentence"* re-tested flattened: `strength move` 0, `use their arm` 0, `blocking their opponent` 0 — the negative holds and the book writes the converse. The self-narration census additionally measured **five** claimed families at **zero**. |
| **D7** | **the cardinal rule** | ⚠️ **FAILED, AND THE GATE CAUGHT IT — not a reviewer.** This round added a **new facts block** to `switching_positions.md` whose `Key:` value asserts *"the defining physical skill of a winger"* **flat, in the layer voiced alone**, while the owner qualifies it at all three of its own sites as *"a coaching ranking rather than a measured one"*. ⚠️ **No dedicated `content-reviewer` ran until the third BLOCK forced one.** The corpus's single most-recorded failure mode, shipped into an unreviewed block. |
| **D8** | **numeric ownership** | ⚠️ **✓ and brutal.** **Six** of the coordinator's own figures were wrong: the facts arithmetic, the lead-in count, the prose-arrow count (137 → **196**), the *"126 all capitalised"* claim, the `winger.md` cap measurement, and the NHL index-offset range. ⚠️ **And the OWNER document itself had shed the population qualification** the style guide says *"is part of the fact"* for the 26.8%/51.6% figures — at two sites, including the voiced one. |
| **D9** | **the summary layer** | ✓ **the round's main body of work.** The shoulder-tip limb reached Common Mistakes and Key Takeaways in two documents — plus the **Overview** and a bench self-check that no brief identified as sites. |
| **D10** | **the key-facts layer** | ⚠️ **PARTIAL. No dedicated `facts-reviewer` ran.** `check_facts` passes (833 blocks, 5,535 facts) and caps were measured repeatedly — but **`check_facts.py` cannot see an omission**, which is precisely what D10 exists to catch, and it is what the D7 failure above turned out to be. |
| **D11** | **reader safety** | ✓ a dedicated **`safety-reviewer` ran** and returned **NO CRITICAL**, stated plainly, plus one MAJOR — the limb in three bodies and no summary layer. That major was then worked and **refuted its brief three times**. |
| **D12** | **read-aloud integrity** | ⚠️ **THE ROUND'S TWO BEST FINDINGS ARE HERE, and the earlier table did not name this dimension at all.** (a) The negation-inversion trap: an agent **refused the coordinator's suggested caption wording** because it would have produced *"not the point of your shoulder, head up…"* — the corpus's own prior critical verbatim. (b) **The caption layer was found only by rendering a document to speech**; a grep over `content/` cannot see it and `check_facts.py` cannot either. All four repaired captions re-tested sentence-final by the gate. |
| **D13** | **folklore** | ⚠️ **DECLARED OUT OF SCOPE, AND THAT WAS WRONG.** No brief named it and no agent reported any — but the D7 failure above (*"the defining physical skill"*) is exactly D13's example shape, *"the centre covers more ice than any other position"*, which survived eight rounds in five documents. **A dimension declared out of scope still produced a blocking defect.** |
| **D14** | **structure, style, terminology, cross-links** | **PARTIAL.** `check_links` 0 across 10,240 internal links and 5,572 anchors; `check_tables` and `check_chunk_splits` run and read; five multi-host caption self-references removed. **No terminology pass.** |
| **D15** | **the rendered site** | ✓ **and it earned its place.** Two browser passes; the first found a **Major this round's own fix created** — every deep link landing its heading behind the sticky player, `elementFromPoint` returning `audio-player__label`. Fixed and re-measured at 128px/72px. ⚠️ **Chrome only: the extension refused localhost both times, so both passes ran through a hand-built CDP harness. No Firefox, no WebKit.** |

# ⚠️ THE GATE'S BLOCK — five findings, two of them the coordinator's own edits

1. ⚠️ **D5/C5 — A FALSE ATTRIBUTION THIS ROUND INTRODUCED INTO TWO FILES.** `skating.md` and
   `body_contact_and_battles.md` both called *"Hit the boards or goal posts with an arm, a leg or
   anything but your head first"* **Look Up Line's Rule One**. ⚠️ **It is not.** `sources/ibc.txt:1389-1391`
   and the live page both print `• Rule One: Heads Up – Don't Duck!` and the arm/leg line as a **separate
   unnumbered bullet**. ⚠️ **"Rule One" is the DUCKING PROHIBITION** — and the corpus's own *unchanged*
   trailer at `body_contact_and_battles.md:1611` had it right all along. **Corrected, with the
   distinction stated so it cannot recur.**
2. ⚠️ **C11 — THE COORDINATOR'S FLAG FIX CREATED A NEW BROKEN SENTENCE.** The comment claimed *"every one
   of the 126 uses is followed by a capitalised sentence"*. **125.** `rules_primer.md:666` used the marker
   **mid-sentence as a connective**, where the old comma was correct English. ⚠️ **Caught by rendering the
   tree, not by trusting the claim.** The CONTENT was fixed to honour the marker's contract rather than
   the renderer weakened to tolerate a misuse — and the comment now records the trap for the next author.
3. ⚠️ **A GARBLED DOCSTRING, in the tool whose subject is a sentence split in the wrong place.** The
   coordinator's insertion into `check_chunk_splits.py` severed the original sentence, leaving a clause
   dangling off an unrelated one, the first hit described twice and the second unattributed. **The
   "repair applied to half a sentence" shape, committed into that tool's own documentation.** Repaired.
4. **C3/C8 — this coverage section did not exist**, and the record named neither `defending_the_rush.md`
   nor `skating.md` nor the `sources/README.md` finding. Added.
5. **The HECC quotation dropped its condition.** The page reads *"**If possible,** use your hands, arms,
   shoulders or facemask…"*, and `body_contact_and_battles.md:730` reasons against USA Hockey's
   shoulder-tip prohibition on the strength of HECC naming the shoulders. ⚠️ **"If possible" is
   load-bearing there.** Restored in both files.

**Four coordinator figures the gate corrected:** corpus facts **+1 block/+4 facts**, not +3 (the fourth
is a new `Rule:` line in `body_contact_and_battles.md`); **126** lead-ins of which **125** were correct,
not "123"; **237** arrows in `content/` — 41 in facts blocks across 25 values, 196 prose — not "137";
and the file list omitted two staged files.

# What this round could not have found — restated after the block

**Nobody has heard the audio**, and the gate said so independently. ⚠️ **An earlier version of this
section said "no `source-verifier` and no `safety-reviewer` ran". Both then ran, after the first gate
BLOCK demanded them, and the `source-verifier` found the backwards HECC propagation — the most serious
thing this round found.** The honest residual is narrower: **D4 failed on its first pass**, and the
coverage table above asserted the two absences after they had been filled, which is the counted-list-
with-stale-enumeration shape appearing in the file that exists to prevent it. ⚠️ **AND FOUR MORE EDITS CARRY NO REVIEWER EITHER** — made after the fifth gate and cleared by the sixth
as a non-author, not reviewed by the dimension that owns them: `switching_positions.md`'s four layers,
`forechecking_systems.md:950`, `offensive_zone_play.md` KT10, and `winger.md:362`. **The record is the
next round's scope, and naming only one of five understates it.** **`rules_primer.md` carries a
coordinator edit no reviewer has seen.** ⚠️ **An earlier version of this paragraph then said the three site
fixes were "verified in the build and statically, not in a browser… seen by nobody". THAT IS NOW FALSE**
— two browser passes ran (see *"The site fixes"* below), and the first found a Major this round's own fix
had created. ⚠️ **It is the counted-list-with-stale-enumeration shape AGAIN, three lines after the
sentence naming that shape, in a paragraph correcting an instance of it.** It survived because it errs
toward UNDER-claiming, which is the direction no reviewer stops on — the same direction as the false
disclosures round 59 found. **The honest residual is narrower: Chrome only, no Firefox or WebKit, and
nobody has heard the audio.**

---

# ⚠️⚠️ THE `source-verifier` FOUND A CRITICAL THE GATE'S OWN REPAIR CREATED — propagation run BACKWARDS

**The gate's fifth finding was that the HECC quotation dropped its condition. The repair restored
*"[i]f possible,"* in the two Sources TRAILERS — the quietest layer in the corpus, which does not reach
a listener at all — and SKIPPED `body_contact_and_battles.md:730`, which is BODY PROSE and is the line
the gate's own finding named.**

⚠️ **That is this project's signature defect running in reverse.** Every critical in round 10 was a
correction that reached the body and stopped. **This one reached the trailer and stopped**, in a round
whose record already contains the sentence *"body ✓ does not imply block ✓"*.

**And it matters more at `:730` than anywhere else**, because that line reasons *against* USA Hockey's
flat prohibition on the strength of HECC naming the shoulders:

> *"HECC names the shoulders there and USA Hockey says 'never hit the boards or glass with the tip of
> your shoulder', and the two are not the contradiction they look like."*

⚠️ **HECC hedges its list; USA Hockey does not hedge its prohibition. Presenting the hedged list as
unconditional is what makes the two look like a live contradiction needing reconciliation at all.** The
document reaches the right answer — *"the safe course is the narrower one: no part of the shoulder
leads"* — **from a quotation the source did not make.** Fixed, and the hedge asymmetry is now stated in
the reconciliation itself rather than left implicit.

# ⚠️⚠️ AND THE INDEX DID NOT MATCH THE TREE — the state no checker can see

`git diff --name-only content/` returned **three files**: `body_contact_and_battles.md`, `skating.md`
and `rules_primer.md`. ⚠️ **`rules_primer.md` was not staged at all**, so the one-sentence fix for the
flag regression **would not have shipped**. And measured on the index rather than the tree:

| file | index | working tree |
|---|---|---|
| `body_contact_and_battles.md` | **0** occurrences of *"[i]f possible, use your hands"* | 1 |
| `skating.md` | **0** | 1 |

⚠️ **A commit of that index ships the HECC quotation with its condition stripped in all three places,
while every mechanical gate passes — because `check_facts.py`, `check_links.py` and `git-guard.sh` all
read the WORKING TREE.** CLAUDE.md names this exact tripwire; the coordinator staged, then kept editing.

⚠️ **THE RULE, RESTATED BECAUSE IT WAS BROKEN BY THE PERSON WHO WROTE IT INTO THE RECORD: stage
IMMEDIATELY BEFORE THE GATE, NOT ON EACH FIX.** Every repair after a `git add` silently un-stages
itself.

# What the verifier upheld, and one place it went further than the corpus

- **The "Rule One" repair is correct at a precision the coordinator did not aim for.** All five sites now
  attribute correctly, **and the comma discriminates the two sources**: Look Up Line prints *"an arm, a
  leg or anything"*, USA Hockey's IBC prints *"an arm, a leg, or anything"*. Both fetched, both 200.
- **The shoulder-tip sentence: both line citations exact**, en dash in IBC and em dash in the Program
  Guide, exactly as the corpus says.
- ⚠️ **The Tator provenance is STRONGER than the round claimed, and the verifier reached the primary.**
  `sources/huh.txt` credits *"research done among a wide range of hockey players"* and prints
  *"Charles H Tator et.al., Spinal Injuries Due To Hockey. Canadian Journal of Neurological Sciences;
  11:34-41."* PubMed resolves it exactly: **PMID 6704792**, Can J Neurol Sci 1984;11(1):34-41. **A
  restater correctly labelled as one.**
- ⚠️ **A TRAP THAT WOULD HAVE PRODUCED A FALSE ALARM, caught by a prior verifier's note and then
  INDEPENDENTLY RE-VERIFIED rather than trusted.** The HockeyShare drill page's stripped text contains
  *"This drill is currently in the trash and scheduled to be deleted soon"* — inside
  `<div id="trash" class="hide">`, and the site's stylesheet defines `.hide{display:none;}`. **No reader
  sees it.** ⚠️ **The strip-tags-and-comments method does NOT remove `display:none` content** — a new
  variant of the extraction traps in `sources/README.md`, and worth adding there.

# ⚠️ The one claim nobody can close from here

**Whether USA Hockey's *"research done among a wide range of hockey players"* fairly describes the paper
it cites.** The citation resolves exactly — but the **abstract** of PMID 6704792 describes a **six-patient
case series** at one Toronto unit, 1974-1981, which is not obviously "a wide range". ⚠️ **The same authors
published a genuine national survey the same year at a DIFFERENT citation** (CMAJ 1984;130:875-80, PMID
6704840), which is what that phrase sounds like.

**This touches no corpus claim today** — the corpus states only that USA Hockey credits and cites, which
is verified, **and it discloses that it did not read the original.** ⚠️ **That disclosure is upheld, not
stripped.** But the upgrade path is now known: the full text of 11:34-41 is the gate, and it is **7 MB
behind Cambridge Core access control** (fetched: 200, *"Core share and HTML view are not available for
this content"*).

---

# ✅ THE SAFETY REVIEW — NO CRITICAL, and saying so is the finding

⚠️ **A dedicated `safety-reviewer` ran on the whole round after the gate's coverage block. It looked hard
for a critical on the head/neck/spine dimension and did not find one, and it said so plainly rather than
manufacturing something to justify the pass.** Both prohibitions, their mechanisms and their
counterweights are present in the body, the facts block, Common Mistakes and Key Takeaways of every
document this round touched, and every value survives being read alone.

**Its method is the one this project should keep:** it rendered the corpus at **HEAD and at the working
tree into a namespaced scratchpad** and diffed sentence by sentence. ⚠️ **That surfaced something no
reviewer had noticed: 30 documents show spoken change, not the 10 that were edited — because the
renderer fixes are corpus-wide.** A review scoped to the diff would have covered a third of what moved.

## ⚠️ TWO INDEPENDENT REVIEWERS FOUND THE SAME STAGING ERROR

Both the `source-verifier` and the `safety-reviewer` opened with it, from different directions: the
staged index carried the **false "Rule One" attribution** and the **HECC quotation stripped of its
condition**, while the corrections sat unstaged in the working tree.

⚠️ **The safety reviewer added the layer detail that makes it precise:** the trailer half is a
**site-only layer** — it verified `"Unverified or single-source"`, `"Not verified, and flagged where
used"` and `"hecc.org"` all return **zero files** in the rendered speech, so that half reaches the web
reader and not the listener. **But the `rules_primer.md` half DOES reach the listener**, and it was not
staged at all. **Fixed: all three staged, index verified against tree.**

## ⚠️ MAJOR — THIS ROUND ADDED THE SHOULDER LIMB TO THREE BODIES AND STOPPED

The reviewer built a **component matrix** over all eight documents carrying the three-case rule, keyed
on the eight components. Component **E — *"not the point of your shoulder"*** — went into the body of
`forechecking_systems.md`, `winger.md` and `zone_entries.md` this round, **and into none of their facts,
Common Mistakes or Key Takeaway layers.** ⚠️ **The round widened a body/facts divergence from one
document to three.**

⚠️ **E is the component that matters most in the summary layer, and the owner says why: *"Take the wall
on your shoulder"* is a cue *"players and coaches say constantly"*.** So it is the one component a
listener is **least likely to supply for themselves** — a listener taking only the facts layer hears
*"forearm and hip"*, which is correct but is not the counter to what their coach told them.

⚠️ **The sharpest instance is internal to one document, four lines apart:** `forechecking_systems.md:857`
(facts) gives the **two**-prohibition posture while `:863` (body, repaired this round) asserts
*"prohibitions against **three** different injuries."*

⚠️ **AND THIS DOES NOT REOPEN THE 30 SITES ANOTHER AGENT LEFT.** The reviewer **read all 30
independently and UPHELD the restraint** — every one carries both prohibitions with their counterweights
and none inverts. **The scope is only the layers of documents whose body now carries E.** Dispatched.

## What it upheld, at a precision worth recording

- The `off-wing-open-to-the-ice` inversion was **real**, the repair is sound, and a scan of all 28 spoken
  caption sites carrying the boards override found **3 further hits, all false positives** — including
  one that is a **scope** statement, *"exactly the class the brief said not to sweep."*
- **`body_contact_and_battles.md:690` says *"forearm and upper thigh"* where every other site says
  *"hip"* — and that is NOT a divergence.** `ibc.txt` writes *"Press your forearm and **upper thigh (hip
  area)** against the boards"*; the source glosses them as the same. ⚠️ **A reviewer that had not opened
  the source would have filed it.**
- The *"break your neck at walking speed"* phrasing is **conservative**, not escalated — the source also
  names paralysis — and every site still attaches walking speed to the **ducking** limb only.
- Rule 622 verbatim, and the negative holds: `strength move` returns **0** in `usah.txt` **and** the
  Casebook.
- The section split created **no** chunk-boundary hazard; the body-checking legality table is still read
  aloud at 0 rows and 126 chars of headroom.

## Its own declared limit, which is the honest one

⚠️ **It could not verify the Look Up Line half of the "Rule One" correction, because there is no Look Up
Line extraction in `sources/` — 38 files, none of them — and it did not fetch.** It verified the **USA
Hockey** half definitively in `ibc.txt` and `huh.txt`, *"which is enough to establish that the staged
'Rule One' attribution is wrong; it is NOT enough to certify that the worktree's 'Neither body numbers
it' is right about Look Up Line."*

⚠️ **The concurrent `source-verifier` DID fetch it — 200, 37,376 bytes — and confirmed both the bullet
and the `BASIC PRINCIPLES` heading in the rendered body.** **So the two reviews close each other's gap,
and neither could have closed it alone.** ⚠️ **That is an argument for running them together, and it is
why a Look Up Line extraction belongs in `sources/`** — the corpus now leans on a page nothing on disk
records.

---

# ✅ THE DIVERGENCE IS CLOSED, AND THE HANDOVER IT NAMED IS ANSWERED

The agent sent to close the body/summary gap **refuted three things and measured all three:**

1. ⚠️ **The collision the brief named DOES NOT BIND, and the fix is better than the brief proposed.**
   `forechecking_systems.md:857` was 197/200 in a 7-value block. Rather than working around it, the agent
   **SPLIT the value into the exact `Never:`/`Technique:` pair the same document already carries at
   `:519`/`:520`** — leaving the two blocks **word-identical** at 104 and 134 chars. ⚠️ **The squeeze is
   gone rather than accommodated.** It also caught that `check_facts.py` tests `coaching > MAX`, so 8
   passes — the brief said "zero headroom" as if 8 failed.
2. ⚠️ **THE BRIEF FLAGGED THE WRONG COLLISION. `winger.md`'s is tighter and it is real.** Its three
   `Never:` values are **199 of 200 characters — one character of headroom** — and every one of their
   blocks is at **8/8 coaching.** The shortest form of the limb needs 32.
   ⚠️ **This paragraph first said all three blocks were "11/11 HARD_MAX and 8/8 coaching simultaneously".
   The commit gate re-measured: only `9-21` and `90-102` are 11/11; `360-369` and `425-434` are 8/11.
   The binding constraint is the COACHING cap plus 199/200, not the hard max.** Right conclusion, wrong
   reason — and the wrong reason is the half a future agent would have acted on.
   ⚠️ **Fitting it would require trimming USA Hockey's near-verbatim light-hit warning or the posture
   itself. Left unchanged, all three, and reported.** **This is the one place the divergence cannot be
   closed without evicting safety content, and that is the correct outcome.**
3. **`:857` was an OMISSION, not a contradiction.** It stated no count; it simply lacked the shoulder.
   ⚠️ **The coordinator's framing overstated the sharpness by one degree**, and the agent said so.

**It also cut a clause it had already written** — a restatement of the *"take the wall on your shoulder"*
cue — on the ground that **the owner states that prevalence unsourced, and restating it in a sibling
propagates an unsourced claim.** The counter is given without asserting how often the cue is said.

## The handover, answered: component E across all nine documents, by LAYER

Run by the coordinator, since the agent owned only three of them. **Read as `E-sites / posture-sites`.**

| document | body | facts | Common Mistakes + Key Takeaways |
|---|---|---|---|
| `body_contact_and_battles` (owner) | 4/12 | 2/6 | 2/4 |
| `forechecking_systems` | 2/2 | 2/4 | 3/2 |
| `zone_entries` | 1/4 | 3/3 | 3/2 |
| `winger` | 1/5 | **0/7** | 3/6 |
| `offensive_zone_play` | 1/3 | 1/3 | **0/4** |
| `playing_without_the_puck` | 1/5 | 1/4 | **0/4** |
| `switching_positions` | **0/3** | **0/3** | **0/3** |
| `defender` | **0/1** | **0/2** | **0/2** |
| `puck_handling` | **0/3** | **0/2** | **0/3** |

⚠️ **THE ANSWER IS THAT THE FEARED SHAPE IS RARER THAN THE FEAR.** The divergence the round created is
*body ✓ / summary ✗*, and **only two documents still have it** — `offensive_zone_play` and
`playing_without_the_puck`, each carrying E in body and facts and **none in Common Mistakes or Key
Takeaways across four posture sites.** Those are a genuine row.

⚠️ **THE THREE DOCUMENTS WITH ZERO E ANYWHERE ARE NOT A DIVERGENCE — THEY ARE THE CORPUS NORM**, and
sweeping them is what every agent this round has correctly refused. `switching_positions`, `defender`
and `puck_handling` carry 22 posture sites between them with consistent absence. **Consistent absence is
a decision; inconsistent presence is a defect. Only the second is a row.**

⚠️ **AND THE COUNT IS A PROPERTY OF THE PATTERN.** Mine keyed on `(point|tip) of your shoulder` against
`skates parallel|forearm and hip|chin off your chest|never duck`, with layers split by heading. **Do not
quote these cells as a total — re-run them.** The shape is what survives.

## ⚠️ A framing divergence the agent found and deliberately did not resolve

`forechecking_systems.md:531`/`:863` say *"prohibitions against **three** different injuries."*
`winger.md:27`/`:665` say *"**two** prohibitions against two different injuries."*
**Each is internally correct with its own antecedent** — the first counts back, chin and shoulder; the
second counts the two named in its preceding sentence. ⚠️ **But the corpus now describes the same rule
with two different tallies, and a listener meeting both hears a contradiction that is not there.**
The agent judged it a body-layer wording call outside its scope, which was right. **It is a row.**

---

# The second wave — dispatched after the first BLOCK, and it changed what this commit contains

⚠️ **THIS SECTION EXISTS BECAUSE THE COMMIT GREW.** The first gate BLOCK demanded a `source-verifier`
and a `safety-reviewer`; both ran, and their findings opened work in two documents the record had
declared a residual row. That work is now **in this commit**, so it is reviewed here rather than
deferred to a record that does not yet exist. **Files added to the diff by this wave:
`content/systems/offensive_zone_play.md`, `content/hockey-iq/playing_without_the_puck.md`.**

⚠️ **AND THE DISPATCH ITSELF CAUSED THE SECOND BLOCK.** The coordinator ran these three agents
**concurrently with the commit gate**, reasoning that their files were unstaged and therefore safe.
**That was wrong.** The gate reads the whole tree, and `check_counts.py` counts corpus words — so the
staged plan's word and duration figures went stale underneath a running audit, and every checker result
the gate reported was taken from a tree that had already moved. ⚠️ **Fourth instance of this round's
defining error, and the first one the coordinator caused knowingly-but-mistakenly rather than by
forgetting to re-stage.** **The rule is not "stage carefully". It is that NOTHING may write `content/`
while a gate runs, staged or not.**

## The class finding: my briefs named the LAYER, and the layer was wrong every time

Three agents, three independent refutations, **one shape**:

| document | what the brief asserted | what was measured |
|---|---|---|
| `playing_without_the_puck.md` | the four gaps are "Common Mistakes or Key Takeaways" sites | ⚠️ only **2** are. The others are the **Overview (`:16`) — chunk `001.ssml`, the FIRST thing a listener hears** — and the bench self-check |
| `offensive_zone_play.md` | body and facts **carry** the limb; the gaps are in the summaries | ⚠️ **two of the four gaps were IN body and facts** — §7 "Buying time", `:658` (facts, voiced alone) and `:667` (body). §4 taught it; §7 dropped it |
| self-narration census | sweep for `check_*.py`, `md_to_speech`, `OPEN_ITEMS`, `project/`, "round N" | ⚠️ **all five families measure ZERO across the whole corpus.** The corpus does not name its own tooling anywhere. The real family is **"the owning document"** — 8 hits, voiced — and my phrase (*"the owner document"*) returns **none of them** |

⚠️ **THE LESSON IS NOT "COUNT BETTER." A brief that names a layer tells the agent where to look, and an
agent that is told where to look stops looking elsewhere.** Two of these three were caught only because
the agent ran a **layer test over the whole document** instead of the layers named. ⚠️ **Brief the
PATTERN; never brief the LOCATION.**

## What was repaired

**`playing_without_the_puck.md`** — the shoulder-tip limb reached **six** layers (Overview, body, facts,
bench self-check, Common Mistakes, Key Takeaways), each reordered so the negation lands **before a full
stop rather than before a comma**. The old ordering would have put *"not the point of your shoulder,
head up and chin off your chest"* into a listener's ear — the same inversion that produced the "never
keep your head up" defect the corpus already has a commit for. Verified in rendered chunks 001, 064,
068, 073. The IBC citation was carried into the Sources trailer so the limb is not stated unsourced.

**`offensive_zone_play.md`** — the limb reached `:658` (facts, 195/200, no eviction), `:667` (body),
`:1043` (Common Mistakes) and `:1110` (Key Takeaways). Separately, the **NHL/IIHF 56.1 lateral clause**
reached body (`:837`), Common Mistakes (`:1053`) and the trailer, quoted from **four** primary books read
this session — NHL `nhl_rules.txt:6252-6258`, IIHF `iihf_rules_2026-27.txt:4768-4772`, USA Hockey
625(a)(4) `usah.txt:4469-4472`, and Hockey Canada's body-checking definition `hc.txt:6020-6022`.
⚠️ **Hockey Canada is the asymmetry: above the divisions 7.3 covers, that book writes NO lateral clause
at all**, and the corpus now says so rather than implying four-book agreement.

## What was measured and deliberately LEFT

⚠️ **The 56.1 clause could not reach `offensive_zone_play.md`'s facts layer.** Block `:803` is **11/11
HARD_MAX**, `Technique:` at **exactly 200/200**, `Priority:` at **199/200**, and the longest appendable
`Rule:` has **6 characters** of headroom. Coaching values are 5/8 — ⚠️ **so here the HARD max binds,
which is the OPPOSITE of `switching_positions.md`, where the coaching cap binds. That distinction
decides the repair and must not be carried between documents.** Closing it would have evicted the
defenceless-player onus, the body-checking-permission flag, or the seal-with-what rule. **Left, with the
measurement, which is the correct outcome and the third time this round it has been.**

Residual is low and stated rather than assumed: a listener who hears only that block is still told to
take the puck or — where the league permits — the player, that a winger facing the glass is
defenceless, and that checking a player who no longer has the puck is penalised. **Incomplete, not wrong.**

## ⚠️ The finding neither agent was looking for — the caption layer

`site/src/diagrams/offensive_zone_play.mjs:900` and `:974` state the wall-battle posture rule **complete
except for the shoulder-tip limb**, and are voiced as *"Important. Diagram."* blocks. After the repairs
above, **the caption layer became the only layer of that document stating the rule incompletely.**

⚠️ **It was found only because the agent rendered the document to speech to test its own edits and the
diagram prose came out in the same stream. A grep over `content/` cannot see it; neither can
`check_facts.py`.**

A coordinator census then found the **same shape in a second document that nobody had looked at**, and
the discriminator separates it from a false positive:

| document | limb sites in its markdown | caption states the rule without the limb | verdict |
|---|---|---|---|
| `offensive_zone_play.md` | 6 | `:900`, `:974` | ⚠️ **inconsistent presence — defect** |
| `winger.md` | 4 | `winger.mjs:460`, `:591` | ⚠️ **inconsistent presence — defect, and unseen by every agent this round** |
| `puck_support_and_spacing.md` | **0** | `:620` | ✅ **consistent absence — NOT a defect, must not be swept** |

⚠️ **The `winger.md` case carries an asymmetry worth keeping.** That document's facts layer was measured
this round as **0 of 7 and unclosable** — ⚠️ **a conclusion later PROVED WRONG; see the correction below** — — 199/200 values in blocks at 8/8 coaching, so the limb cannot go
there without evicting USA Hockey's light-hit warning. **Captions have no cap.** ⚠️ **The one layer that
document's limb CAN reach is the layer nobody checked.**

## The self-narration census — and the two layers that came back clean

Run through the real renderer: **37 documents, 2,936 chunks, 6,357,922 billed characters.**

⚠️ **The two most expensive layers are CLEAN.** All **5,535** facts lines and the entire Common Mistakes
+ Key Takeaways layer across 37 documents carry **no edit-history narration at all.** **All 15
high-signal hits are in the Sources trailer**, and the trailer was verified — not assumed — to reach
**zero** rendered-speech files: `SOURCES_MARKER = "sources retrieved"` opens a run that is dropped
wholesale, the corpus has **no `## Sources` heading**, and the distinctive strings return **0** across all
2,936 SSML files. ⚠️ **A trailer hit is a reading defect, not a listener defect, and pricing it as a
listener defect would have mis-ranked the whole worklist.**

**Voiced, and therefore the only urgent tier — 12 hits, all pre-existing, none introduced by this round**
(verified against the staged diff): **"the owning document"** ×8 (`defender.md` ×6, `winger.md` ×2),
which **does not even name the document** and at `:687` attributes a **safety precondition** to a
document the listener cannot identify; `goaltender.md:1014` and `:620`, the corpus narrating itself as a
project; and **`puck_handling.md:447` — the only correction narrative in the corpus a listener actually
hears.**

⚠️ **The detector that beats any phrase list: a sentence that states WHY IT IS ON THE PAGE.**
`special_teams.md:1124` — *"the correction is recorded here rather than removed"* — is the fingerprint of
the coordinator instruction *"make the correction visible"*, read as *"visible in the document"*.

⚠️ **The census measured its own blindness: 50% miss rate on the borderline class** (2 of 4, in the 4.6%
of trailer text read end to end). **But every GOES-tier hit carries a temporal marker and the sweep
caught all of them.** So it is near-complete for the severe class and half-blind for the arguable one.
⚠️ **Only `git log -p content/` can find a document that narrates its history WITHOUT the vocabulary of
history. Nobody has run it, and it is the highest-value follow-up available.**

## A row correction the coordinator owes

⚠️ **`OPEN_ITEMS.md`'s NHL-index row says the rulebook's back-of-book index is offset from its own signal
table "consistently one off, throughout". Re-measured: FALSE.** `29.1`–`29.10` agree exactly (Boarding
29.1, Charging 29.3, Clipping 29.5, Elbowing 29.10). **The offset begins at "Goal scored" — table 29.12 /
index 29.11 — and runs to the end** (Hooking 29.18/29.17, Icing 29.19/29.18, Wash out 29.35/29.34).
Proof it is real and not a misreading: the eight late index entries map onto the table's alphabetical run
**only** under +1. **The corpus follows the table and stays correct either way** — but the row would have
sent the next agent hunting a defect in the wrong range.

# What this wave could not have found

**Nobody has heard the audio.** Still true, and now truer: two documents' spoken layers were rewritten in
this wave and the only listener has been a renderer.

**Body prose was never read end to end.** The census read the facts layer and the summary layer
exhaustively and found them clean; body prose — **the largest voiced surface, and where all three of the
worst voiced findings sit** — was only pattern-swept. Each of the three was found by a *different*
pattern, which is weak evidence that a fourth exists behind a pattern nobody wrote.

**95.4% of the trailer layer was seen only through regexes** now measured as 50% blind on the borderline
class. The five largest trailers — `body_contact_and_battles.md`, `goaltender.md`, `rules_primer.md`,
`forechecking_systems.md`, `shooting.md` — were **none of them read end to end.**

**No agent checked whether a legal technique is safely executable.** *"Angle the winger into the boards"*,
*"close with short explosive steps"*, *"seal the wall"* and *"arrive on contact"* were all verified as
legal in a checking league. ⚠️ **What they do to a fourteen-year-old's shoulder at speed is not a question
any rulebook grep answers, and no source read this round measures it.**

---

# The site fixes, and the regression the browser pass caught

⚠️ **C10 EXISTS FOR EXACTLY THIS.** The three site changes had passed the build, the link check and a
static read. **A browser found that one of them had broken something else**, and no checker in this
repository could have seen it.

**Files: `site/src/styles/global.css`, `site/src/layouts/Base.astro`, `site/src/pages/[...slug].astro`,
`site/src/components/AudioPlayer.astro`, `site/src/consts.ts`.**

## ⚠️ The sticky-player fix worked and broke every deep link

The player fix itself was sound: measured `getBoundingClientRect().top` pins at **56.0px** at every scroll
depth, flush below the header, with no trace of the 120 → −280 → −5382 collapse; and the WCAG DOM move
took the `<audio>` element from the **184th** tab stop to the **6th**.

⚠️ **But `scroll-padding-top` was `calc(var(--header-h) + 1rem)` = 72px, which clears the 56px header
ALONE.** The player, at `top: var(--header-h)`, became a **second** obstruction running 56→113px. So every
deep link and every table-of-contents click landed its heading **completely behind the player**:

| | 1440×900 | 375×812 |
|---|---|---|
| heading top | 71.7 | 72.0 |
| player bottom | 113.2 | 112.2 |
| `elementFromPoint` at the heading's own text | **`audio-player__label`** | **`audio-player__label`** |

**5,572 anchored internal links, 2,024 of them corpus cross-links written into the markdown.**

⚠️ **NOT pre-existing, and that is the point.** With `bottom: 0` the bar sat at the viewport foot; before
the DOM move it did not stick at all. **The top-obscuring behaviour was created by this round's own
repair — the third time in this round that a fix introduced the defect it was adjacent to.**

**The fix:** a `--player-h` custom property, `0rem` on `:root` and `3.5rem` under `html.has-player`, added
into `scroll-padding-top`. ⚠️ **Scoped deliberately: a global raise would put 56px of dead space above
every anchor on pages with no player, and the comment above the `.prose` rule already records a heading
landing 144px down being treated as a defect in its own right. An over-correction is also a failure.**

⚠️ **The hook is an explicit `hasPlayer` prop, NOT `withToc`.** Those two coincide today and nothing
enforces it.

**Verified in a browser, both viewports, both themes:** `scroll-padding-top` **128px** on document pages
and **72px** on index pages; headings land at **127.7–128.1**; `elementFromPoint` returns the `H2`/`H3` in
every cell, including under a real table-of-contents click with a real mouse event. Player-less pages
measured at **72.1/72.2** — no over-correction.

⚠️ **A LATENT BUG THE SAME PASS FOUND, AND IT WAS MINE.** `hasPlayer={true}` was hardcoded while the
player itself renders behind `AUDIO_ENABLED`. They agree today, so everything passed — **but switching
audio off would have kept the 128px padding with no player to justify it**, which is the over-correction
above, arriving by a different route. Now `hasPlayer={AUDIO_ENABLED}`: one flag, not two.

## ⚠️ The site never received a correction the owner gave on 9 September

`AudioPlayer.astro` shipped `aria-label="Audio edition of {title}"` and *"Download the audio edition"* —
and **its own comment instructed the next editor to use that wording.**

⚠️ **The owner rejected "the audio edition" in terms:** *"the audio should also stand alone on its own as
a separate standalone podcast, not be too strongly stated as just an audio version of the site."*
`scripts/build_podcast_audio.py:37` was corrected that day and **records the rejection explicitly**. The
site component was not touched. ⚠️ **The correction reached the podcast metadata and stopped — this
corpus's signature defect, this time against an instruction the owner had given directly.**

Now `aria-label="Listen to {title}"` and *"Download the {title} episode"* — describing the episode by its
**subject** rather than by its relationship to this site. Verified: accessible name via Chrome's AX tree
reads `{role: "Audio", name: "Listen to Goaltender"}`, and **"audio edition" returns zero across the whole
of `dist`, including the feed.**

## Confirmed still passing, measured not assumed

`/cite-copy.js` 200 with three distinctly-named buttons and a real click putting the citation on the
clipboard; **zero console errors, zero CSP violations, zero off-origin requests**; 37 feed items with 37
enclosures; 9 `.m3u`; 198 SVGs, no blank figures; no body-level horizontal scroll at 1440, 375 or 320.
⚠️ **A 404 on `/audio/*.m4a` is EXPECTED locally** — the files are in S3 and out of `dist`.

⚠️ **One correction to the FIRST browser pass, so it is not inherited:** it reported the stylesheet
already uses `:has()`. **It does not — `grep -c ":has("` returns 0**, which is why the fix uses a class on
`<html>` rather than `html:has(.audio-player)`. Re-checked after the fix: still 0.

# What the browser passes could not have found

**Any browser but Chrome.** The extension refused every localhost URL both times — *"Could not verify this
site's safety category"* — so both passes ran through a hand-built CDP harness against headless Chrome.
⚠️ **No Firefox, no WebKit — and `scroll-padding-top` with a custom property inside `calc()` is precisely
where those two have historically diverged. This entire fix rests on it.**

**A real device.** Headless Chrome at 375×812 is not an iPhone: no real touch, no dynamic viewport units,
and **iOS Safari's native `<audio>` control is a different height — which is the exact quantity this fix
turns on.**

**A screen reader.** The accessible name was read out of Chrome's AX tree. That is not the same as hearing
VoiceOver or NVDA announce it.

**Production.** The CloudFront rewrite, the real CSP header, and the S3 audio objects are all absent
locally. ⚠️ **Nobody has heard a single episode play.**

**And whether any of it is true.** A page can render perfectly in both themes at both widths and still be
wrong about the rule it states. **No hockey claim was checked by any browser pass.**


---

# ⚠️ The correction that matters most: "unclosable" was a wrong conclusion from a right measurement

**Asserted three times** — twice by the coordinator, once by an agent that re-derived the numbers
independently and agreed — that `winger.md`'s facts layer **could not** take the shoulder-tip limb.
Every measurement behind it was correct: three `Never:` values at **exactly 199/200**, blocks at **8/8
coaching**, the limb needing ~32 characters.

⚠️ **The conclusion did not follow.** `check_facts.py` caps the **number** of values and the **length**
of each. A block that cannot take a NEW value can still carry the limb by **EXTENDING an existing one**.
`winger.md:362` — `Technique: Use your body to protect the puck and fight to maintain possession` — was
**66/200, with 134 characters spare**, in the same block, on the same subject. The limb now sits there,
sentence-final, and `check_facts` passes.

⚠️ **Three passes measured the same numbers and not one asked whether a different value in the same block
could carry it.** The brief said "cannot be closed without evicting safety content", and every agent
tested exactly that proposition and confirmed it — **because refuting a brief means testing what it
asserts, and none of us asked what it had failed to consider.** ⚠️ **"Measured, reported, left" was
recorded as a first-class outcome four times this round. Once, it was wrong.**

**The general form, for the next round:** a cap on *count* and a cap on *length* are different
constraints, and a layer is only closed when **both** are exhausted **across every value in the block**,
not when the obvious value is full.

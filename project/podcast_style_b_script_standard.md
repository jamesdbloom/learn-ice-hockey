# Style B script standard — "Playing principles"

**A specification, not a plan row and not a review record.** It sits beside
[`content_style_guide.md`](content_style_guide.md) and governs every Style B podcast script
the project writes. Open work lives in [`plans/OPEN_ITEMS.md`](plans/OPEN_ITEMS.md); what a
correct script looks like lives here.

**Written 23 September 2026**, derived from the one exemplar that exists and that the owner
has read and approved: `podcast_defender_script.local.md` in the repository root, written
from [`content/positions/defender.md`](../content/positions/defender.md). *(That file is
gitignored scratch, so it is named rather than linked.)*

Every figure in this document was measured. The command that produced each one is stated
beside it, and **no figure here should be quoted without re-running its command** — a number
copied out of its owner goes stale silently, which is this repository's single most repeated
failure.

---

## 1. What Style B is, and why the script is half the problem

The podcast ships in two styles, and they do not compete:

| | **Style A — "Discussion"** | **Style B — "Playing principles"** |
|---|---|---|
| Generator | NotebookLM | our own pipeline |
| Voices | two, conversational | **one** |
| What it is | a conversation about the document | the things to keep in mind and play by |
| We control the text | no | **yes** |

⚠️ **The engine is only half of "easy to listen to". The other half is the script.** The
exemplar is comfortable at 23 minutes because it is built from short imperative sentences.
**A script that drifts back into long tariff paragraphs cannot be rescued by any TTS engine,
at any settings.** This specification exists to stop that drift across 39 episodes.

⚠️ **And Style B has no excuse the way Style A has one.** The owner has accepted a
compromise on accuracy for Style A, because NotebookLM is a generator we cannot inspect.
**Style B's text is ours, line by line. There is no compromise available here.**

---

## 2. The register — principles, not rulebook law

The owner's description of Style B is *"the key tactical principles to follow and the set of
ideas you should keep in mind"*. ⚠️ **He first said "rules" and corrected himself in the same
breath.** *Principles* here means **the governing ideas of playing the position** — not
rulebook law.

⚠️⚠️ **THE EXEMPLAR CONTAINS NO RULE NUMBERS AT ALL, AND THAT IS WHY IT WORKS.**

```
grep -c 'Rule ' <script body>          → 0
python3 -c "...re.findall(r'\d+', t)"  → []   (no digits of any kind in 20,148 chars)
```

**What went, and what stayed.** The exemplar's author cut every rule number and every
book-by-book comparison *that was not itself the instruction*. What survived is the
**consequence to the listener** — *"none of the four books caps boarding at a minor"*,
*"the NHL and IIHF write no minor option at all"*, *"your worst case there is an ejection,
not two minutes"*. Book names survive where the answer genuinely differs by book
(NHL 3, IIHF 4, USA Hockey 7, Hockey Canada 3, CARHA 1, England Ice Hockey 1 — `grep -c`
on the body).

⚠️ **A penalty consequence is not a rule citation. Never strip one to satisfy this
section** — that is the trade
[`.claude/skills/scripted-episode/SKILL.md`](../.claude/skills/scripted-episode/SKILL.md)
already forbids, and §8 below outranks this one.

**The per-document citation policy in that skill still governs which tier a document is in.**
This section narrows it for Style B: **even in the "cite freely" tier, prefer the consequence
to the number, because a listener cannot look a number up.**

### The register of a sentence

Match these, which are the corpus's own:

- *"Stay on the defensive side of the puck."*
- *"Move him toward the corner. Never across the front of your own net."*
- *"Take the puck, not the man."*
- *"The angle is yours everywhere. The contact is not."*

Not these: which way the push goes, the toe flick, grip pressure, hollow depth, the deke
catalogue. **Teach a mechanic where the source teaches it; never build a segment around one.**

---

## 3. Sentence shape — measured, not asserted

Measured on the 20,148 characters between the exemplar's delimiters:

```
awk '/^===== SCRIPT START =====$/{f=1;next} /^===== SCRIPT END =====$/{f=0} f' \
    podcast_defender_script.local.md > body.txt
python3 - <<'EOF'   # split on (?<=[.!?])\s+ ; count words per sentence
EOF
```

| Measure | Exemplar |
|---|---|
| Sentences | 267 |
| **Mean words per sentence** | **14.2** |
| **Median** | **12** |
| 25th / 75th percentile | 7 / 20 |
| 90th / 95th percentile | 27 / 33 |
| Longest sentence | 44 words |
| **Sentences of 10 words or fewer** | **115 — 43%** |
| Sentences of 15 words or fewer | 162 — 61% |
| Sentences of 20 words or fewer | 202 — 76% |
| Sentences over 30 words | 18 — 6.7% |
| Sentences over 40 words | 2 |

⚠️⚠️ **EVERY FIGURE IN THAT TABLE IS A DISTRIBUTION OF SIZE ONE, AND THE TARGETS BELOW ARE
DERIVED FROM IT.** They are one script's shape, written in one sitting, by one author, for one
position document. **They are a starting point a writer can hold, not a measured norm of this
corpus** — nothing has been measured against a second Style B script, because there is not one.

⚠️ **This warning is here rather than only in §13 on purpose.** An earlier draft stated these as
*"The standard"* with the n=1 qualification 445 lines away, and §13 listed only the ten-idea count
as not generalising. **A threshold quoted out of its qualification is how this project's figures go
stale**, and a writer reading §3 to hit a number is exactly the reader who will never reach §13.

**The standard, stated as a target a writer can hold:**

1. **Median at or below 13 words. Mean at or below 15.**
2. **At least 40% of sentences at 10 words or fewer.** This is the number that carries the
   register — it is where the imperatives live.
3. **No more than about 7% of sentences over 30 words**, and a sentence over 40 words is
   a defect to justify, not a style. The exemplar has two.
4. ⚠️ **A long sentence is allowed only where the length IS the scope.** Both of the
   exemplar's 40-plus-word sentences are scope-bearing — a safety limb or a book divergence
   that would be falsified by being split. **Never split a sentence in a way that leaves half
   a scope standing on its own.**

### Paragraphs

79 paragraphs, mean 48 words, median 40, longest 158. **Eight paragraphs exceed 100 words and
all eight are in the middle third** — which is exactly where the exemplar's author reports the
script sagging. **Treat a paragraph over 100 words as a candidate for splitting**, and treat
two of them in a row as a defect.

**A one-sentence paragraph is a tool, not an accident.** The exemplar uses it for every
instruction it most wants a listener to keep: *"Stay on the defensive side of the puck."* sits
alone. Use it deliberately and sparingly; a script of them has no shape either.

---

## 4. Structure — the spine goes in the first eight minutes

The exemplar is **ten numbered ideas**, in the order a player meets them, with an opening, two
recaps and a close.

⚠️ **The rule, and it is the one structural rule that matters: a listener who stops early must
still leave with the things that matter most.**

Measured. The spine — defensive side of the puck · the pair and the swap · the net front ·
never across your own goal — **ends at character 4,961 of 20,148, which is 25% of the script:
5.7 minutes at 165 words a minute, 6.2 at 150.**

```
python3 -c "t=open('body.txt').read().strip(); i=t.index('...the middle is not a route.')+..."
```

**The standard:**

1. **The whole spine — everything the episode most wants the listener to keep — is complete
   inside the first eight minutes.** At the exemplar's measured 165 words a minute that is
   about 1,300 words, or roughly the first third of a 23-minute script.
2. **Order the remaining ideas as a player meets them**, not as the source document orders its
   sections.
3. **Open on the job, not on the document.** The exemplar's first line is *"This one is about
   playing defence. Not the rules of playing defence — the job."*
4. **Close with a consolidation**, and keep it short: the exemplar's close is 1,016 characters,
   5.0% of the script, and ends by handing the listener three questions to ask their coach.
5. **Progressive disclosure per idea, as
   [`scripted-episode/SKILL.md`](../.claude/skills/scripted-episode/SKILL.md) already
   requires:** state it plainly, restate it in other words, a worked example from the source,
   the practical consequence.

### ⚠️ Recaps — the exemplar's own known weakness, and the standard corrects it

The exemplar has **two** consolidation points: one at 9% of the script and the close at 95%.
Its author flagged this against itself: *"The recaps are front-loaded… From the trapezoid to
the close there is no consolidation, because that is where I was cutting."*

**So the standard is not the exemplar here. Require a recap roughly every third of the
script** — at minimum one in the middle third. **If a script must lose something to length, it
loses an idea, not the recap that holds the earlier ones together.**

---

## 5. Written to be heard

**A listener cannot see anything.** Not a page, not a heading, not a list, not a bracket.

**Banned outright:**

- Any markdown furniture. The exemplar contains **zero** asterisks, hashes, square brackets and
  parentheses (`t.count('*'), t.count('#'), t.count('['), t.count('(')` → `0 0 0 0`).
- **Backward and forward pointers**: *"as mentioned above"*, *"as we said earlier"*, *"see the
  section on"*, *"as the table shows"*, *"in the Sources"*. The exemplar contains none of the
  first four (`grep -c` → 0 each).
- **Bullet lists read aloud as lists.** Turn them into prose with ordinals. The exemplar's
  breakout options are spoken as a sequence of one-word sentences, and it announces what they
  are first: *"hear this as a decision list for somebody under pressure, not a ranking"*.
- **Parentheses.** If it is worth saying, it is a sentence.
- ⚠️ **A pronoun whose antecedent is more than one sentence back.** A rendered chunk
  attributed a rule to the wrong book because *"its"* pointed twenty words back.

**Required:**

- **Second person, one voice, talking to one person.** No host names, no *"welcome back"*, no
  manufactured enthusiasm.
- **Spoken signposts in place of headings**: *"Second idea, and it is the one that most often
  breaks."* · *"Now the part that varies."* · *"Let me pull it together."*
- **Repetition is required, not padding.** Say the important things more than once in
  different words, and say when you are about to.
- **Em dashes are fine and the exemplar uses 28** — a TTS engine reads them as a pause. Colons
  are rare (8) and semicolons are absent. **Prefer a full stop to either.**

⚠️ **One residue in the exemplar is NOT to be generalised:** it contains a single
self-reference, *"a safety point that overrides everything in this section"*. A listener has
not been told there are sections. **Write "everything I have just said" instead.**

---

## 6. Length — the principle, not a number

The exemplar **started at about 24,300 spoken characters and was cut to 20,148 over three
passes**, and stopped there **deliberately**. Its author: *"I stopped at 20,000 rather than
pushing to fifteen because the next cut was no longer fat… below this length I would have been
deleting either a tactic or a safety limb."*

⚠️ **THE STANDARD IS THAT SENTENCE, NOT THE NUMBER.**

> **Cut fat until the next cut would remove a tactic or a safety limb. Then stop and say where
> you stopped.**

**A script that hits a character target by deleting a tactic has failed, and a script that
hits it by deleting a safety limb has failed catastrophically.** Hand the owner something
longer he can cut from, and hand him the cut list (§7).

**For scale only, so nobody is surprised by their own draft:**

- The exemplar: **20,148 characters, 3,801 words, roughly 23 minutes at 165 words a minute,
  25 at 150** (`wc -c -w` on the extracted body).
- Across the corpus, the same compression ratio predicts a **mean near 18,200 characters** and
  a **median near 15,000**:

  ```
  # defender.md is 239,339 bytes → 20,148 spoken chars, a ratio of 0.0842
  # mean of 39 content/*/*.md sizes = 216,294 bytes → 18,208
  # median = 178,308 bytes → 15,010
  ```

  ⚠️ **The mean sits above the median because a handful of documents are very large**
  (largest 676,335 bytes, smallest 27,326). **Do not plan every episode to the mean.**
  ⚠️ **And this ratio is one observation.** It is a planning aid, never an acceptance test.

---

## 7. What may be cut, and what may not

### The whole-or-not-at-all rule

⚠️⚠️ **A section that teaches an act which can injure the person performing it is cut WHOLE
OR NOT AT ALL.**

The exemplar's author flagged this against his own cut list, on blocking shots: *"Half a
shot-blocking section is worse than none, because the four never-dos are what stop a listener
getting hurt doing the thing the first half just taught him."*

**Generalised:**

> **Where a script teaches HOW to do something, the limbs that stop it hurting the listener
> are part of that teaching, not a caveat attached to it. Trimming the limbs while keeping the
> method leaves a listener equipped to injure himself and is worse than silence.**

**The test, applied before any cut:** *does what remains teach an act without the constraints
that make it survivable?* If yes, **restore the constraints or cut the whole section.**

Sections this reaches, at minimum: blocking shots · net-front box-outs and walk-outs · meeting
the boards · retrievals with pressure behind you · anything a goaltender does in traffic ·
anything at all in an injury-response section.

### What a cut list looks like

Every script ships a **ranked cut list** — the cheapest reductions in order, each priced in
characters, **each saying what it costs**. The exemplar's:

1. Three-on-two — about 600 characters. *The least automatic of the three rush situations.*
2. Offensive-zone depths — about 900. *Loses "below the circles is always a commitment".*
3. Blocking shots — about 2,000. ⚠️ *Whole or not at all.*

**A cut list entry that does not name what is lost is not a cut list entry.**

---

## 8. ⚠️⚠️ The safety floor — the one non-negotiable here

**Constraint 7 of
[`.claude/skills/notebooklm-episode/prompt_constraints.md`](../.claude/skills/notebooklm-episode/prompt_constraints.md)
applies to Style B unchanged, and it is not a closed list:**

> **"Safety points are never trimmed for time, and never softened."**

Read it there in full rather than from a summary here. In outline it covers **(a)** contact
and checking eligibility — *state the gate every time, not once at the top*; **(b)** head and
neck protective equipment, including mandates differing by country, age and competition;
**(c)** self-protection technique that carries no penalty for the player getting it wrong —
*"they are injured. Treat them exactly as you treat a rule, and keep the mechanism and the
numbers"*; **(d)** injury response — **verbatim and in full, or do not raise the topic at
all.** Its three attached prohibitions — never generate an exception to a safety absolute,
never voice a rejected myth without its correction in the same breath, never give medical
advice — apply here word for word.

**Two things Style B must do that a two-host format cannot be made to do:**

1. ⚠️ **A safety limb travels in the same breath as its instruction, never as a trailing
   caveat.** The exemplar does this deliberately and names the pairings: back-to-the-wall and
   don't-duck with the retrieval instruction; corner direction and skates-on-the-ice with the
   net-front instruction; boarding and checking-from-behind with *"force them outside"*;
   charging with *"step up"*; tripping and clipping with the two-on-one slide; the four
   never-dos with the shot-block method. **Copy the practice, not the list.**
2. ⚠️ **The eligibility gate is restated at each act it gates, not once.** The exemplar splits
   the net-front job into *"taking the inside position and tying up the stick are yours in
   every league"* and *"what varies is driving a man off his spot"*, and then gates the second
   on the game rather than on the age group: *"Check the game, not the age group."*

⚠️ **The owner has accepted a Style A compromise. He has NOT accepted one here, and the text
is ours, so there is nothing to blame.** A safety limb missing from a Style B script is a
defect of this specification's, not of an engine's.

---

## 9. Traceability

Unchanged from [`scripted-episode/SKILL.md`](../.claude/skills/scripted-episode/SKILL.md) and
restated only because it is the thing a shortening pass breaks:

1. **Every sentence traces to the source document.** Not to hockey knowledge, not to a sibling
   document, not to a rulebook the writer went and read. **If it is not in the source, it does
   not go in the script.**
2. **Never state a rule from memory.** The source carries its citations; use its words.
3. ⚠️⚠️ **NEVER STATE A RULE MORE SIMPLY THAN THE SOURCE STATES IT.** The recorded failure
   is specific and it has one direction: **summarising a tariff drifts it toward a harsher,
   simpler rule** — a discretionary major becomes a floor, a book with a minor option loses
   it, a penalty scoped to one book is voiced as though every book prices it that way. The
   exemplar's author checked each surviving consequence against the source wording **rather
   than summarising it**, for exactly this reason. **Do the same, and say in the notes that
   you did.**
4. **Never strip a hedge.** *"a coaching choice rather than a law"*, *"coaching consensus
   rather than a counted statistic"*, *"the two books disagree"*, *"ask your league"*. ⚠️ **A
   listener needs these more than a reader does, because they cannot glance back.** The
   exemplar carries eleven *"ask"* instructions and names a coaching choice, convention,
   craft or consensus six times in 20,148 characters.
5. **Never present a coaching choice as a law of hockey** — but ⚠️ **do not let that empty
   the script.** State the tactic, name the common default, name a realistic alternative, and
   tell the listener to find out what their team plays. That is the whole disclosure required.
   *"Be goal side"* needs no citation, because it is not a rule.

---

## 10. The omissions note is part of the deliverable

⚠️ **Required output, not an optional courtesy. It is what makes the per-episode safety check
cheap** — a reviewer who has the omissions list can check the dangerous half of the decision
in minutes instead of re-reading the source.

**Every Style B script ships with a notes section, below the script and outside the spoken
delimiters, containing:**

1. **The length decision** — where it started, where it landed, and **why it stopped there**.
2. **The ranked cut list** (§7), each entry priced and each naming what is lost.
3. ⚠️ **"What I left out, and why" — every material omission, with the one that could cost a
   listener something FLAGGED AND PUT FIRST.** The exemplar does this: it opens the section
   *"Read this first. It contains the one omission a listener could be penalised by"* and
   names the shorthanded icing exemption, explains why the omission is survivable (*"the
   script never states the permission, so no listener is given a belief he can be caught
   by"*), notes the residual risk (*"a listener who already believes 'you can always ice it
   on the kill' will not be corrected by this episode"*), and says plainly: **"If one thing
   goes back in, make it this."**
4. **The safety pairings** — which limb travels with which instruction (§8.1).
5. **What the writer found unclear or contradictory in the source.** The exemplar's notes
   surfaced a live three-way contradiction in `defender.md` about whether the net-front box-out
   is protected under CARHA. ⚠️ **Scripting is a re-read of a document by someone reading it
   for a different purpose, and it finds things review rounds did not. Those findings are
   worth more than the script.** Raise them; do not fix them in the script.
6. **Where the script is weakest** — the writer's own attack on their own text.
7. **What the writer could not check.**

⚠️ **The notes are written against the finished script, not from the plan for it.** The
exemplar's author found the contradictions by re-reading his own new text against the source.
**A repair is new text, and new text has not been reviewed.**

---

## 11. Voice and engine — decided, so that it is not re-litigated

**Single voice. Not a two-host dialogue.** Decided 18 September 2026 and unchanged: banter did
not justify the quality risk, and a single narrator removes the turn-boundary prosody problem
that made stitched two-speaker attempts sound electronic. Style A's dialogue comes from
NotebookLM, so the two do not collide. `scripts/tts_sample.py`'s *"SINGLE-VOICE by decision —
do not re-add a dialogue path"* note stands for Style B.

**Engine: ElevenLabs.** Voice `L0Dsvb3SLTyegXwtm47J`. Settings:

| Setting | Value |
|---|---|
| Speed | 1.00 |
| Stability | 35% |
| Similarity | 75% |
| Style exaggeration | 20% |
| Speaker boost | ON |

⚠️⚠️ **THESE SETTINGS ARE CHOSEN AND UNHEARD.** The comparison that selected ElevenLabs was
run on the engine's **defaults** — `scripts/tts_sample.py` sends no `voice_settings` at all.
**Nobody has heard 35 / 75 / 20 with speaker boost**, and the winning sample was short.
**Test at length before treating this table as settled**, and update it here when someone has
listened.

### ⚠️ Request stitching is a pipeline requirement, and the pipeline is written but UNHEARD

**A full episode exceeds ElevenLabs' per-request limit, so an episode is synthesised as
several calls and stitched.** ⚠️ **Whether the seams are audible at stability 35% is a KNOWN
RISK, NOT A MEASURED FACT — verify it by listening.** ⚠️ **An earlier draft of this sentence
explained the risk by asserting a vendor mechanism** — *"low stability means the engine's prosody
is less consistent between independently synthesised requests"* — **written by an author who had
heard nothing.** The conclusion is the same either way, which is exactly why the false confidence
was cheap to add and would have been hard to notice. **So stitching is a correctness requirement
of the Style B pipeline, not an implementation detail**, and the split points are a design
decision: **split at a paragraph boundary that already carries a long pause, never mid-idea and
never mid-sentence.**

⚠️ **`scripts/synthesize_style_b.py` implements this** — greedy paragraph packing under the
per-request limit, continuity context across calls, `ffmpeg` concat, a content-hash cache so a
re-run costs nothing, and a duration guard that errors rather than shipping a short file.
⚠️⚠️ **WRITTEN IS NOT VERIFIED. Nobody has listened to a single second of its output**, and the
settings in §11 are chosen, not heard.

⚠️ **The test that settles this has NOT been run, and it needs TWO chunks.** One chunk of the
defender exemplar has been synthesised at the chosen settings (`tts-comparison/`, 4,242 chars,
billed 3,103 credits — **73.1%, which is the fourth measurement of that discount and the
estimator can now be relied on**). ⚠️ **A single chunk contains no seam**, so it answers the
voice-consistency question and not this one. **Nobody has listened to either.**

⚠️ **`build_podcast_audio.py` is a re-encoder for existing NotebookLM masters. It does not
generate anything.** The Style B pipeline — script generation, ElevenLabs synthesis with these
settings, request stitching, assembly — **is unbuilt.** It is a row in
[`plans/OPEN_ITEMS.md`](plans/OPEN_ITEMS.md), and this specification is what it must
implement.

---

## 12. Before a Style B script is accepted

- [ ] Every claim traced to the source document. **Name the line for each.**
- [ ] **Rendered through `scripts/md_to_speech.py` and every chunk read.** ⚠️ **The exemplar
      was NOT rendered** — its author flagged that as the specific thing he could not check.
      **It is the first thing every subsequent script does.** ⚠️ Give the run its **own named
      `--out` directory**: the scratchpad is shared between concurrent agents, and a naive
      glob over the output root returns another agent's document.
- [ ] `scripts/check_pointers.py` clean of anything pointing at an unheard layer.
- [ ] A **`rules-verifier`** pass **against the primary rulebooks, not against the source
      document** — a source-comparison pass cannot see a transmission error.
- [ ] A **`safety-reviewer`** pass if the document touches contact, technique at speed,
      equipment, injury or a penalty. **§8 is what it is checking against.**
- [ ] The omissions note (§10) complete, with the penalisable omission flagged first.
- [ ] Sentence distribution measured (§3), not eyeballed.
- [ ] ⚠️ **Do not script a document whose content is still under repair.** A script written
      against text that then changes is a script to be rewritten.

---

## 13. What this specification does not settle

- **The two-style feed architecture** — one feed with two episode types, or two feeds — is
  open, and it constrains episode titling and numbering. Open row in
  [`plans/OPEN_ITEMS.md`](plans/OPEN_ITEMS.md).
- **Whether the ten-idea shape generalises.** It is one document's shape, and `defender.md` is
  a position document. A skill document or `rules_primer.md` may want a different one. **The
  structural rule in §4 is the spine-first rule; the count of ten is not a rule.**
- ⚠️ **Whether the §3 SENTENCE TARGETS generalise — and this entry was missing from the first
  draft of this list, which is the defect it records.** *"Median at or below 13"*, *"mean at or
  below 15"*, *"at least 40% at 10 words or fewer"* and *"no more than about 7% over 30"* are all
  read off the SAME single exemplar as the ten-idea count. **If the ten is not a rule, neither are
  they.** They are provisional until a second and third Style B script have been measured, and the
  right move then is to re-measure and restate — **not to defend the first script's numbers.**
- ⚠️ **Whether the §3 targets survive a rules-dense document at all.** The exemplar is a position
  document whose subject is tactics. `rules_primer.md` and `body_contact_and_battles.md` carry
  multi-book penalty ladders, and **a ladder stated accurately may not be sayable in 13 words.**
  A target that forces a tariff to be split across sentences is a safety risk, not a style win —
  §3's own rule 4 already says never to split a scope, and **where those two collide, rule 4 wins.**
- **Gendered pronouns.** The exemplar uses *"he"* and *"him"* for the opposing player,
  following its source, while dropping the IIHF women's and PWHL material the source carries.
  **The corpus has no stated house position and this specification does not invent one.**
- **How figure-dense documents are handled.** `conditioning_and_recovery.md` is figure-dense
  rather than rule-dense, so a "don't quote figures" instinct may remove its practical content
  entirely. **Ask before scripting it.**

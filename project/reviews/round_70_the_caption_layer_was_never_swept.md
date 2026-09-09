# Round 70 — the caption layer was never swept, and the audio described itself wrongly

**9 September 2026.** Run as a continuous loop from `OPEN_ITEMS.md`, coordinator plus eight agents,
file ownership disjoint and stated. This record is written as the round runs, so sections below are
dated by the wave that produced them rather than reconciled at the end.

---

## The round's largest finding, and it was in nobody's brief

⚠️ **ROUND 69 REPAIRED THE NEGATION-INVERSION DEFECT IN `content/` AND NEVER REACHED
`site/src/diagrams/*.mjs`. CAPTIONS ARE SPOKEN.**

The evidence is a single string. `site/src/diagrams/playing_without_the_puck.mjs` carries

```
'⚠️ Never meet a goal post head first, and never duck — head up, chin off your chest.'
```

which a listener hears as *"never keep your head up, never keep your chin off your chest"* — the
cervical-flexion mechanism taught as the instruction, against a hazard USA Hockey ties to injury **at
walking speed**. Meanwhile `grep -rn "Meet a goal post head first" content/` returns **three** lines,
all in the repaired form (*"…and never duck. Head up, chin off your chest instead."*) at
`playing_without_the_puck.md`, `winger.md` and `body_contact_and_battles.md`.

**Same sentence. Repaired in the layer people read, left standing in the layer people hear.** The
module's own comment quotes the *pre-repair* owner wording as its source, so the caption would have
survived the next review too — it had a citation.

⚠️ **The transferable part is not "check the captions". It is that a corpus-wide sweep is scoped by
the grep that drove it, and `content/` is not the corpus.** The caption layer is voiced, is borrowed
into multiple hosts, and no `content/` census can see it.

---

## Critical — a second caption inversion, comma-separated, which is why nothing found it

`site/src/diagrams/body_contact_and_battles.mjs` → `angleIntoTheCorner.caption`, hosted **and voiced**
at `content/technique/body_contact_and_battles.md:683` and `content/technique/skating.md:104`:

> "…get your skates parallel to the wall, take it on your forearm and hip **and never on the tip of
> your shoulder, knees bent, head up and chin off your chest.**"

The `never` is still live when the list resumes after the comma. The reviewer established it is the
only site in the corpus where the shoulder prohibition and the head/chin instruction share a clause
with **no full stop, no "instead", and no bracketing dashes** — it scanned every spoken sentence in
all 37 documents containing *"chin off your chest"*, found ten carrying an earlier negation, and read
all ten. Every other one brackets or breaks the tail.

⚠️ **It is comma-separated with a NOUN-PHRASE tail. Round 69's census matched a bare imperative VERB
after a second em dash. This matched neither half of that pattern.**

---

## Critical — the correction reached one facts block and stopped one block short, in the same file

`content/systems/forechecking_systems.md` has two sections about sealing at the boards. The
uncommitted round-69 repair added the **skate** limb to § *What your book allows when you get there*
and left the sibling block **27 lines above**, in § *When to pinch*, still naming the arm as the only
refused surface — *"Seal with body position, never with an arm…"*.

Heard alone, that value names **one** exception to "body position", so a listener infers everything
else is body position — and the coaching cue the whole repair exists to correct is *"seal with your
hip and your **skates**"*. § *When to pinch* is the section a defenceman actually reads before pinching.

**`check_facts.py` passes on both blocks.** It validates labels, lengths and structure; it cannot see
that two sibling blocks disagree about which surfaces a rule refuses.

The rule, verified in primary text: `sources/usah.txt:4547` Note 2 defines a skate *"push-off"* as
non-kicking contact; `:4550-4552` prices it at **a major plus a game misconduct**; Rule 627 read whole
(`:4543-4565`) carries **no classification exception**, corroborated by Appendix I at `:5291`. So it
reaches non-checking classifications too.

---

## ⚠️ The measurement that refuted a plan row, an owner-facing spec, and 37 shipped files

`OPEN_ITEMS.md` TIER 0-A said chapter marks for the audiobook build were *"derivable from
`scripts/md_to_speech.py`'s section boundaries, so they are not hand-authored."*

**Measured against the manifest and the corpus: false.**

| document | episode | words | apparent wpm |
|---|---|---|---|
| Reading Ice Hockey Diagrams | 53.4 min | 4,198 | **79** |
| Rules Primer | 67.9 min | 93,153 | **1,371** |
| whole library | 37.2 h | 1,164,940 | 522 |

Speech runs ~150 wpm. **Every one of the 37 episodes lands in a 48–72 minute band regardless of
whether its document is 4,198 words or 93,153** — a 17× spread in apparent rate. The duration is a
property of the production, not of the text, so no episode is a complete reading and **there is no
mapping from a heading to a timestamp.** Chapters have to come from the audio or not at all.

⚠️ **AND THE SAME MEASUREMENT CONDEMNED A STRING ALREADY SHIPPED IN ALL 37 FILES.**
`scripts/build_podcast_audio.py` wrote `description=<Title> — read aloud.` into every encoded episode;
`AudioPlayer.astro` labels the player *"Narration of <title>"*; `downloads.astro` says *"narration"*.
**Each asserts a verbatim reading, and the durations refute it.** This is metadata bound for Apple
Music, Apple Books and every podcast client.

**The repair, and the owner corrected it once in flight.** The first fix was the format-neutral *"the
audio edition"*. The owner rejected it: *"the audio should also stand alone on its own as a separate
standalone podcast, not be too strongly stated as just an audio version of the site."* ⚠️ **Both
wordings describe the episode by its RELATIONSHIP TO THE SITE rather than by its subject** — which is
what a listener scrolling a podcast app actually needs. The description is now the **document's own
description sentence** from `docs-meta.json`: corpus-derived, already reviewed, about hockey rather
than about this project, with the site as a trailing reference.

All 37 were re-tagged with `-c copy` — **a container rewrite of the same AAC stream, 1.12 GB
unchanged.** ⚠️ **`--force` would have re-encoded and spent a third generation of lossy loss to change
a text field.** `tags()` is now one function used by both paths, because an encode and a retag that
can drift is exactly how the wrong string survived in 37 files while the script that wrote it looked
fine.

---

## ⚠️ Method — three search traps measured this round, now recorded in `sources/README.md`

1. **The regex dialect.** `grep -i "cross ?bar" sources/usah.txt` returns **ZERO from a file containing
   four**. `?` is literal in BRE, so the command searched for the string `cross ?bar`, which is in no
   book. `grep -E` finds all four. ⚠️ **No error, no warning, and the command *looks* like a careful
   search that allowed for both spellings.** More dangerous than a mangled extraction, because a
   mangled extraction leaves a trace when you widen the window and this leaves none.

2. ⚠️ **The only trap that runs in the DANGEROUS direction.** Every other recorded mode makes a present
   string look absent, so it fails to a false *"cannot verify"* and the corpus stays as it is. **This
   one makes an absent string look present, and it fails to a verifier "refuting" a correct sentence
   and an author then rewriting it.** An unanchored search for `fend` returns **249 hits in `hc.txt`**
   — every one inside *defend*, *offend*, *defenders*. Anchored, `\bfend\w*` returns **0** and the
   corpus's claim is right. **The instinct on meeting a refuted claim is to rewrite it. Check the
   refutation first.**

3. **A house-word divergence can be INSIDE one book.** `sources/README.md` already recorded that CARHA
   writes `cross bar` open where others close it. **USA Hockey does both** — open at Rule 617(a)
   (`usah.txt:4149`, the definition of a goal), closed at 504(b), 618's Note and the penalty-shot
   clause. A one-word census of USA Hockey silently returns three of four, and the miss is inside the
   rule that defines what a goal is.

Also recorded: `grep "Adult Male Classification" sources/usah.txt` returns **zero** — the phrase wraps
after *"Adult Male"*. Flattened, it occurs exactly once in the playing rules (`:5111`) and once in the
Casebook, **both Rule 640(b)** — which is the entire basis for saying 640(e) carries no classification
limb. A raw grep would have made that finding unreachable.

---

## ⚠️ The prediction that did NOT generalise, and it is worth as much as the findings

The brief for the rulebook-absence census carried round 59's measured direction: *every absence claim
tested has been false, and all of them made the corpus look less supported than it is.*

**It did not hold. Of 32 rulebook-absence claims tested against primary text: 30 TRUE, 2
confirmed-but-incomplete, 0 FALSE, 0 requiring deletion.** Several are tighter than the corpus's own
hedging admits.

⚠️ **A reviewer who went in expecting round 59's direction would have manufactured corrections.** The
reason is visible in the sentences: most record a search that was actually run, name the extraction,
and were written by someone with the book open. **Round 59 measured WEB and JOURNAL absence claims,
which were not.** The direction is a property of *how a claim was made*, not of absence claims as a
class — and the brief promoted it into a general law. That is the same failure shape as quoting a
figure out of its owner: a qualified finding shed its qualification when it was relayed.

The two incomplete ones are real and routed:
- `rules_primer.md:407` — *"the tug … appears nowhere in NHL Rule 55"* is **true** (Rule 55.1 is
  *"using the stick in a manner that enables a player to restrain an opponent"*, no motion
  requirement). ⚠️ **But the NHL's own hooking SIGNAL, Rule 29.18, IS "a tugging motion with both arms
  as if pulling something from in front toward the stomach."** The myth has a real foothold one rule
  away, and a reader who believes the tug is required will hook and expect not to be called.
- `shooting.md:920` — the conclusion *"nowhere in Rule 621"* is **true**; the parenthetical
  enumeration is one short, missing Rule 504(b).

**Neither is a deletion. Both are scope or enumeration corrections.**

---

## Also found, and each routed to the agent that owns the file

- **The price of a game misconduct is understated wherever 627(a) is quoted.** `sources/usah.txt` Rule
  403: a game misconduct *"shall also be suspended for the team's next game"*. The corpus says
  "ejection"; the price is ejection **plus the next game**.
- **An over-restrictive rules claim that each file contradicts a few lines away.**
  *"only the last of those four is available"* is right for IIHF women's hockey and **wrong for USA
  Hockey non-checking**: 604(c) Note names a wall battle and a net-front battle, in terms, as legal
  competitive contact that *"shall not be penalized"*. Both files already say so — `forechecking_systems.md:552`
  and `offensive_zone_play.md:1109`. ⚠️ **Two individually-defensible sentences in one document
  disagreeing read aloud, which is the contradiction class this repository has been bitten by before.**
- **A caption that assumes one host cannot safely be borrowed.** `shotBlockGetClose` says the blocker
  is drawn as a forward because *"the section names none"* — its second host is
  `content/positions/defender.md`, whose §Blocking Shots opens *"Blocking shots is a defenceman's
  job"*. **False of the section it sits in, in that host.**
- **A caption authoring a rule its host section does not carry.** `cornerEscapeRoutes` states USA
  Hockey 622 and its minor; §8 of its only host never mentions 622. The rule text is correct, so this
  is layer drift — but it also **drops two scope qualifications** the corpus carries at
  `puck_handling.md:481`, answering a four-book question with a one-book rule.
- **`goaltender.md` was capping the walk-out at a minor with no ceiling**, and 604(d)/(e) and
  7.3(b)/(c) were absent from the file entirely. `check_absolutes.py` did not see it.

---

## ⚠️ The cap held, and it did its job

Both `goaltender.md` and `defender.md`'s facts blocks are at `HARD_MAX = 11`. The agent migrating
safety material out of an over-long caption reached the body, Common Mistakes and Key Takeaways and
**could not reach the facts layer** — the layer voiced alone, which a listener may take *instead* of
the prose. **It refused to evict a line and reported the collision.** That is the correct behaviour and
it is why the cap exists.

The coordinator's ruling was **split, do not evict, and do not raise the cap** — the remedy
`forechecking_systems.md` already used. The agent's nominated eviction, a Hockey Canada 7.3(c)
match-penalty tier, was refused: **trading a penalty ceiling for another safety line is not a trade
this corpus makes.**

---

## Corrections to this round's own briefs

- **"Six captions reviewed by nobody" was five** — `netFrontWalkOut` was reviewed in round 69.
- **"1,000–3,000 chars" was wrong at both ends.** Measured against all 198 units: median 1,272, p90
  2,565. This file's five sit at the 76th, 89th, 90th, 94th and 99th percentiles, and
  `net-front-walk-out-direction` is **5,764 — the longest in the corpus**, voiced in three hosts.
- **The netFrontWalkOut brief's caption length was 6,069; it measures 5,764.** Borrowed cost 17,292
  spoken characters, not 18,207.
- ⚠️ **Four of the seventeen strings that brief said were load-bearing are not in the caption at all.**
  `604(d)`, `604(e)`, `7.3(b)`, `7.3(c)` occur zero times in it. They are zero in `goaltender.md` too —
  so they surfaced a real and separate defect — but **cutting the caption could never have lost them.**
- **The absence-census brief was short by eleven documents** and mis-attributed ~20 web/journal claims
  as rulebook work. Real population: ~90 distinct sentences across 28 documents, of which ~32
  clusters are rulebook claims.

---

## ⚠️ A false verification by the coordinator, caught immediately, recorded because the shape recurs

Testing the retag, the coordinator ran `--retag --limit 1` and then probed **episode 1** for the new
description. `--limit` slices the pair list in **master-path order**, not track order, so it had
retagged **episode 6**. The probe read an untouched file and showed the old string.

**Read as "the retag silently did nothing." It had worked perfectly.** ⚠️ **A verification that reads a
different object from the one the command wrote is not a weak check, it is a check of nothing** — and
it fails in whichever direction the untouched object happens to sit. The correct probe reads the file
the tool's own output named.

---

## ⚠️ THREE COORDINATOR FALSE VERIFICATIONS IN ONE ROUND, ALL CAUGHT, ALL THE SAME SHAPE

Recorded because the shape is the one this repository keeps meeting: **a check that returns a clean,
confident result about something other than the thing you meant to check.**

**1. A probe that read a different object from the one the tool wrote.** Testing the metadata retag,
`--retag --limit 1` was run and then episode **1** was probed. `--limit` slices the pair list in
**master-path order**, not track order, so it had retagged episode **6**. The probe read an untouched
file and showed the old string. ⚠️ **Read as "the retag silently did nothing." It had worked
perfectly.** The correct probe reads the file the tool's own output named — and the tool did name it.

**2. A fuzzy lookup that returned a confident wrong number with no symptom.** `build_podcast_cover.py`
walked `rink.json` for any key called `width` and found **`goal.width` — the six-foot GOAL MOUTH** —
reporting it as the width of an eighty-five-foot rink and scaling the whole drawing by it. It printed
*"rink width 6 ft"* cheerfully. ⚠️ **Caught ONLY because the script prints what it read.** Replaced with
explicit dotted paths that fail rather than fall back. **A lookup that cannot say which key it used
cannot be checked.**

**3. ⚠️ THE RECORDED FALSE-PASS TRAP, REPRODUCED BY THE COORDINATOR, IN A NEW WAY.** `OPEN_ITEMS.md`
records two ways `npm run build` reports success while failing. Here is a third, and it was self-
inflicted: the build was run as `npm run build 2>&1 | tail -40`, so **`$?` was `tail`'s exit code, not
npm's.** The wrapper reported **0** while `check:links` had failed on 40-odd `/audio/` hrefs, and the
failure was visible in the output only because `tail` happened to show it. ⚠️ **A pipe destroys the exit
code of everything upstream of it. Never capture an exit status through a pipe** — run the command
bare, or use `PIPESTATUS`, and check `dist` contents as well as the status.

**And the defect that false pass was hiding was itself a half-measure.** The `/audio/` skip added to
`check-links.mjs` covered `<audio src>` and **not** `<a href>`. The audio is reached BOTH ways — the
player emits an `<a href>` fallback inside the `<audio>` element, and the downloads page emits a direct
per-episode download link. ⚠️ **A skip that covers one of two selectors is a skip that does not work**,
and the only reason it surfaced is that the build was run at all.

---

## ⚠️ THE DISCRIMINATOR THAT ENDED THE ROUND, AND IT IS WORTH MORE THAN THE REPAIRS

The caption census ran three times. The first used the bar *"repair when the tail is an instruction"*
and read 370 sentences. **Three defects were found AFTER it "finished"** — which is not bad luck, it is
a blunt instrument. The rule that came out of it:

> **Repair when the negation is a MAIN-CLAUSE negation immediately before the separator. Leave when it
> is embedded in a relative or subordinate clause, sits behind a MATCHED PAIR of parenthetical dashes,
> or is resolved by an intervening "so" or "but".**

⚠️ **The corpus's own convention was already doing this correctly and nobody had noticed.** Every
cardinal-rule instruction in `site/src/diagrams/` is introduced by **"so"** — *"…is a coaching choice
and not a law — **so** find out which yours runs"* — and that conjunction closes the negation. The one
site with a bare imperative straight after the dash was the one that inverted.

**Re-run from scratch with that filter: 2,766 spoken sentences → 514 separator-after-negation → 376
surviving the main-clause test → 26 with an instruction tail, ALL READ → 1 defect.** ⚠️ **The sharper
instrument is also the CHEAPER one — 350 of the 376 have a declarative tail and are safe by
construction.** It reproduced both known false positives (*"play runs on until…"*, where "play" is a
noun) which is the check that it is behaving.

**And the last refinement, which is the most transferable sentence in this record:**

> ⚠️ **ASK WHAT THE INVERTED READING ACTUALLY SAYS, NOT JUST WHETHER ONE IS AVAILABLE.**

`winger-dz-reverse` — *"Note what has not changed: feet wide and moving, backside into him, puck on the
far side of your body"* — is structurally identical to the Critical: bare noun-phrase posture tail,
negation one word back. **It is safe, because carrying the negation forward produces the SAME
instruction, not the opposite one** — the *"not"* attaches to *changed*. In the Critical, carrying it
forward produced *"never knees bent, never head up."*

## The worst caption defect in the corpus, found last, in the longest caption

`net-front-walk-out-direction`, voiced in **three** hosts:

> *"The stick tie has bounds of its own, and **they are not optional: lift** their stick up rather than
> sweeping it sideways, **take the lift below their bottom hand**, and **keep your shaft out of their
> back.**"*

Main-clause negation **one word** before the colon, three bare imperatives after. ⚠️ **Inverted, two of
the three teach the exact penalties the next two sentences of the same caption name** — a lift at or
near the hands is hooking under IIHF 55.1 on location alone, and a shaft in the back is cross-checking,
*"which every one of the four books penalises and none of them caps at a minor."* ⚠️ **It is also a
negative-of-a-negative** — *"not optional"* means mandatory — **so the listener is already resolving one
polarity when the imperatives land.**

## ⚠️ `describe` IS A SECOND LISTENER'S LAYER, AND THE SEAM IS SAFE FOR A REASON NOTHING ENFORCED

Two agents reported `describe` as *"never voiced, page-only"*. **Half true and misleading.**
`md_to_speech.py` never reads it — but `site/scripts/lib/rink.mjs:566-571` returns
`` `${describe} ${caption}` `` as the SVG `<desc>`, and `site/src/plugins/remark-corpus.mjs:292` marks
the `<figcaption>` **`aria-hidden`** on the ground that `<desc>` carries the same words. ⚠️ **So for a
screen-reader user the `<desc>` is the ONLY route to the caption.**

All 44 `describe` sentences carrying the shape were read: **zero defects**, and the reason is
structural — every one is *"No X is drawn: [statement about the picture]"*. **`describe` contains no
instructions by design; that is the caption's job**, and this defect class needs an instruction tail.

**The seam itself: all 198 pairs checked. 148 end their `describe` on a negation; 25 open the caption on
something a classifier calls an instruction; all 25 are false positives** — captions open by *naming*
the picture (*"Backchecking lanes"*, *"Crossing the royal road"*), not by instructing.

⚠️ **BUT THE INVARIANT THAT KEEPS THAT CLASS EMPTY WAS AN UNSTATED AUTHORING HABIT.** All 198
`describe` fields happen to end in terminal punctuation, so the single-space join yields a sentence
boundary rather than a run-on. **Nothing checked it.** A `describe` edited to end mid-sentence would
fuse into the caption's first sentence, silently. **Now enforced as a build-time assertion in
`build-diagrams.mjs`** — a build-time gate rather than a worklist, because the failure is silent, the
fix is one character, and no legitimate `describe` ends mid-sentence.

---

## What this round could not have found

⚠️ **THIS SECTION WAS WRITTEN MID-ROUND AND ONE OF ITS CLAIMS WAS LATER FALSIFIED BY THE ROUND ITSELF.
It said "Nothing in this round looked at a rendered page in a browser." TWO `site-reviewer` passes
subsequently ran in real Chrome** — recorded below — **and the second cleared C11 on the shipping state.**
The claim is left visible rather than quietly deleted, because *"what this round could not have found"*
is the section future rounds mine for scope, **and a stale one is expensive**: a reader trusting it would
re-run a browser pass that has already happened, or believe a gap that has closed.

What follows is otherwise as written, and the rest of it still holds. One reviewer named this as its
specific gap: whether the new
`offensive_zone_play.md` boards-posture paragraph appears on the page at all, and where relative to
the facts block. The Astro build caches the markdown transform and both `node` and `npm` are shims
here, so a build that has not cleared `.astro` is not evidence.

**Nothing looked at a picture.** The agent that migrated a caption's safety material into two
documents' bodies said so in terms: it verified the caption's *words* against the rulebooks but never
opened the geometry or a rendered SVG, so **if the drawn attacker route goes across the goalmouth
rather than toward the corner, it has now written the opposite into two more documents and nothing
run this round would have said so.**

And a rulebook grep tells you a technique is legal; it cannot tell you it is survivable. The one
question nothing on disk can answer: **whether USA Hockey has issued a Rule Emphasis or officiating
bulletin applying 627(a) to sustained skate contact in a board battle rather than to a deliberate
shove.** The only published interpretation is a tangled-players fact pattern. The corpus currently
states the wall-seal application flatly, and it is a reading, not a ruling.

---

# ⚠️ THE GATE BLOCKED, AND THE WORST THING IT FOUND WAS THE DISPATCHER'S

**`commit-gate` returned BLOCK on the 41-file staged diff.** Recorded here in full, because a gate that
only ever clears stops being read — and because the round's most consequential defect was introduced by
the coordinator's own brief, not by any agent.

## ⚠️⚠️ C4/C5 — A WRONG RULE NUMBER, RELAYED IN A BRIEF, APPLIED FAITHFULLY, AND COMMITTED

Both `forechecking_systems.md` and `offensive_zone_play.md` cite **USA Hockey Rule 403(b)** for the
proposition that a game misconduct also costs the player their team's next game, and quote text beside
it. ⚠️ **The quoted text is Rule 404(b). 403(b) is a different rule.**

| | |
|---|---|
| **404(b)** `usah.txt:2528-2540` | *"A 'GAME MISCONDUCT' penalty involves the suspension of a player or Team Official for the balance of the game… A player or Team Official incurring a game misconduct penalty **shall also be suspended for the team's next game**…"* |
| **403(b)** `usah.txt:2440-2449` | *"For the **second major** penalty in the same game to the same player or goalkeeper… suspended for their team's **next two games**."* |

⚠️ **The book itself distinguishes them** — 404(b) names 403(b) as its own exception, *"except that when
such penalty is imposed under Rule 403(b) (Second Major in Game) there shall be a minimum two-game
suspension."* So this is not a near-miss: it cites the two-game second-major case for a one-game
consequence.

**HOW IT HAPPENED, and this is the whole value of the entry.** A `rules-verifier` reported the passage as
*"Rule 403 'GAME MISCONDUCT'"*. **The coordinator relayed that into a repair agent's brief verbatim,
without opening the book.** The agent — correctly following a brief that named a rule and quoted its
text — propagated it to five sites in one file and three in the other. ⚠️ **It then reached a commit,
because a concurrent session committed the partial work.**

⚠️⚠️ **AND IT IS LIVE IN PRODUCTION.** The concurrent session confirmed that `3f5d6f0` was **pushed to
`origin/main` at 00:26**, and `main` deploys. It re-derived both rules from the book independently and
counted **eight** occurrences at the pushed commit — five in `forechecking_systems.md`, three in
`offensive_zone_play.md`. The ninth is one its commit did not touch. **The pushed commit cannot be
amended; the repair is this follow-up.**

⚠️ **THE DIRECTION MATTERS FOR PRICING THE URGENCY, AND IT IS THE REASSURING ONE.** 403(b) is the
**two-game** second-major suspension; 404(b) is the **one-game** ordinary case. **So the live error
OVERSTATES the tariff.** A reader acting on it is *more* cautious than the book requires, not less.
**It is wrong and it is live and it should be fixed — but nobody is hurt by it, and it is not on its own
a reason to push without the owner's go-ahead.** Recorded so that whoever reads this next does not price
it as a safety incident.

⚠️ **THIS IS THE FAILURE THIS REPOSITORY'S CENTRAL INSTRUCTION EXISTS TO PREVENT** — *"give every agent
the plan row as a hypothesis and tell it to refute the brief before acting on it"* — **and the
dispatcher is the one who skipped it.** The instruction is aimed at agents; nothing in the loop pointed
it at the coordinator's own relays. **A citation copied out of an agent's report is exactly as unverified
as a figure copied out of a plan row.**

⚠️ **And the corpus already had it right in five other documents** — `rules_primer.md:866`,
`body_contact_and_battles.md:572`, `defensive_zone_coverage.md:133/:146/:433` — so the diff shipped a
**self-contradiction**, which is the shape a reader is most likely to notice and least able to resolve.

## ⚠️ C5 — THE ROUTING DOCUMENT REPEATED THE MISLABEL THAT CONTENT WAS CORRECTED FOR, IN THE SAME DIFF

A new `sources/README.md` hunk said USA Hockey prints `crossbar` closed at *"504(b), 618's Note and the
**penalty-shot rebound clause**."* The fourth site (`usah.txt:6726`) is inside the **Blind Hockey
tie-breaking-shots procedure**; USA Hockey's actual penalty shot is **406(c)**, which reads *"No goal can
be scored on a rebound of any kind"* — no crossbar, no exception. The post-or-crossbar carve-out is
**NHL Rule 24.2**.

⚠️ **`content/technique/shooting.md` was edited IN THE SAME DIFF to correct precisely this mislabel**, so
two staged files were flatly contradictory — **and the wrong one was `sources/README.md`, the routing
document every agent is told to read first.** Corrected, with the correction stated in the file.
**Fifth round running in which "check the disabled-hockey sections" has paid.**

## C3/C8 — the review record did not cover what was staged

This record named **nine of the seventeen** staged content files and **zero** reviewers. C4–C6 are
satisfied by reviewer output naming the files reviewed; a record that describes the round's findings
without listing its coverage does not meet that. ⚠️ **A good record is not the same as an adequate one.**
Coverage table added below.

## C6 and C10 — two reviews that had not been run

- **C6:** new spoken safety material in `goaltender.md` and `defender.md` — new `Never:` and `Risk:`
  values about cervical spine, edges and net-front contact, voiced alone — with **no `safety-reviewer`**.
- **C10:** `AUDIO_ENABLED` false → true, a player on all 37 pages, a new feed, nine playlist endpoints
  and a new downloads section, with **nothing rendered in a browser**. The gate ran the build itself and
  cleared the mechanical half; the browser half was simply unmet.

**Both dispatched.** ⚠️ **Neither was a defect the gate found in the work — they are dimensions the round
never covered, and silence on a dimension is the failure mode.**

## What the gate pressed and found sound

No eviction from any facts block (every removed value has a near match among the added; `HARD_MAX`
unchanged and `check_facts.py` not staged). `diagrams.json` genuinely rebuilt — 198 units in, 198 out,
zero ids added or removed, only `caption`/`describe` changed on 11 units, every changed string traced to
a module. No new negation inversion in any of the 50 changed facts values, read as rendered speech.
Non-negotiable 6 clean, including the trailers. `.gitignore` strengthened only. And the record's own
declared gap resolved: the drawn attacker route is `A_PLANTED → { at: 'corner:right', dy: -4 }` — toward
the corner, not across the goalmouth — so the round did **not** write the opposite into two documents.

⚠️ **One correction to this record from the artefact: it said 12 diagram repairs; `diagrams.json` shows
11** (10 captions plus one `describe`). Taking the count from the build product rather than from the
agent's report.

---

# COVERAGE — which reviewer saw which staged file

| File | Reviewed by |
|---|---|
| `systems/forechecking_systems.md`, `systems/offensive_zone_play.md` | `safety-reviewer`, `rules-verifier`, `content-reviewer` (census), `commit-gate` |
| `positions/goaltender.md`, `positions/defender.md` | `safety-reviewer` (dispatched post-block), `content-reviewer` (census), `commit-gate` |
| `foundation/rules_primer.md`, `technique/shooting.md` | `rules-verifier` (absence claims), `content-reviewer` (census), **`safety-reviewer` (post-block; spoken-delta review — HEAD-vs-working-tree word-diff, all deltas read, **run BEFORE the post-audit-5 repairs**)**, `commit-gate` |
| `technique/body_contact_and_battles.md`, `technique/skating.md`, `technique/passing_and_receiving.md`, `systems/breakouts.md` | `content-reviewer` (census), author self-census, **`safety-reviewer` (post-block; spoken-delta review — HEAD-vs-working-tree word-diff, all deltas read, **run BEFORE the post-audit-5 repairs**)**, `commit-gate` |
| `off-the-ice/mental_game.md`, `positions/center.md`, `hockey-iq/playing_without_the_puck.md`, `hockey-iq/risk_management.md`, `systems/defensive_zone_coverage.md` | `content-reviewer` (census), author self-census, **`safety-reviewer` (post-block; spoken-delta review — HEAD-vs-working-tree word-diff, all deltas read, **run BEFORE the post-audit-5 repairs**)**, `commit-gate` |
| `positions/winger.md`, `positions/switching_positions.md` | author census (499 tails read), **`safety-reviewer` (post-block; spoken-delta review — HEAD-vs-working-tree word-diff, all deltas read, **run BEFORE the post-audit-5 repairs**)**, `commit-gate` |
| `site/src/diagrams/*.mjs` (6 modules) | `diagram-reviewer`, then a three-pass caption census, `commit-gate` |
| `site/src/data/diagrams.json` | build product — verified field-by-field against its modules by `commit-gate` |
| Audio: `consts.ts`, `AudioPlayer.astro`, `downloads.astro`, `podcast.xml.ts`, `[playlist].m3u.ts`, `podcast.json` | platform-requirements research (primary sources), `site-reviewer` (dispatched post-block), `commit-gate` |
| `scripts/*`, `sources/README.md`, `.gitignore`, `site/scripts/*` | coordinator, `commit-gate` |

⚠️ **`content-reviewer` (census) means the corpus-wide negation sweep read that file's rendered speech.
It is NOT a full document review, and no file in this round received one.** That is a real limit of this
round and it is stated rather than papered over.

---

# CLOSED HANDOVERS — the questions agents declared they could not reach

**The loop's highest-value work, per CLAUDE.md, is answering what agents could not.** Four were closed
by the coordinator this round; the rest are plan rows.

**1. ✅ Does USA Hockey's Casebook state a crossbar test for a high-sticked goal?** An agent named this
as its one unrun search. **No.** Rule 621's Casebook block (`usah_casebook.txt:13893-14130`) contains
**zero** `cross ?-?bar` occurrences, and its test is explicitly shoulder height — Situation 7: *"When any
part of the stick is carried above the shoulders, the entire stick is considered to be high"*, and
*"the intent of the high stick rule is to keep the sticks below the height of the shoulder."*
**The corpus's claim is confirmed and STRENGTHENED.**

**2. ✅ Does any repair split a prohibition from its remedy across an audio chunk boundary?** Named by
an agent as the round's most dangerous unchecked side effect, and untestable until every agent had
finished. **No. 2,894 boundaries scanned, 2 hits, both read, both correct as written.** Now a permanent
worklist, `scripts/check_chunk_splits.py`.

**3. ✅ Is `describe` voiced?** Two agents said "page-only". **Half true and misleading** — it never
reaches the audio pipeline but it IS the SVG `<desc>`, and the `<figcaption>` is `aria-hidden`, so for a
screen-reader user `<desc>` is the ONLY route to the caption. Now enforced: `build-diagrams.mjs` asserts
every `describe` ends in terminal punctuation, because the invariant keeping that whole class empty was
an unstated authoring habit.

**4. ✅ Does the IIHF Situation Handbook settle Rule 48.1(III)'s first limb?** The last agent of the
round named this as the check that would decide whether the corpus's reading was *undisclosed* or
*wrong*. **It does not settle it, and that is the answer.** Both editions carry exactly ONE Rule 48
situation — `48.1`, in `iihf_situations_v1.1.txt` and `iihf_situations_2026-27.txt` — and it turns
entirely on head contact: *"clearly targets the head and the head is the main point of contact."*
`upward or outward` and `extends their body` both return **0** in both handbooks, against a working
control (Rule 48 is present, with its own heading, in both).

⚠️ **So no published ruling reaches the extension limb without head contact, in either direction.** The
corpus's reading is an inference nobody has contradicted — which makes the round-70 treatment right:
**disclose the inference, do not reverse it.** ⚠️ **And note this is a negative existence claim of
exactly the kind this round tested 43 of** — it is recorded here with its control and its search terms
so the next reader does not have to re-derive it.

## ⚠️ AND A SELF-CONTRADICTION THE PROPAGATION EXPOSED, WHICH IS THE MORE USEFUL FINDING

`body_contact_and_battles.md`'s **Sources trailer was already more careful than its own body.** The
trailer grounded the box-out exclusion on the chapeau alone — *"the IIHF's chapeau confining its list to
'when a Player checks an opponent'"* — and asserted **no** head-or-neck requirement, while the body
asserted one. **The document disagreed with itself across two layers, and the layer reviewers skim was
the one that had it right.**

⚠️ **This inverts the usual direction of this project's layer defects**, which is body-correct and
summary-degraded. **A trailer can be the most accurate statement in a document, and a repair that
"brings the trailer into line with the body" can therefore make a document worse.** Check which layer
is right before deciding which one to move.

---

# THE TWO REVIEWS THE FIRST BLOCK DEMANDED — findings and fixes

⚠️ **Recorded here because the second gate run blocked on their absence, and it was right to: a finding
that exists only in a message to the coordinator is not evidence.**

## `safety-reviewer` — `goaltender.md` and `defender.md`

**Three Majors, all applied.**

1. ⚠️ **A safety claim degraded into a near-tautology.** `goaltender.md`'s `Risk:` value said *"that
   **head-first collision** … can occur at walking speed"*. The source says the **INJURY** does:
   `sources/huh.txt:225-229` — *"almost all on-ice cervical spine injuries have been due to the head
   being slightly flexed (head down) … **it can occur at walking speed**"*, where the referent of
   *"this"* is the injury. **Heard alone in the facts layer with no antecedent, the listener got
   something trivially true where the body gives them a spinal fracture.** The owner and `defender.md`
   were already right, so **the two files in one agent's ownership contradicted each other in the spoken
   layer.** Fixed to the owner's wording, with *"head-down"* restored, and propagated to Common Mistakes
   and Key Takeaway 12.
2. ⚠️ **A facts block that PRESUPPOSED a league restriction three times and never stated it.** The new
   `### In front of your own net` block referenced the walk-out three times — *"a checking league does
   not make it free"*, *"whatever your league lets you do"* — **without ever saying it needs a full
   checking league at all.** Scope: USA Hockey 12U-and-below, all girls'/women's, all non-check adult;
   Hockey Canada U13-and-below and all female hockey; IIHF women's — **the majority of this corpus's
   readership.** `defender.md`'s equivalent block stated it outright; **that asymmetry was the finding.**
3. **A Key Takeaway that advertised the section's safety rules and omitted one.** KT 12 said *"two items
   that are safety rules"* and named two; the third — *do not lift them off their edges* — reached body,
   facts and Common Mistakes and stopped. Added, matching `defender.md` KT 1 word for word.

⚠️ **THREE DEVIATIONS FROM THE PROPOSED WORDING, EACH FORCED BY THE 200-CHARACTER CAP, AND NONE OF THEM
TRIMMED A HEDGE.** (a) Major 1's text ran to 222; the **addressee clause** was dropped, not a hedge, and
that removal also cured Major 1's own complaint about a dangling antecedent. (b) Major 2's ran to 247;
**both** limits were kept and the room came from compressing *"take the inside position on"*. (c) Major
3's clause was made a NEW SENTENCE rather than an em-dash tail, because appending it as proposed would
have produced *"…no minor for checking from behind at all — and their skates stay on the ice"* — **a
negation carrying across a dash onto the tail, the exact defect this round exists to remove.**

⚠️ **ONE MINOR REFUTED, AND THE BRIEF WAS BACKWARDS.** The brief asserted `defender.md` stated USA
Hockey 604(e) flatly and `goaltender.md` precisely. `604(e)` appears **once** in `defender.md`, already
reading *"604(e) **allows** a match penalty"*, and **not at all** in `goaltender.md`. **There was no
divergence to close.** The brief's line numbers for 604 were also wrong.

## `site-reviewer` — the rendered site, real Chrome over DevTools Protocol, four viewport/theme cells

⚠️ **It refuted the brief's premise, and the same wrong premise was in the shipped page.** The brief and
`downloads.astro` both said each page *"carries a player at the top"*. It is a **sticky BOTTOM bar**
(`[...slug].astro` placed it after `</article>`; `global.css` styles it `position: sticky; bottom: 0`).

**Findings, all applied:**
- ⚠️ **Pressing play on a missing episode told the reader NOTHING.** Measured: a real dispatched click
  produced a 404 and `audio.error = {code: 4, MEDIA_ELEMENT_ERROR: Format error}`, while the control
  rendered **identically** before and after — *"Listen"*, play triangle, `0:00 / 0:00`, a full-width
  scrubber — **the only pixel difference being the triangle dimming by one shade.** A misleading
  affordance, not a degraded one, on all 37 pages. **Fixed:** an `error` listener in
  `public/audio-player.js` replaces the panel with *"This episode is not available yet."*
- ⚠️ **The player was the 184th tab stop** on breakouts and the 192nd on rules_primer, on a page where
  it is on screen from first paint — DOM order against visual order, WCAG 2.4.3. **Fixed:** moved ahead
  of `<article>`, still outside `data-pagefind-body`.
- **`AUDIO_ENABLED` set back to FALSE**, and — after the second gate run — **the downloads Audio section
  gated on the same flag.** ⚠️ **The first attempt applied that reasoning to the player and not to the
  page**, leaving 46 links to the same missing files while **deleting** the honest *"specified but
  parked"* disclosure that had stood there and teaching `check-links.mjs` to skip `/audio/`. **One flag,
  one truth.**
- **N2:** the endpoints' `Content-Type` headers are **discarded** — this is a static build, so the
  `Response` is serialised to a file. Measured: `.m3u` served with an EMPTY type, `podcast.xml` as
  `text/xml`. Comment corrected; the production lever is S3 metadata at upload.
- **N3:** the feed declared `audio/x-m4a` while the uploader sent `audio/mp4`. Made to agree on Apple's
  listed type.
- **N4, NOT FIXED, deploy-facing and out of scope:** `.github/workflows/deploy.yml`'s dormant *Sync
  audio* step now activates, shipping the nine build-generated `.m3u` files with
  `max-age=31536000, immutable` — and only pass 2's log feeds the CloudFront invalidation, so **a
  playlist would be stale at the edge indefinitely** after a document is added. Its neighbouring comment
  still says *"The narration MP3s (Phase 5)"* — both words this round corrected elsewhere. **Plan row.**

**PASSED, MEASURED:** ⚠️ **the zero-off-origin property survived** — `OFF_ORIGIN: []` on every page in
every cell, which is the property the owner chose a self-hosted player to protect. Console clean but for
the deliberate 404. No horizontal body scroll at 375 **or 320**. Theme toggle persists across
navigation; player label contrast 6.0:1 light and 8:1 dark. Facts blocks and `Rule set:` blockquotes
render as panels in both themes. Feed parses: 37 items, 37 unique GUIDs, no zero-length enclosures. The
nine section playlists sum to exactly 37. `/downloads` figures check out against `podcast.json`.

⚠️ **THE ONE THING STILL NEVER SEEN BY ANYONE: this player working against a file that exists.** Every
observation above was made against a 404. That gap closes the moment one episode is on the server, and
not before.

---

# ✅ C11 CLEARED — the second browser pass, on the state that will actually ship

Run after the flag flip, because the first pass's clearance was voided by it. **No Critical, no Major.**

- **`/downloads`** renders as `H2 "Audio"` → one paragraph → `HR`. **Zero `/audio/` or podcast anchors
  anywhere on the page**, zero empty lists, heading level matching its siblings. It does not read as a
  rendering failure: the bold *"Not published yet."* lead gives it the weight of a deliberate statement.
- **Document pages:** `main`'s children are exactly `ARTICLE | NAV.prevnext` — **not even a stray
  whitespace node** where the component sat. `audio, .audio-player` → 0. `audio-player.js` never
  requested. No stray sticky bar.
- ⚠️ **The zero-off-origin property HOLDS**: `OFF_ORIGIN(site) = []` in **all eight cells**, 9 requests
  per page, all same-origin. ⚠️ **And the reviewer correctly attributed the one confusing observation
  rather than filing it:** a `chrome-extension://…walkme_loading_web_accessible.js` request is **WalkMe,
  force-installed on this machine by managed policy** (`/Library/Managed Preferences/com.google.Chrome.plist`
  `ExtensionInstallForcelist`), present even in a fresh profile, and the string appears **nowhere** in
  `dist/`, `src/` or `public/`. **A machine-policy artefact reported as a site regression would have been
  a false finding of exactly the kind this project keeps recording.**
- **Console clean** in every cell. The deliberate 404 the first pass saw can no longer occur.
- **Feed and playlists served, 200, not HTML.** ⚠️ **The feed is built but deliberately NOT ADVERTISED** —
  the only `<link rel="alternate">` still points at `/rss.xml`, which carries zero enclosures — so no
  client can discover the parked feed. Consistent with the flag's intent.
- **The content sweep's edits broke no rendering.** 53 facts panels on `body_contact_and_battles` with zero
  un-transformed `pre.language-facts`; **679 source blockquotes, zero `<blockquote>` in `dist`** — all
  converted to callouts; the §5 worked example renders as an amber bordered panel in **both** themes and
  carries a ⚠️ glyph plus bold, **so it does not depend on colour alone**. No horizontal body scroll at
  375 **or 320**; tables and diagrams scroll inside their own containers.

**MIN-3, and it was worth catching:** the new paragraph ended *"…and the players are switched off rather
than left to fail silently."* ⚠️ **With the flag off there is no player anywhere on the site, so that
clause describes the PROJECT'S state to a reader who has never seen one** — non-negotiable 6. **Cut.**
The reviewer flagged it as a judgement call and declined to touch it, which was right.

**MIN-2, not fixed, recorded:** `dist/audio-player.js` (2,539 bytes) ships and is referenced by nothing
while the flag is off. Harmless — `public/` is copied wholesale, and that is exactly what makes the flag
flip a one-line change.

⚠️ **The one thing this pass could not test, and it bears on a claim written into the code:**
`[playlist].m3u.ts` says *"in production S3 guesses from the extension (.m3u → audio/x-mpegurl), which
happens to be right."* **That is untested and untestable from a local preview** — the static server
discards the route's headers, and the real type comes from S3 object metadata set at upload.
**Confirm with `curl -I` against the bucket after the upload runs.**

---

# THE CONTENT SWEEP — the largest change in the round, written up last, which was the mistake

⚠️ **A commit gate blocked on this section's absence, and it was right.** 654 lines of this record
covered the caption sweep, the audio pipeline and two post-block reviews in forensic detail, while the
change that rewrote the most prose appeared **once**, as *"the ~70 content edits broke no rendering"*.
⚠️ **That gap is what let a defect through** — a modality change in `center.md`'s spoken layer — and it
is why an admission that *"no file received a full document review"* read as **documenting a gap rather
than declaring a scope.**

## What it was

**⚠️ THE SIZE OF THIS SWEEP IS NOT STATED HERE AS A REPAIR COUNT, and an earlier version of this line
said "~70 repairs across 14 documents" — a figure nobody measured, which then failed to reconcile with
the "13 in-scope documents" two paragraphs below and blocked a commit gate.** The measured figure, from
the gate's own run: every one of the **17 staged content files has a non-zero spoken delta**, measured by rendering each
through `md_to_speech.spoken_sentences` at HEAD and at the index and diffing. ⚠️ **No total is given here
on purpose.** An earlier draft said *"487 spoken deltas"*; a later gate measuring the same tree got
**5,653 changed words across 232 hunks**, and neither figure stated its unit. **The load-bearing claim is
"17 of 17", which is unit-free and reproducible** — no file's change is invisible to a listener. **Every staged content
file reaches the listener**, so no file's changes are speech-invisible.

**THE SETS, NAMED, because the round blocked on their being unnamed:**
- **17 staged content files.**
- **4 safety-reviewed BEFORE the first block:** `systems/forechecking_systems.md`,
  `systems/offensive_zone_play.md`, `positions/goaltender.md`, `positions/defender.md`.
- **13 safety-reviewed AFTER it**, which is the "13 in-scope" below: `technique/skating.md`,
  `technique/body_contact_and_battles.md`, `technique/passing_and_receiving.md`,
  `technique/shooting.md`, `off-the-ice/mental_game.md`, `positions/center.md`,
  `positions/winger.md`, `positions/switching_positions.md`,
  `hockey-iq/playing_without_the_puck.md`, `hockey-iq/risk_management.md`,
  `systems/defensive_zone_coverage.md`, `systems/breakouts.md`, `foundation/rules_primer.md`.
- **4 + 13 = 17. Every staged content file has a safety review.**

⚠️ **The coverage table above said otherwise for two of them until this was written** — it credited
`winger.md` and `switching_positions.md` to an author census alone, because it was written BEFORE the
post-block safety pass ran and nobody updated it. **A gate blocked on that row, correctly, and the fix
was to correct the record rather than to run a review that had already happened.**

The defect swept: a negation followed by a separator that is NOT
a full stop — em dash, semicolon, colon, comma-series — lets the negation carry onto the tail, so
*"Never do X; do Y"* is heard as *"never do Y"*. Every repair ends the prohibition with a full stop and
starts the positive fresh, or moves the negation last.

## The criterion, and the fact that it was sharpened THREE TIMES mid-round

1. **"Repair when the tail is an instruction."** Too blunt: three defects were found after the census
   using it had "finished".
2. **The main-clause test** — *repair when the negation is a MAIN-CLAUSE negation immediately before the
   separator; leave it when it is inside a relative or subordinate clause, behind a MATCHED PAIR of
   parenthetical dashes, or resolved by an intervening "so" or "but"*. Sharper **and cheaper**: it cut a
   370-sentence read to 26, and found the one the blunt bar let through.
3. ⚠️ **"Ask what the inverted reading actually SAYS, not just whether one is available."** The final
   and most transferable: *"Note what has not changed: feet wide and moving…"* is structurally identical
   to a Critical and is **safe**, because carrying the negation forward yields the SAME instruction.

## Who did it and who reviewed it

**Authors:** five agents, on disjoint file sets. **Reviewer:** a `safety-reviewer`, post-block, which
rendered all 13 in-scope documents through `build_ssml` **at HEAD and at the working tree and word-diffed
them** — 237 spoken deltas, every one read. ⚠️ **That method is the standard this round establishes: a
diff of the SPOKEN text gives the complete set of changes rather than a sample.**

## What the review found

- **The sweep repaired real inversions.** The most dangerous one it fixed is `mental_game.md:688`, which
  at HEAD told a listener **never** to keep their head up and out of the shot lane, in a Key Takeaway.
- ⚠️⚠️ **BUT IT INTRODUCED TWO REGRESSIONS, AND AN EARLIER VERSION OF THIS RECORD SAID IT "INTRODUCED
  NONE".** A commit gate measured HEAD-versus-index and found both. Both were in the spoken safety layer,
  both were **195 characters at HEAD**, and both were paid for out of the 200-character cap while buying
  room for a negation repair:

  | site | what was lost | why |
  |---|---|---|
  | `content/systems/offensive_zone_play.md:806` | **the object** — *"Angle **the winger** into the boards"* became *"Angle into the boards"* | room for `never the middle` → `rather than the middle` |
  | `content/positions/defender.md:117` | **the source's modality** — *"could inflict"* became *"can cause"* | room for the safety component `head up,` |

  ⚠️ **The first is the worse one: voiced alone, *"Angle into the boards"* is the one clause in this sweep
  a listener could take as being about THEIR OWN BODY going into the boards** — the opposite of the
  corpus's boards teaching, in a section about contact at the wall. Both repaired, and **both recovered
  the characters from connectives** (`steps, and where` → `steps; where`; `, and even` → `; even`)
  **rather than from any hedge.**

⚠️⚠️ **AND THIS IS THE ROUND'S SHARPEST METHOD FINDING, NOT A FOOTNOTE.** This record calls the
HEAD-versus-tree spoken-delta word-diff *"the standard this round establishes… the complete set of
changes rather than a sample."* **Both regressions were INSIDE that delta set and survived it.** They
were caught later, by a gate reading the values cold, one at a time. **So a complete delta set is not a
complete review.** A diff tells you what changed; it does not tell you what the changed thing now means
heard alone — and a reviewer holding the before-and-after side by side is the reader least able to
notice that the after, on its own, says something else. ⚠️ **The concurrent session reached the same
conclusion from the opposite direction and put it more plainly: eleven of its round's defects were found
by reading a whole passage end to end, and NONE by a diff.**
- **One MAJOR:** `skating.md:577` stated a mechanism bare — *"a tucked chin straightens the cervical
  spine"* — where **"straightens the spine" reads as a BENEFIT** and nothing said what it does. **A
  listener could take it as a reason to tuck**, which is the injury mechanism the section exists to
  prevent. ⚠️ **Propagated, not fabricated** (`sources/huh.txt:214-216`); the defect was truncation.
  Every one of the corpus's five other statements of it attaches the harm; this was the only bare one,
  and `skating.md` contradicted itself between `:110` and `:577`. Repaired.
- **One MINOR fixed, one judged harmless, and ONE DECLINED** — the declining is the part worth keeping.

## ⚠️ THE REFUSAL, AND WHY IT WAS RIGHT

The brief asked for a league qualifier to be moved back onto an instruction at
`body_contact_and_battles.md:1067` / `defender.md:248`. **The agent refused, and gave two reasons that
the brief's author had not considered:**

1. **It would put a permission gate on a half the documents say has none.** Both owners state, in bold:
   *"The walk-out … needs a checking league. **The direction you take them does not, and this half
   applies wherever you play.**"* The value's *"whatever your league lets you do to them"* is doing
   **broadening** work the body requires; the proposed *"where your league lets you"* converts that into
   a condition.
2. **The old wording had a referential defect the sweep had fixed** — *"that path"*'s nearest antecedent
   was *"toward the corner"*, so the hazard read as attaching to the RECOMMENDED direction.

⚠️ **A brief that asks for a caveat to be tightened can be asking for a claim to be narrowed. Those are
not the same thing, and only reading the owning document tells them apart.**

## What this section still does not claim

⚠️ **No file in this round received a full document review, and that is a SCOPE, not an oversight — but
it is a real limit and it is stated rather than implied.** The sweep was reviewed on the dimension it
changed: rendered speech, HEAD-versus-tree, every delta. **A hazard the sweep left untouched, in a
section whose heading does not advertise it, would have passed every reader this round** — the reviewer
said so itself, and its entry point was `git diff`.

---

# ⚠️ A RELAYED FIGURE I ACCEPTED WITHOUT MEASURING — INSIDE THE PASSAGE ABOUT NOT DOING THAT

The fourth commit-gate run reported that two facts values repaired for safety reasons were **1 and 2
characters** from failing `check_facts.py`, against the 8 and 9 the coordinator had stated, and
explained the discrepancy as the coordinator counting the whole line rather than the value after the
label. ⚠️ **I wrote that into this record as fact, and composed a paragraph around it about how "a
character count relayed without the measuring rule is not a measurement."**

**Then I measured it, using `check_facts.py`'s own `FACT_RE`, `MAX_LEN` and `QUALIFIED`:**

| value | gate said | measured with the checker's own regex | cap | headroom |
|---|---|---|---|---|
| `content/positions/center.md:400` `Never:` | 199 / **1** | **192** | 200 | **8** |
| `content/technique/skating.md:577` `Key:` | 198 / **2** | **191** | 200 | **9** |

⚠️ **THE GATE WAS WRONG AND THE ORIGINAL FIGURES WERE RIGHT** — independently confirmed by the fifth
gate run, measuring with the same code. `FACT_RE` is `^([A-Z][A-Za-z ]*?):\s+(.+)$` and the checker
compares `len(m.group(2))` — the value after the label and its whitespace, which is what the original
count did.

⚠️ **AND MY EXPLANATION OF THE GATE'S ERROR WAS ITSELF ONLY HALF RIGHT, which the fifth run caught.**
I wrote that it had counted the whole line. **That fits ONE row and not the other:** `center.md:400`'s
whole line is **199**, exactly the gate's figure — but `skating.md:577`'s whole line is **196**, and the
gate said 198. **So 198 matches neither the value nor the line, and no single explanation covers both.**
⚠️ **A plausible account of someone else's error is not a measurement either.** Where the second figure
came from is unknown and is left unknown here rather than guessed at.

**The transferable part is not the number.** It is that **a figure arriving from a REVIEWER carries no
more authority than a figure arriving from a plan row**, and this round had already recorded that lesson
twice — once when a relayed rule number reached content and a commit, and once as standing guidance that
*"a citation copied out of an agent's report is exactly as unverified as a figure copied out of a plan
row."* ⚠️ **I then relayed the gate's correction of my own figure, unmeasured, into the permanent record
— while writing the paragraph warning against it.** It survived about four minutes.

**Both values are comfortable, not tight.** Nothing needs splitting. ⚠️ **But the underlying caution
still stands and is worth keeping for its own sake:** both were repaired for SAFETY reasons — a restored
modality at `center.md:400`, a restored injury consequence at `skating.md:577` — so an editor who later
needs room in either will be tempted to buy it from the thing that was just put back. **Do not. Split
the value or split the section.**

## One thing the fourth gate got right that I had wrong

My brief for it asserted the content-sweep write-up was *"NOT YET ADDRESSED"* and asked it to judge
whether that blocked. **It was already on disk** — I had written it while the gate was running. The gate
said so plainly: *"had I trusted that I would have blocked on something already done."*

⚠️ **That is the fifth wrong premise this coordinator put into a brief in one round, and the first that
would have caused a FALSE BLOCK rather than a false pass.** Every other one risked letting something
through. **A brief describing the state of the work goes stale the moment the coordinator does more
work — which is continuously.**

---

# DIMENSIONS — C3 asks that every one be checked or DECLARED OUT OF SCOPE. Silence is the failure mode.

⚠️ **A commit gate blocked because this record had a per-file coverage table and never mapped to
D1–D15.** A table of who read what is not the same as a statement of which dimensions were exercised.

| | dimension | this round |
|---|---|---|
| D1–D3 | rules claims, exceptions, cross-book divergence | ✓ `rules-verifier` ×2 (32 rulebook-absence claims; the uncommitted diff), plus every gate re-deriving from primary text |
| D4 | citations, provenance | ✓ `source-verifier` (11 web/journal absence claims, 25 URLs, an 80-PMID retraction sweep) |
| D5 | cardinal rule, summary layer, numeric ownership, negative existence | ✓ `content-reviewer` census + `rules-verifier` + `source-verifier` |
| D6 | the ` ```facts ` layer and its omissions | ✓ throughout; the layer test is what found most of this round |
| D7 | safety | ✓ `safety-reviewer` ×3 (the uncommitted diff; the migrated material; the 13-document sweep) |
| D8 | a figure shedding its owner's qualification | ⚠️ ✓ **and this round produced SIX of them, all in the coordinator's own briefs** — see below |
| D9 | diagrams | ✓ `diagram-reviewer` + a three-pass caption census over all 33 modules |
| D10 | the rendered site | ✓ `site-reviewer` ×2, real Chrome, eight viewport/theme cells |
| D11 | propagation across layers | ✓ layer tests throughout; two criticals were propagation failures |
| D12 | the commit gate | ✓ six runs, five of them BLOCK |
| **D13** | **folklore** | ⚠️ **NOT CHECKED. Declared out of scope.** No agent this round was tasked with folklore, and none reported any. **The round was scoped to a punctuation-and-prosody defect class, the caption layer, and the audio pipeline; folklore was not in any brief.** |
| **D14** | **structure and terminology** | ⚠️ **NOT CHECKED. Declared out of scope**, with one exception: `check_tables.py` and `check_chunk_splits.py` were run and read. **No terminology convergence pass ran, and the round changed no headings or section structure except two deliberate splits, both reviewed.** |
| D15 | what the method could not find | ✓ every report ends with it; four handovers closed, the rest are plan rows |

⚠️ **D13 and D14 are declared out of scope rather than claimed. That is the point of the row.**

# ⚠️ D8 IN THE COORDINATOR'S OWN BRIEFS — SIX TIMES IN ONE ROUND

The dimension about a figure shedding its owner's qualification. **Every instance below is the
dispatcher's, not an agent's, and agents caught five of the six by refuting the brief:**

1. **A relayed rule number.** *"Rule 403"* from an agent's report, un-re-derived, propagated to nine
   sites and **pushed to production** by a concurrent session. The quoted text is **404(b)**.
2. **A precision asymmetry asserted backwards** — *"bring goaltender.md up to defender.md's precision"*
   when `604(e)` appeared once in `defender.md`, already correct, and not at all in `goaltender.md`.
3. **Two sets of wrong line numbers**, corrected by the agents that opened the files.
4. **A stale state claim** — a brief told a gate the sweep write-up was *"NOT YET ADDRESSED"* when it was
   already on disk. ⚠️ **The first that would have caused a FALSE BLOCK rather than a false pass.**
5. **A relayed character count**, accepted from a gate without measuring, written into this record —
   *inside the paragraph warning against relayed figures.* The gate was wrong; the original was right.
6. ⚠️ **An overstatement of the very defect class the brief described.** It said *"can break your neck"*
   is something *"neither USA Hockey source says"*. `sources/huh.txt:221-223` describes the mechanism
   producing *"a fracture or break of one **of** more vertebrae"* (the extraction's own wording) — **so it is a paraphrase IN KIND, and the
   genuinely firmed half was the modality and scope, not the severity.** ⚠️ **The plan row got this
   right and the brief dropped its qualification in transit** — which is D8 exactly, in the round that
   documented the other five.

⚠️ **THE PATTERN: "refute the brief" is aimed at agents, and it worked — five of six were caught. The
dispatcher is the unreviewed link, and nothing in the loop points that instruction at itself.**

# Two values now at exactly 200/200 characters

`content/positions/defender.md:117` and `content/systems/offensive_zone_play.md:806`, **both up from 195
at HEAD.** ⚠️ **Both were repaired to restore something safety-bearing — a source's modality and a
sentence's object — so an editor who later needs room in either will be tempted to buy it from the thing
that was just put back.** Do not. Split the value or split the section. ⚠️ **And note for
`offensive_zone_play.md:806` the style guide's remedy is structurally unavailable: that block is at
`HARD_MAX = 11`.** Elsewhere the binding cap was `MAX_COACHING_FACTS = 8` — `check_facts.py` tests the
coaching cap FIRST, which is worth knowing before planning a split.

---

# ✅ C6 DISCHARGED on the last two unreviewed lines — and the review upheld them

`switching_positions.md:125` and `:142` were changed after every reviewer pass, on an author's own
finding rather than a reviewer's, so C11's terminating rule did not cover them. A `safety-reviewer` read
them at their current content. ⚠️ **A gate had already re-derived them and found them faithful — but a
gate cannot discharge C6, and these are spinal-injury values in a collision-sport corpus.**

**No Critical. No Major.** Stated plainly because a clean result is a real outcome: the reviewer tried to
break both lines and could not.

**What it verified rather than assumed:** both source quotations located this session — `ibc.txt:1570-1571`
AND `huh.txt:720-721` **both** carry *"Even a light hit from behind could inflict a severe head or neck
injury"*, so the trailer's claim on both books is correct; `:142`'s re-attachment of the walking-speed
figure to the **injury** is faithful to `huh.txt:228`'s antecedent and agrees with the trailer, Common
Mistakes, the Key Takeaway and the owner; both mechanisms remain distinct, so the merge
`on_ice_communication.md:626` warns against has not happened; the four-component technique tail agrees
with `body_contact_and_battles.md` §6; and **no negation reaches the tail** — confirmed against the
actual render, where `Never:` emits as *"Never —"* but the following clause is a finite declarative and
the tail sits behind a full stop, two independent breaks.

⚠️ **AND IT OVERTURNED THIS ROUND'S OWN PLAN ROW IN THE CORPUS'S FAVOUR.** `huh.txt:221-223` reads
*"resulting in a fracture or break of one of more vertebrae. And if one breaks, it can cause compression
of the spinal cord, resulting in paralysis"* — **so `winger.md:16`, `:94` and `:364`'s *"can break your
neck"* is a paraphrase IN KIND and those three are SOUND.** ⚠️ **Sweeping them on the strength of this
round's original framing would have been the round-59 direction-of-travel failure: making the corpus look
LESS supported than it is.** The plan row is corrected; its remaining scope is four unread sites, and the
expectation recorded there is that they too will be sound.

**One Minor stands and is a plan row:** `:125` is the only one of the corpus's fourteen `walking speed`
lines to use a **gapped predicate**, and the only carrier to drop the source's a-fortiori clause. ⚠️ **It
does not fit — 196 of 200 characters, in a block at 8 of 8 coaching facts — so it cannot be split, and
every one of seventeen measured rewrites that resolves the gap either overruns or drops *"chin off your
chest"*.** That is a finding about the section, not the sentence.

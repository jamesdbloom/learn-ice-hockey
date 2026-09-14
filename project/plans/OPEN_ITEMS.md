# What is open

**Consolidated 11 September 2026**, from a file that had reached 17,485 lines and was ruled *"too long to be
useful"*. Everything before that date is preserved verbatim in
[`plan_archive_2026-09-11_pre_consolidation.md`](../reviews/plan_archive_2026-09-11_pre_consolidation.md);
this file carries **only what is still to do, and the guidance for doing it.**

⚠️ **Keep it this length.** A plan nobody reads is not a plan. When a row closes, move it to a review record
in the same commit as the work — ⚠️ **a row staged beside its own repair is a false claim**, and that shipped
into the gate twice on 11 September.

---

# The two owner priorities

**Set by the owner, above everything below.** They are related: the biggest undrawn sections are the most
rules-dense ones, because rule detail is not drawable.

## ⚠️ OWNER INSTRUCTIONS GIVEN 12 SEPTEMBER — record these in their owning documents

**Three standing rules, given directly. They are written here first because an agent was reading
`content_style_guide.md` when they arrived; fold each into its owner and then delete it from this
section.**

| | |
|---|---|
| ⬜ | **A RENAME ALWAYS GETS A REDIRECT.** No page moves without one. `site/astro.config.mjs` holds the map — `/reading-diagrams/` → `/foundation/` is the worked example. ⚠️ **Static output emits a meta-refresh, not a 301**, which is recorded beside it. **Owner: `CLAUDE.md`.** ⚠️ **And a rename costs more than the redirect** — a filename change breaks every path-based inbound link (96 of them for `rink_map_and_glossary.md`) and changes the podcast GUID, which is `learn-ice-hockey:${doc_id}` with **no override field**, so subscribers lose an already-published episode. |
| ⬜ | **SHADED AREAS, NOT DOTS, WHERE A DIAGRAM MEANS AN AREA — unless the areas OVERLAP**, because shading two overlapping regions makes neither readable. The `zones` primitive is the mechanism. ⚠️ **`check_zones.py` compares diagrams to each other and cannot see a region drawn consistently wrong everywhere; only `rink_map_and_glossary.md` settles what a region is.** **Owner: the style guide's notation section.** |
| ⬜ | ⚠️⚠️ **ON THE POSITIONS PAGES, A DIAGRAM GOES AT THE END OF ITS SECTION, NOT THE HEAD — and this REVERSES `content_style_guide.md:1417` for those pages.** The guide currently records the owner's instruction as *"diagrams should be at the start of sections"*, on the reasoning that a diagram arriving after the prose it explains arrives too late. ⚠️ **That reasoning does not apply here and the owner's new instruction is a different case, not a contradiction:** these sections are named by zone-and-situation — a job — while the caption draws one instant inside it, so the picture arriving first asserts that instant IS the job. Measured on `center.md`: the section heading names a zone-and-situation while the caption for `centre-out-of-the-middle` draws one instant inside it — two opponents closing through the middle. **The guide must record the exception with its reason, or it becomes false.** Current state: **252 markers before a facts block, 2 after.** |

### ⚠️⚠️ A CONCURRENT-BUILD RACE THAT PRODUCES A WRONG IMAGE UNDER A RIGHT FILENAME — 12 September

**`site/scripts/build-diagrams.mjs`'s `rasterJob()` uses ONE fixed temp path for every diagram in every
process:**

```js
const html = join(OUT_DIR, '.raster.html');   // site/public/diagrams/.raster.html
```

`rasterise()` writes it, launches Chrome against it, then `rmSync`s it. ⚠️ **With two builds running,
process A can overwrite `.raster.html` between B's write and B's Chrome read — and `Y.png` then contains
a picture of X. Exit 0. No warning.** The `rmSync` also allows a missing-file failure, which would at
least be loud; **the silent wrong-content case is the one that ships.**

**Found by the agent redrawing the rink map, which measured three concurrent processes at 07:01:53 and
stopped rather than trusting its own output.** ⚠️ **It predates the raster cache** — the cache only makes
concurrent builds cheap enough that people run them.

⚠️ **The overlap was the COORDINATOR'S fault: two agents were dispatched with instructions to run this
build, and a third was added later, with nothing serialising them.** CLAUDE.md's shared-tool rule was
followed for the *edit* and not for the *execution*, which is a gap the rule does not currently name.

| | |
|---|---|
| ⬜ | **Per-process unique temp name** (`.raster.<pid>.<n>.html` or `mkdtemp`) — assigned to the agent already in that function. |
| ⬜ | **Decide whether the script should refuse to run concurrently at all** — a lockfile in `OUT_DIR` that exits with a clear message. A unique temp name fixes the corruption; two builds writing the same PNGs is still wasteful and still confusing to debug. |
| ⬜ | ⚠️ **NOTHING IN `site/public/diagrams/*.png` WRITTEN BETWEEN 06:53 AND 07:03 CAN BE SHOWN TO BE CORRECT**, including runs by agents who did nothing wrong. **A single clean rebuild is a complete fix, because the SVGs are pure and the PNGs derive from them** — and that is the one thing that makes this recoverable rather than an audit. |
| ⬜ | ⚠️ **Extend CLAUDE.md's shared-tool rule to EXECUTION, not just modification.** *"Change a tool between waves, not during one"* says nothing about two agents RUNNING the same tool concurrently, which is what happened here and what produced an unverifiable output directory. |

### ⚠️⚠️ THE NEW PAGE IS UNTRACKED AND WILL BE SILENTLY SKIPPED AT STAGING

`content/foundation/language_and_glossary.md` shows `??` and **zero commits have ever added it**. It is
not gitignored — it simply is not in the record. ⚠️ **`git add -A` is forbidden in this repository, so
a file that nobody names explicitly is silently left behind**, and every checker that reads the working
tree will keep passing on it. **Name it at staging.** *(Found by the repair agent, which also could not
diff its work against HEAD for this reason and diffed before/after renders instead.)*

### ⚠️ M1, M3 and M4 are CORPUS-WIDE, not page-local — the new page only made them visible

| | |
|---|---|
| ⬜ | ⚠️ **`defender.md:39` states the goalmouth split FLAT in a `facts` block** — *"Strong-side plays the puck, weak-side holds the goalmouth — job titles, not descriptions"* — **voiced alone**, with the hedge at `:41`, the NEXT line, **which a listener hears as a separate utterance.** Also flat at `rink_map_and_glossary.md:458` and `defender.md:47`. |
| ⬜ | **The positional lane definition is carried verbatim and unhedged** at `winger.md:42` and `switching_positions.md:133`. `puck_support_and_spacing.md:428` is the owner and gives it the full coaching-choice treatment. |
| ⬜ | **`winger.md:49` states *"is your defensive-zone job description"* flat** — the low-zone-collapse job presented as the winger's job. |
| ⬜ | ⚠️⚠️ **THREE REGIONS CLAIM ONE SUPERLATIVE, AND TWO DOCUMENTS DIRECTLY CONTRADICT EACH OTHER.** *"The most dangerous ice on the rink"* is said of **the slot** in `shooting.md:26`, `special_teams.md:94`, `goaltender.md`, `faceoffs.md`; of **home plate** in `breakouts.md:47`; and `defensive_zone_coverage.md:185` says flatly ***"It is NOT the most dangerous ice on the rink — that is the inner slot."*** ⚠️ **`rink_map_and_glossary.md:808` declines to rank at all, and it owns regions.** The repaired Language page now carries all three senses and declines to rank — **the other six sites do not.** |

### ⚠️ Referred by the end-zone orientation fix, 12 September

| | |
|---|---|
| ⬜ | ⚠️ **`switching_positions.mjs:432` and `:503` carry the SAME wrong premise, in `describe`.** `forcing-them-outside` and `getting-beaten-wide` are both `half: true` (`viewBox="-2 -44.5 104 89"`, red centre line present at x 0 — verified in the built SVG) and both open *"The defending half of the rink, your own net at the right, **your blue line at the left**."* **The blue line is 26% in.** The file's own header at `:82` is correct. ⚠️ **Rated lower severity than the map case** — these are tactical pictures whose `describe` gives a direction of play rather than orienting a map, and it is the only blue line in frame — **but it is reader-facing and it is the same false premise.** Owner's call. |
| ⬜ | **Two `half: true` maps in one document now describe the same frame under two different names.** §5's calls itself *"a close-up of one end zone"*; §2's new one calls itself *"One half of the sheet"*. ⚠️ **A quarter of that frame is neutral zone and three of its overlay labels name neutral-zone places** (`centre-ice`, `neutral-zone-mid`, `neutral-dot`). Both captions are now honest about it; **which framing is right was surfaced and NOT settled.** |
| ⬜ | **Only ONE phrasing family was swept.** The fix checked for *a blue line placed at a frame edge* across all 31 diagram modules. ⚠️ **The other 153 `half: true` diagrams were NOT checked for some OTHER claim the −2…102 frame does not support** — e.g. implying the far blue line or the far net is in shot when both are clipped. |

### ✅ The raster cache is verified — and how to tell it is still working

**Warm build: 494–510 s → 0–1 s.** Verified against a control nobody asked for and everybody needed:
**two old-code builds, byte-identical across all 406 artefacts**, proving Chrome is deterministic run
to run — without which a byte comparison proves nothing. Then cold-cache-new-code byte-identical to
that baseline; one spec change rendering **exactly one** diagram; and a from-scratch run with no output
directory byte-identical again.

⚠️ **V4, the test that catches stale images shipping silently, passed in a MORE informative way than
predicted.** A palette change was expected to invalidate all 203. It invalidated 185 and reused 18 —
**and the 18 were accounted for three independent ways**: 18 baseline SVGs contain no `#5b5f66`, and
406 − 370 = 36 = 2 × 18 artefacts unchanged (each one's SVG *and* its PNG). They are diagrams with no
text label in that colour. ⚠️ **The key invalidated every diagram whose pixels COULD differ and skipped
only those that provably could not — a blunter key (an mtime on `rink.mjs`) would have "passed" this
test while being wrong elsewhere.**

⚠️⚠️ **HOW TO TELL THE CACHE IS WORKING RATHER THAN BROKEN, because "it ran fast" is not always
available:** the final line now reports it —
`[PNG cache: 203 reused, 0 rendered]`. **`0 reused` on a second consecutive run with no source edit
means the cache is BROKEN, not cold.** That was the shipped state for a while and was invisible.
`[PNG cache off: all rendered]` means Chrome would not report `--version`.

**Still open on it:** the key does not capture **system fonts** (`-apple-system, Helvetica Neue, Arial`),
so a font install or OS upgrade is invisible — `--no-cache` is the documented remedy and **was never
exercised**. The Chrome-identity ingredient was tested only with a **stub** browser, so "a genuine
browser upgrade invalidates everything" is **reasoned, not measured**. And the lock protects only
processes running this script.

⚠️ **The stale-lock path was exercised for real**, not theorised: a `.build.lock` held by dead pid
95207 plus two orphaned wrappers from builds killed at 07:35 and 07:39. **That is also the direct
evidence for the no-signal-handler decision — a hard kill does leave both behind, and the stale-pid
takeover is what recovers.**

### ⚠️⚠️ TWO TRAPS FOUND BUILDING THE RASTER CACHE, 12 September — both are general, neither was written down

**1. A CACHE THAT NEVER HITS LOOKS EXACTLY LIKE A CACHE THAT WORKS.** Adding a per-process wrapper
name put the **pid inside the hashed argv**, so every key was unique per run and the cache **hit zero
times** — while the build ran normally, exited 0, and reported success. ⚠️ **Caught only because the
agent ran a warm build and READ THE NUMBER.** This is the project's signature failure shape — a speed
feature that appears to work and does nothing — arriving in a new place. **A future reader needs a way
to check the cache is actually hitting that does not rely on "it felt fast".**

**2. ⚠️⚠️ LITERAL NUL BYTES IN A SOURCE FILE MAKE `grep` SILENTLY RETURN NOTHING FOR EVERY PATTERN.**
An edit wrote real NULs where `\u0000` escapes were intended. Runtime behaviour was identical, `git
diff` still worked (the NULs were past the first 8 KB), **and grep found nothing for anything** — which
is how trap 1 survived several tool calls. ⚠️ **A false-absence grep is indistinguishable from "the
string is not there", and this corpus has a recorded history of taking exactly that as evidence.**
**The tell is `file` reporting `data` instead of text.** NULs inside the first 8 KB would additionally
make `git diff` treat the source as binary.

| | |
|---|---|
| ⬜ | **Write both traps into their owning documents** — trap 2 belongs wherever the project's grep and false-absence guidance lives, alongside the line-wrap and image-only-PDF cases. |
| ⬜ | **`CLAUDE.md:372` says `build-diagrams.mjs` takes "(~6 min)". Measured cold: 8 m 21 s to 8 m 58 s.** ⚠️ **Replace with a pointer, not a new figure** — this is the fifth copied number to go stale in this project. |
| ⬜ | ⚠️ **The cache key does NOT capture system fonts.** The SVGs use `-apple-system, Helvetica Neue, Arial, sans-serif`, so **a font install or an OS upgrade is invisible to it** and would serve stale rasters indefinitely. Documented in the file with `--no-cache` as the remedy, **but never exercised.** |
| ⬜ | **The lock protects only processes running `build-diagrams.mjs`.** Anything else writing `site/public/diagrams/` is unaffected by it. |

**Measured, for the record: SVG generation for the whole registry is 0.68 s; a full cold build is
~9 minutes. Rasterising is ~99.9% of it**, and `build:diagrams` is step 4 of the eleven-step
`npm run build`, so it was paid on every build.

### ⚠️⚠️ THE FINAL REBUILD MUST USE `--no-cache`, AND THIS IS THE ONE THING NOT TO FORGET

**The rink-map agent's clean run reported `201 reused, 2 rendered`.** ⚠️ **Those 201 reused PNGs are
exactly the files written during the 06:53–07:03 contended window, and the cache will serve them again
for as long as their SVGs are unchanged.** A plain rebuild **will not replace them** — it will reuse
them, report success, and leave the unverifiable images in place.

**So the recovery rebuild is `node site/scripts/build-diagrams.mjs --no-cache`, run alone.** Anything
less is a rebuild that certifies the thing it was supposed to fix.

### ⚠️ Found redrawing the rink map, 12 September

| | |
|---|---|
| ⬜ | ⚠️⚠️ **A RENDERER ASYMMETRY MAKES THE VOCABULARY OVERLAY THE SMALLEST TYPE IN THE CORPUS, in the one picture a beginner is told to come back to.** `playSvg` scales text by `TXT = 1.7` on a full sheet; `rinkSvg`'s overlay is a flat `size: 2.4` and never goes through that path. Measured: **9.3 px against 24.4 px** for a zone label on a half sheet — **under 40%**. `site/scripts/lib/rink.mjs` is shared and was deliberately not touched. **Fix it there.** |
| ⬜ | ⚠️ **The phone penalty on a full-sheet diagram is NOT shrinkage — it is that 46% IS HIDDEN.** px-per-foot is nearly identical either way (**3.14** full-sheet-at-640px against **3.33** half-sheet-at-346px). But 640px inside a 346px box shows x −102 to about +8, **and every one of `rink.json`'s 19 named points has x ≥ 0 — so only `centre-ice` was visible until the reader guessed to drag.** ⚠️ **The desktop penalty is a different failure: type size, 792/204 against 792/104. One picture, two unrelated defects, and the coordinator relayed only a garbled version of the first.** |
| ⬜ | ⚠️ **"SHADED AREAS INSTEAD OF DOTS" CANNOT BE APPLIED TO A VOCABULARY MAP, and the reason is structural.** Of `rink_map_and_glossary.md` §5's named areas, the **bounded** ones — slot, high/low slot, goalmouth, home plate, crease, trapezoid, above/below the dots — **all overlap each other**, which is precisely why each already has its own solo diagram. The **unbounded** ones — the point, the half-wall, the corners, the boards, the office, the top of the circle — are given **no extent at all, deliberately**: `rink.json`'s `point` note spends a paragraph on why inventing an offset is forbidden. **So shading §5 would be half unreadable overlap and half invented geometry.** The owner's instruction stands everywhere else. |
| ⬜ | **Literal dots-for-places existed in exactly two diagrams corpus-wide** — `dot: 0.8` occurs **once** in the whole renderer (`rink.mjs:635`, `rinkSvg`'s overlay). **One is now retired; `rink-map-end-zone` is the only one left. Nothing to sweep in other modules.** |
| ⬜ | ⚠️ **`check_zones.py` cannot check the new behind-the-goal-line region at all.** It compares diagrams to each other, and that strip is **the only region in the corpus with that label or that shape** — so nothing in the repository can contradict it. **Its only check was §2's own sentence and the drawing agent's arithmetic, both written by the same agent.** 657.8 sq ft drawn against 660.7 exact by integration; 1 ft chords fall inside a convex arc, so the shading stops short of the dasher rather than spilling over. |
| ⬜ | **Captions are NOT short, measured.** Median over `diagrams.json` is **1270** (min 516, p75 1686, max 4195). ⚠️ **The coordinator has relayed "captions are short" into many briefs without ever measuring the distribution** — the useful statement is the p75, not an adjective. |

| | |
|---|---|
| ⬜ | **`zone_entries.md:609` carries the same bare-prevalence shape as the glossary's repaired *"under-use"* claim** — *"Why it's under-used"* about the chip past a stepping-up defenceman, plus *"one of the highest-value plays available"*. ⚠️ **Found while repairing the glossary's version, which turned out to be contradicted IN DIRECTION by its own named owner: `neutral_zone_systems.md:674`'s tracking work concluded NHL players give the puck up at the line *too readily, not too rarely*.** Different play, so it does not rescue the glossary claim and the glossary claim does not condemn it — **but it is unsourced and nobody has checked it.** |

### ⚠️ THE HASH-MARK DEPTH — the OWNER held the wrong value and three dependants propagated it

**Fixed across four documents on 12 September.** `rink_map.md:236` — the style guide's named owner for
hash marks — said *"below the hash marks"* means **the low half of the zone**. The geometry says
otherwise, from the owner's own cited rules: **dot 20 ft (NHL 1.9), blue line 64 ft (NHL 1.5) → 31%.**
⚠️ **Half the zone's depth is 32 ft — a full TWELVE FEET higher than the hash marks — and this is the
depth a centre acts on when told to "swing low".**

⚠️⚠️ **THE USUAL CHECK WOULD HAVE MADE IT WORSE.** `breakouts.md:34` had **independently arrived at the
correct value with both rule numbers**. So the owner was the odd one out among four documents, and
comparing each dependant to its owner — the standard propagation check — would have "corrected" the
right ones toward the wrong one.

⚠️ **And the hedge already on the line did not rescue it.** It read *"coaching observation rather than a
counted one"*, which protects the prevalence superlative *"lean on most"*, **never the geometry**. The
repair re-aimed the hedge rather than stripping it.

⚠️ **`check_geometry.py` passed identically before and after.** It asserts `rink.json` against named
POINTS; **prose describing a band between two points is invisible to it.** The arithmetic was done by
hand against the rulebook.

| | |
|---|---|
| ⬜ | ⚠️ **Nobody has verified the USAGE, only the geometry.** Whether a coach saying *"swing low"* means the 20 ft line or the top of the circles (15 ft radius → 35 ft, which IS above halfway) is unsettled — and `defensive_zone_coverage.md:297` says in terms that *"the line varies by a few feet"* between teams. **If coaching usage is looser than the paint, the landmark is softer than all four documents now say, and no source on disk settles it.** |
| ⬜ | **The census was five phrases** — `low half`, `high half`, `bottom third`, `below the hash`, `above the hash`. ⚠️ **A document stating the same depth in OTHER words — *"half the distance to the blue line"*, *"level with the tops of the circles"* — would not have matched**, and no layer test was run over the other 36 documents' facts blocks. |

### ⚠️⚠️ THE CONSOLIDATION HAS A COST THAT ONLY REACHES PODCAST LISTENERS

**The site renders links. The audio does not.**

**Eight** documents lost their `## A Note on Language` section to
`content/foundation/language_and_glossary.md`. A **reader** follows the pointer in one click. ⚠️ **A
LISTENER who starts at episode "Defender" now hears a pointer to two other documents where they
previously heard the definitions** — and a podcast listener cannot click, cannot look a word up, and
very often is not listening in reading order.

⚠️ **No checker models this.** `check_pointers.py` finds a spoken sentence pointing at a layer the
listener never hears — **a pointer to another DOCUMENT is not that**, and it passes.

| | |
|---|---|
| ⬜ | **Decide what a listener gets.** Options, none free: each document keeps a short spoken gloss of the three or four terms *it* leans on hardest; or the Language and Glossary episode is placed early in the feed and each document's opening says so in words; or the cost is accepted and recorded. ⚠️ **The consolidation was right for the page and this is the half it did not fix.** |
| ⬜ | **`rules_primer.md` may want the `63.2(vi)` citation.** It states the substance at `:713` — *"Coming out to cut down the angle, making the save and then covering the puck is legal"* — **without the citation.** The cite was the only occurrence in `defender.md` and left with the condensation; it is owned by `goaltender.md:399`, `:417`, `:663`. **Nothing left the corpus; the owner just does not carry the number.** |
| ⬜ | ⚠️ **`defender.md`'s rim/reverse definition could not be preserved in the facts layer** — `check_facts.py` rejected it at *"9 non-rule facts, over 8"*. The agent **reverted rather than restructure the section**, on the ground that the `Read:` fact above it carries the operative content and the body defines both inline. **A judgement flagged rather than buried; somebody should agree with it or restructure.** |

### ⚠️ Open after the goalkeeper Critical was repaired, 12 September

| | |
|---|---|
| ⬜ | ⚠️⚠️ **THE HYBRID-ICING ADOPTION DATES ARE UNSUPPORTABLE AND SIT IN SIX DOCUMENTS.** *"The NHL (from 2013-14) and the IIHF (from 2014)"* has **no support on disk**: `hybrid` returns **zero** in both NHL extractions and all three IIHF editions — it is Hockey Canada's and USA Hockey's word — and the only four-digit year in `nhl_rules.txt` is Rule 9.7's visor date. ⚠️ **Six sites: `rules_primer.md:305` and `:852`, `time_and_space.md:432` and `:447`, `game_management.md:174`, `language_and_glossary.md:295`.** ⚠️⚠️ **`time_and_space.md:432` is the worst of the six: it carries the dates in a `Rule:` line INSIDE a ` ```facts ` block — voiced ALONE with a 300 ms break either side. That is strictly worse than a trailer hedge nobody hears, because the listener gets the bare dates as a stated rule.** `rules_primer.md` owns icing. ⚠️ **Hedging one of six manufactures the divergence round 44 records — fix all six or none.** Unconfirmed is not contradicted: **label or source, do not delete.** |
| ✅ | ~~`defensive_zone_coverage.md:23` disagrees with two repaired files~~ — ⚠️ **RETRACTED. The row was a CONFLATION of two distinct senses and acting on it would have made the corpus worse.** The repair changed an **attacker's positioning instruction** (*"live at the edge of the paint"* → *"just outside"*), because **Rule 69 governs the attacking player**. `defensive_zone_coverage.md:23` is a **locational description of the goalmouth** — *"the edge of the painted crease, where the player who scores is standing"* — describing a **defender covering an opponent at his OWN net**, who commits no interference. **Different party, different zone, different rule.** The same locational sense sits unchanged at `language_and_glossary.md:84`, `rink_map.md:342`, `shooting.md:28` and `goaltender.md:514`. ⚠️ **Caught by `commit-gate`; per G1a a row that has misdirected once will misdirect again, so it is retracted rather than left open.** |
| ⬜ | **The two foundation Sources trailers have diverged.** Each gained different quotations for the same rules, because each file carries different passages. **Nothing checks that two trailers describing the same books agree**, and they were not diffed against each other. |
| ⬜ | ⚠️ **USA Hockey's goalkeeper areas NEST, and the a-fortiori reading was asserted without a Situation that states it.** The 607(d)/607(c) interaction **outside the privileged area but inside the crease** is carried in two summary layers on reasoning, not on a quoted source. |
| ⬜ | **USA Hockey Casebook Situation 41 carries a phantom cross-reference to `630(d.3)`.** Recorded, not repaired. |
| ⬜ | ⚠️ **`podcast.json` was left HALF-MIGRATED by the rename and the site published two different audio URLs for one document.** The page built its `<audio src>` from the **collection id** while the feed, the m3u playlists and the downloads page built theirs from the manifest's `audio` field — and **38 pages rendered a player against 37 episodes**, so the newest document offered a control that could never play. ⚠️ **`check-links.mjs:205` skips every `/audio/` href on purpose and says so: *"the failure mode is not a typo, it is a STALE podcast.json"*.** Fixed at the source: `AudioPlayer` now takes its URL from the manifest and the page renders no player where no episode exists. **The remaining question is the owner's: whether the encoded file is re-uploaded under the new name, and whether `language_and_glossary` gets an episode.** |

### ⚠️ Handed on by `content-reviewer`, 12 September — defects OUTSIDE the page it reviewed

| | |
|---|---|
| ⬜ | ⚠️⚠️ **`check_disclosures.py` RETURNED ZERO HITS ON A 5,047-WORD PAGE — and that was the symptom, not a pass.** The page carried at least six unsourced prevalence claims (*"the name is universal"*, *"most of the dangerous passes"*, *"the commonest way a centre collapses"*). It scored clean **because consolidation dropped the labels its siblings carry**, not because the claims were sourced. ⚠️ **A tool that finds absence-of-evidence claims cannot find an absence-of-evidence claim whose label has been removed.** Every consolidation, merge or compression is a place this can happen silently. |
| ⬜ | **The flat *"the weak-side defenceman holds the goalmouth"* exists in two more places** — `rink_map_and_glossary.md:458` and `defender.md:47` — with nothing nearby to contradict them. ⚠️ **It was only visible on the new page because that page withdraws it forty lines later.** `defender.md:39`'s facts line DOES hedge it (*"that split is a coaching choice"*); its body does not. **A census, not a fix.** |
| ⬜ | ⚠️ **Which region owns *"the most dangerous ice on the rink"* is unsettled across four documents.** `shooting.md:26` and `special_teams.md:94` say **the slot** (shooting with a scope clause); `breakouts.md:47` says **the home-plate area**, *"a different shape from the slot, and a wider one"*. **`rink_map_and_glossary.md` owns regions and is the only document that can settle it** — and `:336` already warns *"treat 'highest-percentage ice' as the shape those figures agree on rather than as a measured ranking."* |
| ⬜ | ⚠️ **HIGHEST-VALUE UNVERIFIED CLAIM, and it is now in a summary layer.** `rink_map_and_glossary.md:677` says the two senses of "stay high" are *"two different things about twenty feet apart"*. **Nobody has checked the 20 ft.** Both senses sit near the blue line by the prose, and the figure does not obviously fall out of the geometry. ⚠️ **It has now propagated to `language_and_glossary.md:40` and `:313` — the second of which is Common Mistakes, voiced ALONE.** Measure it or label it. |
| ✅ | **CLOSED 12 Sep — fixed in the removal step, verified 0 stale refs in the staged file.** **`center.md:362` carried a prose reference — *"(see 'A Note on Language')"* — that will DANGLE when the nine sections are removed.** ⚠️ **`check_links.py` cannot see a prose reference to a heading**, so nothing mechanical will catch it. **Censused: this is the only one in the corpus.** Fix it in the removal step. |

| ✅ | **CLOSED — verified by `commit-gate` independently and again here: `defender.md:35` and `forechecking_systems.md:35` both now carry *"closer to the blue line **you are facing**"*, the owner's qualifier.** Original: ⚠️⚠️ **REGRESSION FROM THE REMOVAL — two documents lost a definition their own spoken layer then uses.** `defender.md` no longer defines **high/low** anywhere (HEAD had it at `facts:38` AND body `:48`); its staged facts layer uses those words **15 times**. `forechecking_systems.md` lost **high/low AND strong/weak side** (HEAD `facts:36`, `:37`); **14 uses** remain. ⚠️ **`center.md` and `winger.md` had the SAME section removed and their agents moved the definition into body prose instead — so the corpus is now internally inconsistent, and no single agent could have seen it.** The replacement is a link, which a **podcast listener cannot click**. |
| ⬜ | **`goaltender.md`: five-hole and six-hole survive in the facts layer only as USAGES** — *"opens the six-hole"*, *"close the five-hole as you land"* — the defining `Key:` line was removed with the section. ⚠️ **`Key: "Back door" means an unmarked opponent at the far post` DID survive at `facts:184`**, so the highest-risk definition is intact; this row is the lesser one. With `safety-reviewer`. |
| ⬜ | ⚠️ **No checker reports a SHRINKING facts block.** This change removed **29 facts lines against 3 added** across six documents and every gate passed. `check_facts.py` validates the blocks that exist; it cannot know a block used to say more. **The only thing that found it was diffing the removed `Key:`/`Rule:`/`Never:` lines against the staged facts layer, per document.** Worth a worklist tool — it is the second time a listener-only regression has passed every gate. |

| ⬜ | **MAJOR (safety-reviewer, verified in both IIHF editions).** ⚠️⚠️ **`defender.md:31` tells a BRITISH reader the opposite of their own book — and this document's banner is addressed to them.** The sentence: *"your goalie reaching back over the line for a puck still on your own side is legal in the NHL and **two minutes in your beer league**."* ⚠️ **`defender.md:3` says *"Playing in Britain? The IIHF flags are yours — every level of UK hockey runs the IIHF book."*** Under **IIHF 27.6** (`iihf_rules_v1.1.txt:2627-2631`, identical in 2026/27) that conduct is **LEGAL**, on the NHL's own test — *"the position of the puck is the determining factor."* *"Your beer league"* is unscoped and true only under USA Hockey and Hockey Canada. ⚠️ **The harm direction is the INVERSE of the obvious one:** it does not expose the reader to a penalty — it makes them **over-restrict their goaltender** and take retrievals and red-line pucks onto their own stick that were never theirs, pushing more trips into contested ice. ⚠️ **The fix is ONE CLAUSE: the correct scoping is already two clauses earlier in the same sentence** (*"the NHL and the IIHF go on the position of the puck (NHL 27.7, IIHF 27.6)"*) — only the closing punchy clause drops the IIHF. **The corpus already has the right idiom at `goaltender.md:546` (*"the two North American amateur books"*) and at `defender.md:801`**, so `:31` is the sole outlier against its own document's Key Takeaway. **Pre-existing, not caused by the consolidation.** |
| ⬜ | ⚠️ **`defender.md:20` carries a COACHING ALLOCATION under a `Rule:` label, voiced alone** — *"USA Hockey and Hockey Canada mark no trapezoid, so the dead corner rim is your goalie's, not yours."* First half confirmed; **second half is an inference.** Under NHL/IIHF the converse IS rule-derived, because the goaltender is barred there; USA Hockey and Hockey Canada merely **permit** him to play it and **neither allocates the retrieval to anyone** — USA Hockey 610 read in full (`usah.txt:3758-3821`), Hockey Canada 10.1 in full (`hc_layout.txt:5928-5972`). ⚠️ **The body at `:31` carries the counterweight *"Find out which book your league runs"*; the facts line does not, and the facts line is what a listener hears alone.** Non-negotiable 7. |
| ⬜ | **NOT merely a nit — it COMPOUNDS the row above, and fixing either alone leaves half the problem.** The staged text reads *"the two North American books measure that bar differently"* **immediately after a sentence naming the NHL, which is also North American.** HEAD said *"both amateur books"* and was unambiguous. ⚠️ ***"The two North American books"* plus *"your beer league"* together build a frame whose only options are NHL and North-American-amateur — and the IIHF, the book `defender.md:3` tells every British reader is theirs, appears in it once, in a parenthetical.** Alone the phrase does not reach safety, because the enumeration after the colon resolves it in the same sentence. |
| ⬜ | **`defender.md:122` attributes *"while pressured"* and *"in front of the goal line"* to USA Hockey Casebook Situations 8, 10 AND 11 collectively.** Only **11** is pressure-conditioned; 8 and 10 turn on *"the act of playing goal"*; the goal-line limb is Situation **12**. ⚠️ **It UNDER-claims the permission, so it errs safe** — `confirmed-but-incomplete`, low priority, but it is a citation that does not say what its sources say. |
| ⬜ | **A carve-out the condensation shed and nothing restates:** HEAD made explicit that *"participates in the play in any manner"* carries *"(intentionally plays the puck or checks an opponent)"* as a **gloss, not a limit** — the bar reaches more than a stick on the puck. `defender.md:20`'s *"not just playing the puck"* keeps the substance; the reasoning went. Low cost. |

| ⬜ | ⚠️ **STRUCTURAL, and MEASURED — my first framing of this was wrong and the census refuted it.** I proposed a worklist for `Rule:` lines carrying no citation. **There are none: 0 of 1,299 `Rule:` lines in `content/` fail to name a book** (counting CARHA, NIHL, SNL, BUIHA and the In-House Rules, which a first, narrower pattern missed and which produced a false 12). **The discipline is intact corpus-wide.** ⚠️ **The real shape of `defender.md:20` is narrower and worse: a `Rule:` line that names both books CORRECTLY, states CORRECTLY that neither contains a trapezoid, and then draws an ALLOCATION from that silence** — *"so the dead corner rim is your goalie's, not yours"*. **An argument from silence, under a `Rule:` label, voiced alone.** `check_rule_scope.py` cannot see it because it compares scope between units citing the same rule number, and there is no number to compare — the inference is precisely about the absence of one. **A tool for this would have to detect inference-from-absence, not missing citations.** Whether that is tractable is open. |
| ⬜ | ⚠️⚠️ **`language_and_glossary.md` is the ONLY document of 38 with no podcast episode — and ELEVEN documents point listeners at it.** 37 episodes for 38 documents. All eleven pointing documents HAVE episodes: goaltender, defender, center, winger, rink_map, breakouts, forechecking_systems, neutral_zone_systems, passing_and_receiving, shooting, getting_started. ⚠️ **`defender.md:33` tells a listener the glossary *"is where to look a word up"* — for a listener there is nothing to reach, and every safety limb just repaired there is correct on the page and inaudible.** Two options: generate the episode, or the eleven pointers need a word saying this one is to READ rather than to hear. **Owner's call — they have said they will add a podcast once the page is deployed.** |
| ⬜ | **`breakouts.md`: "the house" now names two different things, and one of them is the corpus narrating itself.** `:28` (newly promoted to body prose) defines **the house** = the home-plate area, *"the most dangerous ice on the rink"*. But `:470` and `:632` — **facts lines, voiced alone** — say *"the **house default** low zone collapse"* and *"the house default throughout"*, meaning *this document's assumed system*. ⚠️ **7 occurrences of `house.default` in HEAD and 7 in the tree, so the collision pre-dates this change — what changed is that the REGION sense moved into bold Overview prose twenty lines before the reader meets the other one.** ⚠️ **The second sense is also non-negotiable 6: the corpus naming its own editorial convention to the reader.** Fix by replacing *"house default"* with *"the default assumed throughout this document"*; ⚠️ **do NOT sweep the word "house"** — the region sense is correct and is `rink_map.md:346-352`'s. |
| ⬜ | **`winger.md`: the `Never:` on rim-vs-reverse left the facts layer**, leaving only `:80`'s `Read:` — a trigger, not a definition. ⚠️ **The style guide's conflation table names this pair FIRST (`content_style_guide.md:1746`).** Mitigation verified: body definitions sit at `:90`/`:92`, ten lines after the block, and `center.md:83` plus `passing_and_receiving.md` KT7 carry full definitions — **so nothing is lost from the corpus, only the standalone facts-layer statement.** Suggested: restore one `Key:` line to the `:80` block. Left for `facts-reviewer` — adding a facts line is that layer's call. |
| ⬜ | **`center.md`: three summary-layer losses from the removal, none safety-bearing.** (a) `Never: Drift onto the half-wall — that is your wingers' ice` survives **only in body prose at `:34`**; Common Mistakes has no half-wall item and the facts layer's only two half-wall lines (`:275`, `:298`) are the opposite polarity (*"find a winger on the half-wall"*). (b) `:34` dropped the SCOPE word — HEAD said *"your **defensive-zone job** switches sides every time the puck does"*, the new text reads unrestricted. (c) **F1/F2/F3 lost *"order of arrival"*** from the facts layer; `:319` says *"roles, not people"* and implies arrival by example. ⚠️ **The style guide is explicit: *"defined by order of arrival, not by position. Say so wherever you use them"* (`:1762`).** |
| ⬜ | **`goaltender.md`: three Majors the facts-reviewer could not fix because the blocks are at 11/11 capacity.** (a) `:659` §Icing — **Hockey Canada is absent and its rule is SCOPED**: 6.7(d) applies only at U18AAA, Junior and optionally Senior, so **below U18AAA an icing costs the faceoff and nothing else** — a minor-hockey goalie is told the other team is stuck out there when they are not. (b) `:374` — the four-book split on a puck landing on your own netting (USA Hockey Casebook 610 Situation 8 is a **minor**; NHL/IIHF 85.2 is not). (c) `:599` — the Note's two carve-outs. ⚠️ **Each needs a section split, which the agent declined because the anchors may be linked from documents it does not own. CENSUSED: `#freezing-the-puck` and `#putting-the-puck-out-of-play` have ZERO inbound links; `#icing--you-are-the-one-who-can-wave-it-off` has ZERO from content (the one `getting_started.md:76` hit is a different anchor).** So all three are splittable. |

| ✅ | **CLOSED — that wave WAS then reviewed, by a `safety-reviewer` over `defender`/`goaltender`/`language_and_glossary` and a `content-reviewer` over `breakouts`/`forechecking`/`passing`/`shooting`, which between them filed 1 major + 8 minors and 4 majors + 14 minors. ⚠️ THE ROW WAS LEFT OPEN AFTER IT WAS ANSWERED, AND `commit-gate` BLOCKED THE COMMIT ON IT — correctly, because an open self-filed admission of unreviewed safety text is a hold. A stale ⬜ is not free.** Original: ⚠️⚠️ **EVERY REPAIR IN THE 12 SEP WAVE IS NEW TEXT AND NO REVIEWER HAS READ IT.** Seven content files were edited by four agents: `language_and_glossary.md` (2 criticals + 1 major), `defender.md` (2 majors + a new Common Mistakes clause and a new `Convention:` facts line at `:142`), `forechecking_systems.md` (4 fixes incl. a rewritten `Targets:` facts line), `goaltender.md` (a critical fixed by ADDING two `Rule:` facts, plus `:601`, `:517`, `:30`/`:32`), `breakouts.md`, `passing_and_receiving.md`, `shooting.md` (new vocabulary clauses). ⚠️ **CLAUDE.md: *"a repair is new text, and new text has not been reviewed."*** Two agents said so of their own work unprompted. **This is the single largest unreviewed surface in the change.** |
| ⬜ | **METHOD — the layer test earned its keep again, on a line a document grep would have cleared.** `forechecking_systems.md:734` read `Targets: Dump into the corners — the "soft" areas the goalie cannot legally touch` — **voiced alone, and FALSE under USA Hockey and Hockey Canada, which have no trapezoid.** ⚠️ **The block's other lines ARE scoped and its last line handles the no-trapezoid case, so a document-level grep clears the file.** Only extracting the facts lines and reading each alone finds it. Now opens *"Against a trapezoid, …"*. |
| ⬜ | **`rules-verifier` handoff: `forechecking_systems.md:262` states a four-book rule with one book missing.** `Rule: After their own icing the offending team may not change lines or take a time-out under NHL and IIHF rules (81.4, 87.1) — under USA Hockey they may do both.` **Hockey Canada is absent**, and no exceptions are given. ⚠️ **`content_style_guide.md:104-108` records an UNRESOLVED IIHF 81.4-vs-82.1 divergence on the broken-skate exception** — so this line sits on top of a known open question. Not adjudicated by the repairing agent, and it did not verify it from another corpus document either, which is correct. |
| ⬜ | **`rules-verifier` handoff: `defender.md:19` and `:117` assert *"IIHF 27.7, materially identical"* and carry the skate-contact exception. The repairing agent read only 27.7's OPENING lines and did not verify the exception's IIHF wording.** Stated as a coverage gap, not a suspected defect. |
| ⬜ | **`defender.md:734` Common Mistakes still says a corner rim is *"now your goalie's"*** — the same inference corrected at `:20`, but in prose under a mistake framing rather than a `Rule:` label. **Left deliberately** (I directed no fourth counterweight, three layers already carry it). Flagged rather than swept; revisit if the `:20` wording settles differently. |

| ⬜ | ⚠️⚠️ **METHOD — a frequency test is not a layer test, and the coordinator ran two of them and reported success.** Both the cross-agent definition check and the 35-line deleted-facts census **tested for the presence of a STRING and reported it as the presence of a DEFINITION.** ⚠️ **A heavily-used undefined term scores BETTER than a defined one, because heavy use is what a frequency test rewards** — `seal*` at 45 uses passed the census, and the 45 uses were the *reason* it needed a gloss. **Both were caught by the agents whose files they covered; neither by any tool.** The project's own rule already states it — *"a layer test finds candidates; only reading decides"* — and both checks stopped at candidates and issued a verdict. **Worth a real tool: for each deleted definitional line, does a DEFINING construction survive (`X is`, `X means`, `**X** —`), not merely the token?** |
| ⬜ | **`rink_map.md` disagrees with ITSELF on the trapezoid widening date, between its body and its own trailer.** Body `:250` — *"widened by two feet on each side **for the 2014-15 season** at the NHLPA's request"*, sourced. Its **Unverified/flagged trailer** says *"pre-2014"*, as does `breakouts.md`'s Common Mistakes. ⚠️ **Compatible in substance — the season began in October 2014, so the old shape was painted for most of calendar 2014 — but the OWNER document is the one carrying both forms.** Not introduced by this change. One-line repair for whoever holds `rink_map.md`. |
| ⬜ | **`language_and_glossary.md` has no `Dump-in` headword** — it is defined inside `**Dump-and-chase**` at `:271`. ⚠️ **`forechecking_systems.md` uses `dump-in` 24 times and `:31`'s pointer sends the reader to the glossary for it; they will not find it where they look.** Also absent from that pointer's enumeration: `angling`/`angle`, **105 uses and the document's headline skill**. |
| ⬜ | **`shooting.md` carries the same *"house"* collision as `breakouts.md`, and one instance is in a Key Takeaway.** Four *"house rule"* uses (`:137`, `:673`, `:687`, and **`:878`, a Key Takeaway** — *"rec and youth leagues often ban slap shots by house rule"*) against one region use at `:400`. ⚠️ **And the `breakouts.md` count was richer than I measured: region sense is TWO (`:28` and `:815`, *"all five inside the house"*), not one; `house[- ]default` is 7, which my count matched exactly; and `In-House Rules` ×13 is a THIRD sense of the same string.** **Do not sweep — the region sense is correct and owned by `rink_map.md:346`.** |
| ⬜ | **Two individually-correct sentences that read as contradictory: `on_ice_communication.md:425` says *"never call a goalie up past the red line for a loose puck"*; `defender.md:31` says that same puck is *"legal under the NHL and IIHF books alike"*.** ⚠️ **Both are right — one is a rule, one is a safe-practice instruction — but this is the exact shape that has produced jointly-contradictory sentences in this repository before.** A reader who meets both without the framing hears a contradiction. Reported by a reviewer that touched neither file. |
| ✅ | **CLOSED 12 Sep — REFUTED, and my stated consequence was a fabricated tier difference.** ⚠️ **I claimed the relabelling *"can mean a minor where 48 would have reached a major"*. Under the IIHF book the two rules have IDENTICAL tier structure** — 48.2 minor at discretion / 48.3 major + automatic game misconduct for reckless endangerment, against 59.2 / 59.3 in the same shape, **neither with a match tier. The relabelling moves no ceiling.** Combined with the conduct being unchanged either way, it is an instruction to OFFICIALS about penalty labelling and belongs in `uk_rules.md`, not in a glossary entry teaching a player what to do. Correctly NOT added. ⚠️ **Caveat the agent flagged: this rests on IIHF v1.1 (2025/26), which is what the corpus and IHUK cite; `sources/README.md` records 2026/27 as current and its Rules 48 and 59 have NOT been diffed.** Original row: **Decide where the British cross-checking amendment belongs.** `sources/eiha_inhouse_2026-27.txt`: *"If one player cross checks another player in the head or neck area, we want the penalty to be called **Cross Checking, not Checking to the Head**."* ⚠️ **Under the IIHF book that relabels a Rule 48 offence as Rule 59 — which can mean a minor where 48 would have reached a major.** The new four-book cross-checking treatment in `language_and_glossary.md` carries no British amendment. **The reader's conduct is unchanged either way**, so this may belong in `uk_rules.md` rather than the glossary. |

| ⬜ | **`rules_primer.md:411` carries the SAME Hockey Canada Interpretation 1 quote with no same-book counterweight** — *"Interpretation 1 to 9.2(a) supplying the test instead: 'If a pushing motion is used…'"*. ⚠️ **Lower risk than the glossary version was** — it is a rules comparison rather than a coaching instruction, the quote sits mid-sentence, and SSML chunk 191 continues into *"Control their stick instead of their body"*. **But it still does not tell the reader which side of that line a net-front shove falls on**, and `rules_primer.md:920` treats the same Interpretation as the ANSWER to a folklore claim. **Give it the 9.2-definition counterweight.** Nobody owned that file this wave. |
| ⬜ | ⚠️ **`sources/README.md` records IIHF 2026/27 as the CURRENT book while the corpus's IIHF layer is 2025/26 across thirteen documents — and Rules 48 and 59 have never been diffed between the editions.** Two separate reviewers this round declared this as a coverage limit on their own findings. **Not a defect; an unmeasured surface under a lot of recent work.** |

| ⬜ | ⚠️⚠️ **RETRACTED — MY CENSUS WAS FALSE, AND THE TRUE REASON IS WORSE.** I reported *"11 of 36 files in `sources/` have no README entry, five of them British competition regulations"*. ⚠️ **It does list them.** `sources/README.md:997` opens a dedicated section — *"`ihuk_junior_roc` · `ihuk_u10_roc` · `ihuk_nihl_roc` · `ihuk_wnihl_roc` — the four IHUK Rules of Competition"* — running to `:1040` with a per-file table, text-to-PDF ratios, a `DUAL_EXTRACT` note and a ⚠️⚠️ warning that the plain extraction **scrambles the checking table column-by-column so a proximity grep pairs the wrong age with the wrong format.** ⚠️ **My grep matched filenames WITH the `.txt` extension; the README lists them WITHOUT it.** Re-run correctly, only the four `_layout` variants and `page_1975.txt` are absent, and the layouts are covered by that section's DUAL_EXTRACT note. ⚠️⚠️ **So these books were documented, warned about, and simply NEVER GREPPED for `icing`. The remedy is not README entries — it is that a documented source went unsearched.** And `heo_intl_drill_symbols` IS listed, so the 30-byte finding stands only as a re-extraction question, not a documentation one. **THIS IS THE THIRD STRING-PRESENCE TEST I REPORTED AS A FACT TODAY** — after the high/low agreement check and the deleted-facts census. All three passed, all three were wrong, all three were caught by an agent. |
| ⬜ | ⚠️ **`sources/heo_intl_drill_symbols.txt` is 30 BYTES — the entire content is *"International Drill Symbols"*, i.e. the title.** A failed extraction of exactly the shape `sources/README.md`'s own text-to-PDF ratio test exists to catch — and it is one of the eleven files the README does not list, so the ratio test was never applied to it. **Either re-extract it (image-only PDFs are ungreppable, not unverifiable — render with `pdftoppm`) or record it as failed so no agent greps it and reports an absence.** |
| ⬜ | ⚠️ **"Icing" is a HOMONYM in British competition documents and grep counts on it are untrustworthy.** `ihuk_junior_roc.txt` has 5 hits: **three mean *fielding an ineligible player*** (`:869` *"No limit on icing non-British trained players"*, `:1032`, `:2393`) and **one is the rule** (`:2752`). A count-based check reports 5 and a reader assumes 5 rule mentions. **Read every hit; do not census this word.** |
| ⬜ | **`defender.md:141` and `goaltender.md:941` carry a NEW body-check clause for `safety-reviewer`** — a goaltender can take a minor for **checking an opponent** past the centre red line, with no puck touched, from NHL 27.7 / IIHF 27.6's *"(intentionally plays the puck **or checks an opponent**)"*. ⚠️ **That is a CONTACT restriction and it was previously unstated in both documents.** New text, unreviewed. |
| ⬜ | **`facts-reviewer` handoff: read `defender.md:19`, `:20`, `:119`, `:127` and `goaltender.md:928` IN THE EXTRACTION LAYER.** All five were rewritten or added this round by an agent that verified length and antecedents but **did not run `md_to_speech.py`**. `defender.md:20` displaced a measurement onto a new `Rule:` line at `:127` because its block was at `HARD_MAX` 11. |
| ⬜ | ⚠️ **A *"sole exception"* sentence written from the playing rules alone — the FOURTH in this corpus's record.** `defender.md`'s goalkeeper restricted-area rule said *"the sole exception is a goalie playing the puck while keeping skate contact with the crease"*. ⚠️ **The IIHF Situation Handbook publishes two more, in BOTH the 2025/26 v1.1 and 2026/27 editions: Situation 27.9** (a puck off the glass striking the goalkeeper — *"the rule states that the goalkeeper must **play** the puck to be penalized"*) **and Situation 27.6** (a puck stopped ON the goal line — *"the goal line is not considered to be in the restricted area"*). Fixed to *"the rule text's one exception"* with both added to the body. **The pattern is the finding: "only"/"sole" claims keep being written from the rule text without the casebook.** |
| ⬜ | **Recorded, not repaired: Hockey Canada's own cross-reference is off by a letter.** `hc_layout.txt` **4.12(b)** points at *"Rule 6.1 (b) – Change of Players"*, but the printed **6.1(b)** governs a player leaving the **Penalty Bench**; the 3.05 m on-the-fly rule is **6.1(a)**. Only *Interpretation 1 to Rule 6.1(b)* connects them. ⚠️ **Same species as the USA Hockey Rule 610 lettering disagreement already in `sources/README.md`. The corpus cites the book's own numbers and should keep doing so.** |
| ⬜ | **My brief was wrong about which books write *"deliberately"*, and the verifier corrected it.** I told it the NHL and IIHF write no standalone *"deliberately"* (true) and implied Hockey Canada did. ⚠️ **Hockey Canada writes *"intentionally"*, and attaches *"deliberate"* to a DIFFERENT limb (physical contact).** So the standalone word is in **one** book, not two: NHL/IIHF gloss-in-parenthesis, USA Hockey *"deliberately"*, Hockey Canada *"intentionally"*. |
| ⬜ | **Found in passing and now in the body: USA Hockey Casebook Rule 407, Situation 12** — *"A goalkeeper in the act of going to the players' bench is over the center red line when they are accidentally struck by the puck… **No.** … The goalkeeper is not considered to be participating in the play if the puck contact was accidental."* ⚠️ **The intent limb running in the READER'S FAVOUR, and it was in neither document.** ⚠️ **It returns zero from a raw grep — the phrase wraps — and was recovered only from a flattened copy with a positive control.** |

| ⬜ | ⚠️ **A FOUR-BOOK DIVERGENCE NO DOCUMENT IN THE CORPUS STATED, found by reading a clause nobody asked about.** Hockey Canada **6.7(d)(i)**'s third post-icing exception is *"When a penalty or penalties have been assessed to **either team**"* — **with no on-ice-strength condition** — where **NHL 81.4** writes *"a penalty … which **affects the on-ice strength** of either team"*. **Hockey Canada's exception is WIDER.** Now stated in `forechecking_systems.md`. **For `rules-verifier`: is that a real divergence or an editorial one?** |
| ⬜ | ⚠️⚠️ **A RULES VERB IN THE WRONG HALF, at four sites, teaching a forechecker to expect a whistle that is not coming.** `forechecking_systems.md` said the trapezoid holds *"soft areas the goalie **cannot legally touch**"* — one of them a facts line voiced alone. ⚠️ **Both books write *"**play** the puck"* (NHL 27.8; IIHF 27.7), and IIHF Situation 27.9 rules that a puck merely striking a goalkeeper out there is *"No penalty. Rule states that the goalkeeper must **play** the puck to be penalized."*** All four corrected to *play*, distinction stated inline. **This is the same failure the document's own `Risk:` fact already warns about for the freeze case.** |
| ⬜ | **`shooting.md:353` carried a bare superlative its own evidence section refuses. Labelled, not deleted.** *"**This is the highest-value target in hockey**"*, voiced as its own `<p>` — while `:471` establishes that *"how much more a screen is worth is not measured anywhere this document has looked"*. ⚠️ **Two further unlabelled rankings remain at `:354` and `:355`** (*"pads and blocker kick pucks back into the slot far more often than the glove swallows them"*; *"second only to five-hole for size and reliability"*), both list items voiced alone. **The new `:350` lead-in labels them on the page but NOT in audio.** |
| ⬜ | ⚠️ **THE HIGHEST-VALUE THING LEFT, in the repairing agent's own words: the diagram captions were never opened.** `forechecking_systems.md` carries `forecheck-angling`, `forecheck-212`, `forecheck-pinch` and `dump-and-the-trapezoid`. ⚠️ **The prose beside three of them was just changed — on *playing* vs *touching* the puck in the trapezoid, on the post-icing mismatch, and on high/low — and nobody knows whether the captions still agree.** Captions live in `site/src/diagrams/*.mjs`, so **a grep over `content/` cannot see them**, and the style guide records that the characteristic caption defect is a qualification the prose keeps and the caption sheds. |
| ⬜ | **`shooting.md`: *"the point"* is never glossed anywhere in the document.** First substantive use `:112` is a `Read:` facts line, **voiced alone**; `release` (68 uses) is defined at `:306`, **292 lines after first use at `:14`**. ⚠️ **The style guide's conflation table flags this exact term — *"an area, NOT the line itself; a writer working to spec reproduced the defect in six places across four documents."*** **Deliberately not fixed**: the agent had read only ~60% of that file line by line and would not gloss a term whose other uses it had not seen. |
| ⬜ | ⚠️ **The Novet forecheck figure-set has NO ROW in the style guide's owner table** — 45.7 / 78.1 / 13.5 / 43.9 / 37.2 / 60.9 and the per-team ranges — **while `risk_management.md:370` carries a DIFFERENT Novet measurement with a different sample.** They do not collide today. **Nothing stops the next writer taking one set for the other, and nobody owns either.** |
| ⬜ | **ROUTE TO `uk_rules.md`: the U12 icing line is one clause of a wholly modified format and must not be lifted alone.** `ihuk_junior_roc.txt:2752` *"No icing calls at U12"* sits inside **Appendix D — U12 Competition Format & Administration**, which also has a running clock, automatic 60-second buzzer line changes, and *"Offsides & Frozen Pucks: **Play does not stop**"*. ⚠️ **A U12 reader there has no offside stoppage either — telling them only about icing states something true about a game whose other rules they have not been told.** Verified: `ihuk_u10_roc.txt:351` and `ihuk_wnihl_roc.txt:531` are both the eligibility homonym; **neither contains an icing provision.** |
| ⬜ | **Three of my brief's minors were REFUTED by reading.** (a) **`flex` IS glossed** — `shooting.md:737`, *"the number on the shaft, roughly the force in pounds needed to bend it"*, with the separate *"load the flex"* sense at `:50`. (b) **`five-hole` IS glossed at first substantive use**, `:352`. (c) **`angling` IS defined in-document twice** — `forechecking_systems.md:27` and `:146`. **I reported all three as gaps from frequency counts without checking whether a definition existed.** |
| ⬜ | **Recorded: two more of the books' own stale internal pointers.** IIHF **Situation Handbook** answers 27.6 and 27.9 both cite *"Rule 27.8"*, but 27.7 is *Goalkeeper Restricted Area* and 27.8 is *Infractions – Unique to Goalkeepers* — **the Handbook's own wrong pointer**, and the corpus's *"IIHF Rule 27.7"* is right. Hockey Canada **6.7(d)(iii)** cites *"Rule 6.18 – Time of Game"*; **6.17 is Time of Game**. ⚠️ **Third and fourth instances of this species, after USA Hockey Rule 610's lettering and Hockey Canada 4.12(b)→6.1(b). The corpus cites the books' own numbers and should keep doing so.** |

| ✅ | **CLOSED — reviewed by `rules-verifier` (all five rules claims confirmed verbatim, no findings) and `safety-reviewer` (no Critical, no Major, no Minor; two read-aloud claims re-derived in the renderer). Both recorded in the change record.** Original: ⚠️ **THE WAVE-C REPAIRS ARE NEW TEXT AND NO REVIEWER HAS READ THEM — this is the live version of the row above, not a duplicate of it.** `defender.md:141` + `goaltender.md:941` (new body-check clause: a goaltender can take a minor for **checking an opponent** past the red line, previously unstated in both); `forechecking_systems.md` (*play* not *touch* at four sites, the Hockey Canada post-icing third answer, the seal/steer gloss); `shooting.md:353` (superlative relabelled); `language_and_glossary.md:349` (Screen entry). **Under review now.** |
| ⬜ | **Declared coverage gap on the reviews that cleared the 12 Sep change: five of 52 changed files were read, and no from-scratch D11 omission pass was run over those five documents' full bodies.** Both reviewers stated this themselves. ⚠️ **Neither cross-checked `iihf_rules_2026-27.txt` for silent drift on 27.6, 27.7, 27.8, 81.4 or 82.1** — the corpus's IIHF layer is deliberately 2025/26 for the British reader, so this is a coverage limit, not a suspected defect. |
| ⬜ | ⚠️⚠️ **ANCHOR LINKS: the MECHANISM is certain, the HUMAN IMPACT is not, and a harness confound is why. DO NOT EDIT CSS ON THIS EVIDENCE.** **Certain:** `html { scroll-behavior: smooth }` at `global.css:131` is what stops it. Forcing `auto` fixes it instantly **and lands to the pixel** — target − 128 px, exactly `header-h(56) + player-h(56) + 1rem`. **Ruled out by test, not assumption:** the slugs (`getElementById` finds every target), `scroll-padding-top` (correct), `overflow-x: clip` (removed, still fails), the audio player (class removed AND element deleted, still fails), and **all JS** — an independent grep of `site/src` for `scrollIntoView`/`hashchange`/`popstate`/`startViewTransition`/`scrollRestoration`/`IntersectionObserver` found **nothing outside `global.css`**, no Astro `ClientRouter`, no view transitions configured. ⚠️⚠️ **THE CONFOUND, and it is the reason this stays open: `document.visibilityState` was `"hidden"` on EVERY check, and STAYED hidden even after a trusted CDP click made `hasFocus()` true. Chromium defers compositor-driven scroll animations for tabs it does not consider visible — which would produce exactly this symptom with nothing wrong in the CSS.** ⚠️ **BUT VISIBILITY CANNOT BE THE WHOLE STORY: in the same harness, in the same hidden state, a real click on `/getting-started/getting_started/` WORKED (landed 35,009) while clicks on `/foundation/rink_map/` land at 0.** Something page-specific also matters and is **undetermined** — Rink Map is 51,355 px with 17 inline SVGs; Getting Started is 40,562 px with none above the target. ⚠️ **ONE CASE IS A GENUINE DEFECT REGARDLESS OF THE CONFOUND: a reader who opens a deep link in a BACKGROUND tab — middle-click, cmd-click, a restored session — is in exactly that hidden state.** ⚠️ **MEASUREMENT TRAP FOR WHOEVER PICKS THIS UP: scripted `scrollIntoView({behavior:'smooth'})` fails at EVERY distance, including 56 px, on a page where a real click succeeds. Scripted smooth scrolls are not evidence here. Only clicks are, and only in a tab that reports `visibilityState === "visible"`.** **To settle it: open `/foundation/rink_map/#5-named-areas-of-the-ice` in an ordinary foreground Chrome window and click a contents entry.** Stakes, from `global.css`'s own comment: **5,572 anchored internal links, 2,024 of them corpus cross-links.** |
| ⬜ | **A hard-white diagram sits on the dark-theme background with no frame.** `site-reviewer` saw it at 1440 dark: the `<figure>` and `.diagram-scroll` both compute to `border: 0px none` and transparent background, so the SVG's literal `fill="#ffffff"` ice is an abrupt white block on `rgb(20,22,26)`. **The figcaption is legible** (`rgb(164,171,181)`), so this is cosmetic, not a legibility failure. ⚠️ **The SVGs are theme-invariant BY DESIGN — do not "fix" this by theming the diagram**; a `1px solid var(--border)` on `.diagram-scroll` in dark mode is the change being described. |
| ⬜ | ⚠️ **METHOD, for whoever reviews this site next: naive scroll-then-screenshot is not trustworthy on a tall page here.** `site-reviewer` reported that programmatic scrolling followed by a screenshot produced **pure blank captures** deep in an ~48,850 px document — **reproduced even with a JS-injected `position:fixed` red square that should paint regardless of page content**, which proves it is a capture artifact of the tool at depth and not the page. It worked around this by pinning the figure near scroll-position 0. **Anything below the fold that was not re-verified that way should not be assumed screenshot-clean.** |
| ⬜ | ⚠️ **`faceoffs.md:704`'s `Action:` line sits at 199 characters against a 200 cap — ONE character of headroom.** It is the line carrying both qualifications `facts-reviewer` restored (*"corner **or** half-wall"* and *"and blocks the lane"*), so the next ordinary edit to it fails the build, and the tempting fix is to drop a qualification to get under. ⚠️ **`check_facts.py` enforces the cap on the VALUE, not the whole line** — I measured the line including its `Action: ` label, got 207, and briefly thought a passing gate was wrong. **Record: `MAX_LEN, MAX_LEN_QUALIFIED = 200, 300` at `scripts/check_facts.py:76`, applied to the value.** |
| ⬜ | **`faceoffs.md`'s new disambiguation paragraph (~`:665`) has no facts-layer counterpart**, so a listener never hears that *"strong side"* carries two meanings in that document while a reader does. ⚠️ **`facts-reviewer` judged this correctly NOT a Major** — it is a note about how to read the document, not a claim about the game a player could be hurt or penalised by acting on — and declined to propose wording rather than spend a fact on a terminology note. **Recorded so the absence is deliberate.** |
| ⬜ | ⚠️ **STRUCTURAL QUESTION THE REVIEWER RAISED AND DECLINED TO ADJUDICATE, correctly: does a `##` section's intro blockquote "reach" the facts blocks under its `###` subsections?** The offensive-zone block carries its own generic *"a common default, not a rule"* hedge; the defensive-zone block's only `Convention:` was scoped to the wingers alone, so the house-system hedge sat in the `## Full Five-Player Alignments` blockquote two levels up. **The style guide's *"that section, not the document"* rule does not resolve it, and the reviewer found no precedent to test against.** Fixed here by broadening the block's own `Convention:`, but **the general question is open and will recur.** |

| ⬜ | ⚠️ **The `boards-side D` triangle crosses the rink boards line, and it is now in TWO diagrams.** Confirmed **visually, at 1440 and 375, light and dark**, in both `faceoff-dzone-alignment` and its new mirror — the apex *"punches through the boards line"*. ⚠️ **A fixed offset in the generator that does not account for the boards arc's radius**; `faceoffs.mjs`'s own comments already record it as open. **Pre-existing — the twin is live in production carrying it — but the mirror doubles the surface a fix must touch.** Cosmetic, not correctness or safety. **Fix both together and re-review both.** |
| ⬜ | **Reported but NOT reproduced in a browser: the `slot D` label clipping a background circle.** `diagram-reviewer` found it in the source; `site-reviewer` checked all four viewport/theme cells and saw the label *"sitting in clear whitespace"*. ⚠️ **Recorded as unconfirmed either way, not as a refutation** — it may be fixed, or reproduce only under a condition the browser pass did not hit (font-rendering pass, resize mid-load). |
| ⬜ | **`boards-side D` is the only label on that diagram with no leader line**, relying on proximity to its glyph. Readable at 375 px but the weakest of the four. |
| ⬜ | ⚠️⚠️ **A STAGING LOOP OF MINE BEHAVED LIKE `git add -A` AND SWEPT IN AN UNTRACKED FILE.** `git status --porcelain | awk '{print $NF}'` picks up `??` entries — it staged `project/plans/READABILITY_AND_DUAL_AUDIENCE.md`, **5,517 words, not mine, into a public repo**, minutes after `commit-gate` warned it was *"one blanket add from being swept in"* and I said I would leave it alone. ⚠️ **Caught only because the file count jumped 10→11 and insertions 727→1,431.** CLAUDE.md bans `git add -A` for exactly this; **a loop that enumerates `git status` is the same thing wearing a disguise.** Unstaged; still `??`. **Either track that file or gitignore it — it is one mistake away from shipping again.** |

| ⬜ | ⚠️ **`project/plans/READABILITY_AND_DUAL_AUDIENCE.md` IS NOW TRACKED, and that deviates from CLAUDE.md — recorded rather than resolved quietly.** CLAUDE.md says *"`project/plans/` — **The plan. `OPEN_ITEMS.md` is the only one.**"* This is a second plan file. **Tracked anyway** because it is a substantive 5,517-word implementation plan with a stated mission, not scratch — the repo's `*.local.md` gitignore pattern is explicitly for *"a scratch plan, analysis or working note"*, which this is not, and gitignoring would have hidden real work from the record. ⚠️ **It was previously untracked AND unignored, which is the state `commit-gate` flagged as "one blanket add from being swept in" — and which I then proved by sweeping it in.** **Either fold it into `OPEN_ITEMS.md` or amend CLAUDE.md to allow a second plan; it should not sit in permanent tension with the file that governs it.** |

### ⚠️ Found building the Language page, 12 September

| | |
|---|---|
| ⬜ | ⚠️⚠️ **A DOCUMENT WHOSE SOURCES TRAILER DOES NOT OPEN WITH THE EXACT STRING SILENTLY LOSES THE AUDIO DROP, AND NO CHECKER SEES IT.** `md_to_speech.py:508` — `SOURCES_MARKER = "sources retrieved"`, matched with `.startswith` after stripping. A first draft opening *"Sources — rulebook text read 12 September 2026"* had **the entire trailer voiced**, rulebook parentheticals and all — *"sixty-four feet (sixty-four feet)"*. **Found only by rendering.** ⚠️ **`check_pointers.py` cannot see it: that tool fires when a spoken sentence points at a layer, not when a layer that should be silent starts talking.** Every existing trailer should be checked against the marker, and the failure deserves a worklist. |
| ✅ | **CLOSED 12 Sep — REFUTED, and the row was wrong in both directions.** The angling definition *"The ability to force an opponent to go in a desired direction. This would normally be towards the boards or to the outside."* is **verbatim Hockey Canada's**, on **page 6 of the Checking Resource Guide, under GLOSSARY OF TERMS** — a 13-page PDF with a real 23,488-byte text layer, **already cited in the document's own trailer at `:951`** and already in the link baseline. Confirmed a second time in Hockey Canada's **current** bilingual edition on their own CDN. ⚠️ **The suspicion that the wording was USA Hockey's is wrong:** `ibc.txt:202` reads *"force the opponent to go a certain way or direction"* — different words, no boards/outside gloss — and the two bodies' progressions differ at the third rung (*body blocks* vs *body contact*, and `:144` uses Hockey Canada's). ⚠️ **`hc.txt` proved nothing: it is the PLAYING RULES, a different publication.** Three rounds filed *"unverifiable"* against a document one `curl` away, whose address was in the document being reviewed. |
| ⬜ | **Citation upgrade, not a claim defect: the cited host serves only Section 1.** `forechecking_systems.md:951` and `mental_game.md:716` cite a member association's copy of the **2002 CHA printing** — 13 pages, of a manual whose own table of contents runs to **p37**, so a reader following the link to check the angling section (manual pp. 16–19) gets a file that stops before it. The glossary quotation does fall inside the excerpt, so nothing is miscited. **Hockey Canada's own CDN serves the current edition** — `…/Coaching/Checking/Downloads/teaching_checking_progression_introduction.pdf`, **verified 200, 1,542,956 bytes, independently of the report**. Add as primary, keep the Calgary link as a mirror. |
| ⬜ | ⚠️ **A link baseline that records a STATUS is not a verification, and this cost three rounds.** `link_baseline.tsv:496` and `:501` both carried the bare note *"refetched 2026-08-21"* — two clean 200s — while the quotation they were cited for sat on page 6 of one of them, unread. **Both rows now carry the located wording.** The general question is open: **how many other baseline rows record a fetch nobody read the body of?** |
| ⬜ | **DECISION: should `foundation/language_and_glossary` get a facts layer?** `check_facts.py`'s `IN_SCOPE_LAYERS` is `{positions, systems, technique, hockey-iq}` plus `IN_SCOPE_EXTRA = {foundation/on_ice_communication}`, and the style guide agrees — facts blocks are *"not the glossary"*. **Tested empirically: a block there fails as out of scope.** So the 32 source facts were carried **in prose**, and the audio cost is smaller than it looks — the style guide's own table says a body list item gets its own `<p>` with a break, exactly like a facts line. ⚠️ **Restoring the layer is a one-line `scripts/` change and coordinator-only**, and the page would then need 3–11 facts per block. |
| ⬜ | **The H1 is `# Language`, not "Language and Glossary".** Deliberate: a Foundation page titled *"…and Glossary"* sitting beside *"Rink Map and Glossary"*, which actually holds the glossary, is a false promise to a reader today. **The filename is `language_and_glossary.md` so the glossary step needs no rename**, and the H1 costs one edit to change then. **Owner's call.** |

## P1 — DIAGRAMS. The thing that improves readability most.

**Census re-run 11 September 2026** over `##` and `###` sections, summary layers excluded:

| | |
|---|---|
| teaching sections | **1,528** |
| carry a diagram | **247 (16%)** |
| carry none | **1,281** |

⚠️ **This supersedes the 4 September census, which measured 23% / 12% on a different definition and had a
boundary bug** — it treated only `###` as a boundary, so the last subsection of every `##` swallowed Common
Mistakes, Check yourself and Key Takeaways. `winger.md`'s *"Backchecking"* was reported at 7,579 words; it is
429. **Measure per SECTION, and count both heading levels, or the number is wrong.**

⚠️⚠️ **AND 1,281 IS STILL TOO HIGH, for a SECOND reason found on 11 September.** The census above
already corrects for `##` parents whose `###` children carry the picture. It does **not** correct for a
`###` taught by a **SIBLING `###` inside the same `##` block** — and marker-proximity scoring cannot
see that at all. Triage row 9 was dispatched to draw *"the weak-side D as safety"* on the ground that
`forecheck-pinch` omits it. `forechecking_systems.mjs:904` draws that defenceman at (25, −8) and
**labels him "the safety"**. The agent refuted the brief in its first ten minutes.

**Measured, on a threshold of ≥120 words** — ⚠️ **stated because it is NOT the definition above, and
the two must never be mixed or subtracted from each other:**

| | |
|---|---|
| teaching units (≥120 words) | **1,206** |
| carry their own diagram | **244** |
| carry none, but a **sibling in the same `##` does** | **304** |
| carry none, and nothing in the whole `##` block does | **658** |

⚠️ **"Served by a sibling" is a CANDIDATE FILTER, NOT AN ANSWER. Distance decides**, and only
`site-reviewer` on the built page can measure it. **Eight of the ten largest sibling-served units are
the same rules surveys P2 rules must be COMPRESSED** — top of the list, `special_teams.md:621` at
6,770 words. **A reader who scrolls 5,500 words between a picture and the section it teaches is not
served by it, and the fix is shorter prose, not a second copy of the picture.** The two priorities
keep turning out to be one problem.

**Where the gap is worst — biggest undrawn section per document:**

| words | undrawn/total | document | the section |
|---|---|---|---|
| 10,515 | 54/62 | `foundation/rules_primer.md` | Body fouls |
| 7,947 | 35/51 | `foundation/rink_map_and_glossary.md` | 8. Glossary |
| 6,764 | 16/21 | `systems/special_teams.md` | Clearing, blocking, sticks and discipline |
| 5,754 | 26/31 | `technique/shooting.md` | How to create those shots |
| 5,550 | 26/36 | `systems/forechecking_systems.md` | What your book allows when you get there |
| 4,763 | 57/65 | `technique/body_contact_and_battles.md` | What actually gets called |
| 4,340 | 31/39 | `hockey-iq/risk_management.md` | 9. Never shoot the puck over the glass |
| 4,174 | 50/65 | `positions/goaltender.md` | The protection you have — and how it differs by book |
| 3,735 | 16/22 | `hockey-iq/time_and_space.md` | 6. How the rules create space |
| 3,396 | 29/35 | `systems/defending_the_rush.md` | The carve-outs, and how far they reach in each book |

⚠️ **READ THAT COLUMN OF SECTION TITLES.** *Body fouls · What your book allows · What actually gets called ·
The protection you have and how it differs by book · How the rules create space · The carve-outs.* **The
biggest undrawn sections are rules-survey prose.** They are undrawn because **there is nothing to draw** — a
list of what four books say is not a picture. **That is P2, and it is why the two priorities are one
problem.**

**So the diagram work splits in two, and only the first is a drawing job:**
1. **Sections that teach something spatial and lack a picture** — draw them.
2. **Sections that are rules surveys** — ⚠️ **do not commission a diagram. Cut the survey (P2). If what
   survives is spatial, it gets a picture then.**

**Before drawing anything:** `site/src/diagrams/*.mjs` is a shared area. **One module per agent**, and
re-check ownership between agents — four agents were once sent there in one round, each brief saying *"you
own exclusively"*, and a rebuild published six captions and a `describe` nobody had read. ⚠️ **A diagram
source change has a blast radius the diff does not show:** `forecheck-pinch` renders on
`/systems/forechecking_systems/` **and** `/systems/game_management/`. **Grep `dist` for the diagram id before
reviewing a caption.**

⚠️⚠️ **BEFORE COMMISSIONING ANY DIAGRAM, CHECK WHETHER IT WAS ALREADY DRAWN AND CUT.** The
11 September triage ranked `dz-back-door-seam` as the corpus's **#1 undrawn picture**. It had been
drawn, reviewed twice, repaired, re-reviewed and **cut** in round 68, cut accepted. **A diagram cut
before it is committed leaves no trace in `content/` at all** — no `](diagram:` marker was ever
added — so `git log -S '](diagram:'` **cannot see it**, and that probe was written into the triage
as the archaeology method. **The probe that works:**

```bash
grep -rn '<diagram-id>' project/reviews/          # a rejection that got as far as a NAME
awk '/NOT DRAWN/,0' site/src/diagrams/<module>.mjs  # a rejection that never got one
```

**17 modules carry a `WHAT IS DELIBERATELY NOT DRAWN` block.** `defending_the_rush.mjs`,
`breakouts.mjs`, `forechecking_systems.mjs` and `skating.mjs` carry **none** — no recorded
rejections there to trip over. Full record:
[`findings_diagram_triage_2026-09-11.md`](../reviews/findings_diagram_triage_2026-09-11.md).

| | |
|---|---|
| ⬜ | **Decide whether the orphan probe becomes a worklist script.** One line; its first and only finding to date was a legitimate withholding. ⚠️ **Worklist, never a gate** — a tool that ranked unplaced specs and offered to place them is how round 44 manufactured a divergence that did not exist. |

⚠️ **And the gap that triage reported was never a gap: THREE back-door pictures already exist**
(`dz-strong-side-overload`, `dz-collapse-high-slot`, and `pp-backdoor` from the attacking side).
**Grep the diagram sources for the play, not just for the section.**

| | a row this opened |
|---|---|
| ⬜ | ⚠️ **`defensive_zone_coverage.md` uses "the seam" for THREE different things, and two of them are adjacent bullets.** (1) `:529` *"**Stick in the seam.** The pass has to cross the slot"* — the low lane. (2) `:530`, the very next bullet, *"The seam runs through the high slot"* — not the same lane. (3) `:215`, `:223`, `:248`, `:255`, `:374` use it for the **gap between two defenders' zones** (*"two defenders' areas, where each assumes the other has them"*) — a third meaning with no geometry at all. `dz-strong-side-overload` draws the cross-ice route crossing at **x ≈ 76** = `slot`; `high-slot` is **x = 69**. Both (1) and (2) are voiced as separate `<p>` units in `048.ssml`. ⚠️ **Needs the section's owner and a source — two reviewers have declined to assume, correctly.** ⚠️ **The line numbers first recorded for this (`:521`/`:523`) were WRONG and `check_plan_rows.py` caught it; the real ones are `:529`/`:530`.** |

⚠️ **The owner does not want long captions.** At 390px the picture is 18% of the figure and one safety
band runs 836px. **A caption is not where a section's content goes.**

⚠️⚠️ **NO CAPTION LENGTHS ARE WRITTEN HERE. MEASURE THEM — one line over `site/src/data/diagrams.json`,
and the figures move every time a caption is edited.** This passage used to name *"the two longest of
198 — `forecheck-press` 3,435 and `forecheck-pinch` 3,102"* against a *"1,303-char median"*. **All of
it was stale, and the correction was already written down in
[`findings_diagram_triage_2026-09-11.md:21`](../reviews/findings_diagram_triage_2026-09-11.md) — which
the coordinator did not read before copying the superseded line into EIGHT briefs in one round.** An
agent measured it independently and refused to carry the brief's figure in, which is the only reason
it was caught. **The longest is `forcing-them-outside`, and `the-risk-map` sits above
`forecheck-pinch`; the median is near 1,270, not 1,303.** ⚠️ **Those figures are an illustration of
the drift, not a new number to copy — the owner is the tool, and this is the third figure in this
project replaced by a pointer for exactly this reason.**

### ⚠️⚠️ TWO FAILURE MODES FOUND ON 11 SEPTEMBER THAT NO CHECKER IN THIS REPOSITORY CAN SEE

**1. An index-based splice can overwrite a NEIGHBOURING diagram's caption and `describe`.** It
happened while `nz-hinge` was being written: a `str.replace` at a computed index put the hinge's
caption and `describe` onto `nz-regroup-d-to-d` and deleted the hinge's own anchors. ⚠️ **Nothing
reported it except the renderer throwing a `ReferenceError`** — and only because the splice also broke
the code. **Had the anchors survived, it would have shipped a caption and a `describe` that were both
fluent, both wrong, and both about a real diagram in the same file.** `check_absolutes` reads captions
for absolutes, not for subject; `check_diagram_quotes` checks quoted spans; `check-arrivals` reads
routes. **None of them asks whether a caption describes its own diagram.**

**So: edit a diagram spec by NAMED anchor, never by computed index, and `git diff --stat` your own file
before reporting.** The agent caught it that way and said so; that is the only reason it is written
down.

**2. Numbered route badges collide, and the collision is invisible to every gate.** `numbered` puts
each badge 9 ft along its route, nudged 3.4 ft off; on a full sheet `TXT` is 1.7, so **a badge covers
roughly 7 × 6.5 ft of ice.** Two routes sharing a start are separated only by the angle between them —
**at 20° two badges merged into one box reading "2 1".** A carry and its reversal put badge 4 back
along badge 3's line: at a 23 ft carry their centres were **4 ft apart and the boxes touched.**
⚠️ **Found by rendering four drafts and LOOKING at them, at 1100 px and 375 px. No checker can see
this, and none should be written for it — the remedy is to look.**

### ⚠️ NOTHING DETECTS AN ORPHAN DIAGRAM

`check_links.py` verifies every `](diagram:` marker resolves to a spec. **The reverse is unchecked**, so
a spec can be written, reviewed, committed and never placed with every gate green. Probe:

```bash
comm -13 <(grep -rho '](diagram:[a-z0-9-]*)' content/ | sed 's/.*diagram:\(.*\))/\1/' | sort -u) \
         <(grep -rhoE "id: '[a-z0-9-]+'" site/src/diagrams/*.mjs | sed "s/id: '\(.*\)'/\1/" | sort -u)
```

⚠️ **Its first run found one unplaced spec whose correct disposition was to LEAVE IT** —
`centre-crease-the-puck-decides` is a deliberate withholding, stated in capitals at `center.mjs:761`,
because `the-puck-decides-not-you` is the same picture and is already placed in both documents. **So
the probe's output is a question, never a defect. Worklist if ever scripted, never a gate.**
⚠️ **And `git log -S` gives the date a commit TOUCHED a string, not the date it was created. The
coordinator inferred a creation date from one and was wrong.** Full record:
[`findings_diagram_triage_2026-09-11.md`](../reviews/findings_diagram_triage_2026-09-11.md).

### ⚠️ Rows opened by the 11 September diagram round

| | |
|---|---|
| ⬜ | **Three unverified stale-quotation comments in `special_teams.mjs`** — `pp-131`'s point re-take, the net-front paint quotation, `pk-wedge-plus-1`'s perimeter inversion. **Two of the five comments examined that day were stale**, so the base rate is not low. Re-grep each against today's `content/`. ⚠️ **The cautionary case is `shooting.mjs`: a comment written to retract a stale quotation ended ON a stale quotation.** |
| ⬜ | **36 `describe` sites across 17 modules carry a comment recording a numeric correction** — the exact shape that has now gone stale three times. **One module per agent**, and the agent must re-grep the quotation, not read the comment. |
| ⬜ | **`:312` cannot be drawn because the section has no words for it.** `special_teams.md` §Power play zone entries names no formation, no lane and no attacker position — its only spatial sentence covers two players with no side, depth or distance. **Give the section its own words for where the five stand and the picture becomes drawable.** This is a content row, not a diagram row. |
| ⬜ | **`defensive_zone_coverage.md` §The rotations — the OTHER FOUR rotations were never tested** (low → high, point → point, corner → up the wall, puck to the far corner). The corner→behind-the-net one is refuted; one of the remaining four may be a single frame. |
| ⬜ | ⚠️ **`check-arrivals.mjs` measures a route only against the owner's OPPONENTS — it is blind to a route passing the reader's own TEAMMATE.** Found while drawing `legal-route-through-traffic`, whose entire subject is a route run close past a teammate's body. That clearance (6.83 ft centre-to-centre, **2.96 ft of daylight**) was hand-computed off the renderer's Bézier construction and **is covered by no gate.** Decide whether the tool should measure all glyphs, not just opposing ones. |
| ⬜ | **`playing_without_the_puck.mjs`, the `D1_MAN` comment on diagram 1, is arithmetically false.** It says *"At (74,-10) he is outside the left faceoff"* circle; he is **inside** it — 13.0 ft from the circle centre (69, −22) against a 15 ft radius. The glyph position is defensible either way; **the justification is not.** Reported by the agent that owned the file, deliberately left out of its commission's diff. |
| ⬜ | **`zone_entries.md` §"Against a 1-3-1 neutral zone" — a DECLINED borrow that was never replaced.** `nz-1-3-1` was declined there on the addressee rule (that rule's first application) and nothing filled the hole. **`breakout-against-1-3-1` is voiced to the team coming up the ice, which is that section's reader too** — a borrow at zero authoring cost. ⚠️ **Caption fit NOT verified against that section's prose. Run the three-question borrow test properly.** |
| ⬜ | ⚠️ **THREE OF THE FOUR NEW DIAGRAMS HAVE NOT BEEN LOOKED AT.** `rush-2-on-2`, `breakout-against-1-3-1` and `legal-route-through-traffic` are arithmetic, not ink — only `nz-hinge`'s author rendered and viewed his own (four drafts, 1100px and 375px). `diagram-reviewer` is on it. Unverified: whether `rush-2-on-2`'s two crossing arrowheads are legible where the curves meet, and whether its two identical 16-char `follow or switch` labels 22 ft apart read as ONE label spanning both glyphs — **the exact failure that module's header records from its first render**; whether `breakout-against-1-3-1`'s three flat glyphs at x = 3 read as a LINE at render scale, and where its **seven** labels land — `breakout-d-to-d` has a recorded case of the placer exiling a label **176.7 ft across the sheet on a leader line through an opponent's glyph**. ⚠️ **`check-arrivals` tests endpoints and the terminal tangent only — it is BLIND to a bowed curve passing through a player**, and its own header says that defect has happened here and only an eye caught it. **And the plan archive records that all 9 `breakouts` diagrams have been rendered and never looked at. These are the 10th and 11th.** LOOK AT THE PNGs. |
| ⬜ | **None of the four new diagrams has been reviewed by anyone.** `diagram-reviewer` and `safety-reviewer` are running now; **no `content-reviewer` and no `rules-verifier` has seen any of it. New text has not been reviewed.** Specifically open: whether `breakout-against-1-3-1`'s safety clause may stay a faithful SUBSET of `breakouts.md:731` (it drops *"forearm and hip into contact if it comes"* and *"chin off your chest"* for length, ~70 chars to restore), and whether `defending_the_rush.md`'s own `Read:` line — *zone survives a crossing rush better than man-on-man* — is supported by anything. **Nobody has tested that claim; the diagram propagates it.** |
| ⬜ | ⚠️ **`rush-2-on-2`'s safety clause carries no ⚠️ glyph**, so it gets neither `md_to_speech`'s `"Important. "` prefix nor the site's amber `.warn-inline` run. Its cited precedent `nz-stand-up-at-the-line` is the same — **consistent, not novel — but that caption never uses the word *safety* and this one does.** Decide whether the glyph convention should follow the word. |
| ⬜ | ⚠️ **A STALE BUILD PRODUCT CAN SHIP A SUPERSEDED SAFETY CLAUSE, and it nearly did on 11 September.** `diagrams.json` was rebuilt at 23:36:50; a caption repair landed at 23:42:14; the shipped clause was missing the chin-off-your-chest and forearm-and-hip elements while the source carried both. **`check_absolutes.py` was already saying so — EXIT 2, "the caption layer is UNCERTIFIED" — and nobody had acted on it.** ⚠️ **An exit 2 from that checker is not a formality: it means the text a reader gets is not the text anyone reviewed.** |
| ⬜ | ⚠️ **`breakouts.md` §Reverse and §Rim describe the boards posture and carry NO counterweight** — `:272-299`, *"sealed you against the boards"*. **Both sit at 8 facts, the coaching-fact ceiling**, so adding a `Never:` means re-labelling an existing line. |
| ⬜ | **The boards formula now appears twice in one Key Takeaways list and thirteen times in `breakouts.md`.** The layer test justifies each — every spoken chunk must stand alone — **but no tool measures when a repeated safety sentence stops being heard.** Needs `content-reviewer` reading Key Takeaways end to end as PROSE, not as chunks. |
| ⬜ | ⚠️ **A REVIEWER'S QUOTATION STOPPED MID-TAKEAWAY AND A CRITICAL WAS FILED ON THE TRUNCATION**, inside a passage its own report listed under *"Read in full."* **Re-check this round's other relayed quotations for the same shape** — the agent that caught it asked whether it came from a grep window, and if so the truncation may sit in more than one brief. |
| ⬜ | ⚠️ **NO HUMAN EYE, AND NO SECOND BROWSER ENGINE, HAS SEEN THE FOUR NEW DIAGRAMS.** `site-reviewer` ran them — but **the Chrome extension was BLOCKED** (five refusals across two hostnames) and it fell back to driving real Chrome over CDP, the repository's own build mechanism. **Same engine, same stylesheet, real rasterisation at DPR 1 and 3 — but no GPU compositing and no physical screen.** ⚠️ **Its own words: the `CH` verdict is *"legible at DPR 1 and 3 in Chrome's rasteriser", not "legible in your hand"*, because subpixel antialiasing on a real macOS display differs from headless output — and that is the axis it turns on.** ⚠️ **And `nz-hinge`'s 3.6 px badge gap is exactly the margin that could close in Safari or Firefox, neither of which was touched.** |
| ⬜ | ⚠️ **`nz-hinge`'s badges 2 and 1 sit 1.15 ft apart on one baseline** — 6.3 CSS px at 1100 px, **about 1.4 px of white at 375 px** — and **route 1's arrowhead and badge 3 touch EXACTLY, both edges at x = −8.41.** Still two boxes on both renders, so the header's recorded *"one box reading 2 1"* has not recurred. **A near miss, not a margin.** Numbers recorded so the next editor has them. |
| ⬜ | **OWNER DECISION: self-narration in spoken captions.** `this corpus` appears in **3** captions and `these diagrams` in **7**; non-negotiable 6 names that form and captions are voiced. ⚠️ **Both instances found today do real work** — one is a safety statement about what is deliberately absent, the other explains why an arrival has no glyph. **Deletion was NOT recommended. Do not sweep this.** |
| ⬜ | **Nobody has asked a COACH whether the drawn systems are recognisable.** `nz-1-3-1` and `breakout-against-1-3-1` put the trap's wall men at \|y\| = 33 and 36 — wider than the reviewer expected. ⚠️ **They agree with each other, so if it is wrong it is wrong in two places and internal consistency will never catch it.** |
| ⬜ | ⚠️ **THE ARRIVAL INVARIANT PUSHED A DIAGRAM INTO TEACHING A GAP THE CORPUS FORBIDS.** `rush-2-on-2`'s four rejected layouts (8.60, 8.25, 7.21, 5.10 ft) were all refused against `ARRIVAL.noArrow`; the tips went back to 12.37 ft to clear the 9 ft bar **and the defence went back with them**, leaving a 35.2 ft gap where the section says *"tight gap"*. **The rule that stops a diagram teaching a hit made a different diagram teach a gap the document tells the reader never to have.** Being fixed now — but the INTERACTION is the row: `kind: 'pressure'` exists for this and was not reached for. **Check the other rush diagrams for the same pressure.** |
| ⬜ | ⚠️ **`rules_primer.md:430`'s a-fortiori caveat may no longer be needed.** It cites USA Hockey's Declaration under COMPETITIVE CONTACT CATEGORY — written for non-check play — and honestly labels the carry-over as *"an inference, not the book's words"*. **USA Hockey Casebook Standard of Play Situation 12 (`usah_casebook.txt:18569`) states it positively**, putting the onus on the opponent to move around the player who established the space. ⚠️ **It is NOT unscoped, as first relayed — its own question scopes it to assessing interference *during face-offs*.** Carry that scope with it. ⚠️ **It exists only in the 476-page volume — the phrase returns ZERO from `usah.txt`.** Re-cite and decide whether the caveat stands. **A finding in the direction that makes the corpus more supported, which is the direction no reviewer stops on.** |
| ⬜ | ⚠️ **`hc.pdf` IS NOT ON DISK**, so Hockey Canada's **Appendices A–D cannot be rendered with `pdftoppm`** the way the README's `ibc.txt` entry demands. A permission stated in a figure or table there is invisible to every search this project can run. **Fetch the PDF.** Also unsearched: the IIHF Situation Handbook (either edition), and any Hockey Canada rule bulletin, Member interpretation or officiating clinic memo — ⚠️ **one of which is exactly where a federation would put a body-position standard, and the repository holds none of them.** |
| ⬜ | **`sources/README.md`'s file table is stale again — 36 `.txt` files on disk against 26 rows.** ⚠️ **The table warns it will go stale and it has; the warning is not a substitute for updating it.** None of the missing files bore on the question that found this. |
| ⬜ | ⚠️ **NOTHING CATCHES A CAPTION DOWNGRADING "never" TO "not".** `breakout-against-1-3-1`'s boards-posture line shipped with the qualifier downgraded from never to not, where the source and **22 sites across `content/`** all write the stronger form and **none writes the weaker one**. Now repaired. `check_caption_negations.py` reads inversion structure, not a shed qualification, and the coordinator read the line, said it was "least confident" about it, and **passed it**. **Consider a probe for safety phrases that exist in the corpus in exactly one variant.** |
| ⬜ | **No hedge anywhere on the section's claim that zone coverage survives a crossing rush better than man-on-man** — `defending_the_rush.md:496`. Searched across `content/`, `site/src/diagrams/` and `project/`: **no "nobody has tested this" note exists.** Unhedged in both layers, unsourced, and now propagated by `rush-2-on-2`'s caption. **A content row, not a caption fix.** |
| ⬜ | ⚠️ **Captions moved the WRONG WAY this round.** `breakout-against-1-3-1` is **1,531 chars against a 1,270 median**; `rush-2-on-2` grew too. The growth is restored safety text and an honest gap disclosure, **so each addition is defensible and the trend is not.** The owner has said twice that captions should be short. |
| ⬜ | ⚠️ **The `CH` glyph in `legal-route-through-traffic` has its own leader line struck through it, and NO fix is available inside the diagram.** The leader starts at the glyph **centre** (`<line x1="76.00" … x2="81.98">`), so it crosses the right half of whatever letter is there — **shortening halves the overlap, it does not clear it.** Every single-character id collides: `C` is a centre at **56** glyphs corpus-wide, `D` defence, `F` forward, `X` pylon. **A non-horizontal leader exit is renderer-owned.** Left alone deliberately: both reviewers confirmed the letters legible at zoom, and every alternative touches shared code. |
| ⬜ | ⚠️ **`playing_without_the_puck.md` §"Screens and picks" facts block is at the 11-fact HARD CAP** (7 `Rule:` + 4 coaching; `check_facts.py` blocks at 12), **so the two-book prohibition could not be given a `Rule:` line and lives in body + Common Mistakes + Key Takeaway instead.** The style guide's remedy is to split on the seam the body already uses — and **a clean seam exists** (rulebook half above the diagram, practical route below) — ⚠️ **but the split would move the diagram marker that was just argued into place.** Owner's call. |
| ⬜ | ⚠️ **A PRE-EXISTING `Rule:` line already records a book's silence, which is the shape `rules-verifier` ruled against on 11 September.** `playing_without_the_puck.md:586`, in §"Screen the goalie": *"Hockey Canada 8.5 grants no such permission…"*. **It is more defensible than the one that was refused, because it says what the book DOES ask** (*"it asks attacking players to avoid contact in all circumstances, anywhere on the ice"*) — **so it is not a bare silence.** ⚠️ **But it is voiced alone with a 300 ms break either side, and the ruling's reasoning applies: a listener hears a prohibition where the book prints none.** Test it. Not touched this round — different section, different rule, and found only by grepping for the shape. |
| ⬜ | ⚠️⚠️ **`check_disclosures.py` IS BLIND TO A WHOLE CLASS OF FALSE NEGATIVE.** It did not flag the two false rulebook-absence claims that stood in `content/hockey-iq/playing_without_the_puck.md` until the 12 September repair — an *enumerate-nothing-of-the-kind* claim and a *writes-no-such-offence* claim, **both since narrowed, and neither ever matched by the tool** — both in layers voiced alone. ⚠️ **Every negative phrased as what a book *enumerates*, *lists* or *names* is currently invisible to it.** Three reviewers found these by reading; the tool found none. **Add the pattern class — and keep it a worklist, never a gate.** |
| ⬜ | ⚠️ **NOBODY OWNS THE PROTECTIVE-SCREEN SPLIT, and two documents cut it differently.** `playing_without_the_puck.md` frames a **two-book** split in four places; `breakouts.md` frames a **one-book** split in six (`:138`, `:142`, `:152`, `:255`, `:947`, `:1002`). They give different answers to one concrete case. **`rules_primer.md:430` holds both quotations and is the natural owner; it owns nothing at present.** Name an owner and make the other two point at it. |
| ⬜ | **A corpus-wide test `facts-reviewer` named and did not run:** *"for every `Rule:`-bearing prohibition in a Common Mistakes bullet, check whether its own section's block carries it."* ⚠️ **It found this round's Critical only because the brief pointed at the block — *"the same defect in a block nobody flagged is exactly what I did not look for."*** |
| ⬜ | **Four renderings of one clause across the corpus** — `625(a.1)`, `625(a)`, `625(a)(1)`. The book prints **(a)** then enumerated **(1)**. ⚠️ **Spoken, `625(a.1)` becomes *"six hundred and twenty-five, clause a point one"*, which is not a thing an official will recognise.** |
| ⬜ | **All 13 `breakouts.md` sites drop the owner's negative half of the boards formula** — `body_contact_and_battles.md:766` writes *"not the point of your shoulder"* and lists taking the wall on your shoulder as a coaching myth. **`playing_without_the_puck.md:904` carries it; `breakouts.md` never does.** |
| ⬜ | ⚠️ **A SHORT-PHRASE GREP IS NOT A PLACEMENT TEST, and it produced a false claim three times this round.** The coordinator reported three borrow placements that do not exist, having grepped the two-word string `token pressure` — which is ordinary prose on those pages (*"F1 gives token pressure"*). **The test that works is a caption sentence over 40 characters.** Earlier the same shape produced a false "no reader has ever seen it" and a false "the marker never reaches `dist`". |
| ⬜ | **`/systems/faceoffs` without a trailing slash 404s on the preview server** (`trailingSlash: always`). Production depends on the CloudFront rewrite, **which cannot be exercised locally.** Not verifiable here, not established as a defect — **but nobody has tested it against production either.** |
| ⬜ | **`nz-hinge`: route 1's arrowhead and badge 3 touch exactly**, both edges at x = −8.41, at both viewports and both themes. **They read as two shapes, so untidiness rather than a misreading** — recorded with the numbers so the next editor does not rediscover it. |
| ⬜ | ⚠️ **SEVEN SITES CITE "NHL and IIHF 56.2(i)" AS ONE RULE, and none carries the IIHF's mandatory chapeau** — `on_ice_communication.md:261,540`; `defender.md:743,816`; `defensive_zone_coverage.md:476,706,768`. Correct for the limb, incomplete for the book. **And `goaltender.md:1148` has Hockey Canada "silent rather than against it"**, which understates that its general limb 8.3(i) is unqualified and the book writes no body-position permission at all. |
| ⬜ | ⚠️ **`site/dist` no longer matches `diagrams.json`.** The repair added *"never duck"* to `breakout-against-1-3-1`'s caption **after `site-reviewer` had run**. The `.warn-inline` rendering mechanism is covered by that review; **the exact string is not.** Low risk — 11 characters inside a panel already verified — **but it is a C11 shape and is recorded rather than waved through.** |
| ⬜ | ⚠️ **The IIHF's general interference definition returns ZERO to a flattened grep** — a running header, *"SECTION · RESTRAINING INFRACTIONS"*, is spliced **mid-sentence** at a page break. **The whole NHL/IIHF divergence rests on it.** Now recorded in both documents' verification notes so the next reviewer does not file it as a fabrication. ⚠️ **Consider whether `sources/README.md` should carry this splice the way it carries the `2007- 09` one.** |
| ⬜ | **`forechecking_systems.md:594` — the CONSEQUENCE is undrawn**: a failed pinch becoming a 2-on-1. `rush-2-on-1` exists but is voiced from the defending side, so borrowing imports the wrong voice. |

⚠️⚠️ **COORDINATOR ERROR, PROPAGATED INTO EIGHT BRIEFS IN ONE ROUND — the placement rule was
BACKWARDS.** Every brief this round said *"put the marker where the prose has finished explaining the
thing, never at a section head."* **[`content_style_guide.md:1417`](../content_style_guide.md) says the
opposite, and it is the owner's own instruction:**

> *"A diagram goes at the head of the unit it teaches… The owner's instruction is **'diagrams should be
> at the start of sections'**, because a diagram that arrives after the prose it explains **arrives too
> late**."*

**Measured corpus-wide to settle it, not argued:**

| | |
|---|---|
| diagram markers | **325** |
| directly under a heading | **235 (72%)** |
| after prose | **90 (28%)** |
| inside a `facts` block | **0** |
| immediately **before** a facts block | **248** |
| immediately **after** a facts block | **1** |

**What the coordinator stated as the convention was the corpus's minority pattern, by 235 to 90.**
The rule was then used to manufacture a defect report against a file that was correct. **Consequences
traced and repaired:** the `scan-before-a-wall-reception` borrow was placed after the prose in
`puck_handling.md` and has been **moved to the head of `### Know your out before you get there`,
above the facts block**; the `scanning_and_anticipation.md:27` row is retracted above; and the three
live drawing agents were messaged mid-flight with the correction rather than left to ship it.
⚠️ **`breakout-stretch-pass` in `passing_and_receiving.md` was NOT a casualty of the wrong rule — its
position was measured, and moving it was a second error on top of the first. See the row below.**

⚠️⚠️ **THE TEST FOR HEAD-OF-SECTION PLACEMENT IS NOT ADJACENCY, IT IS REPETITION**, and nothing
stated that before this round. Measured on `puck_handling.md` (`md_to_speech.py --only`, 63 chunks):
the borrowed caption and the facts line **share chunk 035**, and the chunk contains **zero repeated
six-word phrases**. Adjacency present, cost absent — the placement stands. The stretch-pass failure
was **duplication**, not adjacency. **Run the shingle probe, not the boundary probe.**

**The real rule, with the three constraints that came out of applying it (`:1427-:1440`):**
*"The unit is the teaching point"* — the head of the **smallest** unit the caption is about, which is
not mechanically after every heading; **never between items of a real ordered list**, because it
renumbers the list in the audio; **a before/after pair moves to the head of the unit they share**,
because splitting breaks *"beside it"*; and ⚠️ **if a caption refers backward to prose the move would
strand, leave it and say so — "a wrong move is worse than no move."**

| | |
|---|---|

⚠️ **THE ROUND'S OWN LESSON, and it is a briefing rule, not a diagram rule: SEVEN triage rows were
examined and SEVEN had their premise refuted** — one was an accepted cut, one was rejected by name in
the module's own comments, one was already drawn *and labelled*, one was a timing section, two were the
same section listed twice, one would have had to invent four of the five players it drew, and one
re-proposed a ruling the plan archive had already closed with its reasons. **FOUR commissions survived their own agent's attack and were
drawn: `rush-2-on-2`, `breakout-against-1-3-1`, `nz-hinge` and `legal-route-through-traffic`** — plus
one borrow placed (`scan-before-a-wall-reception`), closing an action item that had sat unactioned in
a `.mjs` comment, and one **orphan** found: a committed, four-book-sourced diagram placed nowhere.
⚠️ **TWO rows re-opened CLOSED rulings — one recorded in a `.mjs` comment, one in the plan archive.
Neither is findable by reading `content/` and counting markers, which is the only thing the triage
did.** The triage was built
by reading `content/` and counting markers; **it never read the diagram MODULES, where four of those
answers were already written down.** ⚠️ **Read the `NOT DRAWN` blocks and the existing captions FIRST,
the prose second** — and resolve every line number against `grep -n '^#\{2,3\} '` before briefing it,
because two rows named the wrong section.

## P2 — BIG PICTURE OVER TECHNICALITY. Some rules, not a rulebook.

**The owner's ruling:** the corpus should teach the game — where to be, what to do, what happens next — and
**may mention rules**, but must not read as a rules reference.

⚠️⚠️ **THE FIRST FIGURE IN THIS SECTION WAS WRONG AND WAS COMMITTED. Read this before quoting any number.**
It said *"16,523 citations, 13.9 per 1,000"*. **The counter matched any decimal** — `4.5` ft, `2.10×`,
`16.6%`, `1.7` m, version `1.1` — **35% of the figure was not a citation.** It also counted the **Sources
trailer**, which `md_to_speech` strips and which is exactly where homework-proving belongs. **Found by the
pilot agent, which could not reproduce the number by any of five methods.**

**CORRECTED, body only, requiring an explicit `Rule N` or `NNN(a)` form:**

| | |
|---|---|
| body words | **1,175,572** |
| rule citations | **10,575** |
| **density** | **9.0 per 1,000 — a rule number every ~110 words** |

⚠️ **MEASURE THE BODY, NOT THE FILE, AND REQUIRE THE WORD "RULE".** A bare `57.1` is indistinguishable from
a measurement.

### ⚠️ The corpus ranking is the WRONG comparison. Use the peer group.

The pilot's most useful finding. `team_play_and_culture.md` ranked **4th** corpus-wide, which reads as
unremarkable. **Against its own section it was an outlier by an order of magnitude:**

| off-the-ice | /1k |
|---|---|
| `team_play_and_culture.md` | **9.2** ⚠️ |
| `equipment.md` | **7.6** ⚠️ **next target** |
| `how_to_watch_hockey.md` | 3.4 |
| `conditioning_and_recovery.md` | 2.2 |
| `practice_and_development.md` | 1.5 |
| `mental_game.md` | 0.4 |

**A culture document at 9.2 beside a psychology document at 0.4 is the case. Brief the next twelve on their
peer group, not on the corpus rank.** Densest overall are `rules_primer.md` 14.7 (legitimately a reference),
`faceoffs.md` 14.2, `goaltender.md` 13.8, `body_contact_and_battles.md` 11.6.

### The test

**Does a player need this to play the next shift, or to not get hurt or ejected?** If yes, keep it,
compressed. If it is a four-book comparison, **move it to `rules_primer.md` and link.** If it is there to
prove the homework was done, **the Sources trailer already is that place.**

⚠️ **THE DUPLICATION IS THE UNLOCK.** The pilot's biggest wins were surveys `rules_primer.md` already holds
in more depth with the same quotations. ⚠️ **Verify the owner by READING the target section, not by trusting
a pointer** — and check the rule number exists elsewhere at all: **four numbers in the pilot document existed
NOWHERE else in the corpus**, so a link would have pointed at nothing and they were compressed in place.

### ⚠️ Three constraints the pilot discovered, which the first brief got wrong

1. ⚠️ **THE FACTS-LINE DESTINATION DOES NOT EXIST FOR OFF-ICE DOCUMENTS.** The style guide **excludes the six
   off-ice documents from ` ```facts ` blocks by name** — *"they are reference or off-ice material, and
   imperatives would misrepresent them."* `check_facts.py` covers **26 documents, not 37.** For those six the
   only destinations are **paraphrase in place** and **the trailer**.
2. ⚠️ **CUT THE ENUMERATION, KEEP THE INFERENCE.** The hardest passage was an ~800-word five-book survey that
   existed to prove *no book reliably protects your goalie* — which is the whole reason the convention
   matters. **The enumeration went; the load-bearing conclusion stayed.** ~230 words.
3. ⚠️ **RUN A REMOVED-QUOTATION-VS-CORPUS DIFF BEFORE FINISHING.** The pilot **broke non-negotiable 3 once**
   — it dropped *"[bench doors] must swing inward so they cannot be left protruding onto the ice"*, which a
   grep then showed existed **nowhere else in the corpus.** It restored it. ⚠️ **It surfaced only because the
   agent diffed removed quotations against the corpus rather than trusting its own hunks. Put that check in
   every brief.**

### ⚠️ What a compression costs, and who must see it

**A compression is new text, and it removes the hedging that made the original cautious.** The pilot said it
plainly: *"if the pre-existing text was wrong, my version is wrong more concisely and now reads as more
confident because the hedging quotations are gone."* **`rules-verifier` matters MORE after a compression pass
than before it**, and anything touching contact, technique, equipment or a penalty tier needs
`safety-reviewer`.

⚠️ **And density is a PROXY, not the ruling.** A document that discusses rules heavily **without numbering
them** scores zero and looks clean. **Read the next one before trusting its number.**

### ⚠️⚠️ THE HARD PILOT: measure the BODY, and the target is REPETITION as much as survey

`faceoffs.md` was dispatched as the hard case — second-densest in the corpus — with the instruction that the
most valuable finding would be **where the ruling does not apply**. It was.

**Split by layer, the headline dissolves:**

| layer | words | citations | /1k |
|---|---|---|---|
| Sources trailer | 6,306 (14%) | 321 (**29%**) | 50.9 |
| ` ```facts ` blocks | 6,766 | 230 | 34.0 |
| **body prose** | **31,992** | **538** | **16.8** |

⚠️ **The trailer is where the ruling says homework belongs; the facts layer is where it says the citation
belongs. The body was two points above corpus mean, not eight. The headline figure was mostly the file
OBEYING the ruling already.**

⚠️ **AND THE REAL DRIVER WAS NOT COMPARATIVE RULES WORK — IT WAS REPETITION.** One IHUK sentence quoted
**verbatim 12 times**; the same edition story (*2025/26 warned, 2026/27 ejects, IHUK settles it*) told at
**eight separate sites**, each time re-quoting the sources. **Deduplicated to 5 sites. Body 16.8 → 14.4,
corpus mean. 1,834 words cut.** ⚠️ **Look for repetition before looking for surveys.**

### ⚠️⚠️ WHERE THE RULING DOES NOT APPLY — read this before briefing any rules-heavy document

**Most of `faceoffs.md`'s density is EARNED, and compressing further would damage it.** The four-book cases
there are not a survey; **they are the instruction:**

- ⚠️ **A British centre who does exactly what the IIHF book says is in violation.** IIHF 76.7(IV) asks for
  *"at least the toe"*; IHUK requires *"the whole of their stick blades (not toe or heel)"*.
- ⚠️ **Four different answers to "where do I put my foot", and the wrong one ejects your centre** — NHL/IIHF
  permit a skate on the line, Hockey Canada counts it as encroachment, USA Hockey's Casebook says *"all
  sticks and all skates"*.
- Stick-down order: three answers across four books, deciding who shows their blade angle first.
- Kicking the puck back is legal in the NHL and a violation under the IIHF — **a technique a British reader
  must delete from their repertoire.**

⚠️ **The agent's own reason, which is the best statement of the limit anyone has given:** *"a faceoff is the
only moment in hockey where a TEAMMATE's positioning penalises YOU. The four-book comparison is how a reader
learns their winger can cost them the draw, and it cannot be compressed to one book without picking a book
for a reader you cannot see."*

✅ **AND THE DOCUMENT ALREADY HOLDS THE RIGHT PATTERN — copy it.** At *"The rule everybody gets wrong"* it
sets out all four books and then lands on: ***"The instruction that survives all four books is the short one:
keep your skates and your stick behind your own hash mark."*** **Set out the divergence, then land on what
survives it.** That is the model for every rules-heavy section.

### ⚠️ What is NOT the target

⚠️ **Non-negotiable 3 stands: never delete a claim merely because it is inconvenient.** ⚠️ **Non-negotiable 4
stands: an honest disclosure is not verbosity.** ⚠️ **THE RULE-SET FLAG IS NOT THE SURVEY.** *"Under USA
Hockey this is a minor"* earns its place — a reader penalised under the wrong book is the failure this
project exists to prevent. Three paragraphs comparing four books on a clause nobody will meet does not.

---

# Standing method guidance — read before dispatching

**These are the conventions that cost real time to learn. The archive carries the incidents.**

## The briefs are more defective than the corpus

⚠️ **Measured over round 74: four of the first five rows dispatched closed as REFUTED, not repaired — the
plan was wrong, not the corpus. The dispatcher's own briefs were wrong EIGHT times in three shapes:**

| shape | guard |
|---|---|
| **relayed a figure without re-deriving it** | re-derive every number before putting it in a brief |
| **relayed a citation ADDRESS** | a `grep -n` on a clause opener is not an address; quote and locate |
| **asserted a property of something not examined** | ⚠️ **a census scoped to EXCLUDE its subject cannot support a conclusion about its subject** |

**Every one was caught by the receiving agent, none by the dispatcher.** So: **give every agent the row as a
HYPOTHESIS and tell it to refute the brief before acting.** ⚠️ **And a REVIEWER'S REPORT is a brief too** — it
arrives looking like verified evidence, with file names and line numbers, which is what makes relaying it
unexamined dangerous. ⚠️ **The discipline is symmetric: re-derive a CORRECTION before accepting it.** One
agent's "correction" on 11 September was itself wrong.

**A row is a claim, and rows go stale.** Re-measure before briefing, even when a row says READY.

## What the coordinator does and does not do

- **Does:** plan and review writes, `sources/`, `scripts/`, censuses, the renderer, staging, committing.
  ⚠️ **A SHARED TOOL IS SHARED STATE — change it BETWEEN waves, never during one.**
- **Does:** answer what agents declare they could not reach. **That handover is usually the highest-value
  work available** — on 11 September it produced a rendered PDF figure that settled a safety question.
- **Does not:** review its own writing, or let a repair self-certify. ⚠️ **Two coordinator content edits in
  one commit drew the gate's ruling: *"a third goes to an agent."***
- ⚠️ **State what you DID, not why it was necessary.** An agent wrote a false reason for its own method into
  the corpus — *"read as page images because a text search cannot see them"*, when `pdftotext` reads them
  fine. **The conclusion was right and the stated method was wrong, and no checker can see that.**
  ⚠️ **And record the ACT, not only the finding** — a reviewer read a `sources/README.md` entry describing
  what a figure shows and still listed the render as unreached.

## Parallelism

**File ownership must be disjoint and stated — and stating it does not make it true.** Check who else holds a
file before writing *"you own X exclusively"*. When a finding lands in a file another agent holds, **message
that agent**. ⚠️ **Diff the WHOLE file at the end, not your own hunks** — that is how two mutually
contradictory sentences were caught, and how an agent found two defects in its own new text on 11 September.

⚠️ **Stage only what will not be edited again.** `SendMessage` to a finished agent RESUMES it.
`git diff --name-only content/` empty means index matches tree. **A checker pass while agents are live proves
nothing.**

## Build traps — each has produced a silent false pass

1. **The nvm shim is a zsh function.** Use `/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/{node,npm}`.
   `npm` is a shim too.
2. **`ls -ld site/dist` is not proof.** Step 1 of an eleven-step chain deletes `dist`, so a fresh mtime means
   only that step 1 ran. ⚠️ **Check the LAST step ran** — one `check-links:` line in the log — **and that
   `dist/sw.js` exists.** A build killed at `build:pdf` on 11 September left a fresh-mtime, 35-entry `dist`
   that `ls` called success.
3. **Astro caches the markdown transform.** `npm run build` runs `clean:cache` first; a caption verified
   without it is unverified.
4. **`build-diagrams.mjs` must run before `check_absolutes.py`** — that checker reads the build product and
   will refuse to certify a stale caption layer rather than pass on old text.
5. ⚠️ **If the commit's tree differs from the tree you built** — unstaged files in `site/` — **build a
   worktree reconstructed from the index** (`git worktree add --detach`, then `git diff --cached | git apply
   --index`). The gate blocks on this and is right to.

## The checkers

**Gates:** `check_links` · `check_facts` · `check_absolutes` · `check_geometry` · `check_secrets` ·
`check_counts` (`--update` last, after the final `content/` edit) · `check-arrivals`.

**Worklists — none has a `--strict` and none should gain one:** `check_external_links` · `check_rule_scope` ·
`check_pointers` · `check_chunk_splits` · `check_caption_negations` · `check_zones` · `check_tables` ·
`check_disclosures` · `check_diagram_quotes` · `check_chunk_tails` · `check_leaders` · `check_plan_rows`.
**`ls scripts/*.py` is the authority; this list goes stale.**

⚠️ **They are the floor. None can check whether anything is TRUE.** And three blind spots are known:
**nothing detects a PARTIAL QUOTATION** (Hockey Canada 7.3 was quoted in three places with the same half
dropped every time); **nothing checks a METHOD claim**; and **`check_caption_negations` covers captions, so
the `49f1dc6` inversion shape in PROSE has no check** — three instances were found by hand in one round.

## Sources

⚠️ **Read a source's entry in [`sources/README.md`](../../sources/README.md) before concluding anything about
what it contains.** An empty extraction is not an absence. An image-only PDF is ungreppable, not
unverifiable — render it with `pdftoppm`.

⚠️ **A healthy text layer is not a complete document.** `ibc.txt` sits at a reassuring 3.2% text-to-PDF
ratio, so every reviewer greps it and stops — while **Fig. 6 is a drawing of the boards posture the corpus
argues about.** Four times the answer has been in page images nobody rendered.

⚠️ **A source can be accurately quoted, correctly cited, and still wrong, because the BOOK IT DESCRIBES has
moved.** `ibc.txt` is built on the 2007-09 rulebook and relayed a 12-and-Under checking age that current Rule
604(a) prohibits. **The tell is the source's date, and `sources/README.md` does not carry dates for every
entry.**

---

# Open rows

**Grouped by theme. Detail for anything carried over is in the archive** —
[`plan_archive_2026-09-11_pre_consolidation.md`](../reviews/plan_archive_2026-09-11_pre_consolidation.md).

## Safety and rules — the highest-consequence group

### ⚠️ `center.md:327` carries Hockey Canada clause v flat — the same shape as the Critical just repaired in the Rink Map

Found by `commit-gate` on the twentieth pass, **outside that commit's diff and deliberately not swept into it.**

A ` ```facts ` line — **voiced alone, with 300 ms breaks either side** — carries Interpretation 3 to Rule
10.1(a) **clause v** flat (*"they will not be allowed to freeze the puck… No warning will be issued"*), and
**clause ii's save-then-cover carve-out appears nowhere in that document.**

⚠️ **This is the identical defect the Rink Map's §7 Critical turned out to be**, in the layer with the least
surrounding context. **The direction of harm is weaker** — the block addresses a forechecker about the
*opponent's* goaltender, not a goaltender about themselves — which is why it is a row and not an emergency.
`center.md:324` already carries the 27.6/27.9 propagation, so the document is not neglected.

**Before repairing, read `positions/goaltender.md` (the owner) and the Rink Map's repaired §7** — the corpus
now states this correctly in both, and the fix is to align, not to compose.

### ⚠️ `rink_map.md:400` states the goalkeeper-contact limit as an idiom where the Casebook states a test

`commit-gate`, twentieth pass, **explicitly not blocking** — recorded so the judgement is not lost.

The repaired sentence quotes the permission verbatim (*"can be legally checked"*) but renders the limit as
*"still never 'fair game', so play the puck, not the goalie"* — an idiom plus an instruction. **The same
Casebook answer states the operative test**: *"A penalty should be assessed in **every instance where
unnecessary or avoidable contact** is made with the goalkeeper – even when outside the privileged area."*

Key Takeaway 12 carries *"penalises any avoidable contact in the same answer"* — **but that is chunk 044,
voiced alone at the very end.** The gate's assessment: *"the one place a repair-correcting-an-overstatement
leans slightly past its finding. Six words would close it."*

### ⚠️ The 187-word trapezoid caption renders in a VISIBLE `<figcaption>`, and no one has seen it at 375 px

`site-reviewer` returned **PARTIAL** and **never reached the 375 px viewport** — declared in writing, so
coverage is satisfied, but it is the viewport where a caption grown from 29 to 187 words would show worst.
**Two occurrences in the built HTML, so it is not only the SVG `<desc>`.** ⚠️ **Check this before the next
site change, not after.**


### ⚠️ `rink_map.md:491` — the position table now sits at 13 characters of headroom. An ordinary edit costs a listener all six positions.

Opened 14 September 2026. **The mechanism is measured, not predicted: it already happened once in this
change and every gate passed on it.** A repair took the G cell to **234 characters against
`TABLE_MAX_CELL_CHARS` of 200**, and `md_to_speech` replaced the **entire six-row table** with *"It does not
read well aloud, so it is not narrated."* — costing a listener C, LW, RW, LD, RD and G. `check_links`,
`check_facts`, `check_absolutes`, `check_geometry` and `check_secrets` **all passed on that version.**

The cell was rewritten to 187 characters. **`check_tables.py --near` now lists this table at 13 characters
of headroom, where before the change it did not appear at all.**

⚠️ **"Not on `--near`" DOES NOT MEAN "has headroom".** The cell had 33 characters then. A coordinator brief
relayed the absence as headroom and that is what caused the drop. **Run the tool and read the number.**

**The 13 characters are the price of `[Goaltender](../positions/goaltender.md)` — 40 characters as raw
markdown** — and buying headroom back means dropping either that owner pointer or the book-divergence scope
flag. **Both were required by the safety constraint that made the cell shorter in the first place**, so this
is a genuine three-way trade, not an oversight. ⚠️ **Do not "fix" it by deleting the pointer without reading
`safety-reviewer`'s finding on why the cell had to stop asserting the geographic limb.**


### ⚠️ `rink_map.md:502` — *"out of the crease neither book needs pressure to penalise you"* is broader than USA Hockey's text

Found by `commit-gate` on the eighteenth pass and **ruled a row, not a block** — recorded here with that
reasoning so nobody re-litigates it.

The sentence is **exactly true** of Hockey Canada Interpretation 3 to Rule 10.1(a) clause v, and of USA
Hockey **614(c)(1)** (puck behind the goal line, body wholly outside the crease) and **614(c)(3)** (puck
outside the privileged area). It is **too broad for one gap**: a goaltender out of the crease, **in front
of the goal line, inside the privileged area**, not against the boards or frame, falls to **614(c)(2)** or
**610(b)** — and both of those **do** key on opportunity-before-pressure.

**Why it is a row and not a block:** HEAD carried the same breadth, so the change neither introduced nor
widened it; **the error runs in the cautious direction** (it tells a goaltender to expect a penalty where
one may not come, never the reverse); and the sentences following it name what is actually flat.

⚠️ **Do not "fix" this by deleting the caution.** The correct repair is to scope the claim to the limbs
that are genuinely location-only, which costs words on a page that was shortened for being too long — so
it is a judgement about that trade, not a tidy-up. **`goaltender.md` is the owner of the freezing rule and
should be read before this is touched.**


### ⚠️ *"Not a hittable player"* overstates every book that is cited for it. `zone_entries.md:1011`, and the same absolute in `rink_map.md`

Found 14 September 2026 by a propagation census run off a `safety-reviewer` handover. **The phrase is not
what the four books say, and the book most often cited for it says the opposite in terms.**

`content/systems/zone_entries.md:1011`, a Common Mistakes bullet — *"A goaltender out of his crease playing a
dumped puck **is not a hittable player**: all four books say he is not 'fair game' out there."*

`sources/usah_casebook.txt:11716`, USA Hockey Casebook Rule 607 Situation 5, answering **this exact question**:

> *"Although a goalkeeper **can be legally checked** when outside the privileged area, they are not
> considered to be 'fair game.'"*

⚠️ **"Not fair game" and "not hittable" are different claims.** What the books share is that **unnecessary or
avoidable** contact is penalised — not that the goaltender is untouchable outside the protected area. The
corpus has compressed the first into the second.

**The direction of harm is the dangerous part: it runs toward the GOALTENDER, not the checker.** A goalie who
believes they cannot be hit goes into the corner after a rimmed puck **unbraced**, and is legally checked
there. That is the least-protected player on the ice, chasing a puck, with no expectation of contact.

**Sites known:** `zone_entries.md:1011` (pre-existing) · `rink_map.md:400` and Key Takeaway 12 at `:623`
(*"not a hittable player in any book"*) — the Rink Map pair is being handled in the shortening change; **this
row owns `zone_entries.md`, which is NOT in that diff and must not be swept into it.**

⚠️ **Do not "fix" this by deleting the caution.** The instruction *"play the puck, not the goalie"* is correct
coaching and is the safe residue. The defect is stating it as a rule in all four books when it is not one.
**Scope it, or state what is actually shared and label the stronger version as coaching caution.**

**Census result, so nobody re-runs it:** these are the only two sites. ⚠️ **Two siblings state the neighbouring
claims CORRECTLY and are the models to align to, not to edit** — `technique/shooting.md:442` hedges the
crease-line screen (*"an appendix table, not rule text; and IIHF Rule 1.7 puts the line in the crease, so stay
off the line"*, with editions named), and `systems/forechecking_systems.md:719` carries the privileged area
*"not the corners"* **with both limbs of 607(d) Note 1**. Both are facts-layer lines, voiced alone, and both
are right.


- ⚠️ **USA Hockey's own speed caveat is in NEITHER boards document.** `ibc.txt:1498-1499` — *"The speed at
  which the players hit the boards must be managed"* — in the same lettered list the corpus quotes twice
  from. **The corpus now teaches that angling in is a safety skill because a limb meets the boards instead
  of your helmet; a reader can take that as licence to arrive faster.** Deliberately not written: the manual
  addresses a coach managing a drill, not a player choosing a speed. **Decide, then propagate to BOTH
  documents or neither.**
- **The route limb reached four documents and stops there.** `defending_the_rush.md`,
  `neutral_zone_systems.md` and the position files all teach gap and pursuit routes. **Whether any teaches a
  converging close without the limb is unchecked.** Next dispatch.
- **The shoulder limb is absent from ELEVEN posture-teaching captions** across nine modules, present in
  eight others. ⚠️ **Do not sweep — each turns on whether the caption teaches the posture as a full
  instruction or only gestures at it.** One module per agent.
- **The caption names THREE prohibitions and explains TWO.** USA Hockey names no injury for the shoulder tip
  and none may be invented. Either stop counting, or move the shoulder tip out of the triple.
- **CRT6, the 21-day bar and the British checking age** — carried from round 73; see the archive.

## Corpus-wide censuses nobody has run

- **18 rulebook-absence claims, never tested** — all phrase censuses.
- **12 facts-layer absence claims in six documents, none tested.**
- **73 absence-of-evidence disclosures in `rules_primer.md` alone**, 62 of them book-scoped negatives, none
  attacked. **The largest concentration in the corpus.**
- ⚠️ **"Nobody has counted recreational-league calls"** — upheld against `sources/` and `content/`, but **no
  web search was run**. Record it as *not falsified by the repository*, never as held.
- **Summary layers read aloud standalone:** 31 Common Mistakes and 31 Key Takeaways sections have never been.
  Seven documents were done on 10 September and produced six majors.

## Numbers and ownership

- ⚠️⚠️ **FOLKLORE, NOT A WORDING PROBLEM: the corpus teaches "walking the line" in at least THREE documents
  and has NO SOURCE for it anywhere.** Found 11 September 2026. One manoeuvre — a point player sliding
  sideways along the offensive blue line — was stated **seven times in three magnitudes and three units**:
  *"one or two steps"* (`shooting.md`), *"two or three strides"* (`offensive_zone_play.md`), *"three metres"*
  and *"two or three metres"* (`special_teams.md`, contradicting itself in two facts lines **both voiced
  alone**). ⚠️ **`grep` over all 60 files in `sources/` returns ZERO. The IIHF coach-development material's
  two candidate passages give no distance. Two of the documents' own cited articles were FETCHED and give
  none either** — one of them naming drills called *"Blue Line Shuffles"* and *"Lateral Blue Line Series"*
  without a figure anywhere on the page.

  **All seven repaired** by replacing the count with a **stop condition** labelled as craft — *"go until the
  blocker has to move their feet"*, *"keep going until a killer turns their head"*. ⚠️ **But the repair
  replaced a fabricated precision with UNSOURCED CRAFT that is honestly labelled and still unsourced.** The
  agent said it plainly: *"no search I ran could have told me it was wrong rather than merely unsupported."*
  **The upstream question stands and is the real row: a technique taught in three documents with no source
  is the folklore-propagation shape, and the style guide has no numeric-owner row for it — a row that owned
  the ABSENCE of a number is what would have stopped this.**

  ⚠️ **Two jobs, one action, and the SITE LAYER HAD ALREADY DRAWN THE DISTINCTION** — `pp-131`'s caption
  describes walking the line with no distance (the distribution job, changing passing lanes) while
  `shooting-lane-and-the-step` carries the owner's *"one or two steps"* (the shooting job, beating one
  blocker). **The prose was the only layer carrying metres.**

- **`special_teams.md:377` — *"a missed pinch puts you two strides deeper than a missed hold does"*.** Same
  species, reported not fixed. Nothing in `sources/` fixes it. **May be defensible as a rough comparative
  rather than a measurement** — needs `safety-reviewer`, since it is the argument for not pinching with one
  defenceman back.



- ⚠️ **No figure in the §9 penalty table can be verified from this repository.** No script, no cached JSON —
  `grep` for `2967` / `gamecenter` returns only prose. **Two agents ruled on what those figures support;
  neither could check they are right.** If the raw pull exists, breaking out the residual 28.6% would settle
  a question that is currently unanswerable.
- **The aggregation repair tripled the copies of `71.4%`** across borrower sites. Each carries its
  qualifications, so not a defect — but a number copied out of its owner goes stale silently. **Decide
  whether the figure-carrying form earns three sites.**
- **The IIHF and Hockey Canada exclude HOOKING from their stick categories too**, so a second of the seven
  also fails to sort. ⚠️ **Would strengthen the ruling — but the corpus calls hooking a stick foul elsewhere.
  Propagate or leave; do not do half.**

## Diagrams — the describe layer

- ⚠️⚠️ **"THE FIX REACHED THE COMMENT AND STOPPED BEFORE THE STRING A LISTENER HEARS." Found TWICE in one
  module on 11 September 2026, both times by an agent sweeping numerically rather than reading.**
  - `oz-low-to-high` told a screen-reader user the defenceman carries the puck **ten feet** along the blue
    line. The geometry draws **fourteen** — `point.y 20` to `dy 6`. The module's own comment already said so.
  - `oz-rotation-one-pass-later` said F2 is **five feet off the boards**. He is at y 33.5 against a dasher at
    42.5 — **nine**. Its comment already said so too, and named the cause: *"true only while half-wall.y was
    33"*.
  ⚠️ **`describe` is the ONLY access a blind reader has to the picture**, and `longDesc` serves them
  `describe + caption` — so a stale figure there is an accessibility defect, not a tidiness one.

- ⚠️ **THE REPAIR WAS BETTER THAN THE SPECIFICATION, and the reasoning generalises.** The brief said make the
  string say fourteen. The agent refused: **no layer of the owner fixes a distance** — §5 says only *"walks
  the puck toward the middle"*, §11 **deliberately refuses** a number (*"go until the blocker has to move"*).
  So fourteen is illustrative, and a flat *"fourteen feet"* would have been **an unhedged measurement in the
  one layer that reaches a blind reader**. It now states no distance: *"carries the puck in along the blue
  line, stopping short of the middle of the ice."* ⚠️ **If the owner fixes no distance, the `describe` states
  none.**

- ⚠️⚠️ **NEXT WAVE, SCOPED AND READY: 166 distance claims sit in `describe` strings across 27 modules, and
  only two modules have ever been checked.** ⚠️ **But there is a cheap high-yield probe**, because both stale
  strings had their correction already written in a neighbouring comment: **36 sites across 17 modules carry
  a comment recording a numeric correction.** Grep shape:
  `//.*\b(said|read|was true only|never reached|stale|should say|actually)\b.*\b\d+\b` near `ft|feet|\.y`.
  **For each, ask only: does the `describe` still state the OLD number?** Densest: `body_contact_and_battles`
  (6), `offensive_zone_play` (4, two now fixed), `positions` (4), `breakouts` (3), `defending_the_rush` (3).
  ⚠️ **ONE MODULE PER AGENT** — four agents were once sent to this tree in one round each believing it owned
  the files exclusively, and a rebuild published six captions nobody had read.

- **Reported, geometry, not fixed:** `puck: { at: 'half-wall:right', dx: 1, dy: 3.5 }` at
  `offensive_zone_play.mjs:305, 415, 528` resolves to **(70, 42.0)** with a glyph radius of 1.1 against a
  dasher at 42.5 — **the puck is drawn 0.6 ft outside the playing surface** in three units, merging with the
  boards line. Visible in a render. **Geometry, so the agent stopped rather than moved it.**

- **`special_teams.mjs:191`** justifies its drawn ten feet as *"the section's own three metres"*. ⚠️ **The
  section no longer says three metres** — it was repaired to a stop condition. The drawing is fine as a scale
  choice; **the justification must be re-anchored** to the pattern `shooting-lane-and-the-step` already uses
  (*"take the move from those words and not the distance from the picture"*).

## Tools

- ⚠️ **Should `check_absolutes` see the *"legal in every league"* shape?** The phrase was TRUE once its
  definition was attached, so a tool flagging it would flag a correct sentence — and a tool that ranked these
  and offered fixes is how round 44 manufactured a divergence that did not exist.
- **`md_to_speech.py` does not expand a multi-clause citation** — `640(b, c, d, e or f)`.
- **Bare roman-numeral clause markers are voiced as raw letters.** Eleven sit in one paragraph of
  `risk_management.md`. ⚠️ **Census first; a bare `(I)` may not be a clause marker.**

## Site

- **The `/reading-diagrams/` redirect paints a full-screen WHITE interstitial**, dark theme included. Nothing
  links to it and there is no back-button trap, so it fires only for a bookmark or a trimmed URL. Accepted;
  if fixed, match the `theme-init` background and ⚠️ **do not add a delay or a "click here"**.
- **`dist/analytics.js` ships a GA4 bootstrap** into a site whose posture is no third parties. Referenced by
  zero pages and inert — one meta tag from live. **A decision, not a defect.**
- **The `.table-scroll` horizontal cue is clear in light and hard to see in dark.** `figure.diagram--full` was
  deliberately given an always-drawn scrollbar for this reason; `.table-scroll` never got the same treatment.
- **The AudioPlayer degrades to a dead `0:00 / 0:00` control with no message** when its source 404s.

### ⚠️ THE SOURCES TRAILERS MIS-PARSE THEIR OWN EMPHASIS. 39 STRAY ASTERISKS ON 16 PAGES, LIVE NOW.

Found by `site-reviewer` reading the **built HTML**, 14 September 2026 — not by any checker, because **no gate
in this repository parses markdown**. Confirmed by census over `site/dist/**/index.html`, rendered article
text only: **39 literal `*` characters across 16 of the corpus's pages**, and **every one is inside a Sources
trailer**.

```
technique/shooting (4) · technique/body_contact_and_battles (4) · positions/goaltender (4)
off-the-ice/conditioning_and_recovery (3) · systems/special_teams (2) · systems/game_management (2)
systems/forechecking_systems (2) · systems/faceoffs (2) · positions/winger (2) · positions/center (2)
hockey-iq/playing_without_the_puck (2) · foundation/uk_rules (2) · foundation/rules_primer (2)
foundation/rink_map (2) · foundation/on_ice_communication (2) · foundation/language_and_glossary (2)
```

⚠️ **THE ASTERISK COUNTS ARE EVEN AND THE SOURCE LOOKS FINE. This is not an unbalanced-markers bug and a
count will not find it.** `rink_map.md:631` has **298 asterisks — even** — and still leaks two.

**The cause is CommonMark's delimiter-run rule, not a typo.** A whole trailer paragraph is wrapped in one
outer `*…*`, and inside it each quoted rule phrase is wrapped again in `*"…"*`. Where a nested quote opens
straight after a bracket — `(*"no penalty should be assessed"*` — that `*` sits **between two punctuation
characters**, which makes the run **both left- and right-flanking**. CommonMark then lets it match the
**outer paragraph's pending opener as a CLOSER**. Italics end early, the following prose inherits emphasis it
should not have until the next `</em>` resets it, and the run's true partner has nothing left to pair with —
so **it renders as a literal `*` on the page.**

⚠️ **Three of the four hits on a page are silent — only the fourth leaves a visible character.** So the
visible count *understates* the damage: `foundation/rink_map` shows 2 stray asterisks but **4 mis-scoped
quotes**. Grepping for `*` finds the loud ones and misses the rest. **Compare `<em>` scope, not asterisk
counts.**

**Two fixes, both in `site/`, neither a content edit** (this is rendering, not a claim — non-negotiable 1):

- **(a)** Stop wrapping the whole trailer paragraph in `*…*`; italicise the container in CSS instead. Removes
  the ambiguous outer context entirely, and is the only option that scales to a trailer of any length.
- **(b)** Switch the nested per-quote emphasis to `_"…"_` so the two delimiter characters cannot compete.
  Smaller change, but it is a convention every future trailer edit must remember.

⚠️ **Whichever is chosen, re-verify by RE-RENDERING and diffing `<em>` scope — never by reading the source.**
The source read fine for however long this has been shipping.

**Not introduced by the rink-map shortening.** ⚠️ **That commit DID later amend one trailer line** (the IIHF
Situation Handbook entry, 24,854 → 25,182 bytes), so an earlier "byte-identical" claim here is retracted.
**The measurement that settles it is the rendered page: still exactly 2 stray asterisks, in the same two
positions, both in the USA Hockey paragraph that commit never opened.** 15 of the 16 pages are untouched by it.

### ⚠️ Five captions on the Rink Map page are over the 10–30 word band, and three are not that page's to fix

Measured from the built `<figcaption>`s, 14 September 2026. Twelve sit at 23–29 words as intended. Five do not:

| Caption | Words | Defined in | Owned by |
|---|---|---|---|
| The goal crease | 82 | `rink_map_and_glossary.mjs` | this page — **deliberate**, carries the crease penalty |
| The trapezoid | 187 | `rink_map_and_glossary.mjs` | this page — **deliberate**, carries the delay-of-game minor |
| Icing gaining the line | 187 | `rules_primer.mjs` | **another page** |
| Defensive-zone draw alignment | 279 | `faceoffs.mjs` | **another page** |
| The roles rotate mid-shift | 382 | `forechecking_systems.mjs` | **another page** |

⚠️ **The bottom three are BORROWED diagrams**, embedded on the Rink Map page but defined and primarily used
elsewhere. **A caption is a single shared string** — shortening them to satisfy the Rink Map rewrites three
other documents' pages, and the two longest each carry an inline ⚠️ rule-divergence or classification warning
that **has nowhere else to live for a listener**, since `md_to_speech.py` voices the caption and **not** the
`describe`. So this is a **design decision for the owner**, not a tidy-up: either accept that a borrowed
diagram keeps its owner's caption length, or give diagrams per-page caption overrides.

**Not a defect in the rink-map shortening** — those three captions were never in its scope or its diff.

## Podcast — COMPLETE

✅ **Published to Spotify and Apple Podcasts.** The feed, the per-section `.m3u` playlists, the downloads
page, the CDN invalidation and the episode metadata are all done and live. **The 3,796-line tier is in the
archive.** ⚠️ **One thing remains:** the Apple Podcasts show URL is not on `/downloads/` — the Subscribe
block links the feed and Spotify only. **Add it, with a `link_baseline.tsv` row so `link-check.yml` notices
if it dies.**

### ⚠️⚠️ THE PUBLISHED PODCAST IS BEHIND THE CORPUS ON 35 OF 38 EPISODES. The header above says COMPLETE. For the audio layer it is not.

Measured 14 September 2026 by re-running `md_to_speech.py --out` to a scratch directory and **comparing the
per-chunk `sha256` in each `scripts/speech/*/manifest.json` against a fresh render**. This is exact, not an
mtime guess. ⚠️ **The mtime guess was WRONG** — it flagged 36 documents; two of those (`on_ice_communication`,
`positions__center`) render **byte-identical spoken text** and must not be re-billed. **16 source files share
one 12 Sep 08:01 timestamp, so a single sweep inflated the mtime signal.** The whole corpus re-renders in
**9 seconds**, so there is no reason to ever guess this again.

| | documents | billed characters |
|---|---|---|
| Spoken text **identical** — do not re-bill | 2 | — |
| Spoken text **changed** | **35** | |
| — full re-synthesis of those 35 | | **6,027,392** |
| — **only the chunks whose hash changed** | | **1,974,258** (**32%**) |

**The delta is the finding.** Two thirds of a full re-synthesis would re-pay for audio that is already
correct. The spread is wide and it is not proportional to document size: `hockey-iq__risk_management` has
**3 new chunks of 81** (8,206 chars against 184,202 for a full run — **4%**), while `foundation__rink_map`
after this cut has **39 new chunks of 44** and is effectively a whole new episode. ⚠️ **An earlier version of this row said 43; the staged text renders to 44, verified twice.**

⚠️ **WHETHER A DELTA RUN IS POSSIBLE IS UNVERIFIED, AND THE ANSWER IS NOT IN THIS REPOSITORY.** The manifest
carries a `sha256` per chunk and each chunk is its own `NNN.ssml` file, so the *inputs* are addressable. But
**the TTS synthesis step is not in this repo** — `md_to_speech.py` stops at SSML, `build_podcast_audio.py`
encodes existing **masters** to web m4a, and `upload_podcast_audio.sh` ships them. **Nothing here turns SSML
into a master.** So "regenerate 32%" is a property of the data, **not a demonstrated capability of the
pipeline**. Establish that before quoting the saving as a plan.

**The feed itself is correct and must not be "fixed".** 37 items, one rink-map episode, title updated to
**"Rink Map"**, while the **GUID and enclosure URL keep the old `rink_map_and_glossary` slug**. ⚠️ **That is
deliberate: changing a published episode's GUID or enclosure re-downloads it for every subscriber or orphans
it in their app.** The staleness is in the audio behind the URL, not in the addressing.

⚠️ **Nothing detects any of this.** `check_links` passes because the feed's URLs resolve; no tool compares a
manifest against its source; and the episode title being current makes the listing *look* current. **Audio is
the only layer where this corpus can silently serve text that no longer exists** — and it is the layer with
the most listeners per correction, because a listener gets one sentence with no surrounding context.

Also recorded so nobody re-investigates: **`scripts/speech/foundation__rink_map_and_glossary/` is an orphaned
manifest directory** whose `source` names a file that no longer exists — the only dangling manifest source of
the 38. Six comments in `check_geometry.py`, `check_disclosures.py` and `check_zones.py` still name the old
`.md` path; **comments only, no behaviour.** ⚠️ **`site/src/diagrams/rink_map_and_glossary.mjs` keeps its
name legitimately — it is a real file and must not be swept.**

---

# Readability and dual-audience — rows opened 14 September 2026

Opened by the release-one work on
[`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md). **Evidence for every row is in
`project/reviews/readability_*_2026-09-14.md`** — the baseline, the wave-1 findings and layer spec, the
rules verification, and the disclosures-and-corrections record. **Read the owner, not this summary.**

⚠️ **The shape of the round, recorded because it should change how the next one is planned: the release was
scoped to TWO documents, and the verification the plan itself demanded found defects in ELEVEN more. None
was in a plan row.** The single highest-yield action was an agent briefed on one file that went looking for
siblings anyway and found four, including one that appeared in no brief, no plan row and no verifier report.

## ⚠️ Method rows — these are about the coordinator, not the corpus

| | |
|---|---|
| ⬜ | ⚠️ **THE CENSUS BELONGS BEFORE THE DISPATCH.** A verifier finding about shorthanded icing was relayed into four briefs **over-broad**, and the one-command `grep` over `content/` that refuted it was run only after the third agent was already working. It also found three more sites at the same time. **`review_process.md` says "a reviewer's quotation is evidence, not verification… re-derive before any quoted string enters `content/`". It does NOT say *including one you are only putting in a brief*, and on this evidence it should.** Owner: `review_process.md`. |
| ⬜ | ⚠️ **A SECOND RELAY ERROR, CAUGHT BY AN AGENT.** The coordinator described IIHF Rule 101.1 as barring body checking in **all** women's hockey. It does not — it allows it where the puck is the clear object and bars using the boards to eliminate or pin. Had it been carried, `rink_map.md` would have told every woman reading it that her book bans checking, **and `switching_positions.md` already states it correctly, so a later consistency sweep would have corrected the right document into the wrong one.** |
| ⬜ | **Three agents refuted a coordinator premise this round and every refutation was correct.** The `rules_primer.md` agent alone refuted **five**, including that the §10 table has no Hockey Canada column at all and that the table was already dropped, which made one instruction meaningless. **The instruction to attack the brief is doing the work the record says it does. Do not weaken it.** |

## Tool and renderer rows — ⚠️ change a tool BETWEEN waves, not during one

| | |
|---|---|
| ⬜ | **`0:00` is spoken as "zero minutes".** `scripts/md_to_speech.py`'s `_clock_words` suppresses the seconds when they parse as falsy, and `float("00")` is zero. Correct for `2:00`; odd for a countdown. **Four agents hit it independently today and all four rewrote around it.** Decide whether the renderer should special-case it. Sites remain in `language_and_glossary.md` and `goaltender.md`. |
| ⬜ | **`check_disclosures.py` misreports the layer for Sources-trailer lines.** It classed five `rules_primer.md` trailer lines as `body`; **none is voiced**, confirmed by grepping the rendered speech for five distinctive strings and getting zero matches. `is_voiced` accepts a line on any seven-word run matching anywhere in the speech, and trailer lines are the longest in the corpus, so the collision is near-certain. |
| ⬜ | **`check_disclosures.py` has no `--content` flag**, so an agent forbidden to touch the working tree cannot get a before/after delta. Either add one or stop asking for the delta. |
| ⬜ | ⚠️ **`CLAUDE.md:479` says "37 documents in eight DIRECTORIES" while `CLAUDE.md:3` says "A corpus of 38 documents".** The two disagree inside one file and **`check_counts.py` cannot see it** — neither `DOC_PATTERNS` anchor matches, because one cannot cross the full stop in *"The corpus. 37 documents"* and the other requires the word *sections*, not *DIRECTORIES*. |
| ⬜ | **`CLAUDE.md`'s `check_tables` figures are stale, as that passage predicts of itself.** Measured today: **3 dropped, 45 read aloud.** The passage says "20 dropped against 26". ⚠️ **It also still names `body_contact_and_battles.md` as the zero-headroom table; it is `rules_primer.md`, now at `:770` after 14 lines were inserted above it.** |

## Content rows

| | |
|---|---|
| ⬜ | ⚠️ **`## Check yourself` — 34 documents carry the non-optional preamble, 2 pilots were repaired.** All 36 were byte-identical before today. **THE SWEEP DIRECTION IS: correct the 34 toward the pilots, NEVER the pilots toward the 34.** The section is **voiced**, so a listener is asked eight questions with no answer layer and no way to opt out. Not swept in release one because the plan bounds it and 34 files of new unreviewed text is what it forbids. **The two pilots' wordings also differ from each other and should be reconciled first** — one names a count ("these eight questions"), which is brittle. |
| ⬜ | ⚠️ **Nine documents state the shorthanded-icing "two carve-outs" accurately but WITHOUT the timing test.** Not wrong, incomplete — and they were left that way deliberately. `breakouts.md` (4 sites), `defensive_zone_coverage.md`, `center.md`, `defender.md`, `winger.md`, `puck_support_and_spacing.md`, `scanning_and_anticipation.md`, `neutral_zone_systems.md`, `zone_entries.md`, `game_management.md`. **Hockey Canada's Note 1 to 6.7(b) and CARHA's Note 2 to 65(a) appear in only two documents corpus-wide.** |
| ⬜ | **CARHA Rule 49(a) has no owner.** It **inverts** the hold-your-ground rule the other four books protect — a minor, or a major on injury, for a player who *"stands in front of an opponent for the purpose of making contact, and/or does not avert body contact"*. CARHA governs adult recreational leagues, one of this corpus's two named audiences, and **no document states this as a general fact about adult rec hockey.** |
| ⬜ | **The anticipation principle has no owner and is stated two ways at Key Takeaway prominence.** `scanning_and_anticipation.md` has *"Guessing is acting on hope"* with a one-question test; `risk_management.md` has *"Gambling is acting on hope"* with a three-question test. Neither cites the other. **No `Convention:` label, no source, no owner row.** It is the corpus's cleanest transferable decision rule and its least audited. |
| ⬜ | **`puck_support_and_spacing.md` §4 and §5 use "level" to mean two different things, in adjacent sections.** §4: same distance from your own net, across the ice. §5: neither goal-side nor puck-side. **§5 warns its vocabulary trips people up and does not mention the section immediately above it.** |
| ⬜ | **`body_contact_and_battles.md`'s "most common defensive-zone breakdown" is stronger than anything its owner asserts.** `defensive_zone_coverage.md` claims only that most breakdowns are not *effort* failures and never ranks them. Labelled honestly rather than cut; **the superlative may belong in the owner or nowhere.** |
| ⬜ | ⚠️ **Seven documents cite Hockey's Arsenal**, several with provenance chains of exactly the kind that failed on `zone_entries.md` — where the corpus reached Chatel through a restater while the author's own post was live and carried the sample size the restater lacked. `offensive_zone_play.md` and `shooting.md` named as most at risk. **Unaudited.** |
| ⬜ | **The Sznajder 0.66/0.29 pair has two restaters giving two different provenances and no located primary.** Chatel credits a RITSAC 2018 presentation; Hockey's Arsenal dates it 2014-16. Sznajder's own archive does not carry the figures and **`ritsac.org` does not resolve.** |
| ⬜ | **`getting_started.md` Key Takeaway 7 is two takeaways welded together** — neck protection, then facial protection by nation. Splitting gives 11 items, over the style guide's stated 5–10, **and re-derives every rule claim in both halves.** Declined twice by the agent as out of scope; recorded with that specific proposal. |
| ⬜ | ⚠️ **`rules_primer.md`'s Common Mistakes is 10,644 words and WENT UP this round.** The agent measured 10-word-shingle overlap against the body for every bullet and found the overlap is **scope qualifiers, not prose** — so shortening means deleting a book name, a division carve-out or an honest disclosure, which is the operation that produced round 38's criticals. **Its conclusion: a shorter Common Mistakes here is a NEW LAYER, not a compression** — the same finding the review record reached for the 600-word primary path. |

## Release-one rows still open

| | |
|---|---|
| ⬜ | **The U10/player-parent homepage entry point is built but does not render.** It sits in `site/src/data/pathways.json` as `status: "draft"` and is filtered out. The corpus has real material for a parent but **no route written for that reader** — Route 2 addresses a parent only as a sub-case. **The plan is explicit that a U10 reader label holds only after a named safety reviewer verifies jurisdiction, contact rules, equipment assumptions and supervision context.** That review has not happened. |
| ⬜ | **`site/src/data/audience.json` carries `status: "draft"` on every age, league, contact, supervision and safety field for both pilots.** Draft means no named reviewer has cleared what it asserts. **36 documents are explicitly `unclassified`, not overlooked.** |
| ⬜ | **Schulte et al. (2017), doi:10.1007/s10618-017-0496-z — UNREACHABLE, not absent.** Springer 303s to a cookie wall, the browser was blocked from the domain, Semantic Scholar confirms `isOpenAccess: false` with no open PDF. It is titled *"…valuing actions, **locations**, and team performance"* and is the most likely remaining falsifier of the turnover-location disclosure. **The open Routley MSc thesis was read instead: it values actions by zone but publishes zone splits for faceoffs only.** |
| ⬜ | ⚠️ **`rules_primer.md:848`'s six-column, 23-row table is dropped from the audio and costs a listener 5,616 readable words — 69% of §10.** It was read against its surrounding prose this round: **22 of 23 rows survive in voiced form; one did not**, and that one was penalty-bearing (two equipment misconducts eject you in Britain with no foul against anybody). **That gap is now voiced. The table was not deleted or split, deliberately** — a wide comparison table that cannot be read aloud is often the correct state. |
| ⬜ | **The principles index is unchecked by construction.** `check_facts.py`'s `IN_SCOPE_LAYERS` excludes `foundation/`, so any ` ```facts ` block in `content/foundation/core_principles.md` gets **no mechanical check at all** and needs `facts-reviewer` by hand. |

## ⚠️⚠️ THE FINDING OF THE ROUND — a repair pattern that removes its own safety net

**Opened 14 September 2026, by the `content-reviewer` pass over the readability release. Read this before
repairing any absence claim, anywhere in this corpus.**

This corpus makes absence-of-evidence claims — *"no study was found"*, *"nobody publishes a ranking"*. Round
59 established that they must be **attacked**, and `scripts/check_disclosures.py` exists to list them so they
can be. This round attacked four and found two defective.

**The repairs replaced each failed search with an asserted MECHANISM** — a sentence saying *why* no
measurement exists rather than *that none was found*. That looks strictly stronger, and the agents that wrote
them said so: *"it says WHY no count exists instead of asserting that none was found, which is strictly
stronger and is not vulnerable to the failure where every attacked absence claim has turned out false."*

⚠️ **It is the opposite. The reviewer stated the general lesson:**

> **Converting an absence claim into a mechanism removes it from the corpus's own disclosure worklist while
> making it a stronger claim.**

**`check_disclosures.py` searches for absence vocabulary.** The moment a sentence stops saying *"not found"*,
**the tool stops seeing it** — exactly when the claim became harder to defend. The reviewer ran it and
confirmed **it flags none of the four new mechanism sentences.**

**And two of the four were false on arrival, both falsified from inside reach:**

- `risk_management.md` asserted *"a bad pass out of your own zone is not a category anything counts"* — while
  **a table 130 lines above it in the same document** prices *"Failed dump-out of your own zone ≈ 0.003 xG"*,
  and its own Sources trailer cites **roughly 230,000 tracked zone exits split by whether the exit succeeded.**
- `playing_without_the_puck.md` asserted that penalties and puck events **exhaust** what is counted in amateur
  hockey — falsified by a study in **the bibliography of the document it names as its authority**: 249
  video-coded head-contact events across 48 amateur games, **~67% of them within the rules**, so neither a
  penalty nor a puck event. ⚠️ **And the consequence is not pedantic: if researchers can video-code 48 amateur
  games, the reason nobody has ranked amateur off-puck errors is that NOBODY HAS DONE IT — not that only two
  things get counted. The mechanism was not the reason.**

| | |
|---|---|
| ⬜ | **Decide what the rule is.** Candidates: a mechanism claim must cite the source that establishes the mechanism; or it must keep an absence clause so the tool still sees it; or `check_disclosures.py` grows a second detector for *"what is counted is X and Y"* shapes. **None of these is obviously right and the choice is the owner's.** |
| ⬜ | **Audit the mechanism sentences this round created**, in `risk_management.md` and `playing_without_the_puck.md`. Repairs dispatched; **the repairs are themselves new text and have not been reviewed.** |
| ⬜ | ⚠️ **The narrow true proposition both borrowers overreached from is `neutral_zone_systems.md`'s**, which is sound and carries its own limits — *"Both are NHL, and one is a single hand-tracker's data"*. **It is about BREAKDOWNS, not about what gets counted at large, and every borrowing of it so far has widened it.** |

### Smaller rows opened alongside it

| | |
|---|---|
| ⬜ | ⚠️ **The technique cue *"your shoulder and hip turn toward the checker"* appears in exactly THREE places in the corpus, all in `rules_primer.md`, and is in NEITHER the owner document (`body_contact_and_battles.md`) nor any source on disk.** It is compatible with everything around it and contradicts nothing — **and that is the entire extent of what can be said for it.** A body-position instruction at twenty miles an hour, with no owner and no source. |
| ⬜ | ⚠️ **CORRECTED, and the correction is the row.** A coordinator brief said the five books state the icing timing test in two shapes — NHL and IIHF timestamping the **penalty expiry**, USA Hockey, Hockey Canada and CARHA timestamping the **shot**. **The agent that checked it found that mis-assigned THREE ways:** NHL and IIHF 81.6 timestamp **both** (the expiry *and* the release of the puck); USA Hockey 624(b)(1) timestamps **both in one sentence**; and **Hockey Canada's Note 1 timestamps the EXPIRY, not the shot** — it is 6.7(b) itself that timestamps the shot, so the brief named the wrong limb of the right rule. ⚠️ **The agent had already drafted the brief's version into `content/` and caught it against the text before shipping.** The surviving true point is narrow and still worth having: **a verifier grepping ONE book's sentence across the others gets zero and would report a false absence**, because the books say the same thing in their own words. |
| ✅ | ⚠️ **CLOSED, and the closing correction matters more than the row did.** A verifier reported CARHA 49(a) as *"inverting the hold-your-ground rule outright"*. The coordinator relayed that into a review record and into `rink_map.md`. **It was over-broad**, and the coordinator's own first correction — *"CARHA writes both sides and does not reconcile them"* — **was also wrong.** The agent holding the file read both rules and found **they are not in tension at all**: 66(a) Note 2 is a note to an **interference** rule, whose operative limb is impeding a player *not in possession* — so it is CARHA's structural counterpart to NHL/IIHF **56.1**, which is also an interference rule. 49(a) is a separate **body-contact** rule, every limb qualified by intent, with **49(c)** excusing accidental contact outright. **Standing still to take away a lane is permitted; standing there to be hit is not. Both hold at once.** What is genuinely distinctive is narrow: 49(a)'s third limb adds a duty with no NHL/IIHF counterpart — it does not withdraw the entitlement, because the same book grants it. ⚠️ **And the coordinator's "the verifier counted IIHF twice" was the wrong diagnosis too: the PHRASE `not required to move` is in three books, but IIHF 101.1 is a REAL second, independently-worded hold-your-ground provision** (*"A Player, who is stationary, is entitled to that area of the ice"*), and **USA Hockey states the entitlement three times in three wordings, none of them a numbered rule** — so a phrase-count found one of five provisions and missed four. **Three successive coordinator framings of one rule, each wrong in a different way, each caught by the agent that had read the book.** |
| ⬜ | **`center.md` and `site/src/diagrams/center.mjs` were DELIBERATELY not swept** to match `risk_management.md`'s repaired turnover disclosure. Their claim defends **the middle of your own defensive zone**, which the study in question never prices — it prices the offensive blue line. **Treating them as the same defect would be the consistency sweep that corrects the wrong document.** They may still want the *"say what was searched"* treatment. |
| ⬜ | **`special_teams.md` and the six propagated documents now both call the icing exemption "conditional" but count the conditions differently** — one states a total, the others deliberately avoid one. Both defensible; **a post-wave cross-file read is the only thing that settles whether they clash read aloud.** |

### ⚠️⚠️ EVERY `## Check yourself` SECTION MAY BE A NULL-EFFECT EXERCISE IN THE SPOKEN LAYER

**Opened 14 September 2026 by the agent repairing two of them. It is a question about the FORMAT, not
about any sentence in it, and no edit inside any single document can surface it.**

These sections rest on retrieval practice, and the corpus states the evidence honestly at its owner,
`off-the-ice/practice_and_development.md`: Rowland's 2014 meta-analysis, **159 effect sizes, g = 0.50,
95% CI [0.42, 0.58]** for testing over restudying. ⚠️ **But the same meta-analysis has a no-feedback cell
at g = 0.03, 95% CI [−0.21, 0.27]** — an interval straddling zero. The effect is in the *checking*, not in
the attempting; the corpus's own instruction says so: *"answer them before you read on, be willing to be
wrong, and then go and check."*

⚠️ **A LISTENER CANNOT GO AND CHECK. The audio has no answer layer at all.** They hear *"the section named
with each question is where you get it"* and cannot go there.

**So in the spoken rendering these sections plausibly sit in the g = 0.03 cell while carrying the
language of the g = 0.50 one.** 36 documents have one. They are **voiced**, and this release has just
spent effort making two of them *audibly optional* — which mitigates the instruction but not the format.

| | |
|---|---|
| ⬜ | **Decide what the spoken form of a self-test is.** Options include: an answer layer after the questions; dropping the section from the speech render as `## Notes on verification` already is; or saying in the spoken preamble that the answers are on the page. **Each is a different bet and none is obviously right.** |
| ⬜ | ⚠️ **Whatever is decided, the two qualifications the owner carries must travel with it: 18% of Rowland's effect sizes were NEGATIVE, and the benefit is a RETENTION benefit — g = 0.41 under a day against g = 0.69 at a day or more.** So *"skipping costs you nothing"* is false **and** *"skipping costs you 0.50"* would also be false. The repaired preambles assert neither, deliberately. |
| ⬜ | **A preamble template now exists in three files** — `rules_primer.md`, `getting_started.md`, `special_teams.md` — and **the third was adopted from the first rather than invented**, so the corpus has one form rather than three variants. **The remaining 33 still carry the old imperative.** Sweep direction unchanged: correct the 33 toward the template, never the reverse. |
| ⬜ | ⚠️ **Q2–Q7 of `special_teams.md` and Q1–Q8 of `getting_started.md` were checked only for staleness caused by TODAY's edits.** Their premises were not re-attacked against their own sections. **A question that was already wrong before today survived that pass unseen**, and this corpus has shipped exactly that defect before — commit `c8ab508` records one. |

### ⚠️ CHUNK HEADROOM IS PER-SECTION, AND MEASURING ONE SECTION TELLS YOU NOTHING ABOUT ANOTHER

**Measured 14 September 2026, by an agent that hit it.** A brief handed it a headroom measurement for
`rules_primer.md`'s `## Key focus` — **321 characters free of `MAX_BILLED_CHARS = 2800`**, with the first
split modelled at about +90 words. It added twelve words to a **Key Takeaway** instead, and **that section
was ~10 characters from the limit**: the document's closing sentence, *"Ask, and ask before your first
shift."*, was silently pushed into **a 37-character chunk of its own**. Chunk count went 235 → 236. It
tightened the clause twice to get back inside.

⚠️ **Nothing warns you.** `check_facts.py`, `check_links.py` and `check_absolutes.py` all pass on a
document whose closing imperative has just become a standalone fragment. **Only rendering and comparing the
chunk count sees it.**

| | |
|---|---|
| ⬜ | **Say this in the brief whenever an edit adds words to a voiced layer**: render before, render after, compare the chunk count — **per section, not per document.** |
| ⬜ | **A `check_chunk_splits.py`-adjacent check could catch it cheaply**: flag any chunk under some small length, since a 37-character chunk is almost always an accident. **Worklist, not a gate** — a genuinely short final section is legitimate. |
| ⬜ | ⚠️ **Two boundary moves were ACCEPTED in `rules_primer.md` after checking nothing safety-bearing was severed**, and one of them left a stray pointer — *"Body Contact and Battles covers how to take one."* — at the head of the next chunk, heard alone before a topic change. **That chunk is at 2,769 of 2,800, so the pointer cannot be pulled back without cutting something else.** A `check_pointers.py`-shaped orphan created by a repair, recorded rather than hidden. |

### Pre-existing: three documents give USA Hockey's checking classifications as a CLOSED list

The release fixed this in `rules_primer.md` (a `safety-reviewer` blocking finding) and in `rink_map.md`
(our own new text). ⚠️ **A coordinator census found the same shape in three documents this release did not
touch**, each citing 604(a)'s classifications with **neither** the local-governing-body clause (*"may
prohibit body checking in any classification"*) **nor** 604(b) (*"any time a team from a Competitive
Contact category … plays a team from a Body Checking category, body checking shall be prohibited"*)
anywhere in the file:

| File | Site | Shape |
|---|---|---|
| `systems/faceoffs.md` | ~`:576` | a ` ```facts ` `Rule:` value — **voiced alone** |
| `reading-diagrams/reading_ice_hockey_diagrams.md` | ~`:11` | the header blockquote |
| `systems/neutral_zone_systems.md` | — | cites 604(a) in charging material; **read it before assuming it is the same shape** |

⬜ **Not repaired in release one, deliberately**: the plan bounds the release, and each of these sits beside
an *"ask your league"* instruction, which is the safe act. ⚠️ **But a reader who has just been told in a
closed list that their classification is fine has no reason to ask.** The `faceoffs.md` one is the worst
because it is voiced alone. **Read each before fixing — a bare count is not the defect shape, and that is
how the census produced four candidates of which only one was ours.**

### Two unowned superlatives found while repairing their neighbours

| | |
|---|---|
| ⬜ | ⚠️ **`technique/body_contact_and_battles.md:1001`, voiced: *"The commonest amateur error in the corner is two teammates fighting the same opponent for the same puck while a third opponent skates away with it."*** Same defect class as the one repaired thirty lines below it — **no owner, no qualifier, no source.** The agent left it deliberately: *"fixing it would be exactly the sweep the brief forbids, and I have not traced it to an owner."* ⚠️ **Note the pattern: a superlative was repaired at `:1024` and `:1030` and an identical one thirty lines away was NOT, because one was named in a brief and the other was not.** A census of `commonest`/`most common` in voiced layers is the row this suggests. |
| ⬜ | **`hockey-iq/puck_support_and_spacing.md`'s replacement hedge — *"the corner is one of the places that ambiguity lives"*, and its sibling *"one of the off-puck failures coaches name most often"* — are the AGENTS' OWN wording**, written to replace superlatives. **Neither is sourced.** Both authors flagged their own: *"a reviewer should ask whether it needs one."* ⚠️ **A hedge written to replace an overclaim is still new unreviewed text making a claim about coaching consensus.** |

### ⚠️ A diagram caption went stale against its own document TWICE in one day

`site/src/diagrams/puck_support_and_spacing.mjs` carries a claim the document owns. The document was
repaired in the morning and the caption still carried the superseded wording — found only because an agent
noticed the renderer puts the caption and the repaired sentence **in the same spoken chunk**, so a listener
heard the false form and the correction back to back. The coordinator fixed it. **The document was then
rescoped AGAIN in the afternoon and the caption went stale a second time**, found the same way.

| | |
|---|---|
| ⬜ | **The style guide already says to grep `site/src/diagrams/` when repairing a claim in prose. It was not applied, twice, on the same claim.** Whatever mechanism is added, the failure is not ignorance of the rule. |
| ⬜ | ⚠️ **`check_absolutes.py` refuses to certify the caption layer when a `.mjs` is newer than the build product — that worked, and an agent hit it today.** What nothing detects is a caption that is **stale against its own document's prose** while the build is perfectly fresh. **That is a different check and it does not exist.** |

### Environment fact — the Chrome extension times out and needs re-authenticating

**Recorded 14 September 2026, from the owner.** The `claude-in-chrome` extension **periodically times out and has to be
re-authenticated**, which the owner can do quickly. While it is timed out, **every `navigate` and every screenshot
returns `"Could not verify this site's safety category. Blocking as a precaution."`**

⚠️ **The failure does NOT look like an auth failure, and that is the trap.** It names the *site*, so the obvious
reading is that the URL is the problem. A `site-reviewer` lost roughly twenty minutes to it today across nine
attempts on three tabs and four URLs before establishing the real cause the only way that works: **`https://example.com/`
fails identically.** If localhost and example.com both fail, it is the extension, not the site and not the port.

| | |
|---|---|
| ⬜ | **Put the one-line diagnostic in any `site-reviewer` brief**: *try `example.com`; if that fails too, the extension needs re-authenticating — stop and say so.* ⚠️ **It cost a whole review pass today, and gate condition C10 went unmet for a session because of it.** |
| ⬜ | **A blocked browser means C10 cannot be met.** Do not let static analysis stand in for it — the blocked reviewer was right to refuse, and said so: *"I would not clear C10. Not because I found a critical — because the dimension was not exercised."* |

### ⚠️⚠️ A NOTE READ ALONE SAID THE WRONG THING, AND FIVE AGENTS VERIFIED IT INDEPENDENTLY

**14 September 2026. The best available explanation of how one error entered the corpus, propagated to nine
documents, and survived five separate re-derivations from primary text.**

The claim: *"the shorthanded icing exemption ends the instant the penalty expires."* It is **false on a
5-on-3** — when the first penalty expires you are 4-on-5, still below the opponent's numerical strength,
still exempt in all five books.

⚠️ **But Hockey Canada 6.7(b) Note 1, read entirely alone, says exactly the wrong thing:**

> *"A team will no longer be considered shorthanded once the penalty time expires, irrespective of whether
> or not the penalized player has left the Penalty Bench."*

**Flat. No head-count. No qualification.** It is completed only by two other limbs in the same book — **6.7(b)
itself**, the rule the Note annotates, which carries the head-count test (*"below the numerical strength of
the opposing team at the instant the puck is shot"*), and **Interpretation 3**, whose *"on the ice, **for the
purpose of equal numbers (or not)**"* is the parenthetical that does the work.

⚠️ **The corpus cited "Hockey Canada 6.7(b) Note 1" BY NAME as its support. FIVE agents re-derived that
citation from primary text today. All five confirmed it. All five were right about the Note and wrong about
the rule — because none read the Note against the rule it annotates.**

**The defect was not laziness and it was not a bad grep. Every one of those verifications was competent.**

| | |
|---|---|
| ⬜ | ⚠️ **A NOTE, AN INTERPRETATION, A CASEBOOK SITUATION OR A GLOSSARY ENTRY IS NOT A RULE — IT ANNOTATES ONE. Verifying it in isolation verifies nothing.** Owner: `review_process.md`'s G-series, beside the existing *"re-derive from the book"* instruction, which this defeats as written: the agents DID re-derive from the book. |
| ⬜ | **The general form: when a citation is to a sub-element — Note, Interpretation, Situation, glossary — the verification is not complete until the PARENT has been read.** ⚠️ **And the failure is silent: the sub-element is quotable, verbatim, and says what the corpus says it says.** |
| ⬜ | **Two collateral mis-citations found by the same pass, both in the corpus's rules OWNER**: `rules_primer.md` cites **CARHA's Note 2 to Rule 65(a)** twice for an expiry test. ⚠️ **Note 2 is not about timing at all** — it is the box-sitting limb, about *who counts in the head count*: *"A team shall not be considered below the numerical strength of its opponent by reason of a penalized player remaining in the penalty box after their penalty has expired."* **The rule wanted for the head-count point is 65(d)**, which states the test more cleanly than any other book: *"below the numerical strength of the opposing team at the instant the puck is shot."* ⚠️ **What CARHA has NO equivalent of is the instant-of-judgement sentence and the release-before-expiry relief** — `"instant the penalty"` returns **zero** in a flattened `carha.txt`, verified. ⚠️⚠️ **AND THE COORDINATOR COMPRESSED THAT INTO "CARHA HAS NO EXPIRY CLAUSE AT ALL", WHICH IS FALSE, AND PUT IT IN TWO BRIEFS** — an agent refuted it from the book and a second confirmed the refutation. **Note 2 is hyphenated across a line break as `numer-/ical`, so `grep "numerical strength"` returns 4 hits where a de-hyphenated flatten returns 5. That is how it hides.** |
| ⬜ | **An uncited authority that settles two questions at once.** The **IIHF glossary** definition — *"numerical strength is affected when one team has a lower number of Players on the ice than five skaters and one goalkeeper **due to one or more penalties that they are serving**"* — appears **nowhere in `content/`**. It settles the 5-on-3 case and the pulled-goalie case, for the British layer, in one sentence. Where the NHL's equivalent is an inference, this is a statement. |

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
| ⬜ | ⚠️ **SUPERSEDED AND OBSOLETE, KEPT ONLY FOR ITS REASONING — the carve-out this row asked for became the GENERAL RULE on 14 September 2026.** It read: *"ON THE POSITIONS PAGES, A DIAGRAM GOES AT THE END OF ITS SECTION, NOT THE HEAD — and this REVERSES `content_style_guide.md:1417` for those pages… The guide currently records the owner's instruction as 'diagrams should be at the start of sections'."* ⚠️ **Three things in it are now false:** the guide records the opposite; the exception it asks for is the default; and `content_style_guide.md:1417` is a different line entirely, in the Sources-trailer section. ⚠️⚠️ **Its figure was the worst of it — *"252 markers before a facts block, 2 after"* against a re-derived 209** — and a `content-reviewer` called this *"the row most likely to reach the agent doing the moves."* **WHAT SURVIVES, and it is the useful half: the REASON.** These sections are named by zone-and-situation — a job — while the caption draws one instant inside it, *"so the picture arriving first asserts that instant IS the job."* **That is the argument the new rule's subject test now generalises**, and it was made here first, from `center.md` and `centre-out-of-the-middle`, before the owner's instruction existed. ⚠️ **A dead pointer written as inline code is invisible to EVERY version of `check_links.py`, by design** — backticked spans are masked deliberately. **Only an agent finds this class.** |

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

⚠️⚠️ **SUPERSEDED AS A RULE ON 14 SEPTEMBER 2026 — READ THIS BEFORE THE PASSAGE BELOW.** The owner
reversed the placement instruction: *"diagrams should follow the content discussing them in most
cases as putting the diagram first is out of context and hard for the reader to understand, the
exception being where we can present an overview or summary diagram that help the reader to
understand the text by seeing it first."* **So the direction the coordinator was briefing below is
now the CORRECT one, and the style guide it was corrected against has been rewritten** — see
[`content_style_guide.md` § *A diagram FOLLOWS the content it illustrates*](../content_style_guide.md).

⚠️ **This does not make the coordinator's error below retrospectively fine, and the passage is kept
in full for the reason it was written.** The error was never about which direction is better. It was
that **a convention was asserted from memory into eight briefs and used to manufacture a defect
report against a file that was correct**, when the file on disk said the opposite and one grep would
have settled it. **Being accidentally aligned with a later instruction is not vindication.** The
three constraints below — ordered lists, paired diagrams, backward-referring captions — and the
shingle-probe finding survive the reversal intact and are now restated in the style guide.

⚠️ **AND THE FIGURES IN THE TABLE BELOW ARE SUPERSEDED TOO, which the first version of this banner
did not say.** It superseded the *rule* and left a reader to walk into a census taken before three
rounds of work. **`immediately before a facts block | 248` is now 209** — a number **39 too high** —
and `325 / 235 / 90` is now `331 / 239 / 92` on the same definitions. **The style guide holds the
current figures; this table is a record of what was true in its own round and nothing should be
quoted out of it.** A commit gate found the 248 still standing under a banner that had superseded
everything except it.

---

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

## ⚠️ Handed over by the faceoff wave, 15 September — verified, not repaired

Owner: `project/reviews/faceoff_contact_five_books_2026-09-15.md`. Read it before taking any row here;
each one below was established against primary text and the record carries the wording.

### ⚠️ A document says "all five books" in seven SPOKEN layers while the scope limit lives only in the Sources trailer

**Handed back by a repairing agent and ruled non-blocking by a gate, on the ground that every individual
claim is TRUE.** The gap is the document **under-disclosing what it read**, not misstating a rule — no
listener is moved toward an illegal or unsafe act.

⚠️ **It is a row rather than a record line because a record is where CLOSED work goes, and this is open.**
The previous round put it only in the record, and a gate blocked partly on that: **the handover would have
died with the round.**

**The evidence is unusually good, because the agent proved it rather than assuming it.**
`md_to_speech.py --only faceoffs` produces **121 chunks and ZERO contain the trailer's text.** So the
honest limit — *"Read on disk for those rules only… the rest of this document has not been compared
against that book"* — **reaches a reader of the page and no listener at all.**

**What has to be decided, and it is the owner's call, not an agent's:** whether a document should name in a
**voiced** layer which rules a book was read for. ⚠️ **It touches `faceoffs.md`, `rules_primer.md` and
`uk_rules.md`, so it is outside what any single agent owns**, and non-negotiable 4 forbids the lazy
resolution of deleting the disclosure to remove the asymmetry.

**`switching_positions.md:40` already carries the voiced version and is the model.** Start there.

### ⚠️⚠️ SUPERSEDED THE SAME DAY — D15 IS DISCHARGED. Read this section only as a record of TWO wrong diagnoses.

⚠️⚠️ **Both diagnoses below are wrong. The browser refusal is real; the conclusion drawn from it was
not.** **See `project/reviews/readability_diagram_placement_2026-09-14.md`, *"D15 DISCHARGED"*.**

**A round-53 agent hit the same refusal and got through** — *"it fell back to **headless CDP** with a
fresh incognito context per observation… every visual claim is from a screenshot it looked at"* — **and
Chrome-over-CDP is already in this build, driving the Open Graph card step.** ⚠️ ***"D15 is not blocked
by physics; it is blocked by nobody having tried the fallback that worked last time."*** **Two
`site-reviewer` passes have since used `site/scripts/build-og.mjs`'s launcher pattern and inspected the
rendered pages.**

⚠️⚠️ **THIS SECTION IS LEFT STANDING BECAUSE IT IS THE EVIDENCE, AND BECAUSE OF WHAT IT SAYS ABOUT
ITSELF.** It argued that *"a wrong diagnosis is more expensive than a missing one, because it directs
effort"* — ⚠️ **and it was itself the wrong diagnosis, in the file `CLAUDE.md` dispatches every round's
briefs from.** **A gate caught it being committed unqualified in the very commit that discharges D15.**

### ⚠️ [SUPERSEDED] D15's diagnosis was WRONG: the browser is not refusing localhost, it is refusing everything

Recorded 15 September 2026. **Every gate for several rounds has carried D15 undischarged with the
reason "the Chrome extension refuses localhost — Could not verify this site's safety category."**

**Tested this round, four navigations:**

| URL | Result |
|---|---|
| `http://localhost:4399/systems/faceoffs/` | *"Could not verify this site's safety category"* |
| `http://127.0.0.1:4399/systems/faceoffs/` | same |
| `https://learn-ice-hockey.com/systems/faceoffs/` | **same** |
| `https://learn-ice-hockey.com/` | **same** |

⚠️ **The production HTTPS site is blocked identically.** So the block is **not** about localhost, not
about `http://`, and not about an unclassifiable private address. **The extension's safety classifier
is failing for every URL it is given.**

**Why this matters beyond D15:** the recorded diagnosis sent every previous round looking for a
localhost workaround — a different port, a different host, a tunnel. **None of those can work**, and
the rounds that tried them were solving a problem that does not exist. ⚠️ **A wrong diagnosis is more
expensive than a missing one, because it directs effort.**

**What is confirmed unblocked:** the build itself (exit 0, reached `check:links`, 53 pages, 10,689
links), and the SPEECH layer, which is inspected by rendering through `md_to_speech.py` and reading
the SSML — that is how all six CARHA blade layers were verified this round. **The rendered PAGE is the
only thing nobody can see.**

**This needs the user.** Either the extension recovers on its own, or D15 stays declared-and-silent.
It must not be recorded as passed.

### ⚠️ A SECTION HEADING that asserts an unscoped rule, and the anchor that pins it

**`content/positions/goaltender.md`'s `### Icing — you are the one who can wave it off`** is **voiced
ALONE**, as the final line of its chunk with a 450 ms break after it, and it **asserts the wave-off as a
law of the game.** ⚠️ **It is the same species as the fact beneath it, which was repaired on
15 September — the heading was not.**

**Why it was left:** `content/getting-started/getting_started.md:84` **links to
`#icing--you-are-the-one-who-can-wave-it-off` and quotes the heading as its link text.** ⚠️ **Renaming
it breaks a sibling, so this is a two-file change and no single agent owned both.**

⚠️ **`check_links.py` cannot warn about this in advance** — it verifies that anchors resolve, which they
do until the moment the heading changes. **The two edits must land together.**

**And the general form is a census nobody has run:** ⚠️ **a section HEADING is a spoken unit in this
corpus, and no checker tests headings for unscoped rule claims.** `scripts/check_absolutes.py` reads
captions; `check_facts.py` reads fact lines; **nothing reads headings.**

### ⚠️ A corpus-wide layer test nobody has run: "waves off" / "wave it off"

**Raised by the agent that repaired `goaltender.md`, which owned one file and said so.** The wave-off is
taught in `goaltender.md`, `rules_primer.md`, `faceoffs.md` and `defender.md` at least. ⚠️ **One
document stated it unscoped in a fact voiced alone; nobody has checked the others.**

### ⚠️ Three breakout diagrams share one full-rink frame, and the labelled content occupies a quarter of it

**Measured on the rendered page by a `site-reviewer` over headless CDP, 15 September.**

`goaltender.md`'s three stacked breakout diagrams all use viewBox `-102 -44.5 204 89` — ⚠️ **`half: false`,
the full sheet** — while the two on `defender.md` are `half: true`. **Labelled content spans only
6.5–22.6%, 2.7–24.8% and 6.5–26.6% of frame width.**

⚠️ **So about three-quarters of each 792 px frame is empty neutral and offensive zone, and three
near-identical full-rink outlines stacked are hard to tell apart at a glance — the captions do all the
differentiating.** ***"That is the likelier reason a previous review called this trio the weakest
run."***

⚠️ **NOT fixable from `goaltender.md`** — all three are owned by `content/systems/breakouts.md`, which is
what the *"Diagram from breakouts"* attribution says. **A `diagram-reviewer` question against the `.mjs`
source.**

⚠️ **And the shape the relocation was meant to break up did NOT occur here** — the reviewer measured the
text run at **0.42 viewports desktop and 1.07 phone**, and the figure run is **~62% text by height**
because each caption is longer than its picture. ***"On phone the caption is bigger than the picture."***
**The bridge paragraph added today is sound and should be kept.**

### ⚠️ "Over" has two opposite senses, and the goaltender's call list names only one of them

**Found 15 September by the agent repairing the breakout-diagram correspondence, and deliberately NOT
fixed — it is new substantive content needing propagation and a content review.**

**`breakouts.md:349-353`, the owner, is explicit:**

> - **Sense A — cross-ice "over":** *"a pass across the width of the ice to the far winger, in front of
>   your own net… **the highest-risk of the nine breakout options**."*
> - **Sense B — D-to-D "over":** *"the pass behind your own net to your partner. Many playbooks and most
>   **goalie call vocabularies** use 'over' to mean this, and it is one of the **lowest**-risk plays."*
>
> ⚠️ ***"Find out which one your team means before you use the word, because the two carry opposite
> instructions."***

⚠️ **`goaltender.md` uses Sense B and says so emphatically — the counterweight IS present in both
layers:** `:712` (facts) *"Over means behind the net, **never through the slot**"* and `:729` (body)
*"move it to the other side, behind the net, below the goal line. **Never through the slot.**"*

⚠️ **So the corpus is NOT telling a goalie to call for the riskiest pass in the book** — an earlier
framing of this finding overstated it, and the overstatement is recorded here rather than shipped.

**The residual risk is narrower and real: the document tells the GOALIE what he means. It does not tell
him his DEFENCEMAN may hear the other sense.** ⚠️ **A goalie shouting *"over"* to a partner whose
playbook uses Sense A has called for a cross-ice pass in front of his own net, and neither of
`goaltender.md`'s two warnings reaches the listener of the call — they are aimed at the caller.**

**The work:** a sentence on the goaltender's side naming the ambiguity, propagated into the
`Options: Direction` facts line at `:712`. ⚠️ **It is a `content-reviewer` and `safety-reviewer`
question, not a placement one** — and `breakouts.md` already carries the evidence and the instruction,
so the fix is to point rather than to restate.

### ⚠️ The corpus's FIRST diagram marker between two list items

**`defender.md:718` — and it has since been MOVED, so the corpus has none again.**

⚠️ **The load-bearing claim held and was worth acting on: ZERO of the 331 markers had ever sat between
two list items, and that one was the first.** ⚠️⚠️ **The surrounding figures did NOT reproduce, and
three different counting rules gave three answers — 18-after/7-before, 16/9, 15/9.** **The difference is
blank-line handling and whether the marker under test is counted.** ***"Do not re-quote them without
re-running."*** **Same lesson as the marker census, which gave 286 or 268 depending on heading depth:
a positional count is rule-sensitive, and the rule has to travel with the number or the number is
noise.**

**In remark this ends the `<ul>`, emits the figure, and opens a new `<ul>`** — bullets 1–2 in one list,
bullet 3 in another. ⚠️ **The AUDIO is verified fine** — `md_to_speech.py:2779`'s `render_list`
prepends an ordinal **only** `if block.ordered`, and each item is its own `<p>` regardless, **so
splitting an UNORDERED list costs the listener nothing.** **The RENDERED PAGE is unverified.**

⚠️ **RESOLVED, and NOT for the reason the fallback was written.** A `site-reviewer` measured the seam
and found **no gap** — the figure **outdents** out of the list, 32 px is the page's universal figure
margin across all 15 figures, and no comparison is available because the bullet above is **1,676 px
tall on desktop and 4,305 px on phone.**

⚠️⚠️ **The fallback was taken for two reasons the seam question did not cover:**

1. **The lead-in promises three** — *"The three situations you must have automatic:"* — **and the split
   delivered `<ul>`(2) + `<ul>`(1).** ***"A screen reader announces 'list, 2 items' then 'list, 1
   item'."*** ⚠️ **An `aria-*` patch would be wrong: the list really WAS two lists.**
2. ⚠️⚠️ **The placement put a caveat back-to-back with its own paraphrase, and the AUDIO was worse than
   the page** — not fifteen lines apart but **directly adjacent spoken units, 300 ms apart.** ⚠️
   **Invisible in Markdown, because the caption lives in the build product.** **Now four units apart.**

**Pure move: 207,685 billed characters before and after, delta 0.** ⚠️ **And the repairing agent
disclosed a weaker adjacency its own fix created** — the compressed `Read:` facts line moved from 10
spoken units from the caption to **6** — **and judged it acceptable rather than delete a safety line
from the layer voiced alone.** **A caption change is the alternative, and that is a different owner.**

### ⚠️⚠️ NON-NEGOTIABLE 6, MEASURED: the corpus names its own extraction files in EIGHT documents

**Found by a commit gate on 15 September, mis-measured twice — once by the gate, once by the
coordinator — and then measured properly.**

⚠️ **Non-negotiable 6 forbids the corpus narrating the project. A `sources/` filename is the
repository's plumbing inside the product.**

| Document | Internal filenames named |
|---|---:|
| **`content/technique/shooting.md`** — `:900`, `:904`, `:932`, `:934` | ⚠️ **9 distinct at `:900` ALONE** |
| `content/off-the-ice/team_play_and_culture.md` `:634`, `:636` | 3 |
| `content/systems/breakouts.md` `:995` | 3 |
| `content/off-the-ice/practice_and_development.md` `:650` | 2 |
| `content/technique/body_contact_and_battles.md` `:1625` | 2 |
| `content/systems/forechecking_systems.md` `:956` | 1 |
| `content/positions/center.md` `:750` | 1 |
| `content/positions/winger.md` `:734` | 1 |

⚠️ **`.pdf` references are NOT part of this** — those are publisher URLs and legitimate. **No publisher
serves a `.txt` extraction**, which is what makes the `.txt` references unambiguous.

### ⚠️ Why it was mis-measured twice, which is the more useful half

1. **The coordinator asserted `content/` was clean** from a grep pattern (`nhl_rules\.txt`) **that could
   not match `nhl_rules_layout.txt`.** ⚠️ **A clean result from a pattern that cannot find the thing.**
2. **The gate then reported two documents** from a staged-files-only scan, because its corpus-wide
   version had been backgrounded — ⚠️ **and that background scan was later KILLED FOR MEMORY WITHOUT
   EVER COMPLETING.** Its own account is the thing to keep:

> ⚠️⚠️ ***"I nearly shipped a coverage claim my own tooling had not established. The first scan timed
> out, the second was killed for memory, and neither fact would have appeared in my report if the
> notification had not arrived — I would have left a confident sentence resting on a grep four times
> narrower than the claim it supported. That is the same failure shape I am blocking this commit for: a
> conclusion outliving the evidence that was supposed to support it."***

⚠️ **It asked for a row against the GATE PROCEDURE, not just the corpus, and it is right to.** **A gate
that reports a measurement must state the scan that produced it, and must not report a figure from a
scan that did not finish.**

### ⚠️ One instance rode across in a commit that touches its line

**`breakouts.md:995` is a Sources trailer the icing repair rewrote.** The `.txt` references are
**byte-identical on both sides of the diff and present at HEAD** — ⚠️ **so the commit CARRIES THEM
FORWARD rather than introducing them.** **Three gates saw this and none blocked on it**, correctly:
the violation predates the commit.

### ⚠️ How NOT to fix it

**Non-negotiable 3 forbids deleting the surrounding provenance to tidy this**, and non-negotiable 4
forbids stripping the disclosure the trailer is making. ⚠️ **The model already exists in this corpus,
written by an agent that REFUSED a coordinator instruction to name an extraction file:** disclose **the
book's typography** instead —

> *"Hockey Canada prints* face-off *hyphenated and broken across a line there, so a text extraction that
> discards the line break renders it* faceoff *— the hyphen is the book's."*

**Start at `shooting.md`. It is a quarter of the corpus-wide total in one document.**

### ⚠️⚠️ A DEFECT SPECIES NO GATE IN THIS REPOSITORY CAN SEE: a shared OUTCOME promoted into a shared WORD

**Found 15 September 2026, in three documents at once, by an agent sent to fix one character.**

Three documents said the five rulebooks ***"share the word directly."*** ⚠️ **USA Hockey 624(b)(3) does
not contain it** — it prints *"as a result of either player participating in a face-off"*, and a grep of
the whole of Rule 624 returns **zero**.

⚠️⚠️ **THE SPECIES IS THE FINDING, NOT THE INSTANCE.** The five books really do reach the same
**outcome**. Somewhere that true statement became a claim about their **wording** — which is a
different, checkable, and false claim. ⚠️ **Every gate in this repository would pass it**: the rule
citations are right, the outcome is right, the facts layer is consistent, and nothing is unsourced.

⚠️ **And a layer test over the four files' blocks showed it had NOT reached the extraction layer** —
`special_teams.md:632` claims the shared **outcome**, which is the scope-not-tension case a sweep would
wrongly "fix". **The agent read it and left it.** **So the species lives in prose, where no checker
looks for it.**

**The work: a corpus-wide layer test for *"all five"*-shaped claims about rulebook WORDING as opposed to
outcomes, across all 39 documents.** ⚠️ **Only three were checked.** **This is not `check_rule_scope.py`'s
job** — that tool compares which books a rule number is cited against, and would see nothing here.

### ⚠️ The USA Hockey Casebook settled a question the corpus currently hedges

**`faceoffs.md:966` says USA Hockey *"does not say otherwise"* about the off-the-draw icing carve-out.**
⚠️ **It can now say something stronger, and the corpus should not under-claim what it has read.**

**USA Hockey Casebook, Rule 624 Situation 15** (`usah_casebook.txt:14414-14423`) — a centre touches the
puck on the draw, *"gains possession an instant later"*, shoots it the length of the ice. **Answer:
"Yes"**, icing. Rule References 624(a and b.3):

> *"In order for the icing to be nullified because the puck was shot by a player **directly from a
> face-off**, the puck must receive its **impetus from the initial stick contact** on the face-off."*

⚠️ **So USA Hockey's own Casebook reads 624(b)(3) back USING the word the rule text omits, and adds an
impetus test.** *"Play all five the strict way"* is now **the book's own reading** rather than a cautious
assumption. `special_teams.md` and `rules_primer.md` carry it; **`faceoffs.md` does not, and it is the
document that owns the carve-out.**

⚠️ **What is still open and is labelled open rather than closed:** the impetus test governs the
**origin** of the puck's motion, **not a later touch**, so **whether a puck that clips a stick en route
is still covered is undecided.** **Casebook Situations 4-7 deal with deflections under 624(a)
generally, and nobody has tested whether they read across to (b)(3).** ⚠️ **Do not reason your way to
an answer — find one or leave it labelled.**

### The IIHF's own situations have never been searched for an 81.5 gloss

`sources/iihf_situations*.txt` **exists on disk in both editions and was not searched.** ⚠️ **If it
carries an 81.5 situation it may confirm or complicate the impetus test now attributed only to USA
Hockey.** **One grep, nobody has run it.**

### ⚠️⚠️ THE STATED OWNER OF THE SHORTHANDED-ICING EXEMPTION IS NOT THE ACTUAL OWNER

**Established 15 September 2026 by the agent that repaired `special_teams.md`, and it is a STRUCTURAL
finding rather than a content one.** Recorded here and deliberately **not** acted on in that round,
because the fix touches documents no single agent owned.

**`faceoffs.md` says TWICE that Special Teams owns the shorthanded-icing exemption.** It does not.
`special_teams.md` carried **three books in its facts layer**; `rules_primer.md` carries **five**, with
Hockey Canada's Note 1 and Interpretations 2 and 3 and CARHA's Note 2 to 65(a).

**The agent's verdict, having read both:**

> ***"`rules_primer.md` is the right owner and the pointers should say so.** Special Teams' job is what a
> kill DOES with the exemption; the five-book comparison of when the count is taken is a rules-layer
> question."*

⚠️⚠️ **THE REASON THIS MATTERS IS THE SECOND HALF OF THAT SENTENCE:** retiring the two claims would
***"remove the incentive for each document to grow its own five-book census — which is what produced the
divergence I just repaired."***

**The exemption is taught in AT LEAST FOURTEEN documents** — `rules_primer.md`, `special_teams.md`,
`faceoffs.md`, `defender.md` (twice), `goaltender.md`, `center.md`, `winger.md`,
`defensive_zone_coverage.md`, `breakouts.md`, `game_management.md` (twice), `language_and_glossary.md`,
`scanning_and_anticipation.md`, `on_ice_communication.md`, `neutral_zone_systems.md`. ⚠️ **A mis-stated
owner makes every one of them grow its own copy, and every copy is a place the five books can drift
apart.** **This round repaired drift in four of them.**

**What the work is:** retire `faceoffs.md`'s two ownership claims, point them at Rules Primer, and check
the other twelve documents point somewhere that is actually authoritative. ⚠️ **It is NOT a sweep** — a
document legitimately states the rule at its own depth, and `defender.md` demonstrated the correct
judgement this round by **declining** to carry a five-book carve-out its section would have
mis-framed.

### ⚠️ The next facts-block squeeze, already identified and not yet hit

**`special_teams.md:706` is at `HARD_MAX` 11 with two facts at 298 and 299 characters against a 300
cap.** ⚠️ **One edit from the squeeze that forced a section split elsewhere in the same file this
round. Nobody has looked at it.**

⚠️ **And the structural version, measured across the faceoff wave: 34 `Rule:` facts sit between 290 and
298 characters.** **Any future book addition to any of them forces a split, not an edit.** This round's
own record celebrates that the repaired lines *shrank while gaining a book* — **that headroom is now
spent.**

### ⚠️ The same shape, found by the tool built for it: `playing_without_the_puck.md` points a listener at a section he cannot hear

`python3 scripts/check_pointers.py`, run 15 September 2026. **5 hits across 39 documents; 4 are in
mixed-table documents where the tool says outright it cannot tell which table the sentence means.**
**The fifth is unambiguous:**

> *"Both computations are set out in full in the written Notes on verification section."*

⚠️ **The renderer DROPS `## Notes on verification`.** A listener is told where to find two
computations and sent to a layer that does not exist for him — and unlike the faceoff framing
question, **this sentence names the destination explicitly**, so it reads as a broken promise rather
than as an under-disclosure.

⚠️ **It says *"the written Notes"***, which is a partial defence — the sentence half-knows. **Whether
that is enough is a reading judgement, and the tool's own guidance is *"a pointer aimed at the SITE is
legitimate, because this corpus renders to a web page too."*** **Read it before changing it.**

**The other four are recorded as checked-and-left:** `rules_primer.md` ×3 and
`body_contact_and_battles.md` ×1, all table references in documents where some tables voice and one
drops. **The tool cannot resolve them and neither did this pass.**

### ⚠️ `faceoffs.md:334` credits the NHL's own sentence to the 2026/27 IIHF book as a novelty

Found by `commit-gate` on the ninth pass, **outside the staged diff and deliberately not swept into it.**

The passage presents *"costs you the draw outright"* as what the 2026/27 IIHF edition introduced. **NHL
Rule 76.7 carries the same sentence** — *"the Linesperson shall order the center of the offending team
replaced."* ⚠️ **A reader under the NHL book — the book this corpus is written to — is invited to read a
rule that is his as somebody else's.** Same shape as NHL 76.6, which the corpus had never cited at all
until this round.

**Not urgent, and the direction is safe** (it over-warns rather than under-warns), but it is a rules claim
and belongs to `rules-verifier` before a body edit.

### The two the ninth gate ruled non-blocking

- **`faceoffs.md:277`** — the fifteen-feet fact names four books; the body at `:406` says *"All five books
  carry that distance"* and quotes CARHA 57(a)'s *"at least 15 feet (4.57 m)"*. **Omission in the safe
  direction**, in a block that was at 10 of `HARD_MAX` 11 when measured.
- **`winger.md:495`** opens *"A second violation by the same team on the same draw is a bench minor (Rule
  76.7)"* before qualifying. The parallel line at `faceoffs.md:412` opens *"does not route the same way in
  every book."* **Same facts, weaker framing** — and USA Hockey 613(d) routes a second violation by a
  replacement taker to **that player**, so the unqualified opening is wrong for the largest non-NHL
  readership before the qualifier arrives.

### ⚠️ PROVENANCE — the gate's version of this was WRONG, and the corrected version is smaller

**A commit gate reported that `iihf_rules_2026-27.txt` and `eiha_inhouse_2026-27.txt` have "no PDF on
disk at all", and concluded that every 2026/27 claim in the corpus "rests on an extraction nobody can
re-derive from a primary artefact here."** ⚠️ **I checked before writing it down, and the conclusion
does not follow.**

**What is true:** 22 of the extractions in `sources/` have no local PDF beside them — including
`carha.txt`, `hc.txt` and `usah.txt`, three of the five books.

**Why that is not the finding the gate thought it was:** `.gitignore` excludes **`sources/*` entirely
except `README.md`**, deliberately and on a recorded rationale about redistribution. **No PDF was ever
meant to be on disk in a clone.** `sources/README.md` is committed, **holds the publisher URL for every
one of these files**, and `scripts/fetch_sources.sh` rebuilds the directory — it names `carha`, `hc`,
`usah`, `iihf_rules_2026-27` and `eiha_inhouse_2026-27` among them. And `usah.txt` is recorded as
**verified byte-identical to the publisher PDF, MD5 `04b8fae8b682136701fb573a14500af7`**, 29 August
2026.

⚠️ **So "not on this machine right now" was reported as "not re-derivable."** The residue is real but
narrow: **a verifier who needs to render an image-only page with `pdftoppm`, or to diff a `-layout`
variant against a flattened one, must re-fetch first** — and `CLAUDE.md` names exactly that technique
for `crt6`. **One command, not a provenance hole.**

**Kept as a row for one reason only:** this is the fifth time in two rounds a gate or brief has been
recorded as authority and turned out to be wrong, and **it is the coordinator relaying it that puts it
in the plan.** ⚠️ **I was one edit from writing a corpus-wide provenance crisis into the only plan file
on a finding I had not checked.** ***"The briefs are more defective than the corpus"* includes the
gate's.**

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

### Residual rows from the release-one safety pass and commit gate — 14 September 2026

| | |
|---|---|
| ⬜ | ⚠️ **`content/foundation/core_principles.md`'s Key Takeaways section is at 2,782 of `MAX_BILLED_CHARS` 2,800 — EIGHTEEN characters of headroom.** **The next agent that adds a word to any takeaway on that page will split the section, and the split would land mid-list.** Measured by the agent that closed the gap. **Say this in any brief that touches that file.** |
| ⬜ | **The shoulder prohibition — *"never on the point of your shoulder"* — was missing from BOTH spoken layers of `core_principles.md` and is now fixed there.** ⚠️ **A coordinator census over the 19 documents that teach *"skates parallel"* is crude and inconclusive** — the pattern also matches *"shoulder check"* and *"over your shoulder"*, so a count is not a finding. **Six documents returned zero and need a READ, not a grep**: `on_ice_communication.md`, `puck_handling.md`, `puck_support_and_spacing.md`, `risk_management.md`, `defender.md`, `breakouts.md`. ⚠️ **The reason it matters is the reviewer's, not the tool's: the corpus names *"take the wall on your shoulder"* as the FIRST of three pieces of rink-side advice the primary material contradicts, and a positive instruction does not displace a pre-existing wrong one — only the explicit negative does.** |
| ⬜ | **`content/foundation/core_principles.md` principle 7's *What to do* now runs Case 2 → Case 1 → Case 3** — the fallback before the avoidance. **The ordering is pre-existing and the repairing agent deliberately preserved it**, saying *"fixing it is a rewrite, not a repair, and it needs someone else's call."* |
| ⬜ | ⚠️ **USA Hockey's Fig. 6 in `sources/ibc.txt` is IMAGE-ONLY and shows the arm geometry for the already-facing-the-boards case** — both arms bent at the elbow, gloves up and spread. **No grep reaches it.** The repair wrote *"arms out"* rather than a geometry, deliberately. **If a later round wants principle 7 to state the elbow position, that figure is the authority and it must be rendered with `pdftoppm`.** |
| ⬜ | **Hockey Canada 7.3's *"any other divisions approved by a Member"* limb: a three-way diff after the repair is CLEAN** — `rink_map.md`, `core_principles.md` and `rules_primer.md` all carry it, as does nearly every other document. ⚠️ **Recorded because the shape recurred twice today: three siblings correct and one document consistently short across ALL its layers.** That is the omission-pass signature and it is worth censusing for deliberately rather than stumbling on. |
| ⬜ | **`content/foundation/rink_map.md` Key Takeaway 11 is now 409 words** (376 before the safety repair; ~223 when a reviewer first measured it two rounds ago). **The agent reported the overage rather than hiding it** and named what it declined to cut: the IIHF 101.1 carve-outs (prohibitions), the IHUK four-competition list (upheld as necessary) and the CARHA 49(c)/grammar disclosures (non-negotiable 4). ⚠️ **The style guide asks takeaways to be *"standalone and memorable"* and sets no figure, so there is no measured threshold to test against. A corpus-wide census of Key Takeaway lengths would settle whether this is an outlier or ordinary** — and `rules_primer.md`'s KT9 at **1,256 words / 6.8 screen-heights at 375px** suggests it is not. |

### The three owner instructions of 14 September 2026 — measured, before any work

The instructions are recorded in full in
[`READABILITY_AND_DUAL_AUDIENCE.md`](READABILITY_AND_DUAL_AUDIENCE.md) and the placement one now
governs [`content_style_guide.md`](../content_style_guide.md). What follows is what a census found,
so a brief does not have to guess.

| | |
|---|---|
| ⬜ | ⚠️ **DIAGRAM PLACEMENT IS NOW REVERSED AND 239 OF 331 MARKERS SIT ON THE OLD SIDE.** 239 sit immediately after a heading; 178 run heading → diagram → `facts` block, so the reader meets the picture and the extraction layer before one explanatory sentence. **Only 29 follow prose.** ⚠️ **This is NOT a sweep**, and the style guide says why: a caption that refers backward to prose the move would strand stays put, an ordered list must never be broken, a before/after pair moves together, and an **overview or summary** diagram is a legitimate exception that belongs first. `rink-map-neutral-zone` is the worked exception — its prose opens *"The sheet is drawn here in two pictures"*. **Every marker needs its caption read against its section. Budget it per document, not per marker.** |
| ⬜ | **SETTLED, and the ruling has MOVED OUT of this file.** The marker goes BELOW the ` ```facts ` block. **The ruling, its evidence and its limits live in [`content_style_guide.md`](../content_style_guide.md) and in [`readability_diagram_placement_2026-09-14.md`](../reviews/readability_diagram_placement_2026-09-14.md) — do not restate them here.** ⚠️ **This row was first written as a `✅` carrying the full evidence, which is a second copy of a measurement whose owner is now the style guide, and a commit gate caught it against this file's own header: *"when a row closes, move it to a review record in the same commit as the work."*** The row stays open because **the 239 moves it unblocks have not been made.** |
| ⬜ | **Instruction 1 — "most pages open with the high-level principle that frames them" — MEASURED 14 September 2026, and the corpus is closer to compliant than it looks.** All 39 documents are structurally identical: a `> **Rule set:**` banner, then `## Overview` (36) or `## Key focus` (3). ⚠️ **The gap is in what comes FIRST inside that section, and it is concentrated in NINE documents that open with no sentence at all** — seven with a ` ```facts ` block (`positions/center`, `positions/goaltender`, `positions/winger`, `systems/breakouts`, `systems/defensive_zone_coverage`, `systems/neutral_zone_systems`, `systems/offensive_zone_play`) and two with a diagram marker (`positions/defender`, `systems/forechecking_systems`). **Those two are also instruction-3 defects** — a picture before any prose is the exact shape the owner objected to. **Fix both instructions in one edit on those two files.** |
| ⬜ | **Instruction 1, the softer half: SIX documents open with a DEFINITION rather than a principle** — `systems/faceoffs` (*"A faceoff, or draw, is how play starts and restarts…"*), `systems/zone_entries`, `systems/special_teams`, `systems/game_management`, `systems/defending_the_rush`, `reading-diagrams/reading_ice_hockey_diagrams`. ⚠️ **A definition is not obviously wrong as an opener** — a reader who does not know the term cannot use the principle — **so this is a judgement call per document, not a defect list.** Contrast the 24 that already do it: *"Hockey has one currency, and it is time and space"*; *"You spend almost all of your ice time without the puck, and what you do in that time decides what the few seconds with it are worth"*; *"Every time you touch the puck you place a bet."* **Those are the target register.** |
| ⬜ | ⚠️ **INSTRUCTION 2'S BASELINE, MEASURED 14 SEPTEMBER 2026 — AND IT IS BIGGER THAN ANY PREVIOUS ESTIMATE IN THIS FILE.** 1,226,595 words over 39 documents (`check_counts.py` agrees). **`foundation/rules_primer.md` alone is 97,469 words in 1,128 lines — 574 KB — and its `## Key Takeaways` section is 14,151 of them.** Next: `technique/body_contact_and_battles` 84,435 (KT 14,289), `positions/goaltender` 72,022 (KT 12,563), `systems/forechecking_systems` 45,326 (KT 10,959). **Key Takeaways across the corpus total 239,174 words — 19.5% of it.** ⚠️ **Two documents show the shape is not inevitable: `systems/neutral_zone_systems` is 23,488 words with a 667-word KT, and `hockey-iq/playing_without_the_puck` is 34,626 with 1,031.** Same corpus, same style guide, KT sections an order of magnitude apart. **Start there: ask what those two do that `rules_primer` does not, rather than cutting by feel.** |
| ⬜ | ⚠️ **A KEY TAKEAWAYS SECTION IS A SPOKEN LAYER, so cutting it is not free in the direction people assume.** `MAX_BILLED_CHARS` is 2,800 and only `##` opens a chunk — a 14,151-word KT section is being split by `_split_paragraph` at sentence boundaries across many chunks, and **nobody has looked at where those cuts land.** Run `md_to_speech.py --only` on the four largest before proposing a single deletion. ⚠️ **And the reverse risk is live in the same file: `core_principles.md`'s KT was measured at 2,782 of 2,800 in one chunk — eighteen characters of headroom.** Length is a problem at both ends and there is no measured target at either. |
| ⬜ | **Instruction 2 — "reduce the text, target the low-level rule detail" — collides head-on with non-negotiables 3 and 4.** *Never delete a claim merely because it is unsourced; never strip an honest disclosure.* ⚠️ **The two are reconcilable but only deliberately**: the target is the citation apparatus and the rule-by-rule enumeration, NOT the qualifications. `rules_primer.md` KT9 at **1,256 words / 6.8 screen-heights at 375px** and `rink_map.md` KT11 at **409 words** are the measured outliers to start from. **A brief that says "cut" without saying "and keep every limit on a claim" will produce a non-negotiable-4 breach.** |

### Worklist re-runs, 14 September 2026 — two figures in `CLAUDE.md` have gone stale underneath it

| | |
|---|---|
| ⬜ | ⚠️ **`CLAUDE.md` names `rules_primer.md:753` as the table sitting at zero rows of headroom. ⚠️ **DO NOT WRITE ITS LINE NUMBER HERE EITHER.** This row has now carried `:753`, then `:776`, and the table sits at `:809` as of this commit — **it moved twice because text was inserted ABOVE it, both times by work recorded on this very page.** It is *Situation \| Where the draw goes*, and **`check_tables.py --near` prints both its location and its headroom.** The instruction beside it is already the right one (*"RUN THE TOOL — it is its own owner"*), so **the fix is to delete the line number from `CLAUDE.md`, not to update it.** A line number copied out of its owner goes stale silently; that is the same lesson the file states three times about counts. **Not done this round: `CLAUDE.md` is staged in the readability release and editing it would put a half-release change in the index.** |
| ⬜ | **The same passage's *"20 dropped against 26 read aloud"* was replaced here by `45 read aloud` — **and the commit containing that replacement added a table, making it 46.** ⚠️ **RUN THE TOOL; a count of its output cannot be written down.**** ⚠️ **The file already forbids quoting it and says why** — so this row is not a correction, it is evidence the guidance worked: the number was left alone and the corpus was repaired underneath it. **Nothing to do beyond the line-number deletion above.** |
| ⬜ | ⚠️ **`playing_without_the_puck.md:758` is FIVE CHARACTERS from dropping an eleven-row table** — *Position \| Your off-puck job in one line \| The characteristic mistake*. **One word added to any cell costs a listener the whole table**, and no gate will say so. **Name this in any brief that touches that document** — and instruction 2's *"reduce the text"* pass is exactly the kind of work that would edit it. |
| ⬜ | **`check_pointers.py` re-run: 5 hits in 39 documents, and only ONE is unambiguous.** `playing_without_the_puck.md` voices *"Both computations are set out in full in the written Notes on verification section"* — ⚠️ **and that section is DROPPED by the renderer, so the listener is told to consult a layer that does not exist for them.** The word *"written"* is doing honest work and nearly rescues it; it is still a pointer to nothing in audio. **The other four are all table references in MIXED documents where the tool says outright it cannot tell which table the sentence means.** Read the rendered SSML, not the label. |
| ⬜ | ⚠️ **`site/src/data/audience.json` DOES NOT MEET ITS OWN `fieldPolicy`, and the release record now says so rather than claiming otherwise.** The policy requires *"owner/reviewer/status/evidence/revalidateAfter"* on the seven fields it names as the ones that can hurt somebody. Measured across all three classified documents: **`contactScope`, `supervisionRequired` and `parentRequired` carry `evidence: null` on all three — nine instances with no reason at all**; `owner` is `null` on **five of seven** fields; `reviewer` is `null` on **all seven**, including `audioMode`, which is nonetheless `status: "reviewed"`. ⚠️ **A machine check recorded as `reviewed` with no reviewer is the exact shape the field policy exists to prevent, occurring inside the field policy's own output.** The safety-bearing half holds — nothing unreviewed is *asserted* — so this is a documentation defect, not a hazard. **Either populate the five, or add a vocabulary that distinguishes machine-verified from person-reviewed. Do not simply flip `reviewed` to `draft`: `audioMode` genuinely was verified, just not by anybody.** |
| ⬜ | ⚠️ **METHOD FINDING, and the gate volunteered it against itself: a false clause survived TWO full gate passes by riding on a true one.** The metadata row read *"…are `value: "unreviewed"`, `status: "draft"` on all three classified documents, **with the reason written out**."* The first two-thirds was true and re-verified twice; the trailing clause was false for three of the five fields. It fell only on the third pass, and only because the gate was asked to re-check a repair inside the same sentence. **Its own words: *"I missed this on both prior passes. It was there each time."*** ⚠️ **The gate spec already names this pattern — *a corrected count with its old enumeration still trailing it; read to the end of the paragraph, not the end of the clause* — so the rule existed and did not fire.** Consider whether the gate brief should require a clause-by-clause read of any row that is itself a repair. |
| ⬜ | ⚠️ **A SECOND uncited glossary that settles the icing head-count in one sentence, and it is CARHA's — the book the corpus has had most trouble with.** `sources/carha.txt:406` defines *Shorthanded* as *"A team is below the numerical strength of its opponents **on the ice**."* ⚠️ **Those last three words are the whole dispute**, and they are absent from `content/`: `grep -rl "numerical strength of its opponents on the ice" content/` returns **zero**, while three documents cite CARHA 65(d) (`language_and_glossary`, `rules_primer`, `special_teams`). **65(d) is the operative rule and this is the definition that disambiguates it** — *"at the instant the puck is shot"* tells you WHEN, the glossary tells you WHERE to count. ⚠️ **This is the same shape as the IIHF glossary row above and was found the same way — by reading the book while verifying something else.** Two of the five books turn out to define the term explicitly and the corpus quotes neither. **Check the other three before assuming they are silent; this corpus has already filed four separate "the book is silent" claims that were false.** |
| ⬜ | ⚠️ **A THIRTEENTH DOCUMENT STATES THE ICING EXEMPTION AND CARRIES NEITHER THE COUNT TEST NOR THE BOX ERROR — `zone_entries.md:645`, a `Rule:` line voiced ALONE with a 300 ms break either side.** *"A shorthanded team is exempt from icing under NHL 81.6 and USA Hockey 624(b)(1), but USA Hockey grants that only 'For all Youth 15-Only and above…', and 81.6 withdraws it from a team short by a major with nobody on the penalty bench."* **Both conditions it does carry are correct; the one it omits is what *shorthanded* MEANS**, which is the defect this whole release repaired elsewhere. ⚠️ **It was not among the twelve, so no propagation reached it, and it is not wrong — it leaves the listener to supply the term's meaning.** That was fatal while the corpus's own glossary defined the term by the box; the glossary is now fixed, so the term resolves. **A judgement call, not a defect list entry: read it against `special_teams.md`'s fuller statement and decide whether a line voiced alone can rely on a definition in another document.** Found by a corpus-wide sweep for exemption statements after the twelve were repaired — **the sweep the propagation should have started from.** ⚠️ **A count of that sweep was written here and has been removed: it was 58 on one pattern and 94 on a commit gate's, and NEITHER pattern was recorded beside its figure, so neither is auditable.** The finding is the line; the tally was never evidence for it. **Record the pattern or drop the figure — this file owns that doctrine and broke it in the row that states it.** |

### ⚠️ Two governing documents disagree about when the gate applies — 14 September 2026

| | |
|---|---|
| ⬜ | ⚠️⚠️ **`review_process.md:348-351` and the practice now diverge, and a commit gate named it rather than resolving it silently.** The file says *"C3–C8 and C11 govern **claims**. They do not govern a typo fix, a reworded heading, a build-script change, or **a commit that touches no file under `content/`**."* ⚠️ **The diagram-placement reversal touches no `content/` file — so on the repository's literal text, C8 did not apply and no review record was required.** The gate was briefed to treat a governing-document change as a claim change (*a governing document is a force multiplier in both directions*) and applied the stricter reading; **that is the only reason [`readability_diagram_placement_2026-09-14.md`](../reviews/readability_diagram_placement_2026-09-14.md) exists at all.** ⚠️ **As written the two disagree, and the next gate will land on the other side of it.** **Decide which governs and reconcile the two documents.** The case for the stricter reading is that `content_style_guide.md` is the specification 32 documents are about to be edited against; the case for the literal text is that it is the file's own considered scope and widening it by brief is how a gate becomes unbounded. **This is the owner's call, not a gate's and not a coordinator's.** |
| ✅ | **FIXED 14 September 2026 — `check_links.py` now checks every tracked markdown tree**, and the fix found two dead links on the repository's front page. See [`check_links_widened_2026-09-14.md`](../reviews/check_links_widened_2026-09-14.md). **The 13 broken `project/` links are cleared: six were the masking bug, four were real, three were legitimate directory links the old policy could not express.** |
| ⬜ | ⚠️⚠️ **834 DERIVED ANCHORS BEGIN WITH AN INVISIBLE CHARACTER, ACROSS 53 FILES, AND A HAND-TYPED DEEP LINK TO ANY OF THEM SILENTLY FAILS.** A heading opening `⚠️ ` slugs to a string whose FIRST character is a bare **U+FE0F variation selector** — `⚠` (U+26A0) is stripped and the selector survives. ⚠️ **This is not a bug in our replica: the real `github-slugger` in `site/node_modules` produces byte-identical output**, verified this session, so the site and the checker agree and the anchors work when generated. **They only fail when a human types one**, which is what happened at `round_59_the_dimensions_that_were_silent.md:562` — the link read `#-figures-…` and the anchor is `#️-figures-…`. **Fixed there by pasting the real anchor, which now contains an invisible character nobody will see when they next edit that line.** ⚠️ **Do NOT "fix" the slugger — 834 live anchors would move at once.** The options are an explicit HTML `id` on headings that get deep-linked, or a `--list-anchors` habit before writing one. **Nobody has decided; this is the trap, written down.** |

### ⚠️ The icing repair was incomplete, and the gap is a CRITICAL in the rule's owner — 14 September 2026

Commit `862c0dd` (⚠️ **cited as `74a5919` until a gate found that SHA unreachable — two rebases at 18:35 on 14 September 2026 rewrote the chain; identical trees, no work lost, nobody in the session ran them**) repaired what *shorthanded* MEANS across twelve documents. ⚠️ **It did not touch the
SECOND limb of NHL 81.6, and a `safety-reviewer` routed to one file found the same misstatement in
ten more sites.** Full record to follow; the rows below are the work.

| | |
|---|---|
| ⬜ | ⚠️⚠️ **CRITICAL — `special_teams.md:628`, the document that OWNS this rule, states NHL 81.6's major-penalty limb with the wrong trigger, voiced alone.** The rule withdraws the exemption where a major **expires** with nobody on the bench to exit (`sources/nhl_rules.txt:8682-8686`, *"to exit upon the expiry of the penalty"*); the corpus renders it as a present-tense empty bench. ⚠️ **`sources/nhl_rules.txt:2564-2568` (Rule 20.3) gives the team until any stoppage BEFORE the expiry to fill it, so the bench may legitimately be empty for most of a five-minute major.** A kill hears it may not ice the puck while a man down, for five minutes during which the rule does not bite. **Conservative in direction — they decline a clear they are entitled to — and still a misstatement.** Repair dispatched. |
| ⬜ | **The same short form in SEVEN further `Rule:` lines, each voiced alone:** `winger.md:558`, `goaltender.md:910`, `defender.md:607` and `:632`, `center.md:525`, `breakouts.md:76`, `faceoffs.md:906`. **And two prose layers:** `special_teams.md:22` (opening blockquote) and `language_and_glossary.md:355` (the *Shorthanded* glossary entry — ⚠️ **whose 🇬🇧 half is the corpus's model for IIHF scoping and must survive the repair**). Repairs dispatched across four disjoint agents. |
| ⬜ | ⚠️ **MAJOR — NOTHING IN THE CORPUS SAYS WHAT RULE 20.3 PERMITS.** `rules_primer.md:610` names it and stops. Its Exception 1 and `special_teams.md`'s Carve-out 1 both tell the reader *"somebody must be sitting in the box ready to come out"* — **good bench practice, reading as the legal test, which is non-negotiable 7 in its exact shape.** After the `zone_entries.md` repair that document is the only one stating the box may legitimately sit empty. **`rules_primer.md` is the owner.** |
| ⬜ | **`rules_primer.md:375` uses the short form in a summary bullet.** Graded minor because the full text sits two sections above under a named anchor the bullet links to. ⚠️ **A listener cannot follow an anchor.** Weigh it as a spoken unit, not a page. |
| ⬜ | ⚠️ **🇬🇧 BRITISH U12 PLAYS A DIFFERENT GAME AND THE CORPUS DOES NOT KNOW IT.** `sources/ihuk_junior_roc.txt:2752-2755`, Appendix D: **"Icing • No icing calls at U12."** ⚠️ **And it is not one line: roughly `:2690-2760` also gives U12 a running clock, buzzer line changes and NO OFFSIDE STOPPAGE** — *"Play does not stop… Officials call e.g., 'Reds OUT!'"*. **`zone_entries.md`, `neutral_zone_systems.md` and `breakouts.md` are written for a game with icing and offside stoppages that British U12 does not play.** The repairing agent declined to put it in `zone_entries.md` and was right — *"a no-icing note in one dump-in subsection would be an orphan"*. **`uk_rules.md` is the primary home; `rules_primer.md`'s icing section and `special_teams.md`'s existing rec-and-youth note are the secondary ones. The corpus-wide scoping question is the owner's, not an agent's.** |
| ⬜ | **`hockey_canada` and `carha` were GREPPED for penalty-bench icing language but NOT read end to end.** So the corpus can say the NHL's book has this paragraph and the IIHF's does not — **verified in both IIHF editions** — but **cannot certify no fourth book has an equivalent.** ⚠️ **The repairing agent removed an "the NHL alone" exclusivity claim rather than repair it, which is the right call and leaves the question open.** Read HC 6.7 and CARHA 65 end to end and settle it. |

### What the icing-limb repair found that nobody was looking for — 14 September 2026

| | |
|---|---|
| ⬜ | ⚠️⚠️ **A NEW DEFECT CLASS: AN ELLIPSIS THAT ELIDES A VERBATIM QUOTATION AT EXACTLY ITS CAVEAT.** `special_teams.md`'s UK blockquote quoted NHL 81.6 as *"a player on the penalty bench… Icing will be called"* — **and the elided words were *"to exit upon the expiry of the penalty"*, the entire operative limb.** The quotation marks were honest, the ellipsis was honest, and the result was a rule with its trigger removed. ⚠️ **No checker can see this**: `check_facts` does not read prose, `check_absolutes` looks for unscoped denials, and a `source-verifier` locating the quoted string in the book would FIND IT — because every word printed is in the book. **Census the corpus for `…` and `...` inside quotation marks and read what each one drops.** This is the only instance found so far and it was found by an agent sweeping for a different word. |
| ⬜ | ⚠️ **`special_teams.md`'s icing block is at `HARD_MAX` 11 facts with its `Rule:` line at 295 of 300 characters — FIVE characters of headroom, and the style guide's remedy for a long fact is to split it, which is not available at 11.** Its repairing agent called this structural rather than something to fix inside a repair: *"this section is doing two jobs — the icing exemption, and the puck-out-of-play minor across five books. The next correction to land in this block has nowhere to go."* **Split the section or the block, deliberately, before the next correction forces it.** |
| ⬜ | **The corpus-wide layer policy for this carve-out, set by the agent that owns the rule, recorded so the next round does not re-litigate it:** *"State it fully or not at all, in every layer. The defect shape is the half-statement, not the omission."* Siblings carry **the moment** wherever they state the trigger at all, in **body and facts** alike. Siblings are **NOT** required to add it to Common Mistakes or Key Takeaways — those are extraction-of-extraction layers, the style guide forbids a third restatement, and **the hazard direction here is conservative**: a reader declines a legal clear and concedes a faceoff. ⚠️ **But any sibling whose summary layers ALREADY mention the carve-out must state it with the moment.** |
| ⬜ | ⚠️ **"EJECTION AND INJURY ARE THE ONLY TWO ROUTES" WAS RECORDED HERE AS SETTLED AND IT IS NOT — a second agent found the paragraph the first one stopped short of.** NHL 27.2's first paragraph does close the ordinary goaltender case: a goalie's major is *"served immediately by another member of his team who was on the ice when play is stopped"* (`sources/nhl_rules.txt:3368`). ⚠️ **But 27.2 has a SECOND paragraph nobody had read:** *"When a goalkeeper is assessed a major penalty plus a game misconduct, which is coincidental with a major or match penalty to the opposing team, **no player is required to serve the goalkeeper's penalties in the penalty box**, since he has been ejected from the game."* **The agent that found it believes it opens no route — coincidental majors leave neither side shorthanded, so there is no exemption to withdraw — and said plainly that it *"did not trace that through to a conclusion"*, then deliberately wrote its own repair around 20.3's scoping clause rather than around an exhaustiveness claim.** ⚠️ **That is the right call and the row is the lesson: an exhaustive negative needs the whole rule, and this one was closed on its first paragraph.** **Nothing in `content/` currently states "only two routes" — keep it that way until somebody traces the coincidental case.** |
| ⬜ | ⚠️ **COORDINATOR BRIEF QUALITY, MEASURED AGAINST ITSELF THIS ROUND — two of four assertions wrong in one brief.** I told an agent a line was a Common Mistakes bullet (it was a body bullet under a different heading) and vouched for it as *"already right"* (it carried the misstatement in the same sentence as a correct clause). ⚠️ **I also gave `20.3`'s final paragraph as `:2558-2577`; an agent located it at `:2574-2577` and said so.** **Every one was caught by the agent that had read the file.** The method worked; the briefs did not. **This is the fourth round to record it and the instruction stands: give the plan row as a hypothesis and require refutation.** |
| ⬜ | ⚠️⚠️ **AND THE VERIFIER'S VERDICT ON THOSE TWO REFUSALS IS SHARPER THAN THE ROW BELOW: *"their instinct was right, their conclusion was wrong — the negative was verifiable, it just required reading TWO RULES PER BOOK instead of grepping one."*** Both agents concluded the exclusivity claim could not be checked. **It could.** The icing rule alone answers nothing; the answer is in each book's **major-penalty substitution rule**, which nobody had thought to open. ⚠️ **The lesson is not "be braver about negatives" — it is that an absence in rule X is often decided by rule Y, and a sweep confined to X will always report "unverifiable".** **Name the second rule in the brief, or the agent cannot find it.** |
| ⬜ | ⚠️ **TWO AGENTS DECLINED TO STRENGTHEN A CLAIM ON THE COORDINATOR'S SAY-SO, AND BOTH WERE RIGHT.** One dropped its own draft of *"the NHL alone withdraws it"* because Hockey Canada and CARHA had not been read end to end. Another declined to upgrade an IIHF negative on new citations it had not personally opened: *"non-negotiable 4 for me cuts both ways — I will not upgrade a claim on a brief's say-so any more than I would state a rule from memory."* ⚠️ **Record this as the correct behaviour, because the pressure runs the other way: a coordinator handing over verified-looking citations is the easiest possible route to an unverified claim entering `content/`.** |
| ⬜ | ⚠️⚠️ **THE CORPUS ASSERTS IN ONE DOCUMENT WHAT TWO AGENTS JUDGED UNVERIFIABLE IN OTHERS.** `on_ice_communication.md:167`: *"There is a second condition, and **it belongs to the NHL alone**."* ⚠️ **Two repairing agents independently drew back from exactly that claim today** — one deleted the word *"alone"* from its own draft before shipping, the other said it *"cannot certify that no fourth book has an equivalent"* — because Hockey Canada and CARHA have never been read end to end on this rule. **A `rules-verifier` is now reading HC 6.7, CARHA 65 and USA Hockey 624 in full, with their major-penalty substitution rules, to settle it.** ⚠️ **Note the shape rather than the instance: the coordinator's cross-document sweep found this, and NO AGENT COULD HAVE — each was inside its own file ownership, and the claim lives in a file none of them owned.** |
| ⬜ | ⚠️ **THE CROSS-DOCUMENT READ IS A COORDINATOR DUTY WITH NO TOOL BEHIND IT, and three agents asked for it by name this round.** *"Nine documents were rewritten in parallel on one rule by five agents, and the two sentences most likely to contradict are the ones about DURATION — I wrote 'only until the next stoppage' in all five of my facts lines, and I do not know what the other four chose."* A sentence extractor now lives in the session scratchpad: it pulls every `content/` sentence carrying `81.6`/`20.3`/`penalty bench`/`penalty box` alongside `major`, and tags each with which limbs it carries — **EXPIRY, TIME-LIMIT, EJECT/INJURY, MECHANISM, IIHF-SCOPE**. First run: **108 sentences across 20 documents.** ⚠️ **It is a worklist, not a gate, and it must not become one: a sentence legitimately carries only the limbs its site needs, and a tool that ranked these and offered to fix them is how round 44 manufactured a divergence that did not exist.** **Promote it to `scripts/` only if a second round wants it.** |
| ⬜ | ⚠️⚠️ **A SWEEP INSIDE YOUR OWN FILE OWNERSHIP IS NOT ENOUGH, MEASURED TWICE IN ONE ROUND.** An agent repaired `breakouts.md:76` and `:87`, swept the file, and reported it clean — **and `:435` survived**, found later by an agent working on a different document entirely. A second agent's grep of `81.6|20.3|penalty bench` likewise missed a paraphrase carrying no rule number. ⚠️ **The pattern that works is a SENTENCE-LEVEL split looking for `major` near `ice`/`clear`/`exempt`, with no rule number required** — one agent ran exactly that as a second pass and said so. **Put it in the brief, not in the agent's judgement.** |
| ⬜ | ⚠️ **TOOL GOTCHA — `md_to_speech.py --only <id>` PRINTS "1 documents" AND WRITES THE WHOLE CORPUS, and the non-matching documents are rendered from something other than the current tree.** An agent ran it a minute after editing and got `rules_primer` chunks *"containing text that is no longer in the file"*, while a grep of `content/` confirmed the tree was clean. ⚠️ **So a `--only` run's OTHER documents are stale output that looks current, which is the silent-false-pass shape this project already records for the nvm shim and the Astro cache.** **Read only the document you asked for.** |
| ⬜ | **Two `check_pointers.py` hits remain in `rules_primer.md`, both pre-existing**, and `game_management.md:183` now ends with a pointer a listener cannot follow — *"[Special Teams] covers this rule"* — **though its substance is now stated inline where it was previously half-stated.** The repairing agent named the pointer run as the one check it could not close. **Run `check_pointers.py` over the eleven repaired documents once every agent is finished, and read every hit.** |
| ⬜ | ⚠️⚠️ **"A GREP WHOSE OUTPUT WAS TRUNCATED HAS NOT BEEN RUN." The agent that missed a site in its own file diagnosed itself, and this is the round's most transferable finding.** Its first sweep of `breakouts.md` was broad enough — `81\.6\|penalty bench\|shorthanded\|icing\|ice the puck` — but **returned 52.5 KB, was truncated to a ~2 KB preview, and it read only the preview.** The missed site was in the remainder. ⚠️ **It then narrowed to a phrase LIFTED FROM THE HITS IT HAD ALREADY SEEN, so the second grep was structurally incapable of finding anything worded differently — it confirmed the first grep's blind spot instead of covering it.** The missed line said *"loses the exemption"* where the others said *"withdraws it from"*. **Two compounding failures: treating a truncated result as complete, then shaping the follow-up pattern from what was already found.** **The fix: write the sweep to a file and split on sentence boundaries, so nothing hides inside a 3,000-character bullet or falls off the end of a preview.** |
| ⬜ | ✅ **SETTLED BY A `rules-verifier` READING FOUR BOOKS END TO END — the NHL's empty-bench icing sanction exists in NO other book on disk, and every silence has a MECHANISM.** **Hockey Canada 4.4(a)**: a major carries a game misconduct and the coach *"will designate any player on the ice at the time of the infraction to serve the penalty"* — no deferral, so the bench is never empty. **CARHA 30(a)**: *"The penalized team shall place a substitute player on the Penalty Bench"* — mandatory, immediate. **IIHF 20.3**: *"immediately"*. ⚠️ **USA Hockey 403(d) SPLITS BY CLASSIFICATION and is the opposite of the NHL for adults, not a milder version:** Youth/High School/Girls' must place a substitute *"immediately"*, while **Adults *"shall not be required"* to and regain even strength *"by adding a player from the team bench"*** — no duty to neglect, and the return is not from the penalty bench at all. Casebook Rule 403 Situation 3 answers it both ways. ⚠️⚠️ **BUT THE VERIFIER'S GENERALISATION — *"every silence has a mechanism, none is a bare zero"* — IS FALSE FOR USA HOCKEY'S ADULT GAME, AND THE COORDINATOR RELAYED IT TO TWO MORE AGENTS BEFORE ANYONE CHECKED.** The repairing agent refused to paste it and verified why (re-verified here at `sources/usah.txt:2481-2488`): **403(d) for Adults says the penalized team *"shall not be required to place an additional or substitute player on the penalty bench"*, and regains even strength *"by adding a player from the team bench"*.** So under USA Hockey adult rules **the penalty bench is empty BY DESIGN for the whole major** — precisely the state NHL 81.6 penalises — **and Rule 624, read end to end, writes no empty-bench limb at all.** ⚠️ **The failure is not foreclosed there. It is UNPRICED — a genuine bare zero, in the largest adult population under that book.** **Four books, three mechanisms and one silence, not four mechanisms.** **So the corpus may state the claim with a scope, and may give the NHL's mechanism, but MUST NOT generalise the foreclosure across the other three.** Repair dispatched to `on_ice_communication.md:167`, the corpus's only unbounded exclusivity claim. |
| ⬜ | **`rules_primer.md:612`/`:882` and `special_teams.md:675` are the MODEL for this shape and should be pointed at, not rewritten** — each says *"not in your book"* of the IIHF with the 20.3 foreclosure, and neither makes an exclusivity claim. `game_management.md:183` and `zone_entries.md:646` state the rule as the NHL's without claiming exclusivity and are sound. **Recorded so a later sweep does not "fix" four correct sites.** |
| ⬜ | ⚠️ **CITATION DRIFT IN THE COORDINATOR'S OWN BRIEFS, CORRECTED TWICE BY DIFFERENT AGENTS.** I gave NHL 20.3 as `:2555-2577`; one agent located the sentence I quoted at `:2574-2577`, and the verifier put the rule body at **`:2557-2575`** — `:2555-2556` is the tail of 20.2 and `:2576-2577` is 20.4. **Both corrected it without being asked.** The figure is not the point: **a line range pasted into a brief is a number copied out of its owner, and this file says what happens to those.** |
| ⬜ | ⚠️ **ANOTHER COORDINATOR PREMISE REFUTED — I told an agent *"both your documents teach the on-ice head count"* and NEITHER DOES.** It grepped `numerical strength`, `below the numerical`, `no longer short`, `fewer skaters`, `on-ice strength` across `time_and_space.md` and `puck_support_and_spacing.md`: the count test appears nowhere, and both state the exemption in plain language instead. ⚠️ **The premise was load-bearing — I had argued the 20.3 mechanism was needed to stop the carve-out CONTRADICTING the count test. With no count test stated, it is needed only to stop the carve-out reading as arbitrary**, which is a weaker reason and led the agent to state it in one document and defer it by pointer in the other. **A different repair in each file, because the premise was wrong in both.** |
| ⬜ | **Two phrasings of one USA Hockey carve-out in sibling documents, reported and deliberately NOT swept:** `time_and_space.md:447` ends it *"a shorthanded team cannot ice the puck at all"*; `puck_support_and_spacing.md:410` ends it *"can be called for icing"*. ⚠️ **The second is more precise about what happens — the puck may be shot, the whistle follows — and the first tracks 81.6's own *"not permitted to ice the puck"*.** Both defensible, neither misleading. **The agent left them rather than manufacture a divergence, which is right; recorded because it is the shape a later reviewer stops on.** |
| ⬜ | ⚠️⚠️ **AN EXCEPTION INSIDE THE EXCEPTION, IN A RULE FIVE AGENTS HAD QUOTED ALL DAY: NHL 20.3's additional-minors sentence.** `sources/nhl_rules.txt:2561-2565` — *"If the player has been assessed **minor penalties in addition to the major penalty** that must also be served on the penalty time clock, the offending team **must place a substitute on the penalty bench immediately**."* ⚠️ **It falsifies the unqualified form of the very sentence this round taught the corpus to write.** The agent that found it had drafted *"an empty box earlier in the major costs them nothing"*, struck it, and said: *"teaching 'the box may sit empty until the expiry' flat would be teaching a bench a breach."* **Routed back to `special_teams.md`, which shipped the same absolute in different words.** ⚠️ **Whether a team in breach of the immediate-substitute duty can still ice the puck at minute four is NOT obviously settled by the two rules together, and no coordinator should guess at it in a brief — an honest "the books do not reconcile this" is the better outcome.** |
| ⬜ | ⚠️⚠️ **A LINE THE COORDINATOR VOUCHED FOR AS "ALREADY RIGHT" WAS CARRYING A FALSE ABSOLUTE — the THIRD such vouching error in one round.** `defensive_zone_coverage.md:670` read *"expiry counts the returning player in and ends the exemption **only if** that puts you level"*. ⚠️ ***"Only if" is a closed set, and NHL 81.6's third paragraph is a member of it that the line excluded*** — a major expiring with an empty bench ends the exemption **without** putting the team level. **In the extraction layer, voiced alone, with no body to correct it.** **Stop vouching for lines in briefs. Name the site and let the agent read it.** |
| ⬜ | ⚠️ **A TRUE CLAUSE WAS TRADED OUT OF AN EXTRACTION LINE TO FIT A CAVEAT IN, AND IT IS VISIBLE ONLY BECAUSE THE AGENT WROTE IT DOWN.** To fit the classification hedge into `defensive_zone_coverage.md:670`, it removed *"and a clear released before expiry is never icing"* — **a permission, not a caveat**, so losing it costs a reader a conservative play rather than a penalty, and the body carries it four sentences later. The agent declared the trade and said it *"would not have made the reverse trade."* ⚠️ **Its closing sentence is the row: *"a 300-character cap on a block already at its 11-fact ceiling is a mechanism for losing content silently, and the only reason this one is visible is that I wrote it down."*** **That is a structural finding about `MAX_LEN` + `HARD_MAX` together, not about this line.** |
| ⬜ | ⚠️ **THE ADDITIONAL-MINORS SITE LIST, MEASURED — AND DELIBERATELY NOT PROPAGATED YET.** A sentence-level sweep for *"the box/bench may stay empty"* returns **15 sites across 9 documents**, of which **13 state the permission with no qualification**: `language_and_glossary.md:355` (×2), `rules_primer.md:339`, `:377`, `:616`, `:968`, `:1034`, `scanning_and_anticipation.md:190`, `center.md:536`, `winger.md:569`, `defensive_zone_coverage.md:670`, `game_management.md:183`, `zone_entries.md:1091`. **Only `defensive_zone_coverage.md:690` and `:785` carry it** — written by the agent that found it. ⚠️⚠️ **DO NOT SWEEP THESE.** The prior question is whether 20.3's immediate-substitute duty changes the icing outcome at all, and **81.6's sanction is keyed on failure *to exit upon the expiry*, which the two rules do not obviously reconcile.** `special_teams.md` and `rules_primer.md` — the rule's owner and the corpus's rules owner — have both been sent back to settle it **and have been told in terms that an honest *"the books do not reconcile this"* is the better outcome.** ⚠️ **Propagating a confident reading to 13 sites before that ruling is exactly how round 44 manufactured a divergence that did not exist.** **Wait for the ruling, then propagate or disclose.** |
| ⬜ | ✅ **THE RULING CAME BACK, AND IT IS NOT THE HEDGE I OFFERED: the books DO settle the icing question, positively.** The rule's owner ruled that **three separate sentences timestamp the sanction at the expiry and nowhere earlier** — 81.6's *"to exit upon the expiry"*, 20.3's *"prior to the expiration"*, 20.3's *"to return to the ice at the end of the major penalty"*. **A bench that is late but seats somebody before the buzzer has not *"neglected to ensure there is a player… to exit upon the expiry"*, so 81.6's trigger is not met.** That rests on the rule's own wording, not on silence. ⚠️ **So the corpus's icing answer needs NO hedge, and I was wrong to offer one.** **What is genuinely unsettled is narrower: whether anything ELSE follows from breaching the immediate-substitute duty at minute four** — the book does not say, and the owner confined the disclosure to exactly that question rather than hedging an answer the books give. ⚠️ **This RE-CLASSIFIES the 13 sites: a site saying *"you may still ice it during the major"* is CORRECT and needs nothing. Only a site stating the *"the box may stay empty"* PERMISSION as unconditional is overstated.** **Re-read on that distinction before touching anything.** |
| ⬜ | ⚠️ **AND THE EMPTY BOX IS NOT FREE — a written consequence nobody had quoted, found by the owner while ruling.** `sources/nhl_rules.txt:2568-2571`, inside 20.3: *"Any replacement player who enters the game other than from the penalty bench shall constitute an **illegal substitution under Rule 68 – Illegal Substitution calling for a bench minor penalty**."* ⚠️ **This is the written reason benches seat somebody early**, and it means the corpus's standing coaching advice can now rest on a rule instead of on folklore — **which is the non-negotiable-7 shape three briefs flagged and nobody could close until now.** ⚠️ **Rule 68 itself is UNREAD** — the owner quotes it and says so — and **USA Hockey 403(c)**, which 403(d) makes an exception for and which the corpus now quotes around, is unread too. **Both are the next sentence-inside-a-rule waiting to happen.** |
| ⬜ | ⚠️ **THREE ROUNDS OF BRIEFS ON ONE RULE, EACH CARRYING A DIFFERENT DEFECT, ALL THREE FOUND BY READING THE BOOK AND NONE BY READING THE BRIEF.** In the owner's own tally: *"the wrong trigger, then a missing sentence inside 20.3, then a flattened four-book summary."* ⚠️ **The residual risk it names is the one to carry forward: *"a fourth sentence inside a rule I quoted but did not read to its end."*** **Every agent this round that read a cited rule END TO END found something in it that the briefs had missed. Quoting a rule is not reading it.** |
| ⬜ | ⚠️⚠️ **A VERIFIER'S GENERALISATION PROPAGATED THROUGH THE COORDINATOR INTO THREE BRIEFS BEFORE AN AGENT REFUTED IT — the round's cleanest instance of the documented failure, and it was the coordinator's doing.** The verifier gave *"every other book forecloses the failure rather than penalising it"* as a summary of four books it had genuinely read. **I relayed that sentence verbatim into three separate messages.** ⚠️ **One agent declined to paste it, opened `usah.txt` itself, and found USA Hockey adults are the counter-example** — *"had I written 'every other book forecloses the failure', I would have shipped a half-rule into the one document that teaches the shout."* ⚠️ **The verifier's underlying work was sound: three books DO foreclose it and it read all four end to end. The defect is the summary sentence, which flattened a four-way split into a rule** — and a coordinator quoting a reviewer is exactly as dangerous as a coordinator quoting a rulebook from memory. **`CLAUDE.md` says the briefs are more defective than the corpus; this round it was true of a brief built from a verified report.** |
| ✅ | ⚠️⚠️ **[SUPERSEDED 15 Sep — D15 DISCHARGED via headless CDP; see `readability_diagram_placement_2026-09-14.md`.] C10 IS NOT CLEARED AND CANNOT BE WITHOUT THE OWNER: the Chrome extension refuses localhost outright.** Every `navigate` returned *"Could not verify this site's safety category. Blocking as a precaution"* across five attempts on `localhost:4337`, `127.0.0.1:4337`, `localhost:4321`, with waits between. ⚠️ **This is NOT the auth timeout the owner re-authenticates** — `tabs_context_mcp` and `tabs_create_mcp` authenticated fine; **it is the URL-categorisation check refusing an uncategorised localhost.** The reviewer stopped after five rather than looping, **filed no visual finding at all**, and said plainly: *"Given no rendered page was inspected, this change should not clear D15 on the strength of this report."* **A preview server is up on 4337 serving the verified-fresh `dist`.** **Options are: the owner allowlists localhost in the extension, or Playwright is added to `site/` — and the reviewer declined to add a dependency to tooling it does not own.** |
| ⬜ | ⚠️ **A SERVER ON A NEIGHBOURING PORT WAS SERVING A STALE TREE, and the wrapper lied about its own port.** `npm run preview` printed *"running at 4337"* **~6 seconds before anything was listening there**, and **port 4322 serves a different, stale build that 404s on `/foundation/rules_primer/`**. The reviewer confirmed its port by fetching an asset and reading it. ⚠️ **This is the second round in which a site reviewer nearly measured the wrong tree.** **Put "confirm the port by reading an asset, never by trusting the wrapper" in every site brief.** |
| ⬜ | **The static half of C10 is genuinely reassuring on the one failure mode with a binary answer, and silent on the rest.** Derived from `dist`, not painted: **`class="language-facts"` appears ZERO times and `class="facts"` 830 times with 5,555 matched label/value pairs** — no facts block degraded to a raw code block, which was the ceiling risk. The new `rules_primer` table is wrapped in `div.table-scroll` with `overflow-x:auto` and a sticky first column; `body{overflow-x:hidden}` plus the `@supports (overflow-x:clip)` fallback **both survived minification**. Pagefind is fresh (39 fragments, 20:47). ⚠️ **Whether the table is READABLE at 375 rather than merely present is exactly what could not be determined.** |
| ⬜ | ⚠️ **MY CHARACTER COUNTS FOR THE `Rule:` LINES WERE LABEL-INCLUSIVE AND I REPORTED THEM AS VALUES.** I briefed 298 and 295 against the 300 cap; measured from the staged diff the three longest added lines are **300, 300 and 297 INCLUDING the `Rule: ` prefix — values of 294, 294 and 291.** `check_facts` measures the value. **Nothing sits at the ceiling, and the panic about five characters of headroom was partly my arithmetic.** |
| ⬜ | **`defensive_zone_coverage.md:690` measured rather than judged: ONE `<li>` of 3,895 plain-text characters, 17 sentences, ZERO `<p>` elements**, with the two halves of its *"Two of them vary by book… The third is in all five books"* scaffolding **2,926 characters apart**. ⚠️ **But it is not a regression this change introduced** — it is the 4th longest `<li>` on its own page (longest: 8,666) and `offensive_zone_play` carries one of **15,332**. **The pattern is house-wide and is instruction-2 work, not an icing defect.** |
| ⬜ | ⚠️ **THE COUNT TEST'S 4-on-4 FALSIFICATION IS VERIFIED AGAINST THE NHL BOOK ONLY.** An agent repaired seven documents to tie the exemption to the on-ice count rather than the penalty clock — *"kill a five-minute major, the other team takes a minor, you are 4-on-4, not below their strength, and icing applies"* — and verified it at NHL 81.1 (`sources/nhl_rules.txt:8557`) and 81.6 ¶1 (`:8671`). ⚠️ **It said plainly that it did NOT check whether USA Hockey's or Hockey Canada's shorthanded definitions produce the same result**, so a reader under those books has the count claim unverified. **Recorded rather than quietly inherited.** `rules_primer.md` owns the five-book comparison and is where this closes. |
| ⬜ | ⚠️ **ACCEPTED LIMITATION, not a defect: `defensive_zone_coverage.md:670` glosses the NHL/IIHF 68.2 deadline split as one deadline.** The two books price the empty box identically and differ only on when the substitute is due — *"immediately"* (IIHF) against *"before the major penalty expires"* (NHL). **The line is at 299 of the 300-character `Rule:` cap in a block at `HARD_MAX` 11, so it cannot be carried.** The body at `:690` and `defender.md:632` both state the split correctly. ⚠️ **The hazard direction is safe: the IIHF's deadline is the stricter one, so a listener who obeys it satisfies the NHL's too.** **Freeing a fact to buy three words would cost more than it gains.** |
| ⬜ | ⚠️⚠️ **A COORDINATOR WROTE A `Rule:` LINE INTO A BRIEF WITHOUT MEASURING IT, AND IT WAS OVER THE CAP.** The fix sketch for `defensive_zone_coverage.md:670` measured **305 against a 300 limit**; the agent caught it on its first pass and shortened it. ⚠️ **This is the exact thing every brief this round instructs agents not to do with a quotation — and it is also `CLAUDE.md`'s *"the brief's proposed wording is a brief, not a patch"*, failing in the one form that a checker WOULD have caught.** **Measure any wording a brief supplies, or supply none.** |
| ⬜ | **A defect class no checker in this repository looks for, found as a side effect of counting rather than sweeping: a MALFORMED quotation span.** `defensive_zone_coverage.md:785` carried `*"goalkeeper's privileged"*` with a closing curly mark where an opening one belonged. **The agent found it because its curly-quote census came out 36 open against 37 close** — not because it was looking for it. ⚠️ **And the same pass established the right restraint: it converted the OUTER delimiters and deliberately left the NESTED curly marks at `:146`, `:689` and `:691`, which sit inside straight-quoted rulebook text and reproduce the source's own internal quotation marks. Sweeping those would have corrupted quotations.** |
| ⬜ | ⚠️⚠️ **AGENTS ARE CLOBBERING EACH OTHER'S SCRATCHPAD FILES, AND ONE CAUGHT IT MID-ROUND.** An agent wrote its sweep to `<scratchpad>/sweep.txt`, ran `wc -l` and got **33 lines**, then ran `cat` on the very next command and got **114 lines of a DIFFERENT DOCUMENT** — another live agent writing the same path in the same shared scratchpad. ⚠️ **It re-ran with a PID-unique filename and printed the output inline, so nothing of its own rested on the bad run — but it said plainly: *"any finding either agent drew from a bare `sweep.txt` today is suspect."*** **I confirmed the shared file exists.** ⚠️ **This is round 59's `check_disclosures.py` failure in a new place: a tool's output changing under an agent with no edit of its own.** **Every brief that tells an agent to write a sweep to a file must require a unique filename — and a sweep result nobody can attribute to a run is not evidence.** |
| ⬜ | ⚠️ **THE 5-on-3 CLAIM HAS NOW BEEN WRONG THREE TIMES IN ONE DAY — on scope, on modality, and on edition — and each repair worked from a LIST that was short.** Four sites were hedged; a gate found a fifth; the repairing agent found a **sixth** in its own file (`zone_entries.md:656`, body prose in a paragraph about the deadline split, so *"nothing in the sentence's neighbourhood advertised it as a 5-on-3 claim"*). ⚠️ **Twelve files carry this claim. One agent checked one file and said so.** **A thirteenth site phrased without the string — *"a two-man advantage"*, *"down to three"* — would pass every pattern used today.** **Census it properly or stop propagating it.** |
| ⬜ | **The hedge is now evidenced rather than bare, and the reason is worth keeping.** A brief warned that *"a bare 'can' is the hedge a later tidying pass deletes, because nothing on the page says what it is hedging against."* The agent went further than its four siblings and found the **load-bearing rule none of them cites — IIHF 15.1**: an infraction by the team **not in control of the puck** draws only a raised arm, and play runs on until *"the team to be penalized gains control of the puck"*. ⚠️ **That is why a major can expire before the whistle arrives**, and it is now in the Sources trailer. **A tidying pass has to delete a cited rule, not an unexplained *"if"*.** I verified the wording. |
| ⬜ | ⚠️⚠️ **THE COORDINATOR'S ROUTING FAILURE, THIRD INSTANCE TODAY AND THE MOST EXPENSIVE: I told an agent Hockey Canada and CARHA *"were not read"* and instructed it NOT to fill the gap. BOTH BOOKS ARE ON DISK.** It read them anyway and found **the corpus's faceoff split is three books mandatory and two discretionary, not one and two**: Hockey Canada 6.2(c) *"the Referee **will** assess a Minor penalty"*, and **CARHA *"the Referee **shall** assess a Minor penalty" with NO discretion clause at all — the strictest wording of the five.** ⚠️ **`CLAUDE.md` names this exactly: *"The defect is ROUTING, NOT DILIGENCE: a brief that names a source and says 'grep it' produces an agent that greps it."* A brief that says a source was not read produces an agent that does not open it — and this one opened it anyway.** **Verified both strings myself.** |
| ⬜ | ⚠️ **AND THE SECOND-VIOLATION BENCH MINOR DOES NOT EXIST IN THREE OF THE FIVE BOOKS**, so any 5-on-3 reached through it is wrong for most readers. **USA Hockey 613(d): *"a minor penalty for delay of game being assessed to the **player committing the second violation**"* — an INDIVIDUAL minor, not a bench minor.** Hockey Canada 6.2(e) and CARHA (d) both write *"**may** be assessed"*, discretionary. **Only the NHL's and the IIHF's is a mandatory bench minor.** ⚠️ **`faceoffs.md:405-416` and `winger.md:495` already carry this correctly and were AHEAD of the brief that went looking for a defect in them.** **`special_teams.md` is being checked against it now.** |
| ⬜ | ⚠️ **A BRIEF WENT LOOKING FOR A DEFECT IN THREE DOCUMENTS AND FOUND THE CORPUS ALREADY AHEAD OF IT.** `faceoffs.md` and `center.md` carried a **four-book** split at all four layers before this round touched them, where the brief supplied two. **The agent reported: *"The corpus was right and the brief was stale."*** ⚠️ **It repaired exactly ONE genuine Critical — `winger.md:499`, the line a winger reads AFTER stepping in for an ejected centre, i.e. when the team is already one violation from a bench minor — and it called that *"the moment of maximum exposure in the whole document."*** **Record this as the counterweight to every row above: the briefs were wrong in BOTH directions today, and an agent that verified rather than obeyed found both.** |
| ⬜ | ⚠️ **EVERY BRITISH READER'S ANSWER ON THE FACEOFF-DOT HAZARD RESTS ON UNVERIFIED CITATIONS.** Four sites — `faceoffs.md:314`, `:429`, `winger.md:497`, `center.md:432` — cite the IHUK In-House Rules 2026-27, **including the claim that IHUK *"does not amend IIHF 76.7"***. The agent that read five rulebooks on this rule said plainly: *"I did not verify a single one of those against an IHUK document — I have no copy on disk and did not look for one."* ✅ **CLOSED THE SAME DAY, by an agent that went and read it:** `sources/eiha_inhouse_2026-27.txt:416-419` is **the entire Rule 76 amendment** — the centre-replacement sentence and one on squaring up and stick blades. **Nothing on 76.7's contact minor or its second-violation bench minor.** So the IIHF's *"may"* stands unamended for a British reader and the corpus's *"does not amend it"* is **correct**. ⚠️ **A naming mismatch is reported and NOT resolved: the corpus calls this *"IHUK In-House Rules 2026-27"*; the file is `eiha_inhouse_2026-27.txt` and its own text says *"EIH or SIHA competition"*. Nobody has established which name is right.** |
| ⬜ | ⚠️ **AN AGENT CAUGHT ITSELF WRITING A PREVALENCE CLAIM ITS OWN DOCUMENT DECLINES TO MAKE.** Repairing the faceoff split it drafted that the three mandatory books *"between them cover most North American rec, adult and youth hockey"* — and struck it, because `special_teams.md` says two sections above that *"how much rec, beer-league and youth hockey that adds up to is a question about leagues rather than about books, and this document has no count for it"*, **and its own trailer contradicts it for CARHA** (*"governs CARHA-affiliated leagues only and is not a general rec-hockey standard"*). ⚠️ **It also caught a miscount in the same pass — *"certain in two books of the five"* when it is three, in the safety-relevant direction.** **Both found by re-reading its own new text, not by a checker.** |
| ⬜ | ⚠️ **A COUNT BEAT FIVE MODAL VERBS, AND THE REPLACEMENT WAS SHORTER.** Facing five books with three different mandatory-vs-discretionary wordings, the agent rejected quoting all five modals in one `Rule:` line: *"read aloud as an isolated unit, 'mandatory under X, Y and Z, discretionary only under NHL and IIHF' fixes the direction in the listener's head in one clause, where five modals do not survive a single hearing."* **Its line came out 31 characters SHORTER than the one it replaced.** ⚠️ **Record it as the pattern for the text-reduction pass: the accurate version is not always the longer one.** |
| ⬜ | **IIHF 76.7(III)'s helmet-to-helmet limb is in `special_teams.md`'s body and in NO other layer of that file** — head contact, the highest-consequence class. **The facts block is at `HARD_MAX` 11 and every line carries a distinct rule**, so the agent reported it rather than trading a line out. `faceoffs.md:352` carries it in its own facts layer and `winger.md:499` names it, **so a listener meets it elsewhere** — but not in the document that owns penalty-kill discipline. |

### ⚠️ The faceoff-count wave: 33 defects where a brief named 5 — and a clean next round

| | |
|---|---|
| ⬜ | ⚠️⚠️ **CARHA ABOLISHES LAST CHANGE AND THE CORPUS TAUGHT THE OPPOSITE.** `faceoffs.md:221` said *"The home team still changes second under both, so last change survives."* **CARHA Rule 19(g)** gives *"a **ten-second period during which the teams may make player changes**"* — **one shared window, no visitor window, no home window, no order.** `"Visiting Team"` appears **once in the whole book**, about leaving the ice via a common exit. ⚠️ **A reader planning a matchup off last change in a CARHA game is planning off a rule that does not exist there.** Repaired. |
| ⬜ | ⚠️ **CARHA WRITES NO LATENESS WARNING, AND THIS ONE ERRS IN THE PENALISING DIRECTION.** The corpus taught *"Being late to the faceoff location costs one warning per game, not your centre."* **CARHA 57(c): *"the official **may order them replaced** at that face-off."*** ⚠️ **`warn` returns ZERO hits in the whole of Rule 57. A centre who trusts the warning loses the dot.** Repaired. |
| ⬜ | ⚠️ **A BRIEF NAMED FIVE SITES AND THE AGENT FOUND 33.** It missed the opening paragraph of `faceoffs.md`, both Common Mistakes layers, `center.md:455`, and eight further `faceoffs.md` sites. ⚠️ **It also named the WRONG LINE for the one repair it was most specific about** — `winger.md:494` carries no count at all; the count is in the body at `:511` and in **Key Takeaway 11 at `:718`, a layer the brief did not name.** **Editing as briefed would have changed a sound line and left both real sites plus a summary layer untouched.** |
| ⬜ | ⚠️⚠️ **THE NEXT ROUND, DISJOINT AND READY: `center.md` and `winger.md` carry MANY non-faceoff "four books" counts, and several are SAFETY-CRITICAL.** Head-down protection (`c:172,181,242`), trail-skate offside (`c:244,255`; `w:18,290,307,711`), **charging a goaltender** (`c:413,724`; `w:472,715`), **checking from behind** (`c:622,652`), tag-up (`w:291,305`), crease/screening (`c:395`; `w:528,537`), icing no-change (`c:570,572`; `w:591,595`). ⚠️ **CARHA has a head-butting match penalty at 48(b) and a checking-from-behind rule at `:4491`, so at least some of these counts are probably short too — and the agent verified NONE of them and said none should change on its say-so.** **This is a `rules-verifier` wave, not a repair wave.** |
| ⬜ | ⚠️ **A HONEST DISCLOSURE WOULD HAVE BECOME A FALSE ONE, AND THE AGENT CAUGHT IT.** All three Sources trailers said **"CARHA was read for those two clauses only."** Its own edits cited 57(a), 57(c), 19(g), 48(c) and 69. **Left unamended, a true scope disclosure becomes a lie by accretion.** All three updated; `faceoffs.md`'s now records that **Rule 57 was read entire**, which is what licenses its negative claims. ⚠️ **Record the shape: a disclosure is not write-once, and every edit that widens what was read must widen it too.** |
| ⬜ | **Two defects an agent created and caught in its own new text** — attributing a verbatim quote to two books when **CARHA writes *"shall"* where Hockey Canada writes *"will"*** (*"read aloud, a listener hears a verbatim quote sourced to a book that does not use those words"*), and a layout claim (*"four lines below"*) true of one extraction but not of the book. **Both found by re-reading its own output. A repair is new text and new text has not been reviewed.** |
| ⬜ | **`faceoffs.md:1140`'s *"four-book divergence checked 31 August 2026"* was deliberately LEFT.** ⚠️ **It is a DATED record of what was checked that day, and editing it would misstate history.** The CARHA read is separately dated 15 September. **Record the distinction: a dated measurement is not a stale figure.** |

### ⚠️ RETRACTED: the "check_caption_negations.py blind spot" — the defect was the measurement, not the tool

| | |
|---|---|
| ⬜ | ⚠️⚠️ **RETRACTED IN FULL. `check_caption_negations.py` IS NOT BLIND, AND THE COORDINATOR ASSERTED IT WAS ON THE STRENGTH OF A MEASUREMENT THAT DID NOT RUN THE TOOL.** I ran the tool's `CAPTION` regex directly against raw `.mjs` source and reported *"408 units, 22 seen at 0%, 39 more under 90%, 23 of 28 modules affected, 81% of caption characters scanned."* **Every one of those figures is an artefact.** `captions()` at `scripts/check_caption_negations.py:111` calls `strip_line_comments(f.read_text())` BEFORE matching, so the comments never reach the regex. **Measured through the tool's own pipeline: 408 units, 308,981 characters scanned, against a full comment-stripped assembly of 408 units and 309,027 characters — a 46-character delta from escaped-quote handling, and ZERO truncated units.** |
| ⬜ | ⚠️ **THE FIX I "FOUND" WAS WRITTEN FIVE DAYS EARLIER, AND ITS DOCSTRING IS A BETTER RECORD OF THE DEFECT THAN MY REPORT WAS.** `strip_line_comments` exists precisely for this, and its docstring dates the measurement to 10 September 2026: *"55 caption/describe blocks in 27 modules carry inline `//` lines… 50,801 characters — 12.4% of the layer — had NEVER been scanned, hiding 156 hit occurrences."* **It also records the constraint that makes the naive fix wrong — WHOLE-LINE ONLY, because a caption containing `https://` loses half its text to a naive strip, and this corpus's captions do carry URLs.** I re-derived a closed defect, restated it as open, and put a figure on it that was never true. ⚠️ **I also checked the residual case the whole-line rule leaves open — a TRAILING `//` on the same line as a string, which would still truncate: there are ZERO in the corpus.** |
| ⬜ | ⚠️⚠️ **THE TRANSFERABLE LESSON, AND IT IS THE ROUND'S: I MEASURED A REGEX, NOT A TOOL.** Lifting a pattern out of a script and running it standalone tests the pattern in isolation, not the program — every guard the program applies before that line is silently discarded. **The measurement looked rigorous: real regex, real corpus, real percentages, a severity breakdown, and worst-case examples I could name.** It was wrong at the first step. ⚠️ **The check that would have caught it costs one line — `grep -n "strip_line_comments\|CAPTION" scripts/check_caption_negations.py` and read the call site — and I did not run it before writing two rows and a paragraph of consequence about safety-critical captions.** **`CLAUDE.md` already says the briefs are more defective than the corpus; this is the coordinator's own brief to itself failing the same way.** |
| ⬜ | ⚠️ **AND IT PROPAGATED INTO AN AGENT'S EDITS BEFORE IT WAS CAUGHT.** The group-F caption agent reported *"`check_caption_negations.py` was blind to eight of my captions"* and **relocated the inline comments in those captions from inside the `caption:` run to above it**, with dated notes saying they were written against the longer text. **Those relocations were made to defeat a truncation that does not happen.** They are not harmful — the notes are dated and still attached — but a load-bearing comment is most useful anchored to the clause it protects, and eight moved away from theirs for no reason. ⚠️ **Decide deliberately whether to move them back; do NOT let the next round infer from their position that inline comments in caption runs are forbidden.** **The originating report — group G on `practice_and_development.mjs` — should be re-read with this in mind: its *"worth checking whether other modules have the same"* was the honest part, and the coordinator turned a question into a finding.** |

### Wave record: captions group D (goaltender / neutral_zone_systems / forechecking_systems / defender)

| | |
|---|---|
| ⬜ | **32 captions, 9,553 → 6,714 words (−30%).** Field-by-field diff against `8af85e4` confirms **only `caption` changed** in all 32 — `id`, `owner`, `title`, `half`, `width`, `numbered`, `describe`, `zones`, `players`, `routes`, `puck` byte-identical. `node --check` passes on all four. **Safety blocks byte-identical to HEAD in all nine captions that carry one.** |
| ⬜ | ⚠️ **THREE BRIEF CLAIMS REFUTED BY THE AGENT.** `defender.mjs` has **3** captions, not 4 (32 in the set, not 33). **Hockey Canada Interpretation 8's icing material is in no caption of that set at all** — it is in `content/positions/goaltender.md`'s body, so no cut could have touched it. **`defender-pair-overview` was already at 97 words and is irreducible** — every clause is a glossary gloss, a hedge, or the swap rule; left unchanged and said so. |
| ⬜ | ⚠️ **FOUR SAFETY BLOCKS ARE DUPLICATED VERBATIM ACROSS CAPTIONS AND SHOULD BE ROUTED INTO BODIES.** (1) The receiving-posture tail (*never take contact on the wall with your back to the boards*, three prohibitions, the USA Hockey walking-speed line), ~120 words, **identical in `forecheck-pinch` and `forecheck-press`**. (2) The 604(a)/604(b)/7.3/IIHF 101.1 enumeration, ~150 words, **identical across `forecheck-122`, `-131`, `-pinch`, `-press`**. (3) A short scope block, ~90 words, identical across `forecheck-212`, `-212-stacked`, `-roles-rotate`, `-2-3-lock`. (4) `defender-step-up`'s charging block, ~297 words — **including the round-10-shape critical that *"two strides is a safe harbour in no book"*.** ⚠️ **Routing 1–4 would take the forechecking module from 3,306 to ~1,570 words and the whole set to −60%. But the borrowing host that does NOT carry (2) in its own prose is `how_to_watch_hockey.md`, whose text beside the marker says the body-checking law *"belongs to Forechecking Systems rather than here"* — i.e. that host is RELYING on the caption. Route into the owner AND check every borrowing host before cutting.** |
| ⬜ | **Two claims were cut together with their own hedges, which is legitimate — recorded so nobody restores a bare claim later.** `goalie-angle-closes-wide`: *"the cheapest goal in hockey"* went out with *"coaching emphasis rather than a counted statistic"*. `defender-step-up`: *"a pinch is generally the safer of the two"* went out with *"read what that compares — rushes coming back at you, and not what the two plays do to a body"*. ⚠️ **Do not re-add either claim without its hedge.** |
| ⬜ | ⚠️ **`nz-1-4` OPENS ON AN UNSCOPED SUPERLATIVE — *"the most conservative structure in hockey"*.** **Pre-existing at HEAD, not born of the compression**, and the agent left it rather than widen its own scope. Own row. |
| ⬜ | ⚠️ **MARKERS THAT STILL LEAD THEIR SECTIONS, WHICH UNDERCUTS THE PREMISE THE CUTS REST ON.** The compression assumed *"the prose above the diagram is the text that describes it"*. Still leading: `goaltender.md` `:107`, `:556`, `:578`; `neutral_zone_systems.md` `:358`, `:360`; `defending_the_rush.md` `:687`, `:689`; `defender.md` `:9`. ⚠️ **Read at the start of that agent's run and `content/` was live under others — re-measure before acting. This is the second marker pass, and it is now unblocked.** |
| ⬜ | **What that method could not reach, in its own words:** no rule text was verified against `sources/` — its compressions of `goalie-rim-stop-or-clear` (*"Hockey Canada keys that to your crease and its own interpretation is in two minds about it"*, *"a privileged area that excludes the corner this rim comes through"*) are **paraphrases of primary text it did not re-read**, and a `rules-verifier` should read both clauses against `sources/hc.txt` and `sources/usah.txt`. **`md_to_speech.py` was not run**, so three named inversion shapes were judged on the page and not in sound: `goalie-angle-closes-wide`'s em dash, `nz-back-off`'s matched-dash pair around *"but never the middle"*, `forecheck-212`'s *"Two things the picture does not settle:"*. **Host prose was read for `how_to_watch_hockey.md`, `winger.md`, `defending_the_rush.md`, `switching_positions.md` — and NOT for `game_management.md`, `center.md`, `rink_map_and_glossary.md`**, where only marker position was checked. ⚠️ **`forecheck-212`'s "top of the circles" case proves that host dependency is real and invisible from inside the diagram module.** |

### Open after round 77 — the caption/marker waves closed; these are what they opened

**Closed work is in [`project/reviews/round_77_the_caption_could_not_be_shortened.md`](../reviews/round_77_the_caption_could_not_be_shortened.md). Rows here are OPEN only.**

| | |
|---|---|
| ⬜ | ⚠️ **THE SITE REVIEW RAN AND CLEARED THE GAP RULES — this row previously said it had not, which was false, and it shipped a list a third short.** ⚠️ **CORRECTED 16 September 2026 by a commit gate.** A `site-reviewer` drove **Chrome 152 over CDP** (the MCP extension refuses `localhost`), covered **all 49 pages and 331 figures in four cells**, and **proved causation by ABLATING the four `margin-bottom` declarations out of the live stylesheet**: `h3` 44 px against a 32 px baseline, `h4` 40, `hr` 44 (the `hr` rule buys only 4 px, because `hr` already carries `margin-top: 40px`). **It also synthesised the untestable `h5`/`h6` cases in the DOM — 40 px each — and the production minifier merging the `h4`/`h5`/`h6` rules into one block is independent proof no selector was malformed.** ⚠️ **AND THE LIST IN THIS ROW SAID NINETEEN. IT IS TWENTY-EIGHT, across 18 documents** — the nineteen came from a census I keyed to *"the fourteen documents I believed the wave had touched"*, run before the fourth marker agent finished. **The nine it missed: `playing_without_the_puck.md` ×2, `risk_management.md`, `how_to_watch_hockey.md` ×2, `practice_and_development.md` ×2, `defensive_zone_coverage.md`, `faceoffs.md` — all measured by the reviewer, all matching, none falling back to 32 px.** ⚠️⚠️ **WHAT REMAINS OPEN IS NOT "has anyone looked" BUT "in what": Chrome 152 only. Safari's `:has()` on a sibling combinator and Firefox's margin-collapse through a `display:none` element are the two named risks, and no real device, no real screen reader, no root font size other than 16 px, and not the production CloudFront rewrite.** |
| ⬜ | ⚠️ **THE REMAINING FOUR ROUTING TARGETS — this is what actually unlocks the 25–50 word caption target, and the first one is now a worked example.** Routing `angle-into-the-corner`'s safety half into `skating.md` took a 403-word caption to a cuttable ~176. Still to route: **(1)** the receiving-posture tail shared verbatim by `forecheck-pinch` and `forecheck-press`, ~120 words; **(2)** the 604(a)/604(b)/7.3/IIHF 101.1 enumeration shared by `forecheck-122`, `-131`, `-pinch`, `-press`, ~150 words; **(3)** the short scope block shared by `forecheck-212`, `-212-stacked`, `-roles-rotate`, `-2-3-lock`, ~90 words; **(4)** `defender-step-up`'s charging block, ~297 of 483 words. ⚠️ **ROUTE INTO THE OWNER *AND* CHECK EVERY BORROWING HOST. `how_to_watch_hockey.md` hosts (2)'s captions and its prose beside the marker says the body-checking law *"belongs to Forechecking Systems rather than here"* — that host is RELYING on the caption, so cutting it removes the only copy that reader meets.** |
| ⬜ | ⚠️ **THE CAPTIONS WHERE THE 25–50 TARGET IS ACTUALLY REACHABLE ARE THE ONES THAT NOW REPEAT THE PROSE ABOVE THEM — and this is a defect the two waves created TOGETHER that neither creates alone.** Run **`python3 scripts/check_caption_echo.py`** (new, committed, worklist, no `--strict`). ⚠️ **NO FIGURE IS WRITTEN HERE — the tool is its own owner and prints them.** ⚠️⚠️ **DO NOT SWEEP IT. Its docstring names three kinds of overlap that are CORRECT: a region definition must match its owner WORD FOR WORD** (a band labelled "the high slot" was once drawn at 3.14× its owner's area under captions matching the owner's words, and passed every gate — rewording to score lower is how that drift starts); **a disclosure voiced in both layers is PROPAGATION** (the ```facts and caption layers are each voiced alone with a 300 ms break either side, so a listener who meets one may never meet the other, and non-negotiable 4 forbids stripping it); **and a repeated safety limb is repeated on purpose.** **Only narrative restatement is cuttable, and the tool cannot tell the difference.** |
| ⬜ | ⚠️ **`goaltender.md`'s trapezoid section cannot take a marker anywhere, and the fix is structural.** It runs heading → marker → facts block → **a single 29-line blockquote** → two italic lines → next heading. A marker cannot enter the blockquote without fracturing it into two quotes, so **every alternative position is after everything the section contains** — the placement the owner's ruling rejects. **The real fix is breaking up that blockquote**, which is a content change, not a placement one. **Recorded so the next marker pass does not rediscover it as a failure.** |
| ⬜ | ⚠️ **`check_zones.py`: "the middle" is drawn as FOUR regions of 2,200 / 1,936 / 1,276 / 1,276 sq ft with centres 40–68 ft apart** (`the-risk-map`, `nz-back-off-at-the-line`, `rush-gap-and-angle`, `show-one-shoulder-open-the-other`). ⚠️ **This is the same SHAPE as the high-slot defect** — but the tool's own warning says a lane legitimately runs the length of the ice and each diagram may shade the part of it that is relevant. **Only `rink_map.md` settles what "the middle" is, and nobody has asked it.** Pre-existing; the caption wave verified `zones` byte-identical. **`diagram-reviewer` row, not a repair row.** |
| ⬜ | ⚠️ **FOURTEEN `describe` FIELDS STILL POINT AT THEIR NEIGHBOUR BY POSITION**, and the marker wave survived them only because every agent chose to keep its pairs adjacent. The style guide now records that `describe` is exempt from the LENGTH target and **not** from the deixis rule. **Name the situation in all fourteen** so the next marker pass is not constrained by them: `rush-3-on-2-alternative`, `dz-walk-down-man`, `faceoff-dzone-alignment-other-circle`, `faceoff-dzone-clean-loss`, `six-on-five-one-point-stays`, `nz-back-off-at-the-line`, `oz-rotation-one-pass-later`, `oz-cycle-reverse`, `drive-the-net-after`, `drill-decision-one-defender`, `support-triangle`, `lane-jump-guess` and two others. ⚠️ **`drive-the-net-after`'s CAPTION reference is the deliberate exception and must NOT be "fixed"** — the pair's causal claim is the teaching, and read as two alternatives it states the opposite. |
| ⬜ | ⚠️ **A CAPTION CARRIES FOUR-BOOK RULE SCOPE BEHIND A POSITIONAL POINTER.** `faceoff-dzone-alignment-other-circle`: *"⚠️ What counts as outside is not the same in all four books — **the diagram above** carries that split."* **Found because a NEGATION worklist put the sentence in its top band, not because anything tests for deixis.** ⚠️ **Nothing in this repository checks referential integrity in the caption layer**; the scan that found the twenty hits was written for the occasion and is not a committed tool. **Either commit it or accept that this class is unwatched.** |
| ⬜ | **`body_contact_and_battles.md:1534`'s Common Mistakes carries only the SCREEN half of the shot-block instruction** (*"Blocking a shot from a screening position"*) and not the commit-or-clear half, which the body `:1289` and facts `:1279` both carry. **Minor.** Found by an agent that owned the file and declined to act: *"it was outside the brief and I did not want to make an unreviewed second change."* ⚠️ **`defender.md`'s copy is still unverified** — it was held by another agent at the time. |
| ⬜ | **`rule69_clauses.mjs`'s docblock says `REFEREE_JUDGEMENT` is the hedge that must travel with ANY structural reading of Rule 69, and lists three users.** `screen-the-goalie-sightline` makes the structural reading — *"the sentence that actually disallows a goal requires the attacker to have entered the goal crease"* — and contains no *"Referee"* or *"judgement"* string. **A fourth user without the hedge. Pre-existing, reported, not repaired**, and the caption is already 300 words, so this is a routing question rather than an addition. |
| ⬜ | **THREE CHUNK SPLIT PAIRS, ALL PRE-EXISTING — verified against HEAD with `git archive`, so the marker wave neither created nor removed one.** Sharpest: `playing_without_the_puck.md 1->2`, where a chunk ends *"Never turn your back to the wall, and never duck"* and the next opens *"When the other team has the puck, whether you may use your body at all is a question about your league."* ⚠️ **The prohibition is deliberately scope-independent, so a league-scope sentence opening the next chunk is the shape that could be heard as qualifying it.** The prohibition ends the chunk, which is the safe half. Also `risk_management.md 41->42` and `breakouts.md 73->74`. |
| ⬜ | **One cut flagged for a second look by the agent that made it:** `support-distance-range` lost *"on wider international ice check the rink first, because distances scale and angles do not."* It is a rink-size caveat rather than a book scope, and the owner's distance table states it — **but it is the one cut that agent was least sure of.** |
| ⬜ | ⚠️ **EIGHT LOAD-BEARING COMMENTS WERE MOVED OUT OF THEIR CAPTION RUNS FOR A REASON THAT DOES NOT EXIST** — see the retraction above. They are dated and still attached, so nothing is harmed. **Decide deliberately whether to move them back, and do NOT let a later round infer from their position that inline comments in caption runs are forbidden.** |
| ⬜ | ⚠️⚠️ **RETRACTED — *"arms out as a shock absorber"* IS SOURCED, AND THE COORDINATOR RECORDED THE REFUTED VERSION AS FACT BEFORE IT WAS CAUGHT.** A rules verifier reported the phrase in `angle-into-the-corner` as unsourced and contradicted by USA Hockey's Fig. 6, having rendered `ibc.pdf` p.24 at 130 dpi and correctly observed that **both arms are bent at the elbow**. ⚠️ **The observation was right and the conclusion was wrong.** A safety reviewer then found the phrase **verbatim in TWO USA Hockey publications** — `sources/ibc.txt:1482` *"With arms out to create a three-part 'shock absorber'"* and `sources/huh.txt:569-570` — **and I verified both myself.** It comes from the *Hitting the Boards* teaching drill, **not from the Contact Confidence page whose figure was rendered**, and `content/technique/body_contact_and_battles.md:740` already reconciles the two by glossing it as a shock absorber **that bends and gives** rather than one locked strut. ⚠️ **THE TRANSFERABLE LESSON: rendering a figure and reading it was exactly right, but a figure on one page does not bound a phrase taken from a drill on another. "Not on the page I looked at" is not "not in the book" — which is this repository's oldest rule, reached by a new route.** ⚠️ **DO NOT "FIX" THAT PHRASE.** The real defect in that caption is recorded separately: it lost `ibc.txt:672`'s first Teaching Point (*"If at all possible, try to turn skates parallel to the boards before contact is made"*) and the damage-limitation scope, so case 3 now reads as a technique to adopt rather than what is left when turning has failed. |
| ⬜ | ⚠️ **SIX `forechecking_systems` CAPTIONS STATE A PROHIBITION HARDER THAN EITHER BOOK.** *"Where it is barred, a pinch is a play on the puck alone and **the seal against the boards is not available to you**."* **USA Hockey 604(c) Note** (`usah.txt:3583-3594`): legal competitive contact *"most often occurs when two players are physically engaged… in front of the goal or **along the boards**."* **Hockey Canada 7.3 Interpretation 1** (`hc_layout.txt:4753-4761`): *"the defender has the right to **close off the boards**, in order to force the puck carrier to slow down or move towards the middle of the ice. **This is legal**."* ⚠️ **Errs toward LESS contact, so nobody following it is hurt or penalised — which is why no reviewer stopped on it — but two of three books publish a carve-out permitting boards engagement in exactly the non-checking divisions these captions address.** |
| ⬜ | ⚠️ **IIHF 81.4 HAS A FOURTH SUBSTITUTION EXCEPTION THE NHL DOES NOT — *"a Player with a broken skate"*** (`iihf_rules_v1.1.txt:6674-6677` against `nhl_rules_layout.txt:7322-7328`). `game_management.mjs :: five-on-six-clear-three-outcomes` reads *"Rule 81.4 does list exceptions, **but read which ones**"* and gives three, under a scope of *"the NHL and the IIHF"*. **The construction invites the listener to treat the list as exhaustive, and under the IIHF it is not.** Direction of risk mild — a reader declines a substitution they were entitled to. |
| ⬜ | ⚠️ **HOCKEY CANADA 6.7(d)(iii) IS THE OPPOSITE OF NHL/IIHF 87.1 ON TIMEOUTS AFTER ICING** — *"Either team is permitted to take their time-out… following an icing, but during that time out, the team in violation of icing will not be permitted to make player substitutions"* (`hc_layout.txt`). The caption scopes its claim to the NHL and the IIHF, **so it is not wrong** — but a Hockey Canada reader hearing *"unable to take a time-out at all"* is hearing a rule that does not apply to them. **A scope statement that is correct and still misleads is its own class.** |
| ⬜ | ⚠️ **USA HOCKEY'S GLOSSARY DEFINES A LARGER, CONFUSABLE SHAPE IMMEDIATELY ADJACENT TO THE PRIVILEGED AREA.** `usah.txt:6108-6111`: *"**Goalkeeper's Warm-Up Area** — The area including the Goalkeeper's Privileged Area **extended to include the area formed by a line from each end zone face-off spot to where the goal line meets the side boards**."* ⚠️ **That one DOES reach the corners.** `the-privileged-area`'s *"but not the corners"* is correct about the privileged area, **but a reader who looks it up meets both entries adjacent.** Worth a line in the caption or the body; offered as a hazard, not a defect. |
| ⬜ | ⚠️ **A BRITISH READER — ONE OF THIS CORPUS'S TWO NAMED AUDIENCES — IS NOT ANSWERED BY THE BODY-CHECKING CAPTIONS, AND THE ANSWER IS ON DISK.** Nine captions tell the reader to find out which book they are under and then enumerate USA Hockey, Hockey Canada and the IIHF. **The caption layer mentions IHUK 0 times, NIHL 0 times, EIHA 0 times** (anchored ERE counts over all 615 caption units). `ihuk_junior_roc_layout.txt:152-157` gives the age-group table — **U12 full ice NON-CHECKING, U14 and above CHECKING** — and `ihuk_u10_roc.txt:123` says *"Bodychecking is NOT allowed in U10 matches."* ⚠️ **READ THE `_layout` EXTRACTION ONLY: `sources/README.md` records that plain `pdftotext` reads that table COLUMN BY COLUMN, so a proximity grep pairs the wrong age with the wrong format.** **The caption layer is not systematically blind to Britain** — the trapezoid captions reach England Ice Hockey Rule 22.3 correctly. **The body-checking captions simply do not reach it.** |
| ⬜ | **A STRENGTHENING CITATION THE CORPUS DOES NOT CARRY.** `defender.mjs :: defender-step-up` argues *"two strides is a safe harbour in no book"* from rule text alone. **IIHF Situation Handbook SITUATION 42.1** (`iihf_situations_v1.1.txt:3540-3551`, identical in 2026/27) answers the question in terms: *"True or False? Charging can only be applied if a player skates three or more strides… **ANSWER False** – there is no mention of the number of strides required to determine 'distance travelled'."* ⚠️ **The caption is 483 words and already over target, so this is a ROUTING question, not an addition.** ⚠️ **Note how it was found: *"I found it because I was attacking a negative existence claim, not because the method surfaces omissions."*** |
| ⬜ | ⚠️ **TWO NEGATIVES IN THE CAPTION LAYER REST ON ABSENCE IN AN EXTRACTION, AND THE VERIFIER NAMED THEM AS THE MOST LIKELY TO BE WRONG.** *"USA Hockey attaches no substitution restriction to an icing"* and *"privileged area appears in no other book."* Both were defended properly — flattened de-hyphenated copies, occurrence counts rather than `grep -c`, `grep -E` rather than BRE, `\b` anchoring, every hit read, and a positive control in each book's own house word — **and neither can be proved by grep.** *"The only thing that would settle them is reading the relevant sections of each book end to end."* USA Hockey Rule 624 and 204(a) were read in full; **Hockey Canada, CARHA and the IIHF were not.** `hc.txt`, `carha.txt` and `eih_rr.txt` were trusted without independent re-extraction. |
| ⬜ | ⚠️ **THE DIMENSION NOTHING HAS COVERED: whether a rule cited in a caption is the RIGHT rule for the play the picture draws.** The verifier said it plainly — *"A caption could quote 604(a) perfectly while the picture shows a situation 604(a) does not govern; nothing I did would see that, because I never looked at a diagram."* **That is `diagram-reviewer` crossed with `rules-verifier`, and no round has run it.** Related and equally uncovered: *"I could not detect a rule that is MISSING — a caption that teaches a technique whose governing rule it never mentions is invisible to a method that takes a claim and finds it in a book."* |
| ⬜ | ⚠️ **FOUR WORDINGS OF ONE CLAIM EXIST BECAUSE FOUR AGENTS WROTE THEM, AND NOBODY HAS TESTED A LISTENER MEETING TWO IN ONE SESSION.** Each was verified against the books independently. **The corpus has already shipped exactly that defect once** — two agents wrote sentences into one block that were each individually correct and flatly contradictory read aloud. **The walking-speed family is the live case: three forms, and only `forecheck-pinch`/`-press` carries the contact condition (*"head-down, head-on contact with the boards or a goal post"*) that the book makes CONSTITUTIVE.** The other two drop it. **A compression loss, not an error — but it is the shape that becomes an error when two are heard together.** |
| ⬜ | ⚠️ **DEEP LINKS LAND IN THE WRONG PLACE AND THEN CORRECT, ON THE LONGEST PAGES.** Measured in a real browser: `/systems/neutral_zone_systems/#standing-up-at-the-line` puts the target **16,266 px below the viewport** at 0.4 s after `readyState:complete`, and parks it correctly at `top: 127.5` — clear of the 56 px sticky header — by 3 s. Same on `/systems/offensive_zone_play/#tips-and-deflections` (14,732 → 128) and at 375 px. **The end state is right and no link is broken** — but these pages run 57,000 to 94,000 px and **a reader on a slow device sees a visible late jump.** Likely the font or image load reflowing beneath the anchor. |
| ⬜ | ⚠️ **THE CHROME MCP EXTENSION REFUSES TO NAVIGATE TO LOCALHOST — *"Could not verify this site's safety category"*, five attempts across `localhost` and `127.0.0.1` and two ports.** The site review completed only because the agent fell back to driving Chrome 152 headless over the DevTools Protocol. ⚠️ **`.claude/agents/site-reviewer.md` is written around the extension tools.** CDP gives real layout, computed styles, key events and screenshots; what it costs is a windowed profile's scrollbars, extensions and user styles. **Either fix the extension's localhost handling or write the CDP fallback into the agent definition — otherwise every future site review rediscovers this and some of them will just report failure.** |
| ⬜ | ⚠️ **THREE BROWSERS' WORTH OF RISK IS UNTESTED, AND THE REVIEWER NAMED THE TWO SPECIFIC MECHANISMS.** The whole placement ruling rests on `:has(+ …)` sibling selectors. **Safari's `:has()` on a sibling combinator is the first risk; Firefox's margin-collapse through a `display:none` element is the second.** Also untested: real devices and real touch scrolling on the nine full-sheet scroll containers, a real screen reader reading the `<desc>` confirmed only in markup, the production CloudFront rewrite (so `/systems/faceoffs` without a trailing slash is untested where it matters), **and any root font size other than 16 px — every gap in this design is expressed in `rem`.** |
| ⬜ | ⚠️ **A "READ-ONLY" BRIEF THAT SAYS "RUN THE BUILD" IS NOT READ-ONLY, AND THE COORDINATOR WROTE ONE TODAY.** I told the site reviewer *"do not run `build-diagrams.mjs`, it takes six minutes"* AND *"run the full `npm run build`"*. **`build:diagrams` is step 4 of that eleven-step chain**, so its build rewrote the tracked `site/src/data/diagrams.json`. **No harm — verified independently that no `.mjs` is newer than the regenerated file, that the widened caption is present, and that `check_absolutes` certifies 408 units.** ⚠️ **But the agent's own diagnosis is the row: *"if any `.mjs` was edited between your build and mine, my run published those captions, and the next `check_absolutes.py` will certify text I never read. That is round 59 verbatim."* **Add to the briefing conventions: in this repository the build WRITES A TRACKED FILE, so "read-only" and "run `npm run build`" cannot both appear in one brief.** |
| ⬜ | ⚠️ **THE `"Never: X, or Y"` CORRECTION REACHED THREE LINES AND STOPPED, AND THIS DIFF SHIPS A DOCUMENT STILL CARRYING IT.** Round 77 rewrote three facts lines on the ground that, **heard aloud with a 300 ms break either side, *"or duck"* parses as a permitted ALTERNATIVE rather than as a second prohibition.** Three survive, and they are NOT equally exposed — **read each before touching it, because the reason the fix was applied does not apply equally:** <br>• **`content/systems/offensive_zone_play.md:660`** — *"Never: Put your back to the boards, or duck. Skates parallel to the wall instead, forearm and hip to it…"* ⚠️ **This file IS STAGED in the commit that establishes the rule** (marker moves only; the fact is pre-existing and untouched). It does carry a positive instruction after the *or*, so it is **less acute than `playing_without_the_puck.md:285` was** — that one had none. <br>• **`content/positions/switching_positions.md:331`** — *"…or duck — two injuries: a hit from behind, and a head-first collision."* ⚠️ **The clause after the dash names both injuries separately, which largely disambiguates the *or* on its own.** Weakest case of the three. <br>• **`content/technique/body_contact_and_battles.md:702`** — *"Never: Take the wall on the tip of your shoulder, or crouch or duck to avoid a check"* — **a different and milder shape**, two alternates under one prohibition where neither is a permitted option. <br>⚠️⚠️ **THE QUESTION THAT IS NOW OPEN AND WAS NOT OPEN BEFORE: the corpus holds BOTH constructions — nine facts already use the repeated-negation form — so either the rationale is right and these three are still defective, or it is wrong and the three rewrites were cosmetic. Nobody has settled that, and it should be settled by RENDERING and listening, not by grepping.** ⚠️ **Do not sweep this pattern**; the repair agent that fixed `playing_without_the_puck.md` declined to import a richer gloss from `switching_positions.md` **because that document's body does not carry the hit-from-behind consequence and the fact would have over-asserted relative to its own body.** |
| ⬜ | **Four `Skates parallel instead` facts carry no object either** — `defender.md:95`, `winger.md:15`, `:73`, `:345`. A **capital-initial** construction the lowercase `skates parallel` census cannot see. ⚠️ **Weaker case than the `breakouts.md` one that was repaired: *"instead"* points back at a `Turn your back to the wall` in the same line, so the object is recoverable within the voiced unit.** Recorded because it is the same construction and because **the census that found the first one was blind to these by its own casing.** |
| ⬜ | ⚠️ **`site/dist/analytics.js` SHIPS AND IS INERT — dead code today, and a loaded gun.** 682 bytes of GA4 bootstrap; **no `<script>` tag in any of the 53 built pages references it, and ZERO pages carry the `meta[name="ga-measurement-id"]` tag it keys off**, which is consistent with the zero off-origin requests measured across the whole site. ⚠️ **It becomes live the moment anyone adds that meta tag**, and this corpus currently makes no third-party request at all — a property worth keeping deliberately rather than by accident. **Decide: remove it, or document why it stays.** (The `googletagmanager` string in `cite-copy.js` is inside a comment quoting a CSP error message — not a live reference.) |
| ⬜ | ⚠️ **THE AMBER SAFETY BAND IS THE ONE LAYER A SCREEN READER NEVER REACHES.** All 331 `figcaption`s carry `aria-hidden="true"` and assistive tech gets the SVG `<desc>` — the `describe` field — instead. **Checked on all three repaired captions: `describe` contains NONE of the restored safety limbs** — no *duck*, no *chin*, no *hit from behind*, no *walking speed*, no rule numbers. ⚠️ **NOT SERIOUS, and the reviewer checked before saying so: the body prose of all three host documents carries the same warnings independently**, so nothing is lost and the caption is a redundant carrier. **Pre-existing architecture, not introduced by the repairs.** ⚠️ **But record the shape: the caption layer absorbed a full round of safety investment, and it is invisible to assistive technology by design.** The `describe` field is where that reader meets the picture, and it carries geometry only. |
| ⬜ | ⚠️ **SEARCH IS UNVERIFIED TODAY, AND THE HONEST REASON IS A TOOLING GAP.** `/search/` returns 200 and Pagefind is indexed in `dist/pagefind/`, but a review driving the input with a **synthetic `input` event** got no result links back in 2.5 s and declared it UNVERIFIED rather than passed: *"that is as likely my synthetic event missing the component's listener as it is a real failure — I could not distinguish the two without the extension."* **An earlier review reported 40 results for `icing` via the Chrome extension, so this is not a known regression.** ⚠️ **It needs a real key-event driver or the extension.** |
| ⬜ | ⚠️⚠️ **THE CHROME MCP EXTENSION REFUSES TO NAVIGATE TO LOCALHOST, AND IT HAS NOW BLOCKED TWO CONSECUTIVE SITE REVIEWS.** *"Could not verify this site's safety category"*, on both `localhost` and `127.0.0.1`, on every port tried. **Both reviews completed only because the agent fell back to driving Chrome headless over the DevTools Protocol** — which gives real layout, computed styles, key events and screenshots, but not a windowed profile's scrollbars, extensions or user styles, **and not the ability to drive a component with real key events, which is exactly why search could not be verified.** ⚠️ **`.claude/agents/site-reviewer.md` is written around the extension tools.** **Either fix the localhost handling or write the CDP fallback into the agent definition** — otherwise every future review rediscovers this, and one of them will simply report failure. |
| ⬜ | **A drafting rule worth keeping, measured on the page:** a comma-separated list of noun phrases in a voiced caption is safe **when a governing colon announces it** (*"On your feet: padded surfaces square to the puck, shin guards front-on…"*) and unsafe when bare. ⚠️ **The inversion this module's history records was a BARE list with no governing colon.** The distinction is the colon, not the list — **so do not treat every noun-phrase list in a caption as the defect that one was.** |
| ⬜ | ⚠️ **A CAPTION STATES AS AN ASSIGNMENT WHAT ITS HOST PRICES AS A PROHIBITION.** `shot-block-get-close` says *"On a two-on-one your job as the lone defender is the pass and your goaltender has the shooter"* — an assignment, with the "do not block" left **implicit**. `content/technique/body_contact_and_battles.md` states it as `Never: Block the shot on a 2-on-1`. ⚠️ **Found because the sentence read as a topic non-sequitur on the rendered page, and the agent sent to fix the placement diagnosed the framing instead and declined to rewrite it** — correctly, since a rewording is not a glyph move. **A listener who hears only the caption gets a positional instruction where the corpus means a prohibition.** |
| ⬜ | **Is the caption's headline safety instruction in the right half?** `shot-block-get-close` now renders 201 words muted and 147 amber, **and *"Blocking from ten feet away is far safer and more effective than blocking from three feet in front of your own goalie, where a deflection is a goal"* is in the MUTED half** — the faintest text on the page. ⚠️ **I believe this is correct under the convention the corpus's own passing captions establish — what the picture DRAWS stays muted, and the amber is for the half no picture can draw, which is exactly how `angle-into-the-corner` is built.** **But that is a coordinator reasoning from a convention, not a reader looking at a page.** A `site-reviewer` should settle whether a 201-word muted half carrying the headline instruction reads as underweighted. |
| ⬜ | ⚠️ **NOBODY HAS SWEPT THE CAPTION LAYER FOR THE INVERTED-GLYPH PATTERN.** The browser review measured amber extents for **three captions in one module**; a fourth in the same file was then found defective and repaired. **The other three captions in `body_contact_and_battles.mjs` and every caption in the other 30 modules are unmeasured.** ⚠️ **The defect is invisible to every checker in this repository** — it is not a wording error, a missing scope or a negation seam, but a **glyph placed ahead of picture-description**, and it can only be seen by computing the promoted span or looking at the page. **A script could measure it: the span from the first ⚠️ to the end of each caption, against a reading of whether those sentences are hazard or description.** The first half of that is mechanical; the second is not. |
| ⬜ | **`shot-block-get-close`'s scope marker leads a list whose only scoped item trails it by 25 words.** *"On your feet: padded surfaces square to the puck, shin guards front-on, head up and out of the shot lane, feet on the ice, **hands behind your body with the backs of the gloves out**."* ⚠️ **The caption reuses the host's facts line verbatim but RELOCATES the scope** — the facts line carries it **trailing and explicit** (*"— tucked in behind your shin pads is the going-down form, not a standing one"*), the caption **leading and compact**. The leading form is weaker because the four intervening items are scope-invariant and give a listener no reason to hold the qualifier. **Cleared as safe by a rendered-audio review** — the scope is intact in all four layers of both hosts and the slip costs an exposed-hands error, not a head or spine one. ⚠️ **If it is ever touched, the fix is ORDERING — put the hands item adjacent to "On your feet:" — NOT more words. Nothing here should be deleted to make room.** |
| ⬜ | **`content/off-the-ice/mental_game.md:403` states the blocking hand position without saying BEHIND WHAT** — *"hands tucked with the backs of the gloves out"*, where *tucked* has no object. ⚠️ **The only place in the corpus that does.** The surrounding list is scoped (*"on your feet"* appears inside it) so it does not invert, and a safety reviewer found it **by luck rather than by method** while checking a different document, then declined to propose wording without reading the section. **Needs its own pass.** |
| ⬜ | ⚠️ **NOBODY HAS HEARD ANY OF THIS.** Every audio judgement in round 77 — the 700 ms heading break, the self-cancelling *"On your feet:"* misparse, the drift window, the glyph move's byte-identical output — **rests on reading SSML and reasoning about prosody. No synthesis pass was run.** The reviewer named the specific dependency: *"a TTS engine that renders `On your feet:` with a long terminal fall, or clips the colon to a comma, would shift my answer."* ⚠️ **`scripts/build_podcast_audio.py` exists and is in this repository.** **Rendering a handful of the contested units and LISTENING is the cheapest unrun check in the project, and it is the owner of several conclusions this round treats as settled.** |
| ⬜ | ⚠️⚠️ **THE COORDINATOR'S FOURTH ROUTING FAILURE OF THE DAY, AND THE ONLY ONE WHERE THE NEXT STEP WAS WRITTEN OUT FOR IT.** A `safety-reviewer` found a cardinal-rule loss in `centre-nz-arrive-behind-the-puck`, classified it correctly, and routed it in writing — *"Cardinal-rule matter rather than a hazard — **passing to `content-reviewer`**"*. **I never dispatched it.** It sat in a minors list under three Majors and a commit gate found it four passes later. ⚠️ **`CLAUDE.md` says *"The defect is ROUTING, NOT DILIGENCE"* — every agent did its job.** **The actionable change: a report's hand-offs are not commentary. Extract every "passing to X" and "this needs Y" from an agent report into a dispatch list BEFORE acting on that report's headline findings**, because the headline findings are what pull attention and the hand-offs are what get dropped. |
| ⬜ | ⚠️ **A HEDGE-TOKEN DIFF IS A CANDIDATE LIST, AND IT PRODUCED A FALSE POSITIVE AT A 50% RATE.** A commit gate rebuilt HEAD's `diagrams.json` and diffed cardinal-rule hedges across all 204 caption units. **Two captions lost every hedge token; reading them showed one was a false positive** — `support-triangle` keeps *"It is not a formation you set up, it is a shape you keep while everything moves"*, which hedges perfectly using none of the tokens. ⚠️ **So a caption can lose the words "coaching choice" and still hedge, and it can keep them while hedging the wrong claim.** **Record before anyone builds a `check_hedges.py`: this measure finds candidates and must never gain a `--strict`.** |

### ⚠️ Hand-offs from the cardinal-rule sweep — extracted BEFORE acting on its headline findings

**This block exists because the previous report's hand-off was dropped and a commit gate found it four passes later.** ⚠️ **Every "passing to X" in an agent report goes here the moment the report lands, before any repair is dispatched.**

| | |
|---|---|
| ⬜ | ⚠️ **`rules-verifier` — `inside-lane-longer-route` NOW STATES A FOUR-BOOK RULE WITH NO BOOK NAMED.** Staged: *"your stick, arm, hand and skates may not obstruct his route to the puck."* **HEAD set out the USA Hockey / NHL divergence explicitly, plus the warning *"do not read the skating-speed wording as meaning that stopping forfeits your ice."*** ⚠️ **The propagation is NOT the problem — `body_contact_and_battles.md:1169-1176` (facts) and `:1183-1191` (body) carry all four books and that exact warning, verified.** **The open question is whether the flattened universal form in the caption is TRUE across the four books, and that is a rules question nobody has asked.** |
| ⬜ | ⚠️ **`safety-reviewer` — THE LIMB THAT SPEAKS TO A BRITISH READER WAS CUT FROM A THREE-HOST CAPTION.** `net-front-walk-out-direction` dropped *"neither the NHL's book nor the IIHF's writes a minor for checking from behind at all, at Rule 43.2 in both."* **A British reader is on the IIHF book, and this corpus names them as one of its two audiences.** ⚠️ **All three hosts contain `43.2` (6, 4 and 9 occurrences) — but NOBODY HAS CHECKED THAT IT SITS IN THE SECTION ABOVE EACH MARKER**, which is the only thing that matters to a listener. Also in the same hand-off: **`forcing-them-outside` cut 4,193 → 540 characters (−87%)**, losing *"In every one of the four the onus is on the player delivering the check"* **and the entire British-rink-width passage**; and `defender-step-up`, where the pinch-vs-step-up comparison went out with its hedge (**recorded elsewhere as a LEGITIMATE paired cut — do not restore it bare**). |
| ⬜ | **`facts-reviewer` — several host clearances in the cardinal-rule sweep rest on ` ```facts ` lines the reviewer did not open.** Named: `skating.md:544`/`:547`, `body_contact_and_battles.md:1020-1023`, `goaltender.md:1098`, `game_management.md:286`/`:290`, `zone_entries.md:333`, `faceoffs.md:792`/`:824`. ⚠️ **The facts layer is not in this diff, so these are presumed intact — but "presumed intact" is what a layer test exists to replace**, and a caption cleared because its host's facts line covers it is only as sound as that line. |
| ⬜ | **`site-reviewer` — `inside-lane-longer-route`'s marker sits immediately under its `###` heading and ABOVE its facts block**, in `body_contact_and_battles.md`. **That is the placement the style guide settles against.** ⚠️ **NOT caused by this diff — noticed in passing while verifying something else.** `body_contact_and_battles.md` was named earlier in this round as the one document where all six markers still lead their sections; **this is one of them, and it is the first to be individually identified.** |
| ⬜ | ⚠️⚠️ **THE OWNER'S CAPTION TARGET IS NOT MET AND THIS ROUND SHOULD NOT PRETEND OTHERWISE: 190 of 205 staged captions are still over 50 words.** Median fell 238 → 128. ⚠️ **The reviewer put it plainly: *"Whatever else this diff is, it is not finished against that ruling."*** **The remaining work is ROUTING safety limbs and rule scope into host bodies, not further compression — three independent agents reached that conclusion from disjoint file sets, and a fourth proved it by taking a 403-word caption to a cuttable ~176 once its material had a home.** |
| ⬜ | **`oz-home-plate` lost the region's boundary, and `shooting.md` calls the same shape by a different name.** HEAD's caption defined it — *"across the tops of the two faceoff circles, down the sides to the two faceoff dots, and then angles in to the two goalposts"* — which was **word-for-word** how `shooting.md` describes **"the house"**. ⚠️ **That sentence was the only bridge telling a reader the two names are one region**, and `shooting.md` uses the words *"home plate"* nowhere except the marker line. `offensive_zone_play.md` defines it fully, so that host is sound. **Conflation risk in the other host.** Routed with the repair; recorded here in case the repair declines it. |
| ⬜ | **`corner-escape-routes` carries a double-negative imperative, voiced alone.** Staged: *"Never leave open the one back toward the slot."* HEAD had it inside the positive sentence — *"…toward the wall and up, away from the net, and never back toward the slot."* ⚠️ **Not an inversion — the polarity is right — but "never leave open" is a negated negative and is harder to parse in one breath group with a 300 ms break either side.** **Found by reading, not by a tool**, and it is the family `check_caption_negations.py` scores. |
| ⬜ | **Two goaltender captions now hedge a claim they no longer make.** `goalie-playing-the-angle` keeps *"at a depth every goalie coach will adjust"* **and deletes the depth it qualified** (HEAD: *"the top of the crease or beyond"*). `goalie-depth-failure-modes` names two wrong positions and deletes HEAD's statement of the right one. ⚠️ **Do NOT "fix" these by restoring the hedges — the hedges survive. If the claims are wanted back, they go back WITH them.** A gap rather than an error. |
| ⬜ | ⚠️⚠️ **279 REFERENCES NAME A DOCUMENT THAT DOES NOT EXIST, AND NO GATE CAN SEE IT.** ⚠️ **CORRECTED FROM "343 across 80 files", which was MY OVERSTATEMENT: the 343 splits into 279 `rink_map_and_glossary.md` (the document — deleted, the real stale references), 33 `rink_map_and_glossary.mjs` (the DIAGRAM MODULE, which EXISTS and is legitimate), and 30 bare with no extension. ⚠️ The module kept the legacy name through the split and its `owner:` field correctly points at `content/foundation/rink_map.md` — so a third of what I counted as rot is a correctly-wired file with an old name, and a blind rename would have broken it.** `content/foundation/rink_map_and_glossary.md` was **deleted by commit `fd9e903`, "Split the vocabulary onto one page, and fix three criticals the split exposed"**, which created `content/foundation/rink_map.md` (the shape, the measurements, the named regions) and `content/foundation/language_and_glossary.md` (the aliases) in its place. ⚠️ **The split was done carefully FOR `content/` — its own message says it fixed three criticals — and `grep` confirms ZERO occurrences of the old name remain in `content/`. All 343 survive in the REASONING layer: `.mjs` comments, `project/` notes, `CLAUDE.md`, the style guide and two agent definitions.** ⚠️ **`check_links.py` passes because the name never appears in a markdown link or an `owner:` field, so nothing breaks mechanically — and that is precisely why it has survived.** ⚠️⚠️ **IT IS A ROUTING HAZARD OF THE EXACT CLASS `CLAUDE.md` NAMES: *"a brief that names a source and says 'grep it' produces an agent that greps it"* — and an agent told to check a region definition against `rink_map_and_glossary.md` finds NOTHING and may conclude the corpus has no owner for it.** **The coordinator propagated it four more times today before an agent caught it; those four are corrected.** ⚠️ **DO NOT SWEEP 80 FILES UNREVIEWED. The resolution differs per site — some references mean the shape (`rink_map.md`), some the alias (`language_and_glossary.md`), and a blind rename would send half of them to the wrong document.** |
| ⬜ | ⚠️ **USA HOCKEY 608(b) IS DISJUNCTIVE AND THE CORPUS STATES ONLY ITS SECOND LIMB — in three places, consistently.** The rule (`sources/usah.txt:3724-3727`): *"A major penalty plus game misconduct penalty shall be assessed to any player who **recklessly endangers an opponent, OR** causes them to go head first into the boards or goal frame, as a result of checking from behind."* **The caption `net-front-walk-out-direction` gives only the head-first limb, and so do `defender.md:234` and `goaltender.md:1105` in their facts layers.** ⚠️ **A listener hears a NARROWER trigger than the rule has, which is the dangerous direction — a reader believing fewer acts draw the major than actually do.** **Mitigated, and why this is Minor rather than Major: the caption's operative instruction is an absolute prohibition, so a narrowed trigger cannot license the act, and `body_contact_and_battles.md:575` carries both limbs.** ⚠️ **Do NOT lengthen the caption for this — the fix, if any, belongs in the two facts lines.** |
| ⬜ | ⚠️ **`defender.md`'s SUMMARY LAYERS carry the scope question and omit the direction question.** The goalmouth-direction rule — *"move them toward the corner, never across the front of your own net"* — is in the body (`:237`) and the facts block (`:234`) and reaches **neither Common Mistakes nor Key Takeaways**. Those layers carry the *checking-league scope* question (CM item 4) and the *assignment* question (KT item 1). ⚠️⚠️ **The direction half is the one that applies in EVERY league and the one that decides whether a body meets a post — and it is the half the summary pass drops.** **`goaltender.md` carries all four layers; `body_contact_and_battles.md` carries three of four.** **Pre-existing; this diff neither created it nor touches those lines.** ⚠️ **Constraint on any fix: whatever is added must keep *"coaching caution drawn from that hazard rather than a rule anyone writes"* attached — that disclosure is honest and non-negotiable 4 protects it — and must not be a bare "never" that inverts read alone.** |
| ⬜ | **A British/IIHF listener to `defender.md` waits ~1,100 rendered words — roughly seven minutes — before their own book is named.** The caption is chunk 024; the NHL/IIHF "no minor at all" fact arrives at chunk 028, under the subsection that IS the caption's topic. ⚠️ **They are not under-warned about magnitude** (the IIHF's own ceiling is lower than both tariffs the caption names) — **the risk is that they discount a warning that reads as addressed to somebody else.** ⚠️ **The fix belongs in `defender.md`, NOT in the caption: that caption has three hosts, two already carry the limb adjacently, and the module comment records why the four-book ladder was deliberately kept out of the picture. Do not re-lengthen a three-host caption to serve one host.** |
| ⬜ | ⚠️ **AN ADJACENCY THIS ROUND RELIED ON IS UNDOCUMENTED AND FRAGILE.** Two hosts were cleared because a tariff fact lands in the chunk immediately before or after the caption — *"if the chunker changes, the adjacency that makes `goaltender.md` clean and `defender.md` merely late changes with it, and **nothing in the corpus records that dependency**."* ⚠️ **`md_to_speech`'s chunk boundaries are load-bearing for safety conclusions and are treated as incidental.** **Worth recording the dependency where the chunker lives, so a future change to it is understood as a safety change.** |
| ⬜ | ⚠️ **TWO FACEOFF CAPTIONS LOST THE SAME CROSS-LEAGUE INSTRUCTION AND ONLY THE POINTER WAS RECORDED.** `faceoff-dzone-alignment` (**seven hosts**) dropped *"Do not carry one book's answer into another league."* `faceoff-dzone-alignment-other-circle` dropped *"…and touching the line is legal under some of them and encroachment under others, so do not carry one league's answer into another"* — ⚠️ **leaving a bare positional pointer with no content behind it.** **Not a block, and the reasoning is on record:** the three book positions and the legal-in-all-four instruction survive in `faceoff-dzone-alignment`; the other-circle caption is single-host with its target one voiced unit above at `faceoffs.md:757`; and the host carries the instruction at `:46` and `:293`. ⚠️ **But the earlier row recorded only the DANGLING POINTER and not the DELETION that created it** — two different defects, and fixing the pointer would leave the cross-league instruction still gone from a seven-host caption. |
| ⬜ | **The style guide names a defect that this same commit ships.** Its new section *"A positional pointer can carry RULE SCOPE, which is the case that must never be written"* quotes `faceoff-dzone-alignment-other-circle` — **and that exact sentence is still in the staged caption**: *"⚠️ What counts as outside is not the same in all four books — the diagram above carries that split."* ⚠️ **Checked, and it does NOT misinform:** the diagram is single-host, sits at `faceoffs.md:759` immediately after `faceoff-dzone-alignment` at `:757`, and that caption carries the full four-book split plus the all-four-books safe harbour — **so the pointer resolves in the spoken layer too.** **But the compression DID drop the old caption's *"so do not carry one league's answer into another"*, and the style guide reads as though the case had been repaired.** Either repair the caption or reword the section to say it is an example still live in the corpus. |
| ⬜ | **`getting-beaten-wide` left a quotation with its antecedent cut.** The caption now ends *"The route is not redrawn to the net on purpose: a still picture cannot draw 'whenever he chooses'."* ⚠️ **The clause that established what he chooses — *"he can leave it for the goal whenever he chooses"* — was cut by the compression.** Inferable from *"nobody between him and the net"*, **but read aloud it is a dangling quotation**, and a quoted phrase with no antecedent is a shape no checker looks for. |
| ⬜ | ⚠️ **THE VERIFICATION METHOD'S OWN BLIND SPOT, stated by the gate that cleared this commit: *"I verified ~120 of the 188 changed captions only through `check_absolutes` and a token-loss diff, not by reading. That method is weak in exactly the way round 20 named: it finds a caption that says too much, never one that says too little."*** **So roughly two thirds of the changed captions have been cleared by a method that structurally cannot find an omission.** ⚠️ **And the ~16 UNCHANGED captions were outside every diff-based pass in this round** — nobody has read them at all. **That is the honest scope of what "cleared" means here, and it should be the next round's starting point.** |

# Round 30 — the primer's first rules pass, and what the author broke fixing it

*Status: uncommitted. HEAD is `0d9ef1d`; 20 files staged. **Sixteen
reviewer passes and six commit-gate runs. The first five blocked; the sixth cleared** — rules, safety, content, then four consecutive safety verifications
of the author's fixes. Pass 7 cleared it for `commit-gate`. **The gate then blocked it, on a defect
none of the seven passes could see.** Date: 2026-08-16.*

**The shape of this round, stated plainly.** The original text had ~25 defects. The author's
corrections introduced roughly the same number again, across five consecutive fix passes.
Every one was caught by a reviewer, none by the author, and the checkers saw none of them.
The finding is not "rules are hard" — it is that **this author should not be the last set of
eyes on rules text**, and the round is recorded that way deliberately.

**Four passes were needed after the first fix pass, and each found something real.** The
round is the corpus's clearest evidence that a single verification pass over a fix is not
enough: pass 4 found two false claims and a manufactured rule conflict, pass 5 found a
critical the author had explicitly proposed deferring, pass 6 found the same defect one
layer further along, and pass 7 cleared it. **The author's deferral judgement was wrong
both times it was exercised**, and the reviewer overruled it both times.

| | |
|---|---|
| Documents reviewed | 8 content files; **12 non-content**. `.gitignore`, the style guide, `project/verification/link_baseline.tsv`, and eight a content round would not normally touch: `site/src/components/BaseHead.astro` (CR12), `site/src/plugins/remark-corpus.mjs` (CR13), `site/src/styles/global.css` (CR14), `site/src/consts.ts` and `.github/workflows/deploy.yml` (MA21), `.claude/hooks/git-guard.sh` and `.claude/hooks/git-guard.test.sh` (MA27), and `site/public/<key>.txt` (the IndexNow key). **A CI/CD change, a site-wide CSS change and an edit to the commit hook itself are riding in a content round.** That is stated here rather than left to be found in the diff. |
| Reviewers run | rules-verifier · content-reviewer · safety-reviewer ×8 · source-verifier · site-reviewer · facts-reviewer ×3 · commit-gate ×4 |
| Criticals found / fixed | 17 / 17 |
| Majors found / fixed | 26 / 24 — MA1–MA26, with MA12–MA15 under one heading. Two are recorded and **not** fixed: the §12 block where no fact defines high-sticking, and the *carried above the shoulders* test lost in a merge |
| Minors found / deferred | ~20 / 4 |
| Date | 2026-08-16 |

---

## The brief

Two threads, both of which began as *reach* work and turned into *accuracy* work.

**`rules_primer.md` had never had a `rules-verifier` pass.** 21,000 words of rules claims,
~190 citations, the document a reader consults under time pressure, and the one a planning
note flagged as overdue on 31 July. It was still unrun after round 29. The pass found
roughly 25 defects.

**A read-only survey of women's-hockey coverage** found the material exists almost entirely
as inline caveats, and — unexpectedly — surfaced six contradictions between passages
written independently in different documents at different times.

**The round's real finding is not in either list.** It is that the author's *fixes* for the
first thread introduced two false claims, one manufactured rule conflict, one fabricated
prohibition, and one correct fact demoted to folklore — and that two reviewers caught all
five. That is written up as CR1–CR5 below rather than buried, because the corpus's own
non-negotiable 3 exists for exactly the demotion that happened here.

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | **Yes** | rules-verifier, then safety-reviewer independently | First ever pass over `rules_primer.md`. ~190 citations grepped against `sources/`. |
| D2 | Rules travelling without exceptions | Yes | rules-verifier, safety-reviewer | The round's dominant class, in both the original text and the fixes. |
| D3 | Rule-set divergence | Yes | rules-verifier | Found Hockey Canada 9.5's junior/senior scope and the high-sticking ceiling divergence. |
| D4 | Citation integrity | Yes | safety-reviewer | Every quotation in the diff re-grepped. Two were wrong; see CR1, CR3. |
| D5 | Provenance | **Yes** | source-verifier | The diagram-manual citation is **verified**, and the page number the round had written off as unobtainable was obtained: **p. xx**. See MA20. |
| D6 | Negative existence claims | Yes | both | One was **false** and is withdrawn — see CR3. |
| D7 | The cardinal rule | Yes | content-reviewer | Nothing new stated a coaching choice as law. Clean. |
| D8 | Numeric ownership | Yes | content-reviewer | No owned quantity entered or moved. |
| D9 | The summary layer | Yes | both | Every correction had stopped at the body. See MA1–MA6. |
| D10 | The key-facts layer | Yes | content-reviewer, safety-reviewer | `body_contact_and_battles.md` and `shooting.md` carry blocks among the changed files. MA17 was a facts block holding a rule its own prose did not. |
| D11 | Reader safety | Yes | safety-reviewer, five passes | Five criticals across the round, two of them in the author's own fixes. |
| D12 | Read-aloud integrity | Yes | both | Four fixes reworded. Pass 7 read the generated SSML for `technique__shooting` — 43 chunks — and confirmed all four layers survive extraction. |
| D13 | Folklore | Yes | safety-reviewer | Caught the reverse case: a **true** fact relabelled as folklore. |
| D14 | Structure, terminology | Yes | content-reviewer | Found the diagram document contradicting itself on how many keys it uses. |
| D15 | The rendered site | **Yes, partly — desktop only** | author, then commit-gate | The author's "JSON-LD validated at 41/41 pages, zero warnings" was **well-formedness, not truth**: the gate then found 37 asserted URLs that do not exist (CR12). Now re-verified against `dist/` — 82 breadcrumb items, 0 broken, build clean. A browser pass then ran for the first time in the project's history — the twelfth attempt — and found **two criticals and a major** (CR13, CR14, MA21). **Mobile was never reached**: `resize_window` is a no-op in that window, so the two mobile table checks are unverified, not passed, and the old `overflow-x: hidden` would have masked the symptom even if they had run. |

**Mechanical checks:** `check_links.py` ☑ · `check_facts.py` ☑ (773 blocks, 4,579 facts) ·
`check_secrets.py` ☑ (195 tracked files) · `npm run build` ☑

---

## Findings

### Critical — all five of these are defects the author introduced while fixing something else

**CR1 · `rules_primer.md` — "a double minor is the ceiling only in the NHL" is false.**
NHL Rule 60.4 assesses a **match penalty** where a player *"attempts to or deliberately
injures an opponent with a high-stick"*. What the NHL lacks is a *major* tier, not an
ejection. Compounded: the same bullet cited "Rule 60.4" for the IIHF three clauses after
discussing NHL Rule 60, and **60.4 is a different rule in each book**. A reader checking
the citation lands on the wrong provision. Fixed, with the collision flagged in the text.

**CR2 · `rules_primer.md` — "Under both, carrying the stick high is enough on its own"
is false for the IIHF.** 60.1 is definitional; 60.2, 60.3 and 60.4 each require contact.
A prohibition was invented in the British reader's own book. The corpus's own tripping
bullet warns against exactly this — arguing from a definitional clause against the
operative one.

**CR3 · `rules_primer.md` — a correct fact was relabelled as folklore.** "Nor is a
commercial timeout permitted" **is** in Rule 87.1, thirty-seven lines below the sentence
that was quoted to disprove it. The claim was demoted to "broadcast practice" on a search
that stopped too early. **This is non-negotiable 3.** Restored, and now carries the
exception the original also lacked: *except where a penalty affects on-ice strength*.

**CR4 · `equipment.md`, `uk_rules.md` — a rule conflict was manufactured.** Both documents
asserted that In-House Rule 9.7 and Rule 102 give a woman under 18 two different answers
about her helmet, and that no published text resolves it. **They do not conflict.** 9.7
sets a half visor as a *minimum*, which full-face protection exceeds; IIHF Rule 9.7 refers
women's facial protection to Rule 102 in terms; and IIHF 102.1 closes by requiring
under-18s playing up to wear under-18 equipment. Two documents told British women a
governing body had left them unprotected. Both now state the answer definitely. Also
missed at the time: the In-House Rules exclude under-18s from Scottish recreational hockey
entirely, twenty-one lines from the BUIHA exclusion that *was* found.

**CR5 · `team_play_and_culture.md` — a new absolute dropped a safety clause.** The
correction stated that IIHF 101.1 penalises *only* stepping or gliding in. It also
prohibits using the boards to eliminate, push or pin an opponent — the clause that matters
most in a corner, carrying a minor or a major plus automatic game misconduct, and one the
corpus already held in `body_contact_and_battles.md`.

**CR6 · `rules_primer.md` — the faceoff-crouch permission contradicted the new text.**
"Accidental contact on a centre bent over at a faceoff is permitted" sat three clauses
after a new warning that Hockey Canada minor and female hockey penalises accidental head
contact under 7.6(a). Now scoped to the NHL.

**CR7 · `rules_primer.md` — Hockey Canada's escalation was routed to a rule that excludes
the readers it was written for.** The correction sent the major-penalty case to 7.7(b),
which is *Head Contact – Junior/Senior*, three sentences after warning that minor and
female hockey is on 7.6. Now routed to both, with 7.6(b)'s mandatory major noted.

**CR8 · `team_play_and_culture.md` — Key Takeaway 4 and Common Mistakes** still carried
the uncorrected USA Hockey framing of women's hockey as prohibition.

### Major — propagation, which failed again

- **MA1** `rules_primer.md` §10 had **no high-sticking row at all**. Added, five columns.
- **MA2** The §10 fighting row still said "not an automatic ejection" with no aggressor limb.
- **MA3** `body_contact_and_battles.md:1006` — a `facts` line still called Hockey Canada 9.5
  the general high-sticking rule. The facts layer is what the podcast extracts.
- **MA4** `rules_primer.md:330` and `:425` restated the NHL double-minor ceiling flat —
  `:425` inside *"what actually gets called at rec level"*, addressed to the readers most
  likely to be under the harsher books.
- **MA5** `equipment.md`'s "Cage versus visor versus full shield" — the buying-decision
  section — still stated the visor rules flat, 330 lines from the fix.
- **MA6** `reading_ice_hockey_diagrams.md` said both "two published keys" and "three", in a
  document whose entire purpose is precision about which key a symbol comes from.

### Critical and major — third pass, all in the second round of fixes

**CR9 · The §10 row added to fix MA1 dropped the hedge the body carries.** Its NHL cell
said *"Waist floor applies — a crouching opponent below waist height is not protected"*.
**NHL 60.2 has no waist qualifier** — *"Any contact made by a stick on an opponent above the
shoulders is prohibited"* — and the body says in terms *"do not argue the point on 60.2"*.
The summary layer contradicted the body in the row written to close a summary-layer gap.

**MA7 · The faceoff carve-out was scoped to the wrong book.** "Under the NHL book only" —
**IIHF 60.1 carries it verbatim**, windup, follow-through and bent-over centre alike. The
real division is that the NHL and IIHF both have it and **neither USA Hockey nor Hockey
Canada writes it**. Wrong axis entirely.

**MA8 · Hockey Canada expressly reverses the follow-through permission.** Interpretation 1
to Rule 9.5(a) assesses a minor where a follow-through hits an opponent above the shoulder
with no injury. The corpus stated the permission bare.

**MA9 · "The In-House Rules carry no amendment to Rule 60" was false.** Section 8 of the
In-House Rules removes the 60.3 on-ice video review, so in Britain the call on the ice
stands on a high-sticking double minor. **The other five claims of that shape were then
re-grepped** — Rules 81, 48, 43 and 83 are genuinely absent from the In-House amendment
list (1, 3, 5, 6, 9, 9.1, 9.7, 9.12, 12, 18, 28, 30, 33, 34, 35, 37, 38, 60, 69, 78, 84,
85, 100.1, 101, 102, 200, 201). Rule 60 was the only false one. Class closed, not just the
instance.

**MA10 · The §10 rec column answered a question its reader had not asked.** It opened "No
general high-sticking rule" and then described Hockey Canada *minor and female* hockey.
Adult rec under Hockey Canada is **Senior**, so 9.5 applies to that column's reader directly.

**MA11 · "60.2, 60.3 and 60.4 each require contact" overshot.** 60.4 has no contact element;
its trigger is *"recklessly endangers their opponent by 'high-sticking'"*. The correction for
a fabricated claim produced a second one, in the permissive direction.

**MA12–MA15 · Layer gaps and self-inflicted breakage.** The ceiling reached neither
`rules_primer.md`'s Common Mistakes nor KT10, neither `uk_rules.md` KT6 nor `equipment.md`'s
Common Mistakes, and no penalty tier existed anywhere in `body_contact_and_battles.md`'s
high-sticking facts block. Plus a duplicated quotation and a broken sentence the author's own
edits created — `See §4.**, butt-ending` reads as *"see section four., butt-ending"* through
the TTS pipeline.

### Critical and major — passes 5 to 7, the fourth and fifth rounds of fixes

**CR10 · `shooting.md` taught the wind-up with no cross-book flag at all.** By pass 5 the
corpus said in *two* documents that a follow-through above an opponent's shoulders is
penalised in two of four books — and the one document that actually teaches the
follow-through said nothing. The author proposed deferring this. The reviewer overruled it:
*"it blocks, and I do not accept the reasoning."* The reviewer was right. Fixed across all
four layers.

**CR11 · the same defect again, one layer further along.** Pass 6 found the `shooting.md`
correction had reached body, facts and Common Mistakes and **stopped at Key Takeaways** —
the layer the speech pipeline extracts and reads in isolation. A listener heard the slap
shot framed as constrained by local league rules only. Under Hockey Canada minor and female
hockey the act is not high-sticking at all but Head Contact under 7.6: ejection on a third
offence, and a **mandatory** major plus game misconduct if injury results (`hc.txt:6265`),
where 9.5's junior/senior route leaves the same escalation discretionary. The reviewer
declined to shade it down for being nearly fixed.

**MA16 · a misquotation of Hockey Canada Note 2.** The author read *"(recommended but
optional for male adult recreational hockey)"* as modifying **registration**. It modifies the
**facial protector** — Note 6 uses the identical construction for a mouth guard. The
quotation is withdrawn; the §10 cell now states the absence *as* an absence: the playing
rules never say which division adult recreational hockey sits in.

**MA17 · an escalation tier that lived only in a facts block.** IIHF 60.4, USAH 621(b)–(c),
NHL 60.4 and HC 7.7(b)/7.6(b) were extracted into `body_contact_and_battles.md`'s facts
layer and appeared in no prose layer of that document. Propagation had run backwards.

**MA18 · a sentence that read as withdrawing the warning above it.** *"60.2 is not the
ground"* sat two lines below a ⚠️ cell and resolved, for a reader moving at speed, toward
*the warning I just read is withdrawn*. The identical wording had already been fixed in
`rules_primer.md` and had not travelled.

**Three scope corrections, all in the safe direction.** Hockey Canada's high-sticking rule
is titled *High-Sticking – Junior/Senior* and there is **no** general one, so minor and
female hockey falls to 7.6 Head Contact, which *"supersedes any other rules"* bar fighting.
The corpus had been stating 9.5 as Hockey Canada's general position. Corrected to name both
branches, with the minor/female branch identified as **worse, not absent**.

**One read-aloud inversion.** *"The windup, follow-through and bent-over-faceoff carve-outs
are NHL and IIHF only — USA Hockey writes neither"* — three nouns, then "neither". The one
available misreading pointed away from caution. Now "none of them".

### Critical — found by `commit-gate`, after seven reviewer passes had cleared the diff

**CR12 · the new JSON-LD asserted 37 URLs that do not exist.** The `BreadcrumbList` added to
`BaseHead.astro` walked the whole URL path and emitted a crumb per segment, so every one of
the 36 document pages told search engines that `/technique/`, `/systems/`, `/foundation/`,
`/hockey-iq/`, `/off-the-ice/`, `/positions/`, `/getting-started/` and `/reading-diagrams/`
were pages. **None of them is built** — the sections are directories in `dist/` and nothing
more; the routes go from the index straight to the document. Under non-negotiable 1 these
are invented URLs, emitted 37 times, in the one part of the site addressed to machines.

**Why every check passed it, which is the part worth keeping.** `check-links.mjs` reports
*"all internal links and anchors resolve"* because it reads `<a href>` and not JSON-LD. The
author's "41/41 pages, zero warnings" validation established that the markup was
**well-formed**, and then reported that as though it were **true** — a category error, and
the same one the corpus makes when it treats a document that passes `check_facts.py` as
verified. The gate found it by walking `dist/` and testing each URL against the filesystem,
which is the only method here that had ground truth.

Fixed by dropping the intermediate crumb — the honest trail is Home → document — and
re-verified the same way: **82 breadcrumb items, 0 broken.** Two smaller defects went with
it: the home page's `WebSite` node declared `isPartOf` itself, and the 404 page claimed a
`/404/` URL that is never served (it is `404.html`, returned by CloudFront on error).

**MA19 · the style guide has been pointing at a source directory that no longer exists.**
Chasing the gate's C5 finding: the style guide's primary-source inventory names a session
scratchpad from a long-dead session, and within it a `usah_case.txt` of 18,376 lines — the
USA Hockey Casebook. That file is **on disk nowhere**, `fetch_sources.sh` does not fetch it,
and no file in `sources/` contains one USA Hockey casebook Situation. Round 28 had already
recorded the Casebook as missing; the style guide was never corrected, so the document that
tells the next agent where the primary sources live has been sending them to a dead path.
Rewritten against `sources/README.md`, with the Casebook's absence stated outright. The
primer's Sources block now discloses that its one Casebook citation cannot be re-checked
here. **Labelled, not deleted** — non-negotiable 3.

**MA20 · the diagram-manual citation was verified, and the page number I had called unobtainable was obtained.** I had recorded that a Kindle print-replica gives no way to cite a page — its footers carry Kindle chrome, and its Contents strips print folios. That was true of the captures and false as a conclusion. `source-verifier` established **p. xx** from Google Books search-inside on the same ISBN: the exact phrase returns **one hit in the volume**, page `PR20`, folio xx, with a control phrase returning the same page, and the Library of Congress collation *"xx, 226 pages"* independently putting the Key as the last front-matter page. The bibliographic record checks out against the publisher and LC. **No "could not be verified" label is warranted, and adding one would have been its own dishonesty** — the claim is verifiable; I had simply stopped at the first method that failed.

Four wording defects came with it, none of them sourcing failures. The text said the book was *"a coaching manual rather than a key"* in a sentence citing **its Key to Diagrams** — the distinction wanted was house key versus governing-body key. It said the manual's *diagrams* use the glyph; the key **defines** it and no figure was found drawing it. Common Mistakes dropped the book's serial comma. All fixed.

**And a representativeness finding worth more than the four.** The book was introduced into the document **solely as a source of disagreement**, on a page where it **agrees** with the corpus on everything else — solid arrow, wave, dashed, double all match. Quoting only the divergent row from a key that otherwise corroborates you is a partial picture of a source, the mirror image of the trap the style guide records for selective tables. The Sources entry now states the agreement before the divergence.

### Critical — found by `site-reviewer`, in a browser, after the gate

The twelfth attempt at a browser pass got through: roughly 25 minutes of real
Chrome work before the extension's classifier began refusing mid-session. Both
criticals are **pre-existing site defects**, not introduced by this round — but
one of them was *caused* by this round's approach, and neither was findable
without a browser.

**CR13 · half the corpus's ⚠️ warnings rendered as ordinary prose.** The remark
plugin promoted warning **blockquotes** to styled callouts; a warning written as
a plain paragraph got nothing. That is the form this round chose deliberately,
because `md_to_speech.py` drops blockquotes — a penalty warning written as
`> ⚠️ …` is never read aloud. Choosing the speech layer silently cost the visual
one, and the split was almost exactly even: **31 warning glyphs in styled
callouts, 31 in unstyled `<p>`, across 16 documents.** On `/technique/shooting/`
the new slap-shot warning computed byte-identical to the ordinary paragraph
below it while a rec-league admin note beside it rendered as a green panel; on
`body_contact_and_battles` the warning that kicking is a **match penalty** sat as
plain prose above a routine facts block in a blue one. It also failed
"nothing depends on colour alone" — the sole differentiator was an emoji.

Fixed in the plugin, not in content, so the Markdown the speech layer needs is
untouched. Two further defects surfaced while verifying it: the promotion had to
be **recursive**, since warnings also sit inside list items and inside sections
built by earlier transforms; and a callout was typed by its **first child only**,
so three warnings that open the *second* paragraph of a note-led callout were
being given a neutral panel — the one case where the colour matters most. Now
**61 block-level warnings styled, zero unstyled.**

What remains is **bounded, not outstanding**: about twenty glyphs sit
mid-sentence or inside a heading, where promoting them would mean splitting the
paragraph around them. Every warning that *begins* a block is promoted — 61,
with none left unstyled. The 31/31 split is resolved; this residue is a
content-shape question and should not be rediscovered as a new defect.
Warnings written **inline** — a bold ⚠️ lead-in inside a bullet or mid-paragraph
— Those cannot become a panel without
restructuring the prose around them, which is a content decision, not a plugin
one.

**CR14 · in-page anchors did not scroll.** Loading a document at a fragment left
the reader at `scrollY: 0` with the target 17,934px below the viewport; clicking
an "On this page" entry updated the hash and moved nothing. **All 151 corpus
anchors resolve correctly** — the GitHub-slug/Astro-id equivalence is perfect —
and every one of them landed the reader at the top of a document up to 54,000px
tall. Cause: `body { overflow-x: hidden }` — swapping that declaration fixes it,
which is the whole of what was established. **The mechanism is not proven, and
the next round should not repeat it as though it were.** The usual account is
that setting overflow on one axis forces the other to compute as `auto` and
promotes `body` to a scroll container; but per CSS overflow propagation,
`body`'s overflow propagates to the viewport while `html` is `visible`, so that
account is probably not what happened. Replaced with `max-width: 100%` plus
`overflow-x: clip` behind an `@supports` query — written as two declarations in
one rule, Lightning CSS deduplicates them and silently drops the fallback, which
would have left Safari and iOS before 16 with `overflow-x: visible` and a page
that scrolls sideways on a phone. Wide content keeps its own handling in
`.table-scroll` and `pre`. **Verified by build only** — the browser was gone by
then, and the user accepted that limit explicitly.

**MA21 · the site sent analytics from localhost.** `GA_MEASUREMENT_ID` was a
hard-coded constant, so it fired in every build — while two comments in the same
files asserted that local builds and previews "send nothing". The request was
observed going out from `http://localhost:4321`, and all 42 built pages carried
it, so every local preview polluted the property and anyone cloning this **public**
repository and running `npm run dev` sent hits to it. Now read from
`PUBLIC_GA_ID`, supplied by the deploy workflow and nowhere else, so **no built
page carries a measurement ID or a `googletagmanager.com` request**. Stated
precisely, because the looser version was false: `dist/analytics.js` still ships
the GA4 bootstrap. It is inert — it returns immediately without the
`ga-measurement-id` meta tag, which no local build now emits — but "zero GA
references in the built output" is falsified by one `grep`, and this is a claim
about analytics in a public repository. The comments were corrected to describe
what the code now actually does.

### Critical — found by `facts-reviewer`, after `commit-gate` had cleared everything else

`commit-gate` noted that the agent whose whole job is the omissions `check_facts.py`
cannot see had never looked at this diff's five new `Rule:` lines. It was right to say so.
Two passes followed and each found a **critical**, both in the layer that is read aloud
with nothing around it.

**CR15 · an escalation fact that dropped Hockey Canada, next to one saying 9.5 "reaches no
further".** The two sat adjacent in `body_contact_and_battles.md`. Rendered through
`md_to_speech.py`, a Hockey Canada junior or senior player hears that their rule stops, and
then hears an ejection list naming the IIHF, USA Hockey and the NHL and not their book. The
available inference is *my ceiling is a double minor.* It is not: 9.5(b) says **"No Major
penalty may be assessed for high-sticking"** and routes it to 7.7(b) Head Contact, which is
an ejection. 9.5's tiers read as empty **because** they are routed away. The primer had it
right; the fact stopped one layer short.

**CR16 · the fix for CR15's sibling invented an exemption.** Rewriting "reaches no further"
(which invented a ceiling), the author added *"adult recreational is named in neither"* —
which appears nowhere in that document's body and was lifted from the primer while shedding
the qualification in the sentences either side of it: `hc.txt:2225` registers male adult
recreational hockey as **Senior**, so 9.5 and, through 9.5(b), 7.7(b) almost certainly do
bind that reader. The same defect as CR15 with the polarity reversed — one invented a
ceiling, the other an exemption. Cut.

**MA22 · the whole match tier was missing for minor and female hockey, in three files.**
Body, fact and primer all said Hockey Canada routes a high stick to "7.7(b) or 7.6(b)" — the
**major** route. `hc.txt:6275`'s **7.6(c)** is a match penalty for hitting a player who
cannot protect themselves, or for a deliberate or attempted injury by head contact. A minor
or female player was told the ceiling was a major plus a game misconduct when it is a match
penalty. Inherited, not introduced — and it is the same defect class as CR15, three files
wide. Propagated to all three.

**MA23 · a `Rule:` fact spoke a rule number that does not exist.** The escalation fact ended
*"…and NHL 60.4 one for attempting or deliberately injuring"*. The elliptical *one* lands
straight after the number and the pipeline renders **"NHL sixty point four one"** — rule
60.41. Found by rendering the SSML rather than reading the markdown. Rewritten without the
ellipsis. A bare `(c)` after an expanded citation also fails to expand and `--report` flags
nothing, so `9.5(b) and (c)` is now written out in full.

**Two structural findings are recorded and not fixed**, because both are section-shaped
rather than fact-shaped. First: after merging two facts to stay inside the hard cap of 11,
**five high-sticking facts in `body_contact_and_battles.md` §12 and not one says what
high-sticking is** — every other infraction in that block gets a definitional fact, and a
listener meets "carve-out" and "waist-level floor" as undefined terms. The block is 11
`Rule:` facts with no coaching fact to evict, and the style guide's own answer applies:
*"More than 8 and the section is probably two sections."* Splitting §12 is the fix, and it
is a content-structure change that deserves its own round. Second: the merge also shed the
**positive** test the other three books apply — that they penalise a stick *carried* above
the shoulders — which is the premise the deflection fact in `shooting.md` rests on.

**MA24 · the fix for the gate's last blocker omitted the reader's own book.** Rewriting
`rules_primer.md:425` to drop an unowned population claim, the author wrote *"Under USA
Hockey and Hockey Canada the same stick can reach a major and a game misconduct"* — naming
two of the three books that exceed the NHL's double minor and omitting the **IIHF**, which
is the British reader's at every level, in the section addressed to rec players. IIHF 60.4
carries the same major and automatic game misconduct, and the In-House Rules amend only
60.3. The trailing *"find out which book your league runs"* mitigates but does not correct:
it points a reader who already knows they are under the IIHF away from the risk. Found by
`facts-reviewer` on a pass scoped to four facts fixes, by grepping the corpus for the clause
numbers — **not** by any pass looking at that sentence.

That makes the count of consecutive fix-passes that introduced a fresh defect **six**. The
reviewer's own conclusion is the one to carry forward: every one of those defects has been
in text *adjacent to* the fix rather than in the fix, so a pass scoped to the sentence
cannot find them. **Scope the next verification to the section.**

### Critical — found by `safety-reviewer`'s eighth pass, on the match-tier correction itself

**CR17 · the match-tier correction reached the Senior half of the §10 cell and stopped.**
`rules_primer.md:720` gained 9.5(c)→7.7(c) for junior and senior, while the minor and female
sentence in the **same cell** still ended at a major plus a game misconduct. So a Hockey
Canada U15 or female player read the row written for them, in the comparison table a reader
opens specifically to answer *what does this cost me in my book*, and was told the ceiling
is a major. It is a match penalty — ejection and automatic review. The correction for a
half-stated escalation was itself half-stated, in the same sentence.

**MA25 · the mechanism was misattributed, and the citation was checkable and wrong.**
The author wrote that 9.5(b) and 9.5(c) route cases to *"7.7(b) and 7.7(c) in junior and
senior, 7.6(b) and 7.6(c) in minor and female"*. **Those two clauses name 7.7 and nothing
else.** There is no Hockey Canada high-sticking rule for minor and female hockey at all —
9.5 is titled *High-Sticking – Junior/Senior* and 9.5(a) opens *"In Junior and Senior
divisions"* — so nothing is being routed out of it there. The minor and female route comes
from 7.6's own preamble: *"This rule supersedes any other rules, with the exception of Rule
7.10 – Fighting"* (`hc.txt:6244`).

Worse than an imprecision: the paragraph contradicted itself in three clauses, telling the
reader 9.5 does not reach minor and female hockey and then citing 9.5(b)/(c) as the route
for minor and female cases. **A minor-hockey coach who follows the citation opens a rule
headed "Junior/Senior", finds their division nowhere, and concludes the escalation is
somebody else's problem.** That is the specific way a correct warning gets discarded — by
being hung on a citation the reader can check and find wrong. Every number was right; the
mechanism was not. Split in all three sites.

**MA26 · the new escalation fact carried no threshold of its own.** Every threshold lived in
the fact above it and it reached back with the word *"too"*. Extracted alone — the podcast
case and the fact-card case — it asserted that a Hockey Canada high stick reaches a match
penalty, full stop. A listener who takes away *every high stick is a match penalty* finds
out within one game that it is not, and discounts the rest of the block, including the fact
that actually protects them. Rewritten self-contained, with both triggers in it.

**One thing the pass explicitly told the author NOT to propagate**, and it is worth
recording as the counterweight: `shooting.md` must **not** gain the match tier. Hockey
Canada's Interpretation 1 to 9.5(a) assesses a **minor** for a follow-through that hits an
opponent above the shoulder, and a shooting motion is close to the least likely high stick
to reach 7.6(c) or 7.7(c). Importing the ceiling there would be the overstatement that makes
a document stop being believed. That document is calibrated correctly and was left alone.

Two smaller things closed with them: the ceiling had reached **neither** Common Mistakes nor
Key Takeaways in the document that teaches stick discipline, so KT3 now carries it; and
`shooting.md:219`'s *"only if your team then gains possession"* now names USA Hockey 621(d),
whose default is **inverted** — *"play shall be immediately stopped… unless the puck is
batted to an opponent who gains possession"* (`usah.txt:4330-4341`, read in full).

**MA27 · a saved Terraform plan sat unignored in a public repository's working tree, and all three protections missed it.** Saving a plan as `infra/tfplan.www301` while applying the www→apex redirect produced a 49 KB file carrying resource attributes and account identifiers. `.gitignore` had `tfplan` and `*.tfplan` — the name matched neither. `git-guard.sh`'s `SENSITIVE_RE` was anchored the same way, and its `git add` guard required whitespace or end-of-string immediately after `tfplan`, so **the hook would not have blocked `git add infra/tfplan.www301`**. `check_secrets.py` scans **tracked** files and is structurally blind to an untracked one. One `git add infra/` from publishing it.

Found by `commit-gate`, not by any check. Deleted; `.gitignore` gained `tfplan*` and `*.tfplan*` **as additions**, keeping the originals — removing them fires the hook's own weakening rule, which cannot distinguish widening from weakening and is right not to try. The hook is fixed in both places, and **the test suite that exists to catch exactly this carried no `tfplan` case at all**, which is why it escaped; four are now in it (56 cases, all passing).

One accepted over-block is documented in the hook: the widened `git add` guard also catches the tracked `*.example` templates. A negative case for `.example` cannot be written in ERE without lookahead, and every workaround tried fails **open** when a real secret is staged beside an example file. Over-blocking is an annoyance; under-blocking publishes a credential.

**Two changes in this diff are not defect fixes, and are recorded so they are decisions rather than discoveries:**

- **`/drills/` added to `.gitignore`**, at the user's request, so an unreviewed working folder cannot be swept in by a blanket `git add`. It is not a secrets weakening. Note the cost honestly: it also removes an actively-worked directory from `git status`, which is the opposite of what the multi-agent section of `CLAUDE.md` asks for.
- **IndexNow**, in `deploy.yml` and a key file under `site/public/`. The key is public by design — the engine fetches it to prove host control. The step reuses the invalidation step's changed-path list, submits `/x/` rather than `/x/index.html`, and is `continue-on-error`: the site is already live by that point and a search engine's endpoint being down is not a deploy failure. **It cannot be tested until the workflow is on `main`.** It rides here only because a rebase unstaged `deploy.yml` and its GA hunk cannot be separated from the IndexNow hunk without interactive staging — and splitting `consts.ts` from the workflow that supplies `PUBLIC_GA_ID` would leave a commit where analytics silently stops.

### Deferred

- **~20 further `rules_primer.md` findings** from the rules pass, not yet applied: Hockey
  Canada's unstated icing type; HC 6.7(d) permitting a timeout after icing; IIHF 19.3
  collapsing the 4-on-4 route in the last five minutes; USA Hockey 636(f)'s curfew
  restriction; USAH 402's majors and misconducts pro-rating; USAH 404(b)'s baseline
  suspension; USAH 607(c)'s penalty; IIHF 101.1's penalty in the §10 cell; IIHF 44.1
  clipping; and seven quote-precision items.
- **`getting_started.md`** — the first document a woman beginner reads before buying a
  helmet — still defers vaguely on facial protection.
- **The `rules_primer.md` Sources block** for USA Hockey 621 and Hockey Canada 7.7.
- ~~`equipment.md:419`~~ **Fixed.** The gate's objection was the right one: deferring a
  line the same diff is already editing is how divergence starts. The birth-date wording is
  now attached only to SIHA, whose rule uses it, with BUIHA's separate clause named
  separately. It was never a hazard — BUIHA bars under-18s outright (`eiha_inhouse.txt:571`)
  and so does Scottish recreational hockey (`:551`) — but it was imprecise.
- **Hockey Canada 6.9(c)** — *"In Minor of Female divisions, any player who high-sticks or
  attempts to high-stick the puck and, in doing so, contacts an opposing player with their
  stick, will be penalized under Rule 7.6"* — is a **better citation** than the one
  `shooting.md` currently uses for its minor/female branch on tips and deflections. What the
  document says is correct; this would make it directly citable.
- **`shooting.md:219`** — `Batting the puck above shoulder height stops play only if your
  team then gains possession (NHL 80.1)`. Hockey Canada 6.9(a) matches; **USA Hockey 621(d)
  does not** — play stops unless an opponent gains possession, so "only" is wrong under that
  book. Pre-existing, in a block this diff already edits.
- **Hockey Canada 6.9(c)** is a better citation than the one `shooting.md` uses for its
  minor/female deflection branch: *"In Minor of Female divisions, any player who high-sticks
  or attempts to high-stick the puck and, in doing so, contacts an opposing player with
  their stick, will be penalized under Rule 7.6 – Head Contact"* (`hc.txt:5304`).
- **A gap no document resolves.** In Hockey Canada minor and female hockey, 9.5(a) does not
  apply and 7.6 reaches only the head, face and neck — so a stick contacting an opponent
  *above the shoulders but not on the head* appears to be reached by no clause anyone has
  found. The corpus rounds this to "falls to Rule 7.6", which is safe but may be inexact.
  For `rules-verifier`.
- **`puck_handling.md:556` and `:563`** teach the wind-up as a deception tool with no
  cross-book flag. Unchanged by this diff — the next place this hazard propagates.
- **"owns" as ownership vocabulary in `content/`** — 240 pre-existing instances; the style
  guide forbids it. A corpus-wide decision, not a fix for this round.

---

## Disclosures re-verified and upheld

- **The USA Hockey Casebook limitation** on the head-down search — self-limiting, names
  exactly which book was and was not searched. Sound. Note the corpus disagrees with itself
  on whether the Casebook is on disk; flagged, not resolved.
- **The Hockey Eastern Ontario provenance note** in the diagram document — intact and
  exemplary. The change extended it rather than weakening it.
- **The trapezoid "treat this as unsettled"** in `uk_rules.md` — untouched, and the model
  for what CR4's note *would* have looked like if the conflict had been real.

---

## What this method could not have found

**The content reviewer could not verify a single rule quotation** — it reported no rulebook
text on disk, having looked in `/private/tmp` rather than `sources/`. Its findings are
internal-consistency reasoning, which the style guide warns spreads defects. The rules were
checked by `rules-verifier` and `safety-reviewer`, both of which did find `sources/`, and by
the author — but one of the three reviewer passes on this diff is unaudited on D1.

**The fixes to the fixes were re-verified four times, and that is why this section is
shorter than it should have been.** Passes 4 to 7 each read the previous pass's corrections;
three of the four found something real. Pass 7 confirmed presence and correctness of every
string and cleared the diff. What remains unaudited is narrower but not nothing: passes 6
and 7 were **scoped to the changed files and their siblings-by-grep**, so a hazard sitting
in a document with no hunks in this diff was untouched by both. Pass 6 said so plainly —
it found the Key Takeaways gap *because takeaway 4 is about the slap shot and therefore
advertised the missing content*. A takeaway needing the same caveat without naming the slap
shot would have passed it.

**No check in this repository reads structured data.** CR8 survived seven reviewer passes
and two link checkers because every one of them reads prose, markdown links or rendered
HTML. Nothing walks the JSON-LD. The gate's own closing note is the sharpest thing in this
record: it caught the broken URLs *because it had a filesystem to test them against*, and a
structured-data claim with no local ground truth — a `license` that does not match the
site's terms, an `author` who is not the author — would have passed it exactly as cleanly.

**`content/off-the-ice/conditioning_and_recovery.md` was not named in this record** until
the gate said so. Its hunk is a duplicate-word fix (`the the In-House Rules`) carrying no
claim, so it closes in a sentence — but a file riding in unmentioned is the shape C8 exists
to catch, and the record, not the file, was at fault.

**Nobody has heard the audio.** Pass 7 read the generated SSML, which is not the same
check — it noted the pipeline emits *"two hundred and twofive-twenty twenty-six"* for
"2025-2026", pre-existing, in a citation rather than an instruction.

**The remaining ~20 rules findings are unapplied**, so `rules_primer.md` is now partially
corrected — a state that is worse than either extreme for a reader who assumes consistency.

**A browser rendered it at last, and only from one side.** The twelfth attempt got through
where eleven had been refused, and it immediately found two criticals and a major (CR9, CR10,
MA12) — so the eleven refusals were not a small gap. But the pass was **desktop-only**:
`resize_window` reports success and does nothing in that window, so **no viewport below
1680px was ever measured**, and the classifier then cut the session off mid-run. The two
mobile table checks this round specifically asked for are unverified, not passed. **CR14's
fix — the one change whose entire purpose is behavioural — has never been observed working.**

**And the standing one:** nobody in this chain can say whether the corpus *teaches*. Every
reviewer here already knows the answer before they read.

---

## Proposed scope for the next round

Apply the ~20 deferred `rules_primer.md` items in one pass rather than piecemeal, since a
partially corrected rules document is its own hazard — that is now the largest known defect
in the corpus and it is documented rather than fixed.

Then **`puck_handling.md`**, which teaches the wind-up as deception with no cross-book flag
and is the next document this hazard reaches; and a corpus-wide sweep for the *shape* that
produced CR6 and CR7 — a technique taught in one document while its legal constraint lives
in another. Both passes that found it were scoped to changed files and would not have.

And the standing one: **`rules_primer.md` went a month past a flagged overdue date without
its first rules pass.** Nothing in the process caught that. A document's last-verified date
is not tracked anywhere a checker can read it.

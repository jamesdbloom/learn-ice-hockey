# Review History

*What sixteen rounds of adversarial review found in this corpus, and what changed because of it.*

---

## A note on this document's own provenance

No numbered round-by-round ledger was kept as a separate file while the review was running. This document is reconstructed from three surviving records:

- **[`content_style_guide.md`](content_style_guide.md)** — the primary source. Nearly every rule in that guide exists because something went wrong once, and most of them describe the failure they were written to prevent, with counts and examples. It is the closest thing to a defect log the project has.
- **[`site_build_specification.md`](site_build_specification.md)** — records a snapshot taken at round 13: *"13 adversarial review rounds; 13 criticals and ~60 majors found and fixed."*
- **The git history and the verification notes at the foot of individual documents**, which record specific corrections with the date and the reasoning.

Consequences worth stating plainly, because this document is offered as evidence of rigour and should be held to the standard it describes:

- **The per-round breakdown for rounds 14–16 is not recoverable.** The 13-criticals / ~60-majors count is the round-13 snapshot, not a final total; the final total is not recorded anywhere I can find, and I have not invented one.
- **Rounds are identified by number only where a surviving record names them** — rounds 9, 10 and 13. The other rounds are attested in aggregate but not individually.
- **The defect classes below are complete as far as the style guide records them.** Where the guide states a count ("eleven documents", "16 places across 12 documents") that count is reproduced exactly. Where it does not, no count is given.

---

## 1. What the review was

The corpus is 35 documents and roughly 18,000 lines teaching people to play ice hockey. It makes a very large number of falsifiable claims: rule numbers and their wording, rink dimensions, research findings, measured percentages, and attributions to named governing bodies and named authors.

The review was an attempt to break every one of those claims, repeatedly, from a standing start each time.

It began before the corpus existed. [`content_review_and_roadmap.md`](content_review_and_roadmap.md) is round zero: an adversarial review of the three original position documents, which found offside defined incorrectly in two of them, the icing paragraph duplicated three times and incomplete in all three, the trapezoid rule absent in a way that actively undercut the defender advice, self-contradictory power play descriptions, and — the structural finding that shaped everything after it — that the position documents were describing **one unnamed coaching system and then arguing with themselves**, patching a stated rule with three consecutive "Exception —" blocks. That review's roadmap is what the other 32 documents were built from.

The rounds that followed reviewed the corpus that resulted.

---

## 2. How it worked

**Fresh context every round.** Each round was run by an agent that had not written the material and did not carry the previous round's assumptions. An author checking their own work re-reads what they meant; a reviewer with no memory of writing it reads what is on the page. This is also why the same defect could survive eight rounds and then fall in the ninth — nothing about the text changed, only who was looking and what they had been told to look for.

**An explicit brief, and a different one each time.** A round was scoped to a method: verify rule numbers against the local rulebooks; refetch every external URL and confirm the quoted string is in the body; check that every number matches its owning document; read the summary layers for anything that is not a number. The briefs were not repeated, because a repeated brief re-finds nothing.

**Fix, then re-verify.** A finding was not closed when a fix was written. It was closed when a subsequent pass confirmed the fix in place — and, after round 10, confirmed it in place *in every summary that repeats it*, which is a different check and the one that kept failing.

**Every report stated its own coverage.** Which documents were read in full, which were sampled, which were not reached, and which checks were deliberately not re-run. This turned out to be the single most productive convention in the whole process; see §5.

**Primary sources, locally.** The NHL, IIHF, USA Hockey and Hockey Canada rulebooks, the USA Hockey casebook, and several research papers were downloaded and text-extracted so that rules claims could be grepped against the actual text rather than against a blog summarising it. Every content error found in the first review round clustered in exactly the files that had sourced a rule from a secondary site instead.

---

## 3. What it found

### 3.1 Claims that no evidence exists — when the evidence was in the working directory

The worst single defect in the corpus, and the one that explains why the review needed as many rounds as it did.

`scanning_and_anticipation.md` stated **four times** that nobody had counted hockey players' scanning, and built its entire framing around apologising for borrowing data from football.

**Berg et al. (2025), *Journal of Sports Sciences* — 88 professional players, 2,545 tracked puck receptions — had been downloaded into the working directory twice and never opened.**

It was not merely that the study existed. Its numbers *contradicted the coaching benchmark the corpus was repeating*. The commonly-taught target is a shoulder check every one to two seconds; Berg et al. measured a mean of **1.48 scans in the five seconds before receiving the puck** — one scan per 3.4 seconds — with **no scan at all before 39% of receptions**, and found scanning first worth **78.8% action success against 70.1%**. The corpus was simultaneously asserting that nobody had measured this and teaching a figure that the measurement refutes.

Four review rounds missed it, for a reason worth internalising:

> **A negative existence claim is unfalsifiable by ordinary review.** Checking that quoted claims match their sources can never catch a claim that no source exists. It has to be attacked directly, as its own class.

The same shape recurred elsewhere. `switching_positions.md`'s claim that no published evidence exists on how players transition between positions was **re-checked directly on review rather than taken on trust**, and survived — which is the point: the check has to be able to come back either way.

### 3.2 Documents contradicting their own Sources lists

The cheapest defect to find once you know to look for it, and it was in the corpus for a long time.

`equipment.md` disclaimed its helmet-replacement guidance as unsourced. **The Hockey Canada certification bulletin that states it was already hyperlinked in that same file's own source list.** The citation was sitting in the bibliography of the document denying it existed.

The rule that came out of it: before writing "no study exists", "could not be verified" or "untraceable", read your own references first.

### 3.3 Provenance errors — the right fact, the wrong author

This is the largest class by volume and the most interesting, because in every case the *content* was correct. What was wrong was who was credited with it. From the attribution audit across seventeen documents:

- **A real standard attributed to the wrong body.** The standard existed and said what was claimed; the organisation named had not issued it.
- **A review's introduction presented as its finding.** A real sentence, quoted accurately, from the introductory section of a review paper where it was *reporting one of its own references* — presented as a measurement that review had taken. The words were right, the attribution was one hop short.
- **Quotation marks manufactured around reported speech.** A source paraphrased someone; the corpus put the paraphrase in quotation marks and attributed it as a direct quote.
- **A study reached through two intermediaries** when the primary was already cited elsewhere in the corpus.
- **A Swiss league figure presented in an all-NHL context.** Accurate number, wrong population.
- **A model credited to the site that applied it** rather than to whoever devised it.

### 3.4 Corrections that outlived their bodies

Every document ends with **Common Mistakes** and **Key Takeaways**. The Key Takeaways layer is what the podcast pipeline extracts for its "if you only remember N things" segment — so it is the layer most likely to be heard and least likely to be reviewed.

**Every critical defect found in round 10 lived in a Key Takeaway or a Common Mistakes bullet that had been left behind when its body was fixed.** A correction had been applied where the error was noticed and nowhere else, so the corpus was stating the fixed version in prose and the broken version in the summary — and shipping the summary to audio.

The rule: fix a body, then go and find every summary that repeats it.

### 3.5 Overcorrections — a fix that created a new falsehood

Two NHL rules give different trapezoid dimensions. Rule 1.8 describes the lines actually painted (eight feet from each post at the goal line); Rule 27.8 still reads six feet, which is wording left over from before the 2014-15 widening.

An earlier version of the style guide corrected the corpus's use of the stale figure — and in doing so asserted that Rule 27.8 was **self-contradictory**. It is not. Six feet outside each post gives 18 feet at the goal line diverging to 28 feet at the boards: a perfectly coherent trapezoid, and exactly the pre-2014 shape. Rule 27.8 is **stale, not incoherent**.

That overcorrection then propagated from the guide into **three content documents** before it was caught. A governing document is a force multiplier in both directions.

### 3.6 Rules that travel without their exceptions

The corpus had an ownership convention for *numbers* — every figure has one owning document and is taken from there rather than restated from memory. Nothing governed **rules**, and that gap produced the most widely-repeated defect in the corpus.

***"You may ice the puck freely while shorthanded"* appeared bare in eleven documents and carried its exceptions in three.**

Both carve-outs are real and both change what a player does:

- **NHL Rule 81.6** removes the exemption from a team short-handed by a major penalty that has failed to keep a player on the penalty bench.
- **USA Hockey restricts it by classification** — Youth 15-Only and above, Girls 16U and above, High School and Adult. **Below those levels a shorthanded team cannot ice the puck at all**, and most North American rec and youth players are under USA Hockey rules.

Three documents called the exemption *"the single biggest structural advantage a penalty kill has."* No position document mentioned either carve-out — despite every position document promising in its own header to flag rule-set differences inline.

### 3.7 An owner that did not hold what its dependants credited it with

The sharpest version of the same failure ran the other way, and it is the reason the ownership convention is not self-policing.

**Thirteen documents cited USA Hockey Rule 624(b)(1). Eight of them said *"[Special Teams] owns this rule."* `special_teams.md` had never mentioned it** — not in the body, not in its Sources.

So the convention was propagating a caveat *outward from a document that did not contain it*. A reader who followed the reference arrived at the least complete treatment of the fact in the entire corpus. This is worse than an ordinary gap, because the pointers make the corpus *look* rigorous while hiding it.

*(Closed. `special_teams.md` now holds the rule, both carve-outs and the source.)*

And then a follow-on finding, which is its own lesson: **holding a fact and stating it correctly are separate checks.** `special_teams.md` was patched to hold the rule, and stated it as **"The kill cannot ice the puck."** True only if you supply "…be called for icing"; false as a sentence. The corpus is fed to a text-to-speech pipeline, so every rule statement has to survive being read aloud with no surrounding text.

### 3.8 Numbers with no owner, diverging quietly

Before the ownership table existed, the same quantity appeared with different values in different documents:

| Fact | What the corpus said |
|---|---|
| Crease depth | 6 ft in three files, 4.5 ft in a fourth |
| Neutral-zone gap | 2–3 stick lengths in two files, 1–2 in a third |
| Share of the game spent off the puck | 90%, 95% and 96% |

**Three reviews in a row found the same class of defect regenerating**, because a writer restating a number from memory has nothing to check it against. The fix was structural rather than corrective: every number now has a named owning document, and qualifications travel with the value — if the owner says a figure is 5-on-5 only, or the author's own computation, or measured in a different sport, that is part of the fact.

### 3.9 Claims too obvious to source

***"The centre covers more ice than any other position"* was asserted flatly in five documents, including the README, and survived eight review rounds** — because it reads like common knowledge.

It is not merely unmeasured. **A primary source contradicts it.** Lignell et al. (2018), 36 NHL players: *"defensemen covered **29% more** skating in total than forwards and were on the ice **47% longer**"*, with forwards doing *"**54% more** high-intensity skating per minute."* No located study separates centres from wingers on distance at all — the literature splits players only into forwards and defence.

It survived because it had **no owner**. No document was responsible for it, so no reviewer checked it. The corpus now states the defensible version — a centre works more *of* the ice: three zones, full width, not more distance — alongside what the measurement actually shows.

> **A claim that feels too obvious to source is a claim nobody has sourced.** Appearing in five documents at once is a symptom of folklore propagating, not of consensus.

Other members of this class, all caught late and all in multiple documents at once:

- ***"The race is to the dot"* on hybrid icing** — in five documents plus the style guide itself. Rule 81.1 says in terms that it is wrong: *"the determining factor is which player would first touch the puck, not which player would first reach the end zone face-off dots."* The dot is the deadline for the decision, not the finish line. It changes what a chaser does at speed, because a player who has lost the dot race may still be entitled to keep the puck alive.
- ***"Screening the goalie is entirely legal"*** — **16 places across 12 documents.** Screening from *outside* the crease, without contact, is legal and valuable; but Rule 69.1 means positioning alone can void a goal if it impairs the goalie's ability to move or defend, and Rule 69.3 disallows a goal where an attacker establishes a significant position within the crease. The unqualified version was teaching something that gets goals waved off.
- ***"USA Hockey has no goalkeeper's restricted area"*** — three documents. USA Hockey Rule 614(c) restricts *freezing* the puck to the "goalkeeper's privileged area", corners excluded, on the same two-minute penalty. It is not the NHL trapezoid, but "none at all" is false.
- **A stick in your skates is a penalty only if you actually fall** — a round-10 critical, false in all four rulebooks, and a claim readers would have acted on.

### 3.10 Edition drift

Documents cited the rulebook editions they had drifted to rather than the one the corpus baselines on — 2023-24, 2024/25, and in one case an IIHF book dated 2026/27. This made rule text unverifiable against the local primaries, and in one instance carried a **superseded high-sticking definition**.

Related: **eleven documents cited `nhl.com/info/rules` as the rulebook link.** It does not resolve to the rulebook. The PDF that actually serves was found and is now the corpus's canonical citation.

### 3.11 Tooling artefacts — where the verification method was the defect

Several rounds found that the corpus's disclosures were artefacts of how it had checked, not of what was there.

- **A 403 is not an absence.** USA Hockey, CSA, ISO and Nature all reject automated fetching and serve fine to `curl` with a browser user-agent. Several "could not be verified" notes existed only because a tool had been refused. In the corpus's current link baseline, 23 of the external URLs still return 403 to automated fetching while being perfectly live in a browser.
- **A 200 is not a presence.** Hockey Canada programme URLs return **HTTP 200 with the site's 404 page in the body** — soft-404s, two of them serving an identical 167,052 bytes. A retry that stopped at the status code would have called them live and invented a citation for a page that does not exist, which is a worse failure than the disclosure it replaced. In that particular case the corpus's original disclosure turned out to be **correct**. The link baseline flags 12 URLs as suspected soft-404s.
- **Text in the HTML is not text on the page.** A quotation attributed to a league's site — *"from co-ed to 50+, beginner to pro"* — existed only inside an **HTML comment**, in a commented-out block still advertising the **2019/20** season. A naive grep of the raw HTML found it; no reader would ever have seen it. It was withdrawn and replaced with the live wording.
- **A domain can be hijacked by a redirect.** `thefirstshift.ca` 301-redirects to `retirerightresource.com`, an unrelated commercial site. The programme is real; the remembered domain is not the way to reach it. The corpus now routes readers through Hockey Canada's own pathway page and says why.
- **A true quotation of one row can be a false picture of the page.** A learn-to-play programme was quoted as *"a four-session block, CAD $148.00"* — the shortest and cheapest of **ten** listings running 4 to 14 sessions and $148.00 to $444.00, presented as the shape of the thing. The corpus now quotes the range and says which row it took.
- **An API can lie by paging.** Faceoff counts recomputed from the NHL API came back 117/106 when paged sorted by total faceoffs — that sort returns duplicate rows and drops others — against 120/109 when re-paged by player id. The net-front table, recomputed the same way, reproduced exactly.

### 3.12 Deletion as a failure mode

Reviews are biased toward tidying, and tidying loses information silently.

- **A tidying pass removed a correct fact** — the BNQ 9415-370 withdrawal, which was true — because it looked unsupported. Deletion is not the safe default.
- **A deduplication brief would have orphaned material** on Rule 67.4/67.5 crease coverage, which lived in one document only and had simply been filed under the wrong heading. It looked like a duplicate; it was the only copy.
- **The honest disclosures are a strength, not clutter.** An audit of about 40 of them found 30-plus entirely sound: no study on black tape hiding the puck, no league-wide census of forecheck usage, no measured time cost of an icing clear, "2-2-1" genuinely not a hockey forecheck name. Stripping those to make the corpus look more confident would have made it less trustworthy, not more.

**The one case where deleting was right.** `time_and_space.md` carried a coaching cue that contact "goes through the hands". USA Hockey's rulebook names *"the use of the hands, forearm, stick or elbow in delivering a check"* as prohibited, three separate times. That is not a coaching disagreement to present as a split — it describes a penalty, and a reader acting on it gets hurt or ejected. It was cut outright, and the removal is recorded in that document's own notes.

> The test for deletion is whether a **source contradicts** the claim — never whether a source is merely absent.

---

## 4. The honest conclusion

**Across roughly 340 body-verified citations, not one quoted number was wrong.**

Every defect the attribution audit found was **provenance, not fact**. The figures were right. The rule text was right. The research findings were right. What was wrong was *who said it* — a standard credited to the wrong body, a review credited with a measurement it was quoting from someone else, a paraphrase dressed in quotation marks, a Swiss figure in an NHL paragraph.

This is a real result and it should be reported at its actual size rather than inflated. It says the corpus was careful with numbers and careless with attribution, which is exactly the failure mode you would predict of material assembled by reading widely and writing fluently. It does not say the corpus is correct — a claim can be perfectly attributed and still be the wrong claim to make, and §3.9 is a list of five such claims that took eight rounds to fall.

Two supporting measures, kept separate because they count different things:

| Measure | Value |
|---|---|
| Citations refetched and **body-verified** — the quoted string located in the rendered text of the page that served it | ~340 |
| External URLs in the corpus with a recorded HTTP status and post-redirect final URL, in [`verification/link_baseline.tsv`](verification/link_baseline.tsv) | 610 |
| — of those, HTTP 200 | 568 |
| — 403 (live in a browser, refusing automation) | 23 |
| — hard 404 | 14 |
| — flagged as suspected soft-404 | 12 |
| — other (202, 400, connection failure) | 5 |

Known-dead entries are retained deliberately, labelled in the content with the date and status observed, rather than removed.

---

## 5. The methodological lesson

This is the finding that generalises beyond hockey.

**Round 9 returned zero critical defects. Round 10 then found three criticals and about twenty majors** — including a rules claim readers would act on, and two documents denying, in their own sources' names, what those sources say.

**Nothing changed between the rounds except where the reviewer looked.** Round 9 verified the items its brief listed and scanned the summary sections programmatically for *numeric* claims. Round 10 read those same summaries for everything that is not a number, and found criticals sitting in places eight previous rounds had passed over.

> **A clean review round is a statement about the round, not about the corpus.** A declining defect count across rounds measures how much method coverage has accumulated, not how healthy the material is.

The useful question is never *"did this round find anything"* but **"what could this round's method not have found?"** — and the answer to that is the next round's scope. Every productive round in this project was scoped by the previous round's admission of its own blind spot:

- Round 9 said plainly what it had **not** read. That admission is the only reason round 10 could be scoped, and round 10 is where the criticals were.
- The negative-existence class (§3.1) could only be attacked once a round admitted that checking quotations against sources is *structurally incapable* of catching a claim that no source exists.
- The attribution audit (§3.3) could only be scoped once a round admitted it had verified that quoted text matched the source page, without ever asking whether that page was the source.

Hence the standing requirement: **every review report must state its own coverage limits** — which documents were read in full, which sampled, which not reached, and which checks were deliberately not re-run. A report that finds nothing and says why is worth more than one that finds nothing and doesn't.

---

## 6. What the review did not do

Stated here for the same reason each round stated it.

- **No expert reader has reviewed the hockey.** The review verified claims against sources. It did not put the material in front of a coach and ask whether the teaching is good, whether the emphasis is right, or whether a section describes something that works on paper and not on ice.
- **Coaching craft is labelled, not verified.** A substantial fraction of the corpus is craft with no research behind it — transition timelines, reading a shooter's shoulders, rebound-direction heuristics. Those are labelled as craft wherever they appear. Labelling is not verification.
- **Rule verification is against four rulebooks, and leagues are not.** NHL, IIHF, USA Hockey and Hockey Canada are checked against their actual text. "Typical rec / beer league" remains a generalisation; no document governs rec hockey as a whole.
- **The external source layer decays.** The link baseline is a snapshot. It is the input to a scheduled link check precisely because link rot is a live problem for this corpus — a single day's checking produced a redirect hijack, three hard 404s and two soft-404s.
- **A "verified" citation means the quoted string was found in the body of the page that served it.** It does not mean the underlying study is sound, replicated, or applicable to the reader.

---

## 7. What is carried forward

The review's output is not this document. It is three artefacts that keep the corpus honest without needing the review to run again:

- **[`content_style_guide.md`](content_style_guide.md)** — the governing document. Nearly every rule in it is a scar. Read it before writing or reviewing anything.
- **[`.claude/agents/`](../.claude/agents/)** — `content-reviewer`, `rules-verifier` and `source-verifier`, distilled from the briefs that actually found things, each carrying the traps that cost this project rounds to discover.
- **[`verification/link_baseline.tsv`](verification/link_baseline.tsv)** — the external citation layer as a checkable file, so link rot is detected rather than discovered.

---

*Compiled 28 July 2026 from the style guide, the build specification, the git history and the verification notes in individual documents. Figures are reproduced from those records; where a record gives no figure, none is given here.*

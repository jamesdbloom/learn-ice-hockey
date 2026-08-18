# Round 33, Wave A — the three verification passes nobody had run

**Status: findings only. No `content/` file has been changed by this round.** HEAD is `0c61559`.
The two site-and-plan commits in it (`3fa93ea`, `0c61559`) touch no corpus text.

Round 32 closed with four dimensions open and three whole items never attempted. This round ran
them as **read-only passes in parallel**, which is safe because none of them writes: the
contention in this repository is entirely on `content/foundation/rules_primer.md`, and verification
does not touch it. All three have reported.

| Pass | Never run before | Verdict |
|---|---|---|
| The 14 `"As IIHF"` cells against the UK sources | 13 of 14 unchecked in 32 rounds | **Method sound; the defect is elsewhere** |
| **Rule-first** sweep of boarding 41, interference 56, holding 54 | No reviewer had ever opened these three rules | **10 gaps, 4 errors** |
| `source-verifier` over 629 citations | Never run at all | **39 of 629 fetched; 4 major, 7 moderate — and most disclosures upheld** |

---

## 1 · The `"As IIHF"` apparatus is sound, and the defect it exposed is in the IIHF column

**The premise going in was that 13 unverified cells might be resting on nothing. They are not.**
`sources/eiha_inhouse.txt:47-48` carries an explicit closure clause:

> *"Unless otherwise stated, all rules will be enforced in line with the IIHF Rule Book."*

That is what makes `"As IIHF"` a positive statement rather than a blank, and it vindicates the
corpus's framing at `rules_primer.md:33` and `:714`. The edition matches exactly — the In-House
Rules adopt IIHF *"Version 1.1, published July 2025"*, which is the file on disk. **Twelve of the
thirteen hold cleanly.** Icing ×6, body checking, illegal check to the head, checking from
behind, the airborne trail skate, faceoff violation and tagging up: all confirmed, with the IIHF
baseline behind each one re-verified rather than assumed.

### CR46 · CRITICAL — row 730 omits the IIHF's principal route to ejection, and every `"As IIHF"` cell inherits it

Row 730 gives the IIHF trigger as *"Second major, **or** second misconduct, in the same game
(Rules 20.4, 22.1)."* IIHF 20.4 has a **third limb** (`iihf_rules.txt:2127-2132`):

> *"An 'Automatic Game Misconduct' shall also be applicable whenever a Player is assessed a major
> penalty for any of the infractions listed in the Reference Tables."*

Table 6 (`iihf_rules.txt:8803-8817`) lists **twenty** infractions — checking from behind 43.3,
clipping 44.3, illegal check to the head 48.3, high-sticking 60.4, cross-checking 59.3, slashing
61.3, spearing 62.3, kneeing 50.3, hooking 55.3, butt-ending 58.3, head-butting 47.3, kicking
49.3, slew-footing 52.2, throwing equipment 53.7, dangerous actions 21.1, illegal hit 101.1, and
three fighting limbs. **So a *first* major for any of those ejects you.** The row implies a
second is needed, and the British cell says `"As IIHF"`, so a British reader inherits the
understatement. The corpus states it correctly in the individual rows (726, 727, 728) and
understates it in the summary row — **the summary layer failing while its owner is right, for the
fourth time in three rounds.**

### MA102 · the In-House Rules are not the sole register of British amendments, and there is a worked counter-example

`eih_rr.txt:1001-1002` (22.3): *"Goalkeepers' Restricted Area is not currently enforced to allow
ice rinks the necessary time to make the changes to implement this rule."* **That is a trapezoid
amendment the In-House Rules omit entirely.** So silence in the In-House Rules alone does not
prove "no amendment". Worse, both documents are overridden from above: `eih_rr.txt:1119` (23.16)
— *"Any section specific requirements detailed in their rules of competition **override this
document**"* — and the In-House Rules concede the same at `:113`. **The Rules of Competition, and
the Rule Bulletin layer at `eiha_inhouse.txt:54-55`, are not on disk.** `:714`'s claim that
`"As IIHF"` means *"the IIHF cell to its left is therefore the rule you play under"* is one step
too strong and needs those two layers disclosed alongside the EIHL Casebook gap it already names.

### DF49 · row 736's intermission length is not determinable from anything on disk

IIHF 77.2 delegates (*"or a length of time designated by the IIHF"*), and the In-House Rules
delegate again to a **"Game Times"** document that is not on disk (`eiha_inhouse.txt:487-488`).
Period length itself is confirmed, and by positive evidence rather than silence: `eih_rr.txt:1968`
shows Britain **abandons** a short game rather than shortening periods.

### DF50 · eleven British amendments have no row, five of them safety-critical

Highest first. **The neck laceration protector is mandatory with *no warning* and an immediate
10-minute misconduct that escalates to a game misconduct on a second offence**
(`eiha_inhouse.txt:238-249`, corroborated `eih_rr.txt:1145-1148`). A **chin-strap gap over 2.5 cm**
draws a misconduct on the second offence, and a detached helmet means *"they must immediately
leave the ice"* (`:222-230`). **Rinks below IIHF minimum dimensions — under 56 m × 26 m — are
authorised at all levels** bar three named venues (`:66-71`). Half-visor rules differ by body and
age (`:214-216`, `:376-378`). Face cages are mandatory for all junior hockey (`eih_rr.txt:1155`).
Then six penalty-bearing administrative rules a player can trip over, and DOPS reaching
*"regardless of whether such offences were penalised by the Referee at the time"* (`:610-616`).

### MI84 · a provenance finding on the R&R

`eih_rr.txt` is the **2024-2025** edition (`:4`), not 2025-26, and it cites *"Rule 128"*
(`:1163-1164`) — pre-2018 IIHF numbering that does not exist in the current book. Where the two
UK documents both speak, the In-House Rules (2025-26) are the later instrument.

---

## 2 · The rule-first sweep — and why the method matters more than any single finding

**Every pass in 32 rounds was claim-first: read what the corpus says, then check it.** That method
structurally cannot find an omission. This pass read NHL 41/54/56, IIHF 41/54/56, USA Hockey
603/622/625 and Hockey Canada 7.2/8.1/8.3 **end to end first**, then asked what the corpus fails
to say. It found **ten gaps and four errors in three bullets** that 32 rounds had passed over.

### CR47 · CRITICAL — the automatic-suspension machinery is in two books and nowhere in the corpus

This is the only consequence in the set that **outlives the game**.

- **NHL 23.6** (`nhl_rules.txt:2932-2999`): two game misconducts in the *Physical Infractions
  Category* before 41 consecutive clean games means *"suspended automatically for the next League
  game."* Boarding is item (i); interference is item (vii).
- **USA Hockey 411(a)** (`usah.txt:2913-2946`): a **third** major in a season for any combination
  of listed aggressive infractions is *"an additional three-game suspension"*; a fourth is five
  games; a fifth is *"suspended until a hearing is conducted."* **Rule 603 Boarding and Rule 622
  Holding are both on that list** (`:2935`, `:2946`).

`grep` for progressive suspensions across `content/` returns **one** hit — for *fighting*, with no
rule cited. **A reader taught that boarding's worst case is a match penalty is being told the
ceiling is one night.** It is a season.

### CR48 · CRITICAL — Hockey Canada's boarding, interference and holding rules carry no division scoping

Hockey Canada scopes by division where it means to: 7.3 Body-Checking (`hc.txt:6005`), 7.6/7.7
Head Contact, 9.5 High-Sticking. **It does not scope 7.2, 8.1 or 8.3.** The corpus correctly
stresses at `rules_primer.md:382` that 7.3 applies *"only in divisions of U13 and below, in female
hockey"* — and never says that boarding, interference and holding apply everywhere regardless.
USA Hockey is the same shape: 604 is classification-scoped, 603/622/625 are not. **A Hockey Canada
U11 or female-division player who has been taught the checking rules are not theirs is exposed.**

### CR49 · CRITICAL — the holding bullet states no penalty tier at all

`rules_primer.md:372` is the bullet titled **Holding**. It gives the definition, the
arm-in-a-strength-move permission and the three-of-four attribution, and **stops**. No minor, no
major, no match. The corpus knows every tier — `:355` has Hockey Canada 8.1(b)'s mandatory major
plus game misconduct on injury and USA Hockey 622(b)/(c)'s facemask major and match penalty,
correctly qualified — but `:372` does not carry them and does not cross-reference `:355`. The
technique owner is worse: `body_contact_and_battles.md:1019` is its Holding row and `grep -c '54'`
on that file returns **0**. **The facemask grab is the highest-consequence-per-instinct action in
the set** — what a player does reflexively in a scrum, a major-plus-game-misconduct *floor* in
USA Hockey, a match penalty available, and it feeds 411's progressive suspensions. The corpus
states it once, in a parenthesis, in the stick bullet.

### MA103 · the interference bullet covers two books of four — the largest single omission found

`rules_primer.md:371` says *"Both books"* five times and names only NHL 56 and IIHF 56. **Hockey
Canada 8.3 is cited nowhere in the entire corpus** (`grep '\b8\.3('` → 0). USA Hockey 625(a)'s
nine enumerated minors are cited nowhere. And the bullet opens by calling interference *"the most
conceptually important body foul, and the one you should actually study."*

Two of the missing provisions are the most teachable sentences in all three rules:

- **Hockey Canada's late-hit test is the only measurable one in any book** (`hc.txt:6805-6809`):
  *"Immediate contact is best described as contact occurring within a maximum distance of an arm
  and stick length between the puck carrier and the player delivering the check, at the instant
  the puck has been released."* The corpus's version is NHL 56.1's bare word *"immediately"* with
  nothing behind it. `grep "arm and stick"` across `content/` → **0**.
- **The IIHF's late-hit machinery, in the British reader's own book** (`iihf_rules.txt:4673-4675`,
  `:4694-4697`, `:8149-8155`): the *permission* (*"subject to a bodycheck so long as the aggressor
  is in the immediate vicinity"*), the standard actually applied (*"objectively reasonable window
  of opportunity"*), and the Definitions sentence saying that closing distance and adding force
  **converts a legal check into a late hit** — which is a technique instruction, not a legal nicety.

### MA104 · USA Hockey's boarding rule is wider than the corpus's definitional lead, three ways

`usah.txt:3519-3529`: boarding is *"where a player pushes, **trips** or body checks an opponent
causing them to go dangerously into the boards"*, with no defencelessness element in the base
sentence, plus a limb for *"any check delivered for the purpose of **punishment or intimidation**"*
that reaches a fully aware opponent. `rules_primer.md:363` opens the whole bullet on *"checking or
pushing a **defenceless** opponent"* — the NHL/IIHF lead — and never says USA Hockey's trigger is
wider. Hockey Canada widens differently again: `hc.txt:5969` reads *"an **unsuspecting**
opponent"*, and its glossary *"defenseless or unsuspecting"*, while 7.2(a) reverts to
*"defenseless"*. **"Unsuspecting" appears nowhere in the corpus in a boarding context.**

And the definition-chain the corpus lacks: USA Hockey's glossary (`usah.txt:6281-6283`) makes a
skater defenceless when *"unaware, unprepared or unsuspecting"*, and **640(b)** (`:5112-5118`)
says *"A player who has released a shot or pass … is considered to be vulnerable or defenseless
and **are not eligible to be body checked**."* So under USA Hockey, contact into the boards on a
player who has just released a pass is boarding by definition, not merely a late hit.

### MA105 · the only written permission for board contact in any of the four books is absent

`usah.txt:3531-3533`: *"'Rolling' an opponent along the boards where they are attempting to go
through too small an opening is **not considered boarding**."* Printed matches: NHL 0, IIHF 0,
USA Hockey 1, Hockey Canada 0. And 38 `/rolling/` hits in `content/`, every one about shoulder-
rolling or foam rolling. A USA Hockey defender legally sealing an attacker who is squeezing
between them and the wall has a protection the corpus never mentions — and an IIHF or Hockey
Canada reader who imports it will be penalised.

### MA106 · the boarding owner document states no boarding penalty at all

`body_contact_and_battles.md` cites *"Rule 41"* eight times and **not one names a minor, a major,
a match penalty, a game misconduct or a suspension.** The same file gives full tiers for checking
from behind, high-sticking and fighting. Boarding — the foul its §6 is built around, and the one
whose injuries it spends most words on — carries no consequence anywhere in it.

### Smaller, all verified

**MI85** — the corpus skips IIHF 41.3, a **bare major with no game misconduct**
(`iihf_rules.txt:3903-3906`), jumping from the minor to 41.4 and implying IIHF major = ejection.
**MI86** — IIHF 41.2 reads *"shall, at their discretion"* against NHL 41.2's *"may"*; the corpus
flags exactly this shall/may split for interference at `:371` and not for boarding, where it runs
the other way. **MI87** — Hockey Canada 7.2(d), *"No Misconduct penalty may be assessed for
boarding"* (`hc.txt:5997`), the exact inverse of USA Hockey 603(a)'s minor-plus-misconduct floor
which the corpus does state. **MI88** — the icing/offside boarding clause is attributed to the NHL
at `body_contact_and_battles.md:898` and `:906`; **all four books carry it** (`nhl_rules.txt:5395`,
`iihf_rules.txt:3890`, `hc.txt:5979`, and USA Hockey in the icing rule at `usah.txt:4446`).
**MI89** — Hockey Canada's holding definition reaches *"prohibiting their ability to pass, shoot,
receive, or otherwise propel the puck"* (`hc.txt:6717-6720`), a limb NHL 54.1 and IIHF 54.1 lack.
**MI90** — two published IIHF interpretations sit unused: Situation 41.1, which says a boarding
minor **survives the icing being waved off**, and Situation 58.1 on the butt-end hold.

### Two corrections to my own briefing

I told the sweep that Hockey Canada 8.1 permits blocking a stick *"with the hands"*. The text is
*"with their hands, **arms, or body**"* — and the corpus quotes it correctly at `:355`, so the
error was mine and not the corpus's. And the sweep confirmed the `1/1/0/0` fend-off count and the
`strength move` count of `nhl 1 · iihf 1 · usah 0 · hc 1` by printing every match, which is the
method that survives the `ugrep` curly-quote trap.

---

## 2b · `source-verifier`, run for the first time in the project's history

**39 of 629 URLs fetched (6.2%)**, selected by consequence: all 7 primary rulebook PDFs, every
Scouting The Refs and Wikipedia rule-history citation, all 5 archive captures, the whole equipment
certification block, and every non-200 row. **1,061 of 1,501 italic-form quotations in `content/`
were located verbatim** against the rulebooks held or fetched. The sample is biased *towards*
defects by design, so the rate found must not be extrapolated to the other 590.

**The headline is not what "D4/D5 never ran" would predict: most disclosures were upheld, several
emphatically.** The equipment certification block — the place the pass was sent to look for a
standard credited to the wrong body — is clean: HECC, ASTM, ISO, CSA and BNQ are each attached to
the right body, including the neck-protector correction where the corpus's *"(five years,
correcting a previously published seven)"* matches HECC's own retraction exactly. The Valiquette
provenance at `shooting.md:378` correctly separates Valiquette's own words from the reporter's
gloss. `body_contact_and_battles.md:1178` correctly identifies its walking-speed finding as **not**
USA Hockey's but Tator et al., *Spinal Injuries Due To Hockey*, CJNS 11:34-41 — found printed
under the illustration, exactly as described.

### CR50 · CRITICAL — speculation from a commentary source presented as settled fact, in a rules document

`rules_primer.md:151` states, unhedged and in parentheses as though it were background:
*"(2025-26 wording — this closed the loophole of kicking the puck ahead of yourself)"*. The only
cited source for that history says:

> *"That **might** wipe out the handful of situations where a player was deemed onside after
> kicking the puck ahead but prior to actually playing it with his stick."*

**A "might" from a commentary blog became a "this closed" in a rules primer.** In the source's
favour, it is not restating an NHL memo — it performs the redline itself (*"the following sentence
added to the existing rule"*), so the honest citation is *Scouting The Refs' comparison of the
2024-25 and 2025-26 books*, which is stronger than the plan feared. But the page is visibly
commentary, and the corpus neither says so nor keeps the hedge.

### MA107 · the KHL disclosure reaches 2 of 18 sites, 8 of the rest read aloud

The KHL trapezoid claim appears **18 times across 15 documents**, including **8 ` ```facts `
`Rule:` lines**, and is baked into `project/content_style_guide.md:76`. The *"we could not verify
this against a KHL rulebook"* label reaches only `defender.md:117` and `:695`. **The disclosure
itself is upheld** — `en.khl.ru/documents/`, `www.khl.ru/documents/` and `en.khl.ru/` all return
403 with an identical 245,363-byte challenge body, so this is **unreachable, not absent**. And a
usable corroborating source is *already in the corpus and unused for this*: the IIHF's own 2021
release, cited at `rink_map_and_glossary.md:717` and fetched clean today, lists *"A restricted area
for goalkeepers behind the net … (i.e. trapezoid familiar to NHL and KHL)"*. That is the IIHF
characterising the KHL, not the KHL's book, so `defender.md`'s wording stays literally correct.
**Propagate the label and add the citation; delete nothing.**

### MA108 · the verification baseline records 24 cookie walls as clean 200s

Twenty rows have `final_url` ending `/action/cookieAbsent`, four more carry
`error=cookies_not_supported`, and **all 24 carry `note = -`** — asserting liveness for pages
nobody read. The walls are a tooling artefact: with a browser user-agent, SAGE served the real
abstract at **256,822 bytes** against the baseline's 14,243-byte wall, and Taylor & Francis
**214,912** against 15,314. **Two of those back numeric claims in `mental_game.md`.** One
(Tamminen) is still walled and is genuinely `unreachable`.

### MA109 · 18 URLs cited in `content/` are absent from the baseline entirely

Headed by **the England Ice Hockey Rules & Regulations PDF — 10 citations across 9 documents**, one
of the six most-cited primary sources in the corpus, and not in the verification record at all.
(Fetched: 200, 1,139,400 bytes, extraction md5 identical to `sources/eih_rr.txt`, and Rule 22.3's
non-enforcement of the Goalkeepers' Restricted Area verified verbatim — which independently
confirms MA102 above.) The other 17 are 12 research URLs in `practice_and_development.md`, two
`eiha.co.uk` quiz pages, the EIH rules index, `iihf.com/en/statichub/officiating`, and the Hockey
Eastern Ontario copy of the IIHF coaching paper that §5's tactics plan rests on.

### DF51 · the IIHF edition question is now settled, and it is a labelling defect only

`blob.iihf.com/…2025-26_iihf_rulebook_19052025-v1.pdf` → 200, no redirect, and its extraction is
**byte-identical to `sources/iihf_rules_v1.0.txt`**. So the URL 14 content files cite serves
**v1.0**, while the corpus verifies against **v1.1**. The pass then diffed the two extractions line
by line: **every substantive difference is a dot-leader, column-merge or ligature artefact. No rule
wording differs.** So round 32's decision to relabel on md5 evidence was right, and the residual is
that 13 further link texts should carry *"Version 1.0"* or point at a v1.1 mirror.
`uk_rules.md:32` and `sources/README.md` both disclose this completely and are **upheld** — though
they state different rule-number counts for the same check, **472 against 474**, which one of them
should own.

### Moderate, all verified

**MI91** — `rink_map_and_glossary.md:721` credits Wikipedia with the two-line pass being abolished
*"under the 2005 CBA"*, a mechanism the body at `:165` **explicitly rejects** (*"a CBA is a labour
agreement and does not set playing rules"*). The annotation reads as corroboration for a claim its
own document contradicts. `passing_and_receiving.md:792` handles the identical tension honestly and
is the model. **MI92** — Wikipedia is a **restater** for the icing adoption dates: both sentences
carry inline citations on the page, to CBS Sports and to the **IIHF's own 2014 release**, which is
reachable and should be cited instead. **MI93** — `equipment.md:75` cites the EIH R&R with **no
year**, paired in the same sentence with the current 2025-26 In-House Rules; the vintage difference
is disclosed 679 lines away, i.e. not in the same audio segment. Nine of that PDF's ten other
citations do carry the year — and England Ice Hockey's own index page **no longer links it at all**.
**MI94** — the NHL Sharks release at `rink_map_and_glossary.md:721` is a **200 with a zero-byte
body**, recorded clean in the baseline; the reader gets nothing. **MI95** — `rules_primer.md:409`
puts quotation marks round a **re-tensed** clause (*"throw or shoot"* for the book's *"throws or
shoots"*); the IIHF variant quoted in the same sentence is verbatim. **MI96** —
`mental_game.md:702` states a task-type contrast finer than its abstract supports; the full text is
paywalled, so `unreachable` rather than wrong — but the neighbouring entry discloses exactly this
limit and this one does not.

### The baseline's failures are mostly its own tooling, not link rot

**Nine Wikipedia 404s are a URL-extraction bug** — the closing parenthesis is truncated, so
`Icing_(ice_hockey` was requested; the real URL serves 200. **Twelve `howtohockey.com` 403s** serve
200 with a browser UA. The **USA Hockey Heads Up program guide** — the source for the boards-safety
quotes — serves 2.4MB with a `usahockey.com` referer. So does `doi.org/10.1098/rsos.190327`. **A
403 is not an absence**, and the baseline has been recording it as one.

**Genuinely dead: three, and all three are correctly handled** — each is cited in `content/` *as an
archive capture*, with every quotation located in the capture, and only the baseline records the
live 404.

## 3 · What this means for the writing pass, and the tension it has to resolve

The sweep's own closing warning is the constraint: **"every gap above will be fixed by adding
words to bullets that are already among the longest in the corpus, and `rules_primer.md:363` is
already a 400-word paragraph."**

So the single `rules_primer.md` pass now has to do two opposing things at once — **DF44 removes,
these findings add.** That is not a reason to split them. It is the reason to do them together:
the enumerations DF44 targets are four-book penalty ladders bolted onto bullets that were already
true, and several of the additions above (CR47's suspensions, CR49's holding tiers, MA103's two
missing books) are *higher-value uses of the same space*. **Trade, do not accumulate.** Measure
once against `git show HEAD:` at the start and once at the end.

Priority for that pass, by what costs a reader most:

1. **CR47** — the suspension machinery. Nothing else in the corpus mis-states a ceiling by a whole season.
2. **CR49** — the holding bullet's missing tiers, and the facemask grab.
3. **CR48** — Hockey Canada's unscoped boarding/interference/holding, for the U11 and female reader.
4. **CR46** — row 730's IIHF Table 6 trigger.
5. **MA103** — interference's two missing books, led by Hockey Canada's arm-and-stick test.
6. **MA104/MA105** — USA Hockey's wider boarding trigger and its rolling carve-out.
7. Everything else, as space allows after the reduction pays for it.

---

## What these methods could not have found

- **Anything in the four absent documents**, and this is now the largest structural risk in the
  project rather than a footnote. The **EIH/SIHA Rules of Competition** override both UK documents
  *by their own terms*, so every `"As IIHF"` confirmation is conditional on a document nobody has
  read. The **Rule Bulletins**, the **"Game Times"** schedule and the **EIHL Casebook** are also
  absent. So is the **USA Hockey Casebook**, which is load-bearing for three findings above — the
  rolling carve-out's edges, 625(a)'s pick examples and 622's facemask threshold are exactly what
  a casebook settles. So is the **IIHF Disciplinary Code**, which every one of IIHF 41, 54 and 56
  ends by pointing to, and which bears directly on the corpus's instruction to *"treat 41.4 as"*
  the worst case.
- **The fouls nobody has read end to end.** The rule-first method finds omissions only in the
  rules it reads. The holding bullet had lost Hockey Canada's mandatory major; **hooking, tripping
  and slashing should be assumed to have lost something equivalent** until 55/8.2/623 and
  57/8.6/639 are read the same way. That is the next rule-first pass, and it is worth more than
  another claim-first round.
- **Whether the omissions cluster.** Nobody has asked whether these gaps concentrate in a section,
  a document, or the two non-NHL North American books — which is what would show whether MA103 is
  one bullet's oversight or a systematic under-reading of USA Hockey and Hockey Canada.
- **What the yellow highlighting said.** `eiha_inhouse.txt:50` — *"All changes for the 2025–26
  season are highlighted in yellow"* — and `pdftotext` discards colour, so which British
  provisions are new this season, and therefore most likely to be mis-taught, is unknowable from
  the extraction.
- **Practice versus text.** R&R 22.3 proves EIH will suspend enforcement of a rule formally in
  force. Any confirmed cell could be text-true and unenforced in British rinks.
- **Whether any of it reads correctly aloud.** Every fix above adds words to the longest bullets in
  the corpus, and no pass in this round listened to anything.

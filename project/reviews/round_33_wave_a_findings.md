# Round 33 — the three verification passes nobody had run, and the writing pass they forced

**Status: Wave A was findings-only; §4 below records the writing pass and the four reviewer passes on it.** HEAD is `5a44a6b`.
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

## 4 · The writing pass, and the four reviewer passes on it

Wave A's five criticals were applied in one pass over `rules_primer.md`, per the plan's rule that
everything touching that file must move together. **Then four reviewer passes ran on the fixes and
found 14 further criticals and roughly thirty majors, almost all in the new text.** Every one is
applied. The individual findings matter less than the pattern, so the pattern is first.

### 4.1 · The pattern: seven consecutive passes each found defects in the previous pass's fixes

| Shape | Instances this round | Worst example |
|---|---|---|
| **Correction appended beside what it corrects, not replacing it** | **7 across rounds 32–33** | *"Both books"* left standing twice in the interference bullet after *"in either book"* was replaced — one of them contradicted by the same file 400 lines later |
| **Correction reaches the file being edited and stops** | 6 | The *"all four books"* icing-clause error fixed in the primer and **left in `body_contact_and_battles.md`, edited in the same pass** — three different counts for one clause, live at once |
| **Totalising word attached to a true claim** | 6 | See CR51 |
| **Ceiling claim** (commit `0bb1c24`'s shape) | 6 | Four facts lines capping holding, interference and the late hit at a minor |
| **Author's own inference stated as the rule** | 3 | See MA111 |

**The lesson that actually generalises, and it took seven repetitions to state properly:** *replacing
the string you searched for is not replacing the claim.* A false proposition recurs more than once
per paragraph in this corpus and a string replacement matches the first instance. **The check is a
grep for the proposition, in every document, after every fix** — and it has caught every one of the
seven, which is the only reason they are not still live.

### 4.2 · The criticals in the new text

**CR51 · CRITICAL — the sentence written to fix a one-night ceiling re-created it for eight other
fouls.** The boarding bullet gained *"⚠️ **And boarding is the one foul here whose cost outlives the
game.**"* **USA Hockey Rule 411's aggressive-infractions list is seventeen rules** — nine of the
eleven fouls in that very section — and **NHL 23.6's Physical Infractions Category is eight**,
including charging, checking from behind, clipping, elbowing, kneeing and interference. So a reader
was told that a third slashing, charging or checking-from-behind major in a season costs nothing
beyond the game. **And the primer contradicted itself eight lines later**, in text from the same
pass, which says interference is in the same category. Fixed — and the correct version covers nine
fouls in barely more space than the false one covered one.

**CR52 · CRITICAL — the non-check reader was routed past the rules that bind them.**
`body_contact_and_battles.md`'s §5 blockquote told a 12U, girls'/women's, U13-and-below or
non-check adult reader that *"everything below is a penalty. Skip to Section 6."* But §5's final
subsection — *The four that cause the injuries* — holds checking from behind, head contact,
charging and boarding, **none of which either book scopes by division**, plus the entire suspension
machinery. **The reader CR48 exists to protect was being sent past the page that tells them so.**
The blockquote now names those four and says they bind every division.

**CR53 · CRITICAL — the ejection trigger reached four layers and missed three.** The IIHF 20.4 /
Table 6 correction went into `:332`, `:730`, `:778` and `:844`, and was missing from
`uk_rules.md`'s Key Takeaway 7 (which taught a British *adult* that first-major ejection is a
junior stricture), the primer's **Overview line `:13`** — the most-read sentence in the file, which
capped the stake at *"the rest of the match"* — and **Check-yourself question 2**, whose premise
asked the reader to produce the pre-correction answer. All three fixed.

**CR54 · CRITICAL — the corpus stated three different counts for one clause at once.** The
icing/offside boarding clause: the facts line at `body_contact_and_battles.md:895` said **one** book
(*"(NHL)"*), that file's body said **four**, and the primer said **three**. Three books carry it
verbatim (NHL 41.1, IIHF 41.1, Hockey Canada 7.2); USA Hockey reaches only the icing half at
624(d), without the offside limb and without naming boarding. **The four-book version was mine,
written this round, and I fixed it in one file and not the other.** All four layers now agree.

**CR55–CR58 · four ceiling claims in the facts layer**, each heard by a listener as a complete
sentence: `puck_handling.md` said holding is *"not capped"* in all four books (wrong in two
directions — the IIHF stops at a minor and USA Hockey's higher tiers are the facemask);
`offensive_zone_play.md` capped the late hit at a minor **in the block teaching the pinch**, which
is the most frequent way a pinch fails; `playing_without_the_puck.md`'s interference block had no
ceiling line at all; `time_and_space.md` yoked the NHL to USA Hockey's cap when NHL 56.4 allows a
major.

### 4.3 · Majors worth carrying forward

**MA110 · the rolling permission and the arm-and-stick measure were both split from their fences by
the narration.** `safety-reviewer` found chunk 041 ending on *"is not considered boarding"* with the
fence opening chunk 042, and chunk 052 ending mid-phrase on *"Use that measure wherever you play.
And the IIHF"*. **Both fences are now inside the same sentence as the thing they qualify**, which is
the only structure robust to re-chunking, and both were verified in the regenerated SSML: chunk 042
carries the rolling permission, its book fence *and* its classification gate; chunk 053 carries the
measure and its restraint.

**MA111 · two of my own inferences were stated as rules.** *"Use that measure wherever you play"*
exported Hockey Canada's arm-and-stick test to three books that do not write it — removed. And the
holding bullet argued the IIHF *"genuinely stops at a minor… because its own 21.1 is confined to
conduct not covered by the playing rules."* **IIHF 75.2 lists grabbing a face mask — plainly
covered — and routes it to Rule 21 anyway,** *"based on the degree of force."* The corpus reasons
both ways about that rule 400 lines apart. The bullet now states the uncertainty instead of
resolving it.

**MA112 · a sentence that inverted when spoken.** *"Hockey Canada scopes body checking to U13 and
below and to female hockey"* is true and reads, aloud, as *permits it there* — when 7.3 is the rule
that **bans** hitting. A U11 or female-division listener heard their own division named as a
checking division. Now: *"7.3 is the rule that bans hitting, and it applies only in…"*. **No
mechanical check could have found this, and reading did not; only listening did.**

**MA113 · operative conditions dropped from inside quotation marks, four more.** USA Hockey 603's
punishment-or-intimidation limb is not free-standing — the book continues *"that causes the
opponent to go unnecessarily and excessively into the boards"*. 640(b)'s minor is available
*"except Adult Male Classifications"*, and this corpus's audience is adult recreational players.
625(a)(1) reads *"in possession or control of the puck"*. Hockey Canada 8.3 hedges *"is best
described as"* where the primer wrote *"is"*. All restored.

**MA114 · Rule 7.3's third scope limb** — *"any other divisions approved by a Member of Hockey
Canada"* — was dropped in two facts lines, pointing a male player above U13 exactly the wrong way.
`body_contact_and_battles.md` already had it right in four places, one of which spells out *"so
being above U13 does not settle it."*

**And one narrowing that improved on its own brief.** Wave A reported that Rule 622 Holding is on
USA Hockey's 411 list. The list reads *"Rule 622 Holding an Opponent **(Grabbing Facemask)**"* — so
it is the facemask limb, not ordinary holding. `rules-verifier` confirmed the narrowing and
confirmed Rule 603's entry is unqualified. **A reviewer finding needed the same grep an author's
claim does, which is DF25b's lesson applied.**

#### 4.3b · Coverage statement — D1–D15, every dimension checked or declared

| | Dimension | Status |
|---|---|---|
| D1 | Rules claims vs primary text | **Checked** — `rules-verifier` on the writing pass, plus three Wave A passes; the gate re-derived the 411 and 23.6 lists independently |
| D2 | Cross-book divergence | **Checked** — and it was the round's main product: four books now stated where two were |
| D3 | Stated exceptions are real | **Checked** — MA113 restored four dropped conditions |
| D4 | Citations refetched | **Checked for the first time in the project's history** — 39 of 629, selected by consequence. **590 remain unverified: DF47 stays open.** |
| D5 | Provenance | **Checked** — the IIHF edition question settled (the cited URL serves v1.0, the corpus verifies against v1.1, no rule wording differs); 18 URLs found missing from the baseline; 24 cookie walls recorded as clean 200s |
| D6 | Cardinal rule — coaching choice as law | **Checked, and it failed twice** — *"Use that measure wherever you play"* and the rolling gloss's *"because"* clause. Both fixed |
| D7 | Numeric ownership | **Not applicable, declared** — this diff changes no owned number; its quantities are rule numbers, tiers and book counts |
| D8 | Summary layer keeps its owner's qualifications | **Checked, and it failed five times** — CR53's three layers, and the *"holding a stick"* qualifier dropped from `:355`'s correct version |
| D9 | Propagation across layers | **Checked, and it failed seven times.** See §4.1. Four gaps remain declared at DF55 |
| D10 | The ` ```facts ` layer | **Checked** — `facts-reviewer` read all 773 blocks and inventoried all 4,582 facts. Four ceiling claims fixed; DF53 and DF54 open |
| D11 | Reader safety | **Checked** — `safety-reviewer`, which produced CR52 and MA112, the two findings no other method reached |
| D12 | Read-aloud integrity | **Checked, and it produced the round's most valuable findings** — 106 chunks regenerated, both split fences repaired in-sentence and verified in the SSML. **But nobody has heard audio, and three of the four longest lines in the corpus were written this round.** |
| D13 | Folklore and house style | **Checked** — `content-reviewer`; CR51 and CR54 are its findings |
| D14 | Markdown and rendering integrity | **Checked, and it failed** — see §5. The certification that once stood in this row (*"zero literal asterisks across all 37 documents"*) was **false**: the check counted `**` bold pairs and never single `*` italics, and one was rendering on the page and reaching the speech text. Both parities are now checked and all seven files pass; **two literal asterisks remain corpus-wide**, pre-existing in `risk_management.md` and `passing_and_receiving.md`. ⚠️ Per-line checks give false positives on bold spans wrapping across lines; that trap was hit three times this session |
| D15 | The rendered site | **Checked.** All seven changed pages rendered at 375px over the DevTools Protocol from a fresh build (exit 0, 42 pages, 6,967 internal links): **zero horizontal overflow, silent console and a single `<h1>` on every one**. ⚠️ But `rules_primer.md`'s largest list item measures **7,545 characters of rendered text, up from 7,276 before this round** — DF44's case getting measurably worse in the layer a reader meets. Not re-rendered in light theme or at desktop width. |

**One dimension is open and declared: D4** — 590 of 629 citations unread (DF47). D15 is closed for this diff at phone width in dark theme; light theme and desktop were not re-run.

## 4.4 · DF44: the trade, honestly

| | HEAD | now |
|---|---|---|
| `rules_primer.md` | 232,801 | **244,457** characters (+11,656) |
| over-2,800-character lines | 16 | **18** |
| longest line | 4,518 | **4,907** |

*(Characters, measured against `git show HEAD:`. The file is 234,412 → 246,175 **bytes**. Earlier drafts of this
table said +9,089/4,658 and +10,156; three `commit-gate` runs measured +9,181/4,616, +10,156 and +10,732 against the staged blob at other moments —
**six figures for one quantity, every one true when taken.** **All three were true when taken and all three went stale within the hour** — which
is this project's signature defect, appearing for the fourth time in a table whose subject is
measurement. The figures above are the last ones taken and they will go stale too; re-measure
before quoting them.)*

**DF44 asked for reduction and this round moved the file nine kilobytes the other way.** The
additions were safety criticals that could not be declined, and the only reduction found without
removing a qualification was **426 characters** — stating Rule 7.3's scope in full once and
pointing at it twice, instead of writing it out three times. *Point, do not copy* is the right
principle and it recovered a fifth of what one bullet grew by.

⚠️ **`content-reviewer` identified the reduction that would actually pay, and it is not more
prose-trimming.** §10 is the four-book comparison table — that is its job — and it has **no
boarding row, no interference row, no holding row and no Hockey Canada column at all.** The
penalty ladders now bloating the §4 bullets belong there. Moving them recovers an estimated 2,500
characters, improves both layers, and gives the two new cross-references somewhere to point.
**That is DF44's real content and it is now the highest-value structural item in the project.**
A second proposal worth as much: promote boarding, interference and holding from `-` bullets to
`###` subsections, because a 4,907-character bullet is roughly five minutes of unbroken speech
with no heading, against a style guide that says *"avoid walls of prose."*

### 4.5 · Open, declared, and not fixed

- **DF52 · closed.** `body_contact_and_battles.md` cited Rule 54 nowhere and never mentioned a
  facemask, though it teaches scrums, board battles and corner battles — its holding row's only
  citation was NHL 56.1, the *interference* rule. The row now names the holding rule in all four
  books, states that a minor is not its ceiling (Hockey Canada 8.1(b)), and carries the facemask as
  a separate offence inside the same rule with USA Hockey 622(b)/(c) and Hockey Canada 7.1.
- **DF53** — **no facts line in the corpus states a boarding tier**, and the owning block is at
  `HARD_MAX` 11/11, so it needs a section split rather than an insertion.
- **DF54 · partly closed.** `time_and_space.md:221`'s facts line contradicted its own body at
  `:232`, which still said *"Skating across to spring a teammate is the two-minute minor."* **The
  fact was right and the body was carrying the old ceiling, so the body changed** — the style
  guide's rule that a disagreeing fact is wrong by definition would have produced the wrong fix
  here. **Now fully closed.** The other three untraceable lines
  (`offensive_zone_play.md:697`, `playing_without_the_puck.md:433`, `puck_handling.md:374`) were fixed
  the same way — **the supporting sentence added to each section body, not the facts line cut**, because
  in each case the fact was right and the body was behind it. The `offensive_zone_play` fix also closes
  `content-reviewer`'s M6: that facts line stated the late-hit prohibition bare, in the section that
  teaches *"arrive on contact"*, and the body now carries the immediacy carve-out and Hockey Canada's
  arm-and-stick outer edge — the condition that makes the taught play legal.
- **DF55** — the division-scope point reaches the body of three bullets and **no summary layer
  anywhere**: no Common Mistakes bullet, no Key Takeaway, and no counterweight on §10's
  Body-checking row at `:733`.
- **DF59** — three pre-existing markdown defects outside this diff, found by the sweep the round's own lesson
  prompted: an unclosed italic in a Sources line in `risk_management.md` and `passing_and_receiving.md`, and a
  **nested `<em><em>`** at `conditioning_and_recovery.md:510`, where a journal title sits inside an italic note.
  All three render a literal marker or a dead emphasis. None is in a file this round touched, so they are recorded
  rather than swept — and their existence is the reason **D14's certification must be corpus-wide and
  renderer-based**, not parity-based, in future rounds.
- **DF57** — the boarding bullet names NHL 23.6's *Physical Infractions Category*, and the stick-fouls section has
  **no counterpart for 23.5's *Stick Infractions Category*** (butt-ending, cross-checking, hooking, slashing,
  spearing), which carries the same two-game-misconducts-in-41-games suspension. Honestly scoped as written —
  nothing claims 23.6 is the only category — but the omission means the stick fouls understate their season cost
  the way boarding did before this round.
- **DF56** — §10 has no Hockey Canada column, against text that now depends heavily on Hockey
  Canada. The largest open design question in the corpus.

## 5 · The gate could not be run, and what was done instead

**Nine subagent dispatches died on server-side `529 Overloaded` in this round — eight of them `commit-gate`.**
**Three gate runs later completed and all three blocked**, on 5, 6 and 3 findings respectively; the account below
of what the author verified in the interim is preserved because it is what the first completed run was handed. Attempts were spaced, briefs were shortened, and a deliberately narrow
`rules-verifier` brief covering only the five newest edits failed the same way, which establishes
that the cause was capacity and not brief size. **At the time this section was written, no gate verdict existed.** Three have since completed.

**What the author could certify, and did.** Every mechanically checkable condition: C1 links 0 · C2
26 documents / 773 blocks / 4,582 facts conforming · C9 secrets 0, no sensitive path in the diff,
`.gitignore` untouched · **C5 added and removed external-URL sets both empty**, so no citation was
added or changed · C10 build exit 0, 42 pages, 6,967 internal links, and all seven changed pages
rendered at 375px over the DevTools Protocol with zero horizontal overflow, silent console and a
single `<h1>` · whole-document `**` parity OK on all seven.

⚠️ **One certification in an earlier draft of this section was false, and the gate refuted it.** It read *"zero
literal asterisks in a whole-document micromark render across all 37 documents"*. **The check counted `**` bold
pairs and never counted single `*` italics** — and there was a stranded one rendering on the page at
`offensive_zone_play.md:740`, which also survived into the speech text. The cause was a match string that stopped
one character short of an italic close, orphaning the marker after the inserted text. Both parities are now
checked; the file renders zero literal asterisks, and the two that remain corpus-wide are pre-existing in files
this diff does not touch (`risk_management.md`, `passing_and_receiving.md`). **Under non-negotiable 5 the false
sentence is recorded rather than quietly replaced, because `review_history.md` is reconstructed from these files.**
⚠️ **And the correction itself then failed to propagate.** A second `commit-gate` run found the **D14 row of the
coverage table still carrying the false certification** — the fix reached this section and stopped. That is this
round's leading failure shape, occurring inside the document that names it, in the paragraph that names it. It is
the ninth instance.

**And the C7 proposition sweep, which is the most meaningful self-produced signal available.** All
ten corrected propositions were grepped corpus-wide — the false exclusivity, both wrong
icing-clause counts, the stale interference count, the inverting scope sentence, the exported
measure, the holding totaliser, the understated IIHF trigger and two ceiling claims. **All clear.**
The seven surviving *"Both books"* hits are legitimate two-book contexts (substitution, clipping,
the stride count), none in the bullet that was corrected. That sweep is the check that caught all
seven append-instead-of-replace failures this round, so its being clean is worth more than any
other author-run check.

**The five newest edits were then verified against the primary text by the author.** All hold: NHL
56.4's discretionary major (`nhl_rules.txt:6354`); Hockey Canada 8.3(b)'s **mandatory** limb, which
is the one the text attaches (`hc.txt:6844`); USA Hockey Rule 625 having no tier above the minor
(three clauses only, lines 4448–4519); IIHF 56.5's major plus game misconduct with nobody hurt
(`iihf_rules.txt:4783`); Hockey Canada 8.3's arm-and-stick clause being Hockey Canada's alone
(`hc.txt:6807`, absent from the other three); Hockey Canada 8.1(b) mandatory on injury against NHL
54 and IIHF 54 stopping at four clauses; and Hockey Canada filing the facemask under **Rule 7.1
*Attempt to Injure or Deliberate Injury*** (`:5883`, `:5901`, `:5918`).

⚠️ **Two of those checks produced confident false results first, and both came from the tooling
rather than the corpus.** A `sed` range of `/Rule 625/,/Rule 626/` ran past 626 into the kicking
rule and made USA Hockey 625 appear to carry a major and a match penalty — which would have meant a
false claim standing in two documents. And **`grep -c "arm and stick"` returned 0 in all four
books, including the one that contains the phrase verbatim**; Python `re` found it immediately.
**That is the third and fourth time in this session that a grep has returned a confident wrong
answer**, after `grep -ci 'fend'` matching *defend*/*offend* and a word-boundary guard returning a
false zero across all four books. The rule now has a corollary:

> **Bound the range, and print the matches.** A `sed` address range silently overruns a rule
> boundary; `grep -c` on this machine is `ugrep` and fails on the rulebooks' curly quotes. When a
> claim turns on presence or absence, use Python `re` over an explicit line span and **print every
> match with its line number**. Four of this session's false results came from the tool, not the text.

**What none of this closes: C4 and C6.** Author verification answers *"does the book say X at line
Y"* and says nothing about *"was X the right sentence to choose"* — which is the whole purpose of a
non-author pass, and the reason this project's own instruction is *"do not review your own
writing."* **Four of the five newest edits also changed a section body to match a facts line**,
against the style guide's rule that a fact disagreeing with its body is wrong by definition. That
judgement was made five times by the author of both sides. It reads correct and it is unreviewed.

**The diff is staged and uncommitted.** Four gate runs have now completed; §6 records them.

## 6 · The four gate runs, and the largest claim in the diff

**Four `commit-gate` runs completed after ten died on 529s. All four blocked — on 5, 6, 3 and 3
findings. Every one of the seventeen was in text the author had written, and in most cases in a
*fix* rather than in an original.** The recurring shapes are tabulated at §4.1; this section records
the substance, because the previous draft of this record carried the round's largest new rules
claim with no entry at all — which the fourth run correctly called a C8 failure.

### 6.1 · The NHL book disagrees with itself about when a major ejects you

This is the round's biggest single claim and it now stands at five sites. The sequence that produced
it is worth keeping, because each step was a defensible reading of the previous one and three of the
four were wrong:

1. The corpus said the IIHF ejects on a second major where **the NHL waits for a third**. That was
   the pre-existing framing.
2. **CR46** found IIHF 20.4's second sentence — an automatic game misconduct *"whenever a Player is
   assessed a major penalty for any of the infractions listed in the Reference Tables"* — and Table
   6's twenty entries. Propagated to four layers. **The NHL side was left standing.**
3. The **first gate run** found NHL 20.4 carries the *same* second sentence, plus 43.5 and 59.5
   spelling it out. So the differentiator was false. Fixed at six sites.
4. The **second gate run** found that fix had imported the IIHF's table semantics onto the NHL's:
   Table 5 is headed *Summary of Major Penalties* with a *Major only* column, and the NHL writes **no
   major at all** for high-sticking, slew-footing or an illegal check to the head. A false
   differentiator had become a false equivalence.
5. The **third gate run** found the repartition understated the NHL's unconditional set by five and
   omitted interference. **The verified partition, of Table 5's thirteen non-fighting rows:**

| | Rules | Trigger |
|---|---|---|
| Unconditional (7) | 43.5 checking from behind · 47.5 head-butting · 50.5 kneeing · 58.5 butt-ending · 59.5 cross-checking · 61.5 slashing · 62.5 spearing | any major |
| Injury-conditional (3) | 41.5 boarding · 42.5 charging · 45.5 elbowing | *"an injury to the face or head"* |
| Injury-conditional (3) | 44.5 clipping · 55.4 hooking · 56.5 interference | any injury |

   Fighting's five rows carry it unconditionally as well. **The IIHF's Table 6 is unconditional
   throughout**, which is the real divergence and is now what the corpus says.
6. The **fourth gate run** found the §4 owner — the one site of five that disagreed — had the
   IIHF's eight-foul list dangling after a clause about *the NHL's*, so it read as the NHL's, and
   that the same edit had **deleted the British scope** HEAD carried (*"under the book British
   hockey runs on"*). Both fixed by rewriting the passage whole.

**The resolution the gate proposed, and the reason it is right: name the conflict.** NHL 20.4's
second sentence attaches no condition; six of the individual rules do. The corpus already handles
tripping this way — *"an unresolved conflict inside both books, which no interpretation on disk
settles"* — and doing the same here is **shorter than either wrong version** and tells the reader
what to do: assume the harsher reading.

⚠️ **One layer of this could not be resolved from the text on disk.** Table 5's footnote —
*"the individual rules state that the automatic game misconduct only applies if major is assessed
due to an injury"* — is marked with `✓*` against **two cells**, not the whole table, and the
footnote's own characterisation is **false for seven of the thirteen**. `pdftotext` scrambled the
tick grid and **there is no NHL PDF in `sources/`**, so which two cells it governs is unknowable
here. The corpus therefore describes the conflict as between 20.4 and the individual rules — which
is verifiable — and does not rely on the footnote. **DF58: obtain the NHL PDF and resolve the
footnote's scope.**

#### 6.1b · The fifth run, and the count that excluded the reader it was written for

**The fifth gate run found the false equivalence alive in a sixth site** — Common Mistakes at `:778`, in the
bolded lead that carries when spoken, still saying *"both books eject you on the first major for a listed
infraction"* and *"the NHL's Table 5 does the same job"*: the exact sentence `:332` had been rewritten to
replace. Five sites agreed and the sixth contradicted them. **Twelfth and thirteenth instances of the shape.**

**And it found the Overview's new count excluded the British reader's own book.** *"In three books, games beyond
it"* is right about the three that impose it *automatically* — NHL 23.6, USA Hockey 411 and 404(b), Hockey Canada
4.8(c) — but **IIHF 28.1 writes supplementary discipline too**: *"The Proper Authorities may assess additional
disciplinary measures for any offense committed during the course of a game."* The primer names that route twice
itself, at `:353` and `:354`, calling IIHF 62.4 and 58.4 *"Disciplinary Measures"* — which is Rule 28. So the
file's most-read sentence told a British reader their exposure stopped at the final whistle while the same file
refuted it 340 lines later. It now says **all four**, with three automatic and the IIHF's at the Proper
Authorities' discretion.

**DF44's category changed on this run.** The gate's ruling: *no more prose into §4 until the §10 restructure
lands.* Not a blocker — nothing in the growth makes a claim wrong — but at +11,656 characters, 18 lines over
2,800 and a longest line of 4,907, it has stopped being style debt. **It is now the highest-value item in the
project, and this round is the evidence for that.**

## 6.2 · What the four runs cost, and the one lesson that generalises

Twenty findings across five runs, on a diff of 8 files. The single most repeated defect, at
**twelve instances**, was neither a rules error nor a propagation miss:

> **Patching a sentence with a string replacement breaks it. Rewriting the passage does not.**
> Eleven times this round a targeted replacement produced a garbled sentence, a stranded emphasis
> marker, a duplicated clause or a dangling list — including once inside the repair of a defect a
> gate had just flagged, and once in a match string that stopped one character short of an italic
> close and stranded the marker where it rendered on the page. **When a passage needs to change,
> replace the passage.**

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


---

## 7 · Wave B — the safety pass on the twenty gate fixes

Five gate runs closed twenty findings but could not close **C6**: `safety-reviewer` had never seen the
fixes, and every one was penalty, contact or ejection material. C6 has no out-of-scope declaration route.
This is what the pass found — **three criticals, four majors, four minors**, all applied.

### 7.1 · The two that were hazards, not defects

**A false ceiling on the late hit, at four sites.** The corpus said *"USA Hockey is the exception the
other way — Rule 625 writes no tier above the minor at all"*, inside a bullet that expressly teaches the
late hit. It is true of Rule 625 and false of the reader's exposure. **Rule 640(b)** names a player who
has released a shot or pass as *"vulnerable or defenseless and are not eligible to be body checked"*;
**640(g)** makes recklessly endangering them a major plus a game misconduct; **640(h)** reaches a match
penalty; **602(a)** reaches reckless endangerment with no rule-scope limitation at all — unlike IIHF 21.1,
which is confined to *"an action that is not covered by the playing rules"*. So a USA Hockey reader was
told their worst case for hitting a player who had just released the puck was two minutes, when it is a
match penalty plus progressive suspension under 411 and an automatic next game under 404(b). **This is
commit `0bb1c24`'s exact shape, recurring inside the sentence written to remove ceilings from the other
three books.** Corrected at all four sites; the pick-specific three now name 602(a) as sitting outside 625.

**A redirect whose destination did not carry the proposition.** §5 of `body_contact_and_battles.md` sends
a non-check reader to *The four that cause the injuries* on the strength of those four binding every
division. The destination never said so — and its facts block **opened** on *"Not legal where checking is
barred"*, so the 12U, girls'/women's or non-check-adult reader arrived and was told first that this is not
theirs. A search of the whole file for the proposition returned **one hit: the blockquote** — the layer
this corpus's own history says does not reach the reader, and the reason CR52 exists. Fixed in the
destination body and by rewriting the facts block's opening line, which was at `HARD_MAX` so no line could
be added.

### 7.2 · What the primary text gave up that no previous round had asked for

- **Hockey Canada 7.7 is not the softer head-contact rule.** The corpus said *"7.7 has no clause of that
  shape"* — true of 7.6(b)'s injury-mandatory major, and a narrowing delivered to the adult reader, because
  7.7 is the Junior/Senior rule and this corpus's audience is adult. **7.7(a)** makes the floor a minor
  *plus a misconduct* for *"a moderate degree of violence"*, where 7.6(a) starts at a bare minor.
  **7.7(b)** makes a major plus game misconduct mandatory for *"any Head Contact infraction with a high
  degree of violence"* **whether or not anyone is injured**, and for a cross-check above the shoulders
  *"whether or not injury results"*. **7.7(c)** reaches a **match penalty** where the player hit *"is
  unable to protect or defend themselves"* — a tier the corpus never mentioned. Three respects in which
  7.7 is harsher, against the one in which it is softer.
- **The checker's amnesty has an internal limit the corpus never stated.** Three sites correctly confine
  Interpretation 3 to 7.7(a) to junior and senior. None said that the interpretation itself *"does not
  apply to a player who is in a vulnerable position as the result of a legitimate hockey play"* — the
  book's own example is **shooting**. Read aloud, an adult Hockey Canada listener heard the amnesty as
  licence. The limit is now attached at both narrated sites.
- **Rule 7.6 carries no division clause at all.** It opens *"There is no type of legal contact to the
  head, face, or neck"* and binds *"at all times"*; 7.7 exists only so Junior and Senior are covered
  separately. The corpus's four-fouls claim is therefore stronger than it was stated.

### 7.3 · A false clause I wrote while closing the fifth gate run

`:778`'s bullet ended *"...of its thirteen non-fighting rows six need an injury. **For those, one major is
enough in either book.**"* **Every available antecedent for "those" makes it false, and the two nearest make
it false in the lenient direction** — the six injury rows are precisely the ones where one major is *not*
enough, and the three fouls with no major at all cannot satisfy it either. The bullet existed to kill the
"three majors" myth and closed by handing the reader a proposition wrong on every parse. It was also the
only one of four narrated sites carrying **no instruction**. Replaced, not patched (§6.2's lesson).

### 7.4 · Method notes worth keeping

- **A stale-artifact trap that produced a false critical.** `scripts/speech/` held **31 unprefixed
  directories from 28 July** beside the 37 prefixed ones from this session. The reviewer read a stale one
  first, raised a critical from it, and caught itself. The stale directories have been moved out of the
  tree. **Any pass that reads generated output must check its timestamp before quoting it.**
- **My own grep produced a false ABSENT for a rule quote that was present**, because the wording spans a
  line break (`considered` / `to be vulnerable`). Sixth confident-false self-check this round. Whitespace
  must be normalised before any rulebook string search, and matches printed rather than counted.
- **§10's table reaches no listener at all.** `TABLE_MAX_COLUMNS = 3` means the primer's §10 emits as a
  spoken pointer, so the site now carrying the most precisely verified statement of the NHL/IIHF ejection
  divergence — plus its instruction — is **invisible in the podcast layer**, and every cross-reference of
  the form *"§10 has the row"* is a dead pointer when spoken. This is new evidence for DF56 and it changes
  its priority: the restructure is not only a length fix.

### 7.5 · Declared out of scope, with reasons

- **DF60 (new).** The suspension machinery still reaches **no ` ```facts ` block anywhere in the corpus** —
  a search of every block for `23.6|411|404(b)|4.8(c)|28.1|Table 5|Table 6` returns zero lines. Both Key
  Takeaways now carry it; the facts layer cannot, because the two blocks that should hold it are at
  `HARD_MAX`. **Blocked behind DF53's section split.**
- **DF61 (new).** *"Does the corpus make the same 'Rule X writes no tier above the minor' move elsewhere?"*
  One grep, and the reviewer rates it above another claim-first pass. Not run.
- The reviewer read 41, 42, 43, 44, 48, 52, 54, 56, 60, 20, 21, 23, 411, 404, 602–608, 620–625, 640, 7.1–7.8,
  8.1, 8.3, 8.7, 8.8, 9.5 and 4.8 end to end. **It did not read 55, 57, 59, 61, 62, 623, 634, 639, 8.2, 8.6
  or 9.1–9.4** — and the record already predicts hooking, tripping and slashing have lost what holding had.
- **Nobody has heard audio.** 1,560 chunks of SSML *text* were read. Prosody and whether a listener parses a
  five-clause chain at speech rate are untested.


---

## 8 · Wave B gate run (sixth) — BLOCK, and why two of wave B's own fixes were wrong

The sixth `commit-gate` satisfied **C6's form** for the first time — `safety-reviewer` had genuinely run, was
not the author, and its eleven findings were applied and recorded. It then blocked on **C4**: two of
`safety-reviewer`'s findings **do not survive the primary text**, and I had written both in.

### 8.1 · The reviewer was wrong and I did not check it

**Hockey Canada 7.7 is not "harsher in three respects".** I wrote that on the strength of the safety report.
Verified against `sources/hc.txt`:

- **7.6(c) reaches a match penalty too**, on the *same* trigger as 7.7(c) — *"in such a way that the player is
  unable to protect or defend themselves"* (`:6276` and `:6333`). Not a difference.
- **The cross-check limb is word-for-word identical** in 7.6(b) (`:6271`) and 7.7(b) (`:6321`):
  *"Any player who strikes an opponent above the normal height of their shoulders with a cross-check will be
  penalized with a Major penalty and a Game Misconduct penalty, whether or not injury results."* Not a
  difference.
- Only 7.7(a)'s minor-plus-misconduct floor against 7.6(a)'s bare minor holds.

⚠️ **And my edit deleted a correct disclosure to make room for the false one.** HEAD carried
*"(Its cross-check clause is word-for-word in 7.7(b) too, so that one distinguishes nothing.)"* — the exact
fact that refutes what I replaced it with. **That is non-negotiable 3 and 4 in one edit**, and the direction
of the error understated exposure for the **minor and female** audience while contradicting three untouched
sites that had it right.

**The corrected passage says what the books actually do:** the two rules are **mandatory on different
triggers** — 7.6(b) discretionary on violence and mandatory on injury, 7.7(b) mandatory on violence and
injured or not — and **neither is simply harsher**. 7.6(d) bars a misconduct where 7.7(d) mandates one. The
identical limbs are now named as identical.

**Lesson, and it is the round's most important:** *a reviewer's finding is a hypothesis, not a fact.* Five
gate runs taught me to grep before writing my own claims; I did not grep before writing someone else's. Every
finding in a reviewer's report must be verified against the primary text **before** it is applied, exactly as
if I had thought of it myself.

### 8.2 · A quotation credited to the wrong document, eliding the decisive word

I wrote *"the 'overt hip, shoulder or forearm action' 604 uses to define a body check"*. **Rule 604's own
definition is *"overt hip, shoulder, forearm or torso action"*** (`usah.txt`); the words I quoted are the
**Declaration of Player Safety, Fair Play & Respect**. Two errors in one clause: wrong owner (D5 provenance),
and the elided limb — ***torso*** — is precisely the one that decides whether rolling a man along the wall is
a body check. **The corpus's original wording was better grounded than my "fix" to it**, because it said
*torso*. Corrected, with 604(c)'s Note now quoted exactly including *"(Angling – see Glossary)"* and
*"[l]egal competitive contact shall not be penalized under this rule."*

### 8.3 · Append-instead-of-replace, the fourteenth instance — after recording the lesson

My amnesty-limit sentence was **spliced between a subject and its clause** in
`body_contact_and_battles.md:1102`, rendering as a bolded sentence wedged mid-clause with a full stop followed
by a lowercase *"so"*. **And the proposition was already stated in both files** — in `rules_primer.md` two
sentences earlier and *more fully*, with *"(e.g. shooting, making or receiving a pass, etc.)"*. Both
insertions reverted. §6.2's lesson was written in this document and then broken in the same session: **grep
for the proposition before adding it, not just before editing it.**

### 8.4 · Overstatements corrected

- **The suspension claim was wrong at three summary sites**, including one from wave A. *"Automatically"* is
  true of **one** rule, not four: USA Hockey 404(b) on a **first** game misconduct; NHL 23.6 needs a
  **second** in the Physical Infractions Category before 41 consecutive games without one; USA Hockey 411 a
  **third** major in a season; Hockey Canada 4.8(c) one in the **last ten minutes, overtime or after the
  game**; IIHF 28.1 discretionary. All three sites now name the trigger. (Checked also that 23.6 is
  *Physical* Infractions and not 23.5, *Stick* Infractions — a genuinely easy confusion, three lines apart.)
- **`offensive_zone_play.md` stated as a penalty what three books permit.** NHL 56.1: a player *"may be
  checked legally, provided the check is rendered immediately following his loss of possession."* It is the
  **delay** that fouls, not the release. The facts line and the pinch blockquote both said otherwise; both
  corrected, and the strict habit is now given as a habit rather than as the law.
- **The 640(g)/(h) chain was settled in one bullet and hedged in another, in the same file.** `:371` now
  carries the same hedge as *What actually gets called* and leans on **602(a)**, which has no rule-scope limit.

### 8.5 · D1–D15 coverage for wave B — the statement §4.3b did not cover

§4.3b's table is **wave A's** and was written before this diff. For the eleven wave-B fixes and the seven
corrections above:

| | Wave B status |
|---|---|
| **D1** rules claims | ✅ `rules-verifier` returned — see §9. It confirmed the 7.6/7.7 rewrite on all five claims and found 11 further defects, all applied. A seventh gate then re-verified 13 of the new claims independently. |
| **D2** summary layer | ❌ **this row was false when written.** The suspension claim was corrected at two of three sites, and the Table 7 fix reached §4 and stopped — one `Table 7` hit in the whole corpus. Both propagated in §12. Still no ` ```facts ` line for the suspension machinery — DF60, blocked behind DF53 |
| **D5** provenance | ⚠️ one misattribution found by the gate and fixed (§8.2). **Not independently re-swept** — `source-verifier` has still never run |
| **D6** inference as rule | ✅ the 604 "because" clause now labelled and given its counter-text |
| **D9** safety | ✅ `safety-reviewer` ran; ⚠️ **it produced two false findings**, so its report is not self-certifying |
| **D10** facts blocks | ✅ `check_facts.py` green, 773 blocks / 4,583 facts; one line split, two rewritten |
| **D12** narration | ✅ 106→ chunks regenerated; the two chunk seams re-read by hand; ⚠️ **§10's table reaches no listener** |
| **D14** rendering | ✅ returned — see §10. The literal asterisks were a **plugin** bug, now fixed; the nested-bold defect was real at three sites, all fixed; the unmatched `</strong>` was a **false positive** |
| **D15** rendered pages | ✅ **mechanical half** covered in §11 by CDP — 28 page/viewport/theme renders, zero body overflow, zero console entries. ⚠️ **The readability half is NOT covered and is not delegable to a checker:** §4's longest bullet is now 6,068 source characters and nobody has judged whether it reads |
| **D3, D4, D7, D8, D11, D13** | **declared out of scope** for wave B — no citation added or removed (the gate verified the external-URL sets are identical), no new document, no structural change beyond the passages named here |

**Silence is the failure mode, so this table is the point of §8.**

### 8.6 · DF44 — measured once, here, and nowhere else in this record

⚠️ **This subsection previously carried three different values for each quantity**, because each
re-measurement was *appended* beside the last instead of replacing it — the sixteenth instance of
append-instead-of-replace this round, in the subsection whose subject is measurement. Rewritten whole.

Measured against `git show HEAD:`, with a section extractor whose boundaries were checked:

| | HEAD | Now |
|---|---|---|
| Whole file | 232,801 | **251,018** (+18,217, +7.8%) |
| **§4 Penalties** | **78,474** | **91,298 (+12,824, +16.3%)** |
| Longest line | 4,518 | **6,163** (+36%) |
| Lines over 2,800 | 16 | **19** |

The eighth gate measured the staged blob independently and got **+12,824, +16.3%, 6,163 and 19 — identical**;
its §4 endpoints differ from mine by 16 characters, which is only where each of us puts the section boundary.

**The judgement, which I accept:** every increment traces to a defect a reviewer verified, and non-negotiable
3 forbids buying space back by deleting sourced claims — but §4 has taken **+16.3%** and the worst bullet
**+36%**, and *"the override was justified in kind and is no longer justified in silence."* **DF44 now needs
a stated plan — splitting §4 — not another acceptance.**

---

## 9 · `rules-verifier` on wave B — the rewrite holds, and eleven further defects

### 9.1 · A process failure of mine, found by the verifier and not by any checker

**The gate fixes to `rules_primer.md` were never re-staged.** I staged eight files, ran the gate, applied its
fixes, and did not stage again. The verifier audited the working tree, compared it to the index, and found the
index still held `"overt hip, shoulder or forearm action"` — **the exact string the gate rejected** — while the
sibling document's fix *was* staged. A commit at that moment would have landed the defect in the primer and the
correction beside it.

**No mechanical check can see this.** `git-guard.sh` gates staged content against the checkers, and the
checkers passed on the *worktree*. The gate itself reads `--cached`, so it audited text I had already fixed and
text I had not, without being able to tell that the two differed from what I described. **Re-stage after every
fix, and diff index against worktree before dispatching any gate.** Staged now and verified pattern by pattern.

### 9.2 · The 7.6/7.7 rewrite is confirmed on all five claims

Every claim in the replacement passage verified against `sources/hc.txt` (Hockey Canada **2026-2028**, 16th
edition, confirmed from its own title page): 7.6(b) discretionary-on-violence and mandatory-on-injury; 7.7(b)
mandatory-on-violence with no clause of 7.6(b)'s shape; 7.7(a) with 7.7(d) against 7.6(a) and 7.6(d); the
preamble leniency; and the cross-check limb **byte-identical** in both. **The earlier "harsher in three
respects" claim was indeed false and the disclosure my edit deleted was right.**

**And 7.6(d) resolves cleanly**, which I had flagged as unread: Hockey Canada separates a **Misconduct**
(Rule 4.7, ten minutes) from a **Game Misconduct** (Rule 4.8, removed from the game). 7.6(d) bars the
ten-minute Misconduct; **7.6(e) still makes a Game Misconduct mandatory with any major.** No contradiction —
and it is house style, not a leniency written for head contact: the identical limb appears at 7.2(d), 8.3(d)
and 9.5(d).

### 9.3 · Two over-claims of the same class as the one they replaced

- ⚠️ **"So is the match tier" over-claims identity.** The quoted limb is shared verbatim, but the *second*
  limb differs and **7.6(c) is the wider**: it reaches *"attempts to or deliberately injures"*, where 7.7(c)
  reads *"deliberately attempts to injure"* — so 7.6(c) catches a deliberate injury without an attempt.
  Narrow the claim to the **first limb**. This is exactly the failure shape of the sentence it replaced.
- ⚠️ **"The NHL's own book disagrees with itself" is an over-claim**, at three sites. NHL Table 5's footnote
  reconciles it in terms: *"The individual rules state that the automatic game misconduct only applies if
  major is assessed due to an injury. However, a major penalty cannot be assessed on its own."* A book
  signposting its own structure is not an unacknowledged self-contradiction. **Quote the footnote instead —
  it is stronger and shorter.** Its last clause is genuinely ambiguous, so quote it rather than interpret it.
  *"Assume the harsher reading"* stays.

### 9.4 · SAFETY — Rule 604's definition is scoped, and the corpus universalises it

`body_contact_and_battles.md:362` states flatly that *"an illegal body check is intentional contact using overt
hip, shoulder, forearm or torso action (USA Hockey Rule 604, Note 1)"*, and `:366` universalises it —
*"USA Hockey's definition is the most explicit in the sport, so use it as your checklist."*

**Rule 604 is titled *"Body Checking (Competitive Contact Categories)"* and Note 1 opens *"For the purpose of
this rule."*** 604 governs only the classifications where checking is **banned** (604(a): 12U and below, all
girls'/women's, all non-check adult). **In a checking league those same actions are the *legal* check** — which
the same facts block teaches four lines earlier as *"Technique: Trunk only — hips and shoulders."* **The block
contradicts itself, and the error inverts a permission into a prohibition.**

**The right source is already in the book and the document's own bullets come from it:** the Glossary entry
*"Body Checking"* — *"Body checking must be done only with the trunk of the body (hips and shoulders) and must
be above the opponent's knees and at or below the shoulders. The use of the hands, forearm, stick or elbow in
delivering a body check is unacceptable…"* **Re-attribute, do not delete** (non-negotiable 3).
`rules_primer.md` already scopes it correctly — *"only if you are in a classification where body checking is
legal at all"* — so the primer is the model.

### 9.5 · SAFETY — IIHF Table 7, and a first major can end a British player's game

⚠️ **`iihf_rules.txt:8831` — TABLE 7 · RULE 20: *"Summary of major penalties that result in a game misconduct
based on the Referee's judgement"*** — **Boarding 41.4, Charging 42.4, Elbowing 45.4, Interference 56.5,
Tripping 57.4.** All five source rules confirmed reading *"The Referee, at their discretion, may assess a major
penalty and a game misconduct penalty…"*

`rules_primer.md:332` concludes *"short of those twenty, your **second** major of the night ends your game."*
**That understates it: for five of the commonest body fouls in this corpus, a British player's *first* major
can end it.** The corpus teaches those five correctly one at a time (§4 cites 41.4 and 56.5); **only the
summary layer omits them** — the round-10 defect shape again, in the layer that was this round's whole subject.

**Also:** the IIHF has its **own Table 5** — `:8793` *"Summary of major penalties (without a game misconduct
possible)"*, one row, Fighting 46.6 — **nearly the opposite of NHL Table 5.** The corpus's shorthand *"the
NHL's Table 5, the IIHF's Table 6"* is not false, but a reader sent to "Table 5" in the IIHF book finds the
inverse. Name the book with the table every time.

### 9.6 · Quotation and completeness defects to fix

| Site | Defect |
|---|---|
| `rules_primer.md:778` | the 20.4 quote carries a **terminal period inside the quotation marks**, asserting a sentence that ends at *"Reference Tables"* — true of the IIHF, **false of the NHL**, which continues *"– Table 5 – Summary of Major Penalties (page 139)"*. `uk_rules.md:226` already does this correctly: quote the IIHF verbatim, paraphrase the NHL |
| both 640 sites | *"falling under Rule 640(b, c, d, e or f)"* is **640(g)'s wording alone**; 640(h) reaches the same limitation in different words (*"under sub-sections (b), (c), (d), (e) or (f) of this rule"*). Attribute to (g), paraphrase (h) |
| 604(c) quote | the book prints *"Angling **-** see Glossary"* with a hyphen, not an en dash; the quote stops at *"closes the gap"* **without an ellipsis**, dropping the operative purpose clause; and the sentence after it **is** the stricter reading I merely infer — *"However, deliberate physical contact with an opponent, with no effort to legally play the puck, shall be penalized."* Quote it |
| `:351` | *"a game ejection on a third head-contact penalty"* omits the timeframe — 4.8(b) scopes it to **the same game** |
| 7.7(b) | *"the narrow one"* undersells it: the glass/ice/boards limb requires a **head** injury but reaches **any** infraction where *"a player is fouled or hit illegally"*, not only head contact |
| 7.7 preamble | the book adds *"or another appropriate penalty"* — open-ended, which *"roughing or charging"* closes off. And **7.6's preamble forecloses the leniency**: *"Regardless of the circumstances… at all times"* and *"any foul that results in contact to the head must be penalized as Head Contact"* — the strongest evidence that 7.7 is not simply harsher, and it is not in the passage |
| `:13`, `:845` | NHL 23.6 is expressly *"In regular season League games"*, and **23.5 runs the same machinery for the Stick Infractions Category** (hooking 55, slashing 61, cross-checking 59, butt-ending 58, spearing 62). A reader who took a slashing game misconduct is under **23.5**. At `body_contact_and_battles.md:1168` the context is Rule 43, so 23.6 alone is right there |
| the three summary sites | HC 4.8(c) drops *"or after the conclusion of the game"*. And **4.8 Note 1** is nowhere in the corpus: *"A Game Ejection is not equal to a Game Misconduct penalty and a player receiving a Game Ejection penalty does not trigger any automatic suspension"* — the limit on the 7.6(a) third-penalty ejection |
| `:845` | *"a misconduct never leaves your team shorthanded (Rule 22.3)"* drops the proviso — NHL 22.3 *"unless he also receives a minor, major **or match** penalty"*. Since a misconduct usually arrives **with** a minor (7.7(a) being this diff's own case), *"never"* misleads |
| `:857` | Sources cites the IIHF **v1.0** PDF while verification is against **v1.1** — provenance mismatch for `source-verifier` |
| USAH Declaration | **under-claimed:** `:324-329` makes the *"major plus game misconduct or match penalty provisions … must be assessed"* for a check on a vulnerable player — **mandatory**, which strengthens *"keeps every other route"* |

### 9.7 · Verified and upheld

IIHF Table 6 counted at **exactly twenty**, subtitled *"automatic"* — exact. NHL Table 5's partition
re-verified rule by rule rather than from the checkmark grid (which collapses in extraction): **7 unconditional
/ 3 face-or-head / 3 any-injury = 13** non-fighting rows, 5 fighting rows. No major at all for high-sticking,
slew-footing or illegal check to the head — 48.3 *"There is no provision for a major penalty for this rule"*.
NHL 23.6's Physical Infractions Category is **exactly the eight fouls** the corpus names. USA Hockey 411's list
counted at **seventeen**. 640(b)'s classification limb present, its definitional sentences carrying none —
**that reading holds**. 9.5(b)/(c) name 7.7 and nothing else, so the route to 7.6 really is read from 7.6's own
preamble — *"keep it"*. §10's rows and `body_contact_and_battles.md:1012`/`:1029` **agree with the new passage**
and with the book. The hedge on 640(g)/(h) in adult men's play is sound and **no book on disk settles it**.

### 9.8 · Declared, and what is still unreachable

- **DF62 (new).** The USA Hockey **Casebook** and the **IIHF Disciplinary Code** are not on disk, and **three
  live hedges turn on them** — 640(g)/(h) in adult men's play, the read-across of HC Interpretation 2 from
  7.6(b) to 7.7(b), and *"assume the stricter reading"* on 604(c). Grepping the playing rules cannot close any
  of the three.
- **A missing rule is invisible to this method.** Table 7 was found only by chasing Table 6's neighbours.
  Nothing in the text points at a table that qualifies a claim, so there may be more.
- Not reached: `uk_rules.md` beyond two lines, `playing_without_the_puck.md`, `puck_handling.md`, and the
  charging-stride, hybrid-icing, offside and goaltender-interference claims visible in the lines read.



---

## 10 · `site-reviewer` on wave B — a plugin bug, and two of my claims corrected

The browser half could not run: **Chrome refuses to navigate to `localhost`/`127.0.0.1`**, blocking on a
safety-category check. The reviewer did not stop — it switched to parsing the **built DOM in `site/dist/`**,
which is the right instrument for the two priorities and answered both. **The visual dimensions of D15 are
therefore NOT covered for wave B** — no screenshots exist, and nothing about 375px overflow, table scrolling,
dark-mode contrast or runtime console output has been seen.

### 10.1 · CRITICAL — literal asterisks reach the reader, and the cause is the plugin, not the content

Two literal `*` characters render inside a **match-penalty** facts line:

> `[Rule]` Kick the puck, never a player — NHL 49.3 makes kicking or attempting to kick an opponent a match
> penalty `*whether or not an injury occurs*`, and USA Hockey 627(a) makes even a skate push-off a major plus
> a game misconduct

`content/technique/body_contact_and_battles.md:670` and `content/technique/puck_handling.md:264`, plus three
more outside the diff at `content/foundation/on_ice_communication.md:156`, `:273`, `:298`. **All five are
pre-existing at HEAD.**

**Cause:** `site/src/plugins/remark-corpus.mjs` emitted each facts value as a raw mdast `text` node, so **no
inline markdown in any facts value was ever parsed** — emphasis, code and links all reached the reader
literally. **Fixed in the plugin**, not the content: the value is now parsed with `fromMarkdown` and falls back
to the raw text if parsing fails, because losing a fact is worse than showing an ugly one.
`mdast-util-from-markdown` was present only as a **transitive** dependency and is now declared in
`site/package.json` devDependencies; it is build-time only and ships nothing to a reader.

**This is the right shape of fix.** The house style uses emphasis in facts values, and deleting the emphasis
to satisfy a renderer would have been the corpus bending to a bug.

### 10.2 · Two of my own claims corrected

- **`offensive_zone_play.md` is clean.** I recorded a literal asterisk there in wave A and attributed it to a
  match string stopping one character short of an italic close. **That attribution was wrong** — the rendered
  page has zero literal asterisks, in the working tree and at HEAD. The two live ones are in the files above.
- **The unmatched `</strong>` the sixth gate reported is a FALSE POSITIVE.** An HTML-parser balance check over
  all seven pages returns **zero unmatched end tags and zero unclosed tags**. It was the artefact of per-line
  regex counting — the exact failure mode this round already recorded twice.

### 10.3 · The nested-bold defect was real, at three sites, and it destroyed the author's structure

`<strong>` opened directly inside `<strong>` renders at **identical weight**, so the nesting is invisible and
the intended structure is lost. At `body_contact_and_battles.md:1102` the result was **one continuous
340-character bold run**, swallowing a consequence clause that was punctuated as if it sat outside the
emphasis. Two more: `:465` — the near-twin of the same passage, same subject matter — and `:1029`, where the
nesting swallowed the `60.1 and 60.3` rule-number highlight. **All three fixed** by closing the outer span
before the inner opens. The other six pages have none.

Also recorded: **24 cases of `<em>` inside `<em>`** across the seven pages, almost all in Sources notes where an
italic parenthetical contains an italicised book title — so **the title is not distinguishable as a title**.
Same root cause, lower stakes, **not fixed** (DF63).

### 10.4 · Method warnings worth more than the findings

⚠️ **The documented build command can exit 0 without building.** `npm` and `node` in this shell are broken nvm
lazy-load shims that fail with `_load_nvm: command not found`. Piping the build through `tail` returns **`tail`'s**
exit code, so a build that never ran reports success — and the `dist/` then inspected is a **stale directory from
an earlier run**. Workaround: `unset -f node npm npx; export PATH="$HOME/.nvm/versions/node/v22.23.1/bin:$PATH"`.

⚠️ **And I then walked into the adjacent trap.** My own check for literal asterisks returned **"0"** and I
nearly recorded it as a pass — but `site/dist` **did not exist** at that moment, because `clean:cache` removes
it at the start of a build. **An empty glob scans nothing and reads as clean.** Seventh confident-false
self-check this round. **Every scan must assert that it matched files before its count means anything.**

⚠️ **The page URLs in my own brief 404.** I wrote them hyphenated; the site routes on **underscores**
(`/foundation/rules_primer/`). Not a site defect, but any deep link in the hyphen style is broken.

### 10.5 · Structural passes, and what they do not cover

- **Facts blocks: pass.** Every ` ```facts ` block became a `dl.facts` on all seven pages — **zero** left as a
  code block, **zero** empty labels, **zero** values starting lowercase. Row counts match source exactly
  (body_contact 274/274, puck_handling 223/223, offensive_zone_play 208/208, playing_without_the_puck 165/165,
  time_and_space 121/121), so nothing is lost or doubled. The split line in `time_and_space` renders as two
  clean adjacent `Rule` rows; the rewritten opening line in `body_contact` renders complete.
- **§10's table is wrapped correctly** — 6 columns × 20 rows, inside
  `<div class="table-scroll" tabindex="0" role="region" aria-label="Table, scrollable horizontally">`, and all
  four tables on the page are wrapped. Correct keyboard and AT handling. **Whether it actually scrolls, and
  whether the body scrolls sideways, was not seen.**
- **§4's bullets render as well-formed list items** — the longest is **7,550 characters of text with 137 nested
  elements**. None empty, orphaned or collapsed. ⚠️ **Well-formed is not readable**, and the reviewer says so.
- **No off-origin requests** on any of the seven pages; no `googletagmanager` or `google-analytics` string in
  `dist`; one `<h1>`, one `<main>`, a skip link and no heading-level jumps on every page.

### 10.6 · DF64 (new) — a dormant Google Analytics bootstrap ships and is precached

`dist/analytics.js` is a GA4 `gtag` bootstrap. It is **inert in this build** — no page references it and no
`meta[name="ga-measurement-id"]` exists, so it returns early. But **`dist/sw.js` precaches `/analytics.js`**
among its 137 URLs. Adding that meta tag would begin sending page views to Google from a site that currently
contacts nobody. **Not changed** — this is `infra`-adjacent and outward-facing, so it is the owner's call.

### 10.7 · DF65 (new) — 50 ⚠️ warnings are not promoted to callout panels

They sit mid-paragraph, so `remark-corpus` leaves them inline: **43 of 53 unpromoted on `rules_primer`**, 3 of 8
on `body_contact`, 2 of 5 on `offensive_zone_play`, 2 of 3 on `puck_handling`. Wave B added at least three,
**one of them inside a horizontally scrollable table cell** — a safety warning about touching an opponent's
facemask, ending *"Never touch a facemask."* **A safety warning inside a scrollable cell is the single thing
most worth a phone screenshot**, and nobody has seen it.

### 10.8 · Declared for wave B

- **D15 visual: NOT COVERED.** Chrome refuses `localhost`. The session's CDP harness
  (`scratchpad/render.mjs`) is the available route and has not been pointed at these pages.
- **DF63** `<em>`-in-`<em>`, 24 sites. **DF64** the analytics bootstrap. **DF65** unpromoted warnings.
- **DF66 (new)** — the corpus cites the IIHF **v1.0** rulebook PDF in the Sources lines of ~6 documents while
  `sources/README.md` records verification against **v1.1**. Changing a citation URL is a C5 change needing
  `source-verifier`, so it is declared rather than swept.



---

## 11 · D15's visual half — now covered, by CDP rather than by declaration

§10.8 declared the visual dimensions **not covered** because Chrome refuses to navigate to `localhost`. That
declaration is now withdrawn: the session's CDP harness drives real headless Chrome over Node's built-in
WebSocket and is not subject to the extension's refusal. **28 combinations rendered** — 7 pages × {375×812
mobile, 1280×900 desktop} × {light, dark} — with a non-empty assertion on the result set.

| Check | Result |
|---|---|
| Horizontal **body** overflow | **0 of 28** — §4's 5,500-character bullets and §10's 6×20 table do **not** burst the page at any width or theme |
| `.table-scroll` wrappers bursting their parent | **0** |
| Tables that actually scroll where needed | mobile: 3/4 on `rules_primer` (§10 among them), 2/3 on `body_contact`, 3/4 on `playing_without_the_puck`. Desktop: 1/4, 0/3, 0/4 — correct, they fit |
| Console / log entries | **0 across all 28** |
| Theme actually applies | light `rgb(251,251,250)` vs dark `rgb(20,22,26)` — distinct, so dark mode is live |

### 11.1 · DF65 partly answered — the warning in the scrollable cell is visible

§10.7 flagged a safety warning inside a horizontally scrollable table cell as *"the single thing most worth a
phone screenshot"*. Measured at 375×812: the two ⚠️ cells sit at 113px within a wrapper whose **`scrollWidth`
(344) is less than its visible width (346)**, so **that table does not scroll at phone width and both warnings
are fully visible.** Screenshot confirms it, and the page renders cleanly — sticky header intact, no overflow.
**DF65's remaining half is real** (43 of 53 warnings on `rules_primer` are not promoted to callout panels), but
the scrollable-cell concern does not materialise here.

### 11.2 · Two more method notes

- ⚠️ **My own cell check produced a false positive and I caught it in the same breath.** I flagged
  `needsScrollToRead` on `cellLeftRelToWrap > 4` — which only means the cell is not in the first column. The
  real test is whether the **wrapper** scrolls at all. Eighth confident-false self-check this round. The
  pattern is identical every time: **a proxy measurement standing in for the thing itself.**
- **The preview server binds IPv6-only.** `localhost` and `[::1]` return 200; **`127.0.0.1` returns nothing.**
  Any reviewer that reaches for the dotted-quad form concludes the server is down. That is likely to have
  compounded the extension's refusal in §10, and it is worth knowing before the next site round.



---

## 12 · Seventh gate — BLOCK, and the failure this corpus exists to prevent

The seventh gate passed C1, C2, C5, C9 and C10's mechanical half, **independently verified 13 of the new rules
claims**, and **checked the one thing I said I had not**: it parsed all 4,583 facts values against the new
plugin and diffed each child list against the raw text. **Exactly 5 change and they are the 5 intended** — zero
produce `link`, `inlineCode`, `image` or `html` nodes. The plugin change is safe.

Then it blocked on the defect that is this project's founding subject.

### 12.1 · The Table 7 fix reached the body and stopped

`grep -rn "Table 7" content/` returned **one hit**. The fix went into §4's Major bullet and **nowhere else**,
while every summary layer went on telling the reader that the IIHF's first-major exposure is Table 6's twenty:

- `rules_primer.md` §10 — *"A first major ends your game for any of the twenty infractions in Reference Table
  6 … and 20.4 makes that game misconduct **unconditional**"*, from which a reader concludes a first boarding,
  charging, elbowing, interference or tripping major does **not** reach ejection.
- `rules_primer.md` Common Mistakes and Key Takeaway 4 — same.
- **`uk_rules.md:226` and `:289` — the British reader's owner document, both edited in this very diff for
  exactly this proposition**, giving an incomplete answer to the question they were rewritten to answer.

**This is CLAUDE.md's writing step 5 verbatim, and round 10's every critical.** The finding I was propagating
*said so in its own words* — §9.5 records *"only the summary layer omits them"* — and I fixed the layer that
was already right. **Propagated to all six sites**, with the referee's-judgement qualifier intact, since Table
7's game misconduct is discretionary where Table 6's is automatic and collapsing that distinction would be its
own defect.

### 12.2 · The same shape again, smaller: two of three sites

§9.6 required *"41 **regular-season** games"* (NHL 23.6 is expressly *"In regular season League games"*) and HC
4.8(c)'s *"or after the conclusion of the game"* at **all three** summary sites. `rules_primer.md:13` and
`:845` got both; **`body_contact_and_battles.md:1168` got neither.** One sentence, three copies, two fixed —
found by diffing the three against each other, which is the check that should have been run when it was written.
Aligned.

### 12.3 · Append-instead-of-replace, the fifteenth instance — inside the 604 safety fix

My own correction inserted a full stop and a 430-character parenthetical **between the scope clause and what it
qualifies**, leaving a fragment opening with a lowercase *"and"*:

> …*"…shall be penalized."* The casebook is not on disk.**) and 604 prohibits body checking in 12U and below**…

Spoken, a listener hears *"The casebook is not on disk. And 604 prohibits body checking in 12U and below"* —
the load-bearing half of a safety fix, orphaned from its subject. **Restructured whole**: the scope clause now
sits inside the sentence it qualifies and the parenthetical follows it. A boundary scan of every added line
finds this one and no other.

**The pattern is now fifteen instances and has survived being written down twice.** §6.2 recorded it, §8.3
recorded it recurring after §6.2, and it recurred again inside the fix for a finding about it. The lesson has
not worked as stated. A stronger form: **after every edit, read the sentence before and the sentence after the
one you changed, out loud.** Grepping the proposition catches duplication; only reading catches severance.

### 12.4 · What the gate's numbers corrected

- **DF44 re-measured**, §8.6 updated in place. §4 is **+15.8%** and the worst bullet **+34%** to 6,068
  characters. The gate's judgement, which I accept: *"the override was justified in kind and is no longer
  justified in silence"* — every increment traces to a verified defect and non-negotiable 3 forbids buying
  space by deleting sourced claims, but **DF44 now needs a stated plan rather than a repeated acceptance.**
- **The page count discrepancy is not a defect in either count.** I reported 41, the gate 42: **41
  `index.html` pages plus `404.html`.** Different denominators, both right. Worth recording because this round
  has spent eight self-checks learning not to trust a bare number.
- **§8.5's coverage table was stale and one row was false.** D1, D14 and D15 still read ⏳ after all three had
  returned, and D2 was marked ✅ for a propagation that had not happened. Corrected in place.

### 12.5 · Still open, and C6 is the one that matters

⚠️ **`safety-reviewer` has not seen roughly twenty edits that touch contact and penalties** — the 604 scope
inversion, Table 7, 4.8(b)'s *"in the same game"*, 640(h), 7.7(b)'s widened predicate, and now §12's
propagation. §8.1's lesson generalises: **text written to satisfy a reviewer is itself unreviewed text**, and
§4.1 records seven consecutive passes each finding defects in the previous pass's fixes. §9, §10 and §12 are
passes eight, nine and ten. **C6 has no declaration route. This is the next dispatch.**

⚠️ **D15's readability half is not covered and no agent can close it.** §11 measured that §4's bullets do not
overflow; nobody has judged whether a 6,068-character bullet *reads*. That is the reader test §4 of the plan
calls the highest-value outstanding item.



---

## 13 · `safety-reviewer`, second pass — no criticals, three majors, and one defect I created an hour earlier

This pass was told plainly that **its own previous report contained two false findings** and that it should
trust neither my summary nor its predecessor's. It re-grepped every rule number, regenerated narration to a
scratchpad rather than reading `scripts/speech/`, and **upheld the whole 7.6/7.7 rewrite line by line** along
with the 604 scope fix, 640(g)/(h), 4.8(b), NHL 22.3, Table 5's thirteen-row partition and Table 6's twenty.

**No criticals.** Then three majors, the first of which is mine and fresh.

### 13.1 · My Table 7 propagation introduced a fabricated severity

`uk_rules.md:226`, written **one hour before this pass**, read: *"Table 7 adds five more where the game
misconduct is the referee's judgement rather than automatic… **At adult level a first major for any of those
ends your game too**."*

⚠️ **The nearest antecedent of *"any of those"* is the five fouls just described as discretionary — and for
them it is false.** `iihf_rules.txt:3904` — **41.3 is a bare major at the referee's discretion with no game
misconduct at all**; 41.4 adds the ejection separately and also at discretion. So the sentence contradicted its
own preceding clause, in the Common Mistakes bullet of the document that **owns British rules**.

**The five other propagation sites all preserved the discretion correctly.** Only the sixth broke — and it broke
in the direction of overstatement, which is its own defect: *"an overstated ejection warning teaches the reader
to discount the twenty in Table 6, which are real and unconditional."* Fixed, with 41.3 now named.

**The lesson is not the one I would have guessed.** §12 recorded that a fix must reach every layer. This pass
shows the second half: **propagating a claim to six sites is six chances to get it wrong**, and the site most
likely to break is the one where the claim has to be compressed. Propagation is not copying — each site needs
reading in its own context afterwards.

### 13.2 · A correction of mine replaced an imperative with a permission

`offensive_zone_play.md:697`. I rewrote the facts line to fix a genuine over-claim — the books do permit a check
*"immediately following"* the loss — but the replacement **led with the permission and dropped the habit**:
*"56.1 permits a check 'rendered immediately following his loss of possession', so it is the delay that fouls."*

A defenceman acting on that pinches into a winger who has already chipped it — which the same section says
happens *"constantly"* — and under the IIHF book that is 56.5, a major plus a game misconduct, **nobody hurt**.
Accuracy was not the problem; **which layer carried which half** was. The `Rule:` line is the one a reader
treats as the law, and it had become a window. Rewritten to lead with the tier and close on the imperative.

### 13.3 · "The NHL writes no major at all" reads as leniency on a match-penalty foul

At four sites, in this diff, the corpus argued the NHL is the lenient book because it *"writes no major at all
for high-sticking, slew-footing or an illegal check to the head."* True — and on two of the three the NHL is at
or above every other book's ceiling. **`nhl_rules.txt`: 52.2 — *"Any player who is guilty of slew-footing shall
be assessed a match penalty"*** — mandatory, no minor, no discretion, the highest tier in the book. Also 48.5
and 60.4.

Slew-footing is the mechanism this corpus elsewhere calls *"a backward head-first fall in all of them"*. A
summary layer that makes it sound sub-major **errs lenient on a head-and-spine foul**. All four sites now name
the match penalties and say 52.2's is mandatory — the fourth (§10's row, worded *"No major at
all"*) was found in my own self-check after the safety pass, not by it.

### 13.4 · Minors fixed

| Site | Fix |
|---|---|
| `rules_primer` 7.6(d) | *"bars a misconduct outright"* → *"bars the ten-minute **Misconduct** — not the ejection"*, and **7.6(e)** now appears in the corpus for the first time: a game misconduct is mandatory with any 7.6(b) major |
| `body_contact` 604 fix | *"the hip and shoulder action is the legal check"* now adds *"**the forearm never is, in any classification**"* — the correction previously arrived three sentences later, beside a quote naming the forearm |
| `body_contact` icing facts line | named three books and dropped the USA Hockey reader's; now carries *"USA Hockey reaches only the icing half, at 624(d)"*, matching the sibling site |
| `rules_primer` Declaration | the quoted heading is **`COMPETITIVE CONTACT CATEGORY`** — the same defect class as the 604 scope error, now labelled and flagged as holding *a fortiori* where checking is legal |
| `puck_handling` holding | the propagation had shed the primer's hedge; **NHL 21.1's match penalty for deliberate injury "in any manner"** restored, and the IIHF's unsettled route stated. Facts line split (350 → 253 + 178) |
| three summary sites | *"one in the last ten minutes"* read as *one major*; 4.8(c) triggers on a **game misconduct** |

### 13.5 · Declared

- **Minor 4 not fixed:** IIHF **20.5 names Tables 5, 6 and 7**, while 20.4 says only *"the Reference Tables"*
  and a `➔` pointer supplies Table 6. The corpus's Table-6-only reading is an **inference**, and it is the
  *lenient* one — it is what makes Table 7 discretionary. The reviewer believes it is the right inference
  (41.3 would otherwise be dead letter) and so do I, **but it is unflagged at `:332` where the reader meets it
  first.** DF67.
- **Minor 8 not fixed:** the high-sticking bullet now spans **three** narration chunks and splits between a
  book name and its rule number. The parenthetical rescues the identification, but this is DF44 showing up in
  the audio layer. Folded into DF44.
- **Hazard classes 3, 5 and 6 unchecked this round** — neck protectors, helmet certification, concussion,
  load, and the culture documents. This diff touches none, *"that is not the same as their being clean, and a
  reader arriving from the changed pages will land there."*
- **`eiha_inhouse.txt` and `eih_rr.txt` not grepped this pass**, so every British-specific claim in
  `uk_rules.md` other than the IIHF limbs is unverified in this session.
- **Nothing is §10-only.** Confirmed: the NHL seven/six split and the Table 7 five both also live in §4,
  Common Mistakes and Key Takeaways, so the spoken-pointer problem does not orphan any claim.



---

## 14 · The coverage statement — one table, canonical numbering, covering §§9–14

⚠️ **Three earlier tables in this record used three incompatible dimension schemes.** §4.3b numbered D2 as
*cross-book divergence* and D8 as *the summary layer*; §8.5 numbered D2 as *the summary layer* and D9 as
*safety*; neither matches
[`review_process.md`](../review_process.md#the-dimensions--a-review-must-cover-all-of-these). A row that
cannot be mapped onto the condition it discharges **is** the silence C3 forbids, however many rows it has.
**This table supersedes both.** It uses the canonical numbering and covers §§9–16 — including the fixes written
after the eighth and ninth gates. See **§16** for what the ninth gate and my own self-check found after §15,
and for the two dimensions those fixes have still not been reviewed under.

| | Dimension | Status for §§9–22 |
|---|---|---|
| **D1** | Rules accuracy | ✅ `rules-verifier` (§9) on HC 7.6/7.7, USAH 604/640, the suspension triggers, NHL/IIHF 20.4. The seventh gate re-verified 13 claims and the eighth **every** new claim, both independently. IIHF 41.3, NHL 52.2 and HC 7.6(e) verified three times over |
| **D2** | Rules travelling without exceptions | ✅ the 604 scope, 640(b)'s classification limb, 7.3's third limb, 4.8(c)'s three triggers and 23.6's *"regular season"* all now travel with their exceptions |
| **D3** | Rule-set divergence | ✅ **not out of scope, contrary to §8.5** — this diff is largely divergence work: Table 6 vs Table 7, Table 5 vs Table 6, 7.6 vs 7.7, 640 vs 625 vs 602(a), 23.5 vs 23.6 |
| **D4** | Citation integrity | ⬜ **declared.** No external URL added or removed — both the seventh and eighth gates set-compared every staged file against HEAD and found the sets identical. `source-verifier` has still never run (DF47, DF66) |
| **D5** | Provenance | ⚠️ **three** misattributions found and fixed — §8.2 (the Declaration quoted as Rule 604), §13.4 (its `COMPETITIVE CONTACT CATEGORY` heading), §17.3 (a phrase attributed jointly to NHL and IIHF 41.2 where only the NHL matches). **Never independently swept**; all three were found by other dimensions, which is not the same as being looked for. `source-verifier` has never run |
| **D6** | Negative existence claims | ⚠️ **the round's densest dimension and the least swept.** Claims: *"USA Hockey reaches only the icing half"*, *"7.7(b) has no injury clause of 7.6(b)'s shape"*, *"the IIHF writes no match penalty at all"*, *"no book outside Hockey Canada writes the checker any equivalent amnesty"*, and **§17.2's *"USA Hockey writes no immediacy window at all"*, now propagated to five documents**. Each verified by grepping the book claimed to be silent, and re-verified by three separate gates. ⚠️ **But a grep of four books cannot see the USA Hockey Casebook or the IIHF **Disciplinary Code**, neither of which is on disk (DF62, DF73). This row previously named the IIHF *Situation Handbook* among them — **it is on disk**, so these claims were excused from checking on a false premise about this repository's own shelf. **Swept in §22.1: three corroborated, none contradicted.** |
| **D7** | The cardinal rule | ✅ no coaching choice added as law. The one inference stated as rule (§8.2's *"because"* clause) is now labelled and given its counter-text |
| **D8** | Numeric ownership | ✅ twenty, five, thirteen, seven, six, seventeen, eight and forty-one all traced to their owners and re-counted by two gates |
| **D9** | The summary layer | ⚠️ **the round's worst dimension, and it failed twice after being named.** Table 7 reached §4 and stopped (§12.1); the 4.8(c) trigger reached two sites of three, twice (§12.2, and again at the eighth gate); the interference ceiling reached body and facts and stopped before Common Mistakes in two documents. All now propagated, and a corpus-wide sweep returns **zero** bare interference ceilings |
| **D10** | The key-facts layer | ✅ `check_facts.py` green — 773 blocks, 4,584 facts. Three lines split for length, four rewritten. ❌ **DF60 stands:** the suspension machinery still reaches no facts block anywhere, blocked behind DF53 |
| **D11** | Reader safety | ✅ `safety-reviewer` twice (§7, §13). **No criticals** in the second pass. ⚠️ **but ~15 edits written after §13 have not been seen by it**, including the ones fixing its own findings |
| **D12** | Read-aloud integrity | ✅ regenerated and read at every changed site across four safety passes; §4's *Major* bullet split to repair a mid-parenthesis break (§15.3); a `7.3(a)/(b)/(c)` narration artifact fixed (§18.4). ⚠️ **§10's table reaches no listener** (`TABLE_MAX_COLUMNS = 3`) though nothing is §10-only, and **§19.3 merged a facts line at `HARD_MAX` that nobody has heard**. **Nobody has heard audio at all** — 1,565 chunks of SSML *text* have been read |
| **D13** | Folklore | ⬜ **declared out of scope.** No unsourced "everyone knows" claim added; every claim in this diff carries a rule number |
| **D14** | Structure, style, terminology, cross-links | ✅ nested-bold fixed at three sites; the severed scope clause restructured; `check_links.py` green across 6,967 internal links |
| **D15** | The rendered site | ✅ **mechanical half:** the plugin bug found and fixed (§10.1), 28 CDP renders with zero body overflow and zero console entries (§11). ❌ **The readability half is not covered and no agent can close it** — whether a 6,163-character bullet *reads* is the reader test, and it is the plan's highest-value outstanding item |

**Two dimensions are declared rather than checked (D4, D13) and one is explicitly open (D15's readability
half).** Three are checked but not swept (D5, D6, D11). That is the honest state.



---

## 15 · `safety-reviewer`, third pass — two criticals, both the same shape as §12's

The pass regrepped every rule number, regenerated narration to a scratchpad and **separately regenerated
`rules_primer` from `git archive HEAD`** for a before/after comparison — the first pass this round to measure
the audio layer against its own baseline. It **upheld all eleven distinctions in the Hockey Canada 7.6/7.7
rewrite**, the Table 6/Table 7 discretion at all six sites, IIHF 41.3, the four slew-footing sites, NHL Table
5's seven/six split rule by rule, and all five suspension triggers.

### 15.1 · Both criticals are corrections that reached one layer and stopped

⚠️ **This is the twelfth consecutive pass to find that defect, and the third round in a row it has been the
worst dimension.**

**Boarding's tiers reached §6's body and nowhere else.** The warning *"boarding is not a two-minute foul"* is
new, correct and verified — USA Hockey 603(a) writes **no bare minor at all**, Hockey Canada 7.2(b) makes a
major plus game misconduct mandatory on injury, IIHF 41.4 reaches one **with nobody hurt**. But the facts
block carried two boarding lines with no tier, Common Mistakes had no boarding bullet, and Key Takeaway 6
carried checking-from-behind's tiers only. **The one of "the four" whose tiers were not in every layer.**
Fixed in Common Mistakes and KT6. ❌ **The facts layer could not take it** — that block is at `HARD_MAX` 11
and its boarding line is at 298 of 300 characters. **DF68, blocked behind DF53** like DF60.

**The interference ceiling reached §5 of `breakouts.md` and not §2 or Common Mistakes** — the same claim
stated three ways in one document: uncapped in §5, capped at *"two minutes"* in §2's body, §2's facts block and
Common Mistakes. Fixed at all three; one facts line had to be split (351 → 181 + 174).

### 15.2 · The document that owns body contact never said what the penalty was

§5's blockquote and facts block both said *"everything below is a penalty"* in a non-check league — and
**nowhere in that document said what penalty.** A reader in a non-check adult league, which is the modal
British and rec reader, supplies "two minutes". It is **USA Hockey 604(c) minor, 604(d) a major plus a game
misconduct where it recklessly endangers, 604(e) a match** — and Rule 604 is on Rule 411's seventeen-rule
list, so a third in a season is three further games. Hockey Canada 7.3(a)/(b)/(c) the same shape with the
major mandatory on injury. Both layers now name it.

### 15.3 · The audio regression, measured against HEAD — and the fix that also helps DF44

The pass regenerated `rules_primer` from HEAD and from the staged tree: **mid-sentence chunk splits went from
11 to 18.** The Table 7 addition pushed §4's *Major* bullet past the chunk budget and it split **mid-
parenthesis** — chunk 027 ending *"tripping ("* and 028 opening *"fifty-seven point four)"*.

**Fixed by splitting the bullet into two paragraphs** at *"So under the book British hockey runs on"*. Verified
after: chunk 028 now carries the Table 7 list **and** its consequence together, and all three Table 7 sites
carry *"referee's judgement"* inside the same chunk. **Lines over 2,800 dropped 19 → 18**, so the structural
fix and the audio fix are the same fix — which is the argument for splitting §4 rather than a reason to defer it.

⚠️ **19 chunks in `rules_primer` still end mid-sentence.** That is DF44 in the layer a listener meets, and it
is the strongest evidence yet that §4 must be split.

### 15.4 · Minors fixed

- `puck_handling.md` KT7 — the holding claim shed the primer's residual; **NHL 21.1's match penalty for
  deliberately injuring *"in any manner"*** restored, with *"treat the minor as the floor"*.
- `body_contact_and_battles.md` facts — *"Hockey Canada scopes only 7.3"* read as a claim about the whole book
  (7.7 and 9.5 are Junior/Senior-scoped); now *"of these four"*.
- `offensive_zone_play.md` — the late-hit ceiling reached body and facts and not the summaries. Added to
  Common Mistakes, and to **KT10**, where it separates the coaching choice from the rule: *"How aggressively
  you pinch is a choice; whether a late pinch is legal is not."*
- A double space inside a line this round edited.

### 15.5 · Found by accident, outside the diff — DF69

`body_contact_and_battles.md` **has no slew-footing entry at all** — not in its penalty table, not anywhere —
and it is the document that owns board and corner battles, which is where slew-footing happens. The reviewer
caught it while grepping for something else and says so: *"it is the shape of thing this method is structurally
weak at: I caught it by accident."* **Not fixed** — outside this diff, and it needs `rules-verifier` on NHL
52.2, IIHF 52, USAH 639 and HC 8.8 first.



---

## 16 · Ninth gate — BLOCK, and an overstatement of mine for the third time

### 16.1 · I overstated a warning while fixing an understatement. Again.

`body_contact_and_battles.md` Common Mistakes, written by me after §15 and seen by no reviewer:

> *"**Treating boarding as a two-minute foul.** It is not one in any book."*

⚠️ **False. A bare minor is the base tier in three of the four books**, verified against primary text:
**NHL 41.2** — *"may assess a minor penalty, based on the degree of violence of the impact with the boards"*;
**IIHF 41.2** — the same construction; **Hockey Canada 7.2(a)** — *"A Minor penalty will be assessed."* Only
**USA Hockey 603(a)** writes no bare minor, which is what the rest of the bullet then said correctly.

**This is the third overstatement I have produced while correcting an understatement** — after the `uk_rules.md`
Table 7 clause (§13.1) and the `offensive_zone_play.md` permission (§13.2). The pattern is now legible:
**when I widen a claim to fix a ceiling, I reach for the strongest available form of it**, and the strongest
form is usually false. Reframed at all three sites to *"not capped at two minutes"*, which is what the books
support.

### 16.2 · The late-hit ceiling reached one pinch document and stopped at the other

`offensive_zone_play.md` got it at four layers. **`forechecking_systems.md` — the corpus's other pinch
document, teaching the same act and quoting the same coaching test from the same source — still stated the
ceiling bare**, at a facts line and in the body, and told the reader the cost of a late pinch was *"an even
rush turned into an odd-man one"*. Under the British reader's book it is IIHF 56.5, **a major plus a game
misconduct with nobody hurt**.

Propagated to the facts block (one line split, 335 → 174 + 172), the body, and a new Common Mistakes bullet.
A corpus-wide sweep for the proposition now returns **zero** bare late-hit ceilings.

⚠️ **The gate found this by grepping the proposition across the corpus rather than by reading the diff**, and
says so: *"that method is only as good as my guess about which propositions to grep."*

### 16.3 · My own self-check found the thirteenth instance before the gate did

After §15 I greped my own new claims across every layer and found the **non-check penalty tiers**
(USA Hockey 604(c)/(d)/(e), Hockey Canada 7.3) had reached §5's blockquote and facts block and **not** Common
Mistakes or Key Takeaway 1. Fixed in both. **The gate flagged that this fix was not in the record** — and it
was right: a self-found, unrecorded fix is one no subsequent pass can confirm. It is recorded here.

### 16.4 · Also fixed

- **`body_contact_and_battles.md` KT6 dropped the 23.5 half** of the suspension sentence that both
  `rules_primer.md` sites carry. Restored — a reader who took a slashing game misconduct is under 23.5.
- **The penalty table's Interference row carried no tier**, in the same table whose Holding row gained one in
  this diff. It now carries NHL 56.4, IIHF 56.5 and Hockey Canada 8.3(b).

### 16.5 · What is still not reviewed, and it is the honest gap

⚠️ **Everything in §16 was written by me and has been seen by no reviewer.** That includes the corrected
boarding framing at three sites, the `forechecking_systems.md` propagation, and the interference row. §14's
**D11** row already said this of the post-§13 edits; it is now true of the post-§15 edits too, and saying so
is the only thing that keeps it from being silence.

⚠️ **`forechecking_systems.md` is new to this diff**, so nothing in it has been through `rules-verifier`,
`safety-reviewer` or `site-reviewer` at all this round.

**Declared, not fixed:**
- The gate's note that `rules_primer.md`'s boarding bullet leans on an unquoted inference — that 640(b)'s
  defenceless *definition* survives the *"(except Adult Male Classifications)"* exception — when the same
  conclusion is reachable from 603's base sentence without it. **DF70.**
- **DF69** (`body_contact_and_battles.md` has no slew-footing entry at all) and its possible siblings.
- The index moved while the ninth gate was auditing, because I staged a fix mid-audit. **Re-run
  `git status --porcelain` and `git diff --cached --stat` immediately before committing**; if anything has
  moved, that audit does not cover it.



---

## 17 · `rules-verifier` on the boarding reframe — the reframe holds, five defects around it

The pass read all four books plus **`usah_case.txt`** (Rule 603 Situations 1–3) and resolved **every** claim
in the brief — no "could not confirm". **The boarding reframe itself is confirmed sound in all four books:**
NHL 41.2 discretionary on *"the degree of violence of the impact with the boards"*; IIHF 41.2 the same on
*"force and violence"*; Hockey Canada 7.2(a) a bare minor, mandatory in form; **USA Hockey 603(a) genuinely
writes no bare minor** — its floor is *"a minor plus a misconduct"*. *"Not capped at two minutes"* is true
everywhere.

### 17.1 · The fourth instance of the overstatement pattern, and USA Hockey is the outlier every time

`body_contact_and_battles.md`'s penalty-table Interference row read **"A minor is the floor, not the
ceiling"** — unqualified, and **false under USA Hockey**, whose Rule 625 caps interference at a minor and is
**absent from Rule 411's aggressive-infractions list**. USA Hockey escalates the *late hit* under 640, not
*interference* under 625.

**That is the same shape as the boarding bullet it was written beside**, and USA Hockey is the book the
generalisation ran past both times. Now qualified to the three books, with the 625/640 split named.

**A fifth, found by my own propagation check:** Key Takeaway 1 said *"a check there is not a two-minute
foul"* and then listed *"604(c) a minor"* in the same breath — **contradicting itself inside one sentence.**
Reframed.

### 17.2 · SAFETY — USA Hockey writes no immediacy window at all, and the corpus taught an NHL frame

The NHL, IIHF and Hockey Canada all permit a check inside a window after release — NHL 56.1's *"immediately
following his loss of possession"*, the IIHF's *"objectively reasonable window of opportunity"*, Hockey
Canada 8.3's arm-and-stick-length measure. **USA Hockey does not.** Rule 640(b): a player who has released a
shot or pass *"are not eligible to be body checked"* — full stop, no window — and the Declaration of Player
Safety calls *"finishing the check"* an *"unacceptable action"*.

⚠️ **So USA Hockey's test is not how late you were; it is whether you could have avoided it.** Both pinch
documents taught the window from the NHL alone, and a USA Hockey reader applying that frame is penalised
under a rule that does not measure lateness. Added to `forechecking_systems.md` and
`offensive_zone_play.md`; a corpus sweep now returns **zero** files teaching the window without the exception.

### 17.3 · Also fixed

- **A misquote.** *"Based on the degree of violence of the impact with the boards"* was attributed jointly to
  NHL 41.2 and IIHF 41.2. It is the **NHL's alone** — the IIHF reads *"force and violence"*. Split.
- **`forechecking_systems.md` said *"Once they have moved it you may not hit them (NHL 56.2)"*** — over-absolute
  against 56.1's express window, and citing the one rule of the pair that omits it. Conservative in direction,
  but a rule stated harder than the book states it. Replaced.
- **A citation filed under the wrong book.** Hockey Canada's **7.5(b)** (checking from behind) sat at the end
  of a list of *boarding* citations whose previous item was an **IIHF** rule — so a reader, and certainly a
  listener, would attach it to the IIHF book, where Rule 7 is something else. Moved into its own sentence.
- **The NHL limb of the boarding ceiling had no citation.** Added 41.3, 41.4 and — the teachable one the corpus
  lacked entirely — **41.5, a game misconduct whenever a boarding major follows an injury to the face or head.**

### 17.4 · Verified and upheld

IIHF **41.3** really is a bare major with no game misconduct — confirmed not only in the rule but against the
Reference Tables: **boarding is absent from Table 6** (automatic) and appears in **Table 7** (referee's
judgement) as 41.4. **IIHF Rule 41 has no match tier at all.** NHL **23.5** is the Stick Infractions Category
and is the right home for a slashing game misconduct; **23.6** is Physical Infractions at exactly the eight
fouls named. USA Hockey **411's list counts seventeen** and **604 is on it**. USA Hockey **604(c)/(d)/(e)** and
Hockey Canada **7.3(a)/(b)/(c)** are stated exactly, including that 604(d) triggers on reckless endangerment
where 7.3(b) triggers on violence *or* injury.

### 17.5 · Declared

- **NHL 61.8 reads *"There are no specified fines or suspensions for slashing"*** and Rule 61, unlike Rule 41,
  does **not** cross-refer to 23.5. A reader who checks Rule 61 first concludes the opposite of what the corpus
  says. The corpus is right — 23.5's own list carries slashing — but it must always cite **23.5, never 61.8**.
  **DF71.**
- **Illegal Check to the Head (Rule 48) is not in NHL 23.6's list.** Head-butting (47) is, and is a different
  foul. The corpus's hedge *"for most of these fouls"* survives it, but only just. **DF72.**
- The USA Hockey Casebook's Rule 603 Situation 2 carries an interpretation the corpus does not: a boarding
  penalty may be right where the hit was *not* hard if the player was defenceless, and wrong where it was much
  harder but the player was prepared. **That cuts against a force-only reading and is not in the corpus. DF73.**



---

## 18 · `safety-reviewer`, fourth pass — five majors, and the overstatement pattern at nine more sites

### 18.1 · I attached the wrong rule family to a defenceless-player bullet, and it was the WEAKER one

`offensive_zone_play.md`'s Common Mistakes bullet is about **hitting a winger facing the glass** — that is
boarding and checking from behind. I appended the **interference / late-hit** tiers to it, which are a
different rule family and **materially weaker than the rules that actually govern**. A reader learned the hit
reaches a major *"if the referee judges it reckless"*; under their own book there is **no minor option at all**.

**IIHF 43.2:** *"This infraction is considered serious and dangerous, therefore there is no option to award a
minor penalty for 'Checking from Behind'."* **43.3** is a major plus an **automatic** game misconduct.
**Hockey Canada 7.5(a)** is a minor **and** a game misconduct, never a bare one.

⚠️ **And the bullet contradicted its own section's facts block**, which already said *"driving into their back
is a major with no minor option (NHL and IIHF Rule 43.2)"*. Replaced with the correct family.

### 18.2 · The overstatement pattern, five more sites — and the corpus already had the right form

Five sites written this round said *"the cost is not a minor"*, *"not a two-minute foul"* or *"not merely a
minor"*. **Each is false standing alone, and two contradict themselves inside one clause** — *"a check there
is not a two-minute foul: 604(c) a minor…"* cites the rule that refutes it.

**The correct form was already in use in the same round** at seven other sites: *"not capped at a minor"*,
*"a minor is not the ceiling"*, *"none of the four caps it there"*. **The five were outliers, not the norm** —
which is the clearest evidence yet that this is a reflex and not a reasoning error. All five reframed.

**Running total: this is instance five through nine.**

### 18.3 · The British reader's book was missing from every pick site in the corpus

The pick/interference tier had propagated to **nine sites across four documents and named the IIHF at none of
them** — the book with the harshest reachable tier, and the one every British reader plays under.
`playing_without_the_puck.md` went further and said *"Only USA Hockey writes no tier above the minor inside
Rule 625"*, asserting the IIHF has one **without ever saying what it is**.

**IIHF 56.1 defines a *"pick"* in terms** — *"the action of a Player who checks an opponent who is not in
'possession' of the puck and is unaware of the impending check/hit"* — and **56.5 reaches a major plus a game
misconduct with nobody hurt.**

⚠️ **The reviewer found this by grepping outside the diff**, and closed by recommending the sweep be run
across all 36 documents before the gate clears. **I ran it.** It found **fifteen** sites stating an
interference or pick tier; **nine named other books and not the IIHF**, in `playing_without_the_puck.md`,
`time_and_space.md` and five in `breakouts.md`. All fixed; the sweep now returns **zero**.

**This is the round's clearest lesson about method:** the diff was never the right unit. Every propagation
failure this round was found by grepping the *proposition* corpus-wide, and never by reading the change.

### 18.4 · Also fixed

- **The §5 facts block had lost Hockey Canada's body-checking scope** when I rewrote its opening line. Only
  USA Hockey 604(a) survived — so a listener heard *"12U and below"* as the whole North American position,
  when **7.3(a)'s third limb is precisely the one saying age does not settle it**. Restored.
- **A narration artifact:** `7.3(a)/(b)/(c)` speaks as *"seven point three, clause a or (b) or (c)"* — the
  slash expands and the parentheses do not. Written out.

### 18.5 · Upheld

The boarding reframe at all three sites, **verified independently for the second time**. Every Table 5/6/7
number re-counted: IIHF Table 6 exactly twenty, Table 7 exactly five, NHL Table 5 thirteen non-fighting rows
with six injury-conditioned and three of those face-or-head. **§4's paragraph split held** — the *Major*
bullet narrates as two self-contained chunks with no mid-parenthesis break, verified against a freshly
generated tree rather than `scripts/speech/`. The `remark-corpus.mjs` change cannot drop a fact.

### 18.6 · Declared

- **DF74:** the reviewer notes it could not tell whether five rounds of overstated warnings have already
  trained readers to discount the accurate ones sitting beside them. That is a reader-test question.
- Blank lines around the new boarding bullet make that Common Mistakes list loose Markdown. `site-reviewer`.



---

## 19 · Tenth gate — the pattern recurred inside the fix for the pattern, and a checker now exists

### 19.1 · Instances ten and eleven, and where ten came from

⚠️ **Instance ten was written by §18.1's own fix.** My replacement text read *"and this one has no minor option
at all"* — **unscoped** — and then, three clauses later, named **Hockey Canada 7.5(a)**, which writes a minor.
USA Hockey 608(a) writes one too. The correctly scoped form was already in the corpus at `rules_primer.md:17`
(*"no minor option at all under the **NHL** … or the **IIHF**"*) and in this file's own facts block. **The new
site was the only one of four that dropped the scope.**

**Instance eleven:** *"getting it wrong is not a two-minute mistake: where checking is barred, USA Hockey 604
runs minor, …"* — the colon introduces the rule that refutes the sentence. Identical in shape to one of the
five §18.2 says it reframed, 240 lines from the correct form in the same file.

Both fixed. **Eleven instances, all mine, and seven of the round's passes have now found a defect introduced
by the previous pass's fix.**

### 19.2 · `scripts/check_absolutes.py` — and what it honestly cannot do

Eleven instances of one defect, none caught by me, is not a lesson that another written-down lesson will fix.
So there is now a **mechanical check**: it flags a sentence that denies a penalty tier **without naming a
book** and then **grants that tier** in the same sentence or the next. Instances five and ten are caught;
correctly scoped denials (*"no bare minor under USA Hockey 603(a)"*, *"no minor option under the NHL or the
IIHF"*) are not flagged, and *"bare"* is treated as self-scoping.

⚠️ **It does not catch instance one, and the docstring now says so in terms.** *"It is not one in any book"* is
refuted by the **rulebooks**, not by anything in the sentence — nothing in the text grants the minor, so there
is nothing there for a text checker to find. **A clean run means "no sentence contradicts itself", not "no
absolute is false."** Those are different claims and the script can only make the first. I wrote a stronger
docstring first and corrected it; overclaiming what a check covers is the same failure as §5's false
certification.

Run alongside the other three: `python3 scripts/check_absolutes.py`.

### 19.3 · C7 — the late hit reached §7's table and not §5, where a reader learns to check

The ceiling and USA Hockey's no-window rule went into five documents and into this file's **penalty table** —
and not into **§5**, the section that teaches checking. Its facts line and body said only *"the NHL allows a
check only immediately following loss of possession"*: **no ceiling, no IIHF frame, no 640(b)**. §15.2's title
was *"The document that owns body contact never said what the penalty was"*; the same document then said it in
the table and not in the section. Both layers now carry it, and the facts line was merged rather than split
because the block hit `HARD_MAX`.

### 19.4 · Also fixed

- **`game_management.md`'s late-hit passages were entirely USA-Hockey-framed** — a British reader got nothing.
  IIHF 56.1's *"reckless endangerment"* and 56.5 added.
- **"All four bind every division" reached the blockquote, facts and body and stopped.** Now in Common
  Mistakes and Key Takeaway 6.
- **One inference stated at two confidence levels** — `:365` asserted *"the definition still feeds 603's
  trigger"* flatly where `:373` hedges the parallel 640(g)/(h) question as *"not settled by the rulebook
  alone."* Levelled.

### 19.5 · Verified by the gate, independently, for the third time

Every claim in §§15–18 re-checked against the books: IIHF 43.2/43.3, 41.1/41.3/41.4, 56.1's pick definition
and *"objectively reasonable window"*, 56.4/56.5, Tables 6 (twenty) and 7 (five); NHL 20.4, Table 5's thirteen
and five, 23.5/23.6's eight, 41.5, 52.2 mandatory; USA Hockey 604's title and Note 1 scope, 608, 640(b)'s
no-window definition and 640(g)/(h)'s two **different** limiting formulas, 411's seventeen; Hockey Canada
4.8(b)(ii)'s *"in the same game"*, 7.2, 7.3's third limb, 7.5(a), 8.3(b)'s **two** limbs, and **all twelve
comparative claims in the rewritten 7.6/7.7 passage**. All held.

**DF44 unchanged:** §4 at **91,317** (+16.3%), longest line **6,163**, lines over 2,800 **18** — §8.6 records
19, off by one against the index; corrected there. The eighth gate's ruling *"no more prose into §4"* was
honoured by §§15–18, which added 3 characters.

### 19.6 · Still open

- ⚠️ **`safety-reviewer` has not seen §§19's fixes**, and the round's base rate says that matters.
- ⚠️ **`site-reviewer` has not seen §§15–19.** The loose-Markdown change to the Common Mistakes list is
  confirmed in the build and unfixed.
- ⚠️ **DF75 withdrawn — the gate was wrong, and I checked before acting.** It reported
  `playing_without_the_puck.md:613` and `forechecking_systems.md:817` as unscoped *"no minor option"*
  siblings. **Both are scoped**: `:613` ends *"(NHL Rules 43.2–43.5, IIHF Rules 43.2–43.3)"* and `:817`
  reads *"under the NHL and IIHF books, with no minor option"* — and that scoping is true, since 43.2 in
  both books writes no minor. `check_absolutes.py` did not flag them, correctly. **Nothing changed.**
  Recorded because a reviewer's finding is a hypothesis (§8.1), and acting on this one would have damaged
  two correct sentences.
- The staged tree — HEAD's diagram sources plus the new plugin — **has not been built**; every build this
  round included the unstaged diagram workstream.



---

## 20 · Eleventh gate — a defect in my own checker, and instance twelve

### 20.1 · `check_absolutes.py` was broken in exactly the way it existed to prevent

⚠️ **The gate found the bug by running my regexes against my own docstring's example, which is what I should
have done.** `BOOK.search(window)` short-circuited **before** the grant test, and `BOOK` matched any book name
within 110 characters — **including the book that refutes the denial.** So instance ten's entire subtype —
*"no minor option at all: … Hockey Canada 7.5(a) is a minor"* — was **structurally invisible**, and the
docstring claimed it was caught. That claim was wrong for two revisions.

**The fix is a distinction the first version missed:** a book named **after** the denial does not scope it,
because in instance ten the book appears *precisely because it grants the tier*. Scope now counts only from
**before** the denial, or **immediately after led by a preposition** — *"no minor option at all **under the
NHL** or the IIHF"*. Regression-tested against five cases: instances five and ten both flag; all three correct
scoping shapes do not.

**And the inline comment was wrong too.** It said the next-sentence window existed because a same-sentence
check *"would have missed the one that started it"* — instance one. Instance one is **not** catchable by this
method at all, which the docstring says two paragraphs above. Corrected.

⚠️ **§19.2 made overclaiming a defect in itself, and then the script overclaimed.** The docstring now states
what it covers and, at equal length, what it does not: a clean run means *"no sentence contradicts itself"*,
never *"no absolute is false"*. It also records that `DENY` is a phrase list, not a grammar.

### 20.2 · Instance twelve — I overstated while propagating in §18.3

Adding IIHF 56.5 to the pick sites was right; the **form** was not. **56.5 requires reckless endangerment**:
*"…if, in their judgment, the Player recklessly endangers their opponent by an 'interference or a late-hit'"*.
For a **late hit**, 56.1 supplies that element in terms — *"a 'late-hit' constitutes reckless endangerment"*.
**For a pick it does not.** Ten sites said only *"reaches a major plus a game misconduct with nobody hurt"*,
which overstates the exposure of a routine lateral step — and the corpus's own better form, carrying the
trigger, sat two documents away at `rules_primer.md:373`.

**Same direction as the other eleven.** All ten now carry *"where it recklessly endangers"*; two facts lines
were trimmed rather than allowed to lose it.

*(A note on why I missed this when verifying 56.5 earlier: the extraction hyphenates the word as `re- cklessly`
across a line break, so my grep for the trigger returned nothing and I read the absence as the rule being
unconditional. Whitespace normalisation does not fix a hyphen. **Search for a distinctive middle fragment, not
a whole word, in extracted PDF text.**)*

### 20.3 · The fifth instance of the layer-stopping shape, and the rendering regression

**`game_management.md`'s late-hit fix reached the body and stopped** — one changed line. The facts block in the
same subsection and Key Takeaway 10 still told a British reader it was a minor. Both now carry IIHF 56.5.
That is §12.1, §12.2, §15.1, §16.2, §19.3 and now this: **six times in one round.**

**And the loose-Markdown regression was worse than recorded.** Blank lines I inserted around two new bullets
made **all 34** Common Mistakes items in the corpus's safety document render `<p>`-wrapped, not just the two.
Three blank lines removed; the list is tight markdown again.

### 20.4 · What the gate closed by measuring rather than declaring

**The staged tree builds clean in isolation.** The gate checked out the index into a scratch directory with
`node_modules` symlinked and built it: 37 pages, 6,967 links resolving, **zero** literal asterisks in any facts
value. So the standing worry that *"every build this round included the unstaged diagram workstream"* is
answered — the plugin fix works on its own, and that no longer blocks.

**And it confirmed I was right to withdraw DF75.** Both sentences are scoped and the scoping is true. One
refinement worth having: `:613` scopes with a bare parenthetical citation where `:817` scopes in words, and
**for a listener the parenthetical is the weaker of the two.**

### 20.5 · DF44, corrected again

§4 is **91,426** characters — **+109 since §19.5 asserted "DF44 unchanged"**, added by §19's own fixes. Growth
against HEAD is **78,491 → 91,426, +16.5%**. Longest line **6,163**. ⚠️ **And a figure I had been reporting
misleadingly:** *"18 lines over 2,800"* is the **whole document**; **§4 itself has 11.** The record read as
though 18 were §4's.



---

## 21 · `safety-reviewer`, fifth pass — two criticals, and instance thirteen inside the fix for twelve

### 21.1 · A takeaway that said "these four" and named three

Key Takeaway 6 read *"Never hit a player from behind, near the head, or turned toward the boards — and these
four bind every division."* **That is three.** The missing one is **charging** — and it is the worst one to
drop, because it is the foul a non-check reader is most likely to commit believing the checking rules are not
theirs. It needs no check to land anywhere recognisable: USA Hockey 607 reaches *"skating a great distance for
the purpose of delivering a check"*, Hockey Canada 7.4(a) writes a minor with **no violence test at all**, and
neither is scoped by classification or division.

**The takeaway that exists to carry "all four bind every division" into the summary layer dropped one of the
four and mis-counted the rest** — and the same sentence then closed on *"in every one of the four"* meaning the
four **rulebooks**, so one phrase carried two referents. Both fixed. Confirmed in narration: the listener heard
*"these four"* followed by three.

### 21.2 · The facts layer stated a permission the reader's book does not grant

`forechecking_systems.md`'s facts block said *"A player may be checked after losing the puck only if the check
is 'rendered immediately following his loss of possession' (NHL 56.1)"* — **a permission, in the layer the site
surfaces separately and the podcast reads.** Under USA Hockey there is no window: 640(b) says such a player
*"are not eligible to be body checked"*, and 640(g)/(h) reach a major plus game misconduct and a match penalty.

**The correction had reached Common Mistakes and stopped** — the round's seventh instance of that shape. The
block held 10 of 11, so the room existed: it now carries the NHL/IIHF scope on one line and USA Hockey's
no-window rule on another.

### 21.3 · Instance thirteen, inside the fix for instance twelve

I fixed ten of **eleven** pick sites in §20.2. `breakouts.md:148` was the eleventh, and its own facts block two
lines away carried the qualifier correctly — **the body overstated while the facts layer was right**, which is
the inverse of every other layer failure this round. Fixed. **Thirteen instances.**

The **penalty comparison table** carried the same overstatement, and it is the row the document points readers
at. Now split by trigger: 56.5 reaches a major plus game misconduct with nobody hurt for a **late hit**, because
56.1 defines one as reckless endangerment; for a **pick** the element must be shown.

### 21.4 · I traded away a true safety conclusion

`game_management.md`'s facts line said *"…so it is a penalty in adult men's hockey too."* Adding the IIHF ceiling
in §20.3, **I removed that clause** — and it was **true**: 640 Note 2 and 640(a) carry the roughing route with no
classification exception. The adult-male reader was left with the exception and an inference (*"still reach it"*)
in place of the plain-English payoff.

⚠️ **Nothing forced the trim — that block held 8 of 11.** I compressed where I had room to split, and the thing
I compressed out was the conclusion. Restored, as two lines.

### 21.5 · Where a caveat could not enter the facts layer, and what I did instead

`offensive_zone_play.md`'s §pinch facts block is at **11 of 11**, which is why USA Hockey's no-window rule had
stayed in a blockquote — the layer the site surfaces past. The reviewer's instruction was explicit: *"Do not
compress the caveat to fit."* I did not, and I did not drop the `Convention:` line either, because it is the
cardinal-rule hedge on how aggressively to pinch.

**Instead it went into the body prose, ahead of the pinch criteria**, so the section now says the test under
USA Hockey is *whether you could have avoided the contact, not how late you were* before it teaches how late is
too late. Four layers carry it; **the facts layer is blocked behind the section split and declared (DF76).**

### 21.6 · Minors fixed

- `rules_primer.md:365` — the hedge governed the *premise* and the conclusion drawn from it was stated flat.
  Recast to *"may be boarding"*.
- `rules_primer.md:373` — an unlabelled inference in the **permissive** direction, three clauses from a sentence
  that labels its own. Labelled.
- `body_contact_and_battles.md:393` — the merged line read aloud as *"640(b) allows none"*, with the antecedent
  two clauses back. Now *"gives no window at all"*, same length.
- `uk_rules.md` KT7 — *"Yours is the stricter book"* stood bare. True of first-major ejection, false in general:
  the IIHF writes **no match penalty at all** for boarding, high-sticking or an illegal check to the head.
  Scoped, with the counter-example named.

### 21.7 · Declared

- **DF76** — the §pinch facts block at `HARD_MAX`; the USA Hockey caveat lives in four other layers.
- **Two narration items are pipeline behaviour, not regressions**, but this round put safety text into both:
  bare `(b)`/`(c)` after an expanded `7.3(a)` (15 such corpus-wide), and KT6 now long enough to split
  mid-possessive at *"the I-I-H-F"* (four others already do). **Nobody has heard audio.**
- Hazard classes 3, 5 and 6 unaudited this pass — nothing in the diff touches them, *"which is a reason to
  expect no new defect there and no reason at all to think there is none."*



---

## 22 · Twelfth gate — instance fourteen, a provenance defect, and a false claim about my own source shelf

### 22.1 · The claim I held unsweepable was sweepable, and the sweep supports the corpus

⚠️ **§14's D6 row said the IIHF Situation Handbook was not on disk. It is** —
`sources/iihf_situations.txt`, **8,941 lines, 465KB**, listed in `sources/README.md` all along. So the round's
IIHF negative-existence claims — the densest and least-swept dimension by that row's own admission — were
excused from checking **on a false premise about this repository's own shelf.** That is worse than an unchecked
claim, because it recorded a reason not to check.

**So I swept it. The handbook corroborates the corpus on every point it touches:**

| Claim | Handbook |
|---|---|
| *"The IIHF book writes no match penalty at all"* | **zero** occurrences of `match penalt` in 409,586 characters — this **strengthens** the claim, which had rested on the rulebook alone |
| *"no crouching clause"* | zero occurrences of `crouch` |
| *"the IIHF attaches no penalty of its own to the player whose head was down"* | **Situation 70.4** puts a head-down carrier taking a shoulder to the chest and calls the hit *"legal and NO contact with the head was made"* — the only penalty discussed is for re-entering without a helmet. **Corroborates.** |

**Nothing was contradicted, and one claim is now better supported than it was.** DF62 stands for the USA Hockey
Casebook and the IIHF **Disciplinary Code**, which genuinely are not on disk.

### 22.2 · Instance fourteen — a correction this diff makes four times, contradicted a fifth in the same file

`rules_primer.md:307` read *"and USA Hockey Rule 624(d) penalises it too."* This diff asserts at **four** other
sites that USA Hockey reaches **only the icing half**, at 624(d), *without* the offside limb and *without*
naming boarding. Verified: 624(d) is *"unnecessary contact with an opponent who is attempting to play the puck
in an obvious **icing** situation"* — icing only.

**It sat 58 lines before the corrected version, and it is the one a reader meets first.** Fixed, and it now
carries the three-books-verbatim finding the rest of the diff established.

### 22.3 · A provenance defect — D5, the dimension never swept

The charging bullet attributed a numeric blind-side test to the IIHF: *"the IIHF defines a blind-sided hit …
on a test **its** Interpretation 2 sets at 'an angle of approach outside a 90° peripheral point of view'."*

⚠️ **`90°` appears nowhere in `iihf_rules.txt`.** The test is **Hockey Canada's**, Interpretation 2 to Rule
7.4(a). The IIHF's own two quotes in that sentence are genuine — *"outside the latter's established peripheral
vision"*, *"is not considered to be a well-executed check"* — which is what made the misattribution invisible:
**a true quote and a false one sharing a pronoun.**

Rewritten so the IIHF's standard is described as the judgement call it is, and **Hockey Canada is named as the
only book that puts a number on it**. A corpus sweep found one other `90°` site and it is correctly attributed.

### 22.4 · Two counts that were not like-for-like

*"The IIHF's Table 6 lists twenty"* against *"the NHL's thirteen non-fighting rows"* is not a comparison.
**Table 6's twenty includes four fighting entries** — I counted them: willingness to fight, the dangerous
puncher, fighting outside the period, and a goalkeeper roughing punch. NHL Table 5 is **eighteen rows, thirteen
non-fighting plus five fighting.** So the honest pair is twenty against eighteen, or sixteen against thirteen.

All three comparison sites now say so. **A listener hears two numbers**, and twenty against thirteen overstates
the IIHF's breadth by a third.

### 22.5 · Also fixed

- **`game_management.md` again** — the late-hit ceiling reached lines 721 and 977 and **not** 121 (a facts
  line) or 128 (its body bullet), which said only *"a late hit and a penalty"*. To a listener protecting a
  lead, *"a penalty"* is two minutes. §21.4 opened that block, counted its lines, and did not see these two.
  **Seventh instance of the layer-stopping shape.**
- **An unsourced frequency claim in KT4** — *"which is the usual case, since a misconduct normally arrives with
  one"* — in a sentence otherwise built entirely from rule text. Reframed to what the books state: 7.7(a) and
  7.5(a) both write the pair, and how often it happens in play is not something a rulebook says.
- **`scripts/check_absolutes.py`'s own docstring said "eleven instances". It is fourteen** — stale by three in
  the artefact built to police the count. Corrected, **with a note that the number is maintained by hand and
  should be assumed low.**

### 22.6 · DF44

§4 is **91,513** characters — the gate's figure, and 104 above §20.5's. Longest line **6,163**. 18 lines over
2,800 document-wide, **11 of them in §4**.

### 22.7 · Coverage for §§20–22

| | Dimension | Status |
|---|---|---|
| **D1** rules accuracy | ✅ the twelfth gate independently re-verified **every** claim in §§20–21 against all four books and listed them; all held. §22's own three new claims (624(d)'s icing-only reach, Hockey Canada's 90° test, Table 6's four fighting rows) were verified here by direct grep |
| **D3** rule-set divergence | ✅ 624(d)'s narrower reach is *the* divergence instance fourteen was hiding; the Table 6/Table 5 counts are now like-for-like |
| **D5** provenance | ⚠️ **one defect found and fixed (§22.3) — the first D5 finding of the round that was not found by another dimension.** Still never swept. `source-verifier` has never run |
| **D6** negative existence | ✅ **swept against the Situation Handbook for the first time (§22.1)** — three claims corroborated, none contradicted. DF62 stands for the Casebook and the Disciplinary Code |
| **D9** summary layer | ⚠️ seventh layer-stopping instance found and fixed (§22.5) |
| **D11** reader safety | ❌ **`safety-reviewer` has not seen §21's fixes or §22's.** The round's base rate is eight passes each finding a defect in the previous pass's repair |
| **D12** read-aloud | ❌ **nobody has heard audio in this round.** Two known narration items are declared pipeline behaviour (§21.7) |
| **D15** rendered site | ❌ **`site-reviewer` has not seen §§15–22**, and this commit changes how *every* facts value renders. The twelfth gate built the working tree successfully but that tree carries the unstaged diagram workstream; **the staged tree alone is unbuilt** |
| **D2, D4, D7, D8, D10, D13, D14** | declared — no citation, number, coaching choice, folklore or structural change in §§20–22 beyond those named |

**Three dimensions are open and two of them cannot be closed by any agent** — D12 needs a listener and D15's
readability half needs a reader. **D11 can be closed and has not been.**


---

## 23 · `safety-reviewer`, sixth pass — three criticals, and §21.5's own layer count was wrong

The pass the twelfth gate blocked on. **All three criticals verified by grep before anything was
changed** — the recorded lesson from earlier in this round is that a reviewer's finding is a
hypothesis, and two false findings were written into the corpus from a report in §17.

### 23.1 · CRITICAL — the NHL's quote attributed to the IIHF, dropping the IIHF's second condition

`forechecking_systems.md`'s facts line read *"the check is 'rendered immediately following his loss
of possession' — **NHL and IIHF 56.1** only"*.

⚠️ **`grep -c "rendered immediately"` returns 1 in `nhl_rules.txt` and 0 in `iihf_rules.txt`,
`usah.txt`, `hc.txt` and `iihf_situations.txt`.** The quotation is the NHL's alone, and *"his loss of
possession"* is the NHL's house style, which the IIHF book does not use.

**The IIHF writes two conditions where the NHL writes one**, and the corpus gave the IIHF reader the
one-condition test:

> *"The Player deemed in 'possession' of the puck may be checked legally, provided the check is
> rendered immediately following them 'loss of control' **and their opponent still finds themself
> within an 'objectively reasonable window of opportunity'** to deliver such a check"* — IIHF 56.1
>
> *"…is subject to a bodycheck so long as **the aggressor is in the immediate vicinity** of the
> skater with the puck."* — IIHF 56.1

A British player who arrives immediately but from distance satisfied the line as written and was
delivering what 56.1 calls *"reckless endangerment"*, which 56.5 takes to a major plus a game
misconduct **with nobody hurt**. This was in the facts layer — the layer the site surfaces separately
and the podcast reads.

⚠️ **This is §22.3's exact shape one section later: a true quote from one book, attributed to two.**
And `rules_primer.md:373` already carried the IIHF's correct wording, so the corpus knew the right
text while this line was being written. Split into two facts lines, and the two-condition test is now
in the body and in Common Mistakes as well.

### 23.2 · CRITICAL — §21.2's scoping reached the facts block and stopped at the body

`forechecking_systems.md:481` — inside the **"Pinch when:"** criteria, the list a reader acts on —
still named a bare *"Rule 56.1"* with no book, and told the reader a window exists. There is no Rule
56.1 in USA Hockey's book and USA Hockey grants no window: 640(b) — *"They are considered to be
vulnerable or defenseless and **are not eligible to be body checked**"* — with 640(g) reaching a
major plus a game misconduct and 640(h) a match penalty.

**The eighth instance this round of a correction reaching one layer and stopping**, and it was in the
file §21.2 was repairing. Fixed in the body, which now separates all three books explicitly.

### 23.3 · CRITICAL — DF76 covered adding a caveat, not stating the opposing permission

`offensive_zone_play.md`'s §pinch facts line stated the NHL permission — *"56.1 allows a check only
'immediately following' the loss"* — **with no book named**, in the one block genuinely at
`HARD_MAX`. DF76 declared that the USA Hockey caveat could not enter that block. It did not cover the
block *asserting the permission the section's own body says does not exist there*.

**And §21.5's claim that four layers carry the caveat was wrong. Two do, and both are body prose** —
line 702 (sound, and correctly ahead of the criteria) and line 740, which is a **blockquote**, the
container a round-10 critical established does not reach a reader who skips prose. Common Mistakes
and Key Takeaway 10 carried the IIHF ceiling and **neither carried the USA Hockey scope**, and
neither is capped.

**Fixed without needing a twelfth facts line:** cutting the permission clause *shortened* the block,
and the scope went into Common Mistakes and KT10, which had room. **DF76 now describes a real
constraint rather than three absent layers.**

### 23.4 · MAJOR — Hockey Canada's nobody-hurt limb was missing from all thirteen sites

Every site read *"Hockey Canada 8.3(b) makes one mandatory where it injures"*, in explicit contrast
with *"IIHF 56.5 reaches a major plus a game misconduct **with nobody hurt**"*. **8.3(b) has two
sentences and the corpus carried only the second:**

> *"A Major penalty and Game Misconduct penalty, **at the discretion of the Referee, based on the
> degree of violence of the impact**, may be assessed to any player who interferes with an opposing
> player. A Major penalty and Game Misconduct penalty **will** be assessed to any player who injures
> an opponent by an interference infraction that would otherwise call for a Minor penalty."*

So the contrast told every Canadian reader that their book needs an injury for that tier. It does not.
These sentences exist to deter, and the omission removed the deterrent for the readership Hockey
Canada governs.

⚠️ **No propagation check could have caught this: the omission had propagated perfectly to all
thirteen sites.** Fixed at all thirteen; one facts block needed a split rather than a compression,
and had room at 9 of 11.

### 23.5 · MAJOR — the 640(a) chain stated flat in three layers, where the corpus hedges its sibling

*"640 Note 2 and 640(a) still reach it as roughing there, so it is a penalty in adult men's hockey
too"* — §21.4 was right to restore this conclusion and the conclusion is very probably right, but
640(a) does not say what the chain needs:

> *"**(a)** A minor or double minor penalty shall be assessed to any player who is deemed guilty of
> unnecessary roughness (roughing) **as outlined in Note 1 above**."*

Note 1 is the after-the-whistle definition. **The late hit is Note 2's.** So the last link is a
reading, not the book's words — and `rules_primer.md:373` already labels the neighbouring inference
exactly that way (*"not settled by the rulebook alone"*), while three sites in `game_management.md`
stated the sibling flat. **The round's signature shape, written inside the fix for §20.3's trim.**

Conclusion kept at all three layers; the one unwritten link is now named as a reading. Direction of
the original error was safe for the reader's body — the defect is that a reader who checks the book
finds 640(a) pointing at Note 1 and discounts the warning.

### 23.6 · Minors fixed

- **§22.4 said "all three comparison sites now say so". Two of five did.** `rules_primer.md:732` and
  `:847` were corrected; **both `uk_rules.md` sites were not**, and still ran twenty against thirteen
  — the overstatement §22.4 itself measured at a third. Both now carry the three fighting rows (46.1, 46.5, 46.9) and
  the like-for-like pair of seventeen against thirteen.
- **USA Hockey 608(a)'s floor was in no summary layer** of `body_contact_and_battles.md`. Both
  universals there are true (*"no book here lets you off with two minutes"*), but the reader was
  never told what USA Hockey writes: *"A minor plus a misconduct penalty, or a major plus a game
  misconduct penalty."* Errs strict, so not a hazard — but it is the one book of four whose floor was
  absent, and a reader who finds it may conclude the comparison was inflated. Added at both sites.
  ⚠️ **Stated without a duration on purpose:** a misconduct is 10 minutes under 404(a), but 404's own
  Note lets affiliates cut it to 6:00 or 8:00 in shorter-period games, so *"ten minutes"* would have
  been instance fifteen.
- `forechecking_systems.md:470` read-aloud — *"NHL and IIHF 56.1 **only**"* put the scoping word
  where a listener attaches it to the rule number rather than the books. The rewrite leads with the
  book.

### 23.7 · What §23 could not close

- **The reviewer read four of the ten staged files properly and sampled six.** `rules_primer.md` §4
  is 91,513 characters and roughly a fifth of it was read. Instance sixteen, if it is about hooking,
  slashing, tripping, cross-checking, kneeing, slew-footing or goaltender interference, was not in
  front of anyone.
- ⚠️ **Both Majors are cases where the corpus was SILENT about a limb rather than wrong about one,
  and silence has no grep.** Every method this round has relied on — including
  `check_absolutes.py` — searches for wrong words. Neither Major would have been found by any of them.
- **`usah_case.txt` and the IIHF Disciplinary Code are still not on disk** (DF62). Several claims
  upheld here are explicitly conditioned on that absence.
- **Nobody has heard audio.** D12 stands open, and KT6 is longer now than when §21.7 flagged it for
  splitting mid-possessive.
- **The largest gap is not a rulebook question at all.** Everything in §23 is textual, and the
  rulebook is the part that greps. Whether a fourteen-year-old who reads *"get your skates parallel
  to the wall and take it on the forearm and hip"* actually arrives in that orientation with two
  hundred pounds closing is in no rulebook and was not checked by anyone.

---

## 24 · Thirteenth gate — BLOCK, and instance sixteen was in §23's own repair

### 24.1 · ⚠️ Instance sixteen, in the Common Mistakes bullet §23 added

The bullet read *"The commonest illegal check in the game, and **it is not a two-minute matter**."*

**It is a two-minute matter in two books of four**, and the gate quoted both:

> NHL 56.2(iii) — *"A minor penalty for interference can be imposed: … (iii) On any player who
> deliberately checks an opponent, including the goalkeeper, who is not in possession of the puck"*
>
> USA Hockey 640(b) — *"A **minor penalty** shall be assessed (except Adult Male Classifications)…"*

Verified by grep before acting. **The corpus's correct form — "not *capped at* two minutes" — sits four
lines above in the same file** and is used in the boarding bullet directly below. Rewritten to it, with
both minors named.

⚠️ **This is the pattern's sixteenth instance and its fourth inside a fix for itself.** It went into
the layer the summary reader gets, in one of the six files §23.7 says were sampled rather than read —
and §23.7 predicted exactly this: *"instance sixteen, if it is about … was not in front of anyone."*
It was about the one subject the reviewer had just been reading.

**`check_absolutes.py` cannot see it, and says so in its own docstring:** `DENY` is a phrase list, not
a grammar, and *"it is not a two-minute matter"* is not on the list. The docstring's count of fourteen
was accurate when written and shipped one low.

### 24.2 · A self-refuting claim at two sites, one of them added in §23

*"Under the IIHF book the distance is not the test at all"* — in a sentence that quotes the IIHF text
making proximity a condition:

> *"…is subject to a bodycheck so long as the aggressor is in the **immediate vicinity** of the skater
> with the puck."* — IIHF 56.1, `iihf_rules.txt:4675`

What is true is that the IIHF puts **no measurable distance** on it, where Hockey Canada gives "an arm
and stick length". Rescoped at `rules_primer.md:373` and `offensive_zone_play.md:740`.

### 24.3 · A bare superlative, and the ninth layer-stopping instance

- *"The commonest illegal check in the game"* had **no source and no owner**, in a document that
  attaches provenance to its other ranking claim (*"the most-called penalty in the NHL — 16.6% of all
  calls in the 400-game sample"*). Cut to "Common".
- **§23.6 added USA Hockey 608(a)'s floor to Common Mistakes and Key Takeaway 6 and stopped short of
  the facts block for the same section.** Ninth instance. The block is at `HARD_MAX`, so the line was
  tightened to 194 characters rather than the fact being dropped — nothing was compressed out.

### 24.4 · The record was wrong about the content it describes

§23.6 said both `uk_rules.md` sites "now carry the **four** fighting rows". They carry **three**, and
three is correct — IIHF Table 6's fighting entries are 46.1, 46.5 and 46.9. **The content was right
and the record was wrong about it**, which is the inverse of every other error this round and is worse
for it: a future reader trusts the record.

### 24.5 · What the gate independently verified and upheld

It re-derived roughly forty rule citations from the five books on disk and every one matched: IIHF
Tables 6 and 7 counted by hand, NHL Table 5's thirteen non-fighting clauses split seven unconditional
/ three face-or-head / three any-injury, USA Hockey 411's seventeen aggressive infractions, 404(b),
608(a), 624(d), 640(b)/(e)/(g)/(h), Hockey Canada 4.8, 7.5, 7.6, 7.7, 8.1, 8.3, 8.7, and IIHF 20.4,
20.5, 28.1, 41.3, 56.1, 56.5. It also **regression-tested `check_absolutes.py` in an isolated tree**
and confirmed its docstring's negative claims are honest.

It built the staged tree end to end and confirmed the `remark-corpus.mjs` fix: **zero literal asterisks
remain in any `facts__value` corpus-wide**, and 3,745 anchors resolve — so the heading renames broke
nothing.

### 24.6 · Coverage for §§23–24

| | Dimension | Status |
|---|---|---|
| **D1** rules accuracy | ⚠️ **two false claims found and fixed (§§24.1–24.2)**; ~40 further citations re-derived by the gate and upheld |
| **D3** rule-set divergence | ✅ the IIHF's judged-proximity condition is now stated as such rather than denied |
| **D5** provenance | ⚠️ one unsourced superlative found and cut. **`source-verifier` has swept 39 of 629 citations and has not run this round** |
| **D6** negative existence | ✅ no new negative-existence claim in §§23–24 |
| **D9** summary layer | ⚠️ **ninth layer-stopping instance found and fixed** (§24.3) |
| **D11** reader safety | ❌ **`safety-reviewer` has still not seen §23's or §24's fixes.** This is the round's standing gap and §23 found three criticals inside it |
| **D12** read-aloud | ❌ **nobody has heard audio in this round.** Two narration items declared at §21.7 |
| **D15** rendered site | ⚠️ the gate **built** the staged tree and checked the facts markup; nobody opened a browser |
| **D2, D4, D7, D8, D10, D13, D14** | declared — no citation, number, coaching choice, folklore or structural change in §§23–24 beyond those named |

⚠️ **Six of the ten staged files were sampled rather than read**, and §24.1 was found in one of the
six. `rules_primer.md` §4 is 91,513 characters and roughly a fifth has been read across the whole
round. **That is a declaration, not a clearance.**

---

## 25 · `safety-reviewer`, seventh pass — instance seventeen, and a mandatory match penalty nobody had written down

### 25.1 · ⚠️ CRITICAL — instance seventeen was the same sentence, one file over

`offensive_zone_play.md:884` carried *"arriving a beat late is **not a two-minute matter**"* — the
**identical phrasing** the thirteenth gate condemned at `body_contact_and_battles.md:1091`, and a `+`
line in this same staged diff. **§24.1 rewrote one occurrence and did not grep for the other.**

It is false in the one book the sentence names. USA Hockey 640(b), `usah.txt:5110`:

> *"**A minor penalty shall be assessed** (except Adult Male Classifications) to any player who
> delivers an avoidable body check to an opponent who is no longer in control of the puck."*

— and in adult men, by the chain the sentence's own next clause supplies, 640 Note 2 → 640(a) writes
*"a minor or double minor penalty"*. **The sentence was refuted by the two sentences after it.**

⚠️ **The tenth layer-stopping instance, and the fifth stop inside a fix for the pattern itself.** It
sat in Common Mistakes — the layer the site surfaces and the podcast reads — while the facts line, the
body and Key Takeaway 10 in the same file were all correct. `check_absolutes.py` is clean and did not
see it, for the reason its own docstring gives.

**Fixed, and the phrase is now gone from the corpus:** `grep -rc "not a two-minute matter" content/`
returns nothing.

### 25.2 · MAJOR — the bullet §24 rewrote named three books of four

Two omissions in one sentence:

- **USA Hockey's minor without its carve-out.** Twelve sites carry *"except Adult Male
  Classifications"* with the 640 Note 2 fallback; the bullet §24.1 rewrote was not one of them. The
  adult-league reader checks 640(b), finds the carve-out, and discards with it the sentence that
  carries **no classification limb at all** — *"are not eligible to be body checked"* — which is the
  one the bullet needs him to obey.
- **Hockey Canada absent entirely**, at the very proposition §23.4 found it missing from. Added, with
  8.3's **arm and stick length at the instant of release** — the only measurable on-ice test any of
  the four books provides, and the one a player could actually judge.

### 25.3 · MAJOR — a mandatory match penalty absent from the document that teaches the hit

**Hockey Canada 7.5(c)**, `hc.txt:6176-6179`:

> *"A **Match penalty will be assessed** to any player who pushes, body-checks, cross-checks, or hits
> an opposing player in any manner from behind into the boards or goal frame, **in such a way that the
> player is unable to protect or defend themselves**."*

Mandatory. **No violence threshold and no injury threshold.** It describes precisely the hit
`body_contact_and_battles.md` exists to prevent, and it appeared **nowhere in that file** — not in the
facts block, the body, Common Mistakes or Key Takeaways. NHL 43.4 was missing too.

⚠️ **§24.3's tightening caused this.** Compressing the facts line introduced an explicit floor/ceiling
frame and gave Hockey Canada a floor with no ceiling, so it read as though it had none — and **read
aloud the line ended on the lightest tier in it**. §24.3 said "nothing was compressed out", which was
true of the words and false of the meaning. Both match penalties now in the facts line (198 chars),
the body paragraph, Key Takeaway 6 and `rules_primer.md`'s four-book table.

### 25.4 · Upheld, and independently

The pass located and quoted every rule it relied on. Notably it **swept Hockey Canada 8.3(b)
corpus-wide and found sixteen sites, all sixteen carrying the discretionary limb** — §23.4's repair
holds. It confirmed §23.5's 640(a) hedge propagated to all three `game_management.md` sites and is
correctly *absent* from the seven that assert only Note 2's words. It confirmed §24.2's rescoping of
the IIHF proximity condition is the textually supported reading, both conditions being conjunctive.
And it read hazard classes 3 and 6 by sampling: no prescriptive medical claim, no timing, no
instruction to retaliate.

### 25.5 · Open

- **A seventeenth instance on a proposition nobody swept.** This pass swept propositions, not
  documents — the four named plus the phrase from §24.1. Hooking, slashing, tripping, cross-checking,
  kneeing, slew-footing and goaltender interference were not in front of anyone, and `rules_primer.md`
  §4 is where they live. **§23.7 predicted instance sixteen in those exact words and was right; the
  prediction is repeated here rather than closed.**
- **The method finds what a heading advertises.** MAJOR §25.3 was found because a section called *"The
  four that cause the injuries"* advertised that a ceiling belonged there. A block whose heading does
  not advertise its safety point would pass.
- **One unsourced hazard-class-5 claim outside this scope** — `conditioning_and_recovery.md:516`,
  *"generally regarded as safe and beneficial for young athletes"*, in a document that PMIDs
  everything else. Not in the staged set; recorded here so it is not lost.
- **Nobody has heard audio**, and §25.3's read-aloud limb in particular deserves a listener.
- `usah_case.txt` and the IIHF Disciplinary Code remain off disk (DF62), so the adult-men's 640(g)/(h)
  chain stays an inference the corpus correctly labels as one.

---

## 26 · Fourteenth gate — instance eighteen, in the direction that hurts

### 26.1 · ⚠️ The prediction came true, on the word it named

§25.5's first open bullet listed the propositions nobody had swept: *"hooking, slashing, **tripping**,
cross-checking, kneeing, slew-footing and goaltender interference."* The gate swept them and found it
on the second word.

`defending_the_rush.md:832`, Key Takeaway 6:

> *"…but if you play the puck first and trip them in doing so, **it is only a minor**, which is the
> whole reason the instruction is stick-on-puck."*

**True of the NHL. False of the IIHF**, which is the British reader's book: 57.3 lets the referee
assess a major, 57.4 a major plus a game misconduct, and **tripping 57.4 is on Reference Table 7** —
the majors that end your game on the first one. I counted Table 7 by hand off `iihf_rules.txt`:
Boarding 41.4, Charging 42.4, Elbowing 45.4, Interference 56.5, **Tripping 57.4**.

⚠️ **Eleventh layer-stopping instance, and this file already had it right twice.** The facts line at
`:450` names 57.3 and 57.4. Key Takeaway 5 at `:831` names them. **Key Takeaway 6, the next line,
capped it at a minor** — and the sentence after invites the reader to carry the cap across:
*"The IIHF's Rule 24.8 mirrors 57.3."*

### 26.2 · ⚠️ It is the eighteenth instance and the FIRST in the understated direction

Seventeen instances overstated a ceiling. **This one capped it.** The two are not equally bad:

> An overstated ceiling teaches a reader to discount the accurate warnings beside it.
> **An understated one gets them hurt.**

Every method built this round — the phrase sweeps, the layer audits, `check_absolutes.py` — was
pointed at the overstated direction, because that is the only direction anyone had seen.

### 26.3 · `check_absolutes.py` learned the mirror image, and the first two attempts were wrong

**Attempt one: added the phrases to `DENY`. It does not work there, and the regression test said so.**
`DENY` feeds a *"denies a tier and then GRANTS it"* test; a cap grants nothing, so nothing fires. The
addition was backed out.

**Attempt two: a bare-phrase `CAP` rule.** It flagged `special_teams.md:385` — *"A goal releases only
a minor or bench minor"* — which is a **true sentence**, and where the phrase is the object of
"releases" rather than a claim about a tier.

**What shipped:** a `CAP` rule requiring a **copula** (`is|are|costs|carries|…` + `only|just|merely` +
`a minor`), scoped on **the clause immediately before the cap** rather than the sentence. The clause
matters: instance eighteen's sentence *did* name the NHL — for a different clause, about penalty
shots — so a whole-sentence check cleared it.

Unit-tested on all three shapes: unscoped cap **flagged**, scoped cap (*"Under the NHL book it is only
a minor"*) **skipped**, *"releases only a minor (NHL and IIHF Rule 16.2)"* **not matched**. The
docstring's instance count went from fourteen to eighteen — it had shipped stale twice.

⚠️ **A file-level regression probe was attempted twice and constructed wrongly both times** — once
leaving `**The NHL**` in place so the clause was correctly scoped, once against an anchor that had
already changed. The unit test is the evidence; the file probe was abandoned rather than left to
produce a false pass.

### 26.4 · Also fixed

- `rules_primer.md:378` described Hockey Canada 7.5(c) as *"makes it a match penalty"* where the §10
  table and `body_contact_and_battles.md` both say **mandatory**. The strongest word had reached two
  layers of three.

### 26.5 · Coverage for §§25–26

| | Dimension | Status |
|---|---|---|
| **D1** rules accuracy | ⚠️ **instance eighteen found and fixed**; the gate re-derived ~30 further citations, including IIHF Tables 6 and 7 and NHL Table 5, all upheld |
| **D3** rule-set divergence | ⚠️ **this was the divergence**: an NHL cap carried into the IIHF book. Now scoped, with the IIHF tiers named |
| **D5** provenance | ❌ **`source-verifier` has swept 39 of 629 citations and has not run this round** |
| **D6** negative existence | ✅ none added in §§25–26 |
| **D9** summary layer | ⚠️ **eleventh layer-stopping instance found and fixed** |
| **D11** reader safety | ⚠️ §25 was the seventh `safety-reviewer` pass; **§26's own fixes have not been reviewed by anyone but the gate**, which re-derived their rule content but reads a diff rather than a document |
| **D12** read-aloud | ❌ **nobody has heard audio.** The `Major` bullet at `rules_primer.md:332` grew again and now splits into two paragraphs of 2,280 and 891 characters; §19.1 records a previous growth of that same bullet splitting a speech chunk mid-sentence. Unmeasured |
| **D15** rendered site | ⚠️ the gate built the staged tree and checked the DOM; **§11's 28-combination browser run predates §§12–26** |
| **D2, D4, D7, D8, D10, D13, D14** | declared — no citation, number, coaching choice, folklore or structural change in §§25–26 beyond those named |

⚠️ **Standing and unclosed:** six of ten staged files were sampled rather than read, and
`rules_primer.md` §4 is 91,513 characters of which roughly a fifth has been read across twenty-six
sections of review. **§25.5 predicted instance eighteen and was right. That prediction is renewed
here, not closed** — hooking, slashing, cross-checking, kneeing, slew-footing and goaltender
interference remain unswept in the understated direction, which no method has ever looked for.

---

## 27 · Fifteenth and sixteenth gates — instance twenty denied a reader a clause their own book grants

### 27.1 · ⚠️ The fix for nineteen created twenty, and the commit contradicted itself

§26.1 scoped a tripping cap to the NHL. **It overcorrected.** The new text asserted *"That conversion
is the NHL's"* and *"Do not carry that cap into the IIHF book"* — and the IIHF book contains the
conversion **verbatim**, `iihf_rules.txt:2477`:

> *"If, in the opinion of the Referee, a Player makes contact with the puck first and subsequently
> trips the opponent in so doing, no "Penalty Shot" will be awarded, but a **Minor Penalty** for
> "tripping" **shall be assessed**."*

Word for word NHL 57.3, and mandatory in both. **The claim was refuted three times, twice inside the
tree being committed:** ten lines below at `:578` (*"IIHF Rule 24.8 mirrors NHL 57.3 … including the
puck-first carve-out"*), in the staged `body_contact_and_battles.md:1032` (*"Playing the puck first
does not save you the minor in the NHL or the IIHF"*), and by the rules owner at
`rules_primer.md:772`.

⚠️ **The direction is the one that matters.** Nineteen instances misstated a ceiling; this one
**withheld a defence** — it told an IIHF reader they had no protection their own rulebook grants them
in words.

**What is actually true**, and is now what both sites say: the IIHF grants the same carve-out and the
same minor, and **adds** 57.3 and 57.4 tiers the NHL's Rule 57 has no equivalent of. **Whether 24.8's
mandatory "shall" or 57.3's discretion governs a reckless puck-first trip, the book does not say** —
so the tension is written down rather than resolved by invention.

### 27.2 · Layer-stopping thirteen

`grep -n "Table 7" content/systems/defending_the_rush.md` returned **one hit, in Key Takeaway 6**. A
takeaway asserted an ejection risk the body it summarises never stated and no facts block carried.
That is §12.1's shape exactly — *"the fix went into §4's Major bullet and nowhere else"* — recorded as
found and fixed fifteen sections ago. Now in the facts block, the body and the takeaway.

### 27.3 · The §7.1 repair welded the wrong role's reasoning to the right fact

§7.1 restored *"the first line of defence if you lose it"* to the `offensive_zone_play.md` facts
block and carried with it *"without them, every turnover is a clean escape"*. **In the body that
clause belongs to the player BELOW the puck**, not above. Restoring a proposition is not licence to
attach a neighbouring role's rationale to it. The line now says word for word what the body's
above-puck bullet says.

### 27.4 · `check_absolutes.py` was wired into nothing

It is a checker written after twenty instances of one defect, and **nothing ran it** — not
`git-guard.sh`, not CI, not `CLAUDE.md`'s commit list. Its own docstring records that its instance
count *"had shipped stale twice"*, and §26.3 records that its second rule shipped **inert at the wrong
indent** and reported clean for a whole gate cycle. A checker nobody runs decays; a checker nobody
runs and that has already failed twice is theatre.

**It now runs in `.claude/hooks/git-guard.sh` beside `check_links.py` and `check_facts.py`**, so a
commit staging `content/` cannot proceed past it. The hook's own summary line was updated to say so.

### 27.5 · Cleared at the sixteenth gate

The fifteenth gate's six blocks: the CAP rule verified **nested and firing** (exit 1 against HEAD's
content flagging instance eighteen, exit 0 against the staged tree, exit codes read directly and
adversarially confirmed to fire on non-final sentences); `round_34` correctly not staged;
`round_35`'s declaration of what ships verified accurate against the staged set; and
`content-reviewer` run, with §7's three majors repaired.

### 27.6 · Open, and two are now blocking a clean gate

- ❌ **`safety-reviewer` has not seen the `defending_the_rush.md` rewrites** at `:568`, `:578` and
  `:832`. Every one is a penalty-tier and ejection claim, and §27.1 is what the last unreviewed
  rewrite produced.
- ❌ **`site-reviewer` has not seen `remark-corpus.mjs`**, which changes how **every facts value in
  the corpus renders**. §11's 28-combination browser run predates §§12–27. The gate built the tree
  and checked the DOM; nobody opened a browser.
- ⚠️ **`project/content_style_guide.md` is modified and unstaged.** Committing content while a
  governing document is mid-edit is the `239f70d` race by definition. One must land before the other.
- **`round_35_readability.md` cites §14 of `round_34_diagram_notation.md`, which is untracked** — a
  reader of this commit cannot follow the reference.
- **No citation in this diff has been refetched.** `source-verifier` has swept 39 of 629.
- **Nobody has heard any of it.**

---

## 28 · `safety-reviewer` eighth pass, and `site-reviewer` — two criticals, and a tool outage

### 28.1 · ⚠️ CRITICAL — a risk-pricing section priced a foul at a minor for the wrong book

`risk_management.md` exists to price the expected value of committing a foul. It priced a puck-first
trip at a minor **in all four layers** — facts `:538`, body `:554`, Common Mistakes `:668`, Key
Takeaway 9 — citing only NHL 57.3. **Fourteenth layer-stopping instance**, and the file's own header
promises the flags: *"Playing in Britain? The IIHF flags are yours."* It flagged nothing.

Verified from the books:

| Book | A reckless trip |
|---|---|
| **NHL Rule 57** | stops at a minor — but **21.1** reaches a match penalty for deliberate injury *"in any manner"* |
| **IIHF 57.3 / 57.4** | major, and major plus game misconduct, both discretionary |
| **USA Hockey 639(b)** | *"A major penalty plus a game misconduct penalty **shall** be assessed"* — **mandatory**; 639(c) a match penalty |
| **Hockey Canada 8.6(b)** | major plus game misconduct, **mandatory on injury** |

⚠️ **A reader acting on the section's price under any book but the NHL's Rule 57 is ejected, not
boxed** — and the section's whole thesis is that the price is worth paying. Fixed in all four layers.

### 28.2 · ⚠️ CRITICAL — the block withheld a defence USA Hockey grants

`defending_the_rush.md`'s Breakaways facts block addressed a USA Hockey reader by name — 616(a)'s
diagonal test — and gave them only the **harsher** half of their own book. It never told them that
**USA Hockey's carve-out is stronger than the NHL's**, `usah.txt:5061`:

> *"**no penalty shall be assessed under this rule** if, in the opinion of the Referee, the player was
> **clearly hook-checking or poke-checking the puck for the purpose of gaining possession**."*

That is the exact action the section teaches — *"stick on the puck only"*. Nor that 639(b) makes the
major-plus-game-misconduct pair **mandatory** above it. Both now in the block.

### 28.3 · Instance twenty-one — a MIS-SCOPED cap, which the checker cannot see

*"**The NHL** caps it at a minor (57.2)."* NHL **Rule 57** does; the NHL **book** does not — 21.1
reaches a match penalty *"in any manner"*, and `rules_primer.md:352` already said so. Written inside
the fix for instance twenty. **The twenty-first instance, and the third in the understated direction.**

⚠️ **`check_absolutes.py` is structurally blind to it and its docstring says why:** a book named
*before* the denial counts as scope. `**the NHL** caps it at a minor` is scoped to the right book and
still wrong inside it. **A clean run is not evidence for a mis-scoped cap.**

### 28.4 · The checker earned its place on its first live run

Wired into `git-guard.sh` in §27.4, it immediately flagged `risk_management.md:733` — *"buys a
**penalty shot** against (Rule 57.3), **not a minor**"* — unscoped, and false under **USA Hockey
616(a)**, which reads *"A penalty shot/**optional minor penalty** shall be awarded"*. A pre-existing
defect in a Key Takeaway, found by a rule written two hours earlier. Fixed and scoped.

### 28.5 · Also fixed

- **Hockey Canada names the deliberate slide in its tripping rule itself** (8.6), and expressly
  withholds its puck-first relief from **clipping** (8.7) — *"a player lowering their body"* — which
  is a mandatory major plus game misconduct where it injures. USA Hockey 639(b) covers the same act.
  Neither was cited beside the alternative the section names.
- Common Mistakes stopped at the NHL; now carries the three-book escalation.

### 28.6 · `site-reviewer` — the plugin is verified sound, and the visual half is not checked

**Item 1, exhaustively rather than by sampling.** The reviewer ran the plugin's parse path over every
facts line in `content/` *and* parsed every `<dl class="facts">` in all 42 built pages, and the two
agree:

| | |
|---|---|
| facts blocks / documents | 773 / 26 |
| facts rows, source and rendered | **4,591 = 4,591** |
| `<dt>`/`<dd>` mismatches, empty labels | 0, 0 |
| **literal `*` in any rendered facts value** | **0** |
| node types produced | `text` × 4,596, `emphasis` × 5, nothing else |

*(Correcting the record: 4,591 facts, not the 4,593 quoted earlier.)*

**Item 2 is moot on a better ground than expected:** there is **no `**` anywhere in any facts block in
the corpus**, so a bold wall in a facts value is not currently possible. Longest `<em>` run is 33
characters.

**Item 3 passes:** 118 diagram figures in `dist`, each with a matching inline `<svg>` and
`<figcaption>`; both quoted placements render with their attribution lines.

⚠️ **Item 4 — layout at viewport and theme — was NOT checked, and the reason is a tool outage.**
Chrome's safety categoriser refused every navigation, including `https://example.com` as a diagnostic,
so it was down globally rather than objecting to localhost. **No page was seen and no console was
read.** What the reviewer could establish from CSS: `.facts` uses `minmax(0, 1fr)` so a long value
cannot force horizontal scroll; it collapses to one column below 544px; the longest value is 296
characters and the longest unbroken token is 33 and hyphenated. **That is reasoning about CSS, not
looking at a page**, and clipping and bad wrapping around the new `<em>` are exactly what it misses.

### 28.7 · Open

- ❌ **D15's visual half is unchecked** and cannot be closed until the browser tooling works. The
  reviewer's own recommendation: do not hold the commit on items 1–3, and treat item 4 as outstanding.
- **No CSS rule targets emphasis inside a facts value**, so the five new `<em>` fall to browser
  default italic at 0.95rem inside a tinted panel. Probably fine; unseen.
- **The attribution line is un-title-cased** — *"Diagram from playing without the puck"* — derived
  from the filename rather than the manifest's title. Pre-existing, and a plugin fix, not a content one.
- **Instance twenty-two remains predicted, not closed.** Hooking, slashing, cross-checking, kneeing,
  slew-footing and goaltender interference are still unswept in the understated direction, and the
  mis-scoped subtype (§28.3) is invisible to every mechanical check the corpus has.

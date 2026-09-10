# Findings — rules verification

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 24 section(s).

---

### ⚠️ OPEN — IIHF 101.1 VOICED WITHOUT ITS WOMEN'S-HOCKEY SCOPE, in the facts layer

**Found by `commit-gate` on the second pass, 3 September 2026. Not blocking — the error runs in the SAFE
direction — but it is in the layer that is voiced alone.**

**`corner-escape-routes`'s caption reads *"IIHF Rule 101.1 allows two players to push and lean only while
possession of the puck remains the sole object of both of them"* — with NO women's-hockey scope.** ⚠️ **The
rule is headed *"ILLEGAL HIT IN WOMEN'S HOCKEY"* and opens *"In Women's Hockey…"*.**

⚠️ **The caption matches its owner exactly, so the caption is not the defect — the OWNER is.**
**`body_contact_and_battles.md:122` has the same shape in the ` ```facts ` layer, WHERE IT IS VOICED ALONE
WITH A 300 MS BREAK EITHER SIDE AND THE SECTION HEADING THAT SCOPES IT IS NOT AUDIBLE.**

**Same shape at `defender.md:697`, `center.md:646`, `center.md:716`, `playing_without_the_puck.md:181`.**
**All pre-existing except the caption.** ⚠️ **This is the third distinct IIHF 101.1 scoping class this
session — after the ten-site false prohibition and the possession-limb elision. Census the rule's SCOPE the
way the limbs were censused.**

---

### ✅ AND THE FIFTH DEFENDER'S JOB WAS FOUND, NOT INVENTED

**I briefed *"do not invent what the fifth player does"*.** ⚠️ **The agent found that the corpus already
answers it: `defensive_zone_coverage.md:341` carries `Read: Use it … defending 6-on-5 with their goalie
pulled` for the COLLAPSING BOX — all five inside the house, sticks in lanes, conceding the outside by
design, which is compatible with "do not chase".** ***"Leaving the reader with a bare gap when a sibling
document answers it would have been the worse fix."*** **Pointed at, hedged as *"one option and not the
shape"*.**

**And the Hockey Canada claim I told it to verify or remove is TRUE** — `hc.txt:5095`, Rule 6.7(d),
*"In categories of U18AAA, Junior, and at the option of the Member in Senior"*. **`breakouts.md:808` already
carried it. It made the caption MORE specific rather than removing it.**

⚠️ **And it corrected a rule scope nobody had: NHL 81.4's exceptions are an injured player or a
strength-changing penalty — THE GOALTENDER EXCEPTION BELONGS TO THE TEAM THAT PULLED ITS OWN, NOT TO THE
TEAM THAT ICED IT.**

---

### ⚠️ AND A SECOND SCOPE GAP IN THE SAME SENTENCE THAT NO BRIEF NAMED

**`corner-escape-routes` cited USA Hockey 604 Note 1 with no scope beside a 101.1 clause that was being
scoped.** ⚠️ **Rule 604 is titled *"Body Checking (Competitive Contact Categories)"* and 604(a) confines it
to 12U and below, all girls'/women's and all non-check adult.** ⚠️ ***"Scoping 101.1 and leaving 604 bare
would have implied the IIHF restricts only women while USA Hockey restricts everyone."*** **Both scoped.**

---

### ✅ CLOSED 3 September 2026 — IIHF 101.1's possession limb now travels everywhere

**Found by `commit-gate`, 3 September 2026. Not a one-line fix — a propagation question.**

**Captions say:** *"allowing bodychecking in women's hockey only where there is a clear intention of playing
the puck."*
**IIHF 101.1 reads:** *"…a clear intention of playing the puck **or attempting to 'gain possession' of the
puck**."*

⚠️ **The elision ERRS SAFE — it makes the permission narrower than the book, so no reader is endangered.**
**But it is a rule stated short in a VOICED layer**, and `forechecking_systems.mjs` carries the same
elision, **so fixing one caption would leave the corpus disagreeing with itself.**

⚠️ **CLOSED — `commit-gate` found this row stale and staged as OPEN, and was right: *"committing a
closed row marked OPEN is precisely how the next brief comes out wrong."*** **Every site now carries
both limbs** — `forecheck-122`, `forecheck-131`, `forecheck-pinch` and `the-call-and-who-can-see-it` in
`diagrams.json` all read *"playing the puck **or an attempt to gain possession of it**"*, and a corpus
census of all 51 content and caption sites found **51 of 51** carrying both limbs and the exception.

⚠️ **What remains open is a DIFFERENT class and has its own row: 101.1 stated without its
WOMEN'S-HOCKEY SCOPE.**

**Superseded original: census every site that states 101.1's test — captions, `describe`s and body — and decide once whether the
possession limb travels.** ⚠️ **Caption length is the real constraint: the `on_ice_communication` caption
already runs 3,737 chars against a 2,800 chunk limit and splits.**

---

### And the two changes run in OPPOSITE directions

Requiring the **stick** is **stricter** — a skate-push across no longer earns the carve-out.
*"Both skates completely"* is **more permissive** than *"their skates"*. ⚠️ **Both move the IIHF text
onto the NHL's, which already reads exactly that way.** **An edition change presented as uniformly
stricter would be wrong**, and a brief that says "the book tightened" invites exactly that error.

---

### ⚠️⚠️⚠️ A SECOND FABRICATED DIVERGENCE, WRITTEN AFTER THE LESSON ABOUT THE FIRST WAS RECORDED

**4 September 2026. `commit-gate`'s third block, and the most important thing found this round.**

**The claim:** *"Hockey Canada 7.2 writes **unsuspecting** where those two write **defenseless**"* — in the
BODY at `switching_positions.md:193` and in the `forcing-them-outside` CAPTION. **Voiced twice, in two
separate spoken chunks.**

**The books, verified in both Hockey Canada extractions, control `penalty` = 1230:**

| where in Hockey Canada | wording |
|---|---|
| **Rule 7.2(a) — THE MINOR CLAUSE** | *"checks or pushes a **defenseless** opponent…"* — ⚠️ **NHL/IIHF 41.1 WORD FOR WORD**, and the only occurrence of `defenseless opponent` in the book |
| the **unnumbered preamble** to 7.2 | *"checks or pushes an **unsuspecting** opponent…"* |
| the **Glossary** | *"**defenseless or unsuspecting** opponent"* |

⚠️ **Hockey Canada writes BOTH, and its OPERATIVE clause writes the same word as the other two.**

⚠️ **THE SAFETY INVERSION IS PRECISE: a Hockey Canada reader is told their protection turns on the opponent
not seeing it coming — in a passage about riding a carrier into the boards, immediately after being told the
instruction is *"only while they can see you coming."* 7.2(a) reaches a defenceless opponent regardless.**

---

### T0-P12 — WAVE 1 RESULT: 7 of 8 confirmed, 1 REFUTED, and the baseline has a blind spot

**Nine edits across five files.** `team_play_and_culture.md:286`/`:646`, `goaltender.md:676`/`:1432`,
`shooting.md:914`, `risk_management.md:652`/`:673`, `faceoffs.md:470` (three separate rule scopings in
one sentence).

⚠️ **ONE CENSUS ROW WAS WRONG, in the direction that would have damaged the corpus.**
`risk_management.md:650` **already does the correct thing** — attributes the quotation to the NHL by
name and gives the IIHF's variant verbatim. It is the `on_ice_communication.md:257` pattern.
**A sweep would have "fixed" a correct site.** That is 1 of 8, and it is why this class is a worklist.

⚠️ **THE NOUN MOVES, NOT JUST THE PRONOUN — confirmed at the four-times-repeated string.**
NHL 8.1: *"injured so that **he** cannot continue play or go to **his bench**"*.
IIHF 8.1: *"injured so that **they** cannot continue play or go to **their Players' bench**"*.
**A reader searching their own book for the quoted words finds nothing.**

⚠️ **The 67.2(ii) note diverges STRUCTURALLY, not lexically.** NHL: *"a penalty shot shall be assessed
(67.4) or a goal awarded (67.5)"*. IIHF: *"a "Penalty Shot" shall be assessed Rule 67.4 – Penalty Shot,
or Rule 67.5 – Goal Awarded"* — a different construction entirely. Identical in v1.1 and 2026/27.

**Two sites the census could not surface, found by reading whole paragraphs:** `faceoffs.md`'s
`Rule 63.2(v)` (*"into his body"*; IIHF writes *"their body"*) and `Rule 63.6`, both carrying book-less
rule numbers inside a paragraph opening *"NHL and IIHF"*. **Both scoped.** ⚠️ **This is the evidence that
a grep-based census under-counts this class.**

**Preserved rather than split, because it was correct:** the Rule 8.2 fragment those same sentences
quote jointly is **verbatim in both books**, so the joint attribution there was right.

---

### T0-P16 — WAVE 1 RESULT: my census conflated TWO counterweights, and the real one is interference

⚠️ **THE BRIEF'S PREMISE WAS WRONG.** Chunks 013/014/100/102/185 were **already corrected by commit
`a7871c7`** — all five carry the barred-league ladder (604(c)/(d)/(e), 7.3(a)/(b)/(c), 101.1) in full.
**My census tested for the STRING *"does not make it free"* and so conflated two different
counterweights.**

**The real gap, which the agent found by reading:** a walk-out is a check on a player **in control of
the puck** by the document's own `Targets:` fact — **and a net-front screener has no puck. So what
governs is INTERFERENCE**, and `56.2`, `625` and the interference limb appeared **nowhere** in the
document in connection with the walk-out.

⚠️ **The sharpest point, and it is new:** **USA Hockey Rule 625 announces no Competitive Contact scope
in its title the way Rule 604 does — so it reaches the checking-league reader that 604 does not.** That
is why the checking ladder was never the right counterweight for this act.

**Fixed:** §9's block was at exactly `HARD_MAX` so the counterweight went **into the granting line**
(`:1058`, 195/200) with the citation on `:1059` (296/300); §1 had room and took a new fact plus its own
`Priority:` unit; §9 step 3 body, §1 body and Key Takeaways all rewritten.

---

### T0-P26 ⚠️ IIHF 101.1's PERMISSION offered to a British MEN'S reader — found by the agent, not the brief

`:740` read *"IIHF 101.1 makes any move to step or glide into an opponent an illegal hit, and **the same
rule** lets you hold ground you have established."* ⚠️ **Both halves are women's-only as written, and
the PERMISSION half is the dangerous one** — a British men's reader was being told to rely on a rule
that is not his. The general grant is **IIHF 56.1** (*"A Player is allowed the ice they are standing
on"*). Body and fact both fixed.

⚠️ **All 34 corpus mentions of `101.1` were checked; every one outside this file already scopes it to
women's hockey.** No propagation needed — a rare clean result.

---

### T0-P28 The interference limb needs propagating to THREE siblings — capacities measured

None carries it. **Do not sweep; the capacities differ and two need folding-in:**

| File | Line | Block state |
|---|---|---|
| `positions/defender.md` | `:220` | **11 facts, HARD_MAX** — must fold in; 65 chars headroom on the line |
| `systems/defensive_zone_coverage.md` | `:474` | **7 facts** — has room for a new `Rule:` |
| `foundation/on_ice_communication.md` | `:246` | **11 facts, HARD_MAX** — must fold in; 55 chars headroom |

Also one-sided in prose: `defender.md:734`, `:235`, `defensive_zone_coverage.md:703`.
⚠️ **NOT a target:** `goaltender.md:1125` reuses the same diagram but teaches box-out only and grants no
walk-out.

---

### T0-P33 ⚠️⚠️ `breakouts.md` TAUGHT AS LEGAL AN ACT USA HOCKEY MAKES A MINOR — fixed, needs safety review

`:151`/`:137` taught occupying the net front so a forechecker's route to your puck-carrying partner is
lengthened, saying *"Rule 56.1 is explicit that this is legal."*

**USA Hockey Rule 625(a)(1)** (`usah.txt:4448`): *"A minor penalty shall be assessed for interference.
This includes… **(1) Providing a protective screen and limiting the opportunity for an opposing player
to apply pressure to a teammate in possession or control of the puck.**"*

⚠️ **And USA Hockey writes NO body-position entitlement into any RULE.** Its four *"entitled to stand
their ground"* bullets are front matter — the *Declaration*, under **Competitive Contact Category** —
introduced by *"legal competitive contact occurs when players are focused on gaining possession of the
puck"* and conditioned on keeping *"body position between an opponent and the loose puck"*. **A
net-front screener whose own partner already has the puck meets neither condition.**

**Negative claim attacked properly:** `protective screen` = **0** flattened across both NHL extractions,
both IIHF editions and both Situation Handbooks, with a working control. **Casebook checked before
writing "no interpretation"** — one hit, the reprinted rule; none of its three Rule 625 situations
interprets (a)(1). **HC 8.3 preamble and CARHA 66(a) Note 2 reach only the *moving* case.**

Block was at `HARD_MAX`, so the counterweight went into the two lines carrying the hazard (`:137` 184/200,
`:141` 289/300 — ⚠️ **a first attempt hit 351 and `check_facts` caught it**).

⚠️ **NEEDS `safety-reviewer`** — penalty consequence, and the new text is unreviewed.
⚠️ **Propagation not run:** whether other documents repeat the net-front-screen claim without the USA
Hockey qualifier. **`on_ice_communication.md:259` makes a related but DIFFERENT and correct claim** —
but it says USA Hockey writes body position as legal *"in the Note to 604(c)"*, when the Note's actual
words (*"simply maintaining established body position"*) are **weaker than a grant**.

---

### T0-P29 — SAFETY REVIEW RESULT: the less-restrictive rewrite created a CRITICAL

⚠️⚠️ **`:979` renders as ONE spoken unit and a listener hears a governing body permitting a player to be
pinned to the boards FROM BEHIND.** The only limit in the unit is *"the divisions Rule 7.3 covers"* — **a
bare rule number, expanded nowhere.** Those divisions are **U13 and below, all female hockey, and any
Member-approved division**: ⚠️ **the exact populations most likely to be injured by it, and the exact
populations that will not know "Rule 7.3" means them.**

⚠️ **TWO SENTENCES WERE DROPPED AND BOTH CUT AGAINST THE PERMISSION.** `sources/hc.txt:6211` is one
continuous three-sentence paragraph opening: *"**The intent of this rule is not to penalize accidental
contact as a result of playing the puck. Provided that contact is marginal in nature and does not
endanger the safety of the opponent, no penalty may be assessed.**"*

**So *"Hockey Canada permits the opposite" OVERSTATES it — the interpretation never leaves the puck.**
And Interpretation 3 carves out of **Rule 7.5(a), checking from behind** — one rule, not a general grant
— **and the document never says what 7.5(a) is.**

⚠️ **THIS IS THE RISK I NAMED WHEN DISPATCHING THE REVIEW, AND IT LANDED.** The rewrite was correct that
the corpus was stricter than the books. **Correcting in that direction is a manoeuvre this project has
never had to review, and the first attempt produced a safety critical.** Record that as the finding.

**Five Majors, all in the same rewrite or exposed by it:**
1. **`:1505` Common Mistakes is a stale absolute** — still *"stops being legal in any book"* while §8, 526
   lines earlier, quotes Hockey Canada permitting it. **Two spoken units, one document, opposite claims.**
2. **`:746` *"charging in all four books"* is FABRICATED STRICTNESS** — false for the NHL (*"as a result of
   distance traveled… violently check"*, no stride limb) and USA Hockey (*"more than two strides… for the
   purpose of punishing"*). ⚠️ **This document says it correctly FOUR times elsewhere** (`:460`, `:520`,
   `:1312`, `:1326`).
3. **`:746` *"binds everybody"*** — contradicted by `:157` and `:1075`, which say three of four books.
   `grep` for the entitlement in `hc.txt` returns **one** hit, inside Rule 8.1 Holding.
4. **`:740` facts leaves a checking-league listener nothing usable** — voiced alone, the only rule cited
   is announced as *"the women's rule"*, and **neither layer gives the physical reason**, which is
   book-independent.
5. ⚠️ **A citation that does not reach the reader it is given to.** `:157`/`:1059`/`:1075` cite the Note
   to **604(c)** for a **checking-league** reader — while `:979` itself reasons that 604 is scoped to
   Competitive Contact. **The claim is TRUE; the authority is elsewhere** — `usah.txt:369` Standard of
   Play, no classification limb, and its wording (*"legally established"*) is **better**.

**Upheld and not to be given back:** the IIHF 101.1 women's scoping; `:967` keeping *"pin the puck, not
the player"* **unscoped in the facts layer** — ⚠️ **the permission stayed OUT of the extraction layer,
which the reviewer called the one thing it would defend hardest.**

⚠️ **Half-propagated, which is round 10's shape:** the new §9 interference material reached
`defensive_zone_coverage.md:452` but **not** `:474` or `defender.md:220`, the two blocks that actually
teach the walk-out.

---

### T0-P33 — SAFETY REVIEW: the fix went into §2 and STOPPED. Two criticals.

⚠️ **CRITICAL 1 — half-propagated, which is round 10's shape.** `:253` (§Wheel facts, **voiced as a
standalone `<p>`**) still states the net-front screen legal, **flat and unscoped across all four books**
— and the §Wheel block is the one a reader learning the wheel actually meets. Also `:262`, `:264`
(*"That is legal."*), `:942` Common Mistakes (*"legal and useful"*), and Key Takeaways (absent).
⚠️ **`:264`'s only mitigation is *"Set out in full in section 2"* — a pointer is not a caveat.**
⚠️ **On a wheel the partner IS in possession, so 625(a)(1) names the play exactly.**

⚠️ **CRITICAL 2 — `:137` is an imperative with the prohibition subordinated.** Rendered: *"**Action.**
Occupy the net front… **but** USA Hockey 625(a.1) makes that screen a minor."* **Heard alone it is an
instruction plus a fact, not an instruction plus a prohibition — it never tells the reader not to do
it.** The block has `Never:` available and uses it two lines down.

⚠️ **THE PREVIOUS VERIFIER'S OWN BASIS WAS FALSE.** `:1002` says *"the volume's three Rule 625
situations"*. **There are SEVENTEEN** (`usah_casebook.txt:14557-14830`). **It read to the first page
break and generalised.** The conclusion survives an independent grep — no Casebook reference to
`625(a.1)` anywhere — **but the stated basis would collapse under a reader's check.** Same sentence's
*"476-page volume"* is **unsupported**: the extraction runs to page 440, highest footer 439.

**Body contradicts its own trailer:** `:151` applies bullet 1's loose-puck proviso to all four
Competitive Contact bullets. ⚠️ **Bullet 2 — nearest this play — has no proviso.** The trailer at
`:1002` quotes all four correctly.

**A refinement that strengthens the finding:** **CARHA 66(a) Note 2 gives its *"stand their ground"*
grant to the DEFENDING players.** On a breakout the screener is on the team **in possession**, so it
grants him nothing — ⚠️ **so `:253`'s flat "is legal" fails under CARHA as well as USA Hockey.**

**Stronger form of the load-bearing claim, now confirmed:** all four USA Hockey *"entitled to…"*
sentences are **Preface material** (`usah.txt:377, 380, 638, 758`). ⚠️ **The only in-rule occurrence is
the Note to 604(c), which is descriptive, conditioned on *"focused on gaining possession of the puck"*,
and self-limited to *"under this rule"* — in a rule titled *"Body Checking (Competitive Contact
Categories)"*. It cannot reach Rule 625.**

⚠️ **Still live elsewhere:** `body_contact_and_battles.md:1147` carries the **same mis-citation**
("Standard of Play" for Declaration bullets). And `site/src/diagrams/breakouts.mjs:218`'s wheel caption
states the entitlement **flat**, is spoken, and carries no USA Hockey scope.

⚠️ **The reviewer's own note on method:** *"The two criticals I found are both in places the brief did
not point at, and I found them only because the SSML renderer put `:253` in front of me as a naked
`<p>`; a grep over the file for `625` would have returned §2 and §Wheel and looked clean, because the
body and the block live in the same file."*

---

### T0-P28 — CLOSED in three files, and the chunk scan found twice what the block scan did

**Fixed:** `defender.md:219` (block at `HARD_MAX`, flag folded into `Technique:` 196/200, citation in the
body), `defensive_zone_coverage.md:471` (7 facts, had room — **two** new `Rule:` facts at 282 and 293),
`on_ice_communication.md:243` (`HARD_MAX`, recast to 185/200).

⚠️ **MY BRIEF WAS INCOMPLETE.** It offered 56.1, 56.2(i) and the 625 Note. **It missed USA Hockey
625(a)(4)** (`usah.txt:4468`), which names the play in terms — *"A defending player who **changes their
skating lane or foot speed** in an effort to play the body of an opponent **no longer in control of the
puck**"*. **A far better citation, used throughout in preference.**

⚠️⚠️ **A QUOTATION DEFECT MY FRAMING NEARLY SHIPPED — AND THE OWNER STILL CARRIES IT.** NHL 56.1's
prohibition is a **conjunct**: *"**Moving laterally AND** without establishing body position, then making
contact…"*. **Quoting only the second limb prohibits contact the rule permits.** The agent caught it in
its own first draft. **`body_contact_and_battles.md:152` still has the narrowed form — routed to its
holder.**

⚠️ **THE RENDERED-CHUNK SCAN FOUND THREE ONE-SIDED SITES THE BLOCK SCAN DID NOT**, each in a **different
voiced unit from its counterweight**: `defender.md:241` (two chunks after), `defensive_zone_coverage.md:768`
(Key Takeaway 4), `on_ice_communication.md:261` (split by the renderer into a separate chunk). **Plus two
Common Mistakes bullets.** ⚠️ **Six sites found inside three files the brief said had three.**

**And the over-correction it resisted:** 625's Note is **disjunctive** — *"no effort to play the puck,
maintain normal foot speed **or** maintain an established skating lane"* — **so merely holding an
established position is NOT reached by interference either.** It wrote that explicitly after a first
draft that implied otherwise.

---

### T0-P57 goaltender.md's "word for word" claim — corrected, and it was true bar one word

`:998` said CARHA's Note 2 to 59(a) carries Hockey Canada 7.10(d) *"word for word"*. **Verified from
both books:** Hockey Canada writes *"The **goaltenders** must stay in their goal creases or proceed to a
neutral zone designated by the Referee"*; CARHA writes the identical sentence with *"**goalkeepers**"*.

⚠️ **This commit flags exactly that class elsewhere** — *"the IIHF's is the same but for quotation marks
round its defined terms"* — so the corpus was applying a standard it failed here.

**Corrected to *"matches bar one word"* — 275/300.** ⚠️ **My first correction was 322/300 and `check_facts`
caught it; my second was 301/300. The third fitted.** The one-word detail moved out of the voiced unit
because it would not fit; **the substance — that they are not identical — is what a listener needs.**

---

### T0-P58 — CLOSED across four layers, and the closing agent refuted the brief again

`forechecking_systems.md` Key Takeaway 7 (`:940`) and Common Mistakes (`:880`) now carry 604(a)/(b)
verbatim, the 604(c) minor, the 607(c)/(e) exposure and the Casebook's own floor. **Layers: body ✓
facts ✓ Common Mistakes ✓ Key Takeaways ✓.**

⚠️ **MY BRIEF WAS WRONG ABOUT `:880`.** I said it stated the Situation 5 **check** permission without the
bar. **It did not** — the limb it quoted was *physically engage*, which **is** competitive contact and
**is** legal in non-checking classifications under the Note to 604(c). ⚠️ **The real defect was a
TRUNCATED QUOTATION**: it dropped *"in an effort to gain possession of the puck"*, so *"lets you
physically engage a goalkeeper"* read aloud as **permission to make contact for its own sake.**

⚠️ **AND THE PREVIOUS AGENT'S OWN FIX CONTAINS THE COLLAPSE IT WAS WARNED AGAINST.** `:720` now reads
*"permits a corner check only where you may body check at all, **and only 'when the goalkeeper has
possession of the puck'**"* — but Situation 5 attaches the possession condition to the *physically
engage* sentence, **not** to *"can be legally checked"*. **`:720` is the only one of four layers that
merges them.** It errs **over-restrictively**, so nobody is hurt — but it is a restriction under a
`Rule:` label that the Casebook does not write there. ⚠️ **25 chars of headroom against the 300 cap —
too tight to restructure safely, and rewriting a 275-char rule line under a tight cap is how new errors
get made.** `rules-verifier`/`facts-reviewer`.

**Sibling concern CHECKED and CLEARED by the coordinator.** `:730` claims `rules_primer.md`,
`playing_without_the_puck.md` and `goaltender.md` *"set out the same Situation"*. ⚠️ **The check
permission — *"can be legally checked when outside the privileged area"* — appears in NO other document.**
`rules_primer.md:637` makes a different point (that the other two books write no such permission at all).
**No propagation needed.**

**Also fixed by that agent, both required:** **604(b) was quoted verbatim at five sites and was ABSENT
from the Sources trailer**; and `:730`'s *"Those are four conditions on top of that"* had lost its
antecedent behind the previous agent's insertion. ⚠️ **And a chunk-boundary catch: its first draft split
Key Takeaway 7 so chunk 093 opened *"Its Casebook…"* with the book name in 092. Visible only by diffing
the whole rendered file.**

---

### T0-P63 ⚠️ ONE COMMIT, ONE SENTENCE, TWO DIFFERENT RULES — 56.1 has THREE provisos and four new lines carry two

`sources/nhl_rules_2024-25.txt:6252`, matched by `iihf_rules_2026-27.txt:4776` — **three**:

> *provided **his stick is not utilized** (…); **his free hand is not used** and **he does not take
> advantage of his body position to deliver an otherwise illegal check.***

**Census across the corpus:**

| Provisos | Sites |
|---|---|
| **three** ✓ | `breakouts.md:151`, `:1004`, `playing_without_the_puck.md:444`, `:459`, `body_contact_and_battles.md:342`, `:1161` |
| ⚠️ **two** | `forechecking_systems.md:512` (**facts, voiced alone**), `:551`, `:949` (trailer), `body_contact_and_battles.md:1587` |

⚠️ **ALL FOUR SHORT SITES ARE `+` LINES IN THIS DIFF.** Two agents wrote the same sentence into one
commit and disagreed about it, and **`body_contact_and_battles.md` disagrees with ITSELF between `:342`
and `:1587`.**

⚠️ **THE DROPPED PROVISO IS THE ONE THAT MATTERS HERE:** *"does not take advantage of his body position
to deliver an otherwise illegal check"* — **in the document whose entire subject is arriving at a puck
on the wall, where an otherwise illegal check IS the hazard.**

⚠️ **`:512` is the worst: *"only if"* asserts the two conditions are the WHOLE test**, in a unit voiced
alone. **294/300 — six characters of headroom, so it needs restructuring, not an insertion.**
⚠️ **`breakouts.md:151` is a true control** — it carries all three and says *"Read the rest of that third
sentence, because at the net front it is the part that gets called."*

⚠️ **THE GATE SAID IT NEARLY MISSED THIS:** *"every mechanical gate passed on it, every reviewer's
wording was internally consistent, and it surfaced only because I re-derived 56.1 from `sources/` and
then censused the corpus for the same sentence."* ⚠️ **And it named the scale of the unexamined class:
376 `limb` sites in this plan where the same arithmetic error would be equally invisible.**

---

### T0-P64 Two closed quotations over open sentences, and a joint attribution of one book's words

- `forechecking_systems.md:551` quotes *"…must skate in order to gain or reestablish his proper
  position."* — ⚠️ **both books continue *"in order to make a check."*** Same at the trailer.
- `:551` and `:524` quote the *"strength move"* clause with `they/their` and attribute it jointly to
  **NHL 54.2, IIHF 54.2 and HC 8.1**. ⚠️ **That string is Hockey Canada's; the NHL writes `his/he`.**
  `:553` hedges it *"almost word for word"*; **`:524` does not.**

---

### T0-P63 — CLOSED, and my brief cited the WRONG EDITION

⚠️ **I cited `sources/nhl_rules_2024-25.txt` — the SUPERSEDED book.** The agent re-verified in the
current `sources/nhl_rules.txt:6236` before acting, and in **both** IIHF editions (2026/27 v1.0 at
`:4776` and 2025/26 v1.1 at `:4687`), word-identical. ⚠️ **It also confirmed the lines sit in the BODY,
not Appendix VII** — checked against the page footers.

**Fixed at five sites.** `:512` **restructured into two facts** (six characters of headroom made
insertion impossible) — block now 9 facts / 5 coaching, **no fact evicted**. `:551` gained the third
proviso **and** the closed-quote fix (*"…reestablish his proper position **in order to make a check**"*).
`:949` trailer completed. `body_contact_and_battles.md:1587` — ⚠️ **it judged this DID need changing:
the mitigating clause supplies the LATERAL-MOVEMENT rule, a different clause of 56.1, not the third
proviso.**

⚠️ **THE STRENGTH-MOVE MISATTRIBUTION CONFIRMED.** The `they/their` string is **Hockey Canada 8.1**
(`hc.txt:6721`); **the NHL writes `his/he`** (`nhl_rules.txt:6190`); the IIHF writes capital *"Player"*
with *"body position"* in quotation marks. `:553` now names Hockey Canada as the quoted wording and
prints the NHL's own sentence beside it.

---

### T0-P66 The proviso spread, after the fix

*"otherwise illegal check"* now appears in **four documents at nine sites**: `forechecking_systems.md`
×3, `body_contact_and_battles.md` ×2, `playing_without_the_puck.md` ×2, `breakouts.md` ×2.

⚠️ **The agent's own limit, and it is the one that matters:** *"A site that states the entitlement in
wholly different words — no quotation, no 'free hand', no 'proper position' — would not appear in either
sweep. Nor can a grep for the grant find a document that OMITS it where it should be present."*

---

### T0-P68 The repair I asked for reintroduced the class it was correcting

`forechecking_systems.md:513` came back from the third-proviso fix reading *"IIHF 56.1 **in its own
pronouns**: it holds only 'provided **his** stick is not utilized…'"* ⚠️ **The IIHF's own pronouns are
`their/they`; the `his/he` string is the NHL's.**

⚠️ **And *"in its own pronouns"* is THIS CORPUS'S CONVENTION for introducing the other book's actual
wording** — used correctly three times in this same commit (`:525`, `:554`, `risk_management.md:652`) —
**while the commit repairs exactly this defect at seven other sites.**

**Fixed to *"the NHL's wording here, the IIHF's the same but for its pronouns"* (286/300).**
⚠️ **THIS ROW PREVIOUSLY RECORDED A SUPERSEDED DRAFT** — *"the same in their/they"* at 279 — and
`commit-gate` caught it. **The reason it changed is a reusable renderer fact that was written NOWHERE:**
⚠️ **`md_to_speech` voices `their/they` as *"in their **or** they"*** — the slash becomes *"or"*.
**The row that should have preserved that held the wording that caused it instead.**
⚠️ **A fuller form naming BOTH divergences — *"but for pronouns and its quoted terms"* — measured
303/300 and would not fit**, so the voiced unit carries the pronoun point and the BODY must carry the
rest. ⚠️ **I told the gate the body already did. It did not** — see T0-P69.
⚠️ **The lesson is not the line. It is that a repair briefed against a class can reproduce the class**,
and that it happened **in the one file the record says nobody reviewed at the shipped text.**

---

### T0-P70 A flag that under-enumerates its own divergence

`defensive_zone_coverage.md:484` and `defender.md:237` say the quoted wording is the NHL's, *"the IIHF's
the same **but for quotation marks round its defined terms**."* ⚠️ **One quote those words cover is
*"provided **he** is in front of **his** opponent"*; the IIHF writes *"provided **they** are in front of
**their** opponent."* The divergence is pronouns AND quotation marks; the flag names only the second.**
⚠️ **The other two quotes at each site genuinely differ only in quotation marks — one clause at each,
not a rewrite.**

---

### T0-P72 — SAFETY REVIEW: the closing claim WAS over-general, and is fixed

`forechecking_systems.md:552` closed *"Three conditions either way — **what differs is the wording, not
the rule**"* — ⚠️ **a bolded, skim-layer assertion of IDENTITY between NHL and IIHF 56.1.**

**The two clauses quoted ARE identical** (verified verbatim, `nhl_rules.txt:6261` / `iihf_rules_v1.1.txt:4682`).
⚠️ **The REST of 56.1 is not:** IIHF's possession limb carries **two** conditions — *"immediately
following them 'loss of control' **AND** their opponent still finds themself within an 'objectively
reasonable window of opportunity'"* — where **the NHL sets one**. IIHF 56.1 also opens with **three
sentences the NHL book has none of**, including the *"immediate vicinity of the skater with the puck"* limb.

**Now:** *"…on these two clauses, what differs is the wording and not the rule. That does not extend to
the rest of 56.1, whose possession limb the two books write differently."*

⚠️ **Graded Minor, not Critical, and the reasoning is the useful part:** the scope was **already closed by
the next sentence in the same voiced unit**, confirmed by rendering — *"no listener ever met the claim
naked."* **The repair makes it survive being SKIMMED alone, which is what the corpus bolds it for.**

---

### T0-P81 An open question the same sweep raised — does 625(a)(1) reach the point screen?

`oz-net-front-screen` and `winger-offensive-zone-patches` both state an **unscoped** net-front screen
permission. ⚠️ **If 625(a)(1) reaches screening a goaltender while a teammate has the puck at the point,
those captions and `offensive_zone_play.md` are affected too.** ⚠️ **The gate filed this as a QUESTION,
not a finding, and declined to adjudicate it.** Queued.

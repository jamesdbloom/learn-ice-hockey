# Round 36 — *verify what §§27–28 asserted*

*Complete. Twelve staged documents plus the glossary, five reviewers, 21 August 2026.*

| | |
|---|---|
| Documents reviewed | 14 of 36 (all staged, `rink_map_and_glossary.md` among them) |
| Reviewers run | rules-verifier · source-verifier · content-reviewer · facts-reviewer · safety-reviewer · site-reviewer · diagram-reviewer · commit-gate |
| Criticals found / fixed | 7 / 7 |
| Majors found / fixed | 34 / 14 |
| Minors found / deferred | ~20 / ~16 |
| Date | 21 August 2026 |

---

## The brief

Round 33's record carries dimension coverage through §26.5 and stops. **§§27 and 28 then
made the largest and most recent changes in the staged set — including two criticals — with
no coverage statement at all**, and the commit gate blocked on exactly that. This round is
scoped to closing that gap: every rule number §§27–28 introduced, verified against primary
text on disk; the two facts blocks a readability pass merged; and the three
`defending_the_rush.md` rewrites round 33 recorded as unseen by `safety-reviewer`.

What makes it different from round 33 is the **direction of attack**. Round 33 reviewed
what the diff said. This round asked, for each claim, *whether the book it cites actually
says that* — and for negative claims, whether the thing said to be absent is genuinely
absent. That inversion is what produced the criticals: four of the seven are a **carve-out
asserted in a book that does not contain it**, which no amount of re-reading the corpus
would surface.

A second, unplanned strand: the glossary was given the entry-by-entry pass against owning
documents it had never had, after two newly-written entries turned out to be homonyms with
penalty consequences.

*(A machine crash killed the first run of the gate mid-audit. Nothing was committed and
nothing was lost; the work resumed against an unchanged HEAD.)*

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | ✅ | rules-verifier | All eight never-verified rule numbers plus every staged rule claim, grepped from primary text with wording quoted. One wrong (MA1), two confirmed-but-incomplete. |
| D2 | Rules travelling without exceptions | ✅ | rules-verifier, facts-reviewer | Produced CR4 (IIHF 24.8's goalkeeper carve-out) and CR3 (NHL 21.1 reaching no layer but a Key Takeaway). |
| D3 | Rule-set divergence | ✅ | rules-verifier, safety-reviewer | The round's densest dimension. CR1, CR2, CR5, CR6, CR7 are all divergence defects. |
| D4 | Citation integrity | ✅ | rules-verifier, source-verifier | Rule numbers and wording verified from disk; **178 external URLs in the staged files refetched**. Three rotted (MA10). The four rulebook PDFs confirmed as the editions the corpus names. |
| D5 | Provenance | ✅ | source-verifier | Every quotation located in rendered body; **0 not-located**. Produced MA11 and MA12. The ~450 citations in the 24 **unstaged** documents remain unswept — tracked in [`round_36_carried_findings.md`](round_36_carried_findings.md). |
| D6 | Negative existence claims | ✅ | rules-verifier | Several verified by exhaustive grep: `puck first` in `usah.txt` → 0; `match penalt` in `iihf_rules.txt` → 0; `fend off` in `usah.txt`/`hc.txt` → 0; `waist` in `iihf_rules.txt` → 1 hit, about pant padding. |
| D7 | The cardinal rule | ✅ | content-reviewer | MA5 (`D-to-D` stated as law in three places) and MA9 (`Activation` using "legal"). `Attack triangle`, `Pinch`, `Odd-man rush`, `Penalty kill` all upheld. |
| D8 | Numeric ownership | ✅ | facts-reviewer, rules-verifier | MA1 (NHL Table 5 row count) and MA2 (two hedges shed by the owner of the gap numbers). |
| D9 | The summary layer | ✅ | content-reviewer, safety-reviewer | CR3 is a summary-layer defect in reverse — the caveat reached *only* the Key Takeaway. MA8 is a Sources annotation contradicting its own body. |
| D10 | The key-facts layer | ✅ | facts-reviewer | The two merged blocks, plus every changed facts line in the staged diff. Produced CR4, MA2, MA3, MA4. |
| D11 | Reader safety | ✅ | safety-reviewer ×2 | CR1, CR2, CR3 on the staged set; CR6, CR7 and two majors on the glossary. |
| D12 | Read-aloud integrity | ⚠️ Partial | all reviewers | Judged from the text by every reviewer, and it produced real findings (MI1, MI2). **`md_to_speech.py` was not run.** Nothing was heard. |
| D13 | Folklore | ✅ | content-reviewer | MA6 — *"most goals are scored low"*, unsourced, no owner, now labelled in `goaltender.md`. |
| D14 | Structure, style, terminology, cross-links | ✅ | content-reviewer, diagram-reviewer | The glossary pass: 16 majors, mostly D14. Two structural decisions deferred (§Deferred). |
| — | Diagrams and notation | ✅ | diagram-reviewer | `rush-gap-and-angle` reviewed for the first time — `round_35:109` credited it to a section it never appears in. Verdict **safe to ship**; MA14 fixed, three corpus-wide majors deferred. |
| D15 | The rendered site | ✅ | site-reviewer | **39 of 40 sitemap URLs** instrumented; 4 theme×width cells on the key page. 0 console errors and 0 console messages across all 39; no body-level horizontal scroll anywhere. Produced M1 (fixed), M2, M3, m1–m8. ⚠️ Two access refusals and a declared workaround — see below. |

**Mechanical checks:** `check_links.py` ☑ · `check_facts.py` ☑ ·
`check_absolutes.py` ☑ (37 documents) · `check_secrets.py` ☑ ·
`npm run build` ☑ (exit 0, 42 pages) · `check_external_links.py` ☑ (178 staged-file URLs)

**Document coverage:**
*Read in full* — `defending_the_rush.md` §Breakaways, `uk_rules.md` :155–232 and :281–292,
`risk_management.md` :535–561 and :666–735, `rink_map_and_glossary.md` (all 746 lines),
`content_style_guide.md`.
*Read in the cited regions* — `body_contact_and_battles.md`, `rules_primer.md`,
`puck_handling.md`, `offensive_zone_play.md`, `goaltender.md`, `playing_without_the_puck.md`,
`time_and_space.md`, `scanning_and_anticipation.md`, plus ~18 documents that own a §8 term.
*Rulebooks* — `nhl_rules.txt`, `iihf_rules.txt` (v1.1) **and** `iihf_rules_v1.0.txt`,
`usah.txt`, `hc.txt`, `eiha_inhouse.txt`, `ibc.txt` (newly obtained), plus NHL PDF p.150
refetched to scratchpad because the text extraction destroys the table.
*Not reached* — `breakouts.md`, `forechecking_systems.md`, `game_management.md`,
`time_and_space.md` and `playing_without_the_puck.md` as whole documents, though all are
staged; §§1–7 of the glossary as text; every off-the-ice document.

---

## Findings

### Critical

**CR1 · `defending_the_rush.md:570`, `:538`, `risk_management.md:537`, `:555` — a defence
asserted in a book that does not contain it**

- **As it stood:** *"**Touch the puck first and you are safe from the penalty shot.**"* as an
  unscoped bold lead-in, with the facts blocks crediting *"USA Hockey 639(a)'s Note"* with it
  and the prose quoting the Note as *"no penalty… if, in the opinion of the Referee"*.
- **Why it is wrong:** `grep -ci 'puck first' sources/usah.txt` → **0**. USA Hockey's
  penalty-shot rule is **616(a)** (`usah.txt:4106+`) and carries no puck-first carve-out.
  639(a)'s Note (`usah.txt:5061-5064`) reads *"no penalty shall be assessed **under this
  rule** if… the player was clearly hook-checking or poke-checking the puck for the purpose
  of gaining possession"* — scoped to Rule 639, and turning on the **action**, not on
  reaching the puck. The ellipsis in the prose deleted the three words that scope it. The
  corpus already had this right at `rules_primer.md:772`; the staged text contradicted its
  own sibling.
- **What a reader would do:** a USA Hockey defender chasing a breakaway reaches around from
  behind believing they have a written defence, and concedes a penalty shot — or an awarded
  goal with the net pulled.
- **Fix:** lead-in scoped to the NHL and IIHF books; both facts lines rewritten to state that
  USA Hockey writes no such carve-out; the quotation restored in full; the framing corrected
  from *"goes further"* to *a different test rather than a wider one*.
- **Propagation:** body ☑ · facts block ☑ (both documents) · Common Mistakes ☑ ·
  Key Takeaways ☑ · other documents ☑ (`rules_primer.md:772` already correct) · style guide ☐
- **Re-verified:** independently re-grepped before the fix was written, and confirmed
  afterwards by `rules-verifier`, which reached the same conclusion from primary text.

**CR2 · `uk_rules.md:289` — a leniency claim whose implicature is false**

- **As it stood:** *"On first-major ejection, yours is the stricter book — though not on
  everything: the IIHF writes no match penalty at all for boarding, high-sticking or an
  illegal check to the head."*
- **Why it is wrong:** literally true, and misleading. `grep -ic 'match penalt'
  sources/iihf_rules.txt` → **0**. The IIHF book has **no match penalty for anything**; its
  ceiling is major plus game misconduct. Naming three offences invites the inference that
  others carry one. Meanwhile the IIHF's actual position on two of the three is the *harsher*
  end — high-sticking 60.4 and illegal check to the head 48.3 are **Reference Table 6**
  entries (`iihf_rules.txt:8803+`, heading *"Summary of major penalties that result in an
  automatic game misconduct"*), so a first major ejects unconditionally under 20.4.
- **What a reader would do:** a British player takes a leniency point about the three
  highest-consequence offences in the sport, in a Key Takeaway, read aloud in isolation.
- **Fix:** rewritten to state the book has no match penalty at all, with the counterweight
  and the Table 6 exposure. `rules_primer.md:340` already carried the correct treatment.
- **Propagation:** body ☐ *(see MA7 — this document has no body section for it)* ·
  facts block n/a *(document has none)* · Common Mistakes ☑ · Key Takeaways ☑ · other
  documents ☑ · style guide ☐
- **Re-verified:** `rules-verifier`, which enumerated Rules 41, 48 and 60 individually and
  confirmed both v1.0 and v1.1 of the 2025/26 book.

**CR3 · `defending_the_rush.md:834` — the only route to an ejection reached no layer but a
Key Takeaway**

- **As it stood:** the NHL 21.1 caveat existed solely in Key Takeaway 6. The body at `:570`
  told the reader the puck-first carve-out *"converts the worst outcome in Rule 57 into a
  two-minute minor"*.
- **Why it is wrong:** NHL Rule 57 has exactly four subsections (`nhl_rules.txt:6400-6476`)
  with no major and no match tier — so **21.1 is the only NHL route above the minor**, and the
  caveat is load-bearing rather than decorative. `nhl_rules.txt:2635-2637`: *"A match penalty
  shall be imposed on any player who deliberately attempts to injure or who deliberately
  injures an opponent **in any manner**."*
- **What a reader would do:** reads the body, the facts block or Common Mistakes — the three
  layers the TTS pipeline and the site surface — and believes the NHL caps a deliberate
  leg-take at two minutes.
- **Fix:** added to the body at `:570`, to the facts block, and to Common Mistakes as
  *"Reading 'puck first' as a licence."* `puck_handling.md:936` already carried it correctly.
- **Propagation:** body ☑ · facts block ☑ · Common Mistakes ☑ · Key Takeaways ☑ (already) ·
  other documents ☑ · style guide ☐
- **Re-verified:** `rules-verifier`, by exhaustive enumeration of Rule 57's subsections.

**CR4 · `defending_the_rush.md:532` — "from behind" stated three times with the IIHF's
exception missing**

- **As it stood:** *"from behind"* was the operative condition in three facts in the block,
  with one exception stated (net empty).
- **Why it is wrong:** IIHF 24.8 criterion (II) (`iihf_rules.txt:2462-2463`): *"The infraction
  must have been committed from behind (**except a foul committed from the front by the
  goalkeeper on a 'breakaway' situation**)."* The NHL's equivalent has no such carve-out —
  `nhl_rules.txt:6446` ends *"committed from behind."* full stop — so the divergence is real
  and runs toward the reader's exposure. The staged change had *added three IIHF facts* to
  this block while omitting the one IIHF divergence that bites.
- **What a reader would do:** a British goaltender hears that only a foul from behind is a
  penalty shot, and fouls a breakaway attacker from the front. Under their own book that is a
  penalty shot.
- **Fix:** the block was at `HARD_MAX` (11 facts), so two `Rule:` lines were **consolidated**
  rather than the fact appended — the style guide is explicit that a cap must never evict a
  rulebook fact. `Rule:` facts are allowed 300 characters; the merges came in at 255 and 299.
  Nothing was dropped: the 616(a) diagonal-from-behind clause moved into the puck-first line,
  and the Table 7 point into the escalation line.
- **Propagation:** body ☑ (already present at `:580`) · facts block ☑ · Common Mistakes ☐ ·
  Key Takeaways ☐ · other documents ☐ · style guide ☐
- **Re-verified:** `rules-verifier` confirmed the wording and that it is genuinely absent
  from the NHL rule.

**CR5 · `rink_map_and_glossary.md` `Traffic`, `Common Mistakes` — the corpus's
interference-safe word attached to the act that is the offence**

- **As it stood:** a newly-written entry defined *traffic* only in its goaltender sense, and
  a Common Mistakes bullet read *"skater-on-skater contact … the word is **traffic**"*, with a
  sentence asserting that the choice of word *"is what decides whether it is interference"*.
- **Why it is wrong:** in the owning document *traffic* names a **route**, explicitly not
  contact — `playing_without_the_puck.md:453`, *"You are not hitting anybody"*, and its facts
  block carries `Never: Stop in a defender's path and take the contact`. And the vocabulary is
  not the legal test: `nhl_rules.txt:6251-6258` and `iihf_rules.txt:4683-4691` both turn on
  **body position** — *"Moving laterally and without establishing body position, then making
  contact with the non-puck carrier is not permitted and will be penalized as interference."*
  Separately, the corpus's claim that no rulebook has a legal skater-on-skater screen is
  **verified and understated**: `usah.txt:4456` lists *"Providing a protective screen"* inside
  Rule 625 as interference.
- **What a reader would do:** relabels a pick as "traffic" and takes it as licence.
- **Fix:** both rewritten to carry the actual test and the prohibition; the bullet's subject
  changed from *contact* to *your route*.
- **Propagation:** body ☑ · facts block n/a · Common Mistakes ☑ · Key Takeaways ☐ ·
  other documents ☑ · style guide ☐
- **Re-verified:** `safety-reviewer`, against four rulebooks.

**CR6 · `rink_map_and_glossary.md` `Empty net` — icing said not to apply where the rulebook
says it does**

- **As it stood:** *"A shot from your own end at an empty net still counts as a goal, so
  **icing** does not apply to it."*
- **Why it is wrong:** `nhl_rules.txt:8617-8620` — *"If, however, a goalkeeper is legitimately
  out of the crease in an attempt to go to the players' bench to be substituted for an extra
  attacker and in no way makes an attempt to play the puck, **the icing should not be
  nullified** under this section."* `game_management.md:326` states the split correctly. The
  entry gave the true half of a two-part rule and dropped the half that costs you — the
  *"the kill cannot ice the puck"* shape the style guide records at line 556.
- **What a reader would do:** a trailing team with the net pulled ices the puck and is
  trapped in its own end on a defensive-zone draw, at the worst possible moment.
- **Fix:** rewritten to carry both halves and the 81.3 wording.
- **Propagation:** body ☑ · facts block n/a · Common Mistakes ☐ · Key Takeaways ☐ ·
  other documents ☑ (`game_management.md` already correct) · style guide ☐
- **Re-verified:** grepped from `nhl_rules.txt` before the fix was written.

**CR7 · `rink_map_and_glossary.md` `Icing` — post-icing restrictions stated as universal**

- **As it stood:** *"After your own icing: defensive-zone draw, **no line change, no
  timeout**."*
- **Why it is wrong:** NHL 81.4 (`nhl_rules.txt:8624-8628`) carries **three exceptions** —
  replacing a goaltender who went off for an extra attacker, an injured player, or a
  strength-changing penalty. And **USA Hockey Rule 624 contains no substitution provision at
  all** (scanned 624→625, zero hits), corroborating `rules_primer.md:295`. The style guide
  names this exact defect class at line 402: *"The post-icing restrictions … were each stated
  as universal in nine documents. Most readers are under USA Hockey, where neither applies as
  written."* It had reached the corpus's own dictionary.
- **What a reader would do:** a USA Hockey player stays out exhausted believing they cannot
  change; a coach declines a timeout they are entitled to.
- **Fix:** scoped to the NHL and IIHF books, with the three exceptions and the USA Hockey
  position.
- **Propagation:** body ☑ · facts block n/a · Common Mistakes ☐ · Key Takeaways ☐ ·
  other documents ☐ *(`how_to_watch_hockey.md:195` states it bare — deferred, see below)* ·
  style guide ☐

### Major — fixed

**MA1 · NHL Table 5 has 19 rows, not 18** — `uk_rules.md:289`, `rules_primer.md:332`,
`rules_primer.md:847`. `Fighting` is its own row with its own Rule 46 cell and its own
"Major only" checkmark, not a group header; the corpus absorbed it, giving *"eighteen …
thirteen and five"* where the table reads 13 non-fighting and **6** fighting-related.
Confirmed independently from `nhl_rules.txt:9738-9761`, and by `rules-verifier` from the
refetched PDF. The 13 / 7 unconditional / 6 injury-conditional breakdown that carries the
safety weight was **correct throughout**. Corrected in all three places.

**MA2 · Two hedges shed by the document that owns the number** —
`defending_the_rush.md:135`. The merged facts line read *"one stick length at your own blue
line"* where the pre-merge block and the body both read *"**roughly** a stick length"* and
*"**around** a stick and a half"*. Six borrowers across the corpus preserve the hedge the
owner had dropped. Restored.

**MA3 · Two clauses named as lost in round 33 and never restored** —
`offensive_zone_play.md:165`. *"attack the net from behind"* returns exactly one hit corpus-wide;
*"in the inside lane rather than flat on the boards"* exists as offensive-zone support only
at `:182`. The second is the sharper loss — it is the only sentence saying where the level
player stands, and standing flat on the boards is the error the body was written to prevent.
Both restored; block went 7 → 8 coaching facts against a cap of 8.

**MA4 · A `Convention:` contradicting its own section** — `offensive_zone_play.md:171` said
which player takes which role is a coaching choice; `:175` and `:177` and the block's own
second fact all say arrival order decides it. What *is* a coaching choice is the rotation
rule. Rewritten to mirror `puck_support_and_spacing.md:435`, which states it correctly.

**MA5 · `D-to-D` stated as a law of hockey in three places** — glossary `:551`, `:492`
(*"the rule about it is"*) and `:376` (*"— always"*). `risk_management.md:135` labels it
`Convention:` and says some teams allow the exchange above the tops of the circles.
**Deferred to the glossary pass — see Deferred.**

**MA6 · Unsourced folklore, now labelled** — *"most goals are scored low"* exists in
`goaltender.md:312` and nowhere else, has no owner in the style guide's numeric table, and
carries no source; `shooting.md`, which owns shot-location values, contains no such claim.
**Not deleted** (non-negotiable 3) — labelled *"consensus rather than a figure"* in its owner.
The glossary entry that would have made a second copy was written not to restate it.

**MA7 · Hockey Canada's escalation trigger is injury, not recklessness** —
`risk_management.md:669` grouped HC 8.6(b) with two books that turn on recklessness.
`hc.txt:7069-7071`: *"will be assessed to any player who **injures** an opponent by a tripping
infraction"*. HC writes no reckless-endangerment tier for tripping at all. Corrected.

**MA8 · NHL 21 and IIHF 21 are different rules at the same number** — `puck_handling.md:375`
paired them in one facts line. IIHF Rule 21 is **Dangerous Actions**
(`iihf_rules.txt:2179-2187`), a major plus automatic game misconduct, confined to conduct
*"not covered by the playing rules"*. This is the corpus's known IIHF-number-shift pattern.
Corrected.

**MA9 · `Forecheck` excluded half the uses of the word** — and named four shapes of which
three are usually played as neutral-zone structures (`forechecking_systems.md:217`: *"a '1-4'
describes four skaters standing about 114 feet from the net they are supposedly
forechecking"*). The glossary also contradicted itself — §5 writes *"1-2-2 neutral-zone
forecheck"*, which its own §8 definition excluded. Both `Forecheck` and `Backcheck` rewritten.
A **`1-3-1` entry was added**: it was bolded six times in §8 as a cross-reference with no
headword, and the corpus carries three unrelated 1-3-1s (power play, neutral-zone trap,
offensive-zone forecheck), with `neutral_zone_systems.md:96` carrying a `Never:` fact about
precisely that confusion.

**MA10 · Three citations rotted since the baseline, all in staged files.** All three were `200`
in `link_baseline.tsv` and are `404` today, re-confirmed by my own fetch:
`usahockey.com/2025-29-usah-rule-changes` (`rules_primer.md:861`),
`weisstechhockey.com/faceoffs-defensive-zone/` (`breakouts.md:972`) and
`icehockeysystems.com/savard-videos/breaking-1-2-2-and-trap` (`forechecking_systems.md:837`).
The first is replaced with the live *2025-29 Playing Rule Change Summary* PDF (200, 144,505 bytes,
*"Effective August 1, 2025"* — fetched and confirmed). The other two now point at Internet Archive
snapshots, each labelled with the 404 date and the snapshot date. ⚠️ **Two of the three archive
URLs could not be retrieved at the time of writing** — `web.archive.org` served *"Internet Archive:
Temporarily Offline"*. Their existence and `200` status come from the Wayback **CDX index** — the availability API now returns an empty result for one of them, so CDX is the instrument that reproduces this; the
USA Hockey snapshot *was* fetched successfully (48,734 bytes). **Re-check the other two when the
Archive is back up.**

**MA11 · `House league` contradicted the primary source its own owner quotes.** The entry said you
*"play within your own club rather than against other towns"*. Hockey Canada's FAQ, refetched (200,
200,944 bytes) with both strings located verbatim, says away games are *"rarely hosted more than an
hour's drive away"* and players are *"almost always given equal ice time regardless of skill or
talent."* House league **does** travel, just not far, and the ladder grades by *degree* of travel,
not travel versus none. **Not a deletion case** — rewritten with the sourced description. This is
the distinguishing feature a beginner would use to choose a programme.

**MA12 · The two-line-pass Sources annotation contradicted its own document's body.**
`rink_map_and_glossary.md`'s Sources said the NHL abolished the two-line pass *"under the 2005
CBA"*, in the corpus's own voice, while §3 of the same file says it was a playing-rule change
*"adopted alongside the CBA rather than by it"*. The cited Wikipedia page (a redirect to *Offside
(ice hockey)*) does say it — and **carries no citation for that sentence**. The 2005-06 season
article footnotes the whole rule-change package to the *NHL Official Guide & Record Book*, not the
CBA. The body was right; the annotation now says what the cited page says, and notes it is uncited
there.

**MA13 · `site/src/styles/global.css:1044` — the sticky row label lost its seam exactly when it
was needed.** `.table-scroll table` sets `border-collapse: collapse`, so a cell border belongs to
the **table's border grid rather than the cell box** and is not painted with the sticky cell as it
slides over the scrolled columns. The `background` is a cell property and stuck correctly; the
`border-right` did not. Seen at 375 px: the pinned header read `Type | ly short?` and a body row
`Bench minor | rves it`, with no rule between them. The comment above that rule calls this a
**safety** problem in terms — DF37, a reader scrolled two columns right reading the "Typical rec /
beer league" column as if it were the IIHF row. Replaced with `box-shadow: inset -1px 0 0
var(--border)`, a cell paint that survives sticky positioning. This is the other half of commit
`0c61559`: the intent was implemented and one of its two halves silently did nothing.

**MA14 · `body_contact_and_battles.md:158` — a quoted diagram introduced three quantitative
claims its host document never makes.** The caption gives gap distances of two to three stick
lengths, a stick and a half, and roughly a stick length. `body_contact_and_battles.md` **states no
gap distance anywhere** — every use of "gap" in it is qualitative, and its one quantified closing
distance (`:411`) is a different and tighter metric, ITBC's one-stride condition. The figures are
sound in their owning document and the caption reproduces its hedge faithfully; this is purely a
**placement** defect, and it is the pass-1 defect the diagram role exists to catch — a picture
making a claim the prose does not. A bridging paragraph did disclaim the transfer, but sat *after*
the figure, so the caption was read first and never said the numbers do not travel. The disclaimer
now **precedes** the figure and states explicitly that the distances belong to the rush situation
and that nothing numeric carries across. Verified by `diagram-reviewer`, which rendered the glyph
key itself rather than trusting any prose description of it.

### Minor — fixed

**MI1 · `body_contact_and_battles.md:420`** — a safety-critical `Rule:` fact opened *"All
four bind every division"*, a referent resolvable only from a heading a listener never hears.
The four are now named.

**MI2 · `body_contact_and_battles.md:421`** — *"the restricted form of Rule 101.1"* was
undefined in the fact and unrecoverable read aloud. Replaced with the operative test from
`iihf_rules.txt:7492`: bodychecking permitted *"when there is a clear intention of playing the
puck or attempting to gain possession"*.

**MI3 · `defending_the_rush.md:540`** — a fact opening with a dangling *"But"*. Removed by the
CR4 consolidation.

**MI4 · Glossary house style** — a misused `⚠️` (the corpus reserves it for rule divergence,
safety consequence or live coaching disagreement, and this was a definitional nuance); two
ownership notes violating non-negotiable 6, written by this session and removed; five bold
terms used for emphasis where §8's preamble reserves bold for cross-references; `Post` and
`Traffic` alphabetically misplaced.

### Deferred

All tracked in [`round_36_carried_findings.md`](round_36_carried_findings.md), which
carries file:line and primary-source citations for each.

- **The gate's remaining blocks** — C8, and the **governing-document race**. C5 and C10 were
  closed during this round (see D4, D5, D15). **C8 turned out to be worse than recorded:** the
  diagram this commit ships, `rush-gap-and-angle`, is credited to §14 of
  `round_34_diagram_notation.md`, and **appears nowhere in that file** — §14 names three other
  diagrams and every defect it records belongs to them. Its coverage is asserted, never
  demonstrated. `round_35`'s two lists of quoted placements also fail to reconcile with each
  other. `diagram-reviewer` has been dispatched; until it reports, the diagram must be treated
  as **unreviewed**. Also outstanding: the
  **governing-document race**: `content_style_guide.md` is mid-edit and unstaged, adding the
  very `## Diagrams and their notation` section that governs this commit's one diagram.
- **`uk_rules.md` has no body section** for the adult first-major-ejection material — it lives
  only in a Common Mistakes bullet and a Key Takeaway (MA7 of the safety pass). CR2's fix is
  therefore in the summary layers of a document whose body never raises the subject.
- **Hockey Canada's own puck-first carve-out** (`hc.txt:7064-7066` plus two Interpretations,
  one with no referee-judgement qualifier at all — *more generous than the NHL's*) is
  mentioned in none of the staged puck-first passages. Also `hc.txt:7072`, 8.6(c): *"No Match
  penalty may be assessed for tripping."*
- **`offensive_zone_play.md:688`** gives a four-book tier list with three books; Hockey Canada
  8.3(b) is missing and that block is at `HARD_MAX`.
- **Fourteen majors from the glossary pass**, including MA5 above, `Tip-in` carrying neither
  of its two rule ceilings, `Faceoff` giving two of four books' answers, `House league`
  contradicted by the Hockey Canada text its own owner quotes, and *"off-side"* carrying four
  senses of which two are rule violations.
- **Two structural decisions** — amend §8's bold preamble rather than fix fourteen entries;
  and one pass to add cross-links, since only 21 of 67 entries carry any.
- **`how_to_watch_hockey.md:195`** states the post-icing restrictions bare (CR7's sibling).
- **`special_teams.md:853`** states *"icing does not apply to a shorthanded team"* bare,
  inside the document that owns the rule.

---

## Disclosures re-verified and upheld

- **`body_contact_and_battles.md:1110`** — *"The separate USA Hockey Rules and Casebook is not
  on disk and was not searched; a casebook situation could qualify the USA Hockey half."*
  Confirmed accurate; the Casebook is genuinely absent. **Upheld and must not be stripped.**
- **`uk_rules.md`'s In-House Rule 201 inference** — the document says the extension to Rule
  201.1 is *"an inference rather than the rule's own words"*. `rules-verifier` read
  `eiha_inhouse.txt:381-393` and confirmed Rule 201 says only *"These rules apply to all junior
  age groups as defined in Rule 200"*. The disclosure is exactly right.
- **`rules_primer.md`'s *Scouting The Refs* attribution** — the corpus labels the 2024-25 →
  2025-26 offside wording change as reported by a secondary source and says the rulebook
  itself does not say so. No 2024-25 NHL book is on disk. Correct handling, upheld.
- **Glossary `Power play`** — *"consensus rather than measured"* matches `special_teams.md:94`
  exactly, and is the fix the style guide's line 83 demanded.
- **Glossary `Penalty kill`** — the wedge+1 and `+1`-route hedges match `special_teams.md:519`
  and `:523` word for word, and correctly name no route. The round-31 fix has landed and has
  **not** introduced a new problem.
- **Glossary `Pinch`** — *"a near-universal coaching default, not part of the definition and
  not a rule"*, with three named exceptions. `content-reviewer` calls it the best-written
  entry in §8 and the model for the others.
- **Glossary `Shoulder check`'s omission of a scan-frequency number** — a *positive* finding.
  The one-to-two-second benchmark is contradicted by Berg et al. per
  `how_to_watch_hockey.md:44`, and the entry correctly declines to restate it.
- **`goaltender.md:312`'s new label on "most goals are scored low"** — attacked and not broken.
  `source-verifier` searched Crossref and OpenAlex, fetched a candidate NHL goal-scoring study
  (which analyses possession-gain location, not net placement), then checked the **NHL's own public
  play-by-play API**: it carries `xCoord`, `yCoord`, `shotType`, `zoneCode` and **no height or
  net-zone field at all**. The number cannot be derived from the public record, so any figure
  circulating in coaching material did not come from it. **The label stands and is the correct final
  state.** There is also no ownership gap to close: `shooting.md` owns shot location *on the ice*,
  not height *in the net*.
- **`rules_primer.md:151`'s *Scouting The Refs* attribution** — refetched (200, 168,782 bytes), the
  passage located in rendered body, and the source confirmed an **originator, not a restater**
  (first-person comparison, explicit 2024-25 / 2025-26 diff format, no inline citation of anyone
  else). The corpus splits the credit correctly: the 2025-26 wording is stated as fact and confirmed
  on disk, while only the *delta* and the kicking inference are credited to the secondary source —
  and the corpus's hedge is **stricter** than the source's. With no 2024-25 book on disk, this is
  the right final state.
- **`body_contact_and_battles.md:657` and `:1194`** — the disclosure that the scrummaging
  correlations are the review's **reference [13]**, not its own data. Verified against the
  open-access JATS full text with `xref` targets preserved; reference 13 is Wu, Chang & Wu 2007,
  both DOIs confirmed via Crossref. The *"review's introduction presented as its finding"* trap,
  caught and repaired before this round.
- **`body_contact_and_battles.md` §5 level-scoping** — the historic D11 critical is closed:
  every facts block in the section now carries the checking-league scope (`:332`–`:335`,
  `:362`, `:390`, `:424`), not just the blockquote at `:325`.
- **The ducking material** — `hc.txt:7093-7116` confirms Rule 8.7 carries **no division
  scope** while the checker's amnesty is Junior/Senior only. The recent commit *"Stop telling
  a U13 or female player that ducking a check is not their rule"* is upheld.

---

## What this method could not have found

**The inversion that produced this round's criticals has a blind spot of its own.** Asking
*"does the cited book actually say this?"* finds a carve-out asserted into a book that lacks
it — four of seven criticals. It does not find a rule the corpus **never mentions at all**.
Hockey Canada's own puck-first carve-out surfaced only because `rules-verifier` happened to
read around 8.6; nothing in the method was looking for it.

**Nothing was heard and nothing was seen.** `md_to_speech.py` was not run and no browser
rendered a page, yet D12 findings were made by four separate reviewers reading text. Those
are inferences. `rules_primer.md:332`'s Major bullet has grown again into two paragraphs of
roughly 2,280 and 891 characters, and round 26 records a previous growth of that same bullet
splitting a speech chunk mid-sentence. **Unmeasured, in a corpus that is read aloud.**

**A `200` is not a verification, and a `403` is not an absence.** Seven `howtohockey.com` URLs plus
two others recorded `403` in the previous baseline returned `200` today with a browser user-agent —
tooling artefacts, not rot. In the other direction, three PubMed URLs returned a `203` cookie wall
that a status-code check would call healthy or dead depending on its threshold; they were resolved
through NCBI eutils instead. **Neither failure mode is visible to a checker that reads only status
codes.**

**Grepping extracted text cannot see a rule the extraction dropped**, and it nearly cost this
round a wrong number in three documents. The NHL `.txt` shreds Table 5 into unattributable
runs; the correct count came only from refetching the PDF. No Hockey Canada PDF is on disk at
all, so a stray `Rule 7.8` header sitting between Interpretation 3 and its own carve-out
sentence was resolved **by reasoning, not by seeing the page**.

**Every reviewer read a diff or a named scope.** Nothing examined what was already wrong in
the untouched body of these files — `rules_primer.md` §4 alone is ~91,500 characters, of which
roughly a fifth has been read across 27 review sections. A defect created by a **deletion** is
invisible in an added-lines view, which is how two documents were read.

**The homonym sweep was a string search on the headword.** It cannot find a document using a
glossary sense under a *different word* — "far pad side" for "blocker side", "the wall" for
the half-wall. A synonym-side pass is the obvious next scope.

**It also ran in one direction only.** Terms in §8 were checked against the corpus; the corpus
was not checked against §8. Sixty-seven entries against 28,000 lines — the gaps are probably
where the findings are, and `1-3-1` surfaced only because it happened to be bolded.

**Verifying that a rule is quoted correctly is not verifying that it is in force.** A
mid-season IIHF bulletin, a USA Hockey Casebook interpretation, an NHL memo to clubs or a
British league regulation could each change the answer without changing a byte of these files.

**And nothing here tests whether the hockey is good.** Every finding above concerns accuracy,
ownership, propagation and framing. An entry can be perfectly consistent with its owner,
perfectly hedged, correctly cited — and still be a poor description of the game.

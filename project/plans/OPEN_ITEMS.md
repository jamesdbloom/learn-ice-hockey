# What is open — consolidated

**As at 24 August 2026, after round 39.** This file is the single live list. The
round-by-round detail stays in [`round_36_carried_findings.md`](../reviews/round_36_carried_findings.md) and the
[review records](../reviews/round_39_ducking_division_scope.md); this is the index into them, grouped by the kind of work each
item actually needs.

Nothing here is a defect known to be shipping wrong that could simply be corrected. Each item
is open because it needs a decision, a source that is not on disk, a tool that does not exist,
or a structural change too large to fold into a repair.

---

## ▶ RESUMING — read this first

*Round 53 is mid-flight. This section is the handover; delete it once the round is committed.*

**State as of the last write:**

| | |
|---|---|
| HEAD | `69417ea`. Two of the round's three commits have landed — the renderer fix and the reach layer. **The corpus commit has not.** |
| Working tree vs HEAD | see the staged summary — regenerate rather than trusting a figure written here |
| Agents | **none live.** The last wave (five systems documents, six items) returned clean. ⚠️ **Stage only now — a `SendMessage` to a finished agent RESUMES it and it will edit files already in the index.** |
| Staged | **re-stage by name from the UNFILTERED `git status --porcelain` list, then confirm bare `git diff --name-only` is EMPTY.** ⚠️ **NO path arguments.** The filtered form — `content/ site/ scripts/ project/` — returns empty **accurately** and does not cover `CLAUDE.md` at the repo root. That is how an unstaged fix shipped past a gate, and **recording the path list here is what reproduced it.** |
| Mechanical checks | `check_links` · `check_facts` · `check_absolutes` · `check_geometry` · `check_secrets` **all pass on a quiet tree, every agent finished** |
| Renderer | `md_to_speech.py --self-test` **146 assertions, 0 failures** — up from 130, across four renderer defects fixed |
| `check_counts` | **run — re-run it rather than reading a figure here.** ⚠️ This cell carried **799,031** while the same file's live figure said 801,745; `check_counts.py` scopes this instance out as non-live, **so nothing mechanical will ever catch it.** |
| Corpus-wide sweep | **done** — the stock Check-yourself line, one edit across 36 documents |
| C8 record | `project/reviews/round_53_the_briefs_were_the_defect.md` |
| `sources/carha.txt` | ✅ **now on disk** (206,667 bytes, `pdftotext -layout`). It was registered in `fetch_sources.sh` and `sources/README.md` earlier in this round and **never actually extracted** — the rules claims were verified against a scratchpad copy no checker could reach. `sources/*` is gitignored, so the committed record was right and the disk was wrong. **Nothing checks that a registered book resolves to a readable file.** |

### ⚠️ NEW OPEN ROWS from the closing waves — none of these is closed

| Row | What is needed |
|---|---|
| **HC 7.5(a) Interpretation 3** — *"Provided that contact is marginal in nature and does not endanger the safety of the opponent, no penalty may be assessed"* | Neither `defending_the_rush.md`'s body nor its block mentions it. ⚠️ **Omitting it makes the corpus more conservative, not less**, so it was left deliberately — but it is a real carve-out and it needs a **decision**, not silence. |
| **HC 7.5(c) and USA Hockey 608(c)** — the match tiers | Absent from `defending_the_rush.md`'s checking-from-behind section entirely, in both bullet and block. `body_contact_and_battles.md` owns the arriving-player obligations. |
| `defending_the_rush.md:371` | `Never: Ride an opponent into the boards… — **the instruction above** is for checking leagues only`. **Voiced alone, "the instruction above" has no antecedent in its own `<p>`.** |
| **The two-limb shape in the OTHER THREE BOOKS** | Every repair this round was scoped to Hockey Canada. **Nobody has censused whether the corpus drops a discretionary limb from USA Hockey 604(d)/623(b)/639(b), IIHF 41.4/56.5/61.3, or the NHL's equivalents.** Two agents named this as the obvious next census. |
| ⚠️ **A DECISION, handed back rather than taken: the two Game Ejection counters now differ in FORM** | Hockey Canada has two in-game ejection counters, and `body_contact_and_battles.md` now carries both. **The head-contact one (4.8(b)(ii)) folds Rule 4.8's Note 1 — *"a Game Ejection is not equal to a Game Misconduct penalty… does not trigger any automatic suspension"* — INSIDE its own voiced value**, so the denial cannot be separated from the hazard. **The stick one (4.8(b)(i)) relies on a separate value two 300 ms breaks later.** ⚠️ **It cannot be folded: that value is 226 characters and Note 1 pushes it past the 300-char `Rule:` cap. Splitting the section is the only route.** The missing half is a **relief**, so a listener hearing the counter alone over-fears rather than under-fears — ⚠️ **but note the lesson this round already paid for: "an omitted relief is safe" is only true if the relief is the part that is missing, and here it is.** A player who believes a third stick minor costs them next week's game declines a play they were entitled to make. **Decide: split the section, or accept the asymmetry and say so.** |
| **Rule 7.6(a) is a SECOND home for the head-contact counter** | *"In minor and female hockey, any player incurring three Head Contact penalties under Rule 7.6 (a) will be assessed a Game Ejection penalty."* **Both homes write the scope in**, which is why the scope survived. ⚠️ **And the interaction bites harder here than at the stick site:** 7.6(a) prices *intentional* head contact at a **double minor**, and Interpretation 2 to 4.8(b) makes a double minor **one** infraction — so an intentional head-contact double minor is **one mark of three, not two**. Stated explicitly in the repair. **Nobody has enumerated whether Hockey Canada counts within a game anywhere ELSE** — Rule 5.6(e) names the Official Scorer's duty for *"third stick infraction penalty or third Head Contact penalty"*, and only that line was read, not the surrounding Section 5. |
| ⚠️ **HALF A CASEBOOK SITUATION — a new defect class, confirmed once and unswept** | **USA Hockey Casebook Situation 10 under Rule 625** has two sentences that run opposite ways. The corpus carried the **relief** (*"momentarily places their stick and/or skates in the goal crease"* is not a stoppage) and dropped the **restriction** — *"However, if a goal is scored while an attacking player has their stick and/or skates in the opponent's goal crease while the goalkeeper is in the crease, the Referee shall have no alternative but to disallow the goal."* Repaired in `shooting.md`; **dispatched for `scanning_and_anticipation.md` (2 sites) and `goaltender.md` (1)**. ⚠️ **`offensive_zone_play.md` and `defensive_zone_coverage.md` already carry both limbs — do NOT sweep.** ⚠️ **The agent that found it says plainly that no method it ran would have surfaced it** — a brief happened to point at that situation. **The same shape may sit in any Casebook situation the corpus quotes half of, and nobody has censused that.** A phrase grep returns **zero** on the second sentence; it was found only by a whitespace-flattened read. |
| ⚠️ **The coordinator's brief on that situation was BACKWARDS** | It was dispatched as a **low-severity omitted relief**, reasoned as *"omitting a relief only makes the reader more cautious."* The corpus had already carried the relief and dropped the restriction — **the opposite error, and the one that costs a reader a goal.** Recorded because the reasoning was plausible and wrong: **"an omitted relief is safe" is only true if the relief is the part that is missing**, and nothing in the brief had established that. |
| **"Hockey Canada tier stated without its scope"** — corpus-wide | Rule 7.3's own opening scopes it to *"divisions of U13 and below, in female hockey, and any other divisions approved by a Member"*. Repaired at every site found; **no corpus-wide layer test has been run for the general shape.** |
| **A defect with no rule number in it** | ⚠️ **Every census this round grepped rule numbers.** A sentence reading *"under Hockey Canada you're only ejected if someone gets hurt"*, carrying no `7.x(b)`, **is invisible to every method used.** Named by the primer wave as what it could not have found. |
| **A new `#### Forechecking during a delayed offside` heading** in `zone_entries.md` | Legal to `check_facts.py` and `check_links.py`; **how it renders in the browser, the sidebar nav and the on-page contents is unverified.** Wants a `site-reviewer` pass. |
| **`on_ice_communication.md` lost a verbatim quotation to a cap** | The *Moving a screener* block is at `HARD_MAX = 11`; fitting Hockey Canada's division list cost the IIHF 101.1 quotation. Rule number, tier and scope survive; the body blockquote carries the quotation. ⚠️ **The real fix — splitting the section — was blocked because the heading is an anchor referenced from `site/src/styles/global.css`.** |
| **`goaltender.md` does not carry Hockey Canada 7.10(d)** | *"The goaltenders must stay in their goal creases or proceed to a neutral zone designated by the Referee."* **Hockey Canada has the NHL/IIHF neutral-location route**, recorded nowhere in the corpus until the primer took it. ⚠️ **Second time in two waves the owner document was behind a borrower.** |
| ⚠️ **Hockey Canada's Glossary: "The goaltender is considered a player, except where explicitly stated"** | Found while refuting a disclosure. **Every place the corpus reads a Hockey Canada *"a player"* rule as reaching or not reaching a goaltender is untested against it.** A corpus-wide sweep is the obvious next round; one agent found it for one rule and could not run the sweep inside its file ownership. |
| **`goaltender.md`'s Key Takeaways: ~13 points in 11 slots, against a maximum of 10** | ⚠️ **This round created the over-count** — `HEAD` has exactly ten. Takeaway 8 is **264 spoken words** and 9 is **271**; 10 already holds two unrelated points. Takeaways 2 and 3 are **not** mergeable — a reviewer checked and declined, because one owns depth's *magnitude* and the other the *ordering* of two attributes. **Item 11 is the neck-laceration safety item, protected by non-negotiables 3 and 4.** Needs an owner's decision about the whole list. |
| **`md_to_speech.py` does not handle `🇺🇸`** | Only `🇬🇧` is mapped. Nothing in `content/` uses the US flag today; an agent introduced one, the dry-run caught it, and it was removed. |
| ⚠️ **TIER 1 — USA Hockey 625(b) stated without its carve-outs in EIGHT summary layers** | The rule voids a goal *"unless the puck has preceded the player(s) into the goal crease or the goalkeeper is out of the goal crease area"*, and does not stop play where *"the attacking player has been physically interfered with by the actions of a defending player that causes them to be in the goal crease"*. Sites: `scanning_and_anticipation.md` · `time_and_space.md` ×2 · `defensive_zone_coverage.md` · `offensive_zone_play.md` · `goaltender.md` · `playing_without_the_puck.md` · `special_teams.md` · `center.md` (has the push-in relief, not the goalkeeper limb). **Direction is over-strict — a reader believes a goal is voided when it stands.** ⚠️ **Not a sweep: four sweeps in this round would have damaged correct text.** |
| **`shooting.md`'s "How to create those shots" block** | At `HARD_MAX = 11`, holding **six rule facts about goaltender interference in a section about creating shots**. Its 8.5(c) predicate had to go to the body and a Key Takeaway. Candidate for the same section split the slap-shot block just received. |
| **A claim that is wrong while POSITIVELY stated** | ⚠️ The negative-existence census says it plainly: *"had it said 'USA Hockey restricts goalies only beyond the red line' I would never have looked."* **No method used in this round would find it.** |
| **~88% of the high-consequence negative-existence set** | 514 match sites counted, ~60 attacked. The remainder is skewed to the low-consequence tail **but is not verified**, and nothing licenses treating it as such. |
| **Whether an upheld absence survives the reader's EDITION** | IIHF 46.6 *"Defender – Unwilling Combatant"* confers a **status** in 2025/26 and in 2026/27 survives only as a discretion the referee **may waive**. Both editions were checked for three claims and **not for the other 21**. |
| **Sections 1–6 and 10+ of the Hockey Canada book** | The two-limb census read Sections 7, 8 and 9 only. |
| ⚠️ **A NEW STALENESS CLASS: a disclosure overtaken by an EVENT, which nothing detects** | Every stale-source finding so far has been a **link that rotted** or a **number that moved**. The BNQ closure is neither: the disclosure was **accurate, sourced, dated and honest**, and the world moved under it. ⚠️ **`check_external_links.py` sees HTTP 200; the quotation still appears verbatim on the page; non-negotiable 4 protects it from deletion.** **Only a refetching pass finds this, and none had been run for that claim since it was written.** **How many other dated disclosures rest on a source that has since posted a notice? Nobody knows, and the corpus has ~40 of them.** |
| ⚠️ **`pdftotext -layout` gives a FALSE ABSENCE on TWO-COLUMN prose — and my brief recommended it** | `-layout` is right for **tables** and wrong for two-column body text: it interleaves the columns line by line. A whitespace-flattened grep for a **safeguarding** claim in the two-column USA Hockey handbook returned **zero hits and looked exactly like an absence**. **Slicing the left 48 characters of each line found it verbatim.** ⚠️ **This is the worst member of the extraction-trap family, because the artefact is indistinguishable from a true negative and the corpus's negative-existence claims are built on exactly this operation.** **Every negative drawn from a two-column PDF needs re-deriving with a column slice.** |
| **~364 of the 454 unlocated quotations remain unfetched** | ~90 reached this round across 9 documents. Untouched: `conditioning_and_recovery.md` (27, incidental only), `practice_and_development.md` (14, none). ⚠️ **Two are genuinely unlocated after searching** — the Respect in Sport participation-condition and fee quotations are **not on the page the corpus cites**, and the page that carries them was not found. **That is the most useful handover in the set.** Two more are unverified only because `icehockeyuk.co.uk` returned **HTTP 504** on 45s and 90s attempts while another path on the same host served fine — **origin-slow, not a block, and NOT an absence.** |
| **CSA product pages now render 'Withdrawn' — unverdicted** | Both pages show the word in the product header immediately after *'Reaffirmed in 2025'*, distinct from the Edition History list. ⚠️ **Deliberately NOT verdicted** — it may be a login-gated widget artefact. **Given the Canadian regulation references Z262.1 *'as amended from time to time'*, this needs a real browser before anything is written about it.** |
| ⚠️ **ALL THREE no-trapezoid books carry a freeze restriction, not two — CARHA 58(b) is the third** | *'…when the puck is behind the goal line and the goalkeeper's body is entirely outside the boundaries of the goal crease area'* — the same shape as USA Hockey **614(c)(1)** and Hockey Canada **Interpretation 3 to 10.1(a) clause v**. ⚠️ **An agent verified this and DELIBERATELY DID NOT SHIP IT**, because it would have meant a new CARHA source entry in three files and it kept to the two-governing-body formulation the majority of the fifteen sibling sites use. **That was the right call and it is why this is a row.** Whoever standardises the residue next should decide whether CARHA joins the counterweight. |
| ⚠️ **The fifteen residue sites may now carry TWO SHAPES of the same repair** | Three were made consistent with the majority formulation by an agent that read only its own five files. ⚠️ **If another agent standardised on *'USA Hockey, Hockey Canada and CARHA'* while this one used *'Neither North American governing body's book'*, the corpus carries two shapes of one repair — visible only to a corpus-wide census, which is the coordinator's job and has not been run.** |
| **The renderer expands numerals INSIDE quoted rulebook text** | CARHA's *'For the purpose of 2-line passes'* is voiced *'two-line passes'*. ⚠️ **Faithful in this instance — but it means quoted rule text is not read verbatim**, and the corpus's whole quotation discipline rests on verbatim. Same family as the `hand(s)` → *'hands'* decision already recorded as deliberate. **Nobody has censused how often an expansion changes a quotation's sense rather than merely its form.** |
| ✅ **CLOSED — `limb` is defined**, in the glossary, teaching the distinction rather than the convention | ⚠️ **My count was understated: 376 rulebook-sense uses across 28 documents**, not 346/26. ⚠️ **And a grep trap worth keeping: `climbs` contains `limb`** — a bare `grep -o limb` returns 396. Use `\blimbs?\b`. ⚠️ **The ordinary sense is live in VOICED BODY PROSE in three documents** (`mental_game.md` *'not at your own limbs'*, `shooting.md` *'the goalie's fastest-moving limbs'*, `scanning_and_anticipation.md` *'limb motion and trunk orientation'*) — **the one I cited sits in a Sources trailer, voiced at zero characters.** The collision is **heard**, not merely present on disk. ⚠️ **And the glossary's own `Screen` entry already used the term** — the corpus's dictionary was using an undefined word inside its own definitions. |
| ⚠️ **376 `limb` USE sites remain unexamined, and the defect there is invisible to every check** | ⚠️ **A limb count that is simply WRONG — a rule described as having four limbs that has three — is invisible to every checker and to the grep that finds the sites, because the defect is in the ARITHMETIC against the rulebook, not in the word.** The one site counted by hand this round (NHL/IIHF 69.7) came to four and was verified in both books. **That is 1 of 376.** ⚠️ **And a third sense nobody has looked for:** a site using `limb` where the convention calls for `clause` or the book's own printed name — i.e. to LOCATE a provision rather than COUNT one. **Needs a reader per site, not a grep.** |
| ⚠️ **AN HONEST DISCLOSURE THAT IS FALSE BECOMES PROTECTED — attack this one from outside the repo** | `rink_map_and_glossary.md` now asserts **in voiced prose**, at three sites, that *'no measured distribution of rink sizes stands behind'* its rec-rink ranges. That negative was verified against `sources/` and `content/` **only — not against the network.** ⚠️ **If a published rink survey exists, the corpus now states a false negative about the evidence — and under non-negotiable 4 that statement is protected as an honest disclosure.** **That asymmetry is what makes a false negative durable**, and it is the sharpest methodological point of the round. Someone must attack it from outside the repository. |
| ⚠️ **ONE CLAIM, 17 COPIES, 15 DOCUMENTS, 10 FORMULATIONS — and it is load-bearing** | *'Most North American rec and youth hockey runs on USA Hockey or Hockey Canada.'* **None sourced.** In most of the 17 it is the sentence telling a reader **which of the four rulebooks applies to them**. ⚠️ **A claim generated once and stamped into fifteen documents is ONE unsourced claim with seventeen copies, not seventeen corroborations.** ⚠️ **The repair must NOT remove the sentence's job** — its function is to route the reader to their book; the defect is asserting a distribution as measured fact. **Keep the routing, label the distribution.** A citable figure now exists (IIHF Survey of Players, Nov 2024: USA Hockey **566,450**, Hockey Canada **587,680**) — ⚠️ **but it is a numerator with no denominator and does NOT settle the claim.** Sites: `rules_primer` ×3, `winger` ×2, `center`, `goaltender`, `switching_positions`, `zone_entries` ×2, `faceoffs`, `defending_the_rush`, `offensive_zone_play`, `risk_management`, `puck_handling`, `shooting`, `passing_and_receiving`. |
| ⚠️ **`rules_primer.md` contradicts itself in three lines, and a borrower reproduces it faithfully** | *'Rec and beer leagues: **most commonly, ties simply stand**… **This varies league by league, with no general practice to rely on.**'* ⚠️ ***'Most commonly X' IS a general practice.* The two sentences cannot both be true.** `shooting.md` cites this document as owner and carries **both halves**. **The evidence points at the second:** CARHA's Glossary entry *'Game'* — *'in accordance with league or tournament regulations'* — **the one standalone rec book on disk declines to set a tie-breaking practice at all.** Nothing sources *'most commonly ties simply stand'*. **Fix at the owner; the borrower then inherits it.** |
| **`equipment.md` states one claim four ways while citing the rulebook that answers it** | An expired certification sticker: *'what American leagues reference'* (no quantifier) · *'unusable for youth or travel hockey'* (none) · *'in **most** youth and travel leagues'* · Common Mistakes *'illegal in **most** youth and travel leagues'*. ⚠️ **The same document already carries the book fact** — USA Hockey Rule 304: a HECC-certified helmet is required **in every age classification except Adults**, and an expired sticker means it is **no longer certified**. `HECC` occurs **21 times** in `usah.txt`. ⚠️ **This is the `equipment.md` helmet-replacement shape the style guide records as a worked failure, recurring in the same file for a different claim.** |
| **`rules_primer.md` officiating crew size — CARHA answers it as a RULE** | *'In rec hockey you will most often see two officials, not four, each doing both jobs.'* Unsourced. **CARHA Rule 40(a)**: *'there shall be **two Referees**…'*; **40(d)**: *'**Two Referees will be used in all games** and they shall have equal authority. If the Referees are not of the same opinion… the Referee who was closest to the play shall have the final decision.'* The document already cites CARHA in its §10 and Sources trailer. **Scope it CARHA-affiliated-only, then the residue sentence.** |
| ⚠️ **Four disclosures live ONLY in a Sources trailer or only in a body, qualifying claims stated flat in a voiced layer** | Trailers are **zero spoken characters** and a closed `<details>`. Worst: **`rink_map_and_glossary.md`** — the glossary twenty documents link to — whose §*'Rec rinks are not standard'* makes **four flat prevalence assertions about rinks** (including the 170–190 ft and 65–80 ft ranges, and an **Overview** claim) whose only qualification is *'general observation, not a sourced standard… this document does not claim a distribution'*, **in the trailer**. Also `rules_primer.md`'s whole rec-league comparison **column**, and `body_contact_and_battles.md`'s fighting-policy census disclosure. ⚠️ **Sources may REPEAT a disclosure; Sources may not be the only place it lives.** |
| ✅ **CLOSED — a zone-polygon checker now exists (`scripts/check_zones.py`)** | Reads the **built SVGs**, so it sees the coordinates the reader gets. Current run: **112 diagrams · 28 labelled zones · 23 distinct labels**, of which **only 3 appear in more than one diagram** and are therefore actually compared — `the high slot` (4), `the slot` (2), `the middle` (2). ⚠️ **Sabotage-tested**: reverting one high-slot polygon makes it report *'3.14x smaller'*, the exact ratio a reviewer found by hand. **The high slot and the slot now agree everywhere — the repair confirmed by an independent instrument.** |
| **`the middle` is drawn as two different regions — judge, do not assume** | `rush-gap-and-angle` draws x −54→−83, y ±22 (**1,276 sq ft**); `nz-back-off-at-the-line` draws x −25→−69, y ±14 (**1,232 sq ft**). Nearly equal in area, **different in position and shape**. ⚠️ Unlike *the slot*, **'the middle' is not a defined rink region in `rink_map_and_glossary.md`** — it is a loose descriptor, and two diagrams in different situations may legitimately use it for different ice. **Read both and decide**; this is exactly the hit the tool exists to surface and exactly the hit a sweep would get wrong. |
| ⚠️ **A warning inside a NOTE callout gets the amber band and the note's GREEN text** | Measured `rgb(44,91,63)` light / `rgb(134,198,162)` dark **inside** a `.warn-inline` span — green text on a pale amber band, both themes, both viewports. ⚠️ **Colour semantics inverted for the text**, and it **directly contradicts the plugin's stated reason for not skipping note callouts** (*'that panel is not warning-coloured, so the glyph in it is as unmarked as one in open prose'*). **The pass runs; CSS specificity defeats it.** Cause is `site/src/styles/global.css`. Still legible (band + emoji), so Major not Critical. |
| **`.callout-warning` colours only its FIRST paragraph** | `.callout-warning > p:first-child strong` reaches nothing in a later paragraph or list item, and `markInlineWarnings` skips the whole callout as already-warning-coloured. **3 of 24 glyph sites on one page render at plain body colour.** ⚠️ **The glyphs must NOT be deleted to tidy this:** `md_to_speech.py` uses `important = \"⚠\" in text` to prefix the spoken unit with **'Important.'**, so removing a glyph silently removes that from the audio. Fix belongs in `global.css`. |
| **`rules_primer.md` — the last citation-emphasis site** | `⚠️ Under **Hockey Canada Rule 6.11(b)(ii)**` bolds the **citation** rather than the caution, so the page gives amber to a rule number. ⚠️ **My brief listed this one as fine** (*'the strong run completes a claim'*) **and it is the identical defect** — 4 of 5, not 3 of 5. Three were repaired; this is the one left. The shipped pattern: **amber band runs glyph → citation → caution, citation in regular weight INSIDE the band, caution in bold.** |
| ⚠️ **`astro preview` binds IPv6 ONLY** | `curl 127.0.0.1:4322` fails; `localhost:4322` works. Cost two reviewers time. Environment fact, recorded so the third does not rediscover it. |
| **`defender-three-depths` shades a depth band across the crease and the goal frame** | The third band, labelled *'a commitment'*, runs **through the goal crease and the goal frame**, and its centroid label is drawn over the net. ⚠️ **The band's meaning is a DEPTH, so drawing it across the crease asserts that 'below the circles' includes the goaltender's paint.** It is also ±30 where the other two bands are ±38. Found by a reviewer that **declined to fix a second thing silently in a diagram nobody had briefed** — the right call, and the reason this is a row rather than a repair. |
| ⚠️ **67 of 112 diagrams have been RENDERED but never LOOKED AT** | Coordinate, tangent, curve, zone and collision data are clean for all 112 — **that is not a substitute for looking.** Named so the gap is not silent: **all 9 `breakouts`, 5 of 6 `defending_the_rush`, 7 of 8 `defensive_zone_coverage`, all 4 `goaltender`, all 10 `special_teams`, both `rules_primer`**, plus 22 in the three modules just repaired. ⚠️ **And every render so far has been light theme at ~1100 px.** The `nz-1-3-1` arrowhead legibility and three faceoff glyph-touch findings **will be worst at 375–390 px and in dark theme, and neither has been measured there.** Named by two reviewers as the single highest-value remaining diagram work. |
| **A `zone` polygon drawn 3.14× its definition passes EVERY gate this project has** | `check_geometry.py` validates named **points** — its only slot assertion is that the slot's x exceeds the top of the circle. `check-arrivals.mjs` **never reads `zones` at all.** ⚠️ **So the high-slot defect was invisible to every mechanical check, and was found only by a reviewer comparing two polygons in a table.** No checker covers zone polygons against their owner document's definition. **That checker does not exist and would be cheap.** |
| ⚠️ **RENDERER — a quoted parenthetical STUTTERS when it restates the words before it** | Rulebooks write *'two (2) Players'*, *'six feet (6')'*, *'within five feet (5')'*. The corpus quotes them verbatim and correctly; the renderer expands the bracket, so a listener hears **'the two (two) Players'**, **'six feet (six feet)'**, **'five feet (five feet)'**. Reported independently by two agents. **~60 candidate sites; the `(2)` form alone is at five, four of them in one rule's quotation.** ⚠️ **The fix is NOT a pattern match.** `four feet (44')`, `eight feet (28')` and `five feet (85')` look identical to a regex and are the TAILS of *'twenty-four feet (44')'*-shaped phrases where the numbers genuinely differ — a naive rule would delete real information. It must **parse the spelled number and compare VALUES.** ⚠️ **And it must PRESERVE the informative case**: *'a major penalty (5')'* voices as *'five minutes'*, which is right and load-bearing. Text is correct throughout; this is audio only. |
| ⚠️ **`special_teams.md` §'You may ice the puck freely' is doing TWO jobs and the cap is saying so** | At **11/11 with 8 `Rule:` values**. CARHA **Rule 55(a)** confines the puck-out-of-play minor to *'any goalkeeper who shoots or bats the puck out of the playing surface'* — **a CARHA skater's clear over the glass is not penalised at all**, which is a genuine four-book divergence the section cannot hold. ⚠️ An agent **declined to add it to the body alone**, because that creates the body-✓/block-✗ asymmetry this project treats as a defect class. **The section covers the icing exemption AND the puck-out-of-play minor; it needs splitting on that seam, which is an owner's decision, not an agent edit.** |
| **Two uncounted prevalence claims deliberately left, needing a judgement** | `special_teams.md` — *'as at many rec and older facilities'* (**rink construction**, not book adoption). `faceoffs.md` — *'Many rec, beer and youth leagues enforce faceoff violations loosely or not at all'* (**enforcement practice**, and the same paragraph already tells the reader to ask). ⚠️ Both are a **different class** from the book-adoption prevalence claims repaired this round, and an agent correctly declined to sweep them into that repair. Neither is sourced. **Decide: label, source, or accept as hedged practice observation.** |
| ⚠️ **The prevalence census that would find a STRICTLY LARGER set, unrun** | Key on the **population noun alone** — read every sentence naming a league, rink, association or club — rather than on a quantifier. ⚠️ *'rec leagues don't call this'*, *'your league won't have one'*, *'nobody enforces that below junior'* are the same claim **with the quantifier deleted** and match no quantifier census. The agent that ran the quantifier version said plainly: **'I widened the vocabulary, I did not change the method.'** Fifth time this trap has been named here. |
| ⚠️ **ONE FETCH would convert a dozen prevalence claims into fact** | USA Hockey and Hockey Canada **publish annual reports with registration numbers**. Nobody has tried to fetch one. Every *'most rec leagues…'* claim currently ends as labelled residue (*'a question about leagues rather than about books, and this document has no count for it'*) — **a single sourced membership figure would settle several of them outright.** Highest value-per-effort item on this list. |
| ⚠️ **`sources/carha.txt` (206 KB) is present and was UNCONSULTED by the documents that needed it** | It answers slap shots (Rule 79(a)), icing (65(a)), body contact (49(a)), puck-out-of-play (55(a) — **confines the minor to the goalkeeper alone**, so a skater's clear over the glass is not penalised under CARHA at all) and the trapezoid (**zero hits — the book has none**). ⚠️ **A book can be present, extracted, cited by ONE document, and unopened by the document that most needed it** — the *registered-and-absent* trap inverted, and **neither the README nor the style guide can detect it.** Two criticals this round turned on it. |
| **Trapezoid: 15 sites, 10 documents, 6 formulations** | More than the 12 previously counted. ⚠️ The *'outside Britain'* formulation is **refuted by the corpus's own UK owner**, which quotes **England Ice Hockey R&R 22.3** — *'Goalkeepers' Restricted Area is not currently enforced'* — and says that is *'why so many British rinks have no trapezoid painted on them.'* So it implies the reverse of its owner. **The honest outlier to copy** is the `rules_primer.md` Key Takeaway, which alone carries the unsettled-status counterweight. |
| ⚠️ **A NEW QUOTATION-INTEGRITY SHAPE: the unmarked elision INSIDE the quotation marks** | Found by a character-by-character sweep: a quoted rule sentence with **`(2')` silently removed from its middle**, no ellipsis, where the **same sentence is quoted correctly WITH it in four other places in the same file**. ⚠️ **It reads as a complete verbatim quotation and is not one** — and unlike a truncation, a reader who checks it **finds the sentence and stops**. Two *truncated* quotations of IIHF 101.1 were also found this round, in a blockquote and in body prose, each ending mid-sentence inside the quotation marks. **Nobody has run this sweep corpus-wide.** The method: extract every `*\"…\"*` span, match each against a whitespace-flattened copy of its primary, report located/not-located. One file scored **13 of 14** before repair. |
| **The cervical mechanism names only the wall in more documents** | USA Hockey's guide says *'head-on contact with the boards **or goal post**'* twice; a head-first collision with the post is the **same axial-load mechanism, and the net-front is where it happens**. Repaired in `skating.md` and `body_contact_and_battles.md`; still live in `defender.md`, `winger.md` ×3, `switching_positions.md` and `puck_support_and_spacing.md` — **three of them the body ✓ / facts ✗ shape**. ⚠️ **One site naming no object was judged NOT a defect** (making a different point), so this is not sweepable. Dispatched. |
| **The six untouched diagram specs in `playing_without_the_puck.mjs`** | A reviewer read all seven captions but checked the **geometry** of only the one it repaired. ⚠️ Its own note: *'a route drawn finishing at a skater's back is a contact picture no text search will surface, and the file's own comments record that shape being graded Critical twice before.'* **`diagram-reviewer` on the pictures, not the captions.** |
| ⚠️ **OPEN — a Hockey Canada no-change consequence cited to a rule with no exception list** | `risk_management.md`'s Key Takeaways states *'in Hockey Canada's Junior and Senior divisions an unintentional one is no penalty but no line change either (Rule 6.4(a))'*. **6.4(a) is *puck out of play*, a different rule from 6.7(d)**, and its printed text **carries no exception list at all** — only Note 1 on the deliberate case. HC **6.7(d)(i)** does carry the three exceptions including *'(2) To replace an injured player'*. ⚠️ **An agent declined to copy 6.7(d)'s injury limb onto the 6.4(a) statement** — that would be the 63.8 fabrication in a different rule. **Whether HC's general substitution provisions reach 6.4(a) is unresolved.** `rules-verifier`. |
| **A new defect class: a citation load-bearing on the WRONG LIMB** | Accurate as a quotation, attached to the correct rule number, and **naming the one limb that does not reach the taught scenario**. USA Hockey 614(c) limb (3) covers *outside* the privileged area; Casebook Situation 14 puts the area *behind the goal line, out to the end boards* — so a goalie freezing a rim behind the net is **inside** it and limb (3) misses. Limb **(1)** bites. ⚠️ **A reader who checks the cited limb finds it does not apply and concludes there is no penalty — it checks out backwards.** **No checker can see this**, and `check_rule_scope.py` would pass it. **Nobody has censused the corpus for other sub-clause citations that fail their own scenario.** |
| ⚠️ **GATE BLOCKED — two defects THIS ROUND INTRODUCED** | **1.** `time_and_space.md` states Hockey Canada 8.5 with **three of its four conditions dropped** — the rule allows the teammate's goal *'provided that the player who was in the goal crease does not attempt to play the puck, interfere with the play or obstruct the Goaltender's view **or movements**'*. Voiced alone the value says the goal stands unless the **view** is blocked, and it **contradicts its own sibling** in the same file. ⚠️ **This was the 'deliberate compression' its author flagged as wanting a second reader — the reader says it does not hold.** **2.** A **'free to get back'** limb is NEW to the corpus in this diff and travels in **five formulations across seven documents**, four of them under `Rule:` **without the Casebook citation it derives from** (USA Hockey Casebook 625 Situation 9) — 625(b) itself says only *'the goalkeeper is out of the goal crease area'*. The compression also **loses the Situation's agency limb**: it disallows only where *'there is any interference **by the attacking player**'*, not where the goalie is blocked by any cause. Dispatched. |
| ⚠️ **C10 — the site's RENDERING changed and nobody has opened it in a browser** | `remark-corpus.mjs` gained a `WARNING_NEAR_RE` that wraps **up to 48 characters of prose BEFORE a strong run** — it changes what gets wrapped in `warn-inline` across the whole corpus. **The record's own figure of 588 spans is already stale: the built `dist/` has 609.** ⚠️ **A wrapper that changes where a warning appears to BEGIN can change what the warning appears to COVER** — that is safety-relevant, not cosmetic. `npm run build` passes (50 pages, 9,682 links resolving), so **a build pass is not the question.** Also unviewed: nine changed diagrams, three new/split headings (**headings are link targets**), and a caption that grew ~300 chars and has never been seen at phone width. Dispatched. |
| ⚠️ **C3/C8/C11 — a record can satisfy a gate and still not cover the work** | Three failures found together, and each is a different shape. **C8:** two headline criticals (76.5 at a faceoff; IIHF 101.1's two provisos) were in the **commit message** and **not in `project/reviews/`** — *a commit message is not a record*. Now entered. **C3:** the last dimension table cites `--self-test` at **180** and **5,138 facts** against a staged **188** and **5,160** — *a dimension table goes stale the moment work continues past it*. **C11:** the last wave included **merges, splits and renumbering**, not repairs confined to a finding, which **voids the terminating clearance**. ⚠️ **The generalisable check, which takes one line and which nothing else in the gate performs:** for each staged `content/` file, is its basename named in a **staged** record? It found six. |
| **Two same-round divergences the gate raised as non-blocking** | `game_management.md` states IIHF 101.1 with the *'clear intention'* limb but **not** the *'with the exception from the situation described in this rule'* limb — while `body_contact_and_battles.md` was repaired **this same round** to carry both, so the corpus states one safety-critical rule two ways. And `breakouts.md` cites USA Hockey 614(c) for one of its limbs. Dispatched. |
| ⚠️ **TIER 1 — NHL/IIHF 81.4's THREE substitution exceptions are absent from 17 sites, 13 of them facts values** | The rule's own next sentence: *'**However**, a team shall be permitted to make a player substitution to replace a goalkeeper who had been substituted for an extra attacker, to replace an injured player, or when a penalty has been assessed which affects the on-ice strength of either team'* (`nhl_rules_layout.txt:7322-7330`). **Prohibition and exceptions are two consecutive sentences of one rule.** ⚠️ **Four documents contain the exception list NOWHERE AT ALL** — `defender.md`, `goaltender.md`, `winger.md`, `scanning_and_anticipation.md`. **The loss is an ENTITLEMENT: a team with an injured player on the ice for its own icing believes it must leave them there.** ⚠️ Worst in `goaltender.md`, which states the bare prohibition **twice inside its own 6-on-5 passage** — the exact situation the first exception is written for (confirmed in the rendered audio). **`center.md:595` fits all three plus the IIHF divergence inside the 300-char budget and is the model.** All four dispatched. |
| ⚠️ **USA Hockey 625(b)'s push-in relief REMOVES A DISINCENTIVE where it is missing** | ¶3: *'**However**, if the attacking player has been physically interfered with by the actions of a defending player that causes them to be in the goal crease, play shall not be stopped and any legal goal scored shall be allowed.'* ⚠️ **This is the case where 'an omitted relief is safe because it only makes the reader more cautious' INVERTS.** `defensive_zone_coverage.md:78` sits in a block headed *'The Universal Principles'* in the **defender's** document; voiced alone it says an attacker in the paint kills the goal **however they got there**, which is the incentive ¶3 exists to remove. Also whole-document absent from `body_contact_and_battles.md`. **The relief covers POSITION, not conduct** (`shooting.md:471`) — it must never be rendered as 'contact in the crease is fine'. Dispatched. |
| ⚠️ **The census shape nobody has run: *'most … leagues/associations/rinks'*** | The trapezoid census worked **only because `trapezoid` is a distinctive word**. The same unsourced-prevalence shape almost certainly recurs for **glass height, rink dimensions, no-touch icing and body-checking age bands**, where the sites share no distinctive term and no grep will gather them. ⚠️ **A census keyed on the PHRASE SHAPE rather than the subject, read rather than swept.** Nobody has run it. |
| **An exception that lives in a Casebook situation rather than in the prohibition's own sentence** | The prohibition-then-exception census required the connective within ~300 chars of the prohibition, so **USA Hockey's structural habit of putting the carve-out in the Casebook is invisible to it by construction** — as at Rule 625 Situation 9, which the corpus does happen to carry. **The whole class is unsearched.** |
| **`dump-and-the-trapezoid` caption states a restriction wider than NHL 27.8** | *'The marked lines behind the net are **the only area in which he may play the puck**'*. 27.8 restricts a goalkeeper only **behind the goal line**; a goalie may play the puck anywhere in front of it. The next sentence restores the scope, so it is a **wording risk, not a factual error** — but the clause is heard before its qualifier, and captions are voiced. Dispatched. |
| **`rink_map_and_glossary.md:527` — an evidential claim whose only attribution is in an unvoiced layer** | *'Analysis of NHL pairings has generally found that pairs with each defenceman on their natural side perform better…'* No source named inline; the Sources trailer cites *Hockey Graphs — Quantifying the Importance of Handedness*, and **that trailer is never voiced and renders as a closed `<details>`**. For a listener this is a bare appeal to unnamed 'analysis' — the folklore shape. **Not verified and not edited.** Needs `source-verifier` to confirm the article says this, after which the attribution should move into the body where it can be heard. |
| ⚠️ **The `Rule:` label is carrying non-rule claims** | Two trapezoid sites stated a **prevalence claim about leagues** under `Rule:`, which the style guide reserves for *'a rulebook rule and nothing else'*. Both dispatched — **but nobody has censused the `Rule:` label corpus-wide for non-rule content.** 5,148 facts exist; this was found incidentally by a census looking for something else. |
| ⚠️ **RETRACTED — `scripts/check_chunk_tails.py`'s premise was FALSE** | It was built believing a chunk is a separate audio file a listener might never open. **`AudioPlayer.astro:11` plays ONE mp3 per document** and `md_to_speech.py` chunks only to fit Polly's per-request limits, then **concatenates**. A boundary is a seam inside one continuous file. ⚠️ **The row below at 'POSITION IN A CHUNK IS IRRELEVANT' already said so, from two independent agents, before the tool was built.** The defects it surfaced are real — they fail the ordinary standalone test — but **every severity ranked on 'the next file' is over-ranked.** Re-rank on the standalone reading alone. Also: **only a `##` heading opens a chunk, never `###`** (`md_to_speech.py:2451`), so a section split can never move a boundary on purpose. |
| ⚠️ **The cervical-spine quantifier rests on a SIX-PATIENT case series** | USA Hockey's *Heads Up Hockey* credits *'almost all on-ice cervical spine injuries'* to Tator et al., Can J Neurol Sci 1984;11:34–41 — **PMID 6704792, pubType `Case Reports`**, six patients at one Toronto unit, five with the flexed-neck mechanism. **USA Hockey printed the wrong one of two same-year Tator papers**; the matching one is the national survey, Can Med Assoc J 1984;130:875–880 (PMID 6704840). ⚠️ **The safety instruction is NOT in doubt and must not be softened** — head up, chin off the chest, never duck. **Six documents inherit it; two narrate 'almost all' in the corpus's own voice.** Dispatched. |
| ⚠️ **`rules_primer.md:856` states a live FALSE NEGATIVE** | *'fend off … appears nowhere in that book'* of USA Hockey. It appears in the **Casebook**, Standard of Play Situation 6 (`usah_casebook.txt:18431`), in the same words the NHL uses. **Two siblings already carry the repaired scope and contradict it** — `puck_handling.md:439`, `winger.md:114`. A remnant, not a fresh error. **Do not delete — correct the scope** to 'its playing-rules volume'. Dispatched. |
| ⚠️ **DIAGRAM CAPTIONS ARE SPOKEN, and no `content/` grep reaches them** | `md_to_speech.py:594` loads `site/src/data/diagrams.json`; line 632 emits `\"Diagram. \" + entry[\"caption\"]`. A caption carries every standalone hazard a facts value does. ⚠️ **`diagrams.json` is GENERATED but TRACKED** — hand-editing is silently reverted by `build-diagrams.mjs`. **The `describe:` blocks are also emitted and nobody has read them.** |
| **`limb` is undefined in 26 documents** | 346 uses in rulebook context, no glossary entry, no inline gloss — while its ordinary sense is live in the same corpus (*'Lower limb injuries…'*). Read aloud, *'Rule 69.7 runs to four limbs'* is not a sentence a listener parses. Breaks the style guide's *'no jargon without definition on first use'* at scale. ⚠️ **A brief this round called `limb` 'established in two documents'; it is the corpus's DOMINANT unit** — any plan assuming otherwise mis-scopes by an order of magnitude. |
| **56 paragraph-layout sites sit on rules nobody has opened** | 82.1, 81.4, 10.1, 76.7, 76.6, 76.4, 625(a), 69.1, 6.2, 6.4, 7.3, 5.1, 56.1, 54.1, 63.8, 83.3, 614(c), plus 18 with no rule number in the window. **All 8 known-wrong ordinals were found among the 129 that WERE opened; the base rate in the other 56 is unknown.** ⚠️ **Do not sweep — 121 of 129 are correct**, and the two a regex would most confidently 'fix' are the two most careful sentences in the corpus. |
| **PWHL Rule 52.1 is cited with no PWHL rulebook on disk** | `body_contact_and_battles.md:116` and `:137`. `ls sources/*.txt` has 26 files, none PWHL. **Unconfirmed, not contradicted, and NOT removed** — non-negotiable 3. Needs `source-verifier` to fetch the PWHL rulebook, or a provenance row in `sources/README.md`. |
| **USA Hockey 204(b) has a THIRD substitution trigger the NHL does not** | *'or causes their team to gain a competitive advantage'*, applied by **Casebook Rule 204 Situation 8** (`usah_casebook.txt:2594-2610`) where neither player touches puck or opponent but the change turns a 2-on-1 into a 2-on-2 — **'Yes… should be penalized.'** A reader trained on the NHL's two triggers believes that change legal. Repaired in four documents; **hand to `safety-reviewer`**, and nobody has censused whether other NHL-scoped trigger lists drop a fourth-book limb the same way. |
| **`md_to_speech.py` renderer defects found by rendering, not grep** | ⚠️ **`01:00` collapsed to 'one minute'** and five wall-clock times voiced as game clocks in `conditioning_and_recovery.md` (fixed in content, since `10.30pm` tokenises with a raw `.` mid-time). **`12U` voices as 'twelve U' while `U13` voices as 'under thirteen'** — house-style question, unsettled. **A value opening with a digit-word is lowercased at sentence start** (`goaltender.md:989`, *'Rule. six F is your excessive force…'*). ⚠️ **None of these is visible to any grep over `content/`.** |
| ✅ **CLOSED — hyphenated numeric ranges with spelled-out units** | `'30-35 seconds'` voiced **'thirty-thirty-five seconds'**. Cause: `_UNITS_ALT` holds only abbreviations, so the range matched no rule and fell to `bare-number` twice; the en-dash form was rescued by `numeric-range`, which takes `–` and not `-`. **Fixed by a new `range-with-spelled-unit` rule.** ⚠️ **Widening `numeric-range` to take a hyphen was the obvious fix and is WRONG** — `2025-26 edition` appears 100+ times and would voice as 'two thousand and twenty-five to twenty-six'. **5 of the 8 broken sites are inside QUOTATIONS**, which is why it had to be a renderer fix. Self-test 180 → 188. |
| **Hockey Canada's Interpretations** | Read by nobody this round as a class. They routinely narrow or redirect a tier — Interpretation 2 to 9.2(b) sends a cross-check above the shoulders out of Rule 9.2 into Rule 7.6 entirely, and the corpus relies on it. |
| ⚠️ **AN UNSOURCED EMPIRICAL CLAIM ABOUT WHO IS PROTECTED** | `rules_primer.md` states that *"visors are not universal in beer-league play"* as the reason high-sticking matters there. ⚠️ **That is an unsourced claim about facial protection — the only equipment-adjacent sentence in the added text.** A safety reviewer declined to rule on it because it is not a hazard instruction, but flagged that **it is a claim about who is protected, and deserves either a source or a label.** |
| **EQUIPMENT, MEDICAL and LOAD hazards are absent from the DIFF, not from the corpus** | A safety reviewer noted precisely: *"Nothing I did tells you whether the neck-protector, helmet-certification, concussion or youth-loading material elsewhere is still sound."* ⚠️ **That coverage needs a pass scoped to `equipment.md`, `conditioning_and_recovery.md` and `practice_and_development.md`** — none of which any reviewer has opened this round. |
| **A shot-blocking head cue exists only as a cross-reference in a penalty-kill block** | `special_teams.md`'s kill block carries *"in the lane before the shot"*, *"never from a screening position"* and *"if you cannot get into the lane, get out of it"* — **but no head or face cue**, where `center.md` carries *"head out of the lane and hands tucked."* ⚠️ **The section deliberately delegates technique and the pointer IS voiced, so this is weak placement rather than absence.** Routed as a judgement. |
| ⚠️ **~35 paragraph ordinals across the corpus are UNCHECKED, and the class has produced four defects today** | An agent enumerated **44 uses of "third/fourth/… paragraph"** in `content/` and checked only those touching Rules 69.3, 69.4, 69.7 and USA Hockey 625(b). ⚠️ **Four were wrong** — NHL 69.7 is three paragraphs not four, NHL 69.3 is five not four, NHL 69.4's returning-goalkeeper clause is third not fourth, and one IIHF ordinal is unsupportable in either direction. **The remaining ~35 sit in `rink_map_and_glossary.md`, `defensive_zone_coverage.md`, `body_contact_and_battles.md`, `team_play_and_culture.md`, `shooting.md` and elsewhere.** ⚠️ **The method: `pdftotext -layout` preserves first-line indent — openings sit deeper than continuations — and a clause beginning MID-LINE cannot be a new paragraph. For the IIHF, first check whether PAGE FURNITURE contaminates the region: a blank line beside a form feed or running header is not a paragraph break.** |
| **"clause" vs "paragraph" is now inconsistent between documents** | Each file-scoped agent chose its own word. The corpus has settled on **"limbs"** where a **count** is needed (true of both books) and **"clause"** where a **provision is located** (makes no typographic claim) — but only in the files touched today. ⚠️ **A census is needed; a file-scoped agent cannot see it.** |
| ⚠️ **TRAP — stale renders in the shared session scratchpad read as live defects** | An agent nearly reported `rules_primer` chunk 115 as still carrying a wrong ordinal. **It was a render from before that file was repaired.** It caught it only by reading the markdown. ⚠️ **Renders are timestamped artefacts of a tree that has moved. Establish what the corpus says from `content/`, never from a render in the scratchpad.** |
| **BODY-PROSE chunk tails are now measurable — 233 grant something, and the number is the signal, not the list** | `check_chunk_tails.py --prose` scans the class that was entirely invisible: **a body permission separated from its limit by an audio file boundary.** ⚠️ **Sampled and honestly characterised: MOSTLY NOISE.** Several sampled hits are self-contained (*"The rotation rules are a coaching choice… so ask which your team plays"*), and at least one is a plain false positive — *"a **free**, honest measure of your extension"*. **This is a reading list, not a finding list, and it must never become a gate.** ⚠️ **Its real use is DIFFERENTIAL: run it before and after any repair that adds a paragraph to a rule passage.** That is what would have caught the `shooting.md` case where the fix created the defect it was closing. **The durable remedy is now in the style guide: fold the limit into the same SENTENCE as the permission — the chunker cannot split inside a sentence.** |
| ⚠️ **A POINTER CREDITS `goaltender.md` WITH A LIMB IT DOES NOT HOLD — caught before it propagated** | A repair to `forechecking_systems.md` added a pointer naming `positions/goaltender.md` as holder of the four-book position on contact with a goaltender, and the repairing agent flagged that it had **not confirmed the USA Hockey limb is there.** ⚠️ **Measured: it is NOT.** `goaltender.md` holds **625(b)** and **625(a)(8)** but **no 607(d), no 607(c), and not Note 1's *"any accidental or unavoidable contact… shall be penalized under the Interference rule"*.** **The pointer must either be narrowed or the owner must gain the limb.** ⚠️ **This is the check-the-owner-both-ways failure the style guide records for `special_teams.md` and USA Hockey 624(b)(1) — and the only reason it was caught is that the agent named the check it had not run.** |
| **IIHF modality census — 60.4, 45.4 and 51.3 all CORRECT corpus-wide; 52.2 wrong in three files** | Censused every corpus site for the five rules a reviewer flagged. ⚠️ **60.4 carries *"automatic"* at every site; 51.3 likewise; and 45.4 correctly does NOT claim an automatic game misconduct — the corpus already knows 45.4's is discretionary.** **52.2 is the only failure**, understated as *"a discretionary major"* in `rules_primer.md`, `risk_management.md` and `defending_the_rush.md`, where the book prints *"The Referee **shall**, at their discretion, assess"*. **Routed.** ⚠️ **`58.3` (butt-ending) has NO IIHF-scoped site anywhere in the corpus** — a gap, not an error. |
| ⚠️ **A British reader gets the NHL tier and no ceiling for ELBOWING** | `body_contact_and_battles.md` warns about elbowing — *"Hands, forearm, stick and elbow are all illegal"*, *"an extended elbow is elbowing"* — citing **NHL 45.1 only**, in a document whose premise is that British readers run the IIHF book. ⚠️ **IIHF 45.4 reaches a major plus a game misconduct for reckless elbowing with nobody hurt.** The reviewer declined to author it in — new content, not verification — which was right. **Same gap for 51.3 and 58.3.** |
| ⚠️ **A BRIEF ERROR OF MINE that would have sent a verifier to the wrong table, in both editions** | I told an agent IIHF Appendix IV **Table 8** is *"majors based on the Referee's judgement"*. ⚠️ **Wrong: in v1.1 that is Table 7, and v1.1 has no Table 8 in that sequence at all.** ⚠️ **Worse, in the 2026/27 book the automatic-versus-judgement distinction is GONE from the appendix entirely** — the merged Table 5 carries only *"MAJOR ONLY"* / *"MAJOR + GMP"* columns, so **under the current book the rule text is the only record of it.** **Never cite Table 8 for this. The agent caught it and said a verifier relying on my numbers would have read the wrong table in both editions.** |
| ⚠️ **The chunk-terminal worklist is now 34 grants, not 29 — and FOUR of six blocks read are at `HARD_MAX`** | Widening `GRANTS` to catch **relief-shaped** values (a carve-out saying an act is *not* what costs you) found five more. ⚠️ **And the standard repair — add a value carrying the deferred qualification on the safe side of the boundary — is UNAVAILABLE in four of the six blocks examined**, all at 11/11: `scanning_and_anticipation.md:309`, `time_and_space.md:215` and `:405`, `center.md:377`. **Any finding in those must be fixed by rewording an existing value or by a section split.** Know this before dispatching a fix. |
| **The five 69.1 chunk-terminal values — read, all CLEAN, no edits** | All five tell the truth standing alone. ⚠️ **All three 69.1 values reproduce the rule's DISJUNCTIVE limb** — *"move freely in the crease **or** defend the goal"* — and **none imports 69.3's conjunctive test or its duration threshold**, which was the specific conflation risk. Each carries its book as a citation. The underlying scope claim was re-verified in all four books rather than inherited: IIHF 69.1 does carry the positioning limb; USA Hockey has no goaltender-vision provision (two `screen` hits, neither relevant); Hockey Canada's two goaltender-view references are **both crease-scoped**. **Recorded so nobody re-derives it.** |
| ⚠️ **A NEW defect shape: a permission extracted from a sentence whose LIMIT sits after a comma** | `puck_handling.md` carried *"The free hand may fend off an opponent or their stick"* from **NHL 56.1** — whose full sentence is *"…**but may not be used to hold an opponent's stick or body.**"* **The value took the first half of one sentence and dropped the second, at a chunk boundary.** ⚠️ **Censused the four books: 37 primary sentences GRANT and LIMIT within a single sentence** (*"provided"*, *"but"*, *"except"*, *"unless"*), including NHL 56.1, 69.4's reasonable-effort proviso, the arm-in-a-strength-move permission and the high-stick continuation test. **Nobody has checked whether the corpus carries both halves of each.** This is a bounded, high-value census. |
| ⚠️ **68 summary-layer units cite a rule number with NO BOOK NAMED, across 33 rules** | Measured with `scripts/check_rule_scope.py`, which reports the book scope of every summary-layer unit citing each rule. ⚠️ **A facts value is voiced ALONE, so *"(Rule 76.7)"* with no book leaves a listener unable to know whose rulebook — and the numbers do not travel: USA Hockey's faceoff rule is 613 and Hockey Canada's is 6.2, so a listener under those books has been given a number that does not exist in theirs.** Largest clusters: `76.7` ×6, `82.1` ×5, `76.4` ×5, `9.12` ×5, `22.3` ×4, `9.8` ×4. **Three of the `76.7` sites are in one `faceoffs.md` block whose own neighbouring values ARE scoped — routed.** ⚠️ **WORKLIST, NOT A GATE: many of the 68 will be legitimate** — a Hockey-Canada-format number in a Hockey-Canada passage, or a book named in the same value's earlier clause. **Read all 68; do not sweep, and do not append "(NHL and IIHF)" without checking each book.** |
| **`check_rule_scope.py`'s 69.1 divergence — censused, CLEAN** | The tool flags three units citing **69.1** while naming **only USA Hockey**, which looked wrong because 69.1's positioning ground is the NHL's and the IIHF's and USA Hockey does not run its premise. ⚠️ **All three are CORRECT** — each says so explicitly (*"USA Hockey does not run 69.1's premise — 625(b) bars a goal with an attacking player in the crease whoever scored…"*), so naming one book is right because the unit discusses one book. **The tool's own documented false-positive mode, behaving as designed. Recorded so nobody re-finds it.** |
| ⚠️ **TIER 1 — 29 chunk-terminal values that GRANT something, across 19 documents, NONE READ** | `scripts/check_chunk_tails.py` reports facts values that end a rendered audio chunk. ⚠️ **Its first version was BROKEN and reported "23 tails, 0 grants" — a measurement artefact that several agents cited as evidence.** Fixed; the true figures are **243 chunk-terminal values, 29 of which grant something**. Distribution: `faceoffs.md` ×5 · `body_contact_and_battles.md` ×3 · `puck_handling.md`, `defending_the_rush.md`, `center.md`, `time_and_space.md` ×2 each · thirteen documents ×1. ⚠️ **Ending a chunk is NOT itself a defect — something ends every chunk. It is a defect only where the value DEPENDS on what follows**, and the qualification then opens the next audio file. **Read all 29; do not sweep.** ⚠️ **And the lever cuts both ways: lengthening a block to fix one MOVES the boundary and can strand a different value**, so re-run after every repair. |
| ⚠️ **CENSUS THE OTHER IIHF `may assess` RULES for the same flat-statement defect** | The IIHF book distinguishes its own modalities: *"at their discretion, **shall** assess"* at **43.3** (checking from behind), **58.3** (butt-ending) and spearing; *"at their discretion, **may** assess"* at **49.3, 52.2, 55.3, 59.3**. ⚠️ **The corpus stated 49.3's `may` as `is` at SEVEN sites when a brief named three.** Only 52.2 and 59.3 were checked in passing. **Nobody has audited 55.3 (hooking), 51.3 (goalkeeper roughing), 45.4, 41.4, 42.4 or 56.5 across the corpus for the same shape.** Given the ratio found here, this is the obvious next census. |
| **`puck_handling.md` gives the British reader no IIHF answer on kicking at all** | Its `Rule:` value is byte-identical to `body_contact_and_battles.md`'s — NHL 49.3 plus USA Hockey 627(a) — and **its block carries no IIHF layer for kicking**. ⚠️ **Not a contradiction and not wrong; an OMISSION for the reader whose book it is.** A corpus-wide sweep for `49.3` confirms the seven repaired sites were the complete set of *statements*, so this is the only *silence*. |
| ⚠️ **No IIHF interpretation of 49.3 exists on disk, and no British bulletin has ever been obtained** | Both Situation Handbook editions carry only Situations **49.1 and 49.2**, both about kicked-puck **goals** — **nothing on the penalty**. So how referees apply the `may` is unestablished and the corpus must not imply otherwise. ⚠️ **And `eiha_inhouse_2026-27.txt` has no kicking section — but the In-House Rules refer to Rule Bulletins issued from time to time, and `sources/README.md` records that NO EIH or SIHA bulletin has ever been obtained.** A bulletin could change the British answer and nothing here would see it. |
| **RENDERER — two fidelity defects inside verbatim quotations** | ⚠️ Quoting NHL 49.3's *"five (5) minute time penalty"* renders as **"a five (five) minute time penalty"** — the numeral spoken twice. Worked around once by paraphrasing the figure outside the quotation, **not fixed in the renderer**. ⚠️ And `skate(s)` expands to **"skates"** *inside a verbatim quotation* of USA Hockey Note 2, so **the spoken quotation is not verbatim**. Present in at least two documents. **The second is a design question, not a bug** — "skate open paren s" would be worse — **but a corpus that quotes rulebooks should know which of its spoken quotations are not literal.** |
| ⚠️ **THREE BLOCKS AT `HARD_MAX` THAT A VERIFIED RULE LIMB CANNOT ENTER** | `shooting.md` §*Tips and Deflections* is **11/11** and cannot take NHL/IIHF 69.3's contact limb, which its own body states in full — **body ✓, facts ✗, and the cap is what is evicting it.** `special_teams.md` has **three** blocks at 11 (§*You may ice the puck freely*, §*Smothering the puck*, §*Against their goalie*), the last of which cannot take 69.4's reasonable-effort proviso or 69.7's rebound carve-out. `risk_management.md`'s block at `:560`–`:571` could not absorb the IIHF 24.8(II) flag. ⚠️ **The style guide is explicit that a cap must never evict a rulebook fact — so this is a SECTION-SPLIT decision, not a squeeze, and every agent that met it declined correctly.** Splitting is blocked where a heading is a link target. **Decide the splits.** |
| ⚠️ **The 69.3 conjunctive reading is a READING, and one reference-table row cuts against it** | `shooting.md` now labels it in the body: NHL Reference **Table 14 row 5 B** disallows the goal for a player who *"maintains a significant position in the crease impairing the goalkeeper's ability to defend his goal"* — **with no vision element at all**, where 69.3's fourth paragraph reads conjunctively. ⚠️ **The label is BODY-ONLY**; the facts block, Common Mistakes and Key Takeaways still assert the conjunction flatly. **Judged not worth trading a hedge for, because the reading makes 69.3 sound NARROWER than it may be — a reader relying on it is at more risk than stated, not less.** Decide whether the label belongs in the summary layers. |
| **The 69.3 "only" narrowing still lacks its adverse authority in two documents** | IIHF Situation Handbook **69.1** answers a crease screen flat — *"The goal shall be disallowed, and no additional penalty assessed. Rule 69.1 and Rule 69.3."* — applying no significance test, no duration and neither limb. Now carried in `offensive_zone_play.md` and routed for `playing_without_the_puck.md`. ⚠️ **Still absent from `shooting.md`'s block, and from `goaltender.md`'s block — whose BODY already carries Situation 69.1 in full, which is the exact layer-test failure a document grep clears.** `rules_primer.md` states the narrowing twice in the body with no mention of it. |
| **NHL and IIHF 69.3 ¶1 are NOT word-for-word, and a brief said they were** | The IIHF writes *"initiates **'a relevant contact'** with a goalkeeper, incidental or otherwise"* and prints **no** `(refer to Rule 69.7 for an exception)` parenthetical, where the NHL has both. Its 69.7 still carries the permission. ⚠️ **Wherever the corpus cites "NHL and IIHF 69.3" for the contact ground, check it is not quoting one book as the other.** |
| ⚠️ **A DECISION — two documents say opposite things about whether a reference table can repeal a rule** | **`goaltender.md:991`** ends a `Rule:` value *"…but Rule 69.3's own text mandates one, and **a table cannot repeal a rule**"* — **a hierarchy assertion, picking a side.** **`rules_primer.md:594`** says of the same conflict that *"the rule text and the appendix pull apart"* and **"nothing outside it ranks one side above the other."** ⚠️ **Nothing on disk resolves it.** The IIHF Foreword ranks the *Situation Handbook* below the Rulebook — **but Table 16 IS Appendix IV OF the Rulebook, so it does not reach this.** ⚠️ **DO NOT SWEEP: a third site, `rules_primer.md:627`, uses *"a table cannot repeal it"* PROTECTIVELY** — it stops a reader treating *"Goal is allowed"* at Situations 5C/5E as a guarantee, and the next sentence says *"Take them as strong support for the instruction below, not as a guarantee."* **Softening that one would trade a hedge for consistency.** Decide the principle, then apply it site by site. |
| **Whether USA Hockey or Hockey Canada write any counterpart to NHL/IIHF 69.3 ¶2** | `offensive_zone_play.md` asserts the give-ground obligation is NHL/IIHF-only and `rules_primer.md` asserts neither book runs 69.1's premise. ⚠️ **Neither negative was re-verified this round** in `usah.txt`, `usah_casebook.txt` or `hc.txt`. Also unchecked: whether `eiha_inhouse_2026-27.txt` amends Rule 69 beyond the video-review bar already quoted. |
| **The two-column reference tables were read by slice, never rendered** | Table 14 / Table 16 were read with `pdftotext -layout` column slicing, which is correct for those pages. ⚠️ **Nobody rendered the PDFs to images to confirm the column association visually.** If the extraction misassigned a result cell to a neighbouring row anywhere in Table 14, every reading built on it carries that error — and several of this round's findings rest on Situations 6C and 6D. `pdftoppm` would settle it. |
| ⚠️ **Does the 69.4-vs-69.7 flattening exist in the SIBLING documents?** | `playing_without_the_puck.md` carried 69.4's permission as *"only while the goalkeeper is in the act of playing the puck"*, **flattening away Rule 69.7**, which permits incidental contact *"whether inside or outside the crease"* in a rebound or loose-puck scramble. Fixed there. ⚠️ **`shooting.md:266` states 69.7 in its BODY — its facts layer was never checked for the same flattening**, and `goaltender.md` and `offensive_zone_play.md` both carry 69.4 material. **Body ✓ does not imply block ✓.** Layer-test all three. |
| ⚠️ **A negative existence claim with NO BOOK NAMED, in a voiced value** | `playing_without_the_puck.md` §*"Traffic, picks and routes"*: `Key: "Screen" here means the goaltender's sightline and nothing else — **the rulebook has no legal skater-on-skater screen**…` ⚠️ **Heard alone, *"the rulebook"* has no antecedent** — and the section's own body discusses four books, saying *"The NHL rulebook (Rule 56, Interference) defines them."* **Verifying it needs a four-book concept search nobody has run.** The finding agent changed nothing, correctly. |
| **The IIHF Situation Handbook is SUBORDINATE to the Rulebook, and one new value rests only on the Handbook** | The Handbook's own Foreword: *"in case of any contradictions, the valid IIHF Rulebook is always the basis."* A new `Rule:` value routes a glove-across-the-eyes to **Rule 75** on the strength of Situations 69.3 and 75.4. ⚠️ **Nobody has checked whether IIHF Rule 75's printed text supports or contradicts it.** |
| ⚠️ **The crease-line boundary needs a POINTER from three documents to its new owner** | `rink_map_and_glossary.md` §3 now carries the four-book statement of whether the crease **line** is in the crease. Three documents still discuss *"on the crease line"* without it: **`shooting.md`** (its `:436` says *"Rule 69.1's operative wording still carries no crease line"* — correct for the NHL, and now visibly incomplete, since **IIHF Rule 1.7 puts the line in the crease**; its `:417` value and `:432`/`:437` prose lean on the phrase), and **`rules_primer.md:625, 627, 991`**. ⚠️ **Pointers only — do NOT restate the geometry; the owner owns it.** |
| ⚠️ **A crease-line inference NOBODY should draw without a source** | Under the IIHF, skate contact with the crease **line** is *arguably* skate contact with the **crease** — which would reach **the trapezoid exception** (a goaltender may play the puck behind the goal line while *"maintaining skate contact with his goal crease"*). ⚠️ **No book states it. Getting it wrong costs a goaltender two minutes.** The finding agent deliberately wrote it nowhere. **Open question, not a finding — resolve it from a source or leave it alone.** |
| **`rink_map_and_glossary.md` Key Takeaways are at the cap, and the crease-line point could not go in** | The style guide caps Key Takeaways at 5–10; this document has **exactly 10**. The crease-line consequence went into Common Mistakes instead. ⚠️ **Adding it means dropping one, which is an editorial call.** Coordinator decision. |
| **The IIHF Appendix VI crease infographic was never looked at** | The *"GOAL CREASE AREA / 3D"* drawing extracts as dimension callouts only. ⚠️ **Whether the rendered PDF DRAWS the line inside or outside the crease is a visual question a `pdftoppm` render might answer and a grep never will** — and it bears directly on the unresolved Rule 1.7 vs Situation 5 E tension. |
| ⚠️ **Hockey Canada 7.5 Interpretation 3 — a PERMISSION the corpus does not carry** | *"Pinning at low speed with minimal impact is permitted even from behind."* Found while repairing the checking-from-behind universal, and **deliberately not written in**: it is a permission, and the sections that would host it are prohibitions. ⚠️ **But omitting a permission is not automatically safe — that reasoning was already proved backwards once this round.** A player who believes all contact from behind is banned declines a legal play. **Decide where it belongs, or record why it belongs nowhere.** |
| **Hockey Canada Appendix D penalty chart, and the rec-league books, unchecked for Rule 43** | The four-book checking-from-behind repair verified rule *prose* in all four books but **did not read Hockey Canada's Appendix D chart**, which *"has already caught this corpus out once on tripping"*, nor the **IIHF Situation Handbook** (either edition) for a Rule 43 situation. ⚠️ **And `carha.txt` / `eih_rr.txt` were not checked** — they govern real readers, and *"no British or rec-league amendment exists"* is a negative proved **only for the IHUK In-House Rules** (verified: zero occurrences of *"43"* or *"behind"* in that file). |
| ⚠️ **A rendering lesson worth keeping: "your book" has no antecedent when voiced alone** | A repair to `getting_started.md` first read *"Under your book, checking from behind has no minor-penalty option."* ⚠️ **Rendered, a `<p>` voiced alone with 300 ms either side leaves *"your book"* unanchored** — the listener has no way to know which. Rewritten to name the IIHF inside the clause. **Caught by rendering, not by reading**, and the same shape will exist wherever a second-person possessive stands in for a named book. **Worth a census: `your book`, `your rulebook`, `your league's book` in the summary layer.** |
| ⚠️ **A VERIFIED FOUR-BOOK UNIVERSAL the corpus does not yet carry** | Established while repairing the checking-from-behind values: **the NHL (43.5), IIHF (43.3) and Hockey Canada (7.5(e)) attach a game misconduct to EVERY checking-from-behind penalty they assess**, and Hockey Canada 7.5(d) expressly forbids a plain misconduct. USA Hockey is the only one of the four whose lowest tier does not eject — 608(a) pairs its minor with a *misconduct*. ⚠️ **But for the hit the corpus actually teaches against — a forceful check on an opponent standing along the boards — Casebook 608 Situation 1 says the major or match *"must be called"*, so all four books eject.** Two diagram captions in `site/src/diagrams/forechecking_systems.mjs` currently scope this to *"the NHL and IIHF books"* — **correct, not a defect**, but it leaves a USA Hockey or Hockey Canada listener with nothing where a verified universal exists. ⚠️ **Deliberately NOT edited: captions are VOICED, and widening one means authoring a new claim into a voiced layer unreviewed.** Route it with the Casebook wording. |
| ⚠️ **THE CORRECTION WOULD HAVE BEEN DANGEROUS SHIPPED BARE — a method finding** | The repair to *"there is no minor for checking from behind"* was *"USA Hockey does write a minor (608(a))"*. **True, and misleading alone.** USA Hockey Casebook Rule 608 Situation 1 sets the tiers 608(a) leaves open: the minor plus misconduct is for an **open-ice** push on an opponent *"not near the boards"* or *"minimal body contact"* in a pinch, while the major or match *"must be called"* — *"In every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)"*. **That is exactly the hit these documents teach you not to throw**, and it names the *"danger zone"* as *"approximately ten feet out from the boards."* ⚠️ **A correction is a claim, and a correction voiced alone is a claim voiced alone. Verify what the repair will SOUND like, not only that it is true.** |
| **`forechecking_systems.md` — an unverified interference compression** | A `Rule:` value renders as *"Its Casebook allows a finish only if the check was in motion as the puck left"*, compressing USA Hockey's Standard of Play Situation 10 — which **the body of the same document insists is FOUR conditions read cautiously.** Possible body/block divergence on the interference claim. Found in passing; **not investigated.** |
| ⚠️ **`faceoffs.md` — eight rule citations live only in facts blocks, and the IIHF/CARHA layer is unread** | Standing row, re-flagged: a `rules-verifier` repairing this file noted it did **not** search the IIHF Situation Handbook (either edition) for a situation qualifying 43.3's discretion, nor the **IHUK In-House Rules** for an amendment to Rule 43 — **the British layer is asserted through the IIHF book alone.** `carha.txt` and `eih_rr.txt` were also not checked, and they govern real readers. |
| ⚠️ **`offensive_zone_play.md:497` — the closest sibling to the 69.3 defect just fixed** | Carries *"significant vision-obstructing position"*: **no duration gloss AND missing the impairment limb.** NHL/IIHF 69.3's test is **conjunctive** — obstruct the goalkeeper's vision **and** impair his ability to defend his goal — and the definition adds *"for more than an instantaneous period of time"*. Under-defined rather than wrong, and **over-strict**: a listener believes a good goal is dead. Siblings `playing_without_the_puck.md:523` (both limbs, no duration) and `shooting.md:418` (the definition without the defined term) are less urgent. ⚠️ **Verify the line numbers — they were censused while other agents held those files.** |
| ⚠️ **The EIH/SIHA no-video-review flag reaches no facts block in `goaltender.md`** | The repaired 69.3 value says the goal *"is voided"*. ⚠️ **In EIH and SIHA competition it is voided only if the referee saw it live** — that restriction lives in a body blockquote **upstream** of the block, and nothing in the block says so. Named by the repairing agent as the shape it was warned about and still could not close inside its own value, which is at the 300-char `Rule:` cap in an 11/11 block. **A section split is the only route.** |
| ⚠️ **RENDERER — bare roman-numeral clause markers are voiced as raw letters** | `md_to_speech.py` expands `63.2(II)` to *"sixty-three point two, clause two"* but leaves a **bare** `(II)`, `(III)`, `(I)`, `(V)` untouched. **Eleven such markers sit in one dense paragraph of `risk_management.md`** (around `:311`-`:313`), anaphoric to a `Rule 63.2` established earlier in the paragraph — **fine for a reader, raw letters for a listener.** ⚠️ **DELIBERATELY NOT SWEPT.** Eleven substitutions in one paragraph is precisely the shape that manufactures a defect, and a bare `(I)` may not be a clause marker at all elsewhere. **Census the corpus first, decide whether the renderer should expand a bare marker only when a rule number appears earlier in the same `<p>`, then act.** |
| ⚠️ **OWNERSHIP GAP — the crease's VERTICAL extent has no owner** | `risk_management.md` states *"the crease runs four feet up to the top of the goal frame (NHL 1.7, 2.1)"* and **both quotations verify verbatim** — 1.7 *"extending vertically four feet (4') to the level of the top of the goal frame"*, 2.1 *"extending vertically four feet (4') above the surface of the ice."* ⚠️ **But `rink_map_and_glossary.md`, which the style guide names as the OWNER of crease dimensions, states no vertical extent anywhere** — it gives the footprint only. So the borrower is not diverging from its owner; **the owner does not hold the figure.** Give it to the owner, then have the borrower cite it. |
| **NHL 57.3 / IIHF 24.8(II) — two questions the repair could not close** | Whether the **NHL** reaches a goalkeeper's frontal foul on a breakaway by any route outside 57.3's four criteria (24.8 is only a pointer to Table 9; Table 9(ix) is a from-behind row), and whether **USA Hockey or Hockey Canada** carry an equivalent of IIHF 24.8(II)'s *"except a foul committed from the front by the goalkeeper on a 'breakaway' situation"*. ⚠️ **The IIHF flag was added to the body but NOT to the facts block, which sits at 11/11 `HARD_MAX`** — a section split is the only route and was not attempted. Also open by explicit judgement rather than verification: the flag was **not** propagated into Key Takeaway 9, on the ground that KT9's sentence is true rather than incomplete. **Re-take that decision; do not inherit it.** |
| ⚠️ **FOUR "no published data" disclosures in `risk_management.md` never attacked** | *"no public data ranks odd-man rushes by the play that created them"* · *"nobody publishes a ranking of amateur mistakes"* · *"no published study codes penalty motive"* · Chatel's *"honest caveat"*. ⚠️ **The repairing agent confirmed only that SIBLING DOCUMENTS say the same thing — which is corroboration of propagation, not evidence about the world.** Nobody has searched `sources/` or the working directory **by concept** for any of the four. This is the unfalsifiable-by-ordinary-review class the style guide names. |
| **Every statistic in `risk_management.md` is unverified** | The NHL API figures (21.1%, 28.8%, 8,086/1,312, 1,595/7,555, 205, 21.6%, 21.9%, 17.1%), Chatel's Hockey Graphs table, Novet/Sznajder's 230,000 zone exits, MoneyPuck's model documentation, Gilbert & Trudel. ⚠️ **Checked only for internal arithmetic consistency and cross-document agreement — both of which a fabricated or stale figure passes.** → `source-verifier`. |
| **THREE sections `check_facts.py --hedges` could never see before, now visible and UNEXAMINED** | `hockey-iq/time_and_space · 7. How space changes…`, `positions/winger · Overview`, `systems/defensive_zone_coverage · Clearing the Zone`. Each is a `##` section carrying its own facts block with no `###` subsections, so the pre-fix tool skipped it entirely. **Nobody has asked whether any of the three is a real dropped exception.** ⚠️ **And the tool `break`s after the first hit per section, so a section with two dropped exceptions still shows one** — the before/after diff cannot distinguish *fixed* from *still masked*. |
| ⚠️ **THREE plan rows found stale in one day — retire rows when work lands** | The check-yourself sweep, the `--hedges` split bug, and the In-House recount were all described as outstanding when the first two were **already in HEAD**. ⚠️ **The cost is not wasted effort — it is that a stale row dispatched as a brief sends an agent looking for a divergence that does not exist**, which is how round 44 manufactured one. **A row is a claim. Re-measure before briefing, even when the row says "READY AND VERIFIED".** |
| ⚠️ **TIER 1 — `forechecking_systems.md:546` states LENIENCY NAKED in the extraction layer** | Found by the commit gate running a census its remit did not require. The voiced value `Rule: That onus is weighed, not absolute — NHL Rule 41.1 lets the referee consider whether the opponent made themself vulnerable and whether the check was avoidable` cites **only the NHL** and carries **no counterweight**, while the owner's equivalent block carries `Never: Rely on that balance` and names all four books. The counterweight IS in this document's body at `:561` — **body ✓, block ✗**, the exact layer-test shape. ⚠️ **Voiced alone, this tells a listener the boarding onus is negotiable.** Pre-existing, so no gate would have caught it; it is not in the round-55 diff. |
| ⚠️ **The unmarked-warning class is 22, not 4 — and the cause is now ESTABLISHED** | Probed with the site's own parser rather than a grep. `markInlineWarnings` in `site/src/plugins/remark-corpus.mjs` only ever wraps a glyph **immediately preceding a `strong` node**; these 22 warnings **carry no bold run at all**, so nothing can attach. 18 are plain prose after the glyph; 4 carry an *italic* word and no bold (`game_management.md` ×2, `risk_management.md`, `scanning_and_anticipation.md`). ⚠️ **The earlier hypothesis — an inline node sitting BETWEEN glyph and strong — is REFUTED**; there is no strong run later in those paragraphs, which is why a regex over raw paragraph text "matched" while the plugin could never fire. ⚠️ **DESIGN DECISION, not a sweep:** marking them means wrapping the glyph plus *the rest of the sentence*, i.e. guessing where the warning ends — the reasoning the plugin's own comment records as rejected once and then overturned for shape (c). **Settle the principle before touching any of the 22, and do not let an agent fix 4 of them.** |
| ⚠️ **Diagram captions were repaired this round and NOBODY READ THE RESULTS BACK** | The commit gate caught one: `playing_without_the_puck.mjs` attributed USA Hockey's *"almost all on-ice cervical spine injuries"* finding to **two** postures when `sources/huh.txt:225-227` names **one** — *"the head being slightly flexed (head down) while making head-on contact with the boards or goal post"*. The turned-back hazard is a **different** USA Hockey sentence with a different claim (`ibc.txt:1570`), and the corpus deliberately holds the two apart as *"two prohibitions against two different injuries"* at five sites. **Fixed.** ⚠️ **But it was one of several captions rewritten in the same wave, and captions are VOICED and live outside `content/` where no corpus grep reaches them.** **Every caption claim changed this round needs re-deriving from `sources/`.** |
| **Recount before briefing: the superseded In-House edition row** | That row says **21 sites**. Measured 2026-08-31: **8** name `In-House Rules 2025-26, Revision 1 (published 27/10/25…)` and **6** more carry a 2025-26 markdown link — **14 mentions, not 21**. Whether each of the 14 is a defect is **not** established; some may legitimately cite the edition actually read. **Recount and read before dispatching. Do not sweep.** |
| **A figure in the style guide that could not be reproduced** | `project/content_style_guide.md` states *"All 42 sites in `content/` now carry the hedge"* for the KHL trapezoid. The gate could not reproduce 42 independently, and a co-occurrence proxy returns 17 documents against the plan's *"bare in 16"*. ⚠️ **The substance holds** — every KHL site read does carry a hedge — **but a bare count in a governing document is the failure this round records four times.** Replace the number with a pointer to its owner, or re-measure and state the boundary in the same sentence. |

### ⚠️ METHOD — what this round proved about briefs, and what to do about it

**The briefs were worse than the corpus, and this round measured how.** Recorded in
[the round record](../reviews/round_53_the_briefs_were_the_defect.md), in kind rather than in
total — **no number belongs here, and one written here would go stale the moment the record grew.**

The shapes, each observed more than once:
1. **A scope present in the book and absent from the brief.** Three times in one brief.
2. **A body site named where the defect was in the facts layer** — and the named layer already right.
3. **A count that was short.** Every relayed census. One miss was a **paraphrase**, so no grep would find it.
4. **A reassurance nobody checks**, because it is not the ask — *"the neighbouring line carries the scope"*, false three times.
5. ⚠️ **A fabricated quotation.** Non-negotiable 1, applied to a brief. `grep` returned **zero** for a string put in quotation marks and attributed to a named file.

**The instruction that works is already in `CLAUDE.md`: give the agent the row as a hypothesis and
tell it to refute the brief before acting.** It fired on every wave in this round. ⚠️ **Nothing
checks a brief before it is dispatched, and that is the gap.**

### What this round was, in one line

**The briefs were the defect, and then the round's own repairs were the defect.** Every wave
found the previous wave's census short — ten pass routes were nine and then fifty-nine
measured; seven speed sites were nine; two remaining scope sites were six. **A census taken
from a brief is a census of the brief.**

⚠️ **The single most important thing on this page:** the corpus had **disclosed** the
walking-speed division of labour in **three documents**, and the round propagated the
flattened universal past all three. Every mechanical gate passed the whole way, because **a
flattened universal and a scoped one are the same shape to a checker.**

### ⚠️ The round's largest finding was not in any brief: a source changed underneath its own URL

**`fetch_sources.sh` has pointed at the `…-v1_1.pdf` Situation Handbook URL the whole time.
In July 2026 that URL served v1.0. It now serves v1.1.** The publisher replaced the document
without changing the link, so `sources/iihf_situations.txt` was **v1.0, June 2025** while every
citation in the corpus named v1.1 — and a routine `fetch_sources.sh` re-run would have
overwritten it with a different book, shifting every `iihf_situations.txt:NNNN` citation in
`project/` and silently changing four rulings. **Silently, because nothing in the checker set
can see this:** `check_links.py` tests reachability and `check_external_links.py` tests status
codes. **Neither compares content.**

v1.1 is now on disk as `sources/iihf_situations_v1.1.txt` (0 mojibake, 0 ligatures); v1.0 is
kept beside it; `fetch_sources.sh` writes to its own filename so the two can no longer clobber;
and `sources/README.md` carries the full record. ⚠️ **`sources/*` is gitignored — the README
and the fetch script are the only committed trace of any of this.**

**A whole-book diff shows 16 changed lines: two version stamps and four rulings.**

| Situation | v1.0 | v1.1 |
|---|---|---|
| **63.19** — puck kicked off the foot, directly over the glass | *"No. Rule 63.2 (III) states that the player must have shot or batted the puck using the hand or the stick."* | *"Yes."* — bare, no rule cited |
| **20.4** — goal, then video review reduces a reported major to a minor | *"The goal shall be allowed since only a minor penalty is assessed."* | *"Goal is disallowed."* |
| **10.7** — nudging a teammate's dropped stick back | common-sense reasoning, no penalty | *"legal if the stick is intact and if the nudging… does not interfere with an opponent in any way"* |
| **Rule 46** third-man-in note, second fight not instigated | *"Team A would play one player shorthanded for 2 minutes."* | *"both teams would play at full strength."* |

⚠️ **63.19 is the one that reached the corpus, and it is a penalty-consequence reversal.** No
document cited it by number, but three taught its substance — that 63.2(iii) names only *"hand
or stick"*, so a puck out over the glass **off a skate** is not that penalty.

**REFRAMED — the first account of this was wrong, and the plan carried the wrong frame.** It was
recorded as *"the Handbook now contradicts its own Rulebook."* **Situation 63.34 answers the same
question "Yes", is byte-identical in v1.0, v1.1 and 2026/27, and was therefore sitting alongside
63.19's "No" in v1.0.** The v1.1 edit removed a contradiction **inside the Handbook**; it did not
create one with the Rulebook. Corrected in `risk_management.md`, `playing_without_the_puck.md`
and `defender.md`; `rules_primer.md` verified clean by census. The corpus now states the
conditional — whether *"deliberately"* in 63.2(II) attaches to the kick or to the puck leaving —
rather than asserting a disagreement, and labels the economical reading as **an inference about an
intention the IIHF has not written down**. Playable instruction (clear with the stick) unchanged
and correct on every reading. Full account in the round-53 record.

⚠️ **RETRACTED — this row was falsified by the round-54 commit that stages beside it.** It read:
*"Situation 63.29 runs the other way… **The corpus does not teach the goalkeeper case.** Not a
defect; recorded so the next reader does not rediscover it as one."* **`goaltender.md` now teaches
exactly that case**, in a new section carrying the delay-of-game limbs, and the full 63.29 answer is
quoted there with its tension disclosed. **Kept as the retraction rather than deleted, because a
plan row that quietly disappears looks like work nobody did.**

**What remains open, restated correctly:**

⚠️ **IIHF Situation 63.29 is in tension with the TEXT of 63.2(III), and the corpus now says so
rather than resolving it.** The limb carries **no deliberateness element**; the Handbook's answer
reasons *"Rule 63.2. talks about deliberate, the save cannot be seen as falling under this
criteria."* It cites **Rule 63.2 without a limb**, and the neighbouring 63.2(II) **does** carry
*"deliberate"* — so nothing held here says which it means. **The corpus takes the answer and not the
argument.** Identical in all three editions.

⚠️ **Situation 63.28 is NOT a second instance, and an earlier draft of the round-54 record said it
was.** Its answer — *"Minor penalty for delay of game. This would be considered shooting or batting
the puck with the hand resulting in the puck leaving the playing surface. Rule 63.2 (III)."* —
**contains no deliberateness reasoning at all**, and its subject is a **skater** making a deliberate
clear, not a goalkeeper making a save. **Applying a rule to facts that happen to be deliberate does
not make deliberateness an element.** It is neutral, arguably mildly supportive.

**The open question:** whether the corpus's disclosure should name 63.28 alongside 63.29 — as the
Handbook applying (III) on its own *"shoots or bats"* language, which is the reading that reconciles
the two. **A reviewer's call, not a sweep.**

### ⚠️ IIHF 2026/27 renumbers Rule 46 — the corpus's British layer breaks on lookup

**Verified centrally: 9 Rule 46 clauses moved between the 2025/26 and 2026/27 editions.**

| Offence | 2025/26 | 2026/27 |
|---|---|---|
| **Third Player In** | **46.7** | **46.14** |
| Aggressor | 46.4 | 46.2 |
| Fighting off the playing surface | 46.11 | 46.7 |
| Fighting other than during the periods | 46.9 | 46.8 |
| Altercation · Clearing the area · Helmets · +2 more | — | all moved |

⚠️ **A British reader in the 2026-27 season who looks up *"third man in (46.7)"* finds *Fighting off
the playing surface*.** The **substance is unharmed** — every tier still says what the corpus says it
says — **so nobody is misled about what happens to them. What breaks is their ability to check it.**

**The Appendix moved too:** 2026/27 runs Tables 1–5, **7**, 8, 9… with old Tables 5/6/7 merged into a
single **Table 5** carrying `MAJOR ONLY` / `MAJOR + GMP` columns. ⚠️ **There is no Table 6 — yet
2026/27's own Rule 20.4 still says *"refer to… Table 6"*, which is stale inside the IIHF's own book.**
The corpus cites "Table 6" in `uk_rules.md` ×3, `rules_primer.md` ×2, `shooting.md` ×2.

⚠️ **An agent tried to make this a defect in `uk_rules.md` and could not.** That file already handles
the edition question correctly — it quotes the In-House Introduction verbatim (*"adopt the latest IIHF
Official Rule Book (Version 1.1, published July 2025)"*), flags that the book's own **cover**
contradicts it, states which edition each quote was verified against, and warns a 2026/27 book exists
with real differences. **What it does not do is name WHICH differences** — it names 76.4/76.6/76.7
only. **The fix is to extend an existing correct warning, not to write a new one.**

### ⚠️ `shooting.md` flags a rule tension in two books and is silent on it in the reader's own

The document works hard on **USA Hockey** (621's Note requires contact; Casebook Situation 2 says it
does not) and **Hockey Canada** (9.5's preamble reaches a penalty *"regardless of whether or not
contact occurs"*; 9.5(a) requires it), telling the reader to assume the stricter reading in each.

⚠️ **The IIHF book has the same shape and the document never says so.** Verified verbatim:
- **IIHF 60.1:** *"A 'high stick' is one which is **carried** above the height of the opponent's
  shoulders"* — **no contact element, and no waist proviso.**
- **IIHF 60.2** then imposes the minor for *"any **contact** made by a stick on an opponent above the
  shoulders."*
- **NHL 60.1:** *"one which **contacts** an opponent above the shoulders, **provided their shoulders
  are at waist level or higher**"* — a proviso the IIHF has no counterpart to.

⚠️ **And IIHF 60.4's major-plus-automatic-game-misconduct is keyed to *"high-sticking"*, whose
definition in that book is the CARRY.** **Every British reader is under the IIHF book.**

**Why it did not announce itself:** the section headings advertise USA Hockey and Hockey Canada, so
the omission is invisible to a heading-driven read. **New rules text — `rules-verifier` before it is
written.**

### ⚠️ A 363-word Key Takeaway that no listener can retain — and it must NOT be fixed by trimming

`offensive_zone_play.md`'s Key Takeaway 10 is now **363 words**, voiced as a **single `<p>`** with a
300 ms break either side. **It reads correctly and inverts nowhere. No listener retains it.**

⚠️ **It got that way because a repair this round appended a safety gate to it** — correctly; the gate
belongs in the extraction layer. **The length is the cost of the fix, not a pre-existing defect.**

⚠️ **Do NOT solve it by trimming a caveat.** The agent that made it long refused to, citing
non-negotiable 1, and it is right.

**The tractable fix it proposed, and did not attempt:** KT 10 carries three separable things — the
coaching-choice point, the late-hit ladder, and the permission gate — and its **USA Hockey late-hit
enumeration (640(b) / the Casebook's four conditions / 640 Note 2 / 640(g)(h) / 602(a)) duplicates
Common Mistakes item 10 almost verbatim**, which is itself 250-plus words. **Shed the enumeration to a
pointer** — *"Common Mistakes sets out USA Hockey's four Casebook conditions and the tiers above the
minor"* — keeping the gate and the ladder headline.

⚠️ **That is a rewrite of an existing safety caveat and needs its own review.** It is not a tidy-up.

### ✅ CLOSED — the corpus-wide check-yourself edit was ALREADY MADE, rounds ago

⚠️ **This row instructed an edit that does not need making, and it nearly became a brief.**
Measured 2026-08-31 with a flattened regex over all 37 documents, then the same over
`git show HEAD:`: the separator after *"not a guess"* is **already a full stop in all 36
documents, and already a full stop in HEAD.** The sweep was made and committed in an
earlier round; this row was never retired.

**The lesson is the round's own:** a row that says *"READY AND VERIFIED"* and *"it has not
been made"* is still only a claim, and it was **stale** (category G1a). Dispatched as
written, an agent would have gone looking for a divergence that does not exist — which is
exactly how round 44 manufactured one. **Re-measure a row before briefing it, even when the
row says it was verified.**

The original row is kept below unaltered, because the reasoning in it about *why* the
negation carries across the em dash is correct and is the reason the edit was right.

#### The original row, retained for its reasoning — DO NOT ACT ON IT

**Censused fresh: 36 documents, byte-identical, and it is the ONLY stock line in the corpus
carrying this shape.** A scan of every line appearing in 3+ documents with an em dash, a
negation before it and an imperative after it returns **exactly one hit** — this one. The
sweep is bounded and complete.

```
now   Answer each question before you go on — a real attempt, not a guess — then go and check,
      because the checking is the part that does the work.

to    Answer each question before you go on — a real attempt, not a guess. Then go and check,
      because the checking is the part that does the work.
```

The negation *"not a guess"* sits immediately before the second em dash and an instruction
follows it, so a listener carries the negation across and is told **not** to go and check —
which is the one thing the exercise exists to make them do. The first dash is fine: it
introduces an **appositive**, not an instruction.

**Verified through the renderer**: both forms pass through unchanged apart from the
punctuation, so the full stop is the whole of the change and nothing else moves.

⚠️ **Preconditions, all three:** `git diff --name-only content/` empty of agent work,
`git status` and `git log -1` immediately before, and **one edit** across all 36 — not 36
edits. Every live agent has been told to leave this line alone.

#### The original row

**Byte-identical in 36 of 37 documents**, in the Check-yourself preamble:

> *"Answer each question before you go on — **a real attempt, not a guess** — **then go and check**,
> because the checking is the part that does the work."*

⚠️ **`not a guess` before the final dash; `then go and check` — an instruction — after it.** Confirmed
rendering as **one voiced `<p>`**. The negated hearing tells a reader not to check, in the sentence
whose entire purpose is to tell them to check.

⚠️ **It must be ONE edit across all 36, and it has not been made.** The agent that found it repaired
nothing: *"changing it in six files would leave thirty carrying the other wording, which is a
divergence I would have manufactured."* **That judgement is right and is why this is a plan row rather
than a repair.**

**Suggested form** (the round's standard, verified elsewhere): *"— a real attempt, not a guess. Then
go and check, because…"*

⚠️ **Sequencing, and it binds:** this is a 36-file sweep, and commit `239f70d` exists because a
corpus-wide sweep raced document-level agents. **Run it only when no agent holds a `content/` file**,
with `git status` and `git log -1` immediately before. **Every live agent in the current wave has been
told to leave the line alone**, so the 36 stay identical until one edit changes them together.

### ⚠️ NEW OPEN ROW — the corpus's emergency instruction has no BRITISH form

The downed-player instruction now correctly says **"call for immediate medical help"** in
all four `team_play_and_culture.md` sites and in the owner. But the owner sources it to
**USA Hockey and CRT6**, and **nothing anywhere in the corpus names a UK number, a rink's
emergency-action plan, or who at a British club is expected to hold first-aid cover.**

The corpus flags the British position on neck protectors, checking age, icing, the
trapezoid and rink size — and is silent on the one instruction a British reader would act on
in an emergency. **Nothing has been written either way**, which is right: inventing a
British emergency procedure from nothing is exactly the fabrication this project forbids.
What is needed is a primary source — England Ice Hockey or IHUK safety guidance, or a club
emergency-action-plan template — obtained and read before a word is written.

⚠️ Related and unresolved: whether *"leave the helmet on"* is right unqualified. The owner
carries a trained-personnel exception; two summary sites state it flat. That is safe in the
direction it errs for an untrained reader, and is recorded rather than changed.

---

### ✅ CENSUSED — the unscoped-hitting-instruction class does NOT recur, and that is the finding

The `safety-reviewer` found a **critical**: `body_contact_and_battles.md` §5's late-hit block led
with `Action: Check the puck carrier, and check them now` and **carried no checking-league scope on
any of its values.** The repairing agent then said plainly what it could not do: *"I checked no other
file for the same unscoped-instruction shape, and the round-10 defect is by nature corpus-wide.
`defending_the_rush.md` and `positions/defender.md` are the obvious next candidates and I did not
look at them."*

**Censused corpus-wide by the coordinator.** Every ` ```facts ` block was extracted and tested for a
contact-delivery instruction (`check the`, `body-check`, `deliver a hit`, `hit through`, `finish the
check`, `drive the shoulder`, `step into`, `ride … into`) **against** a checking-league scope
anywhere in the same block. **13 candidates. All 13 read. None is a defect.**

**Why each cleared — and the pattern is worth keeping:**
- **Most are PROHIBITIONS, not instructions** — `Never: Deliver a hit where the head was the main
  point of contact`, `Never: "Finish your check" on a player who has already passed or shot`,
  `Never: Step into a defender on a crisscross`. ⚠️ **A prohibition binds every division, so scoping
  it to checking leagues would be a DEFECT, not a fix.** The repairing agent independently reached
  the same conclusion about four blocks inside §5 itself.
- **Two carry the scope in words the pattern could not match** — `forechecking_systems.md:198`
  (*"At rec and beer-league level body checking is usually not permitted at all"*) and
  `body_contact_and_battles.md:33` (*"one is legal everywhere, the other is not"*). ⚠️ **Exactly the
  false-negative shape this round has now hit three times: a claim stated in words the searcher did
  not choose.**
- **The rest are idiomatic** — *"check the rink first"*, *"check the far side"*.

**The body layer was then censused too, because the facts-only version had left that gap open.**
19 candidates among body list items, filtered to exclude prohibitions and units carrying their own
scope. **All read. Almost all clear for the same reasons** — penalty *definitions* in
`rules_primer.md` (Charging, Checking from behind, Holding, Illegal check to the head), Common
Mistakes bullets, and warnings. **One was referred out as a question rather than a finding:**
`offensive_zone_play.md:~935`'s *"Pinching without arriving on contact. 'Take the player or take the
puck.'"* ⚠️ **Referred as a question deliberately** — this corpus distinguishes **body contact from
body checking**, and you can take a player by angling in any league, so the bullet may be entirely
sound. **Manufacturing a finding there is the round-44 failure mode.**

⚠️ **So the class is NOT widespread, and the recorded answer is a measurement rather than a
silence.** The next round should not re-run either census. **Body PARAGRAPHS were then censused as well, closing that gap in the same pass: 5 candidates, all
idiomatic (*"Check the season on any birth-year table"*). ZERO.**

**So the census is complete across all three voiced layers — facts values, list items and
paragraphs. One critical, found by a reviewer and repaired; one candidate referred out as a
question; nothing else.** ⚠️ **Do not re-run any of the three.**

⚠️ **What it still does not establish, stated so nobody assumes otherwise:** every pass was a
**keyword** filter used to select what to read. **A hitting instruction phrased in words none of the
three patterns contained is invisible to all of them** — and this round hit that exact false-negative
three separate times, including twice inside these very censuses, where two blocks carried their
scope in words the pattern could not match (*"At rec and beer-league level body checking is usually
not permitted at all"*, *"one is legal everywhere, the other is not"*). **The censuses ordered the
reading. Only the reading cleared anything.**

### ✅ CENSUSED — the `Never:` em-dash inversion in the FACTS layer is down to two, both routed

⚠️ **`_label_lead` renders `Never:` with an EM DASH deliberately** — a full stop terminates the
negation and leaves a bare imperative telling the listener to do the prohibited thing. **So a SECOND
em dash inside the value is prosodically identical to the label's own, and can re-carry the negation
onto whatever follows it.**

**Censused over the whole facts layer: 513 `Never:` values.** 126 carry a second em dash. Narrowing
to tails that are an imperative or an elliptical noun phrase left **51**. **Reading all 51 left
TWO.**

| | |
|---|---|
| `special_teams.md:~966` | `Never: Put a skate in the blue paint — feet out of the crease under all four books` → heard as *"never have your feet out of the crease"* |
| `shooting.md:~153` | `Never: Lean on a definition to excuse the swing — keep the blade down, look before you wind up, and three-quarter it in traffic` → **three imperatives with the negation still open**, about a slap shot in traffic |

**Both routed.** The repaired form already exists in the corpus and should be copied rather than
invented: **a full stop, then the positive instruction as its own sentence** — *"Never: Set your feet
in the blue paint. Get them outside the crease instead…"*

⚠️ **DO NOT SWEEP THIS PATTERN. Almost every second em dash in a `Never:` value is CORRECT** — it
introduces a **reason clause with its own subject** (*"— five teammates are already looking at it"*,
*"— one body then guards two of you"*), which does not invert. **A sweep would damage 49 correct
values**, and this file already records four rounds where a sweep over a real pattern damaged
correct text.

**The non-em-dash separators were then censused too**, because the em-dash pattern structurally could
not see them and an agent found one by reading its own file. **11 candidates; reading leaves ONE** —
`shooting.md:~294`, `Never: Stop your feet before shooting; **learn to release in stride**`. The
other ten are **coordinated lists of prohibited acts** (*"Hold a caught puck, carry it, turn with it
or throw it"*), where the comma joins items **inside** the negation and it **should** carry. Routed.

⚠️ **Its justification is an asymmetry of cost, NOT a measurement, and that distinction must survive
into the next round.** Converging on the canonical full stop loses no claim and matches the form used
everywhere else, so it is free; **and if a semicolon does behave like a dash, an instruction was
inverting.** ⚠️ **Nothing claiming a semicolon or colon was MEASURED to invert may be written into
`content/`.** The em dash remains the only separator whose inversion is measured. **Its severity is
also lower and must not drift upward: the inversion would teach "never release in stride", a
technique error rather than a penalty or an injury.**

⚠️ **THE STANDING LIMIT ON THIS ENTIRE CLASS: nobody on this project has ever heard the audio.**
Every inversion finding — including the em-dash mechanism itself and `_label_lead`'s own docstring —
rests on **reading markup and reasoning about prosody**. An agent said it plainly: *"a voice that
under-realises the sentence boundary inside a single `<p>` could still run 'Never' into 'Keep', and
no amount of reading the markup would show that; only listening would."* **Synthesising one minute of
one repaired value would settle more than any further census can.**

⚠️ **Scope otherwise:** this censused the ` ```facts ` layer. It says nothing about the **diagram
captions**, a separate row with its own measurement, nor about the **negation-free imperative**
class, nor about the same prosodic shape in a **body sentence or Common Mistakes bullet**, where
there is no `Never` label to census on at all.

### ⚠️ A DECISION — does the Situation Handbook need its subordinate status stated in the value?

**The IIHF Situation Handbook ranks itself below the Rulebook, in its own Foreword:** *"in case of
any contradictions, the valid IIHF Rulebook is always the basis."* **So a Situation is an
interpretation, not operative rule text** — the same status the style guide already requires be
stated for the NHL and IIHF **Reference Tables** (*"say it is an appendix interpretation, not
operative rule text, because a table cannot repeal a rule"*).

⚠️ **Whether that requirement extends to the Handbook has never been decided.** An agent raised it
and correctly declined to repair one instance of what it believed was a large pattern.

**Measured two ways, and the two disagree — which is the useful part:**

| Measure | Result |
|---|---|
| Agent's: facts citing a Situation **or** the Handbook, against a weight flag | **62 cite, 3 flagged** |
| Coordinator's, narrower: facts values whose **ONLY cited authority is a Situation** | **5** |

⚠️ **The gap is not an error by either of us; we measured different things, and the narrower measure
is the one that matters.** A value citing *"NHL Rule 63.2(iii)… IIHF 63.2(III)… and Situation 63.15"*
rests on rule text and uses the Situation as corroboration — **the Handbook's subordinate status
changes nothing there.** A value whose **only** authority is a Situation is the case where a listener
could take an interpretation for a rule.

**The five:** `goaltender.md:~569`, `:~607`, `:~1092`, `:~1093` and `faceoffs.md:~230`. ⚠️ **At least
one — `goaltender.md:~1093` — ALREADY carries the flag**, so the true number needing anything is
smaller still. **Read all five before deciding.**

⚠️ **Decide the principle, not the instances.** If the Reference-Table rule extends to the Handbook,
say so in the style guide and the five follow. **If it does not — because a Situation is the IIHF's
own published answer to a fact pattern and the Rulebook is silent on that pattern — say that
instead.** Both are defensible; **what is not defensible is repairing five sites without settling
which rule they are being repaired to.**

### ⚠️ OPEN — a block that cannot take a limb its body, takeaway and Sources all carry

**`offensive_zone_play.md:~746`, §The defenceman's pinch.** The block is at **`HARD_MAX` 11** and the
relevant fact is **294 of 300** characters. The NHL 56.4/56.5 late-hit limb now reaches that
section's **body, its Key Takeaway and its Sources trailer** — and **not its facts block**, which is
the layer a listener acts on alone.

⚠️ **The shortest honest insertion measures 350–371 characters. Splitting the fact needs a 12th
slot.** So the only route is a section split, and **the agent tested that seam and it does not
survive reading**: legality material sits at ~:751, ~:769–800 and ~:802 while pinch mechanics sit at
~:751, ~:753–767 **and ~:804** — a split at 769 strands *"If the pinch fails"* and two coaching facts
on the wrong side. ⚠️ **Only a body reorder fixes it, and that is authored structure needing its own
brief and its own review.**

**Recorded as a live row rather than forced.** ⚠️ **A declined split with reasons is a result. Do not
re-attempt this one without reading the section end to end first** — the seam was judged, not
guessed.

### ⚠️ OPEN — a family of superlatives one document builds on deliberately

`scanning_and_anticipation.md`'s items 1 and 2, its `Priority:` fact and Key Takeaway 2 carry *"the
single highest-value moment in hockey"*, *"the most wasted time in hockey"*, *"the highest-value
window in hockey"*. **Same unsourced-superlative family as the ones repaired this round, and the
agent that owned the file left them deliberately**, with a reason worth preserving:

> *"the section's blockquote hedges the scan COUNTS and then says 'the ranking … is the part worth
> acting on', **so the ranking is asserted with nothing behind it**. Fixing it means reworking a
> hedge structure the document built on purpose."*

⚠️ **This is not the same job as the ones already fixed.** Those were a superlative sitting loose in
a sentence. **This one is load-bearing structure** — the document hedges its numbers and then leans
on the ranking those numbers were supposed to support. **It needs a brief that decides what the
section is claiming before anyone edits a word of it.**

### ⚠️ A DECISION, not a defect: the summary layer has become a second body

**Measured twice, independently — by a `content-reviewer` and then by the coordinator, agreeing to
within 7 characters on a moving tree:**

| | |
|---|---|
| Common Mistakes + Key Takeaways items, all 37 documents | **992** |
| total characters in that layer | **~440,000** |
| mean item length | **443 characters** |
| items over 900 characters | **112** |
| longest | **6,268** — one Common Mistakes bullet |

**The spec says Key Takeaways are *"Numbered, 5–10 items. Each one standalone and memorable — this
feeds the podcast's 'if you only remember N things' segment."*** ⚠️ **A 5,105-character Key Takeaway
is roughly five minutes of continuous speech and is not memorable by construction.** Three of the six
longest items are Key Takeaways, not Common Mistakes.

⚠️ **This round put 44% of all its new `content/` text into that layer.** The layer grew because it
is where a correction is safest to add — it is voiced, it is extracted, and adding there breaks
nothing. **Every individual addition was defensible; the aggregate is the problem, and no individual
review could have seen it.**

⚠️ **THIS IS NOT A CALL TO CUT CONTENT.** Much of it is safety-relevant and it got there because a
reviewer was right. **It is a call to decide WHERE IT LIVES** — the material in the longest items
belongs in the body, with a takeaway a listener can actually hold.

⚠️ **And it must not be done as a sweep.** Trimming a 900-character bullet to fit a length target is
precisely how a hedge, a scope flag or a book attribution dies, and this file records four rounds
where that happened. **The only safe form is: move the substance into the body, leave a takeaway
that points at it, and verify no claim was lost by diffing the claims, not the characters.**

**Also measured:** `uk_rules.md` went from **10 Key Takeaways to 11** this round — the only document
whose count changed, so a repair introduced it. **Dispatched.** `scanning_and_anticipation.md`,
`goaltender.md`, `breakouts.md` and `defensive_zone_coverage.md` also sit at 11 and are
**pre-existing**.

### ⚠️ TIER 1 — CONTENT that lives ONLY in a never-voiced layer

**Measured across ~4.5 million rendered characters: the Sources trailer (all 37 documents) and
`## Notes on verification` contribute ZERO spoken characters.** A third layer is nearly as bad — a
table too wide for prose mode becomes *"A detailed table appears here in the written version… The
full table is on the website."*

⚠️ **A limit, a scope or a qualification living only in one of those layers does not exist for a
listener.** An audit of all 37 trailers, both `## Notes on verification` sections, all 19 pointer
tables and all 3 mid-document dropped paragraphs found **no critical** — most disclosures are
duplicated in voiced prose, and **that finding is itself worth having: the corpus's disclosure
discipline is better than the layer analysis predicted.** What it did find:

| Site | What is unreachable |
|---|---|
| ⚠️ `rules_primer.md:784` | **The corpus's ONLY cross-book comparison table** — 6 columns × 20 rows, so a pointer. Its Trapezoid cell carries the **British position and nothing else in the corpus does**: *"Unsettled in England and Wales… England Ice Hockey's Rules & Regulations 22.3 say it is 'not currently enforced' — and EIH governs England and Wales only, so in Scotland, Northern Ireland and BUIHA hockey 27.7 reads as live… If it is **your** goalie assume it binds; if it is **theirs** assume they may come for it."* `not currently enforced` occurs **once in the corpus**, here. §7, the voiced trapezoid section, says the trapezoid applies in *"IIHF play"*, never mentions the English suspension, **and does not link `uk_rules.md`, which carries it voiced** — though it links that file at nine other lines. ⚠️ **Three voiced paragraphs point INTO this table** — *"The **column above** covers only the amendments…"*, *"…it bears out most of **the column**"*, *"The **face-off row above**…"* — so a listener is told to consult something they never heard. |
| ⚠️ `equipment.md:387` and `:760` | **A head-protection certification AGE LIMIT, in a pointer table and a Sources trailer, and nowhere else.** HECC files visors as *"Eye and Face Protectors Type C"*, *"certified only for persons age 18 and over"*. Corpus-wide grep for `age 18 and over`, `Type C`, `junior age category`: **two hits, both unvoiced.** The voiced facial-protection passages cover NHL/IIHF/In-House *requirements* and the British women's visor date; **none says a HECC-certified half visor is not certified for an under-18.** ⚠️ **Needs `rules-verifier` on USA Hockey Rule 304 and `safety-reviewer` on the practical consequence BEFORE wording.** |
| `defensive_zone_coverage.md:361` | **A whole `##` section renders as a 25-word apology** — its entire content is a 6×7 table. Most substance survives elsewhere (each system's "What it concedes", the 35-foot walk-down). **Table-only:** the *"roughly 29 feet below the point"* box+1 figure, the difficulty ranking, and **the side-by-side itself, which is the section's answer to the cardinal rule.** |
| **Seven documents** | **Voiced sentences pointing at layers the listener never hears.** `skating.md:197` and `:210` — *"see the verification note at the foot of this document"*, **twice**, and that note is **deleted**. `switching_positions.md:398`, `playing_without_the_puck.md:66` (*"See Notes on verification"* — dropped whole), `getting_started.md:252` and `:144` (pointer tables), `mental_game.md:31`, `game_management.md:64`, `puck_handling.md:839`, `on_ice_communication.md:145` and `:469`. ⚠️ **The substance is stated inline in every one — only the pointer dangles.** Lowest-cost fix: **carry the point, not the pointer.** |
| `equipment.md` | Its price scope is split: *"at a US retailer"* is voiced, the **region/currency caveat is not.** A British listener hears `$319.99`, `$1,229.99`, `$949.99` with no market scope on that line. |
| `rink_map_and_glossary.md:53` | 4 columns, so a pointer — and **four IIHF metric figures are voiced nowhere in the corpus**: boards height `1.07 m`, glass `2.4 m` / `1.8 m`, bench `10 m × 1.50 m`, the 15 ft circle radius. **The NHL equivalents at :34–38 ARE narrated** (3 columns), so the loss is the metric side only, **in the corpus's geometry owner, for readers on the IIHF book.** |

⚠️ **The audit's own declared blind spot is the more important half, and nobody has run it:**
*"The inverse defect — a scope that IS voiced but arrives too late, too quietly, or after the claim
it qualifies. I treated 'present in a voiced layer' as sufficient. It is not."* Its own example:
`on_ice_communication.md:565` enumerates fifteen undocumented calls **at the end of the document**,
hundreds of spoken seconds after each was taught as usable — **counted as an upheld disclosure, and
a listener would not.** ⚠️ **The whole "upheld" list in that report should be re-read for ORDERING,
not presence.**

⚠️ **Coverage, stated honestly:** 8 of 37 trailers read word-for-word, 29 through a keyword filter
that *"excludes any sentence containing 'flagged'/'labelled'/'in the text'"* — **so a trailer-only
scope asserting it was flagged when it was not passes through invisibly in both directions.** 8 of 19
pointer tables traced; **11 not**, including `risk_management.md:441`, an eleven-row game-state risk
table covering shorthanded, power play and empty-net. **1 of 27 prose tables read.**

### ✅ CLOSED — 27 chunks were producing NO AUDIO, and the cause was NOT missing punctuation

**Found by census, not by any brief.** `md_to_speech.py` splits an over-long paragraph **only at a
sentence end**. A long semicolon or em-dash chain gives it nowhere legal to cut. Two agents tripped
over the symptom independently — a chunk opening mid-sentence, once **inside a verbatim IIHF
Situation Handbook quotation** — and one of them named the cause and said the census *"is a
one-command census and it is not run."* It has now been run.

⚠️ **27 chunks exceeded the SERVICE's hard limit of 3,000 billed characters**, the largest **3,493**,
in 8 documents. **SynthesizeSpeech refuses such a request, so those chunks produced no audio at
all** — and nothing said so: the renderer exited 0 and the report looked clean.

**Two renderer changes, both made:**

1. ⚠️ **The existing fallback had a trigger too narrow to do its job.** It read `len(groups) == 1`,
   so a paragraph that split into **two** groups with one still over the limit **never reached the
   fallback**. Widened to fire on any oversized group, and it now retries **only the offending
   group** — re-splitting the whole paragraph would cut mid-clause in the parts that split cleanly.
   **Every chunk now fits: max billed 2,852 against a limit of 3,000, zero over** —
   ⚠️ **A "cost" of 133 → 183 mid-sentence openers was recorded here and is RETRACTED
   — the metric counted verbalised section headings (*"one. Rink dimensions"*), and the
   genuine figure is zero both before and after.** See the round record. **And the
   diagnosis behind this whole row was then refuted: the cause was not missing
   punctuation.** The splitter tested one token at a time, so a group crept past the
   budget *inside* a sentence and could only be cut at the next boundary, by which
   point it was already oversized. It now packs whole sentences. **Rescues: 80 → 0.
   Oversized chunks: 24 → 0. No markdown change required for either.**
2. **`--report` gained two sections**, `SPLIT MID-CLAUSE` and `OVER THE SERVICE LIMIT`, the first
   listing every rescued paragraph **against its document**.

⚠️ **THE RESCUE IS NOT THE FIX, AND THE REPORT IS DELIBERATELY KEYED SO IT CANNOT HIDE ONE.** A
rescued paragraph still breaks mid-sentence for the listener. Had the fallback simply been widened,
the oversize list would have emptied and the source defect would have gone silent — so the fallback
**records every paragraph it rescues** and the report prints them. **Fix the source and the list
empties. Nothing else empties it.**

⚠️ **THE WORKLIST BELOW IS CLOSED AND ITS PREMISE WAS WRONG. Read this before acting on it.**
An agent instrumented `_split_paragraph` and found **every** rescued paragraph carried **8 to 21
legal sentence boundaries**. The splitter tested **one token at a time**, so a group crept past the
budget *inside* a sentence and could only be cut at the next boundary — by which point it was
already oversized. **Any `<p>` over the budget was guaranteed a rescue whatever its punctuation.**
Two changes fixed it in `scripts/`: `RE_SENTENCE_END` now accepts a closing quote (it could not see
`."`, while `RE_SENTENCE_TAIL` five lines away could), and `_assemble` packs **whole sentences**.
**Rescues 80 → 0, oversized chunks 24 → 0, 0 malformed XML, max billed 2,846 — no markdown change
required.** ⚠️ **Four agents were dispatched against the wrong diagnosis. Their punctuation work
stands on its own merits, but it is new unreviewed text written to solve a problem in the code.**

**The (now empty) worklist — was 80 paragraphs in 24 documents.** Get it from
`python3 scripts/md_to_speech.py --report | sed -n '/SPLIT MID-CLAUSE/,/documents\.$/p'`.
⚠️ **Do not copy a count out of here — run the command.** Leaders: `rules_primer` **29**
(dispatched), then `defending_the_rush`, `defensive_zone_coverage`, `body_contact_and_battles` **5**
each, `risk_management`, `defender`, `shooting` **4** each.

**The repair is PUNCTUATION** — a semicolon or em-dash chain becomes full stops. ⚠️ **Never split
inside a verbatim quotation.** The pattern that worked was to break the quotation into **verbatim
segments with attributions between them**, re-verifying every word against the primary text
flattened first — v1.1 hyphenates `pla- ne` across a wrap.

⚠️ **A coordinator heuristic that mapped these to files by string-matching was BADLY WRONG** — it
put 28 on `mental_game.md`, which has none, and missed that `rules_primer` had 29. It was replaced
by attribution inside the renderer. **Recorded because the wrong list was one dispatch away from
sending four agents to the wrong files.**

### ⚠️ TIER 1 — the audio is MORE CONFIDENT THAN THE PAGE, at 17 points in one document

`SYMBOLS` maps `†` to `""`. **All 17 daggers in the corpus are in `on_ice_communication.md`**, where
they mark *"no published coaching source documents this as a spoken call"* — and **two voiced
sentences tell the listener to look for a mark they will never hear**: *"Calls marked with a dagger
**()** below…"* and *"Treat every daggered **()** entry as widely used but undocumented."*

**Every one of the fifteen marked calls is then voiced with no marker at all.** ⚠️ **The direction of
harm is exactly what non-negotiable 4 exists to prevent.**

⚠️ **This was NOT fixed in the renderer, deliberately.** A glyph's meaning is the document's, not the
symbol table's; hardcoding *"undocumented as a spoken call"* into a global table would be wrong the
first time any document used a dagger for a footnote. **The repair is content-side: replace the
glyph with words.** Partial rescue exists — a voiced sentence near the end enumerates all fifteen by
name — but it arrives hundreds of spoken seconds after each was taught as usable.

### ⚠️ Renderer defects found by the reader-only-layer audit, NOT yet fixed

- ⚠️ **A markdown table inside a blockquote bypasses `render_table` entirely** and flattens to an
  unlabelled comma stream: `body_contact_and_battles.md:972`, the **only** blockquoted table in the
  corpus, and it is the evidence refuting the cross-checking folklore. Column heads are spoken once,
  then 21 numbers arrive unlabelled. `render_table`'s prose mode re-announces the head before every
  cell, so **the blockquote path is strictly worse** — and this table is invisible to the
  `tables as prose` / `tables as pointer` counters. **Route blockquoted tables through
  `render_table`, or unwrap this one.**
- **A game-ID range voices as a quantity** in the same paragraph: `2024020001–2024020400` becomes
  *"two thousand and twenty-four million twenty thousand and one to…"*.
- **`--report` undercounts dropped Sources sections: 35, not 37.** In `playing_without_the_puck.md`
  and `neutral_zone_systems.md` the trailer sits inside the already-skipped
  `## Notes on verification`, so `in_sources` never fires. Output is identical; **the count
  misleads an author auditing which documents lose their trailer.**
- **`render_facts` dropped `⚠️` with nothing replacing it** while `render_paragraph` and
  `render_list` both said *"Important."* for the same glyph. **FIXED.** Ten facts values carry it and
  every one is a rule-set divergence or a penalty — the emphasis was being dropped in the layer the
  style guide calls the most load-bearing, and the only layer voiced entirely alone.

### ⚠️ TIER 1 — POSITION IN A CHUNK IS IRRELEVANT for a facts value or a list item

**Two independent agents, working different halves of the corpus, ended their reports by declaring
the same hole. That is the strongest signal this file has for a real dimension.**

The anaphor passes flagged **the first `<p>` of each chunk**. But `md_to_speech.py` emits **one `<p>`
per paragraph, per list item and per blockquote**, and a ` ```facts ` value is voiced with a **300 ms
break either side**. **So a facts value or a list item is voiced alone wherever it sits** — the chunk
boundary is irrelevant to it, and *"a listener who pauses does not resume on a chunk boundary."*

**It is proven, not theorised.** `goaltender.md`'s three bullets — *"It gives away the top of the
net" / "It is worse the smaller you are" / "It removes save selection"* — were repaired as
chunk-openers and **were not chunk-opening**: they sat at lines 13/15/17 of chunk 018 with their
antecedent in the same chunk. **They still needed the repair.** ⚠️ **The brief was wrong about why
and right about what**, which is the round's recurring shape.

⚠️ **And the word list is the ceiling of the method, not the floor.** Both agents said so
independently: *"a definite description doing the same work — 'the review', 'that book', 'the second
exception' — is not on it."* One met such a case **inside their own new bullet, only on re-reading.**
Unmoored openers matching **no pronoun at all**: *"Two riders in the same rule are worth knowing"*
(`risk_management.md:583`), *"The same is true against you"*, *"The wider one…"*.

**So: read each unit and ask whether it identifies what it is about. Do not grep for pronouns.**

⚠️ **Rejections that must NOT be re-flagged**, each read and upheld: `Neither X nor Y` is a
self-contained negative coordination; `center.md` chunk 010 and `defender.md` chunk 002 **define
their own referents in the same breath**; and five openers keep a bare *And*/*So* deliberately,
because the connective carries *"this follows from what precedes"* and the subject is now named
inside the unit. **Four sweeps this round would have damaged correct text.**

**Status:** dispatched for `content/positions/`, `content/hockey-iq/`, `content/technique/` and
`content/off-the-ice/`. ⚠️ **NOT yet dispatched for `content/foundation/`, `content/systems/` or
`content/getting-started/`** — those held live agents on the first-`<p>` pass when this was written.

⚠️ **The style guide's *"what is voiced alone"* table does not record that a body list item renders
as its own `<p>`.** That is the omission that let this survive. **Add the row.**

### ⚠️ METHOD NOTE — chunk numbers go stale on the next edit

`body_contact_and_battles.md` went **105 → 107 chunks** from roughly 200 added characters;
every boundary after chunk 049 moved. **Any measurement citing a chunk number must be
re-run, never reused.** The per-`<p>` finding survives an edit; the chunk index does not.

And the test has false results in **both** directions, both observed in one run: a `chin`
count of 1 that was **`coaching`**, and four chunks reading "absent" because the corpus wrote
*"back to the play"* or *"chin off your chest"* rather than the regex's fixed string.
**A dump finds candidates; only reading decides.**

---

### ⚠️ Three boards `Never:` values use a full stop WITHOUT the word "instead"

`winger.md:16`, `:88`, `:336` end with an instruction after a full stop but without
*"instead"*, which the style guide's rule requires — *"An instruction takes a full stop **and**
the word 'instead'."* Severity low: the full stop is present, only the belt-and-braces word is
missing, and the measured inversion mechanism does not fire.

⚠️ **It must be fixed as ONE uniform pass over all three, or not at all.** The agent that
found it deliberately did not diverge its copy from the other two — *"fixing one of three
would be worse than the defect."* This wording exists nowhere else in `content/`.

---

### ⚠️ TIER 1 — 23% of facts blocks are SPLIT across a TTS chunk boundary

**The whole review method rests on the premise that a counterweight in the same block is "in
earshot." Measured, that premise is false for roughly one block in four.**

**33 of 146 blocks across five documents** — `risk_management` 9/29, `defending_the_rush`
8/32, `breakouts` 7/39, `winger` 5/21, `defensive_zone_coverage` 4/25. Method: an unambiguous
60-character probe, counting only blocks whose facts land in exactly two **adjacent** chunks.
A looser first method gave 37 with probe false positives; **the tighter figure is the one
stated.**

Each `NNN.ssml` is an independently voiced request, so a value one chunk away is **not** in
earshot — the same test that has decided cases in both directions all round.

⚠️ **The obvious renderer fix is UNSATISFIABLE as a guarantee.** Measured: **17 of 794 blocks
alone exceed `MAX_BILLED_CHARS = 2800`** (largest 4,196 spoken characters; median 675, p90
1,826). So "never split a facts block" cannot hold. The achievable rule is *prefer not to
split, and split only where the block alone exceeds the cap* — a real improvement, **not a
guarantee**, and it moves every chunk boundary in the corpus.

⚠️ **A split block is NOT automatically a defect.** The counter-case was checked before
generalising: one split block is sound because **its imperative carries its own counterweight
inside a single value**. That property — a value that is self-sufficient as a paragraph — is
the durable fix, and it is what the boards repairs this round were already converging on.

**One confirmed safety instance**, routed: in `winger.md`, chunk `005` **ends** on the
`Technique:` carrying all four boards components and chunk `006` **opens** on the `Never:`
carrying none. ⚠️ **Reordering the block to move the boundary was rejected on principle** —
*"tuning content to a chunker's arithmetic, and the boundary moves the moment anything above
it changes."*

**The 23% figure is five documents.** There is no reason to think they are unrepresentative,
which is exactly why it should be measured across all 37 rather than assumed.

---

### ✅ CLOSED — the `--hedges` section-split bug was ALREADY FIXED in HEAD (`8a0b64e`)

⚠️ **The THIRD stale row found today, and the pattern is now the finding.** Work was done,
the row was never retired, and the row still read as an instruction. Dispatched as written,
an agent would have "fixed" a fixed tool.

**Measured properly on the way to discovering that** — a faithful pre-fix reconstruction
diffed against HEAD, both run on the current tree:

- **71 hits before, 52 after.**
- **22 vanished, and all 22 were FALSE ATTRIBUTIONS** — verified by line number, the
  reported sentence lived under a different heading from the one it was blamed on. 13 in
  `## Common Mistakes` / `## Key Takeaways`, 9 in ordinary later `##` sections, distances
  18–124 lines. **None was a lost real finding.**
- **0 were merely re-attributed.** They vanish rather than move because the true section is
  either a skipped summary layer or a `##` with no facts block.
- ⚠️ **3 APPEARED** — `##` sections carrying their own facts block and no `###` subsections,
  **previously invisible to the tool entirely.** That is the half of the bug the original row
  did not describe: the landed fix keeps `##` sections too, which the row's proposed fix
  ("keep only sections starting with `### `") would **not** have done. **The row's fix was
  narrower than the bug.**

**Two of this row's own specifics had drifted and are corrected:** no hit's sentence is at
line 1323 (nearest is 1409), and the worst swallow is **4** `##` sections, not six.

⚠️ **Also fixed while there: `check_facts.py` carried TWO hit counts that disagreed with each
other and with reality** — the docstring said *"about 31 sections"*, a block comment said
*"about 35 of 654"*, actual is **52 of 1082**. Both stale in numerator *and* denominator.
Replaced with a pointer to the tool's own output. Comments only, zero behaviour change,
`--hedges` output byte-identical, gate figures unmoved.

#### The original row, retained for its reasoning — DO NOT ACT ON IT

`report_hedges` splits with `re.split(r"\n(?=### )", text)` — **on `###` only**. So a document's
trailing `## Common Mistakes`, `## Check yourself` and `## Key Takeaways` are absorbed into
whatever `###` section came last, and a hedge sentence in any of them is reported against a
section that does not contain it.

**Confirmed by hand, twice, and it is worse than first measured.** One "Fighting" hit's
sentence was at **line 1323, inside Key Takeaways**. And a second reviewer found the artefact
accounts for **5 of the 15 hits in its file set — one of them swallowing SIX whole `##`
sections**, so the flagged text came from a section six headings away from the one named.

⚠️ **Measured across four triaged file sets — and the picture is NOT uniform, which is the
finding.** In two sets (`body_contact_and_battles`, the five `positions/` documents) **zero of
27 flagged sections was a real defect at the flagged sentence**: nine were exceptions already
in the block, often verbatim, six were this artefact, the rest immaterial. **In two other sets
(`faceoffs`, `technique`+`hockey-iq`) the census had genuine true positives** — three of seven
and four of twelve respectively, including a flattened conditional and a classification-scoped
exception that reached the body and Common Mistakes but not the block.

**So the census is neither a defect list nor noise. Its precision varies by document, its
recall is unknown, and roughly a quarter of all flags are the `##`-absorption artefact.**
⚠️ **An earlier entry here claimed zero true positives overall. That was true of the first two
sets and I generalised it. Corrected.**

**Fix:** split on `\n(?=#{2,3} )` and keep only sections starting with `### `, so a `##`
boundary terminates the preceding `###`.

⚠️ **Deliberately NOT fixed while four agents were running `--hedges` concurrently** — changing
a tool under live users would have shifted every list mid-run and made the reports
irreconcilable. **Fix it once they are clear, then re-run the census.**

---

### ⚠️ TIER 1 — `check_facts.py --hedges` — **run it; the count moves.** Sections where a rule-bearing exception
is in the body and not in the block

Run at the fourth gate pass, on a `facts-reviewer`'s closing advice that it was *"the single
highest-value thing left, and it is cheap."* It was neither run nor recorded before.

**This is the exact shape that produced this round's criticals** — body ✓, block ✗, in the
layer voiced alone. Examples from the run:

- *"that good-goal limb belongs to those two books only, so do not carry it into a minor-hockey
  game"* — the kicked-puck divergence, body-only in a second document
- *"IIHF women's rules specifically prohibit pinning an opponent along the boards (Rule 101.1)"*
- *"USA Hockey and Hockey Canada write no such clause"* — the checking-from-behind waiver
- *"read the Note the other way round, because its own Casebook does"*

⚠️ **Advisory, not a gate.** Its own output says *"verify each by hand; some are covered in
other words"* — and this round has twice caught a fixed-string test reporting a false absence
because the corpus said the same thing differently. **A sweep here would do real damage.**

**Do not treat the count as a defect count** — it was 66 when first run and 67 an hour later, and neither is a number of defects. It is a candidate list, and the work is reading it.

---

### ⚠️ `faceoffs.md` — the BLOCK is ahead of the BODY, and that inverts the design

Measured across the round's delta: **18 new `Rule:`/`Convention:` facts name a rulebook their
own section's body never names once.** Four were repaired by extending the body; **14 remain,
12 of them in `faceoffs.md`** — USA Hockey 204(a), 612(b), 612(d), 613(b), 613(c), 613(d),
624(a); Hockey Canada 6.1(d), 6.2(a) Interp 1, 6.2(e), 6.3(d)(vi), 6.4(b), 6.7(b) — plus the
In-House Rules in `offensive_zone_play.md` and the IIHF delay list in `zone_entries.md`.

⚠️ **The facts are ACCURATE** — every one verified against primary text on disk. **The defect
is architectural and one-directional:** `faceoffs.md`'s prose is NHL/IIHF-only while its blocks
are four-book, **so a body reader is now worse served than a block reader**, which inverts the
relationship the layer design assumes.

**And it is the state that lets a later faithful-extraction pass delete the cross-book half as
"not in the section."**

⚠️ **Deliberately not repaired, and the reasoning is the standard:** 14 body extensions is a
large surface of new unreviewed prose in a commit already blocked three times over unreviewed
new text. The style guide's instruction for an untraceable fact is *"raise it, do not write
around it."*

---

### ⚠️ CORRECTED — `faceoffs.md`'s "eight citations only in blocks" measures 2, not 8

⚠️ **The FIFTH stale or wrong plan row found today.** Measured by extracting every rule token
from all **33** facts blocks in the file and matching against the prose **with the Sources
trailer excluded** — the trailer is not a heard layer and would have falsely cleared citations.

**Result, after a second and better measurement: 4 tokens in NO prose anywhere, not 8 — and now 0.** ⚠️ **The intermediate figure of *"2 of 42"* was also wrong**, because it measured *presence-in-document*. Re-run as **traceability-to-section** — every rule token in every `Rule:` value across all 33 blocks, matched against **that block's own section prose**, with the Sources trailer and the block itself excluded: **189 tokens, 183 tracing to their own section, 4 elsewhere in the document, 4 nowhere.** The four *"nowhere"* tokens were `627(c)`, `6.10(a)` **and a SECOND independent instance of the same defect nobody had found** — `6.7(d)` and `6.7(d)(iii)`, asserting Hockey Canada's post-icing position from a value whose rule number appeared **once in the whole file, inside the facts block**, and not in the Sources trailer. All four now trace. ⚠️ **The four remaining *elsewhere-in-document* tokens were read individually and are citation-form only** — the substance is in the section's prose and only the bare number is absent (a section writing *"Rules 76.3 to 76.7"* as a range where the block cites `76.6`). **Not defects; a sweep would have damaged them.** — `627` and `6.10`, **both inside a single value**, the one granting
a kicking permission for USA Hockey and Hockey Canada **by inference** from a general kicking
rule that is not a faceoff rule. Every other citation in every other block resolves to spoken
prose in the same document.

⚠️ **The measuring agent stated its own method's limits, and they matter:** exact-string
matching **cannot see a citation the prose states in another form** (*"Rules 76.6, 76.7"* vs
`76.6`), and it counts a token found **anywhere** in the document as resolved **even if it sits
in a distant section rather than the block's own**. **So it measures presence-in-document, not
traceability-to-section — an UPPER BOUND on clearance.** The true count may be higher than 2.
**It cannot be 8.**

**The remaining work is therefore a better measurement, not a repair:** tighten it to
traceability-to-section. That is worth more than fixing the two.

#### The original row, retained — DO NOT ACT ON ITS FIGURE

Measured by extracting the facts lines and testing each citation against the same file with
the fences stripped:

| Citation | Fact | In body? |
|---|---|---|
| Hockey Canada 6.4(b) | `:143` | no |
| USA Hockey 612(d), Hockey Canada 6.3(d)(vi) | `:147` | no |
| USA Hockey 204(a), Hockey Canada 6.1(d) | `:186` | no |
| USA Hockey 613(b) | `:252` | no |
| Hockey Canada 6.2(e) | `:341` | no |
| Hockey Canada 6.7(d) | `:827` | no |
| USA Hockey 627(c), Hockey Canada 6.10(a) | `:490` | no |

⚠️ **All eight were verified TRUE against primary text on disk**, each with a line number.
**This is not a correctness defect — it is `extract, never author`.**

**Deliberately NOT repaired, and the reasoning is the standard:** authoring eight new body
passages during a gate blocked on *unreviewed new text* would enlarge the problem it was
convened to close. The style guide's instruction for exactly this case is *"that is a finding
about the section — raise it, do not write around it."*

⚠️ **The risk if it is left indefinitely:** a later faithful-extraction pass sees a fact with
no home sentence and **deletes the protective half**. That failure mode was observed in
`breakouts.md` this round and fixed by extending the body, not trimming the fact.

**Also open, same document:** 24 `Rule:` facts in `faceoffs.md` name no book. Two carry real
cross-book divergence and are the ones to do first — `:187` (five seconds to line up; Hockey
Canada writes no line-up limit, per the block's own `:190`) and `:320–322` (*"skate contact
with the line is permitted"* is NHL/IIHF 76.7 text; USA Hockey 613(b) says only *"behind the
hash marks"* and writes no line-contact permission).

⚠️ **Corpus-wide the figure is 31 of 846, not the 65 of 829 carried in earlier briefs** — 24
in `faceoffs.md`, 3 in `on_ice_communication.md`, 2 in `breakouts.md`, 1 each in
`offensive_zone_play.md` and `body_contact_and_battles.md`.

---

### ⚠️ OPEN ROW — the "policies of IHUK" clause: THREE instruments, and the directions differ

`sources/eiha_inhouse_2026-27.txt:36-41` — EIH and SIH policies *"are now policies of IHUK
and will continue to apply to all Clubs and Teams. IHUK is now entitled to enforce these."*

| EIH instrument | If IHUK absorbed it | Direction |
|---|---|---|
| **R&R 22.3** goaltender restricted-area suspension | suspension reaches all four nations | **LAXER** |
| **R&R 24.3** neck protection at *"all on ice activities"* (practice) | practice mandate reaches all four | **STRICTER** |
| **R&R 24.5** junior face-cage mandate | cage mandate reaches all four | **STRICTER** |

⚠️ **The directions differ, which is why none may be guessed.** For the trapezoid the
permissive reading is laxer, so the corpus's conservative instruction holds either way. For
the two equipment rules the permissive reading is **stricter** — so scoping them to England
and Wales, which is what is published, is the **narrow** reading and may under-protect a
Scottish or Northern Irish reader.

**Everything is written to what is published, and the gap is recorded rather than closed.**
The book never defines *"policies"*; that sentence's subject is *"references in these
terms"*, narrower than a general incorporation; the R&R on disk is the **pre-merger 2024-25**
edition; **no IHUK Rule Bulletin has ever been obtained.** One document would settle all
three — and the Introduction says IHUK issues them.

Also live and undecided: `rink_map_and_glossary.md:238` says *"nothing in the In-House Rules
suspends it for SIHA or BUIHA hockey"* — whether that `SIHA` should be `SIH` sits inside
this same question and was deliberately left.

#### The original trapezoid row

`sources/eiha_inhouse_2026-27.txt:36-41`: EIH and SIH policies *"are now policies of IHUK
and will continue to apply to all Clubs and Teams. IHUK is now entitled to enforce these."*

**If England Ice Hockey R&R 22.3's trapezoid suspension is a "policy" within that sentence,
the suspension reaches all four home nations and BUIHA** — reversing the "IIHF 27.7 reads as
live in Scotland" reading the corpus carries in at least four documents
(`uk_rules.md`, `rules_primer.md:751`, `getting_started.md:150`,
`puck_support_and_spacing.md:410`).

**The book does not settle it**, and each reason was verified: *"policies"* is never defined;
the sentence's subject is *"references in these terms"*, narrower than a general
incorporation; the R&R on disk is the **pre-merger 2024-25** edition and no post-merger
replacement could be found; **no IHUK Rule Bulletin has ever been obtained.**

⚠️ **Direction decides the handling. If it resolved permissively the answer is LAXER — no
trapezoid anywhere in Britain.** The corpus's standing instruction ("assume it binds, keep
your goalie inside, ask your league") is safe under **both** resolutions and costs a
goaltender nothing; the permissive reading is safe under one and costs two minutes if wrong.
**So nothing is written on it, in either direction, until a Rule Bulletin or a post-merger
R&R is obtained.**

---

### ⚠️ Stale territorial scope — remaining sites, and one guard

Still open: `breakouts.md:767` (*"in England and Scotland overtime is played only in
NIHL…"*). Being handled: `switching_positions.md:235`/`:249`, `on_ice_communication.md:365`,
`how_to_watch_hockey.md:338`.

⚠️ **DO NOT SWEEP `SIHA` CORPUS-WIDE.** The **video-review bars legitimately say *"EIH or
SIHA competition"*, identically in BOTH editions, at 11 sites** — the source's own narrower
wording for a different provision. A blanket sweep would corrupt eleven correct citations.

**A propagation gap, not a defect:** 14 documents carry *"in England and Wales its status is
unsettled"* about the trapezoid. **None is wrong** — each attaches the conservative
instruction — but none names Scotland, Northern Ireland or BUIHA, so the corpus states the
territorial split in exactly one content document. Widening them is optional; leaving them
is safe.

---

### ⚠️ TIER 1 — THREE DOCUMENTS QUOTE A SUPERSEDED RULEBOOK EDITION, on a safety marker

`sources/eiha_inhouse_2026-27.txt` (current) and `sources/eiha_inhouse.txt` (superseded)
differ on Rule 9.12, and **the words that changed are exactly the ones naming which
competitions the rule reaches**:

```
current      "mandatory for all players in all IIHF categories and IHUK/EIH/SIH competitions"
superseded   "mandatory for all players in all IIHF categories and SIHA competitions"
```

| Site | Verdict |
|---|---|
| `uk_rules.md:13`, `:121` | **current** — the owner is right |
| `switching_positions.md:249` | stale |
| `equipment.md:66` | stale |
| `goaltender.md:967` | stale |

Found independently twice, from a facts pass and a safety pass. `rules_primer.md:967`
already records 2026-27 as the live edition, so **the corpus knows which edition is current
while three documents quote the dead one** — a figure copied out of its owner going stale
silently, which is the exact failure CLAUDE.md names.

⚠️ **Everything else in those passages was verified correct and must not move** — no age
exemption, no warning, immediate 10-minute misconduct, escalation to game misconduct, the
EIH 24.3 *"all on ice activities"* extension. **The correction is tightly bounded.**

⚠️ **State the direction.** A reader who concludes *"so maybe I do not need one"* from a
scope correction is the failure mode that matters. `rules-verifier` is establishing whether
BUIHA is inside the In-House competition list or reaches the mandate via the IIHF book
instead — **two different claims, and only one of them supports the corpus's enforcement
sentence.**

Also open at `puck_support_and_spacing.md:410`: a 🇬🇧 sentence that opens *"In England and
Wales"*, turns to Scotland and BUIHA across an em dash, then returns to England after a
colon. The geography does not track read aloud.

---

### ⚠️ Does SHOT BLOCKING have a component list? Nobody has asked the owner.

The boards prescription has four components the corpus treats as a set — `head up` ·
`chin off your chest` · `skates parallel` · `forearm and hip` — owned by
`body_contact_and_battles.md:607` and restated by six documents. A census found three
sites short of it and repaired them additively.

**Shot blocking is instructed in at least four places and no two agree:**

| Site | What it carries |
|---|---|
| `defensive_zone_coverage.md:472` | ten feet, square, shin pads, stick down — **no head component**, none in its body either |
| `defending_the_rush.md:449` | `Never: Go down with your head in the shot lane` |
| `special_teams.md` | `block shots` **bare**, ×3, one as a standalone `Action:` fact; the technique is four SSML chunks away |
| `center.md:510` | the NHL 63.2(v) permission, recast into the book's declarative frame |

⚠️ **The answer may legitimately be that no list exists.** If `body_contact_and_battles.md`
does not own one, then standardising these four would be **inventing a formula the owner
has not written**, which is precisely the failure this corpus guards against. **Recording
the absence is as valuable as recording a list.** Asked; awaiting the finding.

---

### ⚠️ A reader told to expect contact and given no posture

`breakouts.md:824` — `Never: Put your back to the boards and wait because the arm is up` —
**0 of 4 components**, in the delayed-offside section, whose whole point is that the reader
should expect to be hit. Body at `:833` has `head up` and a pointer.

The finder declined to repair it as authoring. **Coordinator judgement: it is extraction,
not authorship** — the formula is owned by `body_contact_and_battles.md:607` and already
restated six times, twice elsewhere in `breakouts.md` itself. Routed, with the instruction
that leaving it is still an acceptable answer if reading says the delayed-offside hazard
takes a different posture.

---

### ⚠️ TIER 1 — THREE shapes now, not one. The class keeps widening.

**1 · Em-dash inversion.** `_label_lead` renders `Never:` as `"Never — "`, so a second em
dash is prosodically identical; the negation carries across it and inverts the instruction.
~150 repaired.

**2 · Post-dash imperative, no negation anywhere.** Label, context clause, dash, bare
imperative **instructing the hazardous act**. No negation-filtered scanner can see it.

**3 · Post-label imperative, NO DASH ANYWHERE. Newly adjudicated in class.** `Risk:` voices
as `"Risk. "` — a terminated noun — and the imperative follows straight after:

```
Risk: Ice it at even strength and the puck comes straight back
Risk: Go early or slide past the lane and you are on the ice and out of the play
```

The second decided it: its block carries the tripping and clipping majors, so the act the
listener is invited to perform is a penalty.

⚠️ **And a fourth finder that is not a shape at all — the HAZARD-VOCABULARY LAYER TEST.**
It found the worst defect of the round, which contains **no dash of any kind**:

```
Technique: Face the wall with the puck below your body and your back to the ice
```

An instruction to put your back to the play at the boards, voiced alone, with the body's
counterweight present in the body and absent from the block. **Extract every non-`Rule:`
facts value carrying hazard vocabulary regardless of dash, and read all of them.**

**Repair form is the DECLARATIVE**, traceable to a body sentence in the fact's own section.
A declarative cannot be heard as an instruction at all. Where a rulebook is the source its
own frame is already declarative.

⚠️ **Component completeness is a separate finder again.** Three repairs in one wave were not
inversions but **missing components** of `head up` · `chin off your chest` · `skates
parallel` · `forearm and hip` — three of four in a facts block, two of four in a Common
Mistakes bullet, two of four in a Check-yourself answer, each with all four in the body a
line below. Repair **additively, in the document's own words**, never by deletion.

**Declared gaps, all now dispatched:** blockquote and table cells (skipped by every pass so
far); 246 body-paragraph candidates carrying no negation or hazard word; the caption layer
for shapes 2 and 3.

---

### ⚠️ TIER 1 — the defect class with NO negation in it, corpus-wide sweep in flight

A ` ```facts ` value is voiced standalone, in its own `<p>` with a 300 ms break either
side. **Two repairs this round had no negation anywhere in the paragraph** — the defect
is that a label, a context clause, a dash and a bare imperative are heard, alone, as
*do this*, and in both the imperative **instructed the hazardous act**:

```
Risk: The middle is the most expensive place to lose the puck — turn and survey there …
Rule: Blocking a shot is protected — drop to your knees and have the puck shot under you …
```

The second sat in a block whose **next fact** says *"close and on your feet"* — two
consecutive standalone paragraphs contradicting each other, riskier one first.

No negation-filtered scanner can see this class. It is found by dumping every post-dash
clause opening on a verb and **reading all of them**. The finder ran that in full on two
files only; four more got a keyword grep and thirty-one got nothing.

⚠️ **The second half is unswept: the VERBLESS imperative.** A post-dash clause opening on
a bare noun naming a body part or equipment — *"skates parallel to the wall"*, *"chin off
your chest"* — is an imperative with the verb elided and inverts identically.

**Repair form is the DECLARATIVE**, not a full stop: a declarative cannot be heard as an
instruction at all. Where a rulebook is the source its own frame is already declarative —
NHL 63.2(v) NOTE writes shot-blocking as a permission in the third person.

**Status: four agents dispatched over all 30 free `content/` files.** Not yet run over
the `caption` and `describe` layers, which are voiced with the same prominence.

---

### ⚠️ The caption layer is spoken, and `content/` greps do not census it

`site/src/data/diagrams.json` carries **112 `caption` and 112 `describe`** strings, all
voiced by `md_to_speech.py`. There is **no `title` field** — a report that named a
"diagram-title layer" was wrong about the field, though right about the substance.

Proven by a live divergence: *"take over the check"* was changed to *"take over the
coverage"* in both `content/` layers, and `grep -rn "take over the check" content/` now
returns **zero** — while `site/src/diagrams/puck_support_and_spacing.mjs:670` still
carries it and speaks it. **A `content/`-scoped grep is not a corpus census.**

What has been done: the em-dash inversion shape was scanned over the whole file (86
negation-then-dash pairs, 2 defects, both routed). A contact-verb triage covered 55 of
112 captions.

What has **not**: the negation-free imperative class; the omission pass; checking-league
scope on the other 57; any pass at all over `describe`, whose longest runs 1,008
characters and whose longest caption runs 2,384.

---

### ⚠️ The separator convergence — decided, and the basis is NOT a measurement

Boards-safety instruction separators, censused directly: **full stop** (large majority,
canonical), **colon** ×4, **comma/coordination** ×3.

⚠️ **The inversion mechanism is measured for the em dash and nothing else.** Colon and
comma prosody in running prose is **unmeasured — nobody here has synthesised audio.** The
decision to converge rests on an asymmetry of cost, not evidence: converging is free, and
if colons do invert, four safety instructions were inverting.

**Nothing claiming a colon was measured to invert may be written into `content/`.**

⚠️ **One instance may correctly resist repair** — `body_contact_and_battles.md:607`, the
owner line six documents quote: *"…never your back to the wall, never duck, and 'hit the
boards or goal posts with an arm, a leg or anything but your head first'"*. The *never*
can distribute onto the **quoted positive imperative**, and the quotation may not be
altered inside its marks. **Leaving it and saying why is the right outcome if it is the
true one.**

---

### ✅ CORRECTED — the "bare arrowhead" premise is FALSE at HEAD, and all nine figures were wrong

⚠️ **The FOURTH stale row found today, and the most thoroughly wrong.** The claim under test —
*"a `pass` route can render as a bare arrowhead with no visible line"* — **does not hold**, and
its two worst-case numbers were not true even of the pre-fix state.

**`rink.mjs` already carries two committed mitigations the row's model ignores:**
1. **`stroke-dashoffset` phase correction** (`rink.mjs:1341-1365`) — the dash pattern is
   re-phased so the first dash begins exactly where the line leaves the start glyph.
2. **A half-size arrowhead below one dash** (`shortHead`, `rink.mjs:1409-1412`, `AH.short = 2.25`).

**Measured on the rendered artefact, not the source: all 59 pass routes draw at least one full
2.4 ft dash. ZERO render as a bare arrowhead.** The `ah-short` marker was confirmed emitted and
referenced in the output SVG.

**All nine figures refuted individually — and the error is not correctable by a constant.**
Seven were optimistic, two pessimistic. They reproduce to ±0.01 ft under a flat
`arcLen − 3.5 − 2.6775`, which identifies the row's method exactly: a **constant** 3.5 ft start
occlusion, no emergence walk, no `shortHead`.
- The 2.68 ft head is **right**. The **3.5 ft glyph occlusion is wrong** — the true ink is
  **3.875 ft**, and it is **not a constant at all** but a per-route walk. ⚠️ **`rink.mjs:1089`
  already records the 3.5 as wrong**, in the source, and the row was written anyway.
- `centre-swing-low` (6.10) and `breakout-up` (6.19) are **NOT under 6 ft.**

⚠️ **The row's list MISSED the corpus's shortest pass route.** `winger-dz-reverse` #0 is
**2.83 ft** — the only route below 3.0, drawing one dash beside a **full-size** head, so the
arrowhead is the largest mark on it. Its arc is **identical** to `off-wing-open-to-the-ice` #2,
so **under the row's own flat model it scores 3.53 and ties for third — it should have been ten,
not nine.** `rink.mjs:1390` names it only in passing, at *"3.16 ft"*, conflated with the other
route; the two are 2.83 and 3.15. **The shortest route in the corpus was uncounted and
misattributed at the same time.**

**True distribution:** 8 of 59 under 6 ft · 4 under one 4.2 ft dash cycle · **0 under one dash
(was 2 before `shortHead`)** · 0 with a clipped first dash.

⚠️ **And the 6 ft threshold is the wrong cut.** There is no cliff there. The cliff is at **one
visible dash** (ranks 1-4, 2.83-3.46 ft), with a soft shoulder at ranks 5-8 whose *second* dash
is 0.14-0.38 ft — **0.4 to 1.2 px on a phone, i.e. invisible.**

#### Still genuinely open, and narrowed

- ⚠️ **An INVERSION nobody designed:** ranks 5-8 sit just **above** `shortHead`'s threshold, so
  they get the **full** head plus an invisible second dash — and look *worse* than ranks 2 and 4,
  which get the short head. Whether that matters is a judgement about the picture.
- **5 routes have the arrowhead partly buried** under the destination glyph. `shortHead` computes
  `arcLen − sOut − headLen` and **never subtracts trailing occlusion** — `support-distance-range`
  #0 loses **28% of its marker**.
- ⚠️ **No gate in this repository measures legibility.** `check-arrivals.mjs` excludes `pass` from
  `ARROW_KINDS`, correctly and deliberately (*"a shot ending at the goalie is what a shot IS"*),
  so it sees **zero of the 59**. Nothing measures visible dash length, dash count, or whether a
  symbol still reads as itself.
- ⚠️ **THE MEASUREMENT THIS DECISION ACTUALLY NEEDS, and nobody has produced it:** a **blind
  reading of ranks 1-4** by someone shown the legend and nothing else. The censusing reviewer
  read `support-distance-range` #0 as ambiguous with a bar/slash terminal; `rink.mjs:1390` records
  an independent blind reading taking the same form correctly as a pass. **Those two readings
  conflict and cannot be adjudicated from the geometry.**
- **Dark theme was never looked at**, and 50 of 59 routes were measured from source without being
  seen as pictures.

⚠️ **The method lesson, and it cuts both ways:** the censusing reviewer's own two intermediate
conclusions were wrong and **only rendering caught them** — a fit-to-column phone model gave
1.68 px/ft for full-rink diagrams and a "full-rink is a separate crisis" conclusion that
**collapsed** once `global.css:1828`'s `min-width: 640px` scroll box was accounted for (3.14 px/ft,
near-identical to half-rink). **Geometry from source cannot substitute for looking at the picture.**

#### The original row, retained to show what a plausible measurement got wrong — DO NOT ACT ON IT

**Measured by a diagram pass that cropped and zoomed the pictures rather than reading the source.**
The arrowhead marker occupies **2.68 ft** of a route's tail (`markerWidth 4.5`, `refX 8.5`,
`markerUnits` defaulting to `strokeWidth` at stroke 0.7); a glyph plus its halo hides **3.5 ft** of
the head. `support-distance-range`'s only route is **8.68 ft**, leaving **2.5 ft** of line inside a
**4.2 ft dash cycle** — so the dash is swallowed entirely and *"the reader sees an arrowhead alone."*

**Nine routes under 6 ft of visible line, across eight diagrams:** `pp-overload` 2.14 ·
`support-distance-range` 2.50 · `off-wing-open-to-the-ice` 3.53 · `support-angles` 4.73 and 4.97 ·
`oz-five-man-shape` 4.92 · `oz-half-wall-options` 4.92 · `centre-swing-low` 5.50 · `breakout-up` 5.54.

⚠️ **It defeats the style guide's own test** — *"check each is unmistakable at the size the diagram
actually renders"* — **and `check-arrivals.mjs` cannot see it.** That check excludes `pass` from
`ARROW_KINDS`, which is **correct in principle** (*"a shot ending at the goalie is what a shot IS"*)
but **assumes the route still looks like a pass.**

**Three options, none of them cheap:** shorten the marker for short routes; start the route at the
**glyph edge** rather than the anchor, recovering the hidden 3.5 ft; or scale the dash to route
length. ⚠️ **Any of them changes every route in the corpus, so it is an owner's decision, not a
repair.** ⚠️ **And eight more short-pass routes have not been cropped and looked at** — the reviewer
found this one by magnifying a single picture 4×.

### ⚠️ OPEN — a reading of IIHF 48.1 that nothing on disk settles

**IIHF Rule 48.1's head-down carve-out turns on the phrase *"in the direction of the Player"*, and
the agent that repaired it flagged that the phrase is genuinely ambiguous:**

- **the head-down skater is TRAVELLING toward the checker**, or
- **the head is TURNED DOWN toward the checker.**

⚠️ **Both are grammatically available and they exclude different hits.** **No published IIHF
interpretation on disk settles it** — the Situation Handbook was checked, and its single Rule 48
entry is about a later-discovered injury.

⚠️ **The repairs made this round are safe under EITHER reading, deliberately: both are narrower than
the sentence the corpus previously carried.** That was the right call and should be preserved — **do
not let a later pass commit the corpus to one reading** without something that settles it.

**What would settle it:** an IIHF officiating bulletin or clinic material, neither of which is on
disk. ⚠️ **Fetching one is the only route, and until then the corpus must not choose.**

**Related, and also unverified:** a brief asserted that IIHF or NHL **charging** reaches a blindside
hit on a head-down skater. **The repairing agent deliberately did NOT write that**, because it was
not verified. **The corpus says only that the carve-out does not reach such a hit — it does not claim
a penalty attaches.** ⚠️ **Do not close that gap by assumption.** Hockey Canada 7.4 Interpretation 2
does define a blindside hit on a 90° peripheral test, but nobody has traced whether it attaches here.

### ⚠️ A DECISION FOR THE COORDINATOR — the corpus labels ranking claims INCONSISTENTLY

**An agent measured this across three directories and deliberately did not act on it, correctly:
repairing four sites while forty identical ones stand elsewhere is the arbitrary half-sweep.**

**The corpus has an idiom for an honest ranking** — *"coaching emphasis, not a counted ranking"* —
and applies it **unevenly**: `defending_the_rush.md` labels three claims, `breakouts.md` and
`game_management.md` one each, `defensive_zone_coverage.md` one.

⚠️ **And one document undercuts itself.** `defensive_zone_coverage.md:~94` discloses: *"**No published
tracking data breaks goals down by cause this way**, so treat that as coaching consensus, not a
statistic."* Then, in the same document:
- `:~648` — *"**The single biggest cause of turnovers on a zone exit** is a defenceman receiving the
  puck and then starting to look."* **Flat.**
- `:~626` — *"**The most common second goal** is the one conceded immediately after surviving the
  first."* **Flat.**
- and `breakouts.md:~450` — *"This is the **single most common amateur failure in hockey**."*

⚠️ **THESE ARE PREVALENCE AND CAUSE RANKINGS, NOT DANGER RANKINGS** — the class the danger sweep was
explicitly told **not** to touch, because a superlative census returns ~120 sites and most rank
prevalence, usefulness or expense. **So they cannot be swept, and they cannot be left inconsistent
either.**

**The decision to make, and it is one decision rather than forty edits:**
1. **Does the *"coaching emphasis, not a counted ranking"* label apply to PREVALENCE claims too**, or
   only to danger claims? The corpus currently behaves as though both, at some sites and not others.
2. **If it applies**, the ~40 unlabelled prevalence superlatives need it — as a single coordinated
   pass, not piecemeal.
3. **If it does not**, the labelled prevalence sites are over-hedged and the guide should say so.

⚠️ **Settle the principle in `content_style_guide.md` FIRST. Editing the instances before the rule
exists is how this class got inconsistent in the first place.**

### ⚠️ NEVER RUN — the MIRROR of the danger-ranking class

**Every pass this round asked: is this ranking supported?** ⚠️ **Nobody has asked the opposite
question, and an agent named it as the gap none of its own work touched:**

> *"Nothing here ran the mirror image: **a hazard that SHOULD be ranked and is not** — presented as
> one option among equals."*

**That is the more dangerous direction.** An unsourced superlative makes a reader over-cautious about
one thing. **A hazard levelled into a list of equivalents makes them under-cautious about the one
that actually hurts them** — and it will read as balanced, careful prose, which is exactly what this
round has spent itself producing.

⚠️ **And note the shape it would take here:** this round re-scoped roughly two dozen rankings to
their mechanisms. **Every one of those edits moved in the direction of levelling.** Each was
individually justified — the ranking genuinely was unsourced — but nobody has read the results back
and asked whether any option now sits beside a materially worse one with nothing distinguishing them.

**Method, when it is run:** take the sections that present two or more choices and ask, of each, *what
does the rulebook or the safety source say about the consequences of getting this one wrong?* Where
the books distinguish sharply and the corpus does not, that is the finding. ⚠️ **The answer must come
from a source, not from a reviewer's intuition about which looks scarier** — that is how the original
rankings got written.

### ⚠️ TIER 1 — the UNSOURCED DANGER RANKING is a corpus-wide class, and it is being worked

**Nothing on disk ranks passes, places, moments, zones, plays or injuries by danger.** Attacked by
concept **three times independently** this round — flattened, de-hyphenated searches over `huh.txt`,
`ibc.txt`, `usah.txt`, `carha.txt`, `ukcg.txt` and `usah_casebook.txt` on
`most dangerous | highest.risk | most serious | leading cause | most common | majority of injur`.
⚠️ **The one frequency claim *Heads Up Hockey* makes runs the OTHER way** — *"concussions are not the
most common form of injury"* — **and the only supportable superlative is Tator's posture-and-
collision-geometry finding**, which ranks a **posture**, not a situation.

**Roughly a dozen sites repaired so far**, across `puck_support_and_spacing`, `on_ice_communication`,
`passing_and_receiving`, `goaltender`, `center`, `winger`, `rink_map_and_glossary`,
`scanning_and_anticipation`, `playing_without_the_puck`, `switching_positions` and two **voiced
diagram captions**. **The corpus's own idiom for the honest form already exists** and is the model:
*"coaching emphasis, not a counted ranking"*.

⚠️ **REPAIR BY RE-SCOPING TO THE MECHANISM — say WHY, not WHERE IT RANKS.** ⚠️ **Never delete**
(non-negotiable 3). ⚠️ **Never substitute a quieter superlative** — *"one of the most dangerous"* is
the same defect one notch down, and an agent found exactly that shape **three lines from one it was
sent to fix**. ⚠️ **Never weaken the instruction attached to it. Precision, not weakening.**

⚠️ **AND ROUGHLY A DOZEN OF THIS SHAPE WERE EXAMINED AND CLEARED. A sweep would destroy them.** The
distinctions that cleared them, which any future pass must apply:
- **A relative claim inside one defined situation**, usually hedged with *"usually"* or *"often"* —
  *"the most dangerous attacker is usually not the puck carrier"* compares two attackers on one rush.
- **A claim whose owner document states its basis** — `shooting.md` owns shot-location value.
- **A claim the corpus MEASURES** — `offensive_zone_play.md:~949` is measured off the NHL
  play-by-play feed and scoped to a possession.
- **A claim already carrying the disclosure** *"how it ranks… is not something anyone has counted."*

⚠️ **THE UNCLOSED HALF, and it is the larger one.** Every pass so far has been **phrase-anchored**.
An agent named the gap exactly: *"a danger ranking phrased **without the word 'dangerous'** — 'nothing
costs you more', 'there is no worse place to lose it', 'the one turnover that beats you' — matched
nothing I ran and **would still be standing**."* **Dispatched for four directories; the other three
are unmeasured.**

⚠️ **And a second unclosed half: the captions.** The phrase-anchored pass found two voiced captions
**only because their wording was copied verbatim from prose.** *"A caption that states the same
ranking in its own words is invisible to this method"* — and there are **112 captions**, none of them
reachable by any grep over `content/`.

### ⚠️ TRAP — `site/src/data/diagrams.json` is a GENERATED artefact that is tracked in git

**Editing it does nothing. The next build silently reverts you.**

`site/scripts/build-diagrams.mjs` **writes** the manifest — `writeFileSync(MANIFEST, ...)` — from
`site/src/diagrams/index.mjs`. **The true source of every caption is `site/src/diagrams/*.mjs`.**

⚠️ **This cost real work this round and it cost it invisibly.** A caption was corrected in the
manifest, the JSON was re-validated, `git diff --stat` confirmed *"1 file changed, 2 insertions, 2
deletions"* — and a later `git diff` on the same file came back **empty**, because a diagram rebuild
had run in between. **Nothing errored. Nothing warned. The edit was simply gone**, and it was found
only because the caption was grepped for a second time.

⚠️ **The manifest being TRACKED is what makes this dangerous.** A generated file that is gitignored
announces itself; one that is committed looks exactly like a source file, and `git diff` will happily
show your edit right up until the moment a build erases it.

**So: to change a caption, edit `site/src/diagrams/<document>.mjs`, then run**
```bash
cd site && $HOME/.nvm/versions/node/v22.23.1/bin/node scripts/build-diagrams.mjs
```
**and confirm the change survived in `diagrams.json` afterwards.**

⚠️ **Captions matter more than their obscurity suggests: they are VOICED.** One carried a superlative
that the corpus had just retracted in prose, so a listener heard the ranking and its retraction in
adjacent sentences. **No content audit can reach them** — they come from the diagram sources, not
from `content/`, so every `grep` over `content/` sees a corpus that is clean.

### ⚠️ ENVIRONMENT — how to actually run `node` here

**Multiple agents have reported *"node is unavailable in this shell"* and skipped
`check-arrivals.mjs` because of it.** It is available; a zsh **nvm lazy-loading stub**
shadows the name, so `node`, `PATH=` prefixing and sourcing `nvm.sh` all fail with
`node:1: command not found: _load_nvm`.

**Call the binary by absolute path:**

```bash
NODE=$HOME/.nvm/versions/node/v22.23.1/bin/node
cd site && $NODE scripts/check-arrivals.mjs
```

⚠️ **Two things that have caught people out here.** The Bash tool's **working directory
persists between calls**, so a `cd site` stays in effect for every later command until
you `cd` back — a plan-file path silently stopped resolving this round because of it.
And `$HOME/.nvm/versions/node/` holds **three** versions (v20.13.0, v22.21.1, v22.23.1);
`ls` it rather than assuming the one above is still there.

**Run at the time of writing: 112 diagrams, 171 routes, 0 hard, 7 advisory** — the
unchanged baseline.

### ⚠️ The seven `check-arrivals` advisories are adjudicated — and there is nowhere to record it

**All seven ruled on for the first time. None teaches anything wrong.** Four are artefacts of an
**unbounded terminal-tangent ray** (one aims 28.2 ft beyond where the drawn ray stops); three are
artefacts of a **goaltender modelled with no glyph radius, sitting behind a goal frame the check does
not model.**

⚠️ **`check-arrivals.mjs`'s own documented gap #4 is now the live problem:** *"Advisories have no
baseline… a NEW advisory looks exactly like an accepted one."* **Seven are now known-good and the tool
cannot hold that knowledge.** **Give it a baseline file**, the way `check_external_links.py` has one —
then a new advisory is visible as new.

### ⚠️ TIER 1 — 37 inverting instructions remain, in 17 documents

**The em-dash inversion class.** `md_to_speech.py` renders `Never:` as **"Never —"**; a **second** em
dash in the same value is prosodically identical, so a listener carries the negation across it and
**hears the instruction after the dash negated**. Twenty-two were repaired across **seven** documents (`body_contact_and_battles.md` 6, `zone_entries.md` 5, `offensive_zone_play.md` 4, `breakouts.md` 3, `skating.md` 2, `puck_handling.md` 1, `on_ice_communication.md` 1) this
round. ⚠️ **37 remain across 17 documents**, measured from the rendered SSML.

**Take these three first — they invert the legal alternative to a hit from behind**, which the style
guide already names as the case that matters:

| Document | Rendered |
|---|---|
| `defending_the_rush.md` | *Never — Finish into the back of a carrier heading for their own end boards — **take the puck, take the ice, or angle them off it***|
| `forechecking_systems.md` | the same sentence **twice**, one adding *"the onus is on you as the arriving player"* |
| `goaltender.md` | *Never — Block a shot from a screening position — **get to the shooter and block from close, or get out of the lane entirely*** |

**Penalty-critical remainder:** the D-to-D-through-the-slot family (`on_ice_communication`,
`risk_management`, `defender` ×2, `switching_positions` — all invert *"go behind the net"*); the crease
family (`center`, `winger` ×2 — all invert *"get out"*); `faceoffs.md` (closing a hand on the puck is a
minor); `special_teams.md`. Plus `time_and_space`, `defensive_zone_coverage` ×2, `game_management` ×3,
`neutral_zone_systems`, `passing_and_receiving` ×2, `shooting`.

⚠️ **Method — the label is not the boundary.** Two of the twenty-two sat under `Technique:` with the
negation **inside the value**, and two more were in **Common Mistakes and Key Takeaways**, which no
facts grep reaches. **Render the document and read the emitted SSML.** A Markdown grep will miss them.

⚠️ **A weaker sibling class, ~12 instances, deliberately NOT swept:** *positive imperative, contrastive
negation, dash, second imperative* — e.g. *"Action. Skate at the ice they want, not at the player —
take away their good ice."* **Lower risk**, because the main verb is already positive so the listener
is not primed to carry a negation. **A corpus decision, not a five-file sweep.**

⚠️ **And one that needs a rule, not a repair:** a `Read:` value whose *label* is a negative pronoun —
*"Read: Nobody — dump to a place someone can get to"*. **Different mechanism**; inventing a third
convention for it without a decision would be worse than leaving it.

### ⚠️ 50 unchecked PMIDs — and the corpus already shipped one retracted paper

`conditioning_and_recovery.md` cites **55 distinct PMIDs** (`grep -o "PMID [0-9]*" … | sort -u | wc -l`
→ 55), plus one preprint. **Five have been checked for retraction status. Fifty have not.**

⚠️ **This is not hypothetical. The corpus already carries a paper that was correctly quoted,
correctly cited, and RETRACTED** — the Copenhagen adduction meta-analysis, whose retraction notice a
verifier confirmed to the issue and article number. **It was caught by this project's own diligence,
not by any citation check**, and it is now labelled in five places rather than deleted, which is the
right treatment.

**Method — cheap, and it needs no per-paper reading.** Europe PMC's `resultType=core` returns
`pubTypeList` and `commentCorrectionList` in the same call, so a single batched query over the 55 IDs
answers it. Five were done opportunistically that way (**41441433, 41945463, 39654844, 41574355** all
return `commentCorrection: None` and no retraction pubType as of 29 August 2026; **40827942** is the
known retraction).

⚠️ **The coordinator sized this row at "roughly twenty" and an agent refuted it from the file** —
*"55 distinct PMIDs, not roughly twenty more… I am sizing it correctly so it is not under-scoped when
someone does it."* **Sixth time this round a coordinator count was wrong, and the first time being
wrong would have caused work to be planned too small rather than a defect to be written.**

**Also unchecked by the same method:** whether any of the 55 has been **superseded** rather than
retracted, which no `commentCorrectionList` flag catches.

### ✅ CLOSED — constructs reaching the audio unhandled: now ZERO

⚠️ **Do not quote the old heading's figure.** It said 13; the number moved several times as
rounds both fixed and added constructs, and **it is now 0** — run
`python3 scripts/md_to_speech.py --report` and read `UNRECOGNISED CONSTRUCTS`, which prints
`(none)`. **The tool owns the count. This file must not.**

Closed by handling the last four, each verified in context before it was touched:

- **The IIHF's `➔` cross-reference marker**, which the corpus keeps inside verbatim quotations
  — *"in violation of ➔ Rule 63.8 – Delaying the Game or ➔ Rule 81 – Icing"*. **Dropped, not
  voiced:** it is punctuation, not a word; *"arrow"* is noise, and *"see"* would put a word into
  a quotation the book does not contain.
- **The USA Hockey Casebook's own sub-clause form**, `630(d.3)`, which voiced as *"six hundred
  and thirty(d.3)"* — the parenthetical reaching a listener as raw characters. Now *"clause d
  point three"*, so it can be written down and looked up. ⚠️ **The corpus quotes that form
  because the Casebook cites a clause the printed rule does not contain** — the book's error,
  recorded rather than repaired, and it must stay quotable.

**Both are self-tested**, along with the ordinary lettered clause beside them, so a future
widening of that pattern cannot silently break `624(b)`.


`md_to_speech.py --dry-run --report` → **13 unrecognised constructs**, meaning they reach the SSML
with no spoken form:

- **`➔`**, the IIHF's cross-reference arrow — ×4, inside **verbatim rule quotations this round added**
  (*"in violation of ➔ Rule 63.8 – Delaying the Game or ➔ Rule 81 – Icing"*). ⚠️ **Quoting the books
  more faithfully increased this count.** The right rendering is probably *"see Rule 63.8"*, or
  dropping the glyph — **but it sits inside a quotation, so changing it changes a quotation.** That is
  a decision, not a sweep.
- **`(d.3)`** ×2 — a rule sub-clause form the citation rules do not cover.
- **`●` `○` `▲`** ×3 — drop-sheet glyphs in a passage that is *about* what the glyphs mean, so a
  listener gets the least of it exactly where it matters most.

**Precedent for how to fix it:** the `parenthesised-minutes` rule added this round shows the shape —
a narrow rule, ordered before the general one, discriminating on context, **with self-test cases**.
Re-run `--self-test` for the current count — a figure written here goes stale the moment the next rule lands, and four of them did in this round alone.

### ⚠️ SWEEP — 21 sites name a superseded In-House edition, and the owner already has the fix

**Verified centrally.** `grep -rn "2025-26 In-House Rules" content/` → **21 sites across 17 files**.
Each says the 2025-26 book is silent on the goalkeeper restricted area. ✅ **That is TRUE** — but
**`sources/eiha_inhouse_2026-27.txt` is on disk** (*"IN-HOUSE RULES / 2026-27 SEASON / Revision 1
published 25th July 2026"*), it is the current edition, and **it is silent too.**

**Both editions checked by concept, not phrase** — `trapezoid`, `restricted area`, `27.7`,
`goalkeeper designated` all return **zero in both files.**

⚠️ **`uk_rules.md:169` — the owner — already carries the correct fuller form:** *"**Neither the
2025-26 nor the 2026-27 In-House Rules mention the restricted area at all** — both editions were
searched for it."* **So this is propagating a fix that already exists**, not writing a new claim.

**Verdict on the 21: `confirmed-but-incomplete`** — true of the edition each names, and naming a
superseded one while the current one sits on disk saying the same thing.

⚠️ **Do it as ONE sweep or not at all.** The finding agent declined deliberately: *"converging one
file out of seventeen would manufacture the cross-file divergence `check_rule_scope.py` exists to
catch."* **It is right.** And a 17-file sweep must not race document-level agents — `git status` and
`git log -1` before and immediately before staging, per commit `239f70d`.

### ✅ AUDITED — the reader-only layers, and the headline is that the corpus survived it

**Audited: all 37 Sources trailers, both `## Notes on verification` sections, all 19 pointer tables,
all 3 mid-document dropped paragraphs, and the full render.** ⚠️ **NO CRITICAL.** Every candidate
chased — including the whole of `rules_primer.md` §10, the corpus's largest never-voiced block —
had its safety-bearing content duplicated in voiced prose. **The corpus's disclosure discipline is
better than the layer analysis predicted, and that is a result worth recording rather than a
non-event.**

**What it did find is now a separate open row above** — the British trapezoid position that exists
only in a pointer table, the HECC Type C age limit reachable by no listener, a whole `##` section
rendering as a 25-word apology, and seven documents pointing at layers nobody hears.
⚠️ **`scripts/check_pointers.py` now finds that last class mechanically** and is registered in
`CLAUDE.md` as a worklist.

⚠️ **The audit's own declared blind spot is the more important half and is NOT closed:** *"the
inverse defect — a scope that IS voiced but arrives too late, too quietly, or after the claim it
qualifies. I treated 'present in a voiced layer' as sufficient. It is not."* Its example is its own
upheld finding: a document enumerates fifteen undocumented calls **at its very end**, hundreds of
spoken seconds after each was taught as usable. **The whole "upheld" list in that report should be
re-read for ORDERING.**

⚠️ **Coverage was partial and said so:** 8 of 37 trailers read word-for-word and 29 through a keyword
filter that **excludes any sentence containing "flagged"/"labelled"/"in the text"** — so a
trailer-only scope *asserting* it was flagged when it was not passes through invisibly **in both
directions**. 8 of 19 pointer tables traced. **1 of 27 prose tables read.**


**Census done: 46 tables, 27 narrated, 19 not.** Pointer coverage verified exact — 19
pointers for 19 tables, 1:1, so no listener is silently deprived. **The per-table omission
audit is what remains**: does each table's load-bearing content survive in a layer a
listener reaches? Highest consequence is `body_contact_and_battles.md:1131`, whose cells
carry the hooking stick-to-stick scope, interference as a floor not a ceiling in three
books, the 2025-26 high-sticking rewrite, and tripping needing no fall — none of it heard.
Full table of the 19 in the round record.

#### Original row

`md_to_speech.py` narrates a table only if **≤3 columns, ≤14 rows, and every cell ≤200 characters**
(`TABLE_MAX_*`). Anything wider becomes a spoken pointer: *"…it does not read well aloud, so it is not
narrated. The full table is on the website."*

**Measured on `body_contact_and_battles.md`: 1 table narrated, 1 pointered — longest cell 949
characters at HEAD.** These tables carry **four-book penalty comparisons**, which is exactly the
material a listener most needs.

⚠️ **So "put it in the body" is not a complete propagation answer.** A claim whose only non-facts home
is a wide table reaches readers and **not listeners** — and **no check can see this**, because the
layer tests compare facts against body and the table *is* the body. It bit a repair in this round:
Hockey Canada's *"on the pretext of playing the puck"* foreclosure would not fit the 300-char facts
cap and went to the table alone.

**Not yet censused corpus-wide.** The work: run `md_to_speech.py --report` over all 26 in-scope
documents, count `table.pointer` against `table.prose`, and for each pointered table ask **whether any
claim in it exists nowhere a listener reaches.** ⚠️ **Do not fix by shrinking tables** — they are good
for readers. The answer is likelier a facts line or a prose sentence carrying the load-bearing half.

### ✅ RUN — the OMISSION pass over the facts layer, twice, and the second pass found the criticals

**Two passes ran.** The first indexed all **805 blocks / 5,041 facts**, read **15 in full**, and
built detectors over all of them; the second took its handover — **the blocks at `HARD_MAX = 11`,
where the style guide's own diagnosis is that something has been evicted** — and read **36 of 56**.

⚠️ **The population moved while they worked: 55 → 56 blocks, 5,041 → 5,049 facts.** One block
dropped out and back in at a new line number. **Every line number from those passes is a snapshot.**

**Criticals found, none of which any checker can see:**
- **In-game penalty accumulation reached NO facts block anywhere** — tested by regex over all 5,049
  fact lines. Every fact in this corpus prices a foul individually, so a listener takes a third
  cheap stick minor believing it costs two minutes. **Under Hockey Canada it ends their game.** Now
  extracted, with **Rule 4.8's Note 1** — *"a Game Ejection is not equal to a Game Misconduct… does
  not trigger any automatic suspension"* — so the reader does not over-fear instead.
- **USA Hockey's push-in relief reaches your POSITION, not what you do next**, stated at four sites
  with the limit at none. `617(c)` and `625(a)(8)` returned **zero** across all 5,049 facts.
- **A glove or stick in front of the goalie's face is a Rule 75 unsportsmanlike minor**, in no block
  at all — so every net-front block taught *"screening from outside the crease is legal"* and none
  named the thing that is not.

⚠️ **17 blocks at the cap have still been read by NOBODY**, and two of them —
`center.md:506`, `defender.md:105` — sit on penalty-kill and breakout-under-pressure, the ground
where these findings clustered. **That is the next scope.**

⚠️ **A detector produced a false negative that only reading caught**: a block was cleared as missing
the hooking-escalation tier because the tier lives in the **second half of a 231-character fact whose
first half is about slashing**, and the pass's own 200-character output truncation cut it off.
**Every "absent corpus-wide" verdict is bounded by the token sets its author chose.**


**Every propagation check this round was a PRESENCE test** — does the counterweight/qualification
appear in the same layer as the claim. **None can see a fact that never mentions the other book at
all**, and that is the shape round 20's seven omission criticals took.

**The pass:** for each ` ```facts ` `Rule:` line naming a book or books, ask **what the other books
say**, and whether the silence changes what a reader should do. Run it as an **explicit enumerated
list per document**, not as a grep — the defect has no string to match on.

⚠️ **It has not been run on any document this round.** ⚠️ **No block or fact count is given here on
purpose — run `python3 scripts/check_facts.py` for the live figure.** This row previously carried
**794 blocks / 4,903 facts** while the tree held **801 / 5,006**, and the round record carried a
third figure again for the same measurement. **A count written into a plan row is a second copy of
something a checker already prints, and the copy is what rots** — the discipline this file states at
its own top, violated a thousand lines below it.

**Priority order suggested by what this round found:** `body_contact_and_battles.md` and
`rules_primer.md` first (they carry the most cross-book claims and the most negative-existence
claims), then the four-book penalty sections of `defensive_zone_coverage.md`, then the documents whose
`Rule:` lines this round rewrote under character pressure — **because a line trimmed to fit a cap is
exactly where a book gets dropped.** One such trade is on record and was disclosed properly; **it is
the undisclosed ones that this pass would find.**

### ⚠️ TIER 1 — re-attack every cross-book negative BY CONCEPT, not by phrase

**The largest open item this round produced, and it was produced by the round proving itself wrong.**

An agent tested whether a crease-vacating stoppage existed outside the IIHF. It searched all thirteen
rulebook extractions, **de-hyphenated and whitespace-flattened first**, for the IIHF's phrasing, and
reported **NHL 0/0, Hockey Canada 0/0, USA Hockey 0/0, Casebook 0/0.** ⚠️ **USA Hockey Rule 625(b) has
the stronger version and it is mandatory** — *"A face-off **shall** be conducted…"* against the IIHF's
*"possibility"* — confirmed in Casebook Situations 7, 10 and 11 and in Appendix II's face-off table.
**The census could not see it because USA Hockey words the same remedy entirely differently.**

⚠️ **The method was sound, the flattening was right, the counts were real, and the conclusion was
false.** A negative built from good phrase hygiene **looks like a verified negative**, which is what
makes this the most dangerous class the corpus has.

**CENSUS RUN: 427 cross-book negative-existence claims across 36 documents.**

| | |
|---|---|
| `rules_primer.md` | **90** |
| `body_contact_and_battles.md` | **66** |
| `risk_management.md` | 19 |
| `breakouts.md` · `on_ice_communication.md` · `goaltender.md` · `faceoffs.md` | 15 · 14 · 14 · 14 |
| `playing_without_the_puck.md` · `winger.md` · `defending_the_rush.md` | 13 each |

*(Pattern: `no other book`, `neither…nor`, `writes no`, `carries no`, `contains no`, `only the X's
book`, `the only one of the four`, `none of the four`. It will over-count — many are correctly scoped
statements of a real divergence — so **this is a worklist, not a defect count.**)*

**Method for each, in order:** phrase search first and **never last**; then search the **concept** —
what the rule *does* (*face-off*, *stoppage*, *goal disallowed*) and what triggers it (*crease*,
*stands*, *leave*) — then the book's **summary tables and index**, which routinely carry a provision
the prose words differently; then the rule's **siblings**. ⚠️ **And validate the search itself by
running it against the book known to have the rule** and confirming it hits — that is what proved the
NHL and Hockey Canada negatives sound here.

⚠️ **Do NOT sweep, and do not treat a hit as a defect.** Most of these 427 will be correct. This round
has twice recorded that ranking such a list and offering to fix it is how round 44 manufactured a
divergence that did not exist.

### ✅ CLOSED — USA Hockey 610(g), now cited at six sites in two documents

**Done and propagated to five layers of `rules_primer.md`** — body, the §10 comparison table's
USA Hockey cell, a new Common Mistakes bullet, Key Takeaway 3, and the Sources trailer — plus
`faceoffs.md`. Verified: `grep -rc "610(g)" content/` returns `rules_primer.md:5`,
`faceoffs.md:1`.

⚠️ **What was added is NOT what the row asked for, and the difference matters.** The row framed
610(g) as a missing citation. Reading the book found **two** warning-first provisions at
**different penalty classes** — **610(g)**, a **bench minor** for additional substitutions or
delay in any manner, and **204(a)¶2**, a **minor** for undue delay in changing players — plus
**204(a)¶3**, which closes the change window at every stoppage and is the provision the other two
enforce. ⚠️ **The corpus's existing negative was NOT overwritten**: 610(g) penalises *delay*, not
substitution after an icing, so *"USA Hockey imposes no substitution bar after an icing"* stands.
What was missing is that a bad change is **not free**.

⚠️ **Three self-caught defects in the repair are worth carrying forward**: *"an individual minor"*
was written where the book says only *"a minor penalty"* and names **the team** as the offender —
replaced with an explicit disclosure that 204(a) does not say who serves it; Casebook Situation 15
was generalised to *"a late change"* when its facts are **a false face-off**, and both sites were
scoped; and the new Common Mistakes bullet voiced as *"…two hundred and four, clause a's own
second paragraph"* — **a bare number with no "Rule"** — found only by running the renderer.

⚠️ **Still open, and it is the interesting half:** *"USA Hockey imposes neither"* is stated
true-but-bare at **seven further sites in six documents**, three of them ` ```facts ` `Rule:`
lines voiced alone. None is false; each is the true half. The most exposed is
`scanning_and_anticipation.md:284` — *"USA Hockey blocks neither (Rules 624, 636(f)), **so there
the tired line gets off**"*.


**Found by chasing an agent's declared handover** (*"search the Situation Handbook and Casebook for a
situation settling the icing/82.2(V) linkage"*). That search returned **no such situation** — the
Handbook's only four `Rule 82.2` citations are off-side and slow-to-the-faceoff, in both editions —
**but the USA Hockey Casebook's signal index turned up something else entirely.**

**USA Hockey 610(g)**, read whole (`usah.txt`, Rule 610 runs (a)–(g)):
> *"A bench minor penalty shall be assessed to any team, **after warning by the Referee**, that fails
> to place the correct number of players on the ice and commences play **or that causes any delay by
> making additional substitutions** or attempts to delay the game in any manner."*

⚠️ **So USA Hockey is a THIRD book with an improper-substitution bench minor**, after the NHL/IIHF
82.2(V) and Hockey Canada 10.1(a)(vii). **It is warning-first, like the IIHF's.**

✅ **This does NOT contradict the corpus, and the census proves it.** Every claim is scoped to the
**icing** bar specifically — *"USA Hockey imposes no substitution bar **after an icing**"*, *"Rule 624
restricts no substitution clause"*, *"Rule 204(a) no icing carve-out"*. **610(g) is about delay by
additional substitution at a stoppage, not about icing.** So this is a **gap, not an error** — which
is why it is a row rather than a repair.

**Worth adding because** the corpus now tells readers in ten-plus documents what a refused change
costs under the IIHF and the NHL, and says USA Hockey blocks nothing — true of the icing bar, and a
USA Hockey reader can still take a bench minor under 610(g) for the delay itself. `grep -rn "610(g)"
content/` returns **zero**.

⚠️ **And the linkage question the handover was actually about is now answered, negatively.** **No
situation in either Handbook edition, and nothing in the USA Hockey Casebook, connects an
icing-barred substitution to 82.2(V).** The corpus's citation of 82.2(V) for that case is an
**inference** — 82.2(V) names three acts and **does not mention icing** — and it now stands flatly in
ten-plus documents. **The agent that found this deliberately disclosed it in one file's Sources
trailer and refused to hedge the other nine**, on the ground that unilaterally qualifying one file
against nine creates the inconsistency rather than fixing it. **That call is the coordinator's and it
has not been made.** The playable instruction is safe on every reading — every reading says do not
try the change.

### ⚠️ The trapezoid ADOPTION DATES — the same defect one layer down, and corpus-wide

**Found while labelling the KHL claim, by the agent doing that work.** Documents carry *"the NHL
(since **2005-06**)"* and *"IIHF play since the unified **2021-22** rulebook"*.

- `grep -n "2005" sources/nhl_rules.txt` → **0 hits.**
- `grep -n "2021" sources/iihf_rules_v1.1.txt` → **0 hits.**

⚠️ **Do NOT generalise this into "rulebooks carry no change history."** That is **false**, and it was written into a brief this round as a fact about the whole book — `nhl_rules_layout.txt:1178` reads *"9.7 Visors - **Beginning with the 2013-2014 season**"* and the helmet rule is dated too. **The NHL book carries dated rule provenance; it just carries none for the trapezoid.** The defensible form names the rules actually searched — *"Rules 1.8, 27.8 and 63.2(viii) carry no date at all"*. These are history
claims with no primary support on disk, sitting in sentences the round has just marked as read
directly in the rulebooks.** They are almost certainly true and were **not** touched, per
non-negotiable 3. They need either a secondary citation or the same style of label as the KHL claim.

⚠️ **Structurally identical to the KHL defect, one layer down, and NOT confined to the eight files
that were labelled** — it is corpus-wide and uncensused. **Census first, then decide between sourcing
and labelling; do not sweep.**

### ⚠️ The KHL trapezoid — a rule claim with no primary source, bare in 16 documents

**Census run centrally: 33 KHL trapezoid mentions. 28 bare across 16 documents; 5 qualified, all in
`defender.md`.** Several bare sites are ` ```facts ` **`Rule:` lines**, voiced standalone.

**No KHL rulebook exists on disk** (`ls sources/`; `find -iname "*khl*"` returns nothing) and **none
was obtainable** — `https://www.khl.ru/documents/` returns **HTTP 403 after 30 redirects** with a
browser user-agent; `en.khl.ru` and the site root give unresolving 307s.

⚠️ **The fix is to LABEL, not to source and not to delete** (non-negotiable 3). `defender.md`'s form
is the corpus's own and already reviewed: *"— on a claim this corpus could not check against a KHL
rulebook — the KHL."* **Do not over-hedge the NHL and IIHF halves**, which are sourced at NHL 1.8/27.8
and IIHF 27.7.

**Dispatched:** 8 documents / 13 sites (`goaltender`, `puck_support_and_spacing`,
`neutral_zone_systems`, `zone_entries`, `playing_without_the_puck`, `time_and_space`,
`how_to_watch_hockey`, `offensive_zone_play`).
**Still open — 8 documents / 15 sites held by other agents at the time:** `breakouts.md` ×3,
`special_teams.md` ×3, `forechecking_systems.md` ×2, `faceoffs.md` ×2, `rink_map_and_glossary.md` ×2,
`on_ice_communication.md` ×1, `rules_primer.md` ×1, `defensive_zone_coverage.md` ×1.

⚠️ **Open question nobody has answered: is the claim true?** Nothing in this repository supports it.
A citable secondary source, or a KHL rulebook reached from a network this one cannot, would close it
either way. **Until then it stays labelled.**

### IIHF 81.4 vs 82.1 — the heading was wrong, the propagation is closed, and one list was missed

⚠️ **This section's own heading was an overstatement and has been corrected. The book does NOT
contradict itself**, and no document should ever be edited to say it does — that would make the
corpus less accurate than it is. What is true is narrower: **the book states the post-icing
substitution ban twice with different lists and does not rank them.** 81.4 (icing-specific) has four
exceptions including *"a Player with a broken skate"*; 82.1 (triggered by *"Rule 63.8 – Delaying the
Game **or** Rule 81 – Icing"*) states the same ban with the NHL's three. Both verified in
`iihf_rules_v1.1.txt` and `iihf_rules_2026-27.txt`.

**A prohibition followed by a non-exhaustive permission cannot contradict a wider permission in the
same book.** 82.1's silence is an omission, not a prohibition. All twelve documents already say this.

✅ **THE PROPAGATION HALF IS CLOSED.** ⚠️ **The figure this section used to carry — *"Eleven
documents teach the fourth exception. Five carry the caveat, six do not"* — was stale, and stayed
here after the work closed.** Re-measured by census, unit by unit rather than document by document:
**twelve** documents teach it, across body, ` ```facts `, comparison-table rows, glossary entries,
Common Mistakes and Key Takeaways, and **every one of them carries the caveat. No site is wrong.**
The inverse defect was swept too — every `81.4` line grepped for `identical | word for word | same
words | matches | materially identical` — and **zero unqualified sameness claims remain**, which also
closes *"IIHF 81.4 does not match the NHL, and five sites say it does"* further down this file.

⚠️ **Do not re-dispatch either half.** The lesson is the one this file keeps re-learning: **a
measurement left in the plan after its work closes reads as live, and the next round spends an agent
refuting it.** It cost one this round.

**SETTLED, and the answer was neither of the two framings on offer.** Four agents attacked it.

- **The textual disagreement is real** — confirmed independently, in v1.0, v1.1 and 2026/27. **Not** a
  manufactured divergence.
- **`faceoffs.md` was overstating the RESOLUTION**, not the conflict: *"81.4 is the rule specific to
  icing and is the one to work from"* was written as a ruling and is a reading. Now carries its grounds.
- **No precedence provision exists.** Both editions searched for `takes precedence`, `shall prevail`,
  `in case of any contradiction`, `more specific rule`, `conflict between`, plus the whole front
  matter: **zero.** The only ranking sentence in the IIHF corpus ranks *documents*, not rules.
- **`broken skate` returns zero in all three Situation Handbook editions**, so there is no
  interpretation to find — not one that was missed.

⚠️ **The best reading does not need *lex specialis* at all.** **Neither 81.4 nor 82.1 contains
*"only"* or *"solely"*** in either edition; each is a ban followed by *"However, a team shall be
permitted to…"* — **a permission grafted on, not a closed list.** Combined with **three joint
citations** in the Handbook (Situations **81.6, 81.8, 82.1**, both editions, all citing *"Rule 81.4
and Rule 82.1"* together), 82.1's silence reads as an **omission, not a prohibition** — so the
exception stands **without either rule displacing the other**.

**Supporting structure, all newly measured:** NHL 81.4 and NHL 82.1 give each other's three, and a
full-text diff of NHL 81.4 against IIHF 81.4 returns **exactly one opcode** (`insert: a Player with a
broken skate,`) — the IIHF inserted the clause into 81.4 **only**; **IIHF 63.8**, the other rule 82.1
names, gives **exactly** 82.1's three in its FIRST paragraph, so 82.1's is the general list; and the
2026/27 book's new
**Appendix VII 84.7** reproduces all four **including the broken skate**.

⚠️ **The words *"so the clause is live"* stood here and were WRONG. Appendix VII is expressly not in
force.** Its own preamble, `iihf_rules_2026-27.txt:11099-11103`: *"This annex describes concepts for
potential future rule changes that the IIHF deems relevant for piloting and evaluation… Before they
can be considered implementation in the IIHF Unified Rulebook, they need to be tested more widely."*
`faceoffs.md:921` states this correctly and flags that the appendix **cannot** settle 81.4 against
82.1 — **that handling is right and must not be strengthened into a verdict.** The appendix is
evidence that the drafters kept the clause in view; it is not evidence that it governs.

⚠️ **Both limits are recorded in the corpus, not just here.** Three joint citations are *"equally
consistent with the Handbook's authors simply not having noticed the lists diverge — a citation habit
is not a considered ruling"*; and the no-closed-list argument *"rests on the absence of the word
'only'; a drafting convention that treats such lists as exhaustive without saying so would defeat
it, and no grep can detect a convention."*

⚠️ **`forechecking_systems.md` and `on_ice_communication.md` must NOT be "corrected" to assert a
resolution.** Their *"neither book says which governs"* is **literally true** and every search
upholds it. **What they may gain is the evidence, not a verdict** — non-negotiable 4.

⚠️ **Still unreached, and it is where a British answer would live:** the EIHL Casebook and any IHUK
Rule Bulletin, **neither on disk**. Also unreachable by any method here: what officials actually do.

⚠️ **New extraction trap, for the style guide.** 82.1's exception list sits **past a page-break splice
inside its own rule** — a `sed` window that stops early shows an 82.1 containing no exception list, and
the coordinator drafted a refutation of the whole finding off exactly that. **A broken rule, not a
broken word**; the style guide documents the hyphen-wrap form of this and not this one. **Print the
whole rule block, never a window.**

**20.4, 10.7 and Rule 46 were checked for corpus exposure and have none** — the corpus's
video-review material is Coach's Challenge for offside and goaltender interference, not the
linesperson-reported-infraction case. Checked, not assumed.

⚠️ **The NHL's own Situation Handbook is still not on disk**, so the NHL half of the
hand-or-stick claim rests on rulebook text alone and is unchecked against NHL interpretive
practice. **Two independent agents named fetching it as the highest-value next step.** If the
NHL reads its identical wording the way the IIHF now does, the corpus is telling a North
American reader something officials do not do.

### Then, in order

1. **Finish the in-flight wave**, then re-run the rules verification. Nothing stages until it clears.
2. **Run the quantifier sweep** — the standing pre-stage check — and verify each named cell
   individually against `sources/`:
   `git diff HEAD -- content/ | grep '^+' | grep -v '^+++' | sed 's/^+//' | grep -inE "\b(all four|every book|no book|three of the four|two of the four|all three|the other three)\b"`
   ⚠️ **This round it was run to completion for the first time — every `content/` file carrying a
   hit was assigned an owner.** It found `zone_entries.md:170` wrong: *"in all four books, though
   only three use the same words"* — **only two books share the words** (NHL and IIHF); USA Hockey
   630(d)(2) is different wording carrying the same instant. Corrected to *"only three write it as
   an instant"*, which also resolved an inconsistency with the file's own facts block and KT4.
3. **`python3 scripts/check_counts.py --update`** — after the final `content/` edit.
4. **`commit-gate` on the staged diff.**
5. **Commit. Do NOT push** — approval to commit is not approval to push, and `main`
   deploys to production.

### Already verified clean on this tree, and re-runnable cheaply

- **Self-narration in `content/`** (non-negotiable 6) — **zero** matches.
- **Forbidden attribution** anywhere in the diff — **zero**. ⚠️ A naive
  `grep -i claude` returns one hit: the literal string `CLAUDE.md` in a plan row. **That
  is the filename, not an attribution.**
- **`site/`** — 8 hub pages, 48 OG cards, RSS and the citation block all built and
  browser-verified; **0 hard / 7 advisory** on `check-arrivals`, unchanged baseline; and
  a per-page regression check confirmed **no page lost a round-52 marker**.
- ⚠️ **`site/` has NOT been re-checked since this wave's edits.** Roughly a thousand words of
  new Sources-trailer prose went in, carrying nested emphasis, quotes and ⚠️ markers in
  single ~7,800-character lines. Delimiters were verified to balance arithmetically —
  **balance is not rendering.** A `site-reviewer` pass is outstanding.

## ⚠️ Tier −1 — The IIHF published 2026/27 books, and the corpus describes 2025/26

### Six changes verified so far, and they reverse the British architecture

| | 2025/26 v1.1 | 2026/27 v1.0 |
|---|---|---|
| **76.6** encroachment by a non-taker | *"the offending team taking the 'face-off' **shall receive a warning**"* | *"the offending team's player taking the face-off **shall be ejected from the face-off circle**"* |
| **76.6** position-establishment violation | *"the Linesperson shall **assess a warning**"* | *"the Linesperson shall **order the center of the offending team replaced**"* |
| **76.7** premature movement / unfair drop | *"**A warning shall be issued to the offending team** and the 'face-off' must be conducted again"* | *"…and it must be conducted again"* — **warning deleted** |

| **76.3(VI)** skate-win | *"may assess a warning"* | *"shall have the offending center(s) **replaced immediately**"* |
| **76.4** improper position | *"may assess a warning"* | *"may **order the Player replaced** for that face-off"* |
| **76.4** post-icing | *(absent)* | ⚠️ **GAINED the NHL's carve-out** — the first violation after an icing does not remove the centre |

⚠️ **The last row falsifies two further claims**: that the IIHF has *"no post-icing carve-out"*, and
that the word *"appears nowhere in IIHF Rule 76 at all."* Both were **true of 2025/26** (zero hits
for "eject") and are **false of 2026/27** (four). **The British architecture inverts** — the free
first violation is no longer on every draw; it is rationed to post-icing draws, as in the NHL.

**The IIHF has adopted the NHL's ejection regime.** `faceoffs.md` teaches the opposite as its
British throughline — *"nobody is ejected from a draw in British hockey"* — in its **Overview**, in
**Key Takeaway 2**, and as concrete coaching advice (*"no reason to keep a simple back-up plan in
reserve for a winger in the dot"*). `center.md:424` and `special_teams.md:898` carry it in
```facts``` lines **read aloud standalone**. A bounded edition caveat was applied at those sites
in round 53; **the full migration was deliberately not attempted** — migrating 3 of 13 documents
would manufacture the corpus-wide divergence a previous round was censured for.

### What is actually open

0. ⚠️ **`uk_rules.md` first — it is a season behind on BOTH its books.** The IIHF 2025/26 v1.1 and
   the IHUK In-House Rules 2025-26, both cited by name throughout, both superseded. It is the
   corpus's dedicated British document and the one a British beginner is pointed at.
1. **Read the 2026/27 Rule Book against every IIHF claim in all 13 documents.** Not a diff — a
   read. ⚠️ **A naive normalised comparison of twenty further cited rules reported "seven of
   twelve changed" and all seven were pagination artefacts**; after proper de-hyphenation and
   header stripping, all twenty were textually identical. That is reassuring and **it is not a
   clean bill of health** — twenty rules is not a book.
2. **The 2026/27 Situation Handbook has not been compared at all.** Note the precedent: the
   2025/26 Handbook reversed Situation 63.19 between its own v1.0 and v1.1.
3. **Decide the citation policy.** The corpus was *not* fabricating — every citation names
   *"2025/26"* and `faceoffs.md:937` dates its reading. **This is an edition-currency failure, not
   an accuracy failure.** The question is whether the corpus tracks the current book, states the
   edition it was written against and lets it age, or carries both. **It has no policy, which is
   why nobody noticed a season boundary had passed.**

⚠️ **This is a class the repository had never recorded: not a link that rotted, not a source that
mutated in place, but a source superseded on a season boundary while the corpus went on citing it
correctly.** Nothing checks it. `check_links` and `check_external_links` both pass on a citation to
a superseded book, because the citation is fine — the *book* moved. **A recurring calendar check
against each governing body's publication page is the only thing that would have caught this**, and
it wants building.

---

## Tier 0 — The largest items

Detail: [`corpus_structure_measurements.md`](../reviews/corpus_structure_measurements.md).
These outrank everything below. The corpus is **37 documents and 923,956 words — 70.0 hours of
reading at 220 wpm** (Python `str.split()` over the raw markdown of every file in `content/` — `wc -w` gives 632,776 on the same files, a tokeniser difference and not missing content; derived by `scripts/check_counts.py`,
26 August 2026 **on the tree that shipped it**, not on the tree before its repairs —
the first version of this figure was HEAD's and was stale the moment it was written). ⚠️ **This read "532,518 words — 40.3 hours" until round 43**, a figure
the very file it cites supersedes two paragraphs above its own table: *"The corpus is 37
documents and 619,227 words."* Tier 0's argument is that forty hours is six books and a beginner
will bounce off it — **and the true figure is nearly forty-eight hours**, so the stale number was
understating the case for the work it introduces. Its
accuracy is not the open question: the owner has played for three and a half years and has read a
large part of it. What is open is **structure** — whether a reader can find the thing they need,
recall it, and act on it. Outside feedback is always worth having and is never finished; it is not
a blocker on any item here.

⚠️ **Half of this tier was already done, and the plan did not know.** Round 47 re-derived every
item against the corpus instead of reading the tier. **Three of six were complete** — one of them
the item this tier called *"the single largest unexploited gain in the project"* — and had been
since **round 28, seventeen rounds earlier**. Work was queued behind finished work. The evidence is
in [`round_47_tier_0_audit.md`](../reviews/round_47_tier_0_audit.md); the struck items are below so
the record of what was claimed survives.

**✅ Substance at the top — DONE.** The item read *"the corpus is currently the wrong way round.
Prototype two Overviews and look at them before committing to 36."* **All 37 documents open with an
`## Overview`**, median **415** words, shortest 313. Shipped in `c93b13f`, *"Put the summary at the
top of every document, and fix what that exposed."*

**✅ Retrieval practice — DONE, and it was the tier's headline item.** It read *"`Check yourself`
appears in **1 document of 36**… Named here as the single largest unexploited gain in the
project."* It appears in **36 of 37 documents, carrying 278 numbered questions**. Round 28 built it
out from the one-document pilot and its own record says so: *"`## Check yourself` retrieval layer
was built out from a one-document pilot to 36."* The only document without one is
`reading_ice_hockey_diagrams.md`, which arrived on 31 July, after the rollout — **that is the whole
of what is left of this item**, and it is a one-document job, not a corpus-wide gain.

**✅ Entry paths — DONE.** The item asked for *"two or three named paths — your first game; you have
been put on defence and have never played there; you want to follow a game on television — each
naming four or five documents and which sections of them."* `getting_started.md` carries **"Four
routes in, when you have an hour rather than a season"**: Route 1 *Your first game is this week*,
Route 2 *You have been put on a position you have never played*, Route 3 *You want to follow a game
on television*, Route 4 *You play in Britain*. **All three requested, plus one.**

---

**⬜ Three documents have Key Takeaways that are essays. The other 34 are fine.**

Derived 27 August, after correcting the parser fault described below **twice**: the Key Takeaways
layer was **25,188 words, 4.0% of the corpus** before this work and is **24,557 words, 3.9%**
after the first document, with its **median unmoved at 59 words per numbered takeaway** — which
is a takeaway. The median was never the problem and the rewrite did not chase it.

⚠️ **And be honest about how far the first document actually moved: 214 → 150 words per item, not
to the median.** The first draft reached **124**, and every subsequent correction *added* words —
scope restored to a four-book generalisation, an exception named, an attribution split from the
rule it had been welded to. **The compression that looked best was the one that was wrong.** Plan
the remaining two documents for roughly a 30% reduction with claims intact, not for 59. The style guide asks for *"Numbered, 5–10 items. Each one
standalone and memorable — this feeds the podcast's 'if you only remember N things' segment."*
**34 of 37 documents meet that.** Three do not:

| document | words | items | words per "takeaway" | status |
|---|---|---|---|---|
| `foundation/rules_primer` | 2,494 | 10 | **249** | ⚠️ **diagnosed — see below** |
| `technique/body_contact_and_battles` | 2,135 | 10 | **214** | ✅ rewritten to 1,504 / **150**, [round 49](../reviews/round_49_takeaways_that_were_essays.md) |
| `systems/defending_the_rush` | 1,164 | 10 | **116** | ⬜ |

The cliff is clean: 249, 214, 116, then **99** (`foundation/uk_rules`) and a smooth tail to the
median. Nothing below 116 is a defect.

⚠️ **Decide this before rewriting the next document.** Round 49's rewrite replaced content
with intra-document pointers in six takeaways. `md_to_speech.py` keeps link text and drops the
URL, so a listener hears a bare section title with no destination. The corpus already used the
device — but in all three precedents (`skating.md`, `puck_handling.md`, `mental_game.md`) the
pointer is **supplementary**: the item teaches the thing completely and *then* says where more
is. Round 49 used it **substitutively** in three items, and [MA1](../reviews/round_49_takeaways_that_were_essays.md)
is what happens when a substitutive pointer is aimed at the wrong heading — the content is
simply gone, and `check_links.py` passes because the anchor resolves. **Prefer supplementary
pointers. Where an item must shed content, check the target section actually contains it.**

⚠️ **A review record drifts out of true while you edit it, and no checker reads prose.** Round 49's
record contradicted the tree six times across two gate blocks — a stale fact count, an understated gate-run count, and a
`Deferred` entry describing a three-way split that was tried and abandoned. The last one was found
by the gate one audit before it would have been committed, and it would have mis-directed exactly
the author the rule below sends to look. **Before staging a review record, re-derive every count in
it from the file it certifies, and sweep the file for every superseded figure the round produced.**
And **do not put a running total in a record that a gate audits** — a gate that blocks on the count
increments the number the next audit checks, and the field can never converge.

⚠️ **Before splitting or renaming a section, grep `project/reviews/` for its heading.** Round 49
split `### The four that cause the injuries` and silently regressed round 33's **CR52** — a
critical whose fix was a blockquote naming that section as the one place a non-checking or British
reader could find the four fouls that bind every division. The obligation lived in a review record,
not in the file, so nothing in the working tree showed it and three reviewers passed the split
before a fourth caught it. **A section that was the subject of a past critical carries obligations
invisible to anyone reading only the document.**

⚠️ **A blind string replacement across two files broke a sentence in both — the rule already existed and
I broke it anyway.** Round 51 replaced `"completely passive in there"` with the rulebook's three-limb test
in `center.md` and `winger.md` without reading the surrounding clause. An agent had already rewritten the
lead-in to *"provided you stay passive"*, so both files shipped *"provided you stay does not play the
puck"* — **in Key Takeaway 8, the layer read aloud one sentence at a time.** `check_links`, `check_facts`
and `check_absolutes` all passed it; `commit-gate` caught it. **When a tree is being edited by other
agents, a string replacement is a bet that the surrounding words have not moved. They had.** Read the
clause, then edit it.

⚠️ **Reconcile `git diff --name-only` against the reviewers' reports BEFORE calling a round reviewed.**
Round 51's gate blocked on C8 because **ten staged files were named by no reviewer** — including one
carrying an altered verbatim rulebook quotation. Every reviewer had been briefed on *claims* (the crease
characterisation, the delayed-offside triggers, the quantifiers); **nobody was briefed on the file list.**
So a file that changed for a reason no brief happened to mention was reviewed by nobody, and the record
read as complete because it was complete **about its findings**. **A review record organised by finding
will always have this hole.** The check is one command and it is not optional.

⚠️ **Re-derive every measurement in a review record at gate time, not when you happen to take it.** The
same gate caught *"50.3 hours"* (50.4 **at that moment** — and the figure moved again twice more before the round closed, which is the point: a measurement in a record is true only at the instant it is taken), *"1,654 chunks / 3,595,382 billed characters"* (1,687 /
3,671,640) and *"7,069 internal links"* (7,087) — **all true when measured, all false when read, all sitting
under "Re-verified: author"**. `check_counts.py` cannot help: these are quantities it does not know.

⚠️ **Check that a deferred fix is not being SHIPPED while it is deferred.** Round 51 deferred CR7's Hockey
Canada penalty ladder in two files — and the same diff **newly added the bare minor to those two files**,
so the round was propagating the defect it had recorded as deferred. **A reviewer reading findings cannot
see this. A gate reading the diff can.**

⚠️ **Never state a line number to an agent as a fact. Give it the string.** Round 51 ran a dozen
agents concurrently over the same twenty files, and **six of the coordinator's briefs were corrected by
the agent executing them.** The worst was a pointer to `zone_entries.md:1085-1087` as a model to copy —
**that file is 1,017 lines long.** Another named `:412` for a fact that was at `:406`. Every agent found
these by **reading the file instead of trusting the brief**, which is the only reason none of them
propagated. Line numbers in a contended tree are guesses; quote the sentence you mean, say "re-derive the
line", and tell the agent to stop and report if the premise does not hold. **Seven of the twelve plan rows
worked across rounds 49-51 had a wrong premise. Assume yours does too.**

⚠️ **Sweep the diff for cross-book quantifiers before staging. Mechanically, not by reading.**
Eleven false four-book generalisations were manufactured across rounds 49–50, and **every one was
caught by a reviewer or the gate, never by the author re-reading**. Two were manufactured *inside
the repair for a previous one*, and one survived a fix applied to only one of the two documents
carrying it. Care does not catch this; a grep does:

```bash
git diff HEAD -- content/ | grep '^+' | grep -v '^+++' | sed 's/^+//' \
  | grep -inE "\b(all four|every book|every one of the four|in any book|no book|three of the four|two of the four|all three|the other three|each still)\b"
```

Then verify **each named cell individually** against `sources/`. A quantifier that is true of three
books and false of the fourth reads as authoritative and is the corpus's most-repeated defect.

⚠️ **Edit structurally, not by string replacement.** Round 49 made three separate insertions that
landed in the wrong place in a 1,200-line file — one matched the *first* of two identical strings
and put a four-book penalty ladder in the Overview, inside a quotation, breaking emphasis parity;
one put a heading a paragraph too early, so eight facts summarised a neighbouring section; one put
a paragraph before the text it referred back to. **No checker caught any of them** — `check_facts`,
`check_links`, `check_absolutes` and a clean `npm run build` all passed on the worst of the three.
Before any structural edit: print the section map. After: print it again and diff it. And assert
emphasis parity across changed lines, because markdown will render a broken span silently.

⚠️ **`rules_primer.md` is a different problem from the other two, and the item as written is
mis-specified for it. Diagnosed 27 August, read-only, before any edit.**

| measure | value |
|---|---|
| Key Takeaways | 2,494 words / 10 items / **249 per item** |
| distinct rule citations in the takeaways | **50** (65 including repeats) |
| items naming **all four** rulebooks | **7 of 10** |
| items naming two or more books | **10 of 10** |
| correlation, item length vs citation count | **r = 0.78** |
| words per citation | **38** |

**The length is the divergence.** Every item is a cross-book comparison, and item length tracks
citation count almost linearly. There is no prose padding to remove: shortening an item means
either dropping a book or dropping a citation, and **dropping a book from a four-book claim is
precisely how seven false universals were manufactured in this corpus on 27 August**, each one
contradicted by primary text and each caught by a reviewer rather than by the author.

**So the fix is not compression, and the metric is wrong for this document.** The style guide's
*"standalone and memorable — this feeds the podcast's 'if you only remember N things' segment"*
assumes a teaching document. `rules_primer.md` is a **reference** document, and 249 words per item
is what an honest four-book comparison costs. Its takeaways are not essays that drifted; they are
the comparison the document exists to make.

**What can honestly be done, from what worked on `defending_the_rush` item 6** (324 → 209 words,
the only compression in that document that survived review): **stop summarising the comparison in
the takeaway.** State the instruction and the hazard, say plainly that the books diverge and that
the divergence matters, and send the reader to the body for the grid. Applied here that would move
most of the 50 citations out of the summary layer — but note what that means for a *reference*
document, whose readers arrive wanting exactly those numbers. **This is a decision for the owner,
not an edit to make unilaterally**, and it belongs in Tier 2.

**One genuine defect found and confirmed while diagnosing:** the orphan check (`grep -F`, fixed
string) returns **exactly one** orphan across all 50 citations — **NHL 59.2**, cited in takeaway 8
and appearing nowhere in the body. Verified against `sources/nhl_rules.txt`: *"59.2 Minor Penalty -
A minor penalty, at the discretion of the Referee based on the severity of the contact, shall be
imposed on a player who 'cross checks' an opponent."* That must be moved into the body regardless
of what is decided about length. **The other 49 all trace.** **✅ FIXED 28 Aug — reviewed and gate-cleared, round 51.** Moved into the §4 cross-checking bullet as a *floor* — and the repair found a second-order effect the row had not seen: the bullet already said Hockey Canada *"gives you no minor floor **at all**"*, a sentence with **no antecedent**, because the body had never established that a minor floor existed anywhere. All four cells are now named and quoted separately: NHL 59.2 and **59.3 turn on word-for-word the same test** (*"at the discretion of the Referee based on the severity of the contact"*), so under that book severity alone separates two minutes from five; IIHF 59.2 is discretionary on **differently worded** grounds (*"the degree of force and violence"*); USA Hockey 609(a) and HC 9.2(a) are **mandatory on their face**. Key Takeaways deliberately **not** touched. ⚠️ **The row's "exactly one orphan" claim does not survive a strict sub-rule test** — it was the only orphan whose absence changed what the body *taught*. See the Sources worklist above for the rest.

**✅ Three separate corpus computations of NHL shift length now exist, and the owners table named an
owner for only one of them. — DONE 28 Aug** (`project/content_style_guide.md`, owners table). A **Shift length by position** row now names **`positions/defender.md`** as owner, carries the 2025-26 pair (**49.3 s D / 47.6 s F**, 325 D and 615 F, total ice time ÷ total shifts, every skater who took a shift, computed not published), and records all three computations with the population **and** the estimator each was made with — including that `defender.md` and `conditioning_and_recovery.md` differ on **both**, that their gaps run in **opposite directions by position** so no cause is asserted, and that `playing_without_the_puck.md`'s comes from a **different API endpoint**. Figures re-derived from the documents, not retyped from this plan. `project/content_style_guide.md:529` gives `conditioning_and_recovery.md`
as owner of *"Shift length"* with the 30–80 s range and the 47.7 s central tendency — but **names no
owner for the positional split**, which is the fact that actually diverged. In practice `defender.md`
holds it and `center.md` routes readers there. A **third** computation exists at
`playing_without_the_puck.md:66` and `:841` — mean 47 s, median 45 s, from 8,325 shifts across an
**11-game convenience sample** via the shift-chart API, a different endpoint from the other two.
`how_to_watch_hockey.md:611` already reconciles it. **Add a row to the owners table naming the owner of
the positional pair, and record that three computations exist**, so the next author does not find a
fourth by accident.

**⬜ `switching_positions.md:487` restates the shift-length figure with its season and its
computed-not-published label but **without its population**.** It links to the owner, so it is the
weakest of four restatements rather than a wrong one. One clause.

**⬜ The Sources notes need a corpus-wide both-directions audit, and Hockey Canada was only the
first symptom.** **28 Aug — the audit was run at two resolutions, and the resolution is the whole finding.**

- **Book level** (is the rulebook named in the footer at all?) — was **10 documents**, now **0**. Closed 28 Aug:
  `uk_rules` (USA Hockey **304(g)** and Hockey Canada **3.6(c)**, both cited at `:121` — the earlier pass judged
  this file on its 69.1 reference alone and never saw them), `reading_ice_hockey_diagrams` (USAH **604(a)**,
  HC **7.3(a)**), `conditioning_and_recovery` (IIHF **101.1**, footer entry records that it sits in the book's
  `WOMEN'S HOCKEY` section), `how_to_watch_hockey` (IIHF **76.6/76.7**), `neutral_zone_systems` (IIHF **27.7**).
  Every rule was located verbatim in `sources/` first. **HC 3.6(c) greps as *throat* protector, not *neck
  laceration* protector** — the terminology differs by book, and searching the corpus's own wording finds nothing.
- **Rule level** (is the specific rule covered by the footer?) — **73 documents×books still flagged.** ⚠️ **This
  is a worklist, not a gate, and must never be given a `--strict`.** Most entries are *granularity*: a footer
  saying "Rule 81 Icing" legitimately covers a body citing 81.6. The scan also emits malformed tokens (`8.5)`),
  so its count is an upper bound, not a defect count. **Do not sweep it.** Round 44 manufactured a divergence
  by ranking exactly this kind of output and offering to fix it. Judge per site, per document.
- **The genuine sub-class worth working**, from the round-51 agents: a **summary layer citing a rule the body
  never makes**. `rules_primer.md:801` cites USA Hockey **631(d)** in Common Mistakes with Rule 631 appearing
  nowhere in the body — the exact shape of the 59.2 defect, and unfixed because the repair is a body addition
  in the puck-out-of-play section. `rules_primer.md:919` names HC **8.5(a)** and its Interpretation 2 for the
  first time in Key Takeaways. Also unlisted in that file's Sources note: USA Hockey **602, 603, 610, 618, 631**
  and NHL **6**.
 Round 51 checked one book across seven documents and found the gap runs both ways:

- **`forechecking_systems.md` cited USA Hockey 604(a), 630(a), 640(b), 640 Note 2 and the Declaration
  of Player Safety — fifteen mentions — with the USA Hockey Playing Rules absent from Sources
  entirely.** Found and fixed in passing. Nobody had looked for it.
- **`how_to_watch_hockey.md`'s *Rules (primary)* line was NHL-only** while its text cites USA Hockey
  630(a) and HC 6.11.
- **`neutral_zone_systems.md` was wrong in both directions** — it listed HC **6.3** (Face-off
  Location), which the document never uses, and omitted **6.11**, which it does.

**Only Hockey Canada was audited, plus USA Hockey in one file.** The orphan entry at
`neutral_zone_systems.md` suggests these blocks carry other entries supporting claims that have since
moved out. Audit every Sources block against its own body, both directions, one book at a time.

**⬜ The Hockey Canada online rulebook and the dated PDF number the rules differently.**
`rulebook.hockeycanada.ca/…/rule-6-3/` serves 200 with real content, but carries **no edition date
anywhere** and its own navigation numbers **Off-side as 6.12**, where the dated 2026-28 PDF — the
source of every HC rule number in this corpus — has it at **6.11**. It is an unversioned edition with
different numbering. Kept and labelled; **take rule numbers from the dated PDF only.**

**⬜ `puck_support_and_spacing.md` states the two-book offside qualifier without linking to its
owner.** Its sibling `how_to_watch_hockey.md` says `See [Zone Entries]` immediately after; this one
does not. One link.

**Orphan citations already found in the two remaining documents** — claims their Key Takeaways
make that their bodies never make, so trimming without moving them would delete them from the
corpus. Each needs verifying against primary text and moving into the body *before* its takeaway
is touched, exactly as `body_contact_and_battles.md`'s suspension block was:
`rules_primer.md` — **NHL 59.2**. `defending_the_rush.md` — **Hockey Canada 8.8(b) and 8.8(e)**
(the body reaches only 8.8(c)).

⚠️ **`reading-diagrams/reading_ice_hockey_diagrams` was on this list and does not belong on it.**
It was recorded at 742 words / 5 items / 148 per item. It is **298 words / 5 items / 60 per
item** — the corpus median, and the shortest takeaway item in it is 15 words. The 444-word
difference is its **Sources footer**, counted as takeaway text. This is the *same parser fault*
the correction below describes, surviving the correction: the fix bounded the slice on the `---`
rule before the footer, and this is **the one document of 37 that has no `---` there at all**, so
the slice ran to end of file. A fault whose fix is itself unstressed is not fixed. Bound the slice
on the footer's own opening (`*Sources`) as well as on `---` and `##`.

**✅ The missing `---` is FIXED and gate-cleared — round 51.** Two lines added, no claim touched;
the Key Takeaways slice now measures **298 words instead of 742**, and all 37 documents conform.

⚠️ **But my "three tools defeated by one separator" claim was wrong, and I had written it into the
round 49 record too.** The build warning `no citation paragraphs found under Sources` has a
**different cause entirely** and did not clear. `site/scripts/extract-meta.mjs:175` counts citations
with `/^\*[^*:]{1,70}:\s*\[/` — a **70-character cap on the category label**. This document's labels
run **83, 88 and 95** characters. Running that regex against both the pre-fix and post-fix text
yields zero matches either way: the horizontal rule is irrelevant to it. I asserted a causal link
between two symptoms because they shared a victim, and verified neither.

**⬜ The 70-character citation-label cap silently drops citations in SEVEN documents, not one.**
`site/scripts/extract-meta.mjs:175` counts a Sources citation with `/^\*[^*:]{1,70}:\s*\[/`. Swept
just now — **eight citations exceed the cap**:

| document | label length |
|---|---|
| `switching_positions` | **188** |
| `puck_handling` | **149** |
| `zone_entries` | **139** |
| `faceoffs` | **123** |
| `reading_ice_hockey_diagrams` | 87 and 81 |
| `body_contact_and_battles` | 84 |
| `mental_game` | 81 |

Only `reading_ice_hockey_diagrams` warns, because it is the only document where *every* citation is
over the cap — the others have at least one short label, so the extractor finds "some" citations and
stays quiet. **The site's citation metadata is therefore incomplete for seven documents and silent
about it**, which matters for a corpus whose whole claim is traceable provenance.

**The decision is the owner's:** widen or remove the cap in `extract-meta.mjs` (a site-code change,
and the one that fixes all seven), or shorten eight citation labels (touching citation text, which
needs a source pass and is the worse option). **Do not shorten labels to satisfy a regex.** Adding the `---` makes the document structurally identical to the
other 36 and removes the trap at source. It is a one-line structural change touching no claim,
but it touches `content/`, so it needs its own review and its own commit — do not fold it into
another change.

⚠️ **This item has been wrong in both directions and the second error was mine.** It read *"48,673
words: 9% of the corpus is its own summary"* for seventeen rounds — a **volume** framing, which is
not actionable and is why it never moved. Round 47 restated it as 60,033 words and 9.5%, calling
the old figure 23% low. **That was worse.** My extraction took everything between `## Key
Takeaways` and the next `##`, and in **36 of 37 documents** the Sources block and disclosure
footer sit inside that span with no heading to separate them — so **34,401 words of citations and
provenance were counted as takeaways.** The true figure is 4.1%, not 9.5%, and the original 48,673
was itself nearly double the truth.

**4.1% of a corpus being its summary layer is reasonable. The volume was never the defect.** The
defect is four documents whose individual takeaways are 100–250 words each, and it was invisible
under every word-total framing this item has had.

⚠️ **And the failure mode is the one this session spent itself on.** A number was derived, checked,
committed and pushed, and it was wrong because the tool that produced it was never stressed. It was
caught by reading the text behind it — a 1,954-word "takeaway" that turned out to be 200 words of
takeaway and 1,750 of Sources footer — not by any checker. **A figure merely wrong rather than
absurd would have shipped.** `scripts/check_counts.py` cannot see this class and says so.

**The fix, and what makes it safe.** Round 38 fixed `rules_primer.md` and found that **every
critical it sustained came from compressing rather than splitting** — shortening a takeaway drops
the qualification that made it true. So do not compress. In `body_contact_and_battles.md`'s
takeaway 1, the 204 words are a memorable assertion plus a rule dump — 604(c), 604(d), 604(e),
Hockey Canada 7.3 — **and every one of those citations already exists in the body of the same
document.** The takeaway can keep the assertion and point; nothing is deleted, non-negotiable 3 is
untouched, and no detail has to move.

**Four documents, one at a time, each reviewed before the next.** Not a corpus-wide pass — the
corpus does not need one.

**⬜ Gaps the entry paths exposed — content that does not exist.** Absences no review round finds,
because a reviewer checks what is written. **Now actionable rather than blocked:** the four routes
exist, so the gaps they point at can be enumerated by walking them.

**⬜ Known open defects carried at corpus level.** Full-sheet diagrams render labels at ~7.5 px on
a phone (improved from 4.4 by a scroll box; still strained — a typography decision, not a diagram
fix). `special_teams.md`'s facts block is at its 8-fact cap with two independent hedges in one
292-character line; the style guide's own remedy applies — *"more than 8 and the section is
probably two sections."*

---

## Tier 0b — The owner-set priorities, and one live notation defect

Set by the owner on 19 August: **priority 1 was diagram notation, priority 2 readability**, both
ahead of everything else. Priority 1 is largely done; these are what it left, plus priority 2 in
full.

### Priority 1 residue

**✅ `pressure` no longer draws a glyph the IIHF key does not define.** It was
`{ line: 'plain', end: 'bar1' }` — one perpendicular bar, which **§21.1 does not define at all**;
two bars is its SUDDEN STOP, and one bar is the left half of that mark, so a reader trained on the
key saw half a sudden stop on a line meaning a player closing to pressure. It is now
`{ line: 'plain', end: 'bars2' }` across all **12** uses, and the one-bar terminal is not offered
anywhere. The cost is disclosed rather than hidden: a pressure route and a sudden stop now draw the
**same mark**, told apart by where the route finishes, and `reading_ice_hockey_diagrams.md` says so
to the reader. ⚠️ **The repair of the comments describing this was itself half-applied twice** —
see [`round_40_notation_axis_residue.md`](../reviews/round_40_notation_axis_residue.md).

⚠️ **This entry was wrong when first written**, and said one bar *was* SUDDEN STOP. It was salvaged
from a retired note and carried over without checking it against `rink.mjs`, which states the
opposite three lines from the definition. The tell was inside this tier — sudden stop is listed
below as **unimplemented and unused**, which cannot be true of a symbol the corpus already draws —
though **my reading of that tell was also wrong**: it is `stop`, not `pressure`, that draws it.
Two wrong claims about the same glyph, one written to explain the other. → **the plan's own rule
applies to the plan, and to the correction of the plan: a quotation is evidence, not
verification.**

**⬜ `content_style_guide.md:714` states a glyph wrongly, under an instruction not to re-derive
it.** It reads *"| Sudden stop | line ending in a perpendicular bar |"* — singular. §21.1's SUDDEN
STOP is **two** bars; one bar is the shape §21.1 does not define. It sits nine lines above
*"⚠️ The legend glyphs are settled — do not re-derive them"*, so an agent following the governing
document reads a wrong glyph and is told not to check it. **Fix the entry and the instruction
together** — the instruction is only safe if what it protects is right.

**⬜ `C` and `A` collide with the IIHF key, and the collision is theoretical.** The spec reserves
`C` = coach and `A` = assistant; the corpus uses `C` for centre (36 glyphs) and `A1`/`A2` for
attackers (11). But `pos: 'coach'` and `pos: 'assistant'` appear **zero times** in all 109 diagrams
— these are play diagrams, not drill diagrams, and the IIHF key carries C and A because it is a
*drill* key. ⚠️ **Relabelling 36 centres would break a documented corpus convention to resolve a
collision that cannot currently occur.** Decide deliberately.

**✅ The unimplemented-symbols list is resolved.** `stopmark` (§21.1's `//` STOP) and `backxover`
(its sawtooth BACKWARD CROSSOVER) are both implemented and both appear in the legend, so the two
genuine omissions are closed. **`bodycheck` was deliberately removed from the legend**: it is
implemented but **no diagram in the corpus uses it**, and advertising a body-check glyph without
saying who may legally deliver one is a contact instruction with no scope — body checking is
prohibited in USA Hockey 12U and below, all girls' and women's play and all non-check adult play
(604(a)), and at Hockey Canada U13 and below and in female hockey (7.3). `blocking`, `pivot`,
`droppuck`, `stopmark` and `backxover` are also implemented and unused; they keep their rows
because none is a contact glyph. The superseded entry read:
*"six IIHF symbols remain unimplemented — pivot, dropping the puck, sudden stop, blocking/screening,
body check, the cluster of pucks. None is currently used."* Checked against §21.1 and `rink.mjs`:

- **Sudden stop is implemented and used.** `stop: { line: 'plain', end: 'bars2' }` at `rink.mjs:504`
  renders two bars, which **is** §21.1's SUDDEN STOP, and it is used once
  (`defensive_zone_coverage.mjs:404`). *"None is currently used"* is false.
- **The cluster of pucks is not an IIHF symbol.** It appears nowhere in §21.1 — zero hits in
  `sources/iihf_coachdev_off_tactics.txt` — and belongs to the other key, at `rink.mjs:468`.
  Listing it as IIHF is a provenance error.
- **Two genuine §21.1 omissions are missing from the list:** **STOP** (`//`, which the corpus's
  `stop` does not draw — it draws two bars) and **BACKWARD CROSSOVER** (a sawtooth zigzag, where
  `crossovers` draws the other key's picket-on-a-line).

**⬜ Write the notation rule into the spec so it cannot drift again.** The owner asked for it in
`project/content_style_guide.md` **and** `.claude/agents/diagram-reviewer.md`. The rule to write is:

> Shape carries the **POSITION**, fill carries the **TEAM**. A circle is a forward, a triangle a
> defenceman, a goaltender a bare `G` with no enclosing shape, an `X` a pylon and never a player.
> **Open** is the reader's own team, **solid** the opposition. Monochrome throughout: colour
> carries nothing. Source: *"International Drill Symbols"*, the Hockey Eastern Ontario NCCP
> Development 1 handout — `sources/heo_intl_drill_symbols.pdf`, on disk and sha256-verified, whose
> rows read `● ○ Forward / Player` and `▲ △ Defender / Player`. **A player's shape therefore does
> not change when play turns** — a winger is a circle backchecking as well as attacking.

⚠️ **This is not the axis the owner specified on 19 August, and the divergence is deliberate.**
The 19 August instruction was *"notation is fixed by IIHF International Symbols §21.1 … shapes
carry the team on an offensive/defensive axis — circle attacking, triangle defending — never
own/opposition and never position."* That reading of §21.1 is **correct** — its columns genuinely
read `TEAMS / OFFENSIVE DEFENSIVE`, with the position carried by a numeral, 1 goaltender through 6
left wing. It was implemented, and it **produced the defect that reversed it**: a player's shape
changed between diagrams, so a winger was a circle in the breakout picture and a triangle in the
forecheck picture. §21.1 is also the only one of four published keys that works that way — USA
Hockey's 12U Practice Plan Manual legend defines no player symbols at all, Weiss Tech Hockey draws
both teams as circles, and the HEO sheet this corpus actually cites carries position in the shape.
And §21.1's numerals cannot be used here regardless: they would reinstate exactly the inference
that *"F1, F2 and F3 are roles set by order of arrival and not people"* spends fifty lines killing.
The revert is recorded as done in
[`corpus_structure_measurements.md`](../reviews/corpus_structure_measurements.md) — 511 glyphs
across 112 diagrams verified — and the reader-facing account is in
`content/reading-diagrams/reading_ice_hockey_diagrams.md`. **It has not been put back to the owner,
and it should be:** an owner instruction was overridden on an implementer's judgement, and the only
thing making that legitimate is that it is written down here rather than absorbed silently.

⚠️ **Do not take this entry on trust either — this axis has now been stated wrongly three times in
this repository, twice in opposite directions.** Both keys are on disk and **both are image-only**:
`pdftotext` on the HEO sheet returns its title and nothing else, and the IIHF `.txt` loses every
glyph. **Render the page and look.** That is how three glyphs stayed wrong through every check ever
run.

**✅ The `F1 F2 F3` / `D1 D2` collision is resolved by the axis above, and needs no owner decision.**
It was open only *because* shape carried the team: with shape saying nothing about position, a bare
`2` in a circle could have been either. Shape now carries the position, so a `2` in a circle is a
forward and a `2` in a triangle is a defenceman, and the label is unambiguous without the letter.
The corpus keeps the letters anyway — they match the vocabulary of the section beside the picture.

### Priority 2 — readability

**⬜ Sections that do not say where they are — and this is a safety item, not a readability one.**
The owner's example: *"in Carrying the Puck — Under Pressure under Defensive Zone, it is not clear
we are talking about Under Pressure in the Defensive Zone unless you scroll up."* Measured and worse
than described: `### Carrying the Puck — Under Pressure` appears **three times in `winger.md`**.
A reader hearing one of them aloud has no idea which end of the ice they are in.

**⬜ Ten live divergences the consolidation would otherwise silently pick a winner on.** These are
defects **now**. D1 alone: **"the slot" is two different shapes** — `shooting.md:26` bounds it by
the faceoff dots; the glossary, `breakouts.md` and everyone else bound it differently.

**⬜ The Overview triple-repeat.** A `facts` block, then prose restating it, then the sections
restating it again. The owner wants the Overview *"much more summarised, maybe only the facts."*
⚠️ **Do not simply delete the summary prose — the summary layer is a safety mechanism**, and this
corpus has already lost a correct fact to a tidying pass.

**⬜ "A Note on Language" — one page, not eight.** Eight of 37 documents carry it, 21,755 characters
total, but at 1,140–3,504 chars each **they have diverged** — so this is a **merge**, not
delete-seven-copies. ⚠️ Several copies may carry an honest disclosure the others lack.

**⬜ More diagrams, especially Positions.** *"One diagram is worth 1000 words."* **16 of 37
documents have zero diagram references**; Systems carries 9–10 each while Positions is thin.
⚠️ **The owner's constraint on Overview diagrams:** high-level only — full-ice concepts, or one to
two per zone, and no more. A single diagram carrying everything is worse, not clearer.

**⬜ Repeated labels inside one facts block.** Multiple `Rule:` facts read fine; multiple
`Position:` facts confuse. Suspected cause is Overview blocks summarising Position from several
sections below.

---

## Tier 1 — Content defects with a known fix and a named location


The fastest work in the list. Each has been verified, has an identified remedy, and nothing
blocks it.

**Legend:** ⬜ open · ✅ closed, with the round that closed it.
**Rows marked ✅ are carried here only until the next plan sweep moves them out** — CLAUDE.md's
rule is that this file holds remaining work and a closed item lives in its review record. They are
kept for one round so the round-50 record and this table can be diffed against each other, which is
how four stale rows were found in the first place.

⚠️ **FOUR of the eight rows worked on 27 August had a wrong premise** — three already fixed in
rounds 36/37 and never closed, and one (`zone_entries.md:174`) describing a gap that had been
filled while the *real* gap, book scope, went unrecorded. **That is a 50% error rate in a table
whose whole claim is "verified, with an identified remedy."** Before working any row here, verify
the defect still exists in the file, and treat the row's description of *what* is wrong as a
hypothesis rather than a finding. The cause is copying planning text forward from a round's
*carried-findings* document instead of its *outcome*; **close the row in the commit that closes
the finding, and link the record rather than restating it.**

⚠️ **The three:** `offensive_zone_play.md:165` and
`defending_the_rush.md:135` both describe pre-fix text; **round 36 fixed both and the rows were
never closed**, so two agents were dispatched in August to repair things that were already
repaired. The planning text was copied forward from `round_36_carried_findings.md` — the
*pre-fix* document — rather than from the round's outcome. **When a round closes a finding, close
the plan row in the same commit**, and prefer linking the review record to restating its text.

| | Where | What | Source |
|---|---|---|---|
| ✅ | ~~`offensive_zone_play.md:165`~~ **ALREADY FIXED IN ROUND 36 — this row was a stale carry-forward of the pre-fix planning text.** Verified 27 Aug: all clauses present in facts and body. | A merge dropped **three** clauses; one was restored, **two remain** — same defect, same remedy, and nothing forced the trim (each original line was ~125 characters). | plan §3.2 |
| ✅ | `offensive_zone_play.md:171` **FIXED — round 50** — `Convention:` → `Key:`; the body states arrival order as a definition and hedges nothing, so the label had nothing to mark. | A `Convention:` fact says a role assignment *"is a coaching choice"*; the section body says arrival order decides it. **The fact contradicts its own section.** | plan §3.3 |
| ✅ | ~~`defending_the_rush.md:135`~~ **ALREADY FIXED IN ROUND 36 — stale row.** Verified 27 Aug: `:135` reads *"Roughly two to three … around a stick and a half … roughly a stick length"*; the hedges survived. | A merge shed *"around"* and *"roughly"*, promoting a hedge to *"**one** stick length"* — reads as a measurement rather than an approximation. | plan §3.4 |
| 🔄 | `body_contact_and_battles.md` — **half already fixed** | Read-aloud minors in facts blocks: *"All four"* resolves only from a heading a listener never hears; *"the restricted form"* of 101.1 is undefined in the block. ⚠️ **Re-checked 29 Aug: the "All four" half is GONE** — round 51's facts rewrites resolved it, and no labelled facts line in that file now opens with an unresolved *"All four"*. **The "restricted form" half is LIVE at two sites** (~:370, ~:413), both reading *"IIHF women's play permits only the restricted form of Rule 101.1"* — a listener hears *"the restricted form"* and has no way to know what is restricted about it. Being fixed in round 52. | plan §3.7 |
| ✅ | Glossary, ~9 entries **MOSTLY FIXED — round 50** — `Post` now carries its owner's coaching-choice hedge, `Board battle` weakened to what its owner actually says (with its unverified label), two entries reordered byte-identically, `one-touch`/`one-timer` reciprocal added. ⚠️ **`Forecheck` homonym was already closed in round 37 — another stale row.** ⚠️ **`backside coverage` is MIS-TIERED**: `terminology_source_audit.md:91` records that the IIHF section defining it has never been located, so this is not a known fix — it needs a source fetched. Move it to Tier 4. | `Forecheck` homonym; `Post` drops its owner's coaching-choice hedge; three entries out of alphabetical order; `one-touch`/`one-timer` collision; `Board battle`; backside coverage. | plan §4.1, §4.3 |
| ✅ | Glossary, voice **FIXED — round 50** — standardised on sentence-final `See [Doc](path).`, the existing majority form (25 of 32) and the only one that survives text-to-speech. `Butterfly`'s inline form was already fixed. Five older entries deliberately left: they use the link as the sentence *subject* to attribute a specific claim, and normalising would cost the attribution. | **Six of the ten new entries close with a cross-link and four do not**; `Butterfly` uses inline *"— see [X]"* where others use a sentence-final *"See [X]."*; some are third person and some switch to second. | plan §4.3 |
| ✅ | `"most goals are scored low"` — **the real defect was a quotation with a manufactured lead-in** | **Unsourced in its owner.** Label it or source it — do **not** delete it: a tidying pass already removed a *correct* fact from this corpus for looking unsupported. ⚠️ **28 Aug — the row's own wording does not appear in the corpus, and re-deriving it found something sharper.** Grepping every phrasing turns up no *"most goals are scored low"*. What exists is **two different claims about where most goals are scored, in two documents, only one of them sourced**: `body_contact_and_battles.md:861` — *"The area on top of the crease is where most goals are scored and most penalties are taken"*, **attributed to Mike Corbett** — and `center.md:298` — *"The slot is where the most goals are scored"*, in a **Key considerations** line with **no source at all**, echoed at `center.md:68`. They are not the same area, and neither names the other. A third, separate claim — `shooting.md:231` *"Most tipped goals are low"* — is scoped to **tipped** goals and its Sources note does carry tip/deflection entries, so it is probably not the defect. **✅ DONE, round 52.** The row's own wording *does* exist, at `goaltender.md:312` — as an **honest disclosure already correctly labelled**. That is the house form working, not the defect. **The defect was `body_contact_and_battles.md:867`:** *"The area on top of the crease is where most goals are scored and most penalties are taken. Mike Corbett… put it this way:"* — the quotation is genuine and refetched (HTTP 200, located verbatim in the rendered body), but **"put it this way" credited Corbett with two claims he never made.** He says nothing about penalties anywhere in the interview, and he says *"probably over 70 percent of **our** goals"* — one NCAA programme, self-hedged. ⚠️ **Both claims were refuted by the document's own measurements five paragraphs below:** 26.8% of goals within two stick-lengths, and **265 of 2,967 penalties (8.9%)** in the net-front box — not "most", and the box's real signature is hooking (2.10×) and slashing (1.76×), not the cross-check. The file had done the hard measurement and left the folklore standing above it. **The crease/slot pair reconciles as NESTED, not competing** — The Point (refetched, byline and both strings located) puts ~half of goals in the inner slot and ~a quarter in the outer; the crease front is a sub-area of the inner slot, the *densest* patch rather than the largest. `center.md:68` and `:298` now both carry the figure with its owner and its limit (Sportlogiq tracking, not public, NHL 5-on-5). **`shooting.md:233` reported, not edited:** *"Most tipped goals are low"* is unsourced — its Sources note carries tip/deflection entries but **none sources that claim**, and it borrows authority from the sourced rules block beside it. Label, do not delete. | plan §3 |
| ✅ | Hockey Canada rulebook missing from Sources | **FIXED and gate-cleared — round 51.** Seven documents done (`uk_rules` correctly needed nothing — its 69.1 is a video-review reference; `reading_ice_hockey_diagrams` handled separately). **Every cited HC rule was located verbatim in the refetched published 2026-28 PDF**, not merely in `hc.txt` — and the wrapped-line trap was live: `grep -F` on Rule 7.3's scope clause returned **zero** because it wraps after "any other". ⚠️ **My scoping was partly wrong:** `equipment.md`'s "6" was an occurrence count, not a rule count (2 rules), and it already carried HC under *Certification standards* — the gap was in the *Rules (primary)* line a reader actually scans. **The round-44 question is answered: both claims stay.** In each, HC 6.11 is the second half of a two-book qualifier whose first half was already there, on a sentence that would otherwise state an NHL/IIHF-only reading of offside as universal — eleven siblings carry the same qualifier. | round 44 |
| ✅ | `rules_primer.md:760` (**not 738**) — the rule-set comparison table's tagging-up row | It states USA Hockey's classification limit and carries **no Hockey Canada note**, while its sibling icing rows all carry inline *"Hockey Canada is split by category"* notes. **The absence of a Hockey Canada classification limit on tag-up is a real distinction the corpus states in four other places and not in the table** — and §10's cells are the shape that generated round 44's divergences. Found by `commit-gate` in round 45; pre-existing. **✅ DONE, round 52 — premise PARTLY WRONG in two ways, right where it mattered.** The line number was wrong (760, not 738; 738 is the section's opening sentence), and the cell had **already been half-closed** by an uncommitted edit earlier the same day — at HEAD it read only `Usually yes`. **The underlying rules claim is real and is now verified from the books:** USA Hockey **630(d)** carries its limit as a leading parenthetical *"(For all Youth 15-Only levels and above, all Girls 16U levels and above, High School and Adult classifications only)"* — so it scopes 630(d) alone, not the offside rule proper. Hockey Canada **6.11** carries **no** category clause anywhere in the rule or its thirteen interpretations. ⚠️ **That negative was made solid three independent ways rather than by one grep** — the book's own two scoping formulae find every category-scoped rule in `hc.txt` and 6.11 is not among them; Hockey Canada has no rule-modification appendix that could scope it from outside; and every "delayed off-side" mention in the book is unscoped. The cell now names the rule, its **section**, and quotes the sibling icing rule 6.7(e) it contrasts against, so the absence reads as **checked and absent** rather than as *not applicable* — which is the failure mode of silence in a comparison table. The distinction turned out to be stated in **five** other places, not four, and all five agree. | round 45 |
| ⬜ | **The comparison table's "Typical rec" column is a claim about practice that no book can confirm** | Raised by the round-52 tag-up adjudication, about its own cell. The tag-up row's rec column reads **"Usually yes"**. ⚠️ **No rulebook on disk can confirm or refute that, because it is not a rules claim at all** — it is an assertion about what rec leagues actually do, and the corpus holds no survey of rec leagues. The column is useful and should not be deleted (non-negotiable 3), but it currently sits in a table whose other four columns are all sourced to primary text, which lends it a provenance it does not have. **The work is to decide what that column's epistemic status is and label it once, at the table**, rather than per-cell — and to check whether any other cell in it states something stronger than "usually". | round 52 |
| ✅ | **Nested bold renders invisible — `.prose strong` is `font-weight: 650` with no nested rule** | **Scoped with the site's own parser (`mdast-util-from-markdown`) rather than a regex, and closed 28 Aug.** The carried figure of *eight* spans came from an asterisk-pairing heuristic that cannot tell a nested span from **sibling** bold runs on one line. Parsed corpus-wide, there was **exactly one**: `rink_map_and_glossary.md:151`, `**two books of the four**` nested inside a bold run opening at *"under NHL and IIHF rules"*. Fixed by closing the outer span early — no wording changed, and the claim itself was verified sound (NHL + IIHF allow the raised skate; USAH 630(a) and HC 6.11 Interpretation 3 require contact). Re-parsed: **nested spans corpus-wide now 0.** | round 51 |
| ✅ | **62% of the corpus's rule-set warnings rendered invisibly — 155 unmarked, now 12** | **Found by `site-reviewer`, round 51 — no other dimension can see it.** The site turns a ⚠️ into a distinct orange callout, but **only when the ⚠️ leads a blockquote**: `site/src/plugins/remark-corpus.mjs` matches `/^\s*(⚠|❗|🚫)/` at the head of a blockquote. Its own comment states the purpose — *"blocks carry rule-set warnings that change what a reader does, so they get their own treatment."* **Of 253 ⚠️ rendering site-wide, 94 get the callout and 159 do not**: 92 inside list items, 58 inside paragraphs, 3 in table cells. So most of the corpus's *"this rule is not yours"* warnings — the ones written precisely because a reader acting on the wrong book gets penalised — have **no more visual weight than the prose around them**. ⚠️ **Two options, and the reviewer preferred the second:** (a) lift each ⚠️ into its own blockquote — a **content** edit across ~30 documents, needing `content-reviewer` and `safety-reviewer`; or (b) **extend `remark-corpus.mjs` to wrap an inline ⚠️-led bold run in a `.warn-inline` span** — a plugin/CSS change that **fixes all 159 at once and touches no content.** (b) is cheaper, safer and reversible. **This is the highest-value site item in the plan.** | round 51 **✅ DONE, round 52.** Measured on **two cache-free builds of the same frozen content state** — ⚠️ Astro's content cache silently reuses rendered HTML, and the agent's first comparison was contaminated that way before it caught itself. **Before: 259 glyphs, 104 in a callout, 155 UNMARKED** (81 in paragraphs, 65 in list items, 3 in table cells, 6 in diagram captions). **After: 143 `.warn-inline`, 12 unmarked.** Two rendered shapes are wrapped — `**⚠️ …**` and the larger group `⚠️ **…**` (106 of 135) — with **the bold run inside the wrapper, because the glyph alone is not the warning**, plus an optional ordinal after one real rules warning (`rules_primer`'s IIHF faceoff-ejection divergence) was missed without it. No new colour: `.warn-inline` reuses the callout's own `--warn`/`--warn-bg`/`--warn-border`, defined in all three theme blocks. `box-decoration-break` left at `slice` deliberately — these runs are often three lines and cloning redraws the bar on each, reading as three warnings. **No double-styling, verified in the DOM rather than reasoned about:** 0 inside `.callout-warning`, 0 inside `.doc-header-note.is-warning`, 0 nested. ⚠️ **The reviewer's original "94 of 253" could not be reproduced exactly and the agent said so rather than claiming it** — 94 reconciles as callout *blocks* (95 elements holding 102 glyphs), and 253→259→260 is corpus drift from concurrent editing. **The ratio held; the integers did not.** **The 12 remaining are enumerated, not hand-waved:** 6 diagram captions and their SVG `<title>` twins (from the manifest, never through this plugin), 1 ToC entry (correctly plain), and **5 that are a content-shape question, not a plugin one** — a bare glyph with no bold run after it, where marking would mean guessing where the warning ends and would emphasise the rule number instead of the warning. | round 51 |
| ✅ | ⚠️ **CRITICAL — my own hand-edit told goalies they cannot be penalised for establishing position. They can.** | **Found by the `rules-verifier` I dispatched against my own two unreviewed edits, which is the entire reason an author must not review their own writing.** I appended a gloss to `goaltender.md` ending *"and establishing your position is not something you can be penalised for."* **REFUTED in the operative appendix of BOTH books.** IIHF Appendix IV Table 16 at **6F/6G/6H** and NHL Reference Table 14 at **F/G/H** all answer the case where a goalkeeper establishes position *"by using excessive force or acting in a manner which would otherwise warrant a penalty"*: *"Coincidental minors"*, *"A minor penalty to the goalkeeper and the goal is disallowed"*, *"Minor penalty to goalkeeper."* Situation Handbook **69.5** agrees. And even a clean attempt is judged — 6B, identical in both books: *"whether the goalkeeper was truly trying to establish a position."* ⚠️ **My error was generalising Rule 64.1's carve-out**, which is scoped to *diving / embellishment* and nothing else, into blanket immunity. **A goalie reading it and clearing the paint with force takes a minor.** ⚠️ **Two further defects in the same edit:** the gloss attributed *"Rule 69.3's minor"* to the reader's own book when **IIHF 69.3 writes no minor** — it says *"the appropriate penalty"* — contradicting this document's own facts line and Sources note two screens away; and the quotation dropped the answer's opening *"No."* without an ellipsis, presenting a truncated answer as a whole one. **All fixed:** gloss replaced with the tables' own wording, `"No."` restored, Situation 69.5 and rows 6B/6D/6F–6H added to Sources both ways, and **two new `Rule:` facts** added to the block (7→9, cap 11) so the correction reaches the layer read aloud. | round 52 |
| ✅ | **Site rendering defects — all five reproduced, fixed, and SEEN in a browser** | **`####` headings are smaller and dimmer than the body text they introduce** — 16.48px in `--text-muted` against a 17px paragraph in `--text`, so a section heading is **the least prominent text in view** (`global.css:793-797`). Contrast passes AA both themes; it is a **hierarchy inversion**, not a contrast failure. Affects 40 sections. · **`####` sections are invisible to the on-page ToC** (`TableOfContents.astro:11` filters `depth === 2 \|\| depth === 3`). · **Heading permalinks do not exist anywhere.** `rehype-corpus.mjs` documents that it adds one to every h2/h3; `grep -ro 'heading-anchor' dist` returns **0** across 36 pages that do have `<h3 id=…>` — the ids are assigned after the plugin visits, so **the feature is dead.** · **Every deep link lands 144px down and visibly jumps** — `scroll-padding-top` on the container **and** `scroll-margin-top` on the headings are both `calc(--header-h + 1rem)`, and Chrome sums them. · On a phone the "Contents" link scrolls to the bottom of the document with no way back. **✅ DONE, round 52 — all five confirmed by independent measurement, none dismissed.** **(1) `####`** now 17.6px/700/`--text` — three cues, not colour alone, since both old colours already passed AA. Contrast 16.47:1 light, 14.74:1 dark. **(2) ToC depth 4 included**, decided by *listing all 41 `####` first*: **none is a one-line aside** — they are the power-play formations, the kill shapes, and several carrying a safety line (*"The crease is the one line you don't cross"*). Excluding them hid **29 of `special_teams`' 49 sections**; it now shows 51 rows in three legible tiers. **(3) Permalinks — root cause found in Astro's own source:** `markdown-remark` applies `rehypeHeadingIds` **after** every user rehype plugin, so the id-gated branch could never fire, and the comment in `astro.config.mjs` asserting the opposite was simply wrong. Fixed by ordering the plugin explicitly. ⚠️ **A trap in that fix was hit and defused:** Astro's second pass rebuilds heading *text* from descendant text nodes, so a literal `#` child would have appended a stray hash to **every ToC entry on the site** — the anchor is now empty with the glyph from `::after`, verified across all 42 built pages and in Pagefind snippets. 0 → **1,638 anchors**. **(4) The 144px jump:** `scroll-padding-top` and `scroll-margin-top` both 72px and Chrome sums them; the *margin* was removed so the container property still covers the skip link and the home page's sections. Every target now lands at exactly **72**. **(5) The phone Contents jump** moved `scrollY` to **98.0% of the document**; a `↑ Back to top` row now sits at y=98, in the same viewport as the jump. ⚠️ **One brief-wording correction from measurement:** Back *did* restore position — *"no way back"* was true of on-page affordances, not of history, and the agent declined to claim more. ⚠️ **And it caught its own harness lying twice** — a reused Chrome profile's `localStorage.theme` made "dark" cells report light values, and a headless focus artefact nearly had it report the new anchors as invisible when focused. Both found by looking at the screenshot rather than the JSON. **`.warn-inline` verified pixel-unchanged in both themes**, including a specificity check that found 0 warn-inlines inside headings, so the interaction cannot occur. | round 51 |
| 🟡 | **Three elements are walls on a phone — two closed in round 52, the third is the owner decision** | `on_ice_communication`'s **"Screen"** bullet — **3,236px, 4.0 phone screens**, against siblings of 144–376px. The reviewer answered the question directly: **"no, the Screen bullet is no longer findable as a call."** It opens as one, then becomes four screens of rulebook comparison with two ⚠️ buried inside. · `rules_primer` **Key Takeaway 9** — **3,322px, 4.1 phone screens**. ⚠️ **And this round is the largest single contributor to it:** KT9 went from **1,795 to 4,321 characters in this diff (+2,526)**, and KT1 from 911 to 1,675. **I first reported KT9 as "~2,900 characters" — understated by half, in the flattering direction, and the gate caught it.** **Eight** of the ten exceed 1,150 characters; the rendered list is 16.4 phone screens. ⚠️ **RE-DERIVED at commit time, 28 Aug 2026, because `commit-gate` pointed out that ROUND 52 ITSELF GREW THE THING BEING DEFERRED:** KT9 4,321 (unchanged); KT4 **2,163** (was 2,106); KT6 **1,934** (was 1,901); KT1 **1,931** (was 1,675 — **+256 in this diff**); KT3 1,877 (unchanged); KT5 **1,634** (was 1,592); KT8 1,612; KT7 1,480; only KT2 at 566 and KT10 at 389 are short. **Total 17,907 characters.** Four of the ten grew. **The row's own words apply to the row: *deferring this is defensible; deferring it on a figure that understates is not*** — so the figures are now current as of the commit that grew them. ⚠️ **A third measurement trap, met while re-deriving:** my first pass returned **KT10 = 8,754** because the split ran to end-of-file and swallowed the Sources footer. **Measure the whole item, stop at the section's end, and sanity-check any figure that is an order of magnitude off its siblings.** **Deferring this is defensible; deferring it on a figure that understates by 50% is not.** ⚠️ **And I then understated the COUNT in the very sentence recording that catch** — I wrote *"five of ten"* because I measured only each takeaway's **first line**; items that wrap were undercounted. The gate caught it on the third pass. **Measure the whole item, not the line it starts on.** Round 49's title was *takeaways that were essays*; that item was closed as an owner decision on the grounds that the length **is** the four-book divergence, and this is the measurement the owner needs to revisit it. · `winger`'s new `####` paragraph — **3,582px, 4.4 screens, 5,281 characters, five ⚠️ inside** — **ROUND 52.** ⚠️ **Wall 3 (`winger`) was ALREADY FIXED — the row was measuring a stale build.** Verified before touching anything: `#### Net-front and the crease` is now 12 elements, largest prose paragraph **493 chars**, all six ⚠️ blockquote-led, zero inline. At `7dec021` it was a single 3,156-char paragraph; `9e2e344` split it. **No edit made** — a fix applied twice is its own defect. ✅ **Wall 1 (`on_ice_communication`'s Screen bullet) RESTRUCTURED, not compressed.** Re-measured whole-element: **4,572 chars against siblings of 189–548 — 8.3× its largest sibling and the largest single element in the document.** Split into a 998-char call (0 ⚠️) plus a new `#### Moving a screener — what the four books allow` (4,010 chars). **Nothing lost, and it was PROVEN**: the original was cut into 19 contiguous segments summing to exactly 4,572, every one substring-matched in the new text, with a line-by-line character reconciliation for the +438 delta. Both ⚠️ now lead blockquotes **immediately after the claim each qualifies** — previously both were inline mid-paragraph, the shape that renders with no callout. ⚠️ **A real cost, flagged by the agent against itself:** `####` headings render *smaller and dimmer than the body text they introduce* and are **invisible to the on-page ToC** (`TableOfContents.astro` filters to depth 2–3), so four rulebooks of penalty material now sit under the least prominent heading in view. `###` was rejected as structurally false. **Needs `site-reviewer`.** **Wall 2 (`rules_primer` KT9) untouched — it is the owner decision below, and the standing ruling is do not compress.** | round 51 |
| ✅ | **ALL FOUR extractions are now PROVEN faithful — the caveat that qualified dozens of findings is retired** | **`md5(sources/nhl_rules.txt)` is byte-identical to a fresh `pdftotext` of the live published PDF** (`5b0ef3b928ea772fa5f8bc1a7ece577e`, zero diff lines), refetched 28 Aug: HTTP 200, 21,695,323 bytes, 232pp, no redirect. A bulk pass matched **209 quoted strings** from `content/` verbatim. ⚠️ **This retires "the extraction may not be the book" for the NHL ONLY.** `iihf_rules.txt`, `usah.txt` and `hc.txt` carry exactly the same unproven status the NHL file carried until now — and several of this round's load-bearing findings are **negatives** in those three (Hockey Canada writes no ground-holding entitlement; USA Hockey writes no goaltender-vision provision; Rule 69 is on no IIHF penalty table). **A negative in an unverified extraction is the weakest evidence this corpus accepts.** **✅ DONE, round 52 — all three refetched, all three reproduce with ZERO diff lines.** IIHF v1.1 (228pp, `b8bc551a…`), USA Hockey 2025-29 (216pp, `04b8fae8…`), Hockey Canada 2026-2028 (167pp, `393cd232…`). **All four load-bearing negatives re-tested against the FRESH extractions and survive** — Hockey Canada's against **both** the plain and the `-layout` extraction, so interleaving is not hiding it. ⚠️ **One residual doubt, the IIHF's:** the mirror PDF and the on-disk PDF are byte-identical, **but both come from the same Belgian mirror** — a mirror hosting a doctored or superseded file would reproduce perfectly. **Only iihf.com can close it, and iihf.com serves a JavaScript shell** (HTTP 200, 47,528 bytes, `<title>\O/ IIHF</title>`, no rulebook text). |
| ✅ | **The USA Hockey Casebook gap is closed — and the Casebook ANSWERED a question three documents called unresolved** | Five documents carry the caveat that the corpus searched *"the two **playing rule** books"* and that *"the separate USA Hockey Rules and Casebook is not held here and was not searched."* **Round 52 fetched it — 476 pages — and it carries no goaltender-vision provision either:** the same two `"screen"` hits (625(a)(1)'s protective screen set on a **checker**, and a sled-hockey pusher rule) and `"vision"` only as peripheral, officials' and low-vision. **Narrow the disclosure from "not searched" to "searched, and it says nothing either"** in `on_ice_communication.md`, `rules_primer.md`, `playing_without_the_puck.md`, `goaltender.md` and `offensive_zone_play.md`. **✅ DONE, round 52 — ten disclosures narrowed across four documents, each now stating what was searched and what was found rather than being removed.** Provenance re-established independently: the PDF refetched, **200, 3,501,233 bytes, SHA-256 `09b96e5b…`, 476pp**, byte-identical to the extract, searched as a de-hyphenated whitespace-flattened copy so no negative is a wrapped-line artefact. **The goaltender-vision negative is UPHELD** — all ten Rule 625 situations read in full; `vision`'s 27 hits are all `provision`/`supervision`, peripheral vision, officials' field of vision, or low-vision classifications. ⚠️ **But the Casebook was not silent everywhere, and one narrowing became a CORRECTION:** **Rule 630, Situation 41** settles the delayed-offside own-goal question three documents called unresolved — *"Even if the defending team shoots, passes or deflects the puck into its own goal, a goal may not be allowed. This is also true in cases where the attacking team has nullified the delayed offside by clearing the zone."* **So USA Hockey is the one book of four that expressly writes the NHL's own-goal exception OUT**, and `rules_primer.md:791` saying *"Under USA Hockey it is not settled"* was **wrong**. The corpus's practical advice was right; its framing was not. ⚠️ **A source defect recorded rather than silently repaired:** Casebook Situations 40 and 41 both cite *"Rule Reference 630(d.3)"* — **the printed 630(d) stoppage list runs only to (2), so that sub-clause does not exist.** Same species as the NHL 82.2(viii) miscitation found the same day. **Three more situations found that cut against the corpus's expectations** and were carried: Rule 607/2 (a head-down opponent hit at speed **is** charging — the opposite of an amnesty), 604/2, 639/5. |
| ✅ | **`sources/README.md` documented a repair that silently does nothing** | ⚠️ **Instructions that manufacture false negatives — the worst defect class this corpus can have.** The IIHF ligature repair used `chr(26176)`/`chr(26928)`/`chr(27668)` — **晀 椰 气**. `pdftotext` emits **昀 椀 氀** (U+6600/U+6900/U+6C00). **Run verbatim it is a no-op**, leaving **725 mojibake tokens across 96 words** — `Of昀椀cial` ×162, `昀椀rst` ×74, `昀椀ve` ×40, `昀椀ght` ×20 — so searching for *official*, *first*, *five* or *fight* **returns absence for text that is present**. The file on disk is correctly repaired, so **only the documentation was wrong, which is worse: it would have failed silently for the next person.** Fixed, with a verification step added. **Second defect, same file:** it said Hockey Canada was extracted plain *"unlike every other file here"* — **`nhl_rules.txt` is a second one.** | | round 51 |
| ✅ | **The corpus's only `[sic]` is read aloud as the word "sick"** | `faceoffs.md` quotes NHL Rule 76.7 as *"When a [sic] least two face-off violations…"*. The `[sic]` is **correct scholarship** — `source-verifier` rendered printed page 116 of the published PDF at 600 dpi and the book genuinely omits the *at*, with the control *"has at least touched the puck"* four lines above in the same typeface. ⚠️ **But `scripts/md_to_speech.py` has no handling for it, and this is the only `[sic]` in the corpus**, so a listener hears *"sick"* mid-quotation. Mitigated at the point of use — the next sentence glosses it (*"The missing word is the rulebook's own — it means *at* least two"*) — which is why the gloss is there. **The work is a `md_to_speech.py` rule that renders `[sic]` as something a listener can parse, or drops it from the spoken form while keeping it in the written one.** Small, and it will matter again the next time a rulebook typo has to be quoted faithfully. **✅ DONE, round 52 — premise held, reproduced before changing anything:** `strip_inline_markdown` left `[sic]` alone, `SYMBOLS` then dropped the brackets, and the bare token `sic` survived as plain letters, which is precisely why `find_residue` is structurally blind to it. **Spoken, not dropped** — the file's own idiom is to drop what carries no meaning aloud and to speak what carries a signal, and `[sic]` IS the signal that the broken clause belongs to the NHL and not to the narrator. One `LEXICON` row, `", as printed in the original,"`. **The regression test was proved non-vacuous**: against a copy with only the fix removed it reports 2 failures, with the fix 0. Renderer actually run — 54 chunks, all well-formed, `sic` absent from the emitted SSML; full corpus 1,695 chunks, the row fires exactly once. ⚠️ **Untested: how it SOUNDS.** No audio was synthesised, so whether the comma-comma aside reads as an aside rather than as part of the quotation is unknown. ⚠️ **The row matches literal lowercase `[sic]` only** — `[Sic]`, `[SIC]`, `[sic!]` would fall back into the old failure; none exists today and nothing gates against one arriving. | round 51 |
| ⬜ | **Roman clause markers are read aloud as the letter "eye"** | **Found in passing while fixing the `[sic]` row, in the very same paragraph.** `faceoffs.md`'s Rule 76.7 passage emits, verbatim into the SSML, *"— (i) any player other than the centre entering the face-off circle, and (ii) any player crossing into the area between the hash marks —"*. `md_to_speech.py`'s `_clause_words` fires **only when a rule-citation regex captures the clause**; a bare `(i)`/`(ii)` enumeration in ordinary prose is claimed by nothing, **so a listener hears "eye" and "eye eye" where a reader sees "one" and "two"** — in a passage enumerating the two acts that draw a bench minor. ⚠️ **Not a one-line fix, which is why it was flagged rather than swept into that change:** a bare `(i)` in prose is not always a clause marker, and the corpus uses parenthesised romans in at least two senses. Needs its own care and its own regression test. | round 52 |
| ✅ | **A negative existence claim resting on four documents this repository cannot open — and it was FALSE** | `switching_positions.md:40` and `:487` assert that *"the rulebooks and casebooks (NHL, IIHF, USA Hockey and Hockey Canada) … pass over the subject"* of switching positions. **No casebook of any of the four is on disk** — the style guide already records that the USA Hockey Casebook never has been — and none is now cited in that file. So the claim is unfalsifiable from this repository **in the direction that matters**: a casebook could cover the subject and nobody here could tell. ⚠️ **Do not delete it** (non-negotiable 3) and do not rewrite it blind — the agent that found it declined to, because rewriting would be *authoring a new claim about books it cannot open*. **The work is either to obtain a casebook or to narrow the claim to the playing-rule books actually held**, which is the form the corpus already uses elsewhere (*"a search of the two playing rule books… the separate Casebook is not held here"*). **✅ DONE, round 52 — the claim is FALSIFIED, and not in the direction the row expected.** The row worried the claim was *unfalsifiable*. It was worse: **falsified, and already falsified by the document's own body.** Line 245 of the same file quotes the USA Hockey Glossary defining a *Temporary Goalkeeper* — a rulebook describing a position change, quoted inside the document asserting the rulebooks do not touch the subject. **Two real hits, both new this round:** USA Hockey **Casebook Rule 203(a), Situation 6** (p.26) — a dressed substitute goalkeeper may play out, but *"once a player has been designated as a goalkeeper, they may not participate as a skater unless added to the scoresheet… and the team is assessed the bench minor"*; and **IIHF Situation Handbook, Situation 8.9** (Rule 5.3) — with both goalkeepers gone a team may dress *"any one of their eligible registered skaters as a goalkeeper"*. ⚠️ **The reverse direction was the reader-facing defect:** the corpus already carried 203(d) (you may not put the pads on) but **not** that taking them off costs a bench minor. Now in the body, facts, Common Mistakes and Key Takeaway 8. **The narrower negative survives and is what the claim now asserts** — no book offers *developmental* guidance on how a switch is made. Every negative re-tested against books flattened to one whitespace-normalised line, so none is a wrapped-line artefact. **A pre-existing Sources gap surfaced from the both-ways check:** the IIHF playing rulebook was relied on at three lines and was not in the Sources list at all. **Related, and now CONFIRMED as a defect rather than merely untidy:** `how_to_watch_hockey.md:194` presents NHL 82.2 (i)–(iv) as *"The procedure in Rule 82.2"* — **the rule runs to (viii)**, and the omitted (v)–(viii) include the bench minor for changing after the signal, the five-second/onside requirement, and **(viii)'s disapplication of two of them in the last two minutes and overtime** — squarely the subject of a document about watching endgames. *(NHL (viii) also miscites its own list as "points (1) through (5)" when it is lettered (i)–(viii).)* | round 51 |
| ✅ | **Twenty-one files linked the superseded IIHF revision — adjudicated, swept, and the false disclosure retracted** | Every content file citing the IIHF rulebook links `…2025-26_iihf_rulebook_19052025-v1.pdf` — **that is v1.0** — while `sources/eiha_inhouse.txt`'s Introduction records that **EIH, SIHA and BUIHA adopt Version 1.1, July 2025**. Zero files link the v1.1 mirror. ⚠️ **Not a reader-facing error today**: the three passages newly cited this round were confirmed **identical in both revisions**, and the corpus verifies against `iihf_rules_v1.1.txt` on disk. But the link text says *"2025/26"* with no version and serves the **superseded** revision to the readers whose book it actually is. **The work is: confirm a stable v1.1 URL, update the 20 links, and record which revision each quotation was verified against.** → `source-verifier`. | round 51 **✅ ADJUDICATED, round 52 — and the answer inverted the question.** The brief weighed *"swap to the Belgian mirror"* against *"disclose that the IIHF does not serve v1.1 publicly."* ⚠️ **Both were wrong, because the second premise is FALSE: the IIHF does serve v1.1, from its own host.** Found and fetched twice: `blob.iihf.com/…/**3_the_iihf**/2025-26_iihf_rulebook_22122025-v1.pdf` — 200, 11,795,028 bytes, 228pp, MD5 `ca5e829a…`, `Version 1.1, July 2025` on cover and masthead. **It is publisher-original, not a mirror:** Producer `Adobe PDF Library 18.0` against the RBIHF mirror's `GPL Ghostscript 10.00.0`, and the mirror's broken fi/fl ToUnicode map (725 × U+6600) is absent from it. ⚠️ **Note the path is `3_the_iihf/`, NOT the officiating path the corpus links, and the filename still says `-v1` while the content says 1.1** — which is why nobody found it. **The v1.0→v1.1 delta is exactly ONE substantive change:** IIHF Rule 39.2(VI) (*"If a penalized Player does not go directly to the penalty box…"*) is deleted in v1.1. **The corpus never cites IIHF Rule 39** — every "Rule 39" in `content/` is the NHL's — and 14 distinctive IIHF quotations were spot-verified present in v1.0, v1.1 and the live linked PDF alike. **So no reader following the old link fails to find a rule.** **The defect is therefore a FALSE DISCLOSURE, not a broken citation:** `uk_rules.md:34` asserts *"The IIHF's own site serves only v1.0 at its published link"* — **untrue as of 2026-08-28** — while the same line claims every IIHF rule is verified against v1.1. **Bonus: the mirror is EXONERATED.** Round 52 had recorded a residual doubt that both v1.1 PDFs came from the same Belgian mirror, so a doctored mirror would reproduce perfectly. Sentence-set comparison against the official file leaves **zero unmatched prose** (all 28 residuals hand-checked; every apparent mismatch a running-header split). ⚠️ **DEFERRED TO LAST: the swap is 21 files, nine of them currently held by running agents.** Re-run the grep immediately before staging — `switching_positions.md` GAINED the citation today, which is exactly how a sweep scoped to a stale file list loses a file. **✅ SWEPT, round 52.** Re-grepped immediately before applying: **21 files, 21 occurrences** — and `switching_positions.md` **was** among them, so the warning paid for itself. The new URL was **verified independently before being shipped to readers in 21 files**: 200, 11,795,028 bytes, matching the adjudication exactly. `uk_rules.md`'s disclosure — which asserted *"The IIHF's own site serves only v1.0 at its published link"* — is **retracted as false** and replaced with what is true: the IIHF does publish v1.1, just not from the officiating-section link it has served longest. The Rule 39.2(VI) delta is named there so no reader wonders what changed. Baseline row added with the MD5 and the publisher-original PDF producer; **the v1.0 row was kept and marked SUPERSEDED rather than deleted.** |
| ⬜ | **One document, twenty-six citations, five different labels — and only four carry the version** | Found by the agent that fixed the last five `statichub/8635` citations, which noted that those five are now **stronger on provenance than the twenty-one the sweep touched**. ⚠️ **One correction to its report: the round-52 sweep did NOT relabel anything** — it was a pure URL substitution, and the label variance is pre-existing. The finding stands anyway. Measured now: `[IIHF Official Rule Book 2025/26 (PDF)]` ×16, `[IIHF Official Rule Book 2025/26]` ×8, `[IIHF Official Rulebook 2025/26 (Version 1.1, July 2025)]` ×4, plus an italic and a no-space variant. **The target document declares *"Version 1.1, July 2025"* on its own title page** — verified twice independently this round — so the version label is true everywhere and stated in four places. ⚠️ **Judge before sweeping:** this is exactly the kind of uniformity pass that has manufactured defects here before, and *"Rule Book"* versus *"Rulebook"* is the IIHF's own inconsistency, not the corpus's. Needs `source-verifier`. | round 52 |
| ✅ | **"Existence in a book is not attribution to a book" — swept, and it was a CENSUS not a sample** | **Found by accident.** A `source-verifier` bulk pass matched 209 corpus quotations verbatim in the NHL text; one of them, in `faceoffs.md`'s Key Takeaway 1, was **Hockey Canada 6.2(a)'s wording presented as shared by three books**. The NHL says *"ejected from the face-off **circle**"*; USA Hockey says *"**the center of their team** shall be ejected"*. The **substantive claim was true** — three books do eject the centre — so no rules reviewer flagged it, and the string matched cleanly in the bulk pass **and was still wrong about who said it**. ⚠️ **Only reading the surrounding context found it, and the agent read context for 4 quotations out of 209.** The corpus carries hundreds of quotations attributed to one of four books; **nothing checks that a correctly-quoted string is credited to the book that actually printed it.** No checker can: `check_facts.py` validates shape, and a grep confirms existence. **✅ DONE, round 52.** Measured: **3,979 quoted strings; 2,687 sitting on a line that names a rulebook; 1,780 located verbatim** in the 8 primary texts. The high-yield subclass was done as a **census, not a sample** — all **112** lines in `content/` asserting shared wording across books were read individually, and 28 distinct assertions grep-verified in both books. **Most held** — 16 multi-book claims attacked and upheld, which is a result and is recorded so the next round does not re-attack them. **Seven misattributions found**, headed by a **CRITICAL**: `breakouts.md:982` calls IIHF 81.4 *"identical wording to the NHL"* when the IIHF has a **fourth exception the NHL lacks** (*"a Player with a broken skate"*) inside that very sentence — and **eight sibling documents say the opposite.** The round-10 shape exactly: a correction that reached everything except one Sources block. The rest are pronoun-level *"same words"* claims (`center.md:659`, `defender.md:704`, `body_contact_and_battles.md:909`) where the corpus **already has the right form** — *"materially identical"* — used correctly elsewhere and unpropagated here. ⚠️ **The method finding is the valuable part: two of the census's own initial "absences" were EXTRACTION ARTEFACTS** — NHL 27.8's exception continues **across a page break** and IIHF 20.4's sentence is **interrupted by a running header mid-clause**. A grep stopping at zero would have reported two fabrications that do not exist. Repairs dispatched. | round 51 |
| ✅ | **Unsourced prevalence claims — swept across all 37 documents, and the repair worklist is now its own row** | Round 51 removed the *"commonest net-front goal"* family from **eight** documents (it was generated once, in a coordinator brief, and stamped into all eight by agents that could not read each other's files). ⚠️ **The sweep was keyed to the surface forms it already knew.** The agent that finished it said so: it did not search *"most common"*, *"more often than"*, *"the usual case"*, *"typically"*. **Two survivors were named and left, both pre-existing at HEAD and so out of that commit's scope:** `goaltender.md:931` — *"one of the most common and least discussed causes of goals against"* — and `goaltender.md:928`. Neither is sourced; nothing in `content/`, `project/` or `sources/` counts goals by cause. **The work is a corpus-wide sweep for the CLAIM SHAPE, not for the phrases already found** — unsourced prevalence, frequency and ranking assertions of every wording. This is the third time this round a grep keyed to known vocabulary missed the same defect in unknown vocabulary. **✅ SWEPT, round 52 — twice, because the first agent died mid-edit on an API failure and its report was lost.** ⚠️ Its 12 surviving edits to `goaltender.md` were audited by the replacement rather than trusted: **sound in substance** (it labelled rather than deleted, per non-negotiable 3), three defects in form. **Measured sweep: 37 documents, 173 tier-A summary-layer hits across 35 documents, 531 prose hits**, using vocabulary deliberately not keyed to round 51's surface forms. **Four disclosures were attacked directly and all four UPHELD** — including `scanning_and_anticipation.md:571`, which the agent called the model the rest of the corpus should copy. **Not one claim was recommended for deletion; every finding is a label-or-rescope.** ⚠️ **The agent named the vocabulary trap against itself:** *"a prevalence claim phrased without any of my tier-A vocabulary is invisible to this pass — 'coaches see this every week', 'ask any goalie' all read as prevalence and match nothing I searched. That is the fifth time this trap has been named this session and my method did not escape it either; it only widened the vocabulary."* ⚠️ **And it named where the folklore will go next:** every replacement it proposes converts an unsourced *ranking* into an unsourced *attribution to coaches* — strictly better, because falsifiable and it names its evidence class, **but none of those attributions was verified.** *"A corpus-wide conversion of rankings into 'coaches say' is the next place folklore will hide, and it will look like rigour while it does it."* | round 51 |
| 🟡 | **The prevalence repair — `goaltender.md` done, and it found three defects nobody had briefed** | **16 edits, one file, net +26/−24. Six of the brief's ten line numbers were wrong** — the census's self-warning was correct. ✅ **The Overview miss (item 1) confirmed and fixed:** `:24` held the unhedged original of a claim already hedged at `:427`, `:437` and `:1102`. ⚠️ **THREE FOUND BY READING THE SUMMARY LAYER COLD, none in the brief:** **(M2)** Key Takeaway 8 said only *"Most North American rec leagues have none"* of the trapezoid — **but "no trapezoid" is not "no restriction"**: USA Hockey **614(c)** assesses the same two minutes for freezing the puck behind the goal line with the body entirely outside the crease, or anywhere outside the *"goalkeeper's privileged"* area, **which excludes the corners**. A listener hearing that takeaway alone concluded there was no restriction behind their net. **(M4)** Key Takeaway 7 said the goalie's voice is *"the most valuable defensive tool on the ice"* where its own body says *"the most valuable thing you do that is not a save"* — the summary layer ranking a goalie's voice above every defenceman's stick. **(m5)** *"the only clear view"* → *"the clearest view"*; "only" was simply false. ⚠️ **It REJECTED the census's own proposed replacement**, on the ground that *"the error goaltending coaches name most insistently at youth and rec level"* is an unsourced ranking **plus** an invented consensus **plus** a new scope claim — **three unsourced assertions where there was one.** It replaced the ranking with the **consequence** instead, which needs no authority. That is the pattern to copy. **No claim, caveat or disclosure was removed anywhere in the file.** | round 52 |
| 🟡 | ⚠️ **ANSWERED FROM THE GIT RECORD: one claim, four copies, ZERO corroborations — and the attribution repaired the TONE, not the sourcing** | **Raised by the goaltender agent against its own work, and it is the sharpest thing in its report.** It brought `:24` into line with `:427`, `:437` and `:1102` **because the brief said those three were the corrected form. It never verified that they are.** *"If the three siblings are the ones that drifted, I have just propagated the error to a fourth site and made it look settled — and the corpus now states it identically in four places, which the style guide warns is exactly what disguises a single unsourced claim as consensus."* The same applies to Key Takeaway 7, aligned to `:628` on the assumption `:628` is right. ⚠️ **This is the round-51 "commonest net-front goal" failure in a new form:** there, one claim reached eight documents and looked like eight corroborations. **Alignment work is a defect vector, not just a fix.** The claim to test is *"goalie coaches put almost every soft goal down to losing sight of the puck"* — and ⚠️ **it cannot be tested from this repository: there is NO goaltending TECHNIQUE material in `sources/`** — though there is plenty of goalkeeper **rule** text (`iihf_rules.txt` alone has 418 occurrences of *goalkeeper*, and `iihf_situations.txt` carries six worked Rule 69 situations), so the absence means only that `bvhs.txt` is missing.** Closing this needs the BVHS manual, the Korn articles and the Bertagna article fetched and grepped. **"Coaches say" is now the load-bearing evidence class at five sites in that one file.** | round 52 ⚠️ **The brief's premise was FALSE and `git` disproves it.** It assumed `:24` was aligned to three siblings *already in the corrected form*. `git show 6d253d8` shows **all four rewritten in that single commit, by the same pass** — there was no pre-existing correct form to align to. And `git log -S` traces the claim to **`00436ca`, the initial bulk generation**, then into the facts block and the summary layer by propagation. **So: written from memory once, copied three times, then given an attribution to an unnamed body of coaches in a fourth pass.** ⚠️ **"The attribution is not a repair of the sourcing; it is a repair of the TONE. The claim has never had a source, and now reads as though it does."** The round-52 agent's worry against its own work is **confirmed, not dismissed.** ⚠️ **The verification fetched the BVHS manual the repository does not hold** (45pp) and checked all 16 cited sources: **`"soft goal"` appears in NONE of them.** The nearest is Korn's *"too often goalies do not watch the puck"* and Bertagna's *"often lose sight of the puck"* — **frequency-of-FAULT claims, where the corpus makes a share-of-GOALS claim.** ⚠️ **One "coaches say" claim IS fully sourced and is the benchmark the other five fail:** Jeff Blashill, named, published, saying the frequency himself — *"Every coach does it, I've been guilty of it, too."* |
| ⬜ | ⚠️ **CONTRADICTED — the corpus SWAPPED "profly" and "hybrid", against the source it cites for the distinction** | `goaltender.md` says *"The dominant modern approach is **hybrid** — using the butterfly as a base but relying on reads"*, crediting Wikipedia's *Butterfly style*. **That page says the opposite:** the **profly** is *"the style most commonly used and taught"* and is the one using the butterfly *"as a base for the majority of their save selections"*, while ***"hybrid"* names how far a goaltender STRAYS from that base.** **The corpus's definition of hybrid is the source's definition of profly**, and the *"most commonly used and taught"* attaches to the term the corpus did not use. ⚠️ **And the source is itself restating** — the sentence carries a footnote marker — **so per the corpus's own trap 6 the claim should not rest on Wikipedia at all.** ⚠️ **Also unlocated: Korn's three steps are ENUMERATED but never RANKED.** The corpus's `Priority:` fact — *"out and square but still moving is worse than slightly shallow and completely set"* — is its own trade-off judgement, presented at `:161` as Korn's and sitting in the summary layer. | round 53 |
| ⬜ | ⚠️ **Three claims now rest on PAYWALL TEASERS, and the teasers are a trap** | All four InGoal citations were free when written and now serve a teaser plus a Stripe wall — byte counts have **quadrupled** since the baseline, so the redesign is recent. **Three claims sit below the wall**: the depth/near-post mechanism, the three RVH concerns, and smooth pursuits vs saccades — the last of which **names a primary the corpus does not** (Dr Chris Woo's work with Adin Hill). ⚠️ **The method warning matters more than the three claims:** *"InGoal's teasers are marketing blurbs written to describe exactly what is withheld. They are unusually well-tailored to what a verifier wants to find, and a verifier who greps the stripped text will get hits that LOOK like article body. They are not."* **Every claim resting on one is marked. Closing this needs a subscription, not another grep.** *(Three claims WERE located in the free portions and are verified.)* | round 53 |
| ✅ | **Prevalence worklist — 23 sites across two passes; both agents found defects nobody had briefed** | ⚠️ **`faceoffs.md` was the sharpest, and the agent proved it rather than asserting it:** it hit **both NHL Stats API endpoints the document names** and read the field lists — zone, strength, winner, `faceoffWinPct`, `totalFaceoffs` — **and no field records HOW a draw was won.** It then refetched the four coaching sources cited for technique; **none contains any ranking of draw techniques.** So the corpus's strongest form of the claim sat in the one document positioned to know it is unmeasurable. ⚠️ **`game_management.md:917` CONTRADICTED ITS OWN SECTION** — *"almost every hooking and tripping call is a player who used their stick as a substitute"* is a **motive** claim, asserted bare, **five paragraphs below** the same section's *"no study codes WHY a penalty was taken… nobody has video-coded penalties"* and its own `Convention:` fact saying penalty motive is unmeasured. **And `:947` promoted its own body's hedged *"one of the biggest"* to *"the most common"*** in the summary layer. **One repair used form 1 with a source read on disk** — USA Hockey Casebook Rule 640 Situation 2 on officials who *"go back and assess one minor penalty to each player"*, with the lead-in written to credit the book **only with what it says** (it criticises the practice). ⚠️ **The 0:40 figure was false precision** — an unsourced ranking plus a specific clock time with nothing behind it — and was removed with the instruction, reason and timing all preserved. **Nine sites fixed; nine more flagged for the census rather than swept.** | round 52 |
| ✅ | ⚠️ **The retaliation "divergence" I briefed DOES NOT EXIST — it runs backwards, and my own quotation would have introduced a half-rule** | I handed over an apparent NHL/HC/USAH divergence on who gets penalised after a whistle. **Adjudicated: contradicted.** The "wash" is **not USA Hockey's position** — it is the practice its own Casebook describes **in order to condemn it**, and USA Hockey's *directed* standard is the **same differential Hockey Canada directs**: *"the aggressor should be identified and assessed an additional minor penalty."* All five books point the same way. **Nothing added.** ⚠️ **And the IIHF 46.6 quotation I supplied was INCOMPLETE** — it dropped the trailing *"if the criteria for 'fighting back' with a few punches is not fulfilled"*, **which is the whole carve-out.** *"Had it been carried into the corpus as given, it would have been a half-rule."* ⚠️ **The search for the fix found something better:** USA Hockey Casebook **Standard of Play Situation 25** rules on the *exact* Hockey Canada fact pattern — *"both players should be assessed minor penalties for roughing"* — which **upgrades the corpus's existing line from a gamble on official malpractice to the book's own ruling.** ⚠️ **The agent then caught ITSELF:** its first draft said the non-retaliator *"should come out ahead"*, **Situation 25 contradicted its own edit**, and it rewrote — twelfth agent to catch itself. ⚠️ **An extraction trap worth keeping:** *"aggressor should be identified"* **crosses a line wrap and returns ZERO on a plain grep** of that occurrence. | round 53 |
| ⬜ | **Census claims that reach the RENDERED SITE — and a stale source comment no checker can see** | Found by propagation-grepping after a prose fix. ⚠️ **`site/src/data/diagrams.json` carries a RENDERED caption** with *"the most commonly missed assignment **in hockey**"* — four copies of that claim live in `defending_the_rush.md` and one is **on a page a reader sees**, unsourced and broader than the forechecking claim just removed. ⚠️ **And `site/src/diagrams/forechecking_systems.mjs:563` quotes, as the justification for drawing an arrow, a sentence that no longer exists in the corpus** — *"this is the single most commonly missed job on the forecheck."* **It is a source comment, invisible to every checker in the repo**, and it was found only because someone grepped for propagation. **Also live:** `body_contact_and_battles.md:862` states the defensive-zone-breakdown ranking **bare** while its owner `defensive_zone_coverage.md:719` carries the hedge — the style guide's *general-document-drops-the-specialist's-caveat* pattern. | round 53 |
| ✅ | ⚠️ **SAFETY: I briefed Hockey Canada's slew-footing double minor as a "ceiling". IT IS NOT A CEILING** | HC **8.8(b)** does forbid a major — *"No Major penalty may be assessed for slew-footing"* — which is what made "ceiling" look right. But **8.8(c) escalates straight PAST the forbidden major to a MATCH penalty**, discretionary on *"the degree of violence of impact (including the impact with the ice, goal, or boards)"* and **mandatory on injury**. ⚠️ **Carrying only 8.8(a)/(b) would have taught a reader that Hockey Canada treats slew-footing as a four-minute foul** — on the mechanism that puts a head on the ice. Full four-book ladder now in the body: NHL 52.2 match, no lesser tier; IIHF 52.2 major + automatic GM; USAH 639(b) *"the minimum penalty… is a major plus game misconduct"* with Casebook 639/5 *"A minor penalty is NOT an option"*. ⚠️ **Reverse propagation gap: Key Takeaway 8 ALREADY carried the correct tier including the match penalty. The summary layer was AHEAD of the body.** | round 53 |
| ✅ | **The shooting.md high-stick caveat closed — because the check was finally performed, and the book runs the OTHER way** | Eight greps of the USA Hockey rules **and** Casebook (`windup`, `wind-up`, `shooting motion`, `backswing`, `follow through`, `follow-through`) return **zero**; the single *"wind up"* hit is a penalty-shot run-up, not a stick. ⚠️ **The audit under-counted and the agent corrected it: it cited Rule 621 Situations "1–5"; Rule 621 has FIFTEEN**, all read. **Closing the caveat STRENGTHENS the warning**: Sit. 2 — *"It is not a requirement that a stick make contact above shoulder height for high sticking to be called"*; Sit. 3 — major + game misconduct ***or a match penalty*** for reckless endangerment. ⚠️ **The agent caught ITSELF writing only "a major plus a game misconduct"** — one half of a two-part tier, the exact defect class it was sent to fix. Propagated body → facts → Common Mistakes → Key Takeaway → **a new Sources paragraph, because shooting.md cited none of Rule 60.1, HC 9.5/7.6 or the Casebook despite quoting all three.** | round 53 |
| ✅ | **The accidental-trip relief existed — 1,800 characters downstream of the sentence it corrects** | NHL/IIHF 57.1, word-for-word identical: *"Accidental trips which occur simultaneously with a completed play will not be penalized."* The defect was **narrower than briefed but in two places, not one**: `rules_primer.md:361` had the relief as a trailing italic *"thing to look up"*, and **Common Mistakes :796 reproduced the same arrangement with no counterweight at all.** Cross-book negative re-derived independently: `accidental trip` and `completed play` = **0** in all three other books, with **all 8** USA Hockey and **all 22** Hockey Canada *"accidental"* hits read individually. ⚠️ **USA Hockey now positively sourced** — Casebook 639 Sit. 1: *"must the fouled player fall to the ice? **No.**"* **The book's own error is recorded, not repaired:** the situation says the rule reads *"trip or fall"*; USAH 639 Note 1 actually reads *"lose balance or fall"*. | round 53 |
| ⬜ | ⚠️ **THREE SAFETY REFERRALS handed over by the rules pass, each a penalty consequence** | **(1) Slew-footing** is *"a five-and-out under one book and a four-minute-or-match under another"*. **(2) USA Hockey high-sticking** reaches **major + GM or MATCH** for reckless endangerment, and Sit. 2 removes the above-shoulder-contact requirement entirely. **(3) Broken stick, goalkeeper** — the agent searched for a goalkeeper allowance and found none: Casebook Rule 605 reaches the goalie only at Sit. 5 (*which* stick), and Rule 301 Sit. 6 answers the same question again; **605(c) covers only where the replacement comes from.** So **on the rule as written a USA Hockey goalie who plays on with a broken stick takes the minor a skater would.** Now stated; the *"ask your league"* sentence kept verbatim as local practice. | round 53 |
| ⬜ | **Two audit rule-ranges were wrong, and a third divergence nobody had flagged** | ⚠️ **IIHF 40.5 is NOT a supplementary-discipline category** — the audit gave "40.2–40.5"; **40.5 is the *process*** by which referees pick the category after the game. Categories are 40.2–40.4. ⚠️ **`rules_primer.md` carried the IIHF referral negative while never naming the Disciplinary Code at all** (`grep -c` = 0), though 23.3–23.6 each say *"The respective process is outlined in the IIHF Disciplinary Code."* ⚠️ **And an unflagged divergence found only by reading 23.1 in full while chasing something else:** NHL *"Ten minutes are applied in the league records"* vs IIHF ***"Twenty (20) minutes"***. The agent's own note: *"A systematic four-book diff of every rule the document cites would find more of these; grepping claim-by-claim will not."* | round 53 |
| ⬜ | **IIHF filename/version ambiguity, flagged and deliberately not acted on** | Sources cite `…rulebook_22122025-v1.pdf`; the extraction is stamped **Version 1.1, July 2025**. ⚠️ **The agent did the right thing rather than the tidy thing:** it re-checked **every sentence it quoted against both `v1.0` and `v1.1` flat extractions** — accidental-trip, the four 23.x lines, the Category I/II/III headings, the *"Twenty (20) minutes"* line — **identical in both**, so the quotations are version-robust. It changed nothing and handed the filename question to `source-verifier`. | round 53 |
| ✅ | **Roman clause markers read aloud: CONFIRMED LIVE at 146, and 113 fixed** | The renderer already had the whole machinery — `ROMAN_TO_INT`, `_clause_words`, the word *"clause"*. **The defect was in the matching, not the conversion.** The `Rule`-prefixed pattern carried **two** clause groups; the bare (`10.2(a)(iii)`) and USA Hockey (`608(b)(iii)`) patterns carried **one**, so the second clause was left as literal `(iii)` for a voice to read as letters — **168 instances of that one shape in `content/`**. Three further causes: a space before the clause (`Rule 4.11 (a)(v)`, 21 sites); a latent identical gap in the USA rule (**zero live instances** — fixed anyway, since it is the same bug one edition away); and three-level `§19.1.2` orphaning its last level. ⚠️ **I nearly shipped a worse bug than the one I was fixing:** giving the USA pattern a second capture group without teaching its handler to *read* it would have **silently DROPPED the clause instead of leaking it** — invisible, where a leak is at least audible. | round 53 |
| ⬜ | **33 roman markers still reach the audio, and most of them SHOULD** | Of the 146, **113 are fixed and 33 remain.** ⚠️ **They are not a backlog — they are mostly correct.** The bulk sit inside **verbatim quoted rulebook enumerations** (*"the rule letters its own steps (i) to (viii)"*, *"(i) any player…"*), where converting them would corrupt quoted primary text. **Genuinely open:** the range/continuation form — `10.2(a)(iv) and (v)`, `(iii)–(vi)`, **17 sites** — where the leading clause converts and the trailing one is orphaned, giving *"sub-clause four-(v)"*; and `Interpretation 10(i)`, **1 site**, which no pattern reaches because the anchor word is not *"Rule"*. **Both need the preceding citation's context to disambiguate from a genuine list marker, which is why neither was attempted.** | round 53 |
| ✅ | **The renderer was run over the whole corpus — the round-52 SSML repair holds** | No round since 52 had run it, and the round-52 defect was that **one broken document failed all thirty-seven**. Now measured, not assumed: **37 documents, 1,763 chunks, 0 malformed SSML** under an XML parse of every chunk, self-test **127 assertions / 0 failures**. ⚠️ **The regression tests were proved non-vacuous by grafting them onto the pre-fix engine, where they fail 5×** — round 52's lesson was that the first test written for this renderer *"was vacuous and passed against the bug"*. **212 chunks changed.** Remaining unrecognised constructs: **9**, all pre-existing — the diagram symbols `● ○ ▲ △` and two `(d.3)`/`(e.1)` fragments. | round 53 |
✅ **CLOSED by `commit-gate`, which blocked the commit on it.** The guide had *"ten separate agents"* and *"eighteen instances"*; the owners support neither — round 52 measures **seventeen** sites and round 53's §*"Agents that caught themselves"* lists **four** bullets. **Fixed by removing the arithmetic, not by correcting it** — but ⚠️ **only in one of the two sentences at first: `commit-gate` blocked a second time because the section's opening thesis still asserted the figures 27 lines above its own correction. Appending a correction is not removing a claim.** Both now point at the owning records. A number copied out of its owner goes stale silently; a pointer does not — and this is the third time that lesson has been learned in the two files that state it.
| ⬜ | **The under-used family is AT LEAST 14 sites, not 10 — and the searches that built the map were lexical** | ⚠️ **Four live sites the two mapping passes missed, three of them in documents those passes had already visited:** `neutral_zone_systems.md:24` (*"the most under-used tool in amateur hockey"* — and its own §Regroups heading is **already fixed**, so the **Overview is now stronger than the section it summarises**, the reverse of the zone_entries defect); `time_and_space.md:427` (*"under-used at every amateur level"* — **same document whose delay claim was already fixed; the fix reached one site and stopped**); `playing_without_the_puck.md:410` (*"the most effective and least used move"* — ⚠️ **already carries the mechanism and kept the ranking anyway**, the exact hybrid the settled form resolves); `playing_without_the_puck.md:689` (*"your team's most under-used source of off-puck information"* — ⚠️ **the SAME claim as the `breakouts.md` goalie site just fixed, in a second document, and the two now DISAGREE in confidence**). Plus `project/pilots/keyfacts_pilot_breakouts.md:270`, a stale copy — not reader-facing, but **a template a future agent may copy from**. Also live and reported: `zone_entries.md:396` second sentence, `breakouts.md:764`/`:784`. | round 53 |
| ⬜ | ⚠️ **The prevalence family is defined by its GRAMMAR, not its vocabulary — and every pass so far has searched vocabulary** | The closing agent's own scope statement, and it is the most valuable line in the report: *"Every finding above is a string a grep could reach… The same defect written without those words"* — *"almost every wasted entry at rec and youth level"*, *"both are usually unsaid"*, *"nine times out of ten"*, *"players never…"*, *"you will see this every game"* — **matches no search yet run.** A pass grepping `usually`, `almost always`, `rarely`, `most players`, `nobody`, `everyone` **would find a strictly larger set.** ⚠️ **This is the same shape as CR-FACTS**, which took nine search methods to close because the first eight were lexical. | round 53 |
| ✅ | **A governing-body coaching source is ON DISK and UNCITED for the manoeuvre two documents teach** | Found by attacking the disclosure, not by looking for it. `sources/iihf_coachdev_off_tactics.txt` **chapter 19 carries a section titled "Delaying"** — IIHF Coach Development Level I — describing the same manoeuvre in the corpus's own terms (*"create time and space"*). `zone_entries.md` §5 cites **only Johnston & Walter, labelled "convention only"**; `time_and_space.md` cites neither. ⚠️ **One apparent conflict, checked and it is NOT one:** IIHF lists *"a quick stop, facing the centre of the ice"* against the corpus's *"do not stop. Stopping kills you"* — the IIHF passage is scoped to an attacker **cut off inside the zone**, the corpus sentence to **approaching the line**. **It means the corpus's flat "do not stop" is narrower than it sounds and must keep its scope wherever it travels.** | round 53 | **CLOSED — cited in `zone_entries.md` §5, and the gap was LARGER than briefed: §5 had no inline citation at all.** The Johnston & Walter entry credits that book only for *"the teaching keys on the delay's timing"* — which is §3, not §5. **§5 was wholly unsourced.** Source standing confirmed by a third independent fetch, byte- and hash-identical to disk. ⚠️ **My quotation was accurate this time — and still incomplete, in a new way:** the manual carries a *separate, fuller* **"Quick Stop"** subsection two pages later that the extract did not reach, with its own conditional — *"**If the defender is not able to stop as quickly**…"* and *"**Against a skilled defender**, it will be necessary for the puck carrier to move laterally immediately after the quick stop."* **That conditional is what actually resolves the conflict, and it is load-bearing.**
| ✅ | ⚠️ **The scope reasoning I passed on was WRONG, and would have made the corpus lie about a source** | The finder said the IIHF passage is *"scoped to an attacker **cut off inside the zone**"*. **The text carries no locative scope at all** — only *"cut off from moving to the net with the puck."* ⚠️ **Proved, not asserted: the manual demonstrably localises when it means to.** The immediately preceding subsection reads *"When in possession of the puck **in the offensive zone (behind the goal line or along the side boards)**…"*. Delaying has no such phrase. **The scope is situational, not geographic.** *"Had that reasoning been carried into `content/` as written, it would have been a false statement about the source."* ⚠️ **The conclusion survived on the better ground the source itself supplies** — the quick stop is conditional on out-stopping *one* defender, which is not on offer to a player alone at the line. **The right answer reached for the wrong reason is still a defect.** | round 53 |
| ✅ | **"Calls must be early and loud" — early is Cech's, LOUD IS NOT** | The article was fetched (HTTP 200, 170,021 bytes, full body, not paywalled) and the agreed-vocabulary and early-call limbs both **located verbatim**: *"A split second's delay can be the difference between breaking out of the zone and fishing the biscuit out of the basket."* ⚠️ **"Loud" is absent** — from the rendered body **and from the raw HTML** (checked; not a stripped-comment case). Cech writes *"hollers"* and *"a louder voice"*, both **narrative, neither an instruction.** *"Loud beats clever"* is **this guide's own call discipline**, carried as house convention and **not misattributed anywhere** — but with the source newly load-bearing, an unannotated Sources entry invited the inference. **Annotated explicitly, including the negative.** | round 53 |
| ✅ | ⚠️ **TWO NEGATIVES REFUTED — the corpus said USA Hockey writes no permission, and the Casebook writes both** | The 476-page Casebook arrived in round 52; this is the first round that searched it. **(1) "USA Hockey writes no fend-off permission" — FALSE**, at **8 sites** across two files. Standard of Play **Situation 6**: *"the player with the puck uses the free arm to fend off the opponent and maintain their body position."* ⚠️ **It is NARROWER than the NHL's in ways a reader must have** — you must control the puck, the position must be one you *"legally established"*, and it ends *"if they grab the stick, sweater or arm… or use the free arm to push off and create space, a penalty should be assessed."* **(2) "USA Hockey writes no puck-first carve-out" for tripping — FALSE**, and **WIDER than the NHL's**, which only downgrades a penalty shot to a minor. Rule **639 Situation 2** declines to penalise *"where the defending player has clearly attempted to and then played the puck."* ⚠️ **Its two limits are the safety-critical half and are now in the text** — the stick stays your responsibility after a poke check, the carve-out reverses if you lost the puck *because* you were tripped, and **Situation 4 denies it to a slide entirely**: leaving your feet is tripping *"regardless of who gains possession"*, the sole exception being knees dropped to block a shot. | round 53 |
| ✅ | **Five negatives attacked with the new book and UPHELD — and one of them got stronger** | Not a non-result: each was re-derived against the Casebook rather than assumed. **No screening/goaltender-vision provision** — all **fourteen** Rule 625 situations read, none touches a screen; ⚠️ **Situation 10 STRENGTHENS the flat bar** — *"the Referee shall have no alternative but to disallow the goal."* **No head-down exception for the checker** — and **Rule 607 Sit. 2 points the other way**, the head-down opponent being the *"vulnerable or defenseless"* one. **No waiver for turning into a check** — 608 Sit. 1 requires major + GM or match *"in every instance."* **No breakaway puck-first relief** — 616 Sit. 1–4 write none, and USA Hockey's relief is scoped *"under this rule"* to 639 and **does not travel to 616.** **31 disclosure statements inventoried across 14 files; 24 still true and left verbatim** — `uk_rules.md` and `defender.md` got no edits at all. | round 53 |
| ⬜ | ⚠️ **USA Hockey's two volumes CONTRADICT EACH OTHER on high-sticking, and the corpus states only one side** | Found by accident while checking something else. **621(Note)** defines the offence as carrying the stick high ***"and makes contact"***; **Casebook Situation 2** answers *"no"* to whether contact must occur, calling it where the stick is raised *"in an attempt to intimidate an opponent **or is careless in their actions**."* ⚠️ **The corpus currently carries the Casebook's side only.** The reconciliation the finder proposes — carelessness alone suffices, **but one of those two states must be present** — is its reading, not the book's words. ⚠️ **The README already records a second internal contradiction**: Situations 40/41 cite a sub-clause **630(d.3) that is not in the printed rule.** **This is a rulebook-typo/contradiction policy question, not a corpus defect to fix silently.** | round 53 |
| ⬜ | **Handover the sweep did the work for but could not apply: `goaltender.md:883`** | Its disclosure says the Casebook *"is not held here and was not searched"* — **stale since round 52.** ⚠️ **The agent checked the claim rather than merely flagging the staleness, and the negative holds:** the seventeen Rule 625 situations *"run to stick and bench interference and the crease bar, and write nothing about a screen or the goaltender's view."* Replacement text supplied verbatim, including the half that must survive — **no separate Hockey Canada casebook is held**, so that half still rests on the Playing Rules and their printed Interpretations. | round 53 |
| ✅ | **The prevalence census, run by GRAMMAR — 930 raw lines, ~430 distinct sites, classified** | The larger search the previous agent said was owed. **Fixed: 4 mapped sites + 6 more found in the sweep.** ⚠️ **The classification is the deliverable, because most of the family is legitimate and a uniform sweep would have wrecked it:** ~90 **rule-scope claims** (*"most rec and youth associations do not use the trapezoid"*) — sourced, style-guide-endorsed, **judged no change anywhere**; ~25 **already labelled** — *"these are the corpus's integrity story; do not strip"*; ~60 **technique or safety absolutes** (*"never turn your back to the boards"*) — ⚠️ *"softening any of these is a safety defect"*; 4 **sourced quotations** where *"almost nine times out of ten"* is the cited article's own wording; ~20 where the **mechanism is in the same clause**. | round 53 |
| ✅ | **A three-layer claim that ESCALATED AND DIVERGED between layers** | `neutral_zone_systems.md` carried one uncounted ranking in three layers with **different words**: facts `Never:` and body both said *"the most **expensive** habit in amateur hockey"*; **Common Mistakes said *"the most **damaging single** habit"*** — escalated *and* reworded. ⚠️ **The same document labels its neighbours** *"coaching observation, not a tracked figure"*, so it owns the correct form and did not apply it here. Fixed by extraction at all three sites. ⚠️ **And a self-catch worth the record:** the agent first drafted a repair reading *"the off-puck failure that costs most"*, then caught in its own re-read that this **silently swapped a frequency ranking for a cost ranking, neither measured, while pretending to add rigour.** Reverted before shipping. | round 53 |
| ✅ | ⚠️ **CRITICAL: "a goalie may carry on playing with a broken stick" was book-agnostic, and TWO books forbid it** | `rules_primer.md:425` carried it **bolded and unscoped**, closing *"A goalie is not required to drop it — the opposite of the skater rule."* ⚠️ **Read aloud alone — which is how the podcast delivers a bullet — a USA Hockey or Hockey Canada goalie is told they may play on.** They take a minor and their team kills it with the backup cold. **USAH 605(a)** applies the drop rule to *"a player **or goalkeeper**"*; ⚠️ **and Hockey Canada 3.2(c) — the FOURTH book the referral never named — is an express bar: *"A goaltender may not continue to play with a broken stick of any kind."*** The safety reviewer found it **by grepping a fourth book on a question framed as three-book.** The permission is NHL 10.4 / IIHF 10.4 only. | round 53 |
| ✅ | ⚠️ **`goaltender.md` said NOTHING about broken sticks — zero hits for "broken" in 1,127 lines** | *"The position document a goalie actually reads said nothing about the one rule in the book that is written differently for them, in three of four books."* **All four layers empty** — body, facts, Common Mistakes, Key Takeaways. Now carries the goalie-facing item, a `Rule:` fact, a Common Mistakes entry and six source citations. ⚠️ **And the answer to "so what do I do instead?" came from the books rather than from improvisation:** a teammate-handed **skater's stick is legal** (USAH Casebook 605 Sit. 5, HC 3.2(c)) — with a Hockey Canada trap the corpus had nowhere, **Interpretation 1 to 3.2(c)**: if a teammate *slides* the stick and the goaltender **picks it up**, that is a minor under 10.6(a), and none if they do not. **Leave a slid stick where it lies.** | round 53 |
| ✅ | ⚠️ **A NEW EXTRACTION FAILURE MODE — page furniture injected INTO the middle of a sentence — and it defeated three readers in a row, including me** | The safety reviewer reported IIHF 10.4 *"truncated mid-sentence"* in its own re-extraction and **correctly refused to weaken the corpus claim on the strength of it** (non-negotiable 3), referring it out instead. ⚠️ **I then read the canonical `sources/iihf_rules.txt` with too short a `sed` window and concluded the paragraph was MISSING ENTIRELY — and that the corpus was asserting a false equivalence.** ⚠️ **All of that was wrong. Whitespace-flattening recovers the sentence intact**, and IIHF 10.4 carries the NHL's permission **word for word**: *"A goalkeeper may participate in the play using a skater's stick until such time as they are legally **03** provided with a replacement goalkeeper's stick. **SECTION · EQUIPMENT** For an infraction…"* — **a page number and a running header injected mid-sentence.** **The corpus's claim at `rules_primer.md:432` was correct all along, and no edit was warranted.** ⚠️ **This mode is not in the documented three** (hyphen-joins · two-column interleaving · both-at-once): it defeats plain grep, `-layout` grep **and** line-window reading, and only a flattened read with a wide window recovers it. **Add it to `sources/README.md` and the style guide.** | round 53 |
| ✅ | **Two safety findings referred out, in files the reviewer did not own** | **`equipment.md:346`** states *"**Your goalie is the exception**: under Rule 10.4 a goalkeeper may carry on with a broken stick"* and qualifies it only with *"USA Hockey Rule 605 is narrower."* ⚠️ **Hockey Canada 3.2(c)'s express bar is absent — the same critical, in a second document.** **`body_contact_and_battles.md:1129–1137`** — the penalty reference table has rows for hooking, slashing, holding, interference, cross-checking, roughing, high-sticking, tripping and charging, and ⚠️ **no slew-footing row**, in the document whose own sibling calls slew-footing the foul that *"grows straight out of a legal battle position."* | round 53  — **closed round 53. ⚠️ This row was STALE AND `commit-gate` CAUGHT IT: both findings were already repaired on disk** — Hockey Canada 3.2(c) is quoted in full at `equipment.md:346`, and the slew-footing row is present in `body_contact_and_battles.md`'s penalty table. **The plan misdescribed the very tree it was about to be committed with**, which is this file's recurring failure and the reason the 158-row sweep matters. |
| ⬜ | **A facts block at `HARD_MAX` that cannot absorb another safety rule — a structural finding, not a fix** | `goaltender.md` §Equipment Notes sits at **11 facts, exactly `check_facts.py`'s `HARD_MAX`.** The goalie-facing broken-stick rule **could not be given a fact in its own section**, and the five neck-laceration lines are all safety-critical, so ⚠️ **non-negotiable 1 forbids evicting one to make room.** The `Rule:` fact went to the adjacent skater-facing block instead. **The standing rule is that a cap must never evict a rulebook fact — split the section.** That section now needs splitting before it can take another. | round 53 |
| 🟡 | **GATE STEP: the four-book quantifier sweep — RUN, and 80 of 107 are clear** | **Census on the final staged diff: 107 penalty-bearing four-book quantifier claims across 24 files.** Two verifiers took the ten highest-count files and extracted the claims themselves. **Group A (`rules_primer`, `body_contact_and_battles`, `risk_management`, `defensive_zone_coverage`): 52 propositions, 52 confirmed, ZERO contradicted.** Group B (`center`, `defending_the_rush`, `on_ice_communication`, `faceoffs`, `forechecking_systems`, `goaltender`): 34 extracted, 28 reached, 25 confirmed, **3 quantifier errors — all now repaired.** ⚠️ **Both agents refuted one of their own findings**, one by printing a whole rule block. ⚠️ **STILL OPEN, and stated precisely: (a) 27 of 107 claims, in the fourteen files carrying one to three each; (b) ADDED LINES ONLY — a claim that became wrong because a DELETION removed its qualifier is invisible, which is the exact failure mode this row was written about; (c) only the CONJUNCTION of a quantifier with a penalty word, so a wrong "all four books" about a face-off location, a crease dimension or an offside test does not appear.** ⚠️ **And one agent's own caveat: it caught itself twice believing a truncated window, and says a third such case would still be in its report as a confirmation.** |
| ✅ | ⚠️ **FABRICATED PRECISION: "it goes away in about three sessions" had no owner and no source** | `on_ice_communication.md:456` (facts) and `:466` (body). **Not in the style guide's owners table**, and a corpus-wide grep returns only these two lines plus two unrelated uses. ⚠️ **The agent then FETCHED all four "Building the habit" sources rather than inferring the absence** — all HTTP 200 (53,818 / 132,447 / 970,307 / 54,599 bytes), comments and tags stripped, searched for `three session|3 session|self-conscious|sessions|weeks|practices`: **no timeline, no session count, no self-consciousness claim in any of the four.** **Non-negotiable 1.** ⚠️ **The claim survives and only the invented number is gone** — *"How widespread it is, and how long it takes to fade, have not been counted — none of the coaching sources at the foot of this document measures either."* | round 53 |
| ✅ | ⚠️ **A document's OWN owned measurement pointed against its Overview and its Key Takeaway — and neither had noticed** | Found outside the brief. `scanning_and_anticipation.md:11` and **KT2 `:559`** both read *"most players spend it watching the puck approach."* ⚠️ **The same document's KT10 carries Berg et al. (2025): professionals *"took at least one scan in only 61% of those receptions."*** **So among the only population anyone has measured, a MAJORITY DID scan.** The claim is uncounted for amateurs **and contradicted in spirit by the corpus's own owner-fact**, sitting in the two most-extracted layers. ⚠️ **The repair caught itself too:** its first draft read *"spends it on nothing"*, which **destroys the need for the final look at the puck**; shipped as *"spends it on information you already have."* | round 53 |
| ✅ | **Two documents each claimed the "most improvable" crown, in direct contradiction, neither measured** | `scanning_and_anticipation.md:32`/`:41` said scanning is *"the most improvable thing in your game"*; `faceoffs.md:60` said faceoffs are *"the single most improvable skill in hockey."* ⚠️ **Both fixed by extraction, and the faceoffs one is the better lesson:** its 22-point-spread arithmetic is real, well-sourced and preserved verbatim — **the spread proves the skill is LEARNABLE, not that it beats every other skill**, which would need the same spread computed for every other skill and nobody has. Now: *"nobody has computed that spread for any other hockey skill, so treat 'the most improvable skill in hockey' as a coaching claim and this number as the thing that is actually measured."* ⚠️ **KT6 carried a SECOND unmeasured superlative nobody had named** — *"their only closed skill"* — which is **arguably false** (a penalty shot is closer to closed). | round 53 |
| ✅ | ⚠️ **A repair that nearly created the style guide's OWN named "worse than a bare omission" defect** | Fixing the six unscoped `Rule 76.2` facts citations, the agent's first draft scoped them to *"NHL and IIHF Rule 76.2"* alone — ⚠️ **which positively implies the other two books have no such rule, while it was holding their text proving they do.** Caught re-reading its own edits and rewrote all four before running the checkers. **`check_rule_scope.py` on 76.2: 6 unscoped units → 2.** ⚠️ **It also refused to guess on the remaining two** (`:117`/`:118`, composites drawing on 81.2 as well, where NHL 76.2's text does not state the period-start case at all) — **unscoped beats wrongly scoped, and it said so.** **It read four rulebooks rather than copying "NHL" from the body**, and surfaced a real divergence for `rules-verifier`: under **USAH 612(d)** and **HC 6.3(d)(vi)** *"any attacking player"* entering the zone moves the draw; under NHL/IIHF 76.2 it takes the point men. | round 53 |
| ✅ | ⚠️ **M3(b) TESTED AND IT WORKS — the one thing the agent could not check itself** | Its closing hand-off: *"whether `md_to_speech.py` carries it into the takeaways segment is the whole point of adding it. **If the pipeline drops it, M3(b) has failed and I will not know.**"* **Run centrally.** ⚠️ **The premise is confirmed: Common Mistakes and Key Takeaways are SEPARATE CHUNKS** (033 and 035), so a disclosure in the former genuinely **would not** have reached the latter. And the preamble renders correctly — chunk 035 opens *"Key Takeaways. Nobody publishes a ranking of amateur mistakes… that is coaching observation rather than measurement. **First,** The puck carrier is…"* — **plain speech, no markup leaked, ahead of item 1.** **The structural first is sound.** | round 53 |
| ⬜ | **Prevalence claims one category WIDER than the measurement under them — a third instance of the same shape** | `offensive_zone_play.md:19` and **KT2 `:971`** call the low-to-high pass *"the most valuable **action** in offensive hockey"* — ⚠️ **the data behind it says *"far ahead of any other PASS"*** (Passing Project, 15.50%, 51,308 attempts, 5v5). **Action ⊃ pass, so the superlative is one category wider than the measurement.** Deliberately not fixed: *"the provenance note at `:135` is the corpus's best and narrowing the headline would touch two layers plus that note; it needs a decision, not a reviewer's edit."* **Recommended fix: "the most valuable PASS in offensive hockey", which is precisely what is measured.** Same shape at `skating.md:199` — the toe flick is ~⅓ of **the push's** power, which ranks it **within the push**, not against everything else. | round 53 |
| ⬜ | **A style-guide gap confirmed absent by grep: rigour in the numeric layer does not transfer to the prose above it** | `grep -iE "prose layer\|numeric layer\|superlative\|does not transfer"` on `content_style_guide.md` returns **nothing.** The guide covers folklore, number ownership and *"qualifications travel with values"* — but **has no line saying that a scrupulously-sourced figure does not license the superlative sitting on top of it.** ⚠️ **Three instances this round**: faceoffs' 22-point spread, `offensive_zone_play`'s action-vs-pass, `skating`'s toe flick. ⚠️ **And the pattern is inverted from what you would expect** — `offensive_zone_play.md` is *"scrupulous about its numbers"*, its provenance note called *"a model"*, **"which is exactly why the unmeasured prose claim slipped through."** | round 53 |
| ✅ | **Both Tier 1 negatives CONFIRMED — with positive controls, across five renderings** | **(1) Stick-to-stick hooking exemption:** `"stick-to-stick"` returns **0** in the USA Hockey playing rules, the USA Hockey Casebook and Hockey Canada across **plain, dehyphenated, `-layout` and `-layout`-dehyphenated** — with a **positive control of exactly 1 hit each** in the NHL and IIHF flat renderings, so the extraction is demonstrably live. Alternate phrasings (`stick on stick`, `only stick`) also 0. **(2) The waist floor:** an exhaustive `waist` census — NHL **10** hits (8 goalkeeper pants, then 60.1 and 60.3), IIHF **1** (pant padding), USA Hockey rules **1**, Casebook **3** (pants + Rule 640 roughing), **Hockey Canada 0 across FIVE independent renderings**, each with a `shoulder`=39 positive control. ⚠️ **And the inference holds for the right reason:** both non-NHL books say *"normal height of the **shoulders**"* — **a relative measure** — so a crouching opponent's protection is never withdrawn. | round 53 |
| ✅ | ⚠️ **My Casebook hypothesis REFUTED, twice — and for hooking it runs the OPPOSITE way** | I briefed: *"the pattern is that the playing rules genuinely lack the provision and the Casebook writes it. Assume that until you have checked."* ⚠️ **Casebook Rule 623 Situation 1 does the reverse** — *"A player hooks the stick of another player causing them to lose possession. Is this a legal action? **No.**"* The nearest thing anywhere is Appendix VI Standard of Play Situation 1, and it **expressly declines to create an exemption**: hedged (*"in essence"*, *"could be considered"*), limited to **lower** stick contact, not conditioned on checking. **And the waist floor is absent from both USA Hockey volumes too.** **Two more wrong premises of mine.** | round 53 |
| ⬜ | ⚠️ **SAFETY: the corpus actively coaches the stick lift, and carries NEITHER Hockey Canada escalation for it** | `rules_primer.md:359` teaches *"take the lift lower"*. Hockey Canada writes two escalations **for that exact technique**, in the interpretations to **Rule 9.5(a)**: an attempted stick lift causing **accidental contact to the head or neck that causes injury** is ***a double Minor***; and *"any aggressive, reckless, negligent or forceful action of the stick (e.g. **pitchfork action in lifting the stick**…) that results in contact to the neck or head area, causing injury"* is ***a Major penalty and Game Misconduct***. ⚠️ **`defensive_zone_coverage.md:658` carries both but WITHOUT the Junior/Senior scope; `rules_primer.md:359` carries neither.** ⚠️ **Honest-disclosure point the verifier raised rather than papering over:** the list states **no division scope of its own** — it merely sits inside Rule 9.5, titled *High-Sticking – Junior/Senior*. **The corpus's reading is defensible but is not what the book says, so it should be labelled rather than asserted.** | round 53 |
| ⬜ | ⚠️ **SAFETY + propagation, direction SUMMARY AHEAD OF BODY: a reader is told they are safe where they are not** | `rules_primer.md:811` (Common Mistakes) correctly carries **NHL 63.2(ii)** — a player who **deliberately** shoots or bats the puck out *"(from anywhere on the ice surface) during the play or after a stoppage of play"* takes the same minor. ⚠️ **Body `:399` states 63.2(iii) ONLY** — *"directly, non-deflected, out of the playing surface from his defending zone"* — and `:400`'s "other forms" list omits the limb. **`63.2(ii)`, `631(d)`, `deliberately shoots` and `from anywhere on the ice` appear NOWHERE in body lines 1–783.** **So a reader who reads §4 and the Key Takeaways but not Common Mistakes learns the penalty is defending-zone-only — and takes a minor believing they were safe.** Verified replacement wording supplied. | round 53 |
| ⬜ | **`rules_primer.md` is BEHIND its own sibling on the stick lift — a cross-document gap no checker looks for** | `:359` says *"**Hockey Canada** expressly permits the stick lift itself"*, naming Hockey Canada alone. ⚠️ **USA Hockey permits it too, and on a BROADER footing** — Casebook Standard of Play Situation 2: *"A player may lift the opponent's stick **at any time** provided they do not impede their progress."* ⚠️ **`body_contact_and_battles.md:214` ALREADY CARRIES THIS CORRECTLY**, including the broader-footing contrast and the Rule 623 Situation 1 caveat. **Provenance trace for the miss:** `rules_primer`'s Sources paragraph lists Casebook situations for Rules 301, 605, 607, 620, 624, 630 and 639 — **623 and Appendix VI are not among them.** ⚠️ **The verifier's own scoping:** *"Nothing in this method systematically compares a claim across the 37 documents… there is no reason to think 623 is the only rule where one document has been updated and its siblings have not."* | round 53 |
| ✅ | ⚠️ **A truncated grep nearly manufactured a defect, and the agent caught itself** | It provisionally flagged the facemask/cage escalation at Common Mistakes `:799` and KT10 `:933` as unsupported by the body — on a `grep | cut -c1-240` view showing only *"grabbing a face mask"*. ⚠️ **Reading the full line refuted its own finding:** body `:403` carries USAH 622(b)/(c), 404(b), IIHF 75.2(II) → Rule 21, Hockey Canada 7.1, and *"Never touch an opponent's cage, and assume you have no floor."* **No defect.** ⚠️ **This is the same mechanism as the `0.48`/`.48` false negative and my own too-short `sed` window on IIHF 10.4 — three instances this round of a TRUNCATED VIEW generating a false finding.** **The `cut -c1-240` habit needs to be in the style guide.** | round 53 |
| ✅ | ⚠️ **CRITICAL found UNASSIGNED: the signature catastrophic injury of the position was in body and facts and in NEITHER summary layer** | `goaltender.md` §Equipment Notes calls the neck laceration protector *"the signature catastrophic injury in your position"* and carries **five facts** on it — and **Common Mistakes and Key Takeaways mentioned it nowhere.** ⚠️ **Found while doing the facts-block split, not because anyone assigned it.** **Scope: every British goalie, adults included** — IIHF 9.12 mandatory *"for all Players in all categories"*; In-House 9.12 gives **no warning**, an immediate 10-minute misconduct, and escalation to a game misconduct — *"i.e. the readers most likely to have learned the position from North American video"*, since **USAH 304(g) exempts Adults.** Both layers now carry it. | round 53 |
| ⬜ | **A style decision the safety fix forces: `goaltender.md` Key Takeaways is now at 11, and the guide specifies 5–10** | The agent **refused to make this call silently and said why**: *"the non-negotiable is that a cap never trims a safety caveat, and merging someone else's takeaway is a judgement I should not make silently."* ⚠️ **Precedented — `breakouts.md` and `defensive_zone_coverage.md` are already at 11** — but still out of spec. **If ten is wanted, the decision is which of the OTHER ten to merge, not whether to keep this one.** | round 53 |
| ✅ | ⚠️ **My JOB 2 premise refuted: I said "a table cell has no room for a qualification." Not in THIS table** | I briefed that the slew-footing row might be unwritable because *"a table cell has no room for a qualification, which is exactly how 'double minor' becomes a ceiling in a reader's head."* ⚠️ **The agent checked instead of accepting it.** The cells in `body_contact_and_battles.md` §*What actually gets called* are **already multi-sentence prose carrying full four-book ladders** — the Interference cell **already uses the exact phrase *"In three books a minor is the floor, not the ceiling"***, and the Holding and High-sticking cells run to several hundred words with ⚠️ markers inside them. **The convention I feared was missing already existed in that table.** ⚠️ **It then wrote the row so my failure mode is structurally impossible: ejection FIRST, Hockey Canada LAST** — *"A reader who reads only the first clause of the cell gets the safe answer… the failure mode needs the double minor to be read first, and it cannot be."* **And it refused to let a cell be the sole home of a four-book divergence**, adding a full section with its own 8-fact block. | round 53 |
| ✅ | **The facts-block split done on the right seam, and four rule-and-exception pairs kept intact** | `goaltender.md` §Equipment Notes was at **11 facts, `HARD_MAX`**. ⚠️ **Split on the body's own seam, deliberately NOT on rule-set lines** — *"the style guide records that a by-book split relieved the wrong thing in round 52."* Now `### Protection, and the neck laceration protector` (**8 facts, all five neck lines intact**) and `### Your stick — paddle length, and what happens when one breaks` (**9 facts**, giving the goalie-facing broken-stick rule the block it could not have). ⚠️ **Four rule-and-exception pairs deliberately not separated:** neck mandate + dangler permission; paddle cap + exemption process; play-on bar + skater's-stick alternative; **skater's-stick permission + the Hockey Canada pick-it-up trap.** ⚠️ **And the hedges travelled into the facts layer rather than being trimmed** — both *"on the rule as written"* and *"ask your league"*. **Nothing dropped.** | round 53 |
| ⬜ | ⚠️ **`rules_primer.md:427` attributes a bench bar to Hockey Canada that Hockey Canada DOES NOT WRITE** | *"A goalie may not go to the bench for a replacement… **Both of those hold under USA Hockey and Hockey Canada too**"* — but **HC Rule 3.2 contains no such bar**: 3.2(b) is scoped to *"A player"*, and 3.2(c) says only that at the next stoppage the goaltender *"must receive a regular goaltender's stick"*, **without saying from where.** ⚠️ **Interpretation 1 to 3.2(c) runs the OTHER WAY** — it describes the carry-back as *"allowing the goaltender to receive a new goaltender's stick **without proceeding to the Players' Bench**"*: **permissive, not prohibitive.** ⚠️ **A sourcing gap, not a wrong instruction** — Hockey Canada makes the trip expensive by a different route (**10.1**'s delay-of-game list and **Interpretation 10 to 10.1(a)**, *"if they go, they must be replaced by the alternate goaltender"*), and that is the text the sentence should cite. **Handed to the agent that owns the file, with its finder's own caveat: re-grep, do not trust the line numbers — four agents were writing while it worked.** | round 53 |
| ✅ | **`check_absolutes.py` caught the reviewer's OWN new sentence** | It drafted *"not a two-minute mistake anywhere"* and the checker blocked it; shipped as *"**No book here** makes slew-footing a two-minute mistake."* ⚠️ **A prospective catch on text written minutes earlier — the mechanical checkers cannot see a missing half, but they can and do see an unscoped denial being born.** Also two precision corrections it made to its own first draft after re-reading NHL/IIHF 52.1: the books define **two alternative forms** (leg alone, *or* leg with the arm push), **not two required limbs**; and it **cut its own inference** that a battle "is" motion, leaving only what the interpretation actually says — that skating into it is an aggravating factor. | round 53 |
| ✅ | ⚠️ **The rendered caption was WORSE than reported: one string reached a reader THREE ways** | The unsourced ranking *"the most commonly missed assignment in hockey"* was not only the visible `<figcaption>` — **the same string was the SVG `<title>`, which is the accessible name for screen readers AND the text `md_to_speech.py` reads aloud.** ⚠️ **One source line, three delivery paths, and only one of them was visible to the person who reported it.** Fixed at `site/src/diagrams/defending_the_rush.mjs:413` and rebuilt so the generated JSON regenerated — **one-line diff, no hand-editing of generated data.** The mechanism was kept (*"missed because they do not have the puck and eyes go to the puck"*) and **"the most dangerous player *in the picture*" was left untouched — that one is scoped to the diagram and the diagram supports it.** | round 53 |
| ✅ | ⚠️ **The stale diagram comment: the DRAWING IS STILL RIGHT, and the caption had already anticipated the rewrite** | The comment justified an arrow with *"the single most commonly missed job on the forecheck"* — a sentence another agent had already rewritten in the working tree. ⚠️ **The verdict is the interesting part: the arrow still matches.** Route 3 draws *"F3 recovers towards the middle and replaces them at the blue line"* — **the clause that survived the rewrite unchanged**; only the rationale hanging off it changed. **Two things settled it:** the caption **already discharges the cardinal rule for that exact arrow** (naming three real alternatives and *"ask which yours is"*), and it **already said what the OTHER agent's new Common Mistakes sentence says** — *"the diagram anticipated the rewrite."* ⚠️ **The comment now quotes only the durable clause the arrow actually draws** — *"quoting the volatile sentence again would have rebuilt the same trap."* | round 53 |
| ⬜ | **The prose still carries the ranking the caption just lost — 3 sites, and the census never reached that file** | `defending_the_rush.md:237` (facts `Key:`), `:250` (body), `:873` (**Key Takeaway 7**) all still read *"the most commonly missed assignment in hockey."* ⚠️ **The round-53 prevalence census never reached this document** — its only working-tree change is an unrelated `Never:` line. The site agent fixed the rendered copy and **correctly refused to touch `content/`**: *"every page here rendered correctly, which says nothing whatever about whether what it says is true."* | round 53 |
| ✅ | **P3–P6 all built, with three decisions worth keeping** | **P3: 8 hub pages**, all previously 404. **No hockey claim authored** — titles and blurbs come from `structure.json` and generated `docs-meta.json`. ⚠️ **The breadcrumb now tells the truth**: `BaseHead.astro`'s own comment recorded that it had been cut back to Home → document *because an earlier version advertised eight section pages that 404'd*. **P4: 48 OG cards, 1200×630, no dependency added** — reuses the diagram pipeline's Chrome and the real rink outline *"so the cards cannot drift from the site's palette"*. ⚠️ **The naive one-Chrome-per-card approach measured 2.4s × 48 ≈ 2 minutes on a build already over two; driving one Chrome over CDP gives 48 cards in 4.1 seconds.** Degrades to the text preview where the manifest has no entry, **rather than pointing shares at a 404**. **P5: cite-this block. P6: RSS, 37 items, hand-rolled so the site keeps one production dependency.** | round 53 |
| ✅ | ⚠️ **Two shipping defects the site agent caught in its OWN work before they landed** | **(1)** The citation block sat inside `data-pagefind-body`, so **all 37 documents would have carried identical citation text into the search index.** Added `data-pagefind-ignore` and **verified in a browser**: searching `BibTeX` → *"No results"*, `"James Bloom"` → none, while `forechecking` → 32 and `icing` → 37. **(2)** The copy buttons are **created by script**, so a reader without JavaScript is *never shown a button that does nothing*; clipboard refusal falls back to selecting the text and saying *"Press ⌘C"* **rather than lying with "Copied"**. ⚠️ **And a deliberate omission on both P5 and P6: no dates.** No *"accessed on"* (a build-time date would claim the page was read on the day it compiled) and **no `pubDate` on any RSS item** — *"a build-time date would republish all 37 to every subscriber on every rebuild."* | round 53 |
| ✅ | **Zero round-52 regressions, measured PER PAGE because the corpus was moving** | *"Content was churning under me (eight agents), so totals alone would have been misleading; the test that matters is whether any page LOST a marker."* Heading permalinks **1644 → 1647**, `<h4>` 42 → 42, ToC depth-4 **84 → 84**, `scroll-padding-top` declarations **still exactly 1**, phone back-to-top 37 → 45 (**the 8 new hubs**). ⚠️ **No page decreased on any marker**, and every increase is confined to the ten documents other agents edited. `global.css` change is **134 insertions, 0 deletions** — a pure append. Deep link lands with **16px clearance, one 72px `scroll-padding-top`, not the 144px double-jump.** ⚠️ **Chrome-through-the-extension was refused three times; it fell back to headless CDP with a fresh incognito context per observation so `localStorage` never leaks — and every visual claim is from a screenshot it looked at.** | round 53 |
| ✅ | ⚠️ **THE LARGEST UNVERIFIED SURFACE IN THE CORPUS: nine negative-existence claims resting on nine searches nobody ran** | The census agent's own closing assessment, and it names this its biggest debt: it counted ~25 sites as legitimate **because a disclosure was attached**, verified the disclosure **existed and read plausibly**, and did **not** verify any of them is **true**. The nine: *"nobody publishes a breakdown of amateur mistakes"* · *"nobody publishes regroup counts at either level"* · *"nobody publishes a breakdown of rush goals by cause"* · *"…by the play that produced them"* · *"nobody publishes a count of what neutral-zone structure teams run"* · the power-play-shape equivalent · the forecheck-census equivalent · *"no source behind the ~one-third glide claim"* · *"no source documents these as verbal calls"*. ⚠️ **Per the style guide a negative existence claim is unfalsifiable by ordinary review and must be attacked when written** — and `review_history.md` §3.1 says this shape **takes four rounds to fall.** ⚠️ **Two of this round's best findings came from attacking exactly such a claim.** | round 53 | **ALL NINE ATTACKED: 2 refuted, 1 mis-scoped, 6 upheld.** ⚠️ **#2 REFUTED (professional half)** — Chu/Bystrom/Reyers/Wu and VanHAC count **826 neutral-zone regroups in 198 AHL games**, 315 full + 511 immediate. ⚠️ **#4 REFUTED** — Sznajder's All Three Zones splits 5v5 offence rush vs forecheck/cycle; Glin counts rush goals per team at **29% of non-empty-net goals, 2025-26**. **#3 upheld but MIS-SCOPED** — rush goals *are* counted publicly; nothing classifies them by which coverage failed. ⚠️ **#7 upheld and now EVIDENCED rather than asserted:** the 2016-17 Hockey-Graphs Forechecking Project **defined `Formation: (1-2-2, 2-1-2, 2-3, etc)` as a tracked variable and published no counts** — and NHL.com's own column says forechecking *"isn't officially tracked by the league."* **#6 upheld and `special_teams.md` deliberately left untouched — its existing wording was already accurate.**
| ✅ | ⚠️ **A disclosure that guarded the WRONG HALF of its own sentence — and the refuting source was already in the corpus** | `how_to_watch_hockey.md:45` read *"Most amateur players glide for around a third of their shift. **Professionals almost never coast except deliberately.**"* The disclosure at `:610` covered **only the amateur half**. ⚠️ **The professional half is measured, and it runs the OTHER WAY** — Bracko (BIOMECHANICS, Sept 2004, Table 1) puts **two-foot glide FIRST at 39% of on-ice time** — and ⚠️ **`skating.md:275` ALREADY CARRIES "39.0% of on-ice time" with sample and limits. A sibling document contradicted the one it linked to.** ⚠️ **And it refused to trade one overclaim for another:** the 39% counts a **balance position averaging 1.5s** that every other characteristic returns to, **not effort** — *"so it does not license 'professionals glide more than amateurs'. Right number, wrong concept, and I said so in the text."* **Also caught: `hockeyinstitute.org` is a RESTATER that rounds 39 to 40** — prefer Bracko's own figure. | round 53 |
| ✅ | ⚠️ **The corpus's own "hard 403" was a TOOLING ARTEFACT, and its own baseline already disagreed** | `on_ice_communication.md:145` says *"coachchic.com returns a hard 403, so it cannot be ruled out."* ⚠️ **With a browser UA it serves HTTP 200, 29,001 bytes — and `link_baseline.tsv` had ALREADY recorded it as 200. The body and the baseline disagreed and nobody had noticed.** *"A 403 is not an absence"* proved a third time this round. ⚠️ **The disclosure is still UPHELD** — the agent read the page and *"eat it" is absent from raw and stripped body* — **but the gap it flagged can now be closed on evidence rather than left open.** The page independently corroborates *"wheel," "reverse," "man on," "time"* as spoken calls. ⚠️ **One borderline it declined:** the page says coaches should reward *"naming outlets"* — **an activity, not the word "outlet" as a shout. Not sufficient; the dagger stands.** And it verified the Chicks with Sticks list in full: **all 11 credited calls present, none of the 14 daggered calls present.** | round 53 |
| ⬜ | **The one source that could overturn a verdict, and it is behind a wall** | Rasmussen et al., **4,886 goal-scoring opportunities across 192 SHL games** — `doi.org/10.1080/24748668.2020.1823161` returns HTTP 200 to `tandfonline.com/action/cookieAbsent`. ⚠️ **The agent read the wall, not the article**, verified the abstract via OpenAlex only, and said plainly that **its full tactical-variable list is unchecked and is *"the single most likely thing to overturn my #3 verdict."*** ⚠️ **A cookie jar defeats `tandfonline` — that was established elsewhere this round and was not applied here.** Also unlocated: *"Effective Offensive Play. Scoring Analysis of the 2005 World Championships and the 2006 Olympics"*, named inside a PLOS abstract, **"the strongest remaining candidate to refute #3/#4."** | round 53 |
| ✅ | **Search infrastructure findings worth recording so the next round does not rediscover them** | ⚠️ **Bing returned results wholly unrelated to the query — adult sites and Tanzanian business directories — for hockey-research queries, and is unusable.** **DuckDuckGo, Mojeek, Ecosia, Yandex, Startpage and five SearXNG instances all served CAPTCHAs, 403s or 429s.** **Yahoo and Brave worked.** OpenAlex `title_and_abstract` and Europe PMC were the productive research paths. ⚠️ **This matters for reading the six "upheld" verdicts:** the agent's own framing — *"six upheld verdicts mean six searches FAILED, not that six things are absent — and my searching was crippled by CAPTCHAs on most engines, so a differently-equipped round will likely break one of them."* | round 53 |
| ⬜ | ⚠️ **83 summary-layer rule citations name NO BOOK AT ALL — and the body usually does** | Derived from `check_rule_scope.py`, which does not headline it: of **1,716 summary-layer citations across 315 rule numbers**, **83 across 32 rule numbers carry an empty book scope.** ⚠️ **Sampled and CONFIRMED as the corpus's documented failure pattern, not a tool artefact.** `faceoffs.md` cites **Rule 76.2 six times in its ` ```facts ` layer with no book** — while its own body two lines away reads *"Every faceoff in the game happens at one of nine spots **(NHL Rule 76.2)**"*. **The scope is in the body and drops at the layer the podcast extracts**, where a listener hears *"Rule 76.2"* and cannot know which of four rulebooks. Worst: **76.2 (6 of 8), 76.7 (9 of 24), 81.4 (6 of 28), 76.4 (5 of 19), 82.1 (5 of 17)**. ⚠️ **This is a worklist, not a verdict** — the tool's own caveat holds, and a site naming one book because it discusses one book is correct. **Sample before sweeping; round 44 manufactured a divergence by ranking these and offering to fix them.** | round 53 |
| ⬜ | **Prevalence sites reported but NOT fixed, in files the census agent did not own** | Exact strings supplied. **`on_ice_communication.md:367`** *"your goalie is the best-positioned communicator on the ice and **most teams waste them**"* + **KT4** *"your goalie is your best communicator"* — ⚠️ **the third owner of a claim the other two were just moved off, and it now disagrees with both.** **`offensive_zone_play.md`** — one claim in **four layers including KT3**: *"most players scan in the wrong order"*; ⚠️ **that document is scrupulous about its numbers** (its 33%-vs-3% provenance note is called *"a model"*) *"which is exactly why the unmeasured prose claim slipped through."* **`skating.md` KT3** *"your outside edges are almost certainly your biggest single skating weakness"* — in a document whose **KT6 already carries** *"a coaching observation, not a measured finding."* Plus ~10 minors, **8 of them inside `facts` blocks, which `check_facts.py` structurally cannot see.** | round 53 |
| ❌ | ⚠️ **RETRACTED — the "stub signature" was GZIP, and I escalated it as the round's most consequential finding** | I briefed this as *"a bot wall or JS shell served with HTTP 200"* and told the next agent it outranked everything else open. **The agent I sent to extend it refuted it instead**, on one URL in one command: `curl --compressed` → **31,203 bytes**, `curl` without the flag → **169,385 bytes**, ⚠️ **byte-identical rendered content, 4,680 chars both ways.** The baseline's `bytes` column is a **wire-byte count**; rows captured with `Accept-Encoding: gzip` are 3.5–5× smaller. ⚠️ **That explains the "perfect correlation with no exceptions" completely** — every host that separated did so by a ratio of **2.2–6.9, the gzip band for HTML, not a stub band** — and it explains the entire signature table. **The two "proof" refetches were gzip-versus-identity of the same page.** ⚠️ **And the escalation was wrong on its own terms:** `curl --compressed` writes *decompressed* HTML to disk, so those greps were valid. *"Byte count alone cannot distinguish the two cases."* **All ten rows fetched: none was ever defective. 11 baseline rows asserting the stub story corrected, including the two the previous agent wrote.** | round 53 |
| ✅ | ⚠️ **"No disclosure in the corpus was manufactured by a failed fetch" — all 34 checked, and they hold** | The question the retracted escalation existed to answer, answered properly. Every disclosure traced is about the **underlying evidence** (*"no published study codes penalty motive"*, *"coaching craft, not a measured finding"*), **not about a fetch that failed.** ⚠️ **That is a result, not a non-result, and it upholds them** — non-negotiable 4 territory, and the fear was that some were false-modesty artefacts. They are not. | round 53 |
| ✅ | ⚠️ **Two disclosures OVERTURNED BY SIMPLY FETCHING — "a 403 is not an absence" proved again** | **Five PubMed rows** carried `UNREACHABLE: "Cookies must be enabled" wall (persists with cookie jar)`. **All five are reachable.** ⚠️ **The missing ingredient was WARMING the jar** — request `pubmed.ncbi.nlm.nih.gov/` **first**, then the article with `-b/-c` on that jar plus `-e` the site root as referer. PMIDs 11733126, 15063049, 33203240, 36817990, 38451112, all HTTP 200. A bare browser-UA fetch still returns HTTP 203 and *"Cookies must be enabled"*. And `howtohockey.com/crash-course-fitting-hockey-equipment/`, recorded **403 / 373 B**, is now **200 / 28,824 B**. | round 53 |
| ✅ | ⚠️ **A SECOND method finding worth as much as the first: grep the words, never the normalised number** | Searching the self-talk abstract for **`0.48`** returns **nothing**. The page writes **`.48`**. ⚠️ *"A verifier who grepped for the corpus's rendering of the number would have reported 'string not found' on a page that plainly carries the figure — a false negative with NO byte-count anomaly to warn anyone."* **Grep for the distinctive words, not the number.** Recorded on the row. **This is the false-negative mechanism the retracted stub theory was reaching for, and it is real.** | round 53 |
| ✅ | ⚠️ **50 PMIDs across 13 citation lines were NEVER body-verifiable — and the fix path is proven** | `europepmc.org` has **never served article text to a non-JS client**, so the 51 rows in `conditioning_and_recovery.md` (12 lines) and `mental_game.md:696` were cited against a page that renders **679 characters of navigation chrome**. ⚠️ **Not a defect in the claims — a defect in the evidence path**, and the replacement costs nothing: the **EBI REST API**, `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:<pmid>&resultType=core&format=json`. **Two claims verified through it already** — the Vigh-Larsen forwards-vs-defencemen clause located verbatim **and confirmed to sit in the same sentence as the near-50% figure, as the corpus claims**, and the 30–80 s shift range. **48 PMIDs remain.** | round 53 | **CLOSED — all 51 done, and the headline is a POSITIVE result: no quoted number in any of the 51 was wrong.** All returned HTTP 200 with `hitCount=1`, matching id and full `abstractText` via the EBI API, and all 51 baseline rows now carry that path. **Also verified free: the Vigh-Larsen full PDF**, whose introduction reads *"each shift typically lasts 30–80 s… **1–3**"* with references 1/2/3 being **Lignell, Brocherie and Bracko** — so the corpus's provenance note is right **from the primary rather than assumed.**
| ✅ | ⚠️ **THE RETRACTION IS WORSE THAN THE CORPUS KNEW — and only fetching the notice itself showed it** | The corpus said a cited meta-analysis carried *"very low certainty"* and was *"retracted"*. ⚠️ **The agent followed the reciprocal `commentCorrection` link and fetched the retraction notice (PMID 41975640).** The journal *"received concerns … that the article contains an erroneous analysis"*, and editors determined it ***"misrepresents the reported outcomes of two out of the three cited studies, and contains fundamental methodological flaws that invalidate the article's conclusions."*** ⚠️ **It was not withdrawn on a technicality. It was withdrawn as WRONG.** Added. ⚠️ **And it is the perfect illustration of this dimension's limit, in the agent's own words:** *"every figure I verified was quoted correctly, and the analysis producing them was found to be erroneous."* | round 53 |
| ✅ | **A numeric defect of exactly the shape the style guide names: right numbers, wrong denominator** | `conditioning_and_recovery.md` read *"**18 reports**, 3,365 injuries across 719,010 athlete-exposures."* ⚠️ **The abstract: *"18 reports … were included, with SIX reports contributing to the analysis."*** **The pooled figures come from six, not eighteen.** Fixed. **Plus four population traps and two omitted certainty caveats:** Fujisaki was **soccer** and its Sources line *"lacked the soccer flag its siblings carry"*; Gavel is **15 female para-ice athletes in simulated competition** where the corpus said only *"para hockey players"*; Liu's ***"low quality of current evidence"*** and Gu's ***"Certainty of evidence was low"*** were both omitted. **Two author initials were also wrong** (Csanaky M→L, Hou Y→C). ⚠️ **Reported, not edited:** the corpus writes *"the single most fractured site **in the game**"* for a figure drawn from **a US emergency-department dataset of 14–23-year-olds, 94.8% male.** | round 53 |
| ✅ | ⚠️ **The Sources line contradicted the body — and THE BODY WAS RIGHT** | `mental_game.md:702` claimed the meta-analysis showed instructional self-talk beat motivational *"only for fine motor tasks, with no significant difference for gross tasks."* **Fetched at the cited URL** (SAGE, 256,684 bytes, cookie jar warmed on the site root). The abstract has **two clauses, neither a null for gross tasks** — the second is *a different comparison entirely*, instructional-on-fine vs instructional-on-gross. ⚠️ **The word "matching" appears ZERO times on the page.** ⚠️ **And `mental_game.md:83` already said exactly the right thing** — *"it does not report which way that comparison leaned… instructional superiority is unestablished for gross tasks."* **The document knew; one line of its own Sources disagreed with it.** Corrected to match, labelled rather than deleted, with the full text recorded as unread (403 even with the jar; no OA copy exists). | round 53 |
| ✅ | ⚠️ **RASMUSSEN FETCHED IN FULL — and it makes the verdict STRONGER, not weaker** | The paper flagged as *"the single most likely thing to overturn my #3 verdict"* was reached: **HTTP 200, 328,537 bytes, 51,057 chars — the article, not the cookie wall** — plus Table 1 as the publisher's own CSV. ⚠️ **Verdict: it does not code by cause or defensive breakdown.** The complete eleven-field list is *attacking type, shooting zone, release time, goal/no goal, responsible forwards, responsible defenders*, plus five contextual fields. **"Attacking type" is `Possession / Rush / Puck steal`, defined purely by a clock** — rush-versus-established, already known to be published. ⚠️ **And "responsible defenders" is a FALSE FRIEND**: its definition is *"Shoot the last shot. Pass the last pass in offensive zone. Take away the goalkeeper's field of view…"* — **attacking players credited with creating the chance, not defenders who failed.** Zero occurrences of *breakdown, turnover, coverage, forecheck, transition*. ⚠️ **The authors name the gap themselves as work they did not do:** *"analysing attack with focus on time, space and **defensive balance** may also be of interest for **further research**."* **Population does not transfer:** 192 SHL games, elite male, **even strength only**, one top-ranked reference team, real-time single-operator collection where *"most of the situations were not reviewed"*. | round 53 |
| ✅ | ⚠️ **A CONCURRENCY CONTRADICTION CAUGHT — two agents wrote correct sentences into one block that contradict each other aloud** | Found only because the agent **diffed the whole file at the end rather than trusting its own hunks.** Another agent had written *"**Hockey Canada is the one book that bars it in terms**"* — where *it* is **playing on with a broken stick** (3.2(c)) — into the same block where this one was establishing that **three books write the bench bar and Hockey Canada does not.** ⚠️ **Both sentences are correct. Adjacent, and read aloud with no surrounding text, they are a flat contradiction.** Disambiguated to *"Three books write the **bench** bar in terms; Hockey Canada does not… the bar it does write, further down, is on playing **on** with a broken stick, which is a different rule."* It also tightened a third agent's *"the answer does not vary by book"* → *"the **practical** answer does not vary by book"*, **because as written it was a claim about the books, which is the opposite of what the bullet above now establishes.** ⚠️ **Its own standing warning: "If they edit `rules_primer.md` again after this, my disambiguation is stale and nobody will re-run that check."** | round 53 |
| ✅ | ⚠️ **My style-guide entry on flattening was WRONG, and the agent that hit the splice corrected it** | I wrote that a whitespace-flattened read *"recovers"* page-furniture splices. ⚠️ **It does not, in general.** In USA Hockey Casebook Standard of Play Situation 2 the running header sits **inside the sentence**: a flattened search for `"A player may lift the opponent"` **hits**, while `"and is considered a good defensive play"` returns **nothing**. **Flattening removes line breaks; it cannot remove words that were never a line break.** Where the splice is a header rather than a wrap, **only reading the window recovers the sentence** — so **a negative that has survived flattening near a page boundary is still not a negative.** **Corrected in both `content_style_guide.md` and `sources/README.md`.** | round 53 |
| ✅ | ⚠️ **Labelling the scope created a NEW hazard, and the agent went past its brief to close it** | Told to label Hockey Canada's stick-lift escalations as Junior/Senior rather than assert it, the agent did — **and then saw what the label does to everyone else.** *"A minor-hockey or female-hockey reader concludes there is no escalation for them. There is, and it is harsher."* **HC Rule 7.6 – Head Contact:** *"There is **no type** of legal contact to the head, face, or neck… **This rule supersedes any other rules**, with the exception of Rule 7.10 – Fighting"*, with 7.6(b) making a **major plus game misconduct mandatory** where a head-contact minor injures. **Both files now carry it as the counterpart, so the scope label cannot be read as relief.** ⚠️ **It also corrected the existing text twice:** the double-minor limb requires **accidental** contact, and **injury is the trigger on BOTH limbs** — the old wording let the major read as turning on the pitchfork action alone. | round 53 |
| ⬜ | ⚠️ **The 63.2(ii) omission is CORPUS-WIDE — and the sharpest instance is five consecutive facts** | Fixed in `rules_primer.md`; **three more documents state the defending-zone limb only.** ⚠️ **`risk_management.md:281–285` is FIVE consecutive `Rule:` facts, every one citing 63.2(iii), none carrying (ii)** — under a heading that says *"from your own zone"* — **and it is the corpus's owner-document for this rule.** *"A reader taking that block off the page learns the penalty is defending-zone-only."* ⚠️ **`playing_without_the_puck.md:309` says *"USA Hockey has no equivalent minor"* — true of the strict-liability limb, FALSE as a sentence about the rule**, because **610(c)** reaches the deliberate clear. **Read aloud, that is an inverting caveat.** `on_ice_communication.md:114`/`:139` also bare, lower consequence. **Replacement fact supplied.** | round 53 |
| ⬜ | **Two facts blocks at the hard cap mean a head/neck rule reaches every layer EXCEPT the podcast's** | `defensive_zone_coverage.md:69–80` and `:451–463` both sit at **11 facts, the style-guide hard cap.** The agent **could not add a `Rule:` fact** carrying the Hockey Canada 9.5 escalation to either, so it carried the **mechanical cue** into the existing `Action:`/`Technique:` facts and left the citation in the body. ⚠️ **Its own verdict: "That is the exact `body_contact_and_battles.md` §5 shape — a restriction living in prose — and I closed it only for the mechanical cue, not for the rule."** **The correct fix is a split on the seam the body already uses** — the screen-and-stick-lift teaching, versus the shot-blocking and goalie-communication material in the last three facts. **Not attempted on a contended file.** | round 53 |
| ✅ | **Three self-catches, and one self-deletion under non-negotiable 6** | It drafted *"IIHF 63.2(II) is that clause in the same words"* — **it is not: the IIHF is in the plural and drops a comma.** It drafted that **all four books** agree on the deliberate limb — ⚠️ **Hockey Canada 10.1(ii) does not carry the after-the-whistle words**, so the text now says *three of the four* and notes HC's preamble reaches *"delays the restart of play"* **without asserting that closes it.** ⚠️ **And it wrote, then deleted, a note that the Casebook text has page furniture spliced into it** — *"That is project tooling, not provenance… it fails the style guide's 'would a reader who had never heard of this project want to know it' test."* **Non-negotiable 6, applied by an agent to its own work, unprompted.** | round 53 |
| ⬜ | ⚠️ **PROCESS RULE OWED: check HEAD before dispatching from a plan row** | **My failure, and it wasted most of an agent.** I briefed from a row written by the round-52 census **without checking whether the round-52 COMMIT had already closed it.** `6d253d8` had. ⚠️ **The row is evidence of what was true when it was written, not of what is true now** — and this plan explicitly says a row moves out only when `commit-gate` clears it, which means **rows survive their own fixes by design.** **The check is one command** — `git log -S '<the exact string>' -- content/` — and it would have caught all three. ⚠️ **Add to `review_process.md` Part 1: a plan row is a hypothesis about the PAST; verify it against HEAD and the working tree before dispatching.** | round 53 |
| ✅ | ⚠️ **"A grep for one chosen vocabulary is not a grep for hedges" — and it cuts BOTH ways** | The census reported *"a grep of the whole of `defending_the_rush.md` for hedge vocabulary returns zero."* ⚠️ **Two well-formed disclosures were sitting in it**: `:322` *"Whether these four are all of them, or which is commonest, is not something any published count establishes"*, and `:544` — **the best-formed disclosure in either file** — *"No breakaway save percentage is quoted here on purpose: the NHL does not publish one, and the penalty-shot and shootout conversion rates people reach for instead measure a different situation."* **It names what was looked for, why the obvious substitute is wrong, and what the reader may take.** ⚠️ **This is the fourth truncated-view failure of the round, in a new direction: a vocabulary grep manufactured a false ABSENCE of hedges, exactly as other vocabulary greps manufactured false absences of claims.** | round 53 |
| ✅ | ⚠️ **A disclosure understated its own evidence — and one of the three siblings I named was wrong** | `goaltender.md:932` said *"the **nearest** measurement in reach"* names one sibling. ⚠️ **`offensive_zone_play.md:693` is LARGER AND BROADER** — 11.4% of **all** goals within 3s of a preceding shot, all situations — **so "nearest" was false and the disclosure made the corpus look less evidenced than it is, which is its own defect.** ⚠️ **But `body_contact_and_battles.md:869` — which I named as a third orphan — counts goals by LOCATION, not by cause, and does NOT orphan it.** Fixed to name **two** measurements, both as pointers with **no figures copied** (ownership rule), closing on the thing that matters: *"Neither reaches the screen: the play-by-play feed both use carries no marker for one, so the net-front cause this section leans on hardest is exactly the one that stays uncounted."* | round 53 |
| ✅ | ⚠️ **The OWNER is labelled — and my dependency table was WRONG: these are TWO claims, not one claim in three files** | `on_ice_communication.md:195` now reads *"**How it ranks against every other unmarked position is not something anyone has counted**; what makes the call necessary is that…"* — **purely extractive**, since `:186` already carried the see/cover asymmetry, and the urgency survives in *"the nearest player takes them, immediately."* ⚠️ **But `defending_the_rush.md` does not contain that claim at all** — the string *"unmarked position"* **does not occur in the file.** What `:748`/`:760` actually say is ***"The single most urgent call in defensive hockey"*** — **a ranking of CALLS BY URGENCY, not of POSITIONS BY DANGER.** Both uncounted; **two different claims.** ⚠️ **So the propagation I sequenced is not the one that is needed:** copying the owner's caveat across *"would import a caveat for a claim the file does not contain — **the mirror image of the failure the other agent correctly refused**."* ⚠️ **And that agent's refusal was right for a reason it never stated:** the stronger ground is not ordering, it is that its sites need a **different label**. **It already owns the right idiom in its own voice at `:251`/`:874`.** | round 53 |
| ⬜ | **Four sites judged individually and deliberately left, each with a stated reason** | ⚠️ **`defending_the_rush.md:52` is the notable one — the corpus narrating itself (non-negotiable 6) AND an unmeasured self-assessment**, inside an otherwise exemplary sourced blockquote: *"the section on the five ways teams manufacture odd-man rushes against themselves is **the most valuable part of this document**."* **Recommend cutting the clause.** `:230` *"the most commonly under-performed job in hockey"* — **a distinct claim about effort, not assignment**, so not swept in with the others. `:475` *"the situation most often botched"*. ⚠️ **`:89`, the section heading *"Why a big gap is the root of most rush goals"* — left because CHANGING A HEADING CHANGES THE ANCHOR** and `:834` links to it: *"a link-integrity change I should not make unilaterally."* | round 53 |
| ✅ | **Three self-catches, one of them a slip inherited from the text being repaired** | ⚠️ **The best: its draft read *"the middle-lane driver … is the most dangerous of the three **lanes**"* — a driver is a player, a lane is a lane. *"The original had the same category slip and I copied it."*** Caught on re-read, rewritten at all three sites. It also softened *"the rebound cause"* to *"**a proxy for** the rebound"* — the figure is a 3-second time window, not a rebound count. And it **corrected its own belief** that a claim was absent from the body: `:89` is a section heading carrying it. ⚠️ **It then flagged its own deletion for possible reversal** — removing *"the root cause of most rush goals"* from a Common Mistakes bullet — stating its ground (a summary-layer restatement stronger than and differently scoped from its body, which survives at `:89` and `:119`) **and inviting the next round to disagree.** | round 53 |
| ✅ | ⚠️ **CRITICAL: the corpus's strongest injury-prevention claim carries a hard figure in both read-aloud layers, from a review that rates its own certainty LOW** | `conditioning_and_recovery.md` body now says the review *"rates its own certainty of evidence as low, and its prediction interval crosses the null"* — ⚠️ **and the Overview and Key Takeaway 3 both state a bare 64%, attached to the superlative *"the highest-evidence injury measure you control."*** **Source verified this session (PMID 41945463):** *"prediction interval crossing the null (0.18-1.40)"* and ***"Certainty of evidence was low."*** ⚠️ **No number is wrong — the arithmetic checks out. The HEDGE is what is missing**, in the two layers a listener hears alone. *"A listener who hears only the Overview or Key Takeaway 3 is given a precision the source does not support, attached to a superlative, about a collision sport."* **Replacement wording supplied; the "football and general team sport, not hockey" flag must NOT be dropped — it is doing separate work.** | round 53  — **closed round 53 — ROW WAS STALE: it described HEAD, not the working tree; both layers already carried the certainty hedge AND the population flag** |
| ✅ | ⚠️ **SAFETY: the least-skilled reader in the corpus is told to practise falling, given an absolute assurance, and pointed at no technique** | `practice_and_development.md` §Adult Beginners: *"**Learn to fall, deliberately, in full gear.** … **Full protective equipment makes a fall a non-event.**"* ⚠️ **In the section whose own text says beginners *"fall from higher, weigh more."*** **The sentence is false standing alone, and this is a read-aloud corpus** — a helmet reduces impact; it does not make a head strike a non-event, **and the document's own concussion section is built on the premise that it does not.** ⚠️ **The corpus contradicts itself:** `skating.md` **KT10** carries four specifics that never reach the reader being told to go and do it — *"side onto hip and thigh, never onto a locked arm"*, a check before rising, and ⚠️ **the chin split: *"Tuck your chin falling backwards to the ice… do NOT tuck it going forwards into the boards. Falling flat: chin in. Hitting a wall: head up."*** And `conditioning_and_recovery.md` names *"not putting a bare hand out to break a fall"* as a risk mechanism, **which "non-event" flatly denies.** ⚠️ **Found by the standing sweep, not from a list — the file is unmodified in git and was in nobody's brief.** | round 53  — **closed round 53 — ROW WAS STALE: `grep -rn "non-event" content/` returns ZERO; the repair (chin split, hip and thigh, injury check, cross-link) was already in the tree, uncommitted** |
| ✅ | **Two more hedges that stopped one layer short, and an unsourced permissive claim about loading children** | **(1)** The 35% warm-up figure (IRR 0.65) gained its *"low quality of current evidence"* caveat in §Injury Prevention **and the §Warm-Up restatement of the same figure was left bare** — where it is called *"the strongest argument for bothering."* ⚠️ **Note the population runs the unusual way: the study is adolescents 10–19 and the prescription is aimed at adults.** **(2)** *"**Resistance training for youth is not inherently dangerous**"* — **a permissive safety claim licensing the loading of a growing athlete, carrying no citation.** Verified unsourced: the section's four cited sources are about specialisation, career outcomes and injury physiology, **none about resistance-training safety**, and a corpus-wide grep for `NSCA|position stand|youth resistance|growth plate|physes` returns only the one line supporting **the opposite half** of the paragraph. **Label it, do not delete it** (non-negotiable 3). | round 53  — **closed round 53 — ROW WAS STALE in both halves: §Warm-Up already carried the caveat and the population direction, and the youth-resistance claim was already labelled inline plus a Limits entry** |
| ✅ | ⚠️ **An agent declined a fix it owned, on C11 grounds, and the reasoning is worth keeping** | It found the youth-resistance claim in a file it owned and **did not edit it**: *"the source-verifier repaired it minutes ago and its clearance covers the text now on disk. **A new claim-touching edit by me, outside the scope my brief set, voids that clearance under C11 for no safety gain** — the fix is a label, not a hazard removal. Handing it back is the cheaper correct move."* ⚠️ **It also declined to report a hazard it could not verify** — a claim about urine specific gravity being unreliable in seated para athletes — *"the abstract does not say it, I could not verify it this session, and **an unverified hazard is the defect this role exists to avoid**."* | round 53 |
| ✅ | **The concussion and crisis content attacked and CLEARED — "the best-propagated safety content I read"** | Checked in place and intact: **no timings anywhere**; *"you should be suspicious of any hockey resource that does"*; *"only after medical clearance"*; the **ten CRT6 red flags in full**; *"Assume a possible spinal cord injury in all cases of head injury"*; the do-not-move and do-not-remove-the-helmet instructions; all four CRT6 first-hours prohibitions. **The honest disclosure survives unmodified**, including the note that the graded-RTS stage wording could not be obtained from the publisher. **§Coming back from injury opens *"This section assumes you have been medically cleared to play. If you have not, that is the first step and it is not yours to make"*** — *"the most likely place in my three files for a return-to-play timeline to have crept in, and it has not."* **§13 routes to GP and clinical psychologist, distinguishes them from sport psychologists, and carries crisis numbers by country with a verification date — reaching five layers. Do not compress any of it.** | round 53 |
| ✅ | **"At least as good" is gone corpus-wide** | Three sites in `mental_game.md` asserted **non-inferiority from a comparison the source does not report**; `:83` already had the correct form. All three now match it, **the coaching advice intact in all three** — only the evidentiary claim changed. ⚠️ **The repair also removed a provenance error nobody had flagged:** `:354` said *"This is what the self-talk meta-analysis actually found"*, **crediting the paper with a claim it does not make.** Each fixed sentence was read-aloud tested standing alone. `grep -rn "at least as good" content/` now returns nothing. **`:457` deliberately left — *"need not be"* is already the correct strength.** | round 53 |
| ⬜ | **Hockey Canada 6.4(a): the accidental clear costs more than the corpus says, in two divisions** | Found by an agent chasing a stray hit, **not by the rule number it was searching.** `hc2628.txt:4848-4855`: in **Junior and Senior divisions**, a defending player who *unintentionally* puts the puck out takes **no penalty, but *"the defending team may not make a line change"*** — with Note 1 routing the deliberate one to 10.1(ii). ⚠️ **`risk_management.md:302` currently tells a Hockey Canada reader the accidental clear *"costs you a defensive-zone draw, not two minutes."* In those two divisions it also costs the change.** Deliberately not added: *"it is a faceoff-location rule with a different owner document, and its division scope needs verifying across the book before it propagates."* ⚠️ **Also flagged: IIHF 63.2(III) has an extraction dropout** at `iihf_rules.txt:6299-6306` — line 6304 begins mid-sentence, cutting out the determining-factor sentences. **No claim relies on it, but do not conclude from that file that the IIHF lacks the clause.** | round 53 |
| ✅ | ⚠️ **The vocabulary-grep warning fired inside the work it was written for** | Passing the *"a grep for one vocabulary is not a grep for hedges"* lesson to an agent **caught the same error in its own pass**: `on_ice_communication.md:490` carries a **substantial blanket disclosure** — *"Nobody publishes a ranking of amateur mistakes, or a count of what actually gets said on amateur ice… **anywhere in it**, in this list, in the overview and in the takeaways at the end"* — ⚠️ **inside a Common Mistakes bullet, therefore invisible to any hedge-vocabulary grep.** *"Had I trusted a grep, I would have reported this document as carrying zero disclosure."* ⚠️ **It then judged, carefully, that `:490` does NOT reach `:195`** — the disclosure's stated **basis** is the absence of counts of *amateur mistakes and amateur call usage*, and its enumerated **categories** are commonest / highest-value / cheapest / usual, **while a danger ranking of unmarked positions across all of hockey is neither its basis nor its category.** So `:195` still needed its own label, scoped to complement rather than restate. | round 53 |
| ⬜ | **`defending_the_rush.md:748`/`:760` need a label about CALL URGENCY — a brief written to the wrong claim must be rewritten before anyone acts** | *"The single most urgent call in defensive hockey"*, bare in **both** the facts layer and the body. ⚠️ **Do NOT hand it the unmarked-position caveat** — that is a different claim and importing it is the defect this round has now refused twice. **The file already owns the right idiom in its own voice** at `:251` and `:874`: *"that ranking is coaching emphasis, not a counted one."* ⚠️ **Also flagged and deliberately not swept: `on_ice_communication.md:371`** — *"the highest-danger area on the ice"* — **a THIRD distinct claim, about ice location, and one that has an owner** (`shooting.md` holds shot-location values). *"Plausibly well-grounded… uniformly sweeping every superlative in the file is how round 44 manufactured a divergence."* | round 53 |
| ✅ | ⚠️ **The TTS question answered: the colons do NOT split, and the chin split survives intact** | The safety agent closed by naming the one thing it could not check — *"whether the new bullet survives the TTS pipeline's actual sentence splitting, in particular whether it splits on the colons inside 'Falling backwards to the ice: tuck your chin in.'"* ⚠️ **Run centrally. It holds.** The rendered utterances are: *"The chin has two opposite cases and you need the right one."* · *"**Falling backwards to the ice: tuck your chin in**, because it keeps the back of your skull off the ice."* · *"**Going forwards into the boards: do not tuck it** — head up, never duck…"* · *"Falling flat: chin in."* ⚠️ **Each case stays in ONE utterance naming BOTH its direction and its action, so no sentence boundary can invert the two opposite instructions.** The agent's stated design — *"each of those five sentences is true standing alone and names its own case"* — **is what the renderer actually produces.** | round 53 |
| ✅ | ⚠️ **My JOB 4 constraint was FALSE — there was no inbound anchor at all** | I told an agent that changing a heading would break `:834`'s link and require a corpus-wide anchor sweep. ⚠️ **`grep -rn "why-a-big-gap"` across the whole repo returns ZERO**, `:834` is **plain prose inside a Check-yourself list**, not a markdown link, and `check_links.py` resolves only `[text](dest#anchor)` — **so it never saw the heading.** Real cost of the change: **one prose line.** ⚠️ **And non-negotiable 3 governed the how:** the body never carried the claim, **so deleting the heading text would have deleted the claim** — it was moved into the body with a label instead. Heading now *"Why a big gap hands the attacker three things at once"*, extracted verbatim from the section's own facts line. **Thirteenth briefed premise refuted.** | round 53 |
| ⬜ | ⚠️ **CENSUS RUN: 188 self-assessing superlatives across 33 documents — and FOUR different winners of the same one inside a single file** | The last agent named a corpus-wide census of *"the most X in this document / in hockey / in the game"* as **"the single highest-yield thing this round did not do."** **Run centrally. 188 instances, 33 of 37 documents.** By scope: **`in hockey` 110** · `available` 27 · `in the game` 16 · **`in this document` 15** · `here` 13 · `in this section` 4 · `in the sport` 2 · `in this area` 1. Worst files: **`breakouts.md` 21**, `faceoffs.md` 17, `body_contact_and_battles.md` 11, `on_ice_communication.md` 10. ⚠️ **The internal contradiction the pattern produces, inside ONE document:** `body_contact_and_battles.md` says angling is the most valuable skill (`:19`, `:137`), **the stick lift is** (`:299`), **a verbal call is** (`:670`), **and the stick tie is** (`:911`). **Four winners of one superlative.** ⚠️ **Do NOT sweep 188** — the round-53 prevalence census found **most of that family legitimate**, and a uniform pass is how round 44 manufactured a defect. | round 53 |
| ⬜ | ⚠️ **The clean subset: 20 instances of self-narration — 12 of the 37 documents affected — non-negotiable 6** | **This subset is not a judgement call**: *"the most important section **in this document**"*, *"the highest-value question **in this document**"*, *"the single most useful thing **in this document**"*, *"the most important paragraph **in this document**"*, *"the highest-risk play **in this document**"* (×2 in one file), *"the single biggest structural advantage described **in this section**"*, *"the single most important rule-set difference **in this document**"*. ⚠️ **Each is BOTH an unmeasured self-assessment AND the corpus talking about itself to a reader who came to learn a sport.** ⚠️ **But three of them are SAFETY emphases** — `body_contact_and_battles.md:549`, `:1244` and KT8, on the spinal-injury response — *"where removing the emphasis could weaken a safety signal, which is `safety-reviewer`'s call."* **Those three go to safety; the other seventeen are a content brief.** | round 53 |
| ⬜ | ⚠️ **A Key Takeaway that is 2,326 characters and tells the listener to READ it** | `defending_the_rush.md` **KT6 is ~four minutes of speech** and contains the sentence ***"This is one to read rather than remember."*** ⚠️ **A print-only instruction with no meaning in audio — in the layer that IS the audio.** The style guide defines the layer as *"Numbered, 5–10 items. Each one standalone and memorable — this feeds the podcast's 'if you only remember N things' segment."* **KT4 is 1,597 chars and KT7 1,551, against 150–385 for the other seven.** ⚠️ **This is the same class the style guide records being stripped from all 36 "Check yourself" preambles** (*"answer before you read on"*, *"the section is named beside it"*). **The content is good and heavily sourced; the LAYER is wrong for it** — the body already carries the divergence table at `:563`–`:593`. **Deliberately not fixed: a restructure of the most-consumed layer of a file three agents have been in this round.** | round 53 |
| ⬜ | **Numeric facts with two holders and no owner** | The rush-danger figures — **8.15%**, *"almost triples"*, **0.78 vs 0.57** — live in `defending_the_rush.md:50–52` and are restated in `game_management.md:96`. ⚠️ **The restatement was checked BOTH ways and is sound**: `game_management.md` carries the full scope (every NHL game 2017-18 to 2020-21; under 3% of 5-on-5 zone entries; the graphic caveat) and names the holder, **and the holder does hold all of it.** ⚠️ **But the style guide's "Numeric facts and their owners" table has no row for them**, and `zone_entries.md`'s Tulsky row covers only the entry values, not these. *"Two documents, no owner, is the shape §3.8 of the review history describes."* **Add a row naming `defending_the_rush.md`.** | round 53 |
| ✅ | ⚠️ **THE ROUND CREATED A FOURTEENTH INSTANCE OF THE DEFECT IT WAS AUDITING — proved by `git log -S`** | `body_contact_and_battles.md:1164` carries *"…**which is the most important part of this document**."* ⚠️ **`git log -S` returns NOTHING for that string. It is in no commit.** `git diff` places it **inside this round's own uncommitted slew-footing work.** *"The same round that was asked to census the superlatives added a fourteenth one, in the rules hand-off, pointing at the spinal section."* ⚠️ **This is the mechanism, not the backlog** — and it is the standing rule in operation: **a repair is new text, and new text has not been reviewed.** ⚠️ **The census also missed `:155`, a SECTION HEADING** asserting the contested superlative — *"the most exposed layer in the file: sidebar nav, table of contents, and read aloud as a heading."* **The census counted bodies and summaries and not headings.** Both found by greping the **string pattern** rather than trusting the handed-down line list. | round 53 |
| ✅ | ⚠️ **A claim restated STRONGER than its owner and WITHOUT the owner's qualification** | `body_contact_and_battles.md:667` (facts) and `:670` (body): *"This is **the most valuable** thing anyone says on a hockey rink."* ⚠️ **`on_ice_communication.md` OWNS this claim and states it more weakly — *"the two highest-value words in hockey"* — under an explicit qualification covering its whole layer:** *"wherever the takeaways below call… a call the highest-value… that is coaching observation rather than measurement."* **The borrowing document made it a superlative, dropped the hedge, and put it in two layers.** That is CLAUDE.md's *"numbers come from their owner document **with the owner's qualifications**"* defect. ⚠️ **Read alone the facts line was *"Key: **This** is the most valuable thing…"* — a bare demonstrative with no referent.** Replaced with the **consequence** from §6's own text: *"A player cannot brace for a hit they cannot see, and the call is what gives them the chance to."* | round 53 |
| ✅ | ⚠️ **The contradiction was SIX-voiced, and it was resolved by replacing rankings with REASONS — not by labelling six claims** | Angling at `:19`, `:137`, the `:155` heading and **KT2**; the stick lift at `:299` and **`:1230` — *"in the game"*, broader than the document, in a summary layer, flatly contradicting KT2.** ⚠️ **The agent refused the obvious fix and said why:** six claims each hedged *"coaching emphasis, not a counted one"* **still tell a reader six different things.** ⚠️ **And it refused to write the tempting sentence *"nobody has ranked hockey skills by value"*** — *"That is a negative existence claim, it is unfalsifiable by ordinary review, and I did not do the search that would earn it. **Writing it would have been the same defect class as the thing I was sent to fix.**"* **Every ranking replaced by a reason already in its own section**, and the two load-bearing replacements — *"legal in every league"* and *"lower penalty risk than a poke or a check"* — **are the document's central safety thesis**, so the emphasis now points at the reason for the recommendation rather than at a rank nobody measured. **The document now names no document-level priority.** | round 53 |
| ✅ | **Four safety emphases judged individually, not uniformly — and one kept its job by changing form** | The question asked at each: *"with the ranking gone, does the reader still get told to do the thing, and does the sentence still work heard alone?"* ⚠️ **`:549` was the interesting one.** Its signposting job is **real** — §5 above tells a non-check reader *"Skip to Section 6"*, so it is the landing site for a skimmer — ⚠️ **but the half doing that work is *"it applies in every league"*, the scope caveat, not the ranking.** *"A ranking is an opinion; an imperative is an instruction."* Now **"Read this section whatever league you play in"**, consequence clause untouched, **and the every-league scope also survives independently at `:142` and in §5**, so it is not carried by one sentence. ⚠️ **KT8 was the easiest and the reasoning generalises: Key Takeaways is a DESTINATION, not a signpost — there is nothing to skip to from inside it, so the ranking had no navigational job at all**, unlike `:549`. **Not one word of spinal-injury instruction, symptom list, ABC ordering, helmet instruction or CRT6 pointer was altered.** | round 53 |
| ⬜ | ⚠️ **A safety reviewer named the ONE call it wants a second pair of eyes on — and it needs a browser** | *"`:549` was the one call in this batch where reasonable safety reviewers could disagree. I replaced a ranking with an imperative because an imperative survives being heard alone and a ranking does not. **If the site's visual treatment gives bold-ranking sentences a prominence that a bold imperative does not get, I have traded away something I could not see from the markdown.**"* ⚠️ **This is a rendered-page question about a spinal-injury signpost, and it cannot be answered from the source.** `site-reviewer`, in a real browser, both themes, phone and desktop. | round 53 |
| ⬜ | **A face-injury mechanism that reaches neither summary layer — and the reason it was left is the right one** | `body_contact_and_battles.md` §11: *"**Do not lead with your stick.** A puck deflected off an outstretched blade goes upward, often into your own face."* Body ✓ · facts ✓ · **Common Mistakes ✗ · Key Takeaways ✗** — those layers carry *"turning sideways or lifting a leg to block"* and *"hands tucked, head out of the lane"*, but not the stick point. ⚠️ **Deliberately not propagated:** *"propagating it upward would push an **unsourced mechanical claim** into two more layers. I did not locate a source for it this session, and **manufacturing summary-layer reach for an unverified hazard is the failure mode my own brief names.** It needs a source first."* → `source-verifier`. | round 53 |
| ⬜ | **`:1030` judged and deliberately left, on a category distinction worth keeping** | *"The highest-value skill in a 50-50 race is the one-touch…"* ⚠️ **Scoped to a SITUATION, not to the document — so it does not self-narrate under non-negotiable 6, and it contradicts none of the others.** Its own tail carries a safety consequence: *"and it takes you out of the collision."* *"Flattening it would have cost a safety consequence to buy consistency with a category it is not in."* **Also reported, not fixed:** the same shape across **eight** further documents. ⚠️ **And the model to point a corpus-wide pass at already exists** — `on_ice_communication.md` **has solved this properly**, with a scoped, honest, once-per-document disclaimer at `:490` and `:547`. *"It is worth pointing the corpus-wide pass at it rather than at a new invention."* | round 53 |
| ✅ | ⚠️ **`check_counts.py --update` would have SILENTLY DESTROYED a real measurement, and the checker is not at fault** | Writing *"20 instances of **the corpus** narrating itself, across **12 documents**"* tripped `DOC_PATTERNS` rule 3 — `The corpus\b[^.\n]{0,40}?\b(\d{1,3}) documents` — which matches *"the corpus"* followed by *"N documents"* **within 40 characters.** ⚠️ **`--update` would have rewritten my correct 12 to 37**, turning a measured subset count into the corpus total **with no visible error**, since the run reports it as a *stale figure* rather than a mismatch. ⚠️ **The checker is right to be greedy — a corpus-total figure going stale is the defect it exists to catch — so the fix is the WORDING, not the pattern.** Reworded to *"12 of the 37 documents affected"*; `check_counts` now reports only the two genuine `:17` figures. ⚠️ **General rule worth carrying: never write "the corpus" within 40 characters of "N documents" unless N IS the corpus total.** The plan is the one file where subset counts and corpus counts sit side by side, so it is the only place this can bite. | round 53 |
| ✅ | ⚠️ **An agent DIED mid-task and left six files edited and unreported — the fifth infrastructure loss this session** | Machine sleep, mid-sentence, at the words *"Now the classified census."* ⚠️ **The edits landed; the report never arrived.** All eight briefed strings verified gone from the corpus and **all three checkers pass on the partial state** — but **the standing rule is that a review which did not happen must not be read as a clean one**, and nobody has seen its reasoning, its before/after or its self-check. ⚠️ **One repair needs checking hardest, because it introduced a NEW COUNTABLE CLAIM in four places**: *"the highest-risk play **in this document**"* → ***"the highest-risk of the **nine** breakout options."*** **That is the right move in principle** — it converts a self-assessment into a scoped, checkable statement — ⚠️ **but nobody has counted the breakout options. If it is not nine, that is a fabricated figure at four sites (non-negotiable 1).** A fresh agent is auditing the eight replacements and completing the census. | round 53 | **AUDITED CLEAN — and "nine" is CORRECT, verified three ways:** §3 contains exactly **nine `###` headings** (up, wheel, reverse, D-to-D, rim, over, quick-up, stretch, off the glass); the style guide's **owner row names the same nine in the same order**; and ⚠️ **`git log -S` shows the phrase already existed in the document's own Check-yourself question — *"Name three of the nine breakout options."* The repair reused the document's established phrase rather than coining one. That is extraction.** **All 15 repair sites audited: 13 sound, 2 not repaired.** ⚠️ **And two of my counts were wrong: the conversion landed at SIX sites, not four, and `risk_management.md` had TWO fixed sites, not one.**
| ✅ | ⚠️⚠️ **CRITICAL, FIXED: every `Never:` fact was read aloud as an INSTRUCTION TO DO THE PROHIBITED THING** | The renderer emitted `label + ". "` unconditionally, so *"Never: Hit a player who is turned toward the boards"* became ***"Never. Hit a player who is turned toward the boards."*** — **a terminated negation followed by a bare imperative.** ⚠️ **Measured: 495 `Never:` facts, of which 342 (69%) open with an imperative verb**, and **19 have no em-dash tail to recover the sense.** The worst are the corpus's most serious warnings: *"Never. **Hit a player who is turned toward the boards**"* (checking from behind) · *"Never. **Let the player decide whether they are fit to carry on**"* (concussion) · *"Never. **Land on your tailbone, your knees, or a straight arm**"* (falling). ⚠️ **Fixed by `_label_lead`: a negating label gets an em dash, not a full stop, so the negation still governs the clause.** Noun labels (`Key.`, `Rule.`, `Action.`) are unchanged. **Verified: 0 terminated forms left, 496 correctly governed, 37 documents, 1,785 chunks, 0 malformed SSML, 130 assertions / 0 failures.** ⚠️ **The regression test is non-vacuous by construction — `_label_lead` is ABSENT from the pre-fix engine.** | round 53 |
| ✅ | ⚠️ **The renderer's own docstring CERTIFIED the defect while two review rounds were recording it** | It read: *"`Never: lunge` reads naturally as `Never. Lunge.` — **the labels were chosen as imperatives, which is what makes this work** without rewriting them."* ⚠️ **Exactly backwards. The imperative form is what makes it FAIL.** ⚠️ **And it was committed by the change that ENABLED facts-block rendering**, while `round_28_summary_layers.md:474-479` had already recorded the shape and round 29 MA6 had reverted a fact for it — **the count grew 459 → 495 in the interval.** *"A governing statement in the tool contradicts the review record, which is the same failure class as a style-guide entry contradicting the corpus it governs."* **Docstring corrected to state what it actually does and why the old claim was wrong.** | round 53 |
| ⬜ | **A hedge that reached both summary layers and NOT the section that owns it** | `defensive_zone_coverage.md` carries *"(No published tracking data breaks goals down by cause, so treat that as coaching consensus rather than a measured fact.)"* at **`:25` (Overview)** and **`:719` (Key Takeaway 7)** — ⚠️ **and NOT in the owning section**, where the body and its facts block both state *"Almost always, both players worked hard"* **bare.** *"This is the summary-layer defect running backwards: the summaries are more honest than the body."* **Fix is pure extraction — the exact hedge text already exists twice in the same document.** Deliberately not applied: the agent's mandate was the self-reference and it *"did not want to widen a contended file."* | round 53 |
| ✅ | **A document ranks itself on "effect size" using its own smallest, provisional number** | `conditioning_and_recovery.md:361`: *"**Nothing else in this document has the effect size of sleep**, and nothing else is as often ignored"*, under the heading *"Sleep is the highest-leverage thing on this list."* ⚠️ **Checked entirely inside the same file:** the sleep section's only quantified effect is **OR 1.34 (1.08–1.66)** — which **the document itself labels a preprint** and says to *"treat the precise number as provisional."* Meanwhile the same file reports the warm-up at *"roughly two-thirds lower injury risk"* and body checking at *"a roughly threefold increase in concussion incidence"* with *"50–70% reductions"* from policy change. ⚠️ **Both are larger reported effects than OR 1.34, and `:494` separately calls the warm-up *"the best-evidenced injury item here."*** **So the document holds two different superlatives about itself on adjacent axes, and the one using the technical term *"effect size"* is backed by its own weakest number.** | round 53  — **closed round 53 — CONFIRMED and fixed: the quantitative self-ranking removed, sleep kept top of the recovery list on consistency, cost and neglect; advice unchanged. Two adjacent instances found and fixed with it** |
| ✅ | **A 58-hit census, and a uniform sweep would have destroyed the best content in the file** | Classified: **4 self-narrating** (3 fixed, 1 reported), **8 unmeasured-ranking report-only**, **46 legitimate.** ⚠️ **What the legitimate 46 contain, and why the classification is the deliverable:** *"the single most dangerous misconception in amateur sport"* — **a protective safety absolute inside the concussion section**; the `n = 371` / `40.73%` / *"most common site"* superlatives — **sourced findings with named studies and populations, not self-assessment at all**; *"the best-evidenced injury measure you control"* — **every instance already carrying its own evidence-quality hedge in the same sentence**; and *"If you remember nothing else, remember these"* — **the pedagogical device the style guide itself specifies.** ⚠️ **The agent's verdict: "A uniform sweep would have destroyed the sourced injury superlatives and the concussion warning."** | round 53 |
| ✅ | **A cut justified by three things, not one — and the paragraph was read before the label was removed** | On *"the most important paragraph in this document"*: the agent read the whole section and found **no safety or penalty consequence** — *"the worst outcome of ignoring it is a goal against"* — so the emphasis was **not doing protective work.** ⚠️ **Three further reasons it was worse than merely redundant:** it was a **dangling FORWARD reference** — *"This is…"* preceded the paragraph it referred to and **immediately followed a closing code fence, so "This" most naturally binds to the facts block above**; it renders as a **broken utterance** with no referent; and **the emphasis survives the cut unchanged** in the section heading, the block's `Mindset:` line and the three numbered consequences. | round 53 |
| ⬜ | ⚠️ **The ranking under the verified number is NOT established — and the document names two different winners on two unnamed axes** | *"The highest-risk of the nine breakout options"*, at **six sites**. The count is right; **the rank is a corpus judgement wearing a checkable denominator.** ⚠️ **Reading all nine risk statements in full:** the **over** (`:364`) gives a **severity** mechanism; the **rim** (`:332`) says it *"concedes possession more often than any other option except an outright clear"* — **a FREQUENCY ranking over the same nine**; and the **stretch pass** (`:409`) is *"genuinely a high-risk/high-reward play"* — **never compared against the over, and the only other candidate on the severity axis.** *"The mechanism does establish that the over is dangerous; it does not establish that it is highest."* ⚠️ **Plus a TTS hazard: a listener meets "the highest-risk of the nine" in a FACTS BLOCK before the document has ever said there are nine** — §3's lead-in gives no count — *"so heard alone the sentence asserts that hockey has exactly nine breakout options, which the document does not claim and which its own §6 contradicts by describing three further named patterns."* ⚠️ **`breakouts.md:26` is the model and is inside the same repair: it dropped the ranking and kept the mechanism.** | round 53 |
| ⬜ | ⚠️ **TWO survivors escaped the sweep BY ONE WORD — "here" instead of "in this document" — and one is in a facts block** | **`breakouts.md:342`**: *"Sense A is this cross-ice pass, **the highest-risk option here**"* — ⚠️ **`git log -S` proves it pre-existing, so the repair did not reach it rather than creating it.** **The consequence is one claim in four different wordings across the most-extracted layers:** facts *"the highest-risk option **here**"* · Common Mistakes *"the **riskiest of the nine**"* · **KT1** *"the **highest-risk of the nine**"* · **KT8** *"the **highest-risk play in a breakout**"* — ⚠️ **and KT8, never touched, is arguably the best of the four: it scopes to the SITUATION rather than to the document or to a count.** **`risk_management.md:336`** survived identically: *"**This is the most practical section here.**"* ⚠️ **A vocabulary grep for the briefed strings returns a clean absence on both — and a clean absence from a vocabulary grep is worth nothing.** | round 53 |
| ✅ | ⚠️ **A FIFTH truncated-view failure, in a tool the style guide does not list — and the agent caught its own** | Its first diff pass used `grep -E "^[+-][^+-]"`. ⚠️ **Markdown bullets begin `- `, so in a diff they render as `-- ` / `+- ` — the pattern silently dropped EVERY CHANGED BULLET LINE.** It concluded only two of six sites were uncommitted. **Caught by re-running with an exclusion pattern instead**, and **nothing was reported off the bad view.** *"This is the truncated-view mode from the style guide, in a tool it does not list."* ⚠️ **Add `grep -E "^[+-]"` on diffs to the style guide's truncated-view section: the character that marks a diff line is also the character that marks a list item.** | round 53 |
| ⬜ | **The blanket-disclosure answer is DIFFERENT for the two worst files, and the reasoning is the deliverable** | ⚠️ **Right for `breakouts.md`:** its 16 unmeasured rankings are *"uniformly coaching observation with no measured sibling"*, so the `on_ice_communication.md` pattern fits — **one scoped paragraph instead of sixteen edits**, touching none of the eleven legitimate ones. ⚠️ **WRONG for `faceoffs.md`: 19 of its 34 are legitimate and EIGHT ARE COMPUTED OR SOURCED FIGURES** — the 22-point spread, the 45.9–54.5% team range, the 69% end-zone share, Hohl/Desjardins. *"A paragraph saying 'wherever this document calls something the best, that is coaching observation' would sweep them in and **make the corpus look less evidenced than it is**."* **`faceoffs.md` already has the right instrument at `:60`** — this round's own repair, *"treat 'the most improvable skill in hockey' as a coaching claim and this number as the thing that is actually measured"* — **a PER-CLAIM label. Apply that to three sites and leave the rest.** | round 53 |
| ⬜ | **Three more internal contradictions, each two claims 400 lines apart** | **`breakouts.md`:** the support D is *"the **least-understood** job on the ice"* (`:144`) and the centre's is *"the **most misunderstood**"* (`:547`) — **the same superlative on two different roles**, with a third at `:162` (*"the most commonly botched job in hockey"*). **`faceoffs.md`:** *"the single **most dangerous draw in hockey**"* (post-icing, `:312`) versus *"**the most dangerous faceoff in hockey**"* (shorthanded, `:716` facts and `:727`) — ⚠️ **one of them reaches a facts block**, and *"a reader hearing the two in isolation gets two different answers to 'which draw do I prepare hardest for'."* ⚠️ **And `faceoffs.md` asserts at two sites which draw outcome is commonest while THIS ROUND'S OWN new line at `:43` discloses that its data cannot measure that** — *"the NHL faceoff data behind it records zone, strength and winner, **not technique**."* **The assertion reaches KT10.** | round 53 |
| ✅ | **A summary hedged this round while its body kept two flat absolutes — the usual failure, backwards** | `faceoffs.md` **KT6 was softened this round** to *"hockey's **nearest thing to** a closed skill."* ⚠️ **The body was not:** `:825` *"**A faceoff is the only meaningful action in hockey** with a fixed starting position…"* and `:375` *"A draw **is** a closed skill."* **Two flat absolutes in the body, a hedge in the summary. The hedge is the defensible version and the body should follow it.** ⚠️ **`check_absolutes.py` passes — it is scoped to penalty-tier caps and rule denials and structurally cannot see this.** | round 53  — **closed round 53 — CONFIRMED and fixed. The body also contradicted its own practice advice at :840, which asks for unpredictable timing — a reactive trigger is what a pure closed skill lacks** |
| ✅ | ⚠️ **A large volume of UNCOMMITTED, UNREVIEWED rules work sits in these same files — flagged by an agent that deliberately did not touch it** | *"These same six files carry a large volume of uncommitted, unreviewed rules work by other agents today: the **Hockey Canada 6.11(b)(ii) tag-up-versus-stop-play disambiguation** propagated across `zone_entries.md` and `breakouts.md`; a whole new second limb of **NHL/IIHF 63.2(ii)** added to `risk_management.md` §9 with a rewritten heading; **USA Hockey Casebook 639 Situations 2 and 4** introduced as a source. **I did not open a single rulebook. Every one of those is `rules-verifier`'s and none of it has been checked by anyone.**"* ⚠️ **This is a COMMIT-GATE BLOCKER: C-conditions require rules claims verified by `rules-verifier` before anything touching a claim is committed.** | round 53  — **closed round 53. All three named items were verified against primary text: the 6.11(b)(ii) disambiguation (13 Interpretations to HC 6.11 counted on disk), the NHL/IIHF 63.2(ii) second limb, and USA Hockey Casebook 639 Situations 2 and 4 — across three `rules-verifier` passes and three `commit-gate` runs.** ⚠️ **This row still read "This is a COMMIT-GATE BLOCKER" while the row immediately below it recorded the verification as done** — `commit-gate` caught it at the third run. **G1a's own stale-row shape, in the file G1a governs**, and it would have misdirected the next dispatch. |
| ✅ | **The gate-blocking rules verification RAN and cleared almost everything** | ~25 rule claims across three diffs verified against primary text. ⚠️ **Hockey Canada 6.11(b)(ii): both `i./ii.` lists confirmed, and the two documents agree WORD-FOR-WORD** — the shared disambiguation sentence is byte-identical, and **all fourteen references carry the correct label**, the single tag-up-sense one included. **NHL/IIHF 63.2(ii) verbatim** including punctuation. **Casebook 639 Situations 2 and 4 both present with both limits.** Also confirmed: the delayed-offside four triggers *"in the same order, differing only in pronoun"*; charging named in all four books **with no stride count attributed to the NHL**, whose test is *"as a result of distance traveled"*; NHL 57.3 / IIHF 24.8 *"in the same words"*; HC 8.6/8.7/8.8 tiers; three IIHF Situation Handbook quotations. **No deletions recommended anywhere.** | round 53 |
| ✅ | ⚠️ **GATE BLOCKER: the after-the-whistle scope is attributed to FOUR books and it is THREE** | **Hockey Canada 10.1(ii) reads only *"A player who deliberately shoots, bats, or throws the puck outside the playing surface."* — no after-the-whistle words.** ⚠️ **The Common Mistakes bullet gets it right; three other sites over-reach** — the §9 `facts` line (**which quotes three NHL/IIHF-only phrases then cites four books, and is read aloud standalone**), the §9 body (*"rely on wherever you play"*), and **Key Takeaway 5** (*"all four books carry it"*). ⚠️ **NOT a deletion: Hockey Canada very likely reaches it by another route** — 10.1's preamble is explicitly non-exhaustive (*"delays the restart of play… includes, but is not limited to"*) plus 10.1(a). **Scope the three sites to match the bullet that is already correct.** ⚠️ **Harm direction is unusual — it makes a reader MORE cautious than the text requires — but it is the "rule travelling without the limit that distinguishes the books" class.** | round 53  — **closed round 53 — scoped to three books at all four sites** |
| ✅ | ⚠️ **SAFETY: a Casebook ruling narrowed from "an opponent" to "the puck carrier", in two layers** | USA Hockey Casebook 639 **Situation 4**: *"When a player leaves their feet and slides into **an opponent**, thereby causing them to fall, a penalty for tripping must be called **regardless of who gains possession of the puck**."* ⚠️ **The situation's FACTS are about the puck carrier; its RULING is not limited to him** — and the corpus narrows it in both the body and its facts line. *"A reader could conclude that leaving their feet and sliding into a non-carrier escapes it."* **A penalty a reader would be assessed by.** ⚠️ **Note how it was found: the ruling is split by a page break with FOUR lines of furniture spliced between *"block a"* and *"shot and their momentum"* — *"drops to their knees to block a shot" is NOT greppable as one string.* The window was read.** | round 53  — **closed round 53 — widened to the ruling’s "an opponent"** |
| ✅ | **Sources blocks incomplete both ways — and the largest gap is this round's own material** | ⚠️ **`risk_management.md`: Hockey Canada Rule 10.1 has EIGHT body occurrences and ZERO in Sources**, with both 10.1(ii) and 10.1(v) quoted verbatim. Also missing: **IIHF 63.2(II)**, **NHL/IIHF 52.1** (the *"fall violently to the ice"* quote — both segments list 52.2 only), **IIHF 57.4**, **USAH 639(a)'s Note**. **`breakouts.md`: NHL 56.4 and IIHF 56.5 — five body uses each, zero listed, and both are penalty-tier escalations above a minor.** ⚠️ **`zone_entries.md` quotes IIHF Situation 83.34 VERBATIM TWICE while the Situation Handbook appears nowhere in its Sources block.** **And the reverse:** `risk_management.md` lists *"Situation 5 on the slew-footing and clipping tiers"* while the body's tier claim quotes **Playing Rules 639(b)** and Situation 5 appears **zero** times. | round 53  — **closed round 53 — Sources filled across seven documents** |
| ✅ | **Two glosses looser than the books they rest on** | **HC 10.1(v)** — the corpus glosses it *"deliberate or not"*. ⚠️ **"Deliberately" is absent from (v) and present in (ii), which is a real signal — but 10.1's preamble and 10.1(a) both impose deliberateness, which cuts the other way, and ALL FOUR Interpretations to Rule 10.1 were read and none is on point.** *"The document presents an inference as settled; it should say it is a reading of the text's structure."* **And the four-book slew-footing sentence reaches the right conclusion via an imprecise premise:** 639(a) excludes slew-footing from the **minor**, not from the (a) Note, whose relief is worded *"under this rule"* — **the operative reason the carve-out cannot reach a slew foot is that the Note requires a hook- or poke-check, which a slew foot is not.** | round 53  — **closed round 53 — re-cast as a reading in both files, wording converged** |
| ✅ | ⚠️ **The owner document is the one that is ambiguous: `rules_primer.md` uses BOTH senses of `6.11(b)(ii)`, bare** | Six undisambiguated references — **line 167 is the tag-up sense** (*"so that the attacking zone is completely clear of attacking players"*), **lines 181, 191, 226, 791 and 871 are the stop-play sense.** ⚠️ **And `zone_entries.md:926` and `:943` both defer to `rules_primer.md` as the document that "owns this"** — *"the ambiguity the two owned files just resolved is unresolved in the document they point readers at."* **The fix is already written and verified in the two owned files and can be copied.** | round 53  — **closed round 53 — seven, not six; disambiguated with zone_entries’ existing convention** |
| ✅ | **An edition mismatch on a Situation Handbook citation** | `iihf_sit_flat.txt` on disk is **Version 1.0, June 2025**; `risk_management.md`'s Sources link points at **`…_17082025-v1_1.pdf` — v1.1, August 2025.** ⚠️ **Situations 63.27 and 83.34 were verified against v1.0, not the version the document cites.** The rulebook itself is fine — `iihf_rules.txt` is **v1.1 July 2025** and no document claims a version for it. → `source-verifier`. | round 53  — **closed round 53 — v1.1 obtained; the URL had changed what it serves** |
| ✅ | **Four figures verifiable by nobody, and named as the next round's cheapest target** | **Rowland 2014** — `practice_and_development.md` carries **g = 0.50 [.42,.58], 159 effect sizes, and a k=17/k=52 breakdown.** ⚠️ **`doi.org` returns a 1,028-byte Incapsula interstitial; psycnet the same; `is_oa: false`; and the published abstract carries NO NUMBERS AT ALL.** So all four are **not verifiable at any URL reached**, by anyone, so far. ⚠️ **The agent changed nothing** — correct under non-negotiable 3 — and named it *"the next round's cheapest target, via an institutional copy or the author."* **Also unconfirmed:** Thurber's three youth thresholds are located as the review's **own conclusions**, while the corpus claims it is *restating* consensus — plausible (SORT grade B) but needing full text that is in-EPMC and not OA. | round 53  — **closed round 53 — REFUTED: the full text WAS reachable. All four Rowland figures verified against it, plus a fifth error found (free recall g=0.29, level with recognition, which the corpus had omitted)** |
| ✅ | ⚠️ **The self-talk claim asserts non-inferiority from an absent comparison, at three sites** | `mental_game.md:354`, `:622` and `:680` say a motivational cue is ***"at least as good"*** for gross tasks. ⚠️ **That asserts NON-INFERIORITY from a comparison the source does not report** — a shade stronger than `:83`'s careful *"unestablished for gross tasks"*, which is the correct form and is already in the same document. **The verifier reported it and declined to fix it**: *"A content-reviewer call, not mine."* | round 53  — **closed round 53 — ROW WAS STALE (described HEAD). ⚠️ But the uncommitted fix had OVER-corrected into a FALSE negative existence claim at four sites; the paper does report all four matching-hypothesis cells. Repaired** |
| ✅ | ⚠️ **Rule wording quoted against a URL that serves 33 characters** | `team_play_and_culture.md:613/:615` and `neutral_zone_systems.md:830` cite `www.usahockeyrulebook.com` for **Rules 202, 204(a), 624, 604, 625(b) and Casebook Situation 2**. ⚠️ **No quotation can EVER be located there** — the site root and a specific casebook page return the identical 33-character body. The corpus already cites the USA Hockey PDF elsewhere, which is presumably the real provenance. ⚠️ **Recommendation, and note what it is NOT:** point the *evidence* at the PDF and keep the `.com` as a **navigation link only. Do not delete it — it is where a reader goes in a browser.** | round 53  — **closed round 53 — the byte count was wrong (2,192, not 33; a JS SPA shell rendering to an empty body) but the operative claim held. Two of three sites repointed to the PDF with the .com kept as navigation; the third is in flight** |
| ✅ | **A citation that says more than its abstract does — the one real content defect the audit found** | `mental_game.md:702` states the meta-analysis *"supports a matching hypothesis: instructional self-talk beat motivational **only for fine motor tasks**, with **no significant difference for gross tasks**."* ⚠️ **The abstract says only** *"Instructional self-talk was more effective for fine tasks than was motivational self-talk"* — **it states no null result for gross tasks.** *"That may well be in the full text; it is not at the cited URL."* The *"only"* and *"no significant difference"* both need checking before they stand. **The paired figures at :702 and :704 were located verbatim and are sound** — 32 studies, 62 effect sizes, ES = .48, and 112 effect sizes. | round 53  — **closed round 53 — ROW WAS STALE (described HEAD); the replacement text was the defect. See the row above** |
| ✅ | **The 620-row sweep ran and produced a BETTER signature, after the first one died** | 639 rows distributed per host, ranked by separation, **53 URLs fetched across 28 hosts.** ⚠️ **The replacement rule: use RENDERED-TEXT LENGTH, not wire bytes.** That is what actually convicted things. **Convicted:** `europepmc.org` (**51 rows**, **679 rendered chars** of Angular navigation chrome, no article title, unchanged compressed or not); `usahockeyrulebook.com` (**33 rendered chars**, and the site root and a specific casebook page return the *identical* body); `sagepub` and `tandfonline` (cookie walls — ⚠️ **a curl cookie jar defeats both**, yielding 30–73 KB of real article). ⚠️ **Cleared EXPLICITLY, so nobody re-runs them: 22 hosts**, each refetched, HTTP 200, correct title, small body genuinely a short page. Two worth naming — `blueseatblogs.com` sets a generic `<title>Email</title>` **but renders fine, so do not read that as a soft-404**; and `hockeycanada.ca` returned **real titles**, *not* the soft-404 pattern this corpus has seen on that host before. | round 53 |
| ⬜ | **The repair introduced a duplication three lines from itself** | `on_ice_communication.md:159` already reads *"The carrier's head is often down; without a voice, you are not an option."* The prevalence repair **inserted the same claim in near-identical words into the first bullet at :162**. ⚠️ **The claim it removed was distinct; its replacement is a copy of the line above it** — and *"the reader now meets it twice in consecutive breaths, and the audio listener hears it twice."* **Left deliberately for a content-reviewer**: which of the two to drop is house style, not the provenance dimension. | round 53 |
| ✅ | **A trap declined, and worth recording as a pattern** | `scanning_and_anticipation.md` carries a measured figure that **looks like support** for *"the carrier's head is often down"*: Berg et al. (2025), 2,545 puck receptions, 88 SHL/SDHL professionals, **no scan at all in 39% of receptions**. ⚠️ **It is not support.** It measures the **receiver before receiving**, not the **carrier while carrying**, and the population is **professionals**. *"Right number, wrong population. Do not."* **The unsourced claim was correctly left unsourced rather than given a citation that does not fit** — non-negotiable 3 says source it or label it, and a wrong source is neither. | round 53 |
| ⬜ | **`on_ice_communication.md`'s prevalence disclosure does not cover its own Key Takeaways** | Its Common Mistakes list opens with a **sound and correct** disclosure — *"Nobody publishes a ranking of amateur mistakes, so treat 'most common' claims **here**…"*. ⚠️ **The word "here" scopes it to that list.** KT2 (*"both are usually unsaid"*) and KT10 (*"the loudest team usually looks like the more skilled team"*) make claims of exactly the kind it disclaims, **in the layer the podcast extracts**. **The disclosure is not the defect; its SCOPE is.** Per non-negotiable 4 the fix is to extend it, never to strip it. | round 53 |
| ✅ | ⚠️ **A DISCLOSURE DESCRIBING A CORPUS THAT DOES NOT EXIST — and the agent disagreed with the census to find it** | The census judged `center.md`, `winger.md` and `defender.md`'s *"the most common defensive-zone system"* as needing nothing, and recommended **linking** to the disclaimer at `how_to_watch_hockey.md:611`. **The agent checked the disclaimer and refused both.** It reads: *"…is coaching consensus, not a measured prevalence. No survey has been published, **and the text says so**."* ⚠️ **The text does not say so.** All three sites hedge the **rule** half (*"a coaching choice rather than a rule"*) and state the **prevalence** half flat. **The disclosure was describing a corpus that does not exist at those three addresses.** ⚠️ **And linking would have made it worse:** the natural target, `defensive_zone_coverage.md`, **never makes the prevalence claim** — pointing at it would have propagated a claim *outward from a document that does not contain it*, which is the exact `special_teams.md` failure the style guide records. Rescoped instead; the claim survives correctly labelled at its one sound site. | round 52 |
| ⬜ | ⚠️ **The risk this repair pass CREATED, named by the agent against its own work** | Every replacement was extracted from a body sentence in the same section — which satisfies *extract-never-author*. ⚠️ **But the body sentences themselves were never checked.** *"An unmarked tap-in is more dangerous than a high-slot shot through traffic"* and *"a glass clear is very hard to pick off"* are now doing the work the superlatives used to do, **at greater prominence**, inherited on trust. **"I have moved unverified content from prose into the summary layer, which is the more consumed one."** ⚠️ **And a second self-named limit:** the pass rescoped ~14 rankings for want of a source but **never looked for a source that CONTRADICTS any of them** — the check the style guide's own worked example says actually matters. If *"almost all clean scoring chances originate in transition"* is refuted by public shot-location data, the repair **hid** the claim rather than correcting it. **Test that against `shooting.md` and `offensive_zone_play.md`.** | round 53 |
| ✅ | **A summary layer asserting a claim its own body never makes, and a pointer to a section that does not exist** | ⚠️ **`team_play_and_culture.md`:** *"Almost every too-many-men penalty is a communication failure at the door"* appeared **only** in Common Mistakes and Key Takeaway 2 — **the body never makes it.** The body's statement is the far narrower *"Know who you are replacing. Not 'a forward' — a specific person."* **Fixed**, but the shape is worth a sweep: a summary layer can assert a corpus-wide prevalence claim its own document does not support anywhere, and no checker sees it. ⚠️ **Also found:** `scanning_and_anticipation.md:145` said the backcheck failure *"has its own section below"* — **enumerated every heading in the file; there is no backcheck section.** A listener was being sent somewhere that does not exist. **Both found only by reading, not by any grep.** | round 53  — **closed round 53 — BOTH halves stale, and BOTH prior fixes incomplete: the body at team_play_and_culture:97 still carried the prevalence claim in different words, and it is now labelled rather than deleted** |
| ✅ |**The "most under-used X in amateur hockey" family — MAPPED: ten sites, nine documents, and the two contradicting Key Takeaways are about the SAME manoeuvre** | Sites: `on_ice_communication:162` · `time_and_space:98`, `:117` · `breakouts:856`, `:866` · `zone_entries:20`, `:999` · `passing_and_receiving:172` · `body_contact_and_battles:208` · (`neutral_zone_systems:412` and `:659` now fixed). ⚠️ **The two directly contradicting Key Takeaways are `zone_entries.md:999`** (*"The delay is the most under-used skill in amateur hockey"*) **and `time_and_space.md:117`** (*"the most valuable under-used skill in amateur hockey"*) — **and on a read they are about the SAME manoeuvre**, turning away from the line rather than forcing it. **That is one claim with two owners and no source.** The work is to **pick one document to hold it and hedge it there**, not to hedge it nine times. ⚠️ **`getting_started.md:401` is a DIFFERENT case and must be left alone** — its *"underused"* is about financial assistance and is attached to named Hockey Canada programmes. ⚠️ **The repair form is settled:** strip the superlative from the heading and replace it with a descriptive subtitle extracted from the section's own facts block — **not** a ninth hedge. | round 52 | **CLOSED round 53 — and the map was a LOWER BOUND.** Ten sites fixed across 4 files by extracting each document's own mechanism. ⚠️ **The brief's framing was one layer off**: `time_and_space.md`'s superlative was a **body lead, not a Key Takeaway** — the corpus never had two KTs in flat contradiction. ⚠️ **`zone_entries.md` had FOUR forms, not two, ESCALATING outward from the body** — Overview *"among the most"* → §5 *"the single most valuable and least used"* → Common Mistakes *"almost nobody uses it"* → **KT7 *"THE most under-used skill in amateur hockey"***. The strongest was in Common Mistakes and was not in the map. ⚠️ **`passing_and_receiving.md`'s three sites disagreed with each other** — body and facts said *"most over-attempted **pass**"*, Common Mistakes said *"most over-attempted **play**"*, strictly wider, in the layer the podcast extracts. | round 53
| ❌ |**The prevalence repair worklist — 8 majors and ~35 sites, with replacement strings already written** | From the round-52 census. **(1) ⚠️ THE HIGHEST-VALUE ONE: `goaltender.md:24`, in the Overview** — the *original, unhedged* wording of the exact claim the sweep hedged in three other places (`:427` facts, `:437` body, `:1102` KT4). **A correction reached the body, the facts block and the Key Takeaway and stopped one screen from the top of the file** — the canonical failure mode, inverted, in the most-read prose in the document. **(2) `defending_the_rush.md` states bare in FIVE places what `winger.md:568` and `neutral_zone_systems.md:349` explicitly say it *"states the same way"* with a disclosure** — a grep of the whole file for hedge vocabulary returns **zero**. Two documents point readers at a third for a qualification the third does not carry: the style guide's own worked failure, running again. **(3) `goaltender.md:333` over-hedged — it replaced a prevalence claim with a SELF-REFERENCE** (*"the error this section exists to fix"*), which says nothing about severity and also imports the corpus-narrates-itself construction (non-negotiable 6). **(4) `:1126` caveat (10) is a negative existence claim about sources this repository does not hold** — there is **no goaltending material in `sources/` at all** — so it cannot be verified in either direction and should say so. **(5) `:930`'s disclosure orphans three sibling counts** that DO count goals by cause (`game_management.md:325`, `offensive_zone_play.md:693`, `body_contact_and_battles.md:869`). **(6) `on_ice_communication.md:480`'s disclosure is section-scoped and does not reach `:385`, 95 lines earlier in a facts block** — the *"a restriction that lives in prose does not exist"* trap. **(7) ⚠️ TWO KEY TAKEAWAYS CONTRADICT EACH OTHER** — `time_and_space.md:571` and `zone_entries.md:998` each assert a *different* skill is **the** most under-used in amateur hockey, and **both are stronger than the bodies they extract from**. Part of a *"most under-used X"* family spanning **eight documents**, each naming something different. **(8) `faceoffs.md:407`/`:420` assert a draw-technique win rate in the document that owns faceoff statistics computed from the NHL API — which records no draw technique.** Plus ~35 single-site (c)s with strings written. ⚠️ **Do not apply uniformly** — the agent listed the documents it judged to need nothing and why, and specifically resisted hedging `conditioning_and_recovery.md`, whose claims sit beside named studies with stated populations. | round 52 | ⚠️ **RETRACTED AS A SOURCE OF BRIEFS — THREE of its items were already closed by HEAD and the row was never updated.** Written by the round-52 census; commit `6d253d8` was made **after** it and fixed part of it. **(1)** Job 1 is **inverted** — the Overview and KT4 already carry the hedge; **the one site the sweep missed is the FACTS BLOCK.** **(2)** The `:333` self-reference **is not present** — `grep "exists to fix"` returns three hits, **none in that file.** **(3)** *"A grep of the whole file for hedge vocabulary returns zero"* is **false** — two well-formed disclosures are sitting there. ⚠️ **The agent's verdict: *"The only fully live item in the brief was the one it described as already fixed."*** | round 53 |
| ⬜ | **The corpus may now repeat itself into uselessness, and no review dimension asks** | **The largest thing round 51 changed, found by `content-reviewer` in its own closing section.** The round added roughly **16,000 words of four-book rules comparison across 29 files — about 70 minutes of speech** — concentrated in the same five minutes of every net-front section. The corpus is now **52.1 hours** — it was 50.6 when this row was written, and **round 52 added the difference**, which is itself part of the question this row asks. *(`check_counts.py` scopes this instance out as non-live, so it went stale by hand while the Tier 0 figure updated automatically. `commit-gate` caught it.)* **A listener working through the crease material meets substantially the same 700-word comparison FOURTEEN times**: `shooting.md`, `offensive_zone_play.md`, `special_teams.md`, `defensive_zone_coverage.md`, `time_and_space.md`, `playing_without_the_puck.md`, `scanning_and_anticipation.md`, `goaltender.md`, `winger.md`, `center.md`, `body_contact_and_battles.md`, `team_play_and_culture.md`, `rink_map_and_glossary.md`, `on_ice_communication.md`. ⚠️ **Every one of those passages is individually correct and individually justified** — each document is meant to stand alone, and the round's whole purpose was to stop each of them stating a rule that was not theirs. **That is exactly why no dimension caught it.** D9 checks a summary against its body; D14 checks one document's structure; nothing asks whether the corpus as a whole has become a liturgy. **This is an owner decision and a genuinely hard one** — the alternative to repetition is a pointer, and a pointer is useless to a listener who cannot click. Candidate framing: keep the *instruction* in all fourteen, keep the *scope flag* that tells a reader whether the rule is theirs, and let one owner carry the comparison. **Do not sweep this without deciding it first.** | round 51 |
| 🟡 | **Debts round 51's own repairs created — four of seven worked in round 52; (1)(2)(3) remain** | **Seven, all recorded at the moment they were incurred rather than discovered later.** (1) **Three documents state the puck-carrier lapse in three wordings** — `rules_primer.md`, `zone_entries.md` and the new `breakouts.md` section — written by three agents each forbidden from reading the others' files. **Nobody has reconciled them.** (2) **Interpretation 1 and Interpretation 2 govern different consequences and three bodies blur it**: Int. 1 saves the **goal**, Int. 2 conditions the **penalty**; `center.md`, `winger.md` and `offensive_zone_play.md` all call Int. 1 "the relief" for Int. 2 without saying which. The agent deliberately did **not** author the distinction — *extract, never author* — so it needs a body edit in all three. (3) **The Table 14 / Table 16 screening qualification lives in `rules_primer.md` only**; several documents still carry the bare claim. (4) **`offensive_zone_play.md:517`** is now the only place "flat" and "Hockey Canada" sit together — correctly qualified two clauses later, and *"a future compression pass would drop the qualifier first."* (5) **Nobody has checked whether the IIHF, USA Hockey and Hockey Canada *slashing* rules reach the hands** independently of their hooking rules, as NHL 61.1 does — if they do, *"three books of four"* stays true but the four-book picture is **wider** than the corpus states. (6) **`hc.txt` Rule 6.11(b) contains TWO `i/ii` lists** and the corpus cites `6.11(b)(ii)` for both — not wrong, but not unique either. (7) **HC's *"by actual physical contact"***, quoted in two Sources notes, is the **glossary** definition (`hc.txt:1024`), not an Interpretation — verbatim, but attributed to the wrong part of the book. **ROUND 52 WORKED (4)(5)(6)(7).** **(4) ✅ FIXED** at `offensive_zone_play.md:531` (not 517): the qualifier now sits *inside* the clause making the claim, and the quotation was **extended to include the rulebook's own "However" sentence**, so the carve-out travels inside the primary text where no compression pass can strip it. **(7) ✅ CLOSED AS A FALSE ALARM — and the debt itself was the wrapped-line trap.** *"by actual physical contact"* **is** in Rule 8.5's own opening paragraph (`hc.txt:~6983`), not only the Glossary — a first `grep` missed it **because the phrase is split across a line break**, which is very likely how the debt was manufactured. The corpus's attribution is correct at all five sites (three Sources notes, not two). No change. **(6) ✅ CONFIRMED and worse than stated:** HC 6.11(b) has two independent `i/ii` lists — A(ii) is the **tag-up** rule (`hc.txt:5415`), B(ii) is the **whistle** rule (`hc.txt:5430`) — and the corpus uses the bare string `6.11(b)(ii)` for **both, in twelve places**, so a reader following the citation lands in the wrong rule about a third of the time. Disambiguating form proposed: append each list's own opening words. **Blocked on file ownership; see the new rows below.** **(5) ✅ ANSWERED — premise partly wrong, and the answer is a SAFETY gap.** The corpus never claimed slashing reaches the hands in three books; it claims a stick on the hands is *hooking* in three of four, which is **correct**. But the unchecked question underneath it was real. | round 51 |
| ✅ | **The tag-up safety gaps — USA Hockey grants no delayed offside below its classification floor** | **Two majors and a minor, all closed in round 52.** ⚠️ **The hazard:** USA Hockey **630(d)** grants the delayed offside and the tag-up only *"(For all Youth 15-Only levels and above, all Girls 16U levels and above, High School and Adult classifications only)"* — most of North American minor hockey is **below** that. A player taught to tag up clears, tags and re-enters **seconds after the whistle**, into a defenceman who heard it and stood down. **The defenceman is the one who gets hit.** ⚠️ **The agent did not stop at a zero grep on Hockey Canada** — it showed the book *does* scope by division where it wants to (its single *"and above"* is a leg-pad rule), which **upgrades the finding from "grep found nothing" to "the absence is deliberate."** It also caught that *"the whistle is immediate"* is **not** in 630(d) but is the consequence of 630(c), and said so rather than attributing it. **The cap decision was argued, not defaulted:** the block sits at 11 facts, so the style guide's split-don't-trim remedy was unavailable; it trimmed the **mechanic** (failure mode: a stoppage) rather than the **caveat** (failure mode: a collision), and verified the mechanic survives in three other layers. **It rejected the reviewer's proposed wording** — that put the caveat last, and *"a qualifier that arrives late has already failed"*. ⚠️ **It also refused an over-broad negative**, declining *"no other book sets that floor"* because it had verified three books and that phrasing would have covered England Ice Hockey unchecked. | round 52 |
| ✅ | **The British books opened for Rule 83 at last — the negative HOLDS, and the landed text was over-claiming it** | ⚠️ **The largest gap in this rule's coverage, named by an agent against its own pass, is closed.** `eiha_inhouse.txt` read in full (631 lines); both British books flattened and searched across **fourteen vocabularies**, with sanity controls proving the search was live. **`83`, `off-side`, `offside`, `tag up`, `tagging`, `blue line`, `neutral zone`, `linesperson`, `zone` — ZERO hits in both.** The rule-number enumeration was **re-derived independently** rather than inherited, and Section 10 "Game Flow" amends **78, 84 and 85 only**. The one route that could have overturned it was closed too: In-House Rule 201 imports IIHF junior rules wholesale, and **IIHF Rule 201 contains exactly one provision** (201.1, the major/GM rule); the Women's section 100–102 carries no offside provision either. ⚠️ **AND THE FIX AS LANDED WAS ITSELF AN OVER-CLAIM.** It read *"IIHF Rule 83.3 stands unamended and British hockey has the delayed off-side and the tag-up at every age band"* — **a statement about British hockey, from a document that only says what one publication contains.** `uk_rules.md` carries the bulletin caveat in three places and the dependant had dropped it: the style guide's *general-document-drops-the-specialist's-caveat* failure. Both files now say **"the In-House Rules carry no amendment to IIHF Rule 83.3"**, with two limits named — EIH and SIHA *"may also issue Rule Bulletins from time to time"* and none has been read, and the EIHL casebook is unobtained. ✅ **Also audited and correct:** the withdrawn *"puck leaving = delayed off-side"* definition (the puck leaving is a **nullifier** under USAH 630(d)(1), not a cause), and the `rink_map` Sources symmetry. **Two brief errors corrected in the corpus's favour:** `breakouts.md:982` already recorded a 29 July check of the same negative — independent corroboration — and `hc.txt` is the 2026-2028 edition, not the superseded one. | round 52 |
| ⬜ | ⚠️ **SAFETY — a truncated Hockey Canada quotation that INVERTS the law when read aloud** | `offensive_zone_play.md:999` (Sources) says *"Rule 7.3 body-checking applies **\"only in divisions of U13 and below\"**"*. **Two defects.** The quotation is **truncated**: `hc.txt:6005` reads *"This rule applies only in divisions of U13 and below, **in female hockey, and any other divisions approved by a Member of Hockey Canada.**"* — the female-hockey limb is dropped. And ⚠️ **the paraphrase inverts the sense on the ear: Rule 7.3 is the rule that PENALISES body-checking**, so *"body-checking applies only at U13 and below"* reads aloud as *"checking is permitted only at U13 and below"* — **the opposite of the law, in a corpus read one sentence at a time.** | round 52 |
| ❌ | ~~**A quotation drifting one character from its book, in seven files**~~ — **RETRACTED. The corpus was right and the EXTRACTION was wrong.** | The NHL prints **`faceoff`** unhyphenated at Rule 81.1 (`nhl_rules.txt:8598`) and **`face-off`** hyphenated in the very next sentence. The corpus quotes it with the hyphen in **five content documents plus the style guide plus `review_history.md`** — `rink_map_and_glossary.md:579`, `rules_primer.md:792`, `time_and_space.md:421`, `breakouts.md:421`, `:438`, `content_style_guide.md:69`, `review_history.md:151` — and **zero occurrences matching the book**. A repair was dispatched for this and **did not land** before its agent died. ⚠️ **Compounded at `breakouts.md:421`, which calls IIHF 81.1 "word-for-word" with the NHL when it is not** — the IIHF writes *"which **Player**… the end zone **"face-off"** dots"*, capitalised, hyphenated and quoted. **So the corpus's transcription is closer to the IIHF's orthography while being attributed to the NHL.** ⚠️ **The general point is bigger than the instance:** *"a transcription census keyed to one phrase only finds the variants I chose to grep for; there is no reason to think this is the only quotation drifting a character from its book, and nothing in the toolchain checks quotations against source text at all."* **`body_contact_and_battles.md:1134`'s "60.2 is word-for-word identical" was re-verified character-for-character and UPHELD.** ⚠️ **❌ RETRACTED THE SAME DAY, and the agent I dispatched to make the edits REFUSED and proved me wrong five ways.** The NHL prints **`face-off`**; `nhl_rules.txt` **lost the hyphen at a PDF line break**. (1) **Wrap arithmetic lands exactly** — every line of that paragraph wraps at 60–71 chars; `:8599` is **77**, the only one over 71, and restoring the hyphen gives 69 + 9, both inside the band. (2) **All 11 `faceoff` occurrences sit at columns 57–69 on over-long lines; zero elsewhere** — against 313 `face-off`. (3) **A control word proves the mechanism:** `time-out` ×34, `timeout` ×1 at col 64 — identical signature; while `shorthanded`, which the NHL really does write unhyphenated, is **spread across columns 24–68**. That is what a genuine variant looks like. (4) The same phrase appears hyphenated three times within sixteen lines, all mid-line. (5) `sources/README.md` names the cause. **So the corpus's transcription was correct at all five sites and I would have corrupted five documents.** `content_style_guide.md:69` and `review_history.md:151` are correct too. ⚠️ **The census that produced this row was keyed to a corrupted needle** — a warning about grep-driven censuses generally. | round 52 |
| ✅ | ⚠️ **Two rulebooks were plain `pdftotext` extractions — measured, and resolved by keeping BOTH** | **`nhl_rules.txt` and `hc.txt` are the only two files extracted WITHOUT `-layout`** (`sources/README.md:29`), and plain extraction **silently joins hyphenated line breaks**, turning `face-`/`off` into `faceoff`. **The corpus quotes both books hundreds of times.** The agent found the artifact only because one line length looked odd — *"had it fallen mid-paragraph instead of at a wrap boundary, I would have confirmed it and corrupted five files."* **It found ~10 more de-hyphenated joins in `nhl_rules.txt` and did not chase them** (`:1015`, `:3193`, `:4733`, `:4949`, `:6838`, `:6845`, `:7572`, `:7577`, `:8205`, `:8975`, `:9182`) **and did not scan `hc.txt` at all.** ⚠️ **The risk runs BOTH ways:** a corpus quotation "corrected" to match a corrupted extraction is a fabrication, and a negative-existence search for a hyphenated term returns a false absence. **The fix is to re-extract both with `-layout` and diff** — but neither PDF is on disk, so both must be refetched first. ⚠️ **A census against the current text can only launder the artifact.** **And the second-order finding:** nothing in the toolchain compares a corpus quotation against source text — `check_facts`, `check_absolutes` and `check_links` all passed **before and after** every defect in that pass. A checker that diffed quoted spans against the rulebooks would have caught the HC 7.3 truncation, a silent verb conjugation, and this artifact in one run. **✅ RESOLVED, round 52.** Both PDFs refetched (NHL 21,695,323 B MD5 `14a2e6c1…`; HC 30,185,748 B MD5 `511592dc…`) and **verified as the same documents** — plain extraction of each is byte-identical to the on-disk file, so the diff is a **flag artefact, not edition drift.** **Measured: 96 hyphen breaks, 84 adjacency-confirmed, 88 corrupted word-instances (56 NHL / 32 HC), ZERO survivals** — deterministic, not sporadic. ⚠️ **Both consequences are real and both have fired: 12 corpus quotations are verbatim CORRECT and ungreppable in the plain text** (a verifier gets zero hits and concludes fabrication — exactly the dispatch an agent refused), **and nine terms are invisible to a hyphenated grep while the books do use them** (NHL *fore-check*, *stick-measuring*; HC *self-defence*, *three-ply*, *non-playing*…). **No corpus claim rests on one yet** — latent, and the next negative written against these files fires it. ⚠️ **THE ANSWER IS NOT A SWAP.** `-layout` puts both halves of a two-column table on one physical line, so **eleven quotations are greppable in plain and NOT in `-layout`** (NHL Rule 69 Table 6; four HC glossary entries). Replacing recovers 12 and loses 11. **The failure modes are complementary, so both are now generated** — `-layout` is the authority for **wording**, plain for **sentence contiguity in two-column tables**. Additive, so **every existing `nhl_rules.txt:NNNN` and `hc.txt:NNNN` citation stays valid.** ⚠️ **`sources/` is gitignored for copyright — only `README.md` is committed — so the RECIPE is the artefact**, and it is recorded in `sources/README.md` and `scripts/fetch_sources.sh`. **One real content defect found and fixed:** `zone_entries.md:923` quoted NHL 83.4 as *"delayed offside"*; the book writes *"delayed off-side"*, **and the same document had it right at line 182.** ⚠️ **One near-miss protected:** `body_contact_and_battles.md:1285`'s *"blindside"* is genuinely unhyphenated in Hockey Canada and must NOT be "corrected". | round 52 |
| ✅ | **A reported checker/style-guide cap discrepancy that does not exist — refuted before it entered the record** | An agent reported *"six pre-existing facts-line cap overruns"* and concluded *"`check_facts.py` passes, so its cap logic differs from the style guide's stated numbers."* **Checked: it does not.** `check_facts.py:75` sets `MAX_LEN, MAX_LEN_QUALIFIED = 200, 300` and `:227` applies the 300 cap to **`QUALIFIED = {"Rule", "Convention"}`** — the agent applied 200 to every label. Measured: `dzc:456` Technique 193/200 ✓ · `dtr:135` Position 191/200 ✓ · `dtr:317` Convention 192/300 ✓ · `dtr:400` Convention 225/300 ✓ · `goaltender:16` Convention 220/300 ✓. **All six are inside their caps and the checker and the specification agree.** ⚠️ **One is worth keeping:** `dtr:341` is a `Rule:` at **exactly 300 of 300** — legal, and with no headroom at all, so the next qualification anyone adds to it forces a split. | round 52 |
| ✅ | **`special_teams.md` shared-wording audit — six new defects in prose written this round, and three pre-existing sameness claims contradicted** | The four briefed defects were confirmed and **six more of the same class were found in the subsection written this pass**: Rule 63.6, 67.5 and 63.2(vii)/(vi) each quoted as *"NHL and IIHF"* where the string is **NHL-only**; Hockey Canada cited inside a *"where the puck is"* framing when 10.2(a)(v) locates the **infraction**; a Casebook quotation shortened below its sentence. ⚠️ **And `check_absolutes.py` caught the agent's own new LEAD sentence** — a tier denied without a book and then granted, in the sentence most likely to be heard alone. **Three pre-existing sameness assertions were contradicted:** IIHF 84.3 writes *"three (3) skaters"* where the NHL writes *"three players"*; IIHF 69.1 writes *"a 'relevant contact'"* where the NHL writes *"contact"* — **in this corpus's most-repaired rule**; and **IIHF 81.4's exception list runs to FOUR**, adding *"a Player with a broken skate"*, so **a British reader may substitute for a broken skate after icing and an NHL one may not** — a real reader-facing consequence hidden inside a "same words" claim. **Two substantive corrections beyond wording:** USA Hockey 614(a) reaches the smother only where it is *"deeming the puck unplayable and causing a stoppage of play"*, and Hockey Canada files it as **handling the puck**, not delay of game. | round 52 |
| ✅ | ⚠️ **A rulebook typo that makes the "correct" quotation a FABRICATION — and the corpus now has two of these** | **NHL 76.7 prints *"When a least two face-off violations…"*** (`nhl_rules.txt:8151`). ⚠️ **Quoting it "correctly" as *"at least"* would be a fabricated quotation** — so `special_teams.md:911` now **paraphrases the NHL side rather than quoting it**, which is a legitimate third option the style guide does not name. **This is the same typo round 51 confirmed by rendering printed page 116 at 600 dpi** and marked with the corpus's only `[sic]` in `faceoffs.md`. **So the corpus now handles one instance with `[sic]` and another by paraphrase**, and USA Hockey 618(a)¶3 prints a third (*"prevents and obvious and imminent goal"*), currently quoted around rather than marked. ⚠️ **The work is to decide the house rule** — `[sic]`, paraphrase, or an explicit note — **and say it in the style guide**, because a later tidying pass that "corrects" any of the three manufactures a fabrication. *(And the read-aloud pipeline now speaks `[sic]` as ", as printed in the original," — which the paraphrase option avoids entirely.)* | round 52  — **closed round 53 — REFUTED and reclassified: USA Hockey 618(a) was NOT a third typo treatment. The corpus quotes 614(b), which prints cleanly; the defect was MISATTRIBUTION at four sites, all repaired. House rule written into the style guide** |
| ✅ | ⚠️ **The style guide contradicted the corpus it governs, on a difference this round propagated to eight sites** | `content_style_guide.md:71` asserted the NHL and IIHF icing rules 81.4 and 87.1 have *"wording on both is identical"*. **Verified false:** IIHF 81.4 lists a **fourth** substitution exception the NHL lacks — *"a Player with a broken skate"* — so **a British player may be substituted after his own icing for a broken skate and an NHL player may not.** ⚠️ **Pre-existing and byte-identical at HEAD, so outside the staged diff — the gate flagged it without blocking.** It matters because **round 52 added eight broken-skate mentions across the corpus while the guide still said the opposite**, and *"a future tidying pass reading the guide as authority would reintroduce the defect the round just removed."* **87.1 does match; only 81.4 was wrong.** | round 52 |
| ⬜ | ⚠️ **"Match the existing correct treatment" is an UNSAFE instruction — three nominated models carried the defect** | `rules_primer.md:808` (twice — it was nominated at two separate gate passes), and `center.md`'s facts line. **In every case the agent sent to copy it read it, found the defect, and fixed it instead of propagating it.** ⚠️ **The third instance is the sharpest: `rules_primer.md:808` and `:675` stated USA Hockey's empty-net limb with its own condition stripped** — the half-of-a-two-part-rule defect, in the file nominated as the cure for that exact defect. **This belongs in the style guide beside the self-check row above:** when a brief says *"match the existing correct treatment"*, the instruction must be *"verify it against `sources/` first, and if it is wrong, fix it and say so"*. **Three agents did that unprompted; the instruction should not depend on them thinking of it.** | round 52 |
| ⬜ | **The breakaway awarded goal — the strongest candidate for the EIGHTEENTH instance, deliberately left open** | ⚠️ **My brief asserted no counterpart to NHL 25.1/57.4 had been verified in the other books. The agent REFUTED that and found all three** — **IIHF 25.3** (`iihf_rules.txt:2510`), near word-for-word with NHL 57.4; **Hockey Canada 4.12(a)** (`hc.txt:3533`), which awards the goal by reference into a list of 4.11(a) romans; and **USA Hockey 616(b)** (`usah.txt:4136`), which ⚠️ **conditions this limb the same way 614(b) conditions the crease limb** — *"an obvious and imminent goal has been prevented"*. **It then declined to extend the four-book claim, and its reasoning is why this is a row rather than a fix:** (1) it needs the same edit at four sites plus `risk_management.md`, which owns the penalty arithmetic and was not its file; (2) **the omission does not change what a reader does** — the instruction *"do not foul once your net is empty"* is identical in all four books, so the omission errs toward caution; and (3) ⚠️ **a correct four-book sentence here is NOT a copy of the crease one** — it is *NHL/IIHF on a "reasonable scoring opportunity" test, Hockey Canada by reference into 4.11(a), USA Hockey on an "obvious and imminent" test.* **"That is a new sentence, not a copy, and writing it in a hurry is how the seventeenth instance got written."** ⚠️ **Two unknowns behind it:** IIHF 25.3 defers its qualifying infractions to **Table 12**, which nobody has read; and **HC 4.11(a)'s enumerated romans were not checked**, so whether the fouled-from-behind breakaway is inside or outside 4.12(a)'s list is genuinely unknown. | round 52 |
| ⬜ | ⚠️ **The "re-read your own edits" self-check belongs in the style guide — it catches defects PROSPECTIVELY, in text no search has seen yet** | ⚠️ **The original title of this row claimed the self-check *"out-performed every search this round"*. `commit-gate` judged that over-claimed and it was right: sixteen instances were found by eight search methods against five self-catches. **The defensible claim is different and better — the self-check caught defects PROSPECTIVELY, in text the searches had not yet seen.** Title corrected; the evidence below is unchanged. **Five separate agents caught themselves writing a NEW half-rule while repairing the previous one**, and reported it instead of shipping it. The last found **five** such sentences in its own new text before finishing — including one that stated the goalie limb without the goaltender's own exposure, which would have been the sixteenth instance. ⚠️ **Sixteen instances of one defect were found by eight different search methods; nearly every one was created by the repair for the previous.** The instruction that produced the self-catches was carried only in agent briefs: *"Before you finish, re-read your own edits and ask whether any of them states one half of a two-part rule."* **It is not in `content_style_guide.md`.** ⚠️ **And twice, the passage nominated as the MODEL to copy carried the defect itself** (`rules_primer.md:808`, then `center.md`'s facts line) — so *"match the existing correct treatment"* is not a safe instruction on its own, and the style guide should say so. | round 52 |
| ✅ | **The read-aloud pipeline does NOT re-create the half-rule — tested, not assumed** | An agent raised the sharpest possible objection to fourteen rounds of repair: the fixes attach each escalation to its claim **with an em-dash**, and if `md_to_speech.py` splits on em-dashes it would **re-create the half-rule at the point of delivery**, undoing all of it for the listener. *"This is the most likely place the fourteenth instance is hiding."* **Tested:** rendered `faceoffs.md` — 56 chunks, **584 spoken paragraphs** — and extracted every paragraph making a hand-on-puck claim. **Five, and four carry the escalation intact.** The fifth is the section **heading**, deliberately scoped to the NHL and IIHF but not escalated, on the reasoning that a penalty shot is **worse** than a minor, so a title that understates errs in the safe direction. ⚠️ **Five other paragraphs tripped the detector and were false positives** — faceoff-violation and encroachment passages under Rule 76, a different rule. **The splitter is not the problem.** ⚠️ **But this test covers one document.** The other thirteen repaired files were not rendered, and `md_to_speech.py` was itself modified this round. | round 52 |
| ✅ | **A reported edition gap that does not exist — recorded so it is not re-raised** | An agent reported that `sources/iihf_rules.txt` is **v1.0** while the corpus baselines on v1.1, and flagged it as *"a live gap, not a closed one"*. **Verified and REFUTED:** `iihf_rules.txt` is **MD5-identical** to `iihf_rules_v1.1.txt` (`b8bc551a…`) and the document **self-declares *"Version 1.1, July 2025"***; `iihf_rules_v1.0.txt` is a separate file with a different MD5 that self-declares *"Version 1.0, May 2025"*. **The filename `iihf_rules.txt` carries no version, which is what invited the inference** — and that is worth knowing, because the same agent was right about four other things in the same report. | round 52 |
| ⬜ | ✅ **PARTLY REFUTED — IIHF Appendix IV Table 16 IS recoverable, and the reason it looked unverifiable is the finding.** A `source-verifier` read rows 6B–6G in both editions from a whitespace-flattened extraction and confirmed the headers directly: **`TABLE 16 · RULE 69`** in 2025/26 and **`TABLE 14 · RULE 69`** in 2026/27 — so the round's renumbering claim is confirmed at source. ⚠️ **Why it looked absent: the appendix interleaves two columns.** `loss of goal only` returns zero because the row reads `A minor penalty is not assessed (loss of` … description-column text … `goal only)`. **A sixth way a grep lies about a source, and the only one that produced a recorded finding rather than a near-miss.** | Found at the third gate pass, closing a concern `commit-gate` raised and could not settle itself. **The table interleaves its two columns in BOTH the plain and the `-layout` extraction**, because the interleaving is in the **PDF's own text ordering**, not in the flag. Situation 6D's answer comes out as *"…A minor penalty is not assessed (loss of"* / *"A goalkeeper initiates contact with an attacking Player to"* / *"goal only). The announcement…"* — **the left column spliced into the middle of the right column's sentence.** ⚠️ **So flattening cannot repair it:** `"loss of goal only"` returns **zero** against `iihf_rules.txt` raw *and* whitespace-normalised, and so does the full 6D answer. **The same phrase IS greppable in `nhl_rules.txt`**, whose Reference Table 14 does not interleave — so this is table-by-table, not book-by-book. **The corpus's Table 16 quotations are CORRECT** — 6D was read out of the interleaved text and matches the NHL's row word for word — **but a verifier who greps and stops will report fabrication**, and one nearly did. **The work:** verify Table 16 by rendering the page, and decide whether `content_style_guide.md`'s newly-added enumeration of rows **6B, 6E, 6F, 6G, 6H and 7B** should carry that qualification, since only 6D has been read directly. ⚠️ **`project/verification/` has no procedure for a claim that can only be verified visually** — that is the gap this row really names. | round 52 |
| ✅ | ⚠️ **SAFETY — the slashing route to the hands. Core premise held; FOUR sub-premises of my brief were REFUTED** | **Found by the round-52 debt-(5) adjudication, which set out to check something else.** Verified this session: **IIHF 61.1 is the NHL's slashing sentence WORD FOR WORD** (`iihf_rules.txt:5034`, `nhl_rules.txt:6597`), and **USA Hockey 634 (Note) is a shortened form of it** (`usah.txt:4819`). Only **Hockey Canada 9.3 enumerates nothing** (`hc.txt:7255` — its single "hand" refers to the *slasher's*). So under three books a chop at the hands is **both hooking and slashing**, and the corpus tells the reader about the hooking exposure only — `body_contact_and_battles.md:19, 254, 1272`; `defensive_zone_coverage.md:458, 468, 682`; `on_ice_communication.md:212`, each saying the NHL reaches it *"instead"* / *"only"* / as *"the exception"*. ⚠️ **This under-warns by a full ejection tier:** IIHF 61.3 (`iihf_rules.txt:5048`) reaches a major plus **automatic game misconduct** for reckless endangerment with nobody hurt, and USA Hockey 634(b) (`usah.txt:4824`) makes that major-plus-game-misconduct **mandatory**, with a match penalty at 634(c). Hooking carries no such ceiling. **Needs `safety-reviewer`, not just propagation.** | round 52 |
| ✅ | **`6.11(b)(ii)` cited for two different rules — EIGHTEEN occurrences, not twelve** | Debt (6), confirmed above. **Tag-up sites:** `winger.md:280, 292, 645`; `zone_entries.md:156`; `zone_entries.md:995` (first mention). **Whistle sites:** `breakouts.md:815, 823, 976, 982`; `zone_entries.md:159, 160, 170, 913, 922, 939, 940`; `zone_entries.md:995` (second mention); `zone_entries.md:1007`. Proposed form, matching how the corpus already disambiguates NHL 1.8 vs 27.8: keep the number, append the limb — `(the "allow play to continue if" limb)` / `(the "During a delayed offside, if" limb)`. **Mechanical once adjudicated, but NOT a blind sed** — the same string means different things at adjacent lines, and `zone_entries.md:995` contains **both senses in one line**. **✅ DONE, round 53. The premise held; the count did not** — **18 occurrences across 17 lines**, not twelve. ⚠️ **My proposed form was REJECTED on the heard-alone test:** *"(the 'During a delayed offside, if' limb)"* discriminates nothing to a listener, **because both clauses are about a delayed offside** — and "limb" already means something else in this corpus (the triggers *inside* the stop-play clause). Used instead: **"(the tag-up clause)"** and **"(the stop-play clause)"**, both anchored in Hockey Canada's own words — *"the Linesperson will **stop play**"* at `hc.txt:5432` and *"tagging up"* in its Interpretation 11 — which **discriminate functionally when heard bare**: one continues play, one stops it. **Two propagation gaps found that the row did not have:** `zone_entries.md:1007`'s Sources entry **conflated the two clauses inside a single citation**, attributing two different rules to one number in the citation of record; and **`winger.md`'s Sources never cited 6.11(b)(ii) at all** though its body relies on it three times. ⚠️ **And it caught THREE of its own splits leaving a half that was unsafe heard alone** — ninth agent to catch itself. **The safety fact was re-verified, not merely preserved:** NHL 83.3 carries both a pressure and a contact limb; HC 6.11(b)(ii) has **neither**, so a defending puck carrier under Hockey Canada gets no stoppage from pressure alone. | round 52 |
| ✅ | **Two book-structure claims — one REFUTED as already correct, one verified and stated positively** | (a) `body_contact_and_battles.md:254` says the NHL *"only looks like the exception, because its hands provision sits in a different section of the book"* — **that framing has no USA Hockey analogue: 623 and 634 are BOTH in Section 6** (`usah.txt:8067`, `:8103`). It is an NHL/IIHF/Hockey-Canada structural fact being stated generally. (b) **An unstated Hockey Canada consequence nobody has written down:** HC 4.11(b)(i) — *sic*, 4.8(b)(i) (`hc.txt:3043`) — triggers a **Game Ejection at three minors for "stick infractions"** and defines those as **9.1–9.5 only**. Hooking (8.2) is not on the list, and Interpretation 1 to 9.1(a) (`hc.txt:7211`) confirms the principle in terms. **So under Hockey Canada a stick at the hands, being hooking, does not count toward the three-strike ejection — where under the other three it can be slashing and does.** No corpus site states this. | round 52 |
| 🟡 | ⚠️ **Every negative-existence claim re-tested against normalised text — 48 of ~73 propositions done, 2 REFUTED** | **The most valuable thing round 52 produced, and it came from an agent catching its own error.** Debt (7) was manufactured because `grep "actual physical contact" hc.txt` missed the rule-text occurrence — **the phrase is split across a line break**, so a true statement was recorded as a defect. The agent caught it only because the surrounding read contradicted the grep. **The corpus is FULL of "book X writes no such provision" claims, and every one of them rests on exactly this kind of grep.** The technique that works — flatten the book to a single whitespace-normalised line before searching — has now been applied to perhaps a dozen phrases across two agents, out of dozens of load-bearing negatives. **The work is to enumerate every negative-existence claim in `content/` and re-test each one against normalised text.** ⚠️ **This is a defect class that produces confident falsehoods in BOTH directions** — a missed provision makes the corpus say a book is silent when it speaks, and a manufactured absence makes it invent a divergence. Round 44 did the second; debt (7) nearly did the first. **✅ AUDITED, round 52.** All eleven books flattened to whitespace-normalised strings; **Hockey Canada and the NHL tested against BOTH the plain and `-layout` extractions**, IIHF ligature repair verified intact before any negative was trusted, and the 476pp USA Hockey Casebook brought into scope. **Measured: 417 book-scoped negative-existence assertions across 34 of 37 documents, ~73 distinct propositions. 48 tested: 46 CONFIRMED, 2 REFUTED — covering 267 of 417 instances (64%).** Every confirmation used **at least three vocabulary variants**, eleven for the goaltender-vision cluster. ⚠️ **REFUTATION 1 — the fend-off permission.** `puck_handling.md:936` says *"Neither USA Hockey nor Hockey Canada writes the fend-off permission — the phrase appears in neither book."* **USA Hockey's Casebook does**, at Standard of Play Situation 6: a player in control *"is allowed to use a free hand to maintain body position that they legally established… uses the free arm to fend off the opponent"*. **The Playing-Rules half is correct; the book-level claim is not**, and it has **ten sibling instances**. *(The Hockey Canada half is confirmed — 8.1 permits blocking a stick, not holding it.)* ⚠️ **REFUTATION 2 runs toward MORE confidence, not less.** `rules_primer.md:404` says the Casebook uses "bite" once, of a **Linesperson**. It uses it **three times, twice of an opponent** — *"a match penalty"* under 602(a), and a finger-bite drawing *"both the match penalty (attempt to injure) and major plus game misconduct"*. **So it is not a gap at all.** ⚠️ **The near-miss is as instructive as the hits:** the agent first found HC's Rule 7.5 *preamble* (*"In all circumstances the responsibility is on the player…"*, no "always") and was one step from reporting a corpus misquote — until reading further found **Interpretation 2 to 7.5(a)**, which does say *"always"*. **A grep that stopped at the first match would have manufactured round 44's failure again.** | round 52 |
| ⬜ | **The negative-claims audit's unreached tail — 150 instances (36%), ranked** | **Tier 1, safety/penalty consequence, untested:** the USA Hockey stick-to-stick hooking exemption (`rules_primer.md:360`, `:359`, `:675`); the waist floor in USAH 621 / HC 9.5 / NHL 60.2 (`rules_primer.md:362`, `:794`; `body_contact:1114`, `:1134`); the accident exemption and slew-footing relief (`rules_primer.md:361`, `:796`); the late-hit window (`body_contact:437`, `offensive_zone_play:770`) and USAH 625's tier ceiling (`body_contact:449`, `time_and_space:222`); IIHF automatic suspensions (`body_contact:509`, `:529`); HC 7.5(d) plain misconduct (`rules_primer.md:17`); the USAH lift permission (`body_contact:214`); NHL 10.4's broken-stick equivalent (`rules_primer.md:434`); IIHF 69.3's missing ceiling (`goaltender.md:859`). ⚠️ **And the head-down exception negative (`body_contact:390`, `:562`, `rules_primer.md:15`) should be re-tested against the Casebook specifically — that is exactly what flipped both refutations.** **Tier 2, divergence-establishing:** IIHF Rule 76 (`faceoffs.md:263`, `:314`), USAH 612(b) (`faceoffs.md:698`), IIHF 81.1 (`special_teams:620`, `rules_primer.md:263`), `rules_primer.md:499`, `special_teams:776`, `puck_support_and_spacing:383`, `rules_primer.md:403`, and **`shooting.md:139`, whose disclosure explicitly says the Casebook was not checked — it is checkable now.** **Tier 3 is not settleable by rulebook grep** (coaching literature, the Durnan causal link, the 1948-49 rule-change record) and belongs to `source-verifier`. ⚠️ **A qualification that must NOT be removed:** every *"the In-House Rules carry no amendment to Rule NN"* is confirmed against **that document only** — the In-House Rules say bulletins issue from time to time and **no bulletin has ever been read.** | round 52 |
| ✅ | **A genuine internal contradiction in two rulebooks — INVESTIGATED, and it cannot be resolved from any source that exists** | **NHL 69.3 and IIHF 69.3 say the give-ground attacker takes a penalty; their own appendices say he does not.** NHL Reference Table 14 D (`nhl_rules.txt:12355-12364`) and IIHF Appendix IV Table 16 Situation 6D (`iihf_rules.txt:9989-9992`) both answer the goal-scored case *"Goal is disallowed. **A minor penalty is not assessed (loss of goal only)**."* The severity divergence between the two books bites at **6B**, the no-goal case. **No source on disk settles which governs**, and the agent that found it reported both rather than choosing — correctly. Recorded in the style guide. **What would settle it:** the IIHF Situation Handbook (`sources/iihf_situations.txt`, on disk, **not searched for Rule 69**) and the USA Hockey Casebook (**not on disk**). **✅ CLOSED 29 Aug.** The IIHF Situation Handbook — on disk since the corpus began, never opened for this — carries **six** worked situations under Rule 69 (not the *"No situation."* form it uses for Rule 43), and **69.1, 69.2 and 69.6 all pair a disallowed goal with no penalty**, corroborating the appendix. ⚠️ **But its Foreword disqualifies it as a tiebreaker:** *"in case of any contradictions, the valid IIHF Rulebook is always the basis."* **Table 16 is Appendix IV of the Rulebook itself**, so the conflict is **rulebook-internal** and the one document that might have broken the tie has ranked itself below the losing side. **Report both. Do not pick one.** Two corrections applied to the style guide: the divergence bites at **6B, 6E, 6F, 6G and 6H** — a table-wide IIHF generalisation of *"minor"* to *"the appropriate penalty"* with **7B** as the deliberate exception, not a substantive split at 6B — and **NHL 6B is not a mandatory minor** (its description column carries a referee-judgement qualifier). ⚠️ **And the obvious reading is backwards:** the NHL's conflict is **flat**, the IIHF's *"appropriate penalty"* can accommodate "none", so **the British reader's book is the more internally consistent.** **✅ AND THE ADJACENCY DOUBT IS RETIRED** — established three ways that do not use adjacency: the IIHF table **binds label to result on one physical line** (`iihf_rules_v1.1.txt:9989`), row counts and lettering correspond exactly (5:A–E, 6:A–H, 7:A–D), and content corresponds row for row. **The clean IIHF extraction validates the messy NHL one.** | round 51 |
| ✅ | **The Hockey Canada crease characterisation — 32 sites, 12 documents, propagated in ONE round** | **ADJUDICATED AND SWEPT, round 51.** The corpus said HC 8.5 was a *flat position bar with no impairment to judge* and paired it with USA Hockey 625(b) as the same rule. **Both halves were wrong.** HC's *Goal Crease Area* paragraph (`hc.txt:6992-7000`) carries a **carve-out USA Hockey lacks** — a teammate's goal from outside the crease **stands** where the crease player stays passive — so **on the commonest net-front goal in hockey the two books give opposite answers**, and 13 of 15 files said they were identical. HC also **does** have an impairment test naming **vision** (Interpretation 3 to 8.5(a)); it is the counterpart of **NHL 69.3**, not 69.1, and what HC lacks is 69.1's reach **outside** the crease. ⚠️ **The screening negative SURVIVED** — it needed the outside-the-crease qualifier, not a retraction. ⚠️ **The corpus quoted Interpretation 3's permissive sentence at four sites and its restrictive sentence NOWHERE** (zero hits corpus-wide) — the style guide's *true half of a two-part rule* failure, found exactly. **Retired corpus-wide:** *"with no impairment to judge"*, *"voids the goal outright"*, and any unqualified *"no screening or goaltender-vision provision"* — the last of which was **literally false**, since USA Hockey 625(a)(1) *is* a screening provision (a screen on a **checker**). | round 51 |
| ✅ | **The EPUB render path was never checked either** | **CHECKED 28 Aug — and unlike the TTS path it is sound.** `npm run build` exits 0 with no errors; `check-links` resolves **7,069 internal links (3,780 with anchors)** across 42 pages; `check-arrivals` reports **0 hard** warnings and 7 advisory. All **9 EPUBs** build valid: correct `application/epub+zip` mimetype, one OPF each, zip-intact, and **92 XML documents inside them, 0 malformed** — the well-formedness class that killed the SSML path does not occur here. **Verified end-to-end rather than by exit code:** six of this round's actual edits were located in the rendered EPUB text, so the pipeline demonstrably carries content changes through, not merely builds. | round 51 |
| ✅ | **The TTS render path was never run end-to-end, and it was broken** | **FIXED in `scripts/md_to_speech.py`, 28 Aug — a real bug, pre-existing at HEAD, found by running the renderer instead of reasoning about it.** `--dry-run` over the corpus died with `xml.etree.ElementTree.ParseError: mismatched tag`: **every document failed to render**, because one did. Bisected to `defending_the_rush.md`, chunk 31, which emitted `<say-as interpret-as="characters">IIHF</p>` — the opening tag orphaned and closed by the paragraph. **Cause: an off-by-one in `_split_paragraph`.** Its per-token flag answers *"may the split happen before this token?"*, but was read **after** the token's own tag had changed the depth, so a **closing** tag (depth 1→0) looked like a safe boundary and the splitter broke immediately before it. Fixed by capturing the depth first. ⚠️ **The first regression test written for it was vacuous** — it split, but nowhere near the tag — and that was only discovered by **reintroducing the bug in a scratch copy and confirming the test still passed.** The shipped test is markup-heavy (so the *total*-character limit bites before the *billed* one, putting the boundary on a tag rather than a sentence end) and sweeps a pad across every offset in the repeating unit: it reports **86 malformed cases** against the broken version and none against the fix. Corpus now renders **37 documents, 1,687 chunks, 3,671,640 billed characters**, all valid SSML. **A test that has never been seen to fail has not been tested.** | round 51 |
| ✅ | **Delayed-offside whistle triggers — a contact consequence, four sites, needs a safety pass** | `rules_primer.md:171-176` lists the triggers flat and `:180` calls *"merely chasing the defenceman deeper kills the play"* the most misunderstood part of the rule. **That is NHL and IIHF text.** NHL 83.3 and IIHF 83.3 have four triggers including *"about to make physical contact"*; USA Hockey 630(d) has two and no about-to-contact trigger; **Hockey Canada 6.11(b)(ii) has neither forcing-deeper nor about-to-contact.** The corpus relies on that trigger to teach that play is dead before the check lands — under two books of four it is not, and Hockey Canada's remedy is 6.11(d)(i), which expressly reaches a play *"against an opposing player"*. Repeated flat at `zone_entries.md:167`, `:174`, `time_and_space.md:404`, `:416`.  **28 Aug — PREMISE INDEPENDENTLY RE-DERIVED AND HELD IN FULL, the first row this session that did.** All four books re-read: NHL 83.3 and IIHF 83.3 carry the same four triggers word-for-word; **USA Hockey 630(d) writes two** — and its second limb *"or continues to apply pressure to the defending puck carrier"* is **broader** than the NHL's *"forces… further back"*, so the divergence runs in both directions, not just toward leniency; **Hockey Canada 6.11(b)(ii) writes one**, with a locative qualifier — *"while the puck is still in the attacking zone"* — the other books lack. ⚠️ The IIHF text **wraps mid-phrase inside curly quotes**, so grepping its trigger wording returns zero. It is there. Site lines had drifted: `time_and_space.md` is **:418**, not :404/:416. Agent running on `zone_entries.md` + `time_and_space.md`; `rules_primer.md:172-177` **DONE — all four documents, reviewed and gate-cleared.** `zone_entries.md`, `time_and_space.md`, `rules_primer.md` and a **new `breakouts.md` section**, which the round found did not exist at all despite `rules_primer.md` pointing at it as the owner. ⚠️ **The repair produced a critical of its own:** scoping the whistle to the North American books left every NHL/IIHF reader — i.e. every British reader — told he had *"genuinely uncontested seconds"*, and **83.3's triggers name the *puck carrier*, so the protection lapses the instant he passes**. Head-up now leads, in all four books. ⚠️ A second overstatement was corrected in the other direction: USA Hockey's **pressure** limb *can* stop play, so "no whistle comes before the hit" was wrong for that book. |
| ⚠️ | `shooting.md` vs `offensive_zone_play.md:60` | **DIAGNOSED 28 Aug. The row is right and the situation is worse than 'the owner does not hold the figure'.** `offensive_zone_play.md:60` asserts shooting percentage outside the dangerous area *"has been **under 5%** across a decade of NHL data"*, crediting **McCurdy / HockeyViz 2007–2017 via The Coaches Site**. The style guide's named owner of shot-location value, `shooting.md`, **does not hold that figure at all** — it holds a different pair (point shots ~1–3 goals per 100, house shots ~5–15) credited to **Hockey's Arsenal**, and labels them *"Greg Revak's readings off a shot-location map he credits to HockeyViz"* — i.e. **approximate by construction**. So the corpus has two different secondary restatements of the same primary analyst, in two documents, one of which is honest about being a reading off a map and one of which is not. `shooting.md:793` already discloses that its three shot-location figures *"do not rest on equally good evidence"*. **The decision for the owner:** either move the under-5% figure to `shooting.md` and give it the same construction label, or drop it from `offensive_zone_play.md` in favour of a link to the owner. **Do not simply delete it** — non-negotiable 3. **`source-verifier` HAS NOW RUN (28 Aug) and the answer is neither of the two options this row offered.** Seven URLs refetched, all HTTP 200, both quoted strings located in rendered body. **Three findings, and only one of them is the owner's call:**
1. ⚠️ **NOT a decision — an accuracy defect. The claim is contradicted by its own source.** `hockeyviz.com/txt/edgar` publishes **three** maps, one per strength state. Revak read only the even-strength one. On `shotPercs-PP.png` the **5% contour reaches the blue line**, enclosing both points — so on the power play a point shot is *inside* 5%. The corpus states it with **no situational scope**, at `:60`, at Common Mistakes `:885` and at Key Takeaways `:948`, **which is read aloud with no context.**
2. ⚠️ **NOT a decision — the metric is wrong.** The map is *"Goals per **Unblocked** Shot, 2007-2017"*, and the page defines a shot as *"a goal, a save, or a miss"* — a **Fenwick** denominator. "Shooting percentage" means goals over shots **on goal**. The corpus inherits this from Revak; **the primary does not make the error.** Affects `shooting.md:345`/`:356` too.
3. **THE OWNER DECISION, and it is now better posed:** the two citations are **not two sources**. Both are **Greg Revak**, both link to the same Edgar page, both read contours off **the same PNG**; the 2024 Coaches Site piece self-links to his own 2020 newsletter. So the choice is not "move it or link to it" but whether to **merge both figures under `shooting.md` as one fact with one construction label**, which is what the reviewer recommends. ⚠️ Note the 2020 newsletter **does not contain the under-5% sentence at all** — it is new in the 2024 rewrite, so the figure has no 2020 provenance.
**Do not delete it:** traceable to a live primary, well-sourced, under-labelled rather than unsupported. ⚠️ **The chain bottoms out at a rendered contour plot** — no table, no sample size, no data release — so the measurement itself is unfalsifiable from here, and the reviewer's own PP reading is a contour reading too. `link_baseline.tsv` rows for the four primary URLs are drafted in the round-51 record. | round 43 |
| ✅ | Crease rule-set divergence, 16 sites | `offensive_zone_play.md:485`/`:943` carry USA Hockey 625(b) and the IIHF loitering provision; ~16 summary-layer sites across 12 documents give NHL 69.1/69.3 flat. `special_teams.md:907` groups the IIHF **with the NHL**; `offensive_zone_play.md:943` groups it **with USA Hockey**. **→ `rules-verifier` on 625(b) and IIHF 69.1's final sentence before any sweep.** **✅ CLOSED 29 Aug — by round 51's sweep plus verification, and the apparent inconsistency was real but misdiagnosed.** All 16 files mentioning 69.1 now carry book scope; the only bare hit is `uk_rules.md:125`, which is the **video-review list** (*"video review is not available in EIH or SIHA competition"*) and needs none. ⚠️ **The row read `special_teams.md:907` grouping the IIHF with the NHL and `offensive_zone_play.md` grouping it with USA Hockey as a contradiction. They are TWO DIFFERENT QUESTIONS, and the corpus was conflating them:** on the **impairment test**, IIHF 69.1 genuinely does match the NHL's premise and both grounds — *"NHL Rule 69.1, matched by IIHF"* is correct. On the **zone-cost stoppage**, USA Hockey 625(b) is mandatory (*"shall be conducted"*) while IIHF 69.1 is discretionary (*"the Referee **has the possibility** to stop the game"* where the attacker *"does not leave immediately"*) — so the IIHF belongs with neither. Round 51 separated the two questions; both are now stated correctly. **A row closed by re-deriving it, not by editing.** | round 44 |
| ✅ | `risk_management.md:730` KT5 **FIXED — round 50** — restructured rather than clause-patched: KT5 now classifies seven of the nine as coaching conventions and carries the both-defencemen hedge inline. A **fourth site the row did not name**, the Overview at `:14`, had the same deferral and was fixed too. | The both-defencemen absolute survives inside a nine-item `never` list, where the hedge is deferred ~200 words. The other two sites in this document were fixed in round 44; **this one needs the list restructured, not a clause added.** | round 44 |
| ✅ | `content_style_guide.md` — the "full corpus" list | **FIXED 28 Aug — reviewed and gate-cleared, round 51.** Premise re-derived mechanically rather than trusted: the list held **35** entries against **37** on disk, and the two missing were exactly the ones named. `uk_rules.md` added to **Foundation**; `reading_ice_hockey_diagrams.md` given its own **Reading diagrams** group, since the list's headings are thematic rather than directory-based (`defending_the_rush.md` sits under *Situational* but lives in `systems/`). Re-diffed after the edit: **37 listed, 37 on disk, nothing missing in either direction.** ⚠️ Worth noting what this row cost elsewhere — the sentence beneath the list reads *"Link only to documents on this list. Assume every one of them exists"*, so for two documents the specification was telling authors not to link to real corpus files. | round 44 |
| ✅ | NHL encroachment cited three ways | **WRONG PREMISE — the seventh. No defect exists; closed 28 Aug without an edit.** The row reads the three rule numbers as an inconsistency. They are **four distinct provisions**, and the corpus cites each correctly for its own subject: **76.2 Face-off Locations** (where a draw happens), **76.4 Procedure – Centers** (stick placement, positioning — **and the removal language**, *"he is to be removed from the face-off and replaced, resulting in a face-off violation"*), **76.6 Procedure – Other Players** (encroachment by a non-centre), **76.7 Violations** (the definition and the bench-minor escalation). The row names `on_ice_communication.md:273` as citing 76.2; the line cites **76.6**, which is exactly right for a winger creeping into the circle. **Verified by reading all four rules, not by grepping the numbers.** | round 43 |
| ✅ | `faceoffs.md:849` **FIXED — round 50** — *computed for this document* label restored, *team results* narrowed back to *points percentage* | The Common Mistake drops the *"computed for this document"* label its own KT5 carries, and broadens "points percentage" to "team results". The style guide requires the label to travel. | round 44 |
| ⚠️ | "Stay high" — a fourth sense — **PREMISE PARTLY STALE, re-derive before working** | `winger.md:610` defines it as *"level with the opposing defenceman while they have the puck, and it expires the moment your team wins it"*; `breakouts.md:702` uses the control-breakout sense, i.e. after your team has it. The body at `breakouts.md:205` flags both senses; **the facts line does not, and facts lines are read alone.** ⚠️ **Re-checked 29 Aug and the collision is weaker than this row states.** `breakouts.md:702` does not say *"stay high"* — it reads *"**Three high** — all three forwards **stay up** in the neutral zone"*, which is a **system name**, not the positional instruction. And two `breakouts.md` facts lines that do use the positional sense are **already correctly scoped**: `:471` (*"you spend the defensive shift high, level with the opposing point man"*) and `:473` (*"Being high before that, **while they still have possession**, is not an error"*). `winger.md:11` and `:643` still carry the possession-scoped definition. **So the work is a judgement about whether "high" carries too many senses corpus-wide, not the two-site fix this row describes.** Do not sweep it.
| ✅ | Four documents at 11 Key Takeaways **FIXED — round 50** — all four merged (not compressed) to 10 | `neutral_zone_systems.md`, `switching_positions.md`, `practice_and_development.md`, `scanning_and_anticipation.md`, against the style guide's 5–10. Round 43 recorded one of the four. | round 44 |
| ✅ | `conditioning_and_recovery.md:528` **FIXED — round 50** | Common Mistakes carries the Copenhagen adduction exercise's *very-low-certainty* hedge but **not the retraction** its own Key Takeaway 4 and body both carry. A dropped qualification in the layer read first. | round 43 |
| ✅ | `conditioning_and_recovery.md:524` **FIXED — round 50** | *"…in the study cited above"* — read aloud there is no "above", and the body's *"one study in fourteen semi-professional players"* hedge does not travel. | round 43 |
| ✅ | `conditioning_and_recovery.md:553` **FIXED — round 50** | `Check yourself` Q1 points at *"§Concussion — …The absolute rule"*; round 41 renamed that heading to `### Concussion: the absolute rule`. **The reference degraded rather than broke, so no link checker can see it.** | round 43 |
| ✅ | `defender.md:586` vs `conditioning_and_recovery.md:39` | **FIXED and gate-cleared — round 51.** Both are 2024-25 corpus computations off the same NHL report; neither is wrong and neither is now silent about the other. ⚠️ **The cause is not only the population filter, as I first diagnosed.** The documents declare *two* differences — population (every skater who took a shift vs the 587 with 41+ games) **and estimator** (`defender.md` pools total ice time ÷ total shifts; `conditioning` averages the per-skater `timeOnIcePerShift` field). **The gaps run in opposite directions by position** (D 48.7→48.8, F 47.4→47.1), which no single mechanism explains, so both clauses state the differences and deliberately **assert no cause**. ⚠️ The 2024-25 parenthetical also carried **no unit and no position labels** — a listener had to carry "defencemen against forwards" across two clauses. Now explicit. | round 43 | round 43 |
| ✅ | `how_to_watch_hockey.md:580` · `mental_game.md:629` · `faceoffs.md:849` · `practice_and_development.md:555` **FIXED — round 50** — all four now carry their owner's qualifications | Four owned numbers restated in a summary layer **without their owner's qualifications** — the 44 ft to the dot, the 18% of variance (no CI, no 82%-unexplained), the 6% faceoff correlation (drops its *computed-for-this-document* label), and a single-game possession measurement generalised to *"a full game"*. | round 43 |
| ✅ | `practice_and_development.md:608-620` **FIXED — round 50** — merged with the item above | **Eleven Key Takeaways** against the style guide's 5–10. Every other document in scope is at 10 or fewer. | round 43 |
| ✅ | `skating.md:888` **FIXED — round 50** — labelled unverified after an exhaustive search found no source; not deleted | *"Almost every race you contest is decided within about three strides"* — unsourced, in a section whose point is that a **neighbouring** three-strides claim is *"positively contradicted by the biomechanics literature"*. The two are genuinely different and this one is not wrong; it needs a *coaching observation* label. | round 43 |
| ✅ | `zone_entries.md:174` **FIXED — round 50. The row's premise was wrong.** The 'missing half' (the own-goal exception) was already carried at `:174`, `:178` and `:919`. What was genuinely missing was **book scope**: 83.4 was attributed to NHL+IIHF with the other two books unaddressed. Verified: **USA Hockey Rule 630 has no disallowed-goal provision at all** (617(b)(2) and 617(c)(8) point opposite ways and the Playing Rules never resolve it), and **Hockey Canada 6.11(b) has the disallowed half but not the own-goal exception** — absent from the rule and all thirteen interpretations. Propagated to the owner, `rules_primer.md`. | NHL **83.4** stated truly, but without the half that favours the reader: 83.4's closing sentence gives an exception the document hands to the **defender** at `:908` and withholds from the attacker, who is told the puck cannot go in and given no cue to keep playing. **→ `rules-verifier` to adjudicate**, not an editorial call. | round 43 |
| ✅ | `center.md:116` **FIXED — round 50** | An `Action:` states the weak-side collapse unconditionally; the body carries **two named exceptions** (`:135`, `:137`) and the document's own `Check yourself` Q2 demands the reader name them. A centre leaves the slot expecting a collapse that cannot come. | round 43 |
| ✅ | `center.md` §Overview **FIXED — round 50** | **Four facts are not traceable to §Overview's own body** — the swing-breakout split, low-zone-collapse-vs-man, and "ten to fifteen" all live in sections further down. All true and correctly hedged, so per the style guide this is *a finding about the section*: the Overview body should name the alternatives it hedges against. | round 43 |
| ✅ | `faceoffs.md` | ✅ **"Ten to fifteen draws a game" — FIXED, round 50. The row was wrong:** the figure *does* appear in its owner, `faceoffs.md:17`, `:52` and `:62`. The real defect was that it is **unsourced everywhere**. Labelled at the owner as a coaching estimate rather than a count, and `center.md` now points there instead of restating it bare, with no source or label anywhere in the corpus. Either source it in `faceoffs.md` or label it coaching craft. | round 43 |
| ✅ | `center.md:356` **FIXED — round 50** — NHL 69.1 carve-out added with its reasonable-effort proviso | `Never: Take your body inside the blue paint` omits NHL **69.1**'s carve-out for an attacker *pushed* in by a defender. The body defers it to Rules Primer. Errs conservatively, but a reader shoved in and waved off will believe the corpus told them so. | round 43 |
| ✅ | `defender.md:268` vs `:271` **FIXED — round 50** — resolved to *confident*, matching the owner | Two thresholds in one block for the same decision — *"confident"* against *"certain"*. Inherited from the body (`:276`, `:280`), so **fix the body first**. | round 43 |
| ✅ | USA Hockey 614(b)/618(a) | Both read *"A **penalty shot/optional minor penalty**"* and the corpus stated the shot unconditionally. **Fixed:** `center.md` now cites Rule **406(a)**, under which the non-offending team *"may, prior to the penalty shot, elect that the minor … be assessed … in lieu of the penalty shot"*. ⚠️ **This entry first credited the election to a One Pass rule — which is a *Blind Hockey* rule** (`usah.txt:6559`, *"to give low-vision and completely blind players the best chance to track the puck"*), with the glossary gating on it sitting inside the Disabled Hockey chapter. Reading it as the general glossary would have hedged a correct claim on a condition that does not reach these readers. | round 43 |
| ✅ | Hockey Canada 10.2(a)(v) — **the divergence was MANUFACTURED, and is retracted** | The row asserted that Hockey Canada locates the penalty shot by the **infraction** while the other three locate it by the **puck**. ⚠️ **False. All four books locate it by the puck** — HC 4.11(a)(v) *"while the puck is in the goal crease"* (`hc.txt:3203`), and Interpretation 5 to Rule 10.2 rules a player who scooped the puck OUT of the crease and grabbed it outside gets only a minor because *"The puck was not actually covered in the crease"* (`hc.txt:7712`). ⚠️ **My first wording of this row was itself wrong, and the re-review caught it.** I wrote that *both* of HC's puck-located texts concern the **hand** limb. **False.** Interpretation 5 hangs off 10.2(a)(v) but its RULING is expressly *"Assess a Minor penalty under Rule 10.2 (a)(iv)"* — **the body limb** — and it reasons in puck terms. The body limb is not evidence-free; it has the only HC interpretation on the subject. *(Honest limit that must travel with it: in Interpretation 5's facts both the player and the puck are outside the crease, so it does not isolate the variable — its stated reason does.)* **And HC is not a structural outlier:** USA Hockey has the same hand/body split — hand in **618(a)**, which carries the most explicit puck wording in the whole book, body in 614(b), whose first sentence read alone is ambiguous in exactly the way the corpus condemns in HC. **The real divergence is that the NHL and IIHF alone run one rule for both limbs and alone print the contrast case.** The hedge stays — it is warranted in substance — but its wording was wrong at nine sites, two of which flagged it as inferred while two presented it as settled. **A safety gap was closed on the way:** `defending_the_rush.md:587` stated the offence with no locating test at all, leaving the under-cautious reading *"the puck is in the crease but I am outside it, so I am safe"* — **that is still the penalty shot.** The qualifier now leads the sentence instead of trailing it. 14 lines, 4 files; `check_absolutes.py` caught an unscoped *"is only a minor"* in the repair itself. Re-review dispatched (`rules-verifier` + `safety-reviewer`) — an author must not review their own writing. | round 43 |
| ✅ | **The penalty-shot repair, re-reviewed twice and repaired again — 3 criticals, 2 majors, a safety omission** | **Two independent reviews attacked the round-52 crease repair and both found real defects; a third pass applied them.** ⚠️ **CRITICAL 1 — the corpus priced an offence backwards in the one section that teaches taking one deliberately.** `game_management.md` said USA Hockey's optional minor made *"the trade cheaper than it looks"*. **The election belongs to the NON-OFFENDING team** (406(a)), who take whichever is worth more to *them* — so the price to you is the **maximum** of (shot, power play), never the minimum. **CRITICAL 2 — the converse stated as an unscoped permission.** *"Gather in a puck lying outside the paint while you stand in it and you have taken a minor"* — **only the NHL and IIHF write that clause**; a flattened negative search confirms neither USA Hockey nor Hockey Canada prints it. **CRITICAL 3 — all four facts blocks cited HC 4.11(a)(v) for an act it does not reach** (it is the *hand* limb; the body limb is 10.2(a)(iv), escalated by (v)). ⚠️ **AND THE HEDGE ITSELF WAS FALSE, in both of its supports.** *"Both HC texts are about the hand"* — no: Interpretation 5's ruling is expressly *"under Rule 10.2 (a)(iv)"*, the **body** limb, reasoning in puck terms. *"Less explicit than the other three"* — no: **USA Hockey splits the offence identically**, 618(a) hand / 614(b) body, and 614(b) read alone is ambiguous in exactly the way the corpus condemned in HC. **The real divergence is that the NHL and IIHF alone run one rule for both limbs and alone print the contrast case.** The hedge is kept, correctly worded, and now identical at all nine sites. ⚠️ **SAFETY OMISSION FOUND AND CLOSED: the crease is a VOLUME.** All four books cap it at the top of the goal frame, and the IIHF Situation Handbook rules **both ways** on it — 63.27, puck caught **above the crossbar**: *"it was not considered to be in the crease… only a minor penalty is warranted"*; 63.15 and 67.4, **knee high**: *"award a Penalty Shot."* The corpus taught *"it is the puck that has to be in the crease, not you"* and stopped — **one half of a two-part rule, the style guide's named failure mode.** Also recovered: NHL 53.7 and Rule 60 were cited in bodies and in no Sources line. | round 52 |
| ✅ | ⚠️ **CRITICAL — the crease ceiling shipped as the TRUE HALF of a two-part rule, and my own dispatch caused it. FIXED.** | I asked for the ceiling to be added because a reviewer found the corpus taught *"it is the puck that has to be in the crease, not you"* and stopped. **It went in without the sentence that makes the act free.** ⚠️ **Every book expressly permits catching a puck out of the air if you knock it straight down:** NHL and **IIHF 67.2** — *"A player shall be permitted to catch the puck out of the air but must immediately place it or knock it down to the ice"* — **HC 10.2(a)(iii)** exempts a player who *"immediately drops it to the ice without gaining or attempting to gain an advantage"*, and **USA Hockey 618(a)** makes a hand not immediately opened a **face-off, not a penalty at all.** **Knock it down and there is no penalty in any book. Height only prices HOLDING it.** ⚠️ **Read alone, the new facts have ONE variable — height — so they are a price list with a way to shop down it**, and the crossbar is **four feet up**, in what the section itself calls *"four bodies, two seconds"*. ⚠️ **Worse, the facts are wrong as stated:** the *"minor"* is sourced to Situation 63.27, where the player *"turns to avoid opposing players, and then tosses it towards the boards"* — **the minor came from the turn and the throw, not the catch**, and the same is true of 63.15/67.4. **The corpus extracted the height variable and dropped the conduct variable that decided both Situations.** ⚠️ **And `game_management.md:846` is the worst instance** — it drops the knee-high counterexample entirely and sits under *"When a penalty is worth taking"*, so it reads as an **optimisation: catch it high, it downgrades**, carrying a `Rule:` label. ⚠️ **`rules_primer.md:406` had 67.2 correct all along** — the specialist's caveat lost by four general documents. **✅ REPAIRED, round 52 — permission before price at all eight sites, plus a new Key Takeaway carrying it.** The 67.2 permission was verified verbatim in all four books, and the conduct variable confirmed: in **63.27** the player *"catches the puck (above the crossbar), **turns to avoid opposing players, and then tosses it towards the boards**"*, and in **63.15/67.4** he *"catches the puck, **turns to avoid the attackers**, drops the puck to the stick and shoots it out."* **He turned and released in all three — the height only selected which penalty.** ⚠️ **A NEW Situation nobody had cited closes the loophole the repair could have opened:** Situation **67.6** (`iihf_situations.txt:5211`) — a defender with his own net empty takes the puck *"out of mid-air (around the height of the waist)"* and drops it **outside** the crease → *"an Awarded Goal to Team B."* **Relocating the puck does not cure it; "immediately" is load-bearing.** Corroborated by **HC Interpretation 4**, which names the three penalised acts and **not one is a height** — throwing it, *"maneuver[ing] around another player while holding the puck"*, *"tak[ing] a stride while holding the puck."* **The three buried bullets were SPLIT into their own sections** — 941 / 1,076 / 801 words became paragraphs of 273–333 — and `defending_the_rush.md`'s all-`Rule:` block finally gained the section's own imperative, `Action: Stick on the puck only`. **No fact was evicted by a cap.** ⚠️ **My brief was wrong twice and the agent corrected it:** `rules_primer.md:406` **does** already carry the 67.2 permission (it lacks only the ceiling), and `hc.txt` **is** the current 2026-2028 edition. | round 52 |
| ✅ | **`center.md`'s two crease gaps closed — and the fix nearly created the mirror-image defect** | Both gaps confirmed: `:424` and `:426` cited **every limb accurately and every limb was a price**, and the body owner at `:451` had the same shape. ⚠️ **THE FINDING THAT CHANGED THE BRIEF:** NHL **67.2** carries a note — word for word in **IIHF 67.2** — that *"The two players involved in the actual face-off (the centers) are not permitted to play the puck with their hand without incurring a penalty under this rule **until such time as a third player (from either team) has at least touched the puck**."* `:424` is expressly scoped *"at a draw"*. **Adding a bare "the catch is free" there would have told the one player the note names that he has a free option he does not have** — the mirror image of the defect the dispatch existed to close. The permission now travels with its suspension. ⚠️ **The two-centres suspension appears NOWHERE ELSE in the corpus** — a penalty a centre can take at the dot, in the two books a British reader is under. **The block was at 11/11 with both facts at 295/291 of the 300 cap, so the section was SPLIT** rather than trimmed; the faceoffs block drops to 7 and each moved fact appears exactly once. ⚠️ **And it declined to add the crease ceiling, with reasoning worth keeping:** the ceiling only selects *which* price you pay once the permission is already broken, and *"the safe action is identical whatever the height"* — while the four-book height treatment already sits in **five** documents plus the geometry owner. *"A fifteenth copy in a positional document buys the reader nothing and adds one more place a correction must reach."* **That is the corpus-repetition question being answered correctly at the point of writing**, which is where it is cheapest to answer. | round 52 |
| ✅ | **The two-centres suspension swept into `faceoffs.md` and `rules_primer.md` — and my brief was wrong twice** | ⚠️ **Correction 1: the suspension did NOT appear nowhere else.** `faceoffs.md` already carried it at two sites and already cited it in Sources. **The real defect there was the other one — the price without the permission**, at six sites. ⚠️ **Correction 2, and it is a genuine find: the rule has a SECOND home.** The same note is printed again as **Rule 76.5, inside the face-off rule itself** (`nhl_rules.txt:8122`, `iihf_rules.txt:6261`) — *"for a faceoffs document that is the natural citation."* Nobody knew. *(My brief also mislabelled `iihf_rules.txt` as v1.0; it is v1.1.)* **`rules_primer.md:406` was worse than predicted:** it stated the bare permission **and then invoked the draw** — *"the fact that it often happens at a draw does not change what it is"* — so a centre reading that bullet learned he had a free option he does not have. And `:407` narrowed the bar to *"may not **bat**"* when the rule bars **playing** the puck with the hand. ⚠️ **One fix was wrong specifically when read in isolation, which is how the pipeline reads it:** `faceoffs.md:414` said *"a minor penalty with the hand (Rule 67.2)"*, which **contradicts Rule 79** — an open-hand bat is legal. Now scoped to the taker at the draw. **The USA Hockey / Hockey Canada negative was strengthened but deliberately NOT upgraded to an absence:** every sentence in either book naming the players *"taking the face-off"* was enumerated — all 9 in USA Hockey, all 10 in Hockey Canada — and none restricts the takers' hands. The disclosure now says *"none was found — not that none exists."* **And the check it named as highest-value came back NEGATIVE:** I searched the whole Situation Handbook flattened — `"players involved in the actual"` **0 hits**, `"hand at the face"` **0**, and none of Situations 67.1–67.14 or 76.1–76.6 touches hand-play at the draw. **So the emphasis on *playing* rather than *closing on* the puck rests on rule text alone, with no official interpretation behind it.** | round 52 |
| 🟡 | **The crease passages: the burial half CLOSES on re-measurement; the safety half did not, and is now fixed** | Measured, not estimated. Single unbroken bullets grew **300→940, 165→1,070, 135→798, 82→372 words** (×3.1 to ×6.5); **1,070 words is roughly seven minutes of continuous speech inside one bullet point.** The operative safety instruction moved from **62–65%** depth to **86–94%** — in `defensive_zone_coverage.md` the only sentence telling a player what to do with his body (*use the stick, not the glove, not the chest*) now sits behind ~640 words of four-book rule-number reconciliation. ⚠️ **And `defending_the_rush.md`'s block has stopped functioning:** 11 facts, **all eleven `Rule:`**, 484 words, ~3¼ minutes aloud, **not one imperative** — it enumerates eleven ways to be penalised and omits the section's own instruction, *"stick on the puck only"*. The reviewer's verdict, asked directly: `defensive_zone_coverage.md`'s block **is still a summary** (7 `Rule:` of 11, framed by four coaching facts); `defending_the_rush.md`'s **is not** — the coaching layer has been entirely evicted by the cap. **The remedy is a section SPLIT, which also resolves the cap collision** — a cap must never evict a rulebook fact. | round 52 |
| ✅ | **The facts layer reviewed at last — it found a CRITICAL inside the round's own repair, and the verifier then found two more** | `facts-reviewer` was never dispatched across ~30 agents editing twenty documents' facts blocks; **filling in the review record's dimension table is what surfaced that.** ⚠️ **CRITICAL:** an identical `Rule:` fact at **three** repair sites says *"Under USA Hockey a hand that does not open immediately is a stoppage… **not a penalty at all**"* — **with no location qualifier, in blocks whose sections are titled *the crease*.** Outside the crease that is right; **inside it, 614(b) and 618(a) make it the penalty shot.** Each block's own body says the opposite, and **`center.md:458`, written the same day, has the correct wording** — three of the four repair sites did not get it. **This is round 52's defining shape reproduced inside round 52's own repair.** **Also found:** a **coaching judgement inside a `Rule:` value** (*"still better than the goal it prevented"* — no rulebook says it, and the body says the trade does not exist); **two `Rule:` facts in `goaltender.md` extracted from NO SECTION AT ALL** (a corpus-wide grep finds the claims only in those two lines and the Sources list — sourced, so not deletable, but *"extract, never author"* means traceable to a section, and a Sources list is not one); a new `####` that is **the only heading in its document without a block** while five of its facts sit in the parent block above it; and a British reader dropped out of a four-book comparison. ⚠️ **The reviewer verified NO rule against primary text and said so** — *"if a body misquotes 614(b), my report inherits the error and calls it verified"* — so a `rules-verifier` applied them — **and that was the right call, because two of the findings did not survive contact with the books.** ⚠️ **The critical is CONFIRMED and fixed at all three sites**, split rather than trimmed, and the bare claim turned out to have reached **four summary-layer sites nobody had flagged** (a Common Mistakes bullet, a Key Takeaway and three Sources entries). The verifier also refused the reviewer's wording, using *"penalty shot or optional minor"* because **both rules read "a penalty shot/optional minor penalty"**. ⚠️ **M2 was STALE — the body it said did not exist was at `goaltender.md:911`, in the right section** — but two REAL defects sat underneath it. **The worse one lands on the British reader specifically:** the fact said the give-ground tables cap the goalkeeper at a **minor**, citing both books. **The NHL's rows do say minor; the IIHF's say *"the appropriate penalty"* and cap nothing** — the corpus's known "appropriate penalty" generalisation, telling a goalie his worst case is two minutes **in the book that is actually his**. The second: *"Reference Table 14 D"* is ambiguous because **Table 14 has two D rows**, and the same paragraph points at 5C/5E two sentences earlier. ⚠️ **Two extraction traps hit in one pass and both survived only because the agent read the page:** `"loss of goal only"` returns **zero** in `iihf_rules.txt` and HC's `"without gaining or attempting to gain an advantage"` returns **zero** in both HC extractions — **both wrap across lines.** A verifier stopping at the grep reports fabrication. **Two penalty-tier omissions were also found and closed:** NHL **59.3** reaches a **major** for cross-checking (the fact said "a minor" flat), and USA Hockey **604(d)/(e)** and HC **7.3(b)** reach major plus game misconduct — **mandatory where the player is injured** — in a passage teaching contact against a screener. | round 52 |
| ✅ | ⚠️ **"USA Hockey may be stricter at the hands" — REFUTED. The mirror does not run where the finding said** | `on_ice_communication.md:222` (owned by `body_contact_and_battles.md`) says USA Hockey and Hockey Canada reach the stick lift at the hands *"only where it stops the opponent playing the puck."* That fits their **hooking** rules — USA Hockey 623 (*"impeding the progress"*) and HC 8.2, neither of which has a hands sentence. ⚠️ **But USA Hockey's SLASHING rule does, and unconditionally:** `usah.txt:4819` — *"Any forceful chop with the stick on an opponent's body or opponent's stick, on or near the opponent's hands, shall be considered slashing"* — **with no "not an attempt to play the puck" qualifier, where the NHL's 61.1 has one.** So on the text **USA Hockey is stricter at the hands than the corpus states**, and the corpus is under-warning a reader about a penalty. The verifier deliberately **did not restate the USA Hockey / Hockey Canada half** in the fact it authored, writing only the two limbs it had verified and pointing at the owner. **Needs `body_contact_and_battles.md`'s owner and `safety-reviewer`.** *(Related to the open slashing-reaches-the-hands row above — same rule, opposite direction.)* | round 52 |
| ✅ |**28 facts blocks sit at the 11-line cap, and 50 fall below the coaching-fact floor — three have ZERO** | **Measured corpus-wide; no single agent could see it.** Each round-52 agent saw its own document, and `check_facts.py` cannot see it either **because 11 is legal**. 48 blocks sit at 10 or 11. ⚠️ **The sharper measurement is the one the checker structurally cannot make:** the style guide specifies **3–6 coaching facts, 8 at most**, and exempts `Rule:` facts — but the checker only counts total lines 3–11, **so it cannot see coaching-fact count at all.** **50 blocks have fewer than 3 coaching facts; three have none** — `body_contact_and_battles.md:1108` (**11 facts, all 11 `Rule:`**), `faceoffs.md:241` (7 of 7), `zone_entries.md:98` (7 of 7). **A block with no coaching fact is not a summary; it is a rule digest**, and the layer exists so a player can take *what to do* off the page. ⚠️ **DO NOT FIX BY PADDING** — non-negotiable 3 forbids inventing a fact to fill a block. **Where the section genuinely IS a rules section the all-`Rule:` block is honest and THE STYLE GUIDE is what needs amending**, to say so; where it is a teaching section the instruction has been squeezed out and the section should be **split**. ⚠️ **A worked example of each was given:** `defending_the_rush.md:564` is still 11 facts / 1 coaching after its split because *"the split relieved the wrong thing"* and the section is doing two jobs (the puck-first carve-out, and the fouls the carve-out never reaches) — **split it again**; while `defensive_zone_coverage.md:451` was inspected and judged **sound and unchanged** (3 `Rule:` / 7 coaching). **44 of the 50 are unread.** | round 52 | **CLOSED round 53.** Four amendments, **130 lines added, 0 removed.** ⚠️ **The agent caught FOUR errors in its own additions before finishing** — including writing *"the only check with that property"* when `check_absolutes.py` shares it, and stating **one half** of the both-extractions rule (the third failure mode defeats exactly that claim). ⚠️ **Provenance limit it declared:** the round-53 figures came from my brief and **there is no `round_53_*.md` on disk to check them against** — it scoped every one to "rounds 52 and 53" so the qualification travels. **That record is now owed.** | round 53
| ✅ | **The crease-rule spread collapsed to THREE units, and two of them correctly name one book** | Measured at the end of the round-52 repair, as a **worklist, not a gate**: `10.2` spread across **12 units**, `67.4` **9**, `618(a)` **8**, `67.5` **7**, `1.7` **5**, `406(a)` **4**. **Two specific corrections are already known and were report-only because other agents held the files:** `center.md:451`, `center.md:426` and `rules_primer.md:406` need (a) that **406(a)'s election belongs to the non-offending team**, and (b) that **Hockey Canada's body limb is 10.2(a)(iv)/(v), not 4.11(a)(v)**. ⚠️ **Two cap pressures to resolve, not to trim past:** `defending_the_rush.md`'s block is at **11/11** and its summary layer is now thinner than its body — the converse scope, the ceiling and the empty-net divergence live only in the prose there; and `defensive_zone_coverage.md`'s net-front block is now **11/11 with eleven consecutive one-per-paragraph rule lines**, which `facts-reviewer` and `site-reviewer` should judge for whether it is usable aloud at all. **Splitting the section is the remedy in both cases; a cap must never evict a rulebook fact.** | round 52 |

---


## Tier 2 — Needs a decision, not an edit

**⬜ A cross-position matrix — zone × puck-situation. Owner-requested 27 August. Decide the
FORMAT before writing a cell.**

`mind_map.pdf` (repo root, 3 pages, image-only — no text layer, so `pdftotext` returns nothing;
read it with a visual PDF reader) sets out **Defender, Center and Winger** — *not* goaltender — each
as **Core Role** plus three zones, each zone split four ways: *carrying puck – free space*,
*carrying puck – under pressure*, *pressuring opponent*, and *without puck*. Leaf labels are
`Position:` `Action:` `Goal:` `Key:` `Risk:` `Technique:` `Priority:` `Options:` `Mindset:`.

**Why it is worth doing.** It is a cut the corpus does not have. Position documents organise by
position and systems documents by system; **nothing answers "winger, neutral zone, no puck — what
do I do?" in one view**, which is the commonest question a player has on the bench. The label
vocabulary also maps almost 1:1 onto the ` ```facts ` layer, so the matrix is **extractable from
what already exists** rather than authored — which is this project's whole method.

⚠️ **Why the obvious format is wrong, and this is the decision.** A table of *claims* would be a
**seventh summary layer** — after Overview, body, facts, Common Mistakes, Check yourself and Key
Takeaways — and the first one to **span documents**, breaking the one-owner rule that makes
propagation tractable. Round 10's finding was that *every critical it sustained was a correction
that reached the body and stopped*; this would add ~36 cells per position that every future
correction must also reach.

**And nearly every cell is a coaching choice the mind map labels as a rule:** *"Do not chase into
corners, leave for wingers"*, *"Never have both defenders pinch at once"*, *"Pinch only if 100%
certain"*, *"Avoid double covering with partner"*. Under man-on-man a defender **does** follow into
the corner; "never both pinch" is a house default. That is
[non-negotiable 7](../../CLAUDE.md) — the cardinal rule, and the corpus's most common failure — and
a table actively pushes toward dropping the hedge, because cells must be short. **Separately, the
mind map's `Rule:` means *guideline*; the corpus's `Rule:` means *rulebook rule with a citation*.**
Importing that vocabulary would corrupt a convention 4,629 facts depend on.

**Recommended resolution: build it as an INDEX, not a summary.** Every cell carries a short label
**plus a link to the owning section**, and asserts nothing standalone. An index cannot drift,
because it makes no claim to go stale. Where a cell would state a coaching choice, the cell reads
*system-dependent* and links. That converts the idea from a seventh staleness surface into the
navigational spine the corpus currently lacks, and it serves `getting_started.md`'s four entry
routes, which presently have no destination of this kind.

**Open questions for the owner:** (1) index or summary — the above recommends index; (2) where it
lives — `positions/` needs a new document, or it extends `getting_started.md`; (3) the goaltender
column, which the mind map does not supply and which does not fit *carrying puck – under pressure*
at all; (4) whether it renders in the podcast, where a 12×3 table is noise — probably `speech: skip`.

**Provenance:** `mind_map.pdf` is **unsourced** and must not be cited. It is a structure to borrow,
not evidence; every cell's content is re-derived from the corpus and its own sources.


These are open because someone has to choose, and the choice changes the shape of the work.

**⬜ MA23 — the ten-item cap versus the one-proposition rule.** The takeaways render correctly at
375 px, so what is open is editorial. Mid-item the numeral is ~800 px off-screen, so a reader in
the middle of a 347-word takeaway has no cue which one they are in. Three rounds of evidence say
**splitting beats compressing**: every critical came from compressing, and each repair wave *added*
words — 746 → 66–318 → 66–336 → 66–347. The spec caps the count at ten, not the length.

**⬜ MA24 — the same Table 6/7 material is stated four times across two documents.**
`uk_rules.md` §"A first major can end your game" plus `rules_primer.md` §4, §10 and Key
Takeaway 4 — four framings, four hedge placements, well over two thousand words. That is four
places for the next correction to fail to reach, and in round 37 it failed to reach three of
them twice. **Should `uk_rules.md` own it outright and the primer link?**

**⬜ §6c / MA21 / MA22 — `defending_the_rush.md` §Breakaways is over `HARD_MAX`.** The merge
that freed slots lost NHL 67.4's *"except a goalkeeper"* attachment, and a penalty-shot
trigger in the body reaches no fact at all. **The merge should be undone and the section
split** — that is structure, not editing.

**⬜ §7 — `hc.txt` was extracted without `-layout`.** Re-extracting would fix the interleaved
two-column tables and sidebar headings that make some Hockey Canada attributions rest on
inferred layout. **It would also shift every `hc.txt:NNNN` citation in the corpus.**

**⬜ §8b m4 — a dormant Google Analytics 4 bootstrap ships in the build.** Decide: remove, or
activate and disclose.

---

## Tier 3 — Tooling and verification gaps

**✅ THE CROSS-DOCUMENT CONTRADICTION CENSUS RAN — the plan's own "highest-value move on the list".**
Built a normalised index of all **29,314 lines** of `content/`, extracted the summary layers
separately (**4,888 ```facts``` lines**, **1,434 Common Mistakes / Key Takeaways lines**), and compared
**within subject groups across documents** rather than file by file. **Eleven contradictions**, most
adjudicated against primary text.

**The four the plan already suspected are now CLOSED and verified closed** — the tripping
*"any book"* universal, the Handbook edition-identity body-vs-Sources split, and `rules_primer.md`'s
lone-holdout on IIHF 52.2 discretion. **The clipping ceiling remains open.**

### The ones that matter, in the order a reader would meet them

1. ⚠️ **`how_to_watch_hockey.md:184` states a SUPERSEDED rule flatly as current** — *"under IIHF rules
   there is no ejection at all, only a team warning"*, no edition qualifier, in **the document a
   beginner reads to follow a game**, against nine siblings that record the 2026/27 change.
2. ⚠️ **IIHF 81.4 does not match the NHL, and five sites say it does.** NHL has **three** exceptions;
   IIHF has **four** — *"a Player with a **broken skate**"*. Nine other documents get it right, and
   `breakouts.md:987` says it in terms. **The style guide names this exact error.**
3. ⚠️ **A four-book claim where one book prints no such permission.** *"All four books **expressly**
   permit the catch"* — but a flattened whole-book search of **both** USA Hockey volumes returns
   **zero** for `permitted to catch`, `catch the puck` and `catch or stop the puck`. **618(a)
   penalises.** The permission may be implicit; *"expressly"* is false, and `faceoffs.md:932` already
   scopes it to two books.
4. ⚠️ **A `Rule:` fact citing a rule that says something else** — NHL **67.4** cited for *"the stick is
   legal… your glove and chest are not"*. 67.4 is the **penalty shot for a puck in the crease**. The
   section's own body cites 60.1, 60.3 and 63.2(i), so it also breaks *extract-never-author*.
5. ⚠️ **CARDINAL RULE: *"One defenceman is always above the puck"* is stated as an invariant in two
   documents' summary layers** — including a `Never:` fact — **and named as one of two legitimate
   systems in four others** (*"a five-man rotation… is a real system, not a mistake"*). One of the two
   even softens it itself two lines later. **Read aloud standalone the two cannot both be true.**

   ⚠️ **CENSUS RUN, and it sharpens this into a different and worse finding.** Nineteen sites across
   eight documents. `risk_management.md` **already handles it correctly** — *"a convention with real
   exceptions — aggressive systems do send both below the goal line on a read"*, filed under
   *"conventions, not laws"*. `defensive_zone_coverage.md` carries a **self-test question** saying of
   *"Never both defencemen on the puck"*: *"That is not quite what this document says."*

   ⚠️ **But `defender.md` is the OWNER of the claim** — `puck_support_and_spacing.md` and
   `defending_the_rush.md` both cross-reference it by name (*"As Defender puts it…"*) — **and the
   owner states it flat while the borrower states it with the exception.** The ownership rule is
   being satisfied **backwards**: qualifications are supposed to travel *from* the owner, and here the
   owner has fewer than the documents quoting it. **That is a structurally different defect from the
   one this row was written about**, and no uniform sweep would have found it.

   **Also flat, and read aloud standalone as law:** `rink_map_and_glossary.md`'s *"the **universal**
   rule of thumb"* and its numbered item 9; `puck_support_and_spacing.md`'s `Key: Someone must always
   be above the puck — in every zone, at all times`, under a heading reading **"The safety rule"**.

   ⚠️ **The load-bearing claim nobody has sourced:** everything above turns on whether *"aggressive
   systems do send both below the goal line on a read"* is true. **Dispatched with instructions to
   attack it, and to report rather than assume the exception is real.** If it is unsupported it gets
   sourced or labelled — **not deleted** (non-negotiable 3).
6. ⚠️ **FIVE bare superlatives sharing one grammatical form and no owner between them** — *"the single
   most dangerous draw in hockey"* vs *"the most dangerous faceoff in hockey"* **inside one file**,
   plus three more across `game_management.md`, `special_teams.md` and `playing_without_the_puck.md`.
   **Unresolvable: none is sourced.** This is the folklore shape.

### ⚠️ What the census says about its own blind spots — the most useful part

- **It groups by rule number, figure and distinctive phrase. Two documents contradicting each other in
  incompatible *paraphrase* are invisible to it** — *"and that is the majority of coaching claims,
  which carry no numbers at all."* Three of its own findings surfaced only because both sides happened
  to share a phrase.
- ⚠️ **A census of divergence is structurally blind to CONSENSUS. If all 37 documents say the same
  false thing, it reports a consistency and upholds it.** It went to primary text for eleven claims;
  the earlier normalised count found **301+** exact-identity claims.
- **The twelve off-ice and technique documents entered only through subject greps** and share almost
  no rule numbers with the rest — *"effectively untested"*. Their contradictions would be about
  training load, equipment standards and pedagogy.
- **It never compared a facts block against the section it sits in** — *"the seven criticals of round
  20 were all of that shape and my method cannot see them."*

**✅ The IIHF Situation Handbook 2025/26 v1.1 → 2026/27 comparison is DONE — the whole book, both
directions, pipeline validated first.** `sources/README.md` recorded it as *"not compared at all"*
while three documents cited it. **638 blocks against 644**, plus the Miscellaneous `M1`–`M4` section
that situation-number segmentation misses, plus every non-situation line. ⚠️ **The pipeline was
validated against the known v1.0→v1.1 result before use — it returned exactly Situations 10.7, 20.4,
46.1 and 63.19 and nothing else, zero false positives.** That is how a diff should be run here.

⚠️ **Note what the normalisation had to defeat**: the right-margin section tab and page number are
spliced **into the body line** by `pdftotext`, at a position that moves between editions — **stripping
that one artefact removed 47 of 79 apparent differences.** And 2026/27 letter-spaces its running
header **inconsistently**, so a literal-string header filter fails on it.

**Result: 637 shared numbers, 31 differ — 7 typographical, 24 substantive.**

### ⚠️ A SECOND reversal, in the same shape as 63.19, and nobody had seen it

**Situation 85.30** — a puck hits a TV camera above the glass, keeping it in play, on a clear from
the defending zone:

| v1.1 | 2026/27 |
|---|---|
| *"**No penalty shall be assessed and the play shall continue. Rule 85.1**, the camera is to be considered as a part of the board and the protective glass."* | *"**If it is deemed that the puck would have left the playing surface, the delay of game penalty is warranted.** If there is doubt, no penalty shall be assessed."* |

⚠️ **Reverses AND deletes its rule citation — exactly what 63.19 and 20.4 did.** That is now **three**
instances of one editorial habit: **the IIHF reverses a ruling and drops the rule it reversed.** It is
a **penalty consequence** — a defender who clears and clips a camera now takes two minutes on the
referee's judgement of where the puck was going.

### The other substantive findings

- **The warning → ejection/removal sweep is FIFTEEN Situations**, not four: 17.4, 40.1, 76.20, 76.21,
  76.23, 76.25, 76.28, 76.42, 76.43, 76.46, 76.51, 82.2, 82.4, 87.1, 87.2. ⚠️ **76.43 is a contact
  rule** — helmet-to-helmet at the dot now costs ejection from the draw.
- ⚠️ **`faceoffs.md:344` says *"Four situations… change only that word"*. It is fifteen.** And
  **`faceoffs.md:1016` is factually wrong**: it says the older edition duplicated 17.4 at 76.23 where
  the newer duplicates 17.3 at 76.22 — **both editions do both.** The document's underlying warning
  is sound and independently justified; only the example is false.
- **Seven Situations added**, one removed (202.1, and the whole Junior section is now empty), **six
  renumbered** by insertion cascade — **none of the renumbered ones is cited by any document.**
- **Situation 63.19 is UNCHANGED** in 2026/27. The reversal survives into the current book.
- **26 of the 29 Situations the corpus cites are unchanged**, so those quotations stand.

**⬜ The next comparison, named by the agent that did this one: neither Handbook has been compared
against the IIHF Rulebook 2026/27.** So nobody knows whether **85.30's new ruling agrees with Rule
85.1**, or whether **60.13 agrees with Rule 60** — and given the Foreword ranks the Handbook below
the Rulebook, and given 63.19 is a live contradiction, **that is the highest-value check outstanding.**

**✅ The NHL Situation Handbook question is CLOSED — it is not publicly obtainable.** Named by two
agents as the highest-value outstanding fetch and carried as an open task for several rounds.
**Searched properly on 29 August 2026: 28 URLs, 12 hosts.** Four converging negatives, the strongest
being that **the NHL rulebook does not reference a case book at all** (0 hits), where the IIHF
Rulebook references its Handbook 3 times and USA Hockey's references its Casebook 5 times. **A league
that publishes one says so in its rulebook.** Full evidence in `sources/README.md`. ⚠️ **Stop
re-opening this. Reopen only if a primary source cites it.**

**⬜ ⚠️ THE CORPUS MAY BE TEACHING A CONTRADICTION THAT DOES NOT EXIST — five documents.**
`risk_management.md`, `playing_without_the_puck.md`, `rules_primer.md`, `defender.md` and
`faceoffs.md` all record a **live disagreement between the IIHF Rulebook and its own Situation
Handbook** over Situation 63.19 — the puck kicked off the skate over the glass.

⚠️ **An agent proposed a reading that dissolves it.** **IIHF 63.2(II)** — which **none of the five
brings to bear on this Situation** — already reaches *"any Player who **deliberately** shoots or bats
(using their **hand, leg, foot, arm, stick** etc.) the puck outside the playing area **(from anywhere
on the ice surface)**"*. **So the IIHF has a foot pathway already**, and the Situation's fact pattern
is a player who *kicks at the puck*.

⚠️ **And the reversal deleted its citation.** v1.0 answered *"No"* and **reasoned expressly from
63.2(III)**; v1.1 and 2026/27 answer *"Yes."* **citing nothing**, while the neighbouring Situation
63.24 does cite 63.2(III). **The economical reading is that the IIHF silently moved the case from
(III) to (II)** — not that the Handbook contradicts the Rulebook.

**The residual question is genuinely open and is the whole thing:** in (II), does *"deliberately"*
attach to **the kick** or to **putting the puck out**? A defender kicking to block a pass deliberately
kicks and plainly does not deliberately put it out. Under verification now.

⚠️ **Also correct where the corpus says this happened: the reversal was between v1.0 and v1.1 of the
SAME 2025/26 edition**, not between the 2025/26 and 2026/27 editions.

**Either way the five documents are incomplete**, because none of them mentions (II) in connection
with this Situation.

**⬜ ⚠️ IS "WORD FOR WORD" EVEN THE RIGHT FRAME? — the question the last agent asked, and it may
retire most of the census above.** Having correctly fixed six sites, it said: *"If a reader's
question is **'does my book say the same thing?'**, the answer for both sentences is **yes**, and
every one of these six edits adds typography a player will never need."*

⚠️ **That is a style-guide question, not a verification one, and it is the better question.** The
corpus's readers are a British player and a North American amateur asking whether the rule they just
heard applies to them. **`A player` → `A Player` and `a penalty shot` → `a "Penalty Shot"` change
nothing either of them will ever do.** The precision is real; the relevance is not obvious.

**Two defensible policies, and the corpus currently has neither:**
1. **Reserve exactness claims for where exactness matters** — a divergence that changes a
   consequence — and otherwise say *"the same rule in the IIHF's wording"*, which is true, shorter,
   and cannot rot.
2. **Keep them, and treat defined-term casing as a named category** so the qualification is a
   standard clause rather than bespoke prose at every site.

⚠️ **Decide before auditing the remaining ~290**, or the audit will spend a round adding typography
notes to sentences no reader was misled by. **The three genuinely wrong ones this round were wrong
because they claimed exactness they did not have — not because the difference mattered.**

**⬜ The probe-miss ratio is measured, and it is bad.** A brief built from a five-string grep named
**four** sites; the agent found **six** — the two extra invisible to the probe, including
`defending_the_rush.md:616`, which **presented a single NHL-cased quotation as both books' text**.
⚠️ **That is a 33% miss rate on a targeted, well-specified probe**, and the same ratio should be
assumed for every grep-built site list in this round. Three of this round's blocking findings were
second or third copies found only after an agent finished and grepped again.

**⬜ ⚠️ THE CENSUS: 301+ exact-identity claims across 30+ documents, and the class has never been
audited. ⚠️ The 301 is a FLOOR — the probe was five strings.** Measured at close with a **normalised** scan (hyphen-wraps rejoined, whitespace
collapsed) over all of `content/`:

| Phrase | Instances | Files |
|---|---:|---:|
| *identical* | 124 | 30 |
| *the same words* | 66 | 17 |
| *word for word* | 51 | 13 |
| *word-for-word* | 28 | 11 |
| *verbatim* | 26 | 16 |
| *worded the same* | 6 | 5 |

**Each of these asserts that two texts match** — two books, two editions, or two extractions — **and
only a normalised comparison can support one.** This round found three wrong in a single sentence
family and corrected twelve documents; **nobody has looked at the other ~290.**

⚠️ **The audit is cheap and the shape is known.** For each: is it a claim about *text* or about
*substance*? If text — was the comparison normalised, and does the sentence say what it compared?
**A claim that names its own divergence is correct and must not be flattened** — *"word for word,
differing only in capitalising Player"* is the house model and appears already. ⚠️ **Round 44
manufactured a divergence that did not exist by sweeping uniformly; this must not become that.**

⚠️ **And the probe list is the census's own weakest point.** It matched five phrasings. **An
identity claim written as *"reads the same"*, *"carries over unchanged"*, *"mirrors"*, *"is the
NHL's"* or *"the same sentence"* matches none of them** — and two live examples were found by
accident: `defensive_zone_coverage.md:730` (*"carries the same minor and the same carve-outs"*) and
`center.md:478` (*"its test sentence is the NHL's"*). **So the real population is larger than 301
and nobody knows by how much.**

✅ **What the round did establish is that the audit discriminates properly when run.** An agent
verified **IIHF 61.1's chop sentence is byte-identical to the NHL's** and left three sites untouched,
while catching in the same file that **67.2** (`player`/`Player`) and **63.6** (`penalty
shot`/`"Penalty Shot"`) are **not** exact and were asserted bare. ⚠️ **That discrimination is the
whole task**: several claims are correct, several already name their own divergence — *"materially
identical… differing in pronoun"* is the right form — **and only a bare assertion of exactness that
is not exact is a defect.**

⚠️ **And the trap is live, demonstrated twice in one session.** An agent's raw grep for *"catch the
puck out of the air"* in `nhl_rules.txt` returned **not found** — the sentence is there, wrapped
across a line. **So every negative grep in this corpus that was not run normalised is unreliable**,
including the first-pass scans inside this very census. **Run the audit normalised or do not run
it.**

**✅ ⚠️ A citation defect nobody briefed: `faceoffs.md` had fused two rules into one claim.** It said
a puck *"into the players' bench **through an open door**"* is not a delay-of-game penalty. ⚠️ **The
phrase is rulebook wording — of the wrong rule.** *"Enters the players' bench through an open bench
door"* is **NHL 85.1**, which was read in full (`nhl_rules.txt:9168–9200`) and **assigns no penalty
at all** — it prescribes only the faceoff location. The delay-of-game exemption is the **NOTE to
63.2(iii)**, whose words are *"shot into the players' bench"*.

**So the document attributed a penalty consequence to a rule that has none**, and cited neither rule
for the half that carries it. Repaired: the penalty half now quotes 63.2(iii)'s NOTE, and *"through
an open bench door"* is **retained but relocated to 85.1**, where the book puts it.

⚠️ **Found by an agent sent to add a completely different narrowing** — it noticed the gloss did not
match the rule it was standing next to. **Nothing in the checker set can see a claim citing the
wrong rule while quoting the right words**; the phrase was real, the attribution was not.

**⬜ A phrasing divergence the propagation left behind, and it is the one the round warned about.**
Ten documents carry the bench narrowing. Eight say the two Handbook editions put it *"in the same
words"*; **`special_teams.md` and `game_management.md` say the situations are *"identical"*** — the
exact claim an agent disproved (`pla- ne` against `plane`). ⚠️ **A document telling the next reader
two texts are "identical" invites precisely the grep-across-a-line-wrap that returns a false
absence**, which `sources/README.md` records as having produced wrong findings here more than once.
Repair in flight. ⚠️ **`faceoffs.md` also carries a PRE-EXISTING *"word-for-word identical"* claim
about Handbook v1.0 Situations 17.3/17.4 and 76.1–76.11** — a different edition pair, **unverified
by anyone**, and left alone deliberately rather than swept.

**⬜ ⚠️ "Byte-identical" was asserted between two extractions and it is FALSE — and the coordinator
relayed it without checking.** An agent reported IIHF Situations 63.3/63.24/63.28 *"byte-identical"*
across the v1.1 and 2026/27 Handbooks; the coordinator passed that into the next brief verbatim. The
agent receiving it checked and refuted it: **63.24 wraps `pla- ne` in one extraction and reads
`plane` in the other.** Whitespace-normalised and de-hyphenated they are **word-identical**, which
is the true and useful claim.

⚠️ **Its reasoning is the finding, not the hyphen.** A document asserting **byte**-identity *"would
send the next reader into the exact hyphenation false-negative the style guide documents"* — the
trap that has already produced false absences in this corpus twice. **"Word-identical after
normalisation" and "byte-identical" are different claims about a text, and only one of them is
checkable by grep.** The rule: **compare normalised, and say which comparison you made.**

⚠️ **Note the transmission path, because it is the round's shape in miniature:** an agent's honest
over-claim → relayed by the coordinator without verification → caught only because the receiving
agent was told to refute its brief. **Two of the three links in that chain failed.**

**⬜ ⚠️ SAFETY: the corpus told readers "into the bench is a carve-out" — and the IIHF Situation
Handbook narrows it to almost nothing.** Found by an agent repairing something else, in no brief.
**Byte-identical in the 2025/26 v1.1 and 2026/27 Handbooks:**

- ⚠️ **Situation 63.24** — a clear that goes **over** the glass and *lands* in the Players' Bench is
  **still a minor.** Only a puck *"shot **directly** into the Players' Bench (where there is no
  glass)"* escapes.
- **Situation 63.28** — scooping it over the glass with a **glove** is the minor: *"considered
  shooting or batting the puck with the hand."*
- **Situation 63.3** — penalty bench, no penalty where the glass is lower than normal height.

⚠️ **Why this is a hazard and not a tidy-up: a player told the bench is a carve-out will aim at it
under pressure**, and under the Handbook that only works if the puck goes in *directly, where there
is no glass*. Otherwise it is two minutes — **the corpus would have coached the reader into the
penalty they were trying to avoid.** Propagated into four documents; five more in flight.

**⬜ Hockey Canada Rule 6.4(a) is in no document, and `risk_management.md` owns the treatment.** In
**Junior and Senior divisions** an unintentional glass-out by a defending skater is *"no penalty…
but the defending team may not make a line change"*, with Note 1 routing a deliberate one back to
10.1(ii). ⚠️ **A fourth answer in the four-book comparison, and the corpus has three.**

✅ **And the negative it sits beside was attacked properly:** Hockey Canada has **no defending-zone
glass-out limb for a skater** — a flattened, de-hyphenated whole-book scan across **both**
extractions returns **0** hits for *"over the glass"* and *"protective glass"*; the single *"no
glass"* is Interpretation 5, the goaltender's. Two agents reached this independently.

**⬜ ⚠️ THE COORDINATOR SPLIT ONE FILE BETWEEN TWO CONCURRENT AGENTS — the repository's one hard
parallelism rule.** CLAUDE.md: *"File ownership must be disjoint, and it must be stated."* I gave
`defensive_zone_coverage.md` to one agent as exclusively owned, then gave it to a second **partitioned
by section** — *"stay out of its point-shot-with-screen block and its Rule 625 material; your work
there is the delay-of-game sites only."*

⚠️ **A section is not a file.** The first agent detected the second's writes appearing mid-session,
could not rule out a lost write inside a ~90-second backup/restore window, and **flagged it rather
than assuming.** ✅ **Verified afterwards: both agents' work is intact** — the Rule 625 correction,
the head/neck `Rule:` fact, the new section heading and the delay-of-game IIHF material all present,
and both Sources edits coexist in the same 14,824-character line. **No write was lost this time**,
and that is luck, not method: commit `239f70d` exists in this repository because a sweep and a
document edit raced and one of them lost.

**The rule holds as written and I broke it. Partition by file, never by section** — and if two
findings genuinely land in one file, run them sequentially or give both to one agent.

**⬜ ⚠️ A wrong search-scope figure was in SIX places, not one.** `defensive_zone_coverage.md` said
its Casebook search covered *"fourteen"* Rule 625 situations; **there are seventeen**, and the same
figure sat in `rink_map_and_glossary.md`, `body_contact_and_battles.md`, `winger.md` (×2),
`center.md` (×2), `offensive_zone_play.md` — **and in this plan, asserting it as verified.** All
corrected. ⚠️ **The conclusion survives at every site** — none of Situations 14–17 is a screening or
goaltender-vision provision, checked twice independently. **The defect is the audit trail for a
permission**, and a scope statement that has been copied into six documents is a claim six readers
would have to re-derive to doubt.

**⬜ ⚠️ The style guide's fact-cap sentence is read wrong by anyone skimming it — the coordinator
did, and put the misreading into three briefs.** `project/content_style_guide.md` says:

> *"**3–6 coaching facts, 8 at most.** … **`Rule:` facts do not count against that cap** … No block
> may exceed 11 facts in total."*

⚠️ **"That cap" is the EIGHT-coaching-fact cap, not the eleven-fact hard max.** `check_facts.py`
enforces both independently — `MIN_FACTS, MAX_COACHING_FACTS, HARD_MAX = 3, 8, 11`, with `coaching >
8` and `len(body) > 11` as separate failures. **So a `Rule:` fact is exempt from the 8 and counts
against the 11**, and a block at 11 total is full whatever its composition.

**The coordinator briefed three agents that a `Rule:` line could be added to a block already at
11.** One caught it and pushed back after `check_facts` refused its edit; the other two were
corrected mid-flight. ⚠️ **The failure mode this creates is the round's own worst one**: an agent
told a full block has room, finding it does not, is one step from trimming an existing qualification
to fit — **which is exactly how four of this round's defects were made.**

**The fix is one clause in the style guide**, and it is worth making because the sentence is
otherwise correct and load-bearing: name which cap *"that cap"* refers to, e.g. *"do not count
against the **8-coaching-fact** cap (they do count against the 11-fact total)"*. ⚠️ **Note the
shape: the guide is not wrong, it is ambiguous to a reader who arrives at it looking for permission
— which is how every reader arrives at a cap.**

**⬜ ⚠️ THE COORDINATOR ASSERTED AN IDENTITY BETWEEN TWO BOOKS WITHOUT READING BOTH, AND AN AGENT
CAUGHT IT BEFORE IT SHIPPED.** A brief instructed an agent to write *"the IIHF text is the NHL's
word for word"* of the delay-of-game glass-out rule. **It is not:**

| | NHL 63.2(iii) | IIHF 63.2(III) |
|---|---|---|
| carve-out | *"except where there is no **glass**"* | *"except where there is no **protective** glass"* |
| bench clause | *"shot over the glass **'behind'** the players' bench"* | *"shot over the protective glass **surrounding** the Players' bench"* |

⚠️ ***"behind"* → *"surrounding"* is a WIDENING.** The IIHF appears to reach a puck over the glass at
the **sides** of the bench that the NHL's sentence does not obviously reach. **So the fabrication
would have run in the dangerous direction — understating a British reader's exposure**, in the
document that tells them the IIHF book is theirs.

**The agent read both books, refused the instruction, and wrote *"in the same terms"* with the
divergence quoted.** ⚠️ **Nothing mechanical would have caught this**: the sentence would have been
fluent, correctly cited, and wrong. **The rule that follows: never assert two books say the same
thing without reading both — "word for word" is a claim about a text, not a way of saying "similar".**

**⬜ The glass-out penalty is framed NHL-only at 14 sites across four documents.** `game_management.md`
(2), `special_teams.md` (6), `breakouts.md` (3), `defensive_zone_coverage.md` (3) — **zero IIHF
mentions between them**, while `rules_primer.md`, `risk_management.md`, `playing_without_the_puck.md`
and `defender.md` all name both books. ⚠️ **`special_teams.md:624` states the bench carve-out as
NHL-only in a `Rule:` fact read aloud standalone, and the IIHF's version is wider.** Repair in
flight.

⚠️ **And Hockey Canada is unchecked.** The repaired `on_ice_communication.md` now names three books
and is **silent on the fourth** — nobody has opened `hc.txt` for a defending-zone glass-out limb.
**That silence is untested, not a finding.**

**✅ The culture-that-produces-injuries pass RAN, and came back clean — recorded because nobody had
looked.** It was the one hazard class the first `safety-reviewer` declared it had not run at all.
A second pass ran it **first, before any rule grep**, over `team_play_and_culture.md` and
`mental_game.md` **in the working tree, not just the staged lines**, searching for
retaliation-as-normal, intimidation-as-tactic, playing-through-injury, *"sending a message"*,
enforcer framing, and anything that would make a player conceal a head injury.

**Nothing found, and positively so:** retaliation is named as the thing *not* to do in three layers;
fighting is **described and scoped** to North American pro and junior hockey, never instructed; the
downed-player convention (*"do not move them… wait for whoever is trained"*) appears in **four**
layers; intensity is explicitly set by the least willing player; and `mental_game.md` §8 gates the
entire return-from-injury section on medical clearance **in its own first sentence**, with a
"fear as information" section telling the reader not to override fear of a hit from behind.

⚠️ **And a structural reason it is safe: neither file has a ```facts``` block at all**, so the
layer-mismatch defect that produced four of this round's failures cannot occur there.

**⬜ A gap this pass named that no grep would have found.** It caught
`scanning_and_anticipation.md:146` — *"Receiving along the boards is the most dangerous reception in
hockey"* followed by a **perception** instruction only — solely **because the heading says so out
loud**. ⚠️ **A block carrying a safety point its heading does not name would have passed it**, and
that is the standing hole in every safety pass this corpus runs: **an omission has no string to
grep.** Both reviewers said it independently. **The only method anyone has proposed that would find
it is reading whole documents cold**, which no round has yet budgeted for.

**⬜ USA Hockey Casebook Rule 630, Situation 38 is new evidence the corpus does not carry anywhere.**
Found while repairing `zone_entries.md:160`. `usah_casebook.txt:15756`, citing **630(d.2)** as its
own authority: a defender may carry the puck anywhere in his zone *"as long as they are not being
forced deeper into their zone by an attacking player"*, and the Linesperson *"should be alert to stop
play as soon as the defending puck carrier is forced back further into their Defending Zone or as
soon as contact, however slight, is made with the puck or puck carrier."*

⚠️ **This settles which delayed-offside trigger is actually NHL/IIHF-exclusive.** Not the
forcing-deeper limb — **USA Hockey reaches that twice**, through 630(d)(2)'s pressure clause and
expressly through Situation 38, in almost the NHL's words. **Only the about-to-make-contact trigger
is exclusive to the two books.**

**`rules_primer.md:183`, `breakouts.md:819-828` and `time_and_space.md:406` are all correct without
it** — none claims exclusivity over the forcing limb, and `rules_primer.md:230`'s *"in neither North
American **rule**"* is vindicated as exactly the right qualification. ⚠️ **But none of them tells a
USA Hockey reader their book does carry the forcing-deeper stoppage.** `rules_primer.md:183` gets
closest — *"Its pressure limb is actually wider than the NHL's"* — and stops short of the Casebook.
**An addition, not a defect.**

**⬜ Two sibling bodies now state different ceilings for NHL Rule 44.** `defender.md:612` gives it as
44.3's major plus 44.5's game misconduct; `defending_the_rush.md:454` adds **44.4's discretionary
match**. ⚠️ **Neither is wrong** — `defender.md:708` carries 44.4 in its Sources — and `commit-gate`
judged it non-blocking. But a reader moving between the two documents meets two different answers to
*"how bad can this get?"*, and the round has already been caught once by two agents writing
individually-correct, jointly-incoherent sentences about the same rule. **Align the bodies.**


**⬜ ⚠️ THE DISPATCH DEFECT THIS ROUND ACTUALLY HAD: brief site-lists were built from greps that
stopped at the first hit per file.** An agent told to fix a claim at **two** sites found **six** —
and found the other four only by grepping each file for its own claim *after* editing. The same
shape recurred all round: a `defender.md` defect that was byte-identical in `defending_the_rush.md`;
a `game_management.md` line duplicated at `:122` and `:716`; a false universal in
`body_contact_and_battles.md`'s table cell **and** its facts block thirteen lines above.

⚠️ **A second shape of the same error: a "do not touch X" instruction scoped to a clause, not a
line.** A brief told an agent that `equipment.md:346` was correct and must be left alone — true of
the IIHF clause the dispatcher had looked at, **and that line carried a second Hockey Canada site
that stopped at the goalie's minor.** Honouring the instruction literally would have shipped the
largest body site incomplete. **A negative instruction needs the same site-census as a positive
one.** The same brief also stated the penalty shot as attaching to the goalie picking up the stick;
it attaches to the **skater**, conditionally, and the agent said plainly that writing it as briefed
*"would have been a new rules error."*

⚠️ **Every one was found by an agent grepping after it had finished, never by the brief.** The
dispatcher's greps were finding *whether* a defect existed and stopping; the count needed is *how
many times*. **Rule for the next round: a brief must state the grep that produced its site list, and
the agent must re-run it corpus-wide before declaring the repair complete.** Two of this round's
blocking findings were second copies nobody had looked for.

**⬜ ⚠️ An agent fabricated a URL and caught it itself — recorded as evidence about the method.**
Writing a Sources entry, it pattern-matched the 2025/26 IIHF link into
`…/contentimages/3_the_iihf/2026-27_iihf_rulebook.pdf` — plausible, well-formed, and **not a real
URL**. The genuine one (`…/downloads/rule%20book/2026-27_iihf_rule_book.pdf`) sits in
`scripts/fetch_sources.sh`. It found the invention only by grepping its own output and seeing the
string occurred **once, in its own line**. ⚠️ **Nothing else would have caught it**: `check_links.py`
does not test external URLs, and `check_external_links.py` walks the baseline TSV, which a
brand-new fabricated URL is not in. **Verified corpus-wide at close: zero occurrences of the
fabricated form; the real URL is used at ten sites and returns 200.** The standing rule that follows
is narrow and cheap: **take every URL from an existing corpus citation or from
`scripts/fetch_sources.sh`, and never from the shape of a sibling link.**

**⬜ `equipment.md` has NO ```facts``` blocks at all** — zero matches for a facts fence in the whole
document. So its neck-laceration-protector scoping, helmet certification and post-impact
replacement material **never reach the extracted layer a listener hears**. ⚠️ **The single
highest-consequence British equipment rule in the corpus is invisible there**: IIHF 9.12, mandatory
for all players in all categories, with **no warning** under the In-House Rules and a 10-minute
misconduct escalating to a game misconduct on a second violation. The material is present in the
body, Common Mistakes and Key Takeaways, so this is not the round-10 body-only shape — **but a
document with no facts layer is invisible to `check_facts.py` by construction**, which is why
nobody has noticed. **Pre-existing, not introduced this round.**

**⬜ ⚠️ The safety pass reached 13 of 35 changed documents in full and could not reach 12 at all.**
`safety-reviewer` named its own boundary: `on_ice_communication` · `scanning_and_anticipation` ·
`how_to_watch_hockey` · `mental_game` · `team_play_and_culture` · `neutral_zone_systems` ·
`defensive_zone_coverage` · `zone_entries` · `passing_and_receiving` · `puck_handling` · `shooting` ·
`switching_positions` were **not opened**. ⚠️ **And one hazard class was not run at all** — the
culture-that-produces-injuries pass over `team_play_and_culture.md` and `mental_game.md`
(retaliation, intimidation-as-tactic, playing through injury). Its own words: *"the one class in my
brief I did not run at all."*

⚠️ **It also named the limit that matters more than the coverage:** it found the clipping defect
*because a brief named it and a literal string could be grepped*. **A facts line whose heading gives
no clue that a safety point is missing would have passed it** — the omission pass was list-driven
for four documents and impressionistic elsewhere. **An omission has no string to grep**, and that is
the standing hole in every safety pass this corpus has run.

**✅ ⚠️ The 300-character facts cap manufactured a penalty-tier defect, and it did it by pasting.**
`commit-gate` sampled one line and found `defender.md:600` stating a clipping ladder **both books
contradict**: it reserved *"plus automatic game misconduct"* to the IIHF when **NHL 44.5 makes it
mandatory too** (*"A game misconduct penalty **must** be assessed anytime a major penalty is applied
for injuring an opponent by clipping"*), and it carried the NHL's **injury** trigger onto **IIHF
44.3**, which is *"at their discretion, **may** assess"*, keyed to **reckless endangerment**, with a
sufficiency test.

⚠️ **The mechanism is the thing to keep.** A correct, longer, multi-book statement was compressed to
fit a `Rule:` line's 300-character cap **until the triggers fell out** — right tier, wrong trigger,
wrong book. **That is the exact shape this round spent the day correcting, produced by the round
itself, at the cap the briefs kept warning agents about.** And it was **pasted**: a byte-identical
copy sat in `defending_the_rush.md:454`, which no brief knew about.

**Fixed** by splitting each into two `Rule:` lines rather than compressing further — nothing
dropped. Three further defects surfaced with it: both files' Sources called **IIHF 44.1** *"the
NHL's in the same words"* when the IIHF carries a **crouching clause the NHL does not write** (and
`rules_primer.md` teaches that divergence, so the two contradicted each other); `rules_primer.md`'s
Key Takeaway 6 had dropped the IIHF trigger the body four times carries; and
`body_contact_and_battles.md`'s Key Takeaway 2 named Hockey Canada 8.7(a)'s minor as if it were the
whole tier.

**A corpus-wide Rule 44 census then ran: six files touch it, and there is no third copy.**
`uk_rules.md:319-321` independently states the NHL injury condition and 44.5's mandatory misconduct
**correctly**, and `rules_primer.md:384` is the corpus's model statement. ⚠️ **Recorded because the
paste hypothesis was right about the second copy and wrong about a third** — the census was cheap
and settled it, where inference would not have.

⚠️ **What this leaves open, and it is the general case:** the same compression would look identical
in **any** cross-book penalty statement, and only the clipping family was audited.
`defending_the_rush.md:463` now has verified clipping tiers sitting beside **unverified IIHF 57.3
and 57.4 tripping tiers in the same paragraph.**

**✅ ⚠️ The renderer was hiding this round's own corrections — found by `site-reviewer`, fixed in the
plugin.** `site/src/plugins/remark-corpus.mjs` partitions every trailer paragraph into `sources`
(collapsed into a `<details>`) or `notes` (a visible panel), and emits **all** sources before **all**
notes. Its `NOTE_START_RE` did not match `⚠️ **In-House note`, `⚠️ **Edition note` or `Provenance —`
— **the optional warning glyph stops the bold run from opening the line** — so those paragraphs were
filed as sources, **hidden, and reordered ahead of the note that referenced them.**

⚠️ **The result on `faceoffs.md` was the round's own defect re-created by the renderer.** The
visible note read *"the edition note **that follows it**"* and *"see the In-House note **below**"* —
and both targets had been moved **above** it, **inside a collapsed box labelled "Sources"**. A
reader who did not open that box read an authoritative statement that an IIHF face-off violation is
a warning, plus two instructions to look somewhere that did not exist. **Six documents were
affected.**

**Fixed** by extending the pattern to accept an optional leading `⚠❗🚫` and the three missing leads.
Verified: 8/8 classification unit cases correct (including the two that must **stay** in Sources);
build passes; **all 37 trailer pages keep their Sources disclosure**; **15 now show a visible
Verification-notes panel**; and on `faceoffs` the rendered order is now Sources → notes panel →
Verification → In-House → Edition → Provenance, so **both cross-references resolve correctly.**

⚠️ **A measurement artefact worth recording, because it nearly became a false finding.** A first
check reported Edition note and Provenance *"MISSING"* from the notes panel. They were not — the
probe used a **non-greedy** `<aside …>.*?</aside>` regex which stopped at the first *nested*
`</aside>` from a callout inside the panel. **Checking positions instead of containment showed the
fix was complete.** Same class as this round's *"seven of twelve rules changed"* pagination
artefact: **a precise-looking measurement, wrong because of how it was taken.**

**⬜ ⚠️ Ten documents may carry a "retrieved" date that understates what is in the box, and the
corpus has three different forms for saying so.** `faceoffs.md`'s label read *"Sources — retrieved
27 July 2026"* while its Rules paragraph lists the **IIHF Rulebook 2026/27, the IIHF Situation
Handbook 2026/27 and the IHUK In-House Rules 2026-27** — **none of which existed on disk before 29
August 2026.** Fixed there. ⚠️ **Eight further documents carry the same bare heading and were not
examined** — `team_play_and_culture`, `mental_game`, `how_to_watch_hockey`, `practice_and_development`,
`equipment`, `passing_and_receiving`, `rink_map_and_glossary`, `conditioning_and_recovery` — and at
least one cites the Hockey Canada **2026-2028** rulebook, so the same understatement is likely.

⚠️ **And the corpus has three incompatible forms for a multi-date label**: `uk_rules.md`'s
*"…; the 2026-27 documents 29 August 2026"*, `rules_primer.md:941`'s *"retrieved 27 July 2026,
except the In-House Rules, retrieved 29 July 2026"*, and now `faceoffs.md`'s three-clause version.
**Pick one and sweep.** ⚠️ **Note the distinction the fix turned on and do not lose it: "retrieved"
is about fetching.** Reading and computing dates belong in the notes that carry them, and promoting
one to the label claims a retrieval no note evidences.

**⬜ The remaining `site-reviewer` findings, none blocking.** the `<details>` marker is half-clipped at mobile width on all 37 pages
(`global.css:1218`, `list-style-position: outside` in the left gutter — `.toc-inline > summary`
is the working pattern); ⚠️ inside a ```facts``` block gets no `.warn-inline` treatment, so **nine
facts lines across six documents carry a warning by glyph alone**; the longest rendered trailer is
**5,676 characters of unbroken italic** at 375px; hub/search/404 JSON-LD is typed `WebSite` where
`CollectionPage`/`WebPage` is meant; and Pagefind stems *icing* → *ice*, so searching the icing rule
returns documents about ice.

**✅ The Interpretation-count census — run, and it came back CLEAN.** The four→twelve miscount at
`rules_primer.md` was a **page-boundary artefact** (Interpretations 1–4 on printed page 121, 5–12
on 122), and the agent that fixed it correctly asked whether the same one-page miscount sat behind
the corpus's *other* Hockey Canada Interpretation counts. **It does not.** Every count claim in
`content/` was checked against a parse of `hc_layout.txt` counting `Interpretation N Rule X.Y(z)`
headings:

| Claim | Sites | On disk | |
|---|---|---|---|
| *"its thirteen interpretations"* (Rule 6.11) | `rules_primer.md:201`, `:943`, `zone_entries.md:185`, `:1011` | **13** — 6.11(a) 7 + 6.11(b) 4 + 6.11(c) 2 | ✅ |
| *"two Interpretations"* (Rule 8.6) | `offensive_zone_play.md:538`, `defending_the_rush.md:585` | **2** — both 8.6(a) | ✅ |
| *"twelve Interpretations"* (Rule 10.1(a)) | `rules_primer.md:403`, `:815`, `risk_management.md:791` | **12** | ✅ after this round's fix |

⚠️ **Recorded because a negative result is worth as much as a finding here**, and because the
obvious inference — *"if one count was a one-page miss, they all might be"* — **is wrong.** The
next round should not re-derive this. ⚠️ **What it does NOT clear:** counts for *other* books
(USA Hockey Casebook Situations, IIHF Situations per rule), and any Hockey Canada rule whose
Interpretations the corpus relies on **without stating a count** — the parse above only tests
stated numbers.

**⬜ ⚠️ Pre-existing quantifier lines have never been checked — only the ones this round touched.**
The `rules-verifier` pass run at the commit gate verified **34 instances in nine files** and named
its own boundary: it read **staged `+` lines only**. It flagged two pre-existing lines in the same
document with the same failure shape — `rules_primer.md:680` (*"three of the four books"*) and
`:385` (*"all four books define 'altercation'"*) — as **out of scope and unchecked.** ⚠️ **The
corpus-wide census is **120** instances across 23 files (re-measured on the final staged diff; an earlier count of 125 used a wider pattern set) in the staged diff alone**; how many sit in
*unchanged* text nobody has counted. **Every sweep this round was scoped to what changed**, which
is exactly how a claim that has been wrong for twenty rounds stays wrong.

**⬜ Hockey Canada Rule 6.5 — a post-icing face-off carve-out that appears NOWHERE in `content/`.**
`hc_layout.txt:3786-3793`: *"In Junior divisions, on a face-off following an icing, any face-off
violation, including but not limited to late arrival, encroachment, or early movement, will result
in a warning."* — with 6.5(b) making a subsequent violation a minor under 10.1(vii). ⚠️ **So the
free-first-violation limit is in three of the four books, and the corpus documented two.** Being
added to the ejection sites this round; **the wider question is whether other Hockey Canada
division-scoped rules are missing the same way** — 6.5 is headed *"Junior"*, and a division-scoped
provision is easy to miss when grepping by concept. Worth its own pass.

⚠️ **`hc_layout.txt:5949` records a defect in the book itself, not the corpus:** HC 10.1(viii)
cross-references *"Rule 6.5 – Face-off Violation – **Junior A**"* while the rule is headed
*"Junior"* and reads *"In Junior divisions"*. Recorded, not repaired.

**⬜ ⚠️ `check_counts.py --update` corrupted a historical figure inside prose — TWICE, in this very
file, and the second time after the defect had been written up two rows below.**
A plan row read *"The corpus went from **696,430 words / 52.8 hours** to …"* — a **before/after**
sentence. `--update` matched the *"52.8"* and rewrote it to the live *"56.3"*, producing the
nonsense *"from 696,430 words / 56.3 hours to 728,546 / 55.2 hours."* ⚠️ **The updater cannot tell
a live corpus figure from a historical one quoted in a sentence about how the figure changed**, and
the round's own record of its growth was the thing it broke. Caught by reading the file after
running it — **nothing flagged it, and the tool reported success.**

⚠️ **It then did it again**, on the sentence rewritten to describe the first instance — this time
updating the *hours* and leaving the *words*, producing a mismatched pair inside one clause. **The
row documenting the bug did not protect the row next to it**, because the guidance was "read the
diff" and a human reading a 64-file diff does not re-read a plan row they wrote an hour earlier.
The sentence has now been rewritten to **state no figure at all**, deferring to the single live
figure at the top of the file — which is the only shape the updater cannot corrupt.

The fix is for `--update` to skip figures inside a construction that marks them as historical
(*"went from X to Y"*, *"was X until"*, a struck row), or to require an explicit marker on any
figure it is allowed to rewrite. **Until then: read the diff `--update` produces**, and prefer not
to write a before-figure and a live figure in the same sentence.

**⬜ ⚠️ The penalty-tier ladder census: 96 sites across 19 documents, and this round fixed roughly
a dozen of them.** Measured at close:
`grep -rn "not capped\|the ceiling\|is a floor\|floor rather\|not the ceiling" content/`

| Document | Sites | | Document | Sites |
|---|---:|---|---|---:|
| `body_contact_and_battles.md` | 23 | | `puck_handling.md` | 4 |
| `rules_primer.md` | 15 | | `goaltender.md` | 4 |
| `breakouts.md` | 6 | | `time_and_space.md` | 4 |
| `shooting.md` | 5 | | `game_management.md` | 3 |
| `offensive_zone_play.md` | 5 | | `forechecking_systems.md` | 3 |
| `defending_the_rush.md` | 5 | | `winger.md` | 3 |
| `risk_management.md` | 5 | | `playing_without_the_puck.md` | 3 |
| | | | *and 5 more* | 8 |

⚠️ **The agent that found this predicted it before the census was run**, and its reasoning is the
finding: *"a brief written after three files were fixed still missed five sites in four more, so I
would assume the gap survives elsewhere."* It does. **Each of these 96 sentences asserts that some
penalty is not capped at a minor, and each one is a claim about which books carry which tier** —
the exact shape that was wrong at every site examined this round.

⚠️ **This is NOT a licence to sweep.** Round 44 manufactured a divergence that did not exist by
sweeping uniformly, and three sites this round turned out to be **interference picks wrongly
briefed as late hits** — applying the late-hit model to them would have cited a roughing rule for
an interference foul in three documents. **Each site has to be read for which foul it is about
before its ladder is checked.** Do it document by document, and let each one's own correct site be
the model rather than importing another document's.

**⬜ Hockey Canada's real interference ceiling is a match penalty, and no "not the ceiling" sentence
in the corpus says so.** Every one stops at **8.3(b)**, a major plus game misconduct.
`hc_layout.txt:5416` has **8.3(c)**: *"A Match penalty will be assessed to any player who attempts
to injure or deliberately injures an opponent by interference"* — and 8.3 lists a late hit as
interference. ⚠️ **No sentence is false** (none claims 8.3(b) is a cap) — **this is the
understating direction**, which is the safer one but still leaves a reader believing the worst case
is five and a game. Added at `body_contact_and_battles.md:1132` only, where the table row already
carried it; every other site is open.

**⬜ `offensive_zone_play.md:728` was left knowingly incomplete, and the agent said so rather than
forcing it.** The block is at the **11-fact hard cap** and the fact is **exactly 300 characters**.
It states a four-book tier ladder **in the spoken layer with USA Hockey's cell absent**, and the
cell cannot be added without deleting the adult-male scope limit — which the style guide forbids.
⚠️ **The style guide's own prescribed remedy is to split the section on a seam the body already
uses** — the pinch *decision* versus the legality of *"take the player"*, already two blockquotes.
That is a structural change creating a new heading anchor, and it was correctly judged out of
scope for a citation brief. **It is the one site in this round's scope that is knowingly still
wrong, and it is in a read-aloud layer.**

**⬜ ⚠️ NEW DEFECT CLASS: a citation can return HTTP 200 and point at the wrong document, and
nothing here can see it.** Found by an agent that censused link *text* while repairing link
*liveness*. **`faceoffs.md:929` has link text reading *"IIHF Situation Handbook 2025/26 (Version
1.1, August 2025)"* and a URL of `/en/statichub/6446/rules-and-regulations`** — a hub page, not the
Handbook. `check_links.py` cannot see it (the URL is well-formed); `check_external_links.py` cannot
see it (the URL returns 200); a byte-count diff cannot see it. **Only reading the text against the
target finds it.**

⚠️ **And it is worse than one mislabelled link, because both surviving IIHF hubs contain nothing.**
`/statichub/6446/rules-and-regulations` (~47,500 B) and `/statichub/8674/rules` (~47,400 B) both
render, after stripping comments/scripts/tags, to **792 characters — byte-identical to each other**
— entirely site navigation and footer. **Zero occurrences of "Situation Handbook", "Rulebook" or
"Rule Book"**; the only `.pdf` href in either is `IIHF_Calendar_of_Events.pdf`. They are JavaScript
shells. **So four documents have been resting citations on 47KB of navigation**, and the byte count
actively disguised it — this is "a 200 is not a presence" in the one form that defeats a size check
as well as a status check. Repair in flight for `faceoffs.md`, `equipment.md`, `defender.md` and
`team_play_and_culture.md`.

**The tooling gap, which outlives the repair:** ⚠️ **nothing checks link text against link target,
corpus-wide.** A citation naming one document and pointing at another passes every gate we have.
The check is cheap and mostly mechanical — for each markdown link, does the target's rendered text
contain something only the named document would contain? — and it wants a JS-aware fetch or a
known-shells denylist, since a hub that renders empty to `curl` is exactly the case that produced
this. **The obvious first pass is every remaining `iihf.com/en/statichub/` URL**, now shown to
contain nothing at all.

**✅ The USA Hockey tier cell was missing from the late-hit and interference ladders corpus-wide —
closed this round, and it corrected two errors in the material it touched.** Documents stated that
an interference or late-hit minor *"is not capped there"* while naming only IIHF and Hockey Canada
(sometimes the NHL). Fixed in `breakouts.md`, `forechecking_systems.md`, `game_management.md`, and
the last four in the same round.

⚠️ **The two shapes are NOT the same and must not be written the same way.** For an **interference
pick**, USA Hockey Rule 625 genuinely has no tier above the minor, and reaching a major needs the
*Declaration of Player Safety, Fair Play & Respect* routing argument. For a **late hit**, no
routing is needed — **640(g) and 640(h) reach 640(b) by their own terms.** An early draft copied
the interference model onto the late-hit sites and produced a longer, weaker chain.

**Two errors found in the material while fixing it:**
- ⚠️ **A mis-attributed quotation, at three sites.** *"The concept of 'finishing the check' is an
  unacceptable action"* was credited to USA Hockey's *Standard of Play and Rule Emphasis – Body
  Checking*. **It is not there.** It is in the **Declaration** (`usah.txt:352`) and repeated
  verbatim in the **Glossary** under *"Late Body Check"* (`:6145`). Same shape as the
  614(b)/618(a) misattribution found earlier the same round: **a quotation attached to the section
  a writer expected it to be in.**
- ⚠️ **"USA Hockey grants no window at all" — false**, and it made two documents contradict two
  others. **Casebook, Standard of Play, Situation 10** allows a finish on four cumulative
  conditions including *"an arm's length plus stick length"*. `body_contact_and_battles.md` and
  `offensive_zone_play.md` already had the defensible form — *"the narrowest of the four — not the
  absence of one"*. Also corrected: the arm-and-stick measure is **Hockey Canada's rule and USA
  Hockey's Casebook**; **NHL and IIHF 56.1 give no measure at all**, so "Hockey Canada writes the
  window as a distance instead of a moment" was misleading.

**One question deliberately left open rather than inferred:** 640(g)/(h) reach only actions
*"falling under Rule 640(b, c, d, e or f)"*, and **640(b) is written *"(except Adult Male
Classifications)"***. **Whether 640(g) reaches a late hit in adult men's hockey, where (b) is not
assessed, the book does not say** — and the corpus now says so in terms rather than guessing.
**602(a) is unconditional and does not depend on the answer**, which is what carries the safety
point regardless.

⚠️ **`uk_rules.md`'s five sites were assessed and do NOT need this — closed as not-applicable.** It
is written to the IIHF book as *"your book"*, its interference material is IIHF 56.4/56.5 and
Table 7 with one clearly-framed NHL contrast, and it never presents a multi-book field. **A USA
Hockey cell would break the document's premise.** Recorded so the next census does not re-raise it.

**⬜ One unresolved reading, flagged and not written about.** USA Hockey **640(a)** contains *"Any
action warranting a major penalty under this rule shall be assessed under Rule 615 (Fighting)."*
⚠️ **If that sentence limits Rule 640's majors generally rather than only (a)'s, it qualifies
everything the corpus now says about 640(g).** It could not be resolved from the book's own words,
and the Casebook was not searched for a Situation on point. **An agent found it, judged it beyond
what it could settle, and said so instead of writing around it** — which is the right call and the
reason this row exists.

**⬜ ⚠️ This file is carrying 158 closed rows, against its own stated rule — and that is why it is
1,800 lines.** CLAUDE.md says `project/plans/` holds *"remaining work plus the standing guidance
for doing it — **no completed items**: when work closes it moves out to a review record."* The
table header here softens that to "carried for one round so the round-50 record and this table can
be diffed" — **and then never swept.** Measured this round: **158 ✅ against 66 open table rows and
61 open prose items.** ⚠️ **The closed rows outnumber the open ones more than two to one**, which
is precisely the condition that makes a plan unreadable, and an unreadable plan is how this round
found four rows describing HEAD rather than the working tree.

**Deliberately NOT swept in the round that measured it**, for a stated reason: a 158-row deletion
in the same commit as a large content round produces a diff nobody can review, and mixing two
unrelated large changes is how a real defect hides in the noise. ⚠️ **It should be the next
round's first job, as its own commit** — move each closed row to the review record for the round
that closed it, keep the link, and delete nothing that is not recorded somewhere else first.

⚠️ **And note the second-order finding, which is the transferable one:** the "keep them for one
round" exception was written for a good reason and had no expiry, no owner and nothing that
checks it. **Every stale-row defect this round found was downstream of this file being too long
to read end to end.**

**⬜ Three files now state the USA Hockey stick-lift rule at three different confidence levels.**
After this round's correction of *"at or near the hands every book reaches the lift"* to **three of
the four** (the NHL being the book that does not — its Rule 55 contains **no** opponent's-hands
sentence, and *"opponent's hands"* occurs **exactly once in the whole NHL book**, in 61.1's
slashing clause), the three repaired documents landed on different hedges for the **USA Hockey**
cell: `defender.md:186` says it reaches the lift *"on a reading of USA Hockey 623"*, while
`defensive_zone_coverage.md:467` and `on_ice_communication.md:213` say *"only where it stops the
opponent playing the puck"*. **Both are defensible and they are not the same confidence level.**
Pick one. ⚠️ **Prefer the effect-based form** — 623's Note turns on *"takes away the ability for
the opponent to pass or shoot the puck with a normal amount of force"*, which is a stated
condition rather than an inference, so calling it "a reading" understates the book.

⚠️ **And do not reintroduce the word "clean" here.** A drafting agent deliberately wrote *"reach a
lift at the hands"* rather than *"a clean lift"*, because under USA Hockey and Hockey Canada the
trigger is **effect, not cleanliness** — a lift made entirely fairly still draws the penalty if it
stops the opponent playing the puck. "Clean lift" is right for the NHL and IIHF and wrong for the
other two, which is precisely the kind of limit this round kept finding attached to a four-book
claim.

**✅ ⚠️ The agent definitions in `.claude/agents/` were stale — audited this round, two defects found and fixed.**
`rules-verifier.md` handed every verifier a source table naming `usah_rules.txt`, `usah_case.txt`,
`hc2628.txt` and an `iihf_rules.txt` at *"v1.0, May 2025"* — **four files that do not exist** — and
labelled `hc.txt` as the **superseded 2024-2026** Hockey Canada edition when `hc.txt` **is** the
current 2026-2028 book. ⚠️ **A verifier trusting it would have reported a book as missing, or
quoted the live Hockey Canada rules while calling them superseded.** It was rewritten against
`ls sources/` and now carries the extraction traps plus an explicit instruction that the file
listing is the authority. **All seven definitions were then audited against disk.** Five are clean.
`diagram-reviewer.md`'s two source references both resolve. One further defect was found and fixed:
⚠️ **`source-verifier.md` told agents to write fetches to the session scratchpad *"not to `/tmp`"*,
explained exactly why concurrent agents clobber each other there — and then, four paragraphs later,
gave a worked `grep` example reading `/tmp/page.html`.** An agent copying the snippet, which is what
snippets are for, **defeated the rule by following the instructions.** Both are repaired.

⚠️ **The transferable point, and the reason this row is kept rather than deleted: a self-refuting
brief is invisible to grep.** Both defects survived because every reader searched these files for
what they needed instead of reading them end to end — the same failure the corpus's own
whole-file-diff rule exists to prevent. **Agent definitions are briefs, briefs rot faster than the
corpus, and nothing checks them.** Re-audit whenever `sources/` changes shape.

**⬜ `link_baseline.tsv` is stale — and running it found four real breakages, one of them a URL
this round had just labelled.** `check_external_links.py` was run in full for the first time this
round: **666 URLs · 324 unchanged · 4 new breakage · 12 now bot-walled · 18 redirect target changed
· 276 body size moved a lot · 10 recovered · 22 known dead.**

⚠️ **`https://www.iihf.com/en/statichub/officiating` is dead**, cited by `rules_primer.md`,
`goaltender.md` and `switching_positions.md`. Verified by hand, five requests: two resolve to
`iihf.com/Error/error-page.html?**aspxerrorpath=/en/statichub/officiating**` — the server naming
the path it cannot resolve — and one returns 403. **The 403 is the host's intermittent bot wall
and is not the finding**; CLAUDE.md is explicit that a 403 from `iihf.com` is not an absence. What
rules out a blanket wall is that two sibling hubs on the same host **are** alive:
`/statichub/6446/rules-and-regulations` (47,432 B) and `/statichub/8674/rules` (47,512 B), both
also 403 intermittently. ⚠️ **`switching_positions.md:480` had an edition label added to that
citation earlier the same day — so it now names an edition and points nowhere.** Repair in flight.

The other three: `bpspsychub.onlinelibrary.wiley.com/…tb02391.x` and
`onlinelibrary.wiley.com/doi/pdfdirect/10.1111/sms.14284` (both `mental_game.md`, both **200 with a
not-found body** — the second collapsed 226,378 → 15,946 bytes, the soft-404 signature) and
`members.thecoachessite.com/…` (`time_and_space.md`, now no response at all).

⚠️ **The 276 "body size moved a lot" is the number to think about, not the 4.** At 41% of the
baseline it is too high to be signal, and it means the baseline was captured across differing
bot-wall and cookie-wall states — `tandfonline` and `sagepub` entries flip between the real page
and a `cookieAbsent` stub depending on the request. **A baseline that noisy trains its readers to
skim it**, which is how the four real breakages sat unnoticed. Refreshing it is not enough; the
capture needs to record *why* a body is the size it is, or the size comparison should be dropped
for hosts known to serve interstitials.

**Refresh with `--write-baseline` AFTER the round commits, not during it** — a mid-round rewrite
would capture other agents' half-finished URLs. Also outstanding: `team_play_and_culture.md` and
`neutral_zone_systems.md` had `usahockeyrulebook.com` citations repointed to the USA Hockey PDF,
and `mental_game.md` gained `https://doi.org/10.51224/cik.2024.74`.
`team_play_and_culture.md` had two `usahockeyrulebook.com` citations repointed to the USA Hockey
PDF, `mental_game.md` gained `https://doi.org/10.51224/cik.2024.74`, and `neutral_zone_systems.md`
is in flight on the third `.com` site. `check_external_links.py --write-baseline` refreshes it, but
it is a 667-row network operation and should be run **after** the round commits, not during it —
a rewrite mid-round would capture other agents' half-finished URLs.

**⬜ Three edition-label styles for the same source are now in the tree.** `(Version 1.1, August
2025)` stands at **8 uses** — the sanctioned form, matching `game_management.md`'s existing IIHF
Rulebook entry — against `— Version 1.1, August 2025` at `risk_management.md:791` and
`playing_without_the_puck.md:867`, and `(v1.1, August 2025)` at `defender.md:707`. Two files use
two styles internally. A one-pass normalisation toward the majority form, once every agent has
released its files. ⚠️ **Cosmetic, and listed only because it is cheap and will otherwise be
re-derived by somebody next round.**

**⬜ ⚠️ This round added SIXTY-THREE THOUSAND words — and produced all of them without review.**
⚠️ **That is +4.7 hours of reading time in one round**, against a Tier 0 argument that the corpus
was already too long at 52.8. **The round made its own headline problem measurably worse by nearly
ten percent**, and almost none of it is teaching prose — it is Sources trailers, cross-book
qualifications, edition scoping and provenance. ⚠️ **Some of it is typography a player will never
need** (see the *"is 'word for word' even the right frame?"* row above). **Accuracy and length are
now in open conflict and the corpus has no policy for the trade.** ⚠️ **The live corpus figure is stated once, in Tier 0 at the top of this file, and is
owned by `check_counts.py`; it is deliberately not restated here** — a `--update` run corrupted
this very sentence twice by rewriting half of a before/after pair (see the row below on that).
Round 52 closed at 696,430 words. ⚠️ **Read that against Tier 0,
whose entire argument is that the corpus is already too long for a beginner and that structure is
its biggest problem.** This round made the reading time worse by about three and a half hours, and
almost none of it is teaching prose — it is Sources trailers, cross-book qualifications and provenance. **That is the right
trade for accuracy and it is not free**, and the two goals are now measurably pulling against each
other. Somebody should decide, deliberately, whether Sources trailers belong on the page at all or
in a per-document appendix the reader can skip — because they are now a material fraction of what
a listener hears. Sources
trailers across a dozen documents, the USA Hockey 640-routing paragraph, the 616 Note 1 rewrite,
the IIHF book-versus-handbook passages, the clipping tiers in `defender.md` and
`defending_the_rush.md`, and the corrected self-talk evidence in `mental_game.md`. **A repair is
new text, and new text has not been reviewed** — the style guide says so in its own section. Every
agent that wrote them said so unprompted in its closing paragraph. ⚠️ **Several attach penalty
tiers to techniques the documents still tell a reader to perform**, which is `rules-verifier` and
`safety-reviewer` territory specifically. **This is the largest single piece of outstanding review
debt in the repository right now**, and it was created by the round that closed the most rows.

**⬜ Nobody has opened a browser or synthesised audio since the Sources expansion.** The site
**builds clean** — 50 pages, 9,451 internal links and 5,285 anchors all resolving, 453 assets, and
`md_to_speech.py --self-test` passes 130 assertions — but a clean build is not a read page. Several
trailers are now single ~7,800-character lines carrying nested emphasis, quotes and ⚠️ markers, and
`defender.md`'s 2-on-1 and D-zone bullets became very long single paragraphs. ⚠️ **Every read-aloud
judgement made this round was made by reading `md_to_speech.py`'s substitution table, not by
hearing it.** `site-reviewer` on the affected pages, at mobile width, is the outstanding gate item.

**⬜ ⚠️ Nothing in the checker set can see a source that changes underneath its own URL — and one
just did.** `fetch_sources.sh` has pointed at the IIHF Situation Handbook's `…-v1_1.pdf` URL
since it was written. In July 2026 that URL served **v1.0, June 2025**; in August 2026 it serves
**v1.1, August 2025**, with **four rulings changed and one reversed**. The corpus was citing v1.1
and verifying against v1.0 for the whole intervening period, and a routine re-fetch would have
swapped the book silently — shifting every `iihf_situations.txt:NNNN` citation in `project/` and
changing what four Situations say. ⚠️ **`check_links.py` tests reachability; `check_external_links.py`
tests status codes. Neither compares content, and neither ever will by accident.** The fix is a
recorded digest per fetched source — store the extraction's hash beside its entry and make
`fetch_sources.sh` refuse to overwrite a changed document without a human decision, the way the
`iihf_rules.txt` note already warns about by hand. ⚠️ **Note what this is not: a link-rot check.**
The link never rotted. It resolved perfectly, every time, to a different book. **This is the
first instance recorded here of a primary source mutating in place, and it is the reason
`sources/README.md` now names an edition for both Handbook files.**

**✅ The NHL Situation Handbook is NOT PUBLICLY OBTAINABLE — searched properly, and the task is
closed rather than carried.** Named independently by **two** agents this round as the highest-value next fetch. The IIHF
has just reversed Situation 63.19 — a puck kicked off the skate directly over the glass is now a
delay-of-game minor under its Handbook, while its Rulebook's 63.2(III) still reads *"(using their
hand or stick)"*. **The NHL's 63.2(iii) carries materially the same words**, and the IIHF
Handbook's own Foreword says it *"is based on the NHL Situation Handbook"* — which is some reason
to expect the NHL book to answer similarly, ⚠️ **but that inference is not evidence and must not
be written as one.** Until the NHL book is read, the corpus's NHL hand-or-stick treatment rests on
rulebook text alone and is unchecked against NHL interpretive practice. **If the NHL reads its
identical wording the way the IIHF now does, the corpus is telling a North American reader
something the officials do not do.** Fetch it, then re-run 63.2 across every document that cites it.

**⬜ `site/` has not been re-checked since the Sources-trailer expansion.** Roughly a thousand
words of new trailer prose went in this round across seven documents, carrying nested emphasis,
quotes and ⚠️ markers inside single ~7,800-character lines. Delimiters were verified to balance
arithmetically by more than one agent — ⚠️ **balance is not rendering**, and no build was run and
no browser was opened after those edits. A `site-reviewer` pass on the affected pages is the
outstanding gate item.

**⬜ An advisory baseline for `check-arrivals` — deliberately NOT built yet.** `diagram-reviewer`
proposed an allowlist keyed by `diagram + owner + target + rule` so a **new** advisory is loud and
an accepted one silent. It is the right idea and it was held back for a stated reason: **an
allowlist entry is a written assertion that a human looked and accepted.** Writing seven of them
before anyone had rendered `dz-walk-down-man` and `nz-1-2-2-trap` would have put the repository's
own voice behind a review that had not happened — this corpus's signature failure. Both have since
been rendered and judged safe, so the blocker is gone. **When it is built: the reason string must
be mandatory (an entry without one is a hard failure, not a warning), and a changed target must
count as a new entry rather than a matched one.**

⚠️ **A tripwire worth knowing before anyone moves a route.** The thinnest non-goaltender margin
*above* the 9 ft gate is `dz-collapse-corner` at **9.43 ft**, ahead-of-tip — five inches of
clearance. Not a defect; the reason the build will suddenly fail if that route is nudged.

**⬜ Nobody has diffed the summary layers against each other — corpus-wide.** Round 43 read
each document's summary layer cold against **its own body** and found eight majors. Its
closing sentence names what that cannot reach: a claim stated one way in `defender.md`'s
takeaway and the opposite way in `center.md`'s, **where both match their own bodies**, is
invisible to it. The KHL finding surfaced only because two documents happened to be open at
once. **This is the highest-value move on the list and it is cheap** — the summary layers of
all 37 documents are **51,978 words across 74 sections** — large, but a fraction of the corpus — ⚠️ **round 44 recorded 85,820 here**, inflated by 34,403 words of Sources footers swept into the section span; see round 48 — and they are the layer the
podcast extracts.

Things no current check can see.

**⬜ §6b — no literal-asterisk check exists, and this has now shipped twice.** Commit
`f5f385f` fixed one; round 37's gate found another. It renders verbatim on the web page, the
markdown download, the EPUB and the PDF — and `md_to_speech.py` strips it, so **the speech
pipeline hides the defect rather than catching it.** Round 38 added a third instance
(an unmatched `**` from a merge), caught by reading, not by a tool.

**✅ The diagram arrival invariant is stated once and enforced.** Round 42 —
[`round_42_arrival_invariant.md`](../reviews/round_42_arrival_invariant.md).

It is now stated normatively in exactly one place, above `playSvg` in `rink.mjs`, and enforced
by `site/scripts/check-arrivals.mjs`, wired into `npm run build` **before** `build:diagrams` —
it reads the specs rather than the built artefact, so it fails before anything is regenerated
on disk. **Six copies of the rule existed, not the four the first consolidation pass found**:
two verbatim in `forechecking_systems.mjs`, a differently-scoped third in `rink.mjs`, two more
in `faceoffs.mjs` and `defensive_zone_coverage.mjs`, and a reader-facing sixth in
`reading_ice_hockey_diagrams.md` — plus an operative **angle** in `defending_the_rush.mjs` that
the invariant disclaims outright. All now point at `rink.mjs`; the case histories stay where
they are. **0 hard violations; 7 advisories, tabulated in the record.**

**What the enforcement found that no prose statement had:** an opposition arrowhead
finishing **8.94 ft from the reader's own centre** in `centre-backcheck-middle-lane` — three
lines below that spec's own comment saying an arrow from the driver *"that finished on the
centre would read as a check rather than a lane"*. The guard was written against the route
the author chose not to draw and never applied to the one they did. Fixed to 10.0 ft of
clearance; referred to `diagram-reviewer` to confirm the section's claim survives it.

⚠️ **This entry's predecessor under-named its own measurement.** It recorded seven
arrow-ended routes within 9 ft, of which three are backchecks — leaving four — and then
named three. The fourth was never listed, and only the enforced check surfaced it. **Third
consecutive round in which a record's arithmetic required a file its prose did not name.**

⚠️ **And the checker's own first run was wrong in the way this project keeps being wrong.**
It had no notion of *whose* route it was — routes carry no team field — so it treated
`team: 'opp'` as "the opponent" for every route. **22 of the 80 arrow-ended routes are
skated by the opposition**, and for those it measured against the owner's own teammates. It
reported `forecheck-212-stacked` as a hard failure (an opposing carrier 8.25 ft from his own
partner) and missed the real defect entirely. **One edit away from redrawing a correct
diagram to satisfy a broken test.** Ownership is now inferred from the route's start point,
and that inference was measured before being relied on. → the plan's standing rule, again:
**a tool's limits must be stressed before its output is treated as evidence.**

⚠️ **`reading_ice_hockey_diagrams.md:65` was listed above as one of the three incompatible
statements and is not one.** *"A route that closes on an opponent ends in the two-bar mark,
not an arrowhead"*, with no numbers, is the correct reader-facing projection of form (b) —
and omitting the geometry is what the invariant requires, not a divergence from it. **Left
unchanged**; rewriting a correct sentence because a planning note called it divergent is the
tidying failure non-negotiable 3 exists to prevent.

**⬜ But one real reader-facing mismatch follows from it.** That sentence carries **no
goaltender carve-out**, while three shipped diagrams draw an arrowhead finishing 7.8–8.6 ft
from a goaltender (`forecheck-212`, `nz-1-2-2-containment`, `entry-wide`) — advisory in the
checker on the grounds that every net-drive route finishes near him by construction. **Either
those three diagrams are wrong or that sentence is incomplete**, and the goaltender is the
one target both books protect unconditionally (USA Hockey Rule 607 Charging (d), 2025-29;
IIHF 42.1 CHARGING, both located on disk in round 42). This is a `content/` change and needs
its own review round. `diagram-reviewer` was asked whether any of the three reads as a skater
going through him.

**⬜ `faceoff-dzone-tie-up` — the instructive advisory, still open.** Two terminal tangents
pass 2.32 and 2.68 ft from the opposing centre's anchor, inside the file's own 2.9 ft floor,
because that spec's comment measures its clearance **to the puck** and never to the centre.
An unenforced invariant produces exactly that: the author checked the constraint, against
the wrong object. Referred to `diagram-reviewer`; not changed without that verdict.

⚠️ **Two naming drifts survive outside this commit, plus one open count.**
`breakouts.mjs:230` describes `carry` as *"skating with control of the puck"* — the Hockey
Eastern Ontario name, where the legend row, the notation caption and
`reading_ice_hockey_diagrams.md` all now use §21.1's *"skate and stickhandle"*. Not false, since
both keys draw the mark identically, but it is the last place using the other key's vocabulary.
⚠️ **Corrected in round 42: this one is inside `describe`, so it is READER-FACING** — alt text,
EPUB, PDF and speech all carry `describe` — and the entry above sits under a heading calling these
"naming drifts", which reads as comment-level. **It was deliberately not swept with the comment
fix.** Changing it trades a plain-English gloss that a screen-reader listener understands for the
key's jargon, and that is a judgement about accessibility, not about vocabulary consistency.
Decide it deliberately; do not let a terminology sweep make the call by default.
**✅ The shared-symbol count is settled and no longer contested.** `rink.mjs` said five line
symbols are common to both keys and the document told the reader four. Both pages were rendered at
300 dpi and compared: the drop pass is the same construction in both — wave, drop marker, straight
line, arrowhead — differing only in the wave's length. **Five is right.** The document now says
five and names the drop pass. The reason it had said four is the seventh half-application: the
corpus's own `droppuck` draws the marker and line **without** the leading wave, so it follows
neither key, and that was missing from `rink.mjs`'s CORPUS ADAPTATIONS list. Listing the drop pass
among the agreed marks would have obliged the document to disclose that — so the miscount and the
missing adaptation were **one defect**, and correcting the count alone would have made things
worse. Both are now fixed, and the departure is disclosed to the reader.

**✅ The stale glyph description is fixed** (round 42). `neutral_zone_systems.mjs:815` called
the backward-skating symbol *"a tight wave"* — the Hockey Eastern Ontario glyph, not the row of
overlapping arches the corpus draws (`backward: { line: 'loops' }`). Checked against `rink.mjs`
rather than recalled: `rink.mjs:482` records that the two keys were once claimed to agree here
and do not. It now names §21.1's BACKWARD SKATING and says what it used to say and why that
misdirects. The identical error in `special_teams.mjs`'s `pk-nz-1-3` **describe** was
reader-facing and was caught at the gate; this one was a comment, so it misled the next editor
rather than a reader — and in this corpus a wave means `carry`, so it pointed at the mark that
says the opposite of the one drawn.

**✅ The work above is done** — see the closed entry at the top of this tier. It specified
three things (state it once; add a build step failing on (b) and warning on (a); fix the
routes) and all three are done. Its one wrong assumption is worth keeping: it said **five**
routes needed repair. One of the five was a false positive of the check's own first version,
and the route that actually failed was not on the list.

**⬜ Johnston & Walter: "the one-bar mark is the only divergence" is probably false, and only
the book can settle it.** `reading_ice_hockey_diagrams.md` says nothing else in the document comes
from that book. But the project's own working record of a 166-page read of it says backward skating
there is a **wave** — which is the HEO glyph, and which in *this* corpus means *skate and
stickhandle* — and that the book uses no player shapes at all, only bare role letters. If that
record is right, there are three divergences and the document claims one. **It cannot be checked
from disk**: the copy is a DRM'd fixed-layout Kindle edition with no text layer, and Tier 4b's page
capture is the route. Until then the safe wording is *"the only divergence among the four symbols
listed here"*. → `source-verifier`, with the page images.

**⬜ The claims in the notation document that carry no number and name no source have never been
checked.** The cold read that found ten majors there checked counts, exclusivity claims and
attributions, and said plainly that it did **not** check the document's own reasoning — sentences
like *"a picket that does not say which way you are going is no use in a play diagram"* and *"the
two marks have to be told apart by where the route finishes rather than by their shape"*. Those read
as too obvious to source, which the style guide names as exactly the shape of a claim nobody has
checked.

**Why they survive, and how to attack them.** Every defect caught in round 40 was a claim that
**names a source** — a count, an attribution, an exclusivity claim. Those have an external referent,
so they can be checked, and sixteen of them were wrong. The unsourced reasoning has no referent, so
nothing in the pipeline can reach it: *"a picket that does not say which way you are going is no use
in a play diagram"*, *"a numeral would say F1 is the centre"*, *"an arrowhead reads as continuing
past the point the line ends at"*. They survive not because they are hidden but because they read as
**reasons for decisions already made** — and a reviewer checking a decision against a source never
questions the reason attached to it.

**The brief, therefore, is an inversion:** for each such sentence, ask what the diagrams would look
like if the opposite were true, and whether anyone has ever tested it. Most will hold. The ones that
do not will be conventions the corpus has been enforcing corpus-wide on the strength of a sentence
with no source — which is the same shape as the one-bar glyph, and that one reached 13 diagrams.
**Start with the arrowhead reason:** it is load-bearing for nine retargeted routes, and it is the
justification behind the arrival invariant recorded above.

⚠️ This entry is also a worked example of the thing it describes. It was first written summarising
what the cold read said it had *not* checked, and the framing above — which is the useful half — was
added only after it had been asserted, in a message to the gate, that it was already here. **The
claim came before the work.** That is the same failure as the sixteen, in the project's own notes.

**⬜ A defenceman's triangle cannot hold a two-character id at the corpus's text size, and the
fix costs legibility.** A circle offers 4.59 ft of interior; a triangle offers **1.11 ft of
half-width at the cap-top** against the 1.685 ft `D1` needs, so the sloping edges cut the letters —
42 spec entries (`D1` 22, `D2` 17, `A1`/`A3`/`A4` 1 each), 44 rendered instances, because several
diagrams appear on two pages. Round 40 made the text fit by dropping two-character triangle ids to
`fs 2.15` at `dy 1.32`, derived rather than chosen. **The cost is not engineered away:** that renders
`D1` at ~6.8 px on a 375 px phone against a forward's ~10 px, and the corpus already treats ~7.5 px
as strained. The alternatives are the owner's: enlarge the triangle (which worsens the boards
clearance the same round just fixed), or move to single-character ids (which breaks the `D1`/`D2`
vocabulary the sections use). **Decide deliberately.**

⚠️ Related and unfixed: **130 two-character ids sit on circles**, and the widest — `RW`, `LW`, `W2`
— measure 4.94 ft against 4.59 ft of usable interior, so they touch their own stroke. Milder than
the triangle case (touching, not cut) and left alone rather than shrinking 130 more glyphs, but it
is the same constraint and it should be settled with the same decision.

**⬜ The glyph halo erases faceoff hash marks and pinches the centre dot, in pictures that teach
off both.** Round 40 gave every player glyph a ~0.6 ft white ring so that an open glyph crossing a
solid one is not erased by it — the corpus is monochrome, so there is no hue to fall back on. It
works, and the long rink lines survive it (worst case a faceoff circle 21% → 28% hidden, a blue line
30% → 36%). **The wall was repaired** by repainting the boards above the halos and below the glyph
bodies. Two losses were not repaired, because the remedy means re-emitting marks the rink layer
owns, and that is an owner call:

- **13 faceoff hash marks go from partly visible to fully hidden** — `faceoff-dzone-alignment`,
  `-clean-loss`, `-tie-up`, `faceoff-goalie-pulled`, `faceoff-ozone-alignment`,
  `breakout-centre-swing`, `breakout-five-roles`, `support-in-a-line`, and `breakout-rim` loses the
  top of a mark that was fully visible before. `faceoff-dzone-alignment`'s caption teaches off them:
  *"the boards-side winger stands at the outer pair of hash marks"*, and those are the marks now
  gone. The other pair on the same circle survives, so the picture still shows hash marks.
- **The red faceoff dot is pinched to a sliver in all five faceoff diagrams** — 2% → 55% hidden,
  squeezed between the two centres' halos, in a picture whose caption says *"The centre is in the
  dot"*. Three others (`dump-and-the-trapezoid`, `dump-soft-area`, `nz-regroup-d-to-d`) take a dot
  from ~64% to ~97%, effectively erasing it.

**The remedy is ordering, not geometry, and it costs nothing:** the boards, hash marks and faceoff
dots are painted before the glyph layer, so re-emitting the other two after the halos and under the
glyph bodies — exactly as the boards now are — recovers both at no cost to the separation. Reverting
the halo instead is the wrong trade: it would restore three coordinate pairs' worth of overlap and
leave the class open, since which glyph lands on top depends on spec ordering.

**⬜ Label halos cut the boards in four diagrams, and the obvious fix trades one defect for
another.** Player labels carry their own white halo (`paint-order="stroke" stroke-width="0.9"`) and
are emitted after the glyph layer, so they paint over the repainted wall: `pp-1-3-1` 1.26 ft,
`dz-support-structure` 1.34 ft, `breakout-up` 1.01 ft (five breaks over ~3.6 ft of corner arc),
`breakout-wheel` 0.84 ft. **Pre-existing, not caused by the halo work** — but it is the same
reader-visible defect the boards repaint was meant to close, and worst in dark theme where the page
outside the rink and the boards ink are near-identical colours.

⚠️ **Do not "fix" it by emitting `boardsOutline()` a third time after the labels** — that puts the
wall line through the label text, which `rink.mjs` already warns about at the placer (*"text running
over the dasher is unreadable"*). These four are placement failures: the placer is supposed to keep
labels out of the boards band and did not. Fix the placement, or drop the halo only where a label
overlaps the band.

**✅ "Walking an opponent out" is taught as universal and is not. — FIXED 28 Aug — reviewed and gate-cleared, round 51.** `body_contact_and_battles.md`
teaches a four-step net-front sequence whose third step is *"shoulder beneath their armpit, legs
driving, walking them out sideways"*, under that document's blanket scope claim that everything in
it *"applies in every league, including yours… The single exception is the section on delivering a
legal body check."* Boxing out and tying sticks are position-holding and legal everywhere. **Step 3
is different in kind:** it displaces a stationary opponent who does not have the puck, by overt
shoulder and torso action. USA Hockey's Declaration of Player Safety (`usah.txt:369-372`) permits
players *"SIMPLY MAINTAINING legally established body position"* in front of the goal, and Rule 604
Note 1 (`usah.txt:3541-3545`) makes *"overt hip, shoulder, forearm or torso action"* an illegal
body check in Competitive Contact categories; IIHF 101.1 (`iihf_rules_v1.1.txt:7506`) gives a
stationary player their ice. **Scope: most North American amateurs, all British women's and girls'
hockey, Hockey Canada U13-and-below and female hockey.** Propagated to
`defensive_zone_coverage.md:448` and `:458`. ⚠️ **Limit on the finding:** the USA Hockey Casebook is
not on disk (Tier 4), and a Casebook situation on the net-front walk-out could qualify or overturn
it. The fix is to split step 3 from the other three with a scope flag and to qualify §1's
"every league" sentence the way §5 already is. **Done at four sites, not the three this row lists:** `body_contact_and_battles.md` (§1's blanket claim now reads *"Two things are not"*, plus §9 step 3, its facts block, Common Mistakes and KT4), `defensive_zone_coverage.md` (facts + body + **three rulebooks added to Sources**, which had cited no IIHF rulebook at all), and **`on_ice_communication.md:212`, a fourth site no row had listed** — found by the agent fixing the third and correctly left for a separate pass rather than swept. ⚠️ **Two manufactured generalisations were caught inside the repairs themselves, not by review:** Common Mistakes had asserted *"**Every** non-check rulebook explicitly permits leaning, sealing, boxing out and angling"* — **false for Hockey Canada**, which blesses only same-direction incidental contact; and an agent drafted *"three of the four books"* protect a held position before finding **HC 8.1** one grep later and shipping *"all four"* with each book quoted. **Both were one grep from being wrong in the corpus.** **A third quantifier in the same sentence was flagged as unverified and has now been attacked and UPHELD:** *"at or near the hands it is hooking in three books of four"* is **correct** — **IIHF 55.1** states the hands limb inside its hooking definition (*"if the stick goes against the opponent's hands / or near the opponent's hands, it shall be penalized as 'hooking'"*), **USA Hockey 623**'s Note and **Hockey Canada**'s Interpretation 1 to 8.2(a) both write it, and the **NHL's 55.1 does not**. ⚠️ **But the count invited a false inference and that gap is now closed:** an NHL reader could take "three of four" as a licence. It is not — **NHL 61.1** makes a *"forceful or powerful chop… on or near the opponent's hands"* **slashing**. Found only because the unwrapped search for that phrase hit the NHL book **once**, in Rule 61 rather than Rule 55. Neither book writes a stick-to-stick carve-out outside the NHL and IIHF — verified unwrapped, since the hyphen wraps.

**⬜ The `owns` → `covers` sweep is about 85% done, and both vocabularies are now live.** It
replaced the active forms and left `owned by`: 14 survivors across eight files —
`how_to_watch_hockey.md:598`, `mental_game.md:696`, `center.md:388` ×2 and `:596`,
`defender.md:197` and `:547`, `defensive_zone_coverage.md:597`, `faceoffs.md:722`,
`zone_entries.md:694`, `skating.md:721, 729, 731, 906`. The sharpest is `center.md:596` — a Key
Takeaway, the layer the podcast extracts, saying *"owned by"* three lines from the same document's
*"covers"*. Two consequences worth fixing together: `skating.md:729` explains the corpus's own
cross-linking policy to the reader (*"belong to skating but are owned by other documents, so they
are cross-linked rather than repeated here"*), which is the style-guide's internal-machinery
prohibition verbatim; and `defender.md` has **four** references to *"the owning document"* (`:160`,
`:202`, `:572`, `:607`) which, now that `owns` has been swept out of that file, is a term of art
with no referent on the page — two of them do not name the document in the same sentence at all.
⚠️ **Do not sweep the ordinary-English uses**: *"the weak-side defenceman owns the goalmouth"*,
*"the goalie owns the shooter"* are hockey, not the project idiom.

**⬜ A sweep that rewrites 78 ownership pointers is the moment to re-check what they point at.**
`content-reviewer` verified 7 of the 78 targets both ways and said so. `review_history.md` §3.7 is
why this matters: thirteen documents once pointed at `special_teams.md` for a rule it had never
mentioned. The other 71 are unchecked.

**⬜ Four verified rule-set divergences the corpus states as universal.** `rules-verifier` read all
four books for these in round 41; **the numbers below are verified against primary text**, so this
item needs writing, not researching. Each is in a ` ```facts ` line — the layer read aloud without
context — and each is right for the NHL and wrong or incomplete for somebody.

- **Faceoff encroachment ejects the centre — under the NHL and USA Hockey, not the IIHF.**
  `center.md`'s block says *"their encroachment ejects you, not them"* with no book. NHL 76.6
  (`nhl_rules.txt:8133-8136`) and USA Hockey 613(d) (`usah.txt:3953-3959`) both eject the centre;
  **IIHF 76.6** (`iihf_rules_v1.0.txt:6277-6278`) gives only *"a warning for a face-off violation"*,
  with the bench minor arriving at 76.7 on the second. It is a **three-way** split, not a binary,
  and `center.md`'s own banner tells British readers the IIHF flags are theirs. The body has it
  right; the block does not.
- **The shorthanded-icing carve-outs are not universal.** `defensive_zone_coverage.md:577` says
  *"two carve-outs apply under USA Hockey and the NHL"* and leaves a British reader to assume they
  are among them. **IIHF 81.6 has no major-penalty carve-out at all** — the NHL's third paragraph
  is simply absent (`iihf_rules_v1.0.txt:6709-6721`, confirmed unchanged in v1.1) — and **Hockey
  Canada 6.7(b)** (`hc.txt:5055-5057`) grants the exemption with no classification limit and no
  carve-out whatsoever. `faceoffs.md:923` already discloses the IIHF gap correctly and is the model.
- **"Cannot take a timeout" after icing is NHL and IIHF only, and Hockey Canada contradicts it
  outright.** NHL 87.1 (`nhl_rules.txt:9397-9400`) and IIHF 87.1 confirmed. **USA Hockey imposes
  neither restriction** — established by reading Rules 204, 624 and 636(f) in full rather than by a
  failed search. **Hockey Canada 6.7(d)(iii)** (`hc.txt:5117-5119`) *expressly permits* the time-out
  after an icing and bars only the substitution during it, and its no-change regime applies only to
  *"U18AAA, Junior, and at the option of the Member in Senior"* (`hc.txt:5089-5091`). Consequence is
  a forgone rest, not an injury — low priority, high certainty.
- **A quotation was silently repaired inside quotation marks.** `faceoffs.md:276` and `:294` quote
  NHL 76.7 as *"When at least two face-off violations…"*. The book reads **"When a least two"**
  (`nhl_rules.txt:8151`) — a typo in the NHL's own text. Substance is unaffected; the corpus's rule
  is that a quotation is verbatim or marked.

⚠️ **None of this is a deletion case.** Every divergence runs toward the corpus over-warning, so a
reader who obeys the text is safe and merely surprised. Non-negotiable 3's test is not met.

⚠️ **The USA Hockey Casebook is still not on disk**, so no official interpretation was checkable for
any of the four. That bears hardest on the USA Hockey time-out negative, which rests on rule text
alone.

**⬜ MA26 — a mis-splice that reads smoothly would still pass everything.** Round 37's CR15
was caught only because the join lost a space. A block landing in the wrong paragraph that
happens to read grammatically survives every pass now run.

**⬜ MA19 / §6d — the glossary does not read as a list.** `site-reviewer` saw it in Chrome:
the entry head and the bold *inside* an entry are **computationally identical** — same
weight, size, colour, family, display. Needs a CSS or plugin change.

**⬜ A review record credits a review that did not happen.** `round_35_readability.md:109` credits `rush-gap-and-angle`'s review to §14 of the round-34 record, where it appears nowhere. The diagram has since been properly reviewed, so the picture is fine — **the false credit is not.** A record claiming a review that did not happen is worse than one admitting a gap.

**⬜ MA20 / §8c — two diagrams have no accessible name.** (The round-37 record says *"two of 113"*; `diagrams.json` and the built SVGs both count **112**, so the denominator is stale — the finding itself stands.) Belongs to the diagram

**⬜ Site minors m5–m8.** No ToC scrollspy (**absent, not broken** — round 38's site pass confirmed
it again); one unnamed `<nav>` landmark; Pagefind uses the browser-default `<mark>`, bright yellow in
both themes, readable but not palette-aware; and **236 empty `<p></p>` in the built HTML**, measured
as having no visible spacing effect.

**⬜ Minor 9 — both quoted-placement lists in the review records are wrong.** Enumerating
`![](diagram:…)` against each manifest `owner` gives **six** quoted placements. A record that
miscounts is the thing `review_history.md` is reconstructed from.

**⬜ Diagrams for the three undiagrammed glossary sections** (§1, §4, §7), and the orphaned diagrams
page still needs linking.
workstream.

**⬜ MA25 — `rules_primer.md` §§7–9 have never been read by any reviewer.** ~170 lines
covering the crease, goaltender interference, screening, the trapezoid penalty, freezing the
puck and the faceoff spots. Comparison-table rows 722, 723, 725, 726, 733 and every USA Hockey
cell are likewise unverified. **In the sections that were read, findings ran at about one per
fifty lines.**

**⬜ The ducking proposition across the corpus.** Round 38's first critical was the scope error
commit `5b82c18` exists to remove, reintroduced. `body_contact_and_battles.md`, `skating.md`,
`winger.md`, `defender.md`, `zone_entries.md` and `puck_handling.md` all carry ducking or
head-contact material and **none was opened**. It is a proposition, not a string, so a grep
for the wording will not find it.

---

## Tier 4 — Evidence base

**⬜ A handling-the-puck row for `rules_primer.md` §10, written as a spec so the next round does
not compose it from memory.** The table has no row for it, and round 43 deliberately did **not**
add one: it would be a new multi-book claim in the corpus's densest summary table, in a commit
already four review rounds deep, with no reviewer on it — and §10's cells are exactly the shape
that generated this round's divergences. The divergence is already served in the body at `:399`
and in Common Mistakes at `:786`, so the table's silence is an omission rather than an error.

**The spec, verified against `sources/` in round 43 — compose the row from this, not from a
recollection of it:**

- **NHL and IIHF 67.2** — closing the hand on the puck is a **minor**. Not a faceoff violation in
  any book.
- **NHL and IIHF 63.2(v)** — deliberately falling on or gathering the puck into the body is a
  minor, with the NOTE's shot-blocker carve-out (*"if the puck is shot under him or becomes lodged
  in his clothing or equipment"*) and its sting (*"any use of the hands to make the puck unplayable
  should be penalized promptly"*).
- **USA Hockey 618(a)** — a closed hand not immediately dropped is a **stoppage and last-play
  faceoff**, not a penalty; the minor attaches to *picking the puck up off the ice*; **in the
  crease** it is a penalty shot or optional minor, and an **awarded goal** on an empty net.
- **USA Hockey 614(a)** — the body smother is still a minor there.
- **Hockey Canada 10.2(a)(iii)** — the closed hand is a minor only where the player *"by doing so,
  gains an advantage"*, expressly excluding an immediate drop.
- **The crease determinant, NHL and IIHF 63.6** — the **puck's** location decides, not the
  player's. **USA Hockey 614(b)** fixes the same moment (*"at the moment the infraction occurs"*)
  and offers the non-offending team an **optional minor** in lieu under **406(a)**. ⚠️ **RETRACTED
  in round 52 — Hockey Canada does NOT locate it by the infraction.** All four books locate it by the
  puck; HC 4.11(a)(v) says *"while the puck is in the goal crease"*, and Interpretation 5 to 10.2 rules
  a body smother under (a)(iv) because *"The puck was not actually covered in the crease"*.

⚠️ **Do not credit the USA Hockey election to a "One Pass rule"** — that is a **Blind Hockey** rule
(`usah.txt:6559`) and the glossary gating on it sits in the Disabled Hockey chapter. Round 43
recorded it wrongly once and caught it at the gate.

**⬜ The facts-block count cap is deciding what readers are told, in 19 blocks.** Measured in
round 43 across all 26 documents, 773 blocks, 4,605 facts: **19 blocks sit at the hard maximum of
11 with zero headroom**, 17 more at 10, and **58 at the coaching cap of 8** — which can still take
a `Rule:` but not another `Action:`, `Read:` or `Never:`. **Length is not the binding constraint
anywhere**; the longest fact in the corpus is 298/300. It is the count.

Twice in round 43 the cap chose the content: a rule exception could only be added by merging two
`Read:` facts, and then only by deleting a `Never:`. **A cap must never evict a rulebook fact**,
and the pressure runs that way.

**The remedy is in the style guide already** — *"more than 8 and the section is probably two
sections"*. `center.md` §Faceoffs is the worked example and the place to start: it carries three
unrelated rules topics — handling the puck at a draw, encroachment and ejection, stick-placement
order — on top of five coaching facts, and **its body is already in those halves** (the
"Key principles by location" bullets, then the "So:" rules bullets). Split it into
`### Faceoffs — winning the draw` and `### Faceoffs — the rules that decide who takes it`.
⚠️ Until that is done, `center.md`'s two zone `Read:` facts are merged into one and the second
half has lost its verb. That is a real loss and it is recorded as one.

The at-max blocks, so the next round does not rediscover them: `center.md:316`, `:377`, `:437` ·
`defender.md:9`, `:65`, `:105` · `on_ice_communication.md:109` · `puck_support_and_spacing.md:376` ·
`goaltender.md:511`, `:919` · `breakouts.md:418` · `defending_the_rush.md:533` ·
`forechecking_systems.md:465` · `offensive_zone_play.md:689` · `special_teams.md:617` ·
`body_contact_and_battles.md:389`, `:421`, `:1012`, `:1060`.

**⬜ No USA Hockey Casebook is on disk, and every USA Hockey verdict in this corpus rests on rule
text alone.** `ls sources/ | grep -i case` is empty. USA Hockey's Casebook is the normal authority
for its interpretations, and `rules_primer.md:397` already discloses the gap for one claim —
*"its separate Casebook is not among the texts checked here"* — while the gap in fact applies to
every USA Hockey claim in the corpus. Round 43's `rules-verifier` named fetching it **the single
highest-value action for the next round**, and it was reached in that round for the crease and
faceoff questions specifically, where rule text alone left four verdicts unsupported by any
interpretation.

⚠️ **Hockey Canada files interpretations by rule number, so grepping the offence name misses
them.** Round 43 found HC Interpretation 5 to Rule 10.2(a)(v) — which rules on the exact
puck-in-the-crease fact pattern the round propagated — and the stick-lift head-contact clauses at
`hc.txt:7364` and `:7391`, both only by accident, from greps run for something else. **The
reliable method is reading Hockey Canada Sections 7, 8 and 9 end to end**, and nobody has.

**⬜ The stick lift is the corpus's most-recommended technique and its penalty exposure lives in
one document.** `body_contact_and_battles.md` carries *"far less penalty risk … but not none"* in
five layers; `defender.md` and `on_ice_communication.md` carry the below-the-bottom-hand
condition. Round 43 shipped, and then caught, a flat *"it is not a penalty"* in
`defensive_zone_coverage.md`. **Hockey Canada's own naming of the technique as a head-contact
route — the double minor for accidental head contact causing injury, and the major plus game
misconduct for a *"pitchfork action in lifting the stick"* — now appears in exactly one
document**, `defensive_zone_coverage.md:616`, added by the same commit that recorded this item.
It belongs in the technique's **owner**, `body_contact_and_battles.md`, and the placement
condition belongs at every site that recommends the lift.
⚠️ **This entry first said it appeared "nowhere in `content/`" and printed a grep to prove it.**
The grep returned the line the same commit had just added. A stated verification that returns
the opposite of its claim is non-negotiable 5 — caught at the gate, not by running the grep.

**⬜ No KHL rulebook is on disk, and at least 30 reader-facing sites assert a KHL rule without
one — 28 in `content/` and 2 in diagram captions.** `content/` mentions the **KHL on 31 lines
across 17 documents**. **Three lines carry the honest
disclosure, all in `defender.md`** — `:113`, `:131` (*"unverified here: no KHL rulebook was
available to check it against"*) and `:691` (*"on a claim we could not verify against a KHL
rulebook"*) — and the **other 28 state the KHL trapezoid flat, as verified fact**, in `on_ice_communication.md` ·
`rink_map_and_glossary.md` · `rules_primer.md` · `playing_without_the_puck.md` ·
`puck_support_and_spacing.md` · `time_and_space.md` · `how_to_watch_hockey.md` ·
`goaltender.md` · `breakouts.md` · `defensive_zone_coverage.md` · `faceoffs.md` ·
`forechecking_systems.md` · `neutral_zone_systems.md` · `offensive_zone_play.md` ·
`special_teams.md` · `zone_entries.md`.

⚠️ **AND `content/` IS NOT THE BOUNDARY.** Two more flat assertions live in diagram sources and
reach readers as caption text — alt text, EPUB, PDF and speech all carry it, which is this plan's
own round-42 finding three tiers above: `site/src/diagrams/rink_map_and_glossary.mjs:321`
(*"the NHL, the KHL and IIHF play have it"*) and `site/src/diagrams/zone_entries.mjs:657`
(*"it is the NHL, the KHL and the IIHF book"*), plus both as built captions in
`site/src/data/diagrams.json`. **A round that fixes 28 sites and stops at `content/` ships two
captions still asserting it.** The determinant was checked for the same gap and has none.

⚠️ **Round 43's reviewer reported this as "dropped in two documents."** It is sixteen. And the
first correction of it said two disclosure sites and 29 flat ones; the gate re-derived **three
and 28**. The count is recorded here so the next round starts from the real number — under-naming
a scope to the files someone happened to notice, and then miscounting the correction, are now
the fourth and fifth instances across three rounds.

**The repair is a source, not a sweep.** Propagating a hedge to 28 sites is the wrong fix;
fetching a KHL rulebook resolves all 28 at once, and *a 403 is not an absence*. Do **not**
sweep 28 reader-facing sites unreviewed across sixteen documents — that is exactly the
corpus-wide sweep that produced commit `239f70d`. Non-negotiable 4 protects `defender.md`'s
disclosure meanwhile; **nothing may be stripped to make the corpus look consistent.**

Cannot be closed by working harder on what is here.

- **⬜ `usah_case.txt` — the USA Hockey Casebook is not on disk and never has been.** The
  corpus discloses this honestly at `body_contact_and_battles.md:1112`. **That disclosure is
  correct and must not be stripped.** A casebook situation could qualify the USA Hockey half
  of several head-contact and ducking claims.
- **⬜ No NHL PDF in `sources/`.** Round 38 declined a reviewer's offer to resolve the Table 5
  asterisked-cell disclosure for exactly this reason — it could not be re-derived, so it
  stays a disclosure.
- **⬜ The EIHL Casebook** is not on disk and both foundation documents say so.
- **⬜ The NHL text extraction shreds table columns**, so anything resting on row/column
  position is inferred rather than seen.
- **⬜ ~290 citations corpus-wide remain unswept** by `source-verifier`.

---

## Tier 4b — The Johnston & Walter source

Working records:
`johnston_walter_findings.local.md` — **deliberately kept local** — fourteen chapters
already mapped against the corpus — and
[`johnston_walter_validation.md`](../reviews/johnston_walter_validation.md).

⚠️ **The findings file is deliberately untracked, and this is a decision to revisit, not an
oversight.** It carries **33 quoted passages of 40+ characters attributed to the book** with **zero
page citations**, and this repository is public with permanent history. Its own validation plan says
*"Record the agreement; do not import the phrasing."* Short quotation for criticism is defensible;
publishing it uncited and irreversibly is a different act. **To track it, do one of:** add page
locators to the 33 quotations, or paraphrase them and keep the findings. Either preserves everything
of value — which chapters agree with the corpus and where they diverge.

**⬜ Capture the pages the mapping points at, and run the validation checklist against them.**
The route is the Kindle app on Mac plus `screencapture`; page turns are automated.

**⬜ Carry the cross-cutting finding into anything the corpus takes from it** — the book's numbers
are **heuristics, not data**, and any claim sourced to it must say so.

---

## Tier 5 — Terminology and language

**⬜ The team-tactics terminology tranche.** Detail and the source audit:
[`terminology_source_audit.md`](../reviews/terminology_source_audit.md) (tracked — it holds the evidence).
The work, in its own order:

1. **Fetch the outstanding sources** for the four unsourced terms — recording URL, sha256, byte
   count and retrieval date for every PDF, as the corpus does everywhere else.
2. **Write the glossary entries** into `rink_map_and_glossary.md` §8, alphabetically, in the house
   one-or-two-sentence form, with bold cross-references and *"Not the same as"* wherever two terms
   are confusable — **which here is often**: *stretching the defence* vs *stretch pass* vs *wideman
   pass*; *sagging* the tactic vs *sagging zone* the system; *backside* the side of the ice vs
   *backside coverage* the tactic; *pass and follow* vs *give-and-go*.
3. **Then propagate** — the glossary is the worst place for a wrong definition, because every
   document that links to it inherits it.

⚠️ **That plan is stale in one place:** its §3 lists seven terms as having no glossary entry, but
**Outlet, Stretch pass and Walk the line** have since been added, as have **One-touch, Shoulder
check, Net drive and Attack triangle**. Re-derive the list before working from it.

⚠️ **Its own stated gate:** this needs `content-reviewer`, `facts-reviewer`, `source-verifier` and
`commit-gate`, with a record — not because the change is large but because a glossary propagates.
- **⬜ Nine Note-on-Language sections** need the pointer-and-trim. Nine, not eight —
  `neutral_zone_systems.md` uses lowercase *"A note on language"* and a case-sensitive grep
  misses it.
- **⬜ The "quiet ice" conflict**, to resolve rather than paper over.
- **⬜ Glossary diagrams** for §1, §4 and §7; and the orphaned diagrams page needs linking.
- **⬜ 26 passive `owned by`** survive the round-37 sweep, plus the bare-verb form at
  `getting_started.md:619` that `\bowns\b` cannot see.

---

## Tier 6 — Site visibility and reach

Detail, baselines and the verification behind every figure:
[`seo_baseline_and_analysis.md`](../reviews/seo_baseline_and_analysis.md).
**Technical SEO is done and verified** — canonicals, Open Graph tags, JSON-LD `Article`/`WebSite`
+ `BreadcrumbList`, sitemap, compression. Nothing there needs fixing. What follows is reach, not
plumbing. **Re-attacked against a fresh `dist/` on 28 Aug and it holds.** `sitemap.xml` is
well-formed and lists **40 URLs**; the only built page absent is **`/offline/`**, the PWA fallback,
which correctly should not be in a sitemap. `robots.txt` points at it and the target exists.
⚠️ **Note for whoever checks next: this site emits a single custom `sitemap.xml`, not the
`@astrojs/sitemap` pair (`sitemap-index.xml` + `sitemap-0.xml`).** Looking for those filenames
returns 404 and makes the sitemap look missing when it is not — I made exactly that mistake before
checking. **P4 is not contradicted by this:** Open Graph tags are present, `og:image` is what is
absent (**0 of 42 pages**, and all 42 carry `twitter:card=summary`).

⚠️ **Sequencing constraint, and it binds.** No `content/` or `site/` change while another agent
is working. Commit `239f70d` exists because a corpus-wide sweep raced a document-level edit and
clobbered it silently. Check `git status` and `git log -1` before starting any of these.

| | Item | Why it is worth doing |
|---|---|---|
| ⬜ **P1** | Push five striking-distance pages over the click threshold | ~1,200 impressions sitting at **positions 13–17**, just below where this site's own pages start converting at 1–3%. `neutral_zone_systems`, `equipment`, `conditioning_and_recovery` and two others. |
| ⬜ **P2** | Build out the concept and terminology surface | **The strategic finding: concepts win, rules lose.** Definition-shaped queries already show and none converts — *"what is the half wall in hockey"* at 19.6, *"forechecking"* at 27.3. This is where the corpus demonstrably beats NHL.com. |
| ✅ **P3** | Section hub pages | **BUILT AND MEASURED IN CHROME.** All eight hubs render (`getting-started`, `reading-diagrams`, `foundation`, `positions`, `systems`, `technique`, `hockey-iq`, `off-the-ice`) at 375×812 and 1440×900 in both themes, each with tagline, blurb, card grid, `CiteThis` and section prev/next. **Card counts sum to 37**, every card has a description, `bodyOverflow = 0` in every cell. All **37** document eyebrows now point at `/layerId/` and land on the new hub, with **zero** surviving `href="/#layer"` in `dist` — and the home page still carries `id="foundation"` etc., so an externally bookmarked `/#systems` is not broken. ⚠️ **Not yet in production — same cause as P4/P6: staged, never committed.** ⚠️ **Open decision:** the hubs carry no `data-pagefind-body`, so Pagefind indexes 37 pages and a reader searching a section name never finds the section page. Defensible (hub text is duplicated from the cards) but now an explicit choice rather than an oversight. |
| ✅ **P4** | Open Graph images | **BUILT AND MEASURED.** Of 50 built pages, **48 carry `og:image`**; all 48 files exist; all 48 PNGs measure **1200×630** verified with `sips`, not just the declared meta; all have non-empty `og:image:alt` and pair with `twitter:card = summary_large_image`. The two without (`/404.html`, `/offline/`) fall back to `summary` deliberately (`BaseHead.astro:151-154`). ⚠️ **NOT YET IN PRODUCTION, and the reason is not a bug** — `curl` against `learn-ice-hockey.com` returns **no `og:image`**, `twitter:card=summary`, and `/og/index.png` **404**. `site/scripts/build-og.mjs`, `site/src/data/og.json` and `site/src/pages/rss.xml.ts` are **`A` — staged, never committed**; local `main` equals `origin/main`. **The feature has never been deployed.** |
| ✅ **P5** | Attribution block | **BUILT AND MEASURED IN CHROME.** `CiteThis` renders on exactly **45 pages** (37 documents + 8 hubs). Copy verified with a **real CDP mouse click**: clipboard content matched the snippet **byte-for-byte** and the button showed "Copied". ⚠️ **It stays out of the search index, confirmed two independent ways** — decompressing all 37 Pagefind fragments (4.6 MB) for `howpublished` / `Cite this page` / `CC BY-NC` / `BibTeX` returns **zero**, and a live query on `/search/` for `howpublished` returns *"No results"*. **Not yet in production — same cause as P4/P6.** |
| ✅ **P6** | RSS/Atom feed | **BUILT AND MEASURED.** 200 locally, `xmllint --noout` clean, **37 `<item>`s**, absolute `guid isPermaLink="true"`, `atom:link rel="self"`, all 37 item links 200, and `<link rel="alternate" type="application/rss+xml">` in the head of **50 of 50** pages. ⚠️ **Production `/rss.xml` still returns 404** — same cause as P4: staged, never committed, never deployed. ⚠️ **Local preview serves it as `text/xml`**, not the `application/rss+xml` the route sets, because the static preview server serves by extension; production content-type comes from the S3/CloudFront sync and **was not checked**. Aggregators accept `text/xml`; recorded so nobody assumes it was verified. |

⚠️ **A production risk that survives the commit, and a green deploy will not reveal it.**
`build-og.mjs:271-282` writes an **empty manifest and exits 0** when no Chrome is found — deliberate,
and the safe direction (*"shares fall back to a text preview"* rather than pointing at a 404), with
the reasoning in a code comment. **But `findChrome()` probes only `CHROME_PATH`, the macOS bundle,
`/usr/bin/google-chrome-stable`, `/usr/bin/google-chrome` and `/usr/bin/chromium`** — and
`.github/workflows/deploy.yml:138-140` runs a bare `npm run build` on `ubuntu-latest` **with no
Chrome setup step and no `CHROME_PATH`.** ⚠️ **Whether that runner image carries Chrome is not
verifiable from this machine and must not be asserted from memory.** So the live failure mode is:
**deploy goes green, and all 48 cards are silently absent.**

**Not fixed here, deliberately.** Changing `deploy.yml` is deployment configuration and falls under
*"ask before anything outward-facing"*. **Options for the owner, cheapest first:** (a) after the
build, assert `og.json` is non-empty and fail if not — turns a silent absence into a red build;
(b) add an explicit Chrome setup step; (c) accept text-only previews and delete the card pipeline.
**(a) is the one that makes the question answerable rather than guessed at.**
| ⬜ **P7** | The blog, and third-party links | `jamesdbloom_blog` is **private**, last pushed 2014; the repo's `index.html` is byte-identical to what is live, so the repo is genuinely the source of truth. |
| ⬜ **P8** | Outreach | UK clubs and learn-to-play programmes. **Owner sends**; preparation only here. No accounts to be created. |

**Explicitly deprioritised, with reasons** — the rules query cluster (position 40–80 against
NHL.com and Wikipedia is not a closable gap), and FAQ/HowTo structured data (dead as of May 2026).

**Honest expectation, recorded so it is not misremembered:** from a base of **8 clicks**, moving
~1,200 impressions from position 15 to 8–10 plausibly yields a few dozen clicks a month. An order
of magnitude on a very small number, compounding over months — not a switch. **Confounder:** the
northern-hemisphere season starts in September, so hockey queries rise regardless of anything
done here.

**Geography:** North America is **11×** the UK in impressions, and the en-GB/en-US spelling split
is measurably costing rank.

---

## A file that no longer exists

`docs/plan/state_of_play.local.md` was deleted on 23 August 2026. It was **never tracked**, so it
is not recoverable from git, and **three** records cite it — `round_31_the_primers_second_rules_pass.md:189`
and `:468` as *"finding N of the twelve outstanding items in…"*, and
`seo_baseline_and_analysis.md:665`, *"Bing Webmaster Tools was verified per `state_of_play` but not
opened here"*, which is staged in this same commit. Those citations are now permanently
unresolvable, so what it held is
recorded here:

- **The owner's diagram-notation spec** and the two decisions settled on 19 August — both folded
  into **Tier 0b**.
- **A live notation defect**: `pressure` is `{ line: 'plain', end: 'bar1' }` — one bar, which §21.1
  does not define at all — while the corpus means *"checking pressure"* by it. **13 uses.** Tier 0b.
  ⚠️ *(The retired note said one bar was §21.1's SUDDEN STOP. It is not; two bars is. That error was
  carried into this plan and corrected in Tier 0b — this summary of the note's contents is written
  as the note should have said it, not as it did.)*
- **Both owner-set priorities**, including ten live divergences. Tier 0b.
- **Environment facts** — the Chrome refusals, the DevTools route, the concurrent-build hazard —
  folded into the method notes below.

⚠️ **It was very nearly deleted on a wrong description.** It had been characterised as "the round
31–33 narrative"; reading it before deleting found the live defect above. **Read a file before
deleting it, especially one git cannot give back.**

---

## Method notes that cost real time — read before starting

### A wording difference is not a rule difference until someone builds the play

Round 45 found the corpus asserting, in five places across two documents, that the four books
diverge on delayed-offside simultaneity — three saying *"at the same instant"* and Hockey Canada
not. **The textual observation was right and the inference was wrong**, and the round's first act
was to propagate it into three more sites, including a Key Takeaway.

Hockey Canada states the same requirement as a **result** — 6.11(b)(ii), *"so that the attacking
zone is completely clear of attacking players"* — where the others state it as an **instant**, and
its Interpretation 11 resolves the result to *"the instant the zone is completely free"*. **Hockey Canada's own Interpretation 11 disposes of the
simultaneity reading on its own facts**: A5 and A8 tag up into the neutral zone while A10 leaves
the ice into the players' bench — three players, two routes — **ONSIDE**, with **no timing condition attached to the ruling at all**.
The absence is the argument: the book did not need to say the exits coincided, and did not. And
IIHF Situation 83.34 states the same test in the book that *does* use the phrase. No play is legal under one book and illegal under another.

**The test to apply before recording a divergence: construct the play that separates the books.**
If you cannot — if every fact pattern comes out the same — you have found two draftings of one
rule, and writing it up as a divergence hands readers a permission that does not exist. Here it
handed them one that Hockey Canada's Interpretation 10(i) rules out by consequence — the zone must
be *"completely clear of all attacking players before the off-side is nullified"* — with an intentional-offside
faceoff in their own end as the price.

⚠️ This is the mirror of the note below. Round 44's worst defect was a sweep that **manufactured** a
divergence by over-applying a correction; round 45's was a sweep that **propagated** one that never
existed. Both passed every check the project has, because both were textually accurate.

### A caveat in one layer of one document is not propagated — it is anchored

Round 44 fixed the airborne-skate scope in `time_and_space.md` and thought it done. It was in
**eighteen sites across ten documents**, and the repair had reached the body and the `Action:` line
of one facts block while **skipping the `Rule:` line between them**. Round 43 had the same shape at
a section boundary and then a document boundary; round 44 found it at a *line* boundary inside a
single block.

**The corpus already knew the right wording.** `center.md:249` said *"two books of the four"*
before the round started, while `center.md:260` — the same document, one layer down — said
otherwise. So the fix was never a question of research; it was a question of sweep.

**Method that worked, and is cheap:** after fixing a claim, grep the corpus for the *rule number*
rather than the phrasing (`630(a)` here), subtract the sites that already carry the correction, and
read what is left. It found eleven more in one pass. Grepping the phrasing finds only the sites
that phrase it the way you do — which is the paraphrase trap `content-reviewer` caught itself in
this same round.

⚠️ **And check your own edit for the half-fix.** At `rink_map_and_glossary.md:155` round 44 changed
"three rule sets"→"four" in one clause and left the next clause naming one book, so the sentence
counted four and listed three — one line below a site the same edit got right.

### The corpus is 37 documents, and five live files said 36

Round 43 measured the summary layer and found the boundary wrong in the file every agent reads
first. **`content/` holds 37 documents in eight sections**; `CLAUDE.md` said *"36 documents in
seven sections"* in two places, `docs/README.md` and `site_build_specification.md` said 36, and
**this plan's own entry commissioning the next corpus-wide sweep said "all 36 documents"** — so
that sweep would have started from the wrong boundary, one commit after the note above was written
about exactly that.

The 37th, `reading-diagrams/reading_ice_hockey_diagrams.md`, arrived on **31 July 2026** in commit
`f2504ce`. The scope statements were never re-derived after it.

⚠️ **Worse, Tier 0's anchor figure was superseded by the file it cites.**
`corpus_structure_measurements.md` says *"The corpus is 37 documents and 619,227 words"* — and
then, twelve lines below, prints a table reading *"36 documents / 532,518 words / 40.3 hours"*.
Tier 0 quoted the table. Re-measured: **632,107 words, 47.9 hours at 220 wpm** (26 August, on the tree that shipped it). ⚠️ **This first read 630,873 / 47.8 h**, which was HEAD — the corpus before the repairs shipping alongside it. A dated figure in a method note is exactly what a later sweep quotes.
Tier 0's whole argument is that forty hours is six books and a beginner bounces off it — **the real
figure is nearly forty-eight**, so the stale number was understating the case for the work it
introduces.

**Historical review records keep their own counts and are correct as written** — round 21 through
round 33 describe a corpus that genuinely was 36 documents. Only live statements were changed.

### The checker set is chosen from memory, and `check_absolutes.py` is the one that gets forgotten

`scripts/` holds **six** local checkers: `check_absolutes.py`, `check_facts.py`,
`check_geometry.py`, `check_links.py`, `check_secrets.py`, plus
`site/scripts/check-arrivals.mjs`. (`check_external_links.py` is a seventh and is a network pass.)

Round 43 ran five of the six through six commit-gate passes and four reviewers, and
**`check_absolutes.py` was never run** — it was caught only when `.claude/hooks/git-guard.sh`
refused the commit. It found a real defect that everything else had cleared: a penalty tier capped
without naming the book that caps it, introduced by a repair.

**Run all six by name, from this list, not from recall.** CLAUDE.md's "Writing content" step names
three; the hook enforces two on `content/` commits; the gate asks for what the author reports. None
of those is the full set, and the gap between them is where this one lived.

### Record the boundary in the same sentence as the number

Round 43 ran two corpus-wide censuses twice, by deliberately different constructions, to find out
whether measuring twice is worth it. The answer is sharper than "yes":

| Figure | Second method | Result |
|---|---|---|
| Facts-block cap census | `check_facts.py`'s own parser, imported and driven directly, instead of a regex over ` ``` ` fences | **Exact agreement** — 773 blocks, 4,605 facts, 19 at max, 17 at 10, 58 at the coaching cap |
| KHL census | enumerate from the **git index** not a filesystem glob, match case-insensitively, classify by reading each line, and **do not restrict to `content/`** | Exact agreement on every number — **and a scope defect the first could not see** |

**Re-running the same question with a different tool confirmed the arithmetic and found nothing.
Changing the question's boundary found the defect.** Arithmetic has not been the failure mode in
this project; **scope has** — five times in round 43 alone: a record naming five of eleven files, a
reviewer reporting two documents where there were sixteen, a case-sensitive grep that missed every
sentence *beginning* "Lift the stick", a stick-lift fix that stopped at a section boundary inside
a document it had already fixed, and a KHL census that stopped at `content/` while two diagram
captions asserted the same thing.

**So the rule is not "count everything twice". It is: when a census is recorded as a number the
next round will act on, put the boundary in the same sentence as the number.** *"28 in `content/`"*
is checkable and survives contact with a different method. *"28 reader-facing sites"* is not, and
did not.

⚠️ Two corollaries the same round demonstrated. **A tool reporting success is not evidence** — a
patch in this round matched no string, printed success from a neighbouring edit, and left a
corrected ⚠️ sitting above an uncorrected declaration for two further gate passes. And **a number
at a line wrap is invisible to a naive grep**: `29 sites` split across a newline survived three
sweeps for `29`.


- **These extractions wrap lines mid-phrase and hyphenate across breaks.**
  `grep -c 'not covered by the playing rules'` returns **0** on all three IIHF files; the
  phrase spans `iihf_rules.txt:2182-2183`, split as `is not` / `covered`. IIHF 46.9 wraps
  `an auto-` at `:4188` onto `matic` on the next line. **Flatten newlines and de-hyphenate before any phrase search** — a negative
  multi-word grep here is not evidence of absence, and it nearly produced a false
  "fabricated quotation" finding.
- **`git checkout-index` does not materialise `node_modules`.** A site build in such a tree
  dies `MODULE_NOT_FOUND` **while the shell reports exit 0**. Symlink it, and read the log
  rather than the status.
- **A reviewer's quotation is evidence, not verification.** A reviewer supplied
  `2'+2'+5'+GMP` as IIHF 46.4's sanction; the book assigns 46.4 the same `2'+5'+GMP` as 46.3.
  Another flagged a quotation for a missing em-dash the book actually contains. Re-derive.
- **A script that reports a miss has not made the change.** Two false completion claims in
  one session came from reading the summary rather than the report.
- **Bound a Key Takeaways slice on the `---` *and* on `*Sources`, not on the next `##`.** The
  Sources block has no heading, so "until the next `##`" runs to end of file — that put a
  66-word takeaway at 675 and the wrong figure reached a review record. **Bounding on the `---`
  alone is still wrong**, because `reading_ice_hockey_diagrams.md` is the one document of 37 with
  no `---` before its footer: the corrected parser read its 27-word takeaway as 471 words and put
  a compliant document on a defect list. **Two successive fixes to this one boundary were each
  shipped without being tested against the corpus they were about to measure.** Print the last
  line of any slice before believing its length.
- **A claim can live in the summary layer and nowhere else, and no checker looks for it.** The
  whole suspension-and-supplementary-discipline claim in `body_contact_and_battles.md` — USA
  Hockey 404(b) and 411, NHL 23.5 and 23.6, Hockey Canada 4.8(c), IIHF 28.1 — existed **only in
  Key Takeaway 6**. The body never made it, so no rules review had ever reached it: reviewers
  check the summary against the body, and this had no body to check against. It survived because
  shortening a takeaway is the only operation that would have exposed it. **Before trimming any
  summary item, grep each of its citations against the rest of its own document** — what appears
  nowhere else is not surplus, it is the corpus's only copy.
- **Enumerated lists in these extractions are not uniformly formatted.** NHL 23.6's Physical
  Infractions Category puts seven roman numerals on their own line and the eighth,
  `(viii) Kneeing`, on one line with its label — so a regex keyed to the first seven silently
  returns **seven of eight**. Print the raw span before trusting a count derived from a pattern.
- ⚠️ **An isolated build tree that symlinks `node_modules` is not isolated for anything that
  writes there.** `npm run build` runs `clean:cache`, which `rmSync`s `node_modules/.astro` and
  `node_modules/.vite` — through the symlink that deletes the **owner's** caches, and a running
  dev server may want a restart. Regenerable, but say so when you do it.
- ⚠️ **`check_links.py` defaults to `content/` only.** `python3 scripts/check_links.py --quiet`
  returns 0 while saying **nothing** about `project/`, and `git-guard.sh` does not checker-gate a
  commit that stages no `content/` file — so a commit touching only `project/` passes both with no
  link ever checked. Run **`python3 scripts/check_links.py project`** explicitly, and diff the
  broken set against HEAD, because seven breakages there are pre-existing.
- `grep` here is `ugrep` and aborts on complex `-oE`; use Python.

### Environment facts that cost time to rediscover

Carried from a retired working note (deleted 23 August 2026; its live content is folded into this file).

- **The Chrome extension refuses every local address** — **21 refusals across five sessions**,
  *"Could not verify this site's safety category."* D15's sanctioned path is blocked. A site pass
  that relies on it returns **no rendered finding at all**; do not re-attempt `navigate` first.
- **But the page can be rendered.** Real Chrome `--headless=new` on an isolated `--user-data-dir`,
  driven over the DevTools Protocol from Node 22's built-in `WebSocket` — zero packages. Serve
  from `npm run preview` on `:4321` so root-relative CSS resolves. **A `file://` fallback is not a
  valid test.**
- ⚠️ **`site/dist/` goes stale silently, and a stale build is invisible to inspection.** Diff a
  staged-only sentence against the built HTML before trusting any measurement of it.
- ⚠️ **Do not `kill` a PID because `lsof` shows it on your dev port** — that killed the owner's
  actual Chrome once. Check what the process is first.
- ⚠️ **Never start a second `npm run build` while one is running.** Two concurrent trees wedged
  both for 3+ minutes at `build:diagrams`, which drives headless Chrome to rasterise SVGs; the two
  invocations contend and neither finishes.
- **`npm run build` takes over two minutes** (9 PDFs, 9 EPUBs) — background it; a foreground run
  has already blown a tool timeout mid-run.
- **`npm`/`node` are nvm lazy-load wrappers that fail silently and exit 0** non-interactively.
  `unset -f node npm` and put `~/.nvm/versions/node/v22.23.1/bin` on `PATH`. (This is the same
  root cause as the `MODULE_NOT_FOUND`-with-exit-0 trap above.)
- **A WalkMe extension is force-installed by policy on this machine** and injects a script into
  every page — it will contaminate any network check here.
- `sources/iihf_rules.txt` is byte-identical to `sources/iihf_rules_v1.1.txt`; `v1.0` differs.

---

## What the gate now asks that it did not before

**C11** — every reviewer pass satisfying C4–C6 must have read the file **at the content now
staged**; a clearance over superseded text is void. It exists because eleven of round 37's
seventeen criticals were introduced by the repair of a previous one.

**Its terminating rule** — a repair does *not* void a clearance when it is confined to the
finding, re-derived from primary text, and recorded. A repair that **moves, merges, splits or
renumbers** text, or touches a claim the finding did not name, **does**.

<!-- round 53, slashing: the four refutations, kept in full because they are the round's best evidence
     that a brief is a hypothesis. (1) "Hooking carries no such ceiling" — FALSE in two books: IIHF 55.3
     and USAH 623(b)/(c) reach major + automatic game misconduct for RECKLESS ENDANGERMENT, no injury
     needed, the same trigger as slashing. Writing my version would have told a British or USA Hockey
     reader his hooking exposure was capped when it is not. The real divergence is the opposite pair:
     NHL 55.3 and HC 8.2(b) require an injury, and HC 8.2(c) bars a match penalty for hooking outright.
     (2) "Neither USAH 623 nor HC 8.2 has a hands sentence" — FALSE; both do, and the corpus already
     quoted them correctly. (3) The mirror does not run where the finding said: USA Hockey 634 needs a
     'forceful chop', and a stick LIFT is not a chop — rewriting it my way would have been the
     scope-backwards error. (4) The book-structure claim was already correctly scoped to the NHL alone.
     Also: my "under the other three it does" on the three-minor stick ejection is false — none of the
     other three books has one at all. -->

<!-- round 53, crease rows. ROW 1: only one unit needed changing, and for a reason the worklist could
     not see - IIHF 67.4 is a BARE CROSS-REFERENCE ('This rule is described under -> Rule 63.6'), so a
     British reader following the cite '(NHL 67.4, 67.5)' into his own book found NO TEXT AT ALL. The
     cite actively misdirected him. The other two units correctly name one book because they discuss
     one book, and the agent said so rather than sweeping - 'no change needed' as a result.
     ROW 2: re-measured on whole elements. Largest elements 332/294/399/168 words, down from round 52's
     940/798/1076/372. The permission paragraphs now open with a lede and state 'knock it down' at
     9-11% depth. THAT HALF CLOSES. But the HEIGHT paragraphs carry the safety instruction ONCE at
     67-85% with no lede, and the extraction layer had carried the price and DROPPED the caution -
     'Height only sets the price' read alone is an INCENTIVE TO CATCH HIGH, with an injury consequence
     rather than a penalty one. Fixed with an identical Never: at all three sites.
     AND THE AGENT CORRECTED ITS OWN FIRST MEASUREMENT: it initially read 92-97% depth and nearly
     reported 'still buried, unchanged'. Those were CLOSING RESTATEMENTS, not first statements. It
     reported the near-miss rather than burying it.
     Environment corrections to my brief: there is no hc2628.txt (hc.txt IS 2026-2028), no
     usah_case.txt (it is usah_casebook.txt), and iihf_rules.txt is v1.1 not v1.0. -->

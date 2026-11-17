# W393: "off the head" limited to Hockey Canada, USA Hockey's reckless match no longer tied to excessive force, three captions repriced and shortened, and the British ban no longer scoped by a claim its source does not make (17 November 2026)

**Files:**
- content/systems/offensive_zone_play.md
- content/systems/defending_the_rush.md
- content/hockey-iq/playing_without_the_puck.md
- site/src/diagrams/forechecking_systems.mjs (forecheck-122, forecheck-131)
- site/src/diagrams/defensive_zone_coverage.mjs (dz-collapse-corner)
- site/src/data/diagrams.json (build product)
- project/plans/OPEN_ITEMS.md
- this record

## Source
Rows from the plan, each briefed as a hypothesis:
- **From W392:** (1)–(8).
- **From W391 (4):** the captions.

Two rows were refuted:
- **From W392 (1), ozp facts :1170.** It says "at least a USA Hockey major and game misconduct (608(b))", and the next line, :1171, states 608(c) in full. Not cheaper. No edit.
- **From W392 (5), passing_and_receiving :221.** "If any of these is reckless, plan on a match … under 602(a)" already covers 608(c)'s narrower case. The captions winger-dz-rim and winger-dz-reverse price nothing at all: they cover posture only. No edit.

**Hockey Canada sources.** Three authors quoted `hc_2026-08-print.txt`, which sources/README.md marks as the superseded August print. The rules-verifier diffed it against `hc.txt`: Rules 4.10(a) and 7.5–7.7 are byte-identical there. The coordinator re-read 7.5(c) and the 7.6 supersession clause in `hc.txt`.

## What changed

### offensive_zone_play: "off the head" belongs to Hockey Canada alone (From W392 (3), disputed)
**Facts :812 (200/200).** Before: "…USA Hockey does if …, and the NHL, PWHL, CARHA and Hockey Canada do off the head". After (safety M2): "Never: Hit anyone from behind — plan on ejection in any book: the NHL, PWHL and CARHA eject, Hockey Canada off the head, USA Hockey if forceful at the boards, head first, reckless or careless to head or neck".

The rules-verifier settled the dispute: the W391 ruling ("exact via NHL 48") was wrong.
- **NHL and PWHL.** 43.2 allows no minor, and under 43.5 a GM "must be assessed anytime a major penalty is applied". Rule 48 has no supersession clause, and a flattened search for `supersede`, `in lieu of` and `instead of` found nothing linking 48 to 43.
- **CARHA.** 53(a) carries a GM in both tiers. The 53(b) Note says "Referees are instructed not to substitute other penalties". Rule 50 has no supersession clause.
- **Only Hockey Canada and the IIHF write a head rule that takes over.** Hockey Canada 7.6 and 7.7 (`hc.txt:6245`, ~6312); IIHF 48.1.
- The old line contradicted the page's own body at :823, :994, :1166 and :1228. A corpus grep found no other unit grouping the four books under "off the head".

**Facts :813 (285/300).** "into the boards or goal so they can't protect themselves" replaces "into boards or goal frame (CARHA: net)". It is true of both Hockey Canada 7.5(c) ("goal frame") and CARHA 53(b) ("goal net"). This was optional in the rules review; safety called the old wording clunky aloud.

**Not done:** adding 602(a) to :813. The line is at its cap, and :950 and :1169 voice it.

### defending_the_rush (From W392 (6), (7))
**USA Hockey's match was tied only to 608(c)'s excessive force at seven sites.** Under 602(a) a match "shall" be assessed for any reckless endangerment.
- Six sites now carry the W392 :652 form, "plan on a match for any reckless hit, boards or not — mandatory with excessive force on a vulnerable or defenceless player (602(a), 608(c))": :337, :406, :456, :951, facts :636 and CM :1097.
- **Why "plan on", not "must".** USA Hockey's own texts conflict. 608(b) prices a reckless hit from behind at a major plus GM. Casebook 608 Situation 1 says "major plus a game misconduct penalty, **or** match". 602(a) says "shall". The rules-verifier ruled "plan on" the correct bridge because it errs harsh, and found no USA Hockey ruling that settles which text governs.
- **:337 (safety M5).** Two "Under USA Hockey" sentences ran match-first, then floor. They are merged into one ascending ladder: 608(a), 608(b) with Casebook 608 Situation 1, 620(b), then 602(a) with 608(c).
- **:636 (safety M6).** The USA Hockey half was rewritten to drop a doubled "one". Value 284/300.

**KT9 (voiced alone).** The author's first fix ("for any reckless hit") let "mandatory" reach every reckless USA Hockey hit, which contradicts the body. Safety M1 changed it to "…and under USA Hockey with excessive force, boards or not." The KT's own opening, "If they cannot protect themselves, plan on a match", supplies 608(c)'s other conditions. A reckless hit on a player who can protect themselves is covered by "ends your game in five of six books". KT9 went from 100 to 98 words. Both reviewers upheld it.

**:951, the IIHF Rule 48 head carve-out.**
- **Before:** the paragraph gave Hockey Canada's carve-out twice and the IIHF's not at all.
- **After:** "On the head, plan on the game misconduct anyway: the IIHF's head rule (48.1) and Hockey Canada's (7.6, 7.7) take over there and can start at a minor, but under Hockey Canada it is a match if they cannot protect themselves."
- The 7.7 citation (Junior/Senior) was a rules-reviewer addition.

**:406.** The suspension list now includes "USA Hockey 405(c)" (rules). It sits straight after the new USA Hockey match sentence.

**Left alone: five flat IIHF "no minor" lines** (facts :318, :410, :542, :635 and body :957). Both reviewers agreed:
- :542 and :957 are low hits, which cannot reach the head.
- The other three already say "plan on it".
- Each errs harsh.

### Captions: USA Hockey repriced, and shortened (From W391 (4))
**The defect.** forecheck-122, forecheck-131 (forecheck-122 is also hosted on how_to_watch_hockey) and dz-collapse-corner each draw a carrier on the wall with their back turned. Each priced USA Hockey only through 608(c). A forceful hit at the boards short of "excessive force", which Casebook 608 Situation 1 makes a must-eject, got no price at all.

**Rounds:**
1. **Author.** Added the full triggers. The captions grew to 1,537, 1,463 and 1,272 chars.
2. **First reviews.**
   - Rules: "it" could attach to the boards-only hit, and the reckless→match tier was dropped.
   - Safety M3: length, plus two cites voiced aloud.
   - Safety M4: the forecheck captions gave Hockey Canada and CARHA only the match, a closed-list omission of their minor-plus-GM floor.
3. **Second text.** The new sentence split left "Plan on a match … mandatory" unscoped (safety C1, Minor: heard as mandatory in every book, which is false for the IIHF and NHL). It was also still too long (C2).
4. **Final text: the safety reviewer's cut, with author fidelity fixes.**
   - "Head first into the boards or net" was restored (608(b) and the Casebook).
   - "Head or neck" was kept (620(b)).
   - In the forecheck captions, "the floor is" and "make it a match" were kept.
   - In dz-collapse-corner, "a hit from behind" now names its subject.
   - "Anywhere" replaces "boards or not … mandatory", which check_caption_negations flagged. The 608 Note supports it: "in open ice or directly into the boards or goal frame".

**forecheck-122 / forecheck-131 span:**
> "Checking from behind has no minor in the NHL, PWHL or IIHF, so the floor is a major and game misconduct, in the IIHF when judged reckless. Hockey Canada and CARHA add a game misconduct even to their minor, and make it a match into the boards or net on a player who cannot protect themselves. Under USA Hockey a hit from behind ejects you if it is forceful at the boards, sends them head first into the boards or net or is reckless, as does careless head or neck contact; plan on a match for any reckless one, anywhere, mandatory with excessive force on a vulnerable or defenceless player."

**dz-collapse-corner span:**
> "Under Hockey Canada and CARHA a hit from behind into the boards or net when they cannot protect themselves is a mandatory match. Under USA Hockey a hit from behind ejects you if it is forceful at the boards, sends them head first into the boards or net or is reckless, as does careless head or neck contact; plan on a match for any reckless one, anywhere, mandatory with excessive force on a vulnerable or defenceless player."

**Lengths and cuts:**
- Whole captions are now 1,417 (forecheck-122), 1,343 (forecheck-131) and 1,213 (dz-collapse-corner) chars.
- **A cut that was reverted.** The author, under an optional brief line, cut "Dog, fox and hawk on F1, F2 and F3 are a memory hook, not standard terms." from forecheck-122, on the strength of forechecking_systems.md :377 carrying the labels. **The commit gate BLOCKED it.** forecheck-122 draws "the dog", "the fox" and "the hawk" and is also embedded in how_to_watch_hockey.md :134, whose prose never explains them, so the sentence was that page's only gloss (D13 folklore and terminology, which no reviewer had been asked to cover). The sentence is restored byte-identical to HEAD. The built how_to_watch_hockey page carries it again. The module comment that said how_to_watch "never uses them" is corrected.
- Kept: the body-checking legality sentence, the women's / non-checking caveat and the ⚠️ onus sentences.
- The spoken cites are gone; the sources are named in the module comments.

**check_caption_negations** flags one hit on the forecheck floor sentence ("…no… , → PWHL or IIHF, so the floor…"). The author judges it a false positive: "no" covers "minor" only. Recorded as a plan row.

### playing_without_the_puck: Sources trailer and the British ban (From W392 (8))
**The trailer was wider than the row said.** Added:
- NHL and PWHL 21.2.
- USA Hockey 620(b) and 405(c).
- Hockey Canada 4.10(a).
- IIHF 43 and 48, in both editions.
- CARHA 48(a) and 34(a).
- A new DOPS paragraph.
- A correction to its 608(c) description, which had dropped the reckless and excessive-force conditions.

Every new quote is verbatim (rules-verifier, plus source-verifier spot-checks). The trailer is unvoiced (render).

**Source-verifier.**
- The DOPS URL returned HTTP 200. The PDF is byte-identical to sources/eih_dops_2026-27.pdf (sha256 49e6f0dd…), and all three quotes are verbatim.
- **The paragraph overreached.** It called the DOPS "the source of" the page's ban sentences, which assert three things the document does not say:
  1. "outside the Elite League";
  2. the on-ice trigger, which is a reading of Appendices D, G and H;
  3. no under-16 exception, though Appendix J gives a written warning for a first offence.

**Fixes:**
- **Trailer.** Narrowed to the ban, its reach to every league and age group (C.1, §11), and its reach to England and Wales (§5). It now carries uk_rules' three disclosures.
- **Facts :825 (277/300).** "outside the Elite League" is dropped. The line now ends: "For Elite League games, plan on the ban too and ask your league".
- **Body :1019.** "…in the Elite League, plan on the ban too and ask whether it applies".
- **Safety P1.** The author's first form ("ask your league") was a pointer without a default.

**Under-16s.** The voiced lines still say "at least a one-game ban" without Appendix J. This errs harsh. The facts block is at HARD_MAX and the trailer carries the exception. Both reviewers left it.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** nothing WRONG in the dangerous direction. Settled :812 for the author, against W391. Captions: "it" antecedent and missing reckless→match. dtr :951 needs 7.7. dtr :406 omits USA Hockey 405(c). Hockey Canada quotes hold in `hc.txt`. **Second read:** all post-review edits OK; "at the boards or in open ice" is faithful. **Third read:** C1/C2/P1 text OK. |
| safety-reviewer | **First read:** no Critical or Major. M1 KT9, M2 :812, M3 caption length and spoken cites, M4 Hockey Canada/CARHA floor, M5 :337 order, M6 :636. **Second read:** C1 (unscoped "mandatory" in captions), C2 (length), P1 ("ask your league" with no default). **Third read:** CLEAR. |
| source-verifier | DOPS URL and quotes OK. The paragraph's claimed scope was WRONG by overreach: fixed. NHL and PWHL 21.2, and CARHA 34(a) and 48(a), verbatim. |

### C11
The coordinator wrote no content. Every post-review edit is one reviewer's text, or an author fidelity or antecedent change read by both reviewers in a later read:
- the caption deviations listed above;
- "plan on the ban too" for "plan on one too".

Where the reviewers conflicted (KT9: rules optional "plan on one" vs safety M1 "with excessive force"), safety M1 shipped. The rules reviewer upheld it in the second read.

## Checks after the last content edit
- **Build.** build-diagrams (absolute node) by the caption author after the restore, then a full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 03:19:50; no `content/` or `site/src/` file is newer. "memory hook, not standard terms" is present once in the built how_to_watch_hockey page.
- **Gates.** check_links --quiet, check_facts, check_absolutes (408 caption units), check_geometry and check_secrets: pass. check_counts --update: no change. check_callout_flow --bare: 0. check_caption_pairs: 0.
- **check_marker_pairs.** 0 LOST and 0 SPLIT on all three content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, three reads. Sources: <br>• USAH 405, 602, 608 + 608 Note + Casebook 602 Sit. 1 and 608 Sit. 1, 620 <br>• NHL/PWHL 21, 43, 48 <br>• IIHF 43, 48 (both editions) + Situations <br>• HC 4.10, 7.5–7.7 (`hc.txt`, diffed against the August print) <br>• CARHA 34, 48, 50, 53 (2020 and 2026) <br>• EIHL Casebook Rule 28 and Fines and Suspensions <br>• IHUK DOPS 2026-27 |
| D4 Citations | source-verifier: DOPS URL refetched and hash-matched, quotes located. Rulebook quotes in the pwtp trailer spot-checked. |
| D8 Counts | "any book", "the NHL, PWHL and CARHA eject", "five of six books", "every league or age group" |
| D9 Summary layer | dtr KT9 and CM :1097 read voiced alone |
| D10 Key-facts | ozp :812/:813, dtr :636, pwtp :825 read voiced alone |
| D11 Reader safety | safety-reviewer, three reads |
| D12 Read-aloud | every page and caption host rendered by its author into its own `--out`; safety re-rendered four documents |
| Diagrams (no D-number) | three captions rebuilt; check_absolutes, check_caption_pairs and check_caption_negations run; the four hosts rendered |
| D13 Folklore / terminology | engaged by the caption cut and caught only at the commit gate (above). Resolved by reverting to HEAD's text, so no new terminology claim ships. |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 03:11:41 build (below) |
| D5–D7 | not engaged (D7: no new terminology; the one terminology change was reverted) |

**D15:** site-reviewer, six pages, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark, on the 03:11:41 build. The only change since is the restored 75-char sentence in forecheck-122, which is HEAD's own text. The caption windows below predate it.

All three captions render as caption prose plus one glyph-led amber run. dz-collapse-corner's run carries a second glyph mid-run (two instructions in one amber block); this is noted, not a defect.

| Page | Worst 400px window |
|---|---|
| ozp | 47.9 |
| dtr | 38.1 → 39.1 |
| pwtp | 40.4 → 40.2 |
| forechecking | 41.0 |
| dzc | 43.9 → 44.0 |
| how_to_watch_hockey | 23.9 (first measured) |

Caption windows at 400px:

| Caption | Window |
|---|---|
| forecheck-122 | 14.1 |
| forecheck-131 | 13.3 |
| forecheck-122 on how_to_watch | 23.9 |
| dz-collapse-corner | 24.0 |

- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
Line numbers are as staged. Find each site by its text.
1. **"Outside the Elite League" is a working scope stated as fact, at about 15 sites in about 10 documents.** It appears in the owner, uk_rules :413/:415/:654, and in identical DOPS facts lines in risk_management, defender, winger, center, goaltender, game_management, special_teams, offensive_zone_play :952 and body_contact_and_battles.
   - No document on disk excludes the EIHL from the IHUK DOPS. The DOPS's only Elite League mention (:1236) treats the EIHL DOPS as a separate body. The EIHL Casebook (Rule 28) names its own DOPS and writes no ban for checking from behind, a head check or boarding.
   - **Risk.** An Elite League player also registered in NIHL or junior hockey hears that the cross-league ban does not reach him.
   - **Recommended form (rules):** pwtp's "plan on the ban too and ask your league". Do it as a per-claim census that reads each hit, not as a sweep.
   - **Related.** uk_rules :413 "The Elite League's Casebook writes its own suspensions" may be read as covering these acts, and the Casebook does not.
2. **The under-16 written warning (DOPS Appendix J)** is absent from every voiced "at least a one-game ban" line. This errs harsh. DOPS does not say whether Appendix J or C.1 takes priority.
3. **Forecheck captions, Hockey Canada head case.** "Hockey Canada and CARHA add a game misconduct even to their minor" does not carve out Hockey Canada 7.6/7.7 on the head. This errs harsh; both reviewers would leave it.
4. **Forecheck captions, IIHF.** The IIHF floor carries neither the 48.1 head carve-out nor the non-reckless gap. 43.3 reaches only a reckless hit, and the book prices no other hit from behind; 43.1 adds "other penalties may still be assessed". Optional rules sketch: "…when the referee judges it reckless, and another penalty can still be called".
5. **check_caption_negations false positive** on the forecheck floor sentence ("no minor in the NHL, PWHL or IIHF, so the floor…"). The old word order ("The NHL, PWHL and IIHF have no minor for checking from behind, so…") clears it at about +5 chars.
6. **dz-collapse-corner amber run holds two glyph-led instructions in one block** (site). Separate escalation would be a caption-renderer choice.
7. **dtr: the USA Hockey ladder is restated four times in the body** (:337, :406, :456, :951), plus facts :636, CM :1097 and KT9. Each copy is consistent now, but each is a propagation risk. :337, :406 and :456 each end with a pointer to What it costs, yet still carry the full sentence. CM :1097 is 1,183 chars, 17 short of the cap.
8. **dtr facts :410 (300/300) is hard to parse aloud** ("(Hockey Canada, head hit: plan on it; a match if defenceless); IIHF: plan on it — NHL, PWHL, IIHF: no minor…"). This predates the wave.
9. **dtr :406 opens with a tariff** ("Under Hockey Canada and CARHA, ⚠️ …"). This predates the wave.
10. **ozp facts :1170 still reads "into boards or goal frame (CARHA: net)"**, while :813 now says "into the boards or goal". This is wording only.
11. **ozp facts :950 and :1169 "IIHF or head hits: plan on it"** has ambiguous scope. Not cheaper.
12. **pwtp trailer: older entries were not re-read.** The 608(c) correction shows older trailer descriptions can be stale. The closing "Only two suspension schedules were read … Nothing is stated here about what any other book's discipline costs" is scoped to its item, but the page now cites more.
13. **USA Hockey 602(a) vs 608(b)** for a reckless hit from behind without excessive force: the books conflict, and no ruling was found. The corpus's "plan on a match" errs harsh at every site.

14. **pwtp facts :825 "For Elite League games, plan on the ban too"** — "too" hints at an exclusion the line no longer makes, since the first sentence already covers Elite League clubs (gate; harsh). The body's "ask whether it applies" is cleaner.
15. **Other diagrams whose drawn labels may have lost their gloss in an earlier caption trim** — not swept (gate).

## What this method could not have found
- Other documents' captions or sentences that price USA Hockey's hit from behind only through 608(c) without naming it.
- The EIHL DOPS gamebook, which is not on disk. The real Elite League tariff for these calls is unverified.
- Real devices, and a screen reader.

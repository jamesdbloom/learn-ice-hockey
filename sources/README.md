# Primary sources

The rulebooks every rules claim in `content/` is verified against.

**Nothing in this directory is committed except this file.** The rest is
gitignored — not for secrecy but for **copyright**. These are the IIHF's, the
NHL's, USA Hockey's and Hockey Canada's publications. The corpus quotes them,
with attribution, to teach the rules; mirroring 2.7 MB of searchable rulebook
text on a public repository is a different act. `.gitignore` excludes `*.pdf`
and `sources/*`.

Everything here is reproducible from the table below.

```sh
bash scripts/fetch_sources.sh          # download and extract all of it
```

---

## What the corpus verifies against

| File | Document | Source |
|---|---|---|
| `iihf_rules.txt` | IIHF Official Rule Book 2025/26 **v1.1, July 2025** — the edition Britain adopts ⚠️ **The on-disk file is NOT yet from this URL.** It is the repaired rbihf.be mirror extraction (MD5 `b8bc551a…`); the publisher-original `-layout` extraction is a **different file** — 662,701 bytes against 663,692. **Running `fetch_sources.sh` replaces it and shifts every `iihf_rules.txt:NNNN` citation in `project/`.** Do that deliberately, not as a side effect of a `--force` run. | [blob.iihf.com, publisher-original](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf) (see below) |
| `iihf_rules_v1.0.txt` | IIHF Official Rule Book 2025/26 v1.0, May 2025 — superseded, kept for comparison | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/4_sport/officiating/rule_book/25_26/2025-26_iihf_rulebook_19052025-v1.pdf) |
| `iihf_rules_2026-27.txt` | ⚠️ **IIHF Official Rulebook 2026/27, Version 1.0, June 2026 — THE CURRENT BOOK, and the corpus does not yet describe it.** Obtained 29 August 2026; clean `pdftotext -layout`, 0 mojibake. **The corpus's IIHF layer is 2025/26 across 13 documents.** Rules 76.6 and 76.7 have been checked and **changed substantively** (see the note below); **the rest of the book has not been read.** | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/rule%20book/2026-27_iihf_rule_book.pdf) |
| `iihf_situations_2026-27.txt` | IIHF Situation Handbook 2026/27, Version 1.0, June 2026. Obtained 29 August 2026; clean extraction, 0 mojibake. **⚠️ **NO LONGER TRUE — corrected 2 September 2026.** A full situation-by-situation diff against v1.1 has now been run (**638 situations in v1.1, 644 in 2026/27**; 637 common, **513 byte-identical**, 55 substantively different), and **five documents already quote this edition accurately** — `goaltender.md` (new Situation 10.26), `uk_rules.md` and `body_contact_and_battles.md` (new 60.13), `rules_primer.md` (the 81.20→81.21 and 82.6→82.7 renumberings, both already flagged in-text), and `faceoffs.md` (new 81.18, and the warn⇒eject change at **fifteen situations across five rules**, a count independently re-parsed and confirmed). ⚠️ **The staleness ran the OTHER way: this note said the edition was unread while the corpus was already citing it correctly.**** | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2026-27_iihf_situation_handbook.pdf) |
| `iihf_situations_v1.1.txt` | IIHF Situation Handbook 2025/26 **v1.1, August 2025 — the current edition OF THE 2025/26 BOOK (the 2026/27 Handbook is the row above), and the one the corpus cites.** Obtained 29 August 2026 from the URL below; self-declares *"Version 1.1, August 2025"* at lines 9 and 8941. Clean `pdftotext -layout` extraction: **0 mojibake, 0 ligatures**. | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) |
| `iihf_situations.txt` | IIHF Situation Handbook 2025/26 **v1.0, June 2025 — superseded, kept for comparison.** ⚠️ **This file came from the URL beside it, which now serves v1.1.** The publisher replaced the document behind an unchanged link: the filename said `v1_1` in July 2026 and served v1.0; in August 2026 the same URL serves v1.1. See the edition note below — four rulings changed, and one reversed. | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) (now serves v1.1) |
| `nhl_rules.txt` | NHL Official Rules 2025-2026 | [media.d3.nhle.com](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) |
| `nhl_rules_2024-25.txt` | NHL Official Rules **2024-2025 — SUPERSEDED, held as dating evidence only.** Fetched 31 August 2026 from the same host as the current book (HTTP 200, 12.7 MB, running heads read `OFFICIAL RULES 2024-2025`). ⚠️ **Never cite it for a current rule.** It exists because the corpus dated the Rule 60 rewrite to a **blog**, which is non-negotiable 2; two editions of primary text now settle it. 2024-2025 Rule 60.1: *"A 'high stick' is one which is **carried above** the height of the opponent's shoulders"*; 2025-2026: *"one which **contacts** an opponent above the shoulders, **provided their shoulders are at waist level or higher**"*. 60.3 changed with it; 60.2 is identical in both. ⚠️ **It dates the first edition carrying the change and nothing more** — the NHL book has no rule-change summary and dates no rule, and no edition before 2024-2025 has been consulted, so how long the older wording stood is **not established**. | [media.d3.nhle.com](https://media.d3.nhle.com/image/private/t_document/prd/yikcdsxofkmgsrhjl3di.pdf) |
| `usah.txt` | USA Hockey Official Playing Rules 2025-29. ✅ **Verified against the publisher PDF, 29 August 2026** — re-fetched and re-extracted with `pdftotext -layout`, and the result is **byte-identical, MD5 `04b8fae8b682136701fb573a14500af7`**. So this file *is* the `-layout` extraction, there is no second view to compare against, and **the hyphenation trap that affects `nhl_rules.txt` and `hc.txt` does not apply here.** Recorded because an agent named "a flattened re-extraction of the USA Hockey PDF" as the one check it could not run to close a negative existence claim — it has now been run, and it changes nothing. | [cdn2.sportngin.com](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) |
| `usah_casebook.txt` | **USA Hockey Official Rules and Casebook 2025-29**, 476pp — the separate volume, fetched in round 52. ⚠️ **The corpus cites it** (Rule 630 Situation 41, Rule 607 Situation 2, Rule 203(a) Situation 6), and until `fetch_sources.sh` gained it, it existed only in a session scratchpad — a cited book no later round could rebuild. **Its own "Rule Reference 630(d.3)" in Situations 40/41 names a sub-clause that is not in the printed rule** — the book's error, recorded not repaired. **⚠️ A second, larger instance of the same species: USA Hockey's Rule 610 letters do not agree with themselves.** The printed rule runs **(a)–(g) with no (h)** — confirmed in TWO independent extractions of the same printed text (`usah.txt:3760-3821` and this volume at `:9329-9391`), which agree word for word, so it is not an extraction artefact. But USA Hockey's own summary tables and Casebook situations cite **one letter higher** from goal-displacement onward: body **(d)** goal displacement is cited as **610(e)** (`usah.txt:5199`, Casebook Situations 6 and 7); body **(f)** puck on the netting is cited as **610(g)** (`usah.txt:5210-5211`, Situation 8); body **(g)** the bench minor for the wrong number of players is cited as **610(h)** (`usah.txt:5200`, `:5246`, Situations 4, 9, 10, 11). ⚠️ **So a citation of 610(e) through 610(h) taken from a summary table or a Casebook situation will not match the rule text under that letter.** ⚠️ **The corpus already knows this and handles it, which I got wrong when first writing this entry:** `rules_primer.md` states in terms that the Summary of Penalties says *"610(h)"* while *"the printed Rule 610 runs (a) to (g) and there is no (h)"*, and tells the reader **610(g) "is the number to quote to an official"**; its Sources trailer records that both volumes' Summary uses *"610(e)"* for what the body prints as 610(d), and states that its own citations are **the body's lettering**. `faceoffs.md` records the same. **So the corpus uses the body's letters consistently and discloses the disagreement.** This entry exists so the next reader of the SOURCE meets it here too. **Recorded, not repaired — the disagreement is the book's.** ⚠️ **A THIRD INSTANCE, found in round 69 and of the same species: the Standardized Discipline Policy cites `Rule 640(e)` for a MATCH penalty** (`usah.txt:1254`, Level 3, and the same list in this volume) — in a list where every other entry names the sub-section that actually *is* the match penalty (`609(c)`, `611(c)`, `621(c)`, `604(e)`…). **For Rule 640 that is `(h)`, not `(e)`:** the printed rule makes 640(e) a **minor**, 640(g) a major plus game misconduct, and **640(h)** the match option, and **Appendix I's Summary of Penalties agrees with the printed rule** — `usah.txt:5275` lists `640(e,g)` under *Minor or Major (plus Game Misconduct Penalty)* and `usah.txt:5336` lists `640(h)` under *Match Penalty Option*. ⚠️ **So the Discipline Policy is the outlier, and the corpus is consistent with the printed rule and with Appendix I. Recorded, not repaired.** ⚠️ **A FOURTH INSTANCE, back on Rule 610 itself, found in the off-ice-officials section: the Linesperson's stoppage-and-report duties cite `Rule 610(c)` for *"Delaying the game by deliberately displacing the goal post"*** (`usah.txt:3166`) **— but the printed body's goal-frame-displacement clause is (d), not (c)** (`usah.txt:3776-3779`: *"(d) Play shall be stopped immediately when the goal frame has been displaced from its normal position. A minor penalty shall be assessed to any player (including a goalkeeper) who deliberately displaces the goal frame."*); printed (c) is the puck-out-of-rink clause. ⚠️ **The corpus's own `610(c)` citation is unaffected and safe** — Appendix I's Summary of Penalties lists *"610(c) Batting/shooting puck out of rink"* (`usah.txt:5198`), agreeing with the printed body. Recorded, not repaired — this is the book's own off-ice-officials cross-reference disagreeing with its own rule text. | [cdn3.sportngin.com](https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf) |
| `hc.txt` | Hockey Canada Playing Rules 2026-2028. ⚠️ **Extracted with plain `pdftotext`, not `-layout`** — one of **two** files here that are, the other being `nhl_rules.txt` (verified round 52: `-layout` on the NHL PDF gives a different file, 906,921 bytes and 34,484 diff lines, and does **not** reproduce the MD5-proven extraction) — so its tables interleave and rule numbers can detach from their text. Re-extracting with `-layout` is better evidence and shifts every `hc.txt:NNNN` citation in `project/reviews/`; see the note in `scripts/fetch_sources.sh`. ⚠️ **House-word trap, measured: this book overwhelmingly prefers `goaltender` over `goalkeeper`.** `grep -ci goaltender sources/hc.txt` → **349**; `grep -ci goalkeeper sources/hc.txt` → **4**. A single-word grep for `goalkeeper` on any goaltending question returns a near-total false negative against this book — search `goaltender` (or both terms) instead. | [cdn.hockeycanada.ca](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) |
| `eiha_inhouse_2026-27.txt` | ⚠️ **IHUK In-House Rules 2026-27, Revision 1, published 25 July 2026 — THE CURRENT BRITISH DOCUMENT.** Obtained 29 Aug 2026. ⚠️ **It contradicts itself on the IIHF edition**: its cover says *"the **Current** IIHF Rule Book"*, its Introduction says *"Version 1.1, published July 2025"* — **which is the 2025/26 book**. Do not cite it as adopting 2026/27. And it **adds a Rule 76 section that 2025-26 did not have**: *"With the exception of face-offs following icings, the linesperson shall **immediately replace the centre for all violations**."* plus *"**Either centre can now put their stick down first** for a face-off."* | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2026/08/IHUK-In-House-Rules-2026-2027.pdf) |
| `eiha_inhouse.txt` | IHUK In-House Rules 2025-26, Revision 1 (27/10/25) | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf) | Superseded; kept for comparison.
| `iihf_coachdev_off_tactics.txt` | IIHF Coach Development Program, Level I (Tactical) — **§21.1 "International Symbols"**, the diagram key the corpus's rink diagrams follow | [hockeyeasternontario.ca](https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf) |
| `huh.txt` | ⚠️ **USA Hockey *Heads Up Hockey* Program Guide — PLAIN `pdftotext`, and that is deliberate.** The authority for the corpus's spinal-injury mechanism (*"this normal curve is removed, and the cervical spine becomes straight"*), cited in `rules_primer.md` and `body_contact_and_battles.md`. Obtained 29 Aug 2026. **Note the book prints *"one of more vertebrae"*** — its own typo, quoted `[sic]`-style in the corpus; and it restates **Tator et al., *Spinal Injuries Due To Hockey*, Can J Neurol Sci 11:34-41**, so the corpus cites the guide as a restater, not as the study. ⚠️ **AND IT CARRIES USA HOCKEY'S TIP ABSOLUTE TOO, WHICH NOTHING RECORDED UNTIL 19 September 2026.** `huh.txt:468` prints *"Never hit the boards or glass with the tip of your shoulder — it can cause injury"* — **the same sentence as `ibc.txt:1453`, verbatim in words** — ⚠️ **but punctuated with an EM DASH (U+2014) where `ibc.txt` has an EN DASH (U+2013).** **The corpus quotes this sentence at SEVENTEEN sites and every one uses the EN dash, i.e. `ibc.txt`'s form**, which is correct where it attributes to *Introduction To Body Contact* — **and nine of the eleven documents carrying it already note that the *Heads Up Hockey Program Guide* prints it *"in the same words"*.** ⚠️ **A verifier going to THIS file to confirm a character-exact quotation will find a different glyph and must not report drift.** ⚠️⚠️ **AND `check_quote_drift.py` CANNOT ADJUDICATE THIS: it keeps the CLOSEST match across ALL sources, so a site attributing to *Heads Up Hockey* while carrying `ibc.txt`'s en dash matches the `ibc` copy and scores CLEAN.** **The corpus happens to be right; the tool could not have said so.** | [cdn4.sportngin.com](https://cdn4.sportngin.com/attachments/document/0138/6193/HUH_Program_Guide_FINAL.pdf) |
| `nhl_rules_2024-25_layout.txt` | The same superseded 2024-2025 edition, `-layout`. ⚠️ **It exists because `nhl_rules.txt` is the PLAIN extraction**, and comparing two editions extracted by different methods would make every diff between them an artefact of the method rather than of the rewrite — which is the one thing this file is held for. Same prohibition: **never cite either for a current rule.** | same |
| `huh_layout.txt` | The same guide, `-layout`. ⚠️ **Kept only to demonstrate why it must NOT be used — see the trap below.** | same |
| `ibc.txt` | USA Hockey **Introduction To Body Contact** (Coaching Education Program) — the authority behind the open-ice check one-stride condition and the §6 boards three-case rule in `body_contact_and_battles.md`. ⚠️ **BUILT ON THE 2007-09 RULE BOOK, AND THE MANUAL PRINTS NO PUBLICATION DATE** — not in its text, not on its cover, back cover or credits pages (all rendered with `pdftoppm` on 11 September 2026), and `grep -iE 'copyright|©|printed|edition|revis'` returns zero. `pdfinfo` gives CreationDate 22 July 2010, Producer QuarkXPress 8.1 — **file metadata, not a publication date.** Its ONLY edition marker is the rule book it quotes, so ⚠️ **ANY RULE IT STATES MAY BE SUPERSEDED** — it relays a 12-and-Under body-checking age that current Rule 604(a) PROHIBITS, which reached the corpus and shipped. Its TECHNIQUE teaching is not dated the same way. ⚠️⚠️ **AND THE STRING `2007-09` DOES NOT GREP. `grep -c '2007-09' sources/ibc.txt` RETURNS 0.** The book breaks it across a line as `2007-` / `09`, so it is `2007- 09` once flattened. **The corpus cites `2007-09` in three documents and every one of them is verbatim-correct — a verifier checking the citation against its own source gets a confident zero.** Flatten before concluding: `tr '\n' ' ' < sources/ibc.txt | tr -s ' ' | grep -o '2007- *09'`. ⚠️ **ITS TIP ABSOLUTE IS NOT UNIQUE TO THIS BOOK:** `ibc.txt:1453`'s *"Never hit the boards or glass with the tip of your shoulder – it can cause injury"* is printed verbatim in the *Heads Up Hockey Program Guide* at `huh.txt:468` — **with an EM DASH there against this book's EN DASH.** See the `huh.txt` row for why `check_quote_drift.py` cannot adjudicate an attribution between the two. ⚠️ **AND THE TEXT LAYER IS NOT THE DOCUMENT.** At 3.2% the ratio looks healthy and every reviewer has grepped it and stopped — but **Fig. 6 *Protecting Yourself Along The Boards* (PDF page 24, manual page 20) is a drawing of the boards posture the corpus argues about, and it shows BOTH ARMS BENT AT THE ELBOW**, gloves up and spread on the glass. No grep reaches it. `pdftoppm` the figures. ⚠️ **RENDERED AND READ 19 September 2026, and the page settles two things a grep could not.** **(1) THE FIGURE BELONGS TO §A, NOT §B.** The page carries BOTH sections: **§A *Checked Into The Boards – Body Protection*, objective *"To protect the body when being checked while facing the boards"*** — whose teaching points are *"If at all possible, try to turn skates parallel to the boards before contact is made"* and *"If checked while facing the boards, distribute the force of the impact over as wide a surface as possible, including putting your stick and gloves on the glass to cushion the blow"*, with the common error *"Not getting your stick and gloves up and spread out on the glass"* — and then **§B *Checked Along The Boards – Body Protection*, objective *"To protect the body when being checked while skating parallel to the boards"***, whose teaching points are *"Press your forearm and upper thigh (hip area) against the boards"*, *"Avoid hitting the boards with the shoulder"* and *"Keep a low center of gravity with your feet apart and knees bent"*. **Fig. 6 sits UNDER §A.** ⚠️ **So it illustrates the DAMAGE-LIMITATION case (already facing the wall, no time to turn), NOT the posture to aim for — and the corpus's §B scope attribution for *"Avoid hitting the boards with the shoulder"* is CONFIRMED VISUALLY, not merely inferred from extraction order.** **(2) ⚠️ THE FIGURE IS UNUSED EVIDENCE ON A LIVE TENSION.** The corpus glosses this case as *"arms out as a shock absorber"* — properly sourced, but to a DIFFERENT USA Hockey drill printing *"extended arms"* — and it bounds that with **Chou et al. 2001** (*"the elbow mediolateral shear force was 68% larger"* with the arm extended rather than flexed), a laboratory study of forward falls which the corpus itself labels *"cited only to bound the locked-arm claim, not as hockey evidence."* ⚠️ **Fig. 6 IS hockey evidence, from the SAME governing body that prints *"extended arms"*, and it draws the elbows BENT.** **The corpus has never cited it — `grep -rn "Fig\. 6\|Figure 6" content/` returns nothing.** **It corroborates the existing bounding from inside the sport and should be used where the locked-arm claim is bounded.** | [cdn4.sportngin.com](https://cdn4.sportngin.com/attachments/document/55c1-2114751/IntroductiontoBodyContact.pdf) |
| `eih_rr.txt` | England Ice Hockey Rules & Regulations 2024-2025 | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2024/09/1.0-5.0-EIH-Rules-and-Regulations.pdf) |
| `ukcg.txt` | **UK Concussion Guidelines for Non-Elite (Grassroots) Sport**, November 2024 update. Quoted in `uk_rules.md` for the 999/111 split, the red-flag list and the suspected-neck-injury instruction; **England Ice Hockey has formally adopted it.** **Real text layer, 27pp, ~2.7 KB/page — this one greps honestly**, which is why the disclosure that *helmet* appears **0** times in it is checkable. ⚠️ **Fetch gotcha:** the SRA page carries `<base href="https://sportandrecreation.org.uk/">`, so its `../files/…` hrefs resolve to the **site root** — resolving them against the page path returns a **404**, the shape that manufactures a false dead-link report. ⚠️ **Its red-flag panel is TWO-COLUMN and the columns INTERLEAVE in extraction — the bullets sit at character offsets 41 and 82, and it must be read POSITIONALLY (`:245-283`), never by line order.** **Measured 19 September 2026: a naive whitespace-stripped phrase search over the panel produces **8 FALSE ABSENCES OUT OF 16** — exactly half. Every multi-line bullet fails, because the right column splices into the middle of the left one.** ⚠️ **And the positional read has its own trap: slicing at column 83 instead of 82 returns **8 entries instead of 14** — a confident, wrong count from a one-character error.** ⚠️ **Its headings are also LETTER-SPACED: the panel's own heading extracts as `R E D F L AG S`, so `grep -i "red flags"` returns ZERO on the page that IS the red-flag panel.** England Ice Hockey's Safer Sport page still links the older **April 2023** edition (`http://sramedia.s3.amazonaws.com/media/documents/9ced1e1a-5d3b-4871-9209-bff4b2575b46.pdf`, HTTP 200, 2,966,528 bytes, CreationDate 18 April 2023) — **so a British reader following England Ice Hockey's own link reads a different edition from the one the corpus cites.** ⚠️ **That gap is CLOSED, not merely disclosed: on 19 September 2026 both editions' panels were reconstructed positionally and compared, and ALL FOURTEEN ENTRIES PLUS THE INSTRUCTION SENTENCE ARE BYTE-IDENTICAL.** **This line previously read only *"the sentences the corpus quotes are verbatim in both"*, which was measured when the corpus quoted FOUR entries; it now holds for the full fourteen-entry panel. No edition caveat is needed for this list.** | [sportandrecreation.org.uk](https://sportandrecreation.org.uk/campaigns-and-policy/concussion/concussion-guidelines-for-grassroots-sport) |
| `crt6.pdf` | **Concussion Recognition Tool 6** — Echemendia RJ, et al., *Br J Sports Med* June 2023;57(11):692-694, doi 10.1136/bjsports-2023-107021. Hosted by England Ice Hockey; the primary is BMJ, which returns **403** to any fetch. ⚠️ **DO NOT GREP THE `.txt`. Its content pages are IMAGES — but it is NOT a scan:** it is an InDesign-produced PDF with a **real text layer** that holds none of the tool's words, so `pdffonts` looks reassuring. `pdftotext -layout` yields **1,535 bytes** and plain `pdftotext` **505** — both of them BMJ stamp and page furniture, **both containing zero content**; the two figures differ by extraction mode, not by version, and **neither is the document**. So the `.txt` looks like a real extraction and contains **none** of the tool — `grep -ci helmet` returns **0** while the tool's *"Remember"* box says *"Do not remove helmet (if present) or other equipment."* **Two agents and a coordinator drew a false negative from that zero.** Render with `pdftoppm` and read the pages. | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2024/02/Concussion-tool-CRT6.pdf) |
| `carha.txt` | ⚠️ **CARHA Hockey Official Rule Book, PRINTED 2020, 99pp — added at round 53's fourth gate pass, after five documents had cited it with the book in NO reproducible source.** Its only record was a row in `project/verification/link_baseline.tsv`. A `rules-verifier` fetched it and located **seven corpus quotations verbatim** — Rules 66(b), 73(d), 39(b), 65(a), **65(b)/(c)**, the red-line-off-side signal and Section Seven item 16 — so the claims were never unverifiable; the book was unregistered. ⚠️ **Two more verified 17 September, after three separate reviewers had each re-derived them from scratch — recorded here so a fourth doesn't have to**: **Rule 37(e)** (goaltender centre-red-line participation, a Minor, no skate-position test — `carha.txt:1811-1813`) and **Rule 58(b)** (goaltender freezing behind the goal line with the body entirely outside the crease, a Minor, no privileged-area concept and no four-trigger structure the way USA Hockey's parallel rule has — `carha.txt:2812-2817`). **Rule 61(b)** (handling the puck to cause an unnecessary stoppage, no location condition) is also quoted correctly in the corpus but was not independently re-verified against this extraction on 17 September — flagged here as a candidate for the next reviewer who touches this area, not as confirmed. **Governs CARHA-affiliated leagues only, and is never a general rec-hockey standard.** Extracts cleanly with `-layout`. ⚠️ **The 1,008,517 bytes byte-identical to the link baseline is the PDF's size, not the extraction's** — `carha.txt` is 206,667 bytes. The sentence used to place that figure where it read as the extraction size. <br><br> ✅✅ **PROVENANCE TESTED 24 September 2026, AND IT WAS THE LARGEST DECLARED GAP IN THE CORPUS — five successive commit gates named this extraction as untested, two of them having blocked on a CARHA limb.** The PDF was **refetched from the publisher URL and is BYTE-IDENTICAL to the link baseline at 1,008,517 bytes**, so the file at that address has not moved. **99 pages, and NO PAGE WHOSE RULE TEXT IS IMAGE-ONLY.** ⚠️⚠️ **STATED THAT WAY ON PURPOSE — THE FIRST DRAFT OF THIS ROW SAID "ZERO IMAGE-ONLY PAGES" AND "nothing in this book that a grep cannot reach", AND BOTH WERE FALSE.** A per-page census with a 40-character floor **cannot tell a text page from a furniture-only page**, which is exactly the `crt6.txt` mode this corpus has filed four false reports about. Measured properly with `-layout` (median **2,196** chars/page), **three pages fall under 300: page 1 (139, the title page) and pages 92-93 (170 and 106) — equipment-measurement DIAGRAM pages whose captions extract and whose FIGURES ARE IMAGES.** ✅ **No rule is lost: the limits those figures depict are stated in the rule text and are greppable** — stick dimensions at **Rule 21** (`carha.txt:983`ff, *"shall not exceed 63 in (1.60 m) from the heel to the end of the shaft"*) and goalkeeper equipment at **Rule 23** (`:1057`ff, *"Goalkeeper's pads shall not exceed 11 in (27.94 cm) in width"* at `:1096`). ⚠️ **So the conclusion survives for RULES and the original sentence's METHOD never supported it.** **A page-yield floor is evidence about extraction, not about coverage.** A fresh `pdftotext -layout` of the refetched PDF is **byte-identical to `carha.txt` (206,667) and flattened-identical**, so the extraction on disk faithfully represents the source. Spot-checked present in both: **52(b)** both limbs, **48(a)**, **55(a)**, **53(a)**'s match sentence and **66(e)**. ⚠️ **WHAT THIS DOES NOT PROVE, and it is the honest limit: byte-identity shows the file at THAT URL is unchanged since the baseline, NOT that CARHA has published no newer edition elsewhere.** The PDF's own `CreationDate` is 18 December 2024 (Ghostscript), for a book whose title page says **printed 2020** — a re-processing date, not an edition date. **Take the edition from the title page.** ⚠️ **A METHOD NOTE FROM THE CHECK ITSELF: the first comparison pass reported two rule fragments ABSENT FROM BOTH FILES.** That was the checker's own bug — the haystack was lowercased and the needles were not. **A case-sensitive needle against a case-folded haystack is a false zero that looks exactly like a missing rule**, and it is the fourth distinct false-negative shape this corpus has recorded. | [carhahockey.ca](https://carhahockey.ca/wp-content/uploads/2024/01/RuleBk-2020-interactive-1.pdf) |
| `heo_intl_drill_symbols.pdf` | **"International Drill Symbols"** — Hockey Eastern Ontario NCCP Development 1 clinic handout. The **player-symbol** authority for this corpus: `● ○ Forward / Player`, `▲ △ Defender / Player`. ⚠️ **Scanned. `pdftotext` yields the title and nothing else** — the key is image-only, so read the rendered page, never the `.txt`. | [hockeyeasternontario.ca](https://www.hockeyeasternontario.ca/media/ns2jrj0c/dev1_international_drill_symbols.pdf) |
| `ihuk_coaching_regs.txt` | ⚠️ **IHUK Coaching Regulations & Requirements 2026-2027 — added 22 September 2026 after TWO separate agents named its absence as the highest-value follow-up they could not reach.** 15pp, ModDate 8 Sep 2026, fetched from the **`2026/09`** path (the `2026/08` one also returns 200 with an older 358,330-byte revision — see the moved-path pattern above). Text-to-PDF **5.0%**, real text layer, greps honestly; `_layout` twin kept because §9.3 is a nested bullet list that plain `pdftotext` flattens. ⚠️ **WHAT IT SETTLES, AND IT IS A NEGATIVE:** §9 *Team Requirements* is scoped in terms to *"junior and senior teams, including **practices**, games, camps, and hockey schools"*. Within that scope §9.3 makes an *"ice hockey neck guard, properly secured… not altered"* **mandatory for the COACH's own on-ice PPE** — and the coach's duty toward **players** reads *"Coaches must ensure players wear approved **helmets and face protection, sticks, and gloves**, in line with Section 4"*, with skates, elbow pads and shin guards only *"wherever possible… (full kit recommended)"*. ⚠️ **THE NECK GUARD IS ABSENT FROM THE PLAYER LIST**, in the one document whose scope explicitly reaches training. **So this source does NOT extend the player neck-guard mandate to practice, and the corpus's cautious training disclosure STANDS — it is now a searched negative rather than a gap.** State the asymmetry; do not editorialise it into a duty the document does not write. Also: `jewel|earring|piercing|bracelet` scores **0**. §9.3 additionally requires 16–17-year-old Foundation Coaches to wear a neck guard and bars them from gameplay drills or scrimmages. | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2026/09/Coaching-Regulations-2026-2027.pdf) |
| `pwhl_rules.txt` | ⚠️ **PWHL Official Rule Book 2025-2026 — added 21 September 2026, and until now not on disk at all.** `body_contact_and_battles.md` quotes its Rule 52.1 (angling/bodychecking) and names this exact URL in its own Sources trailer, but a `rules-verifier` this session had to fetch the PDF live rather than finding it here. 188pp, `pdfinfo` marks it Producer *"macOS ... Quartz PDFContext"*, CreationDate 14 November 2025. **First download attempt was silently truncated** — `curl -sL` alone stopped at 10,720,448 of the 19,772,272 bytes `Content-Length` promised and left a PDF that `pdftotext` could open far enough to throw xref errors and produce nothing; `--retry-all-errors` on a second attempt got the full file. Both `pdftotext` (plain, 502,715 bytes) and `pdftotext -layout` (580,204 bytes, kept as `pwhl_rules_layout.txt`) were run. **Rule 52.1 extracts identically, word for word, under both methods** — checked by diffing the two files at the rule's location, not by grepping one: `pwhl_rules.txt:5027-5034` and `pwhl_rules_layout.txt:4602-4609` agree exactly, including *"In the PWHL, a form of Bodychecking is permitted. Players may angle their opponent by using their body in order to separate her opponent from the puck"* and the *"opposite-directional force"* clause the corpus quotes. ⚠️ **But the two extractions do diverge elsewhere in the book, the same species of fault flagged for `hc.txt` and `nhl_rules.txt` above:** the front-matter officials roster is set in three newspaper columns, and plain `pdftotext` reads down each column in sequence (`Jake Kamrass` immediately followed by `Jenn Berezowski`, who sits in the next row of the *same* column, not beside him) rather than across the row, while `-layout` reconstructs the columns correctly. **Use `pwhl_rules_layout.txt` for anything tabular; either file is fine for prose, including all of Rule 52 read so far.** The source prints curly quotation marks (*"Bodychecking"*, *"illegal hit"*); the corpus quotes them with straight ones — an ordinary typographic transcription that changes no character `check_quote_drift.py` compares, since it matches on alphanumerics only. ⚠ **STALE AS OF 23 SEPTEMBER 2026 — this said *"Nothing beyond Rule 52.1 has been read against this file yet"* while a single day's waves read roughly THIRTY of its rules.** Verified against primary text on 23 September, by several agents independently: **1.7, 1.8, 9.6, 10.3, 10.4, 11.9, 25.1, 27.6, 42.1, 43.1–43.5, 49.2, 51.1/51.2, 55, 56.1, 58.1, 58.3, 58.4, 61.1, 63.1/63.3/63.5, 65.2, 65.6, 65.8, 70.3, 71.1–71.7, 72.3, 72.7, 76.1, 78.5, 78.7, 83.1–83.4, 84.1, 84.2, 85.1, 85.3, 85.4, 88.6, 89.1 and Reference Table 14.** ⚠ **Everything else in the book remains unread — and a scope sentence in THIS file goes stale in the direction that flatters the next agent, which is why the list is enumerated rather than summarised.** <br><br> ⚠⚠ **RENUMBERING, MEASURED 23 SEPTEMBER — THE SINGLE MOST USEFUL FACT ABOUT THIS BOOK.** It tracks the NHL but **renumbers from Rule 52 onward by a VARYING offset**, so a search by the NHL's rule number finds it for contact fouls and **silently misses it for everything else**. NHL 41/43/44/48/50 are **identical**; **52 Body Checking is INSERTED**; then 55→56, 57→58, 60→61, 61→63, 63→65, **69→71**, 70→72, 74→76, 76→78, 81→83, 83→85, 86→88, 87→89. ⚠ **Rule 27 keeps its number while the SUB-number shifts (NHL 27.7 → PWHL 27.6).** ⚠ **PWHL Rule 69 is a real, different rule — *Handling Puck* — so a stray "Rule 69" citation lands on the hand-pass rule rather than missing.** <br><br> ⚠ **EXTRACTION TRAPS, all hit live on 23 September:** this file uses **EN-DASHES** (`face–off`, `shoot–in`, `on–side`) and curly quotes, so a straight-hyphen or straight-quote grep returns a **false zero**; the text is in the **feminine**, so a pattern built on *his/he* misses it; and **Reference Table 14's result column interleaves mid-phrase**, so a row and its result must be paired **positionally, by eye** — `check_quote_drift.py` scores those rows NOT FOUND for the NHL **and** the PWHL, a false signal in both directions. ⚠ **The table IS readable in this plain extraction, split across lines; `_layout` is needed for the PAIRING, not for the text.** ⚠️⚠️ **DATING TRAP, MEASURED 22 SEPTEMBER 2026: ELEVEN PAGES CARRY THE PRIOR EDITION'S RUNNING HEADER.** `grep -oE "PWHL Official Rule Book [0-9 –-]+" sources/pwhl_rules.txt | sort | uniq -c` returns **11 × `2024 – 2025`** against **172 × `2025 – 2026`**, and the `_layout` twin gives the page numbers: **1, 6, 11, 28, 53, 74, 91, 97, 101, 120, 143**. The title page reads `2025-2026`, so the book on disk **is** the 2025-2026 edition and those eleven headers are the publisher's own stale furniture. ⚠️ **Page 74 is Rule 42, CHARGING** — a rule this corpus cites. **A verifier who quotes from one of those eleven pages and takes the edition from the running header above it will date the book a full season wrong**, and the citation will look impeccable. **Take the edition from the title page, never from a running header.** Same species as the three disagreeing version stamps recorded for the EIHL Casebook. | [assets.contentstack.io](https://assets.contentstack.io/v3/assets/bltebdb4296e05d53db/bltb8440fe08a5e6dc5/69178cd0a582d7db321ad107/2025-2026_PWHL_Rulebook.pdf) |

---

## Resolved: the IIHF edition gap

### IIHF Official Rule Book 2025/26 Version 1.1, July 2025 — obtained 30 July 2026

`iihf_rules.txt` **is now v1.1**, the edition the In-House Rules adopt. v1.0 is
kept alongside as `iihf_rules_v1.0.txt` so the comparison can be redone.

**Where it came from, and why that matters.** ✅ **Resolved 28 August 2026 — the
instruction below came due and has been acted on.** The IIHF *does* publish
v1.1, from its own server, at a path nobody had tried:

    https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/3_the_iihf/2025-26_iihf_rulebook_22122025-v1.pdf

200, 11,795,028 bytes, 228pp, MD5 `ca5e829a949581491ddf435d92e98af5`, marker
*"IIHF Official Rulebook 2025/26 – Version 1.1, July 2025"*. **It is
publisher-original**: Producer `Adobe PDF Library 18.0`, against the mirror's
`GPL Ghostscript 10.00.0`. ⚠️ Note the path is `3_the_iihf/`, **not** the
officiating path, and the filename says `-v1` while the document says 1.1 —
which is why it went unfound for so long. The officiating-section link the
corpus used to cite still serves **v1.0**, and the rulebook index pages sit
behind a Cloudflare bot challenge.

**The history is kept because it is the provenance story, not because the file
is still in use.** Until 28 August 2026 the v1.1 copy here was the **Royal
Belgian Ice Hockey Federation's** mirror:

    https://assets.rbihf.be/files/u/medical/e913d88111eb7abbd52d8c771a25d749.pdf

That was weaker provenance than the IIHF's own server, and it was verified on
receipt rather than trusted — the standing doubt being that *a doctored mirror
would reproduce perfectly against itself*. ✅ **That doubt is now closed, and
the mirror is exonerated**: a sentence-set comparison of the official file
against the mirror-derived text leaves **zero unmatched prose**. ⚠️ **Two passes were run and the
counts are not comparable:** a strict one whose **28** residuals were all hand-checked and were every
one a running-header split, and the looser whitespace-normalised pass reported below, whose **172**
residuals were sampled rather than exhausted. **Both agree; only the first was audited in full, and
the count depends entirely on the normalisation — a third method gives 153/110. Say which you used.**

⚠️ **Do not go back to the mirror.** It is a Ghostscript re-distillation whose
broken `fi`/`fl` ToUnicode map is what makes the ligature repair below
necessary.

⚠️ **AND THE FILE ON DISK AT `sources/iihf_rules_v1.1.pdf` IS THAT MIRROR, NOT THE
PUBLISHER-ORIGINAL DESCRIBED ABOVE.** Verified 1 September 2026: it is **3,928,725
bytes** and its XMP says `pdf:Producer='GPL Ghostscript 10.00.0'`, against the
publisher file's **11,795,028 bytes** and `Adobe PDF Library 18.0`. **The filename
implies otherwise and that is the hazard** — anyone re-running the `pdftotext`
command below reproduces the Ghostscript text, ligature bug included, while
believing they have re-extracted the publisher's own file. **This is a provenance
and naming defect, not a content one:** the mirror is exonerated above on a
sentence-set comparison leaving zero unmatched prose, and `iihf_rules_v1.1.txt`
still carries its documented MD5 `b8bc551aef36ed127887e24d5a80d76e`. **The fix is
to fetch the publisher file and re-extract, or to rename this one to say what it
is. Neither has been done.**

**Tested, not assumed** (28 August 2026 — the claim above used to be an
assertion, and `commit-gate` was right to say so). The publisher-original was
refetched, `-layout` extracted and compared against the on-disk text:

- **Zero mojibake.** `grep -c '昀'` returns **0**, against the mirror's 725
  before repair. So the ligature repair below is **not needed** for it.
- **Prose matches.** A whitespace-normalised sentence-set comparison over ~2,500
  sentences leaves 94 publisher-only and 78 disk-only. Sampled, those are
  table-of-contents dot-leaders, running headers and page furniture — **not rule
  text.** ⚠️ *All 172 were not hand-checked; that is the limit of this claim.*
- ⚠️ **It is cleaner, not clean.** The publisher-original keeps **two genuine
  Unicode ligatures** (`ﬁ`, U+FB01) that the repaired mirror text does not —
  which is why it counts 81 occurrences of *"first"* where the on-disk file
  counts 82. **A grep for `first` misses one of them.** That is a different
  failure mode from the mojibake, not an absent one, and it wants a two-token
  normalisation rather than the 725-token repair below:

      python3 - <<'EOF'
      import pathlib
      p = pathlib.Path("sources/iihf_rules.txt")
      p.write_text(p.read_text().replace("\ufb01", "fi").replace("\ufb02", "fl"))
      EOF
      grep -c 'ﬁ' sources/iihf_rules.txt   # must be 0

  **The general lesson is the one this file already teaches twice: a negative
  grep against an extraction is only as good as the extraction.**

**What the comparison found:**

| Check | Result |
|---|---|
| Rule numbers | ⚠️ **CORRECTED 1 Sep 2026 — this read "472 in each, identical sets" and is wrong on both counts.** **472 in v1.1, 470 in 2026/27.** Removed: **102.5, 102.6, 102.7, 202.7**. Added: **46.14, 46.15**. **The substantive half stands — nothing is RENUMBERED**, and no corpus citation dangles on a removed number (the corpus cites 102.1 only). |
| ⚠️ Appendix IV table numbers | **THIS is where the −2 shift lives, and it starts at Table 9, not at any rule.** Old Tables 5/6/7 merged into one Table 5, so Table 9 and above shift by −2 — e.g. *"can be found in Table 13"* (v1.1) → *"Table 11"* (2026/27). Eleven rules' cross-references move in lockstep (16.2, 19.1, 19.4, 23.8, 24.8, 25.3, 27.8, 69.1, 69.3, 69.4, 84.3), which is the evidence it is systematic and not extraction noise. ⚠️ **A claim that "everything from Rule 22 shifts by −2" circulated in briefs this session and is FALSE** — it conflated table numbers with rule numbers. ⚠️ **NAME THE GOALKEEPER-INTERFERENCE TABLE EXPLICITLY, because a verifier citing it by number lands on the wrong rule:** it is **Table 16 in 2025/26** (`iihf_rules_v1.1.txt:9799`) and **Table 14 in 2026/27** (`iihf_rules_2026-27.txt:9899`) — and in the 2026/27 book **Table 16 is Rule 84 Overtime** (`:10278`) — ⚠️ **and WORSE: the appendix there runs …13 (Rule 19), **14 (Rule 69)**, **15 (Rule 84 Overtime, `:10210`)**, **16 (Rule 84 Overtime, `:10278`)**, so a bare "Table 16" resolves silently to ONE OF TWO Overtime tables.** **A bare "IIHF Table 16" against the current book resolves SUCCESSFULLY, to Overtime.** ⚠️ **And the NHL's Table 14 is a DIFFERENT table, unaffected by any of this — do not "correct" an NHL table number to match.** Verified independently by two agents in round 58; `rink_map_and_glossary.md` already states it correctly. |
| 27.7 / 27.8 | Restricted area still 27.7; 27.8 still "Infractions – Unique to Goalkeepers" |
| 201.1 | Identical, heading included — the junior-ejection reading holds |
| Corpus quotations from the IIHF book | **49 of 49 present verbatim** |

No claim in the corpus rested on a superseded revision. The gap `uk_rules.md`
disclosed for two rounds is closed.

**One extraction trap, recorded because it nearly produced six false findings.**
The Belgian PDF subsets its fonts differently, so `pdftotext` renders the `fi`
and `fl` ligatures as the CJK codepoints for 725 characters. Raw, that makes
"official" read as "of[..]cial" and "five (5)" as "[..]ve (5)" — and a diff
against v1.0 then shows spurious differences in exactly the passages containing
those letters. The extraction here is repaired. **Any re-extraction must repeat
that substitution.**

### ✅ The NHL Situation Handbook is NOT publicly obtainable — searched properly, recorded as a fact

Two agents named fetching it as *"the single highest-value thing outstanding"*, and it recurred as an
open task for several rounds. **It was searched properly on 29 August 2026 and it is not there.**
28 URLs across 12 hosts. Four converging lines of evidence:

1. **Search engines return only IIHF documents.** Bing on `"NHL Situation Handbook"` → *"About 49
   results"*, **every one the IIHF's**; Brave → **exactly one result**, the IIHF PDF. Every hit is the
   IIHF Foreword sentence crediting the NHL, not an NHL document.
2. **scoutingtherefs.com**, which indexes rules for NHL/AHL/ECHL/IIHF/Hockey Canada/NCAA/OHL/PWHL/
   QMJHL/SPHL/USA Hockey/WHL, returns *"Sorry, No Posts Found"* for "situation handbook".
3. **archive.org** item search for `"situation handbook" AND NHL` → **numFound 0**.
4. ⚠️ **The strongest signal — the NHL rulebook does not reference one.** `grep -i "situation
   handbook|case ?book"` over the NHL rulebook: **0 hits.** For contrast: the IIHF Rulebook
   references its Situation Handbook **3** times, USA Hockey's rulebook references its Casebook
   **5** times. **A league that publishes a companion case book says so in its rulebook.**

**One unresolved lead:** a Quizlet page titled *"NHL Rules Situation Handbook 2024-2025 Study Guide"*
403s to `curl`. User-generated and not citable — but consistent with the document existing as an
**internal, officials-only** publication, which is the likeliest explanation.

⚠️ **This does not prove non-existence** — only that it is undiscoverable through public search, the
league's own web surface, an officiating aggregator and the internet archive. **Stop re-opening it as
a task; reopen it only if a primary source cites it.**

⚠️ **And note the soft-404 trap it surfaced: fifteen `nhl.com` URLs returned HTTP 200 while serving
`/errors/not-found`, every one at an identical 107,973 bytes.** A status-code-only check would have
called all fifteen live.

### ✅ NHL rulebook provenance, independently confirmed

The PDF was refetched (MD5 `14a2e6c15d90796026aee8320afc698f`) and both extractions reproduced
**byte-identically** to the files on disk: plain → `5b0ef3b928ea772fa5f8bc1a7ece577e` =
`nhl_rules.txt`; `-layout` → `e486306f16206e739b97bc87eeaed1d3` = `nhl_rules_layout.txt`. **Both are
faithful**; the `huh.pdf` column-splicing problem does not apply here.

⚠️ **Greppability trap in this book:** `"hand, leg, foot, arm, or stick"` **does not grep** — the list
breaks across a line after `"leg,"`. Use `"using his hand, leg,"` or `"foot, arm, or stick, etc.)"`.

⚠️ **THE EIHL CASEBOOK IS NO LONGER "NOT OBTAINED" — corrected 22 September 2026.** It was
fetched that day: `https://www.eliteleague.co.uk/casebook` (HTTP 200) links a PDF,
*Motorpoint EIHL Casebook 26-27*, 690,498 bytes, **27 pages**, **46,281 chars of real text layer —
it greps honestly, no positional read needed**.
⚠️⚠️ **THIS ENTRY SAID "8 pages" AND DERIVED "~5.8 KB/page" FROM IT. BOTH WERE WRONG** —
`pdfinfo` reports **27**, so the real density is ~1.7 KB/page. **The conclusion held and the
arithmetic did not.** ⚠️ **The coordinator copied "8" out of a report without checking it and then
COMPUTED A SECOND FIGURE FROM IT — the exact failure this file exists to prevent, committed in the
file that warns about it. Corrected 22 September 2026 by an agent that ran `pdfinfo` itself.**
⚠️⚠️ **AND LATER THE SAME DAY THE MECHANISM WAS FOUND, WHICH MATTERS MORE THAN THE CORRECTION.**
**`file -b sources/eihl_casebook.pdf` reports `PDF document, version 1.4, **8 pages**`.
`pdfinfo` reports `Pages: **27**`.** ⚠️ **BOTH REPRODUCE ON DEMAND.** `file` reads a linearisation
hint near the front of the PDF; `pdfinfo` walks the page tree. **For this file they disagree by a
factor of three.**
⚠️ **So the original wrong "8" was almost certainly not carelessness — it was a TOOL THAT ANSWERED
CONFIDENTLY AND WRONGLY, and nothing in its output says so.** **Use `pdfinfo` for a page count.
Never `file`.** **A figure taken from `file -b` and then divided into a byte count produces exactly
the "~5.8 KB/page" that had to be retracted here.** Its
Preamble states the interpretations *"will replace or in specific cases, supersede"* the IIHF
ruling, and that for rules it does not mention the IIHF book governs.
⚠️⚠️ **THIS PARAGRAPH IS SUPERSEDED AND WAS SELF-CONTRADICTORY WHEN WRITTEN — corrected
22 September 2026.** It said the Rule 9 equipment sections *"(9.5 and 9.12) HAVE BEEN READ"* and
then listed **9.12 among the sections that had NOT been read**, in the same sentence. ⚠️ **An agent
acting on the "not read" half re-read 9.12 from scratch — the routing failure this file exists to
prevent, caused by this file.**
✅ **THE CASEBOOK HAS NOW BEEN READ END TO END**, by an agent that read all 1,008 lines of the layout
extraction rather than reconciling two partial coverage lists — *"I have personally read all 1,008
lines, Preamble through Section 11."* **`content/foundation/uk_rules.md` records the read scope and
is the owner of that claim; do not restate a section list here, because a list goes stale and a
pointer does not.** ⚠️ **IT IS NOW IN `sources/`, AND REGISTERED — 22 September 2026.** `eihl_casebook.pdf`,
`eihl_casebook.txt` and `eihl_casebook_layout.txt`, with an entry in `scripts/fetch_sources.sh`
and `eihl_casebook` added to `DUAL_EXTRACT`. **Text:PDF ratio 6.70%** — a healthy text layer, so it
greps honestly and needs no positional read. ✅ **REFETCHED AND RE-VERIFIED 23 September 2026 — CURRENT,
and the three-version-stamp worry is CLOSED.** Both cited URLs served HTTP 200 with no redirect; the
document is **SHA-256 byte-identical** to the copy on disk (690,498 bytes) and fresh `pdftotext` and
`pdftotext -layout` output is **byte-identical to both extractions**. The League's page reads
*"Last updated: 08.09.26"* and carries **exactly one** document link — **there is no Version 1.2.**
✅ **The front-matter VERSION TABLE resolves the stamps, in the corpus's favour:** it names
**1.1 080926 as REPLACING 1.0 010826**, *Valid From* **09/26–07/27**. **So the 27 page footers
(`SECTION D VERSION 1.0 010826`) are stale boilerplate and the PDF `Title` metadata is a typo — the
file on disk is the current Section D.** ⚠️ **This entry and `scripts/fetch_sources.sh` both used to
say "if the footers are right, a superseded Section D is what is on disk." That was the corpus being
LESS CONFIDENT THAN THE EVIDENCE SUPPORTS — a direction non-negotiable 4 does not protect against.**
✅ **Six claim families re-verified against the FRESH extraction and all hold:** Rule 64's plain minor
(the whole section greps **zero** for `10`, `misconduct`, `2 plus` outside the footer), the **absence
of any Rule 76** (headings jump **69 → 77**, and a sweep for the ACT — `facingoff`, `dropthepuck`,
`stickblade`, `sticksonice`, `winthedraw`, `encroach` — scores **0** for each, with all five
`face-off` hits non-procedural), the Preamble routing unmentioned rules to the **2026-27** IIHF book,
Rules **37/38** keeping video review and the Coach's Challenge, the Rule **69** addition and its three
criteria, and Rules **9.5/9.12**. ⚠️ **IRREDUCIBLE LIMIT: the Preamble says in-season interpretations
go out *"by email, on the EIHL web site and in print"*. The site carries nothing newer; an
EMAIL-ONLY bulletin to clubs is invisible to every check available here.** ⚠️ **And a SECOND instance
of this book's numbering defect was found: its contents list prints Rule 42 TWICE, for Charging and
for Elbowing** — alongside the 46.2 duplication already recorded. **A faithfully quoted book can still
be internally wrong.** ⚠️⚠️ **THIS ENTRY CARRIED A FALSE MEASUREMENT FOR A FEW HOURS ON 22 SEPTEMBER 2026 AND IT IS
RETRACTED HERE.** It said Rule 86.6's warm-up provisions *"line-wrap in the plain extraction"* so
that a grep for *"Any violations of game rules that occur during the warmup"* returned **ZERO**
there. ⚠️ **It returns 1 in BOTH files.** Flattened to alphanumerics both extractions are **36,090
chars and character-identical from offset 1373 to the end** — either file greps identically for any
rule, and a raw multi-word grep is defeated by line breaks in **both**, equally. **The coordinator
wrote it as a measured fact, in bold, and carried it into three files; an agent that actually ran
it refuted it the same day.** ⚠️ **A measurement nobody ran is not a measurement — and this entry
is the file that exists to say so.**
⚠️ **DUAL EXTRACTION IS STILL WARRANTED, FOR THE REAL REASON:** the two differ at offsets
**88–1373 — the front-matter VERSION TABLE**, whose cells extract in a different order in each.
**That table is the evidence for the three disagreeing version stamps**, so losing either
extraction loses the ability to read it. **Nothing in the rule sections needs the twin.**
⚠️ **Before this, it was cited in eleven places across three documents and had been read by
nobody**, and it was **one click away**: the homepage has no rules link, but About → `/the-eihl`
lists the Casebook in its submenu and that page links the PDF directly. **The lesson is not
"fetch harder" — it is that *"no source on disk supports it"* was read as *"label the claim"*
when the correct move was to go and get the document.**
⚠️ **Measured in it, flattened:** `rule27`, `restrictedarea`, `trapezoid`, `check` and
`checking` all return **ZERO** — so it sets **no body-checking age** and does not touch IIHF
27.7. It is a **playing-rule document, not a Rules of Competition**, so it does not settle the
EIHL checking question either way.
⚠️⚠️ **THREE VERSION STAMPS DISAGREE, not two:** page **footers** read
`SECTION D VERSION 1.0 010826`; the **version table and link text** read `Version 1.1 080926`; and
the **PDF `Title` metadata** reads `[PUBLIC] EIHL Casebook 26 - 27 Version 1.0 080926` — a third
variant, mixing 1.0 with the September date. **Unresolved. Do not treat any of them as
authoritative without asking the League** — ⚠️ **and note the consequence: the wrong stamp could
mean a superseded rule was read.**

⚠️ **MEASURED IN IT, and both are negatives the corpus depends on:** `chin strap`, `chinstrap`,
`cm` and `certif` all return **ZERO** — so *"only the two British documents attach the 2.5 cm"* and
*"no British certification mark exists to check for"* **both survive** the arrival of a new British
document.

**Still not obtained:** any EIH or SIHA Rule Bulletin — the
In-House Rules say bulletins are issued from time to time, and none has been read.
The NHL's own Situation Handbook is also not here, which is why no NHL casebook
interpretation is quoted anywhere in the corpus.

---

## ⚠️ The IIHF published 2026/27 books, and the faceoff regime changed

**Found 29 August 2026**, by an agent auditing link *targets* rather than link liveness: the live
IIHF hub announces *"The International Ice Hockey Federation has published the 2026/2027 IIHF Rule
Book for the upcoming season."* Both PDFs are live and both are now on disk.

⚠️ **The corpus's IIHF layer is 2025/26 across 13 documents.** The IIHF book is the base rule set
at **every level of British hockey**, so this is not a footnote — it is the primary book for one of
the corpus's two named audiences.

**Rules 76.6 and 76.7 were compared. They changed, and the change reverses a load-bearing claim:**

| | 2025/26 v1.1 | 2026/27 v1.0 |
|---|---|---|
| **76.6** encroachment by a non-taker | *"the offending team taking the 'face-off' **shall receive a warning** for a 'face-off' violation"* | *"the offending team's player taking the face-off **shall be ejected from the face-off circle**"* |
| **76.6** position-establishment violation | *"the Linesperson shall **assess a warning**"* | *"the Linesperson shall **order the center of the offending team replaced**"* |
| **76.7** premature movement / unfair drop | *"**A warning shall be issued to the offending team** and the 'face-off' must be conducted again"* | *"…and it must be conducted again"* — **warning sentence deleted** |

**The IIHF has adopted the NHL's ejection regime.** `faceoffs.md` teaches the opposite as its
British throughline — *"nobody is ejected from a draw in British hockey"* — in its **Overview**, in
**Key Takeaway 2**, and as concrete coaching advice (*"no reason to keep a simple back-up plan in
reserve for a winger in the dot"*). `center.md` and `special_teams.md` each carry it in a ```facts```
line read aloud standalone.

⚠️ **The corpus was not fabricating.** Every one of those citations names *"IIHF Official Rule Book
2025/26"*, and `faceoffs.md`'s verification note dates the reading to 29 July 2026 — it accurately
describes the book that was current when it was written. **This is an edition-currency failure, not
an accuracy failure**, and it is a class the repository had never recorded before: not a link that
rotted, not a source that mutated in place, but **a source that was superseded on a season
boundary while the corpus kept citing it correctly.**

**Three further changes, found when the caveat was written — the first pass understated it:**

| Rule | 2025/26 | 2026/27 |
|---|---|---|
| **76.3(VI)** skate-win | *"may assess a warning"* | *"shall have the offending center(s) **replaced immediately** prior to dropping the puck"* |
| **76.4** improper position | *"may assess a warning"* | *"may **order the Player replaced** for that face-off by any teammate then on the ice"* |
| **76.4** post-icing | *(absent)* | ⚠️ **GAINED the NHL's carve-out** — *"When an icing infraction occurs, the first face-off violation by either team will not result in the center being removed…"* |

⚠️ **That last one falsified two more corpus claims** — that the IIHF has *"no post-icing carve-out"*
and that the word *"appears nowhere in IIHF Rule 76 at all."* Both were **true of 2025/26** (zero
hits for "eject" in its Rule 76) and are **false of 2026/27** (four). **The British architecture
inverts**: the free first violation is no longer on every draw, it is rationed to post-icing draws,
exactly as in the NHL.

**Verified UNCHANGED across the two editions**, so the corpus's claims about them stand: 87.1
time-out bans, 76.4's stick-placement order, 76.7's two-violation bench minor, 82.2(VII)'s lateness
carve-out, the skate-win violation itself, and the IIHF's own stray-quote typo in 76.7.

### ✅ And the British question is settled — IHUK adopted it, and went further

An agent closing this work named fetching the **2026-27 IHUK In-House Rules** as *"the single
highest-value thing outstanding"*, because the 2025-26 edition adopts the IIHF book **by name**, so
nothing on disk proved which edition British hockey is actually played under. **It was obtained on
29 August 2026 and it settles the question twice over:**

1. ⚠️ **The document contradicts ITSELF about which IIHF edition it sits on, and that must not be
   resolved by picking the half you prefer.** Its **cover page** reads *"in conjunction with the
   **Current** IIHF Rule Book"* (2025-26's cover named *"the 2025–26 IIHF Rule Book"*). But its
   **Introduction** reads *"IHUK and BUIHA adopt the latest IIHF Official Rule Book **(Version 1.1,
   published July 2025)** as the foundation"* — **and Version 1.1, July 2025 IS the 2025/26 book.**
   So the In-House Rules are **NOT** evidence that British hockey is on the 2026/27 IIHF book.
   ⚠️ **The coordinator asserted they were, and was refuted by the agent sent to act on it** — that
   conclusion would have been fabricated into twelve places.
2. ⚠️ **But IHUK wrote the change into its own rules, which makes the edition question irrelevant
   here — a stronger result than the one I claimed.** The 2025-26 edition has **no Rule 76 section
   at all**; the 2026-27 edition adds one: *"With the exception of face-offs following icings, the
   linesperson shall **immediately replace the centre for all violations**."* **The replacement
   regime and the post-icing exception, in the British governing body's own words, whichever IIHF
   book sits underneath.**

⚠️ **CORRECTED 1 September 2026 — the previous sentence here was WRONG, and the corpus was right.**
It read *"It also confirms the stick-order change independently"*, listed among IIHF 2026/27 changes.
**There is no IIHF rulebook stick-order change to confirm.** `iihf_rules_v1.1.txt:6239` and
`iihf_rules_2026-27.txt:6337` carry the identical sentence — *"At the eight (8) face-off spots
(excluding center ice face-off spot), the defending Player shall place their stick…"* — verified
flattened, in both editions.

**What IHUK actually did is write its own rule**: *"**Either centre can now put their stick down
first** for a face-off"* (`eiha_inhouse_2026-27.txt:422-423`), and the word *"now"* is IHUK flagging
its own change, not the IIHF's. **So it is a British departure, which is exactly what the corpus
says.**

⚠️ **The direction of this error is what makes it worth recording: a reader trusting this file would
have reported `faceoffs.md`'s correct sentence as a defect.** A wrong entry in the source record does
not merely fail to help — it manufactures work against text that is right, and this project has
already spent a round on a divergence that did not exist.

⚠️ **One partial qualification, running the other way.** The 2026/27 **Situation Handbook** did move
at Situation 76.53: *"This rule gives the attacker an option to put their stick down second. However,
if the attacker chooses to put their stick down first, the linesperson should allow this."* The v1.1
handbook's 76.53 is entirely different material. **So the rulebook is unchanged, the interpretation
layer softened partway, and IHUK went further still** — three layers, three positions.

**So the hedge is no longer needed for the faceoff material** — not because the edition question
was settled, but because IHUK answered the faceoff question directly and the edition stopped
mattering. ⚠️ **The edition question itself remains open and cannot be settled from this document**;
it needs a Rule Bulletin, a later revision, or IHUK.

⚠️ **This does not clear the rest of the British layer.** `uk_rules.md` is built end to end on the
**2025-26** In-House Rules and the **2025/26 v1.1** IIHF book, and says so at its line 34. That
migration is open.

⚠️ **Only Rules 76.3, 76.4, 76.6, 76.7, 82.2 and 87.1 of the IIHF book have been checked.** A normalised comparison of twenty further rules the
corpus leans on — 63.2, 55.1, 56.4/56.5, 52.2, 57.3/57.4, 83.3, 44.1, 42.1, 20.4, 10.1, 10.4,
24.8, 48.1, 61.1, 67.2, 69.1, 81.1 — found **every one textually identical** once running headers
and hyphenated line breaks were normalised away. ⚠️ **That is reassuring and it is not a clean
bill of health**: a first, naive comparison of those same rules reported *"seven of twelve
changed"* and **all seven were pagination artefacts.** The Situation Handbook 2026/27 has not been
compared at all.

---

## The IIHF Situation Handbook changed underneath its own URL

**Obtained 29 August 2026.** v1.1 had been recorded here as "never obtained" since
round 47. It was always obtainable — `fetch_sources.sh` line 37 has pointed at the
`...-v1_1.pdf` URL the whole time, and that URL served **v1.0** when the file on disk
was fetched in July 2026. It now serves **v1.1**. ⚠️ **The document behind the link
was replaced without the link changing**, so a re-run of `fetch_sources.sh` would have
overwritten `iihf_situations.txt` with a different book and shifted every
`iihf_situations.txt:NNNN` citation in `project/` — silently. That is why both editions
are now on disk under distinct names, and why the row above says so.

**A URL that resolved yesterday is not evidence that it resolves to the same document
today.** Nothing in the checker set can see this: `check_links.py` tests reachability,
`check_external_links.py` tests status codes. Neither compares content.

**What actually changed.** A line-by-line diff of the two extractions shows the whole
book is identical except for the two version stamps and **four rulings**:

| Situation | v1.0 | v1.1 |
|---|---|---|
| **63.19** — puck kicked off the foot, directly over the glass: does the delay-of-game minor apply? | *"No. Rule 63.2 (III) states that the player must have shot or batted the puck using the hand or the stick."* | *"Yes."* — bare, no rule cited |
| **20.4** — goal scored, then a reported infraction the Referees judge worth only a minor | *"The goal shall be allowed since only a minor penalty is assessed. Rule 32.4 and Rule 78.5."* | *"Goal is disallowed."* |
| **10.7** — a teammate nudges a dropped stick back along the ice | *"Common sense would dictate that since the teammate did not throw or shoot the stick… no penalty would be assessed."* | *"This is legal if the stick is intact and if the nudging of the stick does not interfere with an opponent in any way."* |
| **46** — third-man-in note, second fight not instigated | *"Team A would play one player shorthanded for 2 minutes."* | *"both teams would play at full strength."* |

⚠️ **63.19 is the one that reaches the corpus.** No document quotes Situation 63.19 by
number, but three teach its substance — that IIHF/NHL Rule 63.2(iii) names only *"hand
or stick"*, so a puck out over the glass off a **skate** is not that penalty. Under the
current Handbook that inference no longer holds for the IIHF. **And the Handbook now
contradicts its own Rulebook:** IIHF Rulebook v1.1 63.2(III) (`iihf_rules_v1.1.txt`
line 5143) still reads *"On any Player who shoots or bats (using their hand or stick)
the puck directly (non-deflected) out of the playing surface from their defending zone"*.
The Handbook's Foreword ranks itself below: *"in case of any contradictions, the valid
IIHF Rulebook is always the basis."* Recorded as a live disagreement between two current
official documents, not resolved in either direction.

**Every other Situation the corpus quotes is byte-identical across the two editions** —
63.27, 83.34, 67.6, 63.15 and 67.4 all verified unchanged, so those quotations stand.

## ⚠️ `page_1975` — on disk since 2 September 2026, cited by the corpus, and undocumented here until 22 September

**Pagé, Pierre (1975), *Biomechanics of Forward Skating in Ice Hockey*** — master's thesis, School of
Physical Education, Dalhousie University, September 1975. `sources/page_1975.pdf` (23,062,691 bytes)
and `sources/page_1975.txt` (122,789 bytes).

**It is the primary source behind `content/technique/skating.md`'s recovery-time claims** — the
0.37 s vs 0.48 s mean total recovery times, the 74.2% discriminant figure, the fourteen-subject
sample (six bantam, three university varsity, two recreational, three professional), the 16 mm
filming, and the corpus's disclosure that the thesis **contradicts itself** between pp. 55–56 and
p. 60. All of that has been verified against this file.

⚠️ **It had no entry here at all.** CLAUDE.md's rule is *"READ A SOURCE'S ENTRY IN `sources/README.md`
BEFORE CONCLUDING ANYTHING ABOUT WHAT THAT SOURCE CONTAINS"* — **an agent obeying that instruction for
Pagé found nothing, and the natural conclusion from an empty README is that the thesis is not held.**
That is the routing failure this file exists to prevent, reproduced in this file. A `source-verifier`
and the coordinator found it independently on the same day.

⚠️ **It is NOT in `scripts/fetch_sources.sh`** — `grep -c page_1975` returns **0**. So unlike every
rulebook here, **it cannot be rebuilt from a URL if it is lost.** The PDF on disk is the only copy,
and it is a scanned 1975 thesis, not a publisher download. **Treat both files as irreplaceable until
a retrievable source for them is recorded.**

**OCR quality: rough, and visibly so.** The first lines extract as `1)AL- MS5` and `?HYS .ED` —
library stamps and page furniture mangled. Alphabetic character ratio is 0.55 across 4,537 lines.
⚠️ **So a failed grep on this file proves nothing**; search for figures and for several spellings
before concluding a number is absent.

## Extraction

> ⚠️ **Two books are extracted BOTH ways, on purpose. Read this before trusting a grep.**
>
> `nhl_rules.txt` and `hc.txt` are plain `pdftotext`, and plain extraction **silently joins
> hyphenated line breaks** — measured 2026-08-29 as **88 corrupted word-instances across the two
> books, with zero survivals.** `face-off` becomes `faceoff`; `Off-Ice Officials` becomes
> `OffIce Officials`.
>
> **This cuts both ways and both have already happened.** Twelve corpus quotations are *verbatim
> correct against the book* and **cannot be grepped in the plain text at all** — a verifier gets
> zero hits and concludes fabrication. And a **negative-existence search for a hyphenated term
> returns a false absence**, in a corpus resting on 417 of them.
>
> **`nhl_rules_layout.txt` and `hc_layout.txt` are therefore generated alongside** (both
> gitignored like everything else here; `scripts/fetch_sources.sh` builds both — see its `DUAL_EXTRACT` list, which is real code, not a comment).
>
> ⚠️ **A SECOND, DIFFERENT LINE-BREAK TRAP — and switching to `-layout` does not escape it.**
> The hyphenation trap above is about breaks that *carry* a hyphen. **A `-layout` file also breaks
> lines with NO hyphen at all, in the middle of an ordinary phrase**, and no amount of
> hyphen-rejoining will repair that. Measured case: `grep "reasonable time to vacate"
> hc_layout.txt` returns **nothing**, because Hockey Canada breaks between `to` (line 3566) and
> `vacate` (3567). **The quotation is genuine and verbatim.**
>
> So the rule is not "use `-layout` and you are safe". It is: ⚠️ **any multi-word phrase grep can
> return a false absence in either extraction, and the only reliable search is over a
> whitespace-FLATTENED working copy** — build one in the session scratchpad, de-hyphenated and
> form-feed-stripped, and grep that. Several agents now do this by default; it is recorded here
> because the failure looks exactly like fabrication and has twice been reported as one.
>
> ⚠️ **`-layout` is NOT strictly better — do not "upgrade" by deleting the plain files.** It puts
> both halves of a two-column table on one physical line, so a left-column sentence stops being
> contiguous: **eleven quotations are greppable in plain and not in `-layout`** (NHL Rule 69
> Table 6, and four Hockey Canada glossary entries).
>
> **`-layout` is the authority for WORDING. Plain is the authority for SENTENCE CONTIGUITY inside
> two-column tables and glossaries. Check the other file before believing any negative.**
>
> ⚠️ **AND THERE IS A THIRD CASE, WHERE NEITHER FLAG HELPS — found 28 August 2026.** The IIHF's
> **Appendix IV, Table 16** (goalkeeper interference) interleaves its two columns **in both
> extractions**, because the interleaving is in the PDF's own text ordering rather than in the flag.
> ⚠️ **SCOPED, 2 September 2026: this is a property of `iihf_rules.txt` — the Ghostscript mirror —
> and NOT of `iihf_rules_v1.1.txt`.** In v1.1 the table extracts as clean side-by-side columns and
> **every row is legible on a single physical line**. The `sed`-range advice still stands for both;
> the *"cannot be grepped in any extraction"* framing does not apply to v1.1. Verified by reading
> Appendix IV in full in both files.
>
> Situation 6D's answer comes out as:
>
>     Goal is disallowed. A minor penalty is not assessed (loss of
>     A goalkeeper initiates contact with an attacking Player to
>     goal only). The announcement should be, "No goal due to
>
> The left column's next line is spliced into the middle of the right column's sentence. **So
> flattening cannot repair it either** — `"loss of goal only"` returns **zero** against
> `iihf_rules.txt` raw *and* whitespace-normalised, and so does the full 6D answer. The same phrase
> **is** greppable in `nhl_rules.txt`.
>
> ⚠️⚠️ **THIS SENTENCE READ *"…greppable in `nhl_rules.txt`, WHOSE REFERENCE TABLE 14 DOES NOT
> INTERLEAVE"* UNTIL 18 SEPTEMBER 2026, AND THE TRAILING CLAUSE WAS FALSE.** The 6D *phrase* is
> greppable; **the table is not clean.** Table 14 interleaves at **Situations 5 D and 5 E**, in
> **both** NHL extractions. Measured — the flattened 5 E sentence returns **NOT FOUND against
> `nhl_rules.txt` AND `nhl_rules_layout.txt`**, because the right column is spliced into the left:
>
>     E. An attacking player plants himself on Goal is allowed.
>        the crease line or outside the goal
>        crease, as to obstruct the goalkeeper’s
>
> ⚠️ **A true statement about ONE PHRASE was written as a general statement about THE TABLE**, and
> the generalisation is the error — the same species this file exists to catch. **It was found by a
> `rules-verifier` whose flattened search for a verbatim-correct corpus quotation returned zero**;
> had it trusted this line, it would have filed a fabrication report against a quotation that is
> **word for word right**. ⚠️ **The WHOLE OF TABLE 14 must be read POSITIONALLY, from the raw columns, exactly like the
> IIHF's Table 16 — never concluded absent from a grep.**
>
> ⚠️⚠️ **THIS WARNING NAMED ONLY 5 D AND 5 E UNTIL 18 SEPTEMBER 2026, AND THAT WAS TOO NARROW
> IN THE SAME WAY THE TEXT IT REPLACED WAS TOO BROAD.** **5 C interleaves too** — the flattened
> sentence *"An attacking player skates in front of the goalkeeper, outside the crease"* returns
> **NOT FOUND against BOTH NHL extractions**, because the row reads
> `C. An attacking player skates in front of  Goal is allowed.` ⚠️ **EVERY row of Table 14 carries
> the right column's first line on the left column's first line.** ⚠️ **And the corpus CITES 5 C** —
> three times in `goaltender.md` and once in a Sources trailer — **so a verifier following the old
> scope had a warning for two rows and none for the row next to them.** ***The previous text
> over-stated cleanliness; its replacement under-stated the interleave — the same species, in the
> other direction.*** **Scope it to the TABLE, not to a list of rows.**
>
> **What that means in practice.** The corpus's Table 16 quotations are **correct** — a human reading
> the interleaved text can reconstruct them, and 6D was read that way. ⚠️ **Its operative sentence —
> *"Goal is disallowed. A minor penalty is not assessed (loss of goal only)."* — is word for word the
> NHL's; the rest of the row is NOT.** The NHL announces *"interference with the goalkeeper"*, the IIHF
> *"Interference on the Goalkeeper"*. **Do not quote one book's announcement as the other's.**
>
> ⚠️ **What actually fails is any phrase that crosses a line wrap** — which is why
> `"loss of goal only"` returns zero while `"A minor penalty is not assessed (loss of"` returns one.
> **Read Table 16 with a line range, not a phrase grep:** `sed -n '9960,10055p' sources/iihf_rules.txt`
> prints it in full, and every row is legible in the `-layout` columns. Never "correct" a Table 16
> quotation on the strength of a zero-hit search — a verifier who greps and stops will report
> fabrication, and one nearly did.
>
> *(An earlier draft of this passage said these rows "cannot be verified by grep against any extraction
> obtainable here" and sent the reader to a browser. That was wrong, and it made the corpus look less
> evidenced than it is. A `sed` range answers it.)*
>
> ### ⚠️ THE LINE-WRAP FALSE NEGATIVE IS NOT CONFINED TO TABLE 16, OR TO THIS BOOK
>
> **Measured 4 September 2026.** A commit gate searched **both** IIHF editions for
> `grabbing hold of a face mask` — ordinary rule prose, **Rule 75.2(II)**, nowhere near a table —
> got **zero**, and came within one step of blocking a commit on it. **The phrase is there, wrapped
> between `face` and `mask`.** The same trap is on record for `fend off` in the USA Hockey Casebook
> (~`:18431`), which is a **third** book and a **third** context.
>
> ⚠️ **So this is a property of the extractions generally, not a quirk of one table.** Three books,
> three unrelated locations, three near-misses — and in each case the phrase searched for was a
> perfectly ordinary one that a reviewer had every reason to expect.
>
> ⚠️ **AND THE DIRECTION IS ALWAYS THE SAME: it manufactures ABSENCE.** A wrap never invents a hit; it
> only hides one. So every false negative of this class makes a rule look missing from a book that
> writes it — which, in a corpus that tells readers which rules their own book contains, is the
> dangerous direction. **On this occasion it would have shipped a clause telling British readers their
> book is silent on facemask-grabbing, in a section ending "Never touch a facemask."**
>
> **THE RULE: never report a phrase absent from an extraction on the strength of a phrase search.**
> Collapse whitespace first — `re.sub(r'\s+', ' ', text)` — **and** search a short distinctive
> fragment rather than the full phrase (`face mask` and `strength move`, not the sentence around
> them). **Run a positive control on the same file every time**, because a zero from a broken pattern
> and a zero from a genuine absence are indistinguishable in the output.
>
> **The general rule, now stated three ways because this file has been wrong about it twice:** the
> flag is not the whole story. Plain joins hyphens; `-layout` interleaves most two-column tables;
> and some tables interleave under both. **An extraction is a rendering, not the document.**
>
> ⚠️ **A fourth mode, found 29 August 2026 in IIHF Rule 10.4: page furniture spliced INTO a
> sentence at a page break.** Flattened, the text reads *"…until such time as they are legally*
> **`03`** *provided with a replacement goalkeeper's stick.* **`SECTION · EQUIPMENT`** *For an
> infraction…"* — the page number and the running header sit **inside the clause**. This defeats
> plain grep, `-layout` grep **and** a `sed` line window sized to the rule, because the paragraph
> straddles the break and simply **appears absent**. Only a whitespace-flattened read with a wide
> window recovers **that one**. ⚠️ **Flattening is not a general rescue:** in the USA Hockey
> Casebook's Standard of Play Situation 2 the running header sits **inside the sentence**, so a
> flattened search for *"and is considered a good defensive play"* returns nothing while
> *"A player may lift the opponent"* hits. **Flattening removes line breaks; it cannot remove
> words that were never a line break** — where the splice is a header rather than a wrap, only
> reading the window recovers the sentence. ⚠️ **It produced two readers with opposite wrong conclusions about the same
> intact text** — one reporting the rule truncated, one reporting the paragraph missing entirely —
> **while the corpus's claim about it was correct throughout.** Near a page boundary, treat
> "not present" as unproven until a flattened read has looked.
>
> ⚠️ **A FIFTH SHAPE, and flattening is powerless against it BY CONSTRUCTION — found 2 September 2026
> by an agent that had read every warning above.** Its flattened search for `five seconds`,
> `5 seconds` and `five (5) seconds` returned **ZERO** for Hockey Canada's line-change windows. **The
> text is present and intact** at `hc_layout.txt:3450` and `:3453`: the book writes the **hyphenated
> adjective** *"a five-second period"*, and breaks one instance across lines as *"this five- /
> second"*. Flattening rejoined the hyphen break and still found nothing, **because the phrase
> searched for was never the phrase in the book.**
>
> ⚠️ **The four modes above are all about the text being MANGLED. This one is about the searcher
> being WRONG** — a plural where the book writes a singular, a noun phrase where the book writes a
> compound adjective, a spelled number where the book writes a digit. **No normalisation can fix a
> query that does not correspond to any string in the source.** Caught only by reading Rule 6.1(d) in
> full rather than trusting the count. **The defence is the same as for `"reasonable time to vacate"`:
> read the rule, do not probe it.**
>
> ⚠️ **A SIXTH SHAPE — THE REGEX DIALECT. The searcher's tool is wrong, not the searcher's guess.
> Measured 9 September 2026.** `grep -i "cross ?bar" sources/usah.txt` returns **ZERO from a file
> containing four occurrences**. `?` is **literal in BRE**, so that command searched for the string
> `cross ?bar` — which is in no book. `grep -E` finds all four. ⚠️ **This produces a clean, confident,
> honestly obtained zero with no symptom whatsoever**: no error, no warning, and the command *looks*
> like a careful search that allowed for both spellings. **It is more dangerous than a mangled
> extraction, because a mangled extraction usually leaves a trace when you widen the window and this
> leaves none.** ⚠️ **Use `grep -E` for `?`, `+`, `|` and `()` — always.**
>
> ⚠️ **A SEVENTH SHAPE, AND IT IS THE ONLY ONE THAT RUNS IN THE DANGEROUS DIRECTION.** Every other
> mode here makes a PRESENT string look ABSENT, so its failure mode is a false "cannot verify" — the
> corpus stays as it is. **This one makes an ABSENT string look PRESENT, and its failure mode is a
> verifier "refuting" a correct sentence and an author then rewriting it.** Measured 9 September 2026:
> `content/technique/puck_handling.md` says *fend* appears nowhere in Hockey Canada. An **unanchored**
> substring search returns **249 hits in `hc.txt`** — every one of them inside **defend**, **offend**,
> **defenders**. Anchored, `\bfend\w*` returns **0** and the corpus is right. ⚠️ **ANCHOR EVERY
> SHORT SEARCH TERM WITH `\b`, and read the hits before believing a refutation** — this is the
> `CE mark` / `i-ce mark-ings` trap from elsewhere in this file, reproduced in the direction that
> actually damages the corpus. **The instinct on meeting a "refuted" claim is to rewrite it. Check
> the refutation first: a claim in this corpus is more likely right than the probe that attacks it.**
>
> ⚠️ **And a concrete line-wrap instance worth having by name.** `grep "Adult Male Classification"
> sources/usah.txt` returns **ZERO**. The phrase wraps after *"Adult Male"*. Flattened, it occurs
> **exactly once in the playing rules** (`usah.txt:5111`) and once in the Casebook, and both are
> **Rule 640(b)** — which is the whole basis for saying 640(e) carries no classification limb. **A
> raw grep would have made that finding unreachable.**
>
> ⚠️ **And mode four reproduces in `nhl_rules.txt`, the corpus's own baseline book — found 1
> September 2026.** A **whole page banner** sits inside a sentence of NHL Rule 80.1: flattened, it
> reads *"…comes into the possession and control of a player from"* **`NATIONAL HOCKEY LEAGUE
> Previous Page 121 Table of Contents OFFICIAL RULES 2025-2026 Next Page SECTION 10 – GAME FLOW`**
> *"the offending team…"*. So the corpus's NHL 80.1 quotation returns **zero** from a flattened
> `nhl_rules.txt` — and **the quotation is verbatim and correct.** ⚠️ **The three recorded
> instances are now in three different books (IIHF, USA Hockey Casebook, NHL), so this is not a
> quirk of one extraction — assume it in all of them.** The splice here is a full banner rather
> than a page number, which makes the gap wide enough that a reader skimming a flattened window
> can still miss the join. **Read the window.**

> ⚠️ **One book on this disk INVERTS the `-layout` rule, and it was nearly cited from the wrong
> extraction.** `huh.pdf` is a multi-column **brochure**, not a rulebook. `-layout` preserves the
> spatial columns and therefore **splices them together mid-sentence**: the passage the corpus quotes
> comes out as *"But when the head is flexed (chin toward the chest), **this which gives your neck the
> www.usahockey.com**"* — two columns interleaved, and the quoted clause **unrecoverable**. Plain
> `pdftotext`, which follows reading order rather than geometry, renders it intact.
>
> **So: `-layout` for the rulebooks' penalty tables; plain for anything set in columns.** Both
> extractions are kept here so the difference can be seen rather than argued.
>
> ⚠️ **How this nearly went wrong twice.** First, an agent cited the guide from a reading it made in
> its own scratchpad, and `sources/huh.txt` did not exist at all — **a cited book no later round could
> rebuild**, the exact defect recorded above for the USA Hockey Casebook. Second, the initial install
> here wrote the **`-layout`** extraction to `huh.txt`, in which the quoted sentence **cannot be
> found** — a verification against it would have reported the corpus's own quotation as absent. It was
> caught only because the two files came out **byte-identical in size**, which they could not both be.
> **Check the extraction reproduces the quotation before trusting an absence in it.**

⚠️ **THE 2026/27 BOOK CHANGED OFFSIDE, AND IT CHANGES CONDUCT.** Rule 83.1 gains two sentences the 2025/26 edition does not have, both converging onto the NHL's text: *"For the purposes of this rule, a 'skate' is to be considered the blade of the skate only"* (`iihf_rules_2026-27.txt:6936-6937`), and the puck-carrier carve-out now requires possession and control ***with their stick*** (`:6945-6946`) where 2025/26 required only possession and control. **Whole-book flattened counts: "blade of the skate" 0 in v1.1, 1 in 2026/27; "prior to their skates crossing the leading edge" 1 in v1.1, 0 in 2026/27.**

⚠️ **It reaches an IIHF-tournament reader now and a BRITISH reader only contingently** — `Rule 83` and the bare token `83` appear **0 times** in the IHUK In-House Rules, which adopt v1.1 by name and version, so the change arrives in Britain only if the In-House cover's *"Current IIHF Rule Book"* reading governs over its own Introduction. **That contradiction is unresolved and must not be resolved by preferring a half.**

PDFs are converted with `pdftotext -layout`, which preserves the column
structure the rulebooks use for penalty tables. Without `-layout` the tables
interleave and rule numbers detach from their text.

Re-extract one file:

```sh
# ⚠️ This recipe is for the MIRROR PDF, and is kept only to reproduce the file currently on
# disk. For a FRESH extraction use the publisher-original named in the table above: `pdftotext
# -layout` it and SKIP the repair below — it has zero mojibake. It does keep two U+FB01 ligatures;
# normalise those instead, per the two-token snippet in the edition note.
pdftotext -layout sources/iihf_rules_v1.1.pdf sources/iihf_rules.txt
# then repair the ligatures — see the edition note above
python3 -c "p='sources/iihf_rules.txt'; t=open(p).read(); open(p,'w').write(t.replace(chr(26112)+chr(26880),'fi').replace(chr(26112)+chr(27648),'fl'))"

# ⚠️ Those codepoints are U+6600 U+6900 U+6C00 — 昀 椀 氀. An earlier version of this
# line used chr(26176)/chr(26928)/chr(27668) (晀 椰 气), which are NOT what pdftotext
# emits, so it ran as a NO-OP and left 725 mojibake tokens across 96 words —
# including Official, first, five and fight. A negative-existence search against a
# text repaired that way returns ABSENCE FOR TEXT THAT IS PRESENT, which is the
# single most dangerous failure mode this corpus has. Verify after repairing:
#   grep -c '昀' sources/iihf_rules.txt   # must be 0
```

**A 403 is not an absence.** USA Hockey's PDFs need a browser user-agent plus a
`usahockey.com` referer; `iihf.com` challenges robots and serves browsers. The
fetch script sets both.

## ⚠️⚠️ A RULE CONTINUES ACROSS PAGE FURNITURE — A FIXED GREP WINDOW MANUFACTURES A FALSE ABSENCE

**Measured 16 September 2026, on `usah.txt` and `hc.txt`.**

An agent read USA Hockey **304(e)** and Hockey Canada **3.6(d)** with a context
window that stopped at a page break, and **was about to report two of the
corpus's facts lines as fabricated citations.** ⚠️ **The corpus was right and the
window was the artefact.**

`sources/usah.txt` around `:2062` puts **eight lines of furniture inside a single
rule** — blank lines, a running header (`2025-29 Official Rules of Ice Hockey`
plus the page number), the InDesign build line
(`Rulebook 2025-29.indd 23 … 2/14/25 9:28 AM`), and the section name
(`EQUIPMENT`) — and then the rule resumes mid-sentence:

> *"In all classifications, if the goalkeeper's helmet/facemask comes off during
> play, the officials shall stop play immediately."*

`hc.txt` does the same around `:2155`, where 3.6(d)'s goaltender limb sits below a
`Note 1` and a blank run:

> *"If the goaltender deliberately removes their protective equipment to gain a
> stoppage of play, they will be penalized under Rule 10.1 (a) – Delay of Game."*

⚠️ **So `grep -A 3` or any fixed `-A n` is unsound on these extractions.** A
clause you are trying to prove absent may be eight lines further down, behind a
page number. **Widen the window past the furniture, or flatten the file first,
before concluding a book is silent.**

### Three more instances, found the same day, in rules the corpus actively cites

- **USA Hockey 618(c)** — the goaltender's forward-throw limb. `usah.txt:4262`
  splits it mid-clause: *"…and it is first played by a"* / blank lines / the
  running header `Playing Rules` / blank lines / *"teammate, play shall be
  stopped…"*. ⚠️ **A phrase grep for *"first played by a teammate"* returns
  NOTHING**, and that clause is the whole difference between USA Hockey's
  **face-off** and the NHL's **penalty**.
- **IIHF 67.3(III)** — `TABLE OF CONTENTS` plus a running header sit between the
  limb and its Note.
- **USA Hockey 304(e)** and **Hockey Canada 3.6(d)** — the cases that started
  this. An agent was about to report two of the corpus's facts lines as
  **fabricated citations**.

⚠️ **This is the third member of the same family, and they all fail the same
way — a search returns nothing and the file looks fine.** The other two are the
image-only extraction (recorded above) and the house-word split (recorded below).
**A negative-existence claim is only as good as the search that failed to refute
it, and all three of these break the SEARCH rather than the file.**

### ⚠️⚠️ FLATTENING DOES NOT FIX THIS, AND THE FIRST VERSION OF THIS SECTION SAID IT DID

**Written, then tested, then corrected — in that order, which is the only reason
it is right now.** The obvious remedy is to strip newlines and collapse
whitespace before searching. **It fails**, because the furniture is not
whitespace: it is *text*. Flattened, `usah.txt` reads

> *"…and it is first played by a **Playing Rules** teammate, play shall be
> stopped…"*

so `"first played by a teammate"` is **still** absent. ⚠️ **A remedy that looks
obviously correct and is not is worse than no remedy**, because it converts a
known-hard search into one the searcher believes is sound.

**What actually works, both verified:**

1. **Strip the running-header text, then flatten.** For `usah.txt` that is
   `re.sub(r'\s*Playing Rules\s*', ' ', text)` before collapsing whitespace —
   the phrase is then present. **Each book needs its own header string**; find it
   by printing a page boundary rather than guessing.
2. **Read a LINE RANGE, not a phrase.** `sed -n 'N,Mp'` over the whole rule and
   read it. Slower, and it is what caught all six of these.

⚠️ **Prefer (2) when you are about to make a negative-existence claim.** (1) is a
search aid; (2) is evidence.

## ⚠️⚠️ THE BOOKS DO NOT SHARE A WORD FOR THE GOALTENDER, AND TWO OF THEM RETURN A HARD ZERO

**Measured 16 September 2026.** `grep -oi <word> sources/<file>.txt | wc -l`:

| book | `goaltender` | `goalkeeper` |
|---|---:|---:|
| `nhl_rules_layout` | **0** | 589 |
| `iihf_rules_v1.1` | **0** | 464 |
| `usah` | 2 | 270 |
| `carha` | 4 | 181 |
| `hc_layout` | **369** | 4 |

⚠️⚠️ **A SINGLE-WORD GREP FOR ANY GOALTENDING QUESTION RETURNS A FALSE ZERO IN AT
LEAST ONE BOOK, AND USUALLY IN TWO.** `goaltender` is **absent from the NHL and
IIHF books entirely** — and this corpus is *written to NHL rules*, so the word a
writer reaches for first is the one that finds nothing in the book they are
checking against. Hockey Canada is the mirror image: `goalkeeper` appears four
times in 369 opportunities.

⚠️ **This is the same failure mode as an image-only extraction and it is worse,
because the file looks fine.** `pdffonts` is reassuring, the byte count is right,
the text layer is complete — and the search returns nothing. **A
negative-existence claim built on one house word is unsound in four of the five
books.**

**So: search BOTH words, in EVERY book, EVERY time.** It bit an agent this round
on Hockey Canada's restricted-area question, where `goalkeeper` returns 4 hits and
none of them is the rule; the answer was under `goaltender`.

### ⚠️ It is not just the goaltender. Two more were measured the same day.

**`linesman` vs `linesperson`:**

| book | `linesman` | `linesperson` |
|---|---:|---:|
| `nhl_rules_layout` | **0** | 123 |
| `iihf_rules_v1.1` | **0** | 76 |
| `usah` | **0** | 26 |
| `hc_layout` | **0** | 83 |
| `carha` | 1 | **0** |

⚠️ **Four books have moved to `linesperson` and CARHA has not.** A search for
`linesman` returns a hard zero in four of five; a search for `linesperson`
returns a hard zero in CARHA. **There is no single word that finds the official
in all five books.**

**Body checking — and this one matters most, because it is the corpus's most
safety-critical topic and the corpus is written to NHL rules:**

| book | `bodychecking` | `body checking` | `body check` |
|---|---:|---:|---:|
| `nhl_rules_layout` | **0** | **0** | 2 |
| `usah` | 0 | 48 | — |
| `hc_layout` | 1 | **0** | — |
| `iihf_rules_v1.1` | 1 | 2 | — |

⚠️⚠️ **`grep -i "body checking" sources/nhl_rules_layout.txt` RETURNS ZERO.** The
NHL book writes *"body check"* twice and `checking` 49 times, and never the
gerund. **A writer checking "what does the NHL say about body checking" against
the book this corpus is written to gets nothing**, and Hockey Canada returns zero
for the same string while USA Hockey returns 48.

**The general rule, now measured three times rather than assumed:** ⚠️ **before
writing that a book is silent on something, establish the word THAT BOOK uses.**
Not measured yet, and worth measuring before anyone relies on a zero:
`he`/`they`, `referee`/`official`, `penalty box`/`penalty bench`.

## ⚠️ Python `splitlines()` and `grep -n`/`sed` disagree by up to 227 lines

**Found 29 August 2026 by an agent whose first three rule diffs silently landed on the wrong rule.**

`pdftotext` emits **form feeds** (`\f`) at page boundaries — **228 of them in `iihf_rules_v1.1.txt`
alone.** Python's `str.splitlines()` treats `\f` as a line terminator. `grep -n`, `sed`, `awk`,
`wc -l` and `str.split('\n')` do not.

Measured on `sources/iihf_rules_v1.1.txt`:

| Method | Line count | Line number of `81.4.` |
|---|---|---|
| `split('\n')` — agrees with `grep -n`, `sed`, `awk` | **10,984** | **6673** |
| `splitlines()` | 11,211 | **6810** |

**A 137-line offset at Rule 81.4, drifting to 227 by end of file.** ⚠️ **Every line number recorded
in this project is `grep -n`/`sed`-based**, so a Python tool using `splitlines()` reports numbers
that do not resolve — and, worse, a script that slices a rule by line range **reads a different rule
and reports on it confidently.** The agent that found this had three diffs silently shifted onto
Rule 79 and produced garbage that looked like real findings.

**Rule: in any Python that must agree with shell line numbers, use `split('\n')`, never
`splitlines()`.** `splitlines()` additionally splits on `\v`, `\x1c`–`\x1e`, `\x85` and `U+2028`
— none present in these files today, but the same failure would be silent if a re-extraction
introduced them.

*(`\f` is also why a `sed` window can appear to end a rule early — see the page-furniture cases in
the style guide. Same cause, two different symptoms.)*

---

## ⚠️ Mode four spans EVERY BOOK ON DISK — and one of them is Hockey Canada

⚠️ **NO INSTANCE COUNT IS WRITTEN HERE ANY MORE, AND THE REASON IS A COLLISION THIS FILE
PRODUCED ITSELF.** This heading read *"now FIVE instances in FOUR books"* while the sections
below it described a sixth — and **two different findings were each labelled "sixth instance"**,
the NHL Rule 42.1 splice and the IIHF Rule 1.8 splice. **A count of a growing backlog goes stale
in the direction that flatters it, and an ordinal assigned in one section cannot see an ordinal
assigned in another.** The instances are the record; the tally never was.

This file previously recorded **three instances in three books** of page furniture spliced
*inside* a sentence. Two more were found in one round, both by agents verifying a quotation
they had every reason to expect to find:

- **Hockey Canada.** `"the instant the zone is completely free of attacking players"` returns
  **ZERO** from a whitespace-flattened `hc.txt` *and* `hc_layout.txt`, because
  `HOCKEYCANADA.CA HOCKEY CANADA PLAYING RULES 2026-2028 81 SECTION 6 — GAME FLOW` sits
  **inside the parenthesis**, between `the instant the` and `zone is completely free`.
  The corpus's quotation at `rules_primer.md:193` is verbatim and correct.
- **IIHF, smaller and therefore worse.** Rule 51.1:
  `"a minor altercation that is not worthy of a major penalty"` returns zero from a flattened
  `iihf_rules_v1.1.txt` because a marginal **`06`** sits inside it — *"not worthy of `06` a
  major penalty"*. A two-character splice does not look like page furniture in a diff.

⚠️ **The lesson is not "search harder". It is that a confident zero from a book that DOES
contain the sentence is the normal case here, in every book on disk, and a negative-existence
claim built on one is worthless.** Read the window with `sed -n`; do not trust a phrase grep.

## ⚠️ `check_quote_drift.py` reports these splices as NOT-FOUND — and the quotations are CORRECT

**This is the operational consequence of mode four, and it had not been written down.** The
tool matches on alphanumerics only, which defeats the *hyphen* and *line-break* shapes — but
**it cannot defeat a splice, because a splice inserts WORDS.** So every mode-four instance
above surfaces in that tool's output as a `not-found`, indistinguishable from a quotation that
was actually misattributed or drifted.

⚠️ **A `not-found` from `check_quote_drift.py` near a page boundary or a two-column table is
therefore NOT evidence of a defect, and "repairing" one would corrupt a verbatim quotation.**
That tool is a worklist, not a gate, and this is exactly why. Two instances were confirmed by
hand on 18 September 2026 while closing an unrelated row:

- **NHL Rule 42.1, `nhl_rules_layout.txt:4529-4537` — a further instance, and the second in an
  NHL extraction.** *"A minor, major or a major and a game misconduct shall be"* ends one page;
  *"imposed on a player who charges a goalkeeper while the goalkeeper is within his goal
  crease"* begins the next. Between them sit a running header
  (`NATIONAL HOCKEY LEAGUE … OFFICIAL RULES 2025-2026`), the page number `73`, the nav line
  `Previous Page  Table of Contents  Next Page`, a **form feed**, and the section banner
  `SECTION 6 – PHYSICAL INFRACTIONS`. ⚠️ **The recorded NHL instance above is Rule 80.1 in
  `nhl_rules.txt`; this one is a different rule in a different extraction**, so the two files
  splice independently and neither clears the other.
- **NHL Appendix Table 14, Situation 5E, `nhl_rules_layout.txt:9286-9290`** — present and
  legible, but wrapped in a narrow left column with the right column's *"Goal is allowed."*
  interleaved into the **first line**. Same shape as the IIHF Table 16 interleave recorded
  above. ⚠️ **Read it with a line range, never a phrase grep.**

**Both were reached from `content/hockey-iq/playing_without_the_puck.md`, whose citations of
them are verbatim and correct.** No content was changed.

⚠️ **A third instance, found 20 September 2026, in a different source and a different book.**
**USA Hockey Casebook, Rule 607, Situation 4, `usah_casebook.txt:11683-11693`** — *"…the attacking
player has clearly made every attempt to"* ends one page; running headers `Playing Rules` and
`CASEBOOK` sit between it and the next page's *"avoid the contact with the goalkeeper."* Reached
this time from `content/systems/offensive_zone_play.md:579`, whose citation is verbatim and
correct once the page furniture is read out. **Confirmed `check_quote_drift.py`'s facts-layer fix
(20 September) surfaces this same species as a NOTFOUND in every facts-block quotation of the
sentence, corpus-wide** — the splice is a property of the source file, not of any one document's
citation of it, so expect this exact fragment to keep scoring NOTFOUND wherever it is quoted next.

## ⚠️ IIHF RULE 42.1 IS THE CONTROL FOR MODE FOUR — use it to test a flattening pipeline

Found 19 September 2026. **This is the most useful mode-four instance on disk, because it is a
reproducible test rather than another anecdote.**

IIHF Rule 42.1 (charging) reads *"…builds up speed by taking multiple strides **imme**diately
prior to making contact…"*. The book breaks the word at `imme-` and injects **four lines of
furniture** before `diately`:

```
TABLE OF CONTENTS
I I H F  O F F I C I A L  R U L E B O O K  2025/26 – S E C T I O N 06   85
PHYSICAL INFRACTIONS
```

⚠️ **The splice lands INSIDE A WORD, which is what makes it the control.** Two defences that work
on every other trap in this file both fail here:

- **De-hyphenation fails.** A `re.sub(r'-\n\s*','')` rule joins `imme-` straight onto `TABLE`,
  producing `immeTABLE OF CONTENTS…`. The word is destroyed rather than repaired.
- ⚠️ **Alphanumeric-only normalisation fails too — and `check_quote_drift.py`'s docstring claims
  otherwise.** That docstring states the alphanumeric match *"defeats the page-furniture splice
  that `sources/README.md` records"*. **It does not defeat this one, because the furniture IS
  alphanumerics** and normalisation cannot tell a header's letters from the sentence's. **The tool
  reports this verbatim IIHF quotation as `NOT FOUND IN ANY LOCAL SOURCE`.**

### How to use it

```bash
# A pipeline is SOUND only if this returns a hit in BOTH editions:
#   "builds up speed by taking multiple strides immediately prior to making contact"
#   against iihf_rules_v1.1.txt AND iihf_rules_2026-27.txt
```

| pipeline | result |
|---|---|
| strip form feeds → de-hyphenate → collapse whitespace | ❌ **NOT FOUND** in both editions |
| **scrub page furniture FIRST**, then de-hyphenate → collapse | ✅ **FOUND** in both editions |
| alphanumeric-collapse (the `check_quote_drift.py` method) | ❌ **NOT FOUND** |

⚠️ **THE ORDER IS THE WHOLE LESSON: furniture-scrubbing must come BEFORE de-hyphenation.** A
verifier whose flattened copy was built the naive way will get a confident zero on text that is
present in both books — **and the corpus's instinct on meeting a refuted claim is to soften or
remove it**, so the failure direction is *making the corpus look less supported than it is*.

**Measured consequence, recorded because it is reassuring rather than alarming:** an agent that
had built its working copies the naive way re-ran **eleven** negative-existence searches through a
furniture-scrubbed pipeline — including the load-bearing *"the IIHF book has no match penalty at
all"*, which is the one a British reader acts on. ⚠️ **Every count was unchanged and all eleven
held.** **The conclusions were sound; the method that produced them could not have said so.**

## ⚠️ `iihf_rules_2026-27.txt` RENUMBERS RULE 46 — a citation that resolves to the wrong rule

**2026/27's Rule 46.3 is ALTERCATION. v1.1's Rule 46.3 is INSTIGATOR / INITIATOR**, and v1.1
defines altercation elsewhere at `:4105`.

⚠️ **So "IIHF 46.3" cited against the wrong edition does not fail — it resolves SUCCESSFULLY,
to a different rule.** Same shape as the Table 16 → Table 14 hazard already recorded above,
and the same defence: **never write a bare IIHF rule or table number without its edition.**

## ⚠️ The IIHF's own two books use "restricted area" in OPPOSITE senses — and one of them gets a goaltender penalised

- **The Rulebook means the trapezoid, where playing the puck is PERMITTED.** Appendix IV's goalkeeper
  penalties table — Table 11 in 2026/27, **Table 13 in v1.1** — has the row *"Playing puck **outside**
  restricted area"*.
- **The Situation Handbook means the corners, where it is FORBIDDEN.** Situation 27.7: the goalkeeper
  *"blocks the pass using the leg pads which is clearly **inside** the restricted area… Since the
  goalkeeper 'plays' the puck **in** the restricted area, the goalkeeper must be assessed a minor
  penalty."*

⚠️ **A goaltender who reads the Handbook's sense has the rule exactly backwards and takes two minutes.**
The corpus uses the Rulebook sense throughout and is correct — this is a trap for the next person
reading the books, not a defect in `content/`.

**In the same situation the Handbook prints two wrong rule numbers**, and they are recorded rather than
repaired: it asks *"Is this a penalty to the goalkeeper under **Rule 28.8**?"* and answers *"**Rule
27.8**."* In the 2026/27 book the restricted-area rule is **27.7**; **27.8** is *"Infractions – Unique
to Goalkeepers"* and **Rule 28** is Supplementary Discipline.

## ⚠️ Mode four, another instance — inside IIHF Rule 1.8, the trapezoid definition itself

`sed -n '690,693p' sources/iihf_rules_2026-27.txt` puts a marginal **`01`** between *"behind the goal.
The two 5cm-wide red"* and *"lines mark the restricted area"*. So a phrase search spanning that break
returns a confident zero **from the rule that defines the shape** — in the same file whose Rule 51.1
already carries a marginal `06` mid-sentence.

**This is now six instances in four books.** Read the window; do not trust the phrase.

## ⚠️ A false FALSIFIER: `CE mark` matches "i-ce mark-ings"

Attacking a disclosure that no British certification mark appears in any rulebook, an agent probed
`CE mark` case-insensitively and got **three hits in the IIHF book**. All three were inside
**"i-ce mark-ings"** — the hyphenated line-wrap of *ice markings*.

⚠️ **Note the direction. Every other trap in this file produces a false ZERO, which makes a true
quotation look absent. This one produces a false HIT, which makes a TRUE disclosure look refuted** —
and the corpus's instinct on meeting a refuted disclosure is to rewrite it. **A hyphenation artefact
that looks exactly like the evidence that would overturn a claim is more dangerous than one that
merely hides a sentence.**

**Short search terms are where this lives.** Anchor on word boundaries, and read every hit in its
window before believing it.

## ⚠️ Which extraction you choose decides whether a TRUE quotation looks false

Two measured cases, in one file, in one session:

- **Hockey Canada's Glossary quotation greps in `hc.txt` and NOT in `hc_layout.txt`.**
- **USA Hockey Casebook 637 Situation 11 returns ZERO from either, flattened** — the running heads
  sit inside the sentence: *"trying to keep the broken stick **Playing Rules** off the ice, the
  Referee has no choice but to assess a misconduct **CASEBOOK** penalty."*

Both quotations in `equipment.md` are **verbatim and correct**. ⚠️ **An agent checking either against
the wrong extraction would have "found" a fabricated quotation and repaired a correct one.**

**Search both extractions, and read the window. A zero from one is not a finding.**

## ⚠️ IIHF RULE 46 IS ENTIRELY RE-SORTED BETWEEN THE TWO EDITIONS ON DISK

Not one sub-number survived. **Every shared number from 46.1 to 46.13 names a different rule**, and
2026/27 adds 46.14 and 46.15:

| | 2025/26 v1.1 | 2026/27 |
|---|---|---|
| 46.1 | FIGHTING / FIGHTER – WILLINGNESS TO FIGHT | FIGHTING |
| 46.2 | ALTERCATION | AGGRESSOR |
| 46.3 | INSTIGATOR / INITIATOR | ALTERCATION |
| 46.4 | AGGRESSOR | CLEARING THE AREA OF A FIGHT |
| 46.5 | DANGEROUS PUNCHER – "SUCKER PUNCHER" | CONTINUING OR ATTEMPTING TO CONTINUE A FIGHT |
| **46.6** | **DEFENDER – UNWILLING COMBATANT** | **HELMETS** |
| 46.7 | THIRD PLAYER IN | FIGHTING OFF THE PLAYING SURFACE |
| 46.8 | CLEARING THE AREA OF A FIGHT | FIGHTING OTHER THAN DURING THE PERIODS OF THE GAME |
| 46.9 | FIGHTING OTHER THAN DURING THE PERIODS OF THE GAME | FIGHTING PRIOR TO THE DROP OF THE PUCK |
| 46.10 | FIGHTING PRIOR TO THE DROP OF THE PUCK | INSTIGATOR |
| 46.11 | FIGHTING OFF THE PLAYING SURFACE | JERSEYS |
| **46.12** | **HELMETS** | MAJOR PENALTY AND GAME MISCONDUCT |
| 46.13 | JERSEYS | DANGEROUS PUNCH – "SUCKER PUNCH" |
| 46.14 | *(absent)* | THIRD PLAYER IN |
| 46.15 | *(absent)* | DISCIPLINARY MEASURES |

⚠️ **This is the only IIHF rule known to do this, and it has already produced a defect in `content/`**:
`equipment.md` attributed the fight-helmet sentence to **46.6**, which is correct for 2026/27 and names
*"DEFENDER – UNWILLING COMBATANT"* in the edition that document cites throughout — and which IHUK
adopts **by name**. The citation did not fail. **It resolved successfully, to a different rule about
a different thing.**

**Also confirmed deleted in 2026/27: Rule 202.7** (*"PROCEDURE – NON-COMPLIANCE WITH PROTECTIVE
EQUIPMENT"*), along with 102.7 — the pair IIHF 9.12 routes junior hockey to for a ten-minute
misconduct in v1.1.

⚠️ **Verified NOT renumbered, because a first pass wrongly said they were:** 27.6, 27.7, 56.1, 67.2,
60.2, 9.5, 48.3, 73.2, 84.1 and 87.2 are **identical in both editions.** A heading-regex census
reported them as edition-only and would have sent agents to 98 sites that are fine. ⚠️ **A census of
this kind must be verified number by number against the book before anyone acts on it** — the
false-positive rate here was roughly nine in ten.

## ✅ CRT6 IS NOW VERIFIED — read visually from the PDF, because no extraction can reach it

`sources/crt6.txt` is **1,535 bytes from a 6.3 MB PDF**, and `pdftotext -layout` reproduces the same
1,535 bytes. `concussion` and `helmet` both return **zero**. The content pages are **images**. No OCR
tool is installed on this machine — `tesseract`, `ocrmypdf`, `qpdf`, `mutool` and `gs` are all absent;
only `pdfimages` exists.

⚠️ **So for as long as the corpus has cited CRT6 — its single highest-consequence citation — nobody
could check it, and at least three agents said so in their reports.**

**It can be read visually.** The PDF renders as two pages and every claim the corpus makes about it is
**confirmed verbatim**, checked 2 September 2026:

- **The ten Red Flags**, and there are exactly ten: neck pain or tenderness · seizure, 'fits', or
  convulsion · loss of vision or double vision · loss of consciousness · increased confusion or
  deteriorating conscious state (becoming less responsive, drowsy) · weakness or numbness/tingling in
  more than one arm or leg · repeated vomiting · severe or increasing headache · increasingly
  restless, agitated or combative · visible deformity of the skull.
- **The five "Remember" instructions**, and there are exactly five.
- ⚠️ **The one that matters most: *"Do not remove helmet (if present) or other equipment."*
  VERBATIM, AND IT CARRIES NO EXCEPTION.** The corpus insists on this and the corpus is right.
- ⚠️ **And the corpus's finer point is right too.** The neighbouring instruction — *"Do not attempt to
  move the athlete (other than required for airway support) unless trained to do so"* — **does** carry
  two exceptions. **Both exceptions belong to the MOVING instruction. Neither reaches the helmet.**
  That distinction is stated in `body_contact_and_battles.md` and is exact.
- *"Assume a possible spinal cord injury in all cases of head injury."* Verbatim.
- The free-to-copy licence line, verbatim, including that alteration and commercial sale are barred.

**Material on page 2 the corpus may not carry** — an athlete with suspected concussion should **NOT**
*"be left alone initially (at least for the first 3 hours)"*, *"be sent home by themselves"*, drink
alcohol or take drugs not prescribed by their HCP, or *"drive a motor vehicle until cleared to do so
by a healthcare professional"*. ⚠️ **THIS LINE IS NOW STALE AND IS KEPT ONLY SO NOBODY RE-DERIVES IT.** It said this material was *"reported here, not written into `content/`"*. **Two of the four ARE now carried — *"be sent home by themselves"* and *"drive a motor vehicle until cleared to do so by a healthcare professional"* — in `body_contact_and_battles.md`'s concussion takeaway**, confirmed 23 September 2026 by an agent that rendered page 2 with `pdftoppm` and read it visually, against a corpus quotation that is **verbatim**. ⚠️ **Check `content/` before treating any item in this paragraph as absent.**

⚠️ **THE TRANSFERABLE POINT: an image-only PDF is not unverifiable, it is unGREPPABLE.** Three
reports in one round said CRT6 *"cannot be verified from disk"*. That was true of every text tool and
false of the document. **When extraction returns page furniture and nothing else, read the pages.**

## ⚠️ THREE FILES ON DISK ARE FAILED EXTRACTIONS, NOT ONE — measured by text-to-PDF ratio

| file | PDF | extracted text | ratio |
|---|---:|---:|---|
| `iihf_rules_v1.1` | 3.9 MB | 664 KB | 16.9% |
| `iihf_coachdev_off_tactics` | 750 KB | 82 KB | 11.0% |
| `eiha_inhouse` | 374 KB | 31 KB | 8.3% |
| `nhl_rules_2024-25` | 12.7 MB | 719 KB | 5.7% |
| `ibc` | 2.4 MB | 77 KB | 3.2% |
| ⚠️ **`ukcg`** | **14.5 MB** | **72 KB** | **0.50%** |
| ⚠️ **`crt6`** | **6.3 MB** | **1.5 KB** | **0.024%** |
| ⚠️ **`heo_intl_drill_symbols`** | **310 KB** | **30 bytes** | **0.010%** |
| `bvhs` | 6.3 MB | 75 KB | 1.18% |
| ⚠️ **`page_1975`** | **23.1 MB** | **123 KB** | **0.53%** — **THE COUNTER-EXAMPLE. Its text layer is REAL.** |

**A ratio under about 0.5% means the document is images.** Run this check before trusting any negative
drawn from a `sources/` file.

⚠️⚠️ **BUT THE RATIO IS A HEURISTIC AND `page_1975` IS THE CASE THAT SHOWS ITS EDGE.** At **0.53%** it
sits a hair above the threshold, and it is a **scanned 1975 thesis** — the shape that normally means
images. **Its text layer is genuine and complete enough to grep:** `0.37` ×1, `0.48` ×3, `74.2` ×3,
`recovery` ×75, `discriminant` ×17, and a `source-verifier` located every figure the corpus cites,
including the Appendix J raw values it used to re-derive the 0.37/0.48 means independently. **So a
low ratio is a reason to LOOK, never a reason to conclude.** The inverse error — treating a scanned
document as unverifiable — is the CRT6 failure four separate agents have now filed.

## ⚠️ SEARCH-FAILURE MODE SIX: LETTER-SPACED TEXT — a phrase search finds a fraction of the truth

`ukcg.txt` (UK Concussion Guidelines for Non-Elite Sport, cited by `uk_rules.md` and
`conditioning_and_recovery.md`) sets its headings letter-spaced. The extraction reads:

> `I F I N D O U B T,  S I T  T H E M  O U T`

Measured: **`"if in doubt"` returns 5 hits whitespace-flattened and 29 with ALL whitespace stripped.**
`"sit them out"`: **5 against 29.** ⚠️ **So a flattened search finds about one occurrence in six, and
reports a number that looks like a real count.** The document's own strapline is among the ones it
misses.

⚠️ **This is worse than a plain zero**, which at least announces itself. **A partial count invites a
"the source mentions it only twice" claim that is simply false.** Compare a whitespace-stripped,
letters-only form as well, and reconcile the two counts before quoting either.

### ⚠️ AND IT IS NOT ONLY `ukcg.txt` — THE IIHF SITUATION HANDBOOKS DO IT TOO, AND IT PRODUCED A FALSE ABSENCE ON 19 SEPTEMBER 2026

`iihf_situations_v1.1.txt`, `iihf_situations_2026-27.txt` and `iihf_situations.txt` set their
**situation headings** letter-spaced. The extraction reads:

> `S I T UAT I O N 69.1`

⚠️ **So `grep "Situation 69\."` returns ZERO across all three files** — and note the spacing is
*irregular* (`S I T UAT I O N`), so a fixed `S.I.T.U.A.T.I.O.N` pattern misses it as well.

⚠️⚠️ **An agent concluded from this that the Situation Handbook was "not on disk under any name I
found", and moved four quotations of it across a section boundary without re-verifying one.** It was
on disk the whole time — **465,603 bytes, Rule 69 beginning at `iihf_situations_v1.1.txt:5401`** — and
a later `rules-verifier` re-verified all four as **verbatim**.

**How to search these files:** grep the situation's **text**, not its heading, or read **positionally**
from the rule's first line. ⚠️ **The heading form is the one thing in the document you cannot search
for.**

⚠️ **This is the FOURTH kind of false absence this README now documents for the same class of
question** — image-only PDFs, wrapped phrases, page-furniture extractions, and letter-spaced headings.
**All four answer "is it in the source?" with a confident, wrong NO.** **`grep` returning zero is a
question, not an answer.**

### ⚠️ FIFTH: COLUMN-INTERLEAVED REFERENCE TABLES — the row you want is real and unreachable by any phrase search

**Found 19 September 2026 by the agent repairing `content/positions/goaltender.md`, which needed
Situation 6E from both books' interference-on-the-goalkeeper matrices.**

⚠️ **Flattened searches for the NHL's 6E description, the NHL's 6E result AND the IIHF's 6E result all
returned ZERO in every extraction on disk.** **Both Table 14 and Table 16 interleave at that row:**
a cell's text is split across columns and lands dozens of lines from its own row, sometimes directly
beneath a DIFFERENT row's result.

**All three were verified by reading the columns POSITIONALLY.** ⚠️ **`check_quote_drift.py` reports
nothing about them either way** — it cannot find what it cannot match, and it does not distinguish
*"this quotation drifted"* from *"this quotation is unreachable by my matcher"*.

⚠️ **`nhl_rules_layout.txt` has the NHL tables correctly and `nhl_rules.txt` does not.** **Read any
reference-table row from the `-layout` extraction, and read it positionally even there.**

⚠️⚠️ **This one is more dangerous than the other four, because a phrase search here does not merely
return zero — it can return a HIT ON THE WRONG ROW.** An orphaned situation text landing under a
neighbouring row's result will match, and a verifier that stops at the match attributes one row's
facts to another row's penalty. **A confident wrong YES, where the other four give a confident wrong
NO.**

### ⚠️ SIXTH: THE BOOK'S HOUSE WORD IS NOT YOUR WORD — and this one defeated TWO reviewers on one claim

**Found 19 September 2026 by a `safety-reviewer` on `content/positions/goaltender.md`, against a
negative existence claim that a `rules-verifier` had ALREADY attacked with eleven concept patterns and
upheld.**

The document recorded, honestly, exactly what it had searched: ***"initiates contact"*, *"give
ground"*, *"the act of establishing"*** — and concluded USA Hockey publishes no
goalkeeper-initiates-contact provision.

⚠️ **USA Hockey writes *"body checks"*.** `usah.txt`, Rule 640(f): ***"A minor penalty shall be
assessed to any goalkeeper who body checks an opponent."*** With **640(g)** a mandatory major plus
game misconduct for reckless endangerment and **640(h)** a match penalty — and the Casebook, Rule 640
Situation 7, answering the question in terms: ***"Is a goalkeeper allowed to body check an opponent?
No."***

⚠️⚠️ **Two independent agents attacked the same negative and both missed it, because both searched the
CONCEPT in the vocabulary of the OTHER books.** **The IIHF and the NHL write *"initiates contact"*;
USA Hockey writes *"body checks"*, and its carve-out term of art is *"competitive contact"* — which is
NARROWER than the IIHF's *"establish position"* (it requires *"an effort to gain possession of the
puck"*).**

**This README already records the species for `hc.txt` — `goaltender` 349 hits against `goalkeeper`
4.** ⚠️ **The lesson generalises: before accepting any cross-book negative, find out what the book you
are searching CALLS the thing, from that book's own index, glossary or penalty summary — not from the
book you came from.**

⚠️ **And note what actually caught it: the document had WRITTEN DOWN ITS THREE SEARCH STRINGS.** *"The
disclosure convention caught its own defect; nothing in my method would have."* **A negative claim
whose search terms are not recorded cannot be attacked this way at all.** **Record the strings.**

## The `heo_intl_drill_symbols` PDF is the corpus's NOTATION AUTHORITY, and it extracts to 30 bytes

The whole file is one page of glyphs against labels — read visually, 2 September 2026:

| symbol | means |
|---|---|
| Ⓒ | Coach |
| **G** | Goaltender |
| ● ○ (filled / open circle) | **Forward / Player** |
| ▲ △ (filled / open triangle) | **Defender / Player** |
| **dashed** circle / triangle | **Player position at the END of the repetition** |
| solid arrow | Forward skating |
| wavy line | Backward skating |
| hatched line | Lateral crossovers |
| wavy with a hook | Pivoting |
| wavy with an arrow | Skating with control of the puck |
| dashed arrow | Passing |
| double-line arrow | Shooting |
| line ending in a double bar | Stopping |
| wavy with a cross-tick | Drop pass |
| **line ending in a T-bar** | **Checking pressure** |
| **X** | **Pylon** |
| a cluster of dots | Cluster of pucks |

**This corroborates the corpus's core axis** — circle = forward, triangle = defender, `G` for the
goaltender, dashed arrow = pass — which a census measured at **328 circles, 183 triangles, 104 bare
`G`, 615 glyphs, 0 pylons**. ⚠️ **Two entries nobody has checked the corpus against: the standard's
DASHED outline for *"player position at the end of the repetition"*, and its `X` for a pylon.** If the
corpus uses a dashed outline for anything else, it collides with the standard.

## Hockey Canada writes almost no suspensions into its playing rules — check before asserting one

Measured 2 September 2026, with a positive control proving the extraction is sound (`Game Misconduct`
**148** hits, `Match penalty` **75**, `Gross Misconduct` **38**, `Game Incident Report` **8**):

⚠️ **The word `suspension` appears exactly TWICE in `hc_layout.txt`, and neither instance imposes
one.** One is Rule 2.2(l) — *"No player under suspension may participate in the pre-game warm-up"* —
which **presupposes** suspensions without creating them; the other is a fragment.

Hockey Canada's Glossary defines a game misconduct as *"A non-timed penalty that does not result in
the offending team playing shorthanded. The offending player will be removed from the game."* The
consequence beyond the game runs through a **Game Incident Report** to *"the appropriate Member or
league delegate"*.

**So a Hockey Canada tariff is not in the rulebook and cannot be quoted from it.** Compare:

| book | what a game misconduct costs beyond the game |
|---|---|
| **USA Hockey 404(b)** | **automatic** next-game suspension, in the playing rules; minimum two under 403(b) |
| **CARHA 32(d)** | **automatic one game**, but only where the GM follows a **Major**, *"other than the Accidental High Stick Rule"* |
| **IIHF 23.1 / 23.2** | balance of the game; further measures **discretionary** — the Proper Authorities have *"full power to impose"*, via Rule 28 and the **IIHF Disciplinary Code, not on disk** |
| **Hockey Canada** | **not written** — a Game Incident Report to the Member or league delegate |

⚠️ **Two of the four route the tariff to a document this repository does not hold.** A sentence saying
what a game misconduct "costs" in all four books cannot be sourced from the four books.

## ⚠️ A NEGATIVE CONTROL ON A NONSENSE URL — the technique that stopped a false falsification

`edge.nhl.com/en/skater/passing` returns **HTTP 200, 84,123 bytes**, titled *"Skater Stat Leaders |
NHL EDGE"*. Against a corpus disclosure saying NHL EDGE publishes no pass-speed data, that reads as a
falsification.

⚠️ **It is not, and the way that was established is the point.** The agent fetched
**`edge.nhl.com/en/skater/BANANAFISHZZZ`** — a URL that cannot exist — and got **200 with the
identical title**. So do `/en/glossary` and `/api/v1/skater/leaders`. The stat categories are
client-rendered: `Skating Speed`, `Shot Speed`, `Zone Time` and `Pass` occur **0 times** in the
served HTML.

**Conclusion: a status code from `nhl.com` or `edge.nhl.com` carries no information about whether a
page exists.** This is the same shape as the fifteen soft-404s already recorded above — **but at a
different byte size, so the size heuristic that catches those would not catch this.**

⚠️ **Make the negative control standard.** Before treating any 200 as evidence a page exists, fetch a
sibling URL that cannot exist. If it also returns 200, the status code is worthless on that host and
only the rendered body counts. **It costs one request and it is the only thing that separates "the
page is there" from "the server always says yes."**

## ⚠️ EACH BOOK HAS A HOUSE WORD, AND SEARCHING WITH THE WRONG ONE PRODUCES A CONFIDENT ZERO

Measured, and it has now caused two false "this book is silent" reports in one round:

| | `goalkeeper` | `goaltender` |
|---|---:|---:|
| NHL | many | many |
| **Hockey Canada** | **4** | **349** |
| USA Hockey | 262 | — |
| USA Hockey Casebook | 725 | — |

⚠️ **A Hockey Canada search for `goalkeeper` returns four hits from a book with 349 uses of the
concept.** The coordinator reported Hockey Canada as carrying no goalkeeper-equipment prohibition on
exactly that basis. **It carries one — Rule 2.2(g), and without the incapacity condition the NHL and
USA Hockey attach.** CARHA carries it too, at 16(f), also unconditional.

⚠️ **THE NHL BOOK CONTRADICTS ITSELF ABOUT ITS OWN SIGNAL NUMBERS, AND THE CORPUS FOLLOWS THE RIGHT
HALF.** Measured 9 September 2026 in `nhl_rules_layout.txt`.

- **The SIGNAL TABLE**, read as a line range (`sed -n '2909,3236p'`) rather than by pattern: row
  **`29.18  Hooking  "A tugging motion with both arms as if pulling something from in front toward the
  stomach."`**, with `29.17 Holding the stick` above it and `29.19 Icing` below.
- **The BACK-OF-BOOK INDEX** at `:~10839` files the same signal as **`Hooking – signal … 29.17`**.

**They disagree by one. `content/foundation/rules_primer.md` follows the TABLE and is correct.**

⚠️ **BUT THE OFFSET IS NOT THROUGHOUT, AND A PLAN ROW SAYING IT WAS SENT AN AGENT HUNTING IN THE WRONG
RANGE.** Re-measured 9 September 2026, entry by entry:

- **`29.1`–`29.10` AGREE EXACTLY.** Boarding 29.1, Charging 29.3, Clipping 29.5, Elbowing 29.10 — index
  and table give the same number.
- **The offset begins at "Goal scored" — table `29.12`, index `29.11` — and runs to the end**:
  High-sticking 29.15/29.14 · Holding 29.16/29.15 · Holding the stick 29.17/29.16 · **Hooking
  29.18/29.17** · Icing 29.19/29.18 · Interference 29.21/29.20 · Wash out 29.35/29.34.
- The index has **no `- signal` sub-entry under Fighting** (table 29.11), which is where the shift starts.

⚠️ **PROOF IT IS A REAL OFFSET AND NOT A MISREADING:** the eight consecutive late index entries
`29.25/26/27/28/30/32/33/34` map, **under +1**, exactly onto the table's alphabetical run Penalty shot /
Roughing / Slashing / Spearing / Time-out / Tripping / Unsportsmanlike / Wash out. **Under a zero offset
they map onto nothing coherent.**

**So the warning is narrower and more useful than "the index is off": a signal citation checked against
the INDEX will look wrong at `29.12` and above, and right below it.** ⚠️ **Follow the table either way.**

⚠️ **AND THE OBVIOUS METHOD FOR ESTABLISHING THE RANGE FAILS — WHICH IS WHY THE RANGE ABOVE WAS DERIVED A
DIFFERENT WAY.** ⚠️ **This paragraph used to end *"the pattern is NOT established"*, and that was correct
about the METHOD it had tried. It is superseded on the substance and kept for the method.** The offset is
now evidenced by **six index entries whose headword is unambiguous** — **Butt-ending index 29.2 = table
29.2 (offset 0)**, then **Hand pass 29.12/29.13 · Holding 29.15/29.16 · Roughing 29.26/29.27 · Spearing
29.28/29.29 · Time-out 29.30/29.31, all +1** — plus the eight-entry alphabetical mapping above. **Neither
argument depends on the pairing below.**

⚠️ **DO NOT RECORD IT AS "the index is systematically off by one" — IT IS NOT, and the naive method still
fails.** Pairing index headwords with their `- signal … 29.x` sub-entries programmatically returns
**duplicate assignments** — Charging at both 29.4 and 29.5, Icing at
both 29.18 and 29.19, Roughing at both 29.26 and 29.27 — because a `- signal` line belongs to the
headword ABOVE it and consecutive headwords each carrying one defeat naive attribution. **Early entries
(Butt-ending 29.2, Charging 29.3) match the table; several middle ones appear off by one.** That is
suggestive and it is not a finding.

**So: the hooking disagreement is VERIFIED, the RANGE is verified by the two arguments above, and the
NAIVE PAIRING remains useless.** ⚠️ **What matters operationally is
the direction of trust: the SIGNAL TABLE is the normative text and the index is a finding aid. Check a
signal number against the table, never against the index — and if a future agent "corrects" a signal
citation on the strength of the index, this is why it is wrong.**

**Other measured house-word divergences:**

- **CARHA writes `cross bar`, two words**, where every other book closes it. A `crossbar` census
  returned zero **with a working NHL positive control of 16** and was still a false negative.
  ⚠️ **AND IT IS NOW CONFIRMED IN A SECOND BOOK, and that book splits itself — measured 9 September
  2026.** **USA Hockey prints it OPEN at Rule 617(a)** (`usah.txt:4149`, the definition of a goal)
  and **CLOSED at 504(b) (the Goal Judge's duty), 618's Note, and the Blind Hockey tie-breaking-shots
  procedure.** So a one-word census of USA Hockey silently returns **three of four**, and the miss is
  inside the rule that defines what a goal is. **A house-word divergence is not always between books.
  It can be inside one.**
  ⚠️ **THAT FOURTH SITE IS NOT THE PENALTY-SHOT RULE, AND AN EARLIER VERSION OF THIS VERY PARAGRAPH
  SAID IT WAS.** `usah.txt:6726` sits inside the **Disabled Hockey** section's Blind Hockey
  tie-breaking procedure. USA Hockey's actual penalty shot is **406(c)** (`usah.txt:2707-2708`) and
  reads *"No goal can be scored on a rebound of any kind"* — no crossbar and no exception. The
  post-or-crossbar rebound carve-out belongs to **NHL Rule 24.2**. ⚠️ **The corpus was corrected for
  exactly this mislabel in the same round in which this file repeated it** — which is the sharpest
  possible illustration of why the routing document is the worst place to be wrong: every agent reads
  it first. **And it is the fifth round running in which "check the disabled-hockey sections" paid.**
- **The NHL writes `racial taunts or slurs`; the IIHF writes `racial slurs or taunts`.** A search for
  `racial slur` returns **0** from a book that contains the concept. **A word-order difference is
  enough.**
- `hybrid` (icing) appears **0 times in the NHL book and 0 in the IIHF book**. It is **Hockey
  Canada's** word (6.7(e), 10 hits) and **USA Hockey's** (1). A corpus sentence calling the NHL rule
  "hybrid icing" is using a word the NHL does not.

⚠️ **THE RULE THIS EARNS: a positive control must run on the book being searched, in that book's own
words.** A control on a *different* book proves only that your regex compiles. **Find the book's own
term for the thing first — search a phrase you know is in it, and read what it calls the noun.**

## ⚠️ THE IIHF SPORT REGULATIONS CANNOT BE FETCHED FROM HERE — attempted 2 September 2026

**IIHF Rule 5.6 explicitly defers to them**: *"For more information refer to **IIHF Sport
Regulations**."* That is the document holding whatever consequence follows a warm-up incident being
*"reported to the Proper Authorities"* — the limb that, for a British reader, **replaces the penalty
the other books assess.**

**What was tried and what came back:**

| | result |
|---|---|
| `blob.iihf.com/.../iihf_sport_regulations_2025_26.pdf` | **404**, 215 bytes, `application/xml` |
| `iihf.com/en/statichub/8305/rules-and-regulations` | **200, 47,528 bytes — a JavaScript shell.** One PDF link in the whole document, and it is not the Sport Regulations. No occurrence of the string *"Sport Regulation"* anywhere in the served HTML. |

⚠️ **So the 200 is worthless here, exactly like `records.nhl.com` and `edge.nhl.com`.** A checker
reading the status would call the hub reachable and conclude the document is available.

**Consequence, stated rather than implied:** every sentence in this corpus about what follows an
IIHF *"report to the Proper Authorities"* is bounded by a document nobody here has read. **The
corpus says so; do not let a later pass quietly upgrade it.** Also unheld and unsearched: IIHF and
Hockey Canada bylaws, league supplementary discipline, association concussion protocols, and the
~~**BVHS goalie manual**, which is linked in `goaltender.md`'s own Sources and would close the last
unread mechanical-risk surface in that file.~~
⚠️⚠️ **THAT CLAUSE IS OVERTAKEN — CORRECTED 22 September 2026, AND THE CORRECTION IS THE USEFUL
PART.** `bvhs.txt` **is on disk and was read END TO END this round**: 45 pages, a genuine complete
text layer (page markers 1–45 all present — **the 1.18% ratio in the table above is PHOTOGRAPHS, not
a failed extraction**). ⚠️ **It does NOT close that surface, because it does not contain it.** Its
own **Contents page carries no section on contact, collisions, boards safety or being hit** — it
runs Philosophy → Save Process → Movements → Saves → RVH → Breakaways → Playing The Puck → Pickups
on the Wall → Parents. ⚠️ **Its only boards material is `bvhs.txt:1536`, under *Pickups on the
Wall*: *"We want to have a bit of separation from the boards…"* — that is PUCK-PLAY SPACING, NOT
CONTACT PROTECTION, and it must not be repurposed as one.**
⚠️ **So the README's recorded observation about `adductor`/`injury` GENERALISES: this manual is
tactics and skills, and body protection is simply not one of its subjects.** **Expecting a source to
close a gap is not evidence that it does.**
⚠️ **ONE WAY THIS COULD STILL BE WRONG, and it is cheap to check:** `bvhs.pdf` is **6.3 MB of
photographs against 75 KB of text**. The conclusion rests on the **Contents page and the complete
prose**. **If a board-contact posture exists there as a captionless photo sequence under no heading,
a text read would not see it.** `pdftoppm` on 45 pages settles it in about ten minutes and nobody
has run it.

---

## `ihuk_junior_roc` · `ihuk_u10_roc` · `ihuk_nihl_roc` · `ihuk_wnihl_roc` — the four IHUK Rules of Competition

⚠️ **THESE ANSWER THE QUESTION THE CORPUS SPENT A LONG TIME SAYING NO BRITISH DOCUMENT ANSWERS: WHICH AGE
GROUPS MAY BODY CHECK.** The two rule books genuinely are silent on it — `grep -i "body.?check"` returns
**zero** in both In-House editions, raw and flattened, and the IIHF book's only category-scoped checking rule
is 101.1 (women's). ⚠️ **The answer is in the COMPETITION regulations, which sit on the same England Ice
Hockey page as the In-House Rules and had never been opened.** `uk_rules.md` had named the Rules of
Competition as *"a separate standing document… which sets the coaching requirements and is not reproduced
here"* — **the corpus knew it existed, characterised what was in it, and never fetched it.**

| file | pages | what it settles |
|---|---|---|
| `ihuk_junior_roc` | 32 | The table: **U10 and U12 non-checking, U14 / U16 / U19s checking** — ⚠️ **AND SEE BELOW: IT SETTLES FAR MORE THAN THAT** |
| `ihuk_u10_roc` | — | ⚠️ **The only one stating it as a RULE rather than a format label** — *"Bodychecking is NOT allowed in U10 matches."* |
| `ihuk_nihl_roc` | — | *"NIHL │ 3 x 20 minute periods │ Full ice, **checking**, stop clock"* |
| `ihuk_wnihl_roc` | — | *"WNIHL U16 … Full ice, **non-checking**"* and *"WNIHL … Full ice, **non-checking**"* ⚠️ **TIGHTER than IIHF 101.1, which permits a limited form** |

### ⚠️⚠️ THIS ENTRY UNDERSOLD `ihuk_junior_roc` FOR THE SAME REASON THE CORPUS ONCE UNDERSOLD THE WHOLE FILE

**Until 16 September 2026 this section said these four documents settle *"which age groups may body check"*
— and nothing else.** ⚠️ **That is wrong, and it is the identical failure one paragraph above records: the
corpus knew the document existed, characterised what was in it, and never opened the rest.**

⚠️ **`ihuk_junior_roc` contains `Appendix D — U12 Competition Format & Administration`, a COMPLETE
ALTERNATIVE PLAYING CODE**, and it had never been read. Its ten headings are *Line Setting, Line Allocation,
Line Management, Game Format, Stoppages, Line Changes, Offsides & Frozen Pucks, Icing, Netminders,
Penalties*. What it settles, all of it absent from the corpus until that date:

- **`"No icing calls at U12."`** — the **only** age-scoped icing provision in any British document.
- **Offside: `"Play does not stop."`** The attacking team **`"must clear the zone before re-entering"`**, and
  **`"Failure to retreat quickly = delay of game penalty."`**
- **A running clock by default** — *Stoppages* reads **`"running clock, unless otherwise agreed by both
  teams… In such cases, stoppages will occur after each goal"`**. ⚠️ **The default is the running clock;
  it is easy to read that sentence backwards, and an agent did.**
- **Minors are 3 minutes in a three-line game and 4 in a four-line game**, served only on the penalised
  player's own line shifts, and **`"Coincidental penalties are not applied at U12"`**. ⚠️ **The format table
  prints only `"3 x 18-minute periods"`; Appendix D adds 20 for the four-line format. A listener told only
  "three minutes" returns to the ice a minute early.**
- **A `"5+Game penalty"` ejects immediately and the five are not served** — ⚠️ **but Appendix D never says
  which majors are one, so this does not settle the "junior major ends your game" inference.**

⚠️ **The route to it is a pointer in the format table itself**, which is the parent that sends you there:
*"U12: Playing format, including line changes, off-side rules, and penalty administration—is set out in
Appendix D."* **Read the pointer, not just the row.**

### ⚠️⚠️ QUOTE THE CHECKING TABLE FROM `_layout` ONLY — THE PLAIN EXTRACTION SCRAMBLES IT

**This is worse than a false zero. It is a false PAIRING.** `pdftotext` without `-layout` reads that table
**column by column**:

> `Age group U10 U12 U14 U16 U19s Length Click here for guidance 3 x 18-minute periods 3 x 15-minute periods … Format Cross-ice jamboree, non-checking Full ice, non-checking, running clock Full ice, checking, stop clock …`

⚠️ **So *"U14"* sits nowhere near *"checking"*, and a PROXIMITY GREP PAIRS THE WRONG AGE WITH THE WRONG
FORMAT — it would happily "confirm" that U12 is a checking category or that U16 is not.** ⚠️ **`_layout`
keeps the row intact:** `U14  3 x 15-minute periods  Full ice, checking, stop clock` — **and both are on
disk, because these four are in `DUAL_EXTRACT`.**

### ⚠️⚠️ THEY ARE REVISED IN PLACE, AT UNCHANGED URLs — AND IT HAS NOW HAPPENED, BACKWARDS

**Every one carries a `ModDate` later than its `CreationDate`** — WNIHL's was **three days old** when
fetched. ⚠️ **A silent replacement is invisible to a URL check. Re-fetch and compare dates before trusting a
quotation.**

⚠️⚠️ **THIS IS NO LONGER A WARNING. IT IS A MEASUREMENT.** All four were refetched on **16 September
2026** and **two no longer match the copies on disk:**

| Document | disk bytes | live bytes | disk `ModDate` | live `ModDate` |
|---|---:|---:|---|---|
| Junior RoC | 1,098,281 | 1,098,281 ✅ | 26 Aug 20:08 | 26 Aug 20:08 |
| U10 RoC | 666,945 | 666,945 ✅ | — | — |
| **NIHL 1 & 2 RoC** | 325,259 | **542,722** ❌ | **1 Sep 11:29** | **26 Aug 17:53** |
| **WNIHL RoC** | 540,666 | **431,890** ❌ | **7 Sep 19:03** | **26 Aug 17:23** |

⚠️⚠️ **THE LIVE `ModDate` ON BOTH CHANGED DOCUMENTS IS *EARLIER* THAN THE ON-DISK COPY'S. England Ice
Hockey ROLLED BACK to the 26 August originals.** It did not publish a newer revision.

**So the rule *"compare dates and take the later one"* is WRONG for this publisher.** A date comparison
tells you the files differ; **it does not tell you which one is current**, and the newer-looking copy may
be the one that has been withdrawn.

**What actually changed, by `-layout` diff:**

- **NIHL:** the live (older) file carries a placeholder the disk (newer) file does not —
  *"A separate policy is being produced around British Trained/Not British Trained status."*
- **WNIHL:** the disk (newer) file adds *"without any players being dual registered with other clubs"*
  to the squad-registration clause, and contains the typo `"Eacho WNIHL team"`; the live file has neither.

⚠️ **NO CORPUS QUOTATION IS AFFECTED**, and that was checked rather than assumed: both checking-format
rows are **verbatim in both revisions of both documents**.

**The practical rule: for these four, a SHA-256 against the on-disk copy is the only sound check, and a
mismatch is a question rather than a verdict.** Record both hashes and say which you read.

### ⚠️⚠️ 22 SEPTEMBER 2026 — THE NIHL ROC IS NOW AT A **NEW PATH**, AND THERE ARE **THREE** REVISIONS

The rollback above is not the end of the story, and the resolution came from the publisher's own page
rather than from any date comparison. England Ice Hockey's
`https://englandicehockey.com/rules-and-regulations/` now links **`2026/09/NIHL-1-and-2-ROC-2026-2027-1.pdf`**
— note the trailing `-1` and the changed month directory. ⚠️ **The old `2026/08/` URL still returns 200**,
so nothing about fetching it signals that it has been superseded.

| revision | path | bytes | `ModDate` | flattened text |
|---|---|---:|---|---|
| 1st | `2026/08/…ROC-2026-2027.pdf` **(still live)** | 542,722 | 26 Aug 17:53 | 27,492 chars |
| 2nd | *no longer served at either path* | 325,259 | **1 Sep 11:29** | 27,368 chars | 
| 3rd | `2026/09/…ROC-2026-2027-1.pdf` **(publisher links this)** | 369,646 | 11 Sep 11:09 | 27,340 chars |

⚠️⚠️ **THE COPY ON DISK IS THE SECOND, AND IT IS SERVED BY NO URL.** It was fetched on 10 September, when
the `2026/08` path still carried it. **So re-running `fetch_sources.sh` against the old URL would have
moved the source BACKWARDS to the 26 August original** — the rollback hazard above, realised.

**All three differ in text, and the differences are cumulative and eligibility-only:**

- 1st → 2nd: dropped the placeholder *"A separate policy is being produced around British Trained/Not
  British Trained status."*
- 2nd → 3rd: an overage clause lost *", or is currently registered as U18"*.

⚠️ **NO CORPUS CLAIM IS AFFECTED — checked, not assumed.** Both changes sit in registration eligibility;
the corpus cites this document only for playing format. A `-layout` diff of the full 20 pages between the
on-disk copy and the current 3rd revision reports **exactly the one U18 clause** and nothing else.

### ⚠️⚠️ THE EIHL CASEBOOK FOOTER SPLICE CONTAINS A **FORM FEED**, AND STRIPPING HEADERS IS NOT ENOUGH

Measured 22 September 2026. The standing advice here — *delete the `MOTORPOINT EIHL CASEBOOK` lines and
the bare page-number lines, then flatten* — **is incomplete.** The actual splice is:

```
…along the sides\n\nMOTORPOINT…1.0 010826\n\n8\n\n\fso\nthat it cannot be flipped up.
```

⚠️ **There is a form feed (`\f`) glued to the first word after the page number.** Strip only the header
and number lines and the flattened text reads `…alongthesides` + `\fsothatitcannotbeflippedup` — so a
search for `alongthesidessothatitcannotbeflippedup` returns **0 even after cleaning**, and the zero looks
like a finding.

⚠️⚠️ **THE METHOD THAT CAUGHT IT IS THE POINT, AND IT SHOULD BE STANDARD FOR EVERY NEGATIVE:** the agent
picked a **control phrase it KNEW spanned a splice**, cleaned, and **refused to trust any zero until the
control returned 1.** Its first cleaning scored the control at 0; adding `\f` to the strip set scored it
at 1. **Only then did it report `knee` 0, `clip` 0, `lowhit` 0 as real.**

**So: before asserting an absence in any spliced extraction, validate the cleaning against a string you
already know is there.** A zero from an unvalidated cleaning is not evidence of anything.

### ⚠️⚠️ THE `crt6` SIGNATURE, HIT LIVE AGAIN — BAUER'S PROTECTIVE BOOKLETS ARE IMAGE-ONLY

Measured 22 September 2026. **All three Bauer protective booklets: HTTP 200, 3.3–3.6 MB, 19–20 pages —
and 937–952 BYTES from `pdftotext`.** The extraction holds only hyperlink annotations and
`CAN/BNQ 9415-370`. **None of the instructions.**

⚠️⚠️ **`grep -i wash` returns 0 — while the Maintenance paragraph EXPLICITLY PERMITS machine washing.**
A grep-only pass would have reported *"Bauer says nothing about washing"*, which is **a false negative
pointing the wrong way**: it would have licensed the corpus's existing advice instead of qualifying it.

**This is the `crt6.txt` signature exactly** — a multi-megabyte PDF yielding a kilobyte of page
furniture. **Render with `pdftoppm` and read the pages.** What that actually found:
*"can be machine washed at cold temperature (30°C) with like colors. Close fasteners before washing.
Do not use bleach… **Do not tumble dry**, do not iron…"* ⚠️ **A long hot cycle and a tumble dry both sit
outside that, and the corpus was recommending the longest cycle.**

⚠️ **And a gap worth knowing before anyone re-derives it: Bauer publishes NO care booklet for shoulder,
elbow or shin pads.** Its manuals index carries helmets, facemasks, visors, goalie masks and neck
protectors only. **"Bauer's instructions" therefore cannot be generalised to all protective gear**, and
CCM, Warrior and True were not checked.

### ⚠️ PURE HOCKEY: 403 ON FIRST REQUEST, 200 ON RETRY — AND THE RETRY CARRIED THE EVIDENCE

Three Pure Hockey pages returned **403 with ~5.7 KB challenge bodies on the first request and 200 with
209–225 KB on retry** with a referer and a cookie jar.

⚠️⚠️ **The quotation that REFUTED a suspected unsourced claim was only reachable on the retry.** A
single-attempt pass would have filed it as unsourced and **manufactured a false disclosure** — the
failure direction this project records as the hardest to see. *"A 403 is not an absence"* is not
advisory here; it was load-bearing.

### ⚠️⚠️ SOFT-BLOCK TRAP — A PUBLISHER CAN SERVE A BLOCK PAGE WITH **HTTP 200**

Measured 22 September 2026 while trying to reach Rowland 2014. **APA blocks it three ways and two of
them return 200:**

| url | status | bytes | what it actually is |
|---|---:|---:|---|
| `doi.org/10.1037/a0037559` → `doi.apa.org` | **200** | 1,034 | a **stub**, no article |
| `psycnet.apa.org/doiLanding?doi=…` | **200** | 1,032 | an **Incapsula block page** |
| `psycnet.apa.org/record/2016-25506-011` | **200** | 1,037 | a **WAF stub** |

⚠️⚠️ **A STATUS-CODE-ONLY CHECK CALLS ALL THREE LIVE.** This is the inverse of the *"a 403 is not an
absence"* rule already recorded here: **a 200 is not a presence.** The tell is the **byte count** —
roughly 1 KB where an article would be hundreds of KB.

**So a verification row needs the BYTE COUNT, not just the status**, which is why
`project/verification/link_baseline.tsv` carries one. ⚠️ **And a soft-block is not evidence of absence
either** — the paper exists and is simply behind a wall. Record it as **unreachable**, never as missing.

⚠️ **Related, same day:** `pubmed.ncbi.nlm.nih.gov` serves a cookie interstitial as **HTTP 203** with no
article text. The working route is NCBI's **efetch** API:
`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=<PMID>&rettype=abstract&retmode=text`
— it returned the published abstract for five papers whose publisher pages were all blocked. And
`link.springer.com` redirects to `?error=cookies_not_supported` **while still serving the full open-access
text**, so that redirect is not a failure either.

### ⚠️ UNTRUSTED CONTENT, OBSERVED IN THE WILD — non-negotiable 8 doing its job

The **Semantic Scholar API** response for one paper carried a `disclaimer` field reading: *"Paper or
abstract available at `https://api.unpaywall.org/v2/…?email=<INSERT_YOUR_EMAIL>`…"* — **fetched content
asking the reader to insert an email address and fetch elsewhere.**

Almost certainly a benign vendor notice. **The agent did not follow it**, reported it, and reached the
abstract another way. ⚠️ **That is the correct handling and the reason it is recorded here:** the test is
not whether the instruction looked malicious, it is that **retrieved data asked for an action** — and one
involving a personal email address. **Quotable data, never instructions.**

### ⚠️⚠️ FLATTENING TRAP — `neck laceration` BECOMES `necklace`, AND IT IS 100% FALSE POSITIVES

Measured 22 September 2026, while attacking a negative-existence claim about **jewellery** rules.

Whitespace-flattening a rulebook — the standard technique here, because it defeats the mid-sentence
page-footer splice — turns **`neck laceration`** into **`necklace`**. Counted:

| book | flattened `necklace` | actual `neck laceration` | genuine jewellery hits |
|---|---:|---:|---:|
| `iihf_rules_v1.1` | 8 | 8 | **0** |
| `eiha_inhouse_2026-27` | 3 | 3 | **0** |

⚠️ **Every single hit is the false one.** An agent sweeping for `jewel|earring|bracelet|necklace|piercing`
to test whether a book writes a jewellery rule gets **8 IIHF hits and would report a rule that does not
exist** — in the direction that makes the corpus state a rule no book contains, which is non-negotiable 1.

**The genuine finding underneath it:** NHL, IIHF, Hockey Canada, PWHL, CARHA, the In-House Rules and the
EIH R&R write **no jewellery rule at all**. Only **USA Hockey 305(c)** (with an explicit *"Except for
Adults"* carve-out) and **EIHL Casebook 9.5** (no adult exemption) do. That absence is now stated in the
corpus **as an absence, not as a permission**.

⚠️ **The general rule this is an instance of: flattening creates words.** Before believing a flattened
hit, grep the **unflattened** text for the same term and compare the counts. Equal counts of a compound
term and its flattened collision mean every hit is the collision.

### ⚠️⚠️ THIS IS A PUBLISHER-LEVEL PATTERN, NOT ONE DOCUMENT — MEASURED TWICE ON 22 SEPTEMBER

England Ice Hockey republishes a revised document **at a new month directory** and **leaves the old
path serving the old revision at HTTP 200**. Two instances, both confirmed by fetch the same day:

| document | old path | old bytes | new path | new bytes |
|---|---|---:|---|---:|
| NIHL 1 & 2 RoC | `2026/08/…ROC-2026-2027.pdf` | 542,722 | `2026/09/…ROC-2026-2027-**1**.pdf` | 369,646 |
| Coaching Regulations | `2026/08/Coaching-Regulations-2026-2027.pdf` | 358,330 | `2026/09/Coaching-Regulations-2026-2027.pdf` | 544,036 |

⚠️ **Note the two shapes differ:** NIHL gained a `-1` suffix, Coaching Regulations kept its filename
exactly and changed only the directory. **So neither the filename nor the byte direction is a signal** —
the newer file is smaller in one case and larger in the other.

⚠️⚠️ **THE OPERATIONAL RULE: A 200 FROM A RECORDED URL IS NOT EVIDENCE THAT YOU HAVE THE CURRENT
DOCUMENT**, for anything on this host. The only authority is what
`https://englandicehockey.com/rules-and-regulations/` links **today**. ⚠️ And that page is itself
incomplete — it no longer links the *EIH Rules & Regulations* PDF at all, which is still the latest
edition of that document and is still served. **So: check the page for a newer path, and treat the
page's silence as "unlinked", never as "withdrawn".**

**`scripts/fetch_sources.sh` was repointed to the `2026/09` path on 22 September.** ⚠️ **The on-disk PDF
and `.txt` were deliberately NOT refreshed in the same action** — agents were live and grepping `sources/`,
and a source file is shared state. Refresh it between waves, and re-read this table first: **a byte
mismatch against the live URL is expected here and is not evidence of anything.**

**Text-to-PDF ratios, for spotting a failed re-extraction:** `ihuk_junior_roc` **5.0%** · `ihuk_u10_roc`
**2.8%** · `ihuk_nihl_roc` **10.7%** · `ihuk_wnihl_roc` **6.5%**. All four have a real text layer.

⚠️ **PRECEDENCE, ADJUDICATED — the arrow does NOT mean what it looks like.** The Junior ROC prints
*"Order of precedence: IIHF Rules → IHUK In-House Rules → Junior Rules of Competition"*, **and the sentence
immediately above it glosses the arrow**: *"Where the IIHF rules are supplemented or amended by the IHUK
In-House Rules…, the IHUK wording **will take precedence** for domestic competition."* **The later, more
local document wins where it speaks.** ⚠️ **But the question does not arise, which is the stronger answer:
the IIHF book never GRANTS a right to body check — its glossary DEFINES a legal check and Rules 41–48
penalise illegal ones. A competition regulation declaring its games non-checking is ADDING A RESTRICTION TO A
SILENCE.**

⚠️ **SCOPE LIMIT, and it must survive into anything written from these:** these are IHUK/EIH-published league
regulations. **They do NOT settle Scottish domestic competitions outside the IHUK junior structure, BUIHA, or
the EIHL** — ⚠️ **and note the EIHL Casebook, obtained 22 September 2026, does NOT settle the EIHL
checking question either: it is a playing-rule document and contains no `check`/`checking` at all.** PNIHL is named in the NIHL document and was never fetched. NIHL National's own regulations exist
and are unread.** *"Ask your league"* remains right everywhere else.

---

## ⚠️ TWO-COLUMN TABLE SPLICES — a false zero that flattening does NOT repair

**Recorded 22 September 2026, after two agents hit it independently on the same rule.**

`grep -ci "on the crease line"` returns **0** in `nhl_rules.txt`, `nhl_rules_layout.txt`,
`pwhl_rules.txt` and `pwhl_rules_layout.txt` — **and stays 0 when flattened** with `tr -d ' \n\t'`.

**The phrase is there.** `nhl_rules_layout.txt:9286-9290`, Reference Table 14 row E:

> *"E. An attacking player plants himself on | **Goal is allowed.** | the crease line or outside the
> goal crease, as to obstruct the goalkeeper's vision and impair his ability to defend his goal, and a
> goal is scored."*

**The result column interleaves INSIDE the phrase.** The PWHL copy has the same shape at
`pwhl_rules_layout.txt:8319-8326`, in the feminine.

⚠️⚠️ **WHY FLATTENING CANNOT SAVE YOU, AND WHY THIS IS DIFFERENT FROM THE PAGE-FURNITURE SPLICE.**
The furniture splice recorded elsewhere in this file is defeated by alphanumeric-only matching because
the intruder is *page furniture*. **Here the intruder is CONTENT — "Goal is allowed." is words.** No
normalisation removes it, because nothing distinguishes it from the sentence around it.

⚠️ **THIS IS ALSO A DOCUMENTED LIMIT OF `scripts/check_quote_drift.py`.** That tool matches on
alphanumerics only, and its docstring says so as the thing that defeats splices. **It does not defeat
this one.** Two verbatim, correct quotations of row E — the NHL's and the PWHL's — both score
**NOT FOUND**. A `notfound` on a table-row quotation is therefore **not evidence of drift**; read the
`_layout` extraction by eye and confirm positionally.

**So: a zero from a grep against a TWO-COLUMN TABLE means nothing.** Read the `_layout` file.

⚠️ **The scope of this is UNKNOWN and nobody has checked it.** Row E is the row we happened to look at.
**If the interleave is general to Reference Table 14 — or to the IIHF's Appendix IV Table 16 — then
other situation-row claims in this corpus may rest on greps that returned a false zero, and no tool on
disk would say so.** That census has not been run.

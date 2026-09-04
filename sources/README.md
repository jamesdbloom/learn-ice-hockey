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
| `usah_casebook.txt` | **USA Hockey Official Rules and Casebook 2025-29**, 476pp — the separate volume, fetched in round 52. ⚠️ **The corpus cites it** (Rule 630 Situation 41, Rule 607 Situation 2, Rule 203(a) Situation 6), and until `fetch_sources.sh` gained it, it existed only in a session scratchpad — a cited book no later round could rebuild. **Its own "Rule Reference 630(d.3)" in Situations 40/41 names a sub-clause that is not in the printed rule** — the book's error, recorded not repaired. **⚠️ A second, larger instance of the same species: USA Hockey's Rule 610 letters do not agree with themselves.** The printed rule runs **(a)–(g) with no (h)** — confirmed in TWO independent extractions of the same printed text (`usah.txt:3760-3821` and this volume at `:9329-9391`), which agree word for word, so it is not an extraction artefact. But USA Hockey's own summary tables and Casebook situations cite **one letter higher** from goal-displacement onward: body **(d)** goal displacement is cited as **610(e)** (`usah.txt:5199`, Casebook Situations 6 and 7); body **(f)** puck on the netting is cited as **610(g)** (`usah.txt:5210-5211`, Situation 8); body **(g)** the bench minor for the wrong number of players is cited as **610(h)** (`usah.txt:5200`, `:5246`, Situations 4, 9, 10, 11). ⚠️ **So a citation of 610(e) through 610(h) taken from a summary table or a Casebook situation will not match the rule text under that letter.** ⚠️ **The corpus already knows this and handles it, which I got wrong when first writing this entry:** `rules_primer.md` states in terms that the Summary of Penalties says *"610(h)"* while *"the printed Rule 610 runs (a) to (g) and there is no (h)"*, and tells the reader **610(g) "is the number to quote to an official"**; its Sources trailer records that both volumes' Summary uses *"610(e)"* for what the body prints as 610(d), and states that its own citations are **the body's lettering**. `faceoffs.md` records the same. **So the corpus uses the body's letters consistently and discloses the disagreement.** This entry exists so the next reader of the SOURCE meets it here too. **Recorded, not repaired — the disagreement is the book's.** | [cdn3.sportngin.com](https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf) |
| `hc.txt` | Hockey Canada Playing Rules 2026-2028. ⚠️ **Extracted with plain `pdftotext`, not `-layout`** — one of **two** files here that are, the other being `nhl_rules.txt` (verified round 52: `-layout` on the NHL PDF gives a different file, 906,921 bytes and 34,484 diff lines, and does **not** reproduce the MD5-proven extraction) — so its tables interleave and rule numbers can detach from their text. Re-extracting with `-layout` is better evidence and shifts every `hc.txt:NNNN` citation in `project/reviews/`; see the note in `scripts/fetch_sources.sh`. | [cdn.hockeycanada.ca](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) |
| `eiha_inhouse_2026-27.txt` | ⚠️ **IHUK In-House Rules 2026-27, Revision 1, published 25 July 2026 — THE CURRENT BRITISH DOCUMENT.** Obtained 29 Aug 2026. ⚠️ **It contradicts itself on the IIHF edition**: its cover says *"the **Current** IIHF Rule Book"*, its Introduction says *"Version 1.1, published July 2025"* — **which is the 2025/26 book**. Do not cite it as adopting 2026/27. And it **adds a Rule 76 section that 2025-26 did not have**: *"With the exception of face-offs following icings, the linesperson shall **immediately replace the centre for all violations**."* plus *"**Either centre can now put their stick down first** for a face-off."* | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2026/08/IHUK-In-House-Rules-2026-2027.pdf) |
| `eiha_inhouse.txt` | IHUK In-House Rules 2025-26, Revision 1 (27/10/25) | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf) | Superseded; kept for comparison.
| `iihf_coachdev_off_tactics.txt` | IIHF Coach Development Program, Level I (Tactical) — **§21.1 "International Symbols"**, the diagram key the corpus's rink diagrams follow | [hockeyeasternontario.ca](https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf) |
| `huh.txt` | ⚠️ **USA Hockey *Heads Up Hockey* Program Guide — PLAIN `pdftotext`, and that is deliberate.** The authority for the corpus's spinal-injury mechanism (*"this normal curve is removed, and the cervical spine becomes straight"*), cited in `rules_primer.md` and `body_contact_and_battles.md`. Obtained 29 Aug 2026. **Note the book prints *"one of more vertebrae"*** — its own typo, quoted `[sic]`-style in the corpus; and it restates **Tator et al., *Spinal Injuries Due To Hockey*, Can J Neurol Sci 11:34-41**, so the corpus cites the guide as a restater, not as the study. | [cdn4.sportngin.com](https://cdn4.sportngin.com/attachments/document/0138/6193/HUH_Program_Guide_FINAL.pdf) |
| `nhl_rules_2024-25_layout.txt` | The same superseded 2024-2025 edition, `-layout`. ⚠️ **It exists because `nhl_rules.txt` is the PLAIN extraction**, and comparing two editions extracted by different methods would make every diff between them an artefact of the method rather than of the rewrite — which is the one thing this file is held for. Same prohibition: **never cite either for a current rule.** | same |
| `huh_layout.txt` | The same guide, `-layout`. ⚠️ **Kept only to demonstrate why it must NOT be used — see the trap below.** | same |
| `ibc.txt` | USA Hockey **Introduction To Body Contact** (Coaching Education Program) — the authority behind the open-ice check one-stride condition and the §6 boards three-case rule in `body_contact_and_battles.md` | [cdn4.sportngin.com](https://cdn4.sportngin.com/attachments/document/55c1-2114751/IntroductiontoBodyContact.pdf) |
| `eih_rr.txt` | England Ice Hockey Rules & Regulations 2024-2025 | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2024/09/1.0-5.0-EIH-Rules-and-Regulations.pdf) |
| `ukcg.txt` | **UK Concussion Guidelines for Non-Elite (Grassroots) Sport**, November 2024 update. Quoted in `uk_rules.md` for the 999/111 split, the red-flag list and the suspected-neck-injury instruction; **England Ice Hockey has formally adopted it.** **Real text layer, 27pp, ~2.7 KB/page — this one greps honestly**, which is why the disclosure that *helmet* appears **0** times in it is checkable. ⚠️ **Fetch gotcha:** the SRA page carries `<base href="https://sportandrecreation.org.uk/">`, so its `../files/…` hrefs resolve to the **site root** — resolving them against the page path returns a **404**, the shape that manufactures a false dead-link report. England Ice Hockey links the older **April 2023** edition; the sentences the corpus quotes are verbatim in **both**. | [sportandrecreation.org.uk](https://sportandrecreation.org.uk/campaigns-and-policy/concussion/concussion-guidelines-for-grassroots-sport) |
| `crt6.pdf` | **Concussion Recognition Tool 6** — Echemendia RJ, et al., *Br J Sports Med* June 2023;57(11):692-694, doi 10.1136/bjsports-2023-107021. Hosted by England Ice Hockey; the primary is BMJ, which returns **403** to any fetch. ⚠️ **DO NOT GREP THE `.txt`. Its content pages are IMAGES — but it is NOT a scan:** it is an InDesign-produced PDF with a **real text layer** that holds none of the tool's words, so `pdffonts` looks reassuring. `pdftotext -layout` yields **1,535 bytes** and plain `pdftotext` **505** — both of them BMJ stamp and page furniture, **both containing zero content**; the two figures differ by extraction mode, not by version, and **neither is the document**. So the `.txt` looks like a real extraction and contains **none** of the tool — `grep -ci helmet` returns **0** while the tool's *"Remember"* box says *"Do not remove helmet (if present) or other equipment."* **Two agents and a coordinator drew a false negative from that zero.** Render with `pdftoppm` and read the pages. | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2024/02/Concussion-tool-CRT6.pdf) |
| `carha.txt` | ⚠️ **CARHA Hockey Official Rule Book, PRINTED 2020, 99pp — added at round 53's fourth gate pass, after five documents had cited it with the book in NO reproducible source.** Its only record was a row in `project/verification/link_baseline.tsv`. A `rules-verifier` fetched it and located **seven corpus quotations verbatim** — Rules 66(b), 73(d), 39(b), 65(a), **65(b)/(c)**, the red-line-off-side signal and Section Seven item 16 — so the claims were never unverifiable; the book was unregistered. **Governs CARHA-affiliated leagues only, and is never a general rec-hockey standard.** Extracts cleanly with `-layout`. ⚠️ **The 1,008,517 bytes byte-identical to the link baseline is the PDF's size, not the extraction's** — `carha.txt` is 206,667 bytes. The sentence used to place that figure where it read as the extraction size. | [carhahockey.ca](https://carhahockey.ca/wp-content/uploads/2024/01/RuleBk-2020-interactive-1.pdf) |
| `heo_intl_drill_symbols.pdf` | **"International Drill Symbols"** — Hockey Eastern Ontario NCCP Development 1 clinic handout. The **player-symbol** authority for this corpus: `● ○ Forward / Player`, `▲ △ Defender / Player`. ⚠️ **Scanned. `pdftotext` yields the title and nothing else** — the key is image-only, so read the rendered page, never the `.txt`. | [hockeyeasternontario.ca](https://www.hockeyeasternontario.ca/media/ns2jrj0c/dev1_international_drill_symbols.pdf) |

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

**Still not obtained:** the EIHL Casebook, and any EIH or SIHA Rule Bulletin — the
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
> **is** greppable in `nhl_rules.txt`, whose Reference Table 14 does not interleave.
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

## ⚠️ Mode four is now FIVE instances in FOUR books — and one of them is Hockey Canada

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

## ⚠️ Mode four, sixth instance — inside IIHF Rule 1.8, the trapezoid definition itself

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
by a healthcare professional"*. **Reported here, not written into `content/` by the coordinator.**

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

**A ratio under about 0.5% means the document is images.** Run this check before trusting any negative
drawn from a `sources/` file.

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

**Other measured house-word divergences:**

- **CARHA writes `cross bar`, two words**, where every other book closes it. A `crossbar` census
  returned zero **with a working NHL positive control of 16** and was still a false negative.
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
**BVHS goalie manual**, which is linked in `goaltender.md`'s own Sources and would close the last
unread mechanical-risk surface in that file.


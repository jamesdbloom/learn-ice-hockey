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
| `iihf_situations_2026-27.txt` | IIHF Situation Handbook 2026/27, Version 1.0, June 2026. Obtained 29 August 2026; clean extraction, 0 mojibake. **Not yet read against the corpus at all.** | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2026-27_iihf_situation_handbook.pdf) |
| `iihf_situations_v1.1.txt` | IIHF Situation Handbook 2025/26 **v1.1, August 2025 — the current edition OF THE 2025/26 BOOK (the 2026/27 Handbook is the row above), and the one the corpus cites.** Obtained 29 August 2026 from the URL below; self-declares *"Version 1.1, August 2025"* at lines 9 and 8941. Clean `pdftotext -layout` extraction: **0 mojibake, 0 ligatures**. | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) |
| `iihf_situations.txt` | IIHF Situation Handbook 2025/26 **v1.0, June 2025 — superseded, kept for comparison.** ⚠️ **This file came from the URL beside it, which now serves v1.1.** The publisher replaced the document behind an unchanged link: the filename said `v1_1` in July 2026 and served v1.0; in August 2026 the same URL serves v1.1. See the edition note below — four rulings changed, and one reversed. | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) (now serves v1.1) |
| `nhl_rules.txt` | NHL Official Rules 2025-2026 | [media.d3.nhle.com](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) |
| `nhl_rules_2024-25.txt` | NHL Official Rules **2024-2025 — SUPERSEDED, held as dating evidence only.** Fetched 31 August 2026 from the same host as the current book (HTTP 200, 12.7 MB, running heads read `OFFICIAL RULES 2024-2025`). ⚠️ **Never cite it for a current rule.** It exists because the corpus dated the Rule 60 rewrite to a **blog**, which is non-negotiable 2; two editions of primary text now settle it. 2024-2025 Rule 60.1: *"A 'high stick' is one which is **carried above** the height of the opponent's shoulders"*; 2025-2026: *"one which **contacts** an opponent above the shoulders, **provided their shoulders are at waist level or higher**"*. 60.3 changed with it; 60.2 is identical in both. ⚠️ **It dates the first edition carrying the change and nothing more** — the NHL book has no rule-change summary and dates no rule, and no edition before 2024-2025 has been consulted, so how long the older wording stood is **not established**. | [media.d3.nhle.com](https://media.d3.nhle.com/image/private/t_document/prd/yikcdsxofkmgsrhjl3di.pdf) |
| `usah.txt` | USA Hockey Official Playing Rules 2025-29. ✅ **Verified against the publisher PDF, 29 August 2026** — re-fetched and re-extracted with `pdftotext -layout`, and the result is **byte-identical, MD5 `04b8fae8b682136701fb573a14500af7`**. So this file *is* the `-layout` extraction, there is no second view to compare against, and **the hyphenation trap that affects `nhl_rules.txt` and `hc.txt` does not apply here.** Recorded because an agent named "a flattened re-extraction of the USA Hockey PDF" as the one check it could not run to close a negative existence claim — it has now been run, and it changes nothing. | [cdn2.sportngin.com](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) |
| `usah_casebook.txt` | **USA Hockey Official Rules and Casebook 2025-29**, 476pp — the separate volume, fetched in round 52. ⚠️ **The corpus cites it** (Rule 630 Situation 41, Rule 607 Situation 2, Rule 203(a) Situation 6), and until `fetch_sources.sh` gained it, it existed only in a session scratchpad — a cited book no later round could rebuild. **Its own "Rule Reference 630(d.3)" in Situations 40/41 names a sub-clause that is not in the printed rule** — the book's error, recorded not repaired. | [cdn3.sportngin.com](https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf) |
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
| `carha.txt` | ⚠️ **CARHA Hockey Official Rule Book, PRINTED 2020, 99pp — added at round 53's fourth gate pass, after five documents had cited it with the book in NO reproducible source.** Its only record was a row in `project/verification/link_baseline.tsv`. A `rules-verifier` fetched it and located **seven corpus quotations verbatim** — Rules 66(b), 73(d), 39(b), 65(a), **65(b)/(c)**, the red-line-off-side signal and Section Seven item 16 — so the claims were never unverifiable; the book was unregistered. **Governs CARHA-affiliated leagues only, and is never a general rec-hockey standard.** Extracts cleanly with `-layout`; 1,008,517 bytes, byte-identical to the link baseline. | [carhahockey.ca](https://carhahockey.ca/wp-content/uploads/2024/01/RuleBk-2020-interactive-1.pdf) |
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
| Rule numbers | **472 in each, identical sets** — nothing renumbered |
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

It also confirms the stick-order change independently: *"**Either centre can now put their stick
down first** for a face-off"* — and the word *"now"* is IHUK flagging it as new.

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

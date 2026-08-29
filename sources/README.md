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
| `iihf_situations.txt` | IIHF Situation Handbook 2025/26 **v1.0** (the file self-declares *"Version 1.0, June 2025"* at lines 9 and 8941 — the URL filename says `v1_1`, the document does not; v1.1 has never been obtained, as the note below says) | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) |
| `nhl_rules.txt` | NHL Official Rules 2025-2026 | [media.d3.nhle.com](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) |
| `usah.txt` | USA Hockey Official Playing Rules 2025-29 | [cdn2.sportngin.com](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) |
| `usah_casebook.txt` | **USA Hockey Official Rules and Casebook 2025-29**, 476pp — the separate volume, fetched in round 52. ⚠️ **The corpus cites it** (Rule 630 Situation 41, Rule 607 Situation 2, Rule 203(a) Situation 6), and until `fetch_sources.sh` gained it, it existed only in a session scratchpad — a cited book no later round could rebuild. **Its own "Rule Reference 630(d.3)" in Situations 40/41 names a sub-clause that is not in the printed rule** — the book's error, recorded not repaired. | [cdn3.sportngin.com](https://cdn3.sportngin.com/attachments/document/4f1a-3442850/2025-29_USAH_Playing_Rules___Casebook.pdf) |
| `hc.txt` | Hockey Canada Playing Rules 2026-2028. ⚠️ **Extracted with plain `pdftotext`, not `-layout`** — one of **two** files here that are, the other being `nhl_rules.txt` (verified round 52: `-layout` on the NHL PDF gives a different file, 906,921 bytes and 34,484 diff lines, and does **not** reproduce the MD5-proven extraction) — so its tables interleave and rule numbers can detach from their text. Re-extracting with `-layout` is better evidence and shifts every `hc.txt:NNNN` citation in `project/reviews/`; see the note in `scripts/fetch_sources.sh`. | [cdn.hockeycanada.ca](https://cdn.hockeycanada.ca/hockey-canada/Hockey-Programs/Officiating/Downloads/2026-28-hc-rulebook-e.pdf) |
| `eiha_inhouse.txt` | IHUK In-House Rules 2025-26, Revision 1 (27/10/25) | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf) |
| `iihf_coachdev_off_tactics.txt` | IIHF Coach Development Program, Level I (Tactical) — **§21.1 "International Symbols"**, the diagram key the corpus's rink diagrams follow | [hockeyeasternontario.ca](https://www.hockeyeasternontario.ca/media/n4pf15hp/iihf_coachdev_off_tactics.pdf) |
| `ibc.txt` | USA Hockey **Introduction To Body Contact** (Coaching Education Program) — the authority behind the open-ice check one-stride condition and the §6 boards three-case rule in `body_contact_and_battles.md` | [cdn4.sportngin.com](https://cdn4.sportngin.com/attachments/document/55c1-2114751/IntroductiontoBodyContact.pdf) |
| `eih_rr.txt` | England Ice Hockey Rules & Regulations 2024-2025 | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2024/09/1.0-5.0-EIH-Rules-and-Regulations.pdf) |
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

**Still not obtained:** the IIHF Situation Handbook at v1.1 (only the v1 file is
here), the EIHL Casebook, and any EIH or SIHA Rule Bulletin — the In-House Rules
say bulletins are issued from time to time, and none has been read.

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

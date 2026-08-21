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
| `iihf_rules.txt` | IIHF Official Rule Book 2025/26 **v1.1, July 2025** — the edition Britain adopts | [rbihf.be mirror](https://assets.rbihf.be/files/u/medical/e913d88111eb7abbd52d8c771a25d749.pdf) (see below) |
| `iihf_rules_v1.0.txt` | IIHF Official Rule Book 2025/26 v1.0, May 2025 — superseded, kept for comparison | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/4_sport/officiating/rule_book/25_26/2025-26_iihf_rulebook_19052025-v1.pdf) |
| `iihf_situations.txt` | IIHF Situation Handbook 2025/26 v1.1 | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) |
| `nhl_rules.txt` | NHL Official Rules 2025-2026 | [media.d3.nhle.com](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) |
| `usah.txt` | USA Hockey Official Playing Rules 2025-29 | [cdn2.sportngin.com](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) |
| `hc.txt` | Hockey Canada Playing Rules 2026-2028 | Hockey Canada |
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

**Where it came from, and why that matters.** The IIHF's own published link
serves **v1.0** and has done since 2 June 2025 (`Last-Modified` confirms it),
and its rulebook index pages sit behind a Cloudflare bot challenge. The v1.1
copy here is the **Royal Belgian Ice Hockey Federation's** mirror:

    https://assets.rbihf.be/files/u/medical/e913d88111eb7abbd52d8c771a25d749.pdf

That is weaker provenance than the IIHF's own server, so it was verified on
receipt rather than trusted. **If a copy becomes available from iihf.com
directly, prefer it.**

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

PDFs are converted with `pdftotext -layout`, which preserves the column
structure the rulebooks use for penalty tables. Without `-layout` the tables
interleave and rule numbers detach from their text.

Re-extract one file:

```sh
pdftotext -layout sources/iihf_rules_v1.1.pdf sources/iihf_rules.txt
# then repair the ligatures — see the edition note above
python3 -c "p='sources/iihf_rules.txt'; t=open(p).read(); open(p,'w').write(t.replace(chr(26176)+chr(26928),'fi').replace(chr(26176)+chr(27668),'fl'))"
```

**A 403 is not an absence.** USA Hockey's PDFs need a browser user-agent plus a
`usahockey.com` referer; `iihf.com` challenges robots and serves browsers. The
fetch script sets both.

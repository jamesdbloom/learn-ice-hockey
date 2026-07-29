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
| `iihf_rules.txt` | IIHF Official Rule Book 2025/26 **v1.0, May 2025** | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/contentimages/4_sport/officiating/rule_book/25_26/2025-26_iihf_rulebook_19052025-v1.pdf) |
| `iihf_situations.txt` | IIHF Situation Handbook 2025/26 v1.1 | [blob.iihf.com](https://blob.iihf.com/iihf-media/iihfmvc/media/downloads/officiating%20files/situation%20handbook/2025_iihf_situationhandbook_17082025-v1_1.pdf) |
| `nhl_rules.txt` | NHL Official Rules 2025-2026 | [media.d3.nhle.com](https://media.d3.nhle.com/image/private/t_document/prd/slwjuaqwmuvj5bkplixo.pdf) |
| `usah.txt` | USA Hockey Official Playing Rules 2025-29 | [cdn2.sportngin.com](https://cdn2.sportngin.com/attachments/document/945a-3442848/2025-29_USAH_Playing_Rules.pdf) |
| `hc.txt` | Hockey Canada Playing Rules 2026-2028 | Hockey Canada |
| `eiha_inhouse.txt` | IHUK In-House Rules 2025-26, Revision 1 (27/10/25) | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2025/11/IHUK-In-House-Rules-25-26-R1.pdf) |
| `eih_rr.txt` | England Ice Hockey Rules & Regulations 2024-2025 | [englandicehockey.com](https://englandicehockey.com/wp-content/uploads/2024/09/1.0-5.0-EIH-Rules-and-Regulations.pdf) |

---

## Missing, and it matters

### IIHF Official Rule Book 2025/26 **Version 1.1, July 2025**

**This is the edition Britain actually plays under.** The In-House Rules adopt
*"the IIHF Official Rule Book 2025–2026 (Version 1.1, published July 2025)"*.
Every IIHF quotation in this corpus is verified against **v1.0**.

Attempted on 29 July 2026 and not obtained:

- The IIHF rulebook listing pages — `/en/statichub/4719/rules-and-regulations`
  and `/en/statichub/6323/rule-book` — return a **Cloudflare bot challenge** to
  scripted clients and to headless Chrome. They render normally in a real
  browser. Automated retrieval was not attempted further; bot-detection is not
  something to work around.
- Ten plausible direct blob URLs were probed (`-v1.1.pdf`, `-v1_1.pdf`, the
  `downloads/officiating files/` path the Situation Handbook uses, several
  date stamps). All 404. The **v1.0** URL above still returns 200, so the path
  scheme is right and only the filename is unknown.
- England Ice Hockey's own rules page hosts IIHF documents, but its rulebook is
  the **2023** edition (`230524_iihf_rulebook_gesamt_v_6_0_rz_v1.pdf`), not the
  current one.

**To close this, open the IIHF page in a browser, download the 2025/26 rule
book, and drop it here as `iihf_rules_v1.1.pdf`:**

    https://www.iihf.com/en/statichub/4719/rules-and-regulations

Then re-extract and diff it against v1.0. The claims that most need re-checking
are the ones a British reader acts on: **201.1** (the junior-ejection reading
rests on it), **101.1** (women's bodychecking), **27.6/27.7** (the trapezoid
numbering), **9.12** (neck protector), **42.1** (charging), **81.4/81.6**
(icing), **84.4** (shootouts).

Until then, `content/foundation/uk_rules.md` states the gap where a reader can
see it.

---

## Extraction

PDFs are converted with `pdftotext -layout`, which preserves the column
structure the rulebooks use for penalty tables. Without `-layout` the tables
interleave and rule numbers detach from their text.

Re-extract one file:

```sh
pdftotext -layout sources/2025-26_iihf_rulebook_19052025-v1.pdf sources/iihf_rules.txt
```

**A 403 is not an absence.** USA Hockey's PDFs need a browser user-agent plus a
`usahockey.com` referer; `iihf.com` challenges robots and serves browsers. The
fetch script sets both.

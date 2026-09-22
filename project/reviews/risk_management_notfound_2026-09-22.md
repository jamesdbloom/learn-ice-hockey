# The `notfound` bucket in `risk_management.md` — the brief's alarm was backwards — 22 September 2026

## ⚠️⚠️ BRIEF ERROR THIRTY — and it is the corpus's WORST failure direction

The brief said of the Swiss zone-entry dataset: *"a named analyst, a 56,700-entry figure and specific
xG values, with no on-disk source — exactly the shape non-negotiable 1 exists for. **Start there.**"*

**It is the best-sourced passage in the document.**

All six Chatel fragments located **verbatim in rendered body**, correct author, correct date, correct
scope. The page returned **HTTP 200, no redirect**, and **the URL was in the document's Sources
trailer the whole time.**

⚠️ **`notfound` measured the absence of a `sources/*.txt` file, not the absence of evidence.** The
coordinator read a tool's structural limitation as a fabrication risk and pointed an agent at the
strongest passage in the file. **That is the round-59 species: making the corpus look LESS supported
than it is** — the failure direction no reviewer stops on, and the one every other convention here
guards against.

**The passage is better than the brief that doubted it, in two ways nobody asked for:**
- ⚠️ **The corpus does NOT credit Chatel with the two-for-one entry finding his own page attributes
  to Corey Sznajder's RITSAC 2018 presentation.** That is the exact restater trap this corpus has
  been burned by, and this document avoided it unprompted.
- ⚠️ **The corpus preserves the source's own grammatical slip** (*"nobody think about the dozens of
  possessions…"*) without a `[sic]`, rather than silently tidying a quotation.

**One nuance recorded, and it is the source's fault not the corpus's:** the page states its sample
**twice and inconsistently** — *"our database of 56,700 zone entries"* early, *"over 56,700 **5v5**
zone entries"* later. **The corpus quotes the 5v5 sentence, which is the one matching the scope it
attaches.** Correct choice.

## 🔴 The one real defect — an undisclosed verb change, 4 sites across 2 documents

**USA Hockey Rule 601(a)(4)** reads *"**Shoots** the puck after the whistle, if in the opinion of the
Official such shot was avoidable."* **The corpus quotes it as *"Shooting the puck after the
whistle…"*** — inflected, inside quotation marks, undisclosed. The string occurs **0 times** in
`usah.txt`, `usah_casebook.txt` and `hc.txt`.

Rule number right, tier right (unsportsmanlike minor), substance right. **Only the verb is
undisclosed** — and it is **not** the accepted Shape-1 house-style lowering, which is case-only.

⚠️ **Why no checker saw it:** alphanumeric normalisation makes `Shooting…` fail to match `Shoots…`
**at all**, so it landed in `notfound` ("no source on disk") rather than `flagged` ("drifted").
**The bucket everyone treated as a limitation was hiding a real defect inside itself.**

**The corpus already has the convention**, used twice within six lines of one site: `gain[ing]` at
`:669`, `tak[ing]` at `:675`. Sites: `risk_management.md:359` and `:881`, **and
`on_ice_communication.md:175` and `:648`** — ⚠️ **the agent correctly refused to repair its own two,
because a one-file fix is a half-propagation.** Dispatched as one agent owning both files.

## Full classification of the 24 — the bucket is mostly structure, not absence

| Class | Count | What it is |
|---|---|---|
| Genuinely external, **refetched and verified** | 8 | 4 URLs, all HTTP 200, all fragments verbatim |
| **On disk but unGREPPABLE** | 4 | page furniture spliced *inside* the sentence |
| **Multi-letter disclosed insertion** | 3 | `gain[ing]`, `tak[ing]` — correct, tool blind |
| **Corpus-internal quotation** | 1 | quoting a sibling document |
| **Not quotations at all** | 4 | coaching maxim, inner speech |
| Trailer duplicates | 6 | of the above |

⚠️ **THE TOOL'S DOCSTRING IS WRONG ON ONE POINT.** It claims alphanumeric normalisation *"defeats
the page-furniture splice"*. **It does not** — these splices insert alphanumeric **words**:
`iihf_situations.txt` splices `SECTION · OHTER INFRACTIONS` mid-sentence, and `usah.txt` splices
`72 USA Hockey Rulebook 2025-29.indd 72 2/14/25 9:28 AM Goals and Assists` mid-sentence.

⚠️ **AND EVERY CORPUS-INTERNAL QUOTATION SCORES `notfound` BY CONSTRUCTION**, because the tool
searches only `sources/*.txt`. Cross-document quotations that have drifted from their owner are
invisible to it. **Only one surfaced here, by accident.**

## Upheld on attack

- **The `:365` CARHA paragraph** — all four quotations verbatim; and its **negative existence claim**
  (*"Rule 75(b) is the only clause reaching one thrown out of the playing surface"*) was **tested**:
  every `throw*` hit near out-of-play language is Note 2, 75(b) itself, or Rule 83(d) which is about
  throwing a **stick**. **The claim holds.** Only the four curly apostrophes are an issue, and none
  sits inside a quotation.
- **Hockey Canada Interpretation 4 has exactly three numbered items and none mentions height** —
  the load-bearing claim in the sentence quoting it.

## Minor, flagged rather than dismissed

`:675` puts a terminal period inside the quote marks where the source continues *", assess a Minor
penalty for Handling the Puck"*. Low severity — the elided text is only the consequence and the
surrounding prose states it — **but it is the meaning-changing shape.**

## `link_baseline.tsv` — updated by the coordinator, with a hypothesis REFUTED on the way

Three rows refreshed and one added. ⚠️ **The prior byte counts were ~4× smaller, and the
coordinator's first hypothesis was the gzip-transfer-size artefact already documented on the AU row
today. IT WAS TESTED AND REFUTED:** compressed 146,996 against uncompressed 145,466 on
hockey-graphs — **both ~146k**, so compression does not explain a 38,187 baseline.

⚠️ **The cause has NOT been determined, and is not invented in the note.** Two fetches minutes apart
also differed by 1,530 bytes. **Recorded: byte count is not a tripwire on these hosts, and the
quotations were verified by locating them, not by byte match.** This is the AU-row lesson applied —
*a prior verifier's explanation was fabricated; its conclusion was right and its reason was invented.*

## What this method could not have found

1. ⚠️ **Chatel's model is unauditable.** The xG values come from an **unpublished model over a
   proprietary, manually-tracked dataset**; nobody has replicated it, the tracking definitions are
   not published, and one tracker's *"controlled entry"* is a judgement call. **The corpus's only
   measured turnover price is a single-source dependency no refetch can test.** The document's scope
   caveat is honest; the numbers underneath it are not checkable.
2. **Extractions were checked, not the PDFs.** Where an extraction silently dropped text, a
   "verbatim" verdict inherits that. **No PDF was rendered with `pdftoppm`.**
3. **Rule CURRENCY was not verified** — that 601(a)(4), CARHA 55(a)/75(b) and HC Interpretation 4
   are still in force and were not amended after the editions on disk.
4. **The 20 `flagged` entries were not read**, only accepted under the Shape-1 house-style ruling.
   If any is a misclassified Shape 2, 3 or 4, it was missed.
5. ⚠️ **The ~277 `clean` fragments have not been attribution-checked by anyone** — and **the defect
   that was found is a near neighbour of that class.**

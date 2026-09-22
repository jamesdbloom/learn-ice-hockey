# Quote drift in `skating.md`, and what the `notfound` column actually contains — 22 September 2026

## The brief could not be refuted, which is rare enough to record

Every premise held: the tool output was exactly as quoted, all four transcriptions were
character-exact against the sources on disk, and all four were one class — **a source
sentence's initial capital silently lowered** to splice the quotation into the document's
own sentence.

**One refinement rather than a refutation.** Two of the four quote a **bullet-item**
capital from a USA Hockey teaching-point list, not a running-sentence capital. The
convention still applies — it is still the source's own capital, silently altered — but the
brief's phrase *"spliced mid-sentence"* described the *document's* sentence, not the
source's structure.

## Repaired — four lines, `content/technique/skating.md` only

| Line | Source | Now |
|---|---|---|
| 29 | `huh.txt:414`, also `ibc.txt` | `*"[s]kating into the boards at an angle…"*` |
| 62 | `ibc.txt:702`, `:712` | `*"[s]tanding too upright with your feet together"*` |
| 233 | `page_1975.txt:2838` | `*"[t]he mean total recovery time of the skate blade"*` |
| 958 | `page_1975` (flattened) | `*"[t]he smallest recorded angle at the knee ranged from 95-114 degrees…"*` |

**The bracket form was already this document's convention** — `:258`, `:605` (×4), `:848`,
`:869`, `:921`, `:944` (×2), `:954`. **The four hits were the outliers, not the innovation.**

⚠️ **The document was internally inconsistent in exactly these two quotations.** The Pagé
*"smallest recorded angle"* sentence appears at `:231` capitalised and verbatim and at `:958`
silently lowered; *"mean total recovery time"* appears at `:958` capitalised and at `:233`
lowered. **Same file, same sentence, two treatments.** The repair makes the document agree
with itself.

**Listener cost measured, and it is zero.** `md_to_speech.py` strips the brackets —
`*"[l]earning…"*` renders as *"learning…"*. Re-rendered and confirmed the four spoken lines
are unchanged. **No facts line was touched** (all 60 fence lines checked; all four hits sit
outside blocks), so no cap measurement was needed and none was made.

## ⚠️⚠️ THE FINDING THAT GENERALISES — the disclosure convention MANUFACTURES `notfound`

`:954` writes *"…requir[ing] IIHF approval"*. Both IIHF extractions carry *"…**require** IIHF
approval."* **The quotation is verbatim-correct, and the tool files it under `notfound`.**

Because `check_quote_drift.py` normalises to alphanumerics, a **leading** insertion is
harmless — `[a]ny` normalises to `any` and matches — but a **MID-WORD** insertion changes the
stream: `requiring` ≠ `require`.

⚠️ **So `notfound` is NOT simply "no source on disk."** It also contains correct quotations
using the corpus's own disclosed-insertion convention inside a word. **Anyone reading that
column corpus-wide must know this, or they will chase verbatim-correct quotations as
missing sources.**

## The second question, answered by measurement rather than by reading

All 64 `notfound` fragments were normalised and tested against **all 38 `sources/*.txt`**.

**Full matches on disk: 0. Partial: 1** (the `requir[ing]` case above).

**So 63 of 64 are the recorded blind spot** — Athletes Untapped, Cutting Edge Ice Academy,
Laura Stamm, Prodigy Hockey, The Hockey Institute, NTC Hockey, How To Hockey, Robby Glantz,
Hockey Monkey, Wikipedia, HECC, Look Up Line, USA Hockey Goaltending's web pages, Hockey
Alberta. **No local source exists for any of them and the tool is right to say so. Nothing
was hiding inside the limitation.**

**One case the question's framing had no slot for.** `:956` — *"End Zone Faceoff Spot &
Circle"* — the source PDF **is** on disk, but the string is lettering inside the *"RINK
LINES"* infographic on page 222, so it greps 0 in both IIHF text extractions. ⚠️ **This is
the `sources/README.md` image-vs-text distinction, not an absence — verifiable with
`pdftoppm`. The agent did not render it and did NOT report it as verified.**

Three further entries are not external quotations at all: `:557` is the corpus quoting **its
own phrase** back in a facts `Never:` line; `:944` carries a 1989 *Washington Post* headline
and a **Wikipedia maintenance banner**.

## Adjudicated by hand, because the tool explicitly cannot

⚠️ **`check_quote_drift.py` keeps the closest match across ALL sources, so attribution drift
scores clean.** `sources/README.md` flags this for the huh/ibc pair specifically. One pair
was adjudicated: `:125` credits *Introduction To Body Contact*, `:29` says only *"(USA
Hockey)"* — **both books print the sentence**, so both attributions are sound. `:125`'s
ellipsis splice was also verified as a correct elision.

## What this method could not have found

1. **Whether any of the 63 off-disk quotations is accurate at all.** Only that no local
   source can adjudicate them. ⚠️ **A fabricated quotation from a coaching page scores
   identically to a perfect one — `notfound` is silence, not a pass.** Only a refetch
   (`source-verifier`) reaches them.
2. **Attribution drift in the 36 `clean` fragments.** One pair adjudicated by hand; **the
   other 35 were not checked.**
3. **Whether `:956`'s infographic lettering says what the document says it says.** Not
   rendered, not read.
4. **Whether this defect exists in the other 38 documents.** ⚠️ **Four instances survived in
   a document that ALREADY used the bracket convention at nine other sites** — so a
   corpus-wide run is the obvious next dispatch, and its `notfound` column must be read with
   the `requir[ing]` finding in hand, not just its `DRIFT` column.
5. **Elision that changes meaning.** One splice verified by hand; **the tool cannot see
   elision at all.**

# Round 76 — everything reported success

12 September 2026. A diagram round, a document split, a rename, and a build cache.
**The defining shape of the round: nine separate things were broken while reporting success**, and
most were found by an agent reading a number rather than by any gate.

## The nine silent passes

| what looked fine | what was true | found by |
|---|---|---|
| A raster cache shipped and running | **It never hit once.** The pid was inside the hashed argv, so every key was unique. Build exited 0, looked normal. | Its author ran a warm build and **read the number** |
| `grep` returning nothing for a pattern | **Literal NUL bytes** in the source made grep silent for *every* pattern. Indistinguishable from "not there". | `file` reporting `data` instead of text |
| Three builds running concurrently | All sharing **one fixed temp file**, `.raster.html` — a right filename over the wrong picture, exit 0 | An agent ran `ps` before trusting its own output |
| A page whose content had "disappeared" | A **stale `dist` from 06:35** referencing a diagram retired hours earlier | Checking the source before believing the symptom |
| `check_geometry.py` after a rename | **`FileNotFoundError`** — it hard-codes the owner path | Running it and reading the traceback |
| A caption saying "the blue line is at the left" | The left edge is the **centre red line**; the blue line is **25.96%** across | Reading the built `viewBox` against `rink.json` |
| `check_disclosures.py` returning **zero** hits on 5,047 words | The page had **dropped the labels**, not sourced the claims | `content-reviewer`, by reading |
| One document's Sources trailer | **Voiced in full to listeners** — `game_management.md` opened *"Sources — first assembled"*, and the drop is keyed on `startswith("sources retrieved")` | `commit-gate`, incidentally |
| A `--no-cache`-less recovery rebuild | Would have **reused the 201 contended-window PNGs** and certified them | The agent that had just written the cache |

⚠️ **Only two of the nine were caught by a gate.** The rest were caught by someone reading a number
they had no particular reason to doubt.

## The coordinator's own defect rate

**Nine of my briefs had a premise refuted by the agent sent to act on it.** Recorded because the
project's own rule says the briefs are more defective than the corpus, and this round is evidence:

- A **backwards placement rule in eight briefs** — I told agents "never at a section head" when the
  style guide records the owner's instruction as the opposite. Measured: **252 markers before a facts
  block, 2 after.** I then applied my own correction as a sweep over a position whose exception was
  written down *with its measurement* in the file I was editing, and `commit-gate` blocked it.
- **Three stale figures relayed** — a 1,303-char caption median (measured: **1,270**, p75 1,686, max
  4,195), "the two longest captions" (wrong pair), and a `~6 min` build time (measured: **8:21–8:58**).
- **"31 of 32 fact lines distinct"** — all 32 are, once you account for the label.
- **A "genuine disagreement"** between two documents that was a **pronoun artefact**.
- **A borrow claim from a two-word grep** — `token pressure` is ordinary prose on three pages.
- **Character counts wrong in both directions** on a label fix.
- **"Eleven `Rule:` facts"** where there are seven — in the passage a placement argument rested on.
- ⚠️ **TWICE the same shell-loop quoting bug** made a passing `check_links.py` look like exit 2.
- ⚠️ **I recorded that a figure was unverified and then shipped it into a voiced-alone layer.**
  *"two different things about twenty feet apart"* reached Common Mistakes while the plan row saying
  nobody had checked it was still open.

## What the round produced

**Four diagrams drawn** (`rush-2-on-2`, `breakout-against-1-3-1`, `nz-hinge`,
`legal-route-through-traffic`), **one borrow placed**, and **seven triage rows refuted** — one an
accepted cut re-commissioned, one rejected by name in its own module, one already drawn *and labelled*.
⚠️ **Zero new diagrams would have been the correct outcome for those seven, and refute-the-brief is
what produced that.**

**A document split**: **eight** `## A Note on Language` sections consolidated **by term** (not by source —
they were 31-of-32 distinct, not nine copies), plus §8 Glossary moved from the Rink Map.
**26 terms collided** when the halves met; each was resolved and reported, nine becoming pointers.
⚠️ **The cost was stated rather than hidden: *"a pointer is dead air for a listener."***

**A rename** with a redirect, 108 path-based links, and **the published podcast GUID pinned** so
subscribers do not lose a 60-minute episode.

**A raster cache**: 494–510 s → **0–1 s** warm, verified against a control nobody asked for — two
old-code builds byte-identical across 406 artefacts, proving Chrome deterministic, without which a
byte comparison proves nothing.

## What this round could not have found

**No coach has seen any of it.** Two diagrams put a trap's wall men at |y| = 33 and 36 and agree with
each other, so if they are wrong they are wrong in two places and consistency will never catch it.
**Nobody has heard the audio** — every "reads correctly alone" judgement was made on SSML, on paper.
**The 54 byte-identical glossary entries moved unchanged, so an error in them moved unchanged too** —
and a verbatim move is exactly the shape that makes a reviewer skip re-reading. **No `source-verifier`
has refetched a citation**, and provenance is the only defect class ever found in this corpus's
body-verified citations.

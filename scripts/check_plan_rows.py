#!/usr/bin/env python3
"""Report OPEN plan rows whose own quoted evidence is no longer in the tree.

WHY THIS EXISTS
---------------
In one session, SEVEN open rows in `project/plans/OPEN_ITEMS.md` turned out to
have been fixed by earlier rounds and never closed. Agents were dispatched at
three of them and spent their time verifying fixes instead of hunting hazards.
Tier 1 carries its own warning of a **50% wrong-premise rate** and names the
cause: planning text copied forward from a round's *carried-findings* document
instead of its *outcome*.

⚠️ THE DEFENCE THE PLAN ALREADY PRESCRIBES AND NOBODY FOLLOWS: "close the row in
the commit that closes the finding, and link the review record rather than
restating its text." A restated row goes stale silently. This tool is the
cheapest partial substitute.

WHAT IT DOES
------------
Many rows cite a file and quote the exact string they claim is wrong:

    `rules_primer.md:359` teaches *"take the lift lower"*

That is a checkable assertion. If the quoted string is not in the named file,
the row is stale, the line has moved, or the text was reworded -- and all three
mean the row needs re-reading before anyone is dispatched at it.

⚠️ WHAT A HIT DOES **NOT** MEAN
-------------------------------
A hit is NOT proof the row is closed. It proves only that the row's evidence no
longer reads as written. The row may still be right about a defect that was
reworded rather than fixed. ⚠️ **The inverse is more dangerous: a row whose
string still matches can be just as stale**, because a row can quote text that
is still present and be wrong about what is wrong with it. Two of the seven
found this session were of exactly that kind, and this tool would have missed
both.

⚠️ THIS IS A WORKLIST, NOT A GATE. It has no `--strict` and should not gain one.
Rows quote rulebooks, other projects' files, and text they are *proposing* to
write; a proposed replacement is *supposed* to be absent. READ EVERY HIT.

MEASURED PRECISION, because shipping a tool without one is how a checker
manufactures work
------------------------------------------------------------------------
A 20-hit sample of the first tightened version classified as roughly **8
genuine, 10 noise, 2 ambiguous -- about 40%**. The meta-prose filter below
removes a chunk of the noise; the external-source residue cannot be removed and
is the reason the number will never approach a gate's.

⚠️ **The first version of this tool reported 114 hits of 140 and was pure
noise**, for two reasons that are both the tool matching something the plan does
DELIBERATELY: rows name `sources/` files because that is where they read a
rulebook, and a permissive quote pattern tore fragments out of nested markdown
emphasis. **That is the fifth unsound measurement in one session, all failing
the same way, and it is recorded here so the sixth is not written.**

**Anchor a census on STRUCTURE, not on wording.** The one sound census that
session keyed on the shape of a `final_url` field and found sixteen real
defects; the four unsound ones keyed on phrases that the corpus uses in more
than one voice.

MEASURED RECALL, and it is LOW -- read this before relying on the tool
----------------------------------------------------------------------
⚠️ **Against the seven stale rows found BY HAND in the session that prompted
this tool, it catches ONE.** That is the honest number and it should not be
improved by redefining the test.

The misses are structural, not tunable. Six of the seven were stale in a way
this tool cannot see:

* **The text MOVED.** A row cited `rules_primer.md:359` for *"take the lift
  lower"*; the string is alive and well at `:387`. The row's line number was
  stale and its quotation was not.
* **The text was REWORDED INTO CORRECTNESS.** A row quoted *"a perpendicular
  bar"*; the file now reads *"two perpendicular bars"* -- which still CONTAINS
  the quoted substring, so the tool sees a match and says nothing.
* **The row was WRONG ABOUT WHAT WAS WRONG.** The self-narration row quoted text
  that is genuinely present and claimed twenty instances where two exist. No
  string check can reach that.

⚠️ **So this tool detects exactly one failure mode -- text DELETED -- and today's
dominant mode was text MOVED or REWORDED.** It is worth running because deletion
is a real mode and nothing else looks for it, and it is worth distrusting
because six times out of seven the staleness was somewhere it cannot look.

**The only reliable defence remains the one the plan already prescribes and
nobody follows: close the row in the commit that closes the finding, and link
the review record rather than restating its text.**
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PLAN = ROOT / "project" / "plans" / "OPEN_ITEMS.md"

#: A row is open unless it is marked closed. Rows carry ✅ when closed and ⬜
#: when open; 🟡 is used for partly-closed and is treated as open.
OPEN_MARK = re.compile(r"[⬜🟡]")
CLOSED_MARK = re.compile(r"✅")

#: `name.md:123` or `name.md` -- the file the row is making a claim about.
FILE_REF = re.compile(r"`?([A-Za-z0-9_./-]+\.(?:md|py|mjs|ts|astro|css|tsv|txt))(?::(\d+))?`?")

#: Quoted evidence, ITALIC-QUOTED ONLY -- `*"..."*` is this corpus's house form
#: for quoting its own text, and plain `"..."` is overwhelmingly rulebook.
#:
#: ⚠️ THE FIRST VERSION OF THIS TOOL MATCHED BOTH AND REPORTED 114 HITS OF 140,
#: which is noise, not a finding. Two causes, both of them the tool matching
#: something the plan does DELIBERATELY: rows name `sources/` files because they
#: quote rulebooks from them, and a permissive quote pattern tore fragments out
#: of nested markdown emphasis (`**bold**` inside a quote inside a table cell).
#: The fix is to narrow on BOTH axes -- house-form quotes only, and never a
#: source file as the subject.
QUOTED = re.compile(r'\*"([^"*]{15,200})"\*')

#: A quote that still carries markdown scaffolding was torn out of a larger
#: construct and is not a clean assertion about a file's text.
UNCLEAN = re.compile(r'(\*\*|``|\|)')

#: ⚠️ THE DOMINANT NOISE SOURCE, and it cannot be fully removed. Rows quote three
#: different things in the SAME italic-quote form the corpus uses for its own
#: text: the corpus (checkable), an EXTERNAL SOURCE the row is contrasting the
#: corpus against (correctly absent), and an AGENT'S REPORT prose (never in the
#: tree at all). Only the first is a checkable assertion.
#:
#: Report prose is filterable because it is meta and often first-person. An
#: external source quotation is NOT reliably filterable -- a Wikipedia sentence
#: about goaltending styles looks exactly like a corpus sentence about
#: goaltending styles. That residue is why this is a worklist.
META = re.compile(
    r"\b(I |my |this method|needs a decision|should not make|is exactly why|"
    r"there is no reason to think|would find more of these|systematically compares|"
    r"grepping claim-by-claim|a judgement|the corpus's best)\b", re.I
)

#: Rows quote rulebooks constantly and those live in `sources/`, not in the file
#: the row names. Skipping them is what keeps the signal-to-noise usable.
RULEBOOK_HINT = re.compile(
    r"\b(Rule|Situation|Interpretation|Casebook|Appendix|IIHF|NHL|USA Hockey|Hockey Canada|CARHA|IHUK)\b"
)


def candidate_files(text: str) -> list[str]:
    return [m.group(1) for m in FILE_REF.finditer(text)]


#: ⚠️ NEVER a source file. A row naming `iihf_rules.txt` is telling you where it
#: read a RULEBOOK, not making a claim about that file's contents. Treating a
#: source as the row's subject is what produced the first version's noise.
SUBJECT_DIRS = ("content", "project", "scripts", "site")


def resolve(name: str) -> Path | None:
    """A row names a basename; find it under content/, project/, scripts/, site/."""
    p = ROOT / name
    if p.is_file() and p.parts[len(ROOT.parts)] in SUBJECT_DIRS:
        return p
    hits = [q for q in ROOT.glob(f"**/{Path(name).name}")
            if ".git" not in q.parts and "node_modules" not in q.parts
            and q.parts[len(ROOT.parts)] in SUBJECT_DIRS]
    return hits[0] if len(hits) == 1 else None


def main() -> int:
    if not PLAN.is_file():
        print(f"check_plan_rows: {PLAN} not found. Nothing checked. This is NOT a pass.")
        return 0

    # A "row" is a table line or a bullet paragraph. Both are single lines here,
    # which is why this splits on newlines rather than parsing markdown.
    rows = [ln for ln in PLAN.read_text().split("\n") if OPEN_MARK.search(ln)]
    checked = stale = 0
    findings: list[str] = []

    for row in rows:
        if CLOSED_MARK.search(row):
            continue
        files = candidate_files(row)
        if not files:
            continue
        quotes = [q for q in QUOTED.findall(row)
                  if not RULEBOOK_HINT.search(q) and not UNCLEAN.search(q)
                  and not META.search(q)]
        if not quotes:
            continue
        targets = [t for t in (resolve(n) for n in dict.fromkeys(files)) if t]
        if not targets:
            continue
        # ⚠️ Check each quote against EVERY file the row names, not just the
        # first. A row routinely names the file with the defect AND the file
        # that owns the rule, and the quote may belong to either.
        hay = " ".join(" ".join(t.read_text(errors="replace").split()) for t in targets)
        for q in quotes:
            needle = " ".join(q.split())
            checked += 1
            if needle not in hay:
                stale += 1
                names = ", ".join(t.name for t in targets)
                findings.append(f"  {names}\n     row quotes: {needle[:150]}\n"
                                f"     NOT FOUND in the file(s) the row names")

    print(f"check_plan_rows: {len(rows)} open row(s) · {checked} quoted assertion(s) checked")
    if not findings:
        print("every quoted assertion in an open row still appears in the file it names.")
        return 0

    print(f"\n{stale} quoted assertion(s) no longer read as written:\n")
    print("\n\n".join(findings))
    print("\n⚠️  WORKLIST, NOT A GATE. A hit means the row's EVIDENCE has moved,")
    print("    not that the row is closed -- the text may have been reworded")
    print("    rather than fixed, and a row may quote text it PROPOSES to write.")
    print("    ⚠️  And the inverse is not covered: a row whose quote still")
    print("    matches can be just as stale. READ EVERY HIT.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

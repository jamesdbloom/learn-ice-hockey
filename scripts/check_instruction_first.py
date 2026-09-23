#!/usr/bin/env python3
"""Do the summary-layer units LEAD with what a player DOES, or with a tariff?

⚠️ THIS EXISTS BECAUSE `check_tactics_ratio.py` CANNOT SEE THE REPAIR THE OWNER ASKED FOR,
and an agent proved it against its own clean run on 23 September 2026:

    "Rules-bearing WORDS went UP in both (+78 and +73), and that is the honest result of
     doing what the brief asked. Re-ordering moves nothing; the instructions I added sit
     INSIDE units the tool already scores rules-bearing, so every word I wrote to make a
     bullet lead with a tactic is counted as a rules word. The ratio is structurally
     unable to reward this repair. If a future wave is judged on the number it will be
     pushed back toward STRIPPING."

⚠️⚠️ THAT IS THE DANGER THIS TOOL GUARDS AGAINST. Stripping a Common Mistakes bullet is how
this corpus loses a sole-carrier tariff — measured twice. The owner's instruction was never
"fewer rules words"; it was that a reader should meet what to DO first. So measure THAT.

THE TEST: for each unit, skip the bold mistake-name / takeaway-name that opens it, then look
at the FIRST SENTENCE of the body. If that sentence carries a rule citation, a book name or
penalty vocabulary, the unit LEADS WITH A TARIFF. Otherwise it leads with an instruction.

⚠️ WORKLIST, NOT A GATE, AND THE TARGET IS NOT ZERO. Three honest reasons a unit leads with
a rule and is CORRECT:
  - the rule IS the tactic ("never put it over the glass from your own zone"),
  - the unit's whole subject is a book divergence a player must look up,
  - a safety limb that must be heard before anything else.
A high tariff-first count is a CANDIDATE FOR READING. Never sweep this pattern.

⚠️⚠️ THREE KNOWN BLIND SPOTS, ALL MEASURED, AND THE THIRD IS STRUCTURAL AND NOT FIXED.
  1. It scans only ENUMERATED units in these two layers, so a repair in the BODY, the Key focus or
     the Overview is invisible to it. Two agents reported real body-layer repairs as 2->2 and 4->4.
  2. It cannot see a repair made INSIDE a unit whose first sentence was already an instruction --
     which is the commonest repair of all, adding a missing discriminator mid-unit. A backcheck
     repair that reached four layers moved this tool not at all.
  3. ⚠️ SPLITTING A UNIT RAISES THE COUNT WITH NO TEXT CHANGING. An agent split a 547-word Key
     Takeaway -- five takeaways in one -- into three kernels and watched the count go 8 -> 10,
     because material that had been mid-unit became two new units' openers. It returned to 8 only
     after it wrote openers for the new units. So THE METRIC STRUCTURALLY REWARDS LARGE UNITS,
     which is the opposite of the kernel rule the owner asked for. There is no fix inside a
     per-unit measure: the number goes up because there are more units to measure. ⚠️ NEVER JUDGE
     A SPLITTING WAVE ON THIS TOOL. Require the prose account.

⚠️ AND IT CANNOT SEE WHETHER THE INSTRUCTION IS *RIGHT*. The same agent said it plainly:
"I tested whether the instruction is now FIRST, not whether it is RIGHT... A hockey-literate
human reading the repaired bullets aloud is the only test available." This tool measures
position. Nothing here measures craft.
"""
import argparse
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from check_tactics_ratio import RULES_RE, units  # noqa: E402  (shared definitions, one owner)

LAYERS = ("## Common Mistakes", "## Key Takeaways")

# A unit opens with its name in bold: "- **Panicking the puck over the glass.**" or
# "8. **Stand in the goaltender's eyes.**". ⚠️ The NAME is not the instruction and must be
# skipped -- a bullet named "**Taking a penalty to deny a certain goal.**" would otherwise
# score as instruction-first on its title alone.
OPENER = re.compile(r"^\s*(?:[-*]|\d+\.)\s*\*\*(.+?)\*\*[.:]?\s*", re.S)
MARKER = re.compile(r"^[\s>]*(?:⚠️?|❗|\U0001f6ab)\s*")


def first_sentence(text, keep_name=False):
    """The first sentence of the unit, after any leading marker.

    ⚠️ `keep_name` EXISTS BECAUSE THE BOLD NAME MEANS OPPOSITE THINGS IN THE TWO LAYERS, and the
    first version got it wrong for one of them. In Common Mistakes the name is the MISCONCEPTION
    ("Panicking the puck over the glass") and must be skipped. In Key Takeaways the name IS THE
    TAKEAWAY -- KT6 of rules_primer.md is named "Never duck or crouch to avoid a check" -- so
    skipping it scored a pure instruction as tariff-first. Six of ten Key Takeaways hits in that
    one document were this artefact, found by the agent acting on them, which reported that
    "prepending an instruction to these would add a restatement of the name one clause below it".
    """
    t = MARKER.sub("", text.strip())
    m = OPENER.match(t)
    if m and not keep_name:
        t = t[m.end():]
    elif m and keep_name:
        # The name plus whatever follows it, so a name-only instruction scores on the name.
        t = t[m.start(1):]
    t = MARKER.sub("", t.strip())
    # Sentence end: . ! ? then any CLOSING MARKUP, then a space, then a capital.
    # ⚠⚠ THE MARKUP CLASS IS THE WHOLE POINT, AND THE FIRST VERSION OMITTED IT. A bold
    # instruction ends ".**", so a bare `(?<=[.!?])\s+` lookbehind sees "*" before the space
    # and does NOT split -- the "first sentence" then swallowed the instruction AND the
    # tariff sentence behind it. FOUR OF SEVEN hits in the first run were false positives,
    # reading as tariff-first on units that led with an instruction. Caught by reading the
    # --show output before trusting the number.
    # ⚠ A COLON ENDS THE INSTRUCTION AS OFTEN AS A FULL STOP HERE: "Tie it up and take the
    # re-drop straight: your centre is out and a second violation costs..." leads with the
    # instruction and scored tariff-first because the splitter only broke on .!? -- reported
    # by an agent whose own four repairs were then miscounted as failures.
    # ⚠ A COLON TAKES A LOWERCASE CONTINUATION, so it needs its own alternative -- requiring a
    # capital after it (as the full-stop branch must, to avoid splitting "69.3" or an
    # abbreviation) silently failed to split every colon in the corpus, which is how the first
    # attempt at this fix still scored four correct repairs as tariff-first.
    # ⚠ AN EM DASH AND AN OPENING PARENTHESIS END A NAME-AS-INSTRUCTION TOO, and omitting them was
    # the THIRD artefact class in this tool -- after the ".**" lookbehind and the colon. A Key
    # Takeaway named "**The race is to the puck, not the dot** -- under NHL Rule 81.1..." or
    # "**Minors end early...** (Rule 81.6)" is an instruction whose citation follows; both scored
    # tariff-first. Reported by the agent whose own two correct units were counted as failures.
    # ⚠⚠ An earlier attempt widened OPENER's trailing class instead. That was WRONG: OPENER governs
    # what is SKIPPED in Common Mistakes, so it silently swallowed more of those units' bodies and
    # moved the corpus figure without fixing either case. Fix the splitter, not the opener.
    end = (r"(?:[.!?][*_)\u201d\u2019\"']*\s+(?=[A-Z\u201c\u2018*\u26a0])"
           r"|:[*_)\u201d\u2019\"']*\s+)")
    if keep_name:
        # ⚠ EM DASH AND OPENING PARENTHESIS ONLY APPLY TO THE NAME-AS-INSTRUCTION CASE, and
        # scoping them here is the whole point. Allowed everywhere they cut FRAGMENTS out of
        # Common Mistakes bodies -- "It is not --", "The two measured findings on this page --" --
        # which then scored as instructions because a fragment carries no rule words. Measured: 33
        # units flipped, and a hand read of twelve showed roughly a quarter were that artefact.
        # The reported defect was only ever a Key Takeaway whose bold name IS the instruction and
        # whose citation follows after a dash or in brackets.
        end += r"|[*_]*\s*[\u2014\u2013]\s+|[*_]*\s+(?=\()"
    m = re.search(end, t)
    return (t[:m.end()] if m else t).strip()


def scan(root, only=None):
    for path in sorted(pathlib.Path(root).glob("*/*.md")):
        if only and only not in str(path):
            continue
        for layer, text in units(path):
            if layer not in LAYERS:
                continue
            if not OPENER.match(MARKER.sub("", text.strip())):
                continue  # prose paragraph inside the layer, not an enumerated unit
            head = first_sentence(text, keep_name=(layer == "## Key Takeaways"))
            if not head:
                continue
            yield path, layer, bool(RULES_RE.search(head)), head, len(text.split())


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--root", default="content")
    ap.add_argument("--file", help="restrict to one document (substring match on the path)")
    ap.add_argument("--show", action="store_true",
                    help="print each tariff-first opener, longest unit first")
    args = ap.parse_args()

    rows = list(scan(args.root, args.file))
    if not rows:
        print("no enumerated units found")
        return 0

    per = {}
    for path, layer, tariff, head, words in rows:
        d = per.setdefault(str(path), [0, 0])
        d[1] += 1
        if tariff:
            d[0] += 1

    tot_t = sum(v[0] for v in per.values())
    tot_n = sum(v[1] for v in per.values())
    print(f"check_instruction_first: {tot_n} enumerated units in Common Mistakes and "
          f"Key Takeaways across {len(per)} documents\n"
          f"  {tot_t} LEAD WITH A TARIFF ({tot_t * 100 // max(tot_n, 1)}%) · "
          f"{tot_n - tot_t} lead with an instruction\n")

    print(" tariff-first   of   document")
    for doc, (t, n) in sorted(per.items(), key=lambda kv: (-kv[1][0], kv[0])):
        if t:
            print(f"   {t:>4}       {n:>4}   {doc}")

    if args.show:
        print("\n  tariff-first openers, longest unit first:\n")
        for path, layer, tariff, head, words in sorted(
                (r for r in rows if r[2]), key=lambda r: -r[4])[:40]:
            print(f"  {words:>4}w  {path}  [{layer[3:]}]\n        {head[:150]}\n")

    print("\n⚠️  WORKLIST, not a gate. The target is NOT zero -- a rule that IS the tactic,")
    print("   a unit whose subject is a book divergence, and a safety limb that must be heard")
    print("   first are all correct here. A high count is a CANDIDATE FOR READING.")
    print("⚠️  This measures POSITION, not craft. It cannot tell you the instruction is right.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

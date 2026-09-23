#!/usr/bin/env python3
"""How much of each document is RULES rather than TACTICS, by layer.

⚠️ WORKLIST, NOT A GATE. No --strict, and it must never gain one. A rules document is
SUPPOSED to be mostly rules; `rules_primer.md` scoring high is correct, not a defect.

⚠️ IT EXISTS BECAUSE THE OWNER MADE A RATIO THE STANDARD AND NOTHING MEASURED IT.
22 September 2026: "tactics and strategy and how to play should be overwhelmingly the
largest amount of content, as that is what readers want to read most." Five agents each
guessing at "overwhelmingly" is how this corpus's counts went stale in the first place.

⚠️ WHAT IT ACTUALLY COUNTS, AND THE LIMIT IS THE POINT: a unit is scored RULES-BEARING if
it carries a rule citation, a rulebook name, or penalty-tier vocabulary. THAT IS A PROXY
FOR FORM, NOT FOR SUBSTANCE. It cannot tell:
  - a rule that IS the tactic ("never put it over the glass from your own zone") from a
    rule that is background — and the owner's instruction turns on exactly that distinction;
  - a tactical sentence that happens to name a book as a SOURCE for a statistic;
  - a paragraph of pure prose that teaches nothing.
So a high score is a CANDIDATE for reading, never a finding. NEVER SWEEP THIS PATTERN.

⚠️ NO TARGET IS ENCODED HERE ON PURPOSE. The owner said "overwhelmingly"; turning that into
a number nobody agreed is how a figure goes stale and then gets quoted as if it were a rule.
Run it, read the spread, and let a human decide.
"""
import argparse, pathlib, re, sys

BOOKS = r"NHL|IIHF|USA Hockey|Hockey Canada|CARHA|PWHL|EIHL|IHUK|EIHA|SIHA"
RULE_CITE = r"\bRule\s+\d|\b\d{1,3}\.\d{1,2}\b|\b\d{3}\([a-z]\)"
PENALTY = (r"\bminor penalt|\bmajor penalt|\bmatch penalt|game misconduct|\bmisconduct\b"
           r"|penalty shot|\bejected\b|\bejection\b|bench minor|two-minute|delay of game")
RULES_RE = re.compile(f"({BOOKS})|({RULE_CITE})|({PENALTY})", re.I)

LAYERS = ("## Key focus", "## Overview", "## Common Mistakes", "## Key Takeaways",
          "## Check yourself")


def units(path):
    """Yield (layer, text) for each blank-line-separated unit, skipping fences/trailers."""
    layer, infence, buf = "(body)", False, []
    for line in path.read_text(encoding="utf-8").split("\n"):
        if line.startswith("```"):
            infence = not infence
            continue
        if line.startswith("## "):
            if buf:
                yield layer, " ".join(buf); buf = []
            h = line.strip()
            layer = h if any(h.startswith(x) for x in LAYERS) else "(body)"
            continue
        if not line.strip():
            if buf:
                yield layer, " ".join(buf); buf = []
            continue
        # ⚠️ THE SOURCES TRAILER IS NOT PART OF THE LAST HEADING'S LAYER. The first
        # version only skipped trailer lines containing "](http", so the trailer's
        # opening line ("*Sources — retrieved ...*") counted, and its layer was still
        # "## Key Takeaways" because no "## " heading follows. On one document that put
        # ~3,000 words of bibliography inside the Key Takeaways score.
        if line.startswith("*Sources") or line.startswith("*Rules") or (
                line.startswith("*") and "](http" in line):
            if buf:
                yield layer, " ".join(buf); buf = []
            layer = "(trailer)"
            continue
        # ⚠️ A TIGHT MARKDOWN LIST IS NOT ONE UNIT. Splitting only on blank lines made
        # every consecutive "- " / "1. " list a single unit, so ONE rule citation anywhere
        # in it marked the whole layer rules-bearing. Measured: an entire Key Takeaways
        # list scored as ONE UNIT OF 1,824 WORDS, which is why this tool reported "100%"
        # for Common Mistakes and Key Takeaways across the corpus. That figure was a fact
        # about list formatting, not about content. Two agents found it independently.
        if re.match(r"^\s*(?:\d+\.|[-*+])\s", line) and buf:
            yield layer, " ".join(buf); buf = []
        buf.append(line.strip())
    if buf:
        yield layer, " ".join(buf)


def score(root, only=None):
    out = {}
    for p in sorted(pathlib.Path(root).rglob("*.md")):
        if only and only not in str(p):
            continue
        per = {}
        for layer, text in units(p):
            w = len(text.split())
            if w < 4:
                continue
            r = bool(RULES_RE.search(text))
            a, b = per.get(layer, (0, 0))
            per[layer] = (a + (w if r else 0), b + w)
        if per:
            out[str(p)] = per
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--root", default="content")
    ap.add_argument("--file", help="restrict to one document (substring match)")
    ap.add_argument("--by-layer", action="store_true",
                    help="break each document down by summary layer")
    args = ap.parse_args()

    data = score(args.root, args.file)
    if not data:
        print("check_tactics_ratio: nothing matched", file=sys.stderr)
        return 1

    rows = []
    for f, per in data.items():
        rw = sum(v[0] for v in per.values())
        tw = sum(v[1] for v in per.values())
        rows.append((rw / tw if tw else 0, rw, tw, f, per))
    rows.sort(reverse=True)

    gr = sum(r[1] for r in rows)
    gt = sum(r[2] for r in rows)
    print(f"check_tactics_ratio: {len(rows)} documents · {gt:,} words scored · "
          f"{gr:,} in rules-bearing units ({round(100*gr/gt)}%)\n")
    print(f"{'rules%':>7}  {'rules':>7}  {'total':>7}  document")
    for pct, rw, tw, f, per in rows:
        print(f"{round(100*pct):>6}%  {rw:>7,}  {tw:>7,}  {f}")
        if args.by_layer:
            for L in LAYERS:
                if L in per:
                    a, b = per[L]
                    print(f"          {round(100*a/b):>3}%  {a:>6,}/{b:<6,}  {L}")
    print("\n⚠️  A high score is a CANDIDATE FOR READING, not a finding. A rules document")
    print("   is supposed to be mostly rules, and a rule that IS the tactic scores here too.")
    print("⚠️  No target is encoded. The owner said \"overwhelmingly\"; a human decides.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

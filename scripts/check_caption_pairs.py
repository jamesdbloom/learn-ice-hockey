#!/usr/bin/env python3
"""Report diagram embeds whose trimmed caption relies on a sibling diagram that is not
embedded directly before it.

⚠️ WORKLIST, NOT A GATE. It has no ``--strict`` and should never gain one. It
always exits 0 (except ``--self-test``, which exits 1 on a failed case).

WHY IT EXISTS
-------------
Some captions were trimmed on the assumption that a sibling caption is spoken
IMMEDIATELY BEFORE them in every host. ``forecheck-212-stacked`` is the first:
its caption dropped the body-checking enumeration (USA Hockey, Hockey Canada,
IHUK, CARHA; the shared ``CHECKING_BARRED_WHERE`` constant since W457, which
prints no rule numbers) because ``forecheck-212``'s caption carries it word for word and is the
preceding spoken chunk in both hosts (SG66; see the comment on the caption in
``site/src/diagrams/forechecking_systems.mjs``). That comment says *"If either
host ever stops embedding forecheck-212 straight before this diagram, the
enumeration must come back."* Nothing enforced it. This tool reports it.

``md_to_speech.py`` voices each diagram as ``"Diagram. " + caption``, so the two
markers being adjacent is what puts the two captions next to each other for a
listener. Only blank lines or whitespace may sit between them; any prose
between the two markers breaks the pair.

THE TABLE IS DECLARED, NOT INFERRED
-----------------------------------
``DEPENDENCIES`` below is the whole list. A dependency enters it only when a
caption is trimmed against a sibling, and the trimming comment in the diagram
module should name the dependency so a reader can find it here. ⚠️ **This tool
cannot discover an undeclared dependency** -- a caption trimmed against a sibling
without a row here is invisible to it.

AND THE TEXT THE PAIR RELIES ON (added W471, 18 Nov 2026)
--------------------------------------------------------
Adjacency alone let a later trim of the REQUIRED caption silently remove the
material the dependent one dropped -- the W470 commit gate named this for
``forecheck-212-stacked``, which since W470 relies on ``forecheck-212`` saying
"Find out first whether you may body check in this game". ``CARRIES`` below
lists, per required caption, key phrases its BUILT caption
(``site/src/data/diagrams.json``) must still contain. A missing phrase is a
``MISSING TEXT`` line. ⚠️ It reads the BUILD PRODUCT, so run
``build-diagrams.mjs`` first; a stale JSON checks the old text.

WHAT IT CANNOT SEE
------------------
- Whether the required caption still carries the material the dependent one
  dropped, BEYOND the key phrases declared in ``CARRIES`` (a paraphrase that
  keeps the meaning but loses the phrase reports as missing; a phrase kept
  with its meaning changed passes).
- Embeds outside ``content/`` (a diagram reused somewhere in ``site/`` directly).
- An undeclared dependency (see above).

Usage:  check_caption_pairs.py
        check_caption_pairs.py --self-test
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
CONTENT = REPO / "content"

# ``![alt](diagram:the-id)`` -- the marker remark-corpus.mjs expands.
MARKER = re.compile(r"!\[[^\]]*\]\(diagram:([A-Za-z0-9_\-]+)\)")

# (dependent diagram id, diagram that must be embedded directly before it,
#  hosts the requirement applies to -- None means EVERY host -- and why)
DEPENDENCIES: list[tuple[str, str, tuple[str, ...] | None, str]] = [
    (
        "nz-back-off-at-the-line",
        "nz-stand-up-at-the-line",
        None,
        "caption trimmed 12 Nov 2026 (W291): the substance of 'the answer standing up "
        "gives the other way' is voiced only in nz-stand-up-at-the-line's caption",
    ),
    (
        "pinch-centre-below-the-goal-line",
        "pinch-centre-high",
        None,
        "caption trimmed 27 Oct 2026 (SG94); since 12 Nov 2026 (W302) the who-covers "
        "and scoreboard limbs are voiced in host prose (risk_management chunk 039, "
        "game_management chunk 015), not in pinch-centre-high's caption -- the pair "
        "is kept because both hosts still embed them adjacently",
    ),
    (
        "forecheck-212-stacked",
        "forecheck-212",
        None,
        "caption trimmed 24 Oct 2026 (SG66): the 'how a forechecker finishes an angle' "
        "disclosure lives only in forecheck-212's caption; W470 also dropped the "
        "may-you-check prompt, which forecheck-212 voices just before it (W471: "
        "forecheck-212 itself now carries the prompt and a one-clause summary, not "
        "the CHECKING_BARRED_WHERE enumeration -- safety ruling, all five hosts)",
    ),
    (
        # Host-scoped: the shared SAFETY SCOPE comment on forecheck-122 says that in
        # how_to_watch_hockey.md forecheck-212's caption is the chunk immediately before
        # it. In forechecking_systems.md the same comment relies on the 2-1-2 SECTION
        # "a few chunks before", which is not an adjacency this tool can test.
        "forecheck-122",
        "forecheck-212",
        ("content/off-the-ice/how_to_watch_hockey.md",),
        "safety scope shortened 22 Oct 2026 and again W456: drops the may-you-check "
        "prompt and the positive onus that forecheck-212's caption voices just before "
        "it (the body-checking enumeration left forecheck-212 too in W471)",
    ),
    (
        "winger-dz-reverse",
        "winger-dz-rim",
        None,
        "wall limb cut 19 Nov 2026 (W507): never turn your back / never duck, the two "
        "injuries and the posture are voiced in winger-dz-rim's caption directly before "
        "it in both hosts (winger.md, passing_and_receiving.md)",
    ),
    (
        "rush-3-on-2-alternative",
        "rush-3-on-2-default",
        None,
        "orientation clause cut 20 Nov 2026 (W541): 'the attack moving right to left "
        "toward the defended net at the left' is voiced in rush-3-on-2-default's caption "
        "directly before it in both hosts (defending_the_rush.md, goaltender.md)",
    ),
]


# required diagram id -> phrases (case-insensitive) its built caption must keep,
# because a declared dependent caption dropped them on the strength of it.
CARRIES: dict[str, tuple[str, ...]] = {
    "forecheck-212": (
        "find out first whether you may body check in this game",
    ),
    # W487: offensive_zone_play.md :404 dropped its prose "never turn your back /
    # never duck" because the facts line and these two captions voice it in the
    # chunks just before. A caption trim must not take it out of both.
    "oz-cycle-rim": ("never turn your back", "never duck"),
    "oz-cycle-reverse": ("never turn your back", "never duck"),
    # W507: winger-dz-reverse dropped its wall limb on the strength of this caption.
    "winger-dz-rim": ("never turn your back", "never duck", "chin off your chest"),
    # W541: nz-back-off-at-the-line dropped its own coaching-choice / find-out
    # sentence on the strength of this caption, embedded directly before it.
    "nz-stand-up-at-the-line": ("coaching choice, so find out which your team wants",),
    # W541: rush-3-on-2-alternative dropped its orientation clause.
    "rush-3-on-2-default": ("right to left toward the defended net at the left",),
}

DIAGRAMS_JSON = REPO / "site" / "src" / "data" / "diagrams.json"


def missing_text(captions: dict[str, str], carries=CARRIES) -> list[tuple[str, str]]:
    """Return (required id, phrase) for every declared phrase absent from that
    diagram's caption. A required id with no caption at all reports every phrase."""
    out = []
    for rid, phrases in carries.items():
        cap = " ".join((captions.get(rid) or "").lower().split())
        for ph in phrases:
            if " ".join(ph.lower().split()) not in cap:
                out.append((rid, ph))
    return out


def _built_captions() -> dict[str, str]:
    import json
    data = json.loads(DIAGRAMS_JSON.read_text(encoding="utf-8"))
    items = data.values() if isinstance(data, dict) else data
    return {d["id"]: d.get("caption") or "" for d in items
            if isinstance(d, dict) and "id" in d}


def check_text(text: str, deps=DEPENDENCIES, host: str | None = None
               ) -> list[tuple[int, str, str, str]]:
    """Return (line, dependent, required, what came before) for each violation.

    ``what came before`` is the previous diagram id if the dependent marker is
    preceded by another marker with only whitespace between, else a short
    excerpt of the intervening text, or ``<start of document>``. A dependency
    scoped to named hosts is skipped unless ``host`` is one of them."""
    found = []
    markers = list(MARKER.finditer(text))
    for dep, req, hosts, _why in deps:
        if hosts is not None and host not in hosts:
            continue
        for i, m in enumerate(markers):
            if m.group(1) != dep:
                continue
            line = text.count("\n", 0, m.start()) + 1
            prev_end = markers[i - 1].end() if i > 0 else 0
            gap = text[prev_end:m.start()]
            if i > 0 and not gap.strip():
                prev_id = markers[i - 1].group(1)
                if prev_id == req:
                    continue
                found.append((line, dep, req, f"diagram:{prev_id}"))
            elif i == 0 and not gap.strip():
                found.append((line, dep, req, "<start of document>"))
            else:
                excerpt = " ".join(gap.split())[-80:]
                found.append((line, dep, req, f"text: ...{excerpt}"))
    return found


def run() -> int:
    hosts = 0
    violations = []
    for path in sorted(CONTENT.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        ids = set(MARKER.findall(text))
        rel = path.relative_to(REPO).as_posix()
        applicable = [d for d in DEPENDENCIES
                      if d[0] in ids and (d[2] is None or rel in d[2])]
        if not applicable:
            continue
        hosts += 1
        for v in check_text(text, host=rel):
            violations.append((path.relative_to(REPO), *v))
    print(f"check_caption_pairs: {len(DEPENDENCIES)} declared dependenc"
          f"{'y' if len(DEPENDENCIES) == 1 else 'ies'}, {hosts} host document(s) "
          f"carry an applicable dependency, {len(violations)} violation(s)")
    for dep, req, scope, why in DEPENDENCIES:
        where = "every host" if scope is None else ", ".join(scope)
        print(f"  declared: {dep} requires {req} directly before it ({where}) -- {why}")
    for dep, req, scope, _ in DEPENDENCIES:
        for s in scope or ():
            if not (REPO / s).is_file():
                print(f"  STALE ROW: {dep} names host {s}, which does not exist")
    for path, line, dep, req, before in violations:
        print(f"  VIOLATION {path}:{line}  {dep} is not directly after {req}; "
              f"preceded by {before}")
    if violations:
        print("  worklist: restore the adjacency, or restore the dropped material to the "
              "dependent caption (and remove its row here).")
    if DIAGRAMS_JSON.is_file():
        gone = missing_text(_built_captions())
        print(f"  carried text: {sum(len(v) for v in CARRIES.values())} declared phrase(s) "
              f"checked in the BUILT captions, {len(gone)} missing")
        for rid, ph in gone:
            print(f"  MISSING TEXT {rid}: no longer says \"{ph}\" -- a dependent caption "
                  f"relies on it; restore it or the dependent's dropped material")
    else:
        print("  carried text: NOT CHECKED -- site/src/data/diagrams.json is absent; "
              "run build-diagrams.mjs")
    return 0


def self_test() -> int:
    deps = [("b-dep", "a-req", None, "test")]
    cases = [
        ("adjacent, blank line between: pass",
         "intro\n\n![](diagram:a-req)\n\n![](diagram:b-dep)\n", 0),
        ("adjacent, only spaces/tabs between: pass",
         "![](diagram:a-req)  \t ![](diagram:b-dep)", 0),
        ("dependent not embedded at all: pass",
         "![](diagram:a-req)\n\nprose\n", 0),
        ("prose between the two markers: violation",
         "![](diagram:a-req)\n\nSome prose.\n\n![](diagram:b-dep)\n", 1),
        ("a different diagram directly before: violation",
         "![](diagram:a-req)\n\n![](diagram:other)\n\n![](diagram:b-dep)\n", 1),
        ("dependent with no diagram before it at all: violation",
         "Text only.\n\n![](diagram:b-dep)\n", 1),
        ("dependent is the first thing in the document: violation",
         "![](diagram:b-dep)\n", 1),
        ("embedded twice, once correctly and once not: one violation",
         "![](diagram:a-req)\n![](diagram:b-dep)\n\nprose\n\n![](diagram:b-dep)\n", 1),
    ]
    ok = True
    for name, text, want in cases:
        got = len(check_text(text, deps))
        passed = got == want
        ok = ok and passed
        print(f"{'PASS' if passed else 'FAIL'} {name} (want {want}, got {got})")
    scoped = [("b-dep", "a-req", ("content/x.md",), "test")]
    bad = "Text only.\n\n![](diagram:b-dep)\n"
    for name, host, want in (("host-scoped row, named host: violation", "content/x.md", 1),
                             ("host-scoped row, other host: pass", "content/y.md", 0)):
        got = len(check_text(bad, scoped, host=host))
        passed = got == want
        ok = ok and passed
        print(f"{'PASS' if passed else 'FAIL'} {name} (want {want}, got {got})")
    carries = {"a-req": ("Find out first",)}
    for name, caps, want in (
        ("carried phrase present (case/space-insensitive): pass",
         {"a-req": "x  find OUT first y"}, 0),
        ("carried phrase gone: missing", {"a-req": "x y"}, 1),
        ("required caption absent: missing", {}, 1),
    ):
        got = len(missing_text(caps, carries))
        passed = got == want
        ok = ok and passed
        print(f"{'PASS' if passed else 'FAIL'} {name} (want {want}, got {got})")
    print("self-test: " + ("ALL PASS" if ok else "FAILURES"))
    return 0 if ok else 1


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--self-test", action="store_true", help="run the offline cases")
    args = ap.parse_args()
    if args.self_test:
        return self_test()
    return run()


if __name__ == "__main__":
    sys.exit(main())

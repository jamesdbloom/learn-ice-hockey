#!/usr/bin/env python3
"""Report diagram captions that are spoken into a document which does not own them.

⚠️ WORKLIST, NOT A GATE. It has no ``--strict`` and should never gain one: a
diagram reused in a second document is the normal, intended case here, and most
of what this tool prints is correct.

⚠️ WHY IT EXISTS — A SOLE-CARRIER AUDIT KEYED ON ``owner`` UNDER-COUNTS BY
CONSTRUCTION, AND ONE DID.

On 18 September 2026 a plan row said a diagram caption was the sole carrier of an
operative crease-line rule in ``playing_without_the_puck.md``. The audit behind it
was keyed to the ``owner`` field in ``site/src/data/diagrams.json``. The body of
that document turned out to carry the rule in three layers, so the row closed as a
false premise — **but the caption string was a shared constant imported by four
diagram modules, and ``owner`` names only one document per diagram.**

When the other hosts were layer-tested, ``systems/zone_entries.md`` **was** a
genuine sole carrier: its body sent a player "driving the net" and never said
where the drive stops. The crease boundary existed only in the caption.

**The measurement that generalises it:** of 204 diagrams, **87 are embedded in
more than one document**, giving **127 (diagram, non-owner host) pairs**. An audit
keyed on ``owner`` cannot see any of those 127. ⚠️ **Those figures are from the day
this tool was written and are NOT repeated anywhere else in the repository on
purpose — run the tool, it prints them.** A count of a corpus that is actively
edited goes stale silently, and this repository has been burned by exactly that
more than once.

**What a hit means.** The caption is voiced to a listener reading the HOST
document. ``md_to_speech.py`` renders ``"Diagram. " + caption`` and nothing else —
``describe`` is never voiced, and there is no cross-caption reference mechanism in
speech. So if the caption states a rule and the host document's own prose does
not, that host's listener hears the rule **only** from the caption, and a reader
who skips the figure never gets it at all.

⚠️ **This tool cannot tell you whether the host's body carries the claim.** It
reports where to look. Deciding needs a LAYER TEST on the host — body prose, the
``facts`` block, Common Mistakes and Key Takeaways extracted and read
*separately*, because body ✓ does not imply block ✓ and a document grep cannot
tell the two apart since they live in the same file.

⚠️ **AND BEWARE THE SHARED CONSTANT.** Caption text is frequently a constant
imported across modules (``rule69_clauses.mjs`` is the worst case). Editing one to
repair one host silently rewrites every caption that imports it. Check the
importers before changing caption text:
``grep -ln '<CONSTANT>' site/src/diagrams/*.mjs``.

Reads the BUILD PRODUCT ``site/src/data/diagrams.json``, so a newly added diagram
is invisible until ``node site/scripts/build-diagrams.mjs`` has run. It says so
and exits 0 rather than pretending a missing file is a pass.
"""

from __future__ import annotations

import argparse
import collections
import json
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
DIAGRAMS = REPO / "site" / "src" / "data" / "diagrams.json"
CONTENT = REPO / "content"

# ``![alt](diagram:the-id)`` — the marker remark-corpus.mjs expands.
MARKER = re.compile(r"!\[[^\]]*\]\(diagram:([A-Za-z0-9_\-]+)\)")

# Caption wording that makes a hit worth reading first: a caption carrying one of
# these is stating a rule or a boundary, which is the shape that hurt us.
RULE_ISH = re.compile(
    r"\b(rule|crease|penalty|penalised|penalized|illegal|offside|icing|"
    r"must|may not|never|shall|IIHF|NHL|USA Hockey|Hockey Canada|CARHA)\b",
    re.IGNORECASE,
)


def load_diagrams() -> dict[str, dict]:
    if not DIAGRAMS.is_file():
        print(
            f"check_caption_hosts: {DIAGRAMS.relative_to(REPO)} is missing.\n"
            "  Run `node site/scripts/build-diagrams.mjs` first (~6 min).\n"
            "  Reporting nothing rather than pretending a missing build is a pass.",
            file=sys.stderr,
        )
        return {}
    raw = json.loads(DIAGRAMS.read_text())
    items = raw if isinstance(raw, list) else raw.get("diagrams", raw)
    if isinstance(items, dict):
        items = list(items.values())
    return {d["id"]: d for d in items if isinstance(d, dict) and "id" in d}


def host_map() -> dict[str, set[str]]:
    hosts: dict[str, set[str]] = collections.defaultdict(set)
    for path in sorted(CONTENT.rglob("*.md")):
        rel = str(path.relative_to(REPO))
        for match in MARKER.finditer(path.read_text()):
            hosts[match.group(1)].add(rel)
    return hosts


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument(
        "--rule-like",
        action="store_true",
        help="only captions whose wording states a rule or a boundary — read these first",
    )
    ap.add_argument(
        "--by-host",
        action="store_true",
        help="group by host document, so one agent can be dispatched per document",
    )
    args = ap.parse_args()

    diagrams = load_diagrams()
    if not diagrams:
        return 0
    hosts = host_map()

    pairs: list[tuple[str, str, str]] = []  # (host, diagram_id, caption)
    multi = 0
    unhosted: list[str] = []
    owner_absent: list[tuple[str, str]] = []

    for did, meta in sorted(diagrams.items()):
        owner = meta.get("owner")
        caption = (meta.get("caption") or "").strip()
        where = hosts.get(did, set())
        if not where:
            unhosted.append(did)
            continue
        if len(where) > 1:
            multi += 1
        if owner and owner not in where:
            owner_absent.append((did, owner))
        for host in sorted(where):
            if host == owner:
                continue
            if args.rule_like and not RULE_ISH.search(caption):
                continue
            pairs.append((host, did, caption))

    print(f"check_caption_hosts: {len(diagrams)} diagrams, "
          f"{multi} embedded in more than one document, "
          f"{len(pairs)} caption/non-owner-host pairs"
          + (" (rule-like only)" if args.rule_like else ""))

    if unhosted:
        print(f"\n⚠️ BUILT BUT EMBEDDED IN NO DOCUMENT ({len(unhosted)}) — "
              "either dead weight or a dropped marker:")
        for did in unhosted:
            print(f"    {did}")
    if owner_absent:
        print(f"\n⚠️ OWNER DOCUMENT DOES NOT EMBED ITS OWN DIAGRAM ({len(owner_absent)}):")
        for did, owner in owner_absent:
            print(f"    {did}  owner={owner}")

    if args.by_host:
        grouped: dict[str, list[tuple[str, str]]] = collections.defaultdict(list)
        for host, did, caption in pairs:
            grouped[host].append((did, caption))
        for host in sorted(grouped, key=lambda h: (-len(grouped[h]), h)):
            print(f"\n{host}  ({len(grouped[host])})")
            for did, caption in sorted(grouped[host]):
                print(f"    {did}")
                if caption:
                    print(f"        {caption[:160]}")
    else:
        for host, did, caption in sorted(pairs):
            print(f"\n{host}  <-  {did}")
            if caption:
                print(f"    {caption[:200]}")

    # Worklist: never non-zero. A reused diagram is the normal case.
    return 0


if __name__ == "__main__":
    sys.exit(main())

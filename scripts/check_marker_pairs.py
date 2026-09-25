"""Name every paragraph that carried a warning marker in HEAD and carries none now.

WHY THIS EXISTS. `md_to_speech.py` sets `important = "\u26a0" in text` PER PARAGRAPH, not per
marker, so a paragraph that loses its LAST marker silently loses a spoken "Important."
No checker in this repository can see that, and CLAUDE.md says so.

WHY AN AGGREGATE DELTA IS NOT ENOUGH. A net figure is the sum of a loss and a gain and both
are invisible in it. Measured 24 September 2026: a wave showed 79 -> 77 and the -2 was
explained as a sanctioned paragraph MERGE. Only one of the two was. The other had its last
marker stripped, inside a delta already accounted for. On 25 September
`team_play_and_culture.md` went 24 -> 33 while this script confirmed no paragraph had lost
its own marker -- an aggregate RISE can hide a loss exactly as a fall can.

WHAT IT DOES NOT DO. It keys a paragraph by its first 60 characters, so a paragraph whose
OPENING was rewritten reports as "no longer present by key" rather than as a loss. That is a
CANDIDATE, not a finding: check whether the rewritten paragraph still carries a marker. A
re-aiming wave rewrites Key focus bullets by design and will always produce these.

WORKLIST, NOT A GATE. Read every hit.

Usage: python3 scripts/check_marker_pairs.py <path> [<path> ...]
"""

import subprocess, sys, re
def paras(t): return [p for p in re.split(r'\n\s*\n', t) if p.strip()]
def key(p):  # first 60 chars of stripped text as identity
    return re.sub(r'\s+',' ', p.strip())[:60]
for path in sys.argv[1:]:
    old = subprocess.run(['git','show',f'HEAD:{path}'],capture_output=True,text=True).stdout
    new = open(path,encoding='utf-8').read()
    o = {key(p): ('⚠' in p) for p in paras(old)}
    n = {key(p): ('⚠' in p) for p in paras(new)}
    lost = [k for k,v in o.items() if v and k in n and not n[k]]
    vanished = [k for k,v in o.items() if v and k not in n]
    print(f"{path}")
    print(f"   marked HEAD={sum(o.values())} tree={sum(n.values())}")
    print(f"   LOST MARKER (same paragraph, marker gone): {len(lost)}")
    for k in lost: print(f"      -> {k!r}")
    print(f"   paragraph no longer present by key: {len(vanished)}")
    for k in vanished: print(f"      ?? {k!r}")

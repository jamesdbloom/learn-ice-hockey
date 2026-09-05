#!/usr/bin/env python3
"""Leader lines that run into or through the label they point at.

Reads the BUILT SVGs, so it sees the final resolved coordinates a reader gets.
A leader should stop just SHORT of the text's near edge. This reports the ones
that do not, split by how visible the fault is.

⚠️ Glyph widths are ESTIMATED from a metric constant, not measured from the font,
so a narrow miss either way is not proof. Look at the diagram before changing it.

⚠️ AND IT MEASURES ONLY ONE DIRECTION. This reports a leader that runs INTO or
THROUGH its label. It is structurally blind to the opposite fault -- a leader that
stops so far short it no longer reads as connected to anything. A browser pass
found 40 of those, one showing 0.20 units of visible line across a 1.79-unit gap,
and every run of this tool called them clean. A green "534 clean" over 40
known-bad leaders is the silent-false-pass shape CLAUDE.md records twice for the
nvm shim, and the honest docstring about the ESTIMATE did not cover it.

⚠️ It also cannot reliably say WHICH label a leader belongs to. It picks the
nearest text box to the endpoint, excluding one containing the start. On a short
leader the nearest box is often another player's glyph letter -- an attempt to
enumerate the stop-short cases with it returned "gaps" of 15 units against labels
called `D1`, `W1` and `G`, all misattributions. Ownership needs the drawn geometry,
not proximity.
"""
import glob, re, sys, math, collections

# ⚠️ These must match what `rink.mjs` CLIPS with -- CAP_H, DESC_H and CLIP_ADV -- and
# CLIP_ADV is NOT the same as the CH it reserves space with. A checker that estimates
# the glyph box differently from the renderer will disagree with it systematically, and
# the disagreement looks like a finding: when the renderer moved to 0.473 and this file
# still said 0.56, it reported 28 leaders "ending inside the glyphs" that were nothing of
# the kind -- an endpoint clipped at 0.473 is inside a 0.56 box BY CONSTRUCTION.
#
# ⚠️ A browser pass measured the real distribution over 118 rendered labels: min 0.384,
# median 0.446, p75 0.473, max 0.562. CAP and DESC were checked against real glyphs too
# (ascender 0.716, descender ~0.19) and are sound. 0.473 is the p75, chosen to be a little
# conservative rather than to flatter this tool.
CAP, DESC, ADV = 0.72, 0.21, 0.473
ATTR = re.compile(r'(\w[\w-]*)="([^"]*)"')

def boxes(svg):
    out = []
    for m in re.finditer(r'<text ([^>]*?)>(.*?)</text>', svg, re.S):
        d = dict(ATTR.findall(m.group(1)))
        lab = re.sub(r'<[^>]+>', '', m.group(2)).strip()
        if not lab: continue
        try: x, y, fs = float(d['x']), float(d['y']), float(d.get('font-size', 3))
        except (KeyError, ValueError): continue
        w = ADV * fs * len(lab)
        a = d.get('text-anchor', 'start')
        x0 = x - w/2 if a == 'middle' else (x - w if a == 'end' else x)
        out.append((x0, x0 + w, y - CAP*fs, y + DESC*fs, lab, fs))
    return out

def leaders(svg):
    out = []
    for m in re.finditer(r'<line ([^>]*?)/>', svg):
        d = dict(ATTR.findall(m.group(1)))
        if d.get('stroke-dasharray') != '0.8 0.8': continue
        try: out.append((float(d['x1']), float(d['y1']), float(d['x2']), float(d['y2'])))
        except (KeyError, ValueError): continue
    return out

def clip(x1, y1, x2, y2, X0, X1, Y0, Y1):
    """Liang-Barsky. Returns (t_enter, t_exit) or None."""
    dx, dy = x2-x1, y2-y1
    t0, t1 = 0.0, 1.0
    for p, q in ((-dx, x1-X0), (dx, X1-x1), (-dy, y1-Y0), (dy, Y1-y1)):
        if p == 0:
            if q < 0: return None
        else:
            r = q/p
            if p < 0:
                if r > t1: return None
                if r > t0: t0 = r
            else:
                if r < t0: return None
                if r < t1: t1 = r
    return (t0, t1)

def main(paths):
    kinds = collections.Counter(); rows = []; tot = 0; nf = 0
    for f in sorted(paths):
        svg = open(f, encoding='utf-8').read()
        bs, ls = boxes(svg), leaders(svg)
        if ls: nf += 1
        tot += len(ls)
        for x1, y1, x2, y2 in ls:
            # The label this leader points at = the box its endpoint is nearest --
            # ⚠️ but EXCLUDING any box containing the leader's START. `rink.mjs` says
            # it plainly: "the label's own player sits under the anchor end of every
            # leader". Those are the single-character glyph letters (D1, F1, RW), and
            # on a short leader the anchor's own letter is NEARER the endpoint than the
            # label is. Without this exclusion the tool reported 41 faults that were
            # all correct leaders stopping properly short of their real label.
            best = None
            for b in bs:
                X0, X1, Y0, Y1 = b[:4]
                if X0 <= x1 <= X1 and Y0 <= y1 <= Y1: continue   # the anchor's own glyph
                cx, cy = (X0+X1)/2, (Y0+Y1)/2
                d = math.hypot(x2-cx, y2-cy)
                if best is None or d < best[0]: best = (d, b)
            if not best: continue
            X0, X1, Y0, Y1, lab, fs = best[1]
            c = clip(x1, y1, x2, y2, X0, X1, Y0, Y1)
            if c is None:
                kinds['clean (stops before the label)'] += 1; continue
            t0, t1 = c
            L = math.hypot(x2-x1, y2-y1)
            end_inside = X0 <= x2 <= X1 and Y0 <= y2 <= Y1
            past_far = t1 < 1.0 - 1e-9
            kind = ('EXITS the far side' if past_far else
                    'ends INSIDE the glyphs' if end_inside else 'clean (stops before the label)')
            kinds[kind] += 1
            if kind != 'clean (stops before the label)':
                rows.append((round(L*(1-t0)/fs, 2), fs, kind, f.split('/')[-1][:-4], lab))
    rows.sort(reverse=True)
    print(f"check_leaders: {tot} leader lines across {nf} diagrams")
    for k, v in kinds.most_common(): print(f"    {v:4d}  {k}")
    if rows:
        print(f"\n  {'run-in':>6} {'fs':>4}  {'fault':<24} diagram / label")
        for d, fs, k, f, lab in rows[:25]:
            print(f"  {d:6.2f} {fs:4.1f}  {k:<24} {f[:30]:30s} {lab[:30]!r}")
        if len(rows) > 25: print(f"  ... and {len(rows)-25} more")
    print("\n  run-in = distance from the glyph box's near edge to the line's end,")
    print("           in font-size units. A correct leader stops before the box.")
    print("\n  ⚠️  WORKLIST, NOT A GATE. Glyph widths are ESTIMATED, not measured from")
    print("      the font. A label the line legitimately approaches edge-on can read")
    print("      as a narrow hit. Look at the diagram before changing it.")
    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:] or glob.glob('site/public/diagrams/*.svg')))

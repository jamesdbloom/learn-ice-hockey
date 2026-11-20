#!/usr/bin/env node
/**
 * check-arrivals — enforce THE ARRIVAL INVARIANT across every diagram spec.
 *
 * The invariant is stated once, normatively, above `playSvg` in `lib/rink.mjs`, and this
 * file imports its constants rather than restating them. That is deliberate and it is the
 * whole point of the exercise: the rule was stated in SIX places, no two alike, and enforced
 * in none — a bare distance in `rink.mjs`, two verbatim copies in `forechecking_systems.mjs`,
 * two more in `faceoffs.mjs` and `defensive_zone_coverage.mjs`, and a reader-facing
 * directional form in `reading_ice_hockey_diagrams.md`; a seventh file had promoted a
 * measured angle to an operative criterion. The first consolidation pass found four of the
 * six and a commit message would have claimed all of them. `check_geometry.py` reads
 * `rink.json` against the glossary and never opens a spec.
 *
 * Why this is a safety check and not a drawing check: an arrowhead that finishes on a
 * player reads as "skate through him". The corpus's readers include classifications where
 * body checking is itself a penalty, and a diagram is the most absolute-looking thing on a
 * page. But note what the constants are NOT: they are drawing conventions derived from the
 * renderer's own glyph sizes, not rules of hockey. The books partition the circle at the
 * target's shoulder line, and a glyph has no facing, so no rulebook distance can be
 * translated into this test. Do not present these numbers to a reader as ice distances.
 *
 * WHAT IT DOES NOT DO — read this before treating a clean run as evidence.
 *   1. It tests the straight segment from a route's start to its end, and the terminal
 *      tangent of that segment. A route whose *drawn curve* bows through a player while
 *      both endpoints and the tangent clear him is invisible to it. That defect has
 *      happened in this corpus and only an eye caught it.
 *   2. Form (a)'s reach is UNBOUNDED — a tangent is a ray, and a ray crosses the rink. It
 *      therefore reports how far beyond the tip the near-miss occurs so a human can
 *      dismiss one that happens 40 ft downstream. No principled bound is available: none
 *      of the three prior statements carried one either, and a threshold picked to
 *      separate the cases already known would be fitted, not derived. Scoping (a) to
 *      skaters removes the spurious long-range hits for a stated reason instead.
 *   3. NEITHER FORM COVERS AN ARROW AIMED AT A GOALTENDER FROM FURTHER THAN 9 FT. Form (a)
 *      excludes him outright and form (b) only fires inside `ARRIVAL.noArrow`, so a tip
 *      stopping 9.5 ft short and pointing dead at him is reported by nothing. Nothing does
 *      that today (nearest: `winger-offensive-zone-patches`, 10.05 ft, 9.71 ft miss).
 *   4. Advisories have no baseline. They are printed and re-triaged from scratch each round,
 *      so a NEW advisory looks exactly like an accepted one. An allowlist keyed by
 *      diagram + target + reason would make the hard/advisory split enforceable rather than
 *      merely reported. FORM (p) NOW HAS ONE (`arrivals-allow.json`, see Usage); forms (a)
 *      and (b-G) still do not.
 *   5. It says nothing about whether a route is tactically right.
 *   6. Form (p), the pressure-route test below, is ADVISORY ONLY, for the reason in note 4:
 *      with no baseline, a hard rule would fail the build on routes nobody has triaged. It
 *      tests the terminal tangent's miss on the anchor, nothing else — not the target's
 *      facing (a glyph has none), not whether he is pinned to the boards, and not whether
 *      the drawn curve passes through him before the tip. Its puck exemption trusts
 *      `spec.puck`, which is ONE point per diagram; a diagram with the puck drawn
 *      elsewhere, or none, cannot earn the exemption — and it cannot see a `spec.puck`
 *      placed somewhere other than the point the caption's aim ("stick on the puck")
 *      refers to, so an exemption is only as true as that placement.
 *
 * Usage
 * Wired into `npm run build` BEFORE `build:diagrams` — deliberately: this reads the SPECS
 * (`src/diagrams/index.mjs`), not the built artefact, so it can fail before anything is
 * regenerated on disk.
 *
 *     node scripts/check-arrivals.mjs            # exit 1 on any hard violation
 *     node scripts/check-arrivals.mjs --warn     # report, never fail
 *     node scripts/check-arrivals.mjs --allow <file>     # use another allowlist (fixtures)
 *     node scripts/check-arrivals.mjs --allow-template   # print a draft entry per raised [p]
 *
 * THE (p) ALLOWLIST — `arrivals-allow.json` beside this file. It closes note 4 for form (p)
 * only, so that PRESSURE_LEVEL can go to 'FAIL' without failing the build on routes a
 * triage has already accepted. An entry is keyed by the diagram id, the route's kind, bow
 * and RESOLVED from/to (rounded to 0.01 ft), and the target's id AND resolved anchor —
 * never by route index or target id alone, because both survive a redraw that changes
 * the geometry the ruling was made on. A key match then must also reproduce:
 *   - the measured d and miss (to 0.01 ft);
 *   - the sha256 of `src/data/rink.json` the ruling was made against;
 *   - `captionMustContain`, if given — the caveat the acceptance depends on.
 * Any mismatch RE-RAISES the finding at PRESSURE_LEVEL and says why. An accepted route is
 * printed as `OK [p-a]` with its ruling, never hidden; an entry matching no finding is
 * printed as STALE. Every entry carries a `reason` and a `ruling` reference.
 */

import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { DIAGRAMS } from '../src/diagrams/index.mjs';
import { loc, ARRIVAL } from './lib/rink.mjs';

const WARN_ONLY = process.argv.includes('--warn');
const ALLOW_TEMPLATE = process.argv.includes('--allow-template');
const argAt = process.argv.indexOf('--allow');
const ALLOW_PATH = argAt > 0 && process.argv[argAt + 1]
  ? process.argv[argAt + 1]
  : fileURLToPath(new URL('./arrivals-allow.json', import.meta.url));
const RINK_PATH = fileURLToPath(new URL('../src/data/rink.json', import.meta.url));
const RINK_SHA = createHash('sha256').update(readFileSync(RINK_PATH)).digest('hex');

// A missing allowlist is an empty one; a MALFORMED one is an error, because silently
// treating it as empty would re-raise every accepted route without saying why.
let ALLOW = [];
try {
  ALLOW = JSON.parse(readFileSync(ALLOW_PATH, 'utf8')).entries ?? [];
} catch (e) {
  if (e.code !== 'ENOENT') throw new Error(`check-arrivals: cannot read allowlist ${ALLOW_PATH}: ${e.message}`);
}
const r2 = (v) => Math.round(v * 100) / 100;
const pt = (p) => [r2(p.x), r2(p.y)];
const samePt = (a, b) => Array.isArray(a) && a.length === 2 && a[0] === b[0] && a[1] === b[1];
const used = new Set();

/**
 * Route kinds this rule applies to: the ones that draw a PLAYER MOVING.
 *
 * ⚠️ Scoping is the whole correctness of this check, and the first version got it wrong.
 * It included `pass`, `shot` and `droppuck` — routes that draw the PUCK — and reported
 * thirteen failures, of which eight were a pass or a shot arriving near the opposing
 * goaltender. A shot ending at the goalie is what a shot IS. An arrowhead on a puck route
 * does not read as "skate through him", because nobody is skating.
 * `forechecking_systems.mjs` had this right and said so: "a route owned by a SKATER that
 * finishes near an opposing SKATER". `pressure` and `stop` terminate in two bars and are
 * the safe mark by construction, so they are out too.
 */
const ARROW_KINDS = new Set(['skate', 'carry', 'backxover']);

/**
 * FORM (p) — PRESSURE ROUTE AIMS AT A PLAYER. Advisory.
 *
 * ⚠️ "Safe by construction" above was about the END MARK, and it is true of the end mark:
 * two bars read as arriving and stopping, so (b) cannot apply. It is NOT true of the line.
 * W545-W547 found five pressure routes whose terminal tangent ran through, or within
 * ARRIVAL.glyph of, the player they pressure — `pk-wedge-plus-1` (1.53 ft),
 * `corner-escape-routes` (0.6, "aimed through A1's back into the puck"),
 * `practice-small-area-in-one-zone` (0.13), `scan-before-a-wall-reception` (0.42) and the
 * two pinch diagrams (2.00) — each measured by hand because this file skipped the kind.
 *
 * The rule those waves applied (their "rule 1"): a pressure route whose tip finishes within
 * ARRIVAL.noArrow of an opposing player must miss that player's anchor by MORE than
 * ARRIVAL.glyph along its terminal tangent. Same tangent as forms (a)/(b) — the curve
 * actually drawn, `to - control` — and the same ownership inference. "Miss" is the ray's
 * closest approach: the perpendicular distance when the player is ahead of the tip, and the
 * tip distance itself when he is not (a ray pointing away never gets closer).
 *
 * ⚠️ UNLIKE (a), GOALTENDERS ARE IN. (a) excludes him because every offensive route points
 * at the net; a pressure route ending within 9 ft of a goaltender and aimed at him has no
 * such excuse, and he is the one target every book protects. None does so today.
 *
 * THE PUCK EXEMPTION — a stick-on-puck arrival. A route whose tangent passes within
 * PUCK_AIM ft of `spec.puck`, with the puck AHEAD of the tip and more than ARRIVAL.glyph
 * nearer than the player along the tangent (clear of his ink, not merely nearer), is aiming at the puck in front of him, which is what the corrected
 * captions now teach ("stick on the puck"). It is reported as EXEMPT, never hidden.
 * ⚠️ The near-side condition is the safety half: a puck on the FAR side of the player is
 * corner-escape-routes' original defect — the line through his back to reach the puck — and
 * must not be exempt. What the exemption still cannot see: a puck dead in front of a player
 * who is facing the boards. A glyph has no facing, so a level caveat in the caption remains
 * the only defence there.
 *
 * To promote it to a build failure, change PRESSURE_LEVEL to 'FAIL'. The allowlist (see
 * Usage) now exists, so promotion waits only on every raised route being redrawn or ruled.
 */
const PRESSURE_KIND = 'pressure';
const PRESSURE_LEVEL = 'FAIL';  // promoted 20 Nov 2026 (W550) after the W549 triage: six redrawn, three allowlisted
const PUCK_AIM = 1.0;

/** Anchor tolerance for deciding which player a route belongs to. */
const OWNER_TOLERANCE = ARRIVAL.glyph;

const findings = [];
const unowned = [];

for (const d of DIAGRAMS) {
  const players = (d.players ?? [])
    .filter((p) => p.pos !== 'pylon')
    .map((p) => ({
      id: p.id ?? p.pos,
      team: p.team === 'opp' ? 'opp' : 'own',
      goalie: p.pos === 'G',
      ...loc(p.at),
    }));
  if (!players.length) continue;

  for (const [ri, r] of (d.routes ?? []).entries()) {
    const kind = r.kind ?? 'skate';
    const isPressure = kind === PRESSURE_KIND;
    if (!ARROW_KINDS.has(kind) && !isPressure) continue;

    const from = loc(r.from), to = loc(r.to);

    // WHOSE ROUTE IS THIS? Routes carry no team field, so ownership is inferred from
    // the player the route STARTS on. That inference is safe here and was measured
    // before being relied on: all 80 arrow-ended routes begin exactly on a player
    // anchor (distance 0.00 ft) and the SMALLEST next-nearest player is 5.66 ft away
    // (`faceoff-dzone-tie-up`'s D route), comfortably outside OWNER_TOLERANCE, so no route
    // can resolve the wrong way. ⚠️ This read "at least 8.9 ft" until the gate caught it:
    // 8.9 is the FOURTH smallest. The conclusion survives and the arithmetic did not, which
    // is the failure forechecking_systems.mjs names — a guard whose arithmetic does not
    // check out is worse than none.
    //
    // ⚠️ THIS IS THE CHECK'S OWN BUG, FIXED. The first version had no ownership notion
    // at all: it treated `team: 'opp'` as "the opponent" for every route, which is only
    // true of routes the reader's own players skate. 22 of the 80 are skated by the
    // OPPOSITION — every rush carrier, every forecheck retrieval, every zone entry
    // driven at the reader's defence. For those, it measured a route against its
    // owner's own TEAMMATES and never against the players it can actually run through.
    // It reported one hard failure on that basis: `forecheck-212-stacked`, where the
    // opposing carrier D1 skates out to the far corner and finishes 8.25 ft from D2 —
    // his own partner, the man he is carrying the puck TO. Acting on that would have
    // redrawn a correct diagram to satisfy a broken test.
    let owner = null, best = Infinity;
    for (const p of players) {
      const dd = Math.hypot(p.x - from.x, p.y - from.y);
      if (dd < best) { best = dd; owner = p; }
    }
    if (!owner || best > OWNER_TOLERANCE) {
      unowned.push({ diagram: d.id, kind, dist: best });
      continue;
    }
    const opponents = players.filter((p) => p.team !== owner.team);
    if (!opponents.length) continue;

    // THE TERMINAL TANGENT OF THE CURVE ACTUALLY DRAWN, not the chord.
    //
    // ⚠️ The first version used `to - from` and called it the terminal tangent. Routes are
    // quadratic Beziers: `playSvg` offsets a control point perpendicular to the chord by
    // `bow` (rink.mjs, "Perpendicular offset for the control point"), and the derivative at
    // k=1 is 2*(to - control). 46 of the 80 arrow-ended routes are bowed, and on those the
    // chord and the real tangent diverge by up to 59 degrees (`entry-delay-curl`). So the
    // check measured a quantity its own output called something else, and the two tightest
    // clearances it reported — 0.54 ft in `forecheck-212` and 0.83 ft in
    // `nz-1-2-2-containment` — were artefacts of the chord: on the drawn curve they are
    // 5.03 and 3.85 ft and clear the glyph comfortably. It also UNDER-reported the tightest
    // real one, `nz-1-2-2-trap`, at 2.02 ft against a true 0.91 ft.
    //
    // The control point is recomputed here exactly as the renderer does rather than
    // imported, because the renderer builds it inline; if that construction ever changes,
    // this must change with it. That coupling is the price of measuring what is drawn.
    const cdx = to.x - from.x, cdy = to.y - from.y;
    const chord = Math.hypot(cdx, cdy) || 1;
    const bow = r.bow ?? 0;
    const mx = (from.x + to.x) / 2 + (-cdy / chord) * bow;
    const my = (from.y + to.y) / 2 + (cdx / chord) * bow;
    const tx = to.x - mx, ty = to.y - my;
    const tlen = Math.hypot(tx, ty) || 1;
    const ux = tx / tlen, uy = ty / tlen;

    if (isPressure) {
      // ---- (p) ADVISORY: a pressure route's tangent must miss its target. ----
      const pk = d.puck ? loc(d.puck) : null;
      const pkAlong = pk ? (pk.x - to.x) * ux + (pk.y - to.y) * uy : null;
      const pkMiss = pk ? Math.abs((pk.x - to.x) * -uy + (pk.y - to.y) * ux) : null;
      for (const o of opponents) {
        const wx = o.x - to.x, wy = o.y - to.y;
        const tipDist = Math.hypot(wx, wy);
        if (tipDist >= ARRIVAL.noArrow) continue;
        const along = wx * ux + wy * uy;
        const miss = along > 0 ? Math.abs(wx * -uy + wy * ux) : tipDist;
        if (miss > ARRIVAL.glyph) continue;
        const angle = Math.acos(Math.max(-1, Math.min(1, along / (tipDist || 1)))) * 180 / Math.PI;
        const exempt = pk !== null && pkMiss < PUCK_AIM && pkAlong >= 0
          // Clear of the player, not merely nearer: a puck inside his ink must not exempt
          // a line aimed at his body.
          && along - pkAlong > ARRIVAL.glyph;
        // ALLOWLIST: key on the geometry the ruling was made on, then require it to
        // reproduce. `stale` collects why a key-matched entry no longer holds.
        const key = { diagram: d.id, kind, bow, from: pt(from), to: pt(to),
          target: { id: o.id, at: pt(o) } };
        const ix = exempt ? -1 : ALLOW.findIndex((e) => e.diagram === key.diagram
          && e.kind === kind && (e.bow ?? 0) === bow
          && samePt(e.from, key.from) && samePt(e.to, key.to)
          && e.target?.id === o.id && samePt(e.target?.at, key.target.at));
        const why = [];
        let entry = null;
        if (ix >= 0) {
          entry = ALLOW[ix];
          used.add(ix);
          if (r2(entry.measured?.d) !== r2(tipDist)) why.push(`d ${entry.measured?.d} -> ${r2(tipDist)}`);
          if (r2(entry.measured?.miss) !== r2(miss)) why.push(`miss ${entry.measured?.miss} -> ${r2(miss)}`);
          if (entry.rinkSha256 !== RINK_SHA) why.push('rink.json sha256 changed');
          if (entry.captionMustContain
              && !(typeof d.caption === 'string' && d.caption.includes(entry.captionMustContain))) {
            why.push(`caption no longer contains "${entry.captionMustContain}"`);
          }
        }
        const allowed = entry && !why.length;
        findings.push({
          level: exempt || allowed ? 'OK' : PRESSURE_LEVEL,
          rule: exempt ? 'p-x' : allowed ? 'p-a' : 'p',
          diagram: d.id, kind, opponent: o.id, goalie: o.goalie, ri, to,
          dist: tipDist, miss, angle, pkMiss, pkAlong,
          side: o.team, ownerSide: owner.team, ownerId: owner.id,
          ruling: entry?.ruling, reraised: entry && why.length ? why : null,
          template: { ...key, measured: { d: r2(tipDist), miss: r2(miss) }, rinkSha256: RINK_SHA,
            captionMustContain: '', reason: '', ruling: '' },
        });
      }
      continue;
    }

    for (const o of opponents) {
      // ---- (b) THE HARD RULE: an arrowhead may not finish on an opponent. ----
      const tipDist = Math.hypot(o.x - to.x, o.y - to.y);
      if (tipDist < ARRIVAL.noArrow) {
        // The opponent must lie AHEAD of the tip. A backchecker's arrow pointing away
        // from a trailing opponent is near him and not at him — the bare-distance form
        // of this rule flagged three such routes (rush-3-on-2-default,
        // rush-backcheck-lanes ×2) and was wrong to. That is why the bare form is the
        // wrong form.
        const ahead = (o.x - to.x) * ux + (o.y - to.y) * uy;
        if (ahead > 0) {
          // A GOALTENDER is advisory, not a build failure, and the asymmetry is
          // deliberate. Every route that drives the net finishes near the goaltender by
          // construction, so failing the build here would forbid drawing a net drive at
          // all. But he is not dropped from the check either: he is the one target every
          // book protects unconditionally — USA Hockey Rule 607 Charging (d), 2025-29,
          // "A goalkeeper is NOT 'fair game' because they are outside the privileged
          // area. A penalty for interference or charging should be called in every case
          // where an opposing player makes unnecessary contact with a goalkeeper";
          // IIHF 42.1 CHARGING carries the same RULE in different words, not the same
          // sentence. Excluding him entirely would
          // have silently dropped three real findings that this file's own header cites
          // as the reason it exists.
          findings.push({
            level: o.goalie ? 'WARN' : 'FAIL',
            rule: o.goalie ? 'b-G' : 'b',
            diagram: d.id, kind, opponent: o.id, dist: tipDist,
            side: o.team, ownerSide: owner.team, ownerId: owner.id,
          });
        }
      }

      // ---- (a) ADVISORY: the extended terminal tangent must clear the anchor. ----
      // SKATERS ONLY, and not as a convenience. A directional test cannot discriminate on
      // a goaltender: he stands where every offensive route points, so "the tangent aims
      // at him" is true of any route toward the net and says nothing about that route.
      // Empirically it fired on exactly two, both `carry` routes aiming dead at the
      // goalie from 38 and 48 ft short of him — geometry, not a near miss.
      if (o.goalie) continue;
      // The ray starts AT THE TIP and runs along the terminal tangent. (The chord version
      // projected from the route's start, which conflated the run of the line with the
      // reach of the ray.)
      const wx = o.x - to.x, wy = o.y - to.y;
      const along = wx * ux + wy * uy;
      if (along <= 0) continue;                      // opponent must be beyond the tip
      const perp = Math.abs(wx * -uy + wy * ux);
      if (perp <= ARRIVAL.glyph) {
        findings.push({
          level: 'WARN', rule: 'a', diagram: d.id, kind,
          opponent: o.id, dist: perp, beyond: along,
          side: o.team, ownerSide: owner.team, ownerId: owner.id,
        });
      }
    }
  }
}

const order = { FAIL: 0, WARN: 1, OK: 2 };
findings.sort((x, y) => order[x.level] - order[y.level] || x.diagram.localeCompare(y.diagram));

// Name the target from the READER's point of view, not the route owner's. 22 of the
// 80 routes in scope are skated by the opposition, and for those the player at risk is
// one of the reader's own — so "the opposing goaltender" would name the wrong net. It
// is accurate for every finding today; it would have started lying the first time an
// opposition-owned route tripped the rule, which is the kind of label that goes wrong
// quietly and is believed.
const who = (f) => (f.side === 'opp' ? 'the opposition' : "the reader's own");

for (const f of findings) {
  const target = f.rule === 'b-G' || f.goalie ? `${who(f)} GOALTENDER` : `${who(f)} ${f.opponent}`;
  const what = f.rule === 'p' || f.rule === 'p-x' || f.rule === 'p-a'
    ? `pressure route aims at a player (route ${f.ri}, tip ${f.to.x.toFixed(1)},${f.to.y.toFixed(1)}): `
      + `${target}, d ${f.dist.toFixed(2)} ft, `
      + `miss ${f.miss.toFixed(2)} ft, ${f.angle.toFixed(1)}° off the bearing`
      + (f.rule === 'p-x'
        ? ` — EXEMPT, stick-on-puck (puck ${f.pkAlong.toFixed(2)} ft ahead, miss ${f.pkMiss.toFixed(2)} ft)`
        : f.rule === 'p-a'
        ? ` — ALLOWLISTED (${f.ruling})`
        : (f.pkMiss !== null ? ` (puck miss ${f.pkMiss.toFixed(2)} ft, ${f.pkAlong.toFixed(2)} ft along)` : ' (no puck drawn)')
          + (f.reraised ? ` — RE-RAISED, allowlist entry no longer holds: ${f.reraised.join('; ')}` : ''))
    : f.rule === 'a'
    ? `terminal tangent passes ${f.dist.toFixed(2)} ft from ${target}, `
      + `${f.beyond.toFixed(1)} ft beyond the tip`
    : `arrowhead finishes ${f.dist.toFixed(2)} ft from ${target}`;
  console.log(`  ${f.level.padEnd(4)} [${f.rule.padEnd(3)}]  ${f.diagram.padEnd(30)} `
    + `${(f.ownerSide + ':' + f.ownerId).padEnd(8)} ${what}`);
}

// Entries that matched no finding by key: the route was redrawn, renamed or removed, or the
// finding cleared. Reported, never pruned silently — a stale entry is a ruling about a
// picture that no longer exists.
const stale = ALLOW.map((e, i) => ({ e, i })).filter(({ i }) => !used.has(i));
for (const { e } of stale) {
  console.log(`  STALE [p-a] ${String(e.diagram).padEnd(30)} allowlist entry matches no finding `
    + `(target ${e.target?.id}, to ${JSON.stringify(e.to)}, bow ${e.bow ?? 0}; ${e.ruling}) — remove or re-rule it`);
}

if (ALLOW_TEMPLATE) {
  const raised = findings.filter((f) => f.rule === 'p');
  console.log(`\n--allow-template: ${raised.length} draft entr${raised.length === 1 ? 'y' : 'ies'} `
    + '(fill reason, ruling and, where the acceptance rests on a caveat, captionMustContain):');
  console.log(JSON.stringify(raised.map((f) => f.template), null, 2));
}

for (const u of unowned) {
  // Not a violation — a hole in the check. A route that starts on no player cannot be
  // attributed to a team, so neither form can be applied to it. Reported rather than
  // skipped silently, because a silent skip is how a check reports "clean" on work it
  // never looked at.
  console.log(`  SKIP [--]  ${u.diagram.padEnd(30)} route starts ${u.dist.toFixed(1)} ft `
    + 'from the nearest player — owner cannot be determined, not checked');
}

const fails = findings.filter((f) => f.level === 'FAIL');
const exempt = findings.filter((f) => f.rule === 'p-x');
const allowed = findings.filter((f) => f.rule === 'p-a');
const advisory = findings.length - fails.length - exempt.length - allowed.length;
const routes = DIAGRAMS.reduce((a, d) => a + (d.routes?.length ?? 0), 0);
const arrows = DIAGRAMS.reduce(
  (a, d) => a + (d.routes ?? []).filter((r) => ARROW_KINDS.has(r.kind ?? 'skate')).length, 0);
const pressures = DIAGRAMS.reduce(
  (a, d) => a + (d.routes ?? []).filter((r) => r.kind === PRESSURE_KIND).length, 0);

console.log(
  `\ncheck-arrivals: ${DIAGRAMS.length} diagrams · ${routes} routes `
  + `(${arrows} skater-owned and arrow-ended, ${pressures} pressure; the only ones in scope) · `
  + `${fails.length} hard, ${advisory} advisory`
  + (exempt.length ? `, ${exempt.length} exempt (stick-on-puck)` : '')
  + (allowed.length ? `, ${allowed.length} allowlisted` : '')
  + (stale.length ? `, ${stale.length} STALE allowlist entr${stale.length === 1 ? 'y' : 'ies'}` : '')
  + (unowned.length ? `, ${unowned.length} unattributable and NOT checked` : ''));

if (fails.length && !WARN_ONLY) {
  if (fails.some((f) => f.rule === 'p')) console.error(
    '\ncheck-arrivals FAILED on form (p): a pressure route aims at a player. Move its tip so '
    + 'the terminal tangent misses him by more than ARRIVAL.glyph or aims at a puck clear of '
    + 'him, or — if a triage accepts it — add an entry to arrivals-allow.json with a reason '
    + 'and a ruling (`--allow-template` drafts one).');
  if (fails.some((f) => f.rule !== 'p')) console.error(
    '\ncheck-arrivals FAILED. An arrowhead finishing on an opposing skater reads as '
    + '"skate through him". End the route in two bars (`pressure`/`stop`), or stop it '
    + 'further short. The invariant is stated above `playSvg` in lib/rink.mjs — fix it '
    + 'there and only there if it needs to change.');
  process.exit(1);
}

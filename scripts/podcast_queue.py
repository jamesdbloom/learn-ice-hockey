#!/usr/bin/env python3
"""Podcast-episode queue and checkpoint state for the NotebookLM automation.

WHY THIS EXISTS
---------------
`project/plans/OPEN_ITEMS.md` (podcast section) and the history in
`project/reviews/podcast_automation_plan_consolidated_2026-09-20.md` describe a
queue/checkpoint/rate-limit workflow for driving NotebookLM one episode at a
time. Nothing implemented it — `.claude/skills/notebooklm-episode/build_episode.py` only
assembles a source bundle for a single episode already decided on. This
script is the missing piece: it derives the correct queue from the site's
own canonical page order, tracks per-item progress through the workflow's
named states, and enforces the plan's batching ceiling. It does NOT touch a
browser — NotebookLM has no API, and driving it is `.claude/skills/notebooklm-episode/`'s
job, using this script's `next-batch` output as its worklist.

ORDERING
--------
One episode per document, in site order. `site/src/data/podcast.json` (formerly
`podcasts_web/manifest.json`) is PER-DOCUMENT, and
`.claude/skills/notebooklm-episode/SKILL.md` now says the same thing ("This corpus
ships one episode per document, not one per layer"). ⚠️ An earlier version of this
paragraph said SKILL.md "groups episodes by LAYER" and described a grouping table
there; by 16 October 2026 SKILL.md had no such table, so the paragraph was arguing
with something that no longer existed. Order comes from
`site/src/data/structure.json`, the single source of truth for page order ("Every
markdown file under content/ must appear exactly once here"), and is RE-READ on
every run — never taken from the track number stored in the state file, which is a
snapshot from whenever the item was queued and goes stale when pages are reordered.

⚠️ `getting-started/getting_started` is deliberately excluded from the
AUTOMATIC queue, per an explicit instruction: it already has an episode
(track 1). The exclusion is a queue-scope decision, not a claim that the page
doesn't belong in the site order — and naming it with `build-queue --stale`
overrides it, because that is an explicit instruction too. Without that
override it could never reach `accepted`, and `build_podcast_audio.py` refuses
any new master that is not `accepted`.

STALENESS
---------
No prior run of this tool has ever shipped an episode, so there is no
recorded per-episode source hash to compare against. This script computes
a hash from each document's current content and stores it once an episode
is accepted — from then on, `build-queue` can tell a genuinely-missing
episode apart from a stale one (hash mismatch) automatically. On its FIRST
run it cannot do that inference for the 34 already-existing episodes it
has no history for, so it does not queue them speculatively — re-running
the corpus through NotebookLM 34 times on a guess is exactly the rate-limit
risk this tool exists to avoid. It queues only:
  (a) documents with no episode in the manifest at all, and
  (b) documents named explicitly with --stale (a human or a coordinator
      judgement call, recorded with a reason), so a known-stale episode
      (e.g. one generated before a content fix landed) can be requeued
      without guessing at the other 34.

USAGE
-----
  python3 scripts/podcast_queue.py status
      Read-only. Show every document's current state: has-episode / missing / stale /
      in-queue, with its target track number from structure.json.

  python3 scripts/podcast_queue.py build-queue [--stale DOC_ID ...] [--unblock DOC_ID ...] [--reason TEXT]
      (Re)build the queue file from structure.json + the manifest. Items
      already past `queued` in the checkpoint are left alone, and a
      `blocked` (rejected) item is NEVER overwritten unless named with
      --unblock, which requeues it keeping its history and failure count. Pass
      --stale to add specific known-stale documents (see STALENESS above).

  python3 scripts/podcast_queue.py next-batch [--limit N]
      Print up to N (default 10, the plan's hard ceiling; never pass more)
      queued items ready for the next step, IN SITE ORDER (structure.json, read
      fresh), skipping anything `blocked`. Read-only. This is what a driving
      session consumes. ⚠️ It used to sort by `queued_at`; every item was
      queued in one run with one timestamp, so the tie fell through to the
      state file's sorted keys and the batch printed ALPHABETICALLY.

  python3 scripts/podcast_queue.py set-status DOC_ID STATUS [--note TEXT]
      Advance (or block) one item. STATUS must be one of the plan's named
      states: queued, bundled, uploaded, processing, generated, downloaded,
      converted, reviewed, accepted, blocked.

  python3 scripts/podcast_queue.py record-hash DOC_ID
      Store the current content hash for an accepted episode, so future
      `build-queue` runs can detect drift automatically instead of relying
      on --stale.

STATE FILE
----------
`.podcast_queue/state.json` (gitignored — see .gitignore). Holds only
operational state: doc_id, target track, status, timestamps, content hash
at last accept, failure counts, and free-text notes. Never a cookie, a
credential, or an account identifier — the plan is explicit about this and
this script writes nothing that could be either.
"""
import json
import sys
import hashlib
import datetime
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
STRUCTURE_PATH = REPO_ROOT / "site" / "src" / "data" / "structure.json"
MANIFEST_CANDIDATES = [
    REPO_ROOT / "site" / "src" / "data" / "podcast.json",
    REPO_ROOT / "podcasts_web" / "manifest.json",
]
CONTENT_ROOT = REPO_ROOT / "content"
QUEUE_DIR = REPO_ROOT / ".podcast_queue"
STATE_PATH = QUEUE_DIR / "state.json"

# Excluded from the queue by explicit instruction: already has an episode
# (track 1) and needs no new one. Not excluded from the site's own page
# order -- structure.json still lists it, and its existing episode's track
# number is left alone.
EXCLUDED_DOC_IDS = {"getting-started/getting_started"}

VALID_STATUSES = [
    "queued", "bundled", "uploaded", "processing", "generated",
    "downloaded", "converted", "reviewed", "accepted", "blocked",
]

# ⚠️ A hard rate-limit and RECOVERY ceiling, not a throughput target: `next-batch`
# caps at 10 unconditionally, regardless of `--limit`. The figure and that rationale
# were set in commit 919982c (17 Sept 2026) and this constant is now their only owner
# — the plan file that carried them was consolidated away on 20 September, and until
# 22 September this line still quoted "at most 10 per batch" from a file that had not
# said it for two days. A citation outlives the sentence it cites; prefer owning the
# figure here to pointing at prose that can be edited underneath it.
BATCH_HARD_CEILING = 10


def load_structure_order():
    """Return [(doc_id, track_number, section_title), ...] in canonical site order."""
    data = json.loads(STRUCTURE_PATH.read_text())
    ordered = []
    track = 0
    for layer in data["layers"]:
        for doc_id in layer["docs"]:
            track += 1
            ordered.append((doc_id, track, layer["title"]))
    return ordered


def _manifest_episodes(data):
    """Pull the episode array out of either manifest shape, or None if it is neither.

    ⚠️ THE TWO FILES HAVE DIFFERENT SHAPES AND THAT SILENTLY BROKE THIS TOOL.
    `podcasts_web/manifest.json` is a bare JSON **list**. The canonical
    `site/src/data/podcast.json` that superseded it is an **object**,
    ``{"note": ..., "episodes": [...]}`` -- see `build_podcast_audio.py`, which
    writes it. The original loader tested ``isinstance(data, list)``, so the
    canonical file failed the test, fell through, and the tool reported the
    superseded file instead. **It said which file it had used, and nothing said
    that was the wrong one.**

    ⚠️ It was not a harmless fallback. On 18 September 2026 the two disagreed
    about exactly two documents -- the canonical file carried an episode for
    `foundation/rink_map` and none for `foundation/core_principles`, and the
    superseded file the reverse -- so `status` printed `has_episode` **backwards
    for both**, and they are the two documents the podcast work was actually
    about. A queue that is wrong about which episodes exist is worse than no
    queue.
    """
    if isinstance(data, list):
        return data
    if isinstance(data, dict) and isinstance(data.get("episodes"), list):
        return data["episodes"]
    return None


def load_manifest():
    """Return ({doc_id: entry}, path) from the canonical manifest.

    ⚠️ `MANIFEST_CANDIDATES` is ordered, and the order is the point: the
    canonical file wins whenever it is readable. The superseded file is a
    fallback for a checkout that predates the move, **not** an equal partner.
    ⚠️ Falling back is now reported on stderr rather than happening quietly,
    because the quiet version printed a plausible table built from stale data.
    """
    tried = []
    for path in MANIFEST_CANDIDATES:
        if not path.exists():
            continue
        episodes = _manifest_episodes(json.loads(path.read_text()))
        if episodes is None:
            tried.append(f"{path.relative_to(REPO_ROOT)} (unrecognised shape)")
            continue
        if tried:
            print(
                "podcast_queue: WARNING -- falling back to "
                f"{path.relative_to(REPO_ROOT)} because "
                + ", ".join(tried)
                + ". Episode presence below may be stale.",
                file=sys.stderr,
            )
        return {e["doc_id"]: e for e in episodes if "doc_id" in e}, path
    return {}, None


def doc_path_for(doc_id):
    return CONTENT_ROOT / f"{doc_id}.md"


def content_hash(doc_id):
    p = doc_path_for(doc_id)
    if not p.exists():
        return None
    return hashlib.sha256(p.read_bytes()).hexdigest()


def load_state():
    if STATE_PATH.exists():
        return json.loads(STATE_PATH.read_text())
    return {"items": {}}


def save_state(state):
    QUEUE_DIR.mkdir(exist_ok=True)
    STATE_PATH.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n")


def now_iso():
    return datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")


def cmd_status(args):
    order = load_structure_order()
    manifest, manifest_path = load_manifest()
    state = load_state()
    print(f"Canonical order: {STRUCTURE_PATH.relative_to(REPO_ROOT)} ({len(order)} documents)")
    print(f"Manifest: {manifest_path.relative_to(REPO_ROOT) if manifest_path else '(none found)'} "
          f"({len(manifest)} episodes)")
    print(f"Queue state: {STATE_PATH.relative_to(REPO_ROOT)} "
          f"({'exists' if STATE_PATH.exists() else 'not yet created — run build-queue'})")
    print()
    print(f"{'trk':>3}  {'doc_id':<45} {'has_episode':<12} {'queue_status':<12} section")
    for doc_id, track, section in order:
        excluded = doc_id in EXCLUDED_DOC_IDS
        has_episode = doc_id in manifest
        item = state["items"].get(doc_id)
        qstatus = item["status"] if item else ("excluded" if excluded else "-")
        print(f"{track:>3}  {doc_id:<45} {str(has_episode):<12} {qstatus:<12} {section}")


def cmd_build_queue(args):
    stale_ids = set(args.stale or [])
    reason = args.reason or "marked stale by coordinator"
    order = load_structure_order()
    manifest, _ = load_manifest()
    state = load_state()
    unblock_ids = set(args.unblock or [])
    added, skipped_existing, skipped_excluded, skipped_unknown_stale = [], [], [], []
    skipped_blocked, unblocked = [], []

    valid_doc_ids = {doc_id for doc_id, _, _ in order}
    for sid in stale_ids | unblock_ids:
        if sid not in valid_doc_ids:
            skipped_unknown_stale.append(sid)
    not_blocked = sorted(d for d in unblock_ids & valid_doc_ids
                         if state["items"].get(d, {}).get("status") != "blocked")

    for doc_id, track, section in order:
        if doc_id in EXCLUDED_DOC_IDS and doc_id not in stale_ids | unblock_ids:
            skipped_excluded.append(doc_id)
            continue
        already_tracked = doc_id in state["items"]
        has_episode = doc_id in manifest
        is_stale_pick = doc_id in stale_ids

        prev = state["items"].get(doc_id)
        if already_tracked and prev["status"] == "blocked":
            # ⚠️ A blocked item is a REJECTED episode with a recorded reason. A plain
            # build-queue (or --stale) used to overwrite it with a fresh `queued` entry and
            # an empty history, silently. Only an explicit --unblock requeues it, and the
            # history and failure count are kept.
            if doc_id not in unblock_ids:
                skipped_blocked.append(doc_id)
                continue
            prev["status"] = "queued"
            prev["target_track"] = track
            prev["section"] = section
            prev["queued_at"] = now_iso()
            prev["reason"] = args.reason or prev.get("reason", "unblocked")
            prev.setdefault("history", []).append(
                {"status": "queued", "at": now_iso(),
                 "note": f"--unblock: {args.reason or 'no reason given'}"})
            unblocked.append(doc_id)
            continue

        if already_tracked:
            # Never clobber progress already made on a real attempt.
            skipped_existing.append(doc_id)
            continue

        if not has_episode or is_stale_pick:
            state["items"][doc_id] = {
                "doc_id": doc_id,
                "target_track": track,
                "section": section,
                "status": "queued",
                "reason": "missing from manifest" if not has_episode else reason,
                "queued_at": now_iso(),
                "history": [{"status": "queued", "at": now_iso()}],
                "failure_count": 0,
                "content_hash_at_accept": None,
            }
            added.append(doc_id)

    save_state(state)

    print(f"Added to queue: {len(added)}")
    for d in added:
        print(f"  + {d}")
    if skipped_excluded:
        print(f"Excluded by instruction (already have an episode, no new work needed): {len(skipped_excluded)}")
    if unblocked:
        print(f"Unblocked and requeued (history and failure count kept): {len(unblocked)}")
        for d in unblocked:
            print(f"  ↺ {d}")
    if skipped_blocked:
        print(f"⚠️  BLOCKED, left blocked (pass --unblock DOC_ID to requeue): {skipped_blocked}")
    if not_blocked:
        print(f"⚠️  --unblock named doc_id(s) that are not blocked, ignored: {not_blocked}")
    if skipped_existing:
        print(f"Already tracked, left alone: {len(skipped_existing)}")
    if skipped_unknown_stale:
        print(f"⚠️  --stale named doc_id(s) not found in structure.json, ignored: {skipped_unknown_stale}")
    if not added and not unblocked:
        print("Nothing new to queue. Documents with no recorded episode and no "
              "--stale flag are the only automatic additions — pass --stale "
              "DOC_ID for a specific document you have separately confirmed "
              "needs regenerating; this tool will not guess.")


def _short(text, n=70):
    text = " ".join(str(text).split())
    return text if len(text) <= n else text[: n - 1] + "…"


def cmd_next_batch(args):
    requested = BATCH_HARD_CEILING if args.limit is None else args.limit
    limit = max(1, min(requested, BATCH_HARD_CEILING))
    if requested != limit:
        print(f"⚠️  Requested {requested}, clamped to {limit} (range 1..{BATCH_HARD_CEILING}).")
    state = load_state()  # read-only: this command never calls save_state
    # Site order, read fresh from structure.json. Items no longer in it sort last.
    site_track = {doc_id: track for doc_id, track, _ in load_structure_order()}
    items = [v for v in state["items"].values() if v["status"] == "queued"]
    unknown = [v["doc_id"] for v in items if v["doc_id"] not in site_track]
    items.sort(key=lambda v: (site_track.get(v["doc_id"], 10**6), v["doc_id"]))
    batch = items[:limit]
    print(f"Next batch ({len(batch)} of {len(items)} queued, ceiling {limit}), in site order:")
    for it in batch:
        track = site_track.get(it["doc_id"])
        print(f"  track {track if track is not None else '??':>2}  {it['doc_id']:<45} "
              f"(queued {it['queued_at'][:10]}, reason: {_short(it['reason'])})")
    if items:
        oldest = min(v["queued_at"] for v in items)
        print(f"  (oldest queue entry: {oldest} — if that predates content changes, "
              f"rebuild deliberately; this command does not)")
    if unknown:
        print(f"⚠️  queued doc_id(s) not in structure.json (renamed or removed?): {unknown}")
    if not batch:
        print("  (nothing queued — run build-queue first, or everything queued is already in progress)")


def cmd_set_status(args):
    if args.status not in VALID_STATUSES:
        sys.exit(f"error: status must be one of {VALID_STATUSES}, got {args.status!r}")
    state = load_state()
    if args.doc_id not in state["items"]:
        sys.exit(f"error: {args.doc_id!r} is not in the queue — run build-queue first "
                  f"(or --stale it in if it already has an episode)")
    item = state["items"][args.doc_id]
    old = item["status"]
    item["status"] = args.status
    item.setdefault("history", []).append(
        {"status": args.status, "at": now_iso(), "note": args.note or ""}
    )
    if args.status == "blocked":
        item["failure_count"] = item.get("failure_count", 0) + 1
    if args.status == "accepted":
        item["content_hash_at_accept"] = content_hash(args.doc_id)
        item["accepted_at"] = now_iso()
    save_state(state)
    print(f"{args.doc_id}: {old} -> {args.status}"
          + (f"  ({args.note})" if args.note else ""))
    if args.status == "blocked":
        fc = item["failure_count"]
        print(f"  failure_count is now {fc}"
              + ("  ⚠️  at or past the plan's stop-after-three-failures threshold — "
                 "do not retry automatically, surface to the user" if fc >= 3 else ""))


def cmd_record_hash(args):
    state = load_state()
    if args.doc_id not in state["items"]:
        sys.exit(f"error: {args.doc_id!r} is not in the queue")
    h = content_hash(args.doc_id)
    if h is None:
        sys.exit(f"error: no content file found for {args.doc_id!r} at {doc_path_for(args.doc_id)}")
    state["items"][args.doc_id]["content_hash_at_accept"] = h
    state["items"][args.doc_id]["hash_recorded_at"] = now_iso()
    save_state(state)
    print(f"{args.doc_id}: recorded hash {h[:12]}…")


def main():
    import argparse
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser("status", help="Show every document's episode/queue state.")

    bq = sub.add_parser("build-queue", help="(Re)build the queue from structure.json + the manifest.")
    bq.add_argument("--stale", nargs="*", help="doc_id(s) to requeue despite having an episode.")
    bq.add_argument("--unblock", nargs="*",
                    help="blocked doc_id(s) to requeue. Without it a blocked item is never touched.")
    bq.add_argument("--reason", help="Why the --stale items are being requeued (recorded in state).")

    nb = sub.add_parser("next-batch", help="Print the next batch of queued items.")
    nb.add_argument("--limit", type=int, help=f"Max items (default/ceiling {BATCH_HARD_CEILING}).")

    ss = sub.add_parser("set-status", help="Advance or block one queue item.")
    ss.add_argument("doc_id")
    ss.add_argument("status")
    ss.add_argument("--note")

    rh = sub.add_parser("record-hash", help="Store the current content hash for an accepted episode.")
    rh.add_argument("doc_id")

    args = p.parse_args()
    {
        "status": cmd_status,
        "build-queue": cmd_build_queue,
        "next-batch": cmd_next_batch,
        "set-status": cmd_set_status,
        "record-hash": cmd_record_hash,
    }[args.cmd](args)


if __name__ == "__main__":
    main()

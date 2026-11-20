# W561–W562: hit-from-behind ladder copies agree, and winger gets the Hockey Canada head-only rescope it missed (20 November 2026)

## W561 census (rules-verifier, read-only)

The census checked every hit-from-behind ladder copy in goaltender, winger and forechecking_systems. It checked each against the others in the same file and against the primary text:
- **Hockey Canada** (hc.txt): 7.5 :6165–6190; 7.6 and 7.7 supersession, "contact to the **head**" :6245 and :6312; 8.5(b).
- **USA Hockey:** 602(a), 608 and 620(b) (usah.txt), and Casebook 608 Situation 1.
- **IIHF:** 43 and 48, in both editions.
- **NHL and PWHL:** 43, 48 and 21.1.
- **CARHA:** 48, 50, 53, 54 and 32(d).
- **The EIHL Casebook:** silent on 43 and 48.

**Findings:**
- **winger missed commit 18ca60ea's rescope** (it is absent from that commit's 18-file list). Three units still sent a Hockey Canada hit from behind on the **neck** to head contact:
  - facts :876 (299/300, voiced alone). This one was **permissive**: a neck hit read as having no game misconduct.
  - :883.
  - :886.
- **winger :871** lacked 7.5(b)'s mandatory major and game misconduct on injury.
- **goaltender :1636–1637** never stated the NHL and PWHL major plus mandatory game misconduct (43.3, 43.5).
- **forechecking :224** scoped the IIHF to the head only, although IIHF 48 says "head or neck".
- **Restatement:** the ladder is restated 5–7 times per file. Candidates that carry no unique tier are filed in the plan.
- **Coordinator check:** a sentence-level grep across all other content found no other Hockey Canada "head or neck → head contact" unit.

## W562 edits (three agents, one file each)

**winger:**
- :876 now reads "off the head … on the head".
- :883 now reads "reaches the head … ; on the neck it stays checking from behind (7.5)". The 7.6(b) high-cross-check interpretation clause is kept.
- :886 is now head-only.
- :871 adds "a major and game misconduct if they are hurt (7.5(b))".
- :834 parenthetical (the reviewer's optional sketch, reworded so the rule is the subject) now reads "(in minor and female hockey it *"supersedes any other rules"* where contact reaches the head)".

**goaltender:** :1637 adds "The NHL and PWHL make it a major with a mandatory game misconduct (43.3, 43.5)".

**forechecking:**
- :224 now reads "under Hockey Canada only while it stays off the head, and under the IIHF off the head and neck".
  - The follow-on first became "If it reaches them". The safety-reviewer found that **permissive** for a Hockey Canada neck hit.
  - It was repaired to the sketch: "If it reaches the head — or, under the IIHF, the neck — a lesser call is possible, but ⚠️ **plan on ejection anyway**".
- :811 now reads "into the boards or goal frame" (7.5(c)'s wording).

## Review

| Reviewer | Findings | Result |
|---|---|---|
| rules-verifier (census) | Above | Basis for the edits |
| safety-reviewer | One minor permissive finding: :224 "them". All other sites OK, checked against hc.txt :6245/:6312/:6165–6186 and NHL/PWHL 43.3–43.5. Optional: :834. | Both applied |

## Rows

**Closed:** the D8 ladder-agreement handoff from W539/W560. All copies now agree.

**Still open:** the restatement candidates (a cut needs a chunk-distance check first), goaltender's victim-side markers, and W542(3), the Hockey Canada neck reading being an inference.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w562.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 3 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered |
| D8/D9 | Covered: every ladder copy in the three files was compared |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **Copies that price the act without "from behind" or "back".**
- **Listener chunk distances.** Not rendered.
- **How Hockey Canada rules on a neck hit in practice** (W542(3)).

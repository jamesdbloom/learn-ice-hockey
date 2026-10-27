# In-House Rule 76 and faceoff lateness; EIHL Casebook version (27 October 2026)

Research only. No `content/` or `sources/` file changed.

## In-House Rule 76 and lateness: still unclear, and the corpus wording stays
**Question.** IHUK In-House Rules 2026-27 Rule 76 says: "With the exception of face-offs following icings, the linesperson shall immediately replace the centre for all violations." Does "all violations" reach a team that is late lining up (IIHF 76.7)?

**Found (general-purpose research agent, primary text read with line numbers):**
- **IIHF 76.3(V)** lists lining up offside for a faceoff as a faceoff violation. The sanction is a warning in v1.1 (`iihf_rules_v1.1.txt:6216-6218`) and replacing the centre in 2026/27 (`iihf_rules_2026-27.txt:6315-6317`).
- **IIHF 76.7 handles lateness on a separate track:**
  - the **Referee** warns the team and the coach once;
  - v1.1 says the centre "will not receive a warning for a 'face-off' violation", and 2026/27 says the centre "is not ejected";
  - a repeat is a bench minor for "Slow Proceeding to Face-off Location".
  - The IIHF still calls a repeat a "subsequent violation". Sources: v1.1 :6333-6337; 2026/27 :6439, :6445-6447.
- **IIHF 82.2(VII)** says the same for players who are slow **or** in an offside position, and so sits in tension with 2026/27 76.3(V). Noted, not resolved.
- **British documents** (every `ihuk*`, `eiha*` and `eih*` file, plus the EIHL Casebook, swept flattened for the act in several wordings):
  - In-House Rule 76 (`eiha_inhouse_2026-27.txt:416-423`) is the only British text on it, and says nothing about lateness.
  - The In-House Introduction (:51-61) says "Unless otherwise stated, all rules will be enforced in line with the IIHF Rule Book".
- **Online:**
  - ihukreferee.uk/downloads has no officiating guidance or bulletin. Its In-House PDF is sha256-identical to the one on disk.
  - englandicehockey.com links the same file and no Rule Bulletin.

**Conclusion.** The IIHF deliberately takes lateness off the centre-sanction track, which suggests "all violations" means the linesperson's faceoff violations. In-House 76 does not say so, though. No British source settles it. The current wording in `faceoffs.md` (:799, :814) says it is unclear, and plan on losing the dot. Every factual limb of that wording was confirmed against primary text, so it stays unchanged.

**Side finding (not established).** The IHUK referee site distributes "IIHF_Rule_Book_2026-27-compressed.pdf" to officials. The proxy returned 403, so only the filename was seen. This is carried as a plan row.

## EIHL Casebook version
The plan asked whether the disk copy is v1.0 (its page footers) or v1.1 (as cited). It was already settled at `sources/README.md:2215`:
- `eihl_casebook.txt:12` reads "CASEBOOK 26-27 Version 1.1 080926";
- the page footers are stale publisher furniture.

The citation of v1.1 is correct. The coordinator re-read the README entry and the layout extraction's version table (`eihl_casebook_layout.txt:6`).

## What this method could not have found
- IHUK Rule Bulletins sent only to club secretaries or officials by email or social media.
- Internal referee-conference guidance, and how British linespersons actually call lateness.
- The contents of the referee site's 2026-27 IIHF PDF, which was blocked.

# W542: head and neck scopes, by book (20 November 2026)

## Origin

W540's reviewer noted that "below the head" and "off the head" literally include the neck, while several books' head-contact rules cover the neck too. W542 swept about 69 sites in 18 files. There were three agents. The brief, `scratchpad/w542_common.md`, required each agent to read each book's rule first.

**What each book covers.** All of these were read in source this session:

| Book | Rule | Covers |
|---|---|---|
| USA Hockey | 620 Note and 620(b), usah.txt :4291–4304 | Head, face or neck |
| IIHF | 48.1–48.3, iihf_rules_2026-27 :4370–4420 ("Illegal check to the head or neck"; "supersedes all similar actions regarding hits to the head and neck") | Head or neck |
| CARHA | 50 | Head, face or neck |
| CARHA | 54(b) | Cross-check above the shoulders |
| NHL and PWHL | 48.1 | Head only |
| Hockey Canada | 7.6 and 7.7 preambles, and 7.6(a) | Head, face or neck |
| Hockey Canada | Supersession clauses (hc.txt :6245–6246: "any foul that results in contact to the **head** must be penalized as Head Contact"; 7.7 the same) | Head only |
| Hockey Canada | 7.7(a) | Head only |
| Hockey Canada | Defenceless match limbs 7.6(c) and 7.7(c) ("hits a player in the head") | Head only |
| Hockey Canada | Intent limbs ("by Head Contact") | Read as reaching the neck (defensible) |

## What went wrong mid-wave, and the convention that resolved it

**Overcorrection.** The first pass extended Hockey Canada scopes to the neck. In places that attached the head-only defenceless match to neck contact, which is harsher than the book. Two agents scoped those matches back to the head.

**The defect that fix exposed (major, permissive).** The group 1 rules-verifier found it, and the group 2 verifier confirmed it independently.

Hockey Canada's supersession says "head" only. So a **neck** hit from behind stays checking from behind under 7.5. That means a game misconduct at the floor (7.5(a), (e)) and a **mandatory match** into the boards or goal frame on a player who cannot protect themselves (7.5(c)).

The sweep had written "reaches the head **or neck**, Hockey Canada calls it head contact". Paired with the head-only defenceless match, that priced a neck hit into the boards at a game misconduct, not a mandatory match. The worst instance was defender :290, a facts line voiced alone, which scoped 7.5(c) to "below the neck".

**The convention applied corpus-wide** (rules_primer's, brief `scratchpad/w542_fix.md`):
- Under Hockey Canada, a hit from behind becomes head contact only on the **head**.
- The neck stays under 7.5.
- The neck is kept only where a book writes it: USA Hockey 620, IIHF 48, CARHA 50 and 54(b), and Hockey Canada 7.6(a)/(b) as a stand-alone tariff.
- Joint IIHF + Hockey Canada brackets were split by book where they fit. Where they did not fit, they went back to the HEAD wording.

**After the convention:**
- **Byte-identical to HEAD:** zone_entries, language_and_glossary, game_management, risk_management and puck_support_and_spacing.
- **What remains in the diff:**
  - **USA Hockey neck limbs.** Two of these were genuinely permissive before:
    - special_teams :1117 and OZP :687 had careless neck contact in the minor-plus-misconduct branch. 620(b) makes it a mandatory major and game misconduct.
    - The other USA Hockey limbs are pwtp :722, forechecking :251, body_contact :1847 and defender :315.
  - **IIHF "minor possible on the head or neck" clauses:** defending_the_rush, DZC :755, OZP :842/:1191, rules_primer :493, forechecking :987, pwtp :1024, and the IIHF limbs of body_contact, goaltender, defender, shooting and center.
  - **CARHA:** DZC :544 now reads "any high-stick contact above the shoulders a major (62(b))". The old form, "any stick to the head", understated 62(b)'s scope.
  - **Hockey Canada 7.6(a)/(b) stand-alone:** DZC :541/:544 and goaltender :1379.
  - **Joint brackets split by book:**
    - body_contact :51, :803
    - goaltender :1283, :1635, :1714
    - shooting :537, :920, :953
    - forechecking :339, :628, :712, :764, :973
    - pwtp :1022

## Other repairs from review

- **OZP :687 (critical, caught by group 2).** A cap-fit had changed "no penalty **only if** a defender forced you in" to "**unless**". That inverted Casebook 607 Situation 4 (usah_casebook.txt :11684–11694). "Only if" is restored, and "shoulder down" is restored.
- **zone_entries :865, :1205.** A head scope had swallowed the intent limb. These are now back to HEAD.
- **zone_entries :239, :846.** These facts lines had attached a match to the neck. They are now back to HEAD.
- **"if it reaches them".** This was ambiguous and has been removed.
- **"above the neck".** This was used as a cap-fit for "on the head" and left the neck in neither branch. It has been removed everywhere.
- **shooting :537.** The Hockey Canada neck game misconduct had sounded discretionary; it is now split by book.
- **shooting :955.** The Hockey Canada minor now reads "off the head".
- **body_contact :817 (pre-existing, harsher).** The Hockey Canada defenceless match is now scoped to a head hit.
- **goaltender :1379, :1380 and shooting :509.** The head-only tariffs are scoped back to the head.

## Review

| Reviewer | Files | Result |
|---|---|---|
| rules-verifier, group 1 | body_contact, goaltender, defender, shooting, center, switching | Q2 major (above). Three minors. Re-read: OK, with 3 minors repaired. |
| rules-verifier, group 2 | the other 12 | One critical (OZP :687), two majors (the joint-bracket split, and the zone_entries intent limb), three minors. Re-read: OK, with one minor (joint brackets) repaired. |

**C11.** The last repairs (the bracket splits, shooting :537/:955 and body_contact :817) follow the reviewers' sketches. Their mechanical checks were re-run, but no reviewer re-read them.

## Rows

- **Closed:** W540(1).
- **New, from W542:** (1)–(4), as listed in the plan.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, run after every agent finished (`scratchpad/build_w542.log`).
- `check_callout_flow --bare`: 0. Panels: 0. No `<p>*`.
- `check_marker_pairs`: 13 files, 0 lost. The one split-half candidate is shooting :932, a false pairing; that unit was unmarked in HEAD.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: two rules-verifiers, each with source lines |
| D2 exceptions | Covered: Hockey Canada supersession against the preamble; IIHF 48.2 discretionary minor |
| D3 cross-book divergence | Covered: the head and neck scope of every book |
| D4/D5 citations | Covered: CARHA 62(b) wording |
| D6 negative existence | Covered: no neck limb in NHL or PWHL 48 |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: facts lines and Key Takeaways reviewed first |
| D10 facts layer | Covered: cap-fit rewrites read for logical direction (this caught the OZP :687 inversion) |
| D11 reader safety | Covered: the permissive majors were found and repaired |
| D12 read-aloud integrity | Not rendered |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: `check_links` |
| D15 rendered site | Structural only |

## What this method could not have found

- **Head or neck scopes worded without "head" or "neck".** For example "high", "above the shoulders", or a pronoun carried across units.
- **How Hockey Canada referees actually treat a neck hit from behind.** No interpretation is on disk.
- **How the reordered and split clauses sound aloud.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.

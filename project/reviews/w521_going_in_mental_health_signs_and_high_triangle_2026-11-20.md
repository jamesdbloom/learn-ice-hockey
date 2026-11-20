# W521: what going into a fight or scrum costs, mental-health warning signs, and the high-triangle read (20 November 2026)

## Scope

| Agent | Files | Work |
|---|---|---|
| A | risk_management, mental_game, defender, faceoffs | W518(6) and (7), then the sweep's faceoffs and risk_management sites |
| B (rules-verifier, read-only) | none | Sweep for W520(5) and (6): going in described in other words, in documents not yet swept, and the other rules that price going in |
| C | zone_entries.mjs and zone_entries.md, plus the builder outputs | W520(2) and (3): the squash-and-slide and high-triangle captions |
| D | special_teams, game_management | The sweep's sites in those two files |

Reviewers: two safety-reviewers (one for A's first edits, one for every going-in addition) and a diagram-reviewer (C).

## Results

### W518 rows

- **(6) risk_management :861. Refuted, no edit.** The line already carries USA Hockey 608(c)'s condition: "if they cannot protect themselves" is "while the opponent is in a vulnerable or defenseless position" (usah.txt :3728). Lines :763, :847 and :915 name it outright. The safety-reviewer confirmed this.
- **(6) mental_game. Confirmed, and it was the dangerous direction.** The Overview :45, Common Mistakes :700 and Key Takeaway 1 told a reader to get help only once anxiety or low mood "has spread beyond the rink". §13's own list includes signs that stay at the rink:
  - anxiety that will not settle once play starts;
  - dread of the rink;
  - using alcohol or anything else to cope.

  All three layers now name those signs.
  - The safety-reviewer then found Key Takeaway 1 (98 spoken words) and the Overview (92) too long, with the instruction last. Key Takeaway 1 now opens "See a qualified professional if…".
  - Sleep and appetite stay only in Common Mistakes, as "keeps upsetting", which is §13's threshold.
  - The crisis lines are unchanged.
- **(7) defender facts :411/:495.** "name none" became "exempt none", then, after review, "Charging binds every division, checking or not (USA Hockey 607, Hockey Canada 7.4) —". Both lines are now off the cap. Verified: neither rule writes a division clause.
- **(7) faceoffs :158/:194.** "one aimed out" became "a puck aimed out".

### Going into a fight or scrum (W520(5)/(6))

The rules-verifier read the rules that price going in. Key texts:
- **USA Hockey 615(d)** gives a mandatory game misconduct to the first to intervene. **The Glossary** defines an altercation as "Any physical interaction between two or more opposing players resulting in a penalty", so a penalised scrum counts.
- **USA Hockey 629(a)** gives a major plus a game misconduct to *any* player who leaves the bench during an altercation.
- **NHL and IIHF 70, and PWHL 72.6**, give a game misconduct to the first or second player off the bench.
- **Hockey Canada 10.4(e) and CARHA 70(b)/(c)** apply to the first player off, and to any later player off who is penalised.
- **EIHL Casebook, Fines and Suspensions (2)**, gives a game misconduct and a minimum three-game suspension.
- **Clearing the area**: NHL, IIHF and PWHL 46.4; USA Hockey 615(e); Hockey Canada 7.10(d); CARHA 59 Note 2.

It found four places that made going in sound cheaper than it is, and no overstatements:

| Site | Before | After |
|---|---|---|
| faceoffs :182 body, facts (new `Rule:` line :157), Common Mistakes :1325 | Joining a scrum at the draw cost only the zone | "⚠️ **And stay out of it once it draws penalties: the first player in can be thrown out, and coming off the bench into it can end your game.**" The rule ladder lives only in the facts line, which also names the PWHL (72). |
| risk_management :660 body, facts (new `Rule:` line :653) | "Standing up for a teammate after the whistle" sat in a frame that priced it as a penalty | "costs far more than a minor: it is a game misconduct under Hockey Canada and CARHA, and for the first player in under USA Hockey, and the NHL, PWHL and IIHF can give one." |
| game_management :1065, facts :1046 | The after-the-whistle warning named only the puck | "…and going into a teammate's fight can end your game in every book" |
| special_teams :1025, :463, "A fight" section | Crowding a scrum cost only the zone start; the fight section priced only the fighter | "stay out of it" clauses. A closing paragraph: going in, even to break it up, ends your game under Hockey Canada and CARHA, and under USA Hockey if you are first in; the NHL, PWHL and IIHF can eject you; coming off the bench ends your game under USA Hockey and in the Elite League (at least three games), and can in every other book. |

**special_teams :1025.** The old line read "the same in both books" after a paragraph naming six. It now reads "true in every book", with each book's own neutral-zone rule cited: NHL and IIHF 76.2, PWHL 78.2; USA Hockey 612(d); Hockey Canada 6.3(d)(vi), whose numbering the agent confirmed in `hc.txt` (:4702, :4746); CARHA 57(j).

### zone_entries diagrams (W520(2)/(3))

- **defend-squash-and-slide.**
  - The caption now says "while the other slides the same distance with their partner" and "the first forward back protects the slot", matching the prose.
  - The describe no longer says the forward stops "well short of the slot area". His route ends in the high slot, which is x 54 to 69 under the rink_map definition.
- **entry-high-triangle.**
  - The section and the sources did not say which wide driver "goes with the wide driver" means. The first repair generalised it to "commits to one of the two wide drivers".
  - The diagram-reviewer graded that **Major**. Under both of the corpus's 3-on-2 defences (defending_the_rush :583–586), a defender always takes a wide attacker, so the read told the carrier nothing.
  - Johnston & Walter is not on disk, so the picture was not redrawn. Following the section's own logic (:418, :426, :428), the caption, the prose at :435 and facts :424 now say what the movement opens: "the moment one commits, the other defender is left covering two of you".
  - The D's label is now "slides to the carrier", which clears the top faceoff circle and the leader. The puck moved to (23, 27), off the carrier's label.

## Review

| Reviewer | Critical | Major | Minors | Disposition |
|---|---|---|---|---|
| safety-reviewer (A's first edits) | none | none | 2 (Key Takeaway 1 and Overview length; the sleep and appetite threshold) | Repaired |
| diagram-reviewer | none | 1 (the high-triangle read) | 4 | All repaired |
| safety-reviewer (every going-in addition) | none | none | 4, plus readability | All repaired: special_teams :1108 is mandatory under USA Hockey and the EIHL; the PWHL was added in risk_management and faceoffs; "both books"; the faceoffs rule ladder moved to the facts layer |

The second safety-reviewer verified each limb against the primary text, in both directions. Interpretation 6's fighting-penalty condition is met whenever there is a fight. No Key Takeaway or Common Mistakes bullet in the four files contradicts the new text.

**Commit gate (first pass): BLOCK.** The new special_teams :1025 and Sources-trailer text cited the neutral-zone gathering clause as "PWHL 76.2". That PWHL rule is *Bench Minor Penalty* (`pwhl_rules.txt:6493`). The clause is 78.2, *Face–off Locations* (:6643, :6692), which the document's own facts line :997 already cites. Neither the rules-verifier sweep nor the second safety-reviewer had caught it. Repaired at both sites, then re-gated. A grep of `content/` for other "PWHL 76" citations found only rules where 76.x is correct (76.1 and 76.4) and special_teams :1017's combined "76.2/78.2". That line was also changed to "NHL and IIHF 76.2, PWHL 78.2".

In the same pass, :1108 now reads: "Coming off the bench for a fight ends your game under USA Hockey and Hockey Canada, and in the Elite League with at least a three-game ban; in every other book it does if you are the first off." The supporting rules:
- Hockey Canada 10.4(e)'s lead sentence covers "any player who leaves… while a fight is occurring". Its (ii) qualifies later players with "is subsequently assessed a penalty". The harsher lead reading ships; the agent declared that it did not settle this.
- NHL and IIHF 70.6 and PWHL 72.6 give a mandatory game misconduct to the first or second player off.
- CARHA 70(b) gives the first player off a double minor and a game misconduct.

**C11.** No reviewer re-read the last repairs. The faceoffs rule ladder moved from the body to facts :157. The commit gate re-derived every limb of that line from primary text at its staged content. Each is confined to its finding, follows the reviewer's sketch, and was checked against the source by its agent. This is the terminating case.

## Rows

- **Closed:**
  - W518(6), (7)
  - W520(2), (3), (5), (6)
- **New, From W521:**
  1. mental_game §13's warning signs have no citation.
  2. defender's "plan on a match" sits between USA Hockey 607(e) (discretionary) and 602(a) (mandatory).
  3. Going-in limbs no layer carries yet:
     - not going to the bench when told;
     - a goalie leaving the crease;
     - the SIHA and NIHL Rules of Competition;
     - Sources trailers that do not name the new citations.
  4. "Can end your game" where some books make it mandatory. Left on purpose, because each site leads with "stay out".
  5. A phone-width check of the two rebuilt diagrams.

## Gates on the final tree

- `check_counts --update`: no change.
- These exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check_zones`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary exits 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 7 files, 0 lost, 0 split halves.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. Every going-in limb was checked against USA Hockey, Hockey Canada, CARHA, the NHL, the IIHF 2026/27, the PWHL and the EIHL Casebook, by three agents. |
| D2 exceptions | Covered: Interpretation 6; the NHL/PWHL match-penalty exception; the 46.14 waiver; USA Hockey's Glossary scope for "altercation". |
| D3 cross-book divergence | Covered: mandatory against discretionary, first-only against any player. |
| D4/D5 citations | Covered. Hockey Canada 6.3(d)(vi) was located in `hc.txt`. The special_teams Sources trailer was extended. Other trailers are filed under W521(3). |
| D6 negative existence | Covered: neither 607 nor 7.4 has a division clause; the In-House Rules make no Rule 46 or 70 amendment. |
| D7 cardinal rule | Covered, for the high-triangle read, which is coaching craft taken from the section's own logic rather than presented as law. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: the claim was checked in every layer of each edited document, including Key Takeaway 1 and the Common Mistakes bullets. |
| D10 facts layer | Covered: three new or changed `Rule:` lines, all within cap. |
| D11 reader safety | Covered: graded by two safety-reviewers. |
| D12 read-aloud integrity | Partly covered. mental_game, defender and faceoffs were rendered by the first safety-reviewer; the rest were judged by reading, and each qualifier is in the same sentence as its claim. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: `check_links`, the readability trim. |
| D15 rendered site | Diagram PNGs were viewed by agent C and the diagram-reviewer. The prose check is structural only. Chrome is not connected, so 400 px is filed as W521(5). |

## What this method could not have found

- **Going in described in words no sweep used**, such as "go and get him" or "make them pay".
- **Whether a scrum counts as an altercation** in any book but USA Hockey.
- **What Johnston & Walter actually teach as the high-triangle cue.** The book is not on disk.
- **The mental-health signs against a clinical source.** They were checked only against §13.
- **Reviewer transcripts.** They are not on disk; this record summarises them.

# Census: "a reckless / forceful / violent / light / deliberate / careless one" antecedents (20 November 2026)

**What this is.** A read-only census run during W516 for plan row W514(5). It is the worklist for the next waves; no content was changed by it. Line numbers are as of commit b7ed4f01 plus the W516 working tree. **They will drift, so re-locate each site by its text.**

## The defect

A listener hears "one" as the nearest preceding count noun. W514 and W515 fixed nine "one meant to injure" sites where that noun was a penalty ("a minor"), a person, or "careless contact" rather than the act. The same shape recurs with other adjectives.

**The sweep:** `grep -rniE '\b(a|an) (reckless|forceful|violent|highly violent|light|deliberate|careless) one\b' content` matched 199 lines and 229 matches in 31 files.

**Results:**

| Class | Count | What it means |
|---|---|---|
| DEFECT | 106 | "one" lands on the wrong noun |
| DEPENDENT | 13 | later items in a chain whose first item is a defect; fixed when the lead is fixed |
| UNSURE | 27 | a reasonable reader probably resolves it; four are in unvoiced Sources trailers |
| OK | 83 | "one" lands on the act |

## The test

A match is a **DEFECT** if any of these holds:
- the act appears only as "it", or as a gerund or mass noun ("charging", "boarding", "checking from behind", "contact", "over it");
- the sentence opens "A … one" right after a sentence whose predicate is a penalty;
- the nearest "a/an" noun is a penalty, a person, "careless contact", or a word that "one" has just been used to mean ("give one" = a match).

A match is **OK** if the act is the nearest noun or is in the same clause, or the chain's first item names the act.

A subset of OK, called **OK-P** ("X is a minor, and a reckless one a major", where X is the act), is listed at the end. It is the shape W515 tightened once.

## Recurring shapes (one wording decision each)

| Shape | Wording | Where "one" lands | Fix |
|---|---|---|---|
| F1 | "USA Hockey must/does for a reckless one with excessive force…", after a match-for-a-hit clause or after "make it one" | the player, or the match | "a reckless hit" |
| F2 | "No book caps charging at a minor: a reckless one…" | "a minor" | "a reckless charge" |
| F3 | over-the-glass sentences ("over it", "lifting it out"), where "a deliberate one" follows | "a minor", "a 5-on-3" or "a line change" | "a deliberate clear over the glass", or "doing it deliberately" |
| F4 | "Under USA Hockey even a light one…", after a head-contact or match sentence | — | "even a light hit from behind"; this also fixes the chain after it |
| F5 | "…starts at a minor and a misconduct. A forceful one on a player/goalie…" | — | "A forceful hit from behind on…" |
| F6 | "Under USA Hockey, plan on a match for a reckless one." | — | DEFECT when the act is not named in the sentence before; UNSURE when it is |

## DEFECT and UNSURE sites by file

Suggested nouns were **not** checked against the rule text. The agent that edits each file must confirm the act behind each rule (for example 639(b), 640(g), 623/634, 610(d)). Changing a count noun to a mass noun (for example "reckless boarding") can move a later pronoun.

### foundation

- **language_and_glossary:**
  - :434 DEFECT. Use "a reckless shove".
  - :546 UNSURE (F6). Use "a reckless charge".
- **on_ice_communication:**
  - :545 DEFECT. It opens a chunk, so there is no antecedent at all. Use "A puck put out deliberately". The same paragraph's "610(c) reaches only a *deliberate* one" needs the same fix.
- **rules_primer:**
  - :31 UNSURE. Use "a careless head hit".
  - :206 DEFECT. Use "A highly violent head hit".
  - :489 DEFECT. A sub-bullet voiced alone. Use "a reckless hit from behind".
  - :670 UNSURE. Puck over the glass.
  - :1229 UNSURE. Head hit.
- **uk_rules:**
  - :146 DEFECT. Use "a reckless high stick".

### hockey-iq

- **playing_without_the_puck:**
  - :356 DEFECT (facts; F3). Use "a deliberate clear".
  - :359 DEFECT (facts; F3).
  - :379 DEFECT. It opens chunk 022 (F3).
  - :535 DEFECT. Use "a reckless pick".
  - :620 DEFECT (facts). Heard as "eject a reckless [player]". Use "may eject you for a reckless charge".
  - :725 DEFECT (facts; F2).
  - :849 DEFECT (F4).
  - :1048 DEFECT. Use "pick" in both places, including the unswept "a violent, reckless or injuring one".
  - :1052 DEFECT (F1).
- **puck_support_and_spacing:**
  - :353 DEFECT (F1). "one" has already meant "a match" twice in the sentence.
- **risk_management:**
  - :345 DEFECT (F3).
  - :356 UNSURE (facts).
  - :391 DEFECT. Lands on "a line change". Use "A deliberate clear".
  - :907 DEFECT. Use "a reckless slew-foot".
  - :915 DEFECT (second match; F1).
  - :1002 UNSURE (unvoiced Sources trailer).
- **scanning_and_anticipation:**
  - :373 DEFECT. Use "a reckless charge".
- **time_and_space:**
  - :565 DEFECT. Use "a reckless charge".

### off-the-ice

- **conditioning_and_recovery:**
  - :608 DEFECT, two matches. Use "A reckless check" and "a violent check".
- **team_play_and_culture:**
  - :560 UNSURE. Use "a violent bump or push".

### positions

- **center:**
  - :759 DEFECT (first match; F2).
  - :759 UNSURE (second match; F6).
  - :789 DEFECT (F5). Use "a forceful hit from behind on a goalie"; its chain is DEPENDENT.
  - :803 DEFECT. Use "a violent clash".
  - :921 DEFECT. Use "a reckless charge".
- **defender:**
  - :50, :96, :750, :1031 DEFECT (F3).
  - :411, :495 DEFECT (facts; F2).
  - :460 DEFECT. Use "reckless boarding".
  - :943, :948, :964 DEFECT. Use "reckless boarding" at :943 and :948, and "a reckless charge" at :964.
  - :741 UNSURE (facts).
  - :816 UNSURE (facts). Use "a reckless trip".
- **goaltender:**
  - :730 DEFECT. Use "a deliberate clear".
  - :1635 DEFECT. Use "a reckless hit from behind".
  - :1704 UNSURE. Use "a reckless slash".
- **switching_positions:**
  - :257 DEFECT. Use "reckless boarding".
  - :610 DEFECT. Use "a reckless hit from behind".
- **winger:**
  - :529 UNSURE. Use "a reckless cross-check".
  - :531 DEFECT. Lands on "careless contact". Use "A reckless hit".
  - :907 DEFECT, two matches (F4 / "a reckless hit from behind").
  - :914 DEFECT. Use "a reckless cross-check".
  - :1023 UNSURE (unvoiced Sources trailer).

### reading-diagrams

- **reading_ice_hockey_diagrams:**
  - :306 OK (Sources trailer, parallel).

### systems

- **breakouts:**
  - :863 and :876 DEFECT (F3; :863 is a facts line).
  - :1122 UNSURE, two matches (facts). Use "a reckless slide" and "a careless slide".
- **defending_the_rush:**
  - :254, :421 DEFECT. Use "a reckless body finish".
  - :554 DEFECT (second match). Use "a reckless slide".
  - :1112 DEFECT. Use "a reckless hit from behind".
  - :412, :956 UNSURE (F6).
- **defensive_zone_coverage:**
  - :180, :488, :751 DEFECT (F1).
  - :780 DEFECT. Use "a reckless cross-check".
  - :817 DEFECT. Use "a violent high stick".
- **faceoffs:**
  - :271 DEFECT (facts). Use "violent interference", or "if violent".
  - :279, :1326, :1193 DEFECT (the same interference shape).
  - :158 UNSURE (facts).
  - :1240 UNSURE.
  - :1316 UNSURE.
- **forechecking_systems:**
  - :222, :337, :762, :969 DEFECT (F1).
  - :249, :261, :999 DEFECT (F2).
  - :626 DEFECT. Use "if it is reckless and uses".
  - :628 DEFECT. A sentence alone. Use "A reckless check on an engaged player".
  - :1109 DEFECT. Use "a reckless check".
- **game_management:**
  - :137, :1170 DEFECT (F3).
  - :653 DEFECT. Use "knocking it off deliberately".
  - :1182 (second match), :1290 DEFECT (F1).
- **neutral_zone_systems:**
  - :361 DEFECT (facts). Use "a charge that injures …, as is a reckless charge".
- **offensive_zone_play:**
  - :1011 DEFECT (F5); its second match is DEPENDENT.
  - :1251 DEFECT (F5).
  - :1015, :1247 DEFECT. Use "a reckless check".
  - :1185 DEFECT (F4).
  - :1214 DEFECT. Use "a reckless check".
  - :1222 DEFECT. Use "A reckless late hit".
- **special_teams:**
  - :47 DEFECT (F3).
  - :666 DEFECT (F4).
  - :825 DEFECT (second match; F1).
  - :1122 DEFECT. Use "a forceful hit from behind"; its chain is DEPENDENT.
  - :1130 DEFECT (F5); its chain is DEPENDENT.
  - :1138 DEFECT. Lands on "a 5-on-3".
  - :1151 DEFECT. Lands on "the zone minor".
  - :1265 DEFECT. Use "a reckless charge or check".
  - :1346 UNSURE (unvoiced Sources trailer).
- **zone_entries:**
  - :255, :864, :1202 DEFECT (F4). The chains at :255 and :864 are DEPENDENT.
  - :825 DEFECT; its chain is DEPENDENT.
  - :1204 DEFECT, two matches.

### technique

- **body_contact_and_battles:**
  - :410 DEFECT. Use "a reckless hook or slash".
  - :1751 DEFECT. Use "a reckless butt-end".
  - :2072 DEFECT. Use "reckless boarding".
  - :2081 DEFECT. Use "a reckless high stick".
  - :2106 DEFECT. Use "a reckless head-butt".
  - :598 UNSURE (facts).
  - :713, :793 UNSURE. Use "for reckless head contact".
  - :1876 UNSURE (facts).
  - :2085 UNSURE. Use "a reckless shove".
- **puck_handling:**
  - :485 DEFECT. Use "a violent bump or push".
  - :1078 UNSURE. Use "a reckless can-opener".
- **shooting:**
  - :269 DEFECT. Use "a reckless high stick".
  - :307 DEFECT. Use "A reckless charge".
  - :953 DEFECT. Use "a reckless hit from behind".

## OK-P lines (stricter worklist, optional)

| Area | Sites |
|---|---|
| foundation | on_ice_communication :613; rules_primer :1186 |
| hockey-iq | playing_without_the_puck :825, :1033; time_and_space :664 |
| off-the-ice | team_play_and_culture :564 |
| positions | center :390, :397, :536, :745, :787, :876, :909; defender :857; winger :873 |
| systems | breakouts :127, :1163; forechecking_systems :287, :614, :1065; game_management :1258; zone_entries :266, :1181, :1182, :1200, :1208 |
| technique | body_contact_and_battles :766 (two matches) |

## What this census could not have found

- **Adjectives outside the sweep.** "accidental one" (35 matches), "intentional", "moderate", "high", "mandatory", "injuring", "head-first" and "late".
- **Emphasised adjectives.** `a *deliberate* one`, at on_ice_communication :545, playing_without_the_puck :1046 and :1115, risk_management :932, and defensive_zone_coverage :841–842.
- **Other "one" forms.** Bare "one that injures", "or one meant to…", and comma-listed "a violent, reckless or injuring one".
- **Chunk boundaries.** These were rendered for only seven documents. Elsewhere adjacency was judged from source.
- **How listeners actually hear it.** The classification is a judgement about listeners, calibrated on nine W514/W515 fixes.

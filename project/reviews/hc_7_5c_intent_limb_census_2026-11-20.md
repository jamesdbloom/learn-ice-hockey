# Census: Hockey Canada 7.5(c)'s deliberate-injury match across the corpus (20 November 2026)

**What this is.** A read-only census run during W511. It is the worklist for plan row W511(1). No content was changed by it. Line numbers are as of commit 1355dea4 plus W511's working tree, and **they will drift**. Re-locate each site by its text before editing.

## The claim

Hockey Canada 7.5(c) (`sources/hc.txt` :6126–6191) has **two** match limbs:

1. a hit into the boards or goal frame on a player unable to protect or defend themselves;
2. :6183–6184: "A Match penalty will be assessed to any player who deliberately attempts to or deliberately injures an opponent by checking them from behind". It has no boards condition.

The head-contact rules have the same shape: 7.6(c) (:6274–6277) and 7.7(c) (:6333–6335) each carry an "attempts to / deliberately injures" limb as well as the "cannot protect themselves" limb.

W510 found game_management.md carrying only limb (1). Heard alone, that layer said a deliberate open-ice hit from behind tops out at a major and game misconduct. The census found the same shape across about 20 documents.

## How units were classed

| Class | Meaning |
|---|---|
| **GAP** | A floor, ejection or ladder whose only Hockey Canada match route is limb (1) and/or the head, with no limb (2). |
| **GAP-head** | A 7.6(c)/7.7(c) head match cut to "if they cannot protect themselves", dropping the intent limb. |
| **nbr** | A body paragraph in the same subsection carries limb (2). A facts line is voiced alone, so a neighbour never cures it. |
| **OK** | The unit carries limb (2), or another covering statement: "every book but the IIHF … meant to injure", or 8.5(c) for a goalie. |
| **OK-L1** | A standalone limb-(1) conditional with no floor or ladder. Not a ceiling. |

**Judgement call.** The census treats "ends your game … + boards match" as an implied ceiling, following W510's framing. A reviewer who reads "ends your game" as a floor would downgrade many GAP rows to OK-L1.

## Patterns

1. **No Key Takeaway and no Key focus states a Hockey Canada ceiling.** The exposure is in facts lines (voiced alone), Common Mistakes and the body.
2. **The commonest GAP is a near-identical two-sentence shape** in about 12 systems and positions files:
   - "ends your game under … Hockey Canada unless it reaches the head";
   - then "Into the boards or goal frame on a player who cannot protect themselves, Hockey Canada and CARHA must make it a match."
3. **Goalie variant.** "Plan on the dearer of 7.5 and 8.5…" names no off-head match. 8.5(c) (attempt to injure a goaltender) is named only at body_contact_and_battles :1361.
4. **GAP-head** recurs wherever 7.6(c)/7.7(c) is cut to "cannot protect".
5. **The owner, body_contact_and_battles, is not clean.**
   - **Correct:** body :787/:789/:1391 and facts :764.
   - **Facts :765** credits "meant to injure" to the NHL/PWHL only.
   - **Facts :1412** and **Common Mistakes :2087** carry limb (1) only.

## GAP sites (unmitigated unless marked nbr)

| Document | GAP | GAP-head | GAP, nbr only |
|---|---|---|---|
| body_contact_and_battles | facts :765, :1412; CM :2087 | :1412 | — |
| language_and_glossary | glossary :294; CM :513–515 | :296 | — |
| on_ice_communication | facts :593; body :606 | — | — |
| rules_primer | CM :1177 | — | — |
| playing_without_the_puck | facts :824 | :1020, :1051 | — |
| puck_support_and_spacing | facts :343; body :352, :627 | — | — |
| risk_management | facts :762, :846; body :771, :861 | :846 | :917 |
| center | body :707, :791 (goalie), :894; CM :911, :922 | facts :886 | — |
| defender | body :462; CM :1021 | — | :299, :840, :954 |
| goaltender | facts :1374; body :1387; CM :1710 | — | — |
| switching_positions | facts :244; body :270; CM :610 | :270, :274 | :272 (no L2 in subsection) |
| winger | body :531, :722; facts :708; CM :907, :913 (goalie), :915 | — | :863, :875 |
| defending_the_rush | body :337, :458; CM :1116 | facts :411, :639; CM :1100 | :404/:406, :653, :952/:954 |
| defensive_zone_coverage | body :180, :488; CM :860 | — | :753 |
| faceoffs | body :588, :1215; facts :1206; CM :1314 | — | — |
| forechecking_systems | body :337, :762, :809 (goalie) | — | — |
| offensive_zone_play | body :840, :1011; facts :967; CM :1249 | — | :1185, :1194 |
| special_teams | facts :659, :1115, :1116 (goalie); CM :1243 | facts :662; CM :1274 | :1110, :1126, :1128, :1134 |
| zone_entries | facts :239, :845; body :255/:257, :864/:866, :1168/:1170; CM :1202/:1204 | (paired) | — |
| passing_and_receiving | body :223 (also drops "into the boards or goal frame") | — | — |
| shooting | facts :288, :509, :511 (goalie); body :541/:543 (goalie), :920 | body :537; CM :953 | — |
| game_management | repaired in W510. Its :1233 "a match either way" is limb-(1)-only; :1229 carries limb (2) in the same subsection. | — | — |

**Fourteen documents carry no Hockey Canada from-behind price:**
- how_to_watch_hockey, mental_game, team_play_and_culture, getting_started, core_principles;
- uk_rules, skating, puck_handling, breakouts, neutral_zone_systems;
- scanning_and_anticipation, time_and_space, rink_map, equipment.

## What this census could not have found

- **Chunk distance.** "nbr" means the same subsection and the same paragraph run. It was not measured as a chunk distance; no render was run.
- **Units priced only by pronoun.** The sweep needed "Hockey Canada"/"7.5" plus a penalty word in one unit, so a unit priced only by pronoun with no book name was missed. A second sweep recovered 12 such units; others may remain.
- **Unvoiced sections.** "Notes on verification" sections and Sources trailers were excluded.
- **Other Hockey Canada text.** Appendix D and 4.10 were not read.

# W390 census evidence: Hockey Canada high cross-check stated without "deliberate" (17 November 2026)

This page records one test from the read-only W390 census of hit-from-behind units. That census was run by a rules-verifier. The full working output stayed in a session scratchpad and is not reproducible. The site list below is copied here so that the plan row (From W391 (5)) has a durable owner.

## The rule
- **HC 7.6(b)¶3, minor and female hockey** (hc.txt ~:6272). A cross-check above the normal height of the shoulders is a major plus game misconduct, "whether or not injury results".
- **7.6(b) Interpretation 2** (hc.txt ~:6296–6302). The rule "is intended to penalize players who make a deliberate cross-checking action". It is not intended for minimal, accidental contact.
- **7.7(b) (Junior/Senior)** has no "deliberate" interpretation.
- **9.2(b) Interpretation 2** (hc.txt ~:7258–7261) is flat: "must be assessed to any player who strikes an opponent with a cross-check above the normal height of the shoulders. Please refer to Rule 7.6".

**Direction.** A site that states the minor/female tier as mandatory without "deliberate" errs harsher. It does not err permissive. 9.2(b) Interpretation 2 is a counterweight. The least-tested question is whether a site's surrounding sentence scopes it to Junior/Senior.

## Candidate sites
These came from a regex sweep with about 250 characters of context each. They were **not** each read in full.

| File | Lines |
|---|---|
| rules_primer | :31, :206, :433, :1156, :1208 |
| defender | :289, :302, :325 |
| goaltender | :1620 |
| winger | :558, :584, :798, :822, :862 |
| defensive_zone_coverage | :539, :542 |
| forechecking_systems | :987 |
| special_teams | :1105, :1121, :1123, :1269 |
| body_contact_and_battles | :764, :2076 |
| puck_handling | :533 |
| shooting | :534 |
| language_and_glossary | :428, :540 |
| on_ice_communication | :612 |

## Correct as written: Junior/Senior only
| File | Line |
|---|---|
| goaltender | :1373 |
| forechecking_systems | :989 |
| passing_and_receiving | :442 |

## Already carry "deliberate"
| File | Lines |
|---|---|
| rules_primer | :1144, :1214 |
| winger | :869 |
| offensive_zone_play | :1180 |
| body_contact_and_battles | :700, :717 |
| goaltender | :1639 |
| passing_and_receiving | :439, :474 |
| defensive_zone_coverage | :755 |

## Line numbers
Line numbers are as at commit cfc3080b and drift. Find each site by its text.

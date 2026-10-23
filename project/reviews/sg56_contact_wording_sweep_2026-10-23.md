# SG56: contact wording swept across the remaining pages, and the wall-posture captions (23 October 2026)

## What changed

- **Sweep.** Three agents read every seal, ride, pin and lean hit on 31 pages, plus the turn-back wordings ("open up to the middle", "roll off", "peel off", "swing away") and three named captions. Almost every hit was clean: it was an opponent sealing you, pin the puck, positional sealing, or already scoped.
- **center.md :17 (Key focus).** "so your winger knows where to seal" was a bare "seal" with no object, voiced alone. It now reads "knows where to pin the puck". This is the same defect SG44 fixed on forechecking and offensive_zone_play.
- **body_contact_and_battles.md :1500.** "escape along the boards or spin out to the middle" had no spin gate; puck_handling :441's SG48 fix never reached this sibling sentence. It now reads "or, off a checker already leaning on them, spin out to the middle".
- **Wall-posture captions.** Six captions still said "forearm and hip into the contact", the wording SG45 removed from winger.md. A listener could hear it as raising the forearm toward the checker, which USA Hockey bars. They now read "forearm and hip to the wall / to it":
  - positions.mjs winger-dz-reverse (also "hip and backside into the checker" → "toward the checker", matching winger.md :127) and winger-dz-rim;
  - offensive_zone_play.mjs oz-cycle-rim and oz-cycle-reverse;
  - puck_support_and_spacing.mjs;
  - winger.mjs :633 (split across two string literals, so the first grep missed it; edited by the coordinator).

  Diagrams were rebuilt and site/src/data/diagrams.json regenerated. No built caption now carries "forearm and hip into the contact".

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, with renders of 8 documents | All 8 edits UPHELD and CLEAR. Each changed sentence was read voiced in the SSML. The wall posture is complete in every caption: never turn your back, never duck, head up, chin off the chest, and the shoulder tail. No hip permission remains. It also found, outside this diff, a **major** on playing_without_the_puck ("body on the man, in that order" lacks the late-hit limit; USAH 640(b)) and a **minor** on goaltender :1383 and KT12 ("send it toward the corner"). Both are dispatched as the next wave. Defender's "take it toward the corner" sites were judged fine, because the no-push limit comes first. |
| Rules (C4) | not dispatched | No rule claim was added or changed. The spin gate and the wall posture are the settled SG45/SG48 wording, and the reviewer quoted USAH :417, 640(b), HC 7.3(a) and CARHA 49(a) to judge them. |
| Mechanical | coordinator | build-diagrams exited 0 (204 diagrams). A full npm build exited 0 after the last edit. check_facts, check_absolutes (408 caption units), check_geometry, check_secrets, check_counts and check_links all exit 0. check_marker_pairs on 2 files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | No claim changed; settled wording |
| D4–D8, D13 | Out of scope |
| D9 summary layer | center Key focus is the edit; body_contact has no facts line on spin (checked) |
| D10 facts | No facts line changed |
| D11 safety | safety-reviewer |
| D12 read-aloud | Rendered by the safety-reviewer |
| D14, D15 | check_links; build-diagrams and npm build |

## What this method could not have found

- Contact cues outside the searched vocabulary ("finish", "use your size", "tie them up").
- Caption hosts other than the five rendered documents.
- Whether "forearm and hip to the wall" can be reached at speed.

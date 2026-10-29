# SG134a: Hockey Canada 9.5(b) scope on Defensive Zone Coverage; one next-game statement on Team Play (29 October 2026)

**Files:** content/systems/defensive_zone_coverage.md, content/off-the-ice/team_play_and_culture.md, project/plans/OPEN_ITEMS.md

## What changed
- **dzc :704 ("The swing" bullet).** The Hockey Canada parenthetical "(7.6(b), 7.7(b), via 9.5(b))" routed the price through 9.5(b), which is Junior/Senior only (hc.txt). The routing now covers both levels: minor and female hockey route through 6.9(c). Carried from SG111.
- **team_play_and_culture.** Applies the owner's once-per-page ruling (USA Hockey 404(b), 21 Oct; CARHA 32(d), 28 Oct; memory project_usah_404b_ruling.md).
  - :278, the first place the page prices an ejection, now carries the page's one statement: "Any ejection can cost the next game too. Under USA Hockey, any game misconduct also suspends you for your team's next game, and a second major in the same game at least two (404(b)). In a CARHA league, a major's game misconduct costs at least your next game, possibly more, unless it was for an accidental high stick (32(d))."
  - The handshake-only "below" scoping is removed.
  - The per-line repeat at :485 is removed; its ⚠️ is kept.
  - Every other limb is unchanged (615(c), 602(a), 629(a)/403(a), NHL 70.10, EIHL).
  - Carried from SG129.

## Reviews
| File | rules-verifier | safety-reviewer |
|---|---|---|
| dzc | CONFIRMED; one site changed (:704) | SHIP: nothing cheaper, nothing missing |
| team_play | Both sites CONFIRMED (usah.txt 404(b) :2533–2539; carha_2026.txt 32(d) :1449–1452) | SHIP. The statement is voiced whole in chunk 013, ahead of the handshake list. 0 LOST. |

### C11
One coordinator edit, on the commit gate's note and in the sibling pages' wording (on_ice_communication :299, risk_management :299): team_play :278 "also costs your team's next game" became "also suspends you for your team's next game". The claim is unchanged; it removes a reading that the team forfeits the game.

## Dimensions (per review_process.md:220-234)
D1–D3: rules-verifier on each file. D7, D9–D12: safety-reviewer on each file; both pages rendered. D13: none. D14: check_links passes; paragraphs under 1,200 characters. Declared out of scope by the coordinator: D4 and D5 (no URL or non-rulebook quotation changed), D6 (no absence claim), D8 (no owned number) and D15 (no structure changed; full site build run).

## What this method could not have found
- Other pages routing Hockey Canada head contact "via 9.5(b)" without the scope.
- Next-game wordings outside the swept set on team_play.

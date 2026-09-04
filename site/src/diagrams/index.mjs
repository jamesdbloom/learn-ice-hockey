/**
 * The diagram registry.
 *
 * One file per content document, so a diagram sits next to its siblings and the
 * `owner` field is checkable by eye. Every spec must declare:
 *
 *   id        stable, kebab-case; it is the URL and the markdown reference, so
 *             renaming one is a content change and needs the same care as any other
 *   owner     the content document whose prose this diagram must agree with.
 *             `diagram-reviewer`'s first pass is "does it agree with its section",
 *             and this is the field that says which section that is.
 *   caption   the teaching sentence. This is what a listener hears and what a
 *             screen reader announces — it is not a title, and it must carry the
 *             section's hedges, because a picture is the most absolute-looking
 *             thing on a page.
 *   describe  the long walk-through, for <desc>.
 *
 * Nothing here may state a position the corpus does not. Coordinates come from
 * named positions in src/data/rink.json; where a spec needs a point the vocabulary
 * has no name for, it says so as an offset in feet from a named one, never as a
 * bare number.
 */

import notation from './notation.mjs';
import rulesprimer from './rules_primer.mjs';
import bodycontactandbattles from './body_contact_and_battles.mjs';
import breakouts from './breakouts.mjs';
import defendingtherush from './defending_the_rush.mjs';
import defensivezonecoverage from './defensive_zone_coverage.mjs';
import faceoffs from './faceoffs.mjs';
import forecheckingsystems from './forechecking_systems.mjs';
import gamemanagement from './game_management.mjs';
import goaltender from './goaltender.mjs';
import neutralzonesystems from './neutral_zone_systems.mjs';
import offensivezoneplay from './offensive_zone_play.mjs';
import onicecommunication from './on_ice_communication.mjs';
import passingandreceiving from './passing_and_receiving.mjs';
import playingwithoutthepuck from './playing_without_the_puck.mjs';
import positions from './positions.mjs';
import practiceanddevelopment from './practice_and_development.mjs';
import pucksupportandspacing from './puck_support_and_spacing.mjs';
import rinkmapandglossary from './rink_map_and_glossary.mjs';
import riskmanagement from './risk_management.mjs';
import scanningandanticipation from './scanning_and_anticipation.mjs';
import shooting from './shooting.mjs';
import specialteams from './special_teams.mjs';
import switchingpositions from './switching_positions.mjs';
import timeandspace from './time_and_space.mjs';
import zoneentries from './zone_entries.mjs';

export const DIAGRAMS = [
  ...notation,
  ...rulesprimer,
  ...bodycontactandbattles,
  ...breakouts,
  ...defendingtherush,
  ...defensivezonecoverage,
  ...faceoffs,
  ...forecheckingsystems,
  ...gamemanagement,
  ...goaltender,
  ...neutralzonesystems,
  ...offensivezoneplay,
  ...onicecommunication,
  ...passingandreceiving,
  ...playingwithoutthepuck,
  ...positions,
  ...practiceanddevelopment,
  ...pucksupportandspacing,
  ...rinkmapandglossary,
  ...riskmanagement,
  ...scanningandanticipation,
  ...shooting,
  ...specialteams,
  ...switchingpositions,
  ...timeandspace,
  ...zoneentries,
];

/** Ids in use, for the checker that asserts content references resolve. */
export const IDS = new Set(DIAGRAMS.map((d) => d.id));

/**
 * The notation key, as a registered diagram.
 *
 * It is rendered by `legendSvg`, which reads the same NOTATION table `playSvg`
 * draws from — so the picture explaining the symbols cannot disagree with the
 * symbols. That was the whole reason for removing the per-diagram legend: a key
 * maintained separately from its renderer is a second place for the notation to
 * be wrong, and this corpus has already had to rewrite its notation once wholesale.
 */
export default [{
  id: 'notation-key',
  kind: 'legend',
  owner: 'content/foundation/rink_map_and_glossary.md',
  width: 900,
  caption:
    'The drill notation used by every diagram here. Lines: a plain arrow is ' +
    'forward skating; a long smooth wave is skating with control of the puck; a dashed ' +
    'arrow is a pass; a double line is a shot; a tight wave is backward skating; a row ' +
    'of short bars across a line is lateral crossovers; a line ending in two bars is ' +
    'stopping; a line ending in one bar is checking pressure. Players: a circle is your ' +
    'own team, a triangle is the opposition, and an X is a pylon and never a player. ' +
    'The letters inside a glyph are the roles the surrounding text uses, not fixed positions.',
  describe:
    'A two-column key. The left column shows eight line styles with their names. ' +
    'Beneath them, a filled circle marks your own team, an open triangle the opposition, ' +
    'and an X a pylon.',
}];

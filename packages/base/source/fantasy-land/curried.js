//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------


/*~
 * stability: experimental
 * name: module folktale/fantasy-land/curried
 */
module.exports = {
  apply: require('./apply').curried,
  bimap: require('./bimap').curried,
  chain: require('./chain').curried,
  concat: require('./concat').curried,
  empty: require('./empty').curried,
  equals: require('./equals').curried,
  map: require('./map').curried,
  of: require('./of').curried
};

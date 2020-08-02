'use strict';

module.exports = (older, newer) => {
  // if versions match, newer is not newer than older
  if (older === newer) return false;
  // helper to format the string inputs into arrays of integers
  const split = (arr) => arr.split(`.`).map((current) => parseInt(current));
  older = split(older);
  newer = split(newer);
  // loop through the inputs with a dual pointer, one on each
  for (let i = 0; i < older.length; ++i) {
    // if at any time the newer is higher, we know it is generally newer, return true
    if (newer[i] > older[i]) return true;
    // likewise if the older is larger, we know it to be false
    if (older[i] > newer[i]) return false;
    // the only way the loop continues is if the version number is the same
    // the first statement eliminates the possibility of an exact match at this point, the loop will never complete
  }
};

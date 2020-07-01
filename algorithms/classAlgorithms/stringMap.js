'use strict';

module.exports = (str) => {
  // create an empty object to store the map
  const indexMap = {};
  // loop through the string
  for (let i = 0; i < str.length; ++i) {
    // if a property does not already exist for the key of the current letter
    if (!indexMap[str[i]]) {
      // create it, set it to an array containing the current index number
      indexMap[str[i]] = [i];
      // if it already exists
    } else {
      // push the current index into the property's array
      indexMap[str[i]].push(i);
    }
  }
  // return the object
  return indexMap;
};

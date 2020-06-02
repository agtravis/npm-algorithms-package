'use strict';

module.exports = (lst) => {
  // return a mapped index of the list input
  return lst.map((current, index) => {
    // for each index establish a count
    let count = 0;
    // loop through the rest of the array (nothing to the left of the index iterated on)
    for (let i = index; i < lst.length; ++i) {
      // if the value of the number being looped on is less than the number currently being mapped
      if (lst[i] < current) {
        // increment
        ++count;
      }
    }
    // return that count to the map
    return count;
  });
};

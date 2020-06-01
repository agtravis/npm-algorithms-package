'use strict';

module.exports = (nums) => {
  // establish a new hashmap
  const visited = new Map();
  // loop through input nums
  for (const num of nums) {
    // if we already have this number in our map
    if (visited.has(num)) {
      // we hit the duplicate and can return
      return num;
      // otherwise
    } else {
      // store in the map the num
      visited.set(num);
    }
  }
};

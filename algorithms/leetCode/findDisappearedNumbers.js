'use strict';

module.exports = (nums) => {
  // establish a map
  const map = new Map();
  // first loop sets all properties to the index and values to missing
  for (let i = 0; i < nums.length; ++i) {
    map.set(i + 1, `missing`);
  }
  // second resets any properties that are found to have new values
  // we don't care about counting duplicates
  for (let i = 0; i < nums.length; ++i) {
    map.set(nums[i], `found`);
  }
  // array for output
  const output = [];
  // loop through the map
  map.forEach((value, key) => {
    // if the value is still the original value
    if (value === `missing`) {
      // push the key (the number) to the output
      output.push(key);
    }
  });
  return output;
};

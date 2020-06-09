'use strict';

module.exports = (n) => {
  // array containing day names
  const days = [
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
    `Sunday`,
  ];
  // create a Map
  const dayMap = new Map();
  // loop through the days array
  for (let i = 0; i < days.length; ++i) {
    // set the days to the index number
    dayMap.set(i, days[i]);
  }
  // the day is retrieved by subtracting 1 from the input and using the result as a key
  return dayMap.get(n - 1);
};

'use strict';

module.exports = (intervals, time) => {
  // helper function to establish if the time exists between the start and finish time of the sub array
  const atWork = (arr, time) => arr[0] <= time && arr[1] >= time;
  // return the input 2d array reduced
  return intervals.reduce(
    // if it passes the helper function test, increment, otherwise keep it the same
    (total, current) => (atWork(current, time) ? ++total : total),
    // establish the count at zero
    0
  );
};

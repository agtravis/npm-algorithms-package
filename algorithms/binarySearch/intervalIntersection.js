'use strict';

module.exports = (intervals) => {
  // establish two tracking variables to track the latest start and the earliest finish
  // initialize with the first subArray element in the array
  let start = intervals[0][0];
  let end = intervals[0][1];
  // loop, starting with the second index
  for (let i = 1; i < intervals.length; ++i) {
    // with each iteration, compare and reassign if necessary
    start = Math.max(intervals[i][0], start);
    end = Math.min(intervals[i][1], end);
  }
  // return in the format required
  return [start, end];
};

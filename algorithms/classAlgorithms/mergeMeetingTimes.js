'use strict';

// module.exports

const mergeMeetingTimes = (arr) => {
  // first sort the input array to ensure that they are organized by order of start times
  arr.sort((a, b) => a[0] - b[0]);
  // initialize the output result to be the first meeting
  const result = [arr[0]];
  // loop through the meetings array
  for (let i = 0; i < arr.length; ++i) {
    // set the last meeting to be the most recent pushed to the array (or the initialization if first)
    const lastMeeting = result[result.length - 1];
    // set the current or next meeting to be the iterated sub-array
    const currentMeeting = arr[i];
    // if the end of the last meeting is greater than or equal to the start of the next meeting i.e. there is crossover
    if (lastMeeting[1] >= currentMeeting[0]) {
      // and the end of the last meeting is less than the end of the next meeting, i.e. it doesn't over extend the current one
      if (lastMeeting[1] < currentMeeting[1]) {
        // update the ending to be the extended ending time
        lastMeeting[1] = currentMeeting[1];
      }
      // otherwise, if the the end of the last meeting happens before the next meeting starts, i.e. there is no crossover
    } else {
      // send the current meeting as is to the output array
      result.push(currentMeeting);
    }
  }
  // return the output
  return result;
};

console.log(
  mergeMeetingTimes([
    [5, 8],
    [1, 4],
    [6, 8],
  ])
); // === [[1, 4], [5, 8]]
console.log(
  mergeMeetingTimes([
    [1, 10],
    [2, 5],
    [6, 8],
    [9, 10],
    [10, 12],
  ])
); // === [[1, 12]]

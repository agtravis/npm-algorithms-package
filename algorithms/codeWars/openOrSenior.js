'use strict';

module.exports = (data) => {
  // map through the array and for each person
  return data.map((person) => {
    // if the first index in the subarray is less than or equal to 55
    // and the second index in the subarray is greater than 7
    // return 'senior' to the map
    // otherwise return 'open'
    return person[0] >= 55 && person[1] > 7 ? 'Senior' : 'Open';
  });
};

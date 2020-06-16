'use strict';

module.exports = {
  evenStevens: (nums) => {
    // establish an output array
    const output = [];
    // this variable will remember the index at which we are going to switch
    let holdIndex;
    // a boolean to determine whether we are on our first or second even integer
    let isHolding = false;
    // loop through the input
    for (let i = 0; i < nums.length; ++i) {
      // if the number is even
      if (nums[i] % 2 === 0) {
        // and the boolean indicates we have found the first even integer
        if (isHolding) {
          // push to the output the number at the held index
          output.push(nums[holdIndex]);
          // set the already pushed output index to be the current number
          output[holdIndex] = nums[i];
          // set the holding boolean to mean looking for a first even again
          isHolding = false;
        } else {
          // if this is the first even
          // push the current number
          output.push(nums[i]);
          // set the holding index to the current index
          holdIndex = i;
          // set the boolean to state looking for the second even
          isHolding = true;
        }
      } else {
        // otherwise the number is odd and can just be pushed
        output.push(nums[i]);
      }
    }
    // return the output array
    return output;
  },
  evenStevensConstantSpace: (nums) => {
    // this does the same but instead of pushing to a new array,
    let holdIndex;
    let isHolding = false;
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] % 2 === 0) {
        if (isHolding) {
          // the indexes are switch over in the input array
          let temp = nums[holdIndex];
          nums[holdIndex] = nums[i];
          nums[i] = temp;
          isHolding = false;
        } else {
          holdIndex = i;
          isHolding = true;
        }
      }
    }
    // the input array is returned, with the order edited
    return nums;
  },
};

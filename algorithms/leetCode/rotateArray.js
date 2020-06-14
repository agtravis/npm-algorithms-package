'use strict';

module.exports = {
  rotateArrayUnshift: (nums, k) => {
    // loop as many times as we need to shift
    for (let i = 0; i < k; ++i) {
      // unshift adds an item to the front of the array
      // pop removes and returns the end item of the array
      // so this line takes the last item of the array and adds it to the front
      // unshift is O(n), so this is O(n * k)
      nums.unshift(nums.pop());
    }
    return nums;
  },
  rotateArrayLikeUnshift: (nums, k) => {
    // this is just code to replace actually using the unshift method, to show time complexity
    // loop through as many times as `k`
    for (let i = 0; i < k; ++i) {
      // assign a variable to store the last element in the array
      let last = nums[nums.length - 1];
      // loop backwards through the array
      for (let j = nums.length - 1; j >= 1; --j) {
        // making each element have the value of the one preceeding it in the array
        nums[j] = nums[j - 1];
      }
      // finally assign the first index to be what was the last
      nums[0] = last;
    }
    return nums;
  },
  rotateArrayWithCopy: (nums, k) => {
    // create an array to fill with new values
    const holdArr = [];
    // loop through input
    for (let i = 0; i < nums.length; ++i) {
      // assign a new positioned element in the hold array by
      // taking the current index in the input and adding the amount to shift by
      // and then by the remainder when divided by the length
      // this solves the problems of when the new index exceeds the length of the input
      // and when the amount to shift by is longer than the length of the array
      holdArr[(i + k) % nums.length] = nums[i];
    }
    // loop again, this time taking the new input and copying directly into the input array
    for (let i = 0; i < nums.length; ++i) {
      nums[i] = holdArr[i];
    }
    // this is O(n) time complexity but also O(n) space complexity
    return nums;
  },
};

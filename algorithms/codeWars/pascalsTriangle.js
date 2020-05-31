'use strict';

const pascalsTriangle = (n, arr = []) => {
  // this is a recursive functions, so base case says return when n === 0
  if (n === 0) {
    // establish empty array
    const outputArr = [];
    // iterate on the sub arrays through the input array
    for (const subArr of arr) {
      // for each, spread the subarray into the output array
      outputArr.push(...subArr);
    }
    // return this flattened array
    return outputArr;
  } else {
    // if the input array is empty (which it will be to begin with)
    if (arr.length === 0) {
      // set the first subarray to be [1]
      arr = [[1]];
      // otherwise
    } else {
      // start a new array which will be a subarray to represent the row in the triangle
      let rowArr = [];
      // set the first element of the new row to be `1`
      rowArr[0] = 1;
      // also set the last element to be `1`
      // this is a little more complex -
      // to start we need to know how many rows we have created so far ([arr.length - 1])
      // then we need to measure the length of the array we are on ([arr[arr.length - 1].length])
      // then we have the index we set to `1`
      rowArr[arr[arr.length - 1].length] = 1;
      // now we can loop through the most recent array we created
      for (let i = 1; i < arr[arr.length - 1].length; ++i) {
        // and for each we can say that the element in the current array is equal to:
        // the number in the previous array and in the previous index added to
        // the number in the previous array and in the same index
        rowArr[i] = arr[arr.length - 1][i - 1] + arr[arr.length - 1][i];
      }
      // when the row array is filled, we can push this array into the array of subarrays (rows)
      arr.push(rowArr);
    }
    // decrement the number
    // while this number decreases, the number of subarrays (rows) increases, thus building the triangle
    // when this number === 0, the triangle is built and the recursion will end
    n = n - 1;
    // and recursively call, passing in the array so far
    return pascalsTriangle(n, arr);
  }
};

module.exports = pascalsTriangle;

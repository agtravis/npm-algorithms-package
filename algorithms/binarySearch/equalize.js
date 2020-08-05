'use strict';

// all this problem requires is to know the maximum and the minimum values,
// and to find the difference between them
module.exports = (nums) => Math.max(...nums) - Math.min(...nums);

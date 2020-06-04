'use strict';

const {
  greatestOfTwoReturnMax,
  greatestOfTwoReturnTernary,
  greatestOfTwo,
} = require(`./greatestOfTwo`);
const {
  addIterantsWithMemoization,
  addIterantsRecursively,
  addIterants,
  addIterantsWithReduce,
} = require(`./addIterants`);
const { maxNumDP, maxNumSort, maxNumMax } = require(`./maxNum`);

module.exports = {
  greatestOfTwo,
  greatestOfTwoReturnMax,
  greatestOfTwoReturnTernary,
  addIterantsWithMemoization,
  addIterantsWithReduce,
  addIterants,
  addIterantsRecursively,
  maxNumDP,
  maxNumSort,
  maxNumMax,
};

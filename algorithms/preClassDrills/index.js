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

module.exports = {
  greatestOfTwo,
  greatestOfTwoReturnMax,
  greatestOfTwoReturnTernary,
  addIterantsWithMemoization,
  addIterantsWithReduce,
  addIterants,
  addIterantsRecursively,
};

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
const numVowels = require(`./numVowels`);
const isPalindrome = require(`./isPalindrome`);
const firstNonMultiple = require(`./firstNonMultiple`);
const averageArray = require(`./averageArray`);
const isInteger = require(`./isInteger`);
const isPangram = require(`./isPangram`);
const dayNumber = require(`./dayNumber`);
const reverseString = require(`./reverseString`);
const swapCase = require(`./swapCase`);

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
  numVowels,
  isPalindrome,
  firstNonMultiple,
  averageArray,
  isInteger,
  isPangram,
  dayNumber,
  reverseString,
  swapCase,
};

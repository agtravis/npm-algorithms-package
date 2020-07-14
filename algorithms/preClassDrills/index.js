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
const firstDuplicate = require(`./firstDuplicate`);
const getNegative = require(`./getNegative`);
const includes = require(`./includes`);
const {
  printPyramid,
  printPyramidWhile,
  printPyramidForwards,
} = require(`./printPyramid`);
const {
  callbackFilterFilter,
  callbackFilterLoop,
} = require(`./callbackFilter`);
const flatten = require(`./flatten`);
const { hasSome, hasAll, hasNone, hasMost } = require(`./passConditions`);
const reverseNumber = require(`./reverseNumber`);
const removeSpaces = require(`./removeSpaces`);
const {
  haveSameTotalPosition,
  haveSameTotalPositionEvery,
} = require(`./haveSameTotalPosition`);
const multipleAnagrams = require(`./multipleAnagrams`);
const haveSubWord = require(`./haveSubWord`);
const hasPalindrome = require(`./hasPalindrome`);
const longestPalindrome = require(`./longestPalindrome`);
const findSumIndices = require(`./findSumIndices`);

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
  firstDuplicate,
  getNegative,
  includes,
  printPyramid,
  printPyramidWhile,
  printPyramidForwards,
  callbackFilterLoop,
  callbackFilterFilter,
  flatten,
  hasSome,
  hasAll,
  hasNone,
  hasMost,
  reverseNumber,
  removeSpaces,
  haveSameTotalPosition,
  haveSameTotalPositionEvery,
  multipleAnagrams,
  haveSubWord,
  hasPalindrome,
  longestPalindrome,
  findSumIndices,
};

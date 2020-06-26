'use strict';

const arithmetic = require(`./arithmetic`);
const oddOrEven = require(`./oddOrEven`);
const logNums = require(`./logNums`);
const logEvens = require(`./logEvens`);
const countdown = require(`./countdown`);
const { sumArrayForEach, sumArrayReduce } = require(`./sumArray`);
const fizzBuzz = require(`./fizzBuzz`);
const maxNum = require(`./maxNum`);
const vowelCount = require(`./vowelCount`);
const isPalindrome = require(`./isPalindrome`);
const factorial = require(`./factorial`);
const titleCase = require(`./titleCase`);
const longestWord = require(`./longestWord`);
const acronymBuilder = require(`./acronymBuilder`);
const reverseWords = require(`./reverseWords`);
const reverseInPlace = require(`./reverseInPlace`);
const lookAndSay = require(`./lookAndSay`);
const isNumeric = require(`./isNumeric`);
const characterCount = require(`./characterCount`);
const productOfLargestTwo = require(`./productOfLargestTwo`);
const { camelCaseConcatenation, camelCaseMap } = require(`./camelCase`);
const linearSearch = require(`./linearSearch`);
const isUnique = require(`./isUnique`);
const { isAnagramSort, isAnagramMap } = require(`./isAnagram`);
const mostSongsInAPlaylist = require(`./mostSongsInAPlaylist`);
const {
  isPerfectSquareLoop,
  isPerfectSquareSqrt,
} = require(`./isPerfectSquare`);
const arraySearch2D = require(`./arraySearch2D`);
const multiplyInto20 = require(`./multiplyInto20`);
const { zerosAndOnesLoop, zerosAndOnesReduce } = require(`./zerosAndOnes`);
const mergeKSorted = require(`./mergeKSorted`);

module.exports = {
  arithmetic,
  oddOrEven,
  logNums,
  logEvens,
  countdown,
  sumArrayForEach,
  sumArrayReduce,
  fizzBuzz,
  maxNum,
  vowelCount,
  isPalindrome,
  factorial,
  titleCase,
  longestWord,
  acronymBuilder,
  reverseWords,
  reverseInPlace,
  lookAndSay,
  isNumeric,
  characterCount,
  productOfLargestTwo,
  camelCaseConcatenation,
  camelCaseMap,
  linearSearch,
  isUnique,
  isAnagramSort,
  isAnagramMap,
  mostSongsInAPlaylist,
  isPerfectSquareLoop,
  isPerfectSquareSqrt,
  arraySearch2D,
  multiplyInto20,
  zerosAndOnesLoop,
  zerosAndOnesReduce,
  mergeKSorted,
};

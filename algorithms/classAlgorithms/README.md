# Class Algorithms

These are the algorithms that were provided weekly as an extra activity.

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure the Class Algorithms:

```js
const { classAlgorithms } = algorithms;
```

Then you can run the following functions:

### Basic Functions

```js
classAlgorithms.arithmetic.add(10, 2); // === 12
classAlgorithms.arithmetic.subtract(10, 2); // === 8
classAlgorithms.arithmetic.multiply(10, 2); // === 20
classAlgorithms.arithmetic.divide(10, 2); // === 5
```

### Even or Odd

```js
classAlgorithms.oddOrEven(10); // === `even`
classAlgorithms.oddOrEven(9); // === `odd`
classAlgorithms.oddOrEven(`10`); // === false
```

### Log Numbers

```js
classAlgorithms.logNums(10); // logs all positive integers from 1 to 10 (function logs, no return)
```

### Log Even Numbers

```js
classAlgorithms.logEvens(10); // logs all positive integers divisible by 2 (with return)
```

### Log Numbers Counting Down

```js
classAlgorithms.countdown(10); // logs all positive integers from 10 to 1 (with return)
```

### Sum All Numbers in an Array

```js
classAlgorithms.sumArrayForEach([4, 8, 15, 16, 23, 42]); // === 108
classAlgorithms.sumArrayReduce([4, 8, 15, 16, 23, 42]); // === 108
```

### Fizz Buzz

Log `Fizz`, `Buzz`, or `Fizz Buzz`, or a number, based on divisibility

This is different to [here](../binarySearch/fizzBuzz.js) because the output here is to log to the console instead of return an array

```js
classAlgorithms.fizzBuzz([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]); // logs Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz sequentially to the console
```

### Output the Highest Number in an Array

This has already been solved multiple ways [here](../preClassDrills/maxNum.js), this is another way

```js
classAlgorithms.maxNum([1, 5, 9, 0, -5]); // === 9
```

### Count Vowels in a String

This has already been solved [here](../preClassDrills/numVowels.js), this is another way

```js
classAlgorithms.vowelCount(`I think, therefore I am.`); // === 8
```

### Is a String a Palindrom

```js
classAlgorithms.isPalindrome(`racecar`); // === true
```

### Output the Factorial of a Number

A factorial of a number is the product of all of all positive integers less than or equal to the number.

```js
classAlgorithms.factorial(4); // === 24
```

### Convert a String to Capital Case

```js
classAlgorithms.titleCase(`the quick brown fox jumps over the lazy dog`); // === `The Quick Brown Fox Jumps Over The Lazy Dog`
```

### Return the Longest Word in a String

```js
classAlgorithms.longestWord(`I love programming`); // === `programming`
```

### Return an Acronym of Each Word in a String

```js
classAlgorithms.acronymBuilder(`Always be coding`); // === `ABC`
```

### Reverse the order of words in a string

```js
classAlgorithms.reverseWords(
  `it does not matter how slowly you go as long as you do not stop`
); // === stop not do you as long as go you slowly how matter not does it
```

### Reverse an Array Without Using `reverse` nor Creating a New Array

```js
classAlgorithms.reverseInPlace([1, 2, 3, 4, 5]); // === [5, 4, 3, 2, 1]
```

### Look and Say

The look and say sequence can be understood by reading a number out loud, digit by digit, but first saying the number of times each digit appears in a row.

```js
classAlgorithms.lookAndSay(114333877); // === 2114331827
```

### Is a String a Valid Number

```js
classAlgorithms.isNumeric(`-0.3.2`); // === false
```

### Return an Object Containing a Count of Each Character in a String

```js
classAlgorithms.characterCount(`peter piper picked a pack of pickled peppers`); // === { p: 9, e: 7, t: 1, r: 3, ' ': 7, i: 3, c: 3, k: 3, d: 2, a: 2, o: 1, f: 1, l: 1, s: 1 }
```

### Return the Product of the Largest Two Elements in an Unsorted Array

```js
classAlgorithms.productOfLargestTwo([4, 8, 15, 16, 23, 42]); // === 966
```

### Return a String in camelCase

```js
classAlgorithms.camelCaseConcatenation(`Hello World`); // === `helloWorld`
classAlgorithms.camelCaseMap(`The rain in spain falls mainly on the plain`); // === `theRainInSpainFallsMainlyOnThePlain`
```

### Linear Search

```js
classAlgorithms.linearSearch([8, 22, 3, 0, -2], 3); // === 2
```

### Is Every Element in an Array Unique

```js
classAlgorithms.isUnique([2, 8, 7, 5, 4, 3]); // === true
```

### Are Two Strings Anagrams of Eachother?

```js
classAlgorithms.isAnagramSort(`octagonal`, `tganoalco`); // === true
classAlgorithms.isAnagramMap(`octagonal`, `hello`); // === false
```

### Return the Maximum Number of Songs from an Array (of Song Durations) that Can Fit in a 60 Minute Playlist

```js
classAlgorithms.mostSongsInAPlaylist([
  3,
  5,
  7,
  2,
  1,
  4,
  8,
  5,
  3,
  2,
  2,
  1,
  5,
  7,
  4,
  2,
  3,
  1,
  3,
  4,
  7,
  8,
  8,
  2,
]); // === 19
```

### Is a Number a Perfect Square (is the Square Root an Integer)

```js
classAlgorithms.isPerfectSquareLoop(16); // === true
classAlgorithms.isPerfectSquareSqrt(15); // === false
```

### Return the Number of `X`s in a 2D Array

```js
classAlgorithms.arraySearch2D([
  [`X`, `O`, `O`, `O`],
  [`O`, `O`, `O`, `O`],
  [`X`, `X`, `X`, `X`],
  [`O`, `O`, `O`, `O`],
]); // === 5
```

### Does an Array Contain Two Numbers that Multiply Together to Make a Product of 20

```js
classAlgorithms.multiplyInto20([2, 8, 7, 5, 4, 3]); // === true
```

### Is a String Containing Only Zeros and Ones Balanced

```js
classAlgorithms.zerosAndOnesLoop(`10101010`); // === true
classAlgorithms.zerosAndOnesReduce(`1010101`); // === false
```

### Merge K Sorted Arrays (Where the Arrays are Individual Arguments)

```js
classAlgorithms.mergeKSorted(
  [-50, 0, 99, 100],
  [0, 2],
  [],
  [-30, 1, 4, 5],
  [3]
); // === [-50, -30, 0, 0, 1, 2, 3, 4, 5, 99, 100]
```

### Two Arrays Share a Common Element, Return that Element

```js
classAlgorithms.commonElement([5, 3, 4, 10], [0, 4, 9, 99]); // === 4
```

### Is a Substring Constructed Using Exclusively Letters Contained Within a String

```js
classAlgorithms.permutationSubstring(`tbacowa`, `bat`); // === true
```

### Take a String and Return an Object Containing a Map Where Each Key Holds an Array of the indeces of Each Letter

```js
classAlgorithms.stringMap(`hello world`); // === {"h":[0],"e":[1],"l":[2, 3, 9],"o":[4, 7]," ":[5],"w":[6],"r":[8],"d":[10]}
```

### Take an Input Array of Integers, and Map it to an Array where Each Integer is either Doubled or Tripled based on if it is Even or Odd Respectively

```js
classAlgorithms.doubleTripleMap([1, 2, 3, 4]); // === [3, 4, 9, 8]
```

### Return the Intersections of Two Arrays

```js
classAlgorithms.arrayIntersection([1, 2, 3, 4, 5], [5, 0, 3, 10, -2, 1]); // === [1, 3, 5]
```

### Return a Sorted Array with its Elements Squared and Sorted

```js
classAlgorithms.sortedSquaresWithSort([-4, -1, 0, 3, 10]); // === [0, 1, 9, 16, 100]
classAlgorithms.sortedSquaresNoSort([-7, -3, 2, 3, 11]); // === [4, 9, 9, 49, 121]
classAlgorithms.sortedSquaresNoSortCleaner([-7, -3, 2, 3, 11]); // === [4, 9, 9, 49, 121]
```

### Calculate the Square Root of an Input Positive Integer, Rounded Down

```js
classAlgorithms.squareRoot(1452); // === 38
```

### Does a String Contain Another String, and Where

```js
classAlgorithms.needleInTheHaystack(`JavaScript`, `aSc`); // === 3
```

### Remove Duplicates in an Array without Creating a New Array

```js
classAlgorithms.removeDuplicatesInPlace([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3]); // === [1, 2, 3]
```

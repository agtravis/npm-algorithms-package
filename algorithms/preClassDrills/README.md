# Pre-Class Drills

These are the algorithms that were presented to be solved before each class.

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure the Pre Class Drills:

```js
const { preClassDrills } = algorithms;
```

Then you can run the following functions:

### Find the greatest of two numbers

```js
preClassDrills.greatestOfTwo(1, 2); // === 2
preClassDrills.greatestOfTwoReturnTernary(4, -6); // === 4
preClassDrills.greatestOfTwoReturnMax(3.4, 2); // === 3.4
```

### Add consecutive numbers up to `n`

```js
preClassDrills.addIterants(100); // === 5050 && logs if accumulation % 10 === 0
preClassDrills.addIterantsWithReduce(100); // === 5050
preClassDrills.addIterantsRecursively(100); // === 5050
preClassDrills.addIterantsWithMemoization(100); // === 5050 && logs if accumulation % 10 === 0
```

### Find Maximum number in an array

```js
preClassDrills.maxNumDP([1, 5, 9, 0, -5]); // === 9
preClassDrills.maxNumSort([1, 5, 9, 0, -5]); // === 9
preClassDrills.maxNumMax([1, 5, 9, 0, -5]); // === 9
```

### Count the Vowels in a String

```js
preClassDrills.numVowels(`bivouacked`); // === 5
```

### Is a String a Palindrome

```js
preClassDrills.isPalindrome(`racecar`); // === true
```

### Find and Return the First Non-Repeated Character in a String

```js
preClassDrills.firstNonMultiple(
  `the quick brown fox jumps over the calm kitten quietly`
); // === b
```

### Calculate the Average of an Array of Numbers

```js
preClassDrills.averageArray([1, 4, 7]); // === 4
```

### Is an Input an Integer

```js
preClassDrills.isInteger(`7`); // === false
preClassDrills.isInteger(7); // === true
preClassDrills.isInteger(4.3); // === false
```

### Is a String a Pangram

Does it contain once instance at least of every letter of the alphabet?

```js
preClassDrills.isPangram(`Watch Jeopardy, Alex Trebek’s fun TV quiz game`); // === true
```

### Input the Day of the Week By Number and Retrieve the Day Name

```js
preClassDrills.dayNumber(1); // === `Monday`
```

### Reverse a String

```js
preClassDrills.reverseString(`Hello World!`); // === `!dlroW olleH`
```

### Switch the Case of All Letters in a String

```js
preClassDrills.swapCase(`ImAgInE If i WrOtE LiKe tHiS`); // === `iMaGiNe iF I wRoTe lIkE ThIs`
```

### Return the First Duplicate in an Array

```js
preClassDrills.firstDuplicate([1, 3, 4, 1, 3, 4]); // === 1
```

### Return a Negative Form of an Input Number, and Throw an Error if Input is Invalid

```js
preClassDrills.getNegative(`34`); // === -34
preClassDrills.getNegative({ foo: 'bar' }); // throws error - `input must be coercible to a number`
```

### Write a Custom Includes Function to See if an Array or String Contains an Element or Character Respectively

```js
preClassDrills.includes([1, 3, 6], 2); // === false
preClassDrills.includes(`abc`, `c`); // === true
preClassDrills.includes(null, `z`); // throws an error
```

### Log Pyramids of `X`s to the Console

```js
preClassDrills.printPyramid(10); // run in a JS environment will log a pyramid to the console
preClassDrills.printPyramidWhile(15); // run in a JS environment will log a pyramid to the console
preClassDrills.printPyramidForwards(20); // run in a JS environment will log a pyramid to the console
```

### A Function that Takes a Callback Function as an Argument to Filter an Array

```js
const isEven = (num) => num % 2 === 0;
const isGreaterThanTwo = (num) => num > 2;
preClassDrills.callbackFilterLoop([1, 2, 3, 4], isEven); // === [2, 4]
preClassDrills.callbackFilterFilter([1, 2, 3, 4], isGreaterThanTwo); // === [3, 4]
```

### Return a Single Flattened Array

```js
preClassDrills.flatten(['a', 54, null], [[]], [], ['pizza', 42]); // === ['a', 54, null, [], 'pizza', 42]
```

### Write Functions that Return Booleans Based on Whether an Input Array Passes an Input Callback

```js
const isEven = (num) => num % 2 === 0;
preClassDrills.hasSome([1, 2, 3], isEven); // === true
preClassDrills.hasAll([1, 2, 3], isEven); // === false
preClassDrills.hasNone([1, 2, 3], isEven); // === false
preClassDrills.hasMost([2, 3, 4], isEven); // === true
```

### Reverse a Number

A function that takes in a number and reverses the order of the digits.

```js
preClassDrills.reverseNumber(-1234); // === -4321
```

### Remove Spaces from a String and Convert to Lower Case

```js
preClassDrills.removeSpaces(`I liKe        PIZZA`); // === `ilikepizza`
```

### Determine if the Sum of all Positions of Characters in a Word are Equal, Given Any Number of Strings

```js
preClassDrills.haveSameTotalPosition(`abc`, `f`, `cba`); // === true
preClassDrills.haveSameTotalPositionEvery(`abc`, `bcd`); // === false
```

### Determine if All Strings Passed as Arguments are Anagrams of Eachother

```js
preClassDrills.multipleAnagrams(
  `the morse code`,
  `here come dots`,
  `e ooesmhcrdt e`
); // === true
preClassDrills.multipleAnagrams(`pizza`, `pzza`); // === false
preClassDrills.multipleAnagrams(`pzza`, `pizza`); // === false
```

### Determine if a Subword is Contained in All of Any Amount of Inputs

```js
preClassDrills.haveSubWord(`car`, `racecar`, `haircare`, `carbon`); // === true
preClassDrills.haveSubWord(`car`, `racecar`, `haircare`, `carbon`, `pizza`); // === false
```

### Determine if a String Contains a Palindrome

```js
preClassDrills.hasPalindrome(`aqabac`); // === true
preClassDrills.hasPalindrome(`aqaac`); // === true
```

### Find the Longest Palindrome in a String (Return `null` if None Exists)

```js
preClassDrills.longestPalindrome(`abaqcabbap`); // abba
```

### Return the Indices of Two Numbers in an Array that Sum a Target Input

```js
preClassDrills.findSumIndices(3, [0, 1, 2, 3, 4, 5]); // === [0, 3]
```

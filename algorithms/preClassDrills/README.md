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

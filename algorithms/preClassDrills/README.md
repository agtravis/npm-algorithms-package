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

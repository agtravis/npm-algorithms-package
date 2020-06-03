# Udemy

These are the problems solved in the Udemy Course for interview practicing.

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure Udemy:

```js
const { udemy } = algorithms;
```

Then you can run the following functions:

### Find Common Items in Two arrays

```js
udemy.commonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i']); // === false
udemy.commonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'c']); // === true
```

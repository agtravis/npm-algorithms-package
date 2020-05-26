# Code Wars

Problems solved at [https://www.codewars.com/](https://www.codewars.com/)

Import the algorithms package as follows:

```js
const { algorithms } = require(`npm-algorithms-package`);
```

First, destructure the Code Wars Algorithms:

```js
const { codeWars } = algorithms;
```

Then you can run the following functions:

### Duplicate Encode

[https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript)

```js
codeWars.duplicateEncode(`recede`); // === `()()()`
codeWars.duplicateEncode(`Success`); // === `)())())`
```

### Open or Senior

[https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript](https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript)

```js
codeWars.openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]); // === ['Open', 'Senior', 'Open', 'Senior']
codeWars.openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [54, 23],
]); // === ['Open', 'Open', 'Open', 'Open']
```

### Rot 13

[https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript](https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript)

```js
codeWars.rot13a(`test`); // === grfg
codeWars.rot13b(`Test`); // === Grfg
```

### Sum Strings

[https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript](https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript)

```js
codeWars.sumStrings(`123`, `456`); // === `579`
codeWars.sumStrings(
  `50095301248058391139327916261`,
  `81055900096023504197206408605`
); // === `131151201344081895336534324866`
```

### Find Outlier

[https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript/5e7bd08621b52d0027ad328c](https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript/5e7bd08621b52d0027ad328c)

```js
codeWars.findOutlier([0, 1, 2]); // === 1
codeWars.findOutlier([2, 6, 8, 10, 3]); // === 3
```

### Length of a Loop in a Linked List

[https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript/5ec2b420b6a0c30014cc1f0b](https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript/5ec2b420b6a0c30014cc1f0b)

NOTE: Needs [this](./linkedlist.md) to run successfully (`Linked List` set up)

```js
codeWars.loopSize(linkedList.head);
```

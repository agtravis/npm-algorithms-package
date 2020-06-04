```js
function Node(value) {
  this.value = value;
  // this.left = null;
  // this.right = null;
}

// left < right >
// function insertNode(tree, value) {
//   var node = tree,
//     key;
//   while (node.value !== value) {
//     key = value < node.value ? 'left' : 'right';
//     if (!node[key]) {
//       node[key] = new Node(value);
//       break;
//     }
//     node = node[key];
//   }
//   return tree;
// }

// makes one left node then continues tree on right
function insertNode(tree, value) {
  var node = tree,
    key;
  while (node.value) {
    key = !node.left ? 'left' : 'right';
    if (!node[key]) {
      node[key] = new Node(value);
      break;
    }
    node = node[key];
  }
  return tree;
}

var array = [3, 3, 3, 3];

const tree = array.reduce((t, v) => (t ? insertNode(t, v) : new Node(v)), null);

const array2 = [3, 5, 3, 3];
const tree2 = array2.reduce(
  (t, v) => (t ? insertNode(t, v) : new Node(v)),
  null
);

module.exports = {
  tree,
  tree2,
};
```

'use strict';

module.exports = (head, n) => {
  // a class to create nodes
  class ListNode {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  // create a new fake head
  const dummy = new ListNode(0);
  // and set its next property to be the real head
  dummy.next = head;
  // create two pointers, both pointing at the fake head
  let pointer1 = dummy;
  let pointer2 = dummy;
  // loop until the first pointer has moved up `n` + 1 spaces
  for (let i = 0; i < n + 1; ++i) {
    pointer1 = pointer1.next;
  }
  // until pointer 1 reaches the end, move up both pointers equally
  while (pointer1 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  // at this point, the second pointer is now pointing `n` + 1 places from the end
  // i.e. the node right before the one we are removing
  // now we can write the code that sets that previous node's next property
  // to point to the following node, i.e. skipping the current node
  pointer2.next = pointer2.next.next;
  // and return what was the old head
  return dummy.next;
};

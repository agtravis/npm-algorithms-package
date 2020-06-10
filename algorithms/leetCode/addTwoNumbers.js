'use strict';

// the inputs are both linked lists
module.exports = (l1, l2) => {
  // a helper constructore to build new nodes
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  // create a fake head so we can build a new list
  let head = new ListNode(0);
  // set a pointer, current, to be the head
  let current = head;
  // set a variable to store a carryover (as if we were adding longhand)
  let carry = 0;
  // set pointers for each of the two input linked lists
  let pl1Head = l1.val;
  let ql2Head = l2.val;
  // as long as at least one of the lists is still in play
  while (pl1Head !== null || ql2Head !== null) {
    // set one variable to either be either one list's head's value or zero if the list has expired
    let x = pl1Head !== null ? pl1Head.val : 0;
    // and another to be the equivalent on the other list
    let y = ql2Head !== null ? ql2Head.val : 0;
    // tally the two along with any carry over
    let sum = x + y + carry;
    // reset the carry to be everything but the remainder when divided by ten, since we are dealing with digits
    carry = Math.floor(sum / 10);
    // set the current node's next property (on the first loop that's the head) to be a node with a value
    // of the remainder when the sum is divided by ten - that will be the digit
    current.next = new ListNode(sum % 10);
    // move the pointer to the next node (that we just created)
    current = current.next;
    // as long as the current input is still in play, move the pointer to the next node for each
    if (pl1Head !== null) {
      pl1Head = pl1Head.next;
    }
    if (ql2Head !== null) {
      ql2Head = ql2Head.next;
    }
  }
  // at the end, if there is anything left to carry over, we can simply put it on the front
  // as in long hand
  if (carry > 0) {
    // remembering to make it a node
    current.next = new ListNode(carry);
  }
  // since the head is just a fake, the return list starts at its next property
  return head.next;
};

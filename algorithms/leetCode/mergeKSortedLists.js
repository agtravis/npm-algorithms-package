'use strict';

module.exports = (lists) => {
  // constructor for a new list node, takes a value and a next property
  function ListNode(val, next) {
    // assigns the value to be the value or 0 if undefined
    this.val = val === undefined ? 0 : val;
    // assigns next to be null if undefined, or next if defined
    this.next = next === undefined ? null : next;
  }
  // set variables to point at where the head and tail are
  let head;
  let tail;
  // this while loop operates as long as this function returns true
  // .some() runs a function on each element in an array and will return true if at least one function returns true
  // the sub-function takes each list as an input
  // the 'double bang' returns a truthy value
  // A single '!' makes a value the opposite, and '!!' reverts back to the original truthy value
  // (rather than the original actual value)
  // while a list exists, the truthy value is true, so this will return false when all lists return false
  // and that is when the loop ends
  while (lists.some((list) => !!list)) {
    // start the list index at 0
    let listIndex = 0;
    // loop through the lists
    for (let i = 0; i < lists.length; ++i) {
      // if a list doesn't exist any more
      // or the list being iterated on exists and the current list value is greater than the iterated list value
      if (
        !lists[listIndex] ||
        (lists[i] && lists[listIndex].val > lists[i].val)
      ) {
        // set the current list to be the iterated list
        listIndex = i;
      }
      // at the end of this for loop, we have established the current lowest value
    }
    // create a new node and send it the value we have currently set as the lowest
    const node = new ListNode(lists[listIndex].val);
    // set the pointer of the list just used to be the next node in that list
    // when a list reaches the end, the node returns null
    // and fails the while loop function truthy test
    lists[listIndex] = lists[listIndex].next;
    // if we have defined the tail
    if (tail) {
      // set the current tail's next property to be equal to the node we just made
      tail.next = node;
      // then set the tail to be that new node
      tail = tail.next;
      // otherwise
    } else {
      // set the tail to be the new node
      tail = node;
      // and the head to be the tail (a linked list with one node)
      head = tail;
    }
    // repeat this process till the while loop ends and all lists have been iterated
  }
  // return the head of the new list (or null if it doesn't exist)
  return head || null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (head == null || k <= 0) return null;

  if (head.next == null && k == 1) return head;

  let ptr1 = new ListNode(),
    ptr2 = new ListNode();

  ptr1 = head;

  for (let i = 0; i < k - 1; i++) {
    if (ptr1.next != null) ptr1 = ptr1.next;
    else return null;
  }

  ptr2 = head;
  while (ptr1.next != null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr2;
};

var ListNode = function (val) {
  this.val = val;
  this.next = null;
};

let test = new ListNode(1);
let test_1 = new ListNode(2);
let test_2 = new ListNode(3);
let test_3 = new ListNode(4);
let test_4 = new ListNode(5);

test_3.next = test_4;
test_2.next = test_3;
test_1.next = test_2;
test.next = test_1;

console.log(getKthFromEnd(test, 4));

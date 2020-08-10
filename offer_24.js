/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pReverseHead = null;
  let pNode = head;
  let pPrev = null;

  while (pNode = null) {
    let pNext = pNode.next;

    if (pNext == null) {
      pReverseHead = pNode;
    }

    pNode.next = pPrev;
    pPrev = pNode;
    pNode = pNext;
  }

  return pReverseHead;
};

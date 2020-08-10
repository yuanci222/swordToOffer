/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  if(!head) return []

  let arr = []
  let ptr = head
  while(ptr.next != null){
    arr.push(ptr.val)
    ptr = ptr.next
  }

  arr.push(ptr.val)
  
  return arr.reverse()
};

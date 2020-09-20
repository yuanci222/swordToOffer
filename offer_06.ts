/**
 * LeetCode上拿下来的
 *
 * @class ListNode
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function createTestData(length: number): ListNode {
  let head: ListNode = new ListNode(
      Math.floor(Math.random() * 10) % length,
      null
    ),
    p: ListNode | null = head;
  for (let i = 0; i < length - 1; i++) {
    let q: ListNode = new ListNode(
      Math.floor(Math.random() * Math.pow(10, length.toString().length)) %
        length,
      null
    );
    p.next = q;
    p = p.next;
  }

  return head;
}

let testListNode = createTestData(20);

/**
 * 直接遍历链表，将每个结点的值插到最前面
 *
 * @param {(ListNode | null)} head
 * @returns {number[]}
 */
function solution_1(head: ListNode | null): number[] {
  let result: number[] = [],
    p: ListNode | null = head;

  while (p != null) {
    result.unshift(p.val);
    p = p.next;
  }

  return result;
}

/**
 * 基于两个栈？
 * 感觉跟solution_1差不多
 * 不太清楚unshift()是咋实现的，如果是数组搬移的话，应该会更耗时？
 *
 * @param {(ListNode | null)} head
 * @returns {number[]}
 */
function solution_2(head: ListNode | null): number[] {
  // nodeVal 把所有项都pop之后的类型    ？？
  let nodeVal: number[] | any = [],
    result: number[] = [],
    p: ListNode | null = head;

  while (p != null) {
    nodeVal.push(p.val);
    p = p.next;
  }

  while (nodeVal.length) {
    result.push(nodeVal.pop());
  }

  return result;
}

/**
 * 每次将当前结点的后一个结点的值push进数组，递归实现
 *
 * @param {(ListNode | null)} head
 * @returns {number[]}
 */
function solution_3(head: ListNode | null): number[] {
  let result: number[] = [];
  recursionSolution_3(head, result);
  return result;
}

function recursionSolution_3(head: ListNode | null, result: number[]): void {
  if (head != null) {
    if (head.next != null) {
      recursionSolution_3(head.next, result);
    }
    // 后面已经没有结点了，直接push到数组
    result.push(head.val);
  }
}

console.log(testListNode);
console.log('solution_1', solution_1(testListNode));
console.log('solution_2', solution_2(testListNode));
console.log('solution_3', solution_3(testListNode));

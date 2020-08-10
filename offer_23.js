function meetNode(head) {
  if (head == null) return null;

  let pSlow = head.next;
  if (pSlow == null) return null;

  let pFast = pSlow.next;

  while (pFast != null && pSlow != null) {
    if (pFast == pSlow) return pFast;

    pSlow = pSlow.next;
    pFast = pFast.next;
    if (pFast != null) pFast = pFast.next;
  }

  return null
}

function entryNodeOfLoop(head){
  let meetingNode = meetNode(head)
  if(meetingNode == null) return null

  let nodesInLoop = 1
  let pNode1 = meetingNode
  while(pNode1.next != meetingNode){
    pNode1 = pNode1.next
    ++nodesInLoop
  }

  pNode1 = head
  for(let i = 0; i < nodesInLoop; ++i){
    pNode1 = pNode1.next
  }

  let pNode2 = head
  while(pNode1 != pNode2){
    pNode1 = pNode1.next
    pNode2 = pNode2.next
  }

  return pNode1
}

function Node(val){
  this.val = val
  this.next = null
}

let node_1 = new Node(1)
let node_2 = new Node(2)
let node_3 = new Node(3)
let node_4 = new Node(4)
let node_5 = new Node(5)
let node_6 = new Node(6)

node_6.next = node_3
node_5.next = node_6
node_4.next = node_5
node_3.next = node_4
node_2.next = node_3
node_1.next = node_2
let head = node_1

console.log(entryNodeOfLoop(head));
 

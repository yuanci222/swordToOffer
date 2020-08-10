var CQueue = function () {
  this.stack_1 = [];
  this.stack_2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  if (this.stack_2.length > 0) {
    while (this.stack_2.length > 0) {
      this.stack_1.push(this.stack_2.pop());
    }
  }

  this.stack_1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack_1.length > 0) {
    while (this.stack_1.length > 0) {
      this.stack_2.push(this.stack_1.pop());
    }
  }

  if (this.stack_2.length == 0) return -1;

  return this.stack_2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var cq = new CQueue();
console.log(cq.deleteHead());
console.log(cq.appendTail(5));
console.log(cq.appendTail(2));
console.log(cq.deleteHead());
console.log(cq.deleteHead());

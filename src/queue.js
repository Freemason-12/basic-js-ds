const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 *
    throw new NotImplementedError('Not implemented');
 */
class Queue {

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let nn = new ListNode() 
    nn.value = value
    if(this.head == null) this.head = nn 
    else {
      let lp = this.head
      while(lp.next != null) lp = lp.next
      lp.next = nn
    }
  }

  dequeue() {
    if(this.head == null) return undefined
    let ret = this.head
    this.head = ret.next
    return ret.value
  }

  constructor(){this.head = null;}
}

let a = new Queue()
a.enqueue(1)
a.enqueue(2)
a.enqueue(3)
a.enqueue(4)
a.enqueue(5)
a.enqueue(6)
a.dequeue()
a.dequeue()
a.dequeue()
console.log(a.getUnderlyingList())

module.exports = {
  Queue
};

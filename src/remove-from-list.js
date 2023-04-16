const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }

  throw new NotImplementedError('Not implemented');
 */
function removeKFromList(l, k) {
  let p = l, nl = new ListNode()
  let np = nl, npr = nl
  while(p != null){
    if(p.value != k){
      np.value = p.value
      npr = np
      if(p.next != null) {np.next = new ListNode(); np = np.next;}
    }
    p = p.next
  }
  if(npr.next != null) if(npr.next.value == undefined) npr.next = null
  return nl
}


module.exports = {
  removeKFromList
};

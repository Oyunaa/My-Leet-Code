/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let val1 = head;
    let val2 = head;
    
    if(head != null) {
          while(val2 != null && val2.next != null)  {
              
                val2 = val2.next.next;
              
                val1 = val1.next;
            }
    }
    
    return val1
};
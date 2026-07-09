/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let seen=new Set();
    let current=headB;
    while(current){
        seen.add(current);
        current=current.next;
    }
    let curr2=headA;
    while(curr2){
        if(seen.has(curr2)){
            return curr2
        }
        curr2=curr2.next;
    }
    return null
};
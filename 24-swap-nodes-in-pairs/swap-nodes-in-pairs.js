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
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let dummy=new ListNode();
    dummy.next=head;
    let current=head;
    let prev=dummy;
    let next=head.next
    while(current && next){
       prev.next=next;
       current.next=next.next;
       next.next=current;
       prev=current;
       current=prev.next;
       next= current && current.next;
    }
    return dummy.next
};
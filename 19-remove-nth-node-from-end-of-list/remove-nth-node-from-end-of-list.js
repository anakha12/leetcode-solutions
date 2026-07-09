/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length=0;
    let current=head;
    while(current){
        current=current.next;
        length++;
    }
    let deletNodeIndex=length-n;
   
    let dummy=new ListNode(); 
    dummy.next=head;
     let prev=dummy;
    current=head;
    for(let i=0;i<deletNodeIndex;i++){
        prev=current;
        current=current.next;
    }
    prev.next=current.next
    return dummy.next
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k==0) return head
    let length=1;
    let tail=head
    while(tail.next){
        length++;
        tail=tail.next;
    }
     k=k%length;
    if(k==0) return head;

     let current=head;
     
    for(let i=0;i<length-k-1;i++){
        current=current.next;
    }
   let start=current.next;
   current.next=null;
    tail.next=head;

   return start

};
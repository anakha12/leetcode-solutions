/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let prev=null;
    let current=slow;
    while(current){
        let next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    let firstList=head;
    let secondList=prev;
    while(secondList){
        if(firstList.val==secondList.val){
            firstList=firstList.next;
            secondList=secondList.next;
        }else{
            return false
        }
    }
    return true
};
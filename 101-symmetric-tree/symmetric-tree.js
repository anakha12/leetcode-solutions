/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let queue=[root.left,root.right];
    while(queue.length){
        let q1=queue.shift();
        let q2=queue.shift();
        if(q1==null && q2==null) continue
        if(q1==null || q2==null) return false
        if(q1.val !==q2.val) return false
        queue.push(q1.left,q2.right);
        queue.push(q1.right,q2.left);
    }
    return true
};
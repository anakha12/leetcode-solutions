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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    function traverse(cur,maxSeenSoFar){
        if(!cur) return
        if(cur.val >= maxSeenSoFar){
            maxSeenSoFar = cur.val;
            count++;
        }
        traverse(cur.left,maxSeenSoFar);
        traverse(cur.right,maxSeenSoFar);
    }
    traverse(root,root.val)
    return count
};
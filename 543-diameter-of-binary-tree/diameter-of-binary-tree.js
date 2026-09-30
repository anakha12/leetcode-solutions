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
var diameterOfBinaryTree = function(root) {
    let maxDepth=0;
    function findDepth(cur){
        if(!cur) return 0
        let leftDepth=findDepth(cur.left);
        let rightDepth=findDepth(cur.right);
        if(leftDepth+rightDepth>maxDepth) maxDepth=leftDepth+rightDepth;
         return 1+Math.max(leftDepth,rightDepth)
    }
    findDepth(root);
    return maxDepth
};
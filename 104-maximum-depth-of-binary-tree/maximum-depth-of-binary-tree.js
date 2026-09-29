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
var maxDepth = function(root) {
    if(!root) return 0
    let maxDepth=0;
    function traverse(cur,depth){
        maxDepth=Math.max(maxDepth,depth);
        cur.left && traverse(cur.left,depth+1);
        cur.right && traverse(cur.right,depth+1);
    }
    traverse(root,1);
    return maxDepth
};
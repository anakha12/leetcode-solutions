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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return 0;
    let ans=false;
    function traverse(cur,curSum){
        curSum+=cur.val;
        if(!cur.left && !cur.right){
            if(curSum==targetSum) ans=ans|| true;
        }
        cur.left && traverse(cur.left,curSum);
        cur.right && traverse(cur.right,curSum);

    }
    traverse(root,0);
    return ans
};
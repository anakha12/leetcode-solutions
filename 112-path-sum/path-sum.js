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
        let sum=curSum+cur.val;
        if(!cur.left && !cur.right){
            if(sum==targetSum) ans=ans|| true;
        }
        cur.left && traverse(cur.left,sum);
        cur.right && traverse(cur.right,sum);

    }
    traverse(root,0);
    return ans
};
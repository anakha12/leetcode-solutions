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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let ans=[];
        function traverse(curr,level){
            if(!curr) return
            if(ans[level] == undefined) ans[level]=curr.val;
            traverse(curr.right,level+1);
            traverse(curr.left,level+1);
        }
    traverse(root,0);
    return ans
};
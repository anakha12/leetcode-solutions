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
var preorderTraversal = function(root) {
    let ans=[];
    function traversal(node=root){
        if(node){
            console.log(ans.push(node.val));
            traversal(node.left);
            traversal(node.right)
        }
    }
    traversal()
    return ans
};
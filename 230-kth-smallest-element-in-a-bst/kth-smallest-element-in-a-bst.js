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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans=null;
    let count=0;
    const traversal=(node)=>{
        if(ans) return
        node.left && traversal(node.left);
        count++;
        if(count==k){
            ans=node.val;
        } 
        node.right && traversal(node.right)
    }
    traversal(root)
    return ans
};
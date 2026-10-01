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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans=null
    const traverse=(node)=>{
        if(node.val==val) ans=node;
        if(node.val<val){
            node.right && traverse(node.right)
        }else{
            node.left && traverse(node.left)
        }
    }
     traverse(root)
     return ans
};
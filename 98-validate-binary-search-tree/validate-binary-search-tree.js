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
var isValidBST = function(root) {
    const validate=(node,min,max)=>{
        if(!node) return true

        if(node.val<=min || node.val>=max) return false
       let isLeftBst=validate(node.left,min,node.val);
       let isRightBst=validate(node.right,node.val,max);

      
       return isLeftBst && isRightBst
    }
    return validate(root,-Infinity,+Infinity)
};
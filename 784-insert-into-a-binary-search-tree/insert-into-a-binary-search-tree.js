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
var insertIntoBST = function(root, val) {
    const node=new TreeNode(val);
    if(!root){
        return node
    }
    let current=root;
    while(true){
        if(current.val>val){
            if(!current.left){
                current.left=node;
                break
            }
            current=current.left;
        }else{
            if(!current.right){
                current.right=node;
                break
            }
            current=current.right;
        }
    }
    return root
};
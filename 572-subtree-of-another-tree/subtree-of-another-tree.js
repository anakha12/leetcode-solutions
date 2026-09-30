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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let hashRoot = serialize(root);
    let hasSubRoot = serialize(subRoot);

    return hashRoot.includes(hasSubRoot)
};

let serialize=function(root){
    let hash="";
    function traverse(curr){
        if(!curr){
            hash += "-#";
            return
        }
        hash = hash + "-" + curr.val;
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return hash
}
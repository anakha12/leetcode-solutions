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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let queue=[root];
    let result=[];
    while(queue.length){
        let levelArray=[];
        let levelSize=queue.length;
        for(let i=0;i<levelSize;i++){
            let current=queue.shift();
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
            levelArray.push(current.val);
        }
           result.push(levelArray);
    }
    return result
};
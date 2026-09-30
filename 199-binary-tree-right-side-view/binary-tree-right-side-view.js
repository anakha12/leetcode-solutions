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
    if(!root) return [];
    let q=[root];
    let ans=[];
    let level=0;
    while(q.length){
        let levelSize=q.length;
        for(let i=0;i<levelSize;i++){
            let current=q.shift();
            i==0 && ans.push(current.val);
            current.right && q.push(current.right);
            current.left && q.push(current.left);
        } 
    }
    return ans
};
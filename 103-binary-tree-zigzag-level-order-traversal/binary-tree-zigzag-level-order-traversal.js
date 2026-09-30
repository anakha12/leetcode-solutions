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
var zigzagLevelOrder = function(root) {
    
    if(!root) return []
    let queue = [root];
    let ans = [];
    let level = 1;

    while(queue.length){
        let levelArray = [];
        let levelSize = queue.length;

        for(let i = 0;i< levelSize;i++ ){
            let current = queue.shift();
            if(level%2 == 0){
                levelArray.unshift(current.val);
            }else{
                levelArray.push(current.val)
            }
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
        level++
        ans.push(levelArray)
    }
return ans
};
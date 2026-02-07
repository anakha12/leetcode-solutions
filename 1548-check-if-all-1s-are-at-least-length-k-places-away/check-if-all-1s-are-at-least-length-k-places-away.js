/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i] == 1){
            result.push(i)
        }
    }
    for(let i=1;i<result.length;i++){
        if(result[i] - result[i-1] <= k){
            return false
        }
    }
    return true
};
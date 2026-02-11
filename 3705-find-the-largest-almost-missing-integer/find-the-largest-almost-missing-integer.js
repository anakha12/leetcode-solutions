/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
   let count={};

   for(let i=0;i<=nums.length-k;i++){
    let sub = new Set();

    for(let j=i;j<i+k;j++){
        sub.add(nums[j]);
    }

    for(let num of sub){
        count[num] = (count[num] || 0)+1;
    }
   }
    let result =-1;
    for(let key in count){
        if(count[key] ==1){
            result = Math.max(Number(key), result)
        }
    }
    return result
};
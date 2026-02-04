/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let count={};
    let result =[]
    for(let num of nums){
        count[num] =(count[num] || 0)+1;
    }
   for(let key in count){
    if(count[key] ==1){
        result.push(Number(key))
    }
   }
   return result
};
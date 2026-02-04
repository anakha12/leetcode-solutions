/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let count={};
    let result =[]
    for(let num of nums){
        if(count[num] == undefined){
            count[num]=1;
        }else{
            count[num]++
        }
    }
   for(let key in count){
    if(count[key] ==1){
        result.push(Number(key))
    }
   }
   return result
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let count = {}
    for(let i=0;i<nums.length;i++){
        if(count[nums[i]]===undefined){
            count[nums[i]]=1;
        }else{
            count[nums[i]]++;
        }
    }
    let pair=0;
    let left=0;
    for(let num in count){
        pair += Math.floor(count[num]/2);
        left += count[num]%2
    }

    return [pair,left]
};
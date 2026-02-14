/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largest=-1;
    let index=-1;
    let second=-1
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest){
            second=largest;
            largest=nums[i];
            index=i;
        }else if(second < nums[i]){
            second = nums[i]
        }
    }
    if(largest >= second *2){
        return index
    }else{
        return -1
    }
};
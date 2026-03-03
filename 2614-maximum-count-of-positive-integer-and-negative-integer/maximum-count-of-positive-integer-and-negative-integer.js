/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let odd=0;
    let even=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            odd++;
        }else if(nums[i]!==0&&nums[i]>0){
            even++;
        }
    }
    console.log(odd,even)
    if(odd>even)return odd;
    return even;

};
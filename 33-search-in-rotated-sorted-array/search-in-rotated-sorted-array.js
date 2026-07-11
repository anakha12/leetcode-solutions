/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target,left=0,right=nums.length-1) {
    if(left>right) return -1
    let mid=left+Math.floor((right-left)/2);
    if(nums[mid]==target) return mid
    if(nums[left]<=nums[mid]){
       if(nums[left]<=target && target<nums[mid]){
        return search(nums, target,left,mid-1)
       }
       return search(nums, target,mid+1,right)
    }else{
        if(nums[mid]<target && target<=nums[right]){
            return search(nums, target,mid+1,right)
        }
         return search(nums, target,left,mid-1)
    }
};
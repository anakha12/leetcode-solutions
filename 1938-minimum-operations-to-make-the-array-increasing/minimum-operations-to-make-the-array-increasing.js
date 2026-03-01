var minOperations = function(nums) {
    let operations = 0;
    let prev = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= prev) {
            operations += (prev + 1 - nums[i]); 
            nums[i] = prev + 1;              
        }
        prev = nums[i];                     
    }

    return operations;
};
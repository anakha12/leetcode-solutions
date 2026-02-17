/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freq = new Map();
    
    // Step 1: Count frequency
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    // Step 2: Custom sort
    nums.sort((a, b) => {
        if (freq.get(a) === freq.get(b)) {
            return b - a; // Same frequency → descending number
        }
        return freq.get(a) - freq.get(b); // Increasing frequency
    });
    
    return nums;
};

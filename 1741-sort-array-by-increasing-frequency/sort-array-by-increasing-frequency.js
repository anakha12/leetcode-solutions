/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let frquency={}
    for(let num of nums){
        if(frquency[num]==undefined){
            frquency[num]=1;
        }else{
            frquency[num]++
        }
    }
    nums.sort((a,b)=>{
        if(frquency[a] == frquency[b]){
            return b-a
        }
        return frquency[a]-frquency[b]
    })
   return nums
};
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let c=new Set(candyType);
    if(candyType.length/2 < c.size)return candyType.length/2
    return c.size;
};
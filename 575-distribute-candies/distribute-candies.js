/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let c=[...new Set(candyType)]
    if(candyType.length/2 < c.length)return candyType.length/2
    return c.length;
};
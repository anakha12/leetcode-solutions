/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1) return true
    if(n<1 || n%2!==0) return false
    n=n/2;
    return isPowerOfTwo(n)
};
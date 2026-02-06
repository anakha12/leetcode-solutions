/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign= x<0? -1:1;
    let reversed= Number(Math.abs(x).toString().split('').reverse().join(""));
   
   let result= sign*reversed
   if(result < -(2**31) || result > (2 ** 31- 1)){
    return 0
   }
   return result
};
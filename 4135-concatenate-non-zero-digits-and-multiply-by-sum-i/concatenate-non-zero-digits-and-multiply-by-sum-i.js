/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    if(n==0) return 0
    let x=n.toString().split("");
    let result="";
    let sum=0;
   for(let num of x){
    if(Number(num)!==0){
        result+=num;
        sum+=Number(num)
    }
    
   }
   console.log(result)
   return result*sum;
};
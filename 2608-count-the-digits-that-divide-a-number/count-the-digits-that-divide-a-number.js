/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let str=num.toString();
    let count=0;
    for(let s of str){
        if(num%Number(s)==0){
            count++;
        }
    }
    return count
};
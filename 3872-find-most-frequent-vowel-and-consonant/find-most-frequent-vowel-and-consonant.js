/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let countV={}
    let countC={}
    let v= new Set("aeiou")
    for(let char of s){
        if(v.has(char)){
           countV[char] = (countV[char] || 0)+1
        }else{
            countC[char] = (countC[char] || 0)+1
        }
    }
    let largestV = Math.max(...Object.values(countV),0);
    let largestC = Math.max(...Object.values(countC),0);
    return largestV+largestC
};
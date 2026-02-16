/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let str = s.split("");
    let countV={}
    let countC={}
    let v="aeiou"
    for(let i=0;i<str.length;i++){
        if(v.includes(str[i])){
           countV[str[i]] = (countV[str[i]] || 0)+1
        }else{
            countC[str[i]] = (countC[str[i]] || 0)+1
        }
    }
    let largestV = Math.max(...Object.values(countV),0);
    let largestC = Math.max(...Object.values(countC),0);
    return largestV+largestC
};
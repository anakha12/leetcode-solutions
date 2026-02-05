/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    let numm1=num1.toString().padStart(4, "0");
    let numm2=num2.toString().padStart(4, "0");
    let numm3=num3.toString().padStart(4, "0");

    let result=""
    for(let i=0;i<4;i++){
        result+=Math.min(numm1[i], numm2[i], numm3[i])
    }
    return Number(result)
};
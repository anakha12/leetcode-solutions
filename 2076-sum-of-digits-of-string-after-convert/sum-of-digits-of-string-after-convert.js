/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    
    let sum = 0;
    
    for (let char of s) {
        let value = char.charCodeAt(0) - 96; 
        while (value > 0) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
    }
    
    for (let i = 1; i < k; i++) {
        let temp = 0;
        while (sum > 0) {
            temp += sum % 10;
            sum = Math.floor(sum / 10);
        }
        sum = temp;
    }
    
    return sum;
};
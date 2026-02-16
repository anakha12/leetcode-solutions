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
            if(!countV[str[i]]){
                countV[str[i]] = 1
            }else{
                countV[str[i]]++
            }
        }else{
            if(!countC[str[i]]){
                countC[str[i]] = 1
            }else{
                countC[str[i]]++
            }
        }
    }
    let largest=0;
    for(let char in countV){
        if(countV[char] > largest){
            largest=countV[char]
        }
    }
    let lar=0;
    for(let char in countC){
        if(countC[char] > lar){
            lar=countC[char]
        }
    }
    return largest+lar
};
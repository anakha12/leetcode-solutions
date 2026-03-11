/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vow=[];
    let v="aeiouAEIOU"
    for(let i=0;i<s.length;i++){
        if(v.includes(s[i])){
            vow.push(s[i])
        }
    }
   vow=vow.reverse();
   let result=""
   let c=0;
   for(let i=0;i<s.length;i++){
    if(v.includes(s[i])){
        result+=vow[c];
        c++;
    }else{
        result+=s[i]
    }
   }
   return result
};
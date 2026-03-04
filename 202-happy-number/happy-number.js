/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen =new Set()
    while(n!==1){
        if(seen.has(n)) return false
        seen.add(n)
        let str =n.toString();
        let s=0;
       
        for(let char of str){
             s+=Number(char*char);
        }
      
        n=s
    }
    return true
};
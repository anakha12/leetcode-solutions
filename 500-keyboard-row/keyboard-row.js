/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let first= new Set("qwertyuiopQWERTYUIOP");
    let second= new Set("asdfghjklASDFGHJKL");
    let third=new Set("zxcvbnmZXCVBNM");
    let result=[]
    for(let word of words){

        let row;
        if(first.has(word[0])) row=first;
        else if(second.has(word[0])) row =second;
        else row=third;
        let valid=true;

        for(let char of word){
            if(!row.has(char)){
                valid=false;
                break
            }
        }
         if(valid) result.push(word)
    }
   return result
};
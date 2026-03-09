/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
   let result=[];
    for(let word of words){
      let arr=word.split(separator);
      for(let a of arr){
        if(a!==""){
            result.push(a)
        }
      }
    }
   return result
};
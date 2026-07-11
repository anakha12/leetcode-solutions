/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x,left=0,right=Math.floor(x/2)) {
    if(x<2) return x;
    let mid=Math.floor((left+right)/2);
    if(left>right) return right
    if(mid*mid==x) return mid;
    if(mid*mid<x){
        return mySqrt(x,mid+1,right)
    }else{   
        return mySqrt(x,left,mid-1)
    }
};
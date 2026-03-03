/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
    for(let row of grid){
        for(let i=0;i<row.length;i++){
            if(row[i]<0){
                count++;
            }
        }
    }
    return count
};
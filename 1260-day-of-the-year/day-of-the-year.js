/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [yearStr, monthStr, dayStr] =date.split("-");
    let year=Number(yearStr);
    let month=Number(monthStr);
    let day=Number(dayStr)
    let daysinMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(year%4==0 && year % 100 !== 0 || year%400==0){
        daysinMonth[1]=29
    }
    let total=0;
    for(i=0;i<month-1;i++){
        total+=daysinMonth[i];
    }
    total+=day
    return total
};
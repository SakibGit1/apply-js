// function isLeapYear(year){
//     const reminder = year % 4;
//     if (reminder === 0){
//         return true
//     }
//     else{
//       return false
//     }
// }
// const myYear = isLeapYear(1999);
// const yourYear = isLeapYear(1952);
// console.log(myYear)
// console.log(yourYear)


// chatgpg diye 
function isLeapYear(year) {
    if (year % 4 === 0) 
    if (year % 100 !== 0 || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
 console.log(isLeapYear(1952))
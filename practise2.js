// find odd number just:
// function findOddNumbers(arr) {
//         let result = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]% 2 !==0){
//             result.push(arr[i]);
//         }
//     } return result;
//   }
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const oddNumbers = findOddNumbers(numbers);
//   console.log("Odd numbers:", oddNumbers); // Output: Odd numbers: [1, 3, 5, 7, 9]
  



// find odd Number sum:
// function sumOfOdd(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]% 2 !==0){
//             sum = sum + arr[i];
//         }
        
//     }
//     return sum;
// }
// const numbers = [1,2,3,4,5]
// const oddSum = sumOfOdd(numbers);
// console.log(oddSum);


// leap year:
function findLeapYear(year){
    // let leapYear = 0;
   let hereleepYear = []
    for(let i =0; i<year.length; i++){
        if((year[i] % 4 === 0 && year[i] % 100 !==0) || (year[i] % 400 ===0)){
            // leapYear = year[i]
            hereleepYear.push(year[i])
        }
    }
    return hereleepYear;
}
const years = [2000, 2001, 1900, 1952, 2004]
const leapYearAre = findLeapYear(years)
console.log('these years are leap year:',leapYearAre);
// console.log(leapYearAre.join(", "))       //koma diye ekta ekta dekthe hole
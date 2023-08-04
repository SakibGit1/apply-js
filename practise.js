// // task 1 
// function hoursToMIn(hours){
//     result = hours*60;
//     return result;
// }
// console.log(hoursToMIn(2))
// // 
// function minsToHours(mins){
//     result = mins/60;
//     return result;
// }
// console.log(minsToHours(180))

// task 2

function factorial(numbers){
    let result = 1;
    for(let i = numbers; i >= 1; i-- ){
        // console.log(i)
        result = result * i;
    }
    return result;
}

// console.log(factorial(6));


// task 3

function oddNumSum(numbers){
     let sum = 0;
     for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];   
        sum = sum + element;
        // console.log(index, element, sum);
     }
     return sum
}

function getOddNums(numbers){
      const foundOddNums = [];
     for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[i];
        
        if(element %2 !== 0){
            // console.log(index, element)
            foundOddNums.push(element)
        }
     }
     return foundOddNums;
}

const num = [34, 53, 55, 62, 52, 97, 90];
const findOdd = getOddNums(num);
console.log(findOdd)
// final result
const findOddSum = oddNumSum(findOdd);
console.log(findOddSum);

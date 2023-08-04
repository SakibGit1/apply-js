function getSum(numbers){
        let sum = 0;
    for(let i = 0; i < numbers.length; i++ ){
        const index = i;
        const element = numbers[index]
        sum = sum + element
        // console.log(index, element, sum)
    }
    return sum;
}

// find odd numbers:
function getOdd(numbers){
    const OddNumbers = []
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index]
        if(element % 2 !==0){
            console.log(index, element)
            OddNumbers.push(element);
        }
        
    }
    return OddNumbers;
}

const myNumbers = [10, 20, 23, 25, 30, 40,33, 50]
const oddNumbers = getOdd(myNumbers)
console.log(oddNumbers)

const oddNumberSum = getSum(oddNumbers)
console.log('odd number sum :', oddNumberSum)





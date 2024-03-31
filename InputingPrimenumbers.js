// The following are arrays given to determine which are prime numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const length = array.length; 
console.log(length);
// filter to accurately identify the prime numbers
const PrimeNumbers = array.filter(num => {
    for(let i = 2; i < num; i++){
        while(num % i == 0)
         return false;
    }
    return num > 1;
});
// console to get the prime numbers
console.log(PrimeNumbers)





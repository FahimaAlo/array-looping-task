// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     }
// }

// console.log(evenNumbers);  

// for of....
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log(evenNumbers);  // Output: [12, 98, 78, 46]


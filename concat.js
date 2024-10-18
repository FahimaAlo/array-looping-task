var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatenatedString = '';

for (var name of numbers) {
    concatenatedString += name;  // Concatenate each element
}

console.log(concatenatedString);  // Output: 'TomTimTinTik'



const greatest = (a, b, c) => Math.max(a, b, c);

console.log(greatest(10, 45, 30)); // 45



const isPalindrome = num => {
    const str = num.toString();
    return str === [...str].reverse().join('');
};

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 



const convertCurrency = (amount, rate) => amount * rate;

console.log(convertCurrency(100, 83.5)); // Example: USD to INR



const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

console.log(add(10, 5));       
console.log(subtract(10, 5)); 
console.log(multiply(10, 5)); 
console.log(divide(10, 5));    
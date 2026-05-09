// 1. Swap Two Numbers Without Using Third Variable
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("After Swapping:");
console.log("a =", a);
console.log("b =", b);




// 2. Check Data Type of a Value
const value = null;

let type;

if (value === null) {
    type = "null";
} else {
    type = typeof value;
}

console.log("\nData Type:", type);




// 3. Celsius to Fahrenheit Conversion
const celsius = 37;

const fahrenheit = (celsius * 9/5) + 32;

console.log(`\n${celsius}°C = ${fahrenheit}°F`);




// 4. Simple Calculator Using Variables
const num1 = 15;
const num2 = 5;

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;

console.log("\nCalculator Results:");
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);




// 5. Calculate Age from Birth Year
const birthYear = 2004;

const currentYear = new Date().getFullYear();

const age = currentYear - birthYear;

console.log(`\nAge: ${age} years`);

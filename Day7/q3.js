// 1. Generate Random Number Between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random Number:", randomNumber);



// 2. Check Whether a Number is Prime
const number = 17;

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {

    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(`\n${number} is ${isPrime ? "a Prime Number" : "Not a Prime Number"}`);



// 3. Find Factorial of a Number Using Loops
const n = 5;

let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`\nFactorial of ${n}:`, factorial);




// 4. Fibonacci Series up to n Numbers
const terms = 10;

let first = 0;
let second = 1;

console.log("\nFibonacci Series:");

for (let i = 1; i <= terms; i++) {

    console.log(first);

    const next = first + second;
    first = second;
    second = next;
}




// 5. Check Whether a Number is Armstrong Number
const armstrongNumber = 153;

const digits = armstrongNumber.toString().split("");

const power = digits.length;

const sum = digits.reduce(
    (total, digit) => total + digit ** power,
    0
);

const isArmstrong = sum === armstrongNumber;

console.log(
    `\n${armstrongNumber} is ${
        isArmstrong ? "an Armstrong Number" : "Not an Armstrong Number"
    }`
);


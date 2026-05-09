// 1. Star Pyramid Pattern
const rows = 5;

for (let i = 1; i <= rows; i++) {
    console.log(" ".repeat(rows - i) + "* ".repeat(i));
}

/*
Output:
    *
   * *
  * * *
 * * * *
* * * * *
*/


// 2. Multiplication Tables from 1 to 10
for (let i = 1; i <= 10; i++) {

    console.log(`\nTable of ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

/*
Output:
Table of 1
1 x 1 = 1
1 x 2 = 2
...
1 x 10 = 10

Table of 2
2 x 1 = 2
...
*/


// 3. Sum of All Even Numbers Between 1 and 100
let evenSum = 0;

for (let i = 2; i <= 100; i += 2) {
    evenSum += i;
}

console.log("\nSum of Even Numbers:", evenSum);

/*
Output:
Sum of Even Numbers: 2550
*/


// 4. Print All Prime Numbers Between 1 and 100
console.log("\nPrime Numbers Between 1 and 100:");

for (let num = 2; num <= 100; num++) {

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

/*
Output:
2
3
5
7
11
13
...
97
*/


// 5. Number Guessing Game (Node.js)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {

    rl.question("\nGuess a number between 1 and 10: ", (input) => {

        const guess = Number(input);

        if (guess > secretNumber) {

            console.log("Too High!");
            guessNumber();

        } else if (guess < secretNumber) {

            console.log("Too Low!");
            guessNumber();

        } else {

            console.log("Correct! You guessed the number.");
            rl.close();
        }
    });
}

guessNumber();

/*
Example Output:

Guess a number between 1 and 10: 4
Too Low!

Guess a number between 1 and 10: 8
Too High!

Guess a number between 1 and 10: 6
Correct! You guessed the number.
*/
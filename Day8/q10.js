
const add = (a,b) => a+b;
console.log("Add:",add(10,5));
const square = x => x*x;
const greet = name => `Hello ${name}`;
const isAdult = age => age >= 18;
console.log(square(4));
console.log(greet("Anisha"));
console.log(isAdult(20));
const nums = [1, 2, 3, 4, 5];

const squares = nums.map(x => x * x);

console.log("Squares:", squares);

const isEven = n => n%2  === 0;
console.log("1o is",isEven(10) ? "Even":"Odd");
console.log("7 is",isEven(7) ? "Even":"Odd");
const getGrade = marks => 
    marks >= 95 ? "A+":
    marks >= 75 ? "A":
    marks >= 60 ? "B":
    marks >= 40 ? "C":"Fail";
    console.log("Grade 95:",getGrade(95));
    console.log("Grade 80.",getGrade(80));
    console.log("Grade 35:",getGrade(35));


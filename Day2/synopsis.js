
// conditional 
console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a == b:", a == b); 
console.log("a != b:", a != b); 
console.log("a >= b:", a >= b); 
console.log("a <= b:", a <= b); 



// switch case

switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}
// typeof

console.log(typeof choice, typeof a, typeof b, typeof str, typeof obj, typeof arr); 
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(typeof element === "number") {
        console.log(element, "is a number");
    }
}
// concatenation
let d = "Hello " + a +"," + b + " and " + c + "!"; 

// Template literals
let e = `Hello ${a}, ${b} and ${c}!`;



 // Arrow function for addition

let sum = (x, y) => x + y;
// Using filter ,typeof,map
arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));
// floor function
 console.log(Math.floor(Math.random() * 100) + 1);
 // Arrow function is represented by =>
    
// Using of parseInt,parseFloat
let val = "0.6";
console.log(parseInt(val)); 
console.log(parseFloat(val)); 
//unshift
colors.unshift("orange");  // add starting
//shift
colors.shift();  // remove starting
// using of splice
console.log(colors.splice(1, 3));

// 1. Basic Operations
// Math → + - * / % (used for calculations)
// Comparison → > < == != >= <= (used in conditions)
// Type check → typeof (tells data type)
// 2. Strings
// length → number of characters
// toUpperCase() / toLowerCase() → change case
// substring(start,end) → get part of string
// 3. Variables Structures
// Object: stores data in key-value → {name: "Alice"}
// Array: stores multiple values → [1,2,3]
// 4. Functions
// Normal → function(){}
// Arrow → (x,y) => x+y (short and modern)
// 5. Conditions
// if-else → decision making
// switch → multiple choices
// 6. Array Usage
// forEach() → loop through array
// map() → create new array (modify values)
// filter() → select specific values
// 7. Important Utilities
// Template literals → `Hello ${name}`
// Random → Math.random()
// Round → Math.floor(), Math.ceil()
// Type convert → parseInt()
// 8. Common Array Methods
// push() → add at end
// pop() → remove from end
// unshift() → add at start
// shift() → remove from start
// indexOf() → find position
// includes() → check value
// splice() → removes last item
// map(Number) → converts string → number
// reduce() → adds all values
const total = prices.reduce((acc, curr) => { return acc + curr }, 0);
// Template literal → prints nicely

// 1. DOM Manipulation
//  What is DOM?

//  DOM = Document Object Model

//  It means:
// HTML page is converted into objects (elements) that JavaScript can control

//  What is DOM Manipulation?

//  Using JavaScript to change HTML or CSS dynamically

//  Example HTML
// <p id="text">Hello</p>
// <button onclick="changeText()">Click</button>

// reduce() Function
//  What is reduce()?

//  Used to convert an array into a single value

//  Syntax
// array.reduce((accumulator, current) => result, initialValue);
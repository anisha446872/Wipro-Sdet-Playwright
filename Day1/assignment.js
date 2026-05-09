//1 The Swapper: Create two variables, a and b, and assign them numbers. Write a few lines of code to swap their values so that a gets b's value and vice-versa.
let a = 10;
let b = 20;

console.log("Before Swap: a =", a, ", b =", b);


let temp = a;   
a = b;      
b = temp;  

console.log("After Swap: a =", a, ", b =", b);

//2 Type Checker: Write a function that takes one input and console.log's a message saying "This is a number" or "This is a string" based on the data type provided.
 
function typeChecker(input) {
    if (typeof input === 'number') {
        console.log("This is a number");
    } else if (typeof input === 'string') {
        console.log("This is a string");
    } else {
        console.log("This is neither a number nor a string");
    }
}


typeChecker(42);      
typeChecker("Hello");   
typeChecker(true);    
//3 Initials Creator: Given a variable let fullName = "John Doe", write code to extract the first letter of the first name and the first letter of the last name to create the string "JD".

 let fullName = "John Doe";

let parts = fullName.split(" ");

let initials = parts[0][0].toUpperCase() + parts[1][0].toUpperCase();


console.log(initials);

//4 The Cleaner: Given the string let messy = " Javascript is fun ", write a single line of code that removes the extra spaces at the start/end and changes all the letters to lowercase.
let messy = " Javascript is fun ";

let clean = messy.trim().toLowerCase();

console.log(clean); 

//5 The Grocery List: Create an array called cart with three items. Write code to add "Milk" to the end, "Eggs" to the beginning, and then remove the very last item you just added.

let cart = ["Bread", "Butter", "Cheese"];

cart.push("Milk");  


cart = ["Eggs", ...cart];


cart.pop();

console.log(cart);  

//6-->  Value Finder: Given let numbers = [10, 20, 30, 40, 50], write a line of code that checks if the number 30 exists in the array (returning true or false) and another line to find the index of the number 50.

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30)); // true
console.log(numbers.indexOf(50));  // 4
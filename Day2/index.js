let a = "Aryan";
let b = "arush";
let c = "arushi";
let d = "Hello " + a +"," + b + " and " + c + "!"; // concatenation
 console .log(d);
let e = `Hello ${a}, ${b} and ${c}!`; // Template literals
 let f = `The length of a is ${a.length * 2}`;
console.log(e);
console.log(f);
 function table(num){
    let result = "";
   for (let i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + (num * i)); // Using string concatenation
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}
// console.log(table(5)); // Displays the multiplication table for 5
// function sum(a, b) {
//     return a + b;
// }

// let sum1 = sum(5, 10);
let sum = (x, y) => x + y; // Arrow function for addition
console.log("Sum of 5 and 10:", sum(5, 10)); // 15

let arr = [1, 2, 3, 4, 5, "Aaryan"];

// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });

arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));
//arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after *2:", abc * 2));
// console.log(arr.find(x => x === "Aaryan1")); 
// Arrow function is represented by =>

 

    console.log(Math.floor(Math.random() * 100) + 1);


let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

let val = "0.6";
console.log(parseInt(val)); 
console.log(parseFloat(val)); 


let colors = ["pink", "white", "sky"];
console.log(colors.indexOf("yellow")); 
console.log(colors.includes("yellow")); 
console.log(colors.length); 
console.log(colors[3]); 
console.log(colors[colors.length - 1]); 
colors.push("yellow"); 
console.log(colors); 
colors.pop(); 
console.log(colors); 
colors.unshift("orange"); 
console.log(colors); 
colors.shift(); 
console.log(colors); 


console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));


const prices = [10, 20, 30, 40]; 


const total = prices.reduce((acc, curr) => { return acc + curr }, 0);

console.log(total);


const fruitBasket = ['orange', 'kiwi', 'cherry', 'orange', 'orange', 'kiwi', 'pineapple']; 1
const tally = fruitBasket.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); 
console.log(tally);




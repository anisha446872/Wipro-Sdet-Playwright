let a =10;
let b=a;
b=20;
console.log("Primitive Values");
console.log("a =",a);
console.log("b=",b);
 
const user1 ={
    name:"Anisha",
    age:21
};
const user2 = user1;
user2.age = 25;
console.log("\nObject Reference:");
console.log("user1 =",user1);
console.log("user2 =",user2);

const originalUser ={
    name:"Rahul",
    city:"Patna"
};
const clonedUser = {...originalUser};
clonedUser.city = "Delhi";
console.log("\nCloned Object:");
console.log("original =",originalUser);
console.log("Clone =",clonedUser);

const arr1 =[1,2,3];
const arr2 = [1,2,3];
const arr3 = arr1;
console.log("\nArray Comparison:");
console.log("arr1 === arrr2:",arr1 === arr2);
console.log("arr1 === arr3:" ,arr1 === arr3);

const originalArray = [10,20,30];
const copiedArray = [...originalArray];
copiedArray.push(40);
console.log("\nShallow Copy:");
console.log("Original Array =", originalArray);
console.log("Copied array =",copiedArray);
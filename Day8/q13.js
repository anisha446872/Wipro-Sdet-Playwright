let x = 10;
let y = x;
y=20;
console.log("x =",x);
console.log("y=",y);
const user1 = {
    name:"Anisha"
};
const user2 = user1;
user2.name = "Rahul";
console.log("user1 =",user1);
console.log("user =",user2);

const student ={
    name:"Priya",
    marks:80
};
function updateMarks(obj){
    obj.marks = 95;
}
updateMarks(student);
console.log(student)

let a=5;
let b = a;
b= 15;
const arr1 =[1,2];
const arr2 = arr1;
arr2.push(3);
console.log(a);
console.log(b);
console.log(arr1);
console.log(arr2);



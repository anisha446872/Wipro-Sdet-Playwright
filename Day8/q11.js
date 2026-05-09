const numbers = [1,2,3,4,5];
const doubledNumbers = numbers.map(num => num*2);
console.log("Doubled Numbers:",doubledNumbers);

    const students = [
        {name:"Anisha",marks:92},
        {name:"Rahul",marks:75},
        {name:"Priya",marks:88},
        {name:"Amit",marks:67}
    ];
    const topStudents = students.filter(student =>
        student.marks > 80);
        console.log("Students Above 80:",topStudents);
        const fruits = ["Apple","Banana","Mango","Orange"];
        console.log("Fruits:");
        fruits.forEach(fruit => console.log(fruit));
        
        const names = ["anisha","rahul","priya"];
        const upperCaseNames = names.map(name =>
            name.toUpperCase()
        );
        console.log("UpperCase Names:",upperCaseNames);
        const nums = [1,2,3,4,5,6,7,8];
        const evenNumbers = nums.filter(num => num % 2 === 0);
        console.log("Even Numbers:",evenNumbers);
    
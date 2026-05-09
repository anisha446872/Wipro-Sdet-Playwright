// 1. Student Object and Display Properties Dynamically
const student = {
    name: "Anisha",
    age: 21,
    course: "B.Tech",
    city: "Samastipur"
};

console.log("Student Details:");

for (let key in student) {
    console.log(`${key} : ${student[key]}`);
}



// 2. Count Number of Keys in an Object
const employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 50000
};

const keyCount = Object.keys(employee).length;

console.log("\nNumber of Keys:", keyCount);


// 3. Merge Two Objects into One
const obj1 = {
    name: "Anisha",
    age: 21
};

const obj2 = {
    city: "Delhi",
    country: "India"
};

const mergedObject = { ...obj1, ...obj2 };

console.log("\nMerged Object:");
console.log(mergedObject);



// 4. Convert Object into Array of Keys and Values
const user = {
    id: 1,
    username: "admin",
    role: "Manager"
};

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

console.log("\nKeys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);



// 5. Shopping Cart Object and Total Bill Calculation
const shoppingCart = {
    items: [
        { name: "Laptop", price: 50000, quantity: 1 },
        { name: "Mouse", price: 1000, quantity: 2 },
        { name: "Keyboard", price: 2000, quantity: 1 }
    ]
};

const totalBill = shoppingCart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

console.log("\nTotal Bill Amount:", totalBill);


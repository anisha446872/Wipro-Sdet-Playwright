// 1. Convert JSON String into Object
const jsonString = '{"name":"Anisha","age":21,"city":"Samastipur"}';

const objectData = JSON.parse(jsonString);

console.log("Converted Object:");
console.log(objectData);




// 2. Convert Object into JSON String
const student = {
    name: "Rahul",
    age: 22,
    course: "B.Tech"
};

const jsonData = JSON.stringify(student);

console.log("\nJSON String:");
console.log(jsonData);



// 3. Parse API-like JSON Data and Display Values
const apiResponse = `{
    "status": "success",
    "data": {
        "id": 101,
        "name": "Laptop",
        "price": 50000
    }
}`;

const parsedData = JSON.parse(apiResponse);

console.log("\nProduct Details:");
console.log("ID:", parsedData.data.id);
console.log("Name:", parsedData.data.name);
console.log("Price:", parsedData.data.price);




// 4. Create JSON Array of Employee Records
const employees = [
    {
        id: 1,
        name: "Anisha",
        department: "IT",
        salary: 40000
    },
    {
        id: 2,
        name: "Rahul",
        department: "HR",
        salary: 35000
    },
    {
        id: 3,
        name: "Priya",
        department: "Finance",
        salary: 45000
    }
];

console.log("\nEmployee Records:");
console.log(employees);




// 5. Filter JSON Data Based on Conditions
const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 12000 }
];

const filteredProducts = products.filter(product => product.price > 5000);

console.log("\nFiltered Products:");
console.log(filteredProducts);



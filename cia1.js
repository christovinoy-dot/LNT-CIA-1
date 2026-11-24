// ============================================
// CIA - 1
// Server Integration and MongoDB Connectivity
// Name: Christo Vinoy
// Register Number: 2462058
// ============================================


// Q1. Create a JSON Object
console.log("\nQ1. Create a JSON Object");

let student1 = {
    name: "Arun",
    age: 25,
    department: "IT"
};
console.log(student1);
// Q2. Access JSON Properties
console.log("\nQ2. Access JSON Properties");
let student2 = {
    name: "Priya",
    age: 22,
    city: "Bangalore"
};
console.log("Name:", student2.name);
console.log("City:", student2.city);
// Q3. Convert JSON into JavaScript Object
console.log("\nQ3. Convert JSON into JavaScript Object");
let student3 = '{"name":"Ravi","age":24}';
let obj = JSON.parse(student3);
console.log("Student Name:", obj.name);


// Q4. Convert JavaScript Object into JSON
console.log("\nQ4. Convert JavaScript Object into JSON");

let student4 = {
    name: "Arun",
    age: 25,
    city: "Bangalore"
};

let jsonData = JSON.stringify(student4);

console.log(jsonData);


// Q5. Create a Simple XML Document
console.log("\nQ5. Create a Simple XML Document");

let xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<student>
    <name>Kumar</name>
    <age>23</age>
    <department>CSE</department>
</student>`;

console.log(xmlData);


// Q6. Fetch User Name
console.log("\nQ6. Fetch User Name");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log("User Name:", data.name);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


// Q7. Fetch User Phone Number
console.log("\nQ7. Fetch User Phone Number");

fetch("https://jsonplaceholder.typicode.com/users/3")
    .then(response => response.json())
    .then(data => {
        console.log("Phone Number:", data.phone);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


// Q8. Display Multiple Users
console.log("\nQ8. Display Multiple Users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            console.log(user.name);
        });
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


// Q9. Fetch Company Information
console.log("\nQ9. Fetch Company Information");

fetch("https://jsonplaceholder.typicode.com/users/4")
    .then(response => response.json())
    .then(data => {
        console.log("Company Name:", data.company.name);
        console.log("Website:", data.website);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });


// Q10. Handle Errors Using Fetch API
console.log("\nQ10. Handle Errors Using Fetch API");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("User Name:", data.name);
    })
    .catch(error => {
        console.log("Error fetching data:", error.message);
    });
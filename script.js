
console.log("---- Task 1: E-commerce Cart ----");

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];


let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
console.log("Total Price:", total);


let costly = cart.filter(item => item.price > 1000);
console.log("Above 1000:", costly);


let names = cart.map(item => item.name.toUpperCase());
console.log("Uppercase Names:", names);



console.log("---- Task 2: Students ----");

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];


let failed = students.filter(s => s.marks < 50);
console.log("Failed:", failed);


console.log("Any >80:", students.some(s => s.marks > 80));


console.log("All Passed:", students.every(s => s.marks > 35));


console.log("First Failed:", students.find(s => s.marks < 50));



console.log("---- Task 3: Employees ----");

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];


let increased = employees.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));
console.log("Increased Salary:", increased);


console.log("High Salary:", employees.filter(e => e.salary > 30000));


let totalSalary = employees.reduce((acc, e) => acc + e.salary, 0);
console.log("Total Salary:", totalSalary);


let sorted = [...employees].sort((a,b) => b.salary - a.salary);
console.log("Sorted:", sorted);



console.log("---- Task 4: Strings ----");

let products = ["Laptop", "Mobile", "Tablet", "Camera"];


console.log("Has Mobile:", products.includes("Mobile"));


let lower = products.map(p => p.toLowerCase());
console.log("Lowercase:", lower);


console.log("Index of Tablet:", products.indexOf("Tablet"));

// Join
console.log("Joined:", products.join("-"));



console.log("---- Task 5: Age ----");

let dob = 2000;
let age = new Date().getFullYear() - dob;
console.log(`You are ${age} years old`);


console.log("---- Task 6: Login ----");

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let username = "admin";
let password = "1234";

let user = users.find(u => u.username === username && u.password === password);

if(user){
  console.log("Login Success ✅");
} else {
  console.log("Invalid Credentials ❌");
}


console.log("---- Task 7: Numbers ----");

let numbers = [10, 15, 20, 25, 30];


console.log("Even:", numbers.filter(n => n % 2 === 0));


console.log("Any Odd:", numbers.some(n => n % 2 !== 0));


console.log("All Even:", numbers.every(n => n % 2 === 0));


console.log("First >20:", numbers.find(n => n > 20));



console.log("---- Bonus Task ----");

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];


let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((acc, o) => acc + o.amount, 0);

console.log("Delivered Revenue:", revenue);


console.log("Pending:", orders.filter(o => o.status === "pending"));

console.log("Any >1000:", orders.some(o => o.amount > 1000));


let sortedOrders = [...orders].sort((a,b) => a.amount - b.amount);
console.log("Sorted Orders:", sortedOrders);
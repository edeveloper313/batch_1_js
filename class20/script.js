// scoped variables
let a = 10;
const c = 100;
var b = 50;

function num() {
  let a = 20;
  console.log(a);
}

for (let a = 0; a <= 5; a++) {
  console.log(a);
}
console.log(a);
console.log(b);

num();

// Array

const students = ["Ali", "Ahmed", "Sara", "Zain", "Kamran"];

const femalename = students[2];
console.log(students);

const arrMethods = students.length;

const arrLength = students.length;
const lastname = students[arrLength - 1];
console.log(lastname);
console.log("Total students:", students.length);

// push - Array ke last me element add kar data he.

const products = ["Laptop", "Mouse"];

let newProdcut = prompt("Enter Your Product.");
products.push(newProdcut);

for (const eachProdcut of products) {
  console.log(eachProdcut);
}

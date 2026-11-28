let staf = ["kamran", "uzair", "Fatima", "Ahmed", "sara"];

console.log(`Total Staf: ${staf.length}`);
let newStaf = undefined;
let addStaf = () => {
  newStaf = prompt("Enter a new staf");
};
// addStaf();

staf.push(newStaf);

let count = 1;

for (const element of staf) {
  console.log(`${count}. ${element}`);
  count = ++count;
}

// pop - Array ke last element ko remove karta hai.

const cart = ["Laptop", "Mouse", "Keyboard"];

cart.pop();

console.log(cart);

// shift() - Array ke first element ko remove karta hai.

const queue = ["Ali", "Ahmed", "Sara"];

queue.shift();

console.log(queue);

// unshift() - Array ke start mein element add karta hai.

const notifications = ["Message 1", "Message 2"];

notifications.unshift("New notification");

console.log(notifications);

// slice() - Array ka specific portion copy karta hai. Original array change nahi hota.

const products = ["Laptop", "Mouse", "Keyboard", "Mobile"];

const result = products.slice(0, 2);

console.log(result);
console.log(products);

let js = "javascript";

console.log(js.slice(0, 4));

// splice() - Array mein elements remove, replace ya insert karta hai. Original array modify hota hai.

// Syntax: array.splice(start, deleteCount, inserting-items);

const users = ["Ali", "Ahmed", "Sara"];

users.splice(0, 1, "Kamran");

console.log(users);

// concat() - Do ya zyada arrays ko combine karta hai.

const frontend = ["HTML", " CSS"];
const backend = ["Node.js", " Express"];

const skills = frontend.concat(backend);

console.log(`Frontend launguages: ${frontend} `)
console.log(`Backend launguages: ${backend} `)



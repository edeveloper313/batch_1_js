// Callback Functions — Introduction
function orderPizza(callback) {
  console.log("Pizza is preparing...");

  callback();
}

function notifyCustomer() {
  console.log("Your pizza is ready!");
}

orderPizza(notifyCustomer);

// Real development example: Form submission

function registerUser(name, callback) {
  console.log("Registering user:", name);

  callback();
}

function showSuccessMessage() {
  console.log("Registration successful!");
}

registerUser("Ali", showSuccessMessage);

// 2. Higher-Order Functions

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
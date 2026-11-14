// Funciton decleration

function printSalam() {
  console.log("Salam");
}

for (let i = 0; i < 10; i++) {
  printSalam();
}

// Expression

const printHelloJs = function helloJs() {
  console.log("Hello javascript");
};

printHelloJs();

// Anonymous Funciton

const printHello = function () {
  console.log("Hello");
};

printHello();

// ES6

// Arrow Function

const arrowFunciotn = () => {
  console.log("Arrow Funciton");
};

arrowFunciotn();

// Return KeyWord

const sum = () => {
  let a = 10;
  let b = 10;
  let result = a + b;
  return result;
};

let c = sum();
console.log(`C Value ${c}`);

// Arman Code:
let result = () => {
  let math = 75;
  let urdu = 40;
  let total = math * urdu;
  return total;
};

let apka_result = result();

console.log(apka_result);

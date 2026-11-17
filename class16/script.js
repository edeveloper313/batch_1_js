// function Return Explain
// function sum() {
//   let a = 20;
//   let b = 10;
//   return a+b;
// }

// const result = sum();

// for (let i = 1; i <= result; i++) {
//   console.log(i);
// }

// console.log("next code");

/////////////////////

// Parameters vs Arguments

function sum(value1 = 0, value2 = 0) {
  let a = value1;
  let b = value2;
  return a + b;
}

const result = sum(200, 100);
console.log(result);

// Rest Parameter

function restParmeter(name, ...val) {
  console.log(`name ke value: ${name}`);
  for (const element of val) {
    console.log(element);
  }
}

restParmeter("ali", "ahmed", "kamran");

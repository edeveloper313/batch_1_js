//  && Or
// || ya
// ! Not sign/ reversal

let num  = 1000;
let isHigher = num <= 100; // number chota ha ya phir bara bar ha 100 //

let res = num >= 40 && isHigher;
console.log(res)
if (num >= 90 && isHigher) {
  console.log("A+");
} else if (num >= 80 && isHigher) {
  console.log("A");
} else if (num >= 70 && isHigher) {
  console.log("B+");
} else if (num >= 60 && isHigher) {
  console.log("B");
} else if (num >= 50 && isHigher) {
  console.log("C");
} else if (num >= 40 && isHigher) {
  console.log("D");
} else if (num <= 39 && isHigher) {
  console.log("Fail");
} else {
  console.log(
    `Your value is not valid, please enter a valid number, Your number is: ${num}`,
  );
}

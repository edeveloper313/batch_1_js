// Recursion
function countdown(number) {
  if (number === 0) {
    console.log("Finished!");
    return;
  }

  console.log(number);

  countdown(number - 1);
}

countdown(5);

// Array

const userData = ["kamran", 12, false, false];

const name = userData[0];
const age = userData[1];
const isPresent = userData[2];
const isApply = userData[3];

if (isPresent) {
  console.log(`Name: ${name}, present: ${isPresent}`);
} else {
  console.log(`${name} is Absent`);
}

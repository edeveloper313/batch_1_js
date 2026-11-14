let rollNumber = prompt("Enter Your roll number");

if (!isNaN(rollNumber)) {
  if (rollNumber === 1) {
    console.log(`Your name is Ali Ahmed, your result is A+`);
  } else if (rollNumber == "002") {
    console.log(`Your name is Furqan Salman, your result is B+`);
  } else if (rollNumber == "003") {
    console.log(`Your name is Ahmed Owais, your result is C`);
  } else {
    console.log(`Rolle Number is not Defind`);
  }
} else {
  console.log(
    `Your value is not a number, plz provide a valid age/ number, Your value is this: '${rollNumber.toUpperCase()}'`,
  );
}

console.log("Arman Branch");

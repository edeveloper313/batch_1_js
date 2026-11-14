let color = undefined;
let ColorValue = color ?? "No Color";
// value
switch (ColorValue) {
  // First Case
  case "red":
    console.log("this Color is Red");
    break;

  // Second Case
  case "blue":
    console.log("this Color is Blue");
    break;
  // Third Case
  case "yellow":
    console.log("this Color is yellow");
    break;
  default:
    console.log(`I don't know about this color '${ColorValue.toUpperCase()}'`);
    break;
}

console.log("hello");

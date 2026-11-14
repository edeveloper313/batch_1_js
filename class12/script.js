let userName = "ahmed RaZa"; // apna name
let isCountComplete = 1;
for (let i = 1; i <= userName.length; i++) {
  console.log(i);
  if (isCountComplete === userName.length) {
    let firstLetter = userName.slice(0, 1);
    let otherLetters = userName.slice(1);
    let convertIncappital = firstLetter.toUpperCase();
    let merging = convertIncappital + otherLetters.toLowerCase();
    console.log(`${merging}`);
  }
  isCountComplete++;
}

// 8 Character
// 1 spaical Character
// 1 Capital letter

let userPass = "password";
let val = "";
for (const value of userPass) {
  val += value;
  console.log(val);
}

// "", "p", output: "p"
// "p",,"a", output:"pa"
// "pa","s",output:"pas"
// password

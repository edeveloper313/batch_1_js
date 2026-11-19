// Functions as First-Class Citizens
// function greet() {
//   console.log("Hello!");
// }
// let myFunction = greet;


// IIFE (Immediately Invoked Function Expression)
// (function () {
//     console.log("I am executed immediately!");
// })();


// Call back function

// function orderFood(callback) {
//   console.log("Food is preparing...");

//   callback();
// }

// function foodReady() {
//   console.log("Your food is ready!");
// }

// orderFood(foodReady);



function order(callCreating){
    console.log("Bike making Start...");
    
    const result= callCreating()
    if(!result){
        return "Some error";
    }
    return "Your Bike is ready."
    
}

function bikemaking(){
    console.log("in process...")
    return true;
}

const value=order(bikemaking)

console.log(value)
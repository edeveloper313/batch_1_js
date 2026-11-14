let pEl = document.getElementById("show-result");
let age = 13; // Age here

// Age Checking
let isAdult = 18 <= age ? "not-adult" : "Adult";

pEl.innerText = isAdult; // print age in p element

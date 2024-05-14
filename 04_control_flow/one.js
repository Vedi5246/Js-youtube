//IF 

// const isUserLoggedIn = true
// const temperature = 42

// if(temperature === 42){
//     console.log("temperature is less than 50");
// }
//  else{
//     console.log("temperature is greater than 50");
//  }

// //Comparison Operators
// 3 != 2
//  <, >, <=, >=, !=, ==, ===(check the data type also), !==

// const score = 150

// if(score > 100){
//     let power = "run"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

//implicit scope
const balance = 1000

// if(balance > 500) console.log("test");
//don't  add multiple line code in implicit scope

// if (balance > 500) console.log("test"),console.log("test2");

//Nested If-else
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



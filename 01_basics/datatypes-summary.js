// Primitive

// 7 Types: String, Number, Boolean, null, undefined, symbol, BigInt

let name = "Naveed"
const score = 100
const scoreValue = 100

const isLoggedIn = false
const outideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id === anotherId);

// const bigNumber = 774325623743637263847n //this is BigInt

// Reference (Non-Primitive)

// Arrays, Objects, Functions

const heroes = ["Naveed", "Danyal", "Aryan"];

let myObj = {
    mame: "Naveed",
    age: 24,
    gender: "male"

}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outideTemp);


// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive Data types), Heap (Non-Primitive)

let myYoutubename = "naveed@google.com"

let anotherName = myYoutubename
anotherName = "barakah@google.com"
// console.log(anotherName, myYoutubename);


let userOne = {
    name : "Naveed",
    email: "naveed@hotmail.com"

}

let userTwo = userOne

userTwo.email = "aryan@outlook.com"

console.log(userOne.email);
console.log(userTwo.email);

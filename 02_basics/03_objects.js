// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Naveed",
    "full name": "Muhammad Naveed",
    [mySym]: "mykey1",
    age: 24,
    location: "Lahore",
    email: "Naveed@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]

}

//How to access this object---> 2 ways
//1 -> by dot method i.e objectname.
//2 -> Objectname["keyname"]

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "naveed@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "naveed@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());
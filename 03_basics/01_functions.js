function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("D");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

//console doesnt return the value of the function 
//console just prints
//here are some ways to print the value of function

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
    

}
const result = addTwoNumbers(5, 4)

// console.log("result: ", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return 
//     }

//     return `${username} just logged in`
// }

function loginUserMessage(username = "Aryan"){
    if(!username){
        console.log("please enter a username");
        return 
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Naveed"))

function calculateCartPrice(num1, num2, ...num3){
    return num3
}
// console.log(calculateCartPrice(200, 400, 500, 1000));

//How to pass an Object inside a function

const user = {
    username: "Naveed",
    age: 24
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user)

//we can directly pass the object as below

handleObject({
    username: "Barakah",
    age: 23
})

//We can also pass Array inside a function

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(anyArray){
    return anyArray[2]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 300, 200, 400]));
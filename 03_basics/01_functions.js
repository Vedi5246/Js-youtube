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

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return 
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Naveed"))
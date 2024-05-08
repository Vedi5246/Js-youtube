const user = {
    username: "Naveed",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to github`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Aryan"
// user.welcomeMessage()

// console.log(this);
/*o/p = {} i.e its output will be an empty object inside the node environment
inside a node environment (this) refers to an empty object because there is no context in the global yet*/

// function chai () {
//     let username = "Naveed"
//     console.log(this.username); 
//     //we cant use this in fucntions like we did it in the objects it will give us an undefine value
// }

// chai()


// const chai = function (){
//     let username= "Naveed"
//     console.log(this.username);
// }

const chai = () => {
    let username= "Naveed"
    console.log(this);
}




// chai()

//Basic Arrow Function(Explicit Return i.e we use the return keyword)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//Implicit Return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

//to return object (we have to wrap it inside parantheses())
const addTwo = (num1, num2) => ({username: "Naveed"})


console.log(addTwo(6,7))


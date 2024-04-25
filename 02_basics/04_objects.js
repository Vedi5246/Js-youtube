// const tinderUser = new Object () -> singleton obj
const tinderUser = {} //non singleton obj

tinderUser.id = "abc123"
tinderUser.name = "Aryan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@google.com",
    fullname: {
        userfullname: {
            firstname: "Muhammad",
            lastname: "Naveed"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, obj2} // this syntax is not used

const obj3 = Object.assign({}, obj1, obj2)
// the empty curly braces are optional,
//it just ensures the all the values will be combined 
//and result will be the same
console.log(obj3);
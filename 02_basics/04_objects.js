// const tinderUser = new Object () -> singleton obj
const tinderUser = {} //non singleton obj

tinderUser.id = "abc123"
tinderUser.name = "Aryan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//objects inside object
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
const obj4 = {5: 'a', 6: 'b'}

// const obj3 = {obj1, obj2} // this syntax is not used
//to combine objects this syntax is used
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// the empty curly braces are optional,
//it just ensures that all the values will be combined 
//and result will be the same


//but we will use this syntax commonly(spread operator)
const obj3 = {...obj1, ...obj2, ...obj4}


// console.log(obj3);

//there is another syntax which is used when values are returned from database

const users = [
    {
        id: '1@gmail.com'
    },
    {
        id: '1@gmail.com'
    },
    {
        id: '1@gmail.com'
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

//object de structuring
const course ={
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "Hitesh"
}

course.courseInstructor

const {courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);

//json structure

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},

]



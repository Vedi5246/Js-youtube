// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);

// let myCreatedDate = new Date (2024, 0, 15)
// let myCreatedDate = new Date (2024, 0, 15, 8, 10)

// let myCreatedDate = new Date ("2024-04-25")
let myCreatedDate = new Date ("04-25-2024")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
//to convert it to seconds
// console.log(Date.now()/1000);
//to remove the decimal
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
//to get the exact month and avoid confusion we add +1
console.log(newDate.getDay());

//a very useful method
newDate.toLocaleString('default',{
    weekday: "long"
})


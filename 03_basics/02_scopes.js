// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30

    // console.log("Inner: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one (){
   const  username = "Naveed"

    function two(){
        website: "Github",
        console.log(username);
    }
    // console.log(website);
    // two()
}

one()

//one jese hi execute hota hai oske bad two b execute hota hai agar hum osko comment out karde so we didn't call the func two si if we run it it wont be executed

if (true) {
    const username = "Naveed"
    if (username === "Naveed") {
        const webiste = " google"
        // console.log ( username + webiste );
    }
    // console.log(webiste);
}
// console.log(username);

//function declaration
//we can call the function before its definition in this case
console.log(addOne(6))
function addOne(num){
    return num + 1
}

// addOne(6)

//function expression(when we store the func inside a var)
//we cant call the func before its definition/declaration in this case
console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
// addTwo(5)
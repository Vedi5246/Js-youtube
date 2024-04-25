// Array

const myArr = [0, 1, 2, 3, 4]

const myHeros = ["Naveed", "Aryan", "Inam"]

// we can also declare an array as 
const myArr2 = new Array(6, 7, 8, 9)

// console.log(myArr2[2]);

//Array Methods
myArr.push(6)
// console.log(myArr);
myArr.push(7)
// console.log(myArr);
myArr.pop()

// console.log(myArr);

myArr.unshift(8)
// console.log(myArr);
myArr.shift()  //we dont give argument in shift 
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

const newArr = myArr.join("*")
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice, Splice
// splice changes the original array

console.log("A", myArr);

const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 4)
console.log("C", myArr);
console.log(myn2);







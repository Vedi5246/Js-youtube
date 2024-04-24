const name = "Naveed"
const age = 24

// console.log(name + age + " hobbies");

console.log(`Hello my name is ${name} and my age is ${age}`);   // string interpolation

const gameName = new String('naveed-khan-marwat')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 6)
// console.log(newString);

const anotherString = gameName.slice(-8, 10)
console.log(anotherString);

const newStringone = "    Naveed    "
console.log(newStringone);
console.log(newStringone.trim()); 
//trim removes the start and end spaces

const url = "https://naveed.com/naveed%20khan"

console.log(url.replace('%20', '-'))
console.log(url);

console.log(url.includes('naveed'));
console.log(url.includes('marwat'));

console.log(gameName.split('-'));
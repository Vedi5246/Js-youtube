//Immediately Invoked Function Expression

( () => {
    console.log(`DB CONNECTED`)
})
();

( (name) => {
    console.log(`DB CONNECTED ${name}`)
})
('Naveed');

//here the semicolon is must otherwise error will arise

(function chaiTwo(){
    // named IIFE
    console.log(`DB CONNECTED Two`)
})
();





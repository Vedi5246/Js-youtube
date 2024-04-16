const accountId = 12345
let accountEmail = "naveed123@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;

// accountId = 2  //not allowed

accountEmail = "naveed12345@gmail.com"
accountPassword = "121212"
accountCity = "Peshawar"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
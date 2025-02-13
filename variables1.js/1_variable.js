const accountId= 1
let accountEmail="apsara@gmail.com"
var accountPassword = "12345"
accountCity= "Mohali" // will give variable memory without any keyword
//accountId =2 //cannot re-assign values to const variables
let accountstate; //value undefined
accountEmail="chhetri@gmail.com"
accountPassword="54321"
accountCity="darjeeling"
//console.log(accountId);
/* prefer not to use var 
because of issues in block scope and functional scope*/
console.table([accountEmail,accountPassword,accountCity,accountstate]);
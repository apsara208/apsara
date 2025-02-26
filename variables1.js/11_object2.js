//empty object
//const tinderuser = new Object( // singleton object
const tinderuser={}//non singleton object
tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.isLoggdIn=false
console.log(tinderuser)
const bumbleuser={
    email:"hi@g.com",
    fullname:{
        usefullname:{
            firstname:"apsara",
            lastname:"chhetri"
        }
    }
}
console.log(bumbleuser.fullname.usefullname.firstname)
//? tp check in it whether the value is there or not

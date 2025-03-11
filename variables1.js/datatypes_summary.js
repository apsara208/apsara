//primitive datatype
//7: String,Number,Boolean,BigInt,Symbol,null,undefined
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id===anotherId)

const bigNumber= 3456787976989776433434n  //bigint


//Non primitive datatype/Reference
//Array,Objects,Funtions
const heros=["balveer","shaktimaan","naagraj"]
let myObj={
    name:"apsara",
    age:19,
}
const myFunction=function(){
    console.log("hellow world")
}
console.log(typeof myFunction)
 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//memory stack(primitive), heap(Non primitive)
let myNickName ="apps"
let anothername="appu"
anothername="kanxi"
console.log(myNickName)
console.log(anothername)//kanxi

let user={
    email:"user@google.com", upi:"user@sby"
}
let user2=user
user2.email="user2@gmail.com"
console.log(user2.email)//"user2@gmail.com"
console.log(user.email)//"user2@gmail.com"
console.log(user.upi)
console.log(user2.upi)
//since the heap takes reference from the stack where the user variable is stored along with other variables like myNickName here 
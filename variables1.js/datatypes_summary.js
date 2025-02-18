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
//singleton // constructor method (one of its type)
//Object.create
//object literals
const mySym= Symbol("key1")
const JsUser={
    name: "apsara",
    age:19,
    [mySym]:"mykey",
    "roll number":2331,//cannot be accessed with dot method 
    location:"mohali",
    isLoggedIn: false,
    lastloggedDays: ["monday","saturday"]
}
//console.log(JsUser.name)
//console.log(JsUser["name"])
//console.log(JsUser["roll number"])
//console.log(JsUser.mySym)
//console.log(typeof JsUser.mySym)// is a string instead of a symbol
//console.log(JsUser[mySym])// correct way of fetching a symbol
console.log(typeof JsUser[mySym])

//a SYMBOL is a object that is always unique and usually used as key to avoid collision
//if we dont want anybody to propagate any changes in our data we can frreze an object
//Object.freeze(JsUser)
JsUser.greeting=function(){
    console.log("Hello user")


}
JsUser.greeting2=function(){
    console.log(`Hello user,${this.name}`)

}
JsUser.greeting3=
'hi'//puts the data in
console.log(JsUser.greeting())
console.log(JsUser.greeting2())
console.log(JsUser.greeting3)

console.log(JsUser)
function sayMyName(){
    console.log("a")
    console.log("p")
    console.log("s")
    console.log("a")
    console.log("r")
    console.log("a")
}
//sayMyName()
/*function addTwoNumbers(number1,number2){//parameters
    console.log(number1+number2)
}
addTwoNumbers(3,null)//arguments
//3*/
/*function addTwoNumbers(number1,number2){//parameters
    let result=number1+number2
    return result
    //no operation after return
}
const summ=addTwoNumbers(2,5)
console.log(summ)*/

/*function logginUserMessage(username){
    return `${username} just logged in`
}

console.log(logginUserMessage("apsara"))//apsara just logged in
console.log(logginUserMessage(""))//just logged in
console.log(logginUserMessage())//no value passed 
//undefined [not null]
*/
/*function logginUserMessage(username){
    if(username===undefined){
        console.log("please entr a username")
    }
    else{
    return `${username} just logged in`
    }
}

console.log(logginUserMessage())
//== converts datatypes before comparing them ,abstract equality /loose
//=== doesnt convert datatypes before comparing them,strict equality
 console.log("3"==3)//true
 console.log("3"===3)//false*/
 function calculateCartPrice(...num1){//rest/spread operator
    return num1
 }
 //console.log(calculateCartPrice(200,300,400))

/*const user={
    username:"apsara",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username}
        and price is ${anyobject.price}`)
}
handleObject(user)*/

const myArray=[200,300,400,500]
function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myArray))

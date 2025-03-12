/*const user={
    username:"apsara",
    price:99,
    welcomeMssg: function(){
        console.log(`${this.username},welcome to our website`)
        //console.log(this)
        //{ username: 'sam', price: 99, welcomeMssg: [Function: welcomeMssg] }
    }// this=current context
}
user.welcomeMssg()//apsara,welcome to our website
user.username="sam"
console.log(this)//{}
user.welcomeMssg()//sam,welcome to our website*/

/*const chai =function(){
    let username="hitesh"
    console.log(this.username)
}
chai() //undefined*/
 
const chai =()=>{//arrow function
    let username="hitesh"
    console.log(this.username)
}
chai() //undefined

//ARROW FUNCTION
/*const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(2,3)) //5*/

//IMPLICIT RETURN (arrow function)
const addTwo = (num1,num2)=> num1+num2

console.log(addTwo(2,3))
//end
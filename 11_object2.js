//empty object
//const tinderuser = new Object( )// singleton object
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
const obj1={1:"a",2:"b"}
const obj2={3:"a",1:"b"}

//const obj3={obj1,obj2}
//the objects are stored as different objects inside the new assigned object
//const obj3=Object.assign({},obj1,obj2)//{}
//assigns or appends the object according to the keys of the object
//returns a modified target object
const  obj3={...obj1,...obj2}
//spread operator
console.log(obj3)
const users =[
    {
        id:1,
        name:"apsara"
    },
    {

    },
    {

    }
]
//console.log(users[1].name)
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))//all three returns array
//each entry or key-value pair is made into an array inside the array
console.log(tinderuser.hasOwnProperty("isLoggedIn"))
//to check whether it exists int the object or not 
//boolean output


const course ={
    cousename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}
//course.courseInstructor
const {courseInstructor}=course
//if we want to use course.courseInstructor , after this we cant use only courseInstructor
console.log(courseInstructor)

/*const navbar=() => {

}
navbar(company="hitesh")  //object destructuring*/

//JSON:Java script object notation
/*{
"name":"apsara",
"course":"js",
}*/

//API = Application Programming Interface
// It is a medium to send or fetch data between two Interfaces
//in the form of object like shown above
//or in the form of array [{},{},{}]
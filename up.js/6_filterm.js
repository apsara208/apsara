//const coding=["js","ruby","java","python"]
// const values= coding.forEach((item)=> {
//     console.log(item)
// });
// console.log(values);


// const a  = 5 ? 'false' : 'true';

// console.log(a);

//IMPLICIT RETURN (arrow function)
var a = 5
// console.log(a++);
// console.log(++a);
// console.log(++a);
// console.log(++a);
// console.log(++a);
// console.log(a++); 



const mynums=[1,2,3,4,5,6,7,8,9,10]
/*const selected=mynums.forEach((value)=>{
    if (value===2){
            console.log(value)
    }
})
    */
   //OR
// const eNum=[]
// mynums.forEach((nums)=>{
//     if (nums>4){
//         eNum.push(nums)
//     }
// })
// console.log("eNum=",eNum);

// const aNum=[]
// mynums.filter((nums)=>{
//     if (nums>4){
//         aNum.push(nums)
//     }
// })
// console.log(aNum);



//FILTER:it returns you the values 
// const newnums=mynums.filter((num)=>num>5)
// console.log(newnums);

//when you scope it '{}'. you will have to mandatorily command return
/*
const newnums2=mynums.filter((num)=>{
    return num>4})
console.log(newnums2);
*/

const books=[
   
    {title:'book one',genre:'fiction',publish:1981,edition:2003},
    {title:'book two',genre:'non-fiction',publish:1992,edition:2008},
    {title:'book three',genre:'history',publish:1999,edition:2020}
]
const userBooks=books.filter((bk)=>bk.genre==='history')
console.log(userBooks);
const userBooks1=books.filter((bk)=>bk.publish>=1990)
console.log(userBooks);
//
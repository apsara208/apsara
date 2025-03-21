let score= "33abc";
//const {score}=req.body 
console.log(typeof score);
console.log(typeof(score));
let valueInNumber= Number(score)
console.table([typeof valueInNumber,valueInNumber]);//NaN =not a number
let a= null;
console.log(typeof a);//object
let b= undefined;
console.log(typeof b);//undefined
let c= true
console.log(typeof c)//boolean
//String cannot be changed into a Number(NaN)
//"33"===33
//"33abc"=== NaN
//true === 1; false ===0
let isLoggedIn= 1 
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]
//marvel_heroes.push(dc)
//console.log(marvel_heroes)//array in array
//console.log(marvel_heroes[3][2])//flash
//marvel_heroes.concat(dc)
//console.log(marvel_heroes)   //array in array again
// since doesnt change anything in the existing array therefore we need to 
//initialize a new array to store the concatinated value
const allheroes= marvel_heroes.concat(dc)
console.log(allheroes)

const allheroes2=[...marvel_heroes, ...dc]
console.log(allheroes2)
 const cplx_array=[1,2,3,[4,5,6],7,[4,[5]]]
 const cplx_array2=cplx_array.flat(1)//outer braces not hindered
console.log(cplx_array2)
console.log(Array.isArray("aps"))
console.log(Array.from("apsarachhetri"))//each single alphabet into an element of the array

const myArr=[0,1,2,3,4,5]//list has similar type of elements 
//array can contain different type of elements

console.log(myArr[0])
//arrays have shallow copies
/*shallow copy-of an object is a copy
 whose properties share the same reference point
 as those of source object from which the copy was made
 (kuch change karenge to array me bhi change hoga
 -------------------------------------------------
 Deep copy-whose properties donot share sam3e reference point*/

const heroes=["hulk",'thor',"spidey"]
const newArr= new Array(1,2,3,4)

//Array Methods
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(0)// add infront
console.log(myArr)
myArr.shift()//remove from front
console.log(myArr)

const Arr1=myArr.join()//converts the elements of the aray into string 
//whcihc is no longer an array
console.log(Arr1)
console.log(typeof Arr1
)
 //slice and splice
  console.log("a ",myArr)

  const myn1=myArr.slice(1,4)//from 1 to 3rd
console.log(myn1)
console.log("o  ",myArr)
const myn2=myArr.splice(1,4)//from 1 to 4th +pops them out too
console.log(myn2)
console.log("o  ",myArr)

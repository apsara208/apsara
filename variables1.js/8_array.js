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
const name="apsara"
const repoCount=50
//console.log(name+repoCount+"value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//string intercolation
const gameName = new String("appa")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("p"))//first occuring index

const newString = gameName.substring(0,2)// 0 and 1 index chararcters
console.log(newString)//ap

 const newString1="     mahakal      "
 console.log(newString1.trim())

 const url="https://hello.com/hello%20bye"
 console.log(url.replace("%20","_"))
 console.log(url.includes("sundar"))//checks wheather a variables includes the given data or not
 console.log(url.split(_))
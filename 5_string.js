const name="apsara"
console.log(name[0])
const repoCount=50
//let value=undefined
//console.log(Number(name) + repoCount = value)
 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//string intercolation
const gameName = new String("appa")
console.log(gameName[0])//a
console.log(gameName.__proto__)//{}
console.log(gameName.length)//4
console.log(gameName.toUpperCase())//APPA
console.log(gameName.charAt(2))//p
console.log(gameName.indexOf("p"))//first occuring index,1

const newString = gameName.substring(0,2)// 0 and 1 index chararcters
console.log(newString)//ap

 const newString1="     mahakal      "
 console.log(newString1.trim())//mahakal

 const url="https://hello.com/hello%20bye"
 console.log(url.replace("%20","_"))
 const url2=url.replace("%20","_")//save first 
 console.log(url.includes("sundar"))//checks wheather a variables includes the given data or not
 console.log(url2.split("_"))
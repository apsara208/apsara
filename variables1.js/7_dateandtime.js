//arbitary date is 1 jan,1970
//further temporal to be used
let myDate=new Date()
console.log(myDate.toString())
//Thu Feb 20 2025 14:26:10 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//Thu Feb 20 2025
console.log(myDate.toLocaleString())//2/20/2025, 2:30:04 PM
let myDate1=new Date(2025,1,20)/*jan 20 2026 ,since month in js starts from 0 
so 0 is jan and 12 is again jan but of the next year*/
console.log(myDate.toDateString())
let myDate2=new Date(2025,12,20,5,2)//date and time
console.log(myDate2.toDateString())
console.log(myDate2.toLocaleString())//console.log(myDate2.toDateString())//time not elaborated here
console.log(myDate2.toString())//jan 20 2026, 5:02 am
let stringDate=new Date("2023-01-2")
//in string date the mm will require 2 digit no. and 
//the jan will start from 1 no from 0
console.log(stringDate.toDateString())
let myTimeStamp=Date.now()//gets the timestamp 
console.log(myTimeStamp)
console.log(myTimeStamp.toLocaleString())
console.log("hi")
console.log(myDate1.getTime())//time,date,month ,etc etc anything
console.log(Math.round(Date.now()/1000))
//when we do get month .log(Date.getMonth()+1) since jan =0 so to make it 1
a=myDate.toLocaleString("default",{
    weekday:"short",//thu , whereas long is thursday
    //timeZone:""
})
console.log(a)

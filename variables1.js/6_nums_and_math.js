const score=400
console.log(score)
const balance = new Number(100)
console.log(balance)
const day={morning:"good",
    noon:"sunny", night:"cold"
}
console.log(day)
console.log(balance.toString())
console.log(day.morning.toString())
console.log(balance.toFixed(2))//rounds off after the decimal
//console.log(balance.toPrecision(2))//dont do this

const otherNumber =23.8966
console.log(otherNumber.toFixed(2))
console.log(otherNumber.toPrecision(2))//rounds off in this number of digits

const hundreds =100000
console.log(hundreds.toLocaleString())//commas in between according to the us standart of counting
console.log(hundreds.toLocaleString('en-IN'))//commas acc to indian standard

//+++++++++++++++++Maths++++++++++++++++++++++
console.log(Math)//math is an object
console.log(Math.abs(-4))//4,gives absolute value
console.log(Math.abs(4))//4
console.log(Math.round(1.2))//roundoff
console.log(Math.ceil(1.2))//anything above n is n+1,ceil==up
console.log(Math.floor(1.7))//1,bottom value
console.log(Math.min(1,8,0,4,7,15))
console.log(Math.max(1,8,4,7,15))
console.log(Math.random())//in between 0 and 1
console.log((Math.random()*10)+1)
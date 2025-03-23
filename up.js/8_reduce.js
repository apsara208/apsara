const myNums=[1,2,3]
/*const myTotal=myNums.reduce(function(acc,curval){
    console.log(`acc: ${acc} and curval:${curval}`);
    
    return acc+curval;

},0)
console.log(myTotal);  */
/*acc: 0 and curval:1
acc: 1 and curval:2
acc: 3 and curval:3
6*/

const myTotal =myNums.reduce((acc,cur)=> acc+cur,0)
console.log(myTotal);

const shopping=[
    {item:"tea" ,price:20},
    {item:"milk",price:30},
    {item:"fruits",price:400}]
const bill= shopping.reduce((acc,item)=>acc+item.price,0)
console.log(bill);

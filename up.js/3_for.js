//FOR

/*
for (let index = 0; index < 10; index++) {
    const element =index
    console.log(element)
}
*/

/*
for (let i = 0; i < 6; i++) {
    const element = i
    if(element===5){
        console.log("5 is the best value")
    }
    console.log(element)
}
    */
/*0
1
2
3
4
5 is the best value
5*/

//BRANCHED FOR LOOP
/*
for (let j = 0;  j<=5 ; j++)  {
console.log(`outer loop ${j}`)
for (let k = 0; k < 5; k++) {
    console.log(`inner loop value ${k} and inner loop ${j}`)
    
} }
    */
/*outer loop 0
inner loop value 0 and inner loop 0
inner loop value 1 and inner loop 0
inner loop value 2 and inner loop 0
inner loop value 3 and inner loop 0
inner loop value 4 and inner loop 0
outer loop 1
inner loop value 0 and inner loop 1
inner loop value 1 and inner loop 1
inner loop value 2 and inner loop 1
inner loop value 3 and inner loop 1
inner loop value 4 and inner loop 1
outer loop 2
inner loop value 0 and inner loop 2
inner loop value 1 and inner loop 2
inner loop value 2 and inner loop 2
inner loop value 3 and inner loop 2
inner loop value 4 and inner loop 2
outer loop 3
inner loop value 0 and inner loop 3
inner loop value 1 and inner loop 3
inner loop value 2 and inner loop 3
inner loop value 3 and inner loop 3
inner loop value 4 and inner loop 3
outer loop 4
inner loop value 0 and inner loop 4
inner loop value 1 and inner loop 4
inner loop value 2 and inner loop 4
inner loop value 3 and inner loop 4
inner loop value 4 and inner loop 4
outer loop 5
inner loop value 0 and inner loop 5
inner loop value 1 and inner loop 5
inner loop value 2 and inner loop 5
inner loop value 3 and inner loop 5
inner loop value 4 and inner loop 5*/
 
/*for (let j = 1;  j<=5 ; j++)  {
    for (let k = 1; k < 5; k++) {
        console.log(j+'*'+k+"="+j*k)
        
    } }
        */
    /*1*1=1
1*2=2
1*3=3
1*4=4
2*1=2
2*2=4
2*3=6
2*4=8
3*1=3
3*2=6
3*3=9
3*4=12
4*1=4
4*2=8
4*3=12
4*4=16
5*1=5
5*2=10
5*3=15
5*4=20
 */
/*
let myarray=["a","b","c"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
}*/

//BREAK : terminates the running code immediately
/*for (let m = 0; m < 4; m++) {
    if (m===2){
        console.log("2 detected")
        break
    }
    console.log(m)
    */
/*js
0
1
2 detected
*/

//CONTINUE: Skips the current itertion
/*for (let m = 0; m < 4; m++) {
    if (m===2){
        console.log("2 detected")
        continue
    }
    console.log(m)}
    */
/*0
1
2 detected
3*/
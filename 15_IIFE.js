//Immediately Invoked Function Expression(IIFE)

(function chai(){
    console.log("drink")
})();//here semi colon is really important because it instructs us to end the fucntion before execution
//function wrapping and execution call
//IIfe used to overcome the pollutions of global scope by creating a private scope
//it is ecexuted as soon as it is created or they are self executing functions
( (name)=> {
    console.log(`drink more ${name}`);
})("taylor")

const user={
    username:"apsara",
    price:99,
    welcomeMssg: function(){
        console.log(`${this.username},welcome to our website`)
        //console.log(this)
        //{ username: 'sam', price: 99, welcomeMssg: [Function: welcomeMssg] }*/
    }// this=current context
}
user.welcomeMssg()//apsara,welcome to our website
user.username="sam"
console.log(this)//{}
user.welcomeMssg()//sam,welcome to our website

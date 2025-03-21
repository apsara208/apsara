//const coding=['js','ruby','java','python']
/*
coding.forEach(function(item){
console.log(item);

})
*/
//if want to apply function on each item of an array

//arrow function of foreach
/*
coding.forEach((item)=>{
    console.log(item)
}) */
/*
    coding.forEach((item,index,arr)=>{
        console.log(item,index,arr)
    }) */

const mycode=[
    {languageName:'javascript',
        languageFile:'js'
    },
    {},
    {}
]
mycode.forEach((item)=>{
    console.log(item);
    
    console.log(item.languageFile)
})
/*{ languageName: 'javascript', languageFile: 'js' }
js
{}
undefined
{}
undefined */
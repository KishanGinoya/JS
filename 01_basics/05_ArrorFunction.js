const a={
    username:"kishan",
    rollno:12,
    WelcomeMessage:function(){
        console.log(`${this.username} welcome to this web site`);
        
    }
}
a.WelcomeMessage()
console.log(this);
// function abc(){
//     console.log(this)
    
// }
// const abc=function(){
//     console.log(this)
    
// abc()
// }
const a1=()=>{
    console.log(this)
    
}


// const a2=()=>{
//     return "with explicit return keyword" 
// }
// const a2=()=> "with implicit " 
// console.log(a2())

const a2=()=> ("with implicit ") 
console.log(a2())
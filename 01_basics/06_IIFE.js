//Immedietely Invoked Function Expressions(IIFE)

(function one(){
    //named IIFE
    console.log("DB Connected");
})();//semicolon must if we want to add another iife

((name)=>{
    console.log(`DB Connected ${name}`);
})('Kishan')
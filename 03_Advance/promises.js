const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('Async Task is complete')
        //there are connection between then and resolve
        resolve()//this must be required for run then statement
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2')
        resolve()//this must be required for run then statement
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        //for passing data
        resolve({username:"Kishan",email:"Kishan@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})
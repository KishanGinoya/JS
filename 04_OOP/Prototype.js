let myHeros=["thor","spiderman"]

//object
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}

//we can use this in all our object because there are in js all are object so we can implement in array,string or object or etc
Object.prototype.kishan=function(){
    console.log("this is kishan`s function");
    
}
heroPower.kishan()//we can access kishan function in object
myHeros.kishan()//we can access kishan function in array

Array.prototype.heyKishan=function(){//we can only access in array only
    console.log(`Kishan says hello`);
}

myHeros.heyKishan()
// heroPower.heyKishan()//this will generate error because object can not access function of array but array access objects function

//string - trueLength function access for all string
let anotherUsername="kishan    "
String.prototype.trueLength=function(){
    console.log(`${this}`);//in case of we access with anotherusername then there are kishan print in this 
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ram".trueLength()

//inheritance --- old method

const User={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport//we can access Teaching support all property
}
Teacher.__Proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


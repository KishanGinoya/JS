const user={
    username:"kishan",
    loginCount:8,
    Signedin:true,

    getUserDetails:function(){
        // console.log("Got user from database");
        // console.log(`username:${this.username}`);
        // console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,isLoggedIn)
{
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        log(`welcome: ${username}`)
    }

    return this//this will not effect wheather we write return this or not write
}
//this will not create differnent block of userOne and userTwo
// const userOne=User("kishan",12,true)
// const userTwo=User("paras",11,true)

const userOne=new User("kishan",12,true)
const userTwo=new User("paras",11,true)
console.log(userOne.constructor)
console.log(userTwo)